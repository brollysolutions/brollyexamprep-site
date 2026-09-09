import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon, { Arrow } from '../../components/Icon'
import { SectionBar, SectionHead, Tile } from '../../components/ui'
import {
  ARTICLES,
  COURSES,
  CURRENT_AFFAIRS_TILES,
  EXAM_CATEGORIES,
  FACULTY,
  FAQS,
  FEATURES,
  FREE_MOCKS,
  POPULAR_EXAMS,
  PREP_SUBLINKS,
  PREP_TABS,
  PREVIOUS_PAPERS,
  QUICK_ACCESS,
  STEPS,
  STUDY_TILES,
  SUCCESS_STORIES,
  UPDATE_TILES,
} from '../../data/site'

/* ── 2 · QUICK ACCESS ── */
export function QuickAccess() {
  return (
    <section className="s s--bg" aria-label="Quick access">
      <div className="wrap">
        <div className="quick6">
          {QUICK_ACCESS.map((item) => (
            <Link className="qc" key={item.to} to={item.to}>
              <span className="qc__i">
                <Icon name={item.icon} />
              </span>
              <b>{item.title}</b>
              <span>{item.sub}</span>
              <span className="qc__a">
                <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 3 · EXPLORE COMPETITIVE EXAMS ── */
export function ExamCategories() {
  return (
    <section className="s" id="exams">
      <div className="wrap">
        <SectionBar
          eyebrow="Exam categories"
          title="Explore Competitive Exams"
          lead="Find the right competitive exam preparation resources for the exam you're targeting."
          linkTo="/government-exams/"
          linkLabel="View All Competitive Exams"
        />
        <div className="cats">
          {EXAM_CATEGORIES.map((cat) => (
            <Link className="cat" key={cat.title} to={cat.to}>
              <span className="cat__i">
                <Icon name={cat.icon} size={20} />
              </span>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <span className="cat__go">
                Explore <Arrow />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 4 · POPULAR & UPCOMING EXAMS ── */
export function PopularExams() {
  return (
    <section className="s s--bg" id="popular">
      <div className="wrap">
        <SectionBar
          eyebrow="Live tracker"
          title="Popular & Upcoming Exams"
          lead="Notification status and exam dates for the exams aspirants are preparing for right now."
          linkTo="/exam-calendar/"
          linkLabel="Exam Calendar"
        />
        <div className="exams">
          {POPULAR_EXAMS.map((exam) => (
            <article className="ex" key={exam.id} data-exam-id={exam.id} data-category={exam.category}>
              <div className="ex__top">
                <span className="ex__badge" aria-hidden="true">
                  {exam.badge}
                </span>
                <div>
                  <span className="ex__cat">{exam.cat}</span>
                  <span className="ex__nm">{exam.name}</span>
                </div>
              </div>
              <div className="ex__meta">
                <span className={`pill pill--${exam.pillTone}`}>{exam.pill}</span>
              </div>
              <p>{exam.desc}</p>
              <Link className="btn btn--o btn--sm" to={exam.to}>
                View Exam
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 5 · FREE MOCK TESTS ── */
export function FreeMockTests({ background = false }) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="mock-tests">
      <div className="wrap">
        <SectionBar
          eyebrow="Free practice"
          title="Test Your Preparation with Free Mock Tests"
          lead="Practice with exam-level questions, understand your performance and identify the areas you need to improve. Free mock tests are the fastest way to start your competitive exam preparation."
          linkTo="/mock-tests/"
          linkLabel="Explore All Mock Tests"
        />
        <div className="mocks">
          {FREE_MOCKS.map((mock) => (
            <Link className="mk" key={mock.to} to={mock.to}>
              <span className="pill pill--free mk__free">Free</span>
              <span className="mk__cat">{mock.cat}</span>
              <h3>{mock.title}</h3>
              <p className="mk__spec">{mock.spec}</p>
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

/* ── 6 · WHY CHOOSE BROLLY ── */
export function WhyBrolly() {
  return (
    <section className="s s--bg" id="why">
      <div className="wrap">
        <SectionHead
          eyebrow="What you get"
          title="Why Choose Brolly Exam Prep?"
          lead="Six things that make competitive exam preparation on Brolly different from a generic study library."
        />
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
  )
}

/* ── 7 · HOW BROLLY WORKS ── */
export function HowItWorks() {
  return (
    <section className="s" id="how">
      <div className="wrap">
        <SectionHead
          eyebrow="How it works"
          title="A Smarter Way to Prepare"
          lead="Four steps that turn scattered study into measurable progress."
        />
        <div className="steps">
          {STEPS.map((step) => (
            <div className="st" key={step.n}>
              <span className="st__n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Decision support and answer-first guidance for new aspirants. */
export function PreparationGuide() {
  return (
    <section className="s" id="start-preparation">
      <div className="wrap">
        <SectionHead
          eyebrow="Start with a plan"
          title="How to Start Competitive Exam Preparation Online"
          lead="Begin with the official notification and syllabus for one target exam. Take a diagnostic mock, identify the sections that need the most work, study those concepts, practise topic-wise questions and previous-year papers, then repeat timed mocks. Use the official recruiting body for dates, eligibility and rule changes."
        />
        <div className="decision-grid">
          <article className="decision-card">
            <h3>If you are choosing an exam</h3>
            <p>Compare eligibility, subjects, selection stages and likely preparation overlap before committing your study time.</p>
            <Link className="tlink" to="/government-exams/">Compare government exam categories <Arrow /></Link>
          </article>
          <article className="decision-card">
            <h3>If you are starting from scratch</h3>
            <p>Read the syllabus and exam pattern first. Build concepts in one weak section before adding full-length timed practice.</p>
            <Link className="tlink" to="/study-material/">Browse subject-wise study material <Arrow /></Link>
          </article>
          <article className="decision-card">
            <h3>If your score has stopped improving</h3>
            <p>Separate knowledge gaps from avoidable errors and slow questions. Your next practice set should target the specific cause.</p>
            <Link className="tlink" to="/practice/">Choose targeted practice <Arrow /></Link>
          </article>
        </div>
        <aside className="source-note" aria-labelledby="official-source-title">
          <h3 id="official-source-title">Verify exam facts at the official source</h3>
          <p>Brolly supports preparation; the recruiting body remains the authority for notifications, eligibility, dates, vacancies and results.</p>
          <div className="source-links">
            <a href="https://ssc.gov.in/" target="_blank" rel="noreferrer">Staff Selection Commission (SSC)</a>
            <a href="https://upsc.gov.in/" target="_blank" rel="noreferrer">Union Public Service Commission (UPSC)</a>
            <a href="https://www.ibps.in/" target="_blank" rel="noreferrer">Institute of Banking Personnel Selection (IBPS)</a>
            <a href="https://indianrailways.gov.in/" target="_blank" rel="noreferrer">Indian Railways</a>
          </div>
        </aside>
      </div>
    </section>
  )
}

/* ── 8 · EXAM-WISE PREPARATION (tabbed, arrow-key navigable) ── */
export function PrepTabs() {
  const [active, setActive] = useState(PREP_TABS[0].id)

  function onKeyDown(e, index) {
    let next = null
    if (e.key === 'ArrowRight') next = PREP_TABS[(index + 1) % PREP_TABS.length]
    if (e.key === 'ArrowLeft') next = PREP_TABS[(index - 1 + PREP_TABS.length) % PREP_TABS.length]
    if (e.key === 'Home') next = PREP_TABS[0]
    if (e.key === 'End') next = PREP_TABS[PREP_TABS.length - 1]
    if (!next) return
    e.preventDefault()
    setActive(next.id)
    document.getElementById(`t-${next.id}`)?.focus()
  }

  return (
    <section className="s s--bg" id="preparation">
      <div className="wrap">
        <SectionHead
          eyebrow="Exam-wise resources"
          title="Complete Preparation for Every Major Competitive Exam"
          lead="Syllabus, exam pattern, previous papers, mock tests, preparation guides and study material — everything government exam preparation requires, for each exam in every category."
        />

        <div className="tabs" role="tablist" aria-label="Exam categories">
          {PREP_TABS.map((tab, i) => (
            <button
              className="tab"
              role="tab"
              key={tab.id}
              id={`t-${tab.id}`}
              aria-controls={`p-${tab.id}`}
              aria-selected={active === tab.id}
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {PREP_TABS.map((tab) => (
          <div
            className="panel"
            role="tabpanel"
            key={tab.id}
            id={`p-${tab.id}`}
            aria-labelledby={`t-${tab.id}`}
            hidden={active !== tab.id}
          >
            <div className="pgrid">
              {tab.exams.map((exam) => (
                <div className="pe" key={exam.base}>
                  <div className="pe__h">
                    <Link to={exam.base}>{exam.name}</Link>
                  </div>
                  <div className="pe__links">
                    {PREP_SUBLINKS.map(([label, slug]) => (
                      <Link key={slug} to={`${exam.base}${slug}/`}>
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── 9 · PREVIOUS YEAR PAPERS ── */
export function PreviousPapers({ background = false }) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="previous-papers">
      <div className="wrap">
        <SectionBar
          eyebrow="Real exam questions"
          title="Practice with Previous-Year Question Papers"
          lead="Understand the real exam pattern, frequently asked topics and question trends with previous-year papers and detailed solutions."
          linkTo="/previous-year-papers/"
          linkLabel="Explore Previous-Year Papers"
        />
        <div className="g4">
          {PREVIOUS_PAPERS.map((paper) => (
            <Tile key={paper.to} to={paper.to} icon="doc" title={paper.title} sub={paper.sub} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 10 · STUDY MATERIAL ── */
export function StudyMaterialSection({ background = true }) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="study-material">
      <div className="wrap">
        <SectionBar
          eyebrow="Free resources"
          title="Free Study Material for Competitive Exams"
          lead="Subject-wise notes, formula sheets and topic PDFs, organised so you can study by subject or by exam."
          linkTo="/study-material/"
          linkLabel="Explore Study Material"
        />
        <div className="g3">
          {STUDY_TILES.map((tile) => (
            <Tile key={tile.to} to={tile.to} icon="book" title={tile.title} sub={tile.sub} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 11 · CURRENT AFFAIRS ── */
export function CurrentAffairsSection({ background = false }) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="current-affairs">
      <div className="wrap">
        <SectionBar
          eyebrow="Current-affairs method"
          title="Turn Daily News into Exam-Ready Notes"
          lead="Use the topic guides and revision method here alongside a verified daily news source."
          linkTo="/current-affairs/"
          linkLabel="Study Current Affairs"
        />
        <div className="g4">
          {CURRENT_AFFAIRS_TILES.map((tile) => (
            <Tile key={tile.to} to={tile.to} icon={tile.icon} title={tile.title} sub={tile.sub} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 12 · PERFORMANCE ANALYTICS ── */
export function Analytics() {
  return (
    <section className="s s--bg" id="analytics">
      <div className="wrap dash">
        <div>
          <p className="eyebrow">Performance analysis</p>
          <h2 className="h">Know Where You Stand. Know What to Improve.</h2>
          <p className="lead">
            A total score tells you little on its own. Each available test shows the score, attempted
            and skipped questions, section performance, and answer explanations so you can classify
            what went wrong before the next attempt.
          </p>
          <div className="bxh__cta">
            <Link className="btn btn--k" to="/mock-tests/free/">
              Take Free Mock Test
            </Link>
            <Link className="btn btn--o" to="/mock-tests/">
              See Available Tests
            </Link>
          </div>
          <p className="acct">
            Current attempts run in your browser. Save or screenshot the result before leaving the page.
          </p>
        </div>

        <div
          className="db"
          role="img"
          aria-label="Example performance dashboard: overall score 72 percent, accuracy 81 percent, speed 68 percent. Strong areas reasoning and English. Needs improvement in quantitative aptitude and general awareness."
        >
          <div className="db__t">
            <div>
              <p className="db__lab">Mock test report</p>
              <p className="db__nm">SSC CGL Tier I · Full Mock 03</p>
            </div>
            <span className="db__live">Sample</span>
          </div>
          <div className="db__stats">
            <div className="db__stat">
              <b>72%</b>
              <span>Overall Score</span>
            </div>
            <div className="db__stat">
              <b>81%</b>
              <span>Accuracy</span>
            </div>
            <div className="db__stat">
              <b>68%</b>
              <span>Speed</span>
            </div>
          </div>
          <div className="db__body">
            <div className="db__grp">
              <p className="db__gt">Strong areas</p>
              {[
                ['Reasoning', 88],
                ['English', 79],
              ].map(([name, value]) => (
                <div className="db__row" key={name}>
                  <span className="n">{name}</span>
                  <span className="v">{value}%</span>
                  <span className="bar">
                    <i style={{ width: `${value}%` }} />
                  </span>
                </div>
              ))}
            </div>
            <div className="db__grp">
              <p className="db__gt">Needs improvement</p>
              {[
                ['Quantitative Aptitude', 39],
                ['General Awareness', 54],
              ].map(([name, value]) => (
                <div className="db__row" key={name}>
                  <span className="n">{name}</span>
                  <span className="v">{value}%</span>
                  <span className="bar">
                    <i className="w" style={{ width: `${value}%` }} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="db__rec">
            <p>Recommended action</p>
            <Link className="btn btn--y btn--sm" to="/study-material/quantitative-aptitude/">
              Study Quantitative Aptitude
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 13 · COURSES & TEST SERIES ── */
export function CoursesSection() {
  return (
    <section className="s" id="courses">
      <div className="wrap">
        <SectionHead
          eyebrow="Preparation formats"
          title="Choose Resources That Match the Actual Gap"
        />
        <div className="two">
          <div className="col">
            <span className="col__i">
              <Icon name="play" size={20} />
            </span>
            <h3>Concept and exam guides</h3>
            <p>Start with the free exam guides and subject lessons that are available on this site.</p>
            <ul>
              {COURSES.courses.map((c) => (
                <li key={c.to}>
                  <Link to={c.to}>{c.label}</Link>
                </li>
              ))}
            </ul>
            <Link className="btn btn--o" to="/courses/">
              Compare Preparation Formats
            </Link>
          </div>
          <div className="col">
            <span className="col__i">
              <Icon name="layers" />
            </span>
            <h3>Timed practice</h3>
            <p>
              Use the available diagnostics for measurement, and check the displayed question count
              and time before starting.
            </p>
            <ul>
              {COURSES.testSeries.map((c) => (
                <li key={c.to}>
                  <Link to={c.to}>{c.label}</Link>
                </li>
              ))}
            </ul>
            <Link className="btn btn--o" to="/mock-tests/">
              Browse Available Tests
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── 14 · SUCCESS STORIES ──
   CMS-ready. Content is template text, NOT a real selection — replace with
   verified, consented student records before publishing, or remove it. */
export function SuccessStoriesSection({ background = true }) {
  if (!SUCCESS_STORIES.length) return null

  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="success-stories">
      <div className="wrap">
        <SectionBar
          eyebrow="From our aspirants"
          title="Success Stories from Aspirants"
          lead="Aspirants who prepared with Brolly, in their own words."
          linkTo="/success-stories/"
          linkLabel="View All Stories"
        />
        <div className="g3" data-cms="success-stories">
          {SUCCESS_STORIES.map((story, i) => (
            <div className="sto" key={i} data-story-id={story.id}>
              <p className="sto__q">"{story.quote}"</p>
              <div className="sto__w">
                <span className="av" aria-hidden="true">
                  —
                </span>
                <span>
                  <b>{story.name}</b>
                  <span>{story.meta}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 15 · EXPERT FACULTY ── */
export function FacultySection({ background = false }) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="faculty">
      <div className="wrap">
        <SectionBar
          eyebrow="Editorial coverage"
          title="How Subject Content Is Organised"
          lead="Questions, solutions and study guides are prepared and reviewed by the Brolly Exam Prep editorial team for syllabus fit, accuracy and clear explanations."
          linkTo="/faculty/"
          linkLabel="Review Our Editorial Process"
        />
        <div className="g4" data-cms="faculty">
          {FACULTY.map((member) => (
            <div className="fac" key={member.av}>
              <span className="av" aria-hidden="true">
                {member.av}
              </span>
              <b>{member.subject}</b>
              <span>{member.role}</span>
              <p>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 16 · LATEST EXAM UPDATES ── */
export function ExamUpdatesSection({ background = true }) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="exam-updates">
      <div className="wrap">
        <SectionBar
          eyebrow="Notifications & results"
          title="Latest Government & Competitive Exam Updates"
          lead="Notifications, dates, vacancies, admit cards, answer keys, cutoffs and results in one place."
          linkTo="/exam-updates/"
          linkLabel="View All Exam Updates"
        />
        <div className="g4">
          {UPDATE_TILES.map((tile) => (
            <Tile key={tile.to} to={tile.to} icon={tile.icon} title={tile.title} sub={tile.sub} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 17 · LATEST ARTICLES ── */
export function ArticlesSection({ background = false }) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="articles">
      <div className="wrap">
        <SectionBar
          eyebrow="From the blog"
          title="Latest from Brolly Exam Prep"
          linkTo="/blog/"
          linkLabel="View All Articles"
        />
        <div className="arts" data-cms="articles">
          {ARTICLES.map((article) => (
            <Link className="art" key={article.to} to={article.to}>
              <span className="art__img">
                <Icon name="image" size={46} strokeWidth={1.4} />
              </span>
              <span className="art__b">
                <span className="art__c">{article.cat}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="art__f">
                  <span>{article.date}</span>
                  <b>
                    Read More <Arrow />
                  </b>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── 18 · FAQ ── */
export function FaqSection({
  items = FAQS,
  title = 'Competitive Exam Preparation — FAQs',
  background = true,
}) {
  return (
    <section className={`s${background ? ' s--bg' : ''}`} id="faq">
      <div className="wrap">
        <SectionHead eyebrow="Questions" title={title} />
        <div className="faq">
          {items.map((item) => (
            <article className="faq__answer" key={item.q}>
              <h3>{item.q}</h3>
              <p className="a">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DemoSection() {
  return (
    <section className="s demo" id="book-demo">
      <div className="wrap demo__grid">
        <div>
          <p className="eyebrow">Talk to Brolly</p>
          <h2 className="h">Book a Preparation Demo</h2>
          <p className="lead">Tell us which exam you are targeting. We will use the conversation to show the relevant syllabus, practice and mock-test path. No selection or score outcome is promised.</p>
          <ul className="demo__list">
            <li>Choose the right exam resource path</li>
            <li>See how mock analysis can guide practice</li>
            <li>Ask questions about available courses and test series</li>
          </ul>
        </div>
        <form className="demo__form" action="mailto:support@brollyexamprep.com" method="post" encType="text/plain">
          <label className="field"><span>Name</span><input name="name" autoComplete="name" required /></label>
          <label className="field"><span>Email</span><input name="email" type="email" autoComplete="email" required /></label>
          <label className="field"><span>Target exam</span><input name="target-exam" placeholder="For example, SSC CGL or SBI PO" required /></label>
          <label className="field"><span>What do you need help with?</span><textarea name="message" rows="4" /></label>
          <button className="btn btn--y" type="submit">Request a Demo</button>
          <p className="form-note">Submitting opens your email app with these details addressed to Brolly support.</p>
        </form>
      </div>
    </section>
  )
}

/* ── 19 · FINAL CTA ── */
export function FinalCta({
  title = 'Start Your Competitive Exam Preparation Today',
  lead = 'Choose your exam, learn smarter, practice consistently and track your preparation with Brolly Exam Prep.',
}) {
  return (
    <section className="fin">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{lead}</p>
        <div className="fin__b">
          <Link className="btn btn--y" to="/mock-tests/free/">
            Take Free Mock Test
          </Link>
          <Link className="btn btn--ow" to="/government-exams/">
            Explore Exams
          </Link>
        </div>
        <p className="fin__acct">
          Already practising? <Link to="/register/">Create Free Account</Link> to track your
          preparation.
        </p>
      </div>
    </section>
  )
}
