/** Content for the homepage sections and the inner pages. */

import { specOf, TESTS } from './mock-tests'

export const QUICK_ACCESS = [
  { icon: 'check', title: 'Free Mock Tests', sub: 'Exam-level practice tests', to: '/mock-tests/free/' },
  { icon: 'doc', title: 'Previous Year Papers', sub: 'Real papers with solutions', to: '/previous-year-papers/' },
  { icon: 'book', title: 'Study Material', sub: 'Subject-wise notes and PDFs', to: '/study-material/' },
  { icon: 'globe', title: 'Current Affairs', sub: 'Daily, weekly and monthly', to: '/current-affairs/' },
  { icon: 'bell', title: 'Exam Updates', sub: 'Notifications and results', to: '/exam-updates/' },
  { icon: 'layers', title: 'Test Series', sub: 'Full-length and sectional', to: '/practice/test-series/' },
]

export const EXAM_CATEGORIES = [
  { icon: 'target', title: 'SSC Exams', desc: 'SSC CGL, CHSL, MTS, GD, CPO, JE', to: '/government-exams/ssc/' },
  { icon: 'chart', title: 'Banking Exams', desc: 'SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, IBPS RRB, RBI', to: '/government-exams/banking/' },
  { icon: 'layers', title: 'Railway Exams', desc: 'RRB NTPC, Group D, ALP, JE, RPF', to: '/government-exams/railways/' },
  { icon: 'book', title: 'UPSC & Civil Services', desc: 'UPSC CSE, NDA, CDS, CAPF', to: '/government-exams/upsc/' },
  { icon: 'target', title: 'Defence Exams', desc: 'NDA, CDS, AFCAT, Agniveer, CAPF', to: '/government-exams/defence/' },
  { icon: 'user', title: 'Teaching Exams', desc: 'CTET, TET, UGC NET, State TET', to: '/government-exams/teaching-net/' },
  { icon: 'globe', title: 'State Government Exams', desc: 'State PSC, Group exams, Police and other state-level examinations', to: '/government-exams/state/' },
  { icon: 'refresh', title: 'Other Competitive Exams', desc: 'Insurance, Regulatory, Engineering, Agriculture, Healthcare and more', to: '/government-exams/' },
]

export const POPULAR_EXAMS = [
  { id: 'cgl', category: 'ssc', badge: 'CGL', cat: 'SSC', name: 'SSC CGL', pill: 'Notification out', pillTone: 'r', desc: 'Combined Graduate Level recruitment for Group B and C posts across central ministries.', to: '/government-exams/ssc/ssc-cgl/' },
  { id: 'sbi', category: 'banking', badge: 'SBI', cat: 'Banking', name: 'SBI PO', pill: 'Prelims Oct 2026', pillTone: 'g', desc: 'Probationary Officer recruitment at State Bank of India.', to: '/government-exams/banking/sbi-po/' },
  { id: 'ibps', category: 'banking', badge: 'IBPS', cat: 'Banking', name: 'IBPS PO', pill: 'Admit card soon', pillTone: 'g', desc: 'Probationary Officer posts across participating public sector banks.', to: '/government-exams/banking/ibps-po/' },
  { id: 'rrb', category: 'railways', badge: 'RRB', cat: 'Railways', name: 'RRB NTPC', pill: 'CBT 1 · 04 Nov 2026', pillTone: 'g', desc: 'Non-Technical Popular Categories recruitment across railway zones.', to: '/government-exams/railways/rrb-ntpc/' },
  { id: 'upsc', category: 'upsc', badge: 'UPSC', cat: 'UPSC', name: 'UPSC CSE', pill: 'Prelims May 2027', pillTone: 'y', desc: 'Civil Services Examination for IAS, IPS, IFS and allied services.', to: '/government-exams/upsc/upsc-civil-services/' },
  { id: 'nda', category: 'defence', badge: 'NDA', cat: 'Defence', name: 'NDA', pill: 'Applications open', pillTone: 'r', desc: 'National Defence Academy entry for Army, Navy and Air Force wings.', to: '/government-exams/upsc/nda/' },
  { id: 'ctet', category: 'teaching', badge: 'CTET', cat: 'Teaching', name: 'CTET', pill: 'Dec 2026 cycle', pillTone: 'y', desc: 'Central Teacher Eligibility Test for classes I to VIII.', to: '/government-exams/teaching-net/ctet/' },
  { id: 'psc', category: 'state-exams', badge: 'PSC', cat: 'State Exams', name: 'State PSC', pill: 'Varies by state', pillTone: 'y', desc: 'Group I to IV and combined services examinations conducted by state commissions.', to: '/government-exams/state/' },
]

