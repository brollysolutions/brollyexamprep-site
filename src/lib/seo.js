import { useEffect } from 'react'

/**
 * Per-page SEO: title, description, canonical, robots, Open Graph, Twitter
 * and JSON-LD, all set from one call.
 *
 * Two things have to work at once, which is why this lives here rather than in
 * a plain effect inside each page.
 *
 *  In the browser, React Router swaps pages inside a single document, so the
 *  tags that index.html ships with have to be rewritten on every navigation
 *  and put back when the page unmounts. That happens in an effect.
 *
 *  During the prerender (scripts/prerender.mjs) there is no document and no
 *  effect ever runs, so a page instead records what it wants while it renders.
 *  The prerender reads the registry afterwards and bakes real tags into the
 *  HTML it writes to disk. That is what lets a crawler — or a social-media
 *  scraper, which never runs JavaScript at all — see the right title and
 *  description for a URL instead of the site-wide defaults.
 *
 * Each call applies only the fields it is given. That matters because several
 * pages still call useTitle and useMeta separately, and a call that filled in
 * defaults for the fields it did not set would undo the other one.
 */

export const SITE = {
  origin: 'https://brollyexamprep.com',
  name: 'Brolly Exam Prep',
  image: 'https://brollyexamprep.com/brolly-og.png',
  imageAlt: 'Brolly Exam Preparation — competitive exam preparation platform',
  locale: 'en_IN',
}

/** Site-wide fallbacks. These mirror the static tags in index.html. */
export const DEFAULTS = {
  title: 'Competitive Exam Preparation Online | Brolly Exam Prep',
  description:
    'Prepare online for SSC, Banking, Railway, UPSC, Defence, Teaching and State exams with syllabus guides, mock tests, previous papers and study material.',
  canonical: `${SITE.origin}/`,
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  image: SITE.image,
  type: 'website',
}

const isServer = typeof document === 'undefined'

/**
 * URLs that serve the same page as another URL, mapped to the one that owns
 * the content. The nav lists GMAT under both MBA Entrance and International
 * Exams, so two paths render an identical exam guide. Both have to keep
 * working, because both are linked from the menu, but only one may be
 * canonical — otherwise the two compete with each other in search results.
 */
const DUPLICATE_OF = {
  '/entrance-exams/international/gmat/': '/entrance-exams/mba/gmat/',
}

/**
 * Absolute canonical URL for a router path, carrying the trailing slash the
 * route table uses. Query strings and fragments are dropped: a canonical must
 * name one URL, and ?q= variants of a search page are not separate documents.
 */
export function canonicalFor(path) {
  if (!path) return DEFAULTS.canonical
  if (path.startsWith('http')) return path
  const clean = path.split('?')[0].split('#')[0]
  const slashed = clean.endsWith('/') ? clean : `${clean}/`
  const rooted = slashed.startsWith('/') ? slashed : `/${slashed}`
  return SITE.origin + (DUPLICATE_OF[rooted] || rooted)
}

/* ── Server-side collection ─────────────────────────────────────── */

/**
 * What the page asked for during the current server render. The prerender
 * resets this before each route and reads it after renderToString.
 */
export const headRegistry = {
  seo: {},
  jsonLd: [],
  reset() {
    this.seo = {}
    this.jsonLd = []
  },
  /** Later calls win, so a page can refine what a shared layout set. */
  collect(seo) {
    if (!seo) return
    for (const [key, value] of Object.entries(seo)) {
      if (value !== undefined && value !== null && value !== '') this.seo[key] = value
    }
  },
  collectJsonLd(blocks) {
    if (blocks) this.jsonLd.push(...(Array.isArray(blocks) ? blocks : [blocks]))
  },
  /** The resolved head for the route just rendered, with defaults filled in. */
  resolve() {
    return { ...DEFAULTS, ...this.seo, jsonLd: this.jsonLd }
  },
}

/* ── Browser-side application ───────────────────────────────────── */

/**
 * Finds a head tag, creating it if index.html does not already carry one, and
 * returns a function that puts it back the way it was.
 */
