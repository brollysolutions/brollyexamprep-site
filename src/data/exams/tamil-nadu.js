/**
 * Tamil Nadu state exams — /government-exams/state/tamil-nadu/:exam/
 *
 * The state hub at /government-exams/state/tamil-nadu/ lists the recruitment
 * routes the state runs. Each of those cards becomes a link only when a record
 * exists here, so this file is what turns a card into a page.
 *
 * Two things shape everything below, and both are specific to Tamil Nadu:
 *
 *   The commission examines Tamil as a condition of eligibility. Since 2021
 *   every TNPSC general recruitment has carried a Tamil language component
 *   that must be passed before the rest of the paper is evaluated — not a
 *   qualifying language paper at the end, as in the neighbouring states, but a
 *   gate at the front. A candidate who prepares the general studies syllabus
 *   and treats Tamil as optional has not read the notification.
 *
 *   TNPSC bundles posts into combined examinations. Group 2 and Group 2A are
 *   one notification with an oral-test split; Group 4 carries the Village
 *   Administrative Officer alongside the ministerial posts. The card on the
 *   hub is a post; the notification is a bundle. Records here say which is
 *   which and cross-link rather than repeat.
 *
 * Every dated fact — vacancies, fees, age limits, marks, deadlines — sits in
 * the `updates`, `eligibility`, `pattern` and `sources` sections, is taken
 * from a named notification linked in the same section, and was checked on
 * the date in CHECKED. When you refresh a status, move that date with it. The
 * rest of each record is deliberately evergreen: the durable shape of the
 * recruitment and the method that shape implies.
 */

const OFFICIAL = 'tnpsc.gov.in'

/** The day the dated facts on these pages were last read off an official notice. */
const CHECKED = '11 September 2026'

/** Recurs at the foot of every pattern page in this file. */
const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'TNPSC revises paper structure, marks, syllabus detail and eligibility between recruitment cycles, and has done so more than once in recent years — the Tamil eligibility component itself is a recent addition. Everything here describes the shape the recruitment has held; the notification for the cycle you are sitting is the document that decides it. Read it end to end before you plan around any figure.',
}

/* ── Tamil Nadu Police ──────────────────────────────────────────
   Two 2025 notifications from the Uniformed Services Recruitment Board: SI
   (Taluk and Armed Reserve) in April, and the common Constable, Jail Warder
   and Fireman recruitment in August. Both are past their written stage and
   neither had reached a selection list at CHECKED. The SI scheme was
   rewritten mid-cycle by an addendum after a Supreme Court judgment merged
   the open and departmental streams into one examination; the figures below
   are the amended ones. */
const TN_POLICE_SRC = {
  board: 'https://www.tnusrb.tn.gov.in/',
  siNotification: 'https://www.tnusrb.tn.gov.in/pdfs/SI(TK,%20AR)%202025%20Notification_n.pdf',
  siAddendum: 'https://www.tnusrb.tn.gov.in/pdfs/Addendum_to_Notification_SI2025.pdf',
  siSyllabus: 'https://www.tnusrb.tn.gov.in/pdfs/SI_2025_Syllabus.pdf',
  siClarification: 'https://www.tnusrb.tn.gov.in/pdfs/NEWClarificationNotificationEducational%20Qualification.pdf',
  siResultNote: 'https://www.tnusrb.tn.gov.in/pdfs/English%20Version%20-%20Information%20pertaining%20to%20software%20error.pdf',
  crNotification: 'https://www.tnusrb.tn.gov.in/pdfs/Notification_CR_2025.pdf',
  crSyllabus: 'https://www.tnusrb.tn.gov.in/pdfs/Syllabus_CR2025.pdf',
  crFaq: 'https://www.tnusrb.tn.gov.in/pdfs/FAQ_English_CR2025.pdf',
  crShortlist: 'https://www.tnusrb.tn.gov.in/pdfs/CR2025_Candidates_Eligible_for_CV-PMT-ET-PET_en.pdf',
  planner: 'https://www.tnusrb.tn.gov.in/pdfs/Annual_Planner_2026_English.pdf',
  archive: 'https://www.tnusrb.tn.gov.in/archivesquestionpapers-tnusrb.php',
  go410: 'https://www.tnusrb.tn.gov.in/pdfs/G.O.(Ms)%20No.%20410,%20Home%20(Pol%203)%20Dept,%20dated%20-%2018.08.2025.pdf',
}