/**
 * The external mock-test platform. Papers that have no question bank in
 * src/data/mock-tests/ are attempted there instead of on this site, so a link
 * to one leaves the SPA and must be a plain <a>, not a react-router <Link>.
 *
 * The slug is reused as-is, so /mock-tests/telangana-police-si/ here and
 * mocktest.brollyexamprep.com/telangana-police-si/ there stay in step.
 */
export const MOCKTEST_ORIGIN = 'https://mocktest.brollyexamprep.com'

export const mockTestUrl = (slug) => `${MOCKTEST_ORIGIN}/${slug}/`

/**
 * The cards on the home page and the Mock Tests hub. Both the spec line and
 * the link come from the question banks, so a card can never advertise a test
 * that is not actually there.
 */
export const FREE_MOCKS = TESTS.map((test) => ({
  cat: test.cat,
  title: test.title,
  spec: specOf(test),
  to: `/mock-tests/${test.slug}/`,
}))

export const FEATURES = [
  { icon: 'target', title: 'Exam-Focused Preparation', desc: 'Resources structured around specific competitive exams, not generic study packs.' },
  { icon: 'check', title: 'Quality Mock Tests', desc: 'Realistic practice built to the current exam pattern and difficulty.' },
  { icon: 'doc', title: 'Previous-Year Questions', desc: 'Understand real exam trends through solved previous papers.' },
  { icon: 'chart', title: 'Detailed Performance Analysis', desc: 'Track accuracy, speed, scores and weak areas after every attempt.' },
  { icon: 'refresh', title: 'Updated Study Material', desc: 'Structured, regularly updated preparation resources across subjects.' },
  { icon: 'user', title: 'Personalized Learning', desc: 'Use performance insights to focus on the areas that need improvement.' },
]

export const STEPS = [
  { n: '01', title: 'Choose Your Exam', desc: 'Select the competitive exam you are preparing for.' },
  { n: '02', title: 'Learn', desc: 'Study concepts, syllabus, preparation resources and current affairs.' },
  { n: '03', title: 'Practice', desc: 'Attempt topic tests, sectional tests, previous-year questions and mock tests.' },
  { n: '04', title: 'Improve', desc: 'Analyse your performance and focus on weak areas.' },
]

/** Every exam here gets the same six resource sub-pages. */
export const PREP_SUBLINKS = [
  ['Syllabus', 'syllabus'],
  ['Exam Pattern', 'exam-pattern'],
  ['Previous Papers', 'previous-year-papers'],
  ['Mock Tests', 'mock-tests'],
  ['Preparation', 'preparation'],
  ['Study Material', 'study-material'],
]

