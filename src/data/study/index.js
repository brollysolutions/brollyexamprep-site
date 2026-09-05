/**
 * The study-material topic registry.
 *
 * Each file here is one written topic page, served at
 * /study-material/<subject>/<slug>/. A topic looks like:
 *
 *   subject/subjectName   the parent subject and its display name
 *   slug / title          URL segment and page heading
 *   seoTitle              complete <title>, used verbatim
 *   metaDescription       meta description and the JSON-LD description
 *   readMinutes           honest reading estimate shown under the hero
 *   lead                  array of intro paragraphs for the hero
 *   weightage             [{ exam, count, note }] — what to expect in each exam
 *   contents              [{ icon, title, sub, href }] for the "on this page" grid
 *   sections              the body — see the block types below
 *   examples              [{ q, steps, answer }] worked line by line
 *   practice              [{ q, options, answer, explain }] with reveal
 *   faqs                  [{ q, a }] — also emitted as FAQPage structured data
 *   related               [{ label, to }] sibling topics
 *
 * A section is { id, heading, eyebrow, intro, blocks }, and each block is one of:
 *
 *   { type: 'p',       text }
 *   { type: 'defs',    items: [[term, description], …] }
 *   { type: 'table',   caption, head: [], rows: [[]] }
 *   { type: 'formula', title, items: [{ expr, note }] }
 *   { type: 'example', q, steps: [], answer }
 *   { type: 'note',    title, text }
 *
 * Adding a topic means dropping a file here and listing it in TOPICS. Nothing
 * else needs to change — the route, breadcrumbs, contents grid and structured
 * data are all derived.
 */
import numberSystem from './number-system'
import percentages from './percentages'
import profitLoss from './profit-loss'
import ratioProportion from './ratio-proportion'
import timeWork from './time-work'
import timeSpeedDistance from './time-speed-distance'

/** Listed in teaching order, which is also the order the subject page shows. */
export const TOPICS = [
  numberSystem,
  percentages,
  profitLoss,
  ratioProportion,
  timeWork,
  timeSpeedDistance,
]

/** Display copy for a subject landing page. */
export const SUBJECTS = {
  'quantitative-aptitude': {
    name: 'Quantitative Aptitude',
    eyebrow: 'Arithmetic, algebra and data',
    lead: [
      'Quantitative Aptitude is the section that decides most competitive exam results, because it is the one where speed and accuracy diverge most sharply between candidates.',
      'The topics below are written to be read in order. Number System and Percentages come first because almost everything else is built on them — Profit & Loss is percentages applied to trade, and Time & Work and Time, Speed & Distance are both ratio problems in disguise.',
    ],
  },
}

const BY_PATH = new Map(TOPICS.map((topic) => [`${topic.subject}/${topic.slug}`, topic]))

export function getTopic(subject, slug) {
  return BY_PATH.get(`${subject}/${slug}`)
}

/** Sibling topics that are actually written, for cross-linking. */
export function topicsInSubject(subject, exceptSlug) {
  return TOPICS.filter((topic) => topic.subject === subject && topic.slug !== exceptSlug)
}
