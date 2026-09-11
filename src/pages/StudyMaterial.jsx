import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
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

      <Doc>
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

        <ContentSection
          id="which-subjects"
          eyebrow="Choosing"
          heading="Which subjects your examination actually needs"
          background
          intro="The library is organised by subject rather than by exam, because a percentage question is the same question whichever paper sets it. What differs between examinations is which subjects appear and how deeply — so start from the table below rather than from the top of the list."
          blocks={[
            {
              type: 'table',
              caption:
                'The usual subject mix by exam family. The syllabus attached to your own notification is what settles it; this is a starting point, not a substitute.',
              head: ['If you are preparing for', 'Core subjects', 'Also examined'],
              rows: [
                [
                  'SSC recruitment',
                  'Quantitative aptitude, reasoning, English, general knowledge.',
                  'Mathematics at tier-two depth, and general science within general awareness.',
                ],
                [
                  'Banking and insurance',
                  'Quantitative aptitude, reasoning, English.',
                  'General and financial awareness, with computer awareness in several papers.',
                ],
                [
                  'Railway recruitment',
                  'General awareness, mathematics, reasoning.',
                  'General science, and a technical subject for technical posts.',
                ],
                [
                  'UPSC and state civil services',
                  'History, geography, polity, constitution, economy, environment.',
                  'Science and technology, current affairs, and a reasoning and data block.',
                ],
                [
                  'Defence entries',
                  'Mathematics, English, general knowledge.',
                  'Physics, chemistry and general science within the general ability paper.',
                ],
                [
                  'Teaching eligibility and recruitment',
                  'The subject you will teach, at school level, plus pedagogy.',
                  'Languages, environmental studies or social studies depending on the paper.',
                ],
                [
                  'MBA entrances',
                  'VARC, DILR, quantitative aptitude.',
                  'Decision-making and general awareness in some papers.',
                ],
                [
                  'Law entrances',
                  'Legal reasoning, English, logical reasoning.',
                  'Current affairs and general knowledge, and quantitative techniques.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'Depth is set by your paper, not by the lesson',
              text: 'Each lesson is written to the depth of the hardest examination that uses the topic, with lighter treatments flagged where an easier paper does not require the full method. Reading a topic at a depth your paper never reaches is one of the commonest ways to spend a month without moving a score — check the weighting table on each subject page before deciding how far to go.',
            },
          ]}
        />

        <ContentSection
          id="what-a-lesson-contains"
          eyebrow="How to read one"
          heading="What is inside a lesson, and the order to use it in"
          intro="Every topic page follows the same structure, so once you have worked through one you know how to work through all of them. The order matters more than it appears to."
          blocks={[
            {
              type: 'steps',
              items: [
                {
                  title: 'The weighting panel, first.',
                  text: 'It records what the exams that set this topic typically ask of it. Read it before the lesson and it tells you how much of the lesson you actually need.',
                },
                {
                  title: 'The concept sections, once.',
                  text: 'Definitions, rules, formula tables and the reasoning behind them. Read once — resist the urge to reread before you have solved anything, because rereading builds recognition rather than capability.',
                },
                {
                  title: 'The worked examples, with a pen.',
                  text: 'Worked line by line so the method is visible. Cover the working, attempt the question, then compare — reading a solution you did not attempt teaches very little.',
                },
                {
                  title: 'The practice questions, with explanations.',
                  text: 'This is where the lesson stops being reading. Every question has an explanation of why the answer is right, which is the part to read carefully when you get one wrong.',
                },
                {
                  title: 'The FAQs and related topics.',
                  text: 'The questions candidates actually ask about the topic, and the sibling lessons that build on it or depend on it.',
                },
                {
                  title: 'A test, the same day.',
                  text: 'A sectional or full diagnostic within hours of finishing the lesson. Recall tested the same day is what decides whether the topic survives the week.',
                },
              ],
            },
            {
              type: 'links',
              title: 'Then measure what stuck',
              items: [
                { label: 'Free diagnostic mock tests', to: '/mock-tests/free/' },
                { label: 'Topic and sectional practice', to: '/practice/' },
                { label: 'Previous-paper analysis method', to: '/previous-year-papers/' },
                { label: 'Exam guides with syllabus and pattern', to: '/government-exams/' },
              ],
            },
          ]}
        />

      </Doc>
      <FinalCta
        title="Study smarter, then test what stuck"
        lead="Read the concept, then attempt a topic test on the same page — that is when the material starts sticking."
      />
    </>
  )
}
