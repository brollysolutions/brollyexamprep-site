import { Link } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { PageHero, SectionHead, useJsonLd, useMeta, useTitle } from '../components/ui'
import { FaqSection, FinalCta } from './home/sections'

/**
 * Telangana Police SI & Constable — /government-exams/state/telangana/telangana-police/
 *
 * A written page rather than the generated ExamDetail template, so it is
 * registered as its own route ahead of /government-exams/state/:state/:exam/.
 * Everything time-sensitive (dates, vacancies, physical standards) is phrased
 * as "check the notification" instead of being stated, because the page is not
 * synchronised with the recruitment board.
 */

const ORIGIN = 'https://brollyexamprep.com'
const CANONICAL = `${ORIGIN}/government-exams/state/telangana/telangana-police/`

const SEO_TITLE = 'Telangana Police SI & Constable Exam 2026 | Syllabus & Mock Tests'
const META_DESCRIPTION =
  'Prepare for Telangana Police SI & Constable Exam 2026 with syllabus, exam pattern, selection process, previous papers, study resources and free mock tests.'

/** The page's own contents, each item jumping to the section that covers it. */
const COVERAGE = [
  { icon: 'target', title: 'Telangana Police SI preparation', sub: 'Sub-Inspector syllabus, subjects and practice', href: '#syllabus' },
  { icon: 'user', title: 'Telangana Police Constable preparation', sub: 'Constable written-test preparation path', href: '#syllabus' },
  { icon: 'layers', title: '2026 selection process', sub: 'PWT, PMT & PET, and FWE in order', href: '#selection-process' },
  { icon: 'refresh', title: 'PMT & PET preparation', sub: 'Running, strength and event practice', href: '#physical' },
  { icon: 'doc', title: 'SI previous year papers', sub: '2016, 2018-19 and 2022-23 papers by stage and subject', href: '#previous-papers' },
  { icon: 'check', title: 'Free mock tests', sub: 'Timed SI, Constable and Telangana GK tests', href: '#mock-tests' },
]

const STAGES = [
  {
    n: '01',
    title: 'Preliminary Written Test (PWT)',
    desc: 'First stage of the Police Recruitment 2026 selection procedure.',
  },
  {
    n: '02',
    title: 'Physical Measurement Test (PMT) & Physical Efficiency Test (PET)',
    desc: 'Second stage covering the applicable physical measurement and efficiency requirements.',
  },
  {
    n: '03',
    title: 'Final Written Examination (FWE)',
    desc: 'Third stage of the Police Recruitment 2026 selection procedure for candidates progressing through the preceding stages.',
  },
]

const KEY_INFO = [
  ['Recruiting Authority', 'Check the latest Telangana Police Recruitment Board notification.'],
  ['Posts', 'Sub-Inspector and Constable posts covered by the applicable notification.'],
  ['Selection Stages', 'PWT → PMT & PET → FWE'],
  ['Eligibility', 'Verify educational qualification, age, category rules and post-specific requirements.'],
  ['Physical Standards', 'Verify the latest PMT/PET standards and qualifying requirements in the applicable notification.'],
  ['Application / Exam Dates', 'Use the latest official notification rather than an outdated third-party date.'],
]

const PHYSICAL = [
  { title: 'Running', desc: 'Develop endurance progressively and practise timed running with adequate recovery.' },
  { title: 'Strength', desc: 'Use progressive full-body and core exercises to build general physical capacity.' },
  { title: 'Event Practice', desc: 'Practise the notified physical events rather than relying on generic police-test assumptions.' },
  { title: 'Measurements', desc: 'Check category- and post-specific physical standards in the latest notification.' },
]

const MOCKS = [
  {
    cat: 'SI',
    title: 'Telangana SI Mock Test',
    desc: 'Practise SI-focused questions under timed conditions.',
    to: '/mock-tests/telangana-police-si/',
  },
  {
    cat: 'Constable',
    title: 'Telangana Constable Mock Test',
    desc: 'Attempt Constable-focused practice and identify weak areas.',
    to: '/mock-tests/telangana-police-constable/',
  },
  {
    cat: 'Telangana GK',
    title: 'Telangana GK Practice',
    desc: 'Revise Telangana history, geography, culture and other relevant topics.',
    to: '/mock-tests/free/',
  },
]

