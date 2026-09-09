import { Link } from 'react-router-dom'
import { PageHero, canonicalFor, useSeo } from '../components/ui'
import { ContentSection } from '../components/Blocks'
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
      <FacultySection background />
      <FinalCta
        title="Structure beats scattered study"
        lead="Pick a course for the concepts and a test series for the practice — the two are designed to work together."
      />
    </>
  )
}
