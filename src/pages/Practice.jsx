import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { NAV } from '../data/nav'
import { STEPS } from '../data/site'
import { Analytics, FinalCta, FreeMockTests } from './home/sections'

const SECTION = NAV[3]

export default function Practice() {
  useSeo({
    title: 'Practice - Daily Quiz, Topic Tests and Mock Tests | Brolly Exam Prep',
    description:
      'Exam preparation methods, topic lessons, previous-paper analysis and the timed diagnostic mock tests currently available with worked explanations.',
    canonical: canonicalFor('/practice/'),
  })

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Practice"
        lead={SECTION.desc}
        trail={[{ label: 'Practice' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/study-material/">
              Practise by Topic
            </Link>
            <Link className="btn btn--y" to="/mock-tests/free/">
              Take a Free Mock Test
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="How practice works here"
            title="Four steps from learning to selection"
            lead="Practice is only useful when it changes what you study next. Every attempt here feeds the next one."
          />
          <div className="steps">
            {STEPS.map((step) => (
              <div className="st" key={step.n}>
                <span className="st__n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Everything to practise"
            title="Daily questions, tests and papers"
            lead="Pick the format that matches how much time you have today."
          />
          <LinkColumns groups={SECTION.groups} columns={4} />
        </div>
      </section>

      <Doc>
        <ContentSection
          id="which-format"
          eyebrow="Choosing a format"
          heading="Match the practice format to the problem you actually have"
          intro="Practice formats are not interchangeable, and using the wrong one is how candidates put in hours without moving a score. Start from what your last timed attempt exposed."
          blocks={[
            {
              type: 'table',
              head: ['What your last attempt showed', 'The format that fixes it', 'Why'],
              rows: [
                [
                  'You did not know the concept',
                  'Topic lesson, then topic questions.',
                  'No amount of timed practice teaches a method you have never learned. Study first, then test.',
                ],
                [
                  'You knew it but used the wrong method',
                  'Mixed question sets within one subject.',
                  'Topic sets announce the method in advance; the exam does not. Mixed sets train the selection.',
                ],
                [
                  'You knew it and ran out of time',
                  'Sectional tests at exam pace.',
                  'The problem is pacing inside a section, and a full paper measures it without isolating it.',
                ],
                [
                  'You were fine per section, poor overall',
                  'Full-length papers, one sitting.',
                  'This is stamina and switching cost, and only a full paper reproduces it.',
                ],
                [
                  'You lost marks to calculation slips',
                  'A daily calculation drill.',
                  'A mechanical skill built by repetition. It is not a test and it should not be treated as one.',
                ],
                [
                  'You could not recall facts under pressure',
                  'Daily quiz and spaced retrieval.',
                  'Recall decays and recovers quickly. Short frequent retrieval beats long revision sessions.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'A score is a symptom, not a diagnosis',
              text: 'The number at the end of an attempt tells you that something is wrong; it never tells you what. The diagnosis comes from sorting every loss by cause — did not know, misread, wrong method, calculation slip, ran out of time — and those five causes lead to five different formats above. Candidates who skip this step tend to respond to every bad score by taking another test.',
            },
          ]}
        />

        <ContentSection
          id="practice-week"
          eyebrow="A repeatable week"
          heading="What a week of practice should contain"
          background
          intro="Consistency matters more than intensity here, because most of what practice builds — recall, calculation speed, pattern recognition, pacing — accumulates and decays rather than being learned once."
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'Fifteen minutes of calculation, daily',
                  note: 'tables, squares, fraction-to-percentage equivalents, on paper and without a calculator. The least glamorous habit on this list and the highest-return one.',
                },
                {
                  text: 'Ten to twenty questions on the current topic, daily',
                  note: 'attempted within hours of reading the lesson. Same-day retrieval is what decides whether a topic survives the week.',
                },
                {
                  text: 'Two sectional tests, midweek',
                  note: 'on the two sections your last full paper was weakest in. Sectional work isolates what a full paper only reports.',
                },
                {
                  text: 'One full-length paper, weekly',
                  note: 'in a single uninterrupted sitting, at the time of day the examination is held.',
                },
                {
                  text: 'One error-review session, weekly',
                  note: 're-solving previous mistakes without looking at the explanation first. This is where the previous week actually converts into marks.',
                },
                {
                  text: 'Current affairs retrieval, daily',
                  note: 'short, quizzed rather than read, and connected back to the static polity, economy and geography it belongs to.',
                },
              ],
            },
            {
              type: 'note',
              title: 'Analysis should take longer than the attempt',
              text: 'A twenty-minute test reviewed for forty minutes produces more improvement than three twenty-minute tests reviewed for five. The attempt generates the data; the review is the only part that changes anything. Candidates who take many tests and review none plateau, and the plateau is usually mistaken for a ceiling.',
            },
          ]}
        />

      </Doc>
      <FreeMockTests />
      <Analytics />
      <FinalCta
        title="Consistent practice beats occasional study"
        lead="Ten questions a day, one full mock a week, and an honest look at the analysis afterwards."
      />
    </>
  )
}
