import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { POPULAR_SEARCHES } from '../data/nav'
import Icon from './Icon'

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) return
    const id = setTimeout(() => inputRef.current?.focus(), 40)
    return () => clearTimeout(id)
  }, [isOpen])

  function submit(e) {
    e.preventDefault()
    const q = query.trim()
    if (!q) return
    onClose()
    navigate(`/search/?q=${encodeURIComponent(q)}`)
  }

  return (
    <div
      className={`search-panel${isOpen ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Search Brolly Exam Preparation"
      inert={isOpen ? undefined : ''}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="search-box">
        <form className="search-box__top" onSubmit={submit}>
          <Icon name="search" size={22} strokeWidth={2} />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search SSC CGL, UPSC, CAT, NEET, JEE, topics..."
            aria-label="Search"
          />
          <button type="button" className="search-close" aria-label="Close search" onClick={onClose}>
            ✕
          </button>
        </form>
        <div className="search-suggestions">
          <p>Popular searches</p>
          <div className="chips">
            {POPULAR_SEARCHES.map((item) => (
              <Link className="chip" key={item.to} to={item.to} onClick={onClose}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
