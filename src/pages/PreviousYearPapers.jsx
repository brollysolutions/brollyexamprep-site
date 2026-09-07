import { Link } from 'react-router-dom'
import { PageHero, SectionHead, Tile, canonicalFor, useSeo } from '../components/ui'
import { PREVIOUS_PAPERS } from '../data/site'
import { FaqSection, FinalCta } from './home/sections'

const HOW = [
  {
    n: '01',
    title: 'Read the paper before solving it',
    desc: 'Skim a full paper first and note which topics appear, how many marks each carries and how the questions are framed.',
  },
  {
    n: '02',
    title: 'Solve it untimed, then timed',
    desc: 'The first pass tells you what you know. The second tells you what you can do inside the clock.',
  },
  {
    n: '03',
    title: 'Track repeats across cycles',
    desc: 'Topics that appear in three consecutive years are not coincidence — they are the paper telling you where the marks live.',
  },
  {
    n: '04',
    title: 'Convert misses into topic tests',
    desc: 'Every wrong answer maps to a topic. Practise that topic before you attempt the next paper.',
  },
]

const PAPER_FAQS = [
  {
    q: 'How many years of papers should I solve?',
    a: 'Five recent cycles is usually enough to see the trend. Going back further helps only when the exam pattern has stayed stable across that period.',
  },
  {
    q: 'Are solutions included?',
    a: 'Yes. Every paper carries worked solutions, and each question links back to the concept lesson for the topic it tests.',
  },
]

export default function PreviousYearPapers() {
  useSeo({
    title: 'Previous Year Question Papers with Solutions | Brolly Exam Prep',
    description:
      'Previous-year question papers with answer keys and solutions for SSC, banking, railway, UPSC and state exams, arranged by exam and by year.',
    canonical: canonicalFor('/previous-year-papers/'),
  })

  return (
    <>
      <PageHero
        eyebrow="Real exam questions"
        title="Previous-Year Question Papers"
        lead="Understand the real exam pattern, frequently asked topics and question trends with previous-year papers and detailed solutions."
        trail={[{ label: 'Previous Year Papers' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/previous-year-papers/ssc/">
              SSC Papers
            </Link>
            <Link className="btn btn--o" to="/previous-year-questions/">
              Question-wise Practice
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead eyebrow="Browse by exam" title="Papers by exam family" />
          <div className="g4">
            {PREVIOUS_PAPERS.map((paper) => (
              <Tile key={paper.to} to={paper.to} icon="doc" title={paper.title} sub={paper.sub} />
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Method"
            title="Using previous papers the right way"
            lead="Most aspirants solve previous papers like mock tests. Reading them as evidence of what the examiner cares about is more useful."
          />
          <div className="steps">
            {HOW.map((step) => (
              <div className="st" key={step.n}>
                <span className="st__n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection items={PAPER_FAQS} title="Previous Papers — FAQs" background={false} />
      <FinalCta />
    </>
  )
}
