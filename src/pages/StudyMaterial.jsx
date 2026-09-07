import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { PageHero, SectionHead, Tile, canonicalFor, useSeo } from '../components/ui'
import { NAV } from '../data/nav'
import { STUDY_TILES } from '../data/site'
import { FinalCta } from './home/sections'

const SECTION = NAV[2]

export default function StudyMaterial() {
  useSeo({
    title: 'Free Study Material for Competitive Exams | Brolly Exam Prep',
    description:
      'Free competitive exam study material - Quantitative Aptitude, Reasoning, English, General Studies, science, VARC, DILR and Legal Reasoning, with solved examples.',
    canonical: canonicalFor('/study-material/'),
  })

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Study Material"
        lead={SECTION.desc}
        trail={[{ label: 'Study Material' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/practice/daily-quiz/">
              Practise Today's Quiz
            </Link>
            <Link className="btn btn--o" to="/previous-year-papers/">
              Previous-Year Papers
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Free resources"
            title="Study by subject"
            lead="Subject-wise notes, formula sheets and topic PDFs, organised so you can study by subject or by exam."
          />
          <div className="g3">
            {STUDY_TILES.map((tile) => (
              <Tile key={tile.to} to={tile.to} icon="book" title={tile.title} sub={tile.sub} />
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Complete library"
            title="Every topic, chapter by chapter"
            lead="Concept lessons organised by subject, chapter and topic — reused intelligently across exams."
          />
          <LinkColumns groups={SECTION.groups} columns={3} />
        </div>
      </section>

      <FinalCta
        title="Study smarter, then test what stuck"
        lead="Read the concept, then attempt a topic test on the same page — that is when the material starts sticking."
      />
    </>
  )
}
