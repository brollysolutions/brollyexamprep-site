import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SearchOverlay from './SearchOverlay'
import MobileDrawer from './MobileDrawer'
import { trackPageView } from '../lib/analytics'

/** Sticky conversion bar that appears once the reader is past the fold. */
function MobileBar() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    function onScroll() {
      setOn(window.scrollY > 420)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`mbar${on ? ' on' : ''}`} id="mbar">
      <Link className="btn btn--o btn--sm" to="/government-exams/">
        Explore Exams
      </Link>
      <Link className="btn btn--y btn--sm" to="/mock-tests/free/">
        Take Free Mock Test
      </Link>
    </div>
  )
}

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  // New page, fresh scroll position, and nothing left hanging open.
  useEffect(() => {
    setSearchOpen(false)
    setDrawerOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  // One Google Analytics page view per route. Page components set their title
  // in their own effects, which React flushes before this parent effect runs,
  // so document.title already belongs to the route being reported.
  useEffect(() => {
    trackPageView(location.pathname + location.search)
  }, [location.pathname, location.search])

  // Lock the page behind either overlay.
  useEffect(() => {
    document.body.style.overflow = searchOpen || drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [searchOpen, drawerOpen])

  useEffect(() => {
    function onKey(e) {
      if (e.key !== 'Escape') return
      setSearchOpen(false)
      setDrawerOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Header onOpenSearch={() => setSearchOpen(true)} onOpenDrawer={() => setDrawerOpen(true)} />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main id="main">
        <Outlet />
      </main>

      <Footer />
      <MobileBar />
    </>
  )
}
