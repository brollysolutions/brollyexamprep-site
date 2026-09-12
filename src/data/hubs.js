/**
 * Written content for the category and topic hub pages.
 *
 * These are the pages rendered by src/pages/Directory.jsx — everything in the
 * nav tree that is not an exam guide or a study topic. Before this file
 * existed they were assembled from nothing but a label and a list of sibling
 * links, which produced a few dozen pages that were structurally sound and
 * said nothing.
 *
 * A hub is a genuinely different kind of page from an exam guide. Its job is
 * orientation: what this category or resource is, who it suits, how to choose
 * within it, and what to do first. So each entry here is written to answer
 * those questions for its own subject rather than to describe the site.
 *
 * Shape, keyed by path:
 *
 *   title           optional page <title>, used verbatim when present
 *   description     meta description
 *   lead            hero paragraphs
 *   sections        [{ id, eyebrow, heading, intro, blocks }] — see Blocks.jsx
 *   faqs            [{ q, a }], also emitted as FAQPage structured data
 */

import UPDATE_HUBS from './hubs-updates'
import HUB_DEPTH from './hubs-depth'

const STATE_RESOURCE_HUBS = {
  '/government-exams/state/syllabus/': {
    title: 'State Government Exam Syllabus: Subjects and Study Order',
    description: 'Understand the common state government exam syllabus, state-specific sections, post-specific differences and how to turn a notification into a study plan.',
    lead: [
      'There is no single syllabus for every state government exam. A State PSC civil-services examination, a subordinate-services paper, a police recruitment and a teaching eligibility test may share general studies and aptitude, but they test them at different depths and add different state or professional subjects.',
      'The syllabus attached to the current notification is the boundary of your examination. Use this page to interpret that document and build a study order—not as a substitute for the notification itself.',
    ],
    sections: [
      { id: 'common-core', eyebrow: 'The overlap', heading: 'Subjects that recur across state examinations', blocks: [
        { type: 'table', head: ['Area', 'What it usually includes', 'How to adapt it'], rows: [
          ['General studies', 'History, geography, polity, economy, science and environment', 'Add the state’s history, geography, administration, economy and culture at the depth shown in past papers.'],
          ['Current affairs', 'National, international and state developments', 'Give extra weight to state schemes, budget, appointments, reports and issues named in the syllabus.'],
          ['Language', 'English and/or the regional language', 'Check whether the paper is qualifying, scored, descriptive or tied to a skill test.'],
          ['Aptitude and reasoning', 'Arithmetic, data interpretation, logic and mental ability', 'Match difficulty and timing to the post level rather than using one generic question bank.'],
          ['Post knowledge', 'Law, engineering, teaching or another discipline', 'Use the qualification-level syllabus and official topic list for technical recruitment.'],
        ] },
        { type: 'note', title: 'Scope is not weight', text: 'A syllabus tells you what may be asked but rarely how often. Tag several recent papers by topic to discover the actual weighting, then study recurring areas before the long tail.' },
      ] },
      { id: 'build-plan', eyebrow: 'From document to plan', heading: 'Convert the official syllabus into work you can schedule', blocks: [
        { type: 'steps', items: [
          { text: 'Copy every syllabus line into a checklist.', note: 'Keep the wording and paper division used in the notification.' },
          { text: 'Map recent questions to those lines.', note: 'This exposes recurring themes, depth and sections that consume disproportionate time.' },
          { text: 'Mark state-specific and post-specific material.', note: 'These are often the areas a national exam source will not cover adequately.' },
          { text: 'Assign one primary source to each cluster.', note: 'Finish and revise it before adding another book or course.' },
          { text: 'Attach practice and revision dates.', note: 'A topic is not complete when read; it is complete when you can retrieve it and solve its questions under time.' },
        ] },
        { type: 'links', title: 'Build the subject foundation', items: [
          { label: 'Study material by subject', to: '/study-material/' },
          { label: 'Previous year questions', to: '/previous-year-questions/' },
          { label: 'State government exam guide', to: '/government-exams/state/' },
        ] },
      ] },
    ],
    faqs: [
      { q: 'Is the syllabus the same for all state government exams?', a: 'No. General studies, current affairs, language and aptitude often overlap, but their depth, marks and state-specific coverage differ. Police, teaching, engineering and other specialist recruitments also add physical, skill or professional requirements.' },
      { q: 'Which syllabus should I trust?', a: 'Use the syllabus published with the current official notification or rules for the exact post. Coaching lists and older notifications can help interpret it, but they do not override the recruiting authority’s document.' },
    ],
  },
  '/government-exams/state/exam-pattern/': {
    title: 'State Government Exam Pattern: Stages, Marks and Selection',
    description: 'Learn how prelims, mains, interviews, skill tests and physical stages work across state government recruitment and what to verify in each notice.',
    lead: [
      'An exam pattern is the rulebook for a recruitment: the stages, paper types, marks, duration, negative marking and the point at which a score begins to count toward final merit. Those rules differ not only between states but between posts run by the same commission.',
      'Read the current notification before planning an attempt. A preparation built around the wrong negative-marking rate or merit stage can be well studied and still strategically wrong.',
    ],
    sections: [
      { id: 'stages', eyebrow: 'Selection architecture', heading: 'The stages and what each one usually does', blocks: [
        { type: 'defs', items: [
          ['Preliminary examination', 'Usually an objective screening stage. Its marks may only decide who reaches mains, but its negative marking and cut-off still determine survival.'],
          ['Main examination', 'The deeper scored stage, which may be objective, descriptive or mixed. Civil-services mains commonly tests analysis and written expression, while subordinate recruitment may remain objective.'],
          ['Interview or personality test', 'Used for some officer and specialist posts. Check its weight in the final total rather than treating it as a ceremonial stage.'],
          ['Skill or typing test', 'Common in clerical, stenography and computer-linked posts. It may be qualifying but can still eliminate an otherwise high-scoring candidate.'],
          ['Physical and medical stages', 'Essential in police, forest, fire and uniformed recruitment. Standards and event rules are notification-specific and require early preparation.'],
          ['Document verification', 'Confirms qualification, category, age and other claims. The required status generally has to exist by the stated cut-off date.'],
        ] },
      ] },
      { id: 'read-pattern', eyebrow: 'Before practising', heading: 'Seven rules to record from the notification', blocks: [
        { type: 'list', items: [
          { text: 'Question and mark count for every paper', note: 'marks per question affect both pacing and the cost of an error.' },
          { text: 'Duration and sectional timing', note: 'separate timing prevents you from moving spare minutes between sections.' },
          { text: 'Negative marking and unanswered-question rules', note: 'never assume another exam’s guessing strategy applies.' },
          { text: 'Qualifying versus merit papers', note: 'a qualifying language paper needs safety; a merit paper needs rank-building depth.' },
          { text: 'Minimum marks and sectional cut-offs', note: 'a strong total may not rescue a failed compulsory section.' },
          { text: 'Normalization or multi-shift provisions', note: 'understand the published method without trying to predict shift advantage.' },
          { text: 'Later-stage requirements', note: 'typing, certificates, physical standards and medical rules belong in the plan from day one.' },
        ] },
        { type: 'links', title: 'Use the pattern', items: [
          { label: 'Free mock tests', to: '/mock-tests/free/' },
          { label: 'State exam preparation guide', to: '/government-exams/state/preparation/' },
          { label: 'Latest exam updates', to: '/exam-updates/' },
        ] },
      ] },
    ],
  },
  '/government-exams/state/previous-year-papers/': {
    title: 'State Government Previous Papers: Analysis and Practice',
    description: 'Use state government previous papers to identify topic weight, question depth and timing while avoiding outdated-pattern and answer-key traps.',
    lead: [
      'Previous papers do two different jobs. Early in preparation they reveal what the recruiting authority repeatedly asks; later they provide realistic timed practice. Using every paper as a mock from the beginning wastes the stronger first use.',
      'Choose papers for the exact commission, post and stage. A State PSC prelims paper cannot describe a subordinate-services mains pattern merely because both contain general studies.',
    ],
    sections: [
      { id: 'analysis', eyebrow: 'First use', heading: 'Extract the examiner’s priorities', blocks: [
        { type: 'steps', items: [
          { text: 'Confirm the paper belongs to the current or comparable pattern.', note: 'Record any restructuring before combining years.' },
          { text: 'Solve the first paper untimed.', note: 'Work every question and verify disputed answers against authoritative sources.' },
          { text: 'Tag each question specifically.', note: 'Use labels such as state economy—budget or arithmetic—percentage, not broad subjects alone.' },
          { text: 'Count tags across multiple papers.', note: 'Repeated topics form the high-return core; isolated topics form the tail.' },
          { text: 'Record difficulty and question form.', note: 'A topic may recur as factual recall, calculation or analysis, and the preparation should match.' },
        ] },
      ] },
      { id: 'practice', eyebrow: 'Second use', heading: 'Preserve some papers for honest measurement', blocks: [
        { type: 'p', text: 'Once you have read a paper, familiarity inflates the next score. Keep at least two suitable papers unseen for the final phase, reproduce the real duration and marking scheme, and analyse errors by cause rather than only by subject.' },
        { type: 'list', title: 'Quality checks before downloading', items: [
          { text: 'Prefer the recruiting authority’s paper or answer key', note: 'unofficial keys can contain unresolved errors.' },
          { text: 'Check stage, year, shift and paper code', note: 'similarly named recruitments may have different versions.' },
          { text: 'Keep corrigenda with the key', note: 'a provisional answer is not necessarily the final accepted answer.' },
          { text: 'Do not treat old current affairs as study material', note: 'use those questions to identify recurring categories, then study the current cycle.' },
        ] },
        { type: 'links', title: 'Find and use papers', items: [
          { label: 'Previous year paper library', to: '/previous-year-papers/' },
          { label: 'Previous year question method', to: '/previous-year-questions/' },
          { label: 'Study material by subject', to: '/study-material/' },
        ] },
      ] },
    ],
  },
  '/government-exams/state/mock-tests/': {
    title: 'State Government Mock Tests: Choose, Attempt and Analyse',
    description: 'Choose state exam mock tests that match the notification, reproduce real conditions and turn every attempt into a targeted correction plan.',
    lead: [
      'A mock test is useful only when it resembles the examination you intend to write and when its analysis changes what you do next. A large test count without pattern matching or error review produces activity, not improvement.',
      'Match the recruiting body, post, stage, subjects, duration and negative marking before treating a score as evidence of readiness.',
    ],
    sections: [
      { id: 'choose', eyebrow: 'Before attempting', heading: 'What a credible mock must match', blocks: [
        { type: 'table', head: ['Feature', 'Why it matters', 'What to verify'], rows: [
          ['Coverage', 'A generic test may omit state and post-specific areas.', 'Every syllabus section appears at roughly the right depth.'],
          ['Structure', 'Question count and timing shape selection strategy.', 'Papers, sections, duration and sectional locks match the notice.'],
          ['Scoring', 'Wrong deductions change whether a narrowed guess is rational.', 'Marks, penalties and qualifying rules are correctly configured.'],
          ['Difficulty', 'An easy score can create false confidence.', 'Questions resemble recent papers in both concept and wording.'],
          ['Explanations', 'A score identifies a symptom, not its cause.', 'Solutions explain the method and why alternatives fail.'],
        ] },
      ] },
      { id: 'analyse', eyebrow: 'After submitting', heading: 'Turn the result into the next two weeks', blocks: [
        { type: 'steps', items: [
          { text: 'Separate knowledge errors from execution errors.', note: 'Unknown concepts need study; misreads, poor selection and calculation slips need different drills.' },
          { text: 'Review correct guesses as errors.', note: 'A lucky mark does not represent repeatable knowledge.' },
          { text: 'Measure time by section and question type.', note: 'Find where time was spent, not simply where the test ended.' },
          { text: 'Choose three correction targets.', note: 'A short, specific list is more usable than trying to repair the entire score report.' },
          { text: 'Retest after correction time.', note: 'Use a fresh paper after one or two weeks to see whether the same error class declined.' },
        ] },
        { type: 'links', title: 'Start practising', items: [
          { label: 'Available free mock tests', to: '/mock-tests/free/' },
          { label: 'Topic-wise questions', to: '/practice/topic-wise-questions/' },
          { label: 'State exam patterns', to: '/government-exams/state/exam-pattern/' },
        ] },
      ] },
    ],
  },
  '/government-exams/state/preparation/': {
    title: 'State Government Exam Preparation: A Practical Study Plan',
    description: 'Build a state government exam plan from the official notice, a diagnostic test, topic weighting, state-specific study and repeated revision.',
    lead: [
      'State exam preparation becomes manageable when you separate the common core from the state-specific and post-specific layers. Trying to study every possible state recruitment at once creates a large syllabus with no clear finishing point.',
      'Choose one primary recruitment and at most a small number of overlapping alternatives. Let the official pattern and recent papers decide the order of work.',
    ],
    sections: [
      { id: 'plan', eyebrow: 'The sequence', heading: 'Build the plan from evidence', blocks: [
        { type: 'steps', items: [
          { text: 'Select the exact post and stage.', note: 'Save the notification, syllabus, pattern and eligibility clauses together.' },
          { text: 'Take a diagnostic paper before studying.', note: 'Record accuracy, time and error type by section; the starting score itself is unimportant.' },
          { text: 'Analyse recent papers for weighting.', note: 'Study recurring, high-value topics before rare edges of the syllabus.' },
          { text: 'Build state knowledge alongside the common core.', note: 'History, geography, economy, governance, schemes and current issues need their own revision system.' },
          { text: 'Start slow-building requirements immediately.', note: 'Language, current affairs, descriptive writing, typing and physical fitness cannot be compressed safely at the end.' },
          { text: 'Schedule retrieval and full tests.', note: 'Every week should contain recall, questions and review—not reading alone.' },
        ] },
      ] },
      { id: 'weekly', eyebrow: 'A repeatable week', heading: 'Balance learning, retrieval and measurement', blocks: [
        { type: 'list', items: [
          { text: 'Concept blocks', note: 'learn one defined syllabus cluster and solve questions immediately after it.' },
          { text: 'State-specific revision', note: 'maintain themed notes rather than a chronological pile of facts.' },
          { text: 'Current affairs retrieval', note: 'quiz yourself and connect events to static polity, economy, geography and schemes.' },
          { text: 'Timed sectional work', note: 'build selection and pacing before full mocks become frequent.' },
          { text: 'One error-review session', note: 're-solve previous mistakes without looking at the explanation.' },
          { text: 'Physical, typing or writing practice', note: 'include the later-stage skill required by your target post.' },
        ] },
        { type: 'note', title: 'Do not wait for a notification to begin', text: 'Durable subjects and skills can be built from the latest reliable syllabus and recent papers. When the new notice arrives, compare it line by line and revise the plan around actual changes.' },
        { type: 'links', title: 'Plan with the evidence', items: [
          { label: 'State exam syllabus guide', to: '/government-exams/state/syllabus/' },
          { label: 'Previous year papers', to: '/previous-year-papers/' },
          { label: 'Free diagnostic mock tests', to: '/mock-tests/free/' },
        ] },
      ] },
    ],
  },
  '/government-exams/state/study-material/': {
    title: 'State Government Exam Study Material: What to Use',
    description: 'Choose state exam study material by syllabus, paper depth and revision value while combining common subjects with reliable state-specific sources.',
    lead: [
      'Good study material is not the largest collection you can find. It is the smallest set that covers the notified syllabus at the depth shown in recent papers and can be revised several times before the examination.',
      'Build one common foundation for history, geography, polity, economy, science, environment, aptitude and language. Add a separate state layer and any professional subject required by the post.',
    ],
    sections: [
      { id: 'source-stack', eyebrow: 'A controlled stack', heading: 'Give every source one job', blocks: [
        { type: 'table', head: ['Source', 'Best use', 'Common mistake'], rows: [
          ['Official notification and syllabus', 'Defines eligibility, scope and exam rules.', 'Replacing it with a coaching checklist.'],
          ['Standard concept source', 'Builds durable understanding of a subject.', 'Collecting several books before finishing one.'],
          ['State publications', 'Supplies authoritative state economy, budget, schemes and administration detail.', 'Memorising figures without checking their reference year.'],
          ['Previous papers and final keys', 'Reveal weighting, depth and accepted answers.', 'Using every paper as a timed mock before analysing it.'],
          ['Current affairs source', 'Tracks relevant changes through the preparation cycle.', 'Recording news by date in notes that cannot be revised.'],
          ['Mock tests and question banks', 'Build retrieval, pacing and error diagnosis.', 'Treating solution reading as equivalent to re-solving.'],
        ] },
      ] },
      { id: 'notes', eyebrow: 'Make it revisable', heading: 'Turn reading into a compact revision system', blocks: [
        { type: 'steps', items: [
          { text: 'Organize notes by syllabus heading.', note: 'This exposes gaps and prevents the same fact from being copied into several notebooks.' },
          { text: 'Keep state facts in themes.', note: 'Use geography, history, economy, governance, culture and schemes rather than month-by-month notes.' },
          { text: 'Record the source and reference period.', note: 'Budgets, rankings, office-holders and scheme figures can become stale.' },
          { text: 'Write questions into the notes.', note: 'Prompts force retrieval; highlighted paragraphs mostly encourage recognition.' },
          { text: 'Compress after each revision.', note: 'The final version should contain what you forget, not everything you once read.' },
        ] },
        { type: 'links', title: 'Open the learning library', items: [
          { label: 'Study material by subject', to: '/study-material/' },
          { label: 'Daily and monthly current affairs', to: '/current-affairs/' },
          { label: 'Topic-wise practice', to: '/practice/topic-wise-questions/' },
          { label: 'State government exams', to: '/government-exams/state/' },
        ] },
      ] },
    ],
  },
}

