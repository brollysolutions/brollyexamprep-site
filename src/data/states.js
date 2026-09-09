/**
 * State government exam pages — /government-exams/state/:state/
 *
 * One record per state. Every state page renders the same three sections
 * (job categories, the group comparison table and free mock tests), so adding
 * a state means adding an entry here and nothing else.
 *
 * A state may also carry optional fields, each of which switches on a section
 * or overrides a default: `h1` and `seoTitle` when the heading and the search
 * title differ, `metaDescription`, an answer-first `intro`, a `choose`
 * checklist under the comparison table, a `qualifications` grid, a `prepare`
 * path, a `related` heading and its own `faqs`. States without them render
 * exactly as before.
 *
 * Stage structure and post lists change with each notification, which is why
 * every page carries the official-source note at the bottom.
 */

/**
 * State job pages that have a hand-written page of their own rather than the
 * generic exam layout. Everything else in a state's `jobs` list gets a page
 * when a written record for it exists in src/data/exams, and stays an
 * unlinked card until then — see StateExams.
 */
export const DEDICATED_STATE_EXAM_PAGES = new Set([
  '/government-exams/state/telangana/telangana-police/',
])

const TELANGANA = {
  slug: 'telangana',
  name: 'Telangana',
  commission: 'TGPSC',
  bodies: 'TGPSC',
  languages: 'Telugu and English',
  regionalLanguage: 'Telugu',
  groups: { entry: 'TGPSC Group 2 or Group 4', senior: 'Group 1', junior: 'Group 2' },
  title: 'Telangana Government Exams',
  h1: 'Telangana Government Exams 2026',
  seoTitle: 'Telangana Government Exams 2026 – Syllabus, Notifications & Mock Tests',
  metaDescription:
    'Explore Telangana Government Exams 2026 including TGPSC Group 1–4, Police, Teaching, Engineering and other exams. Find syllabus, previous papers and mock tests.',
  lead: 'Explore Telangana Government Exams in one place, including TGPSC Group 1, Group 2, Group 3 and Group 4, Telangana Police, teaching, engineering, forest, health and other state-level recruitment exams.',

  jobs: {
    eyebrow: 'Job categories',
    title: 'Types of Government Jobs in Telangana',
    lead: 'Recruitment runs through TGPSC for most posts, with separate boards handling police and teaching recruitment.',
    linkTo: '/government-exams/state/',
    linkLabel: 'All state exams',
    items: [
      {
        name: 'TGPSC Group 1',
        desc: 'Senior administrative and police posts including Deputy Collector and DSP.',
        stages: 'Prelims · Mains · Interview',
        to: '/government-exams/state/telangana/tgpsc-group-1/',
      },
      {
        name: 'TGPSC Group 2',
        desc: 'Degree-level executive and supervisory posts across state departments.',
        stages: 'Written · Verification',
        to: '/government-exams/state/telangana/tgpsc-group-2/',
      },
      {
        name: 'TGPSC Group 3',
        desc: 'Degree-level posts across departments and corporations.',
        stages: 'Written · Verification',
        to: '/government-exams/state/telangana/tgpsc-group-3/',
      },
      {
        name: 'TGPSC Group 4',
        desc: 'Junior assistant and ministerial posts in state offices.',
        stages: 'Written',
        to: '/government-exams/state/telangana/tgpsc-group-4/',
      },
      {
        name: 'Telangana Police',
        desc: 'Sub-Inspector and Constable recruitment across the state.',
        stages: 'Written · Physical',
        to: '/government-exams/state/telangana/telangana-police/',
      },
      {
        name: 'Teaching posts',
        desc: 'TS TET, DSC and Gurukul recruitment for school teaching posts.',
        stages: 'Written',
        to: '/government-exams/state/telangana/teaching-posts/',
      },
      {
        name: 'Technical posts',
        desc: 'AE, AEE, Assistant Scientist and Divisional Accounts Officer roles.',
        stages: 'Written · Subject paper',
        to: '/government-exams/state/telangana/technical-posts/',
      },
      {
        name: 'Panchayat Secretary',
        desc: 'Rural development and panchayat administration posts.',
        stages: 'Written',
        to: '/government-exams/state/telangana/panchayat-secretary/',
      },
      {
        name: 'Departmental tests',
        desc: 'Qualifying tests for candidates already in Telangana government service.',
        stages: 'Written',
        to: '/government-exams/state/telangana/departmental-tests/',
      },
    ],
  },

  compare: {
    eyebrow: 'Choosing a group',
    title: 'TGPSC Group 1 to Group 4 Compared',
    lead: 'Which group suits you depends on your qualification, how much time you can commit and whether you want a descriptive paper in the process.',
    caption:
      'Indicative comparison of TGPSC recruitment groups. Stage structure and post lists vary by notification — always confirm marks, papers and eligibility against the official notification for your recruitment year.',
    columns: ['Group', 'Minimum Qualification', 'Selection Stages', 'Typical Posts'],
    rows: [
      [
        'Group 1',
        'Bachelor’s degree',
        'Prelims, descriptive Mains, interview',
        'Deputy Collector, DSP, Commercial Tax Officer and other senior state-cadre posts',
      ],
      [
        'Group 2',
        'Bachelor’s degree',
        'Written examination, certificate verification',
        'Degree-level executive and supervisory posts across state departments',
      ],
      [
        'Group 3',
        'Bachelor’s degree',
        'Written examination, certificate verification',
        'A further band of degree-level posts in state departments',
      ],
      [
        'Group 4',
        'Intermediate or degree per post',
        'Written examination',
        'Junior assistant, ministerial and clerical posts',
      ],
      [
        'Technical posts',
        'Relevant engineering or commerce degree',
        'Written examination with a subject paper',
        'AE, AEE, Divisional Accounts Officer and departmental technical roles',
      ],
      [
        'Police',
        'Per notification',
        'Written test, physical measurement and efficiency tests',
        'Sub-Inspector and Constable recruitment in Telangana Police',
      ],
    ],
  },

  mocks: {
    eyebrow: 'No signup needed',
    title: 'Prepare With Telangana Government Exam Mock Tests',
    lead: 'Mock tests help you practise questions under time pressure, identify weak areas and improve your exam strategy. Choose the exam you are preparing for and practise regularly.',
    linkTo: '/mock-tests/free/',
    linkLabel: 'All free tests',
    items: [
      { cat: 'TGPSC', title: 'Group 1 Prelims Mock Test', to: '/mock-tests/tgpsc-group-1/' },
      { cat: 'TGPSC', title: 'Group 2 Mock Test', to: '/mock-tests/tgpsc-group-2/' },
      { cat: 'TGPSC', title: 'Group 3 Mock Test', to: '/mock-tests/tgpsc-group-3/' },
      { cat: 'TGPSC', title: 'Group 4 Mock Test', to: '/mock-tests/tgpsc-group-4/' },
      { cat: 'TS Police', title: 'Constable Mock Test', to: '/mock-tests/telangana-police-constable/' },
      { cat: 'TS Police', title: 'Sub-Inspector Mock Test', to: '/mock-tests/telangana-police-si/' },
      { cat: 'Teaching', title: 'TS TET Paper 1 Mock Test', to: '/mock-tests/ts-tet/' },
      { cat: 'Panchayat', title: 'Panchayat Secretary Mock Test', to: '/mock-tests/telangana-panchayat-secretary/' },
    ],
  },

  related: {
    eyebrow: 'Resources',
    title: 'Telangana Government Exam Resources',
    lead: 'Build your preparation journey around the resources that match your target examination.',
  },

  sources: [
    { label: 'Telangana Public Service Commission (TGPSC)', href: 'https://websitenew.tgpsc.gov.in/' },
    { label: 'TS Level Police Recruitment Board (TSLPRB)', href: 'https://www.tslprb.in/' },
    { label: 'Telangana School Education Department', href: 'https://schooledu.telangana.gov.in/' },
  ],
}

