import { Link } from 'react-router-dom'
import { PageHero, canonicalFor, useSeo } from '../components/ui'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
import { CoursesSection, FacultySection, FinalCta } from './home/sections'

export default function Courses() {
  useSeo({
    title: 'Exam Preparation Formats & Free Resources | Brolly',
    description:
      'Compare preparation formats and use Brolly exam guides, subject lessons, previous papers and available free diagnostic mock tests.',
    canonical: canonicalFor('/courses/'),
  })

  return (
    <>
      <PageHero
        eyebrow="Choose the right format"
        title="Exam Preparation Formats and Free Resources"
        lead="Use this guide to decide whether you need concept lessons, timed practice or a structured programme, then start with the resources that are available now."
        trail={[{ label: 'Courses' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/study-material/">
              Browse Study Material
            </Link>
            <Link className="btn btn--o" to="/mock-tests/free/">
              Take a Diagnostic Test
            </Link>
          </>
        }
      />

      <CoursesSection />
      <Doc>
        <ContentSection
          id="choose-a-programme"
          eyebrow="Before enrolling"
          heading="Choose structure that fixes a real preparation gap"
          intro="A course, a test series and a question bank solve different problems. Start with the problem shown by your latest timed attempt, then buy or follow only the structure that addresses it."
          blocks={[
            {
              type: 'table',
              head: ['Your current problem', 'Useful format', 'What to check'],
              rows: [
                ['Concepts are unclear', 'A complete subject or exam course', 'The syllabus coverage, teaching depth, worked examples and whether doubts are resolved.'],
                ['Concepts are known but speed is low', 'Sectional tests and timed practice', 'Question difficulty, realistic timing and analysis by topic and time spent.'],
                ['Scores vary between full papers', 'A pattern-matched test series', 'Current stage structure, negative marking, section balance and detailed solutions.'],
                ['Only a few topics are weak', 'Topic lessons and question sets', 'Direct access to the required chapters rather than a second full course.'],
                ['The plan keeps breaking down', 'A scheduled programme or live class', 'A realistic calendar, revision cycles and recordings for sessions you miss.'],
              ],
            },
            {
              type: 'list',
              title: 'Questions to answer before paying',
              items: [
                { text: 'Does it match the exact exam stage?', note: 'prelims-only coverage is not a complete programme where mains decides merit.' },
                { text: 'Can you inspect a lesson and test first?', note: 'teaching pace and explanation quality matter more than the advertised number of hours.' },
                { text: 'Is the completion load realistic?', note: 'calculate weekly hours including practice and revision, not video time alone.' },
                { text: 'Will it replace or duplicate what you already own?', note: 'unfinished resources are usually an execution problem, not a collection problem.' },
              ],
            },
          ]}
          background
        />
        <ContentSection
          id="free-first"
          eyebrow="Before you spend anything"
          heading="What is available here without paying, and what it covers"
          intro="A paid programme is worth buying when it fixes a gap free material genuinely cannot. That judgement is easier to make once you know what the free layer already contains, so this is the honest inventory."
          blocks={[
            {
              type: 'table',
              head: ['Resource', 'What it gives you', 'What it does not do'],
              rows: [
                [
                  'Exam guides',
                  'Syllabus, exam pattern, selection stages, preparation plan and study-material guidance for each examination, with six resource pages beneath it.',
                  'It does not replace the notification, which is the only document that binds the conducting body.',
                ],
                [
                  'Subject lessons',
                  'Concepts, formula tables, worked examples and practice questions with explanations, across the subjects competitive papers examine.',
                  'It is written material rather than taught material, so it does not answer a question you get stuck on.',
                ],
                [
                  'Diagnostic tests',
                  'Timed tests with the real question count and duration stated up front, then a score, section breakdown and an explanation for every question.',
                  'They are deliberately shorter than a full paper, so they do not rehearse endurance across a full sitting.',
                ],
                [
                  'Previous-paper method',
                  'Where official papers and keys are published, and how to build a topic-frequency table from them.',
                  'It does not host every conducting body’s paper archive; the official source is named instead.',
                ],
                [
                  'Method and policy pages',
                  'How to track notifications, how to read a mock result, and how this site sources and corrects what it publishes.',
                  'They are guidance rather than a personalised plan.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'Unfinished resources are usually an execution problem',
              text: 'The most common reason a candidate does not improve is not an absent resource; it is three half-finished ones. Before buying anything, check whether the material you already have has been worked through rather than collected. A course bought to solve a consistency problem tends to become the fourth unfinished resource.',
            },
          ]}
        />

        <ContentSection
          id="what-a-format-cannot-fix"
          eyebrow="Being straight about it"
          heading="What no course or test series can do for you"
          background
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'It cannot make a score a prediction',
                  note: 'a cutoff is the mark of the last candidate selected and depends on that cycle’s vacancies, applicants and paper difficulty. Nobody knows it in advance, and a programme that implies otherwise is selling certainty it does not have.',
                },
                {
                  text: 'It cannot supply the analysis',
                  note: 'a test series generates data. Sorting your errors by cause and choosing what to fix is the part that produces marks, and it is the part that cannot be outsourced.',
                },
                {
                  text: 'It cannot compress a slow-building skill',
                  note: 'vocabulary, reading speed, calculation fluency, handwriting speed and physical standards accumulate over months. No format shortens that, and the ones that claim to are selling the last month of a year-long process.',
                },
                {
                  text: 'It cannot decide eligibility',
                  note: 'age reckoning, qualification, category and local status are settled by the notification and at document verification. A programme has no standing there.',
                },
                {
                  text: 'It cannot replace reading the notification',
                  note: 'patterns change, and a course written to a previous cycle teaches the previous examination. Read the current notification yourself, whatever else you buy.',
                },
              ],
            },
            {
              type: 'links',
              title: 'Start with what is already here',
              items: [
                { label: 'Free diagnostic mock tests', to: '/mock-tests/free/' },
                { label: 'Study material by subject', to: '/study-material/' },
                { label: 'Previous-paper method', to: '/previous-year-papers/' },
                { label: 'Refund policy', to: '/refund-policy/' },
              ],
            },
          ]}
        />

      </Doc>
      <FacultySection background />
      <FinalCta
        title="Structure beats scattered study"
        lead="Pick a course for the concepts and a test series for the practice — the two are designed to work together."
      />
    </>
  )
}
