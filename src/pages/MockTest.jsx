import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Arrow } from '../components/Icon'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { getTest, orderedQuestions, specOf, TESTS } from '../data/mock-tests'
import { humanise } from '../lib/labels'
import { FinalCta } from './home/sections'
import MockTests, { isMockFamily } from './MockTests'

const LETTERS = ['A', 'B', 'C', 'D']

/**
 * /mock-tests/:slug/ carries two kinds of URL. Most name a paper, but the
 * "Find by exam" nav links name an exam family — /mock-tests/ssc/ and the
 * rest. Those used to fall through to this page and render "Mock Test Not
 * Found", so six linked URLs answered with a soft 404. Dispatching here sends
 * a family to the listing instead, and only one of the two components ever
 * mounts, so only one of them sets the page title.
 */
export function MockTestRoute() {
  const { slug } = useParams()
  if (!getTest(slug) && isMockFamily(slug)) return <MockTests familySlug={slug} />
  return <MockTest />
}

/** 754 → "12:34". The clock never shows a negative time. */
function clock(seconds) {
  const safe = Math.max(0, seconds)
  const mm = String(Math.floor(safe / 60)).padStart(2, '0')
  const ss = String(safe % 60).padStart(2, '0')
  return `${mm}:${ss}`
}

/** Trims a score to two decimals without leaving "12.00" on whole numbers. */
function marksLabel(value) {
  return Number(value.toFixed(2)).toString()
}

/**
 * One mock test: an instructions screen, the paper itself, and the result.
 *
 * The whole attempt lives in this component's state — nothing is persisted, so
 * a reload restarts the test, which is also what the real test engines do.
 */
