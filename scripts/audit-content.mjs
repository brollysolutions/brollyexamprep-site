/**
 * Audits the rendered site for content and crawl-quality problems that the
 * structural SEO audit intentionally does not cover. Run after `npm run build`.
 * It writes machine-readable evidence to reports/ and exits non-zero only for
 * objective failures (broken internal links or invalid JSON-LD).
 */
import { createHash } from 'node:crypto'
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = process.argv[2] || join(root, 'dist')
const REPORTS = join(root, 'reports')
const ORIGIN = 'https://brollyexamprep.com'

async function htmlFiles(dir, out = []) {
  for (const entry of await readdir(dir)) {
    const full = join(dir, entry)
    const info = await stat(full)
    if (info.isDirectory()) await htmlFiles(full, out)
    else if (entry === 'index.html') out.push(full)
  }
  return out
}

const decode = (value = '') =>
  value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))

const textOf = (html) =>
  decode(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim()

const attr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}=["']([^"']*)["']`, 'i'))
  return match ? decode(match[1]) : null
}

const routeOf = (file) => {
  const rel = relative(DIST, file).replace(/\\/g, '/')
  return rel === 'index.html' ? '/' : `/${rel.replace(/index\.html$/, '')}`
}

const normalizeInternal = (href) => {
  if (!href || /^(?:mailto:|tel:|javascript:|data:|#)/i.test(href)) return null
  try {
    const url = new URL(href, ORIGIN)
    if (url.origin !== ORIGIN && url.hostname !== 'www.brollyexamprep.com') return null
    const clean = url.pathname.replace(/\/{2,}/g, '/')
    if (/\.[a-z0-9]{2,5}$/i.test(clean)) return clean
    return clean.endsWith('/') ? clean : `${clean}/`
  } catch {
    return null
  }
}

const csv = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`
const files = await htmlFiles(DIST)
const routes = new Set(files.map(routeOf))
const pages = []
const invalidSchemas = []

for (const file of files) {
  const html = await readFile(file, 'utf8')
  const route = routeOf(file)
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] || ''
  const mainText = textOf(main)
  const hrefs = [...html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["'][^>]*>/gi)].map((m) => decode(m[1]))
  const internal = [...new Set(hrefs.map(normalizeInternal).filter(Boolean))]
  const external = hrefs.filter((href) => /^https?:/i.test(href) && !normalizeInternal(href))
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0])
  const headings = [...main.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
    level: Number(m[1]),
    text: textOf(m[2]),
  }))
  const headingSkips = headings
    .slice(1)
    .filter((heading, index) => heading.level > headings[index].level + 1)
    .map((heading) => `h${heading.level}: ${heading.text}`)
  const schemas = []
  for (const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      schemas.push(JSON.parse(match[1]))
    } catch (error) {
      invalidSchemas.push({ route, error: error.message })
    }
  }
  const schemaTypes = [...new Set(schemas.flatMap((schema) => {
    const nodes = schema['@graph'] || (Array.isArray(schema) ? schema : [schema])
    return nodes.flatMap((node) => [node?.['@type']].flat()).filter(Boolean)
  }))]
  const lower = mainText.toLowerCase()
  const flags = []
  const flagPatterns = [
    ['unfinished', /still being prepared|full written guide is still|being written|not live yet/],
    ['template content', /template records|placeholder|wire .* cms/],
    ['unverified freshness', /updated every day|updated daily|badge[^.]{0,20}live/],
  ]
  flagPatterns.forEach(([label, pattern]) => pattern.test(lower) && flags.push(label))
  const canonical = attr(html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i)?.[0] || '', 'href')
  const robots = attr(html.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i)?.[0] || '', 'content') || ''
  const contentHash = createHash('sha1')
    .update(mainText.toLowerCase().replace(/\b\d+\b/g, '#'))
    .digest('hex')

  pages.push({
    route,
    canonical,
    indexable: !robots.includes('noindex') && canonical === `${ORIGIN}${route}`,
    words: mainText ? mainText.split(/\s+/).length : 0,
    internal,
    external,
    images: images.length,
    imagesMissingAlt: images.filter((tag) => attr(tag, 'alt') === null).length,
    imagesMissingDimensions: images.filter((tag) => attr(tag, 'width') === null || attr(tag, 'height') === null).length,
    headingSkips,
    schemaTypes,
    flags,
    contentHash,
  })
}

