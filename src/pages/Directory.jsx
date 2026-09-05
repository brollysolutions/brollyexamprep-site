import { Link, useLocation } from 'react-router-dom'
import { Arrow } from '../components/Icon'
import { PageHero, SectionHead, Tile, useTitle } from '../components/ui'
import { LINK_INDEX, NAV } from '../data/nav'
import { PREP_SUBLINKS, PREP_TABS } from '../data/site'
import { humanise } from '../lib/labels'
import { FinalCta } from './home/sections'

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

  useTitle(label)

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
          known?.group
            ? `${label} — part of ${known.group} on Brolly Exam Prep. Syllabus, practice and updates for everything in this group.`
            : section?.desc
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

      <FinalCta />
    </>
  )
}
