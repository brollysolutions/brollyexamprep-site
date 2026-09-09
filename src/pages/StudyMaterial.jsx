import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { ContentSection } from '../components/Blocks'
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
            <Link className="btn btn--k" to="/study-material/quantitative-aptitude/">
              Start with Quantitative Aptitude
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

      <ContentSection
        id="use-study-material"
        eyebrow="A working method"
        heading="Turn each lesson into recall and exam performance"
        intro="Reading creates familiarity; examinations require retrieval, selection and accuracy under time. Every topic therefore needs a short cycle that moves beyond the lesson itself."
        blocks={[
          {
            type: 'steps',
            items: [
              { text: 'Locate the topic in your official syllabus.', note: 'Know which paper and section it belongs to before deciding how deeply to study it.' },
              { text: 'Learn from one complete explanation.', note: 'Work through definitions, rules and examples without switching between several incomplete sources.' },
              { text: 'Close the page and reconstruct the idea.', note: 'Write the formula, rule, sequence or argument from memory; the gap you notice is the part that needs another look.' },
              { text: 'Solve a mixed question set.', note: 'Questions should make you identify the method rather than announce the chapter in advance.' },
              { text: 'Record errors by cause.', note: 'Separate missing knowledge, wrong method, misreading, calculation slips and time pressure because each needs a different correction.' },
              { text: 'Revisit after three days and two weeks.', note: 'Short spaced retrieval protects the topic better than one long reading session.' },
            ],
          },
          {
            type: 'list',
            title: 'Keep a source only when it earns its place',
            items: [
              { text: 'It matches the exam’s depth', note: 'material for a harder paper can waste time; material for an easier one leaves gaps.' },
              { text: 'It can be revised', note: 'a concise, well-structured source usually beats a huge library you cannot revisit.' },
              { text: 'It connects concepts to questions', note: 'examples and practice reveal whether understanding transfers.' },
              { text: 'Time-sensitive facts are dated and sourced', note: 'current affairs, office-holders, figures and rules need a visible reference period.' },
            ],
          },
        ]}
      />

      <FinalCta
        title="Study smarter, then test what stuck"
        lead="Read the concept, then attempt a topic test on the same page — that is when the material starts sticking."
      />
    </>
  )
}
