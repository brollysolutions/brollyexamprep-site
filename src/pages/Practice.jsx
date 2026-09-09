import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { NAV } from '../data/nav'
import { STEPS } from '../data/site'
import { Analytics, FinalCta, FreeMockTests } from './home/sections'

const SECTION = NAV[3]

export default function Practice() {
  useSeo({
    title: 'Practice - Daily Quiz, Topic Tests and Mock Tests | Brolly Exam Prep',
    description:
      'Exam preparation methods, topic lessons, previous-paper analysis and the timed diagnostic mock tests currently available with worked explanations.',
    canonical: canonicalFor('/practice/'),
  })

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Practice"
        lead={SECTION.desc}
        trail={[{ label: 'Practice' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/study-material/">
              Practise by Topic
            </Link>
            <Link className="btn btn--y" to="/mock-tests/free/">
              Take a Free Mock Test
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="How practice works here"
            title="Four steps from learning to selection"
            lead="Practice is only useful when it changes what you study next. Every attempt here feeds the next one."
          />
          <div className="steps">
            {STEPS.map((step) => (
              <div className="st" key={step.n}>
                <span className="st__n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Everything to practise"
            title="Daily questions, tests and papers"
            lead="Pick the format that matches how much time you have today."
          />
          <LinkColumns groups={SECTION.groups} columns={4} />
        </div>
      </section>

      <FreeMockTests />
      <Analytics />
      <FinalCta
        title="Consistent practice beats occasional study"
        lead="Ten questions a day, one full mock a week, and an honest look at the analysis afterwards."
      />
    </>
  )
}
