import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon, { Arrow } from './Icon'

/**
 * Sets the document title for the page that renders it. Pages carrying a
 * written SEO title pass `exact` — that title is already complete, and the
 * site suffix would push it past what a search result shows.
 */
export function useTitle(title, { exact = false } = {}) {
  useEffect(() => {
    const previous = document.title
    if (title) document.title = exact ? title : `${title} | Brolly Exam Prep`
    return () => {
      document.title = previous
    }
  }, [title, exact])
}

/**
 * Points the existing description and canonical tags at the current page, and
 * puts the site-wide values back when the page unmounts.
 */
export function useMeta({ description, canonical }) {
  useEffect(() => {
    const undo = [
      setHeadAttr('meta[name="description"]', 'content', description),
      setHeadAttr('link[rel="canonical"]', 'href', canonical),
    ]
    return () => undo.forEach((restore) => restore())
  }, [description, canonical])
}

function setHeadAttr(selector, attribute, value) {
  const el = value ? document.head.querySelector(selector) : null
  if (!el) return () => {}

  const previous = el.getAttribute(attribute)
  el.setAttribute(attribute, value)
  return () => el.setAttribute(attribute, previous)
}

/**
 * Adds this page's structured data to the head. `blocks` is an array of
 * schema.org objects — JSON-LD accepts several in one script tag.
 */
export function useJsonLd(blocks) {
  const json = JSON.stringify(blocks)

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = json
    document.head.appendChild(script)
    return () => script.remove()
  }, [json])
}

export function SectionHead({ eyebrow, title, lead, children }) {
  return (
    <div className="shead">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  )
}

/** Section heading with a "view all" link pinned to the right. */
export function SectionBar({ eyebrow, title, lead, linkTo, linkLabel }) {
  return (
    <div className="sbar">
      <div className="shead">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="h">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {linkTo && (
        <Link className="tlink" to={linkTo}>
          {linkLabel} <Arrow />
        </Link>
      )}
    </div>
  )
}

export function Tile({ to, icon = 'book', title, sub }) {
  return (
    <Link className="tile" to={to}>
      <span className="tile__i">
        <Icon name={icon} />
      </span>
      <span>
        <b>{title}</b>
        <span>{sub}</span>
      </span>
      <span className="tile__a">
        <Arrow />
      </span>
    </Link>
  )
}

/** Breadcrumb trail built from a path such as /government-exams/ssc/ssc-cgl/ */
export function Breadcrumbs({ trail }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {trail.map((item, i) => (
        <span key={item.to || item.label}>
          <span className="crumbs__sep" aria-hidden="true">
            /
          </span>
          {i === trail.length - 1 || !item.to ? (
            <span aria-current="page">{item.label}</span>
          ) : (
            <Link to={item.to}>{item.label}</Link>
          )}
        </span>
      ))}
    </nav>
  )
}

/** The banner every inner page opens with. */
export function PageHero({ eyebrow, title, lead, trail, actions }) {
  return (
    <section className="phero">
      <div className="wrap">
        {trail && <Breadcrumbs trail={trail} />}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="phero__h">{title}</h1>
        {/* `lead` takes an array when the intro runs to more than one paragraph. */}
        {lead &&
          (Array.isArray(lead) ? lead : [lead]).map((paragraph) => (
            <p className="phero__p" key={paragraph}>
              {paragraph}
            </p>
          ))}
        {actions && <div className="phero__cta">{actions}</div>}
      </div>
    </section>
  )
}
