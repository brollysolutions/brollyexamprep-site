/**
 * SSC exams — /government-exams/ssc/
 *
 * Six recruitment examinations run by the Staff Selection Commission, ordered
 * by the qualification they need: CGL and CPO want a degree, JE wants an
 * engineering diploma, CHSL wants class 12, GD and MTS want class 10.
 *
 * The thing that most often costs SSC candidates marks is not knowing which
 * paper punishes a guess and which does not — the negative marking differs
 * between these six exams, and between stages of the same exam. That is called
 * out explicitly on every pattern page rather than buried in a table.
 */

const ssc = [
  /* ══════════════════════════════════════════════════════════════
     SSC CGL
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ssc-cgl',
    path: '/government-exams/ssc/ssc-cgl/',
    name: 'SSC CGL',
    fullName: 'Staff Selection Commission Combined Graduate Level Examination',
    authority: 'Staff Selection Commission (SSC)',
    official: 'ssc.gov.in',
    seoTitle: 'SSC CGL Exam Pattern 2026: Tier 1 & Tier 2 Syllabus, Marks, Cut-off',
    metaDescription:
      'SSC CGL exam pattern and syllabus 2026 — Tier 1 and Tier 2 marks, time, sectional timers, negative marking, cut-offs, eligibility, dates and free mock tests.',
    heroTitle: 'SSC CGL Exam Pattern and Syllabus 2026: Tier 1, Tier 2 and Free Mock Tests',
    lead: [
      'SSC CGL is the largest graduate-level recruitment in the country, and the reason it attracts several million applicants is the post list: Assistant Section Officer in a central ministry, Inspector in Income Tax or CGST, Assistant Audit Officer under the CAG, Sub-Inspector in the CBI. One exam, one merit list, and the post you get depends on your rank and your preference order.',
      'It is also an exam with an unusually clear shape. Tier 1 is a 60-minute screening test that everybody sits; Tier 2 is where the merit list is actually built. Understanding that split is the single most useful thing a first-time candidate can do, because it changes what you practise and when.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Level', 'Graduate — a bachelor’s degree in any discipline as on the closing date'],
      ['Stages', 'Tier 1 (qualifying, 200 marks) → Tier 2 (merit, 390 + qualifying modules) → document verification'],
      ['2026 cycle', 'Notice 21 May 2026; about 12,256 tentative vacancies; Tier 1 tentatively August–September 2026'],
      ['Age', '18–27, 18–30, 20–30 or 18–32 depending on the post, as on 1 August 2026'],
      ['Fee', '₹100; nil for women, SC, ST, PwBD and ex-servicemen'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Combined Graduate Level examination fills Group B and Group C posts across central government ministries, departments and subordinate offices. A single written examination feeds all of them, so candidates are not applying to one job — they are entering one merit list and submitting a preference order over dozens of posts.',
      },
      {
        type: 'p',
        text: 'That structure has a practical consequence worth understanding early. The difference between an Assistant Section Officer posting and an Income Tax Inspector posting is a handful of marks in Tier 2, not a different exam or a different syllabus. Everyone studies the same material; the ranking is what separates outcomes.',
      },
      {
        type: 'list',
        title: 'Posts commonly filled through SSC CGL',
        items: [
          { text: 'Assistant Audit Officer / Assistant Accounts Officer', note: 'under the Comptroller and Auditor General; requires the additional finance and economics paper' },
          { text: 'Assistant Section Officer', note: 'in central secretariat ministries, the Intelligence Bureau, Railways and the Ministry of External Affairs' },
          { text: 'Inspector (Income Tax, CGST, Examiner, Preventive Officer)', note: 'in CBDT and CBIC field formations' },
          { text: 'Sub-Inspector in the CBI and the NIA', note: 'investigative posts with their own physical and medical requirements' },
          { text: 'Junior Statistical Officer', note: 'requires the statistics paper in Tier 2' },
          { text: 'Auditor, Accountant, Tax Assistant, Upper Division Clerk', note: 'Group C posts across audit offices, ministries and field offices' },
        ],
      },
      {
        type: 'p',
        text: 'Eligibility is a bachelor’s degree in any discipline from a recognised university. A few posts add conditions on top of that — Junior Statistical Officer expects statistics or mathematics at the twelfth or degree level, and Assistant Audit Officer carries a preference for commerce, economics or a chartered accountancy qualification. Age limits vary by post rather than being uniform across the exam, which is why the post-wise table in the notification matters more than any general summary.',
      },
      {
        type: 'note',
        title: 'Check the notification for your cycle',
        text: 'Age bands, post lists and the vacancy count change from one cycle to the next, and posts are occasionally added or withdrawn after the notification is published. Treat everything here as the durable shape of the exam and confirm the specifics against the current official notification on ssc.gov.in before you apply.',
      },
    ],
    stages: [
      {
        name: 'Tier 1 — Computer Based Examination',
        mode: 'Objective, 100 questions, 200 marks, 60 minutes',
        detail: 'Four sections of 25 questions for 50 marks each — General Intelligence and Reasoning, General Awareness, Quantitative Aptitude and English Comprehension — with a 15-minute sectional timer on each. Half a mark is deducted for a wrong answer. Tier 1 is qualifying: it decides who sits Tier 2 but its marks do not enter the final merit list.',
      },
      {
        name: 'Tier 2 — Paper 1 (all posts)',
        mode: 'Objective, two sessions on one day',
        detail: 'Session 1: Section 1 (Mathematical Abilities 30 questions + Reasoning 30 questions, 180 marks, one hour), Section 2 (English 45 + General Awareness 25, 210 marks, one hour) and Section 3 Module 1 (Computer Knowledge, 20 questions, 60 marks, 15 minutes, qualifying). Session 2: the Data Entry Speed Test of about 2,000 key depressions in 15 minutes, qualifying. One mark is deducted per wrong answer in Sections 1, 2 and 3.',
      },
      {
        name: 'Tier 2 — Paper 2 (Junior Statistical Officer) and Paper 3 (Assistant Audit / Accounts Officer)',
        mode: 'Objective, 100 questions, 200 marks, two hours each',
        detail: 'Paper 2 is Statistics; Paper 3 is General Studies (Finance and Economics). Only candidates who opted for those posts and clear the separate Tier 1 cut-off for them sit these papers. Half a mark is deducted per wrong answer.',
      },
      {
        name: 'Option-cum-preference form, final result and verification',
        mode: 'Online form, then offline verification',
        detail: 'After Tier 2 marks are published, candidates fill a post preference form; the final merit list allots posts by rank and preference. Document verification, and the physical and medical standards for posts such as Sub-Inspector in the CBI and NIA, Inspector (Examiner and Preventive Officer) and Inspector in the Narcotics Bureau, are handled by the user departments before appointment.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the SSC notice board. The notice for the Combined Graduate Level Examination 2026 was published on 21 May 2026 with about 12,256 tentative vacancies. Online applications were accepted from 21 May to 22 June 2026, and the window was reopened from 23 to 25 June 2026 for candidates who had been unable to complete registration on the new portal; the Commission received more than 28 lakh applications. The correction window ran from 29 June to 1 July 2026. The notice gives Tier 1 a tentative window of August–September 2026 and Tier 2 December 2026; the actual dates, exam-city intimation and admission certificates reach candidates only through the login on ssc.gov.in.',
      },
      {
        type: 'table',
        caption: 'Key dates of the SSC CGL 2026 cycle, from the notice of 21 May 2026 and the reopening notice of 23 June 2026.',
        head: ['Event', 'Date'],
        rows: [
          ['Notice published', '21 May 2026'],
          ['Online applications', '21 May – 22 June 2026, reopened 23–25 June 2026'],
          ['Last date for fee payment', '26 June 2026'],
          ['Application correction window', '29 June – 1 July 2026 (₹200 first correction, ₹500 second)'],
          ['Tier 1 (Computer Based Examination)', 'August–September 2026, tentative'],
          ['Tier 2 (Computer Based Examination)', 'December 2026, tentative'],
          ['Tentative vacancies', 'About 12,256, post-wise list on the Commission’s Tentative Vacancy page'],
        ],
      },
      {
        type: 'p',
        text: 'The 2025 cycle shows how the calendar actually runs. Tier 1 of CGL 2025 was held from 12 to 26 September 2025 with a re-examination on 14 October 2025 for affected centres; the Tier 1 result came on 18 December 2025, and for the general post list the cut-offs were 136.83 (UR), 130.37 (OBC), 127.42 (EWS), 114.97 (SC) and 106.37 (ST) out of 200, with the Junior Statistical Officer list closing at 153.46 for UR. Over 1.3 lakh candidates were shortlisted for Tier 2, which was held in January 2026 with the tentative key on 30 January; final vacancies were fixed at 15,118 on 6 March 2026, the option-cum-preference form ran in March, the first round of tentative allocation came on 8 April, and the final result on 14 May 2026 recommended 15,118 candidates.',
      },
      {
        type: 'note',
        title: 'What changed in the 2026 notice',
        text: 'Tier 1 now runs with a 15-minute sectional timer on each of the four sections instead of one open hour, so you can no longer bank time from reasoning and spend it on mathematics. Registration moved to the new One-Time Registration system with Aadhaar-based verification. Everything else — the Tier 2 structure, the negative marking rates and the qualifying computer and typing modules — carries forward from the 2025 scheme.',
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'Eligibility is judged on the closing date for applications, and in 2026 that is the date the reopened window closed. The Commission does not verify documents at the application stage, so a candidate who does not meet a condition can sit every tier and be rejected at verification a year later. Read the conditions for the specific posts you intend to opt for, not just the general ones.',
      },
      {
        type: 'list',
        title: 'Educational qualification as on the closing date',
        items: [
          {
            text: 'All posts except the two below',
            note: 'A bachelor’s degree in any discipline from a recognised university, or an equivalent qualification. Final-year students are eligible only if the degree is complete by the closing date.',
          },
          {
            text: 'Junior Statistical Officer',
            note: 'A bachelor’s degree in any subject with at least 60 per cent in Mathematics at the class 12 level, or a bachelor’s degree with Statistics as one of the subjects at degree level.',
          },
          {
            text: 'Assistant Audit Officer and Assistant Accounts Officer',
            note: 'A bachelor’s degree in any discipline. Chartered Accountancy, Cost and Management Accountancy, Company Secretaryship, a Master’s in Commerce, Business Studies, Business Administration (Finance), Business Economics or Economics are listed as desirable, not essential.',
          },
        ],
      },
      {
        type: 'table',
        caption: 'Age bands as on 1 August 2026. The post-wise table in the notice assigns every post to one of four bands; these are the common examples.',
        head: ['Age band', 'Posts in the band'],
        rows: [
          ['18–27 years', 'Auditor, Accountant and Accountant/Junior Accountant, Tax Assistant, Upper Division Clerk, Senior Secretariat Assistant and most other Group C posts'],
          ['18–30 years', 'Inspector (Income Tax, Central Excise/CGST, Examiner, Preventive Officer), Assistant Enforcement Officer, Assistant Audit Officer, Assistant Accounts Officer, Assistant Section Officer in most organisations'],
          ['20–30 years', 'Assistant Section Officer in the Central Secretariat Service, Intelligence Bureau and Ministry of External Affairs; Sub-Inspector in the CBI'],
          ['18–32 years', 'Junior Statistical Officer'],
        ],
      },
      {
        type: 'table',
        caption: 'Upper-age relaxation beyond the band, from the notice. Relaxations are cumulative within the rules — an OBC ex-serviceman gets both — and category is claimed at application and proved at verification.',
        head: ['Category', 'Relaxation'],
        rows: [
          ['SC and ST', '5 years'],
          ['OBC (non-creamy layer)', '3 years'],
          ['Persons with benchmark disabilities', '10 years (UR), 13 years (OBC), 15 years (SC/ST)'],
          ['Ex-servicemen', '3 years after deducting military service from actual age'],
          ['Defence personnel disabled in operations', '3 years (8 years for SC/ST)'],
          ['Central Government civilian employees with 3 years’ regular service', 'Up to 40 years (45 for SC/ST) for Group C posts'],
          ['Widows, divorced women and judicially separated women who have not remarried', 'Up to 35 years (40 for SC/ST) for Group C posts'],
        ],
      },
      {
        type: 'list',
        title: 'Other conditions',
        items: [
          {
            text: 'Nationality',
            note: 'Citizens of India, subjects of Nepal and Bhutan, and the categories of persons of Indian origin who have migrated to settle permanently, as listed in the notice, with an eligibility certificate where required.',
          },
          {
            text: 'Physical standards',
            note: 'Sub-Inspector in the CBI and NIA, Inspector (Examiner and Preventive Officer) in CBIC and Inspector in the Central Bureau of Narcotics carry height, chest and vision standards and a physical test, described in the notice’s annexures and conducted by the department after the final result.',
          },
          {
            text: 'Number of attempts',
            note: 'No limit; the age band for the post is the only ceiling.',
          },
          {
            text: 'Fee',
            note: '₹100, payable online by BHIM UPI, net banking or Visa, Mastercard, Maestro or RuPay cards. Women and candidates of the SC, ST, PwBD and ex-servicemen categories pay nothing.',
          },
        ],
      },
    ],
    procedure: {
      eyebrow: 'Application to appointment',
      heading: 'How to apply for SSC CGL 2026, what the tiers look like on the day, and how the post is allotted',
      intro: 'The whole process runs through one login on ssc.gov.in. These are the steps in the order they happen, with the fees and windows the 2026 notice specifies.',
      blocks: [
        {
          type: 'steps',
          title: 'The SSC CGL process from registration to result',
          items: [
            {
              title: 'One-Time Registration on ssc.gov.in',
              text: 'Create an OTR profile once on the Commission’s portal. Registration asks for Aadhaar-based verification, a mobile number and e-mail that remain with you for the whole cycle, and your basic educational and category details. The OTR number and password are what you log in with at every later stage — exam-city intimation, admit card, answer-key challenge, result and option form — so keep them safe.',
            },
            {
              title: 'Fill the online application for SSC CGL',
              text: 'Log in, pick the examination, confirm the OTR details, choose the examination centre preferences and the medium of the paper, and upload or capture the photograph and signature exactly as the notice specifies. The declaration you sign at the end binds you to the eligibility conditions, and the Commission verifies documents only at the end of the process — an ineligible candidate can go through every stage and be dropped at verification.',
            },
            {
              title: 'Pay the fee',
              text: 'The fee is ₹100, paid online; in 2026 the last date for payment was 26 June, four days after applications closed. Women and SC, ST, PwBD and ex-servicemen candidates are exempt. A fee paid is not refunded, including when an application is later found ineligible.',
            },
            {
              title: 'Use the correction window if you need it',
              text: 'A three-day correction window opens about a week after applications close. The Commission charges ₹200 for the first corrected submission and ₹500 for the second, from every candidate regardless of category. Some fields — notably the OTR identity details — cannot be changed at this point, which is why the OTR should be filled carefully in the first place.',
            },
            {
              title: 'Exam-city intimation, then the admission certificate',
              text: 'Roughly two weeks before the examination the candidate login shows the city allotted; the admission certificate itself is released only three to four days before the date. Print it, and carry it with an original photo identity document that carries the same date of birth as your application.',
            },
            {
              title: 'On the day: biometrics, frisking and the clock',
              text: 'Report at the time on the admission certificate; entry closes before the shift begins. Expect biometric capture and frisking, and expect the paper to be delivered with the timers the notice describes — a section or session that has closed cannot be reopened. Rough sheets are provided; nothing electronic is allowed inside.',
            },
            {
              title: 'Tentative answer key and challenge',
              text: 'A few days after the last shift the Commission uploads tentative answer keys with each candidate’s response sheet. Objections are filed online only, within the announced window, on payment of a per-question fee that is not refunded. Subject-matter experts examine the objections and the final key is used for evaluation.',
            },
            {
              title: 'Result, marks and the next stage',
              text: 'Results are published as PDF write-ups on the notice board with category-wise cut-offs and the count of candidates shortlisted; individual marks are released in the login shortly afterwards. Candidates for the next stage receive fresh admission certificates through the same login.',
            },
            {
              title: 'Tier 1 result and the three shortlists',
              text: 'Tier 1 produces separate cut-offs for three post groups: candidates who opted for Junior Statistical Officer (who go on to Paper 2), those who opted for Assistant Audit or Accounts Officer (Paper 3), and everyone else (Paper 1 only). Clearing the general cut-off does not automatically put you in the JSO or AAO list — those cut-offs have been higher every cycle. Tentative answer-key challenges cost ₹100 per question.',
            },
            {
              title: 'Tier 2, marks and the option-cum-preference form',
              text: 'Tier 2 Paper 1 runs in two sessions on one day; Papers 2 and 3 are scheduled separately for those who qualify for them. After the final key and marks are published, every candidate in the merit zone fills an option-cum-preference form ranking the posts and, for some, the departments they are willing to join. Preferences submitted here are final.',
            },
            {
              title: 'Final result, first round of tentative allocation, verification and appointment',
              text: 'The final result allots posts by rank and preference, with a first round of tentative allocation followed by identity verification. The user department then conducts document verification, and the physical and medical examinations where the post requires them, before the offer of appointment. In the 2025 cycle this ran from the final result on 14 May 2026 into the following months.',
            },
          ],
        },
        {
          type: 'note',
          title: 'The mistake that costs candidates a post rather than marks',
          text: 'The option-cum-preference form is filled after Tier 2, quickly, and it is final. Decide your post order before the result — pay level, department, transfer liability and promotion route differ a great deal between an Assistant Section Officer in the CSS, an Income Tax Inspector and an Auditor under the CAG — rather than in the few days the form is open.',
        },
      ],
    },
    pattern: [
      {
        type: 'p',
        text: 'The pattern below is the scheme in the SSC CGL 2026 notice of 21 May 2026. Every figure — questions, marks, time and the deduction for a wrong answer — comes from that notice; the full treatment, including the syllabus for each section, is on the exam pattern and syllabus pages.',
      },
      {
        type: 'table',
        caption: 'SSC CGL Tier 1 exam pattern 2026: 100 questions, 200 marks, 60 minutes with a 15-minute sectional timer on each section; 0.50 marks deducted for a wrong answer. Qualifying only.',
        head: ['Section', 'Questions', 'Marks', 'Time'],
        rows: [
          ['General Intelligence and Reasoning', '25', '50', '15 minutes'],
          ['General Awareness', '25', '50', '15 minutes'],
          ['Quantitative Aptitude', '25', '50', '15 minutes'],
          ['English Comprehension', '25', '50', '15 minutes'],
          ['Total', '100', '200', '60 minutes'],
        ],
      },
      {
        type: 'table',
        caption: 'SSC CGL Tier 2 exam pattern 2026, Paper 1 (compulsory for every post). One mark is deducted for a wrong answer in Sections 1, 2 and 3; Section 3 and the typing test are qualifying and the merit list is built from Sections 1 and 2.',
        head: ['Session', 'Section and module', 'Questions', 'Marks', 'Time'],
        rows: [
          ['Session 1', 'Section 1 — Module 1 Mathematical Abilities; Module 2 Reasoning and General Intelligence', '30 + 30 = 60', '180', '1 hour'],
          ['Session 1', 'Section 2 — Module 1 English Language and Comprehension; Module 2 General Awareness', '45 + 25 = 70', '210', '1 hour'],
          ['Session 1', 'Section 3 — Module 1 Computer Knowledge Test (qualifying)', '20', '60', '15 minutes'],
          ['Session 2', 'Section 3 — Module 2 Data Entry Speed Test (qualifying)', 'About 2,000 key depressions', '—', '15 minutes'],
        ],
      },
      {
        type: 'table',
        caption: 'Tier 2 Papers 2 and 3, for the two specialist post groups only. 0.50 marks deducted for a wrong answer.',
        head: ['Paper', 'For', 'Questions', 'Marks', 'Time'],
        rows: [
          ['Paper 2 — Statistics', 'Junior Statistical Officer', '100', '200', '2 hours'],
          ['Paper 3 — General Studies (Finance and Economics)', 'Assistant Audit Officer and Assistant Accounts Officer', '100', '200', '2 hours'],
        ],
      },
      {
        type: 'table',
        caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
        head: ['Category', 'Minimum qualifying marks'],
        rows: [
          ['Unreserved', '30%'],
          ['OBC and EWS', '25%'],
          ['All other categories', '20%'],
        ],
      },
      {
        type: 'p',
        text: 'The examination is conducted in multiple shifts, and marks are normalised by the formula the Commission published on 2 June 2025 before cut-offs and merit are computed. Normalised scores can therefore differ from raw scores, in either direction, depending on the difficulty of the shift you sat. Candidates for posts that require computer proficiency — Assistant Section Officer in the CSS, MEA and AFHQ, Assistant in the Serious Fraud Investigation Office and a few others — are held to a higher standard in the computer module.',
      },
    ],
    studyPlan: [
      {
        type: 'p',
        text: 'SSC CGL rewards accuracy under a clock more than breadth. Tier 1 is four 15-minute sprints; Tier 2 Section 1 asks 60 questions of harder mathematics and reasoning in an hour for three marks each with a full mark off for every mistake. A plan that builds speed on a small syllabus, then adds Tier 2 depth, fits that shape better than one that tries to cover everything at once.',
      },
      {
        type: 'steps',
        title: 'A six-month plan for a first attempt',
        items: [
          {
            title: 'Months 1–2: foundations and a diagnostic',
            text: 'Sit one full Tier 1 mock in the first week to find your weakest section, then work arithmetic (percentages, ratio, averages, profit and loss, time and work, speed and distance), the reasoning question types, English grammar and vocabulary, and a static general awareness spine. Learn the exam’s shortcuts as you go; there is no marks for method.',
          },
          {
            title: 'Months 3–4: Tier 2 depth',
            text: 'Add algebra, geometry, trigonometry and mensuration and data interpretation, which Tier 2 Section 1 leans on. Start reading comprehension and cloze passages under time. Begin a daily current affairs habit covering the six months before the exam. Take a sectional test every day and a full Tier 1 mock every week.',
          },
          {
            title: 'Month 5: mocks on the sectional timer',
            text: 'Practise the Tier 1 paper with 15-minute sections, because the strategy of borrowing time no longer exists. Alternate Tier 1 and Tier 2 full mocks, and keep an error log by topic. Start the Data Entry Speed Test practice — 2,000 key depressions in 15 minutes is roughly 35 words per minute with high accuracy.',
          },
          {
            title: 'Month 6: revision and the exam window',
            text: 'Revise from your own notes and error log rather than fresh material, keep general awareness current, and taper mocks to two a week in the final fortnight. Read the pattern section of the notice once more before the exam.',
          },
        ],
      },
      {
        type: 'list',
        title: 'Section-by-section priorities',
        items: [
          {
            text: 'Quantitative Aptitude and Mathematical Abilities',
            note: 'The section with the highest ceiling and the most differentiation in Tier 2. Speed comes from recognising question types, not from solving fresh each time.',
          },
          {
            text: 'Reasoning',
            note: 'The easiest section to bring to near-full marks; puzzles, series, coding, syllogisms and figure questions repeat their forms year after year.',
          },
          {
            text: 'English',
            note: 'Forty-five questions in Tier 2 carrying 135 marks — grammar rules, vocabulary, idioms, error spotting, cloze tests and comprehension. Read something every day.',
          },
          {
            text: 'General Awareness',
            note: 'Recall, not reasoning; you either know it or move on in seconds. Static GK (history, polity, geography, economy, science) plus six months of current affairs.',
          },
          {
            text: 'Computer Knowledge and typing',
            note: 'Qualifying, but a fail here is a fail. Twenty questions of basic computer fundamentals, software, networking and security; typing practice on a QWERTY keyboard for 15 minutes a day is enough.',
          },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the notice of examination for CGL 2026, the reopening notice, and the Tier 1 result, final vacancy and final result write-ups of CGL 2025, all on the SSC notice board. Dates for Tier 1 and Tier 2 are tentative in the notice and are confirmed only through the candidate login and later notices.',
      },
      {
        type: 'links',
        title: 'Official documents',
        items: [
          {
            label: 'Notice of Combined Graduate Level Examination 2026 (21 May 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf',
          },
          {
            label: 'Reopening of the application window for CGL 2026 (23 June 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/CGLE_Reopen_23062026.pdf',
          },
          {
            label: 'CGL 2025 Tier 1 result write-up with cut-offs (18 December 2025)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_181225.pdf',
          },
          {
            label: 'CGL 2025 final vacancies (6 March 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/CGLE_2025_Final_Vacancies_09032026.pdf',
          },
          {
            label: 'CGL 2025 final result write-up (14 May 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_14052026.pdf',
          },
          {
            label: 'SSC home page — notices, calendar and candidate login',
            href: 'https://ssc.gov.in/',
          },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'SSC CGL syllabus for Tier 1 and Tier 2 — section-wise topics in reasoning, quantitative aptitude, English, general awareness, statistics and finance.',
        lead: [
          'The SSC CGL syllabus is broad but shallow in Tier 1 and narrower but deeper in Tier 2. Reading it as one flat list is the usual mistake; the same subject name means different things at the two stages.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Four subjects run through the whole exam: reasoning, quantitative aptitude, English and general awareness. Tier 1 samples all four lightly — 25 questions each, mostly single-step. Tier 2 goes considerably deeper on mathematics and English in particular, and adds computer knowledge, which does not appear in Tier 1 at all.',
          },
          {
            type: 'defs',
            items: [
              [
                'General Intelligence and Reasoning',
                'Analogies, classification, series (number, letter and figure), coding-decoding, blood relations, direction sense, syllogism, seating arrangement, matrix and word-formation problems, Venn diagrams, mirror and water images, paper folding and cutting, embedded figures. Non-verbal reasoning carries real weight here, which surprises candidates who have prepared only for banking exams.',
              ],
              [
                'Quantitative Aptitude',
                'Arithmetic — number system, percentage, ratio and proportion, average, profit and loss, discount, simple and compound interest, time and work, time speed and distance, mixture and alligation, partnership. Advanced mathematics — algebraic identities, linear equations, triangles and their centres, circles and tangents, quadrilaterals, regular polygons, mensuration of solids, trigonometric ratios and identities, heights and distances, degree and radian measure, standard identities, and data interpretation from bar graphs, pie charts and tables.',
              ],
              [
                'English Comprehension',
                'Reading comprehension, cloze test, spotting errors, sentence improvement, fill in the blanks, synonyms and antonyms, one-word substitution, idioms and phrases, spelling correction, active and passive voice, direct and indirect speech, para jumbles. Tier 2 adds substantially more vocabulary and a longer comprehension load.',
              ],
              [
                'General Awareness',
                'Indian history with an emphasis on the freedom movement, geography of India and the world, Indian polity and the Constitution, economics, general science across physics, chemistry and biology, static general knowledge such as books, awards, dances and important days, and current events. Questions test recall rather than analysis, so breadth beats depth.',
              ],
              [
                'Computer Knowledge (Tier 2 only)',
                'Computer organisation, input and output devices, memory, software basics, operating systems, MS Office fundamentals, internet and email, networking basics, and cyber security awareness. A small module, and one of the highest scoring-per-hour areas in the whole exam.',
              ],
            ],
          },
          {
            type: 'list',
            title: 'Paper-specific syllabus for two post groups',
            items: [
              { text: 'Paper 2 — Statistics', note: 'collection and presentation of data, measures of central tendency and dispersion, moments, skewness and kurtosis, correlation and regression, probability theory, random variables and distributions, sampling, index numbers, time series analysis and statistical inference. Taken only by Junior Statistical Officer applicants.' },
              { text: 'Paper 3 — General Studies (Finance and Economics)', note: 'fundamental principles of accounting, financial accounting concepts, basic economics, demand and supply, production and cost, forms of market, national income, money and banking, public finance, and Indian economic and fiscal policy. Taken only by Assistant Audit Officer and Assistant Accounts Officer applicants.' },
            ],
          },
          {
            type: 'p',
            text: 'A syllabus is a list of what can be asked, not a plan for what to study first. Previous papers are the better guide to weighting: arithmetic and algebra dominate the mathematics module, reading comprehension and vocabulary dominate English, and general awareness rewards static knowledge more consistently than it rewards current affairs.',
          },
        ],
      },
      'exam-pattern': {
        description: 'SSC CGL exam pattern 2026 — Tier 1 and Tier 2 tables with questions, marks, time, sectional timers and negative marking, plus the qualifying marks and cut-offs.',
        heading: 'SSC CGL exam pattern 2026: Tier 1 and Tier 2, marks, time and negative marking',
        lead: ['The SSC CGL tier exam pattern in one place, from the notice of 21 May 2026: what each tier asks, how long you get, what a wrong answer costs, and which marks actually build the merit list.'],
        blocks: [
          {
            type: 'p',
            text: 'SSC CGL has two computer-based tiers. Tier 1 is a one-hour, 200-mark screening paper that every applicant sits; Tier 2 is a longer, harder paper held about three months later that the final merit list is built from. The 2026 notice keeps the Tier 2 scheme introduced in 2022 and adds one change to Tier 1 — a sectional timer of 15 minutes on each of the four sections — that changes how the paper should be attempted.',
          },
          {
            type: 'table',
            caption: 'SSC CGL Tier 1 exam pattern 2026. Objective multiple choice; questions in Hindi and English except English Comprehension; 0.50 marks deducted per wrong answer; unanswered questions carry no penalty.',
            head: ['Part', 'Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['A', 'General Intelligence and Reasoning', '25', '50', '15 minutes'],
              ['B', 'General Awareness', '25', '50', '15 minutes'],
              ['C', 'Quantitative Aptitude', '25', '50', '15 minutes'],
              ['D', 'English Comprehension', '25', '50', '15 minutes'],
              ['', 'Total', '100', '200', '60 minutes (80 minutes for scribe-eligible candidates)'],
            ],
          },
          {
            type: 'p',
            text: 'Tier 1 is qualifying. Its marks decide who is called for Tier 2 — through separate cut-offs for the Junior Statistical Officer list, the Assistant Audit and Accounts Officer list, and the general list — but they are not added to anything afterwards. The sectional timer means each 25-question section has to be finished in its own 15 minutes; when the timer ends the section locks. That removes the old tactic of racing through reasoning and general awareness to buy time for mathematics, and puts a premium on knowing which questions to skip inside each block.',
          },
          {
            type: 'table',
            caption: 'SSC CGL Tier 2 exam pattern 2026, Paper 1. Compulsory for all posts; conducted in two sessions on the same day; one mark deducted per wrong answer in Sections 1, 2 and 3.',
            head: ['Session', 'Section', 'Module', 'Questions', 'Marks', 'Time'],
            rows: [
              ['Session 1', 'Section 1', 'Module 1 — Mathematical Abilities', '30', '90', '1 hour for the section'],
              ['Session 1', 'Section 1', 'Module 2 — Reasoning and General Intelligence', '30', '90', ''],
              ['Session 1', 'Section 2', 'Module 1 — English Language and Comprehension', '45', '135', '1 hour for the section'],
              ['Session 1', 'Section 2', 'Module 2 — General Awareness', '25', '75', ''],
              ['Session 1', 'Section 3', 'Module 1 — Computer Knowledge Test', '20', '60', '15 minutes'],
              ['Session 2', 'Section 3', 'Module 2 — Data Entry Speed Test', 'One passage, about 2,000 key depressions', 'Qualifying', '15 minutes'],
            ],
          },
          {
            type: 'list',
            title: 'How Tier 2 Paper 1 is scored',
            items: [
              {
                text: 'Merit is built from Sections 1 and 2',
                note: '130 questions for 390 marks. Section 3 (computer knowledge) is mandatory and qualifying for every post, with a higher standard applied when shortlisting for posts that require computer proficiency.',
              },
              {
                text: 'The Data Entry Speed Test is qualifying',
                note: 'Errors are allowed up to 20 per cent of the passage for UR candidates, 25 per cent for OBC and EWS, and 30 per cent for other categories. Ex-servicemen and some PwBD candidates are exempt on production of the prescribed certificate; the test is not required for a few posts listed in the notice.',
              },
              {
                text: 'A wrong answer costs one full mark',
                note: 'Against three marks for a right one. A blind guess across four options loses on average; a guess narrowed to two is worth taking. That arithmetic is different from Tier 1, where the deduction is half a mark against two.',
              },
              {
                text: 'Both sections in Session 1 have a fixed hour',
                note: 'You cannot carry time from mathematics into English or the other way round. Each section closes when its hour ends.',
              },
            ],
          },
          {
            type: 'table',
            caption: 'Tier 2 Papers 2 and 3. Objective; 0.50 marks deducted per wrong answer; each paper counts in the merit list only for its own post group.',
            head: ['Paper', 'Who sits it', 'Subject', 'Questions', 'Marks', 'Time'],
            rows: [
              ['Paper 2', 'Candidates shortlisted for Junior Statistical Officer', 'Statistics', '100', '200', '2 hours'],
              ['Paper 3', 'Candidates shortlisted for Assistant Audit Officer and Assistant Accounts Officer', 'General Studies — Finance and Economics', '100', '200', '2 hours'],
            ],
          },
          {
            type: 'table',
            caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
            head: ['Category', 'Minimum qualifying marks'],
            rows: [
              ['Unreserved', '30%'],
              ['OBC and EWS', '25%'],
              ['All other categories', '20%'],
            ],
          },
          {
            type: 'p',
            text: 'Marks in both tiers are normalised across shifts by the Commission’s formula of 2 June 2025, and the normalised scores are what the cut-offs and the merit list are computed from. For reference, the CGL 2025 Tier 1 cut-offs for the general post list were 136.83 (UR), 130.37 (OBC), 127.42 (EWS), 114.97 (SC) and 106.37 (ST) out of 200; the Junior Statistical Officer list closed at 153.46 for UR and the Assistant Audit Officer list higher still. Final selection in 2025 came from Tier 2 marks plus the post preferences, with 15,118 candidates recommended on 14 May 2026.',
          },
          {
            type: 'list',
            title: 'What the pattern means for how you attempt the paper',
            items: [
              {
                text: 'Tier 1: work each 15-minute block as its own test',
                note: 'Skip anything that takes more than 40 seconds on a first pass, come back inside the block if time remains, and leave rather than guess at four-option questions.',
              },
              {
                text: 'Tier 2 Section 1: accuracy first',
                note: 'Sixty questions in an hour at three marks each with one off for a mistake. Ten wrong answers wipe out the credit from four right ones; a clean 45 beats a scrappy 55.',
              },
              {
                text: 'Tier 2 Section 2: read fast, decide fast',
                note: 'Forty-five English questions carry 135 marks — the single largest block of marks in the exam. Cloze tests, comprehension passages, error spotting and vocabulary reward daily reading more than rules learned the week before.',
              },
              {
                text: 'Do not neglect the qualifying modules',
                note: 'Every cycle candidates with merit-list marks are dropped for failing the computer module or the typing test. Fifteen minutes of typing practice a day from the Tier 1 result onwards is enough.',
              },
            ],
          },
          {
            type: 'links',
            title: 'Related SSC CGL pages',
            items: [
              {
                label: 'SSC CGL syllabus, section by section',
                to: '/government-exams/ssc/ssc-cgl/syllabus/',
              },
              {
                label: 'Free SSC CGL mock tests on the 2026 pattern',
                to: '/government-exams/ssc/ssc-cgl/mock-tests/',
              },
              {
                label: 'SSC CGL previous year papers',
                to: '/government-exams/ssc/ssc-cgl/previous-year-papers/',
              },
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SSC CGL previous year question papers — how to read them for question trends across Tier 1 and Tier 2 rather than treating them as extra mock tests.',
        lead: [
          'Most candidates solve previous papers the way they solve mock tests: timed, scored, filed away. That wastes the one thing a past paper offers that a mock cannot — evidence of what the commission actually asks.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'SSC papers are unusually repetitive, and that is a gift. Across cycles the same geometry configurations, the same trigonometric identities, the same handful of idiom families and the same static general knowledge themes reappear with different numbers attached. Reading five years of papers side by side tells you more about where to spend December than any topper’s strategy video.',
          },
          {
            type: 'steps',
            title: 'A more useful way to work through past papers',
            items: [
              { text: 'Solve one paper untimed first.', note: 'The point of the first pass is comprehension, not speed. Work every question to a full solution, including the ones you would have skipped.' },
              { text: 'Tag every question by topic, not by section.', note: 'Not "quantitative aptitude" but "circles — tangent length" or "percentage — successive change". The tags are what reveal the pattern.' },
              { text: 'Count the tags across several years.', note: 'You will find a short list of topics carrying a disproportionate share of the marks, and a long tail that appears once in five years.' },
              { text: 'Study the short list to fluency before touching the tail.', note: 'This is where most of the available marks actually live.' },
              { text: 'Only then start solving papers under exam timing.', note: 'Now you are measuring speed on material you already understand, which is what a timed attempt is good for.' },
            ],
          },
          {
            type: 'p',
            text: 'One caution about scores. A previous paper you have already read is no longer a measurement instrument — familiarity inflates the result. Keep two or three untouched papers aside for the final month, and use fresh mock tests for anything you intend to treat as a genuine score.',
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'SSC CGL free mock test', to: '/mock-tests/ssc-cgl/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Quantitative aptitude study material', to: '/study-material/quantitative-aptitude/' },
            ],
          },
          {
            type: 'p',
            text: 'Treat Tier 1 and Tier 2 papers as two different archives. Tier 1 papers age well: the section structure has been stable for years, so a paper from several cycles back still describes the exam you will sit. Tier 2 papers do not age as gracefully, because the commission has merged papers, added a computer module and changed how sessions are timed. Older Tier 2 sets remain excellent for the mathematics and English content itself, but do not use them to rehearse the format.',
          },
          {
            type: 'list',
            title: 'Two kinds of paper, and the difference matters',
            items: [
              { text: 'Official papers released by the commission', note: 'accurate question text, accurate options, and a tentative answer key published alongside. These are what your topic counts should be built from.' },
              { text: 'Memory-based papers reconstructed after the exam', note: 'useful for a rough sense of difficulty, but the wording drifts and the options are often wrong. Never let a memory-based key convince you that a method you trust is mistaken.' },
            ],
          },
          {
            type: 'p',
            text: 'The tentative answer key is worth using deliberately rather than glancing at. When your answer differs from the key, work out which of three things happened: you made an arithmetic slip, you used a method that does not generalise, or you were right and the key is wrong — which does occur, and is the reason the commission runs a challenge window at all. Sorting your disagreements into those three piles teaches more than re-solving the paper does.',
          },
          {
            type: 'note',
            title: 'How many years is enough',
            text: 'Four or five recent cycles is the point of diminishing returns for topic counting — enough for a pattern to be visible, recent enough that the pattern still holds. Going back a decade adds volume without adding information, and it pulls in questions written against a syllabus and a difficulty level the commission has since moved away from.',
          },
        ],
      },
      'mock-tests': {
        description:
          'Free SSC CGL mock tests on the current Tier 1 pattern — 100 questions in 60 minutes, with scoring, answer key and section-wise analysis.',
        lead: [
          'A mock test is a measuring instrument, not a study session. Its job is to tell you where you actually stand under a clock, and it only does that job if you take it under real conditions.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The free SSC CGL mock on this site follows the Tier 1 pattern — four sections, 100 questions, 200 marks, 60 minutes, with the same negative marking the real paper applies. You get your score, the correct answers and a section-wise breakdown at the end, which is the part worth reading.',
          },
          {
            type: 'list',
            title: 'Conditions that make a mock score mean something',
            items: [
              'One sitting, no pauses, no looking anything up.',
              'A clock you can see, because pacing is half of what Tier 1 measures.',
              'The same time of day as your exam slot, once you know it.',
              'No second attempt at the same paper — a repeat measures memory, not ability.',
            ],
          },
          {
            type: 'p',
            text: 'What to do afterwards matters more than the score itself. Sort the questions you got wrong into three piles: ones you did not know, ones you knew but misread, and ones you knew but ran out of time for. Those three failures have three completely different fixes, and treating them all as "revise the topic" is why some candidates plateau despite taking dozens of mocks.',
          },
          {
            type: 'steps',
            title: 'Reading your analysis',
            items: [
              { text: 'Accuracy before attempts.', note: 'An 85% accuracy on 70 attempts beats 60% on 95 attempts once negative marking is applied.' },
              { text: 'Find your slowest section.', note: 'Then check whether it is slow because it is hard for you, or slow because you attempt it last when you are rushed.' },
              { text: 'Look at what you skipped.', note: 'Skipping is a skill. Skipping the wrong questions — the ones you could have solved in forty seconds — is the most common silent leak.' },
              { text: 'Re-test in two weeks, not two days.', note: 'You need enough time in between for the corrections to have actually changed something.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Take the free SSC CGL mock test', to: '/mock-tests/ssc-cgl/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Sectional and topic tests', to: '/practice/' },
            ],
          },
          {
            type: 'p',
            text: 'Tier 2 needs its own mock practice, and starting it only after the Tier 1 result is the most common scheduling mistake in this exam. The gap between the two stages is short, the mathematics is deeper, and the modules are separately timed — so a candidate who has only ever practised the open sixty-minute Tier 1 format arrives at Tier 2 having never rehearsed the constraint that actually binds there. Sit at least a few Tier 2 papers while you are still preparing for Tier 1.',
          },
          {
            type: 'defs',
            items: [
              [
                'Full-length mocks',
                'Measure pacing, stamina and decision-making under a clock. These are the only tests that tell you what your score would be tomorrow. Because each one costs a full sitting plus an hour of analysis, one or two a week is usually the right rate — more than that and the analysis quietly stops happening.',
              ],
              [
                'Sectional tests',
                'Measure one subject at a time, which is what you want while you are still building. A twenty-minute reasoning set gives cleaner feedback about reasoning than a full mock does, because nothing else is competing for your attention.',
              ],
              [
                'Topic tests',
                'Measure whether a specific topic has actually landed. Use one immediately after finishing a topic, then again three weeks later. The second attempt is the informative one.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'When your mock score stops moving',
            text: 'A plateau after several mocks almost never means you have reached your ceiling. It usually means your analysis has become a scoring ritual rather than a diagnosis. If three consecutive mocks produce the same score, stop taking them for two weeks, work only on the topics your error log names most often, and then re-test.',
          },
        ],
      },
      preparation: {
        description:
          'SSC CGL preparation strategy — how to sequence subjects, build speed for Tier 1 and shift focus to Tier 2, with a realistic timeline.',
        lead: [
          'There is no shortage of SSC CGL study plans. What most of them get wrong is the order: they treat all four subjects as equally urgent, when the exam does not.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Start from the structure. Tier 1 is a speed test on material most graduates have seen before; Tier 2 is a depth test that decides your rank. A plan that spends its first three months polishing Tier 1 speed and only then opens the Tier 2 mathematics syllabus has the sequence backwards, because the harder material needs the longer runway.',
          },
          {
            type: 'steps',
            title: 'A workable sequence',
            items: [
              { text: 'Week one — measure, do not study.', note: 'Take a full mock cold. It is uncomfortable and it is the most useful hour you will spend, because every decision after this depends on knowing which sections are already competitive.' },
              { text: 'Months one to three — build the mathematics base.', note: 'Arithmetic first because it carries both tiers, then algebra, geometry and trigonometry for Tier 2. This is the longest pole; start it first.' },
              { text: 'Alongside — thirty minutes of English every single day.', note: 'Vocabulary and grammar respond to daily contact and almost nothing else. Cramming them in the last month does not work.' },
              { text: 'Months two onwards — general awareness in small daily doses.', note: 'Static GK from a single source, current affairs from a single daily digest. The failure mode here is collecting sources rather than revising one.' },
              { text: 'Month four — reasoning to speed.', note: 'Reasoning is the section where a prepared candidate gains the most minutes. Non-verbal in particular is pure practice.' },
              { text: 'Final six weeks — mocks and correction.', note: 'Two full mocks a week, and more time spent on analysis than on the attempt itself.' },
            ],
          },
          {
            type: 'list',
            title: 'Mistakes that cost SSC CGL candidates the most',
            items: [
              { text: 'Preparing for Tier 1 only', note: 'and discovering after the result that Tier 2 mathematics is a different exam with six weeks left.' },
              { text: 'Collecting resources instead of finishing one', note: 'three books half-read teach less than one book finished twice.' },
              { text: 'Ignoring the computer knowledge module', note: 'it is small, easy and fully learnable, which makes skipping it an avoidable loss.' },
              { text: 'Treating general awareness as unlearnable', note: 'static GK repeats heavily across cycles; it rewards revision more than reading.' },
              { text: 'Never practising the data entry speed test', note: 'a qualifying requirement that has ended otherwise successful attempts.' },
            ],
          },
          {
            type: 'p',
            text: 'On timelines: a graduate with a reasonable mathematics background and consistent daily hours can be competitive in six to eight months. Someone rebuilding mathematics from the ground up should plan for a full cycle. Neither figure means much without the daily consistency, which is the actual variable.',
          },
        ],
      },
      'study-material': {
        description:
          'SSC CGL study material — subject-wise notes for quantitative aptitude, reasoning, English and general awareness mapped to the Tier 1 and Tier 2 syllabus.',
        lead: [
          'Study material is only useful when it maps to the paper you are sitting. These notes are organised by the subjects SSC actually examines, with the topics that carry the most marks written out in the most detail.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The quantitative aptitude notes are the ones to start with, and within them, arithmetic before advanced mathematics. Percentage in particular is worth an early week of its own: profit and loss, discount, simple and compound interest and most data interpretation are percentage questions in different clothing, so fluency there pays off across a quarter of the paper.',
          },
          {
            type: 'links',
            title: 'Subject notes for SSC CGL',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
            ],
          },
          {
            type: 'list',
            title: 'How to use written notes without wasting the time',
            items: [
              'Read a topic once for understanding, then close it and solve twenty questions before re-reading anything.',
              'Write down only the results you keep forgetting — a formula you remember does not need copying out.',
              'Revisit a topic three days after you first study it, then two weeks later. Two short revisits beat one long session.',
              'Move to the next topic when your accuracy is stable, not when you feel confident. The two are different signals.',
            ],
          },
          {
            type: 'p',
            text: 'General awareness deserves a different handling from the rest. It does not reward deep study; it rewards repeated light contact with the same material. One static source revised five times will beat five sources read once, and the same is true of current affairs digests.',
          },
          {
            type: 'defs',
            items: [
              [
                'Quantitative aptitude',
                'The largest and most durable investment. Arithmetic first, to fluency, because Tier 1 leans on it and Tier 2 assumes it. Then algebra, geometry, trigonometry and mensuration, which is where Tier 2 separates candidates. Work problems rather than reading worked examples — the two feel similar and are not.',
              ],
              [
                'English',
                'A daily habit rather than a subject to be finished. Grammar rules are a closed set and can be learned in weeks; vocabulary and reading speed only respond to repeated exposure over months, which is why starting English late is so hard to recover from.',
              ],
              [
                'General awareness',
                'Breadth over depth, revision over study. Static knowledge — polity, history, geography, general science — repeats far more reliably across cycles than current affairs does, so weight your time accordingly.',
              ],
              [
                'Reasoning',
                'The fastest section to convert into marks. Most of what Tier 1 asks is pattern recognition that improves quickly with volume, and non-verbal reasoning in particular rewards practice on paper rather than theory.',
              ],
              [
                'Computer knowledge (Tier 2)',
                'A small, finite module with no conceptual difficulty. It is fully learnable in a few weeks and is among the highest returns per hour available anywhere in this exam.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The two specialist Tier 2 papers need a separate decision, and it should be made early rather than at the application stage. Paper 2 in statistics and Paper 3 in finance and economics are taken only by candidates applying for Junior Statistical Officer and for Assistant Audit Officer or Assistant Accounts Officer respectively. Each is a genuine additional subject with its own reading, so opting for those posts means adding months of preparation — worth it if the post is what you want, wasteful if you added the preference casually.',
          },
          {
            type: 'note',
            title: 'On making your own notes',
            text: 'The most useful set of notes in this preparation is the shortest one: a personal sheet of the formulas, rules and facts that you specifically keep forgetting. It grows from your error log rather than from a syllabus, which means it is different from anybody else’s and is the only document worth re-reading in the final week.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'Do Tier 1 marks count towards the final SSC CGL merit list?',
        a: 'No. Tier 1 is a qualifying and screening stage — it decides who is called for Tier 2, but the final merit list is built from Tier 2 marks. This is why candidates who clear Tier 1 comfortably but prepare only at Tier 1 depth tend to struggle: the exam that decides their rank is a harder one they have not practised for.',
      },
      {
        q: 'Who is eligible for SSC CGL?',
        a: 'The general requirement is a bachelor’s degree in any discipline from a recognised university. Some posts add conditions — Junior Statistical Officer expects statistics or mathematics at the twelfth or degree level, and Assistant Audit Officer carries a preference for commerce, economics or a chartered accountancy background. Age limits vary by post rather than applying uniformly, so check the post-wise table in the current notification.',
      },
      {
        q: 'Are free SSC CGL mock tests available?',
        a: 'Yes. A full-length free SSC CGL mock test on the current Tier 1 pattern is available without payment — 100 questions in 60 minutes, with the same negative marking as the real paper, followed by your score, the answer key and a section-wise breakdown.',
      },
      {
        q: 'How long does it take to prepare for SSC CGL?',
        a: 'A graduate with a reasonable mathematics background and consistent daily study is usually competitive in six to eight months. Someone rebuilding mathematics from the beginning should plan for a full exam cycle. The variable that matters most is daily consistency rather than total months, because vocabulary, general awareness and calculation speed all respond to repeated contact rather than long isolated sessions.',
      },
      {
        q: 'What is the SSC CGL Tier 1 exam pattern for 2026?',
        a: 'Tier 1 is a computer-based objective paper of 100 questions for 200 marks in 60 minutes: General Intelligence and Reasoning, General Awareness, Quantitative Aptitude and English Comprehension, 25 questions of 2 marks each. The 2026 notice adds a 15-minute sectional timer to each section, and 0.50 marks are deducted for every wrong answer. Tier 1 is qualifying; its marks decide who sits Tier 2 but do not count towards the final merit list.',
      },
      {
        q: 'What is the SSC CGL Tier 2 exam pattern?',
        a: 'Tier 2 Paper 1 is compulsory for all posts and runs in two sessions on one day. Session 1 has Section 1 (Mathematical Abilities 30 questions and Reasoning 30 questions, 180 marks, one hour), Section 2 (English 45 questions and General Awareness 25 questions, 210 marks, one hour) and Section 3 Module 1 (Computer Knowledge, 20 questions, 60 marks, 15 minutes, qualifying). Session 2 is the Data Entry Speed Test, qualifying, about 2,000 key depressions in 15 minutes. One mark is deducted per wrong answer. Paper 2 (Statistics) and Paper 3 (Finance and Economics) are 100-question, 200-mark, two-hour papers for Junior Statistical Officer and Assistant Audit/Accounts Officer candidates respectively, with 0.50 marks deducted per wrong answer.',
      },
      {
        q: 'What is the negative marking in SSC CGL?',
        a: 'Tier 1 deducts 0.50 marks for a wrong answer against 2 marks for a correct one. Tier 2 Paper 1 deducts 1 mark against 3 in Sections 1, 2 and 3; Papers 2 and 3 deduct 0.50 marks against 2. Unanswered questions carry no penalty in any paper.',
      },
      {
        q: 'What were the SSC CGL 2025 Tier 1 cut-off marks?',
        a: 'For the general post list (all posts other than JSO and AAO/AAO), the Tier 1 cut-offs declared on 18 December 2025 were 136.83 for UR, 130.37 for OBC, 127.42 for EWS, 114.97 for SC and 106.37 for ST out of 200. The Junior Statistical Officer list closed at 153.46 for UR. Cut-offs are on normalised marks and move with the vacancy count and the difficulty of the shifts, so treat them as a guide rather than a target.',
      },
      {
        q: 'What is the SSC CGL exam pattern and syllabus for Quantitative Aptitude and Mathematical Abilities?',
        a: 'Tier 1 Quantitative Aptitude is 25 questions in 15 minutes, mostly arithmetic: number system, percentages, ratio and proportion, averages, profit and loss, simple and compound interest, time and work, speed and distance, mixtures, and basic algebra, geometry, trigonometry, mensuration and data interpretation. Tier 2 Mathematical Abilities is 30 questions in the one-hour Section 1, with the same topics at greater depth — algebra of polynomials and quadratic equations, geometry of triangles, circles and chords, trigonometric identities and heights and distances, mensuration of solids, and statistics-based data interpretation. The full topic list is on the syllabus page.',
      },
      {
        q: 'What is a cloze test in the SSC CGL English section?',
        a: 'A cloze test is a short passage with several words removed; each blank is a question with four options, and you pick the word that fits the grammar and the sense of the passage. Cloze tests appear in Tier 1 English Comprehension and carry more weight in Tier 2 Section 2, where a passage of five to ten blanks is common. They test vocabulary, prepositions, tense agreement and idiom together, and the reliable way to practise is to read the whole passage before answering any blank.',
      },
      {
        q: 'What are the SSC CGL 2026 exam dates?',
        a: 'The notice of 21 May 2026 gives Tier 1 a tentative window of August–September 2026 and Tier 2 December 2026. Applications ran from 21 May to 22 June 2026, with a reopening from 23 to 25 June, and the correction window from 29 June to 1 July 2026. The exact Tier 1 dates and the exam-city intimation are published through the candidate login and the SSC notice board, so confirm them there.',
      },
      {
        q: 'How many vacancies are there in SSC CGL 2026?',
        a: 'The notice lists about 12,256 tentative vacancies, with the post-wise and category-wise break-up on the Commission’s Tentative Vacancy page. Vacancies are revised during the cycle as departments confirm their requirements; CGL 2025 was notified with a tentative count and finalised at 15,118 on 6 March 2026, all of which were filled in the final result of 14 May 2026.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SSC CHSL
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ssc-chsl',
    path: '/government-exams/ssc/ssc-chsl/',
    name: 'SSC CHSL',
    fullName: 'Staff Selection Commission Combined Higher Secondary Level Examination',
    authority: 'Staff Selection Commission (SSC)',
    official: 'ssc.gov.in',
    seoTitle: 'SSC CHSL Exam Pattern 2026: Tier 1, Tier 2 Syllabus, Typing Test, Dates',
    metaDescription:
      'SSC CHSL 2026 exam pattern and syllabus — Tier 1 and Tier 2 marks, time, negative marking, DEO and LDC typing test, cut-offs, eligibility, dates and free mocks.',
    heroTitle: 'SSC CHSL Exam Pattern and Syllabus 2026: Tier 1, Tier 2, Typing Test and Free Mock Tests',
    lead: [
      'SSC CHSL is the commission’s class-12 recruitment, and it is the shortest route from school-leaving qualification to a central government desk job. Lower Division Clerk, Junior Secretariat Assistant and Data Entry Operator posts across ministries and departments are all filled from this one examination.',
      'It is often described as an easier CGL. That is true of the difficulty and false of the competition — with a far larger eligible pool and fewer posts, the cutoff behaves quite differently, and the typing and skill test at the end eliminates candidates who cleared the written papers comfortably.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Level', 'Class 12 pass from a recognised board as on the closing date'],
      ['Posts', 'Lower Division Clerk / Junior Secretariat Assistant (Level 2), Data Entry Operator (Level 4 and 5), DEO Grade A (Level 4)'],
      ['2026 cycle', 'Notice 7 September 2026; applications to 7 October 2026; about 2,536 tentative vacancies'],
      ['Age', '18–27 years as on 1 August 2026, with the usual relaxations'],
      ['Stages', 'Tier 1 (qualifying, 200 marks) → Tier 2 (merit 360 marks + qualifying computer and typing modules) → verification'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Combined Higher Secondary Level examination recruits for clerical and data entry posts in central government ministries, departments and offices. Candidates need a class 12 pass, which makes it the most widely accessible SSC examination and, for the same reason, one of the most competitive by ratio.',
      },
      {
        type: 'list',
        title: 'Posts filled through SSC CHSL',
        items: [
          { text: 'Lower Division Clerk and Junior Secretariat Assistant', note: 'clerical posts across central ministries, departments and subordinate offices' },
          { text: 'Data Entry Operator', note: 'in various ministries; some DEO posts sit at a higher pay level and carry a stiffer speed requirement' },
        ],
      },
      {
        type: 'p',
        text: 'The detail that separates CHSL from every other SSC examination is the skill test. Clerical posts require a typing speed on an English or Hindi keyboard; data entry posts require a data entry speed measured in key depressions per hour. The test is qualifying rather than merit-counting, but qualifying is not the same as optional, and every cycle produces candidates who cleared both written tiers and lost the post on typing speed.',
      },
      {
        type: 'note',
        title: 'Start typing practice early',
        text: 'Typing speed improves slowly and steadily, and it does not respond to cramming the way a syllabus topic does. Fifteen minutes a day from the beginning of your preparation will comfortably clear the requirement; three weeks of panic before the skill test often will not.',
      },
    ],
    stages: [
      {
        name: 'Tier 1 — Computer Based Examination',
        mode: 'Objective, 100 questions, 200 marks, 60 minutes',
        detail: 'English Language, General Intelligence, Quantitative Aptitude and General Awareness, 25 questions of 2 marks each, with a 15-minute sectional timer on every part. Half a mark is deducted for a wrong answer. Qualifying — Tier 1 marks decide who reaches Tier 2 and are not counted afterwards.',
      },
      {
        name: 'Tier 2 — Session 1 (objective)',
        mode: 'Objective, 135 questions, 405 marks, 2 hours 15 minutes',
        detail: 'Section 1: Mathematical Abilities 30 questions and Reasoning 30 questions, 180 marks, one hour with a 30-minute timer on each module. Section 2: English Language and Comprehension 40 questions and General Awareness 20 questions, 180 marks, one hour. Section 3 Module 1: Computer Knowledge, 15 questions, 45 marks, 15 minutes, qualifying. One mark deducted per wrong answer.',
      },
      {
        name: 'Tier 2 — Session 2 (skill and typing tests)',
        mode: 'Practical, on the same day',
        detail: 'Data Entry Operator candidates take a data entry skill test — 8,000 key depressions per hour, or 15,000 for the DEO posts in the offices listed in the notice — on a printed passage for 15 minutes. LDC and JSA candidates take a typing test of 35 words per minute in English or 30 in Hindi on a passage for 10 minutes. Both are qualifying.',
      },
      {
        name: 'Option-cum-preference form, final result and verification',
        mode: 'Online form, then verification by the department',
        detail: 'Merit is built from Tier 2 Sections 1 and 2. Candidates fill a preference form for posts and departments, the Commission publishes a first round of tentative allocation and then the final result, and the department verifies documents before appointment.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the SSC notice board. The notice for the Combined Higher Secondary (10+2) Level Examination 2026 was published on 7 September 2026 with about 2,536 tentative vacancies. Online applications run from 7 September to 7 October 2026 (23:00), fee payment closes on 8 October, and the correction window is 14 to 16 October 2026. The dates of Tier 1 and Tier 2 are “to be notified later”; the Commission’s calendar had placed Tier 1 tentatively in July–September 2026 before the notice slipped, so expect Tier 1 no earlier than the end of 2026 and watch the candidate login for the exam-city intimation.',
      },
      {
        type: 'table',
        caption: 'Key dates of the SSC CHSL 2026 cycle, from the notice of 7 September 2026.',
        head: ['Event', 'Date'],
        rows: [
          ['Notice published', '7 September 2026'],
          ['Online applications', '7 September – 7 October 2026 (23:00)'],
          ['Last date for fee payment', '8 October 2026 (23:00)'],
          ['Application correction window', '14–16 October 2026 (₹200 first correction, ₹500 second)'],
          ['Tier 1 (Computer Based Examination)', 'To be notified'],
          ['Tier 2 (Computer Based Examination and skill/typing test)', 'To be notified'],
          ['Tentative vacancies', 'About 2,536; post-wise list on the Tentative Vacancy page'],
        ],
      },
      {
        type: 'p',
        text: 'The 2025 cycle is the best guide to how long the process takes. CHSL 2025 Tier 1 was held from 12 to 30 November 2025; the result on 27 February 2026 shortlisted 37,520 candidates, with LDC/JSA cut-offs of 144.26 (UR), 143.83 (OBC), 141.42 (EWS), 125.40 (SC) and 115.25 (ST) out of 200. Tier 2 followed in April 2026 with the tentative key on 20 April; final vacancies were fixed at 3,522 on 18 June 2026, the option-cum-preference form ran in late June, and the first round of tentative allocation was declared on 17 August 2026 — roughly a year from notice to allocation.',
      },
      {
        type: 'note',
        title: 'What the 2026 notice changed',
        text: 'Tier 1 now has a 15-minute sectional timer on each of the four parts, as CGL 2026 does, and Tier 2 Section 1 has a 30-minute timer on each of its two modules. Registration is through the One-Time Registration system on the new portal. The Tier 2 scheme — 60 questions of mathematics and reasoning, 60 of English and general awareness, a 15-question computer module and the skill or typing test — is otherwise unchanged from 2025.',
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'Conditions are checked as on the closing date, 7 October 2026, and verified only after the final result — an ineligible candidate can sit both tiers and be dropped at verification. The specific DEO posts with a science requirement are listed by department in the notice.',
      },
      {
        type: 'list',
        title: 'Educational qualification as on 7 October 2026',
        items: [
          {
            text: 'LDC, JSA, DEO and DEO Grade A in general',
            note: 'Class 12 or equivalent from a recognised board or university.',
          },
          {
            text: 'DEO in the departments listed in the notice (including the office of the Comptroller and Auditor General)',
            note: 'Class 12 in the Science stream with Mathematics as a subject.',
          },
          {
            text: 'Final-year students',
            note: 'Not eligible unless the class 12 result is declared by the closing date.',
          },
        ],
      },
      {
        type: 'table',
        caption: 'Age as on 1 August 2026: 18–27 years, i.e. born between 2 August 1999 and 1 August 2008. Relaxations beyond 27 from the notice.',
        head: ['Category', 'Relaxation'],
        rows: [
          ['SC and ST', '5 years'],
          ['OBC (non-creamy layer)', '3 years'],
          ['Persons with benchmark disabilities', '10 years (UR), 13 years (OBC), 15 years (SC/ST)'],
          ['Ex-servicemen', '3 years after deducting military service from actual age'],
          ['Central Government civilian employees with 3 years’ regular service', 'Up to 40 years (45 for SC/ST)'],
          ['Widows, divorced women and judicially separated women who have not remarried', 'Up to 35 years (40 for SC/ST)'],
        ],
      },
      {
        type: 'list',
        title: 'Other conditions',
        items: [
          {
            text: 'Nationality',
            note: 'Indian citizens, and the other categories the notice lists with an eligibility certificate where required.',
          },
          {
            text: 'Fee',
            note: '₹100 online; women and SC, ST, PwBD and ex-servicemen candidates are exempt.',
          },
          {
            text: 'Pay',
            note: 'LDC and JSA are in Pay Level 2 (₹19,900–63,200); DEO in Level 4 (₹25,500–81,100) or Level 5 (₹29,200–92,300); DEO Grade A in Level 4.',
          },
          {
            text: 'Typing and data entry standards',
            note: 'Not an eligibility condition at application, but a qualifying test in Tier 2 that decides whether a merit-list candidate is appointed. PwBD candidates who are exempt under the notice must produce the prescribed certificate.',
          },
        ],
      },
    ],
    procedure: {
      eyebrow: 'Application to appointment',
      heading: 'How to apply for SSC CHSL 2026, what Tier 1 and Tier 2 look like on the day, and how posts are allotted',
      intro: 'The steps in the order they happen, with the windows and fees the 7 September 2026 notice specifies.',
      blocks: [
        {
          type: 'steps',
          title: 'The SSC CHSL process from registration to result',
          items: [
            {
              title: 'One-Time Registration on ssc.gov.in',
              text: 'Create an OTR profile once on the Commission’s portal. Registration asks for Aadhaar-based verification, a mobile number and e-mail that remain with you for the whole cycle, and your basic educational and category details. The OTR number and password are what you log in with at every later stage — exam-city intimation, admit card, answer-key challenge, result and option form — so keep them safe.',
            },
            {
              title: 'Fill the online application for SSC CHSL',
              text: 'Log in, pick the examination, confirm the OTR details, choose the examination centre preferences and the medium of the paper, and upload or capture the photograph and signature exactly as the notice specifies. The declaration you sign at the end binds you to the eligibility conditions, and the Commission verifies documents only at the end of the process — an ineligible candidate can go through every stage and be dropped at verification.',
            },
            {
              title: 'Pay the fee',
              text: 'The fee is ₹100, paid online by BHIM UPI, net banking or Visa, Mastercard, Maestro or RuPay cards, with 8 October 2026 (23:00) as the last date. Women and SC, ST, PwBD and ex-servicemen candidates pay nothing. Fees are not refunded.',
            },
            {
              title: 'Use the correction window if you need it',
              text: 'A three-day correction window opens about a week after applications close. The Commission charges ₹200 for the first corrected submission and ₹500 for the second, from every candidate regardless of category. Some fields — notably the OTR identity details — cannot be changed at this point, which is why the OTR should be filled carefully in the first place.',
            },
            {
              title: 'Exam-city intimation, then the admission certificate',
              text: 'Roughly two weeks before the examination the candidate login shows the city allotted; the admission certificate itself is released only three to four days before the date. Print it, and carry it with an original photo identity document that carries the same date of birth as your application.',
            },
            {
              title: 'On the day: biometrics, frisking and the clock',
              text: 'Report at the time on the admission certificate; entry closes before the shift begins. Expect biometric capture and frisking, and expect the paper to be delivered with the timers the notice describes — a section or session that has closed cannot be reopened. Rough sheets are provided; nothing electronic is allowed inside.',
            },
            {
              title: 'Tentative answer key and challenge',
              text: 'A few days after the last shift the Commission uploads tentative answer keys with each candidate’s response sheet. Objections are filed online only, within the announced window, on payment of a per-question fee that is not refunded. Subject-matter experts examine the objections and the final key is used for evaluation.',
            },
            {
              title: 'Result, marks and the next stage',
              text: 'Results are published as PDF write-ups on the notice board with category-wise cut-offs and the count of candidates shortlisted; individual marks are released in the login shortly afterwards. Candidates for the next stage receive fresh admission certificates through the same login.',
            },
            {
              title: 'Tier 1 result and the two shortlists',
              text: 'Tier 1 produces cut-offs for the DEO posts and for the LDC/JSA posts separately, because the two groups have different Tier 2 skill tests. Answer-key challenges cost ₹100 per question, filed online within the window.',
            },
            {
              title: 'Tier 2: objective session in the morning, skill or typing test after',
              text: 'Section 1 and Section 2 are separately timed hours; the computer module is 15 minutes. After Session 1 closes, DEO candidates take the data entry skill test and LDC/JSA candidates the typing test on the same computer. Both are qualifying and both are compulsory unless the notice exempts you.',
            },
            {
              title: 'Marks, option-cum-preference form and allocation',
              text: 'Final answer keys and marks are published; candidates in the merit zone fill an option-cum-preference form ranking posts and departments. The Commission then declares a first round of tentative allocation, verifies identity, and publishes the final result; the department completes document verification before appointment.',
            },
          ],
        },
        {
          type: 'note',
          title: 'Practise the typing test on a computer, not a phone',
          text: 'The LDC/JSA test is 35 words per minute in English or 30 in Hindi — roughly 10,500 and 9,000 key depressions per hour — judged on accuracy over a 10-minute passage. Candidates who type fast on a phone keyboard and slowly on a physical one fail it every cycle. Fifteen minutes a day on a QWERTY keyboard from the Tier 1 result onwards is enough for most people.',
        },
      ],
    },
    pattern: [
      {
        type: 'p',
        text: 'The pattern is taken from the SSC CHSL 2026 notice of 7 September 2026. The full treatment, with the syllabus for each section and the skill-test rules, is on the exam pattern and syllabus pages.',
      },
      {
        type: 'table',
        caption: 'SSC CHSL Tier 1 exam pattern 2026: 100 questions, 200 marks, 60 minutes with a 15-minute sectional timer per part; 0.50 marks deducted per wrong answer; qualifying.',
        head: ['Part', 'Section', 'Questions', 'Marks', 'Time'],
        rows: [
          ['I', 'English Language (basic knowledge)', '25', '50', '15 minutes'],
          ['II', 'General Intelligence', '25', '50', '15 minutes'],
          ['III', 'Quantitative Aptitude (basic arithmetic skill)', '25', '50', '15 minutes'],
          ['IV', 'General Awareness', '25', '50', '15 minutes'],
          ['', 'Total', '100', '200', '60 minutes'],
        ],
      },
      {
        type: 'table',
        caption: 'SSC CHSL Tier 2 exam pattern 2026. One mark deducted per wrong answer in Sections 1, 2 and 3; Section 3 and the typing or skill test are qualifying; merit is built from Sections 1 and 2.',
        head: ['Session', 'Section and module', 'Questions', 'Marks', 'Time'],
        rows: [
          ['Session 1', 'Section 1 — Module 1 Mathematical Abilities; Module 2 Reasoning and General Intelligence', '30 + 30 = 60', '180', '1 hour (30 minutes per module)'],
          ['Session 1', 'Section 2 — Module 1 English Language and Comprehension; Module 2 General Awareness', '40 + 20 = 60', '180', '1 hour'],
          ['Session 1', 'Section 3 — Module 1 Computer Knowledge (qualifying)', '15', '45', '15 minutes'],
          ['Session 2', 'Section 3 — Module 2 Skill test (DEO): 8,000 key depressions per hour; 15,000 for the listed DEO posts', 'One printed passage', 'Qualifying', '15 minutes'],
          ['Session 2', 'Section 3 — Module 2 Typing test (LDC/JSA): 35 wpm English or 30 wpm Hindi', 'One passage', 'Qualifying', '10 minutes'],
        ],
      },
      {
        type: 'table',
        caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
        head: ['Category', 'Minimum qualifying marks'],
        rows: [
          ['Unreserved', '30%'],
          ['OBC and EWS', '25%'],
          ['All other categories', '20%'],
        ],
      },
      {
        type: 'p',
        text: 'The examination is conducted in multiple shifts, and marks are normalised by the formula the Commission published on 2 June 2025 before cut-offs and merit are computed. Normalised scores can therefore differ from raw scores, in either direction, depending on the difficulty of the shift you sat.',
      },
    ],
    studyPlan: [
      {
        type: 'p',
        text: 'CHSL is a class-12-level paper, but the competition is graduate-heavy and the cut-offs sit above 140 out of 200 for the general category. The syllabus is small enough that speed and accuracy, not coverage, decide the result — and the sectional timers in 2026 make speed inside each 15-minute block the thing to train.',
      },
      {
        type: 'steps',
        title: 'A four-month plan',
        items: [
          {
            title: 'Month 1: a diagnostic and the basics',
            text: 'Sit a full Tier 1 mock in week one. Then work the arithmetic that fills Quantitative Aptitude — percentages, ratio, averages, profit and loss, interest, time and work, speed and distance — alongside the reasoning question types, English grammar rules and a static general awareness spine.',
          },
          {
            title: 'Month 2: sections under the timer',
            text: 'Practise each section as a 15-minute block. Add algebra, geometry, trigonometry and mensuration for Tier 2 Section 1, and cloze tests and comprehension passages for Section 2. Start daily current affairs.',
          },
          {
            title: 'Month 3: full mocks and the error log',
            text: 'A full Tier 1 mock every two days, a Tier 2 mock every week, and an error log by topic that you revise from. Begin typing practice on a physical keyboard.',
          },
          {
            title: 'Month 4: revision and the exam',
            text: 'Revise from your own notes, keep current affairs going, and taper mocks in the last ten days. Read the pattern in the notice once more before the paper.',
          },
        ],
      },
      {
        type: 'list',
        title: 'Where the marks are',
        items: [
          {
            text: 'Quantitative Aptitude and Mathematical Abilities',
            note: 'The widest spread of scores; arithmetic speed in Tier 1, algebra and geometry depth in Tier 2.',
          },
          {
            text: 'Reasoning',
            note: 'Near-full marks are realistic with practice on series, analogies, coding, puzzles and figure questions.',
          },
          {
            text: 'English',
            note: 'Forty questions for 120 marks in Tier 2 — grammar, vocabulary, error spotting, cloze tests and comprehension. Daily reading matters more than rule lists.',
          },
          {
            text: 'General Awareness',
            note: 'Recall; static GK plus six months of current affairs.',
          },
          {
            text: 'Computer module and typing',
            note: 'Qualifying, and a fail is a fail. Practise both.',
          },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the notice of examination for CHSL 2026 and the Tier 1 result, final vacancy and first-round allocation write-ups of CHSL 2025 on the SSC notice board. Tier 1 and Tier 2 dates for 2026 have not been notified.',
      },
      {
        type: 'links',
        title: 'Official documents',
        items: [
          {
            label: 'Notice of Combined Higher Secondary (10+2) Level Examination 2026 (7 September 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsle_2026.pdf',
          },
          {
            label: 'CHSL 2025 Tier 1 result write-up with cut-offs (27 February 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_27022026.pdf',
          },
          {
            label: 'CHSL 2025 final vacancies (18 June 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/final_vacancies_18062026.pdf',
          },
          {
            label: 'CHSL 2025 first round of tentative allocation (17 August 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/FRTA_CHSLE_2025_17082026.pdf',
          },
          {
            label: 'SSC home page — notices, calendar and candidate login',
            href: 'https://ssc.gov.in/',
          },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'SSC CHSL syllabus — section-wise topics for English, general intelligence, quantitative aptitude, general awareness and the Tier 2 computer knowledge module.',
        lead: [
          'The CHSL syllabus overlaps heavily with SSC CGL, but the depth expected is genuinely different, particularly in mathematics. Preparing from CGL material is not wrong; preparing at CGL depth is usually an inefficient use of the months you have.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'English Language',
                'Spotting errors, fill in the blanks, synonyms and antonyms, spelling detection, idioms and phrases, one-word substitution, sentence improvement, active and passive voice, direct and indirect narration, para jumbles, cloze passage and comprehension passage. This section carries the highest scoring potential for a prepared candidate because it is almost entirely learnable in advance.',
              ],
              [
                'General Intelligence',
                'Semantic and figural analogy, classification, series, coding-decoding, problem solving, word building, numerical operations, symbolic operations, space orientation, Venn diagrams, figural pattern folding and completion, embedded figures, and critical thinking. Both verbal and non-verbal reasoning appear.',
              ],
              [
                'Quantitative Aptitude',
                'Number systems, fundamental arithmetical operations, percentage, ratio and proportion, square roots, averages, interest, profit and loss, discount, partnership, mixture and alligation, time and distance, time and work. Algebra covers basic identities and linear equations; geometry covers triangles, circles and their basic properties; mensuration covers standard plane and solid figures; trigonometry stays at ratios, identities and simple heights and distances; and data interpretation appears through bar graphs, pie charts, histograms and frequency polygons.',
              ],
              [
                'General Awareness',
                'India and its neighbouring countries — history, culture, geography, economic scene, general polity and the Constitution, scientific research, and current events. Questions test everyday general knowledge rather than specialist depth in any one area.',
              ],
              [
                'Computer Knowledge (Tier 2)',
                'Computer fundamentals, organisation, input and output devices, memory, software and operating system basics, MS Word, Excel and PowerPoint essentials, internet and email, and basic cyber security awareness.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'One practical note on scope. CHSL quantitative aptitude stays close to arithmetic and school-level algebra and geometry; the advanced mensuration and trigonometry that dominate CGL Tier 2 do not carry the same weight here. If your time is limited, arithmetic fluency and error-free English will move your score further than advanced mathematics will.',
          },
          {
            type: 'list',
            title: 'Where CHSL and CGL genuinely diverge',
            items: [
              { text: 'Mathematics depth', note: 'CHSL stays close to arithmetic and school algebra. The advanced trigonometry and coordinate geometry that decide CGL Tier 2 are not where CHSL marks live.' },
              { text: 'English weighting', note: 'proportionally larger in CHSL, because the sections are equal in size and the mathematics is shallower. English is the most reliable place to build a lead.' },
              { text: 'The skill test', note: 'CHSL has a typing or data entry requirement with no CGL equivalent, and it is part of the syllabus in every practical sense even though it carries no marks.' },
              { text: 'Question framing', note: 'CHSL questions are more often single-step. A CGL-trained candidate will find them easy and should convert that into speed rather than into complacency.' },
            ],
          },
          {
            type: 'p',
            text: 'Within general awareness, the CHSL syllabus wording — history, culture, geography, economic scene, general polity and scientific research — is broad enough to be unhelpful as a study plan. Past papers narrow it considerably: Indian polity and the freedom movement recur, general science stays at school level, and static items such as important days, national parks, classical dances and major awards appear far more often than the phrase about current events would suggest.',
          },
          {
            type: 'note',
            title: 'Read the syllabus once, then stop',
            text: 'The CHSL syllabus is short, and re-reading it does not produce insight. After one careful pass, switch to past papers for guidance on weighting — they answer the question the syllabus cannot, which is not what may be asked but what usually is.',
          },
        ],
      },
      'exam-pattern': {
        description: 'SSC CHSL exam pattern 2026 — Tier 1 and Tier 2 tables with questions, marks, time, sectional timers, negative marking and the DEO and LDC typing test standards.',
        heading: 'SSC CHSL exam pattern 2026: Tier 1, Tier 2, typing test and negative marking',
        lead: ['Every figure here is from the notice of 7 September 2026 — what each tier asks, how long each block runs, what a wrong answer costs and which marks build the merit list.'],
        blocks: [
          {
            type: 'p',
            text: 'CHSL has two computer-based tiers. Tier 1 is a one-hour, 200-mark screening paper; Tier 2 is a longer paper of harder questions with a computer module and a skill or typing test attached, and the merit list is built from its two objective sections. The 2026 notice keeps the Tier 2 scheme of recent cycles and adds sectional timers to Tier 1.',
          },
          {
            type: 'table',
            caption: 'SSC CHSL Tier 1 exam pattern 2026. Objective multiple choice in English, Hindi and the regional language chosen for Parts II–IV; 0.50 marks deducted per wrong answer.',
            head: ['Part', 'Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['I', 'English Language (basic knowledge)', '25', '50', '15 minutes'],
              ['II', 'General Intelligence', '25', '50', '15 minutes'],
              ['III', 'Quantitative Aptitude (basic arithmetic skill)', '25', '50', '15 minutes'],
              ['IV', 'General Awareness', '25', '50', '15 minutes'],
              ['', 'Total', '100', '200', '60 minutes (80 for scribe-eligible candidates)'],
            ],
          },
          {
            type: 'p',
            text: 'Tier 1 is qualifying. Separate cut-offs are declared for the DEO posts and for LDC/JSA, and candidates are shortlisted for Tier 2 in each list; the marks are not carried forward. Each part locks when its 15 minutes end, so the paper is four short tests rather than one hour to distribute.',
          },
          {
            type: 'table',
            caption: 'SSC CHSL Tier 2 exam pattern 2026, Session 1. One mark deducted per wrong answer; Section 3 is qualifying.',
            head: ['Section', 'Module', 'Questions', 'Marks', 'Time'],
            rows: [
              ['Section 1', 'Module 1 — Mathematical Abilities', '30', '90', '1 hour for the section, 30 minutes per module'],
              ['Section 1', 'Module 2 — Reasoning and General Intelligence', '30', '90', ''],
              ['Section 2', 'Module 1 — English Language and Comprehension', '40', '120', '1 hour for the section'],
              ['Section 2', 'Module 2 — General Awareness', '20', '60', ''],
              ['Section 3', 'Module 1 — Computer Knowledge Test', '15', '45', '15 minutes'],
            ],
          },
          {
            type: 'table',
            caption: 'SSC CHSL Tier 2, Session 2 — the qualifying skill and typing tests, held on the same day after Session 1.',
            head: ['Test', 'Who', 'Standard', 'Duration'],
            rows: [
              ['Skill test, Part A', 'DEO in the departments listed in the notice', '15,000 key depressions per hour, judged on correct entry of a printed English passage of about 3,700–4,000 key depressions', '15 minutes'],
              ['Skill test, Part B', 'All other DEO and DEO Grade A posts', '8,000 key depressions per hour on a printed passage of about 2,000–2,200 key depressions', '15 minutes'],
              ['Typing test', 'LDC and JSA', '35 words per minute in English (about 10,500 key depressions per hour) or 30 in Hindi (about 9,000), on accuracy over a set passage', '10 minutes'],
            ],
          },
          {
            type: 'list',
            title: 'How Tier 2 is scored',
            items: [
              {
                text: 'Merit comes from Sections 1 and 2',
                note: '120 questions for 360 marks. Section 3 Module 1 is mandatory and qualifying; Module 2 is qualifying and has no marks.',
              },
              {
                text: 'Session 2 is evaluated only for candidates who qualify Session 1',
                note: 'A candidate below the qualifying marks in Session 1 does not have the skill or typing test evaluated.',
              },
              {
                text: 'Wrong answers cost a full mark against three',
                note: 'The same arithmetic as CGL Tier 2: a four-option blind guess loses on average, a two-option guess is worth taking.',
              },
              {
                text: 'Timers are per section, and per module in Section 1',
                note: 'You cannot carry unused minutes from mathematics into reasoning, or from Section 1 into Section 2.',
              },
            ],
          },
          {
            type: 'table',
            caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
            head: ['Category', 'Minimum qualifying marks'],
            rows: [
              ['Unreserved', '30%'],
              ['OBC and EWS', '25%'],
              ['All other categories', '20%'],
            ],
          },
          {
            type: 'p',
            text: 'Marks are normalised across shifts by the Commission’s formula of 2 June 2025, and cut-offs are computed on normalised marks. For reference, the CHSL 2025 Tier 1 cut-offs for LDC/JSA, declared on 27 February 2026, were 144.26 (UR), 143.83 (OBC), 141.42 (EWS), 125.40 (SC) and 115.25 (ST) out of 200, with 37,520 candidates shortlisted for Tier 2.',
          },
          {
            type: 'links',
            title: 'Related SSC CHSL pages',
            items: [
              {
                label: 'SSC CHSL syllabus, section by section',
                to: '/government-exams/ssc/ssc-chsl/syllabus/',
              },
              {
                label: 'Free SSC CHSL mock tests on the 2026 pattern',
                to: '/government-exams/ssc/ssc-chsl/mock-tests/',
              },
              {
                label: 'SSC CHSL previous year papers',
                to: '/government-exams/ssc/ssc-chsl/previous-year-papers/',
              },
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SSC CHSL previous year papers — what past papers reveal about repeated topics in English, arithmetic and general awareness, and how to use them.',
        lead: [
          'CHSL papers repeat more than almost any other central examination. That makes past papers less a rehearsal and more a syllabus in disguise.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work through four or five years of CHSL papers and a short list emerges: the same one-word substitutions, the same idiom families, the same arithmetic shapes with different numbers, and general awareness questions clustered around a predictable set of themes. Candidates who tag and count these questions consistently outperform candidates who simply solve them.',
          },
          {
            type: 'steps',
            title: 'Reading past papers for trends',
            items: [
              { text: 'Extract every English vocabulary item into one list.', note: 'Synonyms, antonyms, one-word substitutions and idioms from five years of papers make a revision list that is directly relevant rather than generically long.' },
              { text: 'Tag arithmetic questions by shape.', note: '"Two people, different rates, work together" is a shape. Recognising it is faster than re-deriving the method each time.' },
              { text: 'Group general awareness by theme.', note: 'Awards, dances, national parks, constitutional articles, first-in-India facts. Themes repeat far more reliably than individual facts.' },
              { text: 'Time yourself only on the last two papers.', note: 'Keep them unread until the final month, so at least two of your measurements are honest.' },
            ],
          },
          {
            type: 'links',
            title: 'Practice and notes',
            items: [
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'list',
            title: 'What repeats most reliably in CHSL papers',
            items: [
              { text: 'One-word substitutions and idioms', note: 'a finite, heavily recycled pool. Extracting them across four years produces a list short enough to actually memorise, and it pays every cycle.' },
              { text: 'Spelling and error-spotting patterns', note: 'the same grammar rules tested through different sentences — subject-verb agreement, prepositions, articles and tense consistency account for most of it.' },
              { text: 'Arithmetic shapes', note: 'percentage change, profit and loss with successive discounts, simple two-worker time and work, ratio splits, averages with a replaced element. Five or six shapes cover a large share of the section.' },
              { text: 'Static general awareness', note: 'first-in-India facts, constitutional articles, national symbols, important days, dance forms and classical instruments, major awards. These recur across CHSL, MTS and GD papers alike.' },
            ],
          },
          {
            type: 'p',
            text: 'A practical way to run this is to keep three files rather than one. The first is a vocabulary list, added to from every paper and revised weekly. The second is an arithmetic shapes file, where you write the shape rather than the question — successive discount, find the single equivalent — with one worked instance beneath it. The third is a general awareness list grouped by theme. None of the three is a paper you re-solve; all three are documents you re-read.',
          },
          {
            type: 'p',
            text: 'Sequencing matters as much as method. Untimed solving comes first, while you are still using papers to learn what is asked; timed solving comes last, in the final six weeks, when the papers stop being a syllabus and become a rehearsal. Reversing that order is the usual mistake — it produces early scores that feel discouraging and teach very little, because you cannot pace a paper whose contents you have not yet mapped.',
          },
          {
            type: 'note',
            title: 'Keep two papers unopened',
            text: 'Set aside the two most recent papers and do not look at them until the last fortnight. Everything else you work through will be partly memorised by then; those two are the only honest measurement you will have left of where you actually stand.',
          },
        ],
      },
      'mock-tests': {
        description:
          'SSC CHSL mock tests — full-length practice on the current Tier 1 pattern with scoring, answer keys and section-wise analysis.',
        lead: [
          'For CHSL, a mock test measures two separate things: whether you know the material, and whether you can move fast enough to use what you know.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The second of those is the one candidates underestimate. A hundred questions in sixty minutes leaves no room for a slow start, and the difference between a shortlisted score and a near miss is usually a dozen questions that were within reach but never reached.',
          },
          {
            type: 'list',
            title: 'What to watch in your analysis',
            items: [
              { text: 'Questions left unattempted in your last section', note: 'if there is a cluster, your pacing collapsed rather than your knowledge.' },
              { text: 'Accuracy against attempt count', note: 'with half a mark deducted per error, attempting more is only useful while accuracy holds.' },
              { text: 'Time spent per section', note: 'English and general awareness should be quick; if they are not, the fix is revision, not practice.' },
              { text: 'Repeat errors across mocks', note: 'the same topic wrong three times is a gap, not bad luck.' },
            ],
          },
          {
            type: 'p',
            text: 'Take mocks on a fixed weekly rhythm rather than in bursts. Two a week with real analysis between them builds more than six in a single weekend, because the correction is where the improvement happens.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Sectional and topic practice', to: '/practice/' },
              { label: 'SSC CGL mock test', to: '/mock-tests/ssc-cgl/' },
            ],
          },
          {
            type: 'steps',
            title: 'A mock cycle that produces improvement',
            items: [
              { title: 'Sit the paper properly', text: 'Sixty minutes, one sitting, no pauses and nothing looked up. A mock taken in fragments measures nothing you can use.' },
              { title: 'Score it before you read any solution', text: 'Write down the raw score and, separately, your attempt count and your accuracy. Those two numbers explain the score better than the score explains itself.' },
              { title: 'Sort every error into one of three piles', text: 'A concept you do not know, a concept you know but applied carelessly, or a question you should have skipped. The three call for completely different responses.' },
              { title: 'Act on the largest pile only', text: 'Fixing the biggest category is what moves the next score. Spreading effort evenly across all three is why analysis so often produces no visible gain.' },
              { title: 'Log it and move on', text: 'One line per mock: date, score, attempts, accuracy, biggest error category. After six mocks that log tells you more than any individual paper did.' },
            ],
          },
          {
            type: 'p',
            text: 'Sectional practice deserves more of your week than full mocks do, at least until the final month. A full mock costs ninety minutes with analysis and tells you about four subjects at once, which is exactly the wrong resolution while you are still building any one of them. Twenty-minute sectional sets give sharper feedback, fit into an ordinary evening, and can be repeated on the same topic until the accuracy actually shifts.',
          },
          {
            type: 'note',
            title: 'Practise typing on the same schedule',
            text: 'Ten minutes of typing practice on the days you take a mock costs almost nothing and keeps the skill test from becoming a separate project later. Speed built in small daily increments holds up under exam nerves in a way that speed built in a final fortnight does not.',
          },
        ],
      },
      preparation: {
        description:
          'SSC CHSL preparation strategy — subject priorities for 12th-pass candidates, a realistic timeline and how to build typing speed alongside study.',
        lead: [
          'CHSL rewards a narrower, more disciplined preparation than its reputation suggests. The syllabus is manageable; the competition is not, which means the marginal mark matters more than usual.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A sequence that fits the exam',
            items: [
              { text: 'Begin typing practice on day one.', note: 'Fifteen minutes daily, every day, for the whole preparation. It is the only component that cannot be compressed later.' },
              { text: 'Take a diagnostic mock in the first week.', note: 'Before studying anything. It tells you which of the four sections is already carrying you and which is not.' },
              { text: 'Fix English first.', note: 'It is the most learnable section and the most reliably scoring one. Grammar rules and a running vocabulary list, daily.' },
              { text: 'Build arithmetic to fluency.', note: 'Percentage, ratio, averages, profit and loss, time and work, time and distance. Depth beyond arithmetic has a poor return at this level.' },
              { text: 'Add reasoning practice.', note: 'Largely a speed skill. Non-verbal reasoning in particular improves quickly with repetition.' },
              { text: 'Keep general awareness on a daily drip.', note: 'One static source revised repeatedly, one current affairs digest. Never a pile of sources read once.' },
              { text: 'Final six weeks — mocks, corrections, revision.', note: 'No new topics. Consolidate what is already partly known.' },
            ],
          },
          {
            type: 'list',
            title: 'Common CHSL mistakes',
            items: [
              { text: 'Preparing at SSC CGL depth', note: 'spending months on advanced trigonometry that CHSL does not weight heavily, while English vocabulary stays weak.' },
              { text: 'Leaving typing to the end', note: 'the most avoidable way to lose a post you already earned on paper.' },
              { text: 'Attempting everything', note: 'with negative marking, a disciplined skip is worth more than an optimistic guess.' },
              { text: 'Studying without a clock', note: 'the exam is a speed test; untimed practice trains the wrong thing.' },
            ],
          },
          {
            type: 'p',
            text: 'A realistic timeline for a first-time candidate studying consistently is four to six months, assuming school mathematics is intact. If it is not, add a month at the start for arithmetic fundamentals rather than trying to repair them while also practising for speed.',
          },
          {
            type: 'p',
            text: 'The competition arithmetic for CHSL is worth stating plainly, because it explains why the advice above is narrower than most study plans. A very large number of applicants sit this exam, the syllabus is shallow enough that many of them know most of the material, and the paper is short. Scores therefore bunch tightly and the merit position turns on a handful of marks. That is why speed, a disciplined skip and one section you are genuinely strong in matter more here than raw coverage does — coverage is table stakes.',
          },
          {
            type: 'defs',
            items: [
              [
                'If you have six months or more',
                'Build properly. English and arithmetic from the first week, general awareness as a daily habit from the second month, reasoning as a short intensive project, and full mocks only in the last two months. Typing practice ten minutes a day throughout.',
              ],
              [
                'If you have three months',
                'Drop the ambition to cover everything. Fix English grammar, drill the arithmetic shapes that past papers show recurring, revise static general awareness in short daily passes, and practise reasoning for speed. Two mocks a week from week four.',
              ],
              [
                'If you have one month',
                'Stop studying new material. Work past papers, your own error log and static general awareness, and take mocks under real timing. Typing practice becomes daily and non-negotiable, because it is the one requirement that cannot be improvised.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Applying for CGL as well',
            text: 'Many candidates sit CHSL and CGL in the same year, and the overlap makes that sensible. Prepare at CGL depth for the shared subjects if you are serious about both, but keep the CHSL-specific work — typing speed and single-step arithmetic speed — running separately. The two exams reward different final months, and treating CHSL as a by-product of CGL preparation is how candidates end up under-prepared for the paper they were most likely to clear.',
          },
        ],
      },
      'study-material': {
        description:
          'SSC CHSL study material — English, quantitative aptitude, reasoning and general awareness notes matched to the CHSL syllabus depth.',
        lead: [
          'Notes matched to what CHSL actually asks, rather than to the deeper CGL syllabus that most shared material is written for.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'English deserves the largest share of your reading time, because it is where preparation converts most reliably into marks. Grammar rules are finite, vocabulary is cumulative, and both are entirely within your control before the exam — unlike general awareness, where a question can simply fall outside anything you read.',
          },
          {
            type: 'links',
            title: 'Subject notes for SSC CHSL',
            items: [
              { label: 'English grammar and vocabulary notes', to: '/study-material/english/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
            ],
          },
          {
            type: 'list',
            title: 'Using the notes efficiently',
            items: [
              'Keep one running vocabulary notebook rather than annotating several books.',
              'After each arithmetic topic, solve twenty mixed questions before moving on — mixed, so you practise recognising the shape as well as the method.',
              'Revise general awareness in short passes rather than long sittings; recall improves with frequency, not duration.',
              'Return to a finished topic after three days and again after two weeks.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'English — the highest-return subject here',
                'Grammar rules first, because they are finite and transfer to every question type. Then a running vocabulary list built from past papers rather than from a dictionary, revised weekly. Then one short comprehension passage a day for reading speed, which is the part that cannot be crammed.',
              ],
              [
                'Quantitative aptitude — arithmetic to fluency',
                'Percentage, ratio, average, profit and loss, simple and compound interest, time and work, time and distance, and basic mensuration. Fluency here means solving without writing intermediate steps, which is a different achievement from knowing the method.',
              ],
              [
                'General awareness — revision, not study',
                'Polity, the freedom movement, geography, school-level general science and static items. Read in short passes, frequently, and accept that the goal is recognition rather than understanding.',
              ],
              [
                'Reasoning — volume over theory',
                'Series, coding-decoding, analogy, classification, blood relations, direction sense and the non-verbal set. Almost all of it improves through repetition, and non-verbal questions in particular should be practised on paper where you can annotate the figures.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'One decision worth making early is which single source you will finish for each subject. CHSL candidates accumulate material easily — the syllabus is common enough that free notes are everywhere — and the accumulation itself becomes the problem. Three half-read books on quantitative aptitude leave you with three partial mental models of the same topic. One finished source, worked twice, leaves you with one reliable one.',
          },
          {
            type: 'note',
            title: 'What to carry into the final fortnight',
            text: 'By the last two weeks your reading list should be down to three documents: your own error log, your vocabulary list and your static general awareness sheet. Anything longer than that will not be read carefully, and re-reading a full textbook at that stage displaces the revision that actually moves marks.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What qualification do I need for SSC CHSL?',
        a: 'A class 12 (10+2) pass from a recognised board is the general requirement, which is what makes CHSL the most widely accessible SSC examination. Some Data Entry Operator posts specify subject requirements at the twelfth level, so check the post-wise eligibility table in the current notification.',
      },
      {
        q: 'Is SSC CHSL easier than SSC CGL?',
        a: 'The papers are easier in the sense that the mathematics stays closer to school level and the syllabus depth is lower. The competition is not easier — the eligible pool is far larger because the qualification requirement is lower, so the cutoff behaves differently. Preparing at CGL depth is usually a poor use of limited time; preparing to CHSL depth with high accuracy and speed is the better fit.',
      },
      {
        q: 'Which posts are filled through SSC CHSL?',
        a: 'Lower Division Clerk and Junior Secretariat Assistant posts in central government ministries, departments and subordinate offices, and Data Entry Operator posts across various ministries. The skill test differs between the clerical and data entry streams.',
      },
      {
        q: 'What is the SSC CHSL Tier 1 exam pattern for 2026?',
        a: 'Tier 1 is 100 objective questions for 200 marks in 60 minutes — English Language, General Intelligence, Quantitative Aptitude and General Awareness, 25 questions of 2 marks each — with a 15-minute sectional timer on each part from 2026. Half a mark is deducted for a wrong answer. It is qualifying; the merit list is built from Tier 2.',
      },
      {
        q: 'What is the SSC CHSL Tier 2 exam pattern?',
        a: 'Session 1 has Section 1 (Mathematical Abilities 30 questions and Reasoning 30 questions, 180 marks, one hour with 30 minutes per module), Section 2 (English 40 and General Awareness 20, 180 marks, one hour) and Section 3 Module 1 (Computer Knowledge, 15 questions, 45 marks, 15 minutes, qualifying), with one mark deducted per wrong answer. Session 2 is the qualifying skill test for DEO (8,000 key depressions per hour, or 15,000 for the DEO posts the notice lists, 15 minutes) or the typing test for LDC/JSA (35 wpm English or 30 wpm Hindi, 10 minutes).',
      },
      {
        q: 'What were the SSC CHSL 2025 cut-off marks?',
        a: 'The Tier 1 result of 27 February 2026 put the LDC/JSA cut-offs at 144.26 for UR, 143.83 for OBC, 141.42 for EWS, 125.40 for SC and 115.25 for ST out of 200 on normalised marks, with 37,520 candidates shortlisted for Tier 2. DEO cut-offs are declared separately and are usually higher.',
      },
      {
        q: 'What are the SSC CHSL 2026 exam dates?',
        a: 'The notice was published on 7 September 2026 with applications open until 7 October 2026, fee payment until 8 October and the correction window from 14 to 16 October 2026. The Tier 1 and Tier 2 dates are to be notified later; the 2025 cycle ran Tier 1 in November and Tier 2 the following April.',
      },
      {
        q: 'What is a cloze test in SSC CHSL English?',
        a: 'A cloze test is a passage with several words removed; each blank is a question with four options and the right answer is the word that fits both the grammar and the meaning of the passage. Cloze tests appear in Tier 1 English and in Tier 2 Section 2, and reward reading the whole passage first, then filling the blanks that are certain before the ones that are not.',
      },
      {
        q: 'Is the typing test compulsory in SSC CHSL, and what happens if I fail it?',
        a: 'Yes for every post. LDC and JSA candidates must type 35 words per minute in English or 30 in Hindi for 10 minutes; DEO candidates must reach 8,000 key depressions per hour (15,000 for the listed departments) for 15 minutes. The tests are qualifying, so failing one removes you from the final result regardless of your Tier 2 marks. PwBD candidates exempt under the notice must produce the prescribed certificate.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SSC MTS
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ssc-mts',
    path: '/government-exams/ssc/ssc-mts/',
    name: 'SSC MTS',
    fullName: 'Staff Selection Commission Multi-Tasking (Non-Technical) Staff Examination',
    authority: 'Staff Selection Commission (SSC)',
    official: 'ssc.gov.in',
    seoTitle: 'SSC MTS Exam Pattern 2026: Session 1 & 2 Syllabus, Havaldar PET, Dates',
    metaDescription:
      'SSC MTS 2026 exam pattern and syllabus — Session 1 and Session 2 marks, time, negative marking, Havaldar PET/PST, eligibility, vacancies, dates and free mocks.',
    heroTitle: 'SSC MTS Exam Pattern and Syllabus 2026: Session 1, Session 2, Havaldar PET and Free Mock Tests',
    lead: [
      'SSC MTS is the commission’s class-10 recruitment, filling Multi-Tasking Staff posts across central government offices and Havaldar posts in the CBIC and the Narcotics Control Bureau. It is the entry point that asks least in qualification terms and, for a great many candidates, the first realistic route into central government service.',
      'Its paper has one structural feature that no other SSC examination shares, and it changes how you should attempt it: the two sessions apply different negative marking rules.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Level', 'Class 10 pass from a recognised board as on the cut-off date'],
      ['Posts', 'Multi Tasking (Non-Technical) Staff, Pay Level 1; Havaldar in CBIC and CBN, Pay Level 1'],
      ['Stages', 'Computer Based Examination in two sessions (Session 1 qualifying, Session 2 merit) → PET/PST for Havaldar → verification'],
      ['Age', '18–25 for MTS, 18–27 for Havaldar and some MTS posts, on the cut-off date'],
      ['Next cycle', 'MTS 2026 notice not issued as of 12 September 2026; the calendar had placed the CBE tentatively in September–November 2026'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Multi-Tasking Staff examination recruits for non-technical Group C posts in central government ministries, departments and offices — general support roles covering record keeping, office upkeep, dispatch and assistance duties. The same examination also fills Havaldar posts in the Central Board of Indirect Taxes and Customs and the Central Bureau of Narcotics, which carry an additional physical requirement.',
      },
      {
        type: 'p',
        text: 'Because the qualification bar is a class 10 pass, MTS draws an enormous field. What separates candidates is rarely obscure knowledge — it is arithmetic accuracy under time pressure and, increasingly, general awareness and English preparation that most applicants neglect entirely.',
      },
      {
        type: 'list',
        title: 'The two post streams',
        items: [
          { text: 'Multi-Tasking Staff', note: 'general central government offices; selection is on the written examination and document verification.' },
          { text: 'Havaldar (CBIC and CBN)', note: 'adds a physical efficiency test and physical standard test after the written stage, with separate standards for male and female candidates.' },
        ],
      },
      {
        type: 'note',
        title: 'The age band differs between the two streams',
        text: 'Havaldar posts have historically carried a different upper age limit from general MTS posts, and both bands have been revised between cycles. Confirm the band that applies to the stream you are applying for in the current notification before assuming eligibility.',
      },
    ],
    stages: [
      {
        name: 'Computer Based Examination — Session 1',
        mode: 'Objective, 40 questions, 120 marks, 45 minutes, no negative marking',
        detail: 'Numerical and Mathematical Ability (20 questions, 60 marks) and Reasoning Ability and Problem Solving (20 questions, 60 marks). Session 1 is qualifying: a candidate who does not reach the minimum marks here does not have Session 2 evaluated. The session closes automatically at 45 minutes and Session 2 starts immediately.',
      },
      {
        name: 'Computer Based Examination — Session 2',
        mode: 'Objective, 50 questions, 150 marks, 45 minutes, one mark deducted per wrong answer',
        detail: 'General Awareness (25 questions, 75 marks) and English Language and Comprehension (25 questions, 75 marks). Merit for both MTS and Havaldar is built solely from Session 2, on normalised marks.',
      },
      {
        name: 'PET and PST — Havaldar only',
        mode: 'Physical, conducted by CBIC and CBN',
        detail: 'Candidates are shortlisted for Havaldar in the ratio 1:7 on Session 2 marks. Men walk 1,600 metres in 15 minutes; women walk 1 kilometre in 20 minutes. Height 157.5 cm and chest 81 cm with 5 cm expansion for men; height 152 cm and weight 48 kg for women, with relaxations for Garhwalis, Assamese, Gorkhas and Scheduled Tribes. Qualifying only.',
      },
      {
        name: 'Option-cum-preference, tentative allocation and verification',
        mode: 'Online form, then verification by the department',
        detail: 'Candidates are considered only for the state or region (CCA) they opted for. The Commission publishes a first round of tentative allocation for MTS and Havaldar together after the Havaldar PET/PST, then the final result; the department verifies documents before appointment.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the SSC notice board. No notice for the MTS and Havaldar Examination 2026 had been issued by this date. The Commission’s 2026 calendar, published in January, had placed the notice tentatively at the end of June and the Computer Based Examination in September–November 2026, but the schedule has slipped — as CGL 2026 did — so the notice should be expected in the coming weeks and the CBE at the end of 2026 or early 2027. The 2025 cycle is still running: the Havaldar PET/PST was held from 24 to 31 August 2026 and the first round of tentative allocation for MTS and Havaldar is due next.',
      },
      {
        type: 'table',
        caption: 'The SSC MTS 2025 cycle, which the 2026 cycle will follow in shape.',
        head: ['Event', 'Date'],
        rows: [
          ['Notice published', '26 June 2025'],
          ['Online applications', '26 June – 24 July 2025; fee to 25 July; correction 29–31 July 2025'],
          ['Applications received', '36,19,834'],
          ['Tentative vacancies (list of 27 November 2025)', '7,948 for MTS and Havaldar combined'],
          ['Computer Based Examination', 'Originally 20 September – 24 October 2025; held 4–20 February 2026 with self-slot selection; 8,04,633 candidates appeared'],
          ['Tentative answer key', '3 March 2026'],
          ['Result of CBE (Havaldar shortlist for PET/PST)', '3 August 2026'],
          ['Havaldar PET/PST by CBIC', '24–31 August 2026'],
          ['First round of tentative allocation (MTS and Havaldar)', 'To follow'],
        ],
      },
      {
        type: 'note',
        title: 'What to prepare for while the 2026 notice is awaited',
        text: 'The two-session scheme — Session 1 qualifying with no negative marking, Session 2 counting for merit with one mark deducted per wrong answer — has been stable since 2023 and the 2025 notice retained it. Eligibility, age and the Havaldar physical standards below are from the 2025 notice; confirm them against the 2026 notice on the day it appears.',
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'These conditions are from the MTS and Havaldar notice of 26 June 2025, the latest issued; the 2026 notice will restate them with a new cut-off date. Eligibility is verified only at document verification after the result.',
      },
      {
        type: 'list',
        title: 'Educational qualification',
        items: [
          {
            text: 'MTS and Havaldar',
            note: 'Matriculation (class 10) or equivalent from a recognised board, as on the cut-off date in the notice (1 August 2025 in the last cycle).',
          },
        ],
      },
      {
        type: 'table',
        caption: 'Age on the cut-off date, from the 2025 notice, with relaxations beyond the upper limit.',
        head: ['Post or category', 'Age'],
        rows: [
          ['MTS (most posts)', '18–25 years'],
          ['Havaldar in CBIC and CBN, and a few MTS posts', '18–27 years'],
          ['SC and ST', '+5 years'],
          ['OBC (non-creamy layer)', '+3 years'],
          ['Persons with benchmark disabilities', '+10 years (UR), +13 (OBC), +15 (SC/ST)'],
          ['Ex-servicemen', '+3 years after deducting military service'],
          ['Central Government civilian employees with 3 years’ regular service', 'Up to 40 years (45 for SC/ST)'],
          ['Widows, divorced and judicially separated women who have not remarried', 'Up to 35 years (40 for SC/ST)'],
        ],
      },
      {
        type: 'table',
        caption: 'Physical standards for Havaldar in CBIC and CBN, tested at PET/PST after the CBE.',
        head: ['Standard', 'Male', 'Female'],
        rows: [
          ['Walk', '1,600 metres in 15 minutes', '1 kilometre in 20 minutes'],
          ['Height', '157.5 cm (relaxable by 5 cm for Garhwalis, Assamese, Gorkhas and Scheduled Tribes)', '152 cm (relaxable by 2.5 cm for the same groups)'],
          ['Chest', '81 cm fully expanded with minimum 5 cm expansion', '—'],
          ['Weight', '—', '48 kg (relaxable by 2 kg for the same groups)'],
        ],
      },
      {
        type: 'list',
        title: 'Other conditions',
        items: [
          {
            text: 'Fee',
            note: '₹100 online; women and SC, ST, PwBD and ex-servicemen candidates are exempt.',
          },
          {
            text: 'Choice of region',
            note: 'Candidates opt for the state or union territory (CCA) whose vacancies they wish to be considered for, and are considered only there. MTS vacancies are state-wise.',
          },
          {
            text: 'Pay',
            note: 'Pay Level 1 of the 7th CPC pay matrix (₹18,000–56,900) for both MTS and Havaldar.',
          },
        ],
      },
    ],
    procedure: {
      eyebrow: 'Application to appointment',
      heading: 'How to apply for SSC MTS, what the two sessions look like on the day, and how MTS and Havaldar are allotted',
      intro: 'The steps as they ran in the 2025 cycle; the 2026 notice will set the dates.',
      blocks: [
        {
          type: 'steps',
          title: 'The SSC MTS process from registration to result',
          items: [
            {
              title: 'One-Time Registration on ssc.gov.in',
              text: 'Create an OTR profile once on the Commission’s portal. Registration asks for Aadhaar-based verification, a mobile number and e-mail that remain with you for the whole cycle, and your basic educational and category details. The OTR number and password are what you log in with at every later stage — exam-city intimation, admit card, answer-key challenge, result and option form — so keep them safe.',
            },
            {
              title: 'Fill the online application for SSC MTS',
              text: 'Log in, pick the examination, confirm the OTR details, choose the examination centre preferences and the medium of the paper, and upload or capture the photograph and signature exactly as the notice specifies. The declaration you sign at the end binds you to the eligibility conditions, and the Commission verifies documents only at the end of the process — an ineligible candidate can go through every stage and be dropped at verification.',
            },
            {
              title: 'Pay the fee',
              text: 'The fee is ₹100, paid online, with the last date a day after applications close. Women and SC, ST, PwBD and ex-servicemen candidates are exempt. The fee is not refunded.',
            },
            {
              title: 'Use the correction window if you need it',
              text: 'A three-day correction window opens about a week after applications close. The Commission charges ₹200 for the first corrected submission and ₹500 for the second, from every candidate regardless of category. Some fields — notably the OTR identity details — cannot be changed at this point, which is why the OTR should be filled carefully in the first place.',
            },
            {
              title: 'Exam-city intimation, then the admission certificate',
              text: 'Roughly two weeks before the examination the candidate login shows the city allotted; the admission certificate itself is released only three to four days before the date. Print it, and carry it with an original photo identity document that carries the same date of birth as your application.',
            },
            {
              title: 'On the day: biometrics, frisking and the clock',
              text: 'Report at the time on the admission certificate; entry closes before the shift begins. Expect biometric capture and frisking, and expect the paper to be delivered with the timers the notice describes — a section or session that has closed cannot be reopened. Rough sheets are provided; nothing electronic is allowed inside.',
            },
            {
              title: 'Tentative answer key and challenge',
              text: 'A few days after the last shift the Commission uploads tentative answer keys with each candidate’s response sheet. Objections are filed online only, within the announced window, on payment of a per-question fee that is not refunded. Subject-matter experts examine the objections and the final key is used for evaluation.',
            },
            {
              title: 'Result, marks and the next stage',
              text: 'Results are published as PDF write-ups on the notice board with category-wise cut-offs and the count of candidates shortlisted; individual marks are released in the login shortly afterwards. Candidates for the next stage receive fresh admission certificates through the same login.',
            },
            {
              title: 'Self-slot selection',
              text: 'In the 2025 cycle the Commission let candidates choose their examination date and shift from the slots available in their city, through the login, a few weeks before the CBE. Slots are first come, first served, so log in on the day the facility opens.',
            },
            {
              title: 'The two sessions on one screen',
              text: 'Session 1 runs for 45 minutes and closes automatically; Session 2 starts at once for another 45 minutes. Scribe-eligible candidates get 60 minutes per session. You cannot return to Session 1, and Session 2 is evaluated only if you qualify Session 1.',
            },
            {
              title: 'Result of the CBE and the Havaldar shortlist',
              text: 'The result is published in the ratio 1:7 (vacancies to candidates) for Havaldar, on Session 2 marks, with CCA-wise and category-wise cut-offs. PET/PST is conducted by CBIC and CBN a few weeks later; a candidate who fails it is still considered for MTS.',
            },
            {
              title: 'Option-cum-preference, first round of tentative allocation and verification',
              text: 'The Commission publishes a first round of tentative allocation for MTS and Havaldar together after the Havaldar PET/PST, verifies identity, and then declares the final result; departments verify documents before appointment.',
            },
          ],
        },
      ],
    },
    pattern: [
      {
        type: 'p',
        text: 'The pattern is the scheme in the MTS and Havaldar notice of 26 June 2025, carried unchanged from 2023 and expected in the 2026 notice. Both sessions are held on the same day, back to back, and both are mandatory.',
      },
      {
        type: 'table',
        caption: 'SSC MTS exam pattern — Session 1: 40 questions, 120 marks, 45 minutes, no negative marking, qualifying.',
        head: ['Part', 'Subject', 'Questions', 'Marks'],
        rows: [
          ['I', 'Numerical and Mathematical Ability', '20', '60'],
          ['II', 'Reasoning Ability and Problem Solving', '20', '60'],
          ['', 'Total', '40', '120'],
        ],
      },
      {
        type: 'table',
        caption: 'SSC MTS exam pattern — Session 2: 50 questions, 150 marks, 45 minutes, one mark deducted per wrong answer. Merit for MTS and Havaldar is built from Session 2 only.',
        head: ['Part', 'Subject', 'Questions', 'Marks'],
        rows: [
          ['I', 'General Awareness', '25', '75'],
          ['II', 'English Language and Comprehension', '25', '75'],
          ['', 'Total', '50', '150'],
        ],
      },
      {
        type: 'table',
        caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
        head: ['Category', 'Minimum qualifying marks'],
        rows: [
          ['Unreserved', '30%'],
          ['OBC and EWS', '25%'],
          ['All other categories', '20%'],
        ],
      },
      {
        type: 'p',
        text: 'Session 1 is evaluated first; Session 2 is evaluated only for candidates who reach the qualifying marks in Session 1. The examination is conducted in multiple shifts, and marks are normalised by the formula the Commission published on 2 June 2025 before cut-offs and merit are computed. Normalised scores can therefore differ from raw scores, in either direction, depending on the difficulty of the shift you sat. The CBE is offered in English, Hindi and 13 regional languages, and in the 2025 cycle the Commission fixed CCA-wise and category-wise cut-offs in Session 2.',
      },
    ],
    studyPlan: [
      {
        type: 'p',
        text: 'MTS is a class-10-level paper with over 36 lakh applicants, which means the paper is not hard but the cut-off is unforgiving. Session 2 — general awareness and English — builds the merit list and carries negative marking; Session 1 only needs to be cleared. Most candidates prepare in the reverse proportion.',
      },
      {
        type: 'steps',
        title: 'A three-month plan',
        items: [
          {
            title: 'Month 1: Session 1 to a safe level, Session 2 foundations',
            text: 'Number system, fractions, percentages, ratio, averages, profit and loss, simple interest, time and work, and basic geometry and data interpretation for numerical ability; series, analogies, coding, classification, blood relations, directions and figure questions for reasoning. Alongside, English grammar basics, vocabulary and a static general awareness spine — history, polity, geography, science, economy.',
          },
          {
            title: 'Month 2: Session 2 depth and timing',
            text: 'Daily reading for English comprehension, cloze tests, error spotting and sentence improvement. Daily current affairs covering the six months before the exam. Sectional tests of 45 minutes to fix pace: 40 questions in Session 1 is 67 seconds each, 50 in Session 2 is 54.',
          },
          {
            title: 'Month 3: full mocks and revision',
            text: 'A full two-session mock every second day, an error log by topic, and revision from your own notes. Havaldar candidates should start a daily brisk walk to be sure of 1,600 metres in 15 minutes.',
          },
        ],
      },
      {
        type: 'list',
        title: 'Two rules that follow from the pattern',
        items: [
          {
            text: 'Attempt everything in Session 1',
            note: 'There is no negative marking, so an unanswered question is a mark left on the table. Mark the best guess on every question before the 45 minutes end.',
          },
          {
            text: 'Guess selectively in Session 2',
            note: 'One mark off against three on; a four-option blind guess loses, a two-option guess is worth taking. General awareness is the section where unknown means unknown — move on.',
          },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the notice of examination for MTS and Havaldar 2025, the tentative vacancy list of 27 November 2025, the CBE result write-up of 3 August 2026 and the PET/PST schedule of 20 August 2026 on the SSC notice board, and the Commission’s 2026 examination calendar. The 2026 notice was not yet published.',
      },
      {
        type: 'links',
        title: 'Official documents',
        items: [
          {
            label: 'Notice of MTS and Havaldar (CBIC and CBN) Examination 2025 (26 June 2025)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_mts_2025.pdf',
          },
          {
            label: 'Tentative vacancies of MTS and Havaldar 2025 (27 November 2025)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Tentative_Vacancy_27112025.pdf',
          },
          {
            label: 'Self-slot selection notice for the MTS 2025 CBE (16 January 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_16012026.pdf',
          },
          {
            label: 'MTS 2025 result of the CBE — Havaldar shortlist and cut-offs (3 August 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_mts_03082026.pdf',
          },
          {
            label: 'Schedule of PET/PST for Havaldar, MTS 2025 (20 August 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_20082026.pdf',
          },
          {
            label: 'SSC home page — notices, calendar and candidate login',
            href: 'https://ssc.gov.in/',
          },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'SSC MTS syllabus — Session I numerical and reasoning topics, Session II general awareness and English, written for 10th-pass candidates.',
        lead: [
          'The MTS syllabus is short enough to read in one sitting, which makes it tempting to skim. The candidates who convert it into marks are the ones who take the general awareness and English half as seriously as the arithmetic half.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Numerical and Mathematical Ability (Session I)',
                'Number systems, integers and their properties, LCM and HCF, decimals and fractions, the four fundamental arithmetical operations, percentage, ratio and proportion, averages, simple interest, profit and loss, discount, work and time, distance and time, basic algebraic identities and linear equations, simple geometry of lines, angles, triangles and circles, mensuration of squares, rectangles, triangles, circles and simple solids, and elementary statistics through bar graphs, pie charts and tables.',
              ],
              [
                'Reasoning Ability and Problem Solving (Session I)',
                'Alphanumeric series, coding and decoding, analogy, classification and odd one out, following directions, similarities and differences, jumbling, problem solving and analysis, non-verbal reasoning through figure patterns, folding and unfolding, and simple spatial relationships. Questions are non-verbal and verbal in roughly equal measure.',
              ],
              [
                'General Awareness (Session II)',
                'Everyday knowledge of the environment and its application to society — Indian history and the freedom movement, geography, the Constitution and political system, economics, general science, sports, culture, and current events of national and international significance. The level is general rather than specialist.',
              ],
              [
                'English Language and Comprehension (Session II)',
                'Basic English comprehension, vocabulary, grammar fundamentals, sentence structure, synonyms and antonyms, spotting errors and correct usage, and a short reading passage. Preparation here has an unusually high return because so many candidates skip it entirely.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A note on scope creep. Material marketed for SSC CGL will take you far past what MTS asks, particularly in algebra, trigonometry and advanced mensuration. Time spent there is time not spent on the arithmetic accuracy and general awareness breadth that actually determine an MTS result.',
          },
          {
            type: 'list',
            title: 'What the syllabus wording hides',
            items: [
              { text: 'Fundamental arithmetical operations', note: 'means speed, not scope. The operations are the ones you learned at school; what is being examined is whether you can perform them accurately under a clock without a calculator.' },
              { text: 'Everyday knowledge of the environment and its application to society', note: 'is the general awareness section, and in practice it means school-level science, Indian polity basics, geography, the freedom movement and static items such as important days and national symbols.' },
              { text: 'Basic English comprehension', note: 'is genuinely basic — articles, prepositions, tenses, common vocabulary and a short passage. It is the section most candidates concede without trying, which is precisely why it is worth attempting.' },
              { text: 'Problem solving and analysis', note: 'in the reasoning section is mostly pattern work: series, analogy, classification, coding and simple figure-based questions rather than anything abstract.' },
            ],
          },
          {
            type: 'p',
            text: 'Session I and Session II are not merely different subjects; they reward different preparation. Session I is a speed test on material you already broadly know, so preparation there means drilling until the arithmetic is automatic. Session II is a knowledge test on material you may not know at all, so preparation there means accumulation — a little every day, revised often. Studying both the same way is the most common reason MTS scores stall.',
          },
          {
            type: 'note',
            title: 'Choosing your language section',
            text: 'Where the paper offers a language choice, pick the one you read fastest, not the one you believe looks better. Comprehension under time pressure is a reading-speed problem before it is a grammar problem, and a candidate reading comfortably in their stronger language will finish the section with minutes to spare that can go to arithmetic.',
          },
        ],
      },
      'exam-pattern': {
        description: 'SSC MTS exam pattern 2026 — Session 1 and Session 2 tables with questions, marks, time and negative marking, the qualifying rule and Havaldar PET/PST standards.',
        heading: 'SSC MTS exam pattern 2026: Session 1, Session 2, negative marking and the Havaldar PET',
        lead: ['One computer-based test in two back-to-back sessions. Session 1 is qualifying with no penalty for a wrong answer; Session 2 builds the merit list and deducts a mark for every mistake.'],
        blocks: [
          {
            type: 'p',
            text: 'The MTS Computer Based Examination is a single sitting of 90 minutes divided into two sessions of 45 minutes each, on the same screen, with no gap. Session 1 closes automatically and Session 2 opens immediately. Both sessions are compulsory, and the way they are scored is different enough that they should be attempted differently.',
          },
          {
            type: 'table',
            caption: 'SSC MTS exam pattern, Session 1. Objective; no negative marking; qualifying only.',
            head: ['Part', 'Subject', 'Questions', 'Marks', 'Time'],
            rows: [
              ['I', 'Numerical and Mathematical Ability', '20', '60', '45 minutes for the session (60 for scribe-eligible candidates)'],
              ['II', 'Reasoning Ability and Problem Solving', '20', '60', ''],
              ['', 'Total', '40', '120', ''],
            ],
          },
          {
            type: 'table',
            caption: 'SSC MTS exam pattern, Session 2. Objective; one mark deducted per wrong answer; merit is built from this session alone.',
            head: ['Part', 'Subject', 'Questions', 'Marks', 'Time'],
            rows: [
              ['I', 'General Awareness', '25', '75', '45 minutes for the session (60 for scribe-eligible candidates)'],
              ['II', 'English Language and Comprehension', '25', '75', ''],
              ['', 'Total', '50', '150', ''],
            ],
          },
          {
            type: 'list',
            title: 'The rules that shape the paper',
            items: [
              {
                text: 'Session 1 is evaluated first',
                note: 'A candidate who does not reach the minimum qualifying marks in Session 1 — 30 per cent for UR, 25 for OBC and EWS, 20 for the rest — is not evaluated in Session 2 at all.',
              },
              {
                text: 'Merit is Session 2 only',
                note: 'Session 1 marks are not added. Two candidates with 120 and 60 in Session 1 and the same Session 2 score are tied on merit.',
              },
              {
                text: 'Negative marking applies only in Session 2',
                note: 'One mark per wrong answer against three for a correct one. Attempt every question in Session 1; guess only between two options in Session 2.',
              },
              {
                text: 'Languages',
                note: 'The paper is offered in English, Hindi and 13 regional languages, chosen at application; English Language and Comprehension is in English only.',
              },
              {
                text: 'No maps, graphs or statistical data',
                note: 'The notice states that there is no component of maps, graphs, diagrams or statistical data in the paper, which matters for visually impaired candidates and for what to practise.',
              },
            ],
          },
          {
            type: 'table',
            caption: 'Havaldar in CBIC and CBN — PET and PST, qualifying, conducted by the departments after the CBE.',
            head: ['Standard', 'Male', 'Female'],
            rows: [
              ['Walk', '1,600 metres in 15 minutes', '1 kilometre in 20 minutes'],
              ['Height', '157.5 cm (relaxable by 5 cm for Garhwalis, Assamese, Gorkhas and Scheduled Tribes)', '152 cm (relaxable by 2.5 cm for the same groups)'],
              ['Chest', '81 cm fully expanded, minimum 5 cm expansion', '—'],
              ['Weight', '—', '48 kg (relaxable by 2 kg for the same groups)'],
            ],
          },
          {
            type: 'p',
            text: 'Havaldar candidates are shortlisted for PET/PST in the ratio of 1:7 on Session 2 marks, with the Commission fixing CCA-wise and category-wise cut-offs. The examination is conducted in multiple shifts, and marks are normalised by the formula the Commission published on 2 June 2025 before cut-offs and merit are computed. Normalised scores can therefore differ from raw scores, in either direction, depending on the difficulty of the shift you sat. In the 2025 cycle, 8,04,633 candidates appeared in the CBE held from 4 to 20 February 2026 and the result of 3 August 2026 shortlisted candidates for the Havaldar PET/PST held from 24 to 31 August 2026.',
          },
          {
            type: 'links',
            title: 'Related SSC MTS pages',
            items: [
              {
                label: 'SSC MTS syllabus for both sessions',
                to: '/government-exams/ssc/ssc-mts/syllabus/',
              },
              {
                label: 'Free SSC MTS mock tests in the two-session format',
                to: '/government-exams/ssc/ssc-mts/mock-tests/',
              },
              {
                label: 'SSC MTS previous year papers',
                to: '/government-exams/ssc/ssc-mts/previous-year-papers/',
              },
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SSC MTS previous year papers — using past papers to find the repeated arithmetic shapes and general awareness themes that decide the cutoff.',
        lead: [
          'MTS past papers are short, plentiful and highly repetitive, which makes them the most efficient study material available for this exam.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The arithmetic in MTS papers recurs in a small number of recognisable shapes — a percentage change, a two-worker rate problem, a simple interest calculation, an average adjusted by one new value. Once you can name the shape on sight, the arithmetic itself is rarely the difficulty; recognition speed is.',
          },
          {
            type: 'steps',
            title: 'Getting the most from a past paper',
            items: [
              { text: 'Solve Session I questions without a calculator, always.', note: 'Mental arithmetic speed is a large part of what this paper measures.' },
              { text: 'Keep a one-line log of every question you got wrong.', note: 'The topic, and whether you did not know it, misread it, or ran out of time.' },
              { text: 'Build a general awareness list from the papers themselves.', note: 'The themes that repeat across years are a better revision list than a general knowledge book.' },
              { text: 'Redo your wrong questions a week later.', note: 'If you still get them wrong, the topic needs studying rather than practising.' },
            ],
          },
          {
            type: 'links',
            title: 'Practice next',
            items: [
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
          {
            type: 'list',
            title: 'The arithmetic shapes that recur most',
            items: [
              { text: 'Percentage increase and decrease', note: 'including successive changes, and the reverse question that gives you the final value and asks for the original.' },
              { text: 'Profit, loss and discount', note: 'usually single-step, occasionally with a discount applied on a marked price.' },
              { text: 'Simple averages with one value replaced', note: 'a shape that appears in some form in nearly every cycle.' },
              { text: 'Ratio and proportion splits', note: 'dividing an amount among two or three people in a given ratio.' },
              { text: 'Time and work, and time and distance', note: 'two workers or two vehicles, rarely more, and almost never with a twist.' },
              { text: 'LCM and HCF applications', note: 'bells ringing together, tiles fitting a floor, and the standard remainder questions.' },
            ],
          },
          {
            type: 'p',
            text: 'That list is short on purpose, and it is the most useful thing past MTS papers give you. The syllabus implies a wide arithmetic landscape; the papers show a narrow one, visited repeatedly. A candidate who can do those six shapes quickly and accurately, without a calculator and without writing much down, has covered most of what Session I will ask.',
          },
          {
            type: 'p',
            text: 'The general awareness questions repeat differently — not the same questions, but the same themes, and the pool is small enough that building your list from the papers themselves is more efficient than reading a general knowledge book cover to cover. Constitutional basics, national symbols, first-in-India facts, major festivals and dance forms, important days and school-level science appear again and again across MTS, GD and CHSL papers alike, which means work you do here transfers if you sit more than one of them.',
          },
          {
            type: 'note',
            title: 'Papers written for an older structure',
            text: 'SSC has revised the MTS pattern more than once, including how the two sessions are organised and where negative marking applies. Older papers remain perfectly good for content and for arithmetic practice, but check which structure a paper was written for before using it to rehearse timing — practising the wrong session length trains a pace you will not be able to use.',
          },
        ],
      },
      'mock-tests': {
        description:
          'SSC MTS mock tests — session-wise timed practice that trains the different guessing discipline each session needs.',
        lead: [
          'Practise the two sessions the way the exam runs them, separately timed, because the right behaviour in one is the wrong behaviour in the other.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A mock that merges both sessions into one open block teaches a habit the real exam will punish. Set a timer for each session, stop when it ends, and take the short gap between them seriously — pacing across two short sessions is a distinct skill from pacing across one long paper.',
          },
          {
            type: 'list',
            title: 'What a good MTS mock tells you',
            items: [
              { text: 'Blanks left in Session I', note: 'there should be none. Any blank is a mark thrown away under a no-deduction rule.' },
              { text: 'Accuracy in Session II', note: 'the number that actually moves your score, since errors here subtract.' },
              { text: 'Arithmetic speed', note: 'measured as questions per minute in Session I, not as a percentage.' },
              { text: 'General awareness hit rate', note: 'the section most improvable between now and the exam, and the one most candidates ignore.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
          {
            type: 'steps',
            title: 'Running an MTS mock properly',
            items: [
              { title: 'Time the sessions separately', text: 'Forty-five minutes, stop, short break, forty-five minutes. Merging them rehearses a freedom the real exam does not give you.' },
              { title: 'Count your Session I blanks first', text: 'Before looking at the score, count unanswered questions in Session I. The target is zero, every time, and this is the fastest score improvement available to most candidates.' },
              { title: 'Separate accuracy from attempts in Session II', text: 'A high attempt count with mediocre accuracy is a losing pattern once a deduction applies, and the raw score alone will not show you that.' },
              { title: 'Time the arithmetic on its own', text: 'Note how many minutes the arithmetic took. If it ate most of Session I, the fix is fluency drilling rather than more mocks.' },
              { title: 'Keep a one-line log', text: 'Date, both session scores, Session I blanks, Session II accuracy. Six lines of that log will show you a trend that six individual mocks will not.' },
            ],
          },
          {
            type: 'p',
            text: 'Two mocks a week is a sensible ceiling, and one a week with careful analysis beats three taken and skimmed. The value of a mock lies almost entirely in what you do in the hour after it, and candidates who take mocks daily are usually substituting the comfortable feeling of activity for the uncomfortable work of correction.',
          },
          {
            type: 'note',
            title: 'Practise in your exam language',
            text: 'If you intend to sit the paper in a regional language, take every mock in that language too. Switching languages between practice and the real paper costs reading speed at exactly the moment you cannot afford it, and the vocabulary used in general awareness questions is not always intuitive in translation.',
          },
        ],
      },
      preparation: {
        description:
          'SSC MTS preparation strategy — a study plan for 10th-pass candidates, plus physical training guidance for Havaldar applicants.',
        lead: [
          'MTS is won on arithmetic accuracy and on the two sections most candidates skip. That is the whole strategy, and it is unusually actionable.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A three to four month plan',
            items: [
              { text: 'Month one — arithmetic fundamentals.', note: 'LCM and HCF, fractions, percentage, ratio, average. Slowly and correctly first; speed comes from familiarity, not from rushing.' },
              { text: 'Month one alongside — twenty minutes of general awareness daily.', note: 'One source, revisited. This is the section with the largest gap between effort and typical candidate effort.' },
              { text: 'Month two — the remaining arithmetic and reasoning.', note: 'Profit and loss, interest, time and work, time and distance; coding-decoding, series, analogy and non-verbal patterns.' },
              { text: 'Month two alongside — basic English every day.', note: 'Grammar fundamentals and a growing vocabulary list. Thirty minutes is enough if it is genuinely daily.' },
              { text: 'Month three — timed session practice.', note: 'Separate timers for the two sessions, twice a week, with the wrong answers logged and revisited.' },
              { text: 'Havaldar applicants, throughout — physical training.', note: 'Running and walking distances built up gradually from the first week of preparation, not after the written result.' },
            ],
          },
          {
            type: 'list',
            title: 'Where MTS candidates lose marks',
            items: [
              { text: 'Leaving Session I questions blank', note: 'the single most common unforced error in this exam.' },
              { text: 'Skipping English entirely', note: 'a decision that hands away a section which responds well to modest, consistent effort.' },
              { text: 'Studying from CGL-level material', note: 'far more depth than MTS asks, at the cost of the breadth it does ask for.' },
              { text: 'Practising arithmetic with a calculator', note: 'trains the wrong skill for a paper that is partly a mental-speed test.' },
            ],
          },
          {
            type: 'p',
            text: 'Three to four consistent months is a realistic preparation window for a candidate whose school arithmetic is intact. Consistency matters far more than intensity here — the sections that decide MTS results all respond to daily contact rather than to long weekend sessions.',
          },
          {
            type: 'defs',
            items: [
              [
                'The no-deduction habit',
                'In Session I every blank is a mark discarded. Build the habit now: in practice, never leave a Session I question unanswered, even in an untimed set. Habits formed in practice are what survive exam nerves.',
              ],
              [
                'Arithmetic without a calculator',
                'Every practice session, on paper, from the first day. MTS partly measures mental speed, and a calculator quietly removes the exact skill the paper is testing.',
              ],
              [
                'General awareness as a daily drip',
                'Fifteen to twenty minutes daily, revised in short passes. This is the section with the most headroom for a candidate starting from nothing, and the one most often abandoned.',
              ],
              [
                'The language section',
                'A short passage a day. Twenty questions is a fifth of the paper, and conceding a fifth of the paper is a much larger decision than it feels like at the time you make it.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'On what consistency means in practice: two focused hours a day for three months will do more for an MTS candidate than six-hour days taken in bursts and abandoned. The material is not deep enough to reward marathon sessions, and the skills that matter — arithmetic fluency, general awareness recall, reading speed — all improve with frequency rather than duration. Daily and modest beats intense and intermittent for every one of them.',
          },
          {
            type: 'note',
            title: 'Havaldar applicants — check the standards early',
            text: 'If Havaldar posts are among your preferences, read the physical and medical standards in the notification during your first week of preparation rather than after the written result. Candidates occasionally discover a disqualifying condition at the medical stage that a routine check months earlier would have identified, when there was still time to decide whether to apply for the non-physical posts instead.',
          },
        ],
      },
      'study-material': {
        description:
          'SSC MTS study material — arithmetic, reasoning, general awareness and basic English notes pitched at the MTS syllabus level.',
        lead: [
          'Notes pitched at what MTS asks: arithmetic worked slowly and clearly, reasoning practised for speed, and the two neglected sections given proper room.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Start with the arithmetic notes and work them in order rather than jumping to whatever appears hardest. MTS questions build on a small foundation — fractions, percentage and ratio underpin most of what follows — and candidates who secure that foundation find the later topics take far less time than expected.',
          },
          {
            type: 'links',
            title: 'Subject notes for SSC MTS',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'Study habits that suit this exam',
            items: [
              'Do arithmetic on paper without a calculator, every time.',
              'Keep general awareness revision to short, frequent passes rather than long sessions.',
              'Practise reasoning against a clock from the beginning — it is a speed section, not a knowledge section.',
              'Read one short English passage a day; comprehension improves with exposure more than with rules.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Arithmetic — the core',
                'Work the topics in order rather than jumping to whichever looks hardest. Number systems, LCM and HCF, fractions and decimals, percentage, ratio, average, profit and loss, interest, time and work, and time and distance. Each one to the point where you solve without writing intermediate steps.',
              ],
              [
                'Reasoning — practise, do not read',
                'Series, analogy, classification, coding-decoding and the figure-based questions. Reasoning theory is thin and the returns come almost entirely from volume, so a page of questions is worth more than a chapter of explanation.',
              ],
              [
                'General awareness — organise for revision',
                'Keep it in themed lists rather than in continuous prose: constitutional basics, national symbols, first-in-India facts, dances and festivals, important days, school-level science. Lists can be revised in five minutes; chapters cannot.',
              ],
              [
                'Language — little and often',
                'One passage and one grammar point a day. Comprehension improves through exposure rather than through rules, and the rules that do matter here are a short list: articles, prepositions, tense agreement and common vocabulary.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A caution about sources: material written for SSC CGL will take an MTS candidate a long way past what the paper asks, particularly in algebra and advanced mathematics, and the time it consumes comes directly out of general awareness and language — the two sections where an MTS candidate has the most to gain. If a chapter opens with quadratic identities or trigonometric ratios, it is not written for this exam.',
          },
          {
            type: 'note',
            title: 'One source per subject, finished',
            text: 'Four subjects, four sources, each one completed and then revisited. That is the whole reading list. The temptation with a short syllabus is to collect more material than the exam needs, and the collecting reliably feels like progress while producing none.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What qualification is needed for SSC MTS?',
        a: 'A class 10 (matriculation) pass from a recognised board. This makes MTS the SSC examination with the lowest qualification requirement, and correspondingly the largest field of applicants.',
      },
      {
        q: 'What is the difference between MTS and Havaldar posts?',
        a: 'Both are filled through the same written examination. Multi-Tasking Staff posts are in general central government offices and are decided on the written examination and document verification. Havaldar posts are in the Central Board of Indirect Taxes and Customs and the Central Bureau of Narcotics, and add a physical efficiency test and physical standard test after the written stage, with separate standards for male and female candidates. The two streams have also carried different upper age limits, so check the notification for the one you are applying to.',
      },
      {
        q: 'How long does SSC MTS preparation take?',
        a: 'Three to four months of consistent daily study is a realistic window for a candidate whose school arithmetic is intact. The sections that decide results — arithmetic speed, general awareness breadth and basic English — all respond better to daily contact over months than to intensive study over weeks.',
      },
      {
        q: 'What is the SSC MTS exam pattern for 2026?',
        a: 'One computer-based test in two sessions of 45 minutes each on the same day. Session 1 is Numerical and Mathematical Ability (20 questions, 60 marks) and Reasoning Ability and Problem Solving (20 questions, 60 marks), with no negative marking, and is qualifying. Session 2 is General Awareness (25 questions, 75 marks) and English Language and Comprehension (25 questions, 75 marks), with one mark deducted per wrong answer, and builds the merit list on its own. The scheme is from the 2025 notice and is expected unchanged in 2026.',
      },
      {
        q: 'Is there negative marking in SSC MTS?',
        a: 'Not in Session 1. In Session 2 one mark is deducted for every wrong answer against three marks for a correct one. Unanswered questions carry no penalty in either session.',
      },
      {
        q: 'When is the SSC MTS 2026 notification?',
        a: 'It had not been issued as of 12 September 2026. The Commission’s 2026 calendar had placed the notice tentatively at the end of June with the CBE in September–November 2026, but the schedule has slipped; expect the notice on the SSC notice board in the coming weeks with the CBE towards the end of 2026 or early 2027. The 2025 notice came on 26 June 2025 with the CBE eventually held from 4 to 20 February 2026.',
      },
      {
        q: 'What is the Havaldar PET in SSC MTS?',
        a: 'Candidates who opt for Havaldar in CBIC and CBN and are shortlisted on Session 2 marks (in the ratio 1:7) take a physical efficiency and standard test run by the departments: men walk 1,600 metres in 15 minutes, women walk 1 kilometre in 20 minutes; men need a height of 157.5 cm and a chest of 81 cm with 5 cm expansion, women a height of 152 cm and a weight of 48 kg, with relaxations for Garhwalis, Assamese, Gorkhas and Scheduled Tribes. It is qualifying, and a candidate who fails it is still considered for MTS.',
      },
      {
        q: 'How many vacancies were there in SSC MTS 2025?',
        a: 'The tentative vacancy list of 27 November 2025 showed 7,948 vacancies for MTS and Havaldar combined, state- and region-wise, against 36,19,834 applications. Vacancies for the 2026 cycle will be published with or after the notice on the Commission’s Tentative Vacancy page.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SSC GD Constable
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ssc-gd',
    path: '/government-exams/ssc/ssc-gd/',
    name: 'SSC GD Constable',
    fullName: 'Staff Selection Commission General Duty Constable Examination',
    authority: 'Staff Selection Commission (SSC)',
    official: 'ssc.gov.in',
    seoTitle: 'SSC GD Exam Pattern 2026: 80 Questions, 160 Marks, PET/PST, Syllabus',
    metaDescription:
      'SSC GD Constable exam pattern 2026 — 80 questions, 160 marks, 60 minutes, 0.25 negative marking, PET/PST standards, eligibility, vacancies and free mocks.',
    heroTitle: 'SSC GD Exam Pattern 2026: 80 Questions, 160 Marks, PET/PST Standards and Free Mock Tests',
    lead: [
      'SSC GD Constable is the common recruitment for General Duty Constables across the central armed police forces — BSF, CISF, CRPF, SSB, ITBP and Assam Rifles — along with constable posts in the Secretariat Security Force; Sepoy posts in the Narcotics Control Bureau were part of the 2025 cycle but not the 2026 notice. One written examination, one merit list, and a force allocation that follows from rank and preference.',
      'It is one of the few central examinations where the written paper is genuinely the easier half. The physical efficiency test, the physical standard test and the detailed medical examination eliminate more candidates than the CBT does, and they are the parts that cannot be prepared for in the final month.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission for the Ministry of Home Affairs'],
      ['Level', 'Class 10 pass as on 1 January 2026'],
      ['Posts', 'Constable (GD) in BSF, CISF, CRPF, SSB, ITBP and SSF; Rifleman (GD) in Assam Rifles — Pay Level 3 (₹21,700–69,100)'],
      ['2026 cycle', 'Notice 1 December 2025; 25,487 tentative vacancies; CBE held 27 April – 31 May 2026; result awaited'],
      ['Age', '18–23 years as on 1 January 2026, with relaxations'],
      ['Stages', 'CBE 80 questions/160 marks → PET/PST → Detailed Medical Examination and document verification → force allocation'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The General Duty Constable examination is the single largest uniformed recruitment conducted by the Staff Selection Commission. Candidates who qualify are allocated to one of the central armed police forces according to their merit position and the preferences they submitted, which means the force you join is decided by your rank rather than by a separate application.',
      },
      {
        type: 'p',
        text: 'The written paper is deliberately accessible: matriculation-level reasoning, general knowledge, elementary mathematics and a language section, offered in several regional languages so that candidates are not disadvantaged by their medium of schooling. What the process actually filters on is physical capability and medical fitness.',
      },
      {
        type: 'list',
        title: 'The three gates',
        items: [
          { text: 'Computer Based Test', note: 'an objective paper covering reasoning, general knowledge and awareness, elementary mathematics, and English or Hindi.' },
          { text: 'Physical Efficiency Test and Physical Standard Test', note: 'a timed run over a prescribed distance, plus height, chest and weight measurement against standards that vary by gender and by certain categories.' },
          { text: 'Detailed Medical Examination', note: 'vision, hearing, and a general medical assessment against the standards required for armed police service.' },
        ],
      },
      {
        type: 'note',
        title: 'The medical stage deserves early attention',
        text: 'Vision standards, colour perception, flat feet, knock knees, and body-mark rules have all ended candidacies at the medical stage after the candidate had cleared everything else. Several of these are correctable or clarifiable if identified early. If you are unsure whether a condition would affect you, find out at the start of your preparation rather than after the written result.',
      },
    ],
    stages: [
      {
        name: 'Computer Based Examination',
        mode: 'Objective, 80 questions, 160 marks, 60 minutes',
        detail: 'Four parts of 20 questions for 40 marks each: General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and English or Hindi. Offered in English, Hindi and 13 regional languages. 0.25 marks deducted per wrong answer. Marks are normalised across shifts and, with NCC bonus marks, decide both the PET/PST shortlist and the final merit.',
      },
      {
        name: 'Physical Efficiency Test and Physical Standard Test',
        mode: 'Physical, conducted by the CAPFs',
        detail: 'PET: men run 5 km in 24 minutes, women 1.6 km in 8½ minutes (Ladakh region: 1.6 km in 7 minutes and 800 m in 5 minutes). PST: height 170 cm for men and 157 cm for women, chest 80 cm unexpanded with 5 cm expansion for men, with relaxed standards for Scheduled Tribes, hill-area and North-Eastern candidates. Ex-servicemen are measured but exempt from the race. Qualifying only; there is no appeal against the race.',
      },
      {
        name: 'Detailed Medical Examination and document verification',
        mode: 'Medical board of the CAPFs',
        detail: 'Candidates who clear PET/PST are shortlisted for a detailed medical examination and verification of the domicile, category, age and education certificates. A review medical examination is available on appeal. Vacancies are state-wise, with reservations for border and militancy- or Naxal-affected districts, so the domicile certificate is checked against the state claimed in the application.',
      },
      {
        name: 'Final result and force allocation',
        mode: 'Merit-cum-preference',
        detail: 'The final result allots forces by CBE merit and the order of force preference given in the application, within the state-wise vacancies and reserved categories. In the 2025 cycle the final result of 15 January 2026 filled 53,690 vacancies.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the SSC notice board. The notice for Constable (GD) in the CAPFs and SSF, and Rifleman (GD) in Assam Rifles, Examination 2026 was published on 1 December 2025 with 25,487 tentative vacancies (23,467 male and 2,020 female). Applications ran from 1 to 31 December 2025, fee payment to 1 January 2026, and the correction window from 8 to 10 January 2026. The Computer Based Examination, originally scheduled for February–April 2026, was held from 27 April to 31 May 2026 in four weekly windows that candidates could rank by preference; the tentative answer key was released on 15 June 2026 with challenges until 20 June at ₹50 per question. The result of the CBE and the PET/PST schedule are awaited.',
      },
      {
        type: 'table',
        caption: 'Key dates of the SSC GD Constable 2026 cycle, from the notice of 1 December 2025 and the schedule notices of 11 April and 22 May 2026.',
        head: ['Event', 'Date'],
        rows: [
          ['Notice published', '1 December 2025'],
          ['Online applications', '1–31 December 2025 (23:00)'],
          ['Last date for fee payment', '1 January 2026'],
          ['Application correction window', '8–10 January 2026'],
          ['Exam-city intimation', '19 April 2026'],
          ['Computer Based Examination', '27 April – 31 May 2026, in four windows (27 April–2 May, 4–9 May, 18–23 May, 25–30 May); the 28 May shift moved to 27 May'],
          ['Tentative answer key and challenge', '15–20 June 2026, ₹50 per question'],
          ['Result of the CBE, PET/PST', 'Awaited'],
        ],
      },
      {
        type: 'table',
        caption: 'Tentative vacancies for SSC GD 2026 by force, from the notice.',
        head: ['Force', 'Male', 'Female', 'Total'],
        rows: [
          ['BSF', '524', '92', '616'],
          ['CISF', '13,135', '1,460', '14,595'],
          ['CRPF', '5,366', '124', '5,490'],
          ['SSB', '1,764', '0', '1,764'],
          ['ITBP', '1,099', '194', '1,293'],
          ['Assam Rifles', '1,556', '150', '1,706'],
          ['SSF', '23', '0', '23'],
          ['Total', '23,467', '2,020', '25,487'],
        ],
      },
      {
        type: 'p',
        text: 'The 2025 cycle gives the timeline. The CBE ran from 4 to 25 February 2025; the result of 17 June 2025 shortlisted 3,94,121 candidates for PET/PST, which the CAPFs held from 20 August to 15 September 2025 under CRPF as nodal force; 95,575 candidates cleared PET/PST on 13 October 2025 and went to medical examination and document verification; the final result of 15 January 2026 allocated 53,690 vacancies across BSF, CISF, CRPF, SSB, ITBP, Assam Rifles, NCB and SSF. Final marks were published on 16 February 2026.',
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'Eligibility for the 2026 cycle is judged as on 1 January 2026 for both age and education. The vacancies are state-wise, so the state or union territory of domicile claimed in the application is verified with a domicile or permanent residence certificate at the medical and verification stage — a candidate who cannot produce it is rejected.',
      },
      {
        type: 'list',
        title: 'Educational qualification',
        items: [
          {
            text: 'All posts',
            note: 'Matriculation or class 10 from a recognised board or university, passed on or before 1 January 2026.',
          },
        ],
      },
      {
        type: 'table',
        caption: 'Age 18–23 years as on 1 January 2026 — born between 2 January 2003 and 1 January 2008 — with these relaxations beyond 23.',
        head: ['Category', 'Relaxation'],
        rows: [
          ['SC and ST', '5 years'],
          ['OBC (non-creamy layer)', '3 years'],
          ['Ex-servicemen', '3 years after deducting military service from actual age'],
          ['Children and dependants of victims killed in the 1984 riots', '5 years (UR/EWS), 8 years (OBC), 10 years (SC/ST)'],
        ],
      },
      {
        type: 'table',
        caption: 'Physical standards (PST) for Constable (GD). Ex-servicemen are measured for record but exempt from the race.',
        head: ['Standard', 'Male', 'Female'],
        rows: [
          ['Height, general', '170 cm', '157 cm'],
          ['Height, Scheduled Tribes', '162.5 cm', '150 cm'],
          ['Height, ST candidates of North-Eastern states', '157 cm', '147.5 cm'],
          ['Height, ST candidates of Left-Wing Extremism affected districts', '160 cm', '147.5 cm'],
          ['Height, Garhwalis, Kumaonis, Dogras, Marathas and candidates of Assam, Himachal Pradesh, J&K and Ladakh', '165 cm', '155 cm'],
          ['Chest, general', '80 cm unexpanded, minimum 5 cm expansion', '—'],
          ['Chest, Scheduled Tribes', '76 cm, minimum 5 cm expansion', '—'],
          ['Chest, the hill and state categories above', '78 cm, minimum 5 cm expansion', '—'],
          ['Weight', 'Proportionate to height and age as per medical standards', 'Proportionate to height and age'],
        ],
      },
      {
        type: 'list',
        title: 'Other conditions',
        items: [
          {
            text: 'Nationality and domicile',
            note: 'Indian citizens; vacancies are filled state-wise from the domicile claimed, with SSF vacancies on an all-India basis and reservations for border-guarding and militancy- or Naxal-affected districts listed in the notice’s annexures.',
          },
          {
            text: 'Fee',
            note: '₹100 online; women and SC, ST and ex-servicemen candidates are exempt.',
          },
          {
            text: 'Reservation for ex-servicemen',
            note: '10 per cent of vacancies, filled by non-ESM candidates of the category if suitable ESM candidates are not available.',
          },
          {
            text: 'NCC certificate bonus',
            note: 'NCC C certificate 5 per cent of maximum marks, B certificate 3 per cent, A certificate 2 per cent, added to normalised CBE marks if claimed in the application.',
          },
          {
            text: 'Medical',
            note: 'Vision, hearing and general fitness standards are set out in the notice; a review medical examination can be requested on payment within the time allowed.',
          },
        ],
      },
    ],
    procedure: {
      eyebrow: 'Application to appointment',
      heading: 'How to apply for SSC GD Constable, what the CBE, PET/PST and medical involve, and how forces are allotted',
      intro: 'The steps as they ran in the 2026 cycle, with the fees and windows the notice of 1 December 2025 specifies.',
      blocks: [
        {
          type: 'steps',
          title: 'The SSC GD Constable process from registration to result',
          items: [
            {
              title: 'One-Time Registration on ssc.gov.in',
              text: 'Create an OTR profile once on the Commission’s portal. Registration asks for Aadhaar-based verification, a mobile number and e-mail that remain with you for the whole cycle, and your basic educational and category details. The OTR number and password are what you log in with at every later stage — exam-city intimation, admit card, answer-key challenge, result and option form — so keep them safe.',
            },
            {
              title: 'Fill the online application for SSC GD Constable',
              text: 'Log in, pick the examination, confirm the OTR details, choose the examination centre preferences and the medium of the paper, and upload or capture the photograph and signature exactly as the notice specifies. The declaration you sign at the end binds you to the eligibility conditions, and the Commission verifies documents only at the end of the process — an ineligible candidate can go through every stage and be dropped at verification.',
            },
            {
              title: 'Pay the fee',
              text: 'The fee is ₹100 online; in the 2026 cycle the last date was 1 January 2026, a day after applications closed. Women and SC, ST and ex-servicemen candidates are exempt. Fees are not refunded.',
            },
            {
              title: 'Use the correction window if you need it',
              text: 'A three-day correction window opens about a week after applications close. The Commission charges ₹200 for the first corrected submission and ₹500 for the second, from every candidate regardless of category. Some fields — notably the OTR identity details — cannot be changed at this point, which is why the OTR should be filled carefully in the first place.',
            },
            {
              title: 'Exam-city intimation, then the admission certificate',
              text: 'Roughly two weeks before the examination the candidate login shows the city allotted; the admission certificate itself is released only three to four days before the date. Print it, and carry it with an original photo identity document that carries the same date of birth as your application.',
            },
            {
              title: 'On the day: biometrics, frisking and the clock',
              text: 'Report at the time on the admission certificate; entry closes before the shift begins. Expect biometric capture and frisking, and expect the paper to be delivered with the timers the notice describes — a section or session that has closed cannot be reopened. Rough sheets are provided; nothing electronic is allowed inside.',
            },
            {
              title: 'Tentative answer key and challenge',
              text: 'A few days after the last shift the Commission uploads tentative answer keys with each candidate’s response sheet. Objections are filed online only, within the announced window, on payment of a per-question fee that is not refunded. Subject-matter experts examine the objections and the final key is used for evaluation.',
            },
            {
              title: 'Result, marks and the next stage',
              text: 'Results are published as PDF write-ups on the notice board with category-wise cut-offs and the count of candidates shortlisted; individual marks are released in the login shortly afterwards. Candidates for the next stage receive fresh admission certificates through the same login.',
            },
            {
              title: 'Preference for weeks',
              text: 'In 2026 the Commission let candidates rank the four examination windows in order of preference through the login before the CBE. The facility is first-come and cannot be changed once submitted.',
            },
            {
              title: 'Result of the CBE and the PET/PST shortlist',
              text: 'Candidates above the minimum qualifying marks are shortlisted for PET/PST state-wise and category-wise on normalised marks plus NCC bonus. The CAPFs conduct PET/PST at their own centres a few months later; the admission certificate for it comes through the same login and biometric verification is done on reporting.',
            },
            {
              title: 'PET first, then PST',
              text: 'The race is run first and there is no appeal against it. Candidates who pass are measured for height, chest and weight; a candidate who fails PST can appeal to the appellate board on the spot. Women submit a pregnancy self-declaration before PET.',
            },
            {
              title: 'Detailed medical examination and document verification',
              text: 'A shortlist from the PET/PST qualifiers goes to the CAPF medical boards, where the domicile, age, education, category and NCC certificates are verified. A candidate declared unfit can request a review medical examination within the time allowed on payment of the fee.',
            },
            {
              title: 'Final result and force allocation',
              text: 'The Commission declares the final result by merit and the force preferences given in the application, within state-wise vacancies and the reservations for border and Naxal-affected districts. Final marks are published afterwards, and appointment follows through the allotted force.',
            },
          ],
        },
        {
          type: 'note',
          title: 'Give the force preference order some thought before you apply',
          text: 'Force allocation is by merit-cum-preference from the order you submit in the application, and it is not changed later. CISF carried more than half the 2026 vacancies; the others are much smaller. Read the deployment, posting and promotion differences before ranking them.',
        },
      ],
    },
    pattern: [
      {
        type: 'p',
        text: 'The SSC GD exam pattern is the scheme in the notice of 1 December 2025 — a single objective paper of 80 questions carrying two marks each, in one hour, with a quarter mark deducted for every wrong answer. The full treatment is on the exam pattern page.',
      },
      {
        type: 'table',
        caption: 'SSC GD Constable exam pattern 2026: 80 questions, 160 marks, 60 minutes; 0.25 marks deducted per wrong answer; offered in English, Hindi and 13 regional languages.',
        head: ['Part', 'Subject', 'Questions', 'Marks'],
        rows: [
          ['A', 'General Intelligence and Reasoning', '20', '40'],
          ['B', 'General Knowledge and General Awareness', '20', '40'],
          ['C', 'Elementary Mathematics', '20', '40'],
          ['D', 'English or Hindi', '20', '40'],
          ['Total', '', '80', '160'],
        ],
      },
      {
        type: 'table',
        caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
        head: ['Category', 'Minimum qualifying marks'],
        rows: [
          ['Unreserved', '30%'],
          ['OBC and EWS', '25%'],
          ['All other categories', '20%'],
        ],
      },
      {
        type: 'table',
        caption: 'NCC bonus, added to normalised CBE marks for candidates who claim it in the application.',
        head: ['Certificate', 'Bonus'],
        rows: [
          ['NCC C', '5 per cent of maximum marks (8 marks)'],
          ['NCC B', '3 per cent (4.8 marks)'],
          ['NCC A', '2 per cent (3.2 marks)'],
        ],
      },
      {
        type: 'p',
        text: 'The examination is conducted in multiple shifts, and marks are normalised by the formula the Commission published on 2 June 2025 before cut-offs and merit are computed. Normalised scores can therefore differ from raw scores, in either direction, depending on the difficulty of the shift you sat. The minimum qualifying marks are applied before NCC bonus is added; the shortlist for PET/PST and the final merit both use normalised marks with the bonus.',
      },
    ],
    studyPlan: [
      {
        type: 'p',
        text: 'The GD paper is short and basic, and the competition is enormous — 3.94 lakh candidates were shortlisted for PET/PST in 2025 for 53,690 posts. Two things decide the outcome: a high, accurate CBE score in 60 minutes, and passing a 5-kilometre run that many candidates underestimate. Prepare both from the first week.',
      },
      {
        type: 'steps',
        title: 'A three-month plan',
        items: [
          {
            title: 'Month 1: the four parts, and start running',
            text: 'Reasoning question types (series, analogies, coding, classification, figure questions); a static general awareness spine; class-10 arithmetic — number system, fractions, percentages, ratio, averages, profit and loss, interest, time and work, mensuration; and grammar and vocabulary in the language you will sit the paper in. Begin a running programme aimed at 5 km in 24 minutes for men or 1.6 km in 8½ minutes for women.',
          },
          {
            title: 'Month 2: speed and current affairs',
            text: 'Sectional tests of 20 questions in 15 minutes; daily current affairs for the six months before the exam; running three or four times a week with timed runs.',
          },
          {
            title: 'Month 3: full mocks and revision',
            text: 'A full 80-question mock every second day with the 0.25 deduction applied, an error log, and revision from it. Time a 5 km run every week; be under the limit with a margin before the CBE, because PET can come only weeks after the result.',
          },
        ],
      },
      {
        type: 'list',
        title: 'What the pattern means for the attempt',
        items: [
          {
            text: 'Forty-five seconds a question',
            note: 'Eighty questions in 60 minutes with no sectional timer. Take reasoning and mathematics first if they are your strengths, and leave general awareness — which is recall — to the end.',
          },
          {
            text: 'The penalty is small but real',
            note: 'A quarter mark off against two on: a guess between two options is clearly worth taking, and even a three-option guess breaks even. Skip only the questions you know nothing about.',
          },
          {
            text: 'Choose the paper language carefully',
            note: 'The paper is available in 13 regional languages besides English and Hindi. Sit it in the language you read fastest; Part D is English or Hindi by the choice you make in the application.',
          },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the notice of examination for Constable (GD) 2026, the tentative vacancy list of 8 December 2025, the schedule notices of 11 April and 22 May 2026, the tentative answer key notice of 15 June 2026, and the final result write-up of the 2025 examination, all on the SSC notice board.',
      },
      {
        type: 'links',
        title: 'Official documents',
        items: [
          {
            label: 'Notice of Constable (GD) in CAPFs, SSF and Rifleman (GD) in Assam Rifles Examination 2026 (1 December 2025)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_CTGD_2026.pdf',
          },
          {
            label: 'Tentative vacancies of Constable (GD) 2026 (8 December 2025)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Tentative_Vacancy_08122025.pdf',
          },
          {
            label: 'Schedule of the Constable (GD) 2026 examination with week preferences (11 April 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/CTGD_2026_Notice_11042026.pdf',
          },
          {
            label: 'Tentative answer key and challenge window (15 June 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/tentative_answerkey_15062026.pdf',
          },
          {
            label: 'Constable (GD) 2025 final result write-up (15 January 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Final%20Result_CTGD2025_Write-up_15012026.pdf',
          },
          {
            label: 'SSC home page — notices, calendar and candidate login',
            href: 'https://ssc.gov.in/',
          },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'SSC GD Constable syllabus — reasoning, general knowledge, elementary mathematics and the English or Hindi language section, at matriculation level.',
        lead: [
          'The GD syllabus stays at matriculation level throughout. Its difficulty is not conceptual — it is the number of questions you must clear in an hour while under exam pressure.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Intelligence and Reasoning',
                'Analogies, similarities and differences, spatial visualisation and orientation, visual memory, discrimination, observation, relationship concepts, arithmetical reasoning and figural classification, arithmetic number series, non-verbal series, coding and decoding. Predominantly non-verbal, which rewards pattern practice over theory.',
              ],
              [
                'General Knowledge and General Awareness',
                'Current events, sports, history, culture, geography, economic scene, Indian polity and the Constitution, general science and scientific research. Questions test everyday awareness of the environment around the candidate rather than specialist study of any subject.',
              ],
              [
                'Elementary Mathematics',
                'Number systems, whole numbers, decimals and fractions and the relationship between them, fundamental arithmetical operations, percentage, ratio and proportion, averages, interest, profit and loss, discount, mensuration, time and distance, time and work, ratio and time. Entirely arithmetic — there is no algebra or trigonometry component.',
              ],
              [
                'English or Hindi',
                'Basic comprehension and command of the chosen language: fill in the blanks, error spotting, synonyms and antonyms, sentence correction, one-word substitution and a short reading passage. Candidates choose one language, and the paper itself is available in several regional languages.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The mathematics section is worth a specific comment. It is elementary in scope but not in speed — twenty arithmetic questions in a shared hour means you cannot afford to derive anything from first principles. Fluency with percentage, ratio and average conversions is what makes this section quick, and it is the highest-return preparation in the whole paper.',
          },
          {
            type: 'list',
            title: 'How the four sections actually behave',
            items: [
              { text: 'Reasoning is largely visual', note: 'series, analogy, classification, mirror and water images, embedded figures, paper folding. Much of it can be solved by annotating the figure rather than by reasoning it out abstractly, which is faster and more reliable under time pressure.' },
              { text: 'General awareness is broad and shallow', note: 'nothing specialist is asked, but almost anything general can be. The pool is close to what MTS and CHSL draw on, so material prepared for one serves the others.' },
              { text: 'Mathematics is arithmetic only', note: 'no algebra beyond the elementary, no trigonometry, no coordinate geometry. The difficulty is the clock, not the content.' },
              { text: 'The language section is comprehension-led', note: 'a short passage plus grammar and vocabulary at matriculation level, in whichever of the offered languages you choose.' },
            ],
          },
          {
            type: 'p',
            text: 'Because the paper is offered in several regional languages, the syllabus should be read alongside a decision you make once and then stop revisiting: which language you will sit in. That choice affects reading speed in the comprehension section and, less obviously, in the general awareness section too, where a question phrased in an unfamiliar register costs seconds you do not have. Make the decision early and practise in that language exclusively.',
          },
          {
            type: 'note',
            title: 'The syllabus is not the hard part',
            text: 'Very little in the GD syllabus will be new to a candidate who finished school. What separates candidates is not knowledge of the topics but the ability to retrieve it in roughly forty-five seconds a question, and to keep doing so for a full hour. Read the syllabus once to confirm scope, then spend your time on speed and on general awareness accumulation.',
          },
        ],
      },
      'exam-pattern': {
        description: 'SSC GD exam pattern 2026 — the 80-question, 160-mark CBE with subject-wise marks, time and 0.25 negative marking, NCC bonus and PET/PST standards.',
        heading: 'SSC GD exam pattern 2026: 80 questions, 160 marks, negative marking and PET/PST',
        lead: ['One objective paper of an hour decides the shortlist and the merit; a run and a measurement decide whether the marks count. Every figure here is from the notice of 1 December 2025.'],
        blocks: [
          {
            type: 'p',
            text: 'The SSC GD Constable examination has one written stage — a Computer Based Examination of 80 questions in 60 minutes — followed by physical tests, a medical examination and document verification that are all qualifying. There is no second written paper and no interview: the CBE marks, normalised and with any NCC bonus, are the entire merit list.',
          },
          {
            type: 'table',
            caption: 'SSC GD Constable exam pattern 2026. Objective multiple choice; 2 marks per question; 0.25 marks deducted for each wrong answer; no sectional timer.',
            head: ['Part', 'Subject', 'Questions', 'Marks', 'Time'],
            rows: [
              ['A', 'General Intelligence and Reasoning', '20', '40', '60 minutes for the paper (80 minutes for scribe-eligible candidates)'],
              ['B', 'General Knowledge and General Awareness', '20', '40', ''],
              ['C', 'Elementary Mathematics', '20', '40', ''],
              ['D', 'English or Hindi', '20', '40', ''],
              ['', 'Total', '80', '160', ''],
            ],
          },
          {
            type: 'list',
            title: 'How the CBE is scored',
            items: [
              {
                text: 'Negative marking is 0.25 per wrong answer',
                note: 'Against 2 for a correct one. A guess between two options gains on average; a three-option guess breaks even; only a four-option blind guess loses.',
              },
              {
                text: 'Minimum qualifying marks apply before the shortlist',
                note: '30 per cent for UR, 25 for OBC and EWS, 20 for all other categories, judged without NCC bonus.',
              },
              {
                text: 'Marks are normalised across shifts',
                note: 'By the Commission’s formula of 2 June 2025; normalised marks are used for the shortlist, the cut-offs and the final merit.',
              },
              {
                text: 'NCC bonus is added to normalised marks',
                note: '5 per cent of maximum marks (8) for a C certificate, 3 per cent (4.8) for B, 2 per cent (3.2) for A, only if claimed in the application.',
              },
              {
                text: 'Languages',
                note: 'English, Hindi and Assamese, Bengali, Gujarati, Kannada, Konkani, Malayalam, Manipuri, Marathi, Odia, Punjabi, Tamil, Telugu and Urdu, chosen at application.',
              },
            ],
          },
          {
            type: 'table',
            caption: 'Physical Efficiency Test — the race, run before measurement. No appeal against the PET.',
            head: ['Candidates', 'Male', 'Female'],
            rows: [
              ['All except Ladakh region', '5 km in 24 minutes', '1.6 km in 8½ minutes'],
              ['Ladakh region', '1.6 km in 7 minutes', '800 m in 5 minutes'],
              ['Ex-servicemen', 'Exempt from the race; measured for record', 'Exempt from the race; measured for record'],
            ],
          },
          {
            type: 'table',
            caption: 'Physical Standard Test — height and chest, with the relaxed standards from the notice.',
            head: ['Category', 'Height, male', 'Height, female', 'Chest, male (unexpanded / expansion)'],
            rows: [
              ['General', '170 cm', '157 cm', '80 cm / 5 cm'],
              ['Scheduled Tribes', '162.5 cm', '150 cm', '76 cm / 5 cm'],
              ['ST of North-Eastern states', '157 cm', '147.5 cm', '76 cm / 5 cm'],
              ['ST of Left-Wing Extremism affected districts', '160 cm', '147.5 cm', '76 cm / 5 cm'],
              ['Garhwalis, Kumaonis, Dogras, Marathas; candidates of Assam, Himachal Pradesh, J&K and Ladakh', '165 cm', '155 cm', '78 cm / 5 cm'],
            ],
          },
          {
            type: 'p',
            text: 'After PET/PST, candidates are shortlisted for the Detailed Medical Examination and document verification, which the CAPFs conduct; a review medical examination is available on appeal. The final result allots forces by merit and preference within state-wise vacancies. In the 2025 cycle, 3,94,121 candidates were shortlisted for PET/PST from the CBE, 95,575 cleared PET/PST, and 53,690 were allocated in the final result of 15 January 2026.',
          },
          {
            type: 'links',
            title: 'Related SSC GD pages',
            items: [
              {
                label: 'SSC GD syllabus for all four parts',
                to: '/government-exams/ssc/ssc-gd/syllabus/',
              },
              {
                label: 'Free SSC GD mock tests, 80 questions in 60 minutes',
                to: '/government-exams/ssc/ssc-gd/mock-tests/',
              },
              {
                label: 'SSC GD previous year papers',
                to: '/government-exams/ssc/ssc-gd/previous-year-papers/',
              },
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SSC GD Constable previous year papers — using past CBTs to build arithmetic speed and identify the repeated general awareness themes.',
        lead: [
          'GD papers are consistent across cycles in both difficulty and topic mix, which makes past papers a reliable predictor of what you will face.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the syllabus is narrow and the level is fixed at matriculation, the same question types cycle through year after year. A candidate who works through several years of papers develops something more valuable than knowledge — recognition speed, which is what an eighty-question hour actually rewards.',
          },
          {
            type: 'steps',
            title: 'How to use them',
            items: [
              { text: 'Solve the mathematics section against a stopwatch from the first paper.', note: 'Target under a minute per question, then under forty-five seconds.' },
              { text: 'Do the reasoning section on paper, not mentally.', note: 'Non-verbal patterns are easier to see when you can mark the figure.' },
              { text: 'Collect general awareness questions into themed lists.', note: 'Sports, awards, geography, polity. The themes repeat even when the specific facts do not.' },
              { text: 'Attempt in your chosen exam language throughout.', note: 'Reading speed in that language is part of what you are training.' },
            ],
          },
          {
            type: 'links',
            title: 'Practice and related pages',
            items: [
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Police exam preparation', to: '/government-exams/police/' },
            ],
          },
          {
            type: 'list',
            title: 'What past GD papers reliably show',
            items: [
              { text: 'A fixed difficulty ceiling', note: 'the mathematics does not get harder from cycle to cycle. Once you can comfortably clear a paper from three years ago, the constraint that remains is speed rather than difficulty.' },
              { text: 'A small set of reasoning figures', note: 'mirror images, water images, embedded figures, paper folding and completion of figures recur constantly, and each has a reliable method that takes an afternoon to learn.' },
              { text: 'Recurring general awareness themes', note: 'the Constitution and its basics, the freedom movement, national symbols, sports and awards, school science, and Indian geography. Build your list from the papers rather than from a textbook.' },
              { text: 'Predictable arithmetic', note: 'percentage, average, ratio, profit and loss, time and work, simple interest. The same handful of shapes as the other matriculation-level SSC papers.' },
            ],
          },
          {
            type: 'p',
            text: 'The most valuable use of a GD paper is as a stopwatch exercise rather than a knowledge check. Solve the mathematics section alone against a clock and record the time; repeat weekly with a different paper. Watching that number fall from twenty-five minutes to fifteen is a more meaningful signal of readiness than a rising total score, because the total score will rise on its own once the time comes down.',
          },
          {
            type: 'p',
            text: 'Do the reasoning sections on paper rather than on a screen while you are still learning the figure types. Mirror-image and paper-folding questions become substantially easier when you can draw a fold line or mark a corner, and the habit of annotating carries over even when you later practise on a computer. Once the methods are solid, move to screen practice so that the CBT interface itself is familiar.',
          },
          {
            type: 'note',
            title: 'Papers in your chosen language',
            text: 'Wherever past papers are available in the language you intend to sit in, use those rather than the English versions. The translation of technical and general awareness terms is not always the one you would guess, and meeting an unfamiliar rendering for the first time in the exam hall costs both time and confidence.',
          },
        ],
      },
      'mock-tests': {
        description:
          'SSC GD Constable mock tests — full-length CBT practice with timing, negative marking and section-wise analysis.',
        lead: [
          'Eighty questions in sixty minutes is the constraint that defines this paper. A mock is where you find out whether your pacing survives it.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Most GD candidates know enough to clear the cutoff and lose marks to pacing instead — a slow start in mathematics leaves the general awareness section rushed, and general awareness is the one section where speed costs nothing because you either know the answer or you do not. Fixing the order of attempt is often worth more than another week of study.',
          },
          {
            type: 'list',
            title: 'What to check after each mock',
            items: [
              { text: 'Time spent in mathematics', note: 'if it exceeds a quarter of the hour, your arithmetic needs fluency work rather than more practice questions.' },
              { text: 'General awareness accuracy', note: 'the most improvable section between now and the exam.' },
              { text: 'Questions attempted in the final five minutes', note: 'a rush at the end usually means the order of attempt is wrong.' },
              { text: 'Errors from misreading', note: 'distinct from errors of knowledge, and fixed by slowing down slightly rather than studying more.' },
            ],
          },
          {
            type: 'p',
            text: 'Keep physical training running alongside mock practice. Candidates who stop running during the written preparation and restart after the result consistently arrive at the PET underprepared, and unlike the written paper, that stage offers no second attempt within the cycle.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
          {
            type: 'steps',
            title: 'What to do with each mock',
            items: [
              { title: 'Sit it in one uninterrupted hour', text: 'Eighty questions, sixty minutes, on a screen if possible, at roughly the time of day your slot falls.' },
              { title: 'Record four numbers, not one', text: 'Score, attempts, accuracy and minutes spent on mathematics. The score alone conceals almost everything useful.' },
              { title: 'Classify every error', text: 'Not known, known but rushed, or misread. Rushing and misreading are pacing problems and are fixed differently from gaps in knowledge.' },
              { title: 'Fix one thing before the next mock', text: 'One topic, one habit. Taking the next mock without changing anything in between simply re-measures the same candidate.' },
            ],
          },
          {
            type: 'p',
            text: 'Because a deduction applies for wrong answers, attempt count is a strategic decision rather than a measure of effort. A candidate attempting sixty-five questions at high accuracy will usually finish ahead of one attempting all eighty with a scatter of guesses. Use your mocks to find the attempt count at which your accuracy starts to fall, and then treat that as your working ceiling in the real paper.',
          },
          {
            type: 'note',
            title: 'Do not pause physical training for mock season',
            text: 'The written result and the PET are not far apart, and fitness lost over a two-month study block is not recovered in the weeks between them. Three running sessions a week alongside mock practice is enough to hold the ground you have gained, and it costs less study time than most candidates assume.',
          },
        ],
      },
      preparation: {
        description:
          'SSC GD Constable preparation — a combined written and physical training plan, with guidance on clearing the PET, PST and medical stages.',
        lead: [
          'Preparing for GD means preparing for three different tests at once. Candidates who sequence them — written first, physical later — routinely fail the part they postponed.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The written paper can be prepared for in three or four months. Running fitness cannot be built in three or four weeks, and medical issues cannot be resolved at all once you are standing in front of the board. This is why the plan below runs all three tracks in parallel from the first week rather than treating the physical stages as something to worry about after the CBT result.',
          },
          {
            type: 'steps',
            title: 'A parallel plan',
            items: [
              { text: 'Week one — check the physical and medical standards that apply to you.', note: 'Height, chest, vision, colour perception. Find out now whether anything needs attention, while there is still time to act.' },
              { text: 'Week one — start running, at whatever distance you can manage.', note: 'Build gradually towards the PET distance with time to spare. Consistency beats intensity and prevents injury.' },
              { text: 'Months one and two — elementary mathematics to fluency.', note: 'Percentage, ratio, average, profit and loss, interest, time and work. Practised on paper, against a clock.' },
              { text: 'Months one to three — daily general awareness.', note: 'Twenty minutes a day from one source. The most neglected and most improvable section in this exam.' },
              { text: 'Month two onwards — reasoning practice, mostly non-verbal.', note: 'Pure pattern repetition; improvement here is fast and reliable.' },
              { text: 'Month three — your chosen language section.', note: 'Basic grammar and vocabulary in English or Hindi, whichever you have opted for.' },
              { text: 'Final month — full timed mocks twice a week, physical training maintained.', note: 'Do not drop the running in the last month. The PET follows the written stage more quickly than most candidates plan for.' },
            ],
          },
          {
            type: 'list',
            title: 'The avoidable failures',
            items: [
              { text: 'Discovering a medical disqualifier at the medical stage', note: 'when a check in month one would have identified it.' },
              { text: 'Stopping physical training during written preparation', note: 'and arriving at the PET months out of condition.' },
              { text: 'Choosing the exam language by prestige rather than reading speed', note: 'the paper is offered in several regional languages precisely so you do not have to.' },
              { text: 'Neglecting general awareness', note: 'the section where a modest daily habit produces the largest score improvement.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Running, from week one',
                'The PET is a timed run and endurance builds on a scale of months, not weeks. Start at whatever distance you can currently manage and add gradually. A candidate who runs three times a week throughout their study period arrives at the PET prepared without ever having made it a separate project.',
              ],
              [
                'General awareness, every day',
                'The section with the widest gap between the prepared and the unprepared, and the one that responds fastest to a modest daily habit. Twenty minutes, themed lists, revised in short passes.',
              ],
              [
                'Arithmetic against a clock, always',
                'Never practise untimed after the first fortnight. The paper measures retrieval speed, and untimed practice trains a skill the exam does not test.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'One planning point specific to this recruitment: because SSC GD feeds several different forces, candidates often submit a preference order without reading what each force actually does or where it posts. That is worth an evening of research before you apply rather than after you are allotted. The written paper is common, but the working life at the end of it is not, and preferences submitted casually are difficult to revisit later.',
          },
          {
            type: 'note',
            title: 'A realistic timeline',
            text: 'Three to four months of consistent daily study covers the written paper for a candidate whose school arithmetic is intact. The physical side is what sets the true timeline: if you are not currently running, give yourself six months so that endurance is built gradually rather than crammed, which is both safer and more reliable.',
          },
        ],
      },
      'study-material': {
        description:
          'SSC GD Constable study material — elementary mathematics, reasoning, general knowledge and language notes at matriculation level.',
        lead: [
          'Notes at the level GD actually asks: arithmetic without algebra, reasoning that is mostly visual, and general knowledge organised for revision rather than for reading.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For this exam, the general knowledge notes are worth as much attention as the mathematics. It is the section where candidates most often assume nothing can be done, and in fact it is the most systematically improvable part of the paper — the themes repeat, and repeated light revision converts directly into marks.',
          },
          {
            type: 'links',
            title: 'Subject notes for SSC GD',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'How to study for a speed paper',
            items: [
              'Every arithmetic practice session runs against a clock, from the first day.',
              'Solve without a calculator so that mental arithmetic becomes the default.',
              'Revise general knowledge in short daily passes rather than long weekly sessions.',
              'Practise reasoning figures on paper — visual reasoning is faster when you can annotate.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'General knowledge — the priority',
                'Organised as themed lists rather than continuous reading: the Constitution and national symbols, the freedom movement, geography and rivers, sports and awards, important days, and school-level physics, chemistry and biology. Short, frequent revision passes beat long sittings for all of it.',
              ],
              [
                'Elementary mathematics — fluency work',
                'Percentage, average, ratio and proportion, profit and loss, simple interest, time and work, time and distance, and basic mensuration. The aim is not to learn methods you already know but to make them automatic.',
              ],
              [
                'Reasoning — mostly figures',
                'Learn the standard methods for mirror images, water images, embedded figures and paper folding, then practise volume. These question types are unusually mechanical once the method is known.',
              ],
              [
                'Language — one passage a day',
                'Comprehension, common grammar and vocabulary in your chosen language. Twenty questions is a full quarter of the paper and is well within reach of steady, modest practice.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Avoid material written for graduate-level SSC examinations. It is easy to find and it will hand you algebra, trigonometry and advanced reasoning that this paper does not ask for, at the cost of the breadth it does ask for. If a mathematics chapter opens with quadratic equations, it belongs to a different exam.',
          },
          {
            type: 'note',
            title: 'Keep one sheet for the final week',
            text: 'By the last week you want a single sheet: the general knowledge facts you keep forgetting, the two or three arithmetic shapes that still slow you down, and the reasoning figure types you find least natural. Everything else has either landed or will not land in seven days, and a short sheet actually gets read.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'Which forces recruit through SSC GD Constable?',
        a: 'The examination fills General Duty Constable posts in the Border Security Force, Central Industrial Security Force, Central Reserve Police Force, Sashastra Seema Bal, Indo-Tibetan Border Police and Assam Rifles, along with constable posts in the Secretariat Security Force; Sepoy posts in the Narcotics Control Bureau were part of the 2025 cycle but not the 2026 notice. Force allocation follows from your merit position and the preference order you submitted, so you do not apply to a single force.',
      },
      {
        q: 'Can I take the SSC GD exam in a regional language?',
        a: 'Yes. The computer-based test is offered in several regional languages in addition to English and Hindi, so candidates schooled in a regional medium are not disadvantaged. Separately, the language section of the paper asks you to choose between English and Hindi. Pick the language you read fastest — reading speed is part of what an eighty-question hour tests.',
      },
      {
        q: 'Which stage eliminates the most SSC GD candidates?',
        a: 'The physical and medical stages, not the written paper. The CBT is pitched at matriculation level and is cleared by a large number of candidates; the physical efficiency test, physical standard test and detailed medical examination are where most eliminations happen. This is why physical training and an early check of the medical standards should run in parallel with written preparation from the first week rather than being left until the CBT result.',
      },
      {
        q: 'What is the SSC GD exam pattern for 2026?',
        a: 'A single computer-based paper of 80 objective questions for 160 marks in 60 minutes: General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and English or Hindi, 20 questions of 2 marks each. There is no sectional timer, 0.25 marks are deducted for each wrong answer, and the paper is offered in English, Hindi and 13 regional languages. PET/PST and the medical examination that follow are qualifying, so the CBE marks — normalised, plus NCC bonus — are the whole merit list.',
      },
      {
        q: 'What is the negative marking in SSC GD?',
        a: '0.25 marks for every wrong answer, against 2 marks for a correct one. Unanswered questions are not penalised. Because the penalty is small relative to the credit, a guess narrowed to two or even three options is worth taking.',
      },
      {
        q: 'What are the SSC GD 2026 PET and PST standards?',
        a: 'PET: men run 5 km in 24 minutes and women 1.6 km in 8½ minutes; for the Ladakh region it is 1.6 km in 7 minutes and 800 m in 5 minutes. PST: height 170 cm for men and 157 cm for women, chest 80 cm unexpanded with 5 cm expansion for men, with relaxed standards — for example 162.5 cm and 150 cm for Scheduled Tribes, 165 cm and 155 cm for Garhwalis, Kumaonis, Dogras, Marathas and candidates of Assam, Himachal Pradesh, J&K and Ladakh. Ex-servicemen are measured but exempt from the race.',
      },
      {
        q: 'When is the SSC GD 2026 result?',
        a: 'The CBE was held from 27 April to 31 May 2026 and the tentative answer key was released on 15 June 2026 with challenges until 20 June. As of 12 September 2026 the result had not been declared. In the 2025 cycle the CBE result came about four months after the exam and PET/PST began about two months after that.',
      },
      {
        q: 'How many vacancies are there in SSC GD 2026?',
        a: '25,487 tentative vacancies — 23,467 male and 2,020 female — across BSF (616), CISF (14,595), CRPF (5,490), SSB (1,764), ITBP (1,293), Assam Rifles (1,706) and SSF (23), with 10 per cent reserved for ex-servicemen and state-wise distribution published on 8 December 2025. The 2025 cycle finished with 53,690 vacancies filled.',
      },
      {
        q: 'What is the age limit for SSC GD Constable 2026?',
        a: '18 to 23 years as on 1 January 2026 — born between 2 January 2003 and 1 January 2008 — with five years’ relaxation for SC and ST, three for OBC, three after deducting service for ex-servicemen, and five, eight or ten years for children and dependants of victims killed in the 1984 riots.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SSC CPO
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ssc-cpo',
    path: '/government-exams/ssc/ssc-cpo/',
    name: 'SSC CPO',
    fullName: 'Staff Selection Commission Central Police Organisation Sub-Inspector Examination',
    authority: 'Staff Selection Commission (SSC)',
    official: 'ssc.gov.in',
    seoTitle: 'SSC CPO SI Exam Pattern 2026: Paper 1, Paper 2, PET/PST and Syllabus',
    metaDescription:
      'SSC CPO Sub-Inspector 2026 exam pattern — Paper 1 and Paper 2 marks, time, negative marking, PET/PST standards, eligibility, 2,018 vacancies and free mocks.',
    heroTitle: 'SSC CPO SI Exam Pattern 2026: Paper 1, Paper 2, PET/PST Standards and Free Mock Tests',
    lead: [
      'SSC CPO recruits Sub-Inspectors for the Delhi Police and for the central armed police forces. It is a graduate-level uniformed entry, and it sits in an unusual place: more demanding physically than the office-based SSC examinations, and more demanding academically than constable-level recruitment.',
      'The feature that defines its preparation is Paper 2 — the paper the merit list is built from, in which 200 of the 320 marks are English language and comprehension. No other SSC examination weights a single subject that heavily, and candidates who treat English as an afterthought discover too late that it is worth twice the rest of Paper 2 put together.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission for Delhi Police and the CAPFs'],
      ['Level', 'Bachelor’s degree as on the closing date (B.Sc. with PCM or an engineering diploma for SI Fire)'],
      ['Posts', 'Sub-Inspector (Executive) in Delhi Police, Sub-Inspector (GD) in CRPF, BSF, ITBP, CISF and SSB, Sub-Inspector (Fire) in CISF — Pay Level 6 (₹35,400–1,12,400)'],
      ['2026 cycle', 'Notice 10 September 2026; applications to 30 September 2026; 2,018 tentative vacancies; Paper 1 tentatively October–November 2026'],
      ['Age', '20–25 years as on 1 August 2026 (18–30 for SI Fire), with relaxations'],
      ['Stages', 'Paper 1 (100 marks) → PST/PET → Paper 2 (320 marks) → Detailed Medical Examination → document verification'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Central Police Organisation examination fills Sub-Inspector posts in the Delhi Police and in the central armed police forces — a supervisory uniformed rank rather than an entry-level constable position. Candidates need a bachelor’s degree in any discipline, and the age band is narrower than most SSC examinations, which makes this an exam with a limited number of realistic attempts for any individual.',
      },
      {
        type: 'p',
        text: 'The selection process interleaves written and physical stages rather than running them in sequence: Paper 1 first, then the physical tests, then Paper 2 for those who cleared both. That ordering matters for planning, because a candidate who neglects fitness cannot reach Paper 2 no matter how strong their English is.',
      },
      {
        type: 'list',
        title: 'What makes CPO distinct among SSC exams',
        items: [
          { text: 'An English-heavy second paper', note: 'Paper 2 is 320 marks and builds the merit list; 200 of those marks are a one-hour, 100-question English language and comprehension section.' },
          { text: 'Physical tests between the two papers', note: 'so fitness gates access to the second written stage.' },
          { text: 'A narrower age band', note: 'the upper limit is lower than for CGL or MTS, so the window of eligibility is shorter.' },
          { text: 'A driving licence requirement for some posts', note: 'male candidates applying for Delhi Police Sub-Inspector have historically needed a valid licence for a light motor vehicle at a specified stage.' },
        ],
      },
      {
        type: 'note',
        title: 'Check the driving licence and age conditions early',
        text: 'The licence requirement applies to specific posts and candidate groups and has to be met by a stated point in the process — obtaining one takes time. The age band is also narrower here than in other SSC examinations. Both are worth confirming in the current notification before you build a plan around this exam.',
      },
    ],
    stages: [
      {
        name: 'Paper 1 — Computer Based Examination',
        mode: 'Objective, 100 questions, 100 marks, 60 minutes',
        detail: 'General Intelligence and Reasoning, General Knowledge and General Awareness, Quantitative Aptitude and English Comprehension — 25 questions of one mark each, with a 15-minute sectional timer on each part. 0.25 marks deducted per wrong answer. Paper 1 marks, with NCC bonus, shortlist candidates for PST/PET; the final merit is built from Paper 2.',
      },
      {
        name: 'Physical Standard Test and Physical Endurance Test',
        mode: 'Physical, conducted by the CAPFs',
        detail: 'PST: height 170 cm and chest 80–85 cm for men (165 cm for hill-area candidates, 162.5 cm and 77–82 cm for Scheduled Tribes), height 157 cm for women (155 and 154 cm with relaxation), no chest requirement for women. PET for men: 100 m in 16 seconds, 1.6 km in 6.5 minutes, long jump 3.65 m, high jump 1.2 m and 16 lb shot put 4.5 m, each in three chances; for women: 100 m in 18 seconds, 800 m in 4 minutes, long jump 2.7 m and high jump 0.9 m. Qualifying; ex-servicemen are exempt from PET.',
      },
      {
        name: 'Paper 2 — Computer Based Examination',
        mode: 'Objective, 160 questions, 320 marks, 2 hours',
        detail: 'Parts I–III — General Intelligence and Reasoning, General Knowledge and General Awareness, Quantitative Aptitude — 20 questions of 2 marks each in one hour with a 20-minute timer per part; Part IV English Language and Comprehension, 100 questions for 200 marks in one hour. 0.50 marks deducted per wrong answer. The standard is higher than Paper 1, and the final merit and force allocation come from Paper 2 marks plus NCC bonus and the preference order.',
      },
      {
        name: 'Detailed Medical Examination and document verification',
        mode: 'CAPF medical board, then verification',
        detail: 'Candidates who qualify Paper 2 are medically examined: distant vision 6/6 and 6/9 and near vision N6 and N9 without correction, plus the general standards in the notice, with a review medical examination on appeal. Male candidates for SI in Delhi Police must hold a valid LMV (motorcycle and car) driving licence on the date of PET; those without one are considered only for the CAPF posts.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the SSC notice board. The notice for the Sub-Inspector in Delhi Police and Central Armed Police Forces Examination 2026 was published on 10 September 2026 with 2,018 tentative vacancies. Online applications run from 10 to 30 September 2026 (23:00), fee payment closes on 1 October and the correction window is 8 to 10 October 2026. The date of the Computer Based Examination (Paper 1) is to be notified; the Commission’s 2026 calendar had placed it in October–November 2026.',
      },
      {
        type: 'table',
        caption: 'Key dates of the SSC CPO 2026 cycle, from the notice of 10 September 2026.',
        head: ['Event', 'Date'],
        rows: [
          ['Notice published', '10 September 2026'],
          ['Online applications', '10–30 September 2026 (23:00)'],
          ['Last date for fee payment', '1 October 2026 (23:00)'],
          ['Application correction window', '8–10 October 2026 (₹200 first correction, ₹500 second)'],
          ['Paper 1 (Computer Based Examination)', 'To be notified; October–November 2026 in the calendar'],
          ['PST/PET, Paper 2, medical', 'To follow Paper 1'],
        ],
      },
      {
        type: 'table',
        caption: 'Tentative vacancies for SSC CPO 2026, from the notice.',
        head: ['Post', 'Male', 'Female', 'Total'],
        rows: [
          ['Sub-Inspector (Executive), Delhi Police', '205', '112', '317'],
          ['Sub-Inspector (GD), CAPFs — CRPF 254, BSF 457, ITBP 187, CISF 250, SSB 172 male', '1,320', '147', '1,467'],
          ['Sub-Inspector (Fire), CISF', '234', '—', '234'],
          ['Total', '1,759', '259', '2,018'],
        ],
      },
      {
        type: 'p',
        text: 'The 2025 cycle shows the timeline. Paper 1 of CPO 2025 was held from 9 to 12 December 2025; the result of 30 March 2026 shortlisted candidates for PET/PST with cut-offs, out of 200 under the previous scheme, of 128.02 (UR), 124.22 (OBC), 126.56 (EWS), 100.92 (SC) and 95.20 (ST) for women and 119.48 (UR), 115.03 (OBC), 114.60 (EWS), 88.95 (SC) and 89.06 (ST) for men — 4,320 women and 44,067 men were shortlisted. Tentative vacancies for 2025 had been published on 16 February 2026.',
      },
      {
        type: 'note',
        title: 'What the 2026 notice changed',
        text: 'Paper 1 is now 100 questions of one mark each — 100 marks instead of 200 — with 15-minute sectional timers and 0.25 deducted per wrong answer. Paper 2 is no longer an English-only paper: it has three 20-question parts on reasoning, general awareness and quantitative aptitude for 120 marks with 20-minute timers, and then 100 English questions for 200 marks, 320 marks in two hours, with 0.50 deducted per wrong answer. Final selection is on Paper 2. The 2025 cut-offs above are therefore not comparable to the new Paper 1 scale.',
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'Eligibility is judged as on the closing date, 30 September 2026, except age, which is judged as on 1 August 2026, and the driving licence, which is judged on the date of PET. Documents are verified only after Paper 2.',
      },
      {
        type: 'list',
        title: 'Educational qualification as on 30 September 2026',
        items: [
          {
            text: 'Sub-Inspector in Delhi Police and Sub-Inspector (GD) in CAPFs',
            note: 'A bachelor’s degree from a recognised university or equivalent; candidates who have appeared in the final examination may apply if the degree is complete by the closing date.',
          },
          {
            text: 'Sub-Inspector (Fire) in CISF',
            note: 'A bachelor’s degree in science with physics, chemistry and mathematics, or matriculation with a three-year diploma in mechanical, civil, electrical, automobile, chemical, mining, aeronautical or telecommunication engineering, or equivalent.',
          },
          {
            text: 'Male candidates for SI in Delhi Police',
            note: 'A valid driving licence for LMV (motorcycle and car) on the date of the physical tests; without it a male candidate is considered for the CAPF posts only.',
          },
        ],
      },
      {
        type: 'table',
        caption: 'Age as on 1 August 2026: 20–25 years for all posts except SI (Fire), which is 18–30. Relaxations beyond the upper limit, from the notice.',
        head: ['Category', 'Relaxation'],
        rows: [
          ['SC and ST', '5 years'],
          ['OBC (non-creamy layer)', '3 years'],
          ['Ex-servicemen', '3 years after deducting military service from actual age'],
          ['Widows, divorced women and judicially separated women who have not remarried, for SI in Delhi Police only', 'Up to 35 years (40 for SC/ST)'],
          ['Departmental candidates of Delhi Police with 3 years’ regular service, against Delhi Police vacancies only', 'Up to 30 years (33 for OBC, 35 for SC/ST)'],
        ],
      },
      {
        type: 'table',
        caption: 'Physical standards (PST). No chest requirement for women.',
        head: ['Category', 'Height', 'Chest, unexpanded / expanded'],
        rows: [
          ['Men, general', '170 cm', '80 / 85 cm'],
          ['Men of hill areas of Garhwal, Kumaon, Himachal Pradesh, Gorkhas, Dogras, Marathas, Kashmir Valley, Leh and Ladakh, North-Eastern states and Sikkim', '165 cm', '80 / 85 cm'],
          ['Men of Scheduled Tribes', '162.5 cm', '77 / 82 cm'],
          ['Women, general', '157 cm', '—'],
          ['Women of the hill areas and regions above', '155 cm', '—'],
          ['Women of Scheduled Tribes', '154 cm', '—'],
        ],
      },
      {
        type: 'list',
        title: 'Other conditions',
        items: [
          {
            text: 'Nationality',
            note: 'Indian citizens, and the categories the notice lists with an eligibility certificate.',
          },
          {
            text: 'Fee',
            note: '₹100 online; women and SC, ST and ex-servicemen candidates are exempt.',
          },
          {
            text: 'Medical',
            note: 'Distant vision 6/6 in the better eye and 6/9 in the worse, near vision N6 and N9, without glasses or corrective surgery; the full standards are in the notice and are examined after Paper 2, with a review medical examination on appeal.',
          },
          {
            text: 'NCC bonus',
            note: 'C certificate 5 per cent of maximum marks, B 3 per cent, A 2 per cent, in each of Paper 1 and Paper 2, added to normalised marks and substantiated at verification.',
          },
        ],
      },
    ],
    procedure: {
      eyebrow: 'Application to appointment',
      heading: 'How to apply for SSC CPO 2026, what Paper 1, the physical tests and Paper 2 involve, and how posts are allotted',
      intro: 'The steps in the order they happen, with the windows and fees the 10 September 2026 notice specifies.',
      blocks: [
        {
          type: 'steps',
          title: 'The SSC CPO process from registration to result',
          items: [
            {
              title: 'One-Time Registration on ssc.gov.in',
              text: 'Create an OTR profile once on the Commission’s portal. Registration asks for Aadhaar-based verification, a mobile number and e-mail that remain with you for the whole cycle, and your basic educational and category details. The OTR number and password are what you log in with at every later stage — exam-city intimation, admit card, answer-key challenge, result and option form — so keep them safe.',
            },
            {
              title: 'Fill the online application for SSC CPO',
              text: 'Log in, pick the examination, confirm the OTR details, choose the examination centre preferences and the medium of the paper, and upload or capture the photograph and signature exactly as the notice specifies. The declaration you sign at the end binds you to the eligibility conditions, and the Commission verifies documents only at the end of the process — an ineligible candidate can go through every stage and be dropped at verification.',
            },
            {
              title: 'Pay the fee',
              text: 'The fee is ₹100, paid online, with 1 October 2026 (23:00) as the last date. Women and SC, ST and ex-servicemen candidates are exempt. Fees are not refunded.',
            },
            {
              title: 'Use the correction window if you need it',
              text: 'A three-day correction window opens about a week after applications close. The Commission charges ₹200 for the first corrected submission and ₹500 for the second, from every candidate regardless of category. Some fields — notably the OTR identity details — cannot be changed at this point, which is why the OTR should be filled carefully in the first place.',
            },
            {
              title: 'Exam-city intimation, then the admission certificate',
              text: 'Roughly two weeks before the examination the candidate login shows the city allotted; the admission certificate itself is released only three to four days before the date. Print it, and carry it with an original photo identity document that carries the same date of birth as your application.',
            },
            {
              title: 'On the day: biometrics, frisking and the clock',
              text: 'Report at the time on the admission certificate; entry closes before the shift begins. Expect biometric capture and frisking, and expect the paper to be delivered with the timers the notice describes — a section or session that has closed cannot be reopened. Rough sheets are provided; nothing electronic is allowed inside.',
            },
            {
              title: 'Tentative answer key and challenge',
              text: 'A few days after the last shift the Commission uploads tentative answer keys with each candidate’s response sheet. Objections are filed online only, within the announced window, on payment of a per-question fee that is not refunded. Subject-matter experts examine the objections and the final key is used for evaluation.',
            },
            {
              title: 'Result, marks and the next stage',
              text: 'Results are published as PDF write-ups on the notice board with category-wise cut-offs and the count of candidates shortlisted; individual marks are released in the login shortly afterwards. Candidates for the next stage receive fresh admission certificates through the same login.',
            },
            {
              title: 'Paper 1 result and the PST/PET shortlist',
              text: 'Candidates above the minimum qualifying marks are shortlisted for PST/PET on normalised Paper 1 marks plus NCC bonus, in separate male and female lists. Answer-key challenges cost ₹50 per question, filed online within the window.',
            },
            {
              title: 'PST first, then PET, run by the CAPFs',
              text: 'Height and chest are measured before the endurance events; a candidate who fails measurement can appeal to the appellate board on the spot. The events follow — 100 m, 1.6 km or 800 m, long jump, high jump and, for men, shot put, each in three chances. Ex-servicemen are exempt from PET but must qualify the medical. Male Delhi Police candidates bring the LMV licence to this stage.',
            },
            {
              title: 'Paper 2',
              text: 'Candidates who qualify PST/PET sit Paper 2 — 160 questions for 320 marks in two hours — a few weeks later. Marks are normalised, and the notice states that the standard of Paper 2 is higher than Paper 1.',
            },
            {
              title: 'Detailed medical examination, verification and allocation',
              text: 'Candidates who qualify Paper 2 are medically examined by the CAPF medical boards, with a review medical examination on appeal, and their documents — degree, category, age, NCC and driving licence — are verified. Final selection and allocation of post and force are by Paper 2 marks with NCC bonus and the preference order given in the application; once a candidate is allotted the first available preference by merit, no other option is considered.',
            },
          ],
        },
        {
          type: 'note',
          title: 'The preference order is used once and cannot be changed',
          text: 'Rank Delhi Police, each CAPF and SI (Fire) in the application in the order you would actually accept them. A candidate allotted a lower preference by merit is not reconsidered for a higher one later, and the notice is explicit that the first available preference is final.',
        },
      ],
    },
    pattern: [
      {
        type: 'p',
        text: 'The SSC CPO exam pattern below is the scheme in the notice of 10 September 2026, which changed both papers from the 2025 cycle. The full treatment is on the exam pattern page.',
      },
      {
        type: 'table',
        caption: 'SSC CPO Paper 1 exam pattern 2026: 100 questions, 100 marks, 60 minutes with a 15-minute sectional timer per part; 0.25 marks deducted per wrong answer; shortlists for PST/PET.',
        head: ['Part', 'Subject', 'Questions', 'Marks', 'Time'],
        rows: [
          ['I', 'General Intelligence and Reasoning', '25', '25', '15 minutes'],
          ['II', 'General Knowledge and General Awareness', '25', '25', '15 minutes'],
          ['III', 'Quantitative Aptitude', '25', '25', '15 minutes'],
          ['IV', 'English Comprehension', '25', '25', '15 minutes'],
          ['', 'Total', '100', '100', '60 minutes'],
        ],
      },
      {
        type: 'table',
        caption: 'SSC CPO Paper 2 exam pattern 2026: 160 questions, 320 marks, 2 hours; 0.50 marks deducted per wrong answer; the final merit is built from this paper.',
        head: ['Part', 'Subject', 'Questions', 'Marks', 'Time'],
        rows: [
          ['I', 'General Intelligence and Reasoning', '20', '40', '1 hour for Parts I–III, 20 minutes per part'],
          ['II', 'General Knowledge and General Awareness', '20', '40', ''],
          ['III', 'Quantitative Aptitude', '20', '40', ''],
          ['IV', 'English Language and Comprehension', '100', '200', '1 hour'],
          ['', 'Total', '160', '320', '2 hours'],
        ],
      },
      {
        type: 'table',
        caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
        head: ['Category', 'Minimum qualifying marks'],
        rows: [
          ['Unreserved', '30%'],
          ['OBC and EWS', '25%'],
          ['All other categories', '20%'],
        ],
      },
      {
        type: 'p',
        text: 'The examination is conducted in multiple shifts, and marks are normalised by the formula the Commission published on 2 June 2025 before cut-offs and merit are computed. Normalised scores can therefore differ from raw scores, in either direction, depending on the difficulty of the shift you sat. Parts I–III of both papers are set in Hindi and English; the English parts are in English only. NCC bonus is added to normalised marks in each paper.',
      },
    ],
    studyPlan: [
      {
        type: 'p',
        text: 'CPO is the SSC exam where physical preparation is as decisive as the written one: the PET events — a 1.6 km run in 6.5 minutes for men, high jump and long jump for everyone — drop a large share of Paper 1 qualifiers every cycle. The 2026 pattern also moves the weight of the written exam onto Paper 2, where English alone is 200 of the 320 marks.',
      },
      {
        type: 'steps',
        title: 'A five-month plan',
        items: [
          {
            title: 'Months 1–2: foundations, and start the PET events',
            text: 'The four Paper 1 subjects at CGL Tier 1 depth — arithmetic and basic algebra and geometry, the reasoning question types, a static general awareness spine and English grammar and vocabulary. Begin sprint, middle-distance and jumping practice; the events are technical and the three-chance rule rewards practice.',
          },
          {
            title: 'Month 3: Paper 2 English and the sectional timers',
            text: 'Daily reading comprehension, cloze tests, error spotting, sentence improvement, idioms and vocabulary — 100 questions in an hour is 36 seconds each. Practise Paper 1 as four 15-minute blocks.',
          },
          {
            title: 'Month 4: full mocks',
            text: 'A Paper 1 mock every second day with 0.25 deducted, a Paper 2 mock every week with 0.50 deducted, and an error log. Time every PET event weekly.',
          },
          {
            title: 'Month 5: revision and the exam',
            text: 'Revise from your own notes and error log, keep current affairs going, and taper mocks in the final ten days. Be inside every PET standard with a margin before Paper 1, because PET follows the result within weeks.',
          },
        ],
      },
      {
        type: 'list',
        title: 'Where the marks are in the 2026 scheme',
        items: [
          {
            text: 'Paper 2 English: 200 marks',
            note: 'The largest block in the examination, at 0.50 off per wrong answer. Comprehension speed and grammar accuracy decide the merit list.',
          },
          {
            text: 'Paper 2 Parts I–III: 120 marks in 20-minute blocks',
            note: 'Twenty questions each of reasoning, general awareness and quantitative aptitude at a higher standard than Paper 1.',
          },
          {
            text: 'Paper 1: qualifying, but the cut-off is real',
            note: 'In 2025 the male UR cut-off was about 60 per cent of the paper. Do not treat the shortlist as a formality.',
          },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the notice of examination for the Sub-Inspector in Delhi Police and CAPFs Examination 2026, and the Paper 1 result write-up and tentative vacancy list of the 2025 examination, on the SSC notice board. The Paper 1 date for 2026 has not been notified.',
      },
      {
        type: 'links',
        title: 'Official documents',
        items: [
          {
            label: 'Notice of Sub-Inspector in Delhi Police and CAPFs Examination 2026 (10 September 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2026.pdf',
          },
          {
            label: 'CPO 2025 Paper 1 result write-up with cut-offs (30 March 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/write-up%20CPO%202025.pdf',
          },
          {
            label: 'Tentative vacancies for SI in Delhi Police and CAPFs 2025 (16 February 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Tentative%20Vacancies-%20SI%20CPO,%202025.pdf',
          },
          {
            label: 'CPO 2024 revised final result (26 November 2025)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_26112025.pdf',
          },
          {
            label: 'SSC home page — notices, calendar and candidate login',
            href: 'https://ssc.gov.in/',
          },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'SSC CPO syllabus — Paper 1 reasoning, general awareness, quantitative aptitude and English, plus the Paper 2 syllabus with its 200-mark English section.',
        lead: [
          'Two papers, and the second one is where the merit list is built — 320 marks, of which 200 are English. Read the Paper 2 syllabus more carefully than the Paper 1 syllabus, because it carries the weight.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Intelligence and Reasoning (Paper 1)',
                'Analogies, similarities and differences, space visualisation, spatial orientation, problem solving, analysis, judgement, decision making, visual memory, discrimination, observation, relationship concepts, arithmetical reasoning, verbal and figure classification, arithmetic number series, non-verbal series, coding and decoding, statement conclusion, and syllogistic reasoning.',
              ],
              [
                'General Knowledge and General Awareness (Paper 1)',
                'Current events and everyday observation, sports, history, culture, geography, economic scene, Indian polity and the Constitution, scientific research, and general science. Questions are pitched at what an educated candidate would be expected to know without specialist study.',
              ],
              [
                'Quantitative Aptitude (Paper 1)',
                'Whole numbers, decimals, fractions and relationships between numbers, percentage, ratio and proportion, square roots, averages, interest, profit and loss, discount, partnership, mixture and alligation, time and distance, time and work. Algebra covers basic identities and elementary surds and graphs of linear equations; geometry covers triangles and their congruence and similarity, circles and their chords and tangents, and common tangents to circles; mensuration covers triangles, quadrilaterals, regular polygons, circles, prisms, cones, cylinders, spheres and hemispheres; trigonometry covers ratios, identities, complementary angles and heights and distances; and statistics covers histograms and frequency polygons.',
              ],
              [
                'English Comprehension (Paper 1)',
                'A candidate’s ability to understand correct English, comprehension and writing ability, tested through error spotting, fill in the blanks, vocabulary, sentence structure and short passages.',
              ],
              [
                'English Language and Comprehension (Paper 2)',
                'Error recognition, filling in the blanks with articles, verbs, prepositions and other parts of speech, vocabulary including synonyms, antonyms and homonyms, spellings, grammar, sentence structure, sentence completion, phrases and idiomatic usage, active and passive voice, direct and indirect narration, para jumbles, cloze passages and multiple comprehension passages. The paper tests depth of language command rather than breadth of subject knowledge.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The practical implication of this syllabus is a study split most candidates get wrong. Paper 2 is worth more than three times Paper 1 and its English section alone is worth twice Paper 1, and English is a subject that improves slowly through daily exposure rather than quickly through intensive revision. It should be the first thing you start and the last thing you stop.',
          },
          {
            type: 'p',
            text: 'The two English syllabi are worth comparing side by side rather than reading in sequence. The Paper 1 English section is a compact test of the same ground the Paper 2 English section covers at length, which means every hour spent on Paper 2 English is also Paper 1 preparation. Since the 2026 notice, quantitative aptitude, reasoning and general awareness also reappear in Paper 2 as 20-question parts at a higher standard, so work on them keeps paying too — but at 40 marks each against 200 for English.',
          },
          {
            type: 'note',
            title: 'Read the Paper 2 syllabus as a specification, not a summary',
            text: 'Phrases such as error recognition, fill in the blanks and comprehension look generic, but at one hundred English questions in an hour the paper has room to test each of them systematically rather than by sampling. Every listed item will appear, and several will appear many times. Treat the list as an exhaustive specification of what to prepare, because in this paper it very nearly is.',
          },
        ],
      },
      'exam-pattern': {
        description: 'SSC CPO exam pattern 2026 — Paper 1 and Paper 2 tables with questions, marks, time, sectional timers, negative marking and PST/PET standards.',
        heading: 'SSC CPO SI exam pattern 2026: Paper 1, Paper 2, PST/PET and negative marking',
        lead: ['Both papers were restructured in the notice of 10 September 2026. Every figure here is from that notice — what each paper asks, how the sectional timers run, what a wrong answer costs and which marks decide the post.'],
        blocks: [
          {
            type: 'p',
            text: 'The Sub-Inspector examination has four stages, all mandatory: Paper 1, the physical standard and endurance tests, Paper 2, and the detailed medical examination. Paper 1 shortlists for the physical tests; Paper 2 — set to a higher standard — builds the final merit list and decides the allocation of post and force.',
          },
          {
            type: 'table',
            caption: 'SSC CPO Paper 1 exam pattern 2026. Objective; Parts I–III in Hindi and English; one mark per question; 0.25 marks deducted per wrong answer.',
            head: ['Part', 'Subject', 'Questions', 'Marks', 'Time'],
            rows: [
              ['I', 'General Intelligence and Reasoning', '25', '25', '1 hour, with a 15-minute sectional timer on each part'],
              ['II', 'General Knowledge and General Awareness', '25', '25', ''],
              ['III', 'Quantitative Aptitude', '25', '25', ''],
              ['IV', 'English Comprehension', '25', '25', ''],
              ['', 'Total', '100', '100', ''],
            ],
          },
          {
            type: 'table',
            caption: 'SSC CPO Paper 2 exam pattern 2026. Objective; two marks per question; 0.50 marks deducted per wrong answer; the final merit is built from this paper.',
            head: ['Part', 'Subject', 'Questions', 'Marks', 'Time'],
            rows: [
              ['I', 'General Intelligence and Reasoning', '20', '40', '1 hour for Parts I–III, with a 20-minute sectional timer on each'],
              ['II', 'General Knowledge and General Awareness', '20', '40', ''],
              ['III', 'Quantitative Aptitude', '20', '40', ''],
              ['IV', 'English Language and Comprehension', '100', '200', '1 hour'],
              ['', 'Total', '160', '320', '2 hours'],
            ],
          },
          {
            type: 'list',
            title: 'How the two papers are scored',
            items: [
              {
                text: 'Paper 1 shortlists, Paper 2 ranks',
                note: 'Candidates are shortlisted for PST/PET on normalised Paper 1 marks with NCC bonus; final selection and allocation are on normalised Paper 2 marks with NCC bonus and the preference order.',
              },
              {
                text: 'Minimum qualifying marks in both papers',
                note: '30 per cent for UR, 25 for OBC and EWS, 20 for all other categories, judged before NCC bonus is added.',
              },
              {
                text: 'Negative marking differs between the papers',
                note: '0.25 per wrong answer against one mark in Paper 1; 0.50 against two in Paper 2. The guessing arithmetic is the same in both — a two-option guess gains, a four-option guess loses.',
              },
              {
                text: 'Sectional timers',
                note: 'Fifteen minutes per part in Paper 1; twenty minutes per part in Parts I–III of Paper 2, then a separate hour for English. A part that has closed cannot be reopened.',
              },
              {
                text: 'NCC bonus in each paper',
                note: '5 per cent of maximum marks for a C certificate, 3 for B, 2 for A, if claimed in the application and substantiated at verification.',
              },
            ],
          },
          {
            type: 'table',
            caption: 'Physical Endurance Test — each event in three chances where the notice allows; qualifying; ex-servicemen exempt.',
            head: ['Event', 'Male', 'Female'],
            rows: [
              ['100 metres', '16 seconds', '18 seconds'],
              ['Middle distance', '1.6 km in 6.5 minutes', '800 m in 4 minutes'],
              ['Long jump', '3.65 m', '2.7 m'],
              ['High jump', '1.2 m', '0.9 m'],
              ['Shot put (16 lb)', '4.5 m', '—'],
            ],
          },
          {
            type: 'table',
            caption: 'Physical Standard Test. No chest requirement for women.',
            head: ['Category', 'Height', 'Chest, unexpanded / expanded'],
            rows: [
              ['Men, general', '170 cm', '80 / 85 cm'],
              ['Men of the listed hill areas, Gorkhas, Dogras, Marathas, Kashmir Valley, Leh and Ladakh, North-Eastern states and Sikkim', '165 cm', '80 / 85 cm'],
              ['Men of Scheduled Tribes', '162.5 cm', '77 / 82 cm'],
              ['Women, general', '157 cm', '—'],
              ['Women of the listed hill areas and regions', '155 cm', '—'],
              ['Women of Scheduled Tribes', '154 cm', '—'],
            ],
          },
          {
            type: 'p',
            text: 'For reference, under the previous 200-mark Paper 1 the CPO 2025 cut-offs declared on 30 March 2026 were 128.02 for women and 119.48 for men in the UR category, with 4,320 women and 44,067 men shortlisted for PET/PST. The 2026 Paper 1 is scored out of 100, so those figures indicate the proportion of the paper needed rather than a target score.',
          },
          {
            type: 'links',
            title: 'Related SSC CPO pages',
            items: [
              {
                label: 'SSC CPO syllabus for Paper 1 and Paper 2',
                to: '/government-exams/ssc/ssc-cpo/syllabus/',
              },
              {
                label: 'Free SSC CPO mock tests on the 2026 pattern',
                to: '/government-exams/ssc/ssc-cpo/mock-tests/',
              },
              {
                label: 'SSC CPO previous year papers',
                to: '/government-exams/ssc/ssc-cpo/previous-year-papers/',
              },
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SSC CPO previous year papers — how past Paper 1 and Paper 2 sets reveal the vocabulary and grammar patterns that decide this exam.',
        lead: [
          'For CPO, past papers are most valuable as an English resource. Two hundred language questions per cycle is a large, specific vocabulary list waiting to be extracted.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work through three or four years of Paper 2 and the shape of the commission’s English testing becomes clear: a recurring set of grammar rules tested repeatedly, a vocabulary range that stays within recognisable bounds, and idiom and phrase questions drawn from a pool that overlaps heavily year to year. Extracting that pool is worth more than any general vocabulary book, because it is exactly the material the examiner draws from.',
          },
          {
            type: 'steps',
            title: 'Working the papers',
            items: [
              { text: 'Build one consolidated vocabulary list from every past Paper 2.', note: 'Synonyms, antonyms, one-word substitutions, idioms and phrases, with the year noted beside each.' },
              { text: 'Group grammar errors by rule, not by question.', note: 'Subject-verb agreement, tense sequence, preposition usage, article usage. A short list of rules explains most of the error-spotting questions.' },
              { text: 'Time the comprehension passages separately.', note: 'Reading speed determines how many marks in Paper 2 are reachable at all.' },
              { text: 'Use Paper 1 papers for pacing practice.', note: 'Two hundred questions in two hours is a different rhythm from the shorter SSC papers.' },
            ],
          },
          {
            type: 'links',
            title: 'Related resources',
            items: [
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Police exam preparation', to: '/government-exams/police/' },
            ],
          },
          {
            type: 'list',
            title: 'What to extract from past Paper 2 sets',
            items: [
              { text: 'A consolidated vocabulary list', note: 'synonyms, antonyms, one-word substitutions and idioms, merged across every year into one document. At one to two hundred English questions a cycle, four years of papers yield a list large enough to be genuinely representative of the commission’s taste.' },
              { text: 'A grammar rule frequency count', note: 'tag each error-spotting and sentence-improvement question with the rule it tests — subject-verb agreement, preposition use, article use, tense sequence, parallelism, modifier placement. A short list of rules will account for most of the section.' },
              { text: 'Comprehension passage types', note: 'note the subject matter and length of the passages. They are more predictable than candidates expect, and knowing the register in advance meaningfully improves reading speed.' },
              { text: 'Cloze and para-jumble patterns', note: 'these reward a specific technique rather than general English ability, and the technique is best learned from the papers themselves.' },
            ],
          },
          {
            type: 'p',
            text: 'Paper 1 past papers serve a different purpose and should be used differently. Their value is pacing rehearsal — an hour, a hundred questions, four sections each on a 15-minute timer since 2026 — rather than content discovery, because the Paper 1 content is broadly the standard SSC graduate-level ground covered better by CGL material. Use CPO Paper 1 papers late, under full timing, to confirm that your section budget survives contact with a real paper.',
          },
          {
            type: 'note',
            title: 'Vocabulary lists are built, not bought',
            text: 'A list you assembled yourself from past papers outperforms a published word list of ten times the length, for two reasons: it reflects what this commission actually asks, and you remember words you had to look up more reliably than words handed to you already defined. Add to it daily, revise it weekly, and never restart it.',
          },
        ],
      },
      'mock-tests': {
        description:
          'SSC CPO mock tests — timed Paper 1 practice on the 2026 sectional timers, and Paper 2 practice weighted to its 200-mark English section.',
        lead: [
          'Practise both papers, separately. They test different things and reward completely different pacing.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Paper 1 is a breadth test: a hundred questions across four subjects in four 15-minute blocks, where the skill is moving on quickly from anything that resists you. Paper 2 is an endurance test: three 20-minute parts at a higher standard, then a hundred English questions in a continuous hour where concentration is itself the challenge. A candidate who only ever practises Paper 1 arrives at Paper 2 unprepared for how tiring it is.',
          },
          {
            type: 'list',
            title: 'What each mock should tell you',
            items: [
              { text: 'Paper 1 — questions left unattempted', note: 'a large tail means your pacing, not your knowledge, is the binding constraint.' },
              { text: 'Paper 1 — accuracy by section', note: 'with a deduction applied, a weak section attempted aggressively can cost more than it earns.' },
              { text: 'Paper 2 — accuracy in the second hour versus the first', note: 'a drop indicates stamina rather than knowledge, and the fix is longer practice sessions.' },
              { text: 'Paper 2 — comprehension versus grammar versus vocabulary', note: 'these three respond to different preparation, so a single overall score hides what needs work.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English notes and practice', to: '/study-material/english/' },
              { label: 'Sectional practice', to: '/practice/' },
            ],
          },
          {
            type: 'steps',
            title: 'A two-paper mock schedule',
            items: [
              { title: 'Until three months out', text: 'Sectional practice only — English daily, and the other three sections in rotation. Full mocks this early measure a candidate who does not exist yet.' },
              { title: 'Three months out', text: 'One full Paper 1 mock a week under real timing, with the section budget written down before you start and checked afterwards.' },
              { title: 'Two months out', text: 'Add a full Paper 2 mock every fortnight. A hundred English questions in an hour, after three timed parts, is a stamina exercise and the only way to prepare for it is to do it.' },
              { title: 'After Paper 1 is sat', text: 'Paper 2 mocks weekly, with physical training maintained. This window is short and it decides the merit list.' },
            ],
          },
          {
            type: 'p',
            text: 'The most informative number in a Paper 2 mock is not the score but the accuracy split between the first half of the English section and the second. A clear drop in the second half is a concentration and stamina finding rather than a knowledge one, and the remedy is more full-length practice rather than more grammar revision. A flat profile with mediocre accuracy throughout is the opposite diagnosis and calls for the opposite response.',
          },
          {
            type: 'note',
            title: 'Rehearse the physical tests too',
            text: 'Time yourself over the actual PET distances rather than training generally, and measure your jumps and throws against the published standards. A candidate who has never run the exact distance against the exact clock is guessing about the one stage that admits no partial credit.',
          },
        ],
      },
      preparation: {
        description:
          'SSC CPO preparation strategy — how to weight English for Paper 2, train for the physical stage, and sequence the two written papers.',
        lead: [
          'Weight your preparation the way the marks are weighted. English is 225 of 420 written marks and 200 of the 320 that build the merit list, and fitness decides whether you sit the second paper at all.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A plan that matches the mark distribution',
            items: [
              { text: 'From day one — English, daily, without exception.', note: 'Grammar rules, a running vocabulary list, and a comprehension passage every day. This is the largest single block of marks in the exam and the slowest to build.' },
              { text: 'From day one — physical training.', note: 'Running, plus the jump and throw events if you are a male candidate. The physical stage sits between the two papers; failing it ends the attempt.' },
              { text: 'Months one to three — quantitative aptitude.', note: 'Arithmetic first, then geometry, mensuration and trigonometry, which carry real weight in CPO Paper 1.' },
              { text: 'Months two to four — reasoning and general awareness.', note: 'Reasoning for speed, general awareness as a daily habit from a single source.' },
              { text: 'Month four — Paper 1 mocks under full timing.', note: 'Two hundred questions, two hours, no pauses.' },
              { text: 'Throughout, and intensively after Paper 1 — Paper 2 practice.', note: 'Full two-hour English sets, to build the concentration the paper demands as much as the knowledge.' },
            ],
          },
          {
            type: 'list',
            title: 'Where CPO candidates go wrong',
            items: [
              { text: 'Treating Paper 2 as a formality', note: 'it carries 320 marks against 100 in Paper 1, builds the merit list on its own, and is the usual difference between selection and a near miss.' },
              { text: 'Postponing physical training until after Paper 1', note: 'the gap between the paper and the physical test is short.' },
              { text: 'Leaving the driving licence requirement late', note: 'where it applies, it takes time to obtain and cannot be arranged at the last minute.' },
              { text: 'Preparing English through vocabulary lists alone', note: 'grammar rules and reading speed carry more of Paper 2 than isolated word lists do.' },
            ],
          },
          {
            type: 'p',
            text: 'Because the age band for CPO is narrower than for other SSC examinations, most candidates have a limited number of attempts. That argues for a serious, well-sequenced first attempt rather than a casual one used as practice.',
          },
          {
            type: 'defs',
            items: [
              [
                'The mark arithmetic that should drive your timetable',
                'Paper 1 carries a hundred marks, of which twenty-five are English. Paper 2 carries 320 marks, of which 200 are English. That is a clear majority of the written total resting on one subject, and a timetable that gives English a quarter of your hours is not matched to the exam you are sitting.',
              ],
              [
                'Fitness as a parallel track, not a phase',
                'The physical tests sit between the two papers, which means there is no point in the calendar at which you can safely stop training. Three or four sessions a week from the beginning, including running at the PET distance and practice at the jumps and the throw.',
              ],
              [
                'Quantitative aptitude and reasoning as finite projects',
                'Both appear in Paper 1 only. Build them to a solid level over a few months, then maintain with weekly practice rather than continuing to add depth that the exam will never ask for.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A candidate coming to CPO from SSC CGL preparation starts with a real advantage in Paper 1 and almost none in Paper 2, and the temptation is to lean on the strength rather than repair the gap. Resist it. The CGL-trained candidate who spends the extra months on quantitative aptitude they already handle well, rather than on the two hundred English questions they have never rehearsed, is optimising the smaller half of the paper.',
          },
          {
            type: 'note',
            title: 'Confirm the conditions attached to the post',
            text: 'Some Sub-Inspector posts carry additional requirements beyond the written and physical stages — a driving licence among them, where it applies. These take real time to arrange and cannot be produced at short notice. Read the eligibility section of the notification in full during your first week, not at the document verification stage.',
          },
        ],
      },
      'study-material': {
        description:
          'SSC CPO study material — English notes weighted for the 200-mark Paper 2 English section, plus quantitative aptitude, reasoning and general awareness.',
        lead: [
          'English first, and by a wide margin. The rest of the material supports Paper 1, which is worth half of what English is worth across the two papers.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work the English notes as a daily practice rather than a subject to be finished. Grammar rules are finite and can be learned in weeks; vocabulary and reading speed are cumulative and take months. Both are needed for Paper 2, and only one of them can be acquired quickly.',
          },
          {
            type: 'links',
            title: 'Subject notes for SSC CPO',
            items: [
              { label: 'English grammar, vocabulary and comprehension', to: '/study-material/english/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily English routine that works',
            items: [
              'One comprehension passage, read and answered against a clock.',
              'Ten new vocabulary items, revisited three days later and again after two weeks.',
              'One grammar rule reviewed with five practice sentences.',
              'One set of error-spotting questions, with every error classified by rule.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Grammar — the finite part',
                'Subject-verb agreement, tense sequence, articles, prepositions, parallelism, modifier placement, voice and narration. A closed set of rules that can be genuinely mastered in a couple of months and that will keep paying across four hundred marks of English.',
              ],
              [
                'Vocabulary — the cumulative part',
                'Synonyms, antonyms, one-word substitutions, idioms and phrasal verbs. Built from past papers into a single running list, revised weekly. This is the component that cannot be compressed, which is why it has to start on day one.',
              ],
              [
                'Reading — the part everyone neglects',
                'Comprehension speed is what lets you finish a hundred English questions in an hour. A daily passage read against a clock does more for it than any amount of grammar study.',
              ],
              [
                'The Paper 1 supporting subjects',
                'Quantitative aptitude, reasoning and general awareness at standard SSC graduate level. Solid, maintained, and firmly capped — they are a quarter of your written marks and should not consume half your hours.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'One structural suggestion for the English work: keep two separate documents rather than one. A rules document, which is short, stable and re-read weekly, and a vocabulary document, which grows continuously and is revised in passes. Mixing the two produces a file that is too long to revise and too disorganised to search, and it is the reason many candidates stop opening their own notes by the third month.',
          },
          {
            type: 'note',
            title: 'Reading beyond the syllabus is not a distraction here',
            text: 'For an exam with four hundred marks of English, a habit of reading well-edited prose for twenty minutes a day is preparation rather than leisure. It builds reading speed, exposes you to vocabulary in context — which is how vocabulary actually sticks — and makes the comprehension passages feel ordinary rather than difficult.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'Why is English so important in SSC CPO?',
        a: 'Because under the 2026 scheme English accounts for 225 of the 420 written marks — 25 in Paper 1 and 200 of the 320 in Paper 2, where 100 English questions fill the second hour — and Paper 2 is the paper the merit list is built from. No other SSC examination weights one subject so heavily. Since language ability improves through daily exposure over months rather than through intensive revision over weeks, English should be the first subject you start and the one you practise every day until the exam.',
      },
      {
        q: 'Who is eligible for SSC CPO?',
        a: 'A bachelor’s degree in any discipline from a recognised university, within an age band that is narrower than most other SSC examinations. Because the upper age limit is lower here, candidates typically have fewer attempts available than they would for SSC CGL, which is a reason to treat the first attempt seriously rather than as practice.',
      },
      {
        q: 'What is the SSC CPO exam pattern for 2026?',
        a: 'Paper 1 is 100 objective questions for 100 marks in 60 minutes — reasoning, general awareness, quantitative aptitude and English, 25 questions of one mark each with a 15-minute timer per part and 0.25 deducted per wrong answer. Candidates shortlisted on Paper 1 take the physical standard and endurance tests, then Paper 2: 20 questions each of reasoning, general awareness and quantitative aptitude for 120 marks in an hour with 20-minute timers, followed by 100 English questions for 200 marks in an hour — 320 marks in two hours with 0.50 deducted per wrong answer. The final merit and the post are decided on Paper 2. Both papers changed in the notice of 10 September 2026.',
      },
      {
        q: 'What are the SSC CPO PET and PST standards?',
        a: 'PET for men: 100 m in 16 seconds, 1.6 km in 6.5 minutes, long jump 3.65 m, high jump 1.2 m and 16 lb shot put 4.5 m, each in three chances; for women: 100 m in 18 seconds, 800 m in 4 minutes, long jump 2.7 m and high jump 0.9 m. PST: height 170 cm and chest 80 cm unexpanded, 85 cm expanded for men (165 cm for hill-area candidates; 162.5 cm and 77–82 cm for Scheduled Tribes), and height 157 cm for women (155 cm for hill areas, 154 cm for Scheduled Tribes) with no chest requirement. Ex-servicemen are exempt from PET.',
      },
      {
        q: 'What are the SSC CPO 2026 exam dates and vacancies?',
        a: 'The notice was published on 10 September 2026; applications close on 30 September, fee payment on 1 October, and the correction window runs from 8 to 10 October 2026. Paper 1 is to be notified, with October–November 2026 in the Commission’s calendar. There are 2,018 tentative vacancies: 317 for SI in Delhi Police (205 male, 112 female), 1,467 for SI (GD) in the CAPFs (1,320 male, 147 female) and 234 for SI (Fire) in CISF.',
      },
      {
        q: 'What is the negative marking in SSC CPO?',
        a: '0.25 marks per wrong answer in Paper 1, against one mark for a correct answer, and 0.50 marks per wrong answer in Paper 2, against two. Unanswered questions carry no penalty.',
      },
      {
        q: 'Is a driving licence compulsory for SSC CPO?',
        a: 'Only for male candidates who want Sub-Inspector in Delhi Police: they must hold a valid LMV (motorcycle and car) licence on the date of the physical tests. Male candidates without it are considered for the CAPF posts only; there is no licence requirement for women or for the CAPF and SI (Fire) posts.',
      },
      {
        q: 'What were the SSC CPO 2025 cut-off marks?',
        a: 'The Paper 1 result of 30 March 2026, on the previous 200-mark paper, put the UR cut-off at 128.02 for women and 119.48 for men, with OBC at 124.22 and 115.03, EWS at 126.56 and 114.60, SC at 100.92 and 88.95 and ST at 95.20 and 89.06; 4,320 women and 44,067 men were shortlisted for PET/PST. Paper 1 in 2026 is out of 100, so compare the proportion, not the number.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SSC JE
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ssc-je',
    path: '/government-exams/ssc/ssc-je/',
    name: 'SSC JE',
    fullName: 'Staff Selection Commission Junior Engineer Examination',
    authority: 'Staff Selection Commission (SSC)',
    official: 'ssc.gov.in',
    seoTitle: 'SSC JE Exam Pattern 2026: Paper 1, Paper 2 Syllabus, Civil, Mech, Electrical',
    metaDescription:
      'SSC JE 2026 exam pattern and syllabus — Paper 1 and Paper 2 marks, negative marking, Civil, Mechanical and Electrical topics, eligibility, vacancies and mocks.',
    heroTitle: 'SSC JE Exam Pattern and Syllabus 2026: Paper 1, Paper 2 for Civil, Mechanical and Electrical',
    lead: [
      'SSC JE recruits Junior Engineers for central government departments and organisations — the Central Public Works Department, the Military Engineer Services, the Border Roads Organisation, the Central Water Commission and others. It is a technical recruitment, and unlike every other SSC examination, most of its marks come from an engineering discipline rather than from general aptitude.',
      'That single fact should reshape how you prepare. General intelligence and general awareness together carry a minority of Paper 1; the technical paper is where the exam is won, and it is where diploma-holders with a solid grounding have a decisive advantage over candidates relying on general SSC preparation.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission for central engineering departments and the IMD'],
      ['Level', 'Diploma or degree in Civil, Electrical or Mechanical engineering, as the department specifies; science or engineering degree for Scientific Assistant in IMD'],
      ['Posts', 'Junior Engineer (Civil, Electrical, Mechanical, Telecom) and Scientific Assistant in IMD — Group B, Pay Level 6 (₹35,400–1,12,400)'],
      ['2026 cycle', 'Notice 2 September 2026; applications to 22 September 2026; 1,748 tentative vacancies; Paper 1 tentatively October–November 2026, Paper 2 December 2026'],
      ['Age', 'Up to 30 years for most posts, up to 32 for CPWD, as on 1 August 2026, with relaxations'],
      ['Stages', 'Paper 1 (200 marks, qualifying) → Paper 2 (300 marks, merit) → document verification by the department'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Junior Engineer examination fills technical Group B posts across central government departments — organisations that build and maintain public infrastructure, military engineering works, roads in border areas and water resources projects. Candidates apply in one of three disciplines, civil, mechanical or electrical, and are examined in that discipline throughout.',
      },
      {
        type: 'p',
        text: 'Eligibility rests on a diploma or degree in the relevant engineering discipline, with the exact requirement varying between the departments a post sits in. Some organisations accept a three-year diploma; others expect a degree, or a diploma plus a period of relevant experience. This is one of the few SSC examinations where the eligibility table genuinely differs post by post and reading it carefully is not optional.',
      },
      {
        type: 'list',
        title: 'Organisations that recruit through SSC JE',
        items: [
          { text: 'Central Public Works Department', note: 'buildings, roads and public infrastructure' },
          { text: 'Military Engineer Services', note: 'engineering works for the armed forces' },
          { text: 'Border Roads Organisation', note: 'road construction and maintenance in border and high-altitude regions' },
          { text: 'Central Water Commission and other departments', note: 'water resources, along with other central organisations that vary between cycles' },
        ],
      },
      {
        type: 'note',
        title: 'Eligibility differs by post and by department',
        text: 'Whether a particular post accepts a diploma or requires a degree, and whether it requires relevant experience, is set out post by post in the notification. Age limits also differ between departments. Confirm the requirement for the specific posts you intend to apply for rather than assuming a common standard.',
      },
    ],
    stages: [
      {
        name: 'Paper 1 — Computer Based Examination',
        mode: 'Objective, 200 questions, 200 marks, 2 hours',
        detail: 'General Intelligence and Reasoning (50 questions, 50 marks), General Awareness (50, 50) and General Engineering in the discipline applied for (100, 100): Civil and Structural, Electrical or Mechanical for JE; Computer Science and IT, Electronics and Telecommunication or Physics for Scientific Assistant in IMD; Telecommunication for JE (Telecom). 0.25 marks deducted per wrong answer. Qualifying — Paper 1 shortlists for Paper 2 through separate merit lists for each post group.',
      },
      {
        name: 'Paper 2 — Computer Based Examination',
        mode: 'Objective, 100 questions, 300 marks, 2 hours',
        detail: 'General Engineering in the discipline only — Part A Civil and Structural, Part B Electrical, Part C Mechanical, or the IMD and Telecom parts — 100 questions of three marks each with one mark deducted per wrong answer. The IS 456:2000 tables and steam tables are available on the console where needed. The final merit list is built from Paper 2 normalised marks.',
      },
      {
        name: 'Option-cum-preference, allocation and document verification',
        mode: 'Online form, sliding and verification',
        detail: 'After Paper 2 marks, candidates submit preferences for the organisations; the Commission publishes a first round of tentative allocation, runs an identity verification and fix/float sliding process at its regional offices, and declares the final result. The user department verifies the diploma or degree, experience where required, category and age certificates before appointment.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the SSC notice board. The notice for the Junior Engineer Examination 2026 was published on 2 September 2026 with 1,748 tentative vacancies, and for the first time the examination also recruits Scientific Assistant in the India Meteorological Department and Junior Engineer (Telecom) in the Department of Telecommunications. Online applications run from 2 to 22 September 2026 (23:00), fee payment closes on 23 September, and the correction window is 28 to 30 September 2026. Paper 1 is tentatively scheduled for October–November 2026 and Paper 2 for December 2026. An addendum of 10 September 2026 revised the essential qualification for Scientific Assistant in IMD.',
      },
      {
        type: 'table',
        caption: 'Key dates of the SSC JE 2026 cycle, from the notice of 2 September 2026.',
        head: ['Event', 'Date'],
        rows: [
          ['Notice published', '2 September 2026'],
          ['Online applications', '2–22 September 2026 (23:00)'],
          ['Last date for fee payment', '23 September 2026 (23:00)'],
          ['Application correction window', '28–30 September 2026 (₹200 first correction, ₹500 second)'],
          ['Paper 1 (Computer Based Examination)', 'October–November 2026, tentative'],
          ['Paper 2 (Computer Based Examination)', 'December 2026, tentative'],
          ['Tentative vacancies', '1,748; post-wise and category-wise list on the Tentative Vacancy page'],
        ],
      },
      {
        type: 'p',
        text: 'The 2025 cycle gives the timeline. JE 2025 Paper 1, placed in late October in the calendar, was held from 3 to 6 December and on 13 December 2025 with self-slot selection; the Paper 1 result came on 6 March 2026, Paper 2 followed in April with the tentative key on 16 April, final vacancies were fixed on 24 June 2026, the first round of tentative allocation was declared on 9 July 2026, the sliding and identity verification ran on 20–21 July, and the final result of 3 August 2026 recommended 1,731 candidates — 270 SC, 122 ST, 432 OBC, 127 EWS and 780 UR — against 1,731 vacancies.',
      },
      {
        type: 'note',
        title: 'What the 2026 notice changed',
        text: 'Two new post groups — Scientific Assistant in IMD (with Computer Science and IT, Electronics and Telecommunication, or Physics as the engineering part) and JE (Telecom) — each with its own Paper 1 merit list. The paper scheme for Civil, Electrical and Mechanical is unchanged: 200 marks in Paper 1 with 0.25 deducted, 300 marks in Paper 2 with one mark deducted, and merit on Paper 2.',
      },
    ],
    eligibility: [
      {
        type: 'p',
        text: 'Eligibility is post-specific: each organisation in the notice sets its own qualification — a degree, a diploma, or a diploma with two years’ experience — and its own age ceiling. Qualifications are judged as on the closing date, 22 September 2026, and age as on 1 August 2026. You are considered only for the organisations whose conditions you meet, so read the post table before choosing preferences.',
      },
      {
        type: 'table',
        caption: 'Essential qualifications by organisation, summarised from the post table in the notice. The notice itself governs.',
        head: ['Organisation', 'Posts', 'Qualification'],
        rows: [
          ['Central Public Works Department (CPWD)', 'JE (Civil), JE (Electrical)', 'Diploma in Civil, or in Electrical or Mechanical engineering; age up to 32'],
          ['Military Engineer Services (MES)', 'JE (Civil), JE (Electrical and Mechanical)', 'Degree in the discipline, or a three-year diploma with two years’ experience in planning, execution or maintenance of works'],
          ['Border Roads Organisation', 'JE (Civil), JE (Electrical and Mechanical)', 'Degree in the discipline, or a three-year diploma with two years’ experience; BRO posts carry their own physical and medical standards'],
          ['Central Water Commission', 'JE (Civil), JE (Mechanical)', 'Degree or diploma in the discipline'],
          ['Central Water and Power Research Station; Farakka Barrage Project; Brahmaputra Board', 'JE (Civil), JE (Electrical)', 'Diploma in the discipline'],
          ['DGQA (Naval), Ministry of Defence', 'JE (Mechanical), JE (Electrical)', 'Degree in the discipline, or a three-year diploma with two years’ experience'],
          ['National Technical Research Organisation; Ministry of Fisheries, Animal Husbandry and Dairying', 'JE (Civil) and others as listed', 'As specified per post in the notice'],
          ['Department of Telecommunications', 'JE (Telecom)', 'As specified in the notice; examined on Part G, Telecommunication'],
          ['India Meteorological Department', 'Scientific Assistant', 'Per the addendum of 10 September 2026: a bachelor’s degree in science with Physics, or a bachelor’s degree in Computer Science, Computer Applications, Electronics, Electronics and Communication, Instrumentation, IT or Telecommunication engineering'],
        ],
      },
      {
        type: 'table',
        caption: 'Age as on 1 August 2026: up to 30 years for most posts (born 2 August 1996 to 1 August 2008), up to 32 for CPWD (born from 2 August 1994). Relaxations beyond the ceiling, from the notice.',
        head: ['Category', 'Relaxation'],
        rows: [
          ['SC and ST', '5 years'],
          ['OBC (non-creamy layer)', '3 years'],
          ['Persons with benchmark disabilities', '10 years (UR/EWS), 13 years (OBC), 15 years (SC/ST)'],
          ['Ex-servicemen', '3 years after deducting military service from actual age'],
          ['Defence personnel disabled in operations', '3 years (8 years for SC/ST)'],
        ],
      },
      {
        type: 'list',
        title: 'Other conditions',
        items: [
          {
            text: 'Fee',
            note: '₹100 online; women and SC, ST, PwBD and ex-servicemen candidates are exempt.',
          },
          {
            text: 'Discipline',
            note: 'You sit Paper 1 and Paper 2 in one discipline — Civil and Structural, Electrical, or Mechanical for JE; a candidate with a diploma in Electrical or Mechanical may be eligible for JE (Electrical and Mechanical) posts in MES and BRO in either part as the notice specifies.',
          },
          {
            text: 'Experience',
            note: 'Where a post asks for two years’ experience with a diploma, it is counted as on the closing date and verified by the department with an experience certificate.',
          },
        ],
      },
    ],
    procedure: {
      eyebrow: 'Application to appointment',
      heading: 'How to apply for SSC JE 2026, what Paper 1 and Paper 2 look like on the day, and how organisations are allotted',
      intro: 'The steps in the order they happen, with the windows and fees the 2 September 2026 notice specifies.',
      blocks: [
        {
          type: 'steps',
          title: 'The SSC JE process from registration to result',
          items: [
            {
              title: 'One-Time Registration on ssc.gov.in',
              text: 'Create an OTR profile once on the Commission’s portal. Registration asks for Aadhaar-based verification, a mobile number and e-mail that remain with you for the whole cycle, and your basic educational and category details. The OTR number and password are what you log in with at every later stage — exam-city intimation, admit card, answer-key challenge, result and option form — so keep them safe.',
            },
            {
              title: 'Fill the online application for SSC JE',
              text: 'Log in, pick the examination, confirm the OTR details, choose the examination centre preferences and the medium of the paper, and upload or capture the photograph and signature exactly as the notice specifies. The declaration you sign at the end binds you to the eligibility conditions, and the Commission verifies documents only at the end of the process — an ineligible candidate can go through every stage and be dropped at verification.',
            },
            {
              title: 'Pay the fee',
              text: 'The fee is ₹100, paid online, with 23 September 2026 (23:00) as the last date. Women and SC, ST, PwBD and ex-servicemen candidates are exempt. Fees are not refunded.',
            },
            {
              title: 'Use the correction window if you need it',
              text: 'A three-day correction window opens about a week after applications close. The Commission charges ₹200 for the first corrected submission and ₹500 for the second, from every candidate regardless of category. Some fields — notably the OTR identity details — cannot be changed at this point, which is why the OTR should be filled carefully in the first place.',
            },
            {
              title: 'Exam-city intimation, then the admission certificate',
              text: 'Roughly two weeks before the examination the candidate login shows the city allotted; the admission certificate itself is released only three to four days before the date. Print it, and carry it with an original photo identity document that carries the same date of birth as your application.',
            },
            {
              title: 'On the day: biometrics, frisking and the clock',
              text: 'Report at the time on the admission certificate; entry closes before the shift begins. Expect biometric capture and frisking, and expect the paper to be delivered with the timers the notice describes — a section or session that has closed cannot be reopened. Rough sheets are provided; nothing electronic is allowed inside.',
            },
            {
              title: 'Tentative answer key and challenge',
              text: 'A few days after the last shift the Commission uploads tentative answer keys with each candidate’s response sheet. Objections are filed online only, within the announced window, on payment of a per-question fee that is not refunded. Subject-matter experts examine the objections and the final key is used for evaluation.',
            },
            {
              title: 'Result, marks and the next stage',
              text: 'Results are published as PDF write-ups on the notice board with category-wise cut-offs and the count of candidates shortlisted; individual marks are released in the login shortly afterwards. Candidates for the next stage receive fresh admission certificates through the same login.',
            },
            {
              title: 'Self-slot selection and Paper 1',
              text: 'In the 2025 cycle candidates chose their Paper 1 date and shift from the slots available in their city through the login. Paper 1 is two hours with no sectional timer: 50 reasoning, 50 general awareness and 100 engineering questions. Answer-key challenges cost ₹50 per question.',
            },
            {
              title: 'Paper 1 result: separate merit lists',
              text: 'Candidates above the minimum qualifying marks are shortlisted for Paper 2 on normalised marks, through separate lists for JE (Civil), JE (Electrical and Mechanical), Scientific Assistant in IMD and JE (Telecom).',
            },
            {
              title: 'Paper 2',
              text: 'One hundred engineering questions of three marks each in two hours, with one mark deducted per wrong answer. The IS 456:2000 tables and steam tables are available on the console under Useful Data where the discipline needs them. Marks are normalised and the merit list is built from this paper.',
            },
            {
              title: 'Option-cum-preference, first round of tentative allocation and sliding',
              text: 'After marks are published, candidates in the merit zone submit preferences for organisations. The Commission publishes a first round of tentative allocation, then calls candidates to a regional office for identity verification and a fix/float sliding process — fix keeps the allotted post, float asks to be considered for a higher preference if a vacancy opens. A candidate who does not attend is treated as absent and dropped.',
            },
            {
              title: 'Final result and verification by the department',
              text: 'The final result allots organisations by merit-cum-preference and the fix/float choices; in 2025 it came on 3 August 2026, four weeks after the first round. The department verifies the degree or diploma, experience certificate, category and age before appointment, and BRO conducts its own physical and medical examination.',
            },
          ],
        },
      ],
    },
    pattern: [
      {
        type: 'p',
        text: 'The SSC JE exam pattern below is the scheme in the notice of 2 September 2026. Both papers are computer-based and objective; the discipline you apply in decides which engineering part you answer. The full treatment is on the exam pattern page.',
      },
      {
        type: 'table',
        caption: 'SSC JE Paper 1 exam pattern 2026: 200 questions, 200 marks, 2 hours (2 hours 40 minutes for scribe-eligible candidates); 0.25 marks deducted per wrong answer; qualifying.',
        head: ['Section', 'Questions', 'Marks'],
        rows: [
          ['General Intelligence and Reasoning', '50', '50'],
          ['General Awareness', '50', '50'],
          ['General Engineering — Part A Civil and Structural, Part B Electrical or Part C Mechanical (JE); Part D Computer Science and IT, Part E Electronics and Telecommunication or Part F Physics (Scientific Assistant, IMD); Part G Telecommunication (JE Telecom)', '100', '100'],
          ['Total', '200', '200'],
        ],
      },
      {
        type: 'table',
        caption: 'SSC JE Paper 2 exam pattern 2026: 100 questions, 300 marks, 2 hours; one mark deducted per wrong answer; the merit list is built from this paper.',
        head: ['Section', 'Questions', 'Marks'],
        rows: [
          ['General Engineering in the discipline — the same part as in Paper 1', '100', '300'],
        ],
      },
      {
        type: 'table',
        caption: 'Minimum qualifying marks that apply before any shortlisting — a candidate below these in any paper is not considered regardless of the cut-off.',
        head: ['Category', 'Minimum qualifying marks'],
        rows: [
          ['Unreserved', '30%'],
          ['OBC and EWS', '25%'],
          ['All other categories', '20%'],
        ],
      },
      {
        type: 'p',
        text: 'Questions are set in Hindi and English. The examination is conducted in multiple shifts, and marks are normalised by the formula the Commission published on 2 June 2025 before cut-offs and merit are computed. Normalised scores can therefore differ from raw scores, in either direction, depending on the difficulty of the shift you sat. Separate merit lists are drawn for JE (Civil), JE (Electrical and Mechanical), Scientific Assistant in IMD and JE (Telecom) at both stages.',
      },
    ],
    studyPlan: [
      {
        type: 'p',
        text: 'JE is the SSC exam where the syllabus is the discipline you already studied, which makes the plan different: most of the marks — 100 of 200 in Paper 1 and all 300 in Paper 2 — come from diploma-level engineering, and the merit list is built entirely from Paper 2. Reasoning and general awareness only have to clear Paper 1 comfortably.',
      },
      {
        type: 'steps',
        title: 'A five-month plan',
        items: [
          {
            title: 'Months 1–2: the core subjects of your discipline',
            text: 'Civil: building materials, surveying, soil mechanics, hydraulics, RCC and steel design, estimating, environmental engineering, transportation. Mechanical: thermodynamics, fluid mechanics, strength of materials, theory of machines, production, IC engines, refrigeration. Electrical: circuits, machines, measurements, power systems, basic electronics, utilisation. Work from the standard diploma texts and the previous years’ papers together.',
          },
          {
            title: 'Month 3: Paper 1 general sections and full engineering revision',
            text: 'Reasoning question types and a general awareness spine with six months of current affairs, an hour a day; the rest on engineering numericals, which is where Paper 2 differentiates.',
          },
          {
            title: 'Month 4: mocks with the negative marking applied',
            text: 'A Paper 1 mock every third day with 0.25 deducted, a Paper 2 mock every week with one mark deducted, and an error log by subject. Practise using the IS 456 and steam tables on screen rather than from memory.',
          },
          {
            title: 'Month 5: revision and the exam window',
            text: 'Revise from formula sheets and the error log; taper mocks in the final ten days. Confirm the discipline and post preferences you will submit before the option form opens.',
          },
        ],
      },
      {
        type: 'list',
        title: 'What the pattern means for the attempt',
        items: [
          {
            text: 'Paper 1 is qualifying but the cut-off is real',
            note: 'Separate merit lists per discipline mean you compete only with your own branch; the shortlist for Paper 2 is still a small fraction of applicants.',
          },
          {
            text: 'Paper 2 punishes guessing',
            note: 'One mark off against three on: a two-option guess is worth taking, a three- or four-option guess is not. A clean 70 beats a scrappy 85.',
          },
          {
            text: 'Numericals decide Paper 2',
            note: 'Conceptual one-liners are shared knowledge; calculation questions in strength of materials, hydraulics, machines and circuits are where the spread is.',
          },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the notice of the Junior Engineer Examination 2026, its addendum of 10 September 2026, and the Paper 1 result, final vacancy, first-round allocation and final result write-ups of JE 2025 on the SSC notice board. Paper dates for 2026 are tentative in the notice.',
      },
      {
        type: 'links',
        title: 'Official documents',
        items: [
          {
            label: 'Notice of Junior Engineer Examination 2026 (2 September 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_je_2026.pdf',
          },
          {
            label: 'Addendum on the qualification for Scientific Assistant in IMD (10 September 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Addendum_JE_10092026.pdf',
          },
          {
            label: 'JE 2025 Paper 1 result write-up (6 March 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Writeup_06032026.pdf',
          },
          {
            label: 'JE 2025 final vacancies (24 June 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/JE2025_FINAL_VACANCY_24062026.pdf',
          },
          {
            label: 'JE 2025 first round of tentative allocation (9 July 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_je_09072026.pdf',
          },
          {
            label: 'JE 2025 final result write-up (3 August 2026)',
            href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_03082026.pdf',
          },
          {
            label: 'SSC home page — notices, calendar and candidate login',
            href: 'https://ssc.gov.in/',
          },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'SSC JE syllabus — discipline-wise technical topics for civil, mechanical and electrical engineering, plus reasoning and general awareness.',
        lead: [
          'Three syllabi in one exam. Read only the discipline you are applying in, and read it against your diploma notes rather than against a general SSC book.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The non-technical part of the syllabus is common to all candidates and modest in scope. The technical part is where the exam actually lives, and it maps closely onto a standard three-year diploma curriculum — which is why candidates who still have their diploma notes are at a real advantage over those studying from general competitive-exam material.',
          },
          {
            type: 'defs',
            items: [
              [
                'General Intelligence and Reasoning',
                'Analogies, similarities and differences, space visualisation, problem solving, analysis, judgement, decision making, visual memory, discrimination, observation, relationship concepts, arithmetical reasoning, verbal and figure classification, and arithmetical number series. Common to all three disciplines.',
              ],
              [
                'General Awareness',
                'Current events, and everyday observation and experience in their scientific aspect, along with history, culture, geography, economic scene, general polity and the Constitution, and scientific research. Common to all three disciplines and pitched at a general level.',
              ],
              [
                'General Engineering — Civil and Structural',
                'Building materials, estimating, costing and valuation, surveying, soil mechanics, hydraulics, irrigation engineering, transportation engineering, environmental engineering, theory of structures, concrete technology, RCC design and steel design. The structural topics carry the most weight in most cycles.',
              ],
              [
                'General Engineering — Mechanical',
                'Theory of machines and machine design, engineering mechanics and strength of materials, thermal engineering covering the properties of pure substances, the laws of thermodynamics, air standard cycles, IC engines, boilers, steam and gas turbines and refrigeration and air conditioning, fluid mechanics and machinery, and production engineering covering classification of steels and basic manufacturing processes.',
              ],
              [
                'General Engineering — Electrical',
                'Basic concepts and circuit law, AC fundamentals, magnetic circuits, measurement and measuring instruments, electrical machines including DC machines, transformers and induction machines, synchronous machines, generation, transmission and distribution, estimation and costing, utilisation of electrical energy, and basic electronics.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A word on where to spend time within the technical syllabus. Every discipline has a small number of topics that appear in almost every cycle — structural analysis and RCC in civil, thermodynamics and strength of materials in mechanical, machines and circuit theory in electrical. Previous papers identify these far more reliably than a syllabus list, which gives every topic equal visual weight regardless of how often it is examined.',
          },
          {
            type: 'p',
            text: 'Read the syllabus with your diploma transcript beside you. Almost every listed technical topic corresponds to a subject you have already sat an examination in, and the useful exercise is not learning the list but marking each item as solid, rusty or never properly understood. That three-way split, done honestly in an afternoon, is a better study plan than any generic schedule, because it is the only one calibrated to what you personally have to rebuild.',
          },
          {
            type: 'note',
            title: 'The non-technical syllabus is deliberately vague',
            text: 'General awareness for SSC JE is described in the same broad terms the commission uses for its other examinations, and the level is comparable. That means material prepared for any graduate-level SSC paper serves here without modification — which is convenient, because it is the one part of your preparation that does not need to be discipline-specific.',
          },
        ],
      },
      'exam-pattern': {
        description: 'SSC JE exam pattern 2026 — Paper 1 and Paper 2 tables with questions, marks, time and negative marking for Civil, Mechanical and Electrical.',
        heading: 'SSC JE exam pattern 2026: Paper 1, Paper 2, marks, time and negative marking',
        lead: ['Two computer-based papers in the discipline you apply in. Paper 1 screens with a quarter mark off per mistake; Paper 2 builds the merit list with a full mark off. Every figure here is from the notice of 2 September 2026.'],
        blocks: [
          {
            type: 'p',
            text: 'The Junior Engineer examination has two objective papers and no interview. Paper 1 mixes reasoning and general awareness with a 100-mark engineering section and is qualifying; Paper 2 is engineering only, 300 marks, and is the entire merit list. Since 2023 both papers have been computer-based, and the 2026 notice keeps the scheme while adding Scientific Assistant in IMD and JE (Telecom) as separate post groups with their own engineering parts.',
          },
          {
            type: 'table',
            caption: 'SSC JE Paper 1 exam pattern 2026. Objective; Hindi and English; one mark per question; 0.25 marks deducted per wrong answer; no sectional timer.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['General Intelligence and Reasoning', '50', '50', '2 hours for the paper (2 hours 40 minutes for scribe-eligible candidates)'],
              ['General Awareness', '50', '50', ''],
              ['General Engineering — Part A Civil and Structural, Part B Electrical, Part C Mechanical; Part D Computer Science and IT, Part E Electronics and Telecommunication, Part F Physics for Scientific Assistant in IMD; Part G Telecommunication for JE (Telecom)', '100', '100', ''],
              ['Total', '200', '200', ''],
            ],
          },
          {
            type: 'table',
            caption: 'SSC JE Paper 2 exam pattern 2026. Objective; three marks per question; one mark deducted per wrong answer.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['General Engineering in the same part as Paper 1', '100', '300', '2 hours (2 hours 40 minutes for scribe-eligible candidates)'],
            ],
          },
          {
            type: 'list',
            title: 'How the papers are scored',
            items: [
              {
                text: 'Paper 1 is qualifying',
                note: 'Candidates above the minimum qualifying marks are shortlisted for Paper 2 on normalised Paper 1 marks, through separate merit lists for JE (Civil), JE (Electrical and Mechanical), Scientific Assistant in IMD and JE (Telecom). Paper 1 marks are not added afterwards.',
              },
              {
                text: 'Paper 2 is the merit list',
                note: 'Normalised Paper 2 marks decide the rank; the post preferences and the fix/float sliding decide the organisation.',
              },
              {
                text: 'Minimum qualifying marks in both papers',
                note: '30 per cent for UR, 25 for OBC and EWS, 20 for all other categories.',
              },
              {
                text: 'Negative marking differs between the papers',
                note: '0.25 per wrong answer against one mark in Paper 1; one mark against three in Paper 2. A three-option guess breaks even in Paper 1 and loses in Paper 2.',
              },
              {
                text: 'Reference tables on screen',
                note: 'The IS 456:2000 tables and steam tables are provided on the console under Useful Data where the discipline requires them; nothing may be carried in.',
              },
            ],
          },
          {
            type: 'list',
            title: 'Where the engineering marks are, by discipline',
            items: [
              {
                text: 'Civil and Structural (Part A)',
                note: 'Building materials, estimating and costing, surveying, soil mechanics, hydraulics, irrigation, transportation and environmental engineering; structural engineering with theory of structures, concrete technology, RCC design and steel design.',
              },
              {
                text: 'Electrical (Part B)',
                note: 'Basic concepts, circuit law, magnetic circuits, AC fundamentals, measurement and instruments, electrical machines, fractional-kilowatt motors and single-phase motors, synchronous machines, generation, transmission and distribution, estimation and costing, utilisation, basic electronics.',
              },
              {
                text: 'Mechanical (Part C)',
                note: 'Theory of machines and machine design, engineering mechanics and strength of materials, thermodynamics and its properties, air standard cycles, IC engines, boilers, refrigeration and air conditioning, fluid mechanics and machinery, production engineering.',
              },
            ],
          },
          {
            type: 'p',
            text: 'For reference, the JE 2025 cycle shortlisted candidates for Paper 2 on 6 March 2026, held Paper 2 in April, and recommended 1,731 candidates in the final result of 3 August 2026 after the first round of tentative allocation on 9 July and the sliding process on 20–21 July.',
          },
          {
            type: 'links',
            title: 'Related SSC JE pages',
            items: [
              {
                label: 'SSC JE syllabus for Civil, Mechanical and Electrical',
                to: '/government-exams/ssc/ssc-je/syllabus/',
              },
              {
                label: 'Free SSC JE mock tests on the 2026 pattern',
                to: '/government-exams/ssc/ssc-je/mock-tests/',
              },
              {
                label: 'SSC JE previous year papers',
                to: '/government-exams/ssc/ssc-je/previous-year-papers/',
              },
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SSC JE previous year papers — discipline-wise past papers and how to use them to find the technical topics that repeat every cycle.',
        lead: [
          'For a technical exam, past papers are not practice material — they are the most accurate description available of what the examiner considers important.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general engineering syllabus lists dozens of topics with no indication of weighting. Past papers supply that weighting immediately: a handful of areas appear year after year, several appear occasionally, and a long tail appears once in five cycles. Two evenings spent tabulating four years of your discipline’s papers will redirect months of study.',
          },
          {
            type: 'steps',
            title: 'Building a weighting table',
            items: [
              { text: 'Take four to five years of papers in your discipline only.', note: 'Civil papers tell a mechanical candidate nothing useful.' },
              { text: 'Tag every technical question with its diploma-level topic.', note: 'Not "civil" but "shear force and bending moment" or "Bernoulli’s equation".' },
              { text: 'Count the tags and sort them.', note: 'The top ten topics usually account for a large majority of the technical marks.' },
              { text: 'Rebuild those topics to full working depth first.', note: 'Formula, derivation where it aids memory, and twenty solved problems each.' },
              { text: 'Only then work outwards into the tail.', note: 'Breadth after depth, not the other way round.' },
            ],
          },
          {
            type: 'p',
            text: 'Keep your diploma textbooks rather than replacing them with exam guides. SSC JE technical questions are closer in style to diploma examination questions than to competitive-exam shortcuts, and the standard texts explain the derivations that make formulas memorable.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'list',
            title: 'What the weighting table typically reveals',
            items: [
              { text: 'A short head and a very long tail', note: 'a modest number of topics account for a large share of the technical questions, and dozens of syllabus items appear once every few years or not at all. Without a count, candidates distribute effort evenly across a list where the returns are anything but even.' },
              { text: 'Formula-recall questions outnumber derivation questions', note: 'which changes how you revise. A formula sheet you wrote yourself, revised weekly, is worth more than a re-reading of the chapter it came from.' },
              { text: 'Numerical questions cluster around standard configurations', note: 'the same beam arrangements, the same circuit topologies, the same thermodynamic cycles, with the numbers changed. Recognising the configuration is most of the work.' },
              { text: 'Cross-year repetition', note: 'not identical questions, but close variants, often enough that a candidate who has worked five years of papers will recognise the shape of a meaningful fraction of a new one.' },
            ],
          },
          {
            type: 'p',
            text: 'Do the counting yourself rather than trusting a published weightage chart. Charts circulate widely, they are rarely dated, and they are often built from a different discipline or an older syllabus. An afternoon spent tagging four years of papers in your own discipline produces a table you trust, and the act of tagging is itself revision — you cannot categorise a question without recalling how it is solved.',
          },
          {
            type: 'note',
            title: 'Work the paper, then work the topic',
            text: 'The temptation after a past paper is to read the solutions and move on. The more productive sequence is to note which topics produced your errors, close the paper, rebuild those topics from your diploma textbook, and only then return to re-solve the questions. Reading a solution creates recognition; rebuilding the topic creates the ability to solve the next variant.',
          },
        ],
      },
      'mock-tests': {
        description:
          'SSC JE mock tests — timed Paper 1 practice with the technical section weighted as it is in the real examination.',
        lead: [
          'A useful JE mock is one where half the questions are technical. General SSC mocks, however well made, do not measure what this exam measures.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The pacing problem in SSC JE is specific: technical questions take longer than aptitude questions, and candidates who spend the first hour on reasoning and general awareness arrive at the technical section with insufficient time for the part that carries the most marks. Practising the paper in its real proportions is the only way to find the right order of attempt.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Minutes spent on the technical section', note: 'it should be the majority of your two hours, because it is the majority of the marks.' },
              { text: 'Accuracy on technical questions', note: 'with negative marking, a half-remembered formula is a liability rather than an asset.' },
              { text: 'Time taken on reasoning', note: 'this should compress substantially with practice, freeing minutes for the technical section.' },
              { text: 'Topics you consistently get wrong', note: 'in a technical paper these are almost always gaps in understanding rather than slips, and they need the textbook rather than more questions.' },
            ],
          },
          {
            type: 'links',
            title: 'Practice',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Sectional and topic practice', to: '/practice/' },
            ],
          },
          {
            type: 'steps',
            title: 'Getting a useful signal from a JE mock',
            items: [
              { title: 'Insist on the right composition', text: 'A hundred technical questions in your own discipline, fifty reasoning, fifty general awareness. A general SSC mock is a well-made test of the wrong thing.' },
              { title: 'Split the clock deliberately before you start', text: 'Write down your intended section times. Compare them with the actual times afterwards — the gap between the two is usually the most actionable finding in the whole paper.' },
              { title: 'Separate technical errors by cause', text: 'A wrong formula, a right formula misapplied, an arithmetic slip, or a topic never learned. These four call for four different responses and the score conceals all of them.' },
              { title: 'Rebuild, then re-test', text: 'Take the two or three topics your errors cluster in, rebuild them properly, and re-test on a topic set before your next full mock.' },
            ],
          },
          {
            type: 'p',
            text: 'Reasoning is where a JE candidate should expect the clearest improvement from practice, and it is worth tracking separately for exactly that reason. Twenty-five minutes at the start of your preparation should become fifteen by the end, and those ten minutes go straight into the technical section where they are worth considerably more. It is one of the few places in this exam where practice buys time rather than knowledge.',
          },
          {
            type: 'note',
            title: 'Mock practice for Paper 2 depends on its format',
            text: 'If the current cycle runs Paper 2 as an objective paper, practise it the way you practise Paper 1 — timed, full length, analysed. If it runs as a descriptive paper, mock practice means writing full answers by hand against a clock, including the diagrams and the derivation steps, because presentation and completeness are marked there in a way an objective paper never assesses.',
          },
        ],
      },
      preparation: {
        description:
          'SSC JE preparation strategy — how to rebuild diploma-level technical subjects, weight the three sections and plan a realistic timeline.',
        lead: [
          'Prepare in proportion to the marks. That means technical subjects first, for most of your time, for most of your preparation.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'How long SSC JE takes depends almost entirely on one thing: how recently you finished your diploma. A candidate in their final year or just out of it is revising material they still hold; a candidate five years into unrelated work is rebuilding it. Those are four-month and eight-month projects respectively, and pretending otherwise is how plans fail.',
          },
          {
            type: 'steps',
            title: 'A sequence weighted to the marks',
            items: [
              { text: 'Week one — build a topic weighting table from past papers.', note: 'In your discipline only. Everything after this depends on knowing what is actually asked.' },
              { text: 'Months one to four — technical subjects, in weighting order.', note: 'The top ten topics to full working depth, with solved problems rather than passive reading.' },
              { text: 'Month two — reasoning, as a short intensive project.', note: 'A few weeks of daily practice covers most of what Paper 1 asks. High return for limited time.' },
              { text: 'Throughout — general awareness as a daily habit.', note: 'Twenty minutes, one source, revisited. Never an intensive block.' },
              { text: 'Month four — Paper 2 depth in your discipline.', note: 'Once the Paper 1 technical base is solid, the additional depth is an extension rather than a new subject.' },
              { text: 'Final six weeks — full timed papers and correction.', note: 'In real proportions, with the technical section given the time it deserves.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates successful JE candidates',
            items: [
              { text: 'Working problems rather than reading theory', note: 'technical marks come from solving, and reading creates a false sense of readiness.' },
              { text: 'Keeping the diploma textbooks', note: 'they explain the derivations that make formulas stick, which condensed exam guides omit.' },
              { text: 'Maintaining a personal formula sheet', note: 'written by you, revised weekly, covering only the formulas you actually keep forgetting.' },
              { text: 'Not over-investing in general awareness', note: 'it is fifty marks of two hundred in Paper 1 and none of Paper 2.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'If you finished your diploma recently',
                'Most of the technical material is still accessible and the work is consolidation rather than reconstruction. Four to five months is realistic, with the bulk of it on solving problems in the high-weight topics and a short project each on reasoning and general awareness.',
              ],
              [
                'If your diploma is several years behind you',
                'Assume you are rebuilding rather than revising, and plan for eight months or more. Start with the three or four highest-weight subjects rather than attempting the syllabus in order, and accept that the first month will feel slower than you expect.',
              ],
              [
                'If you are working full time',
                'Protect the technical work by giving it your best hours rather than your leftover ones. Reasoning and general awareness tolerate tired evenings; rebuilding strength of materials does not.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A note on discipline choice, since it is asked often: you apply in the discipline your diploma or degree is in, and it is not a strategic decision. What is strategic is recognising that your discipline determines roughly three quarters of your written marks across the two papers, which is the whole argument for weighting your preparation the way this page recommends.',
          },
          {
            type: 'note',
            title: 'The formula sheet is the single best artefact of this preparation',
            text: 'One sheet per subject, handwritten, containing only the formulas you personally keep forgetting — not every formula in the chapter. It is built from your own errors, it takes minutes to revise, and in the final fortnight it will be the only document you need. Candidates who maintain one from month one consistently report that it replaced everything else they had planned to re-read.',
          },
        ],
      },
      'study-material': {
        description:
          'SSC JE study material — reasoning and general awareness notes to support the aptitude sections alongside your discipline textbooks.',
        lead: [
          'The technical half of this exam is best prepared from your own discipline textbooks. These notes cover the other half.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'This is the one SSC examination where general study material plays a supporting role rather than a central one. Reasoning and general awareness together carry a hundred of Paper 1’s two hundred marks and none of Paper 2’s, so the sensible approach is to cover them efficiently and return the time saved to technical revision.',
          },
          {
            type: 'links',
            title: 'Notes for the non-technical sections',
            items: [
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
          {
            type: 'list',
            title: 'For the technical half',
            items: [
              'Use the standard diploma textbook for your discipline as the primary source, not a competitive-exam digest.',
              'Maintain one handwritten formula sheet per subject, built from the formulas you personally keep forgetting.',
              'Solve past technical questions immediately after revising a topic, while the derivation is still fresh.',
              'Return to each major topic twice more before the exam — technical recall decays faster than aptitude skill.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Reasoning — a short, high-return project',
                'Series, analogy, classification, coding-decoding, spatial visualisation and the non-verbal set. A few weeks of focused practice covers most of what Paper 1 asks, and the time it saves in the exam transfers directly to the technical section.',
              ],
              [
                'General awareness — a daily background habit',
                'Polity, history, geography, general science and static items at the standard SSC level. Fifty marks of four hundred across both papers, which is exactly the weight it should carry in your timetable: present every day, never dominant.',
              ],
              [
                'Science notes — useful, with a caveat',
                'General science overlaps with engineering fundamentals at the edges, and revising it can feel productive. Keep it in the general awareness budget rather than letting it expand into the technical block it superficially resembles.',
              ],
              [
                'Quantitative aptitude — supporting only',
                'Arithmetic fluency helps with the numerical technical questions, where a calculation slip costs the same mark as a conceptual error. Worth maintaining, not worth a dedicated study block.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'For the technical half, the honest recommendation is the unglamorous one: use the standard textbook for your discipline, the one your diploma course was taught from, rather than a competitive-exam digest. Digests compress derivations into results, which is efficient right up to the moment a question is framed slightly differently from the one the digest anticipated. The textbook explains why the formula has the shape it does, and that understanding is what lets you handle the variant.',
          },
          {
            type: 'note',
            title: 'Solve immediately after revising',
            text: 'Technical recall decays faster than aptitude skill, and the gap between reading a topic and solving from it is where most of the decay happens. Close the book at the end of a topic and work ten past questions on it the same day. What you can still do a week later is what you actually know.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'Which disciplines can I apply for in SSC JE?',
        a: 'Civil, mechanical and electrical engineering. You choose one at the application stage and are examined in that discipline in both the general engineering section of Paper 1 and the whole of Paper 2. Civil posts are typically the most numerous, but the right choice is the discipline you actually hold a qualification in.',
      },
      {
        q: 'How much of SSC JE is technical?',
        a: 'The large majority. General engineering carries 100 of the 200 marks in Paper 1, and Paper 2 is entirely technical. Across both papers, your engineering discipline accounts for considerably more marks than reasoning and general awareness combined, which is why technical revision should start first and take most of your preparation time.',
      },
      {
        q: 'How long does SSC JE preparation take?',
        a: 'It depends mainly on how recently you completed your diploma. A final-year student or recent graduate is revising familiar material and can be competitive in about four months. A candidate several years removed from the syllabus is rebuilding it and should plan for six to eight months, with the bulk of that time on technical subjects rather than on aptitude.',
      },
      {
        q: 'What is the SSC JE exam pattern for 2026?',
        a: 'Paper 1 is 200 objective questions for 200 marks in two hours — General Intelligence and Reasoning (50), General Awareness (50) and General Engineering in your discipline (100) — with 0.25 marks deducted per wrong answer; it is qualifying and shortlists for Paper 2 through separate lists per discipline. Paper 2 is 100 engineering questions for 300 marks in two hours with one mark deducted per wrong answer, and the merit list is built from it alone. Both papers are computer-based, and the IS 456 and steam tables are provided on screen where needed.',
      },
      {
        q: 'What is the SSC JE syllabus for Civil, Mechanical and Electrical?',
        a: 'Civil and Structural: building materials, estimating and costing, surveying, soil mechanics, hydraulics, irrigation, transportation, environmental engineering, theory of structures, concrete technology, RCC and steel design. Mechanical: theory of machines and machine design, engineering mechanics and strength of materials, thermodynamics, air standard cycles, IC engines, boilers, refrigeration and air conditioning, fluid mechanics and machinery, production engineering. Electrical: basic concepts, circuit law, magnetic circuits, AC fundamentals, measurement, electrical machines, single-phase and fractional-kilowatt motors, synchronous machines, generation, transmission and distribution, estimation and costing, utilisation and basic electronics. The full topic list is on the syllabus page.',
      },
      {
        q: 'What are the SSC JE 2026 exam dates and vacancies?',
        a: 'The notice was published on 2 September 2026; applications close on 22 September, fee payment on 23 September, and the correction window runs from 28 to 30 September 2026. Paper 1 is tentatively in October–November 2026 and Paper 2 in December 2026. There are 1,748 tentative vacancies across CPWD, MES, BRO, the Central Water Commission, CWPRS, the Farakka Barrage Project, the Brahmaputra Board, DGQA (Naval), NTRO, the Department of Telecommunications, the IMD and the Ministry of Fisheries, Animal Husbandry and Dairying.',
      },
      {
        q: 'Who is eligible for SSC JE 2026?',
        a: 'It depends on the organisation: CPWD, CWPRS, the Farakka Barrage Project and the Brahmaputra Board accept a diploma in the discipline; the Central Water Commission accepts a degree or diploma; MES, BRO and DGQA (Naval) want a degree, or a three-year diploma with two years’ experience. Age is up to 30 on 1 August 2026 for most posts and up to 32 for CPWD, with five years’ relaxation for SC and ST, three for OBC and 10 to 15 for PwBD. Scientific Assistant in IMD needs a science degree with Physics or a degree in computer science, electronics, IT or telecommunication as revised by the addendum of 10 September 2026.',
      },
      {
        q: 'What is the negative marking in SSC JE?',
        a: '0.25 marks per wrong answer in Paper 1, against one mark for a correct answer, and one mark per wrong answer in Paper 2, against three. Unanswered questions carry no penalty.',
      },
      {
        q: 'Is there an interview in SSC JE?',
        a: 'No. Selection is on Paper 2 marks, normalised, with post preferences and the fix/float sliding process deciding the organisation, followed by document verification by the department. BRO additionally applies its own physical and medical standards.',
      },
    ],
  },
]

export default ssc
