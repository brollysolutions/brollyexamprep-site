import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
import { PageHero, SectionHead, useJsonLd, useMeta, useTitle } from '../components/ui'
import { NAV } from '../data/nav'
import { getTopic, SUBJECTS, topicsInSubject } from '../data/study'
import { getGuidance } from '../data/study-guidance'
import { getSubjectFaqs } from '../data/study-faqs'
import { humanise } from '../lib/labels'
import { FaqSection, FinalCta } from './home/sections'

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
  const guidance = getGuidance(subject)
  const faqs = getSubjectFaqs(subject)

  const canonical = `${ORIGIN}/study-material/${subject}/`
  const description = subjectDescription(name, meta && written)

  useTitle(`${name} Study Material for Competitive Exams`, { exact: true })
  useMeta({ description, canonical })
  useJsonLd(structuredData({ subject, name, description, canonical, written, faqs }))

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
        <section className="s explore">
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

      {/* Where the subject's marks actually are, assembled from the weighting
          each written lesson records for itself. Derived rather than written,
          so it cannot drift away from the topic pages it summarises. */}
      <Doc extra={faqs?.length ? [{ id: 'faq', label: 'FAQs' }] : []}>
        {written.length > 0 && (
          <ContentSection
            id="what-it-is-worth"
            eyebrow="Weighting"
            heading={`Where ${name} marks actually sit`}
            intro={[
              `A syllabus lists topics with equal visual weight, and no paper treats them that way. The table below collects what each ${name} lesson records about the exams that examine it, so the reading order on this page can be checked against the exams you are actually sitting.`,
              'Counts are ranges observed across cycles rather than promises. The notification for your cycle is what fixes the paper, and a topic can move.',
            ]}
            blocks={[
              {
                type: 'table',
                caption: `${name} topics, the exams that weight them, and how much of each lesson is practice.`,
                head: ['Topic', 'Examined most in', 'Typical volume', 'Lesson'],
                rows: written.map((topic) => [
                  topic.title,
                  topic.weightage.map((w) => w.exam).slice(0, 3).join('; ') || 'Across competitive papers',
                  topic.weightage[0]?.count || 'Varies by paper',
                  `${topic.readMinutes} min · ${topic.practice.length} questions`,
                ]),
              },
              {
                type: 'note',
                title: 'How to use the table rather than read it',
                text: 'Find the rows naming the exam you are preparing for, and study those first regardless of where they sit in the reading order above — the order on this page is pedagogical, built so each lesson can rest on the one before it, and it is not a priority list. Where a topic you are weak at also carries the highest volume in your paper, that row is the whole of your next fortnight.',
              },
            ]}
          />
        )}

        {/* How this particular subject should be studied — the advice a topic
            page cannot give and a syllabus never mentions. */}
        {guidance && (
          <ContentSection
            id="how-to-study"
            eyebrow="Method"
            heading={guidance.heading}
            intro={guidance.intro}
            blocks={guidance.blocks}
          />
        )}
      </Doc>

      {faqs && <FaqSection items={faqs} title={`${name} — FAQs`} />}

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

function structuredData({ name, description, canonical, written, faqs }) {
  return [
    // FAQPage only where the questions are rendered on the page itself.
    ...(faqs?.length
      ? [
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
      : []),
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
