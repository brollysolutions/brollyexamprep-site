/* Maharashtra exam records.
   Nine pages behind the Maharashtra hub cards. MPSC runs the Rajyaseva,
   Group B and Group C combined examinations; the police recruitment is unit
   by unit under the DGP; Talathi and Zilla Parishad posts are recruited by
   the revenue department and the rural development department through an
   outsourced online examination; MAHATET and the teacher recruitment portal
   Pavitra handle school teaching. Departmental examinations are MPSC's.
   Structure, block types and conventions follow ./telangana.js. */

const OFFICIAL = 'mpsc.gov.in'
const CHECKED = '11 September 2026'

const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'MPSC and the state’s other recruiting bodies revise schemes, ratios and dates between cycles, and the advertisement for your cycle is the document that binds. The figures here are from the latest documents on the official sites at the date checked and are labelled where they come from an older cycle.',
}

/* ── MPSC landing pages ─────────────────────────────────────────
   mpsc.gov.in is a script-rendered application; its section routes are
   stable but its documents are served through an API and open from the
   page rather than from a static URL. The routes below are the ones its
   own menu uses. Application is on mpsconline.gov.in. */
const MPSC = {
  home: 'https://mpsc.gov.in/',
  advertisements: 'https://mpsc.gov.in/adv_notification/8',
  results: 'https://mpsc.gov.in/result_of_exam/11',
  meritLists: 'https://mpsc.gov.in/results_merit_list/14',
  finalLists: 'https://mpsc.gov.in/results_final_recomm_list/15',
  provisionalLists: 'https://mpsc.gov.in/provisional_selection_list/105',
  papers: 'https://mpsc.gov.in/prev_que_papers/9',
  keys: 'https://mpsc.gov.in/answer_keys_of_examinations/45',
  belowQualifying: 'https://mpsc.gov.in/candidates_scoring_below_qualifying_marks/97',
  instructions: 'https://mpsc.gov.in/general_instruction/34',
  online: 'https://mpsconline.gov.in/candidate',
}

/* ── MPSC Rajyaseva — State Services ────────────────────────────
   The Maharashtra Civil Services Gazetted Combined Preliminary Examination
   screens for several gazetted services at once; the State Services Main
   Examination is the descriptive nine-paper examination that follows for
   the Group A and B civil posts. The 2025 cycle was the first on the
   descriptive pattern and reached interview in September 2026; the 2026
   cycle's mains application closed on 10 September 2026. Every figure
   below is from the commission's own notifications read on its site. */
