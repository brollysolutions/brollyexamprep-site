import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { PageHero, SectionHead, useJsonLd, useMeta, useTitle } from '../components/ui'
import { FaqSection, FinalCta } from './home/sections'
import {
  MOCKTEST_TESTS_URL,
  MOCKTEST_TS_CONSTABLE_URL,
  MOCKTEST_TS_SI_URL,
} from '../data/site'

/**
 * Telangana Police SI & Constable — /government-exams/state/telangana/telangana-police/
 *
 * A written page rather than the generated ExamDetail template, so it is
 * registered as its own route ahead of /government-exams/state/:state/:exam/.
 *
 * Every recruitment fact below (dates, vacancies, fees, age limits, physical
 * standards, marking) is taken from a named TSLPRB/TGPRB notice linked in the
 * same block and listed again in #sources, and was checked on the date in
 * SOURCES_CHECKED. When the board issues an amendment, update the fact AND that
 * date together — a stale "checked on" line is worse than no date at all.
 * Anything no linked notice covers stays phrased as "check the notification".
 */

const ORIGIN = 'https://brollyexamprep.com'
const CANONICAL = `${ORIGIN}/government-exams/state/telangana/telangana-police/`

const SEO_TITLE = 'Telangana Police Recruitment 2026 | SI & Constable'
const META_DESCRIPTION =
  'Telangana Police Recruitment 2026: check SI and Constable eligibility, syllabus, exam pattern, physical tests, previous papers and free mock tests.'

/** The day every recruitment fact on this page was last read off an official notice. */
const SOURCES_CHECKED = '9 September 2026'

/* ── Official documents ──
   Named notices rather than a bare board link, so a reader can check the exact
   paragraph a fact came from. Kept in one place because most are cited twice. */
const SRC = {
  board: 'https://www.tgprb.in/',
  deadline: 'https://www.tgprb.in/SI_PC_2026/Press%20Note%20dated%2008-09-2026.pdf',
  vacancies:
    'https://www.tgprb.in/SI_PC_2026/Notification%202026%20Press%20Note%20dated%2029-07-2026.pdf',
  datesFees:
    'https://www.tgprb.in/SI_PC_2026/Application%20Dates%202026%20Press%20Note%20dated%2029-07-2026.pdf',
  ageRelaxation:
    'https://www.tgprb.in/SI_PC_2026/Press%20Note%20Supplementary%20Notification%202026%20%20dated%2015-08-2026.pdf',
  siNotification: 'https://doc.tgprb.in/SI+(Civil+et+al)+2026+Notification+dated+29-07-2026.pdf',
  pcNotification: 'https://doc.tgprb.in/PC+(Civil+et+al)+2026+Notification+dated+29-07-2026.pdf',
  applicationFaqs: 'https://doc.tgprb.in/TSLPRB2026+FAQs+210826.pdf',
}

