/**
 * Telangana state exams — /government-exams/state/telangana/:exam/
 *
 * The state hub at /government-exams/state/telangana/ lists the recruitment
 * routes the state runs. Each of those cards becomes a link only when a record
 * exists here, so this file is what turns a card into a page.
 *
 * Two things shape everything below, and both are specific to Telangana:
 *
 *   The Telangana movement and the formation of the state are examined in
 *   their own right. No national general-studies book covers them, they carry
 *   real weight at every group level, and they are the single largest reason a
 *   candidate who prepared for a neighbouring state PSC does badly here.
 *
 *   TGPSC is the commission that was TSPSC. The name changed with the state
 *   style in 2024; the syllabus, the paper structure and the archive of
 *   previous papers did not. Papers labelled TSPSC are current material.
 *
 * Volatile figures — vacancy counts, cutoffs, dates, fees and age relaxations —
 * are deliberately absent. Every pattern page carries a note pointing at the
 * notification, which is the only document that binds the commission.
 */

const OFFICIAL = 'websitenew.tgpsc.gov.in'

/** Recurs at the foot of every pattern page in this file. */
const CONFIRM_NOTE = {
  type: 'note',
  title: 'Confirm the structure against your own notification',
  text: 'TGPSC revises paper structure, marks, syllabus detail and eligibility between recruitment cycles, and has done so more than once in recent years. Everything here describes the shape the recruitment has held; the notification for the cycle you are sitting is the document that decides it. Read it end to end before you plan around any figure.',
}

