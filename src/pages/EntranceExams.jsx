import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
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

      <Doc>
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

        <ContentSection
          id="how-streams-differ"
          eyebrow="What preparation actually looks like"
          heading="The seven streams demand different kinds of work"
          background
          intro="Candidates frequently plan an entrance preparation on the assumption that all of these examinations reward the same thing. They do not, and the difference decides how a year should be spent."
          blocks={[
            {
              type: 'table',
              caption: 'What each stream mainly rewards, and where candidates most often lose marks in it.',
              head: ['Stream', 'What the paper mainly rewards', 'Where marks are usually lost'],
              rows: [
                [
                  'Engineering',
                  'Fluency on standard problems from the senior-secondary syllabus, at speed.',
                  'Time spent reconstructing formulas, and unit or sign errors rather than conceptual gaps.',
                ],
                [
                  'Medical',
                  'Complete syllabus coverage and high accuracy — the papers are broad rather than deep.',
                  'Gaps in chapters assumed to be minor, and accuracy loss under a long single sitting.',
                ],
                [
                  'MBA and management',
                  'Set selection and time allocation, more than knowledge.',
                  'Sinking minutes into a set that was never solvable in the time available.',
                ],
                [
                  'Law',
                  'Applying a stated principle to facts, exactly as stated.',
                  'Answering from what the real law says, or from what seems fair, rather than from the principle given.',
                ],
                [
                  'University entrance',
                  'Domain papers at school syllabus level, plus a general section.',
                  'Choosing the wrong subject combination for the programmes actually wanted.',
                ],
                [
                  'PG and research',
                  'Rebuilding a degree subject into something retrievable under a clock.',
                  'Revising from chapter one instead of from the chapters the papers weight.',
                ],
                [
                  'International tests',
                  'For aptitude tests, timed reasoning; for proficiency tests, a described skill standard.',
                  'Booking before checking what the target programmes accept, and neglecting writing and speaking.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'One primary examination, and the rest as overlap',
              text: 'Preparing seriously for two examinations with different section structures fragments both. Choose one as primary, let its pattern set your practice timing, and add secondary examinations only where the overlap is genuine — the same subjects at a similar depth. Widening opportunity is worth doing; splitting a preparation across two incompatible formats is not.',
            },
          ]}
        />

        <ContentSection
          id="entrance-timeline"
          eyebrow="Sequencing"
          heading="What to do first, and what cannot be left late"
          intro="Some components of an entrance preparation accumulate slowly and cannot be compressed near the end. Starting those first is the single most consequential planning decision available."
          blocks={[
            {
              type: 'list',
              title: 'Start these immediately',
              items: [
                {
                  text: 'Reading speed and stamina',
                  note: 'for any paper with long passages, this is built by months of dense reading and barely responds to a final month of technique work.',
                },
                {
                  text: 'Calculation fluency',
                  note: 'tables, fractions, approximation. Fifteen minutes daily, and it changes every quantitative section you will ever sit.',
                },
                {
                  text: 'The chapter-weight table for your paper',
                  note: 'built from past papers before opening a textbook, because it decides revision order and prevents the drift towards revising what is comfortable.',
                },
                {
                  text: 'Eligibility and programme research',
                  note: 'subject combinations, minimum marks, domicile rules and counselling processes. An evening now avoids discovering a disqualifying condition after a result.',
                },
              ],
            },
            {
              type: 'list',
              title: 'These can wait, and should',
              items: [
                {
                  text: 'Test-day technique',
                  note: 'order of attempt, abandonment rules and section pacing. Useful once there is something to pace, and premature before that.',
                },
                {
                  text: 'Full-length rehearsals at high frequency',
                  note: 'weekly full papers are a late-stage habit. Early on, sectional work exposes problems that a full paper only reports.',
                },
                {
                  text: 'Optional or low-weight chapters',
                  note: 'the long tail of a syllabus is worth attention only once the weighted chapters are secure.',
                },
              ],
            },
            {
              type: 'note',
              title: 'Counselling deadlines end more candidacies than papers do',
              text: 'For many entrance routes a score is followed by registration, preference filling, document verification and several allocation rounds, each with its own deadline. Record those dates alongside the examination date from the day the information bulletin appears. A valid score is unusable if a counselling action is missed, and no appeal recovers it.',
            },
          ]}
          background
        />

      </Doc>
      <FinalCta
        title="Start preparing for your entrance exam"
        lead="Free mock tests, previous-year papers and concept lessons for every major entrance exam."
      />
    </>
  )
}
