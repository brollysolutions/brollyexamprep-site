import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { PageHero, SectionHead, useJsonLd, useMeta, useTitle } from '../components/ui'
import { NAV } from '../data/nav'
import { getTopic, SUBJECTS, topicsInSubject } from '../data/study'
import { humanise } from '../lib/labels'
import { FinalCta } from './home/sections'

const ORIGIN = 'https://brollyexamprep.com'

/**
 * The subject's meta description: what it covers, named topic by topic.
 *
 * A search result shows roughly 160 characters, so the topic list is filled to
 * that budget rather than run out in full — a subject with a dozen topics
 * would otherwise produce a description that is cut off mid-word.
 */
function subjectDescription(name, written) {
  const closing = '. Concepts, solved examples and practice questions.'
  if (!written || !written.length) {
    return `${name} study material and topic notes for competitive exams on Brolly Exam Prep.`
  }

  const opening = `${name} study material for competitive exams — `
  const listed = []
  for (const topic of written) {
    const next = [...listed, topic.title].join(', ')
    if (opening.length + next.length + closing.length > 158) break
    listed.push(topic.title)
  }

  return listed.length
    ? opening + listed.join(', ') + closing
    : `${name} study material for competitive exams${closing}`
}

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
  const description = subjectDescription(name, meta && written)

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
              lead="This subject has no topics yet. Every other subject in the library is complete — browse them all, or start with the section that carries the most marks in your exam."
            />
            <div className="phero__cta">
              <Link className="btn btn--y" to="/study-material/">
                Browse All Subjects
              </Link>
              <Link className="btn btn--o" to="/study-material/quantitative-aptitude/">
                Quantitative Aptitude
              </Link>
              <Link className="btn btn--o" to="/study-material/general-knowledge/">
                General Knowledge
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
  ]
}