/**
 * Telangana Police SI previous year papers, grouped by recruitment
 * notification and rendered in the #previous-papers section.
 *
 * A paper with `pdf: null` renders a "PDF link being verified" placeholder.
 * Give it a `pdf` path (files live in public/previous-papers/) and an optional
 * `size`, and the card turns into a real Download PDF button — nothing else
 * needs to change. Do not point one of these at third-party or memory-based
 * material and label it an official paper.
 */
const SI_PAPERS = [
  {
    id: 'si-2022',
    cycle: '2022-23 SI Recruitment Notification',
    papers: [
      {
        label: 'Preliminary Written Test',
        title: 'SI Preliminary Question Paper — 7 August 2022',
        desc: 'Telangana Police SI Preliminary Written Test previous paper for the 2022-23 recruitment cycle.',
        pdf: '/previous-papers/telangana-police-si/ts-si-prelims-2022-question-paper.pdf',
        size: '7.2 MB',
      },
      {
        label: 'Final Written — Paper 1',
        title: 'English',
        desc: 'Telangana Police SI Final Written Examination Paper 1: English.',
        pdf: null,
      },
      {
        label: 'Final Written — Paper 2',
        title: 'Telugu',
        desc: 'Telangana Police SI Final Written Examination Paper 2: Telugu.',
        pdf: null,
      },
      {
        label: 'Final Written — Paper 3',
        title: 'Arithmetic & Reasoning',
        desc: 'Telangana Police SI Final Written Examination Paper 3 covering Arithmetic and Reasoning.',
        pdf: '/previous-papers/telangana-police-si/ts-si-mains-2023-arithmetic-reasoning.pdf',
        size: '42 MB',
      },
      {
        label: 'Final Written — Paper 4',
        title: 'General Studies',
        desc: 'Telangana Police SI Final Written Examination Paper 4: General Studies.',
        pdf: null,
      },
    ],
  },
  {
    id: 'si-2018',
    cycle: '2018-19 SI Recruitment Notification',
    papers: [
      {
        label: 'Preliminary Written Test',
        title: 'SI Preliminary Question Paper — 26 August 2018',
        desc: 'Telangana Police SI Preliminary Written Test previous paper for the 2018-19 recruitment cycle.',
        pdf: '/previous-papers/telangana-police-si/ts-si-prelims-2018-question-paper.pdf',
        size: '56 MB',
      },
      {
        label: 'Final Written — Paper 1',
        title: 'English',
        desc: 'Telangana Police SI Final Written Examination Paper 1: English.',
        pdf: null,
      },
      {
        label: 'Final Written — Paper 2',
        title: 'Telugu',
        desc: 'Telangana Police SI Final Written Examination Paper 2: Telugu.',
        pdf: null,
      },
      {
        label: 'Final Written — Paper 3',
        title: 'Arithmetic & Reasoning',
        desc: 'Telangana Police SI Final Written Examination Paper 3 covering Arithmetic and Reasoning.',
        pdf: '/previous-papers/telangana-police-si/ts-si-mains-2018-arithmetic-reasoning.pdf',
        size: '28 MB',
      },
      {
        label: 'Final Written — Paper 4',
        title: 'General Studies',
        desc: 'Telangana Police SI Final Written Examination Paper 4: General Studies.',
        pdf: '/previous-papers/telangana-police-si/ts-si-mains-2018-general-studies.pdf',
        size: '34 MB',
      },
    ],
  },
  {
    id: 'si-2016',
    cycle: '2016 SI Recruitment Notification',
    papers: [
      {
        label: 'Preliminary Written Test',
        title: 'SI Preliminary Question Paper',
        desc: 'Telangana Police SI Preliminary Written Test paper from the 2016 recruitment cycle.',
        pdf: '/previous-papers/telangana-police-si/ts-si-prelims-2016-question-paper.pdf',
        size: '565 KB',
      },
      {
        label: 'Final Written',
        title: 'Arithmetic',
        desc: 'Telangana Police SI Final Written Examination paper covering Arithmetic.',
        pdf: null,
      },
      {
        label: 'Final Written',
        title: 'General Studies',
        desc: 'Telangana Police SI Final Written Examination paper covering General Studies.',
        pdf: '/previous-papers/telangana-police-si/ts-si-mains-2016-general-studies.pdf',
        size: '466 KB',
      },
      {
        label: 'Specialist SI',
        title: 'Communication SI Paper',
        desc: 'Communication SI paper where applicable to the relevant 2016 recruitment stream.',
        pdf: null,
      },
      {
        label: 'Specialist SI',
        title: 'PTO SI Paper',
        desc: 'PTO-specific SI paper where applicable to the relevant 2016 recruitment stream.',
        pdf: null,
      },
    ],
  },
]

