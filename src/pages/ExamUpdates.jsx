import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
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

      <FinalCta
        title="Never miss a notification again"
        lead="Create a free account and follow the exams you are preparing for."
      />
    </>
  )
}
