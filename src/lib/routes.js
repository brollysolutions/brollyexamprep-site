/**
 * Every URL this site is willing to have indexed.
 *
 * One list, used twice: scripts/generate-sitemap.mjs turns it into
 * sitemap.xml, and scripts/prerender.mjs renders each entry to a static HTML
 * file. Keeping both off the same source means the sitemap can never promise
 * a page the build did not produce.
 *
 * Routes are derived from the same data the pages render from, so adding an
 * exam, a study topic or an article puts it in the sitemap automatically.
 */
import { LINK_INDEX } from '../data/nav'
import { ARTICLES, EXAM_INDEX, PREP_SUBLINKS } from '../data/site'
import { WRITTEN_EXAM_PATHS } from '../data/exams'
import { HUB_PATHS } from '../data/hubs'
import { TESTS } from '../data/mock-tests'
import { STATE_PAGES } from '../data/states'
import { SUBJECTS, TOPICS } from '../data/study'

/**
 * Pages deliberately kept out of the index. Search results are built from a
 * query string rather than being documents of their own, and the account
 * pages hold nothing a searcher wants. Each of these also sets a noindex
 * robots tag in the page itself — this list keeps them out of the sitemap,
 * which would otherwise contradict that tag.
 *
 * They are still prerendered (see prerenderRoutes), because a visitor asking
 * for /login/ should be served the login page rather than the SPA shell.
 */
export const EXCLUDED = new Set(['/search/', '/login/', '/register/', '/success-stories/', '/careers/'])

/** Pages that exist in the footer or the route table but not in the nav tree. */
const STANDALONE = [
  '/',
  '/about/',
  '/contact/',
  '/careers/',
  '/success-stories/',
  '/faculty/',
  '/editorial-policy/',
  '/corrections-policy/',
  '/blog/',
  '/courses/',
  '/privacy-policy/',
  '/terms-and-conditions/',
  '/refund-policy/',
  '/disclaimer/',
]

/**
 * Change frequency and priority are hints rather than instructions — Google
 * has said for years that it largely ignores them. They are set here only
 * because other crawlers still read them, and the values reflect how often
 * each kind of page actually changes.
 */
function classify(path) {
  if (path === '/') return { changefreq: 'daily', priority: '1.0' }
  if (path.startsWith('/current-affairs/') || path.startsWith('/exam-updates/'))
    return { changefreq: 'daily', priority: '0.9' }
  if (path.startsWith('/study-material/')) return { changefreq: 'monthly', priority: '0.8' }
  if (path.startsWith('/mock-tests/') || path.startsWith('/practice/'))
    return { changefreq: 'weekly', priority: '0.8' }
  if (path.startsWith('/blog/')) return { changefreq: 'monthly', priority: '0.6' }
  if (
    path.startsWith('/privacy-policy') ||
    path.startsWith('/terms-') ||
    path.startsWith('/refund-') ||
    path.startsWith('/disclaimer')
  )
    return { changefreq: 'yearly', priority: '0.2' }
  return { changefreq: 'weekly', priority: '0.7' }
}

function normalise(path) {
  if (!path || path.startsWith('http')) return null
  const clean = path.split('?')[0].split('#')[0]
  return clean.endsWith('/') ? clean : `${clean}/`
}

/** Every indexable path, deduplicated and sorted. */
export function allRoutes() {
  const paths = new Set()
  const lastModified = new Map()
  const add = (p) => {
    const path = normalise(p)
    if (path && !EXCLUDED.has(path)) paths.add(path)
  }

  STANDALONE.forEach(add)

  // Everything reachable from the mega menu and the directory pages.
  for (const to of LINK_INDEX.keys()) add(to)
  HUB_PATHS.forEach(add)

  // Study material: the library index, each subject, each written topic.
  add('/study-material/')
  Object.keys(SUBJECTS).forEach((subject) => add(`/study-material/${subject}/`))
  TOPICS.forEach((topic) => add(`/study-material/${topic.subject}/${topic.slug}/`))

  // Exams: the exam page plus its syllabus, pattern, papers and so on.
  EXAM_INDEX.forEach(([, , base]) => {
    add(base)
    PREP_SUBLINKS.forEach(([, slug]) => add(`${base}${slug}/`))
  })
  // The written exam registry is authoritative. Some useful exams are linked
  // from contextual copy rather than EXAM_INDEX, but their six complete
  // resource pages still need to be prerendered and discoverable.
  WRITTEN_EXAM_PATHS.forEach((base) => {
    add(base)
    PREP_SUBLINKS.forEach(([, slug]) => add(`${base}${slug}/`))
  })

  // State hubs, mock tests and articles.
  Object.keys(STATE_PAGES).forEach((slug) => add(`/government-exams/state/${slug}/`))
  TESTS.forEach((test) => add(`/mock-tests/${test.slug}/`))
  ARTICLES.forEach((article) => {
    add(article.to)
    if (article.isoDate) lastModified.set(normalise(article.to), article.isoDate)
  })

  return [...paths]
    .sort()
    .map((path) => ({ path, ...classify(path), ...(lastModified.has(path) ? { lastmod: lastModified.get(path) } : {}) }))
}

/**
 * Every path the build writes a file for: the indexable ones plus the handful
 * held back from the index. The prerender uses this; the sitemap uses only
 * what the prerender reports as indexable, so the two cannot disagree.
 */
export function prerenderRoutes() {
  const held = [...EXCLUDED].sort().map((path) => ({ path, ...classify(path) }))
  return [...allRoutes(), ...held]
}