const ADDITIONAL_HUBS = {
  '/entrance-exams/pg-research/': {
    title: 'PG and Research Entrance Exams: GATE and IIT JAM Guide',
    description: 'Compare GATE and IIT JAM by purpose, syllabus depth and preparation method, with direct links to complete exam and paper-analysis guides.',
    lead: [
      'Postgraduate and research entrance exams reward depth in a chosen discipline, not broad general aptitude alone. GATE primarily supports postgraduate engineering admissions and is also used by some employers; IIT JAM supports admission to postgraduate science programmes.',
      'Start with the programme and institutions you would join, confirm the paper code and eligibility at the official source, then study from that paper’s syllabus and recent papers.',
    ],
    sections: [
      {
        id: 'compare',
        eyebrow: 'Choose the right route',
        heading: 'GATE and IIT JAM solve different admission goals',
        blocks: [
          { type: 'table', head: ['Question', 'GATE', 'IIT JAM'], rows: [
            ['Primary use', 'Postgraduate engineering and related opportunities', 'Postgraduate science admissions'],
            ['Preparation base', 'Undergraduate engineering or science discipline plus aptitude', 'Undergraduate science discipline'],
            ['First decision', 'Select the correct paper code and target programmes', 'Select the test paper and participating programmes'],
            ['Best evidence', 'Current official brochure, syllabus and recent papers', 'Current official brochure, syllabus and recent papers'],
          ] },
          { type: 'links', title: 'Complete guides', items: [
            { label: 'GATE exam guide', to: '/entrance-exams/pg-research/gate/' },
            { label: 'IIT JAM exam guide', to: '/entrance-exams/pg-research/iit-jam/' },
            { label: 'Previous-paper analysis method', to: '/previous-year-papers/' },
          ] },
        ],
      },
    ],
  },
  '/entrance-exams/international/': {
    title: 'International Exams: English Tests, GRE, SAT, LSAT, UCAT & Visas',
    description: 'Choose the right international test — English, graduate, undergraduate or professional-school — by what the institution and visa authority accept.',
    lead: [
      'International tests are not interchangeable, and the choice is made by the destination rather than the candidate. Universities decide which admissions test they take — GRE or GMAT for graduate programmes, SAT or ACT for undergraduate, LSAT for North American law, UCAT and LNAT for UK medicine and law — and which English test at what score. Visa authorities and professional regulators keep their own lists: Australia refuses at-home tests, the UK names its Secure English Language Tests, Canada’s immigration streams want CLB levels that CELPIP or IELTS General Training give directly, and healthcare regulators quote OET grades.',
      'Read the institution’s admissions page and the visa authority’s page before booking anything, because one score can often serve both if the stricter rule is followed first. Then the visa process — an offer document, a financial case, English in the accepted form, the application and, for the United States, an interview — is its own project with its own calendar.',
    ],
    sections: [
      {
        id: 'choose',
        eyebrow: 'Decision guide',
        heading: 'Match the test to the requirement',
        blocks: [
          { type: 'defs', items: [
            ['English for admission', 'IELTS Academic, TOEFL iBT and PTE Academic are accepted almost everywhere; the Duolingo English Test by 6,500+ institutions for admission but rarely for visas. Compare by format — a face-to-face speaking test, a centre computer, or a home test — and by the score the programme names.'],
            ['English for visas and migration', 'Australia and the UK publish their own accepted lists; PTE Academic UKVI, IELTS for UKVI and OET are among the UK SELT routes. Canada’s economic immigration wants CLB levels, which CELPIP-General and IELTS General Training report directly; CELPIP-General LS serves citizenship.'],
            ['English for healthcare registration', 'OET, written for twelve healthcare professions and quoted by the NMC, GMC, AHPRA and US nursing boards in grades, is the alternative to IELTS for nurses, doctors and allied professionals.'],
            ['Graduate admission', 'GRE for most graduate programmes and many business schools; GMAT for business school. Check each programme’s policy rather than assuming.'],
            ['Undergraduate admission', 'SAT or ACT for the United States and for universities elsewhere that use them; every US college accepts both and compares them by concordance. Policies may be test-required, test-optional or test-blind.'],
            ['Professional schools', 'LSAT for law schools in the United States and Canada; UCAT for medicine and dentistry at UK consortium universities and Singapore partners; LNAT for law at nine UK universities and partners including Jindal Global Law School.'],
          ] },
          { type: 'links', title: 'English proficiency tests', items: [
            { label: 'IELTS', to: '/entrance-exams/international/ielts/' },
            { label: 'PTE Academic', to: '/entrance-exams/international/pte/' },
            { label: 'TOEFL', to: '/entrance-exams/international/toefl/' },
            { label: 'Duolingo English Test', to: '/entrance-exams/international/duolingo-english-test/' },
            { label: 'CELPIP', to: '/entrance-exams/international/celpip/' },
            { label: 'OET', to: '/entrance-exams/international/oet/' },
          ] },
          { type: 'links', title: 'Admissions tests', items: [
            { label: 'GRE', to: '/entrance-exams/international/gre/' },
            { label: 'GMAT', to: '/entrance-exams/mba/gmat/' },
            { label: 'SAT', to: '/entrance-exams/international/sat/' },
            { label: 'ACT', to: '/entrance-exams/international/act/' },
            { label: 'LSAT', to: '/entrance-exams/international/lsat/' },
            { label: 'UCAT', to: '/entrance-exams/international/ucat/' },
            { label: 'LNAT', to: '/entrance-exams/international/lnat/' },
          ] },
          { type: 'links', title: 'After the offer', items: [
            { label: 'Student visa process — US, UK, Canada and Australia', to: '/entrance-exams/international/visa-process/' },
          ] },
        ],
      },
      {
        id: 'compare',
        eyebrow: 'Compare',
        heading: 'The tests at a glance',
        blocks: [
          {
            type: 'table',
            caption: 'From each test’s official site at the date the guides were written; fees and dates change and the guide for each test carries the detail.',
            head: ['Test', 'For', 'Format', 'Scale', 'Results', 'Valid'],
            rows: [
              ['IELTS', 'Admission; UK and Australian visas; Canadian immigration (General Training)', 'Four papers with a face-to-face speaking test; paper or computer', 'Bands 0–9', 'Days', '2 years'],
              ['PTE Academic', 'Admission; Australian and NZ visas; UK via the UKVI version', 'One two-hour computer sitting at a centre', '10–90', 'About 2 days', '2 years'],
              ['TOEFL iBT', 'Admission, mainly North America', 'Under two hours at a centre or at home', '0–120', 'Days', '2 years'],
              ['Duolingo English Test', 'Admission at 6,500+ institutions', 'One hour at home, adaptive', '10–160', '2 days', '2 years'],
              ['CELPIP', 'Canadian PR and citizenship; Australian visas', 'Under three hours on computer, one sitting', 'Levels 1–12 = CLB', '2–4 business days', '2 years'],
              ['OET', 'Healthcare registration', 'Four sub-tests; paper, computer or at home', '0–500, grades A–E', 'From 2 to 13 days by mode', 'Set by regulator'],
              ['GRE', 'Graduate and many business schools', 'Under two hours, section-adaptive', '130–170 per measure', 'Days', '5 years'],
              ['SAT', 'Undergraduate', 'Digital, adaptive, about two hours', '400–1600', 'Days', 'Set by college'],
              ['ACT', 'Undergraduate', 'English, math, reading; optional science and writing', '1–36 composite', 'From 4 business days internationally', 'Set by college'],
              ['LSAT', 'US and Canadian law schools', 'Four 35-minute sections at a centre; essay at home', '120–180', 'About 3 weeks', '5 testing years'],
              ['UCAT', 'UK and partner medicine and dentistry', 'Just under two hours, four subtests, July–September', '900–2700 plus SJT band', 'Same day', 'One cycle'],
              ['LNAT', 'UK and partner law', '2¼ hours: 42 questions and an essay', 'Score out of 42', 'To universities within days; to candidates in February or August', 'One cycle'],
            ],
          },
        ],
      },
    ],
  },
}

