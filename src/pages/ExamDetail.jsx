import { Link, useLocation } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { ContentSection } from '../components/Blocks'
import Doc, { KeyPoints } from '../components/Doc'
import { PageHero, SectionHead, Tile, canonicalFor, useJsonLd, useSeo } from '../components/ui'
import { LINK_INDEX } from '../data/nav'
import { PREP_SUBLINKS } from '../data/site'
import { getExam } from '../data/exams'
import { humanise } from '../lib/labels'
import { SITE } from '../lib/seo'
import { FaqSection, FinalCta } from './home/sections'

const RESOURCE_BLURBS = {
  syllabus: 'Section-wise syllabus with the topics that actually appear in the paper.',
  'exam-pattern': 'Marking scheme, sectional timing, negative marking and stage structure.',
  'previous-year-papers': 'Past papers with worked solutions and topic tags.',
  'mock-tests': 'Full-length tests built to the current pattern.',
  preparation: 'A study plan, subject priorities and a realistic timeline.',
  'study-material': 'Concept lessons and notes mapped to this syllabus.',
}

const RESOURCE_ICONS = {
  syllabus: 'book',
  'exam-pattern': 'layers',
  'previous-year-papers': 'doc',
  'mock-tests': 'check',
  preparation: 'target',
  'study-material': 'book',
}

/** Section headings for each resource page, so no two read identically. */
const RESOURCE_HEADINGS = {
  syllabus: ['Syllabus', 'What the syllabus covers'],
  'exam-pattern': ['Pattern', 'How the paper is structured'],
  'previous-year-papers': ['Past papers', 'Reading previous papers properly'],
  'mock-tests': ['Practice', 'Using mock tests as a measurement'],
  preparation: ['Strategy', 'How to prepare'],
  'study-material': ['Notes', 'Study material for this exam'],
}

/**
 * Renders any exam page — /government-exams/:category/:exam/ and the six
 * resource sub-pages beneath it. Titles come from the nav index when the exam
 * is listed there, and are derived from the slug otherwise.
 *
 * The path is read from the location rather than from route params, because
 * exams sit at two different depths: /government-exams/ssc/ssc-cgl/ and
 * /government-exams/state/telangana/tgpsc-group-1/. The trailing segment is a
 * resource only when it names one of the six resource pages, so whatever is
 * left is the exam and its parent is the category it belongs to.
 *
 * The body comes from the written record in src/data/exams when one exists.
 * Where none does yet, the page still says something true and specific about
 * what that exam's stage means and links on to material that helps — an
 * honest thin page rather than a placeholder telling the reader about a CMS.
 */