export const PREP_TABS = [
  {
    id: 'ssc',
    label: 'SSC',
    exams: [
      { name: 'SSC CGL', base: '/government-exams/ssc/ssc-cgl/' },
      { name: 'SSC CHSL', base: '/government-exams/ssc/ssc-chsl/' },
      { name: 'SSC MTS', base: '/government-exams/ssc/ssc-mts/' },
      { name: 'SSC GD', base: '/government-exams/ssc/ssc-gd/' },
      { name: 'SSC CPO', base: '/government-exams/ssc/ssc-cpo/' },
      { name: 'SSC JE', base: '/government-exams/ssc/ssc-je/' },
    ],
  },
  {
    id: 'banking',
    label: 'Banking',
    exams: [
      { name: 'SBI PO', base: '/government-exams/banking/sbi-po/' },
      { name: 'SBI Clerk', base: '/government-exams/banking/sbi-clerk/' },
      { name: 'IBPS PO', base: '/government-exams/banking/ibps-po/' },
      { name: 'IBPS Clerk', base: '/government-exams/banking/ibps-clerk/' },
      { name: 'IBPS RRB', base: '/government-exams/banking/ibps-rrb/' },
      { name: 'RBI Grade B', base: '/government-exams/banking/rbi-grade-b/' },
    ],
  },
  {
    id: 'railways',
    label: 'Railways',
    exams: [
      { name: 'RRB NTPC', base: '/government-exams/railways/rrb-ntpc/' },
      { name: 'RRB Group D', base: '/government-exams/railways/rrb-group-d/' },
      { name: 'RRB ALP', base: '/government-exams/railways/rrb-alp/' },
      { name: 'RRB JE', base: '/government-exams/railways/rrb-je/' },
      { name: 'RPF', base: '/government-exams/railways/rpf/' },
    ],
  },
  {
    id: 'upsc',
    label: 'UPSC',
    exams: [
      { name: 'UPSC CSE', base: '/government-exams/upsc/upsc-civil-services/' },
      { name: 'UPSC CAPF', base: '/government-exams/upsc/capf/' },
      { name: 'Engineering Services', base: '/government-exams/upsc/engineering-services/' },
      { name: 'Indian Forest Service', base: '/government-exams/upsc/indian-forest-service/' },
    ],
  },
  {
    id: 'defence',
    label: 'Defence',
    exams: [
      { name: 'NDA', base: '/government-exams/defence/nda/' },
      { name: 'CDS', base: '/government-exams/defence/cds/' },
      { name: 'AFCAT', base: '/government-exams/defence/afcat/' },
      { name: 'Agniveer', base: '/government-exams/defence/agniveer/' },
    ],
  },
  {
    id: 'teaching',
    label: 'Teaching',
    exams: [
      { name: 'CTET', base: '/government-exams/teaching-net/ctet/' },
      { name: 'State TET', base: '/government-exams/teaching-net/state-tet/' },
      { name: 'UGC NET', base: '/government-exams/teaching-net/ugc-net/' },
      { name: 'KVS', base: '/government-exams/teaching-net/kvs/' },
    ],
  },
  {
    id: 'state',
    label: 'State Exams',
    exams: [
      { name: 'State PSC Group I', base: '/government-exams/state/state-psc-group-1/' },
      { name: 'State PSC Group II', base: '/government-exams/state/state-psc-group-2/' },
      { name: 'State Police', base: '/government-exams/state/state-police/' },
      { name: 'State TET', base: '/government-exams/state/state-tet-exams/' },
    ],
  },
  {
    id: 'police',
    label: 'Police',
    exams: [
      { name: 'SSC GD Constable', base: '/government-exams/police/ssc-gd-constable/' },
      { name: 'Delhi Police SI', base: '/government-exams/police/delhi-police-si/' },
      { name: 'State Constable', base: '/government-exams/police/state-constable/' },
      { name: 'CAPF', base: '/government-exams/police/capf-forces/' },
    ],
  },
]

