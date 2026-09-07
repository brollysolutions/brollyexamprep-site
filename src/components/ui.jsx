import { Link } from 'react-router-dom'
import Icon, { Arrow } from './Icon'
import { SITE, useJsonLd } from '../lib/seo'

/*
 * The SEO hooks moved to src/lib/seo.js so that one implementation serves both
 * the browser and the prerender. They are re-exported here because most pages
 * already import them from this module.
 */
export { useTitle, useMeta, useSeo, useJsonLd, canonicalFor } from '../lib/seo'

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
  // Emitted here rather than by the caller so the markup Google reads is
  // always generated from the same trail the visitor sees, on every page that
  // shows breadcrumbs at all.
  useJsonLd(breadcrumbSchema(trail))

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

/**
 * BreadcrumbList for a PageHero trail, matching what Breadcrumbs renders —
 * a leading Home, then each item. The last crumb is the page itself, so it
 * carries no `item` URL, which is what schema.org expects.
 */
function breadcrumbSchema(trail) {
  if (!trail || !trail.length) return undefined

  const crumbs = [{ label: 'Home', to: '/' }, ...trail]
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.label,
        ...(crumb.to && i < crumbs.length - 1
          ? { item: `${SITE.origin}${crumb.to}` }
          : {}),
      })),
    },
  ]
}

/**
 * The banner every inner page opens with. Passing a `trail` also gives the
 * page its BreadcrumbList markup, which Breadcrumbs emits.
 */
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
