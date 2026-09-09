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
    seoTitle: 'SSC CGL 2026: Syllabus, Exam Pattern & Free Mock Tests',
    metaDescription:
      'SSC CGL exam guide — Tier 1 and Tier 2 pattern, section-wise syllabus, eligibility, post list, previous papers and free full-length mock tests.',
    lead: [
      'SSC CGL is the largest graduate-level recruitment in the country, and the reason it attracts several million applicants is the post list: Assistant Section Officer in a central ministry, Inspector in Income Tax or CGST, Assistant Audit Officer under the CAG, Sub-Inspector in the CBI. One exam, one merit list, and the post you get depends on your rank and your preference order.',
      'It is also an exam with an unusually clear shape. Tier 1 is a 60-minute screening test that everybody sits; Tier 2 is where the merit list is actually built. Understanding that split is the single most useful thing a first-time candidate can do, because it changes what you practise and when.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Level', 'Graduate — a bachelor’s degree in any discipline'],
      ['Stages', 'Tier 1 (screening) → Tier 2 (merit) → document verification'],
      ['Mode', 'Computer-based test at SSC centres nationwide'],
      ['Frequency', 'Once a year, with the notification usually early in the cycle'],
      ['Posts filled', 'Group B and Group C posts across ministries, departments and organisations'],
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
        mode: 'Objective, 60 minutes',
        detail:
          'A qualifying screen taken by every applicant. Four sections of 25 questions each — General Intelligence and Reasoning, General Awareness, Quantitative Aptitude and English Comprehension — for 200 marks in an hour. Marks here decide who reaches Tier 2 but do not count towards the final merit list.',
      },
      {
        name: 'Tier 2 — Computer Based Examination',
        mode: 'Objective, multiple sessions',
        detail:
          'The stage that builds the merit list. Paper 1 is compulsory for all posts and runs in modules covering mathematical abilities, reasoning, English, general awareness and computer knowledge, followed by a data entry speed test. Paper 2 (statistics) and Paper 3 (general studies — finance and economics) are taken only by candidates who applied for Junior Statistical Officer and Assistant Audit Officer respectively.',
      },
      {
        name: 'Document verification and medical',
        mode: 'Offline',
        detail:
          'Candidates who clear the written stages are called for verification of educational, category and identity documents. Posts with physical requirements — CBI Sub-Inspector, for instance — add physical and medical standards at this point.',
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
        description:
          'SSC CGL exam pattern — Tier 1 and Tier 2 structure, section-wise marks, timing and how negative marking differs between the stages.',
        lead: [
          'Tier 1 screens, Tier 2 ranks. Both punish wrong answers, but not equally, and the difference should change how you guess.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Tier 1 structure. Confirm marks, timing and the negative marking rate against the current official notification before you sit the paper.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Intelligence and Reasoning', '25', '50', 'Verbal and non-verbal; the fastest section to score in'],
              ['General Awareness', '25', '50', 'Pure recall — you either know it or you move on'],
              ['Quantitative Aptitude', '25', '50', 'Arithmetic-heavy at this stage'],
              ['English Comprehension', '25', '50', 'Grammar and vocabulary rather than long passages'],
              ['Total', '100', '200', '60 minutes for the whole paper'],
            ],
          },
          {
            type: 'p',
            text: 'Sixty minutes for a hundred questions works out to roughly thirty-six seconds each, and that number is the real design constraint of Tier 1. There is no sectional timing, so the paper rewards candidates who bank the reasoning and general awareness sections quickly and spend what is left on quantitative aptitude. Wrong answers carry a deduction of half a mark, which makes a blind guess a losing bet but keeps a two-option guess worth taking.',
          },
          {
            type: 'p',
            text: 'Tier 2 runs as Paper 1 for every candidate, plus Paper 2 or Paper 3 for the two specialist post groups. Paper 1 is delivered in modules across two sessions: a mathematics and reasoning session, then a session covering English and general awareness and a computer knowledge module, followed by a data entry speed test. The computer module and the data entry test are qualifying in nature for most posts rather than merit-counting, but skipping them is not an option.',
          },
          {
            type: 'list',
            title: 'What changes between the two tiers',
            items: [
              { text: 'Marks that count', note: 'Tier 1 decides who advances; only Tier 2 marks build the final merit list.' },
              { text: 'Depth of mathematics', note: 'Tier 1 leans arithmetic; Tier 2 brings algebra, geometry, trigonometry and mensuration properly into play.' },
              { text: 'Negative marking', note: 'The deduction differs between Tier 1 and the Tier 2 modules — check the notification, because the guessing arithmetic changes with it.' },
              { text: 'Sectional timing', note: 'Tier 1 is one open hour; Tier 2 modules are separately timed, so you cannot borrow minutes from a section you find easy.' },
            ],
          },
          {
            type: 'note',
            title: 'Why the pattern is worth re-reading each cycle',
            text: 'SSC restructured Tier 2 substantially in recent years — merging papers, adding the computer module and changing how sessions are timed. Candidates preparing from older material have arrived at the exam expecting a structure that no longer exists. Read the pattern section of the current notification even if you have sat the exam before.',
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
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SSC CGL exam pattern?',
        a: 'SSC CGL runs in two computer-based stages. Tier 1 is a 60-minute screening paper of 100 questions across reasoning, general awareness, quantitative aptitude and English, carrying 200 marks. Tier 2 is the stage that builds the merit list and covers mathematics, reasoning, English, general awareness and computer knowledge in timed modules, followed by a data entry speed test. Candidates applying for Junior Statistical Officer additionally sit a statistics paper, and Assistant Audit Officer applicants sit a finance and economics paper.',
      },
      {
        q: 'Do Tier 1 marks count towards the final SSC CGL merit list?',
        a: 'No. Tier 1 is a qualifying and screening stage — it decides who is called for Tier 2, but the final merit list is built from Tier 2 marks. This is why candidates who clear Tier 1 comfortably but prepare only at Tier 1 depth tend to struggle: the exam that decides their rank is a harder one they have not practised for.',
      },
      {
        q: 'Who is eligible for SSC CGL?',
        a: 'The general requirement is a bachelor’s degree in any discipline from a recognised university. Some posts add conditions — Junior Statistical Officer expects statistics or mathematics at the twelfth or degree level, and Assistant Audit Officer carries a preference for commerce, economics or a chartered accountancy background. Age limits vary by post rather than applying uniformly, so check the post-wise table in the current notification.',
      },
      {
        q: 'How much negative marking is there in SSC CGL?',
        a: 'Tier 1 deducts half a mark for a wrong answer. The Tier 2 modules apply their own deduction, which has changed between cycles, so confirm the rate in the current notification. Practically, the Tier 1 rate means a blind guess across four options loses money over time, while a guess narrowed to two options is still worth taking.',
      },
      {
        q: 'Are free SSC CGL mock tests available?',
        a: 'Yes. A full-length free SSC CGL mock test on the current Tier 1 pattern is available without payment — 100 questions in 60 minutes, with the same negative marking as the real paper, followed by your score, the answer key and a section-wise breakdown.',
      },
      {
        q: 'How long does it take to prepare for SSC CGL?',
        a: 'A graduate with a reasonable mathematics background and consistent daily study is usually competitive in six to eight months. Someone rebuilding mathematics from the beginning should plan for a full exam cycle. The variable that matters most is daily consistency rather than total months, because vocabulary, general awareness and calculation speed all respond to repeated contact rather than long isolated sessions.',
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
    seoTitle: 'SSC CHSL 2026: Syllabus, Exam Pattern, Typing Test & Mocks',
    metaDescription:
      'SSC CHSL exam guide for 12th-pass candidates — Tier 1 and Tier 2 pattern, syllabus, typing and skill test requirements, previous papers and free mock tests.',
    lead: [
      'SSC CHSL is the commission’s class-12 recruitment, and it is the shortest route from school-leaving qualification to a central government desk job. Lower Division Clerk, Junior Secretariat Assistant and Data Entry Operator posts across ministries and departments are all filled from this one examination.',
      'It is often described as an easier CGL. That is true of the difficulty and false of the competition — with a far larger eligible pool and fewer posts, the cutoff behaves quite differently, and the typing and skill test at the end eliminates candidates who cleared the written papers comfortably.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Level', 'Class 12 (10+2) from a recognised board'],
      ['Stages', 'Tier 1 (screening) → Tier 2 (merit, includes a skill or typing test)'],
      ['Mode', 'Computer-based, followed by a typing or data entry test'],
      ['Posts filled', 'Lower Division Clerk, Junior Secretariat Assistant, Data Entry Operator'],
      ['Typical age band', 'Around 18 to 27 — confirm the exact band and relaxations in the notification'],
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
        mode: 'Objective, 60 minutes',
        detail:
          'Four sections of 25 questions — English language, general intelligence, quantitative aptitude and general awareness — for 200 marks in an hour. A screening stage: it decides who advances but does not build the final merit.',
      },
      {
        name: 'Tier 2 — Computer Based Examination and skill test',
        mode: 'Objective modules plus a typing or data entry test',
        detail:
          'Modules covering mathematical abilities and reasoning, English language and general awareness, and computer knowledge, followed by the skill or typing test appropriate to the post applied for. Tier 2 marks decide the merit list; the skill test is qualifying.',
      },
      {
        name: 'Document verification',
        mode: 'Offline',
        detail:
          'Verification of educational, category and identity documents for candidates who clear the written stages and the skill test.',
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
        ],
      },
      'exam-pattern': {
        description:
          'SSC CHSL exam pattern — Tier 1 and Tier 2 structure, marks, timing, negative marking and the typing and data entry speed requirements.',
        lead: [
          'Two written tiers and one speed test. The speed test carries no marks and ends more candidacies than most people expect.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Tier 1 structure. Confirm the marks, duration and negative marking rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['English Language', '25', '50', 'Grammar, vocabulary and a short comprehension'],
              ['General Intelligence', '25', '50', 'Verbal and non-verbal reasoning'],
              ['Quantitative Aptitude', '25', '50', 'Arithmetic-dominant'],
              ['General Awareness', '25', '50', 'Recall-based; static knowledge outweighs current affairs'],
              ['Total', '100', '200', '60 minutes, no sectional timing'],
            ],
          },
          {
            type: 'p',
            text: 'Tier 1 deducts half a mark for each wrong answer. With no sectional timing, the paper rewards a deliberate order of attempt — most successful candidates take English and general awareness first because they are fast and largely knowledge-bound, then reasoning, then quantitative aptitude with whatever remains.',
          },
          {
            type: 'p',
            text: 'Tier 2 is delivered in modules across sessions covering mathematical abilities and reasoning, then English and general awareness, then computer knowledge, with the skill or typing test attached. Unlike Tier 1, the modules are separately timed, so a section you find easy cannot subsidise one you do not.',
          },
          {
            type: 'list',
            title: 'The skill and typing requirement',
            items: [
              { text: 'Clerical posts (LDC / JSA)', note: 'a typing test at a prescribed speed on an English or Hindi keyboard, taken on a computer.' },
              { text: 'Data Entry Operator posts', note: 'a data entry speed test measured in key depressions per hour, with higher-level DEO posts carrying a stiffer requirement.' },
              { text: 'Status', note: 'qualifying in nature — it does not add to your merit score, but failing it removes you from consideration regardless of your written marks.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the speed thresholds',
            text: 'The exact words-per-minute and key-depressions-per-hour thresholds, and the relaxations available to candidates with disabilities, are set out in the notification and have been revised between cycles. Do not train to a number you read in an old guide.',
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
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SSC CHSL exam pattern?',
        a: 'SSC CHSL has two computer-based tiers plus a skill test. Tier 1 is a 60-minute paper of 100 questions across English, general intelligence, quantitative aptitude and general awareness, carrying 200 marks, with half a mark deducted for a wrong answer. Tier 2 covers mathematical abilities and reasoning, English and general awareness, and computer knowledge in separately timed modules, and includes the typing or data entry skill test for the post applied for.',
      },
      {
        q: 'Is the SSC CHSL typing test compulsory?',
        a: 'Yes, and it is qualifying rather than merit-counting — it adds nothing to your score, but failing it removes you from consideration however well you did in the written tiers. Clerical posts require a typing speed on an English or Hindi keyboard; data entry posts require a data entry speed in key depressions per hour. Because typing improves gradually, the practical advice is to start a short daily practice at the beginning of your preparation rather than after the Tier 2 result.',
      },
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
    seoTitle: 'SSC MTS 2026: Syllabus, Exam Pattern, Havaldar PET & Mocks',
    metaDescription:
      'SSC MTS exam guide for 10th-pass candidates — two-session paper structure, syllabus, Havaldar physical test, previous papers and free mock practice.',
    lead: [
      'SSC MTS is the commission’s class-10 recruitment, filling Multi-Tasking Staff posts across central government offices and Havaldar posts in the CBIC and the Narcotics Control Bureau. It is the entry point that asks least in qualification terms and, for a great many candidates, the first realistic route into central government service.',
      'Its paper has one structural feature that no other SSC examination shares, and it changes how you should attempt it: the two sessions apply different negative marking rules.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Level', 'Class 10 (matriculation) from a recognised board'],
      ['Stages', 'Computer-based examination in two sessions; Havaldar posts add a physical test'],
      ['Mode', 'Computer-based test at SSC centres'],
      ['Posts filled', 'Multi-Tasking Staff in central offices; Havaldar in CBIC and CBN'],
      ['Distinctive feature', 'Session I carries no negative marking; Session II does'],
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
        name: 'Computer Based Examination — Session I',
        mode: 'Objective, 45 minutes, no negative marking',
        detail:
          'Numerical and mathematical ability, and reasoning ability and problem solving. Because nothing is deducted for a wrong answer in this session, every question should be attempted — leaving one blank is a guaranteed zero where a guess is a free chance.',
      },
      {
        name: 'Computer Based Examination — Session II',
        mode: 'Objective, 45 minutes, with negative marking',
        detail:
          'General awareness and English language. A wrong answer here does cost marks, so the guessing discipline that would waste marks in Session I becomes necessary in Session II.',
      },
      {
        name: 'Physical test (Havaldar posts only)',
        mode: 'Physical efficiency and standard test',
        detail:
          'Applicants for Havaldar posts in CBIC and CBN sit a physical efficiency test and a physical standard test with separate criteria for male and female candidates. Qualifying in nature.',
      },
      {
        name: 'Document verification',
        mode: 'Offline',
        detail: 'Verification of educational, category, age and identity documents for shortlisted candidates.',
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
        ],
      },
      'exam-pattern': {
        description:
          'SSC MTS exam pattern — two sessions, section-wise marks and the negative marking rule that differs between Session I and Session II.',
        lead: [
          'One paper, two sessions, two different rules about guessing. Getting this wrong in either direction costs marks.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The two-session structure. Confirm question counts, marks, timing and the negative marking rate against the current official notification.',
            head: ['Session', 'Subjects', 'Duration', 'Negative marking'],
            rows: [
              ['Session I', 'Numerical and mathematical ability; reasoning ability and problem solving', '45 minutes', 'None — attempt every question'],
              ['Session II', 'General awareness; English language and comprehension', '45 minutes', 'Applies — guess only when you can narrow the options'],
            ],
          },
          {
            type: 'p',
            text: 'The absence of negative marking in Session I is the most actionable fact about this exam. There is no such thing as a bad guess in that session — an unanswered question and a wrong answer score identically, so leaving anything blank is a pure loss. Candidates who carry a cautious habit over from other SSC exams routinely give away marks here for no reason.',
          },
          {
            type: 'p',
            text: 'Session II flips the logic. With a deduction applied, the discipline that helps is the ordinary one: answer what you know, narrow what you can, and let go of the rest. The two sessions are separately timed, so time saved in one cannot be spent in the other.',
          },
          {
            type: 'list',
            title: 'Practical consequences for how you sit the paper',
            items: [
              { text: 'Reserve the last minute of Session I for filling blanks', note: 'even a random selection is strictly better than leaving the question empty.' },
              { text: 'Do not carry Session I speed into Session II', note: 'accuracy matters more once answers can cost you.' },
              { text: 'Havaldar applicants should train physically in parallel', note: 'the physical test comes soon after the written result, which is not enough time to build fitness from nothing.' },
            ],
          },
          {
            type: 'note',
            title: 'Pattern revisions',
            text: 'SSC has changed the MTS structure more than once in recent years, including how the sessions are split and what each contains. Read the pattern section of the current notification rather than relying on a guide written for an earlier cycle.',
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
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SSC MTS exam pattern?',
        a: 'SSC MTS is a computer-based examination in two separately timed sessions of about 45 minutes each. Session I covers numerical and mathematical ability and reasoning ability and problem solving, and carries no negative marking. Session II covers general awareness and English language and comprehension, and does apply negative marking. Confirm question counts, marks and the deduction rate in the current notification, since the structure has been revised between cycles.',
      },
      {
        q: 'Is there negative marking in SSC MTS?',
        a: 'Only in Session II. Session I has no deduction for wrong answers, which means every question there should be attempted — a blank and a wrong answer score the same, so guessing is strictly better than leaving anything empty. Session II does deduct for errors, so the usual discipline of answering what you know and narrowing before guessing applies there.',
      },
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
    seoTitle: 'SSC GD Constable 2026: Syllabus, PET/PST & Free Mock Tests',
    metaDescription:
      'SSC GD Constable exam guide — CBT pattern and syllabus, physical efficiency and standard tests, medical standards, previous papers and free mocks.',
    lead: [
      'SSC GD Constable is the common recruitment for General Duty Constables across the central armed police forces — BSF, CISF, CRPF, SSB, ITBP and Assam Rifles — along with Sepoy posts in the Narcotics Control Bureau and constable posts in the Secretariat Security Force. One written examination, one merit list, and a force allocation that follows from rank and preference.',
      'It is one of the few central examinations where the written paper is genuinely the easier half. The physical efficiency test, the physical standard test and the detailed medical examination eliminate more candidates than the CBT does, and they are the parts that cannot be prepared for in the final month.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Level', 'Class 10 (matriculation) from a recognised board'],
      ['Forces covered', 'BSF, CISF, CRPF, SSB, ITBP, Assam Rifles, SSF and NCB'],
      ['Stages', 'Computer-based test → physical efficiency and standard tests → medical examination'],
      ['Written paper', 'Objective CBT available in several regional languages'],
      ['Decisive stage', 'The physical and medical stages, not the written paper'],
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
        name: 'Computer Based Test',
        mode: 'Objective, 60 minutes',
        detail:
          'Four sections — general intelligence and reasoning, general knowledge and general awareness, elementary mathematics, and English or Hindi — for 80 questions and 160 marks, with a deduction for wrong answers. The paper is offered in multiple regional languages in addition to English and Hindi.',
      },
      {
        name: 'Physical Efficiency Test (PET)',
        mode: 'Timed run, qualifying',
        detail:
          'A run over a prescribed distance within a prescribed time, with different distances and timings for male and female candidates and relaxations for certain categories and regions. Qualifying in nature — it does not add to your merit score.',
      },
      {
        name: 'Physical Standard Test (PST)',
        mode: 'Measurement, qualifying',
        detail:
          'Height, chest measurement and expansion for male candidates, and height and weight for female candidates, against standards that vary by category and by region of origin.',
      },
      {
        name: 'Detailed Medical Examination',
        mode: 'Medical board',
        detail:
          'Vision including colour perception, hearing, general physical condition, and screening for conditions that would preclude armed police service. Candidates found temporarily unfit may be given a review medical examination.',
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
        ],
      },
      'exam-pattern': {
        description:
          'SSC GD Constable exam pattern — CBT structure and marks, physical efficiency and standard test requirements, and the medical examination.',
        lead: [
          'Three stages, and only the first one is a test of what you know. Plan for all three from the beginning, because two of them take months of physical preparation.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Computer Based Test structure. Confirm question counts, marks, duration and the negative marking rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Intelligence and Reasoning', '20', '40', 'Largely non-verbal pattern recognition'],
              ['General Knowledge and General Awareness', '20', '40', 'Everyday awareness rather than specialist depth'],
              ['Elementary Mathematics', '20', '40', 'Arithmetic only; speed matters more than difficulty'],
              ['English or Hindi', '20', '40', 'Candidate chooses one language'],
              ['Total', '80', '160', '60 minutes for the whole paper'],
            ],
          },
          {
            type: 'p',
            text: 'A deduction applies for wrong answers in the CBT, so blind guessing is a losing strategy, though narrowing to two plausible options and choosing between them remains worthwhile. The paper is available in several regional languages beyond English and Hindi, which removes a genuine disadvantage for candidates schooled in a regional medium — choose the language you read fastest, not the one you think looks better.',
          },
          {
            type: 'list',
            title: 'Physical and medical stages',
            items: [
              { text: 'Physical Efficiency Test', note: 'a run over a prescribed distance within a prescribed time. Distances and timings differ for male and female candidates, and relaxed standards apply to candidates from certain regions and categories.' },
              { text: 'Physical Standard Test', note: 'height and chest measurement for male candidates, height and weight for female candidates, against standards that vary by category and region of origin.' },
              { text: 'Detailed Medical Examination', note: 'vision including colour perception, hearing, and general fitness. This stage disqualifies more successful written candidates than most applicants expect.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the standards that apply to you',
            text: 'PET distances and timings, and PST height and chest standards, vary by gender, by category and by whether the candidate comes from a region with relaxed standards. Because they differ between groups and have been revised between cycles, read the standards table in the current notification rather than training to a figure from a general guide.',
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
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SSC GD Constable exam pattern?',
        a: 'The computer-based test has four sections — general intelligence and reasoning, general knowledge and general awareness, elementary mathematics, and English or Hindi — with 20 questions each, for 80 questions and 160 marks in 60 minutes. A deduction applies for wrong answers. The CBT is followed by a physical efficiency test, a physical standard test and a detailed medical examination, all of which are qualifying. Confirm marks and the deduction rate in the current notification.',
      },
      {
        q: 'Which forces recruit through SSC GD Constable?',
        a: 'The examination fills General Duty Constable posts in the Border Security Force, Central Industrial Security Force, Central Reserve Police Force, Sashastra Seema Bal, Indo-Tibetan Border Police and Assam Rifles, along with Sepoy posts in the Narcotics Control Bureau and constable posts in the Secretariat Security Force. Force allocation follows from your merit position and the preference order you submitted, so you do not apply to a single force.',
      },
      {
        q: 'What are the physical requirements for SSC GD Constable?',
        a: 'A physical efficiency test requires a run over a prescribed distance within a prescribed time, and a physical standard test measures height and chest for male candidates and height and weight for female candidates. Both sets of standards vary by gender, by category and by region of origin, with relaxations for candidates from certain areas. Because these differ between groups and have been revised between cycles, read the standards table in the current notification rather than a general summary.',
      },
      {
        q: 'Can I take the SSC GD exam in a regional language?',
        a: 'Yes. The computer-based test is offered in several regional languages in addition to English and Hindi, so candidates schooled in a regional medium are not disadvantaged. Separately, the language section of the paper asks you to choose between English and Hindi. Pick the language you read fastest — reading speed is part of what an eighty-question hour tests.',
      },
      {
        q: 'Which stage eliminates the most SSC GD candidates?',
        a: 'The physical and medical stages, not the written paper. The CBT is pitched at matriculation level and is cleared by a large number of candidates; the physical efficiency test, physical standard test and detailed medical examination are where most eliminations happen. This is why physical training and an early check of the medical standards should run in parallel with written preparation from the first week rather than being left until the CBT result.',
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
    seoTitle: 'SSC CPO SI 2026: Syllabus, Paper 1 & 2 Pattern, PET & Mocks',
    metaDescription:
      'SSC CPO Sub-Inspector exam guide — Delhi Police and CAPF SI recruitment, Paper 1 and Paper 2 pattern, syllabus, physical tests and free mock practice.',
    lead: [
      'SSC CPO recruits Sub-Inspectors for the Delhi Police and for the central armed police forces. It is a graduate-level uniformed entry, and it sits in an unusual place: more demanding physically than the office-based SSC examinations, and more demanding academically than constable-level recruitment.',
      'The feature that defines its preparation is Paper 2 — an entire second paper devoted to English language and comprehension. No other SSC examination weights a single subject that heavily, and candidates who treat it as an afterthought discover too late that it is worth as much as the whole of Paper 1.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Post', 'Sub-Inspector in Delhi Police and in the central armed police forces'],
      ['Level', 'Bachelor’s degree in any discipline'],
      ['Stages', 'Paper 1 → physical efficiency and standard tests → Paper 2 → medical'],
      ['Distinctive feature', 'Paper 2 is entirely English language and comprehension'],
      ['Additional requirement', 'Male candidates for Delhi Police SI have historically needed a valid LMV driving licence'],
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
          { text: 'A full second paper on English', note: 'Paper 2 carries the same marks as the entire Paper 1, devoted to language and comprehension alone.' },
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
        mode: 'Objective, 2 hours',
        detail:
          'Four sections of 50 questions each — general intelligence and reasoning, general knowledge and general awareness, quantitative aptitude, and English comprehension — for 200 questions and 200 marks. A deduction applies for wrong answers.',
      },
      {
        name: 'Physical Endurance Test and Physical Standard Test',
        mode: 'Qualifying',
        detail:
          'Running, long jump, high jump and shot put for male candidates, with a corresponding set of events for female candidates, plus height and chest measurement against prescribed standards. Qualifying in nature, but it gates entry to Paper 2.',
      },
      {
        name: 'Paper 2 — English Language and Comprehension',
        mode: 'Objective, 2 hours',
        detail:
          'A single paper of 200 questions and 200 marks devoted entirely to English language and comprehension, taken only by candidates who cleared Paper 1 and the physical tests. Its marks count towards the final merit.',
      },
      {
        name: 'Detailed Medical Examination',
        mode: 'Medical board',
        detail:
          'Vision including colour perception, hearing, and general fitness assessed against the standards required for armed police service.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'SSC CPO syllabus — Paper 1 reasoning, general awareness, quantitative aptitude and English, plus the full Paper 2 English language syllabus.',
        lead: [
          'Two papers, and the second one is a specialist English examination. Read the Paper 2 syllabus as carefully as the Paper 1 syllabus, because it carries equal weight.',
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
            text: 'The practical implication of this syllabus is a study split most candidates get wrong. Paper 2 is worth as much as all four Paper 1 sections combined, and English is a subject that improves slowly through daily exposure rather than quickly through intensive revision. It should be the first thing you start and the last thing you stop.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'SSC CPO exam pattern — Paper 1 and Paper 2 structure and marks, physical endurance and standard tests, and the order the stages run in.',
        lead: [
          'The order of the stages is the thing to plan around: Paper 1, then physicals, then Paper 2. Fitness sits between you and the paper that carries half the marks.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper 1 structure. Confirm marks, duration and the negative marking rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Intelligence and Reasoning', '50', '50', 'Verbal and non-verbal in roughly equal measure'],
              ['General Knowledge and General Awareness', '50', '50', 'Broad general awareness rather than specialist depth'],
              ['Quantitative Aptitude', '50', '50', 'Arithmetic, algebra, geometry, mensuration and trigonometry'],
              ['English Comprehension', '50', '50', 'A preview of the far larger Paper 2'],
              ['Total', '200', '200', '2 hours for the whole paper'],
            ],
          },
          {
            type: 'p',
            text: 'Paper 2 is a single 200-question, 200-mark paper of English language and comprehension over two hours. Taken together with Paper 1, that means English accounts for 250 of the 400 written marks in this examination. It is difficult to overstate how much this should shape a preparation plan, and how often it does not.',
          },
          {
            type: 'list',
            title: 'The physical stage, which sits between the papers',
            items: [
              { text: 'Physical Endurance Test', note: 'running over prescribed distances against the clock, plus long jump, high jump and shot put for male candidates, with a corresponding set of events for female candidates.' },
              { text: 'Physical Standard Test', note: 'height and chest measurement with expansion for male candidates, and height for female candidates, against standards that vary by category and region.' },
              { text: 'Consequence', note: 'candidates who do not clear these do not sit Paper 2 at all, regardless of their Paper 1 marks.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm standards, timings and the licence condition',
            text: 'Event standards differ by gender and by category, the negative marking rate has varied, and the driving licence condition applies to particular posts and groups at a particular stage. All three are set out in the notification and all three have changed between cycles.',
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
        ],
      },
      'mock-tests': {
        description:
          'SSC CPO mock tests — timed Paper 1 practice and dedicated English practice for the 200-mark Paper 2.',
        lead: [
          'Practise both papers, separately. They test different things and reward completely different pacing.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Paper 1 is a breadth test: two hundred questions across four subjects in two hours, where the skill is moving on quickly from anything that resists you. Paper 2 is an endurance test in a single subject, where concentration over two hours of continuous English is itself the challenge. A candidate who only ever practises Paper 1 arrives at Paper 2 unprepared for how tiring it is.',
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
        ],
      },
      preparation: {
        description:
          'SSC CPO preparation strategy — how to weight English for Paper 2, train for the physical stage, and sequence the two written papers.',
        lead: [
          'Weight your preparation the way the marks are weighted. English is 250 of 400 written marks, and fitness decides whether you sit the second paper at all.',
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
              { text: 'Treating Paper 2 as a formality', note: 'it carries as many marks as all of Paper 1 and is the usual difference between selection and a near miss.' },
              { text: 'Postponing physical training until after Paper 1', note: 'the gap between the paper and the physical test is short.' },
              { text: 'Leaving the driving licence requirement late', note: 'where it applies, it takes time to obtain and cannot be arranged at the last minute.' },
              { text: 'Preparing English through vocabulary lists alone', note: 'grammar rules and reading speed carry more of Paper 2 than isolated word lists do.' },
            ],
          },
          {
            type: 'p',
            text: 'Because the age band for CPO is narrower than for other SSC examinations, most candidates have a limited number of attempts. That argues for a serious, well-sequenced first attempt rather than a casual one used as practice.',
          },
        ],
      },
      'study-material': {
        description:
          'SSC CPO study material — English notes weighted for the 200-mark Paper 2, plus quantitative aptitude, reasoning and general awareness.',
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
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SSC CPO exam pattern?',
        a: 'SSC CPO runs in two written papers with the physical tests between them. Paper 1 has four sections of 50 questions each — general intelligence and reasoning, general knowledge and general awareness, quantitative aptitude and English comprehension — for 200 questions and 200 marks in two hours. Candidates who clear Paper 1 sit the physical endurance and standard tests, and those who clear those sit Paper 2: 200 questions and 200 marks of English language and comprehension in two hours. A detailed medical examination follows.',
      },
      {
        q: 'Why is English so important in SSC CPO?',
        a: 'Because English accounts for 250 of the 400 written marks — 50 in Paper 1 and the entire 200-mark Paper 2. No other SSC examination weights one subject so heavily. Since language ability improves through daily exposure over months rather than through intensive revision over weeks, English should be the first subject you start and the one you practise every day until the exam.',
      },
      {
        q: 'What are the physical requirements for SSC CPO?',
        a: 'A physical endurance test with running over prescribed distances against the clock, plus long jump, high jump and shot put for male candidates and a corresponding set of events for female candidates, and a physical standard test measuring height and chest with expansion for male candidates and height for female candidates. Standards vary by gender, category and region. Importantly, these tests sit between Paper 1 and Paper 2, so a candidate who does not clear them never sits the second written paper.',
      },
      {
        q: 'Do I need a driving licence for SSC CPO?',
        a: 'Male candidates applying for Sub-Inspector in the Delhi Police have historically been required to hold a valid driving licence for a light motor vehicle by a specified stage of the process. The condition applies to particular posts and candidate groups rather than to every applicant, and obtaining a licence takes time, so confirm whether it applies to you in the current notification early rather than late.',
      },
      {
        q: 'Who is eligible for SSC CPO?',
        a: 'A bachelor’s degree in any discipline from a recognised university, within an age band that is narrower than most other SSC examinations. Because the upper age limit is lower here, candidates typically have fewer attempts available than they would for SSC CGL, which is a reason to treat the first attempt seriously rather than as practice.',
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
    seoTitle: 'SSC JE 2026: Civil, Mechanical & Electrical Syllabus and Mocks',
    metaDescription:
      'SSC JE Junior Engineer exam guide — Paper 1 and Paper 2 pattern, discipline-wise technical syllabus for civil, mechanical and electrical, and free mocks.',
    lead: [
      'SSC JE recruits Junior Engineers for central government departments and organisations — the Central Public Works Department, the Military Engineer Services, the Border Roads Organisation, the Central Water Commission and others. It is a technical recruitment, and unlike every other SSC examination, most of its marks come from an engineering discipline rather than from general aptitude.',
      'That single fact should reshape how you prepare. General intelligence and general awareness together carry a minority of Paper 1; the technical paper is where the exam is won, and it is where diploma-holders with a solid grounding have a decisive advantage over candidates relying on general SSC preparation.',
    ],
    quickFacts: [
      ['Conducted by', 'Staff Selection Commission (SSC)'],
      ['Post', 'Junior Engineer in central government departments and organisations'],
      ['Disciplines', 'Civil, Mechanical and Electrical engineering'],
      ['Level', 'Diploma or degree in the relevant engineering discipline'],
      ['Stages', 'Paper 1 (objective) → Paper 2 (technical) → document verification'],
      ['Where the marks are', 'The general engineering sections, not the aptitude sections'],
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
        mode: 'Objective, 2 hours',
        detail:
          'General intelligence and reasoning, general awareness, and general engineering in the chosen discipline. The technical section carries the largest share of the marks, which makes Paper 1 substantially a technical paper with an aptitude component attached.',
      },
      {
        name: 'Paper 2 — Technical Examination',
        mode: 'Discipline-specific, 2 hours',
        detail:
          'A deeper examination in the chosen engineering discipline — civil and structural, electrical, or mechanical. The paper format has been revised between cycles, so confirm whether the current one is objective or descriptive in the notification.',
      },
      {
        name: 'Document verification',
        mode: 'Offline',
        detail:
          'Verification of the engineering qualification, experience where required, category and identity documents. Because eligibility differs by post, this stage is where mismatched qualifications surface.',
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
        ],
      },
      'exam-pattern': {
        description:
          'SSC JE exam pattern — Paper 1 and Paper 2 structure, the share of marks carried by the technical section, and negative marking.',
        lead: [
          'The headline number to internalise: the technical section carries more marks in Paper 1 than reasoning and general awareness combined.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper 1 structure. Confirm question counts, marks, duration and the negative marking rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Intelligence and Reasoning', '50', '50', 'Common to all disciplines; largely learnable in weeks'],
              ['General Awareness', '50', '50', 'General level; rewards steady revision more than study'],
              ['General Engineering (chosen discipline)', '100', '100', 'Half the paper, in your own discipline'],
              ['Total', '200', '200', '2 hours for the whole paper'],
            ],
          },
          {
            type: 'p',
            text: 'Half of Paper 1 is technical, and Paper 2 is entirely technical. Across the two papers the engineering discipline accounts for the large majority of the marks available — which makes the common approach of preparing SSC-style aptitude first and technical subjects later exactly backwards for this exam.',
          },
          {
            type: 'p',
            text: 'Paper 2 examines the same discipline at greater depth over two hours. Its format has been revised between cycles — it has been a descriptive paper in the past and an objective one more recently — so the format section of the current notification is worth reading carefully, because it changes how you should practise.',
          },
          {
            type: 'list',
            title: 'Planning consequences',
            items: [
              { text: 'Technical revision starts first', note: 'it carries the most marks and takes the longest to rebuild if your diploma is some years behind you.' },
              { text: 'Reasoning is a short, high-return project', note: 'a few weeks of practice covers most of what Paper 1 asks.' },
              { text: 'General awareness runs as a background habit', note: 'daily and light, never as an intensive block.' },
              { text: 'Confirm the Paper 2 format before practising for it', note: 'descriptive and objective papers reward quite different preparation.' },
            ],
          },
          {
            type: 'note',
            title: 'Negative marking applies',
            text: 'A deduction is applied for wrong answers, and the rate has differed between the papers and between cycles. Since the technical sections are the ones where a half-remembered formula tempts a guess, knowing the exact rate before the exam is worth the two minutes it takes to check the notification.',
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
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SSC JE exam pattern?',
        a: 'Paper 1 is a two-hour objective computer-based test with 200 questions and 200 marks: 50 questions of general intelligence and reasoning, 50 of general awareness, and 100 of general engineering in the discipline you applied in. Paper 2 is a further two-hour discipline-specific technical examination. Negative marking applies. The Paper 2 format has been revised between cycles, so confirm it in the current notification.',
      },
      {
        q: 'Which disciplines can I apply for in SSC JE?',
        a: 'Civil, mechanical and electrical engineering. You choose one at the application stage and are examined in that discipline in both the general engineering section of Paper 1 and the whole of Paper 2. Civil posts are typically the most numerous, but the right choice is the discipline you actually hold a qualification in.',
      },
      {
        q: 'What qualification do I need for SSC JE?',
        a: 'A diploma or degree in the relevant engineering discipline, with the exact requirement varying by post and by the department the post sits in. Some organisations accept a three-year diploma, others require a degree, and some ask for a diploma plus a period of relevant experience. Age limits also differ between departments, so read the post-wise eligibility table in the notification rather than assuming a single common standard.',
      },
      {
        q: 'How much of SSC JE is technical?',
        a: 'The large majority. General engineering carries 100 of the 200 marks in Paper 1, and Paper 2 is entirely technical. Across both papers, your engineering discipline accounts for considerably more marks than reasoning and general awareness combined, which is why technical revision should start first and take most of your preparation time.',
      },
      {
        q: 'How long does SSC JE preparation take?',
        a: 'It depends mainly on how recently you completed your diploma. A final-year student or recent graduate is revising familiar material and can be competitive in about four months. A candidate several years removed from the syllabus is rebuilding it and should plan for six to eight months, with the bulk of that time on technical subjects rather than on aptitude.',
      },
    ],
  },
]

export default ssc
