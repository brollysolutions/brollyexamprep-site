import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { useTitle } from '../components/ui'

const BENEFITS = [
  'Save every mock attempt and compare them over time',
  'Section, topic, accuracy and time breakdowns after each test',
  'Follow the exams you care about and get their notifications',
  'Pick up study material and daily quizzes where you left off',
]

/**
 * Front-end shell for the account screens. Wire `onSubmit` to your auth
 * backend — no credentials are sent anywhere as it stands.
 */
function AuthShell({ mode }) {
  const isRegister = mode === 'register'
  const [submitted, setSubmitted] = useState(false)

  useTitle(isRegister ? 'Create Free Account' : 'Login')

  return (
    <section className="auth">
      <div className="wrap auth__grid">
        <div className="auth__pitch">
          <Logo size={40} />
          <h1>{isRegister ? 'Create your free account' : 'Welcome back'}</h1>
          <p className="lead">
            {isRegister
              ? 'One account for mock tests, previous-year papers, study material and exam updates.'
              : 'Sign in to pick up your preparation where you left it.'}
          </p>
          <ul className="auth__list">
            {BENEFITS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="auth__card">
          <h2>{isRegister ? 'Sign up' : 'Log in'}</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            {isRegister && (
              <label className="field">
                <span>Full name</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
            )}
            <label className="field">
              <span>Email or mobile</span>
              <input type="text" name="identifier" autoComplete="username" required />
            </label>
            <label className="field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                autoComplete={isRegister ? 'new-password' : 'current-password'}
                required
              />
            </label>

            {isRegister && (
              <label className="field field--check">
                <input type="checkbox" required />
                <span>
                  I agree to the <Link to="/terms-and-conditions/">Terms</Link> and{' '}
                  <Link to="/privacy-policy/">Privacy Policy</Link>.
                </span>
              </label>
            )}

            <button className="btn btn--y" type="submit" style={{ width: '100%' }}>
              {isRegister ? 'Create Free Account' : 'Log In'}
            </button>

            {submitted && (
              <p className="auth__note" role="status">
                This form is not connected to an authentication backend yet — hook it up in{' '}
                <code>src/pages/Auth.jsx</code>.
              </p>
            )}
          </form>

          <p className="auth__swap">
            {isRegister ? (
              <>
                Already have an account? <Link to="/login/">Log in</Link>
              </>
            ) : (
              <>
                New to Brolly? <Link to="/register/">Create a free account</Link>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

export function Login() {
  return <AuthShell mode="login" />
}

export function Register() {
  return <AuthShell mode="register" />
}
