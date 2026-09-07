/**
 * Writes dist/sitemap.xml from the same route list the prerender uses, so the
 * sitemap can never advertise a URL the build did not produce.
 *
 * Google treats a sitemap as a hint about what exists, not an instruction to
 * index, which is why noindex pages (search, login, register) are excluded
 * here as well as in the pages themselves — listing a noindex URL sends two
 * contradictory signals.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(root, 'dist')
const MANIFEST = join(root, 'dist-ssr', 'prerendered.json')
const SSR_ENTRY = pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href

const ORIGIN = 'https://brollyexamprep.com'

const esc = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * Prefer what the prerender actually wrote. Falling back to the full route
 * list only matters if this is run on its own, without a prerender first.
 */
async function routesToList() {
  try {
    return JSON.parse(await readFile(MANIFEST, 'utf8'))
  } catch {
    const { allRoutes } = await import(SSR_ENTRY)
    return allRoutes()
  }
}

async function main() {
  const all = await routesToList()

  // A sitemap should list canonical URLs only. A page that names a different
  // URL as its canonical still has to be crawlable, but advertising it here
  // would ask Google to index a URL the page itself disclaims.
  const routes = all.filter(
    (route) => !route.canonical || route.canonical === ORIGIN + route.path,
  )
  const dropped = all.length - routes.length

  const today = new Date().toISOString().slice(0, 10)

  const body = routes
    .map(({ path, changefreq, priority }) =>
      [
        '  <url>',
        `    <loc>${esc(ORIGIN + path)}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n'),
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

  await mkdir(DIST, { recursive: true })
  await writeFile(join(DIST, 'sitemap.xml'), xml, 'utf8')
  console.log(
    `sitemap: ${routes.length} URLs written to dist/sitemap.xml` +
      (dropped ? ` (${dropped} non-canonical URL(s) omitted)` : ''),
  )
}

main()