const HUBS = {
  ...UPDATE_HUBS,
  ...STATE_RESOURCE_HUBS,
  ...ADDITIONAL_HUBS,

  /* ══════════════════════════════════════════════════════════════
     Government exam categories
     ══════════════════════════════════════════════════════════════ */

  '/government-exams/ssc/': {
    title: 'SSC Exams 2026: CGL, CHSL, MTS, GD, CPO, JE Guide',
    description:
      'SSC exam guide — how the six Staff Selection Commission examinations differ, which suits your qualification, and how to prepare for each.',
    lead: [
      'The Staff Selection Commission conducts six recruitment examinations that between them fill most non-gazetted central government posts. They are usually discussed as one family, and for preparation purposes that is roughly right — the subjects overlap heavily — but the exams differ in qualification, in depth and, crucially, in how they punish a wrong answer.',
      'Choosing between them is mostly a question of what you hold. A degree opens CGL and CPO; an engineering diploma opens JE; class 12 opens CHSL; class 10 opens GD and MTS. Beyond that, the choice turns on whether you want a desk, a uniform, or a technical post.',
    ],
    sections: [
      {
        id: 'choosing',
        eyebrow: 'Choosing',
        heading: 'Which SSC exam fits you',
        intro:
          'Qualification narrows the field first. What remains is a choice about the kind of work and the kind of selection process you are willing to go through.',
        blocks: [
          {
            type: 'table',
            caption:
              'A starting map. Confirm the exact eligibility for any exam in its current notification before applying.',
            head: ['Exam', 'Qualification', 'What it fills', 'The distinctive demand'],
            rows: [
              ['SSC CGL', 'Bachelor’s degree', 'Group B and C posts across ministries', 'A harder Tier 2 that alone builds the merit list'],
              ['SSC CHSL', 'Class 12', 'Clerical and data entry posts', 'A typing or data entry skill test'],
              ['SSC MTS', 'Class 10', 'Multi-Tasking Staff and Havaldar', 'Two sessions with different negative marking rules'],
              ['SSC GD', 'Class 10', 'Constable in the central armed police forces', 'Physical and medical standards'],
              ['SSC CPO', 'Bachelor’s degree', 'Sub-Inspector in Delhi Police and CAPFs', 'A full second paper on English'],
              ['SSC JE', 'Engineering diploma or degree', 'Junior Engineer posts', 'Technical papers in your own discipline'],
            ],
          },
          {
            type: 'p',
            text: 'Most candidates apply for more than one, which is sensible: the reasoning, quantitative aptitude, English and general awareness syllabi overlap enough that one preparation serves several exams. What does not transfer is the specifics — the negative marking rate, the skill tests, the physical standards and the technical papers all differ, and each needs its own attention in the weeks before that particular exam.',
          },
        ],
      },
      {
        id: 'differences',
        eyebrow: 'What differs',
        heading: 'The details that catch candidates out',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Negative marking is not uniform', note: 'SSC MTS Session I has none at all, while other papers deduct. Carrying one exam’s guessing discipline into another costs marks in both directions.' },
              { text: 'Skill tests are qualifying, not optional', note: 'CHSL typing and the CGL data entry test add nothing to your score but end candidacies when failed.' },
              { text: 'Physical and medical standards arrive last', note: 'in GD and CPO, after every written stage — which is why training and a medical check belong in week one.' },
              { text: 'Tier structures differ', note: 'CGL’s merit comes only from Tier 2; CPO interleaves physicals between two written papers; JE runs two technical papers.' },
            ],
          },
        ],
      },
      {
        id: 'start',
        eyebrow: 'Getting started',
        heading: 'What to do first',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Take a full mock in your target exam before studying anything.', note: 'It tells you which sections are already competitive and which are not, which is the only sound basis for a plan.' },
              { text: 'Read the current notification end to end.', note: 'Eligibility, age relaxations, negative marking and the stage structure all change between cycles.' },
              { text: 'Start the slowest-building components immediately.', note: 'English vocabulary, general awareness and — for uniformed posts — physical training all accumulate over months and cannot be compressed.' },
              { text: 'Then study the weakest section first.', note: 'Not the one you enjoy most, which is the usual instinct.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with an exam guide',
            items: [
              { label: 'SSC CGL', to: '/government-exams/ssc/ssc-cgl/' },
              { label: 'SSC CHSL', to: '/government-exams/ssc/ssc-chsl/' },
              { label: 'SSC MTS', to: '/government-exams/ssc/ssc-mts/' },
              { label: 'SSC GD Constable', to: '/government-exams/ssc/ssc-gd/' },
              { label: 'SSC CPO', to: '/government-exams/ssc/ssc-cpo/' },
              { label: 'SSC JE', to: '/government-exams/ssc/ssc-je/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which SSC exam is easiest to clear?',
        a: 'The question is usually asked about difficulty and answered better by ratio. SSC MTS and SSC GD have the gentlest papers but the largest applicant fields, because they require only class 10. SSC JE has a demanding technical paper but a far smaller eligible pool. In practice the exam you are most likely to clear is the one whose specific demands match your strengths — technical knowledge for JE, English for CPO, arithmetic speed for MTS, physical fitness for GD.',
      },
      {
        q: 'Can I prepare for several SSC exams at once?',
        a: 'Yes, and most candidates do. The reasoning, quantitative aptitude, English and general awareness syllabi overlap substantially, so one core preparation serves several exams. What needs separate attention is each exam’s specifics — the negative marking rate, typing or data entry skill tests, physical and medical standards, and technical papers. Those differ enough that treating the exams as identical will cost you marks in the weeks that matter.',
      },
      {
        q: 'Does negative marking work the same way across SSC exams?',
        a: 'No, and this is one of the more consequential differences. SSC MTS Session I applies no deduction at all, which means every question there should be attempted; other papers do deduct, at rates that vary between exams and sometimes between tiers of the same exam. A candidate who carries a cautious habit into a no-penalty paper gives away marks, and one who carries a loose habit into a penalised paper loses them.',
      },
    ],
  },

  '/government-exams/banking/': {
    title: 'Banking Exams 2026: IBPS, SBI & RBI Recruitment Guide',
    description:
      'Banking exam guide — how IBPS, SBI and RBI recruitments differ, sectional timing, which to target, and how to prepare for all of them together.',
    lead: [
      'Banking recruitment in India runs through three broad channels: the IBPS common process for most public sector banks, the State Bank of India’s own recruitment, and the Reserve Bank’s officer entry. The first two test aptitude under severe time pressure; the third tests economics and finance in writing, and is a genuinely different examination.',
      'For candidates preparing across several of these, the good news is that the syllabi overlap almost completely. The difference is in structure — sectional timing, interview stages, and whether the paper rewards speed or depth — and it is the structure that should shape your plan.',
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'The landscape',
        heading: 'How banking recruitments differ',
        blocks: [
          {
            type: 'table',
            caption:
              'A comparison for planning purposes. Confirm each exam’s current structure in its own notification.',
            head: ['Exam', 'Cadre', 'Interview', 'What it really tests'],
            rows: [
              ['IBPS PO', 'Officer', 'Yes', 'Speed in prelims, depth and banking awareness in mains'],
              ['IBPS Clerk', 'Clerical', 'No', 'Calculation speed and financial awareness'],
              ['SBI PO', 'Officer', 'Yes, plus group exercise', 'Adaptability to unfamiliar question framing'],
              ['SBI Clerk', 'Clerical', 'No', 'Speed, accuracy and local language proficiency'],
              ['IBPS RRB', 'Both', 'Officer scales only', 'Reasoning and numerical ability — no English in prelims'],
              ['RBI Grade B', 'Officer', 'Yes', 'Economics and finance, written descriptively'],
            ],
          },
          {
            type: 'p',
            text: 'Two of these sit apart from the rest. IBPS RRB removes English from the preliminary stage entirely, which advantages candidates strong in reasoning and mathematics and penalises those relying on language to carry them. RBI Grade B is not an aptitude test at all — it is two academic subject papers plus a writing paper, and preparing for it with banking-exam material will not work.',
          },
        ],
      },
      {
        id: 'structure',
        eyebrow: 'What decides outcomes',
        heading: 'Three structural facts worth internalising',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Prelims marks almost never carry forward', note: 'in IBPS and SBI recruitment, the preliminary examination only decides who sits the mains. Preparing exclusively for prelims is the most common strategic error in banking preparation.' },
              { text: 'Sectional timing changes everything', note: 'twenty minutes per section means the paper is a selection exercise, not a solving exercise. Untimed practice trains the wrong skill entirely.' },
              { text: 'Banking awareness is cumulative', note: 'it is a large block of mains marks that depends on having followed the news for months, and it cannot be recovered in the weeks between the prelims result and the mains.' },
            ],
          },
        ],
      },
      {
        id: 'plan',
        eyebrow: 'Preparation',
        heading: 'One plan for several exams',
        blocks: [
          {
            type: 'p',
            text: 'Because the aptitude content is shared, the efficient approach is a single preparation with exam-specific work added in the fortnight before each paper. What that core preparation should contain is fairly settled: daily puzzle practice, daily data interpretation, daily calculation drilling, and daily banking and economic awareness from a single running source.',
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'IBPS PO', to: '/government-exams/banking/ibps-po/' },
              { label: 'IBPS Clerk', to: '/government-exams/banking/ibps-clerk/' },
              { label: 'SBI PO', to: '/government-exams/banking/sbi-po/' },
              { label: 'SBI Clerk', to: '/government-exams/banking/sbi-clerk/' },
              { label: 'IBPS RRB', to: '/government-exams/banking/ibps-rrb/' },
              { label: 'RBI Grade B', to: '/government-exams/banking/rbi-grade-b/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which banking exam should I target first?',
        a: 'Usually IBPS PO or IBPS Clerk, because the common process fills the largest number of posts and its structure is the most representative of banking recruitment generally. A preparation aimed at IBPS PO covers SBI PO, both clerical exams and IBPS RRB with modest additions. RBI Grade B is the exception and should be treated as a separate project, since it tests economics and finance in writing rather than aptitude under time.',
      },
      {
        q: 'Do banking prelims marks count towards final selection?',
        a: 'In IBPS and SBI recruitment, no. The preliminary examination is a qualifying screen that decides who sits the main examination, and the merit list is built from the mains and, where applicable, the interview. This is the single most important strategic fact in banking preparation, because it means the mains syllabus — including banking awareness and data interpretation depth — should be studied from the beginning rather than after the prelims result.',
      },
      {
        q: 'How is IBPS RRB different from the other banking exams?',
        a: 'Its preliminary paper contains only reasoning and numerical ability — there is no English section at all. That advantages candidates whose English is weak but whose quantitative and reasoning ability is strong, and it penalises those with weak reasoning, since reasoning makes up half the paper with no language section to compensate. Its general awareness also carries a distinct rural and agricultural banking emphasis that mainstream banking material does not cover.',
      },
    ],
  },

  '/government-exams/railways/': {
    title: 'Railway Exams 2026: RRB NTPC, Group D, ALP, JE & RPF',
    description:
      'Railway exam guide — how the RRB recruitments differ, the one-third negative marking, normalisation across shifts and medical classifications.',
    lead: [
      'The Railway Recruitment Boards conduct several recruitments a year across the largest employer in the country. They share three features that distinguish them from other central examinations, and all three should shape how you prepare.',
      'The deduction for a wrong answer is one third of a mark, which is harsher than the SSC or banking rate. Scores are normalised across shifts, so your raw mark is not the number compared against the cutoff. And every post carries a medical classification, which can end a candidacy after every written stage has been cleared.',
    ],
    sections: [
      {
        id: 'exams',
        eyebrow: 'The recruitments',
        heading: 'Which railway exam suits you',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm eligibility and the stage structure in the current notification for each.',
            head: ['Exam', 'Qualification', 'Posts', 'The distinctive demand'],
            rows: [
              ['RRB NTPC', 'Class 12 or a degree', 'Station Master, clerks, commercial and traffic posts', 'General awareness is the largest section in both stages'],
              ['RRB Group D', 'Class 10 or ITI', 'Track maintainer, pointsman, assistant roles', 'A physical efficiency test with carrying and running'],
              ['RRB ALP', 'Class 10 plus ITI or a diploma', 'Assistant Loco Pilot', 'A trade paper and a psychological aptitude test with no relaxation'],
              ['RRB JE', 'Engineering diploma or degree', 'Junior Engineer and allied posts', 'Technical abilities carry 100 of 150 marks in CBT 2'],
              ['RPF', 'Class 10 or a degree', 'Constable and Sub-Inspector', 'Physical efficiency and measurement tests'],
            ],
          },
        ],
      },
      {
        id: 'shared',
        eyebrow: 'What they share',
        heading: 'Three rules common to railway recruitment',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'One-third negative marking',
                'Harsher than the quarter applied in banking and the SSC rate. A blind guess across four options is clearly negative in expected value, and even a two-option guess yields only a modest edge. Disciplined skipping matters more here than in most exams.',
              ],
              [
                'Normalisation across shifts',
                'Because these examinations run across many shifts and days, scores are adjusted so that a candidate who drew a harder shift is not penalised. The practical effect is that the raw mark you calculate afterwards is not the figure compared against the cutoff, and comparing raw scores across shifts tells you very little.',
              ],
              [
                'Medical classification by post',
                'Every railway post carries a medical standard, and safety-related roles — Assistant Loco Pilot most of all — apply strict vision and colour perception requirements. Because the medical comes last, a candidate can clear every stage and be found ineligible. Check the classification for your target posts at the start.',
              ],
            ],
          },
        ],
      },
      {
        id: 'start',
        eyebrow: 'Getting started',
        heading: 'What to do first',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Check the medical classification for the posts you want.', note: 'Particularly vision and colour perception if you are considering ALP.' },
              { text: 'Start physical training if your target has a physical stage.', note: 'Group D and RPF both do, and neither standard is reachable in a few weeks.' },
              { text: 'Build a general awareness habit immediately.', note: 'It is the largest section in NTPC and RPF, and a significant one everywhere else.' },
              { text: 'Practise with the correct one-third deduction.', note: 'Mocks using a gentler penalty train a guessing threshold this exam punishes.' },
            ],
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'RRB NTPC', to: '/government-exams/railways/rrb-ntpc/' },
              { label: 'RRB Group D', to: '/government-exams/railways/rrb-group-d/' },
              { label: 'RRB ALP', to: '/government-exams/railways/rrb-alp/' },
              { label: 'RRB JE', to: '/government-exams/railways/rrb-je/' },
              { label: 'RPF', to: '/government-exams/railways/rpf/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is normalisation in railway exams?',
        a: 'Because these recruitments run across many shifts and days with papers that differ slightly in difficulty, scores are statistically adjusted so that candidates who sat a harder shift are not disadvantaged. The consequence is that the raw mark you calculate after the exam is not the number compared against the cutoff, and comparing raw scores with candidates from other shifts tells you almost nothing about your relative position.',
      },
      {
        q: 'How harsh is negative marking in railway exams?',
        a: 'One third of a mark per wrong answer, which is harsher than the quarter-mark deduction in banking exams and the SSC rates. In practical terms, a blind guess across four options has clearly negative expected value and even narrowing to two options gives only a modest edge. Candidates who practise on gentler papers routinely carry an over-optimistic guessing threshold into these exams and lose marks to it.',
      },
      {
        q: 'Which railway exam has the strictest medical standards?',
        a: 'RRB ALP, by a clear margin. Assistant Loco Pilot carries the highest medical classification the railways apply, with demanding distant and near vision, colour perception and binocular vision requirements, and spectacles are not permitted under it. Because the medical examination comes after every written stage and the aptitude test, a candidate can clear everything else and still be found ineligible — which is why the standard should be checked before committing months of preparation.',
      },
    ],
  },

  '/government-exams/upsc/': {
    title: 'UPSC Exams 2026: Civil Services, NDA, CDS, CAPF, ESE',
    description:
      'UPSC exam guide — the Civil Services Examination, defence entries, Engineering Services, CAPF and the Indian Forest Service compared.',
    lead: [
      'The Union Public Service Commission conducts examinations for the All India Services, the central services, the officer cadre of the armed forces, the central armed police forces and the government engineering services. They are grouped here because one body conducts them, not because they resemble each other — they differ more than any other family on this site.',
      'What they do share is a structure: a written stage that is only part of the assessment, followed by a personality test, Services Selection Board or interview that carries substantial weight. Candidates who prepare only for the written half consistently underperform their paper ability.',
    ],
    sections: [
      {
        id: 'exams',
        eyebrow: 'The examinations',
        heading: 'What the Commission conducts',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm eligibility, age bands and attempt limits in each current notification.',
            head: ['Examination', 'Leads to', 'Level', 'The stage that decides it'],
            rows: [
              ['Civil Services', 'IAS, IPS, IFS and allied services', 'Graduate', 'Nine mains papers plus a 275-mark personality test'],
              ['Indian Forest Service', 'The Indian Forest Service', 'Science or engineering graduate', 'Two optional subjects across four papers'],
              ['NDA', 'Army, Navy and Air Force academies', 'Class 12', 'A five-day SSB worth as much as the written papers'],
              ['CDS', 'IMA, INA, AFA and OTA', 'Graduate', 'The SSB, after two or three written papers'],
              ['CAPF (AC)', 'Assistant Commandant in the armed police forces', 'Graduate', 'A 200-mark descriptive paper of essay and comprehension'],
              ['Engineering Services', 'Class I technical posts', 'Engineering degree', 'Two conventional papers written by hand'],
            ],
          },
        ],
      },
      {
        id: 'common',
        eyebrow: 'What they share',
        heading: 'Three things true across UPSC examinations',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'The later stage carries real weight', note: 'a personality test, an SSB or an interview accounts for a substantial share of the final marks, and it rewards months of reading and reflection rather than weeks of rehearsal.' },
              { text: 'Writing matters', note: 'Civil Services mains, CAPF Paper 2 and the Engineering Services conventional papers all require producing structured written work under time — a skill that objective practice does not build at all.' },
              { text: 'Attempts and age are limited', note: 'more tightly than in most examinations, which means most candidates have few genuine opportunities and a first attempt is worth taking seriously.' },
            ],
          },
        ],
      },
      {
        id: 'choosing',
        eyebrow: 'Choosing',
        heading: 'Which one suits you',
        blocks: [
          {
            type: 'p',
            text: 'Qualification narrows the field: NDA is a school-level entry, ESE and IFoS require specific degrees, and the rest need a bachelor’s degree in any discipline. Beyond that the choice is about the working life. Civil Services leads to administrative and policy roles; the defence entries to a commission; CAPF to command in the armed police forces; ESE to senior technical positions; IFoS to forest and wildlife management in the field.',
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'UPSC Civil Services', to: '/government-exams/upsc/upsc-civil-services/' },
              { label: 'NDA', to: '/government-exams/upsc/nda/' },
              { label: 'CDS', to: '/government-exams/upsc/cds/' },
              { label: 'UPSC CAPF', to: '/government-exams/upsc/capf/' },
              { label: 'Engineering Services', to: '/government-exams/upsc/engineering-services/' },
              { label: 'Indian Forest Service', to: '/government-exams/upsc/indian-forest-service/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I prepare for several UPSC exams together?',
        a: 'To a limited extent. The Civil Services and Indian Forest Service share a preliminary examination, so those two genuinely overlap at that stage, though their mains papers diverge completely. NDA and CDS share the Services Selection Board process and much of their general knowledge ground. Beyond those pairings the examinations are too different to prepare for jointly — Engineering Services is a technical examination and CAPF requires descriptive writing that no other UPSC paper asks for in the same form.',
      },
      {
        q: 'Do UPSC prelims marks count in the final result?',
        a: 'In the Civil Services and Indian Forest Service examinations, no — the preliminary stage is purely a screen and the merit is built from the mains and the personality test. The Engineering Services Examination is the exception among these: its preliminary marks do carry into the final total, which changes the calculus and means performing well there is worth real marks rather than merely a seat in the next stage.',
      },
      {
        q: 'How much does the interview or SSB count?',
        a: 'Substantially, and more than most candidates plan for. The Civil Services personality test carries 275 marks against 1750 from the mains; the NDA and CDS Services Selection Board carries as much as the entire written examination; CAPF adds a 150-mark interview; and the Engineering Services personality test is 200 of 1300. All of them reward sustained reading, formed views and, for the defence entries, genuine physical fitness and group experience — none of which can be assembled in a fortnight.',
      },
    ],
  },

  '/government-exams/defence/': {
    title: 'Defence Exams 2026: NDA, CDS, AFCAT & Agniveer Guide',
    description:
      'Defence exam guide — officer entries through NDA, CDS and AFCAT, Agniveer enrolment, SSB preparation and medical standards.',
    lead: [
      'Entry into the armed forces runs through two broad routes: officer entries, which lead to a commission, and Agniveer enrolment under the Agnipath scheme, which fills the ranks below officer level. Each route has several examinations, and they differ in qualification, age band and the selection process that follows the written paper.',
      'What every defence entry shares is that the written test is the smaller half. A Services Selection Board or an Air Force Selection Board assesses attributes that develop over years — initiative, cooperation, resilience, physical robustness — and a medical examination applies standards that no amount of preparation can change. Both deserve attention from week one.',
    ],
    sections: [
      {
        id: 'routes',
        eyebrow: 'The routes',
        heading: 'Officer entries and Agniveer enrolment',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm age bands, marital status conditions and subject requirements in each current notification.',
            head: ['Entry', 'Level', 'Conducted by', 'Selection after the written stage'],
            rows: [
              ['NDA', 'Class 12', 'UPSC', 'Five-day SSB worth 900 marks, then medical'],
              ['CDS', 'Graduate', 'UPSC', 'SSB, with an additional pilot aptitude test for the Air Force entry'],
              ['AFCAT', 'Graduate', 'Indian Air Force', 'Air Force Selection Board, plus a one-time pilot aptitude battery for flying branch'],
              ['Agniveer', 'Class 10 or 12 by category', 'Army, Navy and Air Force separately', 'Physical fitness and measurement tests, then a detailed medical'],
            ],
          },
          {
            type: 'p',
            text: 'NDA is the earliest entry, taken while still at school, and leads to three years at the academy before commissioning. CDS is the graduate route to the same commissioned service. AFCAT is the Air Force’s own officer entry, held twice a year. Agniveer is enrolment below officer rank, with each service running its own recruitment and its own categories.',
          },
        ],
      },
      {
        id: 'ssb',
        eyebrow: 'The selection board',
        heading: 'What the SSB actually assesses',
        intro:
          'For officer entries this stage carries as much weight as the written examination, and it is the part candidates most reliably under-prepare.',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Screening', note: 'an intelligence test and a picture perception and description exercise on the first day, which removes a substantial proportion of candidates immediately.' },
              { text: 'Psychological testing', note: 'thematic apperception, word association, situation reaction and self-description, assessed for consistency and genuine disposition rather than rehearsed responses.' },
              { text: 'Group testing officer tasks', note: 'discussion, planning, outdoor tasks and the command task, assessed on cooperation and initiative together rather than one at the expense of the other.' },
              { text: 'Personal interview and conference', note: 'a long interview covering background, interests and views, followed by a board conference that makes the recommendation.' },
            ],
          },
          {
            type: 'p',
            text: 'None of that is knowledge testing, which is why it cannot be crammed. What builds it is taking responsibility in group settings, maintaining genuine physical fitness, reading widely enough to hold views, and practising the expression of them. Those are habits of years, and the candidates who do well have usually been building them without thinking of it as preparation.',
          },
        ],
      },
      {
        id: 'medical',
        eyebrow: 'Medical standards',
        heading: 'Check them before you invest a year',
        blocks: [
          {
            type: 'p',
            text: 'Armed forces medical standards vary by service, by wing and by entry, and are strictest for flying branches. Vision and colour perception in particular differ sharply — a standard that permits one wing may not permit another. Because the medical examination comes after every other stage, a candidate can clear the written paper and the selection board and still be found ineligible. Verifying the standard for your intended entry at the outset costs an hour and prevents a wasted year.',
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'AFCAT', to: '/government-exams/defence/afcat/' },
              { label: 'Agniveer', to: '/government-exams/defence/agniveer/' },
              { label: 'NDA', to: '/government-exams/upsc/nda/' },
              { label: 'CDS', to: '/government-exams/upsc/cds/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the difference between NDA, CDS and AFCAT?',
        a: 'NDA is the school-level entry, taken from class 12, leading to three years at the National Defence Academy before commissioning into the Army, Navy or Air Force. CDS is the graduate entry to the same commissioned service, leading to the IMA, INA, Air Force Academy or Officers Training Academy. AFCAT is the Indian Air Force’s own officer entry for graduates, conducted by the Air Force rather than UPSC and held twice a year. All three are followed by a selection board and a medical examination.',
      },
      {
        q: 'How should I prepare for the SSB?',
        a: 'Over months and through activity rather than study. The board assesses officer-like qualities — initiative, cooperation, decisiveness, physical robustness and the ability to think and speak clearly under pressure — which develop through taking responsibility in group settings, maintaining genuine fitness, reading widely enough to hold views, and practising expressing them. Format familiarisation and mock interviews are useful in the final weeks, but they refine what is already there rather than creating it.',
      },
      {
        q: 'Why do defence medical standards matter so much?',
        a: 'Because they apply at the end, after the written paper and the selection board, and they cannot be prepared for. Vision, colour perception, hearing, dental condition and orthopaedic conditions all feature, and the standards differ by service, by wing and by entry — strictest for flying branches, where spectacles are generally not permitted. A candidate can clear everything else and be found ineligible for a condition identifiable at the outset, which is why checking the standard for your intended entry belongs in week one.',
      },
    ],
  },

  '/government-exams/teaching-net/': {
    title: 'Teaching & NET Exams 2026: CTET, State TET, UGC & CSIR NET',
    description:
      'Teaching and NET exam guide — eligibility tests for school teaching and for lectureship and research fellowships, and how they differ.',
    lead: [
      'The examinations in this section share a characteristic worth stating plainly: they are eligibility tests, not recruitments. Clearing CTET, a state TET, UGC NET or CSIR NET establishes that you may be appointed — it does not appoint you, and a separate recruitment process follows.',
      'They divide by level. CTET and the state TETs establish eligibility to teach in schools, and are built around pedagogy as much as subject content. UGC NET and CSIR NET establish eligibility for lectureship in higher education and for research fellowships, and are subject examinations at postgraduate depth.',
    ],
    sections: [
      {
        id: 'landscape',
        eyebrow: 'The landscape',
        heading: 'Four eligibility tests, two levels',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm eligibility, qualifying standards and validity in each current notification.',
            head: ['Test', 'Establishes eligibility for', 'Level', 'Negative marking'],
            rows: [
              ['CTET', 'Teaching classes I to VIII in central and recognising schools', 'Teacher training qualification', 'None'],
              ['State TET', 'Teaching in that state’s school system', 'Teacher training qualification', 'Generally none — confirm for your state'],
              ['UGC NET', 'Assistant Professor, JRF and PhD admission', 'Master’s degree', 'None'],
              ['CSIR NET', 'Lectureship, JRF and PhD admission in the sciences', 'Master’s degree in a science subject', 'Yes, varying by part and subject'],
            ],
          },
          {
            type: 'p',
            text: 'The absence of negative marking in three of the four is the most actionable fact here. In CTET, state TETs and UGC NET there is no penalty for a wrong answer, which means leaving any question blank is a guaranteed loss. Candidates carrying habits from penalised examinations give away marks in all three every cycle.',
          },
        ],
      },
      {
        id: 'pedagogy',
        eyebrow: 'For school teaching',
        heading: 'Why pedagogy dominates the TETs',
        blocks: [
          {
            type: 'p',
            text: 'Both CTET and the state TETs devote a compulsory section to child development and pedagogy, and carry a pedagogical component within every content section as well. Across the whole paper, understanding how children learn — why a particular error arises, what a teacher should do about it — is worth more than any single content subject. This is why a subject graduate can struggle with a paper on their own subject, and why content revision alone does not produce a pass.',
          },
        ],
      },
      {
        id: 'net',
        eyebrow: 'For higher education',
        heading: 'What separates UGC NET from CSIR NET',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Subject coverage', note: 'UGC NET covers the humanities, social sciences, commerce and allied disciplines; CSIR NET covers five science subjects.' },
              { text: 'Structure', note: 'UGC NET has a hundred-mark aptitude paper plus a subject paper; CSIR NET has a small aptitude part plus two subject parts of ascending difficulty.' },
              { text: 'Marking', note: 'UGC NET has no negative marking; CSIR NET does, at rates that vary by part and subject.' },
              { text: 'What decides them', note: 'UGC NET rewards completing the fixed Paper 1 syllabus alongside subject depth; CSIR NET rewards problem-solving ability, since its highest-value questions require application rather than recall.' },
            ],
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'CTET', to: '/government-exams/teaching-net/ctet/' },
              { label: 'State TET', to: '/government-exams/teaching-net/state-tet/' },
              { label: 'UGC NET', to: '/government-exams/teaching-net/ugc-net/' },
              { label: 'CSIR NET', to: '/government-exams/teaching-net/csir-net/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Does clearing CTET or NET get me a job?',
        a: 'No. All four examinations in this section are eligibility tests rather than recruitments. A CTET or state TET certificate establishes that you may be appointed as a teacher; actual appointment requires applying to recruiting bodies — central schools, state education departments or private schools — each of which runs its own selection process. Similarly, NET qualification establishes eligibility to apply for Assistant Professor positions, but universities conduct their own recruitment with their own selection committees.',
      },
      {
        q: 'Is there negative marking in teaching eligibility tests?',
        a: 'Not in CTET or UGC NET, and generally not in state TETs — though the last is worth confirming for your own state. CSIR NET is the exception and does apply negative marking, at rates that vary by part and by subject. Where no penalty applies, every question should be answered, because a blank and a wrong answer score identically. Candidates regularly submit these papers with unanswered questions out of habits formed on penalised examinations.',
      },
      {
        q: 'Should I take CTET or my state TET?',
        a: 'Ideally both, since the preparation overlaps almost entirely. Child development and pedagogy, subject pedagogy and content at the relevant class levels are common to both, so one preparation covers most of the ground. The additions a state TET requires are its regional language paper and its state-specific content, which CTET does not test. CTET carries wider recognition, particularly for central government schools, while a state TET is generally recognised within that state.',
      },
    ],
  },

  '/government-exams/state/': {
    title: 'State Government Exams 2026: PSC, Police & Group Exams',
    description:
      'State government exam guide — how state PSC, police and group recruitments work, local language and domicile requirements, and preparation.',
    lead: [
      'Every state runs its own recruitment for administrative, police, teaching and departmental posts through its public service commission and other recruitment boards. Together these fill more posts than all the central examinations combined, and they are the most accessible route into government service for candidates who want to work in their own state.',
      'They share a shape with the central examinations — a written stage, sometimes a mains, sometimes physical standards — and they differ in two ways that matter enormously. They are usually conducted in the state language, and they carry a substantial block of state-specific content that no national study material covers.',
    ],
    sections: [
      {
        id: 'kinds',
        eyebrow: 'What states recruit for',
        heading: 'The main categories of state recruitment',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'State Public Service Commission examinations',
                'The state equivalent of the Civil Services Examination, filling deputy collector, deputy superintendent of police and other administrative posts through a preliminary, mains and interview structure. Group I in most states, with Group II and below covering junior administrative posts.',
              ],
              [
                'Police recruitment',
                'Constable and Sub-Inspector posts filled through the state police recruitment board, with a written test followed by physical efficiency, physical standard and medical stages.',
              ],
              [
                'Group examinations',
                'Departmental and clerical posts filled through combined examinations, generally at graduate or class 12 level, with a single written stage.',
              ],
              [
                'Teacher recruitment',
                'State teacher eligibility tests establishing eligibility, followed by recruitment examinations run by the state education department.',
              ],
            ],
          },
        ],
      },
      {
        id: 'differences',
        eyebrow: 'What differs from central exams',
        heading: 'Two things national preparation will not cover',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'State-specific content', note: 'the state’s own history, geography, districts, rivers, culture, prominent figures, administrative structure and government schemes. This is frequently a substantial block of marks and is absent from every national study source.' },
              { text: 'The state language', note: 'most state examinations are conducted in the regional language alongside English or Hindi, and many include a language paper. Reading speed in that language is part of what is being tested.' },
            ],
          },
          {
            type: 'p',
            text: 'Both are addressable, and both are best addressed from state sources: the state board’s textbooks for history, geography and culture, and past papers from that state’s own examinations for everything else. A candidate preparing for state examinations entirely from national material is preparing for a different paper.',
          },
        ],
      },
      {
        id: 'domicile',
        eyebrow: 'Eligibility',
        heading: 'Domicile and local status',
        blocks: [
          {
            type: 'p',
            text: 'State recruitment generally applies domicile or local candidate rules, based on where you were born, resided or studied, and these determine which posts and which reservation categories you can access. The rules and the documentation required differ between states and are a matter of paperwork rather than preparation — but they affect outcomes just as directly, and they are worth confirming well before an application window opens.',
          },
          {
            type: 'links',
            title: 'Explore state exams',
            items: [
              { label: 'Telangana', to: '/government-exams/state/telangana/' },
              { label: 'Andhra Pradesh', to: '/government-exams/state/andhra-pradesh/' },
              { label: 'Tamil Nadu', to: '/government-exams/state/tamil-nadu/' },
              { label: 'Karnataka', to: '/government-exams/state/karnataka/' },
              { label: 'Maharashtra', to: '/government-exams/state/maharashtra/' },
              { label: 'Uttar Pradesh', to: '/government-exams/state/uttar-pradesh/' },
              { label: 'Bihar', to: '/government-exams/state/bihar/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do state exams differ from central government exams?',
        a: 'In two ways that matter for preparation. State examinations are usually conducted in the regional language alongside English or Hindi, and many include a language paper testing it directly. And they carry a substantial block of state-specific content — the state’s history, geography, districts, culture, prominent figures and administrative structure — which no national study material covers. A candidate preparing entirely from national sources will find a meaningful part of the paper unfamiliar.',
      },
      {
        q: 'Can I apply for another state’s recruitment?',
        a: 'Sometimes, but domicile and local candidate rules generally restrict access to particular posts and reservation categories, and many state examinations expect proficiency in the state language. The rules differ between states and are based on where you were born, resided or studied. Because they are documentation matters rather than preparation ones, they are easy to overlook and expensive to discover late — confirm them well before an application window opens.',
      },
      {
        q: 'Can I prepare for state and central exams together?',
        a: 'Substantially yes. The general studies, reasoning, quantitative aptitude and English content overlaps heavily, so one core preparation serves both. What you must add for a state examination is its state-specific content and, where required, the state language. The practical approach is to build the shared foundation first, then add the state layer from the state board’s textbooks and that state’s own past papers.',
      },
    ],
  },

  '/government-exams/insurance/': {
    title: 'Insurance Exams 2026: LIC, NIACL, UIIC & GIC Recruitment',
    description:
      'Insurance exam guide — LIC and public sector general insurance recruitment, how it differs from banking exams, and preparation strategy.',
    lead: [
      'The public sector insurance companies — the Life Insurance Corporation and the general insurers — recruit administrative officers, assistants and specialist cadres through their own examinations. In shape these follow the banking model closely: a preliminary screen, a main examination, and for officer posts an interview.',
      'For candidates already preparing for banking exams, insurance recruitment is close to a free extension. The reasoning, quantitative aptitude and English content is shared almost entirely, and the addition is a body of insurance-specific awareness that takes weeks rather than months to acquire.',
    ],
    sections: [
      {
        id: 'shape',
        eyebrow: 'The recruitments',
        heading: 'What insurance recruitment looks like',
        blocks: [
          {
            type: 'p',
            text: 'Officer recruitment — Administrative Officer, Assistant Administrative Officer and similar — generally uses a preliminary examination in English, reasoning and quantitative aptitude, followed by a main examination that adds general and insurance awareness, and then an interview. Assistant cadre recruitment follows the same pattern without the interview, and frequently includes a regional language requirement.',
          },
          {
            type: 'list',
            title: 'Where insurance differs from banking',
            items: [
              { text: 'Insurance awareness replaces banking awareness', note: 'principles of insurance, life and general insurance products, IRDAI and its role, regulation, reinsurance and claims. A distinct body of knowledge.' },
              { text: 'Specialist cadres exist', note: 'actuarial, legal, medical, engineering and IT streams, recruited with their own professional papers.' },
              { text: 'Descriptive papers appear more often', note: 'several insurance recruitments include a descriptive component testing written expression.' },
              { text: 'Regional language requirements', note: 'assistant cadre recruitment frequently expects proficiency in the language of the state applied for.' },
            ],
          },
        ],
      },
      {
        id: 'prepare',
        eyebrow: 'Preparation',
        heading: 'Adding insurance to a banking preparation',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Keep your banking aptitude preparation as the base.', note: 'Reasoning, quantitative aptitude, data interpretation and English transfer almost completely.' },
              { text: 'Add insurance awareness as a bounded project.', note: 'Principles, products, regulation and industry structure. A few weeks of reading covers what is asked.' },
              { text: 'Follow insurance industry news alongside banking news.', note: 'The current affairs component leans towards the sector.' },
              { text: 'Practise the descriptive component if your target includes one.', note: 'Letter and essay writing under time, which objective practice does not build.' },
            ],
          },
          {
            type: 'links',
            title: 'Related preparation',
            items: [
              { label: 'Banking exams', to: '/government-exams/banking/' },
              { label: 'IBPS PO guide', to: '/government-exams/banking/ibps-po/' },
              { label: 'Economy and banking notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do insurance exams differ from banking exams?',
        a: 'Structurally they are very similar — preliminary screen, main examination, and an interview for officer posts — and the reasoning, quantitative aptitude and English content is shared almost entirely. The substantive difference is that insurance awareness replaces banking awareness: principles of insurance, life and general insurance products, the role of IRDAI, regulation, reinsurance and claims. That is a bounded body of knowledge that takes weeks rather than months to acquire.',
      },
      {
        q: 'Can I prepare for banking and insurance exams together?',
        a: 'Yes, and it is the efficient approach. Treat your banking preparation as the base and add insurance awareness as a separate short project, alongside following industry news for the sector-leaning current affairs component. If your target recruitment includes a descriptive paper — several do — add letter and essay practice under time, since objective preparation does not build that skill.',
      },
      {
        q: 'What are the specialist cadres in insurance recruitment?',
        a: 'Alongside generalist administrative officer posts, the public sector insurers recruit specialists in actuarial, legal, medical, engineering, accounts and information technology streams. These carry their own professional qualification requirements and their own subject papers in addition to the common aptitude sections, so candidates with a relevant professional background face a substantially different examination from generalist applicants.',
      },
    ],
  },

  '/government-exams/regulatory-bodies/': {
    title: 'Regulatory Body Exams 2026: SEBI, IRDAI, PFRDA & More',
    description:
      'Regulatory body exam guide — SEBI, IRDAI, PFRDA and similar officer recruitments, their descriptive papers and specialist streams.',
    lead: [
      'India’s financial and sectoral regulators — the Securities and Exchange Board, the insurance and pension authorities, and others — recruit officers through examinations that sit somewhere between the banking recruitments and the Reserve Bank’s Grade B examination.',
      'They share a distinguishing feature with RBI Grade B: they test subject knowledge in writing rather than aptitude under time. A regulator wants officers who can read a policy document, analyse a market development and write a reasoned note about it, and the examinations are built to find them.',
    ],
    sections: [
      {
        id: 'shape',
        eyebrow: 'What to expect',
        heading: 'How regulatory recruitment is structured',
        blocks: [
          {
            type: 'p',
            text: 'The common pattern is a phased examination: an objective screening paper covering general aptitude and awareness, then a subject-specific phase that frequently includes descriptive components, and then an interview. Streams are usually specified at application — general, legal, information technology, research, official language and engineering are common — with the subject phase differing by stream.',
          },
          {
            type: 'list',
            title: 'What these examinations reward',
            items: [
              { text: 'Subject depth over aptitude speed', note: 'economics, finance, commerce, management and law feature far more heavily than reasoning puzzles.' },
              { text: 'Written expression', note: 'descriptive papers requiring analysis, precis and essay writing appear in most of these recruitments.' },
              { text: 'Regulatory and sectoral awareness', note: 'the regulator’s own mandate, recent developments in the sector it oversees, and the surrounding policy debate.' },
              { text: 'Stream-specific expertise', note: 'legal, IT and research streams test professional knowledge at a genuine level.' },
            ],
          },
        ],
      },
      {
        id: 'prepare',
        eyebrow: 'Preparation',
        heading: 'How to approach them',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Treat them as subject examinations, not aptitude tests.', note: 'A banking-exam preparation will clear the screening phase and struggle thereafter.' },
              { text: 'Read the regulator’s own material.', note: 'Annual reports, consultation papers and circulars tell you what the institution cares about, which is what the papers ask.' },
              { text: 'Write regularly from the first month.', note: 'Descriptive components reward structured argument produced under time, and that skill accumulates slowly.' },
              { text: 'Follow the sector, not just the news.', note: 'The debate around a development matters more than the development itself.' },
            ],
          },
          {
            type: 'links',
            title: 'Related preparation',
            items: [
              { label: 'RBI Grade B guide', to: '/government-exams/banking/rbi-grade-b/' },
              { label: 'Banking exams', to: '/government-exams/banking/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How are regulatory body exams different from banking exams?',
        a: 'They test subject knowledge in writing rather than aptitude under time. Where a banking mains paper rewards speed on data interpretation and puzzles, a regulatory examination asks you to analyse an economic or legal question and write a reasoned response. Reasoning and quantitative aptitude generally appear only in the screening phase; the phase that decides selection is subject-based and frequently descriptive.',
      },
      {
        q: 'What streams do regulators recruit for?',
        a: 'Most specify streams at the application stage — general, legal, information technology, research, official language and engineering are common — with the subject phase differing by stream. A legal stream candidate faces a genuine law paper; an IT stream candidate faces a technical one. Because the stream determines the examination you sit, the choice is made before preparation begins and cannot be revisited afterwards.',
      },
      {
        q: 'How should I prepare for the descriptive papers?',
        a: 'By writing from the first month rather than the last. Descriptive components ask you to produce a structured, reasoned response under time — a precis, an analysis, an essay — and that is a skill that accumulates slowly and cannot be acquired in the weeks after a screening result. Read the regulator’s own annual reports and consultation papers to learn what it considers important, form views on the current debates in its sector, and practise writing them down against a clock.',
      },
    ],
  },

  '/government-exams/engineering-psu/': {
    title: 'Engineering & PSU Exams 2026: GATE-Based Recruitment Guide',
    description:
      'Engineering and PSU recruitment guide — how public sector undertakings hire through GATE, plus direct recruitment and the alternatives.',
    lead: [
      'Engineering graduates enter government service through several doors. The largest is GATE: a great many public sector undertakings shortlist for engineering posts on GATE score rather than conducting their own written examination. Alongside that sit the Engineering Services Examination, technical recruitment through SSC and the Railway Recruitment Boards, and direct recruitment by individual organisations.',
      'The routes differ enormously in what they reward. GATE-based recruitment wants a high rank in one paper. Engineering Services wants degree-level depth expressed in handwritten conventional answers. SSC JE and RRB JE want diploma-level technical knowledge tested objectively. Choosing between them is largely a question of what kind of examination suits you.',
    ],
    sections: [
      {
        id: 'routes',
        eyebrow: 'The routes',
        heading: 'How engineers enter government service',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm eligibility and the recruitment mechanism in each current advertisement.',
            head: ['Route', 'Level', 'What it tests', 'Selection after the written stage'],
            rows: [
              ['GATE-based PSU recruitment', 'Engineering degree', 'One subject paper plus general aptitude', 'Group discussion and interview by the organisation'],
              ['UPSC Engineering Services', 'Engineering degree', 'Objective prelims plus conventional handwritten mains', 'A 200-mark personality test'],
              ['SSC JE', 'Diploma or degree', 'General engineering plus reasoning and awareness', 'Document verification'],
              ['RRB JE', 'Diploma or degree', 'Technical abilities carrying two thirds of CBT 2', 'Document verification and medical'],
              ['Direct PSU recruitment', 'Varies', 'The organisation’s own written test', 'Interview'],
            ],
          },
        ],
      },
      {
        id: 'gate',
        eyebrow: 'The GATE route',
        heading: 'Why GATE is the widest door',
        blocks: [
          {
            type: 'p',
            text: 'A GATE score is valid for three years and is used by a large number of public sector undertakings for engineering recruitment, which makes a single strong performance usable across several organisations and several advertisement cycles. That combination — one examination, long validity, many employers — makes it the most efficient route for most engineering graduates, and it is why GATE preparation is worth treating as the default rather than as one option among several.',
          },
          {
            type: 'list',
            title: 'What a PSU-targeting GATE preparation needs',
            items: [
              { text: 'A high rank rather than a qualifying score', note: 'PSU shortlists are drawn from the top of the distribution, which is a different target from postgraduate admission.' },
              { text: 'Your own discipline’s paper', note: 'organisations recruit against specific papers, so the choice must match the posts you want.' },
              { text: 'The general aptitude marks secured completely', note: 'fifteen marks requiring no engineering knowledge, and routinely under-practised.' },
              { text: 'Interview preparation', note: 'PSUs conduct their own group discussion and interview, which draws on your discipline and the sector.' },
            ],
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'GATE', to: '/entrance-exams/pg-research/gate/' },
              { label: 'UPSC Engineering Services', to: '/government-exams/upsc/engineering-services/' },
              { label: 'SSC JE', to: '/government-exams/ssc/ssc-je/' },
              { label: 'RRB JE', to: '/government-exams/railways/rrb-je/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do PSUs recruit through GATE?',
        a: 'A large number of public sector undertakings advertise engineering vacancies and shortlist candidates on their GATE score in the relevant discipline paper, followed by the organisation’s own group discussion and interview process. Because a GATE score is valid for three years, a single strong performance can be used across several organisations and several advertisement cycles, which makes it the most efficient route into public sector engineering employment for most graduates.',
      },
      {
        q: 'Should I take GATE or the Engineering Services Examination?',
        a: 'They reward different abilities. GATE is a three-hour objective paper and its score opens both postgraduate admission and PSU recruitment. Engineering Services requires degree-level depth expressed in conventional handwritten papers — full solutions with derivations, diagrams and stated assumptions — which is a skill most candidates have not used since their degree examinations. ESE leads to Class I technical posts directly; GATE leads to PSU recruitment and postgraduate study. Many candidates prepare for both, since the technical content overlaps substantially.',
      },
      {
        q: 'What is the difference between SSC JE and RRB JE?',
        a: 'Both recruit Junior Engineers at diploma level and both weight technical content heavily, but they differ in structure and in the organisations they serve. SSC JE fills posts in central government departments such as CPWD, MES and BRO through two papers with general engineering carrying half of Paper 1. RRB JE fills railway engineering posts through two computer-based tests in which Technical Abilities alone carries 100 of the 150 marks in the second. RRB JE also includes small computers and environment sections that are among the cheapest marks in either examination.',
      },
    ],
  },

  '/government-exams/judiciary/': {
    title: 'Judiciary Exams 2026: Civil Judge & Judicial Service Guide',
    description:
      'Judiciary exam guide — state judicial service examinations, the three-stage structure, bare act study and answer writing for law graduates.',
    lead: [
      'State judicial service examinations recruit Civil Judges at the entry level and, through separate higher judicial service examinations, District Judges from practising advocates. They are conducted by state public service commissions or high courts, which means each state runs its own with its own syllabus emphasis.',
      'What they share is a structure and a demand. Preliminary, mains and interview; and a requirement that candidates know the bare provisions of the major statutes precisely enough to apply them in writing. Judiciary preparation is, more than almost any other examination, a matter of knowing the text.',
    ],
    sections: [
      {
        id: 'structure',
        eyebrow: 'The structure',
        heading: 'Three stages, and what each asks',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Preliminary examination',
                'An objective paper covering the major substantive and procedural laws along with general knowledge and, in many states, English. Qualifying in nature — its marks generally do not carry into the final merit, though the syllabus it covers does.',
              ],
              [
                'Main examination',
                'Descriptive papers on substantive law, procedural law, and language, requiring answers that state the applicable provision, apply it to the facts and reach a reasoned conclusion. This is where the examination is decided.',
              ],
              [
                'Interview',
                'A viva before a board, testing legal understanding, awareness of recent developments, and the temperament expected of a judicial officer. It carries meaningful weight in the final merit.',
              ],
            ],
          },
        ],
      },
      {
        id: 'preparation',
        eyebrow: 'Preparation',
        heading: 'What judiciary preparation actually requires',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Bare acts read repeatedly', note: 'not commentaries first. The examinations test whether you know the provision, and reading the statute itself is what builds that.' },
              { text: 'Section numbers held accurately', note: 'a mains answer that cites the right provision by number reads very differently from one that describes it vaguely.' },
              { text: 'Answer writing from early on', note: 'the mains papers reward structured application — provision, facts, reasoning, conclusion — and that structure has to become automatic.' },
              { text: 'Recent judgments followed', note: 'both the mains papers and the interview draw on significant recent decisions.' },
              { text: 'The state’s own local laws', note: 'many state examinations include local and land laws that no national material covers.' },
            ],
          },
          {
            type: 'p',
            text: 'The state-specific component deserves emphasis. Local laws, land revenue codes and rent legislation vary by state and appear in that state’s examination, and they are entirely absent from general judiciary preparation material. Identifying them early, from the state’s own syllabus and past papers, prevents a predictable gap.',
          },
          {
            type: 'links',
            title: 'Related resources',
            items: [
              { label: 'Legal reasoning study material', to: '/study-material/legal-reasoning/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'CLAT exam guide', to: '/entrance-exams/law/clat/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the structure of a judicial service examination?',
        a: 'Three stages: an objective preliminary examination covering the major statutes along with general knowledge and often English; a descriptive main examination on substantive law, procedural law and language, which is where the merit is built; and an interview before a board testing legal understanding and judicial temperament. Each state conducts its own examination through its public service commission or high court, so syllabus emphasis, paper composition and marks vary.',
      },
      {
        q: 'Should I read bare acts or commentaries for judiciary exams?',
        a: 'Bare acts first, and repeatedly. These examinations test whether you know the provisions — often expecting them to be cited by section number and applied precisely to a set of facts — and commentaries, however valuable for understanding, do not build that recall. The productive sequence is to read the bare act until the structure and numbering are familiar, then use a commentary to resolve what you do not understand, then return to the bare act.',
      },
      {
        q: 'Do judiciary exams include state-specific laws?',
        a: 'Frequently, yes. Many state judicial service examinations include local laws, land revenue codes, rent legislation and other state enactments that no national preparation material covers. Because these can account for a meaningful block of marks and are invisible to a candidate preparing from general sources, identifying them early — from the state’s own published syllabus and its past papers — is one of the more valuable first steps in a judiciary preparation.',
      },
    ],
  },

  '/government-exams/agriculture/': {
    title: 'Agriculture Exams 2026: IBPS AFO, ICAR, NABARD & More',
    description:
      'Agriculture exam guide — agriculture field officer, research, extension and rural banking recruitment for agricultural science graduates.',
    lead: [
      'Agricultural science graduates have a distinct set of recruitment routes that non-agriculture candidates cannot access — specialist officer posts in banking, research and extension positions under the agricultural research system, and development roles in rural finance institutions.',
      'That exclusivity is the main thing to understand about this category. The eligible pool is far smaller than for general recruitment, and the professional knowledge component of these examinations is genuinely specialised, which means a degree in agriculture is an advantage rather than merely a qualification.',
    ],
    sections: [
      {
        id: 'routes',
        eyebrow: 'The routes',
        heading: 'Where an agriculture degree takes you',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Agriculture Field Officer in banking', note: 'a specialist officer cadre recruited through the IBPS specialist officer process, combining banking aptitude with an agriculture professional knowledge paper.' },
              { text: 'Research and teaching posts', note: 'recruited through the agricultural research system’s own examinations, testing the discipline at postgraduate depth.' },
              { text: 'Rural development and finance', note: 'development officer and assistant manager posts in institutions serving rural credit and agricultural finance.' },
              { text: 'State agriculture department posts', note: 'extension officer and agriculture officer roles recruited through state public service commissions.' },
              { text: 'Entrance examinations for postgraduate study', note: 'in agricultural sciences, veterinary science and allied disciplines.' },
            ],
          },
        ],
      },
      {
        id: 'preparation',
        eyebrow: 'Preparation',
        heading: 'The two halves of an agriculture recruitment',
        blocks: [
          {
            type: 'p',
            text: 'Most of these examinations combine a general component — reasoning, quantitative aptitude, English and general awareness — with a professional knowledge paper in agriculture. The general half is shared with banking and other recruitments and can be prepared from ordinary material. The professional half draws on agronomy, soil science, horticulture, plant protection, animal husbandry, agricultural economics and extension, and is best prepared from your own degree material.',
          },
          {
            type: 'steps',
            title: 'A workable approach',
            items: [
              { text: 'Prepare the general component alongside banking aspirants.', note: 'It is the same content and the same practice.' },
              { text: 'Revise your degree subjects systematically for the professional paper.', note: 'From your own textbooks, guided by past papers.' },
              { text: 'Follow agricultural policy and scheme news.', note: 'Government schemes, minimum support prices, credit programmes and rural finance recur in the awareness sections.' },
              { text: 'Do not neglect the general half.', note: 'It is where a strong professional candidate most often falls short.' },
            ],
          },
          {
            type: 'links',
            title: 'Related preparation',
            items: [
              { label: 'Banking exams', to: '/government-exams/banking/' },
              { label: 'IBPS RRB guide', to: '/government-exams/banking/ibps-rrb/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'Environment notes', to: '/study-material/environment/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What jobs can an agriculture graduate get through competitive exams?',
        a: 'Agriculture Field Officer posts in public sector banks through the specialist officer process, research and teaching positions under the agricultural research system, development and assistant manager roles in rural finance institutions, and agriculture officer and extension officer posts in state departments. Because these require an agricultural sciences degree, the eligible pool is far smaller than for general recruitment, which makes the qualification a genuine advantage rather than just an entry requirement.',
      },
      {
        q: 'What does the agriculture professional knowledge paper cover?',
        a: 'Typically agronomy, soil science, horticulture, plant protection and pathology, animal husbandry and dairying, agricultural economics and marketing, agricultural extension, and government schemes and rural credit relevant to the sector. The depth is that of a bachelor’s degree in agriculture, which makes your own degree textbooks the right primary source, guided by past papers to see where the emphasis falls.',
      },
      {
        q: 'How should I balance general and professional preparation?',
        a: 'Do not let the professional paper crowd out the general one. Candidates with a strong agricultural background frequently score well on professional knowledge and fall short on reasoning, quantitative aptitude and English, where they are competing against candidates who have prepared for those specifically for months. The general component is shared with banking preparation and should be treated with the same seriousness that a banking aspirant gives it.',
      },
    ],
  },

  '/government-exams/healthcare/': {
    title: 'Healthcare & Nursing Exams 2026: AIIMS, ESIC, State Nursing',
    description:
      'Healthcare and nursing recruitment guide — nursing officer, paramedical and allied health examinations, and how to prepare for them.',
    lead: [
      'Government healthcare recruitment covers nursing officers, paramedical staff, technicians and allied health professionals across central institutions, employee insurance hospitals, defence medical establishments and state health services. Each recruiting body runs its own examination, but they converge on a common pattern.',
      'That pattern is a professional knowledge paper carrying most of the marks, with a smaller general aptitude and awareness component alongside it. For a nursing or paramedical graduate, that means your degree material is the primary preparation source, and the general half is the part most likely to be neglected.',
    ],
    sections: [
      {
        id: 'roles',
        eyebrow: 'The recruitments',
        heading: 'What government healthcare recruitment covers',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Nursing Officer', note: 'the largest category, recruited by central institutions, employee insurance hospitals, railway health services, defence establishments and state health departments.' },
              { text: 'Paramedical and technician posts', note: 'laboratory technicians, radiographers, pharmacists, physiotherapists, operation theatre assistants and similar roles.' },
              { text: 'Allied health professionals', note: 'dietitians, occupational therapists, audiologists and other specialist roles recruited against specific qualifications.' },
              { text: 'Medical officer posts', note: 'recruited against an MBBS or postgraduate medical qualification, generally through state public service commissions or central health services.' },
            ],
          },
        ],
      },
      {
        id: 'preparation',
        eyebrow: 'Preparation',
        heading: 'How these examinations are built',
        blocks: [
          {
            type: 'p',
            text: 'The professional knowledge component typically dominates — anatomy, physiology, medical-surgical nursing, community health, obstetrics and paediatrics for nursing posts, and the corresponding professional syllabus for paramedical roles. Around it sits a general component covering reasoning, general awareness and sometimes English, and it is this smaller half where clinically strong candidates most often lose ground.',
          },
          {
            type: 'steps',
            title: 'A workable approach',
            items: [
              { text: 'Revise your professional syllabus systematically.', note: 'From your own course textbooks, guided by past papers to find where the emphasis falls.' },
              { text: 'Practise objective questions on clinical material.', note: 'Nursing and paramedical courses often examine descriptively; these recruitments do not.' },
              { text: 'Prepare the general component deliberately.', note: 'It is small but decisive at the margin, and it is the half a clinical preparation ignores.' },
              { text: 'Follow health policy and programme news.', note: 'National health programmes and schemes appear reliably in the awareness sections.' },
            ],
          },
          {
            type: 'links',
            title: 'Related resources',
            items: [
              { label: 'Biology study material', to: '/study-material/biology/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What do government nursing officer exams cover?',
        a: 'The professional knowledge component dominates — anatomy and physiology, medical-surgical nursing, community health nursing, obstetrics and gynaecological nursing, paediatric nursing, psychiatric nursing, nursing management and fundamentals — alongside a smaller general component covering reasoning, general awareness and sometimes English. The professional half is best prepared from your own course textbooks, guided by past papers to see where the emphasis actually falls.',
      },
      {
        q: 'Which bodies recruit nursing and paramedical staff?',
        a: 'Central medical institutions, the employee state insurance corporation’s hospitals, railway health services, defence medical establishments, and state health departments and public service commissions all recruit separately, each with its own examination and its own notification calendar. Because the professional syllabus is broadly common across them, one preparation serves several — but eligibility, age bands and the general component do vary, so each notification is worth reading.',
      },
      {
        q: 'Why do clinically strong candidates sometimes score poorly?',
        a: 'Two reasons, both fixable. First, most nursing and paramedical courses examine descriptively, while these recruitments use objective questions with close distractors — a format that rewards a precision that descriptive answering does not train. Second, the general component covering reasoning, awareness and English is small but decisive at the margin, and a preparation focused entirely on clinical revision leaves it untouched.',
      },
    ],
  },

  '/government-exams/police/': {
    title: 'Police Exams 2026: Constable & SI Recruitment Guide',
    description:
      'Police recruitment guide — central and state constable and sub-inspector exams, physical and medical standards, and how to prepare.',
    lead: [
      'Police recruitment in India runs through dozens of separate processes — each state’s own constable and sub-inspector recruitment, plus central examinations for the armed police forces, the railway police and the Delhi Police. They differ in syllabus detail and language, and they share a structure so consistent that preparing for one prepares you substantially for the others.',
      'The most important thing that structure implies is this: the written paper is rarely the hardest part. The physical efficiency test, the physical standard test and the detailed medical examination eliminate far more candidates, and they are the stages that cannot be prepared for in a final month.',
    ],
    sections: [
      {
        id: 'routes',
        eyebrow: 'The routes',
        heading: 'Central and state police recruitment',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'State police constable and sub-inspector', note: 'conducted by each state’s recruitment board, usually in the state language, with a substantial block of state-specific content.' },
              { text: 'SSC GD Constable', note: 'central recruitment for General Duty Constable posts across BSF, CISF, CRPF, SSB, ITBP and Assam Rifles.' },
              { text: 'SSC CPO', note: 'Sub-Inspector in the Delhi Police and the central armed police forces, with a distinctive second paper devoted entirely to English.' },
              { text: 'RPF Constable and Sub-Inspector', note: 'the Railway Protection Force, recruited through the Railway Recruitment Boards.' },
              { text: 'UPSC CAPF Assistant Commandant', note: 'direct officer entry into the armed police forces, with a 200-mark descriptive paper.' },
            ],
          },
        ],
      },
      {
        id: 'shared',
        eyebrow: 'What they share',
        heading: 'The common shape, and what it means for preparation',
        blocks: [
          {
            type: 'p',
            text: 'Almost every police recruitment follows the same four-stage sequence: a written examination, a physical efficiency test, a physical standard test, and a detailed medical examination. The written papers converge on general knowledge and current affairs, reasoning, arithmetic and a language section — with general knowledge almost always the largest component, which inverts the priority most candidates bring from SSC or banking preparation.',
          },
          {
            type: 'steps',
            title: 'Three things to do in week one',
            items: [
              { text: 'Read the medical standards for your target recruitment.', note: 'Vision, colour perception, tattoos, flat feet and knock knees have all ended candidacies after every other stage was cleared. Several are identifiable in advance and some are correctable given time.' },
              { text: 'Start running.', note: 'Whatever distance you can manage, built up gradually. This is the longest-lead component and it cannot be compressed.' },
              { text: 'Begin a daily general knowledge habit.', note: 'The largest written section, and the most improvable through consistent effort.' },
            ],
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'SSC GD Constable', to: '/government-exams/ssc/ssc-gd/' },
              { label: 'SSC CPO Sub-Inspector', to: '/government-exams/ssc/ssc-cpo/' },
              { label: 'RPF', to: '/government-exams/railways/rpf/' },
              { label: 'UPSC CAPF', to: '/government-exams/upsc/capf/' },
              { label: 'State government exams', to: '/government-exams/state/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which stage eliminates the most police candidates?',
        a: 'The medical examination, followed by the physical efficiency test. Written papers are designed to be widely clearable, since these recruitments fill large numbers of posts from very large fields. The physical stages require months of consistent training to pass with margin, and the medical assesses vision and colour perception, hearing, dental condition, orthopaedic conditions such as flat feet and knock knees, and rules on body marks — several of which are identifiable in advance and some correctable given time.',
      },
      {
        q: 'How do state police exams differ from central ones?',
        a: 'Mainly in language and content. State recruitments are usually conducted in the state language and include a substantial block of state-specific material — the state’s history, geography, districts, culture, prominent figures and administrative structure — which national competitive material does not cover at all. Central recruitments such as SSC GD, SSC CPO and RPF cover national content only. Physical and medical standards also differ between forces and often by region.',
      },
      {
        q: 'Which subject carries the most marks in police written papers?',
        a: 'General knowledge and current affairs, in almost every police recruitment, usually by a clear margin over reasoning, arithmetic and language. This inverts the usual competitive-exam priority, and candidates arriving from SSC or banking preparation — where quantitative aptitude dominates — routinely mis-weight their study. General knowledge is also the most improvable section, since it responds directly to steady daily revision rather than to a skill that builds slowly.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Entrance exam categories
     ══════════════════════════════════════════════════════════════ */

  '/entrance-exams/engineering/': {
    title: 'Engineering Entrance Exams 2026: JEE, BITSAT, State CETs',
    description:
      'Engineering entrance guide — JEE Main and Advanced, BITSAT, VITEEE, COMEDK and the state CETs compared, with marking scheme differences.',
    lead: [
      'Engineering admission in India runs through a national examination, a handful of private-institution tests and a set of state common entrance tests. They cover the same physics, chemistry and mathematics, which is why candidates sit several — but they differ sharply in marking scheme, and that difference is where marks are most often lost.',
      'Two of these examinations have no negative marking at all. One deducts a mark against three. One changes its rules every year deliberately. A candidate who carries one exam’s attempt discipline into another is guaranteed to leave marks on the table or throw them away.',
    ],
    sections: [
      {
        id: 'compare',
        eyebrow: 'Comparing',
        heading: 'The marking schemes, side by side',
        blocks: [
          {
            type: 'table',
            caption:
              'The single most important comparison for planning. Confirm each in the current information bulletin.',
            head: ['Exam', 'Marking', 'Pace', 'What it rewards'],
            rows: [
              ['JEE Main', '+4 / −1', 'Moderate', 'Informed attempting; the ratio is forgiving'],
              ['JEE Advanced', 'Variable each year', 'Demanding', 'Adaptability and depth of problem solving'],
              ['BITSAT', '+3 / −1', 'Fast — 130 questions in 3 hours', 'Speed, plus English and logical reasoning'],
              ['VITEEE', 'No negative marking', 'Brisk', 'Attempting everything; nothing should be blank'],
              ['COMEDK', 'No negative marking', 'Generous — a minute per question', 'Accuracy across three equally weighted subjects'],
              ['AP / TG EAPCET', 'No negative marking', 'Comfortable', 'Mathematics, which is half the engineering paper'],
            ],
          },
        ],
      },
      {
        id: 'strategy',
        eyebrow: 'Strategy',
        heading: 'What the differences mean in practice',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'In VITEEE, COMEDK and the EAPCETs, never leave a blank', note: 'no penalty applies, so an unanswered question is a discarded mark. The careful skipping that serves you in JEE is exactly wrong here.' },
              { text: 'In JEE Main, attempt more than instinct suggests', note: 'four marks against one is forgiving enough that any genuine narrowing makes a guess worthwhile.' },
              { text: 'In BITSAT, finishing is the challenge', note: 'and thirty of its questions are English and logical reasoning, which a JEE preparation covers not at all.' },
              { text: 'In the EAPCETs, mathematics is half the paper', note: 'a weighting no national entrance uses, and one that should reshape your study allocation.' },
              { text: 'In JEE Advanced, read the instruction page', note: 'the marking scheme is announced there and changes between years and between papers.' },
            ],
          },
        ],
      },
      {
        id: 'plan',
        eyebrow: 'Planning',
        heading: 'One preparation, several exams',
        blocks: [
          {
            type: 'p',
            text: 'Prepare for JEE Main as the base — it covers the science content of every other examination here at sufficient or greater depth. Then add what each specific test requires in the weeks before it: logical reasoning and English for BITSAT, discrete mathematics for VITEEE, mathematics weighting for the EAPCETs, and above all the correct attempt discipline for each marking scheme.',
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'JEE Main', to: '/entrance-exams/engineering/jee-main/' },
              { label: 'JEE Advanced', to: '/entrance-exams/engineering/jee-advanced/' },
              { label: 'BITSAT', to: '/entrance-exams/engineering/bitsat/' },
              { label: 'VITEEE', to: '/entrance-exams/engineering/viteee/' },
              { label: 'COMEDK UGET', to: '/entrance-exams/engineering/comedk/' },
              { label: 'AP EAPCET', to: '/entrance-exams/engineering/ap-eapcet/' },
              { label: 'TG EAPCET', to: '/entrance-exams/engineering/tg-eapcet/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can one preparation cover all engineering entrance exams?',
        a: 'The science content, yes — a proper JEE Main preparation covers physics, chemistry and mathematics at sufficient or greater depth for every other engineering entrance. What it does not cover is each exam’s specifics: BITSAT’s English and logical reasoning sections, VITEEE’s discrete mathematics, the EAPCETs’ mathematics-heavy weighting, and above all the different marking schemes, which require genuinely different attempt discipline.',
      },
      {
        q: 'Which engineering entrance exams have no negative marking?',
        a: 'VITEEE, COMEDK UGET and both the Andhra Pradesh and Telangana EAPCETs apply no deduction for wrong answers. In all of these, leaving a question unanswered is a guaranteed loss where a guess costs nothing — yet candidates trained on JEE-style papers routinely submit them with blanks, out of a caution that serves them well elsewhere and costs them marks here. Practising with the correct rule is how you retrain that instinct.',
      },
      {
        q: 'How is JEE Advanced different from JEE Main?',
        a: 'The syllabi overlap in outline but not exactly, and the depth differs sharply. JEE Main questions generally test one concept at a time and reward speed and accuracy; JEE Advanced questions typically combine two or three concepts and require multi-step reasoning on problems that cannot be answered by recognising a familiar type. Advanced also uses a marking scheme that changes deliberately between years and between its two papers, which makes adaptability part of what it examines.',
      },
    ],
  },

  '/entrance-exams/medical/': {
    title: 'Medical Entrance Exams 2026: NEET UG, NEET PG & INI-CET',
    description:
      'Medical entrance guide — NEET UG for MBBS admission, NEET PG and INI-CET for postgraduate medicine, and how they differ.',
    lead: [
      'Medical entrance in India divides cleanly into two levels. NEET UG is the single entrance for undergraduate medical, dental, AYUSH and allied programmes — no recognised college conducts its own. At postgraduate level, NEET PG covers admission generally and INI-CET covers the Institutes of National Importance.',
      'The two levels are so different in character that grouping them can mislead. NEET UG is a school-syllabus precision test taken by millions; the postgraduate examinations are clinical papers taken by doctors, with question formats, time rules and marking schemes that have no undergraduate counterpart.',
    ],
    sections: [
      {
        id: 'levels',
        eyebrow: 'The two levels',
        heading: 'Undergraduate and postgraduate medical entrance',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm the current structure of each in its own information bulletin.',
            head: ['Exam', 'For', 'Character', 'Marking'],
            rows: [
              ['NEET UG', 'MBBS, BDS, AYUSH and allied programmes', 'Class 11 and 12 science, closely tied to NCERT', '+4 / −1'],
              ['NEET PG', 'MD, MS and PG diploma programmes', 'Clinical vignettes across the MBBS curriculum', '+4 / −1'],
              ['INI-CET', 'AIIMS, PGIMER, JIPMER, NIMHANS and SCTIMST', 'The same curriculum probed further', '+1 / −1/3'],
            ],
          },
          {
            type: 'p',
            text: 'The marking difference between NEET PG and INI-CET is worth pausing on. A wrong answer costs five marks relative to a right one in NEET PG and one and a third in INI-CET, which means the guessing threshold should be quite different between them. Candidates who prepare for both and apply one discipline to both leave marks unclaimed in INI-CET.',
          },
        ],
      },
      {
        id: 'ug',
        eyebrow: 'Undergraduate',
        heading: 'What decides a NEET UG result',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Biology is half the paper', note: 'ninety of a hundred and eighty questions, and the most reliably scoreable half because it rewards thorough NCERT study.' },
              { text: 'NCERT is the effective syllabus', note: 'questions in biology and inorganic chemistry frequently trace to a specific line, table or diagram caption.' },
              { text: 'Physics is the differentiator', note: 'the section where scores vary most, and the one needing problems rather than reading.' },
              { text: 'Ranks are compressed', note: 'so avoiding a careless error usually matters more than an extra speculative attempt.' },
            ],
          },
        ],
      },
      {
        id: 'pg',
        eyebrow: 'Postgraduate',
        heading: 'What changes at postgraduate level',
        blocks: [
          {
            type: 'p',
            text: 'The postgraduate examinations are applied rather than factual. A question presents a clinical scenario and asks for the diagnosis, the next investigation or the appropriate management — which means question practice teaches more per hour than reading does. They are also taken by doctors preparing alongside clinical work, which makes fragmented study the norm and sustained spaced revision essential rather than optional.',
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'NEET UG', to: '/entrance-exams/medical/neet-ug/' },
              { label: 'NEET PG', to: '/entrance-exams/medical/neet-pg/' },
              { label: 'INI-CET', to: '/entrance-exams/medical/ini-cet/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is NEET the only entrance for medical admission in India?',
        a: 'For recognised undergraduate medical, dental, AYUSH, veterinary and allied programmes, yes — no recognised college conducts its own separate entrance. Admission is made from the NEET UG merit list through all-India quota counselling conducted centrally and state counselling conducted by each state, subject to meeting the qualifying percentile for your category. At postgraduate level, NEET PG covers admission generally while INI-CET is a separate examination for the Institutes of National Importance.',
      },
      {
        q: 'How is NEET PG different from NEET UG?',
        a: 'Almost entirely. NEET UG tests class 11 and 12 science factually and stays close to NCERT; NEET PG tests the whole MBBS curriculum through clinical vignettes that ask what to do next rather than what something is called. NEET PG is computer-based rather than pen-and-paper, may use time-bound sections that remove the ability to return to a question, and is taken by doctors preparing alongside clinical work rather than by students preparing full time.',
      },
      {
        q: 'Should I prepare separately for INI-CET and NEET PG?',
        a: 'No — prepare for both together, since the syllabus is shared, then add depth for INI-CET rather than breadth. INI-CET probes the same topics further, asking about the exception rather than the rule and the mechanism rather than the classification, so the useful addition is upgrading from summaries to standard textbooks at least in your stronger subjects. You should also recalibrate your guessing threshold, since INI-CET’s one-third deduction is far gentler than NEET PG’s.',
      },
    ],
  },

  '/entrance-exams/mba/': {
    title: 'MBA Entrance Exams 2026: CAT, XAT, NMAT, SNAP & More',
    description:
      'MBA entrance guide — CAT, XAT, NMAT, SNAP, CMAT, MAT and GMAT compared on structure, attempts and marking, with preparation strategy.',
    lead: [
      'Seven management entrance tests, all measuring roughly the same broad ability, and differing almost entirely in structure. Whether sections are separately timed, whether you may return to a question, whether wrong answers are penalised, whether unattempted ones are, and whether you may sit the test more than once — those rules decide strategy far more than any syllabus difference.',
      'That structural variety is genuinely useful to a candidate. Some of these tests suit a fast, accurate worker; others suit a deep problem solver; two of them let you attempt more than once and count your best score. Choosing which to target is worth as much thought as preparing for them.',
    ],
    sections: [
      {
        id: 'compare',
        eyebrow: 'Comparing',
        heading: 'The structural differences that matter',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm current rules in each test’s own bulletin; several have been revised.',
            head: ['Exam', 'Sectional timing', 'Negative marking', 'Multiple attempts'],
            rows: [
              ['CAT', 'Yes — 40 minutes per section, no return', 'Yes on MCQs, none on TITA', 'No — once a year'],
              ['XAT', 'No', 'Yes, plus a penalty for excessive blanks', 'No — once a year'],
              ['NMAT', 'Yes, in a chosen order', 'None', 'Yes — up to three, best counted'],
              ['SNAP', 'No — one 60-minute paper', 'Yes', 'Permitted in recent cycles'],
              ['CMAT', 'No', 'Yes', 'No'],
              ['MAT', 'No', 'Yes', 'Several cycles a year'],
              ['GMAT', 'Yes, order chosen', 'Adaptive scoring', 'Yes, after an interval'],
            ],
          },
        ],
      },
      {
        id: 'choosing',
        eyebrow: 'Choosing',
        heading: 'Which suits how you work',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'If you work fast and accurately on routine questions', note: 'SNAP and NMAT reward that directly, and both are gentler on difficulty than CAT.' },
              { text: 'If you are a deep problem solver under pressure', note: 'CAT rewards set selection and multi-step reasoning more than any of the others.' },
              { text: 'If you have strong general knowledge and business awareness', note: 'CMAT, MAT and XAT all carry knowledge sections that CAT does not.' },
              { text: 'If you want more than one chance', note: 'NMAT allows three attempts within a window with the best counted, MAT runs several cycles a year, and the GMAT can be retaken after an interval.' },
              { text: 'If you are applying abroad as well', note: 'the GMAT serves both international and some Indian executive programmes.' },
            ],
          },
        ],
      },
      {
        id: 'plan',
        eyebrow: 'Planning',
        heading: 'One preparation, several tests',
        blocks: [
          {
            type: 'p',
            text: 'Prepare for CAT as the base — its difficulty exceeds most of the others and its content is a superset of theirs. Then add each test’s specifics in the weeks before it: Decision Making and general knowledge for XAT, business environment for MAT, innovation and entrepreneurship for CMAT, data sufficiency for NMAT and SNAP, and the correct attempt discipline for each marking scheme.',
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'CAT', to: '/entrance-exams/mba/cat/' },
              { label: 'XAT', to: '/entrance-exams/mba/xat/' },
              { label: 'NMAT', to: '/entrance-exams/mba/nmat/' },
              { label: 'SNAP', to: '/entrance-exams/mba/snap/' },
              { label: 'CMAT', to: '/entrance-exams/mba/cmat/' },
              { label: 'MAT', to: '/entrance-exams/mba/mat/' },
              { label: 'GMAT', to: '/entrance-exams/mba/gmat/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which MBA entrance exam should I take?',
        a: 'Start from the schools you want, since acceptance differs — the IIMs use CAT, XLRI uses XAT, the Symbiosis institutes use SNAP, NMIMS uses NMAT, and a wide range of AICTE-approved institutions accept CMAT and MAT. Beyond that, consider how you work: SNAP and NMAT reward fast accurate work on routine questions, CAT rewards deep problem solving and set selection, and XAT, CMAT and MAT reward knowledge sections that CAT does not test at all.',
      },
      {
        q: 'Can I take MBA entrance exams more than once?',
        a: 'Some of them. NMAT permits up to three attempts within its testing window with the best score counted, MAT runs several cycles a year, SNAP has permitted multiple attempts in recent cycles, and the GMAT can be retaken after a specified interval with scores sent selectively. CAT, XAT and CMAT are once-a-year tests. Where multiple attempts exist, they are the most under-used advantage those exams offer — an early attempt becomes calibration rather than a decisive event.',
      },
      {
        q: 'Can one preparation cover several MBA entrances?',
        a: 'Largely yes. Prepare for CAT as the base, since its difficulty exceeds most of the others and its quantitative, verbal and reasoning content is a superset of theirs. Then add each test’s specifics in the weeks before it: XAT’s Decision Making section and general knowledge, CMAT’s innovation and entrepreneurship section, MAT’s business environment section, data sufficiency for NMAT and SNAP, and — most importantly — the correct attempt discipline for each marking scheme, since they differ considerably.',
      },
    ],
  },

  '/entrance-exams/law/': {
    title: 'Law Entrance Exams 2026: CLAT & AILET Preparation Guide',
    description:
      'Law entrance guide — CLAT and AILET compared, the comprehension-based format, why no prior legal knowledge is needed, and preparation.',
    lead: [
      'Admission to the national law universities runs through two examinations: CLAT, conducted by the consortium of those universities, and AILET, conducted by National Law University Delhi, which sits outside it. Most serious aspirants sit both, and the preparation overlaps almost entirely.',
      'The single most important thing to understand about both is that they no longer test legal knowledge. They are comprehension examinations — a passage supplies whatever principle a question needs, and what is assessed is whether you can read it accurately and apply it under time. A candidate memorising legal provisions is preparing for an examination that no longer exists.',
    ],
    sections: [
      {
        id: 'format',
        eyebrow: 'The format',
        heading: 'Why these are reading examinations',
        blocks: [
          {
            type: 'p',
            text: 'Every section of the modern CLAT is passage-based — English, current affairs, legal reasoning, logical reasoning and even quantitative techniques, which presents data in a passage rather than as standalone problems. AILET follows a similar orientation with three sections rather than five. The consequence for preparation is that the highest-return activity is not subject study but reading: daily, widely, and at increasing speed.',
          },
          {
            type: 'list',
            title: 'What each examination asks',
            items: [
              { text: 'CLAT', note: 'five comprehension-based sections in two hours — English, current affairs and general knowledge, legal reasoning, logical reasoning and quantitative techniques.' },
              { text: 'AILET', note: 'three sections — English, current affairs and general knowledge, and logical reasoning — with general knowledge questioned more directly than CLAT’s passage-based approach.' },
            ],
          },
        ],
      },
      {
        id: 'differences',
        eyebrow: 'Comparing',
        heading: 'Where the two differ',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Separate applications and dates', note: 'NLU Delhi is outside the CLAT consortium entirely, so both must be applied for separately.' },
              { text: 'AILET tests knowledge more directly', note: 'its general knowledge section includes static content and asks rather than supplying, which a CLAT-only preparation leaves uncovered.' },
              { text: 'CLAT is more pace-pressured', note: 'a long, dense paper in two hours, where many candidates do not finish.' },
              { text: 'AILET fills seats at one university', note: 'which concentrates the competition and sharpens the cutoff.' },
            ],
          },
        ],
      },
      {
        id: 'prepare',
        eyebrow: 'Preparation',
        heading: 'What actually builds a law entrance score',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Read a newspaper properly every day.', note: 'Editorials and analysis rather than headlines. It serves English, current affairs and legal reasoning simultaneously.' },
              { text: 'Read demanding long-form writing regularly.', note: 'Reading speed on unfamiliar material is what the papers actually test.' },
              { text: 'Practise applying a stated principle exactly.', note: 'Including when it conflicts with your intuition or with what you believe the law to be. This is a discipline, not knowledge.' },
              { text: 'Add static general knowledge for AILET.', note: 'The clearest gap in a CLAT-only preparation.' },
              { text: 'Always practise under full time.', note: 'Untimed practice conceals the reading endurance problem that decides these exams.' },
            ],
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'CLAT', to: '/entrance-exams/law/clat/' },
              { label: 'AILET', to: '/entrance-exams/law/ailet/' },
              { label: 'Legal reasoning study material', to: '/study-material/legal-reasoning/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need to study law before a law entrance exam?',
        a: 'No, for the undergraduate papers. Both CLAT and AILET supply whatever legal principles their questions require and test whether you can apply them accurately — including when the stated principle conflicts with your intuition or with what you believe the actual law to be. Memorising legal provisions is preparing for an examination format that no longer exists. The postgraduate papers are different and do assume knowledge of the core law curriculum.',
      },
      {
        q: 'Should I take both CLAT and AILET?',
        a: 'Most serious aspirants do, and it makes sense. The examinations are on different dates with separate applications, and the preparation overlaps almost entirely — daily reading, comprehension practice, current affairs and logical reasoning serve both. The addition AILET requires is a body of static general knowledge, since its general knowledge section questions more directly than CLAT’s passage-based approach, and that is worth building from early rather than in the final fortnight.',
      },
      {
        q: 'What is the hardest part of a law entrance exam?',
        a: 'Finishing it, particularly in CLAT. The paper is long and dense, and worked without a clock it feels comfortable — no individual question is hard. Under two hours it becomes a reading endurance test, and many candidates simply do not reach the end. That is why the headline metric in mock analysis should be how many questions you reached, and why reading speed deserves more preparation attention than any individual section.',
      },
    ],
  },

  '/entrance-exams/university/': {
    title: 'University Entrance Exams 2026: CUET UG & CUET PG Guide',
    description:
      'University entrance guide — CUET UG and CUET PG, choosing the right subject papers and codes, and how they replaced board-marks admission.',
    lead: [
      'The Common University Entrance Test replaced board-marks cutoffs as the basis for admission to central universities, at both undergraduate and postgraduate level. It is now the main route into a large and growing set of institutions, including state, deemed and private universities that have joined it.',
      'Its defining feature at both levels is choice. Candidates select which subject papers or which subject paper code to sit, and that selection must match the requirements of every programme and university they intend to apply to. It is the one entrance examination where the most consequential decision is made before any studying begins — and where getting it wrong cannot be corrected later.',
    ],
    sections: [
      {
        id: 'two',
        eyebrow: 'The two examinations',
        heading: 'CUET UG and CUET PG',
        blocks: [
          {
            type: 'table',
            caption: 'Confirm the current structure and paper lists in each information bulletin.',
            head: ['', 'CUET UG', 'CUET PG'],
            rows: [
              ['For', 'Undergraduate admission', 'Postgraduate admission'],
              ['Level', 'Class 12 NCERT syllabus', 'Graduate level, by subject code'],
              ['Selection', 'Languages, domain subjects and a general test', 'One or more subject paper codes'],
              ['Marking', '+5 / −1', '+4 / −1'],
            ],
          },
          {
            type: 'p',
            text: 'Both use forgiving marking schemes — five marks against one at undergraduate level, four against one at postgraduate — which means a blind guess among four options is at worst break-even and any narrowing makes it clearly worthwhile. Candidates who skip conservatively out of habits formed on harsher papers are giving away marks the scheme is offering them.',
          },
        ],
      },
      {
        id: 'choice',
        eyebrow: 'The critical decision',
        heading: 'Choosing your papers correctly',
        blocks: [
          {
            type: 'p',
            text: 'Universities specify which papers or which code they require for each programme, and the requirements are not uniform — one university’s economics programme may require mathematics while another’s does not, and the same programme name at two institutions may accept different postgraduate codes. Compiling those requirements before registering is the most valuable hour of the whole preparation, because a candidate who selects the wrong combination discovers it when applications open, with no remedy.',
          },
          {
            type: 'steps',
            title: 'Before you register',
            items: [
              { text: 'List every programme and university you might apply to.', note: 'Not just your first choice.' },
              { text: 'Find each one’s paper or code requirement in its own admission information.', note: 'Do not infer it from the subject name.' },
              { text: 'Choose a combination that satisfies all of them.', note: 'Within the permitted maximum, erring towards one extra paper rather than one too few.' },
              { text: 'Check whether the general test is required.', note: 'Some programmes, particularly interdisciplinary ones, require it and nothing in class 12 prepares you for it.' },
            ],
          },
          {
            type: 'links',
            title: 'Exam guides',
            items: [
              { label: 'CUET UG', to: '/entrance-exams/university/cuet-ug/' },
              { label: 'CUET PG', to: '/entrance-exams/university/cuet-pg/' },
              { label: 'Study material by subject', to: '/study-material/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I choose which CUET papers to take?',
        a: 'By compiling the requirements of every programme and university you might apply to before you register, since each specifies what it needs and the requirements are not uniform. This is the single most consequential decision in CUET preparation, because a candidate who selects a combination that does not satisfy their preferred programme finds out when applications open, with no remedy available. Read each university’s own admission information rather than inferring from subject names.',
      },
      {
        q: 'Is CUET based on the class 12 syllabus?',
        a: 'The CUET UG domain papers are, and they follow the NCERT syllabus closely — which means board preparation and CUET preparation are largely the same work. The difference is format: boards test descriptively while CUET asks objective questions with close distractors, so a student who knows the subject well can still score poorly without objective-question practice. The general test is the exception, drawing on general knowledge, reasoning and arithmetic that class 12 does not cover. CUET PG is at graduate level and follows the published syllabus for each subject code.',
      },
      {
        q: 'Should I guess in CUET?',
        a: 'Yes, more than instinct suggests. CUET UG awards five marks for a correct answer against one deducted, and CUET PG four against one — both among the most forgiving schemes in Indian entrance examinations. A blind guess among four options is at worst break-even and any genuine narrowing makes a guess clearly worthwhile. Candidates who skip conservatively out of habits formed on harsher papers are leaving marks unclaimed.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Practice
     ══════════════════════════════════════════════════════════════ */

  '/practice/daily-quiz/': {
    title: 'Daily Quiz: Short Practice That Builds Recall Over Months',
    description:
      'Daily quiz practice for competitive exams — why short daily testing beats long study sessions for recall, and how to use it well.',
    lead: [
      'A daily quiz is a small thing that compounds. Ten questions a day is fewer than most candidates would attempt in a single study session, and yet the daily version produces markedly better recall — because retrieving an answer strengthens memory in a way that re-reading a note does not.',
      'That effect is strongest exactly where competitive exams are hardest to prepare for: general awareness, current affairs, static general knowledge and vocabulary, all of which decay quickly without repeated contact and none of which respond well to intensive study in a final month.',
    ],
    sections: [
      {
        id: 'why',
        eyebrow: 'Why daily',
        heading: 'What a short daily test does that a long session does not',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'It forces retrieval rather than recognition', note: 'reading a fact feels like learning; being asked for it and failing reveals whether you actually know it.' },
              { text: 'It spaces repetition automatically', note: 'themes recur across days, which is what converts short-term familiarity into durable recall.' },
              { text: 'It surfaces gaps while there is time', note: 'a question you cannot answer in March is a gap you can close; the same gap in the exam hall is a lost mark.' },
              { text: 'It is sustainable', note: 'ten minutes a day survives a busy week in a way that a two-hour session does not.' },
            ],
          },
        ],
      },
      {
        id: 'how',
        eyebrow: 'How to use it',
        heading: 'Getting the benefit rather than the habit',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Answer before you check.', note: 'Even when uncertain. The value is in the attempt, not in the reading.' },
              { text: 'Log what you got wrong, by theme rather than by question.', note: 'A themed list is revisable; a list of individual facts is not.' },
              { text: 'Revisit your wrong answers a week later.', note: 'If you still miss them, the underlying topic needs studying rather than quizzing.' },
              { text: 'Keep it short and keep it daily.', note: 'Consistency is the whole mechanism. A missed week undoes more than an extra hour adds.' },
            ],
          },
          {
            type: 'links',
            title: 'Where to practise',
            items: [
              { label: 'Current affairs daily quiz', to: '/current-affairs/daily-quiz/' },
              { label: 'Topic-wise questions', to: '/practice/topic-wise-questions/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Study material by subject', to: '/study-material/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a daily quiz better than studying for an hour?',
        a: 'For different purposes. An hour of study builds understanding of a new topic; a daily quiz builds durable recall of material you have already met. The two are complements rather than alternatives — but for the sections that decide many competitive exams, particularly general awareness, current affairs and vocabulary, the daily retrieval is what converts reading into marks, and it is the half candidates more often skip.',
      },
      {
        q: 'How many questions should a daily quiz have?',
        a: 'Few enough that you will actually do it every day. Ten questions taking ten minutes is a common and effective size, because it survives a busy week where a fifty-question set does not. The mechanism that makes daily quizzing work is consistency — themes recurring across days, spacing the repetition — and a set large enough to be skipped defeats it.',
      },
      {
        q: 'What should I do with the questions I get wrong?',
        a: 'Log them by theme rather than as individual facts, so the list is revisable. Then revisit them about a week later. If you still miss the same items, that is a signal that the underlying topic needs proper study rather than more quizzing — a quiz reveals gaps efficiently but does not close conceptual ones. Themed logs also tend to reveal patterns you would not notice question by question.',
      },
    ],
  },

  '/practice/topic-wise-questions/': {
    title: 'Topic-Wise Questions: Practice One Idea Until It Is Automatic',
    description:
      'Topic-wise practice for competitive exams — when to drill a single topic, when to switch to mixed practice, and how to know the difference.',
    lead: [
      'Topic-wise practice is how a new idea becomes reliable. You have just read about percentage change or syllogism or coordination compounds; twenty questions on that one topic, done immediately, is what converts having understood it into being able to use it.',
      'It also has a well-known limitation, and knowing when you have hit it is most of the skill. Practising twenty questions on one topic means you already know which method to apply — which is exactly the part the exam will not tell you.',
    ],
    sections: [
      {
        id: 'when',
        eyebrow: 'When to use it',
        heading: 'Topic-wise practice, and its ceiling',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Use it immediately after learning a topic',
                'While the method is fresh, twenty questions on the same idea builds the fluency that makes it automatic. This is the point at which topic-wise practice is irreplaceable.',
              ],
              [
                'Use it to repair a specific weakness',
                'When mock analysis shows a topic failing repeatedly, concentrated practice on that topic is the direct fix — and far more efficient than another general mock.',
              ],
              [
                'Stop when your accuracy is stable',
                'Once you are consistently right on a topic in isolation, further drilling adds little. The remaining difficulty is recognition, not method.',
              ],
              [
                'Then switch to mixed practice',
                'Because the exam does not label its questions. Recognising which method a question calls for is a separate skill, and only mixed sets build it.',
              ],
            ],
          },
        ],
      },
      {
        id: 'how',
        eyebrow: 'How to practise',
        heading: 'Making a topic set actually work',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Solve before consulting the solution, every time.', note: 'A solution you have read is not a problem you can do.' },
              { text: 'Do the set untimed first, then timed.', note: 'Understanding first, speed second. Reversing that produces fast wrong answers.' },
              { text: 'Note the shapes, not just the answers.', note: '"Two workers, different rates, working together" is a shape. Recognising it is faster than re-deriving the method.' },
              { text: 'Return to the topic after three days and after two weeks.', note: 'Two short revisits beat one long session.' },
              { text: 'Then move to mixed sets containing that topic.', note: 'To build recognition alongside method.' },
            ],
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'Sectional tests', to: '/practice/sectional-tests/' },
              { label: 'Question bank', to: '/practice/question-bank/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'When should I use topic-wise practice?',
        a: 'Immediately after learning a topic, while the method is fresh — twenty questions on the same idea is what converts understanding into fluency. And when mock analysis shows a specific topic failing repeatedly, since concentrated practice on it is a far more efficient fix than another general mock. In both cases the point is to make one method automatic before moving on.',
      },
      {
        q: 'What is the limitation of topic-wise practice?',
        a: 'It tells you which method to use. When every question in a set is a percentage question, you never have to work out that it is one — and in the exam, nothing labels the question. That recognition step is a separate skill, and it is built by mixed practice rather than topic sets. The usual sequence is topic-wise until your accuracy is stable, then mixed sets containing that topic alongside others.',
      },
      {
        q: 'How do I know when to stop drilling a topic?',
        a: 'When your accuracy is stable rather than when you feel confident — the two are different signals, and confidence tends to arrive first. Once you are consistently right on a topic in isolation, further drilling adds little, because the remaining difficulty is recognising the topic in disguise rather than executing the method. At that point mixed practice is the better use of the same hour.',
      },
    ],
  },

  '/practice/sectional-tests/': {
    title: 'Sectional Tests: Practising One Section Under Real Timing',
    description:
      'Sectional test practice — why timed single-section practice builds pacing faster than full mocks, and how to analyse the results.',
    lead: [
      'A sectional test sits between topic practice and a full mock: one section, mixed topics, real timing. That combination trains something neither of the others does — the pacing instinct within a section, which is where most competitive papers are actually won or lost.',
      'It is also far more practical than a full mock. A twenty-minute sectional drill fits into a weekday evening in a way that a two-hour paper does not, which means you can do many more of them and improve the specific skill faster.',
    ],
    sections: [
      {
        id: 'why',
        eyebrow: 'Why sectional',
        heading: 'What a section-length drill trains',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Pacing within a section', note: 'how long you can afford on a question, and when to abandon one. This is the skill sectional timing in CAT, IBPS and SBI prelims tests directly.' },
              { text: 'Recognition across topics', note: 'mixed topics within one section means you must identify what a question is before solving it.' },
              { text: 'Order of attempt', note: 'whether to work through in printed order or to make a fast first pass. A decision worth settling by experiment.' },
              { text: 'Recovery from a bad start', note: 'a section is short enough that you can practise regaining composure without writing off two hours.' },
            ],
          },
        ],
      },
      {
        id: 'analyse',
        eyebrow: 'Analysis',
        heading: 'What to look at afterwards',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Count questions attempted against accuracy.', note: 'Under negative marking, more attempts only help while accuracy holds.' },
              { text: 'Find the questions you spent longest on.', note: 'And ask whether they were worth it. Over-persistence is the commonest silent leak.' },
              { text: 'Check what you skipped.', note: 'Skipping the wrong questions — the ones you could have done in forty seconds — costs more than skipping hard ones.' },
              { text: 'Note where in the section your errors cluster.', note: 'Errors at the end usually mean pacing; errors at the start usually mean nerves.' },
            ],
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'Topic-wise questions', to: '/practice/topic-wise-questions/' },
              { label: 'Question bank', to: '/practice/question-bank/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'All practice modes', to: '/practice/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Are sectional tests better than full mocks?',
        a: 'They serve different purposes. A full mock measures where you stand and trains stamina and section-to-section transitions; a sectional test trains pacing and order of attempt within a section, which is where most competitive papers are decided. Sectional tests are also far more practical — a twenty-minute drill fits into a weekday evening — which means you can do many more of them. Most candidates need both, with sectionals more frequent and mocks less so.',
      },
      {
        q: 'How often should I take sectional tests?',
        a: 'Frequently enough that pacing becomes instinctive — several a week is reasonable, since each takes only twenty to forty minutes. The constraint is analysis rather than attempts: a sectional test you have not reviewed teaches very little. If you can only analyse three properly in a week, take three rather than seven.',
      },
      {
        q: 'What should sectional test analysis tell me?',
        a: 'Four things: your attempt count against your accuracy, since more attempts only help while accuracy holds under negative marking; which questions consumed the most time and whether they were worth it; what you skipped, since skipping questions you could have done quickly is a bigger loss than skipping hard ones; and where in the section your errors cluster — errors at the end usually indicate pacing, while errors at the start usually indicate nerves.',
      },
    ],
  },

  '/practice/question-bank/': {
    title: 'Question Bank: Practice Volume, Organised by Topic and Exam',
    description:
      'Question bank practice — how to work through volume productively, why an error log matters more than a question count, and what to track.',
    lead: [
      'A question bank is volume: a large pool of practice questions organised by topic, subject and exam, to be worked through over months. Its value is straightforward — competitive exams reward familiarity, and familiarity comes from having seen a great many questions.',
      'Its risk is equally straightforward. Volume without review produces a large number of attempted questions and very little improvement. What turns a question bank into progress is the error log, and it is the part almost everyone skips.',
    ],
    sections: [
      {
        id: 'use',
        eyebrow: 'How to use it',
        heading: 'Volume that actually builds something',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Solve before reading any solution.', note: 'This is the whole mechanism. A solution read before an honest attempt teaches recognition, not capability.' },
              { text: 'Keep an error log classified by cause.', note: 'Did not know, misread, method error, calculation slip, ran out of time. Five causes with five different fixes.' },
              { text: 'Revisit wrong questions after a week.', note: 'A question you got wrong twice is a topic to study, not a question to redo.' },
              { text: 'Move from topic sets to mixed sets.', note: 'Once accuracy on a topic is stable, mixed practice builds the recognition the exam actually requires.' },
              { text: 'Track your error rate, not your question count.', note: 'Two thousand questions attempted means nothing; a falling error rate means everything.' },
            ],
          },
        ],
      },
      {
        id: 'log',
        eyebrow: 'The error log',
        heading: 'Why classification by cause matters',
        blocks: [
          {
            type: 'p',
            text: 'Most candidates review their mistakes by topic and conclude they need to revise that topic. Often they do not. A question missed because you misread "not" in the stem is not a knowledge gap; a question missed because you ran out of time is a pacing problem; a question missed because your arithmetic slipped is a fluency problem. Those three need completely different remedies, and lumping them together as "revise the topic" is why some candidates plateau despite enormous practice volume.',
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'Topic-wise questions', to: '/practice/topic-wise-questions/' },
              { label: 'Sectional tests', to: '/practice/sectional-tests/' },
              { label: 'Previous year papers', to: '/previous-year-papers/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How many questions should I practise?',
        a: 'The count is the wrong metric. A candidate who attempts two thousand questions without reviewing them will improve less than one who attempts five hundred and maintains a proper error log. What matters is whether your error rate is falling on the topics you have practised, and whether the errors you make are changing in character — from not knowing, to knowing but slow, to reliably correct.',
      },
      {
        q: 'Should I read the solution if I cannot solve a question?',
        a: 'Only after a genuine attempt. The productive sequence is to work at a question until you either solve it or are properly stuck, then read the solution, then close it and reproduce the argument yourself. Reading a solution before an honest attempt produces recognition — you will nod along and feel you understand — without producing the ability to do it unaided, which is what the exam measures.',
      },
      {
        q: 'What should an error log record?',
        a: 'The cause, not just the topic. Classify each mistake as: did not know the concept, knew it but misread the question, knew it but chose the wrong method, knew it but made a calculation slip, or ran out of time. Those five causes have five different remedies, and a log organised by topic alone will send you back to revise material you already know while the actual problem — pacing, reading discipline or arithmetic fluency — goes unaddressed.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Standalone directory pages
     ══════════════════════════════════════════════════════════════ */

  '/government-jobs/': {
    title: 'Government Jobs in India: Exam Routes and How to Choose',
    description:
      'Government job guide — the main recruitment routes by qualification, how to choose an exam, and what a realistic first year looks like.',
    lead: [
      'Government recruitment in India runs through a few dozen examinations conducted by central commissions, state commissions, banks, railways and individual departments. For someone starting out, the difficulty is rarely finding an exam — it is choosing between them, and then not spreading effort across too many.',
      'The sensible way to narrow the field is by qualification first, then by the kind of work and the kind of selection process you are willing to go through. A degree opens far more doors than class 12, but class 10 already opens several, and technical qualifications open a category of their own.',
    ],
    sections: [
      {
        id: 'byqual',
        eyebrow: 'Narrowing the field',
        heading: 'What your qualification opens',
        blocks: [
          {
            type: 'table',
            caption: 'A starting map. Confirm eligibility for any specific exam in its current notification.',
            head: ['Qualification', 'Main routes', 'Typical posts'],
            rows: [
              ['Class 10', 'SSC MTS, SSC GD, RRB Group D, state police constable', 'Multi-tasking staff, constable, track and technical assistant roles'],
              ['Class 12', 'SSC CHSL, RRB NTPC, state group exams', 'Clerical, data entry, station and commercial posts'],
              ['Any degree', 'SSC CGL, banking, UPSC, state PSC, CAPF, CDS', 'Officer and Group B and C posts across ministries and banks'],
              ['Engineering diploma or degree', 'SSC JE, RRB JE, GATE-based PSU recruitment, UPSC ESE', 'Junior Engineer and technical officer posts'],
              ['Professional degrees', 'Specialist officer, judiciary, healthcare, agriculture recruitment', 'Cadre posts requiring that specific qualification'],
            ],
          },
        ],
      },
      {
        id: 'choosing',
        eyebrow: 'Choosing',
        heading: 'Questions worth answering before you start',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Are you willing to meet physical and medical standards?', note: 'Uniformed recruitment — police, armed forces, several railway posts — applies them, and they eliminate more candidates than the written papers do.' },
              { text: 'Do you want to work in your own state or anywhere?', note: 'State recruitment usually means staying; central recruitment usually does not.' },
              { text: 'Can you write at length under time?', note: 'UPSC, judiciary, RBI Grade B and CAPF all require it; most other examinations do not test it at all.' },
              { text: 'How many attempts do you realistically have?', note: 'Age bands and attempt limits differ enormously, and some examinations offer very few genuine opportunities.' },
            ],
          },
        ],
      },
      {
        id: 'first-year',
        eyebrow: 'Getting started',
        heading: 'A realistic first year',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Pick one primary exam and at most two secondary ones.', note: 'Chosen so their syllabi overlap. Spreading across unrelated exams is the commonest way candidates lose a year.' },
              { text: 'Take a full mock in your primary exam before studying.', note: 'It is uncomfortable and it is the only sound basis for a plan.' },
              { text: 'Start the slow-building components immediately.', note: 'General awareness, English and — for uniformed posts — physical training all accumulate over months.' },
              { text: 'Then study the weakest section first.', note: 'Rather than the one you enjoy.' },
              { text: 'Re-test every few weeks.', note: 'To check the gap is actually closing rather than assuming it is.' },
            ],
          },
          {
            type: 'links',
            title: 'Explore the categories',
            items: [
              { label: 'All government exams', to: '/government-exams/' },
              { label: 'SSC exams', to: '/government-exams/ssc/' },
              { label: 'Banking exams', to: '/government-exams/banking/' },
              { label: 'Railway exams', to: '/government-exams/railways/' },
              { label: 'State government exams', to: '/government-exams/state/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which government exam should I prepare for first?',
        a: 'Narrow by qualification, then by the kind of work and selection process you can commit to. Within that, pick one primary exam and at most two secondary ones whose syllabi overlap with it — SSC CGL alongside banking, for instance, or state PSC alongside UPSC. Spreading effort across unrelated examinations is the most common way candidates lose a year, because each one’s specifics need attention that a divided preparation cannot give.',
      },
      {
        q: 'Can I get a government job after class 10 or 12?',
        a: 'Yes. Class 10 opens SSC MTS, SSC GD Constable, RRB Group D and state police constable recruitment; class 12 opens SSC CHSL, RRB NTPC and a range of state group examinations. These have larger applicant fields because the qualification bar is lower, so competition is intense — but the papers are correspondingly more accessible, and for uniformed posts, physical preparation is often the more decisive factor than academic ability.',
      },
      {
        q: 'How long does it take to clear a government exam?',
        a: 'For most candidates, one to two full cycles of serious preparation, which typically means a year or more from starting to a result. The variable that matters most is consistency rather than total hours: general awareness, English and calculation speed all respond to daily contact over months and barely respond to intensive short-term effort. Uniformed recruitment adds physical training, which is a separate months-long project running in parallel.',
      },
    ],
  },

  '/exam-calendar/': {
    title: 'Exam Calendar 2026: Planning a Year Around Notifications',
    description:
      'Exam calendar guide — how to plan a preparation year around notification, application and exam dates, and what to check for each.',
    lead: [
      'A competitive exam year has a rhythm: notifications appear, application windows open and close, admit cards are released, papers are held, results follow, and later stages run for months afterwards. Planning around that rhythm is a genuine advantage, and missing a window is one of the more painful ways to lose a cycle.',
      'What a calendar cannot do is tell you when things will actually happen. Dates shift, notifications are deferred, and exams are occasionally rescheduled at short notice. So the useful discipline is not memorising dates but building a habit of checking, and understanding what to do when each stage arrives.',
    ],
    sections: [
      {
        id: 'rhythm',
        eyebrow: 'The cycle',
        heading: 'The stages of an exam year, and what each needs from you',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Notification',
                'The document that defines everything — eligibility, age limits and relaxations, the exact pattern, negative marking, vacancy details and the stage structure. Read it end to end when it appears, not later. Details change between cycles more often than candidates expect.',
              ],
              [
                'Application window',
                'Usually a few weeks. Have your documents, photographs, signature and category certificates ready before it opens, because a technical problem on the final day is a lost year. Apply early rather than on the last date.',
              ],
              [
                'Correction window',
                'Where one is provided, it is the only chance to fix an error in your application. Check your submitted form carefully during it rather than assuming it went through correctly.',
              ],
              [
                'Admit card',
                'Released shortly before the exam. Check the centre, the reporting time and the permitted items, and plan the journey — candidates lose exams to travel every cycle.',
              ],
              [
                'Result and later stages',
                'Mains examinations, physical tests, interviews and document verification can run for months. Preparation should not stop at the first result, because the gap between stages is frequently shorter than it looks.',
              ],
            ],
          },
        ],
      },
      {
        id: 'planning',
        eyebrow: 'Planning',
        heading: 'How to use a calendar productively',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Work backwards from your primary exam.', note: 'The date fixes when your preparation phases have to end, not the other way round.' },
              { text: 'Check whether your secondary exams clash.', note: 'Two papers a week apart is manageable; two on the same weekend is not.' },
              { text: 'Set your own reminders for application windows.', note: 'A missed window costs a full cycle, and it is entirely avoidable.' },
              { text: 'Plan for the gaps between stages.', note: 'The interval between a prelims result and a mains is usually short. Mains preparation should not begin there.' },
              { text: 'Verify dates from the official source.', note: 'Aggregated calendars are useful for planning and unreliable for deadlines.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Exam updates', to: '/exam-updates/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Exam dates', to: '/exam-updates/exam-dates/' },
              { label: 'Admit cards', to: '/exam-updates/admit-cards/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I plan a year around competitive exam dates?',
        a: 'Work backwards from your primary exam. Its date fixes when each phase of your preparation must end — foundation building, depth, then mocks and revision — rather than the other way round. Then check whether your secondary exams clash with it or with each other, and set your own reminders for application windows, since a missed window costs a full cycle and is entirely avoidable. Plan explicitly for the gaps between stages, which are usually shorter than candidates expect.',
      },
      {
        q: 'Are published exam calendars reliable?',
        a: 'Useful for planning and unreliable for deadlines. Notification dates shift, application windows move, and examinations are occasionally rescheduled at short notice. An aggregated calendar is a good way to see the shape of a year and to notice clashes, but any date you are going to act on — an application deadline in particular — should be verified against the conducting body’s own announcement.',
      },
      {
        q: 'When should I start preparing for the next stage?',
        a: 'Before the current one’s result. The interval between a preliminary result and a main examination is frequently just a few weeks, which is enough to sharpen speed and nowhere near enough to build the depth a mains paper needs — banking awareness, data interpretation, descriptive writing and technical depth all take months. Candidates who prepare only for the screening stage and wait for its result routinely find themselves under-prepared for the stage that actually decides the outcome.',
      },
    ],
  },

  '/previous-year-questions/': {
    title: 'Previous Year Questions: Reading Papers for Trends, Not Scores',
    description:
      'How to use previous year questions properly — tagging by topic, building a weighting table, and why treating them as mocks wastes them.',
    lead: [
      'Most candidates solve previous year questions the way they solve mock tests: timed, scored, filed away. That wastes the one thing a past paper offers that a mock cannot — evidence of what the examiner actually asks, as opposed to what the syllabus says can be asked.',
      'A syllabus lists every topic and gives no indication of weighting. Past papers supply that weighting immediately, and the distribution is almost always uneven enough to redirect months of study.',
    ],
    sections: [
      {
        id: 'method',
        eyebrow: 'The method',
        heading: 'How to extract a weighting table',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Solve one paper untimed first.', note: 'The point of the first pass is comprehension, not speed. Work every question to a full solution, including the ones you would have skipped.' },
              { text: 'Tag every question by specific topic, not by section.', note: 'Not "quantitative aptitude" but "circles — tangent length" or "percentage — successive change". The tags are what reveal the pattern.' },
              { text: 'Count the tags across several years.', note: 'A short list of topics will carry a disproportionate share of the marks, and a long tail will appear once in five years.' },
              { text: 'Study the short list to fluency before the tail.', note: 'This is where most of the available marks actually live.' },
              { text: 'Only then start solving papers under exam timing.', note: 'Now you are measuring speed on material you understand, which is what a timed attempt is good for.' },
            ],
          },
        ],
      },
      {
        id: 'caution',
        eyebrow: 'Two cautions',
        heading: 'What past papers cannot do',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'A paper you have read is no longer a measurement', note: 'familiarity inflates the score. Keep two or three papers untouched for the final month and use fresh mocks for anything you intend to treat as a genuine measurement.' },
              { text: 'Current affairs do not transfer', note: 'those questions are tied to the months preceding each exam. Use past papers to learn which themes are asked, then follow current sources for the content.' },
              { text: 'Patterns change', note: 'when an examination is restructured, older papers describe a test that no longer exists. Check the current notification before building a plan on a five-year-old distribution.' },
            ],
          },
          {
            type: 'links',
            title: 'Where to find papers',
            items: [
              { label: 'Previous year papers by exam', to: '/previous-year-papers/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Topic-wise practice', to: '/practice/topic-wise-questions/' },
              { label: 'Study material by subject', to: '/study-material/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How should I use previous year questions?',
        a: 'As a specification rather than as practice. Solve one paper untimed and work every question fully, then tag each question by specific topic — not "reasoning" but "seating arrangement, circular, mixed facing" — and count the tags across several years. The distribution that emerges is almost always uneven, and it tells you which topics carry most of the available marks. Study those to fluency before touching the long tail, and only then begin solving papers under exam timing.',
      },
      {
        q: 'Can I use my score on a past paper to judge my preparation?',
        a: 'Only the first time you see it. Once you have read a paper, familiarity inflates any subsequent score, so it is no longer a measurement instrument. The practical approach is to keep two or three papers completely untouched until the final month, so that at least a couple of your measurements are honest, and to use fresh mock tests for anything you intend to treat as a genuine assessment of where you stand.',
      },
      {
        q: 'Are old papers still useful if the exam pattern changed?',
        a: 'Partly. The content and the topic weighting usually survive a restructuring even when the format does not — the same arithmetic shapes and the same general awareness themes recur. What does not survive is the structure: marks per section, timing, negative marking and stage design. So a paper from before a restructuring is useful for identifying what gets asked and misleading about how the exam now works, which is why the current notification should always be read alongside.',
      },
    ],
  },
}

/*
 * The extra sections written in hubs-depth.js are appended onto the hub they
 * name, and their FAQs are used only where the hub has none of its own, so
 * nothing written above is ever replaced. A depth entry for a path with no
 * hub is ignored rather than creating a page with no heading.
 */
for (const [path, extra] of Object.entries(HUB_DEPTH)) {
  const hub = HUBS[path]
  if (!hub) continue
  if (extra.sections) hub.sections = [...hub.sections, ...extra.sections]
  if (extra.faqs && !hub.faqs) hub.faqs = extra.faqs
}

/** Written hub content for a path, or undefined if none exists yet. */
export function getHub(path) {
  return HUBS[path]
}

/** Every hand-written hub, used by the prerender and sitemap. */
export const HUB_PATHS = Object.keys(HUBS)

export default HUBS
