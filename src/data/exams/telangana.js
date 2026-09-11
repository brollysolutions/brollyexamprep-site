/**
 * Telangana state exams — /government-exams/state/telangana/:exam/
 *
 * The state hub at /government-exams/state/telangana/ lists the recruitment
 * routes the state runs. Each of those cards becomes a link only when a record
 * exists here, so this file is what turns a card into a page.
 *
 * Two things shape everything below, and both are specific to Telangana:
 *
 *   The Telangana movement and the formation of the state are examined in
 *   their own right. No national general-studies book covers them, they carry
 *   real weight at every group level, and they are the single largest reason a
 *   candidate who prepared for a neighbouring state PSC does badly here.
 *
 *   TGPSC is the commission that was TSPSC. The name changed with the state
 *   style in 2024; the syllabus, the paper structure and the archive of
 *   previous papers did not. Papers labelled TSPSC are current material.
 *
 * Volatile figures — vacancy counts, cutoffs, dates, fees and age relaxations —
 * are deliberately absent. Every pattern page carries a note pointing at the
 * notification, which is the only document that binds the commission.
 */

import DEPTH from './telangana-depth'

const OFFICIAL = 'websitenew.tgpsc.gov.in'

/**
 * The day the dated facts on these pages were last read off an official notice.
 *
 * Only the `updates`, `eligibility`, `pattern` and `sources` sections state
 * anything cycle-specific; everything else in this file is deliberately
 * evergreen. When you refresh a notification status, move this date with it —
 * a "checked on" line that is older than the fact beside it is worse than no
 * date at all, because it invites the reader to trust a stale figure.
 */
const CHECKED = '11 September 2026'

/** Recurs at the foot of every pattern page in this file. */
const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'TGPSC revises paper structure, marks, syllabus detail and eligibility between recruitment cycles, and has done so more than once in recent years. Everything here describes the shape the recruitment has held; the notification for the cycle you are sitting is the document that decides it. Read it end to end before you plan around any figure.',
}