const TN_POLICE = {
  slug: 'tamil-nadu-police',
  path: '/government-exams/state/tamil-nadu/tamil-nadu-police/',
  name: 'Tamil Nadu Police',
  fullName: 'Tamil Nadu Police Sub-Inspector and Constable recruitment',
  authority: 'Tamil Nadu Uniformed Services Recruitment Board (TNUSRB)',
  official: 'tnusrb.tn.gov.in',
  seoTitle: 'TN Police SI & Constable 2026: Pattern, PET Marks & Tamil Test',
  metaDescription:
    'Tamil Nadu Police SI and Constable — status, eligibility, fees, the Tamil eligibility test, the written paper, PMT and endurance standards and the scored PET.',
  lead: [
    'Tamil Nadu recruits its Sub-Inspectors and Constables through the Uniformed Services Recruitment Board, and both recruitments share a shape no other state uses: a Tamil language test that must be passed before the main paper is even evaluated, a main written paper worth 70 of the final 100, a physical efficiency test that is scored rather than merely passed, and a handful of special marks for NCC, NSS and sport. Nothing about the physical stage is a formality — for a Constable it is nearly a quarter of the result.',
    'The 2025 Sub-Inspector cycle was rewritten while it ran. A Supreme Court judgment in May 2025 required one common examination for open and departmental candidates, and the board issued an addendum in October that merged the two streams, deleted the separate departmental paper and put every candidate on the same 100-mark total. The figures on this page are the amended ones, and they are the shape the next cycle will most likely keep.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Uniformed Services Recruitment Board'],
    ['Current status', 'Both 2025 cycles closed and awaiting selection; no window open at 11 September 2026'],
    ['Sub-Inspector', 'Degree; Tamil test, then main paper 70, PET 15, viva 10, special marks 5'],
    ['Constable, Jail Warder, Fireman', 'SSLC; Tamil test, then main paper 70, PET 24, special marks 6 — no viva'],
    ['Negative marking', 'None stated in either notification; wrong answers score zero'],
    ['Next, per the board’s planner', 'Women SI (Taluk) in December 2026; the next common Constable recruitment in February 2027'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The board runs the Sub-Inspector recruitment for Taluk and Armed Reserve posts, and a common recruitment for Grade-II Police Constable, Grade-II Jail Warder and Fireman that lets a candidate rank the three posts by preference. Both begin with the same idea: a Tamil language eligibility test, set at tenth-standard Tamil Nadu board level, that a candidate must pass at 40 per cent before the main answer sheet is looked at. The Tamil marks then count for nothing; the paper exists only to gate.',
    },
    {
      type: 'p',
      text: 'What follows is a main written paper worth 70 marks, a certificate verification and physical measurement stage that is pass-or-fail, an endurance run that is pass-or-fail, and then a three-event physical efficiency test that is scored — two stars per event at the higher standard, one at the lower — into the final total. Sub-Inspector candidates add a viva-voce worth 10. Special marks for NCC, NSS and sport are awarded on certificates and complete the 100.',
    },
    {
      type: 'list',
      title: 'What sets the Tamil Nadu board apart',
      items: [
        { text: 'Tamil is a gate, not a paper', note: 'a candidate below 40 per cent in the Tamil test has their main answer sheet left unevaluated. The Tamil marks do not count towards selection; failing them ends it.' },
        { text: 'The physical test is scored', note: 'each of three events earns 0, 1 or 2 stars against published standards, and the stars convert to marks — 15 of the 100 for Sub-Inspector, 24 for the Grade-II posts.' },
        { text: 'No negative marking', note: 'neither notification contains a deduction clause, and the board’s own question booklets say a wrong answer simply earns no marks. Coaching material that quotes a deduction is not describing this board.' },
        { text: 'Twenty per cent preference for Tamil-medium candidates', note: 'at every stage, for candidates who studied entirely in Tamil medium from first standard to the qualifying degree. It does not apply to the departmental quota.' },
        { text: 'One examination for open and departmental Sub-Inspector candidates', note: 'since the 2025 addendum. Serving constables in the departmental quota sit the same written, endurance and efficiency tests, and are exempt only from the measurement stage.' },
      ],
    },
    {
      type: 'note',
      title: 'The Tamil test decides whether your paper is read',
      text: 'It is not a language paper at the end of the process, as in the neighbouring states, but the first thing marked. A candidate who has prepared general knowledge and psychology to a high standard and treated Tamil as a formality can have a strong main paper left unopened. The syllabus is tenth-standard state board Tamil, which is finite and learnable, and the threshold is 40 per cent — but only if it is prepared.',
    },
  ],
  stages: [
    {
      name: 'Tamil language eligibility test',
      mode: 'Objective, qualifying only',
      detail:
        'One hundred questions in one hundred minutes for Sub-Inspector; eighty in eighty for the Grade-II posts. Forty per cent is required before the main answer sheet is evaluated. The marks are not carried forward.',
    },
    {
      name: 'Main written examination',
      mode: 'Objective, 70 marks',
      detail:
        'General knowledge plus, for Sub-Inspector, logical and numerical analysis, psychology, communication skills and information handling; for the Grade-II posts, general knowledge and psychology. Thirty-five per cent to qualify. Five candidates per vacancy proceed.',
    },
    {
      name: 'Certificate verification, measurement and endurance',
      mode: 'Qualifying — no marks',
      detail:
        'Height and chest against published standards, then a 1500-metre run for men in seven minutes and a 400-metre run for women in two and a half. Departmental Sub-Inspector candidates and ex-servicemen are exempt from measurement.',
    },
    {
      name: 'Physical efficiency test',
      mode: 'Scored — three events',
      detail:
        'Rope climbing, a jump and a sprint for men; a jump, a throw and a sprint for women. Each event earns zero, one or two stars, and the stars convert to marks — a maximum of 15 for Sub-Inspector and 24 for the Grade-II posts.',
    },
    {
      name: 'Viva-voce and special marks, then selection',
      mode: 'Sub-Inspector viva 10; special marks 5 or 6',
      detail:
        'Sub-Inspector candidates at two per vacancy attend a viva at the board’s office. Special marks for NCC, NSS and sport are awarded on certificates. The provisional list is the total of the main paper, the efficiency test, the viva where held, and special marks, followed by medical and antecedents checks.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Both 2025 recruitments are past their written examinations and neither has reached a selection list. The Sub-Inspector cycle is held at the written-result stage: the board published a 1:5 shortlist in January 2026, then withdrew it after finding a software error in how candidates who had switched from the open to the departmental quota were listed, and its home page still says the revised result will be released shortly. The Constable cycle shortlisted 18,689 candidates for verification and physical tests in December 2025 and has posted nothing since.`,
    },
    {
      type: 'table',
      caption: 'The two 2025 cycles, end to end, as far as the board’s own site records them.',
      head: ['Stage', 'Sub-Inspector (No. 01/2025)', 'Constable, Jail Warder, Fireman (No. 02/2025)'],
      rows: [
        ['Notification', '4 April 2025', '21 August 2025'],
        ['Applications', '7 April to 10 May 2025, extended from 3 May after a High Court interim order', '22 August to 21 September 2025'],
        ['Scheme amended', 'Addendum No. 1A/2025 of 31 October 2025 — one common examination for open and departmental candidates', '—'],
        ['Written examination', '21 December 2025 — main paper in the morning, Tamil test in the afternoon', '9 November 2025'],
        ['Written result', '1:5 shortlist published 27 January 2026, then withdrawn for correction; revised list pending', '26 December 2025 — 18,689 called to verification and physical tests'],
        ['Physical tests and beyond', 'Not yet scheduled on the board’s site', 'No result posted on the board’s site'],
      ],
    },
    {
      type: 'list',
      title: 'Vacancies in the 2025 cycles',
      items: [
        { text: 'Sub-Inspector — 1,299, plus 53 shortfall posts', note: 'Taluk 933 (654 men, 279 women) and Armed Reserve 366 (255 men, 111 women). Twenty per cent of the whole is the departmental quota for serving constables; ten per cent of the rest for wards of police personnel and ten per cent for sportspersons.' },
        { text: 'Grade-II Constable — 2,833', note: 'notified as a single figure without a men-and-women split, because the state moved to single-point entry for the special police battalions in August 2025. Twenty-one further Scheduled Tribe shortfall posts.' },
        { text: 'Grade-II Jail Warder — 180; Fireman — 631', note: '142 men and 38 women warders; the fireman posts for men only. A candidate ranks the three posts by preference at application.' },
      ],
    },
    {
      type: 'note',
      title: 'Why the Sub-Inspector scheme changed mid-cycle',
      text: 'In May 2025 the Supreme Court struck down the rule that placed departmental-quota Sub-Inspectors above open recruits in seniority, and directed one common examination for all direct recruitment with seniority by marks. The state gave effect to it by government orders in August and October, and the board issued an addendum putting every candidate on the same written, endurance and efficiency tests and the same 100-mark total. The separate 85-mark departmental law paper was deleted, and the written examination was held back until the change was in place.',
    },
    {
      type: 'note',
      title: 'What the board’s planner schedules next',
      text: 'The board’s tentative annual planner for 2026–27 lists a Sub-Inspector recruitment for women in the Taluk cadre in December 2026, a technical Sub-Inspector recruitment in February 2027, the next common Constable recruitment in February 2027 and a Sub-Inspector recruitment in June 2027. A planner date is not a notification; the board’s site is the only source that is.',
    },
    {
      type: 'links',
      title: 'Check the board directly',
      items: [
        { label: 'TNUSRB home — notifications and press releases', href: TN_POLICE_SRC.board },
        { label: 'Annual planner 2026–27', href: TN_POLICE_SRC.planner },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility as set by the 2025 notifications, with age reckoned as on 1 July 2025. A new notification will set its own reckoning date.',
      head: ['Requirement', 'Sub-Inspector', 'Constable, Jail Warder, Fireman'],
      rows: [
        ['Qualification', 'A bachelor’s degree from a recognised university, obtained through a regular 10+2+3 or equivalent pattern, held on the notification date.', 'A pass in the tenth standard or equivalent.'],
        ['Age — general', '20 to 30 years', '18 to 26 years'],
        ['Age — by category', 'BC, BC(M), MBC and DNC to 32; SC, SC(A) and ST to 35; transgender candidates to 35; destitute widows to 37; ex-servicemen and the departmental quota to 47.', 'BC, BC(M), MBC and DNC to 28; SC, SC(A), ST and transgender candidates to 31; destitute widows to 37; ex-servicemen to 47.'],
        ['Departmental quota', 'Serving constables and head constables with five years’ service, a clean record and a no-objection certificate. Twenty per cent of the vacancies; Tamil-medium preference does not apply within it.', 'None.'],
        ['Fee', '₹500 for the open or the departmental quota; ₹1,000 to apply under both.', '₹250.'],
        ['Tamil-medium preference', 'Twenty per cent at every stage for candidates educated entirely in Tamil medium from first standard to degree.', 'Twenty per cent, on the same basis to tenth standard.'],
      ],
    },
    {
      type: 'table',
      caption: 'Physical measurement standards, identical in both notifications. Measurements are rounded to the nearest half-centimetre under a 2015 government order, and an appeal to the sub-committee chairperson is allowed on the day.',
      head: ['Candidate', 'Height', 'Chest — men only'],
      rows: [
        ['Men — OC, BC, BC(M), MBC and DNC', 'Not less than 170 cm', '81 cm, with 5 cm expansion'],
        ['Men — SC, SC(A) and ST', 'Not less than 167 cm', '81 cm, with 5 cm expansion'],
        ['Women — OC, BC, BC(M), MBC and DNC', 'Not less than 159 cm', '—'],
        ['Women — SC, SC(A) and ST', 'Not less than 157 cm', '—'],
      ],
    },
    {
      type: 'p',
      text: 'Ex-servicemen, former central armed police personnel and serving military personnel due to retire within a year are exempt from measurement, as are departmental-quota Sub-Inspector candidates under the addendum. A pregnant candidate may defer the physical stages; the board re-conducts them in the first week of February or August with batch seniority preserved. The medical standard and the antecedents check follow the provisional list.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'How the final 100 is built, post by post. The Tamil test and the measurement and endurance stages carry no marks; they decide whether the candidate is still in.',
      head: ['Component', 'Sub-Inspector', 'Constable, Jail Warder, Fireman'],
      rows: [
        ['Tamil language eligibility test', '100 questions, 100 marks, 100 minutes — qualifying at 40', '80 questions, 80 marks, 80 minutes — qualifying at 32'],
        ['Main written examination', '70 marks', '70 marks'],
        ['Physical efficiency test', '15 marks', '24 marks'],
        ['Viva-voce', '10 marks', '—'],
        ['Special marks', '5 — NCC 2, NSS 1, sport 2', '6 — NCC 2, NSS 2, sport 2'],
        ['Total', '100', '100'],
      ],
    },
    {
      type: 'table',
      caption: 'The main written examination. Half a mark a question for Sub-Inspector, one mark for the Grade-II posts; thirty-five per cent to qualify in both.',
      head: ['Post', 'Part A', 'Part B', 'Total', 'Duration'],
      rows: [
        ['Sub-Inspector', 'General knowledge — 80 questions, 40 marks', 'Logical analysis, numerical analysis, psychology, communication skills and information handling — 60 questions, 30 marks', '140 questions, 70 marks', '2 hours 30 minutes'],
        ['Constable, Jail Warder, Fireman', 'General knowledge — 45 questions, 45 marks', 'Psychology — 25 questions, 25 marks', '70 questions, 70 marks', '80 minutes'],
      ],
    },
    {
      type: 'note',
      title: 'No negative marking, in the board’s own words',
      text: 'Neither notification, the addendum nor either syllabus contains a deduction clause, and the board’s published question booklet instructions state that a wrong, multiple or improperly shaded answer earns no marks for that question. There is no penalty. Material that quotes a deduction for this board is describing a different one.',
    },
    {
      type: 'table',
      caption: 'The scored physical efficiency test. Three events, all compulsory; two attempts for the climb, jump and throw, one for each run. A candidate scoring zero stars in an event continues to the next.',
      head: ['Candidates', 'Event', 'One star', 'Two stars'],
      rows: [
        ['Men', 'Rope climbing, hands only', '5.0 to under 6.0 m', '6.0 m and above'],
        ['Men', 'Long jump, or high jump', '3.80 to under 4.50 m; or 1.20 to under 1.40 m', '4.50 m and above; or 1.40 m and above'],
        ['Men', '100 metres, or 400 metres', '15.00 s down to over 13.50 s; or 80 s down to over 70 s', '13.50 s and under; or 70 s and under'],
        ['Women', 'Long jump', '3.00 to under 3.75 m', '3.75 m and above'],
        ['Women', 'Shot put 4 kg, or cricket ball throw', '4.25 to under 5.50 m; or 17 to under 24 m', '5.50 m and above; or 24 m and above'],
        ['Women', '100 metres, or 200 metres', '17.50 s down to over 15.50 s; or 38 s down to over 33 s', '15.50 s and under; or 33 s and under'],
      ],
    },
    {
      type: 'list',
      title: 'How the stars become marks, and the rules around them',
      items: [
        { text: 'Sub-Inspector: one star is 2 marks, two stars 5, for a maximum of 15', note: 'the efficiency test is a seventh of a Sub-Inspector’s total and the cheapest place to gain marks.' },
        { text: 'Grade-II posts: one star is 4 marks, two stars 8, for a maximum of 24', note: 'nearly a quarter of a Constable’s total. A candidate at two stars in every event starts the merit list with an advantage no amount of general knowledge recovers.' },
        { text: 'The endurance run comes first and is pass-or-fail', note: '1500 metres in seven minutes for men, 400 metres in two and a half for women, before the scored events begin.' },
        { text: 'Special marks come from certificates, not performance', note: 'NCC C certificate or Under Officer 2; NSS at national level 2 for the Grade-II posts; sport by the form of the certificate, from half a mark for a school-district medal to 2 for international representation. Only the highest certificate in each category counts.' },
        { text: 'Ties break on age, then a President’s Scout award, then the main paper', note: 'then seniority of application. Taluk posts go to the higher-ranked Sub-Inspector candidates, Armed Reserve to the next.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan that puts the Tamil test and the running track first',
      items: [
        { text: 'Prepare tenth-standard Tamil as a subject', note: 'the test is set at the state board tenth standard and it is the first thing marked. Forty per cent is a modest bar for anyone who prepares it and an absolute one for anyone who does not.' },
        { text: 'Train the three scored events, not just the run', note: 'rope climbing for men is the event candidates arrive least prepared for and the one where two stars are most often missed. Measure yourself against the star standards monthly.' },
        { text: 'Build general knowledge from the board’s own syllabus', note: 'it names the subjects — general science, history, geography, economics, polity, environment, current affairs — and the state layer runs through all of them.' },
        { text: 'Sub-Inspector candidates: drill Part B as five separate skills', note: 'logical analysis, numerical analysis, psychology, communication in Tamil and English, and information handling each have their own question types, and the board’s archived papers show all of them.' },
        { text: 'Answer every question', note: 'with no negative marking, a blank is the only way to lose a mark you could have had. Review the guesses separately afterwards.' },
        { text: 'Get the special-marks certificates in order now', note: 'NCC, NSS and sport certificates are awarded marks on their form and level. A certificate in the wrong form earns nothing, and the board does not accept new ones at verification.' },
        { text: 'Read the planner and prepare for the date that fits', note: 'women Sub-Inspector in December 2026, the common Constable recruitment in February 2027 — tentative, but the shape of the year.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of each examination, the physical standards and the star tables are taken from the two 2025 notifications, the Sub-Inspector addendum and both syllabus documents, with the timeline from the board’s press releases and result notices. The Constable notification is published in Tamil only. The board maintains a genuine archive of previous question papers and keys — the 2019, 2022 and 2023 Sub-Inspector papers and the 2019, 2020 and 2022 Constable papers — and has so far posted only the answer keys for the 2025 cycles.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'TNUSRB home', href: TN_POLICE_SRC.board },
        { label: 'Sub-Inspector notification No. 01/2025', href: TN_POLICE_SRC.siNotification },
        { label: 'Sub-Inspector addendum No. 1A/2025 — the amended scheme', href: TN_POLICE_SRC.siAddendum },
        { label: 'Sub-Inspector syllabus 2025', href: TN_POLICE_SRC.siSyllabus },
        { label: 'Sub-Inspector written-result correction notice', href: TN_POLICE_SRC.siResultNote },
        { label: 'Constable, Jail Warder and Fireman notification No. 02/2025', href: TN_POLICE_SRC.crNotification },
        { label: 'Constable recruitment syllabus 2025', href: TN_POLICE_SRC.crSyllabus },
        { label: 'Constable recruitment FAQ', href: TN_POLICE_SRC.crFaq },
        { label: 'Constable shortlist for verification and physical tests', href: TN_POLICE_SRC.crShortlist },
        { label: 'G.O.Ms.No.410 — common examination for open and departmental SI', href: TN_POLICE_SRC.go410 },
        { label: 'Annual planner 2026–27', href: TN_POLICE_SRC.planner },
        { label: 'Archive of previous question papers', href: TN_POLICE_SRC.archive },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Tamil Nadu Police SI and Constable syllabus — the Tamil eligibility test, the general knowledge paper, and the Part B skills for Sub-Inspector.',
      lead: [
        'Three syllabuses, and the first is the one most candidates skip: tenth-standard Tamil, which decides whether the other two are marked.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Tamil language eligibility test',
              'Tamil to the tenth standard of the Tamil Nadu State Board: grammar, vocabulary, comprehension, literature and usage as the school syllabus sets them. Objective, qualifying at 40 per cent, and marked before anything else.',
            ],
            [
              'Part A — General knowledge, both posts',
              'General science, history, geography, economics, Indian polity, chemistry, biology, diet and nutrition, environmental science, physics and current affairs — the board’s own list. For the Grade-II posts, set at tenth-standard level; for Sub-Inspector, at degree level, with the Tamil Nadu layer through all of it.',
            ],
            [
              'Part B — Psychology, Grade-II posts',
              'Twenty-five questions of psychological aptitude — attention, memory, reasoning under instruction, situational judgement — set by the board and practised best from its archived papers.',
            ],
            [
              'Part B — Sub-Inspector',
              'Logical analysis; numerical analysis; psychology; communication skills in Tamil and English; information handling; and mental ability. Sixty questions across five skills that reward drilled method over reading.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Both syllabuses are published as short official documents, and the Constable one in Tamil. Read them as a list of subject headings and a statement of standard — tenth for the Grade-II posts, degree for Sub-Inspector — and use the archived papers to see how deep each heading actually goes.',
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Sub-Inspector syllabus 2025', href: TN_POLICE_SRC.siSyllabus },
            { label: 'Constable recruitment syllabus 2025', href: TN_POLICE_SRC.crSyllabus },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Tamil Nadu Police exam pattern — the Tamil gate, the 70-mark main paper, measurement and endurance stages, the scored PET, the viva and special marks.',
      lead: [
        'Two tests that decide whether you continue and three components that decide where you rank. Knowing which is which is the whole of the planning.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage does.',
          head: ['Stage', 'Sub-Inspector', 'Grade-II posts', 'Role'],
          rows: [
            ['Tamil eligibility test', 'Qualify at 40', 'Qualify at 32', 'Gates evaluation of the main paper'],
            ['Main written', '70 marks', '70 marks', 'Most of the rank; 1:5 proceed'],
            ['Measurement and endurance', 'Qualifying', 'Qualifying', 'Removes candidates'],
            ['Physical efficiency', '15 marks', '24 marks', 'Scored'],
            ['Viva-voce', '10 marks', '—', 'Scored; 1:2 called'],
            ['Special marks', 'Up to 5', 'Up to 6', 'From certificates'],
          ],
        },
        {
          type: 'p',
          text: 'The consequence is a planning rule. The main paper is the largest component but not the only one, and the efficiency test is the cheapest marks on the sheet — a minute off a run time or a metre on a rope is worth more than the equivalent effort in general knowledge. For a Constable, 24 of the 100 come from three physical events that take an afternoon.',
        },
        {
          type: 'list',
          title: 'Rules that decide candidacies',
          items: [
            { text: 'The Tamil test is marked first and alone', note: 'below the threshold, the main sheet is not evaluated.' },
            { text: 'Thirty-five per cent in the main paper to qualify', note: 'then the top five per vacancy, plus everyone on the cut-off mark, proceed.' },
            { text: 'Measurement is by the half-centimetre', note: 'and rounded — 169.8 becomes 170, 169.6 becomes 169.5. Appeal on the day is allowed.' },
            { text: 'Zero stars is not elimination', note: 'a candidate who scores nothing in one event continues to the next; the efficiency test removes no one, it only ranks.' },
            { text: 'Departmental SI candidates are exempt from measurement only', note: 'under the addendum they sit the same written, endurance and efficiency tests as everyone else.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Tamil Nadu Police previous papers — the board’s archive of SI and Constable papers with keys, and how to work them.',
      lead: [
        'This board keeps an archive, which is more than most. Six cycles of question booklets with keys are there to work.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The board’s archive holds the Sub-Inspector papers for 2019, 2022 and 2023 — Tamil test, open and departmental booklets — and the Constable papers for 2019, 2020 and 2022, each with its key. For the 2025 cycles it has posted the preliminary and final keys but not yet the booklets. The 2023 Sub-Inspector booklet is the closest to the current scheme, and its instruction page is also where the board states in terms that a wrong answer earns no marks.',
        },
        {
          type: 'list',
          title: 'How to work the archive',
          items: [
            { text: 'Sit the Tamil test booklets first', note: 'they show the level — tenth standard — and the question types, which do not change. The gate is the easiest part of the archive to prepare from.' },
            { text: 'Work the main papers to the half-mark', note: 'for Sub-Inspector, 140 questions in 150 minutes at half a mark each. The pace is what the archive teaches.' },
            { text: 'Classify Part B by skill', note: 'logical, numerical, psychology, communication, information handling. The distribution across the archived papers tells you where the sixty questions fall.' },
            { text: 'Use the 2025 keys with a reconstructed booklet', note: 'the keys are official; a reconstructed paper checked against them is a fair practice set for the current scheme.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'TNUSRB archive of question papers', href: TN_POLICE_SRC.archive },
            { label: 'Police previous papers directory', to: '/government-exams/police/previous-year-papers/' },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Tamil Nadu Police mock tests — rehearsing the Tamil gate, the half-mark main paper and the three scored events.',
      lead: [
        'A mock for this board is three things: a Tamil paper, a main paper, and a timed session on a rope, a runway and a track.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the board’s structure',
          items: [
            { title: 'A Tamil test paper fortnightly', text: 'To the notified length and time, from the archived booklets. Pass it comfortably every time; it is the gate.' },
            { title: 'A main paper weekly', text: 'For Sub-Inspector, 140 questions in 150 minutes; for the Grade-II posts, 70 in 80. Every question answered — no penalty — and the guesses reviewed separately.' },
            { title: 'The three events weekly, measured', text: 'Rope, jump and sprint for men; jump, throw and sprint for women. Log the distance and time against the star table. The efficiency test is a mock with a score.' },
            { title: 'The endurance run monthly', text: '1500 metres in seven minutes or 400 in two and a half. Pass-or-fail, and no candidate should discover on the day that it is close.' },
          ],
        },
        {
          type: 'note',
          title: 'Score the stars, not just the paper',
          text: 'A candidate at two stars in all three events has 15 or 24 marks in hand before the written result is known. Practise the events to the two-star standard — six metres on the rope, 4.50 in the long jump, 13.5 seconds over a hundred metres — because that is where the physical test stops being a hurdle and becomes a lead.',
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Telangana Police SI mock test — a sibling paper', to: '/government-exams/state/telangana/telangana-police/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Tamil Nadu Police preparation — a plan that gives Tamil, the physical events and the main paper their real weight, and is ready for the planner dates.',
      lead: [
        'A gate, a paper and a track. The plan is the order in which to be ready for them.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A twelve-month plan',
          items: [
            { title: 'Months one to three — Tamil and the track', text: 'Tenth-standard Tamil as a subject; general knowledge from the board’s syllabus headings; and a physical programme that starts with the endurance run and adds the three events. Rope climbing takes months to learn from nothing.' },
            { title: 'Months four to six — the main paper', text: 'General knowledge with the state layer; Part B skills drilled separately for Sub-Inspector; psychology from the archived papers for the Grade-II posts.' },
            { title: 'Months seven to nine — papers and stars under the clock', text: 'Weekly main papers, fortnightly Tamil papers, weekly measured events against the star table. Certificates for special marks assembled in the forms the notification prescribes.' },
            { title: 'Months ten to twelve — hold for the planner date', text: 'Maintenance. The board’s planner puts the next recruitments in December 2026 and February 2027, tentatively; the 2025 cycles took a year from notification to written result and are still running.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2025 cycles taught',
          items: [
            { text: 'The scheme can change after you apply', note: 'the Sub-Inspector addendum rewrote the marks allocation seven months into the cycle. Read every addendum the board publishes.' },
            { text: 'Results can be withdrawn', note: 'the Sub-Inspector shortlist was published and then held for correction. A published list is not final until the board says so.' },
            { text: 'The Tamil-medium preference is litigated', note: 'a High Court writ appeal governs who qualifies for it in the current Constable cycle. Hold the certificates the notification asks for.' },
            { text: 'Departmental candidates now compete on the same paper', note: 'for Sub-Inspector, since the addendum — with the same endurance and efficiency standards as open candidates.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Tamil Nadu Police study material — what to read for the Tamil test, the general knowledge paper and the Part B skills.',
      lead: [
        'The Tamil test has a textbook — the tenth-standard one. The rest follows the board’s syllabus headings.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by component.',
          head: ['Component', 'Standard', 'What to work from'],
          rows: [
            ['Tamil eligibility test', 'Tenth, state board', 'The Tamil Nadu State Board Tamil textbooks for the ninth and tenth standards, and the archived Tamil test booklets.'],
            ['General knowledge — Grade-II posts', 'Tenth', 'The state board science and social science textbooks to the tenth standard, and a current affairs digest with the Tamil Nadu layer.'],
            ['General knowledge — Sub-Inspector', 'Degree', 'Standard degree-level general studies texts across the board’s eleven headings, plus the state’s history, geography, economy and administration.'],
            ['Psychology — Grade-II posts', 'Not stated', 'The archived Constable papers, which are the only published evidence of the question types.'],
            ['Part B — Sub-Inspector', 'Not stated', 'A reasoning and quantitative aptitude question bank, a Tamil and English communication reference, and the archived papers for the information-handling and psychology items.'],
            ['Physical efficiency', 'Practical', 'The star table from the notification, a rope, a runway and a stopwatch.'],
          ],
        },
        {
          type: 'note',
          title: 'One file of Tamil Nadu questions',
          text: 'The general knowledge papers carry state-specific questions — districts, rivers, dynasties, the state’s administrative structure, its schemes. Collect every one you meet in a practice paper into a single file. Over months it becomes the most exam-specific revision document available, and every entry in it has actually been asked.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any Tamil Nadu Police SI or Constable application open right now?',
      a: 'No. As at 11 September 2026 both 2025 recruitments were closed and awaiting selection, and no new window was open. The board’s tentative planner lists a women’s Sub-Inspector recruitment for December 2026 and the next common Constable recruitment for February 2027; a planner date is not a notification.',
    },
    {
      q: 'Is there negative marking in TNUSRB exams?',
      a: 'No. Neither the 2025 Sub-Inspector notification and addendum nor the Constable notification contains a deduction clause, and the board’s question booklet instructions state that a wrong, multiple or improperly shaded answer earns no marks for that question. Coaching material quoting a deduction is not describing this board.',
    },
    {
      q: 'What is the Tamil language eligibility test in Tamil Nadu Police recruitment?',
      a: 'An objective Tamil paper at tenth-standard state board level — 100 questions in 100 minutes for Sub-Inspector, 80 in 80 for the Grade-II posts — which must be passed at 40 per cent before the main answer sheet is evaluated. Its marks do not count towards selection; failing it ends the candidacy.',
    },
    {
      q: 'How is Tamil Nadu Police selection scored?',
      a: 'Out of 100. For Sub-Inspector: main written paper 70, physical efficiency test 15, viva-voce 10, special marks 5. For Constable, Jail Warder and Fireman: main written 70, physical efficiency 24, special marks 6, with no viva. The Tamil test, certificate verification, measurement and endurance run are qualifying and carry no marks.',
    },
    {
      q: 'What are the TNUSRB height and chest standards?',
      a: 'Men: 170 cm for OC, BC, BC(M), MBC and DNC candidates and 167 cm for SC, SC(A) and ST candidates, with a chest of 81 cm and 5 cm expansion. Women: 159 cm and 157 cm respectively, with no chest standard. Measurements are rounded to the nearest half-centimetre. Ex-servicemen and departmental-quota Sub-Inspector candidates are exempt.',
    },
    {
      q: 'How does the TNUSRB physical efficiency test scoring work?',
      a: 'Three compulsory events — rope climbing, a jump and a sprint for men; a jump, a throw and a sprint for women — each earning zero, one or two stars against published standards. For Sub-Inspector one star is 2 marks and two stars 5, for a maximum of 15; for the Grade-II posts one star is 4 and two stars 8, for a maximum of 24. Zero stars in an event does not eliminate a candidate.',
    },
    {
      q: 'What changed in the 2025 Sub-Inspector recruitment?',
      a: 'After a Supreme Court judgment in May 2025 required one common examination for open and departmental candidates, the board issued Addendum No. 1A/2025 in October: every candidate now sits the same written, endurance and efficiency tests and is scored on the same 100-mark total, the separate departmental law paper was deleted, and departmental candidates are exempt only from physical measurement.',
    },
    {
      q: 'What are the age limits for Tamil Nadu Police SI and Constable?',
      a: 'In the 2025 cycles, reckoned as on 1 July 2025: Sub-Inspector 20 to 30, with BC, BC(M), MBC and DNC to 32, SC, SC(A), ST and transgender candidates to 35, destitute widows to 37, and ex-servicemen and the departmental quota to 47. Constable 18 to 26, with BC and MBC to 28, SC, ST and transgender candidates to 31, destitute widows to 37 and ex-servicemen to 47.',
    },
    {
      q: 'What were the TNUSRB fees?',
      a: '₹500 for Sub-Inspector under the open or departmental quota, or ₹1,000 to apply under both; ₹250 for the Constable, Jail Warder and Fireman recruitment. Online payment only. Neither notification states a category-based exemption.',
    },
    {
      q: 'Does TNUSRB publish previous question papers?',
      a: 'Yes. The board’s archive holds the Sub-Inspector papers for 2019, 2022 and 2023 and the Constable papers for 2019, 2020 and 2022, each with its key. For the 2025 cycles it has so far posted the preliminary and final answer keys but not the question booklets.',
    },
  ],
}

/* ── TNPSC Departmental Examinations ────────────────────────────
   Two sessions a year, May and December; every test out of 100 with a pass
   mark of 45; split objective-and-descriptive tests that must be passed in
   both parts; and — unusually — open to anyone, in government service or not.
   The criminal-law tests moved to BNS, BNSS and BSA from the December 2024
   session. */
const TN_DEPT_SRC = {
  notifications: 'https://www.tnpsc.gov.in/English/DNotification.aspx',
  results: 'https://www.tnpsc.gov.in/english/DResultView.aspx',
  may2026: 'https://www.tnpsc.gov.in/Document/Department/English/1.%20Notification_ENGLISH_May26.pdf',
  annexure1: 'https://www.tnpsc.gov.in/Document/Department/English/5.%20ANNEXURE%20-%201%20-%20Instructions%20to%20candidates%20-%20May26.pdf',
  annexure2: 'https://www.tnpsc.gov.in/Document/Department/English/6.%20ANNEXURE%20-%20II%20-%20Syllabus%20-%20May26.pdf',
  annexure3: 'https://www.tnpsc.gov.in/Document/Department/English/7.%20ANNEXURE%20-%20III%20-%20Fees%20May26.pdf',
  allowedBooks: 'https://www.tnpsc.gov.in/static_pdf/departmental/deptl_list_of_alloweded_books_for_withbooks.pdf',
  oldPapers: 'https://www.tnpsc.gov.in/English/departmental-questions.html',
  finalKeys: 'https://www.tnpsc.gov.in/English/departmental_keys.html',
  bulletin: 'https://www.tnpsc.gov.in/English/departmental_bulletin.aspx',
}

const TN_DEPARTMENTAL = {
  slug: 'departmental-tests',
  path: '/government-exams/state/tamil-nadu/departmental-tests/',
  name: 'Tamil Nadu Departmental Examinations',
  fullName: 'TNPSC Departmental Examinations for government servants and others',
  authority: 'Tamil Nadu Public Service Commission (TNPSC)',
  official: OFFICIAL,
  seoTitle: 'TNPSC Departmental Exams: Sessions, Fees, Pass Marks & BNS',
  metaDescription:
    'TNPSC Departmental Examinations — May and December sessions, who may sit, ₹200 a test, the 45-mark pass rule, with-books rules and the BNS syllabus change.',
  lead: [
    'Departmental examinations are the qualifying tests Tamil Nadu government servants must pass for probation to be declared, for promotion, and for the increments their service rules make conditional on them. The commission conducts them in two sessions a year — May and December — and publishes the results as passes in its bulletin rather than as a merit list.',
    'Three things make the Tamil Nadu version distinctive. Nearly every test is open to anyone, in government service or not, on payment of the fee. Every test is set out of 100 with a pass mark of 45, and a test split between an objective and a descriptive part must be passed in both parts separately. And the commission has already rewritten its criminal-law tests for the Bharatiya Nyaya Sanhita and its companion codes — the old titles disappeared from the test list with the December 2024 session.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Public Service Commission'],
    ['Sessions', 'Two a year — May and December'],
    ['Latest', 'Notification No. 3/2026 for the May 2026 session; results published 10 September 2026'],
    ['Fee', '₹200 per test, plus a ₹30 registration fee'],
    ['Pass mark', '45 out of 100 in every test, and in each part of a split test'],
    ['Who may sit', 'Anyone aged 16 or over, in government service or not, for all but a handful of restricted tests'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The tests exist because state service rules make career events conditional on demonstrated knowledge of the rules an officer works under. A revenue officer must know the Revenue Test; an officer handling money the Account Test; a jail officer the criminal codes and the jail manual. The departmental examination certifies that knowledge, and until it does, probation stays undeclared and promotion waits. Because the tests are open to the public, a candidate preparing for a government post can pass them in advance.',
    },
    {
      type: 'p',
      text: 'The commission conducts the objective tests as computer-based tests and the descriptive tests as written examinations, over about a week in each session. Many tests are split — sixty per cent objective without books and forty per cent descriptive with books, or eighty and twenty, or forty and sixty — and each part is written on a different day. The with-books parts permit only books on the commission’s published list, with bare Acts and rules allowed from any publisher; a guide or a digest in the hall invalidates the answer book and can bar the candidate for three years.',
    },
    {
      type: 'list',
      title: 'The families of test',
      items: [
        { text: 'Account tests', note: 'for subordinate officers in two parts and for executive officers, set on the treasury and financial codes; the departmental test for Treasuries and Accounts; and the Panchayat Development Account Test.' },
        { text: 'Revenue and manual tests', note: 'the Revenue Test in three parts and the Tamil Nadu Government Office Manual Test — all now set as fully descriptive papers with books under a revised pattern.' },
        { text: 'Criminal-law tests', note: 'the Bharatiya Nyaya Sanhita and Bharatiya Nagarik Suraksha Sanhita at general-principles and detailed-application level, the Bharatiya Sakshya Adhiniyam, and the jail, probation and transport tests set on the same codes.' },
        { text: 'Departmental tests for specific services', note: 'registration, commercial taxes, cooperation and cooperative audit, forest, survey and land records, local fund audit, rural development, municipal administration, agriculture, animal husbandry, medical code and more — each set on that department’s own Acts and manuals.' },
        { text: 'Language and translation tests', note: 'the second and third class language tests in Tamil, the special and advanced language tests for the education department, the general educational test at SSLC standard, and the translation tests — the papers with restricted eligibility.' },
      ],
    },
    {
      type: 'note',
      title: 'Your service rules decide which tests you sit',
      text: 'There is no general list. The tests you must pass, the period within which you must pass them, and the consequence of not doing so are fixed by the service rules for your post. The commission publishes the scheme, syllabus, duration and pass mark of every test in an annexure to each notification, and a candidate who has already passed a test code must not apply for it again. Confirm the codes against your own rules before registering.',
    },
  ],
  stages: [
    {
      name: 'Notification and online application',
      mode: 'Per session, with one-time registration',
      detail:
        'The commission notifies each session with an application window of about three weeks. Candidates register once for departmental examinations, with Aadhaar linkage, and then apply per test; government servants give their employee number.',
    },
    {
      name: 'The examination',
      mode: 'Computer-based for objective parts; written for descriptive parts',
      detail:
        'Objective parts are computer-based tests with four-option questions; descriptive parts are handwritten. The two parts of a split test are held on different days across the session’s week. Question papers are set in Tamil and English, and answers may be written in either or both, except in the language and translation tests.',
    },
    {
      name: 'Tentative key and objections',
      mode: 'By email, within a week',
      detail:
        'The commission publishes tentative keys for the objective tests and the descriptive question papers, and accepts objections by email for a week with the evidence attached. Postal objections are not accepted.',
    },
    {
      name: 'Result',
      mode: 'Pass or fail, in the commission’s bulletin',
      detail:
        'Results are published on the commission’s website with a register-number lookup, and the detailed list of successful candidates appears in the commission’s e-bulletin. Requests for the cause of failure or for revaluation are not entertained.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The May 2026 session, Notification No. 3/2026, is complete: examinations ran from 22 May to 2 June 2026 with one further date on 21 June, tentative keys were published on 21 July with a week for objections, and the results were published on 10 September 2026. The December 2026 session had not been notified at the date checked; the last two December sessions were notified on 22 October and 7 November.`,
    },
    {
      type: 'table',
      caption: 'Recent sessions. The pattern is a notification about six weeks before the examination and a result about three months after it.',
      head: ['Session', 'Notified', 'Closing date', 'Examinations', 'Result'],
      rows: [
        ['May 2026 — No. 3/2026', '9 April 2026', '30 April 2026', 'Objective 22 to 26 May; descriptive 30 May to 2 June', '10 September 2026'],
        ['December 2025 — No. 17/2025', '22 October 2025', '11 November 2025', 'Objective 15 to 19 December; descriptive 27 to 30 December', '9 April 2026'],
        ['May 2025', '4 April 2025', '—', '19 to 29 May 2025', '—'],
        ['December 2024', '7 November 2024', '—', '20 to 29 December 2024', '—'],
      ],
    },
    {
      type: 'note',
      title: 'The criminal-law tests are set on BNS, BNSS and BSA',
      text: 'From the December 2024 session the commission renamed the criminal judicial tests: the tests formerly titled Indian Penal Code and Code of Criminal Procedure at general-principles and detailed-application level became the Bharatiya Nyaya Sanhita 2023 and Bharatiya Nagarik Suraksha Sanhita 2023 tests under the same codes, and the Indian Evidence Act test became the Bharatiya Sakshya Adhiniyam 2023 test. The jail tests, the probation branch tests, the transport department’s procedure test and the forest law syllabus were revised to match. A candidate preparing from the old codes is preparing for a test that no longer exists.',
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'TNPSC departmental examination notifications', href: TN_DEPT_SRC.notifications },
        { label: 'TNPSC departmental examination results', href: TN_DEPT_SRC.results },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Who may sit, from the May 2026 instructions to candidates. The openness is the point: most tests can be passed before joining service.',
      head: ['Tests', 'Who may sit them'],
      rows: [
        ['Almost every test', 'Any person aged 16 or over on the notification date, whether in government service or not, on payment of the fee.'],
        ['General Educational Test at SSLC standard', 'Restricted to government servants who lack the minimum general educational qualification, local body and panchayat employees, and other listed categories, with a certificate from the specified authority.'],
        ['Compendium of Office Orders test', 'The commission’s own staff only.'],
        ['Second Class Language Test in Tamil', 'Persons in, or aspiring to, government service who passed SSLC without Tamil or in a non-Tamil medium.'],
        ['Third Class Language Test', 'Viva-voce only, for Assistant Curators of the Government Museum and probationary Sub-Registrars and District Registrars.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees for the May 2026 session. Online payment only; nothing is refunded.',
      head: ['Charge', 'Amount', 'Notes'],
      rows: [
        ['Examination fee', '₹200 per test', 'Charged per test code. The two sections of Probation Branch Part II are compulsory together and charged as ₹400.'],
        ['Registration fee', '₹30', 'Charged once per application.'],
        ['Government servants', 'Pay the fee', 'Those eligible for exemption pay and claim reimbursement from their office.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'How a test is conducted. Every test is out of 100 with a pass mark of 45; a split test must be passed in each part separately.',
      head: ['Pattern', 'Objective part', 'Descriptive part', 'Total time'],
      rows: [
        ['100% objective', 'Computer-based, 2 hours 30 minutes, pass 45', '—', '2 hours 30 minutes'],
        ['80% objective, 20% descriptive', 'Without books, 2 hours, pass 36', 'With books, 30 minutes, pass 9', '2 hours 30 minutes'],
        ['60% objective, 40% descriptive', 'Without books, 1 hour 30 minutes, pass 27', 'With books, 1 hour, pass 18', '2 hours 30 minutes'],
        ['40% objective, 60% descriptive', 'Without books, 1 hour, pass 18', 'With books, 1 hour 30 minutes, pass 27', '2 hours 30 minutes'],
        ['100% descriptive', '—', 'Written, with books where the scheme says so, 2 hours 30 minutes, pass 45', '2 hours 30 minutes'],
      ],
    },
    {
      type: 'list',
      title: 'Which pattern applies to which tests',
      items: [
        { text: 'Account Test for Subordinate Officers Parts I and II, Account Test for Executive Officers, and the registration tests', note: '60 per cent objective without books, 40 per cent descriptive with books.' },
        { text: 'Civil and Criminal Judicial Test Parts I and II, the commercial taxes tests, and the police department’s junior assistant test', note: '80 per cent objective without books, 20 per cent descriptive with books.' },
        { text: 'Revenue Test Parts I, II and III and the Government Office Manual Test', note: 'a revised pattern of 100 per cent descriptive with books.' },
        { text: 'The BNS, BNSS and BSA tests', note: '100 per cent descriptive.' },
        { text: 'The jail and probation branch tests', note: '100 per cent objective, computer-based.' },
      ],
    },
    {
      type: 'note',
      title: 'What “with books” permits',
      text: 'Only books on the commission’s published list. Books containing only bare Acts and rules, without notes, commentaries or explanations, need not be government publications, and for the judicial tests the same applies to bare Acts. Photocopies are allowed only when recommended by the head of department and attested by a Group A officer with a page count. Government publications with an index are allowed. Guides, digests, summaries and notes are prohibited — a candidate found with one has the answer book invalidated, is expelled, and is liable to debarment for three years.',
    },
    {
      type: 'p',
      text: 'The commission does not entertain requests for the cause of failure or for revaluation, though it reserves the right to revalue an answer book of its own motion. The only marks-related process is the objection window on the tentative key. A candidate who has passed a test code must not apply for it again, and the commission takes action where it finds one has.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s departmental examination pages and the May 2026 notification with its three annexures. Fees, eligibility, the pass rule, the with-books rule and the BNS renaming are quoted from those documents. The commission publishes previous question papers only for the 2016 and 2017 sessions, and final keys for the December 2018 to December 2023 sessions; recent papers exist as the descriptive question papers released with each session’s tentative key.`,
    },
    {
      type: 'links',
      title: 'Official notifications, syllabus and results',
      items: [
        { label: 'Departmental examination notifications', href: TN_DEPT_SRC.notifications },
        { label: 'Notification No. 3/2026 — May 2026 session', href: TN_DEPT_SRC.may2026 },
        { label: 'Annexure I — instructions to candidates', href: TN_DEPT_SRC.annexure1 },
        { label: 'Annexure II — scheme and syllabus of every test', href: TN_DEPT_SRC.annexure2 },
        { label: 'Annexure III — test codes and fees', href: TN_DEPT_SRC.annexure3 },
        { label: 'List of books allowed for with-books tests', href: TN_DEPT_SRC.allowedBooks },
        { label: 'Departmental examination results', href: TN_DEPT_SRC.results },
        { label: 'Departmental examination e-bulletin', href: TN_DEPT_SRC.bulletin },
        { label: 'Previous question papers', href: TN_DEPT_SRC.oldPapers },
        { label: 'Final answer keys by session', href: TN_DEPT_SRC.finalKeys },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'TNPSC departmental examination syllabus — what the account, revenue, criminal-law, registration, survey and language tests examine, under the current annexure.',
      lead: [
        'Each test is set on a named document — a code, a manual, an Act. The commission publishes the syllabus of every test code in one annexure per session.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Account tests',
              'The Tamil Nadu Financial Code, Treasury Code, Account Code and the fundamental rules — budget, drawal and disbursement, audit objections, pay, allowances, advances and pensions — set in two parts for subordinate officers and one for executive officers, sixty per cent objective and forty descriptive with books.',
            ],
            [
              'Revenue tests and the Office Manual test',
              'The revenue standing orders, land administration and the district office procedure in three parts, and the Tamil Nadu Government Office Manual — all now fully descriptive with books.',
            ],
            [
              'Criminal-law tests',
              'The Bharatiya Nyaya Sanhita 2023 and the Bharatiya Nagarik Suraksha Sanhita 2023, each at general-principles and detailed-application level, with the amending Acts, the Probation of Offenders Act, the Juvenile Justice Act and the workplace harassment Act inside the general-principles syllabus; and the Bharatiya Sakshya Adhiniyam 2023. The jail, probation and transport tests are set on the same codes.',
            ],
            [
              'Departmental tests',
              'Registration in three groups; commercial taxes in three parts; cooperation and cooperative audit; forest law and forest revenue; survey and land records for field surveyors, sub-inspectors and deputy inspectors; local fund audit and subordinate accounts; rural development and panchayat accounts; municipal administration in four papers; the medical code; and the tests of the agriculture, animal husbandry and marketing departments.',
            ],
            [
              'Language and translation tests',
              'The second class language test in Tamil with a written part and viva; the third class language test by viva alone; the special and advanced language tests in Tamil for the education department; the general educational test at SSLC standard; and translation tests in six languages.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Annexure II — scheme and syllabus of every test, May 2026', href: TN_DEPT_SRC.annexure2 },
            { label: 'List of books allowed', href: TN_DEPT_SRC.allowedBooks },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'TNPSC departmental examination pattern — computer-based objective parts, written descriptive parts, the 45-mark pass rule and the with-books list.',
      lead: [
        'A standard to meet, not a field to beat: 45 out of 100, in every part of every test.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules that apply across every test.',
          head: ['Rule', 'What it means'],
          rows: [
            ['Pass mark 45 out of 100', 'In every test, and in each part of a split test separately — 27 and 18 in a 60/40 test, 36 and 9 in an 80/20 test.'],
            ['Objective parts are computer-based', 'Four-option questions, shuffled, answered by mouse, with a rough sheet provided and a mock test on the commission’s site.'],
            ['Descriptive parts are handwritten', 'On a different day from the objective part, in English or Tamil or both.'],
            ['With books means the allowed list', 'Bare Acts from any publisher; attested photocopies with a page count; no guides, digests or notes.'],
            ['No revaluation', 'And no request for the cause of failure. Objections to the tentative key by email within a week are the only remedy.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'TNPSC departmental examination previous papers — the 2016 and 2017 papers, the keys from 2018 to 2023, and the descriptive papers released with each session.',
      lead: [
        'A thin archive of old papers, a fuller one of keys, and — the useful part — every session’s descriptive question papers, released with the tentative key.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The commission’s previous-papers page holds the May 2016, May 2017 and December 2017 sessions. Its keys page holds the final keys for every session from December 2018 to December 2023. For each recent session it releases the descriptive question papers alongside the tentative keys, which is where a candidate for a written test finds the last three years of actual papers.',
        },
        {
          type: 'list',
          title: 'How to practise',
          items: [
            { text: 'For a descriptive with-books test, work the released papers with the allowed books', note: 'the skill is finding the provision under time, and it can only be rehearsed with the permitted material on the desk.' },
            { text: 'For an objective test, use the keys with the old papers', note: 'the 2016 and 2017 papers with their keys show the question habits; the recent keys show the answer distribution.' },
            { text: 'For the criminal-law tests, work only from the new codes', note: 'the papers before December 2024 were set on the old Acts and are useful for question style, not content.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Previous question papers', href: TN_DEPT_SRC.oldPapers },
            { label: 'Final answer keys by session', href: TN_DEPT_SRC.finalKeys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'TNPSC departmental examination mock tests — rehearsing each part of a split test to its own pass mark, with only the allowed books.',
      lead: [
        'A mock for a split test is two sittings, each scored to its own threshold.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by test type',
          items: [
            { title: 'Objective parts — on screen, to time', text: 'The commission’s own mock test for the interface, then question sets written from the syllabus, scored against the part’s pass mark.' },
            { title: 'Descriptive parts — with the allowed books, by hand', text: 'The released papers from recent sessions, the bare Act on the desk, a stopwatch. The measure is how many questions you reached.' },
            { title: 'Both parts in one week', text: 'As the examination schedules them, to learn the switch between recall and reference.' },
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
        'TNPSC departmental examination preparation — choosing the right test codes, passing them before you need them, and preparing a with-books paper.',
      lead: [
        'Because the tests are open to all, the best time to pass them is before the service rules require it.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From service rules to pass',
          items: [
            { title: 'Identify the codes from your rules, or from the post you want', text: 'The tests prescribed for a post are in its service rules. A candidate for that post can sit them now.' },
            { title: 'Read the scheme in Annexure II', text: 'The pattern, the split, the with-books parts and the pass marks are set out per test code.' },
            { title: 'Get the allowed books', text: 'The commission publishes the list. For the criminal-law tests, the new codes.' },
            { title: 'Register once, apply in the window', text: 'About three weeks, online only, ₹200 a test plus ₹30. Government servants pay and reclaim.' },
            { title: 'Prepare each part to its own pass mark', text: 'Recall for the without-books objective part; navigation for the with-books descriptive part.' },
          ],
        },
        {
          type: 'note',
          title: 'Two sessions a year, so a failed part costs six months',
          text: 'A split test must be passed in both parts; a candidate who passes the objective part and fails the descriptive sits the whole test again in the next session. Prepare both parts to a margin.',
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'TNPSC departmental examination study material — the codes, manuals and Acts each test is set on, and the allowed-books list.',
      lead: [
        'The material is the document the test is set on, in an edition the commission allows in the hall.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What to work from, by test family.',
          head: ['Test family', 'Source', 'Note'],
          rows: [
            ['Account tests', 'The Tamil Nadu Financial, Treasury and Account Codes and the fundamental rules', 'From the allowed-books list for the with-books part.'],
            ['Revenue and Office Manual tests', 'The revenue standing orders and the Government Office Manual', 'Fully descriptive with books; navigation is the skill.'],
            ['Criminal-law, jail, probation and transport tests', 'The Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita and Bharatiya Sakshya Adhiniyam 2023, with the listed allied Acts', 'The old codes are no longer the syllabus.'],
            ['Departmental tests', 'The department’s own Act, rules and manual as the annexure names them', 'Per test code.'],
            ['Language tests', 'A Tamil grammar and composition reference, and dictation and translation practice', 'Written and viva parts.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Annexure II — syllabus of every test', href: TN_DEPT_SRC.annexure2 },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the next TNPSC departmental examination session?',
      a: 'The commission holds two sessions a year, May and December. The May 2026 session is complete, with results published on 10 September 2026. As at 11 September 2026 the December 2026 session had not been notified; the last two December sessions were notified on 22 October 2025 and 7 November 2024.',
    },
    {
      q: 'Can I sit TNPSC departmental examinations if I am not a government servant?',
      a: 'Yes. Almost every test is open to any person aged 16 or over, whether in government service or not, on payment of the fee. The exceptions are the General Educational Test at SSLC standard, the commission’s own compendium test, the second class language test in Tamil and the third class language test, each restricted to listed categories.',
    },
    {
      q: 'What is the fee for TNPSC departmental examinations?',
      a: '₹200 per test plus a ₹30 registration fee, paid online and not refunded. The two sections of Probation Branch Part II are compulsory together and charged as ₹400. Government servants eligible for exemption pay the fee and claim reimbursement from their office.',
    },
    {
      q: 'What are the pass marks for TNPSC departmental examinations?',
      a: '45 out of 100 in every test. Where a test is split between an objective and a descriptive part, each part must be passed separately in proportion — 27 and 18 in a 60/40 test, 36 and 9 in an 80/20 test, 18 and 27 in a 40/60 test.',
    },
    {
      q: 'What does “with books” mean in TNPSC departmental examinations?',
      a: 'That only books on the commission’s published list may be used. Bare Acts and rules without notes or commentary may be from any publisher; photocopies are allowed if recommended by the head of department and attested by a Group A officer with a page count; government publications with an index are allowed. Guides, digests, summaries and notes are prohibited, and a candidate found with one has the answer book invalidated and is liable to a three-year debarment.',
    },
    {
      q: 'Have the TNPSC criminal-law departmental tests changed to BNS?',
      a: 'Yes, from the December 2024 session. The tests formerly titled Indian Penal Code and Code of Criminal Procedure became the Bharatiya Nyaya Sanhita 2023 and Bharatiya Nagarik Suraksha Sanhita 2023 tests at general-principles and detailed-application level, and the Indian Evidence Act test became the Bharatiya Sakshya Adhiniyam 2023 test. The jail, probation, transport and forest syllabuses were revised to match.',
    },
    {
      q: 'Are TNPSC departmental examinations online?',
      a: 'The objective parts are computer-based tests; the descriptive parts are handwritten examinations. The two parts of a split test are held on different days within the session. Question papers are set in Tamil and English, and answers may be written in either or both except in the language and translation tests.',
    },
    {
      q: 'Can I get revaluation or a memorandum of marks for a TNPSC departmental examination?',
      a: 'No. The commission states that requests for the cause of failure or for revaluation will not be complied with, though it reserves the right to revalue an answer book itself. The only marks-related process is the objection window on the tentative key, by email within a week of its publication.',
    },
  ],
}

/* ── Tamil Nadu MRB ─────────────────────────────────────────────
   The Medical Services Recruitment Board fills the state's health posts, and
   it selects in two different ways: a written examination for the
   professional posts, and a marks-based weighting of qualifications for the
   paramedical and support posts. Both begin with a Tamil eligibility test or
   a Tamil qualification. */
const TN_MRB_SRC = {
  board: 'https://mrb.tn.gov.in/',
  notifications: 'https://mrb.tn.gov.in/content.php?menu_id=MTkw&dept_id=ODAw&lang=MQ==',
  results: 'https://mrb.tn.gov.in/content.php?menu_id=MjI0&dept_id=ODAw&lang=MQ==',
  questionBank: 'https://mrb.tn.gov.in/content.php?menu_id=MjA2&dept_id=ODAw&lang=MQ==',
  syllabus: 'https://mrb.tn.gov.in/sub_page_content.php?menu_id=MTk2&submenu_id=Mzk5&dept_id=ODAw&lang=MQ==',
  planner: 'https://mrb.tn.gov.in/uploads/tami_800/subpage_files/Updated%20Annual_Planner%2002.07.2026.pdf',
  asg2025: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/ASGNotification2025.pdf',
  asgPsl: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/ASG_2025_PSL_1071.pdf',
  nursingAssistant: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/NotificationforthepostofNursingAssistantGradeII.pdf',
  pharmacist: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/Pharmacist_Notification_2025.pdf',
  healthInspector: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/Notification_Health_Inspector_Grade_II.pdf',
  labTechnician: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/LT_G2_MSS_10072025.pdf',
  vhn2023: 'https://mrb.tn.gov.in/uploads/tami_800/content_pdf/VHN_Notification_2023.pdf',
  asgSyllabus: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/Syllabus_Assistant_Surgeon_Exam.pdf',
  pharmacistSyllabus: 'https://mrb.tn.gov.in/departments_cms/uploads/tami_800/content_pdf/Pharmacist_Syllabus.pdf',
}

const TN_MRB = {
  slug: 'mrb-recruitment',
  path: '/government-exams/state/tamil-nadu/mrb-recruitment/',
  name: 'Tamil Nadu MRB Recruitment',
  fullName: 'Tamil Nadu Medical Services Recruitment Board — medical and health posts',
  authority: 'Tamil Nadu Medical Services Recruitment Board (MRB)',
  official: 'mrb.tn.gov.in',
  seoTitle: 'TN MRB 2026: Assistant Surgeon, Nurse & Paramedical Posts',
  metaDescription:
    'Tamil Nadu MRB — Assistant Surgeon, pharmacist, health inspector, nursing and VHN recruitment: the two selection methods, Tamil test, fees and the 2026 planner.',
  lead: [
    'The Medical Services Recruitment Board fills the state’s health service: Assistant Surgeons for the hospitals, pharmacists, laboratory technicians, health inspectors, nursing assistants, village health nurses and the dozens of paramedical and support posts around them. It notifies post by post rather than in a combined examination, and in 2025 it issued twenty-three notifications.',
    'It selects in two different ways, and which one applies depends on the post. The professional posts — Assistant Surgeon, pharmacist, health inspector — sit a Tamil eligibility test and then a written subject examination with no negative marking and no interview. The paramedical and support posts — nursing assistant, laboratory technician, village health nurse — are selected on a weighted percentage of their qualification, HSC and SSLC marks, with no examination at all.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Medical Services Recruitment Board'],
    ['Current status', 'No application open at 11 September 2026; the board’s 2026 planner lists 5,317 tentative posts, many under interim stay'],
    ['Professional posts', 'Tamil eligibility test at 40%, then a 100-mark subject examination; no negative marking; no interview'],
    ['Paramedical posts', 'Marks-based — a weighted percentage of qualification, HSC and SSLC marks; no examination'],
    ['Largest recent', 'Assistant Surgeon (General) 2025 — 1,100 posts, examined January 2026, provisional list March 2026'],
    ['Fee', '₹500 or ₹1,000 for professional posts; ₹300 or ₹600 for paramedical, by category'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The board’s notifications share a frame — an online application, a Tamil requirement, a category-based age rule under which the reserved communities have no upper limit, and a provisional selection list published subject to pending writ petitions — but divide on the selection method. For a post with a professional degree and a council registration, the board examines: a Tamil eligibility test at tenth-standard level that must be passed at 40 per cent and is then discarded, followed by a two-hour subject paper of 100 questions at the level of the qualifying degree, set in English, with no negative marking, normalised across sessions, and with no oral test.',
    },
    {
      type: 'p',
      text: 'For a post with a certificate or diploma qualification, the board does not examine. It weights the marks a candidate already holds — sixty per cent for the nursing assistant certificate and forty for SSLC, or fifty per cent for a laboratory technician’s diploma with thirty for HSC and twenty for SSLC — and ranks on the result. The Tamil requirement is met by evidence at certificate verification rather than by a test. A candidate for these posts cannot improve their position by preparing; they can only apply correctly and hold the right documents.',
    },
    {
      type: 'list',
      title: 'What sets the board apart',
      items: [
        { text: 'No upper age limit for reserved communities', note: 'SC, SC(A), ST, MBC, DNC, BC and BC(M) candidates have no maximum age in the board’s notifications; the limit applies to others only, at 32 to 42 by post.' },
        { text: 'Two selection methods', note: 'a written examination for professional posts, a marks-based weighting for paramedical posts. The notification says which.' },
        { text: 'Tamil as a gate', note: 'a 50-mark, one-hour Tamil eligibility test at 40 per cent before the subject paper for examined posts; a Tamil qualification produced at verification for the others. Differently-abled candidates are exempt from the test.' },
        { text: 'COVID duty incentive marks', note: 'two to five marks in the examined posts for candidates who served in COVID duties for six months or more, under a 2023 government order.' },
        { text: 'A published annual planner', note: 'with tentative post counts and status per post, updated through the year. It records which recruitments are under interim stay.' },
      ],
    },
    {
      type: 'note',
      title: 'Read the notification for the selection method before preparing',
      text: 'Preparation for a marks-based post is document preparation, not examination preparation — there is no paper to sit. Preparation for an examined post is a Tamil test and a subject paper at degree standard. A candidate who does not know which kind of post they are applying for cannot know what to do next. The notification states the scheme of selection in a numbered paragraph; read that paragraph first.',
    },
  ],
  stages: [
    {
      name: 'Notification and online application',
      mode: 'Per post, about three weeks',
      detail:
        'The board notifies each post separately with its own portal and closing date. The qualification, council registration and Tamil requirement must be held on the notification date.',
    },
    {
      name: 'Tamil eligibility test — examined posts',
      mode: 'Objective, 50 marks, one hour, qualifying at 40%',
      detail:
        'At tenth-standard level, sat before the subject paper on the same day. Its marks are not counted for ranking. Differently-abled candidates are exempt.',
    },
    {
      name: 'Subject examination — examined posts',
      mode: 'Objective, 100 questions, 2 hours, English',
      detail:
        'At the level of the qualifying degree, with minimum qualifying marks of 30 for SC, SC(A) and ST candidates and 35 for others. No negative marking. Scores are normalised across sessions. COVID incentive marks are added.',
    },
    {
      name: 'Marks-based ranking — paramedical posts',
      mode: 'Weighted percentage, no examination',
      detail:
        'The qualification certificate or diploma, HSC and SSLC marks are weighted in the proportions the notification sets and the candidates ranked on the result, with incentive marks where applicable.',
    },
    {
      name: 'Certificate verification and provisional selection',
      mode: 'Documents, then a published list',
      detail:
        'Original certificates including council registration and evidence of Tamil are verified, and a provisional selection list is published by number and date, subject to the outcome of pending writ petitions. There is no interview for any post.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No MRB application window was open. The most recent notification, No. 02/MRB/2026 for six Therapeutic Assistant posts, closed on 11 February 2026. The board’s annual planner, updated on 2 July 2026, lists 5,317 tentative posts across twenty-five lines, records a provisional selection list for eight of them, and marks fourteen as under an interim stay of the High Court in two writ petitions of 2026.`,
    },
    {
      type: 'table',
      caption: 'The recruitments that have moved furthest, with their status on the board’s site at the date checked.',
      head: ['Post', 'Notification', 'Vacancies', 'Status'],
      rows: [
        ['Assistant Surgeon (General)', 'No. 17/MRB/2025, 21 November 2025', '1,100', 'Examined 25 January 2026; provisional selection list 11 March 2026, subject to pending writ petitions'],
        ['Nursing Assistant Grade-II', 'No. 01/MRB/2026, 19 January 2026', '999', 'Marks-based; provisional selection list of 961 candidates published 9 September 2026, subject to pending writ petitions, despite the planner recording an interim stay'],
        ['Health Inspector Grade-II', 'No. 16/MRB/2025, 27 October 2025', '1,429 in the planner', 'Examined; provisional selection list 13 January 2026'],
        ['Assistant Surgeon with speciality', 'No. 22/MRB/2025', '299', 'Provisional selection list 5 March 2026'],
        ['Pharmacist', 'No. 04/MRB/2025, 17 February 2025', '425 notified; 630 in the planner', 'Applications closed March 2025; the planner records the recruitment as work in progress and no examination date was found'],
        ['Laboratory Technician Grade-II', 'No. 11/MRB/2025, 10 July 2025', '60', 'Marks-based; work in progress'],
        ['Village Health Nurse', 'No. 10/MRB/2023, 11 October 2023', '2,250', 'Marks-based; revised provisional list published, with a further 160 posts in the planner under stay'],
      ],
    },
    {
      type: 'note',
      title: 'Fourteen planner lines are under interim stay',
      text: 'The planner records an interim stay in two 2026 writ petitions against the Nursing Assistant, Radiographer, Dental Mechanic, Pharmacist (Homoeopathy), Dark Room Assistant, Therapeutic Assistant, Refractionist, Grief Counsellor, Radiotherapy Technician, Ophthalmic Assistant, Village Health Nurse and Skilled Assistant lines. The board nonetheless published provisional lists for the Dental Mechanic and Nursing Assistant posts in September 2026, each expressly subject to the petitions, which suggests the stay no longer blocked those two. The orders themselves are not on the board’s judgments page, and the current position of the petitions was not found.',
    },
    {
      type: 'note',
      title: 'No Staff Nurse notification since 2019',
      text: 'The board’s notification list shows the last general Staff Nurse recruitment as No. 02/MRB/2019, with a 2022 notification for nurses in the differently-abled category. The Village Health Nurse and Nursing Assistant posts are different cadres with different qualifications. A candidate holding a nursing degree or diploma and waiting for a Staff Nurse notification is waiting for something the board has not issued in seven years; the planner for 2026 does not list one.',
    },
    {
      type: 'links',
      title: 'Check the board directly',
      items: [
        { label: 'MRB notifications', href: TN_MRB_SRC.notifications },
        { label: 'MRB results and provisional selection lists', href: TN_MRB_SRC.results },
        { label: 'Annual recruitment planner 2026', href: TN_MRB_SRC.planner },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility by post, from the most recent notification for each. Age is reckoned as on 1 July of the notification year; reserved communities have no upper limit.',
      head: ['Post', 'Qualification', 'Upper age for others', 'Fee — SC, SC(A), ST, DAP / others'],
      rows: [
        ['Assistant Surgeon (General)', 'MBBS with twelve months’ internship, registered with the Tamil Nadu Medical Council on the notification date', '37; DAP 47; ex-servicemen 48', '₹500 / ₹1,000'],
        ['Pharmacist', 'D.Pharm, B.Pharm or Pharm.D, with Tamil Nadu Pharmacy Council registration kept alive', '32; DAP 42; ex-servicemen 50', '₹500 / ₹1,000'],
        ['Health Inspector Grade-II', 'HSC with biology, Tamil as a subject in SSLC, and the two-year multipurpose health worker or health inspector course', 'As notified', '₹300 / ₹600'],
        ['Laboratory Technician Grade-II', 'The two-year diploma in medical laboratory technology from the King Institute or a state-recognised institution, or the one-year certificate', '32; DAP 42; ex-servicemen 48', '₹300 / ₹600'],
        ['Nursing Assistant Grade-II', 'SSLC and the nursing assistant training certificate from a government medical institution in the state', '34; DAP 44', '₹300 / ₹600'],
        ['Village Health Nurse', 'Women only; HSC and the multipurpose health worker or ANM course, registered with the state nurses and midwives council, and fit for camp life', '42; DAP 52; destitute widows 59', '₹300 / ₹600'],
      ],
    },
    {
      type: 'list',
      title: 'The conditions that recur',
      items: [
        { text: 'Council registration on the notification date', note: 'medical, pharmacy or nursing council as the post requires, and kept alive. A registration dated after the notification does not qualify.' },
        { text: 'Tamil, by test or by evidence', note: 'the examined posts sit a Tamil eligibility test; the marks-based posts produce evidence at verification — Tamil in SSLC, SSLC in Tamil medium, or the second class language test.' },
        { text: 'Government service can disqualify', note: 'in the Nursing Assistant notification, non-reserved applicants with five or more years of government service are ineligible.' },
        { text: 'Fees are not refunded', note: 'and are charged per post, so applying to several notifications costs each fee.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The examined posts. The Tamil test gates the subject paper and is then discarded; the subject paper alone ranks.',
      head: ['Component', 'Format', 'Marks', 'Rule'],
      rows: [
        ['Tamil language eligibility test', 'Objective, tenth-standard level, one hour', '50', '40% to qualify, all categories; not counted for ranking; differently-abled candidates exempt'],
        ['Subject examination', 'Objective, 100 questions, two hours, English, at the level of the qualifying degree', '100', 'Minimum 30 for SC, SC(A) and ST; 35 for others. No negative marking. Normalised across sessions.'],
        ['COVID duty incentive', 'On certificate', '2 to 5', 'Six to twelve months 2; twelve to eighteen 3; eighteen to twenty-four 4; over twenty-four 5'],
        ['Interview', '—', '—', 'None for any post'],
      ],
    },
    {
      type: 'table',
      caption: 'The marks-based posts. No examination; the notification fixes the weights, under government orders of 2014 and 2015.',
      head: ['Post', 'Weighting'],
      rows: [
        ['Nursing Assistant Grade-II', 'Nursing assistant certificate 60%, SSLC 40%. Where the course awards no marks, the SSLC or HSC percentage alone is used.'],
        ['Laboratory Technician Grade-II', 'Diploma 50%, HSC 30%, SSLC 20%'],
        ['Village Health Nurse', 'Certificate or diploma 50%, HSC 30%, SSLC 20%, with COVID incentive marks'],
        ['Therapeutic Assistant', 'Diploma, HSC and SSLC weighted as the notification sets'],
      ],
    },
    {
      type: 'note',
      title: 'No negative marking, no interview, and marks published',
      text: 'The Assistant Surgeon and Pharmacist notifications state in terms that there is no negative mark for a wrong answer and no oral test for the post, and that the marks of all candidates will be hosted. Where the examination runs in more than one session, scores are normalised under a published formula. Requests for revaluation or the cause of failure are not complied with.',
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan that depends on which kind of post you want',
      items: [
        { text: 'Establish the selection method first', note: 'examined or marks-based. It changes everything that follows.' },
        { text: 'Examined posts: prepare tenth-standard Tamil as a subject', note: 'the test is one hour, 50 marks and 40 per cent, and it is marked before the subject paper. A strong MBBS graduate who has not prepared it can be removed by it.' },
        { text: 'Examined posts: work the board’s published papers', note: 'the question bank holds the Assistant Surgeon 2024 subject and Tamil papers with keys, and papers for several other posts. They show the level and the phrasing.' },
        { text: 'Examined posts: answer everything', note: 'no negative marking, so a blank is the only way to lose a mark.' },
        { text: 'Marks-based posts: assemble the documents', note: 'the qualification marksheet, HSC and SSLC in the form the notification asks for, the council registration, and evidence of Tamil. There is nothing else to prepare and no way to improve the rank.' },
        { text: 'Hold the COVID duty certificate if you have one', note: 'two to five marks in an examined post, on a certificate in the prescribed form.' },
        { text: 'Watch the planner, not the rumour', note: 'the board updates it through the year with post counts and status, including which lines are under stay.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the board’s notifications, provisional selection lists and the planner updated on 2 July 2026. Qualifications, age, fees and the scheme of selection are quoted from the notifications named below. The board publishes question papers and keys for its examined posts on a question-bank page and syllabuses on a syllabus page; the address with a leading www returned an error at the date checked, and the working host is mrb.tn.gov.in.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'MRB home', href: TN_MRB_SRC.board },
        { label: 'MRB notifications', href: TN_MRB_SRC.notifications },
        { label: 'MRB results and provisional selection lists', href: TN_MRB_SRC.results },
        { label: 'Annual recruitment planner, updated 2 July 2026', href: TN_MRB_SRC.planner },
        { label: 'Assistant Surgeon (General) notification No. 17/MRB/2025', href: TN_MRB_SRC.asg2025 },
        { label: 'Assistant Surgeon provisional selection list, 11 March 2026', href: TN_MRB_SRC.asgPsl },
        { label: 'Nursing Assistant Grade-II notification No. 01/MRB/2026', href: TN_MRB_SRC.nursingAssistant },
        { label: 'Pharmacist notification No. 04/MRB/2025', href: TN_MRB_SRC.pharmacist },
        { label: 'Health Inspector Grade-II notification No. 16/MRB/2025', href: TN_MRB_SRC.healthInspector },
        { label: 'Laboratory Technician Grade-II notification No. 11/MRB/2025', href: TN_MRB_SRC.labTechnician },
        { label: 'Village Health Nurse notification No. 10/MRB/2023', href: TN_MRB_SRC.vhn2023 },
        { label: 'MRB question bank — papers and keys', href: TN_MRB_SRC.questionBank },
        { label: 'MRB syllabus page', href: TN_MRB_SRC.syllabus },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Tamil Nadu MRB syllabus — the Tamil eligibility test, the subject papers for Assistant Surgeon, pharmacist and health inspector, and the marks-based posts.',
      lead: [
        'For the examined posts, a Tamil test at tenth standard and a subject paper at the level of the degree. For the rest, no syllabus — a weighting of marks already earned.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Tamil language eligibility test',
              'Tamil to the tenth standard of the state board — grammar, vocabulary, comprehension, literature and usage. One hour, 50 marks, 40 per cent to pass, and then discarded.',
            ],
            [
              'Assistant Surgeon (General) — subject paper',
              'The MBBS curriculum at undergraduate level across the clinical and pre-clinical subjects, set as 100 objective questions in two hours in English. The board publishes the syllabus and the 2024 paper with its key.',
            ],
            [
              'Pharmacist — subject paper',
              'The pharmacy curriculum at the level of the qualifying degree or diploma — pharmaceutics, pharmacology, pharmaceutical chemistry, pharmacognosy, hospital and clinical pharmacy, pharmacy law. The board publishes a syllabus.',
            ],
            [
              'Health Inspector Grade-II — subject paper',
              'The multipurpose health worker and health inspector course at certificate level — community health, sanitation, communicable disease control, health programmes, first aid — set in Tamil and English.',
            ],
            [
              'Marks-based posts',
              'No syllabus. The nursing assistant certificate, the laboratory technology diploma, the ANM course and the HSC and SSLC results are weighted as the notification sets.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'MRB syllabus page', href: TN_MRB_SRC.syllabus },
            { label: 'Assistant Surgeon syllabus', href: TN_MRB_SRC.asgSyllabus },
            { label: 'Pharmacist syllabus', href: TN_MRB_SRC.pharmacistSyllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Tamil Nadu MRB exam pattern — the Tamil gate and the 100-mark subject paper for examined posts, the weighted-marks formula for the rest, and common rules.',
      lead: [
        'Two schemes. One is an examination with a gate in front of it; the other is arithmetic on marks already held.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Which scheme applies to which posts, from recent notifications.',
          head: ['Scheme', 'Posts', 'What ranks'],
          rows: [
            ['Examined', 'Assistant Surgeon (General and speciality), Pharmacist, Health Inspector Grade-II, the Indian medicine officer posts, Senior Analyst, Physiotherapist', 'The 100-mark subject paper plus incentive marks; the Tamil test qualifies only'],
            ['Marks-based', 'Nursing Assistant Grade-II, Laboratory Technician Grade-II, Village Health Nurse, Therapeutic Assistant, Dental Mechanic and most paramedical posts', 'A weighted percentage of qualification, HSC and SSLC marks, plus incentive marks'],
          ],
        },
        {
          type: 'list',
          title: 'Rules common to both',
          items: [
            { text: 'No interview', note: 'for any post.' },
            { text: 'No negative marking', note: 'stated in the examined-post notifications.' },
            { text: 'No upper age for reserved communities', note: 'and category-based limits for others.' },
            { text: 'Provisional lists subject to writ petitions', note: 'every recent list is published with the petitions it is subject to named on its face.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Tamil Nadu MRB previous papers — the board’s question bank of subject and Tamil papers with keys for its examined posts.',
      lead: [
        'The board publishes its papers. For the examined posts, the question bank is the practice material.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The question-bank page holds question papers and keys for the Assistant Surgeon (General) 2024 examination — the subject paper and the Tamil paper — the Indian medicine officer papers of 2025 in Siddha, Ayurveda, Unani and Yoga and Naturopathy, the Physiotherapist Grade-II and Senior Analyst papers, and others, over forty documents in all. For the marks-based posts there is nothing to practise and no paper to publish.',
        },
        {
          type: 'list',
          title: 'How to use the question bank',
          items: [
            { text: 'Sit the Tamil paper first', note: 'it shows the level of the gate, and a candidate who clears it comfortably on a past paper will clear it on the day.' },
            { text: 'Work the subject paper to time', note: '100 questions in two hours, every question answered, then checked against the key.' },
            { text: 'Note the distribution across subjects', note: 'the Assistant Surgeon paper spreads across the MBBS curriculum; the distribution in the published paper is the best guide to the weighting.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'MRB question bank', href: TN_MRB_SRC.questionBank },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Tamil Nadu MRB mock tests — rehearsing the Tamil gate and the two-hour subject paper for examined posts.',
      lead: [
        'For examined posts, two sittings in one morning: a Tamil test, then a subject paper. Rehearse them in that order.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine for examined posts',
          items: [
            { title: 'A Tamil test fortnightly', text: 'Fifty questions in an hour from the board’s published Tamil paper and the tenth-standard textbooks. Clear 40 per cent every time.' },
            { title: 'A subject paper weekly', text: '100 questions in two hours at the level of your degree, from the question bank and the syllabus. Answer everything; review the guesses.' },
            { title: 'The two together, once a month', text: 'Tamil at nine, subject at a quarter past ten, as the board scheduled the 2026 Assistant Surgeon examination.' },
          ],
        },
        {
          type: 'note',
          title: 'There is no mock for a marks-based post',
          text: 'Nursing Assistant, Laboratory Technician and Village Health Nurse candidates are ranked on marks already earned. The only rehearsal is checking the documents against the notification’s list.',
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Healthcare exam mock tests', to: '/government-exams/healthcare/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Tamil Nadu MRB preparation — for examined posts, Tamil and the subject paper; for marks-based posts, the documents; for both, the planner.',
      lead: [
        'The board tells you which kind of post it is. The preparation follows from that.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan by post type',
          items: [
            { title: 'Examined posts — Tamil now, subject continuously', text: 'Tenth-standard Tamil as a subject in the first month; the degree curriculum revised against the board’s syllabus and past paper thereafter.' },
            { title: 'Examined posts — documents in parallel', text: 'Council registration kept alive, the COVID duty certificate in the prescribed form, category and Tamil-medium certificates.' },
            { title: 'Marks-based posts — documents only', text: 'The qualification marksheet, HSC and SSLC certificates, council registration, Tamil evidence and category certificate, ready before the notification, because the window is three weeks.' },
            { title: 'Both — the planner', text: 'It lists tentative posts and status per line. A line marked work in progress may notify; a line under stay may not.' },
          ],
        },
        {
          type: 'list',
          title: 'What recent cycles taught',
          items: [
            { text: 'Notifications close in three weeks', note: 'the Assistant Surgeon window ran from 21 November to 11 December 2025.' },
            { text: 'Examinations follow in about two months', note: 'the Assistant Surgeon paper was held on 25 January 2026 and the provisional list published on 11 March.' },
            { text: 'Every list is subject to litigation', note: 'and the planner records stays against fourteen lines. A provisional list is not an appointment.' },
            { text: 'Planner counts and notified counts differ', note: 'the Pharmacist notification was for 425 posts; the planner lists 630.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Tamil Nadu MRB study material — what to read for the Tamil test and for each examined subject paper.',
      lead: [
        'The Tamil test has a textbook; the subject papers have a curriculum and a published syllabus.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list for the examined posts.',
          head: ['Component', 'What to work from'],
          rows: [
            ['Tamil eligibility test', 'The state board Tamil textbooks for the ninth and tenth standards, and the board’s published Tamil paper.'],
            ['Assistant Surgeon', 'The standard MBBS texts by subject, revised against the board’s syllabus, and the 2024 paper with its key.'],
            ['Pharmacist', 'The pharmacy curriculum texts by subject and the board’s published syllabus.'],
            ['Health Inspector', 'The multipurpose health worker course material — community health, sanitation, communicable disease, health programmes — and a current affairs digest for the health programmes of the state.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'MRB syllabus page', href: TN_MRB_SRC.syllabus },
            { label: 'Healthcare government exams', to: '/government-exams/healthcare/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any Tamil Nadu MRB application open right now?',
      a: 'No. As at 11 September 2026 the most recent notification, No. 02/MRB/2026 for Therapeutic Assistant, had closed on 11 February 2026 and no later notification was listed. The board’s planner updated on 2 July 2026 lists 5,317 tentative posts, marks eight lines with a provisional selection list and fourteen as under interim stay.',
    },
    {
      q: 'Does MRB hold a written examination for every post?',
      a: 'No. Professional posts — Assistant Surgeon, Pharmacist, Health Inspector and similar — sit a Tamil eligibility test and a 100-mark subject examination. Paramedical and support posts — Nursing Assistant, Laboratory Technician, Village Health Nurse, Therapeutic Assistant — are selected on a weighted percentage of qualification, HSC and SSLC marks with no examination. The notification states which scheme applies.',
    },
    {
      q: 'What is the MRB Tamil eligibility test?',
      a: 'A one-hour objective Tamil paper of 50 marks at tenth-standard level, sat before the subject examination. A candidate must score 40 per cent for the subject paper to count; the Tamil marks are not used for ranking. Differently-abled candidates are exempt under a 2022 government order.',
    },
    {
      q: 'Is there negative marking or an interview in MRB recruitment?',
      a: 'No. The Assistant Surgeon and Pharmacist notifications state in terms that there is no negative mark for a wrong answer and no oral test for the post, and no MRB notification found carries an interview.',
    },
    {
      q: 'What is the MRB Assistant Surgeon exam pattern?',
      a: 'A Tamil eligibility test of 50 marks in one hour at 40 per cent, then a subject examination of 100 objective questions in two hours in English at MBBS level, with minimum qualifying marks of 30 for SC, SC(A) and ST candidates and 35 for others. No negative marking, scores normalised across sessions, COVID duty incentive marks of two to five added on certificate, and no interview. The 2025 recruitment for 1,100 posts was examined on 25 January 2026.',
    },
    {
      q: 'What is the MRB age limit?',
      a: 'SC, SC(A), ST, MBC, DNC, BC and BC(M) candidates have no upper age limit. For others the limit is set per post — 37 for Assistant Surgeon, 32 for Pharmacist and Laboratory Technician, 34 for Nursing Assistant, 42 for Village Health Nurse — with ten years more for differently-abled candidates and further provisions for ex-servicemen and destitute widows. Age is reckoned as on 1 July of the notification year.',
    },
    {
      q: 'What are the MRB fees?',
      a: '₹500 for SC, SC(A), ST and differently-abled candidates and ₹1,000 for others in the professional posts; ₹300 and ₹600 respectively in the paramedical posts. Online only, not refunded, and charged per notification.',
    },
    {
      q: 'When will MRB recruit Staff Nurses?',
      a: 'The board’s notification list shows the last general Staff Nurse recruitment as No. 02/MRB/2019, and the 2026 planner does not list one. Village Health Nurse and Nursing Assistant are different cadres with different qualifications and were recruited in 2023 and 2026 respectively.',
    },
    {
      q: 'Does MRB publish previous question papers?',
      a: 'Yes, for its examined posts. The question-bank page holds the Assistant Surgeon 2024 subject and Tamil papers with keys, the Indian medicine officer papers of 2025, the Physiotherapist and Senior Analyst papers and others. The marks-based posts have no papers.',
    },
  ],
}

/* ── TNPSC landing pages ────────────────────────────────────────
   The commission's dashboard pages need a session cookie and its generic
   scheme page lags the notifications, so records link the notification PDFs
   and the stable list pages. */
const TNPSC = {
  home: 'https://www.tnpsc.gov.in/',
  dashboard: 'https://tnpsc.gov.in/web/examdashboard/index.aspx?key=ksojs2efre3WFDsw5',
  notifications: 'https://tnpsc.gov.in/English/Notification.aspx',
  pressReleases: 'https://tnpsc.gov.in/english/press_releases.aspx',
  planner: 'https://tnpsc.gov.in/DynamicPortals/AnnualPlanner/AnnualPlanner.aspx',
  syllabus: 'https://tnpsc.gov.in/English/syllabus.html',
  answerKeys: 'https://tnpsc.gov.in/English/answerkeys.aspx',
  descriptivePapers: 'https://tnpsc.gov.in/English/descriptive-questions.html',
  instructions: 'https://tnpsc.gov.in/static_pdf/document/Instructions-to-Applicants%20-%2018.06.2026.pdf',
  apply: 'https://apply.tnpscexams.in/',
}

/**
 * The commission deducts for blanks, not for errors. Every objective paper in
 * this file carries the rule, so it is written once here and quoted from the
 * notification each time it appears.
 */
const TN_BLANK_RULE =
  'There is no deduction for a wrong answer. But half a mark is deducted for every question left entirely blank — a candidate who does not know the answer must darken option E — and two marks for a wrong register number on a non-personalised sheet. Leaving a question unanswered is the one thing the commission penalises.'

/* ── TNPSC Group 1 ──────────────────────────────────────────────
   Notification 05/2026 was live at CHECKED — applications closed, prelims
   postponed to 27 September 2026 — and the 04/2025 cycle had just published
   its final list. The scheme carries a 100-mark interview with no minimum, a
   Tamil paper that gates the mains, and a 1:20 prelims cut. */
const TN_G1_SRC = {
  notification: 'https://tnpsc.gov.in/document/english/Group%20I%20Notification%202026_E.pdf',
  addendum5A: 'https://tnpsc.gov.in/Document/english/ADDENDUM%205A_16.07.2026.pdf',
  addendum5B: 'https://tnpsc.gov.in/Document/english/Addendum%205B%20English.pdf',
  prelimsSyllabus: 'https://tnpsc.gov.in/static_pdf/syllabus/497_group%201%20preliminary%20syllabus.pdf',
  mainsSyllabus: 'https://tnpsc.gov.in/static_pdf/syllabus/498_group%201%20mains%20syllabus.pdf',
  notification2025: 'https://tnpsc.gov.in/document/english/Grp%20I%20notification_English_.pdf',
  prelimsKey2024: 'https://tnpsc.gov.in/Document/Answerkeyfinalresult/04_2024_GR_I_PRELIM_FAK.pdf',
}

const TN_GROUP_1 = {
  slug: 'tnpsc-group-1',
  path: '/government-exams/state/tamil-nadu/tnpsc-group-1/',
  name: 'TNPSC Group 1',
  fullName: 'Tamil Nadu Public Service Commission Combined Civil Services Examination-I — Group I Services',
  authority: 'Tamil Nadu Public Service Commission (TNPSC)',
  official: OFFICIAL,
  seoTitle: 'TNPSC Group 1 2026: Prelims 27 Sept, Mains, Interview & Syllabus',
  metaDescription:
    'TNPSC Group 1 — Notification 05/2026 with prelims on 27 September, the 850-mark scheme, the Tamil gate, the 100-mark interview, eligibility and fees.',
  lead: [
    'TNPSC Group 1 is the senior recruitment in Tamil Nadu: Deputy Collector, District Registrar, Assistant Commissioner of Commercial Taxes, Deputy Registrar of Cooperative Societies and the other state-cadre posts that run a district between them. It is built like the civil services examination — a screening prelims, a descriptive mains, an interview — and it is decided on 850 marks, of which 100 come from a board that sets no minimum.',
    'The 2026 cycle was live when this page was checked. Notification No. 05/2026 closed on 29 July 2026 for 46 posts, and its preliminary examination — postponed once by addendum — is on 27 September 2026. Two things distinguish the Tamil Nadu version from its neighbours: a Tamil eligibility paper in the mains that must be passed before the general studies papers are evaluated, and a marking rule that penalises a blank answer rather than a wrong one.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Public Service Commission'],
    ['Current cycle', 'Notification 05/2026 — 46 posts; applications closed 29 July; prelims 27 September 2026'],
    ['Qualification', 'A bachelor’s degree; preferences by post, and a law degree raises the age ceiling for the commercial taxes post'],
    ['Stages', 'Objective prelims at 1:20 → Tamil paper plus three descriptive general studies papers → 100-mark interview'],
    ['Total for ranking', '850 — three mains papers of 250 and the interview; the prelims and the Tamil paper do not count'],
    ['Marking', 'No deduction for a wrong answer; half a mark off for each question left blank'],
  ],
  overview: [
    {
      type: 'p',
      text: 'Group 1 fills the posts the state recruits directly into its senior executive cadre. The 2026 notification began with 26 vacancies across five posts and an addendum in August raised it to 46 by adding eight commercial taxes posts, three cooperative registrars, six Assistant Directors of Rural Development and three District Employment Officers. Every post is at pay level 22, and every post takes a degree, with preferences rather than requirements for particular subjects.',
    },
    {
      type: 'p',
      text: 'The examination has three properties worth understanding before committing to it. The prelims is a screen with a wide mouth — twenty candidates per vacancy proceed — and its marks then vanish. The mains is written by hand over four three-hour papers, and the first of them, in Tamil at tenth-standard level, must be passed before the other three are marked. And the interview, at 100 of the 850 marks, carries no minimum and is called at two or three candidates per vacancy, which makes it the stage that decides between candidates the mains has already ranked close together.',
    },
    {
      type: 'list',
      title: 'What separates Group 1 from Group 2',
      items: [
        { text: 'The mains is three descriptive general studies papers', note: 'each of 250 marks, answered by hand. Group 2 has one 300-mark descriptive paper and Group 2A an objective one.' },
        { text: 'There is an interview', note: 'of 100 marks, with no minimum qualifying mark, at two or three per vacancy. Neither Group 2 nor 2A has had one since 2024.' },
        { text: 'The prelims minimum is higher', note: '120 for general candidates and 90 for reserved communities, against 90 for everyone in Group 2.' },
        { text: 'The posts carry executive authority', note: 'district administration, taxation, registration and cooperation, rather than the supervisory and ministerial posts Group 2 leads to.' },
      ],
    },
    {
      type: 'note',
      title: 'Prelims marks do not survive the stage',
      text: 'The preliminary examination decides who writes the mains and nothing else — its marks are not counted for the merit list. Candidates routinely over-invest in objective practice and arrive at the mains having never written a timed answer. Prepare for the mains from the first month, and treat the prelims as a filter you must pass rather than a paper you must top.',
    },
  ],
  stages: [
    {
      name: 'Preliminary examination',
      mode: 'Objective, OMR — screening only',
      detail:
        'One paper of 200 questions and 300 marks in three hours: 175 on general studies at degree standard and 25 on aptitude and mental ability at SSLC standard, set in Tamil and English. Minimum 120 for general candidates and 90 for reserved communities. Twenty candidates per vacancy proceed; the marks are then discarded.',
    },
    {
      name: 'Onscreen certificate verification',
      mode: 'Documents, before the mains',
      detail:
        'Candidates shortlisted from the prelims upload their certificates for verification, and final-year candidates must prove they have passed the qualifying degree before the mains.',
    },
    {
      name: 'Main examination',
      mode: 'Descriptive, four papers of three hours',
      detail:
        'Paper I, the Tamil eligibility test at SSLC standard, is qualifying at 40 marks out of 100 for every community and gates the rest. Papers II, III and IV are general studies at degree standard, 250 marks each, in Tamil or English. Minimum 300 across the three for general candidates, 225 for reserved communities.',
    },
    {
      name: 'Interview',
      mode: 'Personality test, 100 marks, no minimum',
      detail:
        'Called at two per vacancy where a reservation group has five or more posts and three where it has four or fewer. Assesses personality, bearing, aptitude and general and technical knowledge. A medical board follows.',
    },
    {
      name: 'Rank list and counselling',
      mode: 'Mains Papers II to IV plus interview',
      detail:
        'The rank list is built on the 850 marks. Ties go to the older candidate, then to higher mains marks, then to the earlier application. Posts are allotted by counselling under the communal roster, with 30 per cent of vacancies for women.',
    },
  ],
  updates: [
    {
      type: 'note',
      title: 'Notification 05/2026 — applications closed, prelims on 27 September 2026',
      text: `Checked ${CHECKED}. The current Group 1 cycle, Notification No. 05/2026 of 23 June 2026, took applications from 30 June to 29 July 2026 with a correction window in early August. Addendum 5A of 16 July postponed the preliminary examination from 6 September to 27 September 2026, 9.30 to 12.30, without stating a reason; everything else in the notification stands. The main examination date will be announced with the prelims result.`,
    },
    {
      type: 'table',
      caption: 'Vacancies in Notification 05/2026 after Addendum 5B of 13 August 2026. All posts are at pay level 22.',
      head: ['Post', 'Vacancies', 'Notes'],
      rows: [
        ['Deputy Collector', '12', 'Includes backlog vacancies'],
        ['Assistant Commissioner of Commercial Taxes', '10', 'Revised from 2; preference to B.Com with B.L. and a diploma in taxation law'],
        ['District Registrar', '8', '—'],
        ['Deputy Registrar of Cooperative Societies', '6', 'Revised from 3; includes shortfall vacancies'],
        ['Assistant Director of Rural Development', '6', 'Added by addendum; preference to postgraduates in rural services, extension or sociology'],
        ['District Employment Officer', '3', 'Added by addendum; preference to graduates in economics, education, sociology, statistics or psychology'],
        ['Assistant Commissioner of Labour', '1', 'Preference to freedom fighters and their families'],
        ['Total', '46', 'Tentative until the prelims result is published'],
      ],
    },
    {
      type: 'table',
      caption: 'The previous cycle, Notification 04/2025 for 70 posts, as a guide to the timetable. It ran fifteen months from notification to final list.',
      head: ['Stage', 'When'],
      rows: [
        ['Notification', '1 April 2025'],
        ['Preliminary examination', '15 June 2025'],
        ['Main examination', '1 to 4 December 2025'],
        ['Certificate verification and interview list', '30 March 2026'],
        ['Rank list', '21 April 2026'],
        ['Counselling and final publication list', '5 June and 16 July 2026'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'Notification No. 05/2026', href: TN_G1_SRC.notification },
        { label: 'Addendum 5A — prelims postponed to 27 September 2026', href: TN_G1_SRC.addendum5A },
        { label: 'Addendum 5B — revised vacancies and added posts', href: TN_G1_SRC.addendum5B },
        { label: 'TNPSC examination dashboard', href: TNPSC.dashboard },
        { label: 'TNPSC press releases', href: TNPSC.pressReleases },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility under Notification 05/2026, with age reckoned as on 1 July 2026 and qualification held on the notification date of 23 June 2026.',
      head: ['Requirement', 'What the notification sets'],
      rows: [
        ['Qualification', 'A degree of a university incorporated by a Central or State Act, or a deemed university. Final-year candidates may sit the prelims but must prove a pass before the mains. Post-specific preferences apply but are not requirements.'],
        ['Minimum age', '21 years for every post.'],
        ['Maximum age — general', '34 years; 35 for the commercial taxes post with a law degree.'],
        ['Maximum age — SC, SC(A), ST, MBC, DC, BC and BC(M)', '39 years; 40 for the commercial taxes post with a law degree.'],
        ['Concessions', 'Persons with benchmark disability to 44 or 45 for general candidates and 49 or 50 for reserved communities; ex-servicemen to 50 and 55; destitute widows to 39 or 40.'],
        ['Government service', 'Candidates outside the reserved communities with five or more years of state government service are not eligible.'],
        ['Tamil', 'Adequate knowledge — Tamil as a language in SSLC, HSC or degree, Tamil-medium schooling, or the commission’s Second Class Language Test. Otherwise it must be passed within two years of appointment.'],
        ['Tamil-medium preference', 'A candidate who studied entirely in Tamil medium from first standard to degree may claim the preference under the 2010 Act as amended in 2026; the notification defines the status and the certificates.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees. The one-time registration is valid for five years across all TNPSC examinations.',
      head: ['Charge', 'Amount', 'Exemptions'],
      rows: [
        ['One-time registration', '₹150', 'None'],
        ['Preliminary examination', '₹100', 'SC, SC(A), ST, disabled and destitute-widow candidates fully; BC, BC(M), MBC and DC candidates three free chances; ex-servicemen two free chances'],
        ['Main examination', '₹200, if shortlisted', 'As above; each concession used consumes a free chance'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group 1 scheme under Notification 05/2026. The prelims and the Tamil paper decide who continues; the three general studies papers and the interview decide the rank.',
      head: ['Stage or paper', 'Content', 'Format', 'Duration', 'Marks', 'Minimum'],
      rows: [
        ['Preliminary', 'General studies 175 questions; aptitude and mental ability 25', 'Objective, OMR, Tamil and English', '3 hours', '300, not counted', '120 general; 90 reserved'],
        ['Mains — Paper I', 'Tamil eligibility test at SSLC standard', 'Descriptive, in Tamil', '3 hours', '100, not counted', '40 for every community'],
        ['Mains — Paper II', 'General Studies I', 'Descriptive, Tamil or English', '3 hours', '250', '300 across Papers II to IV for general candidates; 225 for reserved'],
        ['Mains — Paper III', 'General Studies II', 'Descriptive', '3 hours', '250', ''],
        ['Mains — Paper IV', 'General Studies III', 'Descriptive', '3 hours', '250', ''],
        ['Interview', 'Personality test', 'Oral', '—', '100', 'None'],
      ],
    },
    {
      type: 'note',
      title: 'The Tamil paper gates the mains, and the interview has no floor',
      text: 'Papers II, III and IV are evaluated only for candidates who score 40 in Paper I; a differently-abled candidate who studied only in English may claim exemption. The interview carries 100 marks and, in the notification’s words, no minimum qualifying marks — a candidate cannot fail it, but with the mains ranking candidates within a few marks of each other, it is where the order is settled.',
    },
    {
      type: 'list',
      title: 'The rules that decide who progresses',
      items: [
        { text: 'The prelims admits twenty per vacancy', note: 'and its marks are not counted. It is a filter, not a competition to top.' },
        { text: 'Blank answers cost half a mark', note: TN_BLANK_RULE },
        { text: 'One medium for the three marked papers', note: 'Tamil or English, chosen once. Paper I is in Tamil only.' },
        { text: 'The prelims weights are published', note: 'in the syllabus annexure — polity 40 of the 175 general studies questions, Indian economy and development administration in Tamil Nadu 50, Tamil Nadu history and culture 40, the national movement 25, science and geography 10 each.' },
        { text: 'Women have 30 per cent of the vacancies', note: 'and the disability quota is four per cent of identified posts. Destitute-widow and ex-servicemen reservations do not apply to this recruitment.' },
        { text: 'Ties go to the older candidate', note: 'then to higher mains marks, then to the earlier application.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for a candidate sitting the prelims on 27 September 2026',
      items: [
        { text: 'Weight the prelims to its published units', note: 'the syllabus annexure gives the weights: 50 questions on the economy and development administration of Tamil Nadu, 40 on polity, 40 on the state’s history and culture. Half the paper is the state.' },
        { text: 'Darken option E, never leave a blank', note: 'a blank costs half a mark; a wrong answer costs nothing. Practise the habit until it is automatic.' },
        { text: 'Write from now, not from the prelims result', note: 'the mains is 750 of the 850 marks and it is written by hand. The gap between prelims and mains in the last cycle was six months; the writing habit has to exist before it.' },
        { text: 'Prepare Paper I as a subject', note: 'tenth-standard Tamil, three hours, 40 to pass. It gates the papers that count and it is the paper candidates prepare for last.' },
        { text: 'Build one Tamil Nadu file that serves every paper', note: 'the state’s history, culture, economy, administration and socio-political movements run through the prelims and all three mains papers.' },
        { text: 'Rehearse the handwriting load', note: 'four three-hour papers over four days, as in December 2025. Legibility and speed at the end of the third hour are trainable.' },
        { text: 'Prepare the interview from your own form', note: 'district, degree, employment and the state’s administrative questions. A 100-mark board with no floor rewards a candidate who can hold a position calmly.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination, the Tamil paper rule, the interview provision and the blank-answer deduction are quoted from Notification No. 05/2026 and its two addenda; the 2025 timetable from the commission’s examination dashboard. The commission’s generic scheme page shows older minimum marks for the mains and should not be relied on against the notification. Unlike most state commissions, TNPSC publishes its descriptive papers: the Group 1 mains papers for 2019, 2022, 2023, 2024 and 2025 are on its site, and the prelims papers with final keys from 2013 to 2025.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'Notification No. 05/2026 with scheme and syllabus', href: TN_G1_SRC.notification },
        { label: 'Addendum 5A — prelims date', href: TN_G1_SRC.addendum5A },
        { label: 'Addendum 5B — vacancies and posts', href: TN_G1_SRC.addendum5B },
        { label: 'Preliminary syllabus', href: TN_G1_SRC.prelimsSyllabus },
        { label: 'Mains syllabus', href: TN_G1_SRC.mainsSyllabus },
        { label: 'Notification No. 04/2025 — the previous cycle', href: TN_G1_SRC.notification2025 },
        { label: 'Instructions to applicants, June 2026', href: TNPSC.instructions },
        { label: 'Descriptive question papers — mains', href: TNPSC.descriptivePapers },
        { label: 'Objective papers with final keys — prelims', href: TNPSC.answerKeys },
        { label: 'TNPSC annual planner', href: TNPSC.planner },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'TNPSC Group 1 syllabus — the prelims units with their published weights, the Tamil eligibility paper, and the three mains general studies papers.',
      lead: [
        'The commission publishes the weight of every prelims unit. Half the paper is Tamil Nadu, and the mains is the same ground at greater depth.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The preliminary examination by unit, with the number of questions the syllabus annexure allots to each. Two hundred questions in all.',
          head: ['Unit', 'Questions'],
          rows: [
            ['Indian economy and development administration in Tamil Nadu', '50'],
            ['Indian polity', '40'],
            ['History, culture, heritage and socio-political movements in Tamil Nadu', '40'],
            ['History and culture of India and the national movement', '25'],
            ['General science', '10'],
            ['Geography of India', '10'],
            ['Aptitude and mental ability — aptitude 15, reasoning 10', '25'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Mains — Paper I, Tamil eligibility test',
              'Tamil at the SSLC standard of the state board: grammar, comprehension, composition and literature. Descriptive, three hours, 100 marks, 40 to pass for every community, and marked before the general studies papers.',
            ],
            [
              'Mains — General Studies I',
              'Modern history of India and Indian culture; the history, culture, heritage and socio-political movements of Tamil Nadu; general science and its applications; and current events of national and international importance.',
            ],
            [
              'Mains — General Studies II',
              'The Indian polity and the Constitution; governance and public administration in India and Tamil Nadu; social justice, welfare and the state’s development programmes; and India’s external relations.',
            ],
            [
              'Mains — General Studies III',
              'The Indian economy and the economy of Tamil Nadu; development administration in the state; geography of India and Tamil Nadu; environment, disaster management and technology in development.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Read the two Tamil Nadu units of the prelims as instructions. Ninety of the 175 general studies questions are about the state — its economy and administration, its history and its movements — and no national material covers them at the depth the paper asks. The mains extends the same two areas across all three papers.',
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Preliminary syllabus with unit weights', href: TN_G1_SRC.prelimsSyllabus },
            { label: 'Mains syllabus', href: TN_G1_SRC.mainsSyllabus },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'TNPSC Group 1 exam pattern — the 1:20 prelims, the Tamil paper that gates the mains, three 250-mark descriptive papers and the 100-mark interview.',
      lead: [
        'Three stages, and only the last two count. Knowing which stage carries which marks changes how a year of preparation is spent.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes to the final 850.',
          head: ['Stage', 'Format', 'Counts?', 'What it decides'],
          rows: [
            ['Preliminary', 'One objective paper, 300 marks', 'No', 'Who writes the mains — twenty per vacancy'],
            ['Mains Paper I', 'Descriptive Tamil, 100 marks', 'No', 'Whether Papers II to IV are evaluated'],
            ['Mains Papers II to IV', 'Descriptive, 750 marks', 'Yes', 'Most of the rank'],
            ['Interview', '100 marks, no minimum', 'Yes', 'The order among candidates the mains ranked close'],
          ],
        },
        {
          type: 'p',
          text: 'The mains is worth seven and a half times the interview and the prelims is worth nothing, so preparation time goes to writing practice long before the prelims result. But the interview is called at two or three per vacancy with no floor, which means roughly half of those interviewed are not selected — and among candidates within a few mains marks of one another, the board decides.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The blank-answer deduction', note: 'half a mark for every unanswered question in the prelims. Option E exists to be darkened.' },
            { text: 'The mains minimum is on the aggregate of Papers II to IV', note: '300 for general candidates and 225 for reserved communities — and the commission’s generic scheme page shows older figures.' },
            { text: 'Paper I is in Tamil only', note: 'and Papers II to IV in one chosen medium, Tamil or English.' },
            { text: 'No waiting list', note: 'unfilled vacancies are carried forward.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'TNPSC Group 1 previous papers — five cycles of descriptive mains papers and thirteen years of prelims papers with keys, all published by the commission.',
      lead: [
        'TNPSC publishes its papers, including the descriptive ones. Group 1 has one of the fullest official archives of any state commission.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The commission’s descriptive-papers page holds the Group 1 mains — the Tamil eligibility test and General Studies I, II and III — for the cycles examined in December 2025, December 2024, August 2023, March 2022 and July 2019. Its answer-keys page holds the prelims papers with final keys for 2025, 2024, 2022, 2021, 2019, 2017, 2015, 2014 and 2013. That is enough to see how the descriptive questions are phrased, how the Tamil Nadu units are set, and how the prelims weights have held.',
        },
        {
          type: 'list',
          title: 'How to work the archive',
          items: [
            { text: 'Write the mains papers to time, by hand', note: 'three hours, the question paper’s own word limits, then compare with the next cycle’s paper to see what recurs.' },
            { text: 'Sit the prelims papers with the blank rule', note: 'option E for every unknown, half a mark off for every blank, no penalty for a wrong answer. The habit is the point.' },
            { text: 'Track the Tamil Nadu questions across cycles', note: 'the economy and administration unit and the history and movements unit are ninety questions a paper. Collected across cycles, they are a syllabus of what the commission actually asks.' },
            { text: 'Work the Tamil eligibility papers early', note: 'five cycles of them show the level — SSLC — and the composition tasks. The gate is the easiest paper in the archive to prepare from.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Descriptive question papers — Group 1 mains', href: TNPSC.descriptivePapers },
            { label: 'Objective papers with final keys — Group 1 prelims', href: TNPSC.answerKeys },
            { label: 'Group 1 prelims 2024 final key', href: TN_G1_SRC.prelimsKey2024 },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'TNPSC Group 1 mock tests — timed prelims with the blank-answer rule, a weekly descriptive habit, and interview rehearsal from your own form.',
      lead: [
        'Two kinds of test, and the second matters seven times more than the first. Most candidates practise the first.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A descriptive paper every week, from now', text: 'One of General Studies I, II or III, three hours by hand, to the word limits of the published papers. Reread a month later.' },
            { title: 'A prelims paper fortnightly, until 27 September', text: '200 questions in three hours, option E for every unknown, scored with half a mark off per blank. Then monthly, to keep the habit for the next cycle.' },
            { title: 'A Tamil paper monthly', text: 'Three hours of SSLC-standard composition and comprehension. It removes candidates who never practised it.' },
            { title: 'A full four-paper simulation before the mains', text: 'Four consecutive days, as the commission schedules it.' },
            { title: 'Mock interviews once the mains is written', text: 'From the application form — district, degree, employment — and the state’s live administrative questions.' },
          ],
        },
        {
          type: 'note',
          title: 'Score the prelims the commission’s way',
          text: 'A mock scored without the blank deduction and without option E trains the wrong reflex. The commission’s rule is that an unknown answer is a darkened E, not a blank; a mock that does not enforce it is not a rehearsal.',
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
        'TNPSC Group 1 preparation — a plan across the prelims, the Tamil paper, three descriptive papers and the interview, weighted to the Tamil Nadu units.',
      lead: [
        'A fifteen-month examination, with the prelims three months after notification and the mains six months after that. The gaps are where it is decided.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A twelve-month plan',
          items: [
            { title: 'Months one to three — the state, written', text: 'The economy and development administration of Tamil Nadu, the state’s history, culture and movements — the ninety-question core of the prelims and the spine of all three mains papers. One handwritten answer a day from the first week.' },
            { title: 'Months four to six — polity, the national layer and Tamil', text: 'Indian polity at its forty-question weight, the national movement, science and geography; and SSLC Tamil as a subject.' },
            { title: 'Months seven to nine — papers under the clock', text: 'Fortnightly prelims papers with the blank rule; weekly descriptive papers from the commission’s archive; monthly Tamil papers.' },
            { title: 'Months ten to twelve — hold and sharpen', text: 'Maintenance rather than new material, with the interview file — your form, your district, the state’s debates — built alongside.' },
          ],
        },
        {
          type: 'list',
          title: 'What the recent cycles taught',
          items: [
            { text: 'Dates move', note: 'the 2026 prelims was postponed three weeks by addendum. Prepare to a routine, not to a date.' },
            { text: 'Vacancies grow after notification', note: '26 became 46 by addendum in the current cycle; 70 posts in 2025. The number that matters is the one at the prelims result.' },
            { text: 'The mains follows six months after the prelims', note: 'June to December in 2025. That interval is when descriptive practice pays.' },
            { text: 'Fifteen months from notification to final list', note: 'in the 2025 cycle. Plan preparation as a long project.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'TNPSC Group 1 study material — what to read for each prelims unit and each mains paper, weighted as the commission weights them.',
      lead: [
        'The commission tells you how many questions each unit carries. The reading list should follow the weights.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by unit and paper. The state units are the largest and have no national text.',
          head: ['Unit or paper', 'Weight', 'What to work from'],
          rows: [
            ['Economy and development administration in Tamil Nadu', '50 prelims questions; General Studies III', 'The state’s economic survey and policy notes, the budget, and the administration’s own descriptions of its schemes and structure.'],
            ['History, culture and socio-political movements of Tamil Nadu', '40 prelims questions; General Studies I', 'The state board history textbooks at HSC level and the standard histories of the Tamil country, from the Sangam age through the Dravidian and self-respect movements to the present.'],
            ['Indian polity', '40 prelims questions; General Studies II', 'A standard Constitution and polity text, read to the institutions and amendments.'],
            ['Indian history and the national movement', '25 prelims questions; General Studies I', 'A standard modern Indian history text.'],
            ['General science and geography', '20 prelims questions; General Studies I and III', 'NCERT-standard science and geography, with the state’s geography added.'],
            ['Aptitude and mental ability', '25 prelims questions', 'An SSLC-standard aptitude and reasoning question bank.'],
            ['Tamil eligibility paper', 'Gates the mains', 'The state board Tamil textbooks for the ninth and tenth standards, and five cycles of published papers.'],
          ],
        },
        {
          type: 'note',
          title: 'One Tamil Nadu file, four papers',
          text: 'The state’s history and movements serve General Studies I, its administration General Studies II, and its economy General Studies III — and all three feed ninety prelims questions. Build the Tamil Nadu layer once, as a single file with sections, and revise it as a subject. It is the reading that separates candidates.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the TNPSC Group 1 2026 preliminary examination?',
      a: '27 September 2026, from 9.30 to 12.30, under Addendum 5A of 16 July 2026 to Notification No. 05/2026 — postponed from 6 September. Applications closed on 29 July 2026. The main examination date will be announced with the prelims result.',
    },
    {
      q: 'How many vacancies are there in TNPSC Group 1 2026?',
      a: '46 after Addendum 5B of 13 August 2026: Deputy Collector 12, Assistant Commissioner of Commercial Taxes 10, District Registrar 8, Deputy Registrar of Cooperative Societies 6, Assistant Director of Rural Development 6, District Employment Officer 3 and Assistant Commissioner of Labour 1. The notification calls the figures tentative until the prelims result.',
    },
    {
      q: 'What is the TNPSC Group 1 exam pattern?',
      a: 'A preliminary examination of 200 objective questions for 300 marks in three hours — 175 on general studies and 25 on aptitude — which screens at twenty candidates per vacancy and is then discarded. A main examination of four descriptive papers: Paper I, the Tamil eligibility test, of 100 marks and qualifying at 40; and General Studies I, II and III of 250 marks each. Then an interview of 100 marks with no minimum. The rank is built on the 850 marks of the three general studies papers and the interview.',
    },
    {
      q: 'Is there negative marking in TNPSC Group 1?',
      a: 'Not for a wrong answer. But half a mark is deducted for every question left entirely blank — the notification requires a candidate who does not know the answer to darken option E — and two marks for a wrong register number on a non-personalised sheet. It is the opposite of the usual rule: the penalty is for not answering.',
    },
    {
      q: 'Is there an interview in TNPSC Group 1?',
      a: 'Yes — 100 marks, called at two candidates per vacancy where a reservation group has five or more posts and three where it has fewer, with no minimum qualifying mark. It assesses personality, bearing, aptitude and general and technical knowledge, and its marks are added to the 750 mains marks for the rank list.',
    },
    {
      q: 'What is the Tamil eligibility test in TNPSC Group 1?',
      a: 'Paper I of the mains — a descriptive Tamil paper at SSLC standard, three hours, 100 marks, in Tamil, qualifying at 40 for every community. Papers II, III and IV are evaluated only for candidates who pass it. A differently-abled candidate who studied only in English may claim exemption.',
    },
    {
      q: 'What is the TNPSC Group 1 age limit?',
      a: 'A minimum of 21 for every post. Maximum 34 for general candidates and 39 for SC, SC(A), ST, MBC, DC, BC and BC(M) candidates, reckoned as on 1 July 2026 — one year more for the commercial taxes post with a law degree. Persons with benchmark disability, ex-servicemen and destitute widows have higher ceilings. Candidates outside the reserved communities with five years of state service are not eligible.',
    },
    {
      q: 'What are the TNPSC Group 1 fees?',
      a: 'A one-time registration of ₹150 valid five years, a preliminary examination fee of ₹100 and a main examination fee of ₹200 if shortlisted. SC, SC(A), ST, disabled and destitute-widow candidates are fully exempt from examination fees; BC, BC(M), MBC and DC candidates have three free chances and ex-servicemen two.',
    },
    {
      q: 'Does TNPSC publish Group 1 previous papers?',
      a: 'Yes, including the descriptive ones. The mains papers for the 2019, 2022, 2023, 2024 and 2025 cycles are on the commission’s descriptive-papers page, and the prelims papers with final keys from 2013 to 2025 are on its answer-keys page.',
    },
    {
      q: 'How long does TNPSC Group 1 take?',
      a: 'The 2025 cycle ran fifteen months: notification in April 2025, prelims in June, mains in December, rank list in April 2026 and final publication list in July 2026. The 2026 cycle was notified in June with prelims in September.',
    },
  ],
}

/* ── TNPSC Group 2 and Group 2A ─────────────────────────────────
   One notification, one preliminary examination, two main examinations.
   Group II is the higher posts (levels 16 to 18) with a descriptive mains;
   Group IIA is the ministerial posts (levels 10 to 12) with an objective one.
   Neither has had an interview since 2024, though the hub card and most
   coaching material still say Group II does. The two records share the
   prelims and cross-link rather than repeat it. */
const TN_G2_SRC = {
  notification: 'https://tnpsc.gov.in/document/english/07_2026%20Dated_11.08.2026%20English%20version.pdf',
  addendum7A: 'https://tnpsc.gov.in/Document/english/Addendum%207A_2026%20English.pdf',
  notification2025: 'https://tnpsc.gov.in/document/english/GRP2_11_2025_ENGLISH.pdf',
  notification2024: 'https://tnpsc.gov.in/Document/english/08_2024_English.pdf',
  prelimsSyllabus: 'https://tnpsc.gov.in/static_pdf/syllabus/495_Group%20II%20and%20IIA%20prelims.pdf',
  tamilSyllabus: 'https://tnpsc.gov.in/static_pdf/syllabus/8_Tamil%20Eligibility%20Test%20-%20Paper-I.pdf',
  prelimsKey2024: 'https://tnpsc.gov.in/Document/Answerkeyfinalresult/08_2024_PE_14092024_FAK.pdf',
  iiaMainsKey2025: 'https://tnpsc.gov.in/Document/Answerkeyfinalresult/08_2024_MWE_08022025_FAK.pdf',
}

const TN_GROUP_2 = {
  slug: 'tnpsc-group-2',
  path: '/government-exams/state/tamil-nadu/tnpsc-group-2/',
  name: 'TNPSC Group 2',
  fullName: 'Tamil Nadu Public Service Commission Combined Civil Services Examination-II — Group II Services',
  authority: 'Tamil Nadu Public Service Commission (TNPSC)',
  official: OFFICIAL,
  seoTitle: 'TNPSC Group 2 2026: Prelims 1 Nov, Descriptive Mains & No Interview',
  metaDescription:
    'TNPSC Group 2 — Notification 07/2026 with prelims on 1 November, the descriptive 300-mark mains, the Tamil gate, no interview since 2024, eligibility and fees.',
  lead: [
    'TNPSC Group 2 fills the higher of the two tiers notified in the Combined Civil Services Examination-II: Sub-Registrar, Probation Officer, Deputy Commercial Tax Officer, Jailor, Assistant Inspector, the Assistant Section Officers of the Secretariat and the special assistants of the police. They sit at pay levels 16 to 18, and they are decided on one descriptive general studies paper of 300 marks, written by hand.',
    'The 2026 cycle was live when this page was checked. Notification No. 07/2026 closed on 9 September 2026 for 43 Group II posts alongside 803 Group IIA posts, and the common preliminary examination is on 1 November 2026. One correction to most material about this examination: there is no interview. The oral test that once distinguished Group II from Group IIA was dropped in 2024, and the distinction is now the mains — descriptive for Group II, objective for Group IIA.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Public Service Commission'],
    ['Current cycle', 'Notification 07/2026 — 43 Group II posts; applications closed 9 September; prelims 1 November 2026'],
    ['Qualification', 'A bachelor’s degree; law, commerce or criminology degrees for specific posts'],
    ['Stages', 'Common objective prelims at 1:10 → Tamil paper plus one descriptive general studies paper of 300 marks'],
    ['Interview', 'None — dropped from the scheme in 2024'],
    ['Marking', 'No deduction for a wrong answer; half a mark off for each question left blank'],
  ],
  overview: [
    {
      type: 'p',
      text: 'Group II and Group IIA are one notification. The 2026 notification lists fourteen Group II post codes — 43 posts after the September addendum — and forty-seven Group IIA post codes for 803. Every candidate sits the same preliminary examination on 1 November 2026, and is then shortlisted separately for each mains at ten candidates per vacancy. A candidate selected for a Group II post is not considered for Group IIA.',
    },
    {
      type: 'p',
      text: 'The Group II mains is two papers. Paper I is the Tamil eligibility test at SSLC standard, qualifying at 40 out of 100 for every community, and Paper II is evaluated only for those who pass it. Paper II is a single descriptive general studies paper of 300 marks in three hours — nine ten-mark answers, three of five ten-mark language answers in Tamil or English, and twelve fifteen-mark answers across six sections — with a minimum of 90 for every community. Paper II alone builds the rank list.',
    },
    {
      type: 'list',
      title: 'What separates Group 2 from Group 2A',
      items: [
        { text: 'The mains is descriptive', note: 'one 300-mark paper written by hand. Group IIA’s mains is an objective computer-based test of 200 questions.' },
        { text: 'The posts are a tier higher', note: 'levels 16 to 18 — Sub-Registrar, Probation Officer, Jailor, the Secretariat’s Assistant Section Officers — against Group IIA’s levels 10 to 12.' },
        { text: 'The field is smaller', note: '43 posts against 803, and the mains is shortlisted separately for each at 1:10.' },
        { text: 'Neither has an interview', note: 'since Notification 08/2024. The word does not appear in the 2026 notification.' },
      ],
    },
    {
      type: 'note',
      title: 'There has been no Group 2 interview since 2024',
      text: 'Up to Notification 03/2022, Group II was defined as the interview posts and Group IIA as the non-interview posts, and Group II carried an oral test of 40 marks. From Notification 08/2024 onwards the words interview and oral test do not appear in the CCSE-II notifications at all. The 2026 scheme is written examination only, for both groups. Material that describes a Group II interview is describing the examination as it was before 2024.',
    },
  ],
  stages: [
    {
      name: 'Common preliminary examination',
      mode: 'Objective, OMR — screening only',
      detail:
        'One paper of 200 questions and 300 marks in three hours: general studies 75 at degree standard, aptitude 25 at SSLC standard, and a language paper of 100 in general Tamil or general English at SSLC standard. Minimum 90 for every community. Ten candidates per vacancy proceed to each mains; the marks are then discarded.',
    },
    {
      name: 'Group II main examination',
      mode: 'Descriptive, two papers of three hours',
      detail:
        'Paper I, the Tamil eligibility test at SSLC standard, is qualifying at 40 out of 100 for every community. Paper II is general studies at degree standard, 300 marks, minimum 90, in Tamil or English — and alone builds the rank list.',
    },
    {
      name: 'Onscreen and physical certificate verification',
      mode: 'Documents, then counselling',
      detail:
        'Onscreen verification at three candidates per vacancy for general candidates and two for reserved communities; physical verification and counselling at three and one and a half. Posts are allotted by rank and preference under the communal roster.',
    },
  ],
  updates: [
    {
      type: 'note',
      title: 'Notification 07/2026 — applications closed, prelims on 1 November 2026',
      text: `Checked ${CHECKED}. The current cycle, Notification No. 07/2026 of 11 August 2026, took applications to 9 September 2026 with a correction window from 13 to 15 September. The common preliminary examination is on 1 November 2026, 9.30 to 12.30 — a week later than the commission’s planner projected. The main examination dates will be announced later. Addendum 7A of 3 September added two Probation Officer posts and raised the Group II total to 43.`,
    },
    {
      type: 'table',
      caption: 'Group II posts in Notification 07/2026 after Addendum 7A. All are at pay levels 16 to 18.',
      head: ['Post', 'Vacancies'],
      rows: [
        ['Assistant Inspector', '7'],
        ['Probation Officer', '5, plus 2 added by addendum in Social Defence'],
        ['Special Branch Assistant', '6, plus 3 at level 18'],
        ['Assistant Section Officer, Secretariat (Law)', '5'],
        ['Sub-Registrar Grade-II', '3'],
        ['Jailor (Men)', '3'],
        ['Special Assistant', '2'],
        ['Assistant Section Officer, Legislative Assembly Secretariat', '2'],
        ['Deputy Commercial Tax Officer; Junior Employment Officer; Jailor (women’s prison); ASO TNPSC; ASO cum Programmer', '1 each'],
        ['Total', '43'],
      ],
    },
    {
      type: 'table',
      caption: 'The previous cycle, Notification 11/2025, as a guide to the timetable. It was still at counselling when this page was checked.',
      head: ['Stage', 'When'],
      rows: [
        ['Notification', '15 July 2025'],
        ['Preliminary examination', '28 September 2025'],
        ['Group II mains — General Studies', '22 February 2026'],
        ['Tamil eligibility test', '15 March 2026'],
        ['Marks and rank', '29 June 2026'],
        ['Onscreen verification list', '13 July 2026'],
        ['Physical verification and counselling list', '9 September 2026'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'Notification No. 07/2026', href: TN_G2_SRC.notification },
        { label: 'Addendum 7A — posts added', href: TN_G2_SRC.addendum7A },
        { label: 'TNPSC examination dashboard', href: TNPSC.dashboard },
        { label: 'TNPSC Group 2A — the other half of the notification', to: '/government-exams/state/tamil-nadu/tnpsc-group-2a/' },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility under Notification 07/2026, with age reckoned as on 1 July 2026 and qualification held on the notification date.',
      head: ['Requirement', 'What the notification sets'],
      rows: [
        ['Qualification', 'A degree of a UGC-recognised university for nearly every post. Deputy Commercial Tax Officer takes B.A., B.Sc. or B.Com; Assistant Section Officer (Law) a law degree; Jailor gets a higher age ceiling with a master’s in criminology, criminal justice or social work; Sub-Registrar prefers a law degree.'],
        ['Minimum age', '18 for most posts; 20 for Sub-Registrar; 22 for Probation Officer in the Prisons department; 26 for the Probation Officer posts added in Social Defence.'],
        ['Maximum age — general', '32 for most posts; 34 for Deputy Commercial Tax Officer with a law degree; 37 for Jailor with the relevant master’s; 42 for the Social Defence Probation Officer.'],
        ['Maximum age — SC, SC(A), ST, MBC, DC, BC and BC(M)', 'No maximum for every post except Deputy Commercial Tax Officer, at 37 or 39 with a law degree. No maximum means not having completed 60.'],
        ['Concessions', 'Persons with benchmark disability ten years more; ex-servicemen to 50, or 52 and 55 for the two posts above; destitute widows no maximum, or 37 and 39 for Deputy Commercial Tax Officer.'],
        ['Government service', 'Candidates outside the reserved communities with five or more years of state service are not eligible.'],
        ['Tamil', 'Adequate knowledge as for Group 1; otherwise the Second Class Language Test within two years of appointment.'],
        ['Fees', 'One-time registration ₹150; prelims ₹100; mains ₹150, or ₹300 if shortlisted for both Group II and IIA. Exemptions as for Group 1.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group II scheme under Notification 07/2026. The prelims and the Tamil paper decide who continues; Paper II alone decides the rank.',
      head: ['Stage or paper', 'Content', 'Format', 'Duration', 'Marks', 'Minimum'],
      rows: [
        ['Common preliminary', 'General studies 75; aptitude 25; general Tamil or general English 100', 'Objective, OMR', '3 hours', '300, not counted', '90 for every community'],
        ['Mains — Paper I', 'Tamil eligibility test at SSLC standard', 'Descriptive, in Tamil', '3 hours', '100, not counted', '40 for every community'],
        ['Mains — Paper II', 'General studies at degree standard', 'Descriptive, Tamil or English', '3 hours', '300', '90 for every community'],
      ],
    },
    {
      type: 'table',
      caption: 'Inside Paper II, from the syllabus annexure. Three hundred marks in three parts.',
      head: ['Part', 'Questions', 'Marks'],
      rows: [
        ['Part A', 'Nine answers of 100 words, 10 marks each', '90'],
        ['Part B', 'Three of five answers of 10 marks on the language unit, in Tamil or English', '30'],
        ['Part C', 'Six sections; two of three answers of 200 words in each, 15 marks each', '180'],
      ],
    },
    {
      type: 'note',
      title: 'Paper I gates Paper II, and there is no interview',
      text: 'Paper II is evaluated only for candidates who score 40 in the Tamil eligibility test; a differently-abled candidate may claim exemption. Nothing follows Paper II but certificate verification and counselling. The commission’s generic scheme page still shows older figures — a different prelims minimum and a different mains structure — and should not be relied on against the notification.',
    },
    {
      type: 'list',
      title: 'The rules that decide who progresses',
      items: [
        { text: 'The prelims admits ten per vacancy', note: 'separately for Group II and Group IIA, and its marks are not counted.' },
        { text: 'Blank answers cost half a mark in the prelims', note: TN_BLANK_RULE },
        { text: 'The prelims language paper is a third of it', note: '100 of the 200 questions, in general Tamil or general English at SSLC standard, with published weights — grammar 25, comprehension 20, vocabulary and literary works 15 each.' },
        { text: 'One post, one group', note: 'a candidate selected for Group II is not considered for Group IIA.' },
        { text: 'Ties go to the higher qualification', note: 'then to age, then to the earlier application.' },
        { text: 'Three posts are for Hindus only', note: 'Audit Inspector, Executive Officer Grade-III and one Assistant post, in the Group IIA list, under the religious endowments rules.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for a candidate sitting the prelims on 1 November 2026',
      items: [
        { text: 'Give the language paper a third of your prelims time', note: 'it is 100 of the 200 questions, at SSLC standard, with published unit weights. It is the most improvable third of the paper.' },
        { text: 'Darken option E, never leave a blank', note: 'half a mark off per blank; nothing off for a wrong answer. Build the reflex before the day.' },
        { text: 'Write from now', note: 'the Group II mains is one descriptive paper of 300 marks, and the last cycle held it five months after the prelims. A hundred-word answer a day from the first week.' },
        { text: 'Prepare Paper I as a subject', note: 'three hours of SSLC Tamil, 40 to pass, marked before Paper II is opened.' },
        { text: 'Build the Tamil Nadu units as the core', note: 'the prelims allots 40 of its 75 general studies questions to the state’s economy, administration, history and culture, and Paper II is the same ground in prose.' },
        { text: 'Rehearse Paper II’s three parts to time', note: 'nine short answers, three language answers, twelve long answers — 300 marks in 180 minutes is a pace, and the published papers show the format.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination, the absence of an interview and the blank-answer deduction are quoted from Notification No. 07/2026 and Addendum 7A; the 2025 timetable from the commission’s examination dashboard; the earlier interview from Notification 03/2022. The commission publishes the Group II descriptive papers — General Studies for February 2026 and February 2025, the Tamil eligibility test for March 2026 and February 2025, and earlier cycles — and the prelims papers with final keys.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'Notification No. 07/2026 with scheme and syllabus', href: TN_G2_SRC.notification },
        { label: 'Addendum 7A, 3 September 2026', href: TN_G2_SRC.addendum7A },
        { label: 'Notification No. 11/2025 — the previous cycle', href: TN_G2_SRC.notification2025 },
        { label: 'Notification No. 08/2024 — the first cycle without an interview', href: TN_G2_SRC.notification2024 },
        { label: 'Prelims syllabus with unit weights', href: TN_G2_SRC.prelimsSyllabus },
        { label: 'Tamil eligibility test syllabus', href: TN_G2_SRC.tamilSyllabus },
        { label: 'Descriptive question papers — Group II mains', href: TNPSC.descriptivePapers },
        { label: 'Objective papers with final keys — prelims', href: TNPSC.answerKeys },
        { label: 'TNPSC annual planner', href: TNPSC.planner },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'TNPSC Group 2 syllabus — the common prelims with its unit weights, the Tamil eligibility paper, and the descriptive general studies mains paper.',
      lead: [
        'A prelims that is a third language, a Tamil paper that gates, and one descriptive paper that is the whole result.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The common preliminary examination by unit, with the questions the syllabus annexure allots. Two hundred questions in all.',
          head: ['Unit', 'Questions'],
          rows: [
            ['Language — general Tamil or general English at SSLC standard: grammar 25, comprehension 20, vocabulary 15, literary works 15, writing 10, technical terms 10, translation 5', '100'],
            ['Indian economy and development administration in Tamil Nadu', '20'],
            ['History, culture and socio-political movements in Tamil Nadu', '20'],
            ['Indian polity', '15'],
            ['History of India and the national movement', '10'],
            ['General science', '5'],
            ['Geography', '5'],
            ['Aptitude 15 and reasoning 10', '25'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Mains — Paper I, Tamil eligibility test',
              'Tamil at SSLC standard: grammar, comprehension, composition and literature. Descriptive, three hours, 100 marks, 40 to pass, and marked first.',
            ],
            [
              'Mains — Paper II, General Studies',
              'The prelims syllabus at greater depth, in prose: the history, culture and movements of Tamil Nadu; the Indian polity and the state’s administration; the Indian economy and the development administration of Tamil Nadu; general science and geography; and current affairs. Written across three parts in Tamil or English, with the Part B language answers in the chosen language.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Prelims syllabus with unit weights', href: TN_G2_SRC.prelimsSyllabus },
            { label: 'Tamil eligibility test syllabus', href: TN_G2_SRC.tamilSyllabus },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'TNPSC Group 2 exam pattern — the common 1:10 prelims, the Tamil paper that gates the mains, the 300-mark descriptive paper, and no interview.',
      lead: [
        'Two stages that count for nothing and one paper that counts for everything.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes.',
          head: ['Stage', 'Format', 'Counts?', 'What it decides'],
          rows: [
            ['Common prelims', 'Objective, 300 marks', 'No', 'Who writes the Group II mains — ten per vacancy'],
            ['Mains Paper I', 'Descriptive Tamil, 100 marks', 'No', 'Whether Paper II is evaluated'],
            ['Mains Paper II', 'Descriptive general studies, 300 marks', 'Yes', 'The whole rank'],
          ],
        },
        {
          type: 'p',
          text: 'The planning rule is simple: the rank is one handwritten paper. A candidate who clears the prelims comfortably and has never written a timed 200-word answer arrives at the only paper that counts without the skill it tests. Descriptive practice belongs in month one.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The blank-answer deduction in the prelims', note: 'half a mark per blank, none per wrong answer, option E for the unknown.' },
            { text: 'Every minimum is the same for every community', note: '90 in the prelims, 40 in Paper I, 90 in Paper II.' },
            { text: 'The shortlist is separate for each group', note: 'a candidate may be shortlisted for both mains, and pays for both.' },
            { text: 'The generic scheme page is stale', note: 'the notification governs.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'TNPSC Group 2 previous papers — the published descriptive mains papers and the prelims papers with keys.',
      lead: [
        'The commission publishes the descriptive paper. Two recent cycles of it are on its site, with the Tamil eligibility papers alongside.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The descriptive-papers page holds the Group II General Studies paper for 22 February 2026 and 23 February 2025, the common Tamil eligibility test for 15 March 2026 and 8 February 2025, the combined Group II and IIA mains of February 2023 and the Group II mains of February 2019. The answer-keys page holds the common prelims with final keys for 2025, 2024, 2022, 2018, 2015 and 2013.',
        },
        {
          type: 'list',
          title: 'How to work the archive',
          items: [
            { text: 'Write the 2026 and 2025 Paper II to time', note: 'the three-part format, the word limits and the 180-minute pace are the paper. Compare the two to see what recurs.' },
            { text: 'Sit the prelims with the blank rule', note: 'option E for every unknown, half a mark off per blank.' },
            { text: 'Work the language section as its own paper', note: 'a hundred SSLC-standard questions in Tamil or English, with the published unit weights.' },
            { text: 'Use the Tamil eligibility papers early', note: 'they show the level and the tasks, and the gate is the easiest paper to prepare from.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Descriptive question papers', href: TNPSC.descriptivePapers },
            { label: 'Objective papers with final keys', href: TNPSC.answerKeys },
            { label: 'CCSE-II prelims 2024 final key', href: TN_G2_SRC.prelimsKey2024 },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'TNPSC Group 2 mock tests — timed prelims with the blank rule, a weekly descriptive answer habit, and the language section as its own paper.',
      lead: [
        'The paper that ranks you is written by hand. Rehearse that one most.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A prelims paper fortnightly until 1 November', text: '200 questions in three hours, option E for every unknown, scored with half a mark off per blank.' },
            { title: 'A language sectional weekly', text: 'A hundred questions of SSLC Tamil or English in ninety minutes. A third of the prelims, and the fastest to improve.' },
            { title: 'A descriptive answer every day, a full Paper II every fortnight', text: 'Nine short answers, three language answers and twelve long answers in three hours, to the published papers’ format.' },
            { title: 'A Tamil eligibility paper monthly', text: 'Three hours at SSLC standard, to 40.' },
          ],
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
        'TNPSC Group 2 preparation — a plan across the common prelims, the Tamil paper and the single descriptive mains paper.',
      lead: [
        'A thirteen-month examination. The five months between the prelims and the mains are where it is decided.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan to the 2026 cycle',
          items: [
            { title: 'Now to 1 November — the prelims', text: 'The language paper at its hundred-question weight; the Tamil Nadu units at their forty; polity; aptitude drilled. A descriptive answer a day alongside, because the mains is coming.' },
            { title: 'November to the mains — Paper II', text: 'Weekly full descriptive papers to the published format; the Tamil eligibility paper monthly; the state layer built into every answer.' },
            { title: 'After the mains — documents', text: 'Verification is at three per vacancy and counselling at one and a half for reserved communities. Certificates in the notification’s form, ready.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2025 cycle taught',
          items: [
            { text: 'The mains came five months after the prelims', note: 'September to February. That interval is when descriptive practice pays.' },
            { text: 'Counselling came a year after the notification', note: 'July 2025 to September 2026, and it was still running when this page was checked.' },
            { text: 'Addenda change the vacancy list', note: 'the 2025 cycle had five; the 2026 cycle one already.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'TNPSC Group 2 study material — what to read for the prelims language and general studies units and for the descriptive mains.',
      lead: [
        'The commission weights the units. The reading follows.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by unit.',
          head: ['Unit', 'Weight', 'What to work from'],
          rows: [
            ['General Tamil or general English', '100 prelims questions', 'The SSLC grammar and composition textbooks in the chosen language, and the published unit weights.'],
            ['Economy and development administration in Tamil Nadu', '20 prelims questions; Paper II', 'The state’s economic survey and its administration’s own descriptions of its schemes.'],
            ['History, culture and movements of Tamil Nadu', '20 prelims questions; Paper II', 'The state board HSC history textbooks and the standard histories of the Tamil country.'],
            ['Indian polity', '15 prelims questions; Paper II', 'A standard Constitution and polity text.'],
            ['National movement, science, geography', '20 prelims questions; Paper II', 'NCERT-standard texts.'],
            ['Aptitude and reasoning', '25 prelims questions', 'An SSLC-standard question bank.'],
            ['Tamil eligibility paper', 'Gates Paper II', 'The ninth and tenth standard Tamil textbooks and the published papers.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is there an interview in TNPSC Group 2?',
      a: 'No. The oral test that once defined Group II was dropped from Notification 08/2024 onwards, and the words interview and oral test do not appear in Notification 07/2026. Selection is on the descriptive mains paper alone, followed by certificate verification and counselling. Material describing a Group II interview describes the scheme before 2024.',
    },
    {
      q: 'When is the TNPSC Group 2 2026 preliminary examination?',
      a: '1 November 2026, 9.30 to 12.30, under Notification No. 07/2026 — common to Group II and Group IIA. Applications closed on 9 September 2026. The main examination dates will be announced later.',
    },
    {
      q: 'What is the difference between TNPSC Group 2 and Group 2A?',
      a: 'They are one notification with a common prelims and separate mains. Group II is the higher posts at pay levels 16 to 18, decided on a descriptive general studies paper of 300 marks. Group IIA is the ministerial posts at levels 10 to 12, decided on an objective computer-based paper of 300 marks. Neither has an interview. A candidate selected for Group II is not considered for Group IIA.',
    },
    {
      q: 'What is the TNPSC Group 2 exam pattern?',
      a: 'A common preliminary examination of 200 objective questions for 300 marks in three hours — general studies 75, aptitude 25 and general Tamil or English 100 — at a minimum of 90, screening ten candidates per vacancy. Then a mains of two descriptive papers: Paper I, the Tamil eligibility test, 100 marks and qualifying at 40; and Paper II, general studies, 300 marks in three parts with a minimum of 90. Paper II alone builds the rank.',
    },
    {
      q: 'Is there negative marking in TNPSC Group 2?',
      a: 'Not for a wrong answer. Half a mark is deducted for each prelims question left entirely blank — the notification requires a candidate who does not know the answer to darken option E — and two marks for a wrong register number on a non-personalised sheet.',
    },
    {
      q: 'How many Group 2 posts are there in TNPSC 2026?',
      a: '43 after Addendum 7A of 3 September 2026: Assistant Inspector 7, Probation Officer 7, Special Branch Assistant 9, Assistant Section Officer in the Law and Legislative Assembly Secretariats 7, Sub-Registrar 3, Jailor 4, Special Assistant 2, and single posts of Deputy Commercial Tax Officer, Junior Employment Officer, ASO TNPSC and ASO cum Programmer. Group IIA has 803 in the same notification.',
    },
    {
      q: 'What is the TNPSC Group 2 age limit?',
      a: 'Reckoned as on 1 July 2026: a minimum of 18 for most posts, 20 for Sub-Registrar and 22 or 26 for the Probation Officer posts; a maximum of 32 for general candidates in most posts, with 34, 37 and 42 for specific posts. SC, SC(A), ST, MBC, DC, BC and BC(M) candidates have no maximum for every post except Deputy Commercial Tax Officer.',
    },
    {
      q: 'What are the TNPSC Group 2 fees?',
      a: 'One-time registration ₹150 valid five years; preliminary examination ₹100; main examination ₹150, or ₹300 for a candidate shortlisted for both Group II and Group IIA. SC, SC(A), ST, disabled and destitute-widow candidates are exempt from examination fees; BC, BC(M), MBC and DC candidates have three free chances and ex-servicemen two.',
    },
    {
      q: 'Does TNPSC publish Group 2 previous papers?',
      a: 'Yes, including the descriptive mains — the General Studies paper for February 2026 and February 2025, the Tamil eligibility test for March 2026 and February 2025, and earlier cycles — on its descriptive-papers page, and the common prelims with final keys from 2013 to 2025 on its answer-keys page.',
    },
  ],
}

const TN_GROUP_2A = {
  slug: 'tnpsc-group-2a',
  path: '/government-exams/state/tamil-nadu/tnpsc-group-2a/',
  name: 'TNPSC Group 2A',
  fullName: 'Tamil Nadu Public Service Commission Combined Civil Services Examination-II — Group IIA Services',
  authority: 'Tamil Nadu Public Service Commission (TNPSC)',
  official: OFFICIAL,
  seoTitle: 'TNPSC Group 2A 2026: 803 Posts, Prelims 1 Nov & CBT Mains',
  metaDescription:
    'TNPSC Group 2A — Notification 07/2026 with 803 posts and prelims on 1 November, the objective computer-based mains, the Tamil gate, eligibility and fees.',
  lead: [
    'TNPSC Group 2A fills the larger and lower of the two tiers in the Combined Civil Services Examination-II: Senior Revenue Inspector, Audit Inspector, Assistants and Accountants across departments, Junior Accountant, Executive Officer Grade-III, Lower Division Clerk and the other posts at pay levels 10 to 12. It is decided on an objective computer-based mains of 300 marks, and it is the recruitment most Tamil Nadu graduates first sit.',
    'The 2026 cycle was live when this page was checked. Notification No. 07/2026 closed on 9 September 2026 for 803 Group IIA posts alongside 43 Group II posts, and the common preliminary examination is on 1 November 2026. There is no interview and never has been for this tier; what distinguishes it from Group II is the mains, which here is 200 objective questions rather than a descriptive paper.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Public Service Commission'],
    ['Current cycle', 'Notification 07/2026 — 803 Group IIA posts; applications closed 9 September; prelims 1 November 2026'],
    ['Qualification', 'A bachelor’s degree; commerce for the accountant posts, diplomas accepted for some cooperative posts'],
    ['Stages', 'Common objective prelims at 1:10 → Tamil paper plus one objective computer-based paper of 300 marks'],
    ['Interview', 'None'],
    ['Marking', 'No deduction for a wrong answer; half a mark off for each question left blank'],
  ],
  overview: [
    {
      type: 'p',
      text: 'Group IIA is forty-seven post codes in the 2026 notification, 803 posts after the September addendum, spread across the revenue department’s Senior Revenue Inspectors district by district, the audit and accounts posts of the local fund and treasuries services, Assistants in a dozen departments, Junior Accountants, the town panchayats’ Executive Officers and Lower Division Clerks. The same prelims serves it and Group II; the shortlist for each mains is drawn separately at ten per vacancy.',
    },
    {
      type: 'p',
      text: 'The Group IIA mains is two papers. Paper I is the Tamil eligibility test at SSLC standard — descriptive, 100 marks, qualifying at 40 for every community — and Paper II is evaluated only for those who pass it. Paper II is a computer-based test of 200 questions for 300 marks in three hours: 150 on general studies at degree standard and 50 on general intelligence and reasoning at SSLC standard, with a minimum of 90. Paper II alone builds the rank list, and posts are allotted at counselling by rank and preference.',
    },
    {
      type: 'list',
      title: 'What separates Group 2A from Group 2',
      items: [
        { text: 'The mains is objective', note: 'a computer-based test of 200 questions. Group II’s mains is one descriptive paper of 300 marks, written by hand.' },
        { text: 'The posts are the ministerial tier', note: 'levels 10 to 12 — Assistants, Accountants, Revenue Inspectors, Clerks — against Group II’s levels 16 to 18.' },
        { text: 'The field is nineteen times larger', note: '803 posts against 43, and the shortlist at 1:10 means roughly eight thousand candidates in the mains.' },
        { text: 'Neither has an interview', note: 'Group IIA never did; Group II lost its oral test in 2024.' },
      ],
    },
    {
      type: 'note',
      title: 'The prelims is the same paper as Group 2 — and a third of it is language',
      text: 'Every Group IIA candidate sits the common preliminary examination on 1 November 2026: 75 general studies questions, 25 aptitude, and 100 questions of general Tamil or general English at SSLC standard. The language section is half the paper by question count and the section that improves fastest. A candidate who prepares general studies alone has prepared for a third of the prelims.',
    },
  ],
  stages: [
    {
      name: 'Common preliminary examination',
      mode: 'Objective, OMR — screening only',
      detail:
        'One paper of 200 questions and 300 marks in three hours, shared with Group II: general studies 75, aptitude 25, and general Tamil or general English 100. Minimum 90 for every community. Ten candidates per Group IIA vacancy proceed; the marks are then discarded.',
    },
    {
      name: 'Group IIA main examination',
      mode: 'Descriptive Tamil paper, then an objective computer-based paper',
      detail:
        'Paper I, the Tamil eligibility test at SSLC standard, qualifying at 40 out of 100 for every community. Paper II, a computer-based test of 200 questions for 300 marks in three hours — general studies 150 at degree standard, general intelligence and reasoning 50 at SSLC standard — with a minimum of 90. Paper II alone builds the rank.',
    },
    {
      name: 'Onscreen and physical certificate verification',
      mode: 'Documents, then counselling',
      detail:
        'Onscreen verification at three candidates per vacancy for general candidates and two for reserved communities; physical verification and counselling at three and one and a half. Posts allotted by rank and preference under the communal roster.',
    },
  ],
  updates: [
    {
      type: 'note',
      title: 'Notification 07/2026 — applications closed, prelims on 1 November 2026',
      text: `Checked ${CHECKED}. The current cycle, Notification No. 07/2026 of 11 August 2026, took applications to 9 September 2026 with a correction window from 13 to 15 September. The common preliminary examination is on 1 November 2026. Addendum 7A of 3 September raised one Secretariat Assistant post from 7 to 17 and added ten Supervisors of Industrial Cooperatives and three Assistants, taking Group IIA from 780 to 803 posts.`,
    },
    {
      type: 'list',
      title: 'Where the 803 Group IIA posts sit',
      items: [
        { text: 'Senior Revenue Inspector', note: 'notified district by district in the revenue department — the largest single family in the list.' },
        { text: 'Assistants across departments', note: 'including 17 in the Finance Secretariat after the addendum, and Assistants in the industries, cooperation, labour and other departments.' },
        { text: 'Audit Inspector, Senior Inspector, Handloom Inspector, Supervisor and Junior Superintendent', note: 'the inspectorate posts of the cooperative, audit and handloom departments.' },
        { text: 'Accountant, Junior Accountant, Executive Officer Grade-III, Male Warden, Assistant Grade-III, Lower Division Clerk', note: 'the accounts, endowments and clerical posts. Three of the endowments posts are for Hindus only.' },
        { text: 'Forty-seven post codes in all', note: 'and the post-wise reservation distribution is announced later. Preferences are submitted at verification.' },
      ],
    },
    {
      type: 'table',
      caption: 'The previous cycle, Notification 11/2025, as a guide to the timetable.',
      head: ['Stage', 'When'],
      rows: [
        ['Notification', '15 July 2025'],
        ['Preliminary examination', '28 September 2025'],
        ['Tamil eligibility test', '15 March 2026'],
        ['Group IIA mains — computer-based', '24 March 2026'],
        ['Marks and rank', '29 June 2026'],
        ['Onscreen verification list', '13 July 2026'],
        ['Physical verification and counselling list', '9 September 2026'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'Notification No. 07/2026', href: TN_G2_SRC.notification },
        { label: 'Addendum 7A — posts added', href: TN_G2_SRC.addendum7A },
        { label: 'TNPSC examination dashboard', href: TNPSC.dashboard },
        { label: 'TNPSC Group 2 — the other half of the notification', to: '/government-exams/state/tamil-nadu/tnpsc-group-2/' },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility under Notification 07/2026, with age reckoned as on 1 July 2026 and qualification held on the notification date.',
      head: ['Requirement', 'What the notification sets'],
      rows: [
        ['Qualification', 'A degree of a UGC-recognised university for most posts. Accountant and Junior Accountant posts take a commerce degree; some cooperative posts accept a diploma in rural services or the institute of chartered accountants’ associate diploma; some Assistant posts require typewriting.'],
        ['Minimum age', '18 for most posts; 25 for Executive Officer Grade-III.'],
        ['Maximum age — general', '32 for most posts; 37 for Executive Officer Grade-III.'],
        ['Maximum age — SC, SC(A), ST, MBC, DC, BC and BC(M)', 'No maximum for every Group IIA post — not having completed 60.'],
        ['Concessions', 'Persons with benchmark disability ten years more; ex-servicemen to 50; destitute widows no maximum.'],
        ['Religion', 'Audit Inspector, Executive Officer Grade-III and one Assistant post in the endowments department are open to persons professing the Hindu religion only.'],
        ['Government service', 'Candidates outside the reserved communities with five or more years of state service are not eligible.'],
        ['Fees', 'One-time registration ₹150; prelims ₹100; mains ₹150, or ₹300 if shortlisted for both groups. Exemptions as for Group 1.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group IIA scheme under Notification 07/2026. The prelims and the Tamil paper decide who continues; Paper II alone decides the rank.',
      head: ['Stage or paper', 'Content', 'Format', 'Duration', 'Marks', 'Minimum'],
      rows: [
        ['Common preliminary', 'General studies 75; aptitude 25; general Tamil or general English 100', 'Objective, OMR', '3 hours', '300, not counted', '90 for every community'],
        ['Mains — Paper I', 'Tamil eligibility test at SSLC standard', 'Descriptive, in Tamil', '3 hours', '100, not counted', '40 for every community'],
        ['Mains — Paper II', 'General studies 150 at degree standard; general intelligence and reasoning 50 at SSLC standard', 'Objective, computer-based, 200 questions', '3 hours', '300', '90 for every community'],
      ],
    },
    {
      type: 'note',
      title: 'Paper I gates Paper II, and the generic scheme page is wrong about Paper II',
      text: 'Paper II is evaluated only for candidates who score 40 in the Tamil eligibility test; a differently-abled candidate may claim exemption. The commission’s generic scheme page shows a Group IIA Paper II with a language section and a different prelims minimum; Notification 07/2026 shows neither, and the notification governs.',
    },
    {
      type: 'list',
      title: 'The rules that decide who progresses',
      items: [
        { text: 'The prelims admits ten per vacancy', note: 'separately from Group II, and its marks are not counted.' },
        { text: 'Blank answers cost half a mark', note: TN_BLANK_RULE },
        { text: 'Paper II is on a computer', note: 'the commission holds the Group IIA mains as a computer-based test, unlike the OMR prelims. The 2026 mains was on 24 March.' },
        { text: 'Reasoning is a quarter of Paper II', note: 'fifty questions at SSLC standard — the most drillable block in the examination.' },
        { text: 'Ties go to the higher qualification', note: 'then to age, then to the earlier application.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for a candidate sitting the prelims on 1 November 2026',
      items: [
        { text: 'Give the language paper half your prelims time', note: 'it is 100 of the 200 questions at SSLC standard, with published unit weights. It is where a general studies candidate is weakest and where marks move fastest.' },
        { text: 'Darken option E, never leave a blank', note: 'half a mark off per blank in the prelims; nothing off for a wrong answer.' },
        { text: 'Prepare Paper I as a subject', note: 'three hours of SSLC Tamil, 40 to pass, marked before Paper II is opened. In the 2025 cycle it was held nine days before the mains.' },
        { text: 'Drill reasoning as a quarter of the mains', note: 'fifty questions of general intelligence and reasoning at SSLC standard. Method, not reading.' },
        { text: 'Build the Tamil Nadu units as the core of general studies', note: 'the state’s economy, administration, history and culture carry 40 of the 75 prelims general studies questions and recur through Paper II.' },
        { text: 'Rehearse on a screen', note: 'Paper II is a computer-based test. Sit at least one full three-hour paper on a screen before the day.' },
        { text: 'Rank your post preferences early', note: 'forty-seven post codes across departments and districts. Counselling is by rank and preference; know the list before the shortlist.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination and the blank-answer deduction are quoted from Notification No. 07/2026 and Addendum 7A; the 2025 timetable from the commission’s examination dashboard. The commission publishes the common prelims papers with final keys, the Tamil eligibility papers, and the Group IIA mains papers with keys — the 2025 mains as a final key and the 2026 mains as a tentative one.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'Notification No. 07/2026 with scheme and syllabus', href: TN_G2_SRC.notification },
        { label: 'Addendum 7A, 3 September 2026', href: TN_G2_SRC.addendum7A },
        { label: 'Notification No. 11/2025 — the previous cycle', href: TN_G2_SRC.notification2025 },
        { label: 'Prelims syllabus with unit weights', href: TN_G2_SRC.prelimsSyllabus },
        { label: 'Tamil eligibility test syllabus', href: TN_G2_SRC.tamilSyllabus },
        { label: 'Group IIA mains 2025 final key', href: TN_G2_SRC.iiaMainsKey2025 },
        { label: 'Objective papers with final keys', href: TNPSC.answerKeys },
        { label: 'Descriptive question papers — Tamil eligibility test', href: TNPSC.descriptivePapers },
        { label: 'TNPSC annual planner', href: TNPSC.planner },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'TNPSC Group 2A syllabus — the common prelims with its unit weights, the Tamil eligibility paper, and the objective mains of general studies and reasoning.',
      lead: [
        'The prelims is half language. The mains is three-quarters general studies and a quarter reasoning. Neither has a descriptive paper beyond the Tamil test.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The common preliminary examination by unit — the same paper as Group II.',
          head: ['Unit', 'Questions'],
          rows: [
            ['Language — general Tamil or general English at SSLC standard: grammar 25, comprehension 20, vocabulary 15, literary works 15, writing 10, technical terms 10, translation 5', '100'],
            ['Indian economy and development administration in Tamil Nadu', '20'],
            ['History, culture and socio-political movements in Tamil Nadu', '20'],
            ['Indian polity', '15'],
            ['History of India and the national movement', '10'],
            ['General science; geography', '5 each'],
            ['Aptitude 15 and reasoning 10', '25'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Mains — Paper I, Tamil eligibility test',
              'Tamil at SSLC standard: grammar, comprehension, composition and literature. Descriptive, three hours, 100 marks, 40 to pass.',
            ],
            [
              'Mains — Paper II, general studies',
              'One hundred and fifty objective questions at degree standard on the prelims syllabus at greater depth: Tamil Nadu’s history, culture, economy and administration; the Indian polity; the national movement; science; geography; and current affairs.',
            ],
            [
              'Mains — Paper II, general intelligence and reasoning',
              'Fifty objective questions at SSLC standard: verbal and non-verbal reasoning, series, analogies, coding, direction sense, puzzles and data interpretation.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Prelims syllabus with unit weights', href: TN_G2_SRC.prelimsSyllabus },
            { label: 'Tamil eligibility test syllabus', href: TN_G2_SRC.tamilSyllabus },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'TNPSC Group 2A exam pattern — the common 1:10 prelims, the Tamil paper that gates the mains, the 200-question computer-based mains, and no interview.',
      lead: [
        'An objective examination throughout, apart from the Tamil gate. What counts is one three-hour screen test.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes.',
          head: ['Stage', 'Format', 'Counts?', 'What it decides'],
          rows: [
            ['Common prelims', 'Objective OMR, 300 marks', 'No', 'Who writes the Group IIA mains — ten per vacancy'],
            ['Mains Paper I', 'Descriptive Tamil, 100 marks', 'No', 'Whether Paper II is evaluated'],
            ['Mains Paper II', 'Objective computer-based, 300 marks', 'Yes', 'The whole rank'],
          ],
        },
        {
          type: 'p',
          text: 'The planning rule: the rank is one objective paper of 200 questions, and a quarter of it is reasoning. Drilled method moves that quarter faster than reading moves the rest, and with 803 posts and eight thousand candidates in the mains, the margin between ranks is a handful of questions.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The blank-answer deduction in the prelims', note: 'half a mark per blank, none per wrong answer, option E for the unknown.' },
            { text: 'Every minimum is the same for every community', note: '90 in the prelims, 40 in Paper I, 90 in Paper II.' },
            { text: 'Paper II is computer-based', note: 'unlike the OMR prelims.' },
            { text: 'Verification ratios differ by community', note: 'three per vacancy for general candidates, two for reserved at onscreen verification; three and one and a half at counselling.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'TNPSC Group 2A previous papers — the common prelims with keys, the Tamil eligibility papers, and the Group IIA mains with keys.',
      lead: [
        'Every stage of this examination has a published paper. The mains keys are the most useful of them.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The answer-keys page holds the common prelims with final keys for 2025, 2024, 2022, 2018, 2015 and 2013, the Group IIA mains of February 2025 with its final key, and the March 2026 mains with a tentative key. The descriptive-papers page holds the Tamil eligibility test for March 2026 and February 2025. That is a full set for the current scheme.',
        },
        {
          type: 'list',
          title: 'How to work the archive',
          items: [
            { text: 'Sit the 2025 and 2026 mains to time', note: '200 questions in three hours, on a screen if possible, then check against the key. Note the split between general studies and reasoning.' },
            { text: 'Sit the prelims with the blank rule', note: 'option E for every unknown, half a mark off per blank.' },
            { text: 'Work the language section as its own paper', note: 'a hundred SSLC-standard questions, with the published unit weights.' },
            { text: 'Use the Tamil eligibility papers early', note: 'the gate is the easiest paper to prepare from.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Group IIA mains 2025 final key', href: TN_G2_SRC.iiaMainsKey2025 },
            { label: 'Objective papers with final keys', href: TNPSC.answerKeys },
            { label: 'Descriptive question papers — Tamil eligibility test', href: TNPSC.descriptivePapers },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'TNPSC Group 2A mock tests — the common prelims with the blank rule, the language section as its own paper, and the 200-question mains on a screen.',
      lead: [
        'Three papers to rehearse, and the one that ranks you is on a computer.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A prelims paper fortnightly until 1 November', text: '200 questions in three hours, option E for every unknown, scored with half a mark off per blank.' },
            { title: 'A language sectional weekly', text: 'A hundred questions of SSLC Tamil or English in ninety minutes.' },
            { title: 'A mains paper fortnightly, on a screen', text: '200 questions in three hours — 150 general studies, 50 reasoning — scored separately by section.' },
            { title: 'A reasoning drill twice a week', text: 'Twenty minutes. A quarter of the mains, and a mechanical skill that decays without use.' },
            { title: 'A Tamil eligibility paper monthly', text: 'Three hours at SSLC standard, to 40.' },
          ],
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
        'TNPSC Group 2A preparation — a plan across the common prelims, the Tamil paper and the objective mains, weighted to language and reasoning.',
      lead: [
        'A fourteen-month examination for a candidate who reaches counselling. The prelims is in seven weeks.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan to the 2026 cycle',
          items: [
            { title: 'Now to 1 November — the prelims', text: 'The language paper at half the question count; the Tamil Nadu units at 40 of the 75 general studies questions; aptitude drilled. Option E as a reflex.' },
            { title: 'November to the mains — Paper II', text: 'General studies at depth with the state layer; reasoning drilled twice a week; fortnightly full papers on a screen; the Tamil eligibility paper monthly.' },
            { title: 'After the mains — preferences and documents', text: 'Forty-seven post codes; rank them before the shortlist. Certificates in the notification’s form.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2025 cycle taught',
          items: [
            { text: 'The Tamil test and the mains were nine days apart', note: '15 and 24 March 2026. Both have to be ready together.' },
            { text: 'Counselling came fourteen months after notification', note: 'July 2025 to September 2026.' },
            { text: 'The mains was on a computer', note: 'and the prelims on paper. Rehearse both formats.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'TNPSC Group 2A study material — what to read for the prelims language and general studies units, the reasoning quarter of the mains, and the Tamil paper.',
      lead: [
        'The commission weights the units. The reading follows the weights.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by unit.',
          head: ['Unit', 'Weight', 'What to work from'],
          rows: [
            ['General Tamil or general English', '100 prelims questions', 'The SSLC grammar and composition textbooks in the chosen language, and the published unit weights.'],
            ['Economy and development administration in Tamil Nadu', '20 prelims questions; Paper II', 'The state’s economic survey and its administration’s descriptions of its schemes.'],
            ['History, culture and movements of Tamil Nadu', '20 prelims questions; Paper II', 'The state board HSC history textbooks and the standard histories of the Tamil country.'],
            ['Indian polity; national movement; science; geography', '35 prelims questions; Paper II', 'Standard texts, NCERT level upward.'],
            ['Aptitude and reasoning', '25 prelims questions; 50 mains questions', 'An SSLC-standard aptitude and reasoning question bank, worked daily.'],
            ['Tamil eligibility paper', 'Gates Paper II', 'The ninth and tenth standard Tamil textbooks and the published papers.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the TNPSC Group 2A 2026 preliminary examination?',
      a: '1 November 2026, 9.30 to 12.30, under Notification No. 07/2026 — the common prelims shared with Group II. Applications closed on 9 September 2026. The mains dates will be announced later.',
    },
    {
      q: 'How many Group 2A posts are there in TNPSC 2026?',
      a: '803 after Addendum 7A of 3 September 2026, across forty-seven post codes — Senior Revenue Inspectors district by district, Assistants across departments, audit and cooperative inspectors, Accountants and Junior Accountants, Executive Officers Grade-III, Lower Division Clerks and others. Group II has 43 in the same notification.',
    },
    {
      q: 'What is the TNPSC Group 2A exam pattern?',
      a: 'A common preliminary examination of 200 objective questions for 300 marks in three hours — general studies 75, aptitude 25, general Tamil or English 100 — at a minimum of 90, screening ten candidates per vacancy. Then a mains of two papers: Paper I, the descriptive Tamil eligibility test, 100 marks and qualifying at 40; and Paper II, a computer-based test of 200 questions for 300 marks — general studies 150 and reasoning 50 — with a minimum of 90. Paper II alone builds the rank.',
    },
    {
      q: 'Is there an interview in TNPSC Group 2A?',
      a: 'No. Group IIA has never carried an interview, and since 2024 Group II has not either. Selection is on the mains Paper II alone, followed by certificate verification and counselling.',
    },
    {
      q: 'Is there negative marking in TNPSC Group 2A?',
      a: 'Not for a wrong answer. Half a mark is deducted for each prelims question left entirely blank — the notification requires a candidate who does not know the answer to darken option E — and two marks for a wrong register number on a non-personalised sheet.',
    },
    {
      q: 'What is the TNPSC Group 2A age limit?',
      a: 'Reckoned as on 1 July 2026: a minimum of 18 for most posts and 25 for Executive Officer Grade-III; a maximum of 32 for general candidates, or 37 for Executive Officer Grade-III. SC, SC(A), ST, MBC, DC, BC and BC(M) candidates have no maximum age for any Group IIA post. Candidates outside the reserved communities with five years of state service are not eligible.',
    },
    {
      q: 'What are the TNPSC Group 2A fees?',
      a: 'One-time registration ₹150 valid five years; preliminary examination ₹100; main examination ₹150, or ₹300 for a candidate shortlisted for both groups. SC, SC(A), ST, disabled and destitute-widow candidates are exempt from examination fees; BC, BC(M), MBC and DC candidates have three free chances and ex-servicemen two.',
    },
    {
      q: 'Is the TNPSC Group 2A mains on a computer?',
      a: 'Yes. Paper II of the Group IIA mains is held as a computer-based test — 200 questions in three hours — while the common prelims is on OMR sheets. The 2026 Group IIA mains was held on 24 March 2026.',
    },
    {
      q: 'Does TNPSC publish Group 2A previous papers?',
      a: 'Yes. The common prelims with final keys from 2013 to 2025, the Group IIA mains of February 2025 with its final key and of March 2026 with a tentative key, and the Tamil eligibility papers for 2025 and 2026 are all on the commission’s site.',
    },
  ],
}

/* ── TNPSC Group 4 and the Village Administrative Officer ───────
   One notification, one paper, one merit list. The VAO has been recruited
   inside the Group 4 combined examination since 2017 and differs from the
   ministerial posts only in age — a higher floor and, for reserved
   communities, a ceiling the other posts do not have. The 07/2025 cycle grew
   from 3,935 to 5,307 posts through three addenda and was still counselling
   at CHECKED; the planner puts the next notification in October 2026. */
const TN_G4_SRC = {
  notification: 'https://tnpsc.gov.in/Document/english/Grp%20IV%20English_.pdf',
  addendum7A: 'https://tnpsc.gov.in/Document/english/Addendum%207A%202025_ENGLISH_GROUP4.pdf',
  addendum7B: 'https://tnpsc.gov.in/Document/english/Addendum_7B_English.pdf',
  addendum7C: 'https://tnpsc.gov.in/Document/english/Addendum_7C_2025.pdf',
  addendum7D: 'https://tnpsc.gov.in/Document/english/Addendum_7D_2025_ENGLISH.pdf',
  notification2024: 'https://tnpsc.gov.in/Document/english/1_2024-Eng.pdf',
  notification2022: 'https://tnpsc.gov.in/Document/english/2022_07_CCSE4_g4_eng.pdf',
  syllabus: 'https://tnpsc.gov.in/static_pdf/syllabus/496_Group%20IV%20Syllabus.pdf',
  paper2025: 'https://tnpsc.gov.in/Tentative/Document/07_2025_GENEAL_TAMIL_GS.pdf',
  key2025: 'https://tnpsc.gov.in/Document/Answerkeyfinalresult/07_2025_CCSE_IV_FINAL_ANSWER_KEY.pdf',
  key2024: 'https://tnpsc.gov.in/Document/Answerkeyfinalresult/01_2024_Final%20_Answer_Key_GT_GE.pdf',
  ocvList: 'https://tnpsc.gov.in/document/Certificateverification/07_2025_GR_IV_JA_TYP_STENO_TYP_PUB_SEL_LIST_OCV.pdf',
}

const TN_GROUP_4 = {
  slug: 'tnpsc-group-4',
  path: '/government-exams/state/tamil-nadu/tnpsc-group-4/',
  name: 'TNPSC Group 4',
  fullName: 'Tamil Nadu Public Service Commission Combined Civil Services Examination-IV — Group IV Services',
  authority: 'Tamil Nadu Public Service Commission (TNPSC)',
  official: OFFICIAL,
  seoTitle: 'TNPSC Group 4 2026: One Paper, 300 Marks, Tamil Gate & Next Date',
  metaDescription:
    'TNPSC Group 4 — the single 300-mark paper with its Tamil gate at 60, the 90-mark pass, eligibility, typewriting rules, fees and the October 2026 planner date.',
  lead: [
    'TNPSC Group 4 is the largest recruitment the commission runs: Junior Assistant, Typist, Steno-Typist, Junior Revenue Inspector, Village Administrative Officer, Forest Guard and Forest Watcher, and the clerical posts of a dozen boards and corporations, filled through one combined examination. The 2025 cycle began at 3,935 posts and grew through three addenda to 5,307, and its counselling was still running when this page was checked.',
    'It is one paper. Two hundred questions for 300 marks in three hours, of which the first hundred are Tamil — and a candidate who does not score 60 of the 150 Tamil marks has the rest of the paper left unmarked. There is no prelims, no mains, no interview, no typing test and no penalty for a wrong answer; the only deduction is for a question left blank. The commission’s planner puts the next notification on 6 October 2026 and the examination on 20 December.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Public Service Commission'],
    ['Current status', '2025 cycle in counselling; no window open; the planner’s next notification date is 6 October 2026'],
    ['Qualification', 'A pass in SSLC for most posts; typewriting and shorthand certificates for Typist and Steno-Typist; HSC science for Forest Guard'],
    ['Paper', 'One — Tamil 100 questions for 150 marks, then general studies and aptitude 100 questions for 150; 300 in all'],
    ['The gate', '60 of the 150 Tamil marks, or the rest of the paper is not evaluated; 90 of 300 to qualify'],
    ['Marking', 'No deduction for a wrong answer; half a mark off for each question left blank'],
  ],
  overview: [
    {
      type: 'p',
      text: 'Group 4 fills the base of the state’s ministerial and revenue services. The 2025 notification listed Junior Assistant in the ministerial, judicial and secretariat services, Typist and Steno-Typist Grade-III, Junior Revenue Inspector, the Village Administrative Officer, the forest department’s guards and watchers, and clerical posts in the pollution control board, the electricity utility, the industrial corporations and the medical university — thirty-odd post codes, each with its own qualification and, at counselling, its own unit-wise distribution.',
    },
    {
      type: 'p',
      text: 'Every candidate sits the same paper and lands on the same merit list; the posts are allotted at counselling by rank, preference and the typewriting or shorthand grades a candidate holds. Because the paper is single-stage and objective, the whole competition happens in three hours, and because a third of its marks are Tamil at SSLC standard, the candidates who score highest are usually those who prepared the language as seriously as the general studies.',
    },
    {
      type: 'list',
      title: 'What sets Group 4 apart',
      items: [
        { text: 'One paper decides everything', note: 'no prelims to screen, no mains to write, no interview. Two hundred questions and a merit list.' },
        { text: 'Tamil is half the questions and a gate', note: 'a hundred questions for 150 marks, set in Tamil only, and a score below 60 stops the general studies section being marked. The Tamil marks then count in full towards the rank.' },
        { text: 'Typewriting is a qualification, not a test', note: 'Typist and Steno-Typist posts require the government technical examination certificates at application; the commission conducts no typing or skill test at any stage.' },
        { text: 'The vacancy list grows after notification', note: 'by 1,372 posts across three addenda in 2025, including whole new post codes. The number at counselling is the one that matters.' },
        { text: 'No upper age for reserved communities with a higher qualification', note: 'for most posts, an SC, ST, BC or MBC candidate holding more than the minimum qualification has no maximum age. The VAO and forest posts are the exception.' },
      ],
    },
    {
      type: 'note',
      title: 'The Tamil gate decides whether your paper is read',
      text: 'The notification is explicit: Parts B and C are evaluated only if the candidate secures 40 per cent — 60 marks — in Part A. A candidate whose general studies is strong and whose Tamil is not can have two-thirds of the paper left unmarked. The syllabus is SSLC-standard Tamil, which is finite; the threshold is modest for anyone who prepares it and absolute for anyone who does not. A differently-abled candidate who studied only in English may take General English in its place.',
    },
  ],
  stages: [
    {
      name: 'Written examination',
      mode: 'Objective, OMR, single paper',
      detail:
        'Part A, Tamil at SSLC standard, 100 questions for 150 marks; Part B general studies, 75 questions, and Part C aptitude and mental ability, 25 questions, for 150 marks together. Three hours. Sixty in Part A for the rest to be marked; 90 in all to qualify. One merit list on the total.',
    },
    {
      name: 'Onscreen certificate verification',
      mode: 'Documents, uploaded',
      detail:
        'Shortlisted at three candidates per vacancy for general candidates and two for reserved communities for the ministerial posts, and six per vacancy for the forest posts. Typewriting, shorthand and computer certificates are checked here.',
    },
    {
      name: 'Physical standards and endurance — forest posts only',
      mode: 'Qualifying, at Chennai',
      detail:
        'A walk of 25 kilometres for men and 16 for women in four hours, with the physical standards the forest posts prescribe.',
    },
    {
      name: 'Physical verification and counselling',
      mode: 'By rank and preference',
      detail:
        'At three per vacancy for general candidates and one and a half for reserved communities. Posts are allotted by rank, preference and — for Typist and Steno-Typist — the grades of typewriting and shorthand held. Run in phases; the 2025 cycle had four by August 2026.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The most recent Group 4 cycle is Notification No. 07/2025 of 25 April 2025. Its examination was held on 12 July 2025, marks and ranks were published on 22 October, and counselling has run in four phases — December 2025, February, April and July 2026 — with the forest posts on their own track through August. No final selection list had been published. No window is open; the commission’s annual planner puts the next Group 4 notification on 6 October 2026 with the examination on 20 December, and describes both dates as tentative.`,
    },
    {
      type: 'table',
      caption: 'The 07/2025 cycle, end to end, as the commission’s own documents record it.',
      head: ['Stage', 'When'],
      rows: [
        ['Notification', '25 April 2025'],
        ['Applications', '25 April to 24 May 2025, with a correction window to 31 May'],
        ['Addenda', '7A on 21 May 2025 — the blank-answer rule and age clauses; 7B on 26 September — 727 posts added; 7C on 3 December — 645 more; 7D on 12 December — unit-wise revisions'],
        ['Written examination', '12 July 2025, 9.30 to 12.30'],
        ['Final answer key', '17 November 2025'],
        ['Marks and rank', '22 October 2025'],
        ['Onscreen verification', 'Uploads 29 October to 7 November 2025'],
        ['Counselling', 'Phase I 8 to 18 December 2025; Phase II from 4 February 2026; Phase III from 10 April; Phase IV from 24 July; forest-post verification and physical tests through 14 August'],
      ],
    },
    {
      type: 'table',
      caption: 'How the vacancy list grew. The last stated total is 5,307; Addendum 7D revised units without restating it.',
      head: ['Post', 'Notified', 'After 7B', 'After 7C'],
      rows: [
        ['Junior Assistant, security and non-security', '1,667', '1,969', '2,216'],
        ['Typist', '1,099', '1,392', '1,598'],
        ['Steno-Typist Grade-III', '335', '361', '412'],
        ['Village Administrative Officer', '215', '218', '218'],
        ['Junior Revenue Inspector', '239', '239', '239'],
        ['Forest Guard, with and without driving licence; Forest Watcher', '257', '278', '278'],
        ['New post codes added by addenda', '—', 'Typist and clerical posts in the pollution control board, TUFIDCO, TNERC, TIDCO, ELCOT, the maritime board and the power distribution corporation', 'Assistants, typists and stenographers in the medical university; posts in the housing board, the Waqf board and the Secretariat'],
        ['Total', '3,935', '4,662', '5,307'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'TNPSC examination dashboard', href: TNPSC.dashboard },
        { label: 'TNPSC annual planner — next Group 4 date', href: TNPSC.planner },
        { label: 'TNPSC press releases — counselling phases', href: TNPSC.pressReleases },
        { label: 'The Village Administrative Officer inside Group 4', to: '/government-exams/state/tamil-nadu/village-administrative-officer/' },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Qualification by post under Notification 07/2025, held on the notification date. The typewriting and shorthand certificates are qualifications, not tests.',
      head: ['Post', 'Qualification'],
      rows: [
        ['Junior Assistant, Junior Revenue Inspector, Village Administrative Officer, Forest Watcher', 'The minimum general educational qualification — a pass in the SSLC of Tamil Nadu, with the open-school tenth deemed equivalent.'],
        ['Typist', 'SSLC, plus the Government Technical Examination in Typewriting — Higher or Senior grade in both Tamil and English, or Higher in one and Lower in the other — plus the certificate course in computer office automation, which may be acquired within two years of appointment.'],
        ['Steno-Typist Grade-III', 'SSLC, plus the Government Technical Examination in both Typewriting and Shorthand at the same grade combinations, plus the computer certificate.'],
        ['Personal Clerk and the degree-level clerical posts', 'A degree, with typewriting and shorthand at Higher grade in Tamil and English and the computer certificate, as tabulated per post.'],
        ['Forest Guard', 'HSC with physics, chemistry, biology, zoology or botany; with a driving licence, three years’ experience and a first-aid certificate for the driving post.'],
      ],
    },
    {
      type: 'table',
      caption: 'Age under Notification 07/2025, reckoned as on 1 July 2025. The Village Administrative Officer and the forest posts have their own bands; see the VAO page.',
      head: ['Candidates', 'Ministerial posts', 'VAO and forest posts'],
      rows: [
        ['General — minimum', '18', '21'],
        ['General — maximum', '32', '32'],
        ['SC, SC(A), ST, BC, BC(M), MBC and DC', '34 or 37 by community — and no maximum at all for a candidate holding a qualification higher than SSLC', 'VAO 42, forest posts 37 — with no higher-qualification relaxation'],
        ['Persons with benchmark disability', '42 general; 44 to 47 reserved', 'VAO 42 general, 52 reserved'],
        ['Ex-servicemen', '50 general; 55 reserved', 'As for ministerial posts'],
        ['Destitute widows', '37, and no maximum with a higher qualification', 'VAO 37 general, 42 reserved; no relaxation'],
      ],
    },
    {
      type: 'list',
      title: 'The conditions that recur',
      items: [
        { text: 'No maximum means not having completed 60', note: 'on 1 July 2025.' },
        { text: 'Five years of state service disqualifies a non-reserved candidate', note: 'even within age.' },
        { text: 'Tamil must be proved or passed', note: 'Tamil as a language in SSLC, HSC or degree, Tamil-medium schooling, or the Second Class Language Test — otherwise within two years of appointment.' },
        { text: 'Fees', note: 'one-time registration ₹150 valid five years; examination ₹100. SC, SC(A), ST, disabled and destitute-widow candidates fully exempt; BC, BC(M), MBC and DC candidates three free chances; ex-servicemen two.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group 4 paper under Notification 07/2025 — one sitting, three parts, 300 marks. Part A gates Parts B and C; all three count towards the rank.',
      head: ['Part', 'Content', 'Standard', 'Questions', 'Marks', 'Rule'],
      rows: [
        ['Part A', 'Tamil eligibility-cum-scoring test, set in Tamil', 'SSLC', '100', '150', '60 required for Parts B and C to be evaluated'],
        ['Part B', 'General studies', 'SSLC', '75', '150 for B and C together', '—'],
        ['Part C', 'Aptitude and mental ability', 'SSLC', '25', '', '—'],
        ['Total', '', '', '200', '300', '90 to qualify, every community; three hours'],
      ],
    },
    {
      type: 'note',
      title: 'The only deduction is for a blank',
      text: TN_BLANK_RULE + ' The rule was introduced for this cycle by Addendum 7A, and it is the reason the answer sheet carries a fifth option.',
    },
    {
      type: 'list',
      title: 'The rules that decide who progresses',
      items: [
        { text: 'One merit list on the total of 300', note: 'the Tamil marks count in full, unlike the Group 1 and 2 Tamil papers, which qualify and are discarded.' },
        { text: 'No typing test at any stage', note: 'the notification contains no typing, skill or computer test. Typewriting and shorthand certificates are qualifications checked at verification, and their grades decide preference between Typist and Steno-Typist candidates.' },
        { text: 'Ties go to the higher qualification', note: 'then to the higher typewriting or shorthand grade for the typist posts, then to age, then to the earlier application.' },
        { text: 'Verification ratios differ by post and community', note: 'three per vacancy for general candidates and two for reserved at onscreen verification; six per vacancy for the forest posts; three and one and a half at counselling.' },
        { text: 'The forest posts add a walk', note: '25 kilometres for men and 16 for women in four hours, at Chennai, qualifying only.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for a candidate aiming at the December 2026 examination',
      items: [
        { text: 'Prepare Tamil as half the paper', note: 'because it is — a hundred questions, 150 marks, a gate at 60 and a full contribution to the rank. SSLC-standard grammar, literature and comprehension from the state board textbooks.' },
        { text: 'Darken option E, never leave a blank', note: 'half a mark off per blank, nothing for a wrong answer. Practise until it is automatic.' },
        { text: 'Build general studies at SSLC standard with the state layer', note: 'the Tamil Nadu units of history, geography, economy and administration run through the 75 questions.' },
        { text: 'Drill aptitude for the 25', note: 'SSLC arithmetic and reasoning, daily, for the quarter of Parts B and C that rewards method.' },
        { text: 'Hold the certificates before the notification', note: 'the typewriting and shorthand government technical examinations for Typist and Steno-Typist, the computer certificate, and the Tamil evidence. They cannot be acquired inside a four-week window.' },
        { text: 'Rank the posts you would accept', note: 'thirty-odd post codes, allotted by rank and preference at counselling. Know the list, the units and the grades before the shortlist.' },
        { text: 'Work the published papers', note: 'the commission publishes the Group 4 paper and key for every cycle from 2016 to 2025. Six papers of the current shape.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination, the Tamil gate, the blank-answer deduction and the verification ratios are quoted from Notification No. 07/2025 and its four addenda; the timetable from the commission’s verification lists and press releases. The commission publishes the Group 4 question paper and final key for every cycle — 2016, 2017, 2019, 2022, 2024 and 2025 — and the standalone VAO papers of 2012, 2014 and 2016.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'Notification No. 07/2025', href: TN_G4_SRC.notification },
        { label: 'Addendum 7A — the blank-answer rule and age clauses', href: TN_G4_SRC.addendum7A },
        { label: 'Addendum 7B — 727 posts added', href: TN_G4_SRC.addendum7B },
        { label: 'Addendum 7C — 645 posts added', href: TN_G4_SRC.addendum7C },
        { label: 'Addendum 7D — unit revisions', href: TN_G4_SRC.addendum7D },
        { label: 'Group 4 syllabus', href: TN_G4_SRC.syllabus },
        { label: 'Group 4 2025 question paper — Tamil and general studies', href: TN_G4_SRC.paper2025 },
        { label: 'Group 4 2025 final answer key', href: TN_G4_SRC.key2025 },
        { label: 'Group 4 2024 final answer key', href: TN_G4_SRC.key2024 },
        { label: 'Onscreen verification list, October 2025', href: TN_G4_SRC.ocvList },
        { label: 'Objective papers with final keys — all cycles', href: TNPSC.answerKeys },
        { label: 'TNPSC annual planner', href: TNPSC.planner },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'TNPSC Group 4 syllabus — the Tamil part that is half the paper, the SSLC-standard general studies units and the aptitude section.',
      lead: [
        'Everything at SSLC standard. Half the questions are Tamil, and the general studies half has a Tamil Nadu layer through it.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Part A — Tamil',
              'A hundred questions at the SSLC standard of the state board, set in Tamil: grammar — sandhi, samasa, verb forms, sentence types — vocabulary, comprehension, Tamil literature and its authors, and the Tamil of everyday administrative use. The gate at 60 and a full 150 towards the rank.',
            ],
            [
              'Part B — General studies',
              'General science; current events; the geography of India and Tamil Nadu; the history and culture of India and the national movement; the history, culture, heritage and socio-political movements of Tamil Nadu; the Indian polity; the Indian economy and the development administration of Tamil Nadu. Seventy-five questions at SSLC standard.',
            ],
            [
              'Part C — Aptitude and mental ability',
              'Twenty-five questions of SSLC arithmetic — simplification, percentages, ratio, averages, area and volume, interest — and reasoning — series, analogy, coding, puzzles, data interpretation.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'The commission publishes one syllabus document for the paper and labels its first section general studies where the notification labels it Tamil; the content is the same. Read the whole paper as SSLC-standard — the difficulty is breadth and speed, not depth.',
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Group 4 syllabus', href: TN_G4_SRC.syllabus },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'TNPSC Group 4 exam pattern — one 300-mark paper, the Tamil gate at 60, the 90-mark pass, the blank-answer deduction and the counselling ratios.',
      lead: [
        'A single paper with a gate inside it. What counts is the total; what decides whether the total exists is Part A.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each part does.',
          head: ['Part', 'Marks', 'Gate', 'Counts?'],
          rows: [
            ['Part A — Tamil, 100 questions', '150', '60 required for B and C to be marked', 'Yes, in full'],
            ['Parts B and C — general studies 75, aptitude 25', '150', '—', 'Yes'],
            ['Total', '300', '90 to qualify', 'One merit list'],
          ],
        },
        {
          type: 'p',
          text: 'The planning rule is arithmetic. A candidate at 60 in Part A and 90 in Parts B and C is at 150 and qualified; a candidate at 120 in Part A and 60 in Parts B and C is at 180 and ahead. Tamil is the larger and the more improvable half, and it is the half candidates from a general studies background under-prepare.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The blank-answer deduction', note: 'half a mark for every unanswered question. Option E exists to be darkened.' },
            { text: 'No typing test', note: 'typewriting and shorthand certificates are qualifications; the commission tests nothing.' },
            { text: 'Verification is onscreen first', note: 'documents uploaded within a window after the rank list; missing that window is missing the post.' },
            { text: 'Counselling runs in phases', note: 'four in the 2025 cycle across eight months, with the forest posts on their own track.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'TNPSC Group 4 previous papers — six cycles of the paper with final keys, published by the commission, and the standalone VAO papers before them.',
      lead: [
        'The commission publishes the Group 4 paper and its key every cycle. Six papers of the current shape are there to work.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The answer-keys page holds the Group 4 papers with final keys for the cycles examined on 12 July 2025, 9 June 2024, 24 July 2022, 1 September 2019, 11 February 2018 and 6 November 2016, and the standalone VAO examinations of 2012, 2014 and 2016 before the post was merged into the combined examination. The 2025 paper is published in both its Tamil-and-general-studies and its English-and-general-studies versions.',
        },
        {
          type: 'list',
          title: 'How to work the archive',
          items: [
            { text: 'Sit each paper in one three-hour sitting with the blank rule', note: 'option E for every unknown, half a mark off per blank, and Part A scored first to see whether the gate is cleared.' },
            { text: 'Track the Tamil units across cycles', note: 'grammar, literature and comprehension in roughly stable proportions. The 2024 and 2025 papers are the current shape.' },
            { text: 'Collect the Tamil Nadu general studies questions', note: 'districts, rivers, dynasties, movements, schemes — into one file across the six papers.' },
            { text: 'Time Part C separately', note: 'twenty-five aptitude questions in the minutes left after 175 others is a pace problem the archive teaches.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Group 4 2025 question paper', href: TN_G4_SRC.paper2025 },
            { label: 'Group 4 2025 final key', href: TN_G4_SRC.key2025 },
            { label: 'Group 4 2024 final key', href: TN_G4_SRC.key2024 },
            { label: 'Objective papers with final keys — all cycles', href: TNPSC.answerKeys },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'TNPSC Group 4 mock tests — full 200-question sittings with the Tamil gate and the blank rule scored the commission’s way.',
      lead: [
        'One paper, so one kind of mock: the whole thing, in three hours, scored with the gate and the deduction.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the paper',
          items: [
            { title: 'A full paper weekly', text: '200 questions in three hours from the published papers, option E for every unknown, half a mark off per blank, Part A scored first against 60.' },
            { title: 'A Tamil sectional midweek', text: 'A hundred questions in ninety minutes. Half the paper, the gate, and the fastest half to improve.' },
            { title: 'A general studies sectional fortnightly', text: 'Seventy-five SSLC-standard questions with the state layer.' },
            { title: 'An aptitude drill twice a week', text: 'Twenty minutes of SSLC arithmetic and reasoning.' },
          ],
        },
        {
          type: 'note',
          title: 'Score the gate before the total',
          text: 'A mock that reports only a total hides the one thing that ends candidacies. Score Part A first; if it is below 60, the total is zero, whatever Parts B and C came to. Then score the whole with the blank deduction.',
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
        'TNPSC Group 4 preparation — a plan for a single-paper examination with a Tamil gate, notified in October and examined in December if the planner holds.',
      lead: [
        'A two-month gap from notification to examination, and a year of counselling after it. Prepare before the notification; apply in the window; hold the documents.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan to the December 2026 examination',
          items: [
            { title: 'Now to October — Tamil and the foundation', text: 'SSLC Tamil as a subject; general studies at SSLC standard with the Tamil Nadu layer; aptitude daily. The typewriting and shorthand certificates in hand for the typist posts.' },
            { title: 'October — the notification', text: 'Four weeks to apply. Read the post codes, the units and the age clause for your community before the syllabus; rank your preferences.' },
            { title: 'October to December — papers under the clock', text: 'A full paper weekly with the gate and the blank rule; Tamil sectionals midweek.' },
            { title: 'After the examination — the documents', text: 'Onscreen verification opens within weeks of the rank list and uploads have a window. Counselling runs in phases across months.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2025 cycle taught',
          items: [
            { text: 'The vacancy list grew by a third after notification', note: '3,935 to 5,307 across three addenda, with new post codes. Read every addendum.' },
            { text: 'The blank rule was added by addendum', note: 'a month after notification. It changed how the paper had to be answered.' },
            { text: 'Counselling ran for a year', note: 'four phases from December 2025 to July 2026, and the forest posts through August, with no final list by September.' },
            { text: 'The date held', note: '12 July 2025 as notified. The planner’s 20 December 2026 is tentative, but the commission has kept recent Group 4 dates.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'TNPSC Group 4 study material — the SSLC textbooks that are the syllabus, and how to build the Tamil Nadu layer.',
      lead: [
        'The whole paper is SSLC standard. The textbooks are the material.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by part.',
          head: ['Part', 'What to work from'],
          rows: [
            ['Tamil', 'The state board Tamil textbooks for the sixth to tenth standards — grammar, prose, poetry and their authors — and the six published papers.'],
            ['General science', 'The state board science textbooks to the tenth standard.'],
            ['History, geography, polity, economy', 'The state board social science textbooks to the tenth standard, with the Tamil Nadu chapters read twice.'],
            ['Tamil Nadu history, culture and movements', 'The state board history textbooks and a short history of the Tamil country.'],
            ['Current events', 'A weekly digest, with the state’s schemes and administration.'],
            ['Aptitude and mental ability', 'The state board mathematics textbooks to the tenth standard and a reasoning question bank.'],
          ],
        },
        {
          type: 'note',
          title: 'The textbooks are the syllabus',
          text: 'The commission sets every part at SSLC standard and the state board textbooks are the specification of that standard. A candidate who has read the sixth-to-tenth Tamil and social science books thoroughly has read the syllabus; a candidate working from a coaching compilation has read someone’s summary of it.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the next TNPSC Group 4 notification?',
      a: 'The commission’s annual planner for 2026 puts the next Group 4 notification on 6 October 2026 and the examination on 20 December 2026, both marked tentative. As at 11 September 2026 no window was open and the 2025 cycle was still in counselling.',
    },
    {
      q: 'What is the TNPSC Group 4 exam pattern?',
      a: 'One objective paper of 200 questions for 300 marks in three hours: Part A, Tamil at SSLC standard, 100 questions for 150 marks; Parts B and C, general studies 75 questions and aptitude 25, for 150 marks together. Parts B and C are evaluated only for candidates scoring 60 in Part A. Ninety of 300 qualifies. There is no prelims, no mains, no interview and no typing test.',
    },
    {
      q: 'Is there negative marking in TNPSC Group 4?',
      a: 'Not for a wrong answer. Since Addendum 7A of May 2025, half a mark is deducted for every question left entirely blank — a candidate who does not know the answer must darken option E — and half a mark if the thumb impression is not affixed. The penalty is for not answering.',
    },
    {
      q: 'What is the Tamil eligibility test in TNPSC Group 4?',
      a: 'Part A of the paper — 100 questions of SSLC-standard Tamil for 150 marks, set in Tamil. A candidate must score 60 for Parts B and C to be evaluated, and the Tamil marks then count in full towards the rank. A differently-abled candidate who studied only in English may take General English instead.',
    },
    {
      q: 'Is there a typing test in TNPSC Group 4?',
      a: 'No. The notification contains no typing, skill or computer test. Typist and Steno-Typist posts require the Government Technical Examination certificates in typewriting and shorthand at the notification date, and the grades held decide preference at counselling — but the commission conducts no test.',
    },
    {
      q: 'How many posts were in TNPSC Group 4 2025?',
      a: '3,935 as notified on 25 April 2025, rising to 4,662 after Addendum 7B and 5,307 after Addendum 7C — 2,216 Junior Assistants, 1,598 Typists, 412 Steno-Typists, 218 Village Administrative Officers, 239 Junior Revenue Inspectors, 278 forest posts and clerical posts across the boards and corporations. The notification calls the figures tentative until counselling.',
    },
    {
      q: 'What is the TNPSC Group 4 age limit?',
      a: 'For the ministerial posts, reckoned as on 1 July 2025: 18 to 32 for general candidates; 18 to 34 or 37 by community for reserved candidates, with no maximum at all for a reserved candidate holding a qualification above SSLC. The Village Administrative Officer and forest posts start at 21 and carry a fixed ceiling — 42 for reserved VAO candidates — with no higher-qualification relaxation.',
    },
    {
      q: 'What are the TNPSC Group 4 fees?',
      a: 'One-time registration ₹150 valid five years, and an examination fee of ₹100. SC, SC(A), ST, disabled and destitute-widow candidates are fully exempt from the examination fee; BC, BC(M), MBC and DC candidates have three free chances and ex-servicemen two.',
    },
    {
      q: 'Does TNPSC publish Group 4 previous papers?',
      a: 'Yes, every cycle. The papers with final keys for 2016, 2017, 2019, 2022, 2024 and 2025 are on the commission’s answer-keys page, along with the standalone VAO papers of 2012, 2014 and 2016.',
    },
    {
      q: 'Is the Village Administrative Officer part of TNPSC Group 4?',
      a: 'Yes, since 2017. The VAO is post code 2025 in the Group 4 combined examination — 218 posts in the 2025 cycle — with the same paper, fee and syllabus as the ministerial posts but its own age band: a minimum of 21 and a ceiling of 42 for reserved communities with no higher-qualification relaxation.',
    },
  ],
}

const TN_VAO = {
  slug: 'village-administrative-officer',
  path: '/government-exams/state/tamil-nadu/village-administrative-officer/',
  name: 'Village Administrative Officer',
  fullName: 'Tamil Nadu Village Administrative Officer — recruited through the Group 4 combined examination',
  authority: 'Tamil Nadu Public Service Commission (TNPSC), through the Combined Civil Services Examination-IV',
  official: OFFICIAL,
  seoTitle: 'TN VAO 2026: Age Rule, Group 4 Paper & Next Notification',
  metaDescription:
    'Tamil Nadu VAO — recruited inside TNPSC Group 4 since 2017: the 218 posts of 2025, the VAO age band, the paper, the Tamil gate and the October 2026 date.',
  lead: [
    'The Village Administrative Officer is the revenue department’s officer in the village — the keeper of its land records, the issuer of its certificates, the first point of contact for its people with the state. Tamil Nadu has recruited to the post through the Group 4 combined examination since 2017; the standalone VAO examinations of 2012, 2014 and 2016 were the last of their kind.',
    'That matters for what a VAO aspirant has to know. The paper, the fee, the syllabus, the Tamil gate and the blank-answer rule are Group 4’s. What is particular to the VAO is the age band — a minimum of 21 where the ministerial posts start at 18, a ceiling of 42 for reserved communities where the ministerial posts have none, and no relaxation for a higher qualification — and the district-wise allotment of a post that is, in the end, a village.',
  ],
  quickFacts: [
    ['Recruited through', 'TNPSC Group 4 — the Combined Civil Services Examination-IV, post code 2025'],
    ['Current status', '218 posts in the 2025 cycle, now in counselling; no window open; the planner’s next Group 4 date is 6 October 2026'],
    ['Qualification', 'A pass in SSLC — the same as Junior Assistant; no degree, no typewriting'],
    ['Age', '21 to 32 for general candidates; 21 to 42 for reserved communities, with no higher-qualification relaxation'],
    ['Paper', 'The Group 4 paper — Tamil 150 marks with a gate at 60, general studies and aptitude 150'],
    ['Selection', 'One merit list with the ministerial posts; allotted by rank and preference at counselling'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The VAO sits at the base of the revenue administration. The post keeps the village’s land and revenue records, issues the certificates a resident needs from the state, reports to the tahsildar, and is the officer through whom relief, welfare and revenue collection reach the village. It is in the Tamil Nadu Ministerial Service at pay level 8, and it is recruited district by district.',
    },
    {
      type: 'p',
      text: 'Until 2016 the commission notified it on its own. From Notification 23/2017 it has been a post code inside the Group 4 combined examination — 215 posts in the April 2025 notification, 218 after the September addendum — sharing one paper and one merit list with Junior Assistant, Typist, Junior Revenue Inspector and the rest. A candidate does not apply for the VAO; a candidate applies for Group 4 and ranks the VAO among their preferences at counselling, where posts are allotted by rank and the district distribution the addenda publish.',
    },
    {
      type: 'list',
      title: 'What is particular to the VAO inside Group 4',
      items: [
        { text: 'The age floor is 21', note: 'against 18 for the ministerial posts. A candidate of 20 may sit Group 4 for Junior Assistant but not be allotted the VAO.' },
        { text: 'The age ceiling for reserved communities is 42, and fixed', note: 'the ministerial posts give SC, ST, BC and MBC candidates no maximum age if they hold a qualification above SSLC; the notification says in terms that this does not apply to the VAO. Destitute widows’ higher-qualification relaxation is excluded too.' },
        { text: 'The vacancies are district-wise', note: 'under the revenue administration, with category, Tamil-medium and destitute-widow sub-quotas per district. A candidate is allotted to a district and serves in its villages.' },
        { text: 'Nothing else is different', note: 'the same SSLC qualification, the same ₹100 fee, the same paper and syllabus, the same Tamil gate, the same blank-answer deduction, the same 1:3 and 1:2 verification ratios.' },
        { text: 'The old VAO-specific clauses are gone', note: 'the 2022 notification required a cash security and residence in the village under charge. Neither clause appears in the 2024 or 2025 notifications.' },
      ],
    },
    {
      type: 'note',
      title: 'Prepare for Group 4, and rank the VAO',
      text: 'There is no VAO examination, syllabus or paper distinct from Group 4. A candidate who wants the post prepares the Group 4 paper — Tamil as half of it, general studies and aptitude as the other half — clears the Tamil gate, scores high enough for the district’s cut-off in their category, and places the VAO at the top of their preferences at counselling. The competition is the whole Group 4 field, allotted district by district.',
    },
  ],
  stages: [
    {
      name: 'The Group 4 written examination',
      mode: 'Objective, OMR, single paper',
      detail:
        'Tamil 100 questions for 150 marks with a gate at 60, then general studies 75 and aptitude 25 for 150 marks. Three hours. Ninety to qualify. One merit list for every Group 4 post.',
    },
    {
      name: 'Onscreen certificate verification',
      mode: 'Documents, uploaded',
      detail:
        'The VAO is verified in the same group as Junior Assistant — three candidates per vacancy for general candidates, two for reserved communities. SSLC, age, community and Tamil evidence.',
    },
    {
      name: 'Physical verification and counselling',
      mode: 'By rank, preference and district',
      detail:
        'At three per vacancy and one and a half for reserved communities. The VAO is allotted by rank against the district-wise vacancies and sub-quotas the addenda publish, to candidates who have ranked it.',
    },
    {
      name: 'Appointment',
      mode: 'To a district, at pay level 8',
      detail:
        'A physical fitness certificate and vision of Standard III or better are required, as for every Group 4 post. The 2022 notification’s cash security and village-residence clauses no longer appear.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The VAO was last notified inside Group 4 Notification No. 07/2025 of 25 April 2025 — 215 posts, revised to 218 by Addendum 7B — examined on 12 July 2025 and now in the counselling phases that began in December 2025 and ran through July 2026. No final selection list had been published and no window is open. The commission’s planner puts the next Group 4 notification on 6 October 2026 and the examination on 20 December, both tentative; the VAO will be inside it if the revenue department reports vacancies.`,
    },
    {
      type: 'table',
      caption: 'The VAO through recent Group 4 cycles. The post has been a Group 4 post code since 2017.',
      head: ['Notification', 'VAO posts', 'Examination', 'Notes'],
      rows: [
        ['07/2025, 25 April 2025', '215, revised to 218', '12 July 2025', 'Counselling through 2026; district-wise distribution in Addendum 7B'],
        ['01/2024', 'As notified', '9 June 2024', 'Same paper shape — 200 questions, 300 marks, 60 in Part A, 90 to qualify'],
        ['07/2022', 'As notified', '24 July 2022', 'Carried VAO-only clauses — cash security and village residence — since dropped'],
        ['19/2019; 23/2017', 'As notified', '2019; 2018', 'The first combined cycles'],
        ['Standalone VAO', '—', '2012, 2014, 2016', 'The last VAO examinations of their own; papers in the archive'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'TNPSC Group 4 — the examination the VAO is recruited through', to: '/government-exams/state/tamil-nadu/tnpsc-group-4/' },
        { label: 'Addendum 7B — VAO posts revised and district distribution', href: TN_G4_SRC.addendum7B },
        { label: 'TNPSC annual planner — next Group 4 date', href: TNPSC.planner },
        { label: 'TNPSC examination dashboard', href: TNPSC.dashboard },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'VAO eligibility under Group 4 Notification 07/2025, with age reckoned as on 1 July 2025 — set against the ministerial posts to show what differs.',
      head: ['Requirement', 'Village Administrative Officer', 'Junior Assistant and the ministerial posts'],
      rows: [
        ['Qualification', 'A pass in SSLC of Tamil Nadu, or the open-school tenth', 'The same'],
        ['Minimum age', '21', '18'],
        ['Maximum age — general', '32', '32'],
        ['Maximum age — SC, SC(A), ST, BC, BC(M), MBC and DC', '42, fixed', '34 or 37 — and no maximum with a qualification above SSLC'],
        ['Persons with benchmark disability', '42 general; 52 reserved', '42 general; 44 to 47 reserved'],
        ['Destitute widows', '37 general; 42 reserved; no higher-qualification relaxation', '37, and no maximum with a higher qualification'],
        ['Ex-servicemen', '50 general; 55 reserved', 'The same'],
        ['Fee', 'One-time registration ₹150; examination ₹100; the same exemptions', 'The same'],
      ],
    },
    {
      type: 'note',
      title: 'The higher-qualification age relaxation does not reach the VAO',
      text: 'Paragraph 4.1.3 of the notification and paragraph 5A of the commission’s instructions to applicants remove the maximum age for reserved-community candidates who hold a qualification above SSLC — and both say in terms that this does not apply to the Village Administrative Officer or the forest posts. Addendum 7A extended the same relaxation to destitute widows of the general category with the same exclusion. A 43-year-old graduate from a reserved community is eligible for Junior Assistant and not for the VAO.',
    },
  ],
  pattern: [
    {
      type: 'p',
      text: 'The VAO has no paper of its own. The examination is the Group 4 paper, set out in full on the Group 4 page; the summary below is here so that a reader arriving at this page sees what the examination is before ranking the post.',
    },
    {
      type: 'table',
      caption: 'The Group 4 paper — one sitting, three parts, 300 marks. Part A gates the rest; all three count.',
      head: ['Part', 'Content', 'Questions', 'Marks', 'Rule'],
      rows: [
        ['Part A', 'Tamil at SSLC standard', '100', '150', '60 required for Parts B and C to be marked'],
        ['Part B', 'General studies at SSLC standard', '75', '150 together', '—'],
        ['Part C', 'Aptitude and mental ability', '25', '', '—'],
        ['Total', 'Three hours', '200', '300', '90 to qualify'],
      ],
    },
    {
      type: 'list',
      title: 'The rules that bear on the VAO',
      items: [
        { text: 'The blank-answer deduction', note: TN_BLANK_RULE },
        { text: 'One merit list, district-wise allotment', note: 'a VAO aspirant competes on the state-wide rank and is then allotted against a district’s vacancies and sub-quotas. The cut-off differs by district and category.' },
        { text: 'No typing, no interview, no residence condition', note: 'the notification tests nothing after the paper and, since 2024, imposes no village-residence or cash-security clause.' },
        { text: 'Ties go to the higher qualification', note: 'then to age, then to the earlier application.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The VAO’s post code, vacancies, qualification and age band are quoted from Group 4 Notification No. 07/2025, Addendum 7A and Addendum 7B; the exclusion from the higher-qualification relaxation from the notification and the commission’s instructions to applicants; the dropped 2022 clauses from Notification 07/2022. The commission publishes the Group 4 paper and key for every cycle and the standalone VAO papers of 2012, 2014 and 2016.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'Group 4 Notification No. 07/2025', href: TN_G4_SRC.notification },
        { label: 'Addendum 7A — age clauses and the blank-answer rule', href: TN_G4_SRC.addendum7A },
        { label: 'Addendum 7B — VAO posts revised; district-wise distribution', href: TN_G4_SRC.addendum7B },
        { label: 'Instructions to applicants — paragraph 5A', href: TNPSC.instructions },
        { label: 'Group 4 Notification No. 07/2022 — the last with VAO-specific clauses', href: TN_G4_SRC.notification2022 },
        { label: 'Group 4 Notification No. 01/2024', href: TN_G4_SRC.notification2024 },
        { label: 'Objective papers with final keys — Group 4 and standalone VAO', href: TNPSC.answerKeys },
        { label: 'TNPSC annual planner', href: TNPSC.planner },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Tamil Nadu VAO syllabus — the Group 4 paper the post is recruited through, and the revenue-administration content that matters most for it.',
      lead: [
        'The syllabus is Group 4’s. What a VAO aspirant should read twice is the part of it that is the job.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Group 4 paper',
              'Part A, Tamil at SSLC standard, 100 questions; Part B, general studies at SSLC standard, 75 questions; Part C, aptitude and mental ability, 25. Set out in full on the Group 4 syllabus page.',
            ],
            [
              'What matters most for the VAO inside it',
              'The Indian polity and the state’s administration — the revenue department, the district and taluk structure, the panchayat raj system; the Indian economy and the development administration of Tamil Nadu — the state’s welfare and rural schemes a VAO delivers; and the geography of Tamil Nadu — its districts, rivers, soils and crops.',
            ],
            [
              'What the standalone VAO papers examined',
              'Before 2017 the VAO paper carried a section on village administration — land records, the revenue village, the duties of the officer. That section no longer exists as such, but its content sits inside the general studies units and recurs.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Where the detail lives',
          items: [
            { label: 'TNPSC Group 4 syllabus', to: '/government-exams/state/tamil-nadu/tnpsc-group-4/syllabus/' },
            { label: 'Group 4 syllabus document', href: TN_G4_SRC.syllabus },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Tamil Nadu VAO exam pattern — the Group 4 paper, the Tamil gate, the district-wise allotment and how the VAO differs from the other posts.',
      lead: [
        'One paper, one merit list, and then a district. The pattern is Group 4’s; the allotment is the VAO’s.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The VAO against the ministerial posts, inside one examination.',
          head: ['', 'Village Administrative Officer', 'Junior Assistant'],
          rows: [
            ['Paper', 'The Group 4 paper', 'The same'],
            ['Gate and pass', '60 in Part A; 90 in all', 'The same'],
            ['Merit list', 'One, state-wide', 'The same'],
            ['Verification ratios', '1:3 general, 1:2 reserved; then 1:3 and 1:1.5', 'The same'],
            ['Allotment', 'District-wise, against revenue administration vacancies and sub-quotas', 'Unit-wise across departments and offices'],
            ['Age', '21 to 32; reserved to 42, fixed', '18 to 32; reserved 34 or 37, or no maximum with a higher qualification'],
          ],
        },
        {
          type: 'links',
          title: 'The full pattern',
          items: [
            { label: 'TNPSC Group 4 exam pattern', to: '/government-exams/state/tamil-nadu/tnpsc-group-4/exam-pattern/' },
          ],
        },
      ],
    },
    'previous-year-papers': {
      description:
        'Tamil Nadu VAO previous papers — the Group 4 papers with keys since 2016, and the standalone VAO papers of 2012, 2014 and 2016.',
      lead: [
        'Six Group 4 papers of the current shape, and three older VAO papers that show what the commission once asked about the village itself.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The commission’s answer-keys page holds the Group 4 papers with final keys for 2016 to 2025 — the examination the VAO is now recruited through — and the standalone VAO papers of 2012, 2014 and 2016. The older papers are set to a syllabus that no longer exists, but their village-administration questions are worth reading: the content has migrated into the general studies units rather than disappeared.',
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'TNPSC Group 4 previous papers', to: '/government-exams/state/tamil-nadu/tnpsc-group-4/previous-year-papers/' },
            { label: 'Objective papers with final keys — Group 4 and standalone VAO', href: TNPSC.answerKeys },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Tamil Nadu VAO mock tests — the Group 4 paper, scored with the Tamil gate and the blank rule.',
      lead: [
        'There is no VAO mock distinct from a Group 4 mock. Sit the whole paper, score the gate first.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'A VAO aspirant rehearses exactly what a Junior Assistant aspirant rehearses: 200 questions in three hours, option E for every unknown, half a mark off per blank, Part A scored first against 60. The only VAO-specific number to carry into practice is the district cut-off — the rank at which the VAO was allotted in your district and category in the last cycle, which the counselling lists show.',
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'TNPSC Group 4 mock tests', to: '/government-exams/state/tamil-nadu/tnpsc-group-4/mock-tests/' },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Tamil Nadu VAO preparation — prepare Group 4, mind the VAO age band, and rank the post by district.',
      lead: [
        'Three things a VAO aspirant does that a Junior Assistant aspirant does not: check the age band, read the district table, rank the post first.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'What to do beyond the Group 4 plan',
          items: [
            { title: 'Check the VAO age band against your own', text: 'Twenty-one to 32 for general candidates; 21 to 42 for reserved communities, with no relaxation for a higher qualification. A candidate eligible for Junior Assistant may not be eligible for the VAO.' },
            { title: 'Read the district distribution in the addendum', text: 'The VAO vacancies are listed district by district with category, Tamil-medium and destitute-widow sub-quotas. Your district’s number and your category’s share are the competition.' },
            { title: 'Rank the VAO first at counselling', text: 'Posts are allotted by rank and preference. A candidate who ranks Junior Assistant above the VAO and is reached for Junior Assistant is not reached for the VAO.' },
            { title: 'Then prepare Group 4', text: 'Tamil as half the paper, general studies and aptitude as the other half, the blank rule as a reflex — set out on the Group 4 preparation page.' },
          ],
        },
        {
          type: 'links',
          title: 'The full plan',
          items: [
            { label: 'TNPSC Group 4 preparation', to: '/government-exams/state/tamil-nadu/tnpsc-group-4/preparation/' },
          ],
        },
      ],
    },
    'study-material': {
      description:
        'Tamil Nadu VAO study material — the Group 4 reading list, plus the revenue-administration reading a VAO aspirant should add.',
      lead: [
        'Group 4’s textbooks, plus the state’s own account of what a village officer does.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What to add to the Group 4 reading list.',
          head: ['Area', 'What to work from', 'Why'],
          rows: [
            ['Revenue administration', 'The revenue department’s description of the district, taluk and village structure, and of the VAO’s duties', 'The polity and administration questions in Part B, and the job itself.'],
            ['Tamil Nadu geography', 'The state board geography chapters on districts, rivers, soils and crops', 'Village-level facts recur in the general studies unit.'],
            ['State schemes', 'The state government’s scheme descriptions — welfare, housing, land, relief', 'The development administration unit, and what a VAO delivers.'],
            ['The older VAO papers', 'The 2012, 2014 and 2016 standalone papers', 'The village-administration questions the commission has asked.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'TNPSC Group 4 study material', to: '/government-exams/state/tamil-nadu/tnpsc-group-4/study-material/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is there a separate VAO exam in Tamil Nadu?',
      a: 'Not since 2016. The Village Administrative Officer has been recruited through the TNPSC Group 4 combined examination since Notification 23/2017, as post code 2025, with the same paper, fee and syllabus as Junior Assistant, Typist and the other Group 4 posts. A candidate applies for Group 4 and ranks the VAO among their preferences at counselling.',
    },
    {
      q: 'When is the next Tamil Nadu VAO notification?',
      a: 'The commission’s planner puts the next Group 4 notification on 6 October 2026 and the examination on 20 December 2026, both tentative. The VAO will be inside it if the revenue department reports vacancies. As at 11 September 2026 no window was open and the 2025 cycle — 218 VAO posts — was in counselling.',
    },
    {
      q: 'What is the VAO age limit in Tamil Nadu?',
      a: 'In the 2025 cycle, reckoned as on 1 July 2025: 21 to 32 for general candidates and 21 to 42 for SC, SC(A), ST, BC, BC(M), MBC and DC candidates. Unlike the ministerial posts, the VAO gives reserved-community candidates no exemption from the maximum age for holding a higher qualification, and the same exclusion applies to destitute widows. Persons with benchmark disability may apply to 42 or 52; ex-servicemen to 50 or 55.',
    },
    {
      q: 'What qualification does the Tamil Nadu VAO need?',
      a: 'A pass in the SSLC of Tamil Nadu or the open-school tenth — the minimum general educational qualification, the same as Junior Assistant. No degree and no typewriting. Adequate knowledge of Tamil must be shown or the Second Class Language Test passed within two years of appointment.',
    },
    {
      q: 'What is the VAO exam pattern?',
      a: 'The Group 4 paper: 200 objective questions for 300 marks in three hours — Tamil at SSLC standard, 100 questions for 150 marks with a gate at 60; general studies 75 and aptitude 25 for 150 marks. Ninety of 300 qualifies. No deduction for a wrong answer; half a mark off for each blank. One merit list with the other Group 4 posts, then district-wise allotment.',
    },
    {
      q: 'How many VAO posts were there in TNPSC Group 4 2025?',
      a: '215 as notified on 25 April 2025, revised to 218 by Addendum 7B of 26 September, listed district by district under the revenue administration with category, Tamil-medium and destitute-widow sub-quotas.',
    },
    {
      q: 'Does the VAO still need a cash security or to live in the village?',
      a: 'The 2022 Group 4 notification required a cash security of ₹2,000 — reduced or waived by community — and that the officer reside in the village under charge. Neither clause appears in the 2024 or 2025 notifications.',
    },
  ],
}

/* ── Tamil Nadu Teaching Posts ──────────────────────────────────
   The Teachers Recruitment Board runs both the eligibility test and the
   recruitments. Two TET cycles ran in the year to CHECKED — a general one in
   November 2025 and an in-service one in July 2026 — and the pass marks were
   revised twice by government order between them. The recruitments carry a
   Tamil gate of their own and weight the TET by the year it was passed. */
const TN_TRB_SRC = {
  board: 'https://trb.tn.gov.in/',
  notifications: 'https://trb.tn.gov.in/notification.php?language=LG-1&status=Active',
  tetPage: 'https://trb.tn.gov.in/tntet.php?language=LG-1&status=Active',
  apply: 'https://trb1.ucanapply.com/apply_now',
  tet2025: 'https://trb.tn.gov.in/admin/pdf/8170588055notific.pdf',
  tet2025Addendum: 'https://trb.tn.gov.in/admin/pdf/5656448718Addendum%20290126.pdf',
  tet2025AddendumB: 'https://trb.tn.gov.in/admin/pdf/5360526150Addendum%2003B%202025.pdf',
  tet2026Working: 'https://trb.tn.gov.in/admin/pdf/3081466994TET.pdf',
  tet2026Press: 'https://trb.tn.gov.in/admin/pdf/2643662506TET%20Press%20News.pdf',
  specialTetGo: 'https://trb.tn.gov.in/admin/pdf/6291377128Special%20TET-2025.pdf',
  planner: 'https://trb.tn.gov.in/admin/pdf/7112651145Final%20Annual%20Planner%202026%20with%20logo.pdf',
  sgt2024: 'https://trb.tn.gov.in/admin/pdf/1907126363SGT%20Notification%20%20-%202024.pdf',
  sgt2024Addendum: 'https://trb.tn.gov.in/admin/pdf/3203086984ADDENDUMSGT.pdf',
  bt2023: 'https://trb.tn.gov.in/admin/pdf/2603611744BT%20FINAL_25.10.2023.pdf',
  pg2025: 'https://trb.tn.gov.in/admin/pdf/8726218794PG%20Notification%20final%2009.07.2025.pdf',
  certificate: 'https://tetcertificate.ucanassess.in/',
}

const TN_TEACHING = {
  slug: 'teaching-posts',
  path: '/government-exams/state/tamil-nadu/teaching-posts/',
  name: 'Tamil Nadu Teaching Posts',
  fullName: 'Tamil Nadu teacher recruitment — TNTET and the Teachers Recruitment Board’s SGT, BT Assistant and PG Assistant recruitments',
  authority: 'Teachers Recruitment Board, Tamil Nadu (TRB)',
  official: 'trb.tn.gov.in',
  seoTitle: 'TN Teaching Jobs 2026: TNTET, SGT, BT & PG Assistant Recruitment',
  metaDescription:
    'Tamil Nadu teaching — the two TNTET cycles and revised pass marks, the SGT, BT and PG Assistant patterns, the Tamil gate, TET weightage by year, fees and age.',
  lead: [
    'Teaching recruitment in Tamil Nadu runs through one board. The Teachers Recruitment Board conducts the Teacher Eligibility Test that qualifies a candidate, and then the separate competitive recruitments — Secondary Grade Teacher, BT Assistant, Post Graduate Assistant — that appoint them. The TET qualifies; it does not appoint. And in the recruitments that follow, it counts by the year it was passed.',
    'Two TETs ran in the year to September 2026 and they are not interchangeable. The general TNTET of November 2025 is the one a fresh candidate needs, and its pass marks were lowered twice by government order after the examination. The working-teachers TET of July 2026 is for teachers already in service who must qualify under a Supreme Court deadline, and it is restricted to them. No TET or recruitment window was open when this page was checked; the board’s planner had projected two more TET cycles and a BT Assistant recruitment for 2026 that had not appeared.',
  ],
  quickFacts: [
    ['Conducted by', 'Teachers Recruitment Board, Tamil Nadu'],
    ['Eligibility test', 'TNTET — two papers of 150 marks, no negative marking, valid for life'],
    ['Pass marks, revised January 2026', '90 general; 75 BC, BC(M), MBC and DC; 60 SC, SC(A), ST and, from February, persons with disability'],
    ['Recruitment tests', 'SGT, BT Assistant and PG Assistant — a Tamil gate of 50 marks, then a 150-mark paper; no interview'],
    ['TET weightage', 'Half a mark for every year since the TET was passed, added to the recruitment score'],
    ['Open now', 'Nothing — the last notification, the working-teachers TET, closed 10 April 2026'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The eligibility test is two papers of 150 multiple-choice questions, one mark each, three hours each, on OMR sheets, with no negative marking. Paper I, for classes I to V, carries child development and pedagogy, Language I in Tamil or a minority language, Language II English, mathematics and environmental studies at 30 each; Paper II, for classes VI to VIII, carries the same three common parts and 60 in mathematics and science or in social science. A candidate sits either or both, paying per paper, and a pass is valid for life.',
    },
    {
      type: 'p',
      text: 'The recruitments are separate examinations with a shape of their own. Each opens with a compulsory Tamil language eligibility test — 30 questions for 50 marks in 30 minutes at tenth-standard level, qualifying at 40 per cent and not counted — and then a single 150-mark paper at the level of the post: tenth-standard across five subjects for Secondary Grade Teacher, the undergraduate subject for BT Assistant, the postgraduate subject with educational methodology for PG Assistant. For SGT and BT the TET is required and weighted — half a mark for each year since it was passed, so a 2012 pass adds 5.5 and a 2022 pass 0.5. There is no interview.',
    },
    {
      type: 'list',
      title: 'What sets the Tamil Nadu system apart',
      items: [
        { text: 'The TET counts by age', note: 'not by score. Half a mark per year from the year of passing, added to the recruitment marks — a rule that rewards candidates who qualified early and waited.' },
        { text: 'Every recruitment has its own Tamil gate', note: 'a 50-mark, 30-minute Tamil test at 40 per cent before the main paper counts, separate from and additional to the TET’s Language I paper.' },
        { text: 'The pass marks moved after the examination', note: 'the November 2025 TET was notified at 60, 55 and 40 per cent by community, revised in January 2026 to 60, 50 and 40, and in February the disability threshold was lowered to 40. Results were reissued accordingly.' },
        { text: 'Special TETs for serving teachers', note: 'ordered by the state after the Supreme Court required in-service teachers to qualify, with cycles planned for January, July and December 2026. They are restricted to teachers appointed on or before 1 September 2025.' },
        { text: 'No upper age for the TET; 53 or 58 for the recruitments', note: 'a general candidate may sit SGT, BT or PG to 53 and a reserved-community candidate to 58 — a ceiling far above most state recruitments.' },
      ],
    },
    {
      type: 'note',
      title: 'The general TET is the one a new candidate needs',
      text: 'The working-teachers TET of July 2026 exists because a Supreme Court order of September 2025 required in-service teachers appointed before the 2011 rules to qualify within a deadline, and the state ordered special cycles for them. Its notification restricts it to teachers appointed on or before 1 September 2025 with a service certificate. A candidate who is not yet a teacher needs the general TNTET — last held in November 2025, with two more cycles projected for 2026 that had not been notified when this page was checked.',
    },
  ],
  stages: [
    {
      name: 'Tamil Nadu Teacher Eligibility Test',
      mode: 'Two papers, OMR, qualifying for life',
      detail:
        'Paper I for classes I to V, Paper II for classes VI to VIII; 150 questions, 150 marks, three hours each; no negative marking. Pass at 90, 75 or 60 by community. Required for SGT and BT Assistant, where it is weighted by year; not required for PG Assistant.',
    },
    {
      name: 'Recruitment — Tamil language eligibility test',
      mode: 'Objective, 30 questions, 50 marks, 30 minutes',
      detail:
        'At tenth-standard level, qualifying at 40 per cent — 20 marks — and not counted towards the rank. Sat as Part A of each recruitment examination before the main paper.',
    },
    {
      name: 'Recruitment — main paper',
      mode: 'Objective, 150 questions, 150 marks, three hours',
      detail:
        'At the level of the post. Minimum 40 per cent for general candidates and 30 for reserved communities in SGT and BT; 50, 45 and 40 per cent by community in PG Assistant. The rank is the paper plus the TET weightage where it applies.',
    },
    {
      name: 'Certificate verification and selection',
      mode: 'Documents, at 1.25 candidates per vacancy',
      detail:
        'Shortlisted on marks, verified, and selected under the communal roster. No interview. Reserve lists are published in the months after the provisional list.',
    },
  ],
  updates: [
    {
      type: 'table',
      caption: `The teaching track in Tamil Nadu. Checked ${CHECKED}; no window was open.`,
      head: ['Examination', 'Notification', 'Status'],
      rows: [
        ['TNTET 2025 — general', 'No. 03/2025, 11 August 2025', 'Examined 15 and 16 November 2025; results 30 January 2026 under revised pass marks; disability results 26 February. Paper I 92,417 appeared and 46,083 passed; Paper II 3,31,900 appeared and 1,05,946 passed.'],
        ['TNTET 2026 — working teachers', 'No. 01/2026, 13 February 2026', 'Restricted to in-service teachers. Examined 4 and 5 July 2026 — 59,535 in Paper I, 1,60,929 in Paper II. Tentative key 15 July; results not published at the date checked.'],
        ['PG Assistant, Physical Director and Computer Instructor', 'No. 02/2025, 10 July 2025', 'Complete — 1,996 posts; examined 12 October 2025; provisional selection 22 January 2026; reserve list 4 June 2026.'],
        ['Secondary Grade Teacher', 'No. 01/2024, 9 February 2024', 'Complete — 2,768 posts after addendum; examined 21 July 2024; provisional selection 6 June 2025; reserve lists March 2026.'],
        ['BT Assistant', 'No. 03/2023, 25 October 2023', 'Complete — 2,222 posts; examined 4 February 2024; provisional selection August 2024; reserve list June 2026.'],
        ['Block Educational Officer', 'No. 01/2023, 5 June 2023', 'Complete — 33 posts; selection January 2024. No notification since.'],
        ['Special Teachers', 'No. 05/2017', 'No notification since 2017.'],
      ],
    },
    {
      type: 'note',
      title: 'What the board’s 2026 planner projected, and what has appeared',
      text: 'The board’s tentative annual planner for 2026 listed a general TET notification in May with the examination in July, a second in October with the examination in December, and a BT Assistant and BRTE notification in March with the examination in July. None of the three had appeared on the board’s notification index at the date checked; the only 2026 notification is the working-teachers TET. A planner date is not a notification.',
    },
    {
      type: 'note',
      title: 'Why the TET pass marks changed twice',
      text: 'The November 2025 TET was notified with a pass mark of 60 per cent for general candidates, 55 for BC, BC(M), MBC, DC and disabled candidates, and 40 for ST as a one-time concession. Government orders of 28 January and 25 February 2026 revised the thresholds — 60 per cent for general, 50 for BC, BC(M), MBC and DC, 40 for SC, SC(A), ST and, from February, persons with disability — and the board issued addenda and reissued results under them. The same revised thresholds govern the working-teachers TET.',
    },
    {
      type: 'links',
      title: 'Check the board directly',
      items: [
        { label: 'TRB notifications', href: TN_TRB_SRC.notifications },
        { label: 'TRB — TNTET page with statistics', href: TN_TRB_SRC.tetPage },
        { label: 'TRB annual planner 2026', href: TN_TRB_SRC.planner },
        { label: 'TET certificate download', href: TN_TRB_SRC.certificate },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility by examination, from the most recent notification for each. Age is reckoned as on 1 July of the notification year.',
      head: ['Examination', 'Qualification', 'Age', 'Fee'],
      rows: [
        ['TNTET, general', 'The teacher training qualification for the paper — D.El.Ed or B.El.Ed for Paper I, B.Ed with graduation for Paper II — under NCTE norms', 'Minimum 18; no upper limit', '₹600 per paper; ₹300 for SC, SC(A), ST and disabled candidates'],
        ['TNTET, working teachers', 'As above, plus appointment as SGT, BT Assistant or equivalent on or before 1 September 2025 with a service certificate', 'As above', 'As above'],
        ['Secondary Grade Teacher', 'HSC with 50 per cent — 45 under the 2002 norms — plus a two-year D.El.Ed, or B.El.Ed, or D.Ed special education; or graduation with D.El.Ed; and a pass in TNTET Paper I', '53 general; 58 for SC, ST, BC, BC(M), MBC, DC and destitute widows', '₹600; ₹300 for SC, SC(A), ST and disabled candidates'],
        ['BT Assistant', 'Graduation in the subject with B.Ed, and a pass in TNTET Paper II', 'As for SGT', 'As for SGT'],
        ['PG Assistant', 'Post-graduation in the subject with 50 per cent — 45 under specified norms — plus B.Ed; M.P.Ed for Physical Director; a computer science post-graduation for Computer Instructor. No TET', 'As for SGT', 'As for SGT; one subject only'],
      ],
    },
    {
      type: 'list',
      title: 'The conditions that recur',
      items: [
        { text: 'The TET must be passed before the recruitment', note: 'a valid TNTET Paper I for SGT and Paper II for BT Assistant, held at application. PG Assistant needs none.' },
        { text: 'The TET is valid for life', note: 'under a government order of August 2021. There is no limit on attempts.' },
        { text: 'Tamil must be shown or passed', note: 'PG Assistant candidates without adequate knowledge of Tamil must pass the commission’s Second Class Language Test within two years of appointment — separate from the 50-mark Tamil gate in the examination itself.' },
        { text: 'The TET weightage rewards the year, not the score', note: 'half a mark for each year from the year of passing, counting the earliest pass. A candidate who passed in 2012 carries 5.5 marks into a 2024 recruitment.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The TNTET as set in Notification 03/2025 and repeated for the working-teachers cycle. Every paper is 150 questions of one mark in three hours, on OMR, with no negative marking.',
      head: ['Paper', 'For', 'Structure', 'Pass — revised January and February 2026'],
      rows: [
        ['Paper I', 'Classes I to V', 'Child development and pedagogy 30; Language I 30; Language II English 30; mathematics 30; environmental studies 30', '90 general; 75 BC, BC(M), MBC and DC; 60 SC, SC(A), ST and disabled'],
        ['Paper II', 'Classes VI to VIII', 'Child development and pedagogy 30; Language I 30; Language II English 30; mathematics and science 60, or social science 60', 'The same'],
      ],
    },
    {
      type: 'table',
      caption: 'The recruitment examinations. Part A is the Tamil gate — 30 questions, 50 marks, 30 minutes, 40 per cent to pass, not counted. Part B is the paper that ranks.',
      head: ['Recruitment', 'Part B content', 'Questions and marks', 'Duration', 'Minimum'],
      rows: [
        ['Secondary Grade Teacher', 'Tamil or the minority language, English, mathematics, science and social science at tenth standard, 30 each', '150 for 150', '3 hours', '40% general — 60; 30% reserved — 45'],
        ['BT Assistant', 'The undergraduate subject — Tamil, English, mathematics, physics, chemistry, botany, zoology, history or geography', '150 for 150', '3 hours', '40% general — 60; 30% reserved — 45'],
        ['PG Assistant and Physical Director', 'Main subject 110; educational methodology 30; general knowledge 10', '150 for 150', '3 hours', '50% general — 75; 45% SC and SC(A) — 68; 40% ST — 60'],
        ['Computer Instructor Grade-I', 'Computer science 130; educational psychology 10; general knowledge 10', '150 for 150', '3 hours', 'As for PG Assistant'],
      ],
    },
    {
      type: 'note',
      title: 'Selection is the paper plus the TET’s age',
      text: 'For SGT and BT Assistant the rank is the Part B score plus the TET weightage — half a mark for every year since the TET was passed — under the communal roster. For PG Assistant there is no TET and the rank is the Part B score alone. No recruitment carries an interview; the notifications list the Tamil test, the written paper and certificate verification at 1.25 candidates per vacancy, and nothing else. None of the notifications mentions negative marking.',
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A sequence for a candidate entering teaching in Tamil Nadu',
      items: [
        { text: 'Pass the general TET as early as you can', note: 'because the weightage counts years, not score. Every year between the pass and the recruitment is half a mark in the final rank.' },
        { text: 'Sit the right TET', note: 'the general one, not the working-teachers one, which is restricted and cannot be used by a candidate not yet in service.' },
        { text: 'Prepare Part A of the recruitment as a subject', note: 'tenth-standard Tamil, 30 questions in 30 minutes, 40 per cent to pass, and the main paper is not counted without it.' },
        { text: 'Prepare the main paper to the post’s level', note: 'tenth-standard across five subjects for SGT, the undergraduate subject for BT, the postgraduate subject with methodology for PG. Each is a different examination.' },
        { text: 'Answer every question', note: 'no notification mentions negative marking, so a blank is the only way to lose a mark you could have had.' },
        { text: 'Watch the board’s notification index, not its planner', note: 'the 2026 planner projected three notifications that had not appeared by September. The index is the only source that counts.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. TET structure, fees, pass marks and their revisions are quoted from Notification 03/2025 and its addenda and Notification 01/2026; the recruitment patterns, the Tamil gate and the weightage rule from the SGT, BT and PG notifications of 2024, 2023 and 2025; the timetable and statistics from the board’s notification pages. The board publishes no archive of previous question papers for the TET or the recruitments; it publishes final keys with results.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'TRB home', href: TN_TRB_SRC.board },
        { label: 'TRB notifications', href: TN_TRB_SRC.notifications },
        { label: 'TNTET 2025 notification No. 03/2025', href: TN_TRB_SRC.tet2025 },
        { label: 'TNTET 2025 Addendum 03A — revised pass marks', href: TN_TRB_SRC.tet2025Addendum },
        { label: 'TNTET 2025 Addendum 03B — disability pass mark', href: TN_TRB_SRC.tet2025AddendumB },
        { label: 'TNTET for working teachers 2026, No. 01/2026', href: TN_TRB_SRC.tet2026Working },
        { label: 'Government order on special TETs for in-service teachers', href: TN_TRB_SRC.specialTetGo },
        { label: 'PG Assistant notification No. 02/2025', href: TN_TRB_SRC.pg2025 },
        { label: 'Secondary Grade Teacher notification No. 01/2024', href: TN_TRB_SRC.sgt2024 },
        { label: 'BT Assistant notification No. 03/2023', href: TN_TRB_SRC.bt2023 },
        { label: 'TRB annual planner 2026', href: TN_TRB_SRC.planner },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Tamil Nadu teaching exam syllabus — the two TNTET papers, the Tamil gate, and the SGT, BT and PG Assistant recruitment papers.',
      lead: [
        'Two syllabuses that overlap but are not the same. The eligibility test asks whether you can teach; the recruitment test asks how well you know the subject at the level of the post.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'TNTET — child development and pedagogy',
              'Thirty questions in each paper: development, learning and its theories, the diverse learner, inclusive education, assessment. The part of the test national material covers well.',
            ],
            [
              'TNTET — languages',
              'Language I in Tamil, Telugu, Malayalam, Kannada or Urdu, and Language II English, thirty questions each: comprehension, grammar, vocabulary and the pedagogy of the language.',
            ],
            [
              'TNTET Paper I — mathematics and environmental studies',
              'Thirty questions each on the classes I to V curriculum, content and pedagogy.',
            ],
            [
              'TNTET Paper II — the stream',
              'Sixty questions on mathematics and science or on social science, on the classes VI to VIII curriculum, content and pedagogy.',
            ],
            [
              'Recruitment — Part A, Tamil',
              'Thirty questions of tenth-standard Tamil in thirty minutes for fifty marks: grammar, vocabulary, comprehension, literature. Qualifying at 40 per cent.',
            ],
            [
              'Recruitment — Part B, by post',
              'SGT: Tamil, English, mathematics, science and social science at tenth standard, thirty each. BT Assistant: the undergraduate syllabus of the subject. PG Assistant: the postgraduate syllabus of the subject for 110 marks, educational methodology 30, general knowledge 10.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Where the detail lives',
          items: [
            { label: 'TRB notifications — syllabus in each', href: TN_TRB_SRC.notifications },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Tamil Nadu teaching exam pattern — the TNTET papers and pass marks, the recruitment Tamil gate, the 150-mark paper, the TET weightage and no interview.',
      lead: [
        'A pass that is valid for life and counts by its age. A gate in every recruitment. One paper that ranks.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each component contributes to a recruitment rank.',
          head: ['Component', 'SGT and BT Assistant', 'PG Assistant'],
          rows: [
            ['TNTET', 'Required; 0.5 mark per year since passing added to the rank', 'Not required'],
            ['Part A — Tamil gate', 'Qualifying at 40%; not counted', 'Qualifying at 40%; not counted'],
            ['Part B — main paper', '150 marks; the rank', '150 marks; the rank'],
            ['Interview', 'None', 'None'],
          ],
        },
        {
          type: 'p',
          text: 'The planning rule is that the TET is a fixed asset whose value grows with time, and the recruitment paper is the variable. A candidate cannot improve the TET weightage by scoring higher — only by having passed earlier — so the whole of the preparation effort belongs to Part A and Part B of the recruitment.',
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Tamil Nadu teaching exam previous papers — what the board publishes, and how to practise from keys and the state textbooks.',
      lead: [
        'The board publishes final keys with results, not an archive of papers. The state textbooks are the syllabus and the practice material.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The board releases a tentative key with an objection window after each examination and a final key with the results, and hosts marks and qualified status through the candidate login. It does not maintain a downloadable archive of question papers. For the recruitments, Part B is set on the state curriculum at the level of the post, and the state board textbooks are the source.',
        },
        {
          type: 'list',
          title: 'What to practise from',
          items: [
            { text: 'The CTET papers for pedagogy and child development', note: 'published by the national board and set to the same framework as the TNTET’s common thirty questions.' },
            { text: 'The state textbooks for content', note: 'classes I to V for TET Paper I and SGT; classes VI to VIII for TET Paper II; the tenth-standard books for the SGT main paper and for every recruitment’s Tamil gate.' },
            { text: 'The published final keys with a reconstructed paper', note: 'a reconstruction checked against the official key is a fair practice set.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'TRB notifications and results', href: TN_TRB_SRC.notifications },
            { label: 'State TET previous papers', to: '/government-exams/teaching-net/state-tet/previous-year-papers/' },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Tamil Nadu teaching mock tests — the TET on OMR, the thirty-minute Tamil gate, and the 150-question recruitment paper.',
      lead: [
        'Three papers to rehearse, and the shortest of them — thirty minutes of Tamil — is the one that ends candidacies.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the board’s papers',
          items: [
            { title: 'A full TET paper fortnightly', text: '150 questions in three hours on an OMR sheet, every question answered, scored against the revised pass mark for your community.' },
            { title: 'The Tamil gate weekly', text: 'Thirty tenth-standard Tamil questions in thirty minutes. Clear 40 per cent every time; it is not counted, and without it nothing is.' },
            { title: 'A recruitment paper weekly once a cycle is near', text: '150 questions in three hours at the post’s level — five subjects for SGT, one subject for BT and PG — scored against the minimum and against last cycle’s selection marks.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'State TET mock tests', to: '/government-exams/teaching-net/state-tet/mock-tests/' },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Tamil Nadu teaching preparation — pass the TET early, prepare the Tamil gate and the main paper to the post’s level, and watch the board’s index.',
      lead: [
        'The TET is worth more the earlier it is passed. Everything else is the recruitment paper.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan across cycles',
          items: [
            { title: 'Now — the general TET', text: 'If you hold no pass, the next general cycle is the first task; the planner projected October 2026. Pedagogy from the national framework, content from the state textbooks.' },
            { title: 'Then — the Tamil gate and the post’s syllabus', text: 'Tenth-standard Tamil weekly; the SGT five-subject paper, the BT subject, or the PG subject with methodology, as your qualification allows.' },
            { title: 'The notification — documents and papers', text: 'The TET certificate, the training qualification, the community certificate; a full paper a week from the day the notification appears.' },
          ],
        },
        {
          type: 'list',
          title: 'What recent cycles taught',
          items: [
            { text: 'Examination dates move', note: 'the 2025 TET was shifted a fortnight by press note; the 2024 SGT examination was held a month after the notified date; the 2025 PG examination was shifted for a clash with TNPSC Group II.' },
            { text: 'Pass marks can change after the paper', note: 'the 2025 TET thresholds were revised twice by government order and results reissued.' },
            { text: 'Vacancies grow by addendum', note: 'the 2024 SGT recruitment added a thousand posts five months after notification.' },
            { text: 'Reserve lists arrive a year or more later', note: 'the 2023 BT Assistant reserve list was published in June 2026.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Tamil Nadu teaching study material — what to read for the TET, the Tamil gate and each recruitment paper.',
      lead: [
        'The state textbooks are the syllabus for every paper except pedagogy. The reading follows the level of the post.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by component.',
          head: ['Component', 'What to work from'],
          rows: [
            ['Child development and pedagogy', 'A standard TET pedagogy text and the CTET papers.'],
            ['TET content', 'The state board textbooks for classes I to V or VI to VIII.'],
            ['Tamil gate', 'The state board Tamil textbooks for the ninth and tenth standards.'],
            ['SGT main paper', 'The state board textbooks to the tenth standard in Tamil, English, mathematics, science and social science.'],
            ['BT Assistant main paper', 'The undergraduate curriculum of the subject.'],
            ['PG Assistant main paper', 'The postgraduate curriculum of the subject, a B.Ed methodology text, and a general knowledge digest.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'State TET study material', to: '/government-exams/teaching-net/state-tet/study-material/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any TNTET or TRB application open right now?',
      a: 'No. As at 11 September 2026 the most recent notification, the working-teachers TET of February 2026, had closed on 10 April 2026, and the board’s apply portal listed no open recruitment. The board’s 2026 planner projected general TET cycles in May and October and a BT Assistant recruitment in March; none had been notified.',
    },
    {
      q: 'What are the TNTET pass marks?',
      a: 'Since the government orders of January and February 2026: 60 per cent or 90 marks for general candidates; 50 per cent or 75 for BC, BC(M), MBC and DC candidates; 40 per cent or 60 for SC, SC(A), ST and persons with disability. The November 2025 results were reissued under these thresholds.',
    },
    {
      q: 'Can a working-teachers TET pass be used for a TRB recruitment?',
      a: 'The working-teachers TET of 2026 is restricted to teachers appointed on or before 1 September 2025 and exists so that in-service teachers can qualify under a Supreme Court deadline. A candidate not yet in service cannot sit it, and needs the general TNTET.',
    },
    {
      q: 'How does TET weightage work in Tamil Nadu recruitment?',
      a: 'For Secondary Grade Teacher and BT Assistant, half a mark is added to the recruitment score for every year from the year the TET was passed — counting the earliest pass — under a government order of August 2023. A 2012 pass adds 5.5 marks to a 2024 recruitment; a 2022 pass adds 0.5. The TET score itself is not weighted, and PG Assistant carries no TET component.',
    },
    {
      q: 'What is the Tamil language eligibility test in TRB recruitments?',
      a: 'Part A of each recruitment examination — 30 questions for 50 marks in 30 minutes at tenth-standard level, qualifying at 40 per cent and not counted towards the rank. It applies to SGT, BT Assistant and PG Assistant alike, and is separate from the TET’s Language I paper.',
    },
    {
      q: 'What is the TNTET exam pattern?',
      a: 'Two papers of 150 multiple-choice questions, one mark each, three hours each, on OMR, with no negative marking. Paper I for classes I to V: child development and pedagogy, Language I, Language II English, mathematics and environmental studies, 30 each. Paper II for classes VI to VIII: the same three common parts and 60 in mathematics and science or social science.',
    },
    {
      q: 'What is the TRB SGT exam pattern?',
      a: 'Part A, the Tamil gate of 30 questions for 50 marks in 30 minutes at 40 per cent; then Part B, a single paper of 150 questions for 150 marks in three hours — Tamil or the minority language, English, mathematics, science and social science at tenth standard, 30 each — with a minimum of 40 per cent for general candidates and 30 for reserved communities. The rank is Part B plus the TET weightage.',
    },
    {
      q: 'What is the age limit for TRB teaching recruitments?',
      a: '53 for general candidates and 58 for SC, ST, BC, BC(M), MBC, DC and destitute-widow candidates, reckoned as on 1 July of the notification year, in the SGT, BT and PG recruitments of 2023 to 2025. The TET has a minimum of 18 and no upper limit.',
    },
    {
      q: 'What are the TNTET and TRB fees?',
      a: '₹600 per TET paper and ₹600 per recruitment, or ₹300 for SC, SC(A), ST and disabled candidates. A candidate sitting both TET papers applies and pays separately for each.',
    },
    {
      q: 'Is there an interview in Tamil Nadu teacher recruitment?',
      a: 'No. The SGT, BT Assistant and PG Assistant notifications list the Tamil test, the written paper and certificate verification at 1.25 candidates per vacancy, and selection is on the written marks with the TET weightage where it applies.',
    },
  ],
}

/* ── Tamil Nadu Technical Posts ─────────────────────────────────
   The Combined Engineering Services Examination has not been notified since
   2023; engineering posts now go through the Combined Technical Services
   Examinations, notified three or four times a year at degree, diploma and
   ITI level. One of them was open at CHECKED. */
const TN_TECH_SRC = {
  ctseInterview2026: 'https://tnpsc.gov.in/document/english/CTSE%20(Interview%20Posts)%20%20English.pdf',
  ctseInterview2026Press: 'https://tnpsc.gov.in/Document/PressEnglish/Press%20Release%20.pdf',
  ctseNonInterview2026: 'https://tnpsc.gov.in/document/english/CTS(Non%20Interview)%20English%20Final_.pdf',
  ctseNonInterview2026Addendum: 'https://tnpsc.gov.in/Document/english/Addendum%204A-2026.pdf',
  ctseNonInterview2026Schedule: 'https://tnpsc.gov.in/Document/english/Addendum%204B.pdf',
  ctseDiploma2026: 'https://tnpsc.gov.in/document/english/CTS%20-%20Diploma-(English).pdf',
  ctseDiploma2026Press: 'https://tnpsc.gov.in/Document/PressEnglish/Press%20Release%2007.07.2026.pdf',
  ctseNonInterview2025: 'https://tnpsc.gov.in/document/english/CTS%20-Non%20Interview%20English_.pdf',
  ctseInterview2025: 'https://tnpsc.gov.in/document/english/CTS%20English%202025_.pdf',
  ctseDiploma2025: 'https://tnpsc.gov.in/document/english/CTS%20-%20Diploma,%202025%20Final%20English_.pdf',
  cese2023: 'https://www.tnpsc.gov.in/Document/english/23_2023_CESE_ENG.pdf',
  cese2023Key: 'https://www.tnpsc.gov.in/Document/Answerkeyfinalresult/CESE_23_2023_FAK.pdf',
  ctseNonInterview2025Key: 'https://tnpsc.gov.in/Document/Answerkeyfinalresult/09_2025_CTS_NON_INT_FAK.pdf',
  papersWithoutKey: 'https://www.tnpsc.gov.in/English/question_paper_withoutkey.html',
  oldPapers: 'https://www.tnpsc.gov.in/English/previous-questions.html',
}

const TN_TECHNICAL = {
  slug: 'technical-posts',
  path: '/government-exams/state/tamil-nadu/technical-posts/',
  name: 'Tamil Nadu Technical Posts',
  fullName: 'TNPSC technical recruitment — the Combined Technical Services Examinations for engineering, planning and technical posts',
  authority: 'Tamil Nadu Public Service Commission (TNPSC)',
  official: OFFICIAL,
  seoTitle: 'TNPSC Technical Posts 2026: CTSE Open to 6 Oct, AE & JDO',
  metaDescription:
    'TNPSC technical posts — the CTSE streams, the interview-posts window open to 6 October 2026, the 450-mark scheme with its Tamil gate, AE and JDO posts and fees.',
  lead: [
    'TNPSC fills its engineering and technical posts — Assistant Engineers in the highways, public works, rural development and water resources departments, Junior Draughting Officers and Overseers, Assistant Directors of Town Planning, architects, surveyors — through the Combined Technical Services Examinations, notified three or four times a year in separate streams for degree-level non-interview posts, degree-level interview posts, and diploma and ITI-level posts. The Combined Engineering Services Examination that used to carry the Assistant Engineer posts has not been notified since 2023.',
    'One stream was open when this page was checked. Notification No. 08/2026 for the interview posts, including a single Assistant Director of Town and Country Planning, takes applications until 6 October 2026. The non-interview stream of May 2026 — 461 posts, most of them Assistant Engineers — is in the middle of its examinations, and the diploma stream of July 2026, 839 posts, has closed and awaits its dates.',
  ],
  quickFacts: [
    ['Conducted by', 'Tamil Nadu Public Service Commission'],
    ['Open now', 'CTSE Interview Posts, No. 08/2026 — 170 posts; applications 7 September to 6 October 2026'],
    ['Streams', 'Non-interview degree posts; interview degree posts; diploma and ITI posts — each its own notification'],
    ['Scheme', 'Paper I: Tamil 150 with a gate at 60, general studies and aptitude 150; Paper II: the subject, 300; interview 60 where it applies'],
    ['Age', 'Minimum 21; general candidates to 32 for engineering posts; no maximum for reserved communities'],
    ['Marking', 'No negative marking for a wrong answer; the Tamil gate decides whether the rest is marked'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The technical recruitment runs in streams. The non-interview stream carries the degree-level engineering posts — Assistant Engineer in highways, public works, rural development, water resources and the agricultural engineering department, Junior Architect, the engineering posts of the industrial corporations and the pollution control board — and selects on the written examination alone. The interview stream carries posts with an oral test of 60 marks, including the Assistant Director of Town and Country Planning. The diploma and ITI stream carries Junior Draughting Officer, Overseer, Road Inspector, Surveyor, Draughtsman and the trade posts, at diploma or certificate level.',
    },
    {
      type: 'p',
      text: 'They share a scheme. Paper I is a Tamil eligibility test of 100 questions for 150 marks — set in Tamil at SSLC standard, with a gate at 60 below which nothing else is marked — and then general studies and aptitude for 150. Paper II is the subject at the level of the post, 200 questions for 300 marks, on a computer. Four hundred and fifty marks in all, with a minimum of 180 for general candidates and 135 for reserved communities, and the interview stream adds 60 for a total of 510.',
    },
    {
      type: 'list',
      title: 'What sets the Tamil Nadu technical examinations apart',
      items: [
        { text: 'The Tamil test is a third of the marks and a gate', note: '150 of the 450, set in Tamil at SSLC standard, and a score below 60 stops the rest of Paper I and all of Paper II being evaluated.' },
        { text: 'The subject paper is two-thirds of the rank', note: '300 of the 450 marks are the discipline, at the standard of the qualifying degree, diploma or certificate.' },
        { text: 'No maximum age for reserved communities', note: 'SC, SC(A), ST, MBC, BC and BC(M) candidates have no upper age limit for most posts; general candidates have 32 for the engineering posts. The diploma-level Overseer and Junior Draughting Officer posts have no maximum for anyone.' },
        { text: 'Three or four notifications a year', note: 'two non-interview, one or two interview, one diploma and one ITI stream in 2025 and 2026, each with a window of about a month.' },
        { text: 'No negative marking', note: 'none of the technical notifications contains a deduction clause for a wrong answer.' },
      ],
    },
    {
      type: 'note',
      title: 'The Tamil gate decides whether your engineering paper is read',
      text: 'Part A of Paper I is 100 questions of SSLC-standard Tamil for 150 marks, and Parts B and C of Paper I and the whole of Paper II are evaluated only for candidates scoring 60. An engineer with a strong subject paper and no Tamil preparation can have 300 marks left unmarked. The syllabus is the tenth-standard state board Tamil, which is finite; the threshold is 40 per cent, which is modest for a candidate who prepares it.',
    },
  ],
  stages: [
    {
      name: 'Paper I — Tamil, general studies and aptitude',
      mode: 'Objective, OMR or computer-based, three hours',
      detail:
        'Part A Tamil at SSLC standard, 100 questions for 150 marks, with a gate at 60; Part B general studies 75 and Part C aptitude 25 for 150 marks. Parts B and C are marked only for candidates who clear Part A.',
    },
    {
      name: 'Paper II — the subject',
      mode: 'Objective, computer-based, three hours',
      detail:
        'Two hundred questions for 300 marks at the level of the post — degree for the Assistant Engineer stream, diploma or ITI for the diploma stream. Held on separate dates from Paper I.',
    },
    {
      name: 'Interview — interview stream only',
      mode: 'Oral test, 60 marks',
      detail:
        'For the posts notified in the interview stream, an oral test assessing personality, aptitude and general and technical knowledge, added to the 450 written marks for a total of 510.',
    },
    {
      name: 'Certificate verification and counselling',
      mode: 'Documents, then allotment',
      detail:
        'Onscreen and physical verification in phases, then counselling by rank and preference. The 2025 diploma stream was in its eleventh verification phase in September 2026.',
    },
  ],
  updates: [
    {
      type: 'note',
      title: 'Open now — CTSE Interview Posts, No. 08/2026, until 6 October 2026',
      text: `Checked ${CHECKED}. Notification No. 08/2026 of 31 August 2026 for the Combined Technical Services Examination (Interview Posts) takes applications from 7 September to 6 October 2026, 11.59 PM, with a correction window from 10 to 12 October. It carries 31 post codes and 170 vacancies, including one Assistant Director of Town and Country Planning. The commission’s planner projects the examination for 14 November 2026. The fee is ₹200, plus ₹200 for each additional subject paper.`,
    },
    {
      type: 'table',
      caption: 'The technical streams of 2026 and where each stands.',
      head: ['Stream', 'Notification', 'Posts', 'Status'],
      rows: [
        ['CTSE — Interview Posts', 'No. 08/2026, 31 August 2026', '170 across 31 post codes, including Assistant Director of Town and Country Planning', 'Open to 6 October 2026; examination projected 14 November'],
        ['CTSE — Non-Interview Posts', 'No. 04/2026, 20 May 2026', '461 across 45 post codes as notified — Assistant Engineers in agricultural engineering 64, rural development 50, highways 38, water resources 33, public works 14 civil and 13 electrical, plus architects, planning assistants and corporation posts; revised by Addendum 4A', 'Closed 25 June; examinations across 16 to 20 August, 7 to 12 September and 19 September 2026 — civil engineering on 17 August, the Tamil and general studies paper on 19 September'],
        ['CTSE — Diploma and ITI Level', 'No. 06/2026, 7 July 2026', '839 across 56 post codes — Overseer and Junior Draughting Officer in rural development 129, JDO in water resources and public works 101, JDO highways 46, Road Inspector 149, Surveyor cum Assistant Draughtsman 32, Radio Supervisor 14 and others', 'Closed 15 August 2026; examination dates to be announced'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2025 streams, as a guide to the cadence and the timetable.',
      head: ['Stream', 'Notification', 'Posts', 'Timetable'],
      rows: [
        ['CTSE — Interview Posts', 'No. 08/2025, 7 May 2025', '330, including three Assistant Directors of Town and Country Planning', 'Examined 20 to 22 July 2025; final publication list 10 June 2026'],
        ['CTSE — Non-Interview Posts', 'No. 09/2025, 21 May 2025', '615 — Assistant Engineers in agricultural engineering 116, highways 92, rural development 41, water resources 38, pollution control 38, endowments 39, SIPCOT 17', 'Examined 4 to 18 August 2025; final keys 22 January 2026; verification phases to 24 June 2026'],
        ['CTSE — Diploma and ITI Level', 'No. 10/2025, 13 June 2025', '1,910', 'Examined 31 August to 27 September 2025; final keys 25 February 2026; eleventh verification phase 10 September 2026'],
        ['CTSE — ITI Level II', 'No. 13/2025, 3 September 2025', 'Field Assistant and trade posts', 'Examined 16 November 2025'],
        ['CTSE — Interview Posts II', 'No. 19/2025, 22 December 2025', '76', 'Examined 7 and 8 March 2026'],
      ],
    },
    {
      type: 'note',
      title: 'The Combined Engineering Services Examination has not been notified since 2023',
      text: 'Notification 23/2023 of October 2023 was the last CESE — Assistant Engineers in water resources, public works, highways, rural development, agricultural engineering, the electricity utility, the pollution control board and the water supply board, examined in January 2024 with the last supplemental list in October 2025. Since then the same posts have been notified inside the non-interview CTSE stream, on the same 450-mark scheme, and the commission’s 2026 planner lists no CESE. A candidate waiting for a CESE notification is waiting for a name the commission has stopped using.',
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'CTSE Interview Posts No. 08/2026 — open to 6 October', href: TN_TECH_SRC.ctseInterview2026 },
        { label: 'Press release on No. 08/2026', href: TN_TECH_SRC.ctseInterview2026Press },
        { label: 'Apply online', href: TNPSC.apply },
        { label: 'TNPSC examination dashboard', href: TNPSC.dashboard },
        { label: 'TNPSC annual planner', href: TNPSC.planner },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility by post family, from the 2026 notifications. Age is reckoned as on 1 July 2026 and the qualification must be held on the notification date.',
      head: ['Post', 'Qualification', 'Age'],
      rows: [
        ['Assistant Engineer — civil, electrical, agricultural', 'A degree in the branch of engineering the post names, from a recognised university', 'Minimum 21; general candidates to 32; no maximum for SC, SC(A), ST, MBC, BC and BC(M). Pollution control and industries posts carry their own ceilings'],
        ['Assistant Director of Town and Country Planning', 'A post-graduate degree in town, urban or regional planning; or associate membership of the Institute of Architects or B.Arch with three years’ planning experience; or B.E. civil or highways, or AMIE civil, with two years’', 'Minimum 21; general candidates to 32, not applicable to serving town planning officers; no maximum for reserved communities'],
        ['Junior Draughting Officer, Overseer, Road Inspector', 'A diploma in civil engineering from the state technical board; a degree in civil engineering for the forest department’s JDO', 'Minimum 21; no maximum age for anyone — the ceiling of 60 applies'],
        ['Surveyor, Draughtsman, Radio Supervisor and trade posts', 'The diploma or ITI certificate the post names', 'As notified per post; minimum 18 for some trade posts'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees by stream. The one-time registration of ₹150 is valid for five years across all TNPSC examinations.',
      head: ['Stream', 'Examination fee', 'Additional subject paper', 'Exemptions'],
      rows: [
        ['Non-interview posts', '₹100', '₹100 each', 'SC, SC(A), ST, disabled and destitute-widow candidates fully; BC, BC(M), MBC and DC three free chances; ex-servicemen two'],
        ['Interview posts', '₹200', '₹200 each', 'As above'],
        ['Diploma and ITI level', '₹100', '—', 'As above'],
      ],
    },
    {
      type: 'list',
      title: 'The conditions that recur',
      items: [
        { text: 'Tamil must be shown or passed', note: 'adequate knowledge — Tamil in SSLC, HSC or degree, Tamil-medium schooling, or the Second Class Language Test — otherwise within two years of appointment. This is separate from the Tamil gate in the examination.' },
        { text: 'Five years of state service disqualifies a non-reserved candidate', note: 'even within age.' },
        { text: 'The pay level for Assistant Engineer is 20', note: 'in the 2026 non-interview notification.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Combined Technical Services scheme, common to every 2025 and 2026 stream. Part A of Paper I gates everything else.',
      head: ['Paper', 'Content', 'Questions', 'Marks', 'Duration', 'Rule'],
      rows: [
        ['Paper I — Part A', 'Tamil eligibility test at SSLC standard, in Tamil', '100', '150', '3 hours for Paper I', 'Sixty required for Parts B and C and Paper II to be evaluated'],
        ['Paper I — Part B', 'General studies', '75', '150 for B and C', '', '—'],
        ['Paper I — Part C', 'Aptitude and mental ability', '25', '', '', '—'],
        ['Paper II', 'The subject, at the level of the post — degree, diploma or ITI', '200', '300', '3 hours', 'Computer-based'],
        ['Interview', 'Interview stream only', '—', '60', '—', 'Added to the written 450'],
        ['Total', '', '', '450, or 510 with interview', '', 'Minimum 180 general; 135 reserved'],
      ],
    },
    {
      type: 'note',
      title: 'No negative marking, and the interview is by stream',
      text: 'None of the 2025 or 2026 technical notifications contains a deduction clause for a wrong answer; the only deductions are penalties for breaching examination instructions. The non-interview and diploma streams are, in the notification’s words, a single-stage written examination with selection on Parts B and C of Paper I and on Paper II. The interview stream adds an oral test of 60 marks assessing personality, bearing, aptitude and general and technical knowledge. A post appears in one stream or the other, and the notification says which.',
    },
    {
      type: 'list',
      title: 'The rules that decide the paper',
      items: [
        { text: 'The subject paper is two-thirds of the rank', note: '300 of the 450 written marks, at the level of the qualifying degree or diploma.' },
        { text: 'The Tamil marks count in full once the gate is cleared', note: 'unlike the Group 1 and 2 Tamil papers, Part A’s 150 marks contribute to the total.' },
        { text: 'The papers are held on separate days', note: 'the 2026 non-interview stream examined civil engineering on 17 August and the Tamil and general studies paper on 19 September, across three examination windows.' },
        { text: 'The minimum is on the total', note: '180 for general candidates and 135 for reserved communities, out of 450.' },
        { text: 'Verification runs in phases', note: 'eleven for the 2025 diploma stream by September 2026.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for a candidate applying to the open stream or preparing for the next',
      items: [
        { text: 'If you qualify for No. 08/2026, apply before 6 October', note: 'and read the post code’s qualification clause before the syllabus — the town planning post takes a planning post-graduation or an architecture or civil degree with specified experience.' },
        { text: 'Prepare Tamil as a third of the marks and the gate', note: 'a hundred questions of SSLC Tamil for 150 marks, with 60 required before the engineering paper is read. It is the most under-prepared part of a technical candidate’s paper.' },
        { text: 'Treat your discipline as the main subject', note: '300 of the 450 marks, at the standard of the degree or diploma the post asks for. The commission publishes the subject papers without keys within days of each examination; the 2026 civil engineering paper is already on its site.' },
        { text: 'Build general studies at SSLC standard with the state layer', note: 'seventy-five questions, the Tamil Nadu units through them.' },
        { text: 'Answer every question', note: 'there is no deduction for a wrong answer in any technical notification.' },
        { text: 'Keep documents notification-ready', note: 'three or four streams a year, each with a window of about a month. The degree, the community certificate and the Tamil evidence have to exist before the notification.' },
        { text: 'Read the stream, not the post name', note: 'Assistant Engineer is in the non-interview stream; Assistant Director of Town Planning in the interview stream; Junior Draughting Officer in the diploma stream. Each has its own notification, fee and date.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination, the Tamil gate and the interview provision are quoted from the 2025 and 2026 Combined Technical Services notifications and their addenda; the CESE facts from Notification 23/2023; the timetables from the commission’s examination dashboard and press releases. The commission publishes the subject papers of recent streams without keys within days of the examination, final keys with results, and an older archive of Combined Engineering Services papers from 2007 and 2008.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'CTSE Interview Posts No. 08/2026 — open', href: TN_TECH_SRC.ctseInterview2026 },
        { label: 'CTSE Non-Interview Posts No. 04/2026', href: TN_TECH_SRC.ctseNonInterview2026 },
        { label: 'Addendum 4A — revised vacancies and power corporation posts', href: TN_TECH_SRC.ctseNonInterview2026Addendum },
        { label: 'Addendum 4B — examination schedule', href: TN_TECH_SRC.ctseNonInterview2026Schedule },
        { label: 'CTSE Diploma and ITI Level No. 06/2026', href: TN_TECH_SRC.ctseDiploma2026 },
        { label: 'Press release on No. 06/2026', href: TN_TECH_SRC.ctseDiploma2026Press },
        { label: 'CTSE Non-Interview Posts No. 09/2025', href: TN_TECH_SRC.ctseNonInterview2025 },
        { label: 'CTSE Interview Posts No. 08/2025', href: TN_TECH_SRC.ctseInterview2025 },
        { label: 'CTSE Diploma and ITI Level No. 10/2025', href: TN_TECH_SRC.ctseDiploma2025 },
        { label: 'CESE No. 23/2023 — the last engineering services examination', href: TN_TECH_SRC.cese2023 },
        { label: 'Recent subject papers without keys', href: TN_TECH_SRC.papersWithoutKey },
        { label: 'CESE 2023 final key', href: TN_TECH_SRC.cese2023Key },
        { label: 'CTSE Non-Interview 2025 final key', href: TN_TECH_SRC.ctseNonInterview2025Key },
        { label: 'TNPSC annual planner', href: TNPSC.planner },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'TNPSC technical post syllabus — the Tamil and general studies Paper I, and the subject Paper II at degree, diploma and ITI level.',
      lead: [
        'One common paper and one subject paper at the level of the post. The Tamil part is a third of the marks and comes first.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper I — Part A, Tamil',
              'A hundred questions at the SSLC standard of the state board, in Tamil: grammar, vocabulary, comprehension, literature. The gate at 60 and 150 marks towards the rank.',
            ],
            [
              'Paper I — Parts B and C',
              'General studies — science, current events, the geography of India and Tamil Nadu, Indian history and the national movement, Tamil Nadu’s history and culture, the polity, the economy and the state’s development administration — for 75 questions; aptitude and mental ability for 25. At SSLC standard.',
            ],
            [
              'Paper II — engineering, degree level',
              'The core of the discipline at the level of a bachelor’s degree — for civil, structural analysis and design, geotechnical, hydraulics and irrigation, water supply and sanitation, transportation and construction management; for electrical and agricultural engineering, the equivalent core. The syllabus is the annexure of the notification, and the subject code identifies the paper.',
            ],
            [
              'Paper II — town planning',
              'Urban and regional planning, planning law and the state’s planning framework, transport and housing, at post-graduate level for the Assistant Director post.',
            ],
            [
              'Paper II — diploma and ITI level',
              'Civil engineering at the standard of the state technical board’s diploma for Junior Draughting Officer, Overseer and Road Inspector; the trade at certificate level for the surveyor, draughtsman and trade posts.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'CTSE Interview Posts No. 08/2026 — syllabus in the annexure', href: TN_TECH_SRC.ctseInterview2026 },
            { label: 'CTSE Non-Interview Posts No. 04/2026', href: TN_TECH_SRC.ctseNonInterview2026 },
            { label: 'Tamil Nadu government exams hub', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'TNPSC technical post exam pattern — the 450-mark scheme with its Tamil gate, the 300-mark subject paper, the 60-mark interview stream and no negative marking.',
      lead: [
        'A gate, a common paper and a subject paper — and, in one stream, a board.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each component contributes.',
          head: ['Component', 'Marks', 'Gate', 'Counts?'],
          rows: [
            ['Paper I Part A — Tamil', '150', 'Sixty, or nothing else is marked', 'Yes'],
            ['Paper I Parts B and C', '150', '—', 'Yes'],
            ['Paper II — the subject', '300', '—', 'Yes'],
            ['Interview — interview stream', '60', '—', 'Yes'],
            ['Total', '450 or 510', '180 general, 135 reserved to qualify', 'One rank per stream'],
          ],
        },
        {
          type: 'p',
          text: 'The planning rule: the subject is two-thirds of the rank and the Tamil test is the gate to all of it. An engineering candidate who prepares the discipline and neglects a hundred SSLC Tamil questions has prepared 300 marks that may never be read.',
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'TNPSC technical post previous papers — the recent subject papers the commission publishes without keys, the final keys with results, and the older CESE archive.',
      lead: [
        'The commission publishes the subject paper within days of the examination. The 2026 civil engineering paper was on its site two days after it was sat.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The commission’s page of objective papers without keys holds the recent Combined Technical Services subject papers — civil engineering, electrical and electronics, mechanical, town planning and architecture — for the 2025 and 2026 streams. Final keys follow with the results. Its older archive holds Combined Engineering Services papers from 2007 and 2008 in civil, mechanical, chemical, textile and instrumentation engineering, and the CESE 2023 final key is on the dashboard.',
        },
        {
          type: 'list',
          title: 'How to work the archive',
          items: [
            { text: 'Sit the recent subject papers to time', note: '200 questions in three hours, on a screen. They are the current paper.' },
            { text: 'Use the final keys of the previous stream', note: 'the 2025 non-interview key is published; a 2025 paper with its key is a full practice set.' },
            { text: 'Sit a Tamil eligibility paper from any TNPSC examination', note: 'the Group 4 papers carry the same SSLC-standard Tamil section, with keys.' },
            { text: 'Read the 2023 CESE paper for the level', note: 'the last engineering services paper, on the same scheme.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Recent subject papers without keys', href: TN_TECH_SRC.papersWithoutKey },
            { label: 'CTSE Non-Interview 2025 final key', href: TN_TECH_SRC.ctseNonInterview2025Key },
            { label: 'CESE 2023 final key', href: TN_TECH_SRC.cese2023Key },
            { label: 'Older CESE papers, 2007 and 2008', href: TN_TECH_SRC.oldPapers },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'TNPSC technical post mock tests — the Tamil gate, the common paper and the 200-question subject paper on a screen.',
      lead: [
        'Two papers on different days, and the first has a gate in it. Rehearse both, in that order.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A Tamil sectional weekly', text: 'A hundred SSLC Tamil questions in ninety minutes, from the published TNPSC papers. Clear 60 every time.' },
            { title: 'A full Paper I fortnightly', text: 'Two hundred questions in three hours — Tamil, general studies, aptitude — scored with Part A first.' },
            { title: 'A subject paper weekly, on a screen', text: 'Two hundred questions in three hours from the published papers and the discipline’s curriculum. Every question answered; no penalty.' },
            { title: 'The interview file, for the interview stream', text: 'The post, the department, the discipline’s current questions in the state.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'TNPSC technical post preparation — a plan for streams notified three or four times a year, weighted to the subject paper and the Tamil gate.',
      lead: [
        'The notification will give you a month. The Tamil and the discipline have to be ready before it.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan in four phases',
          items: [
            { title: 'Phase one — the discipline at the right level', text: 'The core of the subject from the curriculum of the qualifying degree or diploma, unit by unit against the notification annexure, with the published papers as the level check.' },
            { title: 'Phase two — Tamil and the common paper', text: 'SSLC Tamil as a subject; general studies with the Tamil Nadu layer; aptitude drilled.' },
            { title: 'Phase three — papers under the clock', text: 'Weekly subject papers on a screen; fortnightly Paper I with the gate scored first.' },
            { title: 'Phase four — ready for the stream', text: 'Certificates in order; the notification index watched; the stream that carries your post identified.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2025 and 2026 streams taught',
          items: [
            { text: 'The engineering posts are in the non-interview stream', note: 'notified in May in both years, with the examination in August and September. The interview stream in May and August or December; the diploma stream in June or July.' },
            { text: 'Vacancies grow by addendum', note: 'the 2026 non-interview stream added the power distribution corporation’s posts three weeks after notification.' },
            { text: 'Examinations spread across weeks', note: 'the 2026 non-interview stream examined its subjects across three windows from 16 August to 19 September.' },
            { text: 'Verification runs for a year', note: 'the 2025 diploma stream reached its eleventh phase fifteen months after notification.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'TNPSC technical post study material — what to read for the Tamil gate, the common paper and each discipline at the level of the post.',
      lead: [
        'The common paper has a school reading list. The subject paper has a curriculum.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by paper and post family.',
          head: ['Paper', 'Standard', 'What to work from'],
          rows: [
            ['Tamil', 'SSLC', 'The state board Tamil textbooks for the ninth and tenth standards, and the Tamil sections of the published TNPSC papers.'],
            ['General studies and aptitude', 'SSLC', 'The state board science and social science textbooks to the tenth standard, a current affairs digest, and an aptitude question bank.'],
            ['Engineering — degree level', 'Bachelor’s', 'The core textbooks of the engineering degree, unit by unit against the annexure, and the published 2025 and 2026 subject papers.'],
            ['Town planning', 'Post-graduate', 'The planning curriculum — urban and regional planning, transport, housing, planning law — and the state’s own planning framework.'],
            ['Diploma-level civil', 'Diploma', 'The state technical board’s diploma curriculum texts and the published diploma-stream papers.'],
          ],
        },
        {
          type: 'note',
          title: 'Read the annexure before buying anything',
          text: 'The syllabus for each subject paper is the annexure of its notification, identified by subject code, and it names the units. The curriculum of the degree or diploma the post asks for, read against that annexure, is the reading list.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Tamil Nadu government exams', to: '/government-exams/state/tamil-nadu/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any TNPSC technical notification open right now?',
      a: 'Yes. Notification No. 08/2026 for the Combined Technical Services Examination (Interview Posts) — 170 posts across 31 post codes, including one Assistant Director of Town and Country Planning — takes applications from 7 September to 6 October 2026, with a correction window from 10 to 12 October and the examination projected for 14 November. The non-interview stream of May 2026 closed on 25 June and is mid-examination; the diploma stream of July 2026 closed on 15 August.',
    },
    {
      q: 'When is the next TNPSC Assistant Engineer notification?',
      a: 'Assistant Engineer posts are notified in the non-interview stream of the Combined Technical Services Examination, which appeared in May in both 2025 and 2026 — 615 posts in 2025 and 461 in 2026 before addenda. The 2026 stream is mid-examination. No date for a 2027 stream is published. The Combined Engineering Services Examination has not been notified since 2023.',
    },
    {
      q: 'What is the TNPSC technical post exam pattern?',
      a: 'Paper I: Part A, Tamil at SSLC standard, 100 questions for 150 marks with a gate at 60; Parts B and C, general studies 75 and aptitude 25, for 150 marks — three hours. Paper II: the subject at the level of the post, 200 questions for 300 marks in three hours on a computer. Four hundred and fifty marks, with a minimum of 180 for general candidates and 135 for reserved communities; the interview stream adds an oral test of 60 for 510.',
    },
    {
      q: 'Is there negative marking in TNPSC technical exams?',
      a: 'No. None of the 2025 or 2026 Combined Technical Services notifications contains a deduction clause for a wrong answer; the only deductions are penalties for breaching the examination instructions.',
    },
    {
      q: 'Is there an interview for TNPSC Assistant Engineer?',
      a: 'No. Assistant Engineer posts are in the non-interview stream, which the notification describes as a single-stage written examination with selection on Paper I Parts B and C and Paper II. The interview stream — with a 60-mark oral test — carries other posts, such as Assistant Director of Town and Country Planning.',
    },
    {
      q: 'What is the age limit for TNPSC technical posts?',
      a: 'A minimum of 21 for most posts. For the Assistant Engineer and town planning posts, general candidates to 32 as on 1 July 2026, with no maximum for SC, SC(A), ST, MBC, BC and BC(M) candidates. The diploma-level Overseer, Junior Draughting Officer and Road Inspector posts have no maximum age for anyone. Some corporation and pollution-control posts carry their own ceilings.',
    },
    {
      q: 'What are the TNPSC technical exam fees?',
      a: 'A one-time registration of ₹150 valid five years, plus an examination fee of ₹100 for the non-interview and diploma streams or ₹200 for the interview stream, with the same amount again for each additional subject paper. SC, SC(A), ST, disabled and destitute-widow candidates are exempt from examination fees; BC, BC(M), MBC and DC candidates have three free chances and ex-servicemen two.',
    },
    {
      q: 'Does TNPSC publish technical previous papers?',
      a: 'Yes. The commission publishes the subject papers of each stream without keys within days of the examination — the 2026 civil engineering paper was on its site two days after it was sat — and final keys with the results. An older archive holds Combined Engineering Services papers from 2007 and 2008.',
    },
  ],
}

const tamilNadu = [
  TN_GROUP_1,
  TN_GROUP_2,
  TN_GROUP_2A,
  TN_GROUP_4,
  TN_POLICE,
  TN_TEACHING,
  TN_TECHNICAL,
  TN_VAO,
  TN_DEPARTMENTAL,
  TN_MRB,
]

export default tamilNadu
