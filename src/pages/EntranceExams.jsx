import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { ContentSection } from '../components/Blocks'
import { PageHero, SectionHead, Tile, canonicalFor, useSeo } from '../components/ui'
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
  useSeo({
    title: 'Entrance Exams | Brolly Exam Prep',
    description:
      'Entrance exam guides for JEE, NEET, CAT, CLAT, CUET, GATE and GRE - syllabus, exam pattern, previous papers and free preparation material.',
    canonical: canonicalFor('/entrance-exams/'),
  })

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Entrance Exams"
        lead={SECTION.desc}
        trail={[{ label: 'Entrance Exams' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/entrance-exams/engineering/jee-main/">
              JEE Main Guide
            </Link>
            <Link className="btn btn--o" to="/entrance-exams/mba/cat/">
              CAT Guide
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

      <ContentSection
        id="choose-and-plan"
        eyebrow="Choosing well"
        heading="Start with the programme, then understand its entrance route"
        intro="Exams with similar subjects can lead to very different courses, institutions and eligibility rules. A sensible shortlist begins with where you want the result to take you."
        blocks={[
          {
            type: 'steps',
            items: [
              { text: 'List the courses and institutions you would actually join.', note: 'Do this before building an exam list; an impressive score has little value if none of its programmes fit your goal.' },
              { text: 'Check eligibility and admission rules.', note: 'Subject combinations, minimum marks, age conditions, domicile rules and counselling processes can differ even when the entrance paper is shared.' },
              { text: 'Map overlapping examinations.', note: 'JEE Main and state engineering entrances may share a foundation; CAT, XAT and other management tests overlap but differ in sections and decision rules.' },
              { text: 'Choose one primary exam.', note: 'Use secondary exams to widen opportunity without allowing several different patterns to fragment the core preparation.' },
              { text: 'Read recent papers before choosing resources.', note: 'The syllabus shows scope; papers show depth, recurring forms and the speed the test demands.' },
            ],
          },
          {
            type: 'note',
            title: 'Counselling is part of the examination process',
            text: 'For many entrance routes, a score is followed by registration, preference filling, document verification and several allocation rounds. Record those steps and deadlines alongside the test date; missing a counselling action can make a valid score unusable.',
          },
          {
            type: 'links',
            title: 'Build your preparation',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ]}
      />

      <FinalCta
        title="Start preparing for your entrance exam"
        lead="Free mock tests, previous-year papers and concept lessons for every major entrance exam."
      />
    </>
  )
}
