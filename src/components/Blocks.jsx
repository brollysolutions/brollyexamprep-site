/**
 * The content-block renderer shared by every written page on the site.
 *
 * Study-material topics grew this vocabulary first, and it turned out to be
 * the right one for exam guides, category hubs and the company pages too — a
 * page is a list of sections, and a section is a list of blocks. Keeping one
 * renderer means written copy lives in `src/data`, not in JSX, and a new page
 * is a data change.
 *
 * Block types:
 *
 *   { type: 'p',       text }                       one paragraph
 *   { type: 'list',    title?, items: [] }          bulleted points
 *   { type: 'steps',   title?, items: [] }          numbered, order matters
 *   { type: 'defs',    items: [[term, desc], …] }   term/description pairs
 *   { type: 'table',   caption?, head: [], rows }   first cell is the row head
 *   { type: 'formula', title?, items: [{expr,note}] }
 *   { type: 'note',    title, text }                caveat or source note
 *   { type: 'links',   title?, items: [{label,to,sub?}] }
 *
 * Every block type here is already styled by the study-material CSS, so
 * nothing new is added to the stylesheet.
 */
import { Link } from 'react-router-dom'
import { Arrow } from './Icon'

export default function Block({ block }) {
  if (!block) return null

  if (block.type === 'p') return <p className="sm-p">{block.text}</p>

  if (block.type === 'list') {
    return (
      <div className="s__block">
        {block.title && <h3 className="s__sub">{block.title}</h3>}
        <ul className="sm-list">
          {block.items.map((item) => (
            <li key={typeof item === 'string' ? item : item.text}>
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  <b>{item.text}</b>
                  {item.note && <span> — {item.note}</span>}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (block.type === 'steps') {
    return (
      <div className="s__block">
        {block.title && <h3 className="s__sub">{block.title}</h3>}
        <ol className="sm-steps">
          {block.items.map((item) => (
            <li key={typeof item === 'string' ? item : item.text}>
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  <b>{item.text}</b>
                  {item.note && <span> {item.note}</span>}
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    )
  }

  if (block.type === 'defs') {
    return (
      <dl className="sm-defs s__block">
        {block.items.map(([term, desc]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{desc}</dd>
          </div>
        ))}
      </dl>
    )
  }

  if (block.type === 'table') {
    return (
      <div className="ctable-wrap s__block">
        <table className="ctable">
          {block.caption && <caption>{block.caption}</caption>}
          <thead>
            <tr>
              {block.head.map((cell) => (
                <th scope="col" key={cell}>
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]}>
                <th scope="row">{row[0]}</th>
                {row.slice(1).map((cell, i) => (
                  <td data-label={block.head[i + 1]} key={block.head[i + 1]}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  if (block.type === 'formula') {
    return (
      <div className="s__block">
        {block.title && <h3 className="s__sub">{block.title}</h3>}
        <ul className="sm-formulas">
          {block.items.map((item) => (
            <li key={item.expr}>
              <b>{item.expr}</b>
              {item.note && <span>{item.note}</span>}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (block.type === 'example') {
    return (
      <div className="s__block">
        <Example example={block} />
      </div>
    )
  }

  if (block.type === 'note') {
    return (
      <div className="source-note s__block">
        <h3>{block.title}</h3>
        <p>{block.text}</p>
      </div>
    )
  }

  /*
   * Descriptive anchor text is the point of this block. Google reads link text
   * to work out what the target page is about, so these carry the destination's
   * real name rather than "click here" or "read more".
   */
  if (block.type === 'links') {
    return (
      <div className="s__block">
        {block.title && <h3 className="s__sub">{block.title}</h3>}
        <p className="sm-links">
          {block.items.map((item) =>
            item.href ? (
              <a href={item.href} key={item.href} rel="noopener noreferrer" target="_blank">
                {item.label} <Arrow />
              </a>
            ) : (
              <Link key={item.to} to={item.to}>
                {item.label} <Arrow />
              </Link>
            ),
          )}
        </p>
      </div>
    )
  }

  return null
}

export function Example({ example }) {
  return (
    <div className="sm-eg">
      <p className="sm-eg__q">{example.q}</p>
      <ol className="sm-eg__steps">
        {example.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <p className="sm-eg__a">
        <b>Answer:</b> {example.answer}
      </p>
    </div>
  )
}

/** A whole section of written copy: heading, intro, then its blocks. */
export function ContentSection({ id, eyebrow, heading, intro, blocks, background = false }) {
  if (!blocks || !blocks.length) return null
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id={id}>
      <div className="wrap">
        <div className="shead">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="h">{heading}</h2>
          {intro &&
            (Array.isArray(intro) ? intro : [intro]).map((paragraph) => (
              <p className="lead" key={paragraph}>
                {paragraph}
              </p>
            ))}
        </div>
        {blocks.map((block, i) => (
          <Block block={block} key={i} />
        ))}
      </div>
    </section>
  )
}
