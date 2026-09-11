/* Bihar exam records.
   Eight pages behind the Bihar hub cards. BPSC runs the Combined Competitive
   Examination and its specialist recruitments — teachers, engineers and
   the professional cadres; BSSC runs the graduate-level and inter-level
   combined examinations; the Central Selection Board of Constable recruits
   constables and the Bihar Police Subordinate Services Commission
   sub-inspectors. Structure, block types and conventions follow
   ./telangana.js. */

const OFFICIAL = 'bpsc.bihar.gov.in'
const CHECKED = '11 September 2026'

const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'BPSC, BSSC, the constable board and the state’s other recruiting bodies revise schemes, ratios and dates between cycles, and the advertisement for your cycle is the document that binds. The figures here are from the latest documents on the official sites at the date checked and are labelled where they come from an older cycle.',
}

/* ── Bihar Police Constable ─────────────────────────────────────
   Recruited by the Central Selection Board of Constable: a class 10-level
   written test of 100 marks that only qualifies, at five candidates per
   post, and a physical efficiency test of 100 marks — race, high jump and
   shot put — that is the whole merit. The 19,838-post round of 2025
   published its final list on 27 May 2026; no general 2026 round is
   advertised, but four specialist constable rounds are in progress. Every
   figure is from the board's PDFs. */
const CSBC = {
  home: 'https://csbc.bihar.gov.in/',
  newSite: 'https://csbc-bih.bihar.gov.in/',
  syllabus: 'https://csbc.bihar.gov.in/Syllabus.htm',
  orders: 'https://csbc.bihar.gov.in/Orders.htm',
  prohibition: 'https://csbc.bihar.gov.in/A-REP.htm',
  prisons: 'https://csbc.bihar.gov.in/A-HPD.htm',
  fire: 'https://csbc.bihar.gov.in/A-BFS.htm',
  homeGuard: 'https://csbc.bihar.gov.in/A-BHG.htm',
  forest: 'https://csbc.bihar.gov.in/A-EFC.htm',
  advt2025: 'https://csbc.bihar.gov.in/Advt/Advt-01-2025-Constables.pdf',
  syllabus2025: 'https://csbc.bihar.gov.in/Advt/Syllabus%20-%2001-2025.pdf',
  written2025: 'https://csbc.bihar.gov.in/Advt/Results-01-2025-Written-Exam-for-PET.pdf',
  final2025: 'https://csbc.bihar.gov.in/Advt/Results-01-2025-Final-27-05-2026.pdf',
  provisional2025: 'https://csbc.bihar.gov.in/Advt/Notice-01-2025-Provisionally%20Selected-22-07-2026.pdf',
  womenNotice: 'https://csbc.bihar.gov.in/Orders/Notice-26-02-09-2025.pdf',
  advt2023: 'https://csbc.bihar.gov.in/Advt/Advt-01-2023-Constables.pdf',
  cancel2023: 'https://csbc.bihar.gov.in/Advt/NB-2023-10-03-01.pdf',
  reexam2023: 'https://csbc.bihar.gov.in/Advt/NB-2024-07-11-01.pdf',
  final2023: 'https://csbc.bihar.gov.in/Advt/Results-01-2023-Final-09-05-2025.pdf',
  specialBranch2026: 'https://csbc.bihar.gov.in/Advt/Advt-01-2026-Special%20Branch%20Constable.pdf',
  specialBranchPst: 'https://csbc.bihar.gov.in/Advt/Notice-01-2026-PST%20&%20DV-29-08-2026.pdf',
  operator2026: 'https://csbc.bihar.gov.in/Advt/Advt-02-2026-Constable(Operator).pdf',
  operatorResult: 'https://csbc.bihar.gov.in/Advt/Results-02-2026-PET-18-08-2026.pdf',
  prohibition2025: 'https://csbc.bihar.gov.in/Advt/Advt-03-2025-Prohibition-Jail%20Warder-Mobile%20Squad-Constables.pdf',
  prohibitionResult: 'https://csbc.bihar.gov.in/Advt/Results-03-2025-PET-18-08-2026.pdf',
  driver2025: 'https://csbc.bihar.gov.in/Advt/Advt-02-2025-Driver-Constables.pdf',
  driverDet: 'https://csbc.bihar.gov.in/Advt/Notice-02-2025-DET%20&%20DV-31-07-2026.pdf',
  driverHmv: 'https://csbc.bihar.gov.in/Advt/Notice-02-2025-HMV-DET-09-09-2025.pdf',
}

