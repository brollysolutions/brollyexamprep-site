/**
 * The mock test registry.
 *
 * Each file in this folder exports one test paper. A paper looks like:
 *
 *   slug       URL segment — the test lives at /mock-tests/<slug>/
 *   cat        family label shown on the card ("SSC", "Banking", …)
 *   exam       short exam name, used in headings and breadcrumbs
 *   title      full test name
 *   fullSpec   what the real paper looks like, for the card
 *   minutes    time limit for THIS set, not the full paper
 *   marks      marks per correct answer
 *   negative   marks deducted per wrong answer (0 where the exam has none)
 *   pattern    a paragraph describing the official pattern
 *   sections   [{ id, name }] in the order they should be presented
 *   questions  [{ section, q, options, answer, explain }]
 *
 * `answer` is the index into `options`. Adding a paper means dropping a file
 * here and adding it to TESTS below — nothing else needs to change.
 */
import sscCgl from './ssc-cgl'
import sbiPo from './sbi-po'
import ibpsPo from './ibps-po'
import rrbNtpc from './rrb-ntpc'
import upscCse from './upsc-cse'
import nda from './nda'
import ctet from './ctet'
import statePsc from './state-psc'

export const TESTS = [sscCgl, sbiPo, ibpsPo, rrbNtpc, upscCse, nda, ctet, statePsc]

const BY_SLUG = new Map(TESTS.map((test) => [test.slug, test]))

export function getTest(slug) {
  return BY_SLUG.get(slug)
}

/** Questions grouped in section order, which is the order they are asked in. */
export function orderedQuestions(test) {
  return test.sections.flatMap((section) =>
    test.questions.filter((question) => question.section === section.id),
  )
}

/** "25 questions · 20 min · 50 marks" for the card and the test header. */
export function specOf(test) {
  const total = test.questions.length
  return `${total} questions · ${test.minutes} min · ${total * test.marks} marks`
}
