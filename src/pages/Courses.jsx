import { Link } from 'react-router-dom'
import { PageHero, canonicalFor, useSeo } from '../components/ui'
import { CoursesSection, FacultySection, FinalCta } from './home/sections'

export default function Courses() {
  useSeo({
    title: 'Courses & Test Series | Brolly Exam Prep',
    description:
      'Courses and test series for SSC, banking, railway and state exams, combining recorded lessons, practice sets and full-length mock tests.',
    canonical: canonicalFor('/courses/'),
  })

  return (
    <>
      <PageHero
        eyebrow="Structured programmes"
        title="Courses & Test Series"
        lead="Concept-first teaching for aspirants who want structure rather than a pile of PDFs — paired with practice built to the current exam pattern."
        trail={[{ label: 'Courses' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/courses/live-classes/">
              See Live Classes
            </Link>
            <Link className="btn btn--o" to="/practice/test-series/">
              Explore Test Series
            </Link>
          </>
        }
      />

      <CoursesSection />
      <FacultySection background />
      <FinalCta
        title="Structure beats scattered study"
        lead="Pick a course for the concepts and a test series for the practice — the two are designed to work together."
      />
    </>
  )
}
