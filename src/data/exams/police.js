/**
 * Police exams — /government-exams/police/
 *
 * This section sits at a category path rather than an exam path, because
 * "police recruitment" in India is not one examination — it is a few dozen
 * state processes plus a handful of central ones, sharing a common shape.
 *
 * The record here is keyed to /government-exams/police/ so the six resource
 * sub-pages under it carry real content about that shared shape: what a police
 * written paper asks, what physical and medical standards mean in practice,
 * and how to prepare for a process where the written test is rarely the
 * hardest part. The category landing page itself is rendered by Directory.
 */

const police = [
  {
    slug: 'police',
    path: '/government-exams/police/',
    name: 'Police Recruitment',
    fullName: 'Police recruitment examinations — central and state',
    authority: 'State police recruitment boards, and central bodies for CAPF and railway policing',
    official: 'Varies by state and force',
    seoTitle: 'Police Exams 2026: Constable & SI Pattern, PET/PST, Medical',
    metaDescription:
      'Police recruitment guide — constable and sub-inspector written patterns, physical efficiency and standard tests, medical standards and preparation.',
    lead: [
      'Police recruitment in India is not a single examination. Each state runs its own constable and sub-inspector processes through its police recruitment board, and central recruitment covers the armed police forces, the railway police and the Delhi Police. They differ in syllabus detail, language and standards — and they share a structure so consistent that preparing for one prepares you substantially for the others.',
      'That shared structure has a feature worth naming immediately: in almost every police recruitment, the written paper is the least selective stage. The physical efficiency test, the physical standard test and the detailed medical examination eliminate far more candidates, and they are the stages that cannot be prepared for in a final month.',
    ],
    quickFacts: [
      ['Conducted by', 'State police recruitment boards; SSC and RRB for certain central and railway forces'],
      ['Common posts', 'Constable and Sub-Inspector, with department-specific variants'],
      ['Typical stages', 'Written test → physical efficiency test → physical standard test → medical examination'],
      ['Written level', 'Class 10 or 12 for constable posts; a degree for most sub-inspector posts'],
      ['Where candidates are eliminated', 'Overwhelmingly at the physical and medical stages'],
      ['Language', 'State recruitments are usually conducted in the state language alongside English or Hindi'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Police recruitment covers a wide range of processes. Each state fills constable and sub-inspector vacancies through its own recruitment board, generally with a written examination in the state language, followed by physical and medical stages. Alongside those, several central recruitments feed uniformed forces: SSC conducts the General Duty Constable examination for the central armed police forces and the Central Police Organisation examination for Sub-Inspector posts, the Railway Recruitment Boards conduct recruitment for the Railway Protection Force, and the Union Public Service Commission conducts the Assistant Commandant examination.',
      },
      {
        type: 'p',
        text: 'The written papers differ in detail but converge on a common set of subjects: general knowledge and current affairs, reasoning, arithmetic, and a language section. State recruitments add state-specific content — the state’s history, geography, culture and administration — which is the component candidates preparing from national material most often miss.',
      },
      {
        type: 'list',
        title: 'The main routes into police service',
        items: [
          { text: 'State police constable', note: 'conducted by the state recruitment board, usually at class 10 or 12 level, in the state language.' },
          { text: 'State police sub-inspector', note: 'the supervisory rank, generally requiring a degree, with a more demanding written paper.' },
          { text: 'SSC GD Constable', note: 'central recruitment for General Duty Constable posts across BSF, CISF, CRPF, SSB, ITBP and Assam Rifles.' },
          { text: 'SSC CPO', note: 'Sub-Inspector in the Delhi Police and the central armed police forces, with a distinctive second English paper.' },
          { text: 'RPF Constable and Sub-Inspector', note: 'the Railway Protection Force, recruited through the Railway Recruitment Boards.' },
          { text: 'UPSC CAPF Assistant Commandant', note: 'direct officer entry into the central armed police forces, with a descriptive written paper.' },
        ],
      },
      {
        type: 'note',
        title: 'Check the medical standards before anything else',
        text: 'Vision and colour perception, hearing, dental condition, tattoo rules, flat feet, knock knees and varicose veins have all ended police candidacies after every other stage was cleared. Several are identifiable in advance and some are correctable given time. This is the single most valuable hour a prospective police candidate can spend, and it belongs at the start of preparation rather than the end.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, format varies by recruitment',
        detail:
          'Generally covering general knowledge and current affairs, reasoning, arithmetic and a language section, with state recruitments adding state-specific content. Negative marking applies in most, at rates that differ between recruitments.',
      },
      {
        name: 'Physical Efficiency Test',
        mode: 'Qualifying',
        detail:
          'Timed running over a prescribed distance, frequently with additional events such as long jump, high jump or shot put depending on the force and post. Standards differ by post, gender, category and often region.',
      },
      {
        name: 'Physical Standard Test',
        mode: 'Qualifying',
        detail:
          'Height for all candidates, and chest measurement with expansion for male candidates, against standards that vary by category and by region of origin, with relaxations for candidates from certain areas and communities.',
      },
      {
        name: 'Detailed Medical Examination',
        mode: 'Medical board',
        detail:
          'Vision including colour perception, hearing, dental condition, orthopaedic assessment, body marks and tattoos, and general fitness against the standards prescribed for the force. Historically the stage that removes the largest number of otherwise successful candidates.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'Police exam syllabus — the common subjects across constable and sub-inspector papers, plus the state-specific content that varies.',
        lead: [
          'Four subjects run through almost every police written paper. The fifth — state-specific content — is the one that differs, and the one national material will not cover.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Knowledge and Current Affairs',
                'Indian history with an emphasis on the freedom movement, geography of India and the world, Indian polity and the Constitution, economics, general science at approximately class 10 level, sports, awards, important days, and current events of national and international importance. Almost always the largest section in a police paper, and the most improvable.',
              ],
              [
                'General Intelligence and Reasoning',
                'Analogies, similarities and differences, series completion, coding and decoding, blood relations, direction sense, classification, arithmetical reasoning, syllogism, statement and conclusion, and non-verbal reasoning through figure classification, pattern completion, embedded figures and mirror images. Verbal and non-verbal in roughly equal measure.',
              ],
              [
                'Numerical Ability / Arithmetic',
                'Number systems, fundamental operations, decimals and fractions, LCM and HCF, percentage, ratio and proportion, average, profit and loss, discount, simple and compound interest, time and work, time and distance, mensuration, and interpretation of simple tables and graphs. Almost entirely arithmetic; advanced algebra and trigonometry rarely feature in constable papers, though sub-inspector papers may go further.',
              ],
              [
                'Language',
                'Comprehension, grammar, vocabulary, error spotting, sentence improvement and fill in the blanks, in English, Hindi or the state language depending on the recruitment. State recruitments frequently test the state language specifically.',
              ],
              [
                'State-specific content',
                'For state police recruitments: the state’s history, geography, rivers and districts, culture and festivals, prominent figures, administrative structure, and recent state-level developments. Entirely absent from national competitive material, and often a substantial block of marks.',
              ],
              [
                'Law and constitution (sub-inspector papers)',
                'Some sub-inspector recruitments add basic legal awareness — fundamental rights and duties, elements of criminal law and procedure, and the constitutional framework of policing. Check whether your recruitment includes it.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The consistent pattern across police papers is that general knowledge carries the largest share and arithmetic the smallest. Candidates arriving from SSC or banking preparation, where quantitative aptitude dominates, routinely mis-weight their study — and general knowledge is precisely the section that most rewards steady daily effort.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'Police exam pattern — the common written structure, and what the physical efficiency, standard and medical stages actually require.',
        lead: [
          'A written paper that most prepared candidates clear, then three stages that most do not. Plan accordingly.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The typical shape of a police written paper. Question counts, marks, duration and negative marking vary by recruitment — confirm in the notification for yours.',
            head: ['Section', 'Typical weight', 'Character'],
            rows: [
              ['General Knowledge and Current Affairs', 'The largest section', 'Recall-based and highly improvable'],
              ['General Intelligence and Reasoning', 'Substantial', 'Verbal and non-verbal; a speed skill'],
              ['Numerical Ability', 'Moderate', 'School-level arithmetic'],
              ['Language', 'Moderate', 'English, Hindi or the state language'],
              ['State-specific content', 'Varies', 'Present in state recruitments; absent from central ones'],
            ],
          },
          {
            type: 'p',
            text: 'The written stage is designed to be widely clearable, which is appropriate for recruitments filling thousands of posts from very large fields. What separates candidates is what follows, and the ratio is stark: a well-prepared candidate has a good chance in the written paper and a poor one at the physical test if they started training late.',
          },
          {
            type: 'list',
            title: 'The physical efficiency test, in general terms',
            items: [
              { text: 'Running', note: 'a prescribed distance within a prescribed time, universally required. Distances and timings differ by post, gender, category and often region.' },
              { text: 'Jumping and throwing events', note: 'long jump, high jump and shot put appear in many sub-inspector and some constable recruitments.' },
              { text: 'Strength events', note: 'some forces include pull-ups or similar.' },
              { text: 'Status', note: 'qualifying — no marks are added to the merit, but failure ends the attempt.' },
            ],
          },
          {
            type: 'list',
            title: 'The physical standard test and medical',
            items: [
              { text: 'Height and chest', note: 'measured against standards varying by category and region, with relaxations for candidates from certain areas and communities.' },
              { text: 'Vision and colour perception', note: 'assessed against force-specific standards; colour vision deficiency is disqualifying for many posts.' },
              { text: 'Orthopaedic conditions', note: 'flat feet, knock knees and bow legs are commonly disqualifying.' },
              { text: 'Body marks and tattoos', note: 'subject to rules on location, size and content that differ between forces.' },
            ],
          },
          {
            type: 'note',
            title: 'Standards are specific — read the ones that apply to you',
            text: 'Every figure above varies by force, post, gender, category and region. A candidate training to a distance or a height standard read in a general guide may be training to the wrong number. The notification for your specific recruitment is the only reliable source.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'Police previous year papers — building the state-specific knowledge base and calibrating the written level for your recruitment.',
        lead: [
          'For state recruitments, past papers are the only systematic source for the state-specific content that decides a large block of marks.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'National study material covers Indian history, geography and polity. It does not cover your state’s districts, rivers, dynasties, festivals, prominent figures or administrative structure — and state police papers ask about all of these. Working through several years of your own state’s past papers, and extracting that content into a revision sheet, is preparation you cannot get any other way.',
          },
          {
            type: 'steps',
            title: 'How to work police past papers',
            items: [
              { text: 'Use your own recruitment’s papers first.', note: 'A Maharashtra constable paper tells a Bihar candidate relatively little about state content.' },
              { text: 'Extract state-specific questions into a single sheet.', note: 'Districts, rivers, historical figures, festivals, schemes, administrative structure. Revise it weekly.' },
              { text: 'Sort general knowledge by theme across years.', note: 'The national themes recur reliably, exactly as in other competitive papers.' },
              { text: 'Solve arithmetic on paper, without a calculator.', note: 'The level is school arithmetic; the marks are lost to slips rather than difficulty.' },
              { text: 'Practise the reasoning figures by annotating them.', note: 'Non-verbal reasoning is faster when you can mark the diagram.' },
            ],
          },
          {
            type: 'links',
            title: 'Specific police recruitments',
            items: [
              { label: 'SSC GD Constable guide', to: '/government-exams/ssc/ssc-gd/' },
              { label: 'SSC CPO Sub-Inspector guide', to: '/government-exams/ssc/ssc-cpo/' },
              { label: 'RPF exam guide', to: '/government-exams/railways/rpf/' },
              { label: 'UPSC CAPF guide', to: '/government-exams/upsc/capf/' },
              { label: 'State government exams', to: '/government-exams/state/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Police exam mock tests — written practice in the right proportions, alongside a structured physical training log.',
        lead: [
          'Take mocks weighted the way police papers are weighted, and keep a training log next to your score sheet.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A generic competitive-exam mock gives you roughly a quarter of its questions in general knowledge. Police papers commonly give you far more, and correspondingly less arithmetic. Practising in the wrong proportions trains the wrong pacing and, more importantly, points your study in the wrong direction.',
          },
          {
            type: 'list',
            title: 'What your written analysis should show',
            items: [
              { text: 'General knowledge accuracy', note: 'the largest section and the most improvable. Track it separately from everything else.' },
              { text: 'State content accuracy', note: 'if your recruitment includes it, track it as its own line.' },
              { text: 'Errors from guessing', note: 'most police papers apply a deduction; count what your guesses net out to.' },
              { text: 'Reasoning speed', note: 'a section where practice volume converts almost directly into marks.' },
            ],
          },
          {
            type: 'list',
            title: 'What your training log should show',
            items: [
              { text: 'Running distance and time, weekly', note: 'progressing towards the prescribed standard with margin rather than exactly.' },
              { text: 'Event practice', note: 'long jump, high jump or shot put where your recruitment requires them.' },
              { text: 'Consistency', note: 'gaps in training cost more than low intensity does.' },
              { text: 'Injury management', note: 'building too fast is the commonest reason candidates lose training months.' },
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
          'Police exam preparation — a parallel written and physical plan, with early medical checking and state-specific study.',
        lead: [
          'Three things from week one: read the medical standards, start running, and begin general knowledge. Everything else can follow.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The structure of police recruitment makes the preparation priorities unusually clear. The medical standards can eliminate you regardless of everything else, and checking them costs an hour. Physical fitness takes months and cannot be compressed. General knowledge is the largest written section and the most responsive to daily effort. Those three, started immediately, account for most of what determines the outcome.',
          },
          {
            type: 'steps',
            title: 'A three to four month parallel plan',
            items: [
              { text: 'Week one — read the medical and physical standards for your recruitment.', note: 'Vision, colour perception, height, chest, tattoos, orthopaedic conditions. Find out now what would disqualify you.' },
              { text: 'Week one — start running, at whatever distance you can manage.', note: 'Build gradually towards the prescribed standard with margin. Progressing too fast causes injuries that cost months.' },
              { text: 'From day one — general knowledge, forty minutes daily.', note: 'The largest written section. One static source, one current affairs source, revisited rather than accumulated.' },
              { text: 'From week two — state-specific content, if applicable.', note: 'Built from your state’s past papers and state board textbooks into a revision sheet.' },
              { text: 'Months one and two — arithmetic to fluency.', note: 'School-level, on paper, without a calculator, timed.' },
              { text: 'Months one to three — reasoning practice, daily.', note: 'Both verbal and non-verbal; the section where practice volume pays most directly.' },
              { text: 'Month two onwards — the language section.', note: 'English, Hindi or the state language, whichever your paper uses.' },
              { text: 'Month three — full timed mocks in the correct proportions.', note: 'While maintaining, never pausing, the physical training.' },
            ],
          },
          {
            type: 'list',
            title: 'How police candidacies are actually lost',
            items: [
              { text: 'At the medical', note: 'for conditions that could have been identified in week one.' },
              { text: 'At the physical test', note: 'having trained for weeks rather than months, or having stopped training during written preparation.' },
              { text: 'To state-specific questions', note: 'prepared entirely from national material.' },
              { text: 'To mis-weighted study', note: 'quantitative aptitude prioritised over general knowledge, which carries far more marks in these papers.' },
              { text: 'To training injuries', note: 'caused by building distance too quickly after starting late.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'Police exam study material — general knowledge, reasoning, arithmetic and language notes, with guidance on state-specific content.',
        lead: [
          'General knowledge first, because it carries the most marks. State-specific content built from your own state’s sources.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For police papers, the general knowledge, polity, geography and science notes carry more marks between them than anything else, and they are the ones to work most systematically. Class 10 science in particular is finite and reliably examined, which makes it some of the most predictable material available in these papers.',
          },
          {
            type: 'links',
            title: 'Subject notes for police exams',
            items: [
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'History notes', to: '/study-material/history/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'Building the state-specific layer',
            items: [
              'Use your state board’s textbooks for state history, geography and culture.',
              'Extract state questions from past papers of your own recruitment into a single revision sheet.',
              'Learn the state’s districts, rivers, major festivals and administrative structure — these recur.',
              'Follow state-level news alongside national current affairs.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the general pattern of police recruitment exams?',
        a: 'Almost all follow the same four-stage shape: an objective written examination, a physical efficiency test, a physical standard test, and a detailed medical examination. The written paper typically covers general knowledge and current affairs, reasoning, arithmetic and a language section, with state recruitments adding state-specific content. Question counts, marks, timings and negative marking vary between recruitments, so the notification for the one you are sitting is the reliable source.',
      },
      {
        q: 'Which stage eliminates the most police candidates?',
        a: 'The medical examination, followed by the physical efficiency test. The written paper is designed to be widely clearable, since these recruitments fill large numbers of posts from very large fields. The physical stages require months of consistent training to pass with margin, and the medical assesses vision and colour perception, hearing, dental condition, orthopaedic conditions such as flat feet and knock knees, and rules on body marks and tattoos — several of which are identifiable in advance and some correctable given time.',
      },
      {
        q: 'How do state police exams differ from central ones?',
        a: 'Mainly in language and content. State recruitments are usually conducted in the state language and include a substantial block of state-specific material — the state’s history, geography, districts, culture, prominent figures and administrative structure — which national competitive material does not cover at all. Central recruitments such as SSC GD, SSC CPO and RPF cover national content only. Physical and medical standards also differ between forces and often by region.',
      },
      {
        q: 'Which subject carries the most marks in police exams?',
        a: 'General knowledge and current affairs, in almost every police paper, usually by a clear margin over reasoning, arithmetic and language. This inverts the usual competitive-exam priority, and candidates arriving from SSC or banking preparation — where quantitative aptitude dominates — routinely mis-weight their study. General knowledge is also the most improvable section, since it responds directly to steady daily revision rather than to a skill that builds slowly.',
      },
      {
        q: 'When should I start physical training for a police exam?',
        a: 'In the first week of preparation, before you have studied anything. Running and event standards take months to reach with margin, the physical test follows the written result closely, and building distance too quickly after starting late is the commonest cause of training injuries that cost a whole cycle. The training should also continue without pause through the written preparation rather than being suspended and restarted.',
      },
    ],
  },
]

export default police
