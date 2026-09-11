/**
 * Karnataka state exams — /government-exams/state/karnataka/:exam/
 *
 * The state hub at /government-exams/state/karnataka/ lists the recruitment
 * routes the state runs. Each of those cards becomes a link only when a record
 * exists here, so this file is what turns a card into a page.
 *
 * Two things shape everything below, and both are specific to Karnataka:
 *
 *   Article 371J. Since 2013 the six districts of Kalyana Karnataka — the
 *   former Hyderabad-Karnataka region — carry a local cadre with its own
 *   share of every recruitment's vacancies, and every notification splits its
 *   posts between a local cadre and a residual parent cadre. A candidate's
 *   eligibility for a post therefore depends on where they are from as much
 *   as on what they hold, and the vacancy table is two tables.
 *
 *   The Kannada language test. Most KPSC recruitments carry a compulsory
 *   Kannada test that a candidate must pass unless they studied Kannada as a
 *   first language or in the Kannada medium at school; the police, the
 *   teaching and the village accountant recruitments carry their own Kannada
 *   component. Which rule applies, and who is exempt, is set per notification.
 *
 * Every dated fact — vacancies, fees, age limits, marks, deadlines — sits in
 * the `updates`, `eligibility`, `pattern` and `sources` sections, is taken
 * from a named notification linked in the same section, and was checked on
 * the date in CHECKED. When you refresh a status, move that date with it. The
 * rest of each record is deliberately evergreen: the durable shape of the
 * recruitment and the method that shape implies.
 */

const OFFICIAL = 'kpsc.kar.nic.in'

/** The day the dated facts on these pages were last read off an official notice. */
const CHECKED = '11 September 2026'

/** Recurs at the foot of every pattern page in this file. */
const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'KPSC and the state’s other recruiting bodies revise paper structure, marks, syllabus detail and eligibility between recruitment cycles, and have done so more than once in recent years. Everything here describes the shape the recruitment has held; the notification for the cycle you are sitting is the document that decides it. Read it end to end before you plan around any figure.',
}

/* ── KPSC landing pages ─────────────────────────────────────────
   The commission's site loads its sub-pages by script, so the direct URLs
   are the stable ones. Nearly every departmental-examination document is in
   Kannada only; the record says so where a figure came from one. */
const KPSC = {
  home: 'https://kpsc.kar.nic.in/',
  notifications: 'https://kpsc.kar.nic.in/notification.html',
  results: 'https://kpsc.kar.nic.in/results.html',
  timetable: 'https://kpsc.kar.nic.in/time-table.html',
  questionPapers: 'https://kpsc.kar.nic.in/questionpaper.html',
  syllabus: 'https://kpsc.kar.nic.in/syllabus.html',
  online: 'https://kpsconline.karnataka.gov.in/',
  sevaSindhu: 'https://sevasindhu.karnataka.gov.in/',
}

/* ── KPSC Departmental Examinations ─────────────────────────────
   Two sessions a year, one series, one hundred and eighteen papers, every
   notification in Kannada. The Kannada language examination for government
   servants is inside the series rather than beside it, and the pass rule is
   a paper-exemption rule — sixty per cent in one paper buys two years to pass
   the rest — rather than a simple threshold. */
const KA_DEPT_SRC = {
  notification2026: 'https://kpsc.kar.nic.in/NOTIFICATION%20%20UNICODE%202026-1st%20SESSION.pdf',
  corrigendum1: 'https://kpsc.kar.nic.in/CORRIGENDUM%20NOTIFICATION.pdf',
  corrigendum2: 'https://kpsc.kar.nic.in/corrigendum%20%20notificattion%20deparmental%20examination.pdf',
  timetable2026: 'https://kpsc.kar.nic.in/REVISED%20TIME%20TABLE.pdf',
  hallTicket2026: 'https://kpsc.kar.nic.in/Pressnote%202026%20I-SESSION%20DEPTL%20EXAM%20HALLTICKET.pdf',
  notification2024ii: 'https://kpsc.kar.nic.in/NOTIFICATION%20%20UNICODE%202024-2SESSION.pdf',
  result2024ii: 'https://kpsc.kar.nic.in/DE%20RESULTS%202024%20II-SESSION.pdf',
  result2024i: 'https://kpsc.kar.nic.in/de-result.pdf',
  functions: 'https://kpsc.kar.nic.in/pdf/DEPTL%20EXAM%20%20_FUNCTIONS_.pdf',
  kannadaPaper1: 'https://kpsc.kar.nic.in/DE%20Kannada%20Language%20Paper-1.pdf',
  kannadaTextbook: 'https://kpsc.kar.nic.in/DE%20KANNADA%20TEXT%20BOOK%20FOR%20PAPER-1(IAS,%20IPS%20&%20IFS%20OFFICERS%20ONLY).pdf',
  retotallingForm: 'https://kpsc.kar.nic.in/pdf/DEPARTMENTAL%20EXAMINATION2.pdf',
}

