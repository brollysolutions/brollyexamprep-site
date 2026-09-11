/* Uttar Pradesh exam records.
   Nine pages behind the Uttar Pradesh hub cards. UPPSC runs the PCS and
   the RO/ARO examinations; UPSSSC runs the Preliminary Eligibility Test and
   the Group C mains that follow it — Lekhpal, junior assistant and the rest;
   the Police Recruitment and Promotion Board recruits constables and
   sub-inspectors; UPBEB runs UPTET and the assistant teacher examinations;
   the departmental examinations are the departments' own. Structure, block
   types and conventions follow ./telangana.js. */

const OFFICIAL = 'uppsc.up.nic.in'
const CHECKED = '11 September 2026'

const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'UPPSC, UPSSSC, the police recruitment board and the state’s other recruiting bodies revise schemes, ratios and dates between cycles, and the advertisement for your cycle is the document that binds. The figures here are from the latest documents on the official sites at the date checked and are labelled where they come from an older cycle.',
}

/* ── UPPSC landing pages ────────────────────────────────────────
   The commission's site serves its advertisements and papers as PDFs
   behind links that expect the site's own referer, and rotates result
   notices off the home page within months. The section pages below are
   the stable entries; the advertisement links worked at the date checked. */
const UPPSC = {
  home: 'https://uppsc.up.nic.in/Home',
  notifications: 'https://uppsc.up.nic.in/CandidatePages/Notifications.aspx',
  papers: 'https://uppsc.up.nic.in/OuterPages/PreQuesPapers.aspx?ID=PrevQues',
  keys: 'https://uppsc.up.nic.in/CandidatePages/Status/ViewAnswerKey.aspx?ID=5',
  syllabus: 'https://uppsc.up.nic.in/CandidatePages/Syllabus/Syllabus_PostWise.aspx?ID=4',
  calendar2026: 'https://uppsc.up.nic.in/Open_PDF_DB.aspx?I4PnQ0tBagmIqec6cDg6BUi0bxHlS/Ba',
  pcs2026: 'https://uppsc.up.nic.in/OuterPages/View_Enclosure.aspx?ID=114&flag=E&FID=929',
  pcs2025: 'https://uppsc.up.nic.in/OuterPages/View_Enclosure.aspx?ID=113&flag=E&FID=869',
  pcs2024Archive: 'https://web.archive.org/web/20240101162930/https://uppsc.up.nic.in/OuterPages/View_Enclosure.aspx?ID=112&flag=E&FID=818',
  roaro2023Archive: 'https://web.archive.org/web/20231012011823/https://uppsc.up.nic.in/OuterPages/View_Enclosure.aspx?ID=306&flag=E&FID=801',
}

/* ── UPPSC PCS ───────────────────────────────────────────────────
   The Combined State/Upper Subordinate Services examination: an objective
   preliminary of two papers with the aptitude paper qualifying at 33 per
   cent, a conventional mains of eight papers and 1,500 marks with no
   optional subject, and a 100-mark interview. The 2026 cycle of about 500
   posts closed on 3 August with the preliminary on 6 December; the 2025
   cycle's mains result is due; the 2024 cycle's one-day preliminary was
   won by a four-day protest in November 2024. */
