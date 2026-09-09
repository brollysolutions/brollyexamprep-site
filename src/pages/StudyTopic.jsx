import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import Block, { Example } from '../components/Blocks'
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

      {/* ── On this page ── */}
      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="On this page"
            title="What this topic covers"
            lead="Each block below is written for one part of the topic. Jump straight to the one you need."
          />
          <div className="g3">
            {topic.contents.map((item) => (
              <a className="tile" key={item.href} href={item.href}>
                <span className="tile__i">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <b>{item.title}</b>
                  <span>{item.sub}</span>
                </span>
                <span className="tile__a">
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Weightage ── */}
      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Why it matters"
            title={`${topic.title} in the exam`}
            lead="Direct question counts move between cycles, so treat these as ranges rather than promises. Always check the latest official notification for the pattern you are sitting."
          />
          <div className="ctable-wrap">
            <table className="ctable">
              <thead>
                <tr>
                  <th scope="col">Exam</th>
                  <th scope="col">Expected questions</th>
                  <th scope="col">How it usually appears</th>
                </tr>
              </thead>
              <tbody>
                {topic.weightage.map((row) => (
                  <tr key={row.exam}>
                    <th scope="row">{row.exam}</th>
                    <td data-label="Expected questions">{row.count}</td>
                    <td data-label="How it usually appears">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── The body ── */}
      {topic.sections.map((section, i) => (
        <section className={`s${i % 2 === 1 ? ' s--bg' : ''}`} id={section.id} key={section.id}>
          <div className="wrap">
            <SectionHead eyebrow={section.eyebrow} title={section.heading} lead={section.intro} />
            {section.blocks.map((block, bi) => (
              <Block block={block} key={bi} />
            ))}
          </div>
        </section>
      ))}

      {/* ── Worked examples ── */}
      <section className={`s${topic.sections.length % 2 === 1 ? ' s--bg' : ''}`} id="examples">
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
