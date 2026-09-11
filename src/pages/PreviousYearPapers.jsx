import { Link } from 'react-router-dom'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
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
    a: 'Not as a blanket promise. Brolly currently provides exam-specific methods for locating and analysing papers; use conducting-body archives for authoritative paper and answer-key files. A page states explicitly when a worked solution is actually available.',
  },
]

export default function PreviousYearPapers() {
  useSeo({
    title: 'How to Find and Analyse Previous Exam Papers | Brolly',
    description:
      'Find official previous exam papers and learn how to analyse topic frequency, question form, timing and pattern changes without mistaking familiarity for progress.',
    canonical: canonicalFor('/previous-year-papers/'),
  })

  return (
    <>
      <PageHero
        eyebrow="Past-paper method"
        title="Find and Analyse Previous-Year Papers"
        lead="Use conducting-body archives for authoritative files, then analyse the papers to understand question form, topic weighting and pattern changes."
        trail={[{ label: 'Previous Year Papers' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/government-exams/ssc/">
              SSC Exam Guides
            </Link>
            <Link className="btn btn--o" to="/previous-year-questions/">
              Question-wise Practice
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead eyebrow="Browse by exam" title="Find exam-specific paper guidance" />
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

      <Doc>
        <ContentSection
          id="where-papers-are-published"
          eyebrow="Sourcing"
          heading="Where official papers and keys are actually published"
          intro={[
            'Conducting bodies differ in how much of a paper they release, and the difference is worth knowing before you spend an evening searching. Some publish the question paper itself; some publish only an answer key and a candidate response sheet, and only during a short objection window; some publish neither.',
            'The rule that follows is to collect what is released while it is released. An objection window closes, and a response sheet that was downloadable in that window is often not downloadable afterwards.',
          ]}
          blocks={[
            {
              type: 'table',
              caption:
                'What each kind of body typically makes available. Release practice changes between cycles, so treat this as where to look rather than as a guarantee of what you will find.',
              head: ['Conducting body', 'Usually available', 'Where to look'],
              rows: [
                [
                  'UPSC',
                  'Question papers for its examinations, published after the examination and retained in an archive.',
                  'The examination archive on the commission’s own site, organised by examination and year.',
                ],
                [
                  'SSC',
                  'Answer keys and candidate response sheets, released for a limited objection window after each computer-based stage.',
                  'The candidate login and the notices page on the commission’s site, during the window announced with the key.',
                ],
                [
                  'NTA-conducted entrance tests',
                  'Question papers and provisional answer keys, with a challenge window before the final key.',
                  'The examination-specific site for the test, under answer key or challenge notices.',
                ],
                [
                  'Railway recruitment boards',
                  'Response sheets and keys during objection windows; full papers are not routinely published.',
                  'The zonal board site that issued your application, plus the central notices page.',
                ],
                [
                  'Banking recruitment bodies',
                  'Rarely publish papers or keys; memory-based reconstructions circulate instead.',
                  'Use the official pattern and sample material, and treat reconstructions as practice volume only.',
                ],
                [
                  'State commissions',
                  'Practice varies widely; several publish papers and keys, including under a former commission name.',
                  'The commission’s own previous-papers or notices archive, searched by both the current and former names.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'Memory-based papers are practice, not evidence',
              text: 'Where a body does not publish its papers, sets reconstructed from candidate recollection circulate widely. They are useful for topic spotting and question volume. They are unreliable for exact wording, difficulty and marking, so never draw a conclusion about a pattern change from one. Anything you intend to treat as evidence should come from the conducting body.',
            },
          ]}
        />

        <ContentSection
          id="frequency-table"
          eyebrow="Original analysis"
          heading="Build a topic-frequency table from the papers you have"
          background
          intro="A syllabus lists topics with equal visual weight. A frequency table shows which of them actually carry marks, and it is the single most useful document a candidate can build for themselves — because it is built from their own exam rather than from somebody’s summary of it."
          blocks={[
            {
              type: 'steps',
              items: [
                {
                  title: 'Choose three to five consecutive cycles.',
                  text: 'Consecutive matters more than numerous: a pattern change in the middle of your sample is informative, while a gap of four years hides one.',
                },
                {
                  title: 'Give every question one row.',
                  text: 'Columns: year, stage, section, narrow topic, question form, and whether you answered it correctly on a cold attempt.',
                },
                {
                  title: 'Tag narrowly and consistently.',
                  text: '“Simple interest” rather than “arithmetic”; “Fundamental Rights — Article 21” rather than “polity”. Write your tag list down and reuse it, or the counts will not add up.',
                },
                {
                  title: 'Count the tags and sort.',
                  text: 'The top of that list is what the examiner has been asking. It is usually a much shorter list than the syllabus, and it is usually not the list you would have guessed.',
                },
                {
                  title: 'Cross it with your own accuracy.',
                  text: 'High frequency plus low accuracy is your study list, in order. Nothing else on the sheet earns attention until that column is short.',
                },
                {
                  title: 'Re-run it after each new cycle.',
                  text: 'One extra year takes twenty minutes to tag and keeps the table current. It also shows you a pattern shift in the year it happens rather than two years later.',
                },
              ],
            },
            {
              type: 'table',
              caption:
                'The shape of a finished table. Fill it from your own tagging — the tags and counts below are an illustration of the format, not published figures for any exam.',
              head: ['Topic tag', 'Appearances', 'Your accuracy', 'Action'],
              rows: [
                ['Topic appearing every cycle, answered well', 'Every cycle', 'High', 'Maintain with occasional revision. Do not spend new hours here.'],
                ['Topic appearing every cycle, answered badly', 'Every cycle', 'Low', 'First priority. This is where the recoverable marks are.'],
                ['Topic appearing occasionally, answered badly', 'Some cycles', 'Low', 'Second priority, and only after the row above is fixed.'],
                ['Topic appearing once in the sample', 'One cycle', 'Any', 'Leave it. One appearance is not a pattern.'],
              ],
            },
          ]}
        />

        <ContentSection
          id="limits"
          eyebrow="Being straight about it"
          heading="What previous papers cannot tell you"
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'They cannot tell you the cutoff',
                  note: 'a cutoff is the score of the last candidate selected, and it depends on that cycle’s vacancies, applicants and paper difficulty. A past cutoff describes a past field, not a target.',
                },
                {
                  text: 'They cannot predict a pattern change',
                  note: 'patterns are changed by notification, not by trend. A paper archive shows you what has been; the current notification is the only source for what will be.',
                },
                {
                  text: 'They stop being a measurement once you have seen them',
                  note: 'a paper you have worked through tests recall of that paper. Keep two unseen until the final month so at least two of your measurements are honest.',
                },
                {
                  text: 'They do not show what was hard for other candidates',
                  note: 'without the score distribution, a question you found easy may have been the one that separated the field. Treat difficulty judgements as your own, not the paper’s.',
                },
                {
                  text: 'They are not a syllabus',
                  note: 'a topic absent from your sample can still be examined. Frequency decides study order; the official syllabus decides scope.',
                },
              ],
            },
            {
              type: 'links',
              title: 'Where to go next',
              items: [
                { label: 'Exam guides with syllabus and pattern', to: '/government-exams/' },
                { label: 'Study material by subject', to: '/study-material/' },
                { label: 'Free mock tests', to: '/mock-tests/free/' },
                { label: 'Question-wise practice', to: '/previous-year-questions/' },
              ],
            },
          ]}
          background
        />

      </Doc>
      <FaqSection items={PAPER_FAQS} title="Previous Papers — FAQs" background={false} />
      <FinalCta />
    </>
  )
}