const ANDHRA_PRADESH = {
  slug: 'andhra-pradesh',
  name: 'Andhra Pradesh',
  commission: 'APPSC',
  bodies: 'APPSC',
  languages: 'Telugu and English',
  regionalLanguage: 'Telugu',
  groups: { entry: 'APPSC Group 2 or Group 4', senior: 'Group 1', junior: 'Group 2' },
  title: 'Andhra Pradesh Government Exams',
  h1: 'Andhra Pradesh Government Exams 2026',
  seoTitle: 'Andhra Pradesh Government Exams 2026 – Syllabus, Notifications & Mock Tests',
  metaDescription:
    'Explore Andhra Pradesh Government Exams 2026 including APPSC, AP Police, AP TET, DSC, High Court and other exams. Find syllabus, previous papers and mock tests.',
  lead: [
    'Explore Andhra Pradesh Government Exams in one place, including APPSC Group 1, Group 2, Group 3 and Group 4, AP Police, teaching, High Court, engineering, forest, health and other state-level recruitment examinations.',
    'Find exam information, eligibility guidance, syllabus, exam pattern, previous papers and mock-test preparation resources to help you choose and prepare for the right exam.',
  ],

  jobs: {
    eyebrow: 'Job categories',
    title: 'Types of Government Jobs in Andhra Pradesh',
    lead: 'Recruitment runs through APPSC for most posts, with separate boards handling police and teaching recruitment.',
    linkTo: '/government-exams/state/',
    linkLabel: 'All state exams',
    items: [
      {
        name: 'APPSC Group 1',
        desc: 'Senior administrative and police posts including Deputy Collector and DSP.',
        stages: 'Prelims · Mains · Interview',
        to: '/government-exams/state/andhra-pradesh/appsc-group-1/',
      },
      {
        name: 'APPSC Group 2',
        desc: 'Degree-level executive and supervisory posts across state departments.',
        stages: 'Screening · Mains · Verification',
        to: '/government-exams/state/andhra-pradesh/appsc-group-2/',
      },
      {
        name: 'APPSC Group 3',
        desc: 'Degree-level posts across departments and corporations.',
        stages: 'Written · Verification',
        to: '/government-exams/state/andhra-pradesh/appsc-group-3/',
      },
      {
        name: 'APPSC Group 4',
        desc: 'Junior assistant and ministerial posts in state offices.',
        stages: 'Written',
        to: '/government-exams/state/andhra-pradesh/appsc-group-4/',
      },
      {
        name: 'Andhra Pradesh Police',
        desc: 'Sub-Inspector and Constable recruitment across the state.',
        stages: 'Written · Physical',
        to: '/government-exams/state/andhra-pradesh/andhra-pradesh-police/',
      },
      {
        name: 'Teaching posts',
        desc: 'AP TET, DSC and Gurukul recruitment for school teaching posts.',
        stages: 'Written',
        to: '/government-exams/state/andhra-pradesh/teaching-posts/',
      },
      {
        name: 'Technical posts',
        desc: 'AE, AEE, Assistant Scientist and Divisional Accounts Officer roles.',
        stages: 'Written · Subject paper',
        to: '/government-exams/state/andhra-pradesh/technical-posts/',
      },
      {
        name: 'Panchayat Secretary',
        desc: 'Rural development and panchayat administration posts.',
        stages: 'Written',
        to: '/government-exams/state/andhra-pradesh/panchayat-secretary/',
      },
      {
        name: 'Departmental tests',
        desc: 'Qualifying tests for candidates already in Andhra Pradesh government service.',
        stages: 'Written',
        to: '/government-exams/state/andhra-pradesh/departmental-tests/',
      },
    ],
  },

  compare: {
    eyebrow: 'Choosing a group',
    title: 'APPSC Group 1 to Group 4 Compared',
    lead: 'Which group suits you depends on your qualification, how much time you can commit and whether you want a descriptive paper in the process.',
    caption:
      'Indicative comparison of APPSC recruitment groups. Stage structure and post lists vary by notification — always confirm marks, papers and eligibility against the official notification for your recruitment year.',
    columns: ['Group', 'Minimum Qualification', 'Selection Stages', 'Typical Posts'],
    rows: [
      [
        'Group 1',
        'Bachelor’s degree',
        'Prelims, descriptive Mains, interview',
        'Deputy Collector, DSP, Commercial Tax Officer and other senior state-cadre posts',
      ],
      [
        'Group 2',
        'Bachelor’s degree',
        'Screening test, Mains, certificate verification',
        'Degree-level executive and supervisory posts across state departments',
      ],
      [
        'Group 3',
        'Bachelor’s degree',
        'Written examination, certificate verification',
        'A further band of degree-level posts in state departments',
      ],
      [
        'Group 4',
        'Intermediate or degree per post',
        'Written examination',
        'Junior assistant, ministerial and clerical posts',
      ],
      [
        'Technical posts',
        'Relevant engineering or commerce degree',
        'Written examination with a subject paper',
        'AE, AEE, Divisional Accounts Officer and departmental technical roles',
      ],
      [
        'Police',
        'Per notification',
        'Written test, physical measurement and efficiency tests',
        'Sub-Inspector and Constable recruitment in Andhra Pradesh Police',
      ],
    ],
  },

  mocks: {
    eyebrow: 'No signup needed',
    title: 'Andhra Pradesh Government Exam Mock Tests',
    lead: 'Mock tests are an important part of competitive-exam preparation. They let you practise under time constraints, identify weak subjects and improve your accuracy before the actual examination.',
    linkTo: '/mock-tests/free/',
    linkLabel: 'All free tests',
    items: [
      { cat: 'APPSC', title: 'Group 1 Prelims Mock Test', to: '/mock-tests/appsc-group-1/' },
      { cat: 'APPSC', title: 'Group 2 Mock Test', to: '/mock-tests/appsc-group-2/' },
      { cat: 'APPSC', title: 'Group 3 Mock Test', to: '/mock-tests/appsc-group-3/' },
      { cat: 'APPSC', title: 'Group 4 Mock Test', to: '/mock-tests/appsc-group-4/' },
      { cat: 'AP Police', title: 'Constable Mock Test', to: '/mock-tests/ap-police-constable/' },
      { cat: 'AP Police', title: 'Sub-Inspector Mock Test', to: '/mock-tests/ap-police-si/' },
      { cat: 'Teaching', title: 'AP TET Paper 1 Mock Test', to: '/mock-tests/ap-tet/' },
      { cat: 'Panchayat', title: 'Panchayat Secretary Mock Test', to: '/mock-tests/ap-panchayat-secretary/' },
    ],
  },

  related: {
    eyebrow: 'Resources',
    title: 'Andhra Pradesh Government Exam Preparation Resources',
    lead: 'Preparation resources organised around your target examination.',
  },

  sources: [
    { label: 'Andhra Pradesh Public Service Commission (APPSC)', href: 'https://psc.ap.gov.in/' },
    { label: 'AP State Level Police Recruitment Board (APSLPRB)', href: 'https://slprb.ap.gov.in/' },
    { label: 'AP School Education Department', href: 'https://cse.ap.gov.in/' },
  ],
}

