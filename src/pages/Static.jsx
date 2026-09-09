import { Link, useLocation } from 'react-router-dom'
import Logo from '../components/Logo'
import { ContentSection } from '../components/Blocks'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { FACULTY, FEATURES, SUCCESS_STORIES } from '../data/site'
import LEGAL from '../data/legal'
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
              {/*
                This form is not yet connected to a backend. Until it is, the
                note below tells the visitor how to actually reach us rather
                than letting them submit into nothing.
              */}
              <p className="auth__note">
                If you do not receive an acknowledgement, email{' '}
                <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a> directly
                — it reaches the same inbox.
              </p>
            </form>
          </div>
        </div>
      </section>

      <ContentSection
        id="what-to-contact-about"
        eyebrow="What we can help with"
        heading="What to write to us about"
        background
        blocks={[
          {
            type: 'defs',
            items: [
              [
                'A mistake on a page',
                'The most useful message you can send us. Quote the page URL and describe what is wrong — a solution you believe is incorrect, a pattern detail that has changed, a broken link. Content corrections go straight to the subject faculty responsible for that material.',
              ],
              [
                'Something not working',
                'A test that will not load, a score that looks wrong, a page that fails on your device. Tell us what you were doing, what you expected and what happened, and include your device and browser if you can.',
              ],
              [
                'Your account',
                'Sign-in problems, changing your details, or deleting your account and the information associated with it. Write from the email address on the account so we can identify it without asking for anything sensitive.',
              ],
              [
                'Courses and test series',
                'Questions about what a paid product includes, access problems after a purchase, or a refund request. Include the order reference from your payment confirmation.',
              ],
              [
                'Writing for us',
                'If you teach a subject or set questions, see the careers page — a sample of your work tells us more than a description of your experience.',
              ],
            ],
          },
        ]}
      />

      <ContentSection
        id="what-we-cannot-do"
        eyebrow="Being straight about it"
        heading="What we cannot help with"
        blocks={[
          {
            type: 'list',
            items: [
              { text: 'Confirming an examination date or a result', note: 'we compile these from official notifications and there is a lag. The conducting body’s own announcement is authoritative and we are not.' },
              { text: 'Application problems on a conducting body’s portal', note: 'we have no access to those systems. The helpdesk listed in the notification is the route.' },
              { text: 'Predicting a cutoff', note: 'a cutoff is the score of the last candidate selected and depends on that cycle’s vacancies, applicants and paper difficulty. Nobody knows it in advance, including us.' },
              { text: 'Telling you whether you will clear', note: 'a mock score indicates where you stand under practice conditions. It is not a forecast, and we would rather say so than guess.' },
            ],
          },
          {
            type: 'note',
            title: 'Where we are',
            text: 'Brolly Exam Prep is part of Brolly Academy, Hyderabad, Telangana, India. Email reaches us reliably; we read everything, and we reply to anything that needs a reply.',
          },
        ]}
      />
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
            records rather than real selections. We publish testimonials only where the candidate
            has been verified and has consented, and we will not fill the space with invented ones
            in the meantime. What follows instead is what we can say honestly.
          </p>
        </div>
      </section>

      <ContentSection
        id="what-selected-candidates-do"
        eyebrow="What actually works"
        heading="What candidates who clear tend to have in common"
        intro="Drawn from how competitive examinations are structured rather than from anecdote — these are the patterns that hold across exam families."
        blocks={[
          {
            type: 'list',
            items: [
              { text: 'They measured before they planned', note: 'a full mock taken before studying anything, so the plan was built on where they actually stood rather than on where they assumed they did.' },
              { text: 'They started the slow things first', note: 'vocabulary, general awareness, calculation speed and — for uniformed recruitment — physical fitness. All accumulate over months and none can be recovered late.' },
              { text: 'They prepared for the stage that decides the result', note: 'not the stage that comes first. In banking and UPSC, prelims marks are discarded; in SSC CGL, only Tier 2 builds the merit list.' },
              { text: 'They studied the weakest section', note: 'rather than the one they enjoyed, which is the natural instinct and close to worthless where sectional cutoffs apply.' },
              { text: 'They analysed mocks longer than they took them', note: 'and classified errors by cause — did not know, misread, wrong method, calculation slip, ran out of time — because those five have five different fixes.' },
              { text: 'They read the notification', note: 'end to end, every cycle. Patterns, age bands and negative marking change, and preparing to an old structure is a self-inflicted loss.' },
            ],
          },
          {
            type: 'note',
            title: 'And the thing that is not a pattern',
            text: 'There is no correlation worth reporting between hours logged and outcomes. Candidates who study twelve hours a day badly are outperformed routinely by candidates who study five hours a day with honest measurement and correction. What varies is not effort but whether the effort was pointed at the right thing.',
          },
        ]}
      />

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

      <ContentSection
        id="why-subjects"
        eyebrow="How this page works"
        heading="Why we list subjects rather than names"
        background
        blocks={[
          {
            type: 'p',
            text: `Faculty here are listed by subject rather than by invented personalities. Individual educator records — name, photograph, qualification and years of experience — are published as they are verified, so the ${FACULTY.length} subject groups above will expand into named profiles rather than being replaced by them.`,
          },
          {
            type: 'p',
            text: 'The alternative, which is common enough on preparation sites, is to publish stock photographs beside impressive-sounding credentials that nobody has checked. We would rather show less and have it be true.',
          },
        ]}
      />

      <ContentSection
        id="how-material-is-made"
        eyebrow="Editorial process"
        heading="How the material on this site is produced"
        intro="Every study topic, question and solution goes through the same sequence before it is published."
        blocks={[
          {
            type: 'steps',
            items: [
              { text: 'The syllabus is checked against the current notification.', note: 'Not against last year’s guide. Patterns, marks and negative marking change, and material written to an old structure teaches the wrong exam.' },
              { text: 'Past papers are tagged to find the weighting.', note: 'A syllabus lists topics with equal visual weight; past papers show which ones actually carry marks. That distribution decides how much space a topic gets.' },
              { text: 'Subject faculty write the topic.', note: 'Concepts, worked examples and practice questions with explanations, written to be worked through rather than skimmed.' },
              { text: 'A second reader checks the solutions.', note: 'Every worked example and every practice explanation, because a wrong solution teaches a wrong method to everyone who reads it.' },
              { text: 'Claims about examinations are qualified where they are volatile.', note: 'Vacancy counts, cutoffs and dates change. Where a figure would age badly, the material says to check the notification instead of stating one.' },
              { text: 'Corrections are made when reported.', note: 'If you find an error, write to us with the page URL. It is the fastest route to a fix and we would rather know.' },
            ],
          },
        ]}
      />

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
      <ContentSection
        id="what-we-hire-for"
        eyebrow="The work"
        heading="What we hire for"
        intro="Almost everything on this site is written rather than assembled, which shapes who we need."
        blocks={[
          {
            type: 'defs',
            items: [
              [
                'Subject faculty',
                'Teachers who know an examination well enough to say what it actually asks rather than what its syllabus lists — and who can write that down clearly. Quantitative aptitude, reasoning, English, general studies and the technical subjects. The work is writing study material, setting questions and reviewing solutions.',
              ],
              [
                'Question setters',
                'People who can write a question with exactly one defensible answer and three distractors that are wrong for interesting reasons. This is a specific craft, and it is rarer than subject knowledge. A sample set tells us more than a résumé does.',
              ],
              [
                'Content editors',
                'Editors who check that a claim about an examination is accurate against the current notification, that a solution is correct, and that the writing says something. Much of the job is catching detail that has quietly gone out of date.',
              ],
              [
                'Engineers',
                'Front-end and back-end engineers who care about page speed, accessibility and correctness, on a site whose users are often on modest connections and shared devices.',
              ],
            ],
          },
        ]}
      />

      <ContentSection
        id="what-we-look-for"
        eyebrow="What matters"
        heading="What we look for"
        background
        blocks={[
          {
            type: 'list',
            items: [
              { text: 'Accuracy about examinations', note: 'a confident claim about a pattern that changed two cycles ago is worse than no claim. We would rather someone say they need to check.' },
              { text: 'Writing that respects the reader', note: 'aspirants are preparing under real pressure. Padding wastes their time, and so does hedging that avoids saying anything.' },
              { text: 'Willingness to be corrected', note: 'everything published here gets reviewed, and material gets sent back. That is the process working, not a judgement.' },
              { text: 'Something you have made', note: 'a set of notes, a question bank, a solution you wrote, a project you shipped. It is worth more than a description of experience.' },
            ],
          },
          {
            type: 'p',
            text: 'We are based in Hyderabad and work with contributors elsewhere. Roles are a mix of full-time and contributor arrangements depending on the work.',
          },
        ]}
      />

      <ContentSection
        id="apply"
        eyebrow="Applying"
        heading="How to get in touch"
        blocks={[
          {
            type: 'steps',
            items: [
              { text: 'Write to support@brollyexamprep.com.', note: 'With "Careers" and the role in the subject line.' },
              { text: 'Tell us what you do, in a paragraph.', note: 'The subject you teach, the examinations you know, or the engineering work you have done.' },
              { text: 'Attach a sample.', note: 'For faculty and question setters, this is the part that matters most — a topic you have written up, or a set of questions with solutions. For engineers, a repository or a project.' },
              { text: 'We will reply either way.', note: 'Including when the answer is no, which is more useful to you than silence.' },
            ],
          },
          {
            type: 'note',
            title: 'Current openings',
            text: 'Specific vacancies are listed on this page as they open. When none are listed, we still read speculative applications from subject faculty and question setters, because good ones are hard to find on demand.',
          },
        ]}
      />

      <section className="s s--bg">
        <div className="wrap wrap--narrow prose">
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

export function Legal() {
  const { pathname } = useLocation()
  const copy = LEGAL[pathname] || { title: 'Legal', intro: '', sections: [] }

  useSeo({
    title: copy.seoTitle || `${copy.title} | Brolly Exam Prep`,
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

      {copy.sections.map((section, i) => (
        <ContentSection
          key={section.id}
          id={section.id}
          heading={section.heading}
          blocks={section.blocks}
          background={i % 2 === 1}
        />
      ))}

      <section className={`s${copy.sections.length % 2 === 1 ? ' s--bg' : ''}`}>
        <div className="wrap wrap--narrow prose">
          <p>
            Questions about this policy go to{' '}
            <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a>. Brolly Exam
            Prep is part of{' '}
            <a href="https://brollyacademy.com/" rel="noopener" target="_blank">
              Brolly Academy
            </a>
            , Hyderabad, Telangana, India.
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