const brokenLinks = []
for (const page of pages) {
  for (const target of page.internal) {
    if (target.startsWith('/assets/')) continue
    if (/\.[a-z0-9]{2,5}$/i.test(target)) {
      try {
        await stat(join(DIST, target))
      } catch {
        brokenLinks.push({ source: page.route, target })
      }
    } else if (!routes.has(target)) {
      brokenLinks.push({ source: page.route, target })
    }
  }
}

const incoming = new Map(pages.map((page) => [page.route, new Set()]))
pages.forEach((page) => page.internal.forEach((target) => incoming.get(target)?.add(page.route)))
const orphans = pages
  .filter((page) => page.indexable && page.route !== '/' && incoming.get(page.route)?.size === 0)
  .map((page) => page.route)
const exactDuplicateGroups = [...Map.groupBy(pages.filter((page) => page.indexable), (page) => page.contentHash)]
  .map(([, group]) => group.map((page) => page.route))
  .filter((group) => group.length > 1)

const inventoryRows = [
  ['URL', 'Indexable', 'Words', 'Incoming internal links', 'Outgoing internal links', 'External citations', 'Images', 'Images missing alt', 'Images missing dimensions', 'Heading skips', 'Schema types', 'Flags', 'Suggested action'],
  ...pages.sort((a, b) => a.route.localeCompare(b.route)).map((page) => {
    const suggested = !page.indexable
      ? 'noindex'
      : page.flags.length
        ? 'improve'
        : 'keep'
    return [
      `${ORIGIN}${page.route}`,
      page.indexable,
      page.words,
      incoming.get(page.route)?.size || 0,
      page.internal.length,
      page.external.length,
      page.images,
      page.imagesMissingAlt,
      page.imagesMissingDimensions,
      page.headingSkips.length,
      page.schemaTypes.join('|'),
      page.flags.join('|'),
      suggested,
    ]
  }),
]

await mkdir(REPORTS, { recursive: true })
await writeFile(join(REPORTS, 'content-inventory.csv'), inventoryRows.map((row) => row.map(csv).join(',')).join('\n'), 'utf8')
await writeFile(join(REPORTS, 'rendered-site-audit.json'), JSON.stringify({
  generatedAt: new Date().toISOString(),
  pages: pages.length,
  indexablePages: pages.filter((page) => page.indexable).length,
  brokenLinks,
  invalidSchemas,
  orphans,
  exactDuplicateGroups,
  externalLinks: [...new Set(pages.flatMap((page) => page.external))].sort(),
  flaggedPages: pages.filter((page) => page.flags.length).map((page) => ({ route: page.route, flags: page.flags })),
  headingSkips: pages.filter((page) => page.headingSkips.length).map((page) => ({ route: page.route, skips: page.headingSkips })),
  imageIssues: pages.filter((page) => page.imagesMissingAlt || page.imagesMissingDimensions).map((page) => ({
    route: page.route,
    missingAlt: page.imagesMissingAlt,
    missingDimensions: page.imagesMissingDimensions,
  })),
}, null, 2), 'utf8')

console.log(`Content audit: ${pages.length} rendered pages (${pages.filter((page) => page.indexable).length} indexable)`)
console.log(`Broken internal links: ${brokenLinks.length}`)
console.log(`Invalid JSON-LD blocks: ${invalidSchemas.length}`)
console.log(`Orphan indexable pages: ${orphans.length}`)
console.log(`Exact duplicate content groups: ${exactDuplicateGroups.length}`)
console.log(`Pages with unfinished/template/freshness flags: ${pages.filter((page) => page.flags.length).length}`)
console.log(`Pages with heading-level skips: ${pages.filter((page) => page.headingSkips.length).length}`)
console.log(`Pages with image markup issues: ${pages.filter((page) => page.imagesMissingAlt || page.imagesMissingDimensions).length}`)
console.log('Wrote reports/content-inventory.csv and reports/rendered-site-audit.json')

if (brokenLinks.length || invalidSchemas.length) process.exitCode = 1
