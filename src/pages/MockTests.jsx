import { Link, useLocation } from 'react-router-dom'
import { PageHero, SectionHead, useTitle } from '../components/ui'
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

const MOCK_FAQS = [
  {
    q: 'Are the mock tests really free?',
    a: 'Yes. Every test listed under Free Mock Tests can be attempted without paying, and you get your score and the correct answers at the end. Paid test series add more attempts, detailed solutions and comparative ranking.',
  },
  {
    q: 'Do mock tests follow the current exam pattern?',
    a: 'Each test is built to the pattern in the latest official notification — the same sections, question counts, marking scheme and time limit. When a pattern changes, the tests are rebuilt before the next cycle.',
  },
  {
    q: 'How often should I attempt a full-length mock?',
    a: 'About once a week once you have covered the syllabus, and every two weeks while you are still learning. What matters more than frequency is spending as long on the analysis as you did on the test.',
  },
]

export default function MockTests() {
  const isFree = useLocation().pathname.startsWith('/mock-tests/free')
  useTitle(isFree ? 'Free Mock Tests' : 'Mock Tests & Test Series')

  return (
    <>
      <PageHero
        eyebrow={isFree ? 'Free practice' : 'Test series'}
        title={isFree ? 'Free Mock Tests' : 'Mock Tests'}
        lead="Practice with exam-level questions, understand your performance and identify the areas you need to improve. Free mock tests are the fastest way to start your competitive exam preparation."
        trail={
          isFree
            ? [{ label: 'Mock Tests', to: '/mock-tests/' }, { label: 'Free' }]
            : [{ label: 'Mock Tests' }]
        }
        actions={
          <>
            <Link className="btn btn--y" to="/mock-tests/ssc-cgl/">
              Start with SSC CGL
            </Link>
            <Link className="btn btn--o" to="/practice/test-series/">
              Explore Test Series
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Start free"
            title="Free full-length mock tests"
            lead="One test per major exam, on the current pattern, with your score and the answer key at the end."
          />
          <div className="mocks">
            {FREE_MOCKS.map((mock) => (
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
            title="Tests by exam family"
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
