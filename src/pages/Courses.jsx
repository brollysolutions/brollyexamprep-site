import { Link } from 'react-router-dom'
import { PageHero, useTitle } from '../components/ui'
import { CoursesSection, FacultySection, FinalCta } from './home/sections'

export default function Courses() {
  useTitle('Courses & Test Series')

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