export const PREVIOUS_PAPERS = [
  { title: 'SSC Previous Year Papers', sub: 'CGL, CHSL, MTS, GD, CPO, JE', to: '/previous-year-papers/ssc/' },
  { title: 'Banking Previous Year Papers', sub: 'SBI, IBPS and RBI recruitment papers', to: '/previous-year-papers/banking/' },
  { title: 'Railway Previous Year Papers', sub: 'NTPC, Group D, ALP, JE and RPF', to: '/previous-year-papers/railways/' },
  { title: 'UPSC Previous Year Papers', sub: 'Civil Services prelims and mains', to: '/previous-year-papers/upsc/' },
  { title: 'Defence Previous Year Papers', sub: 'NDA, CDS, AFCAT and Agniveer', to: '/previous-year-papers/defence/' },
  { title: 'Teaching Previous Year Papers', sub: 'CTET, State TET and UGC NET', to: '/previous-year-papers/teaching/' },
  { title: 'State PSC Previous Year Papers', sub: 'Group and combined services papers', to: '/previous-year-papers/state-psc/' },
  { title: 'Police Previous Year Papers', sub: 'Constable and Sub-Inspector papers', to: '/previous-year-papers/police/' },
]

export const STUDY_TILES = [
  { title: 'Quantitative Aptitude', sub: 'Formulas, shortcuts and solved examples', to: '/study-material/quantitative-aptitude/' },
  { title: 'Reasoning', sub: 'Puzzles, seating arrangement and syllogism', to: '/study-material/reasoning/' },
  { title: 'English', sub: 'Grammar rules, vocabulary and comprehension', to: '/study-material/english/' },
  { title: 'General Awareness', sub: 'Static GK and exam-relevant awareness', to: '/study-material/general-awareness/' },
  { title: 'General Studies', sub: 'Polity, economy, environment and more', to: '/study-material/general-studies/' },
  { title: 'Mathematics', sub: 'Advanced maths for tier-two papers', to: '/study-material/mathematics/' },
  { title: 'Science', sub: 'Physics, chemistry and biology basics', to: '/study-material/science/' },
  { title: 'Current Affairs', sub: 'Daily notes and monthly compilations', to: '/study-material/current-affairs/' },
  { title: 'Exam-Specific Notes', sub: 'Notes mapped to individual exam syllabi', to: '/study-material/exam-notes/' },
]

export const CURRENT_AFFAIRS_TILES = [
  { icon: 'globe', title: "Today's Current Affairs", sub: 'Latest important events, written for exam relevance.', to: '/current-affairs/daily/' },
  { icon: 'check', title: 'Daily Current Affairs Quiz', sub: 'Ten questions every morning to test your recall.', to: '/current-affairs/quiz/' },
  { icon: 'book', title: 'Monthly Current Affairs', sub: 'Consolidated monthly revision material.', to: '/current-affairs/monthly/' },
  { icon: 'doc', title: 'Current Affairs PDF', sub: 'Downloadable compilations for offline study.', to: '/current-affairs/pdf/' },
]

export const UPDATE_TILES = [
  { icon: 'bell', title: 'Latest Notifications', sub: 'New recruitment notifications as they release', to: '/exam-updates/notifications/' },
  { icon: 'clock', title: 'Exam Dates', sub: 'Confirmed and expected exam schedules', to: '/exam-updates/exam-dates/' },
  { icon: 'layers', title: 'Vacancies', sub: 'Post-wise vacancy counts and revisions', to: '/exam-updates/vacancies/' },
  { icon: 'doc', title: 'Admit Cards', sub: 'Download windows and direct links', to: '/exam-updates/admit-cards/' },
  { icon: 'check', title: 'Answer Keys', sub: 'Provisional keys and objection windows', to: '/exam-updates/answer-keys/' },
  { icon: 'chart', title: 'Cutoffs', sub: 'Category-wise cutoffs from past cycles', to: '/exam-updates/cutoffs/' },
  { icon: 'target', title: 'Results', sub: 'Result announcements and merit lists', to: '/exam-updates/results/' },
]

