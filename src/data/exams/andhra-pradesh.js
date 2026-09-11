/**
 * Andhra Pradesh state exams — /government-exams/state/andhra-pradesh/:exam/
 *
 * The state hub at /government-exams/state/andhra-pradesh/ lists the
 * recruitment routes the state runs. Each of those cards becomes a link only
 * when a record exists here, so this file is what turns a card into a page.
 *
 * Two things shape everything below, and both are specific to Andhra Pradesh:
 *
 *   The 2014 bifurcation still runs through the recruitment landscape. APPSC
 *   inherited the combined state's rules and then diverged from Telangana's
 *   commission in scheme, marking and cadence, so a candidate arriving from
 *   Telangana material — or from the pre-2014 APPSC pattern — is preparing for
 *   an examination that has moved. The Andhra Pradesh history, geography,
 *   economy and society examined here are those of the residuary state.
 *
 *   APPSC has run a screening-test-then-mains shape for its larger groups and
 *   a single objective examination for the smaller ones, and has changed
 *   which is which between cycles. The notification for the cycle a candidate
 *   is sitting is therefore the specification, and every pattern block below
 *   says so.
 *
 * Every dated fact — vacancies, fees, age limits, marks, deadlines — sits in
 * the `updates`, `eligibility`, `pattern` and `sources` sections, is taken
 * from a named notification linked in the same section, and was checked on
 * the date in CHECKED. When you refresh a status, move that date with it. The
 * rest of each record is deliberately evergreen: the durable shape of the
 * recruitment and the method that shape implies.
 */

const OFFICIAL = 'psc.ap.gov.in'

/** The day the dated facts on these pages were last read off an official notice. */
const CHECKED = '11 September 2026'

/** Recurs at the foot of every pattern page in this file. */
const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'APPSC revises paper structure, marks, syllabus detail and eligibility between recruitment cycles, and has done so more than once in recent years. Everything here describes the shape the recruitment has held; the notification for the cycle you are sitting is the document that decides it. Read it end to end before you plan around any figure.',
}

/* ── Andhra Pradesh Police ──────────────────────────────────────
   Every standard, mark and fee below is from the two November 2022
   notifications (Rc.No.163 for SI, Rc.No.161 for Constable) and their
   amendments, read against the scanned page images because the OCR of those
   PDFs mis-reads at least one physical standard. Both cycles are complete;
   the next is expected under the state's 2026 job calendar but was not
   notified at CHECKED. */
const AP_POLICE_SRC = {
  board: 'https://slprb.ap.gov.in/',
  recruitments: 'https://slprb.ap.gov.in/UI/Recruitments.aspx',
  siNotification: 'https://slprb.ap.gov.in/PDFS/SLPRB_AP_SI_%20Notification.pdf',
  siAgeAmendment: 'https://slprb.ap.gov.in/PDFS/Amendment_SI.pdf',
  siCutoff: 'https://slprb.ap.gov.in/PDFS/CutOff11_SD.pdf',
  pcNotification: 'https://slprb.ap.gov.in/PDFS/SLPRB_AP_PC_Notification.pdf',
  pcAmendment: 'https://slprb.ap.gov.in/PDFS/Amendment.pdf',
  pcCutoff: 'https://slprb.ap.gov.in/PC_DEPT_LIST/Revised%20CutOff-%20Civil_20250808.pdf',
}

