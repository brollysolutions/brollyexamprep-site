import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { NAV } from '../data/nav'
import { FinalCta, ExamUpdatesSection, PopularExams } from './home/sections'

const SECTION = NAV[5]

export default function ExamUpdates() {
  useSeo({
    title: 'Latest Government Exam Updates, Results and Notifications | Brolly Exam Prep',
    description:
      'Official exam notifications, application dates, vacancies, admit cards, answer keys, cut-offs and results for SSC, UPSC, banking, railway and state exams.',
    canonical: canonicalFor('/exam-updates/'),
  })

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Exam Updates"
        lead={SECTION.desc}
        trail={[{ label: 'Exam Updates' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/exam-updates/latest-notifications/">
              Latest Notifications
            </Link>
            <Link className="btn btn--o" to="/exam-calendar/">
              Exam Calendar
            </Link>
          </>
        }
      />

      <ExamUpdatesSection background={false} />
      <PopularExams />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Track every stage"
            title="From notification to result"
            lead="Each official event for an exam cycle, tracked in one place."
          />
          <LinkColumns groups={SECTION.groups} columns={4} />
        </div>
      </section>

      <Doc>
        <ContentSection
          id="cycle-stages"
          eyebrow="The vocabulary"
          heading="What each stage of a recruitment cycle actually is"
          intro="A recruitment cycle runs through a fixed sequence of official events, and each one carries its own deadline and its own consequence for missing it. The terms are used loosely everywhere except in the notification itself."
          blocks={[
            {
              type: 'defs',
              items: [
                [
                  'Notification',
                  'The document that opens a recruitment and binds the conducting body. It fixes eligibility, the reckoning date for age and qualification, the paper structure, marking, stages, reservation and the application window. Everything else in the cycle is subordinate to it, including anything written about it elsewhere.',
                ],
                [
                  'Corrigendum',
                  'An amendment issued after the notification. It can change dates, eligibility, vacancies or paper structure, and it overrides the original document. Checking the notices page before a planning decision is how candidates avoid preparing to a superseded version.',
                ],
                [
                  'Application window',
                  'The period in which the form can be submitted, with a separate and usually earlier deadline for fee payment. Windows are occasionally extended and never reliably so; treating the first date as the only date is the safe assumption.',
                ],
                [
                  'Correction window',
                  'A short period, where offered, in which specified fields on a submitted form may be edited. What is editable varies and some fields never are, which is why the form is worth reading twice before submission.',
                ],
                [
                  'Admit card',
                  'Issued shortly before the examination with the centre, date, shift and reporting time. It carries instructions about identification and permitted items that are enforced strictly at the centre.',
                ],
                [
                  'Provisional answer key and objection window',
                  'Published after a computer-based stage, usually with the candidate’s own response sheet, and open to challenge for a short period, often against a fee. Files published here frequently disappear once the window closes — download them while they are available.',
                ],
                [
                  'Final key and result',
                  'The accepted answers after objections are decided, and the outcome of the stage. A provisional answer is not always the final one, so any analysis built on the provisional key needs rechecking.',
                ],
                [
                  'Document verification',
                  'Confirmation that eligibility claimed at application actually existed on the reckoning date. Claims cannot be repaired at this stage, which is why the eligibility clause is worth reading before applying rather than after a result.',
                ],
              ],
            },
          ]}
        />

        <ContentSection
          id="tracking-method"
          eyebrow="Method"
          heading="How to track notifications without living on a notifications page"
          background
          intro="Almost nobody who misses a window misses it through unpreparedness. They miss it through not having looked, and the fix is a routine rather than more vigilance."
          blocks={[
            {
              type: 'steps',
              items: [
                {
                  title: 'Bookmark the conducting body’s own notices page, not an aggregator.',
                  text: 'Aggregators are convenient and they lag, paraphrase and occasionally get eligibility wrong. Every recruitment you are seriously considering should have its official page bookmarked.',
                },
                {
                  title: 'Set one recurring reminder, not a habit of checking.',
                  text: 'A fixed interval — weekly for bodies that notify often, fortnightly for the rest. The cost of checking is a few minutes; the cost of checking late is a cycle.',
                },
                {
                  title: 'Keep one sheet per recruitment you are tracking.',
                  text: 'Columns for notification date, application window, fee deadline, correction window, examination date, and the link to the official page. It takes ten minutes to set up and it removes the whole class of missed-deadline failures.',
                },
                {
                  title: 'On the day a notification appears, read the eligibility clause first.',
                  text: 'Before the syllabus and before any commentary. If you are not eligible, nothing else on the page matters; if you are, the reckoning dates go straight onto the sheet.',
                },
                {
                  title: 'Diff the new pattern against the previous cycle.',
                  text: 'Paper count, marks, duration, negative marking, stages. The differences are the whole of your new work, and preparing to last cycle’s structure is a self-inflicted loss.',
                },
                {
                  title: 'Download everything the moment it is published.',
                  text: 'Notification, syllabus, admit card, response sheet, provisional and final keys. Several of these are withdrawn once a window closes.',
                },
              ],
            },
            {
              type: 'note',
              title: 'What this site can and cannot tell you',
              text: 'The pages here explain how a recruitment is structured and where its official documents are published. They are not faster or more authoritative than the conducting body’s own announcement, and they are not a substitute for it. For a date, a result, a fee or an eligibility question, the body’s own notice is the answer and everything else is a description of it.',
            },
          ]}
        />

      </Doc>
      <FinalCta
        title="Never miss a notification again"
        lead="Create a free account and follow the exams you are preparing for."
      />
    </>
  )
}