const TAMIL_NADU = {
  slug: 'tamil-nadu',
  name: 'Tamil Nadu',
  commission: 'TNPSC',
  bodies: 'TNPSC',
  languages: 'Tamil and English',
  regionalLanguage: 'Tamil',
  groups: { entry: 'TNPSC Group 2A or Group 4', senior: 'Group 1', junior: 'Group 2' },
  title: 'Tamil Nadu Government Exams',
  h1: 'Tamil Nadu Government Exams 2026',
  seoTitle: 'Tamil Nadu Government Exams 2026 – Syllabus, Notifications & Mock Tests',
  lead: 'TNPSC Group 1, Group 2, Group 2A and Group 4, Tamil Nadu Police, teaching and technical recruitment — syllabus, exam pattern, previous papers and free mock tests for every state-level exam.',

  metaDescription:
    'Explore Tamil Nadu Government Exams 2026 including TNPSC, TNUSRB Police, TNTET, TRB, MRB and other exams. Find syllabus, previous papers and mock tests.',

  intro: {
    eyebrow: 'In short',
    title: 'What Are Tamil Nadu Government Exams?',
    answer:
      'Tamil Nadu government exams are the competitive examinations and recruitment processes conducted by the state’s commissions, recruitment boards and departments to select candidates for government posts and services.',
    lead: 'Four bodies run most of it — TNPSC for the Group exams and combined technical services, TNUSRB for police and uniformed services, the Teachers Recruitment Board for TNTET and teaching posts, and the Medical Services Recruitment Board for medical and healthcare recruitment. Vacancies, qualifications, dates and selection stages are set by the individual notification.',
  },

  jobs: {
    eyebrow: 'Job categories',
    title: 'Types of Government Jobs in Tamil Nadu',
    lead: 'Recruitment runs through TNPSC for most posts, with TNUSRB handling police recruitment and the Teachers Recruitment Board handling teaching posts.',
    linkTo: '/government-exams/state/',
    linkLabel: 'All state exams',
    items: [
      {
        name: 'TNPSC Group 1',
        desc: 'Senior administrative and police posts including Deputy Collector and DSP.',
        stages: 'Prelims · Mains · Interview',
        to: '/government-exams/state/tamil-nadu/tnpsc-group-1/',
      },
      {
        name: 'TNPSC Group 2',
        desc: 'Degree-level interview posts across state departments.',
        stages: 'Prelims · Mains · Oral test',
        to: '/government-exams/state/tamil-nadu/tnpsc-group-2/',
      },
      {
        name: 'TNPSC Group 2A',
        desc: 'Degree-level non-interview posts in state departments.',
        stages: 'Prelims · Mains · Verification',
        to: '/government-exams/state/tamil-nadu/tnpsc-group-2a/',
      },
      {
        name: 'TNPSC Group 4',
        desc: 'Junior Assistant, Typist and Steno-Typist posts in state offices.',
        stages: 'Written',
        to: '/government-exams/state/tamil-nadu/tnpsc-group-4/',
      },
      {
        name: 'Tamil Nadu Police',
        desc: 'Sub-Inspector and Constable recruitment through TNUSRB.',
        stages: 'Written · Physical',
        to: '/government-exams/state/tamil-nadu/tamil-nadu-police/',
      },
      {
        name: 'Teaching posts',
        desc: 'TN TET and Teachers Recruitment Board posts for school teaching.',
        stages: 'Written',
        to: '/government-exams/state/tamil-nadu/teaching-posts/',
      },
      {
        name: 'Technical posts',
        desc: 'AE, AEE and Combined Engineering Services roles.',
        stages: 'Written · Subject paper',
        to: '/government-exams/state/tamil-nadu/technical-posts/',
      },
      {
        name: 'Village Administrative Officer',
        desc: 'Revenue and village administration posts, recruited within Group 4.',
        stages: 'Written',
        to: '/government-exams/state/tamil-nadu/village-administrative-officer/',
      },
      {
        name: 'Departmental tests',
        desc: 'Qualifying tests for candidates already in Tamil Nadu government service.',
        stages: 'Written',
        to: '/government-exams/state/tamil-nadu/departmental-tests/',
      },
      {
        name: 'Medical and health posts',
        desc: 'MRB recruitment for Assistant Surgeon, nursing, pharmacy and allied-health roles.',
        stages: 'Written · Verification',
        to: '/government-exams/state/tamil-nadu/mrb-recruitment/',
      },
    ],
  },

  compare: {
    eyebrow: 'Choosing a group',
    title: 'TNPSC Group 1 to Group 4 Compared',
    lead: 'Which group suits you depends on your qualification, how much time you can commit and whether you want a descriptive paper and an oral test in the process.',
    caption:
      'Indicative comparison of TNPSC recruitment groups. Stage structure and post lists vary by notification — always confirm marks, papers and eligibility against the official notification for your recruitment year.',
    columns: ['Group', 'Minimum Qualification', 'Selection Stages', 'Typical Posts'],
    rows: [
      [
        'Group 1',
        'Bachelor’s degree',
        'Prelims, descriptive Mains, interview',
        'Deputy Collector, DSP, Assistant Commissioner and other senior state-cadre posts',
      ],
      [
        'Group 2',
        'Bachelor’s degree',
        'Prelims, Mains, oral test',
        'Degree-level interview posts across state departments',
      ],
      [
        'Group 2A',
        'Bachelor’s degree',
        'Prelims, Mains, certificate verification',
        'Degree-level non-interview posts in state departments',
      ],
      [
        'Group 4',
        'SSLC or higher per post',
        'Written examination, certificate verification',
        'Junior Assistant, Typist, Steno-Typist and Village Administrative Officer',
      ],
      [
        'Technical posts',
        'Relevant engineering or commerce degree',
        'Written examination with a subject paper',
        'AE, AEE and Combined Engineering Services roles',
      ],
      [
        'Police',
        'Per notification',
        'Written test, physical measurement and efficiency tests',
        'Sub-Inspector and Constable recruitment through TNUSRB',
      ],
    ],
  },

  choose: {
    title: 'How to Choose the Right Tamil Nadu Exam',
    items: [
      {
        name: 'Check eligibility',
        desc: 'Verify the educational qualification, age limit and post-specific requirements set out in the notification.',
      },
      {
        name: 'Compare the syllabus',
        desc: 'Pick the examinations whose subjects overlap with what you are already strong at.',
      },
      {
        name: 'Understand the selection',
        desc: 'Prelims, mains, physical tests, skill tests, oral tests and certificate verification differ group by group.',
      },
      {
        name: 'Check the job profile',
        desc: 'Read the department, the day-to-day responsibilities and the promotion path before committing years to it.',
      },
      {
        name: 'Compare your resources',
        desc: 'Make sure syllabus, previous papers, practice questions and mock tests actually exist for that exam.',
      },
    ],
  },

  qualifications: {
    eyebrow: 'Where you fit',
    title: 'Tamil Nadu Government Exams by Qualification',
    lead: 'The qualification bar is set post by post in the notification. Start from the level you already hold, then read the eligibility clause of the recruitment you are aiming at.',
    items: [
      {
        icon: 'layers',
        name: 'SSLC and 10th pass',
        desc: 'Group 4 support posts and uniformed-service recruitment where the notification accepts Secondary School qualification.',
      },
      {
        icon: 'book',
        name: 'HSC and 12th pass',
        desc: 'Junior Assistant, Typist, Steno-Typist and Constable-level recruitment that asks for higher-secondary schooling.',
      },
      {
        icon: 'user',
        name: 'Graduates',
        desc: 'TNPSC Group 1, Group 2 and Group 2A, Sub-Inspector recruitment, TNTET and TRB teaching posts.',
      },
      {
        icon: 'chart',
        name: 'Engineering graduates',
        desc: 'AE, AEE and Combined Engineering Services recruitment, plus diploma and ITI technical posts.',
      },
      {
        icon: 'check',
        name: 'Medical and healthcare',
        desc: 'MRB recruitment for Assistant Surgeon, nursing, pharmacy, laboratory and allied-health posts.',
      },
      {
        icon: 'doc',
        name: 'Specialised departments',
        desc: 'Agriculture, fisheries, forest and revenue recruitment, released as those departments notify vacancies.',
      },
    ],
  },

  prepare: {
    eyebrow: 'Preparation path',
    title: 'How to Prepare for Tamil Nadu Government Exams',
    lead: 'Four steps that take you from the notification to a measured score, in the order that saves the most study time.',
    steps: [
      {
        n: '1',
        title: 'Study the official syllabus',
        desc: 'Split the current syllabus into subjects and topics before you read anything else.',
      },
      {
        n: '2',
        title: 'Understand the exam pattern',
        desc: 'Check the question count, marks, duration and whether negative marking applies to your paper.',
      },
      {
        n: '3',
        title: 'Practise previous papers',
        desc: 'Read the question style, the difficulty and the areas that come back year after year.',
      },
      {
        n: '4',
        title: 'Take mock tests',
        desc: 'Build speed, accuracy and time management under exam conditions, then fix the costliest section.',
      },
    ],
    note: 'Tamil Nadu-focused preparation: depending on the examination, expect Tamil Nadu history, geography, economy, polity and culture, state government schemes, a Tamil-language paper and current affairs.',
  },

  mocks: {
    eyebrow: 'No signup needed',
    title: 'Free Mock Tests in Tamil and English',
    lead: 'Full-length papers on the current pattern, with a section and topic breakdown after every attempt.',
    linkTo: '/mock-tests/free/',
    linkLabel: 'All free tests',
    items: [
      { cat: 'TNPSC', title: 'Group 1 Prelims Mock Test', to: '/mock-tests/tnpsc-group-1/' },
      { cat: 'TNPSC', title: 'Group 2 Mock Test', to: '/mock-tests/tnpsc-group-2/' },
      { cat: 'TNPSC', title: 'Group 2A Mock Test', to: '/mock-tests/tnpsc-group-2a/' },
      { cat: 'TNPSC', title: 'Group 4 Mock Test', to: '/mock-tests/tnpsc-group-4/' },
      { cat: 'TN Police', title: 'Constable Mock Test', to: '/mock-tests/tamil-nadu-police-constable/' },
      { cat: 'TN Police', title: 'Sub-Inspector Mock Test', to: '/mock-tests/tamil-nadu-police-si/' },
      { cat: 'Teaching', title: 'TN TET Paper 1 Mock Test', to: '/mock-tests/tn-tet/' },
      { cat: 'Revenue', title: 'VAO Mock Test', to: '/mock-tests/tamil-nadu-vao/' },
    ],
  },

  faqs: [
    {
      q: 'What are the major Tamil Nadu government exams?',
      a: 'The main ones are TNPSC Group 1, Group 2, Group 2A and Group 4, TNUSRB police recruitment, TNTET and TRB teacher recruitment, MRB medical recruitment and the Combined Technical Services examinations, alongside department-specific recruitment.',
    },
    {
      q: 'What is TNPSC?',
      a: 'TNPSC is the Tamil Nadu Public Service Commission. It conducts the Group examinations and the technical services recruitment that fill most Tamil Nadu government services and posts.',
    },
    {
      q: 'What is TNTET?',
      a: 'TNTET is the Tamil Nadu Teacher Eligibility Test, conducted through the Teachers Recruitment Board. Clearing it establishes eligibility to be recruited as a teacher; it is not itself a recruitment.',
    },
    {
      q: 'What is TNUSRB?',
      a: 'TNUSRB is the Tamil Nadu Uniformed Services Recruitment Board. It conducts Sub-Inspector, Constable and other uniformed-service recruitment, each with a written test alongside physical measurement and efficiency tests.',
    },
    {
      q: 'What is MRB?',
      a: 'MRB is the Tamil Nadu Medical Services Recruitment Board. It recruits for Assistant Surgeon, nursing, pharmacy, laboratory and other medical and healthcare posts in the state health services.',
    },
    {
      q: 'Which Tamil Nadu government exams are available after graduation?',
      a: 'Graduates can sit TNPSC Group 1, Group 2 and Group 2A, TNUSRB Sub-Inspector recruitment, TNTET and TRB teaching recruitment, and the technical services examinations where the degree matches — subject to the eligibility rules of each notification.',
    },
    {
      q: 'Where can I find Tamil Nadu government exam preparation resources?',
      a: 'Work from the exam you are targeting: read its official syllabus and exam pattern, practise the previous papers, then use the free mock tests on this page to measure where you actually stand.',
    },
  ],

  sources: [
    { label: 'Tamil Nadu Public Service Commission (TNPSC)', href: 'https://www.tnpsc.gov.in/' },
    { label: 'TN Uniformed Services Recruitment Board (TNUSRB)', href: 'https://www.tnusrb.tn.gov.in/' },
    { label: 'Teachers Recruitment Board, Tamil Nadu (TRB)', href: 'https://trb.tn.gov.in/' },
    { label: 'Medical Services Recruitment Board (MRB)', href: 'https://www.mrb.tn.gov.in/' },
  ],
}

