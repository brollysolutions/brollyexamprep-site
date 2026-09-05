import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV } from '../data/nav'
import Icon from './Icon'
import { LogoLink } from './Logo'

const DESKTOP = '(min-width: 981px)'

function MenuLink({ link, onNavigate }) {
  return (
    <li>
      <Link
        className={`menu-link${link.strong ? ' menu-link--strong' : ''}`}
        to={link.to}
        onClick={onNavigate}
      >
        {link.label}
        {link.badge && <span className="badge">{link.badge}</span>}
      </Link>
    </li>
  )
}

function MegaPanel({ section, isOpen, onNavigate }) {
  return (
    <section
      className={`mega${isOpen ? ' is-open' : ''}`}
      id={section.id}
      aria-label={`${section.label} menu`}
    >
      <div className="mega__head">
        <div>
          <p className="mega__eyebrow">{section.eyebrow}</p>
          <h2 className="mega__title">{section.title}</h2>
          <p className="mega__desc">{section.desc}</p>
        </div>
        <Link className="mega__all" to={section.to} onClick={onNavigate}>
          {section.allLabel}
        </Link>
      </div>

      <div className={`mega__grid cols-${section.cols}`}>
        {section.groups.map((group) => (
          <div className="menu-group" key={group.heading}>
            <h3>{group.heading}</h3>
            <ul>
              {group.links.map((link) => (
                <MenuLink key={link.to + link.label} link={link} onNavigate={onNavigate} />
              ))}
            </ul>

            {group.extraHeading && (
              <>
                <h3 style={{ marginTop: 22 }}>{group.extraHeading}</h3>
                <ul>
                  {group.extraLinks.map((link) => (
                    <MenuLink key={link.to + link.label} link={link} onNavigate={onNavigate} />
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Header({ onOpenSearch, onOpenDrawer }) {
  const [openId, setOpenId] = useState(null)
  const headerRef = useRef(null)
  // A hover-open panel must not be toggled shut by the click that follows it.
  const hoverOpened = useRef(null)
  const location = useLocation()

  const close = useCallback(() => {
    setOpenId(null)
    hoverOpened.current = null
  }, [])

  // Any route change closes whatever is open.
  useEffect(() => close(), [location.pathname, close])

  useEffect(() => {
    function onDocClick(e) {
      if (!e.target.closest('.mega') && !e.target.closest('.nav-trigger')) close()
    }
    function onKey(e) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [close])

  function handleTriggerClick(e, id) {
    e.stopPropagation()
    if (hoverOpened.current === id) {
      hoverOpened.current = null
      return
    }
    setOpenId((current) => (current === id ? null : id))
  }

  function handleItemEnter(id) {
    if (!window.matchMedia(DESKTOP).matches) return
    hoverOpened.current = id
    setOpenId(id)
  }

  function handleNavLeave() {
    if (!window.matchMedia(DESKTOP).matches) return
    // Give the pointer a moment to land on the panel it is travelling towards.
    setTimeout(() => {
      const el = headerRef.current
      if (!el) return
      if (!el.querySelector('.mega:hover') && !el.querySelector('.nav-trigger:hover')) close()
    }, 80)
  }

  return (
    <header className="site-header" id="siteHeader" ref={headerRef}>
      <div className="nav-wrap">
        <LogoLink />

        <nav className="desktop-nav" aria-label="Primary navigation" onMouseLeave={handleNavLeave}>
          {NAV.map((section) => (
            <div
              className="nav-item"
              key={section.id}
              onMouseEnter={() => handleItemEnter(section.id)}
            >
              <button
                className="nav-trigger"
                aria-expanded={openId === section.id}
                aria-controls={section.id}
                onClick={(e) => handleTriggerClick(e, section.id)}
              >
                {section.label}
                <Icon name="chevron" size={16} strokeWidth={2} className="chev" />
              </button>

              <MegaPanel
                section={section}
                isOpen={openId === section.id}
                onNavigate={close}
              />
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Search exams and study material"
            title="Search"
            onClick={() => {
              close()
              onOpenSearch()
            }}
          >
            <Icon name="search" size={18} strokeWidth={2} />
          </button>

          <Link className="login-btn" to="/login/">
            <Icon name="user" size={16} strokeWidth={2} />
            Login
          </Link>

          <button className="mobile-btn" aria-label="Open menu" onClick={onOpenDrawer}>
            <Icon name="menu" size={20} strokeWidth={2} />
          </button>
        </div>
      </div>
    </header>
  )
}