/** An external official document — always a new tab. */
function Src({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

/** The page's own contents, each item jumping to the section that covers it. */
const COVERAGE = [
  { icon: 'bell', title: 'Notification & dates', sub: '2026 timeline and the revised application deadline', href: '#updates' },
  { icon: 'user', title: 'Eligibility & age limit', sub: 'SI and Constable qualification, age and fees', href: '#eligibility' },
  { icon: 'layers', title: 'Selection process', sub: 'PWT, PMT & PET, and FWE in order', href: '#selection-process' },
  { icon: 'chart', title: 'Exam pattern', sub: 'Prelims and mains marks, duration and marking', href: '#pattern' },
  { icon: 'book', title: 'Syllabus', sub: 'Subject checklist for SI and Constable', href: '#syllabus' },
  { icon: 'refresh', title: 'PMT & PET standards', sub: 'Run, height, long jump and shot put', href: '#physical' },
  { icon: 'doc', title: 'SI previous year papers', sub: 'Seven PDFs from 2016, 2018-19 and 2022-23', href: '#previous-papers' },
  { icon: 'check', title: 'Free mock tests', sub: 'Timed SI and Constable practice tests', href: '#mock-tests' },
  { icon: 'clock', title: 'Study plan', sub: 'A seven-day preparation routine', href: '#study-plan' },
]

/* ── Vacancies ──
   29 July 2026 recruitment announcement. The four notification groups add up to
   VACANCY_TOTAL, so change both together. */
const VACANCY_TOTAL = '7,437'
const VACANCIES = [
  ['Constable & equivalent', '7,112'],
  ['SI & equivalent', '275'],
  ['ASI, Fingerprint Bureau', '23'],
  ['Driver / Mechanic', '27'],
]

/** The three things worth doing first, in the order they make sense. */
const START_HERE = [
  { n: '01', title: 'Understand your exam', desc: 'Pattern, subjects and marking for your post.', href: '#pattern' },
  { n: '02', title: 'Practise a past paper', desc: 'Browse the SI papers by year and stage.', href: '#previous-papers' },
  { n: '03', title: 'Plan your next 7 days', desc: 'Study, practise and revise on a routine.', href: '#study-plan' },
]

/* ── 2026 application timeline ── */
const TIMELINE = [
  ['Notifications released', '29 July 2026', null],
  ['Applications opened', '19 August 2026', null],
  [
    'Revised application deadline',
    '16 September 2026 · 5 PM IST',
    'Extension announced on 8 September',
  ],
  [
    'Preliminary exam / hall ticket',
    'Check the board for the latest schedule',
    'No exam date confirmed in the notices reviewed here',
  ],
]

/* ── Eligibility ──
   SI notification §15, Constable notification §15 and the 15 August age
   amendment. Upper ages are the notification's base limit plus the five-year
   increase plus the additional two years, stated as at 1 July 2026. */
const ELIGIBILITY = [
  ['Education', 'Recognised degree or equivalent', 'Intermediate or equivalent'],
  ['Qualification date', 'By 29 July 2026', 'By 29 July 2026'],
  ['Minimum age', '21 years on 1 July 2026', '18 years on 1 July 2026'],
  ['General upper-age rule*', 'Must not have attained 32 years', 'Must not have attained 29 years'],
  [
    'Women candidates',
    'Eligible for specified post codes, including Civil SI',
    'Eligible for specified post codes, including Civil Constable',
  ],
]

const FEES = [
  ['SI / equivalent', '₹750', '₹1,500'],
  ['Constable / equivalent', '₹600', '₹1,200'],
]

const APPLICATION_DOCS = [
  'Qualification certificates and proof of date of birth.',
  'Applicable community, EWS, non-creamy-layer and local-candidature documents.',
  'Your own mobile number and email; use the same registration for eligible posts.',
  'Photograph and signature in the board’s required format.',
  'A desktop or laptop for submission, as instructed in the official FAQs.',
]

const STAGES = [
  {
    n: '01',
    title: 'Preliminary Written Test (PWT)',
    desc: 'Qualify in the objective paper for your notification.',
  },
  {
    n: '02',
    title: 'Physical Measurement Test (PMT) & Physical Efficiency Test (PET)',
    desc: 'Complete the notified run, measurements and remaining physical events.',
  },
  {
    n: '03',
    title: 'Final Written Examination (FWE)',
    desc: 'Take the post-specific papers and meet the qualifying requirements.',
  },
]

/* ── Exam pattern ──
   SI notification §16 and Annexures II-III; Constable notification §16 and
   Annexures II-III. Both prelims papers share PRELIMS_FACTS. */
const PATTERN_TABS = [
  { id: 'si', label: 'Sub-Inspector (SI)' },
  { id: 'pc', label: 'Constable (PC)' },
]

const PRELIMS_FACTS = [
  ['200', 'Questions'],
  ['200', 'Total marks'],
  ['3 hours', 'Duration'],
]

const SI_PRELIMS_SUBJECTS = [
  ['Arithmetic + reasoning / mental ability', '100'],
  ['General studies', '100'],
]

const SI_MAINS_PAPERS = [
  ['I · English', 'Objective + descriptive', '100'],
  ['II · Telugu / Urdu', 'Objective + descriptive', '100'],
  ['III · Arithmetic & reasoning', '200 objective questions', '200 or 100*'],
  ['IV · General studies', '200 objective questions', '200 or 100*'],
]

const PC_MAINS_ROWS = [
  ['21, 26, 27, 28', '200', '200'],
  ['22, 23, 25', '200', '100'],
]

/* ── Syllabus ──
   Subject checklist drawn from the SI and Constable Annexures II-III. The
   "Practice approach" line in each block is Brolly preparation guidance, not
   notified syllabus text. */
const SYLLABUS = [
  {
    title: 'Arithmetic & quantitative aptitude / reasoning',
    scope: 'Common foundation · SI has 100 combined preliminary questions',
    body: 'Work through percentages, averages, ratios, profit and loss, interest, time and work, speed and distance, and mensuration. Add verbal and non-verbal reasoning, analogies, spatial questions and problem solving.',
    approach:
      'Learn one method, attempt a short set without notes, then write down the reason for each mistake.',
  },
  {
    title: 'General science & current affairs',
    scope: 'Everyday science, recent developments and current events',
    body: 'Cover everyday science, relevant science and technology developments, the environment, and important national and international events. Keep short revision notes that connect an event with its background.',
    to: '/current-affairs/',
    toLabel: 'Open Brolly current affairs',
  },
  {
    title: 'Indian history, geography, polity & economy',
    scope: 'General studies for SI and Constable',
    body: 'Revise the national movement, major historical developments, Indian geography, the political system and economic concepts. For SI, include the syllabus areas on rural development, planning and economic reforms.',
    approach:
      'Use a timeline for history, maps for geography and short comparison notes for polity and economy.',
  },
  {
    title: 'Telangana GK, movement & state formation',
    scope: 'Give Telangana preparation its own study time',
    body: 'The SI preliminary syllabus names the Telangana movement and state formation, from the idea of Telangana through mobilisation to statehood. The Constable syllabus includes Telangana-related content.',
    approach:
      'Build a movement timeline and revise state history, geography, culture and Telangana current affairs alongside the applicable official syllabus.',
  },
  {
    title: 'English, Telugu / Urdu & final-paper preparation',
    scope: 'Different requirements for SI and Constable',
    body: 'Constable prelims include English, with English questions set in English. SI finals have separate English and Telugu/Urdu papers with objective and descriptive parts, so schedule writing practice as well as MCQs. For Constable finals, add the notified personality topics: ethics, gender sensitivity, social awareness and emotional intelligence.',
  },
]

/* ── PMT & PET ──
   General standards from Constable notification §16(B) and SI notification
   §16(B). The exceptions below the table decide individual eligibility more
   often than the table does, so they are not optional reading. */
const PHYSICAL_STANDARDS = [
  ['Run', '1,600 m in 7 min 15 sec', '800 m in 5 min 20 sec'],
  ['Minimum height', '167.6 cm', '152.5 cm'],
  ['Long jump', '4 m', '2.5 m'],
  ['Shot put', '6 m with 7.26 kg', '4 m with 4 kg'],
]

/**
 * Telangana Police SI previous year papers, filterable by recruitment cycle and
 * exam stage in the #previous-papers section.
 *
 * Every entry is a file that actually exists in
 * public/previous-papers/telangana-police-si/ — no placeholder rows, because a
 * "coming soon" card is a dead end for the reader. To add a paper, drop the PDF
 * in that folder and add a row; the filters pick it up from `cycle` and
 * `stage`. Never list third-party or memory-based material as an official paper.
 */
const SI_PAPERS = [
  {
    cycle: '2022–23',
    stage: 'prelims',
    title: 'SI preliminary paper',
    meta: '7 August 2022 · 7.2 MB',
    pdf: '/previous-papers/telangana-police-si/ts-si-prelims-2022-question-paper.pdf',
  },
  {
    cycle: '2022–23',
    stage: 'mains',
    title: 'Arithmetic & reasoning',
    meta: 'Final written · Paper III · 42 MB',
    pdf: '/previous-papers/telangana-police-si/ts-si-mains-2023-arithmetic-reasoning.pdf',
  },
  {
    cycle: '2018–19',
    stage: 'prelims',
    title: 'SI preliminary paper',
    meta: '26 August 2018 · 56 MB',
    pdf: '/previous-papers/telangana-police-si/ts-si-prelims-2018-question-paper.pdf',
  },
  {
    cycle: '2018–19',
    stage: 'mains',
    title: 'Arithmetic & reasoning',
    meta: 'Final written · Paper III · 28 MB',
    pdf: '/previous-papers/telangana-police-si/ts-si-mains-2018-arithmetic-reasoning.pdf',
  },
  {
    cycle: '2018–19',
    stage: 'mains',
    title: 'General studies',
    meta: 'Final written · Paper IV · 34 MB',
    pdf: '/previous-papers/telangana-police-si/ts-si-mains-2018-general-studies.pdf',
  },
  {
    cycle: '2016',
    stage: 'prelims',
    title: 'SI preliminary paper',
    meta: 'Preliminary written · 565 KB',
    pdf: '/previous-papers/telangana-police-si/ts-si-prelims-2016-question-paper.pdf',
  },
  {
    cycle: '2016',
    stage: 'mains',
    title: 'General studies',
    meta: 'Final written · 466 KB',
    pdf: '/previous-papers/telangana-police-si/ts-si-mains-2016-general-studies.pdf',
  },
]

const PAPER_CYCLES = [
  { id: 'all', label: 'All years' },
  { id: '2022–23', label: '2022–23' },
  { id: '2018–19', label: '2018–19' },
  { id: '2016', label: '2016' },
]

const PAPER_STAGES = [
  { id: 'all', label: 'All stages' },
  { id: 'prelims', label: 'Preliminary' },
  { id: 'mains', label: 'Final written' },
]

/* ── Mock tests ──
   The specs describe the Brolly practice tests, which deliberately differ from
   the official preliminary rules (180 minutes, 20% negative marking). The note
   under the cards says so; keep it in step if you change a spec. */
const MOCKS = [
  {
    cat: 'Free · SI',
    title: 'Telangana Police SI Mock Test 01',
    desc: 'Arithmetic, reasoning and general studies practice for Sub-Inspector aspirants.',
    specs: ['200 questions', '190 minutes', 'No negative marking'],
    href: MOCKTEST_TS_SI_URL,
    cta: 'Start Free SI Mock Test',
  },
  {
    cat: 'Free · Constable',
    title: 'Telangana Police Constable Mock Test 01',
    desc: 'Start Constable question practice and use your mistakes to plan revision.',
    specs: ['200 questions', '180 minutes', 'No negative marking'],
    href: MOCKTEST_TS_CONSTABLE_URL,
    cta: 'Start Free Constable Mock Test',
  },
]

const STUDY_LINKS = [
  {
    icon: 'book',
    title: 'Study material',
    sub: 'Read concepts before attempting a fresh topic.',
    to: '/study-material/',
  },
  {
    icon: 'globe',
    title: 'Current affairs',
    sub: 'Make short notes and revise them at the end of the week.',
    to: '/current-affairs/',
  },
  {
    icon: 'layers',
    title: 'Telangana exam resources',
    sub: 'Explore related state-exam preparation resources.',
    to: '/government-exams/state/telangana/',
  },
]

/** A weekly routine, not a promise to finish the syllabus in seven days. */
const STUDY_PLAN = [
  [
    'Know your starting point',
    'Read your exam pattern and attempt a short set from an available paper. List three weak topics.',
  ],
  [
    'Arithmetic fundamentals',
    'Revise percentages, ratios and averages. Practise, then review errors before adding more questions.',
  ],
  [
    'Reasoning practice',
    'Work on one verbal and one non-verbal topic. Record accuracy and time separately.',
  ],
  [
    'Telangana focus',
    'Build a movement timeline. Revise the state topics relevant to your notification.',
  ],
  [
    'General studies + current affairs',
    'Choose a weak GS topic and revise your current-affairs notes.',
  ],
  [
    'Post-specific preparation',
    'SI: add English and Telugu/Urdu writing. Constable: revise English and final-paper personality topics.',
  ],
  [
    'Attempt, review and reset',
    'Take a mock, analyse errors and set next week’s priorities. Keep separate time for physical preparation.',
  ],
]

/* ── FAQs ──
   `a` is the plain-text answer used for both the rendered page and the FAQPage
   schema, so it has to stand on its own. `link` adds an official document after
   it on the page only. */
const FAQS = [
  {
    q: 'What is the Telangana Police Recruitment 2026 application last date?',
    a: 'The revised deadline is 16 September 2026 at 5 PM IST. The board announced the extension on 8 September. Check the board for any later changes before submitting.',
    link: { href: SRC.deadline, label: 'Read the extension notice' },
  },
  {
    q: 'How many Telangana Police vacancies are included in the 2026 notifications?',
    a: 'The 2026 recruitment covers 7,437 vacancies in total: 7,112 Constable and equivalent, 275 SI and equivalent, 23 ASI (Fingerprint Bureau) and 27 Driver/Mechanic. Each notification has its own post codes and conditions.',
    link: { href: SRC.vacancies, label: 'Read the vacancy announcement' },
  },
  {
    q: 'Can I apply for Telangana Police SI and Constable together?',
    a: 'You can apply for more than one eligible post using the same registered mobile number. Meet the qualification and other conditions for each post and pay the applicable fees. The common physical-test readings are used as provided in the notifications.',
    link: { href: SRC.applicationFaqs, label: 'See the official application FAQs' },
  },
  {
    q: 'Is there negative marking in the Telangana Police preliminary exam?',
    a: 'Yes. The SI and Constable preliminary notifications deduct 20% of the marks for a question when an incorrect or otherwise invalid response is marked. An unanswered question scores zero, so on a one-mark question the deduction is 0.20 marks. Check the separate rules for the final written papers.',
  },
  {
    q: 'Are the Telangana Police SI syllabus and Constable syllabus the same?',
    a: 'They overlap in arithmetic, reasoning and general studies. SI prelims split the paper into 100 arithmetic/reasoning questions and 100 general studies questions. Constable prelims also explicitly include English. SI finals have four papers; Constable finals have one.',
  },
  {
    q: 'What are the Telangana Police SI and Constable educational qualifications?',
    a: 'The SI Civil/equivalent notification requires a recognised degree or equivalent. Constable Civil/equivalent requires Intermediate or equivalent. The qualification must have been obtained by 29 July 2026. Technical posts and some equivalent posts have additional conditions.',
  },
  {
    q: 'Has the Telangana Police age limit changed in 2026?',
    a: 'Yes. The 15 August supplementary notice adds two years to the earlier five-year increase for the specified provisions. Check your post, age on 1 July 2026, category and service conditions together, rather than applying a single age range to every category.',
    link: { href: SRC.ageRelaxation, label: 'Read the age-relaxation notice' },
  },
  {
    q: 'Can I submit the Telangana Police application from my phone?',
    a: 'The board’s application FAQs instruct candidates to use a desktop or laptop to submit the form. You can read this preparation guide on a phone.',
    link: {
      href: SRC.applicationFaqs,
      label: 'Follow the latest official application instructions',
    },
  },
  {
    q: 'Can I take a Telangana Police mock test in Telugu?',
    a: 'The live practice portal includes a Telugu/English switch, so you choose your language inside the test. The mock-test cards on this page show the current practice settings, which differ from the official preliminary marking rules.',
  },
  {
    q: 'Where can I download Telangana Police SI previous year question papers?',
    a: 'Use the year and stage filters in the previous-papers section on this page. Seven linked PDFs cover available SI papers from 2016, 2018–19 and 2022–23, with file sizes shown before opening. The files are hosted by Brolly; use the relevant official answer key to check your work.',
  },
  {
    q: 'Are Telangana Police qualifying marks and cut-off marks the same?',
    a: 'No. A minimum qualifying mark is a threshold to progress in the process. A final selection cut-off depends on the post, category, local cadre, vacancies and performance. Treat expected cut-offs as estimates, and compare only matching official categories and stages.',
  },
  {
    q: 'Where can I check Telangana Police exam dates, hall tickets and results?',
    a: 'Use the official recruitment board website. This page links to the board instead of presenting an unverified exam date or result. Keep your submitted application and registration details available.',
    link: { href: SRC.board, label: 'Open the official recruitment board' },
  },
]

/** Every official notice this page relies on, newest first. */
const SOURCE_DOCS = [
  { href: SRC.deadline, label: '8 September 2026: application deadline extension' },
  { href: SRC.ageRelaxation, label: '15 August 2026: supplementary age-relaxation notice' },
  { href: SRC.datesFees, label: '1 August 2026: application dates and fee schedule' },
  { href: SRC.vacancies, label: '29 July 2026: recruitment and vacancy announcement' },
  { href: SRC.siNotification, label: 'SI Civil / equivalent notification, 29 July 2026' },
  { href: SRC.pcNotification, label: 'Constable Civil / equivalent notification, 29 July 2026' },
  { href: SRC.applicationFaqs, label: 'Official application FAQs' },
  { href: SRC.board, label: 'Recruitment board: current notices, hall tickets and results' },
]

export default function TelanganaPolice() {
  useTitle(SEO_TITLE, { exact: true })
  useMeta({ description: META_DESCRIPTION, canonical: CANONICAL })
  useJsonLd(structuredData())

  return (
    <>
      <PageHero
        eyebrow="Your Telangana Police preparation hub"
        title="Telangana Police Recruitment 2026: SI & Constable Exam Guide"
        lead="Prepare for Telangana Police Recruitment 2026 with SI and Constable notification updates, eligibility, syllabus and exam-pattern guidance. Use previous year question papers and free online mock tests to plan your preparation, then check the official recruitment notice before applying."
        trail={[
          { label: 'Government Exams', to: '/government-exams/' },
          { label: 'State Government', to: '/government-exams/state/' },
          { label: 'Telangana', to: '/government-exams/state/telangana/' },
          { label: 'Telangana Police' },
        ]}
        actions={
          <>
            <a className="btn btn--y" href={MOCKTEST_TESTS_URL} target="_blank" rel="noreferrer">
              Choose a free mock test
            </a>
            <a className="btn btn--o" href="#eligibility">
              Check eligibility
            </a>
          </>
        }
      />

      {/* ── Deadline, vacancies and the first three moves ── */}
      <section className="s" id="at-a-glance">
        <div className="wrap">
          <div className="answer-box">
            <p>
              <b>Application deadline extended.</b> The board’s 8 September notice moves the closing
              date to <b>16 September 2026, 5 PM IST</b>. Complete and submit the form — paying the
              fee alone does not finish your application.{' '}
              <Src href={SRC.deadline}>Read the official notice</Src>.
            </p>
          </div>

          <SectionHead
            eyebrow="SI + Constable preparation"
            title="Recruitment at a Glance"
            lead={`The 2026 notifications together carry ${VACANCY_TOTAL} vacancies across four groups, each with its own post codes and conditions.`}
          />

          <div className="ctable-wrap">
            <table className="ctable">
              <caption>
                Vacancies announced on 29 July 2026. Recruitment facts on this page were checked on{' '}
                {SOURCES_CHECKED} against the notices listed under{' '}
                <a href="#sources">official notifications</a>.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Notification group</th>
                  <th scope="col">Vacancies</th>
                </tr>
              </thead>
              <tbody>
                {VACANCIES.map(([group, count]) => (
                  <tr key={group}>
                    <th scope="row">{group}</th>
                    <td data-label="Vacancies">{count}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">All four notifications</th>
                  <td data-label="Vacancies">
                    <b>{VACANCY_TOTAL}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="s__block">
            <h3 className="s__sub">Start here</h3>
            <div className="g3">
              {START_HERE.map((step) => (
                <a className="ft" key={step.n} href={step.href}>
                  <h3>
                    {step.n} · {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What the page covers ── */}
      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="On this page"
            title="What You’ll Find"
            lead="Nine blocks, each written for one part of the Telangana Police preparation path."
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

      {/* ── Notification, dates and application updates ── */}
      <section className="s" id="updates">
        <div className="wrap">
          <SectionHead
            eyebrow="Official updates"
            title="Telangana Police Notification 2026: Dates & Updates"
            lead="The Telangana State Level Police Recruitment Board (TSLPRB) publishes recruitment notifications and application updates on its official website, tgprb.in. Telangana Police SI recruitment and Telangana Police Constable recruitment have separate Civil and equivalent notifications — match the post code and any supplementary notice to your own application."
          />

          <p className="acct">
            For TS Police recruitment updates, read the relevant TSLPRB notification together with
            its amendments. The table below summarises the application timeline for the current
            cycle.
          </p>

          <div className="ctable-wrap">
            <table className="ctable">
              <caption>2026 recruitment timeline · checked {SOURCES_CHECKED}.</caption>
              <thead>
                <tr>
                  <th scope="col">Milestone</th>
                  <th scope="col">Date / status</th>
                </tr>
              </thead>
              <tbody>
                {TIMELINE.map(([milestone, date, note]) => (
                  <tr key={milestone}>
                    <th scope="row">{milestone}</th>
                    <td data-label="Date / status">
                      {date}
                      {note && (
                        <>
                          <br />
                          <small>{note}</small>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside className="source-note" aria-labelledby="tg-updates-src">
            <h3 id="tg-updates-src">Read the notifications yourself</h3>
            <p>
              The dates above come from the board’s own press notes. Open the notification for your
              post before applying — this summary is not a substitute for it.
            </p>
            <div className="source-links">
              <Src href={SRC.deadline}>Deadline extension notice</Src>
              <Src href={SRC.datesFees}>Application dates and fees</Src>
              <Src href={SRC.vacancies}>Vacancy announcement</Src>
              <Src href={SRC.siNotification}>SI notification PDF</Src>
              <Src href={SRC.pcNotification}>Constable notification PDF</Src>
              <Src href={SRC.board}>TGPRB official recruitment portal</Src>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Eligibility, age limit and fees ── */}
      <section className="s s--bg" id="eligibility">
        <div className="wrap">
          <SectionHead
            eyebrow="Before you apply"
            title="SI & Constable Eligibility and Age Limit"
            lead="Compare Telangana Police SI eligibility and Telangana Police Constable eligibility before applying. Check educational qualification, the qualifying date, age limit, local candidature and category-specific relaxation. This summary covers Civil and equivalent posts; technical posts have separate conditions."
          />

          <div className="ctable-wrap">
            <table className="ctable">
              <caption>
                Eligibility for Civil and equivalent posts, from the SI and Constable notifications
                (§15) and the 15 August age amendment.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Requirement</th>
                  <th scope="col">Sub-Inspector</th>
                  <th scope="col">Constable</th>
                </tr>
              </thead>
              <tbody>
                {ELIGIBILITY.map(([requirement, si, pc]) => (
                  <tr key={requirement}>
                    <th scope="row">{requirement}</th>
                    <td data-label="Sub-Inspector">{si}</td>
                    <td data-label="Constable">{pc}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">Other checks</th>
                  <td data-label="Sub-Inspector and Constable" colSpan={2}>
                    Post code, local candidature, category/service relaxations, physical and medical
                    standards, and any additional qualification.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="acct">
            *General upper ages are shown as at 1 July 2026, combining the notification’s base limit
            with the 5-year increase and the additional 2-year relaxation. Special-category and
            service rules need a separate check. Sources:{' '}
            <Src href={SRC.siNotification}>SI notification §15</Src>,{' '}
            <Src href={SRC.pcNotification}>Constable notification §15</Src>,{' '}
            <Src href={SRC.ageRelaxation}>15 August age amendment</Src>.
          </p>

          <div className="s__block">
            <h3 className="s__sub">Telangana Police Application Fees and Documents</h3>
            <div className="ctable-wrap">
              <table className="ctable">
                <caption>
                  Application fees from the 1 August 2026 fee schedule. Additional common-procedure
                  groups may qualify for a concession under the{' '}
                  <Src href={SRC.datesFees}>official fee notice</Src>.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Notification group</th>
                    <th scope="col">Local SC / ST</th>
                    <th scope="col">All others</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES.map(([group, concession, standard]) => (
                    <tr key={group}>
                      <th scope="row">{group}</th>
                      <td data-label="Local SC / ST">{concession}</td>
                      <td data-label="All others">{standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="two">
              <article className="col">
                <h3>Keep these ready</h3>
                <ul>
                  {APPLICATION_DOCS.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </article>
              <article className="col">
                <h3>How to apply</h3>
                <p>
                  Register on the official portal, complete the required verification, pay the fee,
                  fill the application carefully and save the final submitted copy.
                </p>
                <a
                  className="btn btn--y"
                  href={SRC.applicationFaqs}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the official application FAQs <Arrow />
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── The three notified stages ── */}
      <section className="s" id="selection-process">
        <div className="wrap">
          <SectionHead
            eyebrow="The selection journey"
            title="Telangana Police Selection Process"
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
              Document verification, medical standards and final merit requirements also apply.
              Technical notifications can have different stages, including trade or driving tests.
              Sources: <Src href={SRC.pcNotification}>Constable selection scheme</Src>,{' '}
              <Src href={SRC.siNotification}>SI selection scheme</Src>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Exam pattern, SI and Constable on separate tabs ── */}
      <ExamPattern />

      {/* ── Syllabus ── */}
      <section className="s" id="syllabus">
        <div className="wrap">
          <SectionHead
            eyebrow="Your subject checklist"
            title="Telangana Police SI & Constable Syllabus"
            lead="Use the Telangana Police syllabus to build your subject checklist. The SI and Constable syllabuses overlap in arithmetic, reasoning and general studies, with different language and final-paper requirements. Prepare Telangana GK and current affairs alongside the subjects for your target post."
          />

          <div className="g3">
            {SYLLABUS.map((subject) => (
              <article className="ft" key={subject.title}>
                <h3>{subject.title}</h3>
                <p>
                  <b>{subject.scope}</b>
                </p>
                <p>{subject.body}</p>
                {subject.approach && (
                  <p>
                    <b>Practice approach:</b> {subject.approach}
                  </p>
                )}
                {subject.to && (
                  <p>
                    <Link to={subject.to}>{subject.toLabel} →</Link>
                  </p>
                )}
              </article>
            ))}
          </div>

          <p className="acct">
            Syllabus summaries: <Src href={SRC.siNotification}>SI Annexures II–III</Src>,{' '}
            <Src href={SRC.pcNotification}>Constable Annexures II–III</Src>. The study suggestions
            are Brolly preparation guidance, not notified syllabus text.
          </p>

          <div className="s__block">
            <h3 className="s__sub">Pick your preparation path</h3>
            <div className="two">
              <article className="col">
                <span className="pill pill--y">Sub-Inspector</span>
                <h3>Telangana Police SI</h3>
                <p>
                  A degree-level post with four final papers, so language writing practice matters
                  as much as objective practice.
                </p>
                <ul>
                  <li>100 arithmetic/reasoning + 100 GS questions in prelims</li>
                  <li>English and Telugu/Urdu qualifying papers in finals</li>
                  <li>Telangana movement and state formation</li>
                  <li>Seven previous papers on this page</li>
                </ul>
                <a className="btn btn--y" href={MOCKTEST_TS_SI_URL} target="_blank" rel="noreferrer">
                  Practise SI mock tests <Arrow />
                </a>
              </article>

              <article className="col">
                <span className="pill pill--y">Constable</span>
                <h3>Telangana Police Constable</h3>
                <p>
                  An Intermediate-level post with a single final paper, including the notified
                  personality topics.
                </p>
                <ul>
                  <li>One objective prelims paper, English included</li>
                  <li>One final paper, three hours</li>
                  <li>Ethics, gender sensitivity and social awareness</li>
                  <li>Telangana GK and current affairs</li>
                </ul>
                <a
                  className="btn btn--y"
                  href={MOCKTEST_TS_CONSTABLE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  Practise Constable mock tests <Arrow />
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── PMT & PET ── */}
      <section className="s s--bg" id="physical">
        <div className="wrap">
          <SectionHead
            eyebrow="PMT & PET"
            title="Telangana Police Physical Test: PMT & PET"
            lead="The Physical Measurement Test (PMT) checks the notified measurements; the Physical Efficiency Test (PET) covers the run, long jump and shot put. Compare the general standards below, including height and running time, with the conditions for your post and category."
          />

          <div className="ctable-wrap">
            <table className="ctable">
              <caption>
                General PMT and PET standards from Constable notification §16(B) and SI notification
                §16(B). Post- and category-specific conditions override this table.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Test / measurement</th>
                  <th scope="col">Men · general</th>
                  <th scope="col">Women · eligible posts</th>
                </tr>
              </thead>
              <tbody>
                {PHYSICAL_STANDARDS.map(([test, men, women]) => (
                  <tr key={test}>
                    <th scope="row">{test}</th>
                    <td data-label="Men · general">{men}</td>
                    <td data-label="Women · eligible posts">{women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="answer-box answer-box--after">
            <p>
              <b>Check the exceptions before judging eligibility.</b> Ex-servicemen have a 9 min 30
              sec run limit and a 3.5 m long-jump standard. Specified agency-area tribal candidates
              have separate height provisions. Run scoring also varies by post code. The general
              table does not decide individual eligibility.
            </p>
          </div>

          <p className="acct">
            Read the event instructions early. Keep physical practice alongside written preparation,
            allow recovery, and get qualified guidance on event technique. Sources:{' '}
            <Src href={SRC.pcNotification}>Constable notification §16(B)</Src>,{' '}
            <Src href={SRC.siNotification}>SI notification §16(B)</Src>.
          </p>
        </div>
      </section>

      {/* ── Previous papers ── */}
      <PreviousPapers />

      {/* ── Free mock tests ── */}
      <section className="s s--bg" id="mock-tests">
        <div className="wrap">
          <SectionHead
            eyebrow="Free practice"
            title="Free Telangana Police Mock Tests"
            lead="Choose a free Telangana Police SI mock test or Constable mock test on the Brolly practice portal. These online practice tests offer Telugu and English options. Review each test’s settings and the official marking rules before you start."
          />
          <div className="two">
            {MOCKS.map((mock) => (
              <article className="mk" key={mock.title}>
                <span className="mk__cat">{mock.cat}</span>
                <h3>{mock.title}</h3>
                <p className="mk__spec">{mock.desc}</p>
                <div className="chips">
                  {mock.specs.map((spec) => (
                    <span className="chip" key={spec}>
                      {spec}
                    </span>
                  ))}
                </div>
                <p>
                  <a
                    className="btn btn--y btn--sm"
                    href={mock.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {mock.cta} <Arrow />
                  </a>
                </p>
              </article>
            ))}
          </div>

          <div className="answer-box answer-box--after">
            <p>
              <b>Practice settings differ from the real exam.</b> Both official preliminary papers
              run for 180 minutes and apply 20% negative marking. The settings above reflect the
              current Brolly tests — use them for question practice, and account for the official
              rules when judging your readiness.
            </p>
          </div>

          <p className="acct">
            <a href={MOCKTEST_TESTS_URL} target="_blank" rel="noreferrer">
              Browse all available tests →
            </a>
          </p>
        </div>
      </section>

      {/* ── Study material and the seven-day routine ── */}
      <section className="s" id="study-plan">
        <div className="wrap">
          <SectionHead
            eyebrow="Study + revision"
            title="Telangana Police Preparation: Study Material & Plan"
            lead="Build your Telangana Police exam preparation around the syllabus, previous papers, mock-test practice and revision. The seven-day plan below helps you choose what to learn and review next — adjust it to your available time and to the weak topics your attempts reveal."
          />

          <div className="g3">
            {STUDY_LINKS.map((item) => (
              <Link className="tile" key={item.title} to={item.to}>
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
              </Link>
            ))}
          </div>

          <div className="s__block">
            <h3 className="s__sub">Your first 7 days</h3>
            <ol className="checklist">
              {STUDY_PLAN.map(([title, task]) => (
                <li key={title}>
                  <b>{title}</b>
                  {task}
                </li>
              ))}
            </ol>
            <p className="acct">
              Use this as a weekly routine, not a promise to complete the full syllabus in seven
              days.
            </p>
          </div>
        </div>
      </section>

      <FaqSection
        items={FAQS.map((faq) => ({
          q: faq.q,
          a: faq.link ? (
            <>
              {faq.a} <Src href={faq.link.href}>{faq.link.label}</Src>.
            </>
          ) : (
            faq.a
          ),
        }))}
        title="Telangana Police Recruitment FAQs"
        background
      />

      {/* ── Source documents ── */}
      <section className="s" id="sources">
        <div className="wrap">
          <SectionHead
            eyebrow="Source notes"
            title="Official Notifications & Source Documents"
            lead={`Recruitment facts on this page were checked on ${SOURCES_CHECKED}. Brolly is an independent preparation platform; the recruitment board’s latest notices govern applications and selection.`}
          />
          <aside className="source-note" aria-labelledby="tg-sources-title">
            <h3 id="tg-sources-title">Official notices and reference documents</h3>
            <div className="source-links">
              {SOURCE_DOCS.map((doc) => (
                <Src href={doc.href} key={doc.label}>
                  {doc.label}
                </Src>
              ))}
            </div>
          </aside>
          <p className="acct">
            Spotted an issue? Read the <Link to="/corrections-policy/">corrections policy</Link> or{' '}
            <Link to="/contact/">contact Brolly support</Link>.
          </p>
        </div>
      </section>

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
            <Link className="tile" to="/government-exams/police/previous-year-papers/">
              <span className="tile__i">
                <Icon name="doc" />
              </span>
              <span>
                <b>Police previous papers</b>
                <span>Constable and other police papers by exam</span>
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
            Last reviewed: {SOURCES_CHECKED}. Recruitment information is time-sensitive; verify the
            latest official notification before applying.
          </p>
        </div>
      </section>

      <FinalCta
        title="Turn your preparation into practice."
        lead="Choose your exam, attempt a test and let your mistakes guide the next study session."
      />
    </>
  )
}

/**
 * Exam pattern, with SI and Constable on separate tabs. Both patterns matter,
 * but to different readers, and stacking them makes the section twice as long —
 * so only the selected post is shown. Arrow/Home/End move between tabs, as the
 * home page tablist does.
 */
function ExamPattern() {
  const [active, setActive] = useState('si')

  function onKeyDown(e, i) {
    let next
    if (e.key === 'ArrowRight') next = PATTERN_TABS[(i + 1) % PATTERN_TABS.length]
    if (e.key === 'ArrowLeft') {
      next = PATTERN_TABS[(i - 1 + PATTERN_TABS.length) % PATTERN_TABS.length]
    }
    if (e.key === 'Home') next = PATTERN_TABS[0]
    if (e.key === 'End') next = PATTERN_TABS[PATTERN_TABS.length - 1]
    if (!next) return
    e.preventDefault()
    setActive(next.id)
    document.getElementById(`pt-${next.id}`)?.focus()
  }

  return (
    <section className="s s--bg" id="pattern">
      <div className="wrap">
        <SectionHead
          eyebrow="Exam pattern"
          title="Telangana Police Exam Pattern 2026"
          lead="Compare the Telangana Police SI exam pattern with the Constable exam pattern. Review prelims and mains subjects, question counts, exam duration, negative marking and qualifying marks before choosing your practice routine."
        />

        <div className="tabs" role="tablist" aria-label="Exam pattern by post">
          {PATTERN_TABS.map((tab, i) => (
            <button
              className="tab"
              role="tab"
              type="button"
              key={tab.id}
              id={`pt-${tab.id}`}
              aria-controls={`pp-${tab.id}`}
              aria-selected={active === tab.id}
              tabIndex={active === tab.id ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="panel"
          role="tabpanel"
          id="pp-si"
          aria-labelledby="pt-si"
          hidden={active !== 'si'}
        >
          <h3 className="s__sub">SI Prelims: Preliminary Written Test (PWT)</h3>
          <div className="chips">
            {PRELIMS_FACTS.map(([value, label]) => (
              <span className="chip" key={label}>
                {value} · {label}
              </span>
            ))}
          </div>
          <div className="ctable-wrap">
            <table className="ctable">
              <caption>SI preliminary written test, from SI notification §16.</caption>
              <thead>
                <tr>
                  <th scope="col">Subject group</th>
                  <th scope="col">Questions</th>
                </tr>
              </thead>
              <tbody>
                {SI_PRELIMS_SUBJECTS.map(([group, count]) => (
                  <tr key={group}>
                    <th scope="row">{group}</th>
                    <td data-label="Questions">{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="s__sub">SI Mains: Final Written Examination (FWE)</h3>
          <p>Four papers, each lasting three hours. English and Telugu/Urdu are qualifying papers.</p>
          <div className="ctable-wrap">
            <table className="ctable">
              <caption>SI final written examination, from SI Annexures II–III.</caption>
              <thead>
                <tr>
                  <th scope="col">Paper</th>
                  <th scope="col">Format</th>
                  <th scope="col">Marks</th>
                </tr>
              </thead>
              <tbody>
                {SI_MAINS_PAPERS.map(([paper, format, marks]) => (
                  <tr key={paper}>
                    <th scope="row">{paper}</th>
                    <td data-label="Format">{format}</td>
                    <td data-label="Marks">{marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="acct">
            *Papers III and IV each carry 200 marks for post codes 11, 17, 18 and 19; 100 marks for
            post codes 12–14 and 16. See{' '}
            <Src href={SRC.siNotification}>SI notification §16 and Annexures II–III</Src>.
          </p>
        </div>

        <div
          className="panel"
          role="tabpanel"
          id="pp-pc"
          aria-labelledby="pt-pc"
          hidden={active !== 'pc'}
        >
          <h3 className="s__sub">Constable Prelims: Preliminary Written Test (PWT)</h3>
          <div className="chips">
            {PRELIMS_FACTS.map(([value, label]) => (
              <span className="chip" key={label}>
                {value} · {label}
              </span>
            ))}
          </div>
          <p>
            One objective paper covering English, arithmetic, reasoning, science, current affairs,
            Indian history, geography, polity, economy and Telangana topics.
          </p>

          <h3 className="s__sub">Constable Mains: Final Written Examination (FWE)</h3>
          <div className="ctable-wrap">
            <table className="ctable">
              <caption>
                Constable final written examination, from Constable Annexures II–III. One paper,
                three hours.
              </caption>
              <thead>
                <tr>
                  <th scope="col">Post codes</th>
                  <th scope="col">Questions</th>
                  <th scope="col">Marks</th>
                </tr>
              </thead>
              <tbody>
                {PC_MAINS_ROWS.map(([codes, questions, marks]) => (
                  <tr key={codes}>
                    <th scope="row">{codes}</th>
                    <td data-label="Questions">{questions}</td>
                    <td data-label="Marks">{marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="acct">
            Final-paper topics include personality-related areas such as ethics and social
            awareness. See{' '}
            <Src href={SRC.pcNotification}>Constable notification §16 and Annexures II–III</Src>.
          </p>
        </div>

        <div className="answer-box answer-box--after">
          <p>
            <b>Preliminary marking, both exams:</b> correct answer +1; incorrect or otherwise
            invalid marked response −0.20; unanswered 0. Final-paper marking rules differ by paper.{' '}
            <b>Preliminary qualifying thresholds:</b> OC/EWS 30%, BC 25%, SC/ST/ex-servicemen 20%;
            the Constable notification also places Home Guards in the 20% group. These are
            qualifying thresholds, not final selection cut-offs.
          </p>
        </div>
      </div>
    </section>
  )
}

/**
 * SI previous year papers, filtered by recruitment cycle and exam stage.
 *
 * The filters are plain toggle buttons rather than a tablist: they narrow one
 * list instead of swapping between panels, so `aria-pressed` is the honest
 * state. They reuse the `.tab` styling, which handles both attributes.
 */
function PreviousPapers() {
  const [cycle, setCycle] = useState('all')
  const [stage, setStage] = useState('all')

  const shown = SI_PAPERS.filter(
    (paper) =>
      (cycle === 'all' || paper.cycle === cycle) && (stage === 'all' || paper.stage === stage),
  )

  return (
    <section className="s" id="previous-papers">
      <div className="wrap">
        <SectionHead
          eyebrow="Previous-year papers"
          title="Telangana Police SI Previous Year Question Papers"
          lead="Browse Telangana Police SI previous year question papers by recruitment cycle and exam stage. Open the available prelims and mains PDFs, practise under a time limit, then use an appropriate official answer key to review your attempt. File sizes are shown before opening."
        />

        <div className="tabs" role="group" aria-label="Filter papers by recruitment cycle">
          {PAPER_CYCLES.map((option) => (
            <button
              className="tab"
              type="button"
              key={option.id}
              aria-pressed={cycle === option.id}
              onClick={() => setCycle(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="tabs" role="group" aria-label="Filter papers by exam stage">
          {PAPER_STAGES.map((option) => (
            <button
              className="tab"
              type="button"
              key={option.id}
              aria-pressed={stage === option.id}
              onClick={() => setStage(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <p className="acct" role="status">
          {shown.length} of {SI_PAPERS.length} papers shown.
        </p>

        {shown.length > 0 ? (
          <div className="g3">
            {shown.map((paper) => (
              <article className="mk" key={paper.pdf}>
                <span className="mk__cat">{paper.cycle}</span>
                <h3>{paper.title}</h3>
                <p className="mk__spec">{paper.meta}</p>
                <p>
                  <a className="btn btn--y btn--sm" href={paper.pdf} target="_blank" rel="noreferrer">
                    Open PDF <Arrow />
                  </a>
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="acct">No paper matches these filters. Choose another year or stage.</p>
        )}

        <div className="answer-box answer-box--after">
          <p>
            <b>Make each attempt count:</b> set a time limit → check with the relevant answer key →
            group mistakes by topic → revise before your next mock.
          </p>
        </div>

        <aside className="source-note" aria-labelledby="tg-si-papers-source-title">
          <h3 id="tg-si-papers-source-title">Where these papers come from</h3>
          <p>
            Downloads are hosted by Brolly and the file sizes follow the resource listing. The{' '}
            {SI_PAPERS.length} papers above are the ones currently available — this is not a
            complete archive, and it does not include solved answer keys. Question papers, answer
            keys and recruitment rules are published by the Telangana police recruitment board, and
            third-party or memory-based material is never presented here as an official paper.
          </p>
          <div className="source-links">
            <Src href={SRC.board}>Telangana Police Recruitment Board</Src>
            <Link to="/government-exams/police/previous-year-papers/">
              Looking for Constable papers? Browse the police previous-papers directory
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}

/**
 * WebPage and FAQPage for this URL. The BreadcrumbList is not here on purpose —
 * PageHero already emits one from the `trail` prop, and a second would conflict.
 */
function structuredData() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${CANONICAL}#webpage`,
      url: CANONICAL,
      name: SEO_TITLE,
      description: META_DESCRIPTION,
      inLanguage: 'en-IN',
      isPartOf: { '@id': `${ORIGIN}/#website` },
      about: [
        { '@type': 'Thing', name: 'Telangana Police SI' },
        { '@type': 'Thing', name: 'Telangana Police Constable' },
        { '@type': 'Thing', name: 'Telangana Police Recruitment 2026' },
        { '@type': 'Place', name: 'Telangana, India' },
      ],
      citation: SOURCE_DOCS.map((doc) => ({
        '@type': 'CreativeWork',
        name: doc.label,
        url: doc.href,
      })),
      publisher: { '@id': `${ORIGIN}/#organization` },
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