const KARNATAKA = {
  slug: 'karnataka',
  name: 'Karnataka',
  commission: 'KPSC',
  bodies: 'KPSC and KEA',
  languages: 'Kannada and English',
  regionalLanguage: 'Kannada',
  groups: { entry: 'KPSC Group C or the FDA and SDA posts', senior: 'KAS', junior: 'Group C' },
  title: 'Karnataka Government Exams',
  h1: 'Karnataka Government Exams 2026',
  seoTitle: 'Karnataka Government Exams 2026 – Syllabus, Notifications & Mock Tests',
  lead: 'KPSC KAS, Group B and Group C posts, Karnataka Police, teaching and technical recruitment — syllabus, exam pattern, previous papers and free mock tests for every state-level exam.',

  metaDescription:
    'Explore Karnataka Government Exams 2026 including KPSC, KAS, Karnataka Police, KARTET, KEA and other exams. Find syllabus, previous papers and mock tests.',

  intro: {
    eyebrow: 'In short',
    title: 'What Are Karnataka Government Exams?',
    answer:
      'Karnataka government exams are the competitive examinations and recruitment processes conducted by Karnataka’s commissions, recruitment authorities, boards and departments to fill state public-service posts.',
    lead: 'Administrative, police, teaching, technical and revenue recruitment all sit under that heading, and each one sets its own eligibility, vacancies, dates and selection stages. Confirm the current notification before you apply.',
  },

  jobs: {
    eyebrow: 'Job categories',
    title: 'Types of Government Jobs in Karnataka',
    lead: 'Recruitment runs through KPSC for gazetted posts, with KEA handling most Group C recruitment and separate boards handling police and teaching posts.',
    linkTo: '/government-exams/state/',
    linkLabel: 'All state exams',
    items: [
      {
        name: 'KPSC KAS',
        desc: 'Gazetted Probationer posts including Assistant Commissioner and DySP.',
        stages: 'Prelims · Mains · Interview',
        to: '/government-exams/state/karnataka/kpsc-kas/',
      },
      {
        name: 'KPSC Group B',
        desc: 'Non-gazetted degree-level supervisory posts across state departments.',
        stages: 'Written · Verification',
        to: '/government-exams/state/karnataka/kpsc-group-b/',
      },
      {
        name: 'KPSC Group C',
        desc: 'Degree-level posts across departments and corporations.',
        stages: 'Written · Verification',
        to: '/government-exams/state/karnataka/kpsc-group-c/',
      },
      {
        name: 'FDA and SDA posts',
        desc: 'First and Second Division Assistant posts in state offices.',
        stages: 'Written · Kannada test',
        to: '/government-exams/state/karnataka/fda-and-sda-posts/',
      },
      {
        name: 'Karnataka Police',
        desc: 'Police Sub-Inspector and Constable recruitment across the state.',
        stages: 'Written · Physical',
        to: '/government-exams/state/karnataka/karnataka-police/',
      },
      {
        name: 'Teaching posts',
        desc: 'Karnataka TET and GPSTR recruitment for school teaching posts.',
        stages: 'Written',
        to: '/government-exams/state/karnataka/teaching-posts/',
      },
      {
        name: 'Technical posts',
        desc: 'AE, AEE, JE and Assistant Statistical Officer roles.',
        stages: 'Written · Subject paper',
        to: '/government-exams/state/karnataka/technical-posts/',
      },
      {
        name: 'Village Accountant',
        desc: 'Revenue and village administration posts in the districts.',
        stages: 'Written',
        to: '/government-exams/state/karnataka/village-accountant/',
      },
      {
        name: 'Departmental tests',
        desc: 'Qualifying tests for candidates already in Karnataka government service.',
        stages: 'Written',
        to: '/government-exams/state/karnataka/departmental-tests/',
      },
    ],
  },

  compare: {
    eyebrow: 'Choosing a group',
    title: 'KPSC Group A to Group C Compared',
    lead: 'Karnataka groups its posts A to C rather than 1 to 4. Which one suits you depends on your qualification, how much time you can commit and whether you want a descriptive paper in the process.',
    caption:
      'Indicative comparison of Karnataka recruitment groups. Stage structure, conducting body and post lists vary by notification — always confirm marks, papers and eligibility against the official notification for your recruitment year.',
    columns: ['Group', 'Minimum Qualification', 'Selection Stages', 'Typical Posts'],
    rows: [
      [
        'KAS (Group A and B)',
        'Bachelor’s degree',
        'Prelims, descriptive Mains, interview',
        'Assistant Commissioner, DySP, Commercial Tax Officer and other senior state-cadre posts',
      ],
      [
        'Group B (non-gazetted)',
        'Bachelor’s degree',
        'Written examination, certificate verification',
        'Non-gazetted supervisory posts across state departments',
      ],
      [
        'Group C',
        'Bachelor’s degree',
        'Written examination, certificate verification',
        'Degree-level posts in state departments and corporations',
      ],
      [
        'FDA and SDA',
        'Degree for FDA, PUC for SDA',
        'Written examination, Kannada language test',
        'First and Second Division Assistant and ministerial posts',
      ],
      [
        'Technical posts',
        'Relevant engineering or commerce degree',
        'Written examination with a subject paper',
        'AE, AEE, JE and departmental technical roles',
      ],
      [
        'Police',
        'Per notification',
        'Written test, physical standard and endurance tests',
        'Police Sub-Inspector and Constable recruitment in Karnataka State Police',
      ],
    ],
  },

  qualifications: {
    eyebrow: 'Where you fit',
    title: 'Karnataka Government Exams by Qualification',
    lead: 'The qualification bar is set post by post in the notification. Start from the level you already hold, then read the eligibility clause of the recruitment you are aiming at.',
    items: [
      {
        icon: 'layers',
        name: 'SSLC and 10th pass',
        desc: 'Group D, support and departmental posts where the notification accepts SSLC or an equivalent qualification.',
      },
      {
        icon: 'book',
        name: 'PUC and 12th pass',
        desc: 'SDA, ministerial and constable-level recruitment that asks for higher-secondary schooling.',
      },
      {
        icon: 'user',
        name: 'Graduates',
        desc: 'KAS, KPSC Group B and Group C, FDA, Police Sub-Inspector and most officer-level recruitment.',
      },
      {
        icon: 'chart',
        name: 'Engineering degree or diploma',
        desc: 'AE, AEE and JE posts in the engineering, water resources and municipal departments.',
      },
      {
        icon: 'check',
        name: 'Teaching qualifications',
        desc: 'KARTET and GPSTR recruitment for candidates holding D.El.Ed, B.Ed or an equivalent teaching qualification.',
      },
      {
        icon: 'doc',
        name: 'Professional qualifications',
        desc: 'Medical, legal, agriculture, veterinary and other specialised recruitment tied to a professional degree.',
      },
    ],
  },

  prepare: {
    eyebrow: 'Preparation path',
    title: 'How to Prepare for Karnataka Government Exams',
    lead: 'Four steps that take you from the notification to a measured score, in the order that saves the most study time.',
    steps: [
      {
        n: '1',
        title: 'Check eligibility',
        desc: 'Read the latest official notification for qualification, age, category and post requirements before you plan anything.',
      },
      {
        n: '2',
        title: 'Study the syllabus',
        desc: 'Build a topic-wise plan around the applicable syllabus and exam pattern rather than a general reading list.',
      },
      {
        n: '3',
        title: 'Practise previous papers',
        desc: 'Use past papers to see the question style, the recurring topics and the depth each subject is actually asked at.',
      },
      {
        n: '4',
        title: 'Take mock tests',
        desc: 'Measure speed, accuracy and time management with full-length timed tests, then work on the costliest section.',
      },
    ],
    note: 'Karnataka-focused preparation: depending on the examination, expect Karnataka history, geography, economy, polity and culture, state government schemes, a Kannada-language component and current affairs.',
  },

  mocks: {
    eyebrow: 'No signup needed',
    title: 'Free Mock Tests in Kannada and English',
    lead: 'Full-length papers on the current pattern, with a section and topic breakdown after every attempt.',
    linkTo: '/mock-tests/free/',
    linkLabel: 'All free tests',
    items: [
      { cat: 'KPSC', title: 'KAS Prelims Mock Test', to: '/mock-tests/kpsc-kas/' },
      { cat: 'KPSC', title: 'Group B Mock Test', to: '/mock-tests/kpsc-group-b/' },
      { cat: 'KPSC', title: 'Group C Mock Test', to: '/mock-tests/kpsc-group-c/' },
      { cat: 'KEA', title: 'FDA Mock Test', to: '/mock-tests/karnataka-fda/' },
      { cat: 'KA Police', title: 'Constable Mock Test', to: '/mock-tests/karnataka-police-constable/' },
      { cat: 'KA Police', title: 'Sub-Inspector Mock Test', to: '/mock-tests/karnataka-police-psi/' },
      { cat: 'Teaching', title: 'Karnataka TET Paper 1 Mock Test', to: '/mock-tests/karnataka-tet/' },
      { cat: 'Revenue', title: 'Village Accountant Mock Test', to: '/mock-tests/karnataka-village-accountant/' },
    ],
  },

  faqs: [
    {
      q: 'Which are the government exams in Karnataka?',
      a: 'Karnataka runs state-level recruitment through bodies such as KPSC, the Karnataka Examinations Authority, Karnataka State Police and individual departments. Candidates in the state can also sit national examinations — UPSC, SSC, banking and railway recruitment — wherever they meet the eligibility.',
    },
    {
      q: 'Is there any government exam today in Karnataka?',
      a: 'Exam dates are set notification by notification, by each recruiting body, so there is no fixed daily schedule. Check the current notification or exam calendar of the authority conducting your post before you rely on a date.',
    },
    {
      q: 'What are the competitive exams after 12th in Karnataka?',
      a: 'After Class 12 you can look at NDA and the state posts whose notifications accept PUC — SDA, constable and similar ministerial recruitment. KPSC, officer-level and most graduate recruitment need a bachelor’s degree, so read the eligibility clause for each notification.',
    },
    {
      q: 'What competitive exams can I take after my degree in Karnataka?',
      a: 'Graduates can sit KPSC KAS, KPSC Group B and Group C, FDA, Karnataka Police Sub-Inspector recruitment, KARTET and GPSTR, alongside SSC CGL, UPSC Civil Services, banking and railway recruitment — subject to the eligibility rules of each notification.',
    },
    {
      q: 'How can I get the Karnataka government exams list?',
      a: 'Use the job categories above to identify the exam category you qualify for, then check the current notifications and calendars published by that recruiting authority. The list moves as vacancies and recruitment notifications are released.',
    },
    {
      q: 'Who conducts government exams in Karnataka?',
      a: 'It depends on the post. KPSC conducts recruitment for gazetted and several non-gazetted state services, KEA handles much of the Group C recruitment, and police, teaching and technical departments conduct their own examinations.',
    },
    {
      q: 'What are the eligibility criteria for government jobs in Karnataka?',
      a: 'Eligibility varies by post and recruiting body. Educational qualification, age limit, reservation and category rules, Kannada-language requirements, physical standards and other conditions are all specified in the individual official notification.',
    },
    {
      q: 'What is the age limit for Karnataka government exams?',
      a: 'There is no single age limit across Karnataka government exams. Upper and lower limits vary by examination, post and category, so check the applicable recruitment notification before applying.',
    },
  ],

  sources: [
    { label: 'Karnataka Public Service Commission (KPSC)', href: 'https://kpsc.kar.nic.in/' },
      { label: 'Karnataka Examinations Authority (KEA)', href: 'https://cetonline.karnataka.gov.in/kea/' },
    { label: 'Karnataka State Police', href: 'https://ksp.karnataka.gov.in/' },
  ],
}

