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
import codingDecoding from './coding-decoding'
import series from './series'
import bloodRelations from './blood-relations'
import syllogism from './syllogism'
import seatingArrangement from './seating-arrangement'
import puzzles from './puzzles'
import grammar from './grammar'
import vocabulary from './vocabulary'
import readingComprehension from './reading-comprehension'
import paraJumbles from './para-jumbles'
import errorDetection from './error-detection'
import clozeTest from './cloze-test'
import ancientIndia from './ancient-india'
import medievalIndia from './medieval-india'
import modernIndia from './modern-india'

/** Listed in teaching order, which is also the order the subject page shows. */
export const TOPICS = [
  numberSystem,
  percentages,
  profitLoss,
  ratioProportion,
  timeWork,
  timeSpeedDistance,
  codingDecoding,
  series,
  bloodRelations,
  syllogism,
  seatingArrangement,
  puzzles,
  grammar,
  vocabulary,
  readingComprehension,
  paraJumbles,
  errorDetection,
  clozeTest,
  ancientIndia,
  medievalIndia,
  modernIndia,
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
  reasoning: {
    name: 'Reasoning',
    eyebrow: 'Verbal, analytical and non-verbal reasoning',
    lead: [
      'Reasoning is the section where preparation shows up fastest. Nothing here has to be memorised the way formulas do — every topic is a method, and a method you have drilled ten times is a method you can execute under a sectional timer.',
      'Read them in the order below. Coding-Decoding and Series come first because both reduce to knowing the alphabet as numbers, and Blood Relations introduces the habit of drawing rather than reasoning in your head. Syllogism, Seating Arrangement and Puzzles come last: they carry the most marks in a banking paper and they all depend on the same discipline of branching on paper instead of guessing.',
    ],
  },
  english: {
    name: 'English',
    eyebrow: 'Grammar, vocabulary and comprehension',
    lead: [
      'English decides more results than its mark count suggests, because it is the section with a sectional cut-off in almost every banking and insurance exam — and the one candidates most often leave until last.',
      'Read Grammar first: error detection is grammar applied under time pressure, and cloze is grammar plus a sense of direction, so the same rules pay three times over. Vocabulary rewards daily work rather than intensive work, and Reading Comprehension, Para Jumbles and Cloze Test are each a technique more than a body of knowledge.',
    ],
  },
  history: {
    name: 'History',
    eyebrow: 'Ancient, medieval and modern India',
    lead: [
      'History is examined as pairings far more than as narrative: which site had the dockyard, which ruler introduced which coin, which movement was withdrawn after which incident. Reading it as a story is enjoyable and does not prepare you for that.',
      'These three topics run in order, and modern India is the one to start with if time is short — it carries more marks than ancient and medieval combined in almost every exam, and it is the period where exact dates are actually asked.',
    ],
  },
  geography: {
    name: 'Geography',
    eyebrow: 'Physical, Indian and world geography',
    lead: [
      'Geography rewards maps more than it rewards notes. A candidate who can place the ranges, rivers and passes on a blank outline will answer most questions faster than one who has memorised lists of them.',
      'Physical geography comes first because it explains the rest — monsoon, soils and drainage all follow from relief and latitude. Indian geography then applies it, and world geography covers the regions and resources that exams actually ask about.',
    ],
  },
  polity: {
    name: 'Indian Polity',
    eyebrow: 'Institutions, federalism and governance',
    lead: [
      'Polity is the most predictable scoring block in general studies, because the institutions it describes are fixed and the questions repeat. What changes between exams is the depth — SSC asks which article, UPSC asks how two institutions interact.',
      'These topics cover the working of the state rather than the text of the Constitution, which is treated separately. Read Parliament first: the executive is accountable to it, and the judiciary is defined against it.',
    ],
  },
  constitution: {
    name: 'Constitution',
    eyebrow: 'Making, rights and amendment',
    lead: [
      'The Constitution is examined article by article, which makes it unusually learnable — the numbers do not move. Where counts do move, such as the number of amendments, this material says so rather than presenting a figure that will age.',
      'Start with the making and the Preamble, which explain why the document looks as it does, then the rights and duties, and finally the amendment process and the basic structure doctrine that limits it.',
    ],
  },
  economy: {
    name: 'Indian Economy',
    eyebrow: 'Concepts, money and public finance',
    lead: [
      'Economy questions divide into two kinds: definitions that never change, and figures that change every year. This material concentrates on the first and flags the second, because a memorised growth rate is worth nothing twelve months later.',
      'Read the basic concepts first — national income, inflation, unemployment — because money and banking and public finance both assume them.',
    ],
  },
  environment: {
    name: 'Environment',
    eyebrow: 'Ecology, biodiversity and climate',
    lead: [
      'Environment has grown from a handful of questions to a substantial block, particularly in UPSC Prelims, and it overlaps heavily with current affairs — protected-area counts, species status and treaty ratifications all move.',
      'Ecology comes first because it supplies the vocabulary; biodiversity and conservation then apply it to India, and the climate section covers the institutions and agreements that questions name.',
    ],
  },
  science: {
    name: 'Science & Technology',
    eyebrow: 'General science and applied technology',
    lead: [
      'Two different things sit under this heading. General science is stable school-level physics, chemistry and biology, and it is where the reliable marks are. Applied technology — space, defence, computing — is closer to current affairs and dates quickly.',
      'This material treats the stable science in depth and gives the applied side as durable principles plus the landmark programmes, flagging anything that will move.',
    ],
  },
  'art-culture': {
    name: 'Art & Culture',
    eyebrow: 'Architecture, performing arts and heritage',
    lead: [
      'Art and culture is the most under-prepared block in general studies and one of the most heavily asked in UPSC Prelims. It is almost entirely pairings — style with dynasty, dance form with state, instrument with category.',
      'Architecture comes first because it anchors the chronology to the history syllabus; the performing arts and the literature and heritage sections then cover what the history pages do not.',
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
