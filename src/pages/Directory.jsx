import { Link, useLocation } from 'react-router-dom'
import { Arrow } from '../components/Icon'
import { ContentSection } from '../components/Blocks'
import { PageHero, SectionHead, Tile, canonicalFor, useJsonLd, useSeo } from '../components/ui'
import { LINK_INDEX, NAV } from '../data/nav'
import { PREP_SUBLINKS, PREP_TABS } from '../data/site'
import { getHub } from '../data/hubs'
import { humanise } from '../lib/labels'
import { SITE } from '../lib/seo'
import { FaqSection, FinalCta } from './home/sections'

/** Which mega section does this path belong to? */
function sectionFor(pathname) {
  return NAV.find((s) => pathname.startsWith(s.to.replace(/\/$/, '')))
}

/** The exam list for a category page such as /government-exams/ssc/ */
function prepTabFor(pathname) {
  return PREP_TABS.find((tab) =>
    tab.exams.some((exam) => exam.base.startsWith(pathname) && exam.base !== pathname),
  )
}

/**
 * How often each label is used across the nav. A handful of labels appear
 * twice under different sections - "Defence" is both an exam family and a
 * current-affairs topic - and those pages would otherwise carry an identical
 * title and description on two different URLs, which reads as duplicate
 * content. Only the ambiguous ones are qualified, so the common case stays
 * short.
 */
const LABEL_USES = [...LINK_INDEX.values()].reduce(
  (counts, meta) => counts.set(meta.label, (counts.get(meta.label) || 0) + 1),
  new Map(),
)

/**
 * The generic listing page. Every nav link that does not have a hand-built
 * page of its own lands here, and gets a real page assembled from the nav
 * tree: a heading, its siblings, and the section it belongs to.
 */