const AP_POLICE = {
  slug: 'andhra-pradesh-police',
  path: '/government-exams/state/andhra-pradesh/andhra-pradesh-police/',
  name: 'Andhra Pradesh Police',
  fullName: 'Andhra Pradesh Police Sub-Inspector and Constable recruitment',
  authority: 'Andhra Pradesh State Level Police Recruitment Board (APSLPRB)',
  official: 'slprb.ap.gov.in',
  seoTitle: 'AP Police SI & Constable 2026: Eligibility, Pattern & PET',
  metaDescription:
    'AP Police SI and Constable — status, eligibility, age, fees, the preliminary and final written tests, PMT and PET standards, and how selection is scored.',
  lead: [
    'Andhra Pradesh recruits its Sub-Inspectors and Constables through the State Level Police Recruitment Board, in two parallel notifications that share a shape: a preliminary written test that screens and is then discarded, physical measurement and efficiency tests, and a final written examination that decides the result. The Sub-Inspector route asks for a degree and adds two descriptive language papers; the Constable route asks for Intermediate and runs on a single paper.',
    'Two features distinguish this board from most police recruitments. The preliminary test carries no negative marking — the notification awards full marks for a correct bubble and zero for none, and stops there. And for the armed-reserve posts the physical efficiency test is not a hurdle but a scored component, worth as much as the final written paper for Constable and a third of the total for Reserve Sub-Inspector.',
  ],
  quickFacts: [
    ['Conducted by', 'Andhra Pradesh State Level Police Recruitment Board'],
    ['Current status', 'No open window as at 11 September 2026 — see the notification section'],
    ['Sub-Inspector', 'Degree; preliminary test, PMT and PET, then a four-paper final written examination'],
    ['Constable', 'Intermediate; preliminary test, PMT and PET, then a single final written paper'],
    ['Negative marking', 'None prescribed in either notification'],
    ['Physical test', 'Qualifying for Civil posts; scored out of 100 for APSP and Reserve posts'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The board runs Sub-Inspector and Constable as separate notifications with separate post codes — Civil posts that serve in the districts, and armed-reserve posts in the APSP battalions that train and deploy as units. The distinction matters at every stage: the Civil posts reserve a third of vacancies for women and treat the physical test as pass-or-fail, while the APSP posts are for men only and score the physical test into the final total.',
    },
    {
      type: 'p',
      text: 'Both routes screen with a preliminary written test whose marks are then discarded. What follows is a second, separate application with certificates, the physical tests, and a final written examination that alone — or together with the physical score for armed posts — builds the merit list. The board publishes cut-offs by category and unit after each selection, which makes the last cycle unusually legible: a candidate can see exactly what mark selected in their own zone.',
    },
    {
      type: 'list',
      title: 'What sets the Andhra Pradesh board apart',
      items: [
        { text: 'No negative marking', note: 'the awarding-of-marks clause in both notifications gives full marks for a correct answer and zero for an unanswered one, and prescribes no deduction. Guessing carries no cost.' },
        { text: 'The physical test is scored for armed posts', note: 'Reserve Sub-Inspector and APSP Constable candidates must clear all three events, and their time and distance are graded out of 100 marks that count in the final total.' },
        { text: 'Two descriptive language papers for SI', note: 'English and Telugu or Urdu, each qualifying only, and each capable of removing a candidate whose objective papers were strong.' },
        { text: 'Local reservation shapes the merit list', note: 'the notifications fill a share of posts on combined merit and the rest for local candidates only, under the state’s presidential-order rules.' },
      ],
    },
    {
      type: 'note',
      title: 'The preliminary test admits you and then disappears',
      text: 'Preliminary marks have, in the notification’s own words, no relevance in the final selection. Their job is to decide who proceeds to the physical tests. Candidates who prepare to top the preliminary paper are optimising a number that will not survive the stage; the paper to prepare for from the first week is the final written examination.',
    },
  ],
  stages: [
    {
      name: 'Preliminary written test',
      mode: 'Objective, screening only',
      detail:
        'For Sub-Inspector, two papers on one day — arithmetic and reasoning, then general studies. For Constable, one paper. Qualifying marks by category apply to each paper separately, and the marks do not carry forward.',
    },
    {
      name: 'Stage-II application',
      mode: 'Online, with certificates',
      detail:
        'Candidates who qualify the preliminary test apply again, uploading the certificates the board will verify. The board has extended this window more than once in the last cycle.',
    },
    {
      name: 'Physical measurement and efficiency tests',
      mode: 'Measured, then run and jump',
      detail:
        'Height and chest for men, height and weight for women, with relaxed standards for Scheduled Tribe candidates of the agency areas. Then the 1600-metre run and either the 100-metre run or the long jump for Civil posts, or all three events scored for the armed posts.',
    },
    {
      name: 'Final written examination',
      mode: 'Objective, with descriptive language papers for SI',
      detail:
        'The examination that builds the merit list. Sub-Inspector candidates write four papers over two days; Constable candidates write one.',
    },
    {
      name: 'Selection, verification and medical',
      mode: 'Merit, then documents',
      detail:
        'A provisional selection list by post code, unit and category, published with cut-offs, followed by certificate verification, an antecedents check and a medical examination before training.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The most recent Sub-Inspector and Constable recruitments were both notified on 28 November 2022 and both are complete — the Sub-Inspector selection list was published in December 2023 and the Constable list in August 2025, the latter having spent most of two years waiting on the physical tests. No new application window was open at the date checked.`,
    },
    {
      type: 'table',
      caption: 'The two 2022 cycles, end to end. The Constable cycle’s length is the thing to plan around.',
      head: ['Stage', 'Sub-Inspector (Rc.No.163/2022)', 'Constable (Rc.No.161/2022)'],
      rows: [
        ['Applications', '14 December 2022 to 18 January 2023', '30 November 2022 to 7 January 2023, after extension'],
        ['Preliminary written test', '19 February 2023 — 1,51,288 appeared, 57,923 qualified', '22 January 2023 — around 4.6 lakh appeared, 95,208 qualified'],
        ['Physical tests', 'August to September 2023', 'Postponed from March 2023 and held 30 December 2024 to 1 February 2025 — 38,914 qualified'],
        ['Final written examination', '14 and 15 October 2023 — 18,637 qualified', '1 June 2025 — 33,921 qualified'],
        ['Selection list', '20 December 2023', '1 August 2025, revised 8 August 2025'],
      ],
    },
    {
      type: 'note',
      title: 'A 2026 cycle is scheduled but not yet notified',
      text: 'The state’s job calendar for 2026, issued by government order on 22 August 2026, sets 15 September 2026 as the notification date for a second phase of recruitment covering Constable, Sub-Inspector, Reserve Sub-Inspector, Fire Services, Prisons and Deputy Superintendent posts. A calendar date is not a notification: as at the date checked above nothing had been published on the board’s site, and the age rule, fee and standards for the new cycle will be set by the notification when it appears. Vacancy counts and eligibility figures circulating for it are not from the board.',
    },
    {
      type: 'note',
      title: 'Why the Constable cycle took thirty-two months',
      text: 'The physical tests were first postponed for the Assembly session and elections, then — in the board’s own words — for various reasons including pending writ petitions. Reporting at the time attributed the petitions to Home Guard candidates who had not qualified the preliminary test and sought a separate merit list. The selection list was ultimately published subject to the outcome of writ petitions still pending. Neither cycle was cancelled or re-examined.',
    },
    {
      type: 'links',
      title: 'Check the board directly',
      items: [
        { label: 'APSLPRB home — press notes and current notifications', href: AP_POLICE_SRC.board },
        { label: 'APSLPRB recruitments list', href: AP_POLICE_SRC.recruitments },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption:
        'Eligibility as set by the 2022 notifications, with age reckoned as on 1 July 2022. Both upper limits were raised by two years in amendments of December 2022. A new notification will set its own reckoning date.',
      head: ['Requirement', 'Sub-Inspector', 'Constable'],
      rows: [
        ['Qualification', 'A degree from a recognised university. SC and ST candidates: passed Intermediate and studied a degree course.', 'Intermediate or equivalent. SC and ST candidates: passed SSC, studied Intermediate and appeared for both years’ examinations.'],
        ['Age', '21 to 29 years', '18 to 26 years; Home Guards with 360 days’ duty in the preceding two years, 18 to 34'],
        ['Widows and separated women', '—', '18 to 42 for SC and ST candidates, 18 to 37 for others, where not remarried'],
        ['Age relaxation', 'EWS, BC, SC and ST 5 years; state government employees up to 5 years by regular service; armed forces and NCC instructors 3 years plus service', 'The same table'],
        ['Fee', '₹600 for local OC and BC; ₹300 for local SC and ST; ₹500 for EWS and for non-local candidates', '₹300 for local OC, BC and EWS and for non-local candidates; ₹150 for local SC and ST'],
        ['Posts', 'SCT SI (Civil), men and women; SCT RSI (APSP), men only', 'SCT PC (Civil), men and women; SCT PC (APSP), men only'],
      ],
    },
    {
      type: 'table',
      caption:
        'Physical measurement standards, identical in both notifications and verified against the printed pages. There is no relaxation of measurements for ex-servicemen — their concession is in the efficiency test timings.',
      head: ['Candidate', 'Height', 'Chest or weight'],
      rows: [
        ['Men', 'Not less than 167.6 cm', 'Chest not less than 86.3 cm on full inspiration, with at least 5 cm expansion'],
        ['Women', 'Not less than 152.5 cm', 'Weight not less than 40 kg'],
        ['Scheduled Tribe men of the agency areas', 'Not less than 160 cm', 'Chest not less than 80 cm, with at least 3 cm expansion'],
        ['Scheduled Tribe women of the agency areas', 'Not less than 150 cm', 'Weight not less than 38 kg'],
      ],
    },
    {
      type: 'p',
      text: 'The agency-area relaxation applies to Scheduled Tribe candidates of the scheduled areas of Srikakulam, Vizianagaram, Visakhapatnam, East Godavari and West Godavari, on production of a residence certificate. Seventy-five per cent of the Civil Constable vacancies in scheduled areas are reserved for Scheduled Tribe candidates domiciled there. The medical standard is exacting: 6/6 distant vision in both eyes without correction, full field of vision, and a list of disqualifying conditions that includes colour blindness, squint, knock-knees, flat feet and varicose veins.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The preliminary written test. Marks qualify a candidate for the next stage and are then discarded.',
      head: ['Post', 'Papers', 'Questions and marks', 'Duration', 'Qualifying in each paper'],
      rows: [
        ['Sub-Inspector', 'Paper 1: arithmetic and reasoning. Paper 2: general studies at degree standard', '100 questions, 100 marks each', '3 hours each, same day', 'OC and EWS 40%, BC 35%, SC, ST and ex-servicemen 30% — failing either paper disqualifies'],
        ['Constable', 'One paper at Intermediate standard covering English, arithmetic, reasoning, science, history, geography, polity, economy and current events', '200 questions, 200 marks', '3 hours', 'OC and EWS 40%, BC 35%, SC, ST and ex-servicemen 30%'],
      ],
    },
    {
      type: 'note',
      title: 'No negative marking, in the notification’s own words',
      text: 'The awarding-of-marks clause reads that a candidate is awarded full marks for darkening only the bubble that corresponds to the correct answer, and zero for a question with no bubble darkened. There is no penalty clause anywhere in either notification or in any press note. Coaching material that states a deduction for this board is not describing this board.',
    },
    {
      type: 'table',
      caption: 'The physical efficiency test. Civil candidates must clear the 1600-metre run and one of the other two events; APSP and Reserve candidates must clear all three, and their performance is scored.',
      head: ['Event', 'General standard', 'Ex-servicemen', 'Women'],
      rows: [
        ['1600-metre run', '8 minutes', '9 minutes 30 seconds', '10 minutes 30 seconds'],
        ['100-metre run', '15 seconds', '16.5 seconds', '18 seconds'],
        ['Long jump', '3.80 metres', '3.65 metres', '2.75 metres'],
      ],
    },
    {
      type: 'p',
      text: 'For the armed posts the three events are graded out of 100 — the 1600 metres for 40, the 100 metres for 30 and the long jump for 30 — on a table that runs from full marks for a run under four minutes down to 15 marks for a run just inside the eight-minute limit. That score is a third of a Reserve Sub-Inspector’s total and half of an APSP Constable’s, which makes the running track a place where those recruitments are actually won rather than merely survived.',
    },
    {
      type: 'table',
      caption: 'The final written examination for Sub-Inspector: four papers of three hours each. The language papers qualify and are not counted; the objective papers are the merit list.',
      head: ['Paper', 'Subject', 'Format', 'Marks — Civil SI', 'Marks — Reserve SI'],
      rows: [
        ['Paper I', 'English, degree standard', 'Descriptive, qualifying only', '100', '100'],
        ['Paper II', 'Telugu or Urdu', 'Descriptive, qualifying only', '100', '100'],
        ['Paper III', 'Arithmetic and reasoning', '200 objective questions', '200', '100'],
        ['Paper IV', 'General studies', '200 objective questions', '200', '100'],
      ],
    },
    {
      type: 'list',
      title: 'How the final total is built',
      items: [
        { text: 'Civil Sub-Inspector: Papers III and IV, 400 marks', note: 'the language papers must be passed at 40, 35 or 30 per cent by category, and the objective papers of a candidate who fails either are not evaluated at all.' },
        { text: 'Reserve Sub-Inspector: Papers III and IV at 100 each, plus the physical test at 100', note: '300 marks, with the track worth as much as either written paper.' },
        { text: 'Civil Constable: one final paper of 200 questions for 200 marks', note: 'three hours, on the same syllabus as the preliminary test, in the language chosen at application.' },
        { text: 'APSP Constable: the same paper graded out of 100, plus the physical test at 100', note: 'the board itself describes this as an equal weighting between the written and the physical.' },
        { text: 'Local reservation applies after the marks', note: 'for Civil SI, 30 per cent of posts fill on combined merit and 70 per cent for locals only; for Civil Constable the split is 20 and 80. APSP posts carry no local reservation. Ties go to the older candidate.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan that treats the physical test as part of the syllabus',
      items: [
        { text: 'Start running now, whatever the notification date', note: 'eight minutes for 1600 metres is a modest standard for a trained candidate and an impossible one for an untrained candidate with six weeks’ notice. For the armed posts every ten seconds off that time is marks.' },
        { text: 'Prepare for the final paper, not the preliminary', note: 'the preliminary screens at a low bar and is then discarded. The final written examination is longer, harder and the only written score that counts.' },
        { text: 'Sub-Inspector candidates: write in English and in Telugu or Urdu every week', note: 'two descriptive papers, each qualifying, each capable of ending a candidacy whose objective papers were strong. They are the papers candidates prepare for last and fail first.' },
        { text: 'Drill arithmetic and reasoning as a scored subject', note: 'it is half the Sub-Inspector merit list and a quarter of the Constable paper, and it improves faster under drilled practice than general studies does under reading.' },
        { text: 'Use the published cut-offs to set a target', note: 'the board publishes selection marks by post code, unit and category. Find the number for your own zone and category from the last cycle and prepare to clear it with a margin, rather than to a generic percentage.' },
        { text: 'Have the certificates ready before the preliminary result', note: 'the Stage-II application opens on a short window after the preliminary result and requires the documents the board will later verify. Assembling them afterwards is how candidates miss it.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of each examination, the physical standards and the marking rule are taken from the two 2022 notifications and their amendments, with the timeline from the board’s press notes and selection releases. The board publishes no previous-year question papers — after each examination it releases the answer key and, for a few days, candidates’ scanned OMR sheets, but not the question paper itself.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APSLPRB home', href: AP_POLICE_SRC.board },
        { label: 'APSLPRB recruitments list', href: AP_POLICE_SRC.recruitments },
        { label: 'Sub-Inspector notification, 28 November 2022', href: AP_POLICE_SRC.siNotification },
        { label: 'Sub-Inspector age amendment, 27 December 2022', href: AP_POLICE_SRC.siAgeAmendment },
        { label: 'Sub-Inspector (Civil) selection cut-offs', href: AP_POLICE_SRC.siCutoff },
        { label: 'Constable notification, 28 November 2022', href: AP_POLICE_SRC.pcNotification },
        { label: 'Constable extension and age amendment, 23 December 2022', href: AP_POLICE_SRC.pcAmendment },
        { label: 'Constable (Civil) revised cut-offs, 8 August 2025', href: AP_POLICE_SRC.pcCutoff },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'AP Police SI and Constable syllabus — what the preliminary and final written tests cover, at which standard, and where the two posts differ.',
      lead: [
        'The Constable paper and the Sub-Inspector general studies paper cover the same subjects at different standards — Intermediate for one, degree for the other. The Sub-Inspector route adds a separate arithmetic and reasoning paper and two descriptive language papers.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Constable — preliminary and final paper',
              'English; arithmetic at SSC standard; test of reasoning and mental ability; general science; the history of India, Indian culture and the national movement; Indian geography, polity and economy; and current events of national and international importance. The preliminary and final papers are set on the same syllabus at Intermediate standard, so preparation for one is preparation for both.',
            ],
            [
              'Sub-Inspector — arithmetic and reasoning',
              'Arithmetic at SSC standard — number systems, percentages, ratio, averages, profit and loss, interest, time and work, time and distance, mensuration — together with verbal and non-verbal reasoning, analogy, classification, series, coding, direction sense and problem solving. Examined as a paper of its own in both the preliminary test and the final examination.',
            ],
            [
              'Sub-Inspector — general studies',
              'The same subject areas as the Constable paper but at degree standard: general science and its applications, Indian history with weight on the national movement, Indian geography, the Constitution and polity, the economy, current affairs and the Andhra Pradesh state layer — its history, geography, economy and administration.',
            ],
            [
              'Sub-Inspector — English',
              'A descriptive paper at degree standard: comprehension, précis, letter and report writing, essay, grammar and usage. Qualifying only, at 40, 35 or 30 per cent by category.',
            ],
            [
              'Sub-Inspector — Telugu or Urdu',
              'A descriptive paper in the language chosen at application: comprehension, translation to and from English, essay and composition. Qualifying only, on the same thresholds.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'The syllabus is published as an annexure inside each notification rather than as a separate document, and it is short — a list of subject headings rather than topics. Read it as a statement of standard rather than of content: "SSC standard" for arithmetic and "degree standard" for general studies are the instructions, and previous cut-offs are the best evidence of how hard the board actually sets the paper.',
        },
        {
          type: 'links',
          title: 'Where to build each layer',
          items: [
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs preparation', to: '/current-affairs/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'AP Police SI and Constable exam pattern — the preliminary screening, the physical tests, the final written examination and how each post’s total is built.',
      lead: [
        'Three tests, but only the last one — or the last two, for armed posts — counts. Knowing which is which decides where a year of preparation goes.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes to the final result, by post code.',
          head: ['Stage', 'Civil SI', 'Reserve SI', 'Civil Constable', 'APSP Constable'],
          rows: [
            ['Preliminary written test', 'Screens only', 'Screens only', 'Screens only', 'Screens only'],
            ['Physical measurement', 'Qualifying', 'Qualifying', 'Qualifying', 'Qualifying'],
            ['Physical efficiency', 'Qualifying', '100 marks', 'Qualifying', '100 marks'],
            ['Final written — language papers', 'Qualifying', 'Qualifying', '—', '—'],
            ['Final written — objective', '400 marks', '200 marks', '200 marks', '100 marks'],
            ['Total for merit', '400', '300', '200', '200'],
          ],
        },
        {
          type: 'p',
          text: 'The consequence of that table is a planning rule. For Civil posts the physical test is a bar to clear and the final written paper is the whole result; for armed posts the track is worth a third to a half of the total and is the cheapest place to gain marks, because a minute off a run time is worth more than the equivalent effort in general studies.',
        },
        {
          type: 'list',
          title: 'Rules that decide candidacies',
          items: [
            { text: 'Qualifying marks apply per paper, not in aggregate', note: 'a Sub-Inspector candidate who clears the preliminary general studies paper comfortably and misses the arithmetic paper by a mark is out.' },
            { text: 'Language-paper failure voids the objective papers', note: 'the board does not evaluate Papers III and IV for a candidate who has failed Paper I or II. There is no compensation from a strong objective score.' },
            { text: 'Physical measurement is not re-tested', note: 'a candidate measured below the standard on the day is out, and the notifications say a request for re-measurement will not be entertained.' },
            { text: 'Marks are awarded for one bubble only', note: 'a question with two bubbles darkened scores as no answer — zero, not a deduction, since there is no negative marking.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'AP Police SI and Constable previous papers — what the board publishes, what it does not, and what to practise on instead.',
      lead: [
        'The board publishes answer keys and cut-offs, not question papers. That changes what "previous papers" can mean for this recruitment.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'After each written test the board releases a preliminary key, invites objections, and publishes a final key with any changes. For a few days after results, candidates can download their own scanned OMR sheet. The question paper itself is not published, and there is no downloads or archive section on the board’s site. Year-wise "AP Police previous papers" offered elsewhere are therefore reconstructions from memory rather than official documents, and should be used as practice sets rather than trusted as the paper.',
        },
        {
          type: 'list',
          title: 'What the board does publish, and how to use it',
          items: [
            { text: 'Selection cut-offs by post code, unit and category', note: 'the most useful document the board issues. It tells you the mark that selected in your zone last cycle — a concrete target instead of a percentage.' },
            { text: 'Final answer keys', note: 'a table of question numbers and correct options. Useless alone, but paired with a reconstructed paper it lets you check the reconstruction.' },
            { text: 'Press notes with attendance and qualifying counts', note: 'which show how steeply the field narrows at each stage — from 4.6 lakh to 95,000 at the Constable preliminary, and to 34,000 at the final.' },
          ],
        },
        {
          type: 'note',
          title: 'The Telangana SI papers are the closest official material',
          text: 'The two states’ police boards descend from the same pre-2014 board and set their Sub-Inspector papers on closely matching syllabuses: arithmetic and reasoning, general studies, and descriptive English and Telugu. Telangana’s board has published its papers and this site hosts seven of them. They are not this board’s papers, but they are the nearest thing to official practice material that exists for the Andhra Pradesh Sub-Inspector examination.',
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Telangana Police SI previous papers', to: '/government-exams/state/telangana/telangana-police/' },
            { label: 'Police previous papers directory', to: '/government-exams/police/previous-year-papers/' },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'AP Police SI and Constable mock tests — practising to the board’s no-negative-marking rule and its per-paper qualifying thresholds.',
      lead: [
        'This board’s rules reward a different test habit from most police recruitments: answer everything, and never let one paper fall below the line.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'With no penalty for a wrong answer, an unanswered question is the only way to lose a mark you could have had. A mock test for this board should end with every bubble filled, and the review afterwards should separate questions you knew from questions you guessed right — because the second group will not repeat, and the score they inflate is not the score you will get.',
        },
        {
          type: 'steps',
          title: 'A routine built around the board’s structure',
          items: [
            { title: 'A timed preliminary-format paper every week', text: 'For Constable, 200 questions in three hours. For Sub-Inspector, two 100-question papers back to back — because the preliminary is sat that way and stamina across six hours is part of it.' },
            { title: 'Per-paper thresholds, not a total', text: 'Score each paper against its own qualifying mark. A strong aggregate that hides a weak arithmetic paper is exactly the profile the per-paper rule eliminates.' },
            { title: 'A descriptive session weekly for SI candidates', text: 'One English and one Telugu or Urdu piece, timed, on the paper’s own question types. Nobody fails these papers on knowledge; they fail on never having written under a clock.' },
            { title: 'A timed run every week, logged', text: 'The physical efficiency test is a test. Treat the 1600 metres as a mock with a score, and for armed posts a graded one.' },
          ],
        },
        {
          type: 'note',
          title: 'Use the last cycle’s cut-off as your pass mark',
          text: 'The board’s published cut-offs make a generic target unnecessary. Take the selection mark for your post code, zone and category from the last cycle, add a margin for a stronger field, and treat that as the mark a mock has to reach. It is a harder standard than "above 40 per cent" and the only one that predicts anything.',
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'Telangana Police SI mock test — the closest sibling paper', to: '/government-exams/state/telangana/telangana-police/' },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'AP Police SI and Constable preparation — a plan that gives the physical test and the final written paper their real weight, with the preliminary as a gate.',
      lead: [
        'The recruitment is long, the physical test is not optional, and the paper that counts is the last one. A plan that respects those three facts is most of the preparation.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A twelve-month plan',
          items: [
            { title: 'Months one to three — the foundation and the track', text: 'Arithmetic and reasoning to SSC standard, general studies at the Constable or degree level as your post requires, and a running programme that starts wherever your fitness is. Run three times a week from the first week; the standard is reachable in months and not in weeks.' },
            { title: 'Months four to six — state layer and language', text: 'Andhra Pradesh history, geography, economy and administration, which national material does not cover. Sub-Inspector candidates add weekly descriptive writing in English and their chosen language.' },
            { title: 'Months seven to nine — full papers under the clock', text: 'Weekly timed papers in the final-examination format, scored against the last cycle’s cut-off for your zone and category. Physical work continues; armed-post candidates start timing the 100 metres and measuring the long jump.' },
            { title: 'Months ten to twelve — hold and sharpen', text: 'Maintenance rather than new material. The gap between notification and preliminary test has been under three months in recent cycles, and the gap after that is unpredictable — the Constable physical tests waited two years. A routine you can hold indefinitely beats a peak timed to a date that moves.' },
          ],
        },
        {
          type: 'list',
          title: 'What the last cycle taught',
          items: [
            { text: 'Certificates decide the Stage-II window', note: 'the second application opens for a short period after the preliminary result and requires uploaded certificates. Candidates who clear the paper and miss the window are out.' },
            { text: 'Women candidates for Civil posts compete for a third of the vacancies', note: 'the horizontal reservation is 33⅓ per cent, and in the last Constable cycle 1,063 of 3,580 Civil posts went to women.' },
            { text: 'Home Guards have their own quota and their own age rule', note: 'a 15 per cent quota in Civil Constable and 25 per cent in APSP, with an upper age of 34, for those with 360 days’ duty in the preceding two years.' },
            { text: 'Local status is half the merit list', note: 'a non-local candidate competes only for the combined-merit share of posts — 30 per cent for Civil SI, 20 per cent for Civil Constable — which is a materially harder cut.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'AP Police SI and Constable study material — what to read for each paper, at which standard, and what to do about the state layer.',
      lead: [
        'The syllabus names standards, not books. The material follows from the standard.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by paper and standard. The state layer is the only part that needs a source specific to Andhra Pradesh.',
          head: ['Paper', 'Standard', 'What to work from'],
          rows: [
            ['Arithmetic', 'SSC', 'The class IX and X mathematics textbooks for concepts, then any standard quantitative aptitude question bank for volume. Speed, not depth, is what the paper tests.'],
            ['Reasoning', 'Not stated', 'A verbal and non-verbal reasoning question bank. The question types are common across competitive examinations and the source matters less than the number worked.'],
            ['General studies — Constable', 'Intermediate', 'The Intermediate-level general studies syllabus: NCERT-standard history, geography, polity, economy and science, plus a current affairs digest.'],
            ['General studies — Sub-Inspector', 'Degree', 'The standard degree-level general studies texts for history, polity, geography and economy, plus a science reader and a current affairs digest.'],
            ['Andhra Pradesh state layer', 'Both', 'The state’s own history, geography, economy and administrative structure, including the post-2014 reorganisation. Build notes from the state government’s publications and the board’s syllabus headings; no national text covers it.'],
            ['English and Telugu or Urdu — SI', 'Degree', 'A grammar and composition reference, and a weekly habit of timed writing. Reading model answers does not substitute for producing them.'],
          ],
        },
        {
          type: 'note',
          title: 'One file of Andhra Pradesh questions',
          text: 'Every general studies paper this board sets carries state-specific questions — districts, rivers, projects, dynasties, schemes, the reorganisation. Collect every such question you meet in any practice paper into a single running file. Over months it becomes the most exam-specific revision document available for this recruitment, and unlike a purchased compilation, every entry in it has actually been asked.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any Andhra Pradesh Police SI or Constable notification open right now?',
      a: 'No. As at 11 September 2026 no application window was open on the board’s site. The most recent Sub-Inspector and Constable notifications, both dated 28 November 2022, are complete. The state’s 2026 job calendar indicates a second-phase police notification for 15 September 2026, but a calendar date is not a notification — check slprb.ap.gov.in directly rather than relying on figures circulating for the new cycle.',
    },
    {
      q: 'Is there negative marking in the AP Police preliminary written test?',
      a: 'No. Both 2022 notifications award full marks for a correctly darkened bubble and zero for an unanswered question, and contain no deduction clause. A wrong answer costs nothing, so there is no reason to leave a question blank.',
    },
    {
      q: 'What are the AP Police PMT height and chest standards?',
      a: 'Men: height not less than 167.6 cm and chest not less than 86.3 cm on full inspiration with at least 5 cm expansion. Women: height not less than 152.5 cm and weight not less than 40 kg. Scheduled Tribe candidates of the agency areas: men 160 cm and 80 cm chest with 3 cm expansion, women 150 cm and 38 kg. These are the 2022 standards and are identical for SI and Constable.',
    },
    {
      q: 'What are the AP Police PET running and jumping standards?',
      a: '1600 metres in 8 minutes for general candidates, 9 minutes 30 seconds for ex-servicemen and 10 minutes 30 seconds for women; 100 metres in 15, 16.5 and 18 seconds; long jump of 3.80, 3.65 and 2.75 metres. Civil candidates must clear the 1600 metres and one of the other two events. APSP and Reserve SI candidates must clear all three, and their times and distances are scored out of 100 marks that count in the final total.',
    },
    {
      q: 'Do the preliminary test marks count towards AP Police selection?',
      a: 'No. The notification states in terms that preliminary marks have no relevance in the final selection. They decide who proceeds to the physical tests and are then discarded. Selection is on the final written examination — and, for the armed posts, on the final written examination plus the physical efficiency score.',
    },
    {
      q: 'What is the AP Police SI final written examination pattern?',
      a: 'Four papers of three hours each. Paper I English and Paper II Telugu or Urdu are descriptive and qualifying only, at 40 per cent for OC and EWS, 35 for BC and 30 for SC, ST and ex-servicemen. Paper III arithmetic and reasoning and Paper IV general studies are 200 objective questions each, for 200 marks each in the Civil post and 100 each in the Reserve post. Civil SI selection is on the 400 objective marks; Reserve SI adds the 100-mark physical score for a total of 300.',
    },
    {
      q: 'What is the AP Police Constable exam pattern?',
      a: 'A preliminary written test of 200 questions for 200 marks in three hours, at Intermediate standard, which screens only. After the physical tests, a final written examination of 200 questions on the same syllabus — graded for 200 marks for the Civil post and 100 for the APSP post, where the physical efficiency score adds another 100.',
    },
    {
      q: 'What were the age limits for AP Police SI and Constable?',
      a: 'In the 2022 cycle, after amendments: Sub-Inspector 21 to 29 years and Constable 18 to 26, both reckoned as on 1 July 2022, with Home Guards eligible to 34. Relaxation of five years applies to EWS, BC, SC and ST candidates, and widowed, divorced or judicially separated women may apply for Constable up to 42 or 37 by category. A new notification will set its own dates and limits.',
    },
    {
      q: 'Does the AP Police board publish previous question papers?',
      a: 'No. After each written test the board publishes the answer key and, for a few days, lets candidates download their scanned OMR sheet — but not the question paper. It does publish selection cut-offs by post code, unit and category, which are the most useful preparation document it issues. Year-wise papers offered elsewhere are reconstructions.',
    },
    {
      q: 'How long does AP Police recruitment take from notification to selection?',
      a: 'The 2022 Sub-Inspector cycle ran thirteen months, from notification in November 2022 to the selection list in December 2023. The 2022 Constable cycle ran thirty-two months, because the physical tests were postponed — first for elections, then over pending writ petitions — and were not held until the start of 2025. Plan for a long process and a preparation routine that survives postponement.',
    },
  ],
}

/* ── APPSC portal landing pages ─────────────────────────────────
   psc.ap.gov.in is a gateway; the content lives on portal-psc.ap.gov.in and
   the PDFs on psc.ap.gov.in/Documents. These are the pages that persist across
   cycles.

   A note for whoever next runs a link checker over these: both hosts trip
   automated clients without being broken. portal-psc.ap.gov.in serves an
   incomplete certificate chain (browsers fetch the missing intermediate and
   load it; strict clients report "unable to verify the first certificate"),
   and psc.ap.gov.in answers HEAD requests with a redirect to a login page
   while serving the PDF to a normal GET. Every URL here was fetched and its
   content verified on the CHECKED date; a HEAD-based checker reporting them
   dead is reporting its own limits. */
const APPSC = {
  notifications: 'https://portal-psc.ap.gov.in/HomePages/RecruitmentNotifications.aspx',
  syllabus: 'https://portal-psc.ap.gov.in/HomePages/GroupsSyllabus.aspx',
  results: 'https://portal-psc.ap.gov.in/HomePages/Results_New.aspx',
  keys: 'https://portal-psc.ap.gov.in/HomePages/KeysToPapers.aspx',
  oldPapers: 'https://portal-psc.ap.gov.in/HomePages/QuestionPapersofVariousNotifications.aspx',
  courtCases: 'https://portal-psc.ap.gov.in/HomePages/JudmentDecisiononCourtCases.aspx',
}

/* ── APPSC Group 4 ──────────────────────────────────────────────
   Since 2021 Group 4 in Andhra Pradesh has been a post-specific notification
   rather than a mass recruitment: 670 Revenue posts in 2021, six posts in
   2022, a single post in 2025. The pattern, fee and marking are stable across
   those cycles and are what this record describes; the vacancy figure is
   whatever the next notification says. */
const AP_GROUP_4 = {
  slug: 'appsc-group-4',
  path: '/government-exams/state/andhra-pradesh/appsc-group-4/',
  name: 'APPSC Group 4',
  fullName: 'Andhra Pradesh Public Service Commission Group 4 Services',
  authority: 'Andhra Pradesh Public Service Commission (APPSC)',
  official: OFFICIAL,
  seoTitle: 'APPSC Group 4 2026: Pattern, Negative Marking & CPT',
  metaDescription:
    'APPSC Group 4 guide — the two-paper written test, one-third negative marking, the computer proficiency test, degree-level eligibility, fees and current status.',
  lead: [
    'APPSC Group 4 fills the junior ministerial posts of the state — Junior Assistant, Junior Assistant cum Computer Assistant, Typist and Junior Stenographer — across departments, district collectorates and directorates. It is a graduate-level recruitment despite the entry-level nature of the posts, and its second paper is set at school standard in English and Telugu precisely because the job is about handling correspondence in both.',
    'Two things about the Andhra Pradesh version are easy to get wrong from material written for other states. It penalises a wrong answer by a third of a mark, under a government order that applies to every APPSC objective paper. And it has not run as one large multi-department recruitment since 2021: the recent notifications have been for a single department, sometimes a single post, each with its own local-cadre rule.',
  ],
  quickFacts: [
    ['Conducted by', 'Andhra Pradesh Public Service Commission'],
    ['Current status', 'No open notification as at 11 September 2026; the last was a single-post notification of September 2025'],
    ['Qualification', 'A bachelor’s degree for every post code; typist and stenographer posts also need government technical certificates'],
    ['Papers', 'Two objective papers of 150 marks — general studies and mental ability, then general English and general Telugu'],
    ['Negative marking', 'One-third of a mark for each wrong answer'],
    ['After the written test', 'A computer proficiency test, qualifying, before appointment'],
  ],
  overview: [
    {
      type: 'p',
      text: 'Group 4 is the commission’s route into the ministerial service — the posts that process files, maintain registers, take dictation and type the correspondence that runs a government office. The recruitment reflects the job: a general studies paper at degree standard, a language paper at school standard because clean English and Telugu are the daily work, and a practical test of office software before appointment.',
    },
    {
      type: 'p',
      text: 'What has changed since the bifurcation is the cadence. The commission notified 670 Junior Assistant cum Computer Assistant posts for the Revenue Department in December 2021, then six scattered posts in 2022 and one in 2025. A candidate preparing for "Group 4" is preparing for a paper that recurs, attached to a vacancy count that does not. The scheme, marking and fee have held across those cycles; the posts, cadres and local rules have been different each time.',
    },
    {
      type: 'list',
      title: 'What separates Andhra Pradesh Group 4 from its neighbours',
      items: [
        { text: 'A wrong answer costs a third of a mark', note: 'under G.O.Ms.No.235 of December 2016, which applies to every objective paper the commission sets. A candidate who answers everything, as one would in Telangana, is paying for it here.' },
        { text: 'The second paper is English and Telugu, not secretarial abilities', note: '75 marks each at SSC standard. The reasoning and arithmetic sit inside Paper I with general studies.' },
        { text: 'A computer proficiency test stands between the written result and appointment', note: 'practical, timed, qualifying by category, and covering word processing, spreadsheets and presentations as well as a typing-speed component.' },
        { text: 'A screening test appears only when the field is very large', note: 'the commission adds a screening stage when applicants exceed two hundred times the vacancies, as it did for the 2021 Revenue recruitment. Smaller notifications go straight to the written examination.' },
      ],
    },
    {
      type: 'note',
      title: 'Read the local-cadre clause before anything else',
      text: 'Recent Group 4 notifications have been for district posts open only to candidates local to that district — the 2025 notification was for one post, in one erstwhile district, reserved for a woman with a visual disability. A candidate who reads the scheme and the syllabus but not the cadre clause can prepare for months for a post they were never eligible for. The vacancy table and the local-status rule are the first two things to read in any notification.',
    },
  ],
  stages: [
    {
      name: 'Screening test, when notified',
      mode: 'Objective, offline OMR — only in large cycles',
      detail:
        'Added when applicants exceed two hundred times the vacancies. In 2021 it was 150 questions across general studies and the two languages, used to shortlist for the main examination and then discarded.',
    },
    {
      name: 'Written examination',
      mode: 'Objective, two papers',
      detail:
        'Paper I general studies and mental ability at degree standard; Paper II general English and general Telugu at SSC standard. Both count, and the total across them builds the ranking list.',
    },
    {
      name: 'Shortlisting and certificate verification',
      mode: 'Documents',
      detail:
        'The ranking list goes to the District Collector as the unit of appointment. Candidates are shortlisted on written marks and produce originals for verification of qualification, age, category and local status.',
    },
    {
      name: 'Computer proficiency test',
      mode: 'Practical, qualifying',
      detail:
        'A timed test of office automation — multiple-choice questions and practical tasks in word processing, spreadsheets and presentations, including a typing-speed component. Qualifying marks apply by category; no candidate is appointed without passing it.',
    },
    {
      name: 'Selection and appointment',
      mode: 'District Selection Committee',
      detail:
        'Selection on written merit among candidates who have qualified the proficiency test, within the reservation and local-cadre rules of the notification.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The most recent Group 4 notification is No. 22/2025 of 24 September 2025 — a single carried-forward Junior Office Assistant post in the Prisons Department, for which the written examination was held in January 2026 and the ranking list published in May 2026. No Group 4 notification was open at the date checked, and the state’s 2026 job calendar lists no Group 4, Junior Assistant or Typist posts in any of its four phases.`,
    },
    {
      type: 'table',
      caption: 'Group 4 since the bifurcation. The recruitment has become post-specific, and each cycle has carried its own cadre and local rules.',
      head: ['Notification', 'Posts', 'Vacancies', 'What happened'],
      rows: [
        ['22/2025, 24 September 2025', 'Junior Office Assistant, Prisons and Correctional Services', '1, Guntur district local, reserved for a woman with blindness or low vision', 'Written examination 27 and 30 January 2026; final key and ranking list 7 May 2026; forwarded to the District Selection Committee'],
        ['06/2022, 26 September 2022', 'Junior Assistant, Junior Assistant cum Typist, Typist and Stenographer posts across six departments', '6', 'Computer-based test 3 and 4 October 2023; selection notification 5 February 2024'],
        ['23/2021, 28 December 2021', 'Junior Assistant cum Computer Assistant, Revenue Department', '670', 'Screening test, then main examination; results notified 12 October 2022'],
      ],
    },
    {
      type: 'note',
      title: 'No large Group 4 recruitment is scheduled',
      text: 'The 2026 job calendar issued by government order on 22 August 2026 sets out 10,060 posts in four phases — Group 1 and police posts in September, Group 2, engineering and excise posts in October, and teacher posts after that. Group 4 is not among them. Vacancy counts circulating for a "Group 4 2026 notification" are not from the commission or the calendar.',
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC results', href: APPSC.results },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption:
        'Eligibility as it has stood across the 2021, 2022 and 2025 cycles. Age was reckoned as on 1 July of the notification year in each; the 42-year ceiling has held throughout.',
      head: ['Requirement', 'What the notifications set'],
      rows: [
        ['Qualification', 'A bachelor’s degree of a university in India established under a Central, State or Provincial Act, or an institution recognised by the UGC. Every Group 4 post code in every recent cycle has required a degree — Paper II is at SSC standard, but eligibility is not.'],
        ['Typist posts', 'A pass in the Government Technical Examination in Typewriting, Higher Grade in Telugu on a government standard keyboard, with Lower Grade accepted if Higher Grade candidates are unavailable and English Lower Grade giving preference. A certificate to hold at application, not a test the commission conducts.'],
        ['Stenographer posts', 'Government Technical Examination certificates in both Typewriting and Shorthand, Higher Grade in the relevant language, with the same Lower Grade fallback.'],
        ['Age', '18 to 42 years — reckoned as on 1 July 2025 in the latest cycle.'],
        ['Age relaxation', 'SC, ST, BC and EWS candidates 5 years; persons with benchmark disability 10 years; ex-servicemen and NCC instructors 3 years plus service; state government employees up to 5 years by regular service; widowed, divorced or judicially separated women not remarried, up to 48 for SC and ST and 43 for others in Junior Assistant posts.'],
        ['Application processing fee', '₹250, payable by every applicant.'],
        ['Examination fee', '₹80, from which SC, ST, BC, disabled and ex-servicemen candidates, white-card household families of Andhra Pradesh and unemployed youth on declaration are exempt. Candidates of other states get no exemption other than for disability or ex-service status.'],
      ],
    },
    {
      type: 'p',
      text: 'Two smaller charges recur in every notification and are worth knowing before they arise: a correction to a submitted application costs ₹100, and an objection to the preliminary answer key costs ₹100 per question. A memorandum of marks after the result is ₹200.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group 4 written examination as set in the 2025 notification, under the scheme fixed by government order in December 2017. Both papers are objective and both count.',
      head: ['Paper', 'Subject', 'Standard', 'Questions', 'Marks', 'Duration'],
      rows: [
        ['Paper I', 'General Studies and Mental Ability', 'Degree', '150', '150', '150 minutes'],
        ['Paper II', 'General English (75 marks) and General Telugu (75 marks)', 'SSC', '150', '150', '150 minutes'],
      ],
    },
    {
      type: 'note',
      title: 'One-third negative marking, quoted',
      text: 'Every recent Group 4 notification carries the same clause: as per G.O.Ms.No.235 of the Finance Department dated 6 December 2016, each wrong answer will be penalised with one-third of the marks prescribed for the question. On a one-mark question that is 0.33 lost per wrong answer, which turns a blind guess across the paper from free into expensive. It applies to the screening test where one is held as well as to the main examination.',
    },
    {
      type: 'list',
      title: 'The rules that decide the paper',
      items: [
        { text: 'Minimum qualifying marks in aggregate', note: '40% for OC, EWS and ex-servicemen; 35% for BC candidates; 30% for SC, ST and disabled candidates, or as per rules. SC and ST candidates who do not reach the minimum may be considered on rank.' },
        { text: 'A screening test only when the field demands it', note: 'the commission adds one when applicants exceed two hundred times the vacancies. In 2021 it was 150 questions — 100 in general studies and 50 across the two languages — for 150 marks in 150 minutes, and its marks were discarded once the shortlist was made.' },
        { text: 'The paper is set in English and Telugu', note: 'the medium is chosen at application.' },
        { text: 'Ties go to the older candidate', note: 'and then to the one who obtained the qualifying degree earlier.' },
      ],
    },
    {
      type: 'table',
      caption: 'The computer proficiency test in the 2025 notification. It is practical, timed and qualifying — no candidate is appointed without passing it, and its marks do not add to the ranking.',
      head: ['Component', 'Weight', 'What is tested'],
      rows: [
        ['Part A', '20%', 'Multiple-choice questions on office automation and computer fundamentals'],
        ['Part B — word processing', '25%', 'Producing a model document, with typing speed evaluated and liable to be made mandatory for qualifying'],
        ['Part B — objects and formatting', '15%', 'Organising and inserting objects into a document'],
        ['Part B — spreadsheets', '20%', 'A worked exercise in spreadsheet software'],
        ['Part B — presentations', '20%', 'A worked exercise in presentation software'],
      ],
    },
    {
      type: 'p',
      text: 'The 2025 test ran for 60 minutes and 100 marks, with qualifying marks of 40 for OC, 35 for BC and 30 for SC, ST and disabled candidates. The 2021 and 2022 cycles used a shorter version — 30 minutes and 50 marks, qualifying at 20, 17.5 and 15. There is no separate typing test: the typing-speed component sits inside this test, and the typewriting certificates required for typist and stenographer posts are qualifications to hold before applying.',
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for two equal papers and a practical',
      items: [
        { text: 'Give the language paper half your time', note: 'it is half the marks and improves fast. Grammar, usage, comprehension and vocabulary at SSC standard in both English and Telugu is a finite syllabus that rewards daily practice over months.' },
        { text: 'Learn to leave a question blank', note: 'with a third of a mark lost per wrong answer, a candidate who guesses at four options needs to be right more than a quarter of the time to break even. Practise marking only what you can narrow to two options, and score every mock with the penalty applied.' },
        { text: 'Build general studies around Andhra Pradesh', note: 'the state’s history, geography, economy, administration and the bifurcation recur through Paper I, and no national material covers them.' },
        { text: 'Start the office-software practice early', note: 'the proficiency test is practical and timed, and typing speed is part of it. Twenty minutes a day on a word processor, a spreadsheet and a presentation tool from the first month is enough; a fortnight at the end is not.' },
        { text: 'Hold the typewriting certificate before the notification', note: 'if you want a typist or stenographer post. It is a Government Technical Examination with its own schedule, and it cannot be acquired inside a three-week application window.' },
        { text: 'Time every paper at a minute a question', note: '150 questions in 150 minutes, twice. Accuracy at that pace with a penalty for error is the skill being examined.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Eligibility, fees, the scheme of examination, the negative-marking clause and the proficiency test are taken from Notification No. 22/2025 and the two preceding Group 4 notifications, whose provisions on those points are identical. The commission publishes no Group 4 question papers: its official archive holds Group 1 mains papers, a 2016 Group 2 screening paper and assorted technical papers, but none for this examination. Final answer keys for recent cycles are published separately.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC scheme and syllabus documents', href: APPSC.syllabus },
        { label: 'APPSC results', href: APPSC.results },
        { label: 'APPSC final answer keys', href: APPSC.keys },
        { label: 'APPSC old question papers archive', href: APPSC.oldPapers },
        { label: 'Notification No. 22/2025 — Junior Office Assistant, Prisons', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/JrOfficeAsst_Notification_222025_24092025.pdf' },
        { label: 'Notification No. 06/2022 — Group 4 limited recruitment', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Group%204%20limited%202022.pdf' },
        { label: 'Notification No. 23/2021 — Junior Assistant cum Computer Assistant, Revenue', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/23_2021.pdf' },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'APPSC Group 4 syllabus — the general studies and mental ability paper, the English and Telugu paper, and the computer proficiency test, section by section.',
      lead: [
        'Two syllabuses at two standards. Paper I is degree-level general studies; Paper II is school-level language. Treating them as one preparation is the commonest mistake.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper I — General Studies and Mental Ability',
              'Events of national and international importance; current affairs; general science and its applications; Indian history and the national movement; Indian geography and the geography of Andhra Pradesh; the Constitution, polity and governance; the Indian economy and the economy of Andhra Pradesh; the bifurcation of the state and its implications; and logical reasoning, analytical ability and data interpretation. Set at degree standard.',
            ],
            [
              'Paper II — General English',
              'Comprehension of a passage; vocabulary, synonyms and antonyms; grammar and usage — tenses, articles, prepositions, agreement, voice, reported speech; sentence correction and improvement; spotting errors; sentence and paragraph arrangement. Seventy-five marks at SSC standard.',
            ],
            [
              'Paper II — General Telugu',
              'The same skills in Telugu: comprehension, vocabulary, grammar, sandhi and samasa, sentence construction and correction, idiom and usage. Seventy-five marks at SSC standard.',
            ],
            [
              'Computer proficiency test',
              'Fundamentals of computers and office automation as multiple-choice questions; then practical tasks — producing a formatted document with typing speed measured, inserting and arranging objects, a spreadsheet exercise with formulas and formatting, and a short presentation. Practical, timed and qualifying.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'The line in Paper I that most distinguishes this paper from a national general-studies syllabus is the bifurcation of Andhra Pradesh and its implications. It is a named topic, it has appeared in every APPSC general studies syllabus since 2016, and it is examined as a subject with facts — the reorganisation act, the division of assets and institutions, the capital question, the residuary state’s districts — rather than as a theme.',
        },
        {
          type: 'links',
          title: 'Where to build each layer',
          items: [
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs preparation', to: '/current-affairs/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'APPSC Group 4 exam pattern — the two-paper written test, the conditional screening stage, one-third negative marking and the computer proficiency test.',
      lead: [
        'Two papers that count, a penalty for every wrong answer, and a practical test at the end that decides whether a written rank becomes an appointment.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes.',
          head: ['Stage', 'Format', 'Counts towards merit?', 'What it decides'],
          rows: [
            ['Screening test, if held', 'Objective, 150 questions', 'No', 'Who is admitted to the written examination, in large cycles only'],
            ['Written examination', 'Two objective papers, 300 marks', 'Yes', 'The ranking list in full'],
            ['Computer proficiency test', 'Practical, 100 marks', 'No — qualifying', 'Whether a ranked candidate can be appointed'],
          ],
        },
        {
          type: 'p',
          text: 'The consequence is a planning rule with two halves. The written examination is the whole of the rank, so both papers deserve equal weight. The proficiency test adds nothing to the rank but removes candidates from it, so it deserves enough practice to pass comfortably and no more.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The penalty is a third of the question’s marks', note: 'not a quarter, as in several other state commissions. On a paper of one-mark questions, three wrong answers cancel one right one.' },
            { text: 'Qualifying marks are on the aggregate', note: 'not per paper, so a weak language paper can be carried by a strong general studies paper — unlike the police recruitment, where each paper stands alone.' },
            { text: 'The typing-speed component may be made mandatory', note: 'the proficiency test syllabus says so in terms. Treat it as mandatory when preparing.' },
            { text: 'The District Collector is the unit of appointment', note: 'the ranking list is forwarded district-wise and selection is by a district committee, so local status governs which list you are on.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'APPSC Group 4 previous papers — what the commission’s archive actually holds, and how to practise when it holds no Group 4 paper.',
      lead: [
        'The official archive holds no Group 4 paper of any year. The nearest material is the commission’s own general studies papers from other groups, set to the same syllabus headings and the same marking rule.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The commission publishes question papers for some recruitments — several Group 1 mains cycles, a 2016 Group 2 screening test, a 2016 Panchayat Secretary screening test and various technical posts — but not for Group 4 in any cycle. What it does publish for Group 4 is the final answer key after each examination, which pairs with a reconstructed paper but is not one.',
        },
        {
          type: 'list',
          title: 'How to practise without the paper',
          items: [
            { text: 'Work the 2016 Group 2 screening and Panchayat Secretary screening papers for Paper I', note: 'both are general studies and mental ability at degree standard, set by this commission under the same negative-marking rule. The question habits carry across.' },
            { text: 'Work the Group 1 prelims papers at a discount', note: 'the same subject headings at a harder standard. Note which questions felt beyond Group 4 rather than discarding them.' },
            { text: 'Use any SSC-standard English and Telugu question bank for Paper II', note: 'the paper is school-standard grammar and comprehension, and the source matters less than the volume.' },
            { text: 'Keep one file of Andhra Pradesh questions across every paper you work', note: 'state geography, history, economy, schemes and the bifurcation are asked in every APPSC paper. Collected into one file, they become the most exam-specific revision document available.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'APPSC old question papers archive', href: APPSC.oldPapers },
            { label: 'APPSC final answer keys', href: APPSC.keys },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'APPSC Group 4 mock tests — practising to a one-third penalty, two equal papers and a practical test that is pass or fail.',
      lead: [
        'A mock test for this commission has to be scored the way the commission scores it — with the penalty applied — or it measures the wrong thing.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The single most useful habit a Group 4 mock can build is the decision to leave a question blank. Score every practice paper with a third of a mark deducted per wrong answer, and then compare the marks you would have had with no guesses against the marks you actually got. Most candidates discover that their guessing is costing them, and that the fix is a rule — mark only what you can narrow to two options — rather than more knowledge.',
        },
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A full two-paper paper every week', text: '300 questions in 300 minutes, scored with the penalty. Both papers, because both count.' },
            { title: 'A language-only sectional midweek', text: 'Thirty English and thirty Telugu questions in an hour. This is the fastest-improving half of the examination and the one candidates under-practise.' },
            { title: 'A timed state-content test fortnightly', text: 'Twenty questions on Andhra Pradesh geography, history, economy and the bifurcation. Finite material, and the block that most separates candidates.' },
            { title: 'A practical session weekly', text: 'A formatted document against the clock, a spreadsheet with formulas, a five-slide presentation. The proficiency test is a mock too.' },
          ],
        },
        {
          type: 'note',
          title: 'Score the screening format separately if a large cycle is notified',
          text: 'When applicants exceed two hundred times the vacancies the commission adds a screening test of 150 questions — 100 general studies, 50 language — whose marks are then discarded. It has a different balance from the main examination, and a candidate who has only rehearsed the two-paper format will find the screening paper’s language section thinner and its general studies section heavier than expected.',
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
        'APPSC Group 4 preparation — a plan for a recruitment that is notified post by post, with a penalty for error and a practical test before appointment.',
      lead: [
        'The paper recurs; the vacancy does not. Prepare for the paper continuously and treat each notification as a question about eligibility and cadre rather than about syllabus.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A nine-month plan',
          items: [
            { title: 'Months one to three — the two syllabuses', text: 'General studies at degree standard with the Andhra Pradesh layer built in from the start; English and Telugu grammar and comprehension at SSC standard, daily. Begin the office-software practice in month one.' },
            { title: 'Months four to six — the penalty and the pace', text: 'Weekly full papers scored with one-third negative marking. Learn from the scores when to leave a question. Fortnightly state-content sectionals.' },
            { title: 'Months seven to nine — hold ready', text: 'Maintenance rather than new material, with the proficiency practical kept weekly. When a notification appears, read the cadre and local-status clause first, then the vacancy table, then the syllabus — in that order.' },
          ],
        },
        {
          type: 'list',
          title: 'What recent cycles taught',
          items: [
            { text: 'The notification may be for one post', note: 'the 2025 notification was for a single carried-forward vacancy with a specific district and a specific reservation. Reading the vacancy table is not optional.' },
            { text: 'Local status decides the list you are on', note: 'district posts are open to candidates local to that district, and the ranking list goes to the District Collector. A non-local candidate may be preparing for a list they cannot join.' },
            { text: 'The typewriting certificate is a prerequisite', note: 'typist and stenographer posts require Government Technical Examination certificates held at application. They cannot be earned inside a notification window.' },
            { text: 'The proficiency test is where written ranks are lost', note: 'it adds nothing to the rank and removes candidates from it. Comfortable competence in three office applications, with typing speed, is the standard.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'APPSC Group 4 study material — what to read for each paper, at which standard, and how to prepare the practical.',
      lead: [
        'Degree-standard reading for Paper I, school-standard drilling for Paper II, and a keyboard for the rest.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by paper. The Andhra Pradesh layer is the only part with no national source.',
          head: ['Paper', 'Standard', 'What to work from'],
          rows: [
            ['General studies', 'Degree', 'The standard degree-level general studies texts for history, polity, geography, economy and science, plus a current affairs digest kept weekly.'],
            ['Andhra Pradesh layer', 'Degree', 'The state’s history, geography, economy and administration, and the Reorganisation Act and its implications. Build from the state government’s publications and the commission’s syllabus headings.'],
            ['Mental ability', 'Not stated', 'A verbal and non-verbal reasoning question bank, plus a data interpretation drill. Volume matters more than source.'],
            ['General English', 'SSC', 'A school-level grammar and composition reference, and a daily comprehension passage. The class IX and X English textbooks are the right pitch.'],
            ['General Telugu', 'SSC', 'The class IX and X Telugu textbooks for grammar — sandhi, samasa, vibhakti — and a Telugu newspaper for comprehension and current vocabulary.'],
            ['Computer proficiency', 'Practical', 'A word processor, a spreadsheet and a presentation tool, used daily. A typing tutor for speed. No book substitutes for the keyboard.'],
          ],
        },
        {
          type: 'note',
          title: 'Assemble the bifurcation as a fact sheet',
          text: 'The reorganisation of the state is a named syllabus topic, and it is examined as facts: the Act and its date, the division of institutions and assets, the special provisions, the capital question and its sequence, the residuary state’s districts before and after the 2022 reorganisation. One fact sheet, built once and revised monthly, covers a topic that recurs in every APPSC general studies paper.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any APPSC Group 4 notification open right now?',
      a: 'No. As at 11 September 2026 no Group 4 notification was open. The most recent, No. 22/2025 of September 2025, was for a single Junior Office Assistant post in the Prisons Department and has reached the selection stage. The state’s 2026 job calendar lists no Group 4, Junior Assistant or Typist posts in any phase.',
    },
    {
      q: 'What is the APPSC Group 4 exam pattern?',
      a: 'Two objective papers of 150 questions, 150 marks and 150 minutes each — Paper I general studies and mental ability at degree standard, and Paper II general English and general Telugu at SSC standard, 75 marks each — for a total of 300. Each wrong answer is penalised by one-third of a mark. In very large cycles a screening test precedes the written examination and its marks are discarded. A computer proficiency test follows, which is qualifying.',
    },
    {
      q: 'Is there negative marking in APPSC Group 4?',
      a: 'Yes. Under G.O.Ms.No.235 of December 2016, quoted in every recent notification, each wrong answer is penalised with one-third of the marks prescribed for the question. It applies to the screening test where one is held and to the main written examination.',
    },
    {
      q: 'Do I need a degree for APPSC Group 4?',
      a: 'Yes. Every Group 4 post code in the 2021, 2022 and 2025 notifications required a bachelor’s degree of a recognised university. Paper II is set at SSC standard, but eligibility is not. Typist and stenographer posts additionally require Government Technical Examination certificates in typewriting, and for stenographers also shorthand, held at the time of application.',
    },
    {
      q: 'Is there a typing test in APPSC Group 4?',
      a: 'Not as a separate stage. What follows the written examination is a computer proficiency test — a practical, timed test of office software that includes a typing-speed component and may make it mandatory for qualifying. It is pass or fail by category and its marks do not add to the rank. For typist and stenographer posts, typewriting and shorthand certificates are qualifications to hold before applying, not tests the commission conducts.',
    },
    {
      q: 'What is the computer proficiency test in APPSC Group 4?',
      a: 'In the 2025 notification, a 60-minute practical test for 100 marks on proficiency in office automation: multiple-choice questions for 20 per cent, and practical tasks — a formatted document with typing speed evaluated, inserting and arranging objects, a spreadsheet exercise and a presentation — for the rest. Qualifying marks are 40 for OC, 35 for BC and 30 for SC, ST and disabled candidates. Earlier cycles used a 30-minute, 50-mark version.',
    },
    {
      q: 'What are the APPSC Group 4 fees and who is exempt?',
      a: 'An application processing fee of ₹250, payable by everyone, and an examination fee of ₹80. SC, ST, BC, disabled and ex-servicemen candidates, white-card household families of Andhra Pradesh and unemployed youth on declaration are exempt from the ₹80 examination fee only. Corrections cost ₹100 each and key objections ₹100 per question.',
    },
    {
      q: 'What was the APPSC Group 4 age limit?',
      a: '18 to 42 years, reckoned as on 1 July of the notification year — 1 July 2025 in the latest cycle. Relaxation of five years applies to SC, ST, BC and EWS candidates and ten years to candidates with benchmark disability, with further provisions for ex-servicemen, state employees and widowed or separated women.',
    },
    {
      q: 'Does APPSC publish Group 4 previous question papers?',
      a: 'No. The commission’s official archive holds Group 1 mains papers, a 2016 Group 2 screening paper, a 2016 Panchayat Secretary screening paper and various technical papers, but no Group 4 paper of any year. It publishes the final answer key after each examination. The nearest official practice material for Paper I is the 2016 Group 2 and Panchayat Secretary screening papers, which are general studies at degree standard by the same commission.',
    },
    {
      q: 'Why are recent APPSC Group 4 notifications so small?',
      a: 'Because since the bifurcation the commission has notified Group 4 posts department by department as vacancies are reported, rather than as one combined recruitment. The 2021 notification was 670 Revenue posts; 2022 was six posts across six departments; 2025 was one post. The scheme, fee and marking have been the same throughout — the vacancy count is whatever the next notification says.',
    },
  ],
}

/* ── APPSC Group 3 ──────────────────────────────────────────────
   In Andhra Pradesh "Group-III Services" has meant one recruitment: Panchayat
   Secretary Grade-IV in the Panchayat Raj Subordinate Service. The two cycles
   that have run (29/2016 and 13/2018) were both titled that way, and the
   commission files the syllabus and the one archived paper under the same
   name. This record is the examination; the panchayat-secretary record is the
   post and the routes into it. They cross-link rather than repeat. */
const AP_GROUP_3 = {
  slug: 'appsc-group-3',
  path: '/government-exams/state/andhra-pradesh/appsc-group-3/',
  name: 'APPSC Group 3',
  fullName: 'Andhra Pradesh Public Service Commission Group 3 Services — Panchayat Secretary Grade-IV',
  authority: 'Andhra Pradesh Public Service Commission (APPSC)',
  official: OFFICIAL,
  seoTitle: 'APPSC Group 3 2026: Panchayat Secretary Pattern & Syllabus',
  metaDescription:
    'APPSC Group 3 is the Panchayat Secretary recruitment — screening and mains pattern, the rural development paper, negative marking, eligibility and status.',
  lead: [
    'In Andhra Pradesh, APPSC Group 3 and the Panchayat Secretary recruitment are the same thing. Both cycles the commission has run under the Group-III Services heading — in 2016 and in 2018 — were for Panchayat Secretary Grade-IV in the Panchayat Raj Subordinate Service, and the commission’s own syllabus page and question-paper archive file them under that name. A candidate searching for either is looking for one examination.',
    'That examination has a shape of its own. Half of it is general studies at degree standard, as in every APPSC paper. The other half is a paper the commission sets nowhere else: rural development and the problems of rural areas with special reference to Andhra Pradesh — panchayat raj, rural schemes, the economy of the village and the duties of the post itself. It is examined twice, in the screening test and again at greater length in the mains.',
  ],
  quickFacts: [
    ['Conducted by', 'Andhra Pradesh Public Service Commission'],
    ['What it recruits', 'Panchayat Secretary Grade-IV, a district post under the Panchayat Raj department'],
    ['Current status', 'No notification since 2018 — see the notification section'],
    ['Qualification', 'A bachelor’s degree; no post codes, no technical requirement'],
    ['Papers', 'A screening test, then two mains papers of 150 marks — general studies, and rural development in Andhra Pradesh'],
    ['Negative marking', 'One-third of a mark for each wrong answer, in both stages'],
  ],
  overview: [
    {
      type: 'p',
      text: 'A Panchayat Secretary is the executive officer of a gram panchayat — the person who keeps its records and accounts, convenes its meetings, implements the rural development and welfare schemes that reach the village, and connects the elected body to the mandal and district administration. The commission recruits to the post district by district, with the District Collector as the unit of appointment, which is why the vacancy table in every notification is a list of districts rather than a single figure.',
    },
    {
      type: 'p',
      text: 'The examination is built for that job. A screening test, held on OMR sheets because the field runs well past the threshold at which the commission screens, cuts the applicants to a manageable shortlist. The main examination is then two computer-based papers of equal weight — one the general studies and mental ability paper common to APPSC recruitments, the other a rural development paper written around Andhra Pradesh’s panchayat raj system, its schemes, its rural economy and the responsibilities a secretary carries. Selection is on the mains alone.',
    },
    {
      type: 'list',
      title: 'What distinguishes Group 3 from the other APPSC groups',
      items: [
        { text: 'One post, one syllabus', note: 'no post codes and no departmental variants. Every candidate sits the same two papers for the same post, in whichever district they are local to.' },
        { text: 'The rural development paper is half the marks', note: 'and it is not a general studies topic dressed up — it names the roles and responsibilities of the Panchayat Secretary and the revenue and expenditure management of local bodies as examined content.' },
        { text: 'The screening test is a smaller mains', note: 'the same two subjects at 75 questions each, so preparation for the screening is preparation for the mains, and the screening marks are then discarded.' },
        { text: 'District-wise selection', note: 'the ranking list is drawn up for each district against its own vacancies, so the competition is local rather than statewide.' },
      ],
    },
    {
      type: 'note',
      title: 'Two names, one recruitment — and a third that is different',
      text: 'APPSC Group 3 and the APPSC Panchayat Secretary recruitment are the same notification. The Grama Sachivalayam recruitment of 2019, which also filled panchayat secretary posts at Grade-V and Grade-VI, was a separate exercise run by the Panchayat Raj department and not by the commission, under its own rules and pattern. The panchayat-secretary page on this site covers the post and both routes into it; this page is the commission’s examination.',
    },
  ],
  stages: [
    {
      name: 'Screening test',
      mode: 'Objective, offline OMR — screening only',
      detail:
        'Held because the applicant field exceeds the threshold at which the commission screens. Two parts of 75 questions — general studies and mental ability, then rural development in Andhra Pradesh — in 150 minutes. Shortlists for the mains in a ratio the commission fixes, with relaxed standards permitted for reserved categories, and the marks are not carried forward.',
    },
    {
      name: 'Main examination',
      mode: 'Objective, computer-based',
      detail:
        'Two papers of 150 questions and 150 marks in 150 minutes each — Paper 1 general studies and mental ability, Paper 2 rural development and problems in rural areas with special reference to Andhra Pradesh. Selection is on the merit of these two papers.',
    },
    {
      name: 'Certificate verification',
      mode: 'Documents',
      detail:
        'Degree, age, category, local status and any claimed relaxation verified against originals for candidates in the district ranking list.',
    },
    {
      name: 'District appointment',
      mode: 'Merit within the district',
      detail:
        'The District Collector is the unit of appointment. Candidates are appointed against the vacancies of their own district, under the reservation rules of the notification.',
    },
  ],
  updates: [
    {
      type: 'note',
      title: 'No Group 3 or Panchayat Secretary notification since 2018',
      text: `Checked ${CHECKED}. The commission’s recruitment list from 2021 to 2025 contains no Group-III notification, and the state’s 2026 job calendar — 10,060 posts in four phases from September 2026 — includes no Panchayat Secretary or Group 3 posts. The last notification was No. 13/2018 of 21 December 2018. Content elsewhere describing a "Group 3 2026 notification" with an age rule, a fee and a date is extrapolated from that 2018 document, not taken from a new one.`,
    },
    {
      type: 'table',
      caption: 'The two Group 3 cycles the commission has run. Both were titled Panchayat Secretary Grade-IV, General Recruitment, Group-III Services.',
      head: ['Notification', 'Vacancies', 'What happened'],
      rows: [
        ['13/2018, 21 December 2018', '1,051 — 1,000 fresh and 51 carried forward, listed district by district', 'Applications 27 December 2018 to 19 January 2019; screening test April 2019 with results in July; main examination August 2019 with results published 11 February 2020'],
        ['29/2016', 'As notified', 'Screening test held; the question paper is the one Group 3 paper in the commission’s official archive'],
      ],
    },
    {
      type: 'list',
      title: 'Where the 2018 vacancies sat',
      items: [
        { text: 'Prakasam 167, Chittoor 134, Vizianagaram 119, Srikakulam 107, Visakhapatnam 105', note: 'the five largest districts by fresh vacancies.' },
        { text: 'East Godavari 92, Kurnool 88, Nellore 62, Guntur 48, Anantapur 38', note: 'the middle tier.' },
        { text: 'West Godavari 21, Krishna 19, Kadapa none', note: 'the smallest — and because appointment is district-wise, a candidate local to Kadapa had nothing to apply for in that cycle.' },
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC results', href: APPSC.results },
        { label: 'The Panchayat Secretary post and the sachivalayam route', to: '/government-exams/state/andhra-pradesh/panchayat-secretary/' },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility as fixed by Notification No. 13/2018, with age reckoned as on 1 July 2018. A future notification will set its own reckoning date; the structure is what carries forward.',
      head: ['Requirement', 'What the notification set'],
      rows: [
        ['Qualification', 'A degree from a university in India established under a Central, State or Provincial Act, or an institution recognised by the UGC. There is a single post and no post codes, and no computer, typing or technical requirement.'],
        ['Age', '18 to 42 years as on 1 July 2018 — not born earlier than 2 July 1976 or later than 1 July 2000.'],
        ['Age relaxation', 'SC, ST and BC candidates 5 years; persons with disability 10 years; ex-servicemen and NCC instructors 3 years plus service; state government employees up to 5 years by regular service; retrenched census employees 3 years; widowed, divorced or judicially separated women not remarried, up to 48 for SC and ST and 43 for others.'],
        ['Application processing fee', '₹250, payable by every applicant.'],
        ['Examination fee', '₹80, from which SC, ST, BC, disabled and ex-servicemen candidates, white-card household families of Andhra Pradesh and unemployed youth on declaration were exempt.'],
        ['Local status', 'Vacancies are district-wise and the District Collector is the unit of appointment, so a candidate competes for the posts of the district they are local to.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group 3 scheme of examination under the 2016 and 2018 notifications. Both stages are objective and both are set at degree standard.',
      head: ['Stage', 'Paper', 'Questions', 'Marks', 'Duration', 'Counts?'],
      rows: [
        ['Screening test', 'Part A — General Studies and Mental Ability; Part B — Rural Development and Problems in Rural Areas with special reference to Andhra Pradesh', '75 + 75', '150', '150 minutes', 'No — shortlists only'],
        ['Main examination', 'Paper 1 — General Studies and Mental Ability', '150', '150', '150 minutes', 'Yes'],
        ['Main examination', 'Paper 2 — Rural Development and Problems in Rural Areas with special reference to Andhra Pradesh', '150', '150', '150 minutes', 'Yes'],
      ],
    },
    {
      type: 'note',
      title: 'One-third negative marking, in both stages',
      text: 'The notification quotes G.O.Ms.No.235 of the Finance Department dated 6 December 2016: each wrong answer will be penalised with one-third of the marks prescribed for the question. It applies to the screening test as well as to the mains, so the habit of leaving a question blank has to be built before the first paper, not after it.',
    },
    {
      type: 'list',
      title: 'The rules that decide the paper',
      items: [
        { text: 'Minimum qualifying marks', note: '40% for OC candidates, 35% for BC candidates, 30% for SC, ST and disabled candidates, or as per rules. SC and ST candidates who do not reach the minimum may be considered on rank irrespective of marks.' },
        { text: 'The screening is a smaller mains', note: 'the same two subjects, so a candidate prepared for Paper 2 of the mains is prepared for Part B of the screening. There is no separate screening syllabus to learn.' },
        { text: 'The screening ratio is the commission’s', note: 'fixed under a 2018 government order, with relaxed standards permitted for SC, ST, BC and disabled candidates so that the shortlist is not under-represented.' },
        { text: 'Ties go to the older candidate', note: 'and then to the one who obtained the qualifying degree earlier.' },
        { text: 'No interview and no skill test', note: 'selection is on the mains marks alone.' },
      ],
    },
    {
      type: 'p',
      text: 'Paper 2 is the one that decides this recruitment, because it is half the marks and the half that general competitive preparation does not cover. The syllabus names the panchayat raj system and its constitutional basis, the rural development schemes of the central and state governments, the rural economy of Andhra Pradesh, community-based organisations and self-help groups, the revenue and expenditure management of local bodies, and — in terms — the roles and responsibilities of the Panchayat Secretary. It is a paper about the job.',
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan weighted to the paper that is half the marks',
      items: [
        { text: 'Give rural development half your time from the first week', note: 'it is 150 of the 300 mains marks and it is examined again in the screening. Candidates who treat it as a topic inside general studies have the weighting backwards.' },
        { text: 'Read the panchayat raj framework as law, not as civics', note: 'the 73rd Amendment, the state Panchayat Raj Act, the three tiers, the functions devolved, the finance commission provisions. The paper asks which article and which section, not only what the system is for.' },
        { text: 'Build a scheme file for the state', note: 'every central and state rural development, employment, housing, sanitation and welfare scheme, with its year, its purpose and how a panchayat implements it. This is the most-asked content in Paper 2 and it is finite.' },
        { text: 'Learn to leave a question blank', note: 'a third of a mark per wrong answer, in both stages. Score every practice paper with the penalty and adjust when to guess.' },
        { text: 'Prepare general studies around Andhra Pradesh', note: 'the state’s geography, history, economy and the bifurcation recur through Paper 1, and the rural economy of the state recurs through Paper 2.' },
        { text: 'Work the archived 2016 screening paper', note: 'it is the one official Group 3 paper that exists, and it shows exactly how the commission phrases the rural development questions.' },
      ],
    },
    {
      type: 'note',
      title: 'Prepare for a recruitment that may not be notified soon',
      text: 'Eight years have passed since the last Group 3 notification and it is not in the 2026 calendar. Preparation for this paper is not wasted — Paper 1 is the general studies paper every APPSC recruitment sets, and Paper 2 is the best preparation for any panchayat raj post the state recruits by any route — but it should be built as a routine that serves other examinations too, rather than as a sprint towards a date that does not exist.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination and the negative-marking clause are taken from Notification No. 13/2018 and the commission’s Group-III Panchayat Raj Secretary syllabus of November 2016. The commission’s official archive holds one Group 3 question paper — the screening test of Notification No. 29/2016 — and no other; the 2019 screening and mains papers were not published.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC scheme and syllabus documents', href: APPSC.syllabus },
        { label: 'APPSC results', href: APPSC.results },
        { label: 'APPSC old question papers archive', href: APPSC.oldPapers },
        { label: 'Notification No. 13/2018 — Panchayat Secretary Grade-IV, Group-III Services', href: 'https://psc.ap.gov.in/UserManuals/LatestNotifications/13_2018.pdf' },
        { label: 'Group-III Panchayat Raj Secretary syllabus, November 2016', href: 'https://psc.ap.gov.in/Documents/Syllabus1/Group-III%20Panchayat%20Raj%20Secretary%2015.11.2016.PDF' },
        { label: 'Panchayat Secretary screening test paper, Notification No. 29/2016', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Panchayat%20secretary%20Screening%20Test%20Not.No.29-2016.pdf' },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'APPSC Group 3 syllabus — the general studies paper and the rural development paper set with special reference to Andhra Pradesh, topic by topic.',
      lead: [
        'Two papers of equal weight. One is the general studies syllabus every APPSC candidate knows; the other is a syllabus about the panchayat and the job of running one.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper 1 — General Studies and Mental Ability',
              'Events of national and international importance; current affairs; general science and its applications; Indian history and the national movement; Indian geography and the geography of Andhra Pradesh; the Constitution, polity and governance; the Indian economy and the economy of Andhra Pradesh; the bifurcation of Andhra Pradesh and its implications; and logical reasoning, analytical ability and data interpretation. Set at degree standard.',
            ],
            [
              'Paper 2 — Panchayat raj and rural governance',
              'The evolution of panchayat raj in India, the 73rd Constitutional Amendment and the state Panchayat Raj Act; the three-tier structure and the functions, powers and finances of each tier; the gram sabha; the state finance commission and the devolution of funds; and the roles and responsibilities of the Panchayat Secretary, which the syllabus names as a topic in its own right.',
            ],
            [
              'Paper 2 — Rural development and its problems',
              'Rural society and its structure; poverty, unemployment and migration; land, agriculture and the rural economy of Andhra Pradesh; rural infrastructure — water, sanitation, roads, housing, power; the flagship rural development and employment schemes of the central and state governments; and community-based organisations, self-help groups and women’s empowerment.',
            ],
            [
              'Paper 2 — Administration and finance of local bodies',
              'The revenue and expenditure management of local bodies; accounting for scheme funds; audit; record-keeping and registers; and the relationship between the panchayat, the mandal and the district administration.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Read the phrase "with special reference to Andhra Pradesh" as an instruction. The paper does not examine rural development in the abstract; it examines the state’s own Panchayat Raj Act, its own schemes, its own rural economy and the problems of its own villages. National material on panchayat raj is background; the state’s documents are the syllabus.',
        },
        {
          type: 'links',
          title: 'Where to build each layer',
          items: [
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
            { label: 'The Panchayat Secretary post', to: '/government-exams/state/andhra-pradesh/panchayat-secretary/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'APPSC Group 3 exam pattern — the OMR screening test, the two computer-based mains papers, one-third negative marking and district-wise selection.',
      lead: [
        'A screening stage that shortlists and is discarded, then two papers of equal weight that decide everything. The same two subjects at both stages.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes.',
          head: ['Stage', 'Format', 'Counts towards merit?', 'What it decides'],
          rows: [
            ['Screening test', 'OMR, 150 questions in two parts', 'No', 'Who is admitted to the main examination, in a ratio the commission fixes'],
            ['Main examination — Paper 1', 'Computer-based, 150 questions', 'Yes — 150 marks', 'Half the ranking'],
            ['Main examination — Paper 2', 'Computer-based, 150 questions', 'Yes — 150 marks', 'The other half'],
          ],
        },
        {
          type: 'p',
          text: 'Because the screening test examines the same two subjects as the mains, there is no separate screening preparation — only a shorter paper with the same balance. The planning consequence is that Paper 2 preparation starts on day one, not after the screening result, because Part B of the screening is the same content at half the length.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The penalty is a third of the question’s marks', note: 'in both stages. Three wrong answers cancel one right one.' },
            { text: 'Qualifying marks are by category', note: '40, 35 and 30 per cent, with SC and ST candidates considered on rank if they fall short.' },
            { text: 'The ranking is district-wise', note: 'the District Collector is the unit of appointment, and a candidate competes against the vacancies of their own district.' },
            { text: 'No interview, no skill test, no typing requirement', note: 'the notification contains none of them.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'APPSC Group 3 previous papers — the one official paper that exists, and what to use alongside it.',
      lead: [
        'The commission’s archive holds exactly one Group 3 paper. It is worth more than it sounds.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The official question-paper archive contains the Panchayat Secretary screening test of Notification No. 29/2016 — 150 questions across general studies and rural development — and nothing else for Group 3. The 2019 screening and mains papers were not published. One paper is a thin archive, but it is the only official evidence of how the commission phrases its rural development questions, and every candidate for this recruitment should work it more than once.',
        },
        {
          type: 'list',
          title: 'How to use one paper well',
          items: [
            { text: 'Work it once cold, to time, with the penalty', note: '150 questions in 150 minutes, a third of a mark off per wrong answer. The score is your baseline.' },
            { text: 'Classify every Part B question by syllabus heading', note: 'panchayat raj law, schemes, rural economy, local-body finance, the secretary’s duties. The distribution tells you where the commission puts its marks.' },
            { text: 'Rewrite each question as a topic to revise', note: 'a question about a scheme is a prompt to know every scheme; a question about a section of the Act is a prompt to know the Act. One paper becomes a syllabus map.' },
            { text: 'Return to it after three months', note: 'a second attempt, scored against the first, is the only measure of progress that uses the commission’s own questions.' },
          ],
        },
        {
          type: 'note',
          title: 'Supplement with the other APPSC general studies papers',
          text: 'Paper 1 is the general studies and mental ability paper the commission sets for every group, and the archive holds it for several Group 1 cycles and the 2016 Group 2 screening test. Those are set at a harder standard than Group 3 but by the same commission under the same marking rule, and they are the right practice for the half of the examination that is not about rural development.',
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Panchayat Secretary screening test, Notification No. 29/2016', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Panchayat%20secretary%20Screening%20Test%20Not.No.29-2016.pdf' },
            { label: 'APPSC old question papers archive', href: APPSC.oldPapers },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'APPSC Group 3 mock tests — practising two equal papers, a screening that mirrors them, and a one-third penalty.',
      lead: [
        'Two things to rehearse: the balance between general studies and rural development, and the decision to leave a question blank.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'A Group 3 mock has to be two papers, because the examination is, and the second paper has to be about panchayat raj and rural development in Andhra Pradesh, because that is half the marks. A general studies mock alone measures half the preparation and hides the half that separates candidates.',
        },
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A full two-paper mock every week', text: '300 questions in 300 minutes, scored with a third of a mark off per wrong answer.' },
            { title: 'A rural development sectional midweek', text: 'Fifty questions in fifty minutes on panchayat raj law, schemes, the rural economy and local-body finance. This is the half that improves fastest, because the material is finite.' },
            { title: 'A screening-format paper monthly', text: '75 and 75 in 150 minutes — the same subjects at half the length, which is what the first stage actually looks like.' },
            { title: 'A penalty audit after every paper', text: 'Compare the score you got with the score you would have had on unanswered guesses. If the guesses are costing you, change the rule you guess by.' },
          ],
        },
        {
          type: 'note',
          title: 'Build the rural development mocks yourself if none exist',
          text: 'Commercial mock series rarely include a paper on rural development with special reference to Andhra Pradesh, because the recruitment is infrequent. The syllabus headings and the 2016 screening paper are enough to write question sets from: fifty questions on the Panchayat Raj Act, fifty on schemes, fifty on the rural economy of the state. A set you wrote from the state’s own documents is closer to the paper than a generic panchayat raj quiz.',
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
        'APPSC Group 3 preparation — a plan for a two-paper recruitment weighted to rural development, with no notification in sight.',
      lead: [
        'Half the examination is a subject nothing else prepares you for. That is where the plan starts.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan in four phases',
          items: [
            { title: 'Phase one — the framework', text: 'The 73rd Amendment, the Andhra Pradesh Panchayat Raj Act, the three tiers and their functions, the gram sabha, the finance commissions. Read as law, with sections and articles, because that is how it is asked.' },
            { title: 'Phase two — the schemes and the economy', text: 'Every central and state rural development scheme with its purpose and its delivery mechanism; the rural economy of Andhra Pradesh — agriculture, land, credit, migration, infrastructure. One scheme file and one economy file, revised monthly.' },
            { title: 'Phase three — general studies with the state layer', text: 'The APPSC general studies syllabus at degree standard, with the state’s geography, history, economy and the bifurcation built in rather than added on. The mental ability section drilled separately.' },
            { title: 'Phase four — papers under the clock', text: 'Weekly two-paper mocks with the penalty applied, monthly screening-format papers, and the 2016 official paper worked at the start and again at the end.' },
          ],
        },
        {
          type: 'list',
          title: 'What the last cycle taught',
          items: [
            { text: 'Appointment is district-wise', note: 'the ranking list is drawn up per district and a candidate competes for the posts of their own district. Kadapa had no vacancies in 2018; a Kadapa-local candidate had nothing to apply for.' },
            { text: 'The screening is not a different examination', note: 'candidates who prepared the mains found the screening a shorter version of it. Those who prepared "for the screening" prepared for it twice.' },
            { text: 'The results took time', note: 'notification in December 2018, screening in April 2019, mains in August 2019, results in February 2020. Fourteen months from notification to result.' },
            { text: 'Paper 2 decided the merit list', note: 'general studies scores clustered; rural development scores spread. The candidates who separated themselves did so on the paper about the job.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'APPSC Group 3 study material — what to read for the general studies paper and, especially, for rural development with special reference to Andhra Pradesh.',
      lead: [
        'Paper 1 has a standard reading list. Paper 2 has to be assembled from the state’s own documents, and that assembly is most of the preparation.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by paper. Paper 2 has no textbook; it has primary sources.',
          head: ['Paper', 'Topic', 'What to work from'],
          rows: [
            ['Paper 1', 'General studies', 'The standard degree-level texts for history, polity, geography, economy and science, and a current affairs digest kept weekly.'],
            ['Paper 1', 'Andhra Pradesh layer', 'The state’s history, geography, economy and administration, and the Reorganisation Act and its implications, from the state government’s own publications.'],
            ['Paper 1', 'Mental ability', 'A reasoning and data interpretation question bank. Volume over source.'],
            ['Paper 2', 'Panchayat raj law', 'The text of the 73rd Amendment and of the Andhra Pradesh Panchayat Raj Act, read with a summary of the functions devolved to each tier and the finance commission provisions.'],
            ['Paper 2', 'Rural development schemes', 'The scheme guidelines published by the central rural development ministry and the state Panchayat Raj and Rural Development department. Build a one-page entry per scheme.'],
            ['Paper 2', 'Rural economy of Andhra Pradesh', 'The state’s socio-economic survey and agriculture statistics, for the facts the paper asks — crops, irrigation, credit, employment, migration.'],
            ['Paper 2', 'Local-body administration and finance', 'The Panchayat Raj department’s manuals on accounts, audit and registers, and the roles and responsibilities of the Panchayat Secretary as the department describes them.'],
          ],
        },
        {
          type: 'note',
          title: 'Write the secretary’s job description yourself',
          text: 'The syllabus names the roles and responsibilities of the Panchayat Secretary as examined content. The best preparation is to compile them from the Act and the department’s own material into a single document — records, accounts, meetings, certificates, scheme implementation, reporting lines — and to revise it as a topic. It is the one part of the syllabus that is literally about the post, and the questions on it are the most predictable in the paper.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'The Panchayat Secretary post', to: '/government-exams/state/andhra-pradesh/panchayat-secretary/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is APPSC Group 3 the same as the Panchayat Secretary exam?',
      a: 'Yes. In Andhra Pradesh both notifications the commission has issued under Group-III Services — in 2016 and in 2018 — were for Panchayat Secretary Grade-IV in the Panchayat Raj Subordinate Service, and the commission files the syllabus and the archived paper under that name. The Grama Sachivalayam recruitment of 2019 was a separate exercise by the Panchayat Raj department, not the commission.',
    },
    {
      q: 'Is there an APPSC Group 3 notification in 2026?',
      a: 'No. As at 11 September 2026 the commission had issued no Group 3 or Panchayat Secretary notification since No. 13/2018, and the state’s 2026 job calendar includes no such posts in any of its four phases. Eligibility rules and dates circulating for a 2026 cycle are extrapolated from the 2018 notification.',
    },
    {
      q: 'What is the APPSC Group 3 exam pattern?',
      a: 'A screening test on OMR sheets of 150 questions in 150 minutes — 75 on general studies and mental ability, 75 on rural development in Andhra Pradesh — which shortlists and is then discarded. Then a computer-based main examination of two papers of 150 questions, 150 marks and 150 minutes each: Paper 1 general studies and mental ability, Paper 2 rural development and problems in rural areas with special reference to Andhra Pradesh. Selection is on the 300 mains marks.',
    },
    {
      q: 'Is there negative marking in APPSC Group 3?',
      a: 'Yes. Under G.O.Ms.No.235 of December 2016, quoted in the notification, each wrong answer is penalised with one-third of the marks prescribed for the question, in both the screening test and the main examination.',
    },
    {
      q: 'What is the qualification for APPSC Group 3?',
      a: 'A degree from a recognised university. There is one post, no post codes and no computer, typing or technical requirement. In 2018 the age limit was 18 to 42 as on 1 July 2018, with the usual category relaxations.',
    },
    {
      q: 'What does the Group 3 rural development paper cover?',
      a: 'The panchayat raj system and its constitutional basis, the Andhra Pradesh Panchayat Raj Act, the functions and finances of each tier, rural development and employment schemes of the centre and the state, the rural economy and rural problems of Andhra Pradesh, community-based organisations and self-help groups, the revenue and expenditure management of local bodies, and the roles and responsibilities of the Panchayat Secretary. It is examined at 75 questions in the screening and 150 in the mains.',
    },
    {
      q: 'Does APPSC publish Group 3 previous papers?',
      a: 'One. The official archive holds the Panchayat Secretary screening test of Notification No. 29/2016 and no other Group 3 paper; the 2019 screening and mains papers were not published. For the general studies half, the archived Group 1 mains and 2016 Group 2 screening papers are set by the same commission under the same marking rule.',
    },
    {
      q: 'How is APPSC Group 3 selection made?',
      a: 'On the merit of the two mains papers, district by district. The District Collector is the unit of appointment, vacancies are notified per district, and a candidate is ranked against the vacancies of the district they are local to. There is no interview and no skill test. Ties go to the older candidate, then to the earlier degree.',
    },
  ],
}

/* ── Andhra Pradesh Panchayat Secretary ─────────────────────────
   The post, not the examination — the examination is the appsc-group-3
   record. What this page adds is the thing neither the commission's
   notification nor a coaching guide explains: the 2019 rule change that
   created Grade-V, filled it by a one-time sachivalayam recruitment outside
   the commission, and made Grade-IV promotion-only thereafter. That is why
   there has been no APPSC notification since 2018 and why none is scheduled. */
const AP_PANCHAYAT_SECRETARY = {
  slug: 'panchayat-secretary',
  path: '/government-exams/state/andhra-pradesh/panchayat-secretary/',
  name: 'Andhra Pradesh Panchayat Secretary',
  fullName: 'Andhra Pradesh Panchayat Secretary — the post, its grades and the routes into it',
  authority:
    'Andhra Pradesh Public Service Commission for Grade-IV; the Panchayat Raj and Rural Development Department, through the District Collectors, for Grade-V',
  official: OFFICIAL,
  seoTitle: 'AP Panchayat Secretary: Status, Grades & Routes In',
  metaDescription:
    'AP Panchayat Secretary — whether recruitment is open, how the 2019 rule split the post into Grade-IV and Grade-V, what each route requires, and the last exam.',
  lead: [
    'The Panchayat Secretary is the executive officer of a gram panchayat in Andhra Pradesh — its record-keeper, its accountant, the convenor of its meetings and the person through whom rural schemes reach the village. Since 2019 the post has existed in two grades with two different doors: Grade-IV, recruited by the Public Service Commission under the Group-III Services heading, and Grade-V, created for the village secretariats and filled by the Panchayat Raj department directly.',
    'Read the status section before anything else. Neither door is open. The commission has not notified Grade-IV since 2018 and, under the rules as amended in 2019, Grade-IV vacancies are now filled by promotion from Grade-V rather than by direct recruitment. The sachivalayam portal carries no recruitment. Pages elsewhere describing a 2026 notification for this post are describing a document that does not exist.',
  ],
  quickFacts: [
    ['Current status', 'No open recruitment by either route as at 11 September 2026'],
    ['Grade-IV', 'Recruited by APPSC as Group 3 — last notified December 2018; now promotion-only under the amended rules'],
    ['Grade-V', 'Created in 2019 for the village secretariats and filled by the Panchayat Raj department through the District Collectors'],
    ['Qualification', 'A bachelor’s degree for both grades'],
    ['Grade-V probation', 'Two years on consolidated pay, with the Accounts Test for Local Body Employees and a computer proficiency test to pass'],
    ['The examination', 'Covered on the APPSC Group 3 page — screening, two mains papers, one-third negative marking'],
  ],
  overview: [
    {
      type: 'p',
      text: 'Until 2019 there was one route into the post. The commission notified Panchayat Secretary Grade-IV under its Group-III Services heading — in 2016 and again in December 2018 — with a screening test, a two-paper main examination and district-wise appointment by the Collector. The 2018 cycle notified 1,051 posts and published its district ranking lists in February 2020.',
    },
    {
      type: 'p',
      text: 'In September 2019 the state amended the Panchayat Raj Subordinate Service Rules to add two new grades below Grade-IV: Panchayat Secretary Grade-V, and Grade-VI as Digital Assistant. Grade-V was created for the new village secretariats and, because every post was new, all of them were filled by direct recruitment as a one-time measure — run by the Panchayat Raj department through the District Collectors, not by the commission. The same amendment provides that Grade-IV is thereafter filled by promotion from Grade-V. The order was issued with the commission’s concurrence.',
    },
    {
      type: 'list',
      title: 'What the two grades look like',
      items: [
        { text: 'Grade-IV — the commission’s post', note: 'the post the Group 3 examination recruited to, in the regular pay scale, with the District Collector as unit of appointment. Under the 2019 amendment its future vacancies are filled by promotion from Grade-V.' },
        { text: 'Grade-V — the secretariat post', note: 'any degree; two years’ probation on a consolidated ₹15,000 a month, then the scale of ₹15,030 to ₹46,060; the Accounts Test for Local Body Employees Papers I and II and a computer proficiency test to be passed during probation; District Collector as appointing authority.' },
        { text: 'Grade-VI — Digital Assistant', note: 'created by the same amendment for the secretariats’ digital functions, and recruited alongside Grade-V.' },
        { text: 'The examination for either', note: 'the commission’s Group 3 paper is the only published specification of what a Panchayat Secretary examination in this state asks — general studies, and rural development with special reference to Andhra Pradesh. It is the best available preparation for any future recruitment by either route.' },
      ],
    },
    {
      type: 'note',
      title: 'The commission has warned about fake recruitment schedules',
      text: 'In a web note of 12 June 2026 the commission stated that unauthorised recruitment schedules were being circulated on social media, that no such schedule had been issued by it, and that candidates should rely only on information published through its official website. A Panchayat Secretary notification that exists only on a coaching site or in a forwarded message is one of those.',
    },
  ],
  stages: [
    {
      name: 'Grade-IV — the commission route',
      mode: 'Screening test, then two mains papers',
      detail:
        'As run in 2018: an OMR screening test of 150 marks across general studies and rural development, then a computer-based main examination of two 150-mark papers on the same subjects, with one-third negative marking throughout and district-wise ranking. Detailed on the APPSC Group 3 page.',
    },
    {
      name: 'Grade-V — the secretariat route',
      mode: 'Direct recruitment by the department, one-time',
      detail:
        'Run in 2019 by the Panchayat Raj department through the District Collectors as a one-time measure to fill the newly created posts, with district certificate-verification lists published in September 2019. No further Grade-V recruitment has been notified.',
    },
    {
      name: 'Probation, for Grade-V',
      mode: 'Two years, consolidated pay',
      detail:
        'The Accounts Test for Local Body Employees Papers I and II and the commission’s computer proficiency test must be passed during probation. Grade-V secretaries sit the proficiency test as a departmental test in the commission’s separate CPT sessions.',
    },
    {
      name: 'Promotion to Grade-IV',
      mode: 'From Grade-V, under the amended rules',
      detail:
        'Since the 2019 amendment, Grade-IV vacancies are filled by promotion from Grade-V rather than by fresh direct recruitment.',
    },
  ],
  updates: [
    {
      type: 'note',
      title: 'No Panchayat Secretary recruitment is open by either route',
      text: `Checked ${CHECKED}. The commission’s recruitment list from 2021 to 2025 contains no Panchayat Secretary or Group 3 notification, and its home page announcements back to April 2026 contain none. The sachivalayam portal redirects to a scheme site with no recruitment content, and the older recruitment portals no longer resolve. The state’s 2026 job calendar — 10,060 posts in four phases from September 2026 — lists Panchayat Raj posts only as Divisional Development Officer, Deputy MPDO and Assistant Executive Engineer, and no Panchayat Secretary or secretariat post.`,
    },
    {
      type: 'table',
      caption: 'What has actually happened to this post, most recent first.',
      head: ['When', 'What happened'],
      rows: [
        ['July 2026', 'The commission’s computer proficiency test results for the October 2025 session, sat by Panchayat Secretary Grade-V and other secretariat functionaries as a departmental test during probation, were published.'],
        ['June 2026', 'The commission issued a web note warning that unauthorised recruitment schedules were circulating on social media and had not been issued by it.'],
        ['February 2020', 'District ranking lists for the 2018 Grade-IV recruitment, with Paper 1, Paper 2 and total marks, were published — the last output of the commission route.'],
        ['September 2019', 'G.O.Ms.No.148 of the Panchayat Raj department created Grade-V and Grade-VI, filled Grade-V by one-time direct recruitment through the District Collectors, and made Grade-IV promotion-only thereafter. District certificate-verification lists for Grade-V were published the same month.'],
        ['July 2019', 'Screening test results for the 2018 Grade-IV recruitment were published; the main examination followed in August.'],
        ['21 December 2018', 'Notification No. 13/2018 for 1,051 Panchayat Secretary Grade-IV posts under Group-III Services — the last commission notification for this post.'],
      ],
    },
    {
      type: 'note',
      title: 'Why the commission route is unlikely to reopen for Grade-IV',
      text: 'The 2019 amendment states that Grade-IV is thereafter filled by promotion from Grade-V. That is a rule, not a policy announcement, and rules can be amended again — but as they stand, a fresh APPSC direct recruitment to Grade-IV is not what the service rules provide for. A future entry-level recruitment to this post is more likely to be a Grade-V exercise by the department. No official statement on either possibility was found; this is what the rules say, read plainly.',
    },
    {
      type: 'links',
      title: 'Check the three sources that would carry a notification',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC home — web notes and announcements', href: 'https://portal-psc.ap.gov.in/Default.aspx' },
        { label: 'The APPSC Group 3 examination', to: '/government-exams/state/andhra-pradesh/appsc-group-3/' },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility by grade, from the 2018 commission notification for Grade-IV and the 2019 service rule amendment for Grade-V. Neither route is open; the figures are the last set and are shown for reference.',
      head: ['Requirement', 'Grade-IV, commission route (2018)', 'Grade-V, secretariat route (2019 rules)'],
      rows: [
        ['Qualification', 'A degree from a recognised university.', 'Any degree from a recognised university.'],
        ['Age', '18 to 42 as on 1 July 2018, with 5 years’ relaxation for SC, ST and BC candidates and 10 for persons with disability.', 'As set by the department for the recruitment; the service rules do not fix a general limit.'],
        ['Fee', '₹250 processing plus ₹80 examination, with the examination fee exempt for SC, ST, BC, disabled and ex-servicemen candidates, white-card families and unemployed youth.', 'As set by the recruitment.'],
        ['Pay', 'The regular scale of the post, ₹16,400 to ₹49,870 in 2018.', 'Consolidated ₹15,000 a month for a two-year probation, then the scale of ₹15,030 to ₹46,060.'],
        ['Tests during probation', '—', 'The Accounts Test for Local Body Employees Papers I and II, and the computer proficiency test.'],
        ['Appointing authority', 'The District Collector, against district-wise vacancies.', 'The District Collector.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'p',
      text: 'The only published examination for this post is the commission’s Group 3 scheme, last used in 2018. It is set out in full on the APPSC Group 3 page; the summary below is here so that a reader arriving at this page understands what a Panchayat Secretary examination in Andhra Pradesh has actually looked like.',
    },
    {
      type: 'table',
      caption: 'The 2018 Grade-IV examination. Both stages objective, both at degree standard, one-third of a mark deducted for each wrong answer.',
      head: ['Stage', 'Papers', 'Marks', 'Counts?'],
      rows: [
        ['Screening test', 'General studies and mental ability, 75 questions; rural development in Andhra Pradesh, 75 questions', '150', 'No — shortlists only'],
        ['Main examination', 'Paper 1 general studies and mental ability, 150 questions; Paper 2 rural development and problems in rural areas with special reference to Andhra Pradesh, 150 questions', '300', 'Yes — the district ranking'],
      ],
    },
    {
      type: 'list',
      title: 'What the Grade-V route required instead',
      items: [
        { text: 'A departmental recruitment, not a commission one', note: 'run through the District Collectors in 2019, with district certificate-verification lists published within the month. The written pattern was the department’s, and the old recruitment portals that carried it no longer resolve.' },
        { text: 'Tests after appointment rather than before', note: 'the Accounts Test for Local Body Employees Papers I and II, and the computer proficiency test, both to be passed during the two-year probation.' },
        { text: 'The proficiency test is the commission’s', note: 'Grade-V secretaries sit it in the commission’s separate CPT sessions, alongside village revenue officers and other secretariat functionaries, as a departmental test.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The Grade-IV examination, eligibility and fees are from Notification No. 13/2018; the creation of Grade-V and Grade-VI, their pay and probation conditions and the promotion rule for Grade-IV are from G.O.Ms.No.148 of the Panchayat Raj department dated 27 September 2019. The 2019 Grade-V recruitment is evidenced by district certificate-verification notices; the vacancy totals reported for it in the press were not found on an official page and are not stated here.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC results', href: APPSC.results },
        { label: 'Notification No. 13/2018 — Panchayat Secretary Grade-IV, Group-III Services', href: 'https://psc.ap.gov.in/UserManuals/LatestNotifications/13_2018.pdf' },
        { label: 'G.O.Ms.No.148, Panchayat Raj department, 27 September 2019 — creation of Grade-V and Grade-VI', href: 'https://etcsrikalahasti.ap.gov.in/assets/PDF/27092019PR_MS148.pdf' },
        { label: 'Srikakulam district — Grade-V certificate verification list, September 2019', href: 'https://srikakulam.ap.gov.in/notice/panchayat-secretary-grade-v-srikakulam-district-list-of-candidates-selected-for-certificate-verification/' },
        { label: 'APPSC web note on unauthorised recruitment schedules, 12 June 2026', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Webnote_12062026.pdf' },
        { label: 'APPSC computer proficiency test results web note, July 2026', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/CPT_Webnote_122025_15072026.pdf' },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Andhra Pradesh Panchayat Secretary syllabus — the rural development paper the commission set for Grade-IV, and the probation tests Grade-V must pass.',
      lead: [
        'One examination syllabus exists for this post, and two post-appointment tests. All three are about the same thing: running a panchayat.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The commission’s Group 3 syllabus — Paper 2',
              'Panchayat raj and its constitutional basis; the Andhra Pradesh Panchayat Raj Act; the three tiers and their functions and finances; rural development schemes of the centre and the state; the rural economy and rural problems of Andhra Pradesh; community-based organisations and self-help groups; the revenue and expenditure management of local bodies; and the roles and responsibilities of the Panchayat Secretary. Set out in full on the Group 3 syllabus page.',
            ],
            [
              'The commission’s Group 3 syllabus — Paper 1',
              'The general studies and mental ability paper common to APPSC recruitments, at degree standard, including the geography, economy and bifurcation of Andhra Pradesh.',
            ],
            [
              'Accounts Test for Local Body Employees, Papers I and II',
              'The departmental test Grade-V secretaries must pass during probation: the accounts, audit, budget and financial rules of local bodies. Conducted by the commission in its departmental test sessions, with the paper set on the rules themselves and bare Acts permitted in the hall for the with-books papers.',
            ],
            [
              'Computer proficiency test',
              'Proficiency in office automation — multiple-choice questions and practical tasks in word processing, spreadsheets and presentations, including typing speed. Conducted by the commission in separate CPT sessions, and sat by Grade-V secretaries as a departmental test.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Where the detail lives',
          items: [
            { label: 'APPSC Group 3 syllabus', to: '/government-exams/state/andhra-pradesh/appsc-group-3/syllabus/' },
            { label: 'APPSC departmental tests', to: '/government-exams/state/andhra-pradesh/departmental-tests/' },
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Andhra Pradesh Panchayat Secretary exam pattern — the Grade-IV screening and mains scheme, and how the Grade-V route differs.',
      lead: [
        'Two grades, two patterns. The commission’s is published and stable; the department’s ran once, in 2019, and its portals are gone.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The two routes side by side.',
          head: ['', 'Grade-IV — commission', 'Grade-V — department'],
          rows: [
            ['Who ran it', 'APPSC, under Group-III Services', 'The Panchayat Raj department through the District Collectors'],
            ['When', '2016 and December 2018', 'September 2019, as a one-time measure'],
            ['Written stages', 'OMR screening test, then two computer-based mains papers of 150 marks each', 'The department’s own written test; the pattern is no longer published on any live portal'],
            ['Negative marking', 'One-third of a mark per wrong answer', 'Not stated on any surviving official page'],
            ['Selection', 'District-wise ranking on the mains, Collector as unit of appointment', 'District certificate verification and appointment by the Collector'],
            ['After appointment', 'Regular scale', 'Two years’ probation on consolidated pay, with two departmental tests to pass'],
          ],
        },
        {
          type: 'p',
          text: 'The Grade-IV pattern is described in full — marks, qualifying thresholds, the screening ratio and the penalty — on the APPSC Group 3 exam-pattern page. It is the only pattern for this post that a candidate can prepare against from a published document.',
        },
        {
          type: 'links',
          title: 'The full pattern',
          items: [
            { label: 'APPSC Group 3 exam pattern', to: '/government-exams/state/andhra-pradesh/appsc-group-3/exam-pattern/' },
          ],
        },
      ],
    },
    'previous-year-papers': {
      description:
        'Andhra Pradesh Panchayat Secretary previous papers — the one official paper, the published district ranking lists, and what the marks in them tell you.',
      lead: [
        'One archived paper and a full set of district ranking lists with marks. Together they say more about this recruitment than most archives do.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The commission’s archive holds the 2016 Panchayat Secretary screening test and nothing else for this post. But the 2018 recruitment’s district ranking lists were published in February 2020 with each candidate’s Paper 1, Paper 2 and total marks, district by district. Read together, they show what the examination asked and what mark selected in each district — which is the pair of facts a candidate most needs.',
        },
        {
          type: 'list',
          title: 'How to use what exists',
          items: [
            { text: 'Work the 2016 screening paper to time, with the penalty', note: 'it is the only official evidence of how the rural development questions are phrased.' },
            { text: 'Read your district’s 2020 ranking list', note: 'find the mark at the last selected rank for your category. That, with a margin, is the target — and it differs by district, because appointment does.' },
            { text: 'Note the spread between Paper 1 and Paper 2', note: 'in the lists, general studies marks cluster and rural development marks spread. The paper about the job is where candidates separated.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Panchayat Secretary screening test, Notification No. 29/2016', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Panchayat%20secretary%20Screening%20Test%20Not.No.29-2016.pdf' },
            { label: '2018 recruitment — district ranking lists with marks', href: 'https://portal-psc.ap.gov.in/HomePages/PanchayatSecretaryMainsExaminationResults.aspx' },
            { label: 'APPSC Group 3 previous papers', to: '/government-exams/state/andhra-pradesh/appsc-group-3/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Andhra Pradesh Panchayat Secretary mock tests — practising the rural development paper for a recruitment that may come by either route.',
      lead: [
        'Whichever door opens next, the subject will be the same: the panchayat, its schemes, its accounts and its law. Practise that.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'A future recruitment to this post — by the commission for Grade-IV or by the department for Grade-V — will examine rural development and panchayat administration in Andhra Pradesh, because that is what the job is and what every previous examination asked. Mock practice built on the commission’s Group 3 Paper 2 syllabus prepares for either, and the general studies half prepares for every other APPSC paper besides.',
        },
        {
          type: 'steps',
          title: 'A routine that serves either route',
          items: [
            { title: 'A rural development sectional weekly', text: 'Fifty questions in fifty minutes on the Panchayat Raj Act, schemes, the rural economy and local-body finance, scored with the commission’s one-third penalty.' },
            { title: 'A general studies paper fortnightly', text: 'The APPSC Paper 1 format — 150 questions in 150 minutes — with the state layer included.' },
            { title: 'A full Group 3 mock monthly', text: 'Both papers, back to back, penalty applied.' },
            { title: 'The accounts rules, if you are aiming at Grade-V', text: 'The Accounts Test for Local Body Employees is a probation test, but its content — budget, receipts, expenditure, audit of a local body — is also Paper 2 content. Reading it early pays twice.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'APPSC Group 3 mock tests', to: '/government-exams/state/andhra-pradesh/appsc-group-3/mock-tests/' },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'Andhra Pradesh Panchayat Secretary preparation — what to build while neither route is open, and how to tell a real notification from a circulated one.',
      lead: [
        'There is no date to prepare towards. There is a subject, and a way to recognise the notification when it comes.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'Preparing without a notification',
          items: [
            { title: 'Build the rural development syllabus as a permanent file', text: 'The Panchayat Raj Act with sections, every scheme with its purpose and delivery, the rural economy of the state, local-body accounts. Revised monthly, it serves this post by either route and every other rural-administration recruitment the state runs.' },
            { title: 'Keep general studies current', text: 'The APPSC Paper 1 syllabus is common to every group. Preparing it for this post is preparing it for Group 2, Group 4 and the technical posts too.' },
            { title: 'Watch two official pages, not one', text: 'The commission’s notifications page for a Grade-IV or Group 3 notice, and the Panchayat Raj department and district portals for a Grade-V exercise. A notification for this post could come from either.' },
            { title: 'Apply the commission’s own test to any notice you see', text: 'A real notification has a number, a date, a vacancy table by district, a fee and a closing time, and it sits on an official portal. The commission has said in terms that schedules circulating on social media were not issued by it.' },
          ],
        },
        {
          type: 'note',
          title: 'Do not pay a fee to a page that is not the commission or the department',
          text: 'Every "apply now" for a Panchayat Secretary recruitment found while checking this page was on a coaching or aggregator site, and none cited a notification number. The commission charges its fees through its own portal; the department ran its 2019 recruitment through the District Collectors. Any other payment page is not a route into this post.',
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Andhra Pradesh Panchayat Secretary study material — the primary sources for panchayat raj, rural development and local-body accounts in the state.',
      lead: [
        'This post has no textbook. It has an Act, a set of schemes, a survey and a manual, and the preparation is assembling them.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Primary sources, by syllabus area. The commission’s Paper 2 and the Grade-V probation tests draw on the same documents.',
          head: ['Area', 'Source', 'Why'],
          rows: [
            ['Panchayat raj law', 'The 73rd Amendment and the Andhra Pradesh Panchayat Raj Act, with the 2019 amendment to the Subordinate Service Rules', 'The paper asks sections and articles; the 2019 amendment explains the grades of the post itself.'],
            ['Schemes', 'Central rural development ministry guidelines and the state Panchayat Raj and Rural Development department’s scheme pages', 'One page per scheme — purpose, funding, delivery through the panchayat.'],
            ['Rural economy', 'The state socio-economic survey and agriculture statistics', 'The facts the paper asks: crops, irrigation, credit, employment, migration, by district.'],
            ['Local-body accounts', 'The department’s accounts, audit and register manuals — the material of the Accounts Test for Local Body Employees', 'Paper 2 content for Grade-IV; a probation test for Grade-V.'],
            ['The secretary’s duties', 'The Act and the department’s job description of the post', 'Named in the syllabus as examined content; the most predictable questions in the paper.'],
            ['General studies', 'Standard degree-level texts with the Andhra Pradesh layer built in', 'Paper 1, common to every APPSC recruitment.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'APPSC Group 3 study material', to: '/government-exams/state/andhra-pradesh/appsc-group-3/study-material/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is there an Andhra Pradesh Panchayat Secretary notification in 2026?',
      a: 'No. As at 11 September 2026 the commission had issued no Panchayat Secretary or Group 3 notification since December 2018, the sachivalayam portal carried no recruitment, and the state’s 2026 job calendar listed no Panchayat Secretary or secretariat posts. The commission issued a web note in June 2026 warning that recruitment schedules circulating on social media had not been issued by it.',
    },
    {
      q: 'What is the difference between Panchayat Secretary Grade-IV and Grade-V in Andhra Pradesh?',
      a: 'Grade-IV is the post the commission recruited to under Group-III Services, in the regular pay scale, last notified in 2018. Grade-V was created in September 2019 for the village secretariats, filled by a one-time direct recruitment run by the Panchayat Raj department through the District Collectors, on two years’ consolidated pay with departmental tests to pass during probation. Under the same 2019 amendment, Grade-IV vacancies are now filled by promotion from Grade-V.',
    },
    {
      q: 'Is APPSC Group 3 the same as Panchayat Secretary?',
      a: 'Yes. Both notifications the commission has issued under Group-III Services — 2016 and 2018 — were for Panchayat Secretary Grade-IV, and the commission files the syllabus and the archived paper under that name. The Group 3 page on this site sets out that examination in full.',
    },
    {
      q: 'Will the next Panchayat Secretary recruitment be through APPSC or the sachivalayam?',
      a: 'No official statement was found either way. The 2019 amendment to the service rules provides that Grade-IV is filled by promotion from Grade-V, which as the rules stand does not provide for a fresh commission recruitment to Grade-IV. A future entry-level recruitment is therefore more likely to be a Grade-V exercise by the department — but that is what the rules imply, not an announcement.',
    },
    {
      q: 'What did the last Panchayat Secretary examination ask?',
      a: 'The 2018 Grade-IV recruitment ran a 150-mark OMR screening test — 75 questions on general studies and mental ability, 75 on rural development in Andhra Pradesh — and then a computer-based main examination of two 150-mark papers on the same two subjects. One-third of a mark was deducted for each wrong answer, and selection was district-wise on the mains. The rural development paper covered the Panchayat Raj Act, rural schemes, the rural economy of the state, local-body finance and the duties of the secretary.',
    },
    {
      q: 'What tests does a Grade-V Panchayat Secretary have to pass?',
      a: 'During the two-year probation, the Accounts Test for Local Body Employees Papers I and II and a computer proficiency test — both conducted by the commission in its departmental test and CPT sessions. The July 2026 CPT results web note confirms Grade-V secretaries sitting the proficiency test in that way.',
    },
    {
      q: 'Where can I find Panchayat Secretary previous papers and cut-offs?',
      a: 'The commission’s archive holds the 2016 screening test paper. The 2018 recruitment’s district ranking lists, published in February 2020 with each candidate’s paper-wise and total marks, show the mark that selected in each district. Both are linked from this page. The 2019 sachivalayam recruitment’s papers were on portals that no longer resolve.',
    },
  ],
}

/* ── APPSC Departmental Tests ───────────────────────────────────
   As in Telangana, two series get called "the departmental test". Unlike
   Telangana, this commission has abolished negative marking, publishes its
   qualifying marks, and has applied the BNS/BNSS/BSA substitution to the
   departmental criminal-law papers themselves. Those three differences are
   the most useful things this page can say. */
const AP_DEPARTMENTAL = {
  slug: 'departmental-tests',
  path: '/government-exams/state/andhra-pradesh/departmental-tests/',
  name: 'Andhra Pradesh Departmental Tests',
  fullName: 'APPSC Departmental Tests for serving government employees',
  authority: 'Andhra Pradesh Public Service Commission (APPSC)',
  official: OFFICIAL,
  seoTitle: 'APPSC Departmental Tests: Sessions, Fees, Pass Marks & BNS',
  metaDescription:
    'APPSC Departmental Tests — May and November sessions, who may sit which paper, fees, with-books rules, published pass marks, no negative marking, and BNS.',
  lead: [
    'Departmental tests are not a recruitment. They are the qualifying examinations serving Andhra Pradesh government employees must pass for probation to be declared, for promotion, and for the increments their service rules make conditional on them. The commission conducts them in two sessions a year and publishes the results as passes, not as a merit list.',
    'Three things make this commission’s version easier to prepare for than most. It has abolished negative marking. It publishes the qualifying marks for every paper, in an annexure to each notification. And it has already rewritten its criminal-law papers for the Bharatiya Nyaya Sanhita and its companion codes, with a section-by-section concordance — so a candidate for those papers knows exactly what replaced what.',
  ],
  quickFacts: [
    ['Conducted by', 'Andhra Pradesh Public Service Commission'],
    ['Sessions', 'Two a year, labelled May and November; the examinations run some weeks after the label'],
    ['Latest', 'Notification No. 03/2026 for the May 2026 session — results published 17 August 2026'],
    ['Fee', '₹500 a paper plus a ₹500 application processing fee'],
    ['Negative marking', 'None — abolished by government order in September 2020'],
    ['Pass mark', '40 in each paper as the general rule, with the exceptions published per paper'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The tests exist because state service rules make career events conditional on demonstrated knowledge of the rules an officer works under. A revenue officer must know the revenue codes; an officer handling money must know the accounts and treasury rules; a police clerk must know criminal procedure. The departmental test certifies that knowledge, and until it does, probation stays undeclared and promotion waits.',
    },
    {
      type: 'p',
      text: 'The commission runs them as computer-based objective tests for most papers, with the language and survey papers written conventionally on bar-coded answer books. Each paper is designated with books or without books. A with-books paper permits bare Acts in the hall and nothing else — no guides, commentaries, notes or handbooks — which changes what preparation for those papers means: not memorising the code, but knowing it well enough to find the section quickly.',
    },
    {
      type: 'list',
      title: 'The families of test',
      items: [
        { text: 'Accounts tests', note: 'for subordinate and executive officers, employees of local bodies, public works, treasuries and audit — the largest family, set on the financial codes and rules.' },
        { text: 'Revenue and judicial tests', note: 'the Revenue Test in three parts, the Criminal and Civil Judicial Tests, and the Evidence Act test — the papers now rewritten for the new criminal codes.' },
        { text: 'Departmental papers for specific services', note: 'excise, fire, forest, jail, registration, commercial taxes, transport, sericulture, fisheries, labour and a dozen more, each set on that department’s own Acts and manuals.' },
        { text: 'Language and survey tests', note: 'the second and third class language tests, translation tests, special language tests for the education department, and the surveyor and draughtsman tests — the conventional papers.' },
      ],
    },
    {
      type: 'note',
      title: 'Your service rules decide which papers you sit',
      text: 'There is no general list. The papers you must pass, the period within which you must pass them, and the consequence of not doing so are fixed by the service rules for your post. A set of papers is open to anyone, in government service or not; most are restricted to the department whose rules prescribe them. A candidate who has already passed a paper may not sit it again and is liable to be debarred for doing so. Confirm the paper codes against your own rules before registering.',
    },
  ],
  stages: [
    {
      name: 'Notification and online application',
      mode: 'Per session',
      detail:
        'The commission notifies each session with an application window of about three weeks. Candidates register for the paper codes their service requires, pay per paper, and may correct the application for a fee during a short window after closing.',
    },
    {
      name: 'The examination',
      mode: 'Computer-based objective, or conventional for language and survey papers',
      detail:
        'Objective papers run two hours; conventional papers three. Candidates report an hour early for biometric verification, and gates close thirty minutes before the paper. Bare Acts only in with-books papers.',
    },
    {
      name: 'Viva-voce, for language tests',
      mode: 'Oral, after the written part',
      detail:
        'The second class language tests proceed to their oral parts only for candidates who pass the written part; the third class language test is viva-voce only.',
    },
    {
      name: 'Result',
      mode: 'Pass or fail, published on the website',
      detail:
        'Results are displayed on the commission’s website, which is the authentic publication for extending service benefits. No individual pass certificate is issued. Results are also issued in the Udyoga Samacharam format, and errata are published where needed.',
    },
  ],
  updates: [
    {
      type: 'table',
      caption: `Two separate examination series, both run by the commission. Checked ${CHECKED}.`,
      head: ['', 'Departmental Tests', 'Half-Yearly Examinations'],
      rows: [
        ['Who sits them', 'Serving state government employees, for the tests their service rules prescribe; some papers open to anyone.', 'Officers of the All-India Services and State Services already in service — IAS and IFS probationers, IPS probationers, Deputy SPs, Deputy Collectors, forest officers.'],
        ['Sessions', 'Two a year, labelled May and November.', 'Two terms a year, March and September.'],
        ['Latest', 'No. 03/2026 of 11 May 2026, May 2026 session. Examinations 6 to 11 July 2026; results 17 August 2026; viva-voce 2 September with results 10 September.', 'No. 04/2026 of 9 July 2026, September 2026 term, held 8 to 11 September 2026.'],
        ['How to apply', 'Online, ₹500 a paper plus ₹500 processing.', 'On paper through the head of office or District Collector, ₹100 a test.'],
      ],
    },
    {
      type: 'list',
      title: `Where the Departmental Tests series stands as at ${CHECKED}`,
      items: [
        { text: 'May 2026 session — complete', note: 'the notification opened applications from 13 May to 2 June 2026; 49,117 candidates applied; examinations ran across 21 district centres from 6 to 11 July; results for objective and descriptive papers were published on 17 August; the language viva-voce was held at Vijayawada on 2 September and its results published on 10 September.' },
        { text: 'November 2026 session — not yet notified', note: 'no notification had appeared on the departmental notifications page at the date checked. The November 2025 session’s examinations were held in January 2026, so the label and the examination month are some weeks apart.' },
        { text: 'The session label is nominal', note: 'the May 2026 examinations were in July; the November 2025 examinations were in January. Plan by the notification’s dates, not by the session name.' },
      ],
    },
    {
      type: 'note',
      title: 'The criminal-law papers now examine BNS, BNSS and BSA',
      text: 'The commission has published a revised syllabus for the law department’s papers: the Indian Penal Code is replaced by the Bharatiya Nyaya Sanhita 2023 in Criminal Judicial Test Papers I and II (codes 98 and 108), the Code of Criminal Procedure by the Bharatiya Nagarik Suraksha Sanhita 2023 in Papers III and IV (codes 127 and 136), and the Indian Evidence Act by the Bharatiya Sakshya Adhiniyam 2023 in the Evidence Act test (code 77). The document carries chapter and section concordance tables and lists the newly added sections — trial in absentia, witness protection, electronic-mode provisions, electronic records — so the change is specified rather than announced. Unlike the neighbouring state, this substitution applies to the departmental tests themselves and not only to the half-yearly series.',
    },
    {
      type: 'links',
      title: 'The two notification streams',
      items: [
        { label: 'APPSC departmental tests — notifications, syllabus and results', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentTest.aspx' },
        { label: 'APPSC departmental notifications list', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentalNotifications_New.aspx' },
        { label: 'APPSC half-yearly examination notifications', href: 'https://portal-psc.ap.gov.in/HomePages/HalfYearlyNotifications.aspx' },
      ],
    },
  ],
  eligibility: [
    {
      type: 'p',
      text: 'Eligibility is a question about your post, not about a degree or an age. Andhra Pradesh government employees may apply for the tests prescribed in their departmental service rules under the Departmental Tests Rules of 1965. Beyond that, the notification divides the paper codes into those open to anyone and those restricted to a department.',
    },
    {
      type: 'table',
      caption: 'Who may sit what, from Notification No. 03/2026. The open list is the same set the commission has carried for several sessions.',
      head: ['Papers', 'Who may sit them'],
      rows: [
        ['Open to all, in government service or not', 'Codes 05, 08, 10, 18, 19, 27, 28, 36, 43, 45, 49, 62, 67, 77, 98, 108, 127, 136, 137, 141, 142, 144 to 148 and 155 — the accounts tests for subordinate and executive officers and local bodies, the Revenue Test, the judicial and Evidence Act tests, the language tests and the translation tests.'],
        ['Restricted to a department', 'Sericulture, Mines and Geology (service certificate required), Works Accounts, Workshop Officers, the commission’s own staff, the social welfare and health papers. The Divisional Test is for senior assistants with three years in the accounts branches of the engineering departments and for superintendents, with a service certificate.'],
        ['Secretariat employees', 'May sit the Commercial Taxes papers 6 and 7 and the Treasuries and Accounts papers to gain eligibility for appointment by transfer.'],
        ['Law graduates', 'May claim exemption from Criminal Judicial Test Papers I and II by uploading the law degree. Commerce graduates are exempt from Paper I of Part I of the Divisional Test.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees as notified for the May 2026 session. Online payment only; nothing is refunded.',
      head: ['Charge', 'Amount', 'Notes'],
      rows: [
        ['Examination fee', '₹500 per paper', 'Under a government order of September 2020. No fee for the Gujarati and Marwari language tests.'],
        ['Application processing fee', '₹500', 'Charged once per application, in addition to the per-paper fee.'],
        ['Correction', '₹100 per correction', 'During a short window after the closing date; no changes after two days from it.'],
        ['Memorandum of marks', '₹200', 'For unsuccessful candidates, by postal order or demand draft within one month of the result.'],
        ['Recounting', '₹300 per paper', 'Conventional papers only, within fifteen days of the result. Revaluation is never entertained.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'How a paper is conducted. The mode and duration depend on the paper, not the session.',
      head: ['Paper type', 'Mode', 'Duration', 'Sessions'],
      rows: [
        ['Most papers', 'Objective, computer-based', '2 hours', '10 to 12 and 3 to 5'],
        ['Language papers (codes 5, 6, 7, 19, 28, 36, 37, 49, 58, 67, 74) and survey papers', 'Conventional, on bar-coded answer books in blue or black ball pen', '3 hours', '10 to 1 and 3 to 6'],
        ['Second Class Language Test (code 05)', 'Conventional', '2 hours', '3 to 5'],
        ['Third Class Language Test (code 155)', 'Viva-voce only', '—', 'As scheduled'],
      ],
    },
    {
      type: 'note',
      title: 'No negative marking, and the pass marks are published',
      text: 'The notification states that the negative marks system has been cancelled by G.O.Ms.No.101 of September 2020, and that the practice of inviting objections to the answer key has been dispensed with. Qualifying marks are set out paper by paper in Annexure III: the general rule is a minimum of 40 marks in each paper, with each paper of a multi-paper test passable separately. The exceptions are specific — the Divisional Test and the Works Accounts Service papers need 40 per cent in each paper and 45 per cent in aggregate; the Criminal Judicial Test papers are taken together at 40 per cent and must all be passed at one sitting; several forest, fire and excise papers are assessed together; and the lower-standard special language tests prescribe no minimum in the written part.',
    },
    {
      type: 'list',
      title: 'The rules that catch people out',
      items: [
        { text: 'With books means bare Acts only', note: 'guides, commentaries, short notes, made-easy books, handwritten or photocopied material, diaries, training-institute material and handbooks are all barred. Calculators are unlawful except scientific calculators in the village surveyor papers, whose candidates bring their own instrument box.' },
        { text: 'Questions are in English only', note: 'except the surveyor and translation tests, which use the chosen language alongside English, and the health paper 171, which is in Telugu only.' },
        { text: 'The viva follows the written', note: 'in the second class language tests the oral parts are taken only by candidates who pass the written part.' },
        { text: 'Report an hour early', note: 'for biometric verification. Gates close thirty minutes before the paper, and the submit button in a computer-based paper activates only after the full two hours.' },
        { text: 'Do not re-sit a paper you have passed', note: 'the notification makes a candidate who does so liable to debarment.' },
      ],
    },
    {
      type: 'p',
      text: 'The result displayed on the commission’s website is the authentic publication for all service benefits under a 2011 government order and the amended 1965 rules — no individual pass certificate is issued and none should be waited for. Bio-data corrections must be submitted within fifteen days of the last examination day.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s departmental test pages and the May 2026 notification with its three annexures. Fees, modes, timings, eligibility, the abolition of negative marking and the pass marks are quoted from those documents; the BNS substitution from the commission’s revised law-department syllabus. The list of books allowed is published as a scanned document the text of which could not be read here, so the with-books rule is quoted from the examination instructions instead.`,
    },
    {
      type: 'links',
      title: 'Official notifications, syllabus and results',
      items: [
        { label: 'APPSC departmental tests page', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentTest.aspx' },
        { label: 'Departmental notifications list', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentalNotifications_New.aspx' },
        { label: 'Notification No. 03/2026 — May 2026 session', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/NotificationDocument_032026_11052026.pdf' },
        { label: 'Annexure I — examination instructions and with-books rule', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/AnnexureI_Dept_032026_11052026.pdf' },
        { label: 'Annexure II — time-table with paper codes', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/AnnexureII_Dept_032026_11052026.pdf' },
        { label: 'Annexure III — qualifying marks by paper', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/AnnexureIII_Dept_032026_11052026.pdf' },
        { label: 'Revised syllabus for the law department papers — BNS, BNSS and BSA', href: 'https://psc.ap.gov.in/UserManuals/Departmental/Revised%20Syllabus%20of%20Law%20Dept_PC_Nos_77_98_108_127_136.pdf' },
        { label: 'Departmental results dashboard', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentalResultsDashBoard.aspx' },
        { label: 'Half-yearly examination notifications', href: 'https://portal-psc.ap.gov.in/HomePages/HalfYearlyNotifications.aspx' },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'APPSC departmental test syllabus — what the accounts, revenue, judicial, departmental and language papers examine, and the revised criminal-law syllabus.',
      lead: [
        'Each paper is set on a named document — a code, a manual or an Act. The syllabus is that document, which is both the difficulty and the opportunity.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Accounts tests',
              'Government accounting procedure, the treasury and financial codes, budget and expenditure control, drawal and disbursement, audit objections and their settlement, and the rules governing pay, allowances, advances and pensions. Separate papers for subordinate officers, executive officers, local-body employees, public works, treasuries and audit — set on the codes and rules rather than on an accounting textbook.',
            ],
            [
              'Revenue Test',
              'Three parts covering the revenue laws and the standing orders of the Board of Revenue, land administration, survey and settlement records, and the procedure of the revenue offices.',
            ],
            [
              'Criminal Judicial Test and Evidence Act Test — revised',
              'Papers I and II now examine the Bharatiya Nyaya Sanhita 2023 and the special and local criminal laws in place of the Indian Penal Code; Papers III and IV the Bharatiya Nagarik Suraksha Sanhita 2023 in place of the Code of Criminal Procedure; and the Evidence Act test the Bharatiya Sakshya Adhiniyam 2023. The commission’s revised syllabus lists the sections included and maps each old chapter to its replacement.',
            ],
            [
              'Departmental papers',
              'Set on the Acts, rules and manuals of the department the officer serves in — excise, fire, forest, jail, registration, commercial taxes, transport, sericulture, fisheries, labour, agriculture, animal husbandry, ports, endowments, marketing, mines and others. Revised syllabi are published paper by paper on the departmental test page.',
            ],
            [
              'Language and survey tests',
              'The second and third class language tests, the translation tests, the special language tests for the education department at lower, higher and advanced standard, and the surveyor, draughtsman, survey inspector and computation tests — the conventional papers, written by hand.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'For a with-books paper the syllabus and the permitted material are the same document. The preparation is to know the bare Act well enough to find the section under time — its structure, its chapter headings, where the definitions sit — rather than to memorise it.',
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'APPSC departmental test page — syllabi by paper', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentTest.aspx' },
            { label: 'Revised law-department syllabus — BNS, BNSS and BSA', href: 'https://psc.ap.gov.in/UserManuals/Departmental/Revised%20Syllabus%20of%20Law%20Dept_PC_Nos_77_98_108_127_136.pdf' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'APPSC departmental test exam pattern — computer-based and conventional papers, with-books rules, published pass marks and no negative marking.',
      lead: [
        'A standard to meet rather than a field to beat. The pattern is about how the paper is sat and what counts as a pass.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Pass marks by test family, from Annexure III of the May 2026 notification. The general rule is 40 in each paper; the exceptions are listed.',
          head: ['Test', 'Qualifying rule'],
          rows: [
            ['Accounts tests, Revenue Test, treasuries, jail, registration, local fund audit, Evidence Act, Civil Judicial Part I', '40 marks in each paper, each paper passable separately'],
            ['Divisional Test Parts I and II; Works Accounts Service', '40 per cent in each paper and 45 per cent in aggregate'],
            ['Criminal Judicial Test', 'Papers I and II together and Papers III and IV together at 40 per cent; all papers to be passed at one sitting; law graduates exempt from Papers I and II'],
            ['Forest officers, fire, excise, forest ministerial, Civil Judicial Part II', 'Specified paper pairs assessed together at 40 per cent'],
            ['Descriptive language and survey papers', '40 marks in each paper'],
            ['Special language tests, lower standard', 'No minimum prescribed in the written examination'],
            ['Third Class Language Test', 'Viva-voce only, minimum 40'],
          ],
        },
        {
          type: 'p',
          text: 'Because there is no negative marking and the answer key is not opened to objection, the objective papers reward answering every question and accepting the key. The preparation question is not how to score but which paper to sit and which family’s rule applies to it.',
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'APPSC departmental test previous papers — what the commission publishes, and how to practise on the Acts themselves.',
      lead: [
        'The commission publishes results, keys and revised syllabi rather than a paper archive. For a paper set on an Act, the Act is the practice material.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The departmental test page carries syllabi, time-tables, results and errata for each session, and the revised syllabi paper by paper. It does not carry a question-paper archive, and since the objection process on keys was dispensed with, the key itself is not published in the way a recruitment key is. For most papers the useful previous material is therefore the document the paper is set on.',
        },
        {
          type: 'list',
          title: 'How to practise without papers',
          items: [
            { text: 'Work the Act as a question bank', note: 'for each chapter, write the ten questions an examiner would ask — definitions, procedures, time limits, penalties — and answer them from the text under time.' },
            { text: 'Use the concordance for the criminal-law papers', note: 'the revised syllabus maps every old section to its replacement. Practise from the new code, checking the concordance for the sections the old paper habitually asked.' },
            { text: 'Practise finding, not recalling, for with-books papers', note: 'time yourself locating a given section in the bare Act. The examination is two hours, and a candidate who can find a provision in thirty seconds has time; one who searches for three minutes does not.' },
            { text: 'Read the errata', note: 'the commission publishes corrections to results by paper and session. They tell you which papers have had key disputes and where care is needed.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'APPSC departmental test page', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentTest.aspx' },
            { label: 'Departmental results and errata', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentalResultsDashBoard.aspx' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'APPSC departmental test mock tests — timed practice against the paper’s own mode, with the with-books rule enforced.',
      lead: [
        'A mock for a with-books paper is a mock with the bare Act on the desk and nothing else. Anything more generous is not a rehearsal.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by paper type',
          items: [
            { title: 'Objective papers — two-hour sittings, weekly', text: 'A hundred questions drawn from your own chapter question bank, answered on screen or on paper against the clock. No negative marking, so answer every one and review the wrong ones against the text.' },
            { title: 'With-books papers — the Act and a stopwatch', text: 'The same sitting with only the bare Act permitted. The measure is not the score but how many questions you reached; if you ran out of time, the fix is navigation, not knowledge.' },
            { title: 'Conventional papers — write by hand, to length', text: 'Three-hour sittings for the language and survey papers, on paper, in pen. Legibility and speed at the end of the third hour are part of the standard.' },
            { title: 'The pass mark as the target', text: 'Score each mock against the rule for your paper — 40 in the paper, or 45 per cent in aggregate, or a pair taken together — rather than against a percentage.' },
          ],
        },
        {
          type: 'note',
          title: 'Practise the combined papers together',
          text: 'Where the qualifying rule assesses two papers together, or requires all papers of a test at one sitting, a mock of one paper alone measures the wrong thing. Sit the pair, or the set, in one session as the examination will require.',
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
        'APPSC departmental test preparation — choosing the right papers, preparing a with-books paper, and handling the revised criminal-law syllabus.',
      lead: [
        'Most of the preparation is administrative: the right paper codes, the right session, the right document. The rest is reading a code well.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From service rules to pass',
          items: [
            { title: 'Identify your papers from your service rules', text: 'Not from a colleague’s list. Confirm the codes, the period within which they must be passed, and whether you are already exempt from any — law graduates from the first two criminal judicial papers, commerce graduates from a divisional paper.' },
            { title: 'Check the qualifying rule for each', text: 'A single paper at 40, or a pair together, or an aggregate — Annexure III says which, and it changes how you spread your effort across a multi-paper test.' },
            { title: 'Get the current document', text: 'The revised syllabi on the departmental test page name the edition. For the criminal-law papers, that is the new codes with the concordance, not the old ones.' },
            { title: 'Register in the window and keep the receipt', text: 'About three weeks, online only, with a two-day correction window after. Applications close at eleven at night on the last date, and the fee is not refunded for any reason.' },
            { title: 'Prepare to the paper’s mode', text: 'Navigation for with-books objective papers, recall for without-books, handwriting for conventional. The mode is on the time-table against each code.' },
          ],
        },
        {
          type: 'note',
          title: 'The result is on the website, and only there',
          text: 'No certificate is issued and none is sent. The displayed result is the authentic publication for extending benefits, and the Udyoga Samacharam format is issued for departmental use. Keep the hall ticket and download the result page; a memorandum of marks is available to unsuccessful candidates for a fee within a month, and recounting only for conventional papers within fifteen days.',
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'APPSC departmental test study material — the codes, Acts and manuals each paper is set on, and the revised criminal-law syllabus.',
      lead: [
        'The material is the document the paper is set on. The commission names it; the preparation is to obtain the current edition and read it as an examiner would.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What to work from, by test family.',
          head: ['Test family', 'Source', 'Note'],
          rows: [
            ['Accounts tests', 'The Andhra Pradesh Financial Code, Treasury Code, Accounts Code and the fundamental rules, as the revised syllabus for each paper specifies', 'Bare rules permitted in the with-books papers.'],
            ['Revenue Test', 'The revenue Acts, the Board’s standing orders and the survey and settlement manuals', 'Part-wise; each part passable separately.'],
            ['Criminal Judicial and Evidence Act tests', 'The Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita and Bharatiya Sakshya Adhiniyam 2023, with the commission’s concordance', 'The old codes are no longer the syllabus.'],
            ['Departmental papers', 'The department’s own Act, rules and manual, in the edition named by the revised syllabus', 'Revised syllabi are dated on the departmental test page.'],
            ['Language tests', 'A grammar and composition reference in the language, and dictation, translation and essay practice', 'Written by hand; viva follows the written part.'],
            ['Survey tests', 'The survey manuals and the instrument work they prescribe', 'Scientific calculators and an instrument box permitted for the village surveyor papers only.'],
          ],
        },
        {
          type: 'note',
          title: 'Buy the bare Act, not the guide',
          text: 'For with-books papers, the only material allowed in the hall is the bare Act. A guide or a commentary is barred, and a candidate who has prepared from one arrives with a document they do not know how to navigate. Prepare from the edition you will carry in, annotated only in ways the instructions permit.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'APPSC departmental test page — revised syllabi', href: 'https://portal-psc.ap.gov.in/HomePages/DepartmentTest.aspx' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the next APPSC departmental test session?',
      a: 'The commission runs two sessions a year, labelled May and November. The May 2026 session, Notification No. 03/2026, is complete — examinations 6 to 11 July 2026 and results 17 August. As at 11 September 2026 the November 2026 session had not been notified. The label and the examination month differ: the November 2025 examinations were held in January 2026.',
    },
    {
      q: 'What is the fee for APPSC departmental tests?',
      a: '₹500 for each paper, plus a ₹500 application processing fee per application, payable online only and not refunded. There is no fee for the Gujarati and Marwari language tests. Corrections cost ₹100 each during a short window after closing.',
    },
    {
      q: 'Is there negative marking in APPSC departmental tests?',
      a: 'No. The notification states that the negative marks system was cancelled by G.O.Ms.No.101 of September 2020, and that the practice of inviting objections to the answer key has been dispensed with.',
    },
    {
      q: 'What are the pass marks for APPSC departmental tests?',
      a: 'The general rule, published in Annexure III of each notification, is a minimum of 40 marks in each paper, with each paper of a multi-paper test passable separately. Exceptions are specific: the Divisional Test and Works Accounts papers need 40 per cent in each paper and 45 per cent in aggregate; the Criminal Judicial Test papers are assessed in pairs at 40 per cent and must all be passed at one sitting; some forest, fire and excise papers are assessed together; and the lower-standard special language tests prescribe no written minimum.',
    },
    {
      q: 'Who can sit APPSC departmental tests?',
      a: 'Andhra Pradesh government employees, for the tests their departmental service rules prescribe. A set of paper codes — the accounts tests for subordinate and executive officers and local bodies, the Revenue Test, the judicial and Evidence Act tests and the language tests — is open to anyone whether in government service or not. Most other papers are restricted to the department whose rules prescribe them, some with a service certificate required.',
    },
    {
      q: 'What does “with books” mean in APPSC departmental tests?',
      a: 'That bare Acts alone may be brought into the hall for that paper. Guides, commentaries, short notes, made-easy books, handwritten or photocopied material, diaries, training-institute material and handbooks are all barred, and calculators are unlawful except scientific calculators in the village surveyor papers. Each paper is marked with books or without books on the time-table.',
    },
    {
      q: 'Have the criminal-law departmental tests changed to BNS?',
      a: 'Yes. The commission has published a revised syllabus for the law-department papers replacing the Indian Penal Code with the Bharatiya Nyaya Sanhita in Criminal Judicial Test Papers I and II, the Code of Criminal Procedure with the Bharatiya Nagarik Suraksha Sanhita in Papers III and IV, and the Indian Evidence Act with the Bharatiya Sakshya Adhiniyam in the Evidence Act test, with section-by-section concordance tables and a list of newly added provisions.',
    },
    {
      q: 'How are APPSC departmental test results issued?',
      a: 'By display on the commission’s website, which is the authentic publication for extending service benefits under a 2011 government order and the amended 1965 rules. No individual pass certificate is issued. Results are also issued in the Udyoga Samacharam format and errata are published. Unsuccessful candidates may obtain a memorandum of marks for ₹200 within a month; recounting is available for conventional papers only, at ₹300 within fifteen days; revaluation is never entertained.',
    },
    {
      q: 'Are the APPSC half-yearly examinations the same as departmental tests?',
      a: 'No. The half-yearly examinations are a separate series for officers of the All-India Services and State Services already in service — IAS, IFS and IPS probationers, Deputy Collectors, Deputy SPs, forest officers — held in March and September terms, applied for on paper through the head of office at ₹100 a test. The September 2026 term, Notification No. 04/2026, was held from 8 to 11 September 2026. A serving employee sitting an accounts or revenue test is in the departmental test series, not this one.',
    },
  ],
}

/* ── Andhra Pradesh Teaching Posts ──────────────────────────────
   Three TET cycles ran in the year to CHECKED, and one of them — the special
   in-service TET open at CHECKED — cannot be used for direct recruitment. The
   DSC is the department's own recruitment, not the commission's, and its
   scheme is fixed by government order rather than by the notification. The
   2025 Mega DSC is the reference cycle throughout. */
const AP_TEACHING_SRC = {
  portal: 'https://tet2dsc.apcfss.in/',
  cse: 'https://cse.ap.gov.in/',
  tetJune2026: 'https://tet2dsc.apcfss.in/TET-PDF/APTET-2026%20Notification.pdf',
  tetBulletin: 'https://tet2dsc.apcfss.in/TET-PDF/APTET%20Information%20Bulliten.pdf',
  tetSyllabus: 'https://tet2dsc.apcfss.in/TET-PDF/APTET%202026%20Syllabus%201.pdf',
  specialTet: 'https://tet2dsc.apcfss.in/SplTetAug2026/Spl%20TET%20Notification%20final.pdf',
  dscSchoolNotification: 'https://tet2dsc.apcfss.in/DSC-PDF/Notifications/School%20Edu%20Notification.pdf',
  dscSocietiesNotification: 'https://tet2dsc.apcfss.in/DSC-PDF/Notifications/Socities%20Notification.pdf',
  go15: 'https://api.apdsc.apcfss.in/dscdms/user-defined-path/file-download/bucket/documents.apdsc.apcfss.in/DSC_PUBLIC_UPLOADS/1745105305015_.pdf',
  go16: 'https://api.apdsc.apcfss.in/dscdms/user-defined-path/file-download/bucket/documents.apdsc.apcfss.in/DSC_PUBLIC_UPLOADS/1745105313425_.pdf',
}

const AP_TEACHING = {
  slug: 'teaching-posts',
  path: '/government-exams/state/andhra-pradesh/teaching-posts/',
  name: 'Andhra Pradesh Teaching Posts',
  fullName: 'Andhra Pradesh teacher recruitment — APTET, DSC and residential school posts',
  authority: 'Department of School Education, Government of Andhra Pradesh, through the Director of School Education and the District Selection Committees',
  official: 'cse.ap.gov.in',
  seoTitle: 'AP Teaching Jobs 2026: APTET, DSC & Residential School Posts',
  metaDescription:
    'Andhra Pradesh teaching recruitment — the three APTET cycles and which one counts, the Mega DSC 2025 pattern and 80:20 weightage, eligibility and fees.',
  lead: [
    'Teaching recruitment in Andhra Pradesh runs on two tracks that feed into one another. The Teacher Eligibility Test qualifies you and contributes a fifth of your final score. The District Selection Committee recruitment — the DSC, or Teacher Recruitment Test — appoints you, to a government, local-body or tribal welfare school under the School Education notification, or to a model school or residential institution under the societies notification issued alongside it.',
    'Read the status section before anything else, because there were three different TETs in the year to September 2026 and they are not interchangeable. The special TET for in-service teachers, open for applications at the time this page was checked, cannot be used for direct recruitment. A candidate heading for the DSC needs a pass in the regular APTET or the CTET, and nothing else will do.',
  ],
  quickFacts: [
    ['Eligibility test', 'APTET — four papers, 150 marks each, no negative marking, valid for life'],
    ['Recruitment test', 'DSC, conducted by the School Education department; the Mega DSC 2025 filled 16,347 posts'],
    ['Selection weightage', '80% written test, 20% TET score — no TET component for physical education posts'],
    ['Open now', 'Special APTET for in-service teachers only, applications to 24 September 2026 — not valid for the DSC'],
    ['Next DSC', 'No notification yet; the 2026 job calendar schedules teacher posts for 15 October 2026'],
    ['Fee', '₹1,000 per TET paper; ₹750 per DSC post applied for'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The eligibility test is set by the School Education department under the national regulator’s framework: four papers, each of 150 multiple-choice questions, each of one mark, with no negative marking. Paper 1A qualifies for classes I to V in regular schools and Paper 2A for classes VI to VIII; Papers 1B and 2B are the special-school equivalents. A pass — 60 per cent for general candidates, 50 for BC, 40 for SC, ST, disabled and ex-servicemen candidates — is valid for life, and a candidate may sit again to improve the score, because the score is what carries into selection.',
    },
    {
      type: 'p',
      text: 'The recruitment test is a separate examination with its own syllabus, and since the 2025 Mega DSC it has been governed by two government orders issued the day before the notifications: one for School Assistant, Secondary Grade Teacher, physical education and special education posts in the department’s schools, and one for Principals, post-graduate and trained graduate teachers and physical directors in model schools and the residential institutions. Both fix the same rule — the total is 100, of which 80 is the written test and 20 the TET score — and both exempt the physical education posts from any TET component.',
    },
    {
      type: 'list',
      title: 'What sets the Andhra Pradesh system apart',
      items: [
        { text: 'The TET score is a fifth of the result', note: 'not a threshold. A candidate who scrapes the pass mark starts the DSC twenty marks behind one who scored well, and that gap cannot be recovered in the written test.' },
        { text: 'The TET now runs twice a year, plus special cycles', note: 'because the Supreme Court has required in-service teachers to qualify by August 2028 and directed states to hold the test preferably twice a year. The special in-service cycles are the state’s response.' },
        { text: 'Two DSC notifications, two schemes', note: 'the School Education posts and the societies posts are notified together but examined differently — the societies posts add a qualifying English proficiency paper and, for Principals and PGTs, drop the TET entirely.' },
        { text: 'Results are normalised across shifts', note: 'both the TET and the DSC are computer-based tests held over many days, and both notifications publish the normalisation formula.' },
      ],
    },
    {
      type: 'note',
      title: 'The special in-service TET is not the one you need',
      text: 'The Special APTET of August 2026 is for teachers already in service, appointed before 2011, who must qualify to remain in post or be promoted. Its notification states in terms that a pass in it cannot be used for appearing in any direct recruitment, and that candidates wanting direct recruitment need the regular APTET or CTET. It is open for applications at the date this page was checked, and it is the wrong test for a DSC aspirant.',
    },
  ],
  stages: [
    {
      name: 'Andhra Pradesh TET',
      mode: 'Computer-based, four papers, qualifying with weightage',
      detail:
        'Paper 1A or 1B for classes I to V, Paper 2A or 2B for classes VI to VIII. A pass is required for School Assistant, Secondary Grade Teacher and special education posts, and the score contributes 20 of the 100 selection marks. Not required for physical education posts, Principals or PGTs.',
    },
    {
      name: 'DSC written test',
      mode: 'Computer-based, competitive',
      detail:
        'A separate examination in the subject, methodology, general knowledge and perspectives in education for the post applied for, with a different paper for each post category. Contributes 80 of the 100 selection marks — or all 100 for physical education posts.',
    },
    {
      name: 'English language proficiency test, for societies posts',
      mode: 'Qualifying, non-language posts only',
      detail:
        'Principals, PGTs and TGTs in model schools and residential institutions sit a 100-mark English proficiency paper at Intermediate standard before the main paper. It must be qualified — 60 for OC, BC and EWS candidates, 50 for SC, ST, disabled and ex-servicemen — for the main paper to be evaluated, and its marks do not count.',
    },
    {
      name: 'Merit list and certificate verification',
      mode: 'District-wise, by post and subject',
      detail:
        'Merit lists are published after the final key, and certificate verification follows within days. Selection is by the District Selection Committee under the roster and reservation rules of the notification.',
    },
  ],
  updates: [
    {
      type: 'table',
      caption: `Three TET cycles in twelve months, and only two of them count for the DSC. Checked ${CHECKED}.`,
      head: ['Cycle', 'Notification', 'Who may sit', 'Status'],
      rows: [
        ['APTET June 2026 — regular', 'No. 01–APTET-JUNE-2026, 5 June 2026', 'Anyone eligible', 'Applications closed 5 July; examinations held 5 to 21 August 2026; final key 8 September; final results scheduled for 15 September 2026'],
        ['Special APTET August 2026 — in-service', 'No. 01–AP SPL-TET-August-2026, 24 August 2026', 'In-service teachers only', 'Applications open 25 August to 24 September 2026; examinations 11 to 21 October; results scheduled 15 November 2026. A pass cannot be used for direct recruitment.'],
        ['APTET October 2025 — regular', 'No. 01–APTET-OCTOBER-2025, 24 October 2025', 'Anyone eligible', 'Complete — examinations from 10 December 2025, final results 19 January 2026'],
      ],
    },
    {
      type: 'table',
      caption: 'The recruitment track.',
      head: ['Recruitment', 'Status'],
      rows: [
        ['Mega DSC 2025', 'Complete. Two notifications of 20 April 2025 for 16,347 posts; computer-based test 6 June to 6 July 2025; merit lists published 22 August 2025 and certificate verification from 26 August. It replaced the DSC 2024, which was cancelled by government order in February 2024 — candidates who had applied re-applied without paying again.'],
        ['DSC 2026', 'No notification at the date checked. The state’s 2026 job calendar, issued by government order on 22 August 2026, schedules its fourth phase for 15 October 2026 with 2,991 School Education posts — Secondary Grade Teachers, School Assistants, instructors and District Educational Officers — and states that subject-wise vacancies will be issued by the District Selection Committees. The portal already carries a DSC 2026 syllabus for School Assistant (Special Education).'],
      ],
    },
    {
      type: 'note',
      title: 'Why the TET runs so often now',
      text: 'The Supreme Court held in September 2025 that in-service teachers with more than five years to superannuation must qualify TET to continue in service and that promotion requires it too; on review in May 2026 it extended the deadline to 31 August 2028 and directed states to hold the test periodically and preferably twice a year. The June 2026 notification exempts in-service teachers from the ordinary eligibility rules for that reason, and the special August cycle exists for the same reason. Neither changes what a fresh candidate needs, which is the regular test.',
    },
    {
      type: 'links',
      title: 'The official portals',
      items: [
        { label: 'APTET and DSC portal', href: AP_TEACHING_SRC.portal },
        { label: 'Commissionerate of School Education', href: AP_TEACHING_SRC.cse },
        { label: 'Special APTET August 2026 notification', href: AP_TEACHING_SRC.specialTet },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Post-wise qualification as set by G.O.Ms.No.15 of 19 April 2025 for the Mega DSC. The relaxed percentage in brackets applies to SC, ST, BC and disabled candidates.',
      head: ['Post', 'Qualification', 'TET'],
      rows: [
        ['Secondary Grade Teacher', 'Intermediate with at least 50% (45%), plus a two-year D.El.Ed or D.Ed; or the B.Ed route with the prescribed six-month bridge course.', 'Paper 1A pass'],
        ['School Assistant', 'Graduation in the subject with at least 50% (45%), plus B.Ed with that subject as methodology; or a four-year integrated B.A. B.Ed or B.Sc. B.Ed.', 'Paper 2A pass in the matching subject'],
        ['School Assistant (Physical Education) and PET', 'The physical education qualification prescribed by the order.', 'None'],
        ['TGT and SGT (Special Education)', 'The special education qualification prescribed, from an RCI-recognised institution.', 'Paper 2B or 1B pass'],
        ['Principal and PGT — societies', 'The post-graduate and professional qualification prescribed in G.O.Ms.No.16.', 'None'],
        ['TGT — societies', 'As for School Assistant.', 'Paper 2A pass'],
      ],
    },
    {
      type: 'list',
      title: 'The conditions that decide applications',
      items: [
        { text: 'Age in the 2025 DSC was 18 to 44, reckoned as on 1 July 2024', note: 'the reckoning date is printed as 2024 in both 2025 notifications. SC, ST, BC and EWS candidates to 49; candidates with benchmark disability to 54; ex-servicemen with service plus three years deducted.' },
        { text: 'The DSC fee was ₹750 for each post applied for', note: 'separately for each post category. Candidates who had paid for the cancelled DSC 2024 re-applied for the same posts without paying.' },
        { text: 'The TET fee is ₹1,000 per paper', note: 'paid separately for each paper. A candidate holding both D.El.Ed and B.Ed may sit all four papers.' },
        { text: 'The TET score counts only at or above the pass mark', note: 'out of 150: 90 for OC and EWS, 75 for BC, 60 for SC, ST, disabled and ex-servicemen candidates. Below it there is no score to carry into the 20 per cent.' },
        { text: 'A TET certificate is valid for life', note: 'under the national regulator’s 2021 order as adopted by the state in October 2021. Certificates from before June 2021 are also lifetime. There is no limit on attempts.' },
        { text: 'Disability for TET relaxation means at least 40 per cent', note: 'with the hearing-impairment definitions of the state’s August 2023 order.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The APTET as set in the June 2026 notification. Every paper is 150 multiple-choice questions of one mark, in two and a half hours, with no negative marking.',
      head: ['Paper', 'For', 'Structure'],
      rows: [
        ['Paper 1A', 'Classes I to V, regular schools', 'Child development and pedagogy 30; Language I 30; Language II English 30; mathematics 30; environmental studies 30 — each subject 24 content and 6 pedagogy'],
        ['Paper 1B', 'Classes I to V, special schools', 'The same five parts, with child development and pedagogy in special education'],
        ['Paper 2A', 'Classes VI to VIII, regular schools', 'Child development and pedagogy 30; Language I 30; Language II English 30; then 60 in the chosen stream — mathematics and science, social studies, or language, each 48 content and 12 pedagogy'],
        ['Paper 2B', 'Classes VI to VIII, special schools', 'The three common parts, then 60 on the category of disability specialisation and its pedagogy'],
      ],
    },
    {
      type: 'table',
      caption: 'The DSC written test as fixed by G.O.Ms.No.15 for School Education posts. Note that the marks are half the question count — each question carries half a mark.',
      head: ['Post', 'Questions', 'Marks', 'Duration', 'Inside the paper'],
      rows: [
        ['School Assistant', '160', '80', '2 hours 30 minutes', 'General knowledge 20 questions for 10; perspectives in education 10 for 5; educational psychology 10 for 5; subject content 80 for 40; methodology 40 for 20'],
        ['Secondary Grade Teacher', '160', '80', '2 hours 30 minutes', 'General knowledge 16 for 8; perspectives 8 for 4; psychology 16 for 8; then Language I, English, mathematics, science and social studies at 16 content and 8 methodology each, 12 marks a subject'],
        ['School Assistant (Physical Education)', '200', '100', '3 hours', 'General knowledge 10 for 5; perspectives 10 for 5; physical education pedagogy 40 for 20; physical education content 140 for 70'],
        ['Physical Education Teacher', '200', '100', '3 hours', 'As prescribed'],
        ['TGT and SGT (Special Education)', '160', '80', '2 hours 30 minutes', 'As prescribed'],
      ],
    },
    {
      type: 'note',
      title: 'Selection is 80 per cent written test and 20 per cent TET',
      text: 'G.O.Ms.No.15 states it in terms: for School Assistant, Secondary Grade Teacher and the special education posts the total is 100, of which 80 is the computer-based written test and 20 the APTET or CTET weightage. For School Assistant (Physical Education) and PET the written test is all 100 marks and there is no TET. The June 2026 TET notification repeats the same 80:20 rule. Neither the order nor the notifications nor the bulletins mention negative marking or a minimum qualifying mark for the written test; those are reported here as absent from the documents rather than as guarantees.',
    },
    {
      type: 'table',
      caption: 'The societies scheme under G.O.Ms.No.16, for model schools and residential institutions. The English proficiency paper is qualifying only and must be cleared for the main paper to be marked.',
      head: ['Post', 'Paper I', 'Paper II', 'TET weightage'],
      rows: [
        ['Principal', 'English proficiency, 100 questions for 100 marks in 90 minutes, qualifying', '200 questions for 100 marks in 3 hours', 'None'],
        ['PGT', 'English proficiency, non-language posts only, qualifying', '200 questions for 100 marks in 3 hours', 'None'],
        ['TGT', 'English proficiency, non-language posts only, qualifying', '160 questions for 80 marks in 2 hours 30 minutes', '20 marks'],
        ['Physical Director and PET', '—', '200 questions for 100 marks in 3 hours', 'None'],
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A sequence that respects how the two tests interact',
      items: [
        { text: 'Sit the regular APTET, and sit it to score', note: 'twenty of the final hundred marks come from it, and the difference between a bare pass and a strong score is worth more than most candidates gain from an extra month of DSC revision. The test runs twice a year now, and there is no limit on attempts to improve.' },
        { text: 'Pick the right paper and the right cycle', note: 'Paper 1A for Secondary Grade Teacher, Paper 2A in your subject for School Assistant — and a regular cycle, never the special in-service one.' },
        { text: 'Prepare content as the largest block', note: 'in the School Assistant paper, subject content is 80 of the 160 questions. Methodology, psychology and perspectives matter, but they are not where the paper is decided.' },
        { text: 'Use the published syllabus, not a generic one', note: 'the department publishes a syllabus per post on the portal, and the DSC 2026 syllabus for special education is already there. Perspectives in education and methodology are examined against those documents.' },
        { text: 'Societies candidates: prepare the English proficiency paper as a hurdle', note: 'it is at Intermediate standard, it must be qualified for the main paper to be marked, and candidates fail it by not having sat a timed practice paper.' },
        { text: 'Keep a general knowledge file running', note: 'it is 20 questions in the School Assistant paper and 16 in the SGT paper, and rewards a habit rather than a burst.' },
        { text: 'Watch 15 October 2026', note: 'the calendar date for the fourth phase of the 2026 job calendar, which carries the School Education posts. A calendar date is not a notification, but it is the date to have the certificates ready for.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. TET structure, fees, pass marks, validity and the 80:20 rule are from the June 2026 and October 2025 APTET notifications and the information bulletin; the in-service restriction is from the Special APTET notification of 24 August 2026. DSC qualifications, age, fee, the written test structures and the selection scheme are from the two Mega DSC notifications of 20 April 2025 and the government orders of 19 April 2025 they were issued under. No official archive of previous TET or DSC question papers exists: the portal publishes answer keys, and merit lists with marks, but not the papers.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APTET and DSC portal', href: AP_TEACHING_SRC.portal },
        { label: 'Commissionerate of School Education', href: AP_TEACHING_SRC.cse },
        { label: 'APTET June 2026 notification', href: AP_TEACHING_SRC.tetJune2026 },
        { label: 'APTET information bulletin', href: AP_TEACHING_SRC.tetBulletin },
        { label: 'APTET syllabus', href: AP_TEACHING_SRC.tetSyllabus },
        { label: 'Special APTET August 2026 notification — in-service teachers', href: AP_TEACHING_SRC.specialTet },
        { label: 'Mega DSC 2025 — School Education notification', href: AP_TEACHING_SRC.dscSchoolNotification },
        { label: 'Mega DSC 2025 — societies notification', href: AP_TEACHING_SRC.dscSocietiesNotification },
        { label: 'G.O.Ms.No.15 — scheme of selection for School Education posts', href: AP_TEACHING_SRC.go15 },
        { label: 'G.O.Ms.No.16 — scheme of selection for societies posts', href: AP_TEACHING_SRC.go16 },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Andhra Pradesh teaching exam syllabus — what each APTET paper covers, what the DSC adds for each post, and the societies English proficiency paper.',
      lead: [
        'Two syllabuses that overlap but are not the same. The eligibility test asks whether you can teach; the recruitment test asks how well you know your subject and the state’s framework for teaching it.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'APTET — child development and pedagogy',
              'Thirty questions in every paper: development, learning and its theories, the diverse learner, assessment, inclusive education and, in Papers 1B and 2B, the pedagogy of special education. The part of the test national material covers well.',
            ],
            [
              'APTET — languages',
              'Language I in Telugu, Urdu, Hindi, Kannada, Tamil, Odia or, at Paper 2A, Sanskrit; Language II English. Thirty questions each, split 24 content and 6 pedagogy: comprehension, grammar, vocabulary and the teaching of the language.',
            ],
            [
              'APTET Paper 1A — mathematics and environmental studies',
              'Thirty questions each at the classes I to V level with linkages upward, 24 content and 6 pedagogy. The syllabus is the state’s own primary curriculum.',
            ],
            [
              'APTET Paper 2A — the stream',
              'Sixty questions: mathematics and science as 20 each of mathematics, physical science and biological science, each 16 content and 4 pedagogy; or social studies as 48 content and 12 pedagogy across history, geography, civics and economics; or a language as 48 and 12.',
            ],
            [
              'DSC — general knowledge, perspectives and psychology',
              'Current affairs and general knowledge; perspectives in education — the history and policy of education in India and the state, the Right to Education, the National Education Policy; and the classroom implications of educational psychology. Published as a syllabus per post on the portal.',
            ],
            [
              'DSC — subject content and methodology',
              'For School Assistant, the subject at graduation standard and its methodology at B.Ed standard; for Secondary Grade Teacher, all five school subjects at the primary level with their methodologies. Half the School Assistant paper and the largest block of the SGT paper.',
            ],
            [
              'Societies — English language proficiency',
              'A qualifying paper at Intermediate standard for non-language posts: comprehension, grammar, usage and vocabulary. One hundred questions in ninety minutes, to be cleared at 60 or 50 by category before the main paper is marked.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'APTET syllabus', href: AP_TEACHING_SRC.tetSyllabus },
            { label: 'APTET and DSC portal — DSC syllabus by post', href: AP_TEACHING_SRC.portal },
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Andhra Pradesh teaching exam pattern — the four APTET papers, the DSC test for each post, the 80:20 weightage and the societies English proficiency hurdle.',
      lead: [
        'One number decides how to prepare: 20 of the 100 selection marks come from a test most candidates treat as a formality.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each component contributes to the final 100, by post.',
          head: ['Post', 'TET', 'English proficiency', 'Written test', 'Total'],
          rows: [
            ['School Assistant, SGT, special education', '20', '—', '80', '100'],
            ['SA (Physical Education), PET', '—', '—', '100', '100'],
            ['Principal, PGT — societies', '—', 'Qualifying', '100', '100'],
            ['TGT — societies', '20', 'Qualifying', '80', '100'],
            ['Physical Director, PET — societies', '—', '—', '100', '100'],
          ],
        },
        {
          type: 'p',
          text: 'The consequence is a planning rule. The TET is worth a fifth of the result and improves with re-sitting; the written test is worth four-fifths and is sat once. A candidate who has secured a strong TET score before the DSC notification has already banked marks the written test cannot give back.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'Half a mark a question in the DSC', note: '160 questions for 80 marks, 200 for 100. The question count is the pace; the marks are the weight.' },
            { text: 'No negative marking in the TET, stated', note: 'and none mentioned for the DSC — an absence in the documents rather than a stated rule. Check the notification for your cycle.' },
            { text: 'Scores are normalised across shifts', note: 'both tests run over many days in two sessions, and both publish the formula.' },
            { text: 'The societies English paper gates the main paper', note: 'a candidate who does not qualify it has the main paper left unmarked.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Andhra Pradesh TET and DSC previous papers — what the portal publishes, and how to practise from keys and merit lists instead.',
      lead: [
        'The portal publishes answer keys and merit lists with marks, not question papers. That changes what "previous papers" can mean.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'After each APTET the portal publishes an initial key, invites objections for a week, and publishes a final key; after each DSC it publishes merit lists by subject and district with each candidate’s marks. The question papers themselves are not published, and year-wise papers offered elsewhere are reconstructions. What the published material does give is the shape of the field: the pass rates by category, and the mark that selected in each district and subject.',
        },
        {
          type: 'list',
          title: 'What to practise from',
          items: [
            { text: 'The published syllabus per post', note: 'the department publishes a syllabus for each DSC post category and for the TET. Questions written from those documents are closer to the paper than a reconstructed set from a different year.' },
            { text: 'The 2025 merit lists', note: 'find the last selected mark for your post, subject and district. Subtract the TET weightage you expect and the number left is the written score you need.' },
            { text: 'The CTET papers for pedagogy and child development', note: 'published by the national board and set to the same framework. The right practice for the thirty-question common part of every APTET paper.' },
            { text: 'The state textbooks for content', note: 'Paper 1A is set on the classes I to V curriculum and Paper 2A on classes VI to VIII; the state’s own textbooks are the source.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'APTET and DSC portal — keys and merit lists', href: AP_TEACHING_SRC.portal },
            { label: 'State TET previous papers', to: '/government-exams/teaching-net/state-tet/previous-year-papers/' },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Andhra Pradesh TET and DSC mock tests — practising to the half-mark question, the normalised shift and the societies hurdle paper.',
      lead: [
        'Two tests, two formats, one habit: sit the paper as it will be sat, in the session length, on a screen.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around both tests',
          items: [
            { title: 'A full TET paper fortnightly, to time', text: '150 questions in 150 minutes, on the paper you will sit. With no negative marking, answer every one; review the guesses separately from the knowledge.' },
            { title: 'A DSC paper weekly once the cycle is near', text: '160 questions in 150 minutes for School Assistant or SGT, scored at half a mark each. Content is half the paper; score it separately.' },
            { title: 'A subject sectional midweek', text: 'Eighty content questions in eighty minutes for School Assistant; the five-subject rotation for SGT.' },
            { title: 'The English proficiency paper monthly, for societies candidates', text: 'One hundred questions in ninety minutes, to the qualifying mark. It is a hurdle and it removes candidates.' },
          ],
        },
        {
          type: 'note',
          title: 'Practise on a screen, in the session slot',
          text: 'Both tests are computer-based and both run in a morning session from 9.30 and an afternoon session from 2.30. The portal opens a mock test before each cycle so candidates can rehearse the interface. Use it, and sit at least one full practice paper in the slot you have been allotted.',
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
        'Andhra Pradesh teaching preparation — a plan that banks the TET score early, prepares DSC content as the largest block, and is ready for the October date.',
      lead: [
        'The eligibility test is the part you can improve at leisure; the recruitment test is the part you sit once. Plan in that order.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan across two cycles',
          items: [
            { title: 'Now — the regular TET', text: 'If you hold a pass, decide whether the score is strong enough to carry twenty marks; if not, re-sit the next regular cycle. If you hold none, the next regular cycle is the first task. Not the special in-service cycle.' },
            { title: 'Months one to three — content', text: 'The subject at graduation standard for School Assistant, the five primary subjects for SGT, from the state textbooks and the published syllabus. Half the paper.' },
            { title: 'Months four to six — methodology, perspectives and psychology', text: 'From the state’s own syllabus documents, not a general education text. The Right to Education, the state’s education policy, the classroom implications of learning theory.' },
            { title: 'The notification window — documents and papers', text: 'Certificates ready before the notification; a full paper a week from the day it appears; the merit-list target for your district in view.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2025 cycle taught',
          items: [
            { text: 'The DSC replaced a cancelled one', note: 'DSC 2024 was cancelled by government order in February 2024 and the Mega DSC 2025 re-notified the posts. Candidates who had paid did not pay again — but they did have to apply again.' },
            { text: 'Sixteen thousand posts across two notifications', note: 'with the societies posts — model schools, the residential institutions of the welfare departments — examined under a different scheme from the department’s own schools. Read both notifications before choosing which posts to apply for.' },
            { text: 'Merit lists came six weeks after the examination', note: 'and certificate verification four days after the lists. The interval between the result and verification is short; the certificates have to be ready before the result.' },
            { text: 'The fee is per post', note: '₹750 for each post category applied for. Applying widely costs accordingly.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Andhra Pradesh teaching study material — what to read for the TET, for each DSC post, and for the societies English paper.',
      lead: [
        'The state publishes the syllabus per test and per post. The material follows from those documents.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by component.',
          head: ['Component', 'What to work from', 'Why'],
          rows: [
            ['Child development and pedagogy', 'A standard TET pedagogy text and the CTET papers', 'Thirty questions in every APTET paper, set to the national framework.'],
            ['TET content', 'The state textbooks for classes I to V or VI to VIII, as the paper requires', 'The papers are set on the state curriculum with linkages upward.'],
            ['DSC subject content', 'Graduation-level texts in the subject, and the state’s published DSC syllabus for the post', 'Eighty of the 160 School Assistant questions.'],
            ['Methodology', 'The B.Ed methodology text for the subject, read against the published syllabus', 'Forty questions for School Assistant, eight per subject for SGT.'],
            ['Perspectives in education and psychology', 'The state’s published syllabus, the Right to Education Act, the National Education Policy, and the state’s own education policy documents', 'Examined against the state’s framework rather than a general text.'],
            ['General knowledge', 'A current affairs digest kept weekly, with the state layer', 'Twenty questions for School Assistant, sixteen for SGT.'],
            ['English proficiency — societies', 'An Intermediate-standard grammar and comprehension reference, and timed practice papers', 'A hundred questions in ninety minutes, qualifying.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'State TET study material', to: '/government-exams/teaching-net/state-tet/study-material/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Which APTET do I need for the DSC?',
      a: 'A pass in the regular APTET — or the CTET — in the paper for your post: Paper 1A for Secondary Grade Teacher, Paper 2A in your subject for School Assistant. The Special APTET of August 2026 is for in-service teachers only, and its notification states that a pass in it cannot be used for any direct recruitment.',
    },
    {
      q: 'Is any AP TET or DSC application open right now?',
      a: 'As at 11 September 2026, the Special APTET for in-service teachers is open for applications until 24 September 2026, with examinations from 11 to 21 October. The regular APTET June 2026 closed on 5 July, with final results scheduled for 15 September. No DSC notification is open; the state’s 2026 job calendar schedules School Education posts for 15 October 2026.',
    },
    {
      q: 'How much does the TET count in AP DSC selection?',
      a: 'Twenty per cent. G.O.Ms.No.15 of April 2025 fixes the total at 100 marks — 80 for the written recruitment test and 20 for the APTET or CTET score — for School Assistant, Secondary Grade Teacher and the special education posts. School Assistant (Physical Education) and PET carry no TET component, and nor do Principals and PGTs in the societies notification.',
    },
    {
      q: 'What is the APTET exam pattern?',
      a: 'Four papers — 1A and 1B for classes I to V, 2A and 2B for classes VI to VIII — each of 150 multiple-choice questions of one mark, in two and a half hours, with no negative marking. Each has 30 questions on child development and pedagogy, 30 on Language I and 30 on Language II English; Paper 1A adds 30 each on mathematics and environmental studies, and Paper 2A adds 60 in the chosen stream. Pass marks are 60 per cent for OC and EWS, 50 for BC and 40 for SC, ST, disabled and ex-servicemen candidates.',
    },
    {
      q: 'What is the AP DSC written test pattern?',
      a: 'For School Assistant and Secondary Grade Teacher, 160 multiple-choice questions for 80 marks in two and a half hours — half a mark a question. For School Assistant (Physical Education) and PET, 200 questions for 100 marks in three hours. In the societies notification, Principals and PGTs sit a 200-question paper for 100 marks after a qualifying English proficiency test; TGTs sit 160 for 80 after the same qualifying paper.',
    },
    {
      q: 'Is there negative marking in APTET or AP DSC?',
      a: 'The APTET information bulletin states that there is no negative marking. The DSC government orders, notifications and bulletins do not mention negative marking at all — which is an absence in the documents rather than a stated rule, so confirm it in the notification for your cycle.',
    },
    {
      q: 'What were the AP DSC 2025 age limit and fee?',
      a: '18 to 44 years, reckoned as on 1 July 2024 as printed in both notifications, with the upper limit 49 for SC, ST, BC and EWS candidates and 54 for candidates with benchmark disability. The fee was ₹750 for each post applied for; candidates who had paid for the cancelled DSC 2024 re-applied without payment.',
    },
    {
      q: 'How long is an APTET certificate valid?',
      a: 'For life, under the national regulator’s order of June 2021 as adopted by the state in October 2021. Certificates obtained before June 2021 are also valid for life. There is no limit on the number of attempts, and a candidate may sit again to improve the score that carries into selection.',
    },
    {
      q: 'When is the next AP DSC?',
      a: 'No notification had been issued at 11 September 2026. The state’s 2026 job calendar, issued by government order on 22 August 2026, schedules its fourth phase for 15 October 2026 with 2,991 School Education posts, and says subject-wise vacancies will be issued by the District Selection Committees. The portal already carries a DSC 2026 syllabus for School Assistant (Special Education). A calendar date is not a notification — check the portal.',
    },
    {
      q: 'Does the AP TET or DSC portal publish previous question papers?',
      a: 'No. It publishes initial and final answer keys for each TET, and merit lists with marks for each DSC, but not the question papers. It does publish the syllabus for each test and each post, which is the better basis for practice than a reconstructed paper.',
    },
  ],
}

/* ── Andhra Pradesh Technical Posts ─────────────────────────────
   The commission issued no recruitment notification at all in 2026 up to
   CHECKED; the 2024–2025 technical cycles are the reference. The 2026 job
   calendar schedules a large AEE round for October, and the per-department
   figures in it add to the "503" circulating on coaching sites — which is
   derived from the calendar, not from a notification. */
const AP_TECHNICAL = {
  slug: 'technical-posts',
  path: '/government-exams/state/andhra-pradesh/technical-posts/',
  name: 'Andhra Pradesh Technical Posts',
  fullName: 'APPSC technical recruitment — engineering, forest, scientific and lecturer posts',
  authority: 'Andhra Pradesh Public Service Commission (APPSC)',
  official: OFFICIAL,
  seoTitle: 'APPSC Technical Posts 2026: AEE, AE, Forest & Lecturers',
  metaDescription:
    'APPSC technical posts — AEE, AE, forest, town planning and lecturer recruitment: the 2024-25 cycles, common pattern, negative marking, no interview, and 2026.',
  lead: [
    'APPSC recruits its technical staff separately from the general Group services: Assistant Executive Engineers and Assistant Engineers for the engineering departments, Forest Range, Section and Beat Officers, town planning, geophysics and laboratory posts, and lecturers for the polytechnic and degree colleges. Each is its own notification with its own qualifying degree, and they arrive in clusters — nine in the second half of 2025 — rather than on an annual cycle.',
    'They share a scheme. A general studies and mental ability paper that every APPSC candidate sits, then one or two subject papers at the standard of the qualifying degree; one-third of a mark deducted for each wrong answer; qualifying marks by category on the aggregate; and selection on written merit followed by a computer proficiency test. No technical notification since 2023 has carried an interview.',
  ],
  quickFacts: [
    ['Conducted by', 'Andhra Pradesh Public Service Commission'],
    ['Current status', 'No commission recruitment notification issued in 2026 as at 11 September; the 2026 calendar schedules engineering posts for 15 October'],
    ['Qualification', 'The degree, diploma or trade certificate the post prescribes — engineering for AEE and AE, a science or engineering degree for forest officers'],
    ['Format', 'Objective, offline OMR — general studies plus one or two subject papers, 300 to 600 marks'],
    ['Negative marking', 'One-third of a mark for each wrong answer'],
    ['After the written test', 'A computer proficiency test, qualifying; no interview'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The technical notifications fall into families. Assistant Executive Engineer is the degree-level engineering post — 450 marks over three papers, with a common civil and mechanical paper between the general studies and the discipline paper. Assistant Engineer is the diploma-level post, at 300 marks over two. The forest officer posts add physical standards, a walking test and a medical board, and for the two senior grades a qualifying English and Telugu paper. The lecturer posts carry a 300-mark subject paper at post-graduate standard. What is constant is the general studies paper, the penalty, the qualifying thresholds and the absence of any interview.',
    },
    {
      type: 'p',
      text: 'The cadence is the thing to understand. The commission notified nothing in 2024 until February, then five technical posts in the spring; nothing in 2025 until July, then nine notifications by the end of September, all with windows of about three weeks. In 2026 it had issued no recruitment notification at all by mid-September — but the state’s job calendar schedules a second phase for 15 September with forest and pollution-control posts and a third for 15 October with Assistant Executive Engineers across seven departments. A candidate for these posts prepares continuously and applies in a fortnight.',
    },
    {
      type: 'list',
      title: 'What sets APPSC technical recruitment apart',
      items: [
        { text: 'A wrong answer costs a third of a mark', note: 'under G.O.Ms.No.235 of December 2016, in every paper of every technical notification. Answering everything is the wrong strategy here.' },
        { text: 'No interview, in any recent notification', note: 'the selection clause reads written merit followed by a computer proficiency test. Material that describes an APPSC AEE interview is describing a scheme that no current notification contains.' },
        { text: 'The subject paper is at the standard of the degree asked for', note: 'diploma standard for Assistant Engineer, bachelor’s for Assistant Executive Engineer, post-graduate for lecturers. Preparing from the wrong level is the commonest technical-post mistake.' },
        { text: 'Forest posts are a different physical regime', note: 'height and chest standards, a walking test, a medical board and — for Range and Section Officers — a qualifying language paper before the marked papers.' },
      ],
    },
    {
      type: 'note',
      title: 'Read the qualifying degree clause before anything else',
      text: 'Technical notifications name the degree, the branch and sometimes the awarding body — a diploma from the state technical board, AMIE Sections A and B, a first-class degree for lecturers, three years’ practical experience for the electrical inspectorate. A candidate with a related but unlisted qualification is not eligible, and finds out at certificate verification. The qualification table is the first thing to read in any of these notifications.',
    },
  ],
  stages: [
    {
      name: 'Screening test, when notified',
      mode: 'Objective OMR — only when applicants exceed two hundred times the vacancies',
      detail:
        'Used for the forest posts in 2024 and 2025, where the field was very large. Shortlists for the main examination and is then discarded.',
    },
    {
      name: 'Qualifying language paper, forest officers',
      mode: 'General English and General Telugu at SSC standard',
      detail:
        'For Forest Range and Section Officers, a qualifying paper in each language to be cleared individually before the marked papers count. Forest Beat Officers and Thanedars write a qualifying descriptive essay instead.',
    },
    {
      name: 'Written examination',
      mode: 'Objective, offline OMR',
      detail:
        'Paper I general studies and mental ability, 150 questions for 150 marks in 150 minutes, then one to three subject papers at the standard of the post. Selection is on the aggregate.',
    },
    {
      name: 'Physical tests and medical board, forest posts',
      mode: 'Walking test and medical examination',
      detail:
        'Qualifying, with no marks. Height and chest standards are checked and a medical board sits for candidates in a ratio to the vacancies.',
    },
    {
      name: 'Computer proficiency test and selection',
      mode: 'Practical, qualifying',
      detail:
        'A timed test of office automation under G.O.Ms.No.26 of February 2023, sat by candidates shortlisted on written merit. Selection follows for those who qualify it; no interview.',
    },
  ],
  updates: [
    {
      type: 'note',
      title: 'No APPSC recruitment notification has been issued in 2026',
      text: `Checked ${CHECKED}. The newest recruitment notifications on the commission’s list are Nos. 06 to 29 of 2025, issued between July and September 2025, and every one of their windows has closed. The only 2026-numbered items are the half-yearly examinations, the RIMC entrance and the May departmental test session. No application window was open at the date checked.`,
    },
    {
      type: 'table',
      caption: 'The technical notifications of 2024 and 2025 and where each stands. Windows were three weeks in every case.',
      head: ['Notification', 'Post', 'Vacancies', 'Status'],
      rows: [
        ['20/2025, 24 September 2025', 'Assistant Engineer — RWS, Water Resources, Panchayat Raj', '11', 'Examined January 2026; selection notified 17 July 2026'],
        ['17/2025, 16 September 2025', 'Assistant Executive Engineer (Civil), RWS', '3', 'Examined January 2026; selection notified 20 May 2026'],
        ['16/2025, 16 September 2025', 'Draughtsman Grade-II, Forest', 'As notified', 'Examined January 2026; result not yet in the commission’s feed'],
        ['13/2025, 9 September 2025', 'Thanedar, Forest', '10', 'Examined February 2026; result not yet in the feed'],
        ['11/2025, 12 August 2025', 'Technical Assistant (Geophysics), Ground Water', 'As notified', 'Examined January 2026; results April to July 2026'],
        ['07/2025, 22 July 2025', 'Forest Section Officer', '100', 'Screening result October 2025; mains February 2026; final result not yet in the feed'],
        ['06/2025, 14 July 2025', 'Forest Beat Officer and Assistant Beat Officer', '691', 'Screening September 2025; mains February 2026; final result not yet in the feed'],
        ['11/2024, 6 March 2024', 'Forest Range Officer', '37', 'Screening result April 2025; mains June 2025; selection not yet in the feed'],
        ['10/2024, 6 March 2024', 'Assistant Electrical Inspector', '3', 'Selection complete; marks published July 2026'],
        ['03/2024, 9 February 2024', 'Assistant Director, Town and Country Planning', '7', 'Results to March 2026'],
        ['02/2024, 9 February 2024', 'Analyst Grade-II, Pollution Control Board', '18', 'As notified'],
        ['13/2023, 21 December 2023', 'Lecturers in Government Polytechnic Colleges', '99', 'Results December 2025; selection notified 6 April 2026'],
      ],
    },
    {
      type: 'note',
      title: 'What the 2026 job calendar schedules',
      text: 'The state’s job calendar for 2026, issued by government order on 22 August 2026, sets 15 September 2026 for a second phase that includes Forest Section Officers, Forest Beat Officers, Forest Range Officers, technical assistants and Assistant Environmental Engineers, and 15 October for a third phase with Assistant Executive Engineers across Public Health, Panchayat Raj, Rural Water Supply, Roads and Buildings, Tribal Welfare and Irrigation — which together add to the five-hundred-odd AEE posts circulating on coaching sites, a figure derived from the calendar rather than from any notification. The power utilities’ AEE posts in the same calendar are to be notified by the utilities themselves, not by the commission. A calendar date is not a notification; the commission’s own list is.',
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC home — web notes and results feed', href: 'https://portal-psc.ap.gov.in/Default.aspx' },
        { label: 'APPSC results', href: APPSC.results },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'The qualifying degree by post, as set by the 2024 and 2025 notifications. A degree must be held on the notification date.',
      head: ['Post', 'Qualification', 'Age in the last cycle'],
      rows: [
        ['Assistant Executive Engineer (Civil)', 'A bachelor’s degree in civil engineering from a UGC-recognised university, or AMIE Sections A and B (Civil).', '18 to 42 as on 1 July 2025'],
        ['Assistant Engineer', 'By post code: the state technical board’s L.C.E. or equivalent; a diploma or bachelor’s degree in civil engineering; or a B.E. in civil or mechanical engineering or a listed diploma.', '18 to 42 as on 1 July 2025'],
        ['Forest Range Officer', 'A bachelor’s degree in a listed science, agriculture, forestry or engineering subject — the list is long and specific.', '18 to 30 as on 1 July 2024'],
        ['Forest Section Officer', 'A bachelor’s degree in botany, forestry, horticulture, zoology, physics, chemistry, mathematics, statistics, geology or agriculture, or a B.E. in chemical, mechanical or civil engineering.', '18 to 30 as on 1 July 2025'],
        ['Forest Beat Officer and Thanedar', 'Intermediate or equivalent.', '18 to 30 as on 1 July 2025'],
        ['Assistant Director, Town Planning', 'B.Arch, B.E. (Civil), B.Planning or M.A. Geography, together with a post-graduate degree or diploma in town planning, or fellowship or associateship of the Institute of Town Planners of India.', '18 to 42 as on 1 July 2024'],
        ['Assistant Electrical Inspector', 'A B.E. in electrical engineering with three years’ practical experience.', '18 to 42 as on 1 July 2024'],
        ['Draughtsman Grade-II', 'An ITI trade certificate as Draughtsman (Civil) or equivalent; a higher qualification is permitted.', '18 to 42 as on 1 July 2025'],
        ['Lecturers, polytechnic colleges', 'A first-class bachelor’s degree in the appropriate branch of engineering, or a first-class post-graduate degree in the subject for non-engineering posts.', '18 to 42 as on 1 July 2023'],
      ],
    },
    {
      type: 'list',
      title: 'The conditions common to the technical notifications',
      items: [
        { text: 'Age is 18 to 42 for most posts and 18 to 30 for the forest posts', note: 'reckoned as on 1 July of the notification year. Relaxations follow the commission’s standard table — SC, ST, BC and EWS 5 years, disability 10, ex-servicemen and NCC instructors 3 plus service, state employees up to 5.' },
        { text: 'Two fees', note: 'an application processing fee of ₹250 for everyone, and an examination fee of ₹120 for the AEE and 2024 notifications or ₹80 for the AE, draughtsman, forest and geophysics notifications of 2025. SC, ST, BC, disabled and ex-servicemen candidates, white-card families and unemployed youth on declaration are exempt from the examination fee only.' },
        { text: 'Forest posts carry physical standards', note: 'height at least 163 cm and chest at least 84 cm with 5 cm expansion for men, 150 cm and 79 cm for women, plus a walking test and a medical board. The walking test is qualifying and carries no marks.' },
        { text: 'The examination centre may be one city', note: 'the 2025 AEE notification examined at Vijayawada only. Read the centre clause.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The scheme by post family. Paper I is the same general studies and mental ability paper throughout — 150 questions, 150 marks, 150 minutes. Every paper is objective on OMR sheets, with one-third of a mark deducted per wrong answer.',
      head: ['Post', 'Papers after Paper I', 'Total marks'],
      rows: [
        ['Assistant Executive Engineer', 'Paper II civil and mechanical engineering, common, 150 marks; Paper III the discipline, 150 marks — both at bachelor’s standard', '450'],
        ['Assistant Engineer', 'Paper II civil or mechanical engineering, common, at diploma standard, 150 marks', '300'],
        ['Forest Range Officer', 'Qualifying English and Telugu; then Paper II mathematics at SSC standard, Paper III general forestry I, Paper IV general forestry II, 150 marks each', '600'],
        ['Forest Section Officer', 'Qualifying English and Telugu; then Paper II mathematics at SSC standard and Paper III general forestry, 150 marks each', '450'],
        ['Forest Beat Officer and Thanedar', 'Qualifying descriptive essay of 50 marks in 45 minutes; then Paper I at 100 marks and Paper II general science and mathematics at SSC standard, 100 marks', '200'],
        ['Assistant Director, Town Planning', 'Paper II town planning I and Paper III town planning II, 150 marks each', '450'],
        ['Assistant Electrical Inspector; Analyst Grade-II', 'Paper II the subject, 150 questions for 300 marks', '450'],
        ['Draughtsman Grade-II; Technical Assistant (Geophysics)', 'Paper II the trade or subject, 150 marks — Paper I at SSC standard for the draughtsman post', '300'],
        ['Lecturers, polytechnic colleges', 'Paper II the subject at post-graduate standard, 150 questions for 300 marks', '450'],
      ],
    },
    {
      type: 'note',
      title: 'One-third negative marking, no interview, qualifying marks on the aggregate',
      text: 'Every technical notification quotes the same clause from G.O.Ms.No.235 of December 2016: each wrong answer is penalised with one-third of the marks prescribed for the question. Qualifying marks are 40 per cent of the aggregate for OC, EWS and ex-servicemen, 35 for BC and 30 for SC, ST and disabled candidates. The selection clause reads that selection is on merit in the written examination followed by the computer proficiency test — the word interview appears in these notifications only in a photograph instruction.',
    },
    {
      type: 'list',
      title: 'The rules that decide the paper',
      items: [
        { text: 'The subject paper can be two-thirds of the marks', note: 'where it carries 300 marks against a 150-mark general studies paper — lecturers, the electrical inspectorate, the analyst post — each subject question is worth two general studies questions.' },
        { text: 'Forest candidates write the language paper first', note: 'and must qualify in each language individually before the marked papers count. Beat Officer and Thanedar candidates write a descriptive essay instead, in English, Telugu or Urdu.' },
        { text: 'A screening test appears when the field is very large', note: 'when applicants exceed two hundred times the vacancies — as for the forest posts. Its marks are discarded once the shortlist is made.' },
        { text: 'The proficiency test is qualifying and mandatory', note: 'no candidate is appointed without it, and its marks do not add to the rank.' },
        { text: 'Objections to the key cost ₹100 a question', note: 'and a memorandum of marks after the result ₹200.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'Preparing for a notification that arrives with three weeks’ notice',
      items: [
        { text: 'Treat your discipline as the main subject', note: 'it is 300 of the 450 AEE marks, and two-thirds of the total where the subject paper carries 300. General studies is the paper you share with every other candidate; the subject paper is the one you are competing on.' },
        { text: 'Prepare at the standard the post asks for', note: 'diploma level for Assistant Engineer, bachelor’s for AEE, post-graduate for lecturers. The commission’s old papers show the level; an AEE candidate working diploma-level material is under-preparing.' },
        { text: 'Learn to leave a question blank', note: 'a third of a mark per wrong answer means a blind guess across four options loses on average. Score every practice paper with the penalty applied and adjust the rule you guess by.' },
        { text: 'Work the commission’s archived papers', note: 'unlike the Group services, the archive holds real technical papers — the 2011 Assistant Engineer common paper, the 2016 AEE screening tests in civil, mechanical and agricultural engineering, lecturer papers by subject, and hydrology and geophysics papers.' },
        { text: 'Forest candidates: qualify the language paper and the walk before the syllabus', note: 'the English and Telugu paper at SSC standard removes candidates whose forestry papers were strong, and the walking test and medical board remove more. Neither is recoverable with marks.' },
        { text: 'Keep documents notification-ready', note: 'the degree must be held on the notification date, the window is three weeks, and the qualification clause is specific about branches and awarding bodies. Certificates assembled after the notification are assembled too late.' },
        { text: 'Watch 15 September and 15 October 2026', note: 'the calendar dates for the second and third phases, which carry the forest and engineering posts. Prepare for them as targets, and apply only to what the commission actually notifies.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, closing dates, qualifications, age, fees, the scheme of each examination, the negative-marking clause and the selection clause are taken from the 2023, 2024 and 2025 technical notifications named below, whose common provisions are identical. The commission’s old question papers archive holds technical papers from earlier cycles — Assistant Engineer, AEE screening tests, lecturers, hydrology and geophysics posts — but no papers from the 2024 or 2025 cycles, for which final keys are published separately.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'APPSC results', href: APPSC.results },
        { label: 'APPSC final answer keys', href: APPSC.keys },
        { label: 'APPSC old question papers archive', href: APPSC.oldPapers },
        { label: 'Notification No. 17/2025 — Assistant Executive Engineer (Civil), RWS', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/AEE_172025_16092025.pdf' },
        { label: 'Notification No. 20/2025 — Assistant Engineer', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/AE_Notification_202025_24092025.pdf' },
        { label: 'Notification No. 06/2025 — Forest Beat Officer and Assistant Beat Officer', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/FBO_ABO_Notification_14072025.pdf' },
        { label: 'Notification No. 07/2025 — Forest Section Officer', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/FSONotification_072025_22072025.pdf' },
        { label: 'Notification No. 11/2024 — Forest Range Officer', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/FRONotification_06032024.pdf' },
        { label: 'Notification No. 03/2024 — Assistant Director, Town and Country Planning', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/ADTP_Notification_No_03_2024_dt09022024.pdf' },
        { label: 'Notification No. 13/2023 — Lecturers in Government Polytechnic Colleges', href: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Polytechnic%20Lecturers-%20Notifn.%20No.13_2023_21122023.pdf' },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'APPSC technical post syllabus — the general studies paper, the engineering common and discipline papers, the forestry papers and the lecturer subject papers.',
      lead: [
        'One common paper and a subject paper at the standard of the degree asked for. The general studies syllabus is published; the subject syllabus is the annexure of each notification.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper I — General Studies and Mental Ability',
              'Events of national and international importance; current affairs; general science and its applications; Indian history and the national movement; Indian geography and the geography of Andhra Pradesh; the Constitution, polity and governance; the Indian economy and the economy of Andhra Pradesh; the bifurcation of the state and its implications; logical reasoning, analytical ability and data interpretation. At degree standard for most posts and SSC standard for the draughtsman post.',
            ],
            [
              'AEE Paper II — civil and mechanical engineering, common',
              'The shared foundation of the two disciplines at bachelor’s standard: engineering mechanics, strength of materials, fluid mechanics, thermodynamics, materials and manufacturing basics, surveying and engineering drawing. Set as one paper for both civil and mechanical candidates.',
            ],
            [
              'AEE Paper III — the discipline',
              'For civil: structural analysis and design, geotechnical engineering, hydrology and irrigation, water supply and sanitation, transportation and construction management. For mechanical or electrical, the equivalent core of the discipline. At bachelor’s standard, from the annexure of the notification.',
            ],
            [
              'AE Paper II — civil or mechanical, at diploma standard',
              'The same disciplines pitched at the diploma level the post requires — the material of the state technical board’s courses rather than of a degree.',
            ],
            [
              'Forest papers',
              'For Range and Section Officers, mathematics at SSC standard and general forestry — silviculture, forest mensuration, forest protection, wildlife, forest law and policy — in one paper for Section Officers and two for Range Officers. For Beat Officers and Thanedars, general science and general mathematics at SSC standard.',
            ],
            [
              'Lecturer subject papers',
              'The subject at post-graduate standard, for 300 marks — the branch of engineering for polytechnic engineering posts, the discipline for non-engineering and degree-college posts. The syllabus is the annexure of the notification and follows the university curriculum of the subject.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'There is no separate syllabus document for the technical posts; the scheme and syllabus are the annexure inside each notification PDF, reachable from the notifications list. The commission’s syllabus page carries the Group services and a few standing schemes, not the technical posts.',
        },
        {
          type: 'links',
          title: 'Where the syllabus lives',
          items: [
            { label: 'APPSC recruitment notifications — syllabus in each annexure', href: APPSC.notifications },
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'APPSC technical post exam pattern — the common general studies paper, the subject papers by post, negative marking, qualifying stages and the proficiency test.',
      lead: [
        'A common paper, one to three subject papers, a penalty for error and a practical test at the end. What varies is the weight of the subject.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes.',
          head: ['Stage', 'Counts?', 'What it decides'],
          rows: [
            ['Screening test, when held', 'No', 'Who is admitted to the main examination in very large fields'],
            ['Qualifying language paper or essay, forest posts', 'No', 'Whether the marked papers are evaluated at all'],
            ['Paper I general studies', 'Yes — 150 marks', 'A third of the AEE total, half of the AE total'],
            ['Subject papers', 'Yes — 150 to 450 marks', 'The rest, and the larger share'],
            ['Walking test and medical board, forest posts', 'No', 'Whether a ranked candidate proceeds'],
            ['Computer proficiency test', 'No — qualifying', 'Whether a ranked candidate is appointed'],
          ],
        },
        {
          type: 'p',
          text: 'The planning rule follows from the weights. General studies is the shared paper and rewards a general routine; the subject paper is the larger share and rewards discipline-specific depth at the right standard. The qualifying stages add nothing to the rank but remove candidates from it, and deserve enough preparation to pass comfortably.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The penalty is a third of the question’s marks', note: 'on a 300-mark subject paper of two-mark questions, that is two-thirds of a mark per wrong answer.' },
            { text: 'Qualifying marks are on the aggregate', note: '40, 35 and 30 per cent by category — not per paper, unlike the police recruitment.' },
            { text: 'Selection is written merit plus proficiency test', note: 'the notifications say so in terms. There is no interview.' },
            { text: 'The forest language paper is qualified individually', note: 'English and Telugu each, before the marked papers count.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'APPSC technical post previous papers — the archive that actually exists for AE, AEE, lecturer and hydrology posts, and how to use it.',
      lead: [
        'Unlike the Group services, the commission’s archive holds real technical papers. They are older cycles, but they are the commission’s own.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The old question papers page holds the 2011 Assistant Engineer common paper in civil and mechanical engineering, the 2016 AEE screening tests in civil, mechanical and agricultural engineering, degree-college and junior-lecturer papers by subject from 2008 and 2011, the technical assistant papers in hydrology and hydrogeology, the assistant hydrologist and hydrogeologist papers from 2012, the architectural draughtsman paper and a general studies paper from 2008. Papers from the 2024 and 2025 cycles are not there; for those the commission publishes final keys.',
        },
        {
          type: 'list',
          title: 'How to use the archive',
          items: [
            { text: 'Work the AEE screening tests for level', note: 'they show the standard at which the commission sets an engineering paper — and the standard has not moved, even where the scheme has.' },
            { text: 'Use the AE common paper for the diploma-level post', note: 'it is the same common civil and mechanical paper, at the diploma standard the post asks for.' },
            { text: 'Lecturer candidates: work the subject paper for your discipline', note: 'the 2008 and 2011 lecturer papers are set at the post-graduate standard the current scheme keeps.' },
            { text: 'Apply the penalty', note: 'the archived papers predate or postdate the one-third rule; score them under it regardless, because that is the rule you will sit under.' },
          ],
        },
        {
          type: 'note',
          title: 'Pair recent keys with reconstructed papers',
          text: 'For the 2024 and 2025 cycles the commission publishes the final answer key but not the paper. A reconstructed paper from those cycles, checked against the official key, is a reasonable practice set — but it is a reconstruction, and the archived papers are the only ones that are the commission’s own.',
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'APPSC old question papers archive', href: APPSC.oldPapers },
            { label: 'APPSC final answer keys', href: APPSC.keys },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'APPSC technical post mock tests — practising the common paper, the subject paper at the right standard, and a one-third penalty.',
      lead: [
        'Two papers with different weights, one penalty, and a standard that depends on the post. A mock that gets any of those wrong measures the wrong thing.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A full paper set every week', text: 'Paper I and the subject paper or papers, back to back, scored with a third of a mark off per wrong answer — two-thirds where the question carries two marks.' },
            { title: 'A subject sectional midweek', text: 'Fifty questions from one unit of the discipline in fifty minutes, at the standard of the post. This is where the marks are and where drilled practice moves them fastest.' },
            { title: 'A general studies paper fortnightly', text: 'The commission’s Paper I format with the state layer, shared with every other APPSC recruitment you might sit.' },
            { title: 'For forest posts, the qualifying paper and the walk', text: 'English and Telugu at SSC standard to the qualifying mark, and a timed walk to the notified distance. Neither carries marks; both remove candidates.' },
          ],
        },
        {
          type: 'note',
          title: 'Score the subject paper against the last cycle’s selected marks',
          text: 'The commission publishes the marks of selected candidates after each selection. Find the last selected mark for your post and category, subtract a realistic general studies score, and the remainder is the subject-paper target. It is a harder standard than a percentage and the only one that predicts anything.',
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
        'APPSC technical post preparation — a plan for posts notified in clusters with three-week windows, weighted to the subject paper.',
      lead: [
        'The notification will give you three weeks. The preparation has to be done before it, and the documents ready with it.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan in four phases',
          items: [
            { title: 'Phase one — the discipline at the right standard', text: 'The core of the subject from the curriculum of the qualifying degree, unit by unit, with the archived papers as the level check. Two-thirds of the effort.' },
            { title: 'Phase two — the common paper', text: 'General studies with the Andhra Pradesh layer built in, and the mental ability section drilled. Shared with every APPSC recruitment.' },
            { title: 'Phase three — papers under the penalty', text: 'Weekly full sets scored at one-third off, until the guessing rule is settled. Forest candidates add the language paper and the walk.' },
            { title: 'Phase four — ready for the calendar', text: 'Certificates in order, the qualification clause of the last notification re-read against your own degree, and the notifications page watched around the calendar dates.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2024 and 2025 cycles taught',
          items: [
            { text: 'The vacancy may be tiny', note: 'three AEE posts, eleven AE posts, seven town planning posts, three electrical inspector posts. The scheme and the preparation are the same at three posts as at three hundred; the competition is not.' },
            { text: 'The qualification clause is exact', note: 'a diploma from the state board, AMIE Sections A and B, a first-class degree, three years’ experience. Candidates with related qualifications are rejected at verification.' },
            { text: 'Results take months and come in tranches', note: 'the 2025 AEE examined in January 2026 and notified selection in May; the geophysics post published four supplementary results between April and July. The forest posts examined in February 2026 had no final result in the commission’s feed by September.' },
            { text: 'The centre may be one city', note: 'the AEE notification examined at Vijayawada only.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'APPSC technical post study material — what to read for the common paper and for each discipline, at the standard the post requires.',
      lead: [
        'The general studies reading list is standard. The subject reading list is the curriculum of the qualifying degree, and the level is the whole question.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by paper and post family.',
          head: ['Paper', 'Standard', 'What to work from'],
          rows: [
            ['General studies', 'Degree, or SSC for the draughtsman post', 'The standard degree-level general studies texts with the Andhra Pradesh layer — the state’s geography, economy, administration and the bifurcation — and a current affairs digest.'],
            ['AEE — civil and mechanical common, and the discipline', 'Bachelor’s', 'The core textbooks of the engineering degree, unit by unit against the notification annexure, and the 2016 AEE screening papers for level.'],
            ['AE — civil or mechanical common', 'Diploma', 'The state technical board’s diploma curriculum texts, and the 2011 AE common paper.'],
            ['Forestry', 'Degree, with SSC mathematics', 'A general forestry text covering silviculture, mensuration, protection, wildlife and forest law, plus a school mathematics reference.'],
            ['Town planning', 'Post-graduate', 'The planning curriculum: urban and regional planning, transport, housing, planning law and the state’s own planning framework.'],
            ['Lecturer subjects', 'Post-graduate', 'The university curriculum of the subject at master’s level, and the archived lecturer papers for the discipline.'],
            ['Computer proficiency', 'Practical', 'A word processor, spreadsheet and presentation tool used regularly. The test is timed and typing speed is part of it.'],
          ],
        },
        {
          type: 'note',
          title: 'Read the annexure before buying anything',
          text: 'The syllabus for each technical post is the annexure of its notification, and it names the units. A candidate who buys a general competitive-exam engineering guide is buying coverage of units the paper does not set at a level the paper may not use. The annexure and the curriculum of the degree it asks for are the reading list.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any APPSC technical notification open right now?',
      a: 'No. As at 11 September 2026 the commission had issued no recruitment notification in 2026, and every 2025 window had closed. The state’s 2026 job calendar schedules forest and pollution-control posts for 15 September and Assistant Executive Engineers across seven departments for 15 October 2026 — but a calendar date is not a notification, and the commission’s own list is the only source that is.',
    },
    {
      q: 'Is there an interview for APPSC AEE or AE?',
      a: 'No. Every technical notification since 2023 states that selection is on merit in the written examination followed by a computer proficiency test. The word interview appears only in a photograph instruction. Material describing an APPSC AEE interview is describing a scheme no current notification contains.',
    },
    {
      q: 'What is the APPSC AEE exam pattern?',
      a: 'Three objective papers of 150 questions, 150 marks and 150 minutes each, on OMR sheets: Paper I general studies and mental ability, Paper II civil and mechanical engineering common, Paper III the discipline, all at bachelor’s standard, for 450 marks. One-third of a mark is deducted per wrong answer, qualifying marks are 40, 35 and 30 per cent by category on the aggregate, and a computer proficiency test follows.',
    },
    {
      q: 'What is the difference between APPSC AE and AEE?',
      a: 'Assistant Engineer is the diploma-level post — two papers for 300 marks, with the subject paper at diploma standard, and a qualification of the state technical board’s diploma or a listed degree. Assistant Executive Engineer is the degree-level post — three papers for 450 marks at bachelor’s standard, requiring a bachelor’s degree in the discipline or AMIE. The pay scales differ accordingly.',
    },
    {
      q: 'Is there negative marking in APPSC technical exams?',
      a: 'Yes. Every technical notification quotes G.O.Ms.No.235 of December 2016: each wrong answer is penalised with one-third of the marks prescribed for the question. Where a subject question carries two marks, that is two-thirds of a mark per wrong answer.',
    },
    {
      q: 'What are the physical standards for APPSC forest posts?',
      a: 'Height at least 163 cm and chest at least 84 cm with 5 cm expansion for men, and 150 cm and 79 cm for women, in the 2025 Forest Section Officer and Beat Officer notifications, together with a walking test and a medical board. The walking test is qualifying and carries no marks. Forest posts also carry a lower age ceiling of 30.',
    },
    {
      q: 'What are the APPSC technical post fees?',
      a: 'An application processing fee of ₹250 for every applicant, plus an examination fee of ₹120 for the AEE and 2024 notifications or ₹80 for the AE, draughtsman, forest and geophysics notifications of 2025. SC, ST, BC, disabled and ex-servicemen candidates, white-card families and unemployed youth on declaration are exempt from the examination fee only.',
    },
    {
      q: 'Does APPSC publish previous papers for technical posts?',
      a: 'Yes, for older cycles. The old question papers archive holds the 2011 Assistant Engineer common paper, the 2016 AEE screening tests in civil, mechanical and agricultural engineering, lecturer papers by subject, hydrology and geophysics papers and more. Papers from the 2024 and 2025 cycles are not published; the commission publishes their final keys instead.',
    },
    {
      q: 'How many AEE posts will APPSC notify in 2026?',
      a: 'No notification had been issued at 11 September 2026. The state’s job calendar lists Assistant Executive Engineer posts across Public Health, Panchayat Raj, Rural Water Supply, Roads and Buildings, Tribal Welfare and Irrigation for its third phase on 15 October 2026, and the five-hundred-odd figure circulating is the sum of those calendar lines. The power utilities’ AEE posts in the same calendar are to be notified by the utilities, not the commission. The vacancy count that matters is the one in the notification when it appears.',
    },
  ],
}

/* ── APPSC Group 1 ──────────────────────────────────────────────
   The one senior state recruitment in these two states that still carries an
   interview: 75 marks, added to a 750-mark descriptive mains, under the 2023
   scheme. That is the reverse of Telangana's Group 1, and it is stated
   plainly because material for the two commissions is routinely mixed. The
   12/2023 cycle is the reference; its provisional selection of January 2026
   remains subject to pending writ petitions. */
const AP_GROUP_1_SRC = {
  landing: 'https://portal-psc.ap.gov.in/HomePages/GroupI_Notification_12_2023.aspx',
  notification: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Notfn_Group_I_2023%20with%20Syllabus_122023_08122023.pdf',
  detailed: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Details_for_Group_1_Notfn_2023_122023_27122023.pdf',
  addendum: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Addendum%20for%20Group-I%20Notifiction%20No.12_2023_16032024.pdf',
  selection: 'https://psc.ap.gov.in/Documents/NotificationDocuments/SelectionNotification_122023_30012026.pdf',
  selectionLists: 'https://portal-psc.ap.gov.in/HomePages/DRSelectionLists.aspx',
  essay2025: 'https://psc.ap.gov.in/Documents/GroupI_QuesPapersMains_122023/PaperI_General_Essay_122023_05052025.pdf',
}

const AP_GROUP_1 = {
  slug: 'appsc-group-1',
  path: '/government-exams/state/andhra-pradesh/appsc-group-1/',
  name: 'APPSC Group 1',
  fullName: 'Andhra Pradesh Public Service Commission Group 1 Services',
  authority: 'Andhra Pradesh Public Service Commission (APPSC)',
  official: OFFICIAL,
  seoTitle: 'APPSC Group 1 2026: Screening, Mains, Interview & Syllabus',
  metaDescription:
    'APPSC Group 1 guide — the screening test, seven descriptive mains papers, the 75-mark interview, negative marking, eligibility by post, fees and status.',
  lead: [
    'APPSC Group 1 is the senior recruitment in Andhra Pradesh: Deputy Collector, Deputy Superintendent of Police, Assistant Commissioner of State Tax, Regional Transport Officer, Municipal Commissioner and the other state-cadre posts that run a district between them. It is built like the civil services examination and, unlike its Telangana counterpart, it still ends the way that examination does — with an interview that carries marks.',
    'Three stages, and the first is discarded. A two-paper objective screening test shortlists; seven descriptive papers written by hand over a week build the merit list, two of them qualifying only; and a 75-mark personality test is added to the 750 mains marks for a total of 825. A candidate arriving from Telangana material — where the interview was abolished — is preparing for a different examination.',
  ],
  quickFacts: [
    ['Conducted by', 'Andhra Pradesh Public Service Commission'],
    ['Current status', 'The 2023 cycle reached provisional selection in January 2026; no new notification as at 11 September 2026'],
    ['Qualification', 'A bachelor’s degree; Fire Officer prefers fire engineering, and uniformed posts carry physical standards'],
    ['Stages', 'Objective screening test → seven descriptive mains papers → interview'],
    ['Total marks', '825 — five mains papers of 150, plus a 75-mark interview; the screening and the two language papers do not count'],
    ['Negative marking', 'One-third of a mark per wrong answer in the screening test'],
  ],
  overview: [
    {
      type: 'p',
      text: 'Group 1 fills the posts the state recruits directly into its senior executive and uniformed cadres. The 2023 notification listed fourteen post codes — from nine Deputy Collectors and twenty-six Deputy Superintendents of Police down to a single Fire Officer and a single Excise Superintendent — and an addendum added a fifteenth for Mandal Parishad Development Officers. Each post code carries its own age band and, for the uniformed posts, its own physical standard.',
    },
    {
      type: 'p',
      text: 'The examination has three properties worth understanding before committing to it. It is slow — the 2023 cycle took twenty-six months from notification to provisional selection, and the mains was postponed by eight months along the way. It is written in the literal sense: seven papers of three hours each, five of them marked, at a desk with a pen. And it is decided across three different tests — an objective screening that must be survived, a descriptive mains that is most of the result, and a board interview that is enough of it to move a rank.',
    },
    {
      type: 'list',
      title: 'What separates Group 1 from Group 2',
      items: [
        { text: 'The mains is descriptive', note: 'seven papers written by hand against the clock. Group 2 is objective throughout, and the two demand different preparation even where the syllabus overlaps.' },
        { text: 'There is an interview', note: 'a personality test of 75 marks under the 2023 scheme, called in a ratio of two candidates per vacancy. Group 2 has none; its result rests on the written papers and a qualifying computer test.' },
        { text: 'The posts carry executive authority', note: 'district administration, policing, taxation and transport, rather than the supervisory and ministerial posts most Group 2 appointments lead to.' },
        { text: 'The field is smaller but stronger', note: 'Group 1 attracts candidates also preparing for the civil services, which raises the standard of the written answers you are ranked against.' },
      ],
    },
    {
      type: 'note',
      title: 'Screening marks do not survive the stage',
      text: 'The screening test decides who writes the mains and nothing else — the notification states that selection is on the merit of the main written examination and the interview. Candidates routinely over-invest in objective practice and arrive at the mains having never written a timed answer. Prepare for the mains from the first month, and treat the screening as a filter to pass rather than a paper to top.',
    },
  ],
  stages: [
    {
      name: 'Screening test',
      mode: 'Objective, OMR — screening only',
      detail:
        'Two papers of 120 questions and 120 marks in 120 minutes: general studies in four parts, then general aptitude covering mental ability, science and technology and current events. One-third negative marking. Shortlists for the mains in a ratio the commission fixes, with relaxed standards permitted for reserved categories, and the marks are then discarded.',
    },
    {
      name: 'Main examination',
      mode: 'Descriptive, written by hand',
      detail:
        'Seven papers of three hours each. Telugu and English are qualifying only. Papers I to V — general essay; history, culture and geography of India and Andhra Pradesh; polity, constitution, governance, law and ethics; economy and development of India and Andhra Pradesh; science, technology and environment — carry 150 marks each and build the merit list.',
    },
    {
      name: 'Interview',
      mode: 'Personality test, 75 marks',
      detail:
        'Candidates are called in a ratio of two per vacancy on mains merit. The 75 marks are added to the 750 mains marks for a total of 825. In the 2023 cycle interviews ran from June to July 2025 with a further sitting in January 2026.',
    },
    {
      name: 'Verification, medical and selection',
      mode: 'Documents, physical standards, provisional list',
      detail:
        'Certificate verification, physical and medical standards for the uniformed posts, and a provisional selection list by post code and zone. There is no waiting list.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The current Group 1 cycle is Notification No. 12/2023 of 8 December 2023. Its provisional selection of 87 candidates was published on 30 January 2026 and remains subject to pending writ petitions. No new Group 1 notification had been issued at the date checked, though the state’s 2026 job calendar names 15 September 2026 as the notification date for a Group 1 round of 149 posts.`,
    },
    {
      type: 'table',
      caption: 'The 12/2023 cycle, end to end. The eight-month slip in the mains date is the thing to plan around.',
      head: ['Stage', 'When'],
      rows: [
        ['Notification issued', '8 December 2023, with the detailed notification on 27 December'],
        ['Applications', '1 to 21 January 2024'],
        ['Addendum', '16 March 2024 — eight carried-forward vacancies added, including a new post code for Mandal Parishad Development Officer, taking the total from 81 to 89'],
        ['Screening test', '17 March 2024; qualified list published 12 April 2024'],
        ['Main examination', 'First announced for September 2024; held 3 to 9 May 2025, with the question paper displayed on tablets'],
        ['Mains results', 'June 2025, with a revised result and a supplementary sports-quota result on 2 January 2026'],
        ['Interview', '23 June to 15 July 2025, and 7 January 2026'],
        ['Provisional selection', '30 January 2026 — 87 candidates against 89 vacancies'],
      ],
    },
    {
      type: 'note',
      title: 'Two vacancies are held by High Court order',
      text: 'The selection notification states that the list is subject to the outcome of three writ petitions pending before the High Court of Andhra Pradesh. One Assistant Commissioner of State Tax vacancy is kept reserved under an interim order of 7 January 2026, one Deputy Superintendent of Police vacancy is kept vacant under an interim order of 6 January 2026, and one Mandal Parishad Development Officer selection is marked subject to a pending petition. The subject matter of the petitions is not stated in any commission document. A place on the provisional list is not an appointment.',
    },
    {
      type: 'list',
      title: 'Where the 89 vacancies sat',
      items: [
        { text: 'Deputy Superintendent of Police — 26', note: 'the largest post code, with a 21 to 30 age band and physical standards.' },
        { text: 'Assistant Commissioner of State Tax — 18', note: 'the second largest, at 18 to 42.' },
        { text: 'Deputy Collector 9, Regional Transport Officer 6, Deputy Registrar of Cooperative Societies 6', note: 'the next tier.' },
        { text: 'Fifteen post codes in all', note: 'down to single vacancies for Deputy Superintendent of Jails, District BC Welfare Officer and Assistant Excise Superintendent.' },
      ],
    },
    {
      type: 'note',
      title: 'What the 2026 job calendar schedules',
      text: 'The state’s job calendar for 2026, issued by government order on 22 August 2026, sets 15 September 2026 as the notification date for a second phase that includes 149 Group 1 posts — the calendar lists Deputy Superintendents of Police, Divisional Development Officers, Assistant Commissioners of State Tax, Assistant Audit Officers, Municipal Commissioners, Deputy Collectors, Deputy Registrars and others. The calendar was read from a copy rather than from the government orders portal, and a calendar date is not a notification: the age rule, the fee and the scheme for the new cycle will be set by the notification when it appears on the commission’s list.',
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'Group 1 Notification No. 12/2023 — landing page', href: AP_GROUP_1_SRC.landing },
        { label: 'APPSC selection lists', href: AP_GROUP_1_SRC.selectionLists },
      ],
    },
  ],
  eligibility: [
    {
      type: 'p',
      text: 'Group 1 does not have one eligibility rule — it has fifteen, one per post code. The degree requirement is nearly uniform; the age bands and the physical standards are not. Figures below are from Notification No. 12/2023, with age reckoned as on 1 July 2023 and including the one-off relaxation granted by government orders of October 2023.',
    },
    {
      type: 'table',
      caption: 'Eligibility under Notification No. 12/2023. A future notification will set its own reckoning date and may not carry the 2023 relaxation forward.',
      head: ['Requirement', 'What the notification set'],
      rows: [
        ['Qualification', 'A bachelor’s degree of a recognised university for every post, held as on the notification date of 8 December 2023. The Fire Officer post asks for a degree in fire engineering, falling back to any degree if none are available; the District Social Welfare Officer post prefers sociology or social work.'],
        ['Age — most posts', '18 to 42 years: Deputy Collector, Assistant Commissioner of State Tax, RTO, the welfare officer posts, Deputy Registrar, Municipal Commissioner, the accounts and audit posts, District Employment Officer and MPDO.'],
        ['Age — uniformed posts', 'Deputy Superintendent of Police 21 to 30; Deputy Superintendent of Jails 18 to 30; Fire Officer 21 to 28; Assistant Excise Superintendent 18 to 28.'],
        ['Age relaxation', 'SC, ST, BC and EWS candidates 5 years; persons with benchmark disability 10 years; ex-servicemen and NCC instructors 3 years plus service, not exceeding the post’s ceiling after deduction; state government employees up to 5 years by regular service; retrenched census employees 3 years.'],
        ['Physical standards', 'DSP, Jails and Fire: height 167.6 cm and chest 86.3 cm with 5 cm expansion, relaxed to 164 cm and 83.8 cm for ST candidates; women DSP candidates 152.5 cm and 45.5 kg. Excise: 165 cm and chest 81 cm with 5 cm expansion. Vision standards apply to DSP and Fire.'],
        ['Application processing fee', '₹250, payable by every applicant.'],
        ['Examination fee', '₹120, from which SC, ST, BC, disabled and ex-servicemen candidates, white-card household families and unemployed youth on declaration were exempt. Candidates of other states get no exemption except for disability or ex-service status.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group 1 scheme of examination under the 2023 notification. The screening test and the two language papers do not count; the five marked mains papers and the interview total 825.',
      head: ['Stage or paper', 'Subject', 'Type', 'Duration', 'Marks'],
      rows: [
        ['Screening — Paper I', 'General Studies: history and culture; constitution, polity, social justice and international relations; Indian and Andhra Pradesh economy and planning; geography — 30 marks each', 'Objective, 120 questions', '120 minutes', '120, not counted'],
        ['Screening — Paper II', 'General Aptitude: mental ability, administrative and psychological abilities 60; science and technology 30; current events 30', 'Objective, 120 questions', '120 minutes', '120, not counted'],
        ['Mains — Telugu', 'Qualifying language paper', 'Descriptive', '3 hours', '150, not counted'],
        ['Mains — English', 'Qualifying language paper', 'Descriptive', '3 hours', '150, not counted'],
        ['Mains — Paper I', 'General Essay', 'Descriptive', '3 hours', '150'],
        ['Mains — Paper II', 'History, Culture and Geography of India and Andhra Pradesh', 'Descriptive', '3 hours', '150'],
        ['Mains — Paper III', 'Polity, Constitution, Governance, Law and Ethics', 'Descriptive', '3 hours', '150'],
        ['Mains — Paper IV', 'Economy and Development of India and Andhra Pradesh', 'Descriptive', '3 hours', '150'],
        ['Mains — Paper V', 'Science, Technology and Environmental Issues', 'Descriptive', '3 hours', '150'],
        ['Interview', 'Personality test', 'Oral', '—', '75'],
      ],
    },
    {
      type: 'note',
      title: 'The interview is real, and it is 75 marks',
      text: 'The scheme table in the 2023 notification lists the interview at 75 marks and the total at 825, and the detailed notification provides for candidates to be called at a ratio of two per vacancy. Interviews were held in the 2023 cycle. This is the reverse of the position in Telangana, whose Group 1 scheme has no interview, and it is the single most consequential difference between the two commissions’ senior examinations. Confirm it in the notification for your own cycle before planning around either answer.',
    },
    {
      type: 'list',
      title: 'The rules that decide who progresses',
      items: [
        { text: 'One-third negative marking in the screening', note: 'quoted from G.O.Ms.No.235 of December 2016 in the notification: each wrong answer is penalised with a third of the marks for the question. The descriptive mains carries no such rule.' },
        { text: 'The language papers can end a candidacy on their own', note: 'Telugu and English are qualifying at 40 per cent for OC, EWS and sportspersons, 35 for BC and 30 for SC, ST and disabled candidates. They carry no merit marks and they remove candidates.' },
        { text: 'One medium for all five marked papers', note: 'English, Telugu or Urdu, chosen once. The screening paper is set in English and translated to Telugu, with the English version authentic.' },
        { text: 'Aggregate qualifying marks apply to the whole', note: 'the same 40, 35 and 30 per cent thresholds on the aggregate for selection.' },
        { text: 'Objections to the screening key cost ₹100 a question', note: 'refunded if sustained.' },
        { text: 'There is no waiting list', note: 'under a 1997 government order. Unfilled vacancies are carried forward to the next notification.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for an examination decided in writing and then in a room',
      items: [
        { text: 'Write from month one, not after the screening result', note: 'the screening is worth nothing and the mains is 750 of the 825. Candidates who postpone writing practice until they have cleared the screening spend the decisive interval learning a skill instead of sharpening it.' },
        { text: 'Learn to leave a screening question blank', note: 'a third of a mark per wrong answer means a blind guess loses on average. Score every practice paper with the penalty and settle the rule you guess by before the day.' },
        { text: 'Build one Andhra Pradesh file that serves three papers', note: 'the state’s history, culture and geography feed Paper II, its economy and development Paper IV, and its administration and the bifurcation the essay and Paper III. Four papers, one state, one body of reading.' },
        { text: 'Prepare Paper III as three subjects', note: 'polity and constitution, governance and law, and ethics. The ethics component is the one candidates from a general studies background prepare least and the one that most rewards structured answers.' },
        { text: 'Do not neglect the language papers', note: 'they carry no merit marks and they remove candidates every cycle. A few hours a week of timed Telugu and English composition is enough; nothing is not.' },
        { text: 'Rehearse the handwriting load', note: 'seven three-hour descriptive papers inside a week is a physical task as much as an intellectual one. Legibility and speed at the end of the third hour are trainable, and only by training them.' },
        { text: 'Prepare the interview from your own form', note: 'district, degree subject, employment, stated interests and the state’s live administrative questions. The board reads the application; every line on it is inside the syllabus of the personality test.' },
      ],
    },
    {
      type: 'note',
      title: 'Prepare for a long gap and a moving date',
      text: 'In the 2023 cycle the screening was held three months after the notification, the mains fourteen months after that — eight months later than first announced — and the provisional selection twenty-six months from the start. Plan preparation as a long project and use the interval after the screening for mains writing practice, because that is the gap in which the result is actually decided.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination, the negative-marking clause and the interview provision are taken from Notification No. 12/2023, its detailed notification and the addendum of March 2024; the chronology and the litigation caveat from the commission’s selection notification of January 2026. Unlike most APPSC recruitments, Group 1 has a real archive: the commission publishes the mains question papers, and the 2011, 2016, 2018, 2022 and 2023 cycles are all there. The screening papers are available as final keys in question-paper format.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'Notification No. 12/2023 with scheme and syllabus', href: AP_GROUP_1_SRC.notification },
        { label: 'Detailed notification, 27 December 2023', href: AP_GROUP_1_SRC.detailed },
        { label: 'Addendum, 16 March 2024', href: AP_GROUP_1_SRC.addendum },
        { label: 'Provisional selection notification, 30 January 2026', href: AP_GROUP_1_SRC.selection },
        { label: 'APPSC old question papers archive — Group 1 mains papers', href: APPSC.oldPapers },
        { label: 'APPSC final answer keys — screening papers', href: APPSC.keys },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'APPSC Group 1 syllabus — the two screening papers and the five marked mains papers, with the Andhra Pradesh layer that runs through every one of them.',
      lead: [
        'The syllabus reads as a general studies list with an Andhra Pradesh layer running through it. That layer is not decoration: it is where the marks that separate candidates sit.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Screening — Paper I, General Studies',
              'Four parts of 30 marks: the history and culture of India and Andhra Pradesh; the Constitution, polity, social justice and international relations; the economy and planning of India and Andhra Pradesh; and geography. A single retrievable fact per question.',
            ],
            [
              'Screening — Paper II, General Aptitude',
              'General mental ability, administrative and psychological abilities for 60 marks; science and technology for 30; current events of regional, national and international importance for 30. The half of the screening that rewards drilled method over reading.',
            ],
            [
              'Mains — Paper I, General Essay',
              'Essays on themes drawn from public affairs, social questions, economic policy and Andhra Pradesh-specific topics. Marked on structure, evidence and balance rather than on length.',
            ],
            [
              'Mains — Paper II, History, Culture and Geography of India and Andhra Pradesh',
              'Indian history and culture with weight on the modern period; the history and cultural heritage of Andhra Pradesh — its dynasties, literature, movements and the road to the residuary state; and the physical, economic and social geography of India and of the state.',
            ],
            [
              'Mains — Paper III, Polity, Constitution, Governance, Law and Ethics',
              'The Constitution, its features and the distribution of powers; governance, public administration and accountability; the legal framework an administrator works within; and ethics, integrity and aptitude for public service — examined as a component of its own.',
            ],
            [
              'Mains — Paper IV, Economy and Development of India and Andhra Pradesh',
              'The Indian economy, planning and public finance; and the economy of Andhra Pradesh specifically — its resources, agriculture, irrigation, industry, the capital question and the state’s own development programmes since the bifurcation.',
            ],
            [
              'Mains — Paper V, Science, Technology and Environmental Issues',
              'The role of science and technology in development, its applications in agriculture, health, energy and communication, current developments, and environmental issues, disaster management and sustainable development.',
            ],
            [
              'Mains — Telugu and English',
              'Qualifying papers testing comprehension, précis, translation and composition. They carry no merit marks, and they end candidacies — because they are the papers candidates prepare for last.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Two syllabus lines deserve to be read as instructions rather than as topics. The Andhra Pradesh clause in Papers II and IV means state history and state economy at a depth national material does not reach. And "law and ethics" in Paper III means a component with its own question types — case-based, situational, argued — which a candidate who prepared polity alone will meet for the first time in the hall.',
        },
        {
          type: 'links',
          title: 'Where to build each layer',
          items: [
            { label: 'Notification No. 12/2023 with full syllabus', href: AP_GROUP_1_SRC.notification },
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'APPSC Group 1 exam pattern — how the screening shortlists, how the seven descriptive mains papers are marked, and where the 75-mark interview fits.',
      lead: [
        'Three stages, and the first does not count. Knowing which stage carries which marks changes how a year of preparation is spent.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes to the final 825.',
          head: ['Stage', 'Format', 'Counts?', 'What it decides'],
          rows: [
            ['Screening test', 'Two objective papers, 240 marks', 'No', 'Who writes the mains, in a ratio the commission fixes'],
            ['Mains — Telugu and English', 'Descriptive, qualifying', 'No', 'Whether the rest of the mains is evaluated at all'],
            ['Mains — Papers I to V', 'Descriptive, 750 marks', 'Yes', 'Most of the rank'],
            ['Interview', 'Personality test, 75 marks', 'Yes', 'Movement within a band, and service allotment at the margin'],
          ],
        },
        {
          type: 'p',
          text: 'The consequence of that table is a planning rule. The mains is worth ten times the interview and the screening is worth nothing at all, so preparation time should go to writing practice long before the screening result arrives. Candidates who begin mains preparation after clearing the screening are learning to write descriptive answers in the weeks when they should be revising them.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The penalty applies to the screening only', note: 'a third of a mark per wrong answer in the objective papers. The descriptive mains carries none.' },
            { text: 'The language papers are qualified individually', note: 'each at 40, 35 or 30 per cent by category, before the marked papers count.' },
            { text: 'The interview ratio is two per vacancy', note: 'so roughly half of those interviewed are not selected. The mains rank going in is most of the result coming out.' },
            { text: 'The screening is set in English and translated', note: 'the English version is authentic where the two differ.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'APPSC Group 1 previous papers — the commission’s archive of mains papers across five cycles, the screening papers as keys, and how to work them.',
      lead: [
        'Group 1 is the one APPSC recruitment with a real archive. The commission publishes the mains question papers, and five cycles are there to work.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The old question papers page holds the Group 1 mains papers — Telugu, English and Papers I to V — for the 2011, 2016, 2018, 2022 and 2023 cycles, and the 2016 screening test. The 2023 screening papers are on the keys page as final keys in question-paper format. That is more official material than exists for any other APPSC group, and it is enough to see how the descriptive papers are phrased, how the Andhra Pradesh questions are set, and how the essay topics have moved.',
        },
        {
          type: 'list',
          title: 'How to work the mains papers',
          items: [
            { text: 'Write full answers to time, not notes', note: 'reading a good answer teaches you what one looks like; writing a bad one under a clock teaches you your own pace, which is what the examination tests.' },
            { text: 'Track the essay topics across cycles', note: 'state policy, social questions and national debates, in roughly stable proportions. The 2023 essay paper is the most recent evidence of the balance.' },
            { text: 'Mine the Andhra Pradesh questions from every paper', note: 'history, geography, economy and administration of the state recur in Papers II and IV and inside the essay. Collected into one file, they are the most exam-specific revision document available.' },
            { text: 'Work the older papers for the subject, not the scheme', note: 'the 2011 and 2016 papers were set under earlier schemes. The subject matter carries; the paper structure does not.' },
          ],
        },
        {
          type: 'note',
          title: 'Use the screening keys as practice papers',
          text: 'The final keys for the 2023 screening test are published in question-paper format — the questions with the correct options marked. Cover the marks, sit the paper to time with the one-third penalty applied, then check. It is the only official screening practice available for the current scheme.',
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'APPSC old question papers archive — Group 1 mains', href: APPSC.oldPapers },
            { label: '2023 mains Paper I, General Essay', href: AP_GROUP_1_SRC.essay2025 },
            { label: 'APPSC final answer keys — 2023 screening papers', href: APPSC.keys },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'APPSC Group 1 mock tests — timed screening papers with the penalty applied, and a weekly descriptive habit that starts before the screening.',
      lead: [
        'Two kinds of test, and the second matters ten times more than the first. Most candidates do the first kind.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A descriptive paper every week, from the start', text: 'One of the five marked papers, three hours, by hand, to the question types of the archived papers. Scored against a model, and reread a month later.' },
            { title: 'A screening paper fortnightly', text: 'Both papers, 240 questions in 240 minutes, with a third of a mark off per wrong answer. Learn from the score when to leave a question.' },
            { title: 'A language sitting monthly', text: 'One Telugu and one English composition to time. These papers remove candidates who never practised them.' },
            { title: 'A full mains simulation before the mains', text: 'Seven papers across a week, in order, to find where concentration and handwriting actually fail.' },
            { title: 'Mock interviews from your own form', text: 'Once the mains is written. The board reads the application; rehearse from it.' },
          ],
        },
        {
          type: 'note',
          title: 'Score the screening with the penalty or it measures the wrong thing',
          text: 'A screening mock scored without the one-third deduction rewards guessing that the real paper punishes. Score every practice paper as the commission scores it, compare the mark with the mark you would have had on unanswered guesses, and change the rule you guess by until the guesses stop costing you.',
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
        'APPSC Group 1 preparation — a realistic plan across the screening, the seven mains papers and the interview, with the Andhra Pradesh layer built in early.',
      lead: [
        'A twelve-month plan for an examination that takes two years to run. The gaps between stages are where it is decided.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A twelve-month plan',
          items: [
            { title: 'Months one to three — the foundation, written', text: 'The general studies syllabus across history, polity, economy, geography and science, with the Andhra Pradesh layer built in rather than added on. One handwritten answer a day from the first week.' },
            { title: 'Months four to six — the state and the ethics', text: 'Andhra Pradesh history, economy and administration as a body of reading that serves three papers. Paper III’s law and ethics component as a subject of its own, with case-based practice.' },
            { title: 'Months seven to nine — papers under the clock', text: 'Weekly descriptive papers, fortnightly screening papers with the penalty, monthly language sittings. The archived mains papers as the question bank.' },
            { title: 'Months ten to twelve — hold and sharpen', text: 'Maintenance rather than new material. The notification may take a year to arrive and the mains may move by eight months once it has; a routine that survives that beats a peak timed to a date.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2023 cycle taught',
          items: [
            { text: 'The mains date is not the mains date', note: 'first announced for September 2024, held in May 2025. A candidate who peaked for the first date was eight months past it by the second.' },
            { text: 'The paper may be on a screen', note: 'the 2025 mains displayed the question paper on tablets while answers were written by hand. Rehearse reading from a screen and writing on paper.' },
            { text: 'Two vacancies were held by court order', note: 'and the whole list is subject to pending petitions. A provisional selection is not an appointment.' },
            { text: 'Uniformed posts have their own age and their own body', note: 'DSP at 21 to 30 with height, chest and vision standards. Check the post code before the syllabus.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'APPSC Group 1 study material — what to read for each mains paper, and how to assemble the Andhra Pradesh layer from primary sources.',
      lead: [
        'The national reading list is standard. The state layer has to be assembled, and that assembly is where the marks are.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by paper. The Andhra Pradesh column is the part no national text covers.',
          head: ['Paper', 'National reading', 'Andhra Pradesh reading'],
          rows: [
            ['Screening', 'Standard degree-level general studies texts; a reasoning and data interpretation drill; a current affairs digest', 'The state’s geography, economy and administration as facts; the bifurcation and its implications'],
            ['Paper I — Essay', 'Editorial reading across public policy and social questions; essay practice to a plan', 'The state’s live debates — the capital, irrigation, welfare delivery, industrial policy — argued with specifics'],
            ['Paper II — History, culture, geography', 'Modern Indian history and culture; Indian geography', 'The dynasties, literature and movements of Andhra Pradesh; the road to statehood and to the residuary state; the state’s physical and economic geography'],
            ['Paper III — Polity, governance, law, ethics', 'The Constitution and polity; public administration; an ethics and integrity reader with case studies', 'The state’s administrative structure, the Reorganisation Act, and its governance reforms'],
            ['Paper IV — Economy and development', 'The Indian economy, planning and public finance', 'The state’s socio-economic survey, its budget, its agriculture, irrigation and industrial policy since 2014'],
            ['Paper V — Science, technology, environment', 'A science and technology reader; environment and disaster management', 'The state’s energy, water and disaster profile'],
            ['Telugu and English', 'A grammar and composition reference in each; weekly timed writing', '—'],
          ],
        },
        {
          type: 'note',
          title: 'One Andhra Pradesh file, three papers',
          text: 'The state’s history serves Paper II, its economy Paper IV, and its administration and reorganisation the essay and Paper III. Build the Andhra Pradesh layer once, as a single file with sections, and revise it as a subject rather than as three sets of topics. It is the reading that separates candidates, and it is the reading a candidate from the civil services track has not done.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is there an interview in APPSC Group 1?',
      a: 'Yes. Under the 2023 scheme the interview — a personality test — carries 75 marks, added to the 750 marks of the five marked mains papers for a total of 825. Candidates are called at a ratio of two per vacancy on mains merit, and interviews were held in the 2023 cycle in June and July 2025 and January 2026. This is the reverse of the position in Telangana, whose Group 1 has no interview.',
    },
    {
      q: 'Is any APPSC Group 1 notification open right now?',
      a: 'No. As at 11 September 2026 the most recent notification was No. 12/2023, whose provisional selection was published in January 2026. The state’s 2026 job calendar names 15 September 2026 as the notification date for a Group 1 round of 149 posts, but a calendar date is not a notification — the commission’s own list is the only source that is.',
    },
    {
      q: 'What is the APPSC Group 1 exam pattern?',
      a: 'Three stages. A screening test of two objective papers — general studies and general aptitude — of 120 questions and 120 marks each, with one-third negative marking, which shortlists and is then discarded. A descriptive mains of seven three-hour papers: Telugu and English qualifying only, then general essay, history-culture-geography, polity-governance-law-ethics, economy-development and science-technology-environment at 150 marks each. Then a 75-mark interview. Selection is on the 825 marks of the five papers and the interview.',
    },
    {
      q: 'Is there negative marking in APPSC Group 1?',
      a: 'In the screening test, yes — one-third of the marks for the question for each wrong answer, under G.O.Ms.No.235 of December 2016 quoted in the notification. The mains is descriptive and carries no such rule.',
    },
    {
      q: 'What are the APPSC Group 1 age limits?',
      a: 'In the 2023 cycle, reckoned as on 1 July 2023: 18 to 42 for most posts, but 21 to 30 for Deputy Superintendent of Police, 18 to 30 for Deputy Superintendent of Jails, 21 to 28 for Fire Officer and 18 to 28 for Assistant Excise Superintendent. Relaxation of five years applies to SC, ST, BC and EWS candidates and ten to candidates with benchmark disability. The 2023 figures include a one-off relaxation; a new notification will set its own.',
    },
    {
      q: 'What was the APPSC Group 1 fee?',
      a: 'An application processing fee of ₹250, payable by everyone, and an examination fee of ₹120, from which SC, ST, BC, disabled and ex-servicemen candidates, white-card household families of Andhra Pradesh and unemployed youth on declaration were exempt.',
    },
    {
      q: 'Does APPSC publish Group 1 previous papers?',
      a: 'Yes — Group 1 has the best archive of any APPSC recruitment. The old question papers page holds the mains papers for the 2011, 2016, 2018, 2022 and 2023 cycles, and the 2016 screening test. The 2023 screening papers are published on the keys page as final keys in question-paper format.',
    },
    {
      q: 'How long does APPSC Group 1 take?',
      a: 'The 2023 cycle took twenty-six months: notification in December 2023, screening in March 2024, mains in May 2025 after an eight-month postponement, interviews from June 2025, and provisional selection in January 2026 — a list still subject to pending writ petitions. Plan preparation as a long project.',
    },
    {
      q: 'Which posts are filled through APPSC Group 1?',
      a: 'In the 2023 cycle, fifteen post codes: Deputy Collector, Deputy Superintendent of Police, Assistant Commissioner of State Tax, Deputy Superintendent of Jails, Fire Officer, Regional Transport Officer, the district welfare officer posts, Deputy Registrar of Cooperative Societies, Municipal Commissioner Grade-II, Assistant Excise Superintendent, the treasury and audit officer posts, District Employment Officer and — by addendum — Mandal Parishad Development Officer. The exact list and the vacancies in each are set by the notification.',
    },
  ],
}

/* ── APPSC Group 2 ──────────────────────────────────────────────
   Objective throughout: a screening test, two mains papers and a qualifying
   computer proficiency test, with no interview. The 11/2023 cycle reached
   provisional selection in January 2026 after two mains postponements. */
const AP_GROUP_2_SRC = {
  landing: 'https://portal-psc.ap.gov.in/HomePages/GroupII_Notification_11_2023.aspx',
  notification: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Notfn_%20Group-II_2023%20with%20Syllabus_112023_07122023.pdf',
  detailed: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Details%20for%20Group-II%20Notfn_No_11_2023_20122023.pdf',
  syllabus: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Syllabus%20for%20GROUP%20II%20Services_01052023.pdf',
  selection: 'https://psc.ap.gov.in/Documents/NotificationDocuments/SelectionNotification_112023_28012026.pdf',
  screening2016: 'https://psc.ap.gov.in/Documents/NotificationDocuments/Group-II%20Screening%20Test%20Not.No.18-2016.pdf',
  screeningKey2023: 'https://psc.ap.gov.in/Documents/KEYS/112023/FinalKeys/Group-II_ScreeningTest_11_2023_FinalKey.pdf',
}

const AP_GROUP_2 = {
  slug: 'appsc-group-2',
  path: '/government-exams/state/andhra-pradesh/appsc-group-2/',
  name: 'APPSC Group 2',
  fullName: 'Andhra Pradesh Public Service Commission Group 2 Services',
  authority: 'Andhra Pradesh Public Service Commission (APPSC)',
  official: OFFICIAL,
  seoTitle: 'APPSC Group 2 2026: Screening, Mains, CPT & Syllabus',
  metaDescription:
    'APPSC Group 2 guide — the screening test, two-paper objective mains, the qualifying computer proficiency test, negative marking, eligibility, fees and status.',
  lead: [
    'APPSC Group 2 is the recruitment that fills the state’s executive and ministerial middle: Deputy Tahsildars, Prohibition and Excise Sub-Inspectors, Assistant Section Officers in the Secretariat, Sub-Registrars, Assistant Registrars of Cooperative Societies, auditors, accountants and — in the 2023 cycle — Junior Assistants across forty-one departments. It is the largest APPSC recruitment by vacancy count and by field.',
    'It is objective throughout, but it is not one examination. A screening test shortlists and is discarded; a two-paper mains builds the merit list; and a practical computer proficiency test stands between the merit list and appointment. Half of the mains is Andhra Pradesh — the social and cultural history of the state, its economy — and one-third of a mark is deducted for every wrong answer at both written stages.',
  ],
  quickFacts: [
    ['Conducted by', 'Andhra Pradesh Public Service Commission'],
    ['Current status', 'The 2023 cycle reached provisional selection in January 2026; no new notification as at 11 September 2026'],
    ['Qualification', 'A bachelor’s degree; law, commerce and computer qualifications for specific post codes'],
    ['Stages', 'Objective screening test → two objective mains papers → qualifying computer proficiency test'],
    ['Marks that count', '300 — two mains papers of 150; the screening does not carry forward'],
    ['Negative marking', 'One-third of a mark per wrong answer, in both the screening and the mains'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2023 notification split its 897 vacancies into an executive list — Deputy Tahsildar, Excise Sub-Inspector, Sub-Registrar, Municipal Commissioner Grade-III, Assistant Labour Officer, Assistant Registrar — and a non-executive list of Secretariat Assistant Section Officers, auditors, accountants and Junior Assistants. The same two mains papers rank every candidate; the post-code preferences submitted at verification, the zone and the reservation roster decide who gets which post.',
    },
    {
      type: 'p',
      text: 'The examination has three properties worth understanding. Its mains is half Andhra Pradesh — a 75-mark section on the social and cultural history of the state and a section on its economy — which no national state-PSC material prepares for. It penalises every wrong answer by a third of a mark, at the screening and at the mains, so guessing is a decision rather than a reflex. And it does not end with the written result: the computer proficiency test is practical, timed and qualifying, and no candidate is appointed without passing it.',
    },
    {
      type: 'list',
      title: 'What separates Group 2 from Group 1',
      items: [
        { text: 'Objective throughout', note: 'the screening, the mains and even the proficiency test are marked by machine. Group 1’s mains is seven descriptive papers written by hand.' },
        { text: 'No interview', note: 'the 2023 scheme carries none, and the selection clause reads merit in the main examination. Group 1 adds a 75-mark personality test.' },
        { text: 'A larger field for more posts', note: 'nearly nine hundred vacancies against Group 1’s eighty-nine, and a field measured in lakhs at the screening.' },
        { text: 'The proficiency test is the last gate', note: 'sixty minutes of office software under a 2023 government order, qualifying by category. Group 1 has no such stage.' },
      ],
    },
    {
      type: 'note',
      title: 'The screening admits you and then disappears',
      text: 'The notification states that selection is on the merit of the main examination. The screening test shortlists in a ratio the commission fixes, with relaxed standards permitted for reserved categories, and its marks are then discarded. Prepare for the mains from the first week — the screening syllabus is a subset of it, and a candidate who prepares "for the screening" prepares for it twice.',
    },
  ],
  stages: [
    {
      name: 'Screening test',
      mode: 'Objective, OMR — screening only',
      detail:
        'One paper of 150 questions and 150 marks in 150 minutes: general studies and mental ability in five parts of 30 — Indian history, geography, Indian society, current affairs and mental ability. One-third negative marking. Shortlists for the mains and is then discarded.',
    },
    {
      name: 'Main examination',
      mode: 'Objective, OMR or computer-based at the commission’s discretion',
      detail:
        'Two papers of 150 questions, 150 marks and 150 minutes. Paper I: the social and cultural history of Andhra Pradesh for 75 and a general overview of the Indian Constitution for 75. Paper II: the Indian and Andhra Pradesh economy, and science and technology. One-third negative marking. The 300 marks build the merit list.',
    },
    {
      name: 'Certificate verification and computer proficiency test',
      mode: 'Documents, then a practical test',
      detail:
        'Candidates shortlisted on mains merit produce originals for verification, submit post-code and zone preferences, and sit a 60-minute, 100-mark test of proficiency in office automation — qualifying at 40 for OC, 35 for BC and 30 for SC, ST and disabled candidates. Physical standards are verified by medical board for the Excise Sub-Inspector post.',
    },
    {
      name: 'Provisional selection',
      mode: 'Merit and preference',
      detail:
        'Selection on mains merit among candidates who have qualified the proficiency test, allotted to post and zone by preference under the reservation roster.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The current Group 2 cycle is Notification No. 11/2023 of 7 December 2023. Its provisional selection of 891 candidates was published on 28 January 2026 after certificate verification, the computer proficiency test and medical boards, and remains subject to pending writ petitions. No new Group 2 notification had been issued at the date checked, though the state’s 2026 job calendar names 15 October 2026 as the notification date for a Group 2 round of 673 posts.`,
    },
    {
      type: 'table',
      caption: 'The 11/2023 cycle, end to end. The mains was postponed twice.',
      head: ['Stage', 'When'],
      rows: [
        ['Notification issued', '7 December 2023, with the detailed notification on 20 December'],
        ['Applications', '21 December 2023 to 10 January 2024'],
        ['Screening test', '25 February 2024; qualified list published 10 April 2024'],
        ['Main examination', 'Announced for 28 July 2024, rescheduled to 5 January 2025, then to 23 February 2025, when it was held'],
        ['Mains results', '4 April 2025, with further result notifications in July and September 2025'],
        ['Verification, proficiency test and medical boards', 'Through 2025'],
        ['Provisional selection', '28 January 2026 — 891 candidates'],
      ],
    },
    {
      type: 'note',
      title: 'The selection is provisional and litigation is pending',
      text: 'The selection notification states that the list is subject to the outcome of writ petitions pending before the High Court of Andhra Pradesh, and marks certain candidates’ posts and zones as subject to variation depending on two named petitions. The subject matter of the petitions is not stated in any commission document. A place on the provisional list is not an appointment.',
    },
    {
      type: 'list',
      title: 'Where the 897 vacancies sat',
      items: [
        { text: 'Assistant Section Officer, General Administration — 218', note: 'the largest single post code, with a further 53 ASO posts in Law, the Legislature and Finance. State-cadre Secretariat posts.' },
        { text: 'Prohibition and Excise Sub-Inspector — 150; Deputy Tahsildar — 114', note: 'the largest executive posts. The excise post carries a lower age ceiling and physical standards.' },
        { text: 'Junior Assistant across forty-one departments', note: 'from 32 in the commission’s own office and 31 in the Chief Commissioner of Land Administration down to single posts — 41 post codes in the non-executive list.' },
        { text: 'Fifty-nine post codes in all', note: 'executive 331, non-executive 566. Which list a post is on and which zone it belongs to decides the pool you compete in.' },
      ],
    },
    {
      type: 'note',
      title: 'What the 2026 job calendar schedules',
      text: 'The state’s job calendar for 2026, issued by government order on 22 August 2026, sets 15 October 2026 as the notification date for a third phase that includes 673 Group 2 posts — the calendar lists Deputy Tahsildars, Deputy MPDOs, Senior Accountants, Assistant Section Officers, Junior Accountants, GST Officers, Excise Sub-Inspectors and others. The calendar was read from a copy rather than from the government orders portal, and a calendar date is not a notification. Figures circulating for a September date or a different vacancy count do not match the calendar.',
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'Group 2 Notification No. 11/2023 — landing page', href: AP_GROUP_2_SRC.landing },
        { label: 'APPSC selection lists', href: AP_GROUP_1_SRC.selectionLists },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Eligibility under Notification No. 11/2023, with age reckoned as on 1 July 2023. A future notification will set its own reckoning date.',
      head: ['Requirement', 'What the notification set'],
      rows: [
        ['Qualification', 'A bachelor’s degree of a recognised university for most posts, held as on the notification date of 7 December 2023.'],
        ['Degree-specific posts', 'Assistant Section Officer (Law) required a law degree; ASO (Finance) a degree with economics, commerce or mathematics; Senior Accountant posts a degree in commerce, economics or mathematics, with the head-office post also requiring a technical board computer certificate or a computer-stream degree; Assistant Development Officer accepted a technical board diploma in textile or handloom technology. Sub-Registrar gave preference to a law degree.'],
        ['Age', '18 to 42 years for most posts; Sub-Registrar 20 to 42; Prohibition and Excise Sub-Inspector 18 to 30.'],
        ['Age relaxation', 'SC, ST, BC and EWS candidates 5 years, with SC and ST candidates for carried-forward vacancies 10; persons with benchmark disability 10 years; ex-servicemen and NCC instructors 3 years plus service; state government employees up to 5 years; widowed, divorced or judicially separated women not remarried, up to 48 for SC and ST and 43 for others in Junior Assistant posts.'],
        ['Physical standards', 'Prohibition and Excise Sub-Inspector only, verified by medical board at the selection stage.'],
        ['Application processing fee', '₹250, payable by every applicant.'],
        ['Examination fee', '₹80, from which SC, ST, BC, disabled and ex-servicemen candidates, white-card household families and unemployed youth on declaration were exempt.'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The Group 2 scheme of examination under the 2023 notification, fixed by government order in January 2023. Every paper is objective at degree standard; one-third of a mark is deducted per wrong answer at both stages.',
      head: ['Stage', 'Paper', 'Content', 'Questions', 'Marks', 'Counts?'],
      rows: [
        ['Screening test', 'General Studies and Mental Ability', 'Indian history 30; geography 30; Indian society 30; current affairs 30; mental ability 30', '150', '150', 'No — shortlists only'],
        ['Main examination', 'Paper I', 'Section A: social and cultural history of Andhra Pradesh, 75. Section B: general overview of the Indian Constitution, 75', '150', '150', 'Yes'],
        ['Main examination', 'Paper II', 'Indian and Andhra Pradesh economy; science and technology', '150', '150', 'Yes'],
        ['Computer proficiency test', 'Proficiency in office automation', 'Practical, 60 minutes', '—', '100', 'No — qualifying at 40, 35 or 30 by category'],
      ],
    },
    {
      type: 'note',
      title: 'One-third negative marking, quoted, at both stages',
      text: 'Both the screening and the mains tables in the notification carry the same clause: as per G.O.Ms.No.235 of the Finance Department dated 6 December 2016, each wrong answer will be penalised with one-third of the marks prescribed for the question. On a one-mark question that is 0.33 lost per wrong answer, at the screening and at the mains alike.',
    },
    {
      type: 'list',
      title: 'The rules that decide the paper',
      items: [
        { text: 'A quarter of the mains is the history of the state', note: 'Section A of Paper I, 75 marks, is the social and cultural history of Andhra Pradesh and nothing else. Add the state economy in Paper II and the state is well over a third of the examination.' },
        { text: 'Minimum qualifying marks on the aggregate', note: '40% for OC, EWS, sportspersons and ex-servicemen; 35% for BC; 30% for SC, ST and disabled candidates.' },
        { text: 'The proficiency test is mandatory and practical', note: 'no candidate is eligible for appointment without qualifying it. It is a test of word processing, spreadsheets and presentations with typing speed, not of theory.' },
        { text: 'The mains may be OMR or on a computer', note: 'at the commission’s discretion. The 2025 mains was OMR.' },
        { text: 'There is no interview', note: 'the selection clause is merit in the main examination. The word appears in the notification only in a photograph instruction.' },
        { text: 'Corrections cost ₹100', note: 'and objections to a key ₹100 per question.' },
      ],
    },
    CONFIRM_NOTE,
  ],
  studyPlan: [
    {
      type: 'steps',
      title: 'A plan for two equal papers and a practical',
      items: [
        { text: 'Prepare the mains, and let the screening follow', note: 'the screening syllabus is general studies and mental ability; the mains is that plus the state. A candidate ready for the mains is ready for the screening. The reverse is not true.' },
        { text: 'Weight your time to Andhra Pradesh', note: 'Paper I Section A is the social and cultural history of the state, 75 marks; Paper II includes its economy. Build the state as a subject with its own file — dynasties, movements, the road to the residuary state, and the post-2014 economy.' },
        { text: 'Learn to leave a question blank', note: 'a third of a mark per wrong answer at both stages. Score every practice paper with the penalty and adjust when to guess.' },
        { text: 'Prepare the Constitution as a full section', note: 'Paper I Section B is a general overview of the Constitution at 75 marks — as much as the state history. Articles, bodies, amendments and the working of institutions.' },
        { text: 'Drill mental ability for the screening', note: 'it is 30 of the 150 screening marks and the fastest-improving block, and it does not appear in the mains.' },
        { text: 'Start the office-software practice early', note: 'the proficiency test is practical, timed and qualifying, and typing speed is part of it. Twenty minutes a day from the first month.' },
        { text: 'Choose post-code preferences before verification', note: 'the executive and non-executive lists, the zones and the reservation roster decide which post a rank gets. Read the vacancy table before the syllabus.' },
      ],
    },
    {
      type: 'note',
      title: 'Prepare for postponement',
      text: 'The 2023 mains was announced for July 2024, moved to January 2025 and held in February 2025. Build a routine that survives a moving date — the candidates who did well in this cycle were the ones still preparing when the date finally held.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. Vacancies, eligibility, fees, the scheme of examination, the negative-marking clause and the proficiency test are taken from Notification No. 11/2023 and its detailed notification; the chronology and the litigation caveat from the commission’s selection notification of January 2026. The commission’s old question papers archive holds one Group 2 paper — the 2016 screening test — and the 2023 screening and mains papers are published on the keys page as final keys in question-paper format.`,
    },
    {
      type: 'links',
      title: 'Official sources for this page',
      items: [
        { label: 'APPSC recruitment notifications', href: APPSC.notifications },
        { label: 'Notification No. 11/2023 with scheme and syllabus', href: AP_GROUP_2_SRC.notification },
        { label: 'Detailed notification, 20 December 2023', href: AP_GROUP_2_SRC.detailed },
        { label: 'Group 2 syllabus, April 2023', href: AP_GROUP_2_SRC.syllabus },
        { label: 'Provisional selection notification, 28 January 2026', href: AP_GROUP_2_SRC.selection },
        { label: 'APPSC old question papers archive', href: APPSC.oldPapers },
        { label: 'APPSC final answer keys — 2023 screening and mains papers', href: APPSC.keys },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'APPSC Group 2 syllabus — the screening paper, the two mains papers, and how much of it is Andhra Pradesh.',
      lead: [
        'The syllabus is general studies with a state layer, and the state layer is a quarter of the mains on its own.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Screening — General Studies and Mental Ability',
              'Five parts of 30 marks: Indian history; geography of India and Andhra Pradesh; Indian society and social issues; current affairs of regional, national and international importance; and mental ability — reasoning, analytical ability and data interpretation. A subset of the mains, at degree standard.',
            ],
            [
              'Mains Paper I, Section A — Social and Cultural History of Andhra Pradesh',
              'Seventy-five marks on the state alone: the Satavahanas, Ikshvakus, Eastern Chalukyas, Kakatiyas and Vijayanagara; the Qutb Shahis and Asaf Jahis in the Andhra region; the social reform and cultural movements; the freedom struggle in the Andhra districts; the formation of the state, the Telangana movement as it bore on it, and the 2014 reorganisation.',
            ],
            [
              'Mains Paper I, Section B — General Overview of the Indian Constitution',
              'Seventy-five marks: the making and features of the Constitution; fundamental rights, duties and directive principles; the Union and the states; the legislature, executive and judiciary; local government; the constitutional bodies; and amendments.',
            ],
            [
              'Mains Paper II — Indian and Andhra Pradesh Economy',
              'National income, planning, public finance, agriculture, industry and services, money and banking; and the economy of Andhra Pradesh — its resources, agriculture, irrigation, industry, infrastructure and development programmes since the bifurcation.',
            ],
            [
              'Mains Paper II — Science and Technology',
              'The role of science and technology in development, applications in agriculture, health, energy and communication, information technology, space and defence, environment and current developments.',
            ],
            [
              'Computer proficiency test',
              'Proficiency in office automation: multiple-choice questions on computer fundamentals, then practical tasks in word processing with typing speed, spreadsheets and presentations.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Read Section A of Paper I as an instruction, not a topic. Seventy-five marks of Andhra Pradesh history is examined as a subject with its own periodisation, dynasties, movements and dates, at a depth that no national state-PSC book reaches. It is simultaneously the section where an unprepared candidate loses most and the section where a prepared one gains most.',
        },
        {
          type: 'links',
          title: 'Where to build each layer',
          items: [
            { label: 'Group 2 syllabus, April 2023', href: AP_GROUP_2_SRC.syllabus },
            { label: 'Andhra Pradesh government exams hub', to: '/government-exams/state/andhra-pradesh/' },
            { label: 'Subject-wise study material', to: '/study-material/' },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'APPSC Group 2 exam pattern — the screening test, the two-paper mains, one-third negative marking and the qualifying computer proficiency test.',
      lead: [
        'A screening stage that shortlists and is discarded, two papers that decide everything, and a practical test that decides whether the decision stands.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What each stage contributes.',
          head: ['Stage', 'Format', 'Counts?', 'What it decides'],
          rows: [
            ['Screening test', 'Objective, 150 questions', 'No', 'Who writes the mains, in a ratio the commission fixes'],
            ['Mains Paper I', 'Objective, 150 questions', 'Yes — 150 marks', 'Half the ranking'],
            ['Mains Paper II', 'Objective, 150 questions', 'Yes — 150 marks', 'The other half'],
            ['Computer proficiency test', 'Practical, 100 marks', 'No — qualifying', 'Whether a ranked candidate can be appointed'],
          ],
        },
        {
          type: 'p',
          text: 'The consequence is a planning rule with two halves. The mains is the whole of the rank, so both papers deserve equal weight and the state history section deserves the weight of a subject. The proficiency test adds nothing to the rank but removes candidates from it, so it deserves enough practice to pass comfortably and no more.',
        },
        {
          type: 'list',
          title: 'Rules worth reading twice',
          items: [
            { text: 'The penalty applies at both stages', note: 'a third of a mark per wrong answer in the screening and in the mains. Three wrong answers cancel one right one.' },
            { text: 'Qualifying marks are on the aggregate', note: '40, 35 and 30 per cent by category — not per paper.' },
            { text: 'The proficiency test is qualifying by category', note: '40 for OC, 35 for BC, 30 for SC, ST and disabled candidates, out of 100.' },
            { text: 'Post and zone are allotted at verification', note: 'preferences submitted then, under the reservation roster, decide which of fifty-nine post codes a rank becomes.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'APPSC Group 2 previous papers — the 2016 screening paper in the archive, the 2023 papers as keys, and how to work them.',
      lead: [
        'One archived paper and the current cycle’s papers as keys in question-paper format. Enough to see how the commission sets the state history section.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The old question papers page holds one Group 2 paper — the screening test of 2016 — and no mains paper of any year. The 2023 screening paper and both 2023 mains papers, in all four series, are published on the keys page as final keys in question-paper format: the questions with the correct options marked. Together they show the current scheme’s papers in full, which is more than the archive alone suggests.',
        },
        {
          type: 'list',
          title: 'How to use what exists',
          items: [
            { text: 'Work the 2023 mains papers with the marks covered', note: 'both papers, to time, with the penalty applied, then check against the key. It is the only official mains practice for the current scheme.' },
            { text: 'Classify every Section A question by period', note: 'ancient, medieval, colonial, the movement, the reorganisation. The distribution tells you where the commission puts the state history marks.' },
            { text: 'Use the 2016 screening paper for the screening', note: 'the syllabus has since been revised, but the question habits and the level have not.' },
            { text: 'Keep one file of Andhra Pradesh questions across every paper', note: 'from the Group 1 mains and the Group 3 screening paper as well. The state is asked in every APPSC paper.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: '2016 Group 2 screening test paper', href: AP_GROUP_2_SRC.screening2016 },
            { label: '2023 screening test final key in question-paper format', href: AP_GROUP_2_SRC.screeningKey2023 },
            { label: 'APPSC final answer keys — 2023 mains papers', href: APPSC.keys },
            { label: 'Previous-year papers library', to: '/previous-year-papers/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'APPSC Group 2 mock tests — practising two equal papers, a screening that mirrors them, a one-third penalty and a practical test.',
      lead: [
        'Two things to rehearse: the balance between the state and the rest, and the decision to leave a question blank.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine built around the scheme',
          items: [
            { title: 'A full two-paper mock every week', text: '300 questions in 300 minutes, scored with a third of a mark off per wrong answer. Both papers, because both count.' },
            { title: 'A state history sectional midweek', text: 'Fifty questions in fifty minutes on the social and cultural history of Andhra Pradesh. Seventy-five marks of the mains, and the block that most separates candidates.' },
            { title: 'A screening-format paper monthly', text: '150 questions in 150 minutes with the mental ability block included — the stage you sit first, in its own balance.' },
            { title: 'A practical session weekly', text: 'A formatted document against the clock, a spreadsheet with formulas, a short presentation. The proficiency test is a mock too.' },
          ],
        },
        {
          type: 'note',
          title: 'Build the state history mocks yourself if none exist',
          text: 'Commercial mock series rarely give the social and cultural history of Andhra Pradesh the 75 marks the paper gives it. The syllabus headings and the 2023 Paper I key are enough to write question sets from — fifty on the dynasties, fifty on the movements, fifty on the road to the residuary state. A set you wrote from the state’s own history is closer to the paper than a generic Indian history quiz.',
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
        'APPSC Group 2 preparation — a plan for two objective mains papers weighted to Andhra Pradesh, with a penalty for error and a practical test before appointment.',
      lead: [
        'A quarter of the examination is one subject nothing else prepares you for. That is where the plan starts.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A plan in four phases',
          items: [
            { title: 'Phase one — the state as a subject', text: 'The social and cultural history of Andhra Pradesh from the Satavahanas to the reorganisation, built as a timeline with dynasties, movements, figures and dates. Then the state economy since 2014.' },
            { title: 'Phase two — the Constitution and the national economy', text: 'Section B of Paper I and the first half of Paper II. Standard reading, done thoroughly.' },
            { title: 'Phase three — general studies and mental ability for the screening', text: 'Indian history, geography, society and current affairs at degree standard, with the mental ability block drilled separately. The screening subset of the mains.' },
            { title: 'Phase four — papers under the penalty, and the keyboard', text: 'Weekly two-paper mocks scored at one-third off; the 2023 keys as practice papers; twenty minutes a day of office software.' },
          ],
        },
        {
          type: 'list',
          title: 'What the 2023 cycle taught',
          items: [
            { text: 'The mains date moved twice', note: 'from July 2024 to January 2025 to February 2025. A routine that survives postponement is the preparation.' },
            { text: 'Fifty-nine post codes, two lists, several zones', note: 'the executive and non-executive posts, the state-cadre Secretariat posts and the zonal district posts each carry their own pool. The vacancy table decides what a rank is worth.' },
            { text: 'Verification, the proficiency test and medical boards took most of a year', note: 'from the April 2025 result to the January 2026 selection. The interval is where candidates lose documents and proficiency.' },
            { text: 'The selection is subject to court', note: 'named writ petitions with certain posts and zones marked as subject to their outcome. A provisional list is not an appointment.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'APPSC Group 2 study material — what to read for the screening, for each mains paper, and for the Andhra Pradesh history section in particular.',
      lead: [
        'The national reading list is standard. The state history section has no textbook, and assembling it is the preparation that pays.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'A reading list by paper and section.',
          head: ['Paper', 'Section', 'What to work from'],
          rows: [
            ['Screening', 'General studies', 'Standard degree-level texts for Indian history, geography and society; a current affairs digest kept weekly.'],
            ['Screening', 'Mental ability', 'A reasoning and data interpretation question bank. Volume over source.'],
            ['Mains Paper I', 'Social and cultural history of Andhra Pradesh', 'The state’s own history as published by its universities and the state archives — the dynasties of the Andhra region, the social reform movements, the freedom struggle in the Andhra districts, the formation and reorganisation of the state. Built as a timeline file.'],
            ['Mains Paper I', 'Indian Constitution', 'A standard Constitution and polity text, read to the institutions and amendments.'],
            ['Mains Paper II', 'Indian and Andhra Pradesh economy', 'A standard Indian economy text, plus the state’s socio-economic survey and budget for the post-2014 economy.'],
            ['Mains Paper II', 'Science and technology', 'A science and technology reader with a current developments digest.'],
            ['Computer proficiency', 'Office automation', 'A word processor, spreadsheet and presentation tool used daily; a typing tutor. No book substitutes for the keyboard.'],
          ],
        },
        {
          type: 'note',
          title: 'Build the state history as one timeline',
          text: 'Seventy-five marks of Andhra Pradesh history is examined as dynasties, movements, figures and dates in sequence. One timeline file — from the Satavahanas through the medieval kingdoms, the colonial Andhra districts, the linguistic-state movement, the formation of the state, the Telangana agitation as it bore on Andhra, and the 2014 reorganisation — revised monthly, is the single most exam-specific document a Group 2 candidate can own.',
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Subject-wise study material', to: '/study-material/' },
            { label: 'Current affairs', to: '/current-affairs/' },
            { label: 'Andhra Pradesh government exams', to: '/government-exams/state/andhra-pradesh/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any APPSC Group 2 notification open right now?',
      a: 'No. As at 11 September 2026 the most recent notification was No. 11/2023, whose provisional selection of 891 candidates was published in January 2026. The state’s 2026 job calendar names 15 October 2026 as the notification date for a Group 2 round of 673 posts, but a calendar date is not a notification — the commission’s own list is the only source that is.',
    },
    {
      q: 'What is the APPSC Group 2 exam pattern?',
      a: 'A screening test of 150 questions for 150 marks in 150 minutes — general studies and mental ability in five parts — which shortlists and is then discarded. Then a mains of two objective papers of 150 questions and 150 marks each: Paper I is the social and cultural history of Andhra Pradesh for 75 and the Indian Constitution for 75; Paper II is the Indian and Andhra Pradesh economy and science and technology. Selection is on the 300 mains marks, followed by a qualifying computer proficiency test. There is no interview.',
    },
    {
      q: 'Is there negative marking in APPSC Group 2?',
      a: 'Yes, at both stages. The notification quotes G.O.Ms.No.235 of December 2016 in both the screening and the mains tables: each wrong answer is penalised with one-third of the marks prescribed for the question.',
    },
    {
      q: 'Does APPSC Group 2 have an interview?',
      a: 'No. The 2023 scheme carries none, and the selection clause reads merit in the main examination. What follows the mains is certificate verification, a qualifying computer proficiency test, and medical boards for the Excise Sub-Inspector post.',
    },
    {
      q: 'What is the computer proficiency test in APPSC Group 2?',
      a: 'A practical, 60-minute test of proficiency in office automation for 100 marks, under G.O.Ms.No.26 of February 2023 — multiple-choice questions on computer fundamentals, then tasks in word processing with typing speed, spreadsheets and presentations. It is qualifying at 40 for OC, 35 for BC and 30 for SC, ST and disabled candidates, and no candidate is eligible for appointment without passing it.',
    },
    {
      q: 'What are the APPSC Group 2 age limits?',
      a: 'In the 2023 cycle, reckoned as on 1 July 2023: 18 to 42 for most posts, 20 to 42 for Sub-Registrar and 18 to 30 for Prohibition and Excise Sub-Inspector. Relaxation of five years applies to SC, ST, BC and EWS candidates and ten to candidates with benchmark disability, with further provisions for ex-servicemen, state employees and widowed or separated women in Junior Assistant posts.',
    },
    {
      q: 'What was the APPSC Group 2 fee?',
      a: 'An application processing fee of ₹250, payable by everyone, and an examination fee of ₹80, from which SC, ST, BC, disabled and ex-servicemen candidates, white-card household families of Andhra Pradesh and unemployed youth on declaration were exempt.',
    },
    {
      q: 'How much of APPSC Group 2 is about Andhra Pradesh?',
      a: 'A quarter of the mains on its own — Section A of Paper I is 75 marks on the social and cultural history of the state — plus the state economy in Paper II and the state’s geography in the screening. Well over a third of the examination, and the part no national state-PSC material prepares for.',
    },
    {
      q: 'Does APPSC publish Group 2 previous papers?',
      a: 'The old question papers archive holds the 2016 screening test and no mains paper. The 2023 screening paper and both 2023 mains papers are published on the keys page as final keys in question-paper format — the questions with the correct options marked — which serve as the official practice papers for the current scheme.',
    },
    {
      q: 'Which posts are filled through APPSC Group 2?',
      a: 'In the 2023 cycle, fifty-nine post codes across two lists. Executive: Municipal Commissioner Grade-III, Sub-Registrar, Deputy Tahsildar, Assistant Labour Officer, Assistant Registrar of Cooperative Societies, Extension Officer, Prohibition and Excise Sub-Inspector and Assistant Development Officer. Non-executive: Assistant Section Officers in four Secretariat departments, senior and junior auditors and accountants, and Junior Assistants in forty-one departments. The exact list and vacancies are set by the notification.',
    },
  ],
}

const andhraPradesh = [
  AP_GROUP_1,
  AP_GROUP_2,
  AP_GROUP_3,
  AP_GROUP_4,
  AP_POLICE,
  AP_TEACHING,
  AP_TECHNICAL,
  AP_PANCHAYAT_SECRETARY,
  AP_DEPARTMENTAL,
]

export default andhraPradesh