const telangana = [
  /* ── TGPSC Group 1 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-1',
    path: '/government-exams/state/telangana/tgpsc-group-1/',
    name: 'TGPSC Group 1',
    fullName: 'Telangana Government Public Service Commission Group 1 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 1 2026: Syllabus, Mains Pattern & Mock Tests',
    metaDescription:
      'TGPSC Group 1 guide — prelims and descriptive mains structure, the Telangana Movement paper, posts on offer, answer writing and a preparation plan.',
    lead: [
      'TGPSC Group 1 is the senior recruitment in Telangana: Deputy Collector, Deputy Superintendent of Police, Commercial Tax Officer, Regional Transport Officer, District Panchayat Officer and the other state-cadre posts that run a district between them. It is the state equivalent of the civil services examination, and it is built the same way — a screening paper, a long descriptive mains, and an interview.',
      'The part that surprises candidates arriving from national preparation is the writing. Group 1 is decided in the mains, the mains is written by hand under time pressure across several papers, and one of those papers is about the Telangana movement and the formation of the state — a subject no national book covers at the depth the paper asks for.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree from a recognised university'],
      ['Stages', 'Prelims (screening) → descriptive Mains → interview'],
      ['Prelims role', 'Screening only — the marks do not carry into the merit list'],
      ['Distinctive paper', 'Telangana Movement and State Formation, examined as a subject of its own'],
      ['Medium', 'English or Telugu, chosen at application'],
      ['Typical posts', 'Deputy Collector, DSP, Commercial Tax Officer, RTO, MPDO, District Registrar'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 1 fills the posts a state government recruits directly into its senior executive cadre. A successful candidate is likely to spend early service as a Deputy Collector or a Deputy Superintendent of Police, and the recruitment is designed around that: a wide screening test to reduce a very large field, a descriptive mains that tests whether a candidate can construct an argument in writing, and an interview that assesses judgement.',
      },
      {
        type: 'p',
        text: 'The examination has three properties worth understanding before committing to it. It is long — the gap between notification and final result has historically run well over a year. It is written, in the literal sense, so handwriting speed and legibility are part of the score. And it is state-specific to a degree national material does not prepare you for: Telangana history, culture, geography, economy and the statehood movement run through every mains paper.',
      },
      {
        type: 'list',
        title: 'What separates Group 1 from Group 2',
        items: [
          { text: 'The mains is descriptive', note: 'answers are written in prose, by hand, against the clock. Group 2 is objective throughout, and the two demand different preparation even where the syllabus overlaps.' },
          { text: 'There is an interview', note: 'a personality test carrying marks that count. Group 2 has none, so its result rests entirely on the written papers.' },
          { text: 'The posts carry executive authority', note: 'district administration and policing, rather than the supervisory and ministerial posts most Group 2 appointments lead to.' },
          { text: 'The field is smaller but stronger', note: 'Group 1 attracts candidates also preparing for the civil services, which raises the standard of the written answers you are ranked against.' },
        ],
      },
      {
        type: 'note',
        title: 'Prelims marks do not survive the stage',
        text: 'The preliminary paper decides who writes the mains and nothing else — it is not added to the final total. Candidates routinely over-invest in prelims-style objective practice and arrive at the mains having never written a timed answer. Prepare for the mains from the first month, and treat the prelims as a filter you must pass rather than a paper you must top.',
      },
    ],
    stages: [
      {
        name: 'Preliminary examination',
        mode: 'Objective, screening only',
        detail:
          'A general studies and mental ability paper covering current affairs, history, polity, economy, geography, science and technology, reasoning and Telangana-specific content. It decides who is called to the mains in a ratio fixed by the commission, and the marks are not carried forward.',
      },
      {
        name: 'Main examination',
        mode: 'Descriptive, written by hand',
        detail:
          'A qualifying language paper alongside marked papers covering general essay, history and culture, society and governance, economy and development, science and technology with data interpretation, and the Telangana movement and state formation. These marks build the merit list.',
      },
      {
        name: 'Interview',
        mode: 'Personality test',
        detail:
          'A board interview carrying marks that are added to the mains total. It examines awareness, reasoning and temperament rather than recall, and draws heavily on the candidate’s own background, district and graduation subject.',
      },
      {
        name: 'Verification and appointment',
        mode: 'Documents and medical',
        detail:
          'Certificate verification against the eligibility claimed at application, medical fitness where the post requires it, and allotment of service by merit and preference.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 1 syllabus — the prelims general studies paper and every mains paper, including Telangana Movement and State Formation.',
        lead: [
          'The syllabus reads as a general studies list with a Telangana layer running through it. That layer is not decoration: it is where the marks that separate candidates sit.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Prelims — General Studies and Mental Ability',
                'Current affairs of regional, national and international significance; general science and everyday science, with developments in science and technology; environmental issues and disaster management; world geography, Indian geography and the geography of Telangana; Indian history and the national movement; Indian society, the Constitution, polity and governance; the Indian economy and development; the Telangana movement and state formation; logical reasoning, analytical ability and data interpretation.',
              ],
              [
                'Mains — General Essay',
                'Essays on themes drawn from public affairs, social questions, economic policy and Telangana-specific topics. Marked on structure, evidence and balance rather than on length. This paper rewards a candidate who has practised planning an essay in five minutes and then holding to that plan.',
              ],
              [
                'Mains — History, Culture and Geography',
                'Indian history and culture with weight on the modern period and the national movement; the history and cultural heritage of Telangana; and the physical, economic and social geography of India and of the state. Telangana’s dynasties, monuments, literature, crafts, festivals and language politics are examined at a level of detail general Indian-history material does not reach.',
              ],
              [
                'Mains — Indian Society, Constitution and Governance',
                'The structure of Indian society, social issues and welfare policy; the Constitution, its features, the distribution of powers and the constitutional bodies; governance, public administration, accountability and rights issues; and the equivalent questions as they arise in Telangana.',
              ],
              [
                'Mains — Economy and Development',
                'The Indian economy, planning and public finance, agriculture and industry, and the economy of Telangana specifically — its resources, irrigation, power, agriculture, industrial policy and the state’s own development programmes.',
              ],
              [
                'Mains — Science, Technology and Data Interpretation',
                'The role of science and technology in development, applications in agriculture, health, energy, environment and communication, current developments, and a data interpretation and problem-solving component that is closer to arithmetic reasoning than to a science paper.',
              ],
              [
                'Mains — Telangana Movement and State Formation',
                'The whole arc: Hyderabad state under the Nizam and the Telangana armed struggle, the 1956 merger and the Gentlemen’s Agreement, the 1969 agitation, the Six-Point Formula and its working, the revival of the movement from the 1990s, the political and cultural mobilisation of the 2000s, and the formation of the state in 2014. Examined as a subject with its own periodisation, actors, documents and disputes.',
              ],
              [
                'Mains — Qualifying language paper',
                'A qualifying paper in the language prescribed by the notification, testing comprehension, précis, translation and composition. It carries no merit marks, and it does end candidacies — because it is the paper candidates prepare for last.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Two syllabus lines deserve to be read as instructions rather than as topics. "Telangana movement and state formation" means a full paper of narrative history with dates, agreements and named figures. "Data interpretation and problem solving" means arithmetic under time pressure inside a science paper, which is where science graduates often lose marks they assumed were safe.',
          },
          {
            type: 'links',
            title: 'Where to build each layer',
            items: [
              { label: 'Telangana government exams hub', to: '/government-exams/state/telangana/' },
              { label: 'Subject-wise study material', to: '/study-material/' },
              { label: 'Current affairs preparation', to: '/current-affairs/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 1 exam pattern — how the prelims screens, how the descriptive mains papers are marked, and where the interview fits.',
        lead: [
          'Three stages, and only two of them count. Knowing which is which changes how a year of preparation is spent.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The shape Group 1 has held across recent cycles. Paper count, marks and duration are set by the notification for your cycle — confirm every figure there.',
            head: ['Stage', 'Format', 'Counts towards merit', 'What it decides'],
            rows: [
              ['Prelims', 'Objective general studies and mental ability', 'No', 'Who is called to the mains, in a ratio the commission fixes'],
              ['Mains — language paper', 'Descriptive, qualifying', 'No', 'Whether the rest of your mains is evaluated at all'],
              ['Mains — marked papers', 'Descriptive, written by hand', 'Yes', 'Almost the whole of your rank'],
              ['Interview', 'Board personality test', 'Yes', 'Movement within a band, and service allotment at the margin'],
            ],
          },
          {
            type: 'p',
            text: 'The consequence of that table is a planning rule. The mains is worth several times the interview and the prelims is worth nothing at all, so preparation time should go to writing practice long before the prelims result arrives. Candidates who begin mains preparation after clearing the prelims are preparing for a descriptive examination in the weeks when they should be revising for it.',
          },
          {
            type: 'steps',
            title: 'What the descriptive format actually demands',
            items: [
              { title: 'Handwriting speed, sustained for three hours', text: 'A mains paper asks for more writing than most graduates have done in years. This is trainable, and it takes months.' },
              { title: 'Answers built to a structure', text: 'A brief introduction, a body organised in labelled parts, and a conclusion that answers the question asked. Markers reward visible structure because it makes the argument checkable.' },
              { title: 'Evidence that is specific', text: 'A named committee, a year, a scheme, a figure from the state’s own economic publications. Specificity is what separates a scoring answer from a fluent one.' },
              { title: 'Discipline about the word limit', text: 'Overwriting one answer costs the marks of the answer you then leave unattempted. Timed practice is the only way to internalise the limit.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 1 previous papers — what to read from them, and why papers labelled TSPSC are still the right material.',
        lead: [
          'The paper archive is the most honest description of this examination that exists. It is also the only place the Telangana movement paper has been defined in practice rather than in syllabus lines.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Papers issued under the TSPSC name are the same examination. The commission was renamed with the state style in 2024, and the syllabus, structure and standard carried across unchanged. Discarding the older archive because of the label removes most of the available evidence about how this paper behaves.',
          },
          {
            type: 'list',
            title: 'What to extract, in order',
            items: [
              { text: 'The Telangana share of the prelims paper', note: 'count the questions across several years that could not have been answered from national material. That count is your minimum state-specific study target.' },
              { text: 'The framing of the mains questions', note: 'note whether a question asks you to describe, examine, critically examine or discuss. The verb sets the structure of a scoring answer, and it recurs.' },
              { text: 'The recurring anchors of the movement paper', note: 'the Gentlemen’s Agreement, the Six-Point Formula, the 1969 agitation, the revival from 2001 onwards. They come back in different framings, so learn them as an argument you can rebuild rather than as dates.' },
              { text: 'The data interpretation questions inside the science paper', note: 'a predictable, learnable block of marks that arts graduates often concede without trying.' },
              { text: 'Where the essay topics came from', note: 'state policy, social questions and national debates, in roughly stable proportions.' },
            ],
          },
          {
            type: 'p',
            text: 'Work the mains papers by writing full answers to time rather than by reading model answers. Reading a good answer teaches you what one looks like; writing a bad one under a clock teaches you what your own pace is, which is the thing the examination actually tests.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 1 mock tests — how to use objective mocks for the prelims and written answer practice for the mains.',
        lead: [
          'A Group 1 mock has to do two different jobs, because the examination has two different formats. Treating both as the same exercise is why mock scores and mains results diverge.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the prelims, a mock is a measurement instrument: sit it to time, score it honestly, and read the result as a list of topics rather than as a mark. For the mains, a mock is a writing session — a full paper answered by hand in the allotted time, which is uncomfortable enough that most candidates avoid doing it often enough.',
          },
          {
            type: 'steps',
            title: 'A mock routine that covers both formats',
            items: [
              { title: 'One full prelims mock a week, from six months out', text: 'Full length, single sitting, no pauses. The score matters less than the pattern of what you left blank.' },
              { title: 'One handwritten mains answer a day, from the start', text: 'A single question, twenty minutes, written by hand. Daily practice at this scale builds speed faster than occasional full papers do.' },
              { title: 'One full mains paper a fortnight, once the prelims is behind you', text: 'Three hours, by hand, in one sitting. This is the rehearsal that decides whether you finish the real paper.' },
              { title: 'A movement-paper mock of its own', text: 'It is the paper with the least available practice material, and the one where a well-prepared candidate gains most.' },
            ],
          },
          {
            type: 'note',
            title: 'Score the writing, not just the content',
            text: 'When you review a handwritten answer, mark three things separately: whether it answered the question asked, whether its structure is visible at a glance, and whether it finished inside the time. Content gaps are the easiest of the three to fix and the least likely to be what is costing you marks.',
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
          'TGPSC Group 1 preparation — a realistic plan across prelims, mains and interview, with the Telangana layer built in from the start.',
        lead: [
          'A Group 1 attempt is a year-long project with a descriptive examination at the end of it. The plan below is built backwards from that paper rather than forwards from the prelims.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A twelve-month plan',
            items: [
              { title: 'Months one to three — the state layer, deliberately', text: 'Telangana history, geography, economy and the statehood movement, studied as subjects rather than as topics inside general studies. This is the material with the least competition and the longest learning curve.' },
              { title: 'Months one to twelve — one written answer a day', text: 'Begun on day one, not after the prelims. Twenty minutes, by hand, on a question from a past paper. Nothing else builds mains speed.' },
              { title: 'Months three to six — the general studies spine', text: 'Polity, modern history, economy, geography and science, at the depth the mains asks rather than the depth the prelims asks.' },
              { title: 'Months six to eight — prelims sharpening', text: 'Objective practice, current-affairs consolidation and full-length mocks, on top of a base that is already at mains depth.' },
              { title: 'After the prelims — full mains papers', text: 'Complete papers to time, fortnightly, with the movement paper and the essay given slots of their own.' },
              { title: 'After the mains — the interview', text: 'Your own district, your graduation subject, your work history and the state’s current administrative debates. The board reads your form; you should be able to defend every line of it.' },
            ],
          },
          {
            type: 'p',
            text: 'Two habits do most of the work across that year. A daily current-affairs note kept in your own words, running to a page, covering national and Telangana developments together. And a single revision file for the movement paper, built from past questions rather than from a book, which by the end should be short enough to read in an evening.',
          },
          {
            type: 'note',
            title: 'Choose the medium early and commit',
            text: 'The mains is written in English or Telugu, chosen at application. Switching late is expensive, because terminology, reading material and answer templates all follow the choice. Decide in the first month on the basis of which language you write faster and more precisely under pressure, not which you think reads better.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 1 study material — what to read for the general studies spine, and how to assemble the Telangana layer.',
        lead: [
          'The reading list divides cleanly. The national layer is well served by standard material; the state layer has to be assembled, and assembling it is most of the advantage available in this exam.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'The national layer',
            items: [
              { text: 'Polity and the Constitution', note: 'one standard reference, read twice, with the constitutional bodies and centre-state provisions known well enough to write about without notes.' },
              { text: 'Modern Indian history and the national movement', note: 'a single narrative source rather than several, so the chronology holds together when you write it out.' },
              { text: 'Economy', note: 'the concepts, plus the current Economic Survey and Budget read for direction rather than memorised for figures.' },
              { text: 'Geography and environment', note: 'physical geography from a school-level text upwards, then Indian geography with resources and agriculture.' },
              { text: 'Science and technology', note: 'current applications and developments rather than textbook science, plus arithmetic practice for the data interpretation component.' },
            ],
          },
          {
            type: 'list',
            title: 'The Telangana layer',
            items: [
              { text: 'State board textbooks', note: 'the most reliable single source for Telangana history, geography and civics, written at close to the level the paper asks.' },
              { text: 'The state’s own statistical and economic publications', note: 'the socio-economic outlook and departmental reports, for figures you can cite in a mains answer.' },
              { text: 'A movement chronology built by you', note: 'from past papers and a standard account, kept to a few pages, revised weekly.' },
              { text: 'A state current-affairs source', note: 'a Telangana newspaper or the state’s own releases, read alongside national current affairs rather than instead of them.' },
            ],
          },
          {
            type: 'note',
            title: 'Verify anything you plan to quote',
            text: 'Mains answers gain marks for specific schemes, committees and figures, and lose credibility when those are wrong. Take numbers from the state’s published documents rather than from coaching compilations, and check that a scheme you cite is still running before you build an answer around it.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 1 exam pattern?',
        a: 'TGPSC Group 1 runs in three stages. The preliminary examination is an objective general studies and mental ability paper used only to screen candidates for the mains — its marks do not count towards the final merit. The main examination is descriptive and written by hand, with a qualifying language paper alongside marked papers covering general essay, history and culture, society and governance, economy and development, science and technology with data interpretation, and the Telangana movement and state formation. An interview follows, and the mains and interview marks together decide the merit list. Confirm the paper count, marks and duration in the notification for your cycle.',
      },
      {
        q: 'Is TSPSC Group 1 the same as TGPSC Group 1?',
        a: 'Yes. The commission was renamed from TSPSC to TGPSC in 2024 when the state style changed, and the examination carried across unchanged. Previous papers, syllabus documents and study material published under the TSPSC name remain current and are the right material to prepare from.',
      },
      {
        q: 'Which posts are filled through TGPSC Group 1?',
        a: 'Group 1 fills senior state-cadre posts including Deputy Collector, Deputy Superintendent of Police, Commercial Tax Officer, Regional Transport Officer, District Panchayat Officer, Mandal Parishad Development Officer and District Registrar, among others. The exact post list and the number of vacancies in each are set by the notification for that recruitment.',
      },
      {
        q: 'How important is the Telangana Movement paper in Group 1?',
        a: 'It is examined as a subject in its own right in the mains, and it also appears in the prelims. Because no national general-studies material covers it at the depth the paper asks, it is simultaneously the section where an unprepared candidate loses most and the section where a prepared one gains most. Treat it as a full subject from the first month rather than as a topic to be covered later.',
      },
      {
        q: 'Can I write TGPSC Group 1 in Telugu?',
        a: 'The mains may be written in English or Telugu, with the medium chosen at the time of application. Choose on the basis of which language you can write quickly and precisely under time pressure, because switching later means rebuilding your terminology, reading material and answer structures.',
      },
      {
        q: 'How long does the whole TGPSC Group 1 process take?',
        a: 'Historically the gap between notification and final result has run well over a year, with substantial intervals between the prelims, the mains and the interview. Plan preparation as a long project and use those gaps deliberately — the interval after the prelims is when mains writing practice pays, and the interval after the mains is when interview preparation belongs.',
      },
    ],
  },
  /* ── TGPSC Group 2 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-2',
    path: '/government-exams/state/telangana/tgpsc-group-2/',
    name: 'TGPSC Group 2',
    fullName: 'Telangana Government Public Service Commission Group 2 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 2 2026: Syllabus, Four-Paper Pattern & Mocks',
    metaDescription:
      'TGPSC Group 2 guide — the four objective papers, the Telangana Movement paper, the posts filled, previous papers and a preparation plan.',
    lead: [
      'TGPSC Group 2 is the most-attempted recruitment in Telangana. It fills degree-level executive and supervisory posts — Assistant Commercial Tax Officer, Sub-Registrar, Excise Sub-Inspector, Assistant Section Officer in the secretariat, Municipal Commissioner Grade III and others — through a written examination alone.',
      'That last point is what defines preparation for it. There is no interview and no descriptive paper: everything rests on objective papers written in a single window, and one of those papers is devoted to the Telangana movement and state formation. A candidate who is strong at general studies and weak on the state paper does not have a stage left in which to recover.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree from a recognised university'],
      ['Format', 'Objective papers across a fixed set of subjects; no interview'],
      ['Papers', 'Four, in the structure the commission has used in recent cycles'],
      ['Distinctive paper', 'A full paper on the Telangana movement and state formation'],
      ['Selection', 'Written marks, then certificate verification'],
      ['Typical posts', 'ACTO, Sub-Registrar, Excise SI, Assistant Section Officer, Municipal Commissioner Grade III'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 2 sits between the executive posts of Group 1 and the ministerial posts of Group 4. The appointments it makes are supervisory: a Sub-Registrar running a registration office, an Assistant Commercial Tax Officer assessing tax, an Assistant Section Officer handling files in the secretariat. They are stable, well-regarded posts, and the field competing for them is very large.',
      },
      {
        type: 'p',
        text: 'The recruitment has been built as four objective papers in recent cycles: a general studies and general abilities paper, a paper on history, polity and society, a paper on economy and development, and a paper on the Telangana movement and state formation. Each is answered in a fixed window on the examination day, and the total across the papers decides the merit list.',
      },
      {
        type: 'list',
        title: 'What this format rewards',
        items: [
          { text: 'Breadth held to a consistent depth', note: 'four papers covering different subjects means no single area can carry your score, and no single weak area can be hidden.' },
          { text: 'Accuracy under a fixed clock', note: 'objective papers with a question count close to the minute count. Reading speed is part of the examination.' },
          { text: 'State-specific study', note: 'the movement paper and the Telangana content inside the other papers together account for a large share of the total.' },
          { text: 'Revision, repeatedly', note: 'with no interview and no descriptive paper, marks come from recall under pressure, and recall decays. Revision cycles matter more here than in Group 1.' },
        ],
      },
      {
        type: 'note',
        title: 'There is no second chance inside the process',
        text: 'Group 1 candidates who write a poor prelims can recover in the mains, and a weak mains can be partly offset at interview. Group 2 has no such stage. Every mark is earned on one day across a set of objective papers, which makes full-length timed practice under exact conditions more valuable here than in any other TGPSC recruitment.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, multiple papers',
        detail:
          'Papers covering general studies and general abilities, history, polity and society, economy and development, and the Telangana movement and state formation. Marks across the papers are aggregated to build the merit list.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Candidates called in order of merit produce proof of age, qualification, category, local status and any claimed relaxation. Discrepancies between the application and the documents end candidacies at this stage.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Posts are allotted by merit against the preferences submitted, within the reservation and zonal rules that apply to the recruitment.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 2 syllabus — what each of the four objective papers covers, and how much of it is Telangana-specific.',
        lead: [
          'Four papers, four different subjects, and a state layer inside every one of them. The syllabus is wide rather than deep, which changes how it should be read.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Paper I — General Studies and General Abilities',
                'Current affairs of regional, national and international importance; international relations and events; general science and everyday applications, with developments in science and technology and in information technology; environmental issues and disaster management; world geography, Indian geography and the geography of Telangana; the history and cultural heritage of India; society, the Constitution and governance; logical reasoning, analytical ability and data interpretation; and basic English at a general level.',
              ],
              [
                'Paper II — History, Polity and Society',
                'The socio-cultural history of India and of Telangana; the Indian Constitution and the political system, including the structure of government, rights and duties, and the machinery of governance; and social structure, social issues and public policy. Telangana-specific content runs through all three parts rather than sitting in a separate section.',
              ],
              [
                'Paper III — Economy and Development',
                'The Indian economy and development — national income, agriculture, industry and services, planning and public finance, money and banking; and the economy of Telangana, including its resources, agriculture, irrigation, power, industrial policy and development programmes. Also covers issues of development and change, poverty, employment and welfare policy.',
              ],
              [
                'Paper IV — Telangana Movement and State Formation',
                'The idea of Telangana under Hyderabad state, the merger of 1956 and the Gentlemen’s Agreement, the 1969 agitation and its aftermath, the Six-Point Formula, the revival of the movement from the 1990s, the mobilisation of the 2000s across political, cultural and student organisations, and the formation of the state. Documents, commissions, agreements and named actors are all examinable.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Read that list for its proportions. Telangana content appears in every paper and occupies the whole of one, which puts the state layer at somewhere close to a third of the total examination. A candidate preparing from national competitive material alone is preparing for roughly two-thirds of the paper.',
          },
          {
            type: 'note',
            title: 'Confirm the paper structure for your cycle',
            text: 'The commission has changed the number of papers and their subject boundaries between recruitments. Four papers in the structure above is what recent cycles have used, and the notification for your recruitment is what sets it. Download the syllabus attached to that notification and work from it rather than from a general description.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 2 exam pattern — the objective paper structure, how the marks aggregate, and what the absence of an interview means.',
        lead: [
          'One written stage, several papers, and nothing after it but verification. The pattern is simple; what it demands is not.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The paper structure Group 2 has used in recent cycles. Question counts, marks and durations are fixed by the notification for your recruitment — confirm them there.',
            head: ['Paper', 'Subject', 'Format', 'What it decides'],
            rows: [
              ['Paper I', 'General Studies and General Abilities', 'Objective', 'The broadest paper, and the one closest to other competitive exams'],
              ['Paper II', 'History, Polity and Society', 'Objective', 'Rewards depth on the Constitution and on Telangana’s social history'],
              ['Paper III', 'Economy and Development', 'Objective', 'The paper most improved by studying the state’s own economy'],
              ['Paper IV', 'Telangana Movement and State Formation', 'Objective', 'The paper with no substitute source, and the largest differentiator'],
            ],
          },
          {
            type: 'p',
            text: 'Because the papers aggregate, a candidate is competing on a total rather than on any single paper. That makes the weakest paper the one that decides the outcome — improving a paper you score poorly in is worth more than sharpening one you already score well in, and it is the opposite of what most candidates find comfortable.',
          },
          {
            type: 'steps',
            title: 'How to spend the examination day',
            items: [
              { title: 'Attempt in printed order only if it suits you', text: 'Within a paper there is nothing to gain from starting at question one. Take a first pass for the questions you can answer immediately, then a second for the rest.' },
              { title: 'Watch the negative marking rule for your cycle', text: 'Whether wrong answers are penalised, and at what rate, changes how much you should guess. It is stated in the notification, and it should be settled long before the day.' },
              { title: 'Do not spend the general studies paper hunting for certainty', text: 'It is the widest paper and the one where partial knowledge is most common. A steady pace beats a careful one.' },
              { title: 'Bank the movement paper', text: 'It is the most learnable of the four. If it is prepared, it should be your fastest and highest-scoring paper of the day.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 2 previous papers — how to read the archive, and why TSPSC-labelled papers are the right practice material.',
        lead: [
          'Group 2 has an unusually useful archive, because the same four subjects have been examined repeatedly in the same objective format.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Papers set under the TSPSC name are the same examination under the commission’s earlier title. Use them. Between them and the Group 1 prelims papers, there is enough material to see how the commission phrases a question, how deep it goes on the Constitution and the state economy, and how it examines the movement.',
          },
          {
            type: 'list',
            title: 'What the archive tells you that a syllabus cannot',
            items: [
              { text: 'The depth of the polity questions', note: 'whether an article is asked by number or by content, and how often amendments and constitutional bodies appear.' },
              { text: 'How the movement paper is framed', note: 'the balance between chronology, documents, organisations and named individuals. It is not evenly distributed, and the distribution is stable.' },
              { text: 'Which parts of the state economy recur', note: 'irrigation projects, agriculture, power and the state’s development programmes come back more often than general economic theory.' },
              { text: 'The reasoning and data interpretation share', note: 'a small, reliable block of marks in the general abilities paper that responds to a few weeks of practice.' },
              { text: 'The current-affairs window', note: 'roughly how far back regional and national current affairs are drawn from, which tells you when to start compiling.' },
            ],
          },
          {
            type: 'p',
            text: 'Work each paper twice. The first time to time, scored as a mock. The second without a clock, writing a one-line note against every question you got wrong saying whether the cause was recall, misreading or a genuine gap. The second pass is where the paper turns into a study plan.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 2 mock tests — using full-length objective mocks when the written papers are the whole examination.',
        lead: [
          'With no interview and no descriptive stage, a mock is not preparation for the exam — it is the closest thing to the exam you can arrange.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The useful mock is the one that copies the constraint you will actually face: the full paper, the full time, in one sitting, with no pausing and no checking a fact halfway through. Sectional practice builds knowledge; only the full paper measures whether you can hold accuracy for its whole length.',
          },
          {
            type: 'steps',
            title: 'A mock routine for the last three months',
            items: [
              { title: 'One full-length mock a week, same day and time', text: 'Consistency turns the mock into a measurement rather than an event. Sit it at the hour the real paper is scheduled for if you can.' },
              { title: 'Analyse for two hours for every hour written', text: 'Every wrong answer classified as recall, misreading or gap. The classification tells you whether to revise, slow down or study.' },
              { title: 'Track your weakest paper, not your total', text: 'The total will improve on its own if the weakest paper does. Watching the total hides the paper that is holding it down.' },
              { title: 'Sit the movement paper separately, often', text: 'It is finite, learnable and heavily weighted. Repeated testing on it converts directly into marks.' },
            ],
          },
          {
            type: 'note',
            title: 'A mock score is a floor, not a forecast',
            text: 'Read your worst score of the last five mocks rather than your average. The examination will be sat once, possibly on a bad day, and the floor is the honest estimate of what a bad day produces.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC Group 2 preparation — a six to nine month plan across four papers, weighted towards the state-specific content.',
        lead: [
          'Four papers is a scheduling problem before it is a study problem. The plan below rotates them so that nothing goes cold.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A nine-month plan',
            items: [
              { title: 'Months one to two — the movement paper first', text: 'Counter-intuitive and correct. It is finite, it is a full paper, and starting with it means it gets revised the most times before the exam.' },
              { title: 'Months two to four — polity and Indian society', text: 'The Constitution studied properly, once, rather than skimmed three times. Then social structure and policy, which is where Paper II is won.' },
              { title: 'Months four to six — economy, national and state', text: 'Concepts first, then the Telangana economy specifically. Keep the state’s own publications to hand for figures.' },
              { title: 'Months five to eight — general studies and abilities, daily', text: 'Science, geography, environment and reasoning in short daily blocks rather than long sessions, since this paper is about breadth.' },
              { title: 'Throughout — current affairs, twenty minutes a day', text: 'National and Telangana together, in your own notes. It cannot be compressed into the last month, and every paper draws on it.' },
              { title: 'Last two months — full mocks and revision only', text: 'No new material. Weekly full-length papers, and revision cycles that get shorter each time.' },
            ],
          },
          {
            type: 'p',
            text: 'The rotation matters as much as the order. Touch every paper every week, even briefly, because four subjects studied in sequence means the first is nine months stale by the examination. A weekly cycle of four short revision slots is what keeps all four papers live at once.',
          },
          {
            type: 'note',
            title: 'Group 2 preparation carries into Group 3 and Group 4',
            text: 'The general studies spine, the state content and the movement material are shared across the TGPSC groups. Candidates preparing seriously for Group 2 are usually eligible for Group 3 and Group 4 as well, and applying for all three is normal practice — the marginal work is the paper structure rather than the syllabus.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 2 study material — a compact reading list for four objective papers, with the state sources named.',
        lead: [
          'An objective examination rewards a small number of sources revised many times over a large number read once.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'One source per subject',
            items: [
              { text: 'Polity', note: 'a single standard reference on the Constitution and the political system, read twice with the second reading spent on constitutional bodies and centre-state relations.' },
              { text: 'Economy', note: 'a concepts text plus the state’s socio-economic publications for Telangana-specific figures.' },
              { text: 'History and culture', note: 'a modern India narrative for the national portion, and state board textbooks for Telangana’s social and cultural history.' },
              { text: 'Geography and environment', note: 'school-level physical geography upwards, then Indian and Telangana geography with rivers, projects and districts.' },
              { text: 'The movement', note: 'one standard account, plus a chronology you build yourself from past questions.' },
            ],
          },
          {
            type: 'p',
            text: 'State board textbooks deserve a specific mention. For Telangana history, geography and civics they are written at close to the level the paper examines, they are internally consistent, and they are free. They are a better first source than a compiled guide, which is usually assembled from them anyway.',
          },
          {
            type: 'note',
            title: 'Notes should shrink',
            text: 'Whatever you read, the output should be a set of notes that gets shorter with each revision — a subject file that is forty pages after the first pass and five before the examination. Notes that stay the same length have not been revised; they have been rewritten.',
          },
          {
            type: 'list',
            title: 'What not to spend money on',
            items: [
              { text: 'A second guide for a subject you already have one for', note: 'a second source rarely adds coverage; it adds a second version of the same material to revise, which is the opposite of what an objective exam needs.' },
              { text: 'Monthly current-affairs magazines bought and stacked', note: 'useful only if read and reduced to notes. Unread issues are the most common unused purchase in state-exam preparation.' },
              { text: 'A separate book for the movement paper on top of the state textbooks', note: 'the textbooks and past papers cover it. A guide is worth buying only if you find the chronology genuinely hard to build alone.' },
              { text: 'A test series bought early', note: 'a test series earns its price in the last three months, when you have something to measure. Bought at the start, most of it expires unused.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
              { label: 'Current affairs preparation', to: '/current-affairs/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 2 exam pattern?',
        a: 'Recent Group 2 recruitments have used four objective papers — general studies and general abilities; history, polity and society; economy and development; and the Telangana movement and state formation — with the marks aggregated across the papers to build the merit list. There is no interview, and certificate verification follows the written result. Question counts, marks, duration and the negative marking rule are set by the notification for your recruitment.',
      },
      {
        q: 'Is there an interview in TGPSC Group 2?',
        a: 'No. Selection rests entirely on the written papers, followed by certificate verification and post allotment. That is why full-length timed practice matters more in Group 2 than in Group 1 — there is no later stage in which a poor written performance can be recovered.',
      },
      {
        q: 'Which posts does TGPSC Group 2 fill?',
        a: 'Group 2 fills degree-level executive and supervisory posts across state departments — Assistant Commercial Tax Officer, Sub-Registrar, Excise Sub-Inspector, Assistant Section Officer in the secretariat and Municipal Commissioner Grade III are among the posts that have appeared in recent notifications. The exact list varies with each recruitment.',
      },
      {
        q: 'How much of TGPSC Group 2 is Telangana-specific?',
        a: 'One whole paper is devoted to the Telangana movement and state formation, and Telangana content also runs through the history, society, geography and economy portions of the other papers. Taken together the state layer is close to a third of the examination, which is why national competitive material on its own is not sufficient preparation.',
      },
      {
        q: 'Can I prepare for Group 2 and Group 3 together?',
        a: 'Yes, and most serious candidates do. The general studies spine, the Telangana content and the movement material are shared across the TGPSC groups; what differs is the number of papers and the way subjects are bundled into them. Prepare the syllabus once and adapt to each group’s paper structure.',
      },
    ],
  },
  /* ── TGPSC Group 3 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-3',
    path: '/government-exams/state/telangana/tgpsc-group-3/',
    name: 'TGPSC Group 3',
    fullName: 'Telangana Government Public Service Commission Group 3 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 3 2026: Syllabus, Paper Pattern & Preparation',
    metaDescription:
      'TGPSC Group 3 guide — the objective paper structure, syllabus for each paper, how it differs from Group 2 and Group 4, and a preparation plan.',
    lead: [
      'TGPSC Group 3 fills degree-level posts across state departments, corporations and public undertakings — statistical, accounts and administrative roles that sit below the supervisory posts of Group 2 and above the ministerial posts of Group 4.',
      'It is the least understood of the four groups, largely because it is notified less often. Its syllabus is drawn from the same body of material as Group 2, and the practical question for a candidate is not what to study but how to sit three recruitments off one preparation.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree from a recognised university'],
      ['Format', 'Objective papers; no interview'],
      ['Papers', 'Three in recent cycles — general studies and general abilities, history, polity and society, and economy and development'],
      ['Selection', 'Written marks, then certificate verification'],
      ['Shared preparation', 'Substantially the same syllabus as Group 2, in fewer papers'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 3 has filled degree-level posts across departments and public undertakings, in statistical, accounts and administrative work. It is notified less regularly than Group 2 or Group 4, which means candidates often meet it as a recruitment that opens at short notice while they are already preparing for something else.',
      },
      {
        type: 'p',
        text: 'That is the right way to approach it. In recent cycles the examination has been three objective papers covering general studies and general abilities, history, polity and society, and economy and development — the same subjects Group 2 examines, bundled differently. A candidate prepared for Group 2 is substantially prepared for Group 3, and the reverse is nearly true.',
      },
      {
        type: 'list',
        title: 'Where Group 3 sits among the four groups',
        items: [
          { text: 'Above Group 4 in level', note: 'Group 4 pairs general studies with a secretarial abilities paper; Group 3 examines subject papers instead.' },
          { text: 'Below Group 2 in paper count', note: 'fewer papers, drawn from the same syllabus, which usually means each is examined with slightly less depth.' },
          { text: 'Entirely written, like Group 2', note: 'no interview, no descriptive stage, and the same consequence — the written day is the whole recruitment.' },
          { text: 'Notified irregularly', note: 'which makes a standing preparation more valuable than a campaign started when the notification appears.' },
        ],
      },
      {
        type: 'note',
        title: 'Read the notification for the paper list',
        text: 'Group 3 has appeared with different paper structures across its history. Three objective papers is what the recent cycle used. Before planning around any structure — including this one — download the syllabus attached to your notification, because it is the document the paper is actually set from.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, multiple papers',
        detail:
          'Papers covering general studies and general abilities, history, polity and society, and economy and development, with Telangana-specific content inside each. Marks are aggregated across the papers.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Age, qualification, category, local status and any claimed relaxation verified against the originals for candidates called in order of merit.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Allotment by merit against submitted preferences, within the reservation and zonal rules applying to the recruitment.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 3 syllabus — what each objective paper covers, and how it overlaps with the Group 2 syllabus.',
        lead: [
          'The syllabus is the Group 2 material in fewer containers. What changes is not the reading list but how much of it each paper has to carry.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Paper I — General Studies and General Abilities',
                'Current affairs of regional, national and international importance; general science and everyday applications; developments in science, technology and information technology; environmental issues and disaster management; world, Indian and Telangana geography; Indian history and cultural heritage; society, the Constitution and governance; logical reasoning, analytical ability and data interpretation.',
              ],
              [
                'Paper II — History, Polity and Society',
                'The socio-cultural history of India and of Telangana; the Constitution and the political system, including the structure of government, rights and duties and the machinery of governance; social structure, social issues and public policy. Telangana’s history, its social reform movements and the statehood movement are examined within this paper.',
              ],
              [
                'Paper III — Economy and Development',
                'The Indian economy — national income, agriculture, industry and services, planning, public finance, money and banking; the economy of Telangana, including resources, agriculture, irrigation, power and industrial policy; and issues of development, poverty, employment and welfare.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The Telangana movement does not disappear when it is not a separate paper. It is examined inside the history, polity and society paper and in the general studies paper, which means the same material is needed and only its share of the total changes. Prepare it as though it were a full paper regardless of how it is packaged.',
          },
          {
            type: 'links',
            title: 'Shared preparation',
            items: [
              { label: 'TGPSC Group 2 syllabus', to: '/government-exams/state/telangana/tgpsc-group-2/syllabus/' },
              { label: 'Telangana government exams hub', to: '/government-exams/state/telangana/' },
              { label: 'Study material by subject', to: '/study-material/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 3 exam pattern — the objective paper structure, aggregation of marks and what follows the written stage.',
        lead: [
          'One written stage decides the recruitment. Everything after it is verification.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The structure used in the recent Group 3 cycle. Paper count, question numbers, marks and duration are set by your notification — confirm them there before planning.',
            head: ['Paper', 'Subject', 'Format', 'Emphasis'],
            rows: [
              ['Paper I', 'General Studies and General Abilities', 'Objective', 'Breadth, current affairs and a reasoning block'],
              ['Paper II', 'History, Polity and Society', 'Objective', 'The Constitution, and Telangana’s social and political history'],
              ['Paper III', 'Economy and Development', 'Objective', 'National concepts applied to the state’s own economy'],
            ],
          },
          {
            type: 'p',
            text: 'Fewer papers means each carries more of the total, so a weak paper costs proportionally more here than in Group 2. The practical rule is the same and applies harder: work on the paper you score worst in, not the one you enjoy most.',
          },
          {
            type: 'steps',
            title: 'Settle these before the day',
            items: [
              { title: 'The negative marking rule', text: 'Whether wrong answers are penalised and at what rate decides how much you should guess. It is in the notification.' },
              { title: 'The question-to-minute ratio', text: 'Work out how many seconds a question you have, and practise at that pace rather than at a comfortable one.' },
              { title: 'Your order of attempt within each paper', text: 'A first pass for immediate answers and a second for the rest reliably beats working straight through.' },
              { title: 'The zonal and local status rules that apply to you', text: 'They affect which vacancies you compete for, and they are settled at verification rather than negotiated.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 3 previous papers — a thin archive, and how to supplement it with Group 2 and Group 1 prelims papers.',
        lead: [
          'Group 3 is notified irregularly, so its own archive is small. The material to practise on is the commission’s other papers, which are set to the same syllabus by the same body.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Where Group 3 papers exist, work them first and to time. Beyond that, the Group 2 papers and the Group 1 preliminary papers are the closest available practice: the same commission, the same syllabus areas, the same objective format and the same habits of phrasing. Papers issued under the TSPSC name are the same examination under the earlier title.',
          },
          {
            type: 'list',
            title: 'How to use another group’s paper honestly',
            items: [
              { text: 'Match the subject, not the label', note: 'a Group 2 economy paper is practice for the Group 3 economy paper whatever the cover says.' },
              { text: 'Adjust for depth, not for content', note: 'the topics recur across groups; the level of detail varies. Note which questions felt beyond the level of your own paper rather than discarding them.' },
              { text: 'Keep the timing honest', note: 'set the clock to your own paper’s question-to-minute ratio rather than the source paper’s.' },
              { text: 'Mine the state questions from every paper', note: 'Telangana geography, history, economy and movement questions are worth collecting across all the commission’s papers into one file.' },
            ],
          },
          {
            type: 'note',
            title: 'Keep one file of state questions across every paper you work',
            text: 'Telangana geography, history, culture, schemes and the statehood movement are asked in every TGPSC paper at every level. Collecting those questions out of each paper you work into a single running file builds, over a few months, the most exam-specific state revision document available to you — and unlike a purchased compilation, every entry in it has actually been asked.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'TGPSC Group 2 previous papers', to: '/government-exams/state/telangana/tgpsc-group-2/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 3 mock tests — building a testing routine when the recruitment is notified at short notice.',
        lead: [
          'Group 3 rewards candidates who are already tested rather than candidates who start testing when the notification appears.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The gap between a Group 3 notification and its examination is not always generous. A candidate who has been sitting full-length objective papers regularly for other TGPSC recruitments arrives with the format already familiar and only has to adjust the paper count. A candidate starting from scratch is learning exam craft and subject matter at once.',
          },
          {
            type: 'steps',
            title: 'A testing routine that stays ready',
            items: [
              { title: 'A full-length objective paper every week, whatever is notified', text: 'The subject can rotate; the habit should not. This is what makes a short notification window survivable.' },
              { title: 'Sectional tests on the state content, fortnightly', text: 'Telangana geography, history, economy and the movement. Finite material, and the fastest-improving part of any score.' },
              { title: 'A reasoning and data interpretation drill, twice a week', text: 'Twenty minutes. It is a mechanical skill and it decays quickly without use.' },
              { title: 'Full three-paper simulation once the notification is out', text: 'Papers back to back on one day, to find where concentration actually fails.' },
            ],
          },
          {
            type: 'note',
            title: 'Test the state content separately from everything else',
            text: 'A general mock dilutes the Telangana questions across a full paper, which hides how you are doing on them. Pull them out: a twenty-question test on state geography, history, schemes and the statehood movement, sat fortnightly, gives you a reading on the block that most differentiates candidates. It is also the fastest score to move, because the material is finite and the questions repeat.',
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
          'TGPSC Group 3 preparation — how to prepare once and sit Group 2, Group 3 and Group 4 off the same work.',
        lead: [
          'The efficient way to prepare for Group 3 is not to prepare for Group 3. It is to prepare the TGPSC syllabus and adapt to whichever paper structure is notified.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A shared preparation, adapted per group',
            items: [
              { title: 'Build the common core once', text: 'Polity, modern history, Indian and Telangana geography, the state economy and the statehood movement. Every TGPSC group examines this material.' },
              { title: 'Add current affairs as a daily habit, not a subject', text: 'Twenty minutes covering national and Telangana developments, kept in your own notes. It feeds every paper in every group.' },
              { title: 'Add the reasoning and general abilities layer', text: 'Shared with Group 4’s secretarial abilities paper and with Group 2’s general abilities paper. A small, reliable block of marks.' },
              { title: 'Adapt only at the end', text: 'When a notification comes, the work is learning that group’s paper count, marks and timing — a week of adjustment on a base you already have.' },
            ],
          },
          {
            type: 'p',
            text: 'This is not a shortcut. It is a recognition that TGPSC examines one body of material across several recruitments, and that a candidate whose preparation is organised by subject rather than by notification can sit whichever recruitment opens. Applying to Group 2, Group 3 and Group 4 in the same cycle is ordinary practice.',
          },
          {
            type: 'note',
            title: 'Eligibility still has to be checked per recruitment',
            text: 'Sharing preparation does not mean sharing eligibility. Age limits, qualification requirements, local status and any post-specific conditions are set separately in each notification, and they occasionally differ between groups. Check them for each recruitment you apply to.',
          },
          {
            type: 'list',
            title: 'What to do in the weeks after a notification appears',
            items: [
              { text: 'Read the syllabus attached to the notification line by line', note: 'against your existing notes, marking anything it names that you have not covered. That list is the whole of your new work.' },
              { text: 'Fix the paper arithmetic', note: 'questions, marks, minutes and the negative marking rule, converted into a per-question pace you then practise at.' },
              { text: 'Sit a full simulation in week one, not week four', note: 'so the gap between your current state and the paper is known while there is still time to act on it.' },
              { text: 'Stop reading new material two weeks out', note: 'the last fortnight belongs to revision and mocks. Material met for the first time in that window rarely survives to the examination.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 3 study material — the same core reading as Group 2, with the state sources that carry the most weight.',
        lead: [
          'A shared syllabus means a shared reading list. What changes between the groups is how much revision each subject gets, not what you read.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'The core list',
            items: [
              { text: 'Polity', note: 'one standard reference on the Constitution and the political system, revised rather than replaced.' },
              { text: 'Economy', note: 'a concepts text, plus the state’s socio-economic publications for the Telangana portion.' },
              { text: 'History', note: 'a modern India narrative, and state board textbooks for Telangana’s social and cultural history.' },
              { text: 'Geography', note: 'physical geography from a school text upwards, then Indian and Telangana geography — rivers, projects, districts, resources.' },
              { text: 'The statehood movement', note: 'one account plus a chronology built from past questions, revised weekly.' },
            ],
          },
          {
            type: 'p',
            text: 'Telangana state board textbooks are the single most efficient source in this list. They are written at close to the level the papers examine, they are internally consistent, and the Telangana content in most compiled guides is drawn from them.',
          },
          {
            type: 'list',
            title: 'Using one set of notes across three recruitments',
            items: [
              { text: 'Organise notes by subject, never by exam', note: 'a polity file serves Group 2, Group 3 and Group 4 alike. A "Group 3 file" has to be rebuilt the moment a different notification appears.' },
              { text: 'Keep the Telangana material in one place', note: 'geography, history, culture, state schemes and the statehood movement in a single file, since every TGPSC paper draws on it.' },
              { text: 'Mark depth rather than duplicating', note: 'where one group goes deeper than another, note it in the margin instead of keeping two versions of the same topic.' },
              { text: 'Date your current-affairs notes', note: 'so that when a notification fixes an examination window you can see immediately which months matter.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'TGPSC Group 2 study material', to: '/government-exams/state/telangana/tgpsc-group-2/study-material/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 3 exam pattern?',
        a: 'The recent Group 3 cycle used three objective papers — general studies and general abilities; history, polity and society; and economy and development — with marks aggregated across the papers and no interview. Certificate verification follows the written result. Because Group 3 is notified irregularly and its structure has varied, confirm the paper list, marks and duration in the notification for your recruitment.',
      },
      {
        q: 'How is TGPSC Group 3 different from Group 2?',
        a: 'They are drawn from the same syllabus but bundled differently. Group 2 has used four papers including one devoted entirely to the Telangana movement and state formation; Group 3 has used three, with that material examined inside the history, polity and society paper and the general studies paper. Group 3 posts sit a level below Group 2 posts, and both are decided by the written papers alone.',
      },
      {
        q: 'Which posts are filled through TGPSC Group 3?',
        a: 'Group 3 has filled degree-level posts across state departments, corporations and public undertakings, in statistical, accounts and administrative work. The post list and the vacancies in each are set by the notification for that recruitment, and they vary considerably between cycles.',
      },
      {
        q: 'Can the same preparation cover Group 2, Group 3 and Group 4?',
        a: 'Largely, yes. The general studies core, the Telangana content and the statehood movement material are examined in all of them. What differs is the paper structure — Group 4 pairs general studies with a secretarial abilities paper, while Groups 2 and 3 examine subject papers. Prepare the syllabus by subject and adapt to the structure when a notification appears.',
      },
    ],
  },

  /* ── TGPSC Group 4 ─────────────────────────────────────────── */
  {
    slug: 'tgpsc-group-4',
    path: '/government-exams/state/telangana/tgpsc-group-4/',
    name: 'TGPSC Group 4',
    fullName: 'Telangana Government Public Service Commission Group 4 Services',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Group 4 2026: Syllabus, Two-Paper Pattern & Mocks',
    metaDescription:
      'TGPSC Group 4 guide — the general studies and secretarial abilities papers, posts filled, eligibility, previous papers and a preparation plan.',
    lead: [
      'TGPSC Group 4 fills the junior assistant and ministerial posts that keep state offices running — Junior Assistant, Junior Accountant, Bill Collector, Ward Officer, Record Assistant and typist posts among them. It is the largest recruitment the commission runs by number of applicants.',
      'Its structure is the simplest of the four groups: two objective papers, one on general studies and one on secretarial abilities. That second paper is what makes Group 4 different from everything else TGPSC sets, and it is the one most candidates underestimate.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A bachelor’s degree; typist and steno posts carry an additional skill requirement'],
      ['Papers', 'Two — General Studies, and Secretarial Abilities'],
      ['Format', 'Objective; no interview'],
      ['Selection', 'Written marks, then certificate verification and any skill test the post requires'],
      ['Typical posts', 'Junior Assistant, Junior Accountant, Bill Collector, Ward Officer, Record Assistant, Typist'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Group 4 is the entry point into the state’s ministerial service. The posts are office-based — maintaining records, processing files, handling accounts and collections at the municipal and departmental level — and they are the posts most Telangana graduates first apply for. The consequence is a field measured in lakhs and a cutoff that moves with accuracy rather than with knowledge.',
      },
      {
        type: 'p',
        text: 'The examination is two objective papers. The general studies paper is the familiar one, covering current affairs, history, polity, geography, economy, science and Telangana-specific content including the statehood movement. The secretarial abilities paper is not familiar: it examines mental ability, reasoning, comprehension, sentence rearrangement, communication in English and basic computer knowledge — the skills the job itself uses.',
      },
      {
        type: 'list',
        title: 'Why the secretarial abilities paper decides the result',
        items: [
          { text: 'It is scorable in full', note: 'unlike general studies, where knowledge is always partial, this paper is a set of learnable skills. Well-prepared candidates approach full marks.' },
          { text: 'It is what everyone else neglects', note: 'candidates arriving from Group 2 preparation treat it as an afterthought and lose the paper that was easiest to win.' },
          { text: 'It rewards speed over depth', note: 'reasoning, comprehension and rearrangement questions respond to drilling, not to study.' },
          { text: 'The computer section is finite', note: 'basic hardware, software, office applications and internet concepts — a small syllabus that can be closed completely.' },
        ],
      },
      {
        type: 'note',
        title: 'A degree is required, including for typist posts',
        text: 'Group 4 is a graduate-level recruitment despite the junior nature of the posts. Typist and stenographer posts additionally require the prescribed typewriting or shorthand qualification, and those are tested separately. Check the qualification clause for the specific post you are applying to rather than for the group as a whole.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, two papers',
        detail:
          'Paper I on general studies and general abilities, and Paper II on secretarial abilities. Both are objective, both count, and the total across them builds the merit list.',
      },
      {
        name: 'Skill test, where the post requires it',
        mode: 'Typewriting or shorthand',
        detail:
          'Typist, junior stenographer and similar posts require the prescribed skill qualification, tested or verified as the notification prescribes. It does not add to the merit marks; failing it removes the candidacy for that post.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Age, qualification, category, local status and claimed relaxations verified against originals for candidates called in order of merit.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Allotment by merit against submitted preferences, within the reservation and local-cadre rules applying to the recruitment.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC Group 4 syllabus — the general studies paper and the secretarial abilities paper, section by section.',
        lead: [
          'Two papers, and they ask for entirely different things. One is a knowledge paper; the other is a skills paper, and it is the one that can be finished.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Paper I — General Studies and General Abilities',
                'Current affairs of regional, national and international importance; international relations and events; general science, everyday science and developments in science and technology; environmental issues and disaster management; world, Indian and Telangana geography; Indian history and the national movement; the history and cultural heritage of Telangana; society, the Constitution, polity and governance; the Indian economy and the economy of Telangana; policies of the Telangana state; and the Telangana movement and state formation.',
              ],
              [
                'Paper II — Secretarial Abilities: mental ability',
                'Verbal and non-verbal reasoning, series, analogies, coding and decoding, classification, blood relations, direction sense, arrangements, syllogism and analytical puzzles. Answered at speed rather than solved at leisure.',
              ],
              [
                'Paper II — Secretarial Abilities: numerical and arithmetical',
                'Number systems, fundamental operations, percentage, ratio and proportion, average, profit and loss, interest, time and work, time and distance, and interpretation of simple tables and graphs. School-level arithmetic, examined for accuracy under a clock.',
              ],
              [
                'Paper II — Secretarial Abilities: comprehension and communication',
                'Reading comprehension, rearrangement of sentences into a coherent passage, correction of sentences, vocabulary and usage. The section closest to the work the post actually involves — reading a file and writing a clear note.',
              ],
              [
                'Paper II — Secretarial Abilities: computer knowledge',
                'Basic hardware and software concepts, operating systems, word processing and spreadsheets, the internet and email, and elementary data handling. A small, closed syllabus that can be learned completely in a few weeks.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Notice the asymmetry. Paper I is an open syllabus where more study always leaves something uncovered. Paper II is a closed one where a candidate who drills it can approach full marks. In a recruitment decided by a cutoff a mark or two wide, the closed paper is where the decision is made.',
          },
          {
            type: 'note',
            title: 'State policies and the movement are examinable',
            text: 'The Group 4 general studies syllabus names Telangana’s own policies and the statehood movement explicitly. These are examined at a level national material does not reach, and they recur every cycle. Treat them as a named subject rather than as background reading.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC Group 4 exam pattern — the two-paper structure, timing, and how the skill test fits for typist posts.',
        lead: [
          'Two papers, both objective, both counting. The examination is short, the field is enormous, and the margin at the cutoff is thin.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The structure Group 4 has used in recent cycles. Question counts, marks, duration and the negative marking rule are set by your notification — confirm them there.',
            head: ['Paper', 'Content', 'Format', 'What decides your score'],
            rows: [
              ['Paper I', 'General Studies and General Abilities', 'Objective', 'Breadth of recall, and the Telangana-specific block'],
              ['Paper II', 'Secretarial Abilities', 'Objective', 'Speed and accuracy on reasoning, arithmetic, comprehension and computers'],
              ['Skill test', 'Typewriting or shorthand, for the posts that require it', 'Qualifying', 'Eligibility for that post, not merit position'],
            ],
          },
          {
            type: 'p',
            text: 'With a field this large, the cutoff sits high and the difference between selection and near-miss is a handful of marks. Those marks are almost never found in the general studies paper, where every candidate has partial knowledge of the same topics. They are found in Paper II, where preparation converts directly into accuracy.',
          },
          {
            type: 'steps',
            title: 'Exam-day discipline for a thin margin',
            items: [
              { title: 'Finish Paper II clean rather than fast', text: 'A careless error in arithmetic or rearrangement costs as much as an unknown fact in general studies, and it is entirely avoidable.' },
              { title: 'Know your negative marking rule', text: 'It decides whether an educated guess in general studies is worth making. Settle it from the notification well before the day.' },
              { title: 'Do not leave the computer questions to the end', text: 'They are the quickest marks in the paper. Take them early while you are fresh.' },
              { title: 'Read the comprehension passage once, properly', text: 'Rereading a passage under time pressure is the most common way candidates lose minutes they needed elsewhere.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC Group 4 previous papers — what recurs in both papers, and how to turn the archive into a drill.',
        lead: [
          'Group 4 papers repeat their shape closely from cycle to cycle, which makes the archive unusually predictive.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work the papers in two passes. First to time, as a mock, to establish your real pace. Then question by question, marking each wrong answer as a gap in knowledge, a misreading, or a calculation slip. In Group 4 the third category is usually the largest, and it is the one that responds fastest to attention.',
          },
          {
            type: 'list',
            title: 'What the archive shows',
            items: [
              { text: 'The secretarial abilities paper barely varies', note: 'the same families of reasoning question, the same arithmetic topics, the same comprehension format. This is what makes it drillable.' },
              { text: 'The Telangana share of the general studies paper is large and stable', note: 'geography, history, culture, state policies and the movement together account for a substantial block every cycle.' },
              { text: 'Current affairs are drawn from a recent window', note: 'which tells you when compilation should start rather than how far back to read.' },
              { text: 'The computer questions stay basic', note: 'office applications, internet concepts and elementary hardware. The level does not rise between cycles.' },
              { text: 'Papers labelled TSPSC are the same examination', note: 'the commission was renamed in 2024; the papers before that are current practice material.' },
            ],
          },
          {
            type: 'note',
            title: 'Work the secretarial paper twice as often as the general one',
            text: 'General studies papers have limited replay value once you have read the answers, because those questions will not repeat. The secretarial abilities paper is the opposite: its question families repeat exactly, so re-working an old paper months later is genuine practice rather than recall. Keep the general studies papers for analysis and the secretarial papers for drilling.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC Group 4 mock tests — a testing routine for an exam decided by accuracy at a high cutoff.',
        lead: [
          'When lakhs of candidates sit two short objective papers, the exam measures reliability rather than ceiling. Mocks are how reliability is built.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The number to watch in a Group 4 mock is not the score but the error type. A candidate losing marks to unknown facts needs to study; a candidate losing them to slips needs to slow down by a few seconds a question. Those are opposite remedies, and applying the wrong one is the most common way a plateau sets in.',
          },
          {
            type: 'steps',
            title: 'A twelve-week testing plan',
            items: [
              { title: 'Weeks one to four — sectional tests only', text: 'Reasoning, arithmetic, comprehension and computers separately, twenty minutes each, several times a week. Build the skills before testing them together.' },
              { title: 'Weeks five to eight — one full paper a week', text: 'Both papers, back to back, to time. Analyse for twice as long as you wrote.' },
              { title: 'Weeks nine to twelve — two full papers a week', text: 'Plus a state-content sectional test in between. No new material in this phase.' },
              { title: 'Throughout — an error log', text: 'One line per wrong answer with its cause. Reread it before every mock. This single habit fixes more marks than additional study does.' },
            ],
          },
          {
            type: 'note',
            title: 'What a plateau usually means',
            text: 'Group 4 scores commonly stall for weeks and then move suddenly. A plateau almost never means you need more material; it usually means the error mix has shifted from knowledge gaps to slips, and slips respond to pace rather than to study. If your error log shows more careless mistakes than unknown facts for three mocks running, slow down by a few seconds a question and watch the score before adding anything new to read.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'State PSC mock tests', to: '/government-exams/state/mock-tests/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC Group 4 preparation — a four to six month plan that treats the secretarial abilities paper as the priority it is.',
        lead: [
          'Most Group 4 plans put general studies first because it feels like the real paper. That is the wrong way round for a recruitment decided at a high cutoff.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A six-month plan',
            items: [
              { title: 'Months one to two — secretarial abilities, as the main subject', text: 'Reasoning families, arithmetic topics, comprehension technique and the whole computer syllabus. This is the paper you can finish, so finish it first.' },
              { title: 'Months one to six — Telangana content, weekly', text: 'Geography, history, culture, state policies and the statehood movement. The largest predictable block in Paper I.' },
              { title: 'Months two to four — the general studies spine', text: 'Polity, modern history, economy, geography and science, at the level the paper actually asks rather than at Group 1 depth.' },
              { title: 'Months three to six — current affairs daily', text: 'Twenty minutes, national and state together, in your own notes.' },
              { title: 'Months five to six — mocks and revision only', text: 'Two full papers a week, an error log reread before each, and shrinking revision notes.' },
            ],
          },
          {
            type: 'p',
            text: 'The typing requirement deserves its own line in the plan for anyone applying to a typist or stenographer post. It is a separate qualification with its own preparation, it cannot be acquired in the weeks after a written result, and candidates discover the gap at exactly the point where nothing can be done about it.',
          },
          {
            type: 'note',
            title: 'Apply across the groups in the same cycle',
            text: 'The general studies half of Group 4 preparation is the same material Groups 2 and 3 examine. Candidates who are eligible commonly apply to all three in a cycle, and the additional work for each is the paper structure rather than the syllabus.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC Group 4 study material — a short reading list for general studies, and drill material for secretarial abilities.',
        lead: [
          'One paper needs sources; the other needs practice sets. Buying more of the wrong one is the usual mistake.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'For Paper I',
            items: [
              { text: 'Telangana state board textbooks', note: 'the best single source for state history, geography and civics, at close to the examined level.' },
              { text: 'One polity reference', note: 'read for the structure of government, rights and duties, and constitutional bodies rather than for exhaustive detail.' },
              { text: 'A current-affairs note kept by you', note: 'national and Telangana developments, a page a day, revised weekly. Compilations bought in the last month do not stick.' },
              { text: 'The state’s own policy documents', note: 'for the schemes and programmes the syllabus names explicitly.' },
            ],
          },
          {
            type: 'list',
            title: 'For Paper II',
            items: [
              { text: 'A reasoning practice book worked cover to cover', note: 'chosen for the number of solved sets rather than for its explanations.' },
              { text: 'School arithmetic, drilled', note: 'percentages, ratio, averages, interest, time and work. Speed comes from familiarity, not from technique.' },
              { text: 'Comprehension and rearrangement sets, daily', note: 'ten minutes a day is enough, and it compounds.' },
              { text: 'A basic computer awareness list', note: 'closed syllabus, learnable in a few weeks, and worth completing rather than sampling.' },
            ],
          },
          {
            type: 'note',
            title: 'One book per subject, revised four times',
            text: 'Group 4 is decided by recall under time pressure, and recall comes from repetition rather than from coverage. A candidate who reads one polity reference four times will outscore one who reads four references once, because the second has met more material and remembers less of it. Choose the source early, accept that it is imperfect, and spend the time saved on revision and mocks.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TGPSC Group 4 exam pattern?',
        a: 'Group 4 is two objective papers — Paper I on general studies and general abilities, and Paper II on secretarial abilities, which covers mental ability, arithmetic, comprehension and sentence rearrangement, and basic computer knowledge. Both papers count towards the merit list, and there is no interview. Typist and stenographer posts additionally require the prescribed skill qualification. Confirm question counts, marks, duration and negative marking in your notification.',
      },
      {
        q: 'Is a degree required for TGPSC Group 4?',
        a: 'Yes. Group 4 is a graduate-level recruitment despite the junior nature of the posts, and a bachelor’s degree from a recognised university is the general requirement. Typist, junior stenographer and similar posts carry an additional typewriting or shorthand qualification. Check the qualification clause for the specific post rather than for the group.',
      },
      {
        q: 'What is the Secretarial Abilities paper?',
        a: 'It is an objective paper testing the skills the job uses: mental ability and reasoning, school-level arithmetic, reading comprehension and rearrangement of sentences, and basic computer knowledge. Unlike general studies it is a closed syllabus, which means a prepared candidate can approach full marks — and because the Group 4 cutoff is high and the field very large, this is usually the paper that decides selection.',
      },
      {
        q: 'Which posts does TGPSC Group 4 fill?',
        a: 'Junior Assistant, Junior Accountant, Bill Collector, Ward Officer, Record Assistant and typist posts are among those filled through Group 4, across state departments and municipal bodies. The exact post list and vacancy numbers are set by each notification.',
      },
      {
        q: 'How long does it take to prepare for TGPSC Group 4?',
        a: 'Four to six months of consistent work is a realistic estimate for a graduate starting fresh, with the secretarial abilities paper prepared first because it is the one that can be completed. Candidates already preparing for Group 2 or Group 3 share most of the general studies work and need to add the secretarial abilities paper specifically.',
      },
    ],
  },
  /* ── Teaching posts ────────────────────────────────────────── */
  {
    slug: 'teaching-posts',
    path: '/government-exams/state/telangana/teaching-posts/',
    name: 'Telangana Teaching Posts',
    fullName: 'Telangana teacher recruitment — TET, DSC and residential school posts',
    authority:
      'School Education Department, Telangana, and the Telangana Residential Educational Institutions Recruitment Board',
    official: 'schooledu.telangana.gov.in',
    seoTitle: 'Telangana Teaching Jobs 2026: TET, DSC & Gurukul Recruitment',
    metaDescription:
      'Telangana teaching recruitment guide — how TET, DSC and residential school recruitment fit together, eligibility, syllabus, papers and preparation.',
    lead: [
      'Teaching recruitment in Telangana runs on three tracks that are easy to confuse. The Teacher Eligibility Test qualifies you. The District Selection Committee recruitment appoints you to a government school. The residential institutions board recruits separately for the state’s gurukul schools and colleges.',
      'The order matters, because the eligibility test is a prerequisite rather than a competitor to the recruitment test, and its score has carried weight in the selection alongside the recruitment paper. A candidate who treats the eligibility test as a formality to be scraped through has given away marks that count later.',
    ],
    quickFacts: [
      ['Eligibility test', 'Telangana TET — Paper I for classes I to V, Paper II for classes VI to VIII'],
      ['Recruitment test', 'DSC or Teacher Recruitment Test, for government school posts'],
      ['Residential institutions', 'Recruited separately by the residential educational institutions board'],
      ['Qualification', 'The teacher training qualification prescribed for the post — D.El.Ed, B.Ed or the subject equivalent'],
      ['TET validity', 'Lifetime, following the national change to the validity rule'],
      ['Posts', 'Secondary Grade Teacher, School Assistant, Language Pandit, Physical Education Teacher, and gurukul TGT, PGT and lecturer posts'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The three tracks fit together like this. The Telangana Teacher Eligibility Test establishes that you meet the national standard to teach at a given level — Paper I for primary classes, Paper II for upper primary. Passing it does not appoint you to anything. The recruitment test conducted for the District Selection Committee is the competitive examination that fills government school vacancies, and it is here that the merit list is built. The residential educational institutions board runs its own recruitment for the state’s gurukul schools, junior colleges and degree colleges, with its own notification, syllabus and calendar.',
      },
      {
        type: 'p',
        text: 'What ties the first two together is weightage. In recent cycles the eligibility test score has contributed to the final selection alongside the recruitment test rather than acting purely as a gate. That makes the eligibility test worth preparing for properly the first time, since a lifetime-valid score sat carelessly follows a candidate into every subsequent recruitment.',
      },
      {
        type: 'list',
        title: 'The posts these recruitments fill',
        items: [
          { text: 'Secondary Grade Teacher', note: 'primary classes, requiring the primary teacher training qualification and a Paper I eligibility pass.' },
          { text: 'School Assistant', note: 'upper primary and secondary classes in a specific subject, requiring a degree in that subject with B.Ed and a Paper II pass.' },
          { text: 'Language Pandit', note: 'Telugu, Hindi, Urdu or the relevant language, with the prescribed language teaching qualification.' },
          { text: 'Physical Education Teacher and Physical Director', note: 'with the prescribed physical education qualification.' },
          { text: 'Gurukul TGT, PGT and lecturer posts', note: 'in the state’s residential schools, junior colleges and degree colleges, recruited by the residential institutions board.' },
        ],
      },
      {
        type: 'note',
        title: 'Qualification rules are post-specific and unforgiving',
        text: 'Teacher recruitment is governed by national teacher education regulations as well as state rules, and the qualification prescribed for a post — the training course, the subject combination in your degree, the method subject — is checked exactly at verification. Read the qualification clause for the specific post before you apply, and take the eligibility question to the notification rather than to advice.',
      },
    ],
    stages: [
      {
        name: 'Telangana TET',
        mode: 'Objective, qualifying with weightage',
        detail:
          'Paper I for candidates intending to teach classes I to V and Paper II for classes VI to VIII, covering child development and pedagogy, languages, mathematics, environmental studies or the relevant subject content. A pass is valid for life, and the score has carried weight in recent recruitment selections.',
      },
      {
        name: 'Recruitment test',
        mode: 'Objective, competitive',
        detail:
          'The District Selection Committee recruitment examination for government school posts, covering general knowledge, perspectives in education, pedagogy and the content of the subject applied for. This paper builds the merit list.',
      },
      {
        name: 'Residential institutions recruitment',
        mode: 'Objective, separate notification',
        detail:
          'The state’s residential educational institutions board conducts its own recruitment for gurukul school, junior college and degree college posts, with its own syllabus, pattern and schedule.',
      },
      {
        name: 'Verification and appointment',
        mode: 'Documents',
        detail:
          'Qualification, training certificate, eligibility test result, category, local status and any relaxation verified against originals before appointment.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'Telangana teaching exam syllabus — what TET Paper I and Paper II cover, and what the recruitment test adds on top.',
        lead: [
          'Two syllabuses that overlap but are not the same. The eligibility test asks whether you can teach; the recruitment test asks how well you know your subject.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'TET Paper I — for classes I to V',
                'Child development and pedagogy, covering learning, development, inclusive education and assessment; Language I, the medium of instruction, tested for content and pedagogy; Language II, usually English; mathematics at primary level with its pedagogy; and environmental studies with its pedagogy. Pedagogy is examined alongside every content section rather than separately.',
              ],
              [
                'TET Paper II — for classes VI to VIII',
                'Child development and pedagogy; Language I and Language II; and then either mathematics and science or social studies, depending on the subject the candidate intends to teach. The content is pitched at upper primary level, and the pedagogy component again runs through each section.',
              ],
              [
                'Recruitment test — general knowledge and current affairs',
                'National and Telangana current affairs, general awareness and the state-specific content that appears in every Telangana recruitment, including the statehood movement.',
              ],
              [
                'Recruitment test — perspectives in education',
                'The history and philosophy of education in India, national education policy, the right to education, educational psychology, and the professional and legal framework a teacher works within.',
              ],
              [
                'Recruitment test — pedagogy of the subject',
                'Teaching methods, curriculum, learning materials, evaluation and classroom practice for the specific subject applied for. It is a separate body of knowledge from the subject content itself.',
              ],
              [
                'Recruitment test — subject content',
                'The content of the subject applied for, examined at a level above the classes you would teach. For a School Assistant post this is degree-level subject knowledge; for a Secondary Grade Teacher post it is the full primary curriculum across subjects.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The section candidates most often underprepare is pedagogy of the subject, because it feels like something a trained teacher already knows. It is examined specifically — methods, aims, evaluation techniques, teaching aids — and it is written from teacher-education texts rather than from classroom experience.',
          },
          {
            type: 'note',
            title: 'Confirm the paper structure for your notification',
            text: 'Telangana has revised the structure and weightage of teacher recruitment more than once, including how eligibility test marks are combined with the recruitment test. Both the eligibility test and the recruitment test publish their own syllabus with each notification. Work from those documents.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'Telangana teaching exam pattern — how TET and the recruitment test are structured and how their marks combine.',
        lead: [
          'One test qualifies, one selects, and in recent cycles both have contributed to the final score.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'How the tracks relate. Marks, question counts, qualifying percentages and the weightage between tests are fixed by the notification for your cycle — confirm each there.',
            head: ['Test', 'Purpose', 'Format', 'What it produces'],
            rows: [
              ['Telangana TET', 'Eligibility to teach at a level', 'Objective, Paper I or Paper II', 'A lifetime-valid pass, and a score that has carried weightage'],
              ['Recruitment test (DSC)', 'Competitive selection to government school posts', 'Objective', 'The merit list for appointment'],
              ['Residential institutions recruitment', 'Selection to gurukul schools and colleges', 'Objective, own pattern', 'A separate merit list under a separate board'],
            ],
          },
          {
            type: 'p',
            text: 'The qualifying percentage for the eligibility test is relaxed for reserved categories, and the relaxation is set in the notification. But qualifying is the low bar. Where the eligibility score contributes weightage to selection, the useful target is a high score rather than a pass, and the difference between the two is a few weeks of preparation taken seriously.',
          },
          {
            type: 'steps',
            title: 'Sequencing the two tests',
            items: [
              { title: 'Sit the eligibility test as early as you are qualified to', text: 'The pass is valid for life, so an early attempt removes the risk of the two notifications colliding.' },
              { title: 'Prepare it for a high score, not a pass', text: 'Where the score carries weightage into recruitment, marks earned here are permanent.' },
              { title: 'Treat the recruitment test as a subject examination', text: 'Its content component goes deeper than the eligibility test, and it is where the merit list is decided.' },
              { title: 'Track the residential board separately', text: 'Its notifications, syllabus and calendar are its own, and candidates who watch only the school education department miss them.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'Telangana teaching exam previous papers — reading TET and DSC papers for the pedagogy and content balance.',
        lead: [
          'Past papers settle the question candidates argue about most: how much of this examination is pedagogy and how much is subject content.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work a few papers before deciding how to study. The proportions are stable across cycles, and they are usually not what a first-time candidate expects — pedagogy and perspectives in education together account for more than most candidates allocate to them, and subject content is examined above the level of the classes the post teaches.',
          },
          {
            type: 'list',
            title: 'What to take from the archive',
            items: [
              { text: 'The pedagogy share, counted rather than estimated', note: 'across child development, perspectives in education and subject pedagogy. It is usually larger than expected.' },
              { text: 'The level of the content questions', note: 'compare them against the school syllabus of the classes the post covers, and note how far above it the paper sits.' },
              { text: 'The Telangana block', note: 'state current affairs, the statehood movement and state education policy, which recur in the general knowledge section.' },
              { text: 'Language paper standards', note: 'the level at which Language I and Language II are tested, which differs and is often misjudged.' },
              { text: 'Repeated pedagogy question stems', note: 'method, aim, evaluation and teaching-aid questions come back in recognisable families.' },
            ],
          },
          {
            type: 'note',
            title: 'Compare the eligibility and recruitment papers side by side',
            text: 'Take one eligibility test paper and one recruitment paper in the same subject and read them against each other. The pedagogy sections are close; the content sections are not, and the gap between them is exactly the additional preparation the recruitment test asks for. Candidates who cleared the eligibility test comfortably and then underperform in recruitment have usually never measured that gap.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'Teaching and NET exams', to: '/government-exams/teaching-net/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Telangana teaching exam mock tests — testing pedagogy and subject content as separate skills.',
        lead: [
          'A teaching-exam mock is worth analysing by section rather than by score, because its sections behave completely differently.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Content questions are either known or not — they respond to study. Pedagogy questions are frequently answered wrongly by candidates who know the material, because the options are close and the question turns on a distinction between approaches. That second failure mode is fixed by practice on questions, not by rereading the text, which is why sectional pedagogy testing pays disproportionately.',
          },
          {
            type: 'steps',
            title: 'A sectional testing routine',
            items: [
              { title: 'Pedagogy sets, twice a week', text: 'Thirty questions, timed. Review every wrong answer against the reasoning rather than the fact.' },
              { title: 'Subject content, once a week', text: 'At the level of the recruitment test rather than the school syllabus.' },
              { title: 'Language papers, fortnightly', text: 'Both languages, since the second is often left untested until it costs marks.' },
              { title: 'One full paper a fortnight, then weekly', text: 'To time, in one sitting, as the notification approaches.' },
            ],
          },
          {
            type: 'note',
            title: 'Pedagogy questions are lost on the second-best option',
            text: 'The characteristic teaching-exam mistake is choosing an answer that is correct in isolation but not the best of the four — a valid teaching method where the question asked for the most appropriate one at that stage of learning. When you review a pedagogy section, do not stop at the right answer: write down why each of the other three was rejected. That habit fixes the failure mode rereading the textbook does not touch.',
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Teaching exam preparation', to: '/government-exams/teaching-net/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'Telangana teaching exam preparation — a plan that treats the eligibility test as a scoring opportunity rather than a gate.',
        lead: [
          'The candidates who do best in Telangana teacher recruitment are usually the ones who took the eligibility test seriously years earlier.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A preparation sequence',
            items: [
              { title: 'First — confirm your qualification against the post', text: 'The training course, the degree subject and the method subject decide which posts you may apply for. This is a documents question, and it is settled before any studying.' },
              { title: 'Then — the eligibility test, prepared for a high score', text: 'Child development and pedagogy as a subject in its own right, both languages, and the content area at the level of the paper.' },
              { title: 'Then — perspectives in education', text: 'Education policy, the right to education, the history and philosophy of Indian education. Shared between the tests and frequently neglected.' },
              { title: 'Then — subject content at recruitment level', text: 'Degree-level knowledge for School Assistant posts, and the full primary curriculum for Secondary Grade Teacher posts.' },
              { title: 'Throughout — Telangana current affairs and state education policy', text: 'A short daily habit that covers the general knowledge section in both tests.' },
            ],
          },
          {
            type: 'p',
            text: 'Watch two calendars, not one. The school education department notifies the eligibility test and the recruitment for government schools; the residential educational institutions board notifies gurukul posts on its own schedule. Candidates who follow only the first regularly miss the second, and the gurukul posts are frequently the less contested of the two.',
          },
          {
            type: 'note',
            title: 'The training qualification cannot be arranged later',
            text: 'D.El.Ed, B.Ed or the equivalent prescribed for your post is a multi-year qualification and a hard requirement. If you do not hold it, the first step is enrolling in it rather than preparing for the examination — no amount of test preparation substitutes, and it is checked at verification.',
          },
        ],
      },
      'study-material': {
        description:
          'Telangana teaching exam study material — sources for pedagogy, perspectives in education and subject content.',
        lead: [
          'Teacher-education material and school textbooks do different jobs here, and most candidates buy too much of one and none of the other.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'What to read',
            items: [
              { text: 'A child development and pedagogy text', note: 'the standard teacher-education material, read as a subject rather than skimmed for definitions.' },
              { text: 'State school textbooks for the classes concerned', note: 'the content the eligibility test is written from, and the cheapest reliable source available.' },
              { text: 'Education policy documents', note: 'the national education policy and the right to education framework, read directly rather than through summaries.' },
              { text: 'Degree-level subject material', note: 'for School Assistant and lecturer posts, where content is examined above school level.' },
              { text: 'Telangana-specific general knowledge', note: 'state history, geography, the statehood movement and state education schemes.' },
            ],
          },
          {
            type: 'note',
            title: 'Take the syllabus from the notification',
            text: 'Teacher recruitment syllabuses in Telangana are published post by post, and they differ between Secondary Grade Teacher, School Assistant, Language Pandit and gurukul posts. A general teaching-exam guide is a starting point; the syllabus attached to your notification is the specification.',
          },
          {
            type: 'list',
            title: 'How to use a school textbook for a teaching exam',
            items: [
              { text: 'Read it as a teacher, not as a student', note: 'note how a concept is introduced, sequenced and assessed. Pedagogy questions are often answerable from the textbook’s own method.' },
              { text: 'Work the exercises', note: 'the questions at the end of a chapter are close to the content questions the eligibility test asks.' },
              { text: 'Note the vocabulary of the curriculum', note: 'learning outcomes, competencies, continuous assessment. The recruitment paper uses this language and expects it back.' },
              { text: 'Cover the classes below your paper too', note: 'Paper II candidates lose marks on primary-level content they assumed was beneath the examination.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Teaching and NET exams', to: '/government-exams/teaching-net/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the difference between TET and DSC in Telangana?',
        a: 'The Teacher Eligibility Test establishes that you meet the standard to teach at a given level — Paper I for classes I to V, Paper II for classes VI to VIII — and a pass is valid for life. It does not appoint you to anything. The District Selection Committee recruitment is the competitive examination that fills government school vacancies and builds the merit list. In recent cycles the eligibility test score has also carried weightage in that selection, so it is worth sitting for a high score rather than a bare pass.',
      },
      {
        q: 'Is Telangana TET valid for life?',
        a: 'Yes. Following the national change to the validity rule, a Teacher Eligibility Test pass no longer expires. That makes an early, well-prepared attempt valuable — the score stays with you into every subsequent recruitment that gives it weightage.',
      },
      {
        q: 'Who conducts gurukul teaching recruitment in Telangana?',
        a: 'The state’s residential educational institutions recruitment board conducts recruitment for gurukul residential schools, junior colleges and degree colleges, with its own notification, syllabus and calendar — separate from the school education department’s eligibility test and district recruitment. Candidates who follow only the school education department’s announcements frequently miss these vacancies.',
      },
      {
        q: 'What qualification do I need for Telangana teaching posts?',
        a: 'The teacher training qualification prescribed for the specific post — a primary teacher training qualification for Secondary Grade Teacher posts, and a degree in the relevant subject with B.Ed for School Assistant posts, with language and physical education posts carrying their own requirements. These are governed by national teacher education regulations as well as state rules and are verified exactly, so read the qualification clause for your post in the notification.',
      },
      {
        q: 'How much of the Telangana teacher recruitment paper is pedagogy?',
        a: 'More than most candidates allocate to it. Child development and pedagogy, perspectives in education and the pedagogy of the subject applied for are examined as distinct bodies of knowledge drawn from teacher-education texts, and together they carry a substantial share of the paper. Counting the pedagogy questions in a few past papers is the quickest way to see the real proportion before planning your study.',
      },
    ],
  },

  /* ── Technical posts ───────────────────────────────────────── */
  {
    slug: 'technical-posts',
    path: '/government-exams/state/telangana/technical-posts/',
    name: 'Telangana Technical Posts',
    fullName: 'TGPSC technical recruitment — engineering, scientific and accounts posts',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Technical Posts 2026: AE, AEE & DAO Exam Guide',
    metaDescription:
      'TGPSC technical recruitment — Assistant Engineer, AEE, Assistant Scientist and Divisional Accounts Officer posts, exam pattern and preparation.',
    lead: [
      'TGPSC recruits technical staff separately from its general Group services. Assistant Engineer and Assistant Executive Engineer posts in irrigation, panchayat raj and public health engineering, Assistant Scientist posts in the state’s laboratories and departments, and Divisional Accounts Officer posts in the accounts service are all filled through their own notifications.',
      'The papers are built accordingly: a general studies component that any TGPSC candidate would recognise, and a core subject paper set at degree level in the discipline the post requires. The second is where these recruitments are decided, and it is examined at a depth that general competitive preparation does not reach.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Qualification', 'A degree in the relevant engineering or science discipline; accounts posts have their own requirement'],
      ['Format', 'Objective, with a general studies paper and a core subject paper'],
      ['Typical posts', 'Assistant Engineer, Assistant Executive Engineer, Assistant Scientist, Divisional Accounts Officer'],
      ['Departments', 'Irrigation, panchayat raj, public health, municipal administration and state laboratories'],
      ['Selection', 'Written marks, then certificate verification'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Technical recruitment differs from the Group services in one decisive way: the field competing for a post is restricted to holders of a specific degree. A civil engineering Assistant Executive Engineer notification is contested by civil engineering graduates, not by every graduate in the state. The applicant numbers are smaller and the subject standard is higher.',
      },
      {
        type: 'p',
        text: 'The papers follow the same logic. A general studies paper covers the material every TGPSC recruitment covers — current affairs, polity, economy, geography and the Telangana-specific content including the statehood movement. The core paper is a degree-level examination in the discipline: structural analysis, hydraulics and surveying for a civil post; machines, power systems and control for an electrical one; and the corresponding syllabus for mechanical, science and accounts posts.',
      },
      {
        type: 'list',
        title: 'The recruitment routes under this heading',
        items: [
          { text: 'Assistant Engineer and Assistant Executive Engineer', note: 'engineering posts across irrigation, panchayat raj, public health and municipal engineering, in the civil, electrical and mechanical branches.' },
          { text: 'Assistant Scientist and technical officer posts', note: 'in state laboratories, pollution control, agriculture and allied departments, requiring the relevant science degree.' },
          { text: 'Divisional Accounts Officer', note: 'the state accounts service, examined on accounting, audit and financial rules alongside general studies.' },
          { text: 'Departmental technical posts', note: 'notified individually by TGPSC for specific departments, with syllabuses matched to the discipline.' },
        ],
      },
      {
        type: 'note',
        title: 'The core paper is where the selection happens',
        text: 'Because every candidate in the field holds the same degree, the general studies paper compresses scores rather than separating them. The subject paper does the separating. A candidate who divides preparation evenly between the two has usually mis-weighted it — the core paper deserves the larger share.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective, general studies and core subject',
        detail:
          'A general studies and general abilities paper of the kind TGPSC sets across its recruitments, and a core paper examining the engineering, science or accounts discipline the post requires at degree level.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Degree and discipline, age, category, local status and any claimed relaxation verified against originals. The discipline requirement is exact — a related degree is not automatically an eligible one.',
      },
      {
        name: 'Post allotment',
        mode: 'Merit and preference',
        detail:
          'Allotment by merit within the department and discipline applied for, under the reservation and zonal rules of the recruitment.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC technical post syllabus — the general studies paper and the core subject papers for engineering, science and accounts posts.',
        lead: [
          'One shared paper and one discipline paper. The shared one is published in full with every TGPSC notification; the discipline one is where the real reading list sits.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Studies and General Abilities',
                'Current affairs of regional, national and international importance; general science and developments in science and technology; environmental issues and disaster management; world, Indian and Telangana geography; Indian history and cultural heritage; society, the Constitution and governance; the Indian and Telangana economy; logical reasoning and data interpretation; and the Telangana movement and state formation.',
              ],
              [
                'Core paper — civil engineering',
                'Strength of materials and structural analysis, reinforced concrete and steel design, fluid mechanics and hydraulics, water resources and irrigation engineering, geotechnical engineering, transportation engineering, surveying, environmental engineering, and construction planning and estimation. Irrigation and water resources carry particular weight in a state where the department is a major employer.',
              ],
              [
                'Core paper — electrical engineering',
                'Circuits and network theory, electrical machines, power systems including generation, transmission, distribution and protection, control systems, measurements and instrumentation, power electronics and drives, and utilisation of electrical energy.',
              ],
              [
                'Core paper — mechanical engineering',
                'Thermodynamics, heat transfer and applied thermal engineering, fluid mechanics and hydraulic machines, theory of machines and machine design, strength of materials, manufacturing processes, industrial and production engineering.',
              ],
              [
                'Core paper — science and laboratory posts',
                'The relevant science discipline at degree level, with emphasis on analytical methods, laboratory practice, instrumentation and the regulatory framework the department works within.',
              ],
              [
                'Core paper — accounts posts',
                'Accounting principles and practice, auditing, financial and treasury rules, government accounting and budgeting, and the service and financial regulations applying to state government accounts work.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The core syllabus for an engineering post is close to the standard undergraduate curriculum, which means graduation notes and standard texts remain the right material. What differs from a campus examination is the format — objective questions answered at speed, rewarding recall of formulae and standard results rather than long derivations.',
          },
          {
            type: 'note',
            title: 'Syllabus is published per notification and per discipline',
            text: 'TGPSC publishes a separate syllabus for each technical notification and each discipline within it. Departmental emphasis varies — an irrigation post and a municipal engineering post weight the civil syllabus differently. Work from the document attached to your notification.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC technical exam pattern — how the general studies and core papers combine, and what verification checks.',
        lead: [
          'Two papers, both objective, with the discipline paper carrying the weight that decides selection.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The structure TGPSC technical recruitments have used. Marks, question counts, duration and negative marking are set by each notification — confirm them there.',
            head: ['Paper', 'Content', 'Format', 'Role in selection'],
            rows: [
              ['General Studies', 'The standard TGPSC general studies and abilities syllabus', 'Objective', 'Compresses the field; everyone prepares it'],
              ['Core subject', 'The engineering, science or accounts discipline at degree level', 'Objective', 'Separates the field; where the recruitment is decided'],
              ['Verification', 'Degree, discipline, category, local status', 'Documents', 'Exact match to the prescribed qualification'],
            ],
          },
          {
            type: 'p',
            text: 'An objective core paper changes how the subject should be revised. Long derivations are rarely useful; the standard result, the formula and the condition under which it applies are what get tested. Rebuilding a formula sheet for each subject from your own graduation notes is the highest-return preparation available for these papers.',
          },
          {
            type: 'steps',
            title: 'Preparing an objective engineering paper',
            items: [
              { title: 'Rebuild the formula sheet yourself', text: 'Subject by subject, from your own notes. The act of assembling it is most of the revision.' },
              { title: 'Practise numerical problems against a clock', text: 'The paper tests whether you can reach an answer in a minute, not whether you understand the method.' },
              { title: 'Learn the standard values and codes', text: 'Design constants, permissible values and code provisions that recur in objective questions.' },
              { title: 'Do not neglect general studies entirely', text: 'It is compressed but not irrelevant, and the Telangana block within it is entirely learnable.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC technical previous papers — reading them for topic weighting within a large degree syllabus.',
        lead: [
          'A degree syllabus is far larger than a paper can examine. Past papers tell you which parts of it the commission actually uses.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Take three or four past papers in your discipline and tabulate the questions by subject. The distribution is rarely even, and it is usually stable — in civil papers set for a state with a large irrigation department, water resources and hydraulics tend to carry more than a uniform syllabus reading would suggest. That table is a better study plan than any general guide.',
          },
          {
            type: 'list',
            title: 'What to tabulate',
            items: [
              { text: 'Questions by subject within the discipline', note: 'the single most useful analysis, and the one almost nobody does.' },
              { text: 'Numerical versus conceptual split', note: 'it decides how much of your practice should be calculation and how much recall.' },
              { text: 'The recurring standard results', note: 'formulae and constants that appear across years, which belong on a one-page sheet.' },
              { text: 'The Telangana block in the general studies paper', note: 'state geography, irrigation projects, economy and the movement, which recur predictably.' },
              { text: 'Question phrasing habits', note: 'TGPSC papers, including those set under the TSPSC name, have consistent phrasing worth becoming familiar with.' },
            ],
          },
          {
            type: 'note',
            title: 'A weighting table beats a syllabus reading',
            text: 'Spend an evening tabulating three past papers by subject and you have something no guide can give you: the commission’s actual weighting of a degree syllabus far too large to revise evenly. In most disciplines two or three subjects carry a disproportionate share, and they are not always the ones a candidate expects. Study to the table, and revisit it when a new paper is released.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Engineering exam preparation', to: '/entrance-exams/engineering/' },
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC technical mock tests — testing a degree-level core paper alongside a general studies paper.',
        lead: [
          'The two papers need different testing. One is a speed test on material you already know; the other is a breadth test on material you are still learning.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the core paper, sectional tests by subject are more useful than full papers early on, because they localise the weakness to a subject you can then revise. For general studies, full-length papers are better from the start, since the difficulty there is sustaining attention across unrelated topics rather than depth in any one.',
          },
          {
            type: 'steps',
            title: 'A testing plan across both papers',
            items: [
              { title: 'Subject-wise core tests, twice a week', text: 'One subject at a time, thirty questions, timed. Rotate through the discipline until every subject has been tested twice.' },
              { title: 'A general studies full paper, weekly', text: 'Including the Telangana section, which is the part that improves fastest.' },
              { title: 'A combined full simulation, fortnightly', text: 'Both papers on one day in the notified order, to find where fatigue actually starts.' },
              { title: 'A formula-sheet recall test, weekly', text: 'Cover the sheet and rewrite it. Ten minutes, and it exposes decay before a mock does.' },
            ],
          },
          {
            type: 'note',
            title: 'Test the rusty subjects first, not the strong ones',
            text: 'A working engineer’s score is usually held down by the two or three subjects they have not touched since graduation, and those are precisely the ones it is uncomfortable to test. Sit them first and sit them early: an honest low score in month one is a study plan, while the same score discovered in the final fortnight is a problem with no time left in it.',
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
          'TGPSC technical preparation — a plan for a working engineer or a recent graduate, weighted towards the core paper.',
        lead: [
          'Most candidates for these posts are either recent graduates with the subject fresh or working engineers with it several years behind them. The plans differ.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A five-month plan',
            items: [
              { title: 'Month one — rebuild the core subject map', text: 'List every subject in the discipline, mark each as solid, rusty or gone, and plan from that rather than from a generic schedule.' },
              { title: 'Months one to four — core subjects in rotation', text: 'Two subjects at a time, with a formula sheet built for each as you go. Numerical practice from the start rather than after revision.' },
              { title: 'Months two to five — general studies, in daily blocks', text: 'Short sessions on polity, economy, geography and science, with the Telangana content given its own weekly slot.' },
              { title: 'Throughout — current affairs, fifteen minutes a day', text: 'National and Telangana together. It is a small, reliable block in the general studies paper.' },
              { title: 'Month five — simulations and formula recall', text: 'Full papers to time, and weekly rewriting of the formula sheets from memory.' },
            ],
          },
          {
            type: 'p',
            text: 'A working engineer has an advantage that is easy to waste: practical familiarity with a part of the syllabus, usually the part their job touches. That familiarity does not extend to the subjects they have not used since graduation, and those are where the marks are lost. Audit honestly before allocating time.',
          },
          {
            type: 'note',
            title: 'Check the discipline requirement before applying',
            text: 'These recruitments prescribe a degree in a named discipline, and verification checks it exactly. A related or interdisciplinary degree may or may not qualify, and the answer is in the notification rather than in general advice. Settle it before you spend months preparing.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC technical study material — graduation texts, formula sheets and the state-specific general studies layer.',
        lead: [
          'For the core paper the material you already own is usually the right material. What is missing is the sheet you have not written yet.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'For the core paper',
            items: [
              { text: 'Your own graduation notes and standard texts', note: 'the syllabus is close to the undergraduate curriculum, so a new set of books is rarely what is needed.' },
              { text: 'A formula sheet per subject, written by you', note: 'the single highest-return document in this preparation, and worthless if bought rather than built.' },
              { text: 'Objective question banks in the discipline', note: 'for the format rather than the content — the shift from derivation to recall takes practice.' },
              { text: 'Relevant codes and standard values', note: 'the design constants and provisions that recur in objective questions.' },
            ],
          },
          {
            type: 'list',
            title: 'For general studies',
            items: [
              { text: 'One polity reference and one economy text', note: 'read once properly rather than repeatedly skimmed.' },
              { text: 'Telangana state board textbooks', note: 'for state geography, history and civics at the level examined.' },
              { text: 'A daily current-affairs note', note: 'national and state, kept in your own words.' },
              { text: 'The state’s irrigation and infrastructure material', note: 'worth knowing for a technical candidate, and it recurs in the state general studies block.' },
            ],
          },
          {
            type: 'note',
            title: 'The formula sheet is the deliverable',
            text: 'For an objective core paper the single document that decides your score is a formula and standard-results sheet you wrote yourself, subject by subject, from your own graduation notes. Bought compilations do not work the same way: the value lies in having decided what belongs on the page, which is an act of revision in itself. Aim for one page per subject, rewritten from memory once a week in the final month.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Engineering exams', to: '/entrance-exams/engineering/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'Which technical posts does TGPSC recruit for?',
        a: 'TGPSC notifies technical recruitment separately from its Group services, covering Assistant Engineer and Assistant Executive Engineer posts in irrigation, panchayat raj, public health and municipal engineering, Assistant Scientist and technical officer posts in state laboratories and allied departments, and Divisional Accounts Officer posts in the accounts service. Each notification names the disciplines and departments it covers.',
      },
      {
        q: 'What is the exam pattern for TGPSC AE and AEE posts?',
        a: 'The recruitments have used an objective written examination with a general studies and general abilities paper of the kind TGPSC sets across its exams, and a core paper examining the engineering discipline at degree level. Certificate verification follows the written result. Marks, question counts, duration and negative marking are fixed by the notification for your recruitment.',
      },
      {
        q: 'How is the core subject paper different from a university exam?',
        a: 'It is objective and answered at speed, which changes what to revise. Long derivations are rarely tested; standard results, formulae and the conditions under which they apply are. Rebuilding a formula sheet per subject from your own graduation notes, then practising numerical questions against a clock, is more useful than rereading textbooks.',
      },
      {
        q: 'Does my degree discipline have to match exactly?',
        a: 'These recruitments prescribe a degree in a named discipline and verification checks it exactly, so a related or interdisciplinary qualification is not automatically eligible. The notification is the only place this is settled — check the qualification clause before committing months to preparation.',
      },
    ],
  },
  /* ── Panchayat Secretary ───────────────────────────────────── */
  {
    slug: 'panchayat-secretary',
    path: '/government-exams/state/telangana/panchayat-secretary/',
    name: 'Telangana Panchayat Secretary',
    fullName: 'Telangana Panchayat Secretary recruitment — rural development and panchayat administration',
    authority: 'Telangana Government Public Service Commission, for the Panchayat Raj and Rural Development Department',
    official: OFFICIAL,
    seoTitle: 'Telangana Panchayat Secretary: Syllabus & Exam Pattern',
    metaDescription:
      'Telangana Panchayat Secretary recruitment guide — eligibility, the objective written pattern, panchayat raj and rural development syllabus, and preparation.',
    lead: [
      'The Panchayat Secretary is the administrative officer of a gram panchayat — the person who keeps its records, runs its meetings, implements its schemes and connects the village to the district administration. Telangana recruits to the post for its Panchayat Raj and Rural Development Department, and the recruitment is a degree-level objective written examination.',
      'It is notified irregularly rather than annually, and both the post designation and the conducting arrangement have varied between cycles. That makes the notification unusually important to read: the eligibility, the grade and the syllabus have all differed across the recruitments Telangana has run.',
    ],
    quickFacts: [
      ['Department', 'Panchayat Raj and Rural Development, Government of Telangana'],
      ['Qualification', 'A bachelor’s degree from a recognised university'],
      ['Format', 'Objective written examination'],
      ['Content', 'General studies with a panchayat raj and rural development component'],
      ['Frequency', 'Irregular — notified when vacancies are sanctioned rather than annually'],
      ['Selection', 'Written marks, then certificate verification'],
    ],
    overview: [
      {
        type: 'p',
        text: 'A Panchayat Secretary works at the base of the state’s administrative structure. The role covers maintaining the panchayat’s records and accounts, convening and recording its meetings, implementing rural development and welfare schemes, issuing certificates within the panchayat’s competence, and acting as the point of contact between the elected body and the block and district administration.',
      },
      {
        type: 'p',
        text: 'The examination reflects that work. Alongside the general studies material common to every state recruitment, it examines the panchayat raj system specifically — the constitutional provisions that created it, the three-tier structure, the powers and functions of each tier, the state’s own panchayat legislation, and the rural development and welfare schemes a secretary would administer. That component is the part general competitive preparation does not cover.',
      },
      {
        type: 'list',
        title: 'What the post involves in practice',
        items: [
          { text: 'Records and accounts of the gram panchayat', note: 'registers, receipts, budget and audit compliance, which is why accounts and record-keeping questions appear in the paper.' },
          { text: 'Scheme implementation', note: 'rural employment, housing, sanitation, drinking water and welfare programmes at village level.' },
          { text: 'Meetings of the elected body', note: 'convening the gram sabha and the panchayat, recording resolutions and following them up.' },
          { text: 'The link to higher administration', note: 'reporting to the mandal and district levels, which is why the administrative structure of the state is examinable.' },
        ],
      },
      {
        type: 'note',
        title: 'The notification defines this recruitment more than usual',
        text: 'Telangana has recruited to panchayat administration under different designations, grades and conducting arrangements across cycles, and the eligibility and syllabus have moved with them. Anything written in general terms about "the Panchayat Secretary exam" — including this page — is background. The notification for your recruitment is the specification, and it should be read before any preparation is planned around a pattern.',
      },
    ],
    stages: [
      {
        name: 'Written examination',
        mode: 'Objective',
        detail:
          'A degree-level objective paper covering general studies, the panchayat raj system and rural development, with the Telangana-specific content that appears in every state recruitment. The structure and marks are set by the notification.',
      },
      {
        name: 'Certificate verification',
        mode: 'Documents',
        detail:
          'Degree, age, category, local status and any claimed relaxation verified against originals for candidates called in order of merit.',
      },
      {
        name: 'Appointment and posting',
        mode: 'Merit and preference',
        detail:
          'Allotment to a panchayat or cluster by merit and preference within the district and reservation rules applying to the recruitment.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'Telangana Panchayat Secretary syllabus — general studies plus the panchayat raj and rural development component.',
        lead: [
          'Two halves. One is the general studies material every Telangana recruitment examines; the other is specific to rural administration and has to be studied deliberately.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General studies and current affairs',
                'Current affairs of regional, national and international importance; general science and everyday applications; environmental issues; world, Indian and Telangana geography; Indian history and the national movement; the Constitution, polity and governance; the Indian and Telangana economy; and the Telangana movement and state formation.',
              ],
              [
                'Panchayat raj — the constitutional framework',
                'The constitutional amendment that gave panchayats their status, the three-tier structure of gram panchayat, mandal and zilla parishad, the subjects devolved to them, reservation in local bodies, the state election commission and the state finance commission.',
              ],
              [
                'Panchayat raj — the state framework',
                'Telangana’s own panchayat raj legislation and rules, the powers and duties of the gram panchayat and its officers, the conduct of the gram sabha, panchayat finances and audit, and the administrative chain from the village to the district.',
              ],
              [
                'Rural development and welfare schemes',
                'Rural employment, housing, sanitation, drinking water, livelihoods and social welfare programmes, both national and state, with attention to how each is implemented and monitored at village level.',
              ],
              [
                'Rural economy and society',
                'Agriculture and allied activities, rural credit and cooperatives, land records and revenue administration, rural social structure and the issues that welfare policy is directed at.',
              ],
              [
                'General abilities',
                'Reasoning, analytical ability, basic arithmetic and data interpretation at the level common to state objective papers.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The rural development component is examined at the level of someone who will administer these schemes, not at the level of general awareness. Knowing that a rural employment programme exists is not enough; the paper asks about entitlements, implementing authorities and the role of the gram sabha in it.',
          },
          {
            type: 'note',
            title: 'Take the syllabus from your notification',
            text: 'The balance between general studies and the panchayat raj component has varied between Telangana’s recruitments to rural administration. The syllabus attached to the notification is what the paper is set from, and it is the document to plan against.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'Telangana Panchayat Secretary exam pattern — the objective written stage and what follows it.',
        lead: [
          'A single written stage decides the recruitment, with verification after it. There is no interview and no skill test.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The shape this recruitment has taken. Paper count, marks, duration and negative marking are set by the notification for your cycle — confirm each there.',
            head: ['Stage', 'Format', 'Counts towards merit', 'What it decides'],
            rows: [
              ['Written examination', 'Objective, degree level', 'Yes', 'The merit list in full'],
              ['Certificate verification', 'Documents', 'No', 'Whether the candidacy survives'],
              ['Posting', 'Merit and preference', 'No', 'Where you are appointed'],
            ],
          },
          {
            type: 'p',
            text: 'With everything resting on one objective paper, the practical questions are the ordinary ones: whether wrong answers are penalised, how many seconds a question allows, and which sections you can bank quickly. All three are answered from the notification and from timed practice rather than from additional study.',
          },
          {
            type: 'steps',
            title: 'Where the marks are won',
            items: [
              { title: 'The panchayat raj component', text: 'Finite, specific and neglected by candidates preparing generally. It is the most reliable block in the paper.' },
              { title: 'The Telangana general studies block', text: 'State geography, history, economy and the movement, which recur across every state recruitment.' },
              { title: 'The reasoning and arithmetic section', text: 'Mechanical marks that respond to a few weeks of drilling.' },
              { title: 'Current affairs, if kept daily', text: 'Cheap marks for a candidate with the habit, and unreachable for one without it.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'Telangana Panchayat Secretary previous papers — a thin archive, and what to use alongside it.',
        lead: [
          'This recruitment runs irregularly, so its own paper archive is small. The substitute is the commission’s other objective papers plus the panchayat raj material itself.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Where papers from this recruitment exist, work them first — they are the only direct evidence of how the panchayat raj component is examined. Beyond that, TGPSC Group 4 and Group 2 papers cover the general studies and general abilities half at a comparable level, and papers from other states’ panchayat recruitment show how the rural development component tends to be framed.',
          },
          {
            type: 'list',
            title: 'Building practice from adjacent material',
            items: [
              { text: 'Use TGPSC Group 4 papers for the general half', note: 'same commission, same general studies syllabus, similar level.' },
              { text: 'Use the state panchayat raj act itself as a question source', note: 'read the duties of the panchayat and its officers and quiz yourself on them. Most questions in this component come straight from the framework.' },
              { text: 'Collect the scheme questions', note: 'entitlements, implementing bodies and the role of the gram sabha, gathered into one revision sheet.' },
              { text: 'Keep the Telangana general knowledge file shared', note: 'the same state content serves every recruitment you might sit.' },
            ],
          },
          {
            type: 'note',
            title: 'Papers from other states are background, not practice',
            text: 'Panchayat recruitment papers from neighbouring states show how the rural development component tends to be framed, which is useful. They do not test Telangana’s own panchayat legislation, its administrative structure or its state schemes — and those are the questions that separate candidates here. Use them for format and question style, then come back to the state’s own material for content.',
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'TGPSC Group 4 previous papers', to: '/government-exams/state/telangana/tgpsc-group-4/previous-year-papers/' },
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'State exam previous papers', to: '/government-exams/state/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Telangana Panchayat Secretary mock tests — staying ready for a recruitment notified at short notice.',
        lead: [
          'An irregular recruitment rewards candidates who were already preparing. Testing is how that readiness is kept warm.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general studies half of this examination is shared with the TGPSC Group recruitments, so a candidate sitting regular objective mocks for those is already tested on most of the paper. What needs its own testing is the panchayat raj and rural development component, which no general mock covers.',
          },
          {
            type: 'steps',
            title: 'A testing routine',
            items: [
              { title: 'A general objective paper weekly', text: 'Any TGPSC-level general studies mock keeps the format and the pace familiar.' },
              { title: 'A panchayat raj sectional test fortnightly', text: 'Built from the state act, the constitutional provisions and the scheme list. Self-made questions are fine and often better.' },
              { title: 'A schemes recall test monthly', text: 'Name the scheme, its purpose, its implementing authority and the panchayat’s role. Ten minutes.' },
              { title: 'Full-length simulation once notified', text: 'To the notified pattern, in one sitting, twice before the examination.' },
            ],
          },
          {
            type: 'note',
            title: 'Write your own questions from the act',
            text: 'For the panchayat raj component there is no test series worth waiting for, and there does not need to be. Read a section of the state act, close it, and write five questions on it — who is competent to act, within what period, subject to whose approval. Answering your own questions a week later is a sharper test than any generic paper, because they came from the source the examination is set on.',
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
          'Telangana Panchayat Secretary preparation — a plan built on shared state-exam study with a rural administration layer.',
        lead: [
          'Prepare this alongside the TGPSC groups rather than instead of them. The overlap is large and the recruitment calendar is unpredictable.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A preparation sequence',
            items: [
              { title: 'Start with the shared core', text: 'Polity, Telangana geography and history, the statehood movement, economy and current affairs — the material every state recruitment examines.' },
              { title: 'Add the panchayat raj layer as a subject', text: 'The constitutional provisions, the three-tier structure, the state act, panchayat finances and the gram sabha. A few weeks of focused study covers it.' },
              { title: 'Add the schemes file', text: 'One page per major rural development and welfare scheme: purpose, entitlement, implementing authority, the panchayat’s role.' },
              { title: 'Keep general abilities warm', text: 'Reasoning and arithmetic drills twice a week, shared with every other objective recruitment you might sit.' },
              { title: 'Apply broadly within the state', text: 'The same preparation covers TGPSC Group 4 and much of Group 2 and Group 3.' },
            ],
          },
          {
            type: 'p',
            text: 'Reading the state’s panchayat raj legislation directly is worth more than any summary of it. It is written in plain administrative language, the duties it lists are exactly what the paper asks about, and a candidate who has read the source recognises questions that a candidate working from a guide has to reason towards.',
          },
          {
            type: 'note',
            title: 'Check eligibility for the specific notification',
            text: 'Age limits, qualification, local status and any relaxations are set separately in each recruitment, and this post has been notified under different arrangements. Verify against the notification rather than against a previous cycle.',
          },
          {
            type: 'list',
            title: 'A four-week panchayat raj module',
            items: [
              { text: 'Week one — the constitutional framework', note: 'the amendment that created the system, the three tiers, the devolved subjects, reservation, and the state election and finance commissions.' },
              { text: 'Week two — the state act', note: 'read it through once, then again marking the duties of the panchayat and its secretary specifically.' },
              { text: 'Week three — schemes', note: 'one page each for the major rural development and welfare programmes: purpose, entitlement, implementing authority, the gram sabha’s role.' },
              { text: 'Week four — revision and self-testing', note: 'questions written from the act and the scheme sheets, answered a week after writing them.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'Telangana Panchayat Secretary study material — the state act, scheme documents and shared general studies sources.',
        lead: [
          'The distinctive half of this syllabus is served by primary documents rather than by exam guides, and they are free.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'For the panchayat raj and rural development half',
            items: [
              { text: 'The state panchayat raj act and rules', note: 'the primary source for the duties, powers and finances the paper examines.' },
              { text: 'The constitutional provisions on local government', note: 'read directly — the schedule of subjects, reservation, the state election and finance commissions.' },
              { text: 'Scheme guidelines', note: 'the official documents for the major rural development and welfare programmes, read for entitlements and implementing authorities.' },
              { text: 'The department’s own reports', note: 'for the state’s rural development priorities and recent programmes.' },
            ],
          },
          {
            type: 'list',
            title: 'For the general studies half',
            items: [
              { text: 'Telangana state board textbooks', note: 'state history, geography and civics at the examined level.' },
              { text: 'One polity reference', note: 'shared with every other state recruitment.' },
              { text: 'A daily current-affairs note', note: 'national and Telangana together, in your own words.' },
              { text: 'Reasoning and arithmetic practice sets', note: 'for the general abilities section.' },
            ],
          },
          {
            type: 'note',
            title: 'Read the act, not a summary of the act',
            text: 'The panchayat raj component of this paper is set on legislation that is short, written in plain administrative language and freely available. A guide that paraphrases it is working from the same source with the wording removed — and the wording is what questions about powers, duties and competent authorities turn on. An afternoon spent with the act itself is worth more than a chapter about it.',
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'State exam study material', to: '/government-exams/state/study-material/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What does a Panchayat Secretary do?',
        a: 'A Panchayat Secretary is the administrative officer of a gram panchayat — maintaining its records and accounts, convening and recording gram sabha and panchayat meetings, implementing rural development and welfare schemes at village level, issuing certificates within the panchayat’s competence, and acting as the link between the elected body and the mandal and district administration.',
      },
      {
        q: 'What is the exam pattern for Telangana Panchayat Secretary recruitment?',
        a: 'The recruitment has been a degree-level objective written examination covering general studies and current affairs, the panchayat raj system, rural development and welfare schemes, and general abilities, followed by certificate verification. There is no interview. Because Telangana has notified rural administration posts under different designations and arrangements, the paper structure and marks must be confirmed in the notification for your recruitment.',
      },
      {
        q: 'How often is Panchayat Secretary recruitment notified in Telangana?',
        a: 'Irregularly — it is notified when vacancies are sanctioned rather than on an annual calendar. That makes it a recruitment best prepared for alongside the TGPSC Group examinations, since the general studies half is shared and the panchayat raj component can be added in a few weeks when a notification appears.',
      },
      {
        q: 'What should I study for the panchayat raj section?',
        a: 'The constitutional provisions on local government, the three-tier structure and the subjects devolved to it, Telangana’s own panchayat raj legislation and rules, panchayat finances and audit, the conduct of the gram sabha, and the major rural development and welfare schemes with their entitlements and implementing authorities. Reading the state act directly is more useful than any summary of it.',
      },
    ],
  },

  /* ── Departmental tests ────────────────────────────────────── */
  {
    slug: 'departmental-tests',
    path: '/government-exams/state/telangana/departmental-tests/',
    name: 'Telangana Departmental Tests',
    fullName: 'TGPSC Departmental Tests for serving government employees',
    authority: 'Telangana Government Public Service Commission (TGPSC)',
    official: OFFICIAL,
    seoTitle: 'TGPSC Departmental Tests: Papers, Pattern & How to Pass',
    metaDescription:
      'TGPSC Departmental Tests guide — who has to sit them, the account and executive tests, the with-books papers, registration and a preparation approach.',
    lead: [
      'Departmental tests are not a recruitment. They are qualifying examinations that serving government employees in Telangana must pass for probation to be declared, for promotion, and for the increments and appointments their service rules make conditional on them. TGPSC conducts them in sessions and publishes the results as passes rather than as a merit list.',
      'Because nobody is competing against anybody, the whole difficulty is different from a recruitment exam. There is no cutoff moving with the field and no advantage to answering faster than the next candidate. There is a standard, set in the rules, and the only question is whether you meet it.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana Government Public Service Commission, formerly TSPSC'],
      ['Who sits them', 'Serving state government employees, as their service rules require'],
      ['Purpose', 'Declaration of probation, promotion, and increments conditional on passing'],
      ['Result', 'Pass or fail against a prescribed standard — not a merit list'],
      ['Format', 'Computer-based in recent sessions, with some papers permitted with books'],
      ['Common tests', 'Account tests, executive officers’ tests, office manual and departmental papers, special language tests'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The tests exist because state service rules make certain career events conditional on demonstrated knowledge of the rules an officer works under. A revenue officer is expected to know the district office manual; an officer handling money is expected to know the accounts and treasury code. The departmental test is how that knowledge is certified, and until it is, probation stays undeclared and promotion waits.',
      },
      {
        type: 'p',
        text: 'TGPSC conducts them in sessions, notified periodically, with candidates registering for the specific papers their service requires. Recent sessions have been computer-based. A distinctive feature is that some papers are conducted with books: candidates are permitted to consult the prescribed code or manual during the examination, which changes what preparation means for those papers entirely.',
      },
      {
        type: 'list',
        title: 'The families of test',
        items: [
          { text: 'Account tests', note: 'for subordinate and executive officers, covering accounting procedure, treasury and financial rules, and the codes governing government transactions.' },
          { text: 'Departmental papers for specific services', note: 'set on the acts, rules and manuals of the department the officer serves in — revenue, education, forest, commercial taxes and others.' },
          { text: 'Office manual and procedure papers', note: 'the district office manual and secretariat procedure, examining how files, records and correspondence are handled.' },
          { text: 'Special language tests', note: 'for officers required to demonstrate proficiency in a language for their post.' },
        ],
      },
      {
        type: 'note',
        title: 'Your service rules decide which papers you sit',
        text: 'There is no general list that applies to every employee. The papers you must pass, the time limit within which you must pass them, and the consequence of not doing so are set by the service rules for your post and by your department. Confirm them with your department and against the commission’s notification before registering, because sitting the wrong paper is a wasted session.',
      },
    ],
    stages: [
      {
        name: 'Notification and registration',
        mode: 'Online, per session',
        detail:
          'The commission notifies a session and candidates register for the specific papers required by their service, with the fee paid per paper. Registration windows are short and are not usually extended.',
      },
      {
        name: 'The examination',
        mode: 'Computer-based in recent sessions',
        detail:
          'Papers are sat at allotted centres on the notified dates. Some papers are conducted with books, in which the prescribed code or manual may be consulted during the examination; others are without books.',
      },
      {
        name: 'Result',
        mode: 'Pass or fail',
        detail:
          'Results are published as passes against the prescribed standard rather than as a merit list. A pass in a paper stands on its own record, and papers can be cleared across different sessions.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TGPSC departmental test syllabus — what the account, executive, office manual and language papers examine.',
        lead: [
          'Each paper is set on a named document — a code, a manual or an act. The syllabus is that document, which is both the difficulty and the opportunity.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Account tests',
                'Government accounting procedure, the treasury and financial codes, budget and expenditure control, drawal and disbursement of funds, audit objections and their settlement, and the rules governing pay, allowances, advances and pensions. Set directly on the codes and rules rather than on an accounting textbook.',
              ],
              [
                'Executive officers’ tests',
                'The acts and rules an executive officer administers, together with the procedure for exercising the powers the post carries. Content differs by the service the test is prescribed for.',
              ],
              [
                'District office manual and procedure',
                'The handling of correspondence, files, registers and records; the movement and disposal of papers; delegation and reporting; and the office procedure that governs day-to-day administration.',
              ],
              [
                'Departmental papers',
                'The specific legislation, rules and manuals of the department — revenue, education, forest, commercial taxes, panchayat raj and others. Each paper names the documents it is set on.',
              ],
              [
                'Special language tests',
                'Proficiency in the prescribed language at the standard the post requires, typically covering comprehension, translation and drafting rather than literary study.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The practical consequence of a syllabus that names documents is that guides are a poor substitute for the documents themselves. A question set on a rule is answered from the rule, and a summary that paraphrases it has already lost the wording the question turns on.',
          },
          {
            type: 'note',
            title: 'The paper list is in the notification',
            text: 'The commission publishes the papers included in each session with their codes, along with which are conducted with books. Register against that list and against your service requirement rather than against a previous session — both the papers offered and their conditions can change.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TGPSC departmental test pattern — computer-based papers, the with-books papers, and how the result works.',
        lead: [
          'A qualifying examination behaves differently from a competitive one, and preparing for it as though it were competitive wastes effort.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'How departmental tests are structured. The paper list, duration, marks, permitted books and the qualifying standard are set by the commission’s notification for each session — confirm them there.',
            head: ['Feature', 'How it works', 'What it means for you'],
            rows: [
              ['Result', 'Pass or fail against a prescribed standard', 'You are not competing with other candidates'],
              ['Papers', 'Registered individually, per your service requirement', 'Papers can be cleared across different sessions'],
              ['With-books papers', 'The prescribed code or manual may be consulted', 'Navigation of the book is the skill being tested'],
              ['Mode', 'Computer-based in recent sessions', 'Practise on screen rather than only on paper'],
            ],
          },
          {
            type: 'p',
            text: 'The with-books papers deserve their own explanation, because candidates prepare for them backwards. Being allowed the code does not make the paper easy; it makes it a test of whether you can find a provision quickly. A candidate who has never opened the book before the examination will not find anything in the time available, while one who knows its structure, its index and where the frequently-asked rules sit can answer confidently.',
          },
          {
            type: 'steps',
            title: 'How to prepare a with-books paper',
            items: [
              { title: 'Get the exact edition permitted', text: 'The notification specifies what may be carried. An unpermitted edition or an annotated copy can be refused at the centre.' },
              { title: 'Learn the structure before the content', text: 'Parts, chapters and the index. Speed comes from knowing where to look, not from having read every page.' },
              { title: 'Tab the provisions that recur', text: 'Work past papers and mark the rules they draw on. Most papers return to the same core provisions.' },
              { title: 'Practise timed lookups', text: 'Set questions for yourself and find the answer against a clock. This is the actual skill the paper tests.' },
            ],
          },
          CONFIRM_NOTE,
        ],
      },
      'previous-year-papers': {
        description:
          'TGPSC departmental test previous papers — the most efficient preparation available for a rules-based examination.',
        lead: [
          'When a paper is set on a fixed document, past papers show which parts of that document are actually used. Few examinations reward the archive as directly as these.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work through several sessions of past papers for your specific test and mark, in your copy of the code or manual, every provision a question was drawn from. What emerges is a heavily annotated book in which the examinable core is visible at a glance — and for a with-books paper, that annotated copy is the single most useful thing you can carry in, subject to what the notification permits.',
          },
          {
            type: 'list',
            title: 'What the archive gives you',
            items: [
              { text: 'The recurring provisions', note: 'a small subset of any code carries most of the questions, and it is stable across sessions.' },
              { text: 'The style of question', note: 'whether the paper asks for the rule, its application to a situation, or the authority competent to act.' },
              { text: 'The lookup burden', note: 'how many questions genuinely require the book and how many are answerable directly, which tells you how to budget the time.' },
              { text: 'The difficulty of the language paper', note: 'for special language tests, where the level is often misjudged in both directions.' },
            ],
          },
          {
            type: 'note',
            title: 'The annotated code is the study output',
            text: 'Working past sessions produces something more useful than a score: a copy of the code in which every examined provision is marked. After three or four sessions the marked provisions cluster, and what looked like an unmanageable document turns out to have a core of a few dozen rules. That core, revised, is what passing these papers actually requires.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'Previous-year papers library', to: '/previous-year-papers/' },
              { label: 'Exam updates and notifications', to: '/exam-updates/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TGPSC departmental test practice — self-testing against the code, and rehearsing the computer-based format.',
        lead: [
          'Commercial mock tests barely exist for these papers, which matters less than it sounds. The best practice material is the code itself and the past papers.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Build your own tests. Take twenty questions from past sessions, sit them to time with only what you would be permitted to carry, and mark honestly. Repeat with a different set. For a rules-based paper this is closer to the real examination than any generic test could be, and it costs nothing but the time.',
          },
          {
            type: 'steps',
            title: 'A practice routine for a working officer',
            items: [
              { title: 'Thirty minutes on most days, not long weekend sessions', text: 'These papers reward familiarity accumulated slowly, and a serving officer rarely has long uninterrupted blocks.' },
              { title: 'One past paper a week, to time', text: 'With exactly the material the notification permits, and no more.' },
              { title: 'Annotate as you go', text: 'Every question traced back to its provision, marked in the book. The annotation is the revision.' },
              { title: 'Rehearse the on-screen format once', text: 'If the session is computer-based, sit at least one practice paper on a screen rather than on paper.' },
            ],
          },
          {
            type: 'note',
            title: 'Time the lookup, because that is the paper',
            text: 'In a with-books paper the marks go to whoever can find a provision inside a minute. Practise that specifically: take ten questions from a past session, start a clock, and find each answer in the code, recording how long each took. The provisions that were slow to locate are the ones to tab — and after two or three rounds of this the tabs stop being needed at all.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'Exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TGPSC departmental test preparation — how a serving officer clears the required papers without a study leave.',
        lead: [
          'Almost everyone sitting these papers is doing so alongside a full-time posting. The plan has to survive that, which rules out most conventional preparation advice.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A plan that fits around a posting',
            items: [
              { title: 'Confirm which papers you actually need', text: 'From your service rules and your department, in writing if possible. This is the step that most often goes wrong, and it costs a whole session.' },
              { title: 'Register for a realistic number of papers', text: 'Two well-prepared papers pass; four half-prepared ones usually do not. Papers carry across sessions, so there is no advantage in overloading one.' },
              { title: 'Obtain the exact prescribed material early', text: 'The code, manual or act named for the paper, in the edition the notification permits.' },
              { title: 'Work past papers from the start, not at the end', text: 'They define the examinable core, and the earlier they do so the less of the book you have to hold.' },
              { title: 'Use your own work as revision', text: 'The rules you apply in your posting are the rules the paper examines. Noticing that connection turns daily work into preparation.' },
            ],
          },
          {
            type: 'p',
            text: 'One more habit is worth naming: keep a record of which papers you have passed and in which session, with the result document saved. Career events depend on these passes, they are claimed years later, and reconstructing a session record after the fact is considerably harder than filing it at the time.',
          },
          {
            type: 'note',
            title: 'Watch the registration window',
            text: 'Departmental test sessions have short registration windows that are not usually extended, and a missed window means waiting for the next session with probation or promotion waiting with it. Track the commission’s notifications, and register early in the window rather than at the end of it.',
          },
        ],
      },
      'study-material': {
        description:
          'TGPSC departmental test study material — the codes, manuals and acts each paper is set on.',
        lead: [
          'For once the reading list is not a matter of judgement. Each paper names its document, and that document is the material.',
        ],
        blocks: [
          {
            type: 'list',
            title: 'What to obtain',
            items: [
              { text: 'The prescribed code or manual for your paper', note: 'in the edition the notification permits, since for with-books papers the wrong edition may not be admitted.' },
              { text: 'The relevant financial and treasury rules', note: 'for account tests, where questions come directly from the provisions.' },
              { text: 'Your department’s own acts and rules', note: 'for departmental papers, which are set on them specifically.' },
              { text: 'Past papers for your test, several sessions deep', note: 'the annotation key that turns a large document into a small examinable core.' },
            ],
          },
          {
            type: 'p',
            text: 'Commercial guides for these tests exist and are of uneven quality. They are useful for organising a first pass through an unfamiliar code, and they are not a substitute for it — a paraphrase cannot be relied on where a question turns on the wording of a rule.',
          },
          {
            type: 'note',
            title: 'Check the permitted edition before the day',
            text: 'For a with-books paper the notification names what may be carried into the hall, and centres do refuse material that does not match — a superseded edition, a heavily annotated copy, or a commercial guide brought in place of the code itself. Settle this when you register rather than at the door, and where annotation is permitted, keep it to tabs and marginal references rather than inserted notes.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Telangana government exams', to: '/government-exams/state/telangana/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Exam updates and notifications', to: '/exam-updates/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What are departmental tests in Telangana?',
        a: 'They are qualifying examinations conducted by TGPSC for serving state government employees, required by service rules for the declaration of probation, for promotion, and for increments and appointments that are made conditional on passing them. They are not a recruitment: results are published as passes against a prescribed standard rather than as a merit list.',
      },
      {
        q: 'Which departmental tests do I need to pass?',
        a: 'That is decided by the service rules for your post and by your department, not by a general list. The papers required, the period within which they must be cleared and the consequence of not clearing them all vary by service. Confirm with your department and against the commission’s notification before registering, because sitting the wrong paper costs a whole session.',
      },
      {
        q: 'What is a with-books departmental test?',
        a: 'Some papers permit candidates to consult the prescribed code or manual during the examination. This does not make the paper easy — it makes it a test of how quickly you can find a provision. Preparation for these papers means learning the structure and index of the book and tabbing the provisions past papers keep returning to, rather than memorising content. Only the edition the notification permits may be carried.',
      },
      {
        q: 'How often are Telangana departmental tests held?',
        a: 'The commission conducts them in notified sessions rather than continuously. Registration windows are short and are not usually extended, so tracking the commission’s notifications matters — a missed window means waiting for the next session, with any dependent probation or promotion waiting too.',
      },
      {
        q: 'Can I clear departmental test papers across different sessions?',
        a: 'Yes. Papers are registered for and passed individually, and a pass stands on its own record. That is why registering for two papers you have prepared well is a better strategy than registering for four you have not — there is no advantage to overloading a single session.',
      },
    ],
  },
]

export default telangana
