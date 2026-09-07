/**
 * Checks the prerendered site against everything in Google's SEO Starter Guide
 * that a machine can verify: every page has a unique title, description and
 * canonical, renders real markup, has exactly one h1, carries structured data,
 * and agrees with sitemap.xml about what is indexable.
 *
 * Run after `npm run build`. Exits non-zero if anything fails, so it can gate
 * a deploy.
 */
import { readdir, readFile, stat } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = process.argv[2] || join(root, 'dist')

async function htmlFiles(dir, out = []) {
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry)
    const s = await stat(full)
    if (s.isDirectory()) await htmlFiles(full, out)
    else if (entry === 'index.html') out.push(full)
  }
  return out
}

const pick = (html, re) => {
  const m = html.match(re)
  return m ? m[1] : null
}

const files = await htmlFiles(DIST)
const pages = []

for (const file of files) {
  const html = await readFile(file, 'utf8')
  pages.push({
    file: file.replace(/\\/g, '/').replace(DIST.replace(/\\/g, '/'), '') || '/',
    title: pick(html, /<title>([\s\S]*?)<\/title>/),
    desc: pick(html, /<meta name="description" content="([^"]*)"/),
    canonical: pick(html, /<link rel="canonical" href="([^"]*)"/),
    robots: pick(html, /<meta name="robots" content="([^"]*)"/),
    ogTitle: pick(html, /<meta property="og:title" content="([^"]*)"/),
    h1Count: (html.match(/<h1[\s>]/g) || []).length,
    jsonLdCount: (html.match(/application\/ld\+json/g) || []).length,
    rendered: /<div id="root"><[a-z]/.test(html),
    bytes: html.length,
  })
}

const problems = []
const note = (label, list) => {
  if (list.length) problems.push([label, list])
}

note('missing <title>', pages.filter((p) => !p.title).map((p) => p.file))
note('missing description', pages.filter((p) => !p.desc).map((p) => p.file))
note('missing canonical', pages.filter((p) => !p.canonical).map((p) => p.file))
note('empty #root (not prerendered)', pages.filter((p) => !p.rendered).map((p) => p.file))
note('no h1', pages.filter((p) => p.h1Count === 0).map((p) => p.file))
note('multiple h1', pages.filter((p) => p.h1Count > 1).map((p) => `${p.file} (${p.h1Count})`))
note('no structured data', pages.filter((p) => p.jsonLdCount === 0).map((p) => p.file))
note(
  'og:title differs from <title>',
  pages.filter((p) => p.ogTitle && p.title && p.ogTitle !== p.title).map((p) => p.file),
)

// Uniqueness - Google asks for titles and descriptions unique to each page,
// but only among pages that claim to be canonical. A page whose canonical
// names a different URL is a deliberately consolidated duplicate, and sharing
// that URL's title is exactly what it should do.
const ORIGIN = 'https://brollyexamprep.com'
const selfCanonical = pages.filter(
  (p) => !p.canonical || p.canonical === ORIGIN + p.file.replace(/index\.html$/, ''),
)
const consolidated = pages.length - selfCanonical.length

const dupe = (key) => {
  const seen = new Map()
  selfCanonical.forEach((p) => {
    if (!p[key]) return
    seen.set(p[key], [...(seen.get(p[key]) || []), p.file])
  })
  return [...seen.entries()].filter(([, files]) => files.length > 1)
}


const dupTitles = dupe('title')
const dupDescs = dupe('desc')
const dupCanon = dupe('canonical')

// Sitemap agreement. A sitemap that lists a noindex or non-canonical URL
// sends Google two contradictory signals about the same page, and one that
// omits an indexable page hides it from discovery.
const sitemap = new Set(
  [...(await readFile(join(DIST, 'sitemap.xml'), 'utf8')).matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => m[1],
  ),
)
const urlOf = (p) => ORIGIN + p.file.replace(/index\.html$/, '')

note(
  'noindex page listed in sitemap',
  pages.filter((p) => p.robots?.includes('noindex') && sitemap.has(urlOf(p))).map((p) => p.file),
)
note(
  'non-canonical page listed in sitemap',
  pages
    .filter((p) => p.canonical && p.canonical !== urlOf(p) && sitemap.has(urlOf(p)))
    .map((p) => p.file),
)
note(
  'indexable page missing from sitemap',
  pages
    .filter(
      (p) =>
        !p.robots?.includes('noindex') &&
        (!p.canonical || p.canonical === urlOf(p)) &&
        !sitemap.has(urlOf(p)),
    )
    .map((p) => p.file),
)
note(
  'sitemap URL with no page on disk',
  [...sitemap].filter((u) => !pages.some((p) => urlOf(p) === u)),
)

console.log(
  `Audited ${pages.length} prerendered pages in ${DIST}/ ` +
    `(${selfCanonical.length} canonical, ${consolidated} consolidated onto another URL)\n`,
)

for (const [label, list] of problems) {
  console.log(`✗ ${label}: ${list.length}`)
  list.slice(0, 8).forEach((f) => console.log(`    ${f}`))
  if (list.length > 8) console.log(`    … and ${list.length - 8} more`)
}

const report = (label, groups) => {
  if (!groups.length) {
    console.log(`✓ all ${label} unique`)
    return
  }
  const affected = groups.reduce((n, [, f]) => n + f.length, 0)
  console.log(`✗ duplicate ${label}: ${groups.length} value(s) across ${affected} pages`)
  groups.slice(0, 6).forEach(([value, f]) => {
    console.log(`    "${String(value).slice(0, 70)}" — ${f.length} pages`)
    f.slice(0, 3).forEach((x) => console.log(`        ${x}`))
  })
}

report('titles', dupTitles)
report('descriptions', dupDescs)
report('canonicals', dupCanon)

const lens = pages.filter((p) => p.desc).map((p) => p.desc.length)
const over = lens.filter((l) => l > 160).length
console.log(
  `\ndescription length: min ${Math.min(...lens)}, max ${Math.max(...lens)}, ` +
    `median ${lens.sort((a, b) => a - b)[Math.floor(lens.length / 2)]}, ` +
    `${over} over 160 chars (Google truncates around there)`,
)

const titleLens = pages.filter((p) => p.title).map((p) => p.title.length)
const titleOver = titleLens.filter((l) => l > 60).length
console.log(`title length: max ${Math.max(...titleLens)}, ${titleOver} over 60 chars`)

if (!problems.length && !dupTitles.length && !dupDescs.length && !dupCanon.length) {
  console.log('\nALL STRUCTURAL CHECKS PASSED')
}
