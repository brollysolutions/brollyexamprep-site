import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MOBILE_NAV } from '../data/nav'
import Icon from './Icon'
import { LogoLink } from './Logo'

export default function MobileDrawer({ isOpen, onClose }) {
  // Only one accordion section stays open at a time, as in the original.
  const [openIndex, setOpenIndex] = useState(null)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function submitSearch(e) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    onClose()
    navigate(`/search/?q=${encodeURIComponent(q)}`)
  }

  return (
    <>
      <div
        className={`drawer-overlay${isOpen ? ' is-open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`mobile-drawer${isOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        inert={isOpen ? undefined : ''}
      >
        <div className="drawer-head">
          <LogoLink size={30} onClick={onClose} />
          <button className="drawer-close" aria-label="Close menu" onClick={onClose}>
            ✕
          </button>
        </div>

        <form className="drawer-search" onSubmit={submitSearch}>
          <Icon name="search" size={17} strokeWidth={2} />
          <input
            type="search"
            placeholder="Search your exam..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search your exam"
          />
        </form>

        <nav className="mobile-nav">
          {MOBILE_NAV.map((section, i) => (
            <section className={`mobile-section${openIndex === i ? ' open' : ''}`} key={section.label}>
              <button
                type="button"
                aria-expanded={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {section.label}
                <Icon name="chevron" size={16} strokeWidth={2} className="chev" />
              </button>
              <div className="mobile-section__body">
                {section.groups.map((group, gi) => (
                  <div className="mobile-subgroup" key={group.heading || gi}>
                    {group.heading && <h4>{group.heading}</h4>}
                    {group.links.map((link) => (
                      <Link key={link.to + link.label} to={link.to} onClick={onClose}>
                        {link.label.replace(/\s*→$/, '')}
                      </Link>
                    ))}
                  </div>
                ))}
                {section.footer && (
                  <div className="mobile-subgroup">
                    <Link to={section.footer.to} onClick={onClose}>
                      <strong>{section.footer.label}</strong>
                    </Link>
                  </div>
                )}
              </div>
            </section>
          ))}

          <div style={{ padding: '18px 6px 0' }}>
            <Link
              className="login-btn"
              style={{ display: 'flex', width: '100%', height: 46 }}
              to="/login/"
              onClick={onClose}
            >
              Login / Create Free Account
            </Link>
          </div>
        </nav>
      </aside>
    </>
  )
}