const BR_CONSTABLE = {
  slug: 'police-constable',
  path: '/government-exams/state/bihar/police-constable/',
  name: 'Bihar Police Constable',
  fullName: 'Central Selection Board of Constable — constable recruitment for Bihar Police and the Bihar Special Armed Police',
  authority: 'Central Selection Board of Constable (CSBC), Patna',
  official: 'csbc.bihar.gov.in',
  seoTitle: 'Bihar Police Constable 2026: CSBC Rounds, Pattern, PET Marks, Next Advt',
  metaDescription:
    'Bihar Police Constable — the 19,838-post round finalised 27 May 2026, the qualifying 100-mark written test, the 100-mark PET that decides merit, and standards.',
  lead: [
    'Bihar recruits its constables through the Central Selection Board of Constable on a pattern found nowhere else in the country: the written test does not count. A class 10-level paper of 100 marks — Hindi, English, mathematics, social science, science and general knowledge — is a gate at 30 per cent that admits five candidates per post to the physical efficiency test, and the merit list is the physical test alone: a race for 50 marks, a high jump for 25 and a shot put for 25, each of which must be passed and each scored by time, height and distance. The board says so in its own words — the written examination will not be the basis of the final merit list.',
    'The 2025 round is the board’s latest general recruitment and is complete. Advertised on 11 March 2025 for 19,838 posts in the district police and the Special Armed Police, it drew 16.7 lakh valid applications, was examined on six days in July and August 2025, called 99,690 to a physical test that ran from 15 December 2025 to 11 March 2026 at Patna, and published its final list on 27 May 2026. No general 2026 round is advertised; the board’s 2026 work is four specialist rounds — 83 Special Branch constables, 993 radio operators, 4,236 prohibition constables, jail warders and mobile squad constables, and 4,361 driver constables — each at a different stage.',
  ],
  quickFacts: [
    ['Recruiting body', 'Central Selection Board of Constable, Patna'],
    ['Latest general round', 'Advt 01/2025, 11 March 2025 — 19,838 posts; final result 27 May 2026; provisional selection confirmed 22 July'],
    ['2026 rounds', 'Special Branch 83 — PST 12 September; radio operator 993 — written result out, PET pending; prohibition, jail warder and mobile squad 4,236 — written result out; driver 4,361 — driving tests in September'],
    ['Written test', '100 questions, 100 marks, two hours, class 10 level; 30 per cent to qualify; five per post to the PET; no negative marking clause; merit not based on it'],
    ['PET', '100 marks — race 50, high jump 25, shot put 25; each must be passed; the merit list'],
    ['Age and fee', '18 to 25 unreserved; 27 and 28 for BC and EBC men and women; 30 for SC, ST and transgender; ₹675, ₹180 for SC, ST, Bihar women and transgender'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2025 advertisement distributes its 19,838 posts as 7,935 unreserved, 1,983 EWS, 3,174 SC, 199 ST, 3,571 EBC, 2,381 BC including 53 transgender and 595 BC women, with 6,717 reserved horizontally for women and 397 for freedom fighters’ descendants; half of each category’s posts are reserved for trained home guards under the 2004 notification, and 30 per cent of the Bodh Gaya battalion’s posts for candidates from the naxal-affected districts. Reservation is for permanent residents of Bihar with certificates; candidates from other states are unreserved, and by the general administration department’s resolution of 9 July 2025, applied to every pending round, the 35 per cent women’s reservation is for Bihar’s own women only. Disability reservation does not apply to the post.',
    },
    {
      type: 'p',
      text: 'The written test is set at the Bihar board’s class 10 level under rule 663 and Appendix 103 of the Bihar Police Manual, and the syllabus the board publishes is the board’s matric syllabus for the five subjects. In 2025 it ran on 16, 20, 23, 27 and 30 July and 3 August in a single shift each day at 627 centres in 38 districts, sat by 13,30,121 of 16,73,586 admitted, with scores normalised across the days by the equi-percentile method. Candidates below 30 per cent failed; five per post in each category — 99,190 by the written result of 26 September 2025, 99,690 by the final result — went to the physical test, with the home guard quota’s shortfall of 867 re-allotted to open candidates.',
    },
    {
      type: 'list',
      title: 'The physical test, event by event',
      items: [
        { text: 'Race — 50 marks', note: 'men one mile within six minutes: under five minutes 50, to 5:20 40, to 5:40 30, to 6:00 20; women one kilometre within five minutes: under four minutes 50, to 4:20 40, to 4:40 30, to 5:00 20. A candidate who fails the race attempts nothing else.' },
        { text: 'Shot put — 25 marks', note: 'men 16 lb to at least 16 feet: 16 to 17 feet 9, then 13, 17, 21, and 25 beyond 20 feet; women 12 lb to at least 12 feet on the same ladder to 25 beyond 16 feet. Three attempts.' },
        { text: 'High jump — 25 marks', note: 'men at least 4 feet: 13, then 17 at 4′4″, 21 at 4′8″, 25 at 5 feet; women at least 3 feet: 13, 17 at 3′4″, 21 at 3′8″, 25 at 4 feet. Three attempts. A high jump, not a long jump.' },
        { text: 'Measurements', note: 'height and chest for men, height and weight for women, carry no marks but a failure disqualifies. Pregnant candidates are not admitted.' },
      ],
    },
    {
      type: 'note',
      title: 'The 2023 round and the cancelled examination',
      text: 'Advertised on 9 June 2023 for 21,391 posts, the round’s written test of 1 October 2023 was cancelled by the board’s order of 3 October after candidates were arrested across districts with electronic devices and chits and the answers were found to have reached candidates by mobile, with the two remaining dates postponed; the board’s press accounts spoke of 67 cases in 21 districts and 148 arrests, and an economic offences inquiry followed. The re-examination ran on six days from 7 to 28 August 2024 in a single shift each day, sat by 11,95,101; 1,06,955 went to a physical test from 9 December 2024 to 10 March 2025; and the final result of 9 May 2025 filled the 21,391 posts with 17,059 women and 15,422 men among the 32,489 who passed every event.',
    },
  ],
  stages: [
    {
      name: 'Application',
      mode: 'Online, about a month; ₹675 or ₹180',
      detail:
        'The 2025 round ran from 18 March to 25 April 2025 after a week’s extension for holidays. Intermediate or the madrasa and Sanskrit board equivalents, age by the matric certificate, and the reservation certificates as on the closing date.',
    },
    {
      name: 'Written test',
      mode: '100 marks, two hours, OMR, in single-shift days, normalised',
      detail:
        'Hindi, English, mathematics, social science, science, and general knowledge and current affairs at class 10 level, one mark a question. Below 30 per cent is a fail; five candidates per post in each category go to the physical test, everyone at the cut-off included. The marks are not carried forward.',
    },
    {
      name: 'Physical efficiency test and verification',
      mode: '100 marks over three events; measurements; documents',
      detail:
        'At the Patna High School ground at Gardanibagh over three months — 15 December 2025 to 11 March 2026 in the last round. Race, then shot put and high jump for those who pass it; height, chest and weight; document verification on the day or separately.',
    },
    {
      name: 'Merit, medical and character',
      mode: 'PET marks alone; ties by age, qualification and name',
      detail:
        'The merit list is the total of the three events, by category and reservation; ties go to the older candidate, then the better qualified, then alphabetical order on the class 10 certificate. Medical examination under Form 103 and character verification under Form 101 of the manual before appointment; a pending criminal case disqualifies.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No general constable window is open and no 2026 general advertisement has been issued. The 2025 round is complete: its final list of 27 May 2026 selected 19,838 from the 45,611 who passed every event, and the board confirmed the provisional selection on 22 July after verification notices in April and May. The 2026 specialist rounds stand as follows. Special Branch constables, Advt 01/2026 — 83 posts, examined 24 June on a two-paper scheme with negative marking, result of 18 August, physical standard test and verification on 12 September at the veterinary college ground, Patna. Radio operators, Advt 02/2026 — 993 posts, examined 28 June after NEET displaced the 21 June date, written result 18 August, physical test date not yet notified. Prohibition constables, jail warders and mobile squad constables, Advt 03/2025 — 4,236 posts, examined 14 and 17 June in four shifts by 5,34,735, written result 18 August, physical stage not yet dated. Driver constables, Advt 02/2025 — 4,361 posts, physical test passed by 11,847 in March, driving tests from 24 August, with the heavy-vehicle test rained off from 7 to 9 September and rescheduled to 15 September.`,
    },
    {
      type: 'table',
      caption: 'The 2025 general round, from the board’s advertisement and results.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 01/2025', '11 March 2025', '19,838 posts, level 3; Bihar Police and the Special Armed Police'],
        ['Applications', '18 March to 25 April 2025, extended from 18 April', '16,73,586 valid'],
        ['Written test', '16, 20, 23, 27 and 30 July and 3 August 2025', 'One shift a day, 12 to 2; 627 centres; 13,30,121 sat; normalised'],
        ['Written result', '26 September 2025', '99,190 called at five per post; home guard shortfall re-allotted'],
        ['Physical efficiency test', '15 December 2025 to 11 March 2026, Patna', '79,932 appeared; 29,282 failed the race; 45,611 passed every event'],
        ['Final result', '27 May 2026', '19,838 selected; 332 home guards passed; provisional selection confirmed 22 July'],
      ],
    },
    {
      type: 'table',
      caption: 'The board’s 2026 constable-cadre rounds.',
      head: ['Advertisement', 'Post and number', 'Applications', 'Written test', 'Position at 11 September 2026'],
      rows: [
        ['01/2026, 29 January 2026', 'Constable, Special Branch general closed cadre — 83', '6 February to 5 March 2026', '24 June 2026 — two papers back to back, 10 to 1.30', 'Result 18 August; PST and DV 12 September'],
        ['02/2026, 23 February 2026', 'Constable operator, radio and telecom — 993', '1 to 31 March 2026', '28 June 2026, moved from 21 June for NEET', 'Written result 18 August; PET not yet dated'],
        ['03/2025, 26 September 2025', 'Prohibition constable 1,697; jail warder 2,431; mobile squad constable 108 — 4,236', '6 October to 5 November 2025', '14 and 17 June 2026, two shifts a day', 'Written result 18 August; physical stage not yet dated'],
        ['02/2025, 17 July 2025', 'Driver constable — 4,361', '21 July to 20 August 2025', '10 December 2025, 15 districts', 'PET passed by 11,847; driving tests from 24 August; heavy-vehicle test 15 September'],
      ],
    },
    {
      type: 'links',
      title: 'Check the board directly',
      items: [
        { label: 'CSBC — notices', href: CSBC.home },
        { label: 'CSBC — new site', href: CSBC.newSite },
        { label: 'Constable 2025 — final result, 27 May 2026', href: CSBC.final2025 },
        { label: 'Special Branch constable 2026 — PST and DV notice, 29 August 2026', href: CSBC.specialBranchPst },
        { label: 'Driver constable — driving test notice, 31 July 2026', href: CSBC.driverDet },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2025 advertisement. Minimum age on 1 August 2025; maximum age on 1 August 2023 — the board carried the previous round’s cut-off forward under the personnel department’s letter of 2006. Certificates as on 18 April 2025.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Intermediate, or Maulvi of the Bihar Madrasa Board, or Shastri with English or Acharya without English of the Bihar Sanskrit Board, or a state-recognised equivalent.'],
        ['Age', '18 to 25 for the unreserved, men and women; 18 to 27 for BC and EBC men; 18 to 28 for BC and EBC women; 18 to 30 for SC and ST men and women and transgender candidates; five more years for trained home guards.'],
        ['Reservation', 'For permanent residents of Bihar with certificates; other states’ candidates unreserved. Half of each category’s posts for trained home guards; 35 per cent horizontally for Bihar women; 2 per cent for freedom fighters’ descendants; no disability reservation.'],
        ['Fee', '₹675 for BC, EBC, EWS and unreserved men of Bihar and all candidates from outside; ₹180 for Bihar SC and ST, Bihar women of every category, and transgender candidates.'],
        ['Pay', 'Level 3, ₹21,700 to ₹69,100.'],
      ],
    },
    {
      type: 'table',
      caption: 'Physical standards, from the 2025 advertisement; no marks, but a failure disqualifies.',
      head: ['Candidates', 'Height', 'Chest or weight'],
      rows: [
        ['Unreserved and BC men', '165 cm', 'Chest 81 cm unexpanded, 86 expanded, at least 5 cm expansion'],
        ['EBC men', '160 cm', 'As above'],
        ['SC and ST men', '160 cm', 'Chest 79 cm unexpanded, 84 expanded'],
        ['Women, all categories', '155 cm', 'No chest; weight at least 48 kg'],
        ['Transgender', 'As women', 'As women'],
      ],
    },
    {
      type: 'p',
      text: 'Medical fitness under Form 103 of the police manual covers eyesight, colour blindness, hearing and stammering; character verification under Form 101 disqualifies a candidate with a pending criminal case or a conviction. Documents verified include the matric and intermediate certificates and marksheets, caste and domicile certificates, the non-creamy-layer certificate with the annexure where over a year old, the EWS certificate for 2023-24, the home guard training certificate and identity card, and the freedom fighter and transgender certificates.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The written test, from paragraph 5 of the 2025 advertisement.',
      head: ['Feature', 'Rule'],
      rows: [
        ['Paper', 'One paper of 100 questions and 100 marks in two hours, OMR, one mark per correct answer'],
        ['Level', 'Class 10 of the Bihar School Examination Board, under rule 663 and Appendix 103 of the Bihar Police Manual 1978'],
        ['Subjects', 'Hindi; English; mathematics; social science — history, geography, civics, economics; science — physics, chemistry, zoology, botany; general knowledge and current affairs'],
        ['Negative marking', 'No clause — the advertisement states only that one mark is given for a correct answer'],
        ['Normalisation', 'Equi-percentile across shifts and days'],
        ['Qualifying', '30 per cent; below it a fail'],
        ['Shortlist', 'Five per post in each category to the PET, ties included'],
        ['Weight', 'None — the written test is qualifying only and the final merit is the PET'],
      ],
    },
    {
      type: 'table',
      caption: 'The physical efficiency test — 100 marks, the merit list.',
      head: ['Event', 'Men', 'Women', 'Marks'],
      rows: [
        ['Race', 'One mile in six minutes — under 5:00 50; 5:00 to 5:20 40; to 5:40 30; to 6:00 20', 'One kilometre in five minutes — under 4:00 50; to 4:20 40; to 4:40 30; to 5:00 20', '50'],
        ['Shot put', '16 lb, at least 16 feet — 16 to 17 feet 9; to 18 13; to 19 17; to 20 21; beyond 20 25', '12 lb, at least 12 feet — 12 to 13 feet 9; to 14 13; to 15 17; to 16 21; beyond 16 25', '25'],
        ['High jump', 'At least 4 feet — 4′ 13; 4′4″ 17; 4′8″ 21; 5′ 25', 'At least 3 feet — 3′ 13; 3′4″ 17; 3′8″ 21; 4′ 25', '25'],
      ],
    },
    {
      type: 'note',
      title: 'The specialist rounds are scored differently',
      text: 'The Special Branch constable round of 2026 breaks the pattern: two papers of 100 questions in 90 minutes each — reasoning, English and Hindi grammar; general studies, mathematics and Bihar — with 0.25 off per wrong answer, 30 per cent in each, three candidates per post called to a physical standard test that only measures, and the two papers as the merit. The radio operator round tests physics, chemistry, mathematics and general knowledge at intermediate level in one 100-mark paper and treats its physical test as qualifying without marks. The prohibition, jail warder and mobile squad round follows the general pattern under its own cadre rules.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the board’s advertisements 01/2025, 01/2023, 01/2026, 02/2026, 03/2025 and 02/2025, its examination, physical test, result and provisional selection notices for each, its syllabus documents, its order of 3 October 2023 cancelling the examination, and the general administration department’s resolution of 9 July 2025 as the board applied it. The board publishes no question papers or answer keys; its results are roll-number lists. The 2023 leak inquiry’s arrests and the officials named in it are from press reports and are not relied on beyond the board’s own order.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'Constable 2025 — advertisement, 11 March 2025', href: CSBC.advt2025 },
        { label: 'Constable 2025 — syllabus', href: CSBC.syllabus2025 },
        { label: 'Constable 2025 — written result for PET, 26 September 2025', href: CSBC.written2025 },
        { label: 'Constable 2025 — final result, 27 May 2026', href: CSBC.final2025 },
        { label: 'Constable 2025 — provisional selection, 22 July 2026', href: CSBC.provisional2025 },
        { label: 'Women’s reservation for Bihar residents — notice, 2 September 2025', href: CSBC.womenNotice },
        { label: 'Constable 2023 — advertisement', href: CSBC.advt2023 },
        { label: 'Constable 2023 — cancellation order, 3 October 2023', href: CSBC.cancel2023 },
        { label: 'Constable 2023 — re-examination notice, 11 July 2024', href: CSBC.reexam2023 },
        { label: 'Constable 2023 — final result, 9 May 2025', href: CSBC.final2023 },
        { label: 'Special Branch constable — advertisement 01/2026', href: CSBC.specialBranch2026 },
        { label: 'Constable operator — advertisement 02/2026', href: CSBC.operator2026 },
        { label: 'Constable operator — written result, 18 August 2026', href: CSBC.operatorResult },
        { label: 'Prohibition, jail warder and mobile squad — advertisement 03/2025', href: CSBC.prohibition2025 },
        { label: 'Prohibition, jail warder and mobile squad — written result, 18 August 2026', href: CSBC.prohibitionResult },
        { label: 'Driver constable — advertisement 02/2025', href: CSBC.driver2025 },
        { label: 'Driver constable — heavy-vehicle test rescheduled, 9 September 2026', href: CSBC.driverHmv },
        { label: 'CSBC — syllabus index', href: CSBC.syllabus },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Bihar Police Constable syllabus — the Bihar board’s class 10 syllabus in Hindi, English, mathematics, social science and science, plus general knowledge.',
      lead: [
        'The board’s syllabus document reproduces the Bihar School Examination Board’s matric syllabus for classes 9 and 10 — the paper is that and nothing more.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Hindi',
              'Grammar, comprehension and the class 9 and 10 readers.',
            ],
            [
              'English',
              'Grammar, vocabulary and comprehension at class 10 level.',
            ],
            [
              'Mathematics',
              'Number systems, algebra, geometry, mensuration, trigonometry and statistics of classes 9 and 10.',
            ],
            [
              'Social science',
              'History, geography, civics and economics of classes 9 and 10 — India and Bihar.',
            ],
            [
              'Science',
              'Physics, chemistry, zoology and botany of classes 9 and 10.',
            ],
            [
              'General knowledge and current affairs',
              'National and Bihar events, awards, sports and institutions.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Constable 2025 — syllabus', href: CSBC.syllabus2025 },
            { label: 'CSBC — syllabus index', href: CSBC.syllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Bihar Police Constable exam pattern — a 100-mark class 10 written test qualifying at 30 per cent, then a 100-mark PET of race, high jump and shot put.',
      lead: [
        'A paper that opens the gate and a ground that ranks.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Written 100, two hours', 'Class 10 level; one mark per correct answer; no negative-marking clause; normalised.'],
            ['30 per cent and five per post', 'Below 30 a fail; five per post per category to the PET.'],
            ['Written does not count', 'The advertisement: the written examination is qualifying only.'],
            ['PET 100', 'Race 50, high jump 25, shot put 25; each must be passed; the merit list.'],
            ['Standards', '165, 160 or 155 cm; chest or 48 kg; no marks.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Bihar Police Constable previous papers — why the board publishes none, and what stands in for them.',
      lead: [
        'The board publishes syllabi and roll-number results, not papers or keys; candidates’ copies of the six 2025 papers and the six 2024 re-examination papers circulate.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What exists',
          items: [
            { text: 'The board’s syllabus documents', note: 'the class 10 syllabus reproduced for each round — the boundary of the paper.' },
            { text: 'Twelve papers of the last two rounds', note: 'six days in 2024 and six in 2025, each a single paper of 100, in circulation from candidates.' },
            { text: 'The Bihar board’s own matric papers', note: 'the closest official model for the five subjects.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'CSBC — syllabus index', href: CSBC.syllabus },
            { label: 'Police exam preparation', to: '/government-exams/police/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Bihar Police Constable mock tests — 100-question class 10 papers in two hours to clear 30 and the cut, and the three PET events against the marking table.',
      lead: [
        'The paper is a gate; the mock that matters is the mile against the clock.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Written — 100 questions in two hours', text: 'Class 10 content in six subjects. Thirty is the floor; the five-per-post cut in a large category is well above it, and the score is then discarded.' },
            { title: 'The mile', text: 'Under five minutes for 50; six minutes to survive. Nearly 30,000 of 79,932 failed it in the last round.' },
            { title: 'Shot put and high jump', text: 'Twenty feet and five feet for full marks; sixteen feet and four feet to pass. Three attempts each.' },
            { title: 'Score the ground, not the paper', text: 'The merit is the three events; a 100-mark paper with 30 to qualify decides nothing beyond entry.' },
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
        'Bihar Police Constable preparation — the next general advertisement, the specialist rounds now open, the age cut-off dates, and training the three events.',
      lead: [
        'No general round is open; the preparation is physical, and the paper is class 10.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From advertisement to appointment',
          items: [
            { title: 'Watch both of the board’s sites', text: 'The notices list on the current site and the new site announced in May 2026; every advertisement, result and notice is a PDF there.' },
            { title: 'Read the cut-off dates', text: 'The 2025 round reckoned minimum age on 1 August 2025 and maximum age on 1 August 2023, with certificates as on the closing date.' },
            { title: 'Measure first', text: '165, 160 or 155 cm and the chest or 48 kg; a failure at measurement ends the round before the events.' },
            { title: 'Train the mile to five minutes', text: 'The race is half the merit and the only event a failure in which stops the others.' },
            { title: 'Keep the reservation papers current', text: 'Bihar domicile for any reservation and for the women’s quota; the non-creamy-layer certificate with its annexure; the home guard training certificate for the half of posts reserved.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Bihar Police Constable study material — the Bihar board’s class 9 and 10 textbooks in five subjects, a current affairs digest, and a plan for the three events.',
      lead: [
        'The Bihar board’s matric textbooks are the syllabus; a running plan is the merit.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By subject.',
          head: ['Subject', 'What to read', 'Note'],
          rows: [
            ['Hindi and English', 'The Bihar board’s class 9 and 10 readers and grammar', 'Two of six subjects.'],
            ['Mathematics', 'The Bihar board’s class 9 and 10 mathematics', 'Objective practice on each chapter.'],
            ['Social science and science', 'The Bihar board’s class 9 and 10 textbooks', 'Four of six subjects.'],
            ['General knowledge', 'A Bihar general knowledge book; a year of current affairs', 'The state weighted.'],
            ['The ground', 'A twelve-week running plan to a five-minute mile; shot put and high jump technique', 'The merit.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Bihar Police Sub-Inspector', to: '/government-exams/state/bihar/police-si/' },
            { label: 'Police exam preparation', to: '/government-exams/police/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Is Bihar Police Constable 2026 recruitment out?',
      a: 'No general constable advertisement for 2026 has been issued as at 11 September 2026. The 2025 round of 19,838 posts closed with its final result of 27 May 2026 and the confirmation of provisional selection on 22 July. The board’s 2026 constable rounds are specialist: 83 Special Branch constables at physical standards on 12 September, 993 radio operators awaiting a physical test date, 4,236 prohibition constables, jail warders and mobile squad constables with their written result out on 18 August, and 4,361 driver constables in driving tests.',
    },
    {
      q: 'What is the Bihar Police Constable exam pattern?',
      a: 'A written test of 100 questions and 100 marks in two hours at the Bihar board’s class 10 level — Hindi, English, mathematics, social science, science, and general knowledge and current affairs — with one mark per correct answer and no negative-marking clause, normalised across days. Below 30 per cent is a fail; five candidates per post go to the physical efficiency test. The written marks are then discarded: the final merit list is the physical test alone.',
    },
    {
      q: 'How is the Bihar Police Constable PET scored?',
      a: 'Out of 100. The race is 50 — one mile within six minutes for men, scoring 50 under five minutes and 20 in the last twenty seconds; one kilometre within five for women, scoring 50 under four. Shot put is 25 — 16 lb to at least 16 feet for men, 12 lb to 12 feet for women, 25 beyond 20 and 16 feet. High jump is 25 — at least 4 feet for men and 3 for women, 25 at 5 and 4 feet. Each event must be passed, and a candidate who fails the race attempts nothing else.',
    },
    {
      q: 'What are the height and age requirements for Bihar Police Constable?',
      a: 'Height 165 cm for unreserved and BC men, 160 for EBC, SC and ST men, 155 for women; chest 81 to 86 cm for unreserved, BC and EBC men and 79 to 84 for SC and ST, with 5 cm expansion; women at least 48 kg. Age 18 to 25 for the unreserved, 27 for BC and EBC men, 28 for BC and EBC women, 30 for SC, ST and transgender candidates, with five more years for trained home guards — reckoned by the matric certificate on the advertisement’s cut-off dates.',
    },
    {
      q: 'What is the Bihar Police Constable fee?',
      a: '₹675 for BC, EBC, EWS and unreserved men of Bihar and all candidates from outside the state; ₹180 for Bihar SC and ST candidates, Bihar women of every category, and transgender candidates, plus bank charges. Reservation and the women’s quota are for permanent residents of Bihar with certificates.',
    },
    {
      q: 'What happened in the Bihar Police Constable 2023 exam?',
      a: 'The written test of 1 October 2023 for 21,391 posts was cancelled by the board’s order of 3 October after candidates were arrested across districts with electronic devices and chits and the answers were found to have reached candidates by mobile; the remaining dates were postponed and an economic offences inquiry followed. The re-examination ran on six days from 7 to 28 August 2024, 1,06,955 went to a physical test from December 2024 to March 2025, and the final result of 9 May 2025 filled the posts.',
    },
    {
      q: 'How many candidates passed the Bihar Police Constable 2025 PET?',
      a: 'Of 99,690 called at five per post from the written test, 79,932 appeared at Patna between 15 December 2025 and 11 March 2026; 29,282 failed the race and 5,039 failed the other events or verification; 45,611 passed everything — 16,245 women, 29,349 men and 17 transgender candidates — and 19,838 were selected on 27 May 2026. Of 867 home guards called, 332 passed.',
    },
    {
      q: 'Does the written exam count in Bihar Police Constable selection?',
      a: 'No. The advertisement states that the written examination will not be the basis of the final merit list and is qualifying only for the physical efficiency test. A candidate must score 30 per cent and fall within five per post in the category to reach the ground; from there the race, shot put and high jump decide, with ties broken by age, qualification and name.',
    },
  ],
}

/* ── Bihar Police Sub-Inspector ─────────────────────────────────
   Recruited by the Bihar Police Subordinate Services Commission: a 200-mark
   preliminary at twenty per post, a mains of two 200-mark papers with Hindi
   qualifying and general studies the merit, 0.2 off per wrong answer, and a
   qualifying PET at six per post. The 1,799-post round of 2025 stands with
   its PET postponed sine die after a mains inquiry; a 150-post Special
   Branch round closed in August. Figures are from the commission's PDFs. */
const BPSSC = {
  home: 'https://bpssc.bihar.gov.in/',
  apply: 'https://apply-bpssc.com/',
  syllabus: 'https://bpssc.bihar.gov.in/Syllabus.htm',
  syllabusRules: 'https://bpssc.bihar.gov.in/Advts/Syllabus-SI-Eq-Posts.pdf',
  prohibition: 'https://bpssc.bihar.gov.in/A-PER.htm',
  forest: 'https://bpssc.bihar.gov.in/A-EFC.htm',
  transport: 'https://bpssc.bihar.gov.in/A-TRANS.htm',
  homeGuard: 'https://bpssc.bihar.gov.in/A-HG.htm',
  advt2025: 'https://bpssc.bihar.gov.in/Notices/Advt.%2005-2025.pdf',
  prelims2025: 'https://bpssc.bihar.gov.in/Notices/Advt.%20No.%20052025%20PSI_prelims%20result%2016032026_upload.pdf',
  mains2025: 'https://bpssc.bihar.gov.in/Notices/Result%20Mains%2005-25_Publish.pdf',
  pressNote: 'https://bpssc.bihar.gov.in/Notices/Letter%20no.-121-C%20dt.-03.06.2026.pdf',
  petNotice: 'https://bpssc.bihar.gov.in/Notices/Important%20Notice%20for%20PET.pdf',
  petPostponed: 'https://bpssc.bihar.gov.in/Notices/Advt%20no.-05-2025%20PET.pdf',
  advt2023: 'https://bpssc.bihar.gov.in/Advts/Advt-02-2023-SI.pdf',
  prelims2023: 'https://bpssc.bihar.gov.in/Notices/NB-2024-01-25-01.pdf',
  mains2023: 'https://bpssc.bihar.gov.in/Notices/NB-2024-03-15-01.pdf',
  final2023: 'https://bpssc.bihar.gov.in/Notices/NB-2024-07-09-01.pdf',
  marks2023: 'https://bpssc.bihar.gov.in/Notices/NB-2024-08-19-01.pdf',
  specialBranch2026: 'https://bpssc.bihar.gov.in/Notices/Advt.%20No-09-2026%20Pdf.pdf',
  prohibition2026: 'https://bpssc.bihar.gov.in/Notices/PER/03-2026.pdf',
  prohibition2026Result: 'https://bpssc.bihar.gov.in/Notices/Advt_032026_Prelims_Result_Publish-12082026.pdf',
  operation2026Result: 'https://bpssc.bihar.gov.in/Notices/Advt_042026_PRELIMS_Result_Publish_12082026.pdf',
  fro2026: 'https://bpssc.bihar.gov.in/Notices/EFC/Advt.%20No-10-2026%20FRO.pdf',
  enforcementFinal: 'https://bpssc.bihar.gov.in/Notices/Final%20Result%2003-25.pdf',
}

const BR_SI = {
  slug: 'police-si',
  path: '/government-exams/state/bihar/police-si/',
  name: 'Bihar Police Sub-Inspector',
  fullName: 'Bihar Police Subordinate Services Commission — Police Sub-Inspector recruitment',
  authority: 'Bihar Police Subordinate Services Commission (BPSSC), Patna',
  official: 'bpssc.bihar.gov.in',
  seoTitle: 'Bihar Police SI 2025-26: 1,799 Posts, PET Postponed, Pattern, Cut-offs',
  metaDescription:
    'Bihar Police Sub-Inspector — the 1,799-post round with 10,759 shortlisted for a PET postponed sine die, the 200-mark prelims and 400-mark mains with 0.2 off.',
  lead: [
    'Bihar’s police sub-inspectors are recruited by the Bihar Police Subordinate Services Commission on a three-stage pattern: an objective preliminary of general knowledge and current affairs for 200 marks that admits twenty candidates per post, a mains of two 200-mark papers — general Hindi, qualifying at 30 per cent, and a general studies paper that alone makes the merit — and a physical efficiency test at six per post that qualifies and scores nothing. A fifth of a mark comes off for every wrong answer at both written stages, and the final list must clear category minimums of 40, 36.5, 34 and 32 per cent set by the police manual.',
    'The 2025 round is the largest for years and is stuck at its last stage. Advertised on 23 September 2025 for 1,799 posts at a fee of ₹100 for every category, it examined 7,26,231 candidates in January 2026, shortlisted 35,857, held its mains on 27 May and published the mains result on 19 June with 10,759 through to the physical test. The commission then answered social-media claims of a leak by saying invigilators at two centres had photographed unused booklets and been charged, an economic offences inquiry followed, and on 28 August the home department postponed the physical test until further orders. The 2023 round of 1,275 posts, by contrast, ran from advertisement to final result in nine months.',
  ],
  quickFacts: [
    ['Recruiting body', 'Bihar Police Subordinate Services Commission, Patna'],
    ['2025 round', 'Advt 05/2025, 23 September 2025 — 1,799 posts; prelims 18 and 21 January 2026; mains 27 May; 10,759 to PET'],
    ['Status', 'PET and verification postponed until further orders by the notice of 28 August 2026; final result pending'],
    ['Prelims', '100 questions, 200 marks, two hours; 30 per cent to qualify; twenty per post; 0.2 off per wrong answer'],
    ['Mains', 'Paper 1 general Hindi 200, qualifying at 30 per cent; Paper 2 general studies 200, the merit; 0.2 off per wrong answer'],
    ['Age and fee', '20 to 37 unreserved men; 40 for BC, EBC and unreserved women; 42 for SC, ST and transgender; ₹100 for all in 2025'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 2025 advertisement distributes its 1,799 level-6 posts as 850 unreserved, 180 EWS, 210 SC, 15 ST, 273 EBC, 222 BC, 42 BC women and 7 transgender, with 614 reserved horizontally for women and 36 for freedom fighters’ descendants. Graduation is required as on 1 August 2025, and the age rule is unusual: the minimum age is reckoned on 1 August 2025 and the maximum on 1 August 2024, so that candidates who were within the limit a year earlier could still apply. Applications ran from 26 September to 26 October 2025 at ₹100 for men, women and transgender candidates alike — the 2023 round had charged ₹700 and ₹400.',
    },
    {
      type: 'p',
      text: 'The preliminary of 18 and 21 January 2026 ran in two shifts each day, normalised by the equi-percentile method, and its result of 16 March 2026 evaluated 6,96,959 of 7,26,231 who sat after 29,272 were disqualified for errors on the answer sheet — a wrong roll number, a wrong booklet number, a missing signature or an unwritten declaration paragraph. Twenty per post, 35,857, went to the mains of 27 May: 33,726 of 33,888 cleared the Hindi paper at 30 per cent, 32,645 obtained the category minimum on the general studies paper, and six per post — 10,759 including the freedom fighters’ quota — were shortlisted for the physical test on 19 June.',
    },
    {
      type: 'list',
      title: 'What the advertisement settles',
      items: [
        { text: 'Only Paper 2 counts', note: 'the final merit is the mains marks, and the Hindi paper’s marks are expressly excluded — general studies, general science, civics, Indian history and geography, mathematics and mental ability for 200.' },
        { text: 'Category minimums in the final list', note: 'under rule 655A of the police manual as amended by the gazette notification of 7 August 2019: 40 per cent for the general category, 36.5 for BC, 34 for EBC, 32 for SC, ST and women.' },
        { text: 'The PET is a gate', note: 'one mile in six minutes thirty for men and one kilometre in six for women; a high jump of 4 or 3 feet; a long jump of 12 or 9 feet; a shot put of 16 lb to 16 feet or 12 lb to 10 feet — each passed, three attempts at the jumps and the put, and no other event for a candidate who fails the race.' },
        { text: 'Ties and appointment', note: 'age, then education, then alphabetical order; the deputy inspector general appoints after medical, character and antecedent verification.' },
      ],
    },
    {
      type: 'note',
      title: 'The mains of 27 May 2026 and what followed',
      text: 'The commission’s press note of 3 June 2026 states that the examination was clean, that at one centre each in two districts invigilators and staff illegally photographed an unused question booklet and posted it online, that criminal cases were registered in both matters and some persons jailed, and that any candidate found complicit would be disqualified. The mains result followed on 19 June. Press reports say the economic offences unit then formed a special team to investigate the photographs from centres at Gaya and Purnea. The commission’s notice of 12 August fixed the physical test and verification for September or October at Patna with admit cards from 8 September; its notice of 28 August, citing the home department’s letter of 27 August, postponed both until further orders. Candidates demanding a date protested in Patna in September.',
    },
  ],
  stages: [
    {
      name: 'Application',
      mode: 'Online, a month; ₹100 for every category in 2025',
      detail:
        'Graduation and the age limits as on the two cut-off dates; the rejected-applications list published before the preliminary. The 2025 window ran from 26 September to 26 October 2025.',
    },
    {
      name: 'Preliminary examination',
      mode: '100 questions, 200 marks, two hours, OMR, in shifts, normalised',
      detail:
        'General knowledge and current affairs. Below 30 per cent is a fail; twenty candidates per post in each category go to the mains; 0.2 off per wrong answer. An unwritten declaration paragraph or a wrong roll or booklet number on the sheet disqualifies — 29,272 in 2026.',
    },
    {
      name: 'Main examination',
      mode: 'Two papers of 100 questions and 200 marks in one day',
      detail:
        'Paper 1, general Hindi, 10 to 12, qualifying at 30 per cent and not counted; Paper 2, general studies, general science, civics, Indian history and geography, mathematics and mental ability, 2.30 to 4.30, the merit. 0.2 off per wrong answer in both. Six per post to the physical test, within the category minimums.',
    },
    {
      name: 'Physical efficiency test, verification, appointment',
      mode: 'Qualifying; merit on Paper 2',
      detail:
        'Race, high jump, long jump and shot put at Patna, with document verification; measurement of height, chest and weight. The final list by Paper 2 marks and reservation; medical examination and character verification before the deputy inspector general appoints.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No sub-inspector window is open. The 2025 round stands between its mains result and a physical test with no date: the commission’s notice of 12 August 2026 had fixed the test and verification for September or October at Patna with admit cards from 8 September, and its notice of 28 August postponed both until further orders on the home department’s letter of 27 August, with a new date to be notified. The Special Branch sub-inspector round, Advt 09/2026 for 150 posts in the general closed cadre, took applications from 9 July to 9 August 2026 and has no examination date. Among the commission’s other cadres, the prohibition sub-inspector round of 78 posts published its preliminary result on 12 August after a single-shift paper on 12 July, the radio operation assistant sub-inspector round of 462 posts published its preliminary result the same day, the radio technical round’s preliminary of 5 August was postponed, the forest range officer round of 16 posts closed on 16 August, and the enforcement sub-inspector round of 33 posts closed with its final result on 10 March 2026.`,
    },
    {
      type: 'table',
      caption: 'The 2025 round, from the advertisement and the commission’s results and notices.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 05/2025', '23 September 2025', '1,799 posts, level 6; sub-inspector only'],
        ['Applications', '26 September to 26 October 2025', '₹100 for all; rejected list 22 December'],
        ['Preliminary', '18 and 21 January 2026, two shifts a day', '10,36,702 registered; 7,26,231 sat; 29,272 disqualified for sheet errors'],
        ['Preliminary result', '16 March 2026', '35,857 shortlisted at twenty per post'],
        ['Mains', '27 May 2026', 'Paper 1 10 to 12; Paper 2 2.30 to 4.30; 34,302 sat'],
        ['Press note on the booklets', '3 June 2026', 'Unused booklets photographed at two centres; cases registered'],
        ['Mains result', '19 June 2026', '33,726 qualified in Hindi; 32,645 reached the minimum in Paper 2; 10,759 to PET'],
        ['PET notice', '12 August 2026', 'September or October at Patna; admit cards from 8 September'],
        ['PET postponed', '28 August 2026', 'Until further orders, on the home department’s letter of 27 August'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2023 round, for the sequence — 1,275 posts, Advt 02/2023 of 30 September 2023.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Applications', '5 October to 5 November 2023', '₹700; ₹400 for SC, ST, Bihar women and transgender'],
        ['Preliminary', '17 December 2023', '5,36,754 sat; 21,758 disqualified for sheet errors; twenty per post'],
        ['Mains', '25 February 2024', '25,405 shortlisted; 23,577 qualified in Hindi'],
        ['PET and verification', '10 to 19 June 2024, Patna', '7,623 eligible; 6,788 appeared; 2,300 failed the race; 3,727 through'],
        ['Final result', '9 July 2024', 'On mains marks with the category minimums; marks of all candidates published 19 August'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'BPSSC — home and notices', href: BPSSC.home },
        { label: 'Sub-inspector 2025 — PET postponement, 28 August 2026', href: BPSSC.petPostponed },
        { label: 'Sub-inspector 2025 — mains result, 19 June 2026', href: BPSSC.mains2025 },
        { label: 'Special Branch sub-inspector — advertisement 09/2026', href: BPSSC.specialBranch2026 },
        { label: 'BPSSC — application portal', href: BPSSC.apply },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 2025 advertisement. Graduation as on 1 August 2025; minimum age on 1 August 2025; maximum age on 1 August 2024.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Graduation from a recognised university or a state-recognised equivalent.'],
        ['Age', '20 to 37 for unreserved men; 20 to 40 for unreserved women and for BC and EBC men and women; 20 to 42 for SC and ST men and women and transgender candidates; five more for Bihar government servants with three years’ service; ex-servicemen three years plus service, to 57.'],
        ['Reservation', 'For Bihar residents with certificates; 35 per cent horizontally for women; 2 per cent for freedom fighters’ descendants; transgender posts within the roster.'],
        ['Fee', '₹100 for men, women and transgender candidates of every category, by card, net banking or UPI. The 2023 round charged ₹700, or ₹400 for SC, ST, Bihar women and transgender candidates.'],
        ['Pay', 'Level 6.'],
      ],
    },
    {
      type: 'table',
      caption: 'Physical standards — no marks, but a failure disqualifies.',
      head: ['Candidates', 'Height', 'Chest or weight'],
      rows: [
        ['Unreserved and BC men', '165 cm', 'Chest 81 cm unexpanded, 86 expanded, at least 5 cm expansion'],
        ['EBC, SC and ST men', '160 cm', 'Unreserved, BC and EBC 81 to 86; SC and ST 79 to 84'],
        ['Women, all categories', '155 cm', 'No chest; weight at least 48 kg'],
        ['Transgender', 'As BC women', 'As women'],
      ],
    },
    {
      type: 'table',
      caption: 'Physical efficiency test — qualifying; three attempts at the jumps and the put; no other event after a failed race.',
      head: ['Event', 'Men', 'Women'],
      rows: [
        ['Race', 'One mile in 6 minutes 30 seconds', 'One kilometre in 6 minutes'],
        ['High jump', 'At least 4 feet', 'At least 3 feet'],
        ['Long jump', 'At least 12 feet', 'At least 9 feet'],
        ['Shot put', '16 lb to at least 16 feet', '12 lb to at least 10 feet'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The scheme, from paragraph 5 of the 2025 advertisement.',
      head: ['Stage', 'Paper', 'Questions', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Preliminary', 'General knowledge and current affairs', '100', '200', '2 hours', '30 per cent to qualify; twenty per post; normalised across shifts'],
        ['Mains', 'Paper 1 — general Hindi', '100', '200', '2 hours', 'Qualifying at 30 per cent; not counted'],
        ['Mains', 'Paper 2 — general studies, general science, civics, Indian history, Indian geography, mathematics, mental ability', '100', '200', '2 hours', 'The merit; six per post to the PET'],
        ['Negative marking', '—', '—', '—', '—', '“In both stages of the examination 0.2 marks will be deducted for every wrong answer”'],
        ['Final list', '—', '—', '—', '—', 'Paper 2 marks with category minimums — 40 per cent general, 36.5 BC, 34 EBC, 32 SC, ST and women'],
      ],
    },
    {
      type: 'note',
      title: 'The answer sheet is part of the examination',
      text: 'The commission disqualified 29,272 candidates at the 2026 preliminary and 21,758 at the 2023 one for errors on the OMR sheet — a wrong roll number, a wrong booklet number, a missing signature, or the Hindi and English declaration paragraphs left unwritten — before any answer was marked. At the 2026 mains 414 were disqualified in Paper 1 and 998 in Paper 2 on the same grounds. The rules are in the admit-card notices; the sheet must be completed as instructed.',
    },
    {
      type: 'list',
      title: 'What the results settle',
      items: [
        { text: 'Twenty per post is generous, six is not', note: '35,857 sat the mains for 1,799 posts; 10,759 go to the ground; the 2023 round selected 1,275 from 3,727 who passed the events.' },
        { text: 'The race fails a third', note: '2,300 of 6,788 failed it in 2024.' },
        { text: 'Marks are published after the final result', note: 'candidate-wise, through the commission’s portal — the 2023 round’s on 19 August 2024.' },
        { text: 'The Special Branch round is different', note: 'a general closed cadre under 2024 rules, with its own scheme; the advertisement’s scheme pages were not read.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s advertisement 05/2025, its preliminary and mains results of 16 March and 19 June 2026, its press note of 3 June, its physical test notice of 12 August and postponement of 28 August, the 2023 advertisement and its preliminary, mains, final and marks notices, the Special Branch advertisement 09/2026, the gazette notifications of 2017 and 2019 the commission publishes as its syllabus document, and the notices of its other cadres. The commission publishes no question papers or answer keys. The economic offences inquiry and the September protests are from press reports.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'Sub-inspector 2025 — advertisement 05/2025, 23 September 2025', href: BPSSC.advt2025 },
        { label: 'Sub-inspector 2025 — preliminary result, 16 March 2026', href: BPSSC.prelims2025 },
        { label: 'Sub-inspector 2025 — mains result, 19 June 2026', href: BPSSC.mains2025 },
        { label: 'Sub-inspector 2025 — press note on the mains, 3 June 2026', href: BPSSC.pressNote },
        { label: 'Sub-inspector 2025 — PET notice, 12 August 2026', href: BPSSC.petNotice },
        { label: 'Sub-inspector 2025 — PET postponement, 28 August 2026', href: BPSSC.petPostponed },
        { label: 'Sub-inspector 2023 — advertisement 02/2023', href: BPSSC.advt2023 },
        { label: 'Sub-inspector 2023 — preliminary result, 25 January 2024', href: BPSSC.prelims2023 },
        { label: 'Sub-inspector 2023 — mains result, 15 March 2024', href: BPSSC.mains2023 },
        { label: 'Sub-inspector 2023 — final result, 9 July 2024', href: BPSSC.final2023 },
        { label: 'Sub-inspector 2023 — marks of all candidates, 19 August 2024', href: BPSSC.marks2023 },
        { label: 'Police manual amendments of 2017 and 2019 — minimum percentages and PET', href: BPSSC.syllabusRules },
        { label: 'Prohibition sub-inspector 2026 — preliminary result, 12 August 2026', href: BPSSC.prohibition2026Result },
        { label: 'Forest range officer — advertisement 10/2026', href: BPSSC.fro2026 },
        { label: 'Enforcement sub-inspector — final result, 10 March 2026', href: BPSSC.enforcementFinal },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Bihar Police SI syllabus — general knowledge and current affairs for the prelims, general Hindi for Paper 1, and the general studies and civics of Paper 2.',
      lead: [
        'The advertisement names the subjects; the commission’s syllabus document is the police manual’s amended rules rather than a topic list.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Prelims — general knowledge and current affairs, 200',
              'India and Bihar: history, geography, polity, economy, science, the police and current events, at graduate level.',
            ],
            [
              'Mains Paper 1 — general Hindi, 200',
              'Grammar, vocabulary, comprehension, idioms and usage; qualifying at 30 per cent.',
            ],
            [
              'Mains Paper 2 — 200',
              'General studies; general science; civics — the Constitution and government; Indian history; Indian geography; mathematics; mental ability and reasoning.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'Sub-inspector 2025 advertisement — paragraph 5', href: BPSSC.advt2025 },
            { label: 'BPSSC — syllabus page', href: BPSSC.syllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Bihar Police SI exam pattern — 200-mark prelims at twenty per post, two 200-mark mains papers with Hindi qualifying, 0.2 negative marking, and a qualifying PET.',
      lead: [
        'Two hundred to get in, two hundred to rank, and a ground that only qualifies.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims 200', '30 per cent; twenty per post; normalised.'],
            ['Hindi 200', 'Qualifying at 30 per cent; not counted.'],
            ['General studies 200', 'The merit; category minimums of 40, 36.5, 34 and 32 per cent.'],
            ['Negative marking', '0.2 per wrong answer at both stages.'],
            ['PET', 'Six per post; race, high jump, long jump, shot put; qualifying.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Bihar Police SI previous papers — the commission’s published marks, the 2023 and 2025 cycles as a model, and the absence of official papers.',
      lead: [
        'The commission publishes results and, after the final list, every candidate’s marks — not the papers.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Marks of all candidates', note: 'published candidate-wise after the final result — the 2023 round’s on 19 August 2024 through the commission’s portal.' },
            { text: 'The papers in circulation', note: 'the preliminaries of 17 December 2023 and 18 and 21 January 2026 and the mains of 25 February 2024 and 27 May 2026, from candidates’ copies.' },
            { text: 'The rules', note: 'the gazette notifications of 2017 and 2019 on the commission’s syllabus page — the minimums and the PET.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Sub-inspector 2023 — marks of all candidates', href: BPSSC.marks2023 },
            { label: 'Police exam preparation', to: '/government-exams/police/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Bihar Police SI mock tests — two-hour 100-question sittings at two marks a question with 0.2 off, the Hindi paper to 30 per cent, and the four PET events.',
      lead: [
        'Score at −0.2 on a two-mark question; a blank costs nothing and a guess costs a tenth.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Prelims — 100 questions in two hours', text: 'General knowledge and current affairs at two marks; 30 per cent is the floor and twenty per post the cut.' },
            { title: 'Paper 2 — 100 questions in two hours', text: 'Seven heads; the only paper that ranks; the 2024 final list needed 40 per cent for the general category.' },
            { title: 'Paper 1 — Hindi to 60 of 200', text: 'Qualifying; 162 of 33,888 fell short in 2026.' },
            { title: 'The sheet', text: 'Roll number, booklet number, signature, both declaration paragraphs — 29,272 were disqualified for these in 2026 before a mark was counted.' },
            { title: 'The ground', text: 'A mile in six and a half minutes or a kilometre in six; 4 and 12 feet or 3 and 9 in the jumps; the put to 16 or 10 feet.' },
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
        'Bihar Police SI preparation — the 10,759 waiting for a PET date, the answer-sheet rules that disqualify, the category minimums, and the next advertisement.',
      lead: [
        'For the shortlisted, a physical test with no date; for everyone else, a paper whose sheet is as important as its questions.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From advertisement to appointment',
          items: [
            { title: 'Watch the commission’s home page', text: 'Every notice is a PDF there; the PET date for the 2025 round will appear as one.' },
            { title: 'Learn the sheet before the syllabus', text: 'Roll number, booklet number, signature and the two declaration paragraphs in the candidate’s hand — the admit-card notice sets them out.' },
            { title: 'Prepare Paper 2 as the examination', text: 'Two hundred marks across seven heads decide everything; the Hindi paper and the preliminary only admit.' },
            { title: 'Know the minimum for the category', text: '40, 36.5, 34 or 32 per cent in Paper 2 is required for the final list regardless of rank.' },
            { title: 'Train the four events', text: 'The race fails a third of those called; the jumps and the put allow three attempts each.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Bihar Police SI study material — Bihar and Indian general studies, a current affairs digest, Hindi grammar, and NCERT-level science, mathematics and reasoning.',
      lead: [
        'General studies at graduate level with Bihar weighted, Hindi as a gate, and school-level science and mathematics.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Prelims', 'A Bihar general knowledge book; NCERT general studies; a year of current affairs', 'Two hundred marks; twenty per post.'],
            ['Paper 1 — Hindi', 'A standard Hindi grammar with idioms and comprehension', 'Sixty of 200 to pass.'],
            ['Paper 2 — general studies and civics', 'NCERT history, geography and polity; a Constitution primer; Bihar', 'The merit.'],
            ['Paper 2 — science, mathematics, mental ability', 'NCERT science to class X; arithmetic; a reasoning workbook', 'Part of the 200.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Bihar Police Constable', to: '/government-exams/state/bihar/police-constable/' },
            { label: 'Police exam preparation', to: '/government-exams/police/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the Bihar Police SI 2025 PET?',
      a: 'It has no date. The commission’s notice of 12 August 2026 fixed the physical efficiency test and document verification for September or October at Patna with admit cards from 8 September; its notice of 28 August 2026, citing the home department’s letter of 27 August, postponed both until further orders, with a new date to be notified. 10,759 candidates were shortlisted for it by the mains result of 19 June.',
    },
    {
      q: 'What is the Bihar Police SI exam pattern?',
      a: 'A preliminary of 100 questions and 200 marks in two hours on general knowledge and current affairs, with 30 per cent to qualify and twenty candidates per post through; a mains of two papers of 100 questions and 200 marks in two hours — general Hindi, qualifying at 30 per cent and not counted, and general studies, general science, civics, Indian history and geography, mathematics and mental ability, the merit; 0.2 deducted per wrong answer at both stages; six per post to a physical efficiency test that qualifies; and a final list on the general studies marks with category minimums of 40, 36.5, 34 and 32 per cent.',
    },
    {
      q: 'What are the physical standards and PET for Bihar Police SI?',
      a: 'Height 165 cm for unreserved and BC men, 160 for EBC, SC and ST men, 155 for women; chest 81 to 86 cm, or 79 to 84 for SC and ST, with 5 cm expansion; women at least 48 kg. The PET: one mile in six minutes thirty for men or one kilometre in six for women; high jump of 4 or 3 feet; long jump of 12 or 9 feet; shot put of 16 lb to 16 feet or 12 lb to 10 feet — each passed, three attempts at the jumps and the put, and no other event after a failed race.',
    },
    {
      q: 'What is the age limit and fee for Bihar Police SI?',
      a: 'Twenty to 37 for unreserved men, 20 to 40 for unreserved women and BC and EBC men and women, and 20 to 42 for SC, ST and transgender candidates — with the 2025 round reckoning the minimum on 1 August 2025 and the maximum on 1 August 2024. The fee in 2025 was ₹100 for every category; the 2023 round charged ₹700, or ₹400 for SC, ST, Bihar women and transgender candidates.',
    },
    {
      q: 'Is there negative marking in the Bihar Police SI exam?',
      a: 'Yes. The advertisement states that in both stages of the examination 0.2 marks will be deducted for every wrong answer — a tenth of a two-mark question, in the preliminary and in both mains papers.',
    },
    {
      q: 'What happened in the Bihar Police SI mains of May 2026?',
      a: 'The commission’s press note of 3 June 2026 said the examination of 27 May was clean, but that invigilators and staff at one centre each in two districts had illegally photographed an unused question booklet and posted it online; criminal cases were registered and some persons jailed, and complicit candidates would be disqualified. The mains result followed on 19 June. Press reports say the economic offences unit formed a special team over the photographs from Gaya and Purnea, and the home department’s letter of 27 August led the commission to postpone the physical test.',
    },
    {
      q: 'How many posts and candidates were in Bihar Police SI 2025?',
      a: '1,799 posts — 850 unreserved, 180 EWS, 210 SC, 15 ST, 273 EBC, 222 BC, 42 BC women and 7 transgender, with 614 for women horizontally. 10,36,702 registered and 7,26,231 sat the preliminary; 35,857 went to the mains; 34,302 sat it; 10,759 were shortlisted for the physical test.',
    },
    {
      q: 'Are there other BPSSC sub-inspector recruitments open?',
      a: 'Not open at 11 September 2026. The Special Branch sub-inspector round of 150 posts closed on 9 August with no examination date; the prohibition sub-inspector round of 78 posts published its preliminary result on 12 August; the radio operation assistant sub-inspector round of 462 posts likewise; the forest range officer round of 16 posts closed on 16 August; and the enforcement sub-inspector round of 33 posts finished on 10 March 2026. No sergeant or assistant superintendent of jail posts have been advertised since 2020.',
    },
  ],
}

/* ── BSSC combined examinations ─────────────────────────────────
   The Bihar Staff Selection Commission's graduate-level and inter-level
   combined competitive examinations share one scheme: a 150-question
   preliminary of 600 marks at four a question with one off per wrong
   answer, five candidates per post, and a mains of a qualifying Hindi
   paper and a 600-mark general knowledge paper. The 4th graduate-level
   round of 1,883 posts closed in November 2025 and the 2nd inter-level
   round of 26,426 posts in February 2026; neither has an examination
   date, and the commission is tendering for a testing agency. */
const BSSC = {
  home: 'https://bssc.bihar.gov.in/',
  notices: 'https://bssc.bihar.gov.in/NoticeBoard.htm',
  portal: 'https://www.onlinebssc.com/',
  cglAdvt: 'https://bssc.bihar.gov.in/Advertisement/0525_ADVT.pdf',
  cglFee: 'https://bssc.bihar.gov.in/Advertisement/3277_notice.pdf',
  cglExtension: 'https://bssc.bihar.gov.in/Advertisement/4248_notice.pdf',
  cglPosts1: 'https://bssc.bihar.gov.in/Advertisement/3926_CGL_notice.pdf',
  cglPosts2: 'https://bssc.bihar.gov.in/Advertisement/05_25_4792.pdf',
  cgl3Advt: 'https://bssc.bihar.gov.in/Advertisement/01_22_2022.pdf',
  cgl3Cancel: 'https://bssc.bihar.gov.in/Advertisement/4982_2022.pdf',
  cgl3History: 'https://bssc.bihar.gov.in/Advertisement/1637_2023.pdf',
  cgl3PtResult: 'https://bssc.bihar.gov.in/Advertisement/3rd_cgl_pt_result.pdf',
  cgl3Mains: 'https://bssc.bihar.gov.in/Advertisement/0122_2300_2023_Mains_ADVT.pdf',
  cgl3Final: 'https://bssc.bihar.gov.in/Advertisement/5132.pdf',
  cgl3Cutoff: 'https://bssc.bihar.gov.in/Advertisement/cut_off.pdf',
  interAdvt: 'https://bssc.bihar.gov.in/Advertisement/02_23A_Advt.pdf',
  interNotice: 'https://bssc.bihar.gov.in/Advertisement/3924_02_23A_notice.pdf',
  interOriginal: 'https://bssc.bihar.gov.in/Advertisement/Adv_0223.pdf',
  interCorr1: 'https://bssc.bihar.gov.in/Advertisement/484_0223A_corrigendum.pdf',
  interCorr2: 'https://bssc.bihar.gov.in/Advertisement/766_13_02_2026.pdf',
  cbtTender: 'https://bssc.bihar.gov.in/Advertisement/05_CBT_TENDER.pdf',
  cbtTenderExt: 'https://bssc.bihar.gov.in/Advertisement/3718_CBT_DATE_EXTN.pdf',
  fieldAssistantPt: 'https://bssc.bihar.gov.in/Advertisement/03_25_pt_result.pdf',
  fieldAssistantPaper: 'https://bssc.bihar.gov.in/Advertisement/03_25_SET_A.pdf',
  fieldAssistantKey: 'https://bssc.bihar.gov.in/Advertisement/03_25_Model_Ans.pdf',
  attendantFinal: 'https://bssc.bihar.gov.in/Advertisement/3363_022022_final_result.pdf',
  attendantKey: 'https://bssc.bihar.gov.in/Advertisement/02_2022_main_set_A.pdf',
  stenoAdvt: 'https://bssc.bihar.gov.in/Advertisement/07_25_ADVT.pdf',
  attendant2025: 'https://bssc.bihar.gov.in/Advertisement/0625_ADVT.pdf',
}

const BR_CGL = {
  slug: 'bssc-graduate-level',
  path: '/government-exams/state/bihar/bssc-graduate-level/',
  name: 'BSSC Graduate Level',
  fullName: 'Bihar Staff Selection Commission — Combined Graduate Level Competitive Examination',
  authority: 'Bihar Staff Selection Commission (BSSC), Patna',
  official: 'bssc.bihar.gov.in',
  seoTitle: 'BSSC CGL 4th: 1,883 Posts, Exam Awaited, 600-Mark Pattern, Eligibility',
  metaDescription:
    'BSSC CGL — the 4th round of 1,883 posts closed 24 November 2025 with no exam date, the 150-question 600-mark prelims with one off per wrong answer, the mains.',
  lead: [
    'The Bihar Staff Selection Commission’s graduate-level combined examination fills the state’s clerical and supervisory graduate posts in one recruitment — the assistant branch officers of the secretariat above all, with planning assistants, statistical assistants, auditors of the finance and cooperative departments, data entry operators and industry extension officers. One preliminary of 150 questions at four marks each, with one mark off per wrong answer, admits five candidates per post; a mains of a qualifying Hindi paper and a 600-mark general knowledge paper ranks them; there is no interview.',
    'The 4th round is the current one and it is waiting. Advertised on 4 August 2025 for 1,481 posts, enlarged by corrigenda of September and November to 1,883 — 1,406 of them assistant branch officers — and priced at a flat ₹100 after the state cut every commission fee that August, it took applications, after three extensions, to 24 November 2025. No preliminary date, admit card or result has followed in the ten months since, and the commission’s notice board shows it tendering, in July and August 2026, for an agency to conduct computer-based tests. The 3rd round, by contrast, went from advertisement in April 2022 to a final result in December 2023, with one preliminary shift cancelled and re-held on the way.',
  ],
  quickFacts: [
    ['Conducted by', 'Bihar Staff Selection Commission'],
    ['4th round', 'Advt 05/25, 4 August 2025 — 1,883 posts after corrigenda; applications closed 24 November 2025'],
    ['Status', 'No preliminary date, admit card or result as at 11 September 2026; the commission is procuring a computer-based test agency'],
    ['Prelims', '150 questions, 600 marks, 2 hours 15 minutes; one mark off per wrong answer; five per post; one textbook per section allowed'],
    ['Mains', 'Hindi 100 questions, 400 marks, qualifying at 30 per cent; general knowledge 150 questions, 600 marks, the merit — on the 3rd round’s pattern'],
    ['Eligibility and fee', 'Graduation; 21 to 37, 40 or 42 on 1 August 2025; ₹100 for every candidate'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 4th round’s posts, as amended, are 1,406 assistant branch officers of the general administration department at level 7, 88 planning assistants and 5 junior statistical assistants at level 7, 60 industry extension officers at level 7 added on 27 September, one data entry operator of grade C at level 6, and 125 auditors of the audit directorate and 198 of the cooperative department at level 5 — 1,883 in all: 959 unreserved, 251 SC, 24 ST, 221 EBC, 216 BC, 31 BC women and 181 EWS, with 618 under the 35 per cent horizontal reservation for women and 37 for freedom fighters’ descendants. Graduation is the qualification, with subject conditions for the statistical, data entry and auditor posts, and reservation is for Bihar’s permanent residents; candidates from other states are unreserved.',
    },
    {
      type: 'p',
      text: 'The application window moved four times. The advertisement set 18 August to 17 September 2025; the start was held back on 18 August pending a fee revision; the corrigendum of 25 August, giving effect to the general administration department’s resolution of 21 August, cut the fee to ₹100 for every candidate from the advertised ₹540 and ₹135 and opened applications the same day to 26 September; extensions of 24 September and 14 October took the fee to 21 November and the form to 24 November, with an edit window from 31 October. The commission’s notice board carries nothing on the round since — no examination date, admit card, key or result — while its tender of 29 July 2026 for an end-to-end computer-based testing agency runs to a bid deadline of 25 September and a technical demonstration on 7 October.',
    },
    {
      type: 'list',
      title: 'What the scheme provides',
      items: [
        { text: 'A preliminary if applications exceed 40,000', note: 'in shifts if needed, with the results equalised across them; five candidates per post in each category go to the mains, ties by age and then name.' },
        { text: 'One paper of three parts', note: 'general studies; general science and mathematics at matric level; and mental ability — comprehension, logic, reasoning. 150 questions, four marks each, one off per wrong answer, two hours fifteen minutes, in Hindi and English with English prevailing. The advertisement does not fix the split between the parts.' },
        { text: 'A textbook on the desk', note: 'a candidate may bring one NCERT, Bihar board or ICSE textbook for each section.' },
        { text: 'Qualifying marks by category', note: '40 per cent unreserved, 36.5 BC, 34 EBC, 32 SC, ST, women and PwD, under the 2007 resolution.' },
      ],
    },
    {
      type: 'note',
      title: 'The 3rd round as the template',
      text: 'Advertised on 6 April 2022 for 2,187 posts, later 2,248, its preliminary ran on 23 and 24 December 2022 in three shifts; the first shift of 23 December was cancelled by notice of 26 December and re-held on 5 March 2023; the result of 30 May 2023 qualified 11,240; the mains advertisement of 6 June set a fee of ₹675 or ₹180 and a paper on 23 July 2023 at eighteen Patna centres; verification followed in September; and the final result of 23 December 2023 recommended 2,240, with eight disability-quota posts returned. The mains was two papers — Hindi of 100 questions and 400 marks qualifying at 30 per cent, and general knowledge of 150 questions and 600 marks in three parts of fifty — each with one mark off per wrong answer and two hours fifteen minutes. The published cut-offs are ranks: 355 for the unreserved on the 1,360 assistant branch officer posts.',
    },
  ],
  stages: [
    {
      name: 'Application',
      mode: 'Online through the commission’s portal; ₹100',
      detail:
        'The 4th round ran from 25 August to 24 November 2025 after three extensions, with a twelve-field edit window. Graduation and age as on 1 August 2025; reservation certificates for Bihar residents.',
    },
    {
      name: 'Preliminary examination',
      mode: '150 questions, 600 marks, 2 hours 15 minutes; five per post',
      detail:
        'General studies, general science and mathematics, and mental ability in one paper, at four marks a question with one off per wrong answer, equalised across shifts. One textbook per section allowed. Not counted beyond the shortlist.',
    },
    {
      name: 'Main examination',
      mode: 'Two papers; Hindi qualifying; general knowledge the merit',
      detail:
        'A separate mains advertisement with its own application, fee and post preferences. On the 3rd round’s pattern: Hindi 100 questions for 400 at 30 per cent, then general knowledge 150 questions for 600 in three parts of fifty, one off per wrong answer, marked only for those who qualify in Hindi.',
    },
    {
      name: 'Verification and final result',
      mode: 'Document scrutiny; merit and preference; no interview',
      detail:
        'Certificates uploaded at the mains application and scrutinised for the shortlisted; the final list on mains marks with post allotment by preference; post-wise cut-off ranks published.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No graduate-level window is open and no examination is scheduled. The 4th round closed on 24 November 2025 and the commission’s notice board, current to 27 August 2026, carries no entry on it since the corrigendum of 21 November 2025 that added 342 assistant branch officer posts; no 5th round has been advertised. The commission’s tender of 29 July 2026 for an agency to conduct computer-based tests had its bid deadline extended from 28 August to 25 September, with a technical demonstration on 7 October, and a separate tender for result processing ran through the summer. Its other rounds stand likewise: the office attendant round of 5,131 posts and the stenographer round of 531, both closed in November 2025, and the laboratory assistant, statistical officer and sports trainer rounds of 2025, all await examinations; the field assistant round examined on 10 August 2025 qualified 1,005 for a mains not yet dated; and the science and technology department’s office attendant round finished on 1 August 2026 with 238 selected after a mains on 26 May.`,
    },
    {
      type: 'table',
      caption: 'The 4th round, from the advertisement and corrigenda.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 05/25', '4 August 2025', '1,481 posts in six cadres'],
        ['Start held back', '18 August 2025', 'Pending revision of the fee'],
        ['Fee corrigendum', '25 August 2025', '₹100 for every candidate; applications from 25 August to 26 September'],
        ['Posts added', '27 September 2025', '60 industry extension officers; preference marks for contractual employees'],
        ['Extensions', '24 September and 14 October 2025', 'Fee to 21 November; form to 24 November; edits from 31 October'],
        ['Posts added', '21 November 2025', '342 assistant branch officers — 1,883 in all'],
        ['Preliminary', 'Not scheduled', 'No notice since 21 November 2025'],
      ],
    },
    {
      type: 'table',
      caption: 'Posts in the 4th round.',
      head: ['Post', 'Department', 'Level', 'Posts'],
      rows: [
        ['Assistant Branch Officer', 'General administration', '7', '1,406'],
        ['Auditor, cooperative societies', 'Cooperative', '5', '198'],
        ['Auditor', 'Audit directorate, finance', '5', '125'],
        ['Planning Assistant', 'Planning and development', '7', '88'],
        ['Industry Extension Officer', 'Industries', '7', '60'],
        ['Junior Statistical Assistant', 'Labour resources', '7', '5'],
        ['Data Entry Operator, grade C', 'Finance', '6', '1'],
        ['All posts', '—', '—', '1,883'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'BSSC — notice board', href: BSSC.notices },
        { label: 'BSSC — application portal', href: BSSC.portal },
        { label: '4th CGL — advertisement 05/25', href: BSSC.cglAdvt },
        { label: '4th CGL — corrigendum of 21 November 2025', href: BSSC.cglPosts2 },
        { label: 'Tender for a computer-based test agency, 29 July 2026', href: BSSC.cbtTender },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 4th round’s advertisement. Age on 1 August 2025.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Graduation from a recognised university for assistant branch officer and planning assistant; mathematics, economics, commerce or statistics for junior statistical assistant; graduation with PGDCA, BCA or BSc IT, or BTech in computer science or IT, for data entry operator; commerce, economics, statistics or mathematics for auditor; mathematics or commerce for cooperative auditor; commerce, economics, mathematics or statistics with 45 per cent for industry extension officer.'],
        ['Age', '21 minimum; 37 for unreserved men; 40 for unreserved women and for BC and EBC men and women; 42 for SC and ST; ten more for PwD. Candidates within the limit on 1 August 2022 also eligible under the 2006 letter.'],
        ['Government servants', 'Five attempts; ex-servicemen relaxations as the advertisement lists.'],
        ['Reservation', 'Caste, the 35 per cent women’s quota, EWS and disability for permanent residents of Bihar; other states’ candidates unreserved.'],
        ['Fee', '₹100 for every candidate, by the corrigendum of 25 August 2025; the advertised ₹540 and ₹135 no longer apply.'],
        ['Qualifying marks', '40 per cent unreserved; 36.5 BC; 34 EBC; 32 SC, ST, women and PwD.'],
      ],
    },
    {
      type: 'p',
      text: 'Contractual employees of the state get a preference of five marks a year to a maximum of 25 under the corrigendum of 27 September 2025. The 3rd round’s mains charged ₹675, or ₹180 for SC, ST, women and PwD candidates of Bihar; whether the 4th round’s mains will carry a fee beyond the flat ₹100 is not stated.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Preliminary examination, from the 4th round’s advertisement.',
      head: ['Feature', 'Rule'],
      rows: [
        ['When held', 'If applications exceed 40,000; in shifts if needed, with results equalised'],
        ['Paper', 'General knowledge in three parts — general studies; general science and mathematics; mental ability'],
        ['Questions and marks', '150 questions; four marks each — 600'],
        ['Negative marking', '“For every wrong answer one mark will be deducted”'],
        ['Time', '2 hours 15 minutes'],
        ['Medium', 'Hindi and English; the English version prevails'],
        ['Books', 'One NCERT, Bihar board or ICSE textbook per section may be brought'],
        ['Shortlist', 'Five per post in each category; ties to the older candidate, then alphabetical order'],
      ],
    },
    {
      type: 'table',
      caption: 'Main examination on the 3rd round’s pattern, from its mains advertisement of June 2023; the 4th round’s mains advertisement is to follow.',
      head: ['Paper', 'Questions', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Paper 1 — Hindi', '100', '400', '2 hours 15 minutes', 'Qualifying at 30 per cent; not counted; one off per wrong answer'],
        ['Paper 2 — general knowledge', '150 — general studies 50, general science and mathematics 50, mental ability 50', '600', '2 hours 15 minutes', 'The merit; one off per wrong answer; Hindi and English'],
      ],
    },
    {
      type: 'note',
      title: 'What the syllabus covers',
      text: 'General studies: current affairs — scientific progress, awards, Indian languages, books, script, capitals, currency, sports and events — and India and its neighbours: history, culture, geography, economy, the freedom movement, agriculture and natural resources, the Constitution and polity, panchayati raj, community development, the five-year plans and Bihar’s part in the national movement. General science and mathematics at matric level: physics, chemistry, biology and geography; number systems, whole numbers, decimals and fractions, fundamental arithmetic, percentage, ratio and proportion, averages, interest, profit and loss. Mental ability, verbal and non-verbal: analogy, similarity and difference, space visualisation, problem-solving, visual memory, discrimination, relationships, arithmetical reasoning, number series and coding.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s notice board and the PDFs linked from it: the 4th round’s advertisement of 4 August 2025 and its notices and corrigenda of 18 and 25 August, 24 and 27 September, 14 and 31 October and 21 November 2025; the 3rd round’s advertisement, cancellation and re-examination notices, preliminary result, mains advertisement, final result and cut-off list; the computer-based test tender and its extension; and the notices of the commission’s other rounds. The notices are scanned Hindi documents read page by page. The application portal was unreachable at the date checked and its state is from an archived copy of February 2026. Coaching-site claims of a July or August 2026 preliminary have no counterpart on the notice board.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: '4th CGL — advertisement 05/25, 4 August 2025', href: BSSC.cglAdvt },
        { label: '4th CGL — fee corrigendum, 25 August 2025', href: BSSC.cglFee },
        { label: '4th CGL — posts added, 27 September 2025', href: BSSC.cglPosts1 },
        { label: '4th CGL — final extension, 14 October 2025', href: BSSC.cglExtension },
        { label: '4th CGL — posts added, 21 November 2025', href: BSSC.cglPosts2 },
        { label: '3rd CGL — advertisement 01/22', href: BSSC.cgl3Advt },
        { label: '3rd CGL — cancellation of the first shift, 26 December 2022', href: BSSC.cgl3Cancel },
        { label: '3rd CGL — notice of 10 April 2023 reciting the history', href: BSSC.cgl3History },
        { label: '3rd CGL — preliminary result, 30 May 2023', href: BSSC.cgl3PtResult },
        { label: '3rd CGL — mains advertisement and scheme, 6 June 2023', href: BSSC.cgl3Mains },
        { label: '3rd CGL — final result, 23 December 2023', href: BSSC.cgl3Final },
        { label: '3rd CGL — post-wise cut-off ranks', href: BSSC.cgl3Cutoff },
        { label: 'Computer-based test tender — deadline extension', href: BSSC.cbtTenderExt },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'BSSC CGL syllabus — general studies, general science and mathematics at matric level, and mental ability, as the 4th round’s advertisement sets them.',
      lead: [
        'The syllabus is a page of the advertisement; the paper is general knowledge at matric level, with a textbook allowed.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'General studies',
              'Current affairs — science, awards, languages, books, capitals, currency, sports, events; India and its neighbours — history, culture, geography, economy, the freedom movement with Bihar’s part, agriculture and resources, the Constitution, polity, panchayati raj, community development and planning.',
            ],
            [
              'General science and mathematics',
              'Physics, chemistry, biology and geography at matric level; number systems, decimals and fractions, arithmetic, percentage, ratio, averages, interest, profit and loss.',
            ],
            [
              'Mental ability',
              'Verbal and non-verbal reasoning — analogy, classification, space visualisation, problem-solving, visual memory, relationships, arithmetical reasoning, series, coding and decoding.',
            ],
            [
              'Mains Hindi',
              'Grammar, vocabulary and comprehension; 100 questions qualifying at 30 per cent.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: '4th CGL advertisement — pages 4 and 5', href: BSSC.cglAdvt },
            { label: '3rd CGL mains advertisement — Annexure B', href: BSSC.cgl3Mains },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'BSSC CGL exam pattern — 150 questions at four marks, one off per wrong answer, five per post, a qualifying Hindi paper and a 600-mark general knowledge mains.',
      lead: [
        'Six hundred marks to get in, six hundred to rank, and a Hindi gate between.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims 150 × 4', '600 marks in 2 hours 15 minutes; one off per wrong answer; equalised across shifts; one textbook per section.'],
            ['Five per post', 'Category-wise; ties by age then name.'],
            ['Mains Hindi 400', 'Qualifying at 30 per cent; not counted.'],
            ['Mains general knowledge 600', 'Three parts of fifty; the merit.'],
            ['Category minimums', '40, 36.5, 34 and 32 per cent.'],
            ['Interview', 'None.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'BSSC CGL previous papers — the 3rd round’s papers from candidates, the commission’s published papers and keys for other rounds, and the cut-off ranks.',
      lead: [
        'The commission publishes papers and model keys for some rounds — the field assistant preliminary of 2025 and the office attendant mains of 2026 among them — but not for the 3rd CGL.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: '3rd CGL cut-off ranks', note: 'post-wise and category-wise, published with the final result of 23 December 2023 — 355 for the unreserved on the assistant branch officer posts.' },
            { text: 'Field assistant 2025', note: 'the preliminary paper of 10 August 2025 and its model answers, on the same scheme of 150 questions.' },
            { text: 'Office attendant 2026', note: 'the mains papers of 26 May 2026 in four sets with keys.' },
            { text: '3rd CGL papers', note: 'the preliminaries of December 2022 and March 2023 and the mains of July 2023, from candidates’ copies.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: '3rd CGL — cut-off ranks', href: BSSC.cgl3Cutoff },
            { label: 'Field assistant 2025 — preliminary paper, set A', href: BSSC.fieldAssistantPaper },
            { label: 'Field assistant 2025 — model answers', href: BSSC.fieldAssistantKey },
            { label: 'Office attendant 2026 — mains paper, set A', href: BSSC.attendantKey },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'BSSC CGL mock tests — 150-question sittings in 2 hours 15 minutes at four marks with one off, with a textbook to hand, and the Hindi paper to 30 per cent.',
      lead: [
        'Four marks for a right answer and one off for a wrong one: a guess at one in four breaks even, and a blank costs nothing.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Prelims — 150 in 135 minutes', text: 'Fifty a part in practice, at matric level, with one textbook per section on the desk as the rules allow. Five per post go through.' },
            { title: 'Mains Paper 2 — 150 in 135 minutes', text: 'The same three parts at the same weights; the merit.' },
            { title: 'Hindi — 100 to 120 of 400', text: 'Qualifying; Paper 2 is marked only for those who clear it.' },
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
        'BSSC CGL preparation — waiting for the 4th round’s date, the textbook rule, the mains application to come, and the commission’s notice board as the only source.',
      lead: [
        'The round is closed and undated; the preparation is for a matric-level paper that may come at short notice.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From application to appointment',
          items: [
            { title: 'Watch the notice board, not the coaching sites', text: 'Every date, admit card and result is a PDF on it; the July and August 2026 dates in circulation never appeared there.' },
            { title: 'Choose the textbook for each section', text: 'One NCERT, Bihar board or ICSE book per section is allowed; knowing where things are in it is worth marks.' },
            { title: 'Prepare Paper 2 as the examination', text: 'The preliminary only shortlists; the mains general knowledge paper on the same syllabus is the merit.' },
            { title: 'Expect a separate mains application', text: 'With post preferences and certificate uploads; the 3rd round gave three weeks.' },
            { title: 'Keep the certificates within date', text: 'Caste, residence, EWS and disability certificates for the reservation claimed, scrutinised before the final list.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'BSSC CGL study material — the NCERT and Bihar board matric textbooks the rules allow on the desk, a Bihar general knowledge book, and a reasoning workbook.',
      lead: [
        'The paper is at matric level and a textbook is allowed; the material is the textbook.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By part.',
          head: ['Part', 'What to read', 'Note'],
          rows: [
            ['General studies', 'NCERT or Bihar board history, geography, civics and economics for classes 9 and 10; a Bihar general knowledge book; a year of current affairs', 'Bihar’s part in the national movement is named.'],
            ['General science and mathematics', 'NCERT or Bihar board science and mathematics for classes 9 and 10', 'The textbook may be brought.'],
            ['Mental ability', 'A verbal and non-verbal reasoning workbook', 'No textbook helps here.'],
            ['Hindi', 'A standard Hindi grammar', 'Mains Paper 1, qualifying.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'BSSC Inter Level', to: '/government-exams/state/bihar/bssc-inter-level/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the BSSC CGL 4th prelims?',
      a: 'No date has been fixed. The round closed on 24 November 2025 and the commission’s notice board, current to 27 August 2026, carries nothing on it since the corrigendum of 21 November 2025. The commission tendered on 29 July 2026 for an agency to conduct computer-based tests, with bids to 25 September and a demonstration on 7 October. Dates in July and August 2026 reported by coaching sites did not appear on the notice board.',
    },
    {
      q: 'How many posts are there in BSSC CGL 4th?',
      a: '1,883 after two corrigenda — 1,406 assistant branch officers of the general administration department, 198 cooperative auditors, 125 auditors of the audit directorate, 88 planning assistants, 60 industry extension officers, 5 junior statistical assistants and one data entry operator — of which 959 are unreserved, 251 SC, 24 ST, 221 EBC, 216 BC, 31 BC women and 181 EWS, with 618 for women horizontally.',
    },
    {
      q: 'What is the BSSC CGL exam pattern?',
      a: 'A preliminary of 150 questions in one paper — general studies, general science and mathematics at matric level, and mental ability — at four marks each for 600, with one mark deducted per wrong answer, in 2 hours 15 minutes, held in shifts and equalised, with five candidates per post through; then a mains of two papers on the 3rd round’s pattern — Hindi, 100 questions for 400, qualifying at 30 per cent, and general knowledge, 150 questions in three parts of fifty for 600, the merit — each with one off per wrong answer. No interview.',
    },
    {
      q: 'Is there negative marking in BSSC CGL?',
      a: 'Yes. The advertisement states that four marks are given for every correct answer and one mark deducted for every wrong answer, in the preliminary; the 3rd round’s mains applied the same rule to both papers.',
    },
    {
      q: 'Can I take a book into the BSSC CGL exam?',
      a: 'Yes. The advertisement allows a candidate to bring one textbook for each section — an NCERT, Bihar board or ICSE textbook for general studies, one for mathematics and one for science.',
    },
    {
      q: 'What is the BSSC CGL fee and age limit?',
      a: '₹100 for every candidate, by the corrigendum of 25 August 2025 that gave effect to the state’s resolution cutting commission fees; the advertised ₹540 and ₹135 no longer apply. Age 21 to 37 for unreserved men, 40 for unreserved women and BC and EBC candidates, and 42 for SC and ST, on 1 August 2025, with ten more years for PwD.',
    },
    {
      q: 'What happened in the BSSC CGL 3rd?',
      a: 'Advertised on 6 April 2022 for 2,187 posts, later 2,248. The preliminary of 23 and 24 December 2022 had its first shift cancelled by notice of 26 December and re-held on 5 March 2023; the result of 30 May 2023 qualified 11,240; the mains was held on 23 July 2023 at eighteen Patna centres; and the final result of 23 December 2023 recommended 2,240 candidates, with the unreserved cut-off at rank 355 on the assistant branch officer posts.',
    },
    {
      q: 'What other BSSC recruitments are pending?',
      a: 'The office attendant round of 5,131 posts and the stenographer round of 531 posts, both closed in November 2025; the laboratory assistant, statistical officer and sports trainer rounds of 2025; and the field assistant mains for the 1,005 who qualified on 10 August 2025 — none with an examination date. The 2nd inter-level round of 26,426 posts, closed in February 2026, is likewise undated.',
    },
  ],
}

const BR_INTER = {
  slug: 'bssc-inter-level',
  path: '/government-exams/state/bihar/bssc-inter-level/',
  name: 'BSSC Inter Level',
  fullName: 'Bihar Staff Selection Commission — Combined Inter Level Competitive Examination',
  authority: 'Bihar Staff Selection Commission (BSSC), Patna',
  official: 'bssc.bihar.gov.in',
  seoTitle: 'BSSC Inter Level 2nd: 26,426 Posts, Exam Awaited, 600-Mark Pattern, Fee ₹100',
  metaDescription:
    'BSSC Inter Level — the 2nd round grown to 26,426 posts and closed 16 February 2026 with no exam date, the 600-mark prelims, the ₹100 fee, eligibility and posts.',
  lead: [
    'The Bihar Staff Selection Commission’s inter-level combined examination fills the state’s class 12 clerical cadre — lower division clerks in the departments and every district collectorate, revenue karmcharis, panchayat secretaries, typist-clerks, filaria inspectors and the rest — in one recruitment. The scheme is the commission’s standard: a preliminary of 150 questions at four marks each with one off per wrong answer, five candidates per post to a mains, a separate mains advertisement with post preferences, and certificate scrutiny. Most posts ask for computer typing as a qualification; none has an interview.',
    'The 2nd round has grown for three years and has not been examined. Advertised on 19 September 2023 for 11,098 posts, it was re-advertised on 27 September 2025 with 10,976 more from 65 departments — 23,175 — and enlarged by corrigenda of December, January and February to 26,426, with a flat fee of ₹100 and applications, after four extensions, to 16 February 2026. Earlier applicants did not need to apply again. The commission’s notice board shows nothing on the round since 13 February, while it tenders for an agency to conduct computer-based tests; no 3rd round has been advertised.',
  ],
  quickFacts: [
    ['Conducted by', 'Bihar Staff Selection Commission'],
    ['2nd round', 'Advt 02/23 of 19 September 2023, re-advertised as 02/23(A) on 27 September 2025 — 26,426 posts after corrigenda; applications closed 16 February 2026'],
    ['Status', 'No preliminary date, admit card or result as at 11 September 2026; the commission is procuring a computer-based test agency'],
    ['Prelims', '150 questions, 600 marks, 2 hours 15 minutes; one mark off per wrong answer; five per post; one textbook per section allowed'],
    ['Posts', 'Lower division clerks across departments and districts; revenue karmchari 1,643; panchayat secretary 1,746; typist-clerks, filaria inspectors and others'],
    ['Eligibility and fee', 'Intermediate with computer typing where the post requires; 18 to 37, 40 or 42 on 1 August 2025; ₹100 for every candidate'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The re-advertisement of 27 September 2025 lists 94 post lines. Lower division clerks make up most of them — for departments and for each district collectorate — alongside 1,643 revenue karmcharis for the revenue and land reforms department, 1,746 panchayat secretaries and 202 panchayati raj clerks, bench clerks for the consumer commission, junior field investigators, filaria inspectors for the health department, assistant instructors in typing and typist-clerks. The corrigendum of 13 February 2026 sets the total at 26,426 — 11,636 unreserved, 3,704 SC, 247 ST, 4,514 EBC, 2,823 BC, 882 BC women and 2,620 EWS — with 8,446 for women horizontally, 539 for freedom fighters’ descendants and 1,106 across the disability categories.',
    },
    {
      type: 'p',
      text: 'The scheme is the commission’s standard and the same as the graduate-level examination’s. If applications exceed 40,000 — they do — a preliminary is held, in shifts if needed with the results equalised, of one general knowledge paper in three parts: general studies; general science and mathematics at matric level; and mental ability. It has 150 questions at four marks, one mark off per wrong answer, two hours fifteen minutes, in Hindi and English, and a candidate may bring one NCERT, Bihar board or ICSE textbook per section. Five candidates per post in each category go to a mains for which a separate advertisement, with post preferences, is promised; certificates are uploaded then and scrutinised before the final list. Qualifying marks are 40 per cent for the unreserved, 36.5 BC, 34 EBC and 32 for SC, ST, women and PwD.',
    },
    {
      type: 'list',
      title: 'How the round grew',
      items: [
        { text: '19 September 2023 — 11,098 posts', note: 'Advt 02/23; applications 27 September to 9 November 2023 at ₹540 and ₹135; windows through 2024 for 27,935 applicants who had paid but not submitted; a category change for the Tanti-Tatwa community in January 2025 on the Supreme Court’s ruling.' },
        { text: '27 September 2025 — 23,175', note: 'Advt 02/23(A): no preliminary had been held; 10,976 posts from 65 departments added; earlier applicants compete for all posts without reapplying; fee ₹100 under the state’s resolution of 21 August 2025; applications 15 October to 27 November 2025.' },
        { text: 'December to February — 26,426', note: 'corrigenda of 15 December 2025 to 24,492, 29 January 2026 to 25,311 and 13 February to 26,426; extensions of 25 November, 15 December, 13 January and 29 January, the last taking the fee to 13 February and the form to 16 February 2026.' },
        { text: 'Since 13 February 2026 — nothing', note: 'no date, admit card, key or result on the notice board; the 1st inter-level round of 2014 is the only precedent, with a mains, typing and shorthand tests and a physical test for some posts running to 2022.' },
      ],
    },
    {
      type: 'note',
      title: 'Typing and the mains',
      text: 'Most lower division clerk lines require knowledge of computer operation and computer typing; the typist-clerk lines require Hindi and English typing; the panchayat secretary requires Hindi word processing on computer; the revenue karmchari requires no technical qualification. No typing speed in words a minute is stated in either advertisement — the stenographer round of 2025 sets 80 and 100 words a minute in shorthand for its labour department lines, but the inter-level round sets none. The mains scheme — on the graduate-level pattern, a qualifying Hindi paper and a 600-mark general knowledge paper — and any skill tests will be in the mains advertisement, which has not been issued.',
    },
  ],
  stages: [
    {
      name: 'Application',
      mode: 'Online through the commission’s portal; ₹100',
      detail:
        'The re-advertised round ran from 15 October 2025 to 16 February 2026 after four extensions; applicants of 2023 did not reapply. Intermediate and the post’s computer or typing qualification; age on 1 August 2025.',
    },
    {
      name: 'Preliminary examination',
      mode: '150 questions, 600 marks, 2 hours 15 minutes; five per post',
      detail:
        'General studies, general science and mathematics, and mental ability in one paper at four marks a question with one off per wrong answer, equalised across shifts, with one textbook per section allowed. Not yet scheduled.',
    },
    {
      name: 'Main examination and skill tests',
      mode: 'A separate advertisement with post preferences',
      detail:
        'On the commission’s pattern, a Hindi paper qualifying at 30 per cent and a general knowledge paper of 600 as the merit; typing or word-processing tests for the posts that require them, as the mains advertisement will set.',
    },
    {
      name: 'Scrutiny and final result',
      mode: 'Certificates uploaded at the mains application; no interview',
      detail:
        'Document scrutiny for the shortlisted, the final list on mains marks, and allotment among 94 post lines by preference and reservation.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No inter-level window is open and no examination is scheduled. The 2nd round closed on 16 February 2026 for the form and 13 February for the fee under the corrigendum of 29 January; the corrigendum of 13 February set the posts at 26,426; and the commission’s notice board, current to 27 August 2026, carries nothing on the round since. No 3rd round has been advertised. The commission’s tender of 29 July 2026 for an end-to-end computer-based testing agency had its bid deadline extended to 25 September with a demonstration on 7 October. A coaching-site expectation of a preliminary in August 2026 and a mains in September did not materialise, as the same site conceded the commission had published no calendar.`,
    },
    {
      type: 'table',
      caption: 'The 2nd round, from the advertisements and corrigenda.',
      head: ['Event', 'Date', 'Detail'],
      rows: [
        ['Advertisement 02/23', '19 September 2023', '11,098 posts in 22 lines; applications 27 September to 9 November 2023; ₹540, ₹135'],
        ['Windows for incomplete applicants', '2024', '27,935 who had paid but not submitted, to 11 June 2024'],
        ['Category correction', '2 January 2025', 'Tanti-Tatwa from SC to MBC on the Supreme Court’s ruling'],
        ['Re-advertisement 02/23(A)', '27 September 2025', '10,976 posts added — 23,175 in 94 lines; ₹100; earlier applicants need not reapply; applications 15 October to 27 November 2025'],
        ['Corrigenda and extensions', '25 November and 15 December 2025; 13 and 29 January 2026', '24,492 then 25,311 posts; fee to 13 February and form to 16 February 2026'],
        ['Corrigendum', '13 February 2026', '26,426 posts; 8,446 for women'],
        ['Preliminary', 'Not scheduled', 'No notice since 13 February 2026'],
      ],
    },
    {
      type: 'table',
      caption: 'Posts in the 2nd round, from the corrigendum of 13 February 2026.',
      head: ['Category', 'Posts'],
      rows: [
        ['Unreserved', '11,636'],
        ['SC', '3,704'],
        ['ST', '247'],
        ['EBC', '4,514'],
        ['BC', '2,823'],
        ['BC women', '882'],
        ['EWS', '2,620'],
        ['Total', '26,426'],
        ['Horizontal — women', '8,446'],
        ['Horizontal — freedom fighters’ descendants', '539'],
        ['Horizontal — disability, four categories', '1,106'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'BSSC — notice board', href: BSSC.notices },
        { label: 'BSSC — application portal', href: BSSC.portal },
        { label: '2nd Inter Level — re-advertisement 02/23(A), 27 September 2025', href: BSSC.interAdvt },
        { label: '2nd Inter Level — corrigendum of 13 February 2026', href: BSSC.interCorr2 },
        { label: 'Tender for a computer-based test agency, 29 July 2026', href: BSSC.cbtTender },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the re-advertisement of 27 September 2025. Age on 1 August 2025.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'Intermediate or equivalent from a recognised board, plus the post’s technical qualification — knowledge of computer operation and typing for most lower division clerk lines; Hindi and English typing for typist-clerks; Hindi word processing on computer for panchayat secretary; none for revenue karmchari.'],
        ['Age', '18 minimum; 37 for unreserved men; 40 for unreserved women and for BC and EBC men and women; 42 for SC and ST; ten more for PwD. Candidates within the limit on 1 August 2015 also eligible.'],
        ['Reservation', 'For permanent residents of Bihar with certificates; 35 per cent horizontally for women; freedom fighters’ descendants; disability in four categories. Other states’ candidates unreserved.'],
        ['Fee', '₹100 for every candidate under the resolution of 21 August 2025; the original ₹540 and ₹135 no longer apply.'],
        ['Qualifying marks', '40 per cent unreserved; 36.5 BC; 34 EBC; 32 SC, ST, women and PwD.'],
        ['Certificates', 'Uploaded at the mains application and scrutinised before the final list.'],
      ],
    },
    {
      type: 'p',
      text: 'Typing speeds are not stated in either advertisement; the mains advertisement will carry the skill-test rules for the posts that require them. The original 2023 window charged ₹540 for unreserved, BC and EBC men and all candidates from outside the state and ₹135 for Bihar SC, ST, women and PwD candidates.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'Preliminary examination, from the re-advertisement — identical in wording to the graduate-level scheme.',
      head: ['Feature', 'Rule'],
      rows: [
        ['When held', 'If applications exceed 40,000; in shifts if needed, with results equalised'],
        ['Paper', 'General knowledge in three parts — general studies; general science and mathematics at matric level; mental ability'],
        ['Questions and marks', '150 questions; four marks each — 600'],
        ['Negative marking', '“For every wrong answer one mark will be deducted”'],
        ['Time', '2 hours 15 minutes'],
        ['Medium', 'Hindi and English'],
        ['Books', 'One NCERT, Bihar board or ICSE textbook per section may be brought'],
        ['Shortlist', 'Five per post in each category'],
      ],
    },
    {
      type: 'note',
      title: 'The mains is not yet defined for this round',
      text: 'The re-advertisement says only that a separate advertisement will be published for the mains and that post preferences will be taken. The commission’s graduate-level mains of 2023 — Hindi of 100 questions and 400 marks qualifying at 30 per cent, and general knowledge of 150 questions and 600 marks in three parts, one off per wrong answer — is the pattern its combined examinations follow; the 1st inter-level round of 2014 added typing and shorthand tests and, for some posts, a physical test. What the 2nd round’s mains will require is for its advertisement to say.',
    },
    {
      type: 'list',
      title: 'What the syllabus covers',
      items: [
        { text: 'General studies', note: 'current affairs — science, awards, languages, books, capitals, currency, sports and events — and India and its neighbours: history, culture, geography, economy, the freedom movement with Bihar’s part, agriculture and resources, the Constitution, polity, panchayati raj, community development and planning.' },
        { text: 'General science and mathematics', note: 'physics, chemistry, biology and geography at matric level; number systems, decimals and fractions, arithmetic, percentage, ratio, averages, interest, profit and loss.' },
        { text: 'Mental ability', note: 'verbal and non-verbal reasoning — analogy, classification, space visualisation, problem-solving, visual memory, relationships, arithmetical reasoning, series, coding and decoding.' },
      ],
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s notice board and the PDFs linked from it: the original advertisement of 19 September 2023, the re-advertisement of 27 September 2025 and its publication notice, the corrigenda of 15 December 2025 and 29 January and 13 February 2026, the extension notices, the 2024 windows for incomplete applicants, the category notice of January 2025, and the computer-based test tender and its extension. The notices are scanned Hindi documents read page by page. The 12,199-post figure sometimes quoted for the round is the difference between 23,175 and the 10,976 added and is not printed in a document read. The application portal was unreachable at the date checked.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: '2nd Inter Level — original advertisement 02/23, 19 September 2023', href: BSSC.interOriginal },
        { label: '2nd Inter Level — re-advertisement 02/23(A), 27 September 2025', href: BSSC.interAdvt },
        { label: '2nd Inter Level — publication notice, 27 September 2025', href: BSSC.interNotice },
        { label: '2nd Inter Level — corrigendum of 29 January 2026', href: BSSC.interCorr1 },
        { label: '2nd Inter Level — corrigendum of 13 February 2026', href: BSSC.interCorr2 },
        { label: 'Computer-based test tender, 29 July 2026', href: BSSC.cbtTender },
        { label: 'Computer-based test tender — deadline extension', href: BSSC.cbtTenderExt },
        { label: 'Office attendant 06/25 — advertisement', href: BSSC.attendant2025 },
        { label: 'Stenographer 07/25 — advertisement', href: BSSC.stenoAdvt },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'BSSC Inter Level syllabus — general studies, general science and mathematics at matric level, and mental ability, as the re-advertisement sets them.',
      lead: [
        'The syllabus is a page of the advertisement and the same as the graduate-level paper’s: general knowledge at matric level.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'General studies',
              'Current affairs and India and its neighbours — history, culture, geography, economy, the freedom movement with Bihar’s part, agriculture, the Constitution, polity, panchayati raj, community development and planning.',
            ],
            [
              'General science and mathematics',
              'Physics, chemistry, biology and geography at matric level; arithmetic from number systems to profit and loss.',
            ],
            [
              'Mental ability',
              'Verbal and non-verbal reasoning — analogy, classification, visualisation, problem-solving, memory, relationships, arithmetical reasoning, series, coding.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus document',
          items: [
            { label: 'Re-advertisement 02/23(A) — pages 14 and 15', href: BSSC.interAdvt },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'BSSC Inter Level exam pattern — 150 questions at four marks with one off per wrong answer, five per post, a textbook allowed, and a mains to be advertised.',
      lead: [
        'Six hundred marks in one paper, with a book on the desk and a mark off for every wrong answer.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Prelims 150 × 4', '600 marks in 2 hours 15 minutes; one off per wrong answer; equalised across shifts.'],
            ['Textbook', 'One per section — NCERT, Bihar board or ICSE.'],
            ['Five per post', 'Category-wise, to the mains.'],
            ['Mains', 'A separate advertisement with post preferences; on the commission’s pattern, Hindi qualifying and general knowledge the merit.'],
            ['Category minimums', '40, 36.5, 34 and 32 per cent.'],
            ['Interview', 'None.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'BSSC Inter Level previous papers — the 1st round of 2014, the commission’s published papers on the same scheme, and the graduate-level papers as models.',
      lead: [
        'The 2nd round has produced no paper; the commission’s other rounds on the same 150-question scheme are the models.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Field assistant 2025', note: 'the preliminary of 10 August 2025 and its model answers — 150 questions on the same scheme.' },
            { text: 'Office attendant 2026', note: 'the mains of 26 May 2026 in four sets with keys.' },
            { text: '3rd CGL', note: 'the preliminaries of 2022 and 2023 and the mains of July 2023, from candidates’ copies; the same syllabus.' },
            { text: '1st Inter Level', note: 'the 2014 round’s papers, from candidates.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'Field assistant 2025 — preliminary paper', href: BSSC.fieldAssistantPaper },
            { label: 'Field assistant 2025 — model answers', href: BSSC.fieldAssistantKey },
            { label: 'Office attendant 2026 — mains paper, set A', href: BSSC.attendantKey },
            { label: 'BSSC Graduate Level', to: '/government-exams/state/bihar/bssc-graduate-level/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'BSSC Inter Level mock tests — 150-question sittings in 2 hours 15 minutes at four marks with one off, with a textbook to hand.',
      lead: [
        'Four for a right answer, one off for a wrong one: a blank costs nothing.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Prelims — 150 in 135 minutes', text: 'General studies, science and mathematics, reasoning, at matric level, with one textbook per section on the desk. Five per post go through — for 26,426 posts, a wide gate.' },
            { title: 'Practise finding, not only knowing', text: 'The textbook rule rewards a candidate who can locate a fact in the Bihar board book under time.' },
            { title: 'Typing', text: 'For the clerk and typist lines, computer typing in Hindi and English; the speed will be set by the mains advertisement.' },
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
        'BSSC Inter Level preparation — waiting for the 2nd round’s date, the typing qualification, the mains advertisement to come, and the notice board as the source.',
      lead: [
        'A round of 26,426 posts with no date; the preparation is a matric-level paper and a typing skill.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From application to appointment',
          items: [
            { title: 'Watch the notice board', text: 'Every date, admit card and result is a PDF on it; the portal shows the same when it is up.' },
            { title: 'Learn computer typing now', text: 'Most lines require it as a qualification, and the mains advertisement may test it; the speed is not yet stated.' },
            { title: 'Choose the textbook for each section', text: 'One NCERT, Bihar board or ICSE book per section is allowed.' },
            { title: 'Rank the 94 lines', text: 'Post preferences are taken at the mains application; the lines differ by department, district and technical qualification.' },
            { title: 'Keep the certificates within date', text: 'Caste, residence, EWS and disability certificates for the reservation claimed, uploaded at the mains application.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'BSSC Inter Level study material — the NCERT and Bihar board matric textbooks allowed on the desk, a Bihar general knowledge book, reasoning and typing.',
      lead: [
        'The paper is at matric level and a textbook is allowed; the material is the textbook and a keyboard.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By part.',
          head: ['Part', 'What to read', 'Note'],
          rows: [
            ['General studies', 'NCERT or Bihar board history, geography, civics and economics for classes 9 and 10; a Bihar general knowledge book; a year of current affairs', 'Bihar weighted.'],
            ['General science and mathematics', 'NCERT or Bihar board science and mathematics for classes 9 and 10', 'The textbook may be brought.'],
            ['Mental ability', 'A verbal and non-verbal reasoning workbook', 'Fifty questions in practice.'],
            ['Typing', 'Hindi and English typing practice on computer', 'A qualification for most lines.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'BSSC Graduate Level', to: '/government-exams/state/bihar/bssc-graduate-level/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the BSSC Inter Level exam?',
      a: 'No date has been fixed. The 2nd round closed on 16 February 2026 after four extensions, and the commission’s notice board, current to 27 August 2026, carries nothing on it since the corrigendum of 13 February. The commission tendered on 29 July 2026 for an agency to conduct computer-based tests, with bids to 25 September. An August preliminary expected by coaching sites did not take place.',
    },
    {
      q: 'How many posts are there in BSSC Inter Level 2nd?',
      a: '26,426 by the corrigendum of 13 February 2026 — 11,636 unreserved, 3,704 SC, 247 ST, 4,514 EBC, 2,823 BC, 882 BC women and 2,620 EWS — across 94 post lines: lower division clerks for departments and district collectorates, 1,643 revenue karmcharis, 1,746 panchayat secretaries, typist-clerks, filaria inspectors and others. The round began in September 2023 with 11,098 posts and was re-advertised in September 2025 with 23,175.',
    },
    {
      q: 'What is the BSSC Inter Level exam pattern?',
      a: 'A preliminary of 150 questions in one paper — general studies, general science and mathematics at matric level, and mental ability — at four marks each for 600, with one mark deducted per wrong answer, in 2 hours 15 minutes, in shifts equalised across them, with one textbook per section allowed and five candidates per post through. The mains is to be advertised separately with post preferences; the commission’s pattern is a Hindi paper qualifying at 30 per cent and a 600-mark general knowledge paper as the merit. No interview.',
    },
    {
      q: 'What is the eligibility for BSSC Inter Level?',
      a: 'Intermediate or equivalent, plus the post’s technical qualification — knowledge of computer operation and typing for most clerk lines, Hindi and English typing for typist-clerks, Hindi word processing for panchayat secretary, none for revenue karmchari. Age 18 to 37 for unreserved men, 40 for unreserved women and BC and EBC candidates, 42 for SC and ST, on 1 August 2025, with ten more years for PwD. Reservation is for Bihar’s permanent residents.',
    },
    {
      q: 'What is the BSSC Inter Level fee?',
      a: '₹100 for every candidate under the state’s resolution of 21 August 2025, applied by the re-advertisement of 27 September 2025. The original 2023 window charged ₹540 for unreserved, BC and EBC men and all candidates from outside Bihar and ₹135 for Bihar SC, ST, women and PwD candidates.',
    },
    {
      q: 'Is there negative marking in BSSC Inter Level?',
      a: 'Yes. The advertisement states that four marks are given for every correct answer and one mark deducted for every wrong answer in the preliminary. A blank carries no penalty.',
    },
    {
      q: 'Is there a typing test for BSSC Inter Level?',
      a: 'Computer typing is a qualification for most lower division clerk lines, and Hindi and English typing for the typist-clerk lines, but no speed is stated in the advertisements and no test is scheduled. The mains advertisement, not yet issued, will set any skill test; the 1st inter-level round of 2014 held typing and shorthand tests after its mains.',
    },
    {
      q: 'Do 2023 applicants need to apply again for BSSC Inter Level?',
      a: 'No. The re-advertisement of 27 September 2025 states that candidates who applied under the original advertisement of 2023 need not apply again and will compete for all the posts, including the 10,976 added and those added by later corrigenda.',
    },
  ],
}

/* ── BPSC landing pages ─────────────────────────────────────────
   The commission moved to a new site in December 2024; the old site's
   documents survive in the web archive under their original file names. */
const BPSC = {
  home: 'https://bpsc.bihar.gov.in/',
  advertisements: 'https://bpsc.bihar.gov.in/advertisement/',
  syllabus: 'https://bpsc.bihar.gov.in/syllabus/',
  booklets: 'https://bpsc.bihar.gov.in/question-booklets/',
  calendar: 'https://bpsc.bihar.gov.in/wp-content/uploads/2025/04/Examination-Calendar-14.08.2026.pdf',
}

/* ── Bihar teaching recruitment ─────────────────────────────────
   BPSC's teacher recruitment examinations — four rounds since 2023, the
   fourth advertised on 18 August 2026 for 32,388 posts with a new
   two-stage scheme and negative marking — and the Bihar board's STET,
   registering for 2026. Head teacher and headmaster rounds of 2024 are
   the other recent cycle. Figures from the commission's and board's PDFs. */
const BR_TEACH_SRC = {
  tre4Advt: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-142026-TRE-4.0_BPSC-20260818-jwk5si.pdf',
  tre4Notice: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-142026-TRE-4.0_BPSC-20260818-e95flo.pdf',
  tre4Postponed: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-142026-TRE-4.0-Online-Application-Postponed_BPSC-20260831-yldqfj.pdf',
  tre4Probable: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-Probable-Date-of-Online-Application-TRE-4.0Date_BPSC-20260901-lavk2s.pdf',
  tre4Press: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Press-Release-TRE-4.0_BPSC-20260211-am7sv1.pdf',
  special2025: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-06-19-02.pdf',
  specialResults: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-Regarding-Results-Declaration-of-29-30-312025-422025_BPSC-20260521-e8j5pn.pdf',
  specialKey15: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/final-answekey-422025_BPSC-20260321-y89dg3.pdf',
  tre3Advt: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Archive/2024/NB-2024-02-07-06.pdf',
  tre3Cancel: 'http://web.archive.org/web/2024id_/https://www.bpsc.bih.nic.in/Notices/NB-2024-03-20-02.pdf',
  tre3Reexam: 'http://web.archive.org/web/2024id_/https://www.bpsc.bih.nic.in/Notices/NB-2024-06-28-01.pdf',
  tre3Result: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Archive/2024/NB-2024-12-26-36.pdf',
  tre1Notice: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Advt/NB-2023-05-30-04.pdf',
  tre1Negative: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Advt/NB-2023-08-18-01.pdf',
  tre1Domicile: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Advt/NB-2023-06-27-01.pdf',
  tre2Advt: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Advt/NB-2023-11-04-02.pdf',
  headTeacher: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Notices/NB-2024-03-01-07.pdf',
  headTeacherResult: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Notices/NB-2024-11-01-01..pdf',
  headMaster: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Notices/NB-2024-03-01-10.pdf',
  headMasterResult: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Notices/NB-2024-11-01-02..pdf',
  stet2026: 'https://stetregistration.cbrt.co.in/STET%202026%20Advt.pdf',
  stetPortal: 'https://stetregistration.cbrt.co.in/',
  stetSite: 'https://bsebstet.org/',
  stet2025Advt: 'https://biharboardonline.com/files/BSEB_STET25ADV.pdf',
  bseb: 'https://biharboardonline.com/',
}

const BR_TEACHING = {
  slug: 'teaching',
  path: '/government-exams/state/bihar/teaching/',
  name: 'Bihar Teaching Recruitment',
  fullName: 'BPSC Teacher Recruitment Examinations, head teacher and headmaster rounds, and the BSEB STET',
  authority: 'Bihar Public Service Commission; Bihar School Examination Board for STET',
  official: OFFICIAL,
  seoTitle: 'Bihar TRE 4.0: 32,388 Posts, New Prelims-Mains Pattern, STET 2026',
  metaDescription:
    'Bihar teaching recruitment — TRE 4.0 advertised 18 August 2026 for 32,388 posts with a new preliminary, one-third negative marking and a ₹100 fee; STET 2026.',
  lead: [
    'Bihar has recruited school teachers on a scale no other state has attempted, and through its Public Service Commission rather than an education board. Three teacher recruitment examinations between August 2023 and July 2024 — 1,70,461 posts, then 1,22,286, then the round whose March 2024 paper was cancelled for a leak and re-held in July — filled the state’s primary, middle, secondary and higher secondary schools on a single objective paper of 150 questions with no negative marking and no interview. The Bihar School Examination Board’s STET is the eligibility test for classes 9 to 12, and its BTET or the CTET for classes 1 to 8.',
    'The fourth round changes the scheme. Advertised on 18 August 2026 for 32,388 posts — 16,101 of them in classes 11 and 12 — it introduces a preliminary of 150 general studies marks that only screens, adds a deduction of one-third of a mark for every wrong answer at both stages with a fifth option for “not attempting”, and charges ₹100 a level. Its application window, set for 1 to 30 September, was postponed on 31 August for procedural changes and is now expected to open on 21 September after an amendment. STET 2026, registering from 17 August under a lifetime certificate, is the other live process; the 2024 head teacher and headmaster rounds of 40,247 and 6,061 posts produced their lists in November 2024.',
  ],
  quickFacts: [
    ['Conducting bodies', 'BPSC for recruitment; BSEB for STET and BTET'],
    ['TRE 4.0', 'Advt 14/2026, 18 August 2026 — 32,388 posts: classes 1 to 5 3,847, 6 to 8 8,563, 9 and 10 3,877, 11 and 12 16,101'],
    ['Status', 'Applications postponed from 1 September; expected from 21 September 2026 after an amended advertisement; no exam date'],
    ['New scheme', 'Preliminary 150 marks, screening only; mains 150 with a qualifying language part; one-third off per wrong answer and for a blank without option E'],
    ['STET 2026', 'Registration from 17 August; 150 marks — subject 100, teaching aptitude 50 — no negative marking; pass 50, 45.5, 42.5 or 40 per cent; lifetime certificate'],
    ['Fee and age', '₹100 per level; 18 or 21 to 37, 40 or 42, maximum age reckoned on 1 August 2024'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The fourth round’s posts are the education department’s alone: 3,847 in classes 1 to 5 — 3,065 general, 757 Urdu and 25 Bangla at a basic pay of ₹25,000; 8,563 in classes 6 to 8 across mathematics and science, social science, Hindi, English, Sanskrit and Urdu at ₹28,000; 3,877 in classes 9 and 10 across nine subjects at ₹31,000; and 16,101 in classes 11 and 12 across twenty-two subjects at ₹32,000, chemistry alone taking 3,695 and physics 1,758. Vacancies for further subjects — the regional languages, fine arts, dance, agriculture and the special teachers — are to be notified on supplementary requisition, and special school teachers have their own round of 7,279 posts whose results are held pending a Supreme Court order. Forty per cent of the posts are reserved for candidates who passed matric or intermediate from institutions in Bihar.',
    },
    {
      type: 'p',
      text: 'The first three rounds shared one scheme: a single objective paper of 150 questions and 150 marks in two and a half hours — a qualifying language part of 30 questions in English and Hindi, Urdu or Bangla at 30 per cent, then general studies of 120 for classes 1 to 5, or general studies of 40 and the subject for 80 at the higher levels — with no negative marking, category minimums of 40, 36.5, 34 and 32 per cent, no interview and no re-evaluation. The first round dropped a Bihar-domicile requirement by corrigendum in June 2023 and its negative marking in August; the third round’s paper of 15 March 2024 was cancelled on 20 March on the economic offences unit’s report that it had leaked before the examination, and re-held from 19 to 22 July 2024, with results in November and December.',
    },
    {
      type: 'list',
      title: 'What the fourth round changes',
      items: [
        { text: 'A preliminary that screens', note: '150 marks of general studies in two hours — science, current events, the history and geography of India and Bihar with its rivers, polity and economy, the national movement with Bihar’s role, mental ability — with a shortlist of two and a half to ten times the vacancies.' },
        { text: 'Negative marking at both stages', note: 'one-third of a mark per wrong answer, and five options with E as “not attempting”; a question with none of the five marked is also penalised one-third.' },
        { text: 'The mains as before, with the penalty', note: 'one paper per level of 150 questions — the qualifying language part of 30, then general studies 120 or general studies 40 and the subject 80 — with merit on the counted parts; the advertisement prints two and a half hours in its table and two in a bullet.' },
        { text: 'A fee of ₹100 a level', note: 'under the state’s resolution of August 2025, plus ₹200 for biometrics without Aadhaar; the special teacher round of 2025 charged ₹750 and ₹200.' },
      ],
    },
    {
      type: 'note',
      title: 'STET and the eligibility tests',
      text: 'The board’s STET 2026, advertised on 13 August, registers from 17 August to 31 August — reported extended to 15 September — at ₹960 for one paper and ₹1,440 for both, or ₹760 and ₹1,140 for SC, ST and PwD; a computer-based test of 150 marks in 150 minutes — 100 of the subject and 50 of teaching aptitude — with no negative marking, normalised across shifts, passed at 50 per cent for the general category, 45.5 for BC, 42.5 for EBC and 40 for SC, ST, PwD and women, with a certificate valid for life under the department’s order of June 2021. Age is 21 to 37, 40 or 42 on 1 August 2026, with no relaxation for trained candidates since tests were held in 2023, 2024 and 2025. For classes 1 to 8 the fourth round asks for CTET or BTET Paper I or II at 60 per cent, or 55 and 50 by category; no BTET cycle was found on the board’s site.',
    },
  ],
  stages: [
    {
      name: 'Eligibility test',
      mode: 'STET for classes 9 to 12; CTET or BTET for 1 to 8',
      detail:
        'STET 2026 registering; a computer-based test of 150 marks without negative marking, passed by category, with a lifetime certificate. Appearing candidates are not admitted to the recruitment.',
    },
    {
      name: 'Application by level',
      mode: 'BPSC portal; ₹100 a level',
      detail:
        'One application per class level, with the subject and the district preferences. TRE 4.0’s window, first set for 1 to 30 September 2026, is expected from 21 September after an amended advertisement.',
    },
    {
      name: 'Preliminary, then mains',
      mode: 'General studies 150 as a screen; 150-mark level paper as the merit',
      detail:
        'The preliminary shortlists two and a half to ten times the vacancies; the mains paper has the qualifying language part of 30 and the counted general studies and subject parts. One-third off per wrong answer and for an unmarked question at both stages. No interview; no re-evaluation.',
    },
    {
      name: 'Result, verification and posting',
      mode: 'Subject-wise results; document upload; district allocation',
      detail:
        'Results by level and subject with category cut-offs; document upload windows; district allocation lists; and the education department’s counselling. Impersonators are debarred by name.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. TRE 4.0 is advertised but not open. The important notice of 18 August 2026 set payment from 1 to 29 September and applications from 1 to 30 September; the notice of 31 August postponed the process for procedural changes; the notice of 1 September said applications would likely begin on 21 September after the advertisement is amended. The commission’s calendar of 14 August lists the round at 32,388 posts with the preliminary date to be published after the advertisement period. STET 2026 is registering on the board’s portal. The special school teacher round of 7,279 posts, examined on 29 January 2026 with final keys in March and April, has its results withheld by the notice of 21 May pending category details under the Supreme Court’s order in the 2016 writ, with the choice portal being reopened. The third round added nine candidates’ results on 4 May 2026 under a High Court order.`,
    },
    {
      type: 'table',
      caption: 'The four rounds, from the commission’s advertisements and notices.',
      head: ['Round', 'Advertisement', 'Posts', 'Examination', 'Results'],
      rows: [
        ['TRE 1.0', 'Advt 26/2023, 30 May 2023', '1,70,461 — classes 1 to 5, 9 and 10, 11 and 12', '24 to 26 August 2023', '17 to 22 October 2023; cut-offs 26 October; supplementary 10 December'],
        ['TRE 2.0', 'Advt 27/2023, 4 November 2023', '1,22,286 — 69,706 education, 916 and 1,401 welfare departments, 50,263 unfilled from TRE 1.0', '7 to 15 December 2023', '22 to 29 December 2023; supplementary January and February 2024; NIOS candidates August 2025'],
        ['TRE 3.0', 'Advt 22/2024, 7 February 2024', 'Notified district-wise; about 87,774 as reported', '15 March 2024, cancelled for a leak; re-held 19 to 22 July 2024', '15 November and 26 December 2024; additions March 2025 and May 2026'],
        ['TRE 4.0', 'Advt 14/2026, 18 August 2026', '32,388 — education department', 'Preliminary and mains; dates to follow', '—'],
      ],
    },
    {
      type: 'table',
      caption: 'TRE 4.0 posts by level, from the advertisement.',
      head: ['Level', 'Posts', 'Largest subjects', 'Basic pay'],
      rows: [
        ['Classes 1 to 5', '3,847', 'General 3,065; Urdu 757; Bangla 25', '₹25,000'],
        ['Classes 6 to 8', '8,563', 'Mathematics and science 2,188; English 1,929; Sanskrit 1,225; social science 1,190; Hindi 1,096; Urdu 935', '₹28,000'],
        ['Classes 9 and 10', '3,877', 'Social science 756; English 696; Urdu 660; mathematics 570; science 463; Hindi 361; Sanskrit 322; physical education 47; music 2', '₹31,000'],
        ['Classes 11 and 12', '16,101', 'Chemistry 3,695; physics 1,758; English 1,321; botany 1,078; psychology 1,030; Urdu 877; Sanskrit 746; Hindi 739; music 736; political science 665; mathematics 657; history 608', '₹32,000'],
      ],
    },
    {
      type: 'table',
      caption: 'The 2024 head teacher and headmaster rounds.',
      head: ['Round', 'Posts', 'Who', 'Examination', 'Result'],
      rows: [
        ['Head teacher, Advt 25/2024', '40,247; pay ₹30,500', 'Trained elementary teachers of local bodies with eight years’ service, to 58 on 1 August 2024', '29 June 2024 — general studies 75 and D.El.Ed 75; no negative marking', '1 November 2024 — 36,947 recommended'],
        ['Headmaster, Advt 26/2024', '6,061 and 3; pay ₹35,000', 'Postgraduates with B.Ed and eight to twelve years’ secondary teaching by school type; Bihar residents', '28 June 2024 — general studies and B.Ed', '1 November 2024 — 5,971; document re-upload to March 2025'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission and the board directly',
      items: [
        { label: 'BPSC — home and notices', href: BPSC.home },
        { label: 'BPSC — advertisements', href: BPSC.advertisements },
        { label: 'TRE 4.0 — advertisement 14/2026', href: BR_TEACH_SRC.tre4Advt },
        { label: 'TRE 4.0 — probable application date, 1 September 2026', href: BR_TEACH_SRC.tre4Probable },
        { label: 'STET 2026 — registration portal', href: BR_TEACH_SRC.stetPortal },
        { label: 'BSEB STET site', href: BR_TEACH_SRC.stetSite },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'TRE 4.0, from the advertisement. Minimum age on 1 August 2026; maximum age on 1 August 2024.',
      head: ['Level', 'Qualification', 'Eligibility test'],
      rows: [
        ['Classes 1 to 5', 'Intermediate with 50 per cent and a two-year D.El.Ed, or 45 per cent under the NCTE 2002 norms; or intermediate 50 per cent and B.El.Ed or a two-year special education diploma; or graduation and D.El.Ed; the NIOS eighteen-month D.El.Ed for teachers serving before 10 August 2017', 'CTET or BTET Paper I'],
        ['Classes 6 to 8', 'Graduation and D.El.Ed; or graduation or postgraduation with 50 per cent and B.Ed; or 45 per cent and B.Ed under the NCTE norms; or intermediate 50 per cent and a four-year integrated degree; or a postgraduate 55 per cent and the integrated B.Ed-M.Ed', 'CTET or BTET Paper II'],
        ['Classes 9 and 10', 'Graduation or postgraduation with 50 per cent in the subject and B.Ed, or the integrated B.Ed-M.Ed', 'STET Paper I'],
        ['Classes 11 and 12', 'Postgraduation with 50 per cent in the subject and B.Ed; computer science through the DOEACC, engineering or MCA routes without B.Ed', 'STET Paper II'],
        ['Age', '18 for classes 1 to 8 and 21 for 9 to 12; 37 for unreserved men; 40 for unreserved women, BC and EBC; 42 for SC, ST and transgender; ten more for PwD; five for state servants; three for ex-servicemen', '—'],
        ['Fee', '₹100 per level; ₹200 for biometrics without Aadhaar', '—'],
      ],
    },
    {
      type: 'table',
      caption: 'STET 2026, from the board’s advertisement. Age on 1 August 2026.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Papers', 'Paper I for secondary and Paper II for higher secondary, by subject; the syllabus at graduation level for Paper I and honours level for Paper II'],
        ['Age', '21 to 37 for unreserved men; 40 for unreserved women, BC and EBC; 42 for SC and ST; ten more for PwD; three for ex-servicemen; no relaxation for trained candidates'],
        ['Fee', '₹960 for one paper and ₹1,440 for both; ₹760 and ₹1,140 for SC, ST and PwD; candidates from outside Bihar pay the general fee without relaxation'],
        ['Pass marks', '50 per cent general; 45.5 BC; 42.5 EBC; 40 SC, ST, PwD and women'],
        ['Validity', 'For life, under the department’s order of 22 June 2021'],
      ],
    },
    {
      type: 'p',
      text: 'Reservation, fee concessions and the women’s and transgender quotas are for Bihar-domiciled candidates; the fourth round reserves 40 per cent of posts for candidates who passed matric or intermediate from institutions in Bihar under the department’s notification of 5 August 2025. SC, ST, EBC, BC and PwD candidates get 5 per cent relaxation in minimum marks. Guest teachers get five marks a year to a maximum of 25, subject to a pending appeal. CTET must be at 60 per cent, or 55 for BC, EBC and general women and 50 for SC, ST and PwD.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'TRE 4.0 — the new two-stage scheme, from pages 13 to 16 of the advertisement.',
      head: ['Stage', 'Paper', 'Marks', 'Time', 'Rule'],
      rows: [
        ['Preliminary', 'General studies — objective, one mark a question', '150', '2 hours', 'Screening only; two and a half to ten times the vacancies shortlisted; category minimums 40, 36.5, 34 and 32 per cent'],
        ['Mains — classes 1 to 5', 'Part I language 30, qualifying at 30 per cent; Part II general studies 120', '150', '2½ hours by the table', 'Merit on Part II'],
        ['Mains — classes 6 to 12', 'Part I language 30, qualifying; Part II general studies 40; Part III subject 80', '150', '2½ hours by the table', 'Merit on Parts II and III'],
        ['Negative marking', 'Both stages', '—', '—', 'One-third of a mark per wrong answer; five options with E for not attempting; a question with no option marked is also penalised one-third'],
        ['Interview and re-evaluation', '—', '—', '—', 'None'],
      ],
    },
    {
      type: 'table',
      caption: 'TRE 1.0 to 3.0 — the single-paper scheme, from the third round’s advertisement.',
      head: ['Part', 'Classes 1 to 5', 'Classes 6 to 12', 'Rule'],
      rows: [
        ['I — language, English and Hindi, Urdu or Bangla', '30', '30', 'Qualifying at 30 per cent'],
        ['II — general studies', '120', '40', 'Counted'],
        ['III — subject', '—', '80', 'Counted'],
        ['Total', '150 in 2½ hours', '150 in 2½ hours', 'No negative marking; minimums 40, 36.5, 34 and 32 per cent; no interview'],
      ],
    },
    {
      type: 'note',
      title: 'The penalty is the change to prepare for',
      text: 'The first round’s advertisement carried negative marking and removed it by corrigendum on 18 August 2023; the second and third rounds and the head teacher, headmaster and special teacher rounds had none. The fourth round restores it at both stages at one-third of a mark, and adds a rule the earlier rounds lacked: option E must be marked to leave a question, or the penalty applies. The commission’s 1 September notice says the advertisement is being amended; the scheme should be re-read in the amended text.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s TRE 4.0 advertisement of 18 August 2026 and its notices of 18 and 31 August and 1 September, its press release of 11 February, its examination calendar of 14 August, the special teacher advertisement and notices, and the third round’s results on its site; the first, second and third rounds’ advertisements, corrigenda, cancellation and re-examination notices and the 2024 head teacher and headmaster advertisements and results in the web archive of the old site; and the board’s STET 2026 advertisement on its registration portal and STET 2025 notices. TRE 3.0’s total is as reported, the advertisement having released vacancies district-wise; the STET 2026 extension to 15 September is a press report; appointments after the results are the education department’s and were not found.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'TRE 4.0 — advertisement 14/2026, 18 August 2026', href: BR_TEACH_SRC.tre4Advt },
        { label: 'TRE 4.0 — important notice, 18 August 2026', href: BR_TEACH_SRC.tre4Notice },
        { label: 'TRE 4.0 — application postponed, 31 August 2026', href: BR_TEACH_SRC.tre4Postponed },
        { label: 'TRE 4.0 — press release, 11 February 2026', href: BR_TEACH_SRC.tre4Press },
        { label: 'Special school teacher — advertisement 42/2025', href: BR_TEACH_SRC.special2025 },
        { label: 'Special school teacher — results withheld, 21 May 2026', href: BR_TEACH_SRC.specialResults },
        { label: 'TRE 3.0 — advertisement 22/2024, archived', href: BR_TEACH_SRC.tre3Advt },
        { label: 'TRE 3.0 — cancellation for the leak, 20 March 2024, archived', href: BR_TEACH_SRC.tre3Cancel },
        { label: 'TRE 3.0 — re-examination programme, 28 June 2024, archived', href: BR_TEACH_SRC.tre3Reexam },
        { label: 'TRE 3.0 — results of 26 December 2024', href: BR_TEACH_SRC.tre3Result },
        { label: 'TRE 1.0 — notice of 30 May 2023, archived', href: BR_TEACH_SRC.tre1Notice },
        { label: 'TRE 1.0 — negative marking removed, 18 August 2023, archived', href: BR_TEACH_SRC.tre1Negative },
        { label: 'TRE 1.0 — domicile clause amended, 27 June 2023, archived', href: BR_TEACH_SRC.tre1Domicile },
        { label: 'TRE 2.0 — advertisement 27/2023, archived', href: BR_TEACH_SRC.tre2Advt },
        { label: 'Head teacher — advertisement 25/2024, archived', href: BR_TEACH_SRC.headTeacher },
        { label: 'Head teacher — result, 1 November 2024, archived', href: BR_TEACH_SRC.headTeacherResult },
        { label: 'Headmaster — advertisement 26/2024, archived', href: BR_TEACH_SRC.headMaster },
        { label: 'Headmaster — result, 1 November 2024, archived', href: BR_TEACH_SRC.headMasterResult },
        { label: 'STET 2026 — advertisement', href: BR_TEACH_SRC.stet2026 },
        { label: 'STET 2025 — advertisement', href: BR_TEACH_SRC.stet2025Advt },
        { label: 'BPSC — examination calendar, 14 August 2026', href: BPSC.calendar },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Bihar teaching recruitment syllabus — the TRE 4.0 preliminary heads with Bihar weighted, the mains language, general studies and subject parts, and STET.',
      lead: [
        'The commission’s syllabus is an outline in the advertisement on SCERT and NCERT lines; the board’s is a subject list at graduation or honours level.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'TRE 4.0 preliminary — general studies, 150',
              'General science; current events; the history of India and Bihar; geography with Bihar’s rivers; polity and economy, including Bihar’s economy since independence; the national movement and Bihar’s role; general mental ability.',
            ],
            [
              'Mains Part I — language, 30',
              'English, with Hindi, Urdu or Bangla; qualifying at 30 per cent.',
            ],
            [
              'Mains Part II — general studies, 120 or 40',
              'Elementary mathematics, mental ability, general awareness, general science, social science, Indian and Bihar history, geography and environment, at the level taught.',
            ],
            [
              'Mains Part III — the subject, 80',
              'The subject at the level of the class taught, on SCERT and NCERT texts — mathematics and science, social science or a language for classes 6 to 8; the nine and twenty-two subjects of the higher levels.',
            ],
            [
              'STET — 150',
              'The subject for 100 at graduation level for Paper I and honours level for Paper II; teaching art and other competencies for 50.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'TRE 4.0 advertisement — pages 13 to 16', href: BR_TEACH_SRC.tre4Advt },
            { label: 'BPSC — syllabus page', href: BPSC.syllabus },
            { label: 'STET 2026 advertisement — subject lists', href: BR_TEACH_SRC.stet2026 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Bihar teaching recruitment exam pattern — TRE 4.0’s 150-mark preliminary screen and 150-mark mains with one-third off, and STET without penalty.',
      lead: [
        'A screen, a level paper, a penalty at both, and no interview.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Preliminary 150', 'General studies; two hours; two and a half to ten times the vacancies through.'],
            ['Mains 150', 'Language 30 qualifying; general studies 120, or general studies 40 and subject 80.'],
            ['Negative marking', 'One-third per wrong answer at both stages; option E to leave a question.'],
            ['Minimums', '40, 36.5, 34 and 32 per cent.'],
            ['STET', '150 marks, no penalty; pass at 50, 45.5, 42.5 or 40 per cent; lifetime certificate.'],
            ['Interview', 'None.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Bihar teaching recruitment previous papers — the commission’s booklets and final keys for TRE 1.0 to 3.0, the head teacher papers, and special teacher keys.',
      lead: [
        'The commission publishes its question booklets and final keys; three rounds of teacher papers exist, all on the single-paper scheme the mains now follows.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'TRE 3.0 — July 2024', note: 'booklets of August 2024 and final keys by level from September to October, on the old site in the web archive.' },
            { text: 'TRE 1.0 and 2.0', note: 'the booklets and keys of August and December 2023 — general studies and language papers.' },
            { text: 'Head teacher and headmaster — June 2024', note: 'the booklets of July and final keys of August 2024.' },
            { text: 'Special teacher — January 2026', note: 'final keys for classes 1 to 5 of 20 March and 6 to 8 of 6 April 2026 on the commission’s site.' },
            { text: 'The new preliminary', note: 'no paper yet; the commission’s Combined Competitive preliminary is the nearest model for general studies with Bihar weighted.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'BPSC — question booklets', href: BPSC.booklets },
            { label: 'Special teacher — final key, classes 1 to 5', href: BR_TEACH_SRC.specialKey15 },
            { label: 'State TET guides', to: '/government-exams/teaching-net/state-tet/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Bihar teaching recruitment mock tests — two-hour 150-question preliminaries scored at a third off with option E, mains level papers, and STET sittings.',
      lead: [
        'Score the preliminary and mains at −0.33, and practise marking E rather than leaving a blank.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Preliminary — 150 in two hours', text: 'General studies with Bihar weighted; a third off per wrong answer and per unmarked question. The shortlist may be as narrow as two and a half per post.' },
            { title: 'Mains — 150 in two and a half hours', text: 'Language to 30 per cent first, then the counted parts; three rounds of booklets exist for the format.' },
            { title: 'STET — 150 in 150 minutes', text: 'No penalty: attempt everything; the subject is two-thirds of the paper.' },
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
        'Bihar teaching recruitment preparation — STET 2026 now, the TRE 4.0 window from 21 September, the amended advertisement to read, and the district preferences.',
      lead: [
        'Two live processes: register for STET, and be ready for the amended TRE 4.0 advertisement.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From eligibility to posting',
          items: [
            { title: 'Hold the eligibility test before applying', text: 'STET for classes 9 to 12, CTET or BTET for 1 to 8, passed — appearing candidates are not admitted, and CTET must be at 60 per cent or the category figure.' },
            { title: 'Watch for the amended advertisement', text: 'The 1 September notice promises amendment before applications open on about 21 September; the scheme, fees and dates should be re-read in it.' },
            { title: 'Apply per level', text: '₹100 a level, with the subject and district preferences; a candidate eligible for two levels applies twice.' },
            { title: 'Prepare the preliminary as a Bihar paper', text: 'The syllabus names Bihar’s history, rivers, economy and role in the national movement.' },
            { title: 'Expect the results to be litigated', text: 'The third round added candidates in May 2026 on a High Court order; the special teacher results are held under a Supreme Court order.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Bihar teaching recruitment study material — SCERT and NCERT textbooks by level, Bihar’s history and geography for the preliminary, and STET texts.',
      lead: [
        'The commission sets its papers on SCERT and NCERT texts at the level taught; the board sets STET at degree level.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Preliminary — general studies', 'NCERT general studies; a Bihar history, geography and economy book; a year of current affairs; a reasoning workbook', 'Bihar’s rivers, economy and national movement are named.'],
            ['Mains — language', 'English and Hindi, Urdu or Bangla grammar and comprehension', 'Qualifying.'],
            ['Mains — general studies and subject', 'SCERT and NCERT textbooks for the classes taught; the D.El.Ed or B.Ed pedagogy course', 'The merit.'],
            ['STET', 'Degree-level texts in the subject; a teaching-aptitude reader', 'One hundred and fifty marks.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Teaching exam preparation', to: '/government-exams/teaching-net/' },
            { label: 'BPSC Combined Competitive Examination', to: '/government-exams/state/bihar/bpsc-combined-competitive/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When do BPSC TRE 4.0 applications open?',
      a: 'Probably on 21 September 2026. The important notice of 18 August 2026 had set payment from 1 to 29 September and applications from 1 to 30 September; the notice of 31 August postponed the process for procedural changes; and the notice of 1 September said applications would likely begin on 21 September after the advertisement is amended. No examination date has been set.',
    },
    {
      q: 'How many posts are there in TRE 4.0?',
      a: '32,388, all in the education department — 3,847 in classes 1 to 5, 8,563 in classes 6 to 8, 3,877 in classes 9 and 10 and 16,101 in classes 11 and 12, where chemistry alone has 3,695 and physics 1,758. Vacancies for the regional languages, fine arts, dance, agriculture and the special teachers are to follow on supplementary requisition; the special school teacher round of 7,279 posts is separate.',
    },
    {
      q: 'What is the TRE 4.0 exam pattern?',
      a: 'New in this round: a preliminary of 150 general studies marks in two hours that only screens, shortlisting two and a half to ten times the vacancies; then a mains of 150 per level — a qualifying language part of 30 at 30 per cent, and general studies of 120 for classes 1 to 5 or general studies of 40 and the subject for 80 at the higher levels — with merit on the counted parts. One-third of a mark is deducted per wrong answer at both stages, and a question with no option marked is penalised too; option E is for not attempting. No interview.',
    },
    {
      q: 'Is there negative marking in BPSC TRE?',
      a: 'From TRE 4.0, yes — one-third of a mark per wrong answer in the preliminary and the mains, with a fifth option E to mark for a question not attempted; an unmarked question is also penalised. TRE 1.0 removed its negative marking by corrigendum on 18 August 2023, and TRE 2.0, TRE 3.0, the head teacher and headmaster rounds and the special teacher round had none.',
    },
    {
      q: 'What is the eligibility for Bihar teacher recruitment?',
      a: 'For classes 1 to 5, intermediate with 50 per cent and D.El.Ed, or the B.El.Ed, special education or graduation routes, with CTET or BTET Paper I; for 6 to 8, graduation and D.El.Ed or graduation with 50 per cent and B.Ed, with CTET or BTET Paper II; for 9 and 10, graduation with 50 per cent in the subject and B.Ed with STET Paper I; for 11 and 12, postgraduation with 50 per cent and B.Ed with STET Paper II. Age 18 or 21 to 37, 40 or 42 by category, the maximum reckoned on 1 August 2024. Indian citizens may apply; reservation is for Bihar residents, and 40 per cent of posts are for candidates who studied in Bihar.',
    },
    {
      q: 'What is the fee for TRE 4.0 and STET 2026?',
      a: 'TRE 4.0: ₹100 for every candidate per class level applied, plus ₹200 for biometrics where Aadhaar is not given. STET 2026: ₹960 for one paper and ₹1,440 for both, or ₹760 and ₹1,140 for SC, ST and PwD candidates, with candidates from outside Bihar paying the general fee.',
    },
    {
      q: 'What is the STET 2026 pattern and pass mark?',
      a: 'A computer-based test of 150 marks in 150 minutes — 100 on the subject and 50 on teaching aptitude and other competencies — with one mark a question and no negative marking, normalised across shifts, in Paper I for secondary and Paper II for higher secondary. The pass is 50 per cent for the general category, 45.5 for BC, 42.5 for EBC and 40 for SC, ST, PwD and women, and the certificate is valid for life. Registration opened on 17 August 2026.',
    },
    {
      q: 'What happened to BPSC TRE 3.0?',
      a: 'The examination of 15 March 2024 was cancelled by notice of 20 March on the economic offences unit’s report that the paper had leaked before the examination, and re-held from 19 to 22 July 2024. Results for classes 1 to 8 came on 15 November 2024 and for 9 to 12 on 26 December, with additions in March 2025 and, under a High Court order, in May 2026; 68 impersonators were debarred in January 2025.',
    },
  ],
}

/* ── Bihar technical and departmental posts ─────────────────────
   Assistant engineers through BPSC on a six-paper objective scheme with
   experience weightage and no interview; junior engineers, nurses,
   pharmacists and the paramedical cadres through the Bihar Technical
   Service Commission on a 100-mark computer-based test with a quarter
   off; and no departmental examination scheme that could be found on
   the commission's site. Figures from the commissions' PDFs. */
const BTSC = {
  home: 'https://btsc.bihar.gov.in/',
  recruitment: 'https://btsc.bihar.gov.in/recruitment',
  results: 'https://btsc.bihar.gov.in/result',
  notices: 'https://btsc.bihar.gov.in/important-notices',
  syllabus: 'https://btsc.bihar.gov.in/syllabus',
  jeCivil: 'https://btsc.bihar.gov.in/sites/default/files/Advertisement/Civil.pdf',
  jeMech: 'https://btsc.bihar.gov.in/sites/default/files/Advertisement/Mechnical.pdf',
  jeElec: 'https://btsc.bihar.gov.in/sites/default/files/Advertisement/Electrical.pdf',
  jeCivilSyllabus: 'https://btsc.bihar.gov.in/sites/default/files/2026-02/JE_CIVIL_SYLLABUS.pdf',
  jeCancel: 'https://btsc.bihar.gov.in/sites/default/files/circulars/3345.pdf',
  jeExtension: 'https://btsc.bihar.gov.in/sites/default/files/circulars/182.pdf',
  nurseAdvt: 'https://btsc.bihar.gov.in/sites/default/files/Advertisement/Staff%20Nurse.pdf',
  nurseResult: 'https://btsc.bihar.gov.in/sites/default/files/circulars/Result_23_2025.pdf',
}
const BR_TECH_SRC = {
  aeAdvt2025: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-29-30-312025-Assistant-Engineer-Civil-Mechanical-Electrical_BPSC-20250714-r4b5fx.pdf',
  aeProgramme: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-06-30-04_BPSC-20250630-n2ehs9.pdf',
  aeKeys: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/23-9-25-2-Important-Notice-29-30-31-2025-Asst.-Engineer-Civil-Mech-Elect-Final-Answer-Keys_BPSC-20250923-oqm5te.pdf',
  aeProvisionalKeys: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-Invitation-of-Objection-29-30-312025-Exam.-Prov.-Answer-key_BPSC-20250724-vny4dg.pdf',
  aeStay: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-29-30-312025-Regarding-publication-of-results_BPSC-20260723-jhnz13.pdf',
  aeCivil2024Result: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/7-8-25-5-Results-322024-Assistant-Engineer-Civil_BPSC-20250807-4fop3l.pdf',
  aeMech2024Result: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/7-8-25-6-Results-332024-Assistant-Engineer-Mechanical_BPSC-20250807-7t308h.pdf',
  ae2024Booklets: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-01-21-03.pdf',
  ae2024Syllabus: 'http://web.archive.org/web/2025id_/https://www.bpsc.bih.nic.in/Notices/NB-2024-06-13-06.pdf',
}

const BR_TECHNICAL = {
  slug: 'technical-posts',
  path: '/government-exams/state/bihar/technical-posts/',
  name: 'Bihar Technical and Departmental Posts',
  fullName: 'BPSC assistant engineer, BTSC junior engineer and paramedical recruitment, and the state’s departmental examinations',
  authority: 'Bihar Public Service Commission; Bihar Technical Service Commission',
  official: OFFICIAL,
  seoTitle: 'Bihar AE & JE 2026: BPSC Result Stayed, BTSC 2,809 JE Posts, Nurse Result',
  metaDescription:
    'Bihar technical posts — BPSC’s 1,040-post assistant engineer result stayed by the High Court, BTSC’s 2,809 junior engineer posts awaiting a test, nurse result.',
  lead: [
    'Bihar recruits its engineers at two levels through two commissions. The Public Service Commission fills the assistant engineer posts of the road, building, rural works, water resources and urban development departments through a six-paper objective examination — English and Hindi qualifying, general studies, general engineering science and two papers of the discipline — with a weightage for contractual service and no interview. The Bihar Technical Service Commission fills the junior engineer posts and the health department’s nurses, pharmacists, technicians and doctors through a 100-mark computer-based test with a quarter mark off, weighted 75 with experience 25.',
    'Both engineer rounds are waiting, and one is in court. The Public Service Commission’s 1,040-post assistant engineer round of April 2025 was examined in July 2025 and its final keys published in September, but the Patna High Court’s order of 23 March 2026 in a pending writ stayed a departmental memorandum of 9 March and the commission says the result is blocked until the stay is vacated. The Technical Service Commission’s 2,809-post junior engineer round of December 2025 — 2,653 civil, 70 mechanical, 86 electrical — closed on 30 January 2026 and has no test date, the commission having cancelled and re-invited its testing-agency tender in May. Its 11,389-post staff nurse round, by contrast, published its result on 27 August 2026 with 7,376 selected.',
  ],
  quickFacts: [
    ['Recruiting bodies', 'BPSC for assistant engineers and the professional cadres; BTSC for junior engineers and the health department’s technical staff'],
    ['BPSC AE 2025', 'Advts 29 to 31/2025, 28 April 2025 — 1,040 posts: civil 984, mechanical 36, electrical 20; examined 17 to 19 July 2025; result stayed by the High Court'],
    ['BTSC JE 2025', 'Advts 28 to 30/2025, 12 December 2025 — 2,809 posts; closed 30 January 2026; ₹100; test not yet dated'],
    ['BTSC staff nurse', 'Advt 23/2025 — 11,389 posts; result 27 August 2026: 7,376 selected; unreserved cut-off 44.58'],
    ['Schemes', 'AE: six papers of 100 in an hour each, four counted for 400, scaled to 75 plus experience 25. JE and nurse: 100 questions in two hours, a quarter off, 75 plus experience 25'],
    ['Departmental examinations', 'No scheme, notice or section found on the commission’s site; the state’s departmental sites were unreachable'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The assistant engineer advertisements of 28 April 2025 distribute 984 civil posts across the water resources department, 351; rural works, 231; road construction, 117; urban development, 85; planning, 82; minor water resources, 58; building construction, 55; and animal and fisheries, 5 — with 36 mechanical posts and, after 16 were added on 14 May, 20 electrical, at level 9. An engineering degree from an AICTE-approved institution or AMIE by regular study qualifies; age is 21 minimum on 1 August 2024 and 37, 40 or 42 maximum on department-specific cut-off dates from 2012 to 2020, with ten more for PwD and relaxation for contractual service. Applications ran from 30 April to 28 May 2025 at ₹750, or ₹200 for Bihar’s SC, ST, women and PwD candidates; the examination was held on 17 to 19 July after a rescheduling, provisional keys came on 24 July, final keys on 23 September, and OMR sheets were shown in September.',
    },
    {
      type: 'p',
      text: 'The commission’s scheme is six objective papers of 100 marks and one hour each: general English and general Hindi, each qualifying at 30 marks; general studies; general engineering science; and two papers of civil, mechanical or electrical engineering — 400 counted, with the category minimums of 40, 36.5, 34 and 32 per cent, scaled to 75 and added to a weightage of five marks a year to 25 for contractual assistant engineer service. There is no interview and no re-evaluation, and posts are allotted by department preference. The 2024 round on the same scheme — 113 civil and 5 mechanical engineers for the public health department, examined on 18 and 19 December 2024 — reached its results on 7 August 2025.',
    },
    {
      type: 'list',
      title: 'The Technical Service Commission’s rounds',
      items: [
        { text: 'Junior engineers — 2,809 posts, December 2025', note: 'civil 2,653 across eight departments — urban development 580, water resources 558, rural works 554, road construction 376, public health 357, building construction 149, minor water resources 62, animal and fisheries 17 — mechanical 70 and electrical 86, at level 7; 40 per cent for diploma holders from Bihar institutions. An October window was cancelled for a software error and reissued; applications to 12 January, extended to 30 January 2026, at ₹100.' },
        { text: 'Staff nurses — 11,389 posts, April 2025', note: 'GNM or BSc nursing with council registration; ₹600 or ₹150; a 100-mark test on the GNM syllabus; verification on 31 July 2026; result 27 August with 7,376 selected — 2,916 men and other states’ women, 4,460 Bihar women — and 301 disability seats carried forward.' },
        { text: 'The paramedical and medical cadres', note: 'pharmacists, dressers, operation theatre, ECG and X-ray technicians, laboratory technicians, dentists, general and specialist medical officers — results through 2025 and 2026 — and 2026 advertisements for dairy field officers, laboratory assistants in thirteen engineering streams, ITI instructors, a food analyst, bacteriologists and bench chemists.' },
        { text: 'The scheme', note: 'a computer-based test of 100 objective questions in two hours in Hindi and English, normalised across shifts, with 0.25 off per wrong answer and the category minimums, weighted 75, plus experience at five marks a year to 25.' },
      ],
    },
    {
      type: 'note',
      title: 'Departmental examinations — what could not be found',
      text: 'This page carries the hub’s combined card for technical and departmental posts. The commission’s site returns no record for departmental examinations, its sections page lists a promotion committee section but no examination section, and its constitutional provisions and questions pages do not mention them; the general administration and education department sites were unreachable at the date checked, and the training institute’s site serves no readable content. No scheme, rule or notice for a departmental examination of Bihar government servants — administrative, revenue or police — is stated here, because none was read.',
    },
  ],
  stages: [
    {
      name: 'BPSC — application and six papers',
      mode: '₹750 or ₹200; three days of papers',
      detail:
        'Six objective papers of 100 marks and an hour — English and Hindi qualifying at 30, general studies, general engineering science and two discipline papers — held over three days; provisional keys with objections, then final keys and OMR sheets.',
    },
    {
      name: 'BPSC — merit and allotment',
      mode: 'Written 400 scaled to 75, plus experience 25; no interview',
      detail:
        'The four counted papers within the category minimums, scaled, plus five marks a year of contractual service to 25; document verification; allotment by department preference. The 2025 round’s result is blocked by the High Court’s stay.',
    },
    {
      name: 'BTSC — application and computer-based test',
      mode: '₹100; 100 questions, two hours; a quarter off',
      detail:
        'On the AICTE diploma curriculum for junior engineers and the GNM syllabus for nurses, in Hindi and English, normalised across shifts, with the category minimums. The junior engineer test is not yet dated.',
    },
    {
      name: 'BTSC — weightage, verification and result',
      mode: 'Test 75, experience 25',
      detail:
        'Contractual service at five marks a year to 25; document verification; results by category with cut-offs — the staff nurse result of 27 August 2026 on 31 July verification.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. No engineering window is open. The Public Service Commission’s assistant engineer round stands stayed: its notice of 21 May 2026 recorded the writ pending in the Patna High Court, and its notice of 23 July that the court’s order of 23 March 2026 had stayed the memorandum of 9 March and that, no vacation having been granted, publication of the result is blocked; the commission’s calendar of 14 August records the round under stay orders. The Technical Service Commission’s junior engineer round has no test date, admit card or result after its extension to 30 January 2026, and its testing-agency tender was cancelled and re-invited on 8 May; its admit card page shows no record. The staff nurse result of 27 August 2026 is the commission’s latest, with the nursing tutor round’s marks open to objection from 9 to 15 September. Among the Public Service Commission’s other technical cadres, the assistant environmental engineer round reached its final result on 3 July 2026, and the polytechnic and engineering college lecturer rounds continue.`,
    },
    {
      type: 'table',
      caption: 'The engineer rounds, from the commissions’ advertisements and notices.',
      head: ['Round', 'Posts', 'Applications', 'Examination', 'Position at 11 September 2026'],
      rows: [
        ['BPSC AE — Advts 29, 30, 31/2025, 28 April 2025', '1,040 — civil 984, mechanical 36, electrical 4 and 16', '30 April to 28 May 2025', '17 to 19 July 2025; provisional keys 24 July; final keys 23 September', 'Result blocked by the High Court’s stay of 23 March 2026'],
        ['BPSC AE — Advts 32, 33/2024, 13 June 2024', '118 — public health department civil 113, mechanical 5', '2024', '18 and 19 December 2024', 'Results 7 August 2025'],
        ['BTSC JE — Advts 28, 29, 30/2025, 12 December 2025', '2,809 — civil 2,653, mechanical 70, electrical 86', '12 December 2025 to 12 January 2026, extended to 30 January', 'Not yet dated', 'Testing agency re-tendered in May 2026'],
        ['BTSC staff nurse — Advt 23/2025', '11,389', '25 April to 24 May 2025', 'Computer-based test; verification 31 July 2026', 'Result 27 August 2026 — 7,376 selected'],
      ],
    },
    {
      type: 'table',
      caption: 'BPSC assistant engineer civil 2025 — posts by department.',
      head: ['Department', 'Posts'],
      rows: [
        ['Water resources', '351'],
        ['Rural works', '231'],
        ['Road construction', '117'],
        ['Urban development and housing', '85'],
        ['Planning and development', '82'],
        ['Minor water resources', '58'],
        ['Building construction', '55'],
        ['Animal and fisheries resources', '5'],
        ['Civil in all', '984'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commissions directly',
      items: [
        { label: 'BPSC — home and notices', href: BPSC.home },
        { label: 'BPSC AE 2025 — notice on the stayed result, 23 July 2026', href: BR_TECH_SRC.aeStay },
        { label: 'BTSC — recruitment', href: BTSC.recruitment },
        { label: 'BTSC — important notices', href: BTSC.notices },
        { label: 'BTSC — results', href: BTSC.results },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the advertisements.',
      head: ['Requirement', 'BPSC assistant engineer 2025', 'BTSC junior engineer 2025'],
      rows: [
        ['Qualification', 'A degree in civil, mechanical or electrical engineering from an AICTE-approved institution, or AMIE sections A and B by regular study', 'A regular three-year diploma in the discipline recognised by AICTE, or equivalent; 40 per cent of posts for diploma holders from Bihar institutions'],
        ['Age', '21 minimum on 1 August 2024; 37 for unreserved men, 40 for unreserved women, BC and EBC, 42 for SC and ST, reckoned on department cut-off dates from 1 August 2012 to 2020; ten more for PwD; contractual service relaxes', '18 minimum on 1 August 2025; 37, 40, 40 and 42 by category; ten more for PwD'],
        ['Fee', '₹750; ₹200 for Bihar SC, ST, women and PwD; ₹200 more for biometrics without Aadhaar', '₹100 for every candidate, online'],
        ['Pay', 'Level 9', 'Level 7 — ₹9,300 to ₹34,800 with grade pay ₹4,600'],
        ['Experience weightage', 'Five marks a year of contractual assistant engineer service, to 25', 'Five marks a year of contractual junior engineer service, to 25'],
      ],
    },
    {
      type: 'table',
      caption: 'BTSC staff nurse 2025.',
      head: ['Requirement', 'Rule'],
      rows: [
        ['Qualification', 'GNM recognised by the Indian Nursing Council, or BSc nursing, with Bihar Nurses Registration Council registration'],
        ['Age', '21 to 37, 40, 40 or 42 by category on 1 August 2024'],
        ['Fee', '₹600 for general, BC, EBC, EWS and outside candidates; ₹150 for Bihar SC, ST, women and PwD'],
        ['Posts', '11,389 — 2,659 for women; 314 for PwD'],
        ['Result', '7,376 selected on 27 August 2026; cut-offs 44.58 unreserved, 41.71 unreserved women, 44.31 EWS, 33.47 BC, 29.46 BC women; 301 disability seats carried forward'],
      ],
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'BPSC assistant engineer — six objective papers of 100 marks, one hour each, from the 2025 advertisement.',
      head: ['Paper', 'Subject', 'Rule'],
      rows: [
        ['1', 'General English', 'Qualifying at 30 marks'],
        ['2', 'General Hindi', 'Qualifying at 30 marks'],
        ['3', 'General studies', 'Counted'],
        ['4', 'General engineering science', 'Counted'],
        ['5', 'Civil, mechanical or electrical engineering — I', 'Counted'],
        ['6', 'Civil, mechanical or electrical engineering — II', 'Counted'],
        ['Merit', '400 counted, within 40, 36.5, 34 and 32 per cent, scaled to 75; experience to 25; total 100', 'No interview; no re-evaluation; department preference'],
      ],
    },
    {
      type: 'table',
      caption: 'BTSC — the computer-based test, from the junior engineer and staff nurse advertisements.',
      head: ['Feature', 'Rule'],
      rows: [
        ['Paper', '100 objective questions, 100 marks, two hours, Hindi and English'],
        ['Content', 'The AICTE three-year diploma curriculum for junior engineers; the GNM syllabus for nurses'],
        ['Negative marking', '0.25 per wrong answer'],
        ['Normalisation', 'Across shifts'],
        ['Minimums', '40 per cent unreserved; 36.5 BC; 34 EBC; 32 SC, ST, women and PwD'],
        ['Merit', 'Test scaled to 75, plus experience at five marks a year to 25'],
      ],
    },
    {
      type: 'note',
      title: 'A negative-marking clause was not found for the BPSC scheme',
      text: 'The 2025 assistant engineer advertisement sets the six papers, the qualifying marks in the language papers, the category minimums and the weightage; no deduction for wrong answers appears in the scheme read. The Technical Service Commission’s advertisements state the quarter-mark deduction in terms. The commission’s question booklets and final keys for the 2024 and 2025 papers are on its site.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the Public Service Commission’s assistant engineer advertisements of April 2025 and their programme, key and result-status notices, the 2024 round’s results and booklets, its examination calendar and advertisement feed; the Technical Service Commission’s junior engineer advertisements, cancellation and extension notices and syllabi, its staff nurse advertisement and result, and its recruitment, notice and result pages. Departmental examinations were searched for on the Public Service Commission’s site without result, and the state’s departmental sites were unreachable. The stay order itself was not read; its effect is as the commission’s notice states it.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: 'BPSC AE 2025 — advertisements 29, 30 and 31/2025', href: BR_TECH_SRC.aeAdvt2025 },
        { label: 'BPSC AE 2025 — examination programme, 30 June 2025', href: BR_TECH_SRC.aeProgramme },
        { label: 'BPSC AE 2025 — provisional keys and objections, 24 July 2025', href: BR_TECH_SRC.aeProvisionalKeys },
        { label: 'BPSC AE 2025 — final keys, 23 September 2025', href: BR_TECH_SRC.aeKeys },
        { label: 'BPSC AE 2025 — result blocked by stay, 23 July 2026', href: BR_TECH_SRC.aeStay },
        { label: 'BPSC AE civil 2024 — results, 7 August 2025', href: BR_TECH_SRC.aeCivil2024Result },
        { label: 'BPSC AE mechanical 2024 — results, 7 August 2025', href: BR_TECH_SRC.aeMech2024Result },
        { label: 'BPSC AE 2024 — question booklets', href: BR_TECH_SRC.ae2024Booklets },
        { label: 'BPSC AE 2024 — syllabus, archived', href: BR_TECH_SRC.ae2024Syllabus },
        { label: 'BTSC JE civil — advertisement 28/2025', href: BTSC.jeCivil },
        { label: 'BTSC JE mechanical — advertisement 29/2025', href: BTSC.jeMech },
        { label: 'BTSC JE electrical — advertisement 30/2025', href: BTSC.jeElec },
        { label: 'BTSC JE — October window cancelled, notice 3345', href: BTSC.jeCancel },
        { label: 'BTSC JE — extension to 30 January 2026, notice 182', href: BTSC.jeExtension },
        { label: 'BTSC JE civil — syllabus', href: BTSC.jeCivilSyllabus },
        { label: 'BTSC staff nurse — advertisement 23/2025', href: BTSC.nurseAdvt },
        { label: 'BTSC staff nurse — result, 27 August 2026', href: BTSC.nurseResult },
        { label: 'BPSC — examination calendar, 14 August 2026', href: BPSC.calendar },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'Bihar technical posts syllabus — BPSC’s general studies, general engineering science and discipline papers, and BTSC’s diploma curriculum for junior engineers.',
      lead: [
        'The commission publishes the assistant engineer syllabus with its advertisement; the Technical Service Commission publishes the junior engineer syllabi as the state board’s diploma curriculum.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'General English and general Hindi — 100 each, qualifying',
              'Grammar, vocabulary and comprehension; 30 to pass.',
            ],
            [
              'General studies — 100',
              'India and Bihar: history, geography, polity, economy, science and current events.',
            ],
            [
              'General engineering science — 100',
              'Engineering mathematics, mechanics, materials, thermodynamics, electrical fundamentals and computing common to the disciplines.',
            ],
            [
              'Discipline papers I and II — 100 each',
              'Civil: structures, geotechnical, transportation, water resources, environmental and construction. Mechanical: thermal, design, manufacturing and fluids. Electrical: machines, power systems, control and electronics. At degree level.',
            ],
            [
              'BTSC junior engineer — 100',
              'The state board of technical education’s three-year diploma curriculum in the discipline, as the commission’s syllabus of 3 February 2026 sets it.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus documents',
          items: [
            { label: 'BPSC — syllabus page', href: BPSC.syllabus },
            { label: 'BPSC AE 2024 — syllabus, archived', href: BR_TECH_SRC.ae2024Syllabus },
            { label: 'BTSC — syllabus page', href: BTSC.syllabus },
            { label: 'BTSC JE civil — syllabus', href: BTSC.jeCivilSyllabus },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'Bihar technical posts exam pattern — BPSC’s six papers with four counted and scaled to 75 plus experience 25, and BTSC’s 100-mark test with a quarter off.',
      lead: [
        'Both commissions weight the written test at 75 and contractual service at 25; neither interviews.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'Side by side.',
          head: ['Feature', 'BPSC assistant engineer', 'BTSC junior engineer'],
          rows: [
            ['Papers', 'Six of 100 in an hour; English and Hindi qualifying', 'One of 100 in two hours, computer-based'],
            ['Counted', 'Four papers — 400', 'The one paper'],
            ['Negative marking', 'None stated', '0.25 per wrong answer'],
            ['Minimums', '40, 36.5, 34 and 32 per cent', 'The same'],
            ['Merit', 'Written 75, experience 25', 'Test 75, experience 25'],
            ['Interview', 'None', 'None'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'Bihar technical posts previous papers — BPSC’s assistant engineer booklets and keys for 2024 and 2025, and BTSC’s syllabi as the model for its tests.',
      lead: [
        'The commission publishes its booklets and keys; the Technical Service Commission publishes syllabi and results.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'BPSC AE 2025 — 17 to 19 July 2025', note: 'provisional keys with objections on 24 July and final keys on 23 September 2025, on the commission’s site.' },
            { text: 'BPSC AE 2024 — 18 and 19 December 2024', note: 'question booklets of 23 January 2025 and keys.' },
            { text: 'BPSC — question booklets page', note: 'the assistant engineer papers by year and discipline.' },
            { text: 'BTSC', note: 'no papers published; the diploma and GNM syllabi are the boundary.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'BPSC — question booklets', href: BPSC.booklets },
            { label: 'BPSC AE 2024 — question booklets', href: BR_TECH_SRC.ae2024Booklets },
            { label: 'BPSC AE 2025 — final keys', href: BR_TECH_SRC.aeKeys },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'Bihar technical posts mock tests — one-hour 100-mark papers in the BPSC sequence, and two-hour 100-question computer-based sittings scored at a quarter off.',
      lead: [
        'Six hours of papers over three days for the commission; two hours on screen for the Technical Service Commission.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'BPSC — six papers of an hour', text: 'English and Hindi to 30; then general studies, general engineering science and two discipline papers scored against the category minimum and the 400.' },
            { title: 'BTSC — 100 questions in two hours', text: 'On the diploma curriculum, at a quarter off per wrong answer; the nurse round’s unreserved cut-off was 44.58 of 100 after scaling.' },
            { title: 'Count the experience', text: 'Five marks a year of contractual service to 25 — a quarter of the merit in both schemes.' },
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
        'Bihar technical posts preparation — the stayed assistant engineer result, the undated junior engineer test, the experience weightage, and the two commissions.',
      lead: [
        'Two rounds are waiting on a court and a tender; the preparation is the discipline and the service record.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From advertisement to appointment',
          items: [
            { title: 'Watch both commissions', text: 'The Public Service Commission’s notices for the stay and the next assistant engineer round; the Technical Service Commission’s notices and admit card page for the junior engineer test.' },
            { title: 'Prepare the discipline at the right level', text: 'Degree level across two papers for assistant engineer; the diploma curriculum for junior engineer.' },
            { title: 'Do not neglect the general papers', text: 'General studies and general engineering science are half the assistant engineer merit; English and Hindi must be cleared at 30.' },
            { title: 'Document contractual service', text: 'Five marks a year to 25 in both schemes; the certificate is verified.' },
            { title: 'Keep the certificates within the cut-off', text: 'The junior engineer round required certificates dated by 12 January 2026 despite the extension to 30 January.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'Bihar technical posts study material — degree texts and GATE-level banks for BPSC, the diploma curriculum for BTSC, the GNM syllabus, and Bihar general studies.',
      lead: [
        'The discipline at the level of the qualification, and Bihar for the general paper.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Discipline — degree level', 'Standard undergraduate texts and a GATE-level objective bank', 'Two BPSC papers.'],
            ['General engineering science', 'Engineering mathematics, mechanics, materials and electrical fundamentals', 'One BPSC paper.'],
            ['General studies', 'NCERT general studies; a Bihar general knowledge book; a year of current affairs', 'One BPSC paper.'],
            ['English and Hindi', 'Grammar and comprehension in each', 'Qualifying at 30.'],
            ['Discipline — diploma level', 'The state board of technical education’s diploma texts', 'The BTSC junior engineer test.'],
            ['Nursing', 'The GNM syllabus', 'The BTSC staff nurse test.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            { label: 'BPSC Specialist Recruitment', to: '/government-exams/state/bihar/bpsc-specialist/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the BPSC Assistant Engineer 2025 result?',
      a: 'It is blocked. The round of 1,040 posts was examined on 17 to 19 July 2025 and its final keys published on 23 September, but the commission’s notice of 23 July 2026 states that the Patna High Court’s order of 23 March 2026 in a pending writ stayed the departmental memorandum of 9 March and that, with no vacation of the stay, publication of the result is obstructed. The commission’s calendar of 14 August records the round under stay orders.',
    },
    {
      q: 'What is the BPSC Assistant Engineer exam pattern?',
      a: 'Six objective papers of 100 marks and one hour each — general English and general Hindi, qualifying at 30 marks; general studies; general engineering science; and two papers of civil, mechanical or electrical engineering — with the four counted papers, 400 marks, within category minimums of 40, 36.5, 34 and 32 per cent, scaled to 75 and added to a weightage of five marks a year to 25 for contractual assistant engineer service. No interview and no re-evaluation.',
    },
    {
      q: 'When is the BTSC Junior Engineer exam?',
      a: 'No date has been fixed. The round of 2,809 posts — 2,653 civil, 70 mechanical, 86 electrical — closed on 30 January 2026 after an extension, and the commission’s notices, admit card page and results carry nothing since; it cancelled and re-invited its testing-agency tender on 8 May 2026. The test will be 100 questions in two hours on the diploma curriculum with 0.25 off per wrong answer.',
    },
    {
      q: 'What is the BTSC Junior Engineer eligibility and fee?',
      a: 'A regular three-year diploma in civil, mechanical or electrical engineering recognised by AICTE, or an equivalent, with 40 per cent of posts for diploma holders from Bihar institutions; age 18 to 37 for unreserved men, 40 for unreserved women, BC and EBC, and 42 for SC and ST on 1 August 2025, with ten more for PwD. The fee was ₹100 for every candidate. Contractual junior engineer service earns five marks a year to 25.',
    },
    {
      q: 'What was the BTSC Staff Nurse result?',
      a: 'Published on 27 August 2026 for the 11,389-post round of April 2025: 7,376 selected — 2,916 men and other states’ women, and 4,460 Bihar women — at cut-offs of 44.58 for the unreserved, 41.71 for unreserved women, 44.31 EWS, 33.47 BC and 29.46 BC women, with 301 disability seats carried forward. The test was 100 marks on the GNM syllabus with a quarter off, weighted 75 with experience 25.',
    },
    {
      q: 'What is the fee for BPSC Assistant Engineer?',
      a: '₹750 for general candidates and ₹200 for Bihar’s SC, ST, women and PwD candidates in the 2025 round, plus ₹200 for biometrics where Aadhaar is not given. The commission’s later rounds charge ₹100 under the state’s resolution of August 2025.',
    },
    {
      q: 'Is there negative marking in Bihar engineering exams?',
      a: 'In the Technical Service Commission’s tests, 0.25 per wrong answer, as its junior engineer and staff nurse advertisements state. The Public Service Commission’s 2025 assistant engineer advertisement carries no negative-marking clause in the scheme read.',
    },
    {
      q: 'Which Bihar departmental examinations are covered?',
      a: 'None, by absence. The Public Service Commission’s site returns no record for departmental examinations and lists no section for them, and the general administration and education department sites were unreachable at the date checked. No scheme or notice for the departmental examinations of Bihar’s administrative, revenue or police services could be read, and none is stated here.',
    },
  ],
}

/* ── BPSC Combined Competitive Examination ──────────────────────
   The commission's three-stage recruitment to the state's gazetted
   services — administrative, police, finance, revenue, rural development
   and the rest — run as one "integrated" cycle that also fills the child
   development, financial administrative and protection officer posts
   with their own mains optional. Three cycles overlap at the date
   checked: the 70th published its final result on 20 June 2026, the 71st
   has written its mains and awaits the result, and the 72nd, advertised
   on 5 May 2026 for 1,230 posts since cut to 1,187, waits for a
   preliminary date after the 26 July examination was postponed. Every
   figure is from the commission's PDFs. */
const BR_CCE_SRC = {
  advt72: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-Integrated-72th-CCE-PT_BPSC-20260505-p1euvo.pdf',
  notice72: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-Integrated-72th-CCE-PT_BPSC-20260505-tc547k.pdf',
  program72: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Examination-Program-Integrated-72nd-CCE-Pre_BPSC-20260710-g1p34w.pdf',
  postponed72: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Regarding_postpone_72nd_BPSC_BPSC-20260720-u768lx.pdf',
  sugarcane72: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Corrigendum-Integrated-72nd-CCE-Pre-Advt.-44-vacancies-of-Sugarcane-Officer-deleted_BPSC-20260506-0jupsy.pdf',
  subRegistrar72: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Corigendum-Exise-Dept_BPSC-20260527-nk2z7x.pdf',
  dsp72: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Corrigendum-72nd-CCE-Reduction-of-2-posts-of-BPS_BPSC-20260903-23e57k.pdf',
  optionE: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Kaagaz_20260502_160639877178_BPSC-20260502-zjmn51.pdf',
  notice71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-05-30-05.pdf',
  advt71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-05-30-06.pdf',
  dsp71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-06-18-01.pdf',
  added71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-06-26-01_BPSC-20250626-lh6nje.pdf',
  revised71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-07-04-01_BPSC-20250704-gvxfye.pdf',
  provisionalKey71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/19-9-25-2-Provisional-Answer-Key-Integrated-71st-CCE-Pre-Exam.-General-Studies_BPSC-20250919-j3xcma.pdf',
  finalKey71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/31-10-25-3-Final-Answer-Key-71st-CCE-Pre_BPSC-20251031-bmkwic.pdf',
  preResult71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Results-71stCCE-Pre-CCE_BPSC-20251118-yu7xda.pdf',
  preResult71Fao: 'https://bpsc.bihar.gov.in/wp-content/uploads/2025/04/Results-71stCCE-Pre-FAO.pdf',
  mainsNotice71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-Integrated-71st-Main-Advertisement_BPSC-20251201-ohxcb0.pdf',
  mainsAdvt71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Advertisement-Integrated-71st-CCE-Main1_BPSC-20251202-6znjdv.pdf',
  mainsProgram71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Examination-Program-Integrated-71st-CCE-Main-Written-1_BPSC-20260323-3xeslr.pdf',
  booklets71: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-Integrated-71st-CCE-Unevaluated-Answer-Book-upload_BPSC-20260822-vzwkp3.pdf',
  preResult70: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/NB-2025-01-23-09.pdf',
  mainsResult70: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Results-Written-Integrated-70th-Main-CCE_BPSC-20251216-okmuw5.pdf',
  interview70a: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Interview-Program-Integrated-70th-CCE-Ist-Phase_BPSC-20260106-lqngk3.pdf',
  interview70b: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Interview-Program-Integrated-70th-CCE-2nd-Phase_BPSC-20260206-isp5ua.pdf',
  final70: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Final-Results-Integrated-70th-CCE-CCE_BPSC-20260620-6lmcuq.pdf',
  final70Cdpo: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Final-Results-Integrated-70th-CCE-CDPO_BPSC-20260620-u9nagd.pdf',
  final70Fao: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Final-Results-Integrated-70th-CCE-FAO_BPSC-20260620-jthoum.pdf',
  marks70: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Notices/Important-Notice-Marks-Sheet-of-70th-Mains_BPSC-20260720-d8pf49.pdf',
  cancel70: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Archive/2024/NB-2024-12-18-01.pdf',
  press70: 'https://bpsc.bihar.gov.in/wp-content/uploads/BPSC_content/Archive/2024/NB-2024-12-28-01.pdf',
  portal: 'https://bpsconline.bihar.gov.in/',
}

const BR_CCE = {
  slug: 'bpsc-combined-competitive',
  path: '/government-exams/state/bihar/bpsc-combined-competitive/',
  name: 'BPSC Combined Competitive Examination',
  fullName: 'Bihar Public Service Commission — Integrated Combined Competitive Examination',
  authority: 'Bihar Public Service Commission (BPSC), Patna',
  official: OFFICIAL,
  seoTitle: 'BPSC CCE 2026: 72nd Prelims Date, 71st Mains Result, Posts, Pattern and Cut-offs',
  metaDescription:
    'BPSC Combined Competitive Examination — the 72nd cycle’s 1,187 posts and postponed prelims, the 71st mains result awaited, the 70th final, scheme and cut-offs.',
  lead: [
    'The Combined Competitive Examination is how the Bihar Public Service Commission fills the state’s gazetted services in one cycle: sub-divisional magistrates of the administrative service, deputy superintendents of police, assistant commissioners of state tax, revenue officers, rural development officers, block panchayat raj officers, supply inspectors, labour enforcement officers, municipal executive officers and a dozen smaller cadres. The commission runs it as an “integrated” examination, so that the child development project officer, financial administrative officer and, in the 72nd, the sub-divisional protection officer posts share the same preliminary and general studies papers and differ only in a descriptive optional subject in the mains.',
    'Three cycles overlap at the date checked. The 70th, advertised in September 2024 for 1,957 posts that grew to 2,017, published its final result on 20 June 2026 with 2,009 candidates recommended. The 71st, advertised on 30 May 2025 for 1,250 posts that grew to 1,298, held its preliminary on 13 September 2025, qualified 13,368 of 3,16,905 candidates on 18 November, wrote its mains from 25 to 29 April 2026 and awaits a result the commission’s calendar puts in August or September 2026. The 72nd, advertised on 5 May 2026 for 1,230 posts, took applications to 31 May, lost 44 sugarcane officer posts and two deputy superintendent posts and gained three sub-registrar posts by three corrigenda to stand at 1,187, and had its preliminary of 26 July 2026 postponed on 18 July for unavoidable reasons; the calendar of 14 August 2026 puts it on 25 October.',
  ],
  quickFacts: [
    ['Conducted by', 'Bihar Public Service Commission, Patna'],
    ['72nd cycle', 'Advertised 5 May 2026; applications 7 to 31 May; 1,187 posts after corrigenda of 6 May, 27 May and 3 September; preliminary postponed from 26 July — 25 October 2026 on the calendar'],
    ['71st cycle', 'Preliminary 13 September 2025, 13,368 qualified of 3,16,905; mains 25 to 29 April 2026; result due August to September 2026'],
    ['70th cycle', 'Final result 20 June 2026 — 2,009 recommended against 2,017 posts; unreserved cut-off 528 of 1,020'],
    ['Stages', 'Objective preliminary of 150 marks, qualifying; descriptive mains of 900 counted marks; interview of 120'],
    ['Fee', '₹100 for every candidate, per examination applied for; ₹200 more for biometrics without Aadhaar'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The 72nd advertisement lists 22 cadres in its first table and three in its second. The first table’s 1,077 posts are led by 365 revenue officers, 130 cooperative extension officers, 100 sub-divisional officers of the Bihar Administrative Service, 76 assistant commissioners of state tax, 70 block panchayat raj officers, 65 rural development officers, 56 labour enforcement officers, 54 municipal executive officers, 44 sugarcane officers since deleted, 31 supply inspectors and 22 deputy superintendents of police since cut to 20; the smaller cadres are labour superintendents and assistant registrars of cooperative societies at ten each, assistant planning officers at ten, the education service’s administrative sub-cadre at nine, assistant election officers at seven, block scheduled caste and tribe welfare officers at five, probation officers at four, sub-registrars at three raised to six, block minority welfare officers at three, district audit officers at two and a district minority welfare officer. The second table holds 20 child development project officers, 32 financial administrative officers and 101 sub-divisional protection officers reserved for women.',
    },
    {
      type: 'p',
      text: 'The cadres pay at Level 9, Level 7 or Level 6 of the state’s matrix, and the advertisement sets a minimum age by post: 20 for deputy superintendent of police; 21 for probation officer, assistant planning officer, the Level 7 field posts from municipal executive officer to block scheduled caste and tribe welfare officer, and the child development and protection officers; 22 for the other Level 9 posts, the block minority welfare officer and the financial administrative officer. Sub-inspectors and constables are recruited by other bodies and are on their own pages; the commission’s post-specific rounds outside this examination are on the specialist page.',
    },
    {
      type: 'list',
      title: 'What changed in the 72nd cycle',
      items: [
        { text: 'A fifth answer option', note: 'every multiple-choice question offers A to E, and a candidate who does not attempt a question must mark E; a question left with no option marked is penalised a third of a mark like a wrong answer, under the commission’s notice of 2 May 2026 for all its objective examinations.' },
        { text: 'A flat fee', note: '₹100 for every candidate under the state’s resolution of 21 August 2025, paid separately for each of the four examinations applied for — the combined examination, child development project officer, financial administrative officer and sub-divisional protection officer; the 70th charged ₹600, or ₹150 for Bihar’s SC, ST, women and PwD candidates.' },
        { text: 'A women-only cadre', note: '101 sub-divisional protection officer posts of the social welfare department, filled through the integrated mains with psychology or law as the optional.' },
        { text: 'Three corrigenda', note: '44 sugarcane officer posts deleted on 6 May 2026; sub-registrar posts raised from three to six on 27 May, for a total of 1,189; deputy superintendent posts cut from 22 to 20 on 3 September, for a total of 1,187.' },
      ],
    },
    {
      type: 'note',
      title: 'Where the 72nd preliminary stands',
      text: 'The commission’s programme of 10 July 2026 fixed the preliminary for Sunday 26 July 2026 from 12 noon to 2 pm. A notice of 18 July postponed it for unavoidable reasons and said the new date would follow. The examination calendar revised on 14 August lists 25 October 2026 and marks every date tentative; no separate notice of the new date had been published by the date checked, and the admit card notice, when it comes, will be on the commission’s home page.',
    },
  ],
  stages: [
    {
      name: 'Application through One Time Registration',
      mode: 'Online at bpsconline.bihar.gov.in; ₹100 per examination',
      detail:
        'The commission’s portal requires a one-time registration before any application, and the 72nd window ran from 7 to 31 May 2026. Certificates are uploaded as PDFs, a webcam photograph is captured in the form, and candidates for the child development, financial administrative or protection officer posts choose them at application or forfeit the claim. Every certificate must bear a date on or before the closing date.',
    },
    {
      name: 'Preliminary examination',
      mode: 'Objective; general studies; 150 marks; two hours; qualifying',
      detail:
        'One paper of general studies with a third of a mark off for each wrong or unmarked answer. It only screens: ten times the vacancies are called to the mains at a common cut-off by category, subject to minimums of 40, 36.5, 34 and 32 per cent for the unreserved, BC, EBC and SC, ST, women and PwD. The 71st cut the unreserved at 88 of 150 and the 70th qualified 21,581 of 3,28,990.',
    },
    {
      name: 'Main written examination',
      mode: 'Descriptive; four counted papers of 900 marks plus two qualifying',
      detail:
        'A separate application and fee after the preliminary result. General Hindi of 100 marks is qualifying at 30 per cent. General studies papers I and II and an essay carry 300 marks each in three hours, and an optional subject from a list of 34 is a two-hour objective paper of 100 marks that must be passed but is not counted. For the child development, financial administrative and protection officer posts the optional is a descriptive paper of 300 marks that replaces the essay in the count. Two and a half times the vacancies are called to interview.',
    },
    {
      name: 'Interview and medical board',
      mode: '120 marks; ₹16 medical fee; compulsory',
      detail:
        'A personality test of 120 marks that a candidate must attend to be placed on the merit list, followed by a medical board at the commission. The 70th interviewed 5,354 of 5,401 called between 21 January and 10 April 2026. Deputy superintendent candidates are measured against the police service’s height and chest standards in the advertisement’s appendix.',
    },
    {
      name: 'Merit list and allotment',
      mode: '1,020 marks; service preference recorded at the mains application',
      detail:
        'Merit is the 900 counted mains marks plus the interview. Ties go to the higher mains total, then the higher optional for the three separate posts, then the older candidate, then Devanagari alphabetical order. Services are allotted by rank against the preference order given in the mains form and the reservation roster, and the commission publishes the recommendation list, cut-offs and then marksheets as PDFs.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. The 72nd preliminary, postponed from 26 July 2026, is on the calendar for 25 October with no fresh notice yet; the posts stand at 1,187 after the corrigendum of 3 September 2026. The 71st mains, written from 25 to 29 April 2026, had its unevaluated answer booklets opened to candidates from 24 to 29 August, and the calendar puts the result in August or September 2026, with interviews to follow. The 70th cycle closed with its final result on 20 June 2026 and marksheets on 20 July.`,
    },
    {
      type: 'table',
      caption: 'The 72nd cycle’s documents, from the commission’s feed.',
      head: ['Date', 'Document', 'What it did'],
      rows: [
        ['5 May 2026', 'Notice and advertisement', '1,230 posts — 1,077 in the first table and 153 in the second; applications 7 to 31 May; examination expected in July'],
        ['2 May 2026', 'Notice on answer option E', 'Five options in every objective paper; unmarked questions penalised like wrong ones'],
        ['6 May 2026', 'Corrigendum', '44 sugarcane officer posts deleted'],
        ['27 May 2026', 'Corrigendum', 'Sub-registrar posts raised from 3 to 6; total 1,189'],
        ['10 July 2026', 'Examination programme', 'Preliminary on Sunday 26 July 2026, 12 noon to 2 pm'],
        ['18 July 2026', 'Notice', 'Preliminary postponed for unavoidable reasons; new date to follow'],
        ['14 August 2026', 'Examination calendar', 'Preliminary 25 October 2026, tentative; 1,189 posts listed'],
        ['3 September 2026', 'Corrigendum', 'Deputy superintendent posts cut from 22 to 20; total 1,187'],
      ],
    },
    {
      type: 'table',
      caption: 'The 71st cycle so far.',
      head: ['Date', 'Event', 'Detail'],
      rows: [
        ['30 May 2025', 'Advertisement', '1,250 posts — 502 cooperative extension officers, 459 block minority welfare officers, 100 sub-divisional officers, 79 financial administrative officers, 45 revenue officers and smaller cadres; applications 2 to 30 June'],
        ['18 and 26 June 2025', 'Corrigenda', '14 deputy superintendent posts added, then 34 more posts; total 1,298'],
        ['4 July 2025', 'Revised dates', 'Preliminary moved to 13 September 2025, swapping with the assistant section officer preliminary'],
        ['13 September 2025', 'Preliminary', '912 centres in 37 districts; 3,16,905 appeared; provisional key 19 September; final key 31 October'],
        ['18 November 2025', 'Preliminary result', '13,368 qualified — 5,970 unreserved, 1,376 EWS, 1,752 SC, 97 ST, 2,098 EBC, 1,711 BC, 364 BC women; separate list for financial administrative officer'],
        ['1 December 2025', 'Mains advertisement', 'Applications 3 to 24 December 2025'],
        ['25 to 29 April 2026', 'Mains', 'General Hindi and essay on the 25th; general studies I on the 27th; general studies II on the 28th; optional on the 29th; financial administrative officer optional on the 30th'],
        ['22 August 2026', 'Notice', 'Unevaluated answer booklets viewable from 24 to 29 August'],
        ['—', 'Mains result', 'August to September 2026 on the calendar; interviews and final result to follow'],
      ],
    },
    {
      type: 'table',
      caption: 'The 70th cycle, complete.',
      head: ['Date', 'Event', 'Detail'],
      rows: [
        ['23 September 2024', 'Advertisement', '1,957 posts, later 2,035 on the calendar and 2,017 at the final result; applications 28 September to 18 October'],
        ['13 December 2024', 'Preliminary', '912 centres; one Patna centre’s paper cancelled after a disruption and re-held on 4 January 2025 at 22 centres; the commission declined a statewide re-examination in a press release of 28 December'],
        ['23 January 2025', 'Preliminary result', '21,581 qualified of 3,28,990'],
        ['25 to 30 April 2025', 'Mains', 'In Patna; 20,034 appeared'],
        ['16 December 2025', 'Mains result', '5,401 called to interview; unreserved written cut-off 445 of 900'],
        ['21 January to 10 April 2026', 'Interviews', 'Two phases; 5,354 appeared, 47 absent; 53 candidatures cancelled and 2 withheld'],
        ['20 June 2026', 'Final result', '2,009 recommended against 2,017 posts, 8 kept vacant for want of deaf-mute candidates; unreserved cut-off 528 of 1,020'],
        ['20 July 2026', 'Marksheets', 'Published on the commission’s site'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'BPSC — home and notices', href: BPSC.home },
        { label: 'BPSC — examination calendar, 14 August 2026', href: BPSC.calendar },
        { label: '72nd CCE — advertisement, 5 May 2026', href: BR_CCE_SRC.advt72 },
        { label: '72nd CCE — postponement notice, 18 July 2026', href: BR_CCE_SRC.postponed72 },
        { label: '72nd CCE — corrigendum, 3 September 2026', href: BR_CCE_SRC.dsp72 },
        { label: '71st CCE — preliminary result, 18 November 2025', href: BR_CCE_SRC.preResult71 },
        { label: '70th CCE — final result, 20 June 2026', href: BR_CCE_SRC.final70 },
        { label: 'BPSC — online application portal', href: BR_CCE_SRC.portal },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'From the 72nd advertisement of 5 May 2026; age is reckoned on 1 August 2026.',
      head: ['Condition', 'Rule'],
      rows: [
        ['Qualification', 'A bachelor’s degree from a recognised university, or its equivalent, for the combined examination. Child development project officer: a degree, with home science, psychology, sociology or labour and social welfare as the mains optional. Financial administrative officer: a degree in commerce, economics, mathematics or statistics. Sub-divisional protection officer: a degree in psychology or law, with one of them as the optional.'],
        ['Minimum age', '20 for deputy superintendent of police; 21 for probation officer, assistant planning officer, the Level 7 cadres — municipal executive officer, rural development officer, revenue officer, block panchayat raj officer, cooperative extension officer, labour enforcement officer, supply inspector, block scheduled caste and tribe welfare officer — and the child development and protection officers; 22 for the other posts, including block minority welfare officer and the financial administrative officer.'],
        ['Maximum age', '37 for unreserved men; 40 for unreserved women and for BC and EBC men and women; 42 for SC and ST. Ten more for PwD; five for Bihar government servants; three plus service rendered for ex-servicemen, to 57.'],
        ['Attempts', 'No limit since the state abolished it in 2003, except that Bihar government servants have five attempts across the commission’s examinations under the resolution of 12 December 2022.'],
        ['Reservation', 'Caste, EWS, the 35 per cent women’s quota, the 2 per cent for grandchildren of freedom fighters and the 4 per cent for benchmark disability, for permanent residents of Bihar only; candidates from other states compete as unreserved. Married women claim on a certificate in their father’s name.'],
        ['Fee', '₹100 for every candidate, for each of the four examinations applied for; ₹200 more for biometrics where no Aadhaar number is given. Non-refundable.'],
        ['Physical standard', 'Deputy superintendent candidates are measured at the medical board against the police service’s height and chest table in the advertisement’s appendix; all candidates must be found fit by the board.'],
      ],
    },
    {
      type: 'p',
      text: 'The 71st advertisement set the same age limits on 1 August 2025 and the 70th on 1 August 2024, so a candidate who was within the limit in one cycle is within it in the next only if a year has not carried them past it. Certificates are checked against the upload at interview, and a certificate issued after the application closing date is not accepted.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The scheme in the 72nd advertisement; the 71st mains follows the same papers.',
      head: ['Stage', 'Paper', 'Marks', 'Time', 'Counts?'],
      rows: [
        ['Preliminary', 'General studies — objective, five options', '150', '2 hours', 'No — screens ten times the vacancies'],
        ['Mains', 'General Hindi', '100', '3 hours', 'No — 30 per cent to qualify'],
        ['Mains', 'General studies paper I', '300', '3 hours', 'Yes'],
        ['Mains', 'General studies paper II', '300', '3 hours', 'Yes'],
        ['Mains', 'Essay', '300', '3 hours', 'Yes'],
        ['Mains', 'Optional subject — objective, one of 34', '100', '2 hours', 'No — the state minimum to qualify'],
        ['Mains, separate posts', 'Optional subject — descriptive, in place of the essay', '300', '3 hours', 'Yes'],
        ['Interview', 'Personality test', '120', '—', 'Yes'],
        ['Total', 'Counted marks', '1,020', '', ''],
      ],
    },
    {
      type: 'table',
      caption: 'Marking and thresholds.',
      head: ['Rule', 'Detail'],
      rows: [
        ['Negative marking', 'A third of a mark for each wrong answer in the preliminary, and the same for a question with no option marked; option E is the way to leave a question unanswered.'],
        ['Preliminary minimums', '40 per cent unreserved; 36.5 BC; 34 EBC; 32 SC, ST, women and PwD — a candidate below the minimum is out regardless of the cut-off.'],
        ['Mains minimums', 'The same percentages across the mains, with General Hindi at 30 per cent.'],
        ['Calls', 'Ten times the vacancies to the mains; two and a half times to the interview; every candidate at a common cut-off called.'],
        ['Language', 'Question papers in Hindi and English; answers in Hindi, English or Urdu, in one language throughout, with technical terms allowed in English.'],
        ['Optional subjects', 'Agriculture, animal husbandry and veterinary science, anthropology, botany, chemistry, civil engineering, commerce and accountancy, economics, electrical engineering, geography, geology, history, labour and social welfare, law, management, mathematics, mechanical engineering, philosophy, physics, political science and international relations, psychology, public administration, sociology, statistics, zoology, and the literature of Hindi, English, Urdu, Bengali, Sanskrit, Persian, Arabic, Pali and Maithili.'],
      ],
    },
    {
      type: 'note',
      title: 'The preliminary syllabus as the advertisement states it',
      text: 'General science; current events of national and international importance; the history of India and the salient features of Bihar’s history; general geography and the geographical divisions of Bihar with its major rivers; India’s polity and economy and the principal changes in Bihar’s economy since independence; the national movement and Bihar’s part in it; and general mental ability. The mains syllabus is on the commission’s syllabus page by paper.',
    },
    CONFIRM_NOTE,
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s notice and advertisement of 5 May 2026 for the 72nd examination, read page by page, its three corrigenda and its programme and postponement notices; the 71st notice and advertisement of 30 May 2025, the revised-date notice of 4 July, the preliminary result of 18 November 2025, the mains notice of 1 December 2025 and the mains programme of 23 March 2026; the 70th preliminary result of 23 January 2025, mains result of 16 December 2025, interview programmes and final result of 20 June 2026; the examination calendar of 14 August 2026; and the commission’s notice and results feed. Every document is a scanned PDF; figures were cross-checked against the totals each document prints. The 25 October 2026 date is the calendar’s and is marked tentative there.`,
    },
    {
      type: 'links',
      title: 'Official documents',
      items: [
        { label: '72nd CCE — notice, 5 May 2026', href: BR_CCE_SRC.notice72 },
        { label: '72nd CCE — advertisement, 5 May 2026', href: BR_CCE_SRC.advt72 },
        { label: '72nd CCE — sugarcane officer corrigendum, 6 May 2026', href: BR_CCE_SRC.sugarcane72 },
        { label: '72nd CCE — sub-registrar corrigendum, 27 May 2026', href: BR_CCE_SRC.subRegistrar72 },
        { label: '72nd CCE — deputy superintendent corrigendum, 3 September 2026', href: BR_CCE_SRC.dsp72 },
        { label: '72nd CCE — examination programme, 10 July 2026', href: BR_CCE_SRC.program72 },
        { label: '72nd CCE — postponement, 18 July 2026', href: BR_CCE_SRC.postponed72 },
        { label: 'BPSC — notice on answer option E, 2 May 2026', href: BR_CCE_SRC.optionE },
        { label: '71st CCE — notice and advertisement, 30 May 2025', href: BR_CCE_SRC.advt71 },
        { label: '71st CCE — revised dates, 4 July 2025', href: BR_CCE_SRC.revised71 },
        { label: '71st CCE — preliminary result, 18 November 2025', href: BR_CCE_SRC.preResult71 },
        { label: '71st CCE — mains advertisement, 1 December 2025', href: BR_CCE_SRC.mainsAdvt71 },
        { label: '71st CCE — mains programme, 23 March 2026', href: BR_CCE_SRC.mainsProgram71 },
        { label: '70th CCE — preliminary result, 23 January 2025', href: BR_CCE_SRC.preResult70 },
        { label: '70th CCE — mains result, 16 December 2025', href: BR_CCE_SRC.mainsResult70 },
        { label: '70th CCE — final result, 20 June 2026', href: BR_CCE_SRC.final70 },
        { label: 'BPSC — examination calendar, 14 August 2026', href: BPSC.calendar },
        { label: 'BPSC — syllabus', href: BPSC.syllabus },
        { label: 'BPSC — question booklets', href: BPSC.booklets },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'BPSC CCE syllabus — the preliminary general studies topics as the 72nd advertisement states them, the four mains papers, and the 34 optional subjects.',
      lead: [
        'One general studies paper with Bihar woven through it, then two general studies papers, an essay and a qualifying optional.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Preliminary — general studies',
              'General science; national and international current events; Indian history with the salient features of Bihar’s; general geography and Bihar’s geographical divisions and rivers; Indian polity and economy with the changes in Bihar’s economy since independence; the national movement and Bihar’s role; general mental ability.',
            ],
            [
              'Mains — General Hindi',
              'Essay, grammar, syntax and summary at matriculation level; qualifying at 30 per cent and not counted.',
            ],
            [
              'Mains — general studies I',
              'Modern Indian history and culture with Bihar’s role in the national movement and the Santhal, Birsa and Champaran movements; current events; statistical analysis, graphs and diagrams.',
            ],
            [
              'Mains — general studies II',
              'Indian polity, the Indian economy and Indian geography with Bihar’s polity, economy and geography; the role and impact of science and technology in India’s development, with Bihar in view.',
            ],
            [
              'Mains — essay',
              'Essays in Hindi or English on given topics, 300 marks, counted in full.',
            ],
            [
              'Mains — optional',
              'One of 34 subjects as a two-hour objective paper of 100 marks that qualifies but does not count; for the child development, financial administrative and protection officer posts, a descriptive paper of 300 marks in the post’s listed subjects that replaces the essay in the count.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Where the detail is',
          text: 'The advertisement states the preliminary topics and the scheme; the paper-wise mains syllabus is on the commission’s syllabus page, and the general studies I and II headings above are from that scheme as it has stood across recent cycles. The essay and optional papers have no topic list beyond the subject.',
        },
        {
          type: 'links',
          title: 'Syllabus pages',
          items: [
            { label: 'BPSC — syllabus', href: BPSC.syllabus },
            { label: '72nd CCE — advertisement with the scheme', href: BR_CCE_SRC.advt72 },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'BPSC CCE exam pattern — the 150-mark preliminary with option E and a third off, the 900-mark counted mains, the 120-mark interview, and the 1,020 total.',
      lead: [
        'Two hours that only screen, four papers that decide, and an interview worth just under an eighth.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'How the 1,020 marks fall.',
          head: ['Component', 'Marks', 'Share of merit'],
          rows: [
            ['General studies paper I', '300', '29.4 per cent'],
            ['General studies paper II', '300', '29.4 per cent'],
            ['Essay, or the descriptive optional for the separate posts', '300', '29.4 per cent'],
            ['Interview', '120', '11.8 per cent'],
            ['Preliminary, General Hindi, objective optional', '—', 'Qualifying only'],
          ],
        },
        {
          type: 'table',
          caption: 'What the recent cut-offs looked like.',
          head: ['Cycle', 'Stage', 'Unreserved', 'Unreserved women', 'EWS', 'BC', 'EBC', 'SC', 'ST'],
          rows: [
            ['71st', 'Preliminary, of 150', '88', '78', '82.33', '84', '81', '72', '71.33'],
            ['70th', 'Mains written, of 900', '445', '444', '428', '430', '420', '396', '403'],
            ['70th', 'Final, of 1,020', '528', '521', '528', '528', '523', '493', '508'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'BPSC CCE previous year papers — the 71st preliminary paper and final key of 2025, the 70th papers of 2024 and 2025, and where the commission publishes booklets.',
      lead: [
        'The commission publishes the preliminary booklet, a provisional key for objections and a final key for every cycle.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: '71st preliminary, 13 September 2025', note: 'the general studies paper with its provisional key of 19 September and final key of 31 October 2025; the cut-offs above were set on that key.' },
            { text: '70th preliminary, 13 December 2024', note: 'and the re-examination of 4 January 2025, with provisional and final keys in January 2025.' },
            { text: 'Earlier cycles and mains papers', note: 'the commission’s question booklet page lists papers by examination and year, the mains papers among them.' },
            { text: 'Mains answer booklets', note: 'candidates’ own unevaluated booklets are opened for a week after the mains — 24 to 29 August 2026 for the 71st — and evaluated booklets after the result.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'BPSC — question booklets', href: BPSC.booklets },
            { label: '71st CCE — final answer key, 31 October 2025', href: BR_CCE_SRC.finalKey71 },
            { label: '71st CCE — provisional key, 19 September 2025', href: BR_CCE_SRC.provisionalKey71 },
            { label: 'State PSC mock tests', to: '/mock-tests/state-psc/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'BPSC CCE mock tests — a two-hour general studies paper scored with a third off and option E, timed essay and general studies writing, and where to set the bar.',
      lead: [
        'Score every preliminary mock against the 71st cut-offs, and every mains mock against the 70th’s 445.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'Preliminary mocks with the penalty', text: 'Two hours, a third off for wrong and blank answers, and a decision rule for when to mark E; the unreserved cut-off was 88 of 150 in the 71st, and the category minimums of 32 to 40 per cent bind first.' },
            { title: 'General studies I and II in three hours each', text: 'Twenty-odd answers in the commission’s word limits, with the Bihar-specific questions on the freedom movement, economy and geography drafted in advance.' },
            { title: 'The essay', text: 'Three hours for the paper; practise choosing topics you can structure, since it counts the same 300 as each general studies paper.' },
            { title: 'The optional as a pass', text: 'A 100-question objective paper in two hours; enough to clear the state minimum without stealing time from the counted papers.' },
            { title: 'Hindi once a fortnight', text: 'Thirty per cent qualifies; a candidate from a non-Hindi board should check that early.' },
          ],
        },
        {
          type: 'links',
          title: 'Start with',
          items: [
            { label: 'State PSC mock tests', to: '/mock-tests/state-psc/' },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Topic and sectional practice', to: '/practice/' },
          ],
        },
      ],
    },
    preparation: {
      description:
        'BPSC CCE preparation — using the overlap of three cycles, Bihar-weighted general studies, the switch to descriptive writing, and the documents to keep ready.',
      lead: [
        'With a preliminary in October and a mains result pending, the next twelve months hold every stage of the examination.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From the preliminary to the recommendation',
          items: [
            { title: 'Read the advertisement and the calendar together', text: 'The 72nd advertisement fixes posts, age and scheme; the calendar of 14 August 2026 gives the preliminary as 25 October and marks it tentative; the home page carries the notice that will confirm it.' },
            { title: 'Build general studies with Bihar in it', text: 'The preliminary names Bihar’s history, geography, rivers, economy since independence and role in the national movement; the mains papers repeat the emphasis. A standard general studies base plus a Bihar-specific book covers both.' },
            { title: 'Practise with the penalty and option E', text: 'The 72nd is the first cycle advertised under the option E rule, so a blank question costs a third of a mark unless E is marked; drill the habit in every mock.' },
            { title: 'Start writing before the preliminary result', text: 'Ten times the vacancies go through, and the mains has followed the preliminary result by three to five months in the last two cycles — 23 January to 25 April in the 70th, 18 November to 25 April in the 71st. Answer-writing for general studies I and II and the essay is the whole of the counted marks.' },
            { title: 'Choose the optional for a pass, and the post for a career', text: 'The objective optional only qualifies; pick the subject you can clear with least reading. The service preference recorded in the mains form cannot be changed afterwards.' },
            { title: 'Keep the certificates dated', text: 'Every certificate must be issued by the application closing date, and the upload is what the interview board checks against the original.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'BPSC CCE study material — a general studies base with Bihar-specific reading, Hindi grammar, essay practice, and the optional at pass level.',
      lead: [
        'A standard civil services base, one Bihar book read twice, and a year of current affairs.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['Preliminary general studies', 'NCERT history, geography, polity, economy and science; a Bihar general knowledge book covering history, geography, rivers, economy and the freedom movement; a year of current affairs; a reasoning primer', 'Bihar questions recur in every cycle; the general mental ability section is short.'],
            ['General studies I', 'Modern Indian history with Bihar’s movements — Champaran, the Santhal and Birsa risings, Quit India in Bihar; a current affairs compilation; a statistics primer for graphs and tables', 'The statistical questions are a fixed part of the paper.'],
            ['General studies II', 'Indian polity, the Indian economy and Indian geography with Bihar chapters; a science and technology reader', 'Bihar’s polity, economy and geography are named in the syllabus.'],
            ['Essay', 'Editorials; a collection of past essay topics from the booklets page', 'Practise structure over vocabulary.'],
            ['General Hindi', 'A class 10 Hindi grammar', 'Thirty per cent qualifies.'],
            ['Optional', 'A revision guide at graduate level in the chosen subject', 'Objective and qualifying; descriptive and counted for the three separate posts.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'BPSC specialist recruitment', to: '/government-exams/state/bihar/bpsc-specialist/' },
            { label: 'BSSC Graduate Level', to: '/government-exams/state/bihar/bssc-graduate-level/' },
            { label: 'Bihar Police Sub-Inspector', to: '/government-exams/state/bihar/police-si/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'When is the 72nd BPSC prelims?',
      a: 'Not fixed. The commission’s programme of 10 July 2026 set it for Sunday 26 July 2026, and a notice of 18 July postponed it for unavoidable reasons with the new date to follow. The examination calendar revised on 14 August 2026 lists 25 October 2026 and marks all its dates tentative; no separate notice of the new date had been published at the date checked.',
    },
    {
      q: 'How many posts are in the 72nd BPSC CCE?',
      a: '1,187. The advertisement of 5 May 2026 listed 1,230 — 1,077 in the first table and 153 child development, financial administrative and sub-divisional protection officer posts in the second. A corrigendum of 6 May deleted 44 sugarcane officer posts, one of 27 May raised sub-registrar posts from three to six for a total of 1,189, and one of 3 September 2026 cut deputy superintendent of police posts from 22 to 20 for a total of 1,187. The largest cadres are 365 revenue officers, 130 cooperative extension officers and 100 sub-divisional officers.',
    },
    {
      q: 'When will the 71st BPSC mains result be published?',
      a: 'The calendar of 14 August 2026 puts it in August or September 2026. The mains was written from 25 to 29 April 2026 by candidates from the 13,368 who cleared the preliminary of 13 September 2025, and unevaluated answer booklets were opened to candidates from 24 to 29 August. Interviews follow the result; two and a half times the 1,298 vacancies are called.',
    },
    {
      q: 'What was the 70th BPSC final result?',
      a: 'Published on 20 June 2026: 2,009 candidates recommended against 2,017 posts, with eight kept vacant for want of deaf-mute candidates. Of the 5,401 called to interview from the mains result of 16 December 2025, 5,354 appeared between 21 January and 10 April 2026. The unreserved cut-off was 528 of 1,020 at the final stage and 445 of 900 in the mains; marksheets followed on 20 July 2026.',
    },
    {
      q: 'What is the BPSC CCE exam pattern?',
      a: 'A preliminary of general studies, 150 marks in two hours, objective, qualifying only, with ten times the vacancies going through. A mains of General Hindi at 100 marks qualifying at 30 per cent, general studies I and II at 300 each, an essay at 300 and an objective optional of 100 marks that qualifies but is not counted. An interview of 120 marks. Merit is 900 plus 120, or 1,020. For the child development, financial administrative and protection officer posts a descriptive optional of 300 marks replaces the essay.',
    },
    {
      q: 'Is there negative marking in the BPSC prelims?',
      a: 'Yes — a third of a mark for every wrong answer. From the 72nd cycle every question has five options, A to E, and a candidate who does not want to attempt a question must mark E; a question with no option marked is penalised a third of a mark like a wrong one, under the commission’s notice of 2 May 2026.',
    },
    {
      q: 'What was the BPSC 71st prelims cut-off?',
      a: 'Of 150: 88 unreserved, 78 unreserved women, 82.33 EWS, 84 BC, 81 EBC, 72 SC, 71.33 ST, 71.67 BC women, and 48 to 68.33 for the disability categories. 13,368 candidates qualified of 3,16,905 who appeared on 13 September 2025, by the result of 18 November 2025.',
    },
    {
      q: 'What is the age limit and fee for BPSC CCE?',
      a: 'On 1 August 2026 for the 72nd: a minimum of 20 for deputy superintendent of police, 21 for the Level 7 field cadres, probation and planning officers and the child development and protection officers, and 22 for the other posts; a maximum of 37 for unreserved men, 40 for unreserved women and BC and EBC candidates, and 42 for SC and ST, with ten more for PwD and five for Bihar government servants. There is no limit on attempts except five for state servants. The fee is ₹100 for every candidate for each examination applied for, plus ₹200 for biometrics where no Aadhaar is given.',
    },
    {
      q: 'Can candidates from outside Bihar apply for BPSC CCE?',
      a: 'Yes, with a bachelor’s degree, but reservation by caste, EWS, the women’s quota, disability and freedom fighter descent is for permanent residents of Bihar only; a candidate from another state competes as unreserved with the unreserved age limit.',
    },
  ],
}

/* ── BPSC specialist recruitment ────────────────────────────────
   The commission's post-specific recruitments outside the Combined
   Competitive Examination — one-, two- and three-stage as each cadre's
   rules provide — as its examination calendar of 14 August 2026 lists
   them: fifty rows from the 300-post prosecution officer round with its
   result due this month to the 1,711 medical college assistant professor
   posts awaiting the department's direction. Figures are from the calendar
   and the commission's advertisement feed. */
const BR_SPECIALIST = {
  slug: 'bpsc-specialist',
  path: '/government-exams/state/bihar/bpsc-specialist/',
  name: 'BPSC Specialist Recruitment',
  fullName: 'Bihar Public Service Commission — post-specific recruitments outside the Combined Competitive Examination',
  authority: 'Bihar Public Service Commission (BPSC), Patna',
  official: OFFICIAL,
  seoTitle: 'BPSC Specialist Recruitment 2026: Every Round on the Calendar and Its Status',
  metaDescription:
    'BPSC specialist recruitments — the 300-post prosecution officer round, the auditor and project manager rounds, 1,711 medical professors, and the calendar.',
  lead: [
    'Beyond the Combined Competitive Examination and the teacher and engineer rounds, the Bihar Public Service Commission recruits post by post for the departments that requisition it — prosecution officers, auditors, statistical officers, lecturers and professors, inspectors of factories and boilers, town planners, sports officers and the judicial service. Each recruitment follows its own cadre rules: three stages of preliminary, mains and interview for the gazetted competitive posts; a written examination and interview for most technical and academic posts; a preliminary and mains without interview for the clerical grades; and an interview alone, on qualifications, for the medical and professorial cadres.',
    'The commission publishes one document that holds the whole programme: an examination calendar, revised through the year and marked tentative, that lists every pending recruitment with its advertisement number, posts, dates and status. The edition of 14 August 2026 runs to fifty rows. It shows a prosecution officer round of 300 posts examined on 15 July with its result due in September, an auditor round of 102 and a research officer round of 3 examined in July with results due in August, a project manager round of 9 examined on 4 October, the 33rd judicial services round of 173 stayed by the Supreme Court, 1,711 assistant professor posts in the medical colleges awaiting the department’s direction, and several rounds held up by insufficient applications or correspondence over the number of stages.',
  ],
  quickFacts: [
    ['Conducted by', 'Bihar Public Service Commission, under each cadre’s rules'],
    ['The programme', 'The examination calendar of 14 August 2026 — fifty rows, all dates tentative'],
    ['Results due', 'Prosecution officer, 300 posts — September 2026; district statistical officer interviews — September; auditor and research officer results — August'],
    ['Scheduled', 'Project manager, industries — written 4 October 2026; assistant conservator of forests — 25 to 30 November 2026; assistant state forensic officer — interview January 2027'],
    ['Stayed or held', '33rd judicial services, 173 posts — Supreme Court stay; medical college assistant professors, 1,711 — department’s direction awaited; consumer commission members — Supreme Court order awaited'],
    ['Fee', '₹100 for every candidate in advertisements since August 2025; ₹750 and ₹200 before'],
  ],
  overview: [
    {
      type: 'p',
      text: 'The three-stage rounds sit with the Combined Competitive Examinations at the head of the calendar. The prosecution officer round, Advt 13/2026 for 300 posts, held its preliminary on 15 July 2026 with the result due in September; the auditor round for the panchayati raj department, Advt 09/2026 for 102 posts, and the research officer round for the revenue department, Advt 08/2026 for 3, held theirs on 5 and 15 July with results due in August; the project manager round for the industries department, Advt 109/2025 for 9 posts, is examined on 4 October 2026; and the 33rd Bihar judicial services round, Advt 12/2026 for 173 posts, examined on 30 May 2026, is under stay orders from the Supreme Court. The district statistical officer and assistant director round, Advt 38/2025 for 47 posts, has passed its preliminary of 3 August 2025 and its mains of January 2026 and interviews in September 2026; the lower division clerk round, Advt 43/2025 for 26 posts, awaits a typing test.',
    },
    {
      type: 'p',
      text: 'The two-stage written-and-interview rounds are the technical and academic cadres. The motor vehicle inspector round, Advt 41/2025 for 28 posts, examined on 9 and 10 August 2025, and the mineral development officer, ITI vice-principal and pollution control board rounds of 2025 have all published their final results after interviews in January and February 2026; the assistant environmental scientist round of 17 posts was examined on 23 April 2026 with its result due in August; the district sports officer round of 33 was examined in January with a result due in September; the commission’s own stenographer round of 15 was examined on 9 May; and the assistant conservator of forests round, Advt 02/2026 for 12 posts, is examined from 25 to 30 November 2026. The consumer commission judicial members and presidents, 57 posts examined in May 2025 and interviewed in January 2026, await a direction from the department in the light of a Supreme Court order.',
    },
    {
      type: 'list',
      title: 'The other kinds of round on the calendar',
      items: [
        { text: 'Preliminary and mains without interview', note: 'the assistant section officer round, Advt 37/2025 for 41 posts — preliminary 10 September 2025, result December, mains February 2026, verification list published; the assistant education development officer round of 935 posts and TRE 4.0 of 32,388, both to be dated.' },
        { text: 'Interview only', note: 'the medical, ayurvedic, unani and homoeopathic college assistant professors — 1,711, 88, 15 and 13 posts — the technical education department’s 241 heads of department, 169 professors and 455 associate professors, the boiler and factory inspectors and the fire officers, all at document verification or awaiting the department, with the two fire officer rounds recording insufficient applications.' },
        { text: 'Written only', note: 'the assistant engineer rounds; the special teacher round of 7,279 with its portal reopened for choices; the assistant town planner, sanitary officer and town planning supervisor rounds of 36, 60 and 36 posts, each in correspondence with the department over a two-stage examination; and two rounds of 285 revenue and urban welfare posts postponed by their departments.' },
        { text: 'Published and closed', note: 'the physics assistant professor round of 2020, the curator round, and the mining engineering lecturer round of 2024, each with a final result the calendar records as published.' },
      ],
    },
    {
      type: 'note',
      title: 'How to read the commission’s calendar',
      text: 'The calendar states that all dates are tentative and marks undetermined ones “TBD”. It groups rounds by the number of stages, gives the advertisement number and the posts, and carries the status in the remarks — “published”, “stay orders”, “document verification in progress”, “insufficient applications”, “postponed by department”, “correspondence with the department for two-stage exam”. It is revised several times a year; the edition of 14 August 2026 superseded one of April. The commission’s advertisement feed carries each round’s advertisement and notices as PDFs, and its question booklet and syllabus pages hold the papers by post.',
    },
  ],
  stages: [
    {
      name: 'Advertisement under the cadre’s rules',
      mode: 'Post-specific; ₹100 since August 2025',
      detail:
        'Each requisition becomes its own advertisement with the qualification, age, reservation and scheme the cadre rules provide, on the commission’s advertisement feed. Fees fell to ₹100 for every candidate under the state’s resolution of 21 August 2025; earlier rounds charged ₹750, or ₹200 for Bihar’s SC, ST, women and PwD.',
    },
    {
      name: 'Written stages as the rules provide',
      mode: 'One to three',
      detail:
        'A preliminary, a mains and an interview for the competitive gazetted posts; a written examination and an interview for the technical and academic cadres; a preliminary and a mains alone for clerical grades; a single written examination for engineers, special teachers and planners. Objective papers carry the commission’s category minimums of 40, 36.5, 34 and 32 per cent.',
    },
    {
      name: 'Interview or verification',
      mode: 'Interview where the rules provide; document verification always',
      detail:
        'Professorial and medical posts are filled on qualifications and interview after verification, sometimes by department experts; several rounds wait at verification for a department’s direction.',
    },
    {
      name: 'Result and recommendation',
      mode: 'Final result on the commission’s site; the calendar updated',
      detail:
        'Final results and recommendation lists are published as PDFs, marks follow, and the calendar records the round as published.',
    },
  ],
  updates: [
    {
      type: 'p',
      text: `Checked ${CHECKED}. From the calendar of 14 August 2026 and the commission’s feed: the prosecution officer round’s preliminary result is due in September; the district statistical officer interviews are in September; the auditor and research officer preliminary results were due in August; the project manager written examination is on 4 October; the assistant conservator of forests written examination is from 25 to 30 November; the assistant state forensic officer interviews are in January 2027. The 33rd judicial services round is stayed by the Supreme Court; the consumer commission round awaits a direction after a Supreme Court order; the medical college assistant professors await the department; the two fire officer rounds have insufficient applications; the three town planning rounds are in correspondence over a two-stage examination; and two 285-post revenue and urban welfare rounds are postponed by their departments. The assistant environmental engineer round reached its final result on 3 July 2026, and the calendar’s published rounds include the motor vehicle inspector, mineral development officer, ITI vice-principal, pollution board and mining lecturer rounds.`,
    },
    {
      type: 'table',
      caption: 'Three-stage rounds — preliminary, mains and interview — from the calendar.',
      head: ['Advertisement', 'Post', 'Posts', 'Preliminary', 'Mains', 'Position'],
      rows: [
        ['13/2026', 'Prosecution officer', '300', '15 July 2026', '—', 'Preliminary result September 2026'],
        ['09/2026', 'Auditor, panchayati raj department', '102', '5 July 2026', '—', 'Preliminary result August 2026'],
        ['08/2026', 'Research officer, revenue department', '3', '15 July 2026', '—', 'Preliminary result August 2026'],
        ['109/2025', 'Project manager, industries department', '9', '4 October 2026', '—', 'Scheduled'],
        ['12/2026', '33rd Bihar judicial services', '173', '30 May 2026', '—', 'Stay orders from the Supreme Court'],
        ['38/2025', 'District statistical officer and assistant director', '47', '3 August 2025; result November', 'January 2026; result published', 'Interviews September 2026'],
        ['43/2025', 'Lower division clerk', '26', '20 September 2025; result November', '—', 'Typing test January 2026; final result to be decided'],
        ['29/2024', 'Teachers, Simultala residential school', '62', '16 August 2024; result 6 December 2024', 'To be decided', 'Awaiting the mains'],
      ],
    },
    {
      type: 'table',
      caption: 'Two-stage rounds — written and interview — from the calendar.',
      head: ['Advertisement', 'Post', 'Posts', 'Written', 'Interview', 'Position'],
      rows: [
        ['41/2025', 'Motor vehicle inspector', '28', '9 and 10 August 2025; result November', 'January 2026', 'Published'],
        ['36/2025', 'Mineral development officer', '15', '9 and 10 August 2025; result November', 'January 2026', 'Published'],
        ['40/2025', 'Vice-principal, ITIs', '50', '17 August 2025; result November', 'February 2026', 'Published'],
        ['32 to 35 and 39/2025', 'Pollution control board — junior laboratory assistant 9, law officer 1, assistant environment officer 24, public relations officer 1, system analyst 1', '36', '26 and 27 July 2025; results January 2026', 'February 2026', 'Published'],
        ['88/2025', 'Assistant environmental scientist', '17', '23 April 2026', '—', 'Written result August 2026'],
        ['90/2025', 'District sports officer and assistant director, sports', '33', 'January 2026', '—', 'Written result September 2026; verification by department experts'],
        ['01/2026', 'Stenographer, BPSC', '15', '9 May 2026', '—', 'Written result August 2026'],
        ['02/2026', 'Assistant conservator of forests', '12', '25 to 30 November 2026', '—', 'Scheduled'],
        ['01 to 03/2025', 'Consumer commission judicial members and district presidents and members', '57', '3 to 5 May 2025; result August 2025', 'January 2026', 'Direction awaited after a Supreme Court order'],
      ],
    },
    {
      type: 'table',
      caption: 'Interview-only and written-only rounds — from the calendar.',
      head: ['Advertisement', 'Post', 'Posts', 'Position'],
      rows: [
        ['04 to 28/2025', 'Assistant professor, state medical colleges — specialities', '1,711', 'Interview to be decided; direction from the department awaited'],
        ['44 to 57/2025', 'Assistant professor, government ayurvedic colleges', '88', 'Document verification in progress'],
        ['58 to 67/2025', 'Assistant professor, government Tibbi college', '15', 'Document verification in progress'],
        ['68 to 78/2025', 'Assistant professor, homoeopathic medical college', '13', 'Document verification in progress'],
        ['91 to 107/2025', 'Heads of department, technical education', '241', 'Verification by department experts'],
        ['79 and 80/2025; 81 to 86/2025', 'Professors 169 and associate professors 455, technical education', '624', 'Verification by department experts'],
        ['06/2026; 03/2026', 'Boiler inspector 5; factory inspector 17', '22', 'Factory inspector verification in progress'],
        ['04/2026; 05/2026', 'Additional director and assistant state fire officer 4; deputy director, fire 14', '18', 'Insufficient applications'],
        ['—', 'Assistant state forensic officer', '6', 'Interview January 2027'],
        ['89/2025; 108/2025; 07/2026', 'Assistant town planner 36; assistant public sanitary and waste management officer 60; assistant town planning supervisor 36', '132', 'Correspondence with the department for a two-stage examination'],
        ['—', 'Assistant revenue and accounts officer 285; assistant urban welfare and registration officer 285', '570', 'Postponed by the department'],
        ['—', 'Assistant education development officer', '935', 'Preliminary to be decided'],
      ],
    },
    {
      type: 'links',
      title: 'Check the commission directly',
      items: [
        { label: 'BPSC — home and notices', href: BPSC.home },
        { label: 'BPSC — examination calendar, 14 August 2026', href: BPSC.calendar },
        { label: 'BPSC — advertisements', href: BPSC.advertisements },
        { label: 'BPSC — syllabus', href: BPSC.syllabus },
        { label: 'BPSC — question booklets', href: BPSC.booklets },
      ],
    },
  ],
  eligibility: [
    {
      type: 'table',
      caption: 'The commission’s common conditions, as its 2025 and 2026 advertisements apply them; each round’s advertisement sets the qualification.',
      head: ['Condition', 'Rule'],
      rows: [
        ['Qualification', 'As the cadre rules provide — a law degree and bar enrolment for prosecution officer; commerce, economics, statistics or mathematics for auditor; statistics or mathematics for statistical officer; the discipline’s degree for engineers and planners; postgraduate degrees and NET or Ph.D. for lecturers; MD or MS for medical assistant professors; a forestry or science degree and physical standards for the conservator posts.'],
        ['Age', '21 or 22 minimum by post; 37 for unreserved men, 40 for unreserved women and BC and EBC, 42 for SC and ST, reckoned on 1 August of the year the advertisement fixes; ten more for PwD; five for state servants; three for ex-servicemen.'],
        ['Reservation', 'Caste, EWS, the 35 per cent women’s quota and disability for permanent residents of Bihar; other candidates unreserved.'],
        ['Fee', '₹100 for every candidate in advertisements since the resolution of 21 August 2025; ₹750, or ₹200 for Bihar’s SC, ST, women and PwD, before; ₹200 more for biometrics without Aadhaar.'],
        ['Minimum marks', '40 per cent unreserved; 36.5 BC; 34 EBC; 32 SC, ST, women and PwD, in objective papers.'],
        ['Attempts', 'Five for state servants where the advertisement so provides; otherwise as the cadre rules state.'],
      ],
    },
    {
      type: 'p',
      text: 'Recruitments outside the commission’s own competitive schemes carry weightages the cadre rules provide — five marks a year of contractual service to 25 for engineers, and qualification and experience scores for the professorial posts assessed by department experts at verification. The special teacher round of 7,279 posts is on the teaching page and the engineer rounds on the technical page.',
    },
  ],
  pattern: [
    {
      type: 'table',
      caption: 'The schemes by the calendar’s own grouping.',
      head: ['Group', 'Stages', 'Rounds in it'],
      rows: [
        ['Three-phase', 'Preliminary, mains, interview', 'The Combined Competitive Examinations; prosecution officer; auditor; research officer; project manager; judicial services; statistical officer; lower division clerk with a typing test'],
        ['Two-phase, written and interview', 'Written examination, interview', 'Motor vehicle inspector; mineral development officer; ITI vice-principal; the pollution board posts; environmental scientist; sports officer; stenographer; conservator of forests; consumer commission members'],
        ['Two-phase, preliminary and mains', 'Preliminary, mains; no interview', 'Assistant section officer; assistant education development officer; TRE 4.0'],
        ['One-phase, interview', 'Interview on qualifications after verification', 'Medical, ayurvedic, Tibbi and homoeopathic assistant professors; technical education professors and heads; boiler and factory inspectors; fire officers; forensic officer'],
        ['One-phase, written', 'Written examination', 'Assistant engineers; special teachers; town planners and sanitary officers pending a two-stage decision'],
      ],
    },
    {
      type: 'note',
      title: 'Where the schemes are written',
      text: 'The calendar gives stages and dates; the papers, marks, durations and negative marking are in each advertisement and on the commission’s syllabus page by post. The commission’s objective papers use its standard minimums; the Combined Competitive Examination and, from 2026, the teacher recruitment carry a deduction for wrong answers, while the engineer scheme read carries none. A candidate reads the advertisement for the round applied for.',
    },
  ],
  sources: [
    {
      type: 'p',
      text: `Checked ${CHECKED} against the commission’s examination calendar of 14 August 2026, read page by page, and the advertisement and notice feed on its site as the other Bihar pages record it — the assistant engineer, special teacher, TRE 4.0 and assistant environmental engineer documents among them. The calendar states that its dates are tentative; the posts and statuses are as it prints them, and the qualifications in the eligibility table are the cadre norms the advertisements apply rather than a reading of every advertisement.`,
    },
    {
      type: 'links',
      title: 'Official pages',
      items: [
        { label: 'BPSC — examination calendar, 14 August 2026', href: BPSC.calendar },
        { label: 'BPSC — advertisements', href: BPSC.advertisements },
        { label: 'BPSC — syllabus', href: BPSC.syllabus },
        { label: 'BPSC — question booklets', href: BPSC.booklets },
        { label: 'BPSC — home and notices', href: BPSC.home },
      ],
    },
  ],
  resources: {
    syllabus: {
      description:
        'BPSC specialist recruitment syllabus — where each round’s scheme is published, and the general studies and Hindi papers common to the competitive rounds.',
      lead: [
        'Each advertisement carries its own scheme; the commission’s syllabus page holds them by post.',
      ],
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Competitive gazetted posts — prosecution officer, auditor, research officer, project manager',
              'A general studies preliminary, a mains of general Hindi, general studies and the subject — law for prosecution officers, accounts for auditors — and an interview, as each advertisement sets.',
            ],
            [
              'Technical and academic posts',
              'A written examination in the discipline at the level of the qualification, with general studies where the rules provide, and an interview.',
            ],
            [
              'Clerical grades',
              'General studies and Hindi in a preliminary and mains, with a typing test for lower division clerks.',
            ],
            [
              'Interview-only cadres',
              'Assessed on qualifications, publications and experience under the department’s scoring, with document verification by department experts.',
            ],
          ],
        },
        {
          type: 'links',
          title: 'Syllabus pages',
          items: [
            { label: 'BPSC — syllabus by post', href: BPSC.syllabus },
            { label: 'BPSC — advertisements', href: BPSC.advertisements },
          ],
        },
      ],
    },
    'exam-pattern': {
      description:
        'BPSC specialist recruitment exam pattern — one-, two- and three-stage rounds as the calendar groups them, the common minimums, and negative marking.',
      lead: [
        'Five shapes of recruitment on one calendar.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'The rules across the rounds.',
          head: ['Rule', 'Detail'],
          rows: [
            ['Stages', 'As the cadre rules provide — from an interview alone to preliminary, mains and interview.'],
            ['Minimums', '40, 36.5, 34 and 32 per cent in objective papers.'],
            ['Negative marking', 'Where the advertisement states it — the Combined Competitive Examination and TRE 4.0 carry a third off; the engineer scheme read carries none.'],
            ['Weightage', 'Contractual service for engineers; qualifications for professors.'],
            ['Dates', 'Tentative, by the calendar’s own label.'],
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'previous-year-papers': {
      description:
        'BPSC specialist recruitment previous papers — the commission’s question booklets and final keys by post, from the motor vehicle inspector to the auditor.',
      lead: [
        'The commission publishes booklets and keys for its written rounds on one page, by post and year.',
      ],
      blocks: [
        {
          type: 'list',
          title: 'What is on record',
          items: [
            { text: 'Written rounds of 2025 and 2026', note: 'the motor vehicle inspector, mineral development officer, pollution board, assistant section officer, statistical officer and prosecution officer papers with keys, as the commission published them.' },
            { text: 'The engineer rounds', note: 'booklets and keys of December 2024 and July 2025, on the technical page.' },
            { text: 'The teacher rounds', note: 'booklets and keys of 2023 and 2024, on the teaching page.' },
          ],
        },
        {
          type: 'links',
          title: 'Practise with',
          items: [
            { label: 'BPSC — question booklets', href: BPSC.booklets },
            { label: 'BPSC Combined Competitive Examination', to: '/government-exams/state/bihar/bpsc-combined-competitive/' },
          ],
        },
      ],
    },
    'mock-tests': {
      description:
        'BPSC specialist recruitment mock tests — timed general studies and subject papers to the commission’s category minimums, by the round’s scheme.',
      lead: [
        'Score every objective mock against the category minimum first, then against the post’s likely cut.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'A routine',
          items: [
            { title: 'General studies as the common paper', text: 'The competitive and clerical rounds all set it; the Combined Competitive Examination’s preliminary is the model.' },
            { title: 'The subject at the qualification’s level', text: 'Law for prosecution officers, accounts for auditors, the discipline for inspectors and scientists.' },
            { title: 'The interview', text: 'For the two- and three-stage rounds; the interview-only cadres are scored on the record.' },
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
        'BPSC specialist recruitment preparation — reading the calendar, following a round’s advertisement and feed, and the delays that hold rounds at verification.',
      lead: [
        'The calendar tells you where a round stands; the advertisement tells you what it asks.',
      ],
      blocks: [
        {
          type: 'steps',
          title: 'From calendar to recommendation',
          items: [
            { title: 'Read the calendar first', text: 'Fifty rows with posts, dates and status; revised through the year and labelled tentative.' },
            { title: 'Open the round’s advertisement', text: 'Qualification, age date, scheme and fee differ by cadre; the feed carries each as a PDF.' },
            { title: 'Watch the status column', text: 'Rounds stall at verification, on insufficient applications, in correspondence over stages, on a department’s postponement, or in court.' },
            { title: 'Keep the documents ready', text: 'Verification, sometimes by department experts, is the stage most rounds are at.' },
            { title: 'Follow the results feed', text: 'Final results, recommendation lists and marks are published as PDFs, and the calendar records the round as published.' },
          ],
        },
        CONFIRM_NOTE,
      ],
    },
    'study-material': {
      description:
        'BPSC specialist recruitment study material — Bihar and Indian general studies, Hindi, and the professional texts of each cadre.',
      lead: [
        'General studies with Bihar for every written round; the profession’s texts for the subject.',
      ],
      blocks: [
        {
          type: 'table',
          caption: 'By paper.',
          head: ['Paper', 'What to read', 'Note'],
          rows: [
            ['General studies', 'NCERT general studies; a Bihar history, geography and economy book; a year of current affairs', 'Every written round.'],
            ['General Hindi', 'A standard Hindi grammar', 'Where the scheme sets it, usually qualifying.'],
            ['The subject', 'The bar examination texts for prosecution officers; accounting and audit for auditors; statistics; the Motor Vehicles Act for inspectors; forestry for conservators', 'At the qualification’s level.'],
            ['The interview', 'The department’s work and the post’s duties', 'Where the rules provide one.'],
          ],
        },
        {
          type: 'links',
          title: 'Read next',
          items: [
            { label: 'BPSC Combined Competitive Examination', to: '/government-exams/state/bihar/bpsc-combined-competitive/' },
            { label: 'Bihar teaching recruitment', to: '/government-exams/state/bihar/teaching/' },
            { label: 'Bihar technical posts', to: '/government-exams/state/bihar/technical-posts/' },
            { label: 'Bihar government exams', to: '/government-exams/state/bihar/' },
          ],
        },
      ],
    },
  },
  faqs: [
    {
      q: 'Which BPSC recruitments have results or exams due in late 2026?',
      a: 'By the calendar of 14 August 2026: the prosecution officer preliminary result and the district statistical officer interviews in September; the auditor, research officer, environmental scientist and stenographer results in August; the sports officer result in September; the project manager written examination on 4 October; the 72nd Combined Competitive Examination preliminary on 25 October; the assistant conservator of forests written examination from 25 to 30 November; and the forensic officer interviews in January 2027.',
    },
    {
      q: 'What is the status of the BPSC Prosecution Officer recruitment?',
      a: 'Advertisement 13/2026 for 300 posts held its preliminary on 15 July 2026, and the calendar puts the preliminary result in September 2026, with the mains and interview to follow as a three-stage round.',
    },
    {
      q: 'What is happening with the 33rd Bihar Judicial Services?',
      a: 'Advertisement 12/2026 for 173 posts held its preliminary on 30 May 2026, and the calendar records the round under stay orders from the Supreme Court, with no further date.',
    },
    {
      q: 'When will the medical college assistant professor interviews be held?',
      a: 'The 1,711 posts under advertisements 04 to 28/2025 are to be filled by interview alone, and the calendar records the date as to be decided with the department’s direction awaited. The ayurvedic, Tibbi and homoeopathic college rounds — 88, 15 and 13 posts — are at document verification.',
    },
    {
      q: 'What is the BPSC fee for specialist posts?',
      a: '₹100 for every candidate in advertisements issued since the state’s resolution of 21 August 2025. Earlier rounds charged ₹750, or ₹200 for Bihar’s SC, ST, women and PwD candidates, with ₹200 more for biometrics where Aadhaar was not given.',
    },
    {
      q: 'Why are some BPSC rounds not moving?',
      a: 'The calendar gives the reasons in its remarks: stay orders from the Supreme Court for the judicial services; a direction awaited from the department after a Supreme Court order for the consumer commission posts and from the health department for the medical professors; insufficient applications for the two fire officer rounds; correspondence with the department over whether to hold a two-stage examination for the town planning rounds; and postponement by the department for the 285-post revenue and urban welfare rounds.',
    },
    {
      q: 'Where does BPSC publish its examination calendar?',
      a: 'On its site as a PDF, revised through the year — the edition of 14 August 2026 is the current one — listing every pending recruitment with its advertisement number, posts, dates and status, grouped by the number of stages, and marked tentative throughout.',
    },
    {
      q: 'Which BPSC specialist rounds were completed in 2026?',
      a: 'The calendar records as published the motor vehicle inspector, mineral development officer, ITI vice-principal and pollution control board rounds after interviews in January and February 2026, the mining engineering lecturer round on 6 January 2026, the curator round on 21 March 2026, and the physics assistant professor round of 2020; the commission’s feed adds the assistant environmental engineer final result of 3 July 2026 and the assistant section officer verification list.',
    },
  ],
}

const bihar = [BR_CCE, BR_SPECIALIST, BR_CGL, BR_INTER, BR_CONSTABLE, BR_SI, BR_TEACHING, BR_TECHNICAL]

export default bihar
