import { Link } from 'react-router-dom'
import { FOOTER_COLS } from '../data/site'
import Logo from './Logo'

const SOCIAL = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    path: 'M23 12s0-3.5-.4-5.2a2.7 2.7 0 00-1.9-1.9C19 4.5 12 4.5 12 4.5s-7 0-8.7.4a2.7 2.7 0 00-1.9 1.9C1 8.5 1 12 1 12s0 3.5.4 5.2a2.7 2.7 0 001.9 1.9c1.7.4 8.7.4 8.7.4s7 0 8.7-.4a2.7 2.7 0 001.9-1.9C23 15.5 23 12 23 12zM9.8 15.3V8.7l5.7 3.3z',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/',
    path: 'M21.9 4.3l-3 14.1c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L6.9 11.4 2.3 10c-1-.3-1-1 .2-1.5l18-6.9c.8-.3 1.6.2 1.4 2.7z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    path: 'M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z',
  },
  {
    label: 'X',
    href: 'https://x.com/',
    path: 'M17.5 3h3.2l-7 8 8.2 10h-6.4l-5-6.1L4.8 21H1.6l7.5-8.6L1.2 3h6.6l4.5 5.6zm-1.1 16h1.8L7.7 4.8H5.8z',
  },
]

export default function Footer() {
  return (
    <footer className="ft2">
      <div className="wrap">
        <div className="ft2__top">
          <div>
            <Link to="/" className="ft2__brand" aria-label="Brolly Exam Prep home">
              <Logo variant="light" size={40} />
            </Link>
            <p className="ft2__ab">
              A Pan-India competitive exam preparation platform — mock tests, previous-year papers,
              study material and exam updates for SSC, Banking, Railways, UPSC, Defence, Teaching,
              State PSC and Police examinations.
            </p>
            <div className="ft2__soc">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  rel="noopener"
                  target="_blank"
                  aria-label={`Brolly Exam Prep on ${s.label}`}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <a
                href="https://www.instagram.com/"
                rel="noopener"
                target="_blank"
                aria-label="Brolly Exam Prep on Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          <div className="ft2__cols">
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <h3>{col.heading}</h3>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.href ? (
                        <a href={link.href} rel="noopener" target="_blank">
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.to}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="ft2__ct">
          <span>
            Email: <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a>
          </span>
          <span>
            Phone: <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
          </span>
          <span>Hyderabad, Telangana, India</span>
        </div>
        <div className="ft2__bs">
          <span>© 2026 Brolly Exam Prep. All rights reserved.</span>
          <span className="r">Built for competitive exam aspirants across India</span>
        </div>
      </div>
    </footer>
  )
}