const MH_RS = {
  slug: 'mpsc-rajyaseva',
  path: '/government-exams/state/maharashtra/mpsc-rajyaseva/',
  name: 'MPSC Rajyaseva',
  fullName: 'Maharashtra Civil Services Gazetted Combined Preliminary Examination and State Services Main Examination',
  authority: 'Maharashtra Public Service Commission (MPSC)',
  official: OFFICIAL,
  seoTitle: 'MPSC Rajyaseva 2026: 238 Posts, Mains 3 Oct–1 Nov, Pattern & Syllabus',
  metaDescription:
    'MPSC Rajyaseva 2026 — 238 posts, mains 3 October to 1 November. The 400-mark prelims, nine-paper descriptive mains, 275-mark interview, age, fees and cut-offs.',
  lead: [
    'The State Services examination is the Maharashtra Public Service Commission’s recruitment to the state’s Group A and B civil posts — deputy superintendents of police, block development officers, assistant directors of finance and accounts, tahsildars, section officers and the rest. Since 2025 it has been built like the Union examination: an objective preliminary that screens and does not count, a main examination of nine descriptive papers, and an interview. The preliminary is now a combined examination for several gazetted services, and the mains that follows is the State Services Main.',
    'The 2026 cycle is at the mains. The combined preliminary of 31 May 2026, notified on 24 December 2025 for 87 posts and revised on 17 June 2026 to 265 across three services, sent its result on 22 June; the State Services Main for 238 posts, notified on 25 August, took applications to 10 September and is examined from 3 October to 1 November 2026 at six centres. The 2025 cycle, the first on the descriptive pattern, published its mains result on 25 August 2026 with 438 candidates through and interviewed them from 7 to 12 September.',
  ],
  quickFacts: [
    ['Conducted by', 'Maharashtra Public Service Commission'],
    ['2026 cycle', 'Advt 132/2025 prelims, 31 May; result 22 June; State Services Main Advt 018/2026, 238 posts, 3 October to 1 November 2026'],
    ['Status', 'Mains applications closed 10 September 2026, fee to 13 September; no window open'],
    ['Prelims', 'Two papers of 200 — general studies counted, CSAT qualifying at 33 per cent; 0.25 off per wrong answer'],
    ['Mains and merit', 'Marathi and English of 300 qualifying at 25 per cent; essay, four general studies and two optional papers of 250 — 1,750; interview 275; total 2,025'],
    ['Age and fee', '18 or 19 to 38, 43 or 45 on 1 April 2026; mains fee ₹544, ₹344 for reserved categories'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2026 posts show the range. The corrigendum of 17 June 2026 lists 8 deputy superintendents of police and assistant commissioners, 13 deputy chief executive officers and block development officers of the upper grade, 32 assistant directors of the finance and accounts service, 30 assistant block development officers and the other cadres that make up the 238 State Service posts, alongside 7 livestock development officers of the veterinary service and 4 posts of the civil engineering service that share the same preliminary. Physical standards apply to the police, excise and prisons posts — 165 cm and an 84 cm chest with 5 cm expansion for men in the police service, 157 cm for women.',
    },
    {
      type: 'p',
      text: 'The commission changed the mains from objective to descriptive with effect from the 2025 cycle, after announcing the change in 2022 and deferring it once. Under the scheme in the 2026 mains notification, the two language papers of 300 marks are qualifying at 25 per cent; the essay, the four general studies papers and the two optional papers of 250 each make 1,750; the interview is 275; and the merit is 2,025. Each general studies paper carries twenty compulsory questions, ten at 150 words and ten at 250, answered wholly in Marathi or wholly in English as chosen at application. A notice of June 2026 is reported to remove the optional papers from the 2027 cycle; that notice was not read and the 2026 scheme stands as notified.',
    },
    {
      type: 'list',
      title: 'What defines the examination',
      items: [
        { text: 'Prelims screen, mains rank', note: 'the combined preliminary admits candidates to the mains on a cut-off and its marks are then discarded; the 2026 open cut-off was 98 of 200 on the general studies paper.' },
        { text: 'Interview at three per post', note: 'the mains notification calls about three candidates per post to interview, on a cut-off applied to papers 3 to 9, subject to the percentile floors — 35th for unreserved, 30th for backward classes and orphans, 20th for PwD and sportspersons.' },
        { text: 'One language for the answer', note: 'papers 3 to 7 are answered wholly in Marathi or wholly in English as opted at the preliminary application, and the choice cannot be changed at any stage; the optional papers follow the medium fixed for the subject.' },
        { text: 'Preferences are locked at the mains application', note: 'a candidate lists the cadres in order and locks them; the order decides the allotment, and a cadre not listed is not offered.' },
      ],
    },
    {
      type: 'note',
      title: 'Two examinations, one advertisement line',
      text: 'The preliminary is advertised as the Maharashtra Civil Services Gazetted Combined Preliminary Examination — Advt 132/2025 for the 2026 cycle — and screens for the State Service, the police service and, in 2026, the veterinary and civil engineering services. The State Services Main is notified separately, as Advt 018/2026, and the mains for the other services separately again. It is not combined with the commission’s Group B non-gazetted or Group C examinations, which have their own preliminaries.',
    },
  ],
  stages: [
    {
      name: 'Combined preliminary examination',
      mode: 'Objective, two papers of 200, one day',
      detail:
        'Paper I, general studies, 100 questions for 200 marks, counted; Paper II, the civil services aptitude test, 200 marks, qualifying at 33 per cent. Two hours each, Marathi and English, a quarter of the question’s marks off per wrong answer. The 2026 paper was on 31 May with the result on 22 June.',
    },
    {
      name: 'State Services Main Examination',
      mode: 'Descriptive, nine papers over nine days',
      detail:
        'Marathi and English, 300 each, qualifying at 25 per cent; essay, 250; general studies 1 to 4, 250 each; optional subject papers 1 and 2, 250 each. Three hours a paper, 11.00 to 2.00. The 2026 mains runs from 3 October to 1 November at Amravati, Chhatrapati Sambhajinagar, Nagpur, Nashik, Navi Mumbai and Pune.',
    },
    {
      name: 'Interview',
      mode: '275 marks; about three per post',
      detail:
        'At the commission’s office in Navi Mumbai, with original documents. The 2025 cycle’s 438 candidates were interviewed from 7 to 12 September 2026.',
    },
    {
      name: 'Merit and allotment',
      mode: '2,025; preferences locked at application',
      detail:
        'A general merit list of mains plus interview, then the provisional selection list by cadre preference and reservation, then the final merit and recommendation lists after objections and verification.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No window is open. The 2026 mains notification of 25 August 2026, with a corrigendum of 2 September on final-year candidates, took applications from 27 August at 2 pm to 10 September at 11.59 pm, with the fee payable to 13 September; the papers run from 3 October to 1 November. The 2025 cycle — prelims Advt 012/2025, postponed from 28 September to 9 November 2025 for floods, result 27 February 2026; mains Advt 001/2026 in April and May 2026, result 25 August 2026 with 438 candidates qualified — was at interview from 7 to 12 September 2026 at Navi Mumbai. The 2024 cycle, the last on the objective pattern, is reported to have published its provisional selection list on 5 January 2026.`,
    },
    {
      type: 'table',
      caption: 'The 2026 cycle, from the commission’s advertisements and corrigenda.',
      head: ['Event', 'Detail'],
      rows: [
        ['Preliminary advertisement', 'Advt 132/2025, 24 December 2025 — 87 posts; applications to 20 January 2026'],
        ['Preliminary examination', '31 May 2026'],
        ['Corrigendum on posts', '17 June 2026 — 265 posts: State Service 238, veterinary 7, civil engineering 4'],
        ['Preliminary result', '22 June 2026'],
        ['Mains notification', 'Advt 018/2026, 25 August 2026 — 238 State Service posts; corrigendum 2 September'],
        ['Mains applications', '27 August 2 pm to 10 September 2026 11.59 pm; fee to 13 September'],
        ['Mains papers', '3, 4, 5, 10, 11, 17, 18, 31 October and 1 November 2026, 11.00 to 2.00'],
      ],
    },
    {
      type: 'table',
      caption: 'Mains timetable 2026, from the notification.',
      head: ['Date', 'Paper'],
      rows: [
        ['3 October', 'Paper 1 — language, Marathi'],
        ['4 October', 'Paper 2 — language, English'],
        ['5 October', 'Paper 3 — essay'],
        ['10 October', 'Paper 4 — general studies 1'],
        ['11 October', 'Paper 5 — general studies 2'],
        ['17 October', 'Paper 6 — general studies 3'],
        ['18 October', 'Paper 7 — general studies 4'],
        ['31 October', 'Paper 8 — optional subject 1'],
        ['1 November', 'Paper 9 — optional subject 2'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2025 cycle — the first on the descriptive pattern.',
      head: ['Event', 'Date'],
      rows: [
        ['Preliminary — Advt 012/2025', '9 November 2025, postponed from 28 September for floods'],
        ['Preliminary result', '27 February 2026'],
        ['State Services Main — Advt 001/2026', 'April and May 2026'],
        ['Mains result — 438 qualified', '25 August 2026'],
        ['Interviews at Navi Mumbai', '7 to 12 September 2026'],
        ['Mains cut-off, unreserved', '942 general, 959 women, of the 1,750 counted'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'MPSC — merit lists', href: MPSC.meritLists },
        { label: 'MPSC online — application portal', href: MPSC.online },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the State Services Main notification of 25 August 2026, which carries the terms of the preliminary advertisement forward. Age on 1 April 2026 — 20 January 2026 for the industries officer (technical) cadre.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Citizenship and language', 'Indian citizen; knowledge of Marathi required.'],
        ['Qualification', 'A degree of a statutory university, or an equivalent the government recognises; the finance and accounts cadres need a commerce degree with 55 per cent, a chartered or cost accountancy final, a commerce postgraduate degree or an MBA in finance; the industries officer an engineering or science degree.'],
        ['Final-year candidates', 'May sit the preliminary; must have passed the degree by the closing date for the mains application.'],
        ['Age', '18 or 19 minimum by cadre; 38 for the unreserved; 43 for backward classes, EWS, orphans, sportspersons and ex-servicemen; 45 for PwD.'],
        ['Physical standards', 'Deputy superintendent of police and assistant commissioner: men 165 cm and 84 cm chest with 5 cm expansion, women 157 cm. Excise superintendent and deputy superintendent: men 165 cm and 79 cm with 5 cm, women 155 cm.'],
        ['Attempts', 'No limit stated in the notification.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, online only; not refundable.',
      head: ['Stage', 'Unreserved', 'Backward classes, EWS, orphans, PwD'],
      rows: [
        ['Mains, 2026', '₹544', '₹344'],
        ['Preliminary', 'The commission’s 2026 preliminary advertisements for its other combined examinations charge ₹394', '₹294'],
      ],
    },
    {
      type: 'list',
      title: 'Documents the mains application requires',
      items: [
        { text: 'Uploaded as PDFs of 50 to 500 KB', note: 'SSC certificate, age proof, degree, caste and non-creamy-layer certificates for 2025-26, an EWS certificate issued before the preliminary closing date of 20 January 2026, the UDID for PwD candidates, sports certificates with the verification report, and the Marathi proof where applicable.' },
        { text: 'Through DigiLocker', note: 'under the commission’s procedure of 7 May 2026 for certificates submitted with the application.' },
        { text: 'Preferences', note: 'cadre preferences are arranged and locked in the online system at the mains application; a cadre not chosen is not offered at allotment.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Preliminary — objective, OMR, Marathi and English.',
      head: ['Paper', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Paper I — general studies', '200, 100 questions', '2 hours', 'Counted for the cut-off'],
        ['Paper II — civil services aptitude test', '200', '2 hours', 'Qualifying at 33 per cent'],
        ['Negative marking', '—', '—', 'A quarter of the question’s marks per wrong answer; more than one answer marked is wrong'],
        ['Result', '—', '—', 'Cut-off on Paper I by category; 2026 unreserved 98 of 200; marks not carried forward'],
      ],
    },
    {
      type: 'table',
      caption: 'State Services Main — descriptive, three hours a paper, from clause 8 of the 2026 notification and the commission’s question-paper structure document.',
      head: ['Paper', 'Marks', 'Rule'],
      rows: [
        ['Paper 1 — Marathi', '300', 'Qualifying at 25 per cent; not counted'],
        ['Paper 2 — English', '300', 'Qualifying at 25 per cent; not counted. Essay 100, comprehension 75, précis 75, usage and vocabulary 50; answered in English'],
        ['Paper 3 — essay', '250', 'Two sections of four topics, one from each; in Marathi or English as opted'],
        ['Papers 4 to 7 — general studies 1 to 4', '250 each', 'Twenty compulsory questions, printed in both languages; questions 1 to 10 in 150 words, 11 to 20 in 250; answered wholly in one language'],
        ['Papers 8 and 9 — optional subject', '250 each', 'In the medium fixed for the subject'],
        ['Written total counted', '1,750', 'Papers 3 to 9'],
        ['Interview', '275', 'About three per post'],
        ['Total', '2,025', 'Merit list of mains plus interview'],
      ],
    },
    {
      type: 'note',
      title: 'The percentile floors and the cut-off',
      text: 'The commission draws the interview cut-off on the total of papers 3 to 9 at roughly three candidates per post, category by category. Under its minimum-percentile rule a candidate must also stand at or above the 35th percentile of the written marks if unreserved, the 30th if from a backward class or an orphan, and the 20th if PwD or a sportsperson. A candidate qualified on a reserved category’s cut-off is considered only for that category. Word limits are enforced with deductions, blank pages must be struck through, and sub-questions answered out of sequence are not assessed.',
    },
    {
      type: 'list',
      title: 'What the notifications settle',
      items: [
        { text: 'The choice of medium is made once', note: 'at the preliminary application, for papers 3 to 7; answers in another medium are not assessed.' },
        { text: 'Optional subjects are chosen at the preliminary application too', note: 'and cannot be changed; the commission publishes the list and each subject’s medium with the syllabus.' },
        { text: 'Calculators for named subjects', note: 'a non-programmable scientific calculator for the engineering, physics, chemistry, mathematics, statistics and commerce optionals; an outline stencil for map questions in geography.' },
        { text: 'Medical examination before interview', note: 'for the cadres with physical standards, arranged by the commission; a candidate who fails the standard is ineligible for that cadre.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} on the commission’s own site against the State Services Main notification Advt 018/2026 of 25 August 2026 and its corrigendum of 2 September, the corrigendum of 17 June 2026 revising the posts under Advt 132/2025, the 2025 mains interview schedule of 25 August 2026, and the commission’s question-paper structure document for the descriptive mains. The commission’s site renders its documents from an application rather than static links, so the links below go to its section pages. The preliminary scheme is as the commission’s scheme documents state it; the 2026 preliminary fee figure is from the commission’s other combined preliminary advertisements of 2026.`,
    },
    {
      type: 'links',
      title: 'Official pages',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'MPSC — provisional selection lists', href: MPSC.provisionalLists },
        { label: 'MPSC — final recommendation lists', href: MPSC.finalLists },
        { label: 'MPSC — candidates below qualifying marks', href: MPSC.belowQualifying },
        { label: 'MPSC — general instructions', href: MPSC.instructions },
        { label: 'MPSC online', href: MPSC.online },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'MPSC Rajyaseva syllabus — prelims general studies and CSAT, and the descriptive mains essay, four general studies papers, optionals and qualifying languages.',
      lead: [
        'The commission publishes the revised State Services syllabus and the question-paper structure on its site under candidate information; the 2026 mains notification refers candidates to it for the optional list and the medium of each subject.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Prelims Paper I — general studies',
              'History and geography of India and Maharashtra, polity and governance, economy and social development, environment, general science, and current events.',
            ],
            [
              'Prelims Paper II — CSAT',
              'Comprehension, interpersonal and communication skills, logical reasoning, decision-making, general mental ability, basic numeracy and data interpretation, and Marathi and English comprehension. Qualifying at 33 per cent.',
            ],
            [
              'Mains Papers 1 and 2 — Marathi and English',
              'Essay, comprehension, précis, usage and vocabulary; 300 marks each, qualifying at 25 per cent.',
            ],
            [
              'Mains Paper 3 — essay',
              'Two sections of four topics; one essay from each; 250 marks.',
            ],
            [
              'Mains Papers 4 to 7 — general studies 1 to 4',
              'History, geography and society; governance, Constitution and polity; economy, science and technology, environment and security; ethics, integrity and aptitude — with Maharashtra weighted throughout. Twenty questions a paper.',
            ],
            [
              'Mains Papers 8 and 9 — optional subject',
              'One subject from the commission’s list, two papers of 250; the medium fixed by the subject.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus pages',
          items: [
            { label: 'MPSC — candidate information', href: MPSC.home },
            { label: 'MPSC — general instructions', href: MPSC.instructions },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'MPSC Rajyaseva exam pattern — 400-mark prelims as a screen, nine-paper descriptive mains with 1,750 counted, 275-mark interview, 2,025 merit.',
      lead: [
        'Prelims screen; 1,750 written marks and a 275-mark interview rank.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules that decide the result.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims cut-off on Paper I', 'CSAT qualifying at 33 per cent; a quarter mark off per wrong answer; marks discarded.'],
            ['Languages at 25 per cent', 'Marathi and English, 300 each, qualifying.'],
            ['1,750 counted', 'Essay, four general studies and two optional papers of 250.'],
            ['Interview 275', 'About three per post, within the percentile floors.'],
            ['One medium', 'Chosen at the preliminary application for papers 3 to 7.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'MPSC Rajyaseva previous papers — the commission’s question-paper archive and answer keys, and the 2025 descriptive mains as the model for the new pattern.',
      lead: [
        'The commission publishes its question papers and the first and final answer keys under candidate information; the 2025 mains papers are the first on the descriptive pattern.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Combined preliminary 2025 and 2026', note: 'the general studies and CSAT papers with first and final keys, in the commission’s archive.' },
            { text: 'State Services Main 2025', note: 'nine descriptive papers of April and May 2026 — the pattern the 2026 mains follows.' },
            { text: 'Objective mains to 2024', note: 'six papers of 800 marks under the old scheme; useful for content, not format.' },
            { text: 'Specimen answer booklet', note: 'the commission publishes the booklet format for the descriptive papers.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MPSC — previous question papers', href: MPSC.papers },
            { label: 'MPSC — answer keys', href: MPSC.keys },
            { label: 'MPSC — specimen answer booklet', href: 'https://mpsc.gov.in/specimen_answer_booklet/112' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'MPSC Rajyaseva mock tests — two-hour prelims papers scored at a quarter off, and three-hour descriptive sittings of twenty questions at 150 and 250 words.',
      lead: [
        'For the mains that starts on 3 October: three hours, twenty questions, one language, word limits enforced.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'General studies — three hours by hand', text: 'Twenty questions, ten at 150 words and ten at 250, in the medium chosen at application. The commission deducts for over-length answers and ignores sub-questions answered out of order.' },
            { title: 'Essay — two essays in three hours', text: 'One from each section, to the word limit, in one language.' },
            { title: 'The qualifying languages', text: 'Essay, comprehension, précis, usage — 300 marks each, 75 to pass. Not to be neglected by candidates from another medium.' },
            { title: 'Prelims — two hours, twice', text: 'General studies at −0.5 on a two-mark question; CSAT to 33 per cent. The 2026 open cut-off was 98 of 200.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'MPSC Rajyaseva preparation — the three weeks to the 2026 mains, the medium and optional decisions made at the prelims application, and the interview.',
      lead: [
        'The decisions that shape the mains were made at the preliminary application; what remains is execution.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From the mains notification to allotment',
          items: [
            { title: 'Confirm the fee and the preferences', text: 'The 2026 mains fee was payable to 13 September; preferences were locked at application and decide the cadre offered.' },
            { title: 'Write in the medium you opted', text: 'Papers 3 to 7 wholly in Marathi or wholly in English as claimed at the preliminary; the admission card prints it, and answers in another medium score nothing.' },
            { title: 'Plan the nine days', text: 'Languages on 3 and 4 October, essay on 5, general studies on 10, 11, 17 and 18, optionals on 31 October and 1 November — all 11.00 to 2.00.' },
            { title: 'Prepare the interview from the mains result', text: 'The 2025 cycle interviewed 438 candidates within two weeks of the result; originals are checked at the door.' },
            { title: 'Watch the lists', text: 'General merit list, provisional selection list by preference, objections, final merit and recommendation lists — all on the commission’s site.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'MPSC Rajyaseva study material — state board textbooks, the state economic survey, standard general studies texts, and the optional subject at degree level.',
      lead: [
        'The examination is the Union pattern with Maharashtra weighted in every general studies paper; the state’s own textbooks and survey are the difference.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Prelims general studies', 'NCERT and state board textbooks for history, geography, polity, economy and science; a year of current affairs', 'Maharashtra’s history, geography and administration weighted.'],
            ['CSAT', 'A reasoning and numeracy workbook; Marathi and English comprehension practice', 'Qualifying at 33 per cent.'],
            ['Mains general studies 1 to 4', 'The revised syllabus section by section; the state economic survey; standard texts on governance, economy, science and ethics', 'Twenty questions a paper, one language.'],
            ['Essay and languages', 'Essay practice in the chosen medium; Marathi and English grammar and précis', 'Languages at 25 per cent.'],
            ['Optional subject', 'The degree syllabus of the subject, in its fixed medium', 'Two papers of 250; the 2027 cycle is reported to drop them.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'State PSC exams', to: '/government-exams/state/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the MPSC Rajyaseva 2026 mains?',
      a: 'From 3 October to 1 November 2026 — the languages on 3 and 4 October, the essay on 5, general studies on 10, 11, 17 and 18, and the optional papers on 31 October and 1 November, each from 11.00 to 2.00, at Amravati, Chhatrapati Sambhajinagar, Nagpur, Nashik, Navi Mumbai and Pune. Applications under Advt 018/2026 closed on 10 September 2026 with the fee to 13 September.',
    },
    {
      q: 'How many posts are there in MPSC Rajyaseva 2026?',
      a: '238 State Service posts in the mains notification of 25 August 2026, including 8 deputy superintendents of police, 13 deputy chief executive officers and block development officers, 32 assistant directors of finance and accounts and 30 assistant block development officers. The combined preliminary advertisement of 24 December 2025 offered 87 posts, revised on 17 June 2026 to 265 across the State Service, the veterinary service and the civil engineering service.',
    },
    {
      q: 'What is the MPSC Rajyaseva exam pattern?',
      a: 'A combined preliminary of two objective papers of 200 — general studies counted, the aptitude test qualifying at 33 per cent, a quarter mark off per wrong answer — then the State Services Main of nine descriptive papers: Marathi and English of 300 qualifying at 25 per cent, and an essay, four general studies papers and two optional papers of 250 each for 1,750, all three hours. An interview of 275 follows for about three candidates per post, and the merit is 2,025.',
    },
    {
      q: 'Is the MPSC Rajyaseva mains descriptive?',
      a: 'Yes, from the 2025 cycle. Each general studies paper has twenty compulsory questions printed in Marathi and English — ten answered in 150 words and ten in 250 — answered wholly in one language chosen at the preliminary application. The essay paper offers two sections of four topics with one essay from each. The English paper is answered in English. The 2025 mains of April and May 2026 was the first on this pattern; its result of 25 August 2026 qualified 438 candidates.',
    },
    {
      q: 'What is the age limit for MPSC Rajyaseva 2026?',
      a: 'Eighteen or nineteen minimum by cadre, and on 1 April 2026: 38 for the unreserved, 43 for backward classes, EWS, orphans, sportspersons and ex-servicemen, and 45 for PwD candidates, per the mains notification. The industries officer (technical) cadre reckons age on 20 January 2026. No limit on attempts is stated.',
    },
    {
      q: 'What is the MPSC Rajyaseva fee?',
      a: '₹544 for unreserved candidates and ₹344 for backward classes, EWS, orphans and PwD at the 2026 mains, online only and not refundable. The commission’s 2026 combined preliminary advertisements for its other examinations charge ₹394 and ₹294.',
    },
    {
      q: 'Is there negative marking in MPSC Rajyaseva prelims?',
      a: 'Yes. A quarter of the marks assigned to a question is deducted for each wrong answer in both preliminary papers, and a question with more than one answer marked is treated as wrong. The descriptive mains has no negative marking, though marks are deducted for answers longer or shorter than the word limit.',
    },
    {
      q: 'What was the MPSC Rajyaseva cut-off?',
      a: 'For the 2026 combined preliminary, 98 of 200 on the general studies paper for the unreserved category. For the 2025 mains, on the 1,750 counted, 942 for unreserved general candidates and 959 for unreserved women, with 438 candidates called to the interviews of 7 to 12 September 2026.',
    },
  ],
}

/* ── MPSC Group B non-gazetted combined ─────────────────────────
   Police Sub-Inspector, State Tax Inspector and Assistant Section Officer
   through one preliminary and one mains under the Maharashtra Group B
   (Non-Gazetted) Services Combined Examination. Only the PSI has a physical
   test and an interview. The 2026 preliminary of 14 June has 9,253 through
   to a mains not yet dated; the 2025 cycle's PSI physical-test list came out
   on 7 September 2026. Figures are from the commission's advertisements. */
const MH_GB = {
  slug: 'mpsc-group-b',
  path: '/government-exams/state/maharashtra/mpsc-group-b/',
  name: 'MPSC Group B',
  fullName: 'Maharashtra Group B (Non-Gazetted) Services Combined Examination — PSI, STI and ASO',
  authority: 'Maharashtra Public Service Commission (MPSC)',
  official: OFFICIAL,
  seoTitle: 'MPSC Group B 2026: PSI, STI, ASO — Prelims Result, Mains, Physical Test',
  metaDescription:
    'MPSC Group B 2026 — 552 PSI, STI and ASO posts, 9,253 through the prelims, the 100-mark prelims and 400-mark mains, PSI physical test and interview, cut-offs.',
  lead: [
    'The Group B non-gazetted combined examination is the commission’s route to three of the state’s most sought posts — police sub-inspector, state tax inspector and assistant section officer in the secretariat — and, in some cycles, sub-registrar and stamp inspector. One objective preliminary of 100 marks screens; one objective mains of 400 marks ranks; and only the sub-inspector goes further, to a physical test that qualifies and an interview of 40 marks.',
    'Two cycles are running. The 2026 preliminary of 14 June, advertised on 9 April for 552 posts, sent 9,253 candidates through on 1 July at an open cut-off of 53.25; its mains is not yet dated. The 2025 cycle’s mains of 17 May 2026 for 758 posts has produced its state tax inspector and assistant section officer lists and, on 7 September 2026, the list of 1,624 sub-inspector candidates called to the physical test.',
  ],
  quickFacts: [
    ['Conducted by', 'Maharashtra Public Service Commission'],
    ['2026 cycle', 'Advt 011/2026 — 552 posts: PSI 310, STI 236, ASO 6; prelims 14 June; 9,253 qualified on 1 July'],
    ['Status', 'No window open; 2026 mains not yet notified; 2025 PSI physical tests pending'],
    ['Prelims', 'One paper, 100 questions, 100 marks, one hour; a quarter off per wrong answer; screening only'],
    ['Mains', 'Paper 1 Marathi and English 200; Paper 2 general studies and aptitude 200; one hour each'],
    ['PSI only', 'Physical test 100, qualifying at 60 per cent; interview 40; men 165 cm and 79 cm chest, women 157 cm'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2026 advertisement of 9 April sets the shape. Of its 552 posts, 310 are police sub-inspectors — 201 general, 93 women, 16 sportspersons, with the reserved categories taking 252 and PwD candidates ineligible — 236 state tax inspectors and 6 assistant section officers, at ₹38,600 to ₹1,22,800 for the inspectors and ₹44,900 to ₹1,42,400 for the section officer. Applications ran from 10 to 30 April, the preliminary was held on 14 June at 37 district centres, and the result of 1 July listed 9,253 candidates for the mains in one combined list.',
    },
    {
      type: 'p',
      text: 'The mains is common to all three posts. Paper 1 is Marathi at twelfth-standard level and English at degree level, fifty questions each for 200 marks in one hour; Paper 2 is general studies and the intelligence test, 100 questions for 200 marks in one hour, at degree standard in both languages. For the tax inspector and the section officer that is the whole examination — the notification says written only — and the merit is the 400. For the sub-inspector the mains is followed by measurement and a physical test of 100 marks, qualifying at 60 per cent and not counted, and an interview of 40; the final merit is mains plus interview.',
    },
    {
      type: 'list',
      title: 'What the advertisements settle',
      items: [
        { text: 'The preliminary does not count', note: 'the scheme states its marks are not considered at final selection; the mains cut-off is drawn at about twelve candidates per post in two stages, and there is no re-evaluation.' },
        { text: 'Percentile floors', note: 'the commission’s minimum-percentile rule — 35th for unreserved, 30th for backward classes and orphans, 20th for PwD and sportspersons — applies to the written marks.' },
        { text: 'The physical test threshold fell', note: 'from 70 per cent in the January 2023 scheme to 60 per cent in the 2025 and 2026 advertisements; about four candidates per post are called to it.' },
        { text: 'Preferences and opting out', note: 'candidates state post preferences and have a seven-day window to opt out before the provisional list; the commission’s opting-out procedure changed in 2025.' },
      ],
    },
    {
      type: 'note',
      title: 'Not the gazetted preliminary, and not the Group C one',
      text: 'The commission runs three combined preliminaries: the gazetted one that feeds the State Services Main, this Group B non-gazetted one, and the Group C one for clerk-typists, tax assistants and the like. A January 2023 scheme had merged Group B and Group C into one preliminary; they were separated again from 2024, and each now has its own advertisement, date and result.',
    },
  ],
  stages: [
    {
      name: 'Combined preliminary examination',
      mode: 'Objective, 100 marks, one hour',
      detail:
        'One paper of 100 questions at degree standard in Marathi and English, on OMR. A quarter of the question’s marks off per wrong answer, more than one answer treated as wrong, no penalty for a blank. Screening only; the 2026 open cut-off was 53.25.',
    },
    {
      name: 'Combined main examination',
      mode: 'Objective, two papers of 200, one day',
      detail:
        'Paper 1: Marathi 50 questions and English 50 questions, 200 marks, one hour. Paper 2: general studies and intelligence test, 100 questions, 200 marks, one hour. The same negative marking. Common to all posts; the merit for STI and ASO.',
    },
    {
      name: 'PSI — physical test',
      mode: '100 marks, qualifying at 60 per cent',
      detail:
        'Measurement — 165 cm and a 79 cm chest with 5 cm expansion for men, 157 cm for women — then the events. The 2023 scheme’s events: shot put, pull-ups, long jump and 800 metres for men; shot put, long jump and 400 metres for women. About four per post called; marks not counted.',
    },
    {
      name: 'PSI — interview, then merit',
      mode: '40 marks; merit is mains plus interview',
      detail:
        'STI and ASO are selected on the mains alone. Provisional and final lists follow preferences and reservation; the 2024 cycle’s final STI list of January 2026 withheld three posts under High Court orders.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No window is open. The 2026 preliminary — Advt 011/2026 of 9 April, applications 10 to 30 April with the fee to 4 May, examined 14 June — published its result on 1 July 2026 with 9,253 candidates qualified; the mains notification for the 2026 cycle had not been issued, and a December date circulating for it is unconfirmed. The 2025 cycle — prelims Advt 117/2025 of 29 July 2025, examined 4 January 2026 after a postponement for elections, result 23 March 2026; mains Advt 010/2026 of 7 April for 758 posts, examined 17 May 2026 — has published its state tax inspector list, revised on the commission’s home page in September, and on 7 September 2026 the list of 1,624 sub-inspector candidates qualified for the physical test.`,
    },
    {
      type: 'table',
      caption: 'The two running cycles, from the advertisements and results.',
      head: ['Cycle', 'Posts', 'Prelims', 'Mains', 'Position at 11 September 2026'],
      rows: [
        ['2026 — Advt 011/2026, 9 April 2026', '552: PSI 310, STI 236, ASO 6', '14 June 2026; result 1 July, 9,253 qualified', 'Not yet notified', 'Awaiting the mains notification'],
        ['2025 — Advt 117/2025 prelims, Advt 010/2026 mains', '758: PSI 392, STI 279, ASO 3, Sub-Registrar and Stamp Inspector 84', '4 January 2026; result 23 March', '17 May 2026', 'STI and ASO lists out; 1,624 PSI candidates to physical test, 7 September'],
        ['2024 — Advt 106/2025', '480: PSI 216, STI 209, ASO 55', '2 February 2025', '2025', 'Final result 9 January 2026; three STI posts withheld under High Court orders'],
      ],
    },
    {
      type: 'table',
      caption: 'Cut-offs, from the commission’s result documents.',
      head: ['Examination', 'Unreserved general', 'Unreserved women', 'SC', 'ST', 'OBC', 'EWS'],
      rows: [
        ['Prelims 2026, of 100', '53.25', '50.25', '53.25', '43.75', '53.25', '47.50'],
        ['PSI mains 2025, of 400 — to physical test', '278.00', '257.50', '241.00', '198.50', '263.50', '240.00'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'MPSC — final recommendation lists', href: MPSC.finalLists },
        { label: 'MPSC online — application portal', href: MPSC.online },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From Advt 011/2026, clause 6. Age on 1 August 2026.',
      head: ['Requirement', 'ASO and STI', 'PSI'],
      rows: [
        ['Qualification', 'A degree of a statutory university; final-year candidates may sit the preliminary and must pass by the mains application deadline', 'As ASO and STI'],
        ['Age', '18 to 38 unreserved; 43 for backward classes, orphans, EWS, sportspersons and ex-servicemen; 45 PwD', '19 to 31 unreserved; 34 for backward classes, orphans and EWS; 36 for sportspersons and ex-servicemen; PwD not eligible'],
        ['Physical standards', '—', 'Men and male transgender candidates 165 cm barefoot and 79 cm chest unexpanded with 5 cm expansion; women and female transgender candidates 157 cm, no chest requirement'],
        ['Marathi', 'Knowledge of Marathi required', 'As ASO and STI'],
        ['Pay', 'ASO S-16, ₹44,900 to ₹1,42,400; STI S-14, ₹38,600 to ₹1,22,800', 'S-14, ₹38,600 to ₹1,22,800'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, online; not refundable.',
      head: ['Stage', 'Unreserved', 'Backward classes, EWS, orphans, PwD', 'Ex-servicemen'],
      rows: [
        ['Preliminary', '₹394', '₹294', '₹394 or ₹294 by category'],
        ['Mains', '₹544', '₹344', 'As preliminary'],
      ],
    },
    {
      type: 'p',
      text: 'The advertisement states that the age limit is not relaxed in any other case, applies the SEBC reservation of the 2024 Act subject to the Bombay High Court’s final decision, and brings the examination under the Maharashtra Competitive Examinations (Prevention of Unfair Means) Act of 2024. Certificates for the reserved categories are uploaded with the application under the commission’s standing procedures.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The scheme, from the 2026 advertisement and the commission’s scheme documents.',
      head: ['Stage', 'Paper', 'Questions', 'Marks', 'Time', 'Standard'],
      rows: [
        ['Preliminary', 'General ability test', '100', '100', '1 hour', 'Degree; Marathi and English'],
        ['Mains', 'Paper 1 — Marathi 50 and English 50', '100', '200', '1 hour', 'Marathi at twelfth standard; English at degree'],
        ['Mains', 'Paper 2 — general studies and intelligence test', '100', '200', '1 hour', 'Degree; Marathi and English'],
        ['PSI', 'Physical test', '—', '100', '—', 'Qualifying at 60 per cent; not counted'],
        ['PSI', 'Interview', '—', '40', '—', 'Added to the 400'],
      ],
    },
    {
      type: 'note',
      title: 'Negative marking, as the scheme states it',
      text: 'For each wrong answer, 25 per cent or one-fourth of the question’s marks is deducted; a question given more than one answer is treated as wrong and penalised the same; the total is left in fractions; and a question left unanswered attracts no penalty. The same clause governs the preliminary and both mains papers.',
    },
    {
      type: 'list',
      title: 'What the scheme settles',
      items: [
        { text: 'Paper 2 is the same for every post', note: 'there is no post-specific paper; the general studies syllabus covers current affairs, arithmetic and statistics, the Right to Information and Right to Public Services Acts, polity and local government, modern India with Maharashtra, geography and environment, science and technology, and the economy.' },
        { text: 'The mains cut-off is about twelve per post', note: 'drawn in two stages from the preliminary; the mains itself is ranked in full.' },
        { text: 'The PSI physical test is a gate', note: '60 per cent to be called to interview, about four per post called, marks not added.' },
        { text: 'No interview for STI and ASO', note: 'the notification describes them as written examination only.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against Advt 011/2026 of 9 April 2026 and its corrigendum of 30 April, the preliminary result of 1 July 2026, Advt 010/2026 of 7 April 2026 for the 2025 mains, the sub-inspector mains result of 7 September 2026, and the commission’s combined-examination scheme documents of December 2022 and January 2023. The advertisement says the governing scheme was republished on 9 October 2024; that document was not read, and the physical-test events are as the 2023 scheme lists them. The 2024 cycle’s figures are from press accounts of the commission’s lists.`,
    },
    {
      type: 'links',
      title: 'Official pages',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'MPSC — merit lists', href: MPSC.meritLists },
        { label: 'MPSC — final recommendation lists', href: MPSC.finalLists },
        { label: 'MPSC — general instructions', href: MPSC.instructions },
        { label: 'MPSC online', href: MPSC.online },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'MPSC Group B syllabus — the general ability prelims, mains Paper 1 Marathi and English, and Paper 2 general studies with the RTI and public services Acts.',
      lead: [
        'The commission publishes the scheme and syllabus for the combined examination under candidate information; the mains Paper 2 headings are specific.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Preliminary — general ability, 100',
              'Current affairs, history and geography of Maharashtra and India, polity, economy, general science, and mental ability and arithmetic, at degree standard.',
            ],
            [
              'Mains Paper 1 — Marathi, 100',
              'Grammar, vocabulary, comprehension and usage at twelfth standard.',
            ],
            [
              'Mains Paper 1 — English, 100',
              'Grammar, vocabulary, comprehension and usage at degree standard.',
            ],
            [
              'Mains Paper 2 — general studies and intelligence, 200',
              'Intelligence and comprehension; current affairs; arithmetic and statistics; the Right to Information Act 2005 and the Maharashtra Right to Public Services Act 2015; polity, Constitution and local government; modern India with Maharashtra, 1885 to 1947; geography of India and Maharashtra with environment; science and technology including GIS and ICT; economy and planning.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus pages',
          items: [
            { label: 'MPSC — candidate information', href: MPSC.home },
            { label: 'MPSC — general instructions', href: MPSC.instructions },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'MPSC Group B exam pattern — 100-mark prelims screen, 400-mark mains, a quarter off per wrong answer, PSI physical test at 60 per cent and 40-mark interview.',
      lead: [
        'One hundred marks to get in, four hundred to rank, and for the sub-inspector a gate and an interview.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims 100, one hour', 'Screening at about twelve per post; not counted.'],
            ['Mains 400, two hours in all', 'Marathi and English 200; general studies 200.'],
            ['Negative marking', 'One-fourth per wrong answer; multiple answers wrong; blanks free.'],
            ['PSI physical test', '100 marks, 60 per cent to qualify, not counted; about four per post.'],
            ['PSI interview', '40 marks added to the mains; none for STI and ASO.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'MPSC Group B previous papers — the commission’s archive of combined prelims and mains papers with first and final keys.',
      lead: [
        'The commission publishes the question papers and keys of each combined examination; the 2025 and 2026 papers are the current scheme.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Combined preliminary 2025 and 2026', note: 'the 100-question papers of 4 January and 14 June 2026 with keys.' },
            { text: 'Combined mains 2025', note: 'Paper 1 and Paper 2 of 17 May 2026 — the first mains under the scheme republished in October 2024.' },
            { text: 'Earlier cycles', note: 'the 2024 papers on the same two-paper mains; older post-specific papers under the pre-2023 scheme.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MPSC — previous question papers', href: MPSC.papers },
            { label: 'MPSC — answer keys', href: MPSC.keys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'MPSC Group B mock tests — one-hour 100-question sittings scored at a quarter off, and the physical-test events for sub-inspector candidates.',
      lead: [
        'Every paper is one hour; score at −0.25 a question on the prelims and −0.5 on a two-mark mains question.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Prelims — 100 questions in an hour', text: 'From the 2025 and 2026 papers. The 2026 open cut-off was 53.25; a blank costs nothing.' },
            { title: 'Mains Paper 1 — 100 questions in an hour', text: 'Fifty of Marathi at twelfth standard and fifty of English at degree standard, 200 marks.' },
            { title: 'Mains Paper 2 — 100 questions in an hour', text: 'General studies and reasoning at 200 marks; the RTI and public services Acts are set every year.' },
            { title: 'PSI — the events', text: '800 metres, shot put, pull-ups and long jump for men; 400 metres, shot put and long jump for women; 60 of 100 to be called to interview.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'MPSC Group B preparation — following two overlapping cycles, the mains for 9,253 candidates, and the PSI physical test and interview.',
      lead: [
        'Nine thousand candidates are waiting for a mains date; the preparation window is now.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From the prelims result to the list',
          items: [
            { title: 'Watch the advertisements page for the 2026 mains notification', text: 'It will carry its own application window and fee; the 2025 mains was notified on 7 April for an examination on 17 May.' },
            { title: 'Treat the mains as two one-hour sprints', text: 'Two hundred marks each; the language paper is half the examination and the cheapest marks for a strong reader.' },
            { title: 'PSI candidates — measure first', text: '165 cm and a 79 cm chest with 5 cm expansion, or 157 cm; then train the events to well over 60 per cent.' },
            { title: 'State the preferences carefully', text: 'PSI, STI and ASO differ in age limits and stages; the preference order decides the post.' },
            { title: 'Follow the lists by post', text: 'Recommendation lists come out post by post over months, and posts can be withheld under court orders.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'MPSC Group B study material — state board textbooks, the RTI and public services Acts, grammar readers for Marathi and English, and a reasoning workbook.',
      lead: [
        'The mains Paper 2 headings name the Acts and the periods; read those, and the state board textbooks for the rest.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Prelims and mains general studies', 'State board textbooks for history, geography, polity and economy; a year of current affairs; a general science reader', 'Maharashtra weighted; modern India 1885 to 1947.'],
            ['The two Acts', 'The Right to Information Act 2005 and the Maharashtra Right to Public Services Act 2015, section by section', 'Named in the syllabus.'],
            ['Arithmetic, statistics and reasoning', 'A quantitative and reasoning workbook', 'Part of Paper 2 and the prelims.'],
            ['Marathi and English', 'Twelfth-standard Marathi grammar; degree-level English grammar and comprehension', 'Paper 1, 200 marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Maharashtra Police — constable and sub-inspector', to: '/government-exams/state/maharashtra/maharashtra-police/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'What is the MPSC Group B 2026 status?',
      a: 'The combined preliminary under Advt 011/2026 — 552 posts: 310 sub-inspectors, 236 state tax inspectors and 6 assistant section officers — was held on 14 June 2026 and its result of 1 July qualified 9,253 candidates at an open cut-off of 53.25. The mains notification has not been issued as at 11 September 2026. No application window is open.',
    },
    {
      q: 'What is the MPSC Group B exam pattern?',
      a: 'A combined preliminary of one paper — 100 questions, 100 marks, one hour — that screens and does not count; then a combined mains of two one-hour papers: Marathi 50 questions and English 50 for 200, and general studies and intelligence 100 questions for 200. A quarter of the marks is deducted per wrong answer throughout. Sub-inspectors then face a physical test of 100 marks qualifying at 60 per cent and an interview of 40; tax inspectors and section officers are selected on the mains alone.',
    },
    {
      q: 'Is there an interview for MPSC STI and ASO?',
      a: 'No. The mains notification describes the state tax inspector and assistant section officer as written examination only, selected on the 400-mark mains. The police sub-inspector has an interview of 40 marks after the physical test, added to the mains for the final merit.',
    },
    {
      q: 'What are the physical standards for MPSC PSI?',
      a: 'Men and male transgender candidates: 165 cm barefoot and a 79 cm chest unexpanded with at least 5 cm expansion. Women and female transgender candidates: 157 cm, with no chest requirement. The physical test that follows is 100 marks, qualifying at 60 per cent, with about four candidates per post called; its marks are not counted.',
    },
    {
      q: 'What is the age limit for MPSC Group B 2026?',
      a: 'On 1 August 2026: for STI and ASO, 18 to 38 unreserved, 43 for backward classes, orphans, EWS, sportspersons and ex-servicemen, and 45 for PwD; for PSI, 19 to 31 unreserved, 34 for backward classes, orphans and EWS, 36 for sportspersons and ex-servicemen, with PwD candidates not eligible. The advertisement says the limit is relaxed in no other case.',
    },
    {
      q: 'What is the fee for MPSC Group B?',
      a: '₹394 for unreserved candidates and ₹294 for backward classes, EWS, orphans and PwD at the preliminary; ₹544 and ₹344 at the mains. Online only, not refundable.',
    },
    {
      q: 'What was the MPSC Group B cut-off?',
      a: 'For the 2026 preliminary, of 100: 53.25 unreserved general, 50.25 unreserved women, 53.25 SC, 43.75 ST, 53.25 OBC, 47.50 EWS. For the 2025 sub-inspector mains, of 400, to be called to the physical test: 278 unreserved general, 257.50 unreserved women, 241 SC, 198.50 ST, 263.50 OBC, 240 EWS — 1,624 candidates in all.',
    },
    {
      q: 'Is there negative marking in MPSC Group B?',
      a: 'Yes. The scheme deducts 25 per cent, or one-fourth, of a question’s marks for each wrong answer in the preliminary and both mains papers; a question with more than one answer is treated as wrong; fractions are retained; and a question left unanswered carries no penalty.',
    },
  ],
}

/* ── MPSC Group C combined ──────────────────────────────────────
   Clerk-typist, tax assistant, industry inspector, technical assistant and
   assistant motor vehicle inspector through one preliminary and a 400-mark
   mains — and, from July 2026, the village revenue officer (Talathi) and
   other cadres added by corrigendum to a 5,707-post round. The preliminary
   has been postponed twice to 3 January 2027. Figures are from the
   commission's advertisements, corrigenda and press notes. */
const MH_GC = {
  slug: 'mpsc-group-c',
  path: '/government-exams/state/maharashtra/mpsc-group-c/',
  name: 'MPSC Group C',
  fullName: 'Maharashtra Group C Services Combined Examination — clerk-typist, tax assistant, AMVI, industry inspector, technical assistant and added cadres',
  authority: 'Maharashtra Public Service Commission (MPSC)',
  official: OFFICIAL,
  seoTitle: 'MPSC Group C 2026: 5,707 Posts, Prelims 3 Jan 2027, Pattern, Typing Rule',
  metaDescription:
    'MPSC Group C 2026 — 5,707 posts including 1,539 Talathi, prelims 3 January 2027, the 100-mark prelims and 400-mark mains, typing certificates, age and fees.',
  lead: [
    'The Group C combined examination is the commission’s largest recruitment by numbers — the clerk-typists of every department, the tax assistants of the goods and services tax department, the industry inspectors, the technical assistants of the insurance directorate, and, since 2024, the assistant motor vehicle inspectors with their own mains. One objective preliminary of 100 marks screens; a combined mains of two papers and 400 marks ranks; there is no typing test and no interview, and the typing certificate is a qualification held at the mains application.',
    'The 2026 round has grown and slipped. Advertised on 25 June 2026 for 2,619 posts, it was enlarged on 22 July by 3,088 posts under a government resolution — 1,539 village revenue officers, the post Maharashtra knows as Talathi, 254 assistant fisheries development officers and a further 1,273 clerk-typists among them — to 5,707, with applications to 5 August. The preliminary, first set for 27 September as a computer-based test, became an OMR examination on 25 October and, by the press note of 9 September, moved again to 3 January 2027.',
  ],
  quickFacts: [
    ['Conducted by', 'Maharashtra Public Service Commission'],
    ['2026 round', 'Advt 017/2026, 25 June 2026 — 5,707 posts after the corrigendum of 22 July; applications closed 5 August'],
    ['Preliminary', '3 January 2027, offline OMR, by press note of 9 September 2026; the mains date is to be re-announced'],
    ['Prelims', 'One paper, 100 questions, 100 marks, one hour; a quarter off per wrong answer; screening only'],
    ['Mains', 'Paper 1 Marathi and English 200; Paper 2 general studies and aptitude 200; AMVI a separate 300-mark paper'],
    ['Fees', 'Prelims ₹394, ₹294 for reserved categories, ₹44 for ex-servicemen; mains ₹544, ₹344, ₹44'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The advertisement of 25 June listed 1,864 clerk-typists, 461 assistant motor vehicle inspectors, 282 tax assistants, 9 industry inspectors and 3 technical assistants. The corrigendum of 22 July, giving effect to a general administration department resolution of 5 May 2026, added 1,539 village revenue officers for the revenue department, 254 assistant fisheries development officers, 11 senior record-keepers and 11 assistant superintendents for the consumer commission, and clerk-typists for rationing, food and civil supplies, tribal development, revenue and forest, and registration and stamps — 3,088 more posts, a fortnight’s extension to 5 August, and the fee to 8 August. A further corrigendum of 5 August dealt with the village revenue officer posts in scheduled areas and the children of disabled and deceased ex-servicemen.',
    },
    {
      type: 'p',
      text: 'The scheme is two-tier. The preliminary is one paper of general ability, 100 questions and 100 marks in an hour at degree standard in both languages, with a quarter of the marks off per wrong answer, and it only shortlists. The combined mains for the clerical and inspectorate posts is Paper 1, Marathi and English at fifty questions each for 200 marks, and Paper 2, general studies and aptitude at 100 questions for 200 marks, one hour each. The assistant motor vehicle inspector sits the same preliminary and then a single mains paper of 150 questions and 300 marks on mechanical and automobile engineering, in English, at diploma standard.',
    },
    {
      type: 'list',
      title: 'What the advertisement settles',
      items: [
        { text: 'The typing certificate is a qualification, not a test', note: 'a tax assistant needs Marathi at 30 words a minute and English at 40; a clerk-typist Marathi at 30 or English at 40; an MS-CIT-type certificate under the 2013 resolution is accepted; and the certificate must be held by the mains application closing date, with a two-year post-appointment window for PwD, ex-servicemen and orphans.' },
        { text: 'No interview', note: 'clause 8.1 lists the stages as preliminary and mains only; the recommendation follows the mains merit and certificate verification.' },
        { text: 'Age reckoned on 1 October 2026', note: 'except the village revenue officer, reckoned on 5 August 2026; 19 minimum, 18 for tax assistant; 38 unreserved, 43 for backward classes, orphans, EWS and sportspersons, 45 PwD, with 45 for project-affected and 55 for part-time graduates in the clerk-typist cadre.' },
        { text: 'The computer-based test is deferred', note: 'the corrigendum of 16 July put off computer-based testing to the end of July 2027 and withdrew the challan; the preliminary is on OMR at 37 centres.' },
      ],
    },
    {
      type: 'note',
      title: 'Talathi is on this page because it is in this examination',
      text: 'The 2023 Talathi recruitment was run by the revenue department through an outsourced online test with normalisation. The 1,539 village revenue officer posts of 2026 were added to the commission’s Group C combined examination by the corrigendum of 22 July, and are examined on its preliminary and mains. The Talathi page covers the post, its district structure and the 2023 cycle; the examination is this one.',
    },
  ],
  stages: [
    {
      name: 'Combined preliminary examination',
      mode: 'Objective, 100 marks, one hour, OMR',
      detail:
        'One paper of general ability at degree standard in Marathi and English. A quarter of the question’s marks off per wrong answer, more than one answer treated as wrong, no penalty for a blank. Screening only; the 2025 round’s open cut-off was 50.25 with 31,236 through.',
    },
    {
      name: 'Combined main examination',
      mode: 'Objective, two papers of 200',
      detail:
        'Paper 1: Marathi 50 questions and English 50 questions, 200 marks, one hour. Paper 2: general studies and aptitude, 100 questions, 200 marks, one hour. Common to the clerk-typist, tax assistant, industry inspector and technical assistant cadres; the mains for the added cadres per the July corrigendum.',
    },
    {
      name: 'AMVI main examination',
      mode: 'One paper, 300 marks, 90 minutes',
      detail:
        'Mechanical and automobile engineering at diploma standard, 150 questions in English, with the same negative marking; followed by verification of the physical standards — 163 cm and a 79 cm chest with 5 cm expansion for men, 155 cm and 45 kg for women.',
    },
    {
      name: 'Merit and recommendation',
      mode: 'Mains marks; certificate verification; no interview',
      detail:
        'General merit lists and appointing-authority preferences for the clerk-typist cadre, recommendation lists by cadre, and the typing certificate checked at verification. The 2025 round’s industry inspector and technical assistant lists came out on 25 August 2026 and the clerk-typist general merit list in September.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No window is open. Applications for the 2026 round closed on 5 August 2026 with the fee to 8 August. The preliminary has been postponed twice: the corrigendum of 16 July 2026 replaced the computer-based test of 27 September with an OMR examination on 25 October and set the mains for 27 December, and the press note of 9 September 2026 moved the preliminary to 3 January 2027, citing sub-centre availability in the districts, the State Services Main of October, the festival season, other agencies’ timetables and the winter session; the mains date is to be re-announced. The 2025 round — Advt 124/2025, preliminary 11 January 2026, result 4 May with 31,236 qualified, mains Advt 014/2026 on 12 July 2026 — published its industry inspector recommendation list and technical assistant merit list on 25 August 2026 and the clerk-typist general merit list, with appointing-authority preferences, in September.`,
    },
    {
      type: 'table',
      caption: 'The 2026 round, from the advertisement, corrigenda and press note.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 017/2026', '25 June 2026', '2,619 posts; applications 27 June to 17 July; prelims from 27 September as a computer-based test'],
        ['Corrigendum', '16 July 2026', 'Computer-based test deferred to July 2027; prelims by OMR on 25 October; mains 27 December; applications to 31 July'],
        ['Corrigendum', '22 July 2026', '3,088 posts added — 5,707 in all; applications to 5 August; fee to 8 August'],
        ['Announcement', '1 August 2026', 'Examination pattern; final-year candidates admitted for the fisheries officer cadre'],
        ['Corrigendum', '5 August 2026', 'Village revenue officer posts in scheduled areas; children of disabled and deceased ex-servicemen; extension'],
        ['Press note', '9 September 2026', 'Preliminary moved to 3 January 2027; centres and admission cards to follow'],
      ],
    },
    {
      type: 'table',
      caption: 'Posts in the 2026 round, as advertised and as added.',
      head: ['Cadre', 'Posts'],
      rows: [
        ['Clerk-typist — 25 June', '1,864'],
        ['Assistant motor vehicle inspector', '461'],
        ['Tax assistant', '282'],
        ['Industry inspector', '9'],
        ['Technical assistant', '3'],
        ['Village revenue officer (Talathi) — added 22 July', '1,539'],
        ['Clerk-typist — added 22 July: revenue and forest 480, registration and stamps 339, rationing 230, food and civil supplies 155, tribal development 69', '1,273'],
        ['Assistant fisheries development officer (technical)', '254'],
        ['Consumer commission — senior record-keeper 11, assistant superintendent 11', '22'],
        ['All posts', '5,707'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'MPSC — merit lists', href: MPSC.meritLists },
        { label: 'MPSC online — application portal', href: MPSC.online },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From Advt 017/2026, clause 6. Age on 1 October 2026; village revenue officer on 5 August 2026.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'A degree for every cadre but the assistant motor vehicle inspector, who needs SSC and a three-year diploma or a degree in automobile or mechanical engineering, a year’s experience, driving licences and no colour blindness. Industry inspector: an engineering degree or a diploma in technology, or a science degree.'],
        ['Age', '19 minimum, 18 for tax assistant. 38 unreserved; 43 for backward classes, orphans, EWS and sportspersons; ex-servicemen 38 or 43 plus service plus three years; 45 PwD, not for AMVI; 45 for project- and earthquake-affected and 55 for part-time graduates, clerk-typist only.'],
        ['Typing — tax assistant', 'Government commercial certificates in Marathi at 30 words a minute and English at 40, both.'],
        ['Typing — clerk-typist', 'Marathi at 30 or English at 40, either; an MS-CIT-type certificate under the resolution of 31 October 2013 accepted.'],
        ['When held', 'By the closing date of the mains application; PwD, ex-servicemen and orphans have two years after appointment.'],
        ['AMVI physical', 'Men 163 cm and 79 cm chest with 5 cm expansion; women 155 cm and 45 kg.'],
        ['Marathi', 'Knowledge of Marathi required.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, online; not refundable.',
      head: ['Stage', 'Unreserved', 'Backward classes, EWS, orphans', 'Ex-servicemen'],
      rows: [
        ['Preliminary', '₹394', '₹294', '₹44'],
        ['Mains', '₹544', '₹344', '₹44'],
      ],
    },
    {
      type: 'p',
      text: 'Tax assistant reservation in the 25 June advertisement: 180 reserved and 102 unreserved of 282 — SC 29, ST 20, VJ-A 9, NT-B 7, NT-C 7, NT-D 6, SEBC 42, SBC 4, OBC 28, EWS 28. Assistant motor vehicle inspector: 295 reserved and 166 unreserved of 461. The clerk-typist posts are split office by office across the advertisement’s later pages. The SEBC reservation is applied subject to the Bombay High Court’s final decision, and the examination is under the 2024 unfair-means Act.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The scheme, from the advertisement and the commission’s scheme documents of December 2022 and October 2024.',
      head: ['Stage', 'Paper', 'Questions', 'Marks', 'Time', 'Standard'],
      rows: [
        ['Preliminary', 'General ability test', '100', '100', '1 hour', 'Degree; Marathi and English'],
        ['Combined mains', 'Paper 1 — Marathi 50 and English 50', '100', '200', '1 hour', 'Marathi at twelfth standard; English at degree'],
        ['Combined mains', 'Paper 2 — general studies and aptitude', '100', '200', '1 hour', 'Degree; Marathi and English'],
        ['AMVI mains', 'Mechanical and automobile engineering', '150', '300', '1½ hours', 'Diploma; English'],
      ],
    },
    {
      type: 'note',
      title: 'Negative marking, as the scheme states it',
      text: 'For each wrong answer, 25 per cent or one-fourth of the question’s marks is deducted; a question given more than one answer is treated as wrong and penalised the same; the total is left in fractions; and a question left unanswered attracts no penalty. The clause is identical in the preliminary and mains schemes and in the assistant motor vehicle inspector paper.',
    },
    {
      type: 'list',
      title: 'What the scheme settles',
      items: [
        { text: 'No skill test and no interview', note: 'the typing certificate qualifies; the commission conducts no typing test for these cadres and awards no marks for it.' },
        { text: 'The mains cut-off is published, not fixed', note: 'category cut-offs appear with the result; the 2025 preliminary’s open cut-off was 50.25 and its mains industry inspector cut-off 310 of 400.' },
        { text: 'The percentile floors apply', note: '35th for unreserved, 30th for backward classes and orphans, 20th for PwD and sportspersons, on the written marks.' },
        { text: 'One clerk-typist post withheld', note: 'the 2024 round’s final clerk-typist list of 8 June 2026 recommended 975 and withheld one EWS sportsperson post for a judicial matter.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against Advt 017/2026 of 25 June 2026, its corrigenda of 16 and 22 July and 5 August, the pattern announcement of 1 August, and the press note of 9 September 2026 read on the commission’s site; the 2025 round’s advertisement, final key of 5 March, result of 4 May and recommendation lists of 25 August 2026; and the commission’s scheme documents of 5 December 2022 and 9 October 2024. The 2025 mains notification Advt 014/2026 was not read in full, and its post totals are as reported.`,
    },
    {
      type: 'links',
      title: 'Official pages',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'MPSC — merit lists', href: MPSC.meritLists },
        { label: 'MPSC — final recommendation lists', href: MPSC.finalLists },
        { label: 'MPSC — general instructions', href: MPSC.instructions },
        { label: 'MPSC online', href: MPSC.online },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'MPSC Group C syllabus — the 100-mark general ability prelims, mains Marathi, English and general studies papers, and the AMVI engineering paper.',
      lead: [
        'The commission publishes the Group C scheme and syllabus under candidate information; the mains general studies headings match the Group B paper.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Preliminary — general ability, 100',
              'Current affairs, history and geography of Maharashtra and India, polity, economy, general science, arithmetic and reasoning, at degree standard.',
            ],
            [
              'Mains Paper 1 — Marathi and English, 200',
              'Grammar, vocabulary, comprehension and usage — Marathi at twelfth standard, English at degree.',
            ],
            [
              'Mains Paper 2 — general studies and aptitude, 200',
              'Current affairs, arithmetic and statistics, the Right to Information and Maharashtra Right to Public Services Acts, polity and local government, modern India with Maharashtra, geography and environment, science and technology, economy and planning, and reasoning.',
            ],
            [
              'AMVI mains — 300',
              'Mechanical and automobile engineering at diploma standard, in English.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus pages',
          items: [
            { label: 'MPSC — candidate information', href: MPSC.home },
            { label: 'MPSC — general instructions', href: MPSC.instructions },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'MPSC Group C exam pattern — 100-mark prelims screen, 400-mark combined mains, AMVI 300-mark paper, a quarter off per wrong answer, no typing test or interview.',
      lead: [
        'One hundred to get in, four hundred to rank, and a certificate instead of a typing test.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims 100, one hour', 'Screening; not counted.'],
            ['Mains 400', 'Marathi and English 200; general studies 200; one hour each.'],
            ['AMVI 300', 'One engineering paper of 150 questions in 90 minutes.'],
            ['Negative marking', 'One-fourth per wrong answer; multiple answers wrong; blanks free.'],
            ['Typing', 'Certificate held by the mains application; no test, no marks.'],
            ['Interview', 'None.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'MPSC Group C previous papers — the 2025 prelims and mains papers with final keys, and the commission’s archive.',
      lead: [
        'The commission publishes the papers and keys of each round; the 2025 round is the current scheme.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Preliminary 2025', note: 'the paper of 11 January 2026 with the final key of 5 March.' },
            { text: 'Mains 2025', note: 'Paper 1 and Paper 2 of 12 July 2026 with first keys.' },
            { text: 'Mains 2024', note: 'the papers of 21 September 2025 on the same scheme.' },
            { text: 'Mock test', note: 'the commission’s computer-based mock test link under online facilities, for when the test moves online in 2027.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MPSC — previous question papers', href: MPSC.papers },
            { label: 'MPSC — answer keys', href: MPSC.keys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'MPSC Group C mock tests — one-hour 100-question sittings scored at a quarter off, for the prelims of 3 January 2027 and the mains.',
      lead: [
        'Every paper is one hour of 100 questions; score at −0.25 on the prelims and −0.5 on a two-mark mains question.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine to 3 January',
          items: [
            { title: 'Prelims — 100 questions in an hour', text: 'From the 2025 paper. The open cut-off was 50.25; a blank costs nothing and a guess costs a quarter.' },
            { title: 'Mains Paper 1 — 100 in an hour', text: 'Fifty Marathi at twelfth standard, fifty English at degree standard.' },
            { title: 'Mains Paper 2 — 100 in an hour', text: 'General studies and aptitude at two marks a question; the two Acts are set every year.' },
            { title: 'AMVI — 150 in 90 minutes', text: 'Mechanical and automobile engineering in English at diploma standard.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'MPSC Group C preparation — the four months to the 3 January prelims, the typing certificate deadline, and the preference and verification stages.',
      lead: [
        'The examination has moved twice; the certificate deadline has not.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From now to recommendation',
          items: [
            { title: 'Get the typing certificate before the mains application', text: 'Marathi 30 and English 40 for tax assistant, either for clerk-typist, or the MS-CIT-type certificate — it must be held by the mains closing date.' },
            { title: 'Watch the commission for centres and admission cards', text: 'The press note of 9 September promises them in due course for 3 January 2027; the mains date is to be re-announced.' },
            { title: 'Prepare the general paper for both stages', text: 'The prelims and mains Paper 2 cover the same ground at different lengths.' },
            { title: 'Rank the cadres and offices', text: 'Preferences among cadres and, for clerk-typists, appointing authorities are stated online and decide the posting.' },
            { title: 'Keep the certificates within date', note: 'non-creamy-layer for the year, EWS before the closing date, and the sports verification report.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'MPSC Group C study material — state board textbooks and current affairs for general studies, the two named Acts, language readers, and diploma texts for AMVI.',
      lead: [
        'The general paper is set on the state board textbooks and the year’s events; Paper 2 names the Acts.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['General ability and general studies', 'State board textbooks for history, geography, polity and economy; a year of current affairs; a general science reader; a reasoning and arithmetic workbook', 'Prelims and mains Paper 2.'],
            ['The two Acts', 'The Right to Information Act 2005 and the Maharashtra Right to Public Services Act 2015', 'Named in the mains syllabus.'],
            ['Marathi and English', 'Twelfth-standard Marathi grammar; degree-level English grammar and comprehension', 'Mains Paper 1.'],
            ['AMVI', 'Diploma texts in mechanical and automobile engineering', 'One paper of 300 in English.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Talathi — village revenue officer', to: '/government-exams/state/maharashtra/talathi/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the MPSC Group C 2026 prelims?',
      a: 'On 3 January 2027, by the commission’s press note of 9 September 2026, as an offline OMR examination. It was first set for 27 September 2026 as a computer-based test, then moved to 25 October by the corrigendum of 16 July; the mains date of 27 December is to be re-announced. Applications closed on 5 August 2026.',
    },
    {
      q: 'How many posts are there in MPSC Group C 2026?',
      a: '5,707 after the corrigendum of 22 July 2026 — 1,864 clerk-typists, 461 assistant motor vehicle inspectors, 282 tax assistants, 9 industry inspectors and 3 technical assistants as advertised on 25 June, plus 1,539 village revenue officers, 1,273 further clerk-typists, 254 assistant fisheries development officers and 22 consumer commission posts added under the government resolution of 5 May 2026.',
    },
    {
      q: 'Is Talathi part of MPSC Group C?',
      a: 'In 2026, yes. The corrigendum of 22 July 2026 added 1,539 village revenue officer posts — the Talathi — to the Group C combined examination, with age reckoned on 5 August 2026 for that cadre and a further corrigendum of 5 August on posts in scheduled areas. The 2023 Talathi recruitment was run separately by the revenue department.',
    },
    {
      q: 'What is the MPSC Group C exam pattern?',
      a: 'A combined preliminary of one paper — 100 questions, 100 marks, one hour — that screens; then a combined mains of two one-hour papers: Marathi 50 questions and English 50 for 200, and general studies and aptitude 100 questions for 200. The assistant motor vehicle inspector sits a single mains paper of 150 questions and 300 marks on mechanical and automobile engineering in 90 minutes. A quarter of the marks is deducted per wrong answer throughout; there is no typing test and no interview.',
    },
    {
      q: 'Is there a typing test for MPSC clerk-typist?',
      a: 'No. The typing certificate is a qualification, not a test: a clerk-typist needs a government commercial certificate in Marathi at 30 words a minute or English at 40, or an MS-CIT-type certificate under the 2013 resolution; a tax assistant needs both Marathi at 30 and English at 40. It must be held by the closing date of the mains application, with two years after appointment for PwD, ex-servicemen and orphans.',
    },
    {
      q: 'What is the age limit for MPSC Group C 2026?',
      a: 'On 1 October 2026 — 5 August 2026 for the village revenue officer: 19 minimum, 18 for tax assistant; 38 unreserved; 43 for backward classes, orphans, EWS and sportspersons; ex-servicemen their service plus three years; 45 for PwD, who are not eligible for AMVI; and, for the clerk-typist cadre only, 45 for project- and earthquake-affected candidates and 55 for part-time graduates.',
    },
    {
      q: 'What is the fee for MPSC Group C?',
      a: '₹394 for unreserved candidates, ₹294 for backward classes, EWS and orphans and ₹44 for ex-servicemen at the preliminary; ₹544, ₹344 and ₹44 at the mains. Online only; the challan option was withdrawn on 16 July 2026.',
    },
    {
      q: 'What was the MPSC Group C 2025 result?',
      a: 'The preliminary of 11 January 2026 qualified 31,236 candidates on 4 May 2026 at an open cut-off of 50.25. After the mains of 12 July, the commission published the industry inspector recommendation list — nine recommended, unreserved cut-off 310 of 400 — and the technical assistant merit list on 25 August 2026, and the clerk-typist general merit list with appointing-authority preferences in September.',
    },
  ],
}

/* ── Talathi — Village Revenue Officer ──────────────────────────
   The revenue department's village officer. The 2023 recruitment of 4,644
   posts was run by the Settlement Commissioner through an outsourced
   online test with normalisation, and ended in dispute; the 2026 posts —
   1,539, renamed Village Revenue Officer — were added to MPSC's Group C
   combined examination by corrigendum of 22 July 2026. */
const MH_TALATHI_SRC = {
  advt2023: 'https://mahabhumi.gov.in/Mahabhumilink/Downloads/TalathiExam/तलाठी पदभरती -2023.pdf',
  mahabhumi: 'https://mahabhumi.gov.in/',
  bhumiabhilekh: 'https://bhumiabhilekh.maharashtra.gov.in/',
}

const MH_TALATHI = {
  slug: 'talathi',
  path: '/government-exams/state/maharashtra/talathi/',
  name: 'Maharashtra Talathi',
  fullName: 'Talathi — Village Revenue Officer, Group C, revenue and forest department',
  authority: 'Maharashtra Public Service Commission for the 2026 posts; the Settlement Commissioner and Director of Land Records for the 2023 recruitment',
  official: OFFICIAL,
  seoTitle: 'Maharashtra Talathi 2026: 1,539 Posts via MPSC Group C, Pattern, Eligibility',
  metaDescription:
    'Maharashtra Talathi — 1,539 village revenue officer posts of 2026 inside MPSC Group C, prelims 3 January 2027, eligibility, fees, and the 2023 recruitment.',
  lead: [
    'The Talathi is the revenue department’s officer in the village — the keeper of the 7/12 extract and the mutation register, the first signature on a caste, income or residence certificate, the officer who reports the crop and the calamity. It is a Group C post at pay level S-8, ₹25,500 to ₹81,100, recruited district by district for the collector, and the largest clerical recruitment the department runs. The post has been renamed Village Revenue Officer, and the 2026 advertisements use that name with Talathi in brackets.',
    'The route has changed. The 2023 recruitment of 4,644 posts was run by the Settlement Commissioner through a computer-based test in fifty-seven sessions with normalisation, and its result — with a normalised score above the paper’s maximum — drew a demand for an inquiry and a revised list. The 2026 posts, 1,539 of them, were added on 22 July 2026 to the Public Service Commission’s Group C combined examination under a general administration department resolution of 5 May 2026; applications closed on 5 August and the preliminary, postponed twice, is on 3 January 2027.',
  ],
  quickFacts: [
    ['Recruited by', 'MPSC in 2026, through the Group C combined examination; the revenue department directly in 2023'],
    ['2026 posts', '1,539 Village Revenue Officer (Talathi), added by corrigendum of 22 July 2026; district and category split to follow before the prelims result'],
    ['Status', 'Applications closed 5 August 2026; prelims 3 January 2027, OMR; mains date to be re-announced'],
    ['Scheme', 'MPSC prelims 100 marks, one hour; combined mains Marathi and English 200 and general studies 200; a quarter off per wrong answer'],
    ['Eligibility', 'A degree of a statutory university; 19 to 38, 43 or 45 on 5 August 2026; Marathi required'],
    ['Fee', 'Prelims ₹394, ₹294 for reserved categories, ₹44 for ex-servicemen; mains ₹544, ₹344, ₹44'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2023 advertisement of 26 June 2023 is the last document written for the post alone, and it describes the job’s entry conditions as the department sees them: a degree of a recognised university under the rules of July 2010, knowledge of Marathi with the state board’s Marathi or Hindi test to be passed after selection if neither was taken at SSC, a computer certificate under the 2013 resolution or within two years of appointment, and a domicile certificate for any reservation claimed. Applications ran from 26 June to 17 July 2023 at ₹1,000, or ₹900 for reserved categories and the scheduled-area posts, and the test was held online from 17 August to 14 September 2023 at 36 district centres.',
    },
    {
      type: 'p',
      text: 'What followed made the 2026 change. The test drew over ten lakh applicants and about 8.6 lakh candidates across fifty-seven sessions; server faults delayed sessions and drew a probe; the result of January 2024, normalised across sessions under a formula the department published, produced a candidate with 214 of 200 marks and a demand from the leader of the opposition for a special investigation; the department clarified, revised the result in March 2024 and revised the selection list, and objections to questions went to the High Court’s Chhatrapati Sambhajinagar bench. The waiting list’s validity was extended to September 2025 for the court cases and the election code. The 2026 posts went to the commission.',
    },
    {
      type: 'list',
      title: 'How the 2026 recruitment works',
      items: [
        { text: 'One preliminary with the rest of Group C', note: 'the 1,539 posts sit the same 100-mark general ability paper as the clerk-typists and tax assistants, on OMR at 37 district centres.' },
        { text: 'A combined mains of 400', note: 'Marathi and English for 200 and general studies and aptitude for 200, one hour each — the corrigendum says the mains for the added cadres follows the commission’s scheme, and the commission has said Talathi-specific instructions will follow.' },
        { text: 'Age on 5 August 2026', note: 'the corrigendum fixes the Talathi age-reckoning date at the application closing date under the service entry rules, unlike the 1 October date of the other cadres.' },
        { text: 'District split later', note: 'the district-wise and category-wise distribution of the 1,539 posts is to be published by corrigendum before the preliminary result; the appointing authorities are the collectors.' },
      ],
    },
    {
      type: 'note',
      title: 'Where the 2026 examination is described',
      text: 'The examination the 2026 Talathi candidate sits is the commission’s Group C combined examination, and its scheme, dates, corrigenda and fees are set out in full on the MPSC Group C page. This page covers the post, its entry conditions and the 2023 recruitment; the two are cross-linked, and a candidate should read both.',
    },
  ],
  stages: [
    {
      name: 'Application through MPSC online',
      mode: 'Closed 5 August 2026; fee to 8 August',
      detail:
        'Under Advt 017/2026 as amended by the corrigendum of 22 July, with the Talathi cadre selected among the posts applied for and a district centre chosen. No domicile is required to apply; reservation claims need Maharashtra residence and the relevant certificates.',
    },
    {
      name: 'Group C combined preliminary',
      mode: '100 marks, one hour, OMR, 3 January 2027',
      detail:
        'One paper of general ability at degree standard in Marathi and English, a quarter of the question’s marks off per wrong answer, screening only. Moved from 27 September to 25 October to 3 January by the corrigendum of 16 July and the press note of 9 September 2026.',
    },
    {
      name: 'Group C combined mains',
      mode: '400 marks; date to be re-announced',
      detail:
        'Paper 1, Marathi and English, 200; Paper 2, general studies and aptitude, 200; one hour each, objective, the same negative marking. A separate mains application and fee per cadre.',
    },
    {
      name: 'Recommendation and district allotment',
      mode: 'Mains merit; no interview; certificates verified',
      detail:
        'The commission recommends by cadre and preference; the collectors appoint. Marathi or Hindi and the computer certificate are post-entry conditions where not already held.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No Talathi window is open. The 1,539 Village Revenue Officer posts were added to MPSC’s Group C combined examination by the corrigendum of 22 July 2026, with applications to 5 August and the fee to 8 August; a further corrigendum of 5 August dealt with the posts in scheduled areas under PESA and the children of disabled and deceased ex-servicemen. The preliminary is on 3 January 2027 by the commission’s press note of 9 September 2026, and the mains date of 27 December 2026 is to be re-announced. The district-wise split of the posts has not been published. No 2025 Talathi recruitment took place, and the revenue department’s own sites no longer link the 2023 examination section.`,
    },
    {
      type: 'table',
      caption: 'The two recruitments side by side.',
      head: ['Feature', '2023 — revenue department', '2026 — MPSC Group C'],
      rows: [
        ['Advertisement', '26 June 2023, Settlement Commissioner and Director of Land Records, Pune', 'Advt 017/2026 of 25 June 2026; Talathi added by corrigendum of 22 July'],
        ['Posts', '4,644; later reported revised to 4,793', '1,539'],
        ['Applications', '26 June to 17 July 2023', 'To 5 August 2026'],
        ['Examination', 'Online, 17 August to 14 September 2023, fifty-seven sessions, normalised', 'OMR preliminary 3 January 2027; combined mains to be dated'],
        ['Paper', '100 questions, 200 marks, two hours — Marathi, English, general knowledge, aptitude and arithmetic, 50 each', 'Prelims 100 marks; mains 400 in two papers'],
        ['Fee', '₹1,000; ₹900 reserved and scheduled-area; ex-servicemen nil', '₹394, ₹294, ₹44 prelims; ₹544, ₹344, ₹44 mains'],
        ['Result', 'January 2024; revised March 2024; waiting list extended to September 2025', 'Pending'],
      ],
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC online — application portal', href: MPSC.online },
        { label: 'Mahabhumi — revenue department land records portal', href: MH_TALATHI_SRC.mahabhumi },
        { label: 'Land records department', href: MH_TALATHI_SRC.bhumiabhilekh },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'For the 2026 posts, from the corrigendum of 22 July 2026 and Advt 017/2026. Age on 5 August 2026.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'A degree in any faculty of a statutory university. Final-year candidates may sit the preliminary and must have passed by the mains application closing date.'],
        ['Age', '19 minimum; 38 unreserved; 43 for backward classes, orphans, EWS and sportspersons; ex-servicemen 38 or 43 plus service plus three years; 45 PwD.'],
        ['Marathi', 'Knowledge of Marathi required; the state board’s Marathi or Hindi test after entry for candidates who took neither at SSC.'],
        ['Computer', 'A certificate under the information technology department’s resolution of 4 February 2013, or within two years of appointment.'],
        ['Reservation', 'Ordinary residence in Maharashtra; a domicile certificate for the women’s and other parallel reservations; scheduled-area posts under the PESA rules for local Scheduled Tribe candidates.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, online; not refundable.',
      head: ['Stage', 'Unreserved', 'Backward classes, EWS, orphans', 'Ex-servicemen'],
      rows: [
        ['Preliminary', '₹394', '₹294', '₹44'],
        ['Mains', '₹544', '₹344', '₹44'],
      ],
    },
    {
      type: 'p',
      text: 'The 2023 advertisement set the same degree and language conditions with age 18 to 38 and 18 to 43 plus a two-year relaxation for advertisements before the end of 2023, and required a domicile certificate to claim any reservation. Pay level S-8, ₹25,500 to ₹81,100, under the new pension scheme.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The 2026 scheme — MPSC Group C combined examination.',
      head: ['Stage', 'Paper', 'Questions', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Preliminary', 'General ability test', '100', '100', '1 hour', 'Screening; a quarter off per wrong answer; blanks free'],
        ['Mains', 'Paper 1 — Marathi 50 and English 50', '100', '200', '1 hour', 'Marathi at twelfth standard, English at degree'],
        ['Mains', 'Paper 2 — general studies and aptitude', '100', '200', '1 hour', 'Degree standard; Marathi and English'],
        ['Selection', '—', '—', '—', '—', 'Mains merit; no interview; certificates verified'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2023 scheme, from the advertisement — for the papers that exist.',
      head: ['Section', 'Questions', 'Marks', 'Standard'],
      rows: [
        ['Marathi', '25', '50', 'HSC'],
        ['English', '25', '50', 'HSC'],
        ['General knowledge', '25', '50', 'Degree'],
        ['Intelligence test and arithmetic', '25', '50', 'Degree'],
        ['Total', '100', '200', 'Two hours, computer-based, two marks a question; 45 per cent to enter the merit list; no interview; normalised across sessions'],
      ],
    },
    {
      type: 'note',
      title: 'What changed and what did not',
      text: 'The 2023 paper had no negative marking clause and was normalised across fifty-seven sessions; the 2026 preliminary is one OMR paper on one day with the commission’s quarter-mark deduction, and the mains is two papers of 200. Both routes have a Marathi and an English component, a general studies component and arithmetic and reasoning, and neither has an interview. The commission’s advertisement carries the normalisation wording written for the computer-based test it then withdrew; with a single-session OMR paper it should not arise.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against MPSC’s Advt 017/2026, its corrigenda of 16 and 22 July and 5 August 2026 and the press note of 9 September 2026 read on the commission’s site, and the revenue department’s Talathi advertisement of 26 June 2023 on the Mahabhumi portal. The course of the 2023 recruitment after the examination — the server faults, the normalised score above the maximum, the revised result and the court matters — is from press reports of the time and the department’s own clarification, and the completion of its appointments was not found in an official document.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'Talathi recruitment 2023 — advertisement, 26 June 2023', href: MH_TALATHI_SRC.advt2023 },
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — general instructions', href: MPSC.instructions },
        { label: 'MPSC online', href: MPSC.online },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Maharashtra Talathi syllabus — the MPSC Group C general ability prelims and the Marathi, English and general studies mains, and the revenue reading for the job.',
      lead: [
        'For 2026 the syllabus is the commission’s Group C syllabus; the revenue subjects are for the job, not the paper.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Preliminary — general ability, 100',
              'Current affairs, history and geography of Maharashtra and India, polity, economy, general science, arithmetic and reasoning, at degree standard.',
            ],
            [
              'Mains Paper 1 — Marathi and English, 200',
              'Grammar, vocabulary, comprehension and usage; Marathi at twelfth standard, English at degree.',
            ],
            [
              'Mains Paper 2 — general studies and aptitude, 200',
              'Current affairs, arithmetic and statistics, the RTI and Right to Public Services Acts, polity and local government, modern India with Maharashtra, geography and environment, science and technology, economy, reasoning.',
            ],
            [
              'The 2023 paper',
              'Marathi and English at HSC standard, general knowledge and reasoning with arithmetic at degree standard, 50 marks each.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus pages',
          items: [
            { label: 'MPSC Group C — the examination in full', to: '/government-exams/state/maharashtra/mpsc-group-c/' },
            { label: 'MPSC — candidate information', href: MPSC.home },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Maharashtra Talathi exam pattern — the 2026 MPSC Group C prelims and mains with a quarter off per wrong answer, and the 2023 200-mark normalised test.',
      lead: [
        'A 100-mark screen and a 400-mark mains, under the commission’s rules.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The 2026 rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims 100, one hour', 'Screening; not counted.'],
            ['Mains 400', 'Marathi and English 200; general studies 200; one hour each.'],
            ['Negative marking', 'One-fourth per wrong answer; multiple answers wrong; blanks free.'],
            ['Interview', 'None.'],
            ['Age date', '5 August 2026 for the Talathi cadre.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Maharashtra Talathi previous papers — the 2023 online test as the model for the post, and MPSC’s Group C papers and keys for the 2026 scheme.',
      lead: [
        'The 2023 papers exist only as candidates’ copies; the commission’s Group C papers are the pattern the 2026 candidate faces.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'MPSC Group C prelims 2025', note: 'the paper of 11 January 2026 with the final key of 5 March — the 2026 Talathi preliminary’s shape.' },
            { text: 'MPSC Group C mains 2025', note: 'Paper 1 and Paper 2 of 12 July 2026.' },
            { text: 'Talathi 2023', note: 'the department published keys and results on its examination section, since delisted; copies circulate on coaching sites and are useful for the section weights.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MPSC — previous question papers', href: MPSC.papers },
            { label: 'MPSC — answer keys', href: MPSC.keys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Maharashtra Talathi mock tests — one-hour 100-question sittings on the MPSC Group C pattern, scored at a quarter off.',
      lead: [
        'The paper is now the commission’s: one hour, 100 questions, a quarter off per wrong answer.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine to 3 January',
          items: [
            { title: 'Prelims — 100 questions in an hour', text: 'From the commission’s Group C papers. A blank costs nothing; a guess costs a quarter.' },
            { title: 'Mains Paper 1 — 100 in an hour', text: 'Fifty Marathi, fifty English.' },
            { title: 'Mains Paper 2 — 100 in an hour', text: 'General studies and aptitude at two marks a question.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Maharashtra Talathi preparation — the four months to the MPSC prelims, the district split still to come, and the post-entry Marathi and computer conditions.',
      lead: [
        'The application is closed; the preparation is for the commission’s papers and the district list.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From now to appointment',
          items: [
            { title: 'Watch the commission for the district split', text: 'The 1,539 posts are to be distributed by district and category by corrigendum before the preliminary result.' },
            { title: 'Prepare the general paper for both stages', text: 'The preliminary and mains Paper 2 cover the same ground; Marathi and English are half the mains.' },
            { title: 'Keep the certificates within date', text: 'Non-creamy-layer for the year, EWS before the closing date, domicile for the parallel reservations.' },
            { title: 'Get the computer certificate', text: 'Under the 2013 resolution, or within two years of appointment.' },
            { title: 'Follow the mains notification', text: 'A separate mains application and fee per cadre, after the preliminary result.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Maharashtra Talathi study material — state board textbooks and current affairs for general studies, language readers, and the revenue code for the job.',
      lead: [
        'The paper is the commission’s general paper; the job is the Land Revenue Code.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['General ability and general studies', 'State board textbooks for history, geography, polity and economy; a year of current affairs; a general science reader; an arithmetic and reasoning workbook', 'Prelims and mains Paper 2.'],
            ['Marathi and English', 'Twelfth-standard Marathi grammar; degree-level English grammar and comprehension', 'Mains Paper 1.'],
            ['The two Acts', 'The Right to Information Act 2005 and the Maharashtra Right to Public Services Act 2015', 'Named in the mains syllabus.'],
            ['For the job', 'The Maharashtra Land Revenue Code 1966 in outline; the 7/12 extract and mutation procedure', 'Not on the paper; useful from the first day.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'MPSC Group C', to: '/government-exams/state/maharashtra/mpsc-group-c/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is Maharashtra Talathi recruitment 2026 open?',
      a: 'No. The 1,539 Village Revenue Officer (Talathi) posts were added to MPSC’s Group C combined examination by the corrigendum of 22 July 2026, and applications closed on 5 August 2026 with the fee to 8 August. The preliminary is on 3 January 2027 after two postponements, and the mains date is to be re-announced.',
    },
    {
      q: 'Who conducts the Talathi exam in Maharashtra?',
      a: 'For the 2026 posts, the Maharashtra Public Service Commission, through its Group C combined examination, under a general administration department resolution of 5 May 2026. The 2023 recruitment of 4,644 posts was run by the Settlement Commissioner and Director of Land Records through an outsourced computer-based test.',
    },
    {
      q: 'What is the Talathi exam pattern for 2026?',
      a: 'The MPSC Group C scheme: a preliminary of one paper — 100 questions, 100 marks, one hour, OMR — that screens; then a combined mains of two one-hour papers, Marathi 50 questions and English 50 for 200, and general studies and aptitude 100 questions for 200. A quarter of the marks is deducted per wrong answer. There is no interview. The commission has said Talathi-specific mains instructions will follow.',
    },
    {
      q: 'What is the Talathi qualification and age limit?',
      a: 'A degree in any faculty of a statutory university, with knowledge of Marathi. Age on 5 August 2026: 19 minimum; 38 for the unreserved; 43 for backward classes, orphans, EWS and sportspersons; ex-servicemen their service plus three years; 45 for PwD. A computer certificate is required under the 2013 resolution or within two years of appointment.',
    },
    {
      q: 'What is the Talathi fee?',
      a: '₹394 for unreserved candidates, ₹294 for backward classes, EWS and orphans and ₹44 for ex-servicemen at the preliminary; ₹544, ₹344 and ₹44 at the mains. Online only. The 2023 recruitment charged ₹1,000 and ₹900.',
    },
    {
      q: 'What was the Talathi 2023 exam pattern?',
      a: 'One computer-based paper of 100 questions and 200 marks in two hours — Marathi, English, general knowledge, and intelligence and arithmetic at 25 questions and 50 marks each, the languages at HSC standard and the rest at degree standard — with 45 per cent to enter the merit list, no interview, and scores normalised across fifty-seven sessions. No negative marking clause appeared in the advertisement.',
    },
    {
      q: 'What happened in the Talathi Bharti 2023?',
      a: 'Over ten lakh applied and about 8.6 lakh sat the test between 17 August and 14 September 2023. Server faults delayed sessions, the normalised result of January 2024 produced a candidate with 214 of 200 marks and a demand for an inquiry, the department clarified and revised the result in March 2024, objections went to the High Court’s Chhatrapati Sambhajinagar bench, and the waiting list’s validity was extended to September 2025. The 2026 posts were moved to the commission.',
    },
    {
      q: 'Is Talathi the same as Village Revenue Officer?',
      a: 'Yes. The post has been renamed Village Revenue Officer — ग्राम महसूल अधिकारी — and the 2026 MPSC corrigendum lists it as Village Revenue Officer (Talathi). The duties at the village — land records, certificates, crop and revenue reporting — are the same.',
    },
  ],
}

/* ── Maharashtra Police ─────────────────────────────────────────
   Constable-level posts — police constable, driver, SRPF armed constable,
   bandsman, prison constable — recruited unit by unit under the Director
   General on one portal, with the physical test first and a written test
   for one candidate in ten. The 2024-25 cycle of about 15,400 posts has
   reached appointment orders; no 2026 cycle is advertised. The
   sub-inspector is MPSC's, on the Group B page. Facts are from the
   recruitment portal's instructions, the unit advertisements and the
   gazetted rules. */
const MH_POLICE_SRC = {
  portal: 'https://policerecruitment2025.mahait.org/',
  advertisements: 'https://policerecruitment2025.mahait.org/Forms/Advertisement.aspx',
  instructions: 'https://policerecruitment2025.mahait.org/PDF/Candidates_Instructions.pdf',
  hallTickets: 'https://policerecruitment2025.mahait.org/Forms/FrmHallTicket_Home.aspx',
  faq: 'https://policerecruitment2025.mahait.org/Forms/faq.aspx',
  rules2011: 'https://policerecruitment2025.mahait.org/PDF/16-6-2011_PC_RECT_RULE.pdf',
  bandsmanSummary: 'https://policerecruitment2025.mahait.org/PDF/Bandsman_Vacancy_Summary.pdf',
  bhandaraList: 'https://policerecruitment2025.mahait.org/PDF/PC_SP_Bhandara_Written_Select_List1.pdf',
  srpf20Result: 'https://policerecruitment2025.mahait.org/PDF/SRPF_GR_20_Written_Exam_Result.pdf',
  punePage: 'https://punepolice.gov.in/police-corner/police-recruitment',
  puneFinal: 'https://admin.punepolice.gov.in/files/Recruitment/402.pdf',
  puneKey: 'https://admin.punepolice.gov.in/files/Recruitment/367.pdf',
  mahapolice: 'https://www.mahapolice.gov.in/',
}

const MH_POLICE = {
  slug: 'maharashtra-police',
  path: '/government-exams/state/maharashtra/maharashtra-police/',
  name: 'Maharashtra Police',
  fullName: 'Maharashtra Police constable-level recruitment — police constable, driver, SRPF armed constable, bandsman and prison constable',
  authority: 'Director General of Police, Maharashtra, through unit selection boards on the MahaIT recruitment portal',
  official: 'policerecruitment2025.mahait.org',
  seoTitle: 'Maharashtra Police Bharti 2026: Constable Pattern, Physical Test, Next Cycle',
  metaDescription:
    'Maharashtra Police constable recruitment — the 2024-25 cycle of 15,400 posts, the 50-mark physical test first, a 100-mark written test for one in ten, heights.',
  lead: [
    'Maharashtra recruits its constables unit by unit — each commissionerate, district, railway superintendent, State Reserve Police Force group and prison region advertises its own posts — on one portal under the Director General, with one set of rules and one candidate instruction booklet. The order of selection is what distinguishes the state: the physical test comes first and carries 50 marks that count, and the written test of 100 marks follows for one candidate in ten by physical merit. The merit is the two added, with five bonus marks for an NCC C certificate.',
    'The 2024-25 cycle is the latest and is at appointment. Eighty-six unit advertisements of October 2025 offered about 15,400 posts — 12,702 police constables, 478 drivers, 1,652 SRPF armed constables, 554 prison constables and the bandsmen — with applications to 7 December 2025, physical tests from February 2026, written tests from March to May, and final lists and appointment orders through the summer. No 2026 cycle has been advertised; the units were asked in June to report the vacancies of 2026 and the first half of 2027.',
  ],
  quickFacts: [
    ['Recruiting authority', 'Director General of Police; unit selection boards; MahaIT portal'],
    ['Latest cycle', '2024-25 — 86 unit advertisements, about 15,400 posts; applications 29 October to 7 December 2025'],
    ['Status', 'Closed; physical and written tests held February to May 2026; appointment orders issued; no 2026 advertisement'],
    ['Order', 'Physical test 50 marks first; written test 100 marks for one in ten at 50 per cent physical; merit is the sum plus NCC bonus'],
    ['Written test', '100 questions, 90 minutes, Marathi — arithmetic, general knowledge and current affairs, intelligence, Marathi grammar; 40 per cent to qualify'],
    ['Standards', 'Men 165 cm and 79 cm chest with 5 cm expansion; women 155 cm; SRPF men 168 cm; driver women 158 cm'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The unit structure sets the numbers and the competition. Mumbai’s commissionerate advertised 2,459 constables, Pune City 1,733 including 33 bandsmen, Mira-Bhayandar 840, Mumbai Railway 743, Gadchiroli 717 for residents of that district alone, Thane City 654 and Nagpur City 595, down to Nagpur Railway’s 18; the SRPF groups from Unit 20 Varangaon’s 291 to Group 16 Kolhapur’s 31; the four prison regions 176, 130, 130 and 118. A candidate may apply for a given post in one unit only, and for up to five different posts on separate forms and fees. The vacancies were counted to 31 December 2025.',
    },
    {
      type: 'p',
      text: 'The rules are the Maharashtra Police Constables (Recruitment) Rules of 2011 as amended in June 2022, when rule 4 was rewritten to put the physical test first. Under it, candidates who meet the physical and educational standards take a physical fitness test of 50 marks — 1,600 metres for 20, 100 metres for 15 and shot put for 15 for men; 800 metres, 100 metres and shot put for women — and those with 50 per cent are called to a written test of 100 marks in the ratio of one to ten of the vacancies in each category, with everyone tied at the hundredth place included. The written test is multiple-choice in Marathi over 90 minutes, on arithmetic, general knowledge and current affairs, an intelligence test and Marathi grammar, with 40 per cent to qualify; the unit’s selection board then adds the two and applies the reservation steps of the home department’s resolution of 10 December 2020.',
    },
    {
      type: 'list',
      title: 'The posts and how they differ',
      items: [
        { text: 'Police constable, bandsman and prison constable', note: 'the scheme above; bandsmen need only SSC and pass a musical-skill test; prison constables are recruited by the police department under the same rules for the prisons.' },
        { text: 'Police constable driver', note: 'physical test 50 — 1,600 or 800 metres for 30 and shot put for 20 — then a driving skill test of 50 in light and jeep-type vehicles at 40 per cent, qualifying only, then the written test with motor-vehicle and transport rules added. A valid licence at application; heavy vehicle licence within five years.' },
        { text: 'SRPF armed constable, men only', note: 'physical test of 100 — 5 kilometres for 50, 100 metres for 25, shot put for 25 — at 50 per cent, then the written test of 100; 168 cm; age 18 to 25, or 30 for reserved categories; some units for local residents only.' },
        { text: 'Gadchiroli', note: 'residents of the district only, with an additional 100-mark Gondi or Madia language test at 35 per cent, not counted, and a non-transferable posting.' },
      ],
    },
    {
      type: 'note',
      title: 'Where the sub-inspector is',
      text: 'The police sub-inspector is recruited by the Public Service Commission through its Group B non-gazetted combined examination — a preliminary, a mains, a physical test at 60 per cent and an interview of 40 marks — and is covered on the MPSC Group B page. The commission also runs a limited departmental competitive examination for serving constables to become sub-inspectors, whose 2023 cycle published its recommendation list in 2026.',
    },
  ],
  stages: [
    {
      name: 'Unit advertisements and one application per post',
      mode: 'MahaIT portal; ₹450, ₹350 for reserved categories',
      detail:
        'Each unit publishes its own advertisement with its vacancy table. A candidate applies for a post in one unit only and may apply for up to five different posts. The 2024-25 window ran from 29 October to 7 December 2025 with the fee to 10 December; payment online, by SBI challan or through a common service centre.',
    },
    {
      name: 'Physical standard and physical test',
      mode: '50 marks; 100 for SRPF; counted',
      detail:
        'Height and chest at the ground, then the run, sprint and shot put. Fifty per cent of the physical marks to be called to the written test; the marks are added to the written marks in the final merit. The 2024-25 tests ran from February 2026 across the units.',
    },
    {
      name: 'Written test for one in ten',
      mode: '100 marks, 90 minutes, Marathi, MCQ',
      detail:
        'Arithmetic, general knowledge and current affairs, intelligence test and Marathi grammar — with motor-vehicle rules for drivers. Forty per cent to qualify. Pune City examined 20,069 candidates for 1,733 posts on 22 March 2026 and published its key the same day.',
    },
    {
      name: 'Merit, verification and appointment',
      mode: 'Physical plus written plus NCC bonus',
      detail:
        'The unit selection board’s final list by category and parallel reservation, then document verification, character verification and a medical examination before appointment. Pune City’s final list of 12 April 2026 was followed by appointment orders from May to September.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No police constable window is open, and no 2026 cycle has been advertised — the 2026 portal address does not exist, and the only 2026 document reported is an internal circular of 11 June asking the units to report constable vacancies for 2026 and the first half of 2027. The 2024-25 cycle is closing: physical tests ran from 10 February 2026, the written tests for police constables were planned for one day statewide in mid-March and were held on unit dates in March and April — Pune City on 22 March — with the prison constables in early May and SRPF Group 20 on 17 May; final selection lists followed within weeks, and Pune City issued appointment orders on 6 and 15 May, 2 July and 18 August 2026 with a correction order on 8 September. The 2019 driver recruitment’s petition in the Supreme Court is the only litigation the instructions mention.`,
    },
    {
      type: 'table',
      caption: 'The 2024-25 cycle, from the portal and the unit pages.',
      head: ['Event', 'Detail'],
      rows: [
        ['Advertisements', '86 unit advertisements of late October 2025 — 45 police constable, 16 driver, 13 SRPF, 4 prison, and bandsman posts'],
        ['Applications', '29 October 2025 6 pm to 7 December 2025 midnight, extended from 30 November; fee to 10 December'],
        ['Posts', 'Police constable 12,702; driver 478; SRPF armed constable 1,652; prison constable 554; bandsman 19 standalone and 61 within constable vacancies'],
        ['Physical tests', 'From 10 February 2026; SRPF Group 20’s ground tests to 7 May'],
        ['Written tests', 'Police constable March and April 2026 by unit — Pune City 22 March; Pune bandsman 2 April; prison constable early May; SRPF Group 20 17 May'],
        ['Lists and orders', 'Pune City final list 12 April 2026, 1,733 selected; appointment orders May to September'],
      ],
    },
    {
      type: 'table',
      caption: 'Largest units in the 2024-25 police constable advertisements.',
      head: ['Unit', 'Posts'],
      rows: [
        ['Commissioner of Police, Mumbai', '2,459'],
        ['Commissioner of Police, Pune City', '1,733, including 33 bandsmen'],
        ['Commissioner of Police, Mira-Bhayandar', '840'],
        ['Commissioner of Police, Mumbai Railway', '743'],
        ['Superintendent of Police, Gadchiroli', '717 — district residents only'],
        ['Commissioner of Police, Thane City', '654'],
        ['Commissioner of Police, Nagpur City', '595'],
        ['Commissioner of Police, Navi Mumbai', '445, including 6 bandsmen'],
        ['Commissioner of Police, Pimpri-Chinchwad', '322'],
        ['SRPF Unit 20, Varangaon', '291'],
      ],
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'Police recruitment portal 2024-25', href: MH_POLICE_SRC.portal },
        { label: 'Unit advertisements', href: MH_POLICE_SRC.advertisements },
        { label: 'Candidate instructions, 2024-25', href: MH_POLICE_SRC.instructions },
        { label: 'Maharashtra Police', href: MH_POLICE_SRC.mahapolice },
        { label: 'Pune City Police — recruitment notices', href: MH_POLICE_SRC.punePage },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2024-25 candidate instructions. Age on the closing date for applications.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'HSC of the state board or an equivalent — NIOS senior secondary, CBSE class 12, a YCMOU preparatory year or degree, two-year vocational courses, a diploma in mechanical engineering. Ex-servicemen with fifteen years’ service: SSC or the Army certificate. Bandsman: SSC. Scheduled Tribe candidates and the children of police informers and police staff killed or injured in naxal-affected areas: seventh standard.'],
        ['Age — police constable, bandsman, prison constable', '18 to 28 unreserved; 33 for SC, ST, VJ-A, NT-B, NT-C, NT-D, SBC, OBC, SEBC, EWS and orphans; 45 for project- and earthquake-affected; ex-servicemen service plus three years; part-time graduates 55; sportspersons five more; police wards and home guards 28 or 33; ex-servicemen’s dependants three more.'],
        ['Age — driver', '19 minimum; otherwise as above.'],
        ['Age — SRPF', '18 to 25 unreserved; 30 for reserved categories and orphans; the same relaxations from those bases.'],
        ['One-time relaxation', 'Candidates of every category who crossed the upper age limit between 1 January 2022 and 31 December 2025 were eligible for the 2024 and 2025 vacancies, under the home department’s amendment rules of October 2025 for the three cadres.'],
        ['Domicile and language', 'A Maharashtra domicile certificate; Marathi-speaking residents of the 865 border villages with fifteen years’ residence. Knowledge of Marathi and Hindi; a candidate without either at SSC must pass the state board’s language test after selection. The written test is in Marathi.'],
        ['Licences and certificates', 'Police constable: a light motor vehicle licence within two years of training, on a bond. Driver: a valid LMV or LMV-transport licence at application, heavy vehicle within five years, no drunk-driving conviction. All: a computer certificate within two years of appointment. NCC C certificate: five bonus marks.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, not refundable; separate fee per post applied for.',
      head: ['Post', 'Unreserved', 'Backward classes'],
      rows: [
        ['Police constable, driver, SRPF, bandsman, prison constable', '₹450', '₹350'],
      ],
    },
    {
      type: 'table',
      caption: 'Physical standards.',
      head: ['Post', 'Men', 'Women', 'Transgender'],
      rows: [
        ['Police constable, bandsman, prison constable', '165 cm; chest 79 cm unexpanded with 5 cm expansion', '155 cm; no chest', '155 cm if self-identified female or transgender, 165 cm if self-identified male; no chest'],
        ['Driver', '165 cm; chest 79 cm with 5 cm expansion', '158 cm', '158 or 165 cm'],
        ['SRPF armed constable', '168 cm; chest 79 cm with 5 cm expansion', 'Not recruited', '—'],
      ],
    },
    {
      type: 'p',
      text: 'Relaxations: Scheduled Tribe candidates 5 cm in height under the amendment of October 2024; ST candidates and police informers’ children in naxal-affected areas 4 cm with no chest measurement; sportspersons 2.5 cm; wards of deceased or medically retired police staff and bandsmen 2.5 cm in height and 2 cm in chest with 1.5 cm expansion. No weight standard appears in the rules.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Physical test, from rule 4 as substituted in June 2022 and the 2024-25 instructions. Fifty per cent to be called to the written test; marks counted in the merit.',
      head: ['Post', 'Event', 'Marks'],
      rows: [
        ['Police constable, bandsman, prison constable — men', '1,600 metres 20; 100 metres 15; shot put 15', '50'],
        ['Police constable, bandsman, prison constable — women', '800 metres 20; 100 metres 15; shot put 15', '50'],
        ['Driver — men', '1,600 metres 30; shot put 20', '50'],
        ['Driver — women', '800 metres 30; shot put 20', '50'],
        ['Driver — skill test', 'Light motor vehicle 25; jeep-type vehicle 25; 40 per cent to pass; not counted', '50'],
        ['SRPF — men', '5 kilometres 50; 100 metres 25; shot put 25', '100'],
      ],
    },
    {
      type: 'table',
      caption: 'Written test, from the same rule.',
      head: ['Feature', 'Rule'],
      rows: [
        ['Who sits', 'One candidate in ten of the vacancies in each category by physical merit, with all those tied at the hundredth place'],
        ['Paper', '100 marks, multiple choice, in Marathi, 90 minutes'],
        ['Subjects', 'Arithmetic; general knowledge and current affairs; intelligence test; Marathi grammar — plus motor-vehicle driving and transport rules for drivers'],
        ['Qualifying', '40 per cent; below that the candidate is ineligible'],
        ['Negative marking', 'No clause in the rules or the instructions'],
        ['Merit', 'Physical plus written, plus five for an NCC C certificate, by category and parallel reservation under the resolution of 10 December 2020'],
      ],
    },
    {
      type: 'note',
      title: 'The physical marks count',
      text: 'Unlike most states, Maharashtra adds the physical test to the merit: a constable is selected on 150 marks, 50 of them on the ground, plus the NCC bonus. Pune City’s final list of April 2026 states the formula — physical test, written test and the NCC bonus combined by merit. Accounts that describe the physical test as qualifying only are wrong for this state. The rules do not publish the time and distance that earn each mark; the units apply the Director General’s marking table on the day.',
    },
    {
      type: 'list',
      title: 'What the 2024-25 cycle settled',
      items: [
        { text: 'One day per post, in principle', note: 'the instructions say the written test for a post is held on one day in all units; in practice the units examined on their own dates through March and April.' },
        { text: 'Keys the same day', note: 'Pune City published its model key on the day of the test with a day to object, the final key three days later and the marks the day after.' },
        { text: 'No paper copies', note: 'question papers and answer sheets are not given to candidates; keys are unit documents.' },
        { text: 'Selection is provisional', note: 'until documents, character and medical fitness are verified.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the 2024-25 candidate instructions on the recruitment portal, the eighty-six unit advertisements downloaded from it, the Constables Recruitment Rules of 2011 and their amendments of 2022, 2024 and 2025 in the Maharashtra Gazette as hosted on the portal, the portal’s hall-ticket and result notices, and Pune City Police’s recruitment notices and final list. The statewide total is the sum of the unit advertisements; no official state total was published, and the widely reported 15,631 differs from it by about 230. The Maharashtra Police site itself refused connections at the date checked.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'Candidate instructions, 2024-25 — all posts', href: MH_POLICE_SRC.instructions },
        { label: 'Unit advertisements', href: MH_POLICE_SRC.advertisements },
        { label: 'Police Constables Recruitment Rules 2011', href: MH_POLICE_SRC.rules2011 },
        { label: 'Bandsman vacancy summary', href: MH_POLICE_SRC.bandsmanSummary },
        { label: 'Hall tickets and cut-off notice', href: MH_POLICE_SRC.hallTickets },
        { label: 'Bhandara — one-in-ten list for the written test, 26 February 2026', href: MH_POLICE_SRC.bhandaraList },
        { label: 'SRPF Group 20 — written test result, 19 May 2026', href: MH_POLICE_SRC.srpf20Result },
        { label: 'Pune City — final selection list, 12 April 2026', href: MH_POLICE_SRC.puneFinal },
        { label: 'Pune City — model answer key, 22 March 2026', href: MH_POLICE_SRC.puneKey },
        { label: 'Portal FAQ', href: MH_POLICE_SRC.faq },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Maharashtra Police constable syllabus — arithmetic, general knowledge and current affairs, intelligence test and Marathi grammar, and drivers’ transport rules.',
      lead: [
        'There is no separate syllabus document; the syllabus is the four subjects in rule 4 of the recruitment rules.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Arithmetic',
              'Number work, percentages, ratio, averages, time and work, simple interest and mensuration at SSC standard.',
            ],
            [
              'General knowledge and current affairs',
              'Maharashtra and India — history, geography, polity, the police and the Constitution in outline, and the year’s events.',
            ],
            [
              'Intelligence test',
              'Series, analogies, coding, classification, direction, blood relations and figure reasoning.',
            ],
            [
              'Marathi grammar',
              'Parts of speech, sandhi and samas, tenses, idioms and proverbs, synonyms and antonyms, sentence correction.',
            ],
            [
              'Driver — additional',
              'Motor vehicle driving and transport rules.',
            ],
            [
              'Gadchiroli — additional',
              'A 100-mark Gondi or Madia language test at 35 per cent, not counted.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus source',
          items: [
            { label: 'Candidate instructions — the scheme by post', href: MH_POLICE_SRC.instructions },
            { label: 'Recruitment rules 2011', href: MH_POLICE_SRC.rules2011 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Maharashtra Police constable exam pattern — 50-mark physical test first, 100-mark written test for one in ten, 40 per cent to pass, merit of 150 plus NCC bonus.',
      lead: [
        'Fifty on the ground, a hundred on paper, added.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Physical first', '50 marks — or 100 for SRPF; 50 per cent to go on; counted.'],
            ['One in ten', 'Called to the written test by physical merit in each category.'],
            ['Written 100, 90 minutes, Marathi', 'Four subjects; 40 per cent to qualify; no negative marking clause.'],
            ['Merit', 'Physical plus written plus five for NCC C.'],
            ['Driver', 'A 50-mark driving test at 40 per cent between the physical and written tests, not counted.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Maharashtra Police constable previous papers — the unit keys of the 2024-25 written tests, and where the papers are not published.',
      lead: [
        'The units publish model and final keys; the papers themselves are not given out, and copies circulate from candidates.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Pune City, 22 March 2026', note: 'model key the same day, final key on 25 March, marks on 26 March — on the Pune City Police recruitment page.' },
            { text: 'SRPF Group 20, 17 May 2026', note: 'key the same day and the marks list on 19 May, on the portal.' },
            { text: 'Prison constable, Pune, May 2026', note: 'provisional key 10 May, final key 12 May, marks 14 May.' },
            { text: 'Earlier cycles', note: 'unit keys of the 2019 and 2022 recruitments on the unit sites and the earlier portals.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Pune City — recruitment notices with keys', href: MH_POLICE_SRC.punePage },
            { label: 'Recruitment portal 2024-25', href: MH_POLICE_SRC.portal },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Maharashtra Police constable mock tests — 100-question Marathi papers in 90 minutes and the run, sprint and shot put that make a third of the merit.',
      lead: [
        'Score the mock to 40 to qualify, then to the cut-off; and train the ground events as marks, not as a gate.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Written — 100 questions in 90 minutes, in Marathi', text: 'Arithmetic, general knowledge, reasoning and Marathi grammar in roughly equal parts. Forty is the floor; the cut-off in a large unit is far above it.' },
            { title: '1,600 or 800 metres for 20', text: 'The largest single event; time it every week.' },
            { title: '100 metres for 15 and shot put for 15', text: 'Speed and technique; the marking table rewards the fastest and the farthest.' },
            { title: 'SRPF — 5 kilometres for 50', text: 'Half the physical marks in one run.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Maharashtra Police constable preparation — choosing the unit, the physical test that counts, the one-in-ten cut, and waiting for the 2026 cycle.',
      lead: [
        'The unit you choose sets the odds; the ground sets a third of the score.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From advertisement to appointment',
          items: [
            { title: 'Watch for the next portal', text: 'Each cycle has its own MahaIT portal named for the year; the 2024-25 one is policerecruitment2025. The units were asked in June 2026 to report vacancies for the next cycle.' },
            { title: 'Choose one unit per post', text: 'A candidate applies for a post in one unit only; the ratio of posts to applicants differs greatly between Mumbai, Gadchiroli and a small district.' },
            { title: 'Train for marks on the ground', text: 'Fifty of 150; fifty per cent to be called, and the written test is only for one in ten by physical merit.' },
            { title: 'Prepare the paper in Marathi', text: 'The test is set in Marathi; a candidate without Marathi or Hindi at SSC must also pass the board’s language test after selection.' },
            { title: 'Have the licence and certificates ready', text: 'Drivers need a valid licence at application; constables have two years for the LMV licence and the computer certificate.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Maharashtra Police constable study material — SSC arithmetic, Marathi grammar, a reasoning workbook, and Maharashtra general knowledge in Marathi.',
      lead: [
        'The paper is at SSC to HSC level and in Marathi; work from the state board books.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By subject.',
          head: ['Subject', 'What to read', 'Note'],
          rows: [
            ['Arithmetic', 'State board mathematics for classes 8 to 10', 'About a quarter of the paper.'],
            ['General knowledge and current affairs', 'State board history, geography and civics; a Marathi current affairs digest for the year', 'Maharashtra weighted.'],
            ['Intelligence test', 'A reasoning workbook in Marathi', 'Series, coding, analogies.'],
            ['Marathi grammar', 'A standard Marathi grammar with idioms and proverbs', 'About a quarter of the paper.'],
            ['Driver', 'The Motor Vehicles Act and the road rules', 'Added to the driver paper.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'MPSC Group B — police sub-inspector', to: '/government-exams/state/maharashtra/mpsc-group-b/' },
            { label: 'Police exam preparation', to: '/government-exams/police/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is Maharashtra Police Bharti 2026 out?',
      a: 'No. No 2026 constable recruitment has been advertised as at 11 September 2026, and no 2026 portal exists. The 2024-25 cycle — about 15,400 posts across 86 unit advertisements, applications to 7 December 2025 — has been examined and is at appointment orders. The only 2026 document reported is an internal circular of June asking the units to report their vacancies for 2026 and the first half of 2027.',
    },
    {
      q: 'What is the Maharashtra Police constable selection process?',
      a: 'The physical test comes first — 50 marks: 1,600 metres for 20, 100 metres for 15 and shot put for 15 for men; 800 metres, 100 metres and shot put for women — and candidates with 50 per cent are called to a written test of 100 marks in the ratio of one to ten of the vacancies in each category. The written test is multiple-choice in Marathi over 90 minutes on arithmetic, general knowledge and current affairs, intelligence and Marathi grammar, with 40 per cent to qualify. The merit is the two added, plus five marks for an NCC C certificate.',
    },
    {
      q: 'Do the physical test marks count in Maharashtra Police recruitment?',
      a: 'Yes. Under rule 4 as amended in 2022, the final merit list is prepared after amalgamating the marks of the physical test and the written test — 50 and 100 — and Pune City’s final list of April 2026 states that formula. The physical test is both a gate at 50 per cent and a third of the score.',
    },
    {
      q: 'What are the height requirements for Maharashtra Police?',
      a: 'Police constable, bandsman and prison constable: men 165 cm with a 79 cm chest expanding by 5 cm, women 155 cm with no chest requirement. Driver: women 158 cm. SRPF armed constable, men only: 168 cm. Scheduled Tribe candidates get 5 cm, sportspersons and police wards 2.5 cm. There is no weight standard.',
    },
    {
      q: 'What is the age limit for Maharashtra Police constable?',
      a: 'Eighteen to 28 for the unreserved and 33 for reserved categories and orphans for police constable, bandsman and prison constable; 19 minimum for driver; 18 to 25 and 30 for SRPF. Ex-servicemen get their service plus three years, sportspersons five more, and project-affected candidates 45. For the 2024-25 cycle a one-time amendment made candidates who crossed the limit between 1 January 2022 and 31 December 2025 eligible.',
    },
    {
      q: 'What is the fee for Maharashtra Police Bharti?',
      a: '₹450 for unreserved candidates and ₹350 for backward classes, for each post applied for — police constable, driver, SRPF, bandsman and prison constable alike — paid online, by SBI challan or through a common service centre, and not refunded. A candidate may apply for up to five posts on separate forms.',
    },
    {
      q: 'Is there negative marking in the Maharashtra Police written test?',
      a: 'No negative marking clause appears in the recruitment rules as amended in 2022 or in the 2024-25 candidate instructions, and the unit key notices say nothing of one. The test is 100 marks in 90 minutes with 40 per cent to qualify.',
    },
    {
      q: 'Who recruits police sub-inspectors in Maharashtra?',
      a: 'The Maharashtra Public Service Commission, through its Group B non-gazetted combined examination — a 100-mark preliminary, a 400-mark mains, a physical test of 100 marks qualifying at 60 per cent, and an interview of 40. The 2026 advertisement offered 310 sub-inspector posts. Serving constables can also reach the post through the commission’s limited departmental competitive examination.',
    },
  ],
}

/* ── Maharashtra teaching posts ─────────────────────────────────
   Two examinations by the State Council of Examination, Pune: MAHATET,
   the eligibility test for classes 1 to 8, and TAIT, the aptitude and
   intelligence test whose score is the sole merit for teacher recruitment
   on the Pavitra portal. The June 2026 TET was postponed on the eve of
   the paper after a police seizure; TAIT 2025 produced its first Pavitra
   recommendation list on 27 August 2026. */
const MH_TEACH_SRC = {
  mahatet: 'https://mahatet.in/',
  tetAdvertisement: 'https://mahatet.in/Notices/Advertisement/ShowAdvertisement',
  tetTimetable: 'https://mahatet.in/Notices/TimeTable/ShowTimeTable',
  tetFee: 'https://mahatet.in/Notices/ExamFee',
  tetGrs: 'https://mahatet.in/Notices/GovtResolutions/ShowGovernmentResolutions',
  tetSyllabus: 'https://mahatet.in/Main/DownloadMedia?folderName=ImportantDocuments&fileName=MAHATET_Syllabus.pdf',
  tetPapers: 'https://mahatet.in/Notices/QuestionPaper/ShowPreviousQuestionPapers',
  tetFaq: 'https://mahatet.in/Main/DownloadMedia?folderName=ImportantDocuments&fileName=FAQ%202026.pdf',
  tetPostponement: 'https://mahatet.in/Main/DownloadMedia?folderName=ImportantDocuments&fileName=CANCEL_PRAKATAN_TET%201_260627_130603.pdf',
  tetResult2025: 'https://mahatet.in/mahatet_2025/Notices/ResultSheet/ShowFinalResult',
  msce: 'https://www.mscepune.in/',
  pavitra: 'https://mahateacherrecruitment.org.in/',
  pavitra2025: 'https://tait2025.mahateacherrecruitment.org.in/',
  pavitra2025Notices: 'https://tait2025.mahateacherrecruitment.org.in/Public/Notifications.aspx?NotificationCategoryID=4',
  pavitra2022: 'https://tait2022.mahateacherrecruitment.org.in/',
  taitNotification2025: 'https://mscepune.in/gcc/path/TAIT EXAM 2025 Notification final.pdf',
  taitHandout: 'https://mscepune.in/gcc/path/SAMPLE QUES AND INSTRUCTIONS ENGLISH.pdf',
  edustaff: 'https://edustaff.maharashtra.gov.in/',
}

const MH_TEACHING = {
  slug: 'teaching-posts',
  path: '/government-exams/state/maharashtra/teaching-posts/',
  name: 'Maharashtra Teaching Posts',
  fullName: 'MAHATET, TAIT and teacher recruitment through the Pavitra portal',
  authority: 'Maharashtra State Council of Examination, Pune; School Education Department’s Pavitra portal',
  official: 'mahatet.in',
  seoTitle: 'Maharashtra Teacher Recruitment: TAIT, Pavitra 2026 Lists & MAHATET',
  metaDescription:
    'Maharashtra teaching posts — the postponed June 2026 MAHATET, TAIT 2025 and the Pavitra list of 27 August 2026 recommending 13,119 teachers, and pass marks.',
  lead: [
    'Maharashtra fills its school teaching posts through two examinations of the State Council of Examination in Pune and one portal. The Teacher Eligibility Test qualifies a candidate for classes 1 to 8, as the Right to Education Act requires; the Teacher Aptitude and Intelligence Test, a 200-mark online test of aptitude and reasoning rather than subject knowledge, produces the score on which every management — zilla parishad, municipal, tribal department and private aided — recruits through the Pavitra portal, without interview for most posts and with a 30-mark interview for the rest.',
    'Both are in the news. The June 2026 TET, notified in March for 28 June, was postponed on the eve of the paper after Bhiwandi police seized material with questions matching it, and no new date has been announced. TAIT 2025, examined in May and June 2025 with 2.11 lakh candidates, produced its first Pavitra recommendation list on 27 August 2026 — 13,119 teachers recommended against 19,754 advertised posts without interview — with document verification in early September and a converted round and the with-interview list to follow.',
  ],
  quickFacts: [
    ['Conducting body', 'Maharashtra State Council of Examination, Pune; recruitment on the Pavitra portal'],
    ['MAHATET June 2026', 'Postponed on 27 June 2026 after a police seizure of matching questions; no revised date; applications closed 24 April'],
    ['TAIT 2025', '200 marks, 120 minutes, no penalty; held 27 May to 5 June 2025; result 18 August 2025; 2,11,308 appeared'],
    ['Pavitra 2026', 'First list 27 August 2026 — 19,754 posts, 13,119 recommended; verification 2 to 5 September; converted round next'],
    ['TET pass marks', '60 per cent; 55 for SC, ST, VJ-NT, SBC, OBC and PwD; 45 for ex-servicemen and martyrs’ families'],
    ['Fees', 'TET ₹1,000 one paper or ₹1,200 both, ₹700 and ₹900 for SC, ST and PwD; TAIT ₹950, ₹850 reserved'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The TET is set under the 2013 government resolution in two papers of 150 questions and 150 marks over two and a half hours. Paper I, for classes 1 to 5, has five compulsory sections of 30 — child psychology and pedagogy, two languages, mathematics and environmental studies. Paper II, for classes 6 to 8, has the same first three sections and then either mathematics and science or social studies for 60. The pass mark is 60 per cent, 55 for SC, ST, the nomadic and denotified tribes, the special backward class, OBC and PwD candidates, and 45 for ex-servicemen and the families of the fallen under a 2022 concession. A passed candidate may sit again to improve the score, and the papers and keys of every test since 2013 are on the portal.',
    },
    {
      type: 'p',
      text: 'TAIT is different in kind. The 2025 notification of 25 April 2025 describes 120 questions of aptitude — mathematical ability, speed and accuracy, English and Marathi language ability, spatial ability, and art, interest, adjustment and personality — and 80 of intelligence — comprehension, classification, correlation, series, reasoning, coding, symbolic language and rhythmic arrangement — for 200 marks in two hours, omnibus rather than sectioned, in Marathi, English or Urdu, with no penalty for a wrong answer and no subject knowledge tested. The score is valid for one selection: under the resolution of 2 April 2026 a candidate selected through it must sit a new TAIT to compete again.',
    },
    {
      type: 'list',
      title: 'How Pavitra turns a score into a post',
      items: [
        { text: 'Managements advertise on the portal', note: 'the 2026 round took advertisements from 1 May to 20 August 2026 for zilla parishads, municipal councils and corporations, the tribal development department’s government schools, government Vidyaniketans and private institutions.' },
        { text: 'Candidates lock preferences', note: 'up to 100 for without-interview posts and 50 for with-interview posts — 6 to 16 August 2026 — after self-certifying qualifications on the portal.' },
        { text: 'Recommendation by TAIT merit', note: 'one to one for without-interview posts, one to three for with-interview posts where the management holds a 30-mark interview and teaching demonstration under the 2019 resolution.' },
        { text: 'Rounds', note: 'the first without-interview list, a converted round for posts unfilled in the ex-servicemen, part-time, ST and PESA quotas, then the with-interview list. The 2022 cycle ran to a second phase in 2025.' },
      ],
    },
    {
      type: 'note',
      title: 'Pay is a stipend for the first years',
      text: 'Teachers recruited through Pavitra join as Shikshan Sevak on a consolidated pay before regular scales — ₹16,000 a month for classes 1 to 5 and 6 to 8 and ₹18,000 for classes 9 and 10, as the 2026 recommendation lists print it. The amount for junior college posts was not found in the documents read.',
    },
  ],
  stages: [
    {
      name: 'MAHATET — eligibility for classes 1 to 8',
      mode: 'Two OMR papers of 150; 60 per cent to pass',
      detail:
        'Paper I in the morning and Paper II in the afternoon of one Sunday, in nine mediums. The certificate qualifies for recruitment; it is not recruitment. The June 2026 test is postponed without date.',
    },
    {
      name: 'TAIT — the score for recruitment',
      mode: 'Online, 200 questions, 200 marks, 120 minutes, no penalty',
      detail:
        'Aptitude 120 and intelligence 80, omnibus, in Marathi, English or Urdu. Held over several days and sessions by IBPS; the 2025 test on 27 to 30 May and 2 to 5 June 2025 at 60 centres in 26 districts.',
    },
    {
      name: 'Pavitra — advertisements and preferences',
      mode: 'Self-certification, then locked preferences',
      detail:
        'Managements advertise; candidates certify their qualifications on the portal and lock up to 100 without-interview and 50 with-interview preferences in the window announced.',
    },
    {
      name: 'Recommendation, verification, appointment',
      mode: 'One to one, or one to three with a 30-mark interview',
      detail:
        'The portal publishes the recommendation list by TAIT merit; the management verifies documents and appoints as Shikshan Sevak. A grievance window follows each list.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No teaching examination is open. MAHATET June 2026 — notified 25 March 2026, applications 27 March to 24 April after extension, moved from 21 to 28 June by a letter of 15 May — was postponed by public notice on 27 June 2026, the day before the paper, after Bhiwandi police acting on information found persons holding material with some questions identical to the paper and registered a case; the council said a revised date would be published on its site and warned against social-media rumours, and none had been published at the date checked. TAIT 2025’s Pavitra round published its first without-interview list on 27 August 2026 at 7 pm, took grievances to 6 September, verified private-management selections from 2 to 5 September, and on 7 September listed selections held in abeyance for technical reasons; the converted round and the with-interview list are next. No TAIT 2026 has been notified.`,
    },
    {
      type: 'table',
      caption: 'MAHATET cycles, from the council’s press notes.',
      head: ['Cycle', 'Applications', 'Examination', 'Result'],
      rows: [
        ['June 2026', '27 March to 24 April 2026', 'Set for 21 June, moved to 28 June, postponed 27 June; no new date', '—'],
        ['November 2025', '15 September to 3 October 2025', '23 November 2025 — Paper I 10.30 to 1.00, Paper II 2.30 to 5.00', 'Final keys 12 January 2026; interim result 16 January with objections to 21 January; certificates distributed through district offices from April'],
      ],
    },
    {
      type: 'table',
      caption: 'The Pavitra list of 27 August 2026 — without-interview posts, TAIT 2025.',
      head: ['Management', 'Posts advertised', 'Recommended'],
      rows: [
        ['Zilla parishads', '13,225', '8,481'],
        ['Tribal development department schools', '2,421', '1,601'],
        ['Municipal corporations', '1,954', '1,306'],
        ['Private institutions', '1,818', '1,451'],
        ['Municipal councils and nagar panchayats', '280', '226'],
        ['Government Vidyaniketans', '56', '54'],
        ['All managements', '19,754', '13,119'],
        ['By level — classes 1 to 5', '12,671', '7,541'],
        ['Classes 6 to 8', '5,421', '4,207'],
        ['Classes 9 and 10', '1,298', '1,119'],
        ['Classes 11 and 12', '364', '252'],
      ],
    },
    {
      type: 'p',
      text: 'Posts unfilled in the first list — 2,760 in the ex-servicemen quota, 1,760 part-time, 802 ST and 1,408 PESA ST — go to a converted round. 1,46,650 candidates locked without-interview preferences and 1,31,505 with-interview preferences. The 2022 cycle before it recommended 19,986 candidates against 21,678 posts in September 2024 and ran a second phase through 2025.',
    },
    {
      type: 'links',
      title: 'Check the council and the portal directly',
      items: [
        { label: 'MAHATET portal', href: MH_TEACH_SRC.mahatet },
        { label: 'MAHATET — timetable', href: MH_TEACH_SRC.tetTimetable },
        { label: 'State Council of Examination, Pune', href: MH_TEACH_SRC.msce },
        { label: 'Pavitra — TAIT 2025 recruitment', href: MH_TEACH_SRC.pavitra2025 },
        { label: 'Pavitra — TAIT 2025 notices', href: MH_TEACH_SRC.pavitra2025Notices },
        { label: 'Pavitra — portal home', href: MH_TEACH_SRC.pavitra },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Teacher qualifications under the school education department’s resolution of 7 February 2019 and its corrigenda, as the TET FAQ and the TAIT notification apply them.',
      head: ['Level', 'Qualification', 'TET'],
      rows: [
        ['Classes 1 to 5', 'HSC with 50 per cent and a two-year D.El.Ed, or HSC 50 per cent and a four-year B.El.Ed, or the special-education diploma, or a degree with 50 per cent and B.Ed with the six-month bridge course', 'MAHATET or CTET Paper I'],
        ['Classes 6 to 8', 'A degree in the subject with 50 per cent and D.El.Ed or B.Ed, or HSC 50 per cent and a four-year integrated degree', 'MAHATET or CTET Paper II'],
        ['Classes 9 and 10', 'A degree in the subject with 50 per cent and B.Ed, or a four-year B.A.Ed. or B.Sc.Ed.', 'Not required by the 2019 resolution'],
        ['Classes 11 and 12', 'A postgraduate degree in the subject and B.Ed, as the 2023 resolution frames it', 'Not required'],
        ['Relaxation', 'Five per cent in qualifying marks for SC, ST, VJ-NT, OBC, SBC, SEBC, EWS and PwD candidates for classes 1 to 8', '—'],
      ],
    },
    {
      type: 'table',
      caption: 'MAHATET 2026 fees, online only.',
      head: ['Candidates', 'One paper', 'Both papers'],
      rows: [
        ['SC, ST and PwD with 40 per cent disability', '₹700', '₹900'],
        ['All others, including VJ-NT, SBC, OBC, SEBC, EWS and general', '₹1,000', '₹1,200'],
      ],
    },
    {
      type: 'table',
      caption: 'TAIT 2025, from the notification of 25 April 2025.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Age', '18 minimum; the upper limit as the government fixes it by resolution — no figure in the notification'],
        ['Qualification', 'The teaching qualification for the level under the 2019 resolution and its corrigenda; last-semester B.Ed and D.El.Ed students admitted under the corrigendum of 2 May 2025, with the marksheet within a month of passing'],
        ['Fee', '₹950 unreserved; ₹850 for backward classes, EWS, SEBC, orphans and PwD; not refundable'],
        ['Validity', 'The score is valid for the advertisements of its cycle; once selected, a candidate needs a new TAIT to compete again, under the resolution of 2 April 2026'],
        ['Category-concession TET passes', 'Eligible for open posts on merit, following the Supreme Court’s order of 23 March 2026'],
      ],
    },
    {
      type: 'p',
      text: 'The TET has no age limit and no domicile requirement; it is open to any candidate with the qualification. Candidates named in the council’s lists from the 2018 and 2019 malpractice inquiries are barred from applying. The TET certificate’s validity is seven years under the 2013 resolution; the national council made TET certificates valid for life in 2021, and a state resolution adopting that was not found on the portal.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'MAHATET, from the syllabus annexure to the 2013 resolution. Each paper 150 questions, 150 marks, two and a half hours, OMR, one mark a question.',
      head: ['Section', 'Paper I — classes 1 to 5', 'Paper II — classes 6 to 8'],
      rows: [
        ['Child psychology and pedagogy', '30', '30'],
        ['Language 1 — Marathi, English or Urdu', '30', '30'],
        ['Language 2', '30', '30'],
        ['Mathematics', '30', 'Mathematics and science 60 — or'],
        ['Environmental studies', '30', 'Social studies 60'],
      ],
    },
    {
      type: 'table',
      caption: 'TAIT 2025, from the notification and the IBPS handout. Omnibus — no sections in the paper.',
      head: ['Area', 'Questions', 'Marks', 'Content'],
      rows: [
        ['Aptitude', '120', '120', 'Mathematical ability, speed and accuracy, English language ability, Marathi language ability, spatial ability, art, interest, adjustment and personality'],
        ['Intelligence', '80', '80', 'Comprehension, classification, correlation, series, reasoning and inference, coding, symbolic language, rhythmic arrangement'],
        ['Total', '200', '200', '120 minutes; Marathi, English or Urdu; no penalty for a wrong answer; no subject knowledge'],
      ],
    },
    {
      type: 'note',
      title: 'Pass marks and penalties',
      text: 'MAHATET is passed at 60 per cent — 90 of 150 — or 55 per cent for SC, ST, VJ-NT, SBC, OBC and PwD candidates and 45 per cent for ex-servicemen and the families of the fallen; the mathematics-and-science or social-studies choice in Paper II follows the subject the candidate will teach. No negative marking statement appears in the 2026 advertisement, the FAQ or the syllabus. TAIT has no pass mark: it is a ranking, and the IBPS handout states there is no penalty for a wrong answer.',
    },
    {
      type: 'list',
      title: 'What the 2025 and 2026 documents settle',
      items: [
        { text: 'Nine mediums for the TET', note: 'Marathi, English, Urdu, Bengali, Gujarati, Sindhi, Kannada, Telugu and Hindi; the smaller mediums are examined in designated districts.' },
        { text: 'The TET keys and objections', note: 'final keys were published on 12 January 2026 for the November 2025 test, with an interim result four days later and five days to object online.' },
        { text: 'TAIT is machine-scored and once-valid', note: 'the result of 18 August 2025 reserved 6,320 candidates’ scores pending professional-qualification marksheets and later cancelled 2,207 results.' },
        { text: 'The interview is 30 marks where it exists', note: 'interview and teaching demonstration under the 2019 resolution, for managements that opt for it, at one to three from TAIT merit.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the council’s MAHATET June 2026 advertisement, timetable, fee page, FAQ, syllabus annexure and postponement notices, the November 2025 press notes, the TAIT 2025 notification of 25 April 2025 and IBPS handout, the TAIT result press note of 18 August 2025, and the Pavitra portal’s candidate notice of 6 August 2026, press note of 27 August 2026 and notices of 31 August and 7 September. The council’s press notes are scanned Marathi documents and the figures were read from them; the council’s site serves an expired certificate. Reports that the TET will be re-held online by IBPS are press accounts and were not on an official page.`,
    },
    {
      type: 'links',
      title: 'Official documents and pages',
      items: [
        { label: 'MAHATET June 2026 — advertisement', href: MH_TEACH_SRC.tetAdvertisement },
        { label: 'MAHATET — postponement notice, 27 June 2026', href: MH_TEACH_SRC.tetPostponement },
        { label: 'MAHATET — fee', href: MH_TEACH_SRC.tetFee },
        { label: 'MAHATET — FAQ 2026', href: MH_TEACH_SRC.tetFaq },
        { label: 'MAHATET — government resolutions', href: MH_TEACH_SRC.tetGrs },
        { label: 'MAHATET November 2025 — final result', href: MH_TEACH_SRC.tetResult2025 },
        { label: 'TAIT 2025 — notification, 25 April 2025', href: MH_TEACH_SRC.taitNotification2025 },
        { label: 'TAIT 2025 — IBPS handout with sample questions', href: MH_TEACH_SRC.taitHandout },
        { label: 'Pavitra — TAIT 2025 notices', href: MH_TEACH_SRC.pavitra2025Notices },
        { label: 'Pavitra — TAIT 2022 cycle', href: MH_TEACH_SRC.pavitra2022 },
        { label: 'School education department — staff portal', href: MH_TEACH_SRC.edustaff },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Maharashtra teaching posts syllabus — the MAHATET sections for Paper I and Paper II under the 2013 resolution, and the TAIT aptitude and intelligence areas.',
      lead: [
        'The council publishes the TET syllabus annexure on the portal; TAIT’s areas are listed in its notification.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'TET — child psychology and pedagogy, 30',
              'Development, learning, inclusive education, assessment, at the level of the diploma or degree course.',
            ],
            [
              'TET — languages, 30 each',
              'Comprehension, grammar and pedagogy of language in the pairs Marathi and English, English and Marathi, or Urdu and Marathi or English.',
            ],
            [
              'TET Paper I — mathematics and environmental studies, 30 each',
              'The content of classes 1 to 5 at secondary difficulty, with pedagogy.',
            ],
            [
              'TET Paper II — mathematics and science or social studies, 60',
              'Classes 6 to 8 content with pedagogy; the choice follows the subject to be taught.',
            ],
            [
              'TAIT — aptitude, 120',
              'Mathematical ability, speed and accuracy, English and Marathi language ability, spatial ability, and art, interest, adjustment and personality.',
            ],
            [
              'TAIT — intelligence, 80',
              'Comprehension, classification, correlation, series, reasoning and inference, coding, symbolic language, rhythmic arrangement.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'MAHATET syllabus', href: MH_TEACH_SRC.tetSyllabus },
            { label: 'TAIT 2025 notification — areas', href: MH_TEACH_SRC.taitNotification2025 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Maharashtra teaching posts exam pattern — MAHATET 150-question papers at 60 per cent, TAIT 200 marks in 120 minutes with no penalty, and Pavitra recommendation.',
      lead: [
        'A pass mark for the TET, a rank for TAIT, and a portal that turns the rank into a post.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['TET — 150 questions, 150 marks, 2½ hours', 'Paper I for classes 1 to 5, Paper II for 6 to 8; OMR; nine mediums.'],
            ['TET pass', '60 per cent; 55 for SC, ST, VJ-NT, SBC, OBC, PwD; 45 for ex-servicemen and martyrs’ families.'],
            ['TAIT — 200 questions, 200 marks, 120 minutes', 'Online, omnibus, no penalty, no subject content.'],
            ['Pavitra', 'One to one without interview; one to three with a 30-mark interview; score valid for one selection.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Maharashtra teaching posts previous papers — MAHATET papers and keys from 2013 to 2025 on the portal, and the TAIT sample handout.',
      lead: [
        'The council publishes every TET paper and key since 2013; TAIT, being an online test by IBPS, has only its sample handout.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'MAHATET 2013 to November 2025', note: 'Paper I and Paper II with final keys, on the portal’s question-paper page; the November 2025 final keys of 12 January 2026.' },
            { text: 'TAIT', note: 'the IBPS information handout with sample questions in English and Marathi for the 2025 test; no papers are released.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MAHATET — previous question papers and keys', href: MH_TEACH_SRC.tetPapers },
            { label: 'TAIT 2025 — sample questions and instructions', href: MH_TEACH_SRC.taitHandout },
            { label: 'State TET guides', to: '/government-exams/teaching-net/state-tet/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Maharashtra teaching posts mock tests — 150-question TET sittings in two and a half hours, and 200-question TAIT sittings in two hours without penalty.',
      lead: [
        'Two different disciplines: a pass mark to clear, and a rank to climb with every question attempted.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'TET — 150 questions in 150 minutes', text: 'From the portal’s papers, in the medium you will sit. Ninety to pass; the language and pedagogy sections are where candidates from a subject background fall short.' },
            { title: 'TAIT — 200 questions in 120 minutes', text: 'Thirty-six seconds a question, no penalty: attempt everything. The aptitude questions reward speed; the intelligence questions reward pattern-spotting.' },
            { title: 'Know the cut that matters', text: 'Pavitra recommends by TAIT rank against the posts and preferences; the 2026 first list filled two-thirds of the posts advertised.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Maharashtra teaching posts preparation — waiting for the re-scheduled TET, the next TAIT, and the Pavitra rounds still to come from TAIT 2025.',
      lead: [
        'The TET is postponed, the next TAIT is not notified, and the Pavitra rounds are the live process.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From qualification to appointment',
          items: [
            { title: 'Watch the council for the TET date', text: 'The June 2026 test is postponed without date; the council will publish the revised date on its site and has warned against social-media rumours.' },
            { title: 'Hold the TET before the next TAIT', text: 'Pavitra requires the TET for classes 1 to 8 at self-certification; a TAIT score without it cannot be used for those posts.' },
            { title: 'Prepare TAIT as an aptitude test', text: 'No subject knowledge; speed, reasoning and language ability, in the medium chosen.' },
            { title: 'Self-certify carefully on Pavitra', text: 'Qualification cut-off dates apply — 14 May 2025 for education and 25 September 2025 for professional qualifications in the 2025 cycle — and a wrong claim voids the selection.' },
            { title: 'Follow the rounds', text: 'First list, converted round, with-interview list; grievances by e-mail within the window; document verification at the management.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Maharashtra teaching posts study material — the D.El.Ed and B.Ed pedagogy course, state textbooks for classes 1 to 8, grammars, and TAIT reasoning practice.',
      lead: [
        'The TET is set on the school textbooks and the training course; TAIT on speed and reasoning.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By section.',
          head: ['Section', 'What to read', 'Note'],
          rows: [
            ['Child psychology and pedagogy', 'The D.El.Ed or B.Ed psychology and pedagogy papers', 'Thirty marks in each TET paper.'],
            ['Languages', 'Marathi, English or Urdu grammar and comprehension with the pedagogy of language', 'Sixty marks in each TET paper.'],
            ['Mathematics, environmental studies, science, social studies', 'Balbharati textbooks for classes 1 to 8 with the pedagogy of each', 'Sixty marks.'],
            ['TAIT aptitude', 'Speed arithmetic, Marathi and English usage, spatial puzzles', 'A hundred and twenty questions.'],
            ['TAIT intelligence', 'A reasoning workbook — series, coding, classification, inference', 'Eighty questions.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Teaching exam preparation', to: '/government-exams/teaching-net/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the MAHATET 2026 exam?',
      a: 'It has no date. The June 2026 test — notified 25 March, applications to 24 April, moved from 21 to 28 June — was postponed by the council’s notice of 27 June 2026, the day before the paper, after Bhiwandi police found persons holding material with questions matching it and registered a case. The council said a revised date would be published on its site and warned against rumours; none had been published at 11 September 2026.',
    },
    {
      q: 'What is the MAHATET exam pattern and pass mark?',
      a: 'Two papers of 150 questions and 150 marks in two and a half hours each, on OMR. Paper I, for classes 1 to 5: child psychology and pedagogy, two languages, mathematics and environmental studies at 30 each. Paper II, for classes 6 to 8: the same first three sections and mathematics and science or social studies for 60. The pass mark is 60 per cent, 55 for SC, ST, VJ-NT, SBC, OBC and PwD candidates and 45 for ex-servicemen and the families of the fallen. No negative marking is stated.',
    },
    {
      q: 'What is TAIT?',
      a: 'The Teacher Aptitude and Intelligence Test, the council’s online test of 200 questions and 200 marks in 120 minutes — 120 of aptitude and 80 of intelligence, omnibus, in Marathi, English or Urdu, with no penalty for a wrong answer and no subject content — whose score is the merit for teacher recruitment on the Pavitra portal. TAIT 2025 was held from 27 May to 5 June 2025 with 2,11,308 candidates and its result published on 18 August 2025. No TAIT 2026 has been notified.',
    },
    {
      q: 'What is the Pavitra portal and what happened in 2026?',
      a: 'The school education department’s recruitment portal, on which every management advertises teaching posts and candidates with a TAIT score lock preferences. In the TAIT 2025 round, advertisements ran from 1 May to 20 August 2026, preferences were locked from 6 to 16 August, and the first without-interview list of 27 August 2026 recommended 13,119 candidates against 19,754 posts — 8,481 of them in zilla parishads. A converted round for unfilled quota posts and the with-interview list follow.',
    },
    {
      q: 'Is there an interview for teacher recruitment in Maharashtra?',
      a: 'Not for most posts. Managements recruit through Pavitra either without interview, at one to one from TAIT merit, or with an interview and teaching demonstration of 30 marks under the 2019 resolution, at one to three. The 2026 first list covered the without-interview posts; the with-interview list is to follow.',
    },
    {
      q: 'What is the fee for MAHATET and TAIT?',
      a: 'MAHATET 2026: ₹1,000 for one paper and ₹1,200 for both, or ₹700 and ₹900 for SC, ST and PwD candidates, online only. TAIT 2025: ₹950 for unreserved candidates and ₹850 for backward classes, EWS, SEBC, orphans and PwD, not refundable.',
    },
    {
      q: 'What is the qualification for a primary teacher in Maharashtra?',
      a: 'For classes 1 to 5, HSC with 50 per cent and a two-year D.El.Ed, or a four-year B.El.Ed, or a degree with 50 per cent and B.Ed with the six-month bridge course, plus MAHATET or CTET Paper I. For classes 6 to 8, a degree in the subject with 50 per cent and D.El.Ed or B.Ed, plus TET Paper II. Five per cent relaxation in qualifying marks for the reserved categories. Secondary posts need a subject degree and B.Ed without TET.',
    },
    {
      q: 'What is the Shikshan Sevak pay?',
      a: 'A consolidated monthly pay before the regular scale — ₹16,000 for teachers of classes 1 to 5 and 6 to 8 and ₹18,000 for classes 9 and 10, as printed on the 2026 Pavitra recommendation lists. The figure for junior college posts was not found in the documents read.',
    },
  ],
}

/* ── Maharashtra technical posts ────────────────────────────────
   Engineering posts through MPSC's engineering services — civil,
   electrical and mechanical, each with its own mains after a combined
   preliminary — and through the boards and corporations that recruit
   directly, of which Maharashtra Jeevan Pradhikaran's 2025 round is the
   latest. The MPSC rows are from the commission's advertisement list;
   their contents from copies of its documents. */
const MH_TECH_SRC = {
  mjp: 'https://mjp.maharashtra.gov.in/',
  mjpAdvt: 'https://mjp.maharashtra.gov.in/wp-content/uploads/2025/11/advertisement-प्दि.4.11.2025.pdf',
  mjpHandout: 'https://mjp.maharashtra.gov.in/wp-content/uploads/2026/02/MJP-VARIOUS-POST-2026-IH-English-Marathi.pdf',
  mjpJeMechResult: 'https://mjp.maharashtra.gov.in/wp-content/uploads/2026/06/Junior-Engineer-MECHANICALGr.B-1-1.pdf',
  mahagenco: 'https://www.mahagenco.in/career-advertisement',
  mahatransco: 'https://www.mahatransco.in/career/active',
  msedcl: 'https://www.mahadiscom.in/en/recruitment-career-options/',
  wrd: 'https://wrd.maharashtra.gov.in/',
  barti: 'https://mahasamvad.in/199489/',
}

const MH_TECHNICAL = {
  slug: 'technical-posts',
  path: '/government-exams/state/maharashtra/technical-posts/',
  name: 'Maharashtra Technical Posts',
  fullName: 'MPSC engineering services and board and corporation engineer recruitment',
  authority: 'Maharashtra Public Service Commission; Maharashtra Jeevan Pradhikaran and the other recruiting bodies',
  official: OFFICIAL,
  seoTitle: 'Maharashtra Engineering Services & JE Recruitment 2026: MPSC, MJP, Utilities',
  metaDescription:
    'Maharashtra engineering posts — MPSC’s civil and electrical engineering services mains of 2025-26, the combined prelims, MJP’s 208 JE posts, and the utilities.',
  lead: [
    'Maharashtra’s engineering posts divide between the Public Service Commission and the boards. The commission recruits the public works, water resources and other departments’ assistant executive engineers and assistant engineers through its engineering services — civil, electrical and mechanical — each with its own main examination after a combined preliminary shared, in the civil service’s case, with the State Services. The boards and corporations recruit their junior engineers directly through an outsourced online test: the Maharashtra Jeevan Pradhikaran, the water and sewerage authority, ran the latest such round from November 2025 to July 2026.',
    'Nothing is open at the date checked, but the commission has two mains cycles in progress. The civil engineering services main examination for 2025 — Advt 003/2026 of 13 March 2026, reported at 296 posts — was examined on 16 May 2026; the electrical engineering services main for 2025 was notified as Advt 012/2026 on 17 April 2026; and a corrigendum of 7 August 2026 to the 2022 mechanical deputy engineer advertisement revised its posts, took fresh applications from special backward class candidates and postponed its screening test. The utilities have no external engineer recruitment open.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'MPSC for the departments’ engineering services; MJP, the utilities and the zilla parishads directly'],
    ['Open now', 'Nothing external; the mechanical deputy engineer corrigendum of 7 August 2026 reopened applications for SBC candidates only'],
    ['MPSC civil 2025', 'Combined prelims 9 November 2025; result 4 March 2026; mains Advt 003/2026, 16 May 2026; result awaited'],
    ['MPSC electrical 2025', 'Prelims held; mains notified 17 April 2026 as Advt 012/2026'],
    ['MJP 2025-26', '208 engineering posts among 11 cadres; 100 questions, 200 marks, 120 minutes, a quarter off per wrong answer; examined 28 February to 5 March 2026'],
    ['Utilities', 'MAHAGENCO, MAHATRANSCO and MSEDCL — no engineer recruitment open; MSEDCL closed its 2023 and 2024 rounds on 31 July 2026'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The commission’s route runs through the Maharashtra Civil Services Gazetted Combined Preliminary Examination, which in the 2025 cycle — Advt 012/2025 of 18 March 2025 — screened for the State Services, the forest service and 114 civil engineering posts of the public works department together, on the two-paper preliminary described on the Rajyaseva page. Postponed from 28 September to 9 November 2025 for floods, its civil engineering result of 4 March 2026 qualified about 4,500 candidates for the Maharashtra Civil Engineering Services Main Examination 2025, notified as Advt 003/2026 on 13 March with applications to 30 March and the papers on 16 May 2026 at six centres. The mains posts are reported as 28 assistant executive engineers in Group A, 86 assistant engineers Grade 1 in Group A and 182 assistant engineers Grade 2 in Group B.',
    },
    {
      type: 'p',
      text: 'The Jeevan Pradhikaran’s round shows the board route in full. Its advertisement 1/2025 of 4 November 2025 offered 144 junior engineers civil and 16 mechanical in Group B at ₹38,600 to ₹1,22,800, and 48 civil engineering assistants in Group C at ₹25,500 to ₹81,100, among eleven cadres, with applications from 20 November to 19 December 2025 through IBPS at ₹1,000, or ₹900 for reserved categories. The paper was 100 questions and 200 marks in 120 minutes — Marathi 10, English 10, general knowledge 15, intelligence 15 and the technical subject 50 at diploma level — online, normalised, with a quarter of the marks off per wrong answer and 45 per cent to enter the merit list. Examined on 28 February and 2 and 5 March 2026, it published the mechanical and assistant results on 10 June and was still awaiting the civil junior engineer result from IBPS on 31 July.',
    },
    {
      type: 'list',
      title: 'Where else engineers are recruited',
      items: [
        { text: 'Mechanical engineering services', note: 'the 2022 deputy engineer advertisement 102/2022 is still in process — a corrigendum of 10 December 2025 on SEBC and OBC reservation and one of 7 August 2026 revising the posts, taking fresh SBC applications and postponing the screening test. No newer mechanical cycle is on the list.' },
        { text: 'Electrical engineering services', note: 'the 2025 preliminary was held and its result declared before April 2026, and the mains notified on 17 April as Advt 012/2026; the BARTI scheme is funding SC candidates’ mains preparation.' },
        { text: 'Zilla parishads', note: 'junior engineers civil for works and rural water supply, and civil engineering assistants, in the 2023 rural development round of about 19,000 posts; no 2025 or 2026 round.' },
        { text: 'Public works and water resources departments', note: 'their direct junior engineer rounds — 2023 for both — have no successor advertised; the public works site was down at the date checked.' },
      ],
    },
    {
      type: 'note',
      title: 'The scheme of the commission’s engineering examinations',
      text: 'The commission publishes the scheme of its gazetted technical services examinations on its site, and the documents were not readable at the date checked. Accounts of the scheme describe a 200-mark preliminary of 100 questions in an hour, a mains of two papers of 200 in two hours each, a quarter-mark deduction per wrong answer and an interview of 50 marks; the interview figure conflicts across sources and none of it is quoted here as the commission’s text. A candidate should read the scheme document linked from the advertisement.',
    },
  ],
  stages: [
    {
      name: 'MPSC — combined preliminary',
      mode: 'Shared with the State Services for civil engineering',
      detail:
        'The gazetted combined preliminary, on the two-paper objective scheme, screens for the civil engineering service alongside the State Services and the forest service; the electrical and mechanical services have their own preliminaries. Result by service.',
    },
    {
      name: 'MPSC — engineering services main examination',
      mode: 'Notified separately by service',
      detail:
        'Civil 2025 as Advt 003/2026, examined 16 May 2026 at Amravati, Chhatrapati Sambhajinagar, Nagpur, Nashik, Navi Mumbai and Pune; electrical 2025 as Advt 012/2026 of 17 April 2026. Mains application and fee separately — ₹544 and ₹344 reported for the civil mains.',
    },
    {
      name: 'MPSC — interview and recommendation',
      mode: 'Per the scheme',
      detail:
        'Civil 2024 published its mains result in November 2025 with interviews to follow; the 2023 provisional merit list came in May 2025. The 2025 mains result was awaited at the date checked.',
    },
    {
      name: 'Boards — one online test, then verification',
      mode: 'MJP: 200 marks, 120 minutes, normalised; 45 per cent',
      detail:
        'A single computer-based paper with a 50-question technical section, a quarter off per wrong answer, and document verification for the merit list. No interview.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No engineering application is open to the public. On the commission’s advertisement list the latest engineering rows are the corrigendum of 7 August 2026 to Advt 102/2022 for deputy engineers in the mechanical engineering service — revised posts and reservation, new applications from SBC candidates and a postponed screening test — the electrical engineering services main examination 2025 notified on 17 April 2026 as Advt 012/2026, and the civil engineering services main examination 2025 notified on 13 March 2026 as Advt 003/2026. The civil mains was held on 16 May 2026 and its result had not been published. The Jeevan Pradhikaran published the results of its junior engineer mechanical, civil engineering assistant and three non-technical cadres on 10 June 2026 and said on 31 July that the junior engineer civil result was still awaited from IBPS; no result for it appeared by the date checked. MAHAGENCO’s career page of 25 August 2026, MAHATRANSCO’s and MSEDCL’s carry no external engineer recruitment.`,
    },
    {
      type: 'table',
      caption: 'The commission’s engineering rows, from its advertisement list.',
      head: ['Advertisement', 'Subject', 'Date'],
      rows: [
        ['102/2022', 'Deputy Engineer (Mechanical), Maharashtra Mechanical Engineering Services, Group A — corrigendum on revised posts and reservation, new SBC applications and postponement of the screening test', '7 August 2026'],
        ['012/2026', 'Maharashtra Electrical Engineering Services Main Examination 2025 — notification', '17 April 2026'],
        ['003/2026', 'Maharashtra Civil Engineering Services Main Examination 2025 — notification', '13 March 2026'],
        ['102/2022', 'Deputy Engineer (Mechanical) — corrigendum on SEBC and OBC reservation', '10 December 2025'],
        ['054/2025', 'Maharashtra Civil Engineering Services Main Examination 2024 — notification', '9 April 2025'],
      ],
    },
    {
      type: 'table',
      caption: 'The Jeevan Pradhikaran round, from its advertisement and notices.',
      head: ['Event', 'Detail'],
      rows: [
        ['Advertisement 1/2025', '4 November 2025 — 11 cadres including JE civil 144, JE mechanical 16, civil engineering assistant 48'],
        ['Applications', '20 November to 19 December 2025 through IBPS; ₹1,000, ₹900 reserved, ex-servicemen nil'],
        ['Examination', '28 February, 2 March and 5 March 2026, rescheduled from 25 to 27 February'],
        ['Results', 'JE mechanical, civil engineering assistant and three non-technical cadres 10 June 2026; JE civil and five others awaited from IBPS at 31 July'],
      ],
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'Maharashtra Jeevan Pradhikaran', href: MH_TECH_SRC.mjp },
        { label: 'MAHAGENCO — career advertisements', href: MH_TECH_SRC.mahagenco },
        { label: 'MAHATRANSCO — active careers', href: MH_TECH_SRC.mahatransco },
        { label: 'MSEDCL — recruitment', href: MH_TECH_SRC.msedcl },
        { label: 'Water resources department', href: MH_TECH_SRC.wrd },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'MPSC civil engineering services main 2025, as reported from Advt 003/2026. Age on 1 July 2025.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'BE or BTech in civil engineering, including civil and water management, civil and environmental, structural, and construction engineering or technology; knowledge of Marathi'],
        ['Age', '18 or 19 to 38 unreserved; 43 for backward classes, EWS, orphans, sportspersons and ex-servicemen; 45 PwD'],
        ['Fee', '₹544; ₹344 for reserved categories'],
        ['Posts', 'Assistant Executive Engineer (Civil) Group A 28; Assistant Engineer Grade 1 (Civil) Group A 86; Assistant Engineer Grade 2 (Civil) Group B 182 — 296'],
      ],
    },
    {
      type: 'table',
      caption: 'Jeevan Pradhikaran 2025, from the advertisement. Age on the closing date, 19 December 2025.',
      head: ['Post', 'Qualification', 'Pay', 'Posts'],
      rows: [
        ['Junior Engineer (Civil), Group B', 'A diploma or degree in civil engineering', 'S-14, ₹38,600 to ₹1,22,800', '144'],
        ['Junior Engineer (Mechanical), Group B', 'A three-year diploma in mechanical, automobile or production engineering from the state board', 'S-14', '16'],
        ['Civil Engineering Assistant, Group C', 'SSC and a civil engineering degree or diploma', 'S-8, ₹25,500 to ₹81,100', '48'],
        ['Age', '18 minimum for Group C, 19 for Group B; 38 unreserved; 43 backward classes, EWS, orphans and sportspersons; 45 PwD and project-affected; 55 part-time graduates', '—', '—'],
        ['Fee', '₹1,000; ₹900 for backward classes, EWS, orphans and PwD; ex-servicemen nil', '—', '—'],
      ],
    },
    {
      type: 'p',
      text: 'Both routes require Marathi. The commission applies its standing rules on reservation certificates and the SEBC litigation caveat; the Pradhikaran required a Maharashtra domicile for reservation claims and the small-family declaration, and issues no copies of question papers or answer sheets.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Jeevan Pradhikaran junior engineer paper, from Appendix A of the advertisement and the IBPS handout.',
      head: ['Section', 'Questions', 'Standard'],
      rows: [
        ['Marathi', '10', 'HSC'],
        ['English', '10', 'HSC'],
        ['General knowledge', '15', 'Degree'],
        ['Intelligence test', '15', 'Degree'],
        ['Technical subject', '50', 'Diploma'],
        ['Total', '100 questions, 200 marks, 120 minutes', 'Online, normalised across sessions; one-fourth of the question’s marks off per wrong answer; 45 per cent to enter the merit list; no interview'],
      ],
    },
    {
      type: 'table',
      caption: 'MPSC engineering services — the stages as the advertisements structure them. The scheme document was not read; marks are as reported and not quoted as the commission’s text.',
      head: ['Stage', 'Reported shape'],
      rows: [
        ['Preliminary', 'One objective paper of 100 questions and 200 marks in an hour — Marathi, English and general ability — with a quarter off per wrong answer; for civil, the gazetted combined preliminary'],
        ['Mains', 'Two objective papers of 100 questions and 200 marks in two hours each, on the discipline'],
        ['Interview', 'Reported at 50 marks; conflicting accounts exist'],
      ],
    },
    {
      type: 'note',
      title: 'Read the scheme with the advertisement',
      text: 'The commission’s engineering mains notifications refer to the scheme published on its site for the papers, marks, medium and negative marking, and the 2026 mechanical corrigendum refers to a screening test rather than a preliminary — the 2022 deputy engineer advertisement was a screening-test recruitment. The figures reported for the commission’s engineering scheme differ between accounts; the Jeevan Pradhikaran’s scheme, by contrast, is quoted from its own advertisement and handout.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The commission’s advertisement rows — numbers, subjects and dates — were read on its site; the contents of Advt 003/2026 and 012/2026 are from copies and reports of its documents and are labelled as such. The Jeevan Pradhikaran advertisement of 4 November 2025, the IBPS handout, the reschedule notice, the result PDFs of June 2026 and the notice of 31 July 2026 were read on its site. The MAHAGENCO, MAHATRANSCO, MSEDCL and water resources pages were read on the date checked; the public works department’s site returned an error. The 2023 zilla parishad round is on the Zilla Parishad page.`,
    },
    {
      type: 'links',
      title: 'Official pages and documents',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — results of examinations', href: MPSC.results },
        { label: 'MPSC — previous question papers', href: MPSC.papers },
        { label: 'MJP — advertisement 1/2025, 4 November 2025', href: MH_TECH_SRC.mjpAdvt },
        { label: 'MJP — IBPS information handout, 2026', href: MH_TECH_SRC.mjpHandout },
        { label: 'MJP — junior engineer mechanical result, 10 June 2026', href: MH_TECH_SRC.mjpJeMechResult },
        { label: 'BARTI note on the electrical engineering services mains, 30 April 2026', href: MH_TECH_SRC.barti },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Maharashtra engineering posts syllabus — the discipline at degree level for MPSC’s services and diploma level for junior engineer boards, and general sections.',
      lead: [
        'The commission publishes each service’s syllabus with its scheme; the boards set the technical section at the diploma syllabus.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'MPSC — civil engineering services',
              'Structural analysis and design, geotechnical, transportation, water resources and environmental engineering, surveying, construction management, at degree level, across the mains papers.',
            ],
            [
              'MPSC — electrical and mechanical services',
              'The discipline at degree level — machines, power systems, control and electronics; thermal, design, manufacturing and fluid mechanics.',
            ],
            [
              'MPSC — general',
              'Marathi, English and general ability in the preliminary; the gazetted combined preliminary for civil.',
            ],
            [
              'Boards — junior engineer',
              'Marathi and English at HSC level, general knowledge and reasoning at degree level, and the discipline at diploma level — half the paper.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus sources',
          items: [
            { label: 'MPSC — candidate information', href: MPSC.home },
            { label: 'MJP — advertisement with the scheme', href: MH_TECH_SRC.mjpAdvt },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Maharashtra engineering posts exam pattern — MPSC’s preliminary, two-paper mains and interview, and the boards’ 200-mark online test with negative marking.',
      lead: [
        'Two routes: a commission examination with a mains and an interview, or one online test at a board.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Side by side.',
          head: ['Feature', 'MPSC engineering services', 'MJP and boards'],
          rows: [
            ['Stages', 'Preliminary, mains, interview', 'One online test, verification'],
            ['Paper', 'Objective, 200-mark papers', '100 questions, 200 marks, 120 minutes'],
            ['Technical weight', 'The mains', '50 of 100 questions'],
            ['Negative marking', 'A quarter, as reported', 'One-fourth of the question’s marks'],
            ['Qualifying', 'Cut-offs by category', '45 per cent for the merit list'],
            ['Interview', 'Yes', 'None'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Maharashtra engineering posts previous papers — the commission’s engineering services papers and keys, and the boards’ sample handouts.',
      lead: [
        'The commission publishes its engineering papers and keys; the boards publish handouts and keys but not papers.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'MPSC civil engineering services', note: 'the 2024 and 2025 combined preliminaries and the mains papers of May 2025 and May 2026, with keys, in the commission’s archive.' },
            { text: 'MPSC electrical and mechanical', note: 'the preliminaries and mains of the recent cycles in the same archive.' },
            { text: 'MJP 2026', note: 'the IBPS handout with sample questions; the Pradhikaran issues no copies of papers or answer sheets.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MPSC — previous question papers', href: MPSC.papers },
            { label: 'MPSC — answer keys', href: MPSC.keys },
            { label: 'MJP — sample questions and instructions', href: MH_TECH_SRC.mjpHandout },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Maharashtra engineering posts mock tests — 200-mark objective papers on the discipline, and the board paper with fifty technical questions in two hours.',
      lead: [
        'Score at a quarter off per wrong answer in both routes.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Board paper — 100 questions in 120 minutes', text: 'Ten Marathi, ten English, fifteen general knowledge, fifteen reasoning, fifty technical at diploma level. Forty-five per cent is the floor for the merit list.' },
            { title: 'MPSC preliminary — 100 questions in an hour', text: 'Marathi, English and general ability at two marks a question; for civil, the gazetted combined preliminary’s two papers.' },
            { title: 'MPSC mains — two papers of 200', text: 'The discipline in two hours each, from the commission’s archive.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Maharashtra engineering posts preparation — following the commission’s service-by-service cycles, the boards’ short windows, and the pending civil mains result.',
      lead: [
        'Two calendars to watch: the commission’s, by service, and the boards’, which open for a month at a time.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From advertisement to recommendation',
          items: [
            { title: 'Search the commission’s list by service', text: 'Civil, electrical and mechanical are notified separately, and the civil preliminary is the gazetted combined one; the mains notification comes within weeks of the preliminary result.' },
            { title: 'Register on IBPS for the boards', text: 'The Pradhikaran’s window was a month; the paper followed in ten weeks.' },
            { title: 'Prepare the discipline at the right level', text: 'Degree level for the commission’s services, diploma level for junior engineer posts — half the board paper.' },
            { title: 'Do not neglect the general sections', text: 'Half the board paper and the whole of the commission’s preliminary.' },
            { title: 'Watch the results pages', text: 'The commission by advertisement number; the boards on their own sites, cadre by cadre and sometimes months apart.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Maharashtra engineering posts study material — degree and diploma texts by discipline, GATE-level objective banks, and Marathi and English readers.',
      lead: [
        'The discipline at the right level, an objective bank, and the state’s general studies.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Discipline — degree level', 'Standard undergraduate texts and a GATE-level objective bank', 'MPSC mains.'],
            ['Discipline — diploma level', 'The state board of technical education syllabus and texts', 'Board junior engineer papers.'],
            ['General ability', 'State board textbooks; a year of current affairs; a reasoning workbook', 'MPSC preliminary; board general sections.'],
            ['Marathi and English', 'HSC-level grammar and comprehension', 'Ten questions each in the board paper.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            { label: 'Zilla Parishad posts — junior engineers', to: '/government-exams/state/maharashtra/zilla-parishad-posts/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any Maharashtra engineering recruitment open now?',
      a: 'Not to the public. The commission’s civil engineering services main of 16 May 2026 awaits its result and its electrical services main was notified in April; the corrigendum of 7 August 2026 to the 2022 mechanical deputy engineer advertisement reopened applications for special backward class candidates only. The Jeevan Pradhikaran’s 2025 round is at results, and MAHAGENCO, MAHATRANSCO and MSEDCL have no external engineer recruitment open.',
    },
    {
      q: 'What is the MPSC civil engineering services exam?',
      a: 'The commission’s recruitment to the public works and water resources departments’ assistant executive engineer and assistant engineer posts. The 2025 cycle ran through the gazetted combined preliminary of 9 November 2025 — Advt 012/2025 with 114 civil posts — to the Maharashtra Civil Engineering Services Main Examination 2025, Advt 003/2026 of 13 March 2026, examined on 16 May 2026 for a reported 296 posts: 28 assistant executive engineers, 86 assistant engineers Grade 1 and 182 Grade 2. The result was awaited at 11 September 2026.',
    },
    {
      q: 'What is the MJP junior engineer exam pattern?',
      a: 'One online paper of 100 questions and 200 marks in 120 minutes — Marathi 10, English 10, general knowledge 15, intelligence 15 and the technical subject 50 at diploma level — normalised across sessions, with one-fourth of the question’s marks deducted per wrong answer and 45 per cent to enter the merit list. No interview. The 2025 round was examined on 28 February and 2 and 5 March 2026.',
    },
    {
      q: 'What is the qualification for MJP junior engineer?',
      a: 'A diploma or degree in civil engineering for junior engineer civil, and a three-year diploma in mechanical, automobile or production engineering from the state board for junior engineer mechanical, at pay level S-14; SSC and a civil engineering degree or diploma for civil engineering assistant at S-8. Age 19 to 38 for Group B and 18 to 38 for Group C, 43 for reserved categories and 45 for PwD, on 19 December 2025.',
    },
    {
      q: 'What is the fee for Maharashtra engineering recruitment?',
      a: 'The commission’s civil engineering mains charged ₹544 for unreserved candidates and ₹344 for reserved categories, as reported. The Jeevan Pradhikaran charged ₹1,000, ₹900 for backward classes, EWS, orphans and PwD, and nothing for ex-servicemen.',
    },
    {
      q: 'Is there negative marking in Maharashtra engineering exams?',
      a: 'In the Jeevan Pradhikaran’s paper, one-fourth of the marks assigned to a question is deducted per wrong answer, as its IBPS handout states. The commission’s engineering scheme is reported to deduct a quarter mark as well; its scheme document was not read and the figure is not quoted as its text.',
    },
    {
      q: 'Do MAHAGENCO, MAHATRANSCO or MSEDCL have engineer recruitment in 2026?',
      a: 'Not open. MAHAGENCO’s career page of 25 August 2026 carries only director-level and deputation notices; MAHATRANSCO’s only apprentice lists, internal promotions and a director advertisement; MSEDCL’s notices of 31 July 2026 record the completion of its 2023 and 2024 recruitments. A press claim of 1,492 posts has no official counterpart.',
    },
    {
      q: 'Where are zilla parishad junior engineer posts covered?',
      a: 'On the Zilla Parishad posts page. The 2023 rural development round recruited junior engineers civil for works and rural water supply and civil engineering assistants among about 19,000 posts across 34 zilla parishads, on a 200-mark online paper with a 40-question technical section; no 2025 or 2026 round has been notified.',
    },
  ],
}

/* ── Zilla Parishad posts ───────────────────────────────────────
   The rural development department's Group C recruitment — gram sevaks,
   health workers, junior engineers, junior assistants, extension officers
   and the rest — advertised by each of the 34 zilla parishads under one
   sanction and examined by one agency. The 2023 round of about 19,000
   posts is still being closed out through additional lists; no 2025 or
   2026 round has been sanctioned, and the gram sevak has been renamed. */
const MH_ZP_SRC = {
  rdd: 'https://rdd.maharashtra.gov.in/',
  rddCirculars: 'https://rdd.maharashtra.gov.in/document-category/%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%95%E0%A5%87/',
  gr2022: 'https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202211151123036720.pdf',
  sangliAdvt: 'https://cdn.s3waas.gov.in/s342a0e188f5033bc65bf8d78622277c4e/uploads/2023/08/2023080477.pdf',
  sangliNotice: 'https://sangli.nic.in/en/notice/direct-recruitment-advertisement-for-2023-zilla-parishad-sangli/',
  dhuleNotice: 'https://dhule.gov.in/en/notice/zilla-parishad-recruitment-2023/',
  raigadNotice: 'https://raigad.gov.in/en/notice/raigad-zilla-parishad-direct-service-recruitment-process-2023/',
  zpRaigad: 'https://zpraigad.gov.in/notice-category/%E0%A4%AD%E0%A4%B0%E0%A4%A4%E0%A5%80/',
  zpKolhapur: 'https://www.zpkolhapur.gov.in/notice-category/%E0%A4%AD%E0%A4%B0%E0%A4%A4%E0%A5%80/',
  zpNashik: 'https://zpnashik.maharashtra.gov.in/notice-category/%E0%A4%AD%E0%A4%B0%E0%A4%A4%E0%A5%80/',
  grPanchayatAdhikari: 'https://gramvikaseseva.com/wp-content/uploads/2025/04/grampanchayt-adhikari-name.pdf',
  hcNagpur: 'https://indiankanoon.org/doc/87237856/',
}

const MH_ZP = {
  slug: 'zilla-parishad-posts',
  path: '/government-exams/state/maharashtra/zilla-parishad-posts/',
  name: 'Maharashtra Zilla Parishad Posts',
  fullName: 'Zilla Parishad Group C recruitment — gram sevak, health worker, junior engineer, junior assistant, extension officer and other cadres',
  authority: 'Rural development department; district selection boards of the 34 zilla parishads',
  official: 'rdd.maharashtra.gov.in',
  seoTitle: 'Maharashtra ZP Bharti: 2023 Round Status, Pattern, Eligibility, Next Round',
  metaDescription:
    'Maharashtra Zilla Parishad recruitment — the 2023 round of 19,000 Group C posts across 34 ZPs, its 200-mark paper, eligibility by cadre, and the next round.',
  lead: [
    'The zilla parishads are Maharashtra’s largest rural employer, and their Group C cadres — gram sevaks, health workers and supervisors, pharmacists, junior engineers and civil engineering assistants, junior assistants and stenographers, livestock supervisors, laboratory technicians and the extension officers for agriculture, panchayats and statistics — are recruited district by district by each parishad’s selection board, under one government sanction and on one examination run by one agency. There is no interview, no re-evaluation, and no copy of the paper.',
    'The 2023 round was the first in years and the largest. Under the rural development department’s resolution of 15 November 2022, every parishad advertised in August 2023 for 80 per cent of its direct-recruitment vacancies — about 19,000 posts across the 34 — with applications through IBPS at ₹1,000, an online test of 200 marks in October 2023 and, for the health and gram sevak cadres, in June and July 2024. Three years on, the parishads are still publishing additional selection and waiting lists from those merit lists, and no 2025 or 2026 round has been sanctioned.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'District selection boards of the 34 zilla parishads, under the rural development department’s sanction'],
    ['Latest round', '2023 — advertised 5 August 2023; about 19,000 Group C posts; examined October 2023 and June to July 2024'],
    ['Status', 'Additional selection and waiting lists still being published in 2026; no new round sanctioned'],
    ['Paper', '100 questions, 200 marks, 120 minutes, online; technical posts 40 questions on the subject; 45 per cent to enter the merit list'],
    ['Fee, 2023', '₹1,000; ₹900 for backward classes and orphans; ex-servicemen exempt; per post'],
    ['Renamed', 'Gram sevak and gram vikas adhikari merged as Gram Panchayat Adhikari by resolution of 24 September 2024'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The Sangli advertisement of August 2023 shows a parishad’s round in full: 754 posts in seventeen cadres, from health supervisors and health workers of both kinds, pharmacists and contract gram sevaks to junior engineers civil for works and rural water supply, junior draftsmen, junior assistants and junior assistants for accounts, supervisors, livestock supervisors, laboratory technicians, extension officers for agriculture, panchayats and statistics, and civil engineering assistants. Other parishads added stenographers, senior assistants and the mechanical cadres. Pay ran from S-6 for the junior assistant to S-14 for the junior engineer, with the contract gram sevak on an honorarium of ₹16,000.',
    },
    {
      type: 'p',
      text: 'The examination was one paper of 100 questions and 200 marks in 120 minutes, computer-based in several sessions with normalisation binding on all. For technical posts it carried Marathi, English, general knowledge and reasoning-and-arithmetic at 15 questions each and the technical subject at 40; for the non-technical posts — junior assistant, supervisor, the panchayat and statistics extension officers — the four general sections at 25 each. The difficulty was set at the post’s minimum qualification, the technical questions for junior engineer, pharmacist and laboratory technician were in English only, and 45 per cent of the total was required to enter the merit list. No negative marking clause appears in the advertisement.',
    },
    {
      type: 'list',
      title: 'How the round has played out',
      items: [
        { text: 'Two examination phases', note: 'most cadres in October 2023; the health worker, supervisor and contract gram sevak cadres postponed to June and July 2024 — Raigad’s contract gram sevak paper on 20 June 2024.' },
        { text: 'Lists district by district', note: 'marks lists out of 200, provisional and final selection lists and waiting lists on each parishad’s site, then additional lists for posts left vacant under the department’s letter of 13 June 2025 — Raigad in December 2025 and August 2026, Kolhapur in October 2025 and July 2026, Nashik in May 2026.' },
        { text: 'One year’s validity', note: 'the select list is valid for a year, which the additional lists have stretched by relying on the original merit.' },
        { text: 'The health worker litigation', note: 'the High Court’s Nagpur bench dismissed on 27 March 2026 the petitions of GNM and BSc nursing candidates excluded at verification for the health worker (female) post, holding that the recruitment rules requiring the ANM qualification must be strictly construed.' },
      ],
    },
    {
      type: 'note',
      title: 'The gram sevak has a new name',
      text: 'By the rural development department’s resolution of 24 September 2024, following a cabinet decision of the day before, the gram sevak at pay level S-8 and the gram vikas adhikari at S-12 were merged into one cadre named Gram Panchayat Adhikari at S-8, with a promotion ladder to assistant block development officer, assistant group development officer and block development officer. The next round will advertise the post under that name; the 1967 district service recruitment rules are to be amended to match.',
    },
  ],
  stages: [
    {
      name: 'Sanction and district advertisements',
      mode: 'Department resolution; each parishad advertises',
      detail:
        'The department sanctions a percentage of vacancies and a time-bound programme; each parishad fixes its vacancies and reservation, chooses the agency and advertises. The 2023 sanction of 15 November 2022 covered 80 per cent of vacancies to 15 August 2023.',
    },
    {
      name: 'Application through the agency',
      mode: 'IBPS, per post, ₹1,000 or ₹900',
      detail:
        'Online only, 5 to 25 August 2023, a separate application and fee for each post; no documents at this stage. Age on the closing date; a Maharashtra domicile certificate required.',
    },
    {
      name: 'Online examination',
      mode: '100 questions, 200 marks, 120 minutes, normalised',
      detail:
        'Multiple sessions with normalisation; technical posts 60 general and 40 technical questions, non-technical posts 100 general. Forty-five per cent of the total to enter the merit list; no interview.',
    },
    {
      name: 'Verification and lists',
      mode: 'Provisional list, then final, waiting and additional lists',
      detail:
        'Document verification only for candidates on the provisional list, with originals and two attested copies; ties broken in favour of farmer-suicide-affected families, then age, then qualification. The select list is valid for a year.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No zilla parishad recruitment is open, and no statewide sanction for a 2025 or 2026 round appears in the rural development department’s circulars or resolutions, read to 5 August 2026, or on the recruitment pages of the parishads checked; the department has made no official statement on a next round, and the vacancy figures circulating are compilations. The 2023 round continues to close: Raigad published additional selection and waiting lists for senior and junior assistants, civil engineering assistants, junior engineers, livestock supervisors and contract gram sevaks on 23 December 2025, for health workers on 23 March 2026 and for contract gram sevaks again on 14 August 2026; Kolhapur’s health worker lists came on 30 October 2025 and 30 July 2026; Nashik revised its health worker list on 4 May 2026. The Nagpur bench of the High Court dismissed the GNM and BSc nursing candidates’ petitions on 27 March 2026.`,
    },
    {
      type: 'table',
      caption: 'The 2023 round, from the department’s resolution and the Sangli advertisement.',
      head: ['Event', 'Detail'],
      rows: [
        ['Sanction', 'Rural development department resolution of 15 November 2022 — 80 per cent of Group C direct-recruitment vacancies, excluding drivers and Group D, through the district selection boards, to 15 August 2023'],
        ['Advertisements', 'By each parishad, August 2023 — Sangli 754 posts in 17 cadres; about 19,000 across the 34'],
        ['Applications', '5 to 25 August 2023 through IBPS; ₹1,000, ₹900 for backward classes and orphans, ex-servicemen exempt; per post'],
        ['Age on 25 August 2023', '18 to 38, or 43 for backward classes, with a two-year relaxation to the end of 2023 — 40 and 45; candidates of the abandoned March 2019 round allowed if over age'],
        ['Examination', 'October 2023 for most cadres; health workers, supervisors and contract gram sevaks in June and July 2024'],
        ['Lists', 'Marks lists, selection and waiting lists on the parishad sites from late 2023; additional lists under the department’s letter of 13 June 2025 through 2026'],
      ],
    },
    {
      type: 'links',
      title: 'Check the department and the parishads directly',
      items: [
        { label: 'Rural development department', href: MH_ZP_SRC.rdd },
        { label: 'Rural development department — circulars', href: MH_ZP_SRC.rddCirculars },
        { label: 'ZP Raigad — recruitment notices', href: MH_ZP_SRC.zpRaigad },
        { label: 'ZP Kolhapur — recruitment notices', href: MH_ZP_SRC.zpKolhapur },
        { label: 'ZP Nashik — recruitment notices', href: MH_ZP_SRC.zpNashik },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'By cadre, from the Sangli advertisement of 2023. Age on the closing date; the general limits were 18 to 38, or 43 for backward classes, before the 2023 relaxation.',
      head: ['Cadre', 'Qualification', 'Pay level'],
      rows: [
        ['Contract gram sevak — now Gram Panchayat Adhikari', 'HSC with 60 per cent, or a three-year engineering diploma, or BSW, or SSC with a two-year agriculture diploma, or an agriculture degree; a computer certificate such as MS-CIT at application; preference for rural or social work experience', '₹16,000 honorarium on contract'],
        ['Health worker, male', 'SSC with science; the twelve-month multipurpose worker course within three chances after appointment; 50 per cent of posts with preference for seasonal spraying workers', 'S-8'],
        ['Health worker, female', 'ANM, registered with the nursing council — GNM and BSc nursing were held not to qualify', 'S-8'],
        ['Health supervisor', 'A science degree and the multipurpose worker course', 'S-13'],
        ['Pharmacist', 'A pharmacy degree or diploma, registered under the Pharmacy Act', 'S-10'],
        ['Junior engineer, civil', 'A degree or three-year diploma in civil engineering', 'S-14'],
        ['Civil engineering assistant', 'SSC and a one-year civil engineering assistant course, a draftsman or construction supervisor course, or a civil engineering diploma or degree', 'S-8'],
        ['Junior draftsman', 'SSC and a recognised civil draftsman course', 'S-8'],
        ['Junior assistant, and for accounts', 'SSC and typing certificates — Marathi 30 and English 40 words a minute, Marathi mandatory; the English certificate within two years if appointed on Marathi alone', 'S-6'],
        ['Supervisor — women only', 'A degree in sociology, home science, education, child development or nutrition; age 21 minimum', 'S-13'],
        ['Livestock supervisor', 'BVSc or a listed livestock diploma; a computer certificate', 'S-8'],
        ['Laboratory technician', 'BSc with a life or physical science; the Haffkine DMLT preferred', 'S-13'],
        ['Extension officer — agriculture, panchayats, statistics', 'An agriculture degree; any degree with rural welfare experience preferred; a degree with statistics, mathematics, economics, commerce or science', 'S-13'],
      ],
    },
    {
      type: 'table',
      caption: 'Common conditions.',
      head: ['Condition', 'Rule'],
      rows: [
        ['Domicile', 'A Maharashtra domicile certificate; Marathi-speaking residents of the 865 border villages with fifteen years’ residence, without social reservation'],
        ['Scheduled areas', 'Posts in the thirteen PESA districts filled under the Governor’s notification of 2019 and the resolution of 1 February 2023'],
        ['Computer', 'A certificate within two years of joining for cadres that do not require it at application'],
        ['Fee', '₹1,000; ₹900 for backward classes and orphans; ex-servicemen and disabled ex-servicemen exempt; per post'],
        ['Age relaxations', 'PwD, project-affected, earthquake-affected, freedom fighters’ wards and government and parishad employees to 45; part-time employees to 55; sportspersons and orphans 43; ex-servicemen service plus three years — each two more in 2023'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The 2023 paper, from Appendix 2 of the advertisements. 100 questions, two marks each, 120 minutes, computer-based, normalised.',
      head: ['Section', 'Technical posts', 'Non-technical posts'],
      rows: [
        ['Marathi', '15', '25'],
        ['English', '15', '25'],
        ['General knowledge', '15', '25'],
        ['Reasoning and arithmetic', '15', '25'],
        ['Technical subject', '40', '—'],
        ['Total', '100 questions, 200 marks', '100 questions, 200 marks'],
      ],
    },
    {
      type: 'note',
      title: 'The rules of the paper',
      text: 'Difficulty follows the post’s minimum qualification — SSC for health workers, pharmacists, junior engineers and junior assistants; HSC-level languages with degree-level general knowledge and reasoning for health supervisors, supervisors and extension officers; HSC and agriculture-diploma level for the contract gram sevak. Marathi is in Marathi, English in English, the general sections in both; the technical questions are in English only for junior engineer, pharmacist and laboratory technician and bilingual for the rest. A minimum of 45 per cent of the total is required to enter the merit list. No negative marking clause appears in the advertisement. No oral examination, no re-evaluation, no copy of the paper or answer sheet.',
    },
    {
      type: 'list',
      title: 'What the advertisement settles',
      items: [
        { text: 'Typing is a certificate', note: 'the junior assistant’s Marathi and English typing certificates are eligibility conditions; no typing test is held.' },
        { text: 'Ties', note: 'farmer-suicide-affected family first, then the older candidate, then the higher qualification, then the higher marks in the minimum qualification.' },
        { text: 'Verification after the paper', note: 'no documents at application; originals and two attested copies for those on the provisional list.' },
        { text: 'Validity', note: 'the select list is valid for one year.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the rural development department’s resolution of 15 November 2022 on the government resolutions portal, the Sangli zilla parishad’s advertisement 1/2023 read in full and the Dhule and Raigad notices, the Gram Panchayat Adhikari resolution of 24 September 2024 read from a mirror because the portal’s copy was not served, the recruitment pages of the Raigad, Kolhapur, Nashik and Beed parishads, the department’s circular and resolution lists, and the Nagpur bench judgments of 27 March 2026. The statewide total and the examination calendar are as reported; only Sangli’s vacancy table was read.`,
    },
    {
      type: 'links',
      title: 'Official documents and pages',
      items: [
        { label: 'Rural development department resolution, 15 November 2022 — the sanction', href: MH_ZP_SRC.gr2022 },
        { label: 'ZP Sangli — advertisement 1/2023', href: MH_ZP_SRC.sangliAdvt },
        { label: 'ZP Sangli — recruitment notice', href: MH_ZP_SRC.sangliNotice },
        { label: 'ZP Dhule — recruitment 2023', href: MH_ZP_SRC.dhuleNotice },
        { label: 'ZP Raigad — recruitment 2023', href: MH_ZP_SRC.raigadNotice },
        { label: 'Gram Panchayat Adhikari resolution, 24 September 2024 — mirror copy', href: MH_ZP_SRC.grPanchayatAdhikari },
        { label: 'High Court, Nagpur bench — health worker judgment, 27 March 2026', href: MH_ZP_SRC.hcNagpur },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Maharashtra ZP posts syllabus — Marathi, English, general knowledge and reasoning with arithmetic, and the technical subject at the post’s qualification level.',
      lead: [
        'The syllabus is Appendix 2 of each parishad’s advertisement; there is no separate department syllabus.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Marathi',
              'Grammar, vocabulary and comprehension at SSC or HSC level by cadre.',
            ],
            [
              'English',
              'Grammar, vocabulary and comprehension at SSC or HSC level by cadre.',
            ],
            [
              'General knowledge',
              'Maharashtra and India — history, geography, polity, the panchayat raj system and current affairs, at the post’s level.',
            ],
            [
              'Reasoning and arithmetic',
              'Series, coding, analogies and figures; number work, percentages, ratio and averages.',
            ],
            [
              'Technical subject — 40 questions',
              'The diploma or degree syllabus of the post: civil engineering, pharmacy, laboratory science, animal husbandry, agriculture, the multipurpose health worker course, sociology and home science for supervisors.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus source',
          items: [
            { label: 'ZP Sangli advertisement — Appendix 2', href: MH_ZP_SRC.sangliAdvt },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Maharashtra ZP posts exam pattern — one online paper of 100 questions and 200 marks, 40 technical for technical cadres, 45 per cent for the merit, no interview.',
      lead: [
        'One paper, normalised, with a 45 per cent floor and no interview.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['100 questions, 200 marks, 120 minutes', 'Online in sessions; normalised.'],
            ['Technical posts', '15 each of Marathi, English, general knowledge and reasoning; 40 technical.'],
            ['Non-technical posts', '25 each of the four general sections.'],
            ['Floor', '45 per cent of the total for the merit list.'],
            ['Negative marking', 'No clause in the advertisement.'],
            ['Interview and re-evaluation', 'None.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Maharashtra ZP posts previous papers — why the 2023 papers are not published, and what stands in for them.',
      lead: [
        'The parishads issue no copies of the paper; candidates’ recollections and the scheme are what exists.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'The scheme', note: 'Appendix 2 of the 2023 advertisements — section weights, standard and medium by cadre.' },
            { text: 'Marks lists', note: 'each parishad’s marks lists out of 200 show the scoring range by cadre and category.' },
            { text: 'Comparable papers', note: 'the Talathi 2023 paper and MPSC’s Group C papers for the general sections; the diploma and degree syllabi for the technical section.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MPSC Group C — general papers', to: '/government-exams/state/maharashtra/mpsc-group-c/' },
            { label: 'Talathi — the 2023 paper', to: '/government-exams/state/maharashtra/talathi/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Maharashtra ZP posts mock tests — 100-question papers in 120 minutes with the section weights of the cadre, scored to the 45 per cent floor.',
      lead: [
        'Two marks a question, two hours, and 90 of 200 to be on the list at all.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by cadre',
          items: [
            { title: 'Technical cadres — 60 general, 40 technical', text: 'The technical section is 80 of 200 marks and, for engineers, pharmacists and laboratory technicians, in English.' },
            { title: 'Non-technical cadres — four sections of 25', text: 'Junior assistant, supervisor and the panchayat and statistics extension officers; languages at HSC level.' },
            { title: 'Score to the floor, then the cut', text: 'Forty-five per cent to enter the merit list; the district’s cut-off by category is well above it.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Maharashtra ZP posts preparation — watching for a new sanction, choosing districts and cadres, the certificates that qualify, and the additional lists.',
      lead: [
        'The next round needs a sanction first; what a candidate can do now is hold the certificates and choose the cadre.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From sanction to appointment',
          items: [
            { title: 'Watch the department’s resolutions', text: 'A round begins with a rural development department sanction naming the percentage of vacancies and the timetable; then each parishad advertises.' },
            { title: 'Choose cadres and districts', text: 'A separate application and fee per post; posts in the scheduled areas are filled under the PESA rules.' },
            { title: 'Hold the certificates', text: 'Typing certificates for junior assistant, the computer certificate for gram sevak and livestock supervisor, ANM registration for health worker (female) — the courts have held the rules strictly.' },
            { title: 'Prepare the paper for the cadre', text: 'Sixty or a hundred general questions at the post’s level; forty technical for the technical cadres.' },
            { title: 'Follow the parishad site after the paper', text: 'Marks lists, provisional and final lists, verification dates and, months later, additional lists.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Maharashtra ZP posts study material — SSC and HSC language and arithmetic texts, the panchayat raj system, and the diploma or degree syllabus by cadre.',
      lead: [
        'The general sections are at school level; the technical section is the qualification’s syllabus.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By section.',
          head: ['Section', 'What to read', 'Note'],
          rows: [
            ['Marathi and English', 'State board grammar and comprehension at SSC and HSC level', 'Thirty or fifty of 100 questions.'],
            ['General knowledge', 'State board history, geography and civics; the Maharashtra Zilla Parishads and Panchayat Samitis Act in outline; a year of current affairs', 'The panchayat system is the employer.'],
            ['Reasoning and arithmetic', 'A reasoning and arithmetic workbook', 'Fifteen or twenty-five questions.'],
            ['Technical', 'The civil engineering diploma, the pharmacy syllabus, the agriculture diploma, the ANM and multipurpose worker courses, as the cadre requires', 'Forty questions, 80 marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Maharashtra technical posts — junior engineers', to: '/government-exams/state/maharashtra/technical-posts/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is ZP Bharti 2026 open in Maharashtra?',
      a: 'No. No statewide sanction for a 2025 or 2026 zilla parishad round appears in the rural development department’s resolutions or circulars, and the parishads’ recruitment pages carry only the 2023 round’s lists and contractual health posts. The department has made no official statement on a next round; vacancy figures circulating are compilations, not notifications.',
    },
    {
      q: 'What was the ZP Bharti 2023?',
      a: 'The rural development department’s sanction of 15 November 2022 let every zilla parishad fill 80 per cent of its Group C direct-recruitment vacancies through its district selection board. The 34 parishads advertised in August 2023 — about 19,000 posts in cadres from gram sevak and health worker to junior engineer and junior assistant — with applications through IBPS from 5 to 25 August 2023 and an online test of 200 marks in October 2023, and in June and July 2024 for the health and gram sevak cadres. Additional lists from its merit lists were still being published in 2026.',
    },
    {
      q: 'What is the ZP exam pattern?',
      a: 'One computer-based paper of 100 questions and 200 marks in 120 minutes, normalised across sessions. For technical posts, Marathi, English, general knowledge and reasoning with arithmetic at 15 questions each and the technical subject at 40; for non-technical posts, the four general sections at 25 each. Forty-five per cent of the total is required to enter the merit list. No interview, no re-evaluation, and no negative marking clause in the advertisement.',
    },
    {
      q: 'What is the qualification for gram sevak in Maharashtra?',
      a: 'In the 2023 round, for contract gram sevak: HSC with 60 per cent, or a three-year engineering diploma, or BSW, or SSC with a two-year agriculture diploma, or an agriculture degree, plus a computer certificate such as MS-CIT at application, at an honorarium of ₹16,000 a month. The post has since been merged with gram vikas adhikari as Gram Panchayat Adhikari at pay level S-8 by the resolution of 24 September 2024, and the next round will advertise it under that name.',
    },
    {
      q: 'What is the fee and age limit for ZP recruitment?',
      a: 'In 2023, ₹1,000 for open candidates and ₹900 for backward classes and orphans, per post, with ex-servicemen exempt. Age on the closing date was 18 to 38, or 43 for backward classes, plus a two-year relaxation for advertisements before the end of 2023 — 40 and 45 — with the usual relaxations for PwD, project-affected, sportspersons, orphans and ex-servicemen, and 55 for part-time employees.',
    },
    {
      q: 'Is there an interview for ZP posts?',
      a: 'No. The advertisements state that no oral examination is held, under the general administration department’s resolution of 4 May 2022. Selection is on the written paper alone, with document verification for candidates on the provisional list and the select list valid for a year.',
    },
    {
      q: 'Can GNM or BSc nursing candidates apply for ZP health worker (female)?',
      a: 'No. The post requires the ANM qualification with nursing council registration, and the High Court’s Nagpur bench on 27 March 2026 dismissed the petitions of GNM and BSc nursing candidates excluded at document verification in the 2023 round, holding that recruitment rules must be strictly construed.',
    },
    {
      q: 'Where are the ZP results published?',
      a: 'On each zilla parishad’s own website and the district collectorate’s notice pages — marks lists out of 200, provisional and final selection lists, waiting lists and, from 2025, additional selection lists under the department’s letter of 13 June 2025. Raigad, Kolhapur, Nashik and Beed published lists through 2025 and 2026.',
    },
  ],
}

/* ── Maharashtra departmental examinations ──────────────────────
   Since 2021 the departments conduct their own post-entry and promotion
   examinations under a common policy of March 2021, and the commission
   conducts only the limited departmental competitive examinations that
   are a route of appointment in the recruitment rules — for sub-inspector,
   assistant section officer, excise sub-inspector and the women and child
   development posts in the current cycles. */
const MH_DEPT_SRC = {
  circular2020: 'https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202009221535543907.pdf',
  gr2021: 'https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/202103311727379007.pdf',
  gr2018: 'https://gr.maharashtra.gov.in/Site/Upload/Government%20Resolutions/Marathi/201803011502237507.pdf',
  grPortal: 'https://gr.maharashtra.gov.in/',
  scheme: 'https://mpsc.gov.in/examination_scheme/17',
}

const MH_DEPARTMENTAL = {
  slug: 'departmental-tests',
  path: '/government-exams/state/maharashtra/departmental-tests/',
  name: 'Maharashtra Departmental Examinations',
  fullName: 'Departmental examinations of Maharashtra government servants and MPSC’s limited departmental competitive examinations',
  authority: 'Each department under the general administration department’s policy of 31 March 2021; MPSC for limited departmental competitive examinations',
  official: OFFICIAL,
  seoTitle: 'Maharashtra Departmental Exams: 2021 Policy, Chances, Pass Mark & MPSC LDCE',
  metaDescription:
    'Maharashtra departmental examinations — the 2021 policy of three chances and 50 per cent per subject, increment and probation consequences, and MPSC’s LDCEs.',
  lead: [
    'Maharashtra’s departmental examinations are the tests a government servant must pass to be confirmed in the post and to become eligible for promotion — the probationary naib tahsildar’s six revenue and law papers, the sales tax officer’s, the police officer’s, the engineer’s. Until 2020 the Public Service Commission held many of them. From 2021, by the commission’s own decision conveyed to government in February 2020, it holds none: each department conducts its own under a common policy the general administration department issued on 31 March 2021, and the commission’s only departmental work is the limited departmental competitive examination — the promotion-by-examination route written into a post’s recruitment rules.',
    'The 2021 policy is short and consequential. Three chances from the date of joining, every examination held after the first application date counting whether or not the officer applied; a pass mark of 50 per cent in every subject; for a failure within the chances, the increment withheld until a pass; and for a directly recruited gazetted officer or a Group C probationer who fails within probation, discharge. Exemption comes at fifty years of age, or fifteen years in the post for promotion examinations. The commission’s competitive examinations have their own advertisements — the police sub-inspector cycle of 2023 reached its recommendation list in August 2026.',
  ],
  quickFacts: [
    ['Who conducts', 'Each department, from 2021; MPSC only for limited departmental competitive examinations'],
    ['Policy', 'General administration department resolution of 31 March 2021 — post-entry and promotion examinations for state government servants'],
    ['Chances and pass mark', 'Three from joining; 50 per cent in every subject; departments fix papers, marks, duration and with-books rules'],
    ['Consequences', 'Increment withheld until pass; discharge for gazetted direct recruits and Group C probationers who fail within probation'],
    ['Exemption', 'At 50 years of age, or 15 years in the post for promotion examinations'],
    ['MPSC LDCE', 'PSI 2023 recommendation list 17 August 2026; ASO, excise sub-inspector and women and child development examinations advertised in 2025'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The transfer is documented in two resolutions. The general administration department’s circular of 22 September 2020 records the commission’s letter of 12 February 2020 that from 2021 it would conduct no departmental examinations, directs every department whose examinations the commission had held to conduct them itself from 2021, to amend its examination rules and to set up an examination cell, and reserves to the commission only the limited departmental competitive examinations that are the third route of appointment in recruitment rules. The resolution of 31 March 2021 then lays down the policy every department must follow for its post-entry and promotion examinations, applying to state government servants and not to the staff of zilla parishads, municipalities or boards.',
    },
    {
      type: 'p',
      text: 'Under that policy the examinations serve two purposes, confirmation in the post and eligibility for promotion, and apply to officers appointed by nomination through the commission or a selection committee and to those promoted. An officer has three chances from joining, and every examination held after the date on which the first application could have been made counts as a chance, applied for or not. Where the post carries probation, the examination must be passed within it. Departments decide the frequency and timetable, the training, the number of papers and their marks and duration, and whether each paper is written with or without books; promotion syllabi must include the Right to Information Act, the Public Records Act, chapter three of the Delay Prevention Act and disaster management.',
    },
    {
      type: 'list',
      title: 'What the policy fixes',
      items: [
        { text: 'The pass mark', note: 'a minimum of 50 per cent in every subject, in every department’s examination.' },
        { text: 'The increment', note: 'withheld for failure within three chances, restored without arrears from the January or July following the pass; the passing date is the day after the last paper.' },
        { text: 'Discharge', note: 'directly recruited Group A and B gazetted officers, and Group C posts with probation, who fail within probation are liable to discharge from service; otherwise attempts continue until a pass.' },
        { text: 'Exemption', note: 'on completing fifty years of age under the resolution of 1 March 2018 — forty-five before it — except for technical cadres that opt out and never from a probation clause; or fifteen years’ service in the post for a promotion examination.' },
      ],
    },
    {
      type: 'note',
      title: 'The examination rules are the department’s',
      text: 'The papers a particular officer sits are in the department’s examination rules. The revenue department’s rules for probationary naib tahsildars of July 2000, for instance, set six papers of 100 marks and three hours — Revenue I without books on the Land Revenue Code and the first volume of the manual; Revenue II, III and IV with books on the manual’s later volumes and the land acquisition, fragmentation, tree felling, tribal land restoration, entertainment duty, ceiling, mamlatdars’ courts and tenancy Acts; Judicial V with books on the criminal procedure code, the High Court’s criminal manual and the police, arms and evidence Acts; Accounts VI with books on the discipline and conduct rules, the financial rules and the budget manual — with 50 per cent per head, five per cent condonation in one head, and exemption in a head at 60 per cent. Those rules named the commission as the examiner twice a year; the department now examines under them.',
    },
  ],
  stages: [
    {
      name: 'Appointment and the first chance',
      mode: 'Three chances counted from joining',
      detail:
        'The clock starts at joining, and every examination the department holds after the first date on which the officer could have applied is a chance, whether or not the officer sits. Probationers must pass within probation.',
    },
    {
      name: 'The department’s examination',
      mode: 'Papers, marks and books as the department’s rules set',
      detail:
        'Held by the department’s examination cell on its own timetable — descriptive in the older rules, with named papers written with or without government publications. Fifty per cent in every subject to pass.',
    },
    {
      name: 'Result and consequence',
      mode: 'Confirmation; or increment withheld; or discharge',
      detail:
        'A pass confirms the officer or opens promotion. A failure within three chances withholds the increment until a pass; a probationer’s failure within probation makes a gazetted direct recruit or Group C officer liable to discharge.',
    },
    {
      name: 'MPSC limited departmental competitive examination',
      mode: 'Advertised; written and, for PSI, a physical test',
      detail:
        'For the share of posts the recruitment rules fill by examination among serving staff — sub-inspector for constables, assistant section officer for secretariat clerks, excise sub-inspector, the women and child development supervisory posts. Scheme, advertisement, provisional and final lists on the commission’s site.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No departmental or limited departmental examination is open. The commission’s advertisement list carries five limited departmental competitive examinations in the current cycles: the women and child development department’s superintendent, inspector of certified schools and other posts, Advt 125/2025 of 21 November 2025 with corrigenda of 11 and 16 December admitting zilla parishad employees and extending applications, examined on 14 May 2026 at Mumbai on a scheme published 3 November 2025; the assistant section officer examination 2025, Advt 111/2025 of 4 June 2025, and a 2016 examination reserved for PwBD candidates, Advt 119/2025 of 15 September 2025; the state excise sub-inspector examination 2023, Advt 112/2025 of 9 June 2025; and the police sub-inspector examination 2023, Advt 052/2023, whose main examination under Advt 047/2024 produced a provisional selection list on 30 April 2026 and a revised recommendation list on 17 August 2026. No department’s post-entry examination notice for 2025-26 was found online; they are issued within the departments.`,
    },
    {
      type: 'table',
      caption: 'MPSC limited departmental competitive examinations on the advertisement list.',
      head: ['Advertisement', 'Examination', 'Date', 'Position'],
      rows: [
        ['125/2025', 'Superintendent and inspector of certified schools, establishment and procedure officer, district women and child development officer, statistical officer and CDPO (rural) — women and child development department, 2025', '21 November 2025; corrigenda 11 and 16 December', 'Examined 14 May 2026, Mumbai, computer-based'],
        ['119/2025', 'Assistant Section Officer 2016 — reserved for PwBD candidates', '15 September 2025', 'Under process'],
        ['112/2025', 'Sub-Inspector, State Excise, Group C, 2023', '9 June 2025', 'Scheme published 9 June 2025'],
        ['111/2025', 'Assistant Section Officer, Group B non-gazetted, 2025', '4 June 2025', 'Scheme published 4 June, revised 10 June 2025'],
        ['052/2023 and 047/2024', 'Police Sub-Inspector 2023 — preliminary and main', '8 September 2023; 20 September 2024', 'Provisional selection list 30 April 2026; revised recommendation list 17 August 2026'],
      ],
    },
    {
      type: 'links',
      title: 'Check the sources directly',
      items: [
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — scheme of examinations', href: MH_DEPT_SRC.scheme },
        { label: 'MPSC — provisional selection lists', href: MPSC.provisionalLists },
        { label: 'MPSC — final recommendation lists', href: MPSC.finalLists },
        { label: 'Government resolutions portal', href: MH_DEPT_SRC.grPortal },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Who sits what, from the resolutions.',
      head: ['Examination', 'Who', 'Rule'],
      rows: [
        ['Post-entry departmental examination', 'Officers appointed by nomination through the commission or a selection committee, and officers promoted, in state government service', 'Three chances from joining; within probation where the post carries it; 50 per cent in every subject'],
        ['Promotion-eligibility examination', 'Serving officers in the feeder cadre', 'The same chances and pass mark; exemption after fifteen years in the post'],
        ['Exemption by age', 'Officers who have completed fifty years', 'Under the resolution of 1 March 2018; not for technical cadres that opt out and not from a probation clause'],
        ['Not covered', 'Employees of zilla parishads, municipal bodies and boards', 'Their own rules apply'],
        ['MPSC limited departmental competitive examination', 'Serving staff of the feeder cadre meeting the service and age conditions in the advertisement — for sub-inspector, constables, naiks, head constables and assistant sub-inspectors with the years of service and qualification the rules set', 'As advertised; fee, scheme and physical test in the advertisement'],
      ],
    },
    {
      type: 'p',
      text: 'Fees, modes and revaluation rules for the departments’ own examinations are in each department’s examination rules and notices, which are circulated within the departments and were not found published; the older rules describe descriptive papers marked by the commission’s examiners with no revaluation. The commission’s limited departmental examinations carry its standard fees and its objective-paper rules, including the answer-key objection window.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The 2021 policy, from the general administration department’s resolution of 31 March 2021.',
      head: ['Provision', 'Rule'],
      rows: [
        ['Purpose', 'Confirmation in the post; eligibility for promotion'],
        ['Chances', 'Three from the date of joining; every examination after the first application date counts, sat or not'],
        ['Probation', 'Must pass within it where the post carries probation'],
        ['Pass mark', 'Minimum 50 per cent in every subject'],
        ['Failure within three chances', 'Increment withheld; restored without arrears from the January or July after the pass'],
        ['Failure within probation', 'Gazetted direct recruits and Group C probationers liable to discharge; others continue until a pass'],
        ['Exemption', 'Fifty years of age; fifteen years in the post for promotion examinations'],
        ['Departments decide', 'Frequency, timetable, training, papers, marks, duration, with or without books'],
        ['Promotion syllabi must include', 'Right to Information Act 2005; Public Records Act 2005; Delay Prevention Act 2005, chapter 3; disaster management'],
      ],
    },
    {
      type: 'table',
      caption: 'An example of a department’s rules — probationary naib tahsildars, revenue department, July 2000. Six papers of 100 marks and three hours; answers in Marathi or English.',
      head: ['Paper', 'Books', 'Content'],
      rows: [
        ['Revenue I', 'Without books', 'Maharashtra Land Revenue Code 1966; Revenue Manual volume I'],
        ['Revenue II', 'With books', 'Revenue Manual volumes II and III'],
        ['Revenue III', 'With books', 'Revenue Manual volumes IV and V'],
        ['Revenue IV', 'With books', 'Land acquisition, fragmentation, tree felling, tribal land restoration, entertainment duty, ceiling and mamlatdars’ courts Acts; the regional tenancy Act'],
        ['Judicial V', 'With books', 'Criminal procedure code; the High Court’s criminal manual; the village police, Bombay police, arms and evidence Acts'],
        ['Accounts VI', 'With books', 'Discipline and appeal and conduct rules 1979; financial rules; contingent expenditure rules; budget manual; government accounts and audit'],
      ],
    },
    {
      type: 'note',
      title: 'Pass rules in the older departmental rules',
      text: 'The naib tahsildar rules require 50 per cent in each head, allow five per cent condonation in one head, exempt a head passed at 60 per cent on application, note 70 per cent at the first attempt in the confidential report, and allow the government to extend probation by up to a year for at most two further chances. The deputy collector rules of 1977 put direct recruits on two years’ probation, extendable by two, with discharge for failure to pass the prescribed examinations. The 2021 policy overlays these with its three-chance and increment rules where the department’s rules are silent or older.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the general administration department’s circular of 22 September 2020 and resolutions of 31 March 2021 and 1 March 2018 on the government resolutions portal, the commission’s advertisement list, scheme page and lists read on its site, and the revenue department’s naib tahsildar examination rules of July 2000 and deputy collector rules of 1977 as reproduced on a private mirror — the gazette text was not retrieved. The commission’s limited departmental advertisements themselves were not opened; their numbers, subjects and dates are as the list shows them. No department’s post-entry examination notice for 2025-26 was found.`,
    },
    {
      type: 'links',
      title: 'Official documents and pages',
      items: [
        { label: 'General administration department circular, 22 September 2020 — MPSC to hold no departmental examinations from 2021', href: MH_DEPT_SRC.circular2020 },
        { label: 'General administration department resolution, 31 March 2021 — common policy', href: MH_DEPT_SRC.gr2021 },
        { label: 'General administration department resolution, 1 March 2018 — exemption at fifty', href: MH_DEPT_SRC.gr2018 },
        { label: 'MPSC — scheme of examinations, including LDCE schemes', href: MH_DEPT_SRC.scheme },
        { label: 'MPSC — advertisements, notifications and corrigenda', href: MPSC.advertisements },
        { label: 'MPSC — final recommendation lists', href: MPSC.finalLists },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Maharashtra departmental examinations syllabus — the department’s examination rules, the Acts every promotion syllabus must include, and the MPSC LDCE schemes.',
      lead: [
        'The syllabus is the department’s examination rules; the 2021 policy adds four subjects to every promotion syllabus.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Post-entry examinations',
              'The codes, manuals, Acts and rules of the department, paper by paper, as its examination rules name them — the Land Revenue Code and manual for the revenue service, the police manual and criminal law for the police, the tax Acts for the tax officers, the financial rules for accounts.',
            ],
            [
              'Promotion examinations — mandatory additions',
              'The Right to Information Act 2005; the Maharashtra Public Records Act 2005; chapter 3 of the Maharashtra Government Servants Regulation of Transfers and Prevention of Delay Act 2005; disaster management.',
            ],
            [
              'MPSC LDCE',
              'Each examination’s scheme on the commission’s scheme page — the assistant section officer scheme of June 2025, the excise sub-inspector scheme of June 2025, the women and child development scheme of November 2025, and the sub-inspector scheme with its physical test.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus sources',
          items: [
            { label: 'Resolution of 31 March 2021 — mandatory subjects', href: MH_DEPT_SRC.gr2021 },
            { label: 'MPSC — scheme of examinations', href: MH_DEPT_SRC.scheme },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Maharashtra departmental examinations pattern — three chances, 50 per cent per subject, with-books papers as the department rules set, and the consequences.',
      lead: [
        'A standard, a count of chances, and a consequence.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules across the departments.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Three chances', 'From joining; unsat examinations count.'],
            ['Fifty per cent', 'In every subject.'],
            ['Increment', 'Withheld until a pass after three failures; restored without arrears.'],
            ['Probation', 'Pass within it, or discharge for gazetted direct recruits and Group C probationers.'],
            ['Exemption', 'Fifty years of age; fifteen years in the post for promotion examinations.'],
            ['Papers', 'As the department’s rules set — with or without books.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Maharashtra departmental examinations previous papers — the departments’ own archives, the commission’s pre-2021 papers, and the LDCE papers on its site.',
      lead: [
        'The departments hold their own papers; the commission’s archive has the departmental papers it set before 2021 and the competitive papers since.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What exists',
          items: [
            { text: 'Commission departmental papers to 2020', note: 'the naib tahsildar, sales tax and other papers the commission set, in its question-paper archive by year.' },
            { text: 'LDCE papers', note: 'the sub-inspector, assistant section officer and excise papers of the recent cycles with keys, on the commission’s site.' },
            { text: 'Department archives', note: 'each department’s examination cell holds its papers since 2021; training institutes circulate them to probationers.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MPSC — previous question papers', href: MPSC.papers },
            { label: 'MPSC — answer keys', href: MPSC.keys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Maharashtra departmental examinations mock tests — three-hour with-books sittings on the department’s codes, and the objective LDCE papers.',
      lead: [
        'For a with-books paper, the practice is finding the provision under time; for a without-books paper, knowing it.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Without-books papers — three hours by hand', text: 'The Land Revenue Code and the first manual volume for the revenue officer; the equivalent code for each service. Fifty per cent is the pass; sixty exempts the head.' },
            { title: 'With-books papers — the book on the desk', text: 'The government publication and nothing else; the skill is navigation, and the marking rewards the provision cited.' },
            { title: 'LDCE — the commission’s objective papers', text: 'Timed sittings from the published papers; for the sub-inspector, the physical test as well.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Maharashtra departmental examinations preparation — the department’s rules, counting the chances from joining, and the exemption and condonation provisions.',
      lead: [
        'The clock starts at joining whether or not the officer notices; the first step is to find the department’s rules.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From joining to confirmation',
          items: [
            { title: 'Get the department’s examination rules on the first day', text: 'They name the papers, the books allowed and the timetable; the 2021 policy sets the chances and the pass mark.' },
            { title: 'Count the chances', text: 'Three from joining, and every examination after the first application date counts — sat or not. Probationers must pass within probation.' },
            { title: 'Aim at 60 in the strongest paper', text: 'Where the rules allow, a head passed at 60 per cent is exempted on application, and five per cent is condoned in one head.' },
            { title: 'Know the consequence', text: 'The increment stops after three failures; a gazetted direct recruit or Group C probationer who fails within probation is liable to discharge.' },
            { title: 'For LDCE, watch the commission', text: 'Advertisements by post with service and age conditions, a scheme on the scheme page, and lists on the results pages.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Maharashtra departmental examinations study material — the government editions of the codes, manuals and rules each paper is set on, and four mandatory Acts.',
      lead: [
        'The material is the government publication the paper is set on, in the edition the with-books rule allows.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By service.',
          head: ['Service', 'Source', 'Note'],
          rows: [
            ['Revenue', 'The Maharashtra Land Revenue Code 1966 and the Revenue Manual volumes I to V; the land Acts named in Revenue IV', 'Six papers for the naib tahsildar.'],
            ['Judicial and police', 'The criminal procedure code, the High Court’s criminal manual, the police, arms and evidence Acts; the police manual', 'Check the department’s rules for any substitution of the new codes.'],
            ['Accounts', 'The discipline and appeal and conduct rules 1979; the Bombay financial rules; the budget manual; government accounts and audit', 'Paper VI for revenue officers; the core for accounts cadres.'],
            ['Promotion examinations', 'The RTI Act 2005, the Public Records Act 2005, chapter 3 of the Delay Prevention Act 2005, and disaster management', 'Mandatory under the 2021 policy.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'MPSC Rajyaseva — the direct route to the same posts', to: '/government-exams/state/maharashtra/mpsc-rajyaseva/' },
            { label: 'Maharashtra government exams', to: '/government-exams/state/maharashtra/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Does MPSC conduct departmental examinations in Maharashtra?',
      a: 'Not since 2021. By its letter of 12 February 2020, recorded in the general administration department’s circular of 22 September 2020, the commission conducts no departmental examinations from 2021; each department holds its own under the policy of 31 March 2021. The commission conducts only limited departmental competitive examinations — the promotion-by-examination route in recruitment rules — such as those for police sub-inspector, assistant section officer, excise sub-inspector and the women and child development posts.',
    },
    {
      q: 'How many chances are allowed in a Maharashtra departmental examination?',
      a: 'Three from the date of joining, under the resolution of 31 March 2021, and every examination held after the date on which the officer could first have applied counts as a chance whether or not the officer sat. Where the post carries probation, the examination must be passed within it. After three failures, attempts continue until a pass, but the increment is withheld.',
    },
    {
      q: 'What is the pass mark for Maharashtra departmental examinations?',
      a: 'A minimum of 50 per cent in every subject, under the 2021 policy, in every department’s examination. Older departmental rules add their own provisions — the naib tahsildar rules allow five per cent condonation in one head and exempt a head passed at 60 per cent.',
    },
    {
      q: 'What happens if a Maharashtra government servant fails the departmental examination?',
      a: 'Failure within three chances withholds the increment until the officer passes, when it is restored without arrears from the following January or July. A directly recruited Group A or B gazetted officer, or a Group C officer on probation, who fails within probation is liable to discharge from service. Otherwise the officer continues to attempt the examination until a pass.',
    },
    {
      q: 'Who is exempt from Maharashtra departmental examinations?',
      a: 'Officers who have completed fifty years of age, under the resolution of 1 March 2018 which raised the age from forty-five — except in technical cadres that opt out, and never from a clause requiring a pass within probation — and, for promotion examinations, officers with fifteen years’ service in the post. Employees of zilla parishads, municipal bodies and boards are outside the state policy altogether.',
    },
    {
      q: 'What are the papers in the naib tahsildar departmental examination?',
      a: 'Under the revenue department’s rules of July 2000, six papers of 100 marks and three hours: Revenue I without books on the Land Revenue Code and Revenue Manual volume I; Revenue II, III and IV with books on the manual’s later volumes and the land acquisition, fragmentation, tree felling, tribal land restoration, entertainment duty, ceiling, mamlatdars’ courts and tenancy Acts; Judicial V with books on criminal procedure, the criminal manual and the police, arms and evidence Acts; and Accounts VI with books on the conduct and discipline rules, financial rules and budget manual. Answers in Marathi or English.',
    },
    {
      q: 'What is an MPSC limited departmental competitive examination?',
      a: 'The examination the commission holds for the share of a post’s vacancies that the recruitment rules fill from serving staff by competition — for example the sub-inspector posts filled from constables, naiks, head constables and assistant sub-inspectors. The 2023 sub-inspector examination reached a provisional selection list on 30 April 2026 and a revised recommendation list on 17 August 2026; the women and child development examination was held on 14 May 2026; the assistant section officer and excise sub-inspector examinations were advertised in June 2025.',
    },
    {
      q: 'Is any Maharashtra departmental examination open now?',
      a: 'No limited departmental competitive examination is open on the commission’s list as at 11 September 2026, and the departments’ own post-entry examination notices are circulated within the departments rather than published; none for 2025-26 was found online.',
    },
  ],
}

const maharashtra = [MH_RS, MH_GB, MH_GC, MH_TALATHI, MH_POLICE, MH_TEACHING, MH_TECHNICAL, MH_ZP, MH_DEPARTMENTAL]

export default maharashtra