const KA_DEPARTMENTAL = {
  slug: 'departmental-tests',
  path: '/government-exams/state/karnataka/departmental-tests/',
  name: 'Karnataka Departmental Examinations',
  fullName: 'KPSC Service and Departmental Examinations for Karnataka government servants',
  authority: 'Karnataka Public Service Commission (KPSC)',
  official: OFFICIAL,
  seoTitle: 'KPSC Departmental Exams: Sessions, Fees, Pass Rule & Kannada Test',
  metaDescription:
    'KPSC Departmental Examinations — two sessions a year, who may sit, ₹50 or ₹100 a subject, the 35% pass and 60% exemption rule, and the Kannada examination.',
  lead: [
    'Departmental examinations are the qualifying tests Karnataka government servants must pass under the Karnataka Civil Services (Service and Kannada Language Examinations) Rules of 1974 — for probation to be declared, for promotion, and for the career events their department’s schedule makes conditional on them. The commission conducts them in two sessions a year and publishes the results, with marks, on its website and in the gazette.',
    'Three things distinguish the Karnataka series. It is closed: only serving government servants and the permanent employees of state corporations, boards, local bodies and universities may sit, and only for the subjects their own department’s schedule prescribes. The Kannada language examination that non-Kannada-medium employees must pass is a paper inside it, not a separate test. And its pass rule buys time — sixty per cent in one paper of a multi-paper examination exempts that paper for two years while the rest are passed at thirty-five.',
  ],
  quickFacts: [
    ['Conducted by', 'Karnataka Public Service Commission'],
    ['Sessions', 'Two a year — the first between January and June, the second between July and December, in principle; in practice the 2026 first session was examined in July and August'],
    ['Latest', 'First session 2026, notified 18 February; examined 17 July to 8 August 2026; no second-session notification at 11 September'],
    ['Who may sit', 'State government servants and permanent employees of state corporations, boards, local bodies and universities — not Group D, not the public'],
    ['Fee', '₹50 or ₹100 per subject, by subject code; no exemptions stated'],
    ['Pass rule', '35% in a paper; 60% in one paper of a multi-paper examination exempts it for two years'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The tests exist because the 1974 rules make career events conditional on demonstrated knowledge of the rules an officer works under, and Schedule II of those rules names, department by department, which examinations each cadre must pass. A revenue officer must pass the Revenue examination at the lower or higher level; an accounts officer the Accounts examination and then the Subordinate Accounts Service papers; a police officer the Police Manual; a forest guard the two forest papers. The commission sets the papers and publishes the results; the department decides who must sit which.',
    },
    {
      type: 'p',
      text: 'The 2026 first-session notification lists 99 objective papers and 19 descriptive ones across some seventy subject codes. The objective papers may be held on OMR sheets or as computer-based tests at the commission’s discretion; the descriptive papers are written in question-cum-answer booklets, wholly in English or wholly in Kannada. Most run two hours, a dozen run three, and the second Kannada language paper runs one. The examinations are held in three stages across the state’s districts, the five divisional headquarters and Bengaluru.',
    },
    {
      type: 'list',
      title: 'The families of examination',
      items: [
        { text: 'Accounts and treasury', note: 'Accounts Lower and Higher, the Subordinate Accounts Service examination in three parts, Treasury Accounts in two parts, and the electricity audit and accounts papers — the largest family, and the one with the most descriptive papers.' },
        { text: 'Revenue and registration', note: 'Revenue Lower, Revenue Higher in two parts, Registration, Commercial Taxes at higher and lower level, Excise, and Municipal and Local Boards.' },
        { text: 'Departmental papers', note: 'the Police Manual, Prisons, Forest and the two forest-guard papers, Cooperation and Cooperative Audit, Sericulture, Marketing, Labour, Factories and Boilers, Mining, Ports, Insurance at three levels, Employment Exchange Procedure, Motor Vehicles, Fire Services, Home Guard Manual, Community Development, the social welfare and youth services manuals, and the Secretariat and KPSC manuals.' },
        { text: 'Law', note: 'General Law in two parts, the Indian Contract Act, Special Laws and Service Rules, the Karnataka Administrative Tribunal examination, and the consumer protection service examination.' },
        { text: 'Language', note: 'the Kannada language examination in two papers for state employees, a separate two-paper version for IAS, IPS and IFS officers, a viva-only version for listed cadres, and the Translation Test.' },
      ],
    },
    {
      type: 'note',
      title: 'Apply only for the subjects your department’s schedule prescribes',
      text: 'The notification is explicit: candidates must apply only for the subjects mandated for their department in Schedule II of the 1974 rules, and not for another department’s subjects. Paying the fee confers no right to sit, and the commission’s decision on eligibility is final. Group D employees may not apply at all. The Subordinate Accounts Service examination has its own entry condition — three years’ service as a first division clerk or six as a second, and a pass in Accounts Higher — with a head-of-office certificate to upload.',
    },
  ],
  stages: [
    {
      name: 'Notification and online application',
      mode: 'Per session, through Seva Sindhu',
      detail:
        'The commission notifies each session, in Kannada, with an application window of about a month that has been extended more than once. Application and payment run through the Seva Sindhu portal after Aadhaar or DigiLocker registration, with a head-of-office certificate where the subject requires one.',
    },
    {
      name: 'The examination',
      mode: 'Objective on OMR or computer; descriptive in booklets',
      detail:
        'Ninety-nine objective and nineteen descriptive papers in the 2026 first session, held in three stages — first at every district, then at the five divisional headquarters, then at Bengaluru alone — over about three weeks. Admission tickets are downloaded from the commission’s site.',
    },
    {
      name: 'Viva-voce, Kannada language examination',
      mode: 'Oral, at Bengaluru and the divisional headquarters',
      detail:
        'Candidates who pass the written Kannada papers are called to a viva at Bengaluru, Belagavi, Kalaburagi, Mysuru or Shivamogga, with call letters issued only through Seva Sindhu. A viva-only version exists for home guards, blind employees and listed printing and stationery cadres.',
    },
    {
      name: 'Result',
      mode: 'First class and pass class, with marks',
      detail:
        'Results are published on the commission’s website and in the gazette, with marks alongside — no separate marks statement is issued. Pass certificates are downloaded through Seva Sindhu and DigiLocker with a QR code for verification.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The first session of 2026, notified on 18 February 2026, took applications to 21 March and was extended twice — to 23 March and then to 13 April — before being examined from 17 July to 8 August 2026, two months later than the schedule in the notification. No second-session notification for 2026 had been published at the date checked; the second session of 2024 was notified on 21 December 2024 and examined in May 2025, with its results published in February 2026.`,
    },
    {
      type: 'table',
      caption: 'Recent sessions, as the commission’s own documents record them. Every notification and result is in Kannada.',
      head: ['Session', 'Notified', 'Applications', 'Examined', 'Result'],
      rows: [
        ['2026 — first', '18 February 2026', '21 February to 13 April 2026, after two extensions', '17 July to 8 August 2026, in three stages', 'Not yet published'],
        ['2024 — second', '21 December 2024', 'To late January 2025, extended', 'May 2025', '7 February 2026; IAS, IPS and IFS results separately on 30 December 2025'],
        ['2024 — first', '29 February 2024', 'As notified', 'June 2024', '2 December 2024'],
      ],
    },
    {
      type: 'note',
      title: 'The session names and the examination months have drifted apart',
      text: 'The commission describes the first session as falling between January and June and the second between July and December. In practice the 2026 first session was examined in July and August after its May dates were revised, and the 2024 second session was examined in May 2025. Plan by the dates in the notification and the revised timetable, not by the session’s name.',
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'KPSC notifications', href: KPSC.notifications },
        { label: 'KPSC results', href: KPSC.results },
        { label: 'KPSC time-tables', href: KPSC.timetable },
        { label: 'Seva Sindhu — application, payment and certificates', href: KPSC.sevaSindhu },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Who may sit, from the 2026 first-session notification. Read from a Kannada-only document.',
      head: ['Candidates', 'Rule'],
      rows: [
        ['State government servants', 'Eligible, for the subjects mandated for their department in Schedule II of the 1974 rules.'],
        ['Permanent employees of state corporations, boards, local bodies, universities and authorities', 'Eligible on the same basis.'],
        ['Group D employees', 'Not eligible to apply.'],
        ['Members of the public', 'Not eligible — no paper is open to non-employees.'],
        ['Subordinate Accounts Service examination', 'Only officials required to pass it under Schedule II, with three years’ service as a first division clerk or six as a second and a pass in Accounts Higher or its equivalent, with a head-of-office certificate.'],
        ['IAS, IPS and IFS officers', 'Sit the Kannada language examination under its own code, and may sit at Karnataka Bhavan in New Delhi or the academy at Mussoorie.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, fixed by a government order of August 2010 and applied per subject code. Payment through Seva Sindhu; nothing is refunded or carried to another session.',
      head: ['Charge', 'Amount', 'Subjects'],
      rows: [
        ['Examination fee — lower band', '₹50 per subject', 'Accounts Lower, the community development and employment exchange papers, the forest-guard papers, the manuals, Prisons, Excise, Police Manual, the Contract Act, the KPSC and Secretariat papers, the Translation Test, the electricity papers, the tribunal paper, the viva-only Kannada code and others'],
        ['Examination fee — higher band', '₹100 per subject', 'Accounts Higher, Commercial Taxes, Forest, Labour, PWD, Registration, Sericulture, Cooperation, General Law Part I, Municipal, Marketing, Revenue, Cooperative Audit, Insurance, the Kannada language papers, the SAS and Treasury papers and the IAS, IPS and IFS Kannada papers'],
        ['Kannada exemption claims', '₹100', 'A candidate claiming exemption from the Kannada examination must still apply for it and pay the fee.'],
        ['Exemptions', 'None stated', 'The notification carries no fee concession by category.'],
      ],
    },
    {
      type: 'list',
      title: 'The Kannada language examination and its exemptions',
      items: [
        { text: 'Two written papers and a viva', note: 'Paper 1 of 100 marks in two hours without books, Paper 2 in one hour, then a viva-voce for those who pass the written papers. State employees sit code 47; IAS, IPS and IFS officers code 72.' },
        { text: 'Exempt, on certificate', note: 'employees who passed SSLC or higher with Kannada as a first, second or optional language or answered in Kannada; holders of listed Kannada diploma and certificate courses including the Sahitya Parishath’s and the Central Institute of Indian Languages’; those who passed a Kannada test at recruitment; and allottees under Section 115 aged 45 or over.' },
        { text: 'Viva only, for listed cadres', note: 'home guards, blind employees and those not required to read and write, and the printing and stationery cadres, under code 73 — with a 40 per cent viva requirement for the printing cadres.' },
        { text: 'The syllabus is a school book', note: 'a sixth-standard reader and a short-story collection for state employees; a tenth-standard second-language reader for the all-India officers, which the commission publishes on its site.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'How a paper is conducted, from the 2026 first-session notification and revised timetable.',
      head: ['Paper type', 'Mode', 'Duration', 'Answers'],
      rows: [
        ['Objective — 99 papers', 'OMR or computer-based, at the commission’s discretion', '2 hours; 3 hours for the PWD Higher Part I paper and the SAS and Treasury objective papers listed', 'Multiple choice'],
        ['Descriptive — 19 papers', 'Question-cum-answer booklet', '3 hours for most; 2 hours for the first Kannada paper; 1 hour for the second Kannada paper', 'Wholly in English or wholly in Kannada, except the Translation Test'],
        ['Kannada viva-voce', 'Oral', '—', 'At Bengaluru or a divisional headquarters'],
      ],
    },
    {
      type: 'note',
      title: 'The pass rule is a paper-exemption rule',
      text: 'The commission quotes Rule 9(3) of its Conduct of Service Examinations Rules of 1965: where an examination has more than one paper and a candidate scores sixty per cent or more in any paper, that paper is deemed passed provided the candidate passes the remaining papers with the required thirty-five per cent within two years of the result. The exemption lapses after two years. Results are published as first class and pass class, and the first-class threshold is not stated in any document found. No general pass-mark rule outside the exemption context was found either — the thirty-five per cent figure is the one the notification uses.',
    },
    {
      type: 'list',
      title: 'The rules that catch people out',
      items: [
        { text: 'With books means government textbooks', note: 'for papers written with books, government-published textbooks may be used, and privately published books only where they do not depart from the government model. Guides from private publishers are prohibited. The Employment Service Manual is permitted for the employment exchange papers.' },
        { text: 'Without-books papers are marked on the timetable', note: 'the Kannada papers, the Translation Test, the SAS and Treasury descriptive papers, the Insurance descriptive papers and the PWD Higher Part I paper among them.' },
        { text: 'No revaluation', note: 'retotalling only, and only for the nineteen descriptive papers — ₹100 a subject, online, within thirty days of the result. Offline requests are not entertained.' },
        { text: 'No separate marks statement', note: 'marks are published with the result on the commission’s site. Certificates are downloaded through Seva Sindhu and DigiLocker; a duplicate needs an affidavit and ₹100 a subject.' },
        { text: 'Dates move', note: 'the 2026 first session was examined two months after the schedule in its notification, after two application extensions and a revised timetable.' },
      ],
    },
    {
      type: 'p',
      text: 'No change of the criminal-law syllabus to the new codes was found in the 2026 notification, whose annexure of recent government orders lists only amendments to the tribunal, forest and fire services syllabuses. The General Law papers are set on the Acts the 1974 rules name; a candidate should check the syllabus annexure of the session they sit for any substitution.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s notifications, corrigenda, timetables and results. Eligibility, fees, the subject codes, the pass rule, the with-books rule and the retotalling provisions are transcribed from the 2026 first-session notification, which is in Kannada only, and from the commission’s English description of the examination. The commission publishes previous papers for the Kannada language examination only; no other departmental paper was found on its site.`,
    },
    {
      type: 'links',
      title: 'Official notifications, timetables and results',
      items: [
        { label: 'KPSC notifications', href: KPSC.notifications },
        { label: '2026 first-session notification, 18 February 2026 — Kannada', href: KA_DEPT_SRC.notification2026 },
        { label: 'Corrigendum of 18 March 2026 — first extension', href: KA_DEPT_SRC.corrigendum1 },
        { label: 'Corrigendum of 7 April 2026 — second extension', href: KA_DEPT_SRC.corrigendum2 },
        { label: 'Revised timetable, 26 May 2026', href: KA_DEPT_SRC.timetable2026 },
        { label: 'Hall-ticket press note, 13 July 2026', href: KA_DEPT_SRC.hallTicket2026 },
        { label: '2024 second-session notification', href: KA_DEPT_SRC.notification2024ii },
        { label: '2024 second-session results, 7 February 2026', href: KA_DEPT_SRC.result2024ii },
        { label: '2024 first-session results, 2 December 2024', href: KA_DEPT_SRC.result2024i },
        { label: 'KPSC description of the departmental examinations — English', href: KA_DEPT_SRC.functions },
        { label: 'Kannada language Paper 1 — previous paper', href: KA_DEPT_SRC.kannadaPaper1 },
        { label: 'Retotalling form', href: KA_DEPT_SRC.retotallingForm },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'KPSC departmental examination syllabus — the accounts, revenue, departmental, law and Kannada language papers, as the 1974 rules and the annexures set them.',
      lead: [
        'Each paper is set on a named code, manual or Act, under Schedule I of the 1974 rules. The notification’s annexures carry the recent amendments.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Accounts and treasury',
              'Accounts Lower and Higher on the state’s financial and treasury rules; the Subordinate Accounts Service examination in three parts across eleven papers, objective and descriptive; Treasury Accounts in two parts; and the electricity audit and accounts papers at lower and higher level.',
            ],
            [
              'Revenue, registration and taxes',
              'Revenue Lower and Revenue Higher in two parts on the Land Revenue Act and the revenue manuals; Registration; Commercial Taxes at higher and lower level; Excise; Municipal and Local Boards.',
            ],
            [
              'Departmental papers',
              'The Police Manual; Prisons; Forest, and the two forest-guard papers revised in 2016 to cover the Forest Act and rules, wildlife protection, forest conservation, the Forest Code, the Forest Accounts Code and the Forest Rights Act, each of 100 marks in three hours; Cooperation and Cooperative Audit; and the other departments’ manuals and Acts.',
            ],
            [
              'Law',
              'General Law in two parts on the general Acts and procedure; the Indian Contract Act; Special Laws and Service Rules; the Karnataka Administrative Tribunal examination with its 2016 and 2020 additions; and the consumer protection service examination.',
            ],
            [
              'Kannada language',
              'For state employees, a sixth-standard reader and a short-story collection; for IAS, IPS and IFS officers, a tenth-standard second-language reader the commission publishes. Two written papers and a viva.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: '2026 first-session notification — syllabus annexures', href: KA_DEPT_SRC.notification2026 },
            { label: 'KPSC syllabus page', href: KPSC.syllabus },
            { label: 'Kannada textbook for the all-India officers’ paper', href: KA_DEPT_SRC.kannadaTextbook },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'KPSC departmental examination pattern — objective and descriptive papers, their durations, the with-books rule, the 35% pass and 60% exemption rule.',
      lead: [
        'A standard to meet, and a rule that gives two years to meet it.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules that apply across the series.',
          head: ['Rule', 'What it means'],
          rows: [
            ['Objective papers on OMR or computer', 'At the commission’s discretion, session by session.'],
            ['Descriptive papers in one language', 'Wholly in English or wholly in Kannada, in a question-cum-answer booklet.'],
            ['Sixty per cent exempts a paper', 'For two years, while the remaining papers of that examination are passed at thirty-five.'],
            ['With books means government textbooks', 'Private guides are prohibited.'],
            ['Retotalling, not revaluation', 'Descriptive papers only, ₹100 a subject, within thirty days, online.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'KPSC departmental examination previous papers — the Kannada language papers the commission publishes, and how to practise the rest from the codes.',
      lead: [
        'The commission publishes the Kannada language papers and nothing else from this series. For the other papers, the document the paper is set on is the practice material.',
      ],
      blocks: [
        {
          type: 'p',
          text: 'The commission’s question-paper page holds the departmental Kannada language Paper 1 and the Paper 2 set for all-India officers — a 2021 first-session booklet of fifty-five questions in two hours for 100 marks. No other departmental paper was found on the site. For the accounts, revenue, law and departmental papers, the syllabus names the code or Act, and the questions are drawn from it.',
        },
        {
          type: 'list',
          title: 'How to practise without papers',
          items: [
            { text: 'Work the code as a question bank', note: 'chapter by chapter, writing the questions an examiner would ask and answering from the text under time.' },
            { text: 'For with-books papers, practise finding', note: 'the government textbook on the desk, a stopwatch, and a provision to locate. The skill is navigation.' },
            { text: 'For the Kannada papers, use the published booklets', note: 'they show the level — the school readers — and the question types, and the viva follows the same syllabus.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'KPSC question papers page', href: KPSC.questionPapers },
            { label: 'Kannada language Paper 1', href: KA_DEPT_SRC.kannadaPaper1 },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'KPSC departmental examination mock tests — timed practice in the paper’s mode, with only government textbooks for the with-books papers.',
      lead: [
        'A mock for a with-books paper is a mock with the government textbook on the desk and nothing else.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by paper type',
          items: [
            { title: 'Objective papers — two-hour sittings', text: 'Question sets written from the code, answered on paper or screen against the clock, scored against thirty-five and against sixty.' },
            { title: 'Descriptive papers — three hours by hand', text: 'In one language throughout, in booklet form, to the published paper format where one exists.' },
            { title: 'The Kannada viva', text: 'Read the reader aloud; answer questions on it in Kannada. The viva is on the same syllabus as the written papers.' },
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
        'KPSC departmental examination preparation — reading Schedule II for your cadre, applying through Seva Sindhu in the window, and using the exemption rule.',
      lead: [
        'Most of the preparation is knowing which papers your department’s schedule requires and applying for those alone.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From the schedule to the certificate',
          items: [
            { title: 'Read Schedule II for your cadre', text: 'The 1974 rules name the examinations each department’s posts must pass. The notification says to apply for those and no others.' },
            { title: 'Check the Kannada position', text: 'If you passed SSLC with Kannada, or hold a listed certificate, claim the exemption — and still apply and pay for the Kannada code as the notification requires.' },
            { title: 'Register on Seva Sindhu and apply in the window', text: 'About a month, in Kannada, with a head-of-office certificate for the SAS papers. The 2026 window was extended twice; do not count on it.' },
            { title: 'Aim at sixty in the paper you know best', text: 'It buys two years for the rest of that examination at thirty-five.' },
            { title: 'Download the certificate', text: 'Through Seva Sindhu and DigiLocker, with the register number and PAN. No marks statement is posted; the marks are on the result.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'KPSC departmental examination study material — the government textbooks and codes each paper is set on, and the Kannada readers.',
      lead: [
        'The material is the government-published text of the code or manual, in the edition the with-books rule allows.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'What to work from, by family.',
          head: ['Family', 'Source', 'Note'],
          rows: [
            ['Accounts, SAS and treasury', 'The Karnataka financial and treasury rules and the accounts codes, as government publications', 'Government textbooks only in the hall.'],
            ['Revenue and registration', 'The Land Revenue Act and rules, the revenue manuals, the Registration Act', 'Higher and lower levels set on the same texts at different depth.'],
            ['Departmental papers', 'The department’s own Act, manual and code', 'The forest papers were re-specified in 2016; the syllabus annexure lists the Acts.'],
            ['Law', 'The Acts the 1974 rules name for General Law, the Contract Act, and the tribunal rules', 'Check the session’s annexure for any substitution.'],
            ['Kannada language', 'The sixth-standard reader and the short-story collection; the tenth-standard reader for all-India officers', 'The commission publishes the latter.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'KPSC syllabus page', href: KPSC.syllabus },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the next KPSC departmental examination session?',
      a: 'The commission holds two sessions a year. The 2026 first session, notified on 18 February, was examined from 17 July to 8 August 2026. As at 11 September 2026 no second-session notification for 2026 had been published; the 2024 second session was notified on 21 December 2024. Session names and examination months have drifted — plan by the notification’s dates.',
    },
    {
      q: 'Who can sit KPSC departmental examinations?',
      a: 'Serving state government servants and permanent employees of state corporations, boards, local bodies, universities and authorities, for the subjects their department’s schedule under the 1974 rules prescribes. Group D employees may not apply, and no paper is open to the public. The Subordinate Accounts Service examination needs three years’ service as a first division clerk or six as a second and a pass in Accounts Higher.',
    },
    {
      q: 'What is the fee for KPSC departmental examinations?',
      a: '₹50 or ₹100 per subject, depending on the subject code, under a 2010 government order — ₹100 for the accounts, revenue, commercial taxes, forest, PWD, Kannada and SAS papers among others, ₹50 for the manuals, the forest-guard papers, prisons, excise, the Contract Act and others. Paid through Seva Sindhu, not refunded, and with no exemption by category stated.',
    },
    {
      q: 'What are the pass marks for KPSC departmental examinations?',
      a: 'Thirty-five per cent in a paper, with a paper-exemption rule under Rule 9(3) of the 1965 conduct rules: a candidate scoring sixty per cent or more in any paper of a multi-paper examination is deemed to have passed it, provided the remaining papers are passed within two years of the result. Results are published as first class and pass class; the first-class threshold is not stated in any document found.',
    },
    {
      q: 'Is the Kannada language examination part of the KPSC departmental examinations?',
      a: 'Yes. State employees sit it under code 47 — two written papers and a viva-voce — and IAS, IPS and IFS officers under code 72. Employees who passed SSLC or higher with Kannada, hold a listed Kannada certificate, passed a Kannada test at recruitment, or are Section 115 allottees aged 45 or over are exempt on certificate, but must still apply and pay for the code. A viva-only version exists for home guards, blind employees and the printing cadres.',
    },
    {
      q: 'Are KPSC departmental examinations online?',
      a: 'The 99 objective papers may be held on OMR sheets or as computer-based tests at the commission’s discretion. The 19 descriptive papers are written in question-cum-answer booklets, wholly in English or wholly in Kannada. Most papers run two hours, a dozen three, and the second Kannada paper one.',
    },
    {
      q: 'Can I get revaluation or a marks statement for a KPSC departmental examination?',
      a: 'No revaluation. Retotalling is available for the descriptive papers only, at ₹100 a subject, online, within thirty days of the result. No separate marks statement is issued; marks are published with the result on the commission’s site, and certificates are downloaded through Seva Sindhu and DigiLocker.',
    },
    {
      q: 'Does KPSC publish previous departmental question papers?',
      a: 'Only the Kannada language papers — Paper 1 and the Paper 2 for all-India officers. No paper for the accounts, revenue, law or departmental subjects was found on the commission’s site.',
    },
  ],
}

/* ── Karnataka State Police ─────────────────────────────────────
   Since 2024 the written examination for police posts has been conducted by
   the Karnataka Examinations Authority, and in 2026 the applications went
   through KEA's portal too; the recruitment cell keeps the physical tests and
   the select lists. The 2021 sub-inspector notifications were only finalised
   in 2025, after the 545-post written examination was cancelled and re-held.
   The older application domain ksp-online.in now serves an unrelated site
   and must not be linked. All notifications are in Kannada. */
const KSP = {
  recruitment: 'https://ksp-recruitment.in/',
  recruitmentPage: 'https://ksp.karnataka.gov.in/info-3/Recruitment/en',
  archive2021: 'https://arc21.ksp-recruitment.in/',
  scores: 'https://score.ksp-recruitment.in/',
  kea: 'https://cetonline.karnataka.gov.in/kea/',
  keaCpc2026: 'https://cetonline.karnataka.gov.in/kea/cpcrpc2026',
  keaApc2026: 'https://cetonline.karnataka.gov.in/kea/apcrpc',
  keaKsrp2026: 'https://cetonline.karnataka.gov.in/kea/kisrpc2026',
  keaKsrpKk2026: 'https://cetonline.karnataka.gov.in/kea/kiskk2026',
  keaPsi402: 'https://cetonline.karnataka.gov.in/kea/psirec2024',
  keaPsi545: 'https://cetonline.karnataka.gov.in/kea/psi2023',
}

const KA_POLICE_SRC = {
  cpc3395: 'https://ksp.karnataka.gov.in/storage/pdf-files/Police%20Constable%20(Civil)%20Recruitment%202026%E2%80%9327-3395%20Posts.pdf',
  cpc596: 'https://ksp.karnataka.gov.in/storage/pdf-files/Police%20Constable%20(Civil)%20Recruitment%202026%E2%80%9327%20%E2%80%93%20Kalyana%20Karnataka%20596%20Posts.pdf',
  apc1421: 'https://ksp.karnataka.gov.in/storage/pdf-files/1421.pdf',
  apc179: 'https://ksp.karnataka.gov.in/storage/pdf-files/179.pdf',
  ksrp1455: 'https://cetonline.karnataka.gov.in/keawebentry456/kisrpc2026/ksrpnkkkannada.pdf',
  ksrpKk859: 'https://cetonline.karnataka.gov.in/keawebentry456/kiskk2026/ksrpkkkannada.pdf',
  cpcMarksNote: 'https://cetonline.karnataka.gov.in/keawebentry456/cpcrpc2026/CPC_RPC_NOTE_PRV_20082026kannada.pdf',
  cpcKeyRevised: 'https://cetonline.karnataka.gov.in/keawebentry456/cpcrpc2026/CPC_KEY_RPC_07082026kannada.pdf',
  apcKeyRevised: 'https://cetonline.karnataka.gov.in/keawebentry456/apcrpc/CAR_DAR_RPC_REV_KEY_10092026kannada.pdf',
  kannadaTestNote: 'https://cetonline.karnataka.gov.in/keawebentry456/cpcrpc2026/KANNADA_REC_NOTE_02092026kannada.pdf',
  ksrpKkReschedule: 'https://cetonline.karnataka.gov.in/keawebentry456/kiskk2026/KSRP_KK_3-5_SCHDkannada.pdf',
  psi545Corrigendum: 'https://arc21.ksp-recruitment.in/assets/documents/PSI545_PSL_ENG_v1a.pdf',
  psi545Final: 'https://arc21.ksp-recruitment.in/assets/documents/PSI545_FSL_v1.pdf',
  psi402Psl: 'https://arc21.ksp-recruitment.in/assets/documents/PSI402_PSL_ENG_v1.pdf',
  psi402Final: 'https://arc21.ksp-recruitment.in/assets/documents/PSI402_FSL_v1.pdf',
  psi402Paper1: 'https://cetonline.karnataka.gov.in/keawebentry456/PSIREC2024/paper_1_bell_timings_psikannada.pdf',
  psi402Paper2: 'https://cetonline.karnataka.gov.in/keawebentry456/PSIREC2024/paper_2_Bell_Timings_PSIkannada.pdf',
  psi402Key: 'https://cetonline.karnataka.gov.in/keawebentry456/PSIREC2024/PSI_KEY_2024_kannada.pdf',
  psi545Key: 'https://cetonline.karnataka.gov.in/keawebentry456/PSI2023/final_PSI_key_answerskannada.pdf',
}

const KA_POLICE = {
  slug: 'karnataka-police',
  path: '/government-exams/state/karnataka/karnataka-police/',
  name: 'Karnataka Police',
  fullName: 'Karnataka State Police — Police Sub-Inspector and Police Constable recruitment',
  authority: 'Karnataka State Police recruitment cell, with the Karnataka Examinations Authority conducting the written examination',
  official: 'ksp-recruitment.in',
  seoTitle: 'Karnataka Police PSI & Constable 2026: Notifications, Pattern, PST/ET',
  metaDescription:
    'Karnataka Police PSI and Constable — the 2026 constable cycle of 7,905 posts, the 100-mark paper that penalises blanks, PST and ET, and the PSI scheme.',
  lead: [
    'Karnataka recruits its constables and sub-inspectors through the State Police recruitment cell, cadre by cadre — civil police, armed reserve, the State Reserve Police, the industrial security force — with a separate notification for the Kalyana Karnataka local cadre each time. Since 2024 the written examination has been set and marked by the Karnataka Examinations Authority, and in 2026 the applications went through KEA’s portal as well; the recruitment cell keeps the physical tests, the medical examination and the select lists.',
    'Two things set the state apart. For constables the written examination comes first and the physical tests follow, for one candidate in five by merit — and the paper deducts a quarter mark for a wrong answer and a quarter mark for a question left with no bubble shaded. For sub-inspectors the scheme reverses: physical tests first, then a descriptive paper and an objective paper whose marks are added together. No post in either scheme has an interview.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'Karnataka State Police recruitment cell; KEA conducts the written examination'],
    ['2026 constable cycle', 'Six notifications, 7,905 posts — civil 3,991, armed 1,600, KSRP, KSISF and IRB 2,314; all windows closed by 10 August 2026'],
    ['Sub-inspector', 'No notification since March 2021; the 545- and 402-post recruitments were finalised in August and September 2025'],
    ['Constable paper', '100 questions, 100 marks, 90 minutes; −0.25 for a wrong answer and for a blank; 30 to qualify'],
    ['Fee, 2026', '₹750; ₹500 for SC, ST, Category I, ex-servicemen and third-gender candidates'],
    ['Age, 2026', '18 to 33 with a one-time five-year relaxation; 35 for reserved categories; 38 for tribal candidates of the forest areas'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The constable recruitment of 2026 is the largest the state has run in years, and it is structured as six parallel notifications rather than one. Civil police constables were notified on 5 June for 3,395 residual-cadre posts and 596 Kalyana Karnataka posts; armed police constables for the city and district armed reserves on 19 June for 1,421 and 179; and the State Reserve Police, the industrial security force and the India Reserve Battalion on 10 July for 1,455 and 859. Each pair shares one written examination, and a Kalyana Karnataka candidate may apply to the local cadre or the residual cadre — but to only one unit or battalion per notification.',
    },
    {
      type: 'p',
      text: 'The sub-inspector recruitments are older and have a history. The 545-post notification of January 2021 had its written examination cancelled in April 2022 after a CID investigation found irregularities; the High Court directed a re-examination by an independent agency at no fresh fee, KEA re-held it in January 2024, and the final select list was published in August 2025. The 402-post notification of March 2021 was transferred to KEA in 2024, examined in October 2024, and finalised in September 2025. No new sub-inspector notification has been published since, and a July 2026 press report of 253 posts sanctioned for direct recruitment has no counterpart on any official page.',
    },
    {
      type: 'list',
      title: 'What the cadres have in common',
      items: [
        { text: 'One written examination per pair', note: 'the residual and Kalyana Karnataka notifications for a post sit the same paper on the same day, and the local cadre is filled under the 2013 reservation order made under Article 371J.' },
        { text: 'Physical tests carry no marks', note: 'the physical standard test and the endurance test are qualifying only, for constables and sub-inspectors alike. The constable merit list is the written score; the sub-inspector list is the two papers added.' },
        { text: 'A Kannada test for those who did not study it', note: 'candidates who did not take Kannada as a first or second language at SSLC or above must pass a separate 150-mark Kannada test with 50 marks. The 2026 test was held on 22 August for the armed, reserve and industrial cadres.' },
        { text: 'In-service and ex-servicemen quotas', note: 'each notification reserves posts for serving police personnel and applies a service-plus-three-years age rule for ex-servicemen, whose zero or negative written scores are not considered.' },
      ],
    },
    {
      type: 'note',
      title: 'Where to look, and where not to',
      text: 'The recruitment cell’s portal is ksp-recruitment.in, with the 2021 sub-inspector documents at its arc21 archive and score sheets at its score sub-domain; the written-examination pages, keys and marks lists are on KEA’s site. The older application domain ksp-online.in now serves an unrelated commercial site, and the recruitment.ksp.gov.in address serves a blank page. Every notification is in Kannada, and the notification numbers appear in Kannada on the documents and as RECT on the portal — 02/RECT-4/2026-27 and 02/ನೇಮಕಾತಿ-4/2026-27 are the same document.',
    },
  ],
  stages: [
    {
      name: 'Written examination — constable',
      mode: 'OMR, 100 marks, 90 minutes, first stage',
      detail:
        'General studies and mental ability in one paper of 100 questions, Kannada and English medium. A quarter mark off for a wrong answer and a quarter mark off for a question with no bubble shaded — the sheet has a fifth bubble for unanswered questions and five extra minutes to shade it. Thirty marks to qualify.',
    },
    {
      name: 'Physical standard and endurance tests',
      mode: 'Qualifying, for one candidate in five by written merit',
      detail:
        'The recruitment cell calls candidates in the ratio of one to five per category from the written merit — up to one to ten if too few qualify — for height, chest and weight measurement and then the run, jump and shot put. No marks; a fail ends the candidacy.',
    },
    {
      name: 'Medical examination and verification',
      mode: 'One to two by written marks',
      detail:
        'Candidates who pass the physical tests are listed one to two on written marks per category, examined medically, and have their certificates verified. The select list is the written score in reservation order.',
    },
    {
      name: 'Sub-inspector — physical tests, then two papers',
      mode: 'Descriptive 50 and objective 150, marks added',
      detail:
        'Under the 2021 scheme the endurance and physical standard tests come first and only those who pass sit the papers: Paper 1 of 50 marks in ninety minutes — an essay, a précis and two translations — and Paper 2 of 100 questions at 1.5 marks each with 0.375 off for a wrong answer. The select list is the two totals added. No interview.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No police window is open. The civil constable applications closed on 3 July 2026, the armed constable applications on 22 July and the reserve and industrial applications on 10 August, with no extension published for any of them. The civil constable paper was held on 2 August and the final marks list handed to the recruitment cell on 20 August, restricted to candidates with thirty marks or more; the one-in-five physical-test lists are published unit by unit on the recruitment portal. The armed constable paper was held on 6 September with a revised key on 10 September. The reserve and industrial papers are ahead, on 20 September 2026 — the residual cadre in the morning and the Kalyana Karnataka cadre rescheduled to three in the afternoon.`,
    },
    {
      type: 'table',
      caption: 'The 2026 constable notifications, from the notification PDFs and KEA’s pages. All in Kannada.',
      head: ['Post', 'Notification', 'Posts', 'Applications', 'Written examination', 'Position at 11 September'],
      rows: [
        ['Civil constable — residual cadre', '02/RECT-4/2026-27, 5 June 2026', '3,395', '8 June to 3 July 2026', '2 August 2026', 'Marks list issued 20 August; physical-test lists published'],
        ['Civil constable — Kalyana Karnataka', '01/RECT-4/2026-27, 5 June 2026', '596', '8 June to 3 July 2026', '2 August 2026', 'As above'],
        ['Armed constable, CAR and DAR, men — residual', '04/RECT-5(A)/2026-27, 19 June 2026', '1,421', '22 June to 22 July 2026', '6 September 2026', 'Revised key 10 September'],
        ['Armed constable, CAR and DAR, men — Kalyana Karnataka', '04/RECT-5(B)/2026-27, 19 June 2026', '179', '22 June to 22 July 2026', '6 September 2026', 'As above'],
        ['KSRP constable, men and women — residual', '03/RECT-3(B)/RPC/2026-27, 10 July 2026', '1,455 — 1,382 men, 73 women', '13 July to 10 August 2026', '20 September 2026, 10.30 to 12.00', 'Kannada test held 22 August; paper ahead'],
        ['KSRP, KSISF and IRB — Kalyana Karnataka', '07/RECT-3(B)/KK/2026-27, 10 July 2026', '859 — KSRP 334, KSISF 364, IRB 161', '13 July to 10 August 2026', '20 September 2026, 3.00 to 4.30', 'Rescheduled by KEA note of 10 September'],
      ],
    },
    {
      type: 'table',
      caption: 'The sub-inspector recruitments, both finalised in 2025.',
      head: ['Notification', 'Posts', 'What happened', 'Final select list'],
      rows: [
        ['98/RECT-2/2020-21, 21 January 2021', '545', 'Written examination of 3 October 2021 cancelled by government order of 29 April 2022 on the CID’s findings; High Court order of 10 November 2022 directed a re-examination by an independent agency at no fresh fee; KEA re-held it on 23 January 2024; provisional lists October 2024 and April 2025', '25 August 2025'],
        ['08/RECT-2/2021-22, 3 March 2021', '402', 'Written examination transferred to KEA by order of 22 February 2024; held 3 October 2024; provisional list 26 December 2024', '9 September 2025'],
      ],
    },
    {
      type: 'note',
      title: 'The portal still says “Open”',
      text: 'The table on ksp-recruitment.in labels the 2026 rows as open, but every closing date it lists has passed. A press report of 18 July 2026 says 600 civil sub-inspector posts have been sanctioned with 253 to be filled by direct recruitment in a first phase; no government order, notification or date for it appears on any official page, and it should be treated as unconfirmed until one does.',
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'KSP recruitment portal', href: KSP.recruitment },
        { label: 'KSP recruitment page — Karnataka State Police', href: KSP.recruitmentPage },
        { label: 'KEA — civil constable 2026', href: KSP.keaCpc2026 },
        { label: 'KEA — armed constable 2026', href: KSP.keaApc2026 },
        { label: 'KEA — KSRP 2026', href: KSP.keaKsrp2026 },
        { label: 'KEA — KSRP, KSISF and IRB, Kalyana Karnataka 2026', href: KSP.keaKsrpKk2026 },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Constable, from the 2026 civil notification; the armed and reserve notifications carry the same text. Age on the closing date.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'PUC or its equivalent — class 12 of CBSE, ICSE or another state board, NIOS senior secondary, a two-year ITI with a language and a subject, the JTC, or a three-year diploma, under the government orders the notification lists.'],
        ['Age — direct', '18 to 33 for the general category, 35 for SC, ST, Category I, 2A, 2B, 3A and 3B, and 38 for tribal candidates residing in the state’s forest areas — each including a one-time five-year relaxation ordered on 29 January 2026.'],
        ['Age — in-service', '38 for the general category and 40 for reserved categories in the civil constable table.'],
        ['Ex-servicemen', 'Length of service plus three years. Zero or negative written scores are not considered.'],
        ['Kannada', 'Candidates who did not study Kannada as a first or second language at SSLC or above must pass a separate 150-mark Kannada test with 50 marks.'],
        ['Kalyana Karnataka', 'A local person may apply for the local cadre or the residual cadre, to one unit or battalion per notification; a local person who takes a residual post forfeits the Article 371J benefits for the rest of their service.'],
      ],
    },
    {
      type: 'table',
      caption: 'Sub-inspector, from the 402-post notification of March 2021 — the latest rules text there is. A new notification may change them.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'A degree from a university recognised by the UGC by the closing date; a diploma is not equivalent; distance degrees only where UGC-approved.'],
        ['Age', '21 to 30 for others and 32 for SC, ST and backward classes; in-service candidates 35 and 40; ex-servicemen service plus three years.'],
        ['In-service', 'Five years’ service as an assistant sub-inspector, head constable or constable.'],
        ['Pay', '₹37,900 to ₹70,850 on the 2021 scale; constables ₹37,500 to ₹76,100 in 2026.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees. Constable figures from the 2026 notifications; sub-inspector figures from 2021, and not known to have been revised.',
      head: ['Post', 'General, 2A, 2B, 3A, 3B', 'SC, ST, Category I'],
      rows: [
        ['Constable, 2026', '₹750', '₹500 — also for ex-servicemen and third-gender candidates'],
        ['Sub-inspector, 2021', '₹500', '₹250'],
      ],
    },
    {
      type: 'table',
      caption: 'Physical standards. Constable figures from the 2026 notifications, sub-inspector from 2021.',
      head: ['Candidates', 'Height', 'Chest or weight'],
      rows: [
        ['Men — all cadres, in-service and ex-servicemen', '168 cm', 'Chest 86 cm fully expanded, with 5 cm expansion. Ex-servicemen below 168 cm are considered only if enough taller candidates are not available.'],
        ['Women and third-gender — civil constable and sub-inspector', '157 cm', '45 kg'],
        ['Women — KSRP', '158 cm', '45 kg'],
        ['Tribal men of the forest areas', '155 cm', 'Chest 75 cm with 5 cm expansion'],
        ['Tribal women of the forest areas', '150 cm', '45 kg where stated'],
      ],
    },
    {
      type: 'table',
      caption: 'Endurance test — qualifying only, three attempts at the jumps and shot put, one at the run.',
      head: ['Candidates', 'Run', 'Long jump or high jump', 'Shot put'],
      rows: [
        ['Constable men — civil, armed, KSRP, and in-service men', '1,600 m in 6 minutes 30 seconds', '3.80 m or 1.20 m', '7.26 kg to 5.60 m'],
        ['Constable women, third-gender and ex-servicemen', '400 m in 2 minutes', '2.50 m or 0.90 m', '4 kg to 3.75 m'],
        ['KSRP women', '400 m in 1 minute 30 seconds', '2.50 m or 0.90 m', '4 kg to 3.75 m'],
        ['Sub-inspector men, 2021', '1,600 m in 7 minutes', '3.8 m or 1.20 m', '7.26 kg to 5.60 m'],
        ['Sub-inspector women, in-service and ex-servicemen, 2021', '400 m in 2 minutes', '2.50 m or 0.90 m', '4 kg to 3.75 m'],
      ],
    },
    {
      type: 'p',
      text: 'The notifications define tribal candidates as members of the Siddi, Jenukuruba, Kadukuruba, Yerava, Soliga, Kudiya, Gowdlu, Hasalaru, Malekudiya and Koraga communities residing in the forest areas of Uttara Kannada, Dakshina Kannada, Udupi, Chikkamagaluru, Shivamogga, Kodagu, Chamarajanagar and Mysuru. The 2021 sub-inspector medical standards required 6/9 and 6/9 or 6/9 and 6/12 distant vision, disqualified colour blindness, squint, varicose veins and a speech impediment, and included a chest X-ray.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Constable written examination — the same scheme in the civil, armed and reserve notifications of 2026, set and marked by KEA.',
      head: ['Feature', 'Rule'],
      rows: [
        ['Paper', 'General studies and mental ability — general knowledge, geography, history, the Constitution, the national movement, current affairs, mental ability and moral education'],
        ['Questions and marks', '100 questions, 100 marks, one mark each, four options'],
        ['Time', '90 minutes, with five extra minutes after the last bell to shade the fifth bubble on unanswered questions'],
        ['Negative marking', '0.25 for a wrong answer, and 0.25 for a question with no bubble shaded — the fifth bubble is the only safe way to leave a question'],
        ['Qualifying', '30 marks, under the 2020 amendment to the recruitment rules; KEA’s marks list of 20 August 2026 was cut at 30'],
        ['Medium', 'Kannada and English'],
        ['Kannada', 'No Kannada component inside the paper; the separate 150-mark test applies to those not exempt'],
      ],
    },
    {
      type: 'table',
      caption: 'Sub-inspector written examination — the 2021 scheme, as KEA conducted it on 3 October 2024.',
      head: ['Paper', 'Content', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Paper 1 — descriptive', 'Essay of up to 600 words for 20, précis for 10, translation Kannada to English and English to Kannada for 20', '50', '90 minutes, morning', 'Essay in English or Kannada; written in a question-cum-answer booklet; computerised and second or third evaluation'],
        ['Paper 2 — objective', 'Current events, general studies, the national movement, the Constitution, history, geography, science, arts and literature, mental ability and moral education', '100 questions at 1.5 marks — 150', '90 minutes, afternoon', '25 per cent off for a wrong answer — 0.375 marks; OMR'],
      ],
    },
    {
      type: 'note',
      title: 'The order of the stages is the opposite in the two posts',
      text: 'For constables in 2026 the written examination is the first stage and the physical tests follow for one candidate in five by written merit. For sub-inspectors under the 2021 scheme the endurance and physical standard tests come first and only those who pass are called to the two papers. In both cases the physical tests carry no marks, and neither post has an interview or viva-voce — the constable list is the written score, and the sub-inspector list is Paper 1 and Paper 2 added, as the published select lists show candidate by candidate. No minimum mark per paper for sub-inspectors was found in the notification.',
    },
    {
      type: 'list',
      title: 'What the 2026 documents settle',
      items: [
        { text: 'The physical-test ratio', note: 'one to five per category from the written merit, rising to one to ten if too few candidates qualify; then one to two by written marks for the medical examination.' },
        { text: 'Only keys are published', note: 'KEA posts the provisional and revised keys and the marks list, and candidates can view their OMR sheet through KEA’s recruitment portal; the question booklets themselves are not published.' },
        { text: 'The Kannada test is separate and earlier', note: 'held on 22 August 2026 for the armed, reserve and industrial applicants, with a final score list on 2 September, before their written papers.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the six 2026 constable notifications, KEA’s per-recruitment pages and notes, and the recruitment cell’s 2021 archive. Constable eligibility, fees, the paper scheme, the negative-marking clause and the physical standards are transcribed from the 3,395-post civil notification and cross-checked against the armed and reserve notifications, all in Kannada. The sub-inspector scheme is from the 402-post notification of March 2021, read from the Karnataka Gazette of 3 March 2021 as hosted by a third party — no official copy remains online — and from KEA’s bell-timing sheets for the October 2024 examination. The 545-post notification itself was not found; its history is from the recruitment cell’s corrigendum of June 2025.`,
    },
    {
      type: 'links',
      title: 'Official notifications, notes and lists',
      items: [
        { label: 'Civil constable, 3,395 posts — notification, 5 June 2026', href: KA_POLICE_SRC.cpc3395 },
        { label: 'Civil constable, Kalyana Karnataka, 596 posts', href: KA_POLICE_SRC.cpc596 },
        { label: 'Armed constable, 1,421 posts', href: KA_POLICE_SRC.apc1421 },
        { label: 'Armed constable, Kalyana Karnataka, 179 posts', href: KA_POLICE_SRC.apc179 },
        { label: 'KSRP constable, 1,455 posts', href: KA_POLICE_SRC.ksrp1455 },
        { label: 'KSRP, KSISF and IRB, Kalyana Karnataka, 859 posts', href: KA_POLICE_SRC.ksrpKk859 },
        { label: 'KEA note on the civil constable marks list, 20 August 2026', href: KA_POLICE_SRC.cpcMarksNote },
        { label: 'KEA note on the Kannada test score list, 2 September 2026', href: KA_POLICE_SRC.kannadaTestNote },
        { label: 'KEA reschedule of the KSRP Kalyana Karnataka paper, 10 September 2026', href: KA_POLICE_SRC.ksrpKkReschedule },
        { label: 'Sub-inspector 545 — corrigendum with the cancellation and re-examination history', href: KA_POLICE_SRC.psi545Corrigendum },
        { label: 'Sub-inspector 545 — final select list, 25 August 2025', href: KA_POLICE_SRC.psi545Final },
        { label: 'Sub-inspector 402 — provisional select list with paper-wise marks', href: KA_POLICE_SRC.psi402Psl },
        { label: 'Sub-inspector 402 — final select list, 9 September 2025', href: KA_POLICE_SRC.psi402Final },
        { label: 'KSP 2021 recruitment archive', href: KSP.archive2021 },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Karnataka Police syllabus — the general studies and mental ability paper for constables, and the descriptive and objective papers for sub-inspectors.',
      lead: [
        'Neither post has a separate syllabus document. The syllabus is a paragraph in the notification, and this is what it says.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Constable — general studies and mental ability, 100 marks',
              'General knowledge, geography, history, the Indian Constitution, the national movement, current affairs, mental ability and moral education. One paper, Kannada and English medium, 90 minutes.',
            ],
            [
              'Sub-inspector Paper 1 — descriptive, 50 marks',
              'An essay of up to 600 words for 20 marks, in English or Kannada; a précis for 10; a translation from Kannada to English and from English to Kannada for 20 together.',
            ],
            [
              'Sub-inspector Paper 2 — objective, 150 marks',
              'Current events, general studies, the Indian national movement, the Constitution, history, geography, science, arts and literature, mental ability and moral education. 100 questions at 1.5 marks.',
            ],
            [
              'Kannada language test — for those not exempt',
              'A separate 150-mark test with 50 to pass, for candidates who did not study Kannada as a first or second language at SSLC or above. Not part of the merit.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus sources',
          items: [
            { label: 'Civil constable notification, 2026 — syllabus on page 5', href: KA_POLICE_SRC.cpc3395 },
            { label: 'KEA Paper 1 sheet — sub-inspector 2024', href: KA_POLICE_SRC.psi402Paper1 },
            { label: 'KEA Paper 2 sheet — sub-inspector 2024', href: KA_POLICE_SRC.psi402Paper2 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Karnataka Police exam pattern — the constable 100-mark paper with a quarter mark off for wrong and blank answers, and the sub-inspector 50 plus 150 scheme.',
      lead: [
        'The fifth bubble is the rule that decides constable scores in Karnataka.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Side by side.',
          head: ['Feature', 'Constable, 2026', 'Sub-inspector, 2021 scheme'],
          rows: [
            ['Order', 'Written, then PST and ET for one in five', 'ET and PST, then written for those who pass'],
            ['Written', '100 questions, 100 marks, 90 minutes', 'Paper 1 descriptive 50; Paper 2 objective 150'],
            ['Negative marking', '0.25 for wrong; 0.25 for no bubble', '0.375 per wrong answer in Paper 2'],
            ['Qualifying', '30 marks', 'Not stated in the notification'],
            ['Merit', 'Written marks', 'Paper 1 plus Paper 2'],
            ['Interview', 'None', 'None'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Karnataka Police previous papers — the KEA answer keys for the 2026 constable and 2024 sub-inspector papers, and what they show about the questions.',
      lead: [
        'KEA publishes keys and marks lists but not the question booklets. The keys still show the paper’s shape, and the OMR viewer shows your own sheet.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Civil constable, 2 August 2026', note: 'provisional key of 3 August and revised key of 7 August, on KEA’s civil constable page; OMR sheets viewable through KEA’s recruitment portal.' },
            { text: 'Armed constable, 6 September 2026', note: 'key of 7 September and revised key of 10 September.' },
            { text: 'Sub-inspector 402, 3 October 2024', note: 'Paper 2 key of 4 October and final key of 6 November 2024, with the marks list.' },
            { text: 'Sub-inspector 545 re-examination, 23 January 2024', note: 'provisional, revised and final keys and score lists on KEA’s PSI 2023 page.' },
            { text: 'Sub-inspector marks 2014 to 2019', note: 'paper-wise marks on the recruitment cell’s score portal, behind a login.' },
          ],
        },
        {
          type: 'links',
          title: 'Keys and lists',
          items: [
            { label: 'Civil constable 2026 — revised key, 7 August', href: KA_POLICE_SRC.cpcKeyRevised },
            { label: 'Armed constable 2026 — revised key, 10 September', href: KA_POLICE_SRC.apcKeyRevised },
            { label: 'Sub-inspector 402 — Paper 2 key, 2024', href: KA_POLICE_SRC.psi402Key },
            { label: 'Sub-inspector 545 — final key, 2024 re-examination', href: KA_POLICE_SRC.psi545Key },
            { label: 'KEA — sub-inspector 402 page', href: KSP.keaPsi402 },
            { label: 'KEA — sub-inspector 545 page', href: KSP.keaPsi545 },
            { label: 'KSP score portal', href: KSP.scores },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Karnataka Police mock tests — 100-question sittings with the fifth-bubble rule, and timed essay, précis and translation practice for the sub-inspector paper.',
      lead: [
        'Score every mock the way KEA scores the paper: a quarter off for wrong and a quarter off for blank.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by post',
          items: [
            { title: 'Constable — 100 questions in 90 minutes', text: 'General studies and mental ability, in the medium you will write in. Mark the fifth bubble on every question you skip; then score at −0.25 for wrong and for blank, and watch whether the 30-mark floor and the one-in-five cut are within reach.' },
            { title: 'Sub-inspector Paper 1 — 90 minutes by hand', text: 'An essay under 600 words, a précis and two translations in one sitting. The translations between Kannada and English are the part most candidates leave to the end.' },
            { title: 'Sub-inspector Paper 2 — 100 questions at 1.5', text: 'Score at −0.375 per wrong answer. The two paper totals are added; a strong Paper 1 is worth as much as a third of Paper 2.' },
            { title: 'The endurance test', text: '1,600 metres in 6 minutes 30 seconds for constable men, 7 minutes for sub-inspector men; 400 metres in 2 minutes for women, or 1 minute 30 for KSRP women. Train it as seriously as the paper — it carries no marks but ends the candidacy.' },
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
        'Karnataka Police preparation — following six parallel notifications, choosing a cadre, the Kannada test, and getting through PST and ET.',
      lead: [
        'The choice of cadre and the physical tests decide as much as the paper does.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From notification to select list',
          items: [
            { title: 'Watch two sites', text: 'Notifications appear on ksp-recruitment.in and the KSP recruitment page; the written examination, keys and marks lists are on KEA’s site. Ignore ksp-online.in, which no longer belongs to the police.' },
            { title: 'Choose the cadre and the unit', text: 'Civil, armed, KSRP, KSISF and IRB are notified separately, and a Kalyana Karnataka candidate applies to one unit or battalion per notification. A local person who takes a residual post forfeits the 371J benefits for good.' },
            { title: 'Settle the Kannada question early', text: 'If you did not study Kannada at SSLC or above, the separate 150-mark test comes before the written paper — it was held on 22 August 2026 for a 20 September paper.' },
            { title: 'Prepare the paper and the body together', text: 'The physical tests follow the paper for one candidate in five, within weeks. Height and chest cannot be trained in a month; the run can.' },
            { title: 'Keep the documents ready', text: 'Category, Kalyana Karnataka and in-service certificates are verified after the medical examination; a missing one at that stage is a lost place.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Karnataka Police study material — what to read for general studies and mental ability, the sub-inspector descriptive paper, and the Kannada test.',
      lead: [
        'Work from the notification’s subject list and the state’s own school books; the paper is set in Kannada and English at that level.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['General studies — constable and sub-inspector Paper 2', 'Karnataka state textbooks for history, geography and civics; a Constitution primer; a year of current affairs', 'Karnataka’s own history and geography are asked; the paper is bilingual.'],
            ['Mental ability', 'A reasoning workbook, ten minutes a day', 'Around a fifth of the constable paper in practice.'],
            ['Sub-inspector Paper 1', 'Essay, précis and translation practice with a reader in both languages', 'Translation both ways; the essay may be in either language.'],
            ['Kannada test', 'A school-level Kannada reader', 'Only for candidates not exempt; 50 of 150 to pass.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Police exam preparation', to: '/government-exams/police/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any Karnataka Police recruitment open now?',
      a: 'No. The six 2026 constable notifications closed between 3 July and 10 August 2026. The civil and armed constable papers have been held; the KSRP, KSISF and IRB papers are on 20 September 2026. No sub-inspector notification has been published since March 2021 — the press report of 253 posts in July 2026 has no official counterpart yet.',
    },
    {
      q: 'What is the Karnataka Police Constable exam pattern in 2026?',
      a: 'One OMR paper of 100 questions and 100 marks in 90 minutes, on general studies and mental ability, set and marked by KEA. A quarter mark is deducted for a wrong answer and a quarter mark for a question with no bubble shaded — a fifth bubble is provided for unanswered questions. Thirty marks qualify; the physical tests follow for one candidate in five by written merit, and the merit list is the written score alone.',
    },
    {
      q: 'What is the Karnataka PSI exam pattern?',
      a: 'Under the 2021 scheme as KEA conducted it in 2024: the endurance and physical standard tests first, then Paper 1 of 50 marks in 90 minutes — an essay of up to 600 words, a précis and two translations — and Paper 2 of 100 objective questions at 1.5 marks each, 150 in total, with 0.375 deducted per wrong answer. The two totals are added for the select list. There is no interview. A new notification may change the scheme.',
    },
    {
      q: 'What are the physical standards for Karnataka Police?',
      a: 'Men: 168 cm height and 86 cm chest fully expanded with 5 cm expansion; women 157 cm and 45 kg, or 158 cm for KSRP; tribal candidates of the listed forest areas 155 cm and 75 cm chest for men, 150 cm for women. Endurance: 1,600 metres in 6 minutes 30 seconds for constable men and 7 minutes for sub-inspector men, plus a long or high jump and shot put; 400 metres in 2 minutes for women, or 1 minute 30 for KSRP women. All qualifying only.',
    },
    {
      q: 'What is the age limit for Karnataka Police Constable in 2026?',
      a: 'Eighteen to 33 for the general category, 35 for SC, ST, Category I and the 2A, 2B, 3A and 3B categories, and 38 for tribal candidates of the forest areas — each including a one-time five-year relaxation ordered on 29 January 2026. In-service candidates 38 and 40; ex-servicemen their service plus three years. For sub-inspectors the 2021 limits were 21 to 30, or 32 for reserved categories.',
    },
    {
      q: 'What is the fee for Karnataka Police recruitment?',
      a: 'For the 2026 constable posts, ₹750 for the general category and the 2A, 2B, 3A and 3B categories, and ₹500 for SC, ST, Category I, ex-servicemen and third-gender candidates, non-refundable. The 2021 sub-inspector fee was ₹500 and ₹250; whether it has been revised is not known.',
    },
    {
      q: 'Is there a Kannada test for Karnataka Police?',
      a: 'Yes, for candidates who did not study Kannada as a first or second language at SSLC or above — a separate 150-mark test with 50 to pass, held before the written paper and not counted in the merit. Candidates who studied Kannada at school are exempt. The paper itself has no Kannada component.',
    },
    {
      q: 'What happened to the Karnataka PSI 545 recruitment?',
      a: 'The written examination of 3 October 2021 was cancelled by government order of 29 April 2022 after a CID investigation found irregularities. The High Court of Karnataka, on 10 November 2022, directed a re-examination by an independent agency at no fresh fee; KEA held it on 23 January 2024, provisional select lists followed in October 2024 and April 2025, and the final select list was published on 25 August 2025.',
    },
  ],
}

/* ── Karnataka teaching posts ───────────────────────────────────
   Two systems. The School Education Department's Centralised Admission Cell
   runs KARTET and the teacher direct recruitment, both notified district by
   district in the Karnataka Gazette; KEA runs the pre-university and
   collegiate recruitments. The 2026 direct recruitment is the first under
   the Special Rules of August 2026 and is open at the date checked. */
const KA_TEACH_SRC = {
  schoolEd: 'https://schooleducation.karnataka.gov.in/',
  tetPortal: 'https://sts.karnataka.gov.in/TET/',
  tetNotification: 'https://schooleducation.karnataka.gov.in/uploads/media_to_upload1760804593.pdf',
  tetSyllabus: 'https://schooleducation.karnataka.gov.in/uploads/media_to_upload1760804671.pdf',
  tetCorrigendum: 'https://schooleducation.karnataka.gov.in/uploads/media_to_upload1761826692.pdf',
  tetKey: 'https://schooleducation.karnataka.gov.in/uploads/media_to_upload1765122387.pdf',
  tetResultNotice: 'https://schooleducation.karnataka.gov.in/uploads/media_to_upload1768384786.pdf',
  gstrPortal: 'https://sts.karnataka.gov.in/GPSTRNHK/',
  gstrInstructions: 'https://schooleducation.karnataka.gov.in/uploads/media_to_upload1786777598.pdf',
  gstrBengaluruRural: 'https://erajyapatra.karnataka.gov.in/WriteReadData/2026/10892.pdf',
  gstrMysuruAm: 'https://erajyapatra.karnataka.gov.in/WriteReadData/2026/10900.pdf',
  gstrShivamoggaPst: 'https://erajyapatra.karnataka.gov.in/WriteReadData/2026/10905.pdf',
  gstrExtension: 'https://erajyapatra.karnataka.gov.in/WriteReadData/2026/11229.pdf',
  puPrincipalPage: 'https://cetonline.karnataka.gov.in/kea/purecnhk2026',
  puPrincipalNotification: 'https://cetonline.karnataka.gov.in/keawebentry456/purecnhk2026/pucrecruitmentrpckannada.pdf',
  puPrincipalSyllabus: 'https://cetonline.karnataka.gov.in/keawebentry456/purecnhk2026/pucrecrtmtsyllabuskannada.pdf',
}

const KA_TEACHING = {
  slug: 'teaching-posts',
  path: '/government-exams/state/karnataka/teaching-posts/',
  name: 'Karnataka Teaching Posts',
  fullName: 'KARTET and the School Education Department’s teacher direct recruitment; KEA pre-university recruitment',
  authority: 'Centralised Admission Cell, School Education Department; Karnataka Examinations Authority for pre-university posts',
  official: 'schooleducation.karnataka.gov.in',
  seoTitle: 'Karnataka Teacher Recruitment 2026 & KARTET: Pattern, Weightage, Dates',
  metaDescription:
    'Karnataka teaching posts — the 2026 teacher recruitment open to 25 September, two 100-mark papers with 0.25 negative marking, the 70:20:8:2 weightage, KARTET.',
  lead: [
    'Karnataka fills its government school teaching posts through a district-level competitive examination run by the School Education Department’s Centralised Admission Cell, with the Karnataka Teacher Eligibility Test as the entry condition for primary and upper-primary posts. Both are notified in the Karnataka Gazette district by district and division by division, and both are examined on OMR sheets in Kannada and English. Pre-university and collegiate posts are recruited separately through the Karnataka Examinations Authority.',
    'The 2026 direct recruitment — primary, graduate primary, contract, high-school assistant master and physical education posts under Special Rules made on 10 August 2026 — is open, with the closing date extended to 25 September 2026 and the papers set for the first fortnight of October. Its selection formula is arithmetic, not judgement: the competitive examination carries 70 or 85 per cent, the TET score 20, and the degree and training marks the remainder. No teaching post in the state has an interview.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'Centralised Admission Cell, School Education Department; KEA for pre-university and collegiate posts'],
    ['Open now', 'Teacher direct recruitment 2026 — applications to 25 September 2026, fee reconciliation to 28 September; KEA PU principal recruitment, in-service only, to 4 October'],
    ['Examinations', '5 to 13 October 2026, by cadre — two OMR papers of 100 marks, 35 per cent in each'],
    ['Negative marking', '0.25 per wrong answer in the recruitment papers; none in KARTET'],
    ['KARTET', 'Last held 7 December 2025; 60 per cent to pass, 55 for reserved categories; certificate valid for life; no 2026 notification'],
    ['Fee', '₹750 per post; ₹500 for SC, ST, Category I, ex-servicemen, PwD and third-gender candidates'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The recruitment is decentralised by design. Primary, graduate primary and contract teacher posts are notified by each district’s deputy director; high-school assistant master and physical education Grade I posts by each of the four divisions; and the seven Kalyana Karnataka districts carry separate notifications for the 80 per cent local cadre and the 20 per cent residual cadre, with a further 8 per cent state-level local-cadre notification in Bengaluru North and Bengaluru Central. One online application covers every cadre, but a candidate chooses one district — or one division for assistant master — per post, and pays a separate fee for each.',
    },
    {
      type: 'p',
      text: 'The Bengaluru Rural notification of 11 August 2026 shows the shape of a district: 151 posts, of which 48 are graduate primary teachers of Kannada, 21 of English, 40 of mathematics and science, 13 of biological science, 25 of social science, and 4 contract teachers. The state total is not published on any single official page — press reports put it near 15,000, with about 8,500 graduate primary and 4,500 assistant master posts and nearly 7,000 in Kalyana Karnataka, but those figures are unconfirmed and the official numbers live only in each district’s gazette.',
    },
    {
      type: 'list',
      title: 'The cadres and what each needs',
      items: [
        { text: 'Primary school teacher, classes 1 to 5', note: 'PUC and a two-year diploma in elementary education or a four-year integrated degree, plus KARTET or CTET Paper 1 with 60 per cent, or 55 for SC, ST, Category I and PwD. Pay ₹41,300 to ₹81,800.' },
        { text: 'Graduate primary teacher, classes 6 to 8', note: 'a degree with 50 per cent, or 45 for reserved categories, plus a D.El.Ed, B.Ed or four-year integrated degree, and TET Paper 2 with 60 or 55 per cent. Pay ₹44,425 to ₹83,700.' },
        { text: 'Contract school teacher, classes 1 to 8', note: 'a degree; the TET and B.Ed are not required at application but must be completed within five years of appointment.' },
        { text: 'High-school assistant master', note: 'a degree with 50 per cent and a B.Ed, with subject-specific conditions — a Kannada assistant master needs an arts degree with Kannada as an optional, or a postgraduate degree in Kannada. No TET. Pay ₹54,175 to ₹99,400.' },
        { text: 'Physical education, Grades I and II', note: 'the physical education certificate or diploma; Grade I is a divisional post, Grade II a district one.' },
      ],
    },
    {
      type: 'note',
      title: 'The Kannada requirement is inside Paper 1',
      text: 'Unlike KPSC and KEA recruitments, the school teacher examination has no separate Kannada language test. General Kannada is a ten-mark section of Paper 1 alongside general English, and the question papers are set in Kannada and English with the English version authoritative. A candidate must score 35 per cent in each paper to be considered at all.',
    },
  ],
  stages: [
    {
      name: 'Notification and application',
      mode: 'District and divisional gazettes; one online application',
      detail:
        'Each district and division publishes its own gazette notification with its own vacancy table. The candidate registers once on the Centralised Admission Cell’s portal, chooses one district or division per post, and pays ₹750 per post — ₹1,125 for two posts in a cadre — or ₹500 and ₹750 for reserved categories.',
    },
    {
      name: 'Two papers, OMR',
      mode: '100 marks each; 35 per cent in each; 0.25 off per wrong answer',
      detail:
        'Paper 1 is general — general knowledge, current affairs, general Kannada, general English, educational psychology, computer literacy and value and health education. Paper 2 is the subject, 100 objective questions. A fifth bubble is shaded for questions left unanswered.',
    },
    {
      name: 'Weighted merit',
      mode: 'Competitive examination 70 or 85 per cent; TET 20; degree and training the rest',
      detail:
        'For primary and graduate primary teachers the examination carries 70 per cent, the TET paper 20, and the qualifying examination and training course 8 and 2 — or 10 for a four-year integrated degree. For assistant masters the examination carries 85 per cent, the degree 13 and the B.Ed 2. Ties go to the older candidate.',
    },
    {
      name: 'Verification and select list',
      mode: 'One to two, then one to one',
      detail:
        'A provisional list at one to two is called for document verification, a one-to-one provisional select list follows, objections are heard, and the final list is published. No interview.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The teacher direct recruitment of 2026 is open. Notified on 10 and 12 August 2026 under Special Rules made on 10 August, it took applications from 18 August with a closing date of 7 September, extended by addenda of 3 and 4 September to 25 September 2026 with fee reconciliation to 28 September — the extension confirmed on the department’s home page and in the Bengaluru North divisional addendum, though not every district’s addendum was read. The examinations are scheduled from 5 to 13 October by cadre. Separately, KEA notified 216 pre-university principal posts on 3 September 2026, open only to serving PU lecturers with ten years’ service, with applications to 4 October. No KARTET notification for 2026 has been published; KARTET 2025 was held on 7 December 2025 and its results issued on 13 January 2026.`,
    },
    {
      type: 'table',
      caption: 'The 2026 direct recruitment timetable, from the district and divisional gazettes read and the department’s notices.',
      head: ['Cadre', 'Notified by', 'Applications', 'Examination'],
      rows: [
        ['Primary school teacher and PE Grade II', 'Districts, 12 August 2026', '18 August to 25 September 2026', '5 October — Paper 1 morning, Paper 2 afternoon; 6 October — PE Grade II'],
        ['Graduate primary teacher and contract teacher', 'Districts, 11 August 2026', '18 August to 25 September 2026', '8 October — Paper 1, then CST Paper 2; 9 October — social science, biological science, mathematics and science; 10 October — Kannada and English'],
        ['High-school assistant master and PE Grade I', 'Divisions, 12 August 2026', '18 August to 25 September 2026', '12 October — Paper 1, then PE Grade I; 13 October — CBZ and arts, then Kannada and English'],
        ['KEA — PU principal, in-service', '3 September 2026', '7 September to 4 October 2026', 'Three papers of 150 marks; dates to be announced'],
      ],
    },
    {
      type: 'table',
      caption: 'KARTET 2025 — the last eligibility test held.',
      head: ['Event', 'Date'],
      rows: [
        ['Notification', '18 October 2025'],
        ['Applications', '23 October to 9 November 2025'],
        ['Corrigendum removing the degree-plus-B.Ed route to Paper 1', '30 October 2025'],
        ['Examination', '7 December 2025 — Paper 1 9.30 to 12.00, Paper 2 2.00 to 4.30'],
        ['Results and lifetime certificates', '13 January 2026, on the STS portal, with certificates for every cycle since 2014'],
      ],
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'School Education Department — notices', href: KA_TEACH_SRC.schoolEd },
        { label: 'Teacher recruitment 2026 — application portal', href: KA_TEACH_SRC.gstrPortal },
        { label: 'KARTET results and certificates', href: KA_TEACH_SRC.tetPortal },
        { label: 'KEA — PU principal recruitment 2026', href: KA_TEACH_SRC.puPrincipalPage },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Teacher direct recruitment 2026 — from the Bengaluru Rural, Mysuru and Shivamogga gazettes. Age on the closing date for applications.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Age', '21 minimum; 40 maximum for the general category, 43 for 2A, 2B, 3A and 3B, 45 for SC, ST, Category I and PwD.'],
        ['Primary school teacher', 'A two-year D.El.Ed or a four-year integrated degree, and KARTET or CTET Paper 1 with 60 per cent, or 55 for SC, ST, Category I and PwD.'],
        ['Graduate primary teacher', 'A degree with 50 per cent, or 45 for reserved categories, plus D.El.Ed, B.Ed or a four-year integrated degree, and TET Paper 2 with 60 or 55 per cent.'],
        ['Contract school teacher', 'The prescribed degree; TET and B.Ed within five years of appointment.'],
        ['High-school assistant master', 'A degree with 50 or 45 per cent and a B.Ed from a university recognised by law, with the subject conditions in the divisional notification.'],
        ['Choice of place', 'One district per post for primary and graduate posts; one division for assistant master; local or residual cadre in Kalyana Karnataka.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees.',
      head: ['Recruitment', 'General, 2A, 2B, 3A, 3B', 'SC, ST, Category I and others'],
      rows: [
        ['Teacher direct recruitment 2026', '₹750 for one post; ₹1,125 for two in a cadre; ₹375 each further post', '₹500; ₹750 for two; ₹250 each further post — also ex-servicemen, PwD and third-gender candidates'],
        ['KARTET 2025', '₹700 for one paper; ₹1,000 for both', '₹350 and ₹500; PwD exempt'],
        ['KEA PU principal 2026', '₹1,500', '₹1,000; PwD ₹500'],
      ],
    },
    {
      type: 'list',
      title: 'KARTET — the entry condition',
      items: [
        { text: 'Paper 1 for classes 1 to 5, Paper 2 for classes 6 to 8', note: 'a candidate who wants both eligibilities sits both. The corrigendum of 30 October 2025 removed the degree-with-B.Ed route to Paper 1.' },
        { text: 'Pass marks', note: '60 per cent for the general category and 2A, 2B, 3A and 3B; 55 for SC, ST, Category I and PwD. Five per cent relaxation in the qualifying examination’s marks for the same categories.' },
        { text: 'Only NCTE-recognised courses count', note: 'and RCI-recognised special-education diplomas and degrees.' },
        { text: 'The certificate is for life', note: 'and a candidate may sit again any number of times to improve the score. Passing is eligibility for recruitment, not recruitment.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Teacher direct recruitment 2026 — Paper 1 by cadre, from the gazettes. Each paper 100 marks, two hours, OMR; 35 per cent in each to be considered.',
      head: ['Section', 'Graduate primary and contract', 'Assistant master and PE Grade I', 'Primary and PE Grade II'],
      rows: [
        ['General knowledge and current affairs', '15 + 15', '20', '15'],
        ['General Kannada', '10', '10', '10'],
        ['General English', '10', '10', '10'],
        ['Educational or child psychology', '15', '15', '15'],
        ['Mental ability', '—', '15', '15'],
        ['Computer literacy', '15', '15', '15'],
        ['Value and health education', '20', '15', '10 + 10'],
      ],
    },
    {
      type: 'table',
      caption: 'Paper 2 and the weightage.',
      head: ['Cadre', 'Paper 2', 'Weightage in the merit'],
      rows: [
        ['Primary school teacher — D.El.Ed', 'Mathematics, environmental studies and social science, 100 questions', 'Examination 70; TET Paper 1 20; PUC 8; training course 2'],
        ['Primary school teacher — four-year integrated degree', 'As above', 'Examination 70; TET 20; degree 10'],
        ['Graduate primary teacher — D.Ed or B.Ed', 'The subject — Kannada, English, mathematics and physical science, chemistry and biology, social science or computer science', 'Examination 70; TET Paper 2 20; degree 8; training 2'],
        ['Graduate primary teacher — integrated degree', 'As above', 'Examination 70; TET 20; degree 10'],
        ['Contract school teacher', 'The subject', 'Examination 85; degree 15'],
        ['High-school assistant master', 'Kannada, English, CBZ or arts, 100 questions', 'Examination 85; degree 13; B.Ed 2'],
        ['PE Grade II', 'Physical education', 'Examination 85; PUC 13; PE certificate 2'],
      ],
    },
    {
      type: 'note',
      title: 'Negative marking, and the fifth bubble',
      text: 'The gazettes deduct 0.25 marks for every wrong answer and require a fifth circle to be shaded for questions not attempted. Key answers are published two days after the examination, with seven working days to object at ₹100 a question. KARTET, by contrast, has no negative marking, and questions deleted after key review are removed from the denominator rather than credited.',
    },
    {
      type: 'table',
      caption: 'KARTET — each paper 150 questions, 150 marks, two and a half hours, no negative marking.',
      head: ['Section', 'Paper 1', 'Paper 2'],
      rows: [
        ['Language 1', '30', '30'],
        ['Language 2', '30', '30'],
        ['Child development and pedagogy', '30', '30'],
        ['Mathematics', '30', 'Mathematics and science 60 — for mathematics and science teachers'],
        ['Environmental studies', '30', 'Social studies 60 — for social science teachers'],
      ],
    },
    {
      type: 'p',
      text: 'KEA’s pre-university principal examination, for serving lecturers only, has three objective papers of 150 marks and three hours each — Kannada as a qualifying paper with 50 to pass, general studies, and the service rules — with 0.25 off per wrong answer and the fifth-bubble rule. It is the only pre-university recruitment on KEA’s pages; no public PU lecturer or assistant professor notification has been published since 2022.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the department’s notices, the KARTET 2025 notification and result notice, three district and divisional gazettes of the 2026 direct recruitment read in full — Bengaluru Rural for graduate and contract posts, Mysuru division for assistant master, Shivamogga for primary — the Bengaluru North extension addendum, and KEA’s PU principal notification. The gazettes are scanned Kannada documents and the figures were read from them page by page; the subject names are translations. Other districts’ vacancy tables were not read, and the state total is unconfirmed.`,
    },
    {
      type: 'links',
      title: 'Official notifications and notices',
      items: [
        { label: 'Teacher recruitment 2026 — candidate instructions', href: KA_TEACH_SRC.gstrInstructions },
        { label: 'Bengaluru Rural — graduate primary and contract teacher notification, 11 August 2026', href: KA_TEACH_SRC.gstrBengaluruRural },
        { label: 'Mysuru division — assistant master and PE Grade I notification, 12 August 2026', href: KA_TEACH_SRC.gstrMysuruAm },
        { label: 'Shivamogga — primary school teacher and PE Grade II notification, 12 August 2026', href: KA_TEACH_SRC.gstrShivamoggaPst },
        { label: 'Bengaluru North division — extension addendum, 3 September 2026', href: KA_TEACH_SRC.gstrExtension },
        { label: 'KARTET 2025 notification, 18 October 2025', href: KA_TEACH_SRC.tetNotification },
        { label: 'KARTET 2025 corrigendum, 30 October 2025', href: KA_TEACH_SRC.tetCorrigendum },
        { label: 'KARTET 2025 result notice, 13 January 2026', href: KA_TEACH_SRC.tetResultNotice },
        { label: 'KEA — PU principal notification, 3 September 2026', href: KA_TEACH_SRC.puPrincipalNotification },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Karnataka teacher recruitment syllabus — Paper 1 general sections and Paper 2 subject papers for the 2026 direct recruitment, and the KARTET syllabus.',
      lead: [
        'Paper 1 is the same seven sections for every cadre at slightly different weights; Paper 2 is the subject at the level of the qualifying degree.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper 1 — general, 100 marks',
              'General knowledge and current affairs; general Kannada, 10; general English, 10; educational or child psychology and human development, 15; mental ability where listed, 15; computer literacy, 15; value education and health education.',
            ],
            [
              'Paper 2 — graduate primary, 100 questions',
              'Kannada, English, mathematics and physical science, chemistry and biology, social science, or computer science, at degree level.',
            ],
            [
              'Paper 2 — assistant master, 100 questions',
              'Kannada, English, chemistry-botany-zoology, or arts; and physical education for Grade I.',
            ],
            [
              'Paper 2 — primary, 100 questions',
              'Mathematics, environmental studies and social science at the elementary level; physical education for Grade II.',
            ],
            [
              'KARTET',
              'Two languages, child development and pedagogy, and mathematics with environmental studies in Paper 1; mathematics and science or social studies in Paper 2. Non-language sections printed in Kannada, English, Urdu, Tamil, Telugu, Hindi and Marathi.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'KARTET 2025 syllabus', href: KA_TEACH_SRC.tetSyllabus },
            { label: 'Bengaluru Rural notification — Paper 1 and Paper 2 scheme', href: KA_TEACH_SRC.gstrBengaluruRural },
            { label: 'KEA PU principal syllabus', href: KA_TEACH_SRC.puPrincipalSyllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Karnataka teacher recruitment exam pattern — two 100-mark OMR papers, 35 per cent in each, 0.25 negative marking, and the 70:20:8:2 or 85:13:2 weightage.',
      lead: [
        'Two papers and a formula.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules across the 2026 recruitment.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Two papers of 100 marks', 'Two hours each, OMR, Kannada and English with the English version authoritative.'],
            ['35 per cent in each paper', 'Below that in either, the candidate is out regardless of the other.'],
            ['0.25 off per wrong answer', 'Shade the fifth bubble on questions left blank.'],
            ['Examination 70 or 85 per cent of the merit', 'TET 20 for primary and graduate primary posts; the degree and training course the rest.'],
            ['No interview', 'Verification at one to two, a one-to-one provisional list, objections, final list.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Karnataka teacher recruitment previous papers — the KARTET 2025 key, what the department publishes, and how to use the gazette scheme as a paper.',
      lead: [
        'The department publishes KARTET keys after each test; the 2026 recruitment is the first under the new Special Rules, so its papers do not yet exist.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What exists',
          items: [
            { text: 'KARTET 2025 key answers', note: 'published on the department’s site after the 7 December 2025 test, following the four-day objection window.' },
            { text: 'The 2022 graduate primary cycle', note: 'whose counselling list was published on 18 May 2026 after a tribunal order — its scheme is the closest precedent for the 2026 papers.' },
            { text: 'KEA recruitment papers', note: 'KEA posts its question papers year by year, including the PU and other recruitments.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'KARTET 2025 key answers', href: KA_TEACH_SRC.tetKey },
            { label: 'KEA question papers 2026', href: 'https://cetonline.karnataka.gov.in/kea/QP2026.aspx' },
            { label: 'State TET guides', to: '/government-exams/teaching-net/state-tet/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Karnataka teacher recruitment mock tests — two-hour 100-question papers scored with the 0.25 rule and the 35 per cent floor.',
      lead: [
        'Score the mock the way the cell will: a quarter off for each wrong answer, and 35 in each paper before anything else counts.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Paper 1 — 100 questions in two hours', text: 'The seven sections at their weights for your cadre; general Kannada and general English are ten each and are where a candidate from another medium loses the floor.' },
            { title: 'Paper 2 — the subject in two hours', text: 'At degree level for graduate and assistant master posts; at elementary level for primary. This paper carries the same weight as Paper 1 in the 70 or 85 per cent.' },
            { title: 'Compute the merit', text: 'Examination 70 or 85, TET 20, degree and training the rest. A candidate with a 90 per cent TET and a 60 per cent examination is behind one with 70 and 75.' },
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
        'Karnataka teacher recruitment preparation — choosing a district, applying before 25 September 2026, and preparing the two papers in five weeks.',
      lead: [
        'The choice of district decides the competition; the two papers decide the rank.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From gazette to select list',
          items: [
            { title: 'Read your district’s gazette', text: 'Each district and division has its own notification and vacancy table. The candidate instructions on the department’s site list them; the e-Gazette carries the PDFs.' },
            { title: 'Choose one district per post', text: 'A candidate may apply in one district for a primary post and another for a graduate post, but not two districts for the same post. In Kalyana Karnataka, choose the local or residual cadre.' },
            { title: 'Apply before 25 September', text: 'Fee reconciliation runs to 28 September. Keep the TET certificate, degree marks cards and training certificate ready — they enter the merit formula.' },
            { title: 'Prepare both papers equally', text: 'Each is half the examination score, and 35 in each is the floor. Paper 1 is general; Paper 2 is the subject at the degree’s level.' },
            { title: 'Watch the key and the lists', text: 'Keys two days after the examination, objections in seven working days, then the one-to-two verification list.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Karnataka teacher recruitment study material — state textbooks for the subject paper, psychology and computer literacy references, and the KARTET readers.',
      lead: [
        'The department sets its papers on the state’s own textbooks and the training-course syllabus; work from those.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By section.',
          head: ['Section', 'What to read', 'Note'],
          rows: [
            ['General knowledge and current affairs', 'A year of Karnataka and national current affairs; the state’s history and geography from the textbooks', 'Up to 30 marks of Paper 1.'],
            ['General Kannada and English', 'School-level grammar and comprehension in each', 'Ten marks each; the floor for candidates from another medium.'],
            ['Educational psychology', 'The D.El.Ed or B.Ed psychology paper', 'Fifteen marks; child development for primary posts.'],
            ['Computer literacy', 'A basic computer applications text', 'Fifteen marks in every cadre.'],
            ['Paper 2 — the subject', 'The degree syllabus for graduate and assistant master posts; the upper-primary textbooks for primary posts', 'Half the examination score.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Teaching exam preparation', to: '/government-exams/teaching-net/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is Karnataka teacher recruitment 2026 open?',
      a: 'Yes. The direct recruitment of primary, graduate primary, contract, high-school assistant master and physical education teachers, notified on 10 to 12 August 2026, is open until 25 September 2026 after an extension, with fee reconciliation to 28 September. Applications go through the Centralised Admission Cell’s portal, one application for all cadres and one district or division per post. The examinations run from 5 to 13 October by cadre.',
    },
    {
      q: 'What is the Karnataka teacher recruitment exam pattern?',
      a: 'Two OMR papers of 100 marks and two hours each. Paper 1 is general — general knowledge, current affairs, general Kannada, general English, educational psychology, computer literacy and value and health education; Paper 2 is the subject, 100 questions. A candidate must score 35 per cent in each, 0.25 is deducted per wrong answer, and a fifth bubble is shaded for questions left blank. There is no interview.',
    },
    {
      q: 'How is merit calculated in Karnataka teacher recruitment?',
      a: 'By weightage. For primary and graduate primary teachers the competitive examination carries 70 per cent, the TET paper 20, the qualifying examination 8 and the training course 2 — or the degree 10 for a four-year integrated course. For assistant masters the examination carries 85, the degree 13 and the B.Ed 2; for contract teachers 85 and 15; for PE Grade II 85, 13 and 2. Ties go to the older candidate.',
    },
    {
      q: 'Is KARTET required for Karnataka teacher recruitment?',
      a: 'For primary school teachers, KARTET or CTET Paper 1 with 60 per cent — 55 for SC, ST, Category I and PwD; for graduate primary teachers, Paper 2 at the same marks. Contract teachers must complete it within five years of appointment. High-school assistant masters do not need it. The TET score is 20 per cent of the merit where it applies.',
    },
    {
      q: 'When is the next KARTET?',
      a: 'No KARTET 2026 notification has been published. KARTET 2025 was notified on 18 October 2025, held on 7 December 2025, and its results and certificates issued on 13 January 2026. Certificates for every cycle since 2014 are downloadable from the STS portal, and each is valid for life.',
    },
    {
      q: 'What is the KARTET pass mark?',
      a: 'Sixty per cent for the general category and 2A, 2B, 3A and 3B; 55 per cent for SC, ST, Category I and PwD. Each paper has 150 questions for 150 marks in two and a half hours, with no negative marking. A candidate may sit again to improve the score.',
    },
    {
      q: 'What is the fee for Karnataka teacher recruitment 2026?',
      a: '₹750 for one post and ₹1,125 for two in a cadre, with ₹375 for each further post, for the general category and 2A, 2B, 3A and 3B; ₹500, ₹750 and ₹250 for SC, ST, Category I, ex-servicemen, PwD and third-gender candidates. KARTET 2025 charged ₹700 for one paper and ₹1,000 for both, or ₹350 and ₹500, with PwD exempt.',
    },
    {
      q: 'Is there a PU lecturer recruitment in Karnataka?',
      a: 'Not at present. The only pre-university recruitment on KEA’s pages is for 216 principal posts, notified on 3 September 2026 and open only to serving PU lecturers with ten years’ service, with applications to 4 October 2026. No public PU lecturer or assistant professor notification has been published since 2022.',
    },
  ],
}

/* ── Karnataka technical posts ──────────────────────────────────
   Engineering posts are split between KPSC — the PWD assistant executive
   engineer, and the assistant and junior engineer posts in its Group B and
   Group C notifications — and KEA, which since 2025 has recruited for the
   boards, corporations and departments that ask it to. The 2025 KPSC
   notifications without Category I reservation were cancelled and are to be
   re-notified; KEA has announced 216 diploma-level posts for September. */
const KA_TECH_SRC = {
  kpscNotifications: 'https://www.kpsc.kar.nic.in/notification.html',
  kpscPapers: 'https://www.kpsc.kar.nic.in/questionpaper.html',
  kpscKeys: 'https://www.kpsc.kar.nic.in/keyanswers.html',
  kpscSyllabus: 'https://www.kpsc.kar.nic.in/syllabus.html',
  kpscCutoff: 'https://www.kpsc.kar.nic.in/cutoff.html',
  kpscProvisional: 'https://www.kpsc.kar.nic.in/provisional-list.html',
  aeeRpc: 'https://www.kpsc.kar.nic.in/AEE%20RPC.pdf',
  aeeCancel: 'https://www.kpsc.kar.nic.in/AEE-RPC%20Cancellation%20of%20Notification.pdf',
  groupBRpc: 'https://www.kpsc.kar.nic.in/RPC.pdf',
  groupCRpc: 'https://www.kpsc.kar.nic.in/RPC-Group-C-below%20degree%20posts.pdf',
  keaVdRpc: 'https://cetonline.karnataka.gov.in/kea/vdptrecnhk2025.aspx',
  keaVdKk: 'https://cetonline.karnataka.gov.in/kea/vdptrechk2025.aspx',
  keaVd2026: 'https://cetonline.karnataka.gov.in/kea/vdptrecnhk2026.aspx',
  keaBwssb: 'https://cetonline.karnataka.gov.in/keawebentry456/vdptrecnhk2025/20251115183454kannada.pdf',
  keaRevisedRpc: 'https://cetonline.karnataka.gov.in/keawebentry456/vdptrecnhk2025/rec_RPC_NOTI_20052026kannada.pdf',
  keaRevisedKk: 'https://cetonline.karnataka.gov.in/keawebentry456/vdptrechk2025/20260521112944kannada.pdf',
  keaAeMarks: 'https://cetonline.karnataka.gov.in/keawebentry456/vdptrecnhk2025/PROV_RES_AE&AEEkannada.pdf',
  keaUpcoming: 'https://cetonline.karnataka.gov.in/keawebentry456/vdptrecnhk2025/VER_REC_NOTE_31082026english.pdf',
  keaQp2026: 'https://cetonline.karnataka.gov.in/kea/QP2026.aspx',
  keaQp2025: 'https://cetonline.karnataka.gov.in/kea/QP2025.aspx',
  keaKpcl: 'https://cetonline.karnataka.gov.in/kea/kpcl2023.aspx',
}

const KA_TECHNICAL = {
  slug: 'technical-posts',
  path: '/government-exams/state/karnataka/technical-posts/',
  name: 'Karnataka Technical Posts',
  fullName: 'Assistant Executive Engineer, Assistant Engineer and Junior Engineer posts through KPSC and KEA',
  authority: 'Karnataka Public Service Commission; Karnataka Examinations Authority for board, corporation and department recruitments',
  official: OFFICIAL,
  seoTitle: 'Karnataka AE & JE Recruitment: KPSC and KEA Engineering Posts 2026',
  metaDescription:
    'Karnataka engineering posts — KPSC’s AEE, AE and JE schemes, KEA’s board recruitments with 300-mark papers and the Kannada test, and 216 JE posts coming.',
  lead: [
    'Karnataka fills its engineering posts through two agencies. The Public Service Commission recruits the Public Works Department’s assistant executive engineers as a Group A cadre with its own written examination and personality test, and the assistant and junior engineer posts of the water resources department and Bengaluru’s civic body inside its general Group B and Group C notifications. The Examinations Authority, since 2025, has recruited for the boards, corporations and departments that ask it — the Bengaluru water board, the small industries corporation, the agricultural marketing department — with the same two-paper scheme and the same compulsory Kannada test.',
    'Nothing is open at the date checked, and the recent history is one of re-notification. The commission’s 2024 assistant executive engineer notification was examined in February 2025 and cancelled in December for want of Category I reservation; KEA’s 2025 assistant engineer posts were withdrawn and re-notified in May 2026 for the same reason, examined in July, and their marks lists published. What comes next is announced: 216 diploma-level junior engineer and town planner posts, notified in September for examination in November and December 2026.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'KPSC for PWD and the Group B and C posts; KEA for boards, corporations and departments'],
    ['Open now', 'Nothing. KEA’s 216 junior engineer and assistant town planner posts are announced for September notification'],
    ['KEA AE scheme', 'Paper 1 general 300 marks, Paper 2 subject 300 marks, two hours each; 35 per cent to qualify; 0.25 off per wrong answer'],
    ['KEA JE scheme', 'Paper 1 general 100 marks, Paper 2 subject 100 marks'],
    ['Kannada', 'A compulsory 150-mark test with 50 to pass, exempt for those who studied Kannada at SSLC; marks not counted'],
    ['KPSC AEE', 'Four technical papers and a general paper of 100 marks each, Kannada and English qualifying, personality test 25 — cancelled, to be re-notified'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The commission’s route is the older one. The Karnataka PWD Services rules of 2018 give the assistant executive engineer — a Group A post at ₹83,700 to ₹1,55,200 — a written examination of five compulsory papers of 100 marks, four technical and one general, with Kannada and English as qualifying papers at 30 per cent each and a personality test worth five per cent of the total. The 2024 notifications for 30 residual-cadre and 12 Hyderabad-Karnataka posts were examined over four days in February 2025 and then cancelled on 5 December 2025, under a government circular requiring every direct-recruitment notification issued after 28 October 2024 without Category I reservation to be withdrawn and re-notified. No re-notification had appeared by the date checked.',
    },
    {
      type: 'p',
      text: 'The commission’s assistant engineer and junior engineer posts sit inside its general notifications. The Group B notification of March 2024 carried 92 assistant engineer posts for Bengaluru’s civic body and 90 civil and 10 mechanical for the water resources department among its 277 posts, with two objective papers of 300 marks; the Group C below-degree notification of the same month carried 216 civil and 26 mechanical junior engineer posts for water resources, with two papers of 100 marks — general knowledge, then Kannada, English and computer knowledge — and no technical paper. The assistant engineer provisional list for the Hyderabad-Karnataka cadre has been published.',
    },
    {
      type: 'list',
      title: 'KEA’s recruitments, 2025 to 2026',
      items: [
        { text: 'Various departments, October 2025', note: 'assistant and junior civil engineers for the agricultural marketing department, an assistant engineer and junior programmer for the health sciences university, and junior officers for the soaps and detergents company.' },
        { text: 'Bengaluru water board, November 2025', note: '13 civil, 4 electrical, 2 mechanical and 1 computer science assistant engineers at ₹53,250 to ₹1,15,460, and 20 civil, 21 electrical and 10 mechanical junior engineers at ₹39,170 to ₹99,410, among 165 posts. The junior engineer papers were held in January 2026 and the final score lists published in June and August.' },
        { text: 'The re-notification of May 2026', note: 'the Group A and B posts of the earlier notifications withdrawn and re-notified with Category I reservation — 37 posts across the water board, the small industries corporation and agricultural marketing, earlier applicants re-applying without fee. Examined on 4 and 5 July 2026; provisional marks lists published.' },
        { text: 'Announced for September 2026', note: '216 diploma-level posts — 119 assistant town planners, 50 junior civil engineers for the Greater Bengaluru Authority, 20 for the housing board, 15 for the rural infrastructure corporation, and smaller numbers for groundwater, the slum board, mines and agricultural marketing — with examinations in November and December.' },
      ],
    },
    {
      type: 'note',
      title: 'The power utilities are not part of this',
      text: 'KPTCL and the electricity supply companies recruit their own engineers, and their last assistant and junior engineer cycles on KEA’s pages are from 2019 and 2022; a press claim of 1,492 posts in 2026 has no official counterpart. The power corporation’s 2023 cycle, re-examined in December 2025 after the original papers, published its final score lists in January 2026.',
    },
  ],
  stages: [
    {
      name: 'Kannada language test',
      mode: 'Compulsory, 150 marks, 50 to pass, not counted',
      detail:
        'Every KPSC and KEA recruitment requires it of candidates who did not take Kannada as a first or second language at SSLC and have not passed the commission’s or the authority’s Kannada test since November 2022. At SSLC first-language standard.',
    },
    {
      name: 'Paper 1 — general',
      mode: 'Objective; 300 marks for AE, 100 for JE',
      detail:
        'General knowledge under the 2021 direct recruitment rules — two hours for KEA, an hour and a half for the commission’s Group B paper. A quarter mark off per wrong answer, with the fifth bubble for unanswered questions.',
    },
    {
      name: 'Paper 2 — the subject',
      mode: 'Objective; 300 marks for AE, 100 for JE',
      detail:
        'The engineering discipline — civil, mechanical, electrical or computer science — at degree or diploma level. In the commission’s Group C below-degree scheme there is no technical paper; Paper 2 is Kannada, English and computer knowledge.',
    },
    {
      name: 'Select list',
      mode: 'Percentage of marks; 35 per cent to qualify; no interview',
      detail:
        'Under rule 5(d) of the 2021 rules selection is on the percentage secured in the competitive examination. The PWD assistant executive engineer is the exception, with a personality test worth 25 of 525 and a combined list of open and in-service candidates.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No technical application is open on either agency’s site. The commission’s notifications page carries the December 2025 cancellations of the assistant executive engineer and surveyor notifications with no re-notification yet. KEA’s re-notified assistant engineer posts were examined on 4 and 5 July 2026, their keys published the same day with objections to 8 July at ₹25 each, and the provisional marks lists for assistant and assistant executive engineers are up. KEA’s note of 31 August 2026 announces the next round — 216 diploma-level technical posts and 2,062 non-technical ones — for September notification and November and December examinations; nothing had been published under it by the date checked.`,
    },
    {
      type: 'table',
      caption: 'Recent and pending technical recruitments.',
      head: ['Recruitment', 'Posts', 'Applications', 'Position at 11 September 2026'],
      rows: [
        ['KEA — junior engineers and others for September 2026', '216 technical: assistant town planner 119, JE civil GBA 50, housing board 20, KRIDL 15, groundwater 5, mines 4, agricultural marketing 1, draughtsman 2', 'Announced 31 August; notifications due in September', 'Not yet notified; examinations November to December 2026'],
        ['KEA — Group A and B re-notification', '37 — AE civil 10 agricultural marketing; AE civil 18, mechanical 3, computer science 1 water board; AEE 1 and AE 4 KSSIDC', '21 May to 4 June 2026', 'Examined 4 and 5 July; provisional marks lists published'],
        ['KEA — Bengaluru water board', '165 including 20 AE and 51 JE', '17 to 25 November 2025, extended', 'JE papers 10 and 11 January 2026; final score lists 9 June and 4 August 2026'],
        ['KPSC — AEE, PWD', '30 residual and 12 Hyderabad-Karnataka', '3 October to 4 November 2024', 'Examined February 2025; cancelled 5 December 2025; re-notification awaited'],
        ['KPSC — Group B, March 2024', '277 including AE civil 92 BBMP, 90 WRD; AE mechanical 10', '15 April to 14 May 2024', 'AE BBMP Hyderabad-Karnataka provisional list published'],
        ['KPSC — Group C below degree, March 2024', '313 including JE civil 216 and 54 in-service, JE mechanical 26 and 4', '29 April to 28 May 2024', 'Under process; a May 2026 result claim is unconfirmed'],
      ],
    },
    {
      type: 'note',
      title: 'Why the notifications were cancelled',
      text: 'A government circular of 4 September 2025 directed that every direct-recruitment notification issued after 28 October 2024 without reservation for Category I be cancelled and re-notified, following an interim order of the High Court of 29 April 2025. The commission cancelled its assistant executive engineer and surveyor notifications on 5 December 2025 after the examinations had been held; KEA withdrew and re-notified its Group A and B posts in May 2026, letting earlier applicants re-apply without a fee. A candidate who sat the cancelled papers will sit them again.',
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'KPSC notifications', href: KA_TECH_SRC.kpscNotifications },
        { label: 'KEA — various departments recruitment 2025, residual cadre', href: KA_TECH_SRC.keaVdRpc },
        { label: 'KEA — various departments recruitment 2025, Kalyana Karnataka', href: KA_TECH_SRC.keaVdKk },
        { label: 'KEA — various departments recruitment 2026', href: KA_TECH_SRC.keaVd2026 },
        { label: 'KEA — note of 31 August 2026 on the coming recruitment', href: KA_TECH_SRC.keaUpcoming },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Qualifications and pay, from the notifications read.',
      head: ['Post', 'Qualification', 'Pay'],
      rows: [
        ['Assistant executive engineer, PWD — KPSC Group A', 'An engineering degree in the discipline; 20 per cent by open competition and 5 per cent from in-service candidates', '₹83,700 to ₹1,55,200'],
        ['Assistant engineer — KPSC Group B', 'BE in civil or an equivalent recognised by AICTE, including construction technology and management', '₹43,100 to ₹83,900'],
        ['Assistant engineer — KEA, water board', 'A degree in civil, electrical, mechanical or computer science engineering with 50 per cent, and a six-month computer basics course', '₹53,250 to ₹1,15,460'],
        ['Assistant engineer — KEA, agricultural marketing and KSSIDC', 'An engineering degree', '₹69,250 to ₹1,34,200'],
        ['Junior engineer — KPSC Group C', 'A diploma in civil engineering from the state board of technical education', '₹33,450 to ₹62,600'],
        ['Junior engineer — KEA, water board', 'A three-year diploma in the discipline with 50 per cent, and the computer basics course', '₹39,170 to ₹99,410'],
      ],
    },
    {
      type: 'table',
      caption: 'Age on the closing date. KEA’s May 2026 notification includes a one-time five-year relaxation ordered on 29 January 2026; the water board notification of November 2025 a three-year one.',
      head: ['Recruitment', 'General', '2A, 2B, 3A, 3B', 'SC, ST, Category I'],
      rows: [
        ['KPSC Group B and Group C, 2024', '18 to 35', '38', '40'],
        ['KEA water board, November 2025', '18 to 38', '41', '43'],
        ['KEA re-notification, May 2026', '18 to 40', '43', '45'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees.',
      head: ['Recruitment', 'General', '2A, 2B, 3A, 3B', 'SC, ST, Category I, PwD'],
      rows: [
        ['KPSC AEE and Group C, 2024', '₹600', '₹300', 'Exempt; ex-servicemen ₹50'],
        ['KPSC Group B, 2024', '₹300', '₹150', 'Exempt; ex-servicemen ₹50'],
        ['KEA, 2025 and 2026', '₹750', '₹750', '₹500; PwD ₹250; ₹100 for each additional post in 2026'],
      ],
    },
    {
      type: 'p',
      text: 'The Kannada requirement is common to every recruitment: a compulsory test of 150 marks at SSLC first-language standard with 50 to pass, whose marks do not count, exempt for candidates who took Kannada as a first or second language at SSLC or have passed the commission’s or KEA’s Kannada test since 29 November 2022. The Hyderabad-Karnataka, now Kalyana Karnataka, posts are notified separately under Article 371J and examined on the same papers.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The schemes side by side. All objective on OMR, or computer-based where the commission chooses; 0.25 off per wrong answer, with the fifth bubble for questions left blank.',
      head: ['Scheme', 'Paper 1', 'Paper 2', 'Qualifying', 'Other'],
      rows: [
        ['KEA assistant engineer', 'General, 300 marks, 2 hours', 'Subject, 300 marks, 2 hours', '35 per cent of the total', 'Kannada test 150, 50 to pass'],
        ['KEA junior engineer', 'General, 100 marks, 2 hours', 'Subject, 100 marks, 2 hours', '35 per cent', 'As above'],
        ['KPSC Group B — assistant engineer', 'General, 300 marks, 1½ hours', 'Specific, 300 marks, 2 hours', '35 per cent aggregate', 'Kannada test 150, 50 to pass'],
        ['KPSC Group C below degree — junior engineer', 'General knowledge, 100 marks, 1½ hours', 'General Kannada 35, general English 35, computer knowledge 30 — 100 marks, 2 hours', '35 per cent', 'No technical paper'],
        ['KPSC AEE, PWD — 2018 rules', 'Kannada 100 and English 100, qualifying at 30 per cent each and 35 aggregate; general knowledge 100, 1½ hours', 'Technical papers 1 to 4, 100 marks and 3 hours each', 'Written 500', 'Personality test 25; answers in English except the Kannada paper'],
      ],
    },
    {
      type: 'note',
      title: 'The negative-marking figure in the May 2026 notification',
      text: 'KEA’s re-notification of 20 May 2026 says in words that one-fourth of the mark is deducted for a wrong answer but prints the figure as 0.75. The water board notification of November 2025 and both KPSC notifications say one-fourth in words and figures, and the KEA scheme has been a quarter mark throughout; treat the 0.75 as a printing error and the rule as 0.25. The PWD assistant executive engineer notification carries no negative-marking clause that could be found.',
    },
    {
      type: 'list',
      title: 'What the documents settle',
      items: [
        { text: 'Selection is the percentage in the examination', note: 'under rule 5(d) of the 2021 direct recruitment rules, for every post but the PWD assistant executive engineer. No interview.' },
        { text: 'Keys and objections', note: 'KEA published its July 2026 keys the same day with three days to object at ₹25 a question; the commission posts keys and cut-offs on its site.' },
        { text: 'Centres', note: 'KEA examined the water board posts at twelve centres across the state and the re-notified posts at Bengaluru, Dharwad and Kalaburagi.' },
        { text: 'The commission’s junior engineer scheme has no engineering paper', note: 'the 2024 Group C below-degree papers are general knowledge, and Kannada, English and computer knowledge — a diploma holder competes on general papers alone.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s notifications page and the 2024 assistant executive engineer, Group B and Group C notifications and the December 2025 cancellation; KEA’s various-departments pages, the water board notification of November 2025, the re-notifications of May 2026, the July 2026 key and marks notes, and the note of 31 August 2026. The notifications are in Kannada and the figures were read from them page by page. The Hyderabad-Karnataka vacancy splits of the 2024 KPSC notifications were not extracted, and the commission’s junior engineer result of May 2026 reported in the press was not found on its results page.`,
    },
    {
      type: 'links',
      title: 'Official notifications and notes',
      items: [
        { label: 'KPSC — AEE, PWD, residual cadre notification, 18 September 2024', href: KA_TECH_SRC.aeeRpc },
        { label: 'KPSC — AEE cancellation, 5 December 2025', href: KA_TECH_SRC.aeeCancel },
        { label: 'KPSC — Group B notification, 13 March 2024', href: KA_TECH_SRC.groupBRpc },
        { label: 'KPSC — Group C below-degree notification, 15 March 2024', href: KA_TECH_SRC.groupCRpc },
        { label: 'KPSC — provisional select lists', href: KA_TECH_SRC.kpscProvisional },
        { label: 'KEA — Bengaluru water board notification, 15 November 2025', href: KA_TECH_SRC.keaBwssb },
        { label: 'KEA — re-notification, residual cadre, 20 May 2026', href: KA_TECH_SRC.keaRevisedRpc },
        { label: 'KEA — re-notification, Kalyana Karnataka, 20 May 2026', href: KA_TECH_SRC.keaRevisedKk },
        { label: 'KEA — provisional AE and AEE marks list', href: KA_TECH_SRC.keaAeMarks },
        { label: 'KEA — KPCL 2023 recruitment', href: KA_TECH_SRC.keaKpcl },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Karnataka AE and JE syllabus — the general paper under the 2021 direct recruitment rules, the subject paper by discipline, and the KPSC AEE technical papers.',
      lead: [
        'Paper 1 follows the general syllabus of the 2021 direct recruitment rules; Paper 2 is the discipline at degree or diploma level and is published separately for each recruitment.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper 1 — general',
              'General knowledge and current affairs, the Constitution, Indian and Karnataka history and geography, general science, mental ability and Kannada and English at general level, under the Karnataka Civil Services (Direct Recruitment) (General) Rules 2021.',
            ],
            [
              'Paper 2 — the discipline',
              'Civil, mechanical, electrical or computer science engineering at the level of the qualifying degree or diploma; KEA publishes the specific syllabus with each notification and has said the September 2026 syllabus will be published separately.',
            ],
            [
              'KPSC Group C below degree — Paper 2',
              'General Kannada 35, general English 35, computer knowledge 30. No engineering paper.',
            ],
            [
              'KPSC AEE, PWD — technical papers 1 to 4',
              'Four papers of 100 marks and three hours each in the discipline, under Schedule 2 of the PWD Services rules of 2018, with general knowledge and the two qualifying language papers.',
            ],
            [
              'Kannada test',
              'SSLC first-language standard, 150 marks, 50 to pass.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'KPSC syllabus page', href: KA_TECH_SRC.kpscSyllabus },
            { label: 'KEA re-notification of May 2026 — scheme and syllabus', href: KA_TECH_SRC.keaRevisedRpc },
            { label: 'KPSC AEE notification — Schedule 2 scheme', href: KA_TECH_SRC.aeeRpc },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Karnataka AE and JE exam pattern — 300-mark and 100-mark two-paper schemes, the 35 per cent floor, the Kannada test and negative marking.',
      lead: [
        'Two objective papers, a Kannada test that does not count, and a percentage.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules that run across KPSC and KEA.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Two papers', 'General, then the subject — 300 and 300 for assistant engineers, 100 and 100 for junior engineers.'],
            ['0.25 off per wrong answer', 'Shade the fifth bubble on unanswered questions or lose the quarter mark anyway.'],
            ['35 per cent to qualify', 'Selection is the percentage of marks secured.'],
            ['Kannada test', '150 marks, 50 to pass, exempt for SSLC Kannada; not counted.'],
            ['No interview', 'Except the PWD assistant executive engineer’s 25-mark personality test.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Karnataka AE and JE previous papers — KEA’s 2025 and 2026 recruitment papers by discipline, and KPSC’s papers and keys by year and code.',
      lead: [
        'KEA publishes its recruitment question papers year by year, with the July 2026 assistant engineer and January 2026 junior engineer papers already up; the commission publishes its papers by year and code.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'KEA 2026', note: 'assistant engineer civil and mechanical Paper 2 of 5 July 2026 for both cadres; assistant engineer electrical of April 2026; junior engineer electrical and civil of 10 January 2026.' },
            { text: 'KEA 2025', note: 'the power corporation re-examination papers of 27 and 28 December 2025 — civil, mechanical, electrical, electronics, instrumentation, chemistry and automobile.' },
            { text: 'KPSC', note: 'papers by year and code, with Kannada and English versions, the compulsory Kannada test, and key answers and cut-offs on their own pages.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'KEA question papers 2026', href: KA_TECH_SRC.keaQp2026 },
            { label: 'KEA question papers 2025', href: KA_TECH_SRC.keaQp2025 },
            { label: 'KPSC question papers', href: KA_TECH_SRC.kpscPapers },
            { label: 'KPSC key answers', href: KA_TECH_SRC.kpscKeys },
            { label: 'KPSC cut-offs', href: KA_TECH_SRC.kpscCutoff },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Karnataka AE and JE mock tests — two-hour general and subject papers scored at a quarter mark off, with the Kannada test practised separately.',
      lead: [
        'Score at −0.25 and count blanks as shaded fifth bubbles.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Paper 1 — general, two hours', text: 'Use KEA’s published general papers and the commission’s Group B and C general papers. A quarter off per wrong answer; the 35 per cent floor is on the total.' },
            { title: 'Paper 2 — the discipline, two hours', text: 'KEA’s July 2026 civil and mechanical papers and January 2026 junior engineer papers are the closest models for the September 2026 posts.' },
            { title: 'The Kannada test', text: 'Only if you did not study Kannada at SSLC — 150 marks at first-language standard, 50 to pass, and a fail ends the candidacy.' },
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
        'Karnataka AE and JE preparation — watching KPSC and KEA, re-applying after cancellation, the Kannada test, and the September 2026 junior engineer round.',
      lead: [
        'The next round is announced: prepare for a September notification and a November examination.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From announcement to select list',
          items: [
            { title: 'Watch both agencies', text: 'The commission’s notifications page for the PWD re-notification and the Group B and C rounds; KEA’s various-departments pages for the boards and corporations. KEA’s content pages end in .aspx.' },
            { title: 'Settle the Kannada exemption', text: 'SSLC with Kannada as a first or second language exempts; otherwise the 150-mark test comes with the recruitment and must be passed.' },
            { title: 'Prepare the general paper as seriously as the subject', text: 'It is half the marks in every scheme, and in the commission’s junior engineer scheme it is all of them.' },
            { title: 'Keep the application record', text: 'Cancelled notifications have been re-notified with earlier applicants re-applying free; the registration number is the proof.' },
            { title: 'Object to the key in time', text: 'KEA allowed three days at ₹25 a question in July 2026.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Karnataka AE and JE study material — the general-paper syllabus of the 2021 rules, discipline texts at degree and diploma level, and Kannada readers.',
      lead: [
        'Work from the 2021 rules’ general syllabus, the standard discipline texts, and the published papers.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['General', 'Karnataka state textbooks for history, geography and civics; a Constitution primer; a year of current affairs; a reasoning workbook', 'Half the marks; all of them in the KPSC junior engineer scheme.'],
            ['Subject — degree level', 'The standard undergraduate texts in the discipline and the GATE-level objective banks', 'For assistant engineer posts.'],
            ['Subject — diploma level', 'The state board of technical education syllabus and diploma texts', 'For junior engineer posts.'],
            ['Kannada test', 'An SSLC first-language reader', 'Only for those not exempt.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any Karnataka AE or JE recruitment open now?',
      a: 'No. KEA’s re-notified assistant engineer posts were examined on 4 and 5 July 2026 and their marks lists are published; the commission’s 2024 assistant executive engineer notification was cancelled in December 2025 and not yet re-notified. KEA announced on 31 August 2026 that 216 diploma-level junior engineer and assistant town planner posts will be notified in September for examination in November and December.',
    },
    {
      q: 'What is the KEA assistant engineer exam pattern?',
      a: 'Two objective papers of 300 marks and two hours each — Paper 1 general, Paper 2 the discipline — with 0.25 deducted per wrong answer and a fifth bubble for unanswered questions, 35 per cent of the total to qualify, and selection on the percentage of marks. A compulsory Kannada test of 150 marks with 50 to pass, not counted, applies to candidates who did not study Kannada at SSLC. No interview.',
    },
    {
      q: 'What is the KPSC junior engineer exam pattern?',
      a: 'In the 2024 Group C below-degree notification, two objective papers of 100 marks: general knowledge in an hour and a half, and general Kannada 35, general English 35 and computer knowledge 30 in two hours. There is no engineering paper. A quarter mark off per wrong answer, 35 per cent to qualify, and the compulsory Kannada test. KEA’s junior engineer scheme, by contrast, has a 100-mark subject paper.',
    },
    {
      q: 'Why was the KPSC assistant executive engineer notification cancelled?',
      a: 'A government circular of 4 September 2025, following a High Court interim order of 29 April 2025, required every direct-recruitment notification issued after 28 October 2024 without Category I reservation to be cancelled and re-notified. The commission cancelled the 30-post residual and 12-post Hyderabad-Karnataka AEE notifications on 5 December 2025, after the written examinations of February 2025 had been held. No re-notification had appeared by 11 September 2026.',
    },
    {
      q: 'Is there a Kannada test for Karnataka engineering posts?',
      a: 'Yes, in every KPSC and KEA recruitment — 150 marks at SSLC first-language standard with 50 to pass, whose marks are not counted. Candidates who took Kannada as a first or second language at SSLC, or have passed the commission’s or KEA’s Kannada test since 29 November 2022, are exempt.',
    },
    {
      q: 'What is the fee for Karnataka AE and JE recruitment?',
      a: 'KEA charged ₹750 for the general and 2A, 2B, 3A and 3B categories, ₹500 for SC, ST, Category I, ex-servicemen and third-gender candidates and ₹250 for PwD in 2025 and 2026, with ₹100 per additional post in the May 2026 notification. The commission charged ₹600 and ₹300 for the AEE and Group C posts and ₹300 and ₹150 for Group B in 2024, with SC, ST, Category I and PwD exempt and ex-servicemen ₹50.',
    },
    {
      q: 'What is the age limit for Karnataka AE and JE posts?',
      a: 'It has moved with one-time relaxations. The commission’s 2024 notifications set 18 to 35 for the general category, 38 for 2A, 2B, 3A and 3B, and 40 for SC, ST and Category I. KEA’s November 2025 water board notification set 38, 41 and 43 with a three-year relaxation; its May 2026 re-notification 40, 43 and 45 with a five-year relaxation ordered on 29 January 2026.',
    },
    {
      q: 'Which posts are coming in the September 2026 KEA round?',
      a: 'By KEA’s note of 31 August 2026: 119 assistant town planners, 50 junior civil engineers for the Greater Bengaluru Authority, 20 for the housing board, 15 for the rural infrastructure development corporation, 5 for groundwater, 4 for mines and geology, 1 for agricultural marketing and 2 draughtsmen for the slum development board — 216 diploma-level posts, 185 residual and 31 Kalyana Karnataka — alongside 2,062 non-technical posts. The Paper 2 syllabus is to be published separately.',
    },
  ],
}

/* ── KPSC Gazetted Probationers (KAS) ───────────────────────────
   The commission's Group A and B services examination under the 1997 rules
   as amended to 2022. Prelims are a screen at one to fifteen and do not count;
   the merit is 1,250 marks of descriptive mains plus a 25-mark personality
   test. The 2023-24 cycle's prelims were re-held after translation errors and
   its personality tests ran to June 2026; the 2026-27 cycle closed on
   7 September 2026 with prelims on 15 November. */
const KA_KAS_SRC = {
  notification: 'https://kpsc.kar.nic.in/GP%202026-27%20Final%20Notification%20with%20PH%20Schedules%20HOSTED%20ON%2031-07-2026.pdf',
  corrigendum: 'https://kpsc.kar.nic.in/corrigendum%20notification%20GP-2026.pdf',
  timetable: 'https://kpsc.kar.nic.in/Time%20Table%20GP%202026-27%20HOSTED%20ON%2031-07-2026.pdf',
  pressNote: 'https://kpsc.kar.nic.in/Pressnote%20%20GP-2026-27%20HOSTED%20ON%2013-08-2026.pdf',
  relaxationGo: 'https://kpsc.kar.nic.in/DT-29-01-2026%20%2005%20YEARS%20RELAXATION.pdf',
  mainsScheme: 'https://kpsc.kar.nic.in/syll_GP.pdf',
  rules2014: 'https://kpsc.kar.nic.in/GP%20RULES%2024-11-2014.pdf',
  rulesPage: 'https://kpsc.kar.nic.in/KAS1.html',
  prelims2024Paper1: 'https://kpsc.kar.nic.in/589.pdf',
  prelims2024Paper2: 'https://kpsc.kar.nic.in/590.pdf',
  reexamCorrigendum: 'https://kpsc.kar.nic.in/GP%20corrigendum%20notification-4%20,%2001-10-2024.pdf',
  translationNote: 'https://kpsc.kar.nic.in/press%20note%2030-08-2024.pdf',
  mainsCorrigendum2025: 'https://kpsc.kar.nic.in/GP%20Mains%20Corrigendum.pdf',
  eligibilityList: 'https://kpsc.kar.nic.in/GP2023-24_EligibilityList.pdf',
  ptPressNote: 'https://kpsc.kar.nic.in/PRESSNOTE.pdf',
  keys: 'https://kpsc.kar.nic.in/keyanswers.html',
  archive: 'https://kpsc.kar.nic.in/PREVIOUS%20YEARS%20QUESTION%20PAPERS.htm',
  finalLists: 'https://kpsc.kar.nic.in/final-list.html',
  provisionalLists: 'https://kpsc.kar.nic.in/provisional-list.html',
}

const KA_KAS = {
  slug: 'kpsc-kas',
  path: '/government-exams/state/karnataka/kpsc-kas/',
  name: 'KPSC KAS',
  fullName: 'Karnataka Public Service Commission — Gazetted Probationers (Group A and B) examination',
  authority: 'Karnataka Public Service Commission (KPSC)',
  official: OFFICIAL,
  seoTitle: 'KPSC KAS 2026-27: 319 Posts, Prelims 15 Nov, Pattern, Syllabus, Cut-off',
  metaDescription:
    'KPSC KAS 2026-27 — 319 posts, prelims 15 November 2026. The two 200-mark prelims papers, 1,250-mark mains plus 25-mark personality test, attempts, age and fees.',
  lead: [
    'The Gazetted Probationers examination is the Karnataka Public Service Commission’s recruitment to the state’s Group A and B services — assistant commissioners, commercial tax officers, tahsildars, treasury and cooperative officers, section officers — under the Karnataka Recruitment of Gazetted Probationers rules of 1997 as amended through 2022. It is the state’s civil services examination, and it is built like the Union one: an objective preliminary that screens and does not count, a descriptive main examination of seven papers, and a personality test.',
    'The 2026-27 notification of 31 July 2026 offers 319 posts, 117 in Group A and 202 in Group B, with 22 reserved to the Kalyana Karnataka local cadre. Applications closed on 7 September after a week’s extension for certificate and payment failures, and the preliminary examination is on 15 November 2026. The merit is 1,275 marks — 1,250 of mains and 25 of personality test — with prelims serving only to admit fifteen candidates per post.',
  ],
  quickFacts: [
    ['Conducted by', 'Karnataka Public Service Commission'],
    ['Posts, 2026-27', '319 — Group A 117, Group B 202; 297 residual cadre, 22 Kalyana Karnataka'],
    ['Status', 'Applications closed 7 September 2026; prelims 15 November 2026; mains 12 to 18 February 2027, tentative'],
    ['Prelims', 'Two papers of 100 questions and 200 marks; 0.25 off per wrong answer; screening at one to fifteen'],
    ['Mains and merit', 'Seven papers — Kannada and English qualifying at 35 per cent, essay and four general studies papers of 250 — 1,250, plus personality test 25'],
    ['Attempts and age', 'Five attempts for the general category, seven for OBC, unlimited for SC and ST; 21 to 40, 43 or 45 with the 2026 relaxation'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The post list is what makes the examination worth its year. In 2026-27 Group A carries 39 assistant commissioners in the junior scale, 50 assistant commissioners of commercial taxes, 15 executive officers of the rural development department, 11 assistant directors in social welfare and 2 in the treasury. Group B carries 74 commercial tax officers, 25 tahsildars of Grade 2, 21 assistant registrars of cooperative societies, 20 chief officers of urban local bodies, 12 assistant treasury officers, 12 assistant directors of agricultural marketing, 11 assistant directors of social welfare, 9 section officers of the secretariat and the commission, and smaller numbers in prisons, excise, food and civil supplies and employment. Physical standards apply only to the prisons, excise and police-type posts.',
    },
    {
      type: 'p',
      text: 'The 2023-24 cycle explains why this one is watched. Its preliminary of 27 August 2024 drew objections to the Kannada translation of the papers; the commission said its own translators had done the work and sent the objections to subject experts, then re-held the preliminary on 29 December 2024. The mains, postponed from March, were held in May 2025; three hundred candidates wrote them under interim court orders and the High Court in March 2026 directed their results to be declared with everyone else’s; the one-to-three personality-test list of 1,152 was published on 2 March 2026 and the tests ran from 6 May to 10 June 2026. No select list for that cycle had been published at the date checked.',
    },
    {
      type: 'list',
      title: 'What defines the examination',
      items: [
        { text: 'Prelims screen, mains rank', note: 'the preliminary admits fifteen candidates per post in each category and its marks are then discarded. Written and personality-test marks are announced with the one-to-one select list.' },
        { text: 'Kannada and English are gates', note: 'the two qualifying papers of 150 marks at SSLC first-language standard need 35 per cent each — 52.5 marks — and a fail in either bars the personality test regardless of the rest.' },
        { text: 'The personality test is 25 marks', note: 'reduced from 50 by the 2022 amendment, out of a total reduced from 1,300 to 1,275. Under two per cent of the merit.' },
        { text: 'Attempts are counted from prelims', note: 'five for the general category, seven for Category I and the 2A, 2B, 3A and 3B categories, no limit for SC and ST. Sitting the preliminary is an attempt.' },
      ],
    },
    {
      type: 'note',
      title: 'Kalyana Karnataka in one notification',
      text: 'Unlike the commission’s Group B and C rounds, which are notified separately for the residual and Hyderabad-Karnataka cadres, the Gazetted Probationers notification carries both in one document with a split column per post. A local-cadre candidate uploads the eligibility certificate in the prescribed form from the assistant commissioner of the sub-division and marks the option in the online form; the certificate must be obtained before the closing date.',
    },
  ],
  stages: [
    {
      name: 'Preliminary examination',
      mode: 'Objective, two papers of 200 marks, one day',
      detail:
        'Paper I: general studies of national and international scope, 40 questions, and the humanities, 60. Paper II: general studies of the state, 40; general science and technology, environment and ecology, 30; general mental ability, 30. Two marks a question, two hours a paper, Kannada and English, 0.25 off per wrong answer and nothing off for a blank. Fifteen candidates per post go through.',
    },
    {
      name: 'Main examination',
      mode: 'Descriptive, seven papers over four days',
      detail:
        'Kannada and English of 150 marks each, qualifying at 35 per cent, two hours; then the essay and general studies papers 1 to 4 of 250 marks and three hours each, answerable wholly in Kannada or wholly in English. Written total 1,250. A separate mains application follows the prelims result.',
    },
    {
      name: 'Personality test',
      mode: '25 marks; one to three from mains',
      detail:
        'Candidates at one to three of the vacancies are called with their original documents. The 2023-24 tests took five weeks for 1,158 candidates.',
    },
    {
      name: 'Select list',
      mode: 'One to one on 1,275',
      detail:
        'The provisional select list is published with the written and personality-test marks, service allotment following preference and rank in reservation order. The 2026-27 timetable puts it at 5 June 2027.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The 2026-27 notification of 31 July 2026 took applications from 1 August with a closing date of 31 August, extended by corrigendum of 31 August to 7 September 2026 — citing failures of the caste and income certificate servers and of fee payment in rural areas, and stating no other change. The window is closed. The commission’s timetable puts the preliminary on 15 November 2026 and its result on 15 December; the mains notification on 21 or 22 December with applications to 11 January 2027; the mains on 12, 14, 16 and 18 February 2027 with the result on 27 April; the personality tests from 10 to 31 May; and the provisional select list on 5 June 2027. All dates are tentative.`,
    },
    {
      type: 'table',
      caption: 'The 2026-27 posts, from pages 1 and 2 of the notification.',
      head: ['Post', 'Residual cadre', 'Kalyana Karnataka', 'Total'],
      rows: [
        ['Assistant Commissioner, junior scale — Group A', '36', '3', '39'],
        ['Assistant Commissioner of Commercial Taxes — Group A', '50', '—', '50'],
        ['Executive Officer, rural development — Group A', '13', '2', '15'],
        ['Assistant Director Grade 1, social welfare — Group A', '11', '—', '11'],
        ['Assistant Director, treasury — Group A', '2', '—', '2'],
        ['Commercial Tax Officer', '74', '—', '74'],
        ['Tahsildar Grade 2', '18', '7', '25'],
        ['Assistant Registrar of Cooperative Societies', '19', '2', '21'],
        ['Chief Officer Grade 1, urban development', '18', '2', '20'],
        ['Assistant Treasury Officer', '12', '—', '12'],
        ['Assistant Director, agricultural marketing', '10', '2', '12'],
        ['Assistant Director Grade 2, social welfare', '11', '—', '11'],
        ['Assistant Superintendent, prisons', '5', '1', '6'],
        ['Excise Deputy Superintendent', '5', '—', '5'],
        ['Section Officer — secretariat 5, commission 4', '8', '1', '9'],
        ['Assistant Director, food and civil supplies', '2', '2', '4'],
        ['Employment Officer', '3', '—', '3'],
        ['All posts', '297', '22', '319'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2023-24 cycle — 384 posts, notified 26 February 2024.',
      head: ['Event', 'Date'],
      rows: [
        ['Preliminary', '27 August 2024'],
        ['Commission’s note on the translation objections', '29 August 2024'],
        ['Re-examination of the preliminary fixed by corrigendum', '1 October 2024, for 29 December 2024'],
        ['Revised key of the re-examination', '30 January 2025'],
        ['Mains notification', '13 February 2025'],
        ['Mains, postponed from March', '3, 5, 7 and 9 May 2025'],
        ['High Court order on the candidates who wrote under interim orders', '6 March 2026 — results to be declared'],
        ['One-to-three personality-test list of 1,152', '2 March 2026'],
        ['Personality tests and verification', '6 May to 10 June 2026'],
        ['Select list', 'Not published at 11 September 2026'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'KPSC notifications', href: KPSC.notifications },
        { label: 'Notification 2026-27, 31 July 2026', href: KA_KAS_SRC.notification },
        { label: 'Corrigendum extending the closing date, 31 August 2026', href: KA_KAS_SRC.corrigendum },
        { label: 'Timetable 2026-27', href: KA_KAS_SRC.timetable },
        { label: 'KPSC online — application portal', href: KPSC.online },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2026-27 notification. Age on the closing date for applications; the corrigendum extended that date without addressing whether age moves with it.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'A bachelor’s or master’s degree from a university established by law, or equivalent. A candidate whose final result is awaited may sit the preliminary and must prove the pass with the mains application.'],
        ['Age', '21 minimum. 35, 38 and 40 under the rules for the general category, the 2A, 2B, 3A and 3B categories, and SC, ST and Category I — raised to 40, 43 and 45 by the one-time five-year relaxation ordered on 29 January 2026, which applies to notifications issued up to 31 December 2027.'],
        ['Further relaxation', 'Ex-servicemen, service plus three years; PwD, ten years; widows with certificate, ten years.'],
        ['Attempts', 'Five for the general category; seven for Category I, 2A, 2B, 3A and 3B; no limit for SC and ST. Appearing in the preliminary counts.'],
        ['Physical standards', 'For prisons, excise and police-type posts only — 168 cm and 86 cm chest with 5 cm expansion for men, 157 cm for women, in the prisons table.'],
        ['Certificates', 'Obtained before the closing date and uploaded; caste-and-income certificates for the 2A, 2B, 3A and 3B categories valid five years; 4 per cent for PwD and 1 per cent for transgender candidates.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, paid online; no demand draft, no refund.',
      head: ['Category', 'Fee'],
      rows: [
        ['General', '₹600'],
        ['2A, 2B, 3A, 3B', '₹300'],
        ['Ex-servicemen', '₹50'],
        ['SC, ST, Category I, PwD', 'Exempt'],
      ],
    },
    {
      type: 'p',
      text: 'There is no separate compulsory Kannada language test in this examination, as there is in the commission’s Group B and C recruitments. The Kannada requirement is the qualifying Kannada paper of the mains, at SSLC first-language standard, with 35 per cent to pass — and the same standard and threshold apply to the English paper.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Preliminary examination — the ninth amendment rules of 2011, with the negative-marking rule of 2013. Both papers in Kannada and English.',
      head: ['Paper', 'Sections', 'Questions', 'Marks', 'Time'],
      rows: [
        ['Paper I', 'General studies, national and international, 40 questions for 80; humanities, 60 for 120', '100', '200', '2 hours'],
        ['Paper II', 'General studies of the state, 40 for 80; general science and technology, environment and ecology, 30 for 60; general mental ability, 30 for 60', '100', '200', '2 hours'],
      ],
    },
    {
      type: 'note',
      title: 'Negative marking, quoted',
      text: 'The rules as amended in 2013: for each question answered wrongly, one-fourth of the marks assigned — 0.25, or half a mark on a two-mark question — is deducted; a question given more than one answer is treated as wrong even if one answer is correct; a question left blank carries no penalty. The 2024 preliminary Paper I prints the instruction on its front page. Mental ability is set at SSLC level, the rest at degree level; fifteen candidates per post are admitted to the mains, maintaining the ratio in each reserved category.',
    },
    {
      type: 'table',
      caption: 'Main examination — the eleventh amendment rules of 2014, as amended in 2020 and 2022.',
      head: ['Paper', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Kannada — qualifying', '150', '2 hours', '35 per cent, 52.5 marks, at SSLC first-language standard; not counted'],
        ['English — qualifying', '150', '2 hours', 'As Kannada'],
        ['Paper 1 — essay', '250', '3 hours', 'Wholly in Kannada or wholly in English'],
        ['Paper 2 — general studies 1', '250', '3 hours', 'Three sections'],
        ['Paper 3 — general studies 2', '250', '3 hours', 'Three sections'],
        ['Paper 4 — general studies 3', '250', '3 hours', 'Three sections'],
        ['Paper 5 — general studies 4', '250', '3 hours', 'Three sections'],
        ['Written total', '1,250', '—', '—'],
        ['Personality test', '25', '—', 'Reduced from 50 in 2022; one to three called'],
        ['Total', '1,275', '—', 'Reduced from 1,300 in 2022'],
      ],
    },
    {
      type: 'list',
      title: 'What the rules and the 2024 cycle settle',
      items: [
        { text: 'Prelims marks are discarded', note: 'the select list is on 1,275, and the marks are announced with it.' },
        { text: 'A fail in Kannada or English ends it', note: 'whatever the general studies score, the candidate is not called to the personality test.' },
        { text: 'The papers are bilingual, and translation is contested', note: 'the 2024 preliminary was re-held over the Kannada version; a candidate should read both versions of any question that reads oddly.' },
        { text: 'The timetable slips', note: 'the 2023-24 mains moved from March to May 2025 and the personality tests ran into June 2026. The 2026-27 dates are tentative by the commission’s own label.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the 2026-27 notification, corrigendum, timetable and press note, the five-year relaxation order, the mains scheme and rules documents on the commission’s syllabus page, the 2024 re-examination papers and corrigenda, and the 2023-24 eligibility list and personality-test press notes. The notification’s English text supplied the scheme and the negative-marking clause verbatim. The reason for the 2024 re-examination is stated only obliquely in the commission’s own note; press accounts of the number of translation errors are not relied on.`,
    },
    {
      type: 'links',
      title: 'Official notifications, rules and lists',
      items: [
        { label: 'Notification 2026-27, 31 July 2026', href: KA_KAS_SRC.notification },
        { label: 'Corrigendum of 31 August 2026', href: KA_KAS_SRC.corrigendum },
        { label: 'Press note of 13 August 2026 on the age relaxation', href: KA_KAS_SRC.pressNote },
        { label: 'Government order of 29 January 2026 — five-year relaxation', href: KA_KAS_SRC.relaxationGo },
        { label: 'Mains scheme and 2022 amendment', href: KA_KAS_SRC.mainsScheme },
        { label: 'Rules of 24 November 2014', href: KA_KAS_SRC.rules2014 },
        { label: 'KPSC — Gazetted Probationers rules page', href: KA_KAS_SRC.rulesPage },
        { label: 'Corrigendum fixing the 2024 re-examination', href: KA_KAS_SRC.reexamCorrigendum },
        { label: 'Commission’s note on the translation objections, 29 August 2024', href: KA_KAS_SRC.translationNote },
        { label: 'Mains corrigendum of 27 March 2025', href: KA_KAS_SRC.mainsCorrigendum2025 },
        { label: '2023-24 personality-test eligibility list, 2 March 2026', href: KA_KAS_SRC.eligibilityList },
        { label: 'Press note on the personality tests, 5 May 2026', href: KA_KAS_SRC.ptPressNote },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'KPSC KAS syllabus — the prelims sections, the mains essay and four general studies papers, and the qualifying Kannada and English papers.',
      lead: [
        'The preliminary syllabus is in the notification; the mains syllabus is Schedule II of the 2014 amendment rules, on the commission’s syllabus page.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Prelims Paper I',
              'General studies of national and international scope — current events, polity, economy — 40 questions; the humanities — Indian and Karnataka history, geography, culture — 60 questions. Degree level.',
            ],
            [
              'Prelims Paper II',
              'General studies of the state, 40 questions; general science and technology, environment and ecology, 30; general mental ability at SSLC level, 30.',
            ],
            [
              'Mains — qualifying Kannada and English',
              'Comprehension, précis, usage and short writing at SSLC first-language standard, 150 marks each.',
            ],
            [
              'Mains — essay',
              'Two or more essays of 250 marks in three hours, wholly in Kannada or English.',
            ],
            [
              'Mains — general studies 1 to 4',
              'Four papers of three sections each: history and culture, geography and economy, polity and governance, science and technology, ethics and administration, and the state’s own development, as Schedule II sets them.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Notification 2026-27 — prelims syllabus, pages 16 and 17', href: KA_KAS_SRC.notification },
            { label: 'Mains scheme and Schedule II', href: KA_KAS_SRC.mainsScheme },
            { label: 'KPSC syllabus page', href: KPSC.syllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'KPSC KAS exam pattern — prelims 400 marks as a screen at one to fifteen, mains 1,250, personality test 25, and the qualifying language papers.',
      lead: [
        'Prelims screen; mains and a 25-mark test rank.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules that decide the result.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims at one to fifteen', 'Two papers of 200; 0.25 off per wrong answer; no penalty for a blank; marks discarded.'],
            ['Kannada and English at 35 per cent', 'Qualifying; a fail bars the personality test.'],
            ['Mains 1,250', 'Essay and four general studies papers of 250, descriptive, in one language throughout.'],
            ['Personality test 25', 'One to three called; under two per cent of 1,275.'],
            ['Attempts counted from prelims', 'Five, seven or unlimited by category.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'KPSC KAS previous papers — the 2024 re-examination prelims papers, the 2017-18 mains papers and the commission’s archive back to 1999, with keys.',
      lead: [
        'The commission publishes the papers by subject code, with the keys separately. The 2024 re-examination papers are the current pattern.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Prelims 2024 re-examination', note: 'Paper I as code 589 and Paper II as code 590, with the provisional and revised keys on the keys page — the revised key of 30 January 2025.' },
            { text: 'Mains 2017-18', note: 'the qualifying English and Kannada papers and the essay and four general studies papers, codes 416 to 422 — the current mains scheme.' },
            { text: 'Older cycles', note: 'prelims of 2015 and 2017-18, and mains from 2015 back to 1999 including the old optional-subject papers.' },
            { text: 'Mains 2025', note: 'not in the archive at the date checked.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Prelims 2024 — Paper I', href: KA_KAS_SRC.prelims2024Paper1 },
            { label: 'Prelims 2024 — Paper II', href: KA_KAS_SRC.prelims2024Paper2 },
            { label: 'KPSC question papers page', href: KPSC.questionPapers },
            { label: 'KPSC papers by subject code', href: KA_KAS_SRC.archive },
            { label: 'KPSC key answers', href: KA_KAS_SRC.keys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'KPSC KAS mock tests — two-hour 100-question prelims papers scored with the quarter-mark rule, and three-hour descriptive mains sittings in one language.',
      lead: [
        'Before 15 November, the mock is two hours and 100 questions, twice, scored at −0.5 on a two-mark question.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine to the prelims and beyond',
          items: [
            { title: 'Paper I and Paper II on one day', text: 'Two hours each, in the medium you will use, from the 2024 re-examination papers and the 2017-18 papers. A blank costs nothing; a guess costs half a mark. The cut is one to fifteen in your category.' },
            { title: 'Read both language versions', text: 'The 2024 papers were re-held over translation; when a question reads oddly in one language, the other version is on the same page.' },
            { title: 'Mains — three hours by hand', text: 'An essay paper and a general studies paper a week, wholly in one language, from the 2017-18 papers. The qualifying Kannada and English papers deserve a timed sitting each; 52.5 is the gate.' },
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
        'KPSC KAS preparation — the ten weeks to the 15 November prelims, the mains application in January, and the qualifying language papers.',
      lead: [
        'Ten weeks to a screening examination, then three months to the papers that count.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From now to the select list',
          items: [
            { title: 'To 15 November — the prelims', text: 'Two papers of general studies with Karnataka’s own history, geography and administration weighted in Paper II. Mental ability is at SSLC level and is 30 questions of 200 — the cheapest marks on the paper.' },
            { title: 'Apply for the mains in January', text: 'The mains notification is due on 21 or 22 December with applications to 11 January 2027; a candidate whose degree result was awaited proves the pass here.' },
            { title: 'Write the mains in one language', text: 'The essay and general studies papers are answered wholly in Kannada or wholly in English. Choose by the language you write fastest in, not the one you read most in.' },
            { title: 'Do not neglect the qualifying papers', text: 'Kannada and English at 35 per cent bar the personality test if failed, and a candidate from another medium has 150 marks of Kannada to pass.' },
            { title: 'Keep the certificates current', note: 'caste-and-income certificates are valid five years; the Kalyana Karnataka certificate is in a prescribed form from the sub-division.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'KPSC KAS study material — state textbooks and the economic survey for Paper II, standard general studies texts, and the Schedule II mains syllabus.',
      lead: [
        'The examination is the Union pattern with a Karnataka paper; the state’s own textbooks and reports are the difference.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Prelims Paper I — national and humanities', 'NCERT and standard texts for history, geography, polity and economy; a year of current affairs', 'Degree level, 100 questions.'],
            ['Prelims Paper II — the state', 'Karnataka state textbooks for history and geography; the state economic survey; the state’s administrative structure', 'The 40-question state section is what distinguishes this from the Union prelims.'],
            ['Science, environment and mental ability', 'A general science reader, an environment primer, a reasoning workbook', 'Mental ability at SSLC level.'],
            ['Mains general studies 1 to 4', 'Schedule II of the 2014 rules, section by section; the 2017-18 papers as the model', 'Descriptive, in one language.'],
            ['Qualifying Kannada and English', 'SSLC first-language readers and grammar in each', '35 per cent to pass.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'State PSC exams', to: '/government-exams/state/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the KPSC KAS 2026 prelims?',
      a: 'On 15 November 2026, tentatively, with the result on 15 December. The 2026-27 notification of 31 July 2026 closed for applications on 7 September after a week’s extension. The mains are scheduled for 12, 14, 16 and 18 February 2027, the personality tests for May 2027 and the provisional select list for 5 June 2027 — all tentative.',
    },
    {
      q: 'How many posts are there in KPSC KAS 2026-27?',
      a: '319 — 117 in Group A, including 39 assistant commissioners and 50 assistant commissioners of commercial taxes, and 202 in Group B, including 74 commercial tax officers, 25 tahsildars and 21 assistant registrars of cooperative societies. 297 are residual cadre and 22 Kalyana Karnataka local cadre.',
    },
    {
      q: 'What is the KPSC KAS exam pattern?',
      a: 'A preliminary of two objective papers of 100 questions and 200 marks each, with 0.25 of the question’s marks deducted per wrong answer and no penalty for a blank, admitting fifteen candidates per post; a main examination of seven descriptive papers — Kannada and English of 150 marks qualifying at 35 per cent, and an essay and four general studies papers of 250 marks each for 1,250; and a personality test of 25 marks. The merit is 1,275; prelims marks are discarded.',
    },
    {
      q: 'Is there negative marking in KPSC KAS prelims?',
      a: 'Yes. Under the 2013 amendment, one-fourth of the marks assigned to a question — 0.25, which is half a mark on a two-mark question — is deducted for each wrong answer. A question given more than one answer is treated as wrong. A question left blank carries no penalty.',
    },
    {
      q: 'How many attempts are allowed in KPSC KAS?',
      a: 'Five for the general category, seven for Category I and the 2A, 2B, 3A and 3B categories, and no limit for SC and ST candidates. Appearing in the preliminary examination counts as an attempt.',
    },
    {
      q: 'What is the age limit for KPSC KAS 2026?',
      a: 'Twenty-one minimum. The rules set 35 for the general category, 38 for 2A, 2B, 3A and 3B, and 40 for SC, ST and Category I; a one-time five-year relaxation ordered on 29 January 2026 raised these to 40, 43 and 45 for notifications issued up to 31 December 2027. Ex-servicemen get service plus three years, PwD candidates and widows ten years. Age is reckoned on the closing date for applications.',
    },
    {
      q: 'What is the fee for KPSC KAS?',
      a: '₹600 for the general category, ₹300 for the 2A, 2B, 3A and 3B categories, ₹50 for ex-servicemen, and no fee for SC, ST, Category I and PwD candidates. Paid online through the KPSC portal; not refundable.',
    },
    {
      q: 'What happened to the KPSC KAS 2024 prelims?',
      a: 'The preliminary of 27 August 2024 drew objections to the Kannada translation of the papers. The commission said its own translators had done the work and referred the objections to subject experts, then fixed a re-examination by corrigendum of 1 October 2024, held on 29 December 2024. The mains followed in May 2025, the personality tests in May and June 2026, and no select list for that cycle had been published at 11 September 2026.',
    },
  ],
}

/* ── KPSC Group B ────────────────────────────────────────────────
   Two kinds of Group B recruitment. The "various posts" round under the
   2021 direct recruitment rules — two objective papers of 300 and the
   Kannada test, last notified March 2024 — and service-specific rounds under
   their own rules, of which the audit and accounts service's Audit Officer,
   with a prelims-and-mains scheme and no interview, is open at the date
   checked. */
const KA_GB_SRC = {
  rpc2024: 'https://kpsc.kar.nic.in/RPC.pdf',
  hk2024: 'https://kpsc.kar.nic.in/HK.pdf',
  saadRpc: 'https://kpsc.kar.nic.in/SAAD%20RPC%20Notification%20dt%2027-08-2026.pdf',
  saadHk: 'https://kpsc.kar.nic.in/SAAD%20HK%20Notification%20dt%2027-08-2026.pdf',
  saadSyllabus: 'https://kpsc.kar.nic.in/saad_syll.pdf',
  paper1Syllabus: 'https://kpsc.kar.nic.in/syllabus%20for%20various%20group%20A&B%20posts%20%20Paper-I%20.pdf',
  specificSyllabi: 'https://kpsc.kar.nic.in/SYLLABUS%20OF%20GROUP%20%20B%20TECHNL%20POSTS%20DT%2013-03-2024.htm',
  kannadaExemption: 'https://kpsc.kar.nic.in/pressnote%20for%20kannada%20comp%20exam%20for%20various%20posts.pdf',
  finalLists: 'https://kpsc.kar.nic.in/final-list.html',
  cutoff: 'https://kpsc.kar.nic.in/cutoff.html',
  pressNotes: 'https://kpsc.kar.nic.in/press_note.html',
  archive: 'https://kpsc.kar.nic.in/PREVIOUS%20YEARS%20QUESTION%20PAPERS.htm',
  onlineTable: 'https://kpsconline.karnataka.gov.in/Notification/LandingPageNotificationslistApplicants',
}

const KA_GROUP_B = {
  slug: 'kpsc-group-b',
  path: '/government-exams/state/karnataka/kpsc-group-b/',
  name: 'KPSC Group B',
  fullName: 'Karnataka Public Service Commission — Group B non-gazetted and service-specific posts',
  authority: 'Karnataka Public Service Commission (KPSC)',
  official: OFFICIAL,
  seoTitle: 'KPSC Group B 2026: Audit Officer Open to 26 Sep, Pattern, Kannada Test',
  metaDescription:
    'KPSC Group B — Audit Officer open to 26 September 2026, the two 300-mark papers and Kannada test of the various-posts rounds, fees, and no interview.',
  lead: [
    'The commission’s Group B posts are filled two ways. Most — assistant engineers, assistant directors, taluk welfare officers, geologists — are notified together under the Karnataka Civil Services direct recruitment rules of 2021 and examined on two objective papers of 300 marks after a compulsory Kannada language test, with selection on the percentage secured and no interview. Services with their own recruitment rules are notified on their own: the state audit and accounts service’s audit officers, for instance, under a preliminary-and-mains scheme of eight descriptive papers.',
    'The audit service is the one that is open. Two notifications of 27 August 2026 offer 53 audit officer posts and 15 assistant controller posts in the residual cadre and 15 audit officer posts in the Kalyana Karnataka cadre, with applications to 26 September 2026 and preliminaries in late November and early December. The last various-posts round, of March 2024 with 277 and 50 posts, has been examined and its select lists and cut-offs are being published post by post; no newer one has been notified.',
  ],
  quickFacts: [
    ['Conducted by', 'Karnataka Public Service Commission'],
    ['Open now', 'Audit Officer and Assistant Controller, state audit and accounts — 83 posts; applications 28 August to 26 September 2026'],
    ['Various-posts scheme', 'Kannada test 150 with 50 to pass; Paper 1 general 300 in 90 minutes; Paper 2 specific 300 in two hours; 0.25 off per wrong answer; 35 per cent'],
    ['Audit Officer scheme', 'Prelims 450 at one to twenty; mains eight papers, 2,100 marks; personality test dispensed with'],
    ['Last various-posts round', '13 March 2024 — 277 residual and 50 Kalyana Karnataka posts; select lists and cut-offs in progress'],
    ['Fee', '₹600 in 2026, ₹300 for OBC categories, ₹50 for ex-servicemen; SC, ST, Category I and PwD exempt'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The various-posts round of 13 March 2024 is the model for the general scheme. Its 277 residual-cadre posts were 92 assistant engineers for Bengaluru’s civic body and 90 civil and 10 mechanical for the water resources department, 24 assistant directors of land records, 21 taluk backward-classes welfare officers, 20 assistant directors of industries and commerce, 10 geologists, and 7 and 3 assistant directors of factories and boilers; the 50 Kalyana Karnataka posts were 19 welfare officers, 15 geologists, 8 assistant engineers and smaller numbers of the rest. Applications ran from April to May 2024 and were reopened to October; the Kannada test and general paper were held in September 2024, the specific papers in January and February 2025, and the lists have followed post by post through 2025 and 2026.',
    },
    {
      type: 'p',
      text: 'The audit service round is a different examination in the same Group. Under the Karnataka State Audit and Accounts Service recruitment rules of 2011, the audit officer — pay ₹69,250 to ₹1,34,200 — is recruited through a preliminary of general studies and commerce and management, 450 marks, admitting twenty candidates per post, and a main examination of eight papers: Kannada and English qualifying, two general studies papers, and four papers on financial accounting, management, corporate finance and taxation, and auditing and e-commerce, 2,100 marks in all. The personality test was dispensed with in October 2023; selection is on the mains.',
    },
    {
      type: 'list',
      title: 'What the two schemes share',
      items: [
        { text: 'The Kannada requirement', note: 'the various-posts round has a compulsory Kannada test of 150 marks with 50 to pass, exempt since the 2025 amendment for candidates who studied Kannada at SSLC or in Kannada medium; the audit round has a qualifying Kannada paper in the mains at 30 per cent.' },
        { text: 'No interview', note: 'the various-posts rule 5(d) selects on the percentage in the competitive examination; the audit service removed its personality test by notification of 19 October 2023.' },
        { text: 'Separate cadre notifications', note: 'residual and Hyderabad-Karnataka, now Kalyana Karnataka, notified separately under Article 371J with the local-cadre certificate from the sub-division.' },
        { text: 'The five-year relaxation', note: 'the government order of 29 January 2026 raises the upper age by five years for notifications issued to the end of 2027 — 40, 43 and 45 in the audit notification.' },
      ],
    },
    {
      type: 'note',
      title: 'Engineering posts on this page and the technical page',
      text: 'The assistant engineer posts of the 2024 Group B round are covered on the Karnataka technical posts page alongside KEA’s board and corporation recruitments; the scheme is the same as the one described here. The first and second division assistant posts, which are Group C, have their own page.',
    },
  ],
  stages: [
    {
      name: 'Kannada language test',
      mode: 'Various posts — 150 marks, 50 to pass, not counted',
      detail:
        'At SSLC first-language standard, for candidates who did not study Kannada as a first or second language at SSLC or in Kannada medium and have not passed a Kannada test of the commission or another selection authority. Held before the general paper.',
    },
    {
      name: 'Paper 1 and Paper 2',
      mode: 'Various posts — 300 and 300, objective',
      detail:
        'Paper 1, the general paper, in an hour and a half; Paper 2, the post’s specific subject, in two hours. Kannada and English, offline OMR or computer-based at the commission’s discretion, one-fourth of the question’s marks off per wrong answer, 35 per cent of the total to qualify.',
    },
    {
      name: 'Audit Officer — preliminary and mains',
      mode: '450 at one to twenty; then 2,100 over eight papers',
      detail:
        'Prelims: general studies 150 and commerce and management 300, two hours each, objective, bilingual. Mains: Kannada and English of 150 qualifying at 30 and 35 per cent; general studies 3 and 4 of 300; and four subject papers of 300 — three hours each, descriptive.',
    },
    {
      name: 'Verification and select list',
      mode: 'Percentage of marks; no interview',
      detail:
        'Document verification for those in the zone, then the provisional and final select lists with the cut-offs published post by post.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The audit and accounts service notifications of 27 August 2026 are open: 53 audit officer and 15 assistant controller posts in the residual cadre, and 15 audit officer posts — 13 plus 2 backlog — in the Kalyana Karnataka cadre, with applications from 28 August to 26 September 2026 and preliminaries tentatively on 6 December for the residual cadre and 29 November for Kalyana Karnataka. The 2024 various-posts round has been examined in full — Kannada test and general paper on 14 and 15 September 2024, specific papers on 25 and 31 January 2025 for the residual cadre and in February for Kalyana Karnataka — and its provisional and final select lists and cut-offs have been appearing on the commission’s pages since 2025. No new various-posts Group B notification has been issued since March 2024.`,
    },
    {
      type: 'table',
      caption: 'Group B rounds, from the notifications and the commission’s online table.',
      head: ['Round', 'Posts', 'Applications', 'Examination', 'Position'],
      rows: [
        ['Audit Officer and Assistant Controller — residual', '68 — 53 audit officer, 15 assistant controller', '28 August to 26 September 2026', 'Prelims 6 December 2026, tentative', 'Open'],
        ['Audit Officer — Kalyana Karnataka', '15', '28 August to 26 September 2026', 'Prelims 29 November 2026, tentative', 'Open'],
        ['Various posts — residual, 13 March 2024', '277', '15 April to 14 May 2024; reopened to 5 October', 'Kannada and Paper 1, 14 and 15 September 2024; Paper 2, 25 and 31 January 2025', 'Select lists and cut-offs publishing'],
        ['Various posts — Kalyana Karnataka, 13 March 2024', '50', 'As above', 'Paper 2, 2, 16 and 18 February 2025', 'As above'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2024 various-posts vacancies, from page 1 of each notification.',
      head: ['Post', 'Residual', 'Kalyana Karnataka'],
      rows: [
        ['Assistant Engineer, civil — BBMP', '92', '8'],
        ['Assistant Engineer, civil — water resources', '90', '—'],
        ['Assistant Engineer, mechanical — water resources', '10', '—'],
        ['Assistant Director of Land Records', '24', '3'],
        ['Taluk Backward Classes Welfare Officer', '21', '19'],
        ['Assistant Director, industries and commerce', '20', '3'],
        ['Geologist', '10', '15'],
        ['Assistant Director of Factories', '7', '2'],
        ['Assistant Director of Boilers', '3', '—'],
        ['All posts', '277', '50'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'KPSC notifications', href: KPSC.notifications },
        { label: 'Audit Officer and Assistant Controller — residual cadre, 27 August 2026', href: KA_GB_SRC.saadRpc },
        { label: 'Audit Officer — Kalyana Karnataka, 27 August 2026', href: KA_GB_SRC.saadHk },
        { label: 'KPSC online — notification table and application', href: KA_GB_SRC.onlineTable },
        { label: 'KPSC final select lists', href: KA_GB_SRC.finalLists },
        { label: 'KPSC cut-offs', href: KA_GB_SRC.cutoff },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'Audit Officer 2026 — from the residual-cadre notification. Age on the closing date.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'M.Com; or an MBA in finance or financial management, or an MBA or M.Com in financial analysis; or any master’s degree notified by the UGC with finance; or associate membership of the Institute of Chartered Accountants or of Cost and Management Accountants.'],
        ['Age', '21 minimum; 35, 38 and 40 under the rules, raised to 40, 43 and 45 by the order of 29 January 2026.'],
        ['Relaxation', 'Ex-servicemen, service plus three years; PwD, ten years; widows, ten years.'],
        ['Reservation — residual cadre audit officer, 53', 'SC 7, ST 2, Category I 3, 2A 8, 2B 2, 3A 2, 3B 3, general 26.'],
      ],
    },
    {
      type: 'table',
      caption: 'Various posts 2024 — from the residual-cadre notification. Age on the closing date.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Post by post — an AICTE-recognised civil engineering degree for assistant engineer; any bachelor’s degree for taluk welfare officer; a postgraduate degree in geology or applied geology for geologist.'],
        ['Age', '18 minimum; 35 for the general category, 38 for 2A, 2B, 3A and 3B, 40 for SC, ST and Category I.'],
        ['Kannada', 'The compulsory test, or exemption on the 2025 rule.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, paid online; not refundable.',
      head: ['Round', 'General', '2A, 2B, 3A, 3B', 'Ex-servicemen', 'SC, ST, Category I, PwD'],
      rows: [
        ['Audit Officer 2026', '₹600', '₹300', '₹50', 'Exempt'],
        ['Various posts 2024', '₹300', '₹150', '₹50', 'Exempt'],
      ],
    },
    {
      type: 'note',
      title: 'The Kannada exemption widened in 2025',
      text: 'The 2024 notifications exempted only candidates who had passed the commission’s Kannada test held on or after 29 November 2022. A government notification of 18 March 2025 amended rule 7 of the 2021 rules: candidates who studied Kannada as a first or second language at SSLC or any higher examination, or studied in Kannada medium, or passed a Kannada test of the commission or any selection authority, are exempt. The commission’s press note of 7 May 2025 applies it to the pending rounds.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Various posts — the 2021 rules, from the March 2024 notification.',
      head: ['Paper', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Kannada language test', '150', '—', '50 to pass; SSLC first-language standard; not counted; exempt on the 2025 rule'],
        ['Paper 1 — general', '300', '1½ hours', 'Objective, Kannada and English'],
        ['Paper 2 — specific to the post', '300', '2 hours', 'Objective, Kannada and English'],
        ['Negative marking', '—', '—', 'One-fourth of the marks assigned to the question, per wrong answer'],
        ['Qualifying', '—', '—', '35 per cent of the total, mandatory'],
        ['Selection', '—', '—', 'Percentage of marks in the competitive examination; no interview'],
      ],
    },
    {
      type: 'table',
      caption: 'Audit Officer and Assistant Controller — Schedule 2 of the 2011 service rules, from the 2026 notification.',
      head: ['Stage', 'Paper', 'Marks', 'Time'],
      rows: [
        ['Prelims', 'Paper 1 — general studies', '150', '2 hours'],
        ['Prelims', 'Paper 2 — commerce and management', '300', '2 hours'],
        ['Mains', 'Paper 1 — Kannada, qualifying at 30 per cent', '150', '3 hours'],
        ['Mains', 'Paper 2 — English, qualifying at 35 per cent', '150', '3 hours'],
        ['Mains', 'Paper 3 — general studies', '300', '3 hours'],
        ['Mains', 'Paper 4 — general studies', '300', '3 hours'],
        ['Mains', 'Paper 5 — financial accounting, management and analysis', '300', '3 hours'],
        ['Mains', 'Paper 6 — principles of management, organisational behaviour, training and development', '300', '3 hours'],
        ['Mains', 'Paper 7 — corporate finance, business economics and taxation', '300', '3 hours'],
        ['Mains', 'Paper 8 — principles and practice of auditing, computer concepts and e-commerce', '300', '3 hours'],
        ['Mains total', '—', '2,100', '—'],
      ],
    },
    {
      type: 'note',
      title: 'What the audit notification does and does not say',
      text: 'The prelims admit twenty candidates per post to the mains, and the notification states that the personality test has been dispensed with by a finance department notification of 19 October 2023, selection resting on the mains marks and the reservation rules. A negative-marking clause for the audit prelims was not found in the pages read; the various-posts round’s quarter-mark rule is explicit.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the two audit and accounts service notifications of 27 August 2026, the residual and Kalyana Karnataka various-posts notifications of 13 March 2024, the commission’s Paper 1 syllabus for Group A and B posts, its press note of 7 May 2025 on the Kannada exemption, and its online notification table, final-list and cut-off pages. The 2024 notifications are in Kannada with the scheme in English; the vacancy tables were read from the rendered pages. The May and September 2024 corrigenda to the various-posts round were not read.`,
    },
    {
      type: 'links',
      title: 'Official notifications, rules and syllabi',
      items: [
        { label: 'Audit Officer and Assistant Controller — residual cadre, 27 August 2026', href: KA_GB_SRC.saadRpc },
        { label: 'Audit Officer — Kalyana Karnataka, 27 August 2026', href: KA_GB_SRC.saadHk },
        { label: 'Audit and accounts service syllabus', href: KA_GB_SRC.saadSyllabus },
        { label: 'Various posts — residual cadre, 13 March 2024', href: KA_GB_SRC.rpc2024 },
        { label: 'Various posts — Kalyana Karnataka, 13 March 2024', href: KA_GB_SRC.hk2024 },
        { label: 'Paper 1 general syllabus for Group A and B posts', href: KA_GB_SRC.paper1Syllabus },
        { label: 'Post-wise specific syllabi, 2024 round', href: KA_GB_SRC.specificSyllabi },
        { label: 'Press note on the Kannada exemption, 7 May 2025', href: KA_GB_SRC.kannadaExemption },
        { label: 'KPSC press notes', href: KA_GB_SRC.pressNotes },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'KPSC Group B syllabus — the Paper 1 general syllabus of the 2021 rules, the post-wise specific papers, and the audit service’s commerce papers.',
      lead: [
        'Paper 1 is one page in the commission’s syllabus; Paper 2 is published post by post with each notification.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper 1 — general, 300 marks',
              'Current affairs; general science; the history and geography of Karnataka and India; social science; general mental ability; matters of daily household and practical knowledge — the commission’s one-page syllabus for Group A and B posts under the 2021 rules.',
            ],
            [
              'Paper 2 — specific, 300 marks',
              'The post’s discipline at the level of the qualifying degree — civil engineering, geology, industrial management, land records — set out post by post on the commission’s syllabus page for the March 2024 round.',
            ],
            [
              'Audit Officer prelims',
              'General studies of 150 and commerce and management of 300, objective, bilingual.',
            ],
            [
              'Audit Officer mains',
              'Kannada and English qualifying; two general studies papers; financial accounting, management and analysis; management principles, organisational behaviour, training and development; corporate finance, business economics and taxation; auditing, computer concepts and e-commerce.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Paper 1 general syllabus', href: KA_GB_SRC.paper1Syllabus },
            { label: 'Specific syllabi, 2024 round', href: KA_GB_SRC.specificSyllabi },
            { label: 'Audit and accounts service syllabus', href: KA_GB_SRC.saadSyllabus },
            { label: 'KPSC syllabus page', href: KPSC.syllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'KPSC Group B exam pattern — the Kannada test, two 300-mark papers with a quarter mark off, 35 per cent, and the audit service’s prelims and mains.',
      lead: [
        'Six hundred marks in two objective papers for most posts; a prelims-and-mains examination for the audit service.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules across both schemes.',
          head: ['Rule', 'Various posts', 'Audit Officer'],
          rows: [
            ['Kannada', 'Compulsory test, 150 with 50; exempt on the 2025 rule', 'Qualifying mains paper at 30 per cent'],
            ['Written', 'Paper 1 300 in 90 minutes; Paper 2 300 in two hours', 'Prelims 450; mains 2,100 over eight papers'],
            ['Negative marking', 'One-fourth per wrong answer', 'Not found for the prelims'],
            ['Qualifying', '35 per cent of the total', 'One to twenty from prelims; 30 and 35 per cent in the language papers'],
            ['Interview', 'None', 'Dispensed with in 2023'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'KPSC Group B previous papers — the commission’s general and specific papers by code, the 2020 audit service prelims and mains papers, and the keys.',
      lead: [
        'The commission publishes its papers by subject code, in Kannada and English versions, with keys on a separate page.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Group B general and specific papers', note: 'the codes in the 87 to 99 series on the question-papers page, with Kannada and English versions.' },
            { text: 'Audit service 2020', note: 'the prelims as codes 390 and 391 and the mains as 392 to 399 and 147 to 154 — the current scheme.' },
            { text: 'The 2024-25 various-posts papers', note: 'not individually identified in the archive at the date checked; the keys are on the keys page.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'KPSC question papers page', href: KPSC.questionPapers },
            { label: 'KPSC papers by subject code', href: KA_GB_SRC.archive },
            { label: 'KPSC key answers', href: KA_KAS_SRC.keys },
            { label: 'KPSC cut-offs', href: KA_GB_SRC.cutoff },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'KPSC Group B mock tests — a 90-minute general paper and a two-hour specific paper scored at a quarter mark off, and the audit service’s commerce paper.',
      lead: [
        'Score the general paper in 90 minutes and the specific paper in two hours, and take the quarter mark off every wrong answer.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine by scheme',
          items: [
            { title: 'Paper 1 — general, 90 minutes', text: 'The one-page syllabus, from the commission’s general papers. Kannada and English versions side by side.' },
            { title: 'Paper 2 — the post, two hours', text: 'The degree subject at 300 marks; the specific papers by code for the post applied for.' },
            { title: 'Audit Officer — prelims by 6 December', text: 'General studies in two hours, then commerce and management in two hours, from the 2020 papers. Twenty per post go through.' },
            { title: 'The Kannada test', text: 'Only if not exempt — 150 marks at SSLC standard, 50 to pass.' },
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
        'KPSC Group B preparation — applying for the audit officer round before 26 September 2026, the Kannada exemption, and 600 marks of objective papers.',
      lead: [
        'For the round that is open, three weeks to apply and ten to the preliminary.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From notification to select list',
          items: [
            { title: 'Apply through KPSC online before 26 September', text: 'One-time registration on the commission’s portal, the fee online, certificates obtained before the closing date. Kalyana Karnataka candidates apply under the separate notification with the sub-division certificate.' },
            { title: 'Claim the Kannada exemption if it applies', text: 'SSLC with Kannada as a first or second language, Kannada medium, or a previous pass — enter the details in the application. Otherwise the 150-mark test is the first hurdle.' },
            { title: 'Prepare the general paper as half the examination', text: 'Three hundred of 600 in the various-posts scheme; 150 of 450 in the audit prelims.' },
            { title: 'For the audit round, plan for the mains', text: 'Eight descriptive papers of three hours, four of them on accounting, management, finance and auditing, with the prelims only a screen.' },
            { title: 'Follow the lists', text: 'The commission publishes provisional and final lists and cut-offs post by post; the 2024 round’s were spread over eighteen months.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'KPSC Group B study material — state textbooks and current affairs for the general paper, degree texts for Paper 2, commerce texts for the audit service.',
      lead: [
        'The general paper is set on the state’s textbooks and the year’s events; the specific paper on the degree.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Paper 1 — general', 'Karnataka state textbooks for history, geography and civics; a year of current affairs; a general science reader; a reasoning workbook', 'Three hundred marks; the “practical knowledge” head rewards general reading.'],
            ['Paper 2 — specific', 'The undergraduate or postgraduate texts of the post’s discipline', 'Civil engineering, geology, land records, industrial management, as notified.'],
            ['Audit Officer', 'Financial accounting, cost and management accounting, corporate finance, taxation and auditing at M.Com level', 'Four mains papers of 300; the commission’s syllabus lists the heads.'],
            ['Kannada test', 'An SSLC first-language reader', 'Only for those not exempt.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Karnataka technical posts — assistant engineer', to: '/government-exams/state/karnataka/technical-posts/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any KPSC Group B recruitment open now?',
      a: 'Yes. Two audit and accounts service notifications of 27 August 2026 — 53 audit officer and 15 assistant controller posts in the residual cadre and 15 audit officer posts in the Kalyana Karnataka cadre — are open until 26 September 2026, with preliminaries tentatively on 6 December and 29 November. No various-posts Group B notification has been issued since 13 March 2024.',
    },
    {
      q: 'What is the KPSC Group B exam pattern?',
      a: 'For the various-posts rounds under the 2021 rules: a compulsory Kannada test of 150 marks with 50 to pass, then Paper 1, the general paper, of 300 marks in 90 minutes and Paper 2, the post’s subject, of 300 marks in two hours — objective, bilingual, one-fourth of the question’s marks off per wrong answer, 35 per cent to qualify, and selection on the percentage secured with no interview. The audit service has its own prelims-and-mains scheme.',
    },
    {
      q: 'What is the KPSC Audit Officer exam pattern?',
      a: 'A preliminary of general studies, 150 marks, and commerce and management, 300 marks, in two hours each, admitting twenty candidates per post; then a main examination of eight three-hour papers — Kannada and English of 150 qualifying at 30 and 35 per cent, two general studies papers of 300, and four papers of 300 on financial accounting, management, corporate finance and taxation, and auditing and e-commerce, 2,100 in all. The personality test was dispensed with in October 2023.',
    },
    {
      q: 'Who is eligible for KPSC Audit Officer 2026?',
      a: 'Holders of an M.Com, an MBA in finance or financial management, an MBA or M.Com in financial analysis, any UGC-notified master’s degree with finance, or associate membership of the chartered accountants’ or cost and management accountants’ institutes. Age 21 to 40, 43 or 45 by category with the 2026 relaxation, on the closing date of 26 September 2026.',
    },
    {
      q: 'Is the Kannada test compulsory for KPSC Group B?',
      a: 'For the various-posts rounds, yes — 150 marks at SSLC first-language standard with 50 to pass, not counted in the merit — unless exempt. Since the amendment of 18 March 2025, candidates who studied Kannada as a first or second language at SSLC or above, studied in Kannada medium, or passed a Kannada test of the commission or another selection authority are exempt. The audit service has a qualifying Kannada paper in its mains instead.',
    },
    {
      q: 'What is the fee for KPSC Group B?',
      a: 'In the 2026 audit notifications, ₹600 for the general category, ₹300 for the 2A, 2B, 3A and 3B categories, ₹50 for ex-servicemen, and nothing for SC, ST, Category I and PwD candidates. The 2024 various-posts round charged ₹300 and ₹150.',
    },
    {
      q: 'Is there negative marking in KPSC Group B?',
      a: 'In the various-posts rounds, one-fourth of the marks assigned to the question is deducted for each wrong answer, in both papers. A negative-marking clause for the audit service preliminary was not found in the notification pages read.',
    },
    {
      q: 'What happened to the KPSC Group B 2024 recruitment?',
      a: 'The 277 residual-cadre and 50 Kalyana Karnataka posts notified on 13 March 2024 were examined — the Kannada test and general paper on 14 and 15 September 2024, the specific papers in January and February 2025 — and the commission has been publishing provisional and final select lists and cut-offs post by post since 2025, including the assistant engineer list for Bengaluru’s civic body.',
    },
  ],
}

/* ── KPSC Group C ────────────────────────────────────────────────
   The 2021 rules' two-paper scheme at 100 marks each: general knowledge,
   then Kannada, English and computer knowledge. Diploma-level technical
   posts sit the same general papers with no technical paper. Last notified
   in four documents of 15 March 2024; nothing open at the date checked. */
const KA_GC_SRC = {
  degreeRpc: 'https://kpsc.kar.nic.in/RPC-Group-C-posts%20Degree%20Qualification1.pdf',
  belowDegreeRpc: 'https://kpsc.kar.nic.in/RPC-Group-C-below%20degree%20posts.pdf',
  belowDegreeHk: 'https://kpsc.kar.nic.in/HK-Group-C-posts%20below%20Degree%20qualification.pdf',
  ageCorrigendum: 'https://kpsc.kar.nic.in/Corrigendum%20RPC%20Degree%20level%20posts.pdf',
  syllabusDegree: 'https://kpsc.kar.nic.in/Syllabus%20Group-C%20Degree%20Level%20Posts%20KCSR%202021.pdf',
  syllabusBelowDegree: 'https://kpsc.kar.nic.in/Syllabus%20Group-C%20Below%20Degree%20level%20Posts%20KCSR%202021.pdf',
  results: 'https://kpsc.kar.nic.in/results.html',
  timetable: 'https://kpsc.kar.nic.in/time-table.html',
}

const KA_GROUP_C = {
  slug: 'kpsc-group-c',
  path: '/government-exams/state/karnataka/kpsc-group-c/',
  name: 'KPSC Group C',
  fullName: 'Karnataka Public Service Commission — Group C technical and non-technical posts',
  authority: 'Karnataka Public Service Commission (KPSC)',
  official: OFFICIAL,
  seoTitle: 'KPSC Group C: Two 100-Mark Papers, Kannada Test, 2024 Round Status',
  metaDescription:
    'KPSC Group C — two objective papers of 100 marks, the compulsory Kannada test, a quarter mark off per wrong answer, and the March 2024 round of 486 posts.',
  lead: [
    'The commission’s Group C posts — industrial extension officers, librarians, junior engineers, health inspectors, water supply inspectors — are recruited under the Karnataka Civil Services direct recruitment rules of 2021 on the simplest of its schemes: a compulsory Kannada language test, then two objective papers of 100 marks, general knowledge and a combined paper of Kannada, English and computer knowledge. Selection is the percentage secured. There is no interview and, for the diploma-level technical posts, no technical paper.',
    'The last round was four notifications of 15 March 2024 — degree-level and below-degree, each for the residual and Kalyana Karnataka cadres — offering 486 posts, of which 313 were the water resources department’s junior engineers. Applications were reopened in October 2024 with a three-year age relaxation, the Kannada tests and papers ran through 2025, and final select lists and cut-offs for the Kalyana Karnataka posts have been published in 2026. No Group C notification is open at the date checked. The first and second division assistant posts, also Group C, have their own page.',
  ],
  quickFacts: [
    ['Conducted by', 'Karnataka Public Service Commission'],
    ['Open now', 'Nothing — the commission’s online table shows no Group C notification with a future closing date'],
    ['Last round', 'Four notifications of 15 March 2024 — 60 and 16 degree-level, 313 and 97 below-degree posts'],
    ['Scheme', 'Kannada test 150 with 50 to pass; Paper 1 general knowledge 100 in 90 minutes; Paper 2 Kannada 35, English 35, computer 30 in two hours'],
    ['Negative marking', 'One-fourth of the question’s marks per wrong answer; 35 per cent to qualify'],
    ['Fee, 2024', '₹600; ₹300 for OBC categories; ₹50 for ex-servicemen; SC, ST, Category I and PwD exempt'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The four notifications divide by qualification and cadre. The degree-level residual notification carried 50 industrial extension officers and 10 librarians; its Kalyana Karnataka counterpart 16 posts. The below-degree residual notification carried 216 civil junior engineers for the water resources department with 54 more reserved for serving Group C staff, 26 mechanical junior engineers with 4 in-service, and 13 assistant librarians; the below-degree Kalyana Karnataka notification 97 posts — 39 junior health inspectors, 20 junior engineers for rural water supply, 15 for the municipal administration directorate, 5 for groundwater, 1 electrical, 9 water supply and assistant water supply inspectors and 8 assistant librarians.',
    },
    {
      type: 'p',
      text: 'The scheme is the same for every post. Rule 6(2)(a) for degree-level posts and 6(2)(b) for below-degree posts prescribe two compulsory objective papers of 100 marks: Paper 1, general knowledge, in an hour and a half, and Paper 2, general Kannada for 35, general English for 35 and computer knowledge for 30, in two hours. One-fourth of the question’s marks comes off for each wrong answer, 35 per cent of the aggregate is mandatory, and selection under rule 5(d) is on the percentage of marks in the competitive examination. Offline OMR or computer-based, at the commission’s discretion.',
    },
    {
      type: 'list',
      title: 'What the scheme means for each kind of candidate',
      items: [
        { text: 'A diploma holder competes on general papers', note: 'the junior engineer posts in the below-degree notification sit the same two papers as the assistant librarian; there is no engineering paper. KEA’s junior engineer recruitments, by contrast, have a 100-mark subject paper.' },
        { text: 'The Kannada test is separate and earlier', note: '150 marks at SSLC first-language standard with 50 to pass, not counted; the 2024 round’s test for degree-level posts was held on 12 July 2025. Exempt on the 2025 rule for candidates who studied Kannada at SSLC or in Kannada medium.' },
        { text: 'Kannada and English are inside Paper 2 as well', note: 'seventy of its 100 marks, with computer knowledge the other 30.' },
        { text: 'The age moved twice', note: 'the 2024 notifications set 35, 38 and 40; the corrigendum of 14 October 2024 applied a one-time three-year relaxation and reopened applications for a fortnight; notifications issued to the end of 2027 carry the five-year relaxation of January 2026 instead.' },
      ],
    },
    {
      type: 'note',
      title: 'Where the Group C posts on this site divide',
      text: 'The first and second division assistant posts, which are Group C under the same rules and the same two-paper scheme, are on their own page because the commission notifies them separately and in far larger numbers. The junior engineer posts of the 2024 round are also covered on the technical posts page, alongside KEA’s recruitments with their subject paper.',
    },
  ],
  stages: [
    {
      name: 'Kannada language test',
      mode: '150 marks, 50 to pass, not counted',
      detail:
        'For candidates who did not study Kannada as a first or second language at SSLC or in Kannada medium and have not passed a Kannada test of the commission or another selection authority. Held before the papers, at SSLC first-language standard.',
    },
    {
      name: 'Paper 1 — general knowledge',
      mode: '100 marks, 90 minutes, objective',
      detail:
        'Current affairs, general science, the history and geography of Karnataka and India, social science, mental ability and practical knowledge, in Kannada and English. One-fourth of the mark off per wrong answer.',
    },
    {
      name: 'Paper 2 — Kannada, English and computer knowledge',
      mode: '100 marks, two hours, objective',
      detail:
        'General Kannada 35, general English 35, computer knowledge 30. The same negative marking. Both papers are compulsory and 35 per cent of the aggregate is required.',
    },
    {
      name: 'Verification and select list',
      mode: 'Percentage of marks; no interview',
      detail:
        'Document verification for candidates in the zone, then provisional and final select lists with cut-offs, post by post and cadre by cadre.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No Group C notification is open. The 2024 round is largely complete: the Kannada language test for the degree-level posts was held on 12 July 2025, the competitive papers followed under the timetable of 13 June 2025, and final select lists and cut-offs for the Kalyana Karnataka below-degree posts — civil, electrical and rural water supply junior engineers, junior health inspectors and librarians — have been published in 2026. A press report that the residual-cadre junior engineer result was declared on 2 May 2026 was not found on the commission’s results page. Nothing newer than 15 March 2024 has been notified for Group C, and the commission’s online table shows no Group C notification with a future closing date.`,
    },
    {
      type: 'table',
      caption: 'The four notifications of 15 March 2024, from their first pages. Applications 29 April to 28 May 2024, reopened 15 to 30 October 2024.',
      head: ['Notification', 'Cadre', 'Posts'],
      rows: [
        ['PSC 506 RTB(2)/2023-24 — degree level', 'Residual', '60 — Industrial Extension Officer 50, Librarian 10'],
        ['PSC 505 RTB(2)/2023-24 — degree level', 'Kalyana Karnataka', '16, by the commission’s press note of 7 May 2025; the notification PDF is not served'],
        ['PSC 503 RTB(2)/2023-24 — below degree', 'Residual', '313 — JE civil, water resources 216 and 54 in-service; JE mechanical 26 and 4 in-service; Assistant Librarian 13'],
        ['PSC 504 RTB(2)/2023-24 — below degree', 'Kalyana Karnataka', '97 — Junior Health Inspector 39; JE rural water supply 20; JE civil, municipal administration 15; JE groundwater 5; JE electrical 1; Water Supply Inspector 4; Assistant Water Supply Inspector 5; Assistant Librarian 8'],
      ],
    },
    {
      type: 'table',
      caption: 'Category roster examples, from the residual-cadre notifications.',
      head: ['Post', 'SC', 'ST', 'Cat I', '2A', '2B', '3A', '3B', 'General', 'Total'],
      rows: [
        ['Industrial Extension Officer', '9', '4', '2', '7', '2', '2', '2', '22', '50'],
        ['Junior Engineer, civil — water resources', '37', '15', '9', '32', '9', '8', '10', '96', '216'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'KPSC notifications', href: KPSC.notifications },
        { label: 'KPSC online — notification table', href: KA_GB_SRC.onlineTable },
        { label: 'KPSC results', href: KA_GC_SRC.results },
        { label: 'KPSC timetables', href: KA_GC_SRC.timetable },
        { label: 'KPSC final select lists', href: KA_GB_SRC.finalLists },
        { label: 'KPSC cut-offs', href: KA_GB_SRC.cutoff },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the residual-cadre notifications of March 2024. Age on the closing date.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification — degree level', 'Post by post: a degree in science, commerce or business administration or any engineering branch for industrial extension officer; a library science qualification for librarian.'],
        ['Qualification — below degree', 'A diploma in civil engineering from the state board of technical education for junior engineer, civil; the corresponding diploma for mechanical; the health inspector and library qualifications as notified.'],
        ['Age, as notified', '18 minimum; 35 for the general category, 38 for 2A, 2B, 3A and 3B, 40 for SC, ST and Category I.'],
        ['Age, after the corrigendum of 14 October 2024', '38, 41 and 43, by the one-time three-year relaxation ordered on 10 September 2024; applications reopened 15 to 30 October 2024.'],
        ['Future notifications', 'The five-year relaxation of 29 January 2026 applies to notifications issued to 31 December 2027.'],
        ['In-service quota', '54 civil and 4 mechanical junior engineer posts for serving Group C staff of the department.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, online; not refundable.',
      head: ['Category', 'Fee'],
      rows: [
        ['General', '₹600'],
        ['2A, 2B, 3A, 3B', '₹300'],
        ['Ex-servicemen', '₹50'],
        ['SC, ST, Category I, PwD', 'Exempt'],
      ],
    },
    {
      type: 'p',
      text: 'The Kannada test exemption follows the amendment of 18 March 2025 to rule 7 of the 2021 rules: candidates who studied Kannada as a first or second language at SSLC or a higher examination, studied in Kannada medium, or passed a Kannada test of the commission or any selection authority are exempt, and the commission’s press note of 7 May 2025 applies it to the pending rounds. The 2024 notifications as issued exempted only those who had passed the commission’s test since 29 November 2022.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The scheme under rules 6(2)(a) and 6(2)(b) of the 2021 rules, identical in the degree-level and below-degree notifications.',
      head: ['Paper', 'Content', 'Marks', 'Time'],
      rows: [
        ['Kannada language test', 'SSLC first-language standard; 50 to pass; not counted', '150', '—'],
        ['Paper 1', 'General knowledge', '100', '1½ hours'],
        ['Paper 2', 'General Kannada 35; general English 35; computer knowledge 30', '100', '2 hours'],
      ],
    },
    {
      type: 'note',
      title: 'Negative marking, qualifying and selection',
      text: 'One-fourth of the marks assigned to the question is deducted for each wrong answer in both papers. Both papers are compulsory and a minimum of 35 per cent of the aggregate is mandatory. Selection under rule 5(d) is on the percentage of marks secured in the competitive examination — there is no interview — and the papers are held offline on OMR sheets or as a computer-based test at the commission’s discretion, in Kannada and English.',
    },
    {
      type: 'list',
      title: 'What follows from the scheme',
      items: [
        { text: 'The technical posts have no technical paper', note: 'the below-degree notification prescribes the same two general papers for junior engineers as for assistant librarians.' },
        { text: 'Language is 70 of Paper 2 and all of the Kannada test', note: 'a candidate from another medium faces 150 marks of Kannada to pass and 35 more inside the paper.' },
        { text: 'Computer knowledge is 30 marks', note: 'basic applications, the internet and office software at the level the 2021 syllabus sets.' },
        { text: 'The cut-off is a percentage', note: 'published post by post and category by category; the floor is 35.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the residual-cadre degree-level and below-degree notifications of 15 March 2024, the Kalyana Karnataka below-degree notification, the age corrigendum of 14 October 2024, the commission’s Group C syllabus documents under the 2021 rules, its press note of 7 May 2025 on the Kannada exemption, and its results, timetable, final-list and cut-off pages. The Kalyana Karnataka degree-level notification PDF is not served by the commission’s site; its 16 posts are from the commission’s press note. The 2024 Kalyana Karnataka corrigenda were not read.`,
    },
    {
      type: 'links',
      title: 'Official notifications, rules and syllabi',
      items: [
        { label: 'Degree-level posts — residual cadre, 15 March 2024', href: KA_GC_SRC.degreeRpc },
        { label: 'Below-degree posts — residual cadre, 15 March 2024', href: KA_GC_SRC.belowDegreeRpc },
        { label: 'Below-degree posts — Kalyana Karnataka, 15 March 2024', href: KA_GC_SRC.belowDegreeHk },
        { label: 'Corrigendum of 14 October 2024 — age relaxation and reopening', href: KA_GC_SRC.ageCorrigendum },
        { label: 'Syllabus — Group C degree-level posts, 2021 rules', href: KA_GC_SRC.syllabusDegree },
        { label: 'Syllabus — Group C below-degree posts, 2021 rules', href: KA_GC_SRC.syllabusBelowDegree },
        { label: 'Press note on the Kannada exemption, 7 May 2025', href: KA_GB_SRC.kannadaExemption },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'KPSC Group C syllabus — the general knowledge paper and the Kannada, English and computer knowledge paper, for degree-level and below-degree posts.',
      lead: [
        'The commission publishes one syllabus document for degree-level posts and one for below-degree posts; the papers are the same shape.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper 1 — general knowledge, 100 marks',
              'Current affairs; general science; the history, geography and social science of Karnataka and India; general mental ability; and matters of daily life and practical knowledge.',
            ],
            [
              'Paper 2 — general Kannada, 35',
              'Grammar, vocabulary, comprehension and usage at general level.',
            ],
            [
              'Paper 2 — general English, 35',
              'Grammar, vocabulary, comprehension and usage at general level.',
            ],
            [
              'Paper 2 — computer knowledge, 30',
              'Computer basics, operating systems, office applications, the internet and e-governance at the level the 2021 syllabus sets.',
            ],
            [
              'Kannada language test',
              'SSLC first-language standard, 150 marks, 50 to pass.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Group C degree-level syllabus', href: KA_GC_SRC.syllabusDegree },
            { label: 'Group C below-degree syllabus', href: KA_GC_SRC.syllabusBelowDegree },
            { label: 'KPSC syllabus page', href: KPSC.syllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'KPSC Group C exam pattern — the Kannada test, two 100-mark objective papers, a quarter mark off per wrong answer, 35 per cent, and no interview.',
      lead: [
        'Two hundred marks in two papers, a Kannada test that does not count, and a percentage.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Kannada test', '150 marks, 50 to pass; exempt on the 2025 rule; not counted.'],
            ['Paper 1', 'General knowledge, 100 marks, 90 minutes.'],
            ['Paper 2', 'Kannada 35, English 35, computer 30 — 100 marks, two hours.'],
            ['Negative marking', 'One-fourth of the question’s marks per wrong answer.'],
            ['Qualifying and selection', '35 per cent of the aggregate; percentage of marks; no interview.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'KPSC Group C previous papers — the general knowledge and communication papers by code, the compulsory Kannada papers, and the keys.',
      lead: [
        'The commission publishes Group C non-technical papers by code, in both languages, and the compulsory Kannada papers separately.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'General knowledge and Paper 2', note: 'codes 471 and 472, 488 and 489, and the 640 and 641 and 650 and 651 pairs in the subject-code archive.' },
            { text: 'Below-degree general studies', note: 'code 185, with an older junior engineer specific paper as code 197 from a previous scheme.' },
            { text: 'Compulsory Kannada', note: 'codes 284, 460, 469, 487 and 493.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'KPSC question papers page', href: KPSC.questionPapers },
            { label: 'KPSC papers by subject code', href: KA_GB_SRC.archive },
            { label: 'KPSC key answers', href: KA_KAS_SRC.keys },
            { label: 'KPSC cut-offs', href: KA_GB_SRC.cutoff },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'KPSC Group C mock tests — a 90-minute general knowledge paper and a two-hour language and computer paper, scored at a quarter mark off.',
      lead: [
        'Two sittings, scored the commission’s way.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Paper 1 — 100 questions in 90 minutes', text: 'From the published general knowledge papers. A quarter off per wrong answer; the 35 per cent floor is on the two papers together.' },
            { title: 'Paper 2 — 100 questions in two hours', text: 'Thirty-five each of Kannada and English and thirty of computer knowledge. The language sections decide the paper for most candidates.' },
            { title: 'The Kannada test', text: 'Only if not exempt — 150 marks at SSLC standard, 50 to pass, from the published compulsory Kannada papers.' },
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
        'KPSC Group C preparation — watching for the next round, the Kannada exemption, and preparing two general papers for a technical or non-technical post.',
      lead: [
        'Nothing is open; the preparation is for a scheme that has not changed since 2021.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From notification to select list',
          items: [
            { title: 'Watch the notifications page and the online table', text: 'Group C rounds come in separate degree-level and below-degree notifications for each cadre; the last were March 2024.' },
            { title: 'Settle the Kannada position', text: 'SSLC Kannada, Kannada medium or a previous pass exempts; otherwise the 150-mark test is the first hurdle.' },
            { title: 'Prepare the general papers whatever the post', text: 'A junior engineer and a librarian sit the same two papers. There is no technical paper to fall back on.' },
            { title: 'Register once on KPSC online', text: 'The one-time registration carries across rounds; certificates must be obtained before the closing date.' },
            { title: 'Follow the lists by cadre', text: 'The Kalyana Karnataka lists of the 2024 round appeared in 2026; the residual-cadre lists follow.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'KPSC Group C study material — state textbooks and current affairs for general knowledge, grammar readers for Kannada and English, and a computer basics text.',
      lead: [
        'The general paper is set on the state’s textbooks and the year’s events; Paper 2 on school-level language and basic computing.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Paper 1 — general knowledge', 'Karnataka state textbooks for history, geography and civics; a year of current affairs; a general science reader; a reasoning workbook', '100 marks in 90 minutes.'],
            ['Paper 2 — Kannada and English', 'School-level grammar and comprehension in each', '70 of 100.'],
            ['Paper 2 — computer knowledge', 'A basic computer applications text', '30 marks.'],
            ['Kannada test', 'An SSLC first-language reader', 'Only for those not exempt.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Karnataka FDA and SDA posts', to: '/government-exams/state/karnataka/fda-and-sda-posts/' },
            { label: 'Karnataka technical posts', to: '/government-exams/state/karnataka/technical-posts/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is any KPSC Group C recruitment open now?',
      a: 'No. The commission’s online table shows no Group C notification with a future closing date, and nothing has been notified for Group C since the four notifications of 15 March 2024. The first and second division assistant posts are notified separately.',
    },
    {
      q: 'What is the KPSC Group C exam pattern?',
      a: 'A compulsory Kannada language test of 150 marks with 50 to pass, not counted, then two objective papers of 100 marks: Paper 1, general knowledge, in 90 minutes, and Paper 2 — general Kannada 35, general English 35 and computer knowledge 30 — in two hours. One-fourth of the question’s marks is deducted per wrong answer, 35 per cent of the aggregate is required, and selection is on the percentage secured with no interview.',
    },
    {
      q: 'Is there a technical paper for KPSC junior engineer posts?',
      a: 'Not in the commission’s Group C scheme. The below-degree notification of March 2024 prescribes the same two general papers for the water resources department’s junior engineers as for assistant librarians — general knowledge, and Kannada, English and computer knowledge. KEA’s junior engineer recruitments have a 100-mark subject paper.',
    },
    {
      q: 'How many posts were in KPSC Group C 2024?',
      a: '486 across four notifications of 15 March 2024: 60 degree-level residual-cadre posts — 50 industrial extension officers and 10 librarians — and 16 in Kalyana Karnataka; 313 below-degree residual posts, of which 270 were civil junior engineers including 54 for serving staff, 30 mechanical and 13 assistant librarians; and 97 below-degree Kalyana Karnataka posts including 39 junior health inspectors and 41 junior engineers.',
    },
    {
      q: 'Is the Kannada test compulsory for KPSC Group C?',
      a: 'Yes, unless exempt — 150 marks at SSLC first-language standard with 50 to pass, not counted in the merit. Since the amendment of 18 March 2025, candidates who studied Kannada as a first or second language at SSLC or above, studied in Kannada medium, or passed a Kannada test of the commission or another selection authority are exempt.',
    },
    {
      q: 'What is the age limit for KPSC Group C?',
      a: 'Eighteen minimum. The 2024 notifications set 35 for the general category, 38 for 2A, 2B, 3A and 3B and 40 for SC, ST and Category I, raised to 38, 41 and 43 by a one-time three-year relaxation in October 2024. Notifications issued up to 31 December 2027 carry the five-year relaxation ordered on 29 January 2026 instead.',
    },
    {
      q: 'What is the fee for KPSC Group C?',
      a: '₹600 for the general category, ₹300 for the 2A, 2B, 3A and 3B categories, ₹50 for ex-servicemen, and nothing for SC, ST, Category I and PwD candidates, in the 2024 notifications. Paid online; not refundable.',
    },
    {
      q: 'Where are the KPSC Group C 2024 results?',
      a: 'On the commission’s results, final-list and cut-off pages, post by post. Final select lists and cut-offs for the Kalyana Karnataka below-degree posts — junior engineers, junior health inspectors and librarians — were published in 2026. A press report of a residual-cadre junior engineer result on 2 May 2026 was not found on the results page at 11 September 2026.',
    },
  ],
}

/* ── FDA and SDA ────────────────────────────────────────────────
   The commission last notified first and second division assistants in
   2020; since 2024 KEA has recruited them for the departments, boards and
   corporations under the 2021 rules' two-paper Group C scheme. The next
   round — about 4,500 posts across the departments — was announced on
   31 August 2026 for September notification and had not appeared at the
   date checked. */
const KA_FDA_SRC = {
  keaOffice2026: 'https://cetonline.karnataka.gov.in/keawebentry456/kearpcrec2026/20260520112348kannada.pdf',
  keaOffice2026Page: 'https://cetonline.karnataka.gov.in/kea/kearpcrec2026.aspx',
  keaUpcomingEn: 'https://cetonline.karnataka.gov.in/keawebentry456/vdptrecnhk2025/VER_REC_NOTE_31082026english.pdf',
  keaVd2026: 'https://cetonline.karnataka.gov.in/kea/vdptrecnhk2026',
  keaVdKk2026: 'https://cetonline.karnataka.gov.in/kea/vdptrechk2026',
  fda2019Rpc: 'https://kpsc.kar.nic.in/FDA%202019%20_RPC_%20UPDATD.pdf',
  fda2019Hk: 'https://kpsc.kar.nic.in/FDA%202019%20_HK_%20UPDATED.pdf',
  sda2019Rpc: 'https://kpsc.kar.nic.in/SDA%202019%20_RPC_%20UPDATD%20-%20FINAL.pdf',
  sda2019Hk: 'https://kpsc.kar.nic.in/SDA%202019%20_HK_%20UPDATED%20FINAL.pdf',
  fdaAddendum2: 'https://kpsc.kar.nic.in/Addendum%202nd%20Notification%20AFDA%2015-1-2021.pdf',
  sdaAddendum: 'https://kpsc.kar.nic.in/addendum%20NOTIFICAITON%20SDA-2017.pdf',
  fdaKannadaCorrigendum: 'https://kpsc.kar.nic.in/revised%20corrigendum%20notifn%20FDA2019-20%20KAN%20COMP.pdf',
  fdaAdditionalList: 'https://kpsc.kar.nic.in/Pressnote_FDA19.pdf',
  sdaSecondAdditional: 'https://kpsc.kar.nic.in/pressnote%202019%20SDA_2nd%20Additional%20List%20RPC.pdf',
  paper366: 'https://kpsc.kar.nic.in/FDASDA2019_366.pdf',
}

const KA_FDA_SDA = {
  slug: 'fda-and-sda-posts',
  path: '/government-exams/state/karnataka/fda-and-sda-posts/',
  name: 'Karnataka FDA and SDA',
  fullName: 'First Division Assistant and Second Division Assistant posts — KEA and KPSC',
  authority: 'Karnataka Examinations Authority for current rounds; Karnataka Public Service Commission for the 2019-20 cycle',
  official: 'cetonline.karnataka.gov.in/kea',
  seoTitle: 'Karnataka FDA & SDA 2026: KEA Round, Pattern, Kannada Test, Eligibility',
  metaDescription:
    'Karnataka FDA and SDA — the September 2026 KEA round of 4,483 posts, the two 100-mark papers with 0.25 negative marking, the Kannada test, fees and age.',
  lead: [
    'First division assistants and second division assistants are the ministerial staff of every Karnataka department — the degree-level and PUC-level clerical cadres under the Karnataka Civil Services ministerial staff rules of 1978 — and their recruitment is the largest the state runs for graduates and school-leavers. It has changed hands. The Public Service Commission notified 2,400 posts in 2020 and finished those lists in 2025; since 2024 the Karnataka Examinations Authority has recruited the cadres for departments, boards and corporations under the 2021 direct recruitment rules.',
    'The next round is announced but not open. KEA’s note of 31 August 2026 lists 2,421 degree-level and 2,062 PUC-level non-technical posts across the departments — 590 second division assistants for commercial taxes alone, 309 for rural development, 148 first division assistants for rural development, 66 for commercial taxes — for notification in September and examination in November and December 2026. The scheme is settled: a Kannada test of 150 marks that does not count, then two objective papers of 100 marks with a quarter mark off per wrong answer and 35 per cent to qualify.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'KEA for departments, boards and corporations since 2024; KPSC last notified the cadres in 2020'],
    ['Next round', 'Announced 31 August 2026 — 2,421 degree-level and 2,062 PUC-level posts, September notification, November to December examinations; not yet published'],
    ['Scheme', 'Kannada test 150 with 50 to pass; Paper 1 general knowledge 100; Paper 2 Kannada, English and computer knowledge 100; two hours each'],
    ['Negative marking', '0.25 per wrong answer; a question with more than one option shaded is wrong'],
    ['Pay, 2024 scale', 'FDA ₹44,425 to ₹83,700; SDA ₹34,100 to ₹67,600'],
    ['Fee and age, KEA 2026', '₹750; ₹500 for SC, ST, Category I, ex-servicemen and third-gender candidates; ₹250 for PwD. 18 to 40, 43 or 45 with the 2026 relaxation'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2019-20 cycle was the commission’s last and shows the scale. The first division assistant notifications of 31 January 2020 offered 975 residual-cadre and 137 Kalyana Karnataka posts, raised by two addenda to 1,008 and 153; the second division assistant notifications of 29 February 2020 offered 1,080 and 199, raised to 1,122 and 201. Both were examined in 2021 — the first division assistant Kannada test of January 2021 was cancelled for OMR barcode defects and re-held while the competitive paper of 28 February stood — and both ran through final and additional select lists to December 2023 for FDA and March 2025 for SDA. The commission has notified neither cadre since.',
    },
    {
      type: 'p',
      text: 'KEA’s scheme, in its own office notification of 19 May 2026 for two first division and four second division assistants, is the one the September round will follow. Paper 1 is general knowledge, 100 questions and 100 marks in two hours; Paper 2 is general Kannada, general English and computer knowledge, 100 questions and 100 marks in two hours; both offline on OMR sheets, both bilingual, with 0.25 deducted per wrong answer and 35 per cent of the total required. Before them, a Kannada language test of 150 marks with 50 to pass, qualifying only, exempt for candidates who studied Kannada as a first or second language at SSLC or in Kannada medium or have passed such a test before.',
    },
    {
      type: 'list',
      title: 'What the two cadres share and where they differ',
      items: [
        { text: 'The same two papers', note: 'the commission’s 2021 syllabus documents set the degree-level and below-degree Group C papers at the same shape — general knowledge, then Kannada, English and computer — at degree and PUC standard respectively.' },
        { text: 'A degree for FDA, PUC for SDA', note: 'with the listed equivalents for PUC — CBSE and ICSE class 12, NIOS, a two-year ITI or JOC, or a three-year diploma under the government orders of 2021.' },
        { text: 'One notification per cadre and department', note: 'KEA’s announcement lists posts department by department in the residual and Kalyana Karnataka cadres; the September notifications will carry them separately.' },
        { text: 'No typing test and no interview', note: 'neither the 2019-20 commission scheme nor KEA’s 2026 scheme has either; selection is the percentage of marks in reservation order.' },
      ],
    },
    {
      type: 'note',
      title: 'On “KPSC FDA SDA 2025” and similar claims',
      text: 'The commission has not notified first or second division assistants since February 2020. Notifications described as KPSC FDA or SDA rounds of 2025 or 2026 are KEA drives for boards and corporations — and one such claim, of 101 FDA and 77 SDA posts in October 2025, has no official document that could be found. The commission’s Group C page on this site covers its other Group C posts; this page covers the cadres wherever they are notified.',
    },
  ],
  stages: [
    {
      name: 'Notification and application',
      mode: 'KEA, department by department',
      detail:
        'Each department’s posts are notified in the residual and Kalyana Karnataka cadres with their own roster. Application and fee through KEA’s recruitment portal, ₹750 or ₹500 or ₹250 by category, within a window of about a fortnight that has been extended in recent rounds.',
    },
    {
      name: 'Kannada language test',
      mode: '150 marks, 50 to pass, not counted',
      detail:
        'For candidates not exempt — SSLC Kannada as a first or second language, Kannada medium, or a previous pass exempts. KEA holds a common test for several recruitments at once; the August 2026 one was 100 questions at 1.5 marks with no negative marking.',
    },
    {
      name: 'Paper 1 and Paper 2',
      mode: '100 and 100, two hours each, OMR',
      detail:
        'General knowledge, then general Kannada, general English and computer knowledge. A quarter mark off per wrong answer and for a question with more than one option shaded; 35 per cent of the total to qualify.',
    },
    {
      name: 'Score list and select list',
      mode: 'Percentage of marks; no interview',
      detail:
        'KEA publishes the key, the objections window, and a final score list; the department or board prepares the select list by reservation from it.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No first or second division assistant application is open. KEA’s own office round of 19 May 2026 closed on 3 June. KEA’s note of 31 August 2026 announces the multi-department round — 2,421 degree-level posts, of which the first division assistant lines include rural development 148, commercial taxes 66, forest 62 and agriculture 61, and 2,062 PUC-level posts including second division assistants for commercial taxes 590, rural development 309 and forest 70 — with notification in September and examinations in November and December 2026, and Paper 1 and Paper 2 under the 2021 rules. The figures are marked subject to change, and the notifications had not appeared on KEA’s residual or Kalyana Karnataka pages at the date checked. The commission’s notifications page carries nothing for either cadre after 2020.`,
    },
    {
      type: 'table',
      caption: 'Recent and pending rounds.',
      head: ['Round', 'Posts', 'Applications', 'Position at 11 September 2026'],
      rows: [
        ['KEA — departments, boards and corporations', '2,421 degree-level and 2,062 PUC-level non-technical, residual and Kalyana Karnataka together', 'To be notified in September 2026', 'Announced 31 August; examinations November to December'],
        ['KEA — its own office', '2 FDA, 4 SDA', '20 May to 3 June 2026', 'Closed; under process'],
        ['KPSC — SDA 2019-20', '1,122 residual, 201 Kalyana Karnataka after addendum', '3 March to 2 April 2020', 'Final list January 2023; second additional list of 134 posts, 25 March 2025'],
        ['KPSC — FDA 2019-20', '1,008 residual, 153 Kalyana Karnataka after two addenda', '6 February to 6 March 2020', 'Competitive paper 28 February 2021; additional select list 5 December 2023'],
      ],
    },
    {
      type: 'links',
      title: 'Check the recruiting bodies directly',
      items: [
        { label: 'KEA — note of 31 August 2026 on the coming round', href: KA_FDA_SRC.keaUpcomingEn },
        { label: 'KEA — various departments 2026, residual cadre', href: KA_FDA_SRC.keaVd2026 },
        { label: 'KEA — various departments 2026, Kalyana Karnataka', href: KA_FDA_SRC.keaVdKk2026 },
        { label: 'KEA — office FDA and SDA notification, 19 May 2026', href: KA_FDA_SRC.keaOffice2026Page },
        { label: 'KPSC notifications', href: KPSC.notifications },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From KEA’s notification of 19 May 2026, which the September round is expected to follow. Age on the closing date.',
      head: ['Requirement', 'FDA', 'SDA'],
      rows: [
        ['Qualification', 'A degree from a university established by law', 'Two-year PUC or an equivalent — CBSE or ICSE class 12, NIOS, a two-year ITI or JOC, or a three-year diploma under the 2021 orders'],
        ['Age', '18 to 40 for the general category, 43 for 2A, 2B, 3A and 3B, 45 for SC, ST and Category I, including the one-time five-year relaxation of 29 January 2026', 'As FDA'],
        ['Further relaxation', 'In-service state employees up to ten years; ex-servicemen service plus three; widows ten; and the other heads the 2020 notifications list', 'As FDA'],
        ['Pay', '₹44,425 to ₹83,700', '₹34,100 to ₹67,600'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees.',
      head: ['Round', 'General, 2A, 2B, 3A, 3B', 'SC, ST, Category I and others', 'PwD'],
      rows: [
        ['KEA, 2026', '₹750 — ₹500 fee and ₹250 processing', '₹500 — also ex-servicemen and third-gender candidates', '₹250'],
        ['KPSC, 2020', '₹600; ₹300 for the OBC categories; ₹50 ex-servicemen', 'Exempt', 'Exempt — plus a ₹35 processing charge for all'],
      ],
    },
    {
      type: 'list',
      title: 'The Kannada test and its exemptions',
      items: [
        { text: 'Exempt', note: 'Kannada as a first or second language at SSLC or a higher examination; schooling in Kannada medium; a previous pass in the commission’s or KEA’s test. The 2020 notifications added that third-language Kannada at SSLC does not exempt.' },
        { text: 'Not exempt', note: '150 marks at SSLC first-language standard with 50 to pass; the papers of a candidate below 50 are not evaluated.' },
        { text: 'Not counted', note: 'the test is a gate, not a score.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'KEA’s scheme under the 2021 rules, from the notification of 19 May 2026.',
      head: ['Paper', 'Content', 'Questions and marks', 'Time', 'Rule'],
      rows: [
        ['Kannada language test', 'SSLC first-language standard', '150', '—', '50 to pass; not counted; exempt as above'],
        ['Paper 1', 'General knowledge', '100 for 100', '2 hours', 'Objective, OMR, bilingual'],
        ['Paper 2', 'General Kannada, general English, computer knowledge', '100 for 100', '2 hours', 'Objective, OMR, bilingual'],
        ['Negative marking', '—', '—', '—', '0.25 per wrong answer; more than one option shaded is wrong'],
        ['Qualifying', '—', '—', '—', '35 per cent of the total'],
      ],
    },
    {
      type: 'table',
      caption: 'The commission’s 2019-20 scheme, for the papers that exist.',
      head: ['Paper', 'Content', 'Marks', 'Time'],
      rows: [
        ['Paper 1 — compulsory Kannada', 'Descriptive, SSLC first-language standard; 50 to pass; not counted', '150', '1½ hours'],
        ['Paper 2 — general Kannada or general English', 'Objective; the candidate chose one at application and could not change', '100', '1½ hours'],
        ['Paper 3 — general knowledge', 'Objective', '100', '1½ hours'],
      ],
    },
    {
      type: 'note',
      title: 'What changed between the schemes',
      text: 'The commission’s 2019-20 scheme let a candidate choose Kannada or English for the language paper; KEA’s scheme under the 2021 rules puts both languages and computer knowledge into one paper. No negative-marking clause was found in the 2020 notification pages read; the 2021 scheme deducts a quarter mark. Neither scheme has a typing test or an interview.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against KEA’s office notification of 19 May 2026, its note of 31 August 2026 in English, and its 2026 recruitment pages; the commission’s four 2019-20 notifications, their addenda, the July 2021 corrigendum on the cancelled Kannada test, and the press notes on the 2023 and 2025 additional lists; and the commission’s Group C syllabus documents under the 2021 rules. The 2020 notifications are in non-Unicode Kannada fonts and their figures were read from rendered pages; the SDA residual total is corroborated by the 2025 press note, the Kalyana Karnataka totals rest on single readings.`,
    },
    {
      type: 'links',
      title: 'Official notifications and notes',
      items: [
        { label: 'KEA — office FDA and SDA notification, 19 May 2026', href: KA_FDA_SRC.keaOffice2026 },
        { label: 'KEA — note of 31 August 2026', href: KA_FDA_SRC.keaUpcomingEn },
        { label: 'KPSC — FDA 2019-20, residual cadre', href: KA_FDA_SRC.fda2019Rpc },
        { label: 'KPSC — FDA 2019-20, Kalyana Karnataka', href: KA_FDA_SRC.fda2019Hk },
        { label: 'KPSC — FDA second addendum, 15 January 2021', href: KA_FDA_SRC.fdaAddendum2 },
        { label: 'KPSC — FDA corrigendum on the cancelled Kannada test, 24 July 2021', href: KA_FDA_SRC.fdaKannadaCorrigendum },
        { label: 'KPSC — FDA additional select list press note, 5 December 2023', href: KA_FDA_SRC.fdaAdditionalList },
        { label: 'KPSC — SDA 2019-20, residual cadre', href: KA_FDA_SRC.sda2019Rpc },
        { label: 'KPSC — SDA 2019-20, Kalyana Karnataka', href: KA_FDA_SRC.sda2019Hk },
        { label: 'KPSC — SDA addendum, 14 May 2020', href: KA_FDA_SRC.sdaAddendum },
        { label: 'KPSC — SDA second additional list press note, 25 March 2025', href: KA_FDA_SRC.sdaSecondAdditional },
        { label: 'KPSC — Group C degree-level syllabus, 2021 rules', href: KA_GC_SRC.syllabusDegree },
        { label: 'KPSC — Group C below-degree syllabus, 2021 rules', href: KA_GC_SRC.syllabusBelowDegree },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Karnataka FDA and SDA syllabus — general knowledge for Paper 1 and Kannada, English and computer knowledge for Paper 2, at degree and PUC standard.',
      lead: [
        'The commission’s two syllabus sheets — degree-level and below-degree — set the papers; KEA’s notifications apply them.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper 1 — general knowledge, 100 marks',
              'Current affairs; general science; the Constitution; the history, geography and economy of Karnataka and India; social science; mental ability; and practical knowledge of daily life — at degree standard for FDA and PUC standard for SDA.',
            ],
            [
              'Paper 2 — general Kannada, about 35',
              'Grammar, vocabulary, comprehension and usage.',
            ],
            [
              'Paper 2 — general English, about 35',
              'Grammar, vocabulary, comprehension and usage.',
            ],
            [
              'Paper 2 — computer knowledge, about 30',
              'Computer basics, operating systems, office applications, the internet and e-governance.',
            ],
            [
              'Kannada language test',
              'SSLC first-language standard — reading, writing, grammar — 150 marks, 50 to pass.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Group C degree-level syllabus — FDA', href: KA_GC_SRC.syllabusDegree },
            { label: 'Group C below-degree syllabus — SDA', href: KA_GC_SRC.syllabusBelowDegree },
            { label: 'KEA notification of 19 May 2026 — scheme', href: KA_FDA_SRC.keaOffice2026 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Karnataka FDA and SDA exam pattern — the Kannada test, two 100-question papers in two hours each, 0.25 negative marking, 35 per cent, and no interview.',
      lead: [
        'Two hundred marks in two papers, and a Kannada gate before them.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Kannada test', '150 marks, 50 to pass; exempt for SSLC Kannada, Kannada medium or a previous pass; not counted.'],
            ['Paper 1', 'General knowledge, 100 questions, 100 marks, two hours.'],
            ['Paper 2', 'Kannada, English and computer knowledge, 100 questions, 100 marks, two hours.'],
            ['Negative marking', '0.25 per wrong answer; a multiply-shaded question is wrong.'],
            ['Qualifying and selection', '35 per cent of the total; percentage of marks in reservation order; no typing test, no interview.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Karnataka FDA and SDA previous papers — the commission’s 2019 and 2011 papers by code, the Group C non-technical papers, and KEA’s keys.',
      lead: [
        'The commission publishes the 2019 and 2011 first and second division assistant papers by code; KEA publishes keys and score lists.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'FDA and SDA 2019', note: 'codes 366, 367 and 368, 369, and 370 and 371 on the commission’s question-papers page — the general knowledge and language papers of the 2021 examinations.' },
            { text: 'FDA and SDA 2011', note: 'the Kannada language, general knowledge and general English papers.' },
            { text: 'Group C non-technical', note: 'Paper 1 general knowledge as code 471 and Paper 2 as 472 — the closest model for the 2021-rules Paper 2 with its computer section.' },
            { text: 'Compulsory Kannada', note: 'several papers on the same page, for candidates not exempt.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'KPSC question papers page', href: KPSC.questionPapers },
            { label: 'FDA and SDA 2019 — paper code 366', href: KA_FDA_SRC.paper366 },
            { label: 'KPSC key answers', href: KA_KAS_SRC.keys },
            { label: 'KEA question papers 2026', href: KA_TECH_SRC.keaQp2026 },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Karnataka FDA and SDA mock tests — two 100-question papers in two hours each, scored at 0.25 off, with the Kannada test practised separately.',
      lead: [
        'Two sittings of two hours, scored KEA’s way.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine to November',
          items: [
            { title: 'Paper 1 — general knowledge, two hours', text: 'From the 2019 papers and the Group C code 471 paper. A quarter off per wrong answer; the 35 per cent floor is on the two papers together.' },
            { title: 'Paper 2 — language and computer, two hours', text: 'Kannada, English and computer knowledge in one sitting; the code 472 paper is the model.' },
            { title: 'The Kannada test', text: 'Only if not exempt — 150 marks, 50 to pass, from the compulsory Kannada papers. KEA’s August 2026 test was 100 questions at 1.5 marks without negative marking.' },
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
        'Karnataka FDA and SDA preparation — watching KEA for the September notification, choosing a department, the Kannada exemption, and two months to the papers.',
      lead: [
        'The round is announced for September and examined in November and December; the preparation window is now.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From announcement to select list',
          items: [
            { title: 'Watch KEA’s 2026 pages, not the commission’s', text: 'The residual and Kalyana Karnataka pages for the various-departments recruitment of 2026. The commission has not notified the cadres since 2020.' },
            { title: 'Choose the department and cadre', text: 'The posts are notified department by department; a graduate may apply for FDA and SDA posts, each with its own fee.' },
            { title: 'Settle the Kannada position', text: 'SSLC Kannada, Kannada medium or a previous pass exempts; otherwise the 150-mark test comes first and a fail stops the papers being marked.' },
            { title: 'Prepare both papers equally', text: 'Each is 100 of 200; the 35 per cent floor is on the total, and the cut-off is a percentage by category.' },
            { title: 'Keep the certificates current', text: 'Category and Kalyana Karnataka certificates obtained before the closing date; the application window has been a fortnight in recent rounds, with extensions.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Karnataka FDA and SDA study material — state textbooks and current affairs for general knowledge, grammar readers for both languages, a computer basics text.',
      lead: [
        'The general paper is set on the state’s textbooks and the year’s events; Paper 2 on school-level language and basic computing.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Paper 1 — general knowledge', 'Karnataka state textbooks for history, geography and civics; the Constitution; a year of current affairs; a general science reader; a reasoning workbook', 'Degree standard for FDA, PUC for SDA.'],
            ['Paper 2 — Kannada and English', 'School-level grammar and comprehension in each', 'About 70 of 100.'],
            ['Paper 2 — computer knowledge', 'A basic computer applications text', 'About 30 marks.'],
            ['Kannada test', 'An SSLC first-language reader', 'Only for those not exempt.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'KPSC Group C — the commission’s other Group C posts', to: '/government-exams/state/karnataka/kpsc-group-c/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the next Karnataka FDA and SDA recruitment?',
      a: 'KEA announced on 31 August 2026 that notifications for 2,421 degree-level and 2,062 PUC-level non-technical posts across the departments — including hundreds of first and second division assistants — will be issued in September 2026, with examinations in November and December. The notifications had not appeared on KEA’s pages at 11 September, and the figures are marked subject to change.',
    },
    {
      q: 'Does KPSC still recruit FDA and SDA?',
      a: 'Not since 2020. The commission’s last first division assistant notifications were dated 31 January 2020 and its last second division assistant notifications 29 February 2020; their select lists ran to December 2023 and March 2025. Since 2024 KEA has recruited the cadres for departments, boards and corporations, and claims of a KPSC FDA or SDA round in 2025 or 2026 refer to KEA drives.',
    },
    {
      q: 'What is the Karnataka FDA and SDA exam pattern?',
      a: 'Under KEA’s scheme of the 2021 rules: a Kannada language test of 150 marks with 50 to pass, not counted, for candidates not exempt; then Paper 1, general knowledge, and Paper 2, general Kannada, general English and computer knowledge — 100 questions and 100 marks each in two hours, offline on OMR sheets, bilingual — with 0.25 deducted per wrong answer and 35 per cent of the total to qualify. No typing test and no interview.',
    },
    {
      q: 'What is the qualification for FDA and SDA in Karnataka?',
      a: 'A degree from a university established by law for first division assistant; two-year PUC or an equivalent — CBSE or ICSE class 12, NIOS, a two-year ITI or JOC, or a three-year diploma — for second division assistant. Age 18 to 40 for the general category, 43 for 2A, 2B, 3A and 3B and 45 for SC, ST and Category I with the 2026 relaxation, on the closing date.',
    },
    {
      q: 'Is the Kannada test compulsory for FDA and SDA?',
      a: 'Yes, unless exempt — and exemption is broad: Kannada as a first or second language at SSLC or a higher examination, schooling in Kannada medium, or a previous pass in the commission’s or KEA’s test. Third-language Kannada at SSLC does not exempt. For those who sit it, 150 marks at SSLC first-language standard with 50 to pass; the marks are not counted.',
    },
    {
      q: 'What is the fee for Karnataka FDA and SDA?',
      a: 'In KEA’s 2026 notification, ₹750 for the general category and the 2A, 2B, 3A and 3B categories — ₹500 fee and ₹250 processing — ₹500 for SC, ST, Category I, ex-servicemen and third-gender candidates, and ₹250 for PwD. The commission’s 2020 rounds charged ₹600 and ₹300 with a ₹35 processing charge for all.',
    },
    {
      q: 'What is the pay for FDA and SDA in Karnataka?',
      a: 'On the 2024 revised scale, ₹44,425 to ₹83,700 for first division assistant and ₹34,100 to ₹67,600 for second division assistant, as KEA’s 2026 notification states. The 2020 commission notifications carried ₹27,650 to ₹52,650 and ₹21,400 to ₹42,000 on the earlier scale.',
    },
    {
      q: 'Is there negative marking in Karnataka FDA and SDA?',
      a: 'In KEA’s scheme, 0.25 per wrong answer, and a question with more than one option shaded is treated as wrong. No negative-marking clause was found in the commission’s 2020 notification pages read.',
    },
  ],
}

/* ── Village Administrative Officer ─────────────────────────────
   The post the hub calls Village Accountant is now the Village
   Administrative Officer — a district Group C post of the revenue
   department, recruited by each deputy commissioner on a state-wide
   examination KEA conducts. The 2026 round of 572 posts closed on
   20 August and is examined on 4 October. */
const KA_VAO_SRC = {
  rpcPage: 'https://cetonline.karnataka.gov.in/kea/vaorpc2026',
  kkPage: 'https://cetonline.karnataka.gov.in/kea/vaokk2026',
  rpcNotification: 'https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/vao_rpc_notification_10072026kannada.pdf',
  kkNotification: 'https://cetonline.karnataka.gov.in/keawebentry456/vaokk2026/vao_kk_notification_10072026kannada.pdf',
  rpcRoster: 'https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/vao_rpc_postclasification_10072026kannada.pdf',
  kkRoster: 'https://cetonline.karnataka.gov.in/keawebentry456/vaokk2026/vao_kk_postclasification_10072026kannada.pdf',
  extension1: 'https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/VAO_NOTI_29072026kannada.pdf',
  extension2: 'https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/vaorpc_06082026kannada.pdf',
  feeExtension: 'https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/VAO_Payment%20Extension_RPCkannada.pdf',
  diplomaClarification: 'https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/VAO_RPC_NOTI_19082026_organizedkannada.pdf',
  examCalendar: 'https://cetonline.karnataka.gov.in/keawebentry456/vaorpc2026/KEA_Exam_Calender_2026_15082026kannada.pdf',
  kannadaTestNote: 'https://cetonline.karnataka.gov.in/keawebentry456/apcrpc/CAR_KSLSA_KREIS_LS_VAO_KSRP_11082026english.pdf',
  kannadaScoreNote: 'https://cetonline.karnataka.gov.in/keawebentry456/cpcrpc2026/KANNADA_REC_NOTE_02092026kannada.pdf',
  kannadaScoreList: 'https://cetonline.karnataka.gov.in/keawebentry456/cpcrpc2026/Final_Kannada_Score_List_2026kannada.pdf',
  notification2024: 'https://cetonline.karnataka.gov.in/keawebentry456/vacrec24/gazette_notification_VAkannada.pdf',
  page2024: 'https://cetonline.karnataka.gov.in/kea/vacrec24.aspx',
  finalScore2024: 'https://cetonline.karnataka.gov.in/keawebentry456/vacrec24/VAO_NOTE_FINAL_SCORE_LIST_12122024kannada.pdf',
  key2024Paper1: 'https://cetonline.karnataka.gov.in/keawebentry456/vacrec24/p1kannada.pdf',
  hassan2024: 'https://hassan.nic.in/en/vao-recruitment-2024/',
}

const KA_VAO = {
  slug: 'village-accountant',
  path: '/government-exams/state/karnataka/village-accountant/',
  name: 'Karnataka Village Administrative Officer',
  fullName: 'Village Administrative Officer (formerly Village Accountant) — revenue department, district cadre',
  authority: 'District deputy commissioners, on a common examination conducted by the Karnataka Examinations Authority',
  official: 'cetonline.karnataka.gov.in/kea',
  seoTitle: 'Karnataka VAO 2026: 572 Posts, Exam 4 October, Pattern, Districts',
  metaDescription:
    'Karnataka VAO 2026 — 572 posts by district, papers on 4 and 25 October. The two 100-mark papers, 0.25 negative marking, PUC eligibility, fees, district lists.',
  lead: [
    'The Village Administrative Officer — the post the state called Village Accountant until the cadre was renamed — is the revenue department’s officer in the village: the keeper of land records, the first signature on a caste or income certificate, the officer who reports a crop loss. It is a district Group C post, recruited by each district’s deputy commissioner and confined to that district, on a single state-wide examination the Karnataka Examinations Authority conducts and then breaks into district merit lists.',
    'The 2026 round is the second under this arrangement. Two notifications of 10 July 2026 offer 505 posts across the residual-cadre districts and 67 in Kalaburagi, Bidar and Raichur under Article 371J — 572 in all, after the 1,000 of 2024. Applications closed on 20 August after two extensions and fees on 26 August; the Kannada language test was held on 22 August with its final score list on 2 September; and the two papers are on 4 October for the residual cadre and 25 October for Kalyana Karnataka. A candidate applies to one district and competes only there.',
  ],
  quickFacts: [
    ['Recruiting authority', 'Each district’s deputy commissioner; KEA conducts the examination and sends district merit lists to government'],
    ['Posts, 2026', '572 — 505 residual cadre by district; 67 Kalyana Karnataka: Kalaburagi 40, Bidar 17, Raichur 10'],
    ['Status', 'Applications closed 20 August 2026; Kannada test done; papers 4 October (residual) and 25 October (Kalyana Karnataka)'],
    ['Scheme', 'Kannada test 150 with 50 to pass; Paper 1 general knowledge 100; Paper 2 Kannada, English and computer 100; two hours each; 0.25 off per wrong answer; 35 per cent'],
    ['Eligibility', 'PUC or equivalent; 18 to 40, 43 or 45 by category with the 2026 relaxation'],
    ['Pay and fee', '₹34,100 to ₹67,600; ₹750, ₹500 or ₹250 by category'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The arrangement is set out in the notification’s own words: the deputy commissioner is the appointing authority, KEA conducts the competitive examination and forwards district-wise merit lists to government, which passes them to the deputy commissioners, who complete the recruitment. In the 2024 round Hassan district published its one-to-three provisional list on 23 December 2024, its one-to-one list on 15 January 2025 and its final list on 27 January — the sequence every district follows, on its own website, after KEA’s final score list.',
    },
    {
      type: 'p',
      text: 'The 2026 posts are distributed by district in the residual notification — Belagavi 61, Chikkaballapura 39, Vijayapura 34, down to Bengaluru Urban 3 — with the category roster for each in a separate classification document, and the three Kalyana Karnataka districts in their own notification. The candidate chooses one district at application and cannot compete elsewhere; the choice is the first strategic decision, because the cut-off is the district’s, not the state’s.',
    },
    {
      type: 'list',
      title: 'What the notification settles',
      items: [
        { text: 'A Karnataka-weighted general paper', note: 'Paper 1 lists current affairs, general science and the Constitution, and then the state’s history and geography, state and district administration, rural development and cooperatives, the Karnataka economy and the environment — the syllabus of a revenue officer, not a generalist.' },
        { text: 'The Kannada test is common and earlier', note: 'KEA held one test on 22 August 2026 for the VAO, police constable, surveyor, residential-school teacher and legal services applicants together — 100 questions at 1.5 marks, no negative marking, 50 to pass — and published the final score list on 2 September.' },
        { text: 'Horizontal reservations', note: 'for Kannada-medium, rural and project-displaced candidates, alongside the vertical roster; the percentages are in the classification documents.' },
        { text: 'No interview, no typing test', note: 'KEA’s score list, with 50 in Kannada and 35 per cent in the papers, is the merit; the district’s lists follow it by reservation.' },
      ],
    },
    {
      type: 'note',
      title: 'The name on the hub and the name on the notification',
      text: 'This site’s Karnataka hub lists the post as Village Accountant, the name it carried for decades and the one most candidates search for. The 2024 and 2026 notifications call it Village Administrative Officer — ಗ್ರಾಮ ಆಡಳಿತ ಅಧಿಕಾರಿ — and the revenue department’s own site carries no recruitment notice; KEA’s pages are the source.',
    },
  ],
  stages: [
    {
      name: 'Application to one district',
      mode: 'KEA portal; about three weeks, extended in 2026',
      detail:
        'The residual and Kalyana Karnataka notifications are separate, and a candidate applies to one district under one of them. ₹750 for the general and OBC categories, ₹500 for SC, ST, Category I, ex-servicemen and third-gender candidates, ₹250 for PwD.',
    },
    {
      name: 'Kannada language test',
      mode: '150 marks, 50 to pass, not counted',
      detail:
        'For candidates not exempt — SSLC Kannada as a first or second language, Kannada medium, or a previous pass exempts. Held before the papers as a common test; the 2026 one on 22 August, final list 2 September.',
    },
    {
      name: 'Paper 1 and Paper 2',
      mode: '100 and 100, two hours each, OMR, one day',
      detail:
        'General knowledge in the morning, Kannada, English and computer knowledge in the afternoon. A quarter mark off per wrong answer and for a multiply-shaded question; 35 per cent of the aggregate to qualify.',
    },
    {
      name: 'KEA score list, then the district lists',
      mode: 'One to three, verification, one to one, final',
      detail:
        'KEA publishes the key, the objections and a final score list and sends district merit lists to government. Each deputy commissioner publishes a one-to-three provisional list, verifies documents, publishes a one-to-one list with an additional list, and then the final list.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The 2026 round is between its Kannada test and its papers. Notified on 10 July 2026, it took applications from 11 July with a closing date of 30 July, extended on 29 July to 7 August and on 6 August to 20 August, with fee payment finally to 26 August at four in the afternoon; a clarification of 19 August admitted holders of the government tool room diploma. The Kannada language test was held on 22 August with the key the same day, a revised key on 25 August and the final score list on 2 September. Paper 1 is on 4 October 2026 from 10.30 to 12.30 and Paper 2 from 2.30 to 4.30 for the residual cadre; the Kalyana Karnataka papers are on 25 October by KEA’s examination calendar of 15 August. No litigation notice appears on either KEA page.`,
    },
    {
      type: 'table',
      caption: 'The 2026 round, from the notifications and KEA’s notes.',
      head: ['Event', 'Residual cadre — 505 posts', 'Kalyana Karnataka — 67 posts'],
      rows: [
        ['Notification', 'ED/KEA/26/NE.VI./2026, 10 July 2026', 'ED/KEA/27/NE.VI./2026, 10 July 2026'],
        ['Applications', '11 July to 30 July, extended to 7 August and then 20 August 2026', 'As residual'],
        ['Fee payment', 'To 26 August 2026, 4 pm, after extensions', 'As residual'],
        ['Kannada language test', '22 August 2026, 3 to 5 pm; final score list 2 September', 'As residual'],
        ['Paper 1 and Paper 2', '4 October 2026 — 10.30 to 12.30 and 2.30 to 4.30', '25 October 2026, by the examination calendar'],
        ['District lists', 'After KEA’s final score list, district by district', 'Kalaburagi, Bidar and Raichur'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2024 round, for the sequence.',
      head: ['Event', 'Date'],
      rows: [
        ['Notification — 1,000 posts, ₹21,400 to ₹42,000, age 18 to 35, 38 or 40', '20 February 2024'],
        ['Kannada language tests', '29 September and 26 October 2024'],
        ['Paper 1 and Paper 2', '27 October 2024'],
        ['Provisional score list', '27 November 2024'],
        ['Final score list — 50 in Kannada and 35 per cent in the papers — sent to districts', '12 December 2024'],
        ['Hassan district — one-to-three list, one-to-one list, final list', '23 December 2024, 15 January and 27 January 2025'],
      ],
    },
    {
      type: 'links',
      title: 'Check KEA and the districts directly',
      items: [
        { label: 'KEA — VAO 2026, residual cadre', href: KA_VAO_SRC.rpcPage },
        { label: 'KEA — VAO 2026, Kalyana Karnataka', href: KA_VAO_SRC.kkPage },
        { label: 'KEA — examination calendar, 15 August 2026', href: KA_VAO_SRC.examCalendar },
        { label: 'KEA — final Kannada score list, 2 September 2026', href: KA_VAO_SRC.kannadaScoreList },
        { label: 'Hassan district — the 2024 recruitment lists', href: KA_VAO_SRC.hassan2024 },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the residual-cadre notification of 10 July 2026. Age on the closing date.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Two-year PUC or an equivalent — CBSE or ICSE class 12, another state board, NIOS, a two-year ITI or JOC under the order of 6 August 2021, or a three-year diploma under the order of 30 September 2021; the government tool room diploma admitted by clarification of 19 August 2026.'],
        ['Age', '18 minimum; 40 for the general category, 43 for 2A, 2B, 3A and 3B, 45 for SC, ST and Category I, including the one-time five-year relaxation ordered on 29 January 2026.'],
        ['Further relaxation', 'In-service state employees, ex-servicemen, NCC instructors, widows, released bonded labourers and the other heads the notification lists.'],
        ['District', 'One district per candidate, under the residual or the Kalyana Karnataka notification; a local-cadre candidate needs the sub-division certificate.'],
        ['Pay', '₹34,100 to ₹67,600, under the new pension scheme.'],
      ],
    },
    {
      type: 'table',
      caption: 'Fees, through KEA’s portal.',
      head: ['Category', 'Fee'],
      rows: [
        ['General, 2A, 2B, 3A, 3B', '₹750 — ₹500 fee and ₹250 processing'],
        ['SC, ST, Category I, ex-servicemen, third-gender', '₹500 — ₹250 and ₹250'],
        ['PwD', '₹250'],
      ],
    },
    {
      type: 'list',
      title: 'The Kannada test',
      items: [
        { text: 'Exempt', note: 'Kannada as a first or second language at SSLC, schooling in Kannada medium, or a previous pass in the commission’s or KEA’s test.' },
        { text: 'Not exempt', note: '150 marks, 50 to pass, qualifying only. The 2026 common test was 100 questions at 1.5 marks with no negative marking.' },
        { text: 'The score list is public', note: 'KEA published the final Kannada score list for all five recruitments together on 2 September 2026.' },
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'From paragraphs 10 to 12 of the 2026 notification.',
      head: ['Paper', 'Content', 'Questions and marks', 'Time', 'Rule'],
      rows: [
        ['Kannada language test', 'SSLC first-language standard', '150', '—', '50 to pass; qualifying only'],
        ['Paper 1 — general knowledge', 'Current affairs; general science; the Constitution; Karnataka history and geography; state and district administration; rural development and cooperatives; the Karnataka economy; environment', '100 for 100', '2 hours', 'Objective, OMR, bilingual'],
        ['Paper 2', 'General Kannada, general English, computer knowledge', '100 for 100', '2 hours', 'Objective, OMR, bilingual'],
        ['Negative marking', '—', '—', '—', '0.25 per wrong answer and per multiply-shaded answer'],
        ['Qualifying', '—', '—', '—', '35 per cent of the aggregate'],
      ],
    },
    {
      type: 'note',
      title: 'The merit is district-wise',
      text: 'KEA’s final score list — candidates with 50 in Kannada where required and 35 per cent in the papers — is broken into district merit lists, and each deputy commissioner selects from the list for that district alone. A score that ranks in the top three per post in one district may not in another. The 2024 final list was published on 12 December 2024 and handed to the districts; the district lists followed within six weeks.',
    },
    {
      type: 'list',
      title: 'What the 2024 round settled',
      items: [
        { text: 'Only keys are published', note: 'KEA’s 2024 page carries the provisional and final keys for both papers; the question booklets are not posted.' },
        { text: 'One to three, then one to one', note: 'the district calls three candidates per post for document verification, publishes a one-to-one list with an additional list, then the final list.' },
        { text: 'The Kannada test may be held twice', note: 'in 2024 on 29 September and 26 October, the second a day before the papers; in 2026 once, on 22 August.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the residual and Kalyana Karnataka notifications of 10 July 2026 and their classification documents, KEA’s extension and clarification notes of 29 July, 6, 19 and 25 August, the examination calendar of 15 August, the Kannada test note of 11 August and score note of 2 September, the 2024 notification and final score-list note, and Hassan district’s 2024 recruitment page. The notifications are in Kannada and the district figures and dates were read from them; the category rosters and the horizontal-reservation percentages were not transcribed. No litigation appears on KEA’s pages for either round.`,
    },
    {
      type: 'links',
      title: 'Official notifications and notes',
      items: [
        { label: 'VAO 2026 — residual cadre notification, 10 July 2026', href: KA_VAO_SRC.rpcNotification },
        { label: 'VAO 2026 — Kalyana Karnataka notification, 10 July 2026', href: KA_VAO_SRC.kkNotification },
        { label: 'VAO 2026 — residual cadre roster by district', href: KA_VAO_SRC.rpcRoster },
        { label: 'VAO 2026 — Kalyana Karnataka roster', href: KA_VAO_SRC.kkRoster },
        { label: 'Extension of 29 July 2026', href: KA_VAO_SRC.extension1 },
        { label: 'Extension of 6 August 2026', href: KA_VAO_SRC.extension2 },
        { label: 'Fee payment extension, 25 August 2026', href: KA_VAO_SRC.feeExtension },
        { label: 'Diploma clarification, 19 August 2026', href: KA_VAO_SRC.diplomaClarification },
        { label: 'Common Kannada test note, 11 August 2026', href: KA_VAO_SRC.kannadaTestNote },
        { label: 'Kannada score note, 2 September 2026', href: KA_VAO_SRC.kannadaScoreNote },
        { label: 'VAO 2024 — notification, 20 February 2024', href: KA_VAO_SRC.notification2024 },
        { label: 'VAO 2024 — final score list note, 12 December 2024', href: KA_VAO_SRC.finalScore2024 },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Karnataka VAO syllabus — general knowledge with state and district administration, rural development and the state economy, and the language and computer paper.',
      lead: [
        'The syllabus is paragraph 11 of the notification, and it is written for the post.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Paper 1 — general knowledge, 100 marks',
              'Current affairs; general science; the Constitution; the history and geography of Karnataka; state and district administration; rural development, panchayat raj and cooperatives; the Karnataka economy; environment.',
            ],
            [
              'Paper 2 — general Kannada',
              'Grammar, vocabulary, comprehension and usage.',
            ],
            [
              'Paper 2 — general English',
              'Grammar, vocabulary, comprehension and usage.',
            ],
            [
              'Paper 2 — computer knowledge',
              'Computer basics, office applications, the internet and e-governance — the tools of the land-records and certificate systems.',
            ],
            [
              'Kannada language test',
              'SSLC first-language standard, 150 marks, 50 to pass.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'VAO 2026 notification — paragraph 11', href: KA_VAO_SRC.rpcNotification },
            { label: 'Group C below-degree syllabus, 2021 rules', href: KA_GC_SRC.syllabusBelowDegree },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Karnataka VAO exam pattern — the Kannada test, two 100-question papers in one day, 0.25 negative marking, 35 per cent, and district-wise merit.',
      lead: [
        'Two hundred marks in one day, and a district list at the end of it.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Kannada test', '150 marks, 50 to pass; exempt for SSLC Kannada, Kannada medium or a previous pass; not counted.'],
            ['Paper 1', 'General knowledge, 100 questions, 100 marks, 10.30 to 12.30.'],
            ['Paper 2', 'Kannada, English and computer knowledge, 100 questions, 100 marks, 2.30 to 4.30.'],
            ['Negative marking', '0.25 per wrong answer; a multiply-shaded question is wrong.'],
            ['Qualifying and merit', '35 per cent of the aggregate; district-wise merit lists; one to three for verification, then one to one; no interview.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Karnataka VAO previous papers — KEA’s 2024 keys for both papers, and the commission’s Group C below-degree papers as the closest model.',
      lead: [
        'KEA publishes keys, not booklets, for the 2024 papers; the commission’s below-degree Group C papers are the same shape.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'VAO 2024 — keys', note: 'the provisional and final keys for Paper 1 and Paper 2 of 27 October 2024, on KEA’s 2024 page.' },
            { text: 'KPSC Group C below-degree', note: 'the general studies paper as code 185 and the general knowledge and Paper 2 pairs as codes 471 and 472, on the commission’s question-papers page.' },
            { text: 'Compulsory Kannada', note: 'the commission’s published Kannada papers, for candidates not exempt.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'KEA — VAO 2024 page with keys', href: KA_VAO_SRC.page2024 },
            { label: 'VAO 2024 — Paper 1 final key', href: KA_VAO_SRC.key2024Paper1 },
            { label: 'KPSC question papers page', href: KPSC.questionPapers },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Karnataka VAO mock tests — a morning and afternoon paper of 100 questions on one day, scored at 0.25 off, three weeks before 4 October.',
      lead: [
        'Rehearse the day: two hours in the morning, two in the afternoon, scored KEA’s way.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine to 4 October',
          items: [
            { title: 'Paper 1 — 10.30 to 12.30', text: 'General knowledge with the Karnataka heads weighted — administration, panchayat raj, cooperatives, the state economy. A quarter off per wrong answer.' },
            { title: 'Paper 2 — 2.30 to 4.30', text: 'Kannada, English and computer knowledge in one sitting. The 35 per cent floor is on the two papers together.' },
            { title: 'Score against your district', text: 'The merit list is the district’s; three candidates per post are called. Compare mock scores with the 2024 district cut-offs where a district published them.' },
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
        'Karnataka VAO preparation — the three weeks to 4 October, the Karnataka-weighted general paper, and what follows KEA’s score list at the district.',
      lead: [
        'The application is closed and the Kannada gate is passed; what remains is the paper and the district.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From now to the district list',
          items: [
            { title: 'Check the Kannada score list', text: 'Published 2 September 2026 for all five recruitments; a candidate not exempt needs 50 on it to have the papers evaluated.' },
            { title: 'Download the admission ticket from KEA', text: 'For 4 October, residual cadre; 25 October, Kalyana Karnataka. Two sessions, one centre.' },
            { title: 'Prepare Paper 1 for the post', text: 'The syllabus names state and district administration, rural development and cooperatives and the Karnataka economy; the revenue department’s structure and the panchayat raj Act are worth a week.' },
            { title: 'Do not neglect Paper 2', text: 'Half the marks; the computer section is the least prepared by most candidates.' },
            { title: 'Watch the district website after the score list', text: 'The one-to-three list, verification dates, the one-to-one list and the final list are published by the deputy commissioner, as Hassan did within six weeks in 2024–25.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Karnataka VAO study material — state textbooks, the revenue and panchayat raj structure, the state economic survey, and language and computer readers.',
      lead: [
        'The general paper is written for a revenue officer; read the state’s own administration.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By head.',
          head: ['Head', 'What to read', 'Note'],
          rows: [
            ['Karnataka history and geography', 'The state textbooks for classes 8 to 10', 'Districts, rivers, crops, dynasties.'],
            ['State and district administration', 'The revenue department’s structure from the deputy commissioner to the village; the Land Revenue Act in outline', 'The post’s own subject.'],
            ['Rural development and cooperatives', 'The Panchayat Raj Act’s three tiers; the cooperative structure', 'Named in the syllabus.'],
            ['Karnataka economy and environment', 'The state economic survey; an environment primer', 'A year of state current affairs.'],
            ['Paper 2', 'School-level Kannada and English grammar; a basic computer applications text', 'Half the marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Karnataka FDA and SDA posts', to: '/government-exams/state/karnataka/fda-and-sda-posts/' },
            { label: 'Karnataka government exams', to: '/government-exams/state/karnataka/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the Karnataka VAO exam 2026?',
      a: 'On 4 October 2026 for the residual cadre — Paper 1 from 10.30 to 12.30 and Paper 2 from 2.30 to 4.30 — and on 25 October for the Kalyana Karnataka cadre, by KEA’s examination calendar. The Kannada language test was held on 22 August with the final score list on 2 September. Applications closed on 20 August after two extensions.',
    },
    {
      q: 'How many VAO posts are there in Karnataka 2026?',
      a: '572 — 505 across the residual-cadre districts under the notification of 10 July 2026, including Belagavi 61, Chikkaballapura 39 and Vijayapura 34, and 67 in the Kalyana Karnataka cadre: Kalaburagi 40, Bidar 17 and Raichur 10. The 2024 round had 1,000.',
    },
    {
      q: 'Who recruits Village Administrative Officers in Karnataka?',
      a: 'Each district’s deputy commissioner is the appointing authority. KEA conducts a common competitive examination and sends district-wise merit lists to government, which forwards them to the deputy commissioners, who publish a one-to-three list, verify documents, publish a one-to-one list and then the final list on the district website. A candidate applies to one district only.',
    },
    {
      q: 'What is the Karnataka VAO exam pattern?',
      a: 'A Kannada language test of 150 marks with 50 to pass, qualifying only, for candidates not exempt; then two objective papers of 100 questions and 100 marks in two hours each on one day — Paper 1 general knowledge, with the state’s history, geography, administration, rural development and economy named in the syllabus, and Paper 2 general Kannada, general English and computer knowledge. A quarter mark is deducted per wrong answer, 35 per cent of the aggregate is required, and the merit is district-wise. No interview.',
    },
    {
      q: 'What is the qualification and age for Karnataka VAO?',
      a: 'Two-year PUC or an equivalent — CBSE or ICSE class 12, NIOS, a two-year ITI or JOC, or a three-year diploma, with the government tool room diploma admitted by clarification. Age 18 to 40 for the general category, 43 for 2A, 2B, 3A and 3B and 45 for SC, ST and Category I on the closing date, including the one-time five-year relaxation of January 2026.',
    },
    {
      q: 'Is the Kannada test compulsory for Karnataka VAO?',
      a: 'Yes, unless exempt — Kannada as a first or second language at SSLC, schooling in Kannada medium, or a previous pass in the commission’s or KEA’s test exempts. The 2026 test was held on 22 August as a common test for five recruitments, 100 questions at 1.5 marks with no negative marking, 50 to pass; the final score list is on KEA’s site.',
    },
    {
      q: 'What is the fee and pay for Karnataka VAO?',
      a: '₹750 for the general category and the 2A, 2B, 3A and 3B categories, ₹500 for SC, ST, Category I, ex-servicemen and third-gender candidates, and ₹250 for PwD. Pay ₹34,100 to ₹67,600 under the new pension scheme, up from ₹21,400 to ₹42,000 in the 2024 notification.',
    },
    {
      q: 'Is Village Accountant the same as Village Administrative Officer?',
      a: 'Yes. The post was called Village Accountant for decades and the cadre has been renamed Village Administrative Officer; the 2024 and 2026 notifications use the new name. The duties — land records, certificates, crop and revenue reporting at the village — are the same.',
    },
  ],
}

const karnataka = [KA_KAS, KA_GROUP_B, KA_GROUP_C, KA_FDA_SDA, KA_POLICE, KA_TEACHING, KA_TECHNICAL, KA_VAO, KA_DEPARTMENTAL]

export default karnataka
