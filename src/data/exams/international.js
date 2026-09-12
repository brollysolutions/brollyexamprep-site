/**
 * International exams — /entrance-exams/international/
 *
 * Tests taken for study, registration and migration abroad: the graduate
 * admissions tests (GRE; GMAT lives under /entrance-exams/mba/ and is linked
 * rather than duplicated), the undergraduate tests (SAT, ACT), the
 * professional-school tests (LSAT, UCAT, LNAT), the English tests for
 * admission and visas (IELTS, TOEFL, PTE Academic, Duolingo English Test,
 * CELPIP, OET), and a guide to the student visa process for the US, UK,
 * Canada and Australia. They share a set of properties that distinguish them
 * sharply from Indian entrances — year-round or windowed testing, scores
 * valid for years, retakes permitted, and results sent selectively to
 * institutions — and those properties should change how a candidate plans,
 * not just how they study.
 *
 * The records added in September 2026 (PTE onwards) follow the earlier ones in
 * shape. The visa record is not an examination and carries `resourceLabels`
 * so that its six sub-pages read as a checklist, a comparison, interview
 * questions, rehearsal, a timeline and sources rather than as syllabus and
 * mock tests; ExamDetail honours those labels.
 */

const international = [
  /* ══════════════════════════════════════════════════════════════
     GRE
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'gre',
    path: '/entrance-exams/international/gre/',
    name: 'GRE',
    fullName: 'Graduate Record Examinations General Test',
    authority: 'Educational Testing Service (ETS)',
    official: 'ets.org/gre',
    seoTitle: 'GRE 2026: Shorter Test Format, Sections, Scoring & Strategy',
    metaDescription:
      'GRE exam guide — the shorter test format, verbal, quantitative and analytical writing sections, section-adaptive scoring and preparation.',
    lead: [
      'The GRE General Test is used for admission to graduate programmes worldwide, across the sciences, engineering, humanities and social sciences, and by a growing number of business schools as an alternative to the GMAT. It tests verbal reasoning, quantitative reasoning and analytical writing.',
      'Its shortened format runs under two hours and is section-adaptive: your performance in the first section of each type determines the difficulty of the second. That is a different mechanism from the question-by-question adaptation the GMAT uses, and it has its own strategic consequence — the first section of each pair carries disproportionate weight.',
    ],
    quickFacts: [
      ['Administered by', 'Educational Testing Service (ETS), at 1,000+ test centres in 160+ countries and at home'],
      ['Used for', 'Graduate admission worldwide, and by many business schools in place of the GMAT'],
      ['Format', 'Under two hours — one 30-minute essay, two verbal sections of 12 and 15 questions in 18 and 23 minutes, two quantitative sections of 12 and 15 in 21 and 26'],
      ['Scoring', 'Verbal and quantitative on 130–170 in one-point steps; writing on 0–6 in half points; section-adaptive'],
      ['Fee and results', 'US$249 (₹25,522 on ETS India) from 1 August 2026; scores in the ETS account 8–10 days after the test'],
      ['Validity and retakes', 'Reportable for five years; once every 21 days, up to five times in any rolling 12 months'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The GRE is taken year-round at test centres and at home, with candidates scheduling their own appointment. Scores remain valid for five years and may be sent to institutions selectively, which gives candidates considerably more control over their record than a once-a-year national entrance allows.',
      },
      {
        type: 'p',
        text: 'The test has three measures. Verbal Reasoning tests reading comprehension and the ability to complete texts using precise vocabulary. Quantitative Reasoning tests arithmetic, algebra, geometry and data analysis at a level that rarely exceeds school mathematics but is applied with unusual care. Analytical Writing requires an essay analysing an issue, assessed for the quality of reasoning and expression.',
      },
      {
        type: 'list',
        title: 'What makes the GRE distinctive',
        items: [
          { text: 'Section-adaptive', note: 'the difficulty of the second verbal and second quantitative section depends on your performance in the first of each.' },
          { text: 'Vocabulary matters genuinely', note: 'text completion and sentence equivalence questions turn on precise word meaning in a way few other tests demand.' },
          { text: 'An on-screen calculator', note: 'provided for the quantitative sections, which changes what the section is testing — reasoning rather than computation.' },
          { text: 'Five-year validity and selective reporting', note: 'so a strong score is a durable asset.' },
        ],
      },
      {
        type: 'note',
        title: 'The first section of each pair matters more',
        text: 'Because the test adapts between sections rather than between questions, your performance in the first verbal and first quantitative section determines the difficulty — and therefore the scoring ceiling — of the second. A weak first section caps what the second can recover, which makes a settled start more valuable here than in a fixed-form test.',
      },
    ],
    stages: [
      {
        name: 'Analytical Writing',
        mode: 'One essay task',
        detail:
          'An "Analyze an Issue" task requiring a reasoned position on a general topic, written under time and scored on a 0 to 6 scale for the quality of the argument and the clarity of the writing.',
      },
      {
        name: 'Verbal Reasoning',
        mode: 'Two sections, adaptive between them',
        detail:
          'Reading comprehension, text completion and sentence equivalence questions, testing the ability to analyse written material and to use vocabulary with precision. Scored on a 130 to 170 scale.',
      },
      {
        name: 'Quantitative Reasoning',
        mode: 'Two sections, adaptive between them',
        detail:
          'Arithmetic, algebra, geometry and data analysis, including quantitative comparison questions. An on-screen calculator is provided. Scored on a 130 to 170 scale.',
      },
      {
        name: 'Score reporting',
        mode: 'Selective, valid five years',
        detail:
          'Scores are reported for each measure separately and may be sent to selected institutions. Retakes are permitted after a specified interval, subject to a limit within any twelve-month period.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 on ets.org. The GRE General Test is offered year-round at test centres and at home, and has run in its shortened form since September 2023: one Analyze an Issue essay of 30 minutes, verbal sections of 12 and 15 questions in 18 and 23 minutes, and quantitative sections of 12 and 15 questions in 21 and 26 minutes, with no unscored section — just under two hours in all. Fees effective 1 August 2026 are US$249 everywhere except China, which ETS India shows as ₹25,522; rescheduling and a centre change cost $55, each additional score report $40, and a fee-reduction voucher brings the test to $100 for those who qualify. Official scores appear in the ETS account eight to ten days after the test and are reportable for five years; the test may be taken once every 21 days and at most five times in a rolling 12-month period.',
      },
      {
        type: 'table',
        caption: 'The current facts, from ETS at the date checked.',
        head: ['Item', 'Detail'],
        rows: [
          ['Structure', 'Analytical Writing, one task, 30 minutes; Verbal Reasoning, 12 questions in 18 minutes then 15 in 23; Quantitative Reasoning, 12 in 21 then 15 in 26'],
          ['Adaptivity', 'Section-level: the second verbal and second quantitative section are chosen by performance on the first of each'],
          ['Scale', '130–170 for verbal and quantitative; 0–6 for writing'],
          ['Fee', 'US$249 from 1 August 2026 outside China; ₹25,522 on the ETS India site; $55 to reschedule or change centre; $40 per additional score report; $60 for a writing score review'],
          ['Results', '8–10 days after the test; ScoreSelect lets you choose which test dates to send'],
          ['Validity', 'Five years from the test date'],
          ['Retakes', 'Once every 21 days; five times in any rolling 12 months, including tests whose scores were cancelled'],
          ['Where', '1,000+ test centres in 160+ countries, or at home under proctoring'],
        ],
      },
      {
        type: 'links',
        title: 'Check ETS directly',
        items: [
          { label: 'ETS — GRE test structure', href: 'https://www.ets.org/gre/test-takers/general-test/prepare/test-structure.html' },
          { label: 'ETS — GRE fees', href: 'https://www.ets.org/gre/test-takers/general-test/register/fees.html' },
          { label: 'ETS India — GRE fees in rupees', href: 'https://www.in.ets.org/gre/test-takers/general-test/register/fees.html' },
          { label: 'ETS — getting your GRE scores', href: 'https://www.ets.org/gre/test-takers/general-test/scores/get-scores.html' },
          { label: 'ETS — GRE registration and retake rules', href: 'https://www.ets.org/gre/test-takers/general-test/register.html' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against ETS’s GRE test-structure, fees, score-release and registration pages, and the ETS India fee page for the rupee figure. Fees are stated by ETS as effective 1 August 2026 and subject to change; confirm at registration.',
      },
      {
        type: 'links',
        title: 'Official pages',
        items: [
          { label: 'ETS — GRE test structure', href: 'https://www.ets.org/gre/test-takers/general-test/prepare/test-structure.html' },
          { label: 'ETS — GRE fees', href: 'https://www.ets.org/gre/test-takers/general-test/register/fees.html' },
          { label: 'ETS India — GRE fees', href: 'https://www.in.ets.org/gre/test-takers/general-test/register/fees.html' },
          { label: 'ETS — getting your GRE scores', href: 'https://www.ets.org/gre/test-takers/general-test/scores/get-scores.html' },
          { label: 'ETS — learn about the GRE', href: 'https://www.ets.org/gre/test-takers/general-test/about.html' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'GRE syllabus — verbal reasoning question types, quantitative content and the analytical writing task.',
        lead: [
          'The GRE has no syllabus in the Indian sense. It has question types and a level, and understanding the question types is most of what preparation means.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Verbal Reasoning — Reading Comprehension',
                'Passages drawn from the humanities, social sciences and physical sciences, with questions on the main idea, inference, the author’s assumptions and purpose, the function of a sentence within the argument, and the meaning of words in context. Passages are dense and often deliberately unfamiliar.',
              ],
              [
                'Verbal Reasoning — Text Completion',
                'Passages with one to three blanks, each requiring a word selected from a list. Where there are multiple blanks, all must be correct for credit, which makes these questions unforgiving. They turn on understanding the logical structure of the sentence as much as on vocabulary.',
              ],
              [
                'Verbal Reasoning — Sentence Equivalence',
                'A single sentence with one blank and six options, from which two must be selected that both complete the sentence and produce sentences alike in meaning. Both must be correct for credit. Precise vocabulary knowledge is unavoidable here.',
              ],
              [
                'Quantitative Reasoning',
                'Arithmetic covering integers, fractions, percentages, ratios, exponents and roots; algebra covering expressions, equations, inequalities, functions and coordinate geometry; geometry covering lines, angles, triangles, circles, polygons and three-dimensional figures; and data analysis covering statistics, probability, distributions and the interpretation of graphs. Quantitative comparison questions, which ask you to compare two quantities rather than compute a value, are a distinctive type worth practising separately.',
              ],
              [
                'Analytical Writing',
                'An issue task presenting a general claim and asking for a reasoned position. Scored on the quality of the argument, the use of relevant examples, the organisation of the response and the control of standard written English — not on which position you take.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'For Indian candidates the quantitative section is usually the easier half, since its mathematics rarely exceeds what an Indian school syllabus covers. The verbal section is the harder one, and specifically its vocabulary component — text completion and sentence equivalence questions require knowing words precisely rather than approximately, and that is genuinely a months-long project.',
          },
          {
            type: 'list',
            title: 'What the verbal question types actually demand',
            items: [
              { text: 'Text completion tests logic before vocabulary', note: 'the blanks are determined by the structure of the sentence — a contrast, a consequence, a restatement. Candidates who read for the missing word rather than for the logical relationship guess between plausible synonyms.' },
              { text: 'Sentence equivalence requires two answers that mean the same thing', note: 'not two answers that both fit. That distinction eliminates most wrong pairs immediately and is the single most useful piece of technique in the section.' },
              { text: 'Reading comprehension is short and dense', note: 'passages are often a single paragraph with one question, which rewards close reading rather than skimming for a located fact.' },
              { text: 'Vocabulary is tested in context, not in isolation', note: 'which is why word lists memorised without usage transfer poorly. The test asks how a word functions in a sentence, not what a dictionary says it means.' },
            ],
          },
          {
            type: 'p',
            text: 'For most Indian candidates the quantitative section requires familiarity rather than study — the mathematics rarely exceeds what a class 10 or 11 student has covered, and there is no calculus. What does need practice is the quantitative comparison question type, which appears nowhere in Indian examinations and rewards recognising when a comparison cannot be determined from the information given rather than computing both quantities.',
          },
          {
            type: 'note',
            title: 'The analytical writing task is scored on argument, not prose',
            text: 'The issue task rewards a clear position, developed reasoning and relevant examples far more than elegant sentences. Candidates who write beautifully and argue loosely score below candidates who argue tightly in plain prose — which is worth knowing before spending preparation time on style.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'GRE exam pattern — the shorter format, section-adaptive scoring, the calculator and score reporting.',
        lead: [
          'Under two hours, three measures, and adaptation between sections rather than between questions.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'GRE General Test structure. Confirm current section lengths and question counts on the official site, as the format was shortened.',
            head: ['Measure', 'Format', 'Scoring'],
            rows: [
              ['Analytical Writing', 'One "Analyze an Issue" essay', '0–6 in half-point increments'],
              ['Verbal Reasoning', 'Two sections, adaptive between them', '130–170 in one-point increments'],
              ['Quantitative Reasoning', 'Two sections, adaptive between them', '130–170 in one-point increments'],
            ],
          },
          {
            type: 'p',
            text: 'Section-level adaptation means the test decides after your first verbal section which difficulty of second verbal section to give you, and the same for quantitative. Because a higher-difficulty second section permits a higher score, the first section of each pair effectively sets your ceiling. Within a section, however, you may move freely between questions, flag them and return — which the GMAT does not permit in the same way.',
          },
          {
            type: 'list',
            title: 'Practical consequences',
            items: [
              { text: 'Start each measure carefully', note: 'the first section sets the ceiling for the second.' },
              { text: 'Use the within-section freedom', note: 'you can skip and return inside a section, which allows a two-pass approach.' },
              { text: 'There is no penalty for wrong answers', note: 'so nothing should ever be left unanswered.' },
              { text: 'The calculator changes the quantitative section', note: 'it is testing reasoning and setup, not arithmetic. Do not let the calculator slow you down on simple steps.' },
            ],
          },
          {
            type: 'note',
            title: 'Scores are valid for five years and sent selectively',
            text: 'A GRE score remains usable for five years, retakes are permitted after a specified interval subject to a limit in any twelve-month period, and candidates choose which scores to send to which institutions. That combination makes an early attempt genuinely low-risk and a good score a durable asset.',
          },
          {
            type: 'p',
            text: 'Section-level adaptation has a consequence that candidates often meet too late: the first section of each measure sets your ceiling. Perform moderately in the first verbal section and the second will be drawn from an easier pool, which caps the score achievable however well you then do. That makes a settled, careful start considerably more valuable here than in a linear test, and it argues against the common habit of using the opening questions to warm up.',
          },
          {
            type: 'defs',
            items: [
              [
                'The within-section freedom, and how to use it',
                'Unlike a question-adaptive test, the GRE lets you skip and return inside a section. That permits a genuine two-pass approach — answer everything straightforward on the first pass, then return to the rest — which is the correct way to protect the marks you can definitely get.',
              ],
              [
                'The calculator, and what it changes',
                'An on-screen calculator is available in the quantitative section, which tells you what the section is testing: setting a problem up, not computing it. Reaching for the calculator on a step you could do mentally costs seconds and signals that you are solving rather than reasoning.',
              ],
              [
                'No penalty, and what follows',
                'Nothing should ever be left unanswered. Reserve the final seconds of each section for filling anything outstanding, and treat a blank in a practice test as a habit failure rather than a rounding error.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Five years of validity changes the planning',
            text: 'A GRE score remains usable for five years and can be sent selectively to institutions you nominate. That makes an early attempt genuinely low-risk and a planned retake normal rather than exceptional — a very different risk profile from an annual Indian entrance, and one worth exploiting rather than ignoring.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'GRE practice material — why official ETS questions matter and how to use them.',
        lead: [
          'The GRE does not release past papers. Official ETS practice material is the substitute, and it is better than any imitation.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Verbal reasoning questions in particular are difficult to replicate. The precision of GRE vocabulary questions — where two options are both plausible and only one produces the required meaning — is a standard third-party material frequently misses, and practising on approximations teaches approximate judgement. Official material should be the core of your practice.',
          },
          {
            type: 'steps',
            title: 'How to use official material',
            items: [
              { text: 'Work official questions first and most.', note: 'They define the standard of precision the test uses.' },
              { text: 'For every vocabulary question, articulate why the wrong option is wrong.', note: 'Usually it is close in meaning but wrong in connotation or register.' },
              { text: 'Build a personal vocabulary list from your errors.', note: 'Better than a generic word list, because it targets your actual gaps.' },
              { text: 'Practise quantitative comparison questions separately.', note: 'A distinctive type with its own approach.' },
              { text: 'Write essays under time and have them read.', note: 'Analytical writing improves through feedback, not repetition alone.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'GMAT exam guide', to: '/entrance-exams/mba/gmat/' },
              { label: 'TOEFL exam guide', to: '/entrance-exams/international/toefl/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'Why official material is difficult to substitute',
            items: [
              { text: 'The wrong options are constructed to a standard', note: 'GRE distractors are near-synonyms that fail on connotation, register or logical fit. Third-party questions frequently offer wrong answers that are simply wrong, which trains a much cruder discrimination.' },
              { text: 'Difficulty is calibrated against real performance', note: 'rather than against an author’s estimate, which matters when you are trying to judge whether you are ready.' },
              { text: 'Passage register is characteristic', note: 'the density and subject range of GRE reading passages are distinctive, and imitations tend to be either easier or artificially obscure.' },
              { text: 'Quantitative comparison is often reproduced badly', note: 'the question type depends on precise sufficiency logic, and poorly written versions teach the wrong instinct about when something cannot be determined.' },
            ],
          },
          {
            type: 'p',
            text: 'For every vocabulary question you get wrong, write down why the option you chose fails rather than what the correct word means. The failure is usually specific — the word carries the wrong connotation, or it fits the sentence but not the contrast the sentence sets up — and naming it is what builds the discrimination the test rewards. A list of definitions built from your errors teaches much less than a list of distinctions.',
          },
          {
            type: 'p',
            text: 'Practise quantitative comparison as its own category rather than mixed into general quantitative work. It is the one question type with no Indian equivalent, and its characteristic trap is a comparison that appears determinate until you consider negative values, fractions or zero. Working thirty of them in a block builds that habit far faster than meeting them occasionally.',
          },
          {
            type: 'note',
            title: 'Build the vocabulary list from your reading, not from a book',
            text: 'Words met in context and recorded with the sentence they appeared in are retained far better than words memorised from a list, and they come with the connotation the test asks about. Twenty words a week gathered this way over three months outperforms a thousand-word list worked through in a fortnight.',
          },
        ],
      },
      'mock-tests': {
        description:
          'GRE practice tests — section-adaptive full-length practice with attention to the first section of each measure.',
        lead: [
          'Use official adaptive practice tests. Only they reproduce the section-level adaptation that determines your ceiling.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A fixed-difficulty practice test cannot reproduce section-level adaptation, and therefore cannot tell you what you would score. Official ETS practice tests can, and they should be spaced through the preparation rather than clustered at the end — each one usefully redirects the weeks that follow.',
          },
          {
            type: 'list',
            title: 'What to analyse',
            items: [
              { text: 'Performance in the first section of each measure', note: 'it sets the ceiling for the second, so a weak start is expensive.' },
              { text: 'Vocabulary errors specifically', note: 'separate from comprehension errors; they need a different remedy.' },
              { text: 'Quantitative errors from misreading', note: 'the mathematics is rarely the difficulty for Indian candidates; careless reading often is.' },
              { text: 'Blanks — always zero', note: 'there is no penalty for a wrong answer.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
          {
            type: 'steps',
            title: 'Getting value from adaptive practice tests',
            items: [
              { title: 'Use official adaptive tests for score prediction', text: 'Only they reproduce section-level adaptation. A fixed-difficulty test tells you about your accuracy and nothing about the score you would receive.' },
              { title: 'Space them across the preparation', text: 'The supply is limited and each is a scarce measurement. Clustering them in the final fortnight wastes the diagnostic value they were meant to provide.' },
              { title: 'Review the first section of each measure separately', text: 'It sets the ceiling, so a pattern of slow starts is worth more attention than an equivalent number of errors later.' },
              { title: 'Separate vocabulary errors from comprehension errors', text: 'They need different remedies — one is a discrimination problem, the other a reading problem — and a combined verbal score hides which you have.' },
              { title: 'Confirm blanks are zero', text: 'No penalty applies. A single unanswered question means the final-seconds habit is not yet automatic.' },
            ],
          },
          {
            type: 'p',
            text: 'Look specifically at quantitative errors caused by misreading rather than by mathematics. For Indian candidates this category usually dominates — the content is familiar, so the errors come from reading the question quickly, missing a condition, or answering a slightly different question from the one asked. That is a behaviour finding with a behavioural fix, and it is often worth several points.',
          },
          {
            type: 'note',
            title: 'Get the essay read by someone honest',
            text: 'Analytical writing improves through critique rather than repetition, and the failure modes — a position that drifts, examples that do not support the claim, a conclusion that restates the introduction — are invisible from the inside. Six essays with feedback will do more than twenty written and self-assessed.',
          },
        ],
      },
      preparation: {
        description:
          'GRE preparation strategy — building vocabulary over months, mastering the quantitative section and practising the essay.',
        lead: [
          'For most Indian candidates, GRE preparation is a vocabulary project with a quantitative revision attached.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The quantitative section rarely exceeds Indian school mathematics, so an Indian candidate usually needs revision rather than learning there. The verbal section is a different matter: text completion and sentence equivalence questions demand knowing words precisely, including connotation and register, and that is a genuinely months-long accumulation that cannot be compressed.',
          },
          {
            type: 'steps',
            title: 'A three to six month plan',
            items: [
              { text: 'From day one — vocabulary, every day, in context.', note: 'Not word lists memorised in isolation but words met in reading and recorded with their usage. The single longest-lead component.' },
              { text: 'From day one — read dense non-fiction daily.', note: 'GRE passages are deliberately unfamiliar; reading widely is what makes them navigable.' },
              { text: 'Months one to two — quantitative revision.', note: 'Arithmetic, algebra, geometry and data analysis. Revision rather than learning for most Indian candidates.' },
              { text: 'From month two — quantitative comparison practice.', note: 'A distinctive question type that rewards a specific approach.' },
              { text: 'From month two — one timed essay a week.', note: 'With feedback from someone who will be honest about the argument.' },
              { text: 'From month three — official adaptive practice tests, spaced.', note: 'Every three or four weeks, each redirecting what follows.' },
              { text: 'Plan for a possible retake.', note: 'Scores are valid five years and sent selectively; an early attempt is low-risk.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates high scorers',
            items: [
              { text: 'Vocabulary built in context over months', note: 'rather than lists memorised in weeks.' },
              { text: 'A genuine reading habit', note: 'which serves comprehension, vocabulary and the essay together.' },
              { text: 'Care in the first section of each measure', note: 'section-level adaptation makes a settled start valuable.' },
              { text: 'Official practice material', note: 'the precision of GRE questions is hard to replicate.' },
              { text: 'Essay practice with feedback', note: 'analytical writing improves through critique, not repetition.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The vocabulary project — the long pole',
                'Built in context over months rather than memorised in weeks. This is the component that cannot be compressed, which makes it the reason to start early, and the reason a candidate with three months and a reading habit outperforms one with six weeks and a word list.',
              ],
              [
                'The quantitative revision — short and specific',
                'Familiarity with the framing and with quantitative comparison, rather than new mathematics. For most Indian candidates a few weeks is genuinely sufficient, and extending it is a common misallocation.',
              ],
              [
                'The essay practice — weekly, with feedback',
                'One timed essay a week from month two, read by someone who will be blunt. Small in time and disproportionate in return, because most candidates do none of it.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A daily reading habit is the single highest-return activity in a GRE preparation, and it is worth being deliberate about what you read. Dense argumentative non-fiction — long-form journalism, essays, academic writing for a general audience — supplies vocabulary in context, builds comprehension speed on unfamiliar registers, and gives you the examples and framing the analytical writing task rewards. Three components served by one habit.',
          },
          {
            type: 'note',
            title: 'Plan the retake into the schedule',
            text: 'Retakes are permitted after a specified interval, scores are valid for five years, and reporting is partly within your control. Treating the first attempt as a real but recoverable measurement removes a great deal of pressure and usually produces a better result — and if it does not, the second attempt is already in the calendar rather than an emergency.',
          },
        ],
      },
      'study-material': {
        description:
          'GRE study material — vocabulary and reading practice, plus quantitative revision notes.',
        lead: [
          'Official ETS material at the core, with these notes for quantitative revision and general English work.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Official ETS guides and question banks should be the core of GRE preparation, because the precision of the questions is what the test measures. The notes here support the quantitative revision that most Indian candidates need rather than learn, and the general English work — grammar, vocabulary and comprehension — that underpins the verbal section.',
          },
          {
            type: 'links',
            title: 'Supporting notes',
            items: [
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Verbal ability and reading comprehension', to: '/study-material/varc/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'GMAT exam guide', to: '/entrance-exams/mba/gmat/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine',
            items: [
              'Twenty new words a week, met in reading and recorded with their usage rather than memorised from a list.',
              'One dense non-fiction article read closely — the same habit serves comprehension and the essay.',
              'Twenty quantitative questions, including quantitative comparison.',
              'One timed essay a week from month two, with honest feedback.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Official ETS material — the core',
                'Guides and question banks from the test maker. The precision of GRE verbal questions is genuinely hard to imitate, and practice on approximate questions builds an approximate discrimination.',
              ],
              [
                'A personal vocabulary document — the second core source',
                'Words met in reading, recorded with the sentence and with a note on connotation. Built by you, revised weekly, and worth more than any published list because it carries context.',
              ],
              [
                'Dense non-fiction — the daily habit',
                'Essays, long-form journalism and academic writing for general readers. It is preparation rather than enrichment for a test that examines reading, vocabulary in context and written argument.',
              ],
              [
                'Quantitative revision notes — supporting',
                'Arithmetic, algebra, geometry and data interpretation at a level below Indian class 12. Useful for refreshing framing and for quantitative comparison, and not a subject to rebuild.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Record words with their usage rather than their definition. A GRE vocabulary question asks which word fits a particular logical and tonal slot, which means knowing that a word means roughly disapproval is not enough — you need to know whether it is mild or severe, formal or colloquial, and what it is usually applied to. A sentence captures all of that; a definition captures none of it.',
          },
          {
            type: 'note',
            title: 'Practise on screen, with the on-screen calculator',
            text: 'The test is delivered on a computer with its own calculator and its own navigation. Practising on paper builds a workflow you cannot use, and candidates regularly lose time on test day to the mechanics of an interface they met for the first time that morning.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the GRE exam pattern?',
        a: 'Three measures: Analytical Writing with one "Analyze an Issue" essay scored 0 to 6; Verbal Reasoning in two sections scored 130 to 170; and Quantitative Reasoning in two sections scored 130 to 170. The shortened test runs under two hours. It is section-adaptive — your performance in the first verbal and first quantitative section determines the difficulty of the second of each — and an on-screen calculator is provided for the quantitative sections. Confirm current section lengths on the official site.',
      },
      {
        q: 'How does GRE section-adaptive scoring work?',
        a: 'The test adapts between sections rather than between questions. After your first verbal section it selects the difficulty of your second verbal section, and the same for quantitative. Because a higher-difficulty second section permits a higher score, the first section of each pair effectively sets your ceiling, which makes a settled, careful start more valuable than in a fixed-form test. Within any section you can move freely between questions, flag them and return.',
      },
      {
        q: 'Is the GRE quantitative section hard for Indian candidates?',
        a: 'Generally less so than the verbal section. The mathematics rarely exceeds what an Indian school syllabus covers, so most Indian candidates need revision rather than learning there. What does need practice is the quantitative comparison question type, which asks you to compare two quantities rather than compute a value and rewards a specific approach, and careful reading — errors in this section more often come from misreading than from mathematics.',
      },
      {
        q: 'How important is vocabulary for the GRE?',
        a: 'Central, and it is the longest-lead component of the preparation. Text completion and sentence equivalence questions turn on knowing words precisely — including connotation and register — because the wrong options are frequently close in meaning and wrong only in nuance. That precision accumulates over months through reading and recording words in context, and it responds poorly to memorising lists in the final weeks.',
      },
      {
        q: 'How long is a GRE score valid?',
        a: 'Five years, and scores may be sent to institutions selectively, with retakes permitted after a specified interval subject to a limit within any twelve-month period. That combination makes an early attempt genuinely low-risk — a disappointing score need not be reported — and makes a good score a durable asset usable across several application cycles.',
      },
      {
        q: 'What does the GRE cost in India and how often can it be taken?',
        a: 'US$249 from 1 August 2026, which the ETS India site shows as ₹25,522, with $55 to reschedule and $40 for each additional score report. The test can be taken once every 21 days and up to five times in any rolling 12-month period, and scores are reportable for five years.',
      },
      {
        q: 'How long is the GRE and when do scores come?',
        a: 'Just under two hours: a 30-minute essay, two verbal sections of 12 and 15 questions in 18 and 23 minutes, and two quantitative sections of 12 and 15 questions in 21 and 26 minutes, with no unscored section since the 2023 shortening. Official scores appear in the ETS account eight to ten days after the test.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     IELTS
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ielts',
    path: '/entrance-exams/international/ielts/',
    name: 'IELTS',
    fullName: 'International English Language Testing System',
    authority: 'British Council, IDP: IELTS Australia and Cambridge',
    official: 'ielts.org',
    seoTitle: 'IELTS 2026: Academic vs General, Band Scores & Strategy',
    metaDescription:
      'IELTS exam guide — Academic and General Training modules, the four skills, band scoring, the speaking test and preparation strategy.',
    lead: [
      'IELTS assesses English proficiency across four skills — listening, reading, writing and speaking — and is accepted for study, work and migration in the United Kingdom, Australia, Canada, New Zealand and increasingly elsewhere. It comes in two versions, and choosing the wrong one is a costly mistake.',
      'The Academic module is for university admission; General Training is for migration and certain work and training purposes. The listening and speaking components are identical between them, but the reading and writing components differ substantially, and a test taken in the wrong module cannot be repurposed.',
    ],
    quickFacts: [
      ['Administered by', 'British Council, IDP: IELTS Australia and Cambridge University Press & Assessment, at 4,500+ locations in 160+ countries'],
      ['Modules', 'Academic for university admission and professional registration; General Training for migration and work; UKVI versions for UK visas'],
      ['Format', '2 hours 45 minutes — Listening about 30 minutes, Reading 60, Writing 60, Speaking 11–14 with an examiner; on paper, on computer, or online'],
      ['Scoring', 'Band scores 0–9 in half bands per skill and overall'],
      ['Results', 'On computer, most within two days — one to two days in India; on paper, seven days in India, 13 for UKVI paper'],
      ['Fee and validity', '₹19,000 in India in 2026; scores valid two years; One Skill Retake within 60 days on computer'],
    ],
    overview: [
      {
        type: 'p',
        text: 'IELTS is one of the two most widely accepted English proficiency tests for international study and migration. It reports a band score from 1 to 9 for each of the four skills and an overall band, and institutions and immigration authorities set minimum requirements both overall and, frequently, for individual skills.',
      },
      {
        type: 'p',
        text: 'That per-skill requirement is worth noticing early. A candidate with a strong overall band but a weak writing band may fail to meet a requirement that a more balanced candidate with the same overall score satisfies. Balance across the four skills matters more than the overall figure suggests.',
      },
      {
        type: 'list',
        title: 'The four components',
        items: [
          { text: 'Listening', note: 'four recorded sections of increasing difficulty, played once only, with questions answered as you listen. Identical across both modules.' },
          { text: 'Reading', note: 'three sections. Academic uses long passages from journals and books; General Training uses workplace and social texts of increasing complexity.' },
          { text: 'Writing', note: 'two tasks. Academic asks for a description of a chart or diagram and an essay; General Training asks for a letter and an essay.' },
          { text: 'Speaking', note: 'a face-to-face or video interview in three parts — introduction, a long turn on a given topic, and a discussion. Identical across both modules.' },
        ],
      },
      {
        type: 'note',
        title: 'The speaking test is a real conversation, not a recording',
        text: 'Unlike TOEFL, where speaking responses are recorded, IELTS speaking is an interview with a certified examiner. That suits some candidates and unsettles others, and it is a genuine consideration when choosing between the two tests. It also means the assessment covers interaction — responding to follow-up questions, developing a point when prompted — rather than only prepared delivery.',
      },
    ],
    stages: [
      {
        name: 'Listening',
        mode: 'About 30 minutes plus transfer time',
        detail:
          'Four sections of recorded material — conversations and monologues in social and academic contexts — of increasing difficulty, played once only. Identical in both the Academic and General Training modules.',
      },
      {
        name: 'Reading',
        mode: '60 minutes',
        detail:
          'Three sections. The Academic module uses long passages from books, journals and newspapers written for a non-specialist audience; General Training uses notices, advertisements, workplace documents and general-interest texts of increasing complexity.',
      },
      {
        name: 'Writing',
        mode: '60 minutes, two tasks',
        detail:
          'Academic Task 1 requires describing a graph, table, chart or diagram in at least 150 words; General Training Task 1 requires a letter. Task 2 in both modules is an essay of at least 250 words responding to a point of view or argument. Task 2 carries more weight than Task 1.',
      },
      {
        name: 'Speaking',
        mode: '11 to 14 minutes, in three parts',
        detail:
          'Part 1 is an introduction and questions on familiar topics; Part 2 is a long turn of one to two minutes on a topic given on a card, after a minute of preparation; Part 3 is a discussion developing the Part 2 theme. Conducted with a certified examiner.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 on ielts.org and IDP India. The test runs year-round on paper and on computer at centres across India, and online in many countries; the format and the 2 hours 45 minutes are the same in every mode. Results on computer are the fastest — 80 per cent within two days globally, one to two days in India — with paper results in seven days and UKVI paper in 13. The 2026 fee in India is ₹19,000. A candidate who misses a target in one skill can book IELTS One Skill Retake once, within 60 days of a computer-based test, and receive a new report combining the four scores. IELTS remains the only English test accepted by all four immigration authorities that require one — the UK, Australia, Canada and New Zealand — though the online version is not accepted for every visa route.',
      },
      {
        type: 'table',
        caption: 'The current facts, from IELTS and IDP India at the date checked.',
        head: ['Item', 'Detail'],
        rows: [
          ['Format', 'Listening about 30 minutes; Reading 60 minutes including transfer time; Writing 60 minutes; Speaking 11–14 minutes face to face or by video with an examiner; 2 hours 45 minutes'],
          ['Modes', 'IELTS on paper; IELTS on computer; IELTS Online in many countries; IELTS for UKVI and Life Skills at approved centres'],
          ['Scale', 'Bands 0–9 in half bands per skill; overall is the mean rounded to the nearest half band'],
          ['Fee in India', '₹19,000 in 2026 for Academic and General Training; cancellations forfeit 25 per cent of the fee'],
          ['Results', 'Computer: most within two days; paper: seven days in India; UKVI paper: 13 days; electronic Test Report Form downloadable within two working days'],
          ['One Skill Retake', 'One skill, once, within 60 days of the original computer-based test, where the centre offers it'],
          ['Remark', 'Enquiry on Results within six weeks of the test date; two to three weeks to decide'],
          ['Validity', 'Two years'],
        ],
      },
      {
        type: 'links',
        title: 'Check IELTS directly',
        items: [
          { label: 'IELTS — Academic test format', href: 'https://ielts.org/take-a-test/test-types/ielts-academic-test' },
          { label: 'IELTS — General Training test', href: 'https://ielts.org/take-a-test/test-types/ielts-general-training-test' },
          { label: 'IELTS — fast results', href: 'https://ielts.org/take-a-test/your-results/fast-test-results-and-sharing' },
          { label: 'IELTS — One Skill Retake', href: 'https://ielts.org/take-a-test/booking-your-test/one-skill-retake' },
          { label: 'IELTS — scoring in detail', href: 'https://ielts.org/take-a-test/your-results/ielts-scoring-in-detail' },
          { label: 'IDP India — IELTS test fee', href: 'https://ieltsidpindia.com/information/ielts-test-fee' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against ielts.org’s test-type, results, One Skill Retake and scoring pages, IDP India’s results page for Indian result times, and IDP India’s fee page for the 2026 fee. Fees are reviewed periodically; confirm at booking.',
      },
      {
        type: 'links',
        title: 'Official pages',
        items: [
          { label: 'IELTS — Academic test', href: 'https://ielts.org/take-a-test/test-types/ielts-academic-test' },
          { label: 'IELTS — booking your test', href: 'https://ielts.org/take-a-test/booking-your-test' },
          { label: 'IELTS — your results', href: 'https://ielts.org/take-a-test/your-results' },
          { label: 'IDP India — results', href: 'https://ielts.idp.com/india/results' },
          { label: 'IDP India — test fee', href: 'https://ieltsidpindia.com/information/ielts-test-fee' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'IELTS content — what each of the four skills tests, and how Academic differs from General Training.',
        lead: [
          'There is no syllabus to learn. What there is instead is a set of task types, and knowing them thoroughly is most of the preparation.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Listening',
                'Four recordings — a conversation between two people in an everyday social context, a monologue in a social context, a conversation among up to four people in an educational or training context, and a monologue on an academic subject. Question types include multiple choice, matching, plan and map labelling, form and note completion, sentence completion and short answer. The recording is played once only, which makes following the speaker while writing a specific skill.',
              ],
              [
                'Reading — Academic',
                'Three long passages from books, journals, magazines and newspapers, written for a non-specialist audience on topics of general interest. Question types include multiple choice, identifying information as true, false or not given, identifying the writer’s views, matching headings and features, sentence and summary completion, and diagram labelling.',
              ],
              [
                'Reading — General Training',
                'Section 1 uses everyday texts such as advertisements and notices; Section 2 uses workplace texts such as contracts and staff development material; Section 3 uses a longer text of general interest. The question types are the same as in the Academic module.',
              ],
              [
                'Writing — Academic',
                'Task 1 requires summarising, describing or explaining a graph, table, chart or diagram in at least 150 words. Task 2 requires an essay of at least 250 words responding to a point of view, argument or problem. Both are assessed on task achievement, coherence and cohesion, lexical resource, and grammatical range and accuracy.',
              ],
              [
                'Writing — General Training',
                'Task 1 requires a letter — formal, semi-formal or personal — of at least 150 words responding to a given situation. Task 2 requires an essay of at least 250 words, generally more personal in style than the Academic equivalent.',
              ],
              [
                'Speaking',
                'Part 1 covers familiar topics such as home, family, work and studies. Part 2 gives a topic card and one minute to prepare a one-to-two-minute talk. Part 3 develops the Part 2 theme through discussion. Assessed on fluency and coherence, lexical resource, grammatical range and accuracy, and pronunciation.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The four assessment criteria for writing and speaking are published, and reading them carefully is more useful than most preparation advice. They tell you exactly what the examiner is looking for — task achievement, coherence, lexical range and grammatical accuracy — and a candidate who writes and speaks with those criteria in mind improves faster than one working from general impressions of "good English".',
          },
        ],
      },
      'exam-pattern': {
        description:
          'IELTS exam pattern — the four components, band scoring, module differences and how requirements are set.',
        lead: [
          'Four skills, band scores from 1 to 9, and institutions that frequently set minimums per skill as well as overall.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Test structure. Confirm current timings and delivery options — computer-delivered and paper-based versions are available.',
            head: ['Component', 'Duration', 'Differs by module?'],
            rows: [
              ['Listening', 'About 30 minutes', 'No — identical in both'],
              ['Reading', '60 minutes', 'Yes — different texts and sources'],
              ['Writing', '60 minutes', 'Yes — Task 1 differs substantially'],
              ['Speaking', '11 to 14 minutes', 'No — identical in both'],
            ],
          },
          {
            type: 'p',
            text: 'Band scores run from 1 to 9 in half-band increments, reported for each skill and as an overall average. The critical planning point is that institutions and immigration authorities commonly set a minimum for each individual skill as well as an overall minimum — so a candidate scoring 8, 8, 8 and 5.5 may fail a requirement that a candidate scoring 7 across the board meets comfortably.',
          },
          {
            type: 'list',
            title: 'What to settle before booking',
            items: [
              { text: 'Which module you need', note: 'Academic for university admission, General Training for migration and certain work purposes. They are not interchangeable.' },
              { text: 'The per-skill minimums your target requires', note: 'not just the overall band.' },
              { text: 'Computer-delivered or paper-based', note: 'both are available, with different results timelines and different experiences of the writing task.' },
              { text: 'Validity and timing', note: 'scores are generally valid for two years; plan the test date against your application deadlines.' },
            ],
          },
          {
            type: 'note',
            title: 'Choosing the wrong module cannot be undone',
            text: 'A General Training result does not satisfy a university requirement for Academic IELTS, and the test must be retaken. Since the reading and writing components differ substantially between the modules, this is a mistake that costs both the fee and the preparation time. Confirm which module your destination requires before booking.',
          },
          {
            type: 'p',
            text: 'The per-skill minimum is the detail that most often catches candidates out, and it changes how you should read your own practice scores. A candidate with bands of eight, eight, eight and six has an overall average of seven and a half and may still fail a requirement that specifies six and a half in every skill. Your lowest band, not your average, is the number that determines whether you meet a requirement — and it is the number your final weeks should be aimed at.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why the module choice cannot be undone',
                'A General Training result does not satisfy a university requirement for Academic IELTS. The two differ in the reading texts and substantially in Writing Task 1 — a data description in Academic, a letter in General Training — and preparing for one does not prepare you for the other.',
              ],
              [
                'What computer-delivered changes',
                'The content is the same, but the results timeline is generally shorter and the experience differs: typing rather than handwriting for the writing tasks, and on-screen reading with different navigation. Choose on how you actually work rather than on availability.',
              ],
              [
                'How the bands are awarded in writing and speaking',
                'Against four published criteria rather than by overall impression. Reading them is genuinely the fastest way to understand why a competent piece of writing scores a six rather than a seven, and most candidates never do.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Plan the date against your deadline, not your readiness',
            text: 'Scores are generally valid for two years and results take time to issue, so the booking decision has to account for application deadlines and for the possibility of a retake. Candidates who book late because they do not feel ready frequently leave no room for the second attempt that a marginal band would require.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'IELTS practice material — official past papers, task familiarity and the assessment criteria.',
        lead: [
          'IELTS publishes official practice tests. Working through them is the most direct preparation available.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Unlike most examinations discussed on this site, IELTS preparation is largely about task familiarity rather than knowledge. Official practice tests expose you to every question type — true/false/not given, matching headings, map labelling, summary completion — and each has its own technique. A candidate who has met all of them scores better than an equally proficient candidate who has not.',
          },
          {
            type: 'steps',
            title: 'How to practise each skill',
            items: [
              { text: 'Listening — practise with the recording played once only.', note: 'Replaying it defeats the purpose. Following while writing is the skill.' },
              { text: 'Reading — practise the true/false/not given questions specifically.', note: 'The distinction between "false" and "not given" is where most marks are lost.' },
              { text: 'Writing — write to the assessment criteria, timed.', note: 'And have your work read by someone who can apply those criteria.' },
              { text: 'Speaking — practise aloud with a partner or recording.', note: 'Silent rehearsal does not build fluency; speaking does.' },
              { text: 'Practise Part 2 with the one-minute preparation.', note: 'Structuring a two-minute talk from one minute of notes is a specific skill.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'TOEFL exam guide', to: '/entrance-exams/international/toefl/' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
            ],
          },
          {
            type: 'list',
            title: 'The task types that most repay specific practice',
            items: [
              { text: 'True, false and not given', note: 'the largest single source of lost reading marks. Not given means the passage does not address the claim; false means it contradicts it. Candidates who reason about what is probably true rather than what the text states lose marks systematically here.' },
              { text: 'Matching headings and matching information', note: 'both reward locating the main idea of a paragraph quickly rather than reading closely, which is a different skill from the one comprehension usually builds.' },
              { text: 'Academic Writing Task 1 — describing data', note: 'a formulaic task with a recognisable structure: overview first, then the significant comparisons. Learning the structure is most of the score.' },
              { text: 'Speaking Part 2 — the long turn', note: 'one minute to prepare and up to two minutes to speak. The preparation minute is what makes the difference, and it has to be practised as part of the task.' },
            ],
          },
          {
            type: 'p',
            text: 'Practise listening with the recording played once and no pausing, from the first session. It is tempting to replay a section you missed, and it builds exactly the wrong habit — the test plays each recording once, and the skill being examined is partly the ability to keep going after you have lost a detail rather than stopping to recover it.',
          },
          {
            type: 'p',
            text: 'For writing, practise against the assessment criteria rather than against a model answer. Task achievement, coherence and cohesion, lexical resource and grammatical range and accuracy are what the examiner scores, and a piece can read well while failing one of them — most commonly coherence, where paragraphs are competent individually and do not build. Checking your own work against four named criteria is more useful than comparing it to a sample.',
          },
          {
            type: 'note',
            title: 'Speak aloud, from the first week',
            text: 'The speaking test is an interaction with an examiner, and fluency is built by speaking rather than by planning to speak. Practising with a partner, or recording yourself and listening back, is uncomfortable and effective — and it is the component candidates most consistently prepare for silently, which does not work.',
          },
        ],
      },
      'mock-tests': {
        description:
          'IELTS practice tests — full four-skill practice with attention to the weakest band.',
        lead: [
          'Practise all four skills, and track your weakest band rather than your average. It is usually the one that decides your outcome.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because requirements are frequently set per skill, your lowest band matters more than your average. A candidate who practises reading and listening — which are easy to self-assess — and neglects writing and speaking, which are not, typically discovers this after the result. Building the harder-to-assess skills requires someone else’s feedback, and arranging that is part of the preparation.',
          },
          {
            type: 'list',
            title: 'What to work on',
            items: [
              { text: 'Your weakest skill first', note: 'per-skill minimums mean it constrains the outcome.' },
              { text: 'Writing with external feedback', note: 'self-assessment of writing is unreliable; the criteria need an experienced reader.' },
              { text: 'Speaking practice aloud, regularly', note: 'fluency is built by speaking, and the test is an interaction rather than a delivery.' },
              { text: 'Listening under single-play conditions', note: 'exactly as the test presents it.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A practice routine across four skills',
            items: [
              { title: 'Take full tests in one sitting', text: 'Listening, reading and writing run back to back in the real test. Practising them separately never rehearses the concentration that the writing tasks meet at the end.' },
              { title: 'Score each skill separately and watch the lowest', text: 'Per-skill minimums mean your weakest band determines your outcome. Tracking an average hides exactly the number that matters.' },
              { title: 'Get writing read by an experienced reader', text: 'Self-assessment against the criteria is unreliable, particularly for lexical resource and coherence. One informed reader is worth many self-marked attempts.' },
              { title: 'Record speaking and listen back', text: 'For pace, filler words, and whether you developed your point or restated it. Uncomfortable and the fastest route to a better band.' },
              { title: 'Check word counts every time', text: 'Writing below the minimum carries a mechanical penalty regardless of quality, and it is an entirely avoidable loss.' },
            ],
          },
          {
            type: 'p',
            text: 'Give the final fortnight almost entirely to your weakest skill. It is unsatisfying — practising what you are worst at rarely feels productive — and it is where the marginal band is available. A candidate spending the last two weeks polishing an already strong reading band while a weak writing band sits below the requirement is optimising the wrong number.',
          },
          {
            type: 'note',
            title: 'Practise in the delivery mode you booked',
            text: 'Computer-delivered and paper-based IELTS differ in how you read, annotate and write. If you have booked the computer-delivered test, type your writing practice and read your practice passages on screen — the habits of underlining and margin notes do not transfer, and discovering that on test day costs time in a paper that gives you none.',
          },
        ],
      },
      preparation: {
        description:
          'IELTS preparation — building the four skills, using the assessment criteria and choosing the right module.',
        lead: [
          'Read the assessment criteria first. They tell you exactly what is being scored, and most candidates never look at them.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'IELTS writing and speaking are assessed against four published criteria — task achievement or response, coherence and cohesion, lexical resource, and grammatical range and accuracy. A candidate who writes with those in mind, deliberately varying sentence structure and vocabulary and organising the response clearly, improves considerably faster than one relying on a general sense of writing well.',
          },
          {
            type: 'steps',
            title: 'A six to twelve week plan',
            items: [
              { text: 'Week one — confirm the module and the per-skill minimums you need.', note: 'Academic or General Training, and the bands your destination requires.' },
              { text: 'Week one — read the assessment criteria for writing and speaking.', note: 'They define what you are being scored on.' },
              { text: 'Weeks one to three — task familiarity across all four skills.', note: 'Meet every question type at least once before practising for score.' },
              { text: 'Throughout — speak English aloud daily.', note: 'With a partner if possible, recorded if not. Fluency builds only through speaking.' },
              { text: 'Throughout — write one full task of each type weekly.', note: 'Timed, to the word minimums, with feedback.' },
              { text: 'Weeks three to six — full practice tests.', note: 'With listening played once only and writing timed strictly.' },
              { text: 'Final weeks — work only on your weakest skill.', note: 'It is the one likely to constrain your result.' },
            ],
          },
          {
            type: 'list',
            title: 'Where candidates lose bands',
            items: [
              { text: 'Taking the wrong module', note: 'General Training does not satisfy an Academic requirement.' },
              { text: 'Writing under the word minimum', note: 'a mechanical penalty that costs marks regardless of quality.' },
              { text: 'Confusing "false" with "not given"', note: 'in reading, the single most common source of lost marks.' },
              { text: 'Never speaking aloud in practice', note: 'the speaking test is an interaction, and silent preparation does not build fluency.' },
              { text: 'Ignoring the weakest skill', note: 'per-skill minimums mean it decides the outcome.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Task familiarity — the first three weeks',
                'Knowing exactly what each task asks and how it is scored. This is where the fastest gains sit, because a competent English speaker who does not know what "not given" means, or what Task 1 wants, loses marks for reasons that have nothing to do with their English.',
              ],
              [
                'Underlying proficiency — the longer project',
                'Reading, listening and speaking ability built over months. It improves more slowly and it sets the ceiling that task familiarity lets you reach.',
              ],
              [
                'The weakest skill — the final weeks',
                'Whichever of the four your practice tests keep identifying. Per-skill minimums make it the binding constraint, and it deserves disproportionate attention at the end.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Read the assessment criteria for writing and speaking before you write or speak anything. They are published, they are short, and they specify exactly what an examiner is looking for — task response, coherence and cohesion, lexical resource, and grammatical range and accuracy. Candidates routinely prepare for months without reading them and then wonder why a fluent, well-written response scored a band lower than expected.',
          },
          {
            type: 'note',
            title: 'Confirm the module and the minimums in week one',
            text: 'Which module you need and what per-skill minimums your target institution or visa route requires are both administrative facts that take ten minutes to establish and that determine everything else. Preparing for the wrong module, or aiming at an overall band while a per-skill minimum sits above your weakest skill, are failures of planning rather than of English.',
          },
        ],
      },
      'study-material': {
        description:
          'IELTS study material — English grammar, vocabulary and comprehension notes to support the four skills.',
        lead: [
          'Official practice material for task familiarity, plus general English work to raise the underlying proficiency.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'IELTS preparation has two halves. Task familiarity comes from official practice tests and cannot come from anywhere else. Underlying proficiency — vocabulary range, grammatical accuracy, reading speed, listening comprehension — comes from ordinary English study and, above all, from using the language daily. The notes below support the second half.',
          },
          {
            type: 'links',
            title: 'Supporting notes',
            items: [
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Reading comprehension', to: '/study-material/varc/' },
              { label: 'TOEFL exam guide', to: '/entrance-exams/international/toefl/' },
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine',
            items: [
              'Speak English aloud for fifteen minutes — with someone if possible, recorded if not.',
              'Read an article and summarise it in your own words, aloud and then in writing.',
              'Listen to a podcast or lecture and take notes while listening, without pausing.',
              'Write one full task a week to the word minimum, timed, with feedback.',
              'Build vocabulary through use rather than lists — the criteria reward range in context.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Official practice tests — for task familiarity',
                'The only reliable source for what each task actually looks like and how it is worded. This half of the preparation cannot come from general English material at all.',
              ],
              [
                'The published assessment criteria — the most under-read document',
                'Four criteria for writing and four for speaking, in plain language. Reading them changes how you practise, and they take fifteen minutes.',
              ],
              [
                'General English work — for the proficiency underneath',
                'Grammar for accuracy, vocabulary for range, and reading and listening for speed. This is the half that sets your ceiling and the half that takes months.',
              ],
              [
                'A speaking partner or a recorder — the missing piece',
                'Fluency is built aloud. Whether that means a partner, a tutor or your own recordings played back, it is the component most candidates omit and the one with the clearest effect on the speaking band.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Build vocabulary through use rather than through lists, because the criteria reward range demonstrated in context. An examiner is assessing whether you can deploy a varied and appropriate vocabulary in a real response, not whether you can recall definitions — which means words practised in your own writing and speaking count for far more than words recognised on a page.',
          },
          {
            type: 'note',
            title: 'Summarise what you read, aloud and then in writing',
            text: 'A single daily habit that feeds three skills: reading for comprehension, speaking for fluency, and writing for structure. Take one article, summarise its argument aloud in a minute, then write the same summary in a paragraph. It costs fifteen minutes and it rehearses exactly the operations the test asks for.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the difference between IELTS Academic and General Training?',
        a: 'The listening and speaking components are identical. The reading and writing components differ substantially: Academic reading uses long passages from books and journals while General Training uses workplace and everyday texts, and Academic Writing Task 1 requires describing a graph or diagram while General Training Task 1 requires a letter. Academic is for university admission and General Training for migration and certain work purposes. They are not interchangeable — a General Training result will not satisfy a university requirement for Academic IELTS.',
      },
      {
        q: 'How is IELTS scored?',
        a: 'On a band scale from 1 to 9 in half-band increments, reported for each of the four skills and as an overall average. The important planning point is that institutions and immigration authorities frequently set a minimum for each individual skill as well as overall — so a candidate scoring 8, 8, 8 and 5.5 may fail a requirement that someone scoring 7 across the board meets comfortably. Your weakest band, not your average, usually decides the outcome.',
      },
      {
        q: 'What is the IELTS speaking test like?',
        a: 'A face-to-face or video interview with a certified examiner, lasting eleven to fourteen minutes in three parts: an introduction with questions on familiar topics; a long turn of one to two minutes on a topic given on a card, after one minute of preparation; and a discussion developing that theme. Because it is a genuine interaction rather than a recorded response, it assesses your ability to respond to follow-up questions and develop a point when prompted — which is one of the main practical differences from TOEFL.',
      },
      {
        q: 'How should I prepare for IELTS writing?',
        a: 'Start by reading the published assessment criteria — task achievement or response, coherence and cohesion, lexical resource, and grammatical range and accuracy — because they tell you exactly what is being scored, and most candidates never look at them. Then write one full task of each type each week, timed and to the word minimums, and have it read by someone who can apply those criteria. Self-assessment of writing is unreliable, which is why external feedback matters more here than in any other component.',
      },
      {
        q: 'How long is an IELTS score valid?',
        a: 'Generally two years, though the accepting institution or authority sets its own rules about how recent a score it will consider. Plan your test date against your application deadlines with that in mind — taking the test very early risks the score expiring before you apply, while leaving it late removes the option of a retake if a per-skill minimum is narrowly missed.',
      },
      {
        q: 'What is the IELTS fee in India and how soon do results come?',
        a: '₹19,000 in 2026 for both Academic and General Training, per IDP India. Results for IELTS on computer arrive in one to two days in India — globally 80 per cent within two days — while paper results take seven days and UKVI paper 13. The electronic Test Report Form can be downloaded within two working days of the result.',
      },
      {
        q: 'What is IELTS One Skill Retake?',
        a: 'A retake of one of the four skills — listening, reading, writing or speaking — booked after a computer-based IELTS and taken within 60 days of the original test, once per original test, at centres that offer it. The new score replaces the old one on a fresh Test Report Form that many institutions and immigration authorities accept; check the organisation’s policy.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     TOEFL — rewritten September 2026 for the redesigned test that ETS
     introduced on 21 January 2026: new task types, an adaptive two-hour
     sitting, and a 1–6 band scale with a comparable 0–120 score during a
     two-year transition. Every figure is from ets.org at the date checked.
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'toefl',
    path: '/entrance-exams/international/toefl/',
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language (iBT)',
    authority: 'Educational Testing Service (ETS)',
    official: 'ets.org/toefl',
    seoTitle: 'TOEFL iBT 2026: New Format, 1–6 Scale, Task Types, Fees & Scores',
    metaDescription:
      'TOEFL iBT guide for the 2026 redesign — four sections, twelve task types, an adaptive two-hour sitting, 1–6 scoring with a 0–120 equivalent, India fee, results.',
    lead: [
      'TOEFL iBT is the English test of ETS, accepted by more than 13,000 institutions in over 160 countries and the most widely used in North American admissions. It is taken on a computer at a test centre or, as the Home Edition, at home under a live proctor, and it is scored centrally rather than by an examiner in the room. From 21 January 2026 it is a different test from the one described in most preparation books: ETS replaced the long academic passages and integrated lecture tasks with twelve shorter task types, made the test adaptive, cut it to about two hours, and moved scoring to a 1–6 band scale aligned to the CEFR.',
      'The four sections remain reading, listening, writing and speaking, but the content now runs from everyday English — completing words, reading a notice, writing an email, repeating what you hear — up to an academic passage, an academic talk and a discussion post, with a recorded interview closing the speaking section. Each section is reported on the 1–6 scale in half bands, the overall score is their average, and until January 2028 the score report also carries a comparable total on the old 0–120 scale so that institutions still quoting the old requirement can read it.',
    ],
    quickFacts: [
      ['Administered by', 'ETS, at test centres and as the TOEFL iBT Home Edition under a live proctor'],
      ['Used for', 'University admission at 13,000+ institutions in 160+ countries, above all in the United States and Canada'],
      ['Format since 21 January 2026', 'Adaptive; about two hours — Reading 50 items in about 30 minutes, Listening 47 in 29, Writing 12 in 23, Speaking 11 in 8'],
      ['Scoring', 'Four section scores and an overall on a 1–6 scale in half bands; a comparable 0–120 total also reported until January 2028'],
      ['Results', 'In the ETS account three days after the test; PDF report a day or two later; MyBest superscores across two years'],
      ['Fee and validity', 'US$173 in India; scores valid two years'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Reading has three task types: Complete the Words, a text with letters missing from words that tests vocabulary and grammar at speed; Read in Daily Life, short practical texts of the kind met on a campus or in a workplace; and Read an Academic Passage, a longer university-level text with comprehension questions. Listening has four: Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement and Listen to an Academic Talk. Writing has three: Build a Sentence, Write an Email and Write for an Academic Discussion, the last carried over from the old test. Speaking has two: Listen and Repeat, and Take an Interview, a recorded simulated interview.',
      },
      {
        type: 'p',
        text: 'The test adapts, so the number of items and the time vary a little from candidate to candidate; ETS gives about 50 reading items in 30 minutes, 47 listening in 29, 12 writing in 23 and 11 speaking in 8, and asks candidates to allow about two hours. Scores are reported on a 1–6 scale for each section and overall, the overall being the average of the four rounded to the nearest half band, and ETS publishes the correspondence with the old scale: an overall 5 sits at 95 and above on the 0–120 total, 5.5 at 107 and above, 4.5 at 86 and above and 4 at 72 and above.',
      },
      {
        type: 'list',
        title: 'What makes the redesigned TOEFL distinctive',
        items: [
          { text: 'Everyday and academic English in one test', note: 'the early tasks in each section are practical and short; the later ones are academic, which is where the old test lived entirely.' },
          { text: 'Adaptive and about two hours', note: 'shorter than IELTS and close to PTE Academic in length, with the difficulty and count of items adjusting as you go.' },
          { text: 'A CEFR-aligned 1–6 scale', note: 'section and overall scores in half bands, with the 0–120 equivalent alongside for two years.' },
          { text: 'Central scoring and a home option', note: 'no examiner at the centre; the Home Edition is the same test with a live human proctor.' },
        ],
      },
      {
        type: 'note',
        title: 'If you prepared for the old TOEFL',
        text: 'Material written before 2026 describes three or four long reading passages, lectures with note-taking, integrated speaking and writing tasks and a 0–30 section score. None of that is on the current test except Write for an Academic Discussion. The reading and listening practice is still useful for the academic passage and the academic talk; the integrated-task drills are not. ETS’s own practice tests are rebuilt for the new format.',
      },
    ],
    stages: [
      {
        name: 'Reading',
        mode: 'About 30 minutes; about 50 items; three task types',
        detail:
          'Complete the Words — restore a text in which letters are missing from some words; Read in Daily Life — short practical texts such as notices, messages and schedules with questions; Read an Academic Passage — a university-level passage with comprehension questions on detail, inference, vocabulary and structure.',
      },
      {
        name: 'Listening',
        mode: 'About 29 minutes; about 47 items; four task types',
        detail:
          'Listen and Choose a Response — pick the reply that fits what was said; Listen to a Conversation — an everyday or campus exchange with questions; Listen to an Announcement — a short public message with questions; Listen to an Academic Talk — a lecture extract with questions on main idea, detail and purpose.',
      },
      {
        name: 'Writing',
        mode: 'About 23 minutes; about 12 items; three task types',
        detail:
          'Build a Sentence — assemble a correct sentence from given parts; Write an Email — a short email to a set purpose and reader; Write for an Academic Discussion — a reasoned post in an online class discussion responding to a professor’s question and other students’ views, the one task retained from the previous test.',
      },
      {
        name: 'Speaking, then scores',
        mode: 'About 8 minutes; about 11 items; two task types; scores three days after the test',
        detail:
          'Listen and Repeat — hear a sentence and say it back; Take an Interview — answer a series of recorded interview questions. Responses are recorded and scored centrally. Section and overall scores on the 1–6 scale, the comparable 0–120 total and MyBest superscores appear in the ETS account three days after the test, with a PDF report a day or two later; scores are valid for two years.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 on ets.org. The redesigned TOEFL iBT has been the only version administered since 21 January 2026; the two-year transition during which score reports carry both the 1–6 and the 0–120 total runs to January 2028, and institutions are still updating their published requirements from one scale to the other. Candidates taking the test for an Australian visa must select “Taking TOEFL for Australia” at registration, a requirement in force since the same date. Registration is year-round at test centres and for the Home Edition, and the fee for India is US$173 excluding taxes.',
      },
      {
        type: 'table',
        caption: 'The current facts, from ETS at the date checked.',
        head: ['Item', 'Detail'],
        rows: [
          ['Format', 'Adaptive; four sections; about two hours; test centre or Home Edition with a live proctor'],
          ['Sections', 'Reading about 50 items / 30 min; Listening 47 / 29; Writing 12 / 23; Speaking 11 / 8'],
          ['Scale', '1–6 per section and overall, in half bands; overall is the rounded average; 0–120 total also reported to January 2028'],
          ['Fee in India', 'US$173; express registration within 7 days $49; rescheduling $69; additional score reports $29 each; speaking or writing rescore $80'],
          ['Results', 'Three days after the test in the ETS account; PDF report 24–48 hours later; MyBest scores combine the best section scores from tests in the last two years'],
          ['Validity', 'Two years'],
          ['Retakes', 'Once every three days; no annual limit'],
        ],
      },
      {
        type: 'table',
        caption: 'ETS’s correspondence between the 1–6 scale and the 0–120 scale, overall and by section.',
        head: ['Band', 'Reading 0–30', 'Listening 0–30', 'Speaking 0–30', 'Writing 0–30', 'Total 0–120'],
        rows: [
          ['6', '29–30', '28–30', '28–30', '29–30', '114+'],
          ['5.5', '27–28', '26–27', '27', '27–28', '107+'],
          ['5', '24–26', '22–25', '25–26', '24–26', '95+'],
          ['4.5', '22–23', '20–21', '23–24', '21–23', '86+'],
          ['4', '18–21', '17–19', '20–22', '17–20', '72+'],
          ['3.5', '12–17', '13–16', '18–19', '15–16', '58+'],
          ['3', '6–11', '9–12', '16–17', '13–14', '44+'],
        ],
      },
      {
        type: 'links',
        title: 'Check ETS directly',
        items: [
          { label: 'ETS — TOEFL iBT test content and structure', href: 'https://www.ets.org/toefl/test-takers/ibt/about/content.html' },
          { label: 'ETS — understanding TOEFL scores', href: 'https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html' },
          { label: 'ETS — getting your scores', href: 'https://www.ets.org/toefl/test-takers/ibt/scores/get-scores.html' },
          { label: 'ETS — registration fees', href: 'https://www.ets.org/toefl/test-takers/ibt/register/fees.html' },
          { label: 'ETS — Home Edition', href: 'https://www.ets.org/toefl/test-takers/ibt/about/testing-options/at-home.html' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against ETS’s TOEFL iBT content and structure page, its score-understanding and score-release pages, the registration fee page with India selected, and the Home Edition page. The 1–6 to 0–120 table is reproduced from ETS. The retake interval is ETS’s standing rule; confirm it and the fee at registration.',
      },
      {
        type: 'links',
        title: 'Official pages',
        items: [
          { label: 'ETS — TOEFL iBT test content and structure', href: 'https://www.ets.org/toefl/test-takers/ibt/about/content.html' },
          { label: 'ETS — understanding TOEFL scores', href: 'https://www.ets.org/toefl/test-takers/ibt/scores/understand-scores.html' },
          { label: 'ETS — getting your scores', href: 'https://www.ets.org/toefl/test-takers/ibt/scores/get-scores.html' },
          { label: 'ETS — registration fees', href: 'https://www.ets.org/toefl/test-takers/ibt/register/fees.html' },
          { label: 'ETS — TOEFL iBT for test takers', href: 'https://www.ets.org/toefl/test-takers/ibt/about.html' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'TOEFL iBT syllabus for the 2026 test — the twelve task types across reading, listening, writing and speaking, what each asks, and how the sections are timed.',
        lead: [
          'TOEFL has task types rather than a syllabus, and since January 2026 there are twelve of them, from a gap-fill to an academic discussion post.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Task types by section, as ETS lists them. Item counts and times are approximate because the test adapts.',
            head: ['Section', 'Task types', 'Items', 'Time'],
            rows: [
              ['Reading', 'Complete the Words; Read in Daily Life; Read an Academic Passage', 'About 50', 'About 30 minutes'],
              ['Listening', 'Listen and Choose a Response; Listen to a Conversation; Listen to an Announcement; Listen to an Academic Talk', 'About 47', 'About 29 minutes'],
              ['Writing', 'Build a Sentence; Write an Email; Write for an Academic Discussion', 'About 12', 'About 23 minutes'],
              ['Speaking', 'Listen and Repeat; Take an Interview', 'About 11', 'About 8 minutes'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Reading',
                'Complete the Words presents a short text with letters removed from words and asks you to restore them — a test of vocabulary, spelling and grammar at reading speed. Read in Daily Life uses short practical texts: a notice, a message, a schedule, a set of instructions. Read an Academic Passage is the descendant of the old reading section — a university-level passage with questions on detail, inference, vocabulary in context and organisation.',
              ],
              [
                'Listening',
                'Listen and Choose a Response plays a short utterance and asks for the reply that fits. Listen to a Conversation and Listen to an Announcement use everyday and campus audio with comprehension questions. Listen to an Academic Talk is a lecture extract with questions on the main idea, supporting detail and the speaker’s purpose. Audio plays once.',
              ],
              [
                'Writing',
                'Build a Sentence gives the parts of a sentence to assemble correctly. Write an Email sets a purpose and a reader and asks for a short, appropriately toned message. Write for an Academic Discussion presents a professor’s question and two students’ posts and asks for a reasoned contribution of your own — the task carried over from the previous test, and the longest piece of writing in the current one.',
              ],
              [
                'Speaking',
                'Listen and Repeat plays a sentence to be said back accurately, testing pronunciation and processing of connected speech. Take an Interview asks a sequence of recorded interview questions to be answered aloud, scored on delivery, language and how fully the question is addressed. There is no examiner; responses are recorded and scored centrally.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'The one task that survived, and why it still matters',
            text: 'Write for an Academic Discussion is the only task shared with the pre-2026 test and the one that most resembles university work: read a question and two positions, take a view, give reasons, and write it in the register of a class forum. It is the task where preparation moves a band most, because the others are short and reward accuracy over development.',
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'ETS — TOEFL iBT test content and structure', href: 'https://www.ets.org/toefl/test-takers/ibt/about/content.html' },
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'PTE Academic guide', to: '/entrance-exams/international/pte/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'TOEFL iBT exam pattern since January 2026 — the adaptive two-hour sitting, section timings, the 1–6 scale and its 0–120 equivalent, MyBest, fees and results.',
        lead: [
          'Two hours, four sections, twelve task types, and a score on 1–6 that comes with its old-scale equivalent for two years.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Section timing as ETS publishes it; directions are not included and the adaptive design varies the count a little.',
            head: ['Section', 'Items', 'Base time', 'Score'],
            rows: [
              ['Reading', 'About 50', 'About 30 minutes', '1–6 in half bands'],
              ['Listening', 'About 47', 'About 29 minutes', '1–6 in half bands'],
              ['Writing', 'About 12', 'About 23 minutes', '1–6 in half bands'],
              ['Speaking', 'About 11', 'About 8 minutes', '1–6 in half bands'],
              ['Overall', '—', 'About two hours', 'Average of the four, rounded to the nearest half band; 0–120 equivalent also shown'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'How the scale works',
                'Each section is scored 1 to 6 in half-band steps, and the overall score is the mean of the four rounded to the nearest half band — an average of 5.125 reports as 5. ETS’s published correspondence puts an overall 5 at 95 or more on the 0–120 total, 5.5 at 107 or more and 6 at 114 or more. Institutions are updating their requirements; where a university still quotes 0–120, the report’s comparable total answers it.',
              ],
              [
                'MyBest scores',
                'The report also shows superscores — the best section scores from all tests taken in the previous two years, combined — which many institutions accept; check the admissions page.',
              ],
              [
                'Delivery',
                'At a test centre, or as the Home Edition on your own computer with a live human proctor. The same test, timing and scoring apply. Some visa authorities do not accept the Home Edition; Australia requires the “Taking TOEFL for Australia” selection at registration.',
              ],
              [
                'Fees and services',
                'US$173 in India, before taxes. Express registration inside seven days of the date is $49, rescheduling $69, each additional score report $29, a speaking or writing rescore $80 or both for $160, express scoring $129.',
              ],
              [
                'Results',
                'Available in the ETS account three days after the test, with the exact date shown at the end of the test and an email when ready; the PDF report follows in 24 to 48 hours. Scores are valid for two years.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'TOEFL iBT practice — ETS’s rebuilt practice tests for the 2026 format, what older material still teaches, and what to take from each attempt.',
        lead: [
          'ETS does not release past papers, and practice material dated before 2026 describes a different test. Use the official practice built for the new format.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'ETS sells TOEFL Practice Online tests scored like the live test, singly or in packs, and publishes free sample questions for each task type. Because the test adapts, the point of a practice test is to learn the twelve task mechanics and to see a scored estimate on the 1–6 scale, not to meet familiar questions. Older books remain useful for academic reading and listening — the academic passage and the academic talk are recognisable descendants — and useless for integrated tasks, which no longer exist.',
          },
          {
            type: 'list',
            title: 'What to take from each practice test',
            items: [
              { text: 'Speed on the short tasks', note: 'Complete the Words, Build a Sentence and Listen and Choose a Response reward fast, accurate processing; hesitation costs more than difficulty.' },
              { text: 'Register in the email and the discussion post', note: 'the reader and the purpose set the tone; a well-argued post in the wrong register loses marks.' },
              { text: 'Accuracy in Listen and Repeat', note: 'every word and the stress pattern; it is closer to PTE’s Repeat Sentence than to anything in the old TOEFL.' },
              { text: 'Fullness in the interview', note: 'answers that stop early leave the rater little to score.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'ETS — TOEFL preparation and practice tests', href: 'https://www.ets.org/toefl/test-takers/ibt/prepare.html' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'TOEFL iBT mock tests — full two-hour sittings of the 2026 format with a headset, scored on the 1–6 scale, and reading the result against a requirement.',
        lead: [
          'Sit the full two hours with a headset and microphone, in the section order the test uses, and read the result in bands.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Take one official practice test before preparing', text: 'The 1–6 estimate by section shows which of the four needs the time; the sections are short enough that a weak one can move quickly.' },
              { title: 'Rehearse the microphone tasks', text: 'Listen and Repeat and Take an Interview are recorded against a clock; practise speaking immediately and steadily.' },
              { title: 'Time the writing', text: 'About 23 minutes covers Build a Sentence, an email and the discussion post; the post should get most of it.' },
              { title: 'Convert the requirement, not the score', text: 'If a university still quotes 0–120, use ETS’s table to see which band it corresponds to and aim for the band.' },
              { title: 'Book when the estimate meets every section minimum', text: 'Many institutions set section floors as well as an overall; MyBest can combine attempts if the admissions page allows it.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'TOEFL iBT preparation for the 2026 test — everyday and academic English together, the discussion post, recorded speaking, and registration choices for a visa.',
        lead: [
          'The redesigned TOEFL rewards breadth — practical English done accurately and fast, plus one academic task done well.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From choosing the test to sending scores',
            items: [
              { title: 'Confirm the scale the university quotes', text: 'Requirements are being restated from 0–120 to 1–6; the report carries both until January 2028, so either can be met, but know which band you need.' },
              { title: 'Choose centre or Home Edition with the visa in mind', text: 'Universities accept both; Australia accepts neither for visas unless taken as “Taking TOEFL for Australia” at a centre, and other authorities have their own rules.' },
              { title: 'Build vocabulary and grammar for the short tasks', text: 'Complete the Words, Build a Sentence and Listen and Choose a Response are quick and numerous; accuracy across many small items is where the reading and writing bands are made.' },
              { title: 'Practise the academic passage and talk', text: 'The only long items; daily academic reading and lecture listening remain the preparation for them.' },
              { title: 'Write discussion posts and emails to a timer', text: 'A clear position with two reasons and a reply to the other view for the post; purpose, tone and completeness for the email.' },
              { title: 'Register early and read the score date', text: 'Scores arrive three days after the test and the exact date is shown at the end of it; add a week for the PDF and for sending to institutions.' },
            ],
          },
          {
            type: 'note',
            title: 'Note-taking is no longer the skill',
            text: 'The old TOEFL turned on capturing a lecture accurately enough to summarise it. The current test plays shorter audio with questions that follow, and its writing tasks stand alone. Candidates coached on the old integrated method should redirect that effort to speed and accuracy on the short tasks and to the discussion post.',
          },
        ],
      },
      'study-material': {
        description:
          'TOEFL iBT study material for the 2026 format — ETS’s official practice and guides, and everyday and academic English sources matched to the twelve task types.',
        lead: [
          'Official practice for the format; graded everyday reading, academic listening and short-form writing for the rest.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By section.',
            head: ['Section', 'What to use', 'Note'],
            rows: [
              ['Reading', 'ETS sample questions; notices, messages and schedules for daily-life reading; an academic passage a day', 'Three task types from gap-fill to passage.'],
              ['Listening', 'Campus and workplace conversations, announcements, short lectures in several accents', 'Audio plays once.'],
              ['Writing', 'Model emails by purpose; discussion-post practice with a timer; a grammar reference for Build a Sentence', 'The post is the longest task.'],
              ['Speaking', 'Sentence repetition drills; recorded interview answers on study, work and everyday topics', 'Recorded, scored centrally.'],
              ['Format', 'ETS TOEFL Practice Online tests built for the 2026 test', 'Scored on the 1–6 scale.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'PTE Academic guide', to: '/entrance-exams/international/pte/' },
              { label: 'Duolingo English Test guide', to: '/entrance-exams/international/duolingo-english-test/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What changed in the TOEFL iBT in 2026?',
        a: 'From 21 January 2026 ETS replaced the long passages, lectures and integrated tasks with twelve shorter task types across the same four sections, made the test adaptive and about two hours long, and moved scoring to a 1–6 scale in half bands aligned to the CEFR. Score reports also show a comparable 0–120 total until January 2028 so that institutions still quoting the old scale can read them. Write for an Academic Discussion is the one task carried over.',
      },
      {
        q: 'What is the TOEFL iBT exam pattern now?',
        a: 'Reading, about 50 items in 30 minutes — Complete the Words, Read in Daily Life, Read an Academic Passage; Listening, about 47 in 29 — Listen and Choose a Response, Listen to a Conversation, Listen to an Announcement, Listen to an Academic Talk; Writing, about 12 in 23 — Build a Sentence, Write an Email, Write for an Academic Discussion; Speaking, about 11 in 8 — Listen and Repeat, Take an Interview. The test adapts, so counts and times vary slightly, and it can be taken at a centre or at home.',
      },
      {
        q: 'How does the new TOEFL 1–6 score compare with the old 0–120?',
        a: 'ETS publishes the correspondence: an overall 6 corresponds to 114 and above, 5.5 to 107 and above, 5 to 95 and above, 4.5 to 86 and above, 4 to 72 and above and 3.5 to 58 and above. Section scores map similarly — a reading 5 is 24–26 on the old 0–30 scale, a speaking 5 is 25–26. The report shows both until January 2028.',
      },
      {
        q: 'What does the TOEFL cost in India and how soon are scores released?',
        a: 'US$173 excluding taxes, with express registration $49, rescheduling $69 and additional score reports $29 each. Scores appear in the ETS account three days after the test, with the exact date shown at the end of the test, and the PDF report follows within 24 to 48 hours. Scores are valid for two years.',
      },
      {
        q: 'Can the TOEFL be taken at home?',
        a: 'Yes, as the TOEFL iBT Home Edition on your own computer with a live human proctor — the same test, timing and scoring as the centre version. Universities accept it; some visa authorities do not, and Australia requires the “Taking TOEFL for Australia” selection at registration for a test to count for a visa.',
      },
      {
        q: 'TOEFL or IELTS — which should I take?',
        a: 'Both are accepted almost everywhere for admission. TOEFL is now about two hours, adaptive, recorded rather than interviewed, and scored on 1–6 with results in three days; IELTS is 2 hours 45 minutes with a face-to-face speaking test, band scores 0–9, and results in one to two days on computer. Visa acceptance differs — IELTS is accepted by all four immigration authorities that require an English test — so check the visa rule before the admission rule.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'sat',
    path: '/entrance-exams/international/sat/',
    name: 'SAT',
    fullName: 'Scholastic Assessment Test',
    authority: 'The College Board',
    official: 'satsuite.collegeboard.org',
    seoTitle: 'SAT 2026: Digital Adaptive Format, Sections & Strategy',
    metaDescription:
      'SAT exam guide — the digital adaptive format, Reading and Writing and Math modules, scoring out of 1600, and preparation strategy.',
    lead: [
      'The SAT is an undergraduate admissions test used by universities in the United States and, increasingly, by institutions elsewhere including a number in India. It tests reading, writing and mathematics, and reports a score out of 1600.',
      'Its digital format is multistage adaptive: each section has two modules, and your performance in the first determines the difficulty of the second. That structure is short — about two and a quarter hours — and it means the first module of each section carries disproportionate weight in setting your scoring ceiling.',
    ],
    quickFacts: [
      ['Administered by', 'The College Board, digitally in the Bluebook app at test centres'],
      ['Used for', 'Undergraduate admission in the United States and at universities elsewhere that accept it; policies are test-required, test-optional or test-blind by college'],
      ['Format', '2 hours 14 minutes — Reading and Writing 54 questions in 64 minutes, Math 44 in 70, each in two adaptive modules, with a 10-minute break'],
      ['Scoring', '200–800 per section, 400–1600 total; no penalty for wrong answers'],
      ['Dates 2026–27', '22 August, 12 September, 3 October, 7 November, 5 December 2026; 6 March, 1 May, 5 June 2027 — the same worldwide'],
      ['Fee and results', 'US$68 plus a $43 international fee; scores about two weeks after the test'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The SAT is taken by school students applying to undergraduate programmes, most commonly in the United States. It is offered on several dates through the year, scores are valid indefinitely for most purposes, and candidates may take it more than once, with many universities considering the best result or the best section scores across sittings.',
      },
      {
        type: 'p',
        text: 'The digital SAT is considerably shorter than its predecessor and organised into two sections, each delivered in two modules. Reading and Writing presents short passages with a single question each rather than long passages with question sets. Math covers algebra, advanced mathematics, problem solving and data analysis, and geometry and trigonometry, with a calculator permitted throughout.',
      },
      {
        type: 'list',
        title: 'What the digital format changed',
        items: [
          { text: 'Multistage adaptive', note: 'the second module of each section adapts to performance in the first, so the first module sets your ceiling.' },
          { text: 'Shorter passages', note: 'Reading and Writing now uses brief passages with one question each, rather than long passages with several.' },
          { text: 'Calculator throughout Math', note: 'the no-calculator section was removed.' },
          { text: 'A shorter test overall', note: 'about two and a quarter hours rather than three.' },
        ],
      },
      {
        type: 'note',
        title: 'Check whether your target universities require it',
        text: 'Many universities have moved to test-optional or test-flexible policies, and the requirement varies by institution and sometimes by programme. Before committing to SAT preparation, confirm whether your target universities require, recommend or ignore the score — the answer changes whether the effort is worth making at all.',
      },
    ],
    stages: [
      {
        name: 'Reading and Writing — Module 1',
        mode: 'Adaptive entry module',
        detail:
          'Short passages each followed by a single question, covering information and ideas, craft and structure, expression of ideas, and standard English conventions. Performance here determines the difficulty of Module 2.',
      },
      {
        name: 'Reading and Writing — Module 2',
        mode: 'Adaptive second module',
        detail:
          'The same question domains at a difficulty level determined by Module 1 performance. A higher-difficulty module permits a higher section score.',
      },
      {
        name: 'Math — Modules 1 and 2',
        mode: 'Adaptive, calculator permitted',
        detail:
          'Algebra, advanced mathematics, problem solving and data analysis, and geometry and trigonometry, in multiple choice and student-produced response formats. A calculator is permitted throughout, and one is built into the testing application.',
      },
      {
        name: 'Score reporting',
        mode: 'Section and total scores',
        detail:
          'Scores of 200 to 800 for each of Reading and Writing and Math, giving a total of 400 to 1600. Candidates may retake the test and many universities consider the best scores across sittings.',
      },
    ],
    updates: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 on satsuite.collegeboard.org. The SAT is digital everywhere, taken in the Bluebook app on a personal or centre device, and the 2026–27 dates are the same for US and international candidates: 22 August, 12 September, 3 October, 7 November and 5 December 2026, then 6 March, 1 May and 5 June 2027, with registration closing about two weeks before each date and a late deadline four days later. The fee outside the US is US$68 plus a $43 international fee; late registration adds $38, a centre change or cancellation $34, and some centres charge a $24 centre fee. Scores are released about two weeks after each date — 16 October for the 3 October test, 20 November for 7 November, 18 December for 5 December — and the first four score reports are free if ordered within nine days of the test.',
      },
      {
        type: 'table',
        caption: '2026–27 SAT dates and deadlines, as the College Board publishes them; deadlines are 11:59 p.m. US Eastern Time.',
        head: ['Test date', 'Registration deadline', 'Late registration and changes', 'Scores released'],
        rows: [
          ['22 August 2026', '7 August', '11 August', '4 September'],
          ['12 September 2026', '28 August', '1 September', '25 September'],
          ['3 October 2026', '18 September', '22 September', '16 October'],
          ['7 November 2026', '23 October', '27 October', '20 November'],
          ['5 December 2026', '20 November', '24 November', '18 December'],
          ['6 March 2027', '19 February', '23 February', 'About two weeks after'],
          ['1 May 2027', '16 April', '20 April', 'About two weeks after'],
          ['5 June 2027', '21 May', '25 May', 'About two weeks after'],
        ],
      },
      {
        type: 'table',
        caption: 'Structure and fees.',
        head: ['Item', 'Detail'],
        rows: [
          ['Reading and Writing', '54 questions in 64 minutes, two 32-minute modules; the second module’s difficulty follows the first'],
          ['Math', '44 questions in 70 minutes, two 35-minute modules; calculator allowed throughout; some student-produced responses'],
          ['Total', '98 questions in 2 hours 14 minutes with a 10-minute break'],
          ['Scale', '200–800 per section; 400–1600 total'],
          ['Fee outside the US', 'US$68 plus $43 international fee; late registration $38; centre change $34; cancellation $34, $44 after the change deadline; test-centre fee $24 at some centres'],
          ['Score reports', 'Four free if ordered within nine days of the test; $15 each after; rush $31'],
        ],
      },
      {
        type: 'links',
        title: 'Check the College Board directly',
        items: [
          { label: 'College Board — SAT dates and deadlines', href: 'https://satsuite.collegeboard.org/sat/dates-deadlines' },
          { label: 'College Board — international fees', href: 'https://satsuite.collegeboard.org/sat/registration/international-testing/fees' },
          { label: 'College Board — how the SAT is structured', href: 'https://satsuite.collegeboard.org/sat/whats-on-the-test/structure' },
          { label: 'College Board — score release dates', href: 'https://satsuite.collegeboard.org/scores/score-release-dates' },
        ],
      },
    ],
    sources: [
      {
        type: 'p',
        text: 'Checked 12 September 2026 against the College Board’s SAT dates and deadlines page, its international fees page, its test-structure page and its score-release page. Fees are listed as valid through December 2026; confirm at registration.',
      },
      {
        type: 'links',
        title: 'Official pages',
        items: [
          { label: 'College Board — SAT dates and deadlines', href: 'https://satsuite.collegeboard.org/sat/dates-deadlines' },
          { label: 'College Board — international fees', href: 'https://satsuite.collegeboard.org/sat/registration/international-testing/fees' },
          { label: 'College Board — how the SAT is structured', href: 'https://satsuite.collegeboard.org/sat/whats-on-the-test/structure' },
          { label: 'College Board — score release dates', href: 'https://satsuite.collegeboard.org/scores/score-release-dates' },
        ],
      },
    ],
    resources: {
      syllabus: {
        description:
          'SAT content — the Reading and Writing question domains and the Math content areas.',
        lead: [
          'Two sections, four content domains each. The mathematics stops well short of what an Indian class 12 student will have covered.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Reading and Writing — Information and Ideas',
                'Comprehension and reasoning about what a text says and implies, including central ideas, supporting details, inference, and the use of quantitative evidence presented in graphs or tables alongside a passage.',
              ],
              [
                'Reading and Writing — Craft and Structure',
                'Vocabulary in context, the function of a part of a text within its whole, and connections between related texts. This domain carries the vocabulary testing, though in context rather than as isolated definitions.',
              ],
              [
                'Reading and Writing — Expression of Ideas',
                'Revising a text to improve the effectiveness of its writing, including rhetorical synthesis — using given notes to accomplish a stated purpose — and transitions between ideas.',
              ],
              [
                'Reading and Writing — Standard English Conventions',
                'Editing for grammar, usage, punctuation and sentence structure. A rules-based domain and the most directly learnable part of the section.',
              ],
              [
                'Math — Algebra and Advanced Math',
                'Linear equations, inequalities and functions; systems of equations; nonlinear equations and functions; and equivalent expressions. The largest part of the Math section.',
              ],
              [
                'Math — Problem Solving, Data Analysis, Geometry and Trigonometry',
                'Ratios, rates, proportions, percentages, probability, statistics and the interpretation of data displays; and area and volume, lines and angles, triangles, circles and right-triangle trigonometry.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'For an Indian student the mathematics is generally comfortable — it sits well below class 12 level and includes no calculus. The Reading and Writing section is usually the harder half, and within it the Standard English Conventions domain is the most learnable: grammar and punctuation rules are finite, and mastering them converts directly into marks.',
          },
          {
            type: 'list',
            title: 'Where an Indian student actually needs to work',
            items: [
              { text: 'Standard English Conventions — the fastest gain', note: 'grammar, usage, punctuation and sentence structure. A finite, rules-based domain that converts directly into points and that most Indian curricula cover unevenly.' },
              { text: 'Expression of Ideas — less familiar than it looks', note: 'rhetorical synthesis and transitions ask you to judge what a piece of writing needs, which is an editorial skill rather than a comprehension one.' },
              { text: 'Craft and Structure — vocabulary in context', note: 'words judged by how they function in a passage rather than by definition. It rewards reading rather than memorising.' },
              { text: 'Mathematics — familiarity, not study', note: 'the content sits below class 12 and includes no calculus. What needs practice is the framing, particularly student-produced responses and word-problem setups.' },
            ],
          },
          {
            type: 'p',
            text: 'The short-passage format deserves specific mention because it differs from what Indian students are used to. Rather than a long passage with several questions, the digital SAT presents brief texts with a single question each — which changes the reading strategy completely. There is no benefit to skimming for structure and returning; each text is read once, closely, for the one thing being asked.',
          },
          {
            type: 'note',
            title: 'Confirm your targets require the score',
            text: 'Test-optional policies are widespread among United States universities, and some Indian institutions accept the SAT while not requiring it. Establishing whether your specific targets need the score — and whether they superscore across sittings — is worth ten minutes before committing months, because the answer sometimes makes the preparation unnecessary.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'SAT exam pattern — the adaptive module structure, scoring, calculator use and retake policy.',
        lead: [
          'Two sections, two modules each, and adaptation between modules rather than between questions.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Digital SAT structure. Confirm current module lengths and question counts on the official site.',
            head: ['Section', 'Structure', 'Score range'],
            rows: [
              ['Reading and Writing', 'Two adaptive modules of short passages', '200–800'],
              ['Math', 'Two adaptive modules, calculator permitted', '200–800'],
              ['Total', 'About 2 hours 14 minutes', '400–1600'],
            ],
          },
          {
            type: 'p',
            text: 'Multistage adaptation means the first module of each section determines which second module you receive, and a higher-difficulty second module permits a higher section score. Within a module you may move freely between questions and return to flagged ones, which allows a two-pass approach — but the first module is where your ceiling is set, and it deserves a settled, careful start.',
          },
          {
            type: 'list',
            title: 'Details worth knowing',
            items: [
              { text: 'No penalty for wrong answers', note: 'so nothing should ever be left unanswered.' },
              { text: 'A calculator is permitted throughout Math', note: 'and one is built into the application. This changes the section from a computation test to a reasoning test.' },
              { text: 'Retakes are permitted', note: 'and many universities consider the best scores across sittings, sometimes combining best section scores.' },
              { text: 'Test-optional policies are widespread', note: 'so confirm whether your targets require the score before investing in preparation.' },
            ],
          },
          {
            type: 'note',
            title: 'The test moved to a digital adaptive format',
            text: 'The SAT was substantially redesigned — shorter, digital, adaptive, with brief passages replacing long ones and the no-calculator maths section removed. Preparation material written for the paper format tests things the current version does not. Confirm that any material you use is written for the digital SAT.',
          },
          {
            type: 'p',
            text: 'Multistage adaptation means the first module of each section determines which second module you receive, and therefore the score band available to you. That has one clear practical implication: the opening minutes matter more than they would in a linear test. Candidates who habitually use the first few questions to settle in are, in this format, settling into a lower ceiling — and no amount of strong performance in the second module recovers it.',
          },
          {
            type: 'defs',
            items: [
              [
                'The calculator, and how to use it',
                'Available throughout the Math section and built into the application. That makes it a tool rather than an obligation: reaching for it on a step you could do mentally costs seconds, and the section is testing setup and reasoning rather than arithmetic.',
              ],
              [
                'No penalty, so no blanks',
                'A wrong answer costs nothing beyond the mark not earned. Reserving the final seconds of each module to fill anything unanswered is free score, and it should be automatic rather than remembered.',
              ],
              [
                'Retakes and superscoring',
                'Retakes are permitted, and many universities consider the best scores across sittings — some combining the best section scores from different dates. Where that applies, a planned second attempt has a clearly positive expected value.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Use material written for the digital format',
            text: 'The SAT was substantially redesigned — shorter, digital, adaptive, with brief single-question passages replacing the long ones. Preparation material written for the earlier paper test misrepresents the reading format, the pacing and the adaptive structure, and practising against it builds habits the current test does not reward.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SAT practice material — official adaptive practice tests and question banks.',
        lead: [
          'Use official College Board practice, delivered in the same application as the real test. Non-adaptive practice cannot predict your score.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The College Board provides full-length adaptive practice tests through the same testing application used on test day, which makes them uniquely useful — they reproduce both the adaptation and the interface. Third-party practice, however well written, cannot reproduce the multistage adaptation and therefore cannot tell you what you would score.',
          },
          {
            type: 'steps',
            title: 'How to practise',
            items: [
              { text: 'Use the official application for full-length practice.', note: 'It reproduces the adaptation and the interface together.' },
              { text: 'Drill Standard English Conventions separately.', note: 'A finite set of grammar and punctuation rules, and the most directly learnable content in the test.' },
              { text: 'Practise the short-passage format.', note: 'One question per passage is a different reading rhythm from long-passage tests.' },
              { text: 'Do maths without leaning on the calculator.', note: 'It is permitted, but reaching for it on simple steps costs time.' },
              { text: 'Never leave a question blank.', note: 'There is no penalty.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
              { label: 'TOEFL exam guide', to: '/entrance-exams/international/toefl/' },
              { label: 'Mathematics study material', to: '/study-material/mathematics/' },
            ],
          },
          {
            type: 'list',
            title: 'How to use the official question bank',
            items: [
              { text: 'Drill Standard English Conventions in blocks', note: 'punctuation, agreement, modifiers, sentence boundaries. Working thirty at a time makes the recurring rules visible in a way that mixed practice does not.' },
              { text: 'Practise short passages one at a time', note: 'the format rewards reading a brief text closely for a single question. Practising on long passages with question sets trains a different and less useful approach.' },
              { text: 'Do mathematics without reaching for the calculator', note: 'then check where it would genuinely have helped. Most candidates discover they were using it out of habit on steps that cost more time to enter than to compute.' },
              { text: 'Work student-produced responses separately', note: 'the free-entry mathematics questions have no options to work backwards from, which changes the approach and is worth rehearsing as its own category.' },
            ],
          },
          {
            type: 'p',
            text: 'Use the official application for full-length practice rather than printed material. Because the test is adaptive and delivered through a specific interface, practising in that application reproduces both the scoring behaviour and the mechanics — how questions are flagged, how the on-screen calculator works, how the timer is displayed. All of those cost time on test day if they are unfamiliar.',
          },
          {
            type: 'p',
            text: 'Never leave a question blank, in practice or in the test. There is no penalty, which makes an unanswered question a discarded mark with no compensating benefit. The reason to enforce it in practice is that behaviour under time pressure defaults to habit, and a candidate who has left blanks in ten practice tests will leave them in the eleventh.',
          },
          {
            type: 'note',
            title: 'Read demanding non-fiction alongside the practice',
            text: 'Craft and Structure and Information and Ideas both reward comfort with dense, argued prose, and neither improves much from question drilling alone. A daily habit of reading essays or long-form journalism builds the vocabulary-in-context and the comprehension speed that the question bank can then test.',
          },
        ],
      },
      'mock-tests': {
        description:
          'SAT practice tests — adaptive full-length practice with attention to the first module of each section.',
        lead: [
          'Take official adaptive practice tests, and watch how you perform in the first module of each section.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the first module sets the ceiling for the second, a candidate who starts nervously and settles later is systematically disadvantaged by this format in a way they would not be by a fixed-form test. Practice tests reveal whether that is happening, and the remedy — a deliberate, unhurried opening rather than a rushed one — is straightforward once the pattern is visible.',
          },
          {
            type: 'list',
            title: 'What to review',
            items: [
              { text: 'First-module performance in each section', note: 'it determines your scoring ceiling.' },
              { text: 'Standard English Conventions accuracy', note: 'a rules-based domain where errors are entirely fixable.' },
              { text: 'Blanks — always zero', note: 'no penalty applies.' },
              { text: 'Time spent using the calculator', note: 'it is a tool, not an obligation, and reaching for it on simple steps costs minutes.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Mathematics study material', to: '/study-material/mathematics/' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'What an adaptive practice test should tell you',
            items: [
              { title: 'How you performed in the first module of each section', text: 'It sets your ceiling. A pattern of slow starts is more costly here than an equivalent number of errors later, and it is entirely fixable.' },
              { title: 'Your Standard English Conventions accuracy', text: 'A rules-based domain, tracked separately. Errors here are the cheapest to eliminate in the whole test.' },
              { title: 'Whether any question was left blank', text: 'The answer should always be none. No penalty applies, so a blank is a pure loss.' },
              { title: 'How much you leaned on the calculator', text: 'Time spent entering simple arithmetic is time not spent reading the next question. It is a tool for the steps that need it.' },
              { title: 'Section balance', text: 'Reading and Writing and Math are scored separately and universities often look at both. A large gap is worth closing even if the total is acceptable.' },
            ],
          },
          {
            type: 'p',
            text: 'Space your official practice tests through the preparation rather than clustering them at the end. The supply is limited, each one is a scarce and accurate measurement, and their diagnostic value is highest when there is still time to act on what they show. A candidate who takes four practice tests in the final fortnight has converted four diagnostics into four rehearsals.',
          },
          {
            type: 'note',
            title: 'Start each section deliberately',
            text: 'Because the first module determines your ceiling, the opening questions deserve a settled, careful approach rather than a quick warm-up. Practising that explicitly — treating the first five questions of each module as the most important ones — is a small behavioural change with a direct effect on the score available to you.',
          },
        ],
      },
      preparation: {
        description:
          'SAT preparation — grammar rules, reading practice and using the adaptive format to your advantage.',
        lead: [
          'For an Indian student, SAT preparation is mostly a Reading and Writing project. The mathematics is usually already there.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'An Indian student following a mainstream board curriculum has generally covered the SAT mathematics content well before applying, and needs familiarity with the question style rather than new learning. The Reading and Writing section is where the work is — and within it, the grammar and punctuation domain is the most tractable, since the rules are finite and mastering them converts directly into points.',
          },
          {
            type: 'steps',
            title: 'A two to four month plan',
            items: [
              { text: 'First — confirm your target universities require the SAT.', note: 'Test-optional policies are widespread; the answer may make the preparation unnecessary.' },
              { text: 'Week one — a diagnostic official adaptive practice test.', note: 'It sets the baseline and shows which section needs the work.' },
              { text: 'Weeks one to four — Standard English Conventions.', note: 'Grammar, usage, punctuation and sentence structure. Finite rules, directly learnable, immediately scoring.' },
              { text: 'Throughout — read demanding non-fiction daily.', note: 'The reading domains reward comprehension speed and vocabulary in context.' },
              { text: 'Weeks two to six — maths question-style familiarity.', note: 'The content is familiar; the framing and the student-produced response format are not.' },
              { text: 'From week four — full official practice tests, spaced.', note: 'Watching first-module performance particularly.' },
              { text: 'Plan for a retake if useful.', note: 'Many universities consider the best scores across sittings.' },
            ],
          },
          {
            type: 'list',
            title: 'What Indian candidates should know',
            items: [
              { text: 'The mathematics is below class 12 level', note: 'with no calculus. It needs familiarity rather than study.' },
              { text: 'Grammar rules are the fastest gain', note: 'a finite domain that converts directly into points.' },
              { text: 'The first module of each section sets your ceiling', note: 'so start deliberately rather than rushing.' },
              { text: 'There is no penalty for guessing', note: 'nothing should be left blank.' },
              { text: 'Use material written for the digital format', note: 'the test was substantially redesigned.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Grammar rules — weeks one to four',
                'Standard English Conventions is finite, rules-based and the fastest available gain for an Indian candidate. Working through punctuation, agreement, modifiers and sentence boundaries systematically converts directly into points.',
              ],
              [
                'Reading — the continuous habit',
                'Demanding non-fiction daily, for comprehension speed and vocabulary in context. It improves more slowly than the grammar work and it sets the ceiling that grammar accuracy lets you reach.',
              ],
              [
                'Mathematics — familiarity, briefly',
                'A few weeks of question-style practice rather than content study. The material is below class 12 level, and what needs rehearsing is the framing and the student-produced response format.',
              ],
              [
                'Practice tests — spaced, in the official application',
                'The only accurate measurement, and worth more when there is time to act on each one.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'For an Indian student following a mainstream board curriculum, the honest framing is that this is a Reading and Writing project with a short mathematics refresher attached. Time allocated in proportion to how the sections feel — mathematics first, because it is familiar and comfortable — is time allocated backwards, and it is the most common misallocation in SAT preparation among Indian candidates.',
          },
          {
            type: 'note',
            title: 'Decide about a retake before the first attempt',
            text: 'Where your target universities superscore or consider the best result across sittings, a planned second attempt has clear value and takes the pressure off the first. Knowing that in advance changes how you approach the first sitting, and it means the second is already in the calendar rather than an emergency response to a disappointing score.',
          },
        ],
      },
      'study-material': {
        description:
          'SAT study material — English grammar and reading notes, plus mathematics revision.',
        lead: [
          'Official College Board practice for the format, with these notes for grammar and mathematics revision.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The English grammar notes are the most directly useful material here, since Standard English Conventions is a rules-based domain that rewards systematic study. The mathematics notes serve as revision rather than instruction for most Indian candidates, who will have covered the content already and need only to meet it in the SAT’s framing.',
          },
          {
            type: 'links',
            title: 'Supporting notes',
            items: [
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Reading comprehension', to: '/study-material/varc/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
          {
            type: 'list',
            title: 'A study routine',
            items: [
              'Work through grammar and punctuation rules systematically — the fastest available gain.',
              'Read demanding non-fiction daily for comprehension speed and vocabulary in context.',
              'Practise the short-passage, one-question format specifically.',
              'Revise mathematics for framing rather than content, including student-produced responses.',
              'Take official adaptive practice tests spaced through the preparation.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Official College Board practice — the core',
                'Full-length adaptive tests and the question bank, delivered through the same application as the real test. It is the only material that reproduces the adaptive scoring and the interface together.',
              ],
              [
                'A grammar and punctuation reference — the fastest gain',
                'Worked through systematically rather than consulted occasionally. Standard English Conventions is a closed set of rules and it can genuinely be finished.',
              ],
              [
                'Demanding non-fiction — the daily reading',
                'Essays, long-form journalism and argued prose. It serves comprehension, vocabulary in context and the rhetorical judgement that Expression of Ideas asks for.',
              ],
              [
                'Mathematics revision notes — supporting',
                'Algebra, functions, ratios and proportions, statistics and basic geometry and trigonometry. Below class 12 level, so useful for framing rather than for content.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Practise the short-passage format specifically rather than assuming general reading practice covers it. The digital SAT presents brief texts with one question each, which rewards a different approach from the long-passage comprehension most Indian students have practised — read closely once, answer, move on, with no scanning back and no structural overview to build.',
          },
          {
            type: 'note',
            title: 'Check the date on anything you buy',
            text: 'The redesign changed the format substantially, and a great deal of SAT material still describes the paper test with its long passages, its no-calculator section and its non-adaptive structure. Working through it produces practice for a test that no longer exists, at the cost of the practice that would have counted.',
          },
          {
            type: 'p',
            text: 'On how to sequence the material: begin with the grammar and punctuation reference and finish it, because it is the one component with a definite end and the one that pays fastest. Layer the daily reading underneath from the first week, since it is the slowest to move and sets the ceiling for the two comprehension domains. Fold in the mathematics revision as a short block once the grammar work is complete, treating it as familiarisation with framing rather than as content study. Then give the remaining weeks to official adaptive practice, spaced far enough apart that each one can change what you do next.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the digital SAT exam pattern?',
        a: 'Two sections — Reading and Writing, and Math — each delivered in two modules, with the test running about two and a quarter hours. It is multistage adaptive: your performance in the first module of each section determines the difficulty of the second, and a higher-difficulty second module permits a higher score. Scores run from 200 to 800 per section for a total of 400 to 1600. A calculator is permitted throughout the Math section.',
      },
      {
        q: 'How does SAT adaptive scoring work?',
        a: 'The test adapts between modules rather than between questions. After the first Reading and Writing module it selects which second module to give you, and the same for Math. Because the difficulty of the second module caps your possible section score, the first module effectively sets your ceiling — which makes a deliberate, unhurried start more valuable than in a fixed-form test. Within any module you can move freely between questions and return to flagged ones.',
      },
      {
        q: 'Is the SAT maths section hard for Indian students?',
        a: 'Generally not. The content covers algebra, advanced mathematics, problem solving and data analysis, and geometry and right-triangle trigonometry — it sits well below class 12 level and includes no calculus, so a student following a mainstream Indian board curriculum has usually covered it already. What needs practice is the framing, the student-produced response format, and using the permitted calculator as a tool rather than reaching for it on steps that are faster done mentally.',
      },
      {
        q: 'Do I still need the SAT if universities are test-optional?',
        a: 'It depends on the institution and sometimes on the programme, so confirm before investing in preparation. Many universities have moved to test-optional or test-flexible policies, in which case a score can still help but is not required. Where a target does require or strongly recommend it, the score matters as it always did. This is a question worth settling first, because the answer determines whether the preparation is worth undertaking at all.',
      },
      {
        q: 'Should I retake the SAT?',
        a: 'Retakes are permitted and many universities consider the best scores across sittings, with some combining the best section scores from different dates. That makes a first attempt relatively low-risk and a considered retake worthwhile if a section score fell short of your target. As with the other international tests, the ability to sit again and report selectively is a structural advantage over once-a-year national entrances, and it is worth planning around rather than treating a single attempt as final.',
      },
      {
        q: 'When is the SAT held in 2026–27 and what does it cost in India?',
        a: 'On 22 August, 12 September, 3 October, 7 November and 5 December 2026, and 6 March, 1 May and 5 June 2027 — the same dates worldwide — with registration closing about two weeks before each. The fee outside the US is US$68 plus a $43 international fee, with $38 for late registration and $34 for a centre change or cancellation; some centres add a $24 fee.',
      },
      {
        q: 'How long is the digital SAT and when do scores come?',
        a: '2 hours 14 minutes: Reading and Writing, 54 questions in 64 minutes, and Math, 44 questions in 70 minutes, each in two adaptive modules with a 10-minute break between sections. Scores are released about two weeks after the test date — 16 October 2026 for the 3 October test, for example — and the first four score reports are free if ordered within nine days.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     PTE Academic
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'pte',
    path: '/entrance-exams/international/pte/',
    name: 'PTE Academic',
    fullName: 'Pearson Test of English Academic',
    authority: 'Pearson',
    official: 'pearsonpte.com',
    seoTitle: 'PTE Academic 2026: Format, New Question Types, Scoring & Fees',
    metaDescription:
      'PTE Academic guide — the three-part two-hour format, the 2025 speaking question types, 10–90 scoring, results in two days, fees and the IELTS concordance.',
    lead: [
      'PTE Academic is Pearson’s computer-based English test for university admission and for visas to Australia, New Zealand and, in its UKVI form, the United Kingdom. It is taken in a single sitting of about two hours at a Pearson test centre, every answer — spoken, written or clicked — is captured by the computer, and the marking is automated, with human review of some responses before a score is finalised. Results typically arrive within two business days.',
      'What distinguishes it from IELTS and TOEFL is the design of its tasks. Most of the twenty question types score more than one skill at once — reading a text aloud is marked for reading and speaking, retelling a lecture for listening and speaking, summarising a spoken text for listening and writing — so the four communicative scores are built from overlapping evidence rather than four separate papers. The test was revised in 2025, when two speaking tasks, Summarize Group Discussion and Respond to a Situation, were added and the IELTS concordance was republished.',
    ],
    quickFacts: [
      ['Administered by', 'Pearson, at authorised PTE test centres; not available at home'],
      ['Used for', 'Study at 4,000+ institutions; visas to Australia and New Zealand; UK visas via PTE Academic UKVI'],
      ['Format', 'Three parts in one sitting — Speaking & Writing 76–84 minutes, Reading 23–30, Listening 31–39'],
      ['Scoring', 'Overall and four communicative skills on a 10–90 scale, marked by Pearson’s automated system with human review'],
      ['Results', 'Typically within two business days, up to five; shared free with any number of institutions'],
      ['Validity', 'Two years from the test date'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The test opens with an unscored personal introduction, then runs through nine speaking and writing tasks, five reading tasks and eight listening tasks without a separate speaking appointment. Speaking is recorded through a headset at a shared test-centre desk, which is a different experience from a face-to-face IELTS interview and one worth practising: the microphone opens after a tone, closes after a pause of a few seconds, and does not allow a second attempt.',
      },
      {
        type: 'p',
        text: 'Scores are reported as an overall score from 10 to 90 and as four communicative-skill scores for listening, reading, speaking and writing, with a Skills Profile that shows where marks were lost. Pearson’s concordance with IELTS Academic, revised in July 2025 after the test changed, puts 47 alongside IELTS 6.0, 55 alongside 6.5, 63 alongside 7.0 and 79 alongside 8.0 — figures institutions use to set their own thresholds, which remain theirs to decide.',
      },
      {
        type: 'list',
        title: 'What makes PTE Academic distinctive',
        items: [
          { text: 'Integrated tasks', note: 'most question types score two skills, so a weak listening score can surface in speaking tasks and a weak reading score in writing.' },
          { text: 'Automated marking', note: 'consistent and fast, and indifferent to accent, but sensitive to hesitation, unfinished sentences and going over time.' },
          { text: 'A single two-hour sitting', note: 'no separate speaking day, and results usually inside two days.' },
          { text: 'Free unlimited score sending', note: 'scores are shared digitally from the myPTE account to as many institutions as needed.' },
        ],
      },
      {
        type: 'note',
        title: 'Which PTE test you need',
        text: 'PTE Academic is the test for university admission and for Australian and New Zealand visas. UK visa applications that require a four-skills Secure English Language Test need PTE Academic UKVI, which is the same test taken under UKVI conditions. PTE Core is a general-English test recognised by Canada’s IRCC for permanent residence and citizenship, not for study. Book the variant your institution or visa route names.',
      },
    ],
    stages: [
      {
        name: 'Part 1 — Speaking and Writing',
        mode: '76–84 minutes; nine question types',
        detail:
          'Read Aloud (texts up to 60 words), Repeat Sentence, Describe Image (40 seconds), Retell Lecture (up to 90 seconds of audio, 40 seconds to answer), Answer Short Question, Summarize Group Discussion (a three-person discussion of up to three minutes, two minutes to summarise), Respond to a Situation (40 seconds after 10 seconds’ preparation), Summarize Written Text (one sentence of 5 to 75 words in 10 minutes) and Write Essay (200 to 300 words in 20 minutes).',
      },
      {
        name: 'Part 2 — Reading',
        mode: '23–30 minutes; five question types',
        detail:
          'Fill in the Blanks from a drop-down list (texts up to 300 words), Multiple Choice with multiple answers (up to 350 words), Re-order Paragraphs (up to 150 words), Fill in the Blanks by drag and drop (up to 80 words) and Multiple Choice with a single answer. Multiple-answer questions lose marks for wrong selections.',
      },
      {
        name: 'Part 3 — Listening',
        mode: '31–39 minutes; eight question types',
        detail:
          'Summarize Spoken Text (60 to 90 seconds of audio, a 50 to 70 word summary in 10 minutes), Multiple Choice with multiple answers, Fill in the Blanks by typing, Highlight Correct Summary, Multiple Choice with a single answer, Select Missing Word, Highlight Incorrect Words and Write from Dictation.',
      },
      {
        name: 'Scoring and results',
        mode: 'Automated with human review; 10–90; typically two business days',
        detail:
          'Every response is scored by Pearson’s automated system, with some open responses reviewed by a human expert before the score is finalised. The Score Report gives the overall and communicative-skill scores; the Skills Profile breaks performance down further. Scores are released to the myPTE account, usually within two business days and at most five, and are valid for two years.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'PTE Academic syllabus — every question type in the three parts, what each scores, its prompt length and its time limit.',
        lead: [
          'PTE Academic has no topic syllabus. It has twenty question types, and knowing each one’s timing and scoring rule is the preparation.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Part 1, Speaking and Writing — 76 to 84 minutes. Prompt lengths and answer times are as Pearson publishes them for each type.',
            head: ['Question type', 'Skills scored', 'Prompt', 'Time to answer'],
            rows: [
              ['Personal Introduction', 'None — unscored', '—', '25 seconds to prepare, 30 to record'],
              ['Read Aloud', 'Reading, speaking', 'Text up to 60 words', '30–40 seconds to prepare, then read'],
              ['Repeat Sentence', 'Listening, speaking', '3–9 seconds of audio', '15 seconds'],
              ['Describe Image', 'Speaking', 'A chart, graph, map or picture', '40 seconds after 25 to prepare'],
              ['Retell Lecture', 'Listening, speaking', 'Up to 90 seconds of audio or video', '40 seconds after 10 to prepare'],
              ['Answer Short Question', 'Listening, speaking', '3–9 seconds of audio', '10 seconds; one word or a few'],
              ['Summarize Group Discussion', 'Listening, speaking', 'A three-person discussion of up to 3 minutes', '2 minutes'],
              ['Respond to a Situation', 'Speaking', 'A situation read and heard, up to 60 words', '40 seconds after 10 to prepare'],
              ['Summarize Written Text', 'Reading, writing', 'Text up to 300 words', '10 minutes; one sentence of 5–75 words'],
              ['Write Essay', 'Writing', 'A prompt of two or three sentences', '20 minutes; 200–300 words'],
            ],
          },
          {
            type: 'table',
            caption: 'Part 2, Reading — 23 to 30 minutes; and Part 3, Listening — 31 to 39 minutes.',
            head: ['Question type', 'Skills scored', 'Prompt', 'Note'],
            rows: [
              ['Reading: Fill in the Blanks (drop-down)', 'Reading, writing', 'Text up to 300 words', 'Choose from a list for each gap'],
              ['Reading: Multiple Choice, multiple answers', 'Reading', 'Text up to 350 words', 'Wrong selections cost marks'],
              ['Reading: Re-order Paragraphs', 'Reading', 'Text up to 150 words', 'Marks for each correctly adjacent pair'],
              ['Reading: Fill in the Blanks (drag and drop)', 'Reading', 'Text up to 80 words', 'More words than gaps'],
              ['Reading: Multiple Choice, single answer', 'Reading', 'A short text', 'One mark'],
              ['Listening: Summarize Spoken Text', 'Listening, writing', '60–90 seconds of audio', '10 minutes; 50–70 words'],
              ['Listening: Multiple Choice, multiple answers', 'Listening', '80–120 seconds of audio', 'Wrong selections cost marks'],
              ['Listening: Fill in the Blanks', 'Listening, writing', 'A transcript with gaps', 'Type the missing words'],
              ['Listening: Highlight Correct Summary', 'Listening, reading', 'A recording and several summaries', 'Pick the accurate one'],
              ['Listening: Multiple Choice, single answer', 'Listening', 'A recording', 'One mark'],
              ['Listening: Select Missing Word', 'Listening', 'A recording that cuts off', 'Choose the final word or phrase'],
              ['Listening: Highlight Incorrect Words', 'Listening, reading', 'A transcript with substitutions', 'Wrong clicks cost marks'],
              ['Listening: Write from Dictation', 'Listening, writing', 'A short sentence', 'Every word counts'],
            ],
          },
          {
            type: 'note',
            title: 'The two 2025 additions',
            text: 'Summarize Group Discussion and Respond to a Situation joined the speaking section in 2025. The first plays a discussion between three speakers and asks for a two-minute spoken summary that covers every speaker’s main point; the second describes a situation and asks for an extended spoken response in 40 seconds. Both reward organised, continuous speech more than elaborate vocabulary, and both are worth rehearsing with a timer because the recording stops when the time runs out.',
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'Pearson — Speaking and Writing question types', href: 'https://www.pearsonpte.com/pte-academic/test-format/speaking-writing' },
              { label: 'Pearson — Reading question types', href: 'https://www.pearsonpte.com/pte-academic/test-format/reading' },
              { label: 'Pearson — Listening question types', href: 'https://www.pearsonpte.com/pte-academic/test-format/listening' },
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'PTE Academic exam pattern — the two-hour single sitting, how automated scoring works, the 10–90 scale, the IELTS concordance and the result timeline.',
        lead: [
          'Twenty question types in three timed parts, scored by machine on a single 10–90 scale.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The three parts as Pearson times them. The total is about two hours, with no break between parts and no separate speaking appointment.',
            head: ['Part', 'Question types', 'Time'],
            rows: [
              ['Speaking and Writing', '9, plus the unscored introduction', '76–84 minutes'],
              ['Reading', '5', '23–30 minutes'],
              ['Listening', '8', '31–39 minutes'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'How the scoring works',
                'Multiple-choice and gap items are marked automatically against a key. Spoken and written responses are scored by Pearson’s automated system on several traits at once — content, fluency and pronunciation for speech; content, form, grammar, vocabulary and spelling for writing — and some are reviewed by a human expert before the automated score is finalised. Because most tasks score two skills, the four communicative scores draw on evidence from across the test.',
              ],
              [
                'The scale',
                'Overall and communicative scores run from 10 to 90. Pearson’s July 2025 concordance with IELTS Academic reads 24 = 4.5, 31 = 5.0, 39 = 5.5, 47 = 6.0, 55 = 6.5, 63 = 7.0, 71 = 7.5, 79 = 8.0, 86 = 8.5 and 90 = 9.0. It is a research relationship, not an admissions rule; each university and visa authority sets its own PTE minimum.',
              ],
              [
                'Negative scoring',
                'Multiple-answer questions in reading and listening, and Highlight Incorrect Words, deduct a mark for each wrong selection down to a floor of zero for the item. Guessing extra options is therefore costly in a way it is not in IELTS.',
              ],
              [
                'Results and reporting',
                'A score report is typically released within two business days and at most five, to the myPTE account, and can be shared free with any number of institutions. Scores are valid for two years. Booking can be cancelled free 14 or more days before the test, for a 50 per cent refund 8 to 13 days before, and for no refund inside 7 days.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'A fee that varies by country',
            text: 'The test fee is set per country and shown at booking. In India it is charged in rupees and stood at ₹18,900 including GST from March 2026 — the same for PTE Academic and PTE Academic UKVI — with test centres in more than sixty cities. Confirm the current figure on the booking page before paying.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'PTE Academic practice material — the scored practice tests and question banks Pearson sells, and why third-party question sets need care.',
        lead: [
          'PTE does not release past papers. Pearson’s scored practice tests, marked by the same system as the live test, are the substitute.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the live test is machine-marked, practice that is marked the same way tells you far more than practice marked by a tutor. Pearson’s scored practice tests return a full score report and skills profile, which is the only way to learn how the system treats your fluency, your pauses and your habit of trailing off before the microphone closes. Free sample questions for every type are on the official site, and the official guide and app carry more.',
          },
          {
            type: 'list',
            title: 'What to take from each practice test',
            items: [
              { text: 'Speaking scores by trait', note: 'content, oral fluency and pronunciation are reported separately, and the fix for each is different — fluency responds to rehearsed templates and steady pace, pronunciation to stress and clear word endings.' },
              { text: 'Which integrated tasks pull a skill down', note: 'a listening score depressed by Write from Dictation and Summarize Spoken Text is a writing-speed problem as much as a listening one.' },
              { text: 'Negative-scoring losses', note: 'count marks lost on multiple-answer and Highlight Incorrect Words items; a candidate who selects generously loses more than one who selects only when sure.' },
              { text: 'Time discipline in the summaries', note: 'Summarize Written Text has ten minutes and a strict single-sentence, 5–75-word form; a second sentence scores zero for form.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Pearson — PTE Academic preparation and scored practice tests', href: 'https://www.pearsonpte.com/pte-academic' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'TOEFL guide', to: '/entrance-exams/international/toefl/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'PTE Academic mock tests — full two-hour sittings with a headset, scored by trait, and how to read the report.',
        lead: [
          'Sit full mocks with a headset in a noisy room. The live test is taken at a shared desk, and the microphone does not wait.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Learn the microphone rhythm first', text: 'Speak immediately after the tone, keep going, and finish before the countdown ends; a pause of a few seconds closes the recording. Practise every speaking type until this is automatic.' },
              { title: 'Sit the three parts together', text: 'About two hours without a break, in the order the test uses, so that the listening section is met tired, as it will be on the day.' },
              { title: 'Read the trait scores, not just the total', text: 'A speaking score of 60 with fluency at 45 and pronunciation at 75 has one remedy; the reverse has another.' },
              { title: 'Track negative-scoring items separately', text: 'Multiple-answer questions and Highlight Incorrect Words punish over-selection. Score them alone and adjust how readily you click.' },
              { title: 'Time the summaries and the essay', text: 'Ten minutes for each summary and twenty for the essay, with the word counts checked before submitting — 5–75, 50–70 and 200–300.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'PTE Academic preparation — templates for the speaking tasks, fluency over vocabulary, the integrated-skill logic, and when to book.',
        lead: [
          'PTE rewards steady, organised speech and exact transcription more than range of vocabulary. Prepare for the machine that marks it.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From booking to score report',
            items: [
              { title: 'Confirm the variant and the minimum', text: 'Check whether the institution or visa route wants PTE Academic or PTE Academic UKVI, and the overall and per-skill scores it requires; the IELTS concordance is a guide to what those mean.' },
              { title: 'Build a template for each speaking type', text: 'Describe Image, Retell Lecture, Summarize Group Discussion and Respond to a Situation all reward a fixed structure delivered without hesitation. Learn one for each and fill it with the content on screen.' },
              { title: 'Practise dictation and repetition daily', text: 'Repeat Sentence and Write from Dictation carry weight in listening and in speaking or writing; short daily drills raise both.' },
              { title: 'Write to the form rules', text: 'One sentence for Summarize Written Text, 50–70 words for Summarize Spoken Text, 200–300 for the essay. Form errors score zero regardless of content.' },
              { title: 'Take a scored practice test before booking', text: 'It predicts the live score closely, and results come inside two days, so a retake can be planned around the application deadline.' },
              { title: 'Book with the cancellation windows in mind', text: 'Free cancellation stops 14 days before the test; a 50 per cent refund is available from 13 to 8 days before; nothing inside a week.' },
            ],
          },
          {
            type: 'note',
            title: 'Accent is not the issue; hesitation is',
            text: 'Pearson’s scoring is trained on speakers from many countries and does not penalise an Indian accent. It does penalise long pauses, false starts, self-corrections and sentences left unfinished, because all of them lower the fluency trait. A steady pace with clear word endings scores better than fast, sophisticated speech with stumbles.',
          },
        ],
      },
      'study-material': {
        description:
          'PTE Academic study material — Pearson’s official guide and practice, a grammar and spelling routine, and the listening sources to use.',
        lead: [
          'Official material for the question types; general academic English for the rest.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By component.',
            head: ['Component', 'What to use', 'Note'],
            rows: [
              ['Question types', 'Pearson’s official guide, the free sample questions and the scored practice tests', 'The only material marked by the live system.'],
              ['Speaking', 'Recorded practice of every type with a headset; a template per task', 'Play recordings back and listen for pauses and trailing off.'],
              ['Writing', 'A grammar reference; timed essays checked for spelling and word count', 'Spelling errors cost marks in gap-fill and dictation items too.'],
              ['Listening', 'Academic lectures and news in several accents; dictation practice', 'Recordings play once only.'],
              ['Reading', 'Academic passages of 300 words with note-taking', 'Re-order Paragraphs rewards spotting topic sentences and reference words.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'TOEFL guide', to: '/entrance-exams/international/toefl/' },
              { label: 'Duolingo English Test guide', to: '/entrance-exams/international/duolingo-english-test/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the PTE Academic exam pattern?',
        a: 'Three parts in one sitting of about two hours: Speaking and Writing at 76 to 84 minutes with nine question types, Reading at 23 to 30 minutes with five, and Listening at 31 to 39 minutes with eight. Every response is captured on a computer at a Pearson test centre and scored by Pearson’s automated system, with some responses reviewed by a human expert. Scores are reported overall and for each of the four skills on a 10 to 90 scale.',
      },
      {
        q: 'What changed in PTE Academic in 2025?',
        a: 'Two speaking tasks were added — Summarize Group Discussion, a two-minute spoken summary of a three-person discussion, and Respond to a Situation, a 40-second spoken reply to a described situation — and Pearson republished its IELTS concordance in July 2025 to reflect the updated test.',
      },
      {
        q: 'What PTE score equals IELTS 6.5 or 7?',
        a: 'By Pearson’s July 2025 concordance, PTE 55 corresponds to IELTS 6.5 and PTE 63 to IELTS 7.0; 47 corresponds to 6.0 and 79 to 8.0. Institutions and visa authorities set their own PTE minimums, so check the requirement rather than converting.',
      },
      {
        q: 'How quickly do PTE results come and how long are they valid?',
        a: 'Most results are released within two business days and all within five, to the myPTE account, with an email when they are ready. Scores are valid for two years from the test date and can be sent to as many institutions as needed at no charge.',
      },
      {
        q: 'Can PTE Academic be taken at home?',
        a: 'No. PTE Academic is taken only at an authorised Pearson test centre on a computer. Pearson states it cannot be taken at home; the at-home option that once existed is no longer offered for this test.',
      },
      {
        q: 'What is the PTE Academic fee in India?',
        a: 'Fees are set by country and shown at booking. In India the fee was ₹18,900 including GST from March 2026, the same for PTE Academic and PTE Academic UKVI. Cancellation is free 14 or more days before the test, refunds half the fee from 13 to 8 days before, and nothing inside 7 days.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Duolingo English Test
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'duolingo-english-test',
    path: '/entrance-exams/international/duolingo-english-test/',
    name: 'Duolingo English Test',
    fullName: 'Duolingo English Test (DET)',
    authority: 'Duolingo',
    official: 'englishtest.duolingo.com',
    seoTitle: 'Duolingo English Test 2026: Format, Scores, Cost & Acceptance',
    metaDescription:
      'Duolingo English Test guide — the one-hour at-home adaptive test, the 2025 speaking and listening changes, 10–160 scoring, subscores, cost and acceptance.',
    lead: [
      'The Duolingo English Test is an online English proficiency test taken at home on a computer with a webcam, without an appointment, in about an hour. It is computer-adaptive, so the difficulty and the number of questions change with each answer, and it is proctored after the event by reviewers who watch the recording before a result is certified. Results arrive within two days and are accepted by more than 6,500 institutions, most of them in the United States, Canada and the United Kingdom, for admission rather than for visas.',
      'The test was reshaped in July 2025. An Interactive Speaking task — a simulated conversation of six to eight questions with an animated character, each answered in 35 seconds — replaced Listen, Then Speak; Read Aloud was removed; and Interactive Listening was expanded with a Listen and Complete stage. The result is a test that spends more of its hour on connected speech and conversation than the older version did.',
    ],
    quickFacts: [
      ['Administered by', 'Duolingo, online at home with computer, webcam and a phone as a second camera'],
      ['Used for', 'University admission at 6,500+ institutions; not generally accepted for visas'],
      ['Format', 'About one hour — 5 minutes of setup, 45 minutes of adaptive questions, 10 minutes of writing and speaking samples'],
      ['Scoring', '10–160 in steps of 5, with subscores for Literacy, Comprehension, Conversation and Production'],
      ['Results', 'Within two days; within 12 hours with the Faster Results add-on'],
      ['Validity', 'Two years; up to three tests may be bought in any 30 days'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The certified test has three stages. Onboarding checks the camera, speakers and microphone, takes the government photo ID, and sets up the phone as a second camera recording the computer. The adaptive test then runs a sequence of question types — Read and Select, Fill in the Blanks, Read and Complete, Listen and Type, Interactive Reading, Interactive Listening, Write About the Photo, Interactive Writing, Speak About the Photo, Read Then Speak and Interactive Speaking — drawing from a large pool so that no two tests repeat. It closes with a Writing Sample and a Speaking Sample that are not scored but are sent to institutions alongside the result.',
      },
      {
        type: 'p',
        text: 'Scores run from 10 to 160 in increments of five. Four individual subscores — speaking, writing, reading and listening — average to the overall score, and four integrated subscores are each the average of two of them: Literacy (reading and writing), Comprehension (reading and listening), Conversation (listening and speaking) and Production (writing and speaking). Duolingo’s published comparison places 120 alongside IELTS 6.5 and TOEFL iBT 87–92, and 130 alongside IELTS 7.0 and TOEFL 98–103.',
      },
      {
        type: 'list',
        title: 'What makes the Duolingo English Test distinctive',
        items: [
          { text: 'No appointment and no centre', note: 'the test is bought online and taken at any time on a computer at home, with results in two days.' },
          { text: 'Adaptive in difficulty and in length', note: 'the engine asks more or fewer questions until it is confident of the score, so two candidates sit different tests.' },
          { text: 'Strict proctoring rules', note: 'eyes on screen, no headphones, no one else in the room, no leaving the browser; a breach means the test is not certified.' },
          { text: 'A price a fraction of IELTS or TOEFL', note: 'the fee is set in US dollars and shown at purchase; a two-test bundle is cheaper per test.' },
        ],
      },
      {
        type: 'note',
        title: 'Check that the test is accepted for the purpose, not only by the institution',
        text: 'Many universities accept the Duolingo English Test for admission but visa authorities generally do not: Australia’s Department of Home Affairs excludes tests delivered entirely online, and UK Student visa applicants who need a Secure English Language Test cannot use it. A candidate who needs one score for both admission and a visa should check the visa rule before choosing this test.',
      },
    ],
    stages: [
      {
        name: 'Setup and identity',
        mode: 'About 5 minutes',
        detail:
          'Camera, microphone and speakers are checked, a government-issued photo ID is photographed, the phone is positioned as a second camera showing the computer and desk, and the test rules are accepted. The test cannot be paused once started.',
      },
      {
        name: 'Adaptive test',
        mode: 'About 45 minutes; question count varies',
        detail:
          'Read and Select (15–18 items), Fill in the Blanks (6–9), Read and Complete (3–6), Listen and Type (6–9), two Interactive Reading sets of six questions, two Interactive Listening conversations of eight to ten questions, three Write About the Photo tasks, one Interactive Writing set of two, one Speak About the Photo, one Read Then Speak and one Interactive Speaking conversation of six to eight questions.',
      },
      {
        name: 'Writing and speaking samples',
        mode: 'About 10 minutes; unscored',
        detail:
          'A five-minute written response to a prompt and a spoken response of one to three minutes. Neither counts towards the score, but both are attached to the certificate that institutions see, so they are read.',
      },
      {
        name: 'Review and certification',
        mode: 'Within two days',
        detail:
          'Proctors review the recording for rule breaches before the result is certified. The result appears in the account and can be shared with any number of institutions free of charge; it is valid for two years. A new test cannot be started until the previous result is released, and at most three tests may be bought in any 30-day period.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'Duolingo English Test syllabus — every question type in the adaptive test, how often each appears, and what the 2025 changes added and removed.',
        lead: [
          'There is no topic list. There are thirteen question types, and the adaptive engine decides how many of each you meet.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Question types and frequency, as Duolingo publishes them for the current test.',
            head: ['Question type', 'How many', 'What it asks'],
            rows: [
              ['Read and Select', '15–18', 'Decide whether each displayed word is a real English word'],
              ['Fill in the Blanks', '6–9', 'Complete a sentence with the missing word'],
              ['Read and Complete', '3–6', 'Type the missing letters to restore a damaged text'],
              ['Listen and Type', '6–9', 'Type an utterance you hear'],
              ['Interactive Reading', '2 sets of 6', 'Complete the Sentences, Complete the Passage, Highlight the Answer, Identify the Idea, Title the Passage'],
              ['Interactive Listening', '2 conversations of 8–10', 'Listen and Complete, Listen and Respond, Summarize the Conversation'],
              ['Write About the Photo', '3', 'A one-minute written description of an image'],
              ['Interactive Writing', '1 set of 2', 'A response and a follow-up on one topic'],
              ['Speak About the Photo', '1', 'A spoken description of an image'],
              ['Read, Then Speak', '1', 'A spoken response to a written prompt'],
              ['Interactive Speaking', '1 set of 6–8', 'A simulated conversation; 35 seconds per answer; questions follow from your answers'],
              ['Writing Sample', '1', 'Five minutes on a topic; unscored, shared with institutions'],
              ['Speaking Sample', '1', 'One to three minutes on a topic; unscored, shared with institutions'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Interactive Listening, since 1 July 2025',
                'Each conversation opens with a spoken scenario and three or four Listen and Complete gap questions, then five or six Listen and Respond turns in which the other speaker’s audio plays once only, and ends with a written summary. One timer of 6 minutes 30 seconds covers everything before the summary; the summary has 75 seconds. Minor spelling and grammar slips are not penalised where meaning is clear.',
              ],
              [
                'Interactive Speaking, since 1 July 2025',
                'Six to eight questions asked one at a time by an animated character, each answered in 35 seconds, with later questions chosen from what you said earlier. It counts towards the overall score and the speaking subscore, replaced Listen Then Speak, and Read Aloud was removed at the same time to keep the test to an hour.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'Duolingo — test structure and question types', href: 'https://testcenter.zendesk.com/hc/en-us/sections/39104552844557-Test-Structure-and-Questions' },
              { label: 'Duolingo — 2025 test updates', href: 'https://testcenter.zendesk.com/hc/en-us/sections/23461200112909-2025-TEST-UPDATES' },
              { label: 'Duolingo — free practice test', href: 'https://englishtest.duolingo.com/applicants' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'Duolingo English Test pattern — the adaptive hour, the 10–160 scale and subscores, the IELTS and TOEFL comparison, proctoring and results.',
        lead: [
          'An hour at home, scored on 10–160 with eight subscores, certified after a human review of the recording.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The hour as Duolingo describes it.',
            head: ['Stage', 'Time', 'Scored?'],
            rows: [
              ['Setup and ID verification', '5 minutes', 'No'],
              ['Adaptive assessment', '45 minutes', 'Yes'],
              ['Writing and speaking samples', '10 minutes', 'No — shared with institutions'],
            ],
          },
          {
            type: 'table',
            caption: 'Duolingo’s published overall-score comparison. Institutions set their own minimums.',
            head: ['DET', 'IELTS', 'TOEFL iBT'],
            rows: [
              ['160', '8.5–9', '120'],
              ['150', '8', '117–118'],
              ['140', '7.5', '109–112'],
              ['130', '7', '98–103'],
              ['120', '6.5', '87–92'],
              ['110', '6', '76–81'],
              ['100', '5.5', '65–69'],
              ['90', '5', '53–58'],
              ['80', '4.5', '41–46'],
              ['70', '4', '30–34'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Subscores',
                'Speaking, writing, reading and listening are scored individually and average to the overall score. Literacy, Comprehension, Conversation and Production are each the average of two of them, and are what many institutions set minimums on.',
              ],
              [
                'Adaptivity',
                'Question difficulty rises and falls with performance, and the number of questions varies with the engine’s confidence in the score. A run of hard questions is a sign of doing well, not of trouble.',
              ],
              [
                'Proctoring',
                'The webcam, the phone camera and the screen are recorded and reviewed before certification. Looking away from the screen, headphones, another person, a second device, note-taking or leaving the test window can all void the attempt.',
              ],
              [
                'Cost and retakes',
                'The fee is set in US dollars at purchase, with a cheaper two-test bundle and a paid Faster Results option that returns the score within 12 hours. Up to three tests may be purchased in any 30 days, and a new test cannot begin until the previous result is out.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'Duolingo English Test practice — the free official practice test, why it is the only reliable mirror of the adaptive format, and what to take from it.',
        lead: [
          'No past papers exist. The free practice test on the official site uses the same question types and adaptive engine and gives an estimated score.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The official practice test takes about 45 minutes, runs the same question types as the certified test and returns a score estimate; it can be taken as often as wanted. Because the item pool is enormous and every certified test is different, the value of practice lies in knowing each type’s mechanics — where the timer is, how the Interactive Listening conversation unfolds, how quickly the 35-second speaking window closes — rather than in seeing familiar questions.',
          },
          {
            type: 'list',
            title: 'What to take from each practice run',
            items: [
              { text: 'The score estimate against the target', note: 'most universities publish a minimum overall and sometimes subscore minimums; compare to both.' },
              { text: 'Listen and Type accuracy', note: 'transcription errors are the commonest avoidable loss, and the audio can be replayed only a limited number of times.' },
              { text: 'Interactive Speaking pacing', note: 'answers should fill most of the 35 seconds with connected sentences; short answers give the engine little to score.' },
              { text: 'Read and Complete speed', note: 'the damaged-text items are short and timed; hesitating over one gap costs the rest.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'Duolingo — free practice test', href: 'https://englishtest.duolingo.com/applicants' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'TOEFL guide', to: '/entrance-exams/international/toefl/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Duolingo English Test mock tests — rehearsing the home setup and proctoring rules as well as the questions, and reading the estimated score.',
        lead: [
          'Rehearse the room, the cameras and the rules. Most voided attempts fail on conduct, not on English.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Set the room up as for the real test', text: 'Empty desk, door closed, no headphones, phone mounted to show the screen and desk, and no one else present. Practise under these conditions so that they feel ordinary.' },
              { title: 'Take the official practice test in one sitting', text: 'About 45 minutes without stopping, eyes on the screen throughout.' },
              { title: 'Time the speaking answers', text: 'Fill the 35-second Interactive Speaking windows and the one-to-three-minute Speaking Sample with structured, continuous speech.' },
              { title: 'Check the estimate against subscore minimums', text: 'A university that asks for 120 overall and 105 in each subscore rejects an uneven 125.' },
              { title: 'Space the certified attempts', text: 'A result takes two days and a new test cannot start before it; three purchases in 30 days is the cap.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'Duolingo English Test preparation — reading widely for the vocabulary items, dictation practice, conversational speaking, and the rules that void a test.',
        lead: [
          'Short daily practice across all four skills suits an adaptive test better than a long course on one.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From purchase to certificate',
            items: [
              { title: 'Confirm acceptance for the purpose', text: 'Check the university’s admissions page for the minimum overall and subscores, and whether a visa route you need accepts the test — most do not.' },
              { title: 'Practise the vocabulary items', text: 'Read and Select and Read and Complete reward wide reading; a daily passage with unfamiliar words looked up does more than a word list.' },
              { title: 'Drill dictation', text: 'Listen and Type and Listen and Complete reward exact transcription; ten minutes a day with news audio raises both.' },
              { title: 'Speak in full sentences to a timer', text: 'Interactive Speaking and the photo tasks want continuous, organised speech for the whole window; rehearse with a stopwatch.' },
              { title: 'Read the rules and the equipment list', text: 'A supported browser, a working webcam, a phone for the second camera, and a room that meets the rules; a violation found in review voids the attempt without refund.' },
              { title: 'Buy with the timeline in mind', text: 'Results in two days, 12 hours with Faster Results; the certificate is shared free from the account to any number of institutions.' },
            ],
          },
          {
            type: 'note',
            title: 'The unscored samples are still read',
            text: 'The Writing Sample and Speaking Sample do not affect the score, but they travel with the certificate and admissions staff open them. A candidate who treats the last ten minutes as a formality sends a weaker application than their score suggests.',
          },
        ],
      },
      'study-material': {
        description:
          'Duolingo English Test study material — the official practice and guides, and general reading, listening and speaking sources for an adaptive test.',
        lead: [
          'Official practice for the format; broad, daily English for the adaptive content.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By component.',
            head: ['Component', 'What to use', 'Note'],
            rows: [
              ['Format', 'The free official practice test and the help-centre pages for each question type', 'The only material that reproduces the engine.'],
              ['Vocabulary', 'Daily reading of articles and short fiction; a personal word list from context', 'Read and Select tests recognition of real words against invented ones.'],
              ['Listening and dictation', 'Podcasts and news in several accents; typed transcription of short clips', 'Audio plays a limited number of times.'],
              ['Speaking', 'Recorded 35-second and two-minute answers on everyday topics', 'Listen back for pauses and unfinished sentences.'],
              ['Writing', 'Timed five-minute and one-minute responses; a grammar reference', 'Meaning-changing errors matter; minor slips do not.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'PTE Academic guide', to: '/entrance-exams/international/pte/' },
              { label: 'TOEFL guide', to: '/entrance-exams/international/toefl/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'How does the Duolingo English Test work?',
        a: 'It is taken online at home in about an hour: five minutes of setup and ID checks, 45 minutes of computer-adaptive questions across reading, listening, writing and speaking, and ten minutes of unscored writing and speaking samples. Proctors review the recording afterwards, and the certified result is released within two days, or within 12 hours with the paid Faster Results option.',
      },
      {
        q: 'What changed in the Duolingo English Test in 2025?',
        a: 'From 1 July 2025 an Interactive Speaking task — six to eight questions in a simulated conversation, 35 seconds per answer — replaced Listen, Then Speak, and Read Aloud was removed. Interactive Listening gained a Listen and Complete stage of three or four gap questions before the Listen and Respond turns, with a single timer of 6 minutes 30 seconds and 75 seconds for the closing summary.',
      },
      {
        q: 'What Duolingo score equals IELTS 6.5 or 7?',
        a: 'By Duolingo’s published comparison, 120 corresponds to IELTS 6.5 and TOEFL iBT 87–92, and 130 to IELTS 7.0 and TOEFL 98–103. Universities set their own minimums, often with subscore floors, so check the admissions page.',
      },
      {
        q: 'Is the Duolingo English Test accepted for visas?',
        a: 'Generally not. It is accepted for admission by more than 6,500 institutions, but Australia’s Department of Home Affairs does not accept any test delivered entirely online, and it is not a UK Secure English Language Test. Candidates who need a score for a visa usually need IELTS, PTE Academic, TOEFL or a similar centre-based test.',
      },
      {
        q: 'How many times can the Duolingo English Test be taken?',
        a: 'Up to three tests may be purchased in any 30-day period, counted by looking back over the previous 30 days, and a new test cannot be taken until the result of the previous one has been released. Results are valid for two years.',
      },
      {
        q: 'What does the Duolingo English Test cost?',
        a: 'The fee is set in US dollars and shown at purchase, with a discounted bundle of two tests and an optional Faster Results add-on. Duolingo describes it as a fraction of the cost of other tests; the current figure is on the purchase page after signing in.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     ACT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'act',
    path: '/entrance-exams/international/act/',
    name: 'ACT',
    fullName: 'ACT college admissions test',
    authority: 'ACT, Inc.',
    official: 'act.org',
    seoTitle: 'ACT 2026: Enhanced Format, International Dates, Fees & Scoring',
    metaDescription:
      'ACT guide for Indian students — the enhanced format with optional science, section timings, the 1–36 composite, 2026–27 international dates and fees.',
    lead: [
      'The ACT is one of the two admissions tests used by universities in the United States for undergraduate entry, accepted by every four-year US college and by more than 200 universities outside the US. It tests English, mathematics and reading, with science and a written essay as optional add-ons, and reports a composite score from 1 to 36. Outside the US it is taken online at test centres over two-day windows seven times a year.',
      'The test was reshaped in 2025 and 2026. Since September 2025 the composite has been the average of English, math and reading alone, science having become optional; and from February 2026 the enhanced format shortened the sections — English to 50 questions in 35 minutes, math to 45 in 50, reading to 36 in 40 — so that the core test runs a little over two hours. That change matters for anyone preparing from older material.',
    ],
    quickFacts: [
      ['Administered by', 'ACT, Inc.; online at international test centres, paper or online in the US'],
      ['Used for', 'Undergraduate admission at all US four-year colleges and 200+ universities elsewhere'],
      ['Sections', 'English 50 questions / 35 min; Math 45 / 50; Reading 36 / 40; Science optional 40 / 40; Writing optional 40 min'],
      ['Scoring', 'Composite 1–36 as the average of English, math and reading; section scores 1–36; writing 2–12; no penalty for wrong answers'],
      ['International dates 2026–27', '5 Sept; 23–24 Oct; 11–12 Dec 2026; 12–13 Feb; 2–3 Apr; 11–12 Jun; 9–10 Jul 2027'],
      ['International fee', 'US$188.50 for English, math and reading; $198.50 with science; $213.50 with writing; $223.50 with both'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The English section asks you to revise and edit short texts across genres; math covers content taught up to the start of grade 12, with a permitted calculator; reading tests close reading and integration of information across sources. Science, now optional, tests interpretation of data and experimental reasoning in biology, chemistry, earth and space science and physics rather than recall. The optional writing test is a single 40-minute argumentative essay scored 2 to 12 by two readers.',
      },
      {
        type: 'p',
        text: 'ACT scores each section on the number of correct answers converted to a 1–36 scale, then averages English, math and reading to the nearest whole number for the composite. Candidates who take science also receive a STEM score averaging math and science, and those who take writing an ELA score averaging English, reading and writing. There is no deduction for wrong answers. The reported 2024 average composite was 19.4; ACT’s own guidance treats 24 to 28 as strong for selective universities and 30 and above as the range for the most selective.',
      },
      {
        type: 'list',
        title: 'What makes the ACT distinctive',
        items: [
          { text: 'Optional science and writing', note: 'a candidate can sit only English, math and reading, or add science, writing or both by the late deadline.' },
          { text: 'A curriculum-based test', note: 'the sections map to school subjects, and the reporting categories tell you which skills lost marks.' },
          { text: 'Two-day international windows', note: 'each date outside the US is a Friday–Saturday window with morning and afternoon sessions, taken online at a centre.' },
          { text: 'An official SAT concordance', note: 'ACT and the College Board publish tables relating the 1–36 and 400–1600 scales; ACT 30 sits near SAT 1370.' },
        ],
      },
      {
        type: 'note',
        title: 'Old practice material is now the wrong length',
        text: 'Any ACT paper written before 2025 has 75 English questions in 45 minutes, 60 math in 60, 40 reading in 35 and a compulsory science section. The enhanced test is shorter in every section and gives more time per question. Use such papers for content, but time yourself to the current numbers and treat the composite you compute from them with caution.',
      },
    ],
    stages: [
      {
        name: 'Register and choose the options',
        mode: 'MyACT account; international fee from US$188.50',
        detail:
          'Registration is online with a photo upload and a high-school code. Science and writing are added or removed up to the late deadline. International registration closes about four weeks before each window, with a late fee of $42 for two further weeks and a $49 charge for date or centre changes.',
      },
      {
        name: 'The core test',
        mode: 'English, math, reading — about 2 hours 5 minutes',
        detail:
          'English: 50 questions in 35 minutes on revising and editing texts. Math: 45 questions in 50 minutes across number and quantity, algebra, functions, geometry, statistics and probability, with a permitted calculator. Reading: 36 questions in 40 minutes on key ideas, craft and structure, and integration of ideas across passages.',
      },
      {
        name: 'Optional sections',
        mode: 'Science 40 questions / 40 minutes; Writing one essay / 40 minutes',
        detail:
          'Science covers interpretation of data, scientific investigation and evaluation of models and results, drawn from biology, chemistry, earth and space sciences and physics. Writing is an argumentative essay on a given issue, scored 2–12 by two readers and reported separately; neither optional section changes the composite.',
      },
      {
        name: 'Scores and reports',
        mode: 'Online from about four business days; up to 8 weeks',
        detail:
          'International scores begin to appear in the MyACT account as soon as four business days after the test and occasionally take up to eight weeks; writing scores are released once all scores for the date are ready. The fee includes reports to up to four colleges; further reports are $20 each. Only one test per administration is permitted, and a second sitting in the same window is cancelled without refund.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'ACT syllabus — the reporting categories and weights for English, math, reading and science, and what the writing test asks.',
        lead: [
          'The ACT is built on school curricula, and ACT publishes the weight of each reporting category, which is the nearest thing it has to a syllabus.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Reporting categories and their share of operational questions, as ACT publishes them for the enhanced test.',
            head: ['Section', 'Operational questions', 'Reporting categories'],
            rows: [
              ['English', '40, plus 10 unscored field-test items', 'Production of Writing 38–43%; Knowledge of Language 18–23%; Conventions of Standard English 38–43%'],
              ['Mathematics', '41, plus 4 unscored', 'Preparing for Higher Math 80% — number and quantity 10–12%, algebra 17–20%, functions 17–20%, geometry 17–20%, statistics and probability 12–15%; Integrating Essential Skills 20%; modelling reported across both'],
              ['Reading', '27, plus 9 unscored', 'Key Ideas and Details 44–52%; Craft and Structure 26–33%; Integration of Knowledge and Ideas 19–26%'],
              ['Science (optional)', '34, plus 6 unscored', 'Interpretation of Data 38–50%; Scientific Investigation 18–32%; Evaluation of Models, Inferences and Experimental Results 24–38%'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'English',
                'Passages with underlined portions and questions asking which revision is best, or whether a sentence should be added, moved or deleted. Grammar, punctuation, sentence structure, word choice, tone and organisation, with an emphasis on concision and relevance rather than on naming rules.',
              ],
              [
                'Mathematics',
                'Content through the beginning of grade 12: pre-algebra and elementary algebra, coordinate and plane geometry, intermediate algebra and functions, trigonometry, statistics and probability. Indian candidates usually find the content familiar and the phrasing of word problems the difficulty.',
              ],
              [
                'Reading',
                'Passages in literary narrative, social science, humanities and natural science, including a paired-passage set, with questions on main idea, detail, inference, vocabulary in context, the author’s purpose and the relationship between two texts.',
              ],
              [
                'Science',
                'Data representation in tables and graphs, research summaries describing experiments, and conflicting viewpoints; the questions are about reading and reasoning from what is shown rather than recalling science, though a little background helps.',
              ],
              [
                'Writing',
                'One prompt presenting an issue and three perspectives; the essay takes and develops a position, engages with the perspectives, and is scored on ideas and analysis, development and support, organisation, and language use, each 2–12 from two readers.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'ACT — understanding your scores and reporting categories', href: 'https://global.act.org/content/global/en/products-and-services/the-act-non-us/scores/understanding-your-scores.html' },
              { label: 'ACT — the test for non-US students', href: 'https://global.act.org/content/global/en/products-and-services/the-act-non-us.html' },
              { label: 'SAT guide', to: '/entrance-exams/international/sat/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'ACT exam pattern — enhanced section timings, the optional science and writing tests, 1–36 scoring, the composite, and the 2026–27 international calendar.',
        lead: [
          'Three scored sections of about two hours, two optional add-ons, and a composite that is simply the average of three section scores.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The enhanced ACT, in force for international dates from February 2026.',
            head: ['Section', 'Questions', 'Time', 'Score', 'Counts in composite?'],
            rows: [
              ['English', '50', '35 minutes', '1–36', 'Yes'],
              ['Mathematics', '45', '50 minutes', '1–36', 'Yes'],
              ['Reading', '36', '40 minutes', '1–36', 'Yes'],
              ['Science (optional)', '40', '40 minutes', '1–36; STEM score with math', 'No'],
              ['Writing (optional)', '1 prompt', '40 minutes', '2–12; ELA score with English and reading', 'No'],
            ],
          },
          {
            type: 'table',
            caption: '2026–27 international test dates and deadlines, as ACT publishes them. Late registration carries a $42 fee.',
            head: ['Test window', 'Registration deadline', 'Late deadline', 'Initial score release'],
            rows: [
              ['5 September 2026', '7 August', '21 August', '10 September'],
              ['23–24 October 2026', '25 September', '9 October', '29 October'],
              ['11–12 December 2026', '13 November', '27 November', '17 December'],
              ['12–13 February 2027', '15 January', '29 January', '18 February'],
              ['2–3 April 2027', '5 March', '19 March', '8 April'],
              ['11–12 June 2027', '14 May', '28 May', '17 June'],
              ['9–10 July 2027', '11 June', '25 June', '15 July'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Scoring',
                'Each section’s raw score — the number correct, with nothing deducted for wrong answers — is converted to a 1–36 scale score so that forms are comparable. The composite is the mean of English, math and reading, rounded: halves round up. Percentile ranks accompany every score.',
              ],
              [
                'Fees outside the US',
                'US$188.50 for the core test, $198.50 with science, $213.50 with writing and $223.50 with both, each including reports to four colleges. Science can be added for $10 and writing for $25 up to the late deadline; extra score reports are $20; a test-date or centre change is $49.',
              ],
              [
                'Retesting',
                'Scores cannot be received from more than one test date within a single administration. Otherwise the ACT may be repeated across dates, and when sending scores a candidate chooses which test date’s results a college receives.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'ACT previous papers — the official released tests, how to re-time them for the enhanced format, and what to read in the results.',
        lead: [
          'ACT releases full official tests. Since 2026 they must be re-timed to the shorter sections, and the science section treated as optional.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The official practice tests and the Official ACT Prep Guide contain real retired forms, and the ACT My Answer Key service returns your own questions and answers after some dates. A form written before the enhancement has 75 English, 60 math and 40 reading questions with less time per question than the current test; the content and question style are unchanged, so it is still the best material available, but the timing needs adjusting and the composite recomputed from the three core sections.',
          },
          {
            type: 'steps',
            title: 'Using an older form honestly',
            items: [
              { title: 'Re-time each section', text: 'Give yourself the current per-question pace — 42 seconds an English question, 67 a math question, 67 a reading question — rather than the old section clock.' },
              { title: 'Compute the composite from three sections', text: 'Average English, math and reading only; science no longer counts unless a target university asks for it.' },
              { title: 'Classify errors by reporting category', text: 'ACT’s category weights tell you where a mark is worth most; a weak Conventions of Standard English score is a grammar list, a weak Integration of Ideas score is a paired-passage habit.' },
              { title: 'Keep the science section if you will sit it', text: 'Some engineering and science programmes still ask for it; check before dropping it from practice.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'ACT — free practice tests and prep for non-US students', href: 'https://global.act.org/content/global/en/products-and-services/the-act-non-us.html' },
              { label: 'SAT guide', to: '/entrance-exams/international/sat/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'ACT mock tests — full timed sittings of the enhanced format, the two-day online window, and the pacing that matters most in reading and science.',
        lead: [
          'Sit the core test as one two-hour block on a computer, since that is how it is delivered outside the US.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Take the first mock before any preparation', text: 'The composite tells you how far you are from a target, and the section spread tells you where to spend the months.' },
              { title: 'Sit English, math and reading together', text: 'About two hours and five minutes on screen without a break, in that order, with the calculator you will use on the day.' },
              { title: 'Add science and writing only if you will take them', text: 'They lengthen the sitting by up to 80 minutes; rehearse them only if a target programme wants them.' },
              { title: 'Answer everything', text: 'No penalty applies, so a blank is a certain zero; keep the last minute of each section to fill gaps.' },
              { title: 'Review by reporting category', text: 'Fix the categories with the largest weight first; the English conventions category alone is nearly two-fifths of that section.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English study material', to: '/study-material/english/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'ACT preparation — choosing between ACT and SAT, deciding on science and writing, a timeline against the international dates, and pacing that lifts a composite.',
        lead: [
          'Most Indian candidates find the ACT’s mathematics familiar and its reading pace the challenge. Prepare for speed with accuracy, not for content.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From choosing the test to sending scores',
            items: [
              { title: 'Decide ACT or SAT with a diagnostic of each', text: 'Every US college accepts both and uses the official concordance to compare. The ACT is more curriculum-based and faster-paced; the SAT is shorter and adaptive. Take one practice test of each and choose the higher percentile.' },
              { title: 'Decide on science and writing early', text: 'Check whether any target programme requires or recommends them. If not, dropping them shortens the test and the preparation.' },
              { title: 'Pick a date at least two months before deadlines', text: 'ACT advises testing at least two months ahead of the earliest application deadline; the October and December windows suit regular-decision applications, September and earlier suit early decision.' },
              { title: 'Build reading speed deliberately', text: 'Thirty-six questions in forty minutes across four passages leaves about ten minutes a passage; timed daily reading with questions is the single most useful habit.' },
              { title: 'Revise mathematics by category', text: 'Content through the start of grade 12 — algebra, functions, geometry, statistics — is usually known; the errors come from wording and from the calculator being used where mental arithmetic is faster.' },
              { title: 'Register a month before the deadline and upload the photo', text: 'International registration closes about four weeks before the window and the photo deadline coincides with the late deadline; a missing photo cancels the registration.' },
            ],
          },
          {
            type: 'note',
            title: 'Send scores selectively',
            text: 'The fee includes four college reports named at registration, and further reports cost $20 each. Because scores from different dates are sent separately, a candidate can test more than once and send only the better date, subject to each college’s own policy on score choice.',
          },
        ],
      },
      'study-material': {
        description:
          'ACT study material — the Official ACT Prep Guide and free official practice, plus grammar, reading and mathematics sources matched to the reporting categories.',
        lead: [
          'Official released tests for practice; a grammar handbook, a reading routine and a school mathematics revision for the rest.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By section.',
            head: ['Section', 'What to use', 'Note'],
            rows: [
              ['English', 'The Official ACT Prep Guide; a concise English usage and punctuation handbook', 'Conventions of Standard English is nearly two-fifths of the section.'],
              ['Mathematics', 'Class 10–12 algebra, geometry, trigonometry and statistics revision; official practice questions', 'A permitted calculator; know when not to use it.'],
              ['Reading', 'Daily timed passages in fiction, social science, humanities and natural science', 'About ten minutes a passage on the day.'],
              ['Science (if taken)', 'Official science practice; graph and table reading drills', 'Reasoning from data, not recall.'],
              ['Writing (if taken)', 'Sample prompts and the published scoring rubric', 'Two readers, four domains, 2–12.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'SAT guide', to: '/entrance-exams/international/sat/' },
              { label: 'TOEFL guide', to: '/entrance-exams/international/toefl/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the ACT exam pattern in 2026?',
        a: 'Three scored sections — English with 50 questions in 35 minutes, mathematics with 45 in 50 and reading with 36 in 40 — plus an optional science section of 40 questions in 40 minutes and an optional 40-minute writing essay. Each section is scored 1–36, the composite is the average of English, math and reading, and there is no penalty for wrong answers. The enhanced, shorter format applies to international dates from February 2026.',
      },
      {
        q: 'Is the ACT science section compulsory?',
        a: 'No. Since September 2025 science is an optional add-on that does not affect the composite, which is now the average of English, math and reading. Candidates who take it receive a science score and a STEM score averaging math and science. Some programmes still ask for it, so check each university before dropping it.',
      },
      {
        q: 'When is the ACT held outside the US in 2026–27?',
        a: 'Seven windows: 5 September 2026; 23–24 October; 11–12 December; 12–13 February 2027; 2–3 April; 11–12 June; and 9–10 July. Registration closes about four weeks before each, with a late deadline two weeks later, and initial scores are released roughly a week after the window.',
      },
      {
        q: 'How much does the ACT cost for Indian students?',
        a: 'The international fee is US$188.50 for English, math and reading, $198.50 with science, $213.50 with writing and $223.50 with both, including score reports to four colleges. Late registration adds $42, a date or centre change $49, and each additional score report $20.',
      },
      {
        q: 'What is a good ACT score?',
        a: 'ACT reports the 2024 average composite as 19.4 and describes 24 to 28 as strong for selective universities and 30 to 36 as the range for the most selective. A good score is one at or above the middle range of admitted students at the universities you are applying to, which each publishes. By the official concordance, ACT 30 corresponds roughly to SAT 1370.',
      },
      {
        q: 'ACT or SAT — which should an Indian student take?',
        a: 'Either; every US college accepts both and compares them by concordance. The ACT is longer in question count, faster in pace and closer to the school curriculum, with an optional science section; the SAT is shorter, adaptive and more reasoning-based. Take a timed practice test of each and choose the one on which you rank higher.',
      },
    ],
  },
  /* ══════════════════════════════════════════════════════════════
     LSAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'lsat',
    path: '/entrance-exams/international/lsat/',
    name: 'LSAT',
    fullName: 'Law School Admission Test',
    authority: 'Law School Admission Council (LSAC)',
    official: 'lsac.org',
    seoTitle: 'LSAT 2026–27: Format, Test Centres, International Dates, Fees & Scoring',
    metaDescription:
      'LSAT guide — the four-section test and Argumentative Writing, the 120–180 scale, test centres from August 2026, international dates, fees and scores.',
    lead: [
      'The LSAT is the admissions test for law schools in the United States and Canada — the only test accepted by every ABA-approved law school — and is used by some law programmes elsewhere. It is a test of reading and reasoning rather than of law: four 35-minute multiple-choice sections in Reading Comprehension and Logical Reasoning, three of which count, and a separate unscored essay, LSAT Argumentative Writing, taken online at home up to eight days before the test.',
      'The 2026–27 cycle brought a structural change. From the August 2026 administration the multiple-choice test is taken in Prometric test centres for almost everyone, with remote testing only by exception for approved accommodations, active-duty military abroad or candidates more than 180 miles from a centre. International candidates, including those in India, sit in centres over designated international dates and schedule their session through Prometric in the order they registered.',
    ],
    quickFacts: [
      ['Administered by', 'Law School Admission Council, at Prometric test centres from August 2026; Argumentative Writing online at home'],
      ['Used for', 'Admission to all ABA-approved US law schools and Canadian law schools; some programmes elsewhere'],
      ['Format', 'Four 35-minute sections — three scored, one unscored — of Reading Comprehension and Logical Reasoning, plus a 50-minute unscored essay'],
      ['Scoring', '120–180 from the number correct; no deduction; percentile and score band reported; results reportable for five testing years'],
      ['International dates', '9–10 October 2026; 15–16 January, 9–10 April and 11–12 June 2027, with US-style dates also open to some'],
      ['Fee', 'US$253 for the 2026–27 testing year, including Argumentative Writing; Credential Assembly Service $219'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Reading Comprehension presents long, dense passages of the kind met in legal study — including a comparative pair — and asks about structure, inference, the author’s attitude and the function of a passage’s parts. Logical Reasoning presents short arguments and asks you to find the assumption, strengthen or weaken the argument, identify the flaw, resolve a paradox or draw the conclusion. The unscored fourth section is one of the two types and is not identified, so every section is worked as if it counts.',
      },
      {
        type: 'p',
        text: 'Scores are converted from the raw number correct to the 120–180 scale, reported with a percentile rank against the previous three testing years and a score band. A score report carries up to twelve reportable results, including absences and cancellations, and a result is reportable for five testing years after the year it was earned; scores from before July 2021 are no longer valid for admission. First-time candidates must complete and have approved LSAT Argumentative Writing before any score is released, and processing can take up to three weeks.',
      },
      {
        type: 'list',
        title: 'What makes the LSAT distinctive',
        items: [
          { text: 'No knowledge content', note: 'nothing legal is tested; the skills are close reading, argument analysis and the discipline to work fast without losing precision.' },
          { text: 'Scored on raw count alone', note: 'every question is worth the same and wrong answers cost nothing, so every question is answered.' },
          { text: 'A separate, unscored essay that still gates the score', note: 'law schools read it, and a first-timer’s score is held until it is approved.' },
          { text: 'Score Preview', note: 'for a fee, a candidate can see the score before deciding whether to keep or cancel it.' },
        ],
      },
      {
        type: 'note',
        title: 'LSAT—India is a different test',
        text: 'Several Indian law colleges admit through LSAT—India, a separate examination administered by Pearson VUE for Indian institutions on its own dates, with its own registration and scoring. The LSAT described here is the LSAC test for law schools in the United States, Canada and a few other countries. Do not confuse the two when registering.',
      },
    ],
    stages: [
      {
        name: 'Register and schedule',
        mode: 'LSAC account; US$253; scheduling through Prometric in registration order',
        detail:
          'Registration for every 2026–27 administration is open. The registration deadline is about six weeks before the test and is also the last day for a free date change or full refund; later changes cost $153 within seven days of the deadline and $253 after. Each registrant is assigned a scheduling window in the order they registered and books a centre session through Prometric when it opens, about three weeks before the test.',
      },
      {
        name: 'LSAT Argumentative Writing',
        mode: 'Online at home; 50 minutes; from eight days before the test',
        detail:
          'A debatable issue is presented with three or four perspectives; 15 minutes are given for prewriting analysis and 35 for drafting an argumentative essay that takes a position and engages with the other views. It is unscored but sent to law schools with the score, and a first-time taker’s score is not released until it is approved. A writing sample from July 2021 onwards remains valid for later attempts.',
      },
      {
        name: 'The multiple-choice test',
        mode: 'Four 35-minute sections at a Prometric centre',
        detail:
          'Two or three Logical Reasoning sections and one or two Reading Comprehension sections; three count and one is an unscored variable section used to trial questions. The sections may come in any order and the unscored one is not identified. A ten-minute break follows the second section.',
      },
      {
        name: 'Score release and reporting',
        mode: 'About three weeks after the test',
        detail:
          'Scores are posted to the LSAT Status page in the account on the release date — 28 October 2026 for the October international test, 3 February 2027 for January — and reported to the law schools applied to through the Credential Assembly Service. Score Preview lets a candidate see the score first and cancel it, for $46 if bought before the test or $87 after.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'LSAT syllabus — the Reading Comprehension and Logical Reasoning question types, the unscored section, and what LSAT Argumentative Writing asks.',
        lead: [
          'The LSAT has two question families and an essay. Knowing the question types, and the traps built into each, is the whole syllabus.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Reading Comprehension',
                'Four sets of about 27 questions in 35 minutes: three single passages and one comparative pair, drawn from law, humanities, social science and natural science. Questions ask for the main point, the purpose of a paragraph, what the author would agree with, what can be inferred, the meaning of a phrase in context and, for the pair, how the two passages relate. The passages are chosen to be unfamiliar and dense, and the difficulty lies in tracking the argument rather than the subject.',
              ],
              [
                'Logical Reasoning',
                'About 25 short arguments in 35 minutes, each followed by one question. The recurring types are: identify the assumption the argument depends on; strengthen or weaken; find the flaw in the reasoning; resolve an apparent paradox; identify the conclusion or the role of a statement; find a parallel argument or a parallel flaw; and must-be-true or most-strongly-supported inference. Accuracy on the argument’s structure matters more than reading speed.',
              ],
              [
                'The unscored section',
                'One additional Reading Comprehension or Logical Reasoning section, placed anywhere in the test, used to validate new questions. Because it is not identified, no section can be treated lightly.',
              ],
              [
                'LSAT Argumentative Writing',
                'An issue with several perspectives; 15 minutes of guided prewriting and 35 minutes of essay. There is no right position; law schools read for reasoning, organisation, clarity, engagement with the other views and command of written English. It is unscored but part of the file every school sees.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'LSAC — types of LSAT questions', href: 'https://www.lsac.org/lsat/prepare/types-lsat-questions' },
              { label: 'LSAC — LSAT scoring', href: 'https://www.lsac.org/lsat/lsat-scoring' },
              { label: 'CLAT and Indian law entrances', to: '/entrance-exams/law/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'LSAT exam pattern — four 35-minute sections, the 120–180 scale, the writing requirement, the 2026–27 international dates, fees and the return to test centres.',
        lead: [
          'Three scored sections, one that is not, and an essay that is unscored but required. Everything is timed at 35 minutes.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The LSAT as LSAC describes it.',
            head: ['Component', 'Time', 'Questions', 'Scored?'],
            rows: [
              ['Logical Reasoning', '35 minutes per section', 'About 25 each', 'Two or three sections; all but the variable one count'],
              ['Reading Comprehension', '35 minutes per section', 'About 27 each', 'One or two sections; all but the variable one count'],
              ['Variable section', '35 minutes', 'One of the two types', 'No — used to trial questions; not identified'],
              ['LSAT Argumentative Writing', '50 minutes, online at home', 'One prompt', 'No — read by law schools; required before a first score is released'],
            ],
          },
          {
            type: 'table',
            caption: '2026–27 international administrations. Dates are US Eastern Time; the registration deadline is also the free date-change and refund deadline.',
            head: ['Administration', 'Test dates', 'Writing opens', 'Registration deadline', 'Scheduling opens', 'Score release'],
            rows: [
              ['October 2026', '9–10 October', '29 September', '27 August', '22 September', '28 October'],
              ['January 2027', '15–16 January', '5 January', '1 December 2026', '22 December', '3 February'],
              ['April 2027', '9–10 April', '31 March', '25 February', '23 March', '28 April'],
              ['June 2027', '11–12 June', '1 June', '29 April', '25 May', '30 June'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Scoring',
                'The raw score is the number of questions answered correctly, all weighted equally, with nothing deducted for wrong answers. It is converted to the 120–180 scale so that scores from different forms are comparable, and reported with a percentile rank and a score band.',
              ],
              [
                'Fees for 2026–27',
                'US$253 for the LSAT including Argumentative Writing; $219 for the Credential Assembly Service that assembles transcripts and letters for applications; $45 per law school report. Score Preview costs $46 before the first test day or $87 after; a score audit $150; a test date change after the deadline $153 within seven days and $253 thereafter.',
              ],
              [
                'Testing mode',
                'From August 2026 the multiple-choice test is taken at Prometric centres. Remote testing continues only for approved disability accommodations, US military abroad, and domestic candidates more than 180 miles or three hours from a centre with capacity; those approved use a smartphone as a second camera. Argumentative Writing remains remote for everyone.',
              ],
              [
                'Repeats and validity',
                'A result is reportable for five testing years after the year it was earned, testing years running from 1 July to 30 June. LSAC limits how many times the test may be taken in a testing year, in five years and in a lifetime; the current limits are on its Limits on Repeating the LSAT page.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'LSAT previous papers — the Official LSAT PrepTests in LawHub, the free ones and the Advantage library, and how to use retired tests.',
        lead: [
          'LSAC releases retired tests as Official LSAT PrepTests. They are the only material that matches the real difficulty, and several are free.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Every LSAC account includes LawHub, which carries free Official LSAT PrepTests in the current testing interface and a practice Argumentative Writing prompt; LawHub Advantage, a paid subscription, opens an extensive library of full retired tests and more writing prompts. Because the question types and difficulty are stable, a test from several years ago is as useful as a recent one, and the interface in LawHub is the one used on test day.',
          },
          {
            type: 'steps',
            title: 'Working a retired test',
            items: [
              { title: 'Sit it as four timed sections with a break after the second', text: 'The stamina demand is real; a section worked in isolation overstates what you will score.' },
              { title: 'Log every Logical Reasoning error by question type', text: 'A pattern of assumption errors needs a different fix from a pattern of parallel-reasoning errors.' },
              { title: 'Re-read Reading Comprehension passages you got wrong for structure', text: 'Most errors come from losing the argument’s shape, not from vocabulary.' },
              { title: 'Write the essay from a LawHub prompt under the 15 + 35 split', text: 'The prewriting stage is new to most candidates and rewards being used properly.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'LSAC — LawHub and Official LSAT PrepTests', href: 'https://www.lsac.org/lsat' },
              { label: 'CLAT guide', to: '/entrance-exams/law/clat/' },
              { label: 'Verbal ability and reading comprehension notes', to: '/study-material/varc/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'LSAT mock tests — full four-section sittings in the LawHub interface, scored on 120–180, with the error analysis that raises a score.',
        lead: [
          'Use full retired tests in LawHub, timed, and treat the score as a measurement to plan from.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Take one untimed test to learn the question types', text: 'Then never untimed again; the 35-minute clock is part of what is being tested.' },
              { title: 'Sit full tests fortnightly, sections weekly', text: 'Four sections with the break, in the LawHub interface with its highlighting and flagging tools.' },
              { title: 'Answer every question', text: 'No penalty applies; guess on anything unfinished in the last thirty seconds.' },
              { title: 'Convert to the scale and track the trend', text: 'Retired tests come with their conversion tables; the percentile is what law schools compare.' },
              { title: 'Review the wrong and the slow', text: 'A right answer that took three minutes is a problem in a 35-minute section of 25 questions.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Verbal ability and reading comprehension notes', to: '/study-material/varc/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'LSAT preparation — a plan around the international dates, the Logical Reasoning method, reading dense passages, and the admin steps that hold up a score.',
        lead: [
          'The LSAT rewards method more than talent: a fixed way of reading an argument, applied a thousand times.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From registration to score report',
            items: [
              { title: 'Register early for the date you want', text: 'Scheduling windows at Prometric are assigned in registration order, and popular centres fill; the deadline is about six weeks before the test.' },
              { title: 'Learn Logical Reasoning by type', text: 'Work each question type in blocks until the approach is automatic — find the conclusion, find the support, name the gap — before mixing them under time.' },
              { title: 'Read dense prose daily', text: 'Long editorials, judicial opinions and academic abstracts, summarised in a sentence each; Reading Comprehension is a stamina and structure skill.' },
              { title: 'Do the writing early', text: 'Argumentative Writing opens eight days before the test and can take up to three weeks to approve; a first-timer’s score waits for it.' },
              { title: 'Decide on Score Preview before test day', text: 'It is cheaper bought in advance and lets you cancel a poor score before schools see it.' },
              { title: 'Set up the Credential Assembly Service', text: 'Most US law schools require CAS reports; transcripts and letters take time to assemble, and each school report is a separate fee.' },
            ],
          },
          {
            type: 'note',
            title: 'Indian candidates and the reading load',
            text: 'The mathematics-free LSAT is often assumed to be easy for strong English readers. It is not; the passages are chosen to resist skimming and the arguments to reward exact reading. Candidates from CLAT preparation have a head start in argument analysis but usually need to slow down and read for structure before they can speed up.',
          },
        ],
      },
      'study-material': {
        description:
          'LSAT study material — Official LSAT PrepTests through LawHub, LSAC’s free resources, and the reading and reasoning sources worth adding.',
        lead: [
          'Official retired tests for everything timed; a small set of method books for the technique.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By component.',
            head: ['Component', 'What to use', 'Note'],
            rows: [
              ['Logical Reasoning', 'Official PrepTests worked by question type; a method guide for argument structure', 'About 25 questions a section; accuracy first.'],
              ['Reading Comprehension', 'Official PrepTests; daily reading of dense non-fiction and judgments', 'Four passages including a comparative pair.'],
              ['Argumentative Writing', 'LawHub practice prompts; the 15-minute prewriting habit', 'Unscored, read by every school.'],
              ['Timing and interface', 'LawHub in the 2026–27 testing interface', 'The same tools as test day.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'CLAT guide', to: '/entrance-exams/law/clat/' },
              { label: 'LNAT guide', to: '/entrance-exams/international/lnat/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
              { label: 'GRE guide', to: '/entrance-exams/international/gre/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the LSAT exam pattern?',
        a: 'Four 35-minute multiple-choice sections — Logical Reasoning and Reading Comprehension — of which three are scored and one is an unidentified variable section used to trial questions, plus LSAT Argumentative Writing, a 50-minute unscored essay taken online at home up to eight days before the test. Scores run from 120 to 180 and are based only on the number of correct answers.',
      },
      {
        q: 'Is the LSAT taken online or at a test centre?',
        a: 'From the August 2026 administration the multiple-choice test is taken at Prometric test centres for almost all candidates in the US and internationally. Remote testing is available only by exception — approved disability accommodations, US military abroad, or candidates more than 180 miles or three hours from a centre with capacity — and requires a smartphone as a second camera. Argumentative Writing is always taken remotely.',
      },
      {
        q: 'When is the LSAT held internationally in 2026–27?',
        a: 'International administrations are on 9–10 October 2026 with registration closing 27 August and scores on 28 October; 15–16 January 2027, registration by 1 December, scores 3 February; 9–10 April 2027, registration by 25 February, scores 28 April; and 11–12 June 2027, registration by 29 April, scores 30 June.',
      },
      {
        q: 'How much does the LSAT cost?',
        a: 'US$253 for the 2026–27 testing year, the same for first-time and repeat takers, including Argumentative Writing. The Credential Assembly Service is $219 and each law school report $45. Score Preview costs $46 if bought before the test or $87 after; a date change after the registration deadline costs $153 or $253 depending on timing.',
      },
      {
        q: 'How long is an LSAT score valid?',
        a: 'A result is reportable for five testing years after the testing year in which it was earned; testing years run from 1 July to 30 June. Scores earned before July 2021 are no longer valid for admission. The score report shows up to twelve reportable results, including absences and cancellations, with a percentile rank for each.',
      },
      {
        q: 'Is the LSAT the same as LSAT—India?',
        a: 'No. LSAT—India is a separate test run by Pearson VUE for admission to certain Indian law colleges, with its own dates, registration and scoring. The LSAT on this page is the LSAC test for law schools in the United States and Canada, and it is what those schools require.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     CELPIP
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'celpip',
    path: '/entrance-exams/international/celpip/',
    name: 'CELPIP',
    fullName: 'Canadian English Language Proficiency Index Program',
    authority: 'Paragon Testing Enterprises',
    official: 'celpip.ca',
    seoTitle: 'CELPIP 2026: General vs LS, Format, CLB Levels, Fees & India Centres',
    metaDescription:
      'CELPIP guide — the General and General LS tests, the four components and their tasks, levels against CLB and CEFR, results in days, fees and India centres.',
    lead: [
      'CELPIP is the Canadian English test used for permanent residence and immigration applications to Immigration, Refugees and Citizenship Canada, for Canadian citizenship, for some Australian visas, and by professional bodies. It is a general English test — everyday workplace and social situations rather than academic passages — delivered entirely on computer in a single sitting of under three hours, with no separate speaking appointment.',
      'There are two versions. CELPIP-General tests listening, reading, writing and speaking and is the one used for permanent residence and most other purposes; CELPIP-General LS tests listening and speaking only, in about 70 minutes, and is the IRCC-approved test for citizenship. Each component receives a CELPIP level from 1 to 12 that maps directly onto the Canadian Language Benchmarks, which is why the test is the natural choice for candidates whose target is a CLB score rather than a university admission.',
    ],
    quickFacts: [
      ['Administered by', 'Paragon Testing Enterprises, at official centres in Canada and more than 40 countries including India'],
      ['Used for', 'IRCC permanent residence and citizenship; Australian Department of Home Affairs visas; professional designation'],
      ['Format', 'CELPIP-General: Listening 46–55 min, Reading 43–56, Writing 53, Speaking 15, in one sitting; General LS: Listening and Speaking, about 70 minutes'],
      ['Scoring', 'A CELPIP level of 1–12 per component, aligned one-to-one with CLB levels; 10–12 map to CEFR C1–C2, 7–9 to B2'],
      ['Results', 'Online in 2–4 business days; a PDF Official Score Report; valid two years'],
      ['Fee', 'C$299 plus taxes for General and C$199 for LS in Canada; set per country elsewhere'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Listening has six parts — problem solving, a daily-life conversation, information, a news item, a discussion and viewpoints — with 38 questions across them. Reading has four — correspondence, applying a diagram, information and viewpoints — with 38 questions. Writing asks for an email and a response to survey questions in 53 minutes, with a word counter and spell-check on screen. Speaking presents eight tasks in 15 minutes: giving advice, a personal experience, describing a scene, predictions, comparing and persuading, a difficult situation, opinions and an unusual situation, each answered into a microphone after a short preparation time.',
      },
      {
        type: 'p',
        text: 'Listening and reading are computer-rated; writing and speaking are rated by trained human raters against published performance standards — content and coherence, vocabulary, listenability or readability, and task fulfilment. Each component receives a CELPIP level, and the levels are calibrated to the Canadian Language Benchmarks so that CELPIP 9 is CLB 9; IRCC programmes state their requirements in CLB, and Australia’s Department of Home Affairs publishes its own bands — Competent English needs 7 in each component, Proficient 9, 8, 10 and 8, Superior 10, 10, 12 and 10.',
      },
      {
        type: 'list',
        title: 'What makes CELPIP distinctive',
        items: [
          { text: 'Everyday Canadian English', note: 'workplace emails, community notices and newscasts rather than academic lectures; the vocabulary is familiar and the pace of speech natural.' },
          { text: 'One sitting, all on computer', note: 'speaking is recorded at the desk, which suits candidates who dislike a face-to-face interview and challenges those who rely on an examiner’s reactions.' },
          { text: 'Direct CLB alignment', note: 'no conversion tables; the level is the benchmark.' },
          { text: 'Fast results and a PDF report', note: 'two to four business days, downloaded from the account, accepted by IRCC as the official report.' },
        ],
      },
      {
        type: 'note',
        title: 'Not a test for university admission',
        text: 'CELPIP is accepted by some Canadian colleges and vocational programmes, but universities in Canada and elsewhere overwhelmingly ask for IELTS, TOEFL, PTE Academic or the Duolingo English Test. Take CELPIP when the requirement is stated in CLB — Express Entry, provincial nomination, citizenship, a regulator — and check the institution first if the purpose is study.',
      },
    ],
    stages: [
      {
        name: 'Register online',
        mode: 'CELPIP account; C$299 plus taxes for General in Canada, priced per country elsewhere',
        detail:
          'Registration is online only; test centres do not take bookings. A valid passport or other accepted ID is required, and the same document is presented on the day. In India the test is offered at centres in more than thirty cities including Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, Pune, Chandigarh, Jalandhar and Kochi, with dates on Fridays, Saturdays and Sundays.',
      },
      {
        name: 'Listening and Reading',
        mode: '46–55 and 43–56 minutes; 38 questions each; computer-rated',
        detail:
          'Recordings play once and the answer choices must be read on screen. Both components may contain unscored trial items that look like the rest, so every question is attempted.',
      },
      {
        name: 'Writing and Speaking',
        mode: '53 and 15 minutes; human-rated',
        detail:
          'Writing: an email of 150 to 200 words and a survey response of the same length, with a word counter and spell-check. Speaking: eight tasks with 30 to 60 seconds of preparation and 60 to 90 seconds to answer, recorded into a headset at the same desk. Raters score content, vocabulary, listenability or readability and task fulfilment.',
      },
      {
        name: 'Results',
        mode: '2–4 business days; online; valid two years',
        detail:
          'An email announces the result; the Official Score Report is downloaded as a PDF and submitted to IRCC or another organisation by the candidate. Scores stay visible in the account for two years. A re-evaluation of writing or speaking can be requested within six months for a fee refunded if the level changes; listening and reading, being computer-rated, rarely change.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CELPIP syllabus — the six listening parts, four reading parts, two writing tasks and eight speaking tasks, with question counts and timings.',
        lead: [
          'Twenty task types across four components, all set in everyday Canadian life.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'CELPIP-General components as Paragon publishes them. General LS uses the same Listening and Speaking components only.',
            head: ['Component', 'Time', 'Parts and question counts'],
            rows: [
              ['Listening', '46–55 minutes', 'Part 1 Listening to Problem Solving, 8; Part 2 a Daily Life Conversation, 5; Part 3 Listening for Information, 6; Part 4 a News Item, 5; Part 5 a Discussion, 8; Part 6 Viewpoints, 6'],
              ['Reading', '43–56 minutes', 'Part 1 Reading Correspondence, 11; Part 2 Reading to Apply a Diagram, 8; Part 3 Reading for Information, 9; Part 4 Reading for Viewpoints, 10'],
              ['Writing', '53 minutes', 'Task 1 Writing an Email; Task 2 Responding to Survey Questions'],
              ['Speaking', '15 minutes', 'Task 1 Giving Advice; 2 Talking about a Personal Experience; 3 Describing a Scene; 4 Making Predictions; 5 Comparing and Persuading; 6 Dealing with a Difficult Situation; 7 Expressing Opinions; 8 Describing an Unusual Situation'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'What the listening and reading test',
                'Understanding specific information, main ideas, purpose and tone in conversations, announcements, workplace messages and news; matching statements to speakers or viewpoints; completing an email or a summary from a diagram. Recordings play once, and the answer choices appear on screen only after the audio in several parts.',
              ],
              [
                'What the writing raters score',
                'Content and coherence, vocabulary, readability — grammar, sentence structure, spelling and punctuation — and task fulfilment, which includes covering every point in the prompt, using the right tone for the reader and staying in the 150–200 word range.',
              ],
              [
                'What the speaking raters score',
                'Content and coherence, vocabulary, listenability — rhythm, pronunciation, intonation, pauses and grammar — and task fulfilment, including relevance, completeness, tone and using the time available.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'CELPIP — test format', href: 'https://www.celpip.ca/take-celpip/test-format/' },
              { label: 'CELPIP — results and scoring', href: 'https://www.celpip.ca/take-celpip/test-results/' },
              { label: 'CELPIP — test centres and dates in India', href: 'https://www.celpip.ca/country/india/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'CELPIP exam pattern — General versus General LS, the single computer sitting, CELPIP levels against CLB, CEFR and Australia’s bands, results and re-evaluation.',
        lead: [
          'Under three hours on one computer, and a level per component that is the Canadian benchmark itself.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The two tests.',
            head: ['Test', 'Components', 'Time', 'Used for', 'Fee in Canada'],
            rows: [
              ['CELPIP-General', 'Listening, Reading, Writing, Speaking', 'Under 2 hours 50 minutes', 'IRCC permanent residence; Australian visas; professional bodies; some colleges', 'C$299 plus taxes'],
              ['CELPIP-General LS', 'Listening, Speaking', 'About 70 minutes', 'IRCC citizenship', 'C$199 plus taxes'],
            ],
          },
          {
            type: 'table',
            caption: 'CELPIP levels and their equivalents, as Paragon publishes them.',
            head: ['CELPIP level', 'CLB', 'CEFR', 'Descriptor'],
            rows: [
              ['12', '12', 'C2', 'Expert proficiency in high-stakes contexts'],
              ['11', '11', 'C1', 'Advanced proficiency'],
              ['10', '10', 'C1', 'Highly effective proficiency'],
              ['9', '9', 'B2', 'Effective proficiency'],
              ['8', '8', 'B2', 'Good proficiency in more demanding contexts'],
              ['7', '7', 'B2', 'Adequate proficiency in somewhat demanding contexts'],
              ['6', '6', 'B1', 'Developing proficiency'],
              ['5', '5', 'B1', 'Acquiring proficiency in everyday contexts'],
              ['4', '4', 'A2', 'Adequate for daily life'],
              ['3', '3', 'A2', 'Some proficiency in limited contexts'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Australia’s bands',
                'The Department of Home Affairs recognises CELPIP-General: Vocational English is 5 in each component; Competent 7 in each; Proficient 9 listening, 8 reading, 10 writing, 8 speaking; Superior 10, 10, 12 and 10. For a Student visa the department’s table lists CELPIP 7 as the standard minimum, 6 with ten weeks of ELICOS and 5 with twenty; the at-home CELPIP Online is not accepted for Australian visas.',
              ],
              [
                'Results',
                'Available in the account in two to four business days, three to four for tests in India, with an email alert. The PDF report is the official document; hard copies were discontinued. Scores are viewable for two years and IRCC treats them as valid for two years from the report date.',
              ],
              [
                'Retakes and re-evaluation',
                'There is no waiting period between attempts beyond centre availability. A re-evaluation of any component may be requested within six months, once per component, with the fee refunded if the level changes; results come in one to two weeks.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CELPIP practice material — the free official sample test, Paragon’s paid practice tests and study packages, and why third-party material is a poor mirror.',
        lead: [
          'Paragon publishes a free sample test for every component and sells complete practice tests rated to the same standards. No past papers are released.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The free online sample test shows each component’s interface, timing and task style and is the first thing to do. Paragon’s paid practice tests return scores on the CELPIP scale, and its writing and speaking packages return rater feedback against the published performance standards, which is the only way to learn how the raters read tone, completeness and length. Free information sessions and webinars run online through the year.',
          },
          {
            type: 'list',
            title: 'What to take from each practice test',
            items: [
              { text: 'Listening under the once-only rule', note: 'note-taking during the audio matters because the questions appear afterwards in several parts.' },
              { text: 'Reading pace', note: '38 questions in under an hour across four text types; the correspondence and diagram parts reward scanning.' },
              { text: 'Writing length and tone', note: '150 to 200 words for each task, every prompt point covered, and a register that fits the reader — a landlord, a manager, a friend.' },
              { text: 'Speaking time used', note: 'answers that stop well short of the 60 to 90 seconds lose task-fulfilment marks.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'CELPIP — free sample test and preparation', href: 'https://www.celpip.ca/test-format-scoring/' },
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'CELPIP mock tests — full single sittings with a headset, timed component by component, and scored against the level you need.',
        lead: [
          'Sit all four components in one go with a headset. The live test has no pause between them.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Fix the target level per component', text: 'Express Entry points, a provincial stream or a regulator will state CLB minimums; write them down as CELPIP levels, which are the same numbers.' },
              { title: 'Run the free sample test first', text: 'For the interface — the timer, the word counter, the microphone check — before anything is scored.' },
              { title: 'Sit full mocks in order and in one sitting', text: 'Listening, reading, writing, speaking, under three hours, with the speaking done aloud into a headset.' },
              { title: 'Score writing and speaking against the standards', text: 'Content, vocabulary, readability or listenability, task fulfilment; a paid rated practice test tells you which is holding the level down.' },
              { title: 'Book when the mock meets the level in every component', text: 'Results come in days and there is no retake wait, so a second attempt can follow quickly if one component falls short.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'CELPIP preparation — choosing it over IELTS General Training, the everyday-English register, speaking to a microphone, and the timeline to a result.',
        lead: [
          'CELPIP suits candidates who are comfortable with everyday English and a computer, and who need a CLB level rather than an academic band.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From choosing the test to the score report',
            items: [
              { title: 'Confirm the test the programme accepts', text: 'IRCC accepts CELPIP-General for economic immigration and General LS for citizenship; Australia accepts General for most visas. Universities mostly do not accept it.' },
              { title: 'Choose between CELPIP and IELTS General Training', text: 'Both map to CLB. CELPIP is one computer sitting with recorded speaking and results in days; IELTS has a face-to-face speaking test and a paper option. Try the free sample of each.' },
              { title: 'Practise everyday registers', text: 'Emails to a manager or a neighbour, survey opinions, giving advice to a friend: the tasks are ordinary, and the marks are for handling them completely and appropriately.' },
              { title: 'Rehearse speaking to a screen', text: 'With preparation time of 30 to 60 seconds and a fixed answer window, a simple structure — situation, view, reasons, close — used every time removes the hesitation the raters hear.' },
              { title: 'Use the on-screen tools', text: 'The word counter and spell-check in writing are allowed; use them to hit the 150–200 range and remove slips.' },
              { title: 'Book with the timeline in mind', text: 'Results in two to four business days; arrive 45 minutes early on the day, since check-in closes 15 minutes before the start and latecomers forfeit the fee.' },
            ],
          },
          {
            type: 'note',
            title: 'The listening test reads as much as it listens',
            text: 'Answer choices in the listening component and the questions in speaking must be read on screen, and in several listening parts the questions appear only after the audio has played once. Candidates who prepare only by listening are surprised by how much reading speed the component demands.',
          },
        ],
      },
      'study-material': {
        description:
          'CELPIP study material — Paragon’s free and paid resources, and everyday English sources for the registers the test uses.',
        lead: [
          'Official material for the tasks; Canadian news, workplace emails and community notices for the register.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By component.',
            head: ['Component', 'What to use', 'Note'],
            rows: [
              ['Listening', 'The free sample test; Canadian news and radio; conversations at natural speed', 'Recordings play once.'],
              ['Reading', 'Workplace and community correspondence, notices with diagrams, opinion pieces', 'Four text types, 38 questions.'],
              ['Writing', 'Model emails and survey responses; a grammar and punctuation reference; the performance standards', '150–200 words, every prompt point.'],
              ['Speaking', 'Recorded answers to the eight task types with a timer; the performance standards', 'Fill the answer window.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'PTE Academic guide', to: '/entrance-exams/international/pte/' },
              { label: 'OET guide', to: '/entrance-exams/international/oet/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the difference between CELPIP-General and CELPIP-General LS?',
        a: 'CELPIP-General tests listening, reading, writing and speaking in a single sitting of under three hours and is used for permanent residence, Australian visas, professional designation and some colleges. CELPIP-General LS tests listening and speaking only in about 70 minutes and is the IRCC-approved test for Canadian citizenship.',
      },
      {
        q: 'How is CELPIP scored?',
        a: 'Each component receives a CELPIP level from 1 to 12, with 10 and above mapping to CEFR C1 and C2 and 7 to 9 to B2. The levels are calibrated one-to-one with the Canadian Language Benchmarks, so a CELPIP 9 is a CLB 9. Listening and reading are computer-rated; writing and speaking are scored by trained raters against published performance standards.',
      },
      {
        q: 'How soon do CELPIP results come and how long are they valid?',
        a: 'Scores are posted to the CELPIP account in two to four business days — three to four for tests taken in India — with an email alert, and the Official Score Report is downloaded as a PDF. Results can be viewed for two years from the test date, which is also the validity IRCC applies.',
      },
      {
        q: 'Where is CELPIP held in India and what does it cost?',
        a: 'At official centres in more than thirty Indian cities, including Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kolkata, Pune, Chandigarh, Jalandhar, Kochi and Ahmedabad, on Fridays, Saturdays and Sundays. The fee is set per country and shown at registration; in Canada it is C$299 plus taxes for General and C$199 for LS.',
      },
      {
        q: 'Is CELPIP accepted for Australian visas and for study?',
        a: 'The Department of Home Affairs accepts CELPIP-General for visas, with bands from Vocational at 5 in each component to Superior at 10, 10, 12 and 10, and lists CELPIP 7 as the standard Student visa minimum; the at-home version is not accepted. For university admission most institutions ask for IELTS, TOEFL, PTE Academic or the Duolingo English Test instead.',
      },
      {
        q: 'Can I get a CELPIP score re-evaluated?',
        a: 'Yes, within six months of the test date, once per component, for a fee that is refunded if the level changes; the outcome takes one to two weeks. Paragon notes that re-evaluating listening or reading is unlikely to change anything because those components are computer-rated.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     OET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'oet',
    path: '/entrance-exams/international/oet/',
    name: 'OET',
    fullName: 'Occupational English Test',
    authority: 'Cambridge Boxhill Language Assessment (CBLA)',
    official: 'occupationalenglishtest.org',
    seoTitle: 'OET 2026: Sub-tests, 12 Professions, Grades A–E, Delivery Modes & Fees',
    metaDescription:
      'OET guide for healthcare professionals — the four sub-tests, the 0–500 score and A–E grades, the twelve professions, three delivery modes, results and fees.',
    lead: [
      'The Occupational English Test is the English test written for healthcare. It assesses the listening, reading, writing and speaking a nurse, doctor, dentist or pharmacist needs at work — a handover, a referral letter, a consultation — and is accepted by regulators and employers in the UK, Ireland, Australia, New Zealand, the US, Singapore, Dubai and elsewhere as proof of English for registration. It is owned by Cambridge Boxhill Language Assessment, a venture of Cambridge English and Box Hill Institute.',
      'Listening and reading are the same for every candidate; writing and speaking are specific to one of twelve professions — dentistry, dietetics, medicine, nursing, occupational therapy, optometry, pharmacy, physiotherapy, podiatry, radiography, speech pathology and veterinary science — so that a nurse writes a nursing letter and role-plays a nursing consultation. The test can be taken on paper at a centre, on computer at a centre, or at home with remote proctoring, and each sub-test is scored from 0 to 500 with a letter grade.',
    ],
    quickFacts: [
      ['Administered by', 'CBLA, at test venues in India and worldwide, and at home through OET@Home'],
      ['Used for', 'Healthcare registration and employment — NMC and GMC in the UK, AHPRA in Australia, US state nursing boards and others; some visa purposes'],
      ['Sub-tests', 'Listening about 40 minutes, 42 questions; Reading 60 minutes, 42; Writing 45 minutes, one letter; Speaking 20 minutes, two role plays'],
      ['Scoring', '0–500 in ten-point steps per sub-test, with grades A 450–500, B 350–440, C+ 300–340, C 200–290, D 100–190, E 0–90'],
      ['Results', 'Computer and at home: typically within six days, as little as 48 hours; paper: from five days in India'],
      ['Fee', 'Published in Australian dollars and converted at booking — AU$587 for the full test at the date checked; single sub-tests available'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Listening has three parts: two consultation extracts with note-completion tasks of twelve questions each, six short workplace extracts each with one three-option question, and two presentations or interviews with six questions each — 42 questions in about 40 minutes, heard once. Reading has three parts: fifteen minutes of expeditious reading across four short texts with twenty matching and completion questions, then forty-five minutes on six short workplace texts with one question each and two longer articles with eight four-option questions each — 42 questions in an hour.',
      },
      {
        type: 'p',
        text: 'Writing gives five minutes to read profession-specific case notes and forty to write a letter — usually a referral, transfer or discharge letter — assessed on purpose, content, conciseness and clarity, genre and style, organisation and layout, and language. Speaking is twenty minutes with an interlocutor playing a patient or carer: a warm-up, then two role plays of five minutes each after three minutes’ preparation, assessed on four linguistic criteria out of six — intelligibility, fluency, appropriateness, grammar and expression — and five clinical-communication criteria out of three, from relationship building to information giving.',
      },
      {
        type: 'list',
        title: 'What makes OET distinctive',
        items: [
          { text: 'Healthcare content throughout', note: 'the language tasks draw on the candidate’s working knowledge, which most healthcare professionals find easier than abstract academic passages.' },
          { text: 'Profession-specific writing and speaking', note: 'a nurse, a doctor and a pharmacist sit different letters and role plays.' },
          { text: 'Grades regulators quote directly', note: 'the NMC and GMC ask for B in each sub-test, with some allowance for C+ in writing; AHPRA asks for B in each in one sitting or across two within six months.' },
          { text: 'Three delivery modes', note: 'the same test and standard on paper, on computer or at home; not every regulator accepts every mode.' },
        ],
      },
      {
        type: 'note',
        title: 'Check the regulator before booking the mode',
        text: 'OET@Home is accepted by many recognising organisations but not by all, and Australia’s Department of Home Affairs does not accept any at-home English test for visa purposes. Confirm three things with the body you are registering with: the grades it requires, whether they must be achieved in one sitting, and which delivery modes it accepts. OET results have no fixed validity; each organisation sets its own, commonly two years.',
      },
    ],
    stages: [
      {
        name: 'Book',
        mode: 'Online; profession, mode and venue chosen at booking; one booking per administration',
        detail:
          'Register with a personal email, upload ID and a photo, choose the profession, the delivery mode and the venue or an at-home slot, and pay the fee. Test dates run through the year, with computer and at-home dates most frequent. Rescheduling and cancellation fees depend on mode and timing and are published on the OET site.',
      },
      {
        name: 'Listening and Reading',
        mode: 'About 40 minutes and 60 minutes; 42 questions each; common to all professions',
        detail:
          'Listening Part A note completion from two consultations, Part B six short extracts, Part C two presentations. Reading Part A fifteen minutes of expeditious reading, Parts B and C forty-five minutes of short workplace texts and two long articles. Each correct answer is one mark; the raw score out of 42 is converted to the 500 scale.',
      },
      {
        name: 'Writing and Speaking',
        mode: '45 minutes for one letter; 20 minutes for two role plays; profession-specific',
        detail:
          'Writing: five minutes reading time and forty writing time for a letter from case notes, scored on six criteria. Speaking: a warm-up, then two role plays with a trained interlocutor, three minutes to prepare and five to play each, scored on linguistic and clinical-communication criteria. Both are marked by trained assessors.',
      },
      {
        name: 'Results and sharing',
        mode: 'Statement of Results in the OET account; access granted to organisations',
        detail:
          'Each sub-test is reported as a score from 0 to 500 and a grade. Computer and at-home results typically arrive within six calendar days and sometimes within 48 hours; paper results from five days after the test in India and the Philippines and from 13 days elsewhere. Organisations verify results through the account. A remark can be requested within 72 hours of release, for a fee refunded if the grade changes.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'OET syllabus — every part of the four sub-tests, question counts and task types, the writing and speaking assessment criteria, and the twelve professions.',
        lead: [
          'OET has no topic list. It has four sub-tests with fixed parts, and two of them are written for your profession.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The sub-tests as the OET Test Handbook describes them.',
            head: ['Sub-test', 'Time', 'Parts', 'Tasks and questions'],
            rows: [
              ['Listening', 'About 40 minutes', '3', 'Part A: two consultations, note completion, 24 questions. Part B: six short workplace extracts, one three-option question each. Part C: two presentations or interviews, six three-option questions each. 42 in all, heard once.'],
              ['Reading', '60 minutes', '3', 'Part A: 15 minutes, four short texts, 20 matching, short-answer and completion questions. Part B: six short workplace texts, one three-option question each. Part C: two long articles, eight four-option questions each. 42 in all.'],
              ['Writing', '45 minutes', '1 task', 'Five minutes to read case notes and forty to write a letter — referral, transfer, discharge or advice — specific to the profession.'],
              ['Speaking', '20 minutes', '2 tasks', 'A warm-up of two to three minutes, then two role plays from profession-specific role cards, three minutes’ preparation and five minutes each, with an interlocutor as the patient or carer.'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Writing criteria',
                'Purpose, content, conciseness and clarity, genre and style, organisation and layout, and language. The letter must select what the reader needs from the notes, in the register of a professional letter, with the case history in an order a colleague can act on.',
              ],
              [
                'Speaking criteria',
                'Four linguistic criteria each marked out of six — intelligibility, fluency, appropriateness of language, resources of grammar and expression — and five clinical-communication categories each out of three: relationship building, understanding and incorporating the patient’s perspective, providing structure, information gathering and information giving.',
              ],
              [
                'The twelve professions',
                'Dentistry, dietetics, medicine, nursing, occupational therapy, optometry, pharmacy, physiotherapy, podiatry, radiography, speech pathology and veterinary science. The profession is chosen at booking and cannot be changed on the day.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'OET — test information', href: 'https://www.occupationalenglishtest.org/test-information/' },
              { label: 'OET — Test Handbook 2026 (PDF)', href: 'https://cdn-aus.aglty.io/oet/pdf-files/OET%20Test%20Handbook%202026.pdf' },
              { label: 'OET — results and scoring', href: 'https://www.occupationalenglishtest.org/test/results-and-scoring' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'OET exam pattern — the four sub-tests and their timing, the 0–500 scale and A–E grades, the three delivery modes, result timelines and fees.',
        lead: [
          'Four sub-tests scored separately on a 500-point scale; the grades, not a total, are what regulators ask for.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Scores and grades, from the OET Test Handbook.',
            head: ['Grade', 'Score', 'What it means'],
            rows: [
              ['A', '450–500', 'Communicates very fluently and effectively; complete understanding of any written or spoken language'],
              ['B', '350–440', 'Communicates effectively with only occasional inaccuracies and hesitations; good understanding across clinical contexts'],
              ['C+', '300–340', 'Maintains the interaction despite occasional errors and lapses'],
              ['C', '200–290', 'Maintains the interaction with more frequent errors'],
              ['D', '100–190', 'Some interaction and straightforward factual understanding; frequent errors strain communication'],
              ['E', '0–90', 'Simple interaction on familiar topics only'],
            ],
          },
          {
            type: 'table',
            caption: 'Delivery modes.',
            head: ['Mode', 'Where', 'Results'],
            rows: [
              ['OET Test on Paper', 'A test centre', 'From five days after the test in India and the Philippines; from 13 days elsewhere'],
              ['OET Test on Computer', 'A test venue', 'Typically within six calendar days; as little as 48 hours'],
              ['OET@Home', 'Your own computer with remote proctoring', 'As for computer; not accepted by every organisation, and not for Australian visas'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'What regulators ask for',
                'The UK’s NMC and GMC, Australia’s AHPRA, the Medical Council of Ireland, US state boards of nursing and others quote OET grades directly, commonly B in every sub-test, some allowing C+ in writing or combining two sittings within a set period. Australia’s Department of Home Affairs lists OET for Student visas with a minimum on its own scale.',
              ],
              [
                'Fees',
                'Published in Australian dollars and converted at booking; AU$587 for the full test at the date checked, with single sub-tests and partial retakes priced separately. Rescheduling and cancellation fees vary by mode and by how close to the date the change is made.',
              ],
              [
                'Remarks and appeals',
                'A remark of one or more sub-tests can be requested within 72 hours of results, with the fee refunded if the grade changes; an appeal against a remark or malpractice decision within five days.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'OET practice material — the official sample tests for every sub-test and profession, and how to use the profession-specific writing and speaking samples.',
        lead: [
          'OET publishes official sample tests for all four sub-tests in every profession, with transcripts and sample answers, in paper and computer formats.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The sample tests are the closest thing to past papers and should be worked under the real timings — 40 minutes of listening heard once, the 15 and 45-minute reading blocks, 45 minutes for the letter. For writing and speaking, the sample role cards and case notes for your profession show the register expected, and the published assessment criteria show how a letter or a role play is scored; OET’s on-demand masterclasses walk through both.',
          },
          {
            type: 'list',
            title: 'What to take from each sample',
            items: [
              { text: 'Listening Part A note completion', note: 'the words must fit the notes exactly as a colleague would write them; a paraphrase that changes the clinical sense is wrong.' },
              { text: 'Reading Part A speed', note: 'twenty questions in fifteen minutes across four texts is a scanning task, not a reading one.' },
              { text: 'The letter’s selection', note: 'the case notes contain more than the reader needs; marks go for choosing and ordering, not for reproducing.' },
              { text: 'The role play’s clinical criteria', note: 'relationship building and checking the patient’s understanding are scored as much as grammar.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'OET — test information and sample tests', href: 'https://www.occupationalenglishtest.org/test-information/' },
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'OET mock tests — full four-sub-test sittings with a speaking partner, scored against the grade your regulator requires.',
        lead: [
          'Sit all four sub-tests in one day with someone to play the patient. The grade you need is in each one, not overall.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Fix the grade and the sitting rule', text: 'Most regulators want B in every sub-test; some accept C+ in writing or two sittings within a period. Write the rule down before the first mock.' },
              { title: 'Sit listening and reading back to back', text: 'About 100 minutes with the audio played once and the reading split into its 15 and 45-minute blocks.' },
              { title: 'Write the letter in 45 with a five-minute reading limit', text: 'Then score it against the six criteria, or have it scored by someone who knows them.' },
              { title: 'Role-play with a partner and record it', text: 'Three minutes to prepare, five to play; listen back for the clinical-communication criteria as well as the language.' },
              { title: 'Book the mode your regulator accepts', text: 'Computer and at-home results come in days; paper in India from five days.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'OET preparation — choosing OET over IELTS for registration, the letter-writing method, the role-play criteria, and the booking decisions that matter.',
        lead: [
          'For a practising clinician, OET is a test of doing familiar things in careful English. Prepare the format, not the medicine.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From regulator to registration',
            items: [
              { title: 'Read the regulator’s English page first', text: 'The grades, the one-sitting rule, the accepted modes and the validity period differ between the NMC, GMC, AHPRA, Irish councils and US boards. Book to that rule.' },
              { title: 'Choose OET or IELTS on the basis of the tasks', text: 'Both are accepted by the main regulators. Clinicians who find academic reading passages alien and clinical letters natural usually score higher on OET.' },
              { title: 'Learn the letter as a genre', text: 'Purpose in the first line, the relevant history in order, the request clearly stated, nothing the reader already knows. Practise selecting from long case notes.' },
              { title: 'Practise role plays with the clinical criteria in view', text: 'Open the consultation, find out the patient’s concern, structure the information, check understanding; the language marks follow.' },
              { title: 'Drill Part A note completion', text: 'Twenty-four gaps from two consultations heard once; the answers are the words a clinician would write in the notes.' },
              { title: 'Book the mode and the date', text: 'Computer and at-home tests run often and return results in days; paper dates are fewer. One booking per administration.' },
            ],
          },
          {
            type: 'note',
            title: 'Reading Part A is a different skill from Parts B and C',
            text: 'Part A is done separately in fifteen minutes and asks for fast location of facts across four texts — dosages, procedures, contraindications. Candidates who read it carefully run out of time; candidates who scan it score well. Parts B and C reward the opposite: reading a whole workplace message or article for its purpose and argument.',
          },
        ],
      },
      'study-material': {
        description:
          'OET study material — the official handbook, sample tests and masterclasses, and the profession-specific reading, writing and speaking practice to add.',
        lead: [
          'Official material for the format and criteria; your own profession’s documents and consultations for the content.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By sub-test.',
            head: ['Sub-test', 'What to use', 'Note'],
            rows: [
              ['Listening', 'Official sample tests; recorded consultations and health podcasts in several accents', 'Heard once; note-completion words must fit.'],
              ['Reading', 'Official sample tests; clinical guidelines, drug information sheets, health journalism', 'Part A scanning, Parts B and C comprehension.'],
              ['Writing', 'The writing assessment criteria; sample letters for your profession; a grammar reference', 'One letter in 45 minutes from case notes.'],
              ['Speaking', 'Sample role cards for your profession; the speaking criteria; a practice partner', 'Two five-minute role plays.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'CELPIP guide', to: '/entrance-exams/international/celpip/' },
              { label: 'Medical entrance exams', to: '/entrance-exams/medical/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the OET exam pattern?',
        a: 'Four sub-tests: Listening of about 40 minutes with 42 questions in three parts; Reading of 60 minutes with 42 questions in three parts; Writing of 45 minutes for one profession-specific letter; and Speaking of 20 minutes with two profession-specific role plays. Listening and reading are common to all candidates; writing and speaking are set for one of twelve healthcare professions.',
      },
      {
        q: 'How is OET scored and what grade do regulators want?',
        a: 'Each sub-test is scored from 0 to 500 in ten-point steps and given a grade: A 450–500, B 350–440, C+ 300–340, C 200–290, D 100–190, E 0–90. The NMC, GMC, AHPRA and most other regulators ask for B in every sub-test, with some accepting C+ in writing or two sittings within a set period; check the regulator’s own page.',
      },
      {
        q: 'Which professions can take OET?',
        a: 'Twelve: dentistry, dietetics, medicine, nursing, occupational therapy, optometry, pharmacy, physiotherapy, podiatry, radiography, speech pathology and veterinary science. The profession is chosen at booking and determines the writing and speaking tasks.',
      },
      {
        q: 'Can OET be taken at home?',
        a: 'Yes, through OET@Home, on your own computer with remote proctoring, using the same test and marked to the same standard as the centre versions. Not every recognising organisation accepts the at-home mode, and Australia’s Department of Home Affairs does not accept any at-home English test for visas, so confirm with the body you are applying to.',
      },
      {
        q: 'How quickly do OET results come and how long are they valid?',
        a: 'Computer and at-home results are typically available within six calendar days and sometimes within 48 hours of the last sub-test; paper results from five days after the test in India and the Philippines and from 13 days elsewhere. OET sets no validity period; each regulator or employer decides how old a result may be, commonly two years.',
      },
      {
        q: 'What does OET cost?',
        a: 'Fees are published in Australian dollars and converted at booking, varying by country and delivery mode; the full test was AU$587 at the date checked, with single sub-tests available for candidates retaking part of the test. Rescheduling and cancellation fees depend on the mode and the notice given.',
      },
    ],
  },
  /* ══════════════════════════════════════════════════════════════
     UCAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ucat',
    path: '/entrance-exams/international/ucat/',
    name: 'UCAT',
    fullName: 'University Clinical Aptitude Test',
    authority: 'UCAT Consortium',
    official: 'ucat.ac.uk',
    seoTitle: 'UCAT 2026: Subtests, Scoring, Key Dates, Fees & Test Centres in India',
    metaDescription:
      'UCAT guide — the four subtests and their timings, 300–900 scaled scores and the SJT band, the 2026 test window and deadlines, fees, and sitting it from India.',
    lead: [
      'The UCAT is the admissions test for medicine and dentistry at a consortium of UK universities and a handful of partner schools abroad, among them the Lee Kong Chian and Yong Loo Lin medical schools in Singapore. It is a two-hour computer test of mental aptitude rather than science — verbal reasoning, decision making, quantitative reasoning and situational judgement — sat once in a summer testing window at Pearson VUE centres in the UK and more than 130 countries, India included, and its result is valid for the single admissions cycle that follows.',
      'The 2026 cycle runs from registration on 20 May through booking from 23 June, testing from 13 July to 24 September, and delivery of results to universities in early November, ahead of the 15 October UCAS deadline for medicine and dentistry that candidates must meet separately. The cognitive subtests are scaled to 300–900 each for a total of 900–2700, and the Situational Judgement Test is reported as a band from 1 to 4; universities use the result in different ways, from a cut-off to a weighted component, and publish how.',
    ],
    quickFacts: [
      ['Administered by', 'UCAT Consortium, delivered by Pearson VUE at centres in 130+ countries'],
      ['Used for', 'Medicine and dentistry at UK consortium universities and partner schools, for 2027 entry'],
      ['Subtests', 'Verbal Reasoning 44 questions / 22 min; Decision Making 35 / 37; Quantitative Reasoning 36 / 26; Situational Judgement 69 / 26'],
      ['Scoring', '300–900 per cognitive subtest, 900–2700 total; Situational Judgement Band 1–4; no negative marking'],
      ['2026 dates', 'Registration 20 May; booking 23 June; testing 13 July–24 September; booking deadline 16 September; results to universities early November'],
      ['Fee', '£70 at UK centres; £115 outside the UK'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Verbal Reasoning presents eleven passages with four questions each and asks whether a statement follows from the text; Decision Making mixes logic puzzles, argument evaluation, probability and statistical reasoning, some answered as five yes-or-no statements; Quantitative Reasoning tests problem solving from charts and tables with an on-screen calculator; and Situational Judgement presents scenarios from clinical and student life and asks how appropriate or important each response is, scored against a panel of experts.',
      },
      {
        type: 'p',
        text: 'Each subtest is preceded by a timed instruction section, the test cannot be paused, and the standard version is just under two hours. Raw marks in the three cognitive subtests are converted to scaled scores from 300 to 900 so that they can be compared, and the sum gives a total from 900 to 2700; Decision Making awards two marks for a fully correct multiple-statement question and one for a partly correct one. The Situational Judgement band is reported alongside, and some universities screen on it.',
      },
      {
        type: 'list',
        title: 'What makes the UCAT distinctive',
        items: [
          { text: 'Aptitude, not curriculum', note: 'no biology or chemistry is tested; the questions reward fast, careful reasoning under severe time pressure.' },
          { text: 'One sitting per cycle', note: 'a candidate may sit the test once between July and September and may not sit both the UCAT and the UCAT ANZ in the same year.' },
          { text: 'A result you see before you apply', note: 'the score report is issued at the centre and in the account within about 24 hours, so UCAS choices can be made with it.' },
          { text: 'Results sent by the consortium', note: 'UCAT delivers results directly to the universities named on the UCAS form after the 15 October deadline; candidates do not report their own.' },
        ],
      },
      {
        type: 'note',
        title: 'Which test — UCAT or UCAT ANZ',
        text: 'Applicants to medicine and dentistry in Australia or New Zealand sit the UCAT ANZ, an identical test on the ANZ consortium’s earlier timetable; applicants to UK universities and to the Singapore partner schools sit the UCAT. Candidates applying to both must sit the UCAT ANZ and ask for the result to be delivered to their UK choices through the results-collection form by 22 October. Sitting both in one year is treated as misconduct.',
      },
    ],
    stages: [
      {
        name: 'Register and book',
        mode: 'UCAT account from 20 May 2026; booking from 23 June; deadline 16 September at 15:00 UK time',
        detail:
          'Create an account, apply for access arrangements or a bursary if eligible before booking, then book a Pearson VUE centre and slot. Outside the UK the fee is £115, paid by card at booking. Candidates far from any centre may apply for online proctored testing through OnVUE; those in the UK are not normally eligible.',
      },
      {
        name: 'The test',
        mode: 'Just under two hours at a Pearson VUE centre; 13 July–24 September 2026',
        detail:
          'Verbal Reasoning, 44 questions in 22 minutes; Decision Making, 35 in 37; Quantitative Reasoning, 36 in 26; Situational Judgement, 69 in 26; each preceded by a 90-second instruction screen, two minutes before Quantitative Reasoning. A basic on-screen calculator is available in Decision Making and Quantitative Reasoning.',
      },
      {
        name: 'Results',
        mode: 'Score report at the centre; in the account within 24 hours',
        detail:
          'Scaled scores for the three cognitive subtests and a Situational Judgement band. Preliminary mean scores and deciles are published in mid-September and final statistics after the window closes, so candidates can place their result before the UCAS deadline of 15 October.',
      },
      {
        name: 'Delivery to universities',
        mode: 'Early November, direct from UCAT',
        detail:
          'After the UCAS deadline UCAT matches candidates to their application choices and delivers results to the UK universities concerned; partner universities receive results through the account or their own request. Universities accept only results provided by the UCAT Office. Results are valid for the 2027 admissions cycle only.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'UCAT syllabus — what each of the four subtests tests, the question types in each, and how each is marked.',
        lead: [
          'The UCAT has no content to learn. It has four subtests with fixed question types, and each has a technique.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Verbal Reasoning',
                'Eleven passages of text, each with four questions, in 22 minutes. Questions ask whether a statement is true, false or cannot be told from the passage, or which of four statements the passage supports. No prior knowledge is used; the difficulty is the half-minute available per question. One mark each.',
              ],
              [
                'Decision Making',
                'Thirty-five questions in 37 minutes on logical puzzles, syllogisms, interpreting information, recognising assumptions, Venn diagrams and probabilistic reasoning. Some questions offer four options; others present five statements to be answered yes or no, worth two marks if all are right and one if partly. A calculator is available.',
              ],
              [
                'Quantitative Reasoning',
                'Thirty-six questions in 26 minutes, most referring to charts, tables and graphs of data. The mathematics is at school level — percentages, ratios, rates, averages, unit conversion — and the difficulty is reading the data quickly and choosing the calculation. One mark each; an on-screen calculator is provided.',
              ],
              [
                'Situational Judgement',
                'Sixty-nine questions in 26 minutes on scenarios involving students, clinicians and patients. Each asks how appropriate a response is, or how important a consideration is, on a four-point scale, with full marks for matching the expert panel and partial marks for a near answer. Reported as a band from 1 to 4 rather than a score.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'UCAT — test format and scoring', href: 'https://www.ucat.ac.uk/about-ucat/test-format-and-scoring/' },
              { label: 'UCAT — eligibility and which test to sit', href: 'https://www.ucat.ac.uk/about-ucat/eligibility/' },
              { label: 'NEET UG guide', to: '/entrance-exams/medical/neet-ug/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'UCAT exam pattern — subtest timings and question counts, scaled scoring and the SJT band, the 2026 key dates, fees and how universities use the result.',
        lead: [
          'Four separately timed subtests in just under two hours, scored 900–2700 plus a band.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The standard UCAT, as the consortium publishes it. Extended versions exist for approved access arrangements.',
            head: ['Subtest', 'Questions', 'Instruction section', 'Time', 'Scoring'],
            rows: [
              ['Verbal Reasoning', '44', '1 minute 30 seconds', '22 minutes', '300–900'],
              ['Decision Making', '35', '1 minute 30 seconds', '37 minutes', '300–900'],
              ['Quantitative Reasoning', '36', '2 minutes', '26 minutes', '300–900'],
              ['Situational Judgement', '69', '1 minute 30 seconds', '26 minutes', 'Band 1–4'],
            ],
          },
          {
            type: 'table',
            caption: 'UCAT 2026 key dates, UK time.',
            head: ['Date', 'Event'],
            rows: [
              ['20 May 2026, 14:00', 'Registration opens; bursary and access-arrangement applications open'],
              ['23 June 2026, 14:00', 'Booking opens'],
              ['13 July 2026', 'Testing starts'],
              ['10 September 2026, 15:00', 'Access-arrangement application deadline'],
              ['16 September 2026, 15:00', 'Booking deadline'],
              ['24 September 2026', 'Last test date; bursary application deadline at 15:00'],
              ['15 October 2026', 'UCAS deadline for medicine and dentistry'],
              ['Early November 2026', 'Results delivered to universities'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Scoring',
                'One mark per correct answer, two for a fully correct Decision Making multiple-statement question, partial credit in Situational Judgement, and no deduction for wrong answers. Raw marks are converted to a 300–900 scale per cognitive subtest, and the Situational Judgement Test to Bands 1 to 4, Band 1 the highest.',
              ],
              [
                'Fees',
                '£70 at UK test centres and £115 outside the UK, paid at booking. UK candidates on certain benefits can apply for a bursary that waives the fee.',
              ],
              [
                'How universities use it',
                'Some rank applicants by total score, some set a cut-off, some weight it with academic results and the personal statement, and some use the Situational Judgement band as a screen. Each consortium university publishes its approach, and the consortium’s How Universities Use the UCAT page collects them.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'UCAT practice material — the official question tutorials, question banks and timed practice tests, and why paid courses are unnecessary.',
        lead: [
          'The consortium publishes free tutorials, question banks and full practice tests, and says plainly that paid preparation is unnecessary.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Past UCAT papers are not released, but the official preparation resources are extensive: a tour tutorial for the test tools, a question tutorial for each subtest, question banks by subtest and several full timed practice tests in the live interface. The consortium, the Medical Schools Council and the Dental Schools Council do not endorse any commercial course, and the official tests are the only ones calibrated against real candidates.',
          },
          {
            type: 'steps',
            title: 'Working through the official material',
            items: [
              { title: 'Tour the tools, then the question tutorials', text: 'Learn the calculator, the flagging and the navigation before any timed work.' },
              { title: 'Question banks by subtest, untimed then timed', text: 'Accuracy first, then the per-question pace — 30 seconds in Verbal Reasoning, about a minute in Decision Making, 43 seconds in Quantitative Reasoning, 22 seconds in Situational Judgement.' },
              { title: 'Full practice tests in the final weeks', text: 'Two hours without a pause, in order, to build the stamina the real sitting needs.' },
              { title: 'Compare with the published deciles', text: 'Preliminary statistics appear in mid-September; last cycle’s means and deciles are on the test-statistics page.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'UCAT — preparation resources', href: 'https://www.ucat.ac.uk/about-ucat/ucat-essentials/' },
              { label: 'Logical reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'UCAT mock tests — the official timed practice tests, sat in one two-hour block, and how to read a score against the deciles.',
        lead: [
          'Use the official full practice tests, timed and unpaused, and treat each as a measurement of pace as much as accuracy.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Sit one official test cold', text: 'Before preparation, to find the subtest that costs most; the spread between subtests is usually wide.' },
              { title: 'Practise to the clock, not to completion', text: 'Most candidates cannot finish Verbal Reasoning; the skill is deciding what to leave and guessing the rest, since nothing is deducted.' },
              { title: 'Sit full tests in order without a break', text: 'The live test cannot be paused, and Situational Judgement comes last, when attention is lowest.' },
              { title: 'Score every subtest against the deciles', text: 'A 2600 total is rare; a mid-decile score with a Band 2 satisfies many universities. Check each target’s published use of the score.' },
              { title: 'Stop new material a week before the test', text: 'The final week is for pace and for the test tools, not for new question types.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Logical reasoning notes', to: '/study-material/reasoning/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'UCAT preparation — a summer plan around the testing window, technique for each subtest, when to book, and sitting the test from India.',
        lead: [
          'Six to eight weeks of daily, timed practice is the usual preparation. The test rewards technique and pace far more than hours.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From registration to results',
            items: [
              { title: 'Confirm which universities require it', text: 'Check each course’s entry requirements; alternative requirements apply to some applicants, and partner universities have their own rules and deadlines.' },
              { title: 'Register in May and book in June', text: 'Slots at Indian Pearson VUE centres are limited and the popular late-August dates go first; the booking deadline is 16 September, but an early booking secures the centre and date wanted.' },
              { title: 'Choose a date you can prepare for', text: 'The test is the same difficulty throughout the window. July suits candidates still in exam habit; September gives the summer to prepare.' },
              { title: 'Learn a technique per subtest', text: 'Keyword scanning for Verbal Reasoning, a triage rule for Decision Making puzzles, quick data location for Quantitative Reasoning, and the professional-standards logic for Situational Judgement.' },
              { title: 'Work timed every day', text: 'Short daily blocks under the real per-question pace beat long untimed sessions; accuracy under time is the whole skill.' },
              { title: 'Use the result in the UCAS choices', text: 'The score arrives before 15 October; apply where the published use of the score gives a realistic chance rather than wasting a choice.' },
            ],
          },
          {
            type: 'note',
            title: 'Sitting the UCAT from India',
            text: 'The UCAT is delivered at Pearson VUE centres in Indian cities during the same July–September window, at the £115 non-UK fee, and results are handled exactly as for UK candidates. If no centre is reachable, OnVUE online proctored testing can be requested before booking. Photo ID rules are strict; a passport is the safest document.',
          },
        ],
      },
      'study-material': {
        description:
          'UCAT study material — the consortium’s free tutorials and practice tests, and the reasoning and data-interpretation practice that supports them.',
        lead: [
          'Official material is complete and free; add general reasoning and mental-arithmetic practice for pace.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By subtest.',
            head: ['Subtest', 'What to use', 'Note'],
            rows: [
              ['Verbal Reasoning', 'Official question bank; timed reading of dense articles with true/false/cannot-tell judgements', 'Thirty seconds a question.'],
              ['Decision Making', 'Official question bank; syllogism, Venn-diagram and probability drills', 'Two marks for full multiple-statement answers.'],
              ['Quantitative Reasoning', 'Official question bank; percentages, ratios and rates from tables and charts', 'Calculator available but slow; mental arithmetic wins time.'],
              ['Situational Judgement', 'Official question bank; the GMC’s Good Medical Practice and professional-standards guidance', 'Judged against an expert panel.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'NEET UG guide', to: '/entrance-exams/medical/neet-ug/' },
              { label: 'LNAT guide', to: '/entrance-exams/international/lnat/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
              { label: 'Logical reasoning notes', to: '/study-material/reasoning/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the UCAT exam pattern?',
        a: 'Four separately timed multiple-choice subtests in just under two hours at a Pearson VUE centre: Verbal Reasoning with 44 questions in 22 minutes, Decision Making with 35 in 37, Quantitative Reasoning with 36 in 26 and Situational Judgement with 69 in 26, each preceded by a short instruction screen. The three cognitive subtests are scaled 300–900 for a total of 900–2700; Situational Judgement is reported as a band from 1 to 4. There is no negative marking.',
      },
      {
        q: 'When is the UCAT 2026 and what are the deadlines?',
        a: 'Registration opened on 20 May 2026 and booking on 23 June. Testing runs from 13 July to 24 September, the booking deadline is 16 September at 15:00 UK time, and results go to universities in early November. The UCAS deadline for medicine and dentistry is 15 October 2026.',
      },
      {
        q: 'Can I take the UCAT in India and what does it cost?',
        a: 'Yes. The UCAT is delivered at Pearson VUE centres in more than 130 countries including India, during the same window and under the same rules, at the non-UK fee of £115; the UK fee is £70. Candidates far from a centre can apply for online proctored testing through OnVUE before booking.',
      },
      {
        q: 'What is a good UCAT score?',
        a: 'The consortium publishes preliminary mean scores and deciles in mid-September and final statistics after the window. Universities use the score differently — as a ranking, a cut-off or a weighted component — and publish their approach, so a good score is one that meets the published use at your chosen universities. Some also screen on the Situational Judgement band.',
      },
      {
        q: 'How long is a UCAT result valid and can I resit?',
        a: 'A UCAT 2026 result is valid only for the 2027 admissions cycle, including deferred entry to 2028. The test may be sat once per cycle, and a candidate may not sit both the UCAT and the UCAT ANZ in the same year; a candidate applying next year sits the test again.',
      },
      {
        q: 'Do I need to send my UCAT score to universities?',
        a: 'No. After the 15 October UCAS deadline the UCAT Office matches candidates to their applications and delivers results directly to UK consortium universities in early November; universities accept only results provided this way. Partner universities abroad receive results through the account or on request.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     LNAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'lnat',
    path: '/entrance-exams/international/lnat/',
    name: 'LNAT',
    fullName: 'Law National Aptitude Test',
    authority: 'LNAT Consortium',
    official: 'lnat.ac.uk',
    seoTitle: 'LNAT 2026–27: Format, Universities, Deadlines, Fees & Results',
    metaDescription:
      'LNAT guide — the 42-question section and the essay, the UK and overseas universities that require it, the 2026–27 deadlines, fees and results.',
    lead: [
      'The LNAT is the aptitude test for undergraduate law at a consortium of UK universities — Bristol, Cambridge, Durham, Glasgow, King’s College London, the LSE, Oxford, SOAS and UCL — and at a few institutions elsewhere, including IE University in Spain, the Singapore University of Social Sciences and O.P. Jindal Global Law School in India. It tests the verbal reasoning at the heart of legal study rather than any knowledge of law, and the consortium says it cannot be revised for, only prepared for.',
      'The test is two and a quarter hours on a computer at a Pearson VUE centre: a 95-minute section of 42 multiple-choice questions on twelve argumentative passages, then a 40-minute essay chosen from three titles. The multiple-choice section produces the LNAT score out of 42; the essay is not scored centrally but is sent to every university applied to and read as part of the application. Candidates register from 1 August, sit from 1 September, and must sit by the deadline of the earliest university they apply to — 15 October 2026 for Oxford and Cambridge.',
    ],
    quickFacts: [
      ['Administered by', 'LNAT Consortium, written by Edexcel and delivered by Pearson VUE at 500+ centres in 165 countries'],
      ['Used for', 'Undergraduate law at nine UK universities and partner institutions abroad, including Jindal Global Law School'],
      ['Format', 'Section A: 42 multiple-choice questions on 12 passages in 95 minutes; Section B: one essay from three titles in 40 minutes'],
      ['Scoring', 'Section A scored out of 42 as the LNAT score; the essay unscored but sent to universities'],
      ['2026–27 deadlines', 'Sit by 15 October 2026 for Oxford and Cambridge; 31 December for KCL, LSE and UCL; 13 January 2027 for Bristol and Durham; 25 January for the rest'],
      ['Fee', '£75 at UK and EU centres; £120 elsewhere; one sitting per cycle'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Section A presents twelve passages of argument — editorials, essays, extracts on ethics, science, politics and culture — each with three or four questions asking what the writer assumes, what a word or phrase means in context, which statement best captures the argument, or what would weaken it. Answers can be reviewed at any time within the 95 minutes, but the section closes for good when Section B begins. Section B offers three essay questions on contested issues and asks for a reasoned, economical argument reaching a conclusion in 40 minutes.',
      },
      {
        type: 'p',
        text: 'The LNAT does not replace A levels, the IB or their Indian equivalents. Universities use the score alongside qualifications, the UCAS form and the personal statement, and there is no fixed weight: some use the essay as the basis for interview questions, some compare it with the personal statement, some use it to separate borderline candidates. Scores go to universities from 21 October for tests taken up to 20 October and within 24 hours of the test thereafter; candidates themselves receive the result by email in mid-February if they sat on or before 26 January, and in mid-August otherwise.',
      },
      {
        type: 'list',
        title: 'What makes the LNAT distinctive',
        items: [
          { text: 'No knowledge is tested', note: 'the passages are chosen to be unfamiliar and the questions to reward close reading of argument.' },
          { text: 'An essay the universities read', note: 'unmarked by the consortium, but an Oxford or LSE tutor may build an interview or a decision on it.' },
          { text: 'Universities see the score before the candidate', note: 'a candidate applies without knowing the result, so the decision to apply cannot depend on it.' },
          { text: 'One attempt per cycle', note: 'an unauthorised second sitting invalidates the later test.' },
        ],
      },
      {
        type: 'note',
        title: 'Timing against the university, not the test',
        text: 'The LNAT can be sat on any day a centre has a slot from 1 September, but the deadline is set by the university: Oxford and Cambridge applicants must sit by 15 October, King’s, the LSE and UCL applicants by 31 December, Bristol and Durham applicants by 13 January, and the rest by 25 January, each with a booking deadline a week or more earlier. A test taken before the summer does not count for the following cycle.',
      },
    ],
    stages: [
      {
        name: 'Register and book',
        mode: 'From 1 August 2026; £75 or £120 at booking; Pearson VUE centres',
        detail:
          'Create an LNAT account, choose a centre and a slot, and pay by card — or by voucher where cards from the candidate’s country are not accepted, which includes several South Asian and African countries. A bursary waives the fee for UK and EU candidates on certain benefits. Rescheduling is free until noon two working days before the test; after that the fee is forfeit.',
      },
      {
        name: 'Section A — multiple choice',
        mode: '95 minutes; 42 questions on 12 passages',
        detail:
          'Three or four questions on each passage about the argument’s assumptions, meaning, structure and implications. Answers may be changed at any point during the section, which closes when Section B starts.',
      },
      {
        name: 'Section B — essay',
        mode: '40 minutes; one of three titles',
        detail:
          'A reasoned argument to a conclusion on a contested question, judged by universities for economy, structure and command of written English. The review screen allows editing until the candidate ends the session.',
      },
      {
        name: 'Results',
        mode: 'To universities from 21 October, then within 24 hours; to candidates in mid-February or mid-August',
        detail:
          'Pearson VUE releases the score and essay to the universities named; the candidate receives the score by email at the release for their test date and cannot see the essay again. There is no re-mark of the multiple-choice section.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'LNAT syllabus — what the multiple-choice questions ask of an argumentative passage, what the essay titles look like, and what universities read for.',
        lead: [
          'There is nothing to learn and a good deal to practise: reading an argument for what it assumes, and writing one that reaches a conclusion.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Section A question types',
                'The writer’s main argument or purpose; what the writer assumes or takes for granted; the meaning of a word, phrase or reference in context; which statement is or is not supported by the passage; what would strengthen or weaken the argument; the function of a sentence or paragraph; and the writer’s attitude or tone. Every answer must be found in the passage, not in what the candidate knows.',
              ],
              [
                'The passages',
                'Twelve extracts of several hundred words each, argumentative rather than descriptive, on subjects from law and ethics to science, politics, education and the arts, written for an educated general reader and often deliberately provocative.',
              ],
              [
                'Section B',
                'Three titles on contested questions of public concern — the kind of question a newspaper column or a debate might take up. Universities read for a clear position, reasons that support it, engagement with the obvious objection, economy of expression and a real conclusion, in about 500 to 600 words.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'LNAT — test format', href: 'https://lnat.ac.uk/what-is-lnat/test-format/' },
              { label: 'LNAT — do I need to sit the test', href: 'https://lnat.ac.uk/what-is-lnat/do-i-need-to-sit-the-test/' },
              { label: 'CLAT guide', to: '/entrance-exams/law/clat/' },
            ],
          },
        ],
      },
      'exam-pattern': {
        description:
          'LNAT exam pattern — the two sections and their timing, scoring, the 2026–27 deadlines by university, fees and when results are released.',
        lead: [
          'Two and a quarter hours in two sections, one scored and one read, with deadlines that depend on where you apply.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'The LNAT as the consortium describes it.',
            head: ['Section', 'Time', 'Content', 'Scoring'],
            rows: [
              ['A — Multiple choice', '95 minutes', '42 questions on 12 argumentative passages', 'One mark each; the LNAT score out of 42'],
              ['B — Essay', '40 minutes', 'One of three titles', 'Not scored; sent to each university applied to'],
            ],
          },
          {
            type: 'table',
            caption: '2026–27 cycle deadlines for entry in autumn 2027, as published; check each university for changes.',
            head: ['Applying to', 'Book by', 'Sit by', 'UCAS form by'],
            rows: [
              ['Oxford and Cambridge', '15 September 2026', '15 October 2026', '15 October 2026'],
              ['King’s College London, LSE, UCL', '—', '31 December 2026', '13 January 2027, 18:00'],
              ['Bristol and Durham', '13 January 2027', '13 January 2027', '13 January 2027, 18:00'],
              ['Glasgow, SOAS and other LNAT universities', '20 January 2027', '25 January 2027', '13 January 2027, 18:00'],
              ['Late applicants, usually international', '25 July 2027', 'As the university allows', '30 June 2027'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Fees',
                'Set by the location of the centre, not the candidate’s nationality: £75 at UK and EU centres and £120 elsewhere, charged in sterling at booking. Candidates in countries whose cards are not accepted — Bangladesh, Pakistan and Nigeria among them — pay through an LNAT voucher, which takes at least a week to process.',
              ],
              [
                'Results',
                'Universities receive scores and essays from 21 October for tests taken between 1 September and 20 October, and within 24 hours of the test after that. Candidates receive their score by email in mid-February if they sat on or before 26 January, and in mid-August if later; no specific dates are given.',
              ],
              [
                'One sitting',
                'The test may be taken once per cycle; a second unauthorised sitting invalidates the later one. A test taken before the summer holiday does not count for the coming cycle.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        description:
          'LNAT practice material — the official practice tests and sample essays on the consortium’s site, and how to use them.',
        lead: [
          'The consortium publishes practice tests and sample essays free of charge; they are the only material written to the test’s standard.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Two full practice tests in the live interface, a preparation guide, hints and tips, and sample essays with commentary are on lnat.ac.uk. Because the passages are chosen for unfamiliarity, the value of practice is in the method — locating the claim, the reasons and the assumption in a passage quickly — rather than in meeting familiar content. Broadsheet comment pieces read with the same questions in mind make good further practice.',
          },
          {
            type: 'steps',
            title: 'Using the official tests',
            items: [
              { title: 'Sit one test under the full timing', text: 'Ninety-five minutes for 42 questions is about two minutes a question including reading; the pace is the surprise.' },
              { title: 'Review every wrong answer against the passage', text: 'The right answer is always in the text; the wrong ones usually import something the candidate believed.' },
              { title: 'Write essays to the 40-minute clock', text: 'Plan for five minutes, write for thirty, read for five; compare with the sample essays for structure and economy.' },
              { title: 'Practise choosing a title fast', text: 'Three titles are offered; the one on which you can argue both sides and choose is the one to take.' },
            ],
          },
          {
            type: 'links',
            title: 'Practise with',
            items: [
              { label: 'LNAT — practice tests', href: 'https://lnat.ac.uk/how-to-prepare/practice-test/' },
              { label: 'LNAT — sample essays', href: 'https://lnat.ac.uk/how-to-prepare/sample-essays/' },
              { label: 'Verbal ability and reading comprehension notes', to: '/study-material/varc/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'LNAT mock tests — full timed sittings of both sections, scoring Section A against the published averages, and getting the essay read.',
        lead: [
          'Sit both sections together, timed, and have the essay read by someone who will say what is wrong with it.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Take an official practice test first', text: 'Untimed once to learn the question style, then timed only.' },
              { title: 'Score Section A out of 42 and keep the trend', text: 'The consortium publishes past average scores; the universities compare candidates against the year’s cohort.' },
              { title: 'Do Section B straight after Section A', text: 'The essay comes after 95 minutes of close reading, and the fatigue is part of the test.' },
              { title: 'Get every essay critiqued', text: 'Structure, economy and whether it reaches a conclusion; a teacher or tutor who reads argument will see what you cannot.' },
              { title: 'Book to sit with a fortnight to spare', text: 'A slot near the deadline may not exist at the nearest centre, and rescheduling closes two working days before.' },
            ],
          },
          {
            type: 'links',
            title: 'Start with',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Verbal ability and reading comprehension notes', to: '/study-material/varc/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'LNAT preparation — reading argument for assumptions, writing economical essays, and the booking and deadline decisions for UK law applications from India.',
        lead: [
          'The LNAT rewards a habit of reading for argument that takes weeks to build and cannot be crammed.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'From choosing universities to results',
            items: [
              { title: 'List the universities and their deadlines', text: 'The earliest deadline among your choices is your test deadline — 15 October for Oxford or Cambridge, 31 December for King’s, the LSE and UCL, mid-to-late January for the rest.' },
              { title: 'Register from 1 August and book early', text: 'Centres in India offer limited slots; a booking in August or September for a date well before the deadline avoids the scramble.' },
              { title: 'Read argument daily', text: 'One opinion piece a day, asking what it claims, what it assumes and what would undermine it; note the answers in a sentence each.' },
              { title: 'Write a 40-minute essay weekly', text: 'On a contested public question, to a conclusion, in about 550 words, and have it read.' },
              { title: 'Do the official practice tests in the last month', text: 'Timed, both sections, at the same time of day as the booked slot.' },
              { title: 'Apply without waiting for the score', text: 'Candidates do not see the result before the UCAS deadline; universities do. Make the choices on the strength of the whole application.' },
            ],
          },
          {
            type: 'note',
            title: 'Indian applicants and Jindal Global Law School',
            text: 'O.P. Jindal Global Law School lists the LNAT among its admission routes, which makes the test relevant to some candidates who are not applying to the UK at all. Check the school’s own page for the cycle, deadline and how the score is used; the consortium refers such conditions to the university.',
          },
        ],
      },
      'study-material': {
        description:
          'LNAT study material — the consortium’s free practice and guides, and the reading that builds argument analysis and essay writing.',
        lead: [
          'Official practice for the format; serious opinion journalism and short essays for the habit.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'By section.',
            head: ['Section', 'What to use', 'Note'],
            rows: [
              ['Section A', 'The official practice tests and preparation guide; daily comment pieces from broadsheets and essays on ethics, science and politics', 'Read for claim, reasons, assumption.'],
              ['Section B', 'The official sample essays and commentary; a collection of contested public questions to argue', 'About 550 words to a conclusion in 40 minutes.'],
              ['Both', 'A concise guide to critical reasoning — assumptions, fallacies, evidence', 'The vocabulary of argument, not of law.'],
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'CLAT guide', to: '/entrance-exams/law/clat/' },
              { label: 'LSAT guide', to: '/entrance-exams/international/lsat/' },
              { label: 'UCAT guide', to: '/entrance-exams/international/ucat/' },
              { label: 'Student visa process', to: '/entrance-exams/international/visa-process/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the LNAT exam pattern?',
        a: 'A 2¼-hour computer test at a Pearson VUE centre in two sections. Section A gives 95 minutes for 42 multiple-choice questions on twelve argumentative passages, three or four per passage, and produces the LNAT score out of 42. Section B gives 40 minutes for one essay chosen from three titles; it is not scored but is sent to every university applied to and read as part of the application.',
      },
      {
        q: 'Which universities require the LNAT?',
        a: 'In the UK: Bristol, Cambridge, Durham, Glasgow, King’s College London, the LSE, Oxford, SOAS and UCL, for the law courses each lists. Outside the UK the consortium names IE University in Spain, the Singapore University of Social Sciences and O.P. Jindal Global Law School in India, each under its own conditions.',
      },
      {
        q: 'When must I sit the LNAT for 2027 entry?',
        a: 'Registration opened on 1 August 2026 and testing on 1 September. Oxford and Cambridge applicants must sit by 15 October 2026, booking by 15 September; King’s, LSE and UCL applicants by 31 December; Bristol and Durham applicants by 13 January 2027; applicants to the other LNAT universities by 25 January 2027, booking by 20 January. A test taken before summer 2026 does not count.',
      },
      {
        q: 'How much does the LNAT cost?',
        a: '£75 at test centres in the UK and EU and £120 at centres elsewhere, including India, charged in sterling at booking. The fee depends on the centre, not on nationality. Candidates whose country’s cards are not accepted pay by voucher; UK and EU candidates on certain benefits can apply for a bursary.',
      },
      {
        q: 'When do LNAT results come out?',
        a: 'Universities receive scores and essays from 21 October for tests taken up to 20 October, and within 24 hours of the test after that, so they see the result before the candidate does. Candidates receive their score by email in mid-February if they sat on or before 26 January, and in mid-August if later.',
      },
      {
        q: 'Can I retake the LNAT?',
        a: 'Not within a cycle. The test may be sat once per admissions cycle, and an unauthorised second sitting invalidates the later test. A candidate reapplying the following year sits it again after that year’s registration opens.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Student visa process
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'visa-process',
    path: '/entrance-exams/international/visa-process/',
    name: 'Student Visa Process',
    fullName: 'Student visa process for the United States, United Kingdom, Canada and Australia',
    authority: 'US Department of State; UK Home Office; Immigration, Refugees and Citizenship Canada; Australian Department of Home Affairs',
    official: 'travel.state.gov · gov.uk · canada.ca · immi.homeaffairs.gov.au',
    seoTitle: 'Student Visa Process 2026: US, UK, Canada & Australia Step by Step',
    metaDescription:
      'Student visa guide for Indian applicants — US F-1, UK Student visa, Canada study permit, Australia subclass 500: documents, funds, English, fees, timelines.',
    resourceLabels: {
      syllabus: 'Documents Checklist',
      'exam-pattern': 'Country by Country',
      'previous-year-papers': 'Interview Questions',
      'mock-tests': 'Interview Practice',
      preparation: 'Timeline',
      'study-material': 'Official Sources',
    },
    stagesEyebrow: 'The process',
    stagesHeading: 'How a student visa application works',
    stagesIntro: 'The four countries differ in detail, but the sequence is the same: an offer, a financial case, an English test, an application, biometrics and, in the US, an interview.',
    stagesCaption: 'Rules and fees change; the immigration authority’s own page is the document that binds.',
    lead: [
      'An admission offer is the beginning of studying abroad, not the end. Between the offer and the flight sits a visa application whose rules are written by an immigration authority, not a university, and which tests three things the university did not: that the money to pay for the course and to live exists and can be shown, that the applicant genuinely intends to study and, for most routes, to leave when the course ends, and that English has been proved in the form the authority accepts. The tests on this site — IELTS, PTE Academic, TOEFL, OET, CELPIP, the Duolingo English Test — matter to a visa officer only as far as the authority’s own list allows.',
      'This guide follows the four routes Indian students take most: the United States’ F-1 visa, obtained at an interview after the university issues a Form I-20; the United Kingdom’s Student visa, applied for online on a Confirmation of Acceptance for Studies; Canada’s study permit, which since 2024 has needed a provincial attestation letter as well as a letter of acceptance; and Australia’s subclass 500, decided against a Genuine Student requirement on a Confirmation of Enrolment. Every figure below is from the authority’s own page at the date checked, and every one of them changes.',
    ],
    quickFacts: [
      ['United States — F-1', 'Form I-20 from an SEVP-approved school; SEVIS I-901 fee US$350; DS-160 and US$185 application fee; interview at the consulate; visa issued up to 365 days before the course, entry no more than 30 days before'],
      ['United Kingdom — Student visa', 'CAS from a licensed sponsor; £558 fee plus £776 a year Immigration Health Surcharge; apply up to six months before the course; decision usually within three weeks; funds for a year’s fees plus £1,529 a month in London or £1,171 elsewhere for nine months, held 28 days'],
      ['Canada — study permit', 'Letter of acceptance from a designated learning institution and a provincial or territorial attestation letter; C$150; proof of funds for the first year with living costs of C$23,448 for one person from 1 September 2026; biometrics'],
      ['Australia — subclass 500', 'Confirmation of Enrolment; Overseas Student Health Cover; from AUD 2,500; Genuine Student requirement; 12 months’ living costs of AUD 29,710 plus course fees and travel; a centre-based English test within two years'],
      ['English tests', 'Each authority lists accepted tests and minimums; at-home tests are not accepted by Australia and the UK’s SELT list is its own'],
      ['After the course', 'UK Graduate visa of two years, 18 months from 1 January 2027; Canada’s post-graduation work permit; Australia’s subclass 485; US Optional Practical Training under the F-1'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Each authority wants the same three things in its own form. The offer: an I-20 issued by the school and registered in SEVIS for the US; a Confirmation of Acceptance for Studies, a reference number issued by a licensed sponsor, for the UK; a letter of acceptance from a designated learning institution plus a provincial attestation letter for Canada; a Confirmation of Enrolment for Australia. The money: the US officer asks how all costs will be paid; the UK sets a precise sum held for 28 days; Canada sets a living-cost figure per family size and asks for a plan for later years; Australia sets 12 months of living costs and fees, or a parent’s or partner’s annual income of at least AUD 87,856. The intent: the US and Canada ask for evidence that the applicant will leave at the end; Australia applies a Genuine Student test; the UK relies on the sponsor’s assessment.',
      },
      {
        type: 'p',
        text: 'English proof is where the tests on this site meet the visa. The UK accepts a Secure English Language Test at CEFR B2 for degree-level study, or the university’s own assessment; Australia publishes a table of accepted tests with minimum scores — IELTS 6.0, PTE Academic 47, TOEFL iBT 67, CELPIP 7 — lowered when an English course is packaged with the degree, and refuses any test taken at home; Canada and the US leave English to the institution, though an officer may ask. A test taken for admission may or may not serve the visa, and the order in which they are booked should follow the stricter rule.',
      },
      {
        type: 'list',
        title: 'What decides most refusals',
        items: [
          { text: 'Funds that cannot be traced', note: 'a large deposit made days before the application, an account in a relative’s name without a sponsorship letter, or a loan without a sanction letter.' },
          { text: 'A course that does not fit', note: 'a change of field or a step down in level with no explanation in the statement or interview.' },
          { text: 'An English test the authority does not accept', note: 'an at-home test for Australia, a non-SELT test for a UK applicant who needs one, a score older than two years.' },
          { text: 'Missed timing', note: 'a UK application more than six months before the course, a US interview slot that does not exist before the start date, a Canadian attestation letter issued after the province’s cap is reached.' },
        ],
      },
      {
        type: 'note',
        title: 'Dates that bind',
        text: 'A US student visa may be issued up to 365 days before the course start, but the holder cannot enter more than 30 days before. A UK Student visa can be applied for six months before the course and normally allows arrival a month before it. The UK Graduate visa shortens from two years to 18 months for applications from 1 January 2027. Canada’s living-cost figure rose on 1 September 2026 and rises each year. Australia processes student applications under Ministerial Direction 115 for applications lodged from 14 November 2025, which sets priorities by provider and sector.',
      },
    ],
    stages: [
      {
        name: 'Secure the offer document',
        mode: 'I-20 · CAS · letter of acceptance and PAL/TAL · CoE',
        detail:
          'The US school issues a Form I-20 after admission and registers the student in SEVIS. The UK sponsor issues a CAS, usually after a deposit, valid for a single application. The Canadian institution issues a letter of acceptance and, in most cases, a provincial or territorial attestation letter once the offer is accepted and tuition paid in part or full; Quebec adds a CAQ. The Australian provider issues a Confirmation of Enrolment after the deposit, and Overseas Student Health Cover is arranged for the whole stay.',
      },
      {
        name: 'Build the financial case',
        mode: 'Bank statements, sponsor letters, loan sanctions, income evidence',
        detail:
          'The UK requires the first year’s course fee as stated on the CAS plus £1,529 a month for up to nine months in London or £1,171 outside, held for 28 consecutive days ending within 31 days of the application; a loan or sponsor letter substitutes. Canada requires the first year’s tuition, transport and living costs — C$23,448 for a single applicant from 1 September 2026, C$29,192 for two — and a plan for later years. Australia requires 12 months of living costs at AUD 29,710, 12 months of course fees and travel, or a parent’s or partner’s income of at least AUD 87,856 in the previous 12 months, with schooling costs for children. The US sets no figure but asks how all costs will be met.',
      },
      {
        name: 'Prove English in the accepted form',
        mode: 'SELT at B2 for the UK; the Home Affairs table for Australia; institution rules for Canada and the US',
        detail:
          'UK degree-level applicants prove CEFR B2 through an approved SELT, a UK or English-taught degree with an Ecctis assessment, or the higher-education provider’s own assessment. Australia accepts listed tests taken within two years and refuses at-home tests; minimums are IELTS 6.0, PTE Academic 47, TOEFL iBT 67, CELPIP 7 and OET on its own scale, lower with a packaged English course. Canada and the US leave the requirement to the institution.',
      },
      {
        name: 'Apply and pay',
        mode: 'Online application, fees and surcharges, biometrics',
        detail:
          'US: pay the SEVIS I-901 fee of US$350, complete the DS-160, pay the US$185 application fee and book an interview. UK: apply online up to six months before the course, pay £558 and the Immigration Health Surcharge of £776 a year, prove identity through the app or a visa centre. Canada: apply online, pay C$150, give biometrics, submit a letter of explanation and a medical examination if the stay exceeds six months. Australia: apply through ImmiAccount, pay from AUD 2,500, and attach the Genuine Student statement and evidence the document checklist tool asks for.',
      },
      {
        name: 'Interview, decision and travel',
        mode: 'Consular interview for the US; decision times vary by country',
        detail:
          'The US decision is made at the interview, with digital fingerprints taken and issuance possible up to 365 days before the course. The UK usually decides within three weeks for applications from outside the UK. Canada’s processing time varies by country and is published online. Australia’s times depend on the provider’s evidence level and the Ministerial Direction priorities. Entry windows follow: 30 days before the course for the US, a month for the UK for courses over six months.',
      },
    ],
    resources: {
      syllabus: {
        title: 'Student Visa Documents Checklist | Brolly Exam Prep',
        eyebrow: 'Checklist',
        heading: 'the documents each authority asks for',
        description:
          'Student visa documents checklist — what the US, UK, Canada and Australia each require: offer documents, identity, funds, English, health and statements.',
        lead: [
          'Four authorities, four lists. The overlap is large; the differences are where applications fail.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Core documents by route, from each authority’s own guidance. Country-specific extras — a tuberculosis test for UK applicants from India, a police certificate where asked — come from the local visa office instructions.',
            head: ['Document', 'United States — F-1', 'United Kingdom — Student', 'Canada — study permit', 'Australia — subclass 500'],
            rows: [
              ['Offer', 'Form I-20 from an SEVP-approved school; SEVIS registration', 'Confirmation of Acceptance for Studies (CAS) reference', 'Letter of acceptance from a DLI; provincial or territorial attestation letter; CAQ for Quebec', 'Confirmation of Enrolment for each course'],
              ['Identity', 'Passport valid six months beyond the stay; DS-160 confirmation; photo uploaded to the DS-160', 'Passport; identity proved through the app or a visa application centre', 'Passport information page; two passport photos with name and date of birth on the back', 'Passport for the applicant and each family member'],
              ['Funds', 'Evidence of how educational, living and travel costs will be paid, if the officer asks', 'First-year fees per the CAS plus living costs held 28 days; or loan or sponsor evidence', 'Proof of funds for first-year tuition, transport and living costs; a plan for later years', 'Evidence of financial capacity if the checklist requires it; living costs, fees and travel, or parental or partner income'],
              ['English', 'As the school requires; may be asked at interview', 'SELT at B2, a UK or English-taught degree with Ecctis confirmation, or the provider’s assessment', 'As the DLI requires', 'A listed test within two years at the published minimum, unless exempt; no at-home tests'],
              ['Health', '—', 'Tuberculosis test results where required; Immigration Health Surcharge paid', 'Medical examination if staying over six months or as directed', 'Health examination as directed; Overseas Student Health Cover for the stay'],
              ['Intent and character', 'Evidence of intent to depart after the course; academic transcripts and test scores if asked', 'Parental consent and relationship proof if under 18; ATAS certificate for some postgraduate subjects', 'A letter of explanation; police certificate if asked; custodian declaration for minors', 'The Genuine Student statement and evidence; character and Australian values declarations; welfare arrangements if under 18'],
            ],
          },
          {
            type: 'note',
            title: 'Dates on documents',
            text: 'The UK’s 28-day funds window must end within 31 days of the application date. Australia’s English test must be within two years of lodging, or of decision for streamlined applicants asked for evidence. Canada’s attestation letter is tied to a provincial allocation and the offer it names. A US I-20 carries a programme start date the interview and the entry are measured against. Assemble the file so that every date still holds on the day of submission.',
          },
          {
            type: 'links',
            title: 'Official checklists',
            items: [
              { label: 'US Department of State — student visa', href: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html' },
              { label: 'GOV.UK — Student visa: documents you must provide', href: 'https://www.gov.uk/student-visa/documents-you-must-provide' },
              { label: 'Canada.ca — study permit: get the right documents', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents.html' },
              { label: 'Home Affairs — subclass 500 Student visa', href: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500' },
            ],
          },
        ],
      },
      'exam-pattern': {
        title: 'Student Visas Country by Country | Brolly Exam Prep',
        eyebrow: 'By country',
        heading: 'the four routes side by side',
        description:
          'Student visa routes compared — US F-1, UK Student visa, Canada study permit, Australia subclass 500: fees, funds, English rules, decision times, what follows.',
        lead: [
          'The same questions, answered four ways.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Figures from each authority’s page at the date checked; all change, and the authority’s page is final.',
            head: ['', 'United States — F-1', 'United Kingdom — Student visa', 'Canada — study permit', 'Australia — subclass 500'],
            rows: [
              ['Government fee', 'SEVIS I-901 US$350; visa application US$185; issuance fee by nationality', '£558; Immigration Health Surcharge £776 a year', 'C$150; biometrics fee', 'From AUD 2,500 for the main applicant; more for family; concessions for some nationalities'],
              ['Earliest application', 'Visa issuable up to 365 days before the course start', 'Six months before the course from outside the UK', 'On receipt of the letter of acceptance and attestation letter', 'On receipt of the CoE'],
              ['Financial rule', 'Show how all costs will be paid', 'First-year fees plus £1,529 or £1,171 a month for up to nine months, held 28 days', 'First-year tuition, transport and living costs — C$23,448 for one person, C$29,192 for two from 1 September 2026 — with a plan for the rest', '12 months’ living costs AUD 29,710, 12 months’ fees, travel; or parent or partner income of AUD 87,856; AUD 13,502 a year per school-age child'],
              ['English', 'Institution’s requirement', 'CEFR B2 at degree level by SELT, degree or provider assessment', 'Institution’s requirement', 'IELTS 6.0, PTE 47, TOEFL iBT 67, CELPIP 7, OET on its scale; lower with packaged ELICOS; no at-home tests'],
              ['Decision', 'At the interview', 'Usually three weeks from outside the UK', 'Varies by country; published online', 'Varies by provider evidence level and Ministerial Direction 115 priorities'],
              ['Work during study', 'On-campus, and off-campus with authorisation', 'As the visa conditions permit for the course level', 'As permitted on the permit', 'Up to 48 hours a fortnight in session'],
              ['Stay', 'Duration of status while enrolled', 'Up to five years at degree level', 'Length of the programme plus a margin', 'Up to six years in line with enrolment'],
              ['After the course', 'Optional Practical Training', 'Graduate visa: two years, or 18 months if applied for from 1 January 2027; three for a doctorate', 'Post-graduation work permit, subject to eligibility rules', 'Temporary Graduate visa, subclass 485'],
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'United States',
                'The consular interview is the decision. The officer reads the I-20, asks about the course and the school, the funding and the plan after graduation, and looks for ties that make departure likely. Interview wait times vary by season and post, and applying early is the only defence against a slot that falls after the course starts.',
              ],
              [
                'United Kingdom',
                'The sponsor has already assessed the applicant when it issues the CAS; the Home Office checks the funds, the English and the documents. The Immigration Health Surcharge is paid with the application and gives access to the NHS. A visa longer than the course is normal, and the Graduate visa follows without a job offer.',
              ],
              [
                'Canada',
                'Since 2024 most applicants need a provincial or territorial attestation letter tied to the province’s allocation, obtained through the institution after accepting the offer and paying tuition. The letter of explanation is where the study plan and the intention to leave are set out. Eligibility for the post-graduation work permit depends on the programme and on rules in force when the study permit was applied for.',
              ],
              [
                'Australia',
                'The Genuine Student requirement replaced the earlier genuine temporary entrant test: the applicant must show that study is the primary purpose, with evidence about circumstances at home, the course’s value and, where relevant, immigration history. Applications lodged from 14 November 2025 are processed under Ministerial Direction 115, which orders processing by provider and sector.',
              ],
            ],
          },
        ],
      },
      'previous-year-papers': {
        title: 'Student Visa Interview Questions | Brolly Exam Prep',
        eyebrow: 'Interview',
        heading: 'the questions officers ask',
        description:
          'Student visa interview questions — what US officers ask F-1 applicants about course, funding and plans, and how the UK, Canada and Australia ask in writing.',
        lead: [
          'Only the United States interviews every applicant. The others ask the same questions in a letter of explanation or a Genuine Student statement.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Why this course and this university',
                'The officer wants a reason that connects the applicant’s background to the programme — a subject continued, a specialisation chosen, a named faculty or facility. A generic answer about rankings suggests an agent’s choice rather than the applicant’s.',
              ],
              [
                'Who is paying, and how',
                'The figures on the I-20 and the funds shown should match; the sponsor’s relationship, income and the source of any recent deposit should be explainable in a sentence. A loan needs a sanction letter; a scholarship a letter naming the amount.',
              ],
              [
                'What happens after graduation',
                'The F-1 is a non-immigrant visa, and the officer is required to be satisfied that the applicant intends to depart. Optional Practical Training is a lawful part of the programme and may be mentioned, but a plan that begins and ends with staying in the US is the commonest reason for refusal.',
              ],
              [
                'Academic record and test scores',
                'Transcripts, degree certificates and the standardised test scores the school required may be asked for; gaps and changes of field should have short explanations ready.',
              ],
              [
                'Ties to India',
                'Family, property, a job to return to or a family business: anything that makes return more likely than not. Officers ask about it directly and draw inferences from the whole file.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The UK does not normally interview students but reserves a credibility interview for cases where the sponsor’s assessment or the documents raise doubt. Canada asks the same questions in the letter of explanation, which should say what will be studied, why in Canada, how it fits the applicant’s history, how it is funded and why the applicant will leave at the end. Australia asks them in the Genuine Student statement, with evidence for each claim, and may interview.',
          },
          {
            type: 'links',
            title: 'Official guidance',
            items: [
              { label: 'US Department of State — student visa interview and documentation', href: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html' },
              { label: 'Canada.ca — study permit: who can apply', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/eligibility.html' },
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
            ],
          },
        ],
      },
      'mock-tests': {
        title: 'Student Visa Interview Practice | Brolly Exam Prep',
        eyebrow: 'Rehearsal',
        heading: 'rehearsing the interview and the statements',
        description:
          'Student visa interview practice — rehearsing the F-1 interview, and drafting the Canadian letter of explanation and the Australian Genuine Student statement.',
        lead: [
          'A US interview lasts a few minutes. The written statements for Canada and Australia are read in about the same time. Rehearse for brevity.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'A routine',
            items: [
              { title: 'Write the five answers in two sentences each', text: 'Course and university; funding; plan after graduation; academic record; ties. If an answer needs a paragraph, the case has a weakness to fix, not a script to lengthen.' },
              { title: 'Rehearse aloud with a stranger to the file', text: 'Someone who does not know the plan should ask follow-ups — why this university over one at home, what the sponsor earns, what the job after the degree would be — and note where the answers hesitate.' },
              { title: 'Check every figure against the documents', text: 'The tuition on the I-20, the balance on the statement, the loan amount, the sponsor’s income: the officer has the papers open.' },
              { title: 'Draft the Canadian letter and the Australian statement to a page', text: 'Purpose, fit, funding, return; then read them as an officer with two minutes would.' },
              { title: 'Prepare the documents in the order they will be asked for', text: 'Passport, DS-160 confirmation, fee receipt, I-20, then the financial and academic evidence; fumbling for papers reads as unprepared.' },
            ],
          },
          {
            type: 'note',
            title: 'What not to rehearse',
            text: 'Memorised answers are heard as memorised. The aim of rehearsal is to know the facts of one’s own case well enough to answer any question about them plainly, not to perform a script. Officers are trained to ask the question the script did not anticipate.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'TOEFL guide', to: '/entrance-exams/international/toefl/' },
              { label: 'GRE guide', to: '/entrance-exams/international/gre/' },
              { label: 'SAT guide', to: '/entrance-exams/international/sat/' },
            ],
          },
        ],
      },
      preparation: {
        title: 'Student Visa Timeline | Brolly Exam Prep',
        eyebrow: 'Timeline',
        heading: 'the order of the year',
        description:
          'Student visa timeline — when to sit English and admissions tests, when the CAS, I-20 and CoE arrive, when to apply and how long each authority takes.',
        lead: [
          'Work backwards from the course start date. Every route has a window that opens and a step that cannot be hurried.',
        ],
        blocks: [
          {
            type: 'steps',
            title: 'Twelve months out to arrival',
            items: [
              { title: '12 to 9 months before: tests', text: 'Sit the admissions test — SAT or ACT, GRE or GMAT, LSAT, UCAT or LNAT — and an English test the visa authority accepts, so that one score serves admission and the visa. Australia’s two-year validity clock and the UK’s SELT list decide which English test to book.' },
              { title: '9 to 6 months before: applications and offers', text: 'Apply, accept, and pay the deposit that triggers the I-20, CAS, letter of acceptance or CoE. For Canada, ask the institution about the attestation letter at acceptance; for the UK, note the CAS is valid for one application.' },
              { title: '6 to 4 months before: the money', text: 'Move the funds into the account that will be shown and leave them there — 28 days for the UK, and long enough for any authority to see them as settled. Obtain loan sanction letters and sponsor declarations, and Australia’s income evidence if that route is used.' },
              { title: '6 to 3 months before: apply', text: 'The UK opens six months before the course; the US interview can be booked once the I-20 and SEVIS fee are in hand, and issuance is allowed up to a year ahead; Canada and Australia open on the offer documents. Biometrics, medicals and police certificates take weeks.' },
              { title: '3 months to arrival: decision and travel', text: 'Three weeks is the usual UK decision; the US decision is at the interview; Canada and Australia publish their times. Book travel inside the entry window — 30 days before the course for the US, a month for the UK.' },
              { title: 'After arrival: conditions', text: 'Register with the institution, keep the work-hour limits, and know the post-study route’s rules before the final year, since UK Graduate visa length changes on 1 January 2027 and Canadian PGWP eligibility depends on the programme.' },
            ],
          },
          {
            type: 'note',
            title: 'The step that most often slips',
            text: 'The financial evidence. Funds moved late, held for fewer than 28 days, or spread across accounts without a paper trail delay or sink more applications than any interview does. Decide in the spring where the money will sit and let it sit there.',
          },
        ],
      },
      'study-material': {
        title: 'Student Visa Official Sources | Brolly Exam Prep',
        eyebrow: 'Sources',
        heading: 'the pages that bind',
        description:
          'Student visa official sources — the US State Department, GOV.UK, Canada.ca and Australian Home Affairs pages every figure on this guide is read from.',
        lead: [
          'Agents summarise; authorities publish. Read the authority.',
        ],
        blocks: [
          {
            type: 'table',
            caption: 'Every figure in this guide is from one of these pages at the date checked.',
            head: ['Route', 'Page', 'What it settles'],
            rows: [
              ['United States — F-1', 'travel.state.gov, Student Visa', 'The process, the DS-160, the US$185 fee, interview documents, the 365-day and 30-day rules'],
              ['United States — SEVIS', 'ice.gov/sevis/i901', 'The I-901 fee of US$350 for F and M applicants'],
              ['United Kingdom', 'gov.uk/student-visa and its money, English and documents pages', 'The £558 fee, the six-month window, the three-week decision, the £1,529 and £1,171 monthly sums, the 28-day rule, the B2 requirement, the Graduate visa change'],
              ['United Kingdom — surcharge', 'gov.uk/healthcare-immigration-application', 'The Immigration Health Surcharge of £776 a year for students'],
              ['Canada', 'canada.ca, study permit pages', 'The C$150 fee, the documents, the attestation letter, the living-cost table from 1 September 2026, eligibility and the PGWP'],
              ['Australia', 'immi.homeaffairs.gov.au, subclass 500', 'The AUD 2,500 fee, the CoE and OSHC requirements, the Genuine Student requirement, the AUD 29,710 living costs, the English test table and the no-at-home-test rule'],
            ],
          },
          {
            type: 'links',
            title: 'Official pages',
            items: [
              { label: 'US Department of State — student visa', href: 'https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html' },
              { label: 'ICE — I-901 SEVIS fee', href: 'https://www.ice.gov/sevis/i901' },
              { label: 'GOV.UK — Student visa', href: 'https://www.gov.uk/student-visa' },
              { label: 'GOV.UK — Student visa: money', href: 'https://www.gov.uk/student-visa/money' },
              { label: 'GOV.UK — Student visa: knowledge of English', href: 'https://www.gov.uk/student-visa/knowledge-of-english' },
              { label: 'GOV.UK — Immigration Health Surcharge', href: 'https://www.gov.uk/healthcare-immigration-application/how-much-pay' },
              { label: 'Canada.ca — study permit', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html' },
              { label: 'Canada.ca — proof of financial support', href: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html' },
              { label: 'Home Affairs — subclass 500 Student visa', href: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500' },
            ],
          },
          {
            type: 'links',
            title: 'Read next',
            items: [
              { label: 'IELTS guide', to: '/entrance-exams/international/ielts/' },
              { label: 'PTE Academic guide', to: '/entrance-exams/international/pte/' },
              { label: 'TOEFL guide', to: '/entrance-exams/international/toefl/' },
              { label: 'International exams', to: '/entrance-exams/international/' },
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What are the steps for a US F-1 student visa?',
        a: 'Admission to an SEVP-approved school, which issues a Form I-20 and registers you in SEVIS; payment of the SEVIS I-901 fee of US$350; the online DS-160 application with a photo; the US$185 application fee; an interview at the US embassy or consulate with passport, DS-160 confirmation, fee receipt and I-20, and possibly transcripts, test scores, funding evidence and proof of intent to depart; fingerprints at the interview. The visa can be issued up to 365 days before the course, but entry is allowed no more than 30 days before it starts.',
      },
      {
        q: 'How much money do I need to show for a UK Student visa?',
        a: 'The first year’s course fee as stated on your CAS, plus living costs of £1,529 a month for up to nine months for courses in London or £1,171 a month outside London, held in your account for 28 consecutive days ending within 31 days of the application. Loan or sponsorship evidence can substitute. The visa fee is £558 and the Immigration Health Surcharge £776 a year.',
      },
      {
        q: 'What does a Canadian study permit require?',
        a: 'A letter of acceptance from a designated learning institution, a provincial or territorial attestation letter in most cases — obtained through the institution after accepting the offer and paying tuition — a valid passport and photos, proof of funds for the first year’s tuition, transport and living costs, a letter of explanation, and a medical examination if staying more than six months. The living-cost requirement is C$23,448 for a single applicant for applications from 1 September 2026, and the fee is C$150.',
      },
      {
        q: 'What is the Genuine Student requirement for an Australian student visa?',
        a: 'Applicants for the subclass 500 must show that studying in Australia is the primary purpose of the visa, with a statement and evidence about their circumstances, the value of the course and their history. They must also hold a Confirmation of Enrolment and Overseas Student Health Cover, show 12 months of living costs of AUD 29,710 plus course fees and travel or a parent’s or partner’s income of at least AUD 87,856, and meet the English requirement with a listed centre-based test. The fee starts at AUD 2,500.',
      },
      {
        q: 'Which English tests are accepted for student visas?',
        a: 'The UK accepts an approved Secure English Language Test at CEFR B2 for degree-level study, or a UK or English-taught degree, or the university’s own assessment. Australia publishes a table — IELTS 6.0, PTE Academic 47, TOEFL iBT 67, CELPIP 7, OET on its own scale, lower where an English course is packaged — and does not accept any test delivered at home. Canada and the US leave English to the institution. The Duolingo English Test is widely accepted for admission but rarely for a visa.',
      },
      {
        q: 'How early should I apply for a student visa?',
        a: 'The UK accepts applications up to six months before the course and usually decides within three weeks. A US visa can be issued up to 365 days before the start date, and interview slots should be booked as soon as the I-20 and SEVIS fee are in hand. Canada and Australia accept applications once the offer documents exist and publish variable processing times. In every case the financial evidence should be assembled months earlier, since the UK’s funds must be held for 28 days.',
      },
      {
        q: 'What can I do after the course ends?',
        a: 'The UK Graduate visa allows two years’ stay for applications on or before 31 December 2026 and 18 months from 1 January 2027, three years for a doctorate. Canada offers a post-graduation work permit subject to programme and timing rules. Australia offers the Temporary Graduate visa, subclass 485, for qualifying graduates. In the US, F-1 students may apply for Optional Practical Training related to their field.',
      },
    ],
  },
]

export default international
