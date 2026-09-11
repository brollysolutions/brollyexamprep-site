/**
 * The reading layout for pages that are documents rather than landing pages.
 *
 * Why this exists
 * ---------------
 * Every written section on this site renders through ContentSection, which was
 * styled as a marketing band: full-bleed to 1280px, a 36px heading, a tinted
 * background on alternate sections, and roughly 88px of padding above and
 * below. That reads well on a homepage with five short sections. On an exam
 * guide carrying seven sections and 1,300 words — or a study topic carrying
 * sixteen and 4,400 — it produces a page that looks like seven separate
 * landing pages stacked on top of each other, with no way to see what is on
 * the page or to get to the part you came for.
 *
 * Wrapping those sections in <Doc> turns them into one continuous document:
 *
 *   - a contents rail, built from the sections actually rendered, sticky
 *     beside the text on wide screens and a scrollable strip of chips on a
 *     phone;
 *   - one reading column, so prose, lists, tables and callouts share a left
 *     edge instead of each block choosing its own width;
 *   - section headings at document scale with a hairline rule between them,
 *     rather than a banner and a background swap.
 *
 * Nothing about ContentSection changes. The layout is applied by descendant
 * CSS on `.doc__body`, so a section renders as a band outside a Doc and as a
 * document section inside one, and no caller has to pass a variant.
 *
 * Building the rail
 * -----------------
 * The entries come from the children themselves — any child carrying an `id`
 * and a `heading` (or `title`), and not an explicitly empty `blocks` array,
 * since ContentSection renders nothing in that case and the rail must never
 * link to a section that is not there.
 *
 * The label prefers the section's `eyebrow`, because that is the short name
 * already printed above the heading, so a reader can see which rail entry
 * corresponds to where they have scrolled to. Where two sections share an
 * eyebrow the heading is used for both instead, so no two entries read alike.
 */
import { Children, Fragment, isValidElement } from 'react'
import { subHeadings } from './Blocks'

/** Children in render order, with fragments flattened into their parent. */
function flatten(children, out = []) {
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return
    if (child.type === Fragment) flatten(child.props.children, out)
    else out.push(child)
  })
  return out
}

/**
 * One rail entry per section that will actually render.
 *
 * `blocks` is checked rather than assumed: ContentSection returns null for an
 * empty array, and a rail entry pointing at nothing is worse than no rail.
 */
function sectionsIn(children) {
  return flatten(children)
    .filter((child) => {
      const { id, heading, title, blocks } = child.props || {}
      if (!id || !(heading || title)) return false
      return blocks ? blocks.length > 0 : true
    })
    .map((child) => {
      const { id, heading, title, eyebrow, navLabel, blocks } = child.props
      return { id, short: navLabel || eyebrow, long: heading || title, blocks }
    })
}

/** Prefers the short label, falling back to the heading where it is ambiguous. */
function label(item, all) {
  if (!item.short) return item.long
  const shared = all.filter((other) => other.short === item.short).length > 1
  return shared ? item.long : item.short
}

/**
 * @param children  the sections, in reading order
 * @param items     an explicit rail, where the page already curates one —
 *                  study topics carry a hand-written contents list whose
 *                  labels are better than anything derivable from a heading
 * @param extra     rail entries for sections rendered outside this wrapper,
 *                  such as the FAQ block: [{ id, label }]
 * @param title     heading for the rail itself
 */
export default function Doc({ children, items: given, extra = [], title = 'On this page' }) {
  const found = sectionsIn(children)

  /*
   * A page built from one long section — every exam resource page is — carries
   * its structure in the sub-headings of its blocks rather than in sections.
   * Indexing those instead gives the reader a way through 900 words that
   * listing the single section they are already on would not.
   */
  const derived =
    found.length === 1 && found[0].blocks
      ? subHeadings(found[0].blocks, found[0].id).filter(Boolean)
      : found.map((item) => ({ id: item.id, label: label(item, found) }))

  const items = [...(given || derived), ...extra]

  // Two entries is a heading and a footnote, not a document worth indexing.
  const rail = items.length > 2

  return (
    <section className="s doc-shell">
      <div className="wrap">
        <div className={`doc${rail ? '' : ' doc--plain'}`}>
          {rail && (
            <nav className="doc__toc" aria-label={title}>
              <p className="doc__toc-t">{title}</p>
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="doc__body">{children}</div>
        </div>
      </div>
    </section>
  )
}

/**
 * The short summary a page opens with: the direct answer, before the detail.
 *
 * Used at the top of a Doc so that a reader — and a retrieval system quoting
 * the page — gets the conclusion in a few lines rather than having to infer it
 * from seven sections. Renders nothing when a page has no summary written for
 * it, so it can be dropped into a template safely.
 */
export function KeyPoints({ items, title = 'The short version' }) {
  if (!items || !items.length) return null
  return (
    <aside className="keyp" aria-label={title}>
      <p className="keyp__t">{title}</p>
      <ul>
        {items.map((item) => (
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
    </aside>
  )
}
