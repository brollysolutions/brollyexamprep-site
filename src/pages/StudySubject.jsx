import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { PageHero, SectionHead, useJsonLd, useMeta, useTitle } from '../components/ui'
import { NAV } from '../data/nav'
import { getTopic, SUBJECTS, topicsInSubject } from '../data/study'
import { humanise } from '../lib/labels'
import { FinalCta } from './home/sections'

const ORIGIN = 'https://brollyexamprep.com'

/**
 * A subject landing page — /study-material/:subject/
 *
 * Splits the subject's nav links into topics that are actually written and
 * topics still to come, so the page never promises notes that do not exist.
 * The written list comes from the topic registry; the planned list is whatever
 * the nav tree carries that the registry does not.
 */
export default function StudySubject() {
  const { subject } = useParams()
  const meta = SUBJECTS[subject]
  const name = meta?.name || humanise(subject || '')

  const written = topicsInSubject(subject)
  const planned = plannedFor(subject)

  const canonical = `${ORIGIN}/study-material/${subject}/`
  const description =
    meta && written.length
      ? `${name} study material for competitive exams — ${written.map((t) => t.title).join(', ')}. Concepts, formulas, solved examples and practice questions.`
      : `${name} study material and topic notes for competitive exams on Brolly Exam Prep.`

  useTitle(`${name} Study Material for Competitive Exams`, { exact: true })
  useMeta({ description, canonical })
  useJsonLd(structuredData({ subject, name, description, canonical, written }))

  return (
    <>
      <PageHero
        eyebrow="Study Material"
        title={name}
        lead={meta?.lead || `Topic notes, formulas and practice for ${name}.`}
        trail={[{ label: 'Study Material', to: '/study-material/' }, { label: name }]}
        actions={
          <>
            {written[0] && (
              <Link className="btn btn--y" to={`/study-material/${subject}/${written[0].slug}/`}>
                Start with {written[0].title}
              </Link>
            )}
            <Link className="btn btn--o" to="/mock-tests/free/">
              Take a Free Mock Test
            </Link>
          </>
        }
      />

      {written.length > 0 && (
        <section className="s">
          <div className="wrap">
            <SectionHead
              eyebrow={`${written.length} topics written`}
              title="Read these in order"
              lead="Each topic is a complete lesson — concepts, formula tables, worked examples and practice questions with explanations."
            />
            <div className="g3">
              {written.map((topic, i) => (
                <Link
                  className="tile sm-topic"
                  key={topic.slug}
                  to={`/study-material/${subject}/${topic.slug}/`}
                >
                  <span className="tile__i sm-topic__n">{String(i + 1).padStart(2, '0')}</span>
                  <span>
                    <b>{topic.title}</b>
                    <span>
                      {topic.sections.length} sections · {topic.practice.length} practice questions ·{' '}
                      {topic.readMinutes} min read
                    </span>
                  </span>
                  <span className="tile__a">
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {planned.length > 0 && (
        <section className={`s${written.length ? ' s--bg' : ''}`}>
          <div className="wrap">
            <SectionHead
              eyebrow="Coming next"
              title="Topics still being written"
              lead="These are planned for this subject. The links work today and will show the notes as soon as they are published."
            />
            <div className="g4">
              {planned.map((item) => (
                <Link className="tile" key={item.to} to={item.to}>
                  <span className="tile__i">
                    <Icon name="doc" />
                  </span>
                  <span>
                    <b>{item.label}</b>
                    <span>In progress</span>
                  </span>
                  <span className="tile__a">
                    <Arrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {written.length === 0 && planned.length === 0 && (
        <section className="s">
          <div className="wrap">
            <SectionHead
              eyebrow="Nothing here yet"
              title={`${name} notes are being written`}
              lead="Quantitative Aptitude, Reasoning, English and History are complete today. Start with one of those while the rest catch up."
            />
            <div className="phero__cta">
              <Link className="btn btn--y" to="/study-material/quantitative-aptitude/">
                Quantitative Aptitude
              </Link>
              <Link className="btn btn--o" to="/study-material/reasoning/">
                Reasoning
              </Link>
              <Link className="btn btn--o" to="/study-material/english/">
                English
              </Link>
            </div>
          </div>
        </section>
      )}

      <FinalCta
        title="Read the concept, then test it the same day"
        lead="Every topic ends with practice questions, and a full mock is the fastest way to find out which ones actually stuck."
      />
    </>
  )
}

/**
 * Nav links under this subject that have no written topic behind them yet.
 * "View All …" style links are dropped — they point back at this page.
 */
function plannedFor(subject) {
  const study = NAV.find((section) => section.to === '/study-material/')
  if (!study) return []

  const prefix = `/study-material/${subject}/`
  return study.groups
    .flatMap((group) => group.links)
    .filter((link) => link.to.startsWith(prefix) && link.to !== prefix)
    .filter((link) => !getTopic(subject, link.to.slice(prefix.length).replace(/\/$/, '')))
    .map((link) => ({ label: link.label.replace(/\s*→$/, ''), to: link.to }))
}

function structuredData({ name, description, canonical, written }) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${canonical}#page`,
      name: `${name} Study Material`,
      description,
      url: canonical,
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${ORIGIN}/#website` },
      publisher: { '@id': `${ORIGIN}/#organization` },
      hasPart: written.map((topic) => ({
        '@type': 'Article',
        name: topic.title,
        url: `${canonical}${topic.slug}/`,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Study Material', item: `${ORIGIN}/study-material/` },
        { '@type': 'ListItem', position: 2, name, item: canonical },
      ],
    },
  ]
}
