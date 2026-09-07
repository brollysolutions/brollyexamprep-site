/**
 * Writes a real HTML file for every indexable route.
 *
 * Why this exists
 * ---------------
 * Vite ships one index.html and lets React Router swap pages underneath it.
 * That is fine for a visitor, but it means every URL on the site is served
 * with the homepage's title, description and canonical until JavaScript runs.
 * Googlebot does render JavaScript, so it eventually sees the right tags — but
 * it queues that render separately, and the crawlers behind link previews on
 * WhatsApp, Slack, LinkedIn, Facebook and X never run JavaScript at all. Every
 * shared link therefore showed the homepage blurb.
 *
 * After this step each URL is a static file whose head is already correct, so
 * the tags are there on the first byte. React still takes over on load, so
 * navigation inside the site stays instant.
 *
 * Run after `vite build` and `vite build --ssr`; see the build script.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(root, 'dist')
const SSR_ENTRY = pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/**
 * Swaps the content of a tag that index.html already carries. A function is
 * used as the replacement so that `$` inside a description is never treated
 * as a capture-group reference.
 */
function replaceTag(html, pattern, value) {
  if (value === undefined || value === null || value === '') return html
  return html.replace(pattern, () => value)
}

/** Rewrites the shared template's head for one route. */
function buildHead(template, head) {
  let html = template

  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(head.title)}</title>`)

  /** Replaces a `<meta name=…>` if the template has one, otherwise appends it. */
  const setName = (name, content) => {
    if (!content) return
    const re = new RegExp(`<meta\\s+name="${name}"\\s+content="[^"]*"\\s*/?>`)
    const tag = `<meta name="${name}" content="${esc(content)}" />`
    html = re.test(html) ? html.replace(re, () => tag) : html.replace('</head>', `  ${tag}\n</head>`)
  }

  /** The same for `<meta property=…>`, which is what Open Graph uses. */
  const setProp = (prop, content) => {
    if (!content) return
    const re = new RegExp(`<meta\\s+property="${prop}"\\s+content="[^"]*"\\s*/?>`)
    const tag = `<meta property="${prop}" content="${esc(content)}" />`
    html = re.test(html) ? html.replace(re, () => tag) : html.replace('</head>', `  ${tag}\n</head>`)
  }

  setName('description', head.description)
  setName('robots', head.robots)
  setName('twitter:title', head.title)
  setName('twitter:description', head.description)
  setName('twitter:image', head.image)

  setProp('og:title', head.title)
  setProp('og:description', head.description)
  setProp('og:url', head.canonical)
  setProp('og:type', head.type)
  setProp('og:image', head.image)

  html = replaceTag(
    html,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${esc(head.canonical)}" />`,
  )

  // Page-level structured data, on top of the site-wide graph already in the
  // template. Each route gets its own script so the two never merge badly.
  if (head.jsonLd && head.jsonLd.length) {
    const json = JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')
    html = html.replace(
      '</head>',
      `  <script type="application/ld+json">${json}</script>\n</head>`,
    )
  }

  return html
}

async function main() {
  const template = await readFile(join(DIST, 'index.html'), 'utf8')
  const { render, prerenderRoutes } = await import(SSR_ENTRY)

  const routes = prerenderRoutes()
  const written = []
  const noindexed = []
  const failures = []

  for (const route of routes) {
    const { path } = route
    try {
      const { html, head } = render(path)

      const page = buildHead(template, head).replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`,
      )

      const outDir = path === '/' ? DIST : join(DIST, path)
      await mkdir(outDir, { recursive: true })
      await writeFile(join(outDir, 'index.html'), page, 'utf8')

      // Search, login and register are written like any other page — they have
      // to be served as themselves rather than falling through to the SPA
      // shell — but their noindex tag keeps them out of the index, so they are
      // also kept out of the manifest the sitemap is built from.
      if (head.robots?.includes('noindex')) {
        noindexed.push(path)
        continue
      }

      // The canonical travels with the route so the sitemap can drop any URL
      // that points its canonical somewhere else.
      written.push({ ...route, canonical: head.canonical })
    } catch (error) {
      failures.push(`${path} — ${error.message}`)
    }
  }

  // A real 404 document, rendered through the catch-all route. Nothing serves
  // it yet — the host still falls back to index.html for unknown URLs, which
  // answers them with the homepage and a 200 — but having the file on disk is
  // what a host needs before it can be pointed at (see the note in nginx.conf).
  try {
    const { html, head } = render('/this-path-does-not-exist')
    await writeFile(
      join(DIST, '404.html'),
      buildHead(template, head).replace('<div id="root"></div>', `<div id="root">${html}</div>`),
      'utf8',
    )
  } catch (error) {
    failures.push(`404.html — ${error.message}`)
  }

  // The sitemap is generated from this rather than from allRoutes(), so it can
  // only ever list URLs that were actually produced. It lives outside dist/ so
  // it is not deployed.
  await writeFile(
    join(root, 'dist-ssr', 'prerendered.json'),
    JSON.stringify(written, null, 2),
    'utf8',
  )

  console.log(
    `prerender: ${written.length + noindexed.length}/${routes.length} routes written to dist/` +
      (noindexed.length ? ` (${noindexed.length} noindex, not in sitemap)` : ''),
  )
  if (failures.length) {
    console.error(`prerender: ${failures.length} route(s) failed`)
    failures.slice(0, 20).forEach((f) => console.error(`  ${f}`))
    process.exitCode = 1
  }
}

main()
