import { cleanLabel } from '../lib/labels'

/**
 * Single source of truth for the primary navigation.
 *
 * The desktop mega menu, the mobile drawer and the generic directory pages
 * all read from this tree, so a link only has to be added in one place.
 *
 * Shape:
 *   id        – used for the mega panel element id
 *   label     – nav trigger text
 *   to        – landing page for the whole section
 *   allLabel  – text of the "view everything" link in the mega head
 *   eyebrow / title / desc – mega panel header copy
 *   cols      – how many columns the mega grid uses (4 or 6)
 *   groups    – [{ heading, links: [{ label, to, badge?, strong? }] }]
 */

export const NAV = [
  {
    id: 'mega-government',
    label: 'Government Exams',
    to: '/government-exams/',
    allLabel: 'All Government Exams A–Z →',
    eyebrow: 'Prepare for Government Jobs',
    title: 'Government Exams',
    desc: 'Civil services, SSC, banking, railways, state jobs, defence, teaching and more.',
    cols: 6,
    groups: [
      {
        heading: 'UPSC & Civil Services',
        links: [
          { label: 'UPSC Civil Services', to: '/government-exams/upsc/upsc-civil-services/' },
          { label: 'NDA & NA', to: '/government-exams/upsc/nda/' },
          { label: 'CDS', to: '/government-exams/upsc/cds/' },
          { label: 'CAPF', to: '/government-exams/upsc/capf/' },
          { label: 'Engineering Services', to: '/government-exams/upsc/engineering-services/' },
          { label: 'Indian Forest Service', to: '/government-exams/upsc/indian-forest-service/' },
          { label: 'View All UPSC Exams →', to: '/government-exams/upsc/', strong: true },
        ],
      },
      {
        heading: 'SSC',
        links: [
          { label: 'SSC CGL', to: '/government-exams/ssc/ssc-cgl/', badge: 'Popular' },
          { label: 'SSC CHSL', to: '/government-exams/ssc/ssc-chsl/' },
          { label: 'SSC MTS', to: '/government-exams/ssc/ssc-mts/' },
          { label: 'SSC GD', to: '/government-exams/ssc/ssc-gd/' },
          { label: 'SSC CPO', to: '/government-exams/ssc/ssc-cpo/' },
          { label: 'SSC JE', to: '/government-exams/ssc/ssc-je/' },
          { label: 'View All SSC Exams →', to: '/government-exams/ssc/', strong: true },
        ],
      },
      {
        heading: 'Banking',
        links: [
          { label: 'IBPS PO', to: '/government-exams/banking/ibps-po/' },
          { label: 'IBPS Clerk / CSA', to: '/government-exams/banking/ibps-clerk/' },
          { label: 'IBPS RRB', to: '/government-exams/banking/ibps-rrb/' },
          { label: 'SBI PO', to: '/government-exams/banking/sbi-po/' },
          { label: 'SBI Clerk', to: '/government-exams/banking/sbi-clerk/' },
          { label: 'View All Banking Exams →', to: '/government-exams/banking/', strong: true },
        ],
      },
      {
        heading: 'Railways',
        links: [
          { label: 'RRB NTPC', to: '/government-exams/railways/rrb-ntpc/' },
          { label: 'RRB Group D', to: '/government-exams/railways/rrb-group-d/' },
          { label: 'RRB ALP', to: '/government-exams/railways/rrb-alp/' },
          { label: 'RRB JE', to: '/government-exams/railways/rrb-je/' },
          { label: 'RPF', to: '/government-exams/railways/rpf/' },
          { label: 'View All Railway Exams →', to: '/government-exams/railways/', strong: true },
        ],
      },
      {
        heading: 'State Government',
        links: [
          { label: 'Telangana', to: '/government-exams/state/telangana/' },
          { label: 'Andhra Pradesh', to: '/government-exams/state/andhra-pradesh/' },
          { label: 'Tamil Nadu', to: '/government-exams/state/tamil-nadu/' },
          { label: 'Karnataka', to: '/government-exams/state/karnataka/' },
          { label: 'Maharashtra', to: '/government-exams/state/maharashtra/' },
          { label: 'Uttar Pradesh', to: '/government-exams/state/uttar-pradesh/' },
          { label: 'Bihar', to: '/government-exams/state/bihar/' },
          { label: 'All States →', to: '/government-exams/state/', strong: true },
        ],
      },
      {
        heading: 'More Government Exams',
        links: [
          { label: 'Teaching & NET', to: '/government-exams/teaching-net/' },
          { label: 'Defence', to: '/government-exams/defence/' },
          { label: 'Police', to: '/government-exams/police/' },
          { label: 'Regulatory Bodies', to: '/government-exams/regulatory-bodies/' },
          { label: 'Insurance', to: '/government-exams/insurance/' },
          { label: 'Engineering & PSU', to: '/government-exams/engineering-psu/' },
          { label: 'Judiciary', to: '/government-exams/judiciary/' },
          { label: 'Agriculture', to: '/government-exams/agriculture/' },
          { label: 'Healthcare / Nursing', to: '/government-exams/healthcare/' },
        ],
      },
    ],
  },

  {
    id: 'mega-entrance',
    label: 'Entrance Exams',
    to: '/entrance-exams/',
    allLabel: 'All Entrance Exams A–Z →',
    eyebrow: 'College & Competitive Entrance',
    title: 'Entrance Exams',
    desc: 'Engineering, medical, MBA, law, university, research and international entrance exams.',
    cols: 6,
    groups: [
      {
        heading: 'Engineering',
        links: [
          { label: 'JEE Main', to: '/entrance-exams/engineering/jee-main/', badge: 'Popular' },
          { label: 'JEE Advanced', to: '/entrance-exams/engineering/jee-advanced/' },
          { label: 'BITSAT', to: '/entrance-exams/engineering/bitsat/' },
          { label: 'VITEEE', to: '/entrance-exams/engineering/viteee/' },
          { label: 'COMEDK', to: '/entrance-exams/engineering/comedk/' },
          { label: 'TG EAPCET', to: '/entrance-exams/engineering/tg-eapcet/' },
          { label: 'AP EAPCET', to: '/entrance-exams/engineering/ap-eapcet/' },
        ],
      },
      {
        heading: 'Medical',
        links: [
          { label: 'NEET UG', to: '/entrance-exams/medical/neet-ug/', badge: 'Popular' },
          { label: 'NEET PG', to: '/entrance-exams/medical/neet-pg/' },
          { label: 'INI-CET', to: '/entrance-exams/medical/ini-cet/' },
        ],
        extraHeading: 'Law',
        extraLinks: [
          { label: 'CLAT', to: '/entrance-exams/law/clat/' },
          { label: 'AILET', to: '/entrance-exams/law/ailet/' },
          { label: 'Other Law Entrances', to: '/entrance-exams/law/' },
        ],
      },
      {
        heading: 'MBA / Management',
        links: [
          { label: 'CAT', to: '/entrance-exams/mba/cat/', badge: 'Popular' },
          { label: 'XAT', to: '/entrance-exams/mba/xat/' },
          { label: 'NMAT', to: '/entrance-exams/mba/nmat/' },
          { label: 'SNAP', to: '/entrance-exams/mba/snap/' },
          { label: 'CMAT', to: '/entrance-exams/mba/cmat/' },
          { label: 'MAT', to: '/entrance-exams/mba/mat/' },
          { label: 'GMAT', to: '/entrance-exams/mba/gmat/' },
        ],
      },
      {
        heading: 'University Entrance',
        links: [
          { label: 'CUET UG', to: '/entrance-exams/university/cuet-ug/' },
          { label: 'CUET PG', to: '/entrance-exams/university/cuet-pg/' },
          { label: 'University Exams', to: '/entrance-exams/university/' },
        ],
        extraHeading: 'PG & Research',
        extraLinks: [
          { label: 'GATE', to: '/entrance-exams/pg-research/gate/' },
          { label: 'IIT JAM', to: '/entrance-exams/pg-research/iit-jam/' },
          { label: 'UGC NET', to: '/government-exams/teaching-net/ugc-net/' },
          { label: 'CSIR NET', to: '/government-exams/teaching-net/csir-net/' },
        ],
      },
      {
        heading: 'International Exams',
        links: [
          { label: 'GMAT', to: '/entrance-exams/international/gmat/' },
          { label: 'GRE', to: '/entrance-exams/international/gre/' },
          { label: 'IELTS', to: '/entrance-exams/international/ielts/' },
          { label: 'TOEFL', to: '/entrance-exams/international/toefl/' },
          { label: 'SAT', to: '/entrance-exams/international/sat/' },
        ],
      },
      {
        heading: 'Explore More',
        links: [
          { label: 'All Engineering Exams →', to: '/entrance-exams/engineering/', strong: true },
          { label: 'All Medical Exams →', to: '/entrance-exams/medical/', strong: true },
          { label: 'All MBA Exams →', to: '/entrance-exams/mba/', strong: true },
          { label: 'All Law Exams →', to: '/entrance-exams/law/', strong: true },
          { label: 'All Entrance Exams A–Z →', to: '/entrance-exams/', strong: true },
        ],
      },
    ],
  },

  {
    id: 'mega-study',
    label: 'Study Material',
    to: '/study-material/',
    allLabel: 'All Subjects →',
    eyebrow: 'Learn Every Topic Free',
    title: 'Study Material',
    desc: 'Concept lessons organised by subject, chapter and topic—reused intelligently across exams.',
    cols: 6,
    groups: [
      {
        heading: 'Quantitative Aptitude',
        links: [
          { label: 'Number System', to: '/study-material/quantitative-aptitude/number-system/' },
          { label: 'Percentages', to: '/study-material/quantitative-aptitude/percentages/' },
          { label: 'Profit & Loss', to: '/study-material/quantitative-aptitude/profit-loss/' },
          { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
          { label: 'Time & Work', to: '/study-material/quantitative-aptitude/time-work/' },
          { label: 'Time, Speed & Distance', to: '/study-material/quantitative-aptitude/time-speed-distance/' },
          { label: 'View All Quant →', to: '/study-material/quantitative-aptitude/' },
        ],
      },
      {
        heading: 'Reasoning',
        links: [
          { label: 'Coding-Decoding', to: '/study-material/reasoning/coding-decoding/' },
          { label: 'Blood Relations', to: '/study-material/reasoning/blood-relations/' },
          { label: 'Syllogism', to: '/study-material/reasoning/syllogism/' },
          { label: 'Seating Arrangement', to: '/study-material/reasoning/seating-arrangement/' },
          { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
          { label: 'Series', to: '/study-material/reasoning/series/' },
          { label: 'View All Reasoning →', to: '/study-material/reasoning/' },
        ],
      },
      {
        heading: 'English',
        links: [
          { label: 'Grammar', to: '/study-material/english/grammar/' },
          { label: 'Vocabulary', to: '/study-material/english/vocabulary/' },
          { label: 'Reading Comprehension', to: '/study-material/english/reading-comprehension/' },
          { label: 'Para Jumbles', to: '/study-material/english/para-jumbles/' },
          { label: 'Error Detection', to: '/study-material/english/error-detection/' },
          { label: 'Cloze Test', to: '/study-material/english/cloze-test/' },
        ],
      },
      {
        heading: 'General Studies',
        links: [
          { label: 'Indian & World History', to: '/study-material/history/' },
          { label: 'Geography', to: '/study-material/geography/' },
          { label: 'Indian Polity', to: '/study-material/polity/' },
          { label: 'Constitution', to: '/study-material/constitution/' },
          { label: 'Indian Economy', to: '/study-material/economy/' },
          { label: 'Environment', to: '/study-material/environment/' },
          { label: 'Science & Technology', to: '/study-material/science/' },
          { label: 'Art & Culture', to: '/study-material/art-culture/' },
        ],
      },
      {
        heading: 'Science Subjects',
        links: [
          { label: 'Physics', to: '/study-material/physics/' },
          { label: 'Chemistry', to: '/study-material/chemistry/' },
          { label: 'Mathematics', to: '/study-material/mathematics/' },
          { label: 'Biology', to: '/study-material/biology/' },
          { label: 'General Knowledge', to: '/study-material/general-knowledge/' },
          { label: 'Current Affairs', to: '/current-affairs/' },
        ],
      },
      {
        heading: 'Exam-specific Skills',
        links: [
          { label: 'VARC', to: '/study-material/varc/' },
          { label: 'DILR', to: '/study-material/dilr/' },
          { label: 'Legal Reasoning', to: '/study-material/legal-reasoning/' },
          { label: 'Explore Complete Library →', to: '/study-material/', strong: true },
        ],
      },
    ],
  },

  {
    id: 'mega-practice',
    label: 'Practice',
    to: '/practice/',
    allLabel: 'Start Practising →',
    eyebrow: 'From Learning to Selection',
    title: 'Practice',
    desc: 'Daily questions, topic practice, previous papers, sectional tests and full-length mocks.',
    cols: 4,
    groups: [
      {
        heading: 'Daily Practice',
        links: [
          { label: 'Daily Quiz', to: '/practice/daily-quiz/', badge: 'Free' },
          { label: 'Topic-wise Questions', to: '/practice/topic-wise-questions/' },
          { label: 'Question Bank', to: '/practice/question-bank/' },
        ],
      },
      {
        heading: 'Previous Questions',
        links: [
          { label: 'Previous Year Questions', to: '/previous-year-questions/' },
          { label: 'Previous Year Papers', to: '/previous-year-papers/' },
        ],
      },
      {
        heading: 'Tests',
        links: [
          { label: 'Sectional Tests', to: '/practice/sectional-tests/' },
          { label: 'Free Mock Tests', to: '/mock-tests/free/', badge: 'Free' },
          { label: 'Full Mock Tests', to: '/mock-tests/' },
        ],
      },
      {
        heading: 'Find by Exam',
        links: [
          { label: 'SSC Tests', to: '/mock-tests/ssc/' },
          { label: 'Banking Tests', to: '/mock-tests/banking/' },
          { label: 'UPSC Tests', to: '/mock-tests/upsc/' },
          { label: 'Railway Tests', to: '/mock-tests/railways/' },
          { label: 'CAT Tests', to: '/mock-tests/cat/' },
          { label: 'JEE / NEET Tests', to: '/mock-tests/jee-neet/' },
        ],
      },
    ],
  },

  {
    id: 'mega-current',
    label: 'Current Affairs',
    to: '/current-affairs/',
    allLabel: "Today's Current Affairs →",
    eyebrow: 'Updated Every Day',
    title: 'Current Affairs',
    desc: 'Daily, weekly and monthly current affairs organised by subject and exam.',
    cols: 4,
    groups: [
      {
        heading: 'By Date',
        links: [
          { label: "Today's Current Affairs", to: '/current-affairs/today/', badge: 'Today' },
          { label: 'Daily Current Affairs Quiz', to: '/current-affairs/daily-quiz/' },
          { label: 'Weekly Current Affairs', to: '/current-affairs/weekly/' },
          { label: 'Monthly Current Affairs', to: '/current-affairs/monthly/' },
          { label: 'Current Affairs PDF', to: '/current-affairs/pdf/' },
        ],
      },
      {
        heading: 'By Topic',
        links: [
          { label: 'India', to: '/current-affairs/india/' },
          { label: 'International', to: '/current-affairs/international/' },
          { label: 'Economy & Banking', to: '/current-affairs/economy-banking/' },
          { label: 'Government Schemes', to: '/current-affairs/government-schemes/' },
          { label: 'Science & Technology', to: '/current-affairs/science-technology/' },
        ],
      },
      {
        heading: 'More Topics',
        links: [
          { label: 'Environment', to: '/current-affairs/environment/' },
          { label: 'Defence', to: '/current-affairs/defence/' },
          { label: 'Awards', to: '/current-affairs/awards/' },
          { label: 'Sports', to: '/current-affairs/sports/' },
        ],
      },
      {
        heading: 'By Exam',
        links: [
          { label: 'UPSC Current Affairs', to: '/current-affairs/upsc/' },
          { label: 'SSC Current Affairs', to: '/current-affairs/ssc/' },
          { label: 'Banking Current Affairs', to: '/current-affairs/banking/' },
          { label: 'Railway Current Affairs', to: '/current-affairs/railways/' },
          { label: 'State PSC Current Affairs', to: '/current-affairs/state-psc/' },
        ],
      },
    ],
  },

  {
    id: 'mega-updates',
    label: 'Exam Updates',
    to: '/exam-updates/',
    allLabel: 'View Latest Updates →',
    eyebrow: 'Official-event Tracking',
    title: 'Exam Updates',
    desc: 'Notifications, applications, vacancies, dates, admit cards, keys, cutoffs and results.',
    cols: 4,
    groups: [
      {
        heading: 'Apply & Track',
        links: [
          { label: 'Latest Notifications', to: '/exam-updates/latest-notifications/', badge: 'Live' },
          { label: 'Government Jobs', to: '/government-jobs/' },
          { label: 'Application Forms', to: '/exam-updates/application-forms/' },
          { label: 'Exam Calendar', to: '/exam-calendar/' },
        ],
      },
      {
        heading: 'Before the Exam',
        links: [
          { label: 'Exam Dates', to: '/exam-updates/exam-dates/' },
          { label: 'Vacancies', to: '/exam-updates/vacancies/' },
          { label: 'Admit Cards', to: '/exam-updates/admit-cards/' },
        ],
      },
      {
        heading: 'After the Exam',
        links: [
          { label: 'Answer Keys', to: '/exam-updates/answer-keys/' },
          { label: 'Cut Offs', to: '/exam-updates/cut-offs/' },
          { label: 'Results', to: '/exam-updates/results/' },
        ],
      },
      {
        heading: 'Popular Update Hubs',
        links: [
          { label: 'SSC Updates', to: '/exam-updates/ssc/' },
          { label: 'UPSC Updates', to: '/exam-updates/upsc/' },
          { label: 'Banking Updates', to: '/exam-updates/banking/' },
          { label: 'Railway Updates', to: '/exam-updates/railways/' },
          { label: 'State Exam Updates', to: '/exam-updates/state/' },
        ],
      },
    ],
  },
]

/**
 * Flattened link index — used by the directory pages and the search results.
 *
 * A path can appear in several groups under different labels, so each entry
 * keeps the best-scoring one: a plain label beats a "View All … →" style link
 * that only reads well inside a menu.
 */
export const LINK_INDEX = (() => {
  const map = new Map()

  function add(to, entry) {
    const existing = map.get(to)
    if (!existing || entry.score < existing.score) map.set(to, entry)
  }

  NAV.forEach((section) => {
    add(section.to, { label: section.title, section, kind: 'section', score: 0 })
    section.groups.forEach((group) => {
      const heading = group.heading
      const all = [
        ...group.links.map((l) => [l, heading]),
        ...(group.extraLinks || []).map((l) => [l, group.extraHeading || heading]),
      ]
      all.forEach(([link, groupHeading]) => {
        const { label, score } = cleanLabel(link.label, groupHeading)
        add(link.to, { label, group: groupHeading, section, kind: 'link', score })
      })
    })
  })
  return map
})()

export const POPULAR_SEARCHES = [
  { label: 'SSC CGL', to: '/government-exams/ssc/ssc-cgl/' },
  { label: 'UPSC', to: '/government-exams/upsc/upsc-civil-services/' },
  { label: 'IBPS PO', to: '/government-exams/banking/ibps-po/' },
  { label: 'CAT', to: '/entrance-exams/mba/cat/' },
  { label: 'JEE Main', to: '/entrance-exams/engineering/jee-main/' },
  { label: 'NEET', to: '/entrance-exams/medical/neet-ug/' },
  { label: 'Previous Papers', to: '/previous-year-papers/' },
  { label: 'Free Mock Tests', to: '/mock-tests/free/' },
]

/** Condensed structure for the mobile drawer accordion. */
export const MOBILE_NAV = [
  {
    label: 'Government Exams',
    groups: NAV[0].groups.map((g) => ({ heading: g.heading, links: g.links })),
    footer: { label: 'All Government Exams A–Z', to: '/government-exams/' },
  },
  {
    label: 'Entrance Exams',
    groups: NAV[1].groups.slice(0, 5).map((g) => ({
      heading: g.extraHeading ? `${g.heading} & ${g.extraHeading}` : g.heading,
      links: [...g.links, ...(g.extraLinks || [])],
    })),
    footer: { label: 'All Entrance Exams A–Z', to: '/entrance-exams/' },
  },
  {
    label: 'Study Material',
    groups: [
      {
        heading: 'Subjects',
        links: [
          { label: 'Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
          { label: 'Reasoning', to: '/study-material/reasoning/' },
          { label: 'English', to: '/study-material/english/' },
          { label: 'General Knowledge', to: '/study-material/general-knowledge/' },
          { label: 'History', to: '/study-material/history/' },
          { label: 'Geography', to: '/study-material/geography/' },
          { label: 'Polity', to: '/study-material/polity/' },
          { label: 'Economy', to: '/study-material/economy/' },
          { label: 'Science', to: '/study-material/science/' },
          { label: 'Environment', to: '/study-material/environment/' },
          { label: 'Physics', to: '/study-material/physics/' },
          { label: 'Chemistry', to: '/study-material/chemistry/' },
          { label: 'Mathematics', to: '/study-material/mathematics/' },
          { label: 'Biology', to: '/study-material/biology/' },
          { label: 'VARC', to: '/study-material/varc/' },
          { label: 'DILR', to: '/study-material/dilr/' },
          { label: 'Legal Reasoning', to: '/study-material/legal-reasoning/' },
        ],
      },
    ],
    footer: { label: 'All Subjects', to: '/study-material/' },
  },
  {
    label: 'Practice',
    groups: [{ links: NAV[3].groups.flatMap((g) => g.links) }],
  },
  {
    label: 'Current Affairs',
    groups: [{ links: NAV[4].groups.flatMap((g) => g.links) }],
  },
  {
    label: 'Exam Updates',
    groups: [{ links: NAV[5].groups.flatMap((g) => g.links) }],
  },
]