function upsert(selector, create, value) {
  if (value === undefined || value === null || value === '') return () => {}

  const existing = document.head.querySelector(selector)
  if (existing) {
    const previous = existing.getAttribute('content') ?? existing.getAttribute('href')
    setValue(existing, value)
    return () => setValue(existing, previous)
  }

  const el = create()
  setValue(el, value)
  document.head.appendChild(el)
  return () => el.remove()
}

function setValue(el, value) {
  if (el.tagName === 'LINK') el.setAttribute('href', value)
  else el.setAttribute('content', value)
}

const metaName = (name) => () => {
  const el = document.createElement('meta')
  el.setAttribute('name', name)
  return el
}

const metaProp = (prop) => () => {
  const el = document.createElement('meta')
  el.setAttribute('property', prop)
  return el
}

const linkRel = (rel) => () => {
  const el = document.createElement('link')
  el.setAttribute('rel', rel)
  return el
}

/** Applies only the fields present on `seo`, and returns an undo function. */
function applyToDocument(seo) {
  const undo = []

  if (seo.title) {
    const previous = document.title
    document.title = seo.title
    undo.push(() => {
      document.title = previous
    })
  }

  undo.push(
    upsert('meta[name="description"]', metaName('description'), seo.description),
    upsert('link[rel="canonical"]', linkRel('canonical'), seo.canonical),
    upsert('meta[name="robots"]', metaName('robots'), seo.robots),

    upsert('meta[property="og:title"]', metaProp('og:title'), seo.title),
    upsert('meta[property="og:description"]', metaProp('og:description'), seo.description),
    upsert('meta[property="og:url"]', metaProp('og:url'), seo.canonical),
    upsert('meta[property="og:type"]', metaProp('og:type'), seo.type),
    upsert('meta[property="og:image"]', metaProp('og:image'), seo.image),

    upsert('meta[name="twitter:title"]', metaName('twitter:title'), seo.title),
    upsert('meta[name="twitter:description"]', metaName('twitter:description'), seo.description),
    upsert('meta[name="twitter:image"]', metaName('twitter:image'), seo.image),
  )

  return () => undo.forEach((restore) => restore())
}

/* ── The hooks pages use ────────────────────────────────────────── */

/**
 * The one call a page needs.
 *
 *   useSeo({
 *     title: 'SSC CGL Syllabus 2026 | Brolly Exam Prep',
 *     description: 'One or two sentences, unique to this page.',
 *     canonical: canonicalFor(pathname),
 *     robots: 'noindex, follow',   // optional — omit to stay indexable
 *     type: 'article',             // optional — defaults to 'website'
 *   })
 *
 * useEffect is called unconditionally so hook order never varies; it simply
 * never runs during a server render, where the registry does the work instead.
 */
export function useSeo(seo) {
  if (isServer) headRegistry.collect(seo)

  const { title, description, canonical, robots, image, type } = seo || {}
  useEffect(() => {
    if (isServer) return undefined
    return applyToDocument({ title, description, canonical, robots, image, type })
  }, [title, description, canonical, robots, image, type])
}

/**
 * Adds this page's structured data to the head. `blocks` is an array of
 * schema.org objects — JSON-LD accepts several in one script tag.
 */
export function useJsonLd(blocks) {
  if (isServer) headRegistry.collectJsonLd(blocks)

  const json = blocks ? JSON.stringify(blocks) : ''
  useEffect(() => {
    if (isServer || !json) return undefined
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = json
    document.head.appendChild(script)
    return () => script.remove()
  }, [json])
}

/* ── Back-compatible wrappers ───────────────────────────────────── */

/**
 * Sets the document title. Pages carrying a written SEO title pass `exact` —
 * that title is already complete, and the site suffix would push it past what
 * a search result shows. New code should prefer useSeo, which also sets the
 * description and canonical.
 */
export function useTitle(title, { exact = false } = {}) {
  useSeo({ title: title ? (exact ? title : `${title} | ${SITE.name}`) : DEFAULTS.title })
}

/** Sets description and canonical only. Superseded by useSeo. */
export function useMeta({ description, canonical }) {
  useSeo({ description, canonical })
}
