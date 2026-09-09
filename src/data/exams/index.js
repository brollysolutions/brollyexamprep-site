/**
 * Written content for every exam page on the site.
 *
 * Before this existed, /government-exams/:category/:exam/ and its six resource
 * sub-pages were assembled from nothing but the exam's name in the nav tree.
 * That produced roughly 290 near-identical pages whose only real body text was
 * a placeholder reading "This block is the CMS slot" — thin, templated and
 * indistinguishable from one another, which is exactly what Google's SEO
 * Starter Guide warns against under "make your site interesting and useful".
 *
 * Each record here is hand-written for one exam, so the syllabus page for
 * SSC CHSL says something different from the syllabus page for SSC CGL rather
 * than substituting a name into a sentence.
 *
 * ── Record shape ────────────────────────────────────────────────
 *
 *   slug            URL segment, e.g. 'ssc-cgl'
 *   path            full base path, used for links and canonical URLs
 *   name            short display name — the one people search for
 *   fullName        expanded name, used once in the opening paragraph
 *   authority       the body that conducts it
 *   official        official website, shown as plain text (see the note below)
 *   seoTitle        complete <title> for the base page, used verbatim
 *   metaDescription one- or two-sentence summary for the base page
 *   lead            hero paragraphs
 *   quickFacts      [[label, value], …] rendered as a definition list
 *   overview        blocks — what the exam is and who it suits
 *   stages          [{ name, mode, detail }] the selection process in order
 *   resources       one entry per sub-page (see RESOURCE_SLUGS below), each
 *                   { title?, description, lead, blocks }
 *   faqs            [{ q, a }] — also emitted as FAQPage structured data
 *
 * ── On factual accuracy ─────────────────────────────────────────
 *
 * Exam content is a place where being wrong is worse than being brief: an
 * aspirant who plans around an invented vacancy count or cutoff loses real
 * time. So these records describe what is stable about each exam — who
 * conducts it, what the stages are, which sections the paper has, what the
 * syllabus covers and how to prepare for it — and deliberately do not state
 * volatile figures such as a given year's vacancy count, cutoff or exam date.
 * Where a number does appear it is a long-standing feature of the pattern, and
 * every pattern block carries a note telling the reader to confirm against the
 * current official notification before relying on it.
 */

import ssc from './ssc'
import banking from './banking'
import railways from './railways'
import upsc from './upsc'
import defence from './defence'
import teaching from './teaching'
import police from './police'
import engineering from './engineering'
import medical from './medical'
import mba from './mba'
import law from './law'
import university from './university'
import pgResearch from './pg-research'
import international from './international'
import telangana from './telangana'

/** The six sub-pages every exam gets, in the order they are shown. */
export const RESOURCE_SLUGS = [
  'syllabus',
  'exam-pattern',
  'previous-year-papers',
  'mock-tests',
  'preparation',
  'study-material',
]

const FAMILIES = [
  ssc,
  banking,
  railways,
  upsc,
  defence,
  teaching,
  police,
  engineering,
  medical,
  mba,
  law,
  university,
  pgResearch,
  international,
  telangana,
]

/** Every written exam, keyed by its base path. */
export const EXAMS = new Map()
for (const family of FAMILIES) {
  for (const exam of family) EXAMS.set(exam.path, exam)
}

/** The written record for a base path, or undefined if none exists yet. */
export function getExam(path) {
  return EXAMS.get(path)
}

export const WRITTEN_EXAM_PATHS = [...EXAMS.keys()]