export default function MockTest() {
  const { slug } = useParams()
  const test = getTest(slug)

  // Hooks must run in the same order every render, so the unknown-slug case is
  // handled after them rather than with an early return.
  const questions = useMemo(() => (test ? orderedQuestions(test) : []), [test])
  const [phase, setPhase] = useState('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [marked, setMarked] = useState(() => new Set())
  const [left, setLeft] = useState(0)
  const [reviewOnly, setReviewOnly] = useState('all')

  useSeo(
    test
      ? {
          title: `${test.title} - Free Online Test | Brolly Exam Prep`,
          description: `Take the ${test.title} free online mock test - full length, timed, with instant scoring, detailed solutions and a performance breakdown.`,
          canonical: canonicalFor(`/mock-tests/${slug}/`),
        }
      : {
          title: 'Mock Test Not Found | Brolly Exam Prep',
          // Nothing to index when the slug matches no test.
          robots: 'noindex, follow',
        },
  )

  const submit = useCallback(() => {
    setPhase('result')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // The countdown. It runs only during the test and submits the paper on zero.
  const submitRef = useRef(submit)
  submitRef.current = submit
  useEffect(() => {
    if (phase !== 'test') return undefined
    const id = setInterval(() => {
      setLeft((seconds) => {
        if (seconds <= 1) {
          clearInterval(id)
          submitRef.current()
          return 0
        }
        return seconds - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [phase])

  if (!test) return <UnknownTest slug={slug} />

  function start() {
    setAnswers(Array(questions.length).fill(null))
    setMarked(new Set())
    setCurrent(0)
    setLeft(test.minutes * 60)
    setPhase('test')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function choose(optionIndex) {
    setAnswers((prev) => prev.map((value, i) => (i === current ? optionIndex : value)))
  }

  function clearAnswer() {
    setAnswers((prev) => prev.map((value, i) => (i === current ? null : value)))
  }

  function toggleMark() {
    setMarked((prev) => {
      const next = new Set(prev)
      if (next.has(current)) next.delete(current)
      else next.add(current)
      return next
    })
  }

  if (phase === 'intro') return <Intro test={test} questions={questions} onStart={start} />

  const score = grade(test, questions, answers)

  if (phase === 'result') {
    return (
      <Result
        test={test}
        questions={questions}
        answers={answers}
        score={score}
        filter={reviewOnly}
        onFilter={setReviewOnly}
        onRetake={start}
      />
    )
  }

  return (
    <Paper
      test={test}
      questions={questions}
      answers={answers}
      marked={marked}
      current={current}
      left={left}
      onJump={setCurrent}
      onChoose={choose}
      onClear={clearAnswer}
      onMark={toggleMark}
      onSubmit={submit}
    />
  )
}

/** Marks the paper and breaks the result down by section. */
function grade(test, questions, answers) {
  const rows = test.sections.map((section) => ({ ...section, total: 0, right: 0, wrong: 0, skipped: 0 }))
  const bySection = new Map(rows.map((row) => [row.id, row]))

  let right = 0
  let wrong = 0
  let skipped = 0

  questions.forEach((question, i) => {
    const row = bySection.get(question.section)
    row.total += 1
    if (answers[i] === null || answers[i] === undefined) {
      skipped += 1
      row.skipped += 1
    } else if (answers[i] === question.answer) {
      right += 1
      row.right += 1
    } else {
      wrong += 1
      row.wrong += 1
    }
  })

  const attempted = right + wrong
  return {
    rows,
    right,
    wrong,
    skipped,
    attempted,
    max: questions.length * test.marks,
    marks: Math.max(0, right * test.marks - wrong * test.negative),
    accuracy: attempted ? Math.round((right / attempted) * 100) : 0,
  }
}

/* ── Instructions ─────────────────────────────────────────────── */

function Intro({ test, questions, onStart }) {
  const counts = test.sections.map((section) => ({
    ...section,
    total: questions.filter((question) => question.section === section.id).length,
  }))

  return (
    <>
      <PageHero
        eyebrow={`${test.cat} · Free mock test`}
        title={test.title}
        lead={test.pattern}
        trail={[{ label: 'Mock Tests', to: '/mock-tests/' }, { label: test.exam }]}
        actions={
          <>
            <button className="btn btn--y" type="button" onClick={onStart}>
              Start Test
            </button>
            <Link className="btn btn--o" to="/mock-tests/">
              All Mock Tests
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Before you begin"
            title="Instructions"
            lead={`This is a shortened paper built on the current pattern. ${test.fullSpec.replace('Full paper: ', 'The full paper runs ').replace('Full exam: ', 'The full exam runs ')}.`}
          />

          <div className="mt-intro">
            <div className="mt-intro__facts">
              <dl className="mt-facts">
                <div>
                  <dt>Questions</dt>
                  <dd>{questions.length}</dd>
                </div>
                <div>
                  <dt>Time limit</dt>
                  <dd>{test.minutes} min</dd>
                </div>
                <div>
                  <dt>Total marks</dt>
                  <dd>{marksLabel(questions.length * test.marks)}</dd>
                </div>
                <div>
                  <dt>Marking</dt>
                  <dd>
                    +{marksLabel(test.marks)}
                    {test.negative > 0 ? ` / −${marksLabel(test.negative)}` : ' / no penalty'}
                  </dd>
                </div>
              </dl>

              <ul className="mt-rules">
                <li>The clock starts as soon as you press Start and the paper submits itself at zero.</li>
                <li>You can move between questions freely and change any answer before you submit.</li>
                <li>Mark a question for review to come back to it — a marked question still counts as answered if you have chosen an option.</li>
                {test.negative > 0 ? (
                  <li>
                    A wrong answer costs {marksLabel(test.negative)} marks, so leave a question blank when you have no idea.
                  </li>
                ) : (
                  <li>There is no negative marking, so attempt every question.</li>
                )}
                <li>Your score, the answer key and a full explanation for every question appear as soon as you submit.</li>
              </ul>
            </div>

            <div className="mt-intro__sections">
              <h3>Sections in this test</h3>
              {counts.map((section) => (
                <div className="mt-secrow" key={section.id}>
                  <span>{section.name}</span>
                  <b>{section.total} Q</b>
                </div>
              ))}
              <button className="btn btn--k mt-intro__go" type="button" onClick={onStart}>
                Start Test
              </button>
            </div>
          </div>
        </div>
      </section>

      <OtherTests slug={test.slug} />
    </>
  )
}

/* ── The paper ────────────────────────────────────────────────── */

function Paper({
  test,
  questions,
  answers,
  marked,
  current,
  left,
  onJump,
  onChoose,
  onClear,
  onMark,
  onSubmit,
}) {
  const question = questions[current]
  const section = test.sections.find((item) => item.id === question.section)
  const answered = answers.filter((value) => value !== null && value !== undefined).length
  const low = left <= 60

  return (
    <section className="mt">
      <div className="wrap">
        <div className="mt__bar">
          <div className="mt__bar-l">
            <Link className="mt__back" to="/mock-tests/">
              Mock Tests
            </Link>
            <b>{test.title}</b>
          </div>
          <div className="mt__bar-r">
            <span className="mt__count">
              {answered} / {questions.length} answered
            </span>
            <span className={`mt__clock${low ? ' is-low' : ''}`} role="timer" aria-live="off">
              {clock(left)}
            </span>
          </div>
        </div>

        <div className="mt__tabs" role="tablist" aria-label="Sections">
          {test.sections.map((item) => {
            const first = questions.findIndex((q) => q.section === item.id)
            const total = questions.filter((q) => q.section === item.id).length
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === question.section}
                className={`mt__tab${item.id === question.section ? ' is-on' : ''}`}
                onClick={() => onJump(first)}
              >
                {item.name} <span>{total}</span>
              </button>
            )
          })}
        </div>

        <div className="mt__body">
          <div className="mt__main">
            <p className="mt__meta">
              <span className="mt__num">Question {current + 1}</span>
              <span className="mt__sec">{section.name}</span>
              <span className="mt__marks">
                +{marksLabel(test.marks)}
                {test.negative > 0 ? ` / −${marksLabel(test.negative)}` : ''}
              </span>
            </p>

            <h1 className="mt__q">{question.q}</h1>

            <div className="mt__opts" role="radiogroup" aria-label={`Question ${current + 1} options`}>
              {question.options.map((option, i) => (
                <button
                  key={option}
                  type="button"
                  role="radio"
                  aria-checked={answers[current] === i}
                  className={`mt__opt${answers[current] === i ? ' is-on' : ''}`}
                  onClick={() => onChoose(i)}
                >
                  <span className="mt__letter">{LETTERS[i]}</span>
                  <span>{option}</span>
                </button>
              ))}
            </div>

            <div className="mt__acts">
              <button
                className="btn btn--o btn--sm"
                type="button"
                onClick={() => onJump(Math.max(0, current - 1))}
                disabled={current === 0}
              >
                Previous
              </button>
              <button className="btn btn--o btn--sm" type="button" onClick={onMark}>
                {marked.has(current) ? 'Unmark' : 'Mark for review'}
              </button>
              <button
                className="btn btn--o btn--sm"
                type="button"
                onClick={onClear}
                disabled={answers[current] === null}
              >
                Clear
              </button>
              {current === questions.length - 1 ? (
                <button className="btn btn--k btn--sm" type="button" onClick={onSubmit}>
                  Submit Test
                </button>
              ) : (
                <button
                  className="btn btn--y btn--sm"
                  type="button"
                  onClick={() => onJump(current + 1)}
                >
                  Save &amp; Next
                </button>
              )}
            </div>
          </div>

          <aside className="mt__side">
            <h2>Question palette</h2>
            <div className="mt__palette">
              {questions.map((_, i) => {
                const state = marked.has(i)
                  ? 'mark'
                  : answers[i] !== null && answers[i] !== undefined
                    ? 'done'
                    : 'todo'
                return (
                  <button
                    key={i}
                    type="button"
                    className={`mt__cell is-${state}${i === current ? ' is-here' : ''}`}
                    onClick={() => onJump(i)}
                    aria-label={`Go to question ${i + 1}`}
                    aria-current={i === current ? 'true' : undefined}
                  >
                    {i + 1}
                  </button>
                )
              })}
            </div>

            <ul className="mt__key">
              <li>
                <span className="mt__dot is-done" /> Answered
              </li>
              <li>
                <span className="mt__dot is-mark" /> Marked for review
              </li>
              <li>
                <span className="mt__dot is-todo" /> Not answered
              </li>
            </ul>

            <button className="btn btn--k mt__submit" type="button" onClick={onSubmit}>
              Submit Test
            </button>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ── Result ───────────────────────────────────────────────────── */

function Result({ test, questions, answers, score, filter, onFilter, onRetake }) {
  const shown = questions
    .map((question, i) => ({ question, i }))
    .filter(({ question, i }) => {
      if (filter === 'wrong') return answers[i] !== null && answers[i] !== question.answer
      if (filter === 'skipped') return answers[i] === null
      return true
    })

  const percent = score.max ? Math.round((score.marks / score.max) * 100) : 0

  return (
    <>
      <PageHero
        eyebrow={`${test.exam} · Result`}
        title={`You scored ${marksLabel(score.marks)} / ${marksLabel(score.max)}`}
        lead={`${score.right} correct, ${score.wrong} wrong and ${score.skipped} left blank, at ${score.accuracy}% accuracy on what you attempted. Read the explanations below before you retake — that is where the marks come from.`}
        trail={[
          { label: 'Mock Tests', to: '/mock-tests/' },
          { label: test.exam, to: `/mock-tests/${test.slug}/` },
          { label: 'Result' },
        ]}
        actions={
          <>
            <button className="btn btn--y" type="button" onClick={onRetake}>
              Retake Test
            </button>
            <Link className="btn btn--o" to="/mock-tests/">
              Try Another Test
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <div className="mt-stats">
            <Stat label="Score" value={`${marksLabel(score.marks)}/${marksLabel(score.max)}`} />
            <Stat label="Percentage" value={`${percent}%`} />
            <Stat label="Accuracy" value={`${score.accuracy}%`} />
            <Stat label="Attempted" value={`${score.attempted}/${questions.length}`} />
          </div>

          <SectionHead eyebrow="Where the marks went" title="Section-wise performance" />
          <div className="mt-table-wrap">
            <table className="mt-table">
              <thead>
                <tr>
                  <th scope="col">Section</th>
                  <th scope="col">Questions</th>
                  <th scope="col">Correct</th>
                  <th scope="col">Wrong</th>
                  <th scope="col">Blank</th>
                  <th scope="col">Marks</th>
                </tr>
              </thead>
              <tbody>
                {score.rows.map((row) => (
                  <tr key={row.id}>
                    <th scope="row">{row.name}</th>
                    <td>{row.total}</td>
                    <td className="is-right">{row.right}</td>
                    <td className="is-wrong">{row.wrong}</td>
                    <td>{row.skipped}</td>
                    <td>
                      {marksLabel(Math.max(0, row.right * test.marks - row.wrong * test.negative))}/
                      {marksLabel(row.total * test.marks)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Answer key"
            title="Every question, explained"
            lead="The explanation matters more than the score. Read the ones you got wrong first."
          />

          <div className="mt-filter" role="group" aria-label="Filter questions">
            {[
              ['all', `All ${questions.length}`],
              ['wrong', `Wrong ${score.wrong}`],
              ['skipped', `Blank ${score.skipped}`],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`mt-filter__b${filter === id ? ' is-on' : ''}`}
                onClick={() => onFilter(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {shown.length === 0 ? (
            <p className="mt-empty">Nothing here — good sign.</p>
          ) : (
            <ol className="mt-review">
              {shown.map(({ question, i }) => {
                const given = answers[i]
                const status = given === null ? 'skipped' : given === question.answer ? 'right' : 'wrong'
                return (
                  <li className={`mt-rev is-${status}`} key={i}>
                    <div className="mt-rev__h">
                      <span className="mt-rev__n">Q{i + 1}</span>
                      <span className={`mt-rev__tag is-${status}`}>
                        {status === 'right' ? 'Correct' : status === 'wrong' ? 'Wrong' : 'Not attempted'}
                      </span>
                    </div>
                    <p className="mt-rev__q">{question.q}</p>
                    <ul className="mt-rev__opts">
                      {question.options.map((option, oi) => {
                        const isAnswer = oi === question.answer
                        const isGiven = oi === given
                        return (
                          <li
                            key={option}
                            className={`${isAnswer ? 'is-answer' : ''}${isGiven && !isAnswer ? ' is-given' : ''}`}
                          >
                            <span className="mt-rev__l">{LETTERS[oi]}</span>
                            <span>{option}</span>
                            {isAnswer && <em>Correct answer</em>}
                            {isGiven && !isAnswer && <em>Your answer</em>}
                          </li>
                        )
                      })}
                    </ul>
                    <p className="mt-rev__x">
                      <b>Why:</b> {question.explain}
                    </p>
                  </li>
                )
              })}
            </ol>
          )}
        </div>
      </section>

      <OtherTests slug={test.slug} />
      <FinalCta
        title="One mock is a data point. Three is a trend."
        lead="Fix what this paper exposed, then take another in a week and compare the section table."
      />
    </>
  )
}

function Stat({ label, value }) {
  return (
    <div className="mt-stat">
      <span className="mt-stat__v">{value}</span>
      <span className="mt-stat__l">{label}</span>
    </div>
  )
}

/* ── Shared tail ──────────────────────────────────────────────── */

function OtherTests({ slug }) {
  const others = TESTS.filter((test) => test.slug !== slug).slice(0, 4)

  return (
    <section className="s">
      <div className="wrap">
        <SectionHead eyebrow="Keep going" title="Other free mock tests" />
        <div className="mocks">
          {others.map((test) => (
            <Link className="mk" key={test.slug} to={`/mock-tests/${test.slug}/`}>
              <span className="pill pill--free mk__free">Free</span>
              <span className="mk__cat">{test.cat}</span>
              <h3>{test.title}</h3>
              <p className="mk__spec">{specOf(test)}</p>
              <span className="mk__go">
                Take Free Test <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * A slug with no question bank behind it. Plenty of pages across the site
 * already link to papers that are still being written, so this names the exam
 * the reader asked for and hands them the ones that are ready.
 */
function UnknownTest({ slug }) {
  const name = humanise(slug || '')

  return (
    <>
      <PageHero
        eyebrow="Mock Tests"
        title={name ? `${name} Mock Test` : 'That test is not available yet'}
        lead={`This paper is still being written, so there is nothing to attempt at /mock-tests/${slug}/ yet. The tests below are live and free right now, and several cover the same syllabus.`}
        trail={[
          { label: 'Mock Tests', to: '/mock-tests/' },
          { label: name || 'Not found' },
        ]}
        actions={
          <Link className="btn btn--y" to="/mock-tests/">
            All Mock Tests
          </Link>
        }
      />
      <OtherTests slug={slug} />
    </>
  )
}