/** Turning a previous paper into a measurable preparation exercise. */
const PAPER_METHOD = [
  { n: '01', title: 'Attempt', desc: 'Take the paper without checking answers first and follow a fixed time limit.' },
  { n: '02', title: 'Check', desc: 'Calculate your score and mark incorrect or uncertain questions.' },
  { n: '03', title: 'Analyse', desc: 'Group mistakes by subject and topic to identify weak areas.' },
  { n: '04', title: 'Revise', desc: 'Revise weak topics and retake timed practice tests to improve accuracy.' },
]

/** What previous-paper practice is actually for. */
const PAPER_LEARN = [
  'Question formats and recurring concepts',
  'Difficulty across different topics',
  'Time-management requirements',
  'Your strengths and weak areas',
  'Topics requiring additional revision',
]

const PAPER_CHECKLIST = [
  'Complete the applicable syllabus',
  'Practise previous question papers',
  'Review mistakes after every paper',
  'Revise important concepts regularly',
  'Take timed mock tests',
]

const FAQS = [
  {
    q: 'What is the Telangana Police SI and Constable selection process in 2026?',
    a: 'The Police Recruitment 2026 selection procedure has three stages: Preliminary Written Test (PWT), Physical Measurement Test (PMT) and Physical Efficiency Test (PET), and Final Written Examination (FWE). Candidates should follow the applicable official notification for post-specific requirements.',
  },
  {
    q: 'What is PWT in Telangana Police Recruitment 2026?',
    a: 'PWT stands for Preliminary Written Test. It is the first stage of the Police Recruitment 2026 selection procedure.',
  },
  {
    q: 'What are PMT and PET in Telangana Police recruitment?',
    a: 'PMT means Physical Measurement Test and PET means Physical Efficiency Test. These form the second stage of the Police Recruitment 2026 selection procedure, subject to the applicable post and notification requirements.',
  },
  {
    q: 'What is FWE in Telangana Police Recruitment 2026?',
    a: 'FWE stands for Final Written Examination. It is the third stage of the Police Recruitment 2026 selection procedure.',
  },
  {
    q: 'Where can I prepare for Telangana Police SI and Constable exams?',
    a: 'Brolly Exam Prep provides preparation resources such as syllabus guidance, previous-paper practice, Telangana-focused topics and free mock tests. Candidates should verify recruitment rules and official updates with the Telangana Police Recruitment Board.',
  },
  {
    q: 'How should I prepare for Telangana Police SI and Constable exams?',
    a: 'Start with the official syllabus and exam stages, build subject-wise preparation, practise previous questions, revise Telangana-specific topics and current affairs, take timed mock tests and prepare systematically for PMT and PET.',
  },
  {
    q: 'Where can I practise Telangana Police SI previous year papers?',
    a: 'Use the previous-year-paper resources on this page to practise Telangana Police SI questions and analyse your preparation.',
  },
  {
    q: 'How many Telangana Police SI previous papers should I practise?',
    a: 'Practise as many relevant previous papers as are available, then analyse mistakes and revise weak topics.',
  },
  {
    q: 'Are previous year papers useful for Telangana Police SI preparation?',
    a: 'Yes. Previous year papers help you understand question trends, difficulty, topic distribution and time-management needs.',
  },
  {
    q: 'Can I take a Telangana Police SI mock test after practising previous papers?',
    a: 'Yes. A timed mock test can help measure speed, accuracy and readiness after previous-paper practice.',
  },
]

