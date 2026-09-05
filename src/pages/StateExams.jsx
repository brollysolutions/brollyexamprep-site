import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import {
  PageHero,
  SectionBar,
  SectionHead,
  Tile,
  useJsonLd,
  useMeta,
  useTitle,
} from '../components/ui'
import { STATE_PAGES, stateFaqs } from '../data/states'
import { FaqSection, FinalCta } from './home/sections'
import Directory from './Directory'

/**
 * A single state's government-exam page — /government-exams/state/:state/.
 *
 * Three sections carry the state-specific content: the job categories run by
 * that state, a group-by-group comparison table, and the free mock tests.
 * States without a record fall through to the generic directory page.
 */
export default function StateExams() {
  const { state: slug } = useParams()
  const state = STATE_PAGES[slug]

  if (!state) return <Directory />

  return <StatePage state={state} />
}

function StatePage({ state }) {
  const { jobs, compare, mocks, intro, qualifications, choose, prepare, related } = state
  const faqs = stateFaqs(state)
  const heading = state.h1 || state.title

  useTitle(state.seoTitle || state.title, { exact: Boolean(state.seoTitle) })
  useMeta({ description: state.metaDescription, canonical: canonicalUrl(state) })
  useJsonLd(structuredData(state, faqs))

  return (
    <>
      <PageHero
        eyebrow="State Government Exams"
        title={heading}
        lead={state.lead}
        trail={[
          { label: 'Government Exams', to: '/government-exams/' },
          { label: 'State Government', to: '/government-exams/state/' },
          { label: state.name },
        ]}
        actions={
          <>
            <Link className="btn btn--y" to={mocks.linkTo}>
              Take a Free Mock Test
            </Link>
            <Link className="btn btn--o" to="/exam-calendar/">
              Exam Calendar
            </Link>
          </>
        }
      />

      {/* ── Answer-first definition ── */}
      {intro && (
        <section className="s">
          <div className="wrap">
            <SectionHead eyebrow={intro.eyebrow} title={intro.title} />
            <div className="answer-box">
              <p>{intro.answer}</p>
            </div>
            <p className="lead">{intro.lead}</p>
          </div>
        </section>
      )}

      {/* ── Job categories ── */}
      <section className="s">
        <div className="wrap">
          <SectionBar
            eyebrow={jobs.eyebrow}
            title={jobs.title}
            lead={jobs.lead}
            linkTo={jobs.linkTo}
            linkLabel={jobs.linkLabel}
          />
          <div className="cats">
            {jobs.items.map((job) => (
              <Link className="cat" key={job.to} to={job.to}>
                <h3>{job.name}</h3>
                <p>{job.desc}</p>
                <span className="cat__spec">{job.stages}</span>
                <span className="cat__go">
                  View exam <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Group comparison ── */}
      <section className="s s--bg">
        <div className="wrap">
          <SectionHead eyebrow={compare.eyebrow} title={compare.title} lead={compare.lead} />
          <div className="ctable-wrap">
            <table className="ctable">
              <caption>{compare.caption}</caption>
              <thead>
                <tr>
                  {compare.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.rows.map(([group, ...cells]) => (
                  <tr key={group}>
                    <th scope="row">{group}</th>
                    {cells.map((cell, i) => (
                      <td key={compare.columns[i + 1]} data-label={compare.columns[i + 1]}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* The table says what the groups are; this says how to pick one. */}
          {choose && (
            <div className="choose">
              <h3>{choose.title}</h3>
              <ol className="checklist">
                {choose.items.map((item) => (
                  <li key={item.name}>
                    <b>{item.name}</b>
                    {item.desc}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      {/* ── Which exams your qualification opens ── */}
      {qualifications && (
        <section className="s">
          <div className="wrap">
            <SectionHead
              eyebrow={qualifications.eyebrow}
              title={qualifications.title}
              lead={qualifications.lead}
            />
            <div className="feats">
              {qualifications.items.map((item) => (
                <div className="ft" key={item.name}>
                  <span className="ft__i">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Preparation path ── */}
      {prepare && (
        <section className="s s--bg">
          <div className="wrap">
            <SectionHead
              eyebrow={prepare.eyebrow}
              title={prepare.title}
              lead={prepare.lead}
            />
            <div className="steps">
              {prepare.steps.map((step) => (
                <div className="st" key={step.n}>
                  <span className="st__n">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
            {prepare.note && (
              <div className="answer-box answer-box--after">
                <p>{prepare.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Free mock tests ── */}
      <section className="s">
        <div className="wrap">
          <SectionBar
            eyebrow={mocks.eyebrow}
            title={mocks.title}
            lead={mocks.lead}
            linkTo={mocks.linkTo}
            linkLabel={mocks.linkLabel}
          />
          <div className="mocks">
            {mocks.items.map((mock) => (
              <Link className="mk" key={mock.to} to={mock.to}>
                <span className="pill pill--free mk__free">Free</span>
                <span className="mk__cat">{mock.cat}</span>
                <h3>{mock.title}</h3>
                <p className="mk__spec">Full length · {state.languages}</p>
                <span className="mk__go">
                  Take Free Test <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related preparation and the official sources ── */}
      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow={related?.eyebrow || 'Related'}
            title={related?.title || `More ${state.name} Preparation`}
            lead={related?.lead}
          />
          <div className="g4">
            <Tile
              to="/previous-year-papers/"
              icon="doc"
              title="Previous-year papers"
              sub={`Past ${state.commission} papers with solutions`}
            />
            <Tile
              to="/study-material/"
              icon="book"
              title="Study material"
              sub="Subject-wise concepts and notes"
            />
            <Tile
              to="/current-affairs/"
              icon="globe"
              title="Current affairs"
              sub="Daily, weekly and monthly"
            />
            <Tile
              to="/exam-updates/"
              icon="bell"
              title="Exam updates"
              sub="Notifications, admit cards and results"
            />
          </div>
          <aside className="source-note" aria-labelledby={`${state.slug}-source-title`}>
            <h3 id={`${state.slug}-source-title`}>Verify {state.name} exam facts officially</h3>
            <p>
              Brolly supports preparation. The recruiting body remains the authority for
              notifications, eligibility, vacancies, dates and results — check the current
              notification before you rely on any stage, mark or post list above.
            </p>
            <div className="source-links">
              {state.sources.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <FaqSection
        items={faqs}
        title={`${state.name} Government Exams — FAQs`}
        background={false}
      />
      <FinalCta
        title={`Start Your ${state.commission} Preparation Today`}
        lead={`Pick the group your qualification allows, attempt a free mock in ${state.languages}, then work on the section that costs you the most marks.`}
      />
    </>
  )
}

const ORIGIN = 'https://brollyexamprep.com'

function canonicalUrl(state) {
  return `${ORIGIN}/government-exams/state/${state.slug}/`
}

/**
 * WebPage, BreadcrumbList and FAQPage for the state being rendered, so the
 * questions on the page can be read as structured data rather than prose.
 */
function structuredData(state, faqs) {
  const url = canonicalUrl(state)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: state.h1 || state.title,
      description: state.metaDescription || [state.lead].flat().join(' '),
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${ORIGIN}/#website` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Government Exams', item: `${ORIGIN}/government-exams/` },
        { '@type': 'ListItem', position: 2, name: 'State Government Exams', item: `${ORIGIN}/government-exams/state/` },
        { '@type': 'ListItem', position: 3, name: state.h1 || state.title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ]
}
