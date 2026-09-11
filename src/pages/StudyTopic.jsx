import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { ContentSection, Example } from '../components/Blocks'
import Doc from '../components/Doc'
import { PageHero, SectionHead, useJsonLd, useMeta, useTitle } from '../components/ui'
import { getTopic } from '../data/study'
import { humanise } from '../lib/labels'
import { FaqSection, FinalCta } from './home/sections'

const ORIGIN = 'https://brollyexamprep.com'
const LETTERS = ['A', 'B', 'C', 'D']

/**
 * A written study-material topic — /study-material/:subject/:topic/
 *
 * The page is assembled entirely from the topic file in src/data/study, so a
 * new topic is a data change rather than a code change. A subject/topic pair
 * with nothing written yet falls through to a page that says so and points at
 * the topics that do exist.
 */
export default function StudyTopic() {
  const { subject, topic: slug } = useParams()
  const topic = getTopic(subject, slug)

  useTitle(topic ? topic.seoTitle : `${humanise(slug || '')} — Study Material`, {
    exact: Boolean(topic),
  })
  useMeta({
    description: topic?.metaDescription,
    canonical: topic ? `${ORIGIN}/study-material/${subject}/${slug}/` : undefined,
  })
  useJsonLd(topic ? structuredData(topic) : [])

  if (!topic) return <UnwrittenTopic subject={subject} slug={slug} />

  return (
    <>
      <PageHero
        eyebrow={`${topic.subjectName} · ${topic.readMinutes} min read`}
        title={topic.title}
        lead={topic.lead}
        trail={[
          { label: 'Study Material', to: '/study-material/' },
          { label: topic.subjectName, to: `/study-material/${topic.subject}/` },
          { label: topic.title },
        ]}
        actions={
          <>
            <a className="btn btn--y" href="#practice">
              Jump to Practice
            </a>
            <Link className="btn btn--o" to="/mock-tests/ssc-cgl/">
              Take a Free Mock Test
            </Link>
          </>
        }
      />

      {/*
        The lesson, as one document.

        The contents used to be a grid of large tiles — sixteen of them on a
        topic like Percentages, filling a screen before the reading started and
        scrolling away the moment it did. The same list works far better as a
        rail that stays beside the text, so the reader can see where they are
        in the lesson rather than only where they began. `topic.contents` is
        hand-written per topic, so its labels are used rather than derived.
      */}
      <Doc
        items={topic.contents.map((item) => ({ id: item.href.replace('#', ''), label: item.title }))}
        extra={[
          { id: 'examples', label: 'Worked examples' },
          { id: 'practice', label: 'Practice questions' },
          { id: 'faq', label: 'FAQs' },
        ]}
      >
        <ContentSection
          id="weightage"
          eyebrow="Why it matters"
          heading={`${topic.title} in the exam`}
          blocks={[
            {
              type: 'table',
              caption:
                'Direct question counts move between cycles, so treat these as ranges rather than promises. Check the notification for the pattern you are sitting.',
              head: ['Exam', 'Expected questions', 'How it usually appears'],
              rows: topic.weightage.map((row) => [row.exam, row.count, row.note]),
            },
          ]}
        />

        {topic.sections.map((section) => (
          <ContentSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            heading={section.heading}
            intro={section.intro}
            blocks={section.blocks}
          />
        ))}

        <section className="s" id="examples">
          <div className="wrap">
            <SectionHead
              eyebrow="Solved examples"
              title="Worked line by line"
              lead="Read the steps rather than the answer. The method is what transfers to the next question."
            />
            <div className="two">
              {topic.examples.map((example) => (
                <Example example={example} key={example.q} />
              ))}
            </div>
          </div>
        </section>
      </Doc>

      {/* ── Practice ── */}
      <Practice items={topic.practice} title={topic.title} />

      <FaqSection items={topic.faqs} title={`${topic.title} — FAQs`} background={false} />

      {/* ── Related ── */}
      <section className="s s--bg">
        <div className="wrap">
          <SectionHead eyebrow="Keep going" title={`More ${topic.subjectName}`} />
          <div className="g3">
            {topic.related.map((item) => (
              <Link className="tile" key={item.to} to={item.to}>
                <span className="tile__i">
                  <Icon name="book" />
                </span>
                <span>
                  <b>{item.label}</b>
                  <span>Concepts, formulas and practice</span>
                </span>
                <span className="tile__a">
                  <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Reading it is not the same as knowing it"
        lead="Attempt a timed mock while the formulas are fresh — that is what tells you which of them actually stuck."
      />
    </>
  )
}

/* ── Practice ─────────────────────────────────────────────────── */

function Practice({ items, title }) {
  const [open, setOpen] = useState(() => new Set())
  const allOpen = open.size === items.length

  function toggle(i) {
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
  }

  return (
    <section className="s" id="practice">
      <div className="wrap">
        <SectionHead
          eyebrow="Practice"
          title={`${items.length} questions on ${title}`}
          lead="Work each one out before you reveal the answer — the explanation is where the marks are."
        >
          <button
            className="btn btn--o btn--sm sm-prac__all"
            type="button"
            onClick={() => setOpen(allOpen ? new Set() : new Set(items.map((_, i) => i)))}
          >
            {allOpen ? 'Hide all answers' : 'Reveal all answers'}
          </button>
        </SectionHead>

        <ol className="sm-prac">
          {items.map((item, i) => {
            const shown = open.has(i)
            return (
              <li className="sm-prac__i" key={item.q}>
                <p className="sm-prac__q">
                  <span className="sm-prac__n">Q{i + 1}</span>
                  {item.q}
                </p>
                <ul className="sm-prac__opts">
                  {item.options.map((option, oi) => (
                    <li key={option} className={shown && oi === item.answer ? 'is-answer' : undefined}>
                      <span className="sm-prac__l">{LETTERS[oi]}</span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
                <button className="sm-prac__b" type="button" onClick={() => toggle(i)} aria-expanded={shown}>
                  {shown ? 'Hide answer' : 'Show answer'}
                </button>
                {shown && (
                  <p className="sm-prac__x">
                    <b>
                      {LETTERS[item.answer]}. {item.options[item.answer]}
                    </b>{' '}
                    — {item.explain}
                  </p>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

/* ── Structured data ──────────────────────────────────────────── */

function structuredData(topic) {
  const canonical = `${ORIGIN}/study-material/${topic.subject}/${topic.slug}/`

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${canonical}#article`,
      headline: `${topic.title} — ${topic.subjectName}`,
      description: topic.metaDescription,
      url: canonical,
      inLanguage: 'en-IN',
      articleSection: topic.subjectName,
      about: topic.sections.map((section) => ({ '@type': 'Thing', name: section.heading })),
      isPartOf: { '@id': `${ORIGIN}/#website` },
      publisher: { '@id': `${ORIGIN}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: topic.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ]
}

/* ── Nothing written yet ──────────────────────────────────────── */

/**
 * Every subject in the nav tree links to topics, and most are still being
 * written. Rather than a dead end, name the topic and offer the ones that are
 * ready.
 */
function UnwrittenTopic({ subject, slug }) {
  const name = humanise(slug || '')
  const subjectName = humanise(subject || '')

  return (
    <>
      <PageHero
        eyebrow={subjectName}
        title={name || 'Study Material'}
        lead={`These notes are still being written. The topics below are complete, and the subject page lists everything else planned for ${subjectName}.`}
        trail={[
          { label: 'Study Material', to: '/study-material/' },
          { label: subjectName, to: `/study-material/${subject}/` },
          { label: name },
        ]}
        actions={
          <>
            <Link className="btn btn--y" to="/study-material/quantitative-aptitude/number-system/">
              Read Number System
            </Link>
            <Link className="btn btn--o" to={`/study-material/${subject}/`}>
              All {subjectName}
            </Link>
          </>
        }
      />
      <FinalCta />
    </>
  )
}