const MAHARASHTRA = {
  slug: 'maharashtra',
  name: 'Maharashtra',
  commission: 'MPSC',
  bodies: 'MPSC',
  languages: 'Marathi and English',
  regionalLanguage: 'Marathi',
  groups: {
    entry: 'MPSC Group C or the Talathi and Zilla Parishad posts',
    senior: 'Rajyaseva',
    junior: 'Group B',
  },
  title: 'Maharashtra Government Exams',
  h1: 'Maharashtra Government Exams 2026',
  seoTitle: 'Maharashtra Government Exams 2026 – Syllabus, Notifications & Mock Tests',
  metaDescription:
    'Explore Maharashtra Government Exams 2026 including MPSC Rajyaseva, Police, Talathi, TET and other exams. Find syllabus, previous papers and mock tests.',
  lead: 'Explore Maharashtra Government Exams in one place, including MPSC Rajyaseva, Group B and Group C, Maharashtra Police, Talathi, teaching, technical and Zilla Parishad posts, and other state-level recruitment exams.',

  jobs: {
    eyebrow: 'Job categories',
    title: 'Types of Government Jobs in Maharashtra',
    lead: 'Recruitment runs through MPSC for most posts, with district administrations and Zilla Parishads recruiting separately for revenue and rural posts.',
    linkTo: '/government-exams/state/',
    linkLabel: 'All state exams',
    items: [
      {
        name: 'MPSC Rajyaseva',
        desc: 'Senior administrative and police posts including Deputy Collector and DySP.',
        stages: 'Prelims · Mains · Interview',
        to: '/government-exams/state/maharashtra/mpsc-rajyaseva/',
      },
      {
        name: 'MPSC Group B',
        desc: 'Sub-Inspector, Sales Tax Inspector and Assistant Section Officer posts.',
        stages: 'Prelims · Mains · Interview',
        to: '/government-exams/state/maharashtra/mpsc-group-b/',
      },
      {
        name: 'MPSC Group C',
        desc: 'Tax Assistant, Clerk-Typist and Technical Assistant posts.',
        stages: 'Prelims · Mains · Skill test',
        to: '/government-exams/state/maharashtra/mpsc-group-c/',
      },
      {
        name: 'Talathi',
        desc: 'Village revenue and land record posts in the districts.',
        stages: 'Written',
        to: '/government-exams/state/maharashtra/talathi/',
      },
      {
        name: 'Maharashtra Police',
        desc: 'Police Constable and Driver recruitment across the state.',
        stages: 'Written · Physical',
        to: '/government-exams/state/maharashtra/maharashtra-police/',
      },
      {
        name: 'Teaching posts',
        desc: 'MAHA TET and TAIT recruitment for school teaching posts.',
        stages: 'Written',
        to: '/government-exams/state/maharashtra/teaching-posts/',
      },
      {
        name: 'Technical posts',
        desc: 'AE, Engineering Services, Agriculture and Forest Services roles.',
        stages: 'Written · Subject paper',
        to: '/government-exams/state/maharashtra/technical-posts/',
      },
      {
        name: 'Zilla Parishad posts',
        desc: 'Gram Sevak, Health Worker and Junior Assistant posts in rural administration.',
        stages: 'Written',
        to: '/government-exams/state/maharashtra/zilla-parishad-posts/',
      },
      {
        name: 'Departmental tests',
        desc: 'Qualifying tests for candidates already in Maharashtra government service.',
        stages: 'Written',
        to: '/government-exams/state/maharashtra/departmental-tests/',
      },
    ],
  },

  compare: {
    eyebrow: 'Choosing a group',
    title: 'MPSC Rajyaseva, Group B and Group C Compared',
    lead: 'Maharashtra names its bands Rajyaseva, Group B and Group C rather than 1 to 4. Which one suits you depends on your qualification, how much time you can commit and whether you want a descriptive paper in the process.',
    caption:
      'Indicative comparison of Maharashtra recruitment bands. Stage structure, conducting body and post lists vary by notification — always confirm marks, papers and eligibility against the official notification for your recruitment year.',
    columns: ['Group', 'Minimum Qualification', 'Selection Stages', 'Typical Posts'],
    rows: [
      [
        'Rajyaseva',
        'Bachelor’s degree',
        'Prelims, descriptive Mains, interview',
        'Deputy Collector, DySP, Tehsildar and other senior state-cadre posts',
      ],
      [
        'Group B',
        'Bachelor’s degree',
        'Prelims, Mains, then physical test or interview per post',
        'Police Sub-Inspector, Sales Tax Inspector and Assistant Section Officer',
      ],
      [
        'Group C',
        'Degree or HSC per post',
        'Prelims, Mains, skill test',
        'Tax Assistant, Clerk-Typist and Technical Assistant',
      ],
      [
        'Talathi and Zilla Parishad',
        'HSC or degree per post',
        'Written examination, document verification',
        'Talathi, Gram Sevak, Junior Assistant and other district-level posts',
      ],
      [
        'Technical posts',
        'Relevant engineering or agriculture degree',
        'Prelims and Mains with a subject paper',
        'AE, Engineering Services, Agriculture and Forest Services roles',
      ],
      [
        'Police',
        'Per notification',
        'Written test, physical measurement and efficiency tests',
        'Police Constable and Driver recruitment in Maharashtra Police',
      ],
    ],
  },

  mocks: {
    eyebrow: 'No signup needed',
    title: 'Free Mock Tests in Marathi and English',
    lead: 'Full-length papers on the current pattern, with a section and topic breakdown after every attempt.',
    linkTo: '/mock-tests/free/',
    linkLabel: 'All free tests',
    items: [
      { cat: 'MPSC', title: 'Rajyaseva Prelims Mock Test', to: '/mock-tests/mpsc-rajyaseva/' },
      { cat: 'MPSC', title: 'Group B Prelims Mock Test', to: '/mock-tests/mpsc-group-b/' },
      { cat: 'MPSC', title: 'Group C Prelims Mock Test', to: '/mock-tests/mpsc-group-c/' },
      { cat: 'MPSC', title: 'PSI Mock Test', to: '/mock-tests/mpsc-psi/' },
      { cat: 'Revenue', title: 'Talathi Mock Test', to: '/mock-tests/maharashtra-talathi/' },
      { cat: 'MH Police', title: 'Constable Mock Test', to: '/mock-tests/maharashtra-police-constable/' },
      { cat: 'Teaching', title: 'MAHA TET Paper 1 Mock Test', to: '/mock-tests/maha-tet/' },
      { cat: 'Zilla Parishad', title: 'Gram Sevak Mock Test', to: '/mock-tests/maharashtra-gram-sevak/' },
    ],
  },

  sources: [
    { label: 'Maharashtra Public Service Commission (MPSC)', href: 'https://mpsc.gov.in/' },
    { label: 'Maharashtra Police', href: 'https://www.mahapolice.gov.in/' },
    { label: 'Maharashtra Teacher Eligibility Test (MAHA TET)', href: 'https://mahatet.in/' },
  ],
}

