import { Link, useLocation } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { PageHero, SectionHead, Tile, useTitle } from '../components/ui'
import { LINK_INDEX } from '../data/nav'
import { PREP_SUBLINKS } from '../data/site'
import { humanise } from '../lib/labels'
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

  const known = LINK_INDEX.get(base)
  const examName = known?.label || humanise(baseSegments[baseSegments.length - 1])
  const categoryName =
    LINK_INDEX.get(categoryPath)?.label || humanise(baseSegments[baseSegments.length - 2])
  const rootName = root === 'entrance-exams' ? 'Entrance Exams' : 'Government Exams'
  const resourceLabel = resource
    ? PREP_SUBLINKS.find(([, slug]) => slug === resource)?.[0] || humanise(resource)
    : null

  useTitle(resourceLabel ? `${examName} ${resourceLabel}` : examName)

  const trail = [
    { label: rootName, to: `/${root}/` },
    { label: categoryName, to: categoryPath },
    resource ? { label: examName, to: base } : { label: examName },
    ...(resource ? [{ label: resourceLabel }] : []),
  ]

  const examFaqs = [
    {
      q: `What is the ${examName} exam pattern?`,
      a: `The ${examName} pattern — sections, question counts, marks and timing — is listed in full on the exam pattern page, and is refreshed whenever the conducting body issues a new notification.`,
    },
    {
      q: `Are free ${examName} mock tests available?`,
      a: `Yes. At least one free full-length ${examName} mock test is available without payment, on the current pattern, with your score and the answer key at the end.`,
    },
    {
      q: `How should I start preparing for ${examName}?`,
      a: `Attempt a free mock first, read the syllabus and pattern pages to see what the paper actually asks, then study the weakest section before anything else. Re-test every couple of weeks to check the gap is closing.`,
    },
  ]

  return (
    <>
      <PageHero
        eyebrow={`${categoryName} · ${rootName}`}
        title={resourceLabel ? `${examName} ${resourceLabel}` : examName}
        lead={
          resource
            ? RESOURCE_BLURBS[resource] ||
              `${resourceLabel} for ${examName}, kept in step with the latest official notification.`
            : `Syllabus, exam pattern, previous papers, mock tests, preparation guides and study material for ${examName} — everything the exam actually requires, in one place.`
        }
        trail={trail}
        actions={
          <>
            <Link className="btn btn--y" to={`${base}mock-tests/`}>
              Take a Free {examName} Mock
            </Link>
            <Link className="btn btn--o" to={`${base}syllabus/`}>
              View Syllabus
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Exam resources"
            title={`Everything for ${examName}`}
            lead="Six resource pages, each kept in step with the latest official notification."
          />
          <div className="g3">
            {PREP_SUBLINKS.map(([label, slug]) => (
              <Tile
                key={slug}
                to={`${base}${slug}/`}
                icon={RESOURCE_ICONS[slug]}
                title={`${examName} ${label}`}
                sub={RESOURCE_BLURBS[slug]}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Content"
            title={resourceLabel ? `${resourceLabel} detail` : 'Exam overview'}
            lead="This block is the CMS slot. Bind it to the exam record and the published copy renders here."
          />
          <div className="cms-slot">
            <p>
              <strong>CMS binding:</strong> <code>{resource ? `${base}${resource}/` : base}</code>
            </p>
            <p>
              The route, breadcrumbs, heading hierarchy, internal links and FAQ scaffolding are all
              generated. Fetch the record for this slug and render its body inside this container.
            </p>
            <p className="cms-slot__links">
              {PREP_SUBLINKS.map(([label, slug]) => (
                <Link key={slug} to={`${base}${slug}/`}>
                  {label} <Arrow />
                </Link>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="s">
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

      <FaqSection items={examFaqs} title={`${examName} — FAQs`} />
      <FinalCta
        title={`Start your ${examName} preparation today`}
        lead="Read the syllabus, attempt a free mock, then fix the section that costs you the most marks."
      />
    </>
  )
}

/** Small helper reused by the category listing to keep icon choice consistent. */
export function ResourceIcon({ slug }) {
  return <Icon name={RESOURCE_ICONS[slug] || 'book'} />
}