export default function Directory() {
  const { pathname } = useLocation()
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`

  const known = LINK_INDEX.get(path)
  const section = known?.section || sectionFor(path)
  const segments = path.split('/').filter(Boolean)
  const label = known?.label || humanise(segments[segments.length - 1] || 'Browse')

  const scope =
    section && section.title !== label && LABEL_USES.get(label) > 1 ? section.title : null

  /*
   * A written hub, where one exists, supplies the page's title, description,
   * hero copy and body. Where none does yet, the page still falls back to a
   * generic orientation body rather than to a bare list of links.
   */
  const hub = getHub(path)

  useSeo({
    title:
      hub?.title ||
      (scope ? `${label} ${scope} | Brolly Exam Prep` : `${label} | Brolly Exam Prep`),
    description:
      hub?.description ||
      (scope
        ? `${label} ${scope.toLowerCase()} on Brolly Exam Prep - notifications, eligibility, syllabus, previous-year papers, mock tests and free study material.`
        : `${label} on Brolly Exam Prep - exam notifications, eligibility, syllabus, previous-year papers, mock tests and free study material.`),
    canonical: canonicalFor(path),
  })

  useJsonLd(hubStructuredData({ hub, label, path }))

  // Siblings: everything under the same parent path, so the page reads as a
  // real index rather than a dead end.
  const parent = `/${segments.slice(0, -1).join('/')}/`
  const siblings = [...LINK_INDEX.entries()]
    .filter(([to]) => to !== path && to.startsWith(parent) && to.split('/').filter(Boolean).length === segments.length)
    .map(([to, meta]) => ({ to, label: meta.label }))

  const tab = prepTabFor(path)

  const trail = segments.map((seg, i) => {
    const to = `/${segments.slice(0, i + 1).join('/')}/`
    return { label: LINK_INDEX.get(to)?.label || humanise(seg), to: i === segments.length - 1 ? undefined : to }
  })

  return (
    <>
      <PageHero
        eyebrow={section ? section.title : 'Browse'}
        title={label}
        lead={
          hub?.lead ||
          (known?.group
            ? `${label} — part of ${known.group} on Brolly Exam Prep. Syllabus, practice and updates for everything in this group.`
            : section?.desc)
        }
        trail={trail}
        actions={
          <>
            <Link className="btn btn--y" to="/mock-tests/free/">
              Take a Free Mock Test
            </Link>
            {section && (
              <Link className="btn btn--o" to={section.to}>
                All {section.title}
              </Link>
            )}
          </>
        }
      />

      {/* ── The written body, or a generic orientation where none exists ── */}
      {hub
        ? hub.sections.map((s, i) => (
            <ContentSection
              key={s.id}
              id={s.id}
              eyebrow={s.eyebrow}
              heading={s.heading}
              intro={s.intro}
              blocks={s.blocks}
              background={i % 2 === 1}
            />
          ))
        : <UnwrittenHub label={label} section={section} />}

      {tab && (
        <section className="s">
          <div className="wrap">
            <SectionHead
              eyebrow="Exams in this category"
              title={`${tab.label} exams`}
              lead="Each exam carries its syllabus, pattern, previous papers, mock tests, preparation guide and study material."
            />
            <div className="pgrid">
              {tab.exams.map((exam) => (
                <div className="pe" key={exam.base}>
                  <div className="pe__h">
                    <Link to={exam.base}>{exam.name}</Link>
                  </div>
                  <div className="pe__links">
                    {PREP_SUBLINKS.map(([sub, slug]) => (
                      <Link key={slug} to={`${exam.base}${slug}/`}>
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {siblings.length > 0 && (
        <section className={`s${tab ? ' s--bg' : ''}`}>
          <div className="wrap">
            <SectionHead
              eyebrow="Also in this group"
              title={known?.group || section?.title || 'Related pages'}
            />
            <div className="g4">
              {siblings.map((sib) => (
                <Tile key={sib.to} to={sib.to} icon="doc" title={sib.label} sub="View resources" />
              ))}
            </div>
          </div>
        </section>
      )}

      {section && (
        <section className={`s${siblings.length && !tab ? ' s--bg' : ''}`}>
          <div className="wrap">
            <SectionHead eyebrow="Explore" title={`Everything under ${section.title}`} />
            <div className="lcols" style={{ '--lcols': 3 }}>
              {section.groups.map((group) => (
                <div className="lcol" key={group.heading}>
                  <h3>{group.heading}</h3>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.to + link.label}>
                        <Link to={link.to} className={link.to === path ? 'is-current' : undefined}>
                          {link.label.replace(/\s*→$/, '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 28 }}>
              <Link className="tlink" to={section.to}>
                {section.allLabel.replace(/\s*→$/, '')} <Arrow />
              </Link>
            </p>
          </div>
        </section>
      )}

      {hub?.faqs && <FaqSection items={hub.faqs} title={`${label} — FAQs`} />}

      <FinalCta />
    </>
  )
}

/* ── Head ─────────────────────────────────────────────────────── */

/**
 * A hub is a collection page about a subject, so it is marked up as one, with
 * the FAQ block emitted only where the questions are actually rendered.
 */
function hubStructuredData({ hub, label, path }) {
  const url = `${SITE.origin}${path}`
  const blocks = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${url}#page`,
      name: label,
      url,
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${SITE.origin}/#website` },
      publisher: { '@id': `${SITE.origin}/#organization` },
    },
  ]

  if (hub?.faqs?.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: hub.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    })
  }

  return blocks
}

/* ── Hubs with nothing written yet ────────────────────────────── */

/**
 * Rather than a bare list of links, an unwritten hub says what the page is for
 * and what a visitor should do first. It is still a thin page — but a thin
 * page that helps, which is the difference the SEO Starter Guide is actually
 * asking for.
 */
function UnwrittenHub({ label, section }) {
  return (
    <ContentSection
      id="about"
      eyebrow="Overview"
      heading={`About ${label}`}
      blocks={[
        {
          type: 'p',
          text: `${label} sits within ${section?.title || 'this section'}, and its full written guide is still being prepared. Rather than pad this page out, here is what is genuinely worth doing while it is written.`,
        },
        {
          type: 'list',
          title: 'Where to start',
          items: [
            'Read the current official notification for any exam you are targeting. It is the only document that binds the examiner, and it is where eligibility, the exact pattern and the negative marking rate are defined.',
            'Work through two or three previous papers before studying anything, to see what the questions actually look like rather than what a syllabus says they might.',
            'Take a full-length mock under exam timing, to find which sections are already competitive and which are not.',
          ],
        },
        {
          type: 'links',
          title: 'Useful in the meantime',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Previous year papers', to: '/previous-year-papers/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
          ],
        },
      ]}
    />
  )
}