const telangana = [
  /* ── TGPSC Group 1 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-1',
    path: '/government-exams/state/telangana/tgpsc-group-1/',
    name: 'TGPSC Group 1',
    fullName: 'Telangana Government Public Service Commission Group 1 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 1 2026: Syllabus, Mains Pattern & Mock Tests',
    metaDescription:
      'TGPSC Group 1 guide — prelims and descriptive mains structure, the Telangana Movement paper, posts on offer, answer writing and a preparation plan.',
    lead: [
      'TGPSC Group 1 is the senior recruitment in Telangana: Deputy Collector, Deputy Superintendent of Police, Commercial Tax Officer, Regional Transport Officer, District Panchayat Officer and the other state-cadre posts that run a district between them. It is the state equivalent of the civil services examination in everything but its final stage: a screening paper, then a long descriptive mains that decides the result outright.',
      'The part that surprises candidates arriving from national preparation is the writing. Group 1 is decided in the mains, the mains is written by hand under time pressure across several papers, and one of those papers is about the Telangana movement and the formation of the state — a subject no national book covers at the depth the paper asks for.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree from a recognised university'],
      ['Stages', 'Prelims (screening) → descriptive Mains. No interview under the current scheme'],
      ['Prelims role', 'Screening only — the marks do not carry into the merit list'],
      ['Distinctive paper', 'Telangana Movement and State Formation, examined as a subject of its own'],
      ['Medium', 'English or Telugu, chosen at application'],
      ['Typical posts', 'Deputy Collector, DSP, Commercial Tax Officer, RTO, MPDO, District Registrar'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 1 fills the posts a state government recruits directly into its senior executive cadre. A successful candidate is likely to spend early service as a Deputy Collector or a Deputy Superintendent of Police, and the recruitment is designed around that: a wide screening test to reduce a very large field, then a descriptive mains that tests whether a candidate can construct an argument in writing. Under the scheme notified for the current cycle there is no interview, so those written papers are the entire basis of the merit list.',
      },
      {
        type: 'p',
        text: 'The examination has three properties worth understanding before committing to it. It is long — the gap between notification and final result has historically run well over a year. It is written, in the literal sense, so handwriting speed and legibility are part of the score. And it is state-specific to a degree national material does not prepare you for: Telangana history, culture, geography, economy and the statehood movement run through every mains paper.',
      },
      {
        type: 'list',
        title: 'What separates Group 1 from Group 2',
        items: [
          { text: 'The mains is descriptive', note: 'answers are written in prose, by hand, against the clock. Group 2 is objective throughout, and the two demand different preparation even where the syllabus overlaps.' },
          { text: 'The screening stage is separate', note: 'Group 1 has a prelims whose marks are discarded once it has done its job, so the paper that admits you to the examination is not the paper that ranks you. Group 2 has no screening stage at all — every candidate sits the papers that count.' },
          { text: 'The posts carry executive authority', note: 'district administration and policing, rather than the supervisory and ministerial posts most Group 2 appointments lead to.' },
          { text: 'The field is smaller but stronger', note: 'Group 1 attracts candidates also preparing for the civil services, which raises the standard of the written answers you are ranked against.' },
        ],
      },
      {
        type: 'note',
        title: 'Prelims marks do not survive the stage',
        text: 'The preliminary paper decides who writes the mains and nothing else — it is not added to the final total. Candidates routinely over-invest in prelims-style objective practice and arrive at the mains having never written a timed answer. Prepare for the mains from the first month, and treat the prelims as a filter you must pass rather than a paper you must top.',
      },
    ],
    stages: [
      {
        name: 'Preliminary examination',
        mode: 'Objective, screening only',
        detail:
          'A general studies and mental ability paper covering current affairs, history, polity, economy, geography, science and technology, reasoning and Telangana-specific content. It decides who is called to the mains in a ratio fixed by the commission, and the marks are not carried forward.',
      },
      {
        name: 'Main examination',
        mode: 'Descriptive, written by hand',
        detail:
          'A qualifying language paper alongside marked papers covering general essay, history and culture, society and governance, economy and development, science and technology with data interpretation, and the Telangana movement and state formation. These marks build the merit list.',
      },
      {
        name: 'Verification and appointment',
        mode: 'Documents and medical',
        detail:
          'Certificate verification with web options for post and multi-zone preference, medical fitness and physical requirements where the post requires them, and allotment of service by merit, preference, reservation and local status.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. The current Group 1 cycle is Notification No. 02/2024 of 19 February 2024. It replaced Notification No. 04/2022, which the commission cancelled — candidates who had applied to the cancelled cycle had to apply again, though not to pay again. Selection under 02/2024 is published but remains provisional.`,
      },
      {
        type: 'table',
        caption: 'The 02/2024 cycle, end to end.',
        head: ['Stage', 'When'],
        rows: [
          ['Notification issued', '19 February 2024'],
          ['Applications', '23 February to 14 March 2024, with an edit window to 27 March'],
          ['Preliminary test', 'Notified for May or June 2024. The notification names no exact date, and the commission published none that survives on its site.'],
          ['Main examination', '21 to 27 October 2024'],
          ['General ranking list', '30 March 2025'],
          ['Provisional selection', '24 September 2025 — 562 candidates against 563 vacancies'],
        ],
      },
      {
        type: 'note',
        title: 'The selection is provisional and litigation is pending',
        text: 'The commission’s own selection notification states that the final list is subject to the outcome of Writ Appeal No. 1066 of 2025 and connected cases, and that changes will be carried out if court orders require them. One vacancy was left unfilled under a High Court order in a separate writ petition, which is why 562 candidates were selected against 563 posts. A place on a provisional list is not an appointment.',
      },
      {
        type: 'list',
        title: 'Where the 563 vacancies sat',
        items: [
          { text: 'Mandal Parishad Development Officer — 140', note: 'the largest single post code in the recruitment, about a quarter of it.' },
          { text: 'Deputy Superintendent of Police — 115', note: 'the largest uniformed block, and one of the post codes carrying a lower age ceiling and a physical requirement.' },
          { text: 'Commercial Tax Officer 48, Deputy Collector 45, Municipal Commissioner Grade-II 41, Assistant Audit Officer 41', note: 'the next tier of post codes by size.' },
          { text: 'Eighteen post codes in all', note: 'down to two vacancies for District Tribal Welfare Officer. Vacancy numbers are expressly subject to variation on intimation from the department concerned.' },
        ],
      },
      {
        type: 'note',
        title: 'No fresh Group 1 notification has been issued',
        text: 'As at the date checked above, 02/2024 remains the most recent Group 1 notification. Any vacancy count or application date circulating for a new cycle is not from a commission document.',
      },
      {
        type: 'links',
        title: 'Check the cycle status at source',
        items: [
          { label: 'TGPSC notifications', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
        ],
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'Group 1 does not have one eligibility rule — it has eighteen, one per post code, and the differences are the kind that end an application. Both the minimum and the maximum age vary by post, and three post codes want a specific degree rather than any degree. The figures below are those set by Notification No. 02/2024, with age reckoned as on 1 July 2024.',
      },
      {
        type: 'table',
        caption:
          'Eligibility under Notification No. 02/2024. A future notification will set its own reckoning date and may set different ceilings, so read the structure rather than reusing the dates.',
        head: ['Requirement', 'What the notification set'],
        rows: [
          ['Qualification', 'A bachelor’s degree of a recognised university for most posts, held as on the notification date of 19 February 2024 with the result already declared by then. A degree awaited or declared later did not qualify.'],
          ['Degree-specific posts', 'Regional Transport Officer required a degree in mechanical or automobile engineering. Assistant Commissioner of Labour required arts, commerce, science or engineering. The Assistant Treasury Officer group required commerce, economics or mathematics with at least a second class in the subject.'],
          ['Minimum age', '18 years for most posts; 21 years for Deputy Superintendent of Police, Regional Transport Officer and Assistant Excise Superintendent.'],
          ['Maximum age', '46 years for most posts; 35 years for Deputy Superintendent of Police, Deputy Superintendent of Jails and Assistant Excise Superintendent. The 46-year ceiling came from a government order of February 2024 raising it from 44.'],
          ['Age relaxation', 'Telangana government employees up to 5 years by length of regular service; ex-servicemen 3 years plus service rendered; NCC instructors 3 years plus service; SC, ST, BC and EWS candidates 5 years; persons with disability 10 years. Relaxation cannot take a candidate past the post’s own ceiling.'],
          ['Physical requirements', 'Deputy Superintendent of Police and Assistant Excise Superintendent required at least 165 cm height and 86.3 cm chest on full inspiration; Deputy Superintendent of Jails at least 167.6 cm with a minimum 5 cm expansion. Relaxed standards applied where enough candidates at the higher standard were unavailable, and a request for re-medical examination is not entertained.'],
          ['Application processing fee', '₹200, payable by every applicant with no exemption.'],
          ['Examination fee', '₹120, from which unemployed candidates were exempt on filing a declaration. Government employees at any level paid it.'],
        ],
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'The Group 1 scheme of examination. The preliminary test screens and is then discarded; the six marked mains papers are the entire merit list.',
        head: ['Stage or paper', 'Subject', 'Type', 'Duration', 'Marks'],
        rows: [
          ['Preliminary test', 'General Studies and Mental Ability, 150 questions', 'Objective — screening only', '2½ hours', '150, not counted'],
          ['Mains — General English', 'Qualifying paper at secondary school standard', 'Descriptive — qualifying only', '3 hours', '150, not counted'],
          ['Mains — Paper I', 'General Essay', 'Descriptive', '3 hours', '150'],
          ['Mains — Paper II', 'History, Culture and Geography', 'Descriptive', '3 hours', '150'],
          ['Mains — Paper III', 'Indian Society, Constitution and Governance', 'Descriptive', '3 hours', '150'],
          ['Mains — Paper IV', 'Economy and Development', 'Descriptive', '3 hours', '150'],
          ['Mains — Paper V', 'Science and Technology, and Data Interpretation', 'Descriptive', '3 hours', '150'],
          ['Mains — Paper VI', 'Telangana Movement and State Formation', 'Descriptive', '3 hours', '150'],
        ],
      },
      {
        type: 'note',
        title: 'The current scheme has no interview',
        text: 'The commission’s scheme of examination totals 900 marks across the six marked mains papers, and contains no interview, oral test or personality test. Older Group 1 cycles did carry one, and a good deal of preparation advice still assumes it, but under the scheme notified for the current cycle nothing outside the written papers can move your rank. Confirm it in your own notification before planning around either answer.',
      },
      {
        type: 'list',
        title: 'The rules that decide who progresses',
        items: [
          { text: 'The prelims admits fifty candidates per vacancy', note: 'the ratio is 1:50 in each multi-zone, relaxed where reserved-category numbers require it. The paper is a filter with a wide mouth, not a competition to be topped.' },
          { text: 'General English can end a candidacy on its own', note: 'it is qualifying at secondary school standard — 40% for OC, EWS and sportspersons, 35% for BC, 30% for SC, ST and PH candidates — and it is the paper candidates prepare for last.' },
          { text: 'The mains carries an aggregate minimum too', note: 'the same 40, 35 and 30 per cent thresholds apply to the aggregate across all mains papers. If SC and ST candidates do not come up to them, selection is considered on rank irrespective of marks.' },
          { text: 'Every mains paper is compulsory', note: 'absence from any one of them disqualifies the candidature entirely.' },
          { text: 'Answer in one language throughout', note: 'the examination is set in English, Telugu and Urdu, and every paper except General English must be answered wholly in the language you chose. Mixing is not permitted.' },
          { text: 'The official documents prescribe no negative marking', note: 'the notification contains no deduction clause for a wrong answer. That is the absence of a provision rather than a promise, so check your own notification.' },
        ],
      },
    ],
    studyPlan: [
      {
        type: 'steps',
        title: 'A plan for an examination decided entirely in writing',
        items: [
          { text: 'Write from month one, not after the prelims result', note: 'the prelims is worth nothing and the mains is worth everything. Candidates who postpone writing practice until they have cleared the screening paper spend the decisive interval learning a skill instead of sharpening it.' },
          { text: 'Treat the Telangana movement as a full paper', note: 'because it is one — 150 marks of narrative history with its own periodisation, agreements, actors and disputes, which no national general-studies book covers at the depth Paper VI asks.' },
          { text: 'Build one set of notes that serves several papers', note: 'Telangana’s history feeds Paper II, its society Paper III, its economy Paper IV and its statehood movement Paper VI. Four papers, one state, one body of reading.' },
          { text: 'Practise the data interpretation block as arithmetic', note: 'it sits inside the science and technology paper and is closer to timed arithmetic than to science, which is where science graduates lose marks they assumed were safe.' },
          { text: 'Do not neglect General English', note: 'it carries no merit marks and it removes candidates every cycle. A few hours a week is enough; nothing is not.' },
          { text: 'Rehearse the handwriting load', note: 'six three-hour descriptive papers inside a week is a physical task as much as an intellectual one. Legibility and speed at the end of hour three are trainable, and only by training them.' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. Vacancies, eligibility, fees, qualifying marks and the scheme of examination are taken from Notification No. 02/2024 and the commission’s Group-I scheme and syllabus; the chronology and the litigation caveat are from the commission’s own selection notification. The commission publishes no Group 1 previous-year question papers — its old question papers archive holds none for this examination in any year.`,
      },
      {
        type: 'links',
        title: 'Official sources for this page',
        items: [
          { label: 'TGPSC notifications', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'TGPSC scheme and syllabus documents', href: 'https://websitenew.tgpsc.gov.in/SyllabusCMS' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
          { label: 'TGPSC results, keys and OMR sheets', href: 'https://websitenew.tgpsc.gov.in/resukeyomr.jsp' },
          { label: 'TGPSC old question papers archive', href: 'https://websitenew.tgpsc.gov.in/oldquestionp.jsp' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 1 syllabus — the prelims general studies paper and every mains paper, including Telangana Movement and State Formation.',
        lead: [
          'The syllabus reads as a general studies list with a Telangana layer running through it. That layer is not decoration: it is where the marks that separate candidates sit.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Prelims — General Studies and Mental Ability',
                'Current affairs of regional, national and international significance; general science and everyday science, with developments in science and technology; environmental issues and disaster management; world geography, Indian geography and the geography of Telangana; Indian history and the national movement; Indian society, the Constitution, polity and governance; the Indian economy and development; the Telangana movement and state formation; logical reasoning, analytical ability and data interpretation.',
              ],
              [
                'Mains — General Essay',
                'Essays on themes drawn from public affairs, social questions, economic policy and Telangana-specific topics. Marked on structure, evidence and balance rather than on length. This paper rewards a candidate who has practised planning an essay in five minutes and then holding to that plan.',
              ],
              [
                'Mains — History, Culture and Geography',
                'Indian history and culture with weight on the modern period and the national movement; the history and cultural heritage of Telangana; and the physical, economic and social geography of India and of the state. Telangana’s dynasties, monuments, literature, crafts, festivals and language politics are examined at a level of detail general Indian-history material does not reach.',
              ],
              [
                'Mains — Indian Society, Constitution and Governance',
                'The structure of Indian society, social issues and welfare policy; the Constitution, its features, the distribution of powers and the constitutional bodies; governance, public administration, accountability and rights issues; and the equivalent questions as they arise in Telangana.',
              ],
              [
                'Mains — Economy and Development',
                'The Indian economy, planning and public finance, agriculture and industry, and the economy of Telangana specifically — its resources, irrigation, power, agriculture, industrial policy and the state’s own development programmes.',
              ],
              [
                'Mains — Science, Technology and Data Interpretation',
                'The role of science and technology in development, applications in agriculture, health, energy, environment and communication, current developments, and a data interpretation and problem-solving component that is closer to arithmetic reasoning than to a science paper.',
              ],
              [
                'Mains — Telangana Movement and State Formation',
                'The whole arc: Hyderabad state under the Nizam and the Telangana armed struggle, the 1956 merger and the Gentlemen’s Agreement, the 1969 agitation, the Six-Point Formula and its working, the revival of the movement from the 1990s, the political and cultural mobilisation of the 2000s, and the formation of the state in 2014. Examined as a subject with its own periodisation, actors, documents and disputes.',
              ],
              [
                'Mains — Qualifying language paper',
                'A qualifying paper in the language prescribed by the notification, testing comprehension, précis, translation and composition. It carries no merit marks, and it does end candidacies — because it is the paper candidates prepare for last.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Two syllabus lines deserve to be read as instructions rather than as topics. "Telangana movement and state formation" means a full paper of narrative history with dates, agreements and named figures. "Data interpretation and problem solving" means arithmetic under time pressure inside a science paper, which is where science graduates often lose marks they assumed were safe.',
          },
          {
            type: 'links',
            title: 'Where to build each layer',
            items: [
              { label: 'Telangana government exams hub', to: '/government-exams/state/telangana/' },
              { label: 'Subject-wise study material', to: '/study-material/' },
              { label: 'Current affairs preparation', to: '/current-affairs/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 1 exam pattern — how the prelims screens, how the six descriptive mains papers are marked, and why the mains decides the result.',
        lead: [
          'Three stages, and only two of them count. Knowing which is which changes how a year of preparation is spent.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The shape Group 1 has held across recent cycles. Paper count, marks and duration are set by the notification for your cycle — confirm every figure there.',
            head: ['Stage', 'Format', 'Counts towards merit', 'What it decides'],
            rows: [
              ['Prelims', 'Objective general studies and mental ability', 'No', 'Who is called to the mains, in a ratio the commission fixes'],
              ['Mains — language paper', 'Descriptive, qualifying', 'No', 'Whether the rest of your mains is evaluated at all'],
              ['Mains — marked papers', 'Descriptive, written by hand', 'Yes', 'Almost the whole of your rank'],
            ],
          },
          {
            type: 'p',
            text: 'The consequence of that table is a planning rule. The mains is worth everything and the prelims is worth nothing at all, so preparation time should go to writing practice long before the prelims result arrives. Candidates who begin mains preparation after clearing the prelims are preparing for a descriptive examination in the weeks when they should be revising for it.',
          },
          {
            type: 'steps',
            title: 'What the descriptive format actually demands',
            items: [
              { title: 'Handwriting speed, sustained for three hours', text: 'A mains paper asks for more writing than most graduates have done in years. This is trainable, and it takes months.' },
              { title: 'Answers built to a structure', text: 'A brief introduction, a body organised in labelled parts, and a conclusion that answers the question asked. Markers reward visible structure because it makes the argument checkable.' },
              { title: 'Evidence that is specific', text: 'A named committee, a year, a scheme, a figure from the state’s own economic publications. Specificity is what separates a scoring answer from a fluent one.' },
              { title: 'Discipline about the word limit', text: 'Overwriting one answer costs the marks of the answer you then leave unattempted. Timed practice is the only way to internalise the limit.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 1 previous papers — what to read from them, and why papers labelled TSPSC are still the right material.',
        lead: [
          'The paper archive is the most honest description of this examination that exists. It is also the only place the Telangana movement paper has been defined in practice rather than in syllabus lines.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Papers issued under the TSPSC name are the same examination. The commission was renamed with the state style in 2024, and the syllabus, structure and standard carried across unchanged. Discarding the older archive because of the label removes most of the available evidence about how this paper behaves.',
          },
          {
            type: 'list',
            title: 'What to extract, in order',
            items: [
              { text: 'The Telangana share of the prelims paper', note: 'count the questions across several years that could not have been answered from national material. That count is your minimum state-specific study target.' },
              { text: 'The framing of the mains questions', note: 'note whether a question asks you to describe, examine, critically examine or discuss. The verb sets the structure of a scoring answer, and it recurs.' },
              { text: 'The recurring anchors of the movement paper', note: 'the Gentlemen’s Agreement, the Six-Point Formula, the 1969 agitation, the revival from 2001 onwards. They come back in different framings, so learn them as an argument you can rebuild rather than as dates.' },
              { text: 'The data interpretation questions inside the science paper', note: 'a predictable, learnable block of marks that arts graduates often concede without trying.' },
              { text: 'Where the essay topics came from', note: 'state policy, social questions and national debates, in roughly stable proportions.' },
            ],
          },
          {
            type: 'p',
            text: 'Work the mains papers by writing full answers to time rather than by reading model answers. Reading a good answer teaches you what one looks like; writing a bad one under a clock teaches you what your own pace is, which is the thing the examination actually tests.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 1 mock tests — how to use objective mocks for the prelims and written answer practice for the mains.',
        lead: [
          'A Group 1 mock has to do two different jobs, because the examination has two different formats. Treating both as the same exercise is why mock scores and mains results diverge.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the prelims, a mock is a measurement instrument: sit it to time, score it honestly, and read the result as a list of topics rather than as a mark. For the mains, a mock is a writing session — a full paper answered by hand in the allotted time, which is uncomfortable enough that most candidates avoid doing it often enough.',
          },
          {
            type: 'steps',
            title: 'A mock routine that covers both formats',
            items: [
              { title: 'One full prelims mock a week, from six months out', text: 'Full length, single sitting, no pauses. The score matters less than the pattern of what you left blank.' },
              { title: 'One handwritten mains answer a day, from the start', text: 'A single question, twenty minutes, written by hand. Daily practice at this scale builds speed faster than occasional full papers do.' },
              { title: 'One full mains paper a fortnight, once the prelims is behind you', text: 'Three hours, by hand, in one sitting. This is the rehearsal that decides whether you finish the real paper.' },
              { title: 'A movement-paper mock of its own', text: 'It is the paper with the least available practice material, and the one where a well-prepared candidate gains most.' },
            ],
          },
          {
            type: 'note',
            title: 'Score the writing, not just the content',
            text: 'When you review a handwritten answer, mark three things separately: whether it answered the question asked, whether its structure is visible at a glance, and whether it finished inside the time. Content gaps are the easiest of the three to fix and the least likely to be what is costing you marks.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC Group 1 preparation — a realistic plan across the prelims and the six mains papers, with the Telangana layer built in from the start.',
        lead: [
          'A Group 1 attempt is a year-long project with a descriptive examination at the end of it. The plan below is built backwards from that paper rather than forwards from the prelims.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A twelve-month plan',
            items: [
              { title: 'Months one to three — the state layer, deliberately', text: 'Telangana history, geography, economy and the statehood movement, studied as subjects rather than as topics inside general studies. This is the material with the least competition and the longest learning curve.' },
              { title: 'Months one to twelve — one written answer a day', text: 'Begun on day one, not after the prelims. Twenty minutes, by hand, on a question from a past paper. Nothing else builds mains speed.' },
              { title: 'Months three to six — the general studies spine', text: 'Polity, modern history, economy, geography and science, at the depth the mains asks rather than the depth the prelims asks.' },
              { title: 'Months six to eight — prelims sharpening', text: 'Objective practice, current-affairs consolidation and full-length mocks, on top of a base that is already at mains depth.' },
              { title: 'After the prelims — full mains papers', text: 'Complete papers to time, fortnightly, with the movement paper and the essay given slots of their own.' },
              { title: 'After the mains — verification, not an interview', text: 'The current scheme ends at the written papers. What follows is certificate verification, web options for post and zone preference, and the medical check the uniformed posts require. Get the documents in order rather than preparing answers for a board that will not sit.' },
            ],
          },
          {
            type: 'p',
            text: 'Two habits do most of the work across that year. A daily current-affairs note kept in your own words, running to a page, covering national and Telangana developments together. And a single revision file for the movement paper, built from past questions rather than from a book, which by the end should be short enough to read in an evening.',
          },
          {
            type: 'note',
            title: 'Choose the medium early and commit',
            text: 'The mains is written in English or Telugu, chosen at application. Switching late is expensive, because terminology, reading material and answer templates all follow the choice. Decide in the first month on the basis of which language you write faster and more precisely under pressure, not which you think reads better.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 1 study material — what to read for the general studies spine, and how to assemble the Telangana layer.',
        lead: [
          'The reading list divides cleanly. The national layer is well served by standard material; the state layer has to be assembled, and assembling it is most of the advantage available in this exam.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'The national layer',
            items: [
              { text: 'Polity and the Constitution', note: 'one standard reference, read twice, with the constitutional bodies and centre-state provisions known well enough to write about without notes.' },
              { text: 'Modern Indian history and the national movement', note: 'a single narrative source rather than several, so the chronology holds together when you write it out.' },
              { text: 'Economy', note: 'the concepts, plus the current Economic Survey and Budget read for direction rather than memorised for figures.' },
              { text: 'Geography and environment', note: 'physical geography from a school-level text upwards, then Indian geography with resources and agriculture.' },
              { text: 'Science and technology', note: 'current applications and developments rather than textbook science, plus arithmetic practice for the data interpretation component.' },
            ],
          },
          {
            type: 'list',
            title: 'The Telangana layer',
            items: [
              { text: 'State board textbooks', note: 'the most reliable single source for Telangana history, geography and civics, written at close to the level the paper asks.' },
              { text: 'The state’s own statistical and economic publications', note: 'the socio-economic outlook and departmental reports, for figures you can cite in a mains answer.' },
              { text: 'A movement chronology built by you', note: 'from past papers and a standard account, kept to a few pages, revised weekly.' },
              { text: 'A state current-affairs source', note: 'a Telangana newspaper or the state’s own releases, read alongside national current affairs rather than instead of them.' },
            ],
          },
          {
            type: 'note',
            title: 'Verify anything you plan to quote',
            text: 'Mains answers gain marks for specific schemes, committees and figures, and lose credibility when those are wrong. Take numbers from the state’s published documents rather than from coaching compilations, and check that a scheme you cite is still running before you build an answer around it.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 1 exam pattern?',
        a: 'TGPSC Group 1 runs in two examined stages. The preliminary examination is an objective general studies and mental ability paper of 150 questions and 150 marks, used only to screen candidates for the mains — its marks do not count towards the final merit. The main examination is descriptive and written by hand, with a qualifying language paper alongside marked papers covering general essay, history and culture, society and governance, economy and development, science and technology with data interpretation, and the Telangana movement and state formation. The scheme notified for the current cycle carries no interview: the six marked mains papers total 900 marks and decide the merit list on their own. Confirm the paper count, marks and duration in the notification for your cycle.',
      },
      {
        q: 'Is TSPSC Group 1 the same as TGPSC Group 1?',
        a: 'Yes. The commission was renamed from TSPSC to TGPSC in 2024 when the state style changed, and the examination carried across unchanged. Previous papers, syllabus documents and study material published under the TSPSC name remain current and are the right material to prepare from.',
      },
      {
        q: 'Which posts are filled through TGPSC Group 1?',
        a: 'Group 1 fills senior state-cadre posts including Deputy Collector, Deputy Superintendent of Police, Commercial Tax Officer, Regional Transport Officer, District Panchayat Officer, Mandal Parishad Development Officer and District Registrar, among others. The exact post list and the number of vacancies in each are set by the notification for that recruitment.',
      },
      {
        q: 'How important is the Telangana Movement paper in Group 1?',
        a: 'It is examined as a subject in its own right in the mains, and it also appears in the prelims. Because no national general-studies material covers it at the depth the paper asks, it is simultaneously the section where an unprepared candidate loses most and the section where a prepared one gains most. Treat it as a full subject from the first month rather than as a topic to be covered later.',
      },
      {
        q: 'Can I write TGPSC Group 1 in Telugu?',
        a: 'The mains may be written in English or Telugu, with the medium chosen at the time of application. Choose on the basis of which language you can write quickly and precisely under time pressure, because switching later means rebuilding your terminology, reading material and answer structures.',
      },
      {
        q: 'How long does the whole TGPSC Group 1 process take?',
        a: 'A long time. In the 2024 cycle the notification issued in February 2024, the mains was written in October 2024, the ranking list appeared in March 2025 and provisional selection followed in September 2025 — and that list is still subject to pending litigation. Plan preparation as a long project, and use the interval after the prelims for mains writing practice, because that is the gap in which the result is actually decided.',
      },
    ],
  },
  /* ── TGPSC Group 2 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-2',
    path: '/government-exams/state/telangana/tgpsc-group-2/',
    name: 'TGPSC Group 2',
    fullName: 'Telangana Government Public Service Commission Group 2 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 2 2026: Syllabus, Four-Paper Pattern & Mocks',
    metaDescription:
      'TGPSC Group 2 guide — the four objective papers, the Telangana Movement paper, the posts filled, previous papers and a preparation plan.',
    lead: [
      'TGPSC Group 2 is the most-attempted recruitment in Telangana. It fills degree-level executive and supervisory posts — Assistant Commercial Tax Officer, Sub-Registrar, Excise Sub-Inspector, Assistant Section Officer in the secretariat, Municipal Commissioner Grade III and others — through a written examination alone.',
      'That last point is what defines preparation for it. There is no interview and no descriptive paper: everything rests on objective papers written in a single window, and one of those papers is devoted to the Telangana movement and state formation. A candidate who is strong at general studies and weak on the state paper does not have a stage left in which to recover.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree from a recognised university'],
      ['Format', 'Objective papers across a fixed set of subjects; no interview'],
      ['Papers', 'Four, in the structure the commission has used in recent cycles'],
      ['Distinctive paper', 'A full paper on the Telangana movement and state formation'],
      ['Selection', 'Written marks, then certificate verification'],
      ['Typical posts', 'ACTO, Sub-Registrar, Excise SI, Assistant Section Officer, Municipal Commissioner Grade III'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 2 sits between the executive posts of Group 1 and the ministerial posts of Group 4. The appointments it makes are supervisory: a Sub-Registrar running a registration office, an Assistant Commercial Tax Officer assessing tax, an Assistant Section Officer handling files in the secretariat. They are stable, well-regarded posts, and the field competing for them is very large.',
      },
      {
        type: 'p',
        text: 'The recruitment has been built as four objective papers in recent cycles: a general studies and general abilities paper, a paper on history, polity and society, a paper on economy and development, and a paper on the Telangana movement and state formation. Each is answered in a fixed window on the examination day, and the total across the papers decides the merit list.',
      },
      {
        type: 'list',
        title: 'What this format rewards',
        items: [
          { text: 'Breadth held to a consistent depth', note: 'four papers covering different subjects means no single area can carry your score, and no single weak area can be hidden.' },
          { text: 'Accuracy under a fixed clock', note: 'objective papers with a question count close to the minute count. Reading speed is part of the examination.' },
          { text: 'State-specific study', note: 'the movement paper and the Telangana content inside the other papers together account for a large share of the total.' },
          { text: 'Revision, repeatedly', note: 'with no interview and no descriptive paper, marks come from recall under pressure, and recall decays. Revision cycles matter more here than in Group 1.' },
        ],
      },
      {
        type: 'note',
        title: 'There is no second chance inside the process',
        text: 'Group 1 candidates who write a poor prelims can still recover, because the prelims is discarded and the mains decides everything afterwards. Group 2 has no such reset. Every mark is earned across four objective papers in a single sitting of the examination, which makes full-length timed practice under exact conditions more valuable here than in any other TGPSC recruitment.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, multiple papers',
        detail:
          'Papers covering general studies and general abilities, history, polity and society, economy and development, and the Telangana movement and state formation. Marks across the papers are aggregated to build the merit list.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Candidates called in order of merit produce proof of age, qualification, category, local status and any claimed relaxation. Discrepancies between the application and the documents end candidacies at this stage.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Posts are allotted by merit against the web options submitted at verification, within the reservation, zonal and local-status rules that apply to the recruitment. Physical fitness for the post is checked at the appropriate stage.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. The most recent Group 2 cycle is Notification No. 28/2022 of 29 December 2022. The written examination was held two years after the notification, and selection is published but remains provisional against a list of pending court cases.`,
      },
      {
        type: 'table',
        caption: 'The 28/2022 cycle, end to end.',
        head: ['Stage', 'When'],
        rows: [
          ['Notification issued', '29 December 2022'],
          ['Applications', '18 January to 16 February 2023'],
          ['Written examination held', '15 and 16 December 2024, after repeated rescheduling'],
          ['General ranking list', '11 March 2025'],
          ['Provisional selection', '28 September 2025 — 782 vacancies filled, one withheld'],
          ['Withheld vacancy released', '9 October 2025'],
        ],
      },
      {
        type: 'note',
        title: 'The selection is provisional and litigation is pending',
        text: 'The commission’s selection notifications state that the list is subject to the outcome of six writ petitions and a writ appeal, and that changes will be carried out if court orders require them. No disposal of those cases appears in any commission document, so as things stand the Group 2 selections remain provisional.',
      },
      {
        type: 'list',
        title: 'Where the 783 vacancies sat',
        items: [
          { text: 'Assistant Section Officer in the Secretariat — 214 across five departments', note: 'general administration alone took 165, with finance, legislature, law and the election commission making up the rest. These are the state-cadre posts in the recruitment.' },
          { text: 'Mandal Panchayat Officer — 126, Naib Tahsildar — 98, Prohibition and Excise Sub-Inspector — 97', note: 'the largest field posts, and the excise post is the one carrying a lower age ceiling and a physical requirement.' },
          { text: 'Assistant Registrar 63, Assistant Commercial Tax Officer 59, Assistant Development Officer 38', note: 'the middle tier, down to two vacancies in the election commission.' },
          { text: 'Eighteen post codes across state, zonal and multi-zonal cadres', note: 'which cadre a post belongs to decides the pool you compete in, and it is set per post code rather than for the recruitment as a whole.' },
        ],
      },
      {
        type: 'note',
        title: 'No fresh Group 2 notification has been issued',
        text: 'As at the date checked above, 28/2022 remains the most recent Group 2 notification — the only earlier one in the commission’s archive is from 2015. Vacancy counts and dates circulating for a new cycle are not from a commission document.',
      },
      {
        type: 'links',
        title: 'Check the cycle status at source',
        items: [
          { label: 'TGPSC notifications', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
        ],
      },
    ],
    eligibility: [
      {
        type: 'table',
        caption:
          'Eligibility under Notification No. 28/2022, with age reckoned as on 1 July 2022. A future notification will set its own reckoning date.',
        head: ['Requirement', 'What the notification set'],
        rows: [
          ['Qualification', 'A bachelor’s degree of a recognised university for most posts, held as on the notification date.'],
          ['Degree-specific posts', 'Assistant Section Officer in Finance required mathematics, economics or commerce; in Law, a degree in law. District Probation Officer required social work or psychology, or a master’s in one of them or in criminology or correctional administration. Assistant Development Officer accepted a degree or a technical board diploma in textile or handloom technology.'],
          ['Age', '18 to 44 years for most posts. Prohibition and Excise Sub-Inspector was 21 to 30 — a materially narrower window than the rest of the recruitment.'],
          ['Age relaxation', 'Telangana government employees up to 5 years by length of regular service; ex-servicemen 3 years plus service rendered; NCC instructors 3 years plus service; SC, ST, BC and EWS candidates 5 years; persons with disability 10 years. Eligibility ends at 61 years after relaxation.'],
          ['Physical requirements', 'Prohibition and Excise Sub-Inspector only: men at least 167.6 cm and 86.3 cm chest on full inspiration, women at least 152.5 cm, with relaxed standards specified. No other Group 2 post carries a physical standard.'],
          ['Application processing fee', '₹200, payable by every applicant with no exemption.'],
          ['Examination fee', '₹120, from which unemployed candidates were exempt on filing a declaration.'],
        ],
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'The Group 2 scheme of examination: four objective papers of equal weight, 600 marks in total, decided in a single sitting of the examination with no screening stage.',
        head: ['Paper', 'Subject', 'Questions', 'Marks', 'Duration'],
        rows: [
          ['Paper I', 'General Studies and General Abilities', '150', '150', '2½ hours'],
          ['Paper II', 'History, Polity and Society — socio-cultural history of India and Telangana, the Constitution and politics, social structure and public policy', '150', '150', '2½ hours'],
          ['Paper III', 'Economy and Development — the Indian economy, the economy and development of Telangana, issues of development and change', '150', '150', '2½ hours'],
          ['Paper IV', 'Telangana Movement and State Formation — the idea of Telangana 1948-1970, the mobilisation phase 1971-1990, and the road to statehood 1991-2014', '150', '150', '2½ hours'],
        ],
      },
      {
        type: 'note',
        title: 'A quarter of the marks is one subject',
        text: 'Paper IV is the Telangana movement and nothing else — 150 of the 600 marks, examined in three defined periods with their own agreements, organisations and figures. Add the Telangana content inside Papers II and III and the state’s own history, society and economy account for well over a third of the examination. This is the single largest reason a candidate who prepared from national state-PSC material does badly here.',
      },
      {
        type: 'list',
        title: 'The rules that decide the paper',
        items: [
          { text: 'There is no prelims and no interview', note: 'selection is on the marks secured in the written examination alone. Every candidate sits the papers that count, and nothing after them moves a rank.' },
          { text: 'Minimum qualifying marks by category', note: '40% for OC, EWS and sportspersons; 35% for BC candidates; 30% for SC, ST and PH candidates. Reaching the minimum vests no right to selection — the notification says so in terms.' },
          { text: 'All four papers are compulsory', note: 'absence from any one disqualifies the candidature.' },
          { text: 'The official documents prescribe no negative marking', note: 'the notification contains no deduction clause. Deleted questions are compensated instead, proportionately on your performance across the remaining questions, to three decimal places.' },
          { text: 'Objections to the answer key cost ₹500 each', note: 'paid online, per objection.' },
          { text: 'The paper is set in English, Telugu and Urdu', note: 'and may be conducted as a computer-based test or on OMR sheets, at the commission’s discretion.' },
        ],
      },
    ],
    studyPlan: [
      {
        type: 'steps',
        title: 'A plan for four equal papers',
        items: [
          { text: 'Weight your time to the state, not to the nation', note: 'Paper IV is wholly Telangana and Papers II and III are substantially so. National general studies is one paper out of four.' },
          { text: 'Build the movement as three dated blocks', note: 'the syllabus itself splits it into 1948-1970, 1971-1990 and 1991-2014. Prepare it in those blocks and the paper’s structure works for you rather than against you.' },
          { text: 'Use one Telangana economy note for two papers', note: 'the state’s resources, irrigation, power and industrial policy are examined in Paper III and reappear as context in Paper IV.' },
          { text: 'Drill general abilities separately', note: 'reasoning and data interpretation inside Paper I improve faster than any amount of additional reading, and they are the most reliably winnable marks in the examination.' },
          { text: 'Rehearse two papers a day', note: 'the examination ran across two days with two 2½-hour papers each. Sustained accuracy in an afternoon paper is a separate skill from accuracy in a morning one.' },
        ],
      },
      {
        type: 'note',
        title: 'Prepare for a long wait',
        text: 'Two years passed between the 28/2022 notification and the examination, and selections a year after that are still provisional. Build a routine that survives repeated postponement — the candidates who did well in this cycle were the ones still preparing when the date finally held.',
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. Vacancies, eligibility, fees, qualifying marks and the scheme of examination are taken from Notification No. 28/2022 and the commission’s Group-II scheme and syllabus, with the chronology and the litigation caveat from the commission’s own selection notifications. The commission publishes no Group 2 previous-year question papers — its old question papers archive holds none for this examination in any year.`,
      },
      {
        type: 'links',
        title: 'Official sources for this page',
        items: [
          { label: 'TGPSC notifications', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'TGPSC scheme and syllabus documents', href: 'https://websitenew.tgpsc.gov.in/SyllabusCMS' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
          { label: 'TGPSC results, keys and OMR sheets', href: 'https://websitenew.tgpsc.gov.in/resukeyomr.jsp' },
          { label: 'TGPSC old question papers archive', href: 'https://websitenew.tgpsc.gov.in/oldquestionp.jsp' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 2 syllabus — what each of the four objective papers covers, and how much of it is Telangana-specific.',
        lead: [
          'Four papers, four different subjects, and a state layer inside every one of them. The syllabus is wide rather than deep, which changes how it should be read.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Paper I — General Studies and General Abilities',
                'Current affairs of regional, national and international importance; international relations and events; general science and everyday applications, with developments in science and technology and in information technology; environmental issues and disaster management; world geography, Indian geography and the geography of Telangana; the history and cultural heritage of India; society, the Constitution and governance; logical reasoning, analytical ability and data interpretation; and basic English at a general level.',
              ],
              [
                'Paper II — History, Polity and Society',
                'The socio-cultural history of India and of Telangana; the Indian Constitution and the political system, including the structure of government, rights and duties, and the machinery of governance; and social structure, social issues and public policy. Telangana-specific content runs through all three parts rather than sitting in a separate section.',
              ],
              [
                'Paper III — Economy and Development',
                'The Indian economy and development — national income, agriculture, industry and services, planning and public finance, money and banking; and the economy of Telangana, including its resources, agriculture, irrigation, power, industrial policy and development programmes. Also covers issues of development and change, poverty, employment and welfare policy.',
              ],
              [
                'Paper IV — Telangana Movement and State Formation',
                'The idea of Telangana under Hyderabad state, the merger of 1956 and the Gentlemen’s Agreement, the 1969 agitation and its aftermath, the Six-Point Formula, the revival of the movement from the 1990s, the mobilisation of the 2000s across political, cultural and student organisations, and the formation of the state. Documents, commissions, agreements and named actors are all examinable.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Read that list for its proportions. Telangana content appears in every paper and occupies the whole of one, which puts the state layer at somewhere close to a third of the total examination. A candidate preparing from national competitive material alone is preparing for roughly two-thirds of the paper.',
          },
          {
            type: 'note',
            title: 'Confirm the paper structure for your cycle',
            text: 'The commission has changed the number of papers and their subject boundaries between recruitments. Four papers in the structure above is what recent cycles have used, and the notification for your recruitment is what sets it. Download the syllabus attached to that notification and work from it rather than from a general description.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 2 exam pattern — the objective paper structure, how the marks aggregate, and what the absence of an interview means.',
        lead: [
          'One written stage, several papers, and nothing after it but verification. The pattern is simple; what it demands is not.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The paper structure Group 2 has used in recent cycles. Question counts, marks and durations are fixed by the notification for your recruitment — confirm them there.',
            head: ['Paper', 'Subject', 'Format', 'What it decides'],
            rows: [
              ['Paper I', 'General Studies and General Abilities', 'Objective', 'The broadest paper, and the one closest to other competitive exams'],
              ['Paper II', 'History, Polity and Society', 'Objective', 'Rewards depth on the Constitution and on Telangana’s social history'],
              ['Paper III', 'Economy and Development', 'Objective', 'The paper most improved by studying the state’s own economy'],
              ['Paper IV', 'Telangana Movement and State Formation', 'Objective', 'The paper with no substitute source, and the largest differentiator'],
            ],
          },
          {
            type: 'p',
            text: 'Because the papers aggregate, a candidate is competing on a total rather than on any single paper. That makes the weakest paper the one that decides the outcome — improving a paper you score poorly in is worth more than sharpening one you already score well in, and it is the opposite of what most candidates find comfortable.',
          },
          {
            type: 'steps',
            title: 'How to spend the examination day',
            items: [
              { title: 'Attempt in printed order only if it suits you', text: 'Within a paper there is nothing to gain from starting at question one. Take a first pass for the questions you can answer immediately, then a second for the rest.' },
              { title: 'Watch the negative marking rule for your cycle', text: 'Whether wrong answers are penalised, and at what rate, changes how much you should guess. It is stated in the notification, and it should be settled long before the day.' },
              { title: 'Do not spend the general studies paper hunting for certainty', text: 'It is the widest paper and the one where partial knowledge is most common. A steady pace beats a careful one.' },
              { title: 'Bank the movement paper', text: 'It is the most learnable of the four. If it is prepared, it should be your fastest and highest-scoring paper of the day.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 2 previous papers — how to read the archive, and why TSPSC-labelled papers are the right practice material.',
        lead: [
          'Group 2 has an unusually useful archive, because the same four subjects have been examined repeatedly in the same objective format.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Papers set under the TSPSC name are the same examination under the commission’s earlier title. Use them. Between them and the Group 1 prelims papers, there is enough material to see how the commission phrases a question, how deep it goes on the Constitution and the state economy, and how it examines the movement.',
          },
          {
            type: 'list',
            title: 'What the archive tells you that a syllabus cannot',
            items: [
              { text: 'The depth of the polity questions', note: 'whether an article is asked by number or by content, and how often amendments and constitutional bodies appear.' },
              { text: 'How the movement paper is framed', note: 'the balance between chronology, documents, organisations and named individuals. It is not evenly distributed, and the distribution is stable.' },
              { text: 'Which parts of the state economy recur', note: 'irrigation projects, agriculture, power and the state’s development programmes come back more often than general economic theory.' },
              { text: 'The reasoning and data interpretation share', note: 'a small, reliable block of marks in the general abilities paper that responds to a few weeks of practice.' },
              { text: 'The current-affairs window', note: 'roughly how far back regional and national current affairs are drawn from, which tells you when to start compiling.' },
            ],
          },
          {
            type: 'p',
            text: 'Work each paper twice. The first time to time, scored as a mock. The second without a clock, writing a one-line note against every question you got wrong saying whether the cause was recall, misreading or a genuine gap. The second pass is where the paper turns into a study plan.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 2 mock tests — using full-length objective mocks when the written papers are the whole examination.',
        lead: [
          'With no interview and no descriptive stage, a mock is not preparation for the exam — it is the closest thing to the exam you can arrange.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The useful mock is the one that copies the constraint you will actually face: the full paper, the full time, in one sitting, with no pausing and no checking a fact halfway through. Sectional practice builds knowledge; only the full paper measures whether you can hold accuracy for its whole length.',
          },
          {
            type: 'steps',
            title: 'A mock routine for the last three months',
            items: [
              { title: 'One full-length mock a week, same day and time', text: 'Consistency turns the mock into a measurement rather than an event. Sit it at the hour the real paper is scheduled for if you can.' },
              { title: 'Analyse for two hours for every hour written', text: 'Every wrong answer classified as recall, misreading or gap. The classification tells you whether to revise, slow down or study.' },
              { title: 'Track your weakest paper, not your total', text: 'The total will improve on its own if the weakest paper does. Watching the total hides the paper that is holding it down.' },
              { title: 'Sit the movement paper separately, often', text: 'It is finite, learnable and heavily weighted. Repeated testing on it converts directly into marks.' },
            ],
          },
          {
            type: 'note',
            title: 'A mock score is a floor, not a forecast',
            text: 'Read your worst score of the last five mocks rather than your average. The examination will be sat once, possibly on a bad day, and the floor is the honest estimate of what a bad day produces.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC Group 2 preparation — a six to nine month plan across four papers, weighted towards the state-specific content.',
        lead: [
          'Four papers is a scheduling problem before it is a study problem. The plan below rotates them so that nothing goes cold.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A nine-month plan',
            items: [
              { title: 'Months one to two — the movement paper first', text: 'Counter-intuitive and correct. It is finite, it is a full paper, and starting with it means it gets revised the most times before the exam.' },
              { title: 'Months two to four — polity and Indian society', text: 'The Constitution studied properly, once, rather than skimmed three times. Then social structure and policy, which is where Paper II is won.' },
              { title: 'Months four to six — economy, national and state', text: 'Concepts first, then the Telangana economy specifically. Keep the state’s own publications to hand for figures.' },
              { title: 'Months five to eight — general studies and abilities, daily', text: 'Science, geography, environment and reasoning in short daily blocks rather than long sessions, since this paper is about breadth.' },
              { title: 'Throughout — current affairs, twenty minutes a day', text: 'National and Telangana together, in your own notes. It cannot be compressed into the last month, and every paper draws on it.' },
              { title: 'Last two months — full mocks and revision only', text: 'No new material. Weekly full-length papers, and revision cycles that get shorter each time.' },
            ],
          },
          {
            type: 'p',
            text: 'The rotation matters as much as the order. Touch every paper every week, even briefly, because four subjects studied in sequence means the first is nine months stale by the examination. A weekly cycle of four short revision slots is what keeps all four papers live at once.',
          },
          {
            type: 'note',
            title: 'Group 2 preparation carries into Group 3 and Group 4',
            text: 'The general studies spine, the state content and the movement material are shared across the TGPSC groups. Candidates preparing seriously for Group 2 are usually eligible for Group 3 and Group 4 as well, and applying for all three is normal practice — the marginal work is the paper structure rather than the syllabus.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 2 study material — a compact reading list for four objective papers, with the state sources named.',
        lead: [
          'An objective examination rewards a small number of sources revised many times over a large number read once.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'One source per subject',
            items: [
              { text: 'Polity', note: 'a single standard reference on the Constitution and the political system, read twice with the second reading spent on constitutional bodies and centre-state relations.' },
              { text: 'Economy', note: 'a concepts text plus the state’s socio-economic publications for Telangana-specific figures.' },
              { text: 'History and culture', note: 'a modern India narrative for the national portion, and state board textbooks for Telangana’s social and cultural history.' },
              { text: 'Geography and environment', note: 'school-level physical geography upwards, then Indian and Telangana geography with rivers, projects and districts.' },
              { text: 'The movement', note: 'one standard account, plus a chronology you build yourself from past questions.' },
            ],
          },
          {
            type: 'p',
            text: 'State board textbooks deserve a specific mention. For Telangana history, geography and civics they are written at close to the level the paper examines, they are internally consistent, and they are free. They are a better first source than a compiled guide, which is usually assembled from them anyway.',
          },
          {
            type: 'note',
            title: 'Notes should shrink',
            text: 'Whatever you read, the output should be a set of notes that gets shorter with each revision — a subject file that is forty pages after the first pass and five before the examination. Notes that stay the same length have not been revised; they have been rewritten.',
          },
          {
            type: 'list',
            title: 'What not to spend money on',
            items: [
              { text: 'A second guide for a subject you already have one for', note: 'a second source rarely adds coverage; it adds a second version of the same material to revise, which is the opposite of what an objective exam needs.' },
              { text: 'Monthly current-affairs magazines bought and stacked', note: 'useful only if read and reduced to notes. Unread issues are the most common unused purchase in state-exam preparation.' },
              { text: 'A separate book for the movement paper on top of the state textbooks', note: 'the textbooks and past papers cover it. A guide is worth buying only if you find the chronology genuinely hard to build alone.' },
              { text: 'A test series bought early', note: 'a test series earns its price in the last three months, when you have something to measure. Bought at the start, most of it expires unused.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
              { label: 'Current affairs preparation', to: '/current-affairs/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 2 exam pattern?',
        a: 'Recent Group 2 recruitments have used four objective papers — general studies and general abilities; history, polity and society; economy and development; and the Telangana movement and state formation — with the marks aggregated across the papers to build the merit list. There is no interview, and certificate verification follows the written result. Question counts, marks, duration and the negative marking rule are set by the notification for your recruitment.',
      },
      {
        q: 'Is there an interview in TGPSC Group 2?',
        a: 'No. Selection rests entirely on the written papers, followed by certificate verification and post allotment. That is why full-length timed practice matters more in Group 2 than in Group 1 — there is no later stage in which a poor written performance can be recovered.',
      },
      {
        q: 'Which posts does TGPSC Group 2 fill?',
        a: 'Group 2 fills degree-level executive and supervisory posts across state departments — Assistant Commercial Tax Officer, Sub-Registrar, Excise Sub-Inspector, Assistant Section Officer in the secretariat and Municipal Commissioner Grade III are among the posts that have appeared in recent notifications. The exact list varies with each recruitment.',
      },
      {
        q: 'How much of TGPSC Group 2 is Telangana-specific?',
        a: 'One whole paper is devoted to the Telangana movement and state formation, and Telangana content also runs through the history, society, geography and economy portions of the other papers. Taken together the state layer is close to a third of the examination, which is why national competitive material on its own is not sufficient preparation.',
      },
      {
        q: 'Can I prepare for Group 2 and Group 3 together?',
        a: 'Yes, and most serious candidates do. The general studies spine, the Telangana content and the movement material are shared across the TGPSC groups; what differs is the number of papers and the way subjects are bundled into them. Prepare the syllabus once and adapt to each group’s paper structure.',
      },
    ],
  },
  /* ── TGPSC Group 3 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-3',
    path: '/government-exams/state/telangana/tgpsc-group-3/',
    name: 'TGPSC Group 3',
    fullName: 'Telangana Government Public Service Commission Group 3 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 3 2026: Syllabus, Paper Pattern & Preparation',
    metaDescription:
      'TGPSC Group 3 guide — the objective paper structure, syllabus for each paper, how it differs from Group 2 and Group 4, and a preparation plan.',
    lead: [
      'TGPSC Group 3 fills degree-level posts across state departments, corporations and public undertakings — statistical, accounts and administrative roles that sit below the supervisory posts of Group 2 and above the ministerial posts of Group 4.',
      'It is the least understood of the four groups, largely because it is notified less often. Its syllabus is drawn from the same body of material as Group 2, and the practical question for a candidate is not what to study but how to sit three recruitments off one preparation.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree from a recognised university'],
      ['Format', 'Objective papers; no interview'],
      ['Papers', 'Three in recent cycles — general studies and general abilities, history, polity and society, and economy and development'],
      ['Selection', 'Written marks, then certificate verification'],
      ['Shared preparation', 'Substantially the same syllabus as Group 2, in fewer papers'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 3 has filled degree-level posts across departments and public undertakings, in statistical, accounts and administrative work. It is notified less regularly than Group 2 or Group 4, which means candidates often meet it as a recruitment that opens at short notice while they are already preparing for something else.',
      },
      {
        type: 'p',
        text: 'That is the right way to approach it. In recent cycles the examination has been three objective papers covering general studies and general abilities, history, polity and society, and economy and development — the same subjects Group 2 examines, bundled differently. A candidate prepared for Group 2 is substantially prepared for Group 3, and the reverse is nearly true.',
      },
      {
        type: 'list',
        title: 'Where Group 3 sits among the four groups',
        items: [
          { text: 'Above Group 4 in level', note: 'Group 4 pairs general studies with a secretarial abilities paper; Group 3 examines subject papers instead.' },
          { text: 'Below Group 2 in paper count', note: 'fewer papers, drawn from the same syllabus, which usually means each is examined with slightly less depth.' },
          { text: 'Entirely written, like Group 2', note: 'no interview, no descriptive stage, and the same consequence — the written day is the whole recruitment.' },
          { text: 'Notified irregularly', note: 'which makes a standing preparation more valuable than a campaign started when the notification appears.' },
        ],
      },
      {
        type: 'note',
        title: 'Read the notification for the paper list',
        text: 'Group 3 has appeared with different paper structures across its history. Three objective papers is what the recent cycle used. Before planning around any structure — including this one — download the syllabus attached to your notification, because it is the document the paper is actually set from.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, multiple papers',
        detail:
          'Papers covering general studies and general abilities, history, polity and society, and economy and development, with Telangana-specific content inside each. Marks are aggregated across the papers.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Age, qualification, category, local status and any claimed relaxation verified against the originals for candidates called in order of merit.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Allotment by merit against submitted preferences, within the reservation and zonal rules applying to the recruitment.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. The most recent Group 3 cycle is Notification No. 29/2022 of 30 December 2022, and it is still being closed out — the written examination was held almost two years after the notification, and selections were still being released in mid-2026. No newer Group 3 notification has been issued.`,
      },
      {
        type: 'table',
        caption:
          'The 29/2022 cycle, end to end. The gap between the notified exam window and the exam actually held is the single most useful thing to know about this recruitment.',
        head: ['Stage', 'When'],
        rows: [
          ['Notification issued', '30 December 2022'],
          ['Applications', '24 January to 23 February 2023'],
          ['Written examination held', '17 and 18 November 2024'],
          ['General ranking list', '14 March 2025'],
          ['Provisional selection', '18 December 2025'],
          ['Further selections released', 'Sports quota on 1 June 2026; Post Code 105 and the MH category on 24 June 2026'],
        ],
      },
      {
        type: 'list',
        title: 'Vacancies in the 29/2022 cycle',
        items: [
          { text: '1,363 posts notified across 105 post codes', note: 'the bulk of them Junior Assistant, alongside Senior Accountant, Junior Accountant, Auditor, Senior Auditor, Assistant Auditor and Accountant lines.' },
          { text: 'Revised to 1,375 by an addendum of 16 February 2023', note: 'which added 12 vacancies to Post Code 15, Junior Assistant in the BC Welfare Residential Educational Institutions Society.' },
          { text: 'At selection: 1,370 filled', note: 'with 17 vacancies across Post Codes 60, 105 and the MH category held back for later declaration and one withheld pending verification. The 2026 notifications released most of those.' },
        ],
      },
      {
        type: 'note',
        title: 'No Group 3 notification has been issued for 2024, 2025 or 2026',
        text: 'The commission’s 2026 recruitment list carries specialised posts — Town Planning, Seed Certification Officer, Assistant Executive Engineer, DIET Lecturer and similar — and no Group 3 cycle. Vacancy counts and application dates being published elsewhere for a "Group 3 2026 notification" do not appear in any commission document. Check the direct recruitment list yourself before acting on one.',
      },
      {
        type: 'links',
        title: 'Check the cycle status at source',
        items: [
          { label: 'TGPSC direct recruitment notifications', href: 'https://websitenew.tgpsc.gov.in/directRecruitment' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
        ],
      },
    ],
    eligibility: [
      {
        type: 'table',
        caption:
          'Eligibility as fixed by Notification No. 29/2022. Age was reckoned as on 1 July 2022 for that cycle; a future notification will set its own reckoning date, so read the age rule as a structure rather than as a date you can reuse.',
        head: ['Requirement', 'What the notification set'],
        rows: [
          ['Qualification', 'A degree from a university in India established by a Central, Provincial or State Act, or an equivalent qualification. A few post codes ask for more: Post Code 31 for a degree including computer science, Post Code 42 for computers as an optional subject or a technical board certificate, and Post Codes 60 and 105 for a post-graduate diploma in computers.'],
          ['Typewriting', 'Post Code 105, Junior Assistant cum Typist, additionally required a pass in the Government Technical Examination in Typewriting, Higher Grade in Telugu. This is an educational qualification to be held at application, not a skill test in the selection.'],
          ['Age', '18 to 44 years as on 1 July 2022 — the upper limit having been raised from 34 to 44 by government order in March 2022.'],
          ['Age relaxation', 'Telangana government employees up to 5 years by length of regular service; ex-servicemen 3 years plus service rendered; NCC instructors 3 years plus service; SC, ST, BC and EWS candidates 5 years; persons with disability 10 years. No candidate remains eligible past 61 years after relaxation.'],
          ['Application processing fee', '₹200, payable by every applicant with no exemption.'],
          ['Examination fee', '₹80, from which unemployed candidates were exempt on filing a declaration. Government employees at any level paid it. There was no fee concession by community or gender.'],
        ],
      },
      {
        type: 'note',
        title: 'One post code carries a religion requirement',
        text: 'Post Code 78, in the Endowments Department, is reserved under Rule 3 of the Telangana Ministerial Service Rules 1988 to candidates professing the Hindu religion. It is the kind of clause that only appears in the post-code table, which is why the table is worth reading in full rather than skimming the general eligibility paragraph.',
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'The Group 3 scheme of examination: three objective papers, equal in length and weight, 450 marks in total. There is no interview and no skill test.',
        head: ['Paper', 'Subject', 'Questions', 'Marks', 'Duration'],
        rows: [
          ['Paper I', 'General Studies and General Abilities', '150', '150', '2½ hours'],
          ['Paper II', 'History, Polity and Society — three sections of 50 questions each', '150', '150', '2½ hours'],
          ['Paper III', 'Economy and Development — three sections of 50 questions each', '150', '150', '2½ hours'],
        ],
      },
      {
        type: 'list',
        title: 'The marking rules that decide the paper',
        items: [
          { text: 'Minimum qualifying marks by category', note: '40% for OC, EWS, sportspersons and ex-servicemen; 35% for BC candidates; 30% for SC, ST and PH candidates. Qualifying is not selection — the merit list runs well above these figures.' },
          { text: 'The official documents prescribe no negative marking', note: 'neither the notification nor the commission’s scheme and syllabus contains a deduction clause for a wrong answer. That is what the documents say rather than a guarantee for a future cycle, and it is worth re-checking in your own notification, because it changes whether guessing is rational.' },
          { text: 'Every paper is compulsory', note: 'absence from any one paper disqualifies the candidature entirely, however well the other two went.' },
          { text: 'Deleted questions are compensated, not ignored', note: 'marks for a question withdrawn after objections are awarded proportionately on your performance across the remaining questions, computed to three decimal places.' },
          { text: 'Objections to the answer key are charged', note: '₹500 per objection in the 29/2022 cycle, which makes the preliminary key worth reading carefully rather than contesting speculatively.' },
        ],
      },
      {
        type: 'p',
        text: 'Three papers of the same size means the syllabus is not weighted the way a prelims-and-mains exam is. Paper II and Paper III each carry as many marks as the whole general studies paper, so Telangana history, polity, society, the Indian economy and the state’s own development record are two-thirds of the examination. A candidate who treats them as supporting material for a general studies core has the weighting exactly backwards.',
      },
    ],
    studyPlan: [
      {
        type: 'steps',
        title: 'A four-phase plan built around the three papers',
        items: [
          { text: 'Fix the weighting first', note: 'work out that Papers II and III are 300 of the 450 marks, and allocate study time in that proportion from week one rather than after a first mock says so.' },
          { text: 'Build Telangana as a spine, not a topic', note: 'the socio-cultural history, the statehood movement and the state’s economy run across both of the heavy papers. One timeline and one set of state-economy notes serve Paper II and Paper III together.' },
          { text: 'Take the general abilities section seriously', note: 'reasoning and data interpretation in Paper I are the most improvable marks on the whole paper, because they reward drilled method rather than accumulated reading.' },
          { text: 'Practise all three papers in one sitting', note: 'the examination ran across two days with two papers on the first. Stamina across consecutive 2½-hour objective papers is a real variable and is only trainable by rehearsing it.' },
        ],
      },
      {
        type: 'note',
        title: 'Prepare on the assumption of a long gap',
        text: 'In the last cycle almost two years passed between the notification and the written examination. That is long enough for current affairs to turn over completely and long enough for motivation to lapse. Plan a maintenance routine you can hold for a year, rather than a sprint timed to the date printed in the notification.',
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. Vacancies, eligibility, fees, qualifying marks and the scheme of examination are taken from Notification No. 29/2022 and the commission’s Group-III scheme and syllabus. The commission publishes no Group 3 previous-year question papers: its old question papers page carries none for this examination in any year, so material offered elsewhere as an official Group 3 paper did not come from the commission's archive.`,
      },
      {
        type: 'links',
        title: 'Official sources for this page',
        items: [
          { label: 'TGPSC direct recruitment notifications', href: 'https://websitenew.tgpsc.gov.in/directRecruitment' },
          { label: 'TGPSC scheme and syllabus documents', href: 'https://websitenew.tgpsc.gov.in/SyllabusCMS' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
          { label: 'Group-III provisional selection preamble', href: 'https://www.tgpsc.gov.in/uploadPDF/GROUP_3/Group-III%20selection%20Preamble.pdf' },
          { label: 'TGPSC old question papers archive', href: 'https://websitenew.tgpsc.gov.in/oldquestionp.jsp' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 3 syllabus — what each objective paper covers, and how it overlaps with the Group 2 syllabus.',
        lead: [
          'The syllabus is the Group 2 material in fewer containers. What changes is not the reading list but how much of it each paper has to carry.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Paper I — General Studies and General Abilities',
                'Current affairs of regional, national and international importance; general science and everyday applications; developments in science, technology and information technology; environmental issues and disaster management; world, Indian and Telangana geography; Indian history and cultural heritage; society, the Constitution and governance; logical reasoning, analytical ability and data interpretation.',
              ],
              [
                'Paper II — History, Polity and Society',
                'The socio-cultural history of India and of Telangana; the Constitution and the political system, including the structure of government, rights and duties and the machinery of governance; social structure, social issues and public policy. Telangana’s history, its social reform movements and the statehood movement are examined within this paper.',
              ],
              [
                'Paper III — Economy and Development',
                'The Indian economy — national income, agriculture, industry and services, planning, public finance, money and banking; the economy of Telangana, including resources, agriculture, irrigation, power and industrial policy; and issues of development, poverty, employment and welfare.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The Telangana movement does not disappear when it is not a separate paper. It is examined inside the history, polity and society paper and in the general studies paper, which means the same material is needed and only its share of the total changes. Prepare it as though it were a full paper regardless of how it is packaged.',
          },
          {
            type: 'links',
            title: 'Shared preparation',
            items: [
              { label: 'TGPSC Group 2 syllabus', to: '/government-exams/state/telangana/tgpsc-group-2/syllabus/' },
              { label: 'Telangana government exams hub', to: '/government-exams/state/telangana/' },
              { label: 'Study material by subject', to: '/study-material/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 3 exam pattern — the objective paper structure, aggregation of marks and what follows the written stage.',
        lead: [
          'One written stage decides the recruitment. Everything after it is verification.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The structure used in the recent Group 3 cycle. Paper count, question numbers, marks and duration are set by your notification — confirm them there before planning.',
            head: ['Paper', 'Subject', 'Format', 'Emphasis'],
            rows: [
              ['Paper I', 'General Studies and General Abilities', 'Objective', 'Breadth, current affairs and a reasoning block'],
              ['Paper II', 'History, Polity and Society', 'Objective', 'The Constitution, and Telangana’s social and political history'],
              ['Paper III', 'Economy and Development', 'Objective', 'National concepts applied to the state’s own economy'],
            ],
          },
          {
            type: 'p',
            text: 'Fewer papers means each carries more of the total, so a weak paper costs proportionally more here than in Group 2. The practical rule is the same and applies harder: work on the paper you score worst in, not the one you enjoy most.',
          },
          {
            type: 'steps',
            title: 'Settle these before the day',
            items: [
              { title: 'The negative marking rule', text: 'Whether wrong answers are penalised and at what rate decides how much you should guess. It is in the notification.' },
              { title: 'The question-to-minute ratio', text: 'Work out how many seconds a question you have, and practise at that pace rather than at a comfortable one.' },
              { title: 'Your order of attempt within each paper', text: 'A first pass for immediate answers and a second for the rest reliably beats working straight through.' },
              { title: 'The zonal and local status rules that apply to you', text: 'They affect which vacancies you compete for, and they are settled at verification rather than negotiated.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 3 previous papers — a thin archive, and how to supplement it with Group 2 and Group 1 prelims papers.',
        lead: [
          'Group 3 is notified irregularly, so its own archive is small. The material to practise on is the commission’s other papers, which are set to the same syllabus by the same body.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Where Group 3 papers exist, work them first and to time. Beyond that, the Group 2 papers and the Group 1 preliminary papers are the closest available practice: the same commission, the same syllabus areas, the same objective format and the same habits of phrasing. Papers issued under the TSPSC name are the same examination under the earlier title.',
          },
          {
            type: 'list',
            title: 'How to use another group’s paper honestly',
            items: [
              { text: 'Match the subject, not the label', note: 'a Group 2 economy paper is practice for the Group 3 economy paper whatever the cover says.' },
              { text: 'Adjust for depth, not for content', note: 'the topics recur across groups; the level of detail varies. Note which questions felt beyond the level of your own paper rather than discarding them.' },
              { text: 'Keep the timing honest', note: 'set the clock to your own paper’s question-to-minute ratio rather than the source paper’s.' },
              { text: 'Mine the state questions from every paper', note: 'Telangana geography, history, economy and movement questions are worth collecting across all the commission’s papers into one file.' },
            ],
          },
          {
            type: 'note',
            title: 'Keep one file of state questions across every paper you work',
            text: 'Telangana geography, history, culture, schemes and the statehood movement are asked in every TGPSC paper at every level. Collecting those questions out of each paper you work into a single running file builds, over a few months, the most exam-specific state revision document available to you — and unlike a purchased compilation, every entry in it has actually been asked.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'TGPSC Group 2 previous papers', to: '/government-exams/state/telangana/tgpsc-group-2/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 3 mock tests — building a testing routine when the recruitment is notified at short notice.',
        lead: [
          'Group 3 rewards candidates who are already tested rather than candidates who start testing when the notification appears.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The gap between a Group 3 notification and its examination is not always generous. A candidate who has been sitting full-length objective papers regularly for other TGPSC recruitments arrives with the format already familiar and only has to adjust the paper count. A candidate starting from scratch is learning exam craft and subject matter at once.',
          },
          {
            type: 'steps',
            title: 'A testing routine that stays ready',
            items: [
              { title: 'A full-length objective paper every week, whatever is notified', text: 'The subject can rotate; the habit should not. This is what makes a short notification window survivable.' },
              { title: 'Sectional tests on the state content, fortnightly', text: 'Telangana geography, history, economy and the movement. Finite material, and the fastest-improving part of any score.' },
              { title: 'A reasoning and data interpretation drill, twice a week', text: 'Twenty minutes. It is a mechanical skill and it decays quickly without use.' },
              { title: 'Full three-paper simulation once the notification is out', text: 'Papers back to back on one day, to find where concentration actually fails.' },
            ],
          },
          {
            type: 'note',
            title: 'Test the state content separately from everything else',
            text: 'A general mock dilutes the Telangana questions across a full paper, which hides how you are doing on them. Pull them out: a twenty-question test on state geography, history, schemes and the statehood movement, sat fortnightly, gives you a reading on the block that most differentiates candidates. It is also the fastest score to move, because the material is finite and the questions repeat.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC Group 3 preparation — how to prepare once and sit Group 2, Group 3 and Group 4 off the same work.',
        lead: [
          'The efficient way to prepare for Group 3 is not to prepare for Group 3. It is to prepare the TGPSC syllabus and adapt to whichever paper structure is notified.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A shared preparation, adapted per group',
            items: [
              { title: 'Build the common core once', text: 'Polity, modern history, Indian and Telangana geography, the state economy and the statehood movement. Every TGPSC group examines this material.' },
              { title: 'Add current affairs as a daily habit, not a subject', text: 'Twenty minutes covering national and Telangana developments, kept in your own notes. It feeds every paper in every group.' },
              { title: 'Add the reasoning and general abilities layer', text: 'Shared with Group 4’s secretarial abilities paper and with Group 2’s general abilities paper. A small, reliable block of marks.' },
              { title: 'Adapt only at the end', text: 'When a notification comes, the work is learning that group’s paper count, marks and timing — a week of adjustment on a base you already have.' },
            ],
          },
          {
            type: 'p',
            text: 'This is not a shortcut. It is a recognition that TGPSC examines one body of material across several recruitments, and that a candidate whose preparation is organised by subject rather than by notification can sit whichever recruitment opens. Applying to Group 2, Group 3 and Group 4 in the same cycle is ordinary practice.',
          },
          {
            type: 'note',
            title: 'Eligibility still has to be checked per recruitment',
            text: 'Sharing preparation does not mean sharing eligibility. Age limits, qualification requirements, local status and any post-specific conditions are set separately in each notification, and they occasionally differ between groups. Check them for each recruitment you apply to.',
          },
          {
            type: 'list',
            title: 'What to do in the weeks after a notification appears',
            items: [
              { text: 'Read the syllabus attached to the notification line by line', note: 'against your existing notes, marking anything it names that you have not covered. That list is the whole of your new work.' },
              { text: 'Fix the paper arithmetic', note: 'questions, marks, minutes and the negative marking rule, converted into a per-question pace you then practise at.' },
              { text: 'Sit a full simulation in week one, not week four', note: 'so the gap between your current state and the paper is known while there is still time to act on it.' },
              { text: 'Stop reading new material two weeks out', note: 'the last fortnight belongs to revision and mocks. Material met for the first time in that window rarely survives to the examination.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 3 study material — the same core reading as Group 2, with the state sources that carry the most weight.',
        lead: [
          'A shared syllabus means a shared reading list. What changes between the groups is how much revision each subject gets, not what you read.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'The core list',
            items: [
              { text: 'Polity', note: 'one standard reference on the Constitution and the political system, revised rather than replaced.' },
              { text: 'Economy', note: 'a concepts text, plus the state’s socio-economic publications for the Telangana portion.' },
              { text: 'History', note: 'a modern India narrative, and state board textbooks for Telangana’s social and cultural history.' },
              { text: 'Geography', note: 'physical geography from a school text upwards, then Indian and Telangana geography — rivers, projects, districts, resources.' },
              { text: 'The statehood movement', note: 'one account plus a chronology built from past questions, revised weekly.' },
            ],
          },
          {
            type: 'p',
            text: 'Telangana state board textbooks are the single most efficient source in this list. They are written at close to the level the papers examine, they are internally consistent, and the Telangana content in most compiled guides is drawn from them.',
          },
          {
            type: 'list',
            title: 'Using one set of notes across three recruitments',
            items: [
              { text: 'Organise notes by subject, never by exam', note: 'a polity file serves Group 2, Group 3 and Group 4 alike. A "Group 3 file" has to be rebuilt the moment a different notification appears.' },
              { text: 'Keep the Telangana material in one place', note: 'geography, history, culture, state schemes and the statehood movement in a single file, since every TGPSC paper draws on it.' },
              { text: 'Mark depth rather than duplicating', note: 'where one group goes deeper than another, note it in the margin instead of keeping two versions of the same topic.' },
              { text: 'Date your current-affairs notes', note: 'so that when a notification fixes an examination window you can see immediately which months matter.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'TGPSC Group 2 study material', to: '/government-exams/state/telangana/tgpsc-group-2/study-material/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 3 exam pattern?',
        a: 'The recent Group 3 cycle used three objective papers — general studies and general abilities; history, polity and society; and economy and development — with marks aggregated across the papers and no interview. Certificate verification follows the written result. Because Group 3 is notified irregularly and its structure has varied, confirm the paper list, marks and duration in the notification for your recruitment.',
      },
      {
        q: 'How is TGPSC Group 3 different from Group 2?',
        a: 'They are drawn from the same syllabus but bundled differently. Group 2 has used four papers including one devoted entirely to the Telangana movement and state formation; Group 3 has used three, with that material examined inside the history, polity and society paper and the general studies paper. Group 3 posts sit a level below Group 2 posts, and both are decided by the written papers alone.',
      },
      {
        q: 'Which posts are filled through TGPSC Group 3?',
        a: 'Group 3 has filled degree-level posts across state departments, corporations and public undertakings, in statistical, accounts and administrative work. The post list and the vacancies in each are set by the notification for that recruitment, and they vary considerably between cycles.',
      },
      {
        q: 'Can the same preparation cover Group 2, Group 3 and Group 4?',
        a: 'Largely, yes. The general studies core, the Telangana content and the statehood movement material are examined in all of them. What differs is the paper structure — Group 4 pairs general studies with a secretarial abilities paper, while Groups 2 and 3 examine subject papers. Prepare the syllabus by subject and adapt to the structure when a notification appears.',
      },
    ],
  },

  /* ── TGPSC Group 4 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-4',
    path: '/government-exams/state/telangana/tgpsc-group-4/',
    name: 'TGPSC Group 4',
    fullName: 'Telangana Government Public Service Commission Group 4 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 4 2026: Syllabus, Two-Paper Pattern & Mocks',
    metaDescription:
      'TGPSC Group 4 guide — the general studies and secretarial abilities papers, posts filled, eligibility, previous papers and a preparation plan.',
    lead: [
      'TGPSC Group 4 fills the junior assistant and ministerial posts that keep state offices running — Junior Assistant, Junior Accountant, Junior Auditor, Ward Officer, Matron and Supervisor among them. It is the largest recruitment the commission runs by number of applicants, and the last cycle notified more than eight thousand posts.',
      'Its structure is the simplest of the four groups: two objective papers, one on general studies and one on secretarial abilities. That second paper is what makes Group 4 different from everything else TGPSC sets, and it is the one most candidates underestimate.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree — Group 4 is graduate-level despite the junior posts'],
      ['Papers', 'Two — General Studies, and Secretarial Abilities'],
      ['Format', 'Objective; no interview'],
      ['Selection', 'Written marks alone, then certificate verification. No interview and no typing test'],
      ['Typical posts', 'Junior Assistant, Junior Accountant, Junior Auditor, Ward Officer, Matron, Supervisor'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 4 is the entry point into the state’s ministerial service. The posts are office-based — maintaining records, processing files, handling accounts and collections at the municipal and departmental level — and they are the posts most Telangana graduates first apply for. The consequence is a field measured in lakhs and a cutoff that moves with accuracy rather than with knowledge.',
      },
      {
        type: 'p',
        text: 'The examination is two objective papers. The general studies paper is the familiar one, covering current affairs, history, polity, geography, economy, science and Telangana-specific content including the statehood movement. The secretarial abilities paper is not familiar: it examines mental ability, reasoning, comprehension, sentence rearrangement, communication in English and basic computer knowledge — the skills the job itself uses.',
      },
      {
        type: 'list',
        title: 'Why the secretarial abilities paper decides the result',
        items: [
          { text: 'It is scorable in full', note: 'unlike general studies, where knowledge is always partial, this paper is a set of learnable skills. Well-prepared candidates approach full marks.' },
          { text: 'It is what everyone else neglects', note: 'candidates arriving from Group 2 preparation treat it as an afterthought and lose the paper that was easiest to win.' },
          { text: 'It rewards speed over depth', note: 'reasoning, comprehension and rearrangement questions respond to drilling, not to study.' },
          { text: 'The computer section is finite', note: 'basic hardware, software, office applications and internet concepts — a small syllabus that can be closed completely.' },
        ],
      },
      {
        type: 'note',
        title: 'A degree is required for every post',
        text: 'Group 4 is a graduate-level recruitment despite the junior nature of the posts. Individual post codes vary — some ask for a commerce degree, one for B.Com (Computers), and Ward Officer required a graduate with 50% aggregate, 40% for SC and ST candidates. Check the qualification clause for the specific post code you are applying to rather than for the group as a whole.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, two papers',
        detail:
          'Paper I on general studies and general abilities, and Paper II on secretarial abilities. Both are objective, both count, and the total across them builds the merit list.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Age, qualification, category, local status and claimed relaxations verified against originals for candidates called in order of merit — at three times the number of vacancies, and five times for candidates with disabilities.',
      },
      {
        name: 'Medical certificate, for two post codes only',
        mode: 'Physical requirements',
        detail:
          'Matron Grade-II and Supervisor posts carry notified height, weight and chest requirements, certified by a government Civil Assistant Surgeon. Re-examination of the physical measurement is not entertained. No other Group 4 post has a physical standard.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Allotment by merit against submitted preferences, within the reservation and local-cadre rules applying to the recruitment.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. The most recent Group 4 cycle is Notification No. 19/2022 of 1 December 2022 — the largest recruitment the commission has run. The written examination was held in July 2023 and selections were still being released in July 2026, because a run of court cases about degree validity held part of the list back.`,
      },
      {
        type: 'table',
        caption: 'The 19/2022 cycle, end to end.',
        head: ['Stage', 'When'],
        rows: [
          ['Notification issued', '1 December 2022'],
          ['Applications', '30 December 2022 to 3 February 2023, the closing date having been extended from 30 January'],
          ['Written examination held', '1 July 2023'],
          ['Certificate verification', 'June to November 2024'],
          ['First provisional selection', '14 November 2024 — 8,084 candidates selected, 59 withheld'],
          ['Further selections released', 'Seven further tranches, the latest on 23 July 2026'],
        ],
      },
      {
        type: 'list',
        title: 'Vacancies in the 19/2022 cycle',
        items: [
          { text: '8,039 posts notified across 99 post codes', note: 'overwhelmingly Junior Assistant, alongside Junior Accountant, Junior Auditor, Ward Officer, Matron and Supervisor lines.' },
          { text: 'Revised to 8,180 by a second addendum', note: 'which added 141 vacancies to Post Code 11, Junior Assistant in the BC Welfare Residential Educational Institutions Society, taking that post code alone from 289 to 430.' },
          { text: 'Post Code 99 was the single largest item', note: '1,862 Ward Officer vacancies under the Commissioner and Director of Municipal Administration — roughly a quarter of the whole recruitment in one post code.' },
        ],
      },
      {
        type: 'note',
        title: 'Why part of the list took until 2026',
        text: 'Selections were withheld from candidates whose degrees were obtained outside the awarding university’s territorial jurisdiction, on the view that such a degree was not a valid qualification. The commission’s July 2026 notification records that this was resolved under court orders in a batch of writ petitions decided in April 2026, and released the next candidates in merit order. Provisional selections in this recruitment have throughout been published subject to the outcome of pending litigation, which is why a place on a provisional list is not the same as an appointment.',
      },
      {
        type: 'note',
        title: 'No Group 4 notification has been issued since 2022',
        text: 'As at the date checked above, the commission’s recruitment list carries no new Group 4 cycle. Vacancy counts circulating for a "Group 4 2026 notification" are not from any commission document.',
      },
      {
        type: 'links',
        title: 'Check the cycle status at source',
        items: [
          { label: 'TGPSC direct recruitment notifications', href: 'https://websitenew.tgpsc.gov.in/directRecruitment' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
        ],
      },
    ],
    eligibility: [
      {
        type: 'table',
        caption:
          'Eligibility as fixed by Notification No. 19/2022. Age was reckoned as on 1 July 2022 for that cycle — the structure carries forward, the date does not.',
        head: ['Requirement', 'What the notification set'],
        rows: [
          ['Qualification', 'A bachelor’s degree from a university in India established by a Central, State or Provincial Act, or an institution recognised by the UGC. Group 4 is a graduate-level recruitment despite the junior nature of the posts.'],
          ['Post-specific variations', 'Some post codes ask for a commerce degree, one asks for B.Com (Computers), and Ward Officer required a graduate in any discipline with 50% aggregate — 40% for SC and ST candidates. The requirement is set per post code, so read the notification’s own table rather than the general clause.'],
          ['Women-only post codes', 'Post Codes 11(B), 55(B), 75(B) and 88(B), together with the Matron posts, are reserved for women under standing government orders.'],
          ['Age', '18 to 44 years as on 1 July 2022, the upper limit having been raised from 34 to 44 by government order in March 2022.'],
          ['Age relaxation', 'Telangana government employees up to 5 years by length of regular service; ex-servicemen 3 years plus service rendered; NCC instructors 3 years plus service; SC, ST, BC and EWS candidates 5 years; persons with disability 10 years. Eligibility ends at 61 years after relaxation.'],
          ['Application processing fee', '₹200, payable by every applicant with no exemption.'],
          ['Examination fee', '₹80, from which unemployed candidates were exempt on filing a declaration. There was no concession by community or gender.'],
        ],
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'The Group 4 scheme of examination: two objective papers, 300 marks in total, both counting towards the merit list.',
        head: ['Paper', 'Subject', 'Questions', 'Marks', 'Duration'],
        rows: [
          ['Paper I', 'General Studies', '150', '150', '150 minutes'],
          [
            'Paper II',
            'Secretarial Abilities — mental ability verbal and non-verbal, logical reasoning, comprehension, re-arrangement of sentences to improve analysis of a passage, and numerical and arithmetical abilities',
            '150',
            '150',
            '150 minutes',
          ],
        ],
      },
      {
        type: 'note',
        title: 'There is no typing test in Group 4',
        text: 'The Group 4 scheme of examination is the two papers above and nothing else — no interview, no skill test and no typewriting requirement in the educational qualification for any post code. Typewriting does appear in Telangana ministerial recruitment, but in Group 3, for Post Code 105 Junior Assistant cum Typist, and there it is a qualification to be held at the time of applying rather than a test conducted during selection. If you are budgeting months for typing practice on the strength of a Group 4 page saying you will be tested on it, check the notification first.',
      },
      {
        type: 'list',
        title: 'The marking rules that decide the paper',
        items: [
          { text: 'Minimum qualifying marks by category', note: '40% for OC, EWS, sportspersons and ex-servicemen; 35% for BC candidates; 30% for SC, ST and PH candidates. With a field measured in lakhs against these posts, the selection mark sits far above the qualifying mark.' },
          { text: 'The official documents prescribe no negative marking', note: 'neither the notification nor the commission’s scheme and syllabus contains a deduction clause. Confirm it in your own notification before deciding how freely to guess.' },
          { text: 'Both papers are compulsory', note: 'absence from either disqualifies the candidature.' },
          { text: 'Objections to the answer key cost ₹500 each', note: 'charged per objection, so the preliminary key rewards careful reading rather than volume filing.' },
        ],
      },
      {
        type: 'p',
        text: 'Half the examination is Secretarial Abilities, and it is the half that is trainable. General studies rewards a year of accumulated reading; sentence rearrangement, comprehension, reasoning and arithmetic reward drilled method and reward it quickly. In a recruitment where the mark that separates candidates is accuracy under time rather than breadth of knowledge, that is where the marks are actually won.',
      },
    ],
    studyPlan: [
      {
        type: 'steps',
        title: 'A plan that respects the 50/50 split',
        items: [
          { text: 'Give Paper II half your time from the start', note: 'it carries half the marks and improves faster than general studies does. Candidates routinely spend eighty per cent of their preparation on the paper that moves least.' },
          { text: 'Drill the five Secretarial Abilities topics separately', note: 'mental ability, logical reasoning, comprehension, sentence rearrangement and arithmetic each have their own method. Mixing them in one practice session hides which of them is actually costing you marks.' },
          { text: 'Build general studies around Telangana', note: 'the state’s history, geography, economy and the statehood movement recur across the paper, and they are the part no national general-studies book prepares you for.' },
          { text: 'Time every practice paper at 150 minutes for 150 questions', note: 'a minute a question including reading. Accuracy at that pace is the skill being examined, and it is separate from knowing the answers.' },
          { text: 'Rehearse both papers back to back', note: 'five hours of objective examination in a day is a stamina problem as much as a knowledge one.' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. Vacancies, eligibility, fees, qualifying marks and the scheme of examination are taken from Notification No. 19/2022, its addendum and the commission’s Group-IV scheme and syllabus, with the selection chronology from the commission’s own selection notifications. The commission publishes no Group 4 previous-year question papers — its old question papers archive holds none for this examination in any year.`,
      },
      {
        type: 'links',
        title: 'Official sources for this page',
        items: [
          { label: 'TGPSC direct recruitment notifications', href: 'https://websitenew.tgpsc.gov.in/directRecruitment' },
          { label: 'TGPSC scheme and syllabus documents', href: 'https://websitenew.tgpsc.gov.in/SyllabusCMS' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
          { label: 'TGPSC old question papers archive', href: 'https://websitenew.tgpsc.gov.in/oldquestionp.jsp' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 4 syllabus — the general studies paper and the secretarial abilities paper, section by section.',
        lead: [
          'Two papers, and they ask for entirely different things. One is a knowledge paper; the other is a skills paper, and it is the one that can be finished.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Paper I — General Studies and General Abilities',
                'Current affairs of regional, national and international importance; international relations and events; general science, everyday science and developments in science and technology; environmental issues and disaster management; world, Indian and Telangana geography; Indian history and the national movement; the history and cultural heritage of Telangana; society, the Constitution, polity and governance; the Indian economy and the economy of Telangana; policies of the Telangana state; and the Telangana movement and state formation.',
              ],
              [
                'Paper II — Secretarial Abilities: mental ability',
                'Verbal and non-verbal reasoning, series, analogies, coding and decoding, classification, blood relations, direction sense, arrangements, syllogism and analytical puzzles. Answered at speed rather than solved at leisure.',
              ],
              [
                'Paper II — Secretarial Abilities: numerical and arithmetical',
                'Number systems, fundamental operations, percentage, ratio and proportion, average, profit and loss, interest, time and work, time and distance, and interpretation of simple tables and graphs. School-level arithmetic, examined for accuracy under a clock.',
              ],
              [
                'Paper II — Secretarial Abilities: comprehension and communication',
                'Reading comprehension, rearrangement of sentences into a coherent passage, correction of sentences, vocabulary and usage. The section closest to the work the post actually involves — reading a file and writing a clear note.',
              ],
              [
                'Paper II — Secretarial Abilities: computer knowledge',
                'Basic hardware and software concepts, operating systems, word processing and spreadsheets, the internet and email, and elementary data handling. A small, closed syllabus that can be learned completely in a few weeks.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Notice the asymmetry. Paper I is an open syllabus where more study always leaves something uncovered. Paper II is a closed one where a candidate who drills it can approach full marks. In a recruitment decided by a cutoff a mark or two wide, the closed paper is where the decision is made.',
          },
          {
            type: 'note',
            title: 'State policies and the movement are examinable',
            text: 'The Group 4 general studies syllabus names Telangana’s own policies and the statehood movement explicitly. These are examined at a level national material does not reach, and they recur every cycle. Treat them as a named subject rather than as background reading.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 4 exam pattern — the two-paper structure, the marks each carries, and why there is no skill test.',
        lead: [
          'Two papers, both objective, both counting. The examination is short, the field is enormous, and the margin at the cutoff is thin.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The structure Group 4 has used in recent cycles. Question counts, marks, duration and the negative marking rule are set by your notification — confirm them there.',
            head: ['Paper', 'Content', 'Format', 'What decides your score'],
            rows: [
              ['Paper I', 'General Studies and General Abilities', 'Objective', 'Breadth of recall, and the Telangana-specific block'],
              ['Paper II', 'Secretarial Abilities', 'Objective', 'Speed and accuracy on reasoning, arithmetic, comprehension and computers'],
            ],
          },
          {
            type: 'p',
            text: 'With a field this large, the cutoff sits high and the difference between selection and near-miss is a handful of marks. Those marks are almost never found in the general studies paper, where every candidate has partial knowledge of the same topics. They are found in Paper II, where preparation converts directly into accuracy.',
          },
          {
            type: 'steps',
            title: 'Exam-day discipline for a thin margin',
            items: [
              { title: 'Finish Paper II clean rather than fast', text: 'A careless error in arithmetic or rearrangement costs as much as an unknown fact in general studies, and it is entirely avoidable.' },
              { title: 'Know your negative marking rule', text: 'It decides whether an educated guess in general studies is worth making. Settle it from the notification well before the day.' },
              { title: 'Do not leave the computer questions to the end', text: 'They are the quickest marks in the paper. Take them early while you are fresh.' },
              { title: 'Read the comprehension passage once, properly', text: 'Rereading a passage under time pressure is the most common way candidates lose minutes they needed elsewhere.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 4 previous papers — what recurs in both papers, and how to turn the archive into a drill.',
        lead: [
          'Group 4 papers repeat their shape closely from cycle to cycle, which makes the archive unusually predictive.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work the papers in two passes. First to time, as a mock, to establish your real pace. Then question by question, marking each wrong answer as a gap in knowledge, a misreading, or a calculation slip. In Group 4 the third category is usually the largest, and it is the one that responds fastest to attention.',
          },
          {
            type: 'list',
            title: 'What the archive shows',
            items: [
              { text: 'The secretarial abilities paper barely varies', note: 'the same families of reasoning question, the same arithmetic topics, the same comprehension format. This is what makes it drillable.' },
              { text: 'The Telangana share of the general studies paper is large and stable', note: 'geography, history, culture, state policies and the movement together account for a substantial block every cycle.' },
              { text: 'Current affairs are drawn from a recent window', note: 'which tells you when compilation should start rather than how far back to read.' },
              { text: 'The computer questions stay basic', note: 'office applications, internet concepts and elementary hardware. The level does not rise between cycles.' },
              { text: 'Papers labelled TSPSC are the same examination', note: 'the commission was renamed in 2024; the papers before that are current practice material.' },
            ],
          },
          {
            type: 'note',
            title: 'Work the secretarial paper twice as often as the general one',
            text: 'General studies papers have limited replay value once you have read the answers, because those questions will not repeat. The secretarial abilities paper is the opposite: its question families repeat exactly, so re-working an old paper months later is genuine practice rather than recall. Keep the general studies papers for analysis and the secretarial papers for drilling.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 4 mock tests — a testing routine for an exam decided by accuracy at a high cutoff.',
        lead: [
          'When lakhs of candidates sit two short objective papers, the exam measures reliability rather than ceiling. Mocks are how reliability is built.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The number to watch in a Group 4 mock is not the score but the error type. A candidate losing marks to unknown facts needs to study; a candidate losing them to slips needs to slow down by a few seconds a question. Those are opposite remedies, and applying the wrong one is the most common way a plateau sets in.',
          },
          {
            type: 'steps',
            title: 'A twelve-week testing plan',
            items: [
              { title: 'Weeks one to four — sectional tests only', text: 'Reasoning, arithmetic, comprehension and computers separately, twenty minutes each, several times a week. Build the skills before testing them together.' },
              { title: 'Weeks five to eight — one full paper a week', text: 'Both papers, back to back, to time. Analyse for twice as long as you wrote.' },
              { title: 'Weeks nine to twelve — two full papers a week', text: 'Plus a state-content sectional test in between. No new material in this phase.' },
              { title: 'Throughout — an error log', text: 'One line per wrong answer with its cause. Reread it before every mock. This single habit fixes more marks than additional study does.' },
            ],
          },
          {
            type: 'note',
            title: 'What a plateau usually means',
            text: 'Group 4 scores commonly stall for weeks and then move suddenly. A plateau almost never means you need more material; it usually means the error mix has shifted from knowledge gaps to slips, and slips respond to pace rather than to study. If your error log shows more careless mistakes than unknown facts for three mocks running, slow down by a few seconds a question and watch the score before adding anything new to read.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC Group 4 preparation — a four to six month plan that treats the secretarial abilities paper as the priority it is.',
        lead: [
          'Most Group 4 plans put general studies first because it feels like the real paper. That is the wrong way round for a recruitment decided at a high cutoff.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A six-month plan',
            items: [
              { title: 'Months one to two — secretarial abilities, as the main subject', text: 'Reasoning families, arithmetic topics, comprehension technique and the whole computer syllabus. This is the paper you can finish, so finish it first.' },
              { title: 'Months one to six — Telangana content, weekly', text: 'Geography, history, culture, state policies and the statehood movement. The largest predictable block in Paper I.' },
              { title: 'Months two to four — the general studies spine', text: 'Polity, modern history, economy, geography and science, at the level the paper actually asks rather than at Group 1 depth.' },
              { title: 'Months three to six — current affairs daily', text: 'Twenty minutes, national and state together, in your own notes.' },
              { title: 'Months five to six — mocks and revision only', text: 'Two full papers a week, an error log reread before each, and shrinking revision notes.' },
            ],
          },
          {
            type: 'p',
            text: 'One thing not to spend time on is typing practice. The Group 4 scheme has no skill test and no post code in the last cycle required a typewriting qualification — that requirement belongs to Group 3, for the Junior Assistant cum Typist post code, and there it is a certificate to hold before applying rather than a test to prepare for.',
          },
          {
            type: 'note',
            title: 'Apply across the groups in the same cycle',
            text: 'The general studies half of Group 4 preparation is the same material Groups 2 and 3 examine. Candidates who are eligible commonly apply to all three in a cycle, and the additional work for each is the paper structure rather than the syllabus.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 4 study material — a short reading list for general studies, and drill material for secretarial abilities.',
        lead: [
          'One paper needs sources; the other needs practice sets. Buying more of the wrong one is the usual mistake.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'For Paper I',
            items: [
              { text: 'Telangana state board textbooks', note: 'the best single source for state history, geography and civics, at close to the examined level.' },
              { text: 'One polity reference', note: 'read for the structure of government, rights and duties, and constitutional bodies rather than for exhaustive detail.' },
              { text: 'A current-affairs note kept by you', note: 'national and Telangana developments, a page a day, revised weekly. Compilations bought in the last month do not stick.' },
              { text: 'The state’s own policy documents', note: 'for the schemes and programmes the syllabus names explicitly.' },
            ],
          },
          {
            type: 'list',
            title: 'For Paper II',
            items: [
              { text: 'A reasoning practice book worked cover to cover', note: 'chosen for the number of solved sets rather than for its explanations.' },
              { text: 'School arithmetic, drilled', note: 'percentages, ratio, averages, interest, time and work. Speed comes from familiarity, not from technique.' },
              { text: 'Comprehension and rearrangement sets, daily', note: 'ten minutes a day is enough, and it compounds.' },
              { text: 'A basic computer awareness list', note: 'closed syllabus, learnable in a few weeks, and worth completing rather than sampling.' },
            ],
          },
          {
            type: 'note',
            title: 'One book per subject, revised four times',
            text: 'Group 4 is decided by recall under time pressure, and recall comes from repetition rather than from coverage. A candidate who reads one polity reference four times will outscore one who reads four references once, because the second has met more material and remembers less of it. Choose the source early, accept that it is imperfect, and spend the time saved on revision and mocks.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 4 exam pattern?',
        a: 'Group 4 is two objective papers — Paper I on general studies and general abilities, and Paper II on secretarial abilities, which covers mental ability, arithmetic, comprehension and sentence rearrangement, and basic computer knowledge. Each paper carries 150 questions and 150 marks, for a total of 300. Both count towards the merit list, and the scheme has no interview and no skill test. Confirm question counts, marks, duration and the marking rules in your notification.',
      },
      {
        q: 'Is a degree required for TGPSC Group 4?',
        a: 'Yes. Group 4 is a graduate-level recruitment despite the junior nature of the posts, and a bachelor’s degree from a recognised university is the general requirement. Some post codes ask for more — a commerce degree, B.Com (Computers), or a minimum aggregate — so check the qualification clause for the specific post code rather than for the group.',
      },
      {
        q: 'What is the Secretarial Abilities paper?',
        a: 'It is an objective paper testing the skills the job uses: mental ability and reasoning, school-level arithmetic, reading comprehension and rearrangement of sentences, and basic computer knowledge. Unlike general studies it is a closed syllabus, which means a prepared candidate can approach full marks — and because the Group 4 cutoff is high and the field very large, this is usually the paper that decides selection.',
      },
      {
        q: 'Which posts does TGPSC Group 4 fill?',
        a: 'Junior Assistant, Junior Accountant, Junior Auditor, Ward Officer, Matron and Supervisor are among the posts filled through Group 4, across state departments and municipal bodies. In the last cycle the single largest item was 1,862 Ward Officer vacancies under municipal administration. The exact post list and vacancy numbers are set by each notification.',
      },
      {
        q: 'How long does it take to prepare for TGPSC Group 4?',
        a: 'Four to six months of consistent work is a realistic estimate for a graduate starting fresh, with the secretarial abilities paper prepared first because it is the one that can be completed. Candidates already preparing for Group 2 or Group 3 share most of the general studies work and need to add the secretarial abilities paper specifically.',
      },
    ],
  },
  /* ── Teaching posts ────────────────────────────────────────── */
  {
    slug: 'teaching-posts',
    path: '/government-exams/state/telangana/teaching-posts/',
    name: 'Telangana Teaching Posts',
    fullName: 'Telangana teacher recruitment — TET, DSC and residential school posts',
    authority:
      'School Education Department, Telangana, and the Telangana Residential Educational Institutions Recruitment Board',
    official: 'schooledu.telangana.gov.in',
    seoTitle: 'Telangana Teaching Jobs 2026: TET, DSC & Gurukul Recruitment',
    metaDescription:
      'Telangana teaching recruitment guide — how TET, DSC and residential school recruitment fit together, eligibility, syllabus, papers and preparation.',
    lead: [
      'Teaching recruitment in Telangana runs on three tracks that are easy to confuse. The Teacher Eligibility Test qualifies you. The District Selection Committee recruitment appoints you to a government school. The residential institutions board recruits separately for the state’s gurukul schools and colleges.',
      'The order matters, because the eligibility test is a prerequisite rather than a competitor to the recruitment test, and its score has carried weight in the selection alongside the recruitment paper. A candidate who treats the eligibility test as a formality to be scraped through has given away marks that count later.',
    ],
    quickFacts: [
      ['Eligibility test', 'Telangana TET — Paper I for classes I to V, Paper II for classes VI to VIII'],
      ['Recruitment test', 'DSC or Teacher Recruitment Test, for government school posts'],
      ['Residential institutions', 'Recruited separately by the residential educational institutions board'],
      ['Qualification', 'The teacher training qualification prescribed for the post — D.El.Ed, B.Ed or the subject equivalent'],
      ['TET validity', 'Lifetime, following the national change to the validity rule'],
      ['Posts', 'Secondary Grade Teacher, School Assistant, Language Pandit, Physical Education Teacher, and gurukul TGT, PGT and lecturer posts'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The three tracks fit together like this. The Telangana Teacher Eligibility Test establishes that you meet the national standard to teach at a given level — Paper I for primary classes, Paper II for upper primary. Passing it does not appoint you to anything. The recruitment test conducted for the District Selection Committee is the competitive examination that fills government school vacancies, and it is here that the merit list is built. The residential educational institutions board runs its own recruitment for the state’s gurukul schools, junior colleges and degree colleges, with its own notification, syllabus and calendar.',
      },
      {
        type: 'p',
        text: 'What ties the first two together is weightage. In recent cycles the eligibility test score has contributed to the final selection alongside the recruitment test rather than acting purely as a gate. That makes the eligibility test worth preparing for properly the first time, since a lifetime-valid score sat carelessly follows a candidate into every subsequent recruitment.',
      },
      {
        type: 'list',
        title: 'The posts these recruitments fill',
        items: [
          { text: 'Secondary Grade Teacher', note: 'primary classes, requiring the primary teacher training qualification and a Paper I eligibility pass.' },
          { text: 'School Assistant', note: 'upper primary and secondary classes in a specific subject, requiring a degree in that subject with B.Ed and a Paper II pass.' },
          { text: 'Language Pandit', note: 'Telugu, Hindi, Urdu or the relevant language, with the prescribed language teaching qualification.' },
          { text: 'Physical Education Teacher and Physical Director', note: 'with the prescribed physical education qualification.' },
          { text: 'Gurukul TGT, PGT and lecturer posts', note: 'in the state’s residential schools, junior colleges and degree colleges, recruited by the residential institutions board.' },
        ],
      },
      {
        type: 'note',
        title: 'Qualification rules are post-specific and unforgiving',
        text: 'Teacher recruitment is governed by national teacher education regulations as well as state rules, and the qualification prescribed for a post — the training course, the subject combination in your degree, the method subject — is checked exactly at verification. Read the qualification clause for the specific post before you apply, and take the eligibility question to the notification rather than to advice.',
      },
    ],
    stages: [
      {
        name: 'Telangana TET',
        mode: 'Objective, qualifying with weightage',
        detail:
          'Paper I for candidates intending to teach classes I to V and Paper II for classes VI to VIII, covering child development and pedagogy, languages, mathematics, environmental studies or the relevant subject content. A pass is valid for life, and the score has carried weight in recent recruitment selections.',
      },
      {
        name: 'Recruitment test',
        mode: 'Objective, competitive',
        detail:
          'The District Selection Committee recruitment examination for government school posts, covering general knowledge, perspectives in education, pedagogy and the content of the subject applied for. This paper builds the merit list.',
      },
      {
        name: 'Residential institutions recruitment',
        mode: 'Objective, separate notification',
        detail:
          'The state’s residential educational institutions board conducts its own recruitment for gurukul school, junior college and degree college posts, with its own syllabus, pattern and schedule.',
      },
      {
        name: 'Verification and appointment',
        mode: 'Documents',
        detail:
          'Certificate verification at three candidates per vacancy, then selection on roster-cum-merit and allotment by the District Educational Officer. There is no waiting list — unfilled posts are carried forward to the next recruitment.',
      },
    ],
    /*
     * The distinction that leads this section is not a detail. Telangana ran a
     * special in-service TET in September 2026 alongside its regular cycles,
     * and a pass in the in-service test is expressly barred from use in direct
     * recruitment. A DSC aspirant who sits the wrong one loses a year.
     */
    updates: [
      {
        type: 'note',
        title: 'Two different TETs run in Telangana — only one counts for DSC',
        text: `Checked ${CHECKED}. The regular Telangana TET is the one a DSC aspirant needs, and it now runs twice a year. A separate in-service TET was conducted on 8 and 9 September 2026 for teachers already in service, and a pass in it may be used only to continue in the present post or to be promoted — it cannot be used for direct recruitment. Check which test a notification is for before you apply to it.`,
      },
      {
        type: 'p',
        text: 'Telangana now holds TET twice a year because the Supreme Court told every state to. In September 2025 the court held that in-service teachers with more than five years to superannuation must qualify TET to remain in service, and that promotion also requires it; on review in May 2026 it extended the deadline to 31 August 2028, directed states to conduct the test periodically and preferably twice a year, and said no further extension would be entertained. The special in-service cycles are Telangana’s response to that direction.',
      },
      {
        type: 'table',
        caption: 'Where each recruitment track stands. Checked on the date above.',
        head: ['Track', 'Status'],
        rows: [
          [
            'Telangana TET (regular)',
            'Running. Two cycles a year — the June 2026 cycle was notified in April, examined across five days in June, and its marks memos are published. Cycles exist continuously back to 2011.',
          ],
          [
            'DSC / Teacher Recruitment Test',
            'No open notification. The last was 24/RC-1/TRT/DSC/2024 of 29 February 2024 for 11,062 posts; results were released on 30 September 2024 and appointment letters issued in October 2024.',
          ],
          [
            'Gurukul posts (TREIRB)',
            'No open notification, and nothing issued in 2025 or 2026. The last full cycle was nine notifications dated 5 April 2023 covering about 9,210 posts.',
          ],
          [
            'DIET Lecturers (TGPSC)',
            'Notification No. 04/G/SE/2026 of 18 June 2026 for 86 posts. Applications closed on 29 July 2026 and the examination is indicated for November 2026, with no date yet notified.',
          ],
        ],
      },
      {
        type: 'note',
        title: 'A “DSC 2026 notification for 11,062 posts” is not real',
        text: 'That figure and post break-up are the 2024 recruitment’s, recycled. No DSC notification has issued since February 2024. The shortage is real — around 19,017 teacher posts were reported vacant in October 2025 — but a vacancy is not a notification, and only the official portals below can tell you when one exists.',
      },
      {
        type: 'links',
        title: 'The four official portals, one per track',
        items: [
          { label: 'Telangana TET portal', href: 'https://tgtet.aptonline.in/UI/HomePage/HomePage.aspx' },
          { label: 'TG DSC portal', href: 'https://tgdsc.aptonline.in/tgdsc/' },
          { label: 'TREIRB — residential institutions recruitment board', href: 'https://treirb.cgg.gov.in/getMenuContent/75' },
          { label: 'TGPSC notifications, for DIET and DEO posts', href: 'https://websitenew.tgpsc.gov.in/notifications' },
        ],
      },
    ],
    eligibility: [
      {
        type: 'table',
        caption:
          'Qualification by post, as set by the 2024 DSC under the Teacher Recruitment Rules of September 2023. The relaxed percentage in brackets applies to SC, ST, BC and differently-abled candidates.',
        head: ['Post', 'Qualification', 'TET paper required'],
        rows: [
          ['Secondary Grade Teacher', 'Intermediate with at least 45% (40%), plus a two-year D.El.Ed or D.Ed, or a four-year B.El.Ed.', 'Paper I'],
          ['School Assistant', 'Graduation or post-graduation in the subject, plus B.Ed with that subject as a methodology.', 'Paper II, in the matching subject'],
          ['Language Pandit', 'A degree in the language, or a literature degree with BOL, at 45% (40%), plus B.Ed with that language as methodology or a Language Pandit training qualification.', 'Paper II'],
          ['School Assistant (Physical Education)', 'A bachelor’s degree with physical education, at 45% (40%) with national, state or inter-university sports participation, or at 50% (45%) without.', 'None'],
          ['Physical Education Teacher', 'As prescribed by the recruitment rules.', 'None'],
        ],
      },
      {
        type: 'list',
        title: 'The conditions candidates most often get wrong',
        items: [
          { text: 'Age was 18 to 46, reckoned as on 1 July 2023', note: 'in the 2024 recruitment, the upper limit having been raised to 46 by a government order of February 2024. Relaxations were 5 years for SC, ST, BC and EWS candidates and 10 years for persons with disability.' },
          { text: 'The fee was ₹1,000 for each post applied for', note: 'not ₹1,000 for the recruitment. Applying to three post categories cost three times.' },
          { text: 'A TET pass only counts at or above the pass mark', note: 'out of 150, that is 90 for OC candidates, 75 for BC candidates and 60 for SC, ST and differently-abled candidates. Below it there is no score to carry into the weightage.' },
          { text: 'An APTET score counts only if obtained before 2 June 2014', note: 'the appointed day of the state’s formation. A later Andhra Pradesh TET does not qualify you here.' },
          { text: 'The graduation percentage minimum does not apply to everyone', note: 'candidates admitted to B.Ed, B.El.Ed or an equivalent course before 29 July 2011 are outside it.' },
          { text: 'A TET certificate is now valid for life', note: 'the national regulator replaced the seven-year validity in June 2021, with retrospective effect to February 2011. An old certificate that lapsed under the previous rule can be revalidated rather than re-earned.' },
        ],
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'The recruitment test as set in the 2024 DSC. A computer-based test, bilingual in the medium concerned and English. Note that the marks are not proportional to the question count.',
        head: ['Post', 'Questions', 'Marks', 'Duration'],
        rows: [
          ['School Assistant (other than PE), Language Pandit', '160', '80', '2 hours 30 minutes'],
          ['Secondary Grade Teacher', '160', '80', '2 hours 30 minutes'],
          ['School Assistant (Physical Education)', '100', '200', '3 hours'],
          ['Physical Education Teacher', '200', '100', '3 hours'],
        ],
      },
      {
        type: 'note',
        title: 'Selection is 80 per cent recruitment test and 20 per cent TET',
        text: 'The total is 100 marks: 80 from the written recruitment test and 20 as weightage on the TET score. That is fixed by the Teacher Recruitment Rules of September 2023 and restated in the TET notification itself. There are two exceptions — School Assistant (Physical Education) and Physical Education Teacher carry no TET weightage, and their selection rests entirely on the written test. This is why treating the eligibility test as a hurdle to scrape over costs marks that cannot be recovered later.',
      },
      {
        type: 'list',
        title: 'How the marks divide inside each paper',
        items: [
          { text: 'School Assistant and Language Pandit', note: 'general knowledge and current affairs 20 questions for 10 marks, perspectives in education 20 for 10, subject content 88 for 44, and teaching methodology 32 for 16.' },
          { text: 'Secondary Grade Teacher', note: 'general knowledge and current affairs 20 for 10, perspectives in education 20 for 10, then 18 questions for 9 marks in each of Language I, English, mathematics, science and social studies, and teaching methodology 30 for 15.' },
          { text: 'The DSC bulletin does not mention negative marking', note: 'the word does not appear in it. That is silence rather than an assurance — check your own notification. TET, by contrast, states plainly that there is none, and the gurukul recruitment states plainly that a quarter mark is deducted.' },
          { text: 'Minimum qualifying marks for the recruitment test are not published', note: 'the bulletin prescribes qualifying marks only for the TET component. Do not plan around a figure quoted elsewhere.' },
        ],
      },
      {
        type: 'table',
        caption:
          'The eligibility test itself: two papers, never three, each 150 questions and 150 marks over two and a half hours.',
        head: ['Paper', 'Who sits it', 'Ceiling of difficulty'],
        rows: [
          ['Paper I', 'Candidates for classes I to V — the SGT route', 'Set on the classes I to V syllabus, with linkages up to class X.'],
          ['Paper II', 'Candidates for classes VI to VIII — the School Assistant and Language Pandit route', 'Set on the classes VI to VIII syllabus, with linkages up to senior secondary.'],
        ],
      },
      {
        type: 'p',
        text: 'TET pass marks are 60 per cent for general candidates, 50 per cent for BC candidates and 40 per cent for SC, ST and differently-abled candidates. The relaxed tiers are Telangana’s own — the national guidelines set 60 per cent and leave relaxation to the state. Telangana also runs both papers for two and a half hours where the national guideline gives Paper II an hour and a half, so a candidate rehearsing to a national mock is rehearsing the wrong clock.',
      },
    ],
    studyPlan: [
      {
        type: 'steps',
        title: 'A sequence that respects how the two tests interact',
        items: [
          { text: 'Sit the regular TET first, and sit it to score', note: 'not to pass. Twenty marks of the final hundred come from it, and the difference between a bare pass and a strong score is worth more than most candidates gain from a month of extra recruitment-test revision.' },
          { text: 'Pick your paper before you start', note: 'Paper I if you are heading for Secondary Grade Teacher, Paper II if you are heading for School Assistant or Language Pandit. They are different syllabuses at different class levels, and preparing both properly costs twice.' },
          { text: 'Build subject content as the largest block', note: 'in the School Assistant paper, content is 88 of the 160 questions. Methodology and perspectives in education matter, but they are not where the paper is decided.' },
          { text: 'Prepare methodology from the state’s own material', note: 'perspectives in education and teaching methodology are examined against the syllabus published for this recruitment, not against a general education textbook.' },
          { text: 'Keep a current affairs file running the whole time', note: 'general knowledge and current affairs is 20 questions in every version of the recruitment paper, and it is the section that rewards a habit rather than a burst.' },
          { text: 'Watch the gurukul board separately', note: 'its recruitment is a different notification, a different pattern and — unlike DSC and TET — it deducts a quarter mark for a wrong answer.' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. Post qualifications, age, fee, the recruitment-test pattern and the 80:20 weightage are from the 2024 DSC information bulletin and the Teacher Recruitment Rules it is issued under. TET structure, pass marks and validity are from the current TET notifications and the national regulator’s 2021 order on certificate validity. No official archive of previous-year question papers exists for TET, DSC or the gurukul recruitment: the TET portal publishes answer keys, response sheets and marks memos only, and computer-based test data is disposed of a year after results, so year-wise papers offered elsewhere are reconstructions rather than official documents.`,
      },
      {
        type: 'links',
        title: 'Official sources for this page',
        items: [
          { label: 'Telangana TET portal', href: 'https://tgtet.aptonline.in/UI/HomePage/HomePage.aspx' },
          { label: 'TET syllabus', href: 'https://tgtet.aptonline.in/UI/HomePage/Syllabus.aspx' },
          { label: 'TET answer keys', href: 'https://tgtet.aptonline.in/UI/HomePage/Keys.aspx' },
          { label: 'TG DSC portal and information bulletin', href: 'https://tgdsc.aptonline.in/tgdsc/' },
          { label: 'TG DSC syllabus, post by post', href: 'https://tgdsc.aptonline.in/tgdsc/Syllabus' },
          { label: 'Teacher recruitment government orders', href: 'https://tgdsc.aptonline.in/tgdsc/Gos' },
          { label: 'TREIRB — gurukul recruitment notifications', href: 'https://treirb.cgg.gov.in/getMenuContent/75' },
          { label: 'TGPSC notifications, for DIET and DEO posts', href: 'https://websitenew.tgpsc.gov.in/notifications' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'Telangana teaching exam syllabus — what TET Paper I and Paper II cover, and what the recruitment test adds on top.',
        lead: [
          'Two syllabuses that overlap but are not the same. The eligibility test asks whether you can teach; the recruitment test asks how well you know your subject.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'TET Paper I — for classes I to V',
                'Child development and pedagogy, covering learning, development, inclusive education and assessment; Language I, the medium of instruction, tested for content and pedagogy; Language II, usually English; mathematics at primary level with its pedagogy; and environmental studies with its pedagogy. Pedagogy is examined alongside every content section rather than separately.',
              ],
              [
                'TET Paper II — for classes VI to VIII',
                'Child development and pedagogy; Language I and Language II; and then either mathematics and science or social studies, depending on the subject the candidate intends to teach. The content is pitched at upper primary level, and the pedagogy component again runs through each section.',
              ],
              [
                'Recruitment test — general knowledge and current affairs',
                'National and Telangana current affairs, general awareness and the state-specific content that appears in every Telangana recruitment, including the statehood movement.',
              ],
              [
                'Recruitment test — perspectives in education',
                'The history and philosophy of education in India, national education policy, the right to education, educational psychology, and the professional and legal framework a teacher works within.',
              ],
              [
                'Recruitment test — pedagogy of the subject',
                'Teaching methods, curriculum, learning materials, evaluation and classroom practice for the specific subject applied for. It is a separate body of knowledge from the subject content itself.',
              ],
              [
                'Recruitment test — subject content',
                'The content of the subject applied for, examined at a level above the classes you would teach. For a School Assistant post this is degree-level subject knowledge; for a Secondary Grade Teacher post it is the full primary curriculum across subjects.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The section candidates most often underprepare is pedagogy of the subject, because it feels like something a trained teacher already knows. It is examined specifically — methods, aims, evaluation techniques, teaching aids — and it is written from teacher-education texts rather than from classroom experience.',
          },
          {
            type: 'note',
            title: 'Confirm the paper structure for your notification',
            text: 'Telangana has revised the structure and weightage of teacher recruitment more than once, including how eligibility test marks are combined with the recruitment test. Both the eligibility test and the recruitment test publish their own syllabus with each notification. Work from those documents.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'Telangana teaching exam pattern — how TET and the recruitment test are structured and how their marks combine.',
        lead: [
          'One test qualifies, one selects, and in recent cycles both have contributed to the final score.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'How the tracks relate. Marks, question counts, qualifying percentages and the weightage between tests are fixed by the notification for your cycle — confirm each there.',
            head: ['Test', 'Purpose', 'Format', 'What it produces'],
            rows: [
              ['Telangana TET', 'Eligibility to teach at a level', 'Objective, Paper I or Paper II', 'A lifetime-valid pass, and a score that has carried weightage'],
              ['Recruitment test (DSC)', 'Competitive selection to government school posts', 'Objective', 'The merit list for appointment'],
              ['Residential institutions recruitment', 'Selection to gurukul schools and colleges', 'Objective, own pattern', 'A separate merit list under a separate board'],
            ],
          },
          {
            type: 'p',
            text: 'The qualifying percentage for the eligibility test is relaxed for reserved categories, and the relaxation is set in the notification. But qualifying is the low bar. Where the eligibility score contributes weightage to selection, the useful target is a high score rather than a pass, and the difference between the two is a few weeks of preparation taken seriously.',
          },
          {
            type: 'steps',
            title: 'Sequencing the two tests',
            items: [
              { title: 'Sit the eligibility test as early as you are qualified to', text: 'The pass is valid for life, so an early attempt removes the risk of the two notifications colliding.' },
              { title: 'Prepare it for a high score, not a pass', text: 'Where the score carries weightage into recruitment, marks earned here are permanent.' },
              { title: 'Treat the recruitment test as a subject examination', text: 'Its content component goes deeper than the eligibility test, and it is where the merit list is decided.' },
              { title: 'Track the residential board separately', text: 'Its notifications, syllabus and calendar are its own, and candidates who watch only the school education department miss them.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'Telangana teaching exam previous papers — reading TET and DSC papers for the pedagogy and content balance.',
        lead: [
          'Past papers settle the question candidates argue about most: how much of this examination is pedagogy and how much is subject content.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work a few papers before deciding how to study. The proportions are stable across cycles, and they are usually not what a first-time candidate expects — pedagogy and perspectives in education together account for more than most candidates allocate to them, and subject content is examined above the level of the classes the post teaches.',
          },
          {
            type: 'list',
            title: 'What to take from the archive',
            items: [
              { text: 'The pedagogy share, counted rather than estimated', note: 'across child development, perspectives in education and subject pedagogy. It is usually larger than expected.' },
              { text: 'The level of the content questions', note: 'compare them against the school syllabus of the classes the post covers, and note how far above it the paper sits.' },
              { text: 'The Telangana block', note: 'state current affairs, the statehood movement and state education policy, which recur in the general knowledge section.' },
              { text: 'Language paper standards', note: 'the level at which Language I and Language II are tested, which differs and is often misjudged.' },
              { text: 'Repeated pedagogy question stems', note: 'method, aim, evaluation and teaching-aid questions come back in recognisable families.' },
            ],
          },
          {
            type: 'note',
            title: 'Compare the eligibility and recruitment papers side by side',
            text: 'Take one eligibility test paper and one recruitment paper in the same subject and read them against each other. The pedagogy sections are close; the content sections are not, and the gap between them is exactly the additional preparation the recruitment test asks for. Candidates who cleared the eligibility test comfortably and then underperform in recruitment have usually never measured that gap.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'Teaching and NET exams', to: '/government-exams/teaching-net/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Telangana teaching exam mock tests — testing pedagogy and subject content as separate skills.',
        lead: [
          'A teaching-exam mock is worth analysing by section rather than by score, because its sections behave completely differently.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Content questions are either known or not — they respond to study. Pedagogy questions are frequently answered wrongly by candidates who know the material, because the options are close and the question turns on a distinction between approaches. That second failure mode is fixed by practice on questions, not by rereading the text, which is why sectional pedagogy testing pays disproportionately.',
          },
          {
            type: 'steps',
            title: 'A sectional testing routine',
            items: [
              { title: 'Pedagogy sets, twice a week', text: 'Thirty questions, timed. Review every wrong answer against the reasoning rather than the fact.' },
              { title: 'Subject content, once a week', text: 'At the level of the recruitment test rather than the school syllabus.' },
              { title: 'Language papers, fortnightly', text: 'Both languages, since the second is often left untested until it costs marks.' },
              { title: 'One full paper a fortnight, then weekly', text: 'To time, in one sitting, as the notification approaches.' },
            ],
          },
          {
            type: 'note',
            title: 'Pedagogy questions are lost on the second-best option',
            text: 'The characteristic teaching-exam mistake is choosing an answer that is correct in isolation but not the best of the four — a valid teaching method where the question asked for the most appropriate one at that stage of learning. When you review a pedagogy section, do not stop at the right answer: write down why each of the other three was rejected. That habit fixes the failure mode rereading the textbook does not touch.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Teaching exam preparation', to: '/government-exams/teaching-net/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'Telangana teaching exam preparation — a plan that treats the eligibility test as a scoring opportunity rather than a gate.',
        lead: [
          'The candidates who do best in Telangana teacher recruitment are usually the ones who took the eligibility test seriously years earlier.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A preparation sequence',
            items: [
              { title: 'First — confirm your qualification against the post', text: 'The training course, the degree subject and the method subject decide which posts you may apply for. This is a documents question, and it is settled before any studying.' },
              { title: 'Then — the eligibility test, prepared for a high score', text: 'Child development and pedagogy as a subject in its own right, both languages, and the content area at the level of the paper.' },
              { title: 'Then — perspectives in education', text: 'Education policy, the right to education, the history and philosophy of Indian education. Shared between the tests and frequently neglected.' },
              { title: 'Then — subject content at recruitment level', text: 'Degree-level knowledge for School Assistant posts, and the full primary curriculum for Secondary Grade Teacher posts.' },
              { title: 'Throughout — Telangana current affairs and state education policy', text: 'A short daily habit that covers the general knowledge section in both tests.' },
            ],
          },
          {
            type: 'p',
            text: 'Watch two calendars, not one. The school education department notifies the eligibility test and the recruitment for government schools; the residential educational institutions board notifies gurukul posts on its own schedule. Candidates who follow only the first regularly miss the second, and the gurukul posts are frequently the less contested of the two.',
          },
          {
            type: 'note',
            title: 'The training qualification cannot be arranged later',
            text: 'D.El.Ed, B.Ed or the equivalent prescribed for your post is a multi-year qualification and a hard requirement. If you do not hold it, the first step is enrolling in it rather than preparing for the examination — no amount of test preparation substitutes, and it is checked at verification.',
          },
        ],
      },
      'study-material': {
        description:
          'Telangana teaching exam study material — sources for pedagogy, perspectives in education and subject content.',
        lead: [
          'Teacher-education material and school textbooks do different jobs here, and most candidates buy too much of one and none of the other.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'What to read',
            items: [
              { text: 'A child development and pedagogy text', note: 'the standard teacher-education material, read as a subject rather than skimmed for definitions.' },
              { text: 'State school textbooks for the classes concerned', note: 'the content the eligibility test is written from, and the cheapest reliable source available.' },
              { text: 'Education policy documents', note: 'the national education policy and the right to education framework, read directly rather than through summaries.' },
              { text: 'Degree-level subject material', note: 'for School Assistant and lecturer posts, where content is examined above school level.' },
              { text: 'Telangana-specific general knowledge', note: 'state history, geography, the statehood movement and state education schemes.' },
            ],
          },
          {
            type: 'note',
            title: 'Take the syllabus from the notification',
            text: 'Teacher recruitment syllabuses in Telangana are published post by post, and they differ between Secondary Grade Teacher, School Assistant, Language Pandit and gurukul posts. A general teaching-exam guide is a starting point; the syllabus attached to your notification is the specification.',
          },
          {
            type: 'list',
            title: 'How to use a school textbook for a teaching exam',
            items: [
              { text: 'Read it as a teacher, not as a student', note: 'note how a concept is introduced, sequenced and assessed. Pedagogy questions are often answerable from the textbook’s own method.' },
              { text: 'Work the exercises', note: 'the questions at the end of a chapter are close to the content questions the eligibility test asks.' },
              { text: 'Note the vocabulary of the curriculum', note: 'learning outcomes, competencies, continuous assessment. The recruitment paper uses this language and expects it back.' },
              { text: 'Cover the classes below your paper too', note: 'Paper II candidates lose marks on primary-level content they assumed was beneath the examination.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Teaching and NET exams', to: '/government-exams/teaching-net/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the difference between TET and DSC in Telangana?',
        a: 'The Teacher Eligibility Test establishes that you meet the standard to teach at a given level — Paper I for classes I to V, Paper II for classes VI to VIII — and a pass is valid for life. It does not appoint you to anything. The District Selection Committee recruitment is the competitive examination that fills government school vacancies and builds the merit list. In recent cycles the eligibility test score has also carried weightage in that selection, so it is worth sitting for a high score rather than a bare pass.',
      },
      {
        q: 'Is Telangana TET valid for life?',
        a: 'Yes. Following the national change to the validity rule, a Teacher Eligibility Test pass no longer expires. That makes an early, well-prepared attempt valuable — the score stays with you into every subsequent recruitment that gives it weightage.',
      },
      {
        q: 'Who conducts gurukul teaching recruitment in Telangana?',
        a: 'The state’s residential educational institutions recruitment board conducts recruitment for gurukul residential schools, junior colleges and degree colleges, with its own notification, syllabus and calendar — separate from the school education department’s eligibility test and district recruitment. Candidates who follow only the school education department’s announcements frequently miss these vacancies.',
      },
      {
        q: 'What qualification do I need for Telangana teaching posts?',
        a: 'The teacher training qualification prescribed for the specific post — a primary teacher training qualification for Secondary Grade Teacher posts, and a degree in the relevant subject with B.Ed for School Assistant posts, with language and physical education posts carrying their own requirements. These are governed by national teacher education regulations as well as state rules and are verified exactly, so read the qualification clause for your post in the notification.',
      },
      {
        q: 'How much of the Telangana teacher recruitment paper is pedagogy?',
        a: 'More than most candidates allocate to it. Child development and pedagogy, perspectives in education and the pedagogy of the subject applied for are examined as distinct bodies of knowledge drawn from teacher-education texts, and together they carry a substantial share of the paper. Counting the pedagogy questions in a few past papers is the quickest way to see the real proportion before planning your study.',
      },
    ],
  },

  /* ── Technical posts ───────────────────────────────────────── */
  {
    slug: 'technical-posts',
    path: '/government-exams/state/telangana/technical-posts/',
    name: 'Telangana Technical Posts',
    fullName: 'TGPSC technical recruitment — engineering, scientific and accounts posts',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Technical Posts 2026: AE, AEE & DAO Exam Guide',
    metaDescription:
      'TGPSC technical recruitment — Assistant Engineer, AEE, Assistant Scientist and Divisional Accounts Officer posts, exam pattern and preparation.',
    lead: [
      'TGPSC recruits technical staff separately from its general Group services. Assistant Engineer and Assistant Executive Engineer posts in irrigation, panchayat raj and public health engineering, Assistant Scientist posts in the state’s laboratories and departments, and Divisional Accounts Officer posts in the accounts service are all filled through their own notifications.',
      'The papers are built accordingly: a general studies component that any TGPSC candidate would recognise, and a core subject paper set at degree level in the discipline the post requires. The second is where these recruitments are decided, and it is examined at a depth that general competitive preparation does not reach.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A degree in the relevant engineering or science discipline; accounts posts have their own requirement'],
      ['Format', 'Objective, with a general studies paper and a core subject paper'],
      ['Typical posts', 'Assistant Engineer, Assistant Executive Engineer, Assistant Scientist, Divisional Accounts Officer'],
      ['Departments', 'Irrigation, panchayat raj, public health, municipal administration and state laboratories'],
      ['Selection', 'Written marks, then certificate verification'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Technical recruitment differs from the Group services in one decisive way: the field competing for a post is restricted to holders of a specific degree. A civil engineering Assistant Executive Engineer notification is contested by civil engineering graduates, not by every graduate in the state. The applicant numbers are smaller and the subject standard is higher.',
      },
      {
        type: 'p',
        text: 'The papers follow the same logic. A general studies paper covers the material every TGPSC recruitment covers — current affairs, polity, economy, geography and the Telangana-specific content including the statehood movement. The core paper is a degree-level examination in the discipline: structural analysis, hydraulics and surveying for a civil post; machines, power systems and control for an electrical one; and the corresponding syllabus for mechanical, science and accounts posts.',
      },
      {
        type: 'list',
        title: 'The recruitment routes under this heading',
        items: [
          { text: 'Assistant Engineer and Assistant Executive Engineer', note: 'engineering posts across irrigation, panchayat raj, public health and municipal engineering, in the civil, electrical and mechanical branches.' },
          { text: 'Assistant Scientist and technical officer posts', note: 'in state laboratories, pollution control, agriculture and allied departments, requiring the relevant science degree.' },
          { text: 'Divisional Accounts Officer', note: 'the state accounts service, examined on accounting, audit and financial rules alongside general studies.' },
          { text: 'Departmental technical posts', note: 'notified individually by TGPSC for specific departments, with syllabuses matched to the discipline.' },
        ],
      },
      {
        type: 'note',
        title: 'The core paper is where the selection happens',
        text: 'Because every candidate in the field holds the same degree, the general studies paper compresses scores rather than separating them. The subject paper does the separating. A candidate who divides preparation evenly between the two has usually mis-weighted it — the core paper deserves the larger share.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, general studies and core subject',
        detail:
          'A general studies and general abilities paper of the kind TGPSC sets across its recruitments, and a core paper examining the engineering, science or accounts discipline the post requires at degree level.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Degree and discipline, age, category, local status and any claimed relaxation verified against originals. The discipline requirement is exact — a related degree is not automatically an eligible one.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Allotment by merit within the department and discipline applied for — within the multi-zone for multi-zonal posts — under the reservation and local-status rules of the recruitment, followed by a medical fitness check.',
      },
    ],
    /*
     * Unlike the Group services, technical recruitment is continuous: TGPSC
     * issued nine separate technical notifications in 2026 alone, each with its
     * own window. The table is therefore a snapshot and dates from it, so a
     * reader can see at a glance both what ran and how quickly the windows
     * close — typically five to six weeks from notification.
     */
    updates: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. Technical posts are where Telangana has actually been recruiting. The commission issued nine technical and specialist notifications during 2026 while no Group services cycle was notified at all — and every one of those windows has now closed, the last on 22 August 2026.`,
      },
      {
        type: 'table',
        caption:
          'TGPSC technical and specialist notifications issued in 2026, newest first. All application windows were closed at the date checked above.',
        head: ['Notification', 'Post', 'Vacancies', 'Applications closed'],
        rows: [
          ['06/G/TP/2026, 10 July', 'Town Planning Assistant', '7', '22 August 2026'],
          ['05/G/TP/2026, 6 July', 'Assistant Director of Town Planning', '10', '17 August 2026'],
          ['03/OG/SD/2026, 2 July', 'Seed Certification Officer', '19', '12 August 2026'],
          ['04/G/SE/2026, 18 June', 'Senior Lecturers and Lecturers in DIET', '86', '29 July 2026'],
          ['03/G/SE/2026, 5 June', 'Deputy Educational Officer and Gazetted Headmaster Grade-I', '24', '19 July 2026'],
          ['02/OG/PC/2026, 2 June', 'Assistant Environmental Engineer, Pollution Control Board', '19', '17 July 2026'],
          ['02/G/RB/2026, 2 June', 'Assistant Executive Engineer (Electrical), Roads and Buildings', '49', '15 July 2026'],
          ['01/G/RB/2026, 2 June', 'Assistant Executive Engineer (Civil), Roads and Buildings', '222', '13 July 2026'],
          ['01/OG/PC/2026, 20 April', 'Assistant Scientist, Analyst Grade-II, Pollution Control Board', '20', '25 May 2026'],
        ],
      },
      {
        type: 'note',
        title: 'Windows are short — five to six weeks, and not extended',
        text: 'Every 2026 technical notification gave between five and six weeks from notification to closing date, and none of them was extended. Because these posts are notified individually rather than on an annual cycle, the practical consequence is that the qualifying degree, the certificates and the fee have to be ready before the notification appears rather than assembled after it. Watching the notifications page is part of the preparation.',
      },
      {
        type: 'note',
        title: 'Assistant Engineer has not been notified since 2022',
        text: 'The Assistant Engineer, Municipal Assistant Engineer, Technical Officer and Junior Technical Officer recruitment is a separate notification from Assistant Executive Engineer, and its most recent cycle is Notification No. 16/2022 of September 2022, for 833 posts across nineteen post codes. That paper was set at diploma level rather than degree level. Do not prepare for an AE recruitment from an AEE notification, or the other way round — the subject paper is pitched differently.',
      },
      {
        type: 'links',
        title: 'Where the next notification will appear',
        items: [
          { label: 'TGPSC notifications', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'TGPSC direct recruitment list', href: 'https://websitenew.tgpsc.gov.in/directRecruitment' },
        ],
      },
    ],
    eligibility: [
      {
        type: 'table',
        caption:
          'The qualifying degree, post by post, as set by the 2026 notifications. The degree must be held on the notification date, with the result already declared by then.',
        head: ['Post', 'Qualification required'],
        rows: [
          ['Assistant Executive Engineer (Civil)', 'A bachelor’s degree in civil engineering, or A.M.I.E.'],
          ['Assistant Executive Engineer (Electrical)', 'A bachelor’s degree in electrical engineering, or in electrical and electronics engineering, or A.M.I.E.'],
          ['Assistant Environmental Engineer', 'A bachelor’s degree in civil, mechanical, chemical, biotechnology, mining or environmental engineering, or Sections A and B of A.M.I.E. (Civil), or any engineering degree together with a postgraduate degree in environmental engineering.'],
          ['Assistant Scientist, Analyst Grade-II', 'A bachelor’s degree with chemistry as one of the subjects.'],
          ['Town Planning Assistant', 'B.Planning or B.Tech (Planning).'],
          ['Assistant Director of Town Planning', 'B.Arch, B.E./B.Tech (Civil), B.Planning, or a master’s in geography or geoinformatics — and, in addition, a postgraduate degree or diploma in town and country planning, or fellowship or associateship of the Institute of Town Planners of India.'],
          ['Seed Certification Officer', 'A basic degree in agriculture together with an M.Sc. (Ag.) in seed technology, plant breeding, agronomy or plant physiology from an ICAR-recognised university.'],
        ],
      },
      {
        type: 'list',
        title: 'The conditions common to all of them',
        items: [
          { text: 'Age 18 to 44, reckoned as on 1 July 2026', note: 'the upper limit having been raised from 34 to 44 by a government order of May 2026. The one exception is Assistant Scientist, notified in April before that order, which ran 18 to 34 — the likeliest single point of candidate error in the whole 2026 set.' },
          { text: 'Relaxations are identical across the notifications', note: '5 years for SC, ST, BC and EWS candidates; 10 years for persons with disability; up to 5 years for state government employees by length of regular service, though corporation and municipality employees do not qualify; 3 years plus service rendered for ex-servicemen and NCC instructors. Nobody remains eligible past 61.' },
          { text: 'Two fees, charged separately', note: 'an application processing fee of ₹1,000 for OC and BC candidates and ₹500 for SC, ST and PwD candidates, plus an examination fee — ₹120 for most posts, ₹80 for Seed Certification Officer and Assistant Scientist. Unemployed applicants are exempt from the examination fee only; the processing fee has no exemption.' },
          { text: 'Seed Certification Officer ignores local reservation', note: 'selection is on state-wide merit, which changes the calculation for candidates from districts where a local quota would normally help them.' },
        ],
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'Every 2026 technical notification uses the same two-paper shape. What changes is the weight of the subject paper — and in the 450-mark schemes each subject question carries two marks rather than one.',
        head: ['Post', 'Paper II subject and level', 'Paper II marks', 'Total'],
        rows: [
          ['Assistant Executive Engineer (Civil)', 'Civil engineering, degree level', '300', '450'],
          ['Assistant Executive Engineer (Electrical)', 'Electrical and electronics engineering, degree level', '300', '450'],
          ['Assistant Environmental Engineer', 'Concerned subject', '300', '450'],
          ['Town Planning Assistant', 'Planning, degree level', '300', '450'],
          ['Assistant Director of Town Planning', 'Concerned subject, postgraduate level', '300', '450'],
          ['Seed Certification Officer', 'Concerned subject, postgraduate level', '150', '300'],
          ['Assistant Scientist, Analyst Grade-II', 'Chemistry', '150', '300'],
        ],
      },
      {
        type: 'list',
        title: 'The rules that apply across the technical recruitments',
        items: [
          { text: 'Paper I is the same paper everywhere', note: 'General Studies and General Abilities, 150 questions for 150 marks in 150 minutes, bilingual in English and Telugu. Paper II is 150 questions in 150 minutes and is set in English only.' },
          { text: 'The subject paper is two-thirds of the 450-mark schemes', note: 'a candidate who arrives strong on general studies and average on their own discipline has the ratio backwards.' },
          { text: 'Qualifying marks are 40, 35 and 30 per cent', note: '40% for OC, EWS and sportspersons, 35% for BC candidates, 30% for SC, ST and PH candidates. The notifications say in terms that reaching the minimum vests no right to selection.' },
          { text: 'There is no interview in any 2026 technical notification', note: 'the words interview, oral test and viva do not appear as a selection stage in any of them. At least one well-known coaching site says the AEE process includes an interview; it does not.' },
          { text: 'The notifications are silent on negative marking', note: 'none of the nine mentions it. That is an absence of a provision rather than a stated guarantee — read your own notification before deciding how freely to guess.' },
          { text: 'Ties are broken by local status first', note: 'then date of birth with the elder ranked higher, then marks in the subject paper, then the date and percentage of the qualifying examination. Candidates must be willing to serve anywhere in Telangana.' },
        ],
      },
      {
        type: 'p',
        text: 'Where the examination runs in multiple computer-based sessions, scores are normalised and results are declared on a percentile basis. Appearance in both papers is compulsory — absence from either disqualifies the candidature outright, whatever the other paper scored.',
      },
    ],
    studyPlan: [
      {
        type: 'steps',
        title: 'Preparing for a recruitment that has not been notified yet',
        items: [
          { text: 'Treat your own discipline as the main subject', note: 'it is 300 of the 450 marks in the engineering and planning schemes. General studies is preparation you share with every other TGPSC candidate; the subject paper is the one you are actually competing on.' },
          { text: 'Work from the notification’s own annexure', note: 'there is no separate syllabus file for any of the 2026 technical posts — the scheme and full syllabus are Annexure-II inside each notification PDF. The commission’s syllabus page covers only the Group services and lecturer posts.' },
          { text: 'Use the old AE and AEE papers, which do exist', note: 'unlike the Group services, the commission’s archive holds real question papers for Assistant Engineer in civil, mechanical and general studies, and for Assistant Executive Engineer in civil, mechanical and general studies. There is no electrical paper, so electrical candidates work from the civil and mechanical papers for the general studies half and from the syllabus for their own.' },
          { text: 'Keep documents notification-ready', note: 'the degree must be held and the result declared as at the notification date, and the window is five to six weeks. Certificates assembled after a notification appears are frequently assembled too late.' },
          { text: 'Practise Paper I to the same clock as everyone else', note: '150 questions in 150 minutes, and it is the half of the examination where drilled method beats accumulated reading.' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. Vacancies, closing dates, qualifications, age, fees, the scheme of examination and the qualifying marks are taken from the nine TGPSC technical notifications issued during 2026 and from Notification No. 16/2022 for the Assistant Engineer posts. Where a figure is not stated in those documents — negative marking, and the current status of the 2022 Assistant Engineer recruitment — this page says so rather than supplying one.`,
      },
      {
        type: 'links',
        title: 'Official sources for this page',
        items: [
          { label: 'TGPSC notifications', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'TGPSC direct recruitment list', href: 'https://websitenew.tgpsc.gov.in/directRecruitment' },
          { label: 'TGPSC old question papers, including AE and AEE', href: 'https://websitenew.tgpsc.gov.in/oldquestionp.jsp' },
          { label: 'TGPSC results, keys and OMR sheets', href: 'https://websitenew.tgpsc.gov.in/resukeyomr.jsp' },
          { label: 'TGPSC selection lists', href: 'https://websitenew.tgpsc.gov.in/selectionlist' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC technical post syllabus — the general studies paper and the core subject papers for engineering, science and accounts posts.',
        lead: [
          'One shared paper and one discipline paper. The shared one is published in full with every TGPSC notification; the discipline one is where the real reading list sits.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Studies and General Abilities',
                'Current affairs of regional, national and international importance; general science and developments in science and technology; environmental issues and disaster management; world, Indian and Telangana geography; Indian history and cultural heritage; society, the Constitution and governance; the Indian and Telangana economy; logical reasoning and data interpretation; and the Telangana movement and state formation.',
              ],
              [
                'Core paper — civil engineering',
                'Strength of materials and structural analysis, reinforced concrete and steel design, fluid mechanics and hydraulics, water resources and irrigation engineering, geotechnical engineering, transportation engineering, surveying, environmental engineering, and construction planning and estimation. Irrigation and water resources carry particular weight in a state where the department is a major employer.',
              ],
              [
                'Core paper — electrical engineering',
                'Circuits and network theory, electrical machines, power systems including generation, transmission, distribution and protection, control systems, measurements and instrumentation, power electronics and drives, and utilisation of electrical energy.',
              ],
              [
                'Core paper — mechanical engineering',
                'Thermodynamics, heat transfer and applied thermal engineering, fluid mechanics and hydraulic machines, theory of machines and machine design, strength of materials, manufacturing processes, industrial and production engineering.',
              ],
              [
                'Core paper — science and laboratory posts',
                'The relevant science discipline at degree level, with emphasis on analytical methods, laboratory practice, instrumentation and the regulatory framework the department works within.',
              ],
              [
                'Core paper — accounts posts',
                'Accounting principles and practice, auditing, financial and treasury rules, government accounting and budgeting, and the service and financial regulations applying to state government accounts work.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The core syllabus for an engineering post is close to the standard undergraduate curriculum, which means graduation notes and standard texts remain the right material. What differs from a campus examination is the format — objective questions answered at speed, rewarding recall of formulae and standard results rather than long derivations.',
          },
          {
            type: 'note',
            title: 'Syllabus is published per notification and per discipline',
            text: 'TGPSC publishes a separate syllabus for each technical notification and each discipline within it. Departmental emphasis varies — an irrigation post and a municipal engineering post weight the civil syllabus differently. Work from the document attached to your notification.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC technical exam pattern — how the general studies and core papers combine, and what verification checks.',
        lead: [
          'Two papers, both objective, with the discipline paper carrying the weight that decides selection.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The structure TGPSC technical recruitments have used. Marks, question counts, duration and negative marking are set by each notification — confirm them there.',
            head: ['Paper', 'Content', 'Format', 'Role in selection'],
            rows: [
              ['General Studies', 'The standard TGPSC general studies and abilities syllabus', 'Objective', 'Compresses the field; everyone prepares it'],
              ['Core subject', 'The engineering, science or accounts discipline at degree level', 'Objective', 'Separates the field; where the recruitment is decided'],
              ['Verification', 'Degree, discipline, category, local status', 'Documents', 'Exact match to the prescribed qualification'],
            ],
          },
          {
            type: 'p',
            text: 'An objective core paper changes how the subject should be revised. Long derivations are rarely useful; the standard result, the formula and the condition under which it applies are what get tested. Rebuilding a formula sheet for each subject from your own graduation notes is the highest-return preparation available for these papers.',
          },
          {
            type: 'steps',
            title: 'Preparing an objective engineering paper',
            items: [
              { title: 'Rebuild the formula sheet yourself', text: 'Subject by subject, from your own notes. The act of assembling it is most of the revision.' },
              { title: 'Practise numerical problems against a clock', text: 'The paper tests whether you can reach an answer in a minute, not whether you understand the method.' },
              { title: 'Learn the standard values and codes', text: 'Design constants, permissible values and code provisions that recur in objective questions.' },
              { title: 'Do not neglect general studies entirely', text: 'It is compressed but not irrelevant, and the Telangana block within it is entirely learnable.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC technical previous papers — reading them for topic weighting within a large degree syllabus.',
        lead: [
          'A degree syllabus is far larger than a paper can examine. Past papers tell you which parts of it the commission actually uses.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Take three or four past papers in your discipline and tabulate the questions by subject. The distribution is rarely even, and it is usually stable — in civil papers set for a state with a large irrigation department, water resources and hydraulics tend to carry more than a uniform syllabus reading would suggest. That table is a better study plan than any general guide.',
          },
          {
            type: 'list',
            title: 'What to tabulate',
            items: [
              { text: 'Questions by subject within the discipline', note: 'the single most useful analysis, and the one almost nobody does.' },
              { text: 'Numerical versus conceptual split', note: 'it decides how much of your practice should be calculation and how much recall.' },
              { text: 'The recurring standard results', note: 'formulae and constants that appear across years, which belong on a one-page sheet.' },
              { text: 'The Telangana block in the general studies paper', note: 'state geography, irrigation projects, economy and the movement, which recur predictably.' },
              { text: 'Question phrasing habits', note: 'TGPSC papers, including those set under the TSPSC name, have consistent phrasing worth becoming familiar with.' },
            ],
          },
          {
            type: 'note',
            title: 'A weighting table beats a syllabus reading',
            text: 'Spend an evening tabulating three past papers by subject and you have something no guide can give you: the commission’s actual weighting of a degree syllabus far too large to revise evenly. In most disciplines two or three subjects carry a disproportionate share, and they are not always the ones a candidate expects. Study to the table, and revisit it when a new paper is released.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Engineering exam preparation', to: '/entrance-exams/engineering/' },
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC technical mock tests — testing a degree-level core paper alongside a general studies paper.',
        lead: [
          'The two papers need different testing. One is a speed test on material you already know; the other is a breadth test on material you are still learning.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the core paper, sectional tests by subject are more useful than full papers early on, because they localise the weakness to a subject you can then revise. For general studies, full-length papers are better from the start, since the difficulty there is sustaining attention across unrelated topics rather than depth in any one.',
          },
          {
            type: 'steps',
            title: 'A testing plan across both papers',
            items: [
              { title: 'Subject-wise core tests, twice a week', text: 'One subject at a time, thirty questions, timed. Rotate through the discipline until every subject has been tested twice.' },
              { title: 'A general studies full paper, weekly', text: 'Including the Telangana section, which is the part that improves fastest.' },
              { title: 'A combined full simulation, fortnightly', text: 'Both papers on one day in the notified order, to find where fatigue actually starts.' },
              { title: 'A formula-sheet recall test, weekly', text: 'Cover the sheet and rewrite it. Ten minutes, and it exposes decay before a mock does.' },
            ],
          },
          {
            type: 'note',
            title: 'Test the rusty subjects first, not the strong ones',
            text: 'A working engineer’s score is usually held down by the two or three subjects they have not touched since graduation, and those are precisely the ones it is uncomfortable to test. Sit them first and sit them early: an honest low score in month one is a study plan, while the same score discovered in the final fortnight is a problem with no time left in it.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC technical preparation — a plan for a working engineer or a recent graduate, weighted towards the core paper.',
        lead: [
          'Most candidates for these posts are either recent graduates with the subject fresh or working engineers with it several years behind them. The plans differ.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A five-month plan',
            items: [
              { title: 'Month one — rebuild the core subject map', text: 'List every subject in the discipline, mark each as solid, rusty or gone, and plan from that rather than from a generic schedule.' },
              { title: 'Months one to four — core subjects in rotation', text: 'Two subjects at a time, with a formula sheet built for each as you go. Numerical practice from the start rather than after revision.' },
              { title: 'Months two to five — general studies, in daily blocks', text: 'Short sessions on polity, economy, geography and science, with the Telangana content given its own weekly slot.' },
              { title: 'Throughout — current affairs, fifteen minutes a day', text: 'National and Telangana together. It is a small, reliable block in the general studies paper.' },
              { title: 'Month five — simulations and formula recall', text: 'Full papers to time, and weekly rewriting of the formula sheets from memory.' },
            ],
          },
          {
            type: 'p',
            text: 'A working engineer has an advantage that is easy to waste: practical familiarity with a part of the syllabus, usually the part their job touches. That familiarity does not extend to the subjects they have not used since graduation, and those are where the marks are lost. Audit honestly before allocating time.',
          },
          {
            type: 'note',
            title: 'Check the discipline requirement before applying',
            text: 'These recruitments prescribe a degree in a named discipline, and verification checks it exactly. A related or interdisciplinary degree may or may not qualify, and the answer is in the notification rather than in general advice. Settle it before you spend months preparing.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC technical study material — graduation texts, formula sheets and the state-specific general studies layer.',
        lead: [
          'For the core paper the material you already own is usually the right material. What is missing is the sheet you have not written yet.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'For the core paper',
            items: [
              { text: 'Your own graduation notes and standard texts', note: 'the syllabus is close to the undergraduate curriculum, so a new set of books is rarely what is needed.' },
              { text: 'A formula sheet per subject, written by you', note: 'the single highest-return document in this preparation, and worthless if bought rather than built.' },
              { text: 'Objective question banks in the discipline', note: 'for the format rather than the content — the shift from derivation to recall takes practice.' },
              { text: 'Relevant codes and standard values', note: 'the design constants and provisions that recur in objective questions.' },
            ],
          },
          {
            type: 'list',
            title: 'For general studies',
            items: [
              { text: 'One polity reference and one economy text', note: 'read once properly rather than repeatedly skimmed.' },
              { text: 'Telangana state board textbooks', note: 'for state geography, history and civics at the level examined.' },
              { text: 'A daily current-affairs note', note: 'national and state, kept in your own words.' },
              { text: 'The state’s irrigation and infrastructure material', note: 'worth knowing for a technical candidate, and it recurs in the state general studies block.' },
            ],
          },
          {
            type: 'note',
            title: 'The formula sheet is the deliverable',
            text: 'For an objective core paper the single document that decides your score is a formula and standard-results sheet you wrote yourself, subject by subject, from your own graduation notes. Bought compilations do not work the same way: the value lies in having decided what belongs on the page, which is an act of revision in itself. Aim for one page per subject, rewritten from memory once a week in the final month.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Engineering exams', to: '/entrance-exams/engineering/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'Which technical posts does TGPSC recruit for?',
        a: 'TGPSC notifies technical recruitment separately from its Group services, covering Assistant Engineer and Assistant Executive Engineer posts in irrigation, panchayat raj, public health and municipal engineering, Assistant Scientist and technical officer posts in state laboratories and allied departments, and Divisional Accounts Officer posts in the accounts service. Each notification names the disciplines and departments it covers.',
      },
      {
        q: 'What is the exam pattern for TGPSC AE and AEE posts?',
        a: 'The recruitments have used an objective written examination with a general studies and general abilities paper of the kind TGPSC sets across its exams, and a core paper examining the engineering discipline at degree level. Certificate verification follows the written result. Marks, question counts, duration and negative marking are fixed by the notification for your recruitment.',
      },
      {
        q: 'How is the core subject paper different from a university exam?',
        a: 'It is objective and answered at speed, which changes what to revise. Long derivations are rarely tested; standard results, formulae and the conditions under which they apply are. Rebuilding a formula sheet per subject from your own graduation notes, then practising numerical questions against a clock, is more useful than rereading textbooks.',
      },
      {
        q: 'Does my degree discipline have to match exactly?',
        a: 'These recruitments prescribe a degree in a named discipline and verification checks it exactly, so a related or interdisciplinary qualification is not automatically eligible. The notification is the only place this is settled — check the qualification clause before committing months to preparation.',
      },
    ],
  },
  /* ── Panchayat Secretary ───────────────────────────────────── */
  {
    slug: 'panchayat-secretary',
    path: '/government-exams/state/telangana/panchayat-secretary/',
    name: 'Telangana Panchayat Secretary',
    fullName: 'Telangana Panchayat Secretary recruitment — rural development and panchayat administration',
    authority:
      'Panchayat Raj and Rural Development Department, Government of Telangana, through the Commissioner PR&RD and the district collectorates',
    official: OFFICIAL,
    seoTitle: 'Telangana Panchayat Secretary: Status, Pattern & Syllabus',
    metaDescription:
      'Telangana Panchayat Secretary — whether any recruitment is open, what the 2018 exam actually asked, the panchayat raj syllabus, and how the cadre stands now.',
    lead: [
      'The Panchayat Secretary is the administrative officer of a gram panchayat — the person who keeps its records, runs its meetings, implements its schemes and connects the village to the district administration. It is a district cadre post in the Panchayat Raj Subordinate Service, and it has been recruited by the Panchayat Raj department itself rather than by the public service commission.',
      'Read the notification status below before anything else on this page. There is no open recruitment to this post, the last one was notified in 2018, and a vacancy count released in 2026 is being circulated elsewhere as though it were a notification. The rest of the page describes the job and the one examination Telangana has actually set for it.',
    ],
    quickFacts: [
      ['Current status', 'No open recruitment as at 11 September 2026 — see the notification section'],
      ['Department', 'Panchayat Raj and Rural Development, Government of Telangana'],
      ['Last recruitment', '2018, for 9,355 Junior Panchayat Secretary posts'],
      ['Qualification then', 'A bachelor’s degree, plus working knowledge of computers'],
      ['Format then', 'Two objective papers of 100 marks each, degree standard, no interview'],
      ['Cadre', 'District cadre post; regularised as Panchayat Secretary Grade-IV'],
    ],
    overview: [
      {
        type: 'p',
        text: 'A Panchayat Secretary works at the base of the state’s administrative structure. The role covers maintaining the panchayat’s records and accounts, convening and recording its meetings, implementing rural development and welfare schemes, issuing certificates within the panchayat’s competence, and acting as the point of contact between the elected body and the block and district administration.',
      },
      {
        type: 'p',
        text: 'The examination reflects that work. Alongside the general studies material common to every state recruitment, it examines the panchayat raj system specifically — the constitutional provisions that created it, the three-tier structure, the powers and functions of each tier, the state’s own panchayat legislation, and the rural development and welfare schemes a secretary would administer. That component is the part general competitive preparation does not cover.',
      },
      {
        type: 'list',
        title: 'What the post involves in practice',
        items: [
          { text: 'Records and accounts of the gram panchayat', note: 'registers, receipts, budget and audit compliance, which is why accounts and record-keeping questions appear in the paper.' },
          { text: 'Scheme implementation', note: 'rural employment, housing, sanitation, drinking water and welfare programmes at village level.' },
          { text: 'Meetings of the elected body', note: 'convening the gram sabha and the panchayat, recording resolutions and following them up.' },
          { text: 'The link to higher administration', note: 'reporting to the mandal and district levels, which is why the administrative structure of the state is examinable.' },
        ],
      },
      {
        type: 'note',
        title: 'The notification defines this recruitment more than usual',
        text: 'Telangana has recruited to panchayat administration under different designations, grades and conducting arrangements across cycles, and the eligibility and syllabus have moved with them. Anything written in general terms about "the Panchayat Secretary exam" — including this page — is background. The notification for your recruitment is the specification, and it should be read before any preparation is planned around a pattern.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective',
        detail:
          'A degree-level objective paper covering general studies, the panchayat raj system and rural development, with the Telangana-specific content that appears in every state recruitment. The structure and marks are set by the notification.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Degree, age, category, local status and any claimed relaxation verified against originals for candidates called in order of merit.',
      },
      {
        name: 'Appointment and posting',
        mode: 'Merit and preference',
        detail:
          'Allotment to a panchayat or cluster by merit and preference within the district and reservation rules applying to the recruitment.',
      },
    ],
    /*
     * This page carries a correction rather than a countdown.
     *
     * As at the CHECKED date there is no open Panchayat Secretary recruitment
     * and no announced route to one. A vacancy count released by the Panchayat
     * Raj department in May 2026 has been recycled across aggregator sites as
     * "notification out for 1,213 posts", which the primary source does not
     * support. Saying so plainly is the most useful thing this page can do, so
     * it goes first — above the evergreen description of the job.
     *
     * If a real notification issues, replace this section; do not leave the
     * "no live recruitment" wording standing next to a live application link.
     */
    updates: [
      {
        type: 'note',
        title: 'There is no open Panchayat Secretary recruitment',
        text: `Checked ${CHECKED}. No Panchayat Secretary or Junior Panchayat Secretary notification appears in the TGPSC notification list, and the Panchayat Raj department's own portal carries no recruitment notice. The last actual recruitment to this post was notified in 2018. If you have been told an application is open, check the two official sources linked below before paying any fee.`,
      },
      {
        type: 'p',
        text: 'In May 2026 the Panchayat Raj department stated how many Panchayat Secretary posts were vacant: 1,213, across the state’s 12,760 gram panchayats, with Nalgonda (85), Kumram Bheem Asifabad (78), Kamareddy (68) and Jangaon (64) carrying the largest shortfalls and Sangareddy (12), Hanumakonda (14), Warangal (14) and Mancherial (14) the smallest. That statement is a count of empty chairs. It names no recruiting agency, no eligibility, no exam pattern and no timetable, because none had been decided.',
      },
      {
        type: 'note',
        title: 'Treat “1,213 posts notification out” as unverified',
        text: 'Several coaching and job-alert sites have republished the May 2026 vacancy count as though a recruitment notification had been issued for those posts. No official source says that. Until a notification appears on an official portal with a notification number, a closing date and a fee, there is nothing to apply for — and a page telling you otherwise is guessing.',
      },
      {
        type: 'table',
        caption:
          'What is actually documented about this post, most recent first. The 2026 row is a vacancy statement, not a recruitment.',
        head: ['When', 'What happened'],
        rows: [
          ['May 2026', '1,213 Panchayat Secretary posts reported vacant by the Panchayat Raj department. No recruitment method announced.'],
          ['August 2023', 'The state directed District Collectors to issue appointment orders as Panchayat Secretary Grade-IV to Junior Panchayat Secretaries scoring 70% or above in a District Level Performance Evaluation Committee assessment, with those below 70% re-observed for six months.'],
          ['20 December 2018', 'The High Court stayed the 2018 recruitment and barred the issue of appointment letters, on petitions about the answer key, key objections and the category-wise split of posts.'],
          ['10 October 2018', 'The written examination for the 2018 recruitment was held. District collectorates ran certificate verification and published selection lists from December 2018.'],
          ['31 August 2018', 'Notification No. 2560/CPR&RE/B2/2017 issued by the Panchayat Raj department for 9,355 Junior Panchayat Secretary posts — the last actual recruitment to this cadre.'],
        ],
      },
      {
        type: 'links',
        title: 'Check these two before believing any Panchayat Secretary notification',
        items: [
          { label: 'TGPSC notifications list', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'Telangana Panchayat Raj department portal', href: 'https://epanchayat.telangana.gov.in/' },
        ],
      },
    ],
    /*
     * Eligibility and pattern below describe the 2018 recruitment, and are
     * labelled as such in every caption. They are here because they are the
     * only concrete specification this cadre has ever had, and a reader
     * preparing speculatively is better served by the real 2018 paper than by
     * a generic "objective, degree standard" sentence. They are not a forecast.
     */
    eligibility: [
      {
        type: 'p',
        text: 'There is no current eligibility rule to quote, because there is no current notification. What follows is what the 2018 recruitment required. A future recruitment may reuse it, adjust it, or be run on an entirely different basis — the post has been recruited under more than one designation and conducting arrangement.',
      },
      {
        type: 'table',
        caption:
          'Eligibility as notified for the 2018 Junior Panchayat Secretary recruitment. Historical reference only — do not apply these dates or figures to any future cycle.',
        head: ['Requirement', 'As notified in 2018'],
        rows: [
          ['Qualification', 'A degree from a recognised university, held as on 31 August 2018, together with working knowledge of computers.'],
          ['Age', '18 to 39 years as on 31 August 2018.'],
          ['Age relaxation', 'SC, ST and BC candidates 5 years; persons with disability 10 years; ex-servicemen 3 years plus length of service; state government employees 5 years.'],
          ['Fee', '₹800 for general candidates and BC creamy layer; ₹400 for SC, ST, BC non-creamy-layer, PH and ex-servicemen candidates.'],
          ['Nature of the post', 'District cadre post in the Panchayat Raj Subordinate Service, on a consolidated ₹15,000 a month for three years, with regularisation as Panchayat Secretary Grade-IV after that period.'],
        ],
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'The 2018 written examination. Two objective OMR papers at degree standard, both taken on the same day, with the total of the two deciding selection.',
        head: ['Paper', 'Content', 'Questions', 'Marks', 'Duration'],
        rows: [
          ['Paper I', 'General studies and mental ability, and the culture and history of Telangana', '100', '100', '120 minutes'],
          ['Paper II', 'The Telangana Panchayat Raj Act 2018, rural development programmes, and other central and state schemes', '100', '100', '120 minutes'],
        ],
      },
      {
        type: 'list',
        title: 'Three details that shaped how the 2018 paper had to be answered',
        items: [
          { text: 'Negative marking of one-quarter mark', note: 'a wrong answer cost 0.25, so blind guessing across a 200-question total was expensive rather than free.' },
          { text: 'Papers set in Telugu, English and Urdu', note: 'the medium was the candidate’s to choose, which mattered most for the Act and scheme terminology in Paper II.' },
          { text: 'Selection on written marks alone', note: 'no interview and no weightage from anywhere else. The vacancies were district-specific, so a candidate competed within a district rather than statewide.' },
        ],
      },
      {
        type: 'p',
        text: 'Paper II is the one worth studying even now, because it is the only place any Telangana recruitment has examined panchayat administration as a subject in itself: the Panchayat Raj Act, the evolution of panchayat raj including the constitutional amendments and the committee reports behind them, the duties of a Panchayat Secretary, rural sociology, the flagship rural development schemes, the rural economy of Telangana, community-based organisations and self-help groups, and the revenue, expenditure and scheme-fund accounting a panchayat runs on.',
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED}. The 2018 notification number and date, the examination date and the district selection lists are confirmed on Telangana government district portals. The full text of the 2018 notification — the vacancy break-up, fee, age rule, paper structure and syllabus — is no longer hosted on a government site, because the application portal it lived on has been taken down; those details are reported here as the notification stated them.`,
      },
      {
        type: 'links',
        title: 'Official and primary sources for this page',
        items: [
          { label: 'TGPSC notifications list', href: 'https://websitenew.tgpsc.gov.in/notifications' },
          { label: 'Telangana Panchayat Raj department portal', href: 'https://epanchayat.telangana.gov.in/' },
          { label: 'Mahabubnagar district: 2018 recruitment results and verification notice', href: 'https://mahabubnagar.telangana.gov.in/junior-panchayat-secretary-recruitment-2018-results/' },
          { label: 'Nalgonda district: 2018 category-wise selection list', href: 'https://nalgonda.telangana.gov.in/notice/jr-panchayat-secretary-selection-list-category-wise/' },
          { label: 'Adilabad district: 2018 selection list', href: 'https://adilabad.telangana.gov.in/selection-list-of-candidates-in-junior-panchayat-secretary-recruitment-adilabad-district/' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'Telangana Panchayat Secretary syllabus — general studies plus the panchayat raj and rural development component.',
        lead: [
          'Two halves. One is the general studies material every Telangana recruitment examines; the other is specific to rural administration and has to be studied deliberately.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General studies and current affairs',
                'Current affairs of regional, national and international importance; general science and everyday applications; environmental issues; world, Indian and Telangana geography; Indian history and the national movement; the Constitution, polity and governance; the Indian and Telangana economy; and the Telangana movement and state formation.',
              ],
              [
                'Panchayat raj — the constitutional framework',
                'The constitutional amendment that gave panchayats their status, the three-tier structure of gram panchayat, mandal and zilla parishad, the subjects devolved to them, reservation in local bodies, the state election commission and the state finance commission.',
              ],
              [
                'Panchayat raj — the state framework',
                'Telangana’s own panchayat raj legislation and rules, the powers and duties of the gram panchayat and its officers, the conduct of the gram sabha, panchayat finances and audit, and the administrative chain from the village to the district.',
              ],
              [
                'Rural development and welfare schemes',
                'Rural employment, housing, sanitation, drinking water, livelihoods and social welfare programmes, both national and state, with attention to how each is implemented and monitored at village level.',
              ],
              [
                'Rural economy and society',
                'Agriculture and allied activities, rural credit and cooperatives, land records and revenue administration, rural social structure and the issues that welfare policy is directed at.',
              ],
              [
                'General abilities',
                'Reasoning, analytical ability, basic arithmetic and data interpretation at the level common to state objective papers.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The rural development component is examined at the level of someone who will administer these schemes, not at the level of general awareness. Knowing that a rural employment programme exists is not enough; the paper asks about entitlements, implementing authorities and the role of the gram sabha in it.',
          },
          {
            type: 'note',
            title: 'Take the syllabus from your notification',
            text: 'The balance between general studies and the panchayat raj component has varied between Telangana’s recruitments to rural administration. The syllabus attached to the notification is what the paper is set from, and it is the document to plan against.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'Telangana Panchayat Secretary exam pattern — the objective written stage and what follows it.',
        lead: [
          'A single written stage decides the recruitment, with verification after it. There is no interview and no skill test.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The shape this recruitment has taken. Paper count, marks, duration and negative marking are set by the notification for your cycle — confirm each there.',
            head: ['Stage', 'Format', 'Counts towards merit', 'What it decides'],
            rows: [
              ['Written examination', 'Objective, degree level', 'Yes', 'The merit list in full'],
              ['Certificate verification', 'Documents', 'No', 'Whether the candidacy survives'],
              ['Posting', 'Merit and preference', 'No', 'Where you are appointed'],
            ],
          },
          {
            type: 'p',
            text: 'With everything resting on one objective paper, the practical questions are the ordinary ones: whether wrong answers are penalised, how many seconds a question allows, and which sections you can bank quickly. All three are answered from the notification and from timed practice rather than from additional study.',
          },
          {
            type: 'steps',
            title: 'Where the marks are won',
            items: [
              { title: 'The panchayat raj component', text: 'Finite, specific and neglected by candidates preparing generally. It is the most reliable block in the paper.' },
              { title: 'The Telangana general studies block', text: 'State geography, history, economy and the movement, which recur across every state recruitment.' },
              { title: 'The reasoning and arithmetic section', text: 'Mechanical marks that respond to a few weeks of drilling.' },
              { title: 'Current affairs, if kept daily', text: 'Cheap marks for a candidate with the habit, and unreachable for one without it.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'Telangana Panchayat Secretary previous papers — a thin archive, and what to use alongside it.',
        lead: [
          'This recruitment runs irregularly, so its own paper archive is small. The substitute is the commission’s other objective papers plus the panchayat raj material itself.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Where papers from this recruitment exist, work them first — they are the only direct evidence of how the panchayat raj component is examined. Beyond that, TGPSC Group 4 and Group 2 papers cover the general studies and general abilities half at a comparable level, and papers from other states’ panchayat recruitment show how the rural development component tends to be framed.',
          },
          {
            type: 'list',
            title: 'Building practice from adjacent material',
            items: [
              { text: 'Use TGPSC Group 4 papers for the general half', note: 'same commission, same general studies syllabus, similar level.' },
              { text: 'Use the state panchayat raj act itself as a question source', note: 'read the duties of the panchayat and its officers and quiz yourself on them. Most questions in this component come straight from the framework.' },
              { text: 'Collect the scheme questions', note: 'entitlements, implementing bodies and the role of the gram sabha, gathered into one revision sheet.' },
              { text: 'Keep the Telangana general knowledge file shared', note: 'the same state content serves every recruitment you might sit.' },
            ],
          },
          {
            type: 'note',
            title: 'Papers from other states are background, not practice',
            text: 'Panchayat recruitment papers from neighbouring states show how the rural development component tends to be framed, which is useful. They do not test Telangana’s own panchayat legislation, its administrative structure or its state schemes — and those are the questions that separate candidates here. Use them for format and question style, then come back to the state’s own material for content.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'TGPSC Group 4 previous papers', to: '/government-exams/state/telangana/tgpsc-group-4/previous-year-papers/' },
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Telangana Panchayat Secretary mock tests — staying ready for a recruitment notified at short notice.',
        lead: [
          'An irregular recruitment rewards candidates who were already preparing. Testing is how that readiness is kept warm.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general studies half of this examination is shared with the TGPSC Group recruitments, so a candidate sitting regular objective mocks for those is already tested on most of the paper. What needs its own testing is the panchayat raj and rural development component, which no general mock covers.',
          },
          {
            type: 'steps',
            title: 'A testing routine',
            items: [
              { title: 'A general objective paper weekly', text: 'Any TGPSC-level general studies mock keeps the format and the pace familiar.' },
              { title: 'A panchayat raj sectional test fortnightly', text: 'Built from the state act, the constitutional provisions and the scheme list. Self-made questions are fine and often better.' },
              { title: 'A schemes recall test monthly', text: 'Name the scheme, its purpose, its implementing authority and the panchayat’s role. Ten minutes.' },
              { title: 'Full-length simulation once notified', text: 'To the notified pattern, in one sitting, twice before the examination.' },
            ],
          },
          {
            type: 'note',
            title: 'Write your own questions from the act',
            text: 'For the panchayat raj component there is no test series worth waiting for, and there does not need to be. Read a section of the state act, close it, and write five questions on it — who is competent to act, within what period, subject to whose approval. Answering your own questions a week later is a sharper test than any generic paper, because they came from the source the examination is set on.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'Telangana Panchayat Secretary preparation — a plan built on shared state-exam study with a rural administration layer.',
        lead: [
          'Prepare this alongside the TGPSC groups rather than instead of them. The overlap is large and the recruitment calendar is unpredictable.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A preparation sequence',
            items: [
              { title: 'Start with the shared core', text: 'Polity, Telangana geography and history, the statehood movement, economy and current affairs — the material every state recruitment examines.' },
              { title: 'Add the panchayat raj layer as a subject', text: 'The constitutional provisions, the three-tier structure, the state act, panchayat finances and the gram sabha. A few weeks of focused study covers it.' },
              { title: 'Add the schemes file', text: 'One page per major rural development and welfare scheme: purpose, entitlement, implementing authority, the panchayat’s role.' },
              { title: 'Keep general abilities warm', text: 'Reasoning and arithmetic drills twice a week, shared with every other objective recruitment you might sit.' },
              { title: 'Apply broadly within the state', text: 'The same preparation covers TGPSC Group 4 and much of Group 2 and Group 3.' },
            ],
          },
          {
            type: 'p',
            text: 'Reading the state’s panchayat raj legislation directly is worth more than any summary of it. It is written in plain administrative language, the duties it lists are exactly what the paper asks about, and a candidate who has read the source recognises questions that a candidate working from a guide has to reason towards.',
          },
          {
            type: 'note',
            title: 'Check eligibility for the specific notification',
            text: 'Age limits, qualification, local status and any relaxations are set separately in each recruitment, and this post has been notified under different arrangements. Verify against the notification rather than against a previous cycle.',
          },
          {
            type: 'list',
            title: 'A four-week panchayat raj module',
            items: [
              { text: 'Week one — the constitutional framework', note: 'the amendment that created the system, the three tiers, the devolved subjects, reservation, and the state election and finance commissions.' },
              { text: 'Week two — the state act', note: 'read it through once, then again marking the duties of the panchayat and its secretary specifically.' },
              { text: 'Week three — schemes', note: 'one page each for the major rural development and welfare programmes: purpose, entitlement, implementing authority, the gram sabha’s role.' },
              { text: 'Week four — revision and self-testing', note: 'questions written from the act and the scheme sheets, answered a week after writing them.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'Telangana Panchayat Secretary study material — the state act, scheme documents and shared general studies sources.',
        lead: [
          'The distinctive half of this syllabus is served by primary documents rather than by exam guides, and they are free.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'For the panchayat raj and rural development half',
            items: [
              { text: 'The state panchayat raj act and rules', note: 'the primary source for the duties, powers and finances the paper examines.' },
              { text: 'The constitutional provisions on local government', note: 'read directly — the schedule of subjects, reservation, the state election and finance commissions.' },
              { text: 'Scheme guidelines', note: 'the official documents for the major rural development and welfare programmes, read for entitlements and implementing authorities.' },
              { text: 'The department’s own reports', note: 'for the state’s rural development priorities and recent programmes.' },
            ],
          },
          {
            type: 'list',
            title: 'For the general studies half',
            items: [
              { text: 'Telangana state board textbooks', note: 'state history, geography and civics at the examined level.' },
              { text: 'One polity reference', note: 'shared with every other state recruitment.' },
              { text: 'A daily current-affairs note', note: 'national and Telangana together, in your own words.' },
              { text: 'Reasoning and arithmetic practice sets', note: 'for the general abilities section.' },
            ],
          },
          {
            type: 'note',
            title: 'Read the act, not a summary of the act',
            text: 'The panchayat raj component of this paper is set on legislation that is short, written in plain administrative language and freely available. A guide that paraphrases it is working from the same source with the wording removed — and the wording is what questions about powers, duties and competent authorities turn on. An afternoon spent with the act itself is worth more than a chapter about it.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What does a Panchayat Secretary do?',
        a: 'A Panchayat Secretary is the administrative officer of a gram panchayat — maintaining its records and accounts, convening and recording gram sabha and panchayat meetings, implementing rural development and welfare schemes at village level, issuing certificates within the panchayat’s competence, and acting as the link between the elected body and the mandal and district administration.',
      },
      {
        q: 'What is the exam pattern for Telangana Panchayat Secretary recruitment?',
        a: 'The recruitment has been a degree-level objective written examination covering general studies and current affairs, the panchayat raj system, rural development and welfare schemes, and general abilities, followed by certificate verification. There is no interview. Because Telangana has notified rural administration posts under different designations and arrangements, the paper structure and marks must be confirmed in the notification for your recruitment.',
      },
      {
        q: 'How often is Panchayat Secretary recruitment notified in Telangana?',
        a: 'Irregularly — it is notified when vacancies are sanctioned rather than on an annual calendar. That makes it a recruitment best prepared for alongside the TGPSC Group examinations, since the general studies half is shared and the panchayat raj component can be added in a few weeks when a notification appears.',
      },
      {
        q: 'What should I study for the panchayat raj section?',
        a: 'The constitutional provisions on local government, the three-tier structure and the subjects devolved to it, Telangana’s own panchayat raj legislation and rules, panchayat finances and audit, the conduct of the gram sabha, and the major rural development and welfare schemes with their entitlements and implementing authorities. Reading the state act directly is more useful than any summary of it.',
      },
    ],
  },

  /* ── Departmental tests ────────────────────────────────────── */
  {
    slug: 'departmental-tests',
    path: '/government-exams/state/telangana/departmental-tests/',
    name: 'Telangana Departmental Tests',
    fullName: 'TGPSC Departmental Tests for serving government employees',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Departmental Tests: Papers, Pattern & How to Pass',
    metaDescription:
      'TGPSC Departmental Tests guide — who has to sit them, the account and executive tests, the with-books papers, registration and a preparation approach.',
    lead: [
      'Departmental tests are not a recruitment. They are qualifying examinations that serving government employees in Telangana must pass for probation to be declared, for promotion, and for the increments and appointments their service rules make conditional on them. TGPSC conducts them in sessions and publishes the results as passes rather than as a merit list.',
      'Because nobody is competing against anybody, the whole difficulty is different from a recruitment exam. There is no cutoff moving with the field and no advantage to answering faster than the next candidate. There is a standard, set in the rules, and the only question is whether you meet it.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Who sits them', 'Serving state government employees, as their service rules require'],
      ['Purpose', 'Declaration of probation, promotion, and increments conditional on passing'],
      ['Result', 'Pass or fail against a prescribed standard — not a merit list'],
      ['Format', 'Computer-based in recent sessions, with some papers permitted with books'],
      ['Common tests', 'Account tests, executive officers’ tests, office manual and departmental papers, special language tests'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The tests exist because state service rules make certain career events conditional on demonstrated knowledge of the rules an officer works under. A revenue officer is expected to know the district office manual; an officer handling money is expected to know the accounts and treasury code. The departmental test is how that knowledge is certified, and until it is, probation stays undeclared and promotion waits.',
      },
      {
        type: 'p',
        text: 'TGPSC conducts them in sessions, notified periodically, with candidates registering for the specific papers their service requires. Recent sessions have been computer-based. A distinctive feature is that some papers are conducted with books: candidates are permitted to consult the prescribed code or manual during the examination, which changes what preparation means for those papers entirely.',
      },
      {
        type: 'list',
        title: 'The families of test',
        items: [
          { text: 'Account tests', note: 'for subordinate and executive officers, covering accounting procedure, treasury and financial rules, and the codes governing government transactions.' },
          { text: 'Departmental papers for specific services', note: 'set on the acts, rules and manuals of the department the officer serves in — revenue, education, forest, commercial taxes and others.' },
          { text: 'Office manual and procedure papers', note: 'the district office manual and secretariat procedure, examining how files, records and correspondence are handled.' },
          { text: 'Special language tests', note: 'for officers required to demonstrate proficiency in a language for their post.' },
        ],
      },
      {
        type: 'note',
        title: 'Your service rules decide which papers you sit',
        text: 'There is no general list that applies to every employee. The papers you must pass, the time limit within which you must pass them, and the consequence of not doing so are set by the service rules for your post and by your department. Confirm them with your department and against the commission’s notification before registering, because sitting the wrong paper is a wasted session.',
      },
    ],
    stages: [
      {
        name: 'Notification and registration',
        mode: 'Online, per session',
        detail:
          'The commission notifies a session and candidates register for the specific papers required by their service, with the fee paid per paper. Registration windows are short and are not usually extended.',
      },
      {
        name: 'The examination',
        mode: 'Computer-based in recent sessions',
        detail:
          'Papers are sat at allotted centres on the notified dates. Some papers are conducted with books, in which the prescribed code or manual may be consulted during the examination; others are without books.',
      },
      {
        name: 'Result',
        mode: 'Pass or fail',
        detail:
          'Results are published as passes against the prescribed standard rather than as a merit list. A pass in a paper stands on its own record, and papers can be cleared across different sessions.',
      },
    ],
    /*
     * TGPSC runs two different examination series that both get called "the
     * departmental test", and conflating them sends the wrong reader to the
     * wrong notification:
     *
     *   Departmental Tests   — May and November sessions, for serving state
     *                          government employees. This page's subject.
     *   Half Yearly Exams    — March and September terms, for All-India and
     *                          State Service officers under probation.
     *
     * The distinction is stated first because a search for "TGPSC departmental
     * test September 2026" lands on the Half Yearly notification, which most
     * employees arriving here cannot sit.
     */
    updates: [
      {
        type: 'table',
        caption: `Two separate series, two separate notification streams. Checked ${CHECKED}.`,
        head: ['', 'Departmental Tests', 'Half Yearly Examinations'],
        rows: [
          [
            'Who sits them',
            'Serving Telangana government employees, for the tests their own service rules prescribe.',
            'All-India Service and State Service officers — probationary Deputy Collectors, DSPs, Assistant Commandants and equivalents.',
          ],
          ['Sessions a year', 'Two — May and November.', 'Two — the March and September terms.'],
          [
            'Latest notified',
            'No. 02/2026 dated 26 February 2026, for the May 2026 session. Results and response sheets are published.',
            'No. 03/2026 dated 27 July 2026, for the September 2026 term.',
          ],
          [
            'Where it is held',
            'Centres within the HMDA area — Hyderabad, Ranga Reddy and Medchal-Malkajgiri.',
            'The TGPSC office in Hyderabad only.',
          ],
        ],
      },
      {
        type: 'list',
        title: `Where each series stands as at ${CHECKED}`,
        items: [
          { text: 'May 2026 Departmental Tests — finished', note: 'the session ran from 23 May to 1 June 2026. Results are published for the session and response sheets are on the departmental test dashboard.' },
          { text: 'November 2026 Departmental Tests — not yet notified', note: 'no November session notification had appeared at the date above. Any date circulating for it is a guess; watch the departmental test page.' },
          { text: 'September 2026 Half Yearly — applications have closed', note: 'the window ran to 11 September 2026, 5 PM, after an extension that carried a ₹1,000 late fee. The examinations themselves run 28 September to 1 October 2026.' },
        ],
      },
      {
        type: 'note',
        title: 'The criminal law papers now examine BNS, BNSS and BSA',
        text: 'An addendum dated 6 August 2026 to the September 2026 Half Yearly notification replaces the Indian Penal Code with the Bharatiya Nyaya Sanhita 2023, the Criminal Procedure Code with the Bharatiya Nagarik Suraksha Sanhita 2023, and the Indian Evidence Act with the Bharatiya Sakshya Adhiniyam 2023. It affects twelve paper codes — AS-2 to AS-5, AS-8, AS-9 and PS-2 to PS-7. Everything else in the original notification stands. Note the scope: this addendum is to the Half Yearly series. The Departmental Tests notification of February 2026 still carries the pre-BNS paper names, so do not assume the same substitution has been made to the PC-numbered criminal judicial papers.',
      },
      {
        type: 'links',
        title: 'The two notification streams',
        items: [
          { label: 'TGPSC departmental tests — notifications, syllabus and sessions', href: 'https://websitenew.tgpsc.gov.in/departmentalTest' },
          { label: 'TGPSC half yearly examination notifications', href: 'https://websitenew.tgpsc.gov.in/halfyearnotifications' },
        ],
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'Eligibility for a departmental test is not a general rule about graduates and age — it is a question about your post. Only employees working in the relevant department may sit the tests their own service rules prescribe, and Secretariat employees may sit tests where the rules permit it in order to become eligible for appointment by transfer or promotion.',
      },
      {
        type: 'list',
        title: 'Three things that decide whether you can sit a given paper',
        items: [
          { text: 'Your service rules name the paper', note: 'the tests you must pass, the period within which you must pass them, and what happens if you do not, are set by the rules for your post — not by the commission.' },
          { text: 'Some papers are open to everyone', note: 'a defined set of paper codes may be taken whether or not you are in government service. Most are not: several test families are restricted to their own department, such as the Commercial Taxes, Treasuries and Accounts, Sericulture and Works Accounts papers.' },
          { text: 'Some papers are now compulsory during probation', note: 'under orders of December 2025, Assistant Section Officers, stenographers, typists, junior assistants and equivalents recruited after 12 May 2014 must pass the Proficiency in Office Automation test, paper code 162, during probation.' },
        ],
      },
      {
        type: 'table',
        caption:
          'Fees as notified for the May 2026 Departmental Tests session and the September 2026 Half Yearly term. Both series charge the same way, and neither refunds.',
        head: ['Charge', 'Amount', 'Notes'],
        rows: [
          ['Examination fee', '₹200 per paper', 'Charged for each paper registered. No fee for the Gujarathi and Marwari language tests.'],
          ['Application processing fee', '₹1,000 per test', 'Charged in addition to the per-paper examination fee.'],
          ['Late fee, where an extension is granted', '₹1,000', 'Applied to the September 2026 Half Yearly extension. An extension is not routine — do not plan on one.'],
          ['Exemptions', 'None', 'Fee concessions were withdrawn by government order in August 2002. Payment is online only; postal orders and demand drafts are not accepted.'],
        ],
      },
    ],
    pattern: [
      {
        type: 'table',
        caption:
          'How a departmental test paper is actually conducted. The mode depends on the paper, not on the session.',
        head: ['Paper type', 'Mode', 'Duration'],
        rows: [
          ['Most papers', 'Objective, computer-based', '2 hours'],
          ['Language and Survey & Settlement papers', 'Conventional and descriptive, answered in an OMR-attached booklet in blue or black pen with the question paper shown on screen', '3 hours'],
          ['Second Class Language Test (PC 005)', 'Conventional', '2 hours'],
          ['Proficiency in Office Automation (PC 162)', 'As notified', '1 hour'],
        ],
      },
      {
        type: 'list',
        title: 'The rules that catch people out',
        items: [
          { text: 'With books does not mean with notes', note: 'where a paper is notified WITH BOOKS you may bring bare Acts only. Guides, commentaries, made-easy books, photocopies, diaries, coaching notes and handbooks are all barred, and calculators are not allowed except in the Survey papers.' },
          { text: 'Part I without books, Part II with books', note: 'in the Half Yearly law papers each subject is split this way — the first part tests recall, the second tests whether you can find and apply the provision. They are different exams and need different preparation.' },
          { text: 'Questions are set in English', note: 'the exception is the Survey & Settlement Surveyor’s test and the translation tests, which use the chosen language alongside English.' },
          { text: 'Report ninety minutes early', note: 'gates close thirty minutes before the paper starts.' },
          { text: 'Underlined codes are combination papers', note: 'they have to be passed together rather than one at a time, so registering for only half of a pair wastes the session.' },
        ],
      },
      {
        type: 'note',
        title: 'What the result is, and what you will never be sent',
        text: 'The results bulletin published by the commission is itself the authentic publication for extending service benefits — no individual pass certificate and no confirmation certificate is issued, so do not wait for one. Unsuccessful candidates may buy a memorandum of marks for ₹200 per test within a month of the result. Revaluation and re-verification are never permitted; a recount is allowed only for conventional written papers, within fifteen days, at ₹100 a paper.',
      },
      {
        type: 'p',
        text: 'One figure this page does not state is the pass mark. The May 2026 notification does not print qualifying marks, and neither the syllabus index nor the results index carries them — they sit in the Telangana Departmental Test Rules 1965 and in the syllabus document for the individual paper. Take the number from your paper’s own syllabus PDF rather than from any general claim about departmental tests.',
      },
    ],
    sources: [
      {
        type: 'p',
        text: `Checked ${CHECKED} against the commission’s own notifications and result pages. Session dates, fees, paper modes and the BNS addendum are quoted from the notifications named below; qualifying marks are deliberately absent because no official page consulted stated them.`,
      },
      {
        type: 'links',
        title: 'Official notifications, syllabus and results',
        items: [
          { label: 'Departmental tests: sessions, notifications and syllabus', href: 'https://websitenew.tgpsc.gov.in/departmentalTest' },
          { label: 'Half yearly examination notifications', href: 'https://websitenew.tgpsc.gov.in/halfyearnotifications' },
          { label: 'Departmental test syllabus index, paper by paper', href: 'https://tspscdeptltest.telangana.gov.in/HomePages/Syllabus.aspx' },
          { label: 'May 2026 session results', href: 'https://tspscdeptltest.telangana.gov.in/HomePages/DeptTestResults_May_2026.aspx' },
          { label: 'Response sheets dashboard', href: 'https://tspscdeptltest.telangana.gov.in/HomePages/DepartmentalResponseSheetsDashboard.aspx' },
          { label: 'Departmental test bulletins archive', href: 'https://websitenew.tgpsc.gov.in/DeptTstBlltncmsStatic' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC departmental test syllabus — what the account, executive, office manual and language papers examine.',
        lead: [
          'Each paper is set on a named document — a code, a manual or an act. The syllabus is that document, which is both the difficulty and the opportunity.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Account tests',
                'Government accounting procedure, the treasury and financial codes, budget and expenditure control, drawal and disbursement of funds, audit objections and their settlement, and the rules governing pay, allowances, advances and pensions. Set directly on the codes and rules rather than on an accounting textbook.',
              ],
              [
                'Executive officers’ tests',
                'The acts and rules an executive officer administers, together with the procedure for exercising the powers the post carries. Content differs by the service the test is prescribed for.',
              ],
              [
                'District office manual and procedure',
                'The handling of correspondence, files, registers and records; the movement and disposal of papers; delegation and reporting; and the office procedure that governs day-to-day administration.',
              ],
              [
                'Departmental papers',
                'The specific legislation, rules and manuals of the department — revenue, education, forest, commercial taxes, panchayat raj and others. Each paper names the documents it is set on.',
              ],
              [
                'Special language tests',
                'Proficiency in the prescribed language at the standard the post requires, typically covering comprehension, translation and drafting rather than literary study.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The practical consequence of a syllabus that names documents is that guides are a poor substitute for the documents themselves. A question set on a rule is answered from the rule, and a summary that paraphrases it has already lost the wording the question turns on.',
          },
          {
            type: 'note',
            title: 'The paper list is in the notification',
            text: 'The commission publishes the papers included in each session with their codes, along with which are conducted with books. Register against that list and against your service requirement rather than against a previous session — both the papers offered and their conditions can change.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC departmental test pattern — computer-based papers, the with-books papers, and how the result works.',
        lead: [
          'A qualifying examination behaves differently from a competitive one, and preparing for it as though it were competitive wastes effort.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'How departmental tests are structured. The paper list, duration, marks, permitted books and the qualifying standard are set by the commission’s notification for each session — confirm them there.',
            head: ['Feature', 'How it works', 'What it means for you'],
            rows: [
              ['Result', 'Pass or fail against a prescribed standard', 'You are not competing with other candidates'],
              ['Papers', 'Registered individually, per your service requirement', 'Papers can be cleared across different sessions'],
              ['With-books papers', 'The prescribed code or manual may be consulted', 'Navigation of the book is the skill being tested'],
              ['Mode', 'Computer-based in recent sessions', 'Practise on screen rather than only on paper'],
            ],
          },
          {
            type: 'p',
            text: 'The with-books papers deserve their own explanation, because candidates prepare for them backwards. Being allowed the code does not make the paper easy; it makes it a test of whether you can find a provision quickly. A candidate who has never opened the book before the examination will not find anything in the time available, while one who knows its structure, its index and where the frequently-asked rules sit can answer confidently.',
          },
          {
            type: 'steps',
            title: 'How to prepare a with-books paper',
            items: [
              { title: 'Get the exact edition permitted', text: 'The notification specifies what may be carried. An unpermitted edition or an annotated copy can be refused at the centre.' },
              { title: 'Learn the structure before the content', text: 'Parts, chapters and the index. Speed comes from knowing where to look, not from having read every page.' },
              { title: 'Tab the provisions that recur', text: 'Work past papers and mark the rules they draw on. Most papers return to the same core provisions.' },
              { title: 'Practise timed lookups', text: 'Set questions for yourself and find the answer against a clock. This is the actual skill the paper tests.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC departmental test previous papers — the most efficient preparation available for a rules-based examination.',
        lead: [
          'When a paper is set on a fixed document, past papers show which parts of that document are actually used. Few examinations reward the archive as directly as these.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work through several sessions of past papers for your specific test and mark, in your copy of the code or manual, every provision a question was drawn from. What emerges is a heavily annotated book in which the examinable core is visible at a glance — and for a with-books paper, that annotated copy is the single most useful thing you can carry in, subject to what the notification permits.',
          },
          {
            type: 'list',
            title: 'What the archive gives you',
            items: [
              { text: 'The recurring provisions', note: 'a small subset of any code carries most of the questions, and it is stable across sessions.' },
              { text: 'The style of question', note: 'whether the paper asks for the rule, its application to a situation, or the authority competent to act.' },
              { text: 'The lookup burden', note: 'how many questions genuinely require the book and how many are answerable directly, which tells you how to budget the time.' },
              { text: 'The difficulty of the language paper', note: 'for special language tests, where the level is often misjudged in both directions.' },
            ],
          },
          {
            type: 'note',
            title: 'The annotated code is the study output',
            text: 'Working past sessions produces something more useful than a score: a copy of the code in which every examined provision is marked. After three or four sessions the marked provisions cluster, and what looked like an unmanageable document turns out to have a core of a few dozen rules. That core, revised, is what passing these papers actually requires.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'Exam updates and notifications', to: '/exam-updates/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC departmental test practice — self-testing against the code, and rehearsing the computer-based format.',
        lead: [
          'Commercial mock tests barely exist for these papers, which matters less than it sounds. The best practice material is the code itself and the past papers.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Build your own tests. Take twenty questions from past sessions, sit them to time with only what you would be permitted to carry, and mark honestly. Repeat with a different set. For a rules-based paper this is closer to the real examination than any generic test could be, and it costs nothing but the time.',
          },
          {
            type: 'steps',
            title: 'A practice routine for a working officer',
            items: [
              { title: 'Thirty minutes on most days, not long weekend sessions', text: 'These papers reward familiarity accumulated slowly, and a serving officer rarely has long uninterrupted blocks.' },
              { title: 'One past paper a week, to time', text: 'With exactly the material the notification permits, and no more.' },
              { title: 'Annotate as you go', text: 'Every question traced back to its provision, marked in the book. The annotation is the revision.' },
              { title: 'Rehearse the on-screen format once', text: 'If the session is computer-based, sit at least one practice paper on a screen rather than on paper.' },
            ],
          },
          {
            type: 'note',
            title: 'Time the lookup, because that is the paper',
            text: 'In a with-books paper the marks go to whoever can find a provision inside a minute. Practise that specifically: take ten questions from a past session, start a clock, and find each answer in the code, recording how long each took. The provisions that were slow to locate are the ones to tab — and after two or three rounds of this the tabs stop being needed at all.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'Exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC departmental test preparation — how a serving officer clears the required papers without a study leave.',
        lead: [
          'Almost everyone sitting these papers is doing so alongside a full-time posting. The plan has to survive that, which rules out most conventional preparation advice.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A plan that fits around a posting',
            items: [
              { title: 'Confirm which papers you actually need', text: 'From your service rules and your department, in writing if possible. This is the step that most often goes wrong, and it costs a whole session.' },
              { title: 'Register for a realistic number of papers', text: 'Two well-prepared papers pass; four half-prepared ones usually do not. Papers carry across sessions, so there is no advantage in overloading one.' },
              { title: 'Obtain the exact prescribed material early', text: 'The code, manual or act named for the paper, in the edition the notification permits.' },
              { title: 'Work past papers from the start, not at the end', text: 'They define the examinable core, and the earlier they do so the less of the book you have to hold.' },
              { title: 'Use your own work as revision', text: 'The rules you apply in your posting are the rules the paper examines. Noticing that connection turns daily work into preparation.' },
            ],
          },
          {
            type: 'p',
            text: 'One more habit is worth naming: keep a record of which papers you have passed and in which session, with the result document saved. Career events depend on these passes, they are claimed years later, and reconstructing a session record after the fact is considerably harder than filing it at the time.',
          },
          {
            type: 'note',
            title: 'Watch the registration window',
            text: 'Departmental test sessions have short registration windows that are not usually extended, and a missed window means waiting for the next session with probation or promotion waiting with it. Track the commission’s notifications, and register early in the window rather than at the end of it.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC departmental test study material — the codes, manuals and acts each paper is set on.',
        lead: [
          'For once the reading list is not a matter of judgement. Each paper names its document, and that document is the material.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'What to obtain',
            items: [
              { text: 'The prescribed code or manual for your paper', note: 'in the edition the notification permits, since for with-books papers the wrong edition may not be admitted.' },
              { text: 'The relevant financial and treasury rules', note: 'for account tests, where questions come directly from the provisions.' },
              { text: 'Your department’s own acts and rules', note: 'for departmental papers, which are set on them specifically.' },
              { text: 'Past papers for your test, several sessions deep', note: 'the annotation key that turns a large document into a small examinable core.' },
            ],
          },
          {
            type: 'p',
            text: 'Commercial guides for these tests exist and are of uneven quality. They are useful for organising a first pass through an unfamiliar code, and they are not a substitute for it — a paraphrase cannot be relied on where a question turns on the wording of a rule.',
          },
          {
            type: 'note',
            title: 'Check the permitted edition before the day',
            text: 'For a with-books paper the notification names what may be carried into the hall, and centres do refuse material that does not match — a superseded edition, a heavily annotated copy, or a commercial guide brought in place of the code itself. Settle this when you register rather than at the door, and where annotation is permitted, keep it to tabs and marginal references rather than inserted notes.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Exam updates and notifications', to: '/exam-updates/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What are departmental tests in Telangana?',
        a: 'They are qualifying examinations conducted by TGPSC for serving state government employees, required by service rules for the declaration of probation, for promotion, and for increments and appointments that are made conditional on passing them. They are not a recruitment: results are published as passes against a prescribed standard rather than as a merit list.',
      },
      {
        q: 'Which departmental tests do I need to pass?',
        a: 'That is decided by the service rules for your post and by your department, not by a general list. The papers required, the period within which they must be cleared and the consequence of not clearing them all vary by service. Confirm with your department and against the commission’s notification before registering, because sitting the wrong paper costs a whole session.',
      },
      {
        q: 'What is a with-books departmental test?',
        a: 'Some papers permit candidates to consult the prescribed code or manual during the examination. This does not make the paper easy — it makes it a test of how quickly you can find a provision. Preparation for these papers means learning the structure and index of the book and tabbing the provisions past papers keep returning to, rather than memorising content. Only the edition the notification permits may be carried.',
      },
      {
        q: 'How often are Telangana departmental tests held?',
        a: 'The commission conducts them in notified sessions rather than continuously. Registration windows are short and are not usually extended, so tracking the commission’s notifications matters — a missed window means waiting for the next session, with any dependent probation or promotion waiting too.',
      },
      {
        q: 'Can I clear departmental test papers across different sessions?',
        a: 'Yes. Papers are registered for and passed individually, and a pass stands on its own record. That is why registering for two papers you have prepared well is a better strategy than registering for four you have not — there is no advantage to overloading a single session.',
      },
    ],
  },
]

/*
 * The extra sections written in telangana-depth.js are appended onto the
 * matching resource here rather than being pasted inline, so this file stays
 * readable as a record of what each recruitment is. A depth entry for a
 * resource that does not exist is ignored rather than creating an orphan page.
 */
for (const exam of telangana) {
  const extra = DEPTH[exam.slug]
  if (!extra) continue
  for (const [resource, blocks] of Object.entries(extra)) {
    const written = exam.resources?.[resource]
    if (written) written.blocks = [...written.blocks, ...blocks]
  }
}

export default telangana
