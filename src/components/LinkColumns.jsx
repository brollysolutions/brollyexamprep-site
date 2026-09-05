import { Link } from 'react-router-dom'

/**
 * Renders the mega-menu groups of a nav section as a page-level directory —
 * the same links, laid out for reading rather than hovering.
 */
export default function LinkColumns({ groups, columns = 4 }) {
  return (
    <div className="lcols" style={{ '--lcols': columns }}>
      {groups.map((group) => (
        <div className="lcol" key={group.heading}>
          <h3>{group.heading}</h3>
          <ul>
            {group.links.map((link) => (
              <li key={link.to + link.label}>
                <Link to={link.to} className={link.strong ? 'is-strong' : undefined}>
                  {link.label.replace(/\s*→$/, '')}
                  {link.badge && <span className="badge">{link.badge}</span>}
                </Link>
              </li>
            ))}
          </ul>

          {group.extraHeading && (
            <>
              <h3 style={{ marginTop: 24 }}>{group.extraHeading}</h3>
              <ul>
                {group.extraLinks.map((link) => (
                  <li key={link.to + link.label}>
                    <Link to={link.to}>{link.label.replace(/\s*→$/, '')}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