export const COURSES = {
  courses: [
    { label: 'Live Classes', to: '/courses/live-classes/' },
    { label: 'Recorded Classes', to: '/courses/recorded-classes/' },
    { label: 'Foundation Courses', to: '/courses/foundation/' },
    { label: 'Crash Courses', to: '/courses/crash-courses/' },
  ],
  testSeries: [
    { label: 'Full-Length Tests', to: '/practice/test-series/full-length/' },
    { label: 'Sectional Tests', to: '/practice/test-series/sectional/' },
    { label: 'Topic Tests', to: '/practice/test-series/topic/' },
    { label: 'Previous-Year Tests', to: '/practice/test-series/previous-year/' },
    { label: 'Current Affairs Tests', to: '/practice/test-series/current-affairs/' },
  ],
}

/**
 * CMS-ready placeholders. Replace with verified, consented student records
 * before publishing, or drop the section.
 */
export const SUCCESS_STORIES = [
  { id: '', quote: 'Brolly helped me identify my weak areas and prepare with a clear strategy.', name: '[Student name]', meta: '[Exam cleared] · [Year]' },
  { id: '', quote: '[Replace with a verified, consented testimonial from a real student.]', name: '[Student name]', meta: '[Exam cleared] · [Year]' },
  { id: '', quote: '[Replace with a verified, consented testimonial from a real student.]', name: '[Student name]', meta: '[Exam cleared] · [Year]' },
]

export const FACULTY = [
  { av: 'QA', subject: 'Quantitative Aptitude', role: 'Experienced faculty', desc: 'Arithmetic, advanced maths and data interpretation for SSC, banking and railway papers.' },
  { av: 'RE', subject: 'Reasoning', role: 'Experienced faculty', desc: 'Puzzles, seating arrangement, syllogism and analytical reasoning across exam patterns.' },
  { av: 'EN', subject: 'English', role: 'Experienced faculty', desc: 'Grammar, vocabulary, comprehension and error spotting for competitive exams.' },
  { av: 'GS', subject: 'General Studies & Current Affairs', role: 'Experienced faculty', desc: 'Polity, history, geography, science and daily current affairs mapped to exam syllabi.' },
]

export const ARTICLES = [
  {
    to: '/blog/how-to-start-competitive-exam-preparation/',
    cat: 'Preparation',
    title: 'How to start competitive exam preparation from scratch',
    excerpt: 'A step-by-step approach for first-time aspirants — choosing an exam, building a timetable and picking the right resources.',
    date: '22 Aug 2026',
  },
  {
    to: '/blog/ssc-cgl-syllabus-exam-pattern/',
    cat: 'SSC CGL',
    title: 'SSC CGL syllabus and exam pattern explained',
    excerpt: 'Tier-wise syllabus, marking scheme, sectional weightage and what changed in the latest notification.',
    date: '19 Aug 2026',
  },
  {
    to: '/blog/how-to-use-previous-year-papers/',
    cat: 'Strategy',
    title: 'Using previous-year papers the right way',
    excerpt: 'Most aspirants solve previous papers like mock tests. Here is a more useful way to read question trends.',
    date: '14 Aug 2026',
  },
]

