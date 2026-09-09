import { Link } from 'react-router-dom'
import { FOOTER_COLS } from '../data/site'
import Logo from './Logo'

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
              A Pan-India competitive exam preparation platform — diagnostic tests, previous-paper
              methods, study material and official-source guides for SSC, Banking, Railways, UPSC, Defence, Teaching,
              State PSC and Police examinations.
            </p>
            <p className="ft2__ab">
              Official social profiles will be linked here only after their account URLs are verified.
            </p>
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
