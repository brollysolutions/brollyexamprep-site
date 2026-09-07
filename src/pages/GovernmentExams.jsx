import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import Icon, { Arrow } from '../components/Icon'
import { NAV } from '../data/nav'
import { EXAM_CATEGORIES } from '../data/site'
import { FinalCta, PopularExams, PrepTabs } from './home/sections'

const SECTION = NAV[0]

export default function GovernmentExams() {
  useSeo({
    title: 'Government Exams in India | Brolly Exam Prep',
    description:
      'Guides to UPSC, SSC, banking, railway, defence, teaching and state PSC exams - eligibility, syllabus, exam dates, previous papers and free mock tests.',
    canonical: canonicalFor('/government-exams/'),
  })

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Government Exams in India"
        lead={SECTION.desc}
        trail={[{ label: 'Government Exams' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/mock-tests/free/">
              Take a Free Mock Test
            </Link>
            <Link className="btn btn--o" to="/exam-calendar/">
              Exam Calendar
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Browse by category"
            title="Pick the category you are preparing for"
            lead="Each category page carries the syllabus, exam pattern, previous papers, mock tests and study material for every exam it contains."
          />
          <div className="cats">
            {EXAM_CATEGORIES.map((cat) => (
              <Link className="cat" key={cat.title} to={cat.to}>
                <span className="cat__i">
                  <Icon name={cat.icon} size={20} />
                </span>
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <span className="cat__go">
                  Explore <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Full index"
            title="All Government Exams A–Z"
            lead="Every government exam covered on Brolly, grouped by recruiting body."
          />
          <LinkColumns groups={SECTION.groups} columns={3} />
        </div>
      </section>

      <PopularExams />
      <PrepTabs />
      <FinalCta />
    </>
  )
}
