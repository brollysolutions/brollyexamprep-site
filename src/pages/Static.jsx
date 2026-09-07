import { Link, useLocation } from 'react-router-dom'
import Logo from '../components/Logo'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { FACULTY, FEATURES, SUCCESS_STORIES } from '../data/site'
import Icon from '../components/Icon'
import { FacultySection, FinalCta, SuccessStoriesSection } from './home/sections'

export function About() {
  useSeo({
    title: 'About Brolly Exam Prep',
    description:
      'Brolly Exam Prep is an online preparation platform for Indian competitive exams, offering free study material, previous-year papers and mock tests.',
    canonical: canonicalFor('/about/'),
  })
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Brolly Exam Prep"
        lead="A Pan-India competitive exam preparation platform — mock tests, previous-year papers, study material and exam updates for SSC, Banking, Railways, UPSC, Defence, Teaching, State PSC and Police examinations."
        trail={[{ label: 'About' }]}
      />

      <section className="s">
        <div className="wrap wrap--narrow prose">
          <Logo size={44} />
          <h2 className="h" style={{ marginTop: 24 }}>
            Preparation that answers to the exam, not to a content calendar
          </h2>
          <p>
            Most study platforms are libraries: a large pile of material, loosely tagged, that
            leaves the aspirant to work out what matters. Brolly is built the other way round.
            Every resource here is attached to a specific exam, a specific section of that exam's
            syllabus, and a specific stage of preparation.
          </p>
          <p>
            That structure is what makes the analysis useful. When a mock test breaks down by
            section, topic, accuracy and time, each weak topic already has a lesson and a topic
            test waiting behind it. The report is not a verdict — it is the next study plan.
          </p>
          <p>
            Brolly Exam Prep is part of{' '}
            <a href="https://brollyacademy.com/" rel="noopener" target="_blank">
              Brolly Academy
            </a>
            , Hyderabad.
          </p>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead eyebrow="What you get" title="How we are different" />
          <div className="feats">
            {FEATURES.map((f) => (
              <div className="ft" key={f.title}>
                <span className="ft__i">
                  <Icon name={f.icon} size={20} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FacultySection />
      <FinalCta />
    </>
  )
}

export function Contact() {
  useSeo({
    title: 'Contact Us | Brolly Exam Prep',
    description:
      'Contact the Brolly Exam Prep team for help with courses, mock tests, study material or technical support.',
    canonical: canonicalFor('/contact/'),
  })
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        lead="Questions about an exam, a test series or your account — or something that looks wrong on a page. We read everything."
        trail={[{ label: 'Contact' }]}
      />

      <section className="s">
        <div className="wrap auth__grid">
          <div className="prose">
            <h2 className="h">Reach us directly</h2>
            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a>
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
            </p>
            <p>
              <strong>Address</strong>
              <br />
              Hyderabad, Telangana, India
            </p>
            <p>
              For content corrections, quote the page URL — it is the fastest way for the subject
              faculty to find and fix the item.
            </p>
          </div>

          <div className="auth__card">
            <h2>Send a message</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <label className="field">
                <span>Your name</span>
                <input type="text" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input type="email" required />
              </label>
              <label className="field">
                <span>Message</span>
                <textarea rows="5" required />
              </label>
              <button className="btn btn--y" type="submit" style={{ width: '100%' }}>
                Send Message
              </button>
              <p className="auth__note">
                Not wired to a backend yet — connect this form in <code>src/pages/Static.jsx</code>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export function SuccessStories() {
  useSeo({
    title: 'Success Stories | Brolly Exam Prep',
    description:
      'Selection stories from Brolly Exam Prep aspirants across SSC, banking, railway and state examinations.',
    canonical: canonicalFor('/success-stories/'),
  })
  return (
    <>
      <PageHero
        eyebrow="From our aspirants"
        title="Success Stories"
        lead="Aspirants who prepared with Brolly, in their own words."
        trail={[{ label: 'Success Stories' }]}
      />
      <SuccessStoriesSection background={false} />
      <section className="s s--bg">
        <div className="wrap wrap--narrow prose">
          <p>
            <strong>Editorial note.</strong> The {SUCCESS_STORIES.length} entries above are template
            records, not a real selection. Replace them with verified, consented student
            testimonials before publishing, or remove the section entirely.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  )
}

export function Faculty() {
  useSeo({
    title: 'Our Faculty | Brolly Exam Prep',
    description:
      'The subject teachers behind Brolly Exam Prep, who write the study material, question banks and mock tests.',
    canonical: canonicalFor('/faculty/'),
  })
  return (
    <>
      <PageHero
        eyebrow="Who teaches you"
        title="Our Faculty"
        lead="Every question and solution on Brolly is written by subject faculty and published under the author's name."
        trail={[{ label: 'Faculty' }]}
      />
      <FacultySection />
      <section className="s s--bg">
        <div className="wrap wrap--narrow prose">
          <h2 className="h">Why we list subjects rather than names</h2>
          <p>
            Faculty here are listed by subject rather than by invented personalities. Individual
            educator records — name, photograph, qualification and years of experience — are added
            through the CMS as they are verified, so the {FACULTY.length} subject groups above will
            expand into named profiles rather than being replaced by them.
          </p>
        </div>
      </section>
      <FinalCta />
    </>
  )
}

export function Careers() {
  useSeo({
    title: 'Careers | Brolly Exam Prep',
    description:
      'Open roles at Brolly Exam Prep for teachers, content writers, question setters and engineers.',
    canonical: canonicalFor('/careers/'),
  })
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        title="Careers at Brolly Exam Prep"
        lead="We hire subject faculty, content editors and engineers who care about getting the details of an exam right."
        trail={[{ label: 'Careers' }]}
      />
      <section className="s">
        <div className="wrap wrap--narrow prose">
          <h2 className="h">Open roles</h2>
          <p>
            Current openings are published here as they open. To register interest in the meantime,
            write to <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a> with
            the subject you teach or the work you do, and a sample of it.
          </p>
          <p>
            <Link className="btn btn--k" to="/contact/">
              Contact Us
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}

const LEGAL_COPY = {
  '/privacy-policy/': {
    title: 'Privacy Policy',
    intro:
      'How Brolly Exam Prep collects, uses and protects the information you give us when you create an account, attempt a test or contact support.',
  },
  '/terms-and-conditions/': {
    title: 'Terms & Conditions',
    intro:
      'The terms that govern your use of Brolly Exam Prep, including accounts, purchased test series and acceptable use of the material published here.',
  },
  '/refund-policy/': {
    title: 'Refund Policy',
    intro:
      'When a paid course or test series purchase can be refunded, how to request one and how long refunds take to process.',
  },
  '/disclaimer/': {
    title: 'Disclaimer',
    intro:
      'Exam dates, vacancies, syllabi and results published here are compiled from official notifications. Verify against the conducting body before acting on them.',
  },
}

export function Legal() {
  const { pathname } = useLocation()
  const copy = LEGAL_COPY[pathname] || { title: 'Legal', intro: '' }
  useSeo({
    title: `${copy.title} | Brolly Exam Prep`,
    description: copy.intro,
    canonical: canonicalFor(pathname),
  })

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={copy.title}
        lead={copy.intro}
        trail={[{ label: copy.title }]}
      />
      <section className="s">
        <div className="wrap wrap--narrow prose">
          <p>
            This page is a placeholder. Replace the body with the reviewed legal text for{' '}
            <code>{pathname}</code> before the site goes live — the heading, breadcrumbs and layout
            are already in place.
          </p>
          <p>
            Questions about this policy go to{' '}
            <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a>.
          </p>
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  // A single-page app answers 200 for unknown URLs, so this is the only way to
  // stop Google treating a mistyped path as a real page.
  useSeo({
    title: 'Page not found | Brolly Exam Prep',
    description: 'The page you were looking for could not be found on Brolly Exam Prep.',
    robots: 'noindex, follow',
  })
  return (
    <>
      <PageHero
        eyebrow="404"
        title="We could not find that page"
        lead="The link may be out of date, or the page may have moved. Everything below is a good place to pick the thread back up."
        trail={[{ label: 'Not found' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/">
              Back to Home
            </Link>
            <Link className="btn btn--y" to="/mock-tests/free/">
              Take a Free Mock Test
            </Link>
          </>
        }
      />
      <section className="s">
        <div className="wrap">
          <SectionHead eyebrow="Popular destinations" title="Try one of these" />
          <div className="g4">
            {[
              ['Government Exams', '/government-exams/', 'target'],
              ['Entrance Exams', '/entrance-exams/', 'layers'],
              ['Study Material', '/study-material/', 'book'],
              ['Mock Tests', '/mock-tests/', 'check'],
              ['Previous Papers', '/previous-year-papers/', 'doc'],
              ['Current Affairs', '/current-affairs/', 'globe'],
              ['Exam Updates', '/exam-updates/', 'bell'],
              ['Search', '/search/', 'search'],
            ].map(([label, to, icon]) => (
              <Link className="tile" key={to} to={to}>
                <span className="tile__i">
                  <Icon name={icon} />
                </span>
                <span>
                  <b>{label}</b>
                  <span>Browse this section</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
