import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { PageHero, SectionHead, Tile, useTitle } from '../components/ui'
import { NAV } from '../data/nav'
import { FinalCta } from './home/sections'

const SECTION = NAV[1]

const STREAMS = [
  { title: 'Engineering', sub: 'JEE Main, JEE Advanced, BITSAT, state CETs', to: '/entrance-exams/engineering/', icon: 'layers' },
  { title: 'Medical', sub: 'NEET UG, NEET PG and INI-CET', to: '/entrance-exams/medical/', icon: 'target' },
  { title: 'MBA / Management', sub: 'CAT, XAT, NMAT, SNAP, CMAT and MAT', to: '/entrance-exams/mba/', icon: 'chart' },
  { title: 'Law', sub: 'CLAT, AILET and other law entrances', to: '/entrance-exams/law/', icon: 'book' },
  { title: 'University Entrance', sub: 'CUET UG and CUET PG', to: '/entrance-exams/university/', icon: 'user' },
  { title: 'PG & Research', sub: 'GATE, IIT JAM, UGC NET and CSIR NET', to: '/entrance-exams/pg-research/', icon: 'refresh' },
  { title: 'International Exams', sub: 'GMAT, GRE, IELTS, TOEFL and SAT', to: '/entrance-exams/international/', icon: 'globe' },
  { title: 'All Entrance Exams', sub: 'The complete A–Z index', to: '/entrance-exams/', icon: 'doc' },
]

export default function EntranceExams() {
  useTitle('Entrance Exams')

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Entrance Exams"
        lead={SECTION.desc}
        trail={[{ label: 'Entrance Exams' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/mock-tests/jee-neet/">
              JEE / NEET Mock Tests
            </Link>
            <Link className="btn btn--o" to="/mock-tests/cat/">
              CAT Mock Tests
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="By stream"
            title="Choose your entrance stream"
            lead="Engineering, medical, management, law, university, research and international entrance exams — each with syllabus, pattern and practice."
          />
          <div className="g4">
            {STREAMS.map((s) => (
              <Tile key={s.to + s.title} to={s.to} icon={s.icon} title={s.title} sub={s.sub} />
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Full index"
            title="All Entrance Exams A–Z"
            lead="Every entrance exam covered on Brolly, grouped by stream."
          />
          <LinkColumns groups={SECTION.groups} columns={3} />
        </div>
      </section>

      <FinalCta
        title="Start preparing for your entrance exam"
        lead="Free mock tests, previous-year papers and concept lessons for every major entrance exam."
      />
    </>
  )
}