const UP_PCS = {
  slug: 'uppsc-pcs',
  path: '/government-exams/state/uttar-pradesh/uppsc-pcs/',
  name: 'UPPSC PCS',
  fullName: 'Uttar Pradesh Public Service Commission — Combined State/Upper Subordinate Services Examination',
  authority: 'Uttar Pradesh Public Service Commission (UPPSC)',
  official: OFFICIAL,
  seoTitle: 'UPPSC PCS 2026: 500 Posts, Prelims 6 Dec, Pattern, Syllabus, Cut-off',
  metaDescription:
    'UPPSC PCS 2026 — about 500 posts, prelims 6 December 2026. The 200-mark prelims papers with CSAT at 33 per cent, the 1,500-mark mains, 100-mark interview, fees.',
  lead: [
    'The Combined State/Upper Subordinate Services examination — the PCS — is the Uttar Pradesh Public Service Commission’s recruitment to the state’s administrative and allied services: deputy collectors and deputy superintendents of police, block development officers, assistant regional transport officers, assistant commissioners of commercial tax, naib tehsildars, excise inspectors, treasury officers, jail superintendents and deputy jailors, and in 2026 the principals of government intermediate colleges. Three stages: an objective preliminary of two papers, a conventional main examination of eight papers and 1,500 marks with no optional subject, and a personality test of 100.',
    'Three cycles overlap. The 2026 advertisement of 25 June 2026 for about 500 posts closed on 3 August after a week’s extension, with the preliminary on 6 December 2026 by the commission’s calendar. The 2025 cycle — advertised for about 200 posts, revised to 920 including the forest service posts by the time of its preliminary result — sat its mains from 29 March to 1 April 2026 and awaits the result. The 2024 cycle, whose two-day preliminary was withdrawn after four days of protest at Prayagraj in November 2024, published its final result on 29 March 2026 with 932 recommended against 947 posts.',
  ],
  quickFacts: [
    ['Conducted by', 'Uttar Pradesh Public Service Commission'],
    ['2026 cycle', 'Advt A-1/E-1/2026, 25 June 2026 — about 500 posts; applications closed 3 August; prelims 6 December 2026'],
    ['2025 cycle', 'Advt A-1/E-1/2025 — 920 posts after revision; prelims 12 October 2025, 11,727 through; mains 29 March to 1 April 2026; result awaited'],
    ['Prelims', 'Two OMR papers of 200 — general studies 150 questions counted, CSAT 100 questions qualifying at 33 per cent; one-third off per wrong answer'],
    ['Mains and interview', 'General Hindi 150, essay 150, general studies I to VI at 200 — 1,500; interview 100; merit 1,600'],
    ['Age and fee', '21 to 40 on 1 July; prelims ₹125, ₹65 for SC and ST, ₹25 for PwD; mains ₹225, ₹105, ₹25'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The commission advertises a rounded vacancy figure and revises it as departments send requisitions. The 2026 advertisement says the number of vacancies is presently about 500 and may increase or decrease, and lists the cadres covered without a breakup — deputy collector, deputy superintendent of police, block development officer, assistant regional transport officer, assistant commissioner of commercial tax, district commandant of home guards, treasury and accounts officer, cane inspector and assistant sugar commissioner, jail superintendent, naib tehsildar, excise inspector, child development project officer, food safety officer, deputy jailor, law officer and, new this year, principal of government intermediate college. The 2025 advertisement’s about 200 became 814 PCS and 106 forest service posts by the preliminary result; the 2024 advertisement’s about 220 became 947.',
    },
    {
      type: 'p',
      text: 'The scheme has been stable across the 2024, 2025 and 2026 advertisements. The preliminary’s Paper I, general studies, has 150 questions and Paper II, the aptitude test, 100, each of 200 marks and two hours, with Paper II qualifying at 33 per cent and merit on Paper I alone; one-third of the question’s marks is deducted for a wrong answer, a question with more than one answer is wrong, and a blank costs nothing. The mains is eight conventional papers of three hours — general Hindi 150, an essay paper of three 700-word essays for 150, and general studies papers I to VI of 200 each — with answers in Hindi, English or Urdu. Fifteen candidates per post go to the mains and three per post to the 100-mark interview, and the final merit is the 1,600. A minimum efficiency standard applies: 40 per cent at each stage, 35 for SC and ST.',
    },
    {
      type: 'list',
      title: 'What defines the examination',
      items: [
        { text: 'One day, since 2024', note: 'the commission notified a two-shift, two-day preliminary with normalisation on 5 November 2024; after protests at its headquarters from 11 November it agreed on 14 November to hold the paper in one day on the old pattern, and the 2024 preliminary was held on 22 December in two sessions of one day.' },
        { text: 'No optional subject', note: 'six general studies papers replace the old optionals; the 2025 mains papers on the commission’s site show the format — twenty questions a paper, ten at 125 words and ten at 200.' },
        { text: 'Reservation follows domicile', note: 'candidates not permanently resident in Uttar Pradesh get no reservation or age relaxation in any category; the reserved-to-unreserved adjustment clause is under a High Court stay of 13 May 2026.' },
        { text: 'A fellowship weightage from 2026', note: 'under rules of 2026, research scholars of the Chief Minister’s fellowship get up to three years of age relaxation and a weightage in the mains — 2.5, 5 or 7.5 marks for one, two or three completed years in an examination of more than 1,000 marks.' },
      ],
    },
    {
      type: 'note',
      title: 'The 2024 cycle, start to finish',
      text: 'Advertised on 1 January 2024 for about 220 posts, revised to 947. Preliminary on 22 December 2024 at 1,331 centres after the November protests, with 2,41,212 of 5,76,154 registered candidates appearing; result 28 February 2025 with 15,066 through; mains from 29 June to 2 July 2025 at 34 centres with 14,857 registered; mains result 4 February 2026 with 2,719 called; interviews from 26 February to 23 March 2026, with two more candidates admitted on the High Court’s direction; final result 29 March 2026 — 932 recommended, 15 posts unfilled. Fifteen months from advertisement to result, as the press reported it; the result document has rotated off the commission’s home page.',
    },
  ],
  stages: [
    {
      name: 'Preliminary examination',
      mode: 'Two OMR papers of 200, one day',
      detail:
        'Paper I, general studies, 150 questions, 9.30 to 11.30; Paper II, the aptitude test — comprehension, communication, reasoning, decision-making, mental ability, and mathematics, English and Hindi to class X — 100 questions, 2.30 to 4.30. Paper II qualifies at 33 per cent; merit is Paper I. One-third off per wrong answer. About fifteen candidates per post go through.',
    },
    {
      name: 'Main examination',
      mode: 'Eight conventional papers, 1,500 marks, four days',
      detail:
        'General Hindi 150; essay 150 — one topic from each of three sections in 700 words; general studies I to VI, 200 each. Three hours a paper, 9.30 to 12.30 and 2 to 5, answered in Hindi, English or Urdu. A separate application and fee after the preliminary result. About three candidates per post go through.',
    },
    {
      name: 'Personality test',
      mode: '100 marks',
      detail:
        'At the commission’s Prayagraj office, with document verification and the post-preference form. The 2024 cycle interviewed 2,719 candidates over four weeks.',
    },
    {
      name: 'Final result and medical examination',
      mode: 'Merit on 1,600; written marks alone for some posts',
      detail:
        'Recommendation by preference and reservation; the deputy jailor and some other posts are filled on written marks alone under their service rules. Medical examination follows under the rules.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No window is open. The 2026 advertisement, A-1/E-1/2026 of 25 June 2026, took applications to 27 July with corrections to 3 August as printed, and the commission extended the closing date to 3 August with corrections to 10 August, as the press reported; the advertisement has since left the live notifications page, which carried only three other recruitments closing in early September. The preliminary is on 6 December 2026 by the commission’s calendar of 30 January 2026, whose dates are tentative. The 2025 cycle’s mains of 29 March to 1 April 2026 at 27 centres in Prayagraj and Lucknow, with 11,403 registered, awaits its result — a government review in late August was reported to have set 8 October as the commission’s deadline for it. The 2024 cycle closed on 29 March 2026.`,
    },
    {
      type: 'table',
      caption: 'The three cycles, from the advertisements, the commission’s calendars and press reports of the results.',
      head: ['Cycle', 'Advertisement', 'Posts', 'Prelims', 'Mains', 'Position at 11 September 2026'],
      rows: [
        ['2026', 'A-1/E-1/2026, 25 June 2026; closed 3 August', 'About 500', '6 December 2026', 'To follow', 'Awaiting the preliminary'],
        ['2025', 'A-1/E-1/2025, 20 February 2025; closed 24 March', 'About 200 at advertisement; 920 by the preliminary result — 814 PCS, 106 ACF and RFO', '12 October 2025; result 1 December, 11,727 through', '29 March to 1 April 2026', 'Mains result awaited'],
        ['2024', 'A-1/E-1/2024, 1 January 2024; closed 2 February', 'About 220; 947 final', '22 December 2024; result 28 February 2025, 15,066 through', '29 June to 2 July 2025; result 4 February 2026, 2,719 called', 'Final result 29 March 2026 — 932 recommended, 15 posts unfilled'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2025 mains, from the commission’s calendar and the papers it has published.',
      head: ['Paper', 'Marks', 'Format on the 2025 paper'],
      rows: [
        ['General Hindi', '150', 'Conventional, three hours'],
        ['Essay', '150', 'Three essays of 50 marks — one from each section'],
        ['General studies I to VI', '200 each', 'Twenty questions — ten short at 125 words, ten long at 200 words'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'UPPSC — home and latest notices', href: UPPSC.home },
        { label: 'UPPSC — notifications and advertisements', href: UPPSC.notifications },
        { label: 'UPPSC — examination calendar 2026', href: UPPSC.calendar2026 },
        { label: 'PCS 2026 advertisement, 25 June 2026', href: UPPSC.pcs2026 },
        { label: 'PCS 2025 advertisement, 20 February 2025', href: UPPSC.pcs2025 },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2026 advertisement. Age on 1 July 2026.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'A bachelor’s degree of a recognised university by the closing date; specific qualifications for named posts — B.Ed and a postgraduate degree for principal of government intermediate college, LLB for law officer, and others as listed.'],
        ['Age', '21 to 40 — born between 2 July 1986 and 1 July 2005; 55 for PwD; 30 to 40 for principal of government intermediate college.'],
        ['Relaxation', 'Five years for SC, ST and OBC candidates of Uttar Pradesh, the state’s skilled players and its government employees including Basic Shiksha Parishad and aided secondary staff; fifteen years for PwD of Uttar Pradesh; three years plus army service for ex-servicemen of the state; up to three years for Chief Minister’s fellowship scholars under the 2026 rules.'],
        ['Domicile', 'Reservation and age relaxation only for permanent residents of Uttar Pradesh; other states’ candidates compete as unreserved. A woman’s caste certificate counts from her father’s side.'],
        ['Attempts', 'No limit appears in the advertisement.'],
        ['Minimum efficiency standard', '40 per cent at the preliminary and mains; 35 for SC and ST. Below it, disqualified.'],
        ['Other', 'The bigamy bar unless exempted; one concession only where more than one applies.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees — examination fee plus a ₹25 processing fee — the same in the 2024, 2025 and 2026 advertisements.',
      head: ['Category', 'Preliminary', 'Mains'],
      rows: [
        ['Unreserved, EWS, OBC, and candidates of other states', '₹100 + ₹25 = ₹125', '₹200 + ₹25 = ₹225'],
        ['SC and ST of Uttar Pradesh', '₹40 + ₹25 = ₹65', '₹80 + ₹25 = ₹105'],
        ['PwD of Uttar Pradesh', '₹25', '₹25'],
        ['Ex-servicemen of Uttar Pradesh', '₹40 + ₹25 = ₹65', '₹80 + ₹25 = ₹105'],
        ['Dependants of freedom fighters, women, skilled players', 'By original category', 'By original category'],
      ],
    },
    {
      type: 'note',
      title: 'Two clauses under litigation',
      text: 'The 2026 advertisement prints that its clause adjusting reserved-category candidates against unreserved posts — allowed only where they took no concession in the qualifying standard at the preliminary or mains — is subject to a stay of the Allahabad High Court’s Lucknow bench of 13 May 2026 in Special Appeal 233/2026, Bhavna Yadav and others. The 2024 advertisement carried the note that the government order restricting women’s horizontal reservation to domiciled women was struck down in January 2019, subject to appeal. Neither order was read.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Preliminary examination, from Appendix 2 of the 2026 advertisement — the same in 2024 and 2025.',
      head: ['Paper', 'Questions', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Paper I — general studies I', '150', '200', '2 hours, 9.30 to 11.30', 'Counted for merit'],
        ['Paper II — general studies II, the aptitude test', '100', '200', '2 hours, 2.30 to 4.30', 'Qualifying at 33 per cent; both papers compulsory'],
        ['Negative marking', '—', '—', '—', 'One-third of the question’s marks per wrong answer; more than one answer is wrong; a blank is free'],
        ['Medium', '—', '—', '—', 'Hindi in Devanagari and English'],
        ['Shortlisting', '—', '—', '—', 'About fifteen candidates per post, within the minimum efficiency standard'],
      ],
    },
    {
      type: 'table',
      caption: 'Main examination — conventional, three hours a paper.',
      head: ['Paper', 'Marks', 'Content'],
      rows: [
        ['General Hindi', '150', 'A minimum may be prescribed by the government or the commission'],
        ['Essay', '150', 'Three sections — literature, culture, society and politics; science, environment, technology, economy, agriculture, industry and trade; national and international events, calamities and development programmes — one 700-word essay from each'],
        ['General studies I', '200', 'History, culture, geography and society'],
        ['General studies II', '200', 'Constitution, polity, governance and international relations'],
        ['General studies III', '200', 'Economy, science and technology, environment and security'],
        ['General studies IV', '200', 'Ethics, integrity and aptitude'],
        ['General studies V', '200', 'Uttar Pradesh — polity, governance, economy and society'],
        ['General studies VI', '200', 'Uttar Pradesh — history, culture, geography and development'],
        ['Total', '1,500', 'Answers in Hindi, English or Urdu; language papers in their own script'],
        ['Interview', '100', 'General awareness, intelligence, character, expression and suitability'],
        ['Merit', '1,600', 'Mains plus interview; written marks alone for posts whose rules say so'],
      ],
    },
    {
      type: 'note',
      title: 'What the papers look like',
      text: 'The commission has published the 2025 mains papers. The essay paper carries three essays of 50 marks, one from each section; each general studies paper carries twenty compulsory questions in two sections — ten short answers at 125 words and ten long at 200 — printed in Hindi and English. The preliminary’s question papers of 2025 are on the same page. The aptitude paper’s 33 per cent is 66 marks of 200, and a candidate who clears it competes on the 150-question general studies paper alone.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the 2026 and 2025 advertisements on the commission’s site, the 2024 advertisement in the web archive, the commission’s examination calendars of 30 January 2026 and 28 January 2025, its live notifications page and its previous-papers page, from which the 2025 preliminary and mains papers were read. The results, attendance figures, the November 2024 protest and the 2024 final result are from press reports of the commission’s notices, which rotate off its home page; the commission’s own result documents were not found at the date checked. The advertisements are in English with Hindi notes that were not read.`,
    },
    {
      type: 'links',
      title: 'Official documents and pages',
      items: [
        { label: 'PCS 2026 advertisement — A-1/E-1/2026', href: UPPSC.pcs2026 },
        { label: 'PCS 2025 advertisement — A-1/E-1/2025', href: UPPSC.pcs2025 },
        { label: 'PCS 2024 advertisement — A-1/E-1/2024, archived copy', href: UPPSC.pcs2024Archive },
        { label: 'UPPSC — examination calendar 2026', href: UPPSC.calendar2026 },
        { label: 'UPPSC — previous question papers', href: UPPSC.papers },
        { label: 'UPPSC — answer keys', href: UPPSC.keys },
        { label: 'UPPSC — notifications', href: UPPSC.notifications },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'UPPSC PCS syllabus — the prelims general studies and aptitude papers, and the mains general Hindi, essay and six general studies papers from the advertisement.',
      lead: [
        'The syllabus is in the advertisement itself — Appendix 3 for the preliminary and Appendix 4 for the mains.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Prelims Paper I — general studies',
              'Current events, Indian history and the national movement, Indian and world geography, polity and governance, economic and social development, environment and ecology, general science — with Uttar Pradesh throughout.',
            ],
            [
              'Prelims Paper II — aptitude',
              'Comprehension, interpersonal and communication skills, logical reasoning and analytical ability, decision-making and problem-solving, general mental ability, elementary mathematics to class X, general English to class X, general Hindi to class X. Qualifying at 33 per cent.',
            ],
            [
              'Mains — general Hindi and essay',
              'Comprehension, précis, grammar, usage and drafting in Hindi; three 700-word essays from the three sections.',
            ],
            [
              'Mains — general studies I to IV',
              'History, culture, geography and society; Constitution, polity, governance and international relations; economy, science and technology, environment and security; ethics, integrity and aptitude.',
            ],
            [
              'Mains — general studies V and VI',
              'Uttar Pradesh: its polity, governance, economy and society; its history, culture, geography and development.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'PCS 2026 advertisement — Appendices 3 and 4', href: UPPSC.pcs2026 },
            { label: 'UPPSC — syllabus page', href: UPPSC.syllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'UPPSC PCS exam pattern — two 200-mark prelims papers with CSAT at 33 per cent, one-third negative marking, a 1,500-mark mains and a 100-mark interview.',
      lead: [
        'A screen on one paper, a mains of eight, and an interview of a hundred.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules that decide the result.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims merit on Paper I', 'Paper II qualifying at 33 per cent; one-third off per wrong answer; blanks free.'],
            ['Fifteen and three', 'About fifteen per post to the mains; three to the interview.'],
            ['Minimum efficiency standard', '40 per cent, or 35 for SC and ST, at each stage.'],
            ['Mains 1,500', 'Eight conventional papers; no optional; Hindi, English or Urdu.'],
            ['Interview 100', 'Merit on 1,600.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'UPPSC PCS previous papers — the 2025 prelims and mains papers on the commission’s site, the answer-key page, and the archive by year.',
      lead: [
        'The commission publishes its question papers by examination and year, and its answer keys while the objection window is open.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Prelims 2025', note: 'general studies I and II of 12 October 2025, on the previous-papers page.' },
            { text: 'Mains 2025', note: 'general Hindi, essay and general studies I to VI of 29 March to 1 April 2026 — the current format.' },
            { text: 'Earlier cycles', note: 'the 2024 papers on the same scheme and the older optional-subject papers by year.' },
            { text: 'Answer keys', note: 'provisional keys are posted with an objection window of about a week — the 2025 preliminary key on about 20 October with objections to 25 October — and the page is empty between cycles.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'UPPSC — previous question papers', href: UPPSC.papers },
            { label: 'UPPSC — answer keys', href: UPPSC.keys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'UPPSC PCS mock tests — two-hour prelims papers scored at one-third off, and three-hour mains sittings of twenty questions at 125 and 200 words.',
      lead: [
        'Twelve weeks to 6 December: two-hour sittings scored at −0.44 on a 1.33-mark question, and the aptitude paper to 66.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine to the prelims and beyond',
          items: [
            { title: 'Paper I — 150 questions in two hours', text: 'From the 2025 and 2024 papers. One-third off per wrong answer; the merit is this paper alone, and the 2024 cut for 947 posts let 15,066 through.' },
            { title: 'Paper II — 100 questions to 66 marks', text: 'Comprehension, reasoning and class X mathematics, Hindi and English. A qualifying paper that still fails candidates.' },
            { title: 'Mains — three hours by hand', text: 'Twenty questions, ten at 125 words and ten at 200, in one language; the essay paper as three 700-word essays in three hours.' },
            { title: 'General Hindi', text: 'A 150-mark paper with a minimum the commission may prescribe; candidates from English-medium schooling should sit it timed.' },
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
        'UPPSC PCS preparation — the twelve weeks to the 6 December prelims, the separate mains application, and the Uttar Pradesh papers that decide the mains.',
      lead: [
        'Twelve weeks to a one-day preliminary, then a mains in which two of six papers are about Uttar Pradesh.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From now to the select list',
          items: [
            { title: 'To 6 December — the preliminary', text: 'General studies with the state weighted; the aptitude paper to 33 per cent. Check the calendar: the commission labels its dates tentative.' },
            { title: 'Apply again for the mains', text: 'A separate application with the mains fee and self-attested documents after the preliminary result; the 2025 result came seven weeks after the paper.' },
            { title: 'Prepare general studies V and VI as a course', text: 'Four hundred of 1,500 marks on Uttar Pradesh’s polity, economy, society, history, culture and geography.' },
            { title: 'Write in one script', text: 'Hindi, English or Urdu for the general papers; the language papers in their own script.' },
            { title: 'Keep the domicile and category papers ready', text: 'Reservation and relaxation depend on permanent residence in the state; certificates are verified at the interview.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'UPPSC PCS study material — NCERT and standard general studies texts, Uttar Pradesh’s own history, geography and economy, Hindi grammar and essay practice.',
      lead: [
        'The Union pattern with two papers on the state; the state’s own material is the difference.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Prelims general studies', 'NCERT and standard texts for history, geography, polity, economy, environment and science; a year of current affairs', 'Uttar Pradesh weighted.'],
            ['Aptitude', 'Class X mathematics, Hindi and English; a reasoning and comprehension workbook', 'To 33 per cent.'],
            ['Mains general studies I to IV', 'The appendix syllabus section by section; standard texts on governance, economy, science and ethics', 'Twenty questions a paper.'],
            ['Mains general studies V and VI', 'Uttar Pradesh’s history, culture, geography, economy and administration; the state economic survey', 'Four hundred marks.'],
            ['General Hindi and essay', 'Hindi grammar, précis and drafting; essay practice to 700 words', 'Three hundred marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'State PSC exams', to: '/government-exams/state/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the UPPSC PCS 2026 prelims?',
      a: 'On 6 December 2026, by the commission’s examination calendar of 30 January 2026, whose dates are tentative. The advertisement A-1/E-1/2026 of 25 June 2026 for about 500 posts closed on 3 August after an extension, with corrections to 10 August.',
    },
    {
      q: 'How many posts are there in UPPSC PCS 2026?',
      a: 'About 500, as the advertisement says, which may increase or decrease as departments send requisitions — the 2025 advertisement’s about 200 became 920 by the preliminary result, and the 2024 cycle’s about 220 became 947. The cadres include deputy collector, deputy superintendent of police, block development officer, assistant regional transport officer, naib tehsildar, excise inspector and, for the first time, principal of government intermediate college.',
    },
    {
      q: 'What is the UPPSC PCS exam pattern?',
      a: 'A preliminary of two OMR papers of 200 marks and two hours — general studies with 150 questions, counted, and the aptitude test with 100 questions, qualifying at 33 per cent — with one-third of the question’s marks deducted per wrong answer; a main examination of eight conventional papers of three hours — general Hindi 150, essay 150 and general studies I to VI at 200 — for 1,500, with no optional subject; and an interview of 100. About fifteen candidates per post go to the mains and three to the interview.',
    },
    {
      q: 'Is there negative marking in UPPSC PCS?',
      a: 'Yes, in the preliminary: one-third of the marks assigned to a question is deducted for each wrong answer, a question with more than one answer is treated as wrong, and a question left blank carries no penalty. The mains is conventional and has none.',
    },
    {
      q: 'What is the age limit for UPPSC PCS?',
      a: 'Twenty-one to 40 on 1 July of the year — for 2026, born between 2 July 1986 and 1 July 2005 — with five years’ relaxation for SC, ST and OBC candidates of Uttar Pradesh and the state’s employees and skilled players, fifteen for PwD of the state, army service plus three for its ex-servicemen, and up to three for Chief Minister’s fellowship scholars. Candidates from other states get no relaxation. No limit on attempts appears in the advertisement.',
    },
    {
      q: 'What is the UPPSC PCS fee?',
      a: '₹125 for unreserved, EWS, OBC and other states’ candidates at the preliminary — ₹100 plus a ₹25 processing fee — ₹65 for SC and ST of Uttar Pradesh and ex-servicemen, and ₹25 for PwD; at the mains ₹225, ₹105 and ₹25. The same in the 2024, 2025 and 2026 advertisements.',
    },
    {
      q: 'What happened to the UPPSC PCS 2024 prelims?',
      a: 'The commission notified on 5 November 2024 that it would be held in two shifts over 7 and 8 December with normalisation, alongside a three-shift RO/ARO preliminary. Aspirants protested at its Prayagraj headquarters from 11 November, and on 14 November the commission agreed to hold the PCS preliminary in one day on the old pattern and postponed the RO/ARO paper to a committee. The preliminary was held on 22 December 2024 in two sessions of one day; the cycle ended with the final result of 29 March 2026.',
    },
    {
      q: 'When is the UPPSC PCS 2025 mains result?',
      a: 'It had not been published at 11 September 2026. The mains was held from 29 March to 1 April 2026 for 11,727 qualified candidates against 920 posts, and a government review in late August was reported to have set 8 October 2026 as the commission’s deadline for the result. The interviews follow at about three candidates per post.',
    },
  ],
}

/* ── UPPSC RO and ARO ────────────────────────────────────────────
   Review officers and assistant review officers for the secretariat, the
   commission and the Board of Revenue — a two-paper objective preliminary
   of 200, a mains of 400 with a conventional Hindi and drafting paper and
   a Hindi essay, and no interview. The 2023 cycle's preliminary of
   11 February 2024 was cancelled for a leak, re-held on 27 July 2025 in
   one sitting, and the cycle closed with the final result of 6 April
   2026. No new cycle is advertised. */
const UP_ROARO = {
  slug: 'uppsc-ro-and-aro',
  path: '/government-exams/state/uttar-pradesh/uppsc-ro-and-aro/',
  name: 'UPPSC RO and ARO',
  fullName: 'UPPSC Samiksha Adhikari and Sahayak Samiksha Adhikari — Review Officer and Assistant Review Officer Examination',
  authority: 'Uttar Pradesh Public Service Commission (UPPSC)',
  official: OFFICIAL,
  seoTitle: 'UPPSC RO ARO: 2023 Cycle Closed, Pattern, Eligibility, Next Notification',
  metaDescription:
    'UPPSC RO and ARO — the 2023 cycle of 411 posts from the cancelled prelims to the 2025 re-exam and April 2026 result, the 200-mark prelims and 400-mark mains.',
  lead: [
    'Review officers and assistant review officers are the drafting and file-handling cadre of the Uttar Pradesh Secretariat, the commission itself and the Board of Revenue — the officers who write the notes, précis and letters that move a file. The commission recruits them through one examination: an objective preliminary of general studies and Hindi, a main examination of a general studies paper, a conventional Hindi and drafting paper with an objective vocabulary section, and a Hindi essay, and no interview. For the assistant review officer, Hindi typing at 25 words a minute and a computer certificate are qualifications.',
    'The 2023 cycle is the whole recent history. Advertised on 9 October 2023 for 411 posts, its preliminary of 11 February 2024 was cancelled by the Chief Minister on 2 March 2024 after the paper circulated online; its re-examination, first fixed for three shifts in December 2024 and withdrawn under the November protests, was held on 27 July 2025 in a single three-hour sitting for 10.76 lakh applicants; the mains followed on 2 and 3 February 2026 and the final result on 6 April 2026, with 419 selected. No new advertisement has been issued.',
  ],
  quickFacts: [
    ['Conducted by', 'Uttar Pradesh Public Service Commission'],
    ['Latest cycle', 'Advt A-7/E-1/2023, 9 October 2023 — 411 posts, 419 at result: review officer 338, assistant review officer 79, accounts 2'],
    ['Status', 'Cycle closed with the final result of 6 April 2026; no 2025 or 2026 advertisement; nothing in the 2026 calendar'],
    ['Prelims', 'General studies 140 questions and general Hindi 60, 200 marks; one-third off per wrong answer; re-held 27 July 2025 in one sitting'],
    ['Mains', 'General studies 120; Hindi and drafting 100 conventional and 60 objective; Hindi essay 120 — 400; no interview'],
    ['ARO extras', 'Hindi typing at 25 words a minute; the O-level certificate or a computer diploma; commerce with accountancy for the accounts post'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2023 advertisement’s vacancy table shows the cadre: 322 review officers for the Secretariat, 9 for the commission and 3 for the Board of Revenue; 40 assistant review officers for the Secretariat, 23 for the Board of Revenue and 13 for the commission; and one assistant review officer for accounts at the commission — 411 in all, at pay level 8 for review officers and level 7 for assistants. By the preliminary result of September 2025 the posts had become 419, and the commission shortlisted 6,093 candidates for the 338 review officer posts, 1,386 for the 79 assistant posts and 30 for the two accounts posts from 4,54,589 who sat the re-examination.',
    },
    {
      type: 'p',
      text: 'The scheme in the advertisement is a preliminary of two objective papers — general studies of 140 questions in two hours and general Hindi vocabulary and grammar of 60 in one hour, 200 marks with one-third off per wrong answer — and a mains of 400: general studies of 120 objective questions in two hours; general Hindi and drafting in two parts, a conventional paper of 100 in two and a half hours on headings and précis, tabular précis of a government letter, correspondence, English-Hindi vocabulary and idioms and computer knowledge, and an objective vocabulary paper of 60 in half an hour; and a Hindi essay of 120 in three hours, three essays of 600 words. Merit is the mains total alone. The 2025 re-examination merged the two preliminary papers into one three-hour sitting of 200 questions.',
    },
    {
      type: 'list',
      title: 'What the cycle settled',
      items: [
        { text: 'One sitting, with biometrics', note: 'the re-examination of 27 July 2025 ran from 9.30 to 12.30 at about 2,382 centres in all 75 districts with biometric and iris verification, under the state’s 2024 unfair-means law.' },
        { text: 'No interview', note: 'the advertisement’s plan of examination has none; selection is on the mains total, and press descriptions of an interview stage are wrong.' },
        { text: 'Typing is a qualification', note: 'the assistant review officer must possess 25 words a minute in Hindi typing, with preference for English typing, and the O-level or an equivalent computer qualification; whether the commission tests speed after the mains was not found.' },
        { text: 'Fifteen per post, and a floor', note: 'about fifteen candidates per post to the mains, within the minimum efficiency standard of 40 per cent, or 35 for SC and ST.' },
      ],
    },
    {
      type: 'note',
      title: 'The leak and the law',
      text: 'The Special Task Force’s case, as the press reported it, found the February 2024 paper leaked twice — scanned at a Prayagraj centre before the sitting and taken from the Bhopal printing press — with a mastermind also charged in the police constable leak of the same month, more than a dozen arrests through 2024 and one absconder taken in June 2026. The government promulgated the Uttar Pradesh Public Examinations (Prevention of Unfair Means) Ordinance on 1 July 2024, later enacted, with imprisonment up to life and fines up to ₹1 crore, and the commission applied it from the July 2025 re-examination onward.',
    },
  ],
  stages: [
    {
      name: 'Preliminary examination',
      mode: 'Objective, 200 marks',
      detail:
        'General studies, 140 questions and marks, and general Hindi vocabulary and grammar, 60 — two papers of two hours and one in the advertisement, one sitting of three hours in the 2025 re-examination. One-third off per wrong answer. About fifteen candidates per post go through.',
    },
    {
      name: 'Main examination',
      mode: '400 marks over two days',
      detail:
        'General studies, 120 objective questions in two hours; general Hindi and drafting — Part 1 conventional for 100 in two and a half hours, Part 2 objective vocabulary for 60 in half an hour; Hindi essay, three essays of 600 words for 120 in three hours. The 2023 mains was held on 2 and 3 February 2026.',
    },
    {
      name: 'Final result and verification',
      mode: 'Merit on the mains; no interview',
      detail:
        'Selection by preference and reservation on the mains total, provisional until documents are verified — 419 candidates on 6 April 2026 from 5,930 who sat the mains.',
    },
    {
      name: 'ARO qualifications',
      mode: 'Typing and computer certificate',
      detail:
        'Hindi typing at 25 words a minute, the O-level certificate or a computer science diploma for the commission’s posts, and a commerce degree with accountancy for the accounts post — held as qualifications.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No RO/ARO window is open and no new cycle is advertised: the commission’s live notifications page carries none, and its 2026 calendar lists only the 2023 mains of 2 and 3 February 2026. The 2023 cycle ran as follows. Applications from 9 October to 9 November 2023, extended to 24 November. Preliminary 11 February 2024 at 2,387 centres, cancelled on 2 March 2024 by the Chief Minister’s order with a re-examination within six months and a Special Task Force inquiry. Re-examination first notified on 5 November 2024 for three shifts on 22 and 23 December, withdrawn on 14 November after the Prayagraj protests and referred to a committee — the commission’s 2025 calendar records the referral — then fixed for one day and held on 27 July 2025. Result 16 September 2025 with 7,509 through. Mains moved from 31 January to 2 and 3 February 2026. Final result 6 April 2026, 419 selected.`,
    },
    {
      type: 'table',
      caption: 'The 2023 cycle, from the advertisement, the commission’s calendars and press reports of its notices.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement A-7/E-1/2023', '9 October 2023', '411 posts; applications to 9 November, extended to 24 November'],
        ['Preliminary', '11 February 2024', '2,387 centres in 58 districts; 10,69,725 applicants'],
        ['Cancellation', '2 March 2024', 'Ordered by the Chief Minister after the paper circulated; FIR at Civil Lines, Prayagraj, 4 March'],
        ['Three-shift re-examination notified and withdrawn', '5 and 14 November 2024', 'Withdrawn after the protests; committee constituted'],
        ['Re-examination', '27 July 2025', 'One sitting, 9.30 to 12.30; about 2,382 centres; 10,76,004 applicants; 4,54,589 appeared'],
        ['Preliminary result', '16 September 2025', '7,509 shortlisted — 6,093 review officer, 1,386 assistant, 30 accounts'],
        ['Mains', '2 and 3 February 2026', 'General studies and Hindi and drafting on day one; essay on day two'],
        ['Final result', '6 April 2026', '419 provisionally selected from 5,930 who sat the mains'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'UPPSC — home and latest notices', href: UPPSC.home },
        { label: 'UPPSC — notifications and advertisements', href: UPPSC.notifications },
        { label: 'UPPSC — examination calendar 2026', href: UPPSC.calendar2026 },
        { label: 'RO/ARO 2023 advertisement — archived copy', href: UPPSC.roaro2023Archive },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2023 advertisement. Age on 1 July 2023 for that cycle.',
      head: ['Post', 'Qualification'],
      rows: [
        ['Review officer', 'A bachelor’s degree of a university established by law in India, or equivalent, by the closing date.'],
        ['Assistant review officer', 'A bachelor’s degree; the O-level certificate of the DOEACC Society or equivalent — a diploma in computer science or O-level for the commission’s posts; a minimum of 25 words a minute in Hindi typewriting, with preference for English typewriting.'],
        ['Assistant review officer, accounts', 'A bachelor’s degree in commerce with accountancy; preference for two years in the Territorial Army or an NCC B certificate.'],
      ],
    },
    {
      type: 'table',
      caption: 'Age, domicile, fee and standard.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Age', '21 to 40 on 1 July — born between 2 July 1983 and 1 July 2002 in the 2023 cycle; 55 for PwD; five years for SC, ST and OBC of Uttar Pradesh and the state’s employees and players; fifteen for PwD of the state; ex-servicemen under the rules.'],
        ['Domicile', 'Reservation and age relaxation only for permanent residents of Uttar Pradesh.'],
        ['Fee — preliminary', '₹125 for unreserved, EWS and OBC — ₹100 plus ₹25 processing; ₹65 for SC and ST; ₹25 for PwD; ₹65 for ex-servicemen.'],
        ['Fee — mains', '₹225; ₹105 for SC and ST and ex-servicemen; ₹25 for PwD.'],
        ['Minimum efficiency standard', '40 per cent; 35 for SC and ST. About fifteen candidates per post to the mains.'],
        ['Pay', 'Review officer level 8, ₹47,600 to ₹1,51,100; assistant review officer level 7, ₹44,900 to ₹1,42,400.'],
      ],
    },
    {
      type: 'p',
      text: 'No condition of Hindi at the intermediate examination appears in the advertisement; the Hindi requirement is the examination itself — a 60-mark Hindi paper in the preliminary and 280 of the mains’ 400 marks in Hindi drafting, vocabulary and essay — and, for the assistant, the typing speed. The 30-words-a-minute figure sometimes quoted was not found in the advertisement.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Preliminary examination, from Appendix 3 of the 2023 advertisement.',
      head: ['Paper', 'Questions', 'Marks', 'Time', 'Content'],
      rows: [
        ['General studies', '140', '140', '2 hours', 'General science; Indian history and the national movement; polity, economy and culture; agriculture, commerce and trade; population, ecology and urbanisation; world geography and India’s natural resources; current events; general intelligence; special knowledge of Uttar Pradesh'],
        ['General Hindi', '60', '60', '1 hour', 'Opposites, sentence correction, one-word substitution, words of the same use, adjective and noun, synonyms — ten each'],
        ['Total', '200', '200', 'One sitting of three hours in the 2025 re-examination', 'One-third of the question’s marks off per wrong answer'],
      ],
    },
    {
      type: 'table',
      caption: 'Main examination, from Appendix 4.',
      head: ['Paper', 'Marks', 'Time', 'Content'],
      rows: [
        ['General studies — objective', '120, 120 questions', '2 hours', 'As the preliminary'],
        ['General Hindi and drafting — Part 1, conventional', '100', '2½ hours', 'Heading, précis and explanation of a passage 21; tabular précis of a government letter 15; correspondence 24; definitional vocabulary English to Hindi and Hindi to English 10 and 10; idioms 10; computer knowledge 10'],
        ['General Hindi and drafting — Part 2, objective vocabulary', '60', '½ hour', 'Five items of twelve questions'],
        ['Hindi essay', '120', '3 hours', 'Three essays of 600 words at 40 each, one from each of three sections'],
        ['Total', '400', '—', 'Merit on the mains total; no interview'],
      ],
    },
    {
      type: 'note',
      title: 'What the advertisement says and the press does not',
      text: 'The plan of examination lists a preliminary and a mains and states that selection is by merit on the total marks of the main written examination. There is no interview and no typing-test stage in it; the assistant review officer’s typing speed is a qualification. The objective papers carry the commission’s standard rule — one-third of the question’s marks off for a wrong answer, more than one answer wrong, a blank free — in the preliminary and the mains alike.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the 2023 advertisement in the web archive — the commission’s own copy now redirects — the commission’s examination calendars of 2025 and 2026, and its live notifications page. The cancellation, the re-examination’s conduct, the results and the Special Task Force case are from press reports of the commission’s notices and the government’s statements; the commission’s re-examination notice and result documents had rotated off its home page and were not found. Press accounts differ on small points — the objection deadline for the 2025 key, and the split of the 411 posts — and the advertisement’s table is followed here.`,
    },
    {
      type: 'links',
      title: 'Official documents and pages',
      items: [
        { label: 'RO/ARO 2023 advertisement — A-7/E-1/2023, archived copy', href: UPPSC.roaro2023Archive },
        { label: 'UPPSC — examination calendar 2026', href: UPPSC.calendar2026 },
        { label: 'UPPSC — previous question papers', href: UPPSC.papers },
        { label: 'UPPSC — answer keys', href: UPPSC.keys },
        { label: 'UPPSC — notifications', href: UPPSC.notifications },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'UPPSC RO ARO syllabus — general studies with Uttar Pradesh, the general Hindi vocabulary and grammar items, the drafting paper’s heads, and the Hindi essay.',
      lead: [
        'The syllabus is in the advertisement’s appendices, and the Hindi papers are itemised down to the number of questions per head.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'General studies — prelims 140, mains 120',
              'General science; Indian history and the national movement; Indian polity, economy and culture; agriculture, commerce and trade; population, ecology and urbanisation; world geography and India’s natural resources; current national and international events; general intelligence; special knowledge of Uttar Pradesh’s education, culture, agriculture, trade, social customs and traditions.',
            ],
            [
              'General Hindi — prelims 60',
              'Opposites; sentence correction; one-word substitution; words of the same use; adjectives and their nouns; synonyms — ten questions each.',
            ],
            [
              'Hindi and drafting — mains Part 1, 100',
              'Heading, précis and explanation of a passage; précis of a government letter in tabular form; correspondence — official, semi-official, office memorandum and notes; definitional vocabulary English to Hindi and Hindi to English; idioms and phrases; computer knowledge.',
            ],
            [
              'Hindi vocabulary — mains Part 2, 60',
              'Five items of twelve — the prelims heads at greater length.',
            ],
            [
              'Hindi essay — 120',
              'Three sections — literature and culture, social sphere, political sphere; science, environment and technology, economic sphere, agriculture and trade; national and international events, natural calamities, national development programmes — one 600-word essay from each.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus document',
          items: [
            { label: 'RO/ARO 2023 advertisement — Appendices 3 and 4', href: UPPSC.roaro2023Archive },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'UPPSC RO ARO exam pattern — 200-mark objective prelims with one-third negative marking, 400-mark mains with drafting and Hindi essay, and no interview.',
      lead: [
        'Two hundred to get in, four hundred to rank, and no interview.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims 200', 'General studies 140, Hindi 60; one sitting since 2025; about fifteen per post through.'],
            ['Negative marking', 'One-third per wrong answer in every objective paper; blanks free.'],
            ['Mains 400', 'General studies 120 objective; Hindi and drafting 100 conventional and 60 objective; essay 120.'],
            ['Merit', 'The mains total; no interview.'],
            ['ARO', 'Typing at 25 words a minute and a computer certificate as qualifications.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'UPPSC RO ARO previous papers — the commission’s archive by year, including the 2025 re-examination paper, and the answer-key page.',
      lead: [
        'The commission publishes its papers by examination and year; the 2025 re-examination paper is the current single-sitting format.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Preliminary 2025 re-examination', note: 'the 200-question paper of 27 July 2025 under the Samiksha Adhikari entry of the previous-papers page; the provisional key ran an objection window to early August.' },
            { text: 'Mains 2023', note: 'the general studies, Hindi and drafting and essay papers of 2 and 3 February 2026.' },
            { text: 'Earlier cycles', note: 'the 2016 and 2021 papers on the same scheme.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'UPPSC — previous question papers', href: UPPSC.papers },
            { label: 'UPPSC — answer keys', href: UPPSC.keys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'UPPSC RO ARO mock tests — 200-question three-hour prelims sittings scored at one-third off, and timed précis, correspondence and essay practice for the mains.',
      lead: [
        'The preliminary is now one sitting of 200 questions in three hours; the mains is Hindi drafting under the clock.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Prelims — 200 questions in three hours', text: 'A hundred and forty of general studies and sixty of Hindi vocabulary, scored at one-third off. The 2025 cut let 7,509 through from 4.5 lakh.' },
            { title: 'Drafting — 100 marks in two and a half hours', text: 'A précis with heading, a tabular précis of a government letter, a piece of official correspondence, twenty vocabulary items, idioms and a computer question — timed.' },
            { title: 'Essay — three in three hours', text: 'Six hundred words each, one from each section; forty marks a piece.' },
            { title: 'Typing', text: 'Twenty-five words a minute in Hindi for the assistant post; keep the certificate and the speed.' },
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
        'UPPSC RO ARO preparation — waiting for the next advertisement, the Hindi-heavy mains, the ARO typing and computer qualifications, and the unfair-means law.',
      lead: [
        'No cycle is open; the preparation is for a Hindi drafting examination whose next advertisement has no date.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From advertisement to result',
          items: [
            { title: 'Watch the notifications page and the calendar', text: 'The 2023 cycle took thirty months; the next advertisement will set its own dates and, on the 2025 precedent, a single-sitting preliminary.' },
            { title: 'Get the ARO qualifications first', text: 'The O-level or equivalent and Hindi typing at 25 words a minute are qualifications by the closing date, not later tests.' },
            { title: 'Prepare Hindi as 280 of 400', text: 'Drafting, vocabulary and essay decide the mains; general studies is 120.' },
            { title: 'Learn government drafting', text: 'The précis of a government letter in tabular form and official correspondence are set every cycle and are unfamiliar to most graduates.' },
            { title: 'Follow the biometric rules', text: 'Iris and biometric verification and the 2024 Act’s penalties apply at every sitting.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'UPPSC RO ARO study material — general studies with Uttar Pradesh, a Hindi vocabulary and grammar reader, government drafting manuals, and essay practice.',
      lead: [
        'General studies as for the PCS preliminary, and Hindi as a craft — vocabulary, drafting and the essay.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['General studies', 'NCERT and standard texts; Uttar Pradesh’s history, geography, economy and culture; a year of current affairs', 'Prelims 140, mains 120.'],
            ['Hindi vocabulary and grammar', 'A Hindi grammar with opposites, synonyms, one-word substitutions and idioms', 'Prelims 60, mains 60.'],
            ['Drafting', 'The secretariat manual’s forms of correspondence; précis practice; the English-Hindi administrative glossary', 'Mains 100.'],
            ['Essay', 'Essay practice to 600 words across the three sections', 'Mains 120.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'UPPSC PCS', to: '/government-exams/state/uttar-pradesh/uppsc-pcs/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the next UPPSC RO ARO exam?',
      a: 'No new advertisement has been issued. The 2023 cycle closed with the final result of 6 April 2026, the commission’s live notifications page carries no RO/ARO recruitment, and its 2026 calendar lists only the 2023 mains of 2 and 3 February 2026.',
    },
    {
      q: 'What is the UPPSC RO ARO exam pattern?',
      a: 'A preliminary of general studies, 140 questions, and general Hindi vocabulary and grammar, 60 — 200 marks, objective, with one-third of the question’s marks deducted per wrong answer, held in one three-hour sitting in the 2025 re-examination; then a mains of 400 — general studies 120 objective, general Hindi and drafting 100 conventional and 60 objective, and a Hindi essay of 120 — with merit on the mains total and no interview.',
    },
    {
      q: 'Is there an interview for UPPSC RO ARO?',
      a: 'No. The advertisement’s plan of examination has a preliminary and a mains only, and states that selection is by merit on the total marks of the main written examination. The assistant review officer’s Hindi typing speed of 25 words a minute is an eligibility qualification, not a test stage.',
    },
    {
      q: 'What is the eligibility for UPPSC RO ARO?',
      a: 'A bachelor’s degree for review officer; for assistant review officer, a degree plus the O-level certificate or an equivalent computer qualification and Hindi typing at 25 words a minute, with preference for English typing; for the accounts post, a commerce degree with accountancy. Age 21 to 40 on 1 July, with five years for SC, ST and OBC candidates of Uttar Pradesh and fifteen for PwD of the state; no relaxation for other states’ candidates.',
    },
    {
      q: 'What is the UPPSC RO ARO fee?',
      a: '₹125 for unreserved, EWS and OBC candidates at the preliminary — ₹100 plus ₹25 processing — ₹65 for SC and ST and ex-servicemen, and ₹25 for PwD; ₹225, ₹105 and ₹25 at the mains.',
    },
    {
      q: 'Why was the UPPSC RO ARO exam cancelled?',
      a: 'The preliminary of 11 February 2024 was cancelled by the Chief Minister on 2 March 2024 after the paper circulated on social media, with a Special Task Force inquiry and a re-examination ordered. The inquiry, as reported, found the paper leaked from a Prayagraj centre and from the printing press, with more than a dozen arrests. The re-examination was held on 27 July 2025 in a single sitting after a three-shift plan was withdrawn under the November 2024 protests.',
    },
    {
      q: 'What was the UPPSC RO ARO 2023 result?',
      a: 'The re-examination of 27 July 2025, sat by 4,54,589 candidates, shortlisted 7,509 on 16 September 2025 — 6,093 for 338 review officer posts, 1,386 for 79 assistant posts and 30 for two accounts posts. The mains of 2 and 3 February 2026 was sat by 5,930, and the final result of 6 April 2026 selected 419 provisionally, subject to document verification.',
    },
    {
      q: 'What is the Uttar Pradesh Public Examinations (Prevention of Unfair Means) Act?',
      a: 'The state’s anti-leak law, promulgated as an ordinance on 1 July 2024 after the RO/ARO and police constable leaks and later enacted, providing imprisonment up to life and fines up to ₹1 crore, attachment of property and cognisable, non-bailable offences for leaking or cheating in public examinations. The commission has applied it to every sitting since, including the RO/ARO re-examination of July 2025 and the PCS preliminary of October 2025.',
    },
  ],
}

/* ── UPSSSC landing pages ───────────────────────────────────────
   The commission lists notices only while their display window runs; the
   ViewPdf links keep working after de-listing, and its older notices sit
   on the NIC document server. The pages below are stable entries. */
const UPSSSC = {
  home: 'https://upsssc.gov.in/',
  notifications: 'https://upsssc.gov.in/AllNotifications.aspx',
  results: 'https://upsssc.gov.in/ResultsDire.aspx',
  otr: 'https://upsssc.gov.in/OTR/otr/OTRLogin.aspx',
  petAdmit: 'https://upsssc.gov.in/upssscadmitcard/AdmitCard.aspx?ID=P',
  mainsAdmit: 'https://upsssc.gov.in/upssscadmitcard/admitCard.aspx?ID=MAIN',
  candidateLogin: 'https://upsssc.gov.in/Online_App/Can_login_app.aspx',
  calendar2026: 'https://upsssc.gov.in/ViewPdf.aspx?qgM0wYrv9BlfgcbXKAbfp1ndqm/fy3LuA/nVzushm7Q=',
  otrNotice: 'https://upsssc.gov.in/ViewPdf.aspx?YLZ1tKAtaiY6scDDR94IWt29SFu57FbUHrV3uMfCnjw=',
}

/* ── UPSSSC PET ─────────────────────────────────────────────────
   The Preliminary Eligibility Test: one 100-mark OMR paper that every
   Group C recruitment of the commission draws its shortlist from, at
   fifteen candidates per post on the normalised score. Annual since 2025
   with a three-year score. PET 2026 closed on 7 September and is examined
   on 23 to 25 October. */
const UP_PET_SRC = {
  advt2025: 'https://upsssc.gov.in/ViewPdf.aspx?tOQhA8AoFpWAWZlP+1jpvDH+Y6wRxaLDiEEoQsPJaag=',
  advt2026Mirror: 'https://www.sarkariresult.com/wp-content/uploads/2026/07/upsssc-Pet_2026.pdf',
  schedule2026: 'https://upsssc.gov.in/ViewPdf.aspx?PA/fJh/lxObOB7cITC5EX8On43KGKg8R7nLWBSVT5Kg=',
  extension2026: 'https://upsssc.gov.in/ViewPdf.aspx?LJ0+xev5beONonuJqHYqzalkDoiHjXjUT+IVyXzTJGE=',
  schedule2025: 'https://upsssc.gov.in/ViewPdf.aspx?diL50WkEATk0ljuG3v2ov3zevhE72Gr1VTAdcubLs3E=',
  keys2025: 'https://upsssc.gov.in/ViewPdf.aspx?eHTDX15eWHYFIc9kZSaxJqQKQnOZfmlu56MM1R/PxRQ=',
  advt2023: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2308011707401322_C.pdf',
  result2023: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2401291856381048_C.pdf',
}

const UP_PET = {
  slug: 'upsssc-pet',
  path: '/government-exams/state/uttar-pradesh/upsssc-pet/',
  name: 'UPSSSC PET',
  fullName: 'Uttar Pradesh Subordinate Services Selection Commission — Preliminary Eligibility Test',
  authority: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC)',
  official: 'upsssc.gov.in',
  seoTitle: 'UPSSSC PET 2026: Exam 23–25 Oct, Pattern, Syllabus, Score Validity, Cut-off',
  metaDescription:
    'UPSSSC PET 2026 — exam 23 to 25 October 2026. The 100-mark paper with a quarter off per wrong answer, normalisation, the three-year score and cut-offs.',
  lead: [
    'The Preliminary Eligibility Test is the gate to every Group C post the Uttar Pradesh Subordinate Services Selection Commission fills — lekhpal, junior assistant, forest guard, excise constable, pharmacist, junior engineer and the rest. Under the state’s two-tier system of November 2020, only a candidate who sat the PET and holds a score card may apply for a mains, and the commission shortlists fifteen candidates per post from the PET score for each mains it holds. One paper of 100 questions in two hours, on OMR, with a quarter mark off per wrong answer and the score normalised across shifts.',
    'The test is now annual with a three-year score. PET 2025, notified on 2 May 2025 and held on 6 and 7 September 2025 in four shifts at 1,479 centres, feeds the twenty-one mains the commission advertised in 2026 — the lekhpal round of 7,994 posts among them. PET 2026, advertised on 1 August 2026, took applications from 3 August to 7 September after a week’s extension and is examined on 23, 24 and 25 October 2026 in two shifts a day. A candidate with more than one valid score applies on the highest.',
  ],
  quickFacts: [
    ['Conducted by', 'Uttar Pradesh Subordinate Services Selection Commission'],
    ['PET 2026', 'Advt 16-Exam/2026, 1 August 2026; applications 3 August to 7 September; exam 23, 24 and 25 October 2026, 10 to 12 and 3 to 5'],
    ['Status', 'Applications and corrections closed; admit cards to follow; PET 2025 scores in use for the 2026 mains'],
    ['Paper', '100 questions, 100 marks, two hours, OMR; a quarter off per wrong answer; normalised across shifts'],
    ['Score', 'Valid three years from the result’s upload, under the order of 28 April 2025; the highest valid score is used'],
    ['Eligibility and fee', 'High school; 18 to 40 on 1 July 2026; ₹185, ₹95 for SC and ST, ₹25 for PwD'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The PET was created by the government order of 20 November 2020: every Group C post advertised after that date is filled through a preliminary test and a mains, and the commission shortlists fifteen candidates per post, category by category, from the preliminary’s normalised score, including everyone tied at the cut-off to two decimal places. A candidate with a zero or negative score is not shortlisted. The order of 28 April 2025 made the test annual and its score valid for three years, replacing the one-year validity under which PET 2023’s scores, published on 29 January 2024, expired in January 2025.',
    },
    {
      type: 'p',
      text: 'The scheme has not changed since the order of 19 February 2021. Fifteen heads make up the 100 marks: Indian history, the national movement, geography, the Indian economy, the Constitution and public administration, general science, elementary arithmetic, general Hindi, general English and logic and reasoning at five marks each; current affairs and general awareness at ten each; and three analytical heads of ten each — two unseen Hindi passages, two graphs and two tables, five questions on each. The first nine heads are set at NCERT secondary and senior-secondary level. A quarter mark is deducted for each wrong answer, and where the test runs in more than one shift the scores are normalised under the commission’s notice of 22 May 2019.',
    },
    {
      type: 'list',
      title: 'How the score is used',
      items: [
        { text: 'Fifteen per post', note: 'the lekhpal mains of 2026 shortlisted 3,66,712 candidates for 7,994 posts; the 2022 lekhpal round 2,47,667 for 8,085 from 13.9 lakh applications.' },
        { text: 'A normalised cut-off by category', note: 'the lekhpal 2025 mains cut the PET score at 55.12 for the unreserved, SC, OBC and EWS categories and 47.50 for ST, with much lower horizontal cut-offs — 38.63 for freedom fighters’ dependants and near zero for ex-servicemen.' },
        { text: 'A separate application for each mains', note: 'at ₹25 processing, with the mains examination fee — ₹200, ₹80 for SC and ST, nil for PwD — charged only to the shortlisted before the admit card.' },
        { text: 'Twenty-one mains from one PET', note: 'the commission advertised 01- to 21-Exam/2026 on PET 2025 — pharmacist, assistant statistical officer, lower subordinate services, excise constable, forest guard, cane supervisor, auditor, livestock extension officer, veterinary pharmacist, junior engineer agriculture, computer operator and more.' },
      ],
    },
    {
      type: 'note',
      title: 'One-time registration since July 2026',
      text: 'The commission’s notice of 14 July 2026 made a free one-time registration mandatory before any PET or mains application — new, or completed with a PET 2025 registration number — with an OTP-verified mobile and email, a photograph under six months old and a signature with the name in Hindi. Under the modification notice of 31 July, corrections must be made before registering for the next PET; a registration linked to PET 2025 cannot change name, date of birth or mobile, and a fresh one cannot change the mobile. Aadhaar authentication is used at later stages.',
    },
  ],
  stages: [
    {
      name: 'Registration and application',
      mode: 'One-time registration, then the PET form',
      detail:
        'PET 2026: applications and fee from 3 August to 1 September 2026, extended to 7 September by the corrigendum of 1 September, with corrections from 10 August to 8 September. ₹185 for unreserved and OBC candidates, ₹95 for SC and ST, ₹25 for PwD — each including a ₹25 processing fee.',
    },
    {
      name: 'The test',
      mode: '100 questions, two hours, OMR, in shifts over three days',
      detail:
        'PET 2026 on 23, 24 and 25 October 2026, 10 to 12 and 3 to 5. Fifteen heads of five to ten marks; a quarter off per wrong answer; scores normalised across the six shifts. Exam-district advance information and admit cards from the commission’s portal.',
    },
    {
      name: 'Keys and score',
      mode: 'Provisional key, objections, revised key, score card',
      detail:
        'PET 2025: provisional key 9 September 2025, objection link 11 September, shift-wise revised keys 18 November, and the result in early December. The score card carries the normalised score to two decimals, valid three years.',
    },
    {
      name: 'The mains',
      mode: 'Fifteen per post on the PET score',
      detail:
        'Each mains has its own advertisement, ₹25 application and shortlist; the shortlisted pay the mains fee and sit a 100-mark paper, with a typing test for clerical posts. No interview under the 2017 rules.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. PET 2026 is between application and examination. Advertised on 1 August 2026 as 16-Exam/2026, it took applications from 3 August with a closing date of 1 September, extended to 7 September by the corrigendum of 1 September, and corrections to 8 September; the schedule notice of 9 September fixes the test for 23, 24 and 25 October 2026 in two shifts a day, 10 to 12 and 3 to 5. Admit cards and exam districts had not been announced. PET 2025 — held on 6 and 7 September 2025 in 48 districts at 1,479 centres, provisional key 9 September, revised keys 18 November, result in early December — is the score the 2026 mains use. No PET was held in 2024; the mains of 2024-25 drew on PET 2023, whose result of 29 January 2024 cancelled 31 candidates for booklet-number errors and held 75 for unfair means.`,
    },
    {
      type: 'table',
      caption: 'The cycles, from the advertisements and notices.',
      head: ['Cycle', 'Advertisement', 'Applications', 'Examination', 'Result and validity'],
      rows: [
        ['PET 2026', '16-Exam/2026, 1 August 2026', '3 August to 7 September 2026, extended from 1 September', '23, 24 and 25 October 2026, two shifts a day', 'Three years from upload'],
        ['PET 2025', '01-Exam/2025, 2 May 2025', '14 May to 17 June 2025', '6 and 7 September 2025, four shifts, 1,479 centres in 48 districts', 'Early December 2025; three years'],
        ['PET 2024', 'None held', '—', '—', 'The 2024-25 mains used PET 2023'],
        ['PET 2023', '07-Exam/2023, 1 August 2023', '1 to 30 August 2023', '28 and 29 October 2023, two shifts a day', '29 January 2024; one year'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, from the 2025 and 2026 advertisements — examination fee plus ₹25 processing.',
      head: ['Category', 'Fee'],
      rows: [
        ['Unreserved and OBC', '₹160 + ₹25 = ₹185'],
        ['SC and ST', '₹70 + ₹25 = ₹95'],
        ['PwD', '₹25'],
        ['Women, freedom fighters’ dependants, ex-servicemen, sportspersons', 'By original category'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'UPSSSC — all notifications', href: UPSSSC.notifications },
        { label: 'PET 2026 — examination schedule, 9 September 2026', href: UP_PET_SRC.schedule2026 },
        { label: 'PET 2026 — extension corrigendum, 1 September 2026', href: UP_PET_SRC.extension2026 },
        { label: 'PET admit card', href: UPSSSC.petAdmit },
        { label: 'One-time registration', href: UPSSSC.otr },
        { label: 'UPSSSC — results', href: UPSSSC.results },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the PET 2026 advertisement. Age on 1 July 2026.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'High school or equivalent, held by the closing date.'],
        ['Age', '18 to 40 on 1 July 2026 — and reckoned afresh under the department’s rules for each mains.'],
        ['Relaxation', 'SC, ST and OBC as the government notifies; skilled sportspersons five years; ex-servicemen three years with conditions; PwD fifteen years; state government employees five years.'],
        ['Registration', 'One-time registration first; a PET 2025 registration number completes it.'],
        ['Score use', 'Only a candidate with a positive numerical score is shortlisted; where more than one score is valid, the highest is used.'],
      ],
    },
    {
      type: 'p',
      text: 'The PET sets no domicile condition; reservation in the mains follows each department’s rules and the state’s residence requirements, and the commission applies the Uttar Pradesh Public Examinations (Prevention of Unfair Means) Act 2024 to the test.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The paper, from the annexure of the 2026 advertisement — unchanged since the order of 19 February 2021. 100 questions, 100 marks, two hours, OMR.',
      head: ['Head', 'Marks', 'Level'],
      rows: [
        ['Indian history', '5', 'NCERT secondary and senior secondary'],
        ['Indian national movement', '5', 'As above'],
        ['Geography', '5', 'As above'],
        ['Indian economy', '5', 'As above'],
        ['Indian Constitution and public administration', '5', 'As above'],
        ['General science', '5', 'As above'],
        ['Elementary arithmetic', '5', 'As above'],
        ['General Hindi', '5', 'As above'],
        ['General English', '5', 'As above'],
        ['Logic and reasoning', '5', '—'],
        ['Current affairs', '10', '—'],
        ['General awareness', '10', '—'],
        ['Two unseen Hindi passages', '10', 'Five questions each'],
        ['Two graphs', '10', 'Five questions each'],
        ['Two tables', '10', 'Five questions each'],
      ],
    },
    {
      type: 'note',
      title: 'Negative marking, normalisation and the cut',
      text: 'The advertisement states that a quarter mark is deducted for every wrong answer. Where the test is held in more than one shift or on more than one day, the scores are normalised for comparative evaluation under the commission’s notice of 22 May 2019, and it is the normalised score, to two decimals, that the mains advertisements shortlist on — the percentile printed on PET 2023 score cards has given way to the normalised score. The cut for a mains is whatever score admits fifteen candidates per post in each category, ties included.',
    },
    {
      type: 'list',
      title: 'What the 2025 and 2026 documents settle',
      items: [
        { text: 'Three days, six shifts', note: 'PET 2026 runs over 23, 24 and 25 October in morning and afternoon shifts; PET 2025 ran over two days and four.' },
        { text: 'Keys by shift', note: 'the commission publishes a master-set revised key for each shift; the question papers themselves are not published.' },
        { text: 'The score is a ranking tool', note: 'there is no pass mark; a positive score qualifies a candidate to apply, and the mains shortlist decides.' },
        { text: 'Age is re-reckoned', note: 'the PET age limit is 18 to 40; each mains applies its own rules and date.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the PET 2025 advertisement on the commission’s site, the PET 2026 advertisement read from a mirror of the commission’s PDF after its de-listing, the 2026 schedule notice and extension corrigendum, the PET 2025 schedule and revised-key notices, the 2023 advertisement and result notice on the commission’s NIC document server, the one-time registration notices of July 2026, and the lekhpal and junior assistant mains advertisements for the shortlisting rules and cut-offs. Candidate counts were not found in official documents; the PET 2025 result date is reported variously as 5 and 9 December 2025 and the notice was not found.`,
    },
    {
      type: 'links',
      title: 'Official documents and pages',
      items: [
        { label: 'PET 2025 advertisement — 01-Exam/2025', href: UP_PET_SRC.advt2025 },
        { label: 'PET 2026 advertisement — 16-Exam/2026, mirror of the commission’s PDF', href: UP_PET_SRC.advt2026Mirror },
        { label: 'PET 2026 — examination schedule', href: UP_PET_SRC.schedule2026 },
        { label: 'PET 2025 — examination schedule', href: UP_PET_SRC.schedule2025 },
        { label: 'PET 2025 — revised keys, 18 November 2025', href: UP_PET_SRC.keys2025 },
        { label: 'PET 2023 — advertisement', href: UP_PET_SRC.advt2023 },
        { label: 'PET 2023 — result notice, 29 January 2024', href: UP_PET_SRC.result2023 },
        { label: 'One-time registration notice, 14 July 2026', href: UPSSSC.otrNotice },
        { label: 'UPSSSC — examination calendar 2026', href: UPSSSC.calendar2026 },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'UPSSSC PET syllabus — the fifteen heads of the 100-mark paper at NCERT level, from history and the Constitution to Hindi passages, graphs and tables.',
      lead: [
        'The syllabus is the annexure of the advertisement: fifteen heads, nine of them at NCERT secondary and senior-secondary level.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Indian history and the national movement — 10',
              'Indus valley to the Mughals and the British; the 1857 rising, the Congress, Gandhi, the movements to 1947.',
            ],
            [
              'Geography, economy, Constitution and administration — 15',
              'Indian and world physical geography; planning, agriculture, industry and the budget; the Constitution’s features, rights, Parliament, judiciary and local government.',
            ],
            [
              'General science, arithmetic, Hindi, English, reasoning — 25',
              'Physics, chemistry and biology to class X; number work, percentages, ratio and averages; Hindi grammar and vocabulary; English grammar and comprehension; series, coding, analogies and syllogisms.',
            ],
            [
              'Current affairs and general awareness — 20',
              'National and international events; awards, sports, books, neighbours, organisations and Uttar Pradesh.',
            ],
            [
              'Passages, graphs and tables — 30',
              'Two unseen Hindi passages, two graphs and two tables, five questions on each.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'PET 2025 advertisement — annexure', href: UP_PET_SRC.advt2025 },
            { label: 'PET 2026 advertisement — annexure, mirror', href: UP_PET_SRC.advt2026Mirror },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'UPSSSC PET exam pattern — 100 questions in two hours, a quarter off per wrong answer, normalisation, a three-year score and the fifteen-per-post shortlist.',
      lead: [
        'One paper that ranks rather than passes, and a score that lasts three years.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['100 questions, 100 marks, two hours', 'OMR; fifteen heads.'],
            ['Negative marking', 'A quarter mark per wrong answer.'],
            ['Normalisation', 'Across shifts under the 2019 notice; the normalised score to two decimals is the score.'],
            ['Validity', 'Three years from the result’s upload; highest valid score used.'],
            ['Shortlist', 'Fifteen per post per category for each mains, ties included; zero or negative scores excluded.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'UPSSSC PET previous papers — the shift-wise revised keys of 2025 and 2023, and why the commission publishes keys rather than papers.',
      lead: [
        'The commission publishes master-set revised keys for each shift, not the booklets; candidates’ copies of the papers circulate.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'PET 2025', note: 'four shift-wise revised keys of 18 November 2025 on the commission’s site — the descriptive master-set keys.' },
            { text: 'PET 2023', note: 'the keys of November 2023 and the result notice of 29 January 2024.' },
            { text: 'PET 2021 and 2022', note: 'the earlier annual tests on the same scheme.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'PET 2025 — revised key, 6 September shift 1', href: UP_PET_SRC.keys2025 },
            { label: 'UPSSSC — all notifications', href: UPSSSC.notifications },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'UPSSSC PET mock tests — two-hour 100-question sittings with the fifteen weights, scored at a quarter off, six weeks before 23 October.',
      lead: [
        'Six weeks to 23 October: full sittings at the fifteen weights, scored at −0.25.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: '100 questions in two hours', text: 'At the advertisement’s weights — 45 of core subjects at five each, 20 of current affairs and awareness, 30 of passages, graphs and tables.' },
            { title: 'Score against the cut, not a pass', text: 'The lekhpal 2025 shortlist cut the unreserved score at 55.12; a junior assistant shortlist will cut differently. Work to a target score.' },
            { title: 'Drill the analytical thirty', text: 'Two passages, two graphs and two tables are thirty marks of reading and arithmetic under time — the cheapest marks for a careful candidate.' },
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
        'UPSSSC PET preparation — the six weeks to the October test, the one-time registration, the mains that follow, and using a three-year score well.',
      lead: [
        'The PET is the ticket; the mains are the destination. Prepare the ticket to a score that shortlists.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From registration to the mains',
          items: [
            { title: 'Check the registration record', text: 'Corrections to a one-time registration must be made before the next PET; name, date of birth and mobile are locked for PET 2025-linked accounts.' },
            { title: 'Watch for the exam district and admit card', text: 'Advance district information and admit cards come from the commission’s portal about a week before the test.' },
            { title: 'Prepare to a score, not a pass', text: 'There is no pass mark; the shortlist for each mains is fifteen per post on the normalised score.' },
            { title: 'Apply for every mains that fits', text: 'Each mains is a separate ₹25 application on the PET score; the 2026 round had twenty-one.' },
            { title: 'Sit again to improve', text: 'The highest valid score is used; a better PET 2026 score replaces PET 2025 for the mains of 2027.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'UPSSSC PET study material — NCERT textbooks for the nine core heads, a current affairs digest, and practice in Hindi passages, graphs and tables.',
      lead: [
        'The paper is set at NCERT level; the NCERT books are the material.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By head.',
          head: ['Head', 'What to read', 'Note'],
          rows: [
            ['History, national movement, geography, economy, Constitution', 'NCERT classes 9 to 12', 'Twenty-five marks.'],
            ['General science and arithmetic', 'NCERT science to class X; arithmetic to class X', 'Ten marks.'],
            ['Hindi and English', 'School grammar and vocabulary in each', 'Ten marks.'],
            ['Reasoning', 'A reasoning workbook', 'Five marks.'],
            ['Current affairs and general awareness', 'A monthly digest for the year; Uttar Pradesh’s events', 'Twenty marks.'],
            ['Passages, graphs, tables', 'Hindi comprehension practice; data interpretation practice', 'Thirty marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'UPSSSC Lekhpal', to: '/government-exams/state/uttar-pradesh/upsssc-lekhpal/' },
            { label: 'Junior Assistant posts', to: '/government-exams/state/uttar-pradesh/junior-assistant-posts/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the UPSSSC PET 2026 exam?',
      a: 'On 23, 24 and 25 October 2026, in two shifts a day — 10 to 12 and 3 to 5 — by the commission’s schedule notice of 9 September 2026. Applications under advertisement 16-Exam/2026 ran from 3 August to 7 September after an extension, with corrections to 8 September. Admit cards and exam districts follow.',
    },
    {
      q: 'What is the UPSSSC PET exam pattern?',
      a: 'One OMR paper of 100 questions and 100 marks in two hours, across fifteen heads — Indian history, the national movement, geography, the economy, the Constitution and administration, general science, arithmetic, Hindi, English and reasoning at five marks each; current affairs and general awareness at ten each; and two Hindi passages, two graphs and two tables at ten each. A quarter mark is deducted per wrong answer, and scores are normalised across shifts.',
    },
    {
      q: 'How long is the UPSSSC PET score valid?',
      a: 'Three years from the date the result is uploaded, under the government order of 28 April 2025 that also made the test annual. Before that the score was valid for one year — PET 2023’s scores of January 2024 expired in January 2025. Where a candidate holds more than one valid score, the highest is used.',
    },
    {
      q: 'What is the PET cut-off?',
      a: 'There is no pass mark. For each mains the commission shortlists fifteen candidates per post in each category on the normalised PET score, including everyone tied at the cut-off to two decimals. The lekhpal mains of 2026 cut at 55.12 for the unreserved, SC, OBC and EWS categories and 47.50 for ST, with 3,66,712 shortlisted for 7,994 posts. A zero or negative score is never shortlisted.',
    },
    {
      q: 'Who can sit the UPSSSC PET?',
      a: 'Anyone who has passed high school or an equivalent by the closing date and is 18 to 40 on 1 July of the year — 1 July 2026 for PET 2026 — with the usual relaxations for SC, ST and OBC candidates, sportspersons, ex-servicemen, PwD and state employees. One-time registration on the commission’s portal is required first. Age is reckoned again under each department’s rules at the mains.',
    },
    {
      q: 'What is the UPSSSC PET fee?',
      a: '₹185 for unreserved and OBC candidates, ₹95 for SC and ST, and ₹25 for PwD — each including a ₹25 processing fee. Women, freedom fighters’ dependants, ex-servicemen and sportspersons pay by their original category. Each mains that follows costs ₹25 to apply for, with the mains examination fee charged only to the shortlisted.',
    },
    {
      q: 'Which exams need a PET score?',
      a: 'Every Group C post the commission advertises — under the two-tier order of 20 November 2020, only PET candidates with a score card may apply for a mains. The 2026 mains on PET 2025 numbered twenty-one: lekhpal, pharmacist, assistant statistical officer, lower subordinate services, excise constable, forest guard, cane supervisor, auditor and assistant accountant, livestock extension officer, veterinary pharmacist, junior engineer agriculture and computer operator among them.',
    },
    {
      q: 'Was there a PET in 2024?',
      a: 'No. The commission held PET 2023 on 28 and 29 October 2023 and PET 2025 on 6 and 7 September 2025; the mains advertised in 2024 and early 2025, such as the junior assistant round of 2,702 posts, drew on PET 2023. From 2025 the test is annual.',
    },
  ],
}

/* ── UPSSSC Lekhpal ─────────────────────────────────────────────
   The revenue department's village-level record keeper, recruited through
   a 100-mark mains on the PET shortlist. The 2025 round of 7,994 posts was
   examined on 21 May 2026 on a new scheme and awaits its result; the 2022
   round of 8,085 is still producing Supreme Court-ordered additions. */
const UP_LEKHPAL_SRC = {
  advt2025Mirror: 'https://rojgarresult.com/wp-content/uploads/2025/12/UPSSSC_Lekhpal_Notification_RR.pdf',
  examDate2026: 'https://upsssc.gov.in/ViewPdf.aspx?evneCXROH7gOP3eOhFr/cSLvNuFxY9xz96d1zbEgR6w=',
  feeNotice2026: 'https://upsssc.gov.in/ViewPdf.aspx?6BgfaV+5cBD7Iz2VaXQd87xjSNAdR2Dd9UIquAnmDYs=',
  provisionalKey2026: 'https://upsssc.gov.in/ViewPdf.aspx?n/qbcuZo+AYJgQCBQHsNZgMnCbY2uREXTt5a2kiiryw=',
  revisedKey2026: 'https://upsssc.gov.in/ViewPdf.aspx?0q6A8m+HIAlvBl/v8Jv0tfm512CaNg8bLFb6CBH9Rvw=',
  cutoff2026Mirror: 'https://doc.sarkariresults.org.in/Download_UP_Lekhpal_SarkariREsult_Com_Cutoff_2026%20(1).pdf',
  shortlist2022: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2205051143474936_C.pdf',
  examDate2022: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2207161317561969_C.pdf',
  result2023: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2305021701406020_C.pdf',
  final2023: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2312302018061471_C.pdf',
  scOrder2025: 'https://upsssc.gov.in/ViewPdf.aspx?1dLBCz6gMOX3F6GkwQfKvaa6pdmsoK6P1/RtdFEJCj0=',
  scheme2021Mirror: 'https://www.sarkariresults.org.in/wp-content/uploads/2021/12/upsssc-lekhpal-syllabus.pdf',
}

const UP_LEKHPAL = {
  slug: 'upsssc-lekhpal',
  path: '/government-exams/state/uttar-pradesh/upsssc-lekhpal/',
  name: 'UPSSSC Lekhpal',
  fullName: 'UPSSSC Rajasva Lekhpal Main Examination — Board of Revenue, Uttar Pradesh',
  authority: 'Uttar Pradesh Subordinate Services Selection Commission, for the Board of Revenue',
  official: 'upsssc.gov.in',
  seoTitle: 'UPSSSC Lekhpal 2026: 7,994 Posts, Exam Held 21 May, New Pattern, Result',
  metaDescription:
    'UPSSSC Lekhpal 2025-26 — 7,994 posts, exam 21 May 2026, result awaited. The new 100-mark scheme with 65 subject, 15 computer and 20 Uttar Pradesh marks.',
  lead: [
    'The lekhpal is the revenue department’s officer in the village — the keeper of the khatauni and the land map, the first hand on a caste, income or residence certificate, the officer who reports crops and calamities to the tehsil. The Board of Revenue recruits through the Subordinate Services Selection Commission, on the PET shortlist and a single 100-mark mains, with no interview under the 2017 rules. The intermediate examination is the qualification, and the post sits at pay level 3, ₹21,700 to ₹69,100.',
    'The 2025 round is the largest since 2022 and the first on a new scheme. Advertised on 16 December 2025 for 7,994 posts, it took applications from 29 December to 28 January 2026 from PET 2025 candidates, shortlisted 3,66,712 on 26 February, and examined them on 21 May 2026 on a paper of 65 subject marks, 15 of computer and information technology and 20 of Uttar Pradesh — not the four equal sections of 2022. The revised key is out and the result awaited. The 2022 round of 8,085 posts, examined on 31 July 2022, is still adding candidates under Supreme Court orders.',
  ],
  quickFacts: [
    ['Conducted by', 'UPSSSC, for the Board of Revenue'],
    ['2025 round', 'Advt 02-Exam/2025, 16 December 2025 — 7,994 posts; applications 29 December to 28 January 2026; 3,66,712 shortlisted; exam 21 May 2026'],
    ['Status', 'Revised key published; result awaited; no interview — document verification follows'],
    ['Scheme', '100 questions, 100 marks, 120 minutes; subject 65, computer and IT 15, Uttar Pradesh 20; a quarter off per wrong answer'],
    ['Eligibility', 'Intermediate; 18 to 40 on 1 July 2025; a PET 2025 score; preference for Territorial Army service or NCC B'],
    ['Fees', '₹25 to apply; ₹200 mains fee, ₹80 for SC and ST, nil for PwD, for the shortlisted'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The advertisement distributes the 7,994 permanent posts as 4,165 unreserved, 1,446 SC, 150 ST, 1,441 OBC and 792 EWS, with horizontal reservation of 1,592 for women, 391 for ex-servicemen, 152 each for freedom fighters’ dependants and sportspersons, and 499 across the disability categories. Eligibility follows rule 8 of the Uttar Pradesh Lekhpal Service Rules of 2006 as amended to 2022: the intermediate examination of the state board or equivalent, age 18 to 40 on 1 July 2025 with the standard relaxations, and preference for two years in the Territorial Army or an NCC B certificate. Only PET 2025 candidates with a score card could apply, at ₹25.',
    },
    {
      type: 'p',
      text: 'The shortlist notice of 26 February 2026 admitted fifteen candidates per post in each category — 3,66,712 in all — at a normalised PET cut-off of 55.12 for the unreserved, SC, OBC and EWS categories and 47.50 for ST, with much lower cut-offs on the horizontal quotas. The shortlisted paid the mains fee of ₹200, or ₹80 for SC and ST, under the notice of 4 May and sat the paper on 21 May 2026 from 10 to 12. The provisional key followed within days and the revised key in early July; the commission’s calendar of 3 August records the examination as held, and the result had not been published at the date checked.',
    },
    {
      type: 'list',
      title: 'What changed in the scheme',
      items: [
        { text: 'The 2022 paper', note: 'under the order of 3 December 2021: general Hindi, mathematics, general knowledge and village society and development at 25 marks each, in two hours, with a quarter off per wrong answer.' },
        { text: 'The 2025 paper', note: 'three parts. Part 1, subject knowledge, 65 — history and the national movement, polity and the Constitution, Indian and world geography, economy and social development, rural society and development, current events, science and technology at five each; environment, ecology and disaster management ten; data interpretation ten; general Hindi ten. Part 2, computer and information technology concepts and contemporary technological development, 15. Part 3, general information about Uttar Pradesh, 20.' },
        { text: 'What stayed', note: '100 questions, one mark each, 120 minutes, objective, a quarter mark off per wrong answer, written examination only.' },
      ],
    },
    {
      type: 'note',
      title: 'The 2022 round, still open at the edges',
      text: 'Advertised in January 2022 for 8,085 posts on PET 2021, with 13,90,305 applications and 2,47,667 shortlisted. The examination moved from 19 June to 24 July and then to 31 July 2022. The result of 2 May 2023 shortlisted 27,455 for verification at a cut-off of 75.75 for the unreserved, OBC and EWS categories, 73.75 SC and 66.50 ST; the final selection of 30 December 2023 named 7,897, with 188 disability posts carried forward and the whole subject to fourteen pending writs. The Supreme Court, in Ritesh Kumar Singh and in a contempt petition, ordered the appellants re-marked on the revised key without disturbing the selected: 114 more were selected on 23 July 2025, two on 19 December 2025 and twenty on 7 April 2026.',
    },
  ],
  stages: [
    {
      name: 'PET score and application',
      mode: '₹25; PET 2025 score card required',
      detail:
        'Applications from 29 December 2025 to 28 January 2026 with corrections and fee reconciliation to 4 February, from candidates holding a positive PET 2025 score. Provisional PET candidates admitted provisionally.',
    },
    {
      name: 'Shortlist at fifteen per post',
      mode: 'On the normalised PET score, ties included',
      detail:
        '3,66,712 candidates on 26 February 2026 at the category cut-offs — 55.12 unreserved, SC, OBC and EWS; 47.50 ST; 38.63 freedom fighters’ dependants; 0.24 ex-servicemen; 1.01 sportspersons.',
    },
    {
      name: 'Main examination',
      mode: '100 questions, 120 minutes, OMR, one sitting',
      detail:
        '21 May 2026, 10 to 12, after the mains fee of ₹200, ₹80 or nil. Subject 65, computer 15, Uttar Pradesh 20; a quarter off per wrong answer. Provisional key, objections, revised key.',
    },
    {
      name: 'Result and verification',
      mode: 'Written marks alone; no interview',
      detail:
        'The result shortlists for document upload and qualification verification; the 2022 round called 27,455 at about three per post and selected 7,897. Selection is subject to pending litigation, as every notice says.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No lekhpal window is open. The 2025 round stands between its revised key and its result: the examination of 21 May 2026, the provisional key of late May with objections, and the revised key of early July are on the commission’s site; no result notice had appeared on its notifications list at the date checked, and the commission’s calendar of 3 August 2026 records the examination as held. The next stage after the result is document upload and verification; there is no interview. The 2022 round added twenty candidates on 7 April 2026 under the Supreme Court’s contempt order of 11 March 2026, following 114 on 23 July 2025 and two on 19 December 2025.`,
    },
    {
      type: 'table',
      caption: 'The 2025 round, from the advertisement and the commission’s notices.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 02-Exam/2025', '16 December 2025', '7,994 posts, permanent, level 3; PET 2025'],
        ['Applications', '29 December 2025 to 28 January 2026', '₹25 processing fee; corrections to 4 February'],
        ['Shortlist', '26 February 2026', '3,66,712 at fifteen per post; cut-offs by category'],
        ['Mains fee', 'From 4 May 2026', '₹200; ₹80 SC and ST; nil PwD — before the admit card'],
        ['Examination', '21 May 2026, 10 to 12', 'One sitting; 100 questions'],
        ['Keys', 'Late May and early July 2026', 'Provisional with objections; revised'],
        ['Result', 'Awaited', 'Verification to follow'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2022 round.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 01-Exam/2022', 'January 2022', '8,085 posts on PET 2021; 13,90,305 applications'],
        ['Shortlist', '5 May 2022', '2,47,667 at fifteen per post'],
        ['Examination', '31 July 2022', 'Moved from 19 June and 24 July'],
        ['Result', '2 May 2023', '27,455 called for verification; cut-off 75.75 unreserved'],
        ['Final selection', '30 December 2023', '7,897 selected; 188 disability posts carried forward; subject to writs'],
        ['Supreme Court additions', '23 July 2025, 19 December 2025, 7 April 2026', '114, 2 and 20 more selected on re-marking under the revised key'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'UPSSSC — all notifications', href: UPSSSC.notifications },
        { label: 'UPSSSC — results', href: UPSSSC.results },
        { label: 'Lekhpal 2025 — examination date notice, 7 March 2026', href: UP_LEKHPAL_SRC.examDate2026 },
        { label: 'Lekhpal 2025 — revised key', href: UP_LEKHPAL_SRC.revisedKey2026 },
        { label: 'Candidate login — mains fee and admit card', href: UPSSSC.candidateLogin },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2025 advertisement. Age on 1 July 2025.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Intermediate of the Uttar Pradesh Board or an equivalent, under rule 8 of the Lekhpal Service Rules 2006 as amended.'],
        ['Preference', 'Two years’ service in the Territorial Army, or an NCC B certificate.'],
        ['Age', '18 to 40 on 1 July 2025; SC, ST and OBC relaxation as notified; PwD fifteen years; state employees five; ex-servicemen and sportspersons under the rules.'],
        ['PET', 'A PET 2025 score card with a positive score; provisional PET candidates admitted provisionally.'],
        ['Pay', 'Level 3, ₹21,700 to ₹69,100; permanent posts.'],
      ],
    },
    {
      type: 'table',
      caption: 'Posts and reservation, from the advertisement.',
      head: ['Category', 'Posts'],
      rows: [
        ['Unreserved', '4,165'],
        ['SC', '1,446'],
        ['ST', '150'],
        ['OBC', '1,441'],
        ['EWS', '792'],
        ['Total', '7,994'],
        ['Horizontal — women', '1,592'],
        ['Horizontal — ex-servicemen', '391'],
        ['Horizontal — freedom fighters’ dependants and sportspersons', '152 each'],
        ['Horizontal — disability, seven categories', '499'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees.',
      head: ['Stage', 'Unreserved and OBC', 'SC and ST', 'PwD'],
      rows: [
        ['Application', '₹25 processing', '₹25', '₹25'],
        ['Mains, for the shortlisted', '₹200', '₹80', 'Nil'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The 2025 scheme, from the advertisement’s annexure. 100 questions, one mark each, 120 minutes, objective; a quarter mark off per wrong answer.',
      head: ['Part', 'Head', 'Marks'],
      rows: [
        ['1 — subject knowledge', 'History of India and the national movement', '5'],
        ['1', 'Indian polity and the Constitution', '5'],
        ['1', 'Geography of India and the world', '5'],
        ['1', 'Indian economy and social development', '5'],
        ['1', 'Rural society and development', '5'],
        ['1', 'Current events, national and international', '5'],
        ['1', 'Science and technology', '5'],
        ['1', 'Environment, ecology and disaster management', '10'],
        ['1', 'Data interpretation', '10'],
        ['1', 'General Hindi', '10'],
        ['2', 'Computer and information technology concepts; contemporary technological development', '15'],
        ['3', 'General information about Uttar Pradesh', '20'],
        ['Total', '—', '100'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2022 scheme, for comparison — under the order of 3 December 2021.',
      head: ['Section', 'Marks'],
      rows: [
        ['General Hindi', '25'],
        ['Mathematics', '25'],
        ['General knowledge', '25'],
        ['Village society and development', '25'],
        ['Total', '100 questions, two hours, a quarter off per wrong answer'],
      ],
    },
    {
      type: 'note',
      title: 'Selection is the written paper',
      text: 'The advertisement’s selection clause rests on the Group C direct recruitment rules of 2015, the interview-abolition rules of 2017 and the two-tier order of 2020: written examination only. The result shortlists for qualification and document verification, and the final selection is by written marks in category order. The 2022 round’s final cut-offs were the marks of the last selected candidate in each category; its written-stage cut-off had been 75.75 of 100 for the unreserved.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the 2025 advertisement read from a mirror of the commission’s PDF after its de-listing, the shortlist notice and cut-off letter of 26 February 2026, the examination date notice of 7 March, the fee notice of 4 May, the provisional and revised key notices, the commission’s 2026 calendar, and for the 2022 round the shortlist notice of 5 May 2022, the date notices, the result of 2 May 2023, the final selection of 30 December 2023 and the Supreme Court addition notices of 2025 and 2026 on the commission’s NIC document server and site. The 2022 advertisement itself was not retrievable, and the lekhpal result date is not yet on the commission’s list.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'Lekhpal 2025 advertisement — 02-Exam/2025, mirror of the commission’s PDF', href: UP_LEKHPAL_SRC.advt2025Mirror },
        { label: 'Lekhpal 2025 — shortlist cut-offs, 26 February 2026, mirror', href: UP_LEKHPAL_SRC.cutoff2026Mirror },
        { label: 'Lekhpal 2025 — examination date, 7 March 2026', href: UP_LEKHPAL_SRC.examDate2026 },
        { label: 'Lekhpal 2025 — mains fee notice, 4 May 2026', href: UP_LEKHPAL_SRC.feeNotice2026 },
        { label: 'Lekhpal 2025 — provisional key notice', href: UP_LEKHPAL_SRC.provisionalKey2026 },
        { label: 'Lekhpal 2025 — revised key', href: UP_LEKHPAL_SRC.revisedKey2026 },
        { label: 'Lekhpal 2022 — shortlist, 5 May 2022', href: UP_LEKHPAL_SRC.shortlist2022 },
        { label: 'Lekhpal 2022 — examination date, 16 July 2022', href: UP_LEKHPAL_SRC.examDate2022 },
        { label: 'Lekhpal 2022 — result, 2 May 2023', href: UP_LEKHPAL_SRC.result2023 },
        { label: 'Lekhpal 2022 — final selection, 30 December 2023', href: UP_LEKHPAL_SRC.final2023 },
        { label: 'Lekhpal 2022 — Supreme Court additions, 3 October 2025', href: UP_LEKHPAL_SRC.scOrder2025 },
        { label: 'Lekhpal 2022 scheme, December 2021 — mirror', href: UP_LEKHPAL_SRC.scheme2021Mirror },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'UPSSSC Lekhpal syllabus — the 2025 scheme’s 65 subject marks across ten heads, 15 of computer and IT, and 20 of Uttar Pradesh, with the topic lists.',
      lead: [
        'The syllabus is the annexure of the 2025 advertisement, which itemises each head in Hindi and English.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'History, polity, geography, economy — 20',
              'Ancient to modern India and the national movement; the Constitution, Parliament, judiciary and local government; Indian and world geography; the economy and social development.',
            ],
            [
              'Rural society and development — 5',
              'The panchayat system, rural development programmes, land reforms and the revenue administration the lekhpal works in.',
            ],
            [
              'Current events, science and technology — 10',
              'The year’s national and international events; science and technology in daily life.',
            ],
            [
              'Environment, disaster management, data interpretation, Hindi — 30',
              'Ecology, pollution, climate and disaster management for ten; graphs, tables and charts for ten; Hindi grammar, vocabulary and comprehension for ten.',
            ],
            [
              'Computer and IT — 15',
              'Computer basics, operating systems, office software, the internet, e-governance and contemporary technological development.',
            ],
            [
              'Uttar Pradesh — 20',
              'History, geography, economy, administration, culture, districts and current events of the state.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus document',
          items: [
            { label: 'Lekhpal 2025 advertisement — annexure, pages 10 to 16', href: UP_LEKHPAL_SRC.advt2025Mirror },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'UPSSSC Lekhpal exam pattern — a PET shortlist at fifteen per post, one 100-mark paper in 120 minutes with a quarter off per wrong answer, and no interview.',
      lead: [
        'A shortlist on the PET, one paper, and a list.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Shortlist', 'Fifteen per post per category on the normalised PET score.'],
            ['Paper', '100 questions, 100 marks, 120 minutes; subject 65, computer 15, Uttar Pradesh 20.'],
            ['Negative marking', 'A quarter mark per wrong answer.'],
            ['Selection', 'Written marks; document verification; no interview.'],
            ['Fees', '₹25 to apply; ₹200 or ₹80 mains fee for the shortlisted.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'UPSSSC Lekhpal previous papers — the 2026 revised key on the new scheme, the 2022 key on the old, and what the commission publishes.',
      lead: [
        'The commission publishes master-set keys; the 2026 key is the only record of the new scheme’s paper.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Lekhpal 2025 — examined 21 May 2026', note: 'the provisional key notice and the twenty-page revised key on the commission’s site.' },
            { text: 'Lekhpal 2022 — examined 31 July 2022', note: 'the key of August 2022 and the revised key of September, on the four-section scheme.' },
            { text: 'The scheme documents', note: 'the 2021 order for the 2022 paper and the 2025 advertisement’s annexure for the new one.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Lekhpal 2025 — revised key', href: UP_LEKHPAL_SRC.revisedKey2026 },
            { label: 'UPSSSC PET — the shortlist paper', to: '/government-exams/state/uttar-pradesh/upsssc-pet/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'UPSSSC Lekhpal mock tests — 100-question sittings in 120 minutes on the 65-15-20 scheme, scored at a quarter off.',
      lead: [
        'Two hours, 100 questions, the new weights, and a quarter off each wrong answer.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Full sittings at the 2025 weights', text: 'Sixty-five of subject across ten heads, fifteen of computer, twenty of Uttar Pradesh. The 2022 cut for the unreserved was 75.75 of 100 on the old scheme.' },
            { title: 'Uttar Pradesh as a section', text: 'Twenty marks on the state — districts, administration, history and the year’s events — is the section the old scheme lacked.' },
            { title: 'Data interpretation and Hindi under time', text: 'Twenty marks that reward speed; practise them as a block.' },
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
        'UPSSSC Lekhpal preparation — waiting for the 2025 result, the verification stage, and building a PET score for the next round.',
      lead: [
        'For the 3.66 lakh who sat on 21 May, the result; for everyone else, the PET of October.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From PET to appointment',
          items: [
            { title: 'Watch the notifications page for the result', text: 'It shortlists for document upload; the 2022 round called about three per post and verified online.' },
            { title: 'Keep the documents ready', text: 'Intermediate certificate, age proof, category and domicile certificates, the Territorial Army or NCC certificate for preference, all uploaded in the verification window.' },
            { title: 'For the next round, sit PET 2026', text: 'On 23 to 25 October; the lekhpal shortlist cut PET 2025 at 55.12 for the unreserved.' },
            { title: 'Prepare the new scheme', text: 'Not the four equal sections of 2022; the 2025 annexure’s heads, with computer and Uttar Pradesh as a third of the paper.' },
            { title: 'Expect litigation at the end', text: 'Every lekhpal notice is subject to pending writs; the 2022 round was still adding candidates in April 2026.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'UPSSSC Lekhpal study material — NCERT and state general studies, a rural development and panchayat raj primer, computer basics, and Uttar Pradesh in one book.',
      lead: [
        'The paper is general studies at intermediate level with the state and the village weighted; read to that.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By part.',
          head: ['Part', 'What to read', 'Note'],
          rows: [
            ['Subject knowledge', 'NCERT classes 9 to 12 for history, polity, geography, economy and science; an environment primer; a Hindi grammar; data interpretation practice', 'Sixty-five marks.'],
            ['Rural society and development', 'The panchayat raj system, rural schemes, land reforms and revenue administration', 'Five marks, and the job.'],
            ['Computer and IT', 'A computer basics text with the internet and e-governance', 'Fifteen marks.'],
            ['Uttar Pradesh', 'A state general knowledge book and the year’s events', 'Twenty marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'UPSSSC PET', to: '/government-exams/state/uttar-pradesh/upsssc-pet/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the UPSSSC Lekhpal result 2026?',
      a: 'It had not been published at 11 September 2026. The examination of 21 May 2026 for 7,994 posts was followed by the provisional key in late May and the revised key in early July; the commission’s calendar of 3 August records the examination as held, and no result notice had appeared on its list. The result shortlists for document verification; there is no interview.',
    },
    {
      q: 'What is the UPSSSC Lekhpal exam pattern?',
      a: 'Under the 2025 advertisement, one paper of 100 questions and 100 marks in 120 minutes, objective, with a quarter mark deducted per wrong answer: Part 1, subject knowledge, 65 — history, polity, geography, economy, rural society, current events and science at five each, environment and disaster management ten, data interpretation ten, general Hindi ten; Part 2, computer and information technology, 15; Part 3, Uttar Pradesh, 20. The 2022 paper had four sections of 25 — Hindi, mathematics, general knowledge and village society.',
    },
    {
      q: 'How many posts were in UPSSSC Lekhpal 2025?',
      a: '7,994 permanent posts at pay level 3 — 4,165 unreserved, 1,446 SC, 150 ST, 1,441 OBC and 792 EWS — with 1,592 reserved horizontally for women, 391 for ex-servicemen, 152 each for freedom fighters’ dependants and sportspersons, and 499 across the disability categories. The figure of 7,794 sometimes quoted is a misprint.',
    },
    {
      q: 'What is the UPSSSC Lekhpal eligibility?',
      a: 'The intermediate examination of the Uttar Pradesh Board or an equivalent, age 18 to 40 on 1 July 2025 with the usual relaxations, and a PET 2025 score card with a positive score. Two years in the Territorial Army or an NCC B certificate earn preference. The commission shortlists fifteen candidates per post on the PET score.',
    },
    {
      q: 'What was the Lekhpal 2025 cut-off?',
      a: 'For the shortlist to the mains, on the normalised PET 2025 score: 55.12 for the unreserved, SC, OBC and EWS categories and 47.50 for ST, with 38.63 for freedom fighters’ dependants, 1.01 for sportspersons and 0.24 for ex-servicemen — 3,66,712 candidates in all. The written-examination cut-off comes with the result. In 2022 the written cut-off was 75.75 for the unreserved, OBC and EWS categories, 73.75 SC and 66.50 ST.',
    },
    {
      q: 'What is the Lekhpal fee?',
      a: '₹25 processing fee to apply, for every category. The shortlisted then pay the mains examination fee before the admit card — ₹200 for unreserved and OBC candidates, ₹80 for SC and ST, and nothing for PwD — as the notice of 4 May 2026 set it.',
    },
    {
      q: 'Is there an interview for Lekhpal?',
      a: 'No. The advertisement’s selection clause rests on the Group C direct recruitment rules of 2015, the interview-abolition rules of 2017 and the two-tier order of 2020: selection is on the written examination alone, followed by document and qualification verification.',
    },
    {
      q: 'What happened in the Lekhpal 2022 recruitment?',
      a: 'Advertised for 8,085 posts on PET 2021 with 13.9 lakh applications, examined on 31 July 2022 after two postponements, and finalised on 30 December 2023 with 7,897 selected, subject to fourteen pending writs. The Supreme Court in Ritesh Kumar Singh ordered the appellants re-marked on the revised key without disturbing the selected: 114 more were selected on 23 July 2025, two on 19 December 2025, and twenty on 7 April 2026 under a contempt order of 11 March 2026.',
    },
  ],
}

/* ── UPSSSC Junior Assistant posts ──────────────────────────────
   The clerical cadre — junior assistant, junior clerk and assistant grade
   III — recruited on the PET shortlist through a 100-mark mains and a
   qualifying typing test. The round of 5,339 posts published its final
   selection on 9 September 2026; the round of 2,702 posts examined on
   1 February 2026 awaits its result with a typing test due in December. */
const UP_JA_SRC = {
  advt2024: 'https://upsssc.gov.in/ViewPdf.aspx?3zEZ/RcS2jXg8CATr3fB6GXIirYjuclSkFl6jGDuv2M=',
  examDate2024: 'https://upsssc.gov.in/ViewPdf.aspx?B5kYoudxjd9k7wojcARcQD+v732F7l+qmk+SVLs57Es=',
  examCity2024: 'https://upsssc.gov.in/ViewPdf.aspx?wm3vVyEX1Oj5mv510X3IGV1ZQaTWC2JSHOyp9Ez9yao=',
  key2024: 'https://upsssc.gov.in/ViewPdf.aspx?tIQcLR2u3lihmaz/bUhg5gTIajeJujr6qj1giK0iyhU=',
  advt2023: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2308041818028086_C.pdf',
  corrigendum2023: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2309221808072817_C.pdf',
  result2023: 'https://upsssc.gov.in/ViewPdf.aspx?nNNX4PX7mawMzFcsUa4kMiyUny1Ej2v9VEhHY1juoiU=',
  typing2023: 'https://upsssc.gov.in/ViewPdf.aspx?2i9Vmt++kQeZ8xu4BbjL2jHZBDzDx9ynSYMThIep1dA=',
  final2023: 'https://upsssc.gov.in/ViewPdf.aspx?PA/fJh/lxOZdz14+7Oy8Ekb0qUJXvxDsXyXbckY4xvA=',
  advt2022: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2210211733090244_C.pdf',
  result2022: 'http://164.100.181.233/document/Files/UP005/UploadNotices/2402061935267747_C.pdf',
  final2022b: 'https://upsssc.gov.in/ViewPdf.aspx?Gb1YDtA82ZeWZnoEB7djc8HFx9JQexuyrh/9YtBJDOU=',
  computerOperator2026: 'https://upsssc.gov.in/ViewPdf.aspx?mfnjdMHFdfcW4I1+qDj+rPSSkN2ZqsPu9zpwWfiD4os=',
  scheme2023Mirror: 'https://www.sarkariresults.org.in/wp-content/uploads/2023/06/sarkariresult.com-UPSSSC-Junior-Asst-08-Exam-2022-Syllabus.pdf',
  dvUpload: 'https://upsssc.gov.in/Modify/Applicant_Login_DocUploadForDV.aspx?ID=DV',
}

const UP_JA = {
  slug: 'junior-assistant-posts',
  path: '/government-exams/state/uttar-pradesh/junior-assistant-posts/',
  name: 'Uttar Pradesh Junior Assistant Posts',
  fullName: 'UPSSSC Junior Assistant, Junior Clerk and Assistant Grade III — the clerical cadre mains',
  authority: 'Uttar Pradesh Subordinate Services Selection Commission (UPSSSC)',
  official: 'upsssc.gov.in',
  seoTitle: 'UPSSSC Junior Assistant: 5,339-Post Final List, 2,702-Post Result, Pattern',
  metaDescription:
    'UPSSSC Junior Assistant — the 5,339-post round’s final selection of 9 September 2026, the 2,702-post round awaiting result, the 100-mark paper and typing test.',
  lead: [
    'Junior assistants, junior clerks and assistants of grade III are the clerical cadre of Uttar Pradesh’s departments and directorates, recruited under the Clerical Cadre Service Rules of 2014 by the Subordinate Services Selection Commission on the PET shortlist. The examination is one 100-mark paper of Hindi, reasoning, general knowledge, computer concepts and Uttar Pradesh, followed by a typing test in Hindi at 25 words a minute and English at 30 that qualifies and does not count. There is no interview. The intermediate examination, the typing speeds and the CCC certificate are the qualifications.',
    'Two rounds tell the current story. The combined round advertised in August 2023 for 3,831 posts, enlarged to 5,512 and finalised at 5,339, was examined on 29 June 2025, shortlisted 90,336 for typing at five per post, tested them from 23 November, verified documents online through the spring, and published its final selection on 9 September 2026 — 5,329 selected. The round advertised in November 2024 for 2,702 posts was examined on 1 February 2026 in nine cities and awaits its written result, with the typing test set for December in the commission’s calendar. No junior assistant round was advertised in 2025 or 2026.',
  ],
  quickFacts: [
    ['Conducted by', 'Uttar Pradesh Subordinate Services Selection Commission'],
    ['Latest final result', 'Advt 08-Exam/2023 — 5,339 posts; final selection 9 September 2026, 5,329 selected'],
    ['Pending round', 'Advt 12-Exam/2024 — 2,702 posts; examined 1 February 2026; result awaited; typing test in December 2026'],
    ['Paper', '100 questions, 100 marks, 120 minutes — Hindi 30, reasoning 15, general knowledge 20, computer 15, Uttar Pradesh 20; a quarter off per wrong answer'],
    ['Typing', 'Hindi 25 and English 30 words a minute on computer, qualifying, for five candidates per post'],
    ['Eligibility and fees', 'Intermediate, the typing speeds and CCC; 18 to 40 on 1 July; ₹25 to apply; ₹200 or ₹80 mains fee'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2023 round shows the cadre’s scale. Advertised on 4 August 2023 as the combined junior assistant, junior clerk and assistant grade III mains on PET 2022, for 3,768 general and 63 special-selection posts, it added 1,681 by corrigendum of 22 September to 5,512 and settled at 5,339. Its written examination of 29 June 2025 produced a result on 8 October 2025 shortlisting 90,336 candidates for the typing test at five per post, with a written cut-off of 41.25 for the unreserved, SC, OBC and EWS categories and 33.50 for ST. The typing test began on 23 November 2025 on Mangal and Kruti Dev fonts; document upload ran from 25 April to 6 June 2026; and the final selection of 9 September 2026 named 5,329 — 2,585 unreserved, 1,066 SC, 147 ST, 1,074 OBC and 457 EWS — with 376 provisional and the whole subject to pending writs. The final cut-offs, the marks of the last selected, were 65.75 unreserved, 64.00 OBC, 62.25 EWS, 54.00 SC and 39.25 ST.',
    },
    {
      type: 'p',
      text: 'The scheme dates from the government order of 26 May 2023, first applied to the 2022 round. One sitting of 100 questions and 100 marks in 120 minutes, one mark each, with a quarter of the question’s marks off per wrong answer: Hindi knowledge and writing ability 30, general intelligence 15, general knowledge 20, computer and information technology concepts and contemporary technological development 15, and general knowledge of Uttar Pradesh 20. The shortlist on written marks goes to a typing test at five per post — Hindi at 25 words a minute and English at 30 on computer — which qualifies only, and then to online document upload and verification. Selection is by written marks under the interview-abolition rules of 2017.',
    },
    {
      type: 'list',
      title: 'The rounds and where they stand',
      items: [
        { text: '08-Exam/2023 — 5,339 posts', note: 'final selection 9 September 2026; department allotment to follow.' },
        { text: '12-Exam/2024 — 2,702 posts', note: 'advertised 26 November 2024 on PET 2023; applications 23 December 2024 to 22 January 2025; examined 1 February 2026 in Agra, Aligarh, Ghaziabad, Gorakhpur, Kanpur, Lucknow, Meerut, Moradabad and Varanasi; provisional key 2 February with objections to 8 February; revised key in June; result awaited; typing test proposed for December 2026.' },
        { text: '08-Exam/2022 — 1,262 posts', note: 'examined 27 August 2023; 15,174 shortlisted for typing on 6 February 2024; typing in December 2024; verification in 2025; allotments in late 2025.' },
        { text: '09-Exam/2022 — 62 posts, infrastructure department', note: 'reduced to 54; final result 21 August 2026 with 50 selected.' },
      ],
    },
    {
      type: 'note',
      title: 'A related window that is open',
      text: 'The commission advertised twelve computer operator posts for the Advocate General’s office at the Allahabad High Court on 3 September 2026 — eleven of grade A at level 4 and one assistant at level 2 — with applications from 7 to 28 September 2026 on PET 2025. It is a different cadre: a degree with a computer diploma or the NIELIT O-level and two or three years’ experience, age 21 to 40, selection by a written examination whose scheme is to be notified. No junior assistant or junior clerk mains has been advertised on PET 2025.',
    },
  ],
  stages: [
    {
      name: 'PET score and application',
      mode: '₹25; the PET named in the advertisement',
      detail:
        'The 2024 round required a PET 2023 score; applications ran a month with a week for corrections. The commission shortlists fifteen per post on the normalised PET score.',
    },
    {
      name: 'Written examination',
      mode: '100 questions, 120 minutes, OMR, one sitting',
      detail:
        'Hindi 30, reasoning 15, general knowledge 20, computer 15, Uttar Pradesh 20; a quarter off per wrong answer. The mains fee — ₹200, ₹80 for SC and ST, nil for PwD — before the admit card. Held in a handful of cities: nine for the 2024 round.',
    },
    {
      name: 'Typing test',
      mode: 'Qualifying; five per post on written marks',
      detail:
        'Hindi at 25 words a minute on Mangal or Kruti Dev and English at 30, on computer. The 2023 round tested 90,336 from 23 November 2025 and published the typing result at the end of February 2026.',
    },
    {
      name: 'Verification and final selection',
      mode: 'Online document upload; written marks in category order',
      detail:
        'Documents uploaded in a window of about six weeks, qualification and record verification, then the final selection and department allotment. No interview.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No junior assistant window is open. The 2023 round closed on 9 September 2026 with the final selection notice — 5,329 selected of 5,339 posts, 376 provisional, subject to pending writs in the High Court — after online document upload from 25 April to 6 June 2026 by 25,711 of the 26,570 called. The 2024 round of 2,702 posts, examined on 1 February 2026 with a provisional key on 2 February and a revised key in June, awaits its written result; the commission’s calendar of 3 August 2026 proposes its typing test for December. The 62-post infrastructure department round of 2022 published its final result on 21 August 2026. The only clerical-type advertisement of 2026 is the computer operator round of 3 September, open to 28 September.`,
    },
    {
      type: 'table',
      caption: 'The rounds, from the advertisements and notices.',
      head: ['Round', 'Posts', 'Applications', 'Written examination', 'Typing test', 'Position'],
      rows: [
        ['08-Exam/2023 — junior assistant, junior clerk, assistant grade III, on PET 2022', '3,831, raised to 5,512, finalised at 5,339', '12 September to 3 October 2023', '29 June 2025; result 8 October 2025, 90,336 shortlisted', 'From 23 November 2025; result February 2026', 'Final selection 9 September 2026 — 5,329'],
        ['12-Exam/2024 — junior assistant, on PET 2023', '2,702 — 2,568 general and 134 special selection', '23 December 2024 to 22 January 2025', '1 February 2026 in nine cities; keys 2 February and June', 'Proposed December 2026', 'Written result awaited'],
        ['08-Exam/2022 — junior assistant, on PET 2021', '1,262 — health 1,148, industries 114', '21 November to 14 December 2022', '27 August 2023; result 6 February 2024, 15,174 shortlisted', 'December 2024; result March 2025', 'Verification 2025; allotments late 2025'],
        ['09-Exam/2022 — junior assistant, infrastructure department', '62, reduced to 54', 'To 8 January 2023', '2025', '2025', 'Final result 21 August 2026 — 50 selected'],
      ],
    },
    {
      type: 'table',
      caption: 'Cut-offs of the 2023 round, from the result and final selection notices.',
      head: ['Category', 'Written cut-off, 8 October 2025', 'Final cut-off — marks of the last selected, 9 September 2026'],
      rows: [
        ['Unreserved', '41.25', '65.75'],
        ['OBC', '41.25', '64.00'],
        ['EWS', '41.25', '62.25'],
        ['SC', '41.25', '54.00'],
        ['ST', '33.50', '39.25'],
        ['Women', '—', '57.75'],
        ['Freedom fighters’ dependants', '38.75', '39.25'],
        ['Ex-servicemen', '0.50', '16.25'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'UPSSSC — all notifications', href: UPSSSC.notifications },
        { label: 'UPSSSC — results', href: UPSSSC.results },
        { label: '08-Exam/2023 — final selection, 9 September 2026', href: UP_JA_SRC.final2023 },
        { label: '12-Exam/2024 — provisional key notice, 2 February 2026', href: UP_JA_SRC.key2024 },
        { label: 'Document upload for verification', href: UP_JA_SRC.dvUpload },
        { label: 'Computer operator 20-Exam/2026 — open to 28 September', href: UP_JA_SRC.computerOperator2026 },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2024 advertisement, under rule 10 of the Clerical Cadre Service Rules 2014. Age on 1 July of the advertisement year.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Intermediate of the Uttar Pradesh Board or an equivalent.'],
        ['Typing', 'Hindi at 25 words a minute and English at 30 words a minute on computer.'],
        ['Computer', 'The CCC certificate of the DOEACC or NIELIT Society, or equivalent.'],
        ['Preference', 'Two years in the Territorial Army, or an NCC B certificate.'],
        ['Age', '18 to 40 on 1 July 2024 for the 2024 round; SC, ST and OBC relaxation as notified; state employees five years; PwD fifteen.'],
        ['PET', 'The PET named in the advertisement — 2023 for the 2024 round — with a positive score.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees.',
      head: ['Stage', 'All categories at application', 'Unreserved and OBC', 'SC and ST', 'PwD'],
      rows: [
        ['Application', '₹25 processing', '—', '—', '—'],
        ['Mains, for the shortlisted', '—', '₹200', '₹80', 'Nil'],
      ],
    },
    {
      type: 'p',
      text: 'The 2024 round’s 2,702 posts were 2,568 general-selection and 134 special-selection posts across departments, with the category split reported as 1,099 unreserved, 238 EWS, 718 OBC, 583 SC and 64 ST. The commission publishes its advertisements in Hindi and reckons age afresh for each mains under the cadre’s rules.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The written examination, from the annexure of the 2024 advertisement — the scheme of the order of 26 May 2023. 100 questions, one mark each, 120 minutes, objective.',
      head: ['Part', 'Head', 'Marks'],
      rows: [
        ['1', 'Hindi knowledge and writing ability', '30'],
        ['2', 'General intelligence', '15'],
        ['3', 'General knowledge', '20'],
        ['4', 'Computer and information technology concepts; contemporary technological development and innovation', '15'],
        ['5', 'General knowledge relating to Uttar Pradesh', '20'],
        ['Total', '—', '100'],
      ],
    },
    {
      type: 'note',
      title: 'Negative marking, typing and selection',
      text: 'The advertisement states that for every wrong answer one-fourth, 25 per cent, of the question’s marks is deducted. Candidates at five per post on written marks, in category order, are called to the typing test — Hindi at 25 words a minute and English at 30 on computer — which is qualifying only; its marks are not added. Selection is on the written examination under the interview-abolition rules of 2017, after online document upload and qualification verification.',
    },
    {
      type: 'list',
      title: 'What the 2023 and 2024 rounds settled',
      items: [
        { text: 'Five per post to typing', note: '90,336 for 5,339 posts in the 2023 round; 15,174 for 1,262 in the 2022 round.' },
        { text: 'Fonts', note: 'Hindi typing on Mangal Inscript and Kruti Dev 010; English on the standard keyboard.' },
        { text: 'A few cities', note: 'the 2024 written examination in nine cities; the commission publishes exam-city information before the admit card.' },
        { text: 'Time from paper to list', note: 'fourteen months from the 2023 round’s written examination to its final selection.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the 2024 advertisement, its examination date, exam-city and key notices, and the 2023 round’s advertisement, corrigendum, written result, typing notice and final selection of 9 September 2026 on the commission’s site and NIC document server; the 2022 rounds’ advertisement, result and final notices; the computer operator advertisement of 3 September 2026; and the commission’s 2026 calendar. The 2024 round’s revised-key date and category split are as reported and not from a document read; its written result is not yet on the commission’s list.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'Junior assistant 12-Exam/2024 — advertisement, 26 November 2024', href: UP_JA_SRC.advt2024 },
        { label: '12-Exam/2024 — examination date, 16 October 2025', href: UP_JA_SRC.examDate2024 },
        { label: '12-Exam/2024 — exam cities, 22 January 2026', href: UP_JA_SRC.examCity2024 },
        { label: '12-Exam/2024 — provisional key notice, 2 February 2026', href: UP_JA_SRC.key2024 },
        { label: 'Combined clerical 08-Exam/2023 — advertisement, 4 August 2023', href: UP_JA_SRC.advt2023 },
        { label: '08-Exam/2023 — corrigendum adding posts, 22 September 2023', href: UP_JA_SRC.corrigendum2023 },
        { label: '08-Exam/2023 — written result, 8 October 2025', href: UP_JA_SRC.result2023 },
        { label: '08-Exam/2023 — typing test notice, 9 October 2025', href: UP_JA_SRC.typing2023 },
        { label: '08-Exam/2023 — final selection, 9 September 2026', href: UP_JA_SRC.final2023 },
        { label: 'Junior assistant 08-Exam/2022 — advertisement', href: UP_JA_SRC.advt2022 },
        { label: '08-Exam/2022 — written result, 6 February 2024', href: UP_JA_SRC.result2022 },
        { label: '09-Exam/2022 — final result, 21 August 2026', href: UP_JA_SRC.final2022b },
        { label: 'Scheme of 2023 — mirror of the commission’s notice', href: UP_JA_SRC.scheme2023Mirror },
        { label: 'UPSSSC — examination calendar 2026', href: UPSSSC.calendar2026 },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'UPSSSC Junior Assistant syllabus — Hindi knowledge and writing ability, general intelligence, general knowledge, computer concepts and Uttar Pradesh.',
      lead: [
        'The syllabus is the annexure of the advertisement, itemised by part.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Hindi knowledge and writing ability — 30',
              'Grammar, vocabulary, synonyms and antonyms, idioms, sentence correction, comprehension and the ability to write correct Hindi.',
            ],
            [
              'General intelligence — 15',
              'Series, analogies, classification, coding, direction, blood relations and figure reasoning.',
            ],
            [
              'General knowledge — 20',
              'India’s history, geography, polity, economy and science; current events.',
            ],
            [
              'Computer and IT — 15',
              'Computer basics, operating systems, office software, the internet, e-governance and contemporary technological development and innovation.',
            ],
            [
              'Uttar Pradesh — 20',
              'History, geography, economy, administration, culture and current events of the state.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: '12-Exam/2024 advertisement — annexure, pages 29 to 31', href: UP_JA_SRC.advt2024 },
            { label: 'Scheme of 2023 — mirror', href: UP_JA_SRC.scheme2023Mirror },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'UPSSSC Junior Assistant exam pattern — 100-mark written paper with a quarter off, typing at 25 and 30 words a minute for five per post, no interview.',
      lead: [
        'One paper, a typing gate, and a list.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Shortlist', 'Fifteen per post on the PET score.'],
            ['Paper', '100 questions, 100 marks, 120 minutes; Hindi 30, reasoning 15, general knowledge 20, computer 15, Uttar Pradesh 20.'],
            ['Negative marking', 'A quarter of the question’s marks per wrong answer.'],
            ['Typing', 'Five per post on written marks; Hindi 25 and English 30 words a minute; qualifying.'],
            ['Selection', 'Written marks; online document verification; no interview.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'UPSSSC Junior Assistant previous papers — the keys of the 2023 and 2024 rounds and the 2022 paper on the same scheme.',
      lead: [
        'The commission publishes keys; three rounds have now been examined on the 2023 scheme.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: '12-Exam/2024 — 1 February 2026', note: 'the provisional key of 2 February and the revised key of June.' },
            { text: '08-Exam/2023 — 29 June 2025', note: 'the keys and the written result with its cut-offs.' },
            { text: '08-Exam/2022 — 27 August 2023', note: 'the first paper on the scheme.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: '12-Exam/2024 — provisional key notice', href: UP_JA_SRC.key2024 },
            { label: 'UPSSSC PET — the shortlist paper', to: '/government-exams/state/uttar-pradesh/upsssc-pet/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'UPSSSC Junior Assistant mock tests — 100-question sittings in 120 minutes at the five weights, and timed typing in Hindi and English.',
      lead: [
        'Two hours of paper and ten minutes of typing decide the post.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Full sittings at the weights', text: 'Thirty of Hindi, fifteen of reasoning, twenty of general knowledge, fifteen of computer, twenty of Uttar Pradesh; a quarter off per wrong answer. The 2023 final cut for the unreserved was 65.75.' },
            { title: 'Typing on the test fonts', text: 'Hindi on Mangal Inscript or Kruti Dev 010 at 25 words a minute, English at 30 — timed passages, every day.' },
            { title: 'Hindi as the largest section', text: 'Thirty marks of grammar, vocabulary and writing ability; the section that separates candidates.' },
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
        'UPSSSC Junior Assistant preparation — holding the typing speeds and CCC, the pending 2024 result, the December typing test, and building a PET score.',
      lead: [
        'The qualifications — typing and CCC — take longer than the paper; get them first.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From PET to allotment',
          items: [
            { title: 'Hold the CCC and the typing speeds', text: 'Rule 10 requires Hindi at 25 and English at 30 words a minute on computer and the CCC certificate; the typing test checks the speed, the verification checks the certificate.' },
            { title: 'Sit PET 2026', text: 'On 23 to 25 October; the next junior assistant mains will shortlist on it or on PET 2025.' },
            { title: 'For the 2024 round, watch for the result', text: 'The typing test is proposed for December 2026 in the commission’s calendar; five per post are called.' },
            { title: 'Upload documents in the window', text: 'The 2023 round gave six weeks; 859 of those called did not upload.' },
            { title: 'Expect a long tail', text: 'Fourteen months from paper to final list in the 2023 round, and litigation at the end.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'UPSSSC Junior Assistant study material — a Hindi grammar and composition text, a reasoning workbook, general knowledge and Uttar Pradesh books, computer basics.',
      lead: [
        'Hindi first, then the state, then the rest.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By part.',
          head: ['Part', 'What to read', 'Note'],
          rows: [
            ['Hindi', 'A standard Hindi grammar with vocabulary, idioms and composition', 'Thirty marks.'],
            ['General intelligence', 'A reasoning workbook', 'Fifteen marks.'],
            ['General knowledge', 'NCERT general studies; a year of current affairs', 'Twenty marks.'],
            ['Computer and IT', 'A computer basics text; the CCC syllabus', 'Fifteen marks, and the certificate.'],
            ['Uttar Pradesh', 'A state general knowledge book; the year’s events', 'Twenty marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'UPSSSC PET', to: '/government-exams/state/uttar-pradesh/upsssc-pet/' },
            { label: 'UPSSSC Lekhpal', to: '/government-exams/state/uttar-pradesh/upsssc-lekhpal/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any UPSSSC Junior Assistant recruitment open?',
      a: 'No. No junior assistant or junior clerk mains has been advertised in 2025 or 2026. The 2023 round of 5,339 posts published its final selection on 9 September 2026, and the 2024 round of 2,702 posts, examined on 1 February 2026, awaits its result. The commission’s only clerical-type advertisement of 2026 is twelve computer operator posts for the Advocate General’s office, open from 7 to 28 September, a different cadre needing a degree and a computer diploma or O-level.',
    },
    {
      q: 'What is the UPSSSC Junior Assistant exam pattern?',
      a: 'One paper of 100 questions and 100 marks in 120 minutes, objective, with a quarter of the question’s marks deducted per wrong answer: Hindi knowledge and writing ability 30, general intelligence 15, general knowledge 20, computer and information technology 15, and Uttar Pradesh 20. Candidates at five per post on written marks then take a typing test — Hindi at 25 words a minute and English at 30 — which qualifies only. No interview.',
    },
    {
      q: 'What is the UPSSSC Junior Assistant eligibility?',
      a: 'Under rule 10 of the Clerical Cadre Service Rules 2014: the intermediate examination, Hindi typing at 25 and English at 30 words a minute on computer, and the CCC certificate of NIELIT or equivalent, with preference for Territorial Army service or an NCC B certificate. Age 18 to 40 on 1 July of the advertisement year with the usual relaxations, and a score in the PET named in the advertisement.',
    },
    {
      q: 'What was the UPSSSC Junior Assistant 2023 result?',
      a: 'The written examination of 29 June 2025 shortlisted 90,336 candidates for typing on 8 October 2025 at a cut-off of 41.25 for the unreserved, SC, OBC and EWS categories and 33.50 for ST. After the typing test from 23 November 2025 and document upload in April to June 2026, the final selection of 9 September 2026 named 5,329 of 5,339 posts — 2,585 unreserved, 1,066 SC, 147 ST, 1,074 OBC and 457 EWS — at final cut-offs of 65.75 unreserved, 64.00 OBC, 62.25 EWS, 54.00 SC and 39.25 ST, subject to pending writs.',
    },
    {
      q: 'When is the UPSSSC Junior Assistant 2024 result?',
      a: 'It had not been published at 11 September 2026. The 2,702-post round was examined on 1 February 2026 in nine cities, with a provisional key on 2 February and a revised key in June; the commission’s calendar of 3 August 2026 proposes its typing test for December 2026, which implies the written result before then.',
    },
    {
      q: 'What is the fee for UPSSSC Junior Assistant?',
      a: '₹25 processing fee to apply, for every category. Candidates shortlisted for the written examination pay the mains fee before the admit card — ₹200 for unreserved and OBC, ₹80 for SC and ST, and nothing for PwD.',
    },
    {
      q: 'Is the Junior Assistant typing test counted in the merit?',
      a: 'No. The typing test is qualifying only — Hindi at 25 words a minute on Mangal or Kruti Dev and English at 30 on computer — for candidates called at five per post on written marks. Selection is on the written examination alone, after document verification, under the interview-abolition rules of 2017.',
    },
    {
      q: 'How does the PET connect to Junior Assistant recruitment?',
      a: 'Only candidates who sat the PET named in the advertisement and hold a positive score may apply, and the commission shortlists fifteen per post on the normalised PET score for the written examination. The 2024 round used PET 2023; a new round would use PET 2025 or PET 2026, whose scores are valid three years — the highest valid score counts.',
    },
  ],
}

/* ── Uttar Pradesh Police ───────────────────────────────────────
   Constables and sub-inspectors through the Police Recruitment and
   Promotion Board: a written test with normalisation across shifts, then
   document verification, physical standards and a running test that
   qualify, and a merit on the written marks in order of preference. The
   2025 constable round of 32,679 posts is at its physical stage; the 2025
   sub-inspector round of 4,543 closed in July 2026. Every figure is from
   the board's notices. */
const UPPRPB = {
  home: 'https://uppbpb.gov.in/',
  notices: 'https://uppbpb.gov.in/Home/Notice',
  apply: 'https://apply.upprpb.in/',
  otr: 'https://www.upprpb.in/#/auth/landing',
  constable2025: 'https://uppbpb.gov.in/FilesUploaded/Notice/CONSTABLE-VIGYAPTIc7be0cc8-3365-471e-9237-447c528d341a.pdf',
  constable2025Age: 'https://uppbpb.gov.in/FilesUploaded/Notice/20260105182150533dbb2e665-07ea-428e-972a-9f75e7701fcf.pdf',
  constable2025Dates: 'https://uppbpb.gov.in/FilesUploaded/Notice/img20260203_1656413187ae3b4f-0862-4fc5-bdb7-f1f72fc87900.pdf',
  constable2025Process: 'https://uppbpb.gov.in/FilesUploaded/Notice/CONST-25OMRVIGGYAPTI05-02-2026590e47bd-d973-4a45-9007-b2a0a048b4f4.pdf',
  constable2025Dv: 'https://uppbpb.gov.in/FilesUploaded/Notice/vig1_31072026f114aeea-ffe0-4cb8-b793-0c624293c7a0.pdf',
  constable2025Key: 'https://uppbpb.gov.in/FilesUploaded/Notice/vig2_31072026f7873deb-f863-429b-8521-ca638d9af54a.pdf',
  constable2025DvSchedule: 'https://uppbpb.gov.in/FilesUploaded/Notice/DVPST%20DATE%20AND%20INSTRUCTION8728d36f-f7fc-479f-98b7-8d59b3466acf.pdf',
  constable2023: 'https://uppbpb.gov.in/FilesUploaded/Notice/Constable-Vigyapti-2023694b8925-2df1-442c-979d-da485890da30.pdf',
  constable2023Cancel: 'https://uppbpb.gov.in/FilesUploaded/Notice/Const-23-Vig38ce6152-a382-4b8b-9e7a-87f3399093bf.pdf',
  constable2023Reexam: 'https://uppbpb.gov.in/FilesUploaded/Notice/vig1_08082453a5fd58-18f7-43c7-87b2-25d3a7620be0.pdf',
  constable2023Dv: 'https://uppbpb.gov.in/FilesUploaded/Notice/vig1_21112024e9c48462-15ee-4e96-a8d3-e7268dcc15bb.pdf',
  si2025: 'https://uppbpb.gov.in/FilesUploaded/Notice/SI_vigyapti_202567e84cf2-8d04-4072-bdbc-56f3c8e1ccbe.pdf',
  si2025Dv: 'https://uppbpb.gov.in/FilesUploaded/Notice/UPSI%20DVPST%20QUAL%2007%20May%202026ab113fb6-7987-425a-a119-f7b3bd2a1064.pdf',
  si2025Final: 'https://uppbpb.gov.in/FilesUploaded/Notice/14-07-2026%20UPSI2025%20VIGYPTI944a5675-a3d4-4ac6-a52f-f476f72e81c1.pdf',
  si2025Norm: 'https://uppbpb.gov.in/FilesUploaded/Notice/25SI_normalised_marks_noticec123b905-7353-4ab1-a961-58cdb7c22013.pdf',
  si2021Final: 'https://web.archive.org/web/20220612113351/http://uppbpb.gov.in/SI_PC_FSSO_2021/vig1_12062022.pdf',
}

const UP_POLICE = {
  slug: 'uttar-pradesh-police',
  path: '/government-exams/state/uttar-pradesh/uttar-pradesh-police/',
  name: 'Uttar Pradesh Police',
  fullName: 'Uttar Pradesh Police Recruitment and Promotion Board — constable and sub-inspector direct recruitment',
  authority: 'Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB)',
  official: 'uppbpb.gov.in',
  seoTitle: 'UP Police Constable 2025 & SI: 32,679 Posts, DV/PST, Pattern, Cut-offs',
  metaDescription:
    'UP Police recruitment — the 32,679-post constable round at DV/PST, the 4,543-post sub-inspector round finalised July 2026, papers, cut-offs, heights and age.',
  lead: [
    'Uttar Pradesh recruits its constables and sub-inspectors through the Police Recruitment and Promotion Board on one pattern: a written test on OMR sheets held in shifts and normalised, a shortlist at about two and a half times the posts for document verification and the physical standard test, a run that qualifies, and a final merit on the normalised written marks in the candidate’s order of preference across the posts advertised. Nothing is added for the physical stage, and there is no interview. The board publishes every notice as a PDF and every result behind a candidate login.',
    'The two rounds now running are the state’s largest. The constable advertisement of 31 December 2025 offered 32,679 posts across the civil police, the PAC, the special security force, the women’s battalions, the mounted police and the jails; its written test of 8 to 10 June 2026 shortlisted 76,184 for verification and physical standards from 17 August, with the run proposed for September. The sub-inspector advertisement of 12 August 2025 for 4,543 posts ran from a written test in March 2026 to a final result on 14 July. The 2023 constable round of 60,244 posts, whose February 2024 test was cancelled for a leak, was re-examined in August 2024 and finalised in March 2025.',
  ],
  quickFacts: [
    ['Recruiting body', 'Uttar Pradesh Police Recruitment and Promotion Board'],
    ['Constable 2025', 'Advt 07/2025, 31 December 2025 — 32,679 posts; written 8 to 10 June 2026; 76,184 called to DV/PST from 17 August; run proposed for September'],
    ['Sub-inspector 2025', 'Advt 03/2025, 12 August 2025 — 4,543 posts; written 14 and 15 March 2026; final result 14 July 2026'],
    ['Constable paper', '150 questions, 300 marks, two hours — general knowledge, Hindi, numerical and mental ability, reasoning; normalised across shifts'],
    ['Sub-inspector paper', '160 questions, 400 marks, two hours — four sections of 100; 35 per cent in each and 50 overall'],
    ['Standards', 'Men 168 cm and 79 to 84 cm chest; women 152 cm and 40 kg; run 4.8 km in 25 or 28 minutes for men, 2.4 km in 14 or 16 for women'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2025 constable advertisement lists its posts by cadre: 10,469 constables of the civil police for men and women, 15,131 constables of the PAC and armed police for men, 1,341 for the special security force, 2,282 women constables for the Lucknow, Badaun and Gorakhpur battalions, 71 mounted police constables, and 3,279 and 106 jail warders for men and women — 32,679 at level 3, ₹21,700 to ₹69,100. A candidate ranks the posts at application and is allotted by merit in that order. Applications ran from 31 December 2025 to 30 January 2026 at ₹500, or ₹400 for SC and ST, after a one-time registration on the board’s portal.',
    },
    {
      type: 'p',
      text: 'The written test of 8, 9 and 10 June 2026 ran in six shifts, and the board’s notice of 31 July 2026 normalised the marks, applied minimum qualifying marks of 30 per cent for the unreserved, 25 for EWS and OBC and 20 for SC and ST, and called about 2.33 times the posts — 76,184 candidates — for document verification and the physical standard test at normalised cut-offs of 258.04 unreserved, 251.63 OBC, 247.93 EWS, 239.34 SC and 220.11 ST, a little lower for women, with every qualified home guard, freedom fighter’s dependant and ex-serviceman called. Verification and measurement began on 17 August; the run was proposed for September, and normalised marks are to be shown after the final result.',
    },
    {
      type: 'list',
      title: 'What defines the board’s recruitments',
      items: [
        { text: 'Order of preference', note: 'one application covers every cadre in the advertisement; the candidate’s ranking of the posts decides the allotment.' },
        { text: 'Normalisation across shifts', note: 'under the board’s notice of 18 December 2023; the 2023 constable re-examination ran in ten shifts, the 2025 test in six, the 2025 sub-inspector test in four.' },
        { text: 'Physical stages qualify', note: 'height, chest and weight to the standard, then the run within time; neither adds marks. The final list is the normalised written marks with reservation.' },
        { text: 'Ties', note: 'preferential qualification — NIELIT O-level, two years’ Territorial Army service or an NCC B certificate — then the older candidate, then alphabetical order.' },
      ],
    },
    {
      type: 'note',
      title: 'The 2023 constable round and the leak',
      text: 'Advertised on 23 December 2023 for 60,244 posts with 48 lakh applicants, its written test of 17 and 18 February 2024 was cancelled by the government on 24 February after the second-shift papers of both days circulated before the sitting. The re-examination of 23, 24, 25, 30 and 31 August 2024 ran in ten shifts; the notice of 21 November 2024 called 1,74,316 for verification at a normalised cut-off of 214.05 for the unreserved; the physical stages ran from December to February; and the final result of 13 March 2025 filled the 60,244 posts, 12,048 of them with women. The Special Task Force’s case named the same mastermind as the RO/ARO leak, and a writ against the final key and result was before the High Court in August 2026.',
    },
  ],
  stages: [
    {
      name: 'Registration and application with preferences',
      mode: 'One-time registration; ₹500, ₹400 for SC and ST',
      detail:
        'A month’s window — 31 December 2025 to 30 January 2026 for constables, 12 August to 11 September 2025 for sub-inspectors — with the posts ranked in order of preference and the fee reconciled within days of closing.',
    },
    {
      name: 'Written test',
      mode: 'OMR, two hours, in shifts, normalised',
      detail:
        'Constable: 150 questions of two marks, 300 in all, on general knowledge, general Hindi, numerical and mental ability, and mental aptitude, intelligence and reasoning. Sub-inspector: 160 questions of two and a half marks in four sections of 100 — general Hindi; law, the Constitution and general knowledge; numerical and mental ability; mental aptitude, intelligence and reasoning.',
    },
    {
      name: 'Document verification and physical standard test',
      mode: 'About two and a half times the posts; qualifying',
      detail:
        'Called on the normalised marks by category. Men 168 cm, or 160 for ST, with a chest of 79 cm expanding to 84, or 77 to 82 for ST; women 152 cm, or 147 for ST, and 40 kg. Certificates verified at the same sitting.',
    },
    {
      name: 'Physical efficiency test, then the final list',
      mode: 'Run within time; merit on normalised written marks',
      detail:
        'Constables: 4.8 km in 25 minutes for men, 2.4 km in 14 for women. Sub-inspectors: 4.8 km in 28 and 2.4 km in 16. The final list by normalised marks, preference and reservation; medical examination and character verification follow. No waiting list for sub-inspectors.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No police window is open. The 2025 constable round is at its physical stage: the notice of 31 July 2026 published the final key and called 76,184 candidates for document verification and the physical standard test from 17 August, with the schedule and admit cards notified on 10 August and the run proposed for September; no run date had been notified by the date checked, and the board postponed its home guard run indefinitely on 10 September for rain and waterlogging. The 2025 sub-inspector round is complete: written test 14 and 15 March 2026 in 75 districts, 12,333 called for verification on 7 May, verification 15 to 17 June, the run from 29 June to 4 July after rain rescheduling, the final result on 14 July 2026 and normalised marks on 21 July. No 2026 advertisement for either post has been issued.`,
    },
    {
      type: 'table',
      caption: 'The 2025 constable round, from the board’s notices.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 07/2025', '31 December 2025', '32,679 posts across seven cadres; merit cum order of preference'],
        ['Applications', '31 December 2025 to 30 January 2026', '₹500; ₹400 SC and ST; fee reconciled to 2 February'],
        ['Age corrigendum', '5 January 2026', 'One-time three-year relaxation for every category'],
        ['Written test', '8, 9 and 10 June 2026', 'Two shifts a day; six shifts in all; admit cards from 4 June'],
        ['Objections to the key', '20 June 2026', 'Through the candidate portal'],
        ['Final key and DV/PST list', '31 July 2026', '76,184 called at about 2.33 times the posts; normalised cut-offs published'],
        ['Document verification and PST', 'From 17 August 2026', 'Schedule and admit cards notified 10 August'],
        ['Physical efficiency test', 'Proposed for September 2026', 'Date not yet notified'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2025 sub-inspector round.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 03/2025', '12 August 2025', '4,543 posts — civil police 4,242, PAC platoon commander 135, special security force 60, women’s battalions 106'],
        ['Applications', '12 August to 11 September 2025', '15,75,760 applications'],
        ['Written test', '14 and 15 March 2026', '75 districts; four shifts'],
        ['Result for DV/PST', '7 May 2026', '12,333 called; 35 per cent per section and 50 overall applied'],
        ['Verification and PST', '15 to 17 June 2026', '—'],
        ['Run', '29 June to 4 July 2026', 'Rescheduled at Fatehpur for rain'],
        ['Final result', '14 July 2026', 'Normalised marks published 21 July'],
      ],
    },
    {
      type: 'table',
      caption: 'Normalised cut-offs, from the board’s DV/PST notices.',
      head: ['Category', 'Constable 2025, of 300', 'Constable 2023, of 300', 'Sub-inspector 2025, of 400'],
      rows: [
        ['Unreserved', '258.04; women 255.84', '214.05; women 203.91', '369.88; women 360.50'],
        ['EWS', '247.93; women 247.36', '187.32; women 180.23', '364.41; women 353.22'],
        ['OBC', '251.63; women 249.27', '199.00; women 189.39', '364.56; women 353.77'],
        ['SC', '239.34; women 236.32', '178.05; women 169.13', '350.91; women 337.94'],
        ['ST', '220.11; women 211.48', '146.74; women 136.03', '334.65; women 306.92'],
      ],
    },
    {
      type: 'links',
      title: 'Check the board directly',
      items: [
        { label: 'UPPRPB — notice board', href: UPPRPB.notices },
        { label: 'Constable 2025 — DV/PST list and cut-offs, 31 July 2026', href: UPPRPB.constable2025Dv },
        { label: 'Constable 2025 — DV/PST schedule, 10 August 2026', href: UPPRPB.constable2025DvSchedule },
        { label: 'Sub-inspector 2025 — final result notice, 14 July 2026', href: UPPRPB.si2025Final },
        { label: 'Application portal', href: UPPRPB.apply },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2025 advertisements. Age on 1 July 2025, with the one-time three-year relaxations.',
      head: ['Requirement', 'Constable', 'Sub-inspector'],
      rows: [
        ['Qualification', 'Intermediate or equivalent from a board established by law; appearing candidates not eligible', 'A bachelor’s degree from a university established by law or equivalent'],
        ['Age as advertised', 'Men 18 to 22, women 18 to 25; five more for SC, ST and OBC of Uttar Pradesh', '21 to 28; five more for SC, ST and OBC of the state and its employees'],
        ['One-time relaxation', 'Three years for every category by the corrigendum of 5 January 2026 — unreserved men born 2 July 2000 to 1 July 2007, women from 2 July 1997; SC, ST and OBC men from 2 July 1995, women from 2 July 1992', 'Three years for every category by the order of 26 May 2025 — unreserved born 2 July 1994 to 1 July 2004; reserved and state employees from 2 July 1989; ex-servicemen with service deducted'],
        ['Fee', '₹500; ₹400 for SC and ST', '₹500; ₹400 for SC and ST'],
        ['Preferential qualifications', 'NIELIT O-level, two years in the Territorial Army, or an NCC B certificate — tie-break only', 'The same'],
        ['Reservation', 'For domiciles of Uttar Pradesh; Indian citizens and the listed migrants', 'The same'],
        ['Other', 'The bigamy bar; medical fitness and character verification before appointment', 'The same'],
      ],
    },
    {
      type: 'table',
      caption: 'Physical standards, identical in both advertisements.',
      head: ['Test', 'Men', 'Women'],
      rows: [
        ['Height', '168 cm; 160 for ST', '152 cm; 147 for ST'],
        ['Chest', '79 cm unexpanded, 84 expanded, with at least 5 cm expansion; 77 and 82 for ST', '—'],
        ['Weight', '—', '40 kg minimum'],
        ['Run — constable', '4.8 km in 25 minutes', '2.4 km in 14 minutes'],
        ['Run — sub-inspector', '4.8 km in 28 minutes', '2.4 km in 16 minutes'],
      ],
    },
    {
      type: 'p',
      text: 'Pay: constables and jail warders at level 3, ₹21,700 to ₹69,100; sub-inspectors and platoon commanders on the scale of ₹9,300 to ₹34,800 with grade pay ₹4,200. The 2025 sub-inspector advertisement carried no fire officer posts; the 2021 round had twenty-three.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Constable written test, from the 2025 advertisement and its annexure. OMR, two hours.',
      head: ['Feature', 'Rule'],
      rows: [
        ['Questions and marks', '150 questions of two marks — 300'],
        ['Subjects', 'General knowledge; general Hindi; numerical and mental ability; mental aptitude, intelligence and reasoning — no per-subject split published in 2025'],
        ['Qualifying', '30 per cent unreserved; 25 EWS and OBC; 20 SC and ST'],
        ['Normalisation', 'Across shifts under the board’s notice of 18 December 2023'],
        ['Cancelled questions', 'Marks redistributed pro rata across the valid questions, under the High Court formula the advertisement cites'],
        ['Negative marking', 'The 2023 advertisement deducted half a mark per wrong answer; the 2025 advertisement and its examination notice carry no negative-marking clause'],
      ],
    },
    {
      type: 'table',
      caption: 'Sub-inspector written test, from the 2025 advertisement. OMR, two hours, 160 questions.',
      head: ['Section', 'Questions', 'Marks', 'Content'],
      rows: [
        ['General Hindi', '40', '100', 'Grammar, vocabulary, comprehension and usage'],
        ['Law, Constitution and general knowledge', '40', '100', 'The Bharatiya Nyaya Sanhita and Nagarik Suraksha Sanhita; laws on women, children and Scheduled Castes; traffic, environment, wildlife, human rights, RTI, the IT Act and cyber crime; land and revenue law; the Constitution; Uttar Pradesh administration; computer basics and social media'],
        ['Numerical and mental ability', '40', '100', 'Arithmetic and quantitative reasoning'],
        ['Mental aptitude, intelligence and reasoning', '40', '100', 'Aptitude for police work; intelligence and logical reasoning'],
        ['Total', '160', '400', '35 per cent in each section and 50 overall under rule 15 of the 2015 service rules; sections normalised and summed; no negative-marking clause'],
      ],
    },
    {
      type: 'note',
      title: 'What decides the list',
      text: 'The final merit is the normalised written marks, with vertical and horizontal reservation, in each candidate’s order of preference across the posts; the physical standard and efficiency tests only qualify. The 2025 sub-inspector result notice sets the tie-break — preferential qualification, then higher age, then alphabetical order of name — and records that no waiting list is kept. Results, keys and normalised scores are published only through the candidate login portals of each round.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the board’s notice board and the notices read from it: the constable advertisement of 31 December 2025 and its corrigenda, date, process, key and DV/PST notices to 10 August 2026; the sub-inspector advertisement of 12 August 2025 and its date, result, physical test, final result and normalised-marks notices to 21 July 2026; the 2023 constable advertisement, cancellation, re-examination and DV/PST notices; and the 2021 sub-inspector final result in the web archive. The 2023 final result document and its cut-offs, the application count of that round, the selected totals of the 2025 sub-inspector round and the court proceedings are from press reports and are marked as such.`,
    },
    {
      type: 'links',
      title: 'Official notices',
      items: [
        { label: 'Constable 2025 — advertisement, 31 December 2025', href: UPPRPB.constable2025 },
        { label: 'Constable 2025 — age relaxation corrigendum, 5 January 2026', href: UPPRPB.constable2025Age },
        { label: 'Constable 2025 — examination dates, 3 February 2026', href: UPPRPB.constable2025Dates },
        { label: 'Constable 2025 — examination process, 5 February 2026', href: UPPRPB.constable2025Process },
        { label: 'Constable 2025 — final key notice, 31 July 2026', href: UPPRPB.constable2025Key },
        { label: 'Constable 2023 — advertisement, 23 December 2023', href: UPPRPB.constable2023 },
        { label: 'Constable 2023 — cancellation, 24 February 2024', href: UPPRPB.constable2023Cancel },
        { label: 'Constable 2023 — re-examination dates, 8 August 2024', href: UPPRPB.constable2023Reexam },
        { label: 'Constable 2023 — DV/PST list and cut-offs, 21 November 2024', href: UPPRPB.constable2023Dv },
        { label: 'Sub-inspector 2025 — advertisement, 12 August 2025', href: UPPRPB.si2025 },
        { label: 'Sub-inspector 2025 — DV/PST list and cut-offs, 7 May 2026', href: UPPRPB.si2025Dv },
        { label: 'Sub-inspector 2025 — normalised marks notice, 21 July 2026', href: UPPRPB.si2025Norm },
        { label: 'Sub-inspector 2021 — final result, 12 June 2022, archived', href: UPPRPB.si2021Final },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'UP Police syllabus — the four constable subjects and four sub-inspector sections, with the law section’s BNS, BNSS and special Acts, from the advertisements.',
      lead: [
        'The syllabus is Annexure 1 of each advertisement; the sub-inspector’s law section is the most specific.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'General knowledge — both',
              'India and Uttar Pradesh: history, geography, polity, economy, culture, police and security, current events, awards, sports and computers.',
            ],
            [
              'General Hindi — both',
              'Grammar, vocabulary, synonyms and antonyms, idioms, sentence correction and comprehension.',
            ],
            [
              'Numerical and mental ability — both',
              'Number systems, simplification, percentages, ratio, averages, interest, time and work, mensuration and data interpretation; series, coding and ordering.',
            ],
            [
              'Mental aptitude, intelligence and reasoning — both',
              'Attitude to public interest, law and order, rule of law and gender sensitivity; analogies, classification, direction, syllogisms, figure reasoning.',
            ],
            [
              'Law and the Constitution — sub-inspector',
              'The Bharatiya Nyaya Sanhita and Nagarik Suraksha Sanhita; protection of women, children and Scheduled Castes; traffic, environment, wildlife and human rights law; RTI; the IT Act and cyber crime; land reform and revenue law; the Constitution’s rights, principles, Centre-State relations, elections and All India Services; Uttar Pradesh administration; social media.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Constable 2025 advertisement — Annexure 1', href: UPPRPB.constable2025 },
            { label: 'Sub-inspector 2025 advertisement — Annexure 1', href: UPPRPB.si2025 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'UP Police exam pattern — 300-mark constable and 400-mark sub-inspector papers normalised across shifts, qualifying physical tests, and merit by preference.',
      lead: [
        'A written test that ranks, physical tests that qualify, and a preference that allots.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Side by side.',
          head: ['Feature', 'Constable', 'Sub-inspector'],
          rows: [
            ['Paper', '150 questions, 300 marks, two hours', '160 questions, 400 marks, two hours'],
            ['Qualifying', '30, 25 and 20 per cent by category', '35 per cent per section and 50 overall'],
            ['Shortlist', 'About 2.33 to 2.5 times the posts to DV/PST', 'About 2.7 times'],
            ['Run', '4.8 km in 25 minutes; 2.4 km in 14', '4.8 km in 28; 2.4 km in 16'],
            ['Merit', 'Normalised written marks by preference', 'The same; no waiting list'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'UP Police previous papers — the final keys of the 2023 and 2025 constable tests and the 2025 sub-inspector test, behind the board’s candidate portals.',
      lead: [
        'The board publishes final keys and normalised scores through each round’s login portal; the question booklets are not posted openly.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Constable 2025 — 8 to 10 June 2026', note: 'the final key of 31 July on the round’s portal; six shifts.' },
            { text: 'Constable 2023 — August 2024 re-examination', note: 'the final key of 2 November 2024; ten shifts.' },
            { text: 'Sub-inspector 2025 — 14 and 15 March 2026', note: 'the final key of 7 May and normalised scores from 21 July.' },
            { text: 'Sub-inspector 2021', note: 'a computer-based test of 54 shifts in November and December 2021; the section lists in the archived result notice.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Constable 2025 — final key notice with the portal link', href: UPPRPB.constable2025Key },
            { label: 'UPPRPB — notice board', href: UPPRPB.notices },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'UP Police mock tests — 150-question constable and 160-question sub-inspector sittings in two hours, scored to the section floors, and the run against the clock.',
      lead: [
        'Two hours of paper, then 4.8 kilometres in 25 or 28 minutes.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Constable — 150 questions in two hours', text: 'Four subjects in roughly equal parts at two marks a question. The 2025 DV/PST cut for the unreserved was 258 of 300 after normalisation.' },
            { title: 'Sub-inspector — 160 questions in two hours', text: 'Forty a section; 35 per cent in each and 50 overall to be considered at all. The 2025 cut for the unreserved was 370 of 400.' },
            { title: 'The run', text: '4.8 kilometres in 25 minutes for constable men and 28 for sub-inspectors; 2.4 in 14 or 16 for women. Qualifying, but the round ends there for those who miss it.' },
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
        'UP Police preparation — the physical stage of the 2025 constable round, ranking the preferences, the standards to meet, and waiting for the next advertisement.',
      lead: [
        'For 76,184 candidates the round is on the ground now; for everyone else, the next advertisement.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From advertisement to appointment',
          items: [
            { title: 'Register once, then watch the notice board', text: 'The board’s one-time registration precedes every application; its notice board lists the last fifty notices, with older ones at their own URLs.' },
            { title: 'Rank the posts deliberately', text: 'Allotment is by merit in the order of preference given at application; the PAC, the special security force and the jails are different postings.' },
            { title: 'Measure before applying', text: '168 cm and a 79 cm chest for men, 152 cm and 40 kg for women, with the ST relaxations; the standard is checked at DV/PST.' },
            { title: 'Train the run as a gate', text: 'A miss ends the candidacy; the board has rescheduled runs for rain.' },
            { title: 'Keep the certificates for verification', text: 'Category, domicile and the preferential qualifications — O-level, Territorial Army, NCC B — decide ties and reservation.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'UP Police study material — Hindi grammar, arithmetic and reasoning workbooks, Uttar Pradesh and Indian general knowledge, and the criminal codes for SIs.',
      lead: [
        'The constable paper is school-level Hindi, arithmetic, reasoning and general knowledge; the sub-inspector paper adds a hundred marks of law.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By subject.',
          head: ['Subject', 'What to read', 'Note'],
          rows: [
            ['General Hindi', 'A standard Hindi grammar with idioms and comprehension', 'A quarter of either paper.'],
            ['General knowledge', 'NCERT general studies; Uttar Pradesh in one book; a year of current affairs', 'The state is weighted.'],
            ['Numerical and mental ability', 'Arithmetic to class X; a quantitative aptitude workbook', 'Two marks a question.'],
            ['Reasoning and aptitude', 'A reasoning workbook; the police-aptitude heads of the annexure', 'Attitude questions on law, order and gender.'],
            ['Law — sub-inspector', 'The Bharatiya Nyaya Sanhita and Nagarik Suraksha Sanhita in outline; the special Acts named in the annexure; a Constitution primer', 'A hundred marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Police exam preparation', to: '/government-exams/police/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'What is the status of UP Police Constable 2025?',
      a: 'The written test of 8 to 10 June 2026 for 32,679 posts produced its final key and DV/PST list on 31 July 2026 — 76,184 candidates called at normalised cut-offs of 258.04 for the unreserved, 251.63 OBC, 247.93 EWS, 239.34 SC and 220.11 ST — with document verification and the physical standard test from 17 August. The run was proposed for September and had not been dated at 11 September 2026. No 2026 advertisement has been issued.',
    },
    {
      q: 'What is the UP Police Constable exam pattern?',
      a: 'One OMR paper of 150 questions and 300 marks in two hours — general knowledge, general Hindi, numerical and mental ability, and mental aptitude, intelligence and reasoning — held in shifts and normalised, with minimum qualifying marks of 30 per cent for the unreserved, 25 for EWS and OBC and 20 for SC and ST. About two and a half times the posts go to document verification and the physical standard test, then the run — 4.8 km in 25 minutes for men, 2.4 km in 14 for women — which qualifies. The final merit is the normalised written marks in order of preference.',
    },
    {
      q: 'Is there negative marking in the UP Police Constable exam?',
      a: 'The 2023 advertisement deducted half a mark for each wrong answer. The 2025 advertisement, its annexure and the examination-process notice of 5 February 2026 carry no negative-marking clause; whether the 2025 paper was marked negatively is not stated in any board document read.',
    },
    {
      q: 'What was the UP Police SI 2025 result?',
      a: 'The written test of 14 and 15 March 2026 for 4,543 posts, sat from 15,75,760 applications, called 12,333 for verification on 7 May at normalised cut-offs of 369.88 for the unreserved, 364.56 OBC, 364.41 EWS, 350.91 SC and 334.65 ST; verification ran from 15 to 17 June, the run from 29 June to 4 July, and the final result was published on 14 July 2026 with normalised marks on 21 July. Press reports put the selected at 4,543, with 954 women.',
    },
    {
      q: 'What is the UP Police SI exam pattern?',
      a: 'One OMR paper of 160 questions and 400 marks in two hours in four sections of 100 — general Hindi; law, the Constitution and general knowledge; numerical and mental ability; and mental aptitude, intelligence and reasoning — with 35 per cent required in each section and 50 overall under the 2015 service rules, sections normalised across shifts and summed. About 2.7 times the posts go to verification and the physical standards, then a run of 4.8 km in 28 minutes for men and 2.4 km in 16 for women. Merit is the normalised written marks; there is no interview and no waiting list.',
    },
    {
      q: 'What are the height and age requirements for UP Police?',
      a: 'Men 168 cm, or 160 for ST, with a chest of 79 cm expanding to 84; women 152 cm, or 147 for ST, and 40 kg. Constables 18 to 22 for men and 18 to 25 for women, sub-inspectors 21 to 28, on 1 July of the advertisement year, with five years for SC, ST and OBC of Uttar Pradesh — and one-time three-year relaxations for every category in both 2025 rounds, taking unreserved constable men to a birth date of 2 July 2000 and sub-inspectors to 2 July 1994.',
    },
    {
      q: 'What is the UP Police fee?',
      a: '₹500 for unreserved, EWS and OBC candidates and ₹400 for SC and ST in both 2025 advertisements, after a one-time registration on the board’s portal. The 2021 and 2023 rounds charged ₹400 for all.',
    },
    {
      q: 'What happened to the UP Police Constable 2023 exam?',
      a: 'The written test of 17 and 18 February 2024 for 60,244 posts was cancelled by the government on 24 February 2024 after the second-shift papers of both days circulated before the sitting. The re-examination ran on 23, 24, 25, 30 and 31 August 2024 in ten shifts; 1,74,316 were called for verification on 21 November 2024; the physical stages ran from December to February; and the final result of 13 March 2025 filled the posts, 12,048 of them with women. A writ against the final key and result was before the High Court in August 2026.',
    },
  ],
}

/* ── Uttar Pradesh teaching posts ───────────────────────────────
   Since 2023 one commission — the Uttar Pradesh Education Service
   Selection Commission — conducts UPTET and recruits for aided colleges,
   aided secondary schools and, when the basic education board requisitions,
   the parishad's primary schools. UPTET returned in July 2026 after four
   years; the 2022 TGT and PGT rounds were finally examined and closed in
   2026; the 69,000-post case of 2019 is before the Supreme Court. */
const UPESSC = {
  home: 'https://upessc.up.gov.in/',
  intro: 'https://upessc.up.gov.in/Home/Intro',
  advertisements: 'https://upessc.up.gov.in/Home/Advertisment',
  news: 'https://upessc.up.gov.in/Home/news',
  syllabus: 'https://upessc.up.gov.in/Home/Syllabus_all',
  booklets: 'https://upessc.up.gov.in/Home/Booklet',
  results: 'https://www.upessc.net/',
  apply: 'https://apply.upessc.org/',
  tetVigyapti: 'https://upessc.up.gov.in/Notice/a930-8001-43bd-4b00-e363.pdf',
  tetBooklet: 'https://upessc.up.gov.in/Notice/334a-b177-4450-4fbc-98be.pdf',
  tetResult: 'https://upessc.up.gov.in/Notice/4bfb-f4a2-41d0-7f4a-7186.pdf',
  tetCertificates: 'https://upessc.up.gov.in/Notice/b1dc-db94-42ae-c368-cb5a.pdf',
  specialTet: 'https://upessc.up.gov.in/Notice/badc-2f84-4983-44c3-12bf.pdf',
  calendar2026: 'https://upessc.up.gov.in/Notice/d5e5-9cac-45aa-aa75-e78b.pdf',
  pgtFinal: 'https://upessc.up.gov.in/Notice/82c2-c5e8-4929-ebaf-ea06.pdf',
  tgtFinal: 'https://upessc.up.gov.in/Notice/35f3-6fdf-419c-d56f-55ff.pdf',
  tgtCutoffs: 'https://upessc.up.gov.in/Notice/67b0-cf9d-4c59-8b0a-a7b1.pdf',
  apAdvt2026: 'https://upessc.up.gov.in/Notice/51a0-7a2c-4bdd-884b-4ae7.pdf',
  tetSyllabusPrimary: 'https://www.upessc.up.gov.in/syllabus/ede204de-908b-435f-9028-5fe87a4d460c.pdf',
  tetSyllabusUpper: 'https://www.upessc.up.gov.in/syllabus/6f31864c-e9ce-4e7c-aa44-77924ddc8213.pdf',
  tetPaperPrimary: 'https://www.upessc.up.gov.in/syllabus/69f66f33-27da-4c89-a992-2f7990d08c2d.pdf',
  tetPaperUpper: 'https://www.upessc.up.gov.in/syllabus/09b4e827-eeed-4dc8-88e0-6685f43941b3.pdf',
  atrePrimary2026: 'https://www.upessc.up.gov.in/syllabus/837218cf-1d9a-4252-a08c-404719d1b9d9.pdf',
  atreUpper2026: 'https://www.upessc.up.gov.in/syllabus/621e2105-830c-45fb-a587-d40228a45bb9.pdf',
  tgtPgtGk: 'https://www.upessc.up.gov.in/syllabus/ccd68447-710f-4aff-a8bb-2deefa341c74.pdf',
  tgt2022Archive: 'https://web.archive.org/web/20220608202600/http://www.upsessb.org/content/Advertisement_2022_TGT_Final_Unicode_08_06_2022.pdf',
  pgt2022Archive: 'https://web.archive.org/web/20220608211151/http://www.upsessb.org/content/Advertisement_2022_PGT_Final_Unicode_08_06_2022.pdf',
  atreGo2018: 'https://web.archive.org/web/20181222095737/http://atrexam.upsdc.gov.in:80/EDUMANUAL/2019/GO_01122018.pdf',
}

const UP_TEACHING = {
  slug: 'teaching-posts',
  path: '/government-exams/state/uttar-pradesh/teaching-posts/',
  name: 'Uttar Pradesh Teaching Posts',
  fullName: 'UPTET and teacher recruitment through the Uttar Pradesh Education Service Selection Commission',
  authority: 'Uttar Pradesh Education Service Selection Commission (UPESSC), Prayagraj',
  official: 'upessc.up.gov.in',
  seoTitle: 'UP Teacher Recruitment 2026: UPTET Result, TGT PGT, Super TET Pattern',
  metaDescription:
    'Uttar Pradesh teaching posts — UPTET 2026 with 13.3 lakh passing, the Special TET of 3 November, the TGT and PGT rounds closed, and the 69,000-teacher case.',
  lead: [
    'Uttar Pradesh’s school and college teachers are now recruited through one body. The Education Service Selection Commission, created by an Act of 2023 and operative from August 2024 when the secondary board and the higher education commission were dissolved into it, recruits assistant professors and principals for aided colleges, trained and post-graduate teachers and heads for aided secondary schools, assistant teachers for the basic education board’s schools when the board requisitions, and instructors for the industrial training institutes — and conducts the Teacher Eligibility Test that the Right to Education Act requires for classes 1 to 8.',
    'The commission’s first year has been busy. UPTET returned on 2, 3 and 4 July 2026 after a gap since January 2022, with 19.9 lakh registered and 13.3 lakh passing under a lifetime certificate; a Special TET for serving teachers, ordered by the Supreme Court, is on 3 November. The trained and post-graduate teacher rounds advertised in 2022 for 4,163 posts were finally examined in May and June 2026 and closed in July, with the English cadre held under a writ. Assistant professor posts — 1,936 — opened on 8 September. And the 69,000-post primary recruitment of 2019 has been argued before the Supreme Court, with the next hearing on 16 September.',
  ],
  quickFacts: [
    ['Conducting body', 'Uttar Pradesh Education Service Selection Commission, Prayagraj — since August 2024 for every cadre'],
    ['UPTET 2026', 'Held 2 to 4 July 2026 in five shifts; result 26 August; primary 5,71,435 passed of 7,13,648; upper primary 7,59,513 of 10,57,021; certificates from 7 September'],
    ['Open now', 'Assistant professor Advt 04/2026 — 1,936 posts, applications 8 September to 7 October, exam 19 and 20 November; Special TET Advt 03/2026, fee to 4 October, exam 3 November'],
    ['TGT and PGT 2022', 'PGT 624 posts, final result 7 July 2026; TGT 3,539 posts, final result 28 July for 14 subjects, English withheld under Writ 9799/2026'],
    ['Primary teachers', 'No advertisement; the commission’s 2026 scheme is 120 questions of three marks with one off per wrong answer'],
    ['69,000 case', 'Supreme Court hearing of 8 and 9 September 2026; next date 16 September; no judgment'],
  ],
  overview: [
    {
      type: 'p',
      text: 'UPTET 2026 was the commission’s largest exercise. Advertised on 20 March 2026 with applications from 27 March to 3 May, it was held on 2 and 3 July in two shifts each and 4 July in one, at 955 centres in 60 districts, with 19,94,661 registered. Paper I, for classes 1 to 5, and Paper II, for classes 6 to 8, each carry 150 questions and 150 marks in two and a half hours with no negative marking, normalised across shifts under the commission’s notice of 26 February 2026; the pass is 60 per cent, or 55 for SC, ST, OBC, EWS, PwD, ex-servicemen and freedom fighters’ dependants. The result of 26 August passed 80.07 per cent of the primary and 71.85 per cent of the upper-primary candidates, including 93,387 and 1,13,384 serving teachers; certificates are issued through DigiLocker, and a committee took representations on the result to 10 September.',
    },
    {
      type: 'p',
      text: 'The secondary rounds are the old board’s inheritance. The Secondary Education Service Selection Board advertised 3,539 trained graduate teacher posts in fifteen subjects and 624 post-graduate teacher posts in eighteen on 8 June 2022; the commission examined the PGT candidates — 1,92,934 of 4,64,605 — on 9 and 10 May 2026, shortlisted 2,253 for interview, interviewed them from 15 to 27 June and published the final result on 7 July, with institution allotment on 28 July and a waiting list on 26 August. The TGT test of 3 and 4 June 2026 for 8,68,531 applicants shortlisted at one and a half times for verification from 9 to 17 July and produced its final result on 28 July for fourteen subjects and 2,982 posts; the 557 English posts wait on a writ against the final key, and allotment panels followed on 9 September.',
    },
    {
      type: 'list',
      title: 'The cadres and their examinations',
      items: [
        { text: 'Assistant teacher, primary and upper primary', note: 'the basic education board’s schools; the commission’s published scheme for 2026 is 120 questions of three marks in two hours with one mark off per wrong answer — 360 in all — general knowledge and reasoning, languages, mathematics, science, environmental and social studies, teaching skill, child psychology, ICT and life skills for primary; 30 of general knowledge and 90 in one chosen subject for upper primary. No advertisement yet; a requisition of 11,508 urban posts was reported in August.' },
        { text: 'Trained graduate teacher', note: 'aided secondary schools; the 2022 scheme was one subject paper of 125 questions at four marks, 500 in all, in two hours, no negative marking, selection on the written paper. The commission’s 2026 syllabus adds a general knowledge paper of 30 questions.' },
        { text: 'Post-graduate teacher', note: 'aided intermediate colleges; 125 questions at 3.4 marks for 425, an interview of 50 and a weightage of 25 for Ph.D., M.Ed, B.Ed and national sport — 500.' },
        { text: 'Assistant professor and principal', note: 'aided colleges; Advt 51’s written test of April 2026 after a cancelled 2025 sitting, its interviews stayed by a Supreme Court petition; the principals’ Advt 02/2026 of July; and Advt 04/2026 of 8 September for 1,936 assistant professors, examined on 19 and 20 November.' },
      ],
    },
    {
      type: 'note',
      title: 'The 69,000-post recruitment, seven years on',
      text: 'The assistant teacher recruitment examination of 6 January 2019 for 69,000 posts — 150 questions of a mark in two and a half hours, with a 65 per cent pass, 60 for reserved categories — produced selection lists in June 2020 and January 2022. On 13 August 2024 a division bench of the Allahabad High Court at Lucknow set them aside and ordered a fresh list applying reservation correctly; the Supreme Court stayed that order on 9 September 2024. Through 2025 and 2026 the hearings were adjourned; in May 2026 the court gave the state six weeks to consider appointing the reserved-category candidates it should have; in July the department filed an affidavit naming 8,270 and said 9,500 more could be accommodated without disturbing the 67,000 in service; and on 8 and 9 September 2026 the court heard two days of argument and called for written submissions, with the next date on 16 September. As at 11 September there is no judgment.',
    },
  ],
  stages: [
    {
      name: 'UPTET — eligibility for classes 1 to 8',
      mode: 'Two papers of 150; 60 or 55 per cent; lifetime certificate',
      detail:
        'Paper I for classes 1 to 5, Paper II for 6 to 8, on OMR in Hindi and English, normalised across shifts. ₹1,000 a paper, ₹500 for SC and ST, ₹300 for PwD. Certificates through DigiLocker, valid for life under the order of 16 June 2021.',
    },
    {
      name: 'Advertisement and one-time registration',
      mode: 'The commission’s portal; per cadre and subject',
      detail:
        'Each cadre is advertised with its posts by subject and its own fee; a one-time registration precedes the application. Assistant professor Advt 04/2026 took applications from 8 September to 7 October 2026 with corrections to 11 October.',
    },
    {
      name: 'Written examination',
      mode: 'Subject papers by cadre; normalised where multi-shift',
      detail:
        'TGT one paper of 500; PGT one of 425; assistant teacher 120 questions of three with one off per wrong answer; assistant professor two days of papers. Keys with an objection window, then the result.',
    },
    {
      name: 'Interview, verification, allotment',
      mode: 'Interview for PGT and college posts only',
      detail:
        'TGT is selected on the written paper with verification at one and a half times; PGT adds a 50-mark interview and a 25-mark weightage. Final results by subject and category, then institution allotment and a waiting list under rule 12(8).',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Two windows are open. Assistant professor Advt 04/2026 for 1,936 posts in aided colleges, published 8 September 2026, takes applications to 7 October with corrections to 11 October and is examined on 19 and 20 November. The Special TET, Advt 03/2026 of 3 September, for serving teachers whom the Supreme Court’s orders of 1 September 2025 and 29 May 2026 require to pass by 31 August 2028 and for the special teachers covered by a 2025 writ order, takes applications from 5 September with the fee to 4 October and corrections to 8 October, and is examined on 3 November 2026. UPTET 2026’s certificates have been downloadable since 7 September, and its result committee closed representations on 10 September. The TGT allotment panels of 9 September and the PGT waiting list of 26 August close the 2022 rounds but for English. No advertisement for primary assistant teachers or new TGT and PGT posts has been issued; requisitions for 23,899 aided-school posts were reported received on 21 July.`,
    },
    {
      type: 'table',
      caption: 'UPTET 2026, from the commission’s advertisement, booklet and result notice.',
      head: ['Event', 'Detail'],
      rows: [
        ['Advertisement 01/UPTET/2026', '20 March 2026; corrigendum 24 March admitting in-service teachers under the Supreme Court order and enrolled teacher trainees'],
        ['Applications', '27 March to 26 April, extended to 3 May 2026; corrections to 1 May'],
        ['Examination', '2 and 3 July, two shifts each; 4 July, one shift — 955 centres in 60 districts; admit cards from 30 June'],
        ['Registered', '19,94,661'],
        ['Objections', 'To the questions from 8 July'],
        ['Result', '26 August 2026 — primary 5,71,435 of 7,13,648 passed, 80.07 per cent; upper primary 7,59,513 of 10,57,021, 71.85 per cent'],
        ['Certificates', 'From 7 September 2026 through DigiLocker; representations on the result to 10 September'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2022 TGT and PGT rounds under the commission.',
      head: ['Round', 'Posts', 'Examination', 'Result'],
      rows: [
        ['PGT — Advt 02/2022', '624 in 18 subjects; 4,64,605 applicants', '9 and 10 May 2026 at 319 centres in 17 districts; 1,92,934 appeared', 'Written result 2 June, 2,253 to interview; interviews 15 to 27 June; final result 7 July 2026; allotment 28 July; waiting list 26 August'],
        ['TGT — Advt 01/2022', '3,539 in 15 subjects; 8,68,531 applicants', '3 and 4 June 2026 at 614 centres in 36 districts', 'Written result 30 June at one and a half times; verification 9 to 17 July; final result 28 July for 14 subjects and 2,982 posts; English 557 withheld under Writ 9799/2026; revised results 23 and 26 August; allotment panels 9 September'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'UPESSC — home', href: UPESSC.home },
        { label: 'UPESSC — advertisements', href: UPESSC.advertisements },
        { label: 'UPESSC — news and notices', href: UPESSC.news },
        { label: 'Assistant professor Advt 04/2026 — 8 September 2026', href: UPESSC.apAdvt2026 },
        { label: 'Special TET Advt 03/2026 — detailed advertisement', href: UPESSC.specialTet },
        { label: 'UPTET 2026 — result notice, 26 August 2026', href: UPESSC.tetResult },
        { label: 'UPESSC — results portal', href: UPESSC.results },
        { label: 'UPESSC — application portal', href: UPESSC.apply },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'UPTET 2026, from the information booklet — the NCTE norms as the commission applies them.',
      head: ['Paper', 'Qualification'],
      rows: [
        ['Paper I — classes 1 to 5', 'Graduation and a two-year D.El.Ed or BTC, final year or passed; or 50 per cent at intermediate and a four-year B.El.Ed; or a B.Ed under the NCTE notification of 28 June 2018 with the bridge course; special-education routes through the RCI. Enrolled teacher trainees admitted under the Supreme Court’s order in CA 5564/2019.'],
        ['Paper II — classes 6 to 8', 'Graduation and D.El.Ed; or 50 per cent at graduation or post-graduation and a B.Ed; 45 per cent and a B.Ed under the NCTE regulations; or a four-year B.A.B.Ed or B.Sc.B.Ed.'],
        ['In-service teachers', 'Admitted under the corrigendum of 24 March 2026 following the Supreme Court’s order of 1 September 2025 in CA 1385/2025.'],
        ['Fee', '₹1,000 a paper for unreserved, EWS and OBC; ₹500 for SC and ST; ₹300 for PwD.'],
        ['Pass and validity', '60 per cent — 90 of 150; 55 per cent — 82 — for SC, ST, OBC, EWS, freedom fighters’ dependants, ex-servicemen and PwD. Lifetime validity under the order of 16 June 2021.'],
      ],
    },
    {
      type: 'table',
      caption: 'TGT and PGT, from the 2022 advertisements.',
      head: ['Requirement', 'TGT', 'PGT'],
      rows: [
        ['Qualification', 'A degree in the subject and B.Ed — for Hindi, a BA with Hindi and Sanskrit, or intermediate Sanskrit; for mathematics, a BA or BSc in mathematics — with M.Ed, Ph.D. and national sport as preferential', 'A postgraduate degree in the subject, with B.Ed preferential'],
        ['Age', '21 minimum on 1 July 2022', '21 minimum'],
        ['Fee', '₹750 for unreserved and OBC — ₹700 plus ₹50; EWS and SC ₹450; ST ₹250', '₹750; EWS ₹650; SC ₹450; ST ₹250'],
      ],
    },
    {
      type: 'p',
      text: 'The 2019 assistant teacher recruitment required age 21 to 40 on 1 July 2018 with five years for SC, ST and OBC and fifteen for PwD, and Uttar Pradesh domicile or five years’ residence. The commission’s 2026 scheme documents for the primary and upper-primary posts set the paper but not yet the eligibility, which will come with the advertisement.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'UPTET, from the information booklet. Each paper 150 questions, 150 marks, 150 minutes, one mark a question, no negative marking, Hindi and English.',
      head: ['Section', 'Paper I — classes 1 to 5', 'Paper II — classes 6 to 8'],
      rows: [
        ['Child development and pedagogy', '30', '30'],
        ['Language I — Hindi', '30', '30'],
        ['Language II — English, Urdu or Sanskrit', '30', '30'],
        ['Mathematics', '30', 'Mathematics and science 60 — or'],
        ['Environmental studies', '30', 'Social studies 60'],
      ],
    },
    {
      type: 'table',
      caption: 'The commission’s published scheme for the 2026 assistant teacher recruitment. Two hours, 120 questions of three marks, one mark deducted per wrong answer, bilingual.',
      head: ['Primary, classes 1 to 5', 'Questions', 'Upper primary, classes 6 to 8', 'Questions'],
      rows: [
        ['General knowledge and current affairs', '25', 'Part 1 — general knowledge, compulsory', '30'],
        ['Reasoning', '5', 'Part 2 — one subject: language (Sanskrit, Hindi, English), social studies, or science and mathematics', '90'],
        ['Hindi, Sanskrit and English', '30', '', ''],
        ['Science', '8', '', ''],
        ['Mathematics', '16', '', ''],
        ['Environmental and social studies', '8', '', ''],
        ['Teaching skill', '8', '', ''],
        ['Child psychology', '8', '', ''],
        ['ICT', '4', '', ''],
        ['Life skills, management and attitude', '8', '', ''],
        ['Total', '120 — 360 marks', 'Total', '120 — 360 marks'],
      ],
    },
    {
      type: 'table',
      caption: 'TGT and PGT, from the 2022 advertisements as executed in 2026.',
      head: ['Cadre', 'Written', 'Interview and weightage', 'Total'],
      rows: [
        ['TGT', '125 questions at 4 marks, 500, two hours, OMR; no negative marking; language papers in the language', 'None — selection on the written paper; verification at one and a half times', '500'],
        ['PGT', '125 questions at 3.4 marks, 425, two hours; no negative marking', 'Interview 50; weightage 25 — Ph.D. 2 per cent, M.Ed 2, B.Ed 1 if M.Ed not counted, national sport 1', '500'],
      ],
    },
    {
      type: 'note',
      title: 'What is settled and what is not',
      text: 'UPTET’s scheme, pass marks, normalisation and lifetime validity are in the 2026 booklet. The assistant teacher scheme of 120 questions at three marks with negative marking is the commission’s published structure for the 2026 recruitment, superseding the 2019 scheme of 150 questions at one mark — but no advertisement has applied it yet. The commission’s syllabus for examinations from 2026 adds a general knowledge paper of 30 questions to TGT and PGT; whether the totals change for the next advertisement is not stated in any scheme document found.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s UPTET 2026 advertisement, booklet, corrigenda, schedule, objection and result notices, the certificate notice of 7 September, the Special TET and assistant professor advertisements of September 2026, the 2026 examination calendar, the PGT and TGT examination, result, cut-off and allotment notices, the 2026 syllabus and scheme documents on the commission’s syllabus page, and the commission’s statement of its functions; the 2022 TGT and PGT advertisements and the 2018 government order for the 69,000 recruitment in the web archive; and the examination regulator’s 2021 and 2022 UPTET notices. The 69,000 case’s course, the requisition figures and the count of rejected OMRs are from press reports of the hearings and the department’s statements.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'UPTET 2026 — advertisement, 20 March 2026', href: UPESSC.tetVigyapti },
        { label: 'UPTET 2026 — information booklet', href: UPESSC.tetBooklet },
        { label: 'UPTET 2026 — result notice, 26 August 2026', href: UPESSC.tetResult },
        { label: 'UPTET 2026 — certificate notice, 7 September 2026', href: UPESSC.tetCertificates },
        { label: 'Special TET 03/2026 — detailed advertisement', href: UPESSC.specialTet },
        { label: 'Assistant professor 04/2026 — advertisement', href: UPESSC.apAdvt2026 },
        { label: 'Examination calendar, 20 January 2026', href: UPESSC.calendar2026 },
        { label: 'PGT 2022 — final result, 7 July 2026', href: UPESSC.pgtFinal },
        { label: 'TGT 2022 — final result, 28 July 2026', href: UPESSC.tgtFinal },
        { label: 'TGT 2022 — cut-offs', href: UPESSC.tgtCutoffs },
        { label: 'TGT 2022 advertisement — archived', href: UPESSC.tgt2022Archive },
        { label: 'PGT 2022 advertisement — archived', href: UPESSC.pgt2022Archive },
        { label: 'Government order of 1 December 2018 — the 69,000 recruitment, archived', href: UPESSC.atreGo2018 },
        { label: 'UPESSC — functions', href: UPESSC.intro },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Uttar Pradesh teaching posts syllabus — UPTET primary and upper primary, the 2026 assistant teacher scheme, and the TGT and PGT subject syllabi.',
      lead: [
        'The commission publishes its syllabi as PDFs on one page — UPTET, the assistant teacher structures, and TGT and PGT by subject with the general knowledge paper for examinations from 2026.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'UPTET Paper I',
              'Child development and pedagogy; Hindi; English, Urdu or Sanskrit; mathematics; environmental studies — thirty questions each at the level of classes 1 to 5 with pedagogy.',
            ],
            [
              'UPTET Paper II',
              'Child development and pedagogy; Hindi; a second language; and mathematics and science or social studies for sixty, at the level of classes 6 to 8.',
            ],
            [
              'Assistant teacher 2026 — primary',
              'General knowledge and current affairs, reasoning, Hindi, Sanskrit and English, science, mathematics, environmental and social studies, teaching skill, child psychology, ICT, and life skills, management and attitude.',
            ],
            [
              'Assistant teacher 2026 — upper primary',
              'General knowledge for thirty, and ninety in one subject — a language, social studies, or science and mathematics.',
            ],
            [
              'TGT and PGT',
              'The subject at graduate or postgraduate level, by the commission’s subject syllabus; and, for examinations from 2026, a general knowledge paper of thirty questions.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'UPESSC — all syllabi', href: UPESSC.syllabus },
            { label: 'UPTET — primary syllabus', href: UPESSC.tetSyllabusPrimary },
            { label: 'UPTET — upper primary syllabus', href: UPESSC.tetSyllabusUpper },
            { label: 'Assistant teacher 2026 — primary structure', href: UPESSC.atrePrimary2026 },
            { label: 'Assistant teacher 2026 — upper primary structure', href: UPESSC.atreUpper2026 },
            { label: 'TGT and PGT — general knowledge paper', href: UPESSC.tgtPgtGk },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Uttar Pradesh teaching posts exam pattern — UPTET 150 questions without penalty, assistant teacher 120 at three marks with one off, TGT 500, PGT 425.',
      lead: [
        'Four schemes for four cadres, from a pass mark to a negatively marked ranking.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Cadre', 'Rule'],
          rows: [
            ['UPTET', '150 questions, 150 marks, 150 minutes, no penalty; 60 or 55 per cent; normalised; lifetime certificate.'],
            ['Assistant teacher, 2026 scheme', '120 questions at three marks, two hours, one mark off per wrong answer; 30 general and 90 subject for upper primary.'],
            ['TGT', '125 questions at four marks, 500, two hours, no penalty; written only.'],
            ['PGT', '125 questions at 3.4 marks, 425; interview 50; weightage 25.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Uttar Pradesh teaching posts previous papers — the commission’s UPTET and assistant teacher papers, the 2021 keys, and the TGT and PGT booklets.',
      lead: [
        'The commission’s syllabus page carries previous UPTET and assistant teacher papers; its booklet page the older TGT and PGT papers.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'UPTET previous papers', note: 'primary and upper primary papers on the commission’s syllabus page; the 2021 final keys of 7 April 2022 on the regulator’s site.' },
            { text: 'Assistant teacher recruitment examination', note: 'the 2019 papers for classes 1 to 5 and 6 to 8, on the same page.' },
            { text: 'TGT and PGT', note: 'the 2016 and 2021 papers on the booklet page; the 2026 papers only inside the objection portals.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'UPTET — primary previous paper', href: UPESSC.tetPaperPrimary },
            { label: 'UPTET — upper primary previous paper', href: UPESSC.tetPaperUpper },
            { label: 'UPESSC — booklets and previous papers', href: UPESSC.booklets },
            { label: 'State TET guides', to: '/government-exams/teaching-net/state-tet/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Uttar Pradesh teaching posts mock tests — 150-question TET sittings, 120-question assistant teacher sittings scored at minus one, and TGT and PGT papers.',
      lead: [
        'The TET rewards attempting everything; the assistant teacher paper punishes it.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by cadre',
          items: [
            { title: 'UPTET — 150 in 150 minutes', text: 'No penalty: attempt every question. Ninety to pass, or 82 for the relaxed categories; the 2026 primary paper passed four in five.' },
            { title: 'Assistant teacher — 120 in 120 minutes', text: 'Three marks a question and one off for a wrong answer: a wrong guess costs a third of a right one. Score the mock to 360.' },
            { title: 'TGT — 125 in two hours', text: 'Four marks a question, no penalty, the subject alone; the 2026 cut-offs by subject and category are published.' },
            { title: 'PGT — 125 in two hours, then the interview', text: 'At 3.4 marks; the 2026 round called 2,253 for 624 posts.' },
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
        'Uttar Pradesh teaching posts preparation — the open assistant professor and Special TET windows, a lifetime TET, and the new assistant teacher scheme.',
      lead: [
        'Two windows are open; the primary advertisement is the one everyone is waiting for.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From qualification to appointment',
          items: [
            { title: 'Download the UPTET certificate', text: 'Through DigiLocker from 7 September 2026; it is valid for life and required at self-certification for classes 1 to 8.' },
            { title: 'Apply for what is open', text: 'Assistant professor Advt 04/2026 to 7 October, examined 19 and 20 November; the Special TET to 4 October for serving teachers, examined 3 November.' },
            { title: 'Prepare the 2026 assistant teacher scheme now', text: 'The commission has published the structure — 120 questions at three marks with one off — before the advertisement; the requisition is reported and the syllabus is up.' },
            { title: 'Watch the advertisements page by cadre', text: 'The commission loads its lists by script; the advertisements and news pages are the entries, and every notice has its own PDF address.' },
            { title: 'Expect litigation to shape the lists', text: 'TGT English is held under a writ; the assistant professor interviews are stayed by a Supreme Court petition; the 69,000 case is seven years old.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Uttar Pradesh teaching posts study material — the D.El.Ed and B.Ed pedagogy course, state textbooks for classes 1 to 8, and subject texts for TGT and PGT.',
      lead: [
        'The TET and the assistant teacher paper are set on the training course and the school textbooks; TGT and PGT on the degree.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By cadre.',
          head: ['Cadre', 'What to read', 'Note'],
          rows: [
            ['UPTET', 'The D.El.Ed or B.Ed psychology and pedagogy papers; Hindi and the second language with pedagogy; the state textbooks for classes 1 to 8', 'Thirty questions a section.'],
            ['Assistant teacher', 'The above, plus general knowledge and current affairs, reasoning, ICT and the life-skills and attitude heads of the 2026 structure', 'Thirty of the 120 are general knowledge and reasoning in the primary paper.'],
            ['TGT', 'The subject at graduate level by the commission’s syllabus; the new general knowledge paper', 'Four marks a question.'],
            ['PGT', 'The subject at postgraduate level; interview preparation on the subject and teaching', 'Interview 50, weightage 25.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Teaching exam preparation', to: '/government-exams/teaching-net/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'What was the UPTET 2026 result?',
      a: 'Published on 26 August 2026 for the test of 2 to 4 July: of 7,13,648 who sat the primary paper, 5,71,435 passed — 80.07 per cent — and of 10,57,021 who sat the upper primary paper, 7,59,513 passed — 71.85 per cent — including 93,387 and 1,13,384 serving teachers. 19,94,661 had registered. Certificates, valid for life, have been downloadable through DigiLocker since 7 September, and a committee took representations on the result to 10 September.',
    },
    {
      q: 'What is the UPTET exam pattern and pass mark?',
      a: 'Two papers of 150 questions and 150 marks in 150 minutes, one mark a question, no negative marking, in Hindi and English, normalised across shifts. Paper I for classes 1 to 5: child development and pedagogy, Hindi, a second language, mathematics and environmental studies at 30 each. Paper II for classes 6 to 8: the same first three and mathematics and science or social studies for 60. The pass is 60 per cent, or 55 for SC, ST, OBC, EWS, PwD, ex-servicemen and freedom fighters’ dependants.',
    },
    {
      q: 'Who conducts teacher recruitment in Uttar Pradesh now?',
      a: 'The Uttar Pradesh Education Service Selection Commission at Prayagraj, created by Act 15 of 2023 and operative for every cadre from 8 August 2024, when the Secondary Education Service Selection Board and the Higher Education Service Commission were dissolved into it. It conducts UPTET, and recruits assistant professors and principals for aided colleges, TGT, PGT and heads for aided secondary schools, assistant teachers for the basic education board’s schools on requisition, and ITI instructors.',
    },
    {
      q: 'Is there a new primary teacher recruitment in Uttar Pradesh?',
      a: 'Not advertised as at 11 September 2026. The commission has published the structure of the 2026 assistant teacher recruitment examination — 120 questions of three marks in two hours with one mark deducted per wrong answer, for classes 1 to 5 and 6 to 8 — and a requisition of 11,508 urban posts was reported in August, with some 60,000 posts said to be vacant. The advertisement will set the eligibility and dates.',
    },
    {
      q: 'What happened to the UP TGT PGT 2022 recruitment?',
      a: 'The commission examined the PGT round — 624 posts, 1,92,934 candidates — on 9 and 10 May 2026, interviewed 2,253 from 15 to 27 June and published the final result on 7 July, with allotment on 28 July and a waiting list on 26 August. The TGT round — 3,539 posts, 8,68,531 applicants — was examined on 3 and 4 June, verified from 9 to 17 July and finalised on 28 July for fourteen subjects and 2,982 posts; the 557 English posts are held under a writ against the final key, and allotment panels followed on 9 September.',
    },
    {
      q: 'What is the TGT and PGT exam pattern?',
      a: 'Under the 2022 advertisements as executed in 2026: TGT one subject paper of 125 questions at four marks, 500 in all, in two hours, no negative marking, selection on the written paper alone; PGT 125 questions at 3.4 marks for 425, an interview of 50 and a weightage of 25 for Ph.D., M.Ed, B.Ed and national sport — 500. The commission’s syllabus for examinations from 2026 adds a general knowledge paper of 30 questions to both.',
    },
    {
      q: 'What is the status of the 69,000 teacher recruitment case?',
      a: 'Before the Supreme Court, without judgment. The Allahabad High Court’s Lucknow bench set aside the 2020 and 2022 selection lists on 13 August 2024 and ordered a fresh list applying reservation correctly; the Supreme Court stayed that on 9 September 2024. After adjournments through 2025 and 2026, the state filed an affidavit in July 2026 naming 8,270 candidates and saying 9,500 more could be accommodated without disturbing the 67,000 in service; the court heard argument on 8 and 9 September 2026, called for written submissions, and fixed 16 September.',
    },
    {
      q: 'Which teaching windows are open in Uttar Pradesh now?',
      a: 'Two. Assistant professor Advt 04/2026 — 1,936 posts in aided colleges — takes applications from 8 September to 7 October 2026 for an examination on 19 and 20 November. The Special TET, Advt 03/2026, for serving teachers required by the Supreme Court to pass by 31 August 2028 and for special teachers under a 2025 writ order, takes applications from 5 September with the fee to 4 October, for an examination on 3 November.',
    },
  ],
}

/* ── Uttar Pradesh technical posts ──────────────────────────────
   Assistant engineers through UPPSC's combined state engineering services
   — a preliminary, a two-paper mains and an interview — and junior
   engineers through UPSSSC on the PET shortlist. The 2024 assistant
   engineer round is held up by a special appeal after its September 2025
   mains; the 4,612-post junior engineer civil round awaits its result;
   junior engineer agriculture opens on 17 September. UPPCL has moved its
   assistant engineers to GATE and advertised nothing since 2022. */
const UP_TECH_SRC = {
  aeAdvtMirror: 'https://doc.sarkariresults.org.in/UPPSC_AE_Notification_English_SarkariResult_Com.pdf',
  aePreResultMirror: 'https://doc.sarkariresults.org.in/UPPSC_AE_Pre_Exam_Result_2025.pdf',
  aeKeyMirror: 'https://doc.sarkariresults.org.in/UPPSC_Combined_AE_AnswerKey_QuestionPaper.pdf',
  jeAdvtMirror: 'https://www.sarkariresults.org.in/wp-content/uploads/2024/03/sarkariresult.com-upsssc-junior-engineer-notification-08exam-2024.pdf',
  jeSchemeMirror: 'https://doc.sarkariresults.org.in/UPSSSC_JE_Syllabus_Advt_08-Exam-2024.pdf',
  jeShortlistMirror: 'https://doc.sarkariresults.org.in/UPSSSC_08Exam2024_Eligibility_Result.pdf',
  jeDateMirror: 'https://doc.sarkariresults.org.in/UPSSSC_Exam_Date_JE_072026.pdf',
  jeAgri2026: 'https://upsssc.gov.in/ViewPdf.aspx?HnWf3AX1TPcbZWvpTaJvREO3S7UAQjKO5DMOPRjzZ3I=',
  uppclVacancies: 'https://www.uppcl.org/uppcl/en/page/vacancy-results',
  uppclGateNotice: 'https://www.uppcl.org/site/writereaddata/siteContent/202409152350160809658_VSA_13092024%20r.pdf',
  uppclAe2022: 'https://www.uppcl.org/site/writereaddata/siteContent/20220105173729783801VSA_050122.pdf',
  uppclJe2022: 'https://www.uppcl.org/site/writereaddata/siteContent/202203171237383121705_170322.pdf',
  uppclTech2022: 'https://www.uppcl.org/site/writereaddata/siteContent/2022091614414570311927_VSA_16092022.pdf',
  uprvunlOm: 'https://www.uprvunl.org/sites/default/files/Circulars/O.M.%20No.%20271%20Dt.%2030-12-2024.pdf',
  uprvunlNotices: 'https://www.uprvunl.org/recruitment-notices',
}

const UP_TECHNICAL = {
  slug: 'technical-posts',
  path: '/government-exams/state/uttar-pradesh/technical-posts/',
  name: 'Uttar Pradesh Technical Posts',
  fullName: 'UPPSC Combined State Engineering Services, UPSSSC junior engineer and UPPCL engineer recruitment',
  authority: 'Uttar Pradesh Public Service Commission; Uttar Pradesh Subordinate Services Selection Commission; Uttar Pradesh Power Corporation',
  official: OFFICIAL,
  seoTitle: 'UP Assistant & Junior Engineer 2026: UPPSC AE, UPSSSC JE, UPPCL Status',
  metaDescription:
    'Uttar Pradesh engineering posts — UPPSC’s 604-post AE round stayed after its 2025 mains, UPSSSC’s 4,612-post JE civil result awaited, JE agriculture opening.',
  lead: [
    'Uttar Pradesh recruits its engineers at two levels through two commissions. The Public Service Commission fills the assistant engineer posts of the public works, irrigation, rural engineering and development-authority services and the Jal Nigam through the Combined State Engineering Services examination — a preliminary of 300 marks, a mains of two 375-mark papers and an interview of 100. The Subordinate Services Selection Commission fills the junior engineer posts on the PET shortlist through a single 100-mark paper with 65 marks of the discipline. The Power Corporation, which recruited its own engineers until 2022, has said its assistant engineers will come through GATE and has advertised none since.',
    'Both current rounds are the largest in years and both are stalled. The commission’s assistant engineer round of December 2024 — 604 posts, 226 of them civil engineers for the public works department — held its preliminary in April 2025 and its mains on 28 and 29 September 2025 under a High Court stay whose special appeal has not been decided; no result has followed. The subordinate commission’s junior engineer civil round of March 2024 — 4,612 posts after three corrigenda — shortlisted 26,205 in April 2026, examined them on 3 May and published its final key in July; the result is awaited. Junior engineer agriculture, 134 posts, opens on 17 September.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'UPPSC for assistant engineers; UPSSSC for junior engineers; UPPCL and UPRVUNL for the power sector'],
    ['Open from 17 September', 'UPSSSC junior engineer agriculture, Advt 19-Exam/2026 — 134 posts; applications to 7 October; PET 2025 score'],
    ['UPPSC AE 2024', 'Advt A-9/E-1/2024 — 604 posts; prelims 20 April 2025, 7,358 through; mains 28 and 29 September 2025 under stay; result withheld'],
    ['UPSSSC JE civil 2024', 'Advt 08-Exam/2024 — 4,612 posts; 26,205 shortlisted 1 April 2026; exam 3 May; final key 20 July; result awaited'],
    ['Schemes', 'AE: prelims 300, mains 375 and 375, interview 100, one-third off. JE: 100 marks, 65 discipline, 15 computer, 20 Uttar Pradesh, a quarter off'],
    ['UPPCL', 'No JE, AE or technician advertisement since 2022; assistant engineers to be recruited on GATE scores by the notice of 13 September 2024'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The commission’s advertisement of 17 December 2024 distributed its 582 general posts across the departments: 226 assistant engineers civil for the public works department, 107 civil and 14 electrical and mechanical for the rural Jal Nigam, 77 mechanical for the irrigation department and 20 civil for its directorate with 22 more in special recruitment, 65 civil for rural engineering, 40 civil and 8 electrical and mechanical for the development authorities, 12 for the agriculture service’s engineering branch, 7 assistant directors electrical for the energy department and 6 civil for medical health. Applications ran to 17 January 2025 at ₹125, or ₹65 for SC and ST, for candidates aged 21 to 40 on 1 July 2024 with the engineering degree the post’s rules name.',
    },
    {
      type: 'p',
      text: 'The scheme is three-stage. The preliminary is one objective paper of 150 questions and 300 marks in two hours — general knowledge 25, general Hindi 25 and engineering aptitude 100 — that qualifies fifteen candidates per post; the mains is two objective papers of two and a half hours, each of 375 marks — general Hindi with the discipline’s first paper, and general studies with its second, at three marks a question; the interview is 100, for a total of 850. One-third of the question’s marks is deducted for a wrong answer at both stages, and the minimum efficiency standard of 40 per cent, or 35 for SC and ST, applies. The preliminary of 20 April 2025 was sat by 31,639 of 78,798 applicants and its result of 26 May 2025 qualified 7,358 for 609 posts, subject to the women’s reservation appeal of 2019.',
    },
    {
      type: 'list',
      title: 'What stopped the assistant engineer round',
      items: [
        { text: 'A single judge’s order of 25 September 2025', note: 'in Rajat Maurya and others, directing the commission to redraw the preliminary result so that reserved-category candidates above the unreserved cut-off went to the open list, making the shortlist 9,135 rather than 7,358, before any mains.' },
        { text: 'A division bench stay of 26 September', note: 'allowing the mains of 28 and 29 September to proceed on condition that the result stayed unpublished until the appeal was heard.' },
        { text: 'No result since', note: 'the commission’s home page and its 2026 calendar carry no assistant engineer item; a coaching-site account of a January 2026 RTI reply says the process is on hold and that requisitions for a new round were being corrected. The 2026 calendar does list a research assistant (engineering) examination on 8 September and the assistant architect screening on 17 December.' },
      ],
    },
    {
      type: 'note',
      title: 'The power corporation has left the field',
      text: 'UPPCL’s vacancy page carries no junior engineer, assistant engineer or technician advertisement of 2025 or 2026; its notice of 13 September 2024 said future assistant engineer recruitment in the corporation and its companies would be on the GATE 2025 score, and the generation company adopted the same by office memorandum of 30 December 2024. No GATE-based advertisement has followed. The last advertisements — 113 assistant engineers in January 2022, 25 junior engineers civil in March 2022 and 891 technicians in September 2022 — were computer-based tests with a quarter mark off per wrong answer, and press claims of 600 posts in 2026 rest on an engineers’ association letter, not a notice.',
    },
  ],
  stages: [
    {
      name: 'UPPSC — preliminary',
      mode: '150 questions, 300 marks, two hours, OMR',
      detail:
        'General knowledge 25, general Hindi 25, engineering aptitude 100, at two marks a question; one-third off per wrong answer; qualifying, with fifteen candidates per post shortlisted. The 2024 round’s preliminary was on 20 April 2025.',
    },
    {
      name: 'UPPSC — mains',
      mode: 'Two papers of 375, two and a half hours each',
      detail:
        'Paper I: general Hindi 25 questions and the discipline’s first paper 100 questions, at three marks. Paper II: general studies 25 and the discipline’s second paper 100. One-third off per wrong answer. Held 28 and 29 September 2025 under the stay.',
    },
    {
      name: 'UPPSC — interview and final result',
      mode: '100 marks; merit on 850',
      detail:
        'A personality test after the mains result, then the final list by preference across the departments. The 2024 round has not reached it.',
    },
    {
      name: 'UPSSSC — PET shortlist, one paper, verification',
      mode: '100 marks, two hours; fifteen per post on the PET',
      detail:
        'The discipline for 65 across its topics, computer and information technology for 15, Uttar Pradesh for 20; a quarter off per wrong answer; no interview. The 2024 civil round shortlisted 26,205 on PET 2023 and examined them on 3 May 2026; the agriculture round of 2026 shortlists on PET 2025.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. One window opens this month: the subordinate commission’s junior engineer agriculture advertisement 19-Exam/2026 of 14 August 2026 for 134 posts in the agriculture directorate takes applications from 17 September to 7 October with corrections to 14 October, on PET 2025, at ₹25; its examination date is to be announced. The commission’s assistant engineer round stands where the division bench left it in September 2025 — mains held, result withheld — with nothing on the commission’s home page or 2026 calendar. The junior engineer civil round’s result had not appeared on the subordinate commission’s notice board at the date checked, after its examination of 3 May 2026 and final key of 20 July; the High Court’s orders of 10 December 2025 and 12 January 2026 excluded degree holders from its shortlist. UPPCL and UPRVUNL have no external engineer recruitment; UPRVUNL ran a departmental promotion to junior engineer in February 2026.`,
    },
    {
      type: 'table',
      caption: 'The rounds, from the advertisements and notices.',
      head: ['Round', 'Posts', 'Applications', 'Examination', 'Position at 11 September 2026'],
      rows: [
        ['UPSSSC — JE agriculture, 19-Exam/2026', '134 — unreserved 54, SC 23, ST 1, OBC 43, EWS 13', '17 September to 7 October 2026; corrections to 14 October', 'To be announced', 'Opening'],
        ['UPSSSC — JE civil, 08-Exam/2024', '2,847 advertised; 4,612 after corrigenda of March and June 2024', '7 May to 13 July 2024 after extension; degree holders admitted provisionally under a Supreme Court interim order, later excluded', '3 May 2026, 10 to 12; key 4 May; final key 20 July', 'Result awaited'],
        ['UPPSC — AE, A-9/E-1/2024', '604 — 582 general, 22 special; 609 at the preliminary result', '17 December 2024 to 17 January 2025', 'Prelims 20 April 2025, 7,358 through; mains 28 and 29 September 2025', 'Result withheld pending the special appeal'],
        ['UPPCL — AE, JE, technician', 'None since 2022', '—', '—', 'Assistant engineers to come through GATE; no advertisement'],
      ],
    },
    {
      type: 'table',
      caption: 'UPPSC assistant engineer 2024 — posts by department, from Appendix 5 of the advertisement.',
      head: ['Department and post', 'Posts'],
      rows: [
        ['Public works department — AE civil', '226'],
        ['Jal Nigam, rural — AE civil', '107'],
        ['Irrigation and water resources — AE mechanical', '77'],
        ['Rural engineering — AE civil', '65'],
        ['Development authorities — AE civil', '40'],
        ['Irrigation directorate — AE civil, general and special', '20 and 22'],
        ['Jal Nigam, rural — AE electrical and mechanical', '14'],
        ['Agriculture service, engineering branch', '12'],
        ['Development authorities — AE electrical and mechanical', '8'],
        ['Energy department — assistant director electrical', '7'],
        ['Medical health — AE civil', '6'],
      ],
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'UPSSSC — all notifications', href: UPSSSC.notifications },
        { label: 'UPSSSC — JE agriculture advertisement, 14 August 2026', href: UP_TECH_SRC.jeAgri2026 },
        { label: 'UPPSC — notifications', href: UPPSC.notifications },
        { label: 'UPPSC — examination calendar 2026', href: UPPSC.calendar2026 },
        { label: 'UPPCL — vacancies and results', href: UP_TECH_SRC.uppclVacancies },
        { label: 'UPRVUNL — recruitment notices', href: UP_TECH_SRC.uprvunlNotices },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the advertisements. Age on 1 July of the advertisement year.',
      head: ['Requirement', 'UPPSC assistant engineer', 'UPSSSC junior engineer'],
      rows: [
        ['Qualification', 'A degree in the discipline — civil, mechanical, electrical or agricultural engineering — or AMIE, as each post’s service rules name', 'A three-year diploma in the discipline from the state board of technical education or an AICTE-approved equivalent — civil for the 2024 round; agricultural engineering for the 2026 round. Degree holders were excluded from the 2024 civil round by the High Court'],
        ['Age', '21 to 40 — born 2 July 1984 to 1 July 2003 for the 2024 round; five years for SC, ST and OBC of the state', '18 to 40 under the public works and rural engineering rules; 21 to 40 under the Jal Nigam rules; 18 to 40 for agriculture'],
        ['Fee', '₹125 — ₹100 and ₹25 processing; ₹65 for SC and ST and ex-servicemen; ₹25 for PwD', '₹25 processing; the mains fee for the shortlisted'],
        ['PET', '—', 'PET 2023 for the 2024 round; PET 2025 for agriculture; positive score required'],
        ['Preference', '—', 'Two years’ Territorial Army service or an NCC B certificate'],
        ['Pay', 'Level 10', 'Level 6, ₹9,300 to ₹34,800 with grade pay ₹4,200, for agriculture'],
      ],
    },
    {
      type: 'table',
      caption: 'UPPCL’s last schemes, from the 2022 advertisements — the pattern any GATE-based round would replace.',
      head: ['Post', 'Qualification and age', 'Test', 'Fee'],
      rows: [
        ['Assistant engineer trainee — 113, January 2022', 'A degree in the discipline; 21 to 40 on 1 January 2022', 'Computer-based: 75 per cent engineering, 10 general knowledge, 10 reasoning, 5 Hindi; a quarter off; 30 per cent floor; two per post to interview', '—'],
        ['Junior engineer trainee civil — 25, March 2022', 'A three-year diploma, not by distance; 18 to 40', 'Computer-based, 200 questions in three hours — 150 discipline, 20 general awareness, 20 reasoning, 10 Hindi; a quarter off; 30 per cent floor; no interview', '₹1,180; ₹826 SC of the state; ₹12 PwD'],
        ['Technician electrical — 891, September 2022', 'High school with science and mathematics and a two-year ITI in the electrical trades; 18 to 40', 'Part 1 computer knowledge 50, qualifying at 20; Part 2 200 — technical 150, Hindi 15, English 15, general studies and reasoning 20; a quarter off; 33.5 per cent', '₹1,180; ₹826'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'UPPSC Combined State Engineering Services, from Appendices 2 and 3 of the 2024 advertisement.',
      head: ['Stage', 'Paper', 'Questions', 'Marks', 'Time'],
      rows: [
        ['Preliminary', 'General knowledge 25; general Hindi 25; engineering aptitude 100', '150', '300', '2 hours'],
        ['Mains Paper I', 'General Hindi 25; discipline paper I 100', '125', '375', '2½ hours'],
        ['Mains Paper II', 'General studies 25; discipline paper II 100', '125', '375', '2½ hours'],
        ['Interview', 'Personality test', '—', '100', '—'],
        ['Total', '—', '—', '850', 'One-third of the question’s marks off per wrong answer at both stages; 40 per cent standard, 35 for SC and ST; fifteen per post from the preliminary'],
      ],
    },
    {
      type: 'table',
      caption: 'UPSSSC junior engineer civil, from the scheme of 11 September 2024. 100 questions, 100 marks, two hours; a quarter mark off per wrong answer.',
      head: ['Part', 'Topics', 'Marks'],
      rows: [
        ['1 — civil engineering', 'Strength of materials and structures 5; RCC design 10; steel and masonry 5; estimating, costing and valuation 5; soil mechanics and foundations 5; surveying 5; transportation 5; environmental and public health 5; building materials and construction 10; irrigation 5; fluid mechanics 5', '65'],
        ['2 — computer and IT', 'Concepts and contemporary technological development', '15'],
        ['3 — Uttar Pradesh', 'General knowledge of the state', '20'],
      ],
    },
    {
      type: 'note',
      title: 'The agriculture paper of 2026',
      text: 'Under the scheme of 30 June 2026, the junior engineer agriculture paper has the same shape — 100 questions, two hours, a quarter off — with thirteen agricultural engineering topics of five marks each: farm power and non-conventional energy, the internal combustion engine, the tractor, biogas, wind and solar energy, post-harvest and agro-industries, farm and land development machinery, irrigation and drainage, water requirement of crops, irrigation methods and minor irrigation, soil and water conservation, and land reclamation and rehabilitation. Selection is on the written paper; there is no interview.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the subordinate commission’s junior engineer agriculture advertisement of 14 August 2026 and its notice board and calendar; its junior engineer civil advertisement, scheme, extension, shortlist and date notices read from mirrors of its PDFs after de-listing; the Public Service Commission’s assistant engineer advertisement and preliminary result read from mirrors, its live notifications page and 2026 calendar; the power corporation’s vacancy page, its GATE notice of September 2024 and its 2022 advertisements; and the generation company’s office memorandum and notices. The single judge’s and division bench’s orders of September 2025 are from press reports; the coaching-site account of the round being on hold is marked as such.`,
    },
    {
      type: 'links',
      title: 'Official documents and mirrors',
      items: [
        { label: 'UPSSSC — JE agriculture advertisement 19-Exam/2026', href: UP_TECH_SRC.jeAgri2026 },
        { label: 'UPSSSC — JE civil advertisement 08-Exam/2024, mirror', href: UP_TECH_SRC.jeAdvtMirror },
        { label: 'UPSSSC — JE civil scheme of 11 September 2024, mirror', href: UP_TECH_SRC.jeSchemeMirror },
        { label: 'UPSSSC — JE civil shortlist, 1 April 2026, mirror', href: UP_TECH_SRC.jeShortlistMirror },
        { label: 'UPSSSC — JE civil examination date, 7 March 2026, mirror', href: UP_TECH_SRC.jeDateMirror },
        { label: 'UPPSC — assistant engineer advertisement A-9/E-1/2024, mirror', href: UP_TECH_SRC.aeAdvtMirror },
        { label: 'UPPSC — assistant engineer preliminary result, 26 May 2025, mirror', href: UP_TECH_SRC.aePreResultMirror },
        { label: 'UPPCL — assistant engineer recruitment through GATE, 13 September 2024', href: UP_TECH_SRC.uppclGateNotice },
        { label: 'UPPCL — assistant engineer advertisement, January 2022', href: UP_TECH_SRC.uppclAe2022 },
        { label: 'UPPCL — junior engineer civil advertisement, March 2022', href: UP_TECH_SRC.uppclJe2022 },
        { label: 'UPPCL — technician advertisement, September 2022', href: UP_TECH_SRC.uppclTech2022 },
        { label: 'UPRVUNL — office memorandum adopting GATE, 30 December 2024', href: UP_TECH_SRC.uprvunlOm },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Uttar Pradesh engineering posts syllabus — the UPPSC preliminary and mains by discipline, and the UPSSSC junior engineer topic lists for civil and agriculture.',
      lead: [
        'The commission’s syllabus is in the advertisement’s appendices; the subordinate commission’s is the government scheme published with each round.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'UPPSC preliminary — engineering aptitude, 100 of 150',
              'The discipline at degree level in outline, with general knowledge and general Hindi at 25 each.',
            ],
            [
              'UPPSC mains — the discipline, 200 of 250 questions',
              'Two papers of the discipline — for civil, structures, geotechnical, transportation, water resources, environmental and construction; for mechanical, thermal, design, manufacturing and fluids; for electrical, machines, power systems, control and electronics — with general Hindi and general studies at 25 each.',
            ],
            [
              'UPSSSC junior engineer civil — 65',
              'The eleven topics of the 2024 scheme, from strength of materials to fluid mechanics, at diploma level.',
            ],
            [
              'UPSSSC junior engineer agriculture — 65',
              'Thirteen topics of five marks: farm power and machinery, engines and tractors, renewable energy, post-harvest engineering, irrigation and drainage, soil and water conservation, land reclamation.',
            ],
            [
              'UPSSSC — computer and Uttar Pradesh, 35',
              'Computer and information technology concepts for 15; the state’s general knowledge for 20.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'UPPSC AE advertisement — Appendices 2 and 3', href: UP_TECH_SRC.aeAdvtMirror },
            { label: 'UPSSSC JE civil scheme', href: UP_TECH_SRC.jeSchemeMirror },
            { label: 'UPSSSC JE agriculture advertisement — scheme on page 10', href: UP_TECH_SRC.jeAgri2026 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Uttar Pradesh engineering posts exam pattern — UPPSC’s 300-mark prelims, 750-mark mains and 100-mark interview, and UPSSSC’s 100-mark paper with a quarter off.',
      lead: [
        'Three stages and 850 marks for an assistant engineer; one paper and 100 for a junior engineer.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Side by side.',
          head: ['Feature', 'UPPSC assistant engineer', 'UPSSSC junior engineer'],
          rows: [
            ['Entry', 'Application; prelims at fifteen per post', 'PET shortlist at fifteen per post'],
            ['Written', 'Prelims 300; mains 375 and 375', '100 in two hours'],
            ['Negative marking', 'One-third of the question’s marks', 'A quarter mark'],
            ['Interview', '100', 'None'],
            ['Merit', '850', 'Written marks'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Uttar Pradesh engineering posts previous papers — the commission’s combined engineering services archive and 2025 prelims key, and the UPSSSC JE keys.',
      lead: [
        'The commission’s previous-papers page lists the combined engineering services examination by year and paper; the subordinate commission publishes keys.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'UPPSC AE 2024 — preliminary of 20 April 2025', note: 'the paper and key with the objection notice; the mains papers of September 2025 in the archive.' },
            { text: 'UPPSC — earlier cycles', note: 'the combined engineering services papers by year, paper and series on the previous-papers page.' },
            { text: 'UPSSSC JE civil — 3 May 2026', note: 'the key notice of 4 May and the final key of 20 July.' },
            { text: 'UPPCL 2022 and 2023', note: 'response keys through the testing agency’s login pages.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'UPPSC — previous question papers', href: UPPSC.papers },
            { label: 'UPPSC — answer keys', href: UPPSC.keys },
            { label: 'UPPSC AE 2024 — prelims key and paper, mirror', href: UP_TECH_SRC.aeKeyMirror },
            { label: 'UPSSSC — all notifications', href: UPSSSC.notifications },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Uttar Pradesh engineering posts mock tests — 150-question UPPSC prelims sittings at one-third off, 375-mark mains papers, and 100-question UPSSSC papers.',
      lead: [
        'Score the commission’s papers at −0.67 on a two-mark question and −1 on a three-mark one; the subordinate commission’s at −0.25.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'UPPSC prelims — 150 in two hours', text: 'A hundred of engineering aptitude and fifty of general knowledge and Hindi; fifteen per post go through, and the 2025 cut let 7,358 of 31,639 through for 609 posts.' },
            { title: 'UPPSC mains — 125 in two and a half hours, twice', text: 'The discipline at three marks a question with a language or general studies section of 25.' },
            { title: 'UPSSSC — 100 in two hours', text: 'Sixty-five of the discipline, fifteen of computer, twenty of Uttar Pradesh, at a quarter off.' },
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
        'Uttar Pradesh engineering posts preparation — the JE agriculture window from 17 September, the PET route, GATE for the power sector, and the stalled AE round.',
      lead: [
        'Diploma holders have a window this month; degree holders have a court case and a GATE score to think about.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From qualification to appointment',
          items: [
            { title: 'Diploma holders — sit the PET', text: 'Every subordinate commission junior engineer round shortlists fifteen per post on it; PET 2026 is on 23 to 25 October.' },
            { title: 'Agricultural engineering diploma holders — apply from 17 September', text: '134 posts, applications to 7 October at ₹25, on the PET 2025 score.' },
            { title: 'Degree holders — watch two things', text: 'The commission’s notifications page for the assistant engineer result or a new advertisement, and GATE for the power corporation, which has said its assistant engineers will come that way.' },
            { title: 'Do not apply for a diploma post with a degree', text: 'The High Court excluded degree holders from the 2024 junior engineer civil shortlist after a Supreme Court interim order had let them apply.' },
            { title: 'Prepare the state sections', text: 'Twenty marks of Uttar Pradesh in every subordinate commission paper; general Hindi and general studies in the commission’s.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Uttar Pradesh engineering posts study material — degree texts and GATE-level banks for UPPSC, diploma texts by topic for UPSSSC, and Uttar Pradesh knowledge.',
      lead: [
        'The discipline at the right level, and the state.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['UPPSC — discipline', 'Standard undergraduate texts and a GATE-level objective bank in the branch', 'Prelims aptitude and both mains papers.'],
            ['UPPSC — general', 'NCERT general studies with Uttar Pradesh; a Hindi grammar', 'Fifty of the prelims; fifty of the mains.'],
            ['UPSSSC — civil', 'Diploma texts topic by topic as the scheme lists them — RCC and building materials carry ten each', 'Sixty-five marks.'],
            ['UPSSSC — agriculture', 'Diploma texts in farm power, machinery, irrigation and soil conservation', 'Thirteen topics of five.'],
            ['UPSSSC — general', 'A computer basics text; Uttar Pradesh in one book', 'Thirty-five marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            { label: 'UPSSSC PET', to: '/government-exams/state/uttar-pradesh/upsssc-pet/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any UP engineering recruitment open now?',
      a: 'From 17 September 2026, the subordinate commission’s junior engineer agriculture round — advertisement 19-Exam/2026 of 14 August, 134 posts in the agriculture directorate — takes applications to 7 October with corrections to 14 October, on a PET 2025 score, at ₹25. Nothing else is open: the commission’s assistant engineer round is stayed, the junior engineer civil round awaits its result, and the power corporation has advertised no engineers since 2022.',
    },
    {
      q: 'What is the status of UPPSC Assistant Engineer 2024?',
      a: 'Stalled in court. The 604-post round held its preliminary on 20 April 2025 and qualified 7,358 candidates on 26 May. A single judge of the Allahabad High Court ordered the result redrawn on 25 September 2025; a division bench stayed that on 26 September and let the mains of 28 and 29 September proceed on condition that the result not be published until the appeal was heard. No result has been published, and the commission’s 2026 calendar carries no assistant engineer item.',
    },
    {
      q: 'What is the UPPSC Assistant Engineer exam pattern?',
      a: 'Three stages. A preliminary of 150 questions and 300 marks in two hours — general knowledge 25, general Hindi 25, engineering aptitude 100 — qualifying fifteen candidates per post; a mains of two papers of 375 in two and a half hours each — general Hindi with the discipline’s first paper, general studies with its second, at three marks a question; and an interview of 100, for 850. One-third of the question’s marks is deducted per wrong answer at both stages.',
    },
    {
      q: 'What is the UPSSSC Junior Engineer exam pattern?',
      a: 'One paper of 100 questions and 100 marks in two hours, objective, with a quarter mark off per wrong answer: the discipline for 65 — eleven civil topics in the 2024 scheme, thirteen agricultural engineering topics in the 2026 one — computer and information technology for 15, and Uttar Pradesh for 20. Candidates are shortlisted at fifteen per post on the PET score; selection is on the written paper with no interview.',
    },
    {
      q: 'When is the UPSSSC JE Civil 2024 result?',
      a: 'It had not been published at 11 September 2026. The 4,612-post round shortlisted 26,205 candidates on 1 April 2026 — excluding degree holders under the High Court’s orders of December 2025 and January 2026 — examined them on 3 May, published the key on 4 May and the final key on 20 July. Document verification follows the result.',
    },
    {
      q: 'Does UPPCL have JE or AE recruitment in 2026?',
      a: 'No. Its vacancy page carries no junior engineer, assistant engineer or technician advertisement of 2025 or 2026; its notice of 13 September 2024 said future assistant engineers would be recruited on GATE scores, and no GATE-based advertisement has followed. The last rounds were 113 assistant engineers in January 2022, 25 junior engineers civil in March 2022 and 891 technicians in September 2022. A press claim of 600 posts rests on an engineers’ association letter.',
    },
    {
      q: 'What are the fees for UP engineering posts?',
      a: 'The commission charged ₹125 for the assistant engineer preliminary — ₹100 and ₹25 processing — with ₹65 for SC and ST and ex-servicemen and ₹25 for PwD. The subordinate commission charges ₹25 to apply for every category, with the mains fee for the shortlisted. UPPCL’s 2022 rounds charged ₹1,180, or ₹826 for SC and ST of the state.',
    },
    {
      q: 'Can a BTech holder apply for UPSSSC Junior Engineer?',
      a: 'The 2024 civil round admitted degree holders provisionally under a Supreme Court interim order of June 2024 and then excluded them from the shortlist under the High Court’s orders of 10 December 2025 and 12 January 2026. The posts require a three-year diploma from the state board of technical education or an equivalent, and the 2026 agriculture advertisement asks for the diploma alone.',
    },
  ],
}

/* ── Uttar Pradesh departmental examinations ────────────────────
   Two kinds. The revenue services' departmental examination for deputy
   collectors, tehsildars and naib tehsildars, held by the Public Service
   Commission under the old Departmental Examination Rules and made a
   condition of confirmation and promotion by the service rules; and the
   Police Recruitment and Promotion Board's departmental promotion
   examinations for the police's clerical, motor transport and computer
   cadres. Every police figure is from the board's notices; the revenue
   framework is from a 2023 High Court judgment. */
const UP_DEPT_SRC = {
  heeraLal: 'https://indiankanoon.org/doc/22706671/',
  satyendra: 'https://indiankanoon.org/doc/9563385/',
  promotion: 'https://uppbpb.gov.in/Home/Promotion',
  manual: 'https://uppbpb.gov.in/Home/Manual',
  asiClerk2026: 'https://uppbpb.gov.in/FilesUploaded/Notice/Prom-2607a4a9f-80d1-4341-acad-502b399f1f28.pdf',
  asiClerkWritten: 'https://uppbpb.gov.in/FilesUploaded/Notice/4C-M-79345870d3-534c-4376-80c2-d7b3d9ef80a8.pdf',
  asiClerkResult: 'https://uppbpb.gov.in/FilesUploaded/Notice/fourth%20class%20to%20asim3d41cdfa-a388-42cc-95f0-4d8b06ca554e.pdf',
  hcmt2025: 'https://uppbpb.gov.in/FilesUploaded/Notice/MT_VIGab746c27-850e-4229-96a7-faa78fd0e905.pdf',
  hcmtResult: 'https://uppbpb.gov.in/FilesUploaded/Notice/Notification%20HCMT%20Result%2007-08-2026d056cb20-e9b1-4da8-8d2b-7d14d37f9975.pdf',
  programmer: 'https://uppbpb.gov.in/FilesUploaded/Notice/202512101812567291cde6e89-785b-45cc-9ce4-ec7fde3fb883.pdf',
  siPet: 'https://uppbpb.gov.in/FilesUploaded/Notice/vig_pro_1211202572ce0060-eb34-4349-87ac-0ae6c0f2c45e.pdf',
  bor: 'http://bor.up.nic.in/',
  shasanadesh: 'https://shasanadesh.up.gov.in/',
}

const UP_DEPARTMENTAL = {
  slug: 'departmental-tests',
  path: '/government-exams/state/uttar-pradesh/departmental-tests/',
  name: 'Uttar Pradesh Departmental Examinations',
  fullName: 'The revenue services’ departmental examination and the police departmental promotion examinations',
  authority: 'Uttar Pradesh Public Service Commission for the revenue examination; the Police Recruitment and Promotion Board for the police cadres',
  official: OFFICIAL,
  seoTitle: 'UP Departmental Exams: Tehsildar Confirmation Rules & Police Promotion Tests',
  metaDescription:
    'Uttar Pradesh departmental examinations — the revenue services’ examination UPPSC holds, tehsildar confirmation rules, and the police board’s promotion exams.',
  lead: [
    'Uttar Pradesh’s departmental examinations are of two kinds. The older is the revenue services’ examination — the papers a probationary deputy collector, tehsildar or naib tehsildar must pass to be confirmed and, for a tehsildar, to be eligible for promotion — held by the Public Service Commission under the Departmental Examination Rules inherited from the United Provinces, which provide for sittings twice a year in April and October on dates the commission fixes. The service rules make a pass a condition of confirmation, and the discipline rules make the withholding of an increment for failing it something less than a penalty.',
    'The newer kind is the police board’s. The Police Recruitment and Promotion Board conducts the departmental examinations by which the police’s clerical, motor transport and computer cadres are promoted — a typing test and a 100-mark written paper for Group D staff becoming assistant sub-inspectors of the clerical cadre, a technical paper and skill test for constable drivers becoming head constables of motor transport, a two-part paper for computer operators becoming programmers — and the qualifying runs that armed and mounted police sub-inspectors must pass to be promoted by seniority. Its 2025-26 cycles ran from September 2025 to August 2026 and are complete.',
  ],
  quickFacts: [
    ['Revenue examination', 'Held by UPPSC under the Departmental Examination Rules, twice a year in principle; a pass is a condition of confirmation for tehsildars and of promotion to deputy collector'],
    ['Police — ASI clerk', 'Group D to assistant sub-inspector, clerical cadre: typing test at 25 and 30 words a minute, then 100 marks in 75 minutes at 35 per cent; 27 selected 17 June 2026'],
    ['Police — head constable motor transport', '176 posts for 2020 to 2025: written 70 at 35, skill test 50 at 25, service record 30; result 7 August 2026'],
    ['Police — programmer grade 2', 'Two papers of 100 at 40 per cent and a 50-mark service record; examined 12 January 2026'],
    ['Consequence of failure', 'Increment withheld without disciplinary procedure; probation extended and reversion possible; no confirmation without a pass'],
    ['Open now', 'Nothing — the board’s cycles are concluded; no revenue sitting appears on the commission’s 2026 calendar'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The revenue framework is set out in the Allahabad High Court’s judgment of 11 May 2023 in Heera Lal v. State of Uttar Pradesh, a tehsildars’ confirmation case. Rule 3 of the Departmental Examination Rules provides for an examination twice a year, usually in April and October, on dates the Public Service Commission determines; the judgment records the commission’s sittings of September 2008, March 2010, January 2012, August 2014, September and October 2015 and June 2016, with results between five and nine months later, and the petitioners’ pass in all eight papers on 20 September 2019. The Subordinate Revenue Executive (Tehsildar) Service Rules of 1966 supply the consequences: two years’ probation under rule 12; extension by the Board of Revenue, less than a year at a time, and reversion to the post promoted from for a probationer who has not passed, under rule 13; the examination as the government determines it under rule 14; and confirmation under rule 15 only on a pass, a certificate of fitness and integrity from the divisional commissioner, and the appointing authority’s satisfaction. An unconfirmed tehsildar is not eligible for promotion to deputy collector under the Civil Service (Executive Branch) Rules of 1982, and confirmation dates from the pass, not from the end of probation.',
    },
    {
      type: 'p',
      text: 'The police board’s examinations are quota routes written into the cadre rules. Twenty per cent of assistant sub-inspector clerical posts are filled by departmental examination from Group D staff under rule 6 of the 2015 clerical cadre rules; every head constable of motor transport is selected by departmental examination from constable and head constable drivers with five years’ service and a clean record under rule 5 of the 2015 motor transport rules; programmers of grade 2 come from computer operators of grade C under rule 19 of the 2011 computer staff rules. The board advertises each selection year’s posts, sets the papers and the pass marks, publishes the keys and the cut-offs, and adds a service-record score where the rules provide one.',
    },
    {
      type: 'list',
      title: 'The police board’s 2025-26 cycles',
      items: [
        { text: 'Assistant sub-inspector, clerical — 27 posts, selection year 2025', note: 'a computer typing test on 17 February 2026 at Lucknow — Hindi 25 and English 30 words a minute over fifteen minutes at 85 per cent accuracy, no second chance — passed by 32 of 163; then an OMR paper of 100 questions in 75 minutes on 22 May at 35 per cent; result 17 June 2026: 27 selected, cut-off 76.53.' },
        { text: 'Head constable, motor transport — 176 posts, 2020 to 2025', note: 'a written test on 5 October 2025 at Lucknow University — general knowledge and intelligence 25 and technical knowledge 90 questions at half a mark, 70 in all, 35 to pass — sat by 3,950 and passed by 2,781; a practical skill test of 50 from 28 April to 11 May 2026 at 25 to pass, passed by 2,541; a service-record score of 30; result 7 August 2026 with year-wise cut-offs from 78.13 to 85.26.' },
        { text: 'Programmer grade 2 — 56 posts, 2023-24', note: 'two papers of 100 on information technology and programming at 40 per cent and a service record of 50; examined 12 January 2026 with one eligible candidate.' },
        { text: 'Sub-inspectors, armed and mounted police', note: 'promotion by seniority subject to a qualifying run of 3.2 km in 35 minutes on 27 November 2025 at the 35th battalion, no second chance; and a driving skill test for constables becoming drivers, notified 30 June 2026.' },
      ],
    },
    {
      type: 'note',
      title: 'What could not be read',
      text: 'The Board of Revenue’s site was unreachable at the date checked, and the revenue examination’s paper list, its with-books and without-books rules, its pass marks and the number of chances are not in any document read; the eight papers of the 2019 sitting are known only from the judgment. No revenue sitting appears on the commission’s 2026 calendar. The secretariat’s departmental examinations, the Hindi and financial handbook examinations for officers and the computer-concept requirement are governed by government orders that the orders portal serves only to a browser, and none was retrieved.',
    },
  ],
  stages: [
    {
      name: 'Revenue — probation and the examination',
      mode: 'UPPSC sittings; a pass to confirm',
      detail:
        'A probationary tehsildar or deputy collector sits the commission’s departmental examination during two years’ probation, extendable by the Board of Revenue less than a year at a time. The papers are those the government determines under the Departmental Examination Rules — eight in the 2019 sitting.',
    },
    {
      name: 'Revenue — confirmation and promotion',
      mode: 'Rule 15 of the 1966 rules',
      detail:
        'Confirmation follows the pass, the divisional commissioner’s certificate and the appointing authority’s satisfaction, and dates from the pass. Without confirmation there is no promotion to deputy collector; without a pass within extended probation, reversion.',
    },
    {
      name: 'Police — qualifying stage',
      mode: 'Typing, skill or run; no second chance',
      detail:
        'The clerical cadre’s typing test, the motor transport cadre’s practical skill test, the armed and mounted sub-inspectors’ run — each a gate with no appeal, before or after the written paper as the cadre’s rules order it.',
    },
    {
      name: 'Police — written paper and merit',
      mode: 'Pass mark 35 or 40 per cent; service record added where the rules provide',
      detail:
        'OMR papers with no negative marking and cancelled questions redistributed under the High Court formula the board cites; merit by written marks, or written plus skill plus service record for motor transport; keys and cut-offs published.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No departmental examination is open. The police board’s cycles have concluded: the assistant sub-inspector clerical examination of selection year 2025 with its result of 17 June 2026, the head constable motor transport examination for 2020 to 2025 with its result of 7 August 2026 and a marks window from 14 to 23 August, the programmer examination of 12 January 2026, and the sub-inspectors’ run of November 2025; the board’s September notices concern home guard enrolment and the constable recruitment. The commission’s 2026 calendar carries no revenue departmental sitting, and the Board of Revenue’s site could not be reached. Promotions of head constables to sub-inspector in February 2026 were made by departmental promotion committee, not by examination.`,
    },
    {
      type: 'table',
      caption: 'The police board’s 2025-26 departmental examinations, from its notices.',
      head: ['Cadre and rule', 'Posts', 'Stages', 'Dates', 'Result'],
      rows: [
        ['Group D to ASI clerical — rule 6(1)(kh), 2015 clerical rules', '27, selection year 2025', 'Typing test at 25 and 30 words a minute, qualifying; written 100 marks, 100 questions, 75 minutes, 35 per cent', 'Typing 17 February 2026; written 22 May 2026, Lucknow', '17 June 2026 — 32 sat, 27 selected, cut-off 76.53; two questions cancelled, one key changed'],
        ['Constable and HC driver to HC motor transport — rule 5(g), 2015 MT rules', '176, selection years 2020 to 2025', 'Written 70 — 25 general and 90 technical at half a mark — at 35; practical skill test 50 at 25; service record 30', 'Written 5 October 2025; skill test 28 April to 11 May 2026 at Lucknow and Sitapur', '7 August 2026 — 3,950 sat, 2,781 passed the written, 2,541 the skill test; cut-offs 84.34, 84.16, 84.70, 85.26, 78.13, 78.91 by year'],
        ['Computer operator C to programmer 2 — rule 19, 2011 computer rules', '56, 2023-24', 'Written 200 in two parts of 100 at 40 per cent; service record 50', '12 January 2026', 'Key and result notice 15 January; one eligible candidate'],
        ['SI armed police and platoon commander; SI mounted police', '527 and 4', 'Qualifying run — 3.2 km in 35 minutes; promotion by seniority', '27 November 2025, 35th battalion PAC, Lucknow', '—'],
      ],
    },
    {
      type: 'links',
      title: 'Check the sources directly',
      items: [
        { label: 'UPPRPB — promotion', href: UP_DEPT_SRC.promotion },
        { label: 'UPPRPB — notice board', href: UPPRPB.notices },
        { label: 'UPPRPB — rules and manuals', href: UP_DEPT_SRC.manual },
        { label: 'Board of Revenue', href: UP_DEPT_SRC.bor },
        { label: 'UPPSC — examination calendar 2026', href: UPPSC.calendar2026 },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Who sits what.',
      head: ['Examination', 'Who', 'Rule'],
      rows: [
        ['Revenue departmental examination', 'Probationary deputy collectors, tehsildars and naib tehsildars, and promotees on probation', 'Rules 12 to 15 of the Tehsildar Service Rules 1966; the Civil Service (Executive Branch) Rules 1982 for deputy collectors; the Departmental Examination Rules for the papers'],
        ['ASI clerical departmental examination', 'Group D staff of the police, for 20 per cent of the cadre’s posts', 'Rule 6(1)(kh) of the clerical, accounts and confidential assistant cadre rules 2015'],
        ['HC motor transport departmental examination', 'Constable drivers and head constable drivers with at least five years’ service and a clean record — the whole cadre', 'Rule 5(g) of the motor transport branch subordinate officers rules 2015'],
        ['Programmer grade 2 departmental examination', 'Computer operators of grade C', 'Rule 19 of the computer staff rules 2011'],
        ['SI armed and mounted — run', 'Head constables in line for promotion by seniority', 'The cadre rules; the run qualifies'],
      ],
    },
    {
      type: 'table',
      caption: 'Consequences of failure, from the rules and judgments.',
      head: ['Provision', 'Effect'],
      rows: [
        ['Rule 13, Tehsildar rules 1966', 'Probation extended less than a year at a time; a probationer who has not passed may be reverted to the post promoted from'],
        ['Rule 15, Tehsildar rules 1966', 'No confirmation without a pass; confirmation dated from the pass'],
        ['Civil Service (Executive Branch) Rules 1982', 'No promotion to deputy collector for an unconfirmed tehsildar'],
        ['Rule 3, Discipline and Appeal Rules 1999, explanation', 'Withholding an increment for failure to pass a departmental examination is not a penalty and needs no disciplinary procedure — as the High Court applied it in Satyendra Singh, November 2024'],
        ['Police board notices', 'Typing tests, skill tests and runs carry no second chance and no appeal; written pass marks of 35 or 40 per cent'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The police board’s schemes, from its 2025-26 notices.',
      head: ['Examination', 'Paper', 'Marks', 'Time', 'Pass'],
      rows: [
        ['ASI clerical — typing', 'Hindi 25 and English 30 words a minute on computer; 400 or 500 words; 85 per cent accuracy', 'Qualifying', '15 minutes', 'Speed and accuracy; no second chance'],
        ['ASI clerical — written', 'General Hindi and computer knowledge 25; general awareness and current affairs 25; numerical and mental ability 25; mental aptitude, intelligence and reasoning 25 — OMR, no negative marking', '100', '75 minutes', '35 per cent'],
        ['HC motor transport — written', 'General knowledge and intelligence 25 questions at one mark; technical knowledge 90 questions at half a mark', '70', '3 hours', '35'],
        ['HC motor transport — skill', 'Practical technical skill test', '50', '—', '25; qualifying'],
        ['HC motor transport — service record', 'Length of service 10; annual entries 10; rewards 5; medals 5', '30', '—', 'Added to the merit'],
        ['Programmer grade 2 — written', 'Information technology 100; computer programming 100', '200', '—', '40 per cent mandatory'],
        ['Programmer grade 2 — service record', 'Length of service to 10; qualifications to 10; other heads', '50', '—', 'Added'],
      ],
    },
    {
      type: 'note',
      title: 'The revenue examination’s papers',
      text: 'The Departmental Examination Rules leave the papers to the government’s determination, and the judgment of 2023 records eight papers in the 2019 sitting without naming them. The rules provide for sittings twice a year in April and October in principle; the commission’s recorded sittings ran at irregular intervals from 2008 to 2016 with results months later. The with-books and without-books rules, pass marks and chances could not be read at the date checked.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the police board’s notices of 15 September 2025, 12 November 2025, 10 December 2025, 30 January 2026, 15 April 2026, 17 June 2026 and 7 August 2026 read on its site; the Allahabad High Court’s judgments in Heera Lal v. State of Uttar Pradesh of 11 May 2023 and Satyendra Singh v. State of Uttar Pradesh of 18 November 2024 on Indian Kanoon; the commission’s 2026 calendar and live notices; and the corporation notices for departmental promotions. The Board of Revenue’s site was unreachable, the government orders portal requires a browser, and the revenue examination’s current rules and schedule were not read; the February 2026 head constable promotions are from press reports.`,
    },
    {
      type: 'links',
      title: 'Official notices and records',
      items: [
        { label: 'ASI clerical departmental examination — notice, 30 January 2026', href: UP_DEPT_SRC.asiClerk2026 },
        { label: 'ASI clerical — written examination notice, 15 April 2026', href: UP_DEPT_SRC.asiClerkWritten },
        { label: 'ASI clerical — result, 17 June 2026', href: UP_DEPT_SRC.asiClerkResult },
        { label: 'HC motor transport departmental examination — notice, 15 September 2025', href: UP_DEPT_SRC.hcmt2025 },
        { label: 'HC motor transport — result, 7 August 2026', href: UP_DEPT_SRC.hcmtResult },
        { label: 'Programmer grade 2 departmental examination — notice, 10 December 2025', href: UP_DEPT_SRC.programmer },
        { label: 'SI armed and mounted police — run notice, 12 November 2025', href: UP_DEPT_SRC.siPet },
        { label: 'Heera Lal v. State of Uttar Pradesh, 11 May 2023', href: UP_DEPT_SRC.heeraLal },
        { label: 'Satyendra Singh v. State of Uttar Pradesh, 18 November 2024', href: UP_DEPT_SRC.satyendra },
        { label: 'Government orders portal', href: UP_DEPT_SRC.shasanadesh },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Uttar Pradesh departmental examinations syllabus — the police board’s clerical, motor transport and programmer papers, and the revenue examination’s framework.',
      lead: [
        'The police board publishes each examination’s syllabus as an annexure to its notice; the revenue examination’s papers are as the government determines.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'ASI clerical — 100',
              'General Hindi and computer knowledge; general awareness and current affairs; numerical and mental ability; mental aptitude, intelligence and reasoning — 25 each.',
            ],
            [
              'HC motor transport — 70',
              'General knowledge and intelligence for 25; technical knowledge of motor vehicles — engines, transmission, electrical systems, maintenance and the motor vehicle rules — for 45 across 90 questions.',
            ],
            [
              'Programmer grade 2 — 200',
              'Information technology for 100; computer programming for 100.',
            ],
            [
              'Revenue departmental examination',
              'The papers the government determines under the Departmental Examination Rules — revenue law and procedure, the land revenue and tenancy codes, criminal procedure, accounts and the financial rules in the tradition of the rules; eight papers in 2019.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus sources',
          items: [
            { label: 'ASI clerical notice — Appendix 2', href: UP_DEPT_SRC.asiClerk2026 },
            { label: 'HC motor transport notice — scheme', href: UP_DEPT_SRC.hcmt2025 },
            { label: 'UPPRPB — rules and manuals', href: UP_DEPT_SRC.manual },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Uttar Pradesh departmental examinations pattern — qualifying typing, skill and running tests, written papers at 35 or 40 per cent, and service-record scores.',
      lead: [
        'A gate with no second chance, a paper with a floor, and a record that counts.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Qualifying stages', 'Typing, skill tests and runs; no second chance, no appeal.'],
            ['Written pass marks', '35 per cent for the clerical and motor transport papers; 40 for programmer.'],
            ['Service record', '30 for motor transport; 50 for programmer; none for the clerical cadre.'],
            ['No negative marking', 'Cancelled questions redistributed under the High Court formula.'],
            ['Revenue', 'A pass to confirm; reversion possible; increment withheld without penalty procedure.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Uttar Pradesh departmental examinations previous papers — the police board’s keys and cut-offs for its 2025-26 cycles, and the unpublished revenue papers.',
      lead: [
        'The police board publishes keys, cancelled questions and cut-offs with each result; the revenue examination’s papers are not published.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'ASI clerical, 22 May 2026', note: 'the result notice with two cancelled questions, one key change and the cut-off of 76.53.' },
            { text: 'HC motor transport, 5 October 2025', note: 'the result notice of 7 August 2026 with the pass counts and year-wise cut-offs; marks through the board’s link in August.' },
            { text: 'Programmer grade 2, 12 January 2026', note: 'the key and result notice of 15 January.' },
            { text: 'Earlier cycles', note: 'the ASI clerical examination of 28 May 2025 for 54 posts; the programmer examination of 13 February 2025.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'ASI clerical — result and key changes, 17 June 2026', href: UP_DEPT_SRC.asiClerkResult },
            { label: 'HC motor transport — result and cut-offs, 7 August 2026', href: UP_DEPT_SRC.hcmtResult },
            { label: 'UPPRPB — notice board', href: UPPRPB.notices },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Uttar Pradesh departmental examinations mock tests — timed typing at 25 and 30 words a minute, 100-question sittings in 75 minutes, and the technical paper.',
      lead: [
        'For the police cadres, the gate is timed and the paper is short.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by cadre',
          items: [
            { title: 'Clerical — typing first', text: 'Hindi at 25 and English at 30 words a minute over fifteen minutes at 85 per cent accuracy; 32 of 163 passed in February 2026. Then 100 questions in 75 minutes to 35 and to the cut-off of 76.' },
            { title: 'Motor transport — the technical ninety', text: 'Ninety questions at half a mark on engines, transmission and rules, with twenty-five of general knowledge; 35 of 70 to pass, and the skill test at 25 of 50.' },
            { title: 'Revenue — the codes under time', text: 'Eight papers on revenue law, procedure and accounts; the sitting comes twice a year in principle and rarely in practice.' },
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
        'Uttar Pradesh departmental examinations preparation — the cadre rule that creates the route, the service record that counts, and the revenue confirmation rules.',
      lead: [
        'The route is in the cadre’s rules; the board’s notice sets the rest.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From eligibility to promotion',
          items: [
            { title: 'Find the rule', text: 'Rule 6 of the clerical rules, rule 5 of the motor transport rules, rule 19 of the computer rules — each names the feeder cadre, the service and the share of posts.' },
            { title: 'Watch the board’s promotion notices', text: 'Each selection year is advertised with its posts, dates and syllabus; the motor transport round covered six years at once.' },
            { title: 'Treat the gate as the examination', text: 'Typing, skill and running tests have no second chance; most of the 2026 clerical field fell at the typing test.' },
            { title: 'Keep the service record clean', text: 'Thirty of 150 for motor transport and 50 for programmer come from length of service, entries, rewards and medals.' },
            { title: 'Revenue officers — pass within probation', text: 'Confirmation dates from the pass, promotion waits on confirmation, and the increment can be withheld without a disciplinary inquiry.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Uttar Pradesh departmental examinations study material — Hindi, arithmetic and reasoning for the clerical paper, motor vehicle technology, the revenue codes.',
      lead: [
        'The police papers are school-level general subjects and the cadre’s trade; the revenue examination is the codes.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By cadre.',
          head: ['Cadre', 'What to read', 'Note'],
          rows: [
            ['ASI clerical', 'A Hindi grammar; a computer basics text; a current affairs digest; arithmetic and reasoning workbooks', 'Four parts of 25.'],
            ['HC motor transport', 'Automobile technology at ITI level; the Motor Vehicles Act and the police motor transport manual', 'Ninety technical questions.'],
            ['Programmer grade 2', 'Information technology fundamentals; the programming languages the police systems use', 'Two papers of 100.'],
            ['Revenue', 'The Uttar Pradesh Revenue Code 2006 and its rules; criminal procedure; the financial handbook', 'Eight papers in 2019.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'UPPSC PCS — the direct route to the revenue services', to: '/government-exams/state/uttar-pradesh/uppsc-pcs/' },
            { label: 'Uttar Pradesh Police', to: '/government-exams/state/uttar-pradesh/uttar-pradesh-police/' },
            { label: 'Uttar Pradesh government exams', to: '/government-exams/state/uttar-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Who conducts the departmental examination for tehsildars in Uttar Pradesh?',
      a: 'The Uttar Pradesh Public Service Commission, under the Departmental Examination Rules whose rule 3 provides for an examination twice a year, usually in April and October, on dates the commission fixes — as the Allahabad High Court set out in Heera Lal v. State of Uttar Pradesh in May 2023, recording the commission’s sittings from 2008 to 2016 and the petitioners’ pass in all eight papers in 2019. No sitting appears on the commission’s 2026 calendar.',
    },
    {
      q: 'What happens if a tehsildar fails the departmental examination?',
      a: 'Under the Tehsildar Service Rules of 1966, probation of two years may be extended by the Board of Revenue less than a year at a time, and a probationer who has not passed may be reverted to the post promoted from; confirmation under rule 15 requires the pass, and dates from it; and an unconfirmed tehsildar is not eligible for promotion to deputy collector. The Discipline and Appeal Rules of 1999 make the withholding of an increment for failing a departmental examination something other than a penalty, so no disciplinary procedure is needed.',
    },
    {
      q: 'What departmental promotion examinations does the UP Police board hold?',
      a: 'The examinations by which the police’s clerical, motor transport and computer cadres are promoted — Group D staff to assistant sub-inspector of the clerical cadre for 20 per cent of its posts, constable and head constable drivers to head constable of motor transport for the whole cadre, and computer operators of grade C to programmer of grade 2 — and the qualifying runs for the promotion by seniority of sub-inspectors of the armed and mounted police. Its 2025-26 cycles concluded with results in June and August 2026.',
    },
    {
      q: 'What is the pattern of the ASI clerical departmental examination?',
      a: 'A computer typing test — Hindi at 25 words a minute and English at 30 over fifteen minutes at 85 per cent accuracy, qualifying with no second chance — then an OMR paper of 100 questions and 100 marks in 75 minutes with 35 per cent to pass and no negative marking: general Hindi and computer knowledge, general awareness and current affairs, numerical and mental ability, and mental aptitude and reasoning at 25 each. In the 2025 selection year 32 of 163 passed the typing test, and 27 were selected on 17 June 2026 at a cut-off of 76.53.',
    },
    {
      q: 'What is the head constable motor transport departmental examination?',
      a: 'The examination by which every head constable of motor transport is selected from constable and head constable drivers with five years’ service. For the selection years 2020 to 2025 — 176 posts — a written test on 5 October 2025 of 25 general questions at one mark and 90 technical questions at half a mark, 70 in all with 35 to pass; a practical skill test of 50 in April and May 2026 with 25 to pass; and a service-record score of 30 for length of service, annual entries, rewards and medals. The result of 7 August 2026 recorded 3,950 sitting, 2,781 passing the written test and 2,541 the skill test, with year-wise cut-offs between 78.13 and 85.26.',
    },
    {
      q: 'Is any Uttar Pradesh departmental examination open now?',
      a: 'No. The police board’s 2025-26 cycles — clerical, motor transport, programmer and the sub-inspectors’ run — are concluded, and its September 2026 notices concern home guard enrolment and constable recruitment. No revenue departmental sitting is on the commission’s 2026 calendar, and the Board of Revenue’s site could not be reached at the date checked.',
    },
    {
      q: 'Is there a departmental examination for head constables to become sub-inspectors?',
      a: 'Not one that could be found for 2025-26. The board’s promotion notices for the sub-inspector cadre in this period are qualifying runs for the armed and mounted police, and the promotion of 384 head constables to sub-inspector in February 2026 was reported as made by departmental promotion committee. The sub-inspector recruitment examination itself is open competition.',
    },
    {
      q: 'Are the secretariat and Hindi departmental examinations covered here?',
      a: 'Only by absence. The secretariat’s departmental examinations, the Hindi and financial handbook examinations for officers and the computer-concept requirement are set by government orders that the state’s orders portal serves only to a browser; none was retrieved at the date checked, and no claim is made about them here beyond the general rule that withholding an increment for failing a departmental examination is not a penalty.',
    },
  ],
}

const uttarPradesh = [UP_PCS, UP_ROARO, UP_PET, UP_LEKHPAL, UP_POLICE, UP_TEACHING, UP_TECHNICAL, UP_JA, UP_DEPARTMENTAL]

export default uttarPradesh