export default function ExamDetail() {
  const { pathname } = useLocation()
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  const segments = path.split('/').filter(Boolean)

  const last = segments[segments.length - 1]
  const resource = PREP_SUBLINKS.some(([, slug]) => slug === last) ? last : null
  const baseSegments = resource ? segments.slice(0, -1) : segments

  const base = `/${baseSegments.join('/')}/`
  const categoryPath = `/${baseSegments.slice(0, -1).join('/')}/`
  const root = baseSegments[0]

  const exam = getExam(base)
  const known = LINK_INDEX.get(base)
  const examName = exam?.name || known?.label || humanise(baseSegments[baseSegments.length - 1])
  const categoryName =
    LINK_INDEX.get(categoryPath)?.label || humanise(baseSegments[baseSegments.length - 2])
  const rootName = root === 'entrance-exams' ? 'Entrance Exams' : 'Government Exams'
  /*
   * A record may relabel its six sub-pages. The slugs are fixed — every exam
   * has /syllabus/, /mock-tests/ and so on — but a guide that is not an
   * examination (the student visa process, say) reads badly under "Syllabus"
   * and "Mock Tests", so it can carry `resourceLabels` mapping slug → label,
   * and its resource records may carry an `eyebrow` and `heading` of their own.
   */
  const labelFor = (slug) =>
    exam?.resourceLabels?.[slug] || PREP_SUBLINKS.find(([, s]) => s === slug)?.[0] || humanise(slug)
  const resourceLabel = resource ? labelFor(resource) : null

  const written = resource ? exam?.resources?.[resource] : null

  useSeo({
    title: pageTitle({ exam, resource, resourceLabel, examName, written }),
    description: pageDescription({ exam, resource, resourceLabel, examName, written }),
    canonical: canonicalFor(path),
    type: 'article',
  })

  useJsonLd(structuredData({ exam, resource, resourceLabel, examName, path }))

  const trail = [
    { label: rootName, to: `/${root}/` },
    { label: categoryName, to: categoryPath },
    resource ? { label: examName, to: base } : { label: examName },
    ...(resource ? [{ label: resourceLabel }] : []),
  ]

  const faqs = resource ? null : exam?.faqs || genericFaqs(examName)
  const [eyebrow, heading] = written?.heading
    ? [written.eyebrow || RESOURCE_HEADINGS[resource]?.[0], written.heading]
    : RESOURCE_HEADINGS[resource] || []

  return (
    <>
      <PageHero
        eyebrow={`${categoryName} · ${rootName}`}
        title={resourceLabel ? `${examName} ${resourceLabel}` : exam?.heroTitle || examName}
        lead={heroLead({ exam, resource, resourceLabel, examName, written })}
        trail={trail}
        actions={
          <>
            <Link className="btn btn--y" to={`${base}mock-tests/`}>
              {exam?.resourceLabels ? `${examName} ${labelFor('mock-tests')}` : `Take a Free ${examName} Mock`}
            </Link>
            <Link className="btn btn--o" to={`${base}syllabus/`}>
              {examName} {labelFor('syllabus')}
            </Link>
          </>
        }
      />

      {/*
        The document. On a base page the durable facts move up under the hero
        as the answer-first summary, so a reader gets them before the prose
        rather than in a band halfway down the page.
      */}
      <Doc extra={faqs ? [{ id: 'faq', label: 'FAQs' }] : []}>
        {!resource && exam && (
          <>
            <KeyPoints title={`${exam.name} in brief`} items={quickPoints(exam)} />

            {/*
              Cycle status before the evergreen prose. A reader arriving from
              "<exam> notification 2026" wants to know whether anything is open
              before they want to know what the exam is. Records that carry no
              `updates` array skip this and read exactly as they did before —
              ContentSection returns null for an empty block list, and Doc's
              contents rail is built from the sections that actually render.
            */}
            <ContentSection
              id="updates"
              eyebrow="Notification"
              heading={`${exam.name} notification and key dates`}
              blocks={exam.updates || []}
            />

            <ContentSection
              id="overview"
              eyebrow="Overview"
              heading={`What ${exam.name} is, and who it suits`}
              blocks={exam.overview}
            />

            {/*
              An optional coaching section, for exams where readers arrive
              searching for online coaching or classes rather than for the
              notification. The record supplies the heading so that the exact
              phrase people search for is the H2, and the body says what such
              coaching must include for this test and what is free here.
            */}
            <ContentSection
              id="coaching"
              eyebrow={exam.coaching?.eyebrow || 'Online coaching'}
              heading={exam.coaching?.heading || `Online ${exam.name} coaching`}
              intro={exam.coaching?.intro}
              blocks={exam.coaching?.blocks || []}
              background
            />

            <ContentSection
              id="eligibility"
              eyebrow="Eligibility"
              heading={`Who can apply for ${exam.name}`}
              blocks={exam.eligibility || []}
            />

            <ContentSection
              id="selection"
              eyebrow={exam.stagesEyebrow || 'Selection process'}
              heading={exam.stagesHeading || `How ${exam.name} selection works`}
              intro={exam.stagesIntro || 'Each stage in order, and what it actually tests.'}
              blocks={[
                {
                  type: 'table',
                  caption:
                    exam.stagesCaption ||
                    'Stages change between cycles. Confirm the structure in the notification for the cycle you are sitting.',
                  head: ['Stage', 'Format', 'What it involves'],
                  rows: exam.stages.map((stage) => [stage.name, stage.mode, stage.detail]),
                },
              ]}
            />

            {/* The marks-and-minutes summary. The full treatment stays on the
                exam-pattern resource page; this is what fits on one screen. */}
            <ContentSection
              id="pattern"
              eyebrow="Exam pattern"
              heading={`${exam.name} exam pattern and marking`}
              blocks={exam.pattern || []}
            />

            <ContentSection
              id="study-plan"
              eyebrow="Study plan"
              heading={`How to prepare for ${exam.name}`}
              blocks={exam.studyPlan || []}
            />

            {/* Last section in the document: the notices every dated fact above
                was read off, so a reader can check the page against the source. */}
            <ContentSection
              id="sources"
              eyebrow="Sources"
              heading="Official notifications and sources"
              blocks={exam.sources || []}
            />
          </>
        )}

        {/* ── A resource sub-page: its written body ── */}
        {resource && written && (
          <ContentSection
            id={resource}
            eyebrow={eyebrow}
            heading={`${examName} — ${heading}`}
            blocks={written.blocks}
          />
        )}

        {/* ── Nothing written for this exam yet ── */}
        {!written && (!exam || resource) && (
          <UnwrittenBody
            examName={examName}
            categoryName={categoryName}
            categoryPath={categoryPath}
            resource={resource}
            resourceLabel={resourceLabel}
            base={base}
          />
        )}
      </Doc>

      {/* ── Navigation, grouped after the document rather than inside it ── */}
      <section className="s explore">
        <div className="wrap">
          <SectionHead
            eyebrow="Exam resources"
            title={`Everything for ${examName}`}
            lead={exam?.resourceLabels ? 'Six pages, each kept in step with the official sources.' : 'Six resource pages, each kept in step with the latest official notification.'}
          />
          <div className="g3">
            {PREP_SUBLINKS.map(([, slug]) => (
              <Tile
                key={slug}
                to={`${base}${slug}/`}
                icon={RESOURCE_ICONS[slug]}
                title={`${examName} ${labelFor(slug)}`}
                sub={exam?.resources?.[slug]?.description || RESOURCE_BLURBS[slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="s explore">
        <div className="wrap">
          <SectionHead eyebrow="Related" title={`More ${categoryName} preparation`} />
          <div className="g4">
            <Tile
              to={categoryPath}
              icon="layers"
              title={`All ${categoryName} exams`}
              sub="Every exam in this category"
            />
            <Tile
              to="/previous-year-papers/"
              icon="doc"
              title="Previous-year papers"
              sub="Past papers with solutions"
            />
            <Tile to="/current-affairs/" icon="globe" title="Current affairs" sub="Daily, weekly and monthly" />
            <Tile to="/exam-updates/" icon="bell" title="Exam updates" sub="Notifications and results" />
          </div>
        </div>
      </section>

      {faqs && <FaqSection items={faqs} title={`${examName} — FAQs`} />}

      <FinalCta
        title={`Start your ${examName} preparation today`}
        lead="Read the syllabus, attempt a free mock, then fix the section that costs you the most marks."
      />
    </>
  )
}

/**
 * The durable facts as an answer-first summary.
 *
 * These used to render as a definition-list band partway down the page,
 * which put the one thing most visitors arrive for — who conducts it, what
 * the stages are, what qualification it needs — below several hundred words
 * of prose. As a summary under the hero they are read first, which is where
 * they belong.
 */
function quickPoints(exam) {
  return exam.quickFacts.map(([label, value]) => ({ text: label, note: value }))
}

/* ── Head ─────────────────────────────────────────────────────── */

/**
 * Titles stay under roughly 60 characters where the exam name allows it, since
 * that is about where Google truncates a title link. A written record carries
 * its own hand-set title for the base page; resource pages compose one.
 */
function pageTitle({ exam, resource, resourceLabel, examName, written }) {
  if (!resource) return exam?.seoTitle || `${examName} Exam: Syllabus, Pattern & Free Mock Tests`
  if (written?.title) return written.title
  return `${examName} ${resourceLabel} | Brolly Exam Prep`
}

function pageDescription({ exam, resource, resourceLabel, examName, written }) {
  if (!resource) {
    return (
      exam?.metaDescription ||
      `${examName} exam guide — eligibility, syllabus, exam pattern, selection stages, previous-year papers and free mock tests.`
    )
  }
  if (written?.description) return written.description
  return `${examName} ${resourceLabel.toLowerCase()} — what the ${examName} exam asks at this stage, how to prepare for it, and where to practise.`
}

function heroLead({ exam, resource, resourceLabel, examName, written }) {
  if (!resource) {
    return (
      exam?.lead || [
        `Syllabus, exam pattern, previous papers, mock tests, preparation guides and study material for ${examName} — everything the exam actually requires, in one place.`,
      ]
    )
  }
  if (written?.lead) return written.lead
  return (
    RESOURCE_BLURBS[resource] ||
    `${resourceLabel} for ${examName}, kept in step with the latest official notification.`
  )
}

/**
 * An exam guide is an article about a defined thing, so it is marked up as
 * one. The FAQ block is emitted only on the base page, where the questions
 * are actually rendered — structured data that describes content a visitor
 * cannot see is exactly what Google asks you not to publish.
 */
function structuredData({ exam, resource, resourceLabel, examName, path }) {
  const url = `${SITE.origin}${path}`
  const blocks = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: resource ? `${examName} ${resourceLabel}` : `${examName} exam guide`,
      url,
      inLanguage: 'en-IN',
      about: { '@type': 'Thing', name: examName },
      isPartOf: { '@id': `${SITE.origin}/#website` },
      publisher: { '@id': `${SITE.origin}/#organization` },
    },
  ]

  if (!resource && exam?.faqs?.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: exam.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    })
  }

  return blocks
}

/* ── Pages with no written record yet ─────────────────────────── */

/**
 * What each resource page means, written once and generally enough to be true
 * of any exam. It is a thin page, and it says so — but a reader still learns
 * what the stage is and leaves with somewhere useful to go, which the previous
 * "this block is the CMS slot" placeholder did not offer.
 */
const RESOURCE_EXPLAINERS = {
  syllabus: {
    intro:
      'A syllabus tells you what can be asked. It does not tell you what is asked often, which is a different and more useful question — and one only previous papers can answer.',
    points: [
      'Read the official notification’s syllabus section first; it is the only version that binds the examiner.',
      'Then tag two or three years of previous papers by topic and count the tags. The weighting that emerges is what should drive your study order.',
      'Treat any topic that appears in every cycle as compulsory, and anything appearing once in five years as optional until the rest is secure.',
    ],
  },
  'exam-pattern': {
    intro:
      'The pattern is the set of rules you are playing under: how many questions, over how long, with what deducted for a wrong answer, and whether sections are timed separately.',
    points: [
      'Find the negative marking rate before anything else — it decides whether a narrowed guess is worth taking.',
      'Check whether sections are separately timed. If they are, you cannot borrow minutes from a section you find easy.',
      'Confirm the number of stages and which of them count towards the final merit rather than merely screening.',
    ],
  },
  'previous-year-papers': {
    intro:
      'Previous papers are the most accurate description available of what an examiner considers important — more accurate than any syllabus, because they show weighting rather than scope.',
    points: [
      'Solve the first paper untimed and work every question to a full solution, including ones you would have skipped.',
      'Tag questions by specific topic rather than by section, then count the tags across several years.',
      'Keep two papers unread until the final month so at least two of your measurements are honest.',
    ],
  },
  'mock-tests': {
    intro:
      'A mock test is a measuring instrument, not a study session. It only measures anything if you take it in one sitting, against a clock, without looking anything up.',
    points: [
      'Sort every wrong answer into three piles: did not know, misread, ran out of time. The three have completely different fixes.',
      'Watch accuracy rather than attempt count wherever negative marking applies.',
      'Re-test after two weeks, not two days — you need time in between for corrections to have changed something.',
    ],
  },
  preparation: {
    intro:
      'Almost every preparation plan fails in the same place: it treats every subject as equally urgent, when the exam does not, and it leaves the slowest-building skills until last.',
    points: [
      'Start with the subject that takes longest to build, not the one that feels most urgent.',
      'Language and general awareness respond to daily contact over months and barely respond to cramming.',
      'Take a diagnostic mock before studying anything, so your plan is built on measurement rather than assumption.',
    ],
  },
  'study-material': {
    intro:
      'Study material is only useful when it matches the depth the paper asks for. Material written for a harder exam wastes time; material written for an easier one leaves gaps.',
    points: [
      'Finish one source before adding a second. Three books half-read teach less than one book read twice.',
      'Read a topic once, then solve twenty questions before re-reading anything.',
      'Revisit each topic three days later and again after two weeks — two short revisits beat one long session.',
    ],
  },
}

function UnwrittenBody({ examName, categoryName, categoryPath, resource, resourceLabel, base }) {
  const explainer = RESOURCE_EXPLAINERS[resource]

  if (!explainer) {
    return (
      <ContentSection
        id="about"
        eyebrow="Overview"
        heading={`About the ${examName} exam`}
        blocks={[
          {
            type: 'p',
            text: `${examName} sits within ${categoryName}, and its full written guide — eligibility, stage-by-stage selection process, section weighting and a preparation plan — is still being written. Rather than pad this page out, here is what is genuinely useful in the meantime.`,
          },
          {
            type: 'list',
            title: 'Where to start',
            items: [
              'Read the current official notification end to end. It is the only source that binds the examiner, and it is where eligibility, age relaxations and the exact pattern are defined.',
              'Work through two or three previous papers before you study anything, to see what the questions actually look like.',
              'Take a full-length mock under exam timing to find which sections are already competitive and which are not.',
            ],
          },
          {
            type: 'links',
            title: 'Useful in the meantime',
            items: [
              { label: `All ${categoryName} exams`, to: categoryPath },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Previous year papers', to: '/previous-year-papers/' },
              { label: 'Subject-wise study material', to: '/study-material/' },
            ],
          },
        ]}
      />
    )
  }

  return (
    <ContentSection
      id={resource}
      eyebrow={RESOURCE_HEADINGS[resource]?.[0]}
      heading={`${examName} ${resourceLabel.toLowerCase()} — what to do with it`}
      blocks={[
        { type: 'p', text: explainer.intro },
        {
          type: 'p',
          text: `The ${examName}-specific detail for this page is still being written. What follows applies to this stage of any competitive exam, and is worth applying to ${examName} today.`,
        },
        { type: 'list', title: 'How to approach it', items: explainer.points },
        {
          type: 'links',
          title: 'Related pages',
          items: [
            { label: `${examName} exam guide`, to: base },
            { label: `All ${categoryName} exams`, to: categoryPath },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Study material by subject', to: '/study-material/' },
          ],
        },
      ]}
    />
  )
}

function genericFaqs(examName) {
  return [
    {
      q: `What is the ${examName} exam pattern?`,
      a: `The ${examName} pattern — the sections, question counts, marks, timing and negative marking — is defined in the official notification for each cycle, and it does change between cycles. Read the pattern section of the current notification before you plan an attempt order, because the negative marking rate in particular decides whether a narrowed guess is worth taking.`,
    },
    {
      q: `How should I start preparing for ${examName}?`,
      a: `Take a full-length mock before you study anything. It is uncomfortable and it is the most useful hour you will spend, because it tells you which sections are already competitive and which need real work. Then read the syllabus and pattern to see what the paper actually asks, study the weakest section first, and re-test every couple of weeks to check the gap is closing.`,
    },
    {
      q: `Are free mock tests available for ${examName}?`,
      a: `Free full-length mock tests are available for major exams on the current pattern, with your score and the answer key at the end. Where a paper for this exam is not live yet, practise with the closest available paper at the same level and use sectional tests for the subjects that overlap.`,
    },
  ]
}

/** Small helper reused by the category listing to keep icon choice consistent. */
export function ResourceIcon({ slug }) {
  return <Icon name={RESOURCE_ICONS[slug] || 'book'} />
}