const UTTAR_PRADESH = {
  slug: 'uttar-pradesh',
  name: 'Uttar Pradesh',
  commission: 'UPPSC',
  bodies: 'UPPSC and UPSSSC',
  languages: 'Hindi and English',
  regionalLanguage: 'Hindi',
  groups: {
    entry: 'the UPSSSC Group C and Lekhpal posts',
    senior: 'UPPSC PCS',
    junior: 'RO and ARO',
  },
  title: 'Uttar Pradesh Government Exams',
  h1: 'Uttar Pradesh Government Exams 2026',
  seoTitle: 'Uttar Pradesh Government Exams 2026 – Syllabus, Notifications & Mock Tests',
  metaDescription:
    'Explore Uttar Pradesh Government Exams 2026 including UPPSC PCS, UPSSSC PET, UP Police, UPTET and other exams. Find syllabus, previous papers and mock tests.',
  lead: 'Explore Uttar Pradesh Government Exams in one place, including UPPSC PCS and RO/ARO, UPSSSC PET and Lekhpal, Uttar Pradesh Police, teaching, technical and Junior Assistant posts, and other state-level recruitment exams.',

  jobs: {
    eyebrow: 'Job categories',
    title: 'Types of Government Jobs in Uttar Pradesh',
    lead: 'Gazetted posts run through UPPSC and Group C recruitment through UPSSSC, with separate boards handling police and basic education teaching posts.',
    linkTo: '/government-exams/state/',
    linkLabel: 'All state exams',
    items: [
      {
        name: 'UPPSC PCS',
        desc: 'Senior administrative and police posts including SDM and DSP.',
        stages: 'Prelims · Mains · Interview',
        to: '/government-exams/state/uttar-pradesh/uppsc-pcs/',
      },
      {
        name: 'UPPSC RO and ARO',
        desc: 'Review Officer and Assistant Review Officer posts in state offices.',
        stages: 'Prelims · Mains · Typing test',
        to: '/government-exams/state/uttar-pradesh/uppsc-ro-and-aro/',
      },
      {
        name: 'UPSSSC PET',
        desc: 'The Preliminary Eligibility Test that gates most Group C recruitment.',
        stages: 'PET · Mains',
        to: '/government-exams/state/uttar-pradesh/upsssc-pet/',
      },
      {
        name: 'UPSSSC Lekhpal',
        desc: 'Revenue and village record-keeping posts in the districts.',
        stages: 'PET · Mains',
        to: '/government-exams/state/uttar-pradesh/upsssc-lekhpal/',
      },
      {
        name: 'Uttar Pradesh Police',
        desc: 'Sub-Inspector and Constable recruitment across the state.',
        stages: 'Written · Physical',
        to: '/government-exams/state/uttar-pradesh/uttar-pradesh-police/',
      },
      {
        name: 'Teaching posts',
        desc: 'UPTET, Super TET and UP basic education recruitment.',
        stages: 'Written',
        to: '/government-exams/state/uttar-pradesh/teaching-posts/',
      },
      {
        name: 'Technical posts',
        desc: 'AE, JE and Assistant Statistical Officer roles.',
        stages: 'Written · Subject paper',
        to: '/government-exams/state/uttar-pradesh/technical-posts/',
      },
      {
        name: 'Junior Assistant posts',
        desc: 'Ministerial and clerical posts in state offices.',
        stages: 'PET · Mains · Typing test',
        to: '/government-exams/state/uttar-pradesh/junior-assistant-posts/',
      },
      {
        name: 'Departmental tests',
        desc: 'Qualifying tests for candidates already in Uttar Pradesh government service.',
        stages: 'Written',
        to: '/government-exams/state/uttar-pradesh/departmental-tests/',
      },
    ],
  },

  compare: {
    eyebrow: 'Choosing a group',
    title: 'UPPSC and UPSSSC Exams Compared',
    lead: 'Uttar Pradesh splits recruitment between two bodies rather than numbering groups 1 to 4. Which exam suits you depends on your qualification, how much time you can commit and whether you want a descriptive paper in the process.',
    caption:
      'Indicative comparison of Uttar Pradesh recruitment exams. Stage structure, conducting body and post lists vary by notification — always confirm marks, papers and eligibility against the official notification for your recruitment year.',
    columns: ['Exam', 'Minimum Qualification', 'Selection Stages', 'Typical Posts'],
    rows: [
      [
        'UPPSC PCS',
        'Bachelor’s degree',
        'Prelims, descriptive Mains, interview',
        'SDM, DSP, BDO and other senior state-cadre posts',
      ],
      [
        'UPPSC RO and ARO',
        'Bachelor’s degree',
        'Prelims, Mains, typing test',
        'Review Officer and Assistant Review Officer in state offices',
      ],
      [
        'UPSSSC Group C',
        'Intermediate or degree per post',
        'PET, Mains, document verification',
        'Junior Assistant, Forest Guard and other Group C posts',
      ],
      [
        'UPSSSC Lekhpal',
        'Intermediate',
        'PET, Mains, document verification',
        'Revenue Lekhpal posts in the districts',
      ],
      [
        'Technical posts',
        'Relevant engineering or commerce degree',
        'Written examination with a subject paper',
        'AE, JE and departmental technical roles',
      ],
      [
        'Police',
        'Per notification',
        'Written test, physical standard and efficiency tests',
        'Sub-Inspector and Constable recruitment in Uttar Pradesh Police',
      ],
    ],
  },

  mocks: {
    eyebrow: 'No signup needed',
    title: 'Free Mock Tests in Hindi and English',
    lead: 'Full-length papers on the current pattern, with a section and topic breakdown after every attempt.',
    linkTo: '/mock-tests/free/',
    linkLabel: 'All free tests',
    items: [
      { cat: 'UPPSC', title: 'PCS Prelims Mock Test', to: '/mock-tests/uppsc-pcs/' },
      { cat: 'UPPSC', title: 'RO and ARO Mock Test', to: '/mock-tests/uppsc-ro-and-aro/' },
      { cat: 'UPSSSC', title: 'PET Mock Test', to: '/mock-tests/upsssc-pet/' },
      { cat: 'UPSSSC', title: 'Lekhpal Mock Test', to: '/mock-tests/upsssc-lekhpal/' },
      { cat: 'UP Police', title: 'Constable Mock Test', to: '/mock-tests/uttar-pradesh-police-constable/' },
      { cat: 'UP Police', title: 'Sub-Inspector Mock Test', to: '/mock-tests/uttar-pradesh-police-si/' },
      { cat: 'Teaching', title: 'UPTET Paper 1 Mock Test', to: '/mock-tests/uptet/' },
      { cat: 'Technical', title: 'UPPSC AE Mock Test', to: '/mock-tests/uppsc-ae/' },
    ],
  },

  sources: [
    { label: 'Uttar Pradesh Public Service Commission (UPPSC)', href: 'https://uppsc.up.nic.in/' },
    { label: 'UP Subordinate Services Selection Commission (UPSSSC)', href: 'https://upsssc.gov.in/' },
    { label: 'UP Police Recruitment and Promotion Board', href: 'https://uppbpb.gov.in/' },
  ],
}

