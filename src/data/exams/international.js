/**
 * International exams — /entrance-exams/international/
 *
 * Four tests taken for study abroad: one graduate admissions test, one
 * undergraduate admissions test, and two English proficiency tests. They share
 * a set of properties that distinguish them sharply from Indian entrances —
 * year-round testing, scores valid for years, retakes permitted, and results
 * sent selectively to institutions — and those properties should change how a
 * candidate plans, not just how they study.
 *
 * GMAT is listed under /entrance-exams/mba/ and canonicalised there; it is
 * linked from these pages rather than duplicated.
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
      ['Administered by', 'Educational Testing Service (ETS)'],
      ['Used for', 'Graduate admission worldwide, and by many business schools'],
      ['Sections', 'Verbal Reasoning, Quantitative Reasoning, Analytical Writing'],
      ['Format', 'Section-adaptive — the second section adapts to performance in the first'],
      ['Scoring', 'Verbal and quantitative on a 130–170 scale each; writing on 0–6'],
      ['Validity', 'Five years, with scores sendable selectively'],
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
      ['Administered by', 'British Council, IDP: IELTS Australia and Cambridge'],
      ['Modules', 'Academic — for university admission; General Training — for migration and work'],
      ['Skills tested', 'Listening, Reading, Writing and Speaking'],
      ['Scoring', 'Band scores from 1 to 9, in half bands, per skill and overall'],
      ['Speaking test', 'A face-to-face or video interview with a certified examiner'],
      ['Validity', 'Generally two years'],
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
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     TOEFL
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'toefl',
    path: '/entrance-exams/international/toefl/',
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language (iBT)',
    authority: 'Educational Testing Service (ETS)',
    official: 'ets.org/toefl',
    seoTitle: 'TOEFL iBT 2026: Sections, Integrated Tasks & IELTS Comparison',
    metaDescription:
      'TOEFL iBT exam guide — the four sections, integrated speaking and writing tasks, 120-point scoring, and how it compares with IELTS.',
    lead: [
      'TOEFL iBT assesses English proficiency for academic study and is accepted by universities worldwide, particularly in the United States. Like IELTS it tests reading, listening, speaking and writing — but it tests them in a way that is distinctively academic and, in one respect, distinctively demanding.',
      'That respect is integration. Several TOEFL tasks require you to read a passage, listen to a lecture on the same subject, and then speak or write a response that draws on both. It is a closer simulation of actual university work than any other English test attempts, and it is the part candidates most often under-prepare.',
    ],
    quickFacts: [
      ['Administered by', 'Educational Testing Service (ETS)'],
      ['Used for', 'University admission worldwide, particularly in the United States'],
      ['Sections', 'Reading, Listening, Speaking and Writing'],
      ['Scoring', '0 to 30 per section, 0 to 120 overall'],
      ['Distinctive feature', 'Integrated tasks combining reading, listening and response'],
      ['Speaking format', 'Recorded responses rather than an interview'],
    ],
    overview: [
      {
        type: 'p',
        text: 'TOEFL iBT is delivered on a computer at test centres and at home, year-round. It reports a score from 0 to 30 for each of the four sections and a total out of 120, and universities set their own minimum requirements, frequently both overall and per section.',
      },
      {
        type: 'p',
        text: 'Its content is deliberately academic. Reading passages come from university-level textbooks; listening material comprises lectures and campus conversations; and the speaking and writing tasks ask you to summarise and respond to academic content rather than to discuss general topics. That makes it a closer proxy for university study than a general proficiency test, and it also makes note-taking a genuine examinable skill.',
      },
      {
        type: 'list',
        title: 'The four sections',
        items: [
          { text: 'Reading', note: 'academic passages from university-level material, with questions on detail, inference, vocabulary, sentence function and passage organisation.' },
          { text: 'Listening', note: 'academic lectures and campus conversations, with questions on main idea, detail, function, attitude and organisation. Note-taking is permitted and necessary.' },
          { text: 'Speaking', note: 'recorded responses to prompts — one independent task expressing an opinion, and integrated tasks drawing on a reading passage and a listening extract.' },
          { text: 'Writing', note: 'an integrated task requiring you to relate a lecture to a reading passage, and a second task requiring a written contribution to an academic discussion.' },
        ],
      },
      {
        type: 'note',
        title: 'Speaking is recorded, not interviewed',
        text: 'TOEFL speaking responses are spoken into a microphone against a timer, with no examiner present. Candidates who find an interview intimidating often prefer this; candidates who draw energy from interaction often do not. It is a genuine consideration when choosing between TOEFL and IELTS, and worth deciding on the basis of how you actually perform rather than which sounds easier.',
      },
    ],
    stages: [
      {
        name: 'Reading',
        mode: 'Academic passages with questions',
        detail:
          'Passages drawn from university-level textbook material across the sciences, social sciences and humanities, with questions on factual detail, inference, vocabulary in context, sentence simplification, rhetorical purpose and passage summary.',
      },
      {
        name: 'Listening',
        mode: 'Lectures and conversations',
        detail:
          'Academic lectures, some with classroom discussion, and conversations in a campus context. Questions cover the main idea, supporting detail, the function of what is said, the speaker’s attitude, and how the material is organised. Note-taking is permitted throughout.',
      },
      {
        name: 'Speaking',
        mode: 'Recorded responses, timed',
        detail:
          'An independent task asking for an opinion on a familiar topic, and integrated tasks requiring you to read a short passage, listen to a related extract, and then speak a response drawing on both — each with a short preparation time and a strict response limit.',
      },
      {
        name: 'Writing',
        mode: 'Two tasks',
        detail:
          'An integrated task requiring you to read a passage, listen to a lecture that responds to it, and write an explanation of how they relate; and a second task requiring a written contribution to an online academic discussion, responding to a professor’s question and other students’ posts.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TOEFL iBT content — the four sections, the integrated task types and what each assesses.',
        lead: [
          'TOEFL has task types rather than a syllabus, and the integrated tasks are the ones that need specific preparation.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Reading',
                'Academic passages of several hundred words from university-level textbook material, with question types covering factual information, negative factual information, inference, rhetorical purpose, vocabulary in context, reference, sentence simplification, sentence insertion and a final summary or table-completion question worth more than the others.',
              ],
              [
                'Listening',
                'Academic lectures, some including student questions or discussion, and conversations between students or between a student and university staff. Question types cover the main idea, detail, the function of a statement, the speaker’s attitude, connecting content and making inferences. Material is played once and note-taking is essential.',
              ],
              [
                'Speaking — independent task',
                'A question about a familiar topic — a preference, an opinion, a choice — with a short preparation time and a strict response limit. Assessed on delivery, language use and topic development.',
              ],
              [
                'Speaking — integrated tasks',
                'Tasks requiring you to read a short passage, listen to a related lecture or conversation, and then speak a response that accurately relates the two. These test comprehension and synthesis under time as much as they test spoken English, and they are what most distinguishes TOEFL from other proficiency tests.',
              ],
              [
                'Writing — integrated task',
                'A reading passage presenting a position, followed by a lecture that challenges or complicates it, and a written response explaining how the lecture relates to the reading. Accuracy of the summary matters more than the elegance of the prose.',
              ],
              [
                'Writing — academic discussion task',
                'A professor’s question and short student responses in an online discussion format, to which you contribute a reasoned post of your own within a short time limit. Assessed on the relevance and development of the contribution as well as on language.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The integrated tasks are the heart of TOEFL and the reason note-taking is a genuinely examinable skill here. You cannot re-listen to the lecture, and your response must accurately represent what it said. A candidate with excellent English who takes poor notes will score below one with adequate English and a reliable note-taking system.',
          },
          {
            type: 'list',
            title: 'Why the integrated tasks define this test',
            items: [
              { text: 'They combine skills the way academic work does', note: 'read a source, hear it challenged or extended, then respond in a way that represents both accurately. No other proficiency test asks for that operation directly.' },
              { text: 'They depend on notes rather than memory', note: 'the lecture plays once, and your response has to reproduce its points. What you wrote down while listening is what you have to work with.' },
              { text: 'They reward accuracy over elegance', note: 'a response that represents the lecture correctly in plain prose scores better than a well-written response that misstates it.' },
              { text: 'They are the tasks candidates practise least', note: 'because they are effortful to simulate. That is precisely why they repay preparation more than any amount of general English study.' },
            ],
          },
          {
            type: 'p',
            text: 'The consequence for planning is that TOEFL preparation is not primarily an English project for a candidate who already reads and writes competently. It is a note-taking and task-familiarity project. A strong English user with no note-taking system will underperform a moderate one who has practised capturing a lecture’s structure quickly — which is an unusual thing to be true of a language test.',
          },
          {
            type: 'note',
            title: 'Reading and listening are academic in register',
            text: 'Passages are drawn from university textbook material and lectures are genuine academic monologues, often with digressions and student interruptions. Candidates whose English is fluent in conversational registers but untested on dense expository material find this the harder adjustment, and daily academic reading and listening is the remedy.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TOEFL iBT exam pattern — section structure, scoring out of 120, timing and the recorded speaking format.',
        lead: [
          'Four sections, thirty points each, and a format that mirrors academic work more closely than any other proficiency test.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Test structure. Confirm current section lengths and task counts on the official site, as the test has been shortened.',
            head: ['Section', 'Content', 'Score range'],
            rows: [
              ['Reading', 'Academic passages with question sets', '0–30'],
              ['Listening', 'Lectures and campus conversations', '0–30'],
              ['Speaking', 'Independent and integrated tasks, recorded', '0–30'],
              ['Writing', 'Integrated task and academic discussion task', '0–30'],
              ['Total', '', '0–120'],
            ],
          },
          {
            type: 'p',
            text: 'Universities set their own requirements, commonly specifying both a total and per-section minimums. As with IELTS, that means your weakest section may determine your outcome — and for many candidates the weakest section is speaking, precisely because recording a timed response with no interlocutor is an unfamiliar task.',
          },
          {
            type: 'list',
            title: 'Practical points',
            items: [
              { text: 'Note-taking is permitted and necessary', note: 'particularly in listening and the integrated tasks, where material is played once.' },
              { text: 'Speaking responses are strictly timed', note: 'with short preparation and a hard stop. Practising to the clock is essential.' },
              { text: 'The test is delivered at centres and at home', note: 'with the same content; choose based on your own conditions.' },
              { text: 'Scores are generally valid for two years', note: 'and can be sent to institutions you nominate.' },
            ],
          },
          {
            type: 'note',
            title: 'The test has been shortened',
            text: 'ETS revised the TOEFL iBT to a shorter format, changing section lengths and replacing the independent essay with the academic discussion task. Preparation material written for the earlier version therefore includes a task the test no longer sets. Confirm the current structure on the official site before selecting materials.',
          },
          {
            type: 'p',
            text: 'The recorded speaking format is unlike anything in Indian assessment and is worth understanding before you meet it. You hear or read a prompt, you get a short preparation window measured in seconds, and then you speak into a microphone until a hard stop. There is no examiner reacting to you, no opportunity to restart, and no partial credit for a point you were about to make when the timer ended. Candidates who have never rehearsed that sequence lose points to the format rather than to their English.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why note-taking is not optional',
                'Material in the listening section and in the integrated tasks plays once. Everything you will need in your response has to be captured while you listen, which makes a compact, consistent note-taking system a scored skill rather than a study aid.',
              ],
              [
                'What per-section minimums imply',
                'Universities commonly specify both a total and minimums in individual sections. As with IELTS, your weakest section can fail a requirement your total comfortably meets, which makes it the right target for your final weeks.',
              ],
              [
                'Centre or at home',
                'The same content is delivered both ways. The choice should turn on your own conditions — a reliable quiet space and connection, or a centre — rather than on a belief that one is easier, because the test itself is not.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'The test was shortened — check your material',
            text: 'ETS revised TOEFL iBT to a shorter format, changing section lengths and replacing one writing task with the academic discussion task. A great deal of widely circulated preparation material still describes the older, longer test, and practising a task type that no longer appears is time taken from one that does.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'TOEFL practice material — official ETS tests, integrated task practice and note-taking systems.',
        lead: [
          'Practise with official ETS material, and treat the integrated tasks as a skill to build rather than questions to answer.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The integrated tasks are what most repay practice, because they combine several skills under time in a way no other test does. Building a reliable note-taking system — abbreviations, a consistent layout, a way of marking the relationship between the reading and the lecture — is preparation that pays across the speaking and writing sections simultaneously.',
          },
          {
            type: 'steps',
            title: 'How to practise',
            items: [
              { text: 'Develop a note-taking system and use it consistently.', note: 'Abbreviations, layout, and a way of marking agreement or contradiction between sources.' },
              { text: 'Practise speaking responses against the clock, recorded.', note: 'Then listen back. It is uncomfortable and it is the fastest way to improve.' },
              { text: 'Practise integrated writing for accuracy first.', note: 'The task rewards representing the lecture correctly more than writing elegantly.' },
              { text: 'Read academic material daily.', note: 'TOEFL reading passages come from textbook-style writing; familiarity with the register helps.' },
              { text: 'Listen to lectures and take notes without pausing.', note: 'Exactly as the test presents them.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'IELTS exam guide', to: '/entrance-exams/international/ielts/' },
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
              { label: 'English study material', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'What a usable note-taking system looks like',
            items: [
              { text: 'Structure before detail', note: 'capture the shape of the lecture — the claim, the two or three supports, the qualification — rather than trying to transcribe. A response built on structure is accurate; one built on scattered details is not.' },
              { text: 'Consistent abbreviations', note: 'invented in the moment they slow you down; practised for weeks they become automatic. A small personal set, used every time, is worth more than a comprehensive one you have to think about.' },
              { text: 'A split page for integrated tasks', note: 'reading points on one side, lecture points opposite. The relationship between the two is what the task asks you to describe, and the layout makes it visible.' },
              { text: 'Legibility over completeness', note: 'notes you cannot read are worse than fewer notes you can. This is the most common failure and it only shows up when you try to use them.' },
            ],
          },
          {
            type: 'p',
            text: 'Practise speaking responses against the clock and recorded, from early in the preparation. The discomfort of listening back is exactly what makes it useful: you hear the filler words, the pace that was too slow to finish, and the point that trailed off unmade. Candidates who prepare speaking silently arrive having never experienced the constraint the section is built around.',
          },
          {
            type: 'p',
            text: 'For integrated writing, check your response against the source rather than against a model. The task is to represent what the lecture said about the reading, and the characteristic failure is a fluent response that misstates the relationship — saying the lecture supports the passage when it challenged it, or attributing a point to the wrong source. Accuracy is the score; the prose is secondary.',
          },
          {
            type: 'note',
            title: 'Listen to academic lectures daily, taking notes',
            text: 'Recorded university lectures, long-form academic talks and serious podcasts all work. The habit builds two things at once — comfort with the register the listening section uses, and the note-taking system that the integrated tasks depend on — and it is the closest daily approximation to what this test actually measures.',
          },
        ],
      },
      'mock-tests': {
        description:
          'TOEFL practice tests — full four-section practice with recorded speaking and timed integrated tasks.',
        lead: [
          'Record your speaking responses in practice. Reading a response aloud without a timer is not practising this test.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The speaking section is where candidates most often under-practise, because recording yourself is uncomfortable and there is no one to respond to. But the task — a short preparation, a hard time limit, a microphone — is unfamiliar enough that meeting it first on test day costs points that practice would have secured.',
          },
          {
            type: 'list',
            title: 'What to review',
            items: [
              { text: 'Your weakest section', note: 'universities frequently set per-section minimums, so it may decide your outcome.' },
              { text: 'Speaking responses played back', note: 'listen for pace, filler words, and whether you completed your point within the limit.' },
              { text: 'Integrated task accuracy', note: 'did your response actually represent what the lecture said?' },
              { text: 'Note quality', note: 'if your notes were not usable, that is the fix rather than more listening practice.' },
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
            title: 'A practice routine for a four-section test',
            items: [
              { title: 'Take full tests in one sitting', text: 'Reading, listening, speaking and writing back to back. The writing tasks arrive when concentration is lowest, and practising them fresh never rehearses that.' },
              { title: 'Record every speaking response', text: 'And listen back with a specific question: did I finish my point inside the time, and how much of the response was filler?' },
              { title: 'Check integrated responses against the source', text: 'Not for style but for accuracy. Did the response represent the lecture correctly and connect it to the reading?' },
              { title: 'Assess your notes, not just your answers', text: 'If the notes were unusable, that is the finding. More listening practice will not help; a better system will.' },
              { title: 'Track the weakest section', text: 'Per-section minimums make it the constraint, and it should own your final fortnight.' },
            ],
          },
          {
            type: 'p',
            text: 'The speaking section is where under-practice is most common and most costly. It is uncomfortable to record yourself, there is no interlocutor to make it feel like a conversation, and the timing is unforgiving. All of that argues for doing it more rather than less — a candidate who has recorded thirty responses meets the format as routine, and one who has recorded none meets it as an obstacle.',
          },
          {
            type: 'note',
            title: 'Use material written for the current format',
            text: 'The shortened test changed section lengths and replaced a writing task. Practice tests built for the older format will misrepresent both the pacing and the tasks, which makes them worse than no practice for judging readiness — they produce a score against a test that no longer exists.',
          },
        ],
      },
      preparation: {
        description:
          'TOEFL preparation — building note-taking, practising integrated tasks and choosing between TOEFL and IELTS.',
        lead: [
          'Note-taking and integrated tasks are what TOEFL preparation is really about. General English work supports them rather than replacing them.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A candidate with strong English can still score moderately on TOEFL if their note-taking is weak, because the integrated tasks require accurately representing material heard once. Conversely, a candidate with adequate English and a reliable system performs above expectation. That makes note-taking the highest-leverage skill in the preparation, and it is one nobody thinks to practise.',
          },
          {
            type: 'steps',
            title: 'A six to ten week plan',
            items: [
              { text: 'Week one — decide between TOEFL and IELTS deliberately.', note: 'Recorded speaking versus an interview; academic integrated tasks versus more general ones. Choose on how you actually perform.' },
              { text: 'Week one — build a note-taking system.', note: 'Abbreviations, layout, and a way of marking how a lecture relates to a reading.' },
              { text: 'Weeks one to three — task familiarity across all four sections.', note: 'Meet every task type before practising for score.' },
              { text: 'Throughout — listen to academic lectures daily, taking notes.', note: 'Without pausing, exactly as the test presents them.' },
              { text: 'Throughout — record speaking responses to the clock.', note: 'And listen back. Uncomfortable, and the fastest route to improvement.' },
              { text: 'From week three — integrated writing practice.', note: 'Prioritising accuracy of representation over elegance of prose.' },
              { text: 'Final weeks — full official practice tests.', note: 'With the current shortened format, and focused work on your weakest section.' },
            ],
          },
          {
            type: 'list',
            title: 'Where TOEFL candidates lose points',
            items: [
              { text: 'Weak note-taking', note: 'the integrated tasks depend on it and nobody practises it.' },
              { text: 'Not recording speaking practice', note: 'the format is unfamiliar enough to cost points on first encounter.' },
              { text: 'Writing elegantly but inaccurately in integrated tasks', note: 'the task rewards representing the source correctly.' },
              { text: 'Using material for the older, longer format', note: 'the test was shortened and one task type replaced.' },
              { text: 'Ignoring the weakest section', note: 'universities frequently set per-section minimums.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The note-taking system — build it first',
                'A compact set of abbreviations, a consistent page layout, and the discipline of capturing structure rather than detail. It underpins the listening section and both integrated task types, and it takes a fortnight of daily practice to become automatic.',
              ],
              [
                'Task familiarity — the next three weeks',
                'Knowing exactly what each task asks, how long you have, and what a good response contains. Fast to acquire and the source of the largest early gains.',
              ],
              [
                'Speaking under the clock — throughout',
                'Recorded, timed, and reviewed. The most under-practised section of the test and the one where the format itself costs points on first encounter.',
              ],
              [
                'Academic reading and listening — the daily base',
                'The underlying proficiency in the specific register the test uses. It sets the ceiling and it improves slowly, which is why it should run from day one.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The choice between TOEFL and IELTS deserves a deliberate decision rather than a default. TOEFL is entirely computer-delivered with recorded speaking and integrated tasks; IELTS speaking is a live interaction and its tasks are more separable. Candidates who are comfortable speaking to a person and less comfortable with a microphone and a timer often do better in IELTS; candidates strong in academic reading and note-taking often do better in TOEFL. Check first that your target institutions accept both.',
          },
          {
            type: 'note',
            title: 'A strong English user can still score moderately',
            text: 'Because so much of this test depends on note-taking and on task-specific technique, fluency alone does not guarantee a high score. That is worth knowing early, because candidates confident in their English frequently allocate two weeks to a test whose distinctive demands take longer than that to learn.',
          },
        ],
      },
      'study-material': {
        description:
          'TOEFL study material — English notes to support proficiency, alongside official practice for task familiarity.',
        lead: [
          'Official ETS material for the tasks, general English work for the proficiency underneath them.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'As with IELTS, TOEFL preparation divides into task familiarity, which only official practice material provides, and underlying proficiency, which comes from ordinary English study and daily use of the language. The notes below support the second, and are most useful for candidates who need to raise general reading speed, vocabulary and grammatical accuracy rather than only learn the format.',
          },
          {
            type: 'links',
            title: 'Supporting notes',
            items: [
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Reading comprehension', to: '/study-material/varc/' },
              { label: 'IELTS exam guide', to: '/entrance-exams/international/ielts/' },
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine',
            items: [
              'Listen to a recorded academic lecture and take notes without pausing.',
              'Read a textbook-style academic passage and summarise its argument in writing.',
              'Record a two-minute spoken response to a prompt, then listen back critically.',
              'Practise one integrated task a week, checking your response against the source.',
              'Build vocabulary through academic reading rather than isolated word lists.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Official ETS practice — for the tasks',
                'The only reliable source for the current format, the timings and the exact wording of the task types. This half of the preparation cannot be substituted.',
              ],
              [
                'Academic lectures and textbook prose — for the register',
                'Recorded lectures, serious podcasts and university-level expository writing. The test draws on this register specifically, and general English material rarely does.',
              ],
              [
                'A recording device — for speaking',
                'Any phone will do. What matters is that responses are produced under time and listened back to, because that is the only way the format becomes familiar.',
              ],
              [
                'General English notes — for the proficiency underneath',
                'Grammar for accuracy and vocabulary for range, supporting the writing and speaking sections rather than driving them.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Build vocabulary through academic reading rather than isolated lists. The register the test uses is expository and subject-specific, and words met in that context arrive with the collocations and the level of formality that a written or spoken response needs. A list learned separately supplies the word without the knowledge of where it belongs.',
          },
          {
            type: 'note',
            title: 'One integrated task a week, checked properly',
            text: 'Write or record it, then go back to the reading and the lecture and confirm that your response represented both accurately. That checking step is the part that produces improvement, and it is the part candidates skip because the response felt fluent while they were producing it.',
          },
          {
            type: 'p',
            text: 'A closing word on sequencing the material across a preparation. Spend the first fortnight almost entirely on the note-taking system and on task familiarity, because those produce the largest early gains and because everything else depends on them. Give the middle weeks to the integrated tasks and to recorded speaking, which are the components that need repetition rather than understanding. Keep the daily academic reading and listening running throughout, and reserve the final fortnight for full official practice tests and for whichever section your scores keep identifying as the weakest. That order matters more than the total hours: a candidate who reverses it spends months raising a proficiency ceiling they never learn to reach.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TOEFL iBT exam pattern?',
        a: 'Four sections — Reading, Listening, Speaking and Writing — each scored from 0 to 30 for a total out of 120. Reading uses academic passages from university-level material; Listening uses lectures and campus conversations; Speaking requires recorded responses to independent and integrated prompts; and Writing comprises an integrated task relating a lecture to a reading passage, plus an academic discussion task. The test was shortened by ETS, so confirm current section lengths on the official site.',
      },
      {
        q: 'What are TOEFL integrated tasks?',
        a: 'Tasks that require you to read a passage, listen to a lecture on the same subject, and then speak or write a response drawing accurately on both. They appear in the speaking and writing sections and are what most distinguishes TOEFL from other English tests, since they simulate actual academic work rather than testing language in isolation. They also make note-taking a genuinely examinable skill, because the listening material is played once and your response must represent it correctly.',
      },
      {
        q: 'Should I take TOEFL or IELTS?',
        a: 'Check first which your target institutions accept, since most accept both but some prefer one. Beyond that, the practical difference is the speaking section: TOEFL records your responses against a timer with no examiner present, while IELTS is a face-to-face or video interview. Candidates who find interviews intimidating often prefer TOEFL; those who draw energy from interaction often prefer IELTS. TOEFL is also more distinctly academic in content, with its integrated tasks; IELTS reading and writing are more varied in register.',
      },
      {
        q: 'How important is note-taking for TOEFL?',
        a: 'More than most candidates realise. The integrated speaking and writing tasks require accurately representing a lecture heard once, so a candidate with excellent English but weak notes will score below one with adequate English and a reliable system. Building that system — consistent abbreviations, a clear layout, a way of marking how a lecture agrees with or challenges a reading — is the highest-leverage preparation available and almost nobody practises it deliberately.',
      },
      {
        q: 'How long is a TOEFL score valid?',
        a: 'Generally two years, with scores sent to institutions you nominate. As with IELTS, plan your test date against your application deadlines: taking it very early risks the score expiring before you apply, while leaving it late removes the option of a retake if a per-section minimum is narrowly missed. Universities frequently set minimums for individual sections as well as a total, so your weakest section may determine whether a score is usable.',
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
      ['Administered by', 'The College Board'],
      ['Used for', 'Undergraduate admission in the United States and by some institutions elsewhere'],
      ['Format', 'Digital, multistage adaptive — two modules per section'],
      ['Sections', 'Reading and Writing; Math'],
      ['Scoring', '400–1600 total, with 200–800 per section'],
      ['Calculator', 'Permitted throughout the Math section'],
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
    ],
  },
]

export default international
