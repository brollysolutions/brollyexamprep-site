import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Icon from '../../components/Icon'
import { EXAM_INDEX, HERO_POPULAR } from '../../data/site'

/** Hero search box with instant exam suggestions and arrow-key selection. */
function ExamSearch() {
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState([])
  const [cursor, setCursor] = useState(-1)
  const [dismissed, setDismissed] = useState(false)
  const boxRef = useRef(null)
  const navigate = useNavigate()

  // Suggestions only appear once there is something specific enough to match on.
  const showList = query.trim().length >= 2 && !dismissed

  useEffect(() => {
    const q = query.trim().toLowerCase()
    setCursor(-1)
    if (q.length < 2) {
      setHits([])
      return
    }
    setHits(
      EXAM_INDEX.filter(
        ([name, category]) =>
          name.toLowerCase().includes(q) || category.toLowerCase().includes(q),
      ).slice(0, 6),
    )
  }, [query])

  useEffect(() => {
    function onDocClick(e) {
      if (!boxRef.current?.contains(e.target)) setDismissed(true)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  function onChange(e) {
    setQuery(e.target.value)
    setDismissed(false)
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      setDismissed(true)
      return
    }
    if (!hits.length) return
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      setCursor((c) => {
        const next = c + (e.key === 'ArrowDown' ? 1 : -1)
        if (next < 0) return hits.length - 1
        if (next >= hits.length) return 0
        return next
      })
    } else if (e.key === 'Enter' && cursor > -1) {
      e.preventDefault()
      navigate(hits[cursor][2])
    }
  }

  function submit(e) {
    e.preventDefault()
    const q = query.trim()
    navigate(q ? `/search/?q=${encodeURIComponent(q)}` : '/search/')
  }

  return (
    <form className="xs" role="search" autoComplete="off" onSubmit={submit} ref={boxRef}>
      <div className="xs__row">
        <Icon name="search" size={19} strokeWidth={2} />
        <input
          name="q"
          type="search"
          role="combobox"
          aria-expanded={showList}
          aria-controls="xsList"
          aria-label="Search your competitive exam"
          placeholder="Search your exam – SSC CGL, SBI PO, RRB NTPC, UPSC, State PSC..."
          value={query}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <button type="submit">Search</button>
      </div>

      <div
        className={`xs__list${showList ? ' on' : ''}`}
        id="xsList"
        role="listbox"
        aria-label="Exam suggestions"
      >
        {hits.length > 0 ? (
          hits.map(([name, category, to], i) => (
            <Link
              key={to + name}
              role="option"
              aria-selected={i === cursor}
              className={i === cursor ? 'on' : undefined}
              to={to}
            >
              {name}
              <span className="c">{category}</span>
            </Link>
          ))
        ) : (
          <p className="xs__none">No exam matches that. Press Enter to search everything.</p>
        )}
      </div>
    </form>
  )
}

export default function Hero() {
  return (
    <section className="bxh">
      <div className="wrap">
        <div className="bxh__in">
          <p className="eyebrow">Online preparation for aspirants across India</p>
          <h1>
            India's Smart Platform for <span>Competitive Exam Preparation</span>
          </h1>
          <p className="bxh__p">
            Brolly is an online competitive exam preparation platform for aspirants across India.
            Choose an SSC, Banking, Railway, UPSC, Defence, Teaching or State Government exam, then
            use its syllabus, previous-year papers, mock tests, study material and exam updates to
            plan what to learn, practise and revise next.
          </p>

          <div className="bxh__cta">
            <Link className="btn btn--k" to="/government-exams/">
              Explore Exams
            </Link>
            <Link className="btn btn--y" to="/mock-tests/free/">
              Take Free Mock Test
            </Link>
            <Link className="btn btn--o" to="/contact/?topic=demo">
              Book a Demo
            </Link>
          </div>

          <ExamSearch />

          <p className="pops">
            <b>Popular Searches</b>
            {HERO_POPULAR.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </section>
  )
}