const BIHAR = {
  slug: 'bihar',
  name: 'Bihar',
  commission: 'BPSC',
  bodies: 'BPSC, BSSC and CSBC',
  languages: 'Hindi and English',
  regionalLanguage: 'Hindi',
  groups: { entry: 'BSSC Inter Level or Graduate Level', senior: 'BPSC Combined Competitive Examination', junior: 'BSSC combined examinations' },
  title: 'Bihar Government Exams',
  h1: 'Bihar Government Exams 2026',
  seoTitle: 'Bihar Government Exams 2026: BPSC, BSSC & Police Guide',
  metaDescription: 'Compare Bihar government exams conducted by BPSC, BSSC and CSBC, including selection stages, qualifications, preparation resources and official sources.',
  lead: 'Bihar recruitment does not run through one examination. BPSC selects officers and conducts specialist recruitment, BSSC handles many non-gazetted posts, and CSBC conducts constable recruitment. Choose the recruiting body and post first; the correct syllabus, pattern and physical requirements follow from that choice.',
  intro: {
    eyebrow: 'Answer first',
    title: 'Which Bihar recruitment body should you follow?',
    answer: 'Follow BPSC for the Combined Competitive Examination and many officer or specialist posts, BSSC for inter-level and graduate-level non-gazetted recruitment, and CSBC for constable recruitment. A department or another board may conduct some specialist selections, so the advertisement named for the post is always controlling.',
    lead: 'The overlap is useful—general studies, Bihar-specific knowledge, current affairs and aptitude recur—but eligibility and selection stages are advertisement-specific. Do not transfer an age limit, marking rule or physical standard from one Bihar recruitment to another.',
  },
  jobs: {
    eyebrow: 'Recruitment routes',
    title: 'Major Bihar Government Exam Categories',
    lead: 'Start with the post level and recruiting body, then confirm the exact advertisement on its official website.',
    linkTo: '/government-exams/state/',
    linkLabel: 'All state exams',
    items: [
      { name: 'BPSC Combined Competitive Examination', desc: 'Officer recruitment for Bihar administrative, police, revenue and allied services.', stages: 'Prelims · Descriptive Mains · Interview', to: '/government-exams/state/bihar/bpsc-combined-competitive/' },
      { name: 'BPSC Specialist Recruitment', desc: 'Post-specific recruitment including teaching, engineering and other professional services.', stages: 'Varies by advertisement', to: '/government-exams/state/bihar/bpsc-specialist/' },
      { name: 'BSSC Graduate Level', desc: 'Combined recruitment for eligible graduate-level non-gazetted posts.', stages: 'Prelims · Mains · Verification', to: '/government-exams/state/bihar/bssc-graduate-level/' },
      { name: 'BSSC Inter Level', desc: 'Combined recruitment for posts whose prescribed qualification is intermediate level.', stages: 'Prelims · Mains/skill stage as notified', to: '/government-exams/state/bihar/bssc-inter-level/' },
      { name: 'Bihar Police Constable', desc: 'Constable recruitment administered by the Central Selection Board of Constable.', stages: 'Written · Physical stages · Verification', to: '/government-exams/state/bihar/police-constable/' },
      { name: 'Bihar Police Sub-Inspector', desc: 'Sub-Inspector recruitment with written, physical and verification stages under the notified authority.', stages: 'Prelims · Mains · Physical stages', to: '/government-exams/state/bihar/police-si/' },
      { name: 'Teaching Recruitment', desc: 'Teacher and education-department recruitment under the authority named in each notification.', stages: 'Written and verification as notified', to: '/government-exams/state/bihar/teaching/' },
      { name: 'Technical and Departmental Posts', desc: 'Engineering, health, agriculture and other post-specific selections.', stages: 'Qualification/subject paper varies', to: '/government-exams/state/bihar/technical-posts/' },
    ],
  },
  compare: {
    eyebrow: 'Compare routes',
    title: 'BPSC, BSSC and Bihar Police Compared',
    lead: 'These are recruitment families, not interchangeable exam names. The current advertisement decides the final rules.',
    caption: 'Indicative route comparison. Always verify qualification, age, reservation, marks and stages in the advertisement for the post.',
    columns: ['Route', 'Typical entry qualification', 'Usual selection shape', 'Best fit'],
    rows: [
      ['BPSC Combined Competitive', 'Bachelor’s degree, subject to notification', 'Objective prelims, descriptive mains, interview', 'Candidates targeting state administrative and allied officer services'],
      ['BPSC specialist posts', 'Post-specific degree or professional qualification', 'Written examination and/or interview', 'Candidates with the notified technical or professional qualification'],
      ['BSSC Graduate Level', 'Bachelor’s degree for notified posts', 'Combined written stages and document verification', 'Graduates targeting non-gazetted state posts'],
      ['BSSC Inter Level', 'Intermediate for notified posts', 'Combined written stages; skill test where required', 'Class 12-qualified candidates targeting clerical and similar posts'],
      ['Police Constable', 'As specified by CSBC advertisement', 'Written examination followed by physical stages', 'Candidates prepared for both written and physical selection'],
      ['Police Sub-Inspector', 'As specified in the recruitment notice', 'Written stages followed by physical tests', 'Graduates targeting supervisory police service'],
    ],
  },
  choose: {
    title: 'Choose before you collect material',
    items: [
      { name: 'Check the qualification date.', desc: ' A degree or certificate generally has to be held by the cut-off stated in the advertisement, not merely by the examination date.' },
      { name: 'Separate screening from merit.', desc: ' Identify which stages only qualify candidates and which marks contribute to the final selection.' },
      { name: 'Check Hindi and Bihar-specific demands.', desc: ' Build state history, geography, economy and governance alongside national general studies where the syllabus requires them.' },
      { name: 'Begin physical preparation early.', desc: ' Police recruitment cannot be prepared for through written practice alone.' },
    ],
  },
  qualifications: {
    eyebrow: 'By qualification',
    title: 'Where your qualification usually leads',
    lead: 'This is an orientation map, not an eligibility declaration; the post advertisement remains final.',
    items: [
      { icon: 'book', name: 'Class 10', desc: 'Some constable, support and department-specific recruitments when notified.' },
      { icon: 'doc', name: 'Intermediate', desc: 'BSSC Inter Level and other posts that expressly prescribe class 12.' },
      { icon: 'user', name: 'Graduate', desc: 'BPSC combined recruitment, BSSC Graduate Level and other degree-level posts.' },
      { icon: 'layers', name: 'Technical qualification', desc: 'Engineering, teaching, health and specialist recruitment matching the notified discipline.' },
    ],
  },
  prepare: {
    eyebrow: 'Preparation sequence',
    title: 'A sensible Bihar exam preparation order',
    lead: 'Build the common core once, then add the demands unique to your recruitment.',
    steps: [
      { n: '01', title: 'Lock the target', desc: 'Download the current official advertisement and record every stage, paper, cut-off rule and eligibility condition.' },
      { n: '02', title: 'Measure the baseline', desc: 'Attempt a previous paper or realistic diagnostic test before deciding which subjects deserve the most time.' },
      { n: '03', title: 'Build the shared core', desc: 'Cover national and Bihar general studies, current affairs, language and aptitude at the depth shown by past papers.' },
      { n: '04', title: 'Add the differentiator', desc: 'Practise descriptive answers for BPSC mains, skill requirements for relevant BSSC posts, or physical events for police recruitment.' },
    ],
    note: 'BPSC publishes an examination calendar, but dates shown there may be tentative. Use it for planning and confirm every change through the notice board for the relevant advertisement.',
  },
  mocks: {
    eyebrow: 'Practice by stage',
    title: 'Bihar Government Exam Mock Tests',
    lead: 'Use a test that matches the subjects, timing and marking rules in your advertisement; a generic state exam test is only a diagnostic.',
    linkTo: '/mock-tests/free/',
    linkLabel: 'All free tests',
    items: [
      { cat: 'BPSC', title: 'BPSC Prelims General Studies Mock', to: '/mock-tests/state-psc/' },
      { cat: 'BPSC', title: 'Bihar History and Culture Practice', to: '/study-material/history/' },
      { cat: 'BPSC', title: 'Polity and Governance Practice', to: '/study-material/polity/' },
      { cat: 'BSSC', title: 'Graduate Level Aptitude Practice', to: '/practice/topic-wise-questions/' },
      { cat: 'BSSC', title: 'Inter Level General Studies Practice', to: '/mock-tests/state-psc/' },
      { cat: 'Police', title: 'Constable Written Practice', to: '/mock-tests/state-psc/' },
    ],
  },
  related: { eyebrow: 'Continue', title: 'Bihar Exam Preparation Resources', lead: 'Use official notices for changing rules and Brolly’s subject resources for durable concepts and practice.' },
  sources: [
    { label: 'Bihar Public Service Commission (BPSC)', href: 'https://bpsc.bihar.gov.in/' },
    { label: 'Bihar Staff Selection Commission (BSSC)', href: 'https://bssc.bihar.gov.in/' },
    { label: 'Central Selection Board of Constable (CSBC)', href: 'https://csbc.bihar.gov.in/' },
  ],
  faqs: [
    { q: 'Which body conducts Bihar government exams?', a: 'There is no single body for every post. BPSC conducts the Combined Competitive Examination and many officer or specialist recruitments; BSSC conducts combined recruitment for many non-gazetted posts; CSBC administers constable recruitment. Other authorities may handle particular teaching, police, technical or departmental posts.' },
    { q: 'Is one syllabus enough for BPSC and BSSC?', a: 'No. They share parts of general studies, Bihar-specific awareness, current affairs and aptitude, but their level, paper structure and later stages differ. Prepare the overlap once, then follow the syllabus attached to the exact advertisement.' },
    { q: 'Where should I verify Bihar exam dates and eligibility?', a: 'Use the official website and notice board of the recruiting body named in the advertisement. Calendars and summaries are planning aids; corrections, postponements and eligibility clarifications published against the advertisement control the recruitment.' },
  ],
}