export const FAQS = [
  {
    q: 'What is competitive exam preparation?',
    a: 'Competitive exam preparation is the structured process of getting ready for an examination where candidates are ranked against each other for a limited number of posts or seats, rather than simply passing a fixed mark. It usually combines four things: understanding the syllabus and exam pattern, learning the underlying concepts, practising questions through topic tests, previous-year papers and mock tests, and then analysing performance to correct weak areas before the real exam.',
  },
  {
    q: 'Which competitive exams does Brolly Exam Prep cover?',
    a: 'Brolly covers SSC, Banking, Railways, UPSC, Defence, Teaching, State PSC and Police examinations, along with other central recruitment exams in insurance, regulatory bodies, engineering, agriculture and healthcare. Each exam has its own page with syllabus, exam pattern, previous papers, mock tests and study material.',
  },
  {
    q: 'Does Brolly provide free mock tests?',
    a: 'Yes. Free full-length mock tests are available for major exams including SSC CGL, SBI PO, IBPS PO, RRB NTPC, UPSC, NDA, CTET and State PSC examinations. Each free test uses the current exam pattern and gives you your score and the correct answers at the end.',
  },
  {
    q: 'Can I practice previous-year question papers?',
    a: 'Yes. Previous-year question papers are available exam-wise with solutions, so you can see how questions are actually framed, which topics repeat and how difficulty has shifted between cycles.',
  },
  {
    q: 'Does Brolly provide study materials?',
    a: 'Yes. Study material is organised by subject — Quantitative Aptitude, Reasoning, English, General Awareness, General Studies, Mathematics, Science and Current Affairs — as well as by individual exam, so you can study either way.',
  },
  {
    q: 'Can I prepare for government exams online?',
    a: 'Yes. Everything needed for online government exam preparation is on the platform: syllabus and exam pattern pages, subject-wise study material, previous-year papers, topic and sectional tests, full-length mock tests, daily current affairs and exam notifications.',
  },
  {
    q: 'Which SSC exams are available on Brolly?',
    a: 'SSC CGL, SSC CHSL, SSC MTS, SSC GD, SSC CPO and SSC JE. Each has its own syllabus, exam pattern, previous papers, mock tests and preparation resources.',
  },
  {
    q: 'Does Brolly provide banking exam preparation?',
    a: 'Yes. Banking coverage includes SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, IBPS RRB and RBI Grade B, with mock tests, previous papers and banking awareness material.',
  },
  {
    q: 'Does Brolly cover Railway exams?',
    a: 'Yes. Railway coverage includes RRB NTPC, RRB Group D, RRB ALP, RRB JE and RPF, with CBT-pattern mock tests and previous-year papers for each stage.',
  },
  {
    q: 'Does Brolly cover State PSC exams?',
    a: 'Yes. State Government Exams cover State PSC Group examinations, state police recruitment and state teaching eligibility tests, alongside the central exams.',
  },
  {
    q: 'Are current affairs available for competitive exams?',
    a: 'Yes. Current affairs are published daily and compiled weekly and monthly, with a daily quiz and downloadable PDFs. Items are written for exam relevance rather than general news value.',
  },
  {
    q: 'How can I start my competitive exam preparation?',
    a: 'Start by attempting a free full-length mock test for your target exam before studying anything. It shows which sections you are already competitive in and which need real work. From there, use the exam page to understand the syllabus and pattern, study the weakest section first, practise with previous-year papers, and re-test every couple of weeks to check the gap is closing.',
  },
]

