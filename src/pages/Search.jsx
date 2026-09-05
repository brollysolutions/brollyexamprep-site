import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { PageHero, SectionHead, Tile, useTitle } from '../components/ui'
import { LINK_INDEX, POPULAR_SEARCHES } from '../data/nav'

/** Searches the flattened nav index — every exam, subject and resource page. */
function findMatches(query) {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  return [...LINK_INDEX.entries()]
    .filter(
      ([to, meta]) =>
        meta.label.toLowerCase().includes(q) ||
        (meta.group || '').toLowerCase().includes(q) ||
        to.toLowerCase().includes(q),
    )
    .slice(0, 40)
    .map(([to, meta]) => ({ to, ...meta }))
}

export default function Search() {
  const [params, setParams] = useSearchParams()
  const initial = params.get('q') || ''
  const [query, setQuery] = useState(initial)

  useTitle(initial ? `Search: ${initial}` : 'Search')

  const results = useMemo(() => findMatches(initial), [initial])

  function submit(e) {
    e.preventDefault()
    setParams(query.trim() ? { q: query.trim() } : {})
  }

  return (
    <>
      <PageHero
        eyebrow="Search"
        title={initial ? `Results for "${initial}"` : 'Search Brolly Exam Prep'}
        lead={
          initial
            ? `${results.length} page${results.length === 1 ? '' : 's'} matched your search.`
            : 'Search across every exam, subject, topic and resource page on the platform.'
        }
        trail={[{ label: 'Search' }]}
      />

      <section className="s">
        <div className="wrap">
          <form className="xs" onSubmit={submit} style={{ margin: '0 0 40px' }}>
            <div className="xs__row">
              <Icon name="search" size={19} strokeWidth={2} />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search exams, subjects, topics, papers..."
                aria-label="Search"
              />
              <button type="submit">Search</button>
            </div>
          </form>

          {results.length > 0 ? (
            <div className="g3">
              {results.map((r) => (
                <Tile
                  key={r.to}
                  to={r.to}
                  icon="doc"
                  title={r.label}
                  sub={r.group ? `${r.section.title} · ${r.group}` : r.section.title}
                />
              ))}
            </div>
          ) : (
            <>
              <SectionHead
                eyebrow={initial ? 'No matches' : 'Start here'}
                title={initial ? 'Nothing matched that search' : 'Popular searches'}
                lead={
                  initial
                    ? 'Try an exam name (SSC CGL, IBPS PO), a subject (Reasoning, Polity) or a resource type (mock tests, previous papers).'
                    : undefined
                }
              />
              <div className="chips">
                {POPULAR_SEARCHES.map((item) => (
                  <Link className="chip" key={item.to} to={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}