export const STATE_PAGES = {
  telangana: TELANGANA,
  'andhra-pradesh': ANDHRA_PRADESH,
  'tamil-nadu': TAMIL_NADU,
  karnataka: KARNATAKA,
  maharashtra: MAHARASHTRA,
  'uttar-pradesh': UTTAR_PRADESH,
  bihar: BIHAR,
}

/**
 * The same three questions per state, phrased with that state's own group
 * names, commission and exam language. A state that carries its own `faqs`
 * list — written for the questions people actually search for that state —
 * uses those instead.
 */
export function stateFaqs(state) {
  if (state.faqs) return state.faqs

  const { entry, senior, junior } = state.groups

  return [
    {
      q: `Which ${state.name} exam should I start with?`,
      a: `Most candidates start with ${entry}, because they are decided on a written examination and the syllabus overlaps heavily with ${senior}. Read the job categories above, pick the group your qualification allows, then attempt one free mock before buying any material.`,
    },
    {
      q: `Are ${state.name} government exams available in ${state.regionalLanguage}?`,
      a: `Yes. ${state.bodies} papers are set in ${state.languages}, and the free mock tests on this page carry both versions, so you can practise in the medium you will actually write in.`,
    },
    {
      q: `How different is ${senior} preparation from ${junior}?`,
      a: `The reading overlaps a great deal — history, polity, economy, geography, science and ${state.name} state-specific topics. The difference is the descriptive Mains and the interview in ${senior}, which need writing practice on top of the same syllabus.`,
    },
  ]
}
