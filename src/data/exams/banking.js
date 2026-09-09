/**
 * Banking exams — /government-exams/banking/
 *
 * Six recruitments across IBPS, SBI and the Reserve Bank. They look alike from
 * the outside — prelims, mains, interview — and candidates routinely prepare
 * for all of them with one set of notes. That mostly works, with two
 * exceptions worth stating on every page here: the sectional timing in prelims
 * changes how you must attempt the paper, and RBI Grade B is a different exam
 * altogether, closer to an economics paper than to a banking aptitude test.
 */

const banking = [
  /* ══════════════════════════════════════════════════════════════
     IBPS PO
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ibps-po',
    path: '/government-exams/banking/ibps-po/',
    name: 'IBPS PO',
    fullName: 'Institute of Banking Personnel Selection — Probationary Officer / Management Trainee',
    authority: 'Institute of Banking Personnel Selection (IBPS)',
    official: 'ibps.in',
    seoTitle: 'IBPS PO 2026: Prelims & Mains Pattern, Syllabus, Free Mocks',
    metaDescription:
      'IBPS PO exam guide — prelims and mains pattern with sectional timing, syllabus, descriptive paper, interview, previous papers and free mock tests.',
    lead: [
      'IBPS PO is the common recruitment for Probationary Officer and Management Trainee posts across participating public sector banks. One examination feeds all of them, and the bank you are allotted follows from your score and the preference order you submitted rather than from a separate application.',
      'It is the most widely attempted banking examination in the country, and its structure has one feature that dominates preparation: sectional timing in the preliminary stage. You get twenty minutes per section and cannot carry unused time forward, which turns the prelims into three short sprints rather than one hour-long paper.',
    ],
    quickFacts: [
      ['Conducted by', 'Institute of Banking Personnel Selection (IBPS)'],
      ['Post', 'Probationary Officer / Management Trainee in participating public sector banks'],
      ['Level', 'Bachelor’s degree in any discipline'],
      ['Stages', 'Preliminary → Main (objective plus descriptive) → Interview'],
      ['Prelims format', 'Sectional timing — 20 minutes per section, not transferable'],
      ['Final selection', 'Weighted from the main examination and the interview; prelims marks do not carry forward'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Probationary Officer examination recruits entry-level officers for public sector banks that participate in the IBPS common process. A Probationary Officer joins on a training period and is then posted into branch banking, credit, operations or a specialist function, with a career path that leads through scale-based promotions.',
      },
      {
        type: 'p',
        text: 'Three things about the structure shape how candidates should prepare. Prelims is a purely qualifying speed test with sectional timing. The main examination is where the marks that count are earned, and it adds two subjects that prelims does not test at all — banking and economic awareness, and computer aptitude. And the descriptive paper, small as it is, is the stage most candidates neglect entirely.',
      },
      {
        type: 'list',
        title: 'What the three stages actually test',
        items: [
          { text: 'Preliminary examination', note: 'speed and accuracy across English, quantitative aptitude and reasoning, under twenty-minute sectional limits. Qualifying only.' },
          { text: 'Main examination', note: 'depth rather than speed — data analysis and interpretation, reasoning with computer aptitude, English, and general, economy and banking awareness. These marks count.' },
          { text: 'Descriptive paper', note: 'a letter and an essay, written in the same sitting as the main examination. Small in marks and decisive at the margin.' },
          { text: 'Interview', note: 'conducted by participating banks, with the final merit weighted between the main examination and the interview.' },
        ],
      },
      {
        type: 'note',
        title: 'Prelims marks do not carry forward',
        text: 'A very high prelims score buys you nothing beyond a seat in the main examination. Candidates who spend months optimising prelims speed and arrive at mains without having studied banking awareness or data interpretation in depth are making the single most common strategic error in this exam.',
      },
    ],
    stages: [
      {
        name: 'Preliminary Examination',
        mode: 'Objective, 60 minutes with sectional timing',
        detail:
          'English language, quantitative aptitude and reasoning ability, for 100 questions and 100 marks. Each section carries its own twenty-minute limit, and time left over in one section cannot be used in another. Qualifying in nature.',
      },
      {
        name: 'Main Examination',
        mode: 'Objective, about 3 hours',
        detail:
          'Reasoning and computer aptitude, general, economy and banking awareness, English language, and data analysis and interpretation, for 200 marks across separately timed sections. These marks form the basis of the final merit.',
      },
      {
        name: 'Descriptive Paper',
        mode: 'Written, 30 minutes',
        detail:
          'A letter and an essay, typed in the same sitting as the main examination and evaluated for candidates who clear the objective cutoffs.',
      },
      {
        name: 'Interview',
        mode: 'Personal interview',
        detail:
          'Conducted by the participating banks under IBPS coordination. The final merit list is a weighted combination of the main examination and the interview, with the main examination carrying the larger share.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'IBPS PO syllabus for prelims and mains — quantitative aptitude, reasoning, English, data interpretation, computer aptitude and banking awareness.',
        lead: [
          'The prelims syllabus is a subset of the mains syllabus, which makes IBPS PO look simpler than it is. The two subjects that decide the exam — data interpretation and banking awareness — barely appear in prelims at all.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Quantitative Aptitude and Data Interpretation',
                'Simplification and approximation, number series, quadratic comparison, data sufficiency, and the arithmetic core — percentage, ratio and proportion, average, profit and loss, simple and compound interest, time and work, time speed and distance, mixture and alligation, partnership, boats and streams, pipes and cisterns, permutation and combination, probability, and mensuration. Data interpretation runs across tables, bar and line graphs, pie charts, caselets and missing-data sets, and dominates the mains section.',
              ],
              [
                'Reasoning Ability',
                'Puzzles and seating arrangement in every variety — linear, circular, floor-based, box-based, scheduling and comparison — plus syllogism, inequality, blood relations, direction sense, order and ranking, coding-decoding, alphanumeric series, input-output, data sufficiency, and the critical reasoning group of statement and assumption, cause and effect, and course of action.',
              ],
              [
                'English Language',
                'Reading comprehension including inference and tone questions, cloze test, para jumbles, sentence rearrangement, error spotting, sentence improvement, fill in the blanks, word usage and vocabulary in context, connectors, paragraph completion and word swap. The mains paper leans heavily on comprehension and inference rather than on isolated grammar.',
              ],
              [
                'General, Economy and Banking Awareness (mains only)',
                'Banking terminology and the structure of the Indian banking system, the Reserve Bank and its functions and instruments, monetary policy, financial markets and regulators, government financial schemes, budget and economic survey highlights, international financial institutions, and current affairs of the preceding several months with an emphasis on banking and economic news.',
              ],
              [
                'Computer Aptitude (mains only)',
                'Computer fundamentals and generations, hardware and software, operating systems, MS Office, networking and internet basics, database fundamentals, shortcut keys, abbreviations, and cyber security awareness. Combined with reasoning in a single mains section.',
              ],
              [
                'Descriptive Paper',
                'One letter — formal, informal or business — and one essay, typically on a banking, economic or social topic. Tested for structure, clarity and correctness rather than for literary quality.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The practical reading of this syllabus is that banking awareness and data interpretation deserve preparation from the first month, not from after the prelims result. Banking awareness in particular is cumulative — it depends on having followed the news over months — and cannot be recovered in the two or three weeks between the prelims result and the main examination.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'IBPS PO exam pattern — prelims sectional timing, mains section marks and duration, descriptive paper and the final merit weighting.',
        lead: [
          'Two objective stages with completely different logic. Prelims is a timed sprint that is thrown away afterwards; mains is a depth test whose marks decide your rank.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Preliminary examination. Each section has its own time limit. Confirm marks and timings against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['English Language', '30', '30', '20 minutes'],
              ['Quantitative Aptitude', '35', '35', '20 minutes'],
              ['Reasoning Ability', '35', '35', '20 minutes'],
              ['Total', '100', '100', '60 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'Sectional timing is the defining constraint. Twenty minutes for thirty-five quantitative aptitude questions means you are not expected to attempt them all — you are expected to select. Candidates trained on untimed practice consistently over-attempt in the first section, run out of time, and lose marks to negative marking on rushed answers in the third.',
          },
          {
            type: 'table',
            caption:
              'Main examination. Sections are separately timed. Confirm the current structure, marks and timings in the notification.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['Reasoning and Computer Aptitude', '45', '60', '60 minutes'],
              ['General, Economy and Banking Awareness', '40', '40', '35 minutes'],
              ['English Language', '35', '40', '40 minutes'],
              ['Data Analysis and Interpretation', '35', '60', '45 minutes'],
              ['Total (objective)', '155', '200', 'About 3 hours'],
            ],
          },
          {
            type: 'list',
            title: 'Rules that change how you should attempt',
            items: [
              { text: 'A quarter-mark deduction applies for wrong answers', note: 'in both objective stages, which makes a blind guess a losing bet and a two-option guess still worthwhile.' },
              { text: 'Mains sections carry unequal marks per question', note: 'reasoning and data interpretation are worth more per question than awareness or English, so the same minute is not worth the same everywhere.' },
              { text: 'The awareness section is the fastest in the paper', note: 'forty questions in thirty-five minutes, all recall. Bank it quickly and return the time to data interpretation.' },
              { text: 'The final merit excludes prelims', note: 'it is weighted between the main examination and the interview.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current structure',
            text: 'IBPS has adjusted section marks, question counts and timings between cycles, and the weighting between mains and interview has also changed. Read the pattern section of the current notification rather than preparing to a structure from an older guide.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'IBPS PO previous year papers — using past prelims and mains sets to find recurring puzzle types and data interpretation shapes.',
        lead: [
          'Banking papers do not repeat questions, but they repeat structures relentlessly. That is what past papers are for here.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A seating arrangement puzzle is never the same twice, yet the family of puzzles is small: linear rows facing two directions, circular arrangements with mixed orientation, floor-and-flat combinations, month-and-date scheduling, and comparison-based ordering. Recognising which family a puzzle belongs to within the first ten seconds is the single biggest speed gain available in the reasoning section, and it comes from having seen a hundred of them.',
          },
          {
            type: 'steps',
            title: 'Working past papers for structure',
            items: [
              { text: 'Catalogue puzzles by family, not by paper.', note: 'Build a personal list of the arrangement types and how each is best diagrammed.' },
              { text: 'Do the same for data interpretation sets.', note: 'Tabular, bar, line, pie, caselet, missing-data. Each has a fastest reading order, and it is worth finding yours.' },
              { text: 'Time each set individually rather than the paper as a whole.', note: 'Sectional timing means your unit of practice should be a set, not a paper.' },
              { text: 'Log banking awareness questions by theme.', note: 'RBI functions, banking terms, schemes, financial institutions. The themes recur even as the specifics change.' },
            ],
          },
          {
            type: 'p',
            text: 'One thing past papers cannot give you is current banking awareness — those questions are tied to the months preceding each exam. Use past papers to learn which themes are asked, then follow current sources for the content itself.',
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'IBPS PO free mock test', to: '/mock-tests/ibps-po/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Data interpretation notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Free IBPS PO mock tests with prelims sectional timing enforced, plus scoring, answer keys and section-wise analysis.',
        lead: [
          'A prelims mock without sectional timing is not a prelims mock. The whole difficulty of the stage is that you cannot borrow minutes.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The free IBPS PO mock on this site follows the current prelims pattern with its sectional limits applied, so you find out under practice conditions what you would otherwise discover in the exam hall: that thirty-five quantitative aptitude questions in twenty minutes is a selection problem, not a solving problem.',
          },
          {
            type: 'steps',
            title: 'Building selection skill',
            items: [
              { text: 'Spend the first sixty seconds of each section scanning, not solving.', note: 'Identify the questions you can finish quickly and start there. A pass-one, pass-two approach beats attempting in printed order.' },
              { text: 'Set a hard per-question ceiling.', note: 'If a question exceeds it, leave it. The discipline to abandon a half-solved question is what most candidates lack.' },
              { text: 'Count your attempts per section afterwards.', note: 'Then check accuracy. High attempts with mediocre accuracy scores worse than fewer attempts done well.' },
              { text: 'Practise sections in isolation too.', note: 'Twenty-minute drills on a single section build the pacing instinct faster than full mocks do.' },
            ],
          },
          {
            type: 'p',
            text: 'For the main examination, practise the sections in the order the paper presents them and with their real time limits. The awareness section rewards being taken quickly and confidently; the data interpretation section rewards whatever minutes you can protect for it.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Take the free IBPS PO mock test', to: '/mock-tests/ibps-po/' },
              { label: 'SBI PO mock test', to: '/mock-tests/sbi-po/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'IBPS PO preparation strategy — how to build prelims speed and mains depth in parallel, plus banking awareness and descriptive writing.',
        lead: [
          'The winning IBPS PO plan prepares for mains from the start and treats prelims speed as a by-product. The losing plan does the reverse and runs out of time in September.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The gap between the prelims result and the main examination is short — a few weeks, sometimes less. That is enough time to sharpen speed, and nowhere near enough to build banking awareness from scratch or to learn data interpretation properly. So the sequencing question answers itself: the mains subjects start first.',
          },
          {
            type: 'steps',
            title: 'A plan built around the mains',
            items: [
              { text: 'From day one — banking and economic awareness, daily.', note: 'Twenty minutes a day, every day. It is cumulative, it cannot be crammed, and it is where a large block of easy mains marks sits.' },
              { text: 'Months one to three — data interpretation as a dedicated subject.', note: 'Not as an extension of arithmetic. Calculation speed, percentage fluency and set-reading technique, practised as a skill in its own right.' },
              { text: 'Months one to three — puzzles and seating arrangement, daily.', note: 'The reasoning section is mostly puzzles. Two or three a day for three months is worth more than a hundred in a single week.' },
              { text: 'Alongside — English through reading, not rules.', note: 'The mains English section tests inference and tone. Read editorials daily; grammar drills alone will not get you there.' },
              { text: 'Month three — start descriptive writing.', note: 'One letter and one essay a week, timed. Thirty minutes is less than it sounds when you have not practised.' },
              { text: 'Month four onwards — sectional-timed prelims drills.', note: 'Now that the underlying skill exists, train the twenty-minute sprint.' },
              { text: 'Final weeks — full mocks in both formats.', note: 'Prelims for pacing, mains for stamina and section ordering.' },
            ],
          },
          {
            type: 'list',
            title: 'Where IBPS PO candidates lose',
            items: [
              { text: 'Preparing only for prelims', note: 'and meeting a harder exam with three weeks to prepare for it.' },
              { text: 'Practising quantitative aptitude without a clock', note: 'in an exam defined by sectional timing, untimed practice trains the wrong thing.' },
              { text: 'Ignoring the descriptive paper', note: 'thirty minutes to write a letter and an essay is tight, and unpractised candidates routinely fail to finish.' },
              { text: 'Treating banking awareness as revision', note: 'it is a subject that needs months of daily contact, not a week of notes.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'IBPS PO study material — data interpretation, reasoning puzzles, English and banking awareness notes mapped to the prelims and mains syllabus.',
        lead: [
          'Notes organised the way the mains paper is organised, because that is the paper that decides your rank.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Start with percentage and ratio in the quantitative notes even if they look elementary. Data interpretation is percentage arithmetic performed quickly under pressure, and candidates who are fluent with fraction equivalents and multiplying factors read a data set in a fraction of the time it takes someone converting each figure longhand.',
          },
          {
            type: 'links',
            title: 'Subject notes for IBPS PO',
            items: [
              { label: 'Quantitative aptitude and data interpretation', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning — puzzles and seating arrangement', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Economy and banking notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine that fits this exam',
            items: [
              'Three puzzles, timed, every day without exception.',
              'Two data interpretation sets, timed, every day.',
              'One editorial read for comprehension and vocabulary.',
              'Twenty minutes of banking and economic awareness from a single running source.',
              'One descriptive letter or essay a week from month three.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the IBPS PO exam pattern?',
        a: 'IBPS PO runs in three stages. The preliminary examination has English, quantitative aptitude and reasoning for 100 questions and 100 marks in 60 minutes, with a separate twenty-minute limit on each section. The main examination covers reasoning and computer aptitude, general economy and banking awareness, English, and data analysis and interpretation for 200 marks across separately timed sections, followed by a thirty-minute descriptive paper. An interview follows, and the final merit is weighted between the main examination and the interview.',
      },
      {
        q: 'Do IBPS PO prelims marks count in the final merit?',
        a: 'No. The preliminary examination is purely qualifying — it decides who sits the main examination and is then discarded. The final merit list is built from the main examination and the interview. This is the most important strategic fact about the exam, because it means preparation should be aimed at the mains syllabus from the beginning, with prelims speed treated as a by-product rather than the goal.',
      },
      {
        q: 'What is sectional timing in IBPS PO prelims?',
        a: 'Each of the three prelims sections carries its own twenty-minute limit, and time you do not use in one section cannot be carried into another. Practically, this means the paper is a selection exercise rather than a solving exercise — with thirty-five quantitative aptitude questions in twenty minutes, you are choosing which questions to attempt as much as you are answering them.',
      },
      {
        q: 'Is there negative marking in IBPS PO?',
        a: 'Yes, a quarter of a mark is deducted for each wrong answer in both objective stages. That makes a blind guess across five options a losing proposition over a full paper, while a guess narrowed to two plausible options remains worth taking. The descriptive paper is evaluated separately and carries no such deduction.',
      },
      {
        q: 'How long does IBPS PO preparation take?',
        a: 'Six to eight months of consistent daily study is realistic for a candidate starting from a normal graduate base. The constraint is not the volume of syllabus but the fact that three of the decisive components — banking awareness, data interpretation speed and puzzle-solving instinct — all build slowly through daily practice and respond poorly to intensive short-term effort.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     IBPS Clerk
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ibps-clerk',
    path: '/government-exams/banking/ibps-clerk/',
    name: 'IBPS Clerk',
    fullName: 'Institute of Banking Personnel Selection — Clerical Cadre (Customer Service Associate)',
    authority: 'Institute of Banking Personnel Selection (IBPS)',
    official: 'ibps.in',
    seoTitle: 'IBPS Clerk 2026: Prelims & Mains Pattern, Syllabus, Mocks',
    metaDescription:
      'IBPS Clerk exam guide — prelims and mains pattern, syllabus, no-interview selection, state preference, previous papers and free mock tests.',
    lead: [
      'IBPS Clerk fills Customer Service Associate posts in the clerical cadre of participating public sector banks. It is the most accessible entry into public sector banking — a bachelor’s degree in any discipline, no interview, and a selection decided entirely on written performance.',
      'The absence of an interview changes the exam more than it first appears. With nothing after the main examination to redistribute marks, the cutoff is decided purely on objective scores, which makes accuracy and consistency matter more here than in any other banking recruitment.',
    ],
    quickFacts: [
      ['Conducted by', 'Institute of Banking Personnel Selection (IBPS)'],
      ['Post', 'Customer Service Associate in the clerical cadre'],
      ['Level', 'Bachelor’s degree in any discipline'],
      ['Stages', 'Preliminary → Main. There is no interview.'],
      ['Selection basis', 'Main examination marks alone'],
      ['State preference', 'Candidates apply for a particular state, and cutoffs are state-wise'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The clerical cadre recruitment fills Customer Service Associate posts across the public sector banks that participate in the IBPS common process. The role is branch-facing — account operations, cash handling, customer service and back-office processing — and it carries a promotion path into the officer cadre through internal examinations.',
      },
      {
        type: 'p',
        text: 'Two structural features distinguish IBPS Clerk from IBPS PO. There is no interview, so the main examination decides everything. And candidates apply against a chosen state, with cutoffs determined state by state rather than nationally — which means the score you need depends on where you applied, and a mark that clears comfortably in one state may fall short in another.',
      },
      {
        type: 'list',
        title: 'What this structure means in practice',
        items: [
          { text: 'Objective accuracy is everything', note: 'with no interview to follow, there is no stage where personality or communication can recover a marginal written score.' },
          { text: 'The state you choose matters', note: 'cutoffs vary by state and by category, and the choice is usually locked at application.' },
          { text: 'Language proficiency is checked', note: 'candidates are generally expected to be proficient in the official language of the state applied for, verified at a later stage.' },
          { text: 'Mains is the whole exam', note: 'prelims qualifies and is then discarded, exactly as in IBPS PO.' },
        ],
      },
      {
        type: 'note',
        title: 'Choose your state deliberately',
        text: 'The state preference is typically fixed at the application stage and carries both a cutoff consequence and a language proficiency expectation. It is worth a considered decision rather than a default one, since it affects the score you need and the place you will work.',
      },
    ],
    stages: [
      {
        name: 'Preliminary Examination',
        mode: 'Objective, 60 minutes with sectional timing',
        detail:
          'English language, numerical ability and reasoning ability for 100 questions and 100 marks, with a twenty-minute limit on each section. Qualifying in nature.',
      },
      {
        name: 'Main Examination',
        mode: 'Objective, about 160 minutes',
        detail:
          'General and financial awareness, general English, reasoning ability and computer aptitude, and quantitative aptitude, for 190 questions and 200 marks across separately timed sections. These marks alone determine the final merit.',
      },
      {
        name: 'Provisional allotment',
        mode: 'State-wise merit',
        detail:
          'Allotment to a participating bank is made from the state-wise merit list on main examination marks, followed by document verification and language proficiency requirements where applicable.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'IBPS Clerk syllabus — numerical ability, reasoning, English and the mains general and financial awareness and computer aptitude sections.',
        lead: [
          'The IBPS Clerk syllabus is close to the PO syllabus at a slightly gentler depth, with one meaningful difference: financial awareness carries fifty marks in the mains, the largest single section in the paper.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Numerical Ability / Quantitative Aptitude',
                'Simplification and approximation, number series, quadratic equations, data interpretation from tables, bar graphs, line graphs and pie charts, and the arithmetic set — percentage, ratio and proportion, average, profit and loss, simple and compound interest, time and work, time speed and distance, mixture and alligation, partnership, boats and streams, pipes and cisterns, permutation and combination, probability and mensuration. Simplification questions are numerous and fast, which makes calculation fluency unusually valuable here.',
              ],
              [
                'Reasoning Ability',
                'Puzzles and seating arrangements, syllogism, inequality, blood relations, direction sense, order and ranking, coding-decoding, alphanumeric and alphabet series, data sufficiency, and statement-based reasoning. The mains section combines reasoning with computer aptitude.',
              ],
              [
                'English Language',
                'Reading comprehension, cloze test, para jumbles, error spotting, sentence improvement, fill in the blanks, vocabulary in context, phrase replacement and paragraph completion. The clerical paper stays closer to grammar and direct comprehension than the officer paper, which leans on inference.',
              ],
              [
                'General and Financial Awareness (mains only)',
                'Banking terms and the structure of the Indian banking system, Reserve Bank functions, monetary policy instruments, financial institutions and regulators, government schemes, budget and economic survey highlights, and current affairs of the preceding several months. The largest section in the main examination by marks.',
              ],
              [
                'Computer Aptitude (mains only)',
                'Computer fundamentals, hardware and software, operating systems, MS Office, internet and networking basics, database basics, shortcut keys and abbreviations, and cyber security awareness. Combined with reasoning in one section.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Given that financial awareness is the single largest mains section and is entirely learnable in advance, it is the most efficient place to invest daily time. Unlike quantitative aptitude, where improvement is gradual and effortful, awareness converts study into marks almost directly.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'IBPS Clerk exam pattern — prelims sectional timing, mains section marks and durations, negative marking and state-wise merit.',
        lead: [
          'Two stages, no interview. Everything comes down to the main examination score against a state-wise cutoff.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Preliminary examination, with a separate time limit per section. Confirm against the current notification.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['English Language', '30', '30', '20 minutes'],
              ['Numerical Ability', '35', '35', '20 minutes'],
              ['Reasoning Ability', '35', '35', '20 minutes'],
              ['Total', '100', '100', '60 minutes'],
            ],
          },
          {
            type: 'table',
            caption:
              'Main examination. Sections are separately timed and unequally weighted. Confirm against the current notification.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['General and Financial Awareness', '50', '50', '35 minutes'],
              ['General English', '40', '40', '35 minutes'],
              ['Reasoning Ability and Computer Aptitude', '50', '60', '45 minutes'],
              ['Quantitative Aptitude', '50', '50', '45 minutes'],
              ['Total', '190', '200', 'About 160 minutes'],
            ],
          },
          {
            type: 'list',
            title: 'What to take from the numbers',
            items: [
              { text: 'Financial awareness is fifty marks in thirty-five minutes', note: 'the highest marks-per-minute section in the paper, and entirely recall-based. Take it fast and confidently.' },
              { text: 'Reasoning with computer aptitude carries sixty marks', note: 'the heaviest section, and worth protecting time for.' },
              { text: 'A quarter-mark deduction applies', note: 'in both stages, so accuracy discipline matters throughout.' },
              { text: 'There is no interview', note: 'so the mains score is the entire basis of selection, against a state-wise cutoff.' },
            ],
          },
          {
            type: 'note',
            title: 'Cutoffs are state-wise',
            text: 'Because merit is prepared state by state, the score required varies with where you applied and in which category. A candidate comparing their score against a figure quoted for another state is comparing against the wrong number.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'IBPS Clerk previous year papers — building calculation speed from past simplification and data interpretation sets.',
        lead: [
          'Clerical papers reward speed on routine questions more than skill on hard ones. Past papers are where you learn what routine looks like.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Look at a few years of IBPS Clerk numerical ability sections and the shape is consistent: a substantial block of simplification and approximation, a number series set, a data interpretation set or two, and a spread of arithmetic word problems. None of it is conceptually hard. All of it is time-pressured, which means the marks go to whoever calculates fastest with the fewest errors.',
          },
          {
            type: 'steps',
            title: 'Turning past papers into speed',
            items: [
              { text: 'Do every simplification set against a stopwatch.', note: 'Target well under twenty seconds a question. This is a mechanical skill and it responds quickly to drilling.' },
              { text: 'Memorise squares, cubes, and fraction-percentage equivalents.', note: 'Most simplification and data interpretation speed comes from not having to compute these at all.' },
              { text: 'Catalogue the puzzle types you meet.', note: 'The clerical puzzle set is smaller and gentler than the officer one, which makes it fully learnable.' },
              { text: 'Collect financial awareness questions by theme.', note: 'Banking terms, RBI functions, schemes and abbreviations recur heavily across cycles.' },
            ],
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'IBPS PO mock test', to: '/mock-tests/ibps-po/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'IBPS Clerk mock tests — sectionally timed prelims and mains practice with scoring and section-wise analysis.',
        lead: [
          'With no interview to follow, a mock score is a fairly direct forecast of your result. That makes honest mock conditions unusually valuable here.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Take prelims mocks with the twenty-minute sectional limits enforced, and mains mocks with the section timings the real paper uses. Anything looser measures a different exam. The number to watch across a series of mocks is not your peak score but your floor — the cutoff is a threshold, and consistency clears it more reliably than an occasional strong day.',
          },
          {
            type: 'list',
            title: 'Analysis worth doing',
            items: [
              { text: 'Accuracy per section, tracked over time', note: 'a rising attempt count with falling accuracy is a net loss under negative marking.' },
              { text: 'Simplification speed specifically', note: 'measured in seconds per question, since this block is pure mechanical throughput.' },
              { text: 'Financial awareness hit rate', note: 'the most improvable number in your mains score.' },
              { text: 'Your worst mock, not your best', note: 'the cutoff does not care about your best day.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Sectional and topic practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'IBPS Clerk preparation strategy — building calculation speed, financial awareness and consistency for an exam decided on written marks alone.',
        lead: [
          'Two skills decide IBPS Clerk: how fast you calculate, and how much financial awareness you have accumulated. Both are built by daily habit rather than by study blocks.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A four to six month plan',
            items: [
              { text: 'From day one — calculation drilling, fifteen minutes daily.', note: 'Tables, squares, cubes, fraction-percentage equivalents, and simplification sets against a clock. Unglamorous and the highest-return habit in this exam.' },
              { text: 'From day one — financial and general awareness, twenty minutes daily.', note: 'The largest mains section, entirely learnable, and impossible to cram at the end.' },
              { text: 'Months one to three — arithmetic and data interpretation.', note: 'Percentage and ratio first, then the standard arithmetic topics, then data interpretation as a distinct skill.' },
              { text: 'Months one to three — reasoning, with puzzles daily.', note: 'Two or three puzzles a day. The clerical puzzle set is learnable within a few months of steady practice.' },
              { text: 'Alongside — English, grammar-led.', note: 'The clerical English paper rewards grammar accuracy and vocabulary more than inference, so rules and word lists genuinely pay here.' },
              { text: 'Month four — sectionally timed mocks, twice weekly.', note: 'Prelims format first, then mains format as the mains date approaches.' },
            ],
          },
          {
            type: 'list',
            title: 'Common mistakes',
            items: [
              { text: 'Using a calculator during practice', note: 'the exam is substantially a mental arithmetic test; practising with a calculator trains the wrong skill entirely.' },
              { text: 'Leaving financial awareness to the end', note: 'fifty marks that reward months of light daily contact and punish last-minute revision.' },
              { text: 'Chasing a high score in one mock', note: 'the cutoff rewards a consistent floor, not an occasional peak.' },
              { text: 'Choosing the state carelessly', note: 'it fixes your cutoff and carries a language expectation.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'IBPS Clerk study material — numerical ability, reasoning, English and financial awareness notes at clerical-cadre depth.',
        lead: [
          'Material pitched at the clerical paper: calculation-heavy quantitative work, learnable puzzle types and a financial awareness base built for revision.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The quantitative notes are the ones to work hardest, but not in the way most candidates assume. The gain here is not from harder problems — it is from making the easy ones automatic. A candidate who can read a fraction as a percentage without pausing will finish the numerical section with minutes to spare; one who converts each figure longhand will not finish at all.',
          },
          {
            type: 'links',
            title: 'Subject notes for IBPS Clerk',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Economy and banking notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'Daily habits',
            items: [
              'Fifteen minutes of pure calculation drill, every day, no exceptions.',
              'Two puzzles and one data interpretation set, timed.',
              'Twenty minutes of financial and general awareness from one running source.',
              'One grammar rule reviewed with practice sentences.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the IBPS Clerk exam pattern?',
        a: 'Two objective stages and no interview. The preliminary examination has English, numerical ability and reasoning for 100 questions and 100 marks in 60 minutes, with a twenty-minute limit on each section. The main examination covers general and financial awareness, general English, reasoning with computer aptitude, and quantitative aptitude, for 190 questions and 200 marks in about 160 minutes across separately timed sections. A quarter-mark deduction applies for wrong answers in both stages.',
      },
      {
        q: 'Is there an interview in IBPS Clerk?',
        a: 'No. Selection is made entirely on main examination marks, which is the main structural difference from IBPS PO. Because there is no later stage that can redistribute marks, objective accuracy and consistency matter more here than in any other banking recruitment — the cutoff rewards a reliable floor rather than an occasional high score.',
      },
      {
        q: 'How are IBPS Clerk cutoffs decided?',
        a: 'State-wise and category-wise, from main examination marks. Candidates apply against a chosen state and compete within that state’s merit list, so the score needed varies by where you applied. Comparing your score to a cutoff quoted for a different state is comparing against the wrong number.',
      },
      {
        q: 'Which is the highest-scoring section in IBPS Clerk mains?',
        a: 'General and financial awareness, at fifty marks in about thirty-five minutes — the best marks-per-minute ratio in the paper, and entirely recall-based. It is also the most improvable section, because it rewards steady daily contact over several months rather than aptitude. Candidates who start it early and revise it regularly gain more from it than from any comparable investment in quantitative aptitude.',
      },
      {
        q: 'What qualification is needed for IBPS Clerk?',
        a: 'A bachelor’s degree in any discipline from a recognised university, along with computer literacy and, generally, proficiency in the official language of the state you apply for, which may be verified at a later stage. Age limits and relaxations are set out in the notification for each cycle.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SBI PO
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'sbi-po',
    path: '/government-exams/banking/sbi-po/',
    name: 'SBI PO',
    fullName: 'State Bank of India — Probationary Officer',
    authority: 'State Bank of India',
    official: 'sbi.co.in/careers',
    seoTitle: 'SBI PO 2026: Prelims, Mains, Group Exercise & Interview Guide',
    metaDescription:
      'SBI PO exam guide — prelims and mains pattern, descriptive paper, psychometric test, group exercise and interview, syllabus and free mock tests.',
    lead: [
      'SBI PO is the Probationary Officer recruitment for the State Bank of India, conducted by the bank itself rather than through the IBPS common process. It is widely regarded as the most demanding of the mainstream banking examinations, and the reputation is earned — not because the syllabus is larger, but because the questions are framed less predictably.',
      'It also has a final stage that no other banking recruitment shares in the same form: a psychometric assessment feeding into a group exercise and interview. Candidates who prepare only for the written papers arrive at that stage without having thought about it at all.',
    ],
    quickFacts: [
      ['Conducted by', 'State Bank of India'],
      ['Post', 'Probationary Officer'],
      ['Level', 'Bachelor’s degree in any discipline'],
      ['Stages', 'Preliminary → Main (objective and descriptive) → Psychometric test, group exercise and interview'],
      ['Reputation', 'The least predictable question framing among mainstream banking exams'],
      ['Final merit', 'Weighted between the main examination and the interview stage'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The State Bank of India runs its own officer recruitment rather than participating in the IBPS common process. The Probationary Officer role begins with a structured training period and leads into branch management, credit, operations and specialist functions across the country’s largest banking network.',
      },
      {
        type: 'p',
        text: 'What distinguishes SBI PO from its IBPS counterpart is not the syllabus, which is broadly the same, but the framing. SBI questions tend to be phrased in ways that resist pattern-matching — data interpretation sets built around unfamiliar arrangements, reasoning puzzles with unusual constraints, English passages that ask for inference rather than location. Candidates who have prepared by memorising question types find that preparation transfers less well here than they expected.',
      },
      {
        type: 'list',
        title: 'The stages, and what each is really assessing',
        items: [
          { text: 'Preliminary examination', note: 'speed and selection under twenty-minute sectional limits. Qualifying only.' },
          { text: 'Main examination', note: 'depth and adaptability across data analysis, reasoning with computer aptitude, English, and general economy and banking awareness.' },
          { text: 'Descriptive paper', note: 'a letter and an essay, carrying meaningful weight and written under time pressure.' },
          { text: 'Psychometric test, group exercise and interview', note: 'the psychometric assessment informs the interview panel; the group exercise assesses how you contribute to a discussion rather than how much you say.' },
        ],
      },
      {
        type: 'note',
        title: 'The final stage rewards preparation too',
        text: 'Group exercises and interviews are frequently treated as unpreparable. They are not. Reading widely on banking and the economy, practising structured spoken argument, and thinking honestly about your own record are all preparation — and they distinguish candidates at a stage where written scores are already close together.',
      },
    ],
    stages: [
      {
        name: 'Preliminary Examination',
        mode: 'Objective, 60 minutes with sectional timing',
        detail:
          'English language, quantitative aptitude and reasoning ability for 100 questions and 100 marks, with a twenty-minute limit on each section. Qualifying in nature.',
      },
      {
        name: 'Main Examination — objective',
        mode: 'Objective, about 3 hours',
        detail:
          'Reasoning and computer aptitude, data analysis and interpretation, general economy and banking awareness, and English language, for 200 marks across separately timed sections.',
      },
      {
        name: 'Main Examination — descriptive',
        mode: 'Written, 30 minutes',
        detail:
          'A letter and an essay, typed immediately after the objective paper and carrying marks that count towards the main examination total.',
      },
      {
        name: 'Psychometric test, group exercise and interview',
        mode: 'Assessment and personal interview',
        detail:
          'A psychometric assessment whose output informs the interview panel, followed by a group exercise and a personal interview. The final merit is a weighted combination of the main examination and this stage.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'SBI PO syllabus — data analysis and interpretation, reasoning, English, banking awareness and the descriptive letter and essay.',
        lead: [
          'The syllabus is broadly the IBPS PO syllabus. The difference is the depth at which each topic is examined, and it is most pronounced in data analysis and in English.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Data Analysis and Interpretation',
                'Tabular, bar, line, pie and mixed graphs, caselets, missing-data sets, data sufficiency, data comparison, and probability and permutation questions embedded in data contexts. SBI sets are known for unusual presentations — arrangements you have not seen before, requiring you to work out the structure before you can start calculating. Underneath them sits ordinary arithmetic: percentage, ratio, average and the standard word-problem topics.',
              ],
              [
                'Reasoning Ability',
                'Complex puzzles and seating arrangements with layered constraints, machine input-output, syllogism including possibility-based conclusions, inequality with coded relationships, blood relations, direction sense, order and ranking, coding-decoding in newer formats, data sufficiency, and the critical reasoning group — statement and assumption, inference, strengthening and weakening arguments, and course of action.',
              ],
              [
                'English Language',
                'Reading comprehension with a strong emphasis on inference, tone and author intent rather than direct retrieval; cloze tests in connected-passage form; para jumbles; error spotting; sentence improvement and rearrangement; word usage and word swap; connectors; and paragraph completion. This is the section where SBI diverges most from other banking papers.',
              ],
              [
                'General, Economy and Banking Awareness',
                'The Indian banking system and its regulatory architecture, Reserve Bank functions and monetary policy instruments, money and capital markets, financial institutions and international bodies, government schemes, budget and economic survey content, banking terminology and abbreviations, and current affairs of the preceding several months weighted towards banking and economic news.',
              ],
              [
                'Computer Aptitude',
                'Computer fundamentals, hardware and software, operating systems, MS Office, networking and internet basics, database concepts, shortcut keys and abbreviations, and cyber security. Combined with reasoning in the mains.',
              ],
              [
                'Descriptive Paper',
                'One letter — formal or informal — and one essay, generally on banking, economic, technological or social themes. Assessed on structure, argument, clarity and language accuracy within a tight thirty-minute window.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The practical implication is that SBI PO rewards understanding over pattern recognition. A candidate who has learned twenty puzzle templates will struggle when the twenty-first has a constraint none of them had; a candidate who has learned how to represent constraints on paper will not. The same is true of data interpretation, where reading an unfamiliar structure calmly is the actual skill being tested.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'SBI PO exam pattern — prelims sectional timing, mains objective and descriptive structure, and the group exercise and interview stage.',
        lead: [
          'Prelims mirrors the IBPS format. Mains is heavier, the descriptive paper carries real weight, and the final stage is unlike anything in the other banking exams.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Preliminary examination, sectionally timed. Confirm against the current official advertisement.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['English Language', '30', '30', '20 minutes'],
              ['Quantitative Aptitude', '35', '35', '20 minutes'],
              ['Reasoning Ability', '35', '35', '20 minutes'],
              ['Total', '100', '100', '60 minutes'],
            ],
          },
          {
            type: 'table',
            caption:
              'Main examination, objective component. Sections are separately timed. Confirm against the current advertisement.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['Reasoning and Computer Aptitude', '40', '60', '50 minutes'],
              ['Data Analysis and Interpretation', '30', '60', '45 minutes'],
              ['General, Economy and Banking Awareness', '60', '60', '45 minutes'],
              ['English Language', '40', '40', '40 minutes'],
              ['Total (objective)', '170', '200', 'About 3 hours'],
            ],
          },
          {
            type: 'p',
            text: 'Two numbers in that table deserve attention. Data analysis carries sixty marks from only thirty questions, which means each question is worth twice what an awareness question is worth — and they are the hardest questions in the paper. And the awareness section offers sixty marks from sixty questions in forty-five minutes, which is the most efficient block of marks available to a well-prepared candidate.',
          },
          {
            type: 'list',
            title: 'The descriptive paper and the final stage',
            items: [
              { text: 'Descriptive paper', note: 'a letter and an essay in thirty minutes, written immediately after three hours of objective testing. Fatigue is part of the challenge.' },
              { text: 'Psychometric test', note: 'an assessment whose output is provided to the interview panel rather than scored independently.' },
              { text: 'Group exercise', note: 'a discussion assessed on contribution quality, listening and reasoning rather than on volume of speech.' },
              { text: 'Interview', note: 'combined with the main examination in a weighted final merit, with the written stage carrying the larger share.' },
            ],
          },
          {
            type: 'note',
            title: 'SBI revises its pattern more often than IBPS',
            text: 'Section marks, question counts, timings and the composition of the final stage have all been adjusted between cycles. The official advertisement for the current recruitment is the only reliable source for these numbers.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SBI PO previous year papers — why past sets matter for building adaptability rather than pattern recognition.',
        lead: [
          'Use SBI papers differently from IBPS papers. The point is not to learn the patterns — it is to get used to meeting ones you have not seen.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Most banking preparation is pattern acquisition: see enough of a question type and you stop having to think about it. SBI deliberately undermines that by varying presentation. So the useful way to work through its past papers is not to catalogue what appeared, but to practise the process of approaching something unfamiliar without losing composure or time.',
          },
          {
            type: 'steps',
            title: 'A different way to use past papers',
            items: [
              { text: 'On meeting an unfamiliar set, spend thirty seconds understanding its structure before calculating.', note: 'The time is recovered several times over. Rushing into an unread structure is how candidates lose whole sets.' },
              { text: 'Write your constraint representation down.', note: 'For layered puzzles, the diagram is the solution. Practise the notation until it is automatic.' },
              { text: 'For English, answer inference questions before locating evidence.', note: 'Then check. This trains the comprehension the paper actually tests.' },
              { text: 'Note every set you abandoned and why.', note: 'Abandoning is a legitimate skill; abandoning the wrong sets is what costs marks.' },
            ],
          },
          {
            type: 'p',
            text: 'IBPS PO papers are still worth solving as a supplement — they build the underlying arithmetic and reasoning fluency that SBI then tests in less familiar dress. Use them for volume and SBI papers for difficulty.',
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'SBI PO free mock test', to: '/mock-tests/sbi-po/' },
              { label: 'IBPS PO mock test', to: '/mock-tests/ibps-po/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Free SBI PO mock tests — sectionally timed prelims and full mains practice with analysis of accuracy, pacing and set selection.',
        lead: [
          'For SBI, the most valuable thing a mock measures is not your score. It is how you behave when a question does not look like the ones you practised.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Every SBI paper contains sets designed to be skipped. The candidates who do well are not the ones who solve them — they are the ones who recognise within thirty seconds that a set is expensive, leave it, and spend those minutes elsewhere. That judgement is a trainable skill, and mocks are where it is trained.',
          },
          {
            type: 'steps',
            title: 'Training set selection',
            items: [
              { text: 'Scan the whole section before attempting anything.', note: 'Thirty to sixty seconds spent triaging pays for itself repeatedly.' },
              { text: 'Set a strict abandonment rule and obey it.', note: 'If a set has not yielded within a fixed time, leave it. Sunk cost is the most expensive error in a timed paper.' },
              { text: 'Review the sets you skipped afterwards.', note: 'Were they genuinely hard, or did they just look unfamiliar? The difference tells you whether your triage instinct is calibrated.' },
              { text: 'Track accuracy on attempted sets separately from coverage.', note: 'High accuracy on fewer sets is the SBI-winning profile.' },
            ],
          },
          {
            type: 'p',
            text: 'Practise the descriptive paper immediately after a full mains mock rather than fresh. Writing a coherent essay after three hours of objective testing is a distinctly different task from writing one at the start of a study session, and the exam only ever presents the harder version.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Take the free SBI PO mock test', to: '/mock-tests/sbi-po/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'SBI PO preparation strategy — building adaptability for unfamiliar question framing, plus descriptive writing and interview preparation.',
        lead: [
          'Prepare for SBI PO by building understanding rather than by accumulating templates, and start the final-stage preparation long before you clear the mains.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most common trajectory in SBI PO preparation is a candidate who scores well in IBPS-style mocks, meets an SBI paper, and finds their pattern library does not fit. The correction is not more practice of the same kind — it is deliberately practising with unfamiliar material, and building the habit of deriving an approach rather than recalling one.',
          },
          {
            type: 'steps',
            title: 'A plan that suits the exam',
            items: [
              { text: 'From day one — banking and economic awareness, daily.', note: 'Sixty marks in the mains, cumulative, and impossible to build late. Read a business newspaper rather than only a digest.' },
              { text: 'Months one to three — arithmetic and reasoning fundamentals.', note: 'The foundation SBI tests in unfamiliar dress. Depth here is what makes adaptability possible.' },
              { text: 'From month two — deliberately unfamiliar practice.', note: 'Seek out sets and puzzle formats you have not met. Being uncomfortable in practice is the point.' },
              { text: 'From month two — English through reading, daily.', note: 'Editorials and long-form journalism. Inference-based comprehension is built by reading argument, not by drilling grammar.' },
              { text: 'From month three — descriptive writing weekly, timed.', note: 'And at least some of it written immediately after a long objective session.' },
              { text: 'From month three — think about the final stage.', note: 'Follow banking and economic developments well enough to hold a view. Practise speaking a structured argument aloud.' },
              { text: 'Final weeks — full mocks in both formats, with triage discipline.', note: 'Measuring set selection as carefully as score.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates selected candidates',
            items: [
              { text: 'Comfort with unfamiliarity', note: 'the ability to meet a strange set and work it out rather than freeze.' },
              { text: 'Genuine reading habit', note: 'which serves the English section, the awareness section, the essay and the interview simultaneously.' },
              { text: 'Ruthless set selection', note: 'knowing what to leave is worth more than being able to solve everything slowly.' },
              { text: 'Preparation for the interview stage', note: 'started months earlier, not in the fortnight after the mains result.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'SBI PO study material — data interpretation, advanced reasoning, inference-based English and banking awareness notes.',
        lead: [
          'Notes that build understanding rather than templates, because the exam is designed to defeat templates.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work the reasoning notes with a pen in hand. The layered puzzles SBI sets are solved by representation — a clear diagram that holds every constraint at once — and representation is a manual skill that improves only by doing it. Reading a solved puzzle teaches almost nothing; drawing the grid yourself teaches the whole thing.',
          },
          {
            type: 'links',
            title: 'Subject notes for SBI PO',
            items: [
              { label: 'Quantitative aptitude and data interpretation', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning — puzzles and arrangements', to: '/study-material/reasoning/' },
              { label: 'English — comprehension and vocabulary', to: '/study-material/english/' },
              { label: 'Economy and banking notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine',
            items: [
              'One business newspaper, read properly rather than skimmed.',
              'Three puzzles, at least one of an unfamiliar type.',
              'Two data interpretation sets, timed, with the structure read before any calculation.',
              'One editorial analysed for argument and tone, which serves both the English section and the essay.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SBI PO exam pattern?',
        a: 'Three stages. The preliminary examination has English, quantitative aptitude and reasoning for 100 questions and 100 marks in 60 minutes, with twenty-minute sectional limits, and is qualifying only. The main examination has an objective component of about 170 questions for 200 marks across separately timed sections — reasoning with computer aptitude, data analysis and interpretation, general economy and banking awareness, and English — followed by a thirty-minute descriptive paper. A psychometric test, group exercise and interview follow, and the final merit is weighted between the main examination and that stage.',
      },
      {
        q: 'Is SBI PO harder than IBPS PO?',
        a: 'The syllabus is broadly the same, so the difficulty is not in scope. What makes SBI harder is framing: data interpretation sets are presented in unfamiliar arrangements, reasoning puzzles carry layered constraints, and the English section leans on inference and tone rather than direct retrieval. Preparation based on memorising question types transfers less well to SBI than to IBPS, which is why candidates who score well in IBPS-style mocks can still find SBI papers difficult.',
      },
      {
        q: 'What is the SBI PO group exercise and interview stage?',
        a: 'After the main examination, shortlisted candidates take a psychometric assessment whose output is provided to the interview panel, then participate in a group exercise and a personal interview. The group exercise assesses the quality of your contribution, your listening and your reasoning rather than how much you speak. This stage carries real weight in the final merit and is preparable — through wide reading on banking and the economy, and practice at making a structured argument aloud.',
      },
      {
        q: 'How important is the SBI PO descriptive paper?',
        a: 'More important than most candidates treat it. A letter and an essay in thirty minutes carries marks that count towards the main examination total, and it is written immediately after roughly three hours of objective testing, so fatigue is part of the challenge. The practical advice is to write at least some of your practice pieces straight after a full-length objective mock rather than fresh, because the exam never offers you the easier version of the task.',
      },
      {
        q: 'How should I prepare differently for SBI PO?',
        a: 'Deliberately practise with unfamiliar material rather than drilling recognised patterns. Seek out data interpretation presentations and puzzle formats you have not met, and build the habit of spending the first thirty seconds understanding a set’s structure before calculating anything. Alongside that, read a business newspaper daily — it serves the awareness section, the English section, the essay and the interview at the same time.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SBI Clerk
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'sbi-clerk',
    path: '/government-exams/banking/sbi-clerk/',
    name: 'SBI Clerk',
    fullName: 'State Bank of India — Junior Associate (Customer Support and Sales)',
    authority: 'State Bank of India',
    official: 'sbi.co.in/careers',
    seoTitle: 'SBI Clerk 2026: Junior Associate Pattern, Syllabus & Mocks',
    metaDescription:
      'SBI Clerk Junior Associate exam guide — prelims and mains pattern, syllabus, local language requirement, previous papers and free mock tests.',
    lead: [
      'SBI Clerk recruits Junior Associates for customer support and sales roles in State Bank branches. Like IBPS Clerk it has no interview, so the main examination decides selection outright — but unlike IBPS Clerk it is conducted by the bank directly, and its papers carry the same slightly less predictable framing that characterises SBI recruitment generally.',
      'It also has a requirement that catches candidates out: proficiency in the official language of the state or circle applied for, tested separately where the candidate has not studied that language at school.',
    ],
    quickFacts: [
      ['Conducted by', 'State Bank of India'],
      ['Post', 'Junior Associate (Customer Support and Sales)'],
      ['Level', 'Bachelor’s degree in any discipline'],
      ['Stages', 'Preliminary → Main. There is no interview.'],
      ['Language requirement', 'Proficiency in the official language of the state or circle applied for'],
      ['Selection basis', 'Main examination marks alone'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Junior Associate recruitment fills clerical positions across the State Bank’s circles — customer service, account operations, cash handling and sales support at branch level. Candidates apply against a particular state or circle, and both vacancies and cutoffs are determined at that level.',
      },
      {
        type: 'p',
        text: 'Selection rests entirely on the main examination, since there is no interview. That gives the exam the same character as IBPS Clerk — accuracy and consistency over brilliance — while the question framing tends to follow the SBI house style, which is a little less template-driven than the IBPS equivalent.',
      },
      {
        type: 'list',
        title: 'Three things to settle before applying',
        items: [
          { text: 'The state or circle you apply against', note: 'it determines the vacancies you compete for and the cutoff you must clear.' },
          { text: 'Language proficiency', note: 'candidates who have not studied the state’s official language at school may be required to demonstrate proficiency in a separate test.' },
          { text: 'Whether you also intend to sit IBPS Clerk', note: 'the syllabi overlap almost entirely, so preparing for both together is efficient — the calendars rarely clash.' },
        ],
      },
      {
        type: 'note',
        title: 'The local language test is a real filter',
        text: 'Where it applies, failing to demonstrate proficiency in the official language of the state applied for can end an otherwise successful candidacy. If you are applying to a state whose language you did not study, find out what form the requirement takes in the current advertisement well before the application closes.',
      },
    ],
    stages: [
      {
        name: 'Preliminary Examination',
        mode: 'Objective, 60 minutes with sectional timing',
        detail:
          'English language, numerical ability and reasoning ability for 100 questions and 100 marks, with a twenty-minute limit on each section. Qualifying in nature.',
      },
      {
        name: 'Main Examination',
        mode: 'Objective, about 2 hours 40 minutes',
        detail:
          'General and financial awareness, general English, quantitative aptitude, and reasoning ability with computer aptitude, for about 190 questions and 200 marks across separately timed sections. These marks determine the final merit.',
      },
      {
        name: 'Local language proficiency',
        mode: 'Test or documentary proof',
        detail:
          'Candidates who have not studied the official language of the state or circle applied for at school level may be required to demonstrate proficiency separately. Qualifying in nature.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'SBI Clerk syllabus — numerical ability, reasoning, English, and the mains financial awareness and computer aptitude sections.',
        lead: [
          'Almost identical in scope to IBPS Clerk, which makes preparing for both together the obvious efficiency. The difference is in how the questions are dressed rather than in what they cover.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Numerical Ability / Quantitative Aptitude',
                'Simplification and approximation, number series, quadratic equations, data interpretation from tables and the standard graph types, and arithmetic across percentage, ratio and proportion, average, profit and loss, simple and compound interest, time and work, time speed and distance, mixture and alligation, partnership, boats and streams, pipes and cisterns, permutation, combination and probability, and mensuration.',
              ],
              [
                'Reasoning Ability',
                'Puzzles and seating arrangements, syllogism, inequality, blood relations, direction sense, order and ranking, coding-decoding, alphanumeric series, data sufficiency and statement-based reasoning. Combined with computer aptitude in the mains.',
              ],
              [
                'English Language',
                'Reading comprehension, cloze test, para jumbles, error spotting, sentence improvement, phrase replacement, fill in the blanks, vocabulary in context and paragraph completion. SBI passages tend to ask a little more inference than the IBPS equivalent.',
              ],
              [
                'General and Financial Awareness (mains only)',
                'Banking terminology and structure, Reserve Bank functions and monetary policy, financial markets and institutions, government schemes, budget and economic survey highlights, banking abbreviations, and current affairs of the preceding several months with a banking and economic emphasis.',
              ],
              [
                'Computer Aptitude (mains only)',
                'Computer fundamentals, hardware and software, operating systems, MS Office, internet and networking, database basics, shortcut keys and abbreviations, and cyber security awareness.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Because the overlap with IBPS Clerk is so nearly complete, the sensible approach is one preparation covering both, with SBI-specific practice added in the final stretch to acclimatise to the framing rather than to the content.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'SBI Clerk exam pattern — prelims sectional timing, mains section marks and duration, negative marking and the language requirement.',
        lead: [
          'Two objective stages, no interview, and a language proficiency check. The mains score is the whole of the selection.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Preliminary examination, sectionally timed. Confirm against the current official advertisement.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['English Language', '30', '30', '20 minutes'],
              ['Numerical Ability', '35', '35', '20 minutes'],
              ['Reasoning Ability', '35', '35', '20 minutes'],
              ['Total', '100', '100', '60 minutes'],
            ],
          },
          {
            type: 'table',
            caption:
              'Main examination. Sections are separately timed. Confirm against the current official advertisement.',
            head: ['Section', 'Questions', 'Marks', 'Time'],
            rows: [
              ['General and Financial Awareness', '50', '50', '35 minutes'],
              ['General English', '40', '40', '35 minutes'],
              ['Quantitative Aptitude', '50', '50', '45 minutes'],
              ['Reasoning Ability and Computer Aptitude', '50', '60', '45 minutes'],
              ['Total', '190', '200', 'About 2 hours 40 minutes'],
            ],
          },
          {
            type: 'list',
            title: 'Attempt strategy that follows from the structure',
            items: [
              { text: 'Take financial awareness first and quickly', note: 'fifty marks of recall in thirty-five minutes is the best rate in the paper.' },
              { text: 'Protect time for reasoning with computer aptitude', note: 'sixty marks, the heaviest section.' },
              { text: 'A quarter-mark deduction applies', note: 'in both stages, so a blind guess is a losing bet.' },
              { text: 'Prelims marks are discarded', note: 'exactly as in IBPS Clerk — mains is the whole of selection.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current structure and the language requirement',
            text: 'SBI adjusts section marks and timings between cycles, and the form of the local language requirement is set out in each advertisement. Both are worth reading in the current document rather than assuming continuity from a previous year.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SBI Clerk previous year papers — using past sets to build calculation speed and get used to SBI question framing.',
        lead: [
          'Solve both SBI and IBPS clerical papers. The IBPS sets build volume and fluency; the SBI sets acclimatise you to the framing you will actually meet.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The numerical ability section rewards mechanical speed above everything else. Simplification, approximation and series questions are numerous and each is worth the same as a hard arithmetic word problem, which makes calculation fluency the highest-yield investment available. Past papers are the place to drill it, because they supply the exact difficulty level you will face.',
          },
          {
            type: 'steps',
            title: 'A practical routine with past papers',
            items: [
              { text: 'Drill simplification sets daily against a stopwatch.', note: 'Aim to bring the average well under twenty seconds a question.' },
              { text: 'Learn tables, squares, cubes and fraction equivalents cold.', note: 'Most of the speed gain in this paper comes from not calculating at all.' },
              { text: 'Catalogue puzzle types across both SBI and IBPS papers.', note: 'The clerical puzzle set is small enough to learn completely.' },
              { text: 'Build a financial awareness theme list from past mains papers.', note: 'The themes recur; only the specifics change.' },
            ],
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'SBI PO mock test', to: '/mock-tests/sbi-po/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'SBI Clerk mock tests — sectionally timed prelims and mains practice with accuracy and consistency tracking.',
        lead: [
          'With selection resting on one objective paper, your mock scores are an unusually direct forecast. Take them honestly.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Track your floor rather than your ceiling. A cutoff is a threshold, and a candidate who scores consistently a little above it will clear more reliably than one who alternates between excellent and mediocre. Consistency in this exam comes from accuracy discipline — knowing which questions to leave — far more than from raw knowledge.',
          },
          {
            type: 'list',
            title: 'What to review after each mock',
            items: [
              { text: 'Seconds per simplification question', note: 'the most directly improvable number in the paper.' },
              { text: 'Accuracy versus attempts in each section', note: 'under negative marking, over-attempting is a common silent loss.' },
              { text: 'Financial awareness score trend', note: 'it should rise steadily; if it is flat, your source or your revision rhythm needs changing.' },
              { text: 'Your lowest score across the last five mocks', note: 'that is the number the cutoff will meet on a bad day.' },
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
          'SBI Clerk preparation strategy — calculation speed, financial awareness and a combined plan covering IBPS Clerk at the same time.',
        lead: [
          'Prepare for SBI Clerk and IBPS Clerk as one project. The syllabi overlap almost completely, and the calendars rarely collide.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Treating the two clerical examinations as separate preparations duplicates effort for no benefit. One plan, covering the shared syllabus properly, with the last few weeks before each exam spent on that exam’s past papers to acclimatise to its framing, is both more efficient and more effective than alternating between two half-plans.',
          },
          {
            type: 'steps',
            title: 'A combined four to six month plan',
            items: [
              { text: 'From day one — fifteen minutes of calculation drilling daily.', note: 'Tables, squares, fraction-percentage equivalents, simplification against a clock.' },
              { text: 'From day one — financial and general awareness, twenty minutes daily.', note: 'Fifty marks in each mains paper, cumulative and uncrammable.' },
              { text: 'Months one to three — arithmetic, then data interpretation.', note: 'Percentage and ratio fluency first; everything else in this section rests on them.' },
              { text: 'Months one to three — daily puzzle practice.', note: 'Two or three a day. The clerical puzzle range is learnable in full.' },
              { text: 'Alongside — grammar-led English with a running vocabulary list.', note: 'The clerical papers reward accuracy on rules more than inference.' },
              { text: 'Month four — sectionally timed mocks in both formats.', note: 'Then, in the fortnight before each exam, that exam’s own past papers.' },
              { text: 'If the language requirement applies to you — address it early.', note: 'Find out what form it takes and prepare accordingly, well before the application deadline.' },
            ],
          },
          {
            type: 'list',
            title: 'Avoidable errors',
            items: [
              { text: 'Practising with a calculator', note: 'this is a mental arithmetic exam; a calculator trains the wrong skill.' },
              { text: 'Treating the two clerical exams as separate projects', note: 'duplicated effort with no additional coverage.' },
              { text: 'Deferring financial awareness', note: 'the largest and most learnable mains section.' },
              { text: 'Overlooking the language requirement', note: 'a qualifying condition that has ended otherwise successful candidacies.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'SBI Clerk study material — numerical ability, reasoning, English and financial awareness notes for the clerical cadre.',
        lead: [
          'The same core notes serve SBI Clerk and IBPS Clerk. Work them once, properly.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Prioritise the parts of the quantitative notes that make routine calculation automatic. In a clerical paper the marks are not hiding in difficult problems — they are in the volume of straightforward ones, and volume is a function of speed.',
          },
          {
            type: 'links',
            title: 'Subject notes for SBI Clerk',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Economy and banking notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'Daily habits that suit a clerical paper',
            items: [
              'Calculation drilling before anything else, every day.',
              'Two puzzles and one data interpretation set, timed.',
              'Twenty minutes of financial awareness from one running source.',
              'Ten new vocabulary items, revisited after three days and again after two weeks.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SBI Clerk exam pattern?',
        a: 'Two objective stages and no interview. The preliminary examination has English, numerical ability and reasoning for 100 questions and 100 marks in 60 minutes, with twenty-minute sectional limits, and is qualifying only. The main examination covers general and financial awareness, general English, quantitative aptitude, and reasoning with computer aptitude, for about 190 questions and 200 marks across separately timed sections. A quarter-mark deduction applies for wrong answers.',
      },
      {
        q: 'Is there a local language requirement for SBI Clerk?',
        a: 'Yes. Candidates apply against a particular state or circle and are generally expected to be proficient in that state’s official language. Where a candidate has not studied the language at school level, proficiency may need to be demonstrated in a separate qualifying test. Because failing it can end an otherwise successful candidacy, check what form the requirement takes in the current advertisement before the application closes.',
      },
      {
        q: 'Should I prepare for SBI Clerk and IBPS Clerk together?',
        a: 'Yes — the syllabi overlap almost completely and the calendars rarely clash, so one preparation covering the shared ground is far more efficient than two partial ones. The sensible refinement is to spend the fortnight before each exam on that exam’s own past papers, since SBI framing is a little less template-driven than the IBPS equivalent even though the content is the same.',
      },
      {
        q: 'Is there an interview in SBI Clerk?',
        a: 'No. Selection rests on the main examination marks alone, subject to the local language proficiency requirement. As with IBPS Clerk, this means there is no later stage that can recover a marginal written score, so accuracy and consistency matter more than an occasional high mock score.',
      },
      {
        q: 'Which section should I attempt first in SBI Clerk mains?',
        a: 'General and financial awareness. It offers fifty marks from purely recall-based questions in about thirty-five minutes, which is the best marks-per-minute rate in the paper, and nothing in it benefits from extra thinking time. Taking it quickly and confidently protects minutes for the reasoning and computer aptitude section, which carries sixty marks and genuinely rewards the time.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     IBPS RRB
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ibps-rrb',
    path: '/government-exams/banking/ibps-rrb/',
    name: 'IBPS RRB',
    fullName: 'Institute of Banking Personnel Selection — Regional Rural Banks Common Recruitment',
    authority: 'Institute of Banking Personnel Selection (IBPS)',
    official: 'ibps.in',
    seoTitle: 'IBPS RRB 2026: Officer Scale I & Office Assistant Guide',
    metaDescription:
      'IBPS RRB exam guide — Office Assistant and Officer Scale I, II and III patterns, syllabus, language requirement and free mock tests.',
    lead: [
      'IBPS RRB is the common recruitment for Regional Rural Banks — institutions with a rural and semi-urban mandate, sponsored by commercial banks and operating within defined state territories. One examination process fills both the clerical cadre, called Office Assistant, and the officer cadres from Scale I upwards.',
      'Two features set it apart from the mainstream banking exams. There is no English section in the preliminary papers at all, and the local language requirement is not a formality — these are banks whose customers largely transact in the regional language.',
    ],
    quickFacts: [
      ['Conducted by', 'Institute of Banking Personnel Selection (IBPS)'],
      ['Posts', 'Office Assistant (Multipurpose) and Officer Scale I, II and III'],
      ['Level', 'Bachelor’s degree; officer scales II and III add experience and specialisation requirements'],
      ['Prelims subjects', 'Reasoning and numerical ability only — no English section'],
      ['Language', 'Proficiency in the local language of the state applied for is a genuine requirement'],
      ['Interview', 'Officer scales have an interview; Office Assistant does not'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Regional Rural Banks were created to extend banking into rural and semi-urban India, and they operate within defined state territories under a sponsoring commercial bank. The IBPS common recruitment fills their posts across participating banks nationwide, with candidates applying against a particular bank and state.',
      },
      {
        type: 'p',
        text: 'The exam structure differs from the mainstream banking recruitments in a way that changes preparation materially. The preliminary papers contain only reasoning and numerical ability — no English at all — which makes them shorter, faster and more purely quantitative than an IBPS PO or Clerk prelims. English or Hindi appears in the main examination, where candidates typically choose between them.',
      },
      {
        type: 'list',
        title: 'The post structure',
        items: [
          { text: 'Office Assistant (Multipurpose)', note: 'the clerical cadre. Preliminary and main examinations, with no interview — selection on the main examination alone.' },
          { text: 'Officer Scale I', note: 'the entry officer grade. Preliminary and main examinations followed by an interview.' },
          { text: 'Officer Scale II', note: 'general banking officer and specialist streams, with a single examination and an interview, and experience requirements at application.' },
          { text: 'Officer Scale III', note: 'senior management, with a single examination and an interview, and substantial experience requirements.' },
        ],
      },
      {
        type: 'note',
        title: 'The local language requirement is substantive',
        text: 'Regional Rural Banks serve customers who largely transact in the regional language, and proficiency in the local language of the state applied for is treated accordingly rather than as a formality. Where you have not studied that language, find out how proficiency is assessed before you apply.',
      },
    ],
    stages: [
      {
        name: 'Preliminary Examination',
        mode: 'Objective, 45 minutes',
        detail:
          'Reasoning and numerical ability only, for 80 questions and 80 marks in 45 minutes. There is no English section. Applies to Office Assistant and Officer Scale I; qualifying in nature.',
      },
      {
        name: 'Main Examination',
        mode: 'Objective, about 2 hours',
        detail:
          'Reasoning, quantitative aptitude or numerical ability, general awareness, English or Hindi language, and computer knowledge, for 200 questions and 200 marks. Candidates generally choose between the English and Hindi papers.',
      },
      {
        name: 'Interview (officer scales only)',
        mode: 'Personal interview',
        detail:
          'Conducted for Officer Scale I, II and III. Office Assistant candidates are selected on the main examination alone. The final merit for officer posts is weighted between the main examination and the interview.',
      },
      {
        name: 'Local language proficiency',
        mode: 'Verification or test',
        detail:
          'Proficiency in the official language of the state applied for is verified, and may be tested where the candidate has not studied that language at school level.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'IBPS RRB syllabus — reasoning and numerical ability for prelims, plus general awareness, language and computer knowledge for the mains.',
        lead: [
          'The prelims syllabus is unusually narrow: two subjects, no English. The mains widens to five, and the general awareness section carries a distinctly rural and agricultural banking flavour.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Reasoning',
                'Puzzles and seating arrangements, syllogism, inequality, blood relations, direction sense, order and ranking, coding-decoding, alphanumeric series, data sufficiency, input-output and statement-based reasoning. Weighted heavily in both stages.',
              ],
              [
                'Numerical Ability / Quantitative Aptitude',
                'Simplification and approximation, number series, quadratic equations, data interpretation from tables and standard graphs, and arithmetic across percentage, ratio and proportion, average, profit and loss, interest, time and work, time speed and distance, mixture and alligation, partnership, probability and mensuration.',
              ],
              [
                'General Awareness (mains only)',
                'Banking and financial awareness with particular attention to rural and agricultural banking, priority sector lending, NABARD and its role, cooperative banking, financial inclusion schemes, Reserve Bank functions, and current affairs of the preceding several months. The rural banking emphasis is real and distinguishes this paper from the mainstream banking awareness sections.',
              ],
              [
                'English or Hindi Language (mains only)',
                'Reading comprehension, cloze test, para jumbles, error spotting, sentence improvement, fill in the blanks and vocabulary, in whichever of the two languages the candidate opts for. Choose on the basis of reading speed rather than perceived difficulty.',
              ],
              [
                'Computer Knowledge (mains only)',
                'Computer fundamentals, hardware and software, operating systems, MS Office, internet and networking basics, database concepts, abbreviations and shortcut keys, and basic security awareness. A small, high-return section.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The absence of English from the preliminary stage has a strategic consequence worth naming. Candidates whose English is weak but whose quantitative and reasoning ability is strong are far better placed in IBPS RRB than in IBPS PO or Clerk, because the qualifying stage tests only their strengths. It is a genuinely different competitive landscape.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'IBPS RRB exam pattern — prelims without English, mains structure for Office Assistant and Officer Scale I, and the interview stage.',
        lead: [
          'Forty-five minutes, eighty questions, two subjects. The RRB prelims is the shortest and fastest of the banking preliminary papers.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Preliminary examination for Office Assistant and Officer Scale I. Confirm against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Reasoning', '40', '40', 'Puzzle-heavy, as in the other IBPS papers'],
              ['Numerical Ability', '40', '40', 'Simplification and arithmetic dominant'],
              ['Total', '80', '80', '45 minutes — no English section'],
            ],
          },
          {
            type: 'p',
            text: 'Eighty questions in forty-five minutes is a faster rate than any other banking prelims demands, and with only two sections there is nowhere to hide a weakness. A candidate weak in reasoning cannot compensate with English, because English is not on the paper.',
          },
          {
            type: 'table',
            caption:
              'Main examination structure. Confirm marks, question counts and timing against the current notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Reasoning', '40', '50', 'Highest-weighted section by marks'],
              ['Quantitative Aptitude / Numerical Ability', '40', '50', 'Data interpretation carries much of it'],
              ['General Awareness', '40', '40', 'Strong rural and agricultural banking emphasis'],
              ['English or Hindi Language', '40', '40', 'Candidate chooses one'],
              ['Computer Knowledge', '40', '20', 'Lowest marks per question, but quick to answer'],
              ['Total', '200', '200', 'About 2 hours'],
            ],
          },
          {
            type: 'list',
            title: 'Reading the mains weighting',
            items: [
              { text: 'Reasoning and quantitative aptitude carry more marks per question', note: 'fifty marks from forty questions each, against forty and twenty for the others.' },
              { text: 'Computer knowledge is forty questions for twenty marks', note: 'low value per question, but answerable in seconds. Take it fast; do not skip it.' },
              { text: 'A quarter-mark deduction applies', note: 'across the objective papers.' },
              { text: 'Office Assistant has no interview', note: 'Officer Scale I and above do, with the final merit weighted between mains and interview.' },
            ],
          },
          {
            type: 'note',
            title: 'Officer Scale II and III are structured differently',
            text: 'The higher officer scales use a single examination rather than a preliminary and main sequence, and carry experience and specialisation requirements at the application stage. The notification sets out a separate pattern for each — read the section that applies to the post you are actually applying for.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'IBPS RRB previous year papers — building the speed a 45-minute, 80-question prelims demands, and learning the rural banking awareness themes.',
        lead: [
          'Two things to extract from RRB past papers: raw speed for the prelims, and the rural banking themes that make its general awareness section distinctive.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The prelims rate — under thirty-four seconds a question with no easy language section to bank marks in — is what makes RRB papers worth drilling specifically. Practising on IBPS PO prelims papers builds the right skills but at a gentler tempo, so at least some of your timed practice should use the actual RRB format.',
          },
          {
            type: 'steps',
            title: 'Working the papers',
            items: [
              { text: 'Drill the prelims format at its own tempo.', note: 'Eighty questions, forty-five minutes, two sections. The pacing instinct is specific to this shape.' },
              { text: 'Build a rural banking awareness list from past mains papers.', note: 'NABARD, priority sector lending, cooperative structures, financial inclusion schemes. These themes recur and are absent from mainstream banking material.' },
              { text: 'Do computer knowledge sections against a clock.', note: 'Forty questions worth twenty marks should take very few minutes; treat it as a speed drill.' },
              { text: 'Practise in your chosen language from the start.', note: 'If you intend to take the Hindi paper, practise in Hindi rather than switching at the end.' },
            ],
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'IBPS PO mock test', to: '/mock-tests/ibps-po/' },
              { label: 'Economy and banking notes', to: '/study-material/economy/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'IBPS RRB mock tests — 45-minute, 80-question prelims practice and full mains simulation with section-wise analysis.',
        lead: [
          'Practise the RRB prelims in its own format. Eighty questions in forty-five minutes is a distinct rhythm, and a PO-format mock will not teach it.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'With only two sections and no English to fall back on, the RRB prelims punishes an imbalance more sharply than other banking papers. If reasoning is your weaker subject, a mock will show that as a hard limit on your score rather than as something a strong English section can offset. That clarity is useful: it tells you exactly where the work has to go.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Balance between the two prelims sections', note: 'a large gap is a structural vulnerability in this format specifically.' },
              { text: 'Questions per minute', note: 'the RRB rate is higher than any other banking prelims; check whether yours matches it.' },
              { text: 'Computer knowledge time in the mains', note: 'if it takes more than a few minutes, you are over-thinking a twenty-mark section.' },
              { text: 'General awareness accuracy on rural banking themes', note: 'distinct from mainstream banking awareness and often the weakest area for candidates preparing across several exams.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Sectional and topic practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'IBPS RRB preparation strategy — building prelims speed without an English fallback, and covering rural banking awareness for the mains.',
        lead: [
          'Two subjects in prelims means no hiding place. Balance between reasoning and numerical ability matters more here than in any other banking exam.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'In IBPS PO or Clerk prelims, a candidate with weak reasoning can still clear by scoring heavily in English and quantitative aptitude. IBPS RRB removes that option: with reasoning making up half the paper and English absent entirely, a weakness in reasoning becomes a hard ceiling. The first priority for anyone preparing for RRB, therefore, is to check that balance honestly and correct it early.',
          },
          {
            type: 'steps',
            title: 'A plan for the RRB format',
            items: [
              { text: 'Week one — a diagnostic in the RRB prelims format.', note: 'Eighty questions, forty-five minutes. It will tell you immediately whether the two sections are balanced.' },
              { text: 'Months one to three — puzzles daily, without fail.', note: 'Reasoning is half of prelims and the highest-weighted mains section. Two or three puzzles a day, timed.' },
              { text: 'Months one to three — calculation speed and data interpretation.', note: 'Simplification drills daily, then data interpretation as a distinct skill.' },
              { text: 'From month two — rural and agricultural banking awareness.', note: 'NABARD, priority sector lending, cooperative banking, financial inclusion. This material sits outside mainstream banking preparation and needs its own attention.' },
              { text: 'From month two — your chosen language paper.', note: 'English or Hindi, decided on reading speed and practised consistently in that language.' },
              { text: 'Month three — computer knowledge, as a short project.', note: 'Twenty marks that can be secured in two or three weeks of light study.' },
              { text: 'Month four — RRB-format mocks, twice weekly.', note: 'At the real tempo, not a PO-format substitute.' },
            ],
          },
          {
            type: 'list',
            title: 'What candidates get wrong',
            items: [
              { text: 'Assuming RRB is an easier PO', note: 'the prelims tempo is faster and there is no English section to cushion a weak area.' },
              { text: 'Using mainstream banking awareness material only', note: 'and missing the rural and agricultural banking themes the RRB paper actually emphasises.' },
              { text: 'Deferring the language choice', note: 'practise in the language you will sit in, from the beginning.' },
              { text: 'Neglecting the local language requirement', note: 'a genuine condition in banks whose customers transact in the regional language.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'IBPS RRB study material — reasoning, numerical ability, rural banking awareness and computer knowledge notes.',
        lead: [
          'Reasoning and numerical ability carry the whole preliminary stage, so those notes come first. Rural banking awareness is the mains material that mainstream banking guides omit.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work the reasoning notes hardest. Reasoning is half of the preliminary paper and the highest-weighted section of the main examination, which makes it the single most valuable subject in this recruitment — a position it does not hold in any of the other banking exams.',
          },
          {
            type: 'links',
            title: 'Subject notes for IBPS RRB',
            items: [
              { label: 'Reasoning — puzzles and arrangements', to: '/study-material/reasoning/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Economy and banking notes', to: '/study-material/economy/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine for the RRB format',
            items: [
              'Three puzzles a day, timed, throughout your preparation.',
              'Fifteen minutes of calculation drilling, every day.',
              'Twenty minutes of banking awareness, with rural and agricultural banking given deliberate weight.',
              'One data interpretation set, timed, in the format the RRB mains uses.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the IBPS RRB exam pattern?',
        a: 'For Office Assistant and Officer Scale I, a preliminary examination of 80 questions and 80 marks in 45 minutes covering only reasoning and numerical ability — there is no English section — followed by a main examination of 200 questions and 200 marks covering reasoning, quantitative aptitude, general awareness, English or Hindi, and computer knowledge. Officer Scale I candidates then have an interview; Office Assistant candidates do not. Officer Scales II and III use a single examination plus interview, with experience requirements at application.',
      },
      {
        q: 'Is there an English section in IBPS RRB prelims?',
        a: 'No. The preliminary paper contains only reasoning and numerical ability. This is the most consequential structural difference from IBPS PO and Clerk, and it cuts both ways: candidates with weak English are far better placed here, while candidates with weak reasoning face a hard ceiling, since reasoning makes up half the paper and there is no language section to compensate. English or Hindi appears only in the main examination, where you generally choose between them.',
      },
      {
        q: 'How is IBPS RRB general awareness different?',
        a: 'It carries a distinct rural and agricultural banking emphasis — NABARD and its role, priority sector lending, cooperative banking structures, financial inclusion schemes and rural credit — alongside the usual banking and current affairs content. Candidates preparing across several banking exams with mainstream material often find this the weakest part of their RRB mains score, because standard banking awareness guides do not cover it in the same depth.',
      },
      {
        q: 'Is the local language requirement important for IBPS RRB?',
        a: 'Yes, and more so than in the mainstream banking recruitments. Regional Rural Banks serve customers who largely transact in the regional language, so proficiency in the official language of the state you apply against is treated as a substantive requirement rather than a formality. Where you have not studied the language at school level, find out how proficiency is assessed before applying.',
      },
      {
        q: 'Is there an interview for IBPS RRB Office Assistant?',
        a: 'No. Office Assistant selection rests on the main examination marks alone, subject to the local language requirement. The officer scales — Scale I, II and III — do include an interview, with the final merit for those posts weighted between the main examination and the interview.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     RBI Grade B
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'rbi-grade-b',
    path: '/government-exams/banking/rbi-grade-b/',
    name: 'RBI Grade B',
    fullName: 'Reserve Bank of India — Officer in Grade B (Direct Recruitment)',
    authority: 'Reserve Bank of India',
    official: 'rbi.org.in',
    seoTitle: 'RBI Grade B 2026: Phase 1 & 2 Pattern, ESI, F&M Syllabus',
    metaDescription:
      'RBI Grade B exam guide — Phase 1 and Phase 2 pattern, Economic and Social Issues, Finance and Management syllabus, descriptive papers and interview.',
    lead: [
      'RBI Grade B is the direct recruitment of officers into the Reserve Bank of India, and it is a different kind of examination from the rest of banking recruitment. Where IBPS and SBI test aptitude and awareness, RBI tests two academic subjects at some depth — Economic and Social Issues, and Finance and Management — through papers that are substantially descriptive.',
      'Candidates who arrive from a banking-exam background are often surprised by this. Speed and calculation, which decide the other banking examinations, matter only in Phase 1. Phase 2 rewards reading, argument and written expression, and it is where the exam is actually decided.',
    ],
    quickFacts: [
      ['Conducted by', 'Reserve Bank of India'],
      ['Post', 'Officer in Grade B (Direct Recruitment) — General and specialist streams'],
      ['Level', 'Bachelor’s degree with a minimum percentage; specialist streams require relevant postgraduate qualifications'],
      ['Stages', 'Phase 1 (objective screening) → Phase 2 (subject papers, largely descriptive) → Interview'],
      ['What it really tests', 'Economics, finance and management at academic depth, expressed in writing'],
      ['Age band', 'Narrower than most banking exams — confirm in the advertisement'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Reserve Bank recruits Grade B officers directly into a role that spans monetary policy research, banking supervision and regulation, financial markets operations, currency management and internal administration. It is a policy institution rather than a commercial bank, and the examination is built to identify people who can read, analyse and write about economic and financial questions.',
      },
      {
        type: 'p',
        text: 'That intent explains the structure. Phase 1 is a conventional objective screen covering general awareness, English, quantitative aptitude and reasoning — useful only to reduce the field. Phase 2 consists of subject papers on Economic and Social Issues and on Finance and Management, alongside an English writing paper, and these are where a candidate’s actual suitability is assessed. The interview follows.',
      },
      {
        type: 'list',
        title: 'Why this exam rewards different preparation',
        items: [
          { text: 'It is substantially descriptive', note: 'Phase 2 papers require written answers, not option selection, which is a skill most banking-exam candidates have never practised.' },
          { text: 'It has genuine academic content', note: 'Economic and Social Issues and Finance and Management are subjects to be studied, not awareness topics to be revised.' },
          { text: 'Phase 1 is not where marks are made', note: 'clearing it comfortably is necessary and worth almost nothing beyond that.' },
          { text: 'General awareness carries unusual weight in Phase 1', note: 'a much larger share than in any IBPS or SBI paper.' },
        ],
      },
      {
        type: 'note',
        title: 'Streams and eligibility differ',
        text: 'Alongside the General stream, the Reserve Bank recruits Grade B officers for specialist streams such as Department of Economic and Policy Research and Department of Statistics and Information Management, which carry their own postgraduate qualification requirements and their own papers. Age limits are narrower than in most banking recruitment. Both are set out in the advertisement for each cycle.',
      },
    ],
    stages: [
      {
        name: 'Phase 1 — Preliminary Examination',
        mode: 'Objective, 120 minutes',
        detail:
          'General awareness, English language, quantitative aptitude and reasoning for 200 questions and 200 marks. General awareness carries by far the largest share. Screening only — the marks do not carry into the final merit.',
      },
      {
        name: 'Phase 2 — Paper I: Economic and Social Issues',
        mode: 'Objective and descriptive, 90 minutes',
        detail:
          'Growth and development, Indian economy, economic reforms, globalisation, social structure and issues, and social justice. Part objective and part descriptive, for 100 marks.',
      },
      {
        name: 'Phase 2 — Paper II: English (Writing Skills)',
        mode: 'Descriptive, 90 minutes',
        detail:
          'Precis, comprehension-based writing and an essay, for 100 marks. Assessed on clarity, structure and command of written expression rather than on literary flourish.',
      },
      {
        name: 'Phase 2 — Paper III: Finance and Management',
        mode: 'Objective and descriptive, 90 minutes',
        detail:
          'Financial system and markets, financial institutions and regulation, risk management, derivatives, corporate governance, and management theory including motivation, leadership, communication and ethics. For 100 marks.',
      },
      {
        name: 'Interview',
        mode: 'Personal interview',
        detail:
          'Conducted for candidates who clear Phase 2. The final merit combines Phase 2 marks with the interview; Phase 1 marks are excluded.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'RBI Grade B syllabus — Phase 1 sections plus the Economic and Social Issues, English writing and Finance and Management papers.',
        lead: [
          'Two academic subjects and a writing paper. Reading this syllabus as a list of topics to revise, rather than subjects to study, is the standard mistake.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Phase 1 — General Awareness',
                'Current affairs across the economy, banking, finance and general national and international developments; banking and financial awareness; government schemes; and static general knowledge. The largest section of Phase 1 by some margin, which makes a sustained current affairs habit the most efficient way to clear the screen.',
              ],
              [
                'Phase 1 — English, Quantitative Aptitude and Reasoning',
                'Standard competitive-exam content: comprehension, error spotting and vocabulary; arithmetic, data interpretation and number series; puzzles, arrangements, syllogism and analytical reasoning. Pitched at a level a prepared banking candidate will find familiar.',
              ],
              [
                'Paper I — Economic and Social Issues',
                'Growth and development, measurement of growth, income and wealth distribution, poverty alleviation and employment; the Indian economy since independence, planning, economic reforms and liberalisation, privatisation and globalisation; balance of payments, export-import policy and international economic institutions; inflation, monetary and fiscal policy; social structure in India, urbanisation and migration, gender issues, social justice and positive discrimination; education, health and human development. Read as economics, not as current affairs.',
              ],
              [
                'Paper II — English Writing Skills',
                'Precis writing, comprehension-based responses and essay writing. The assessment is of your ability to read a text accurately, compress it faithfully, and construct an argument in clear, correct, well-organised prose within a time limit.',
              ],
              [
                'Paper III — Finance and Management',
                'The financial system, its regulators and the role of the Reserve Bank; financial markets — money, capital, foreign exchange and government securities; financial institutions and instruments; risk management in the banking sector; derivatives, and basic accounting and financial statement concepts; corporate governance; alongside management theory covering the evolution of management thought, motivation, leadership, communication, organisational structure, corporate social responsibility and ethics.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The distinguishing feature of this syllabus is that it expects opinions to be supported. A descriptive answer on inflation targeting or on financial inclusion is assessed on whether you understand the mechanism and can argue about it, not on whether you can recall a definition. That is a reading and thinking task carried out over months, and it does not compress.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'RBI Grade B exam pattern — Phase 1 section weighting, the three Phase 2 papers and how the final merit is calculated.',
        lead: [
          'Phase 1 screens and is then discarded. Phase 2 and the interview are the whole of the merit list.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Phase 1 structure. Confirm marks, timing and negative marking against the current official advertisement.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Awareness', '80', '80', 'By far the largest section — the efficient place to secure the screen'],
              ['English Language', '30', '30', 'Standard competitive-exam level'],
              ['Quantitative Aptitude', '30', '30', 'Arithmetic and data interpretation'],
              ['Reasoning', '60', '60', 'Puzzles and analytical reasoning'],
              ['Total', '200', '200', '120 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'The Phase 1 weighting is worth noticing carefully. General awareness and reasoning together account for a hundred and forty of two hundred marks, while quantitative aptitude — the section banking candidates typically invest most in — carries only thirty. A candidate optimising for the wrong sections can fail a screen they should clear comfortably.',
          },
          {
            type: 'table',
            caption:
              'Phase 2 papers. Confirm the current composition of objective and descriptive components in the advertisement.',
            head: ['Paper', 'Content', 'Marks', 'Duration'],
            rows: [
              ['Paper I', 'Economic and Social Issues — part objective, part descriptive', '100', '90 minutes'],
              ['Paper II', 'English Writing Skills — fully descriptive', '100', '90 minutes'],
              ['Paper III', 'Finance and Management — part objective, part descriptive', '100', '90 minutes'],
            ],
          },
          {
            type: 'list',
            title: 'What follows from this structure',
            items: [
              { text: 'Handwriting and typing speed matter', note: 'descriptive papers under a ninety-minute limit reward candidates who have practised producing finished prose quickly.' },
              { text: 'Phase 1 marks are excluded from the merit', note: 'so there is no return on exceeding the screening threshold by a wide margin.' },
              { text: 'The interview carries real weight', note: 'combined with Phase 2 in the final merit.' },
              { text: 'Specialist streams have their own papers', note: 'DEPR and DSIM candidates sit different subject papers entirely.' },
            ],
          },
          {
            type: 'note',
            title: 'The pattern has been revised',
            text: 'The Reserve Bank has changed the balance between objective and descriptive components, the composition of Phase 2, and the mode of answering between cycles. The current advertisement is the only reliable source, and this is one exam where preparing to an outdated structure has real consequences.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'RBI Grade B previous year papers — what past ESI and Finance and Management questions reveal about the level of analysis expected.',
        lead: [
          'For a descriptive exam, past papers are less about topics and more about calibration: how deep an answer is expected, and how it should be constructed.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most useful thing a past RBI paper tells you is the register of the questions. They are not "what is inflation targeting" but questions asking you to assess, compare or evaluate — which means an answer must have a position, supporting reasoning and an acknowledgement of the counter-argument. Reading past questions makes that expectation concrete in a way no syllabus can.',
          },
          {
            type: 'steps',
            title: 'Using past papers for a descriptive exam',
            items: [
              { text: 'Write full answers to past questions under time.', note: 'Reading a question and thinking you could answer it is not the same as producing four hundred coherent words in fifteen minutes.' },
              { text: 'Build a structure you can reuse.', note: 'Context, mechanism, evidence, counter-argument, conclusion. Having a reliable shape frees attention for content.' },
              { text: 'Compare your answer against the source material afterwards.', note: 'Not to check facts alone, but to see what a fuller treatment would have included.' },
              { text: 'Practise precis writing separately and often.', note: 'It is the most trainable component of Paper II and the one candidates practise least.' },
            ],
          },
          {
            type: 'p',
            text: 'For Phase 1, past general awareness sections are worth mining for themes — the economic and banking emphasis is heavier than in general competitive exams, and the pattern of what the Reserve Bank considers current is visible across years.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Economy study material', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'RBI Grade B mock tests — Phase 1 objective practice, and why Phase 2 preparation needs written answers rather than mock scores.',
        lead: [
          'Mock tests serve Phase 1 well and Phase 2 hardly at all. For the papers that decide this exam, the equivalent of a mock is a written answer someone reads critically.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Take Phase 1 mocks in the RBI weighting rather than a generic banking format, because the section balance is unusual — eighty marks of general awareness and only thirty of quantitative aptitude. A candidate practising on IBPS-weighted mocks is training for a paper with quite different proportions.',
          },
          {
            type: 'list',
            title: 'For Phase 1',
            items: [
              { text: 'Practise at the RBI weighting', note: 'general awareness and reasoning dominate; quantitative aptitude is a minor section here.' },
              { text: 'Track general awareness accuracy above all', note: 'it is where the Phase 1 threshold is most efficiently cleared.' },
              { text: 'Do not over-invest', note: 'Phase 1 marks are discarded. Clear it, and put the remaining time into Phase 2.' },
            ],
          },
          {
            type: 'list',
            title: 'For Phase 2, instead of mocks',
            items: [
              { text: 'Write one full descriptive answer daily, timed.', note: 'Volume of writing practice is the closest equivalent to mock volume in an objective exam.' },
              { text: 'Write a precis every week.', note: 'Faithful compression is a distinct skill and improves measurably with practice.' },
              { text: 'Have your answers read by someone.', note: 'Self-assessment of prose is unreliable; another reader finds the unclear sentences you cannot see.' },
              { text: 'Practise in the answering mode the exam uses.', note: 'Typing and handwriting produce very different speeds, and the exam mode has changed between cycles.' },
            ],
          },
          {
            type: 'links',
            title: 'Practice',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'RBI Grade B preparation strategy — reading for Economic and Social Issues, building writing skill, and clearing Phase 1 efficiently.',
        lead: [
          'This is a reading-and-writing exam wearing a banking exam’s calendar. Plan it like a subject you are studying, not like a paper you are practising for.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The single most useful reframing for an RBI Grade B candidate is to stop thinking in terms of syllabus coverage and start thinking in terms of comprehension. You are not trying to have read about inflation targeting; you are trying to be able to explain it, argue about its limitations, and write that argument down in fifteen minutes. Those are different goals and they need different preparation.',
          },
          {
            type: 'steps',
            title: 'A plan for a descriptive exam',
            items: [
              { text: 'From day one — read economics seriously, daily.', note: 'A business newspaper, the Economic Survey, RBI publications and monetary policy statements. This is the core of the exam and it takes months.' },
              { text: 'From day one — general awareness for Phase 1.', note: 'Eighty of two hundred marks in the screen, and it overlaps with the reading you are already doing.' },
              { text: 'From month one — write one answer a day, timed.', note: 'Even before you feel ready. Writing badly and improving is the process; waiting until you know enough is how candidates arrive unpractised.' },
              { text: 'Months one to four — Finance and Management as a taught subject.', note: 'Financial markets, regulation, risk, and management theory. Study it, do not skim it.' },
              { text: 'From month two — weekly precis practice.', note: 'The most trainable part of Paper II.' },
              { text: 'Month four — Phase 1 mocks at the RBI weighting.', note: 'Enough to clear the screen comfortably, and no more.' },
              { text: 'Throughout — form views and be able to defend them.', note: 'This serves the descriptive papers and the interview equally.' },
            ],
          },
          {
            type: 'list',
            title: 'The characteristic mistakes',
            items: [
              { text: 'Preparing for Phase 1 as though it were the exam', note: 'its marks are discarded entirely.' },
              { text: 'Studying ESI and Finance as awareness topics', note: 'they are academic subjects, and the papers ask you to analyse rather than recall.' },
              { text: 'Never writing a full answer until the exam', note: 'the most common and most costly omission.' },
              { text: 'Over-weighting quantitative aptitude', note: 'thirty marks in Phase 1 and nothing thereafter.' },
              { text: 'Neglecting the interview', note: 'it carries real weight and rewards the same reading the papers do.' },
            ],
          },
          {
            type: 'p',
            text: 'A realistic timeline is eight to twelve months for a candidate without an economics or finance background, and rather less for one who has studied either at degree level. The binding constraint is reading and writing practice, both of which accumulate slowly and neither of which can be compressed into a final month.',
          },
        ],
      },
      'study-material': {
        description:
          'RBI Grade B study material — economy notes for Economic and Social Issues, plus current affairs and general awareness for Phase 1.',
        lead: [
          'The economy notes are the foundation for Paper I. Beyond them, this exam is prepared for through primary sources rather than through summaries.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'More than any other exam on this site, RBI Grade B rewards reading primary material — the Economic Survey, the Union Budget documents, Reserve Bank monetary policy statements and annual reports, and quality economic journalism. Notes are useful for structuring what you read and for revision; they are not a substitute for the reading itself, because the descriptive papers ask for understanding that summaries cannot supply.',
          },
          {
            type: 'links',
            title: 'Notes and daily material',
            items: [
              { label: 'Economy study material', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
          {
            type: 'list',
            title: 'A weekly rhythm',
            items: [
              'A business newspaper daily, read for argument rather than headlines.',
              'One full descriptive answer every day, written against a clock.',
              'One precis a week, compared against the source for faithfulness.',
              'One Finance and Management topic studied properly each week, with notes you make yourself.',
              'Monetary policy statements and major RBI publications read as they are released.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the RBI Grade B exam pattern?',
        a: 'Phase 1 is an objective screening paper of 200 questions and 200 marks in 120 minutes, covering general awareness, English, quantitative aptitude and reasoning, with general awareness carrying the largest share. Phase 2 consists of three 100-mark papers of 90 minutes each — Economic and Social Issues, English Writing Skills, and Finance and Management — with substantial descriptive components. An interview follows. The final merit combines Phase 2 and the interview; Phase 1 marks are excluded.',
      },
      {
        q: 'How is RBI Grade B different from other banking exams?',
        a: 'It is substantially a descriptive examination in two academic subjects rather than an aptitude test. Where IBPS and SBI reward calculation speed and pattern recognition, RBI Grade B rewards reading economics and finance seriously and being able to write a reasoned argument under time. Candidates coming from a banking-exam background often find that the skills that carried them through those papers matter only in Phase 1, which is discarded from the final merit.',
      },
      {
        q: 'Do Phase 1 marks count in the RBI Grade B final merit?',
        a: 'No. Phase 1 is purely a screening stage. The final merit is built from the Phase 2 papers and the interview. This means there is no benefit in exceeding the Phase 1 threshold by a wide margin, and time spent optimising Phase 1 beyond a comfortable clearance is time taken from the papers that actually decide the result.',
      },
      {
        q: 'What should I read for Economic and Social Issues?',
        a: 'Primary sources rather than summaries: the Economic Survey, Union Budget documents, Reserve Bank monetary policy statements and annual reports, and serious economic journalism, alongside a structured treatment of growth and development, the Indian economy since independence, reforms and liberalisation, inflation and monetary policy, and social issues including poverty, employment, education, health and social justice. The papers ask you to analyse rather than recall, which is why reading the underlying material matters more than revising notes on it.',
      },
      {
        q: 'How long does RBI Grade B preparation take?',
        a: 'Eight to twelve months for a candidate without an economics or finance background, and less for someone who studied either at degree level. The binding constraint is not syllabus coverage but the two slow-building skills the exam actually tests — sustained reading in economics and finance, and the ability to produce a structured written argument under time pressure. Neither compresses into a final month, which is why daily writing practice should start early rather than once you feel ready.',
      },
    ],
  },
]

export default banking