export default function TelanganaPolice() {
  useTitle(SEO_TITLE, { exact: true })
  useMeta({ description: META_DESCRIPTION, canonical: CANONICAL })
  useJsonLd(structuredData())

  return (
    <>
      <PageHero
        eyebrow="Telangana Police Recruitment 2026"
        title="Telangana Police SI & Constable Exam 2026"
        lead="Prepare for Telangana Police Sub-Inspector (SI) and Constable examinations with syllabus guidance, selection process, physical-test preparation, previous papers, Telangana-focused study resources and free mock tests."
        trail={[
          { label: 'Government Exams', to: '/government-exams/' },
          { label: 'State Government', to: '/government-exams/state/' },
          { label: 'Telangana', to: '/government-exams/state/telangana/' },
          { label: 'Telangana Police SI & Constable' },
        ]}
        actions={
          <>
            <Link className="btn btn--y" to="/mock-tests/telangana-police-si/">
              Start Free Mock SI
            </Link>
            <Link className="btn btn--y" to="/mock-tests/telangana-police-constable/">
              Start Free Mock Constable
            </Link>
          </>
        }
      />

      {/* ── What the page covers ── */}
      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="On this page"
            title="What you'll find"
            lead="Six blocks, each written for one part of the Telangana Police preparation path."
          />
          <div className="g3">
            {COVERAGE.map((item) => (
              <a className="tile" key={item.title} href={item.href}>
                <span className="tile__i">
                  <Icon name={item.icon} />
                </span>
                <span>
                  <b>{item.title}</b>
                  <span>{item.sub}</span>
                </span>
                <span className="tile__a">
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Answer-first summary ── */}
      <section className="s s--bg" id="quick-answer">
        <div className="wrap">
          <SectionHead
            eyebrow="Quick answer"
            title="Telangana Police SI & Constable Exam 2026: Quick Answer"
            lead="Direct answers are placed near the top for users, search engines and answer systems."
          />
          <div className="answer-box">
            <p>
              <b>What is the selection process?</b> The Police Recruitment 2026 selection procedure
              has three stages: <b>1) Preliminary Written Test (PWT), 2) Physical Measurement Test
              (PMT) &amp; Physical Efficiency Test (PET), and 3) Final Written Examination (FWE).</b>{' '}
              Post-specific requirements should always be checked against the applicable official
              recruitment notification.
            </p>
          </div>
        </div>
      </section>

      {/* ── SI and Constable preparation paths ── */}
      <section className="s" id="syllabus">
        <div className="wrap">
          <SectionHead
            eyebrow="Preparation"
            title="Telangana Police SI & Constable Preparation"
            lead="Use separate preparation paths while building a common foundation for Telangana-specific and general competitive-exam topics."
          />
          <div className="two">
            <article className="col">
              <span className="pill pill--y">Sub-Inspector</span>
              <h3>Telangana Police SI</h3>
              <p>
                Prepare for the SI recruitment process with structured study resources and
                post-specific preparation.
              </p>
              <ul>
                <li>SI syllabus and subjects</li>
                <li>Exam pattern and selection process</li>
                <li>Telangana GK and current affairs</li>
                <li>Previous question papers</li>
                <li>Free SI mock tests</li>
              </ul>
              <Link className="btn btn--y" to="/mock-tests/telangana-police-si/">
                Practise SI Mock Tests <Arrow />
              </Link>
            </article>

            <article className="col">
              <span className="pill pill--y">Constable</span>
              <h3>Telangana Police Constable</h3>
              <p>
                Build Constable preparation with syllabus-based practice, previous questions,
                revision and physical-test guidance.
              </p>
              <ul>
                <li>Constable syllabus</li>
                <li>Written-test preparation</li>
                <li>Telangana GK and current affairs</li>
                <li>Previous question papers</li>
                <li>Free Constable mock tests</li>
              </ul>
              <Link className="btn btn--y" to="/mock-tests/telangana-police-constable/">
                Practise Constable Mock Tests <Arrow />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ── The three notified stages ── */}
      <section className="s s--bg" id="selection-process">
        <div className="wrap">
          <SectionHead
            eyebrow="Selection process"
            title="Telangana Police Recruitment 2026 Selection Process"
            lead="Follow the notified sequence rather than generic police-recruitment wording."
          />
          <div className="steps">
            {STAGES.map((stage) => (
              <div className="st" key={stage.n}>
                <span className="st__n">{stage.n}</span>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
            ))}
          </div>
          <div className="answer-box answer-box--after">
            <p>
              <b>Important:</b> Exact eligibility, physical standards, qualifying marks, syllabus
              details and post-specific conditions must be checked in the applicable official
              Telangana Police Recruitment notification.
            </p>
          </div>
        </div>
      </section>

      {/* ── What to verify before applying ── */}
      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Key information"
            title="Telangana Police Recruitment 2026: Key Information"
            lead="Keep time-sensitive recruitment information synchronised with official notifications."
          />
          <div className="ctable-wrap">
            <table className="ctable">
              <caption>
                Recruitment dates, vacancies, eligibility, physical standards and examination rules
                are set by the recruiting board and can change between notifications.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Information</th>
                  <th scope="col">What candidates should check</th>
                </tr>
              </thead>
              <tbody>
                {KEY_INFO.map(([label, check]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td data-label="What candidates should check">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="source-note" aria-labelledby="tg-police-source-title">
            <h3 id="tg-police-source-title">Official-source verification</h3>
            <p>
              Recruitment dates, vacancies, eligibility, physical standards and examination rules
              should be verified from the official Telangana Police Recruitment Board source before
              applying.
            </p>
            <div className="source-links">
              <a href="https://tgprb.in/" target="_blank" rel="noreferrer">
                Telangana Police Recruitment Board (TGPRB)
              </a>
              <a href="https://www.tslprb.in/" target="_blank" rel="noreferrer">
                TS Level Police Recruitment Board (TSLPRB)
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Physical tests ── */}
      <section className="s s--bg" id="physical">
        <div className="wrap">
          <SectionHead
            eyebrow="Physical tests"
            title="Telangana Police PMT & PET Preparation"
            lead="Build physical preparation around the standards and events specified in the applicable notification."
          />
          <div className="g4">
            {PHYSICAL.map((item) => (
              <div className="ft" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Previous papers: every identifiable SI paper, by notification ── */}
      <section className="s" id="previous-papers">
        <div className="wrap">
          <SectionHead
            eyebrow="Previous papers"
            title="Telangana Police SI Previous Year Question Papers"
            lead="Find Telangana Police SI papers from multiple recruitment notifications in one place, organised by year, stage and subject."
          />

          <div className="answer-box">
            <p>
              <b>Telangana Police SI previous year papers</b> help you understand question types,
              practise time management, check accuracy and identify topics that need revision.
              Attempt each paper under timed conditions and analyse your mistakes afterwards.
            </p>
          </div>

          {SI_PAPERS.map((group) => (
            <div className="s__block" key={group.id}>
              <h3 className="s__sub" id={group.id}>
                {group.cycle}
              </h3>
              <div className="g3">
                {group.papers.map((paper) => (
                  <article className="mk" key={`${group.id}-${paper.label}-${paper.title}`}>
                    <span className="mk__cat">{paper.label}</span>
                    <h3>{paper.title}</h3>
                    <p className="mk__spec">{paper.desc}</p>
                    {paper.pdf ? (
                      <a
                        className="btn btn--y btn--sm"
                        href={paper.pdf}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download PDF{paper.size ? ` (${paper.size})` : ''} <Arrow />
                      </a>
                    ) : (
                      <span className="mk__go" aria-disabled="true">
                        PDF link being verified
                      </span>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}

          <aside className="source-note" aria-labelledby="tg-si-papers-source-title">
            <h3 id="tg-si-papers-source-title">Where these papers come from</h3>
            <p>
              Question papers, answer keys and recruitment rules are published by the Telangana
              police recruitment board. Each download link is added only after it has been verified
              against that official source, and third-party or memory-based material is never
              presented here as an official paper.
            </p>
            <div className="source-links">
              <a href="https://tgprb.in/" target="_blank" rel="noreferrer">
                Telangana Police Recruitment Board (TGPRB)
              </a>
              <a href="https://www.tslprb.in/" target="_blank" rel="noreferrer">
                TS Level Police Recruitment Board (TSLPRB)
              </a>
            </div>
          </aside>

          {/* How to work through a paper once you have it */}
          <div className="s__block">
            <h3 className="s__sub" id="paper-method">
              How to Use Telangana Police SI Previous Papers
            </h3>
            <div className="steps">
              {PAPER_METHOD.map((step) => (
                <div className="st" key={step.n}>
                  <span className="st__n">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="s__block">
            <h3 className="s__sub">Why Practise Previous Year Papers?</h3>
            <div className="two">
              <article className="col">
                <h3>What You Can Learn</h3>
                <ul>
                  {PAPER_LEARN.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className="col">
                <h3>Preparation Checklist</h3>
                <ul>
                  {PAPER_CHECKLIST.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>

          <div className="s__block">
            <h3 className="s__sub">Constable Previous Papers</h3>
            <div className="two">
              <article className="col">
                <h3>Telangana Police Constable Papers</h3>
                <p>
                  Practise Constable-level previous questions and use mistakes to identify topics
                  requiring revision.
                </p>
                <Link className="btn btn--y" to="/previous-year-papers/police/">
                  View Constable Papers <Arrow />
                </Link>
              </article>
              <article className="col">
                <h3>Test yourself under time</h3>
                <p>
                  Attempt a timed mock test after practising previous-year questions, then use the
                  result to decide which topics need another revision pass.
                </p>
                <Link className="btn btn--y" to="/mock-tests/telangana-police-si/">
                  Start Free SI Mock Test <Arrow />
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── Free mock tests ── */}
      <section className="s s--bg" id="mock-tests">
        <div className="wrap">
          <SectionHead
            eyebrow="No signup needed"
            title="Free Telangana Police SI & Constable Mock Tests"
            lead="Take timed practice tests, review mistakes and improve speed and accuracy."
          />
          <div className="g3">
            {MOCKS.map((mock) => (
              <Link className="mk" key={mock.title} to={mock.to}>
                <span className="pill pill--free mk__free">Free</span>
                <span className="mk__cat">{mock.cat}</span>
                <h3>{mock.title}</h3>
                <p className="mk__spec">{mock.desc}</p>
                <span className="mk__go">
                  Start Test <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        items={FAQS}
        title="Frequently Asked Questions About Telangana Police Exams"
        background={false}
      />

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead eyebrow="Related" title="More Telangana Preparation" />
          <div className="g4">
            <Link className="tile" to="/government-exams/state/telangana/">
              <span className="tile__i">
                <Icon name="globe" />
              </span>
              <span>
                <b>Telangana Government Exams</b>
                <span>TGPSC groups, police, teaching and technical posts</span>
              </span>
              <span className="tile__a">
                <Arrow />
              </span>
            </Link>
            <Link className="tile" to="/previous-year-papers/">
              <span className="tile__i">
                <Icon name="doc" />
              </span>
              <span>
                <b>Previous-year papers</b>
                <span>Past papers with solutions</span>
              </span>
              <span className="tile__a">
                <Arrow />
              </span>
            </Link>
            <Link className="tile" to="/current-affairs/">
              <span className="tile__i">
                <Icon name="globe" />
              </span>
              <span>
                <b>Current affairs</b>
                <span>Daily, weekly and monthly</span>
              </span>
              <span className="tile__a">
                <Arrow />
              </span>
            </Link>
            <Link className="tile" to="/exam-updates/">
              <span className="tile__i">
                <Icon name="bell" />
              </span>
              <span>
                <b>Exam updates</b>
                <span>Notifications, admit cards and results</span>
              </span>
              <span className="tile__a">
                <Arrow />
              </span>
            </Link>
          </div>
          <p className="acct">
            Last reviewed: 2 September 2026. Recruitment information is time-sensitive; verify the
            latest official notification before applying.
          </p>
        </div>
      </section>

      <FinalCta
        title="Start Your Telangana Police Preparation"
        lead="Choose your target post, understand the notified selection stages, practise previous questions and use free mock tests to measure your preparation."
      />
    </>
  )
}

/** WebPage, BreadcrumbList and FAQPage for this URL. */
function structuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: 'Telangana Police SI & Constable Exam 2026',
      description:
        'Preparation guide for Telangana Police SI and Constable examinations covering syllabus, eligibility, selection process, physical tests, previous papers and mock tests.',
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: [
        { '@type': 'Thing', name: 'Telangana Police SI' },
        { '@type': 'Thing', name: 'Telangana Police Constable' },
        { '@type': 'Thing', name: 'Telangana Police Recruitment' },
        { '@type': 'Place', name: 'Telangana, India' },
      ],
      publisher: { '@id': `${ORIGIN}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Government Exams', item: `${ORIGIN}/government-exams/` },
        { '@type': 'ListItem', position: 2, name: 'State Government Exams', item: `${ORIGIN}/government-exams/state/` },
        { '@type': 'ListItem', position: 3, name: 'Telangana', item: `${ORIGIN}/government-exams/state/telangana/` },
        { '@type': 'ListItem', position: 4, name: 'Telangana Police', item: CANONICAL },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ]
}