/** Exam list backing the hero autocomplete. */
export const EXAM_INDEX = [
  ['SSC CGL', 'SSC', '/government-exams/ssc/ssc-cgl/'],
  ['SSC CHSL', 'SSC', '/government-exams/ssc/ssc-chsl/'],
  ['SSC MTS', 'SSC', '/government-exams/ssc/ssc-mts/'],
  ['SSC GD', 'SSC', '/government-exams/ssc/ssc-gd/'],
  ['SSC CPO', 'SSC', '/government-exams/ssc/ssc-cpo/'],
  ['SSC JE', 'SSC', '/government-exams/ssc/ssc-je/'],
  ['SBI PO', 'Banking', '/government-exams/banking/sbi-po/'],
  ['SBI Clerk', 'Banking', '/government-exams/banking/sbi-clerk/'],
  ['IBPS PO', 'Banking', '/government-exams/banking/ibps-po/'],
  ['IBPS Clerk', 'Banking', '/government-exams/banking/ibps-clerk/'],
  ['IBPS RRB', 'Banking', '/government-exams/banking/ibps-rrb/'],
  ['RBI Grade B', 'Banking', '/government-exams/banking/rbi-grade-b/'],
  ['RRB NTPC', 'Railways', '/government-exams/railways/rrb-ntpc/'],
  ['RRB Group D', 'Railways', '/government-exams/railways/rrb-group-d/'],
  ['RRB ALP', 'Railways', '/government-exams/railways/rrb-alp/'],
  ['RRB JE', 'Railways', '/government-exams/railways/rrb-je/'],
  ['RPF', 'Railways', '/government-exams/railways/rpf/'],
  ['UPSC CSE', 'UPSC', '/government-exams/upsc/upsc-civil-services/'],
  ['UPSC CAPF', 'UPSC', '/government-exams/upsc/capf/'],
  ['NDA', 'Defence', '/government-exams/upsc/nda/'],
  ['CDS', 'Defence', '/government-exams/upsc/cds/'],
  ['AFCAT', 'Defence', '/government-exams/defence/afcat/'],
  ['Agniveer', 'Defence', '/government-exams/defence/agniveer/'],
  ['CTET', 'Teaching', '/government-exams/teaching-net/ctet/'],
  ['State TET', 'Teaching', '/government-exams/teaching-net/state-tet/'],
  ['UGC NET', 'Teaching', '/government-exams/teaching-net/ugc-net/'],
  ['State PSC', 'State Exams', '/government-exams/state/'],
  ['State Police', 'Police', '/government-exams/police/'],
  ['JEE Main', 'Engineering', '/entrance-exams/engineering/jee-main/'],
  ['JEE Advanced', 'Engineering', '/entrance-exams/engineering/jee-advanced/'],
  ['NEET UG', 'Medical', '/entrance-exams/medical/neet-ug/'],
  ['CAT', 'MBA', '/entrance-exams/mba/cat/'],
  ['CLAT', 'Law', '/entrance-exams/law/clat/'],
  ['GATE', 'PG & Research', '/entrance-exams/pg-research/gate/'],
  ['CUET UG', 'University', '/entrance-exams/university/cuet-ug/'],
]

export const HERO_POPULAR = [
  { label: 'SSC CGL', to: '/government-exams/ssc/ssc-cgl/' },
  { label: 'SBI PO', to: '/government-exams/banking/sbi-po/' },
  { label: 'IBPS PO', to: '/government-exams/banking/ibps-po/' },
  { label: 'RRB NTPC', to: '/government-exams/railways/rrb-ntpc/' },
  { label: 'UPSC', to: '/government-exams/upsc/upsc-civil-services/' },
  { label: 'NDA', to: '/government-exams/upsc/nda/' },
  { label: 'CTET', to: '/government-exams/teaching-net/ctet/' },
]

export const FOOTER_COLS = [
  {
    heading: 'Competitive Exams',
    links: [
      { label: 'SSC', to: '/government-exams/ssc/' },
      { label: 'Banking', to: '/government-exams/banking/' },
      { label: 'Railways', to: '/government-exams/railways/' },
      { label: 'UPSC', to: '/government-exams/upsc/' },
      { label: 'Defence', to: '/government-exams/defence/' },
      { label: 'Teaching', to: '/government-exams/teaching-net/' },
      { label: 'State Exams', to: '/government-exams/state/' },
      { label: 'Police', to: '/government-exams/police/' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Mock Tests', to: '/mock-tests/' },
      { label: 'Previous Papers', to: '/previous-year-papers/' },
      { label: 'Study Material', to: '/study-material/' },
      { label: 'Current Affairs', to: '/current-affairs/' },
      { label: 'Exam Updates', to: '/exam-updates/' },
      { label: 'Preparation Guides', to: '/blog/' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', to: '/about/' },
      { label: 'Contact Us', to: '/contact/' },
      { label: 'Careers', to: '/careers/' },
      { label: 'Success Stories', to: '/success-stories/' },
      { label: 'Faculty', to: '/faculty/' },
      { label: 'Brolly Academy', href: 'https://brollyacademy.com/' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy/' },
      { label: 'Terms & Conditions', to: '/terms-and-conditions/' },
      { label: 'Refund Policy', to: '/refund-policy/' },
      { label: 'Disclaimer', to: '/disclaimer/' },
    ],
  },
]
