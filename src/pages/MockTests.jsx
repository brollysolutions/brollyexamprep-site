import { Link, useLocation } from 'react-router-dom'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { FREE_MOCKS } from '../data/site'
import { TESTS } from '../data/mock-tests'
import { Analytics, FaqSection, FinalCta } from './home/sections'
import { Arrow } from '../components/Icon'

/** The live papers, grouped by exam family, in registry order. */
const BY_FAMILY = TESTS.reduce((groups, test) => {
  const group = groups.find((item) => item.cat === test.cat)
  if (group) group.tests.push(test)
  else groups.push({ cat: test.cat, tests: [test] })
  return groups
}, [])

/**
 * The exam families the "Find by exam" nav links point at, mapped to the `cat`
 * value the test registry uses. A family may legitimately have no paper yet —
 * the page then says so rather than pretending the URL is broken.
 */
const FAMILIES = {
  ssc: 'SSC',
  banking: 'Banking',
  upsc: 'UPSC',
  railways: 'Railways',
  defence: 'Defence',
  teaching: 'Teaching',
  'state-psc': 'State Exams',
  cat: 'CAT',
  'jee-neet': 'JEE / NEET',
}

export const isMockFamily = (slug) => Object.hasOwn(FAMILIES, slug)

const MOCK_FAQS = [
  {
    q: 'Are the mock tests really free?',
    a: 'Yes. Every test listed under Free Mock Tests can be attempted without paying, and you get your score, the answer key and explanations at the end. The question count and time shown on each card describe that test, not the full examination.',
  },
  {
    q: 'Do mock tests follow the current exam pattern?',
    a: 'The diagnostics use the exam’s subject mix and marking logic, but they are deliberately shorter than the full paper. Check the conducting body’s current notification for the binding stage structure, question count, timing and marking scheme.',
  },
  {
    q: 'How often should I attempt a full-length mock?',
    a: 'About once a week once you have covered the syllabus, and every two weeks while you are still learning. What matters more than frequency is spending as long on the analysis as you did on the test.',
  },
]

/**
 * The mock test listing. `familySlug` is set when the URL names an exam family
 * — /mock-tests/ssc/ and the rest of the "Find by exam" nav links — in which
 * case the page narrows to that family instead of showing everything.
 */
export default function MockTests({ familySlug = null }) {
  const isFree = useLocation().pathname.startsWith('/mock-tests/free')
  const family = familySlug ? FAMILIES[familySlug] : null
  const familyTests = family ? TESTS.filter((test) => test.cat === family) : []

  useSeo(
    family
      ? {
          title: `${family} Mock Tests — Free Online Practice | Brolly Exam Prep`,
          description: familyTests.length
            ? `Free ${family} mock tests on the current exam pattern, with instant scoring, detailed solutions and a performance breakdown.`
            : `${family} mock-test guidance on Brolly Exam Prep. No ${family} diagnostic is currently available; the live tests for other exams are listed here meanwhile.`,
          canonical: canonicalFor(`/mock-tests/${familySlug}/`),
        }
      : isFree
        ? {
            title: 'Free Mock Tests for SSC, Banking and Railway Exams | Brolly Exam Prep',
            description:
              'Free timed diagnostic tests for SSC, banking, railway, UPSC, teaching and state exams, with scoring, explanations and a section breakdown.',
            canonical: canonicalFor('/mock-tests/free/'),
          }
        : {
            title: 'Mock Tests & Test Series | Brolly Exam Prep',
            description:
              'Timed diagnostic mock tests for SSC, banking, railway, UPSC, teaching and state exams, with scoring and detailed explanations.',
            canonical: canonicalFor('/mock-tests/'),
          },
  )

  const heroTitle = family ? `${family} Mock Tests` : isFree ? 'Free Mock Tests' : 'Mock Tests'
  const heroLead = family
    ? familyTests.length
      ? `Free timed ${family} diagnostics using the exam’s subject mix. Check the displayed length, attempt one, then spend time analysing every error.`
      : `No ${family} diagnostic is live yet. Every free test currently available is listed below.`
    : 'Practice with exam-level questions, understand your performance and identify the areas you need to improve. Free mock tests are the fastest way to start your competitive exam preparation.'

  return (
    <>
      <PageHero
        eyebrow={family ? 'Free practice' : isFree ? 'Free practice' : 'Test series'}
        title={heroTitle}
        lead={heroLead}
        trail={
          family
            ? [{ label: 'Mock Tests', to: '/mock-tests/' }, { label: family }]
            : isFree
              ? [{ label: 'Mock Tests', to: '/mock-tests/' }, { label: 'Free' }]
              : [{ label: 'Mock Tests' }]
        }
        actions={
          <>
            <Link
              className="btn btn--y"
              to={`/mock-tests/${familyTests[0]?.slug || 'ssc-cgl'}/`}
            >
              Start with {familyTests[0]?.exam || 'SSC CGL'}
            </Link>
            <Link className="btn btn--o" to="/previous-year-papers/">
              Previous-Paper Method
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Start free"
            title={family && familyTests.length ? `Free ${family} diagnostic tests` : 'Free timed diagnostic tests'}
            lead="Each card gives the real length of the available test. These are shortened diagnostics, not substitutes for a full official-pattern paper."
          />
          <div className="mocks">
            {(familyTests.length ? FREE_MOCKS.filter((m) => m.cat === family) : FREE_MOCKS).map((mock) => (
              <Link className="mk" key={mock.to} to={mock.to}>
                <span className="pill pill--free mk__free">Free</span>
                <span className="mk__cat">{mock.cat}</span>
                <h3>{mock.title}</h3>
                <p className="mk__spec">{mock.spec}</p>
                <span className="mk__go">
                  Take Free Test <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Find by exam"
            title={family ? 'Tests for other exams' : 'Tests by exam family'}
            lead="Every paper below is live and free to attempt right now."
          />
          <div className="pgrid">
            {BY_FAMILY.map((family) => (
              <div className="pe" key={family.cat}>
                <div className="pe__h">
                  <span>{family.cat}</span>
                </div>
                <div className="pe__links">
                  {family.tests.map((test) => (
                    <Link key={test.slug} to={`/mock-tests/${test.slug}/`}>
                      {test.exam}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Analytics />
      <FaqSection items={MOCK_FAQS} title="Mock Tests — FAQs" background={false} />
      <FinalCta
        title="Take one mock before you study anything else"
        lead="It tells you which sections are already competitive and which need real work."
      />
    </>
  )
}
