/**
 * MBA entrance exams — /entrance-exams/mba/
 *
 * Seven tests for the same broad ability, and the differences between them are
 * almost entirely structural: whether sections are separately timed, whether
 * you may return to a question, whether wrong answers are penalised, and
 * whether you may sit the test more than once. Those rules decide strategy far
 * more than syllabus differences do, so each page here leads with them.
 */

const mba = [
  /* ══════════════════════════════════════════════════════════════
     CAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'cat',
    path: '/entrance-exams/mba/cat/',
    name: 'CAT',
    fullName: 'Common Admission Test',
    authority: 'The Indian Institutes of Management',
    official: 'iimcat.ac.in',
    seoTitle: 'CAT 2026: Sectional Timing, VARC DILR QA Syllabus & Mocks',
    metaDescription:
      'CAT exam guide — three sectionally timed sections, TITA questions, percentile scoring, syllabus and preparation strategy for IIM admission.',
    lead: [
      'The Common Admission Test is the entrance examination for the Indian Institutes of Management and is accepted by several hundred other business schools. It runs three sections — verbal ability and reading comprehension, data interpretation and logical reasoning, and quantitative ability — in a fixed order, each with its own forty-minute limit.',
      'That sectional timing is the defining constraint, and it is stricter than it first appears. You cannot move between sections, and you cannot return to one whose time has expired. Each section is effectively a separate forty-minute examination, and a strategy that works across a two-hour paper does not survive the transition.',
    ],
    quickFacts: [
      ['Conducted by', 'The Indian Institutes of Management, on a rotating basis'],
      ['Admits to', 'The IIMs and several hundred other business schools'],
      ['Level', 'A bachelor’s degree with the prescribed minimum percentage'],
      ['Structure', 'Three sections of 40 minutes each, in a fixed order'],
      ['Marking', 'Three marks for a correct answer; one deducted for a wrong MCQ answer'],
      ['Scoring', 'Normalised percentiles, both overall and sectional'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CAT is a test of reasoning under time pressure rather than of knowledge. Its syllabus, in the sense other examinations have one, is thin — school-level mathematics, English comprehension, and logical puzzles. What it examines is how quickly and accurately you can think when the clock is against you, and how well you choose which problems to engage with.',
      },
      {
        type: 'p',
        text: 'The results are reported as percentiles, both overall and section by section, and business schools generally apply sectional cutoffs as well as an overall one. That makes balance across the three sections more important than peak performance in any single one — a candidate with an outstanding quantitative score and a weak verbal percentile may be excluded from calls that a more even candidate receives.',
      },
      {
        type: 'list',
        title: 'The three sections',
        items: [
          { text: 'Verbal Ability and Reading Comprehension', note: 'dominated by reading comprehension passages, with para jumbles, para summary and odd-sentence-out questions in the remainder.' },
          { text: 'Data Interpretation and Logical Reasoning', note: 'sets rather than standalone questions — the section where set selection matters most and where scores vary most between candidates.' },
          { text: 'Quantitative Ability', note: 'arithmetic, algebra, geometry, number systems and modern mathematics, at a level that rarely exceeds school syllabus but is applied unconventionally.' },
        ],
      },
      {
        type: 'note',
        title: 'Sectional cutoffs mean balance beats brilliance',
        text: 'Most schools that accept CAT apply sectional percentile requirements alongside the overall one. A candidate who is exceptional in one section and weak in another can miss calls that a more balanced candidate with a similar overall percentile receives. The practical implication is to spend disproportionate time on your weakest section, which is the opposite of what most candidates instinctively do.',
      },
    ],
    stages: [
      {
        name: 'Verbal Ability and Reading Comprehension',
        mode: 'Objective, 40 minutes',
        detail:
          'Reading comprehension passages with associated questions, plus verbal ability questions covering para jumbles, para summary and odd sentence out. Some questions are type-in-the-answer rather than multiple choice.',
      },
      {
        name: 'Data Interpretation and Logical Reasoning',
        mode: 'Objective, 40 minutes',
        detail:
          'Sets of questions built on data tables, charts, caselets and logical arrangements. Set selection — deciding within a minute which sets to attempt — is the primary skill this section tests.',
      },
      {
        name: 'Quantitative Ability',
        mode: 'Objective, 40 minutes',
        detail:
          'Arithmetic, algebra, geometry and mensuration, number systems, and modern mathematics including permutations, combinations and probability. Three marks for a correct answer, one deducted for a wrong multiple-choice answer.',
      },
      {
        name: 'Selection process at the institutes',
        mode: 'Institute-conducted',
        detail:
          'Shortlisted candidates go through written ability tests, group discussions and personal interviews conducted by each institute, with the final offer weighting CAT score alongside academic record, work experience and interview performance.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CAT syllabus — verbal ability and reading comprehension, data interpretation and logical reasoning, and quantitative ability topics.',
        lead: [
          'CAT publishes no official syllabus. What follows is drawn from what the paper has consistently asked, which is the only reliable guide.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Verbal Ability and Reading Comprehension',
                'Reading comprehension carries the great majority of this section — passages drawn from the humanities, social sciences, science and business, with questions on inference, tone, main idea and the author’s position rather than on retrieval. The verbal ability remainder covers para jumbles, para summary, odd sentence out and occasionally sentence completion. Vocabulary and grammar are rarely tested directly.',
              ],
              [
                'Data Interpretation and Logical Reasoning',
                'Data interpretation through tables, bar and line graphs, pie charts, caselets and mixed representations, frequently with missing data to be deduced. Logical reasoning through arrangements, distributions, scheduling, tournaments, network diagrams, Venn diagrams and puzzles built on constraints. Almost everything comes in sets of four to six questions built on a common structure.',
              ],
              [
                'Quantitative Ability — Arithmetic',
                'Percentage, ratio and proportion, averages and mixtures, profit and loss, simple and compound interest, time and work, time speed and distance. Arithmetic consistently carries the largest share of this section, which is fortunate, because it is also the most learnable part of it.',
              ],
              [
                'Quantitative Ability — Algebra and Number Systems',
                'Linear and quadratic equations, inequalities, functions and graphs, logarithms, surds and indices, progressions; and number systems covering factors, remainders, divisibility, base systems and last-digit problems.',
              ],
              [
                'Quantitative Ability — Geometry and Modern Mathematics',
                'Lines and angles, triangles, circles, polygons, coordinate geometry, mensuration of plane and solid figures, and trigonometry at a basic level; along with permutations and combinations, probability, and set theory.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The most useful thing to know about the CAT syllabus is how little of it is exotic. Almost everything is school mathematics and ordinary English comprehension. The difficulty comes from the application — unusual framings, multi-step reasoning and severe time pressure — which means the productive preparation is practice rather than the acquisition of new content.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CAT exam pattern — sectional timing, question types, the TITA rule and how percentiles are calculated.',
        lead: [
          'Three forty-minute sections you cannot move between. This is the rule that shapes every other decision about how to take the test.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Section structure. Question counts have varied between cycles — confirm in the current information bulletin.',
            head: ['Section', 'Time', 'Character'],
            rows: [
              ['Verbal Ability and Reading Comprehension', '40 minutes', 'Reading-dominated; stamina and comprehension speed'],
              ['Data Interpretation and Logical Reasoning', '40 minutes', 'Set-based; selection is the primary skill'],
              ['Quantitative Ability', '40 minutes', 'School mathematics applied unconventionally'],
            ],
          },
          {
            type: 'p',
            text: 'Two marking rules matter. Multiple-choice questions award three marks and deduct one for an error. Type-in-the-answer questions, where you enter a value rather than select an option, carry no deduction — which makes them free attempts that should never be left blank. Candidates who apply uniform caution across both types are giving away marks on the second.',
          },
          {
            type: 'list',
            title: 'What sectional timing forces',
            items: [
              { text: 'You cannot borrow time', note: 'a section you find easy cannot subsidise one you do not. Each forty minutes stands alone.' },
              { text: 'You cannot return', note: 'once a section closes it is closed. Anything you meant to come back to is lost.' },
              { text: 'Selection must happen early', note: 'in the reasoning section particularly, the first two minutes spent choosing sets determine most of the outcome.' },
              { text: 'A bad start does not have to spread', note: 'a poor verbal section is over when it is over, and the next forty minutes are independent.' },
            ],
          },
          {
            type: 'note',
            title: 'Percentiles are normalised across slots',
            text: 'CAT runs across multiple slots on one day, and scores are normalised so that no candidate is disadvantaged by drawing a harder slot. Your percentile, not your raw score, is what institutes use — and comparing raw scores with candidates from other slots tells you very little.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CAT previous year papers — learning set selection, reading comprehension patterns and the quantitative topics that recur.',
        lead: [
          'Past CAT papers are most valuable for what they teach about choosing — which sets to attempt, which passages to trust, which questions to leave.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'In an examination where you cannot attempt everything, the decisions about what to attempt account for a large share of the outcome. Past papers, worked under sectional timing, are where those decisions get trained. A candidate who can solve every reasoning set given unlimited time but chooses the wrong three under forty minutes will score poorly, and only practice fixes that.',
          },
          {
            type: 'steps',
            title: 'A method for past papers',
            items: [
              { text: 'Always practise under sectional timing.', note: 'An untimed CAT paper is a different examination and teaches the wrong habits.' },
              { text: 'In the reasoning section, log which sets you chose and why.', note: 'Then review whether the ones you skipped were genuinely harder. This calibrates your selection instinct.' },
              { text: 'In verbal, track accuracy by passage type.', note: 'Most candidates are consistently weaker on one kind of passage, and knowing which lets you triage.' },
              { text: 'In quantitative, build a topic frequency table.', note: 'Arithmetic dominates; confirm it for yourself and let it guide revision.' },
              { text: 'Never leave a type-in-the-answer question blank.', note: 'No deduction applies; a blank is a discarded chance.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'XAT exam guide', to: '/entrance-exams/mba/xat/' },
              { label: 'Data interpretation study material', to: '/study-material/dilr/' },
              { label: 'Verbal ability study material', to: '/study-material/varc/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'CAT mock tests — sectionally timed full-length practice with analysis of selection, accuracy and pacing.',
        lead: [
          'CAT rewards mock practice more than almost any other examination, because what it tests — decision-making under time pressure — can only be trained by doing it.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A CAT mock is not a knowledge test with a score attached. It is a rehearsal of a set of decisions: which passages to read, which sets to attempt, when to abandon a question, how to spend the last five minutes of a section. Those decisions improve measurably with practice and analysis, and they are what separate candidates with similar ability.',
          },
          {
            type: 'steps',
            title: 'How to analyse a CAT mock properly',
            items: [
              { text: 'Spend longer on analysis than on the attempt.', note: 'Three hours of review after a two-hour mock is a reasonable ratio, and almost nobody does it.' },
              { text: 'For every question, classify: solved, could have solved, could not have solved.', note: 'The middle category is where your score improvement lives.' },
              { text: 'Review your selection decisions specifically.', note: 'Was the set you skipped actually harder, or just unfamiliar?' },
              { text: 'Track section-wise percentiles, not just the overall.', note: 'Sectional cutoffs mean your weakest section constrains your calls.' },
              { text: 'Look at the last ten minutes of each section.', note: 'Panic decisions there account for a surprising share of lost marks.' },
            ],
          },
          {
            type: 'p',
            text: 'On volume: taking many mocks without analysing them produces very little. A candidate who takes fifteen mocks and analyses each thoroughly will outperform one who takes forty and reviews the score. The mock is the raw material; the analysis is the preparation.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Sectional and topic practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'CAT preparation strategy — building reading speed, quantitative fundamentals and the selection judgement the test rewards.',
        lead: [
          'Three things build a CAT score: reading, arithmetic fluency and decision-making. All three take months, and none of them is content acquisition.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most common misconception about CAT preparation is that it is about learning things. Very little of what CAT asks is unknown to a graduate — the mathematics is school-level and the English is ordinary. What has to be built is speed of comprehension, fluency with routine calculation, and the judgement to choose well under pressure. All three accumulate slowly and none responds to cramming.',
          },
          {
            type: 'steps',
            title: 'A six to nine month plan',
            items: [
              { text: 'From day one — read difficult material daily.', note: 'Long-form journalism, essays, and writing on subjects you do not naturally follow. Reading comprehension speed is built by reading, not by practising questions.' },
              { text: 'Months one to three — arithmetic to fluency.', note: 'Percentage, ratio, averages, time and work, time and distance. Arithmetic carries the quantitative section and underpins data interpretation too.' },
              { text: 'Months one to four — reasoning sets, daily.', note: 'Two or three a day. This section improves through volume more than any other.' },
              { text: 'Months three to six — algebra, geometry and number systems.', note: 'The remainder of the quantitative syllabus, built on the arithmetic foundation.' },
              { text: 'From month three — one sectionally timed mock a week.', note: 'With analysis time exceeding attempt time.' },
              { text: 'From month five — two mocks a week, still fully analysed.', note: 'And deliberate work on whichever section is weakest.' },
              { text: 'Final two months — no new content.', note: 'Selection practice, accuracy work and consolidation only.' },
            ],
          },
          {
            type: 'list',
            title: 'The characteristic errors',
            items: [
              { text: 'Practising untimed', note: 'CAT is a test of decisions under time pressure; untimed practice trains none of that.' },
              { text: 'Taking mocks without analysing them', note: 'the analysis is the preparation; the mock is only the raw material.' },
              { text: 'Ignoring the weakest section', note: 'sectional cutoffs mean it constrains your calls regardless of your overall percentile.' },
              { text: 'Trying to attempt everything', note: 'the paper is designed so that you cannot. Selection is the skill.' },
              { text: 'Leaving type-in-the-answer questions blank', note: 'they carry no penalty and should always be attempted.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'CAT study material — quantitative, verbal and data interpretation notes with a focus on speed and application.',
        lead: [
          'Content notes matter less here than in most exams. Use them to fix fundamentals, then spend your time on practice.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work the arithmetic notes hardest and earliest. Percentage and ratio fluency is the foundation of both the quantitative section and much of data interpretation, and a candidate who can convert fractions to percentages instantly reads a data set in a fraction of the time someone computing longhand takes. That single capability is worth more than most topic knowledge.',
          },
          {
            type: 'links',
            title: 'Subject notes for CAT',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Data interpretation and logical reasoning', to: '/study-material/dilr/' },
              { label: 'Verbal ability and reading comprehension', to: '/study-material/varc/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine that builds a CAT score',
            items: [
              'One long, difficult reading passage — from a source you would not naturally choose.',
              'Two or three reasoning sets, timed.',
              'Twenty quantitative questions, mixed rather than by topic.',
              'Fifteen minutes of pure calculation drilling — fractions, percentages, squares.',
              'One weekly mock, analysed for longer than it took to attempt.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CAT exam pattern?',
        a: 'Three sections taken in a fixed order with forty minutes each: verbal ability and reading comprehension, data interpretation and logical reasoning, and quantitative ability. You cannot move between sections or return to one whose time has expired. Multiple-choice questions award three marks and deduct one for an error, while type-in-the-answer questions carry no deduction. Question counts have varied between cycles, so confirm in the current information bulletin.',
      },
      {
        q: 'What does sectional timing mean for CAT strategy?',
        a: 'That each forty-minute section is effectively a separate examination. Time cannot be borrowed from a section you find easy, and nothing can be revisited once a section closes — so anything you meant to come back to is simply lost. It also means a bad section does not have to spread: when it ends, the next forty minutes are independent. The practical consequences are that selection decisions must be made early, especially in the reasoning section, and that flagging questions for later is not a viable strategy.',
      },
      {
        q: 'Why do sectional percentiles matter in CAT?',
        a: 'Because most business schools apply sectional percentile cutoffs alongside the overall one. A candidate with an outstanding quantitative percentile and a weak verbal one can miss calls that a more balanced candidate with a similar overall percentile receives. This means the highest-return use of preparation time is usually your weakest section rather than your strongest — which is the opposite of what most candidates instinctively do.',
      },
      {
        q: 'Are CAT type-in-the-answer questions penalised?',
        a: 'No. Questions where you enter a value rather than select from options carry no deduction for a wrong answer, which makes them free attempts that should never be left blank. Candidates who apply uniform caution across both question types are giving marks away on the non-MCQ questions for no reason, and it is one of the more common avoidable losses in the paper.',
      },
      {
        q: 'How many CAT mocks should I take?',
        a: 'Fewer, analysed properly, beats more taken casually. A candidate who takes fifteen mocks and spends longer analysing each than attempting it will generally outperform one who takes forty and reviews only the score. What CAT tests is decision-making under time pressure — which sets to attempt, when to abandon a question, how to spend the final minutes — and those decisions improve through review rather than through repetition alone.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     XAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'xat',
    path: '/entrance-exams/mba/xat/',
    name: 'XAT',
    fullName: 'Xavier Aptitude Test',
    authority: 'XLRI Jamshedpur',
    official: 'xatonline.in',
    seoTitle: 'XAT 2026: Decision Making Section, Pattern & Strategy Guide',
    metaDescription:
      'XAT exam guide — the unique Decision Making section, general knowledge, essay, negative marking for unattempted questions and preparation.',
    lead: [
      'XAT is conducted by XLRI Jamshedpur and accepted by a wide set of business schools. Its quantitative and verbal sections are recognisable to any CAT candidate, but it carries a section no other management entrance has: Decision Making, which presents workplace and ethical dilemmas and asks what should be done.',
      'It also has a rule that catches candidates out every year. Beyond a permitted number of unattempted questions, further blanks carry a small penalty of their own — so in XAT, unlike almost anywhere else, leaving too much unanswered costs you directly.',
    ],
    quickFacts: [
      ['Conducted by', 'XLRI Jamshedpur'],
      ['Accepted by', 'XLRI and a wide set of other business schools'],
      ['Distinctive section', 'Decision Making — unique among management entrances'],
      ['Also includes', 'General knowledge, and in most cycles an essay'],
      ['Marking', 'Negative marking for wrong answers, plus a penalty for excessive unattempted questions'],
      ['Frequency', 'Once a year'],
    ],
    overview: [
      {
        type: 'p',
        text: 'XAT tests the same broad abilities as CAT — verbal reasoning, quantitative ability and data interpretation — and adds two components that CAT does not have. Decision Making presents situations, usually organisational or ethical, and asks the candidate to identify the best course of action. General knowledge is tested in a separate section, and most cycles also include an essay.',
      },
      {
        type: 'p',
        text: 'The general knowledge section and the essay are typically not counted towards the percentile used for shortlisting, but are considered later in the selection process. That does not make them optional — it makes them components whose value appears at a different stage, and candidates who ignore them entirely find that out at interview.',
      },
      {
        type: 'list',
        title: 'What XAT adds beyond a CAT-style paper',
        items: [
          { text: 'Decision Making', note: 'situational judgement questions on organisational, ethical and interpersonal dilemmas. Around a quarter of the scored paper.' },
          { text: 'General Knowledge', note: 'a separate section on current affairs, business, economy, history and static knowledge.' },
          { text: 'An essay', note: 'in most cycles, on an abstract or contemporary topic.' },
          { text: 'A penalty for excessive blanks', note: 'beyond a permitted number of unattempted questions, further blanks deduct a small fraction of a mark each.' },
        ],
      },
      {
        type: 'note',
        title: 'The unattempted-question penalty is real and unusual',
        text: 'XAT permits a certain number of unattempted questions without penalty; beyond that, each additional blank carries a small deduction. It is a small effect per question but it changes attempt strategy at the margin, and it is entirely unlike any other management entrance. Confirm the permitted number and the rate in the current bulletin.',
      },
    ],
    stages: [
      {
        name: 'Part 1 — Verbal and Logical Ability, Decision Making, Quantitative Ability and Data Interpretation',
        mode: 'Objective, timed as one part',
        detail:
          'The scored portion used for percentile calculation. Verbal and logical ability, the Decision Making section, and quantitative ability with data interpretation. Negative marking applies for wrong answers, and a further small penalty for unattempted questions beyond a permitted number.',
      },
      {
        name: 'Part 2 — General Knowledge and essay',
        mode: 'Objective plus written',
        detail:
          'A general knowledge section and, in most cycles, an essay. Typically not counted in the percentile used for shortlisting, but considered at later stages of the selection process.',
      },
      {
        name: 'Selection process',
        mode: 'Institute-conducted',
        detail:
          'Shortlisted candidates go through group discussions and personal interviews at XLRI and the other participating institutes, where the general knowledge and essay components come into consideration.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'XAT syllabus — verbal and logical ability, decision making, quantitative ability and data interpretation, plus general knowledge.',
        lead: [
          'Three familiar sections and one that has no equivalent anywhere else. Decision Making is what a XAT preparation must add.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Decision Making',
                'Situations drawn from business, management and everyday organisational life, each followed by questions asking what the protagonist should do. The scenarios frequently involve competing legitimate interests — an ethical obligation against a commercial one, an individual’s welfare against a team’s. There is no syllabus in the conventional sense; what is tested is judgement, and specifically the ability to identify the option that addresses the actual problem rather than the one that is most decisive or most agreeable.',
              ],
              [
                'Verbal and Logical Ability',
                'Reading comprehension with inference and tone questions, para jumbles, para completion, critical reasoning, analogies and vocabulary in context. XAT passages tend to be more abstract and more philosophical than CAT’s, which some candidates find harder and others find more approachable.',
              ],
              [
                'Quantitative Ability and Data Interpretation',
                'Arithmetic covering percentage, ratio, averages, profit and loss, time and work, and time speed and distance; algebra, number systems, geometry and mensuration; probability, permutations and combinations; and data interpretation through tables, charts, caselets and mixed sets. The quantitative section has a reputation for being harder than CAT’s, particularly in geometry.',
              ],
              [
                'General Knowledge',
                'Current affairs across national and international events, business and economy, awards, sports, history, geography, polity and static general knowledge, along with questions on companies, brands and business personalities. A separate section, generally excluded from the shortlisting percentile.',
              ],
              [
                'Essay',
                'A short essay on an abstract, philosophical or contemporary topic, written in a limited time. Assessed for clarity of argument and structure rather than for information content.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'On Decision Making, the most useful preparation insight is that the questions are not tests of business knowledge. They reward a consistent approach: identify who is affected, identify what the actual problem is as distinct from its symptoms, and prefer options that address the problem without creating a larger one. Candidates who reason that way improve markedly; candidates who look for a formula do not.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'XAT exam pattern — section structure, negative marking, the unattempted-question penalty and how general knowledge is used.',
        lead: [
          'Two parts, one of which decides your percentile and one of which matters later. Plus a marking rule that penalises leaving too much blank.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Question counts, timing and marking details vary between cycles — confirm in the current bulletin.',
            head: ['Component', 'Counted in percentile', 'Notes'],
            rows: [
              ['Verbal and Logical Ability', 'Yes', 'Abstract passages, critical reasoning'],
              ['Decision Making', 'Yes', 'Unique to XAT; situational judgement'],
              ['Quantitative Ability and Data Interpretation', 'Yes', 'Reputedly harder than CAT, especially geometry'],
              ['General Knowledge', 'Generally not', 'Considered at later selection stages'],
              ['Essay', 'Generally not', 'Considered at later selection stages'],
            ],
          },
          {
            type: 'p',
            text: 'The marking has two components. Wrong answers carry a deduction in the usual way. Separately, a candidate may leave a permitted number of questions unattempted without cost, and beyond that each additional blank deducts a small fraction of a mark. The net effect is a nudge towards attempting more than you otherwise would — not enough to justify reckless guessing, but enough that leaving thirty questions blank is worse than it looks.',
          },
          {
            type: 'list',
            title: 'Strategy implications',
            items: [
              { text: 'Count your blanks', note: 'and keep them near the permitted number rather than well above it.' },
              { text: 'Decision Making is worth serious practice', note: 'a quarter of the scored paper, with no equivalent in any other exam.' },
              { text: 'Do not skip general knowledge entirely', note: 'it is considered later, and candidates are asked about it.' },
              { text: 'Practise the essay under time', note: 'a short window and an abstract topic is a combination that rewards rehearsal.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current marking rules',
            text: 'The permitted number of unattempted questions, the deduction rates and the treatment of general knowledge in shortlisting have all been stated differently across cycles. Because they affect attempt strategy directly, read them in the current bulletin rather than relying on a summary.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'XAT previous year papers — training Decision Making judgement and calibrating the quantitative difficulty.',
        lead: [
          'Decision Making cannot be studied from a book. Past papers, with their explanations, are the only real training available.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'What makes Decision Making difficult is that several options usually look defensible. Working through past papers with their explanations teaches the examiner’s consistent preference: options that address the underlying problem, that consider all affected parties, that avoid unnecessary escalation, and that do not require assuming facts the scenario has not given. Once that pattern is visible, accuracy improves quickly.',
          },
          {
            type: 'steps',
            title: 'How to practise each component',
            items: [
              { text: 'Decision Making — do sets and read every explanation.', note: 'Including for questions you got right, since the reasoning is what transfers.' },
              { text: 'Note why each wrong option is wrong.', note: 'Usually it is too aggressive, too passive, or solves a symptom rather than the problem.' },
              { text: 'Quantitative — expect harder geometry than CAT.', note: 'Past papers calibrate this quickly and it is worth knowing in advance.' },
              { text: 'Verbal — practise with abstract passages specifically.', note: 'XAT passages are more philosophical than CAT’s, and reading only CAT material under-prepares you.' },
              { text: 'Track your blank count.', note: 'Practising with the unattempted-question rule applied builds the right instinct.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CAT exam guide', to: '/entrance-exams/mba/cat/' },
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'Verbal ability study material', to: '/study-material/varc/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'XAT mock tests — full-length practice including Decision Making, general knowledge and the essay.',
        lead: [
          'Practise the whole paper. Decision Making and general knowledge are not add-ons you can leave for the last week.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A common approach is to prepare for CAT and treat XAT as the same test with extra sections attached, addressed in the fortnight before. It rarely works. Decision Making is a quarter of the scored paper and rewards a habit of reasoning that takes weeks to build, while general knowledge is cumulative and cannot be assembled quickly.',
          },
          {
            type: 'list',
            title: 'What to analyse',
            items: [
              { text: 'Decision Making accuracy', note: 'and specifically whether your errors share a pattern — too aggressive, too cautious, or missing an affected party.' },
              { text: 'Blank count against the permitted number', note: 'a metric unique to this examination.' },
              { text: 'Quantitative accuracy on geometry', note: 'the area where XAT most often exceeds CAT difficulty.' },
              { text: 'Essay written under real time', note: 'at least a few times before the exam.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'XAT preparation strategy — adding Decision Making, general knowledge and essay practice to a CAT preparation.',
        lead: [
          'A CAT preparation covers most of XAT. The additions are Decision Making, general knowledge and the essay, and none of them compresses well.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the verbal and quantitative sections overlap so heavily with CAT, the efficient approach is one preparation with three additions. What matters is starting those additions early enough: Decision Making needs weeks of practice to develop a consistent approach, and general knowledge is cumulative by nature. Both are routinely deferred to the fortnight after CAT, which is too late for either.',
          },
          {
            type: 'steps',
            title: 'Adding XAT to a CAT preparation',
            items: [
              { text: 'From three months out — Decision Making sets, twice a week.', note: 'With every explanation read. The judgement pattern takes weeks to internalise.' },
              { text: 'From three months out — daily general knowledge.', note: 'Current affairs, business and economy, and static knowledge. Cumulative, so it cannot be assembled late.' },
              { text: 'From two months out — one essay a week, timed.', note: 'On abstract and contemporary topics, focused on structure and argument.' },
              { text: 'From two months out — XAT-style verbal practice.', note: 'More abstract passages than CAT uses.' },
              { text: 'From one month out — quantitative practice with harder geometry.', note: 'The area where XAT most reliably exceeds CAT.' },
              { text: 'Throughout — practise with the blank-count rule applied.', note: 'So the attempt instinct is calibrated to this paper.' },
            ],
          },
          {
            type: 'list',
            title: 'Where XAT candidates lose ground',
            items: [
              { text: 'Deferring Decision Making', note: 'a quarter of the scored paper that needs weeks, not days.' },
              { text: 'Ignoring general knowledge', note: 'cumulative, and considered at later selection stages.' },
              { text: 'Leaving too many blanks', note: 'a penalty that exists nowhere else and is easy to forget.' },
              { text: 'Never writing a timed essay', note: 'an abstract topic in a short window rewards rehearsal.' },
              { text: 'Assuming CAT geometry preparation suffices', note: 'XAT tends to go further here.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'XAT study material — quantitative, verbal and reasoning notes, plus general knowledge for the separate section.',
        lead: [
          'The core notes serve CAT and XAT alike. General knowledge is the addition XAT specifically requires.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For Decision Making there is no substitute for practice sets with explanations, since what is being built is a way of reasoning rather than a body of knowledge. The notes below cover the quantitative, verbal and reasoning sections, and the general knowledge and current affairs material serves the section that CAT does not have.',
          },
          {
            type: 'links',
            title: 'Subject notes for XAT',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Data interpretation and logical reasoning', to: '/study-material/dilr/' },
              { label: 'Verbal ability and reading comprehension', to: '/study-material/varc/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A weekly routine for the XAT-specific components',
            items: [
              'Two Decision Making sets, with every explanation read.',
              'Twenty minutes of general knowledge daily, including business and economy.',
              'One timed essay a week from two months out.',
              'One abstract reading passage a day, harder than typical CAT material.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the XAT exam pattern?',
        a: 'Two parts. Part 1 contains verbal and logical ability, Decision Making, and quantitative ability with data interpretation, and is the portion used to calculate the percentile for shortlisting. Part 2 contains general knowledge and, in most cycles, an essay, which are generally not counted in that percentile but are considered at later stages of selection. Wrong answers carry a deduction, and beyond a permitted number of unattempted questions each further blank carries a small penalty of its own.',
      },
      {
        q: 'What is the XAT Decision Making section?',
        a: 'A section with no equivalent in any other management entrance. It presents situations — usually organisational, ethical or interpersonal — and asks what the protagonist should do. It tests judgement rather than knowledge, and the examiner has a consistent preference: options that address the underlying problem rather than a symptom, that consider everyone affected, that avoid unnecessary escalation, and that do not require assuming facts the scenario has not supplied. It accounts for roughly a quarter of the scored paper.',
      },
      {
        q: 'Does XAT penalise unattempted questions?',
        a: 'Yes, beyond a permitted number. A candidate may leave a certain number of questions unanswered at no cost; each additional blank after that deducts a small fraction of a mark. The effect per question is small, but it is unlike any other management entrance and it nudges attempt strategy upward — leaving thirty questions blank is worse than it appears. Confirm the permitted number and the deduction rate in the current bulletin, as both have been stated differently across cycles.',
      },
      {
        q: 'How is XAT different from CAT?',
        a: 'The verbal and quantitative sections cover similar ground, though XAT passages tend to be more abstract and its geometry harder. The real differences are structural: XAT adds the Decision Making section, a separate general knowledge section and usually an essay, and it penalises excessive unattempted questions. XAT is also not sectionally timed in the way CAT is, which changes how you can move through the paper.',
      },
      {
        q: 'Should I prepare separately for XAT?',
        a: 'Not separately, but with additions. A CAT preparation covers the verbal and quantitative ground, and the efficient approach is one preparation plus three specific additions — Decision Making practice, daily general knowledge, and timed essay writing. The important point is starting those early: Decision Making needs weeks of practice with explanations to develop a consistent approach, and general knowledge is cumulative. Both are commonly deferred until after CAT, which leaves too little time for either.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     NMAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'nmat',
    path: '/entrance-exams/mba/nmat/',
    name: 'NMAT',
    fullName: 'NMAT by GMAC',
    authority: 'Graduate Management Admission Council (GMAC)',
    official: 'mba.com/nmat',
    seoTitle: 'NMAT 2026: Three Attempts, No Negative Marking & Strategy',
    metaDescription:
      'NMAT exam guide — three attempts in one window with the best score counted, no negative marking, section order choice and preparation.',
    lead: [
      'NMAT is administered by GMAC and accepted by NMIMS and a substantial set of other business schools. Its content is conventional — language skills, quantitative skills and logical reasoning — but its rules are the most candidate-friendly of any management entrance in India.',
      'There is no negative marking. You choose the order in which you take the sections. And you may sit the test up to three times within the testing window, with your best score counted. Together these change preparation strategy fundamentally: NMAT is the one management entrance where a first attempt genuinely costs nothing.',
    ],
    quickFacts: [
      ['Administered by', 'Graduate Management Admission Council (GMAC)'],
      ['Accepted by', 'NMIMS and a substantial set of other business schools'],
      ['Structure', 'Three sections — language skills, quantitative skills, logical reasoning'],
      ['Negative marking', 'None'],
      ['Attempts', 'Up to three within the testing window, with the best score counted'],
      ['Section order', 'Chosen by the candidate at the start of the test'],
    ],
    overview: [
      {
        type: 'p',
        text: 'NMAT runs over a testing window of several weeks rather than on a single day, with candidates scheduling their own slot. Within that window a candidate may attempt the test up to three times, subject to a gap between attempts, and the best score is the one considered for admission.',
      },
      {
        type: 'p',
        text: 'The paper itself is a straightforward test of three abilities with individually timed sections. What distinguishes it is the absence of any penalty for wrong answers, which removes the entire calculus of when to guess, and the ability to choose which section to take first, which lets a candidate open with their strongest and build confidence.',
      },
      {
        type: 'list',
        title: 'The three rules that shape NMAT strategy',
        items: [
          { text: 'No negative marking', note: 'so every question should be answered, and there is never a reason to leave a blank.' },
          { text: 'Candidate-chosen section order', note: 'take your strongest section first if that settles you, or your weakest while fresh — but decide in advance rather than in the moment.' },
          { text: 'Up to three attempts, best score counted', note: 'which makes a first attempt genuine calibration at no cost to your final result.' },
        ],
      },
      {
        type: 'note',
        title: 'Book early in the window',
        text: 'Because attempts must fit within the testing window with a required gap between them, a candidate who books a late slot may have room for only one attempt. Booking early preserves the option of two or three, which is the main structural advantage this examination offers.',
      },
    ],
    stages: [
      {
        name: 'Language Skills',
        mode: 'Objective, individually timed',
        detail:
          'Reading comprehension, para jumbles, error identification, sentence completion, synonyms and antonyms, and vocabulary in context. Individually timed as its own section.',
      },
      {
        name: 'Quantitative Skills',
        mode: 'Objective, individually timed',
        detail:
          'Arithmetic, algebra, geometry, modern mathematics, data interpretation and data sufficiency. Generally the longest of the three sections by time allowed.',
      },
      {
        name: 'Logical Reasoning',
        mode: 'Objective, individually timed',
        detail:
          'Critical reasoning, arrangements, series, coding, syllogism, blood relations and analytical puzzles.',
      },
      {
        name: 'Repeat attempts and selection',
        mode: 'Within the testing window',
        detail:
          'Up to three attempts within the window, subject to a required gap, with the best score counted. Institutes then conduct their own group discussion and interview processes.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'NMAT syllabus — language skills, quantitative skills and logical reasoning topics, at a conventional management-entrance level.',
        lead: [
          'Conventional content across three sections. NMAT is less about difficulty than about speed and consistency.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Language Skills',
                'Reading comprehension passages, para jumbles, para forming, error identification, sentence completion, sentence correction, synonyms and antonyms, analogies, prepositions and idioms. The section is more grammar- and vocabulary-oriented than CAT’s verbal section, which is almost entirely comprehension-based.',
              ],
              [
                'Quantitative Skills',
                'Arithmetic covering percentage, ratio, averages, profit and loss, simple and compound interest, time and work, time speed and distance, and mixtures; algebra, number systems, geometry and mensuration; permutations, combinations and probability; and data interpretation through tables, graphs and charts along with data sufficiency questions. The largest section by question count and time.',
              ],
              [
                'Logical Reasoning',
                'Critical reasoning covering statements and assumptions, arguments and conclusions; analytical reasoning through arrangements, distributions and puzzles; and coding, series, syllogism, blood relations and direction sense. Broader and somewhat more mechanical than CAT’s reasoning section.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Compared with CAT, NMAT is gentler in difficulty and stricter in pace. Questions are individually more approachable, but there are more of them per minute, and the sections are separately timed. That makes it a test of consistent speed rather than of peak problem-solving, which suits some candidates considerably better than CAT does.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'NMAT exam pattern — section timing, the no-negative-marking rule, section order choice and the three-attempt system.',
        lead: [
          'No penalty, chosen section order, and three chances. Few examinations give a candidate this much control.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Section structure. Question counts and timings have varied — confirm in the current handbook.',
            head: ['Section', 'Character', 'Notes'],
            rows: [
              ['Language Skills', 'Grammar, vocabulary and comprehension', 'More rule-based than CAT verbal'],
              ['Quantitative Skills', 'Arithmetic through to data sufficiency', 'The largest section'],
              ['Logical Reasoning', 'Critical and analytical reasoning', 'Broader and more mechanical than CAT'],
              ['Total', 'About 2 hours', 'Sections individually timed, order chosen by the candidate'],
            ],
          },
          {
            type: 'p',
            text: 'With no negative marking, the correct attempt policy is simple and absolute: answer every question. There is no scenario in which a blank outperforms a guess. The only skill this removes is guessing discipline; the skill it emphasises instead is pace, since the binding constraint becomes how many questions you can reach rather than how many you dare attempt.',
          },
          {
            type: 'list',
            title: 'Using the structural advantages',
            items: [
              { text: 'Choose your section order deliberately', note: 'decide before the day. Opening with your strongest builds confidence; opening with your weakest uses your freshest attention. Either is defensible; deciding in the moment is not.' },
              { text: 'Book an early slot', note: 'to preserve room for two or three attempts within the window.' },
              { text: 'Treat the first attempt as calibration', note: 'the best score counts, so a poor first attempt costs nothing but the fee and the time.' },
              { text: 'Never leave a blank', note: 'no penalty applies, and reserving the last minute to fill any unanswered questions is free marks.' },
            ],
          },
          {
            type: 'note',
            title: 'Attempts require a gap and a fee',
            text: 'Repeat attempts must be separated by a required interval and each carries a fee, so three attempts need both budget and calendar planning within the window. Confirm the current gap requirement and scheduling rules in the candidate handbook.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'NMAT previous year papers — building the pace the sections demand and practising with no negative marking.',
        lead: [
          'NMAT rewards speed and consistency. Past-paper practice should be about compressing time on questions you can already do.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the questions are individually gentler than CAT’s, the limiting factor for most NMAT candidates is not capability but throughput. Practice should therefore focus on reducing the time taken per question rather than on tackling harder material — which is a different objective from CAT preparation and calls for different practice.',
          },
          {
            type: 'steps',
            title: 'How to practise',
            items: [
              { text: 'Time each section separately at its real limit.', note: 'The sections are individually timed and cannot subsidise one another.' },
              { text: 'Attempt every question, always.', note: 'Build the no-blanks habit deliberately so it is automatic.' },
              { text: 'Drill vocabulary and grammar.', note: 'The language section is more rule-based than CAT’s, so this genuinely pays here.' },
              { text: 'Practise data sufficiency specifically.', note: 'It appears in NMAT and not in CAT, and it has its own technique.' },
              { text: 'Rehearse your chosen section order.', note: 'So the choice on the day is a plan rather than an improvisation.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CAT exam guide', to: '/entrance-exams/mba/cat/' },
              { label: 'SNAP exam guide', to: '/entrance-exams/mba/snap/' },
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'NMAT mock tests — sectionally timed practice with no negative marking, and rehearsal of section order.',
        lead: [
          'Practise with your intended section order and with every question answered. Both are decisions this exam lets you make.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'NMAT mocks serve a slightly different purpose from CAT mocks. There is no selection skill to train, because you should be attempting everything, and no guessing threshold to calibrate. What mocks build here is pace — the ability to move through a section at the rate it demands without accuracy collapsing — and the confidence that your chosen order works.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Questions reached per section', note: 'the primary constraint. If you are not finishing, pace is the problem.' },
              { text: 'Blanks — always zero', note: 'no penalty applies; there is no reason for any.' },
              { text: 'Accuracy under pace', note: 'moving faster only helps while accuracy holds.' },
              { text: 'Whether your section order helped', note: 'try both and keep the one that produces the better overall result.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'NMAT preparation strategy — building pace, planning the three attempts and using a CAT preparation as the base.',
        lead: [
          'Prepare for pace rather than difficulty, and plan the three attempts as a sequence rather than as three independent tries.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The three-attempt structure is the most under-used feature of this examination. Used well, the first attempt tells you exactly where you stand under real conditions, the gap gives you time to work on the weakest section, and the second attempt captures the improvement. Used badly, all three are taken in quick succession without anything changing in between.',
          },
          {
            type: 'steps',
            title: 'A plan built around three attempts',
            items: [
              { text: 'Book the first slot early in the window.', note: 'To preserve room for two more.' },
              { text: 'Prepare with a CAT preparation as the base.', note: 'The content overlaps heavily; the differences are pace, grammar-based verbal and data sufficiency.' },
              { text: 'Add vocabulary and grammar drilling.', note: 'The language section rewards it more than CAT’s does.' },
              { text: 'Add data sufficiency practice.', note: 'A question type CAT does not use.' },
              { text: 'Take the first attempt as genuine calibration.', note: 'The best score counts, so nothing is at risk.' },
              { text: 'Between attempts, work only on the weakest section.', note: 'The gap is short; broad revision achieves less than targeted work.' },
              { text: 'Rehearse your section order in mocks before each attempt.', note: 'And be willing to change it between attempts if the first order did not serve you.' },
            ],
          },
          {
            type: 'list',
            title: 'Common mistakes',
            items: [
              { text: 'Booking late in the window', note: 'which reduces three possible attempts to one.' },
              { text: 'Taking all three attempts without changing anything', note: 'the gap between attempts is the point.' },
              { text: 'Leaving questions blank', note: 'no penalty applies; it is a pure loss.' },
              { text: 'Preparing for difficulty rather than pace', note: 'NMAT questions are gentler than CAT’s; the constraint is throughput.' },
              { text: 'Deciding section order in the moment', note: 'a decision worth rehearsing rather than improvising.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'NMAT study material — quantitative, verbal and reasoning notes, with emphasis on grammar and data sufficiency.',
        lead: [
          'A CAT-oriented set of notes serves NMAT well, with two additions the language and quantitative sections specifically reward.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The two areas where NMAT preparation should differ from CAT preparation are grammar and vocabulary, which the language section tests directly rather than through comprehension alone, and data sufficiency, which appears in the quantitative section and has a technique of its own. Both are quick to build and both are commonly skipped by candidates working from CAT material.',
          },
          {
            type: 'links',
            title: 'Subject notes for NMAT',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Verbal ability and reading comprehension', to: '/study-material/varc/' },
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Data interpretation and logical reasoning', to: '/study-material/dilr/' },
            ],
          },
          {
            type: 'list',
            title: 'A routine that fits this examination',
            items: [
              'Daily timed practice at the real section pace rather than untimed problem solving.',
              'Ten vocabulary items a day, revisited — the language section rewards it directly.',
              'A grammar rule reviewed with practice sentences, twice a week.',
              'Data sufficiency sets, since the question type is not used in CAT.',
              'Every practice set completed with zero blanks.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the NMAT exam pattern?',
        a: 'Three individually timed sections — language skills, quantitative skills and logical reasoning — taken in an order the candidate chooses at the start of the test, over about two hours in total. There is no negative marking. The examination runs over a testing window of several weeks rather than on a single day, with candidates scheduling their own slot. Question counts and section timings have varied between cycles, so confirm them in the current candidate handbook.',
      },
      {
        q: 'How many times can I take NMAT?',
        a: 'Up to three times within the testing window, subject to a required gap between attempts and a fee for each, with your best score counted for admission. This is the most useful structural feature of the examination: it makes the first attempt genuine calibration at no cost to your final result. The practical requirement is to book an early slot, since a candidate who books late may not have room in the window for a second or third attempt.',
      },
      {
        q: 'Is there negative marking in NMAT?',
        a: 'No. Every question should therefore be answered — a blank scores zero while a guess has a real chance of scoring, and there is no scenario in which leaving one is better. This removes guessing discipline as a skill entirely and shifts the emphasis onto pace: the binding constraint becomes how many questions you can reach rather than how many you dare attempt.',
      },
      {
        q: 'Can I choose the section order in NMAT?',
        a: 'Yes, at the start of the test. Some candidates open with their strongest section to build confidence; others take their weakest while their attention is freshest. Either is defensible, but the choice is worth making and rehearsing in mocks beforehand rather than improvising on the day — and if you are taking more than one attempt, it is worth trying a different order and keeping whichever produces the better result.',
      },
      {
        q: 'How does NMAT compare with CAT in difficulty?',
        a: 'NMAT questions are individually gentler but come at a stricter pace, which makes it a test of consistent speed rather than of peak problem-solving. Its language section is more grammar- and vocabulary-based than CAT’s almost entirely comprehension-driven verbal section, and it includes data sufficiency questions that CAT does not use. A CAT preparation covers most of the ground; the additions are pace practice, grammar drilling and data sufficiency technique.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     SNAP
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'snap',
    path: '/entrance-exams/mba/snap/',
    name: 'SNAP',
    fullName: 'Symbiosis National Aptitude Test',
    authority: 'Symbiosis International University',
    official: 'snaptest.org',
    seoTitle: 'SNAP 2026: 60-Minute Pattern, Multiple Attempts & Strategy',
    metaDescription:
      'SNAP exam guide — the compact 60-question, 60-minute pattern, multiple attempts, negative marking and preparation for Symbiosis institutes.',
    lead: [
      'SNAP is the entrance test for the management institutes of Symbiosis International University. It is the shortest of the major management entrances — sixty questions in sixty minutes — and that compression is the whole character of the test.',
      'A minute per question across general English, reasoning and quantitative ability leaves no room for a slow start or a long deliberation. SNAP is less a test of how well you can solve a hard problem than of how quickly you can recognise and dispatch a routine one.',
    ],
    quickFacts: [
      ['Conducted by', 'Symbiosis International University'],
      ['Admits to', 'Symbiosis institutes including SIBM and SCMHRD'],
      ['Structure', '60 questions in 60 minutes across three sections'],
      ['Marking', 'One mark for a correct answer, with a deduction for a wrong one'],
      ['Attempts', 'Multiple attempts have been permitted in recent cycles, with the best score considered'],
      ['Character', 'A speed test — a minute per question with no sectional timing'],
    ],
    overview: [
      {
        type: 'p',
        text: 'SNAP is used for admission to the management programmes of the Symbiosis institutes, with each institute running its own subsequent selection process. The test itself is deliberately compact — a single sixty-minute paper covering general English, analytical and logical reasoning, and quantitative ability with data interpretation and data sufficiency.',
      },
      {
        type: 'p',
        text: 'In recent cycles Symbiosis has permitted candidates to attempt the test more than once within its window, considering the best score. Where that applies it changes the calculus considerably, making an early attempt useful calibration rather than a single decisive event.',
      },
      {
        type: 'list',
        title: 'What the compression means',
        items: [
          { text: 'A minute per question, on average', note: 'and no sectional timing, so you allocate across the whole hour yourself.' },
          { text: 'Recognition speed over problem-solving depth', note: 'the questions are not hard; getting to enough of them is.' },
          { text: 'No room for a slow start', note: 'ten minutes lost at the beginning is a sixth of the paper.' },
          { text: 'Selection matters', note: 'a question that will take four minutes is a question to leave, whatever it is worth.' },
        ],
      },
      {
        type: 'note',
        title: 'Confirm the attempt rules for your cycle',
        text: 'Whether multiple attempts are permitted, how many, and how the best score is used have varied between cycles. Because this materially changes preparation strategy — a single-attempt test and a best-of-three test call for different approaches — read the current bulletin rather than assuming.',
      },
    ],
    stages: [
      {
        name: 'SNAP test',
        mode: 'Computer-based, 60 minutes',
        detail:
          'Sixty questions across general English including reading comprehension and verbal ability; analytical and logical reasoning; and quantitative ability with data interpretation and data sufficiency. One mark per correct answer with a deduction for a wrong one, and no sectional timing.',
      },
      {
        name: 'Repeat attempts',
        mode: 'Within the test window, where permitted',
        detail:
          'Where multiple attempts are permitted in a cycle, the best score is considered. Confirm the rules and the number of attempts allowed in the current bulletin.',
      },
      {
        name: 'Institute selection process',
        mode: 'Institute-conducted',
        detail:
          'Each Symbiosis institute runs its own subsequent process, typically including a written ability test, group exercise and personal interview.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'SNAP syllabus — general English, analytical and logical reasoning, and quantitative ability with data interpretation.',
        lead: [
          'Conventional content in three sections. What makes SNAP distinctive is not what it asks but how little time it gives you to answer.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General English',
                'Reading comprehension, verbal reasoning, syllogisms, analogies, antonyms and synonyms, fill in the blanks, sentence correction, idioms, one-word substitution, para jumbles and odd one out. Broader and more rule-based than CAT verbal, with less emphasis on long passages.',
              ],
              [
                'Analytical and Logical Reasoning',
                'Arrangements and puzzles, family trees and blood relations, direction sense, coding and decoding, series, syllogisms, critical reasoning, clocks and calendars, and visual reasoning. Individually approachable, and the section that most rewards recognition speed.',
              ],
              [
                'Quantitative Ability, Data Interpretation and Data Sufficiency',
                'Arithmetic covering percentage, ratio, averages, profit and loss, interest, time and work, time speed and distance and mixtures; algebra, number systems, geometry and mensuration; permutations, combinations and probability; data interpretation through tables and charts; and data sufficiency questions.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Nothing in this syllabus is unusual for a management entrance. The preparation difference lies entirely in the pace: material that would be comfortable in a two-hour paper becomes demanding in sixty minutes, which means the productive practice is timed drilling on routine questions rather than extended work on hard ones.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'SNAP exam pattern — the 60-question, 60-minute structure, marking, no sectional timing and multiple attempts.',
        lead: [
          'Sixty questions, sixty minutes, one paper. The arithmetic of that is the whole strategy.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Section-wise question counts have varied — confirm in the current bulletin.',
            head: ['Section', 'Character', 'Notes'],
            rows: [
              ['General English', 'Comprehension, grammar and vocabulary', 'Broader and more rule-based than CAT verbal'],
              ['Analytical and Logical Reasoning', 'Puzzles, arrangements, critical reasoning', 'Rewards recognition speed'],
              ['Quantitative, DI and Data Sufficiency', 'Arithmetic through to data sufficiency', 'Routine questions at pace'],
              ['Total', '60 questions', '60 minutes, no sectional timing'],
            ],
          },
          {
            type: 'p',
            text: 'The absence of sectional timing is a genuine advantage and one that candidates under-use. You may allocate the hour as you choose — spending twenty-five minutes on your strongest section and fifteen on your weakest is entirely legitimate, and usually better than an even split. That decision should be made in advance and rehearsed, not improvised while the clock runs.',
          },
          {
            type: 'list',
            title: 'Strategy for a sixty-minute paper',
            items: [
              { text: 'Plan your time allocation before the day', note: 'no sectional timing means you own the decision, and improvising wastes minutes.' },
              { text: 'Make a fast first pass', note: 'answer everything you can do in under a minute, then return for the rest. This maximises reachable questions.' },
              { text: 'Abandon quickly', note: 'a deduction applies, and a question taking three minutes is costing you two others.' },
              { text: 'Use repeat attempts where permitted', note: 'the best score counts, so an early attempt is calibration.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm marking and attempt rules',
            text: 'The deduction rate, the section-wise question distribution and the number of permitted attempts have all varied between cycles. All three affect strategy directly, so read them in the current bulletin.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'SNAP previous year papers — building the recognition speed a one-minute-per-question paper requires.',
        lead: [
          'Practise past papers strictly against the clock. In SNAP, an untimed paper measures nothing that matters.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Almost every SNAP candidate could answer almost every SNAP question given three minutes each. Since they have one, the entire preparation question is how to reduce the time per question — which comes from familiarity with question types, fluency with routine calculation, and a well-rehearsed decision about when to move on.',
          },
          {
            type: 'steps',
            title: 'How to practise',
            items: [
              { text: 'Always practise at sixty questions in sixty minutes.', note: 'Any looser and you are training for a different paper.' },
              { text: 'Do a fast first pass, then a second.', note: 'Practising the two-pass approach makes it automatic on the day.' },
              { text: 'Drill vocabulary and routine calculation.', note: 'Both remove seconds from many questions, which is where the gains are.' },
              { text: 'Practise data sufficiency separately.', note: 'It has its own technique and is quick once learned.' },
              { text: 'Rehearse your time allocation across sections.', note: 'There is no sectional timing; the allocation is your decision.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CAT exam guide', to: '/entrance-exams/mba/cat/' },
              { label: 'NMAT exam guide', to: '/entrance-exams/mba/nmat/' },
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'SNAP mock tests — sixty-minute full-length practice with the correct marking and a rehearsed time allocation.',
        lead: [
          'A SNAP mock is short enough to take often. Take them frequently and treat pace as the headline metric.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'At sixty minutes, a SNAP mock costs an hour rather than the half-day a CAT mock consumes. That makes frequent practice genuinely feasible, and frequency is exactly what a speed test rewards — each attempt compresses your time per question a little further.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Questions reached', note: 'the primary constraint in a sixty-minute paper.' },
              { text: 'Accuracy under pace', note: 'a deduction applies, so speed that produces errors is not progress.' },
              { text: 'Time by section', note: 'and whether your planned allocation actually held.' },
              { text: 'Questions abandoned', note: 'and whether abandoning them was right. Over-persistence is the commonest leak here.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'SNAP preparation strategy — building speed on routine questions and using multiple attempts where permitted.',
        lead: [
          'Prepare for speed, not for difficulty. Nothing in SNAP is hard; getting to enough of it is.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A candidate preparing for CAT is already well beyond SNAP’s difficulty level and may still score poorly, because the two examinations reward different things. CAT rewards depth of problem-solving and set selection over two hours; SNAP rewards throughput on routine questions in one. The adjustment is a matter of practice style rather than additional content.',
          },
          {
            type: 'steps',
            title: 'Adding SNAP to a CAT preparation',
            items: [
              { text: 'Six weeks out — switch to timed drilling on routine questions.', note: 'Volume at pace rather than depth on hard problems.' },
              { text: 'Six weeks out — vocabulary and grammar work.', note: 'SNAP’s English section is broader and more rule-based than CAT’s.' },
              { text: 'Four weeks out — data sufficiency practice.', note: 'A question type CAT does not use, and quick once its technique is learned.' },
              { text: 'Four weeks out — sixty-minute mocks, twice a week.', note: 'Short enough to take often, which is what builds pace.' },
              { text: 'Plan your time allocation across sections.', note: 'And rehearse it, since there is no sectional timing to impose one.' },
              { text: 'Use repeat attempts where permitted.', note: 'Booking early enough in the window to leave room for more than one.' },
            ],
          },
          {
            type: 'list',
            title: 'Where SNAP candidates lose marks',
            items: [
              { text: 'Persisting with hard questions', note: 'in a one-minute-per-question paper, three minutes on a question costs two others.' },
              { text: 'Practising untimed', note: 'which trains nothing this test measures.' },
              { text: 'No time-allocation plan', note: 'the absence of sectional timing is an advantage only if you use it deliberately.' },
              { text: 'Ignoring vocabulary', note: 'the English section rewards it directly, unlike CAT.' },
              { text: 'Not using permitted repeat attempts', note: 'where the best score counts, an early attempt is free calibration.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'SNAP study material — quantitative, verbal and reasoning notes with an emphasis on speed and vocabulary.',
        lead: [
          'The same core material as CAT, worked for speed rather than depth, with vocabulary given more weight.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Two areas repay specific attention for SNAP. Vocabulary, because the English section tests it directly rather than only through comprehension. And routine calculation fluency, because in a sixty-minute paper the seconds saved on every arithmetic step across sixty questions add up to several additional questions reached.',
          },
          {
            type: 'links',
            title: 'Subject notes for SNAP',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Verbal ability and reading comprehension', to: '/study-material/varc/' },
              { label: 'Data interpretation and logical reasoning', to: '/study-material/dilr/' },
            ],
          },
          {
            type: 'list',
            title: 'A routine built for a speed test',
            items: [
              'Fifteen minutes of calculation drilling daily — fractions, percentages, squares, tables.',
              'Ten vocabulary items a day, revisited after three days.',
              'Timed sets of twenty questions rather than long untimed sessions.',
              'Two sixty-minute mocks a week in the final month.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the SNAP exam pattern?',
        a: 'A single computer-based paper of 60 questions in 60 minutes, covering general English, analytical and logical reasoning, and quantitative ability with data interpretation and data sufficiency. One mark is awarded per correct answer with a deduction for a wrong one, and there is no sectional timing — you allocate the hour across the sections yourself. Section-wise question counts and the deduction rate have varied between cycles, so confirm them in the current bulletin.',
      },
      {
        q: 'Can I take SNAP more than once?',
        a: 'Symbiosis has permitted multiple attempts within the test window in recent cycles, considering the best score. Where that applies, an early attempt becomes useful calibration rather than a single decisive event, and it is worth booking early enough in the window to leave room for another. Because the rules have varied between cycles, confirm the number of attempts permitted and how the best score is used in the current bulletin.',
      },
      {
        q: 'Why is SNAP considered a speed test?',
        a: 'Because sixty questions in sixty minutes leaves an average of one minute each, and the questions themselves are not conceptually difficult. Almost every candidate could answer almost every question given three minutes; since they have one, the entire competitive question becomes how quickly you recognise and dispatch a routine question. That makes preparation a matter of timed drilling and calculation fluency rather than of tackling harder material.',
      },
      {
        q: 'Is there sectional timing in SNAP?',
        a: 'No, and this is an advantage candidates under-use. Because the hour is not divided, you may spend twenty-five minutes on your strongest section and fifteen on your weakest if that maximises your score — which it usually does compared with an even split. The important point is to decide that allocation in advance and rehearse it in mocks, rather than improvising while the clock runs.',
      },
      {
        q: 'How should I adapt a CAT preparation for SNAP?',
        a: 'By changing practice style rather than adding content. A CAT preparation is already beyond SNAP’s difficulty level, but it trains depth of problem-solving and set selection over two hours, where SNAP rewards throughput on routine questions in one. In the final six weeks, switch to timed drilling at volume, add vocabulary and grammar work since SNAP tests English more directly than CAT does, practise data sufficiency, and take frequent sixty-minute mocks — they are short enough to do twice a week.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     CMAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'cmat',
    path: '/entrance-exams/mba/cmat/',
    name: 'CMAT',
    fullName: 'Common Management Admission Test',
    authority: 'National Testing Agency (NTA)',
    official: 'cmat.nta.nic.in',
    seoTitle: 'CMAT 2026: Pattern, Innovation & Entrepreneurship Section',
    metaDescription:
      'CMAT exam guide — five-section pattern including general awareness and innovation and entrepreneurship, marking scheme and preparation.',
    lead: [
      'CMAT is conducted by the National Testing Agency and accepted by a large number of AICTE-approved management institutions. Its quantitative, logical and language sections are conventional, but it carries two sections that most management entrances do not: general awareness, and innovation and entrepreneurship.',
      'Those two are the reason CMAT rewards a different preparation from CAT. They are knowledge sections rather than aptitude sections, they are entirely learnable in advance, and they are routinely left unprepared by candidates treating CMAT as a CAT rehearsal.',
    ],
    quickFacts: [
      ['Conducted by', 'National Testing Agency (NTA)'],
      ['Accepted by', 'A large number of AICTE-approved management institutions'],
      ['Structure', '100 questions, 400 marks, 3 hours'],
      ['Marking', 'Four marks for a correct answer, one deducted for a wrong one'],
      ['Distinctive sections', 'General Awareness, and Innovation and Entrepreneurship'],
      ['Level', 'A bachelor’s degree in any discipline'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CMAT is a national-level management entrance whose scores are used by a wide range of AICTE-approved institutions. It is a computer-based test of a hundred questions over three hours, which makes it considerably more generous on time than CAT or SNAP — nearly two minutes per question.',
      },
      {
        type: 'p',
        text: 'Its distinguishing feature is composition. Alongside quantitative techniques and data interpretation, logical reasoning and language comprehension, it includes a general awareness section and an innovation and entrepreneurship section. Both are knowledge-based, both can be prepared in advance, and together they are a substantial share of the paper.',
      },
      {
        type: 'list',
        title: 'The five sections',
        items: [
          { text: 'Quantitative Techniques and Data Interpretation', note: 'arithmetic, algebra, geometry and data interpretation at a conventional level.' },
          { text: 'Logical Reasoning', note: 'analytical and critical reasoning, arrangements, series and puzzles.' },
          { text: 'Language Comprehension', note: 'reading comprehension, grammar, vocabulary and verbal reasoning.' },
          { text: 'General Awareness', note: 'current affairs, business, economy, static knowledge — a knowledge section, not an aptitude one.' },
          { text: 'Innovation and Entrepreneurship', note: 'concepts of entrepreneurship, innovation, start-ups, business models and related policy.' },
        ],
      },
      {
        type: 'note',
        title: 'Two sections that reward study rather than aptitude',
        text: 'General awareness and innovation and entrepreneurship are the sections where preparation converts most directly into marks, because they test knowledge rather than reasoning speed. They are also the ones candidates preparing primarily for CAT most often skip — which makes them, in practice, the easiest place to gain a competitive edge in this examination.',
      },
    ],
    stages: [
      {
        name: 'CMAT computer-based test',
        mode: 'Objective, 3 hours',
        detail:
          '100 questions for 400 marks across quantitative techniques and data interpretation, logical reasoning, language comprehension, general awareness, and innovation and entrepreneurship. Four marks for a correct answer, one deducted for a wrong one.',
      },
      {
        name: 'Result and percentile',
        mode: 'Score-based',
        detail:
          'Scores and percentiles are published, and participating institutions use them for shortlisting according to their own criteria.',
      },
      {
        name: 'Institute selection process',
        mode: 'Institute-conducted',
        detail:
          'Participating institutions conduct their own group discussion and personal interview processes for shortlisted candidates.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CMAT syllabus — quantitative, logical reasoning, language, general awareness and innovation and entrepreneurship topics.',
        lead: [
          'Three conventional aptitude sections and two knowledge sections. The knowledge sections are where a CMAT-specific preparation earns its keep.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Quantitative Techniques and Data Interpretation',
                'Number systems, arithmetic covering percentage, ratio, averages, profit and loss, interest, time and work, time speed and distance, mixtures and partnership; algebra, geometry, mensuration; permutations, combinations and probability; and data interpretation through tables, graphs and charts.',
              ],
              [
                'Logical Reasoning',
                'Analytical reasoning through arrangements and puzzles, critical reasoning covering statements, assumptions and conclusions, sequencing, blood relations, coding and decoding, direction sense, syllogisms, matrix arrangements and non-verbal reasoning.',
              ],
              [
                'Language Comprehension',
                'Reading comprehension passages, para jumbles, sentence correction, error identification, synonyms and antonyms, idioms and phrases, and vocabulary in context. More grammar-oriented than CAT verbal.',
              ],
              [
                'General Awareness',
                'Current affairs of national and international importance, business and corporate news, economics and finance, government schemes, sports, awards, history, geography, polity and static general knowledge. A knowledge section, prepared through daily reading rather than practice.',
              ],
              [
                'Innovation and Entrepreneurship',
                'Concepts and theories of entrepreneurship, the entrepreneurial process, types of entrepreneurs, innovation and its forms, business models and value creation, start-up ecosystems and funding, intellectual property basics, government schemes supporting entrepreneurship, and notable Indian entrepreneurs and ventures. A finite, coverable body of material.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The innovation and entrepreneurship section deserves specific attention because it is bounded. Unlike general awareness, which is open-ended, this section draws on a defined set of concepts, schemes and examples that can be covered thoroughly in a few weeks. That combination — a full section, learnable in weeks, routinely skipped — makes it the best return available in CMAT preparation.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CMAT exam pattern — the five-section structure, marking scheme, generous timing and how sections are weighted.',
        lead: [
          'A hundred questions in three hours is nearly two minutes each — the most generous timing among the major management entrances.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Section-wise question counts have varied — confirm in the current information bulletin.',
            head: ['Section', 'Character', 'Preparation type'],
            rows: [
              ['Quantitative Techniques and DI', 'Aptitude', 'Practice-based'],
              ['Logical Reasoning', 'Aptitude', 'Practice-based'],
              ['Language Comprehension', 'Aptitude with grammar', 'Practice plus vocabulary'],
              ['General Awareness', 'Knowledge', 'Daily reading, cumulative'],
              ['Innovation and Entrepreneurship', 'Knowledge', 'Bounded study, a few weeks'],
              ['Total', '100 questions, 400 marks', '3 hours'],
            ],
          },
          {
            type: 'p',
            text: 'The four-to-one marking ratio is the same as JEE Main and NEET, and it is relatively forgiving: a blind guess among four options breaks even, and any genuine narrowing makes a guess positive. Combined with nearly two minutes per question, this is a paper where a well-prepared candidate should be able to attempt widely and check their work.',
          },
          {
            type: 'list',
            title: 'Where the marks are most available',
            items: [
              { text: 'Innovation and entrepreneurship', note: 'a full section drawn from a bounded body of material, learnable in a few weeks, and widely skipped.' },
              { text: 'General awareness', note: 'cumulative but rewarding — daily reading over months converts directly.' },
              { text: 'Language comprehension', note: 'more grammar- and vocabulary-based than CAT, which makes it more directly preparable.' },
              { text: 'Quantitative and reasoning', note: 'conventional, and covered by any CAT-oriented preparation.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current section composition',
            text: 'Section-wise question counts have been adjusted between cycles, including the weighting given to the innovation and entrepreneurship section. Read the current information bulletin for the composition that applies to your attempt.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CMAT previous year papers — mapping the general awareness themes and the innovation and entrepreneurship content.',
        lead: [
          'Past papers matter most here for the two knowledge sections, where they define what "covered" actually means.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The innovation and entrepreneurship syllabus reads as an open-ended subject and is in practice a fairly narrow one. Working through several years of past questions shows which concepts, schemes and examples actually recur, and turns a vague area into a defined revision list — usually a few weeks of work rather than a term’s.',
          },
          {
            type: 'steps',
            title: 'How to work the papers',
            items: [
              { text: 'Extract every innovation and entrepreneurship question from past papers.', note: 'The recurring concepts and schemes define the real syllabus for that section.' },
              { text: 'Group general awareness questions by theme.', note: 'Business and economy appear more heavily than in general competitive exams.' },
              { text: 'Use the aptitude sections for pacing only.', note: 'They are conventional; timing rather than difficulty is what needs rehearsing.' },
              { text: 'Practise with the four-to-one marking applied.', note: 'It is forgiving, and knowing that should widen your attempt range.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'MAT exam guide', to: '/entrance-exams/mba/mat/' },
              { label: 'CAT exam guide', to: '/entrance-exams/mba/cat/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'CMAT mock tests — full 100-question practice including the general awareness and entrepreneurship sections.',
        lead: [
          'Practise the whole paper. A mock that omits the two knowledge sections is testing a different examination.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most common CMAT preparation error is to practise with CAT-style mocks and assume the knowledge sections will look after themselves. They will not — general awareness is cumulative and innovation and entrepreneurship is content that has to be learned. Practising the real five-section paper makes the gap visible early enough to fix.',
          },
          {
            type: 'list',
            title: 'What to track',
            items: [
              { text: 'Knowledge section accuracy', note: 'general awareness and entrepreneurship together. The most improvable part of your score.' },
              { text: 'Time left at the end', note: 'with nearly two minutes per question you should not be rushed; if you are, pacing needs work.' },
              { text: 'Attempt range', note: 'the forgiving marking scheme justifies attempting more than in a harsher paper.' },
              { text: 'Aptitude section accuracy', note: 'the conventional diagnostic.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'CMAT preparation strategy — covering the knowledge sections that distinguish it, alongside conventional aptitude work.',
        lead: [
          'The aptitude sections come free with any CAT preparation. The two knowledge sections are where a CMAT score is actually built.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Consider where the marginal mark is cheapest. Improving your quantitative percentile requires months of practice against strong competition. Covering the innovation and entrepreneurship section properly requires a few weeks of reading on bounded material that most of your competition has skipped. For a CMAT candidate, that comparison should determine where the last two months go.',
          },
          {
            type: 'steps',
            title: 'A plan for CMAT specifically',
            items: [
              { text: 'From three months out — daily general awareness.', note: 'With business and economy weighted more heavily than a general competitive-exam habit would.' },
              { text: 'Two months out — innovation and entrepreneurship, systematically.', note: 'Concepts, schemes, funding, notable ventures. Bounded material; a few weeks covers it.' },
              { text: 'Throughout — conventional aptitude preparation.', note: 'Quantitative, reasoning and language, shared with any other management entrance.' },
              { text: 'Two months out — grammar and vocabulary work.', note: 'CMAT language is more rule-based than CAT verbal.' },
              { text: 'One month out — full five-section mocks.', note: 'Including the knowledge sections, so the gaps show while there is time.' },
              { text: 'Use the generous timing.', note: 'Nearly two minutes a question allows verification; practise using it rather than rushing.' },
            ],
          },
          {
            type: 'list',
            title: 'Where CMAT candidates leave marks',
            items: [
              { text: 'Skipping innovation and entrepreneurship', note: 'a full section of learnable content that most competitors ignore.' },
              { text: 'Neglecting general awareness', note: 'cumulative, and impossible to assemble in the final week.' },
              { text: 'Attempting too conservatively', note: 'the four-to-one marking is forgiving and rewards wider attempts.' },
              { text: 'Practising only CAT-style mocks', note: 'which omit the two sections that most differentiate CMAT scores.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'CMAT study material — aptitude notes plus general awareness, economy and business reading for the knowledge sections.',
        lead: [
          'Conventional aptitude notes, plus the general awareness and economy material the two knowledge sections require.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For general awareness and innovation and entrepreneurship, the useful material is a daily business newspaper, a current affairs source and a structured treatment of the entrepreneurship concepts and government schemes that recur. The economy notes below are the closest fit on this site, and past CMAT questions define the rest of the ground.',
          },
          {
            type: 'links',
            title: 'Subject notes for CMAT',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A routine that suits CMAT',
            items: [
              'A business newspaper daily, for general awareness and the entrepreneurship section together.',
              'Twenty minutes of current affairs revision from a single running source.',
              'A defined entrepreneurship reading list worked through over a few weeks.',
              'Conventional aptitude practice, timed but unhurried given the generous allowance.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CMAT exam pattern?',
        a: 'A three-hour computer-based test of 100 questions for 400 marks across five sections — quantitative techniques and data interpretation, logical reasoning, language comprehension, general awareness, and innovation and entrepreneurship. Four marks are awarded for a correct answer and one deducted for a wrong one. Section-wise question counts have varied between cycles, so confirm them in the current information bulletin.',
      },
      {
        q: 'What is the CMAT innovation and entrepreneurship section?',
        a: 'A knowledge section covering entrepreneurship concepts and theories, the entrepreneurial process, innovation and business models, start-up ecosystems and funding, intellectual property basics, government schemes supporting entrepreneurship, and notable Indian entrepreneurs and ventures. Although it reads as open-ended, the material that actually recurs is bounded and can be covered thoroughly in a few weeks — which, combined with how often candidates skip it, makes it the best return available in CMAT preparation.',
      },
      {
        q: 'How is CMAT different from CAT?',
        a: 'CMAT includes two knowledge sections CAT does not have — general awareness, and innovation and entrepreneurship — which together are a substantial share of the paper and test study rather than aptitude. It is also far more generous on time, at nearly two minutes per question against CAT’s much tighter sectional limits, and its language section is more grammar- and vocabulary-based than CAT’s almost entirely comprehension-driven verbal section.',
      },
      {
        q: 'Is CMAT easier than CAT?',
        a: 'The aptitude questions are generally more approachable and the timing is considerably more generous, so in that sense yes. But CMAT is not simply an easier CAT: it asks for two sections of knowledge that CAT does not test at all, and a candidate who prepares only with CAT material will find a meaningful part of the paper unfamiliar. The difficulty is distributed differently rather than being uniformly lower.',
      },
      {
        q: 'How should I prepare for CMAT?',
        a: 'Use a conventional management-entrance preparation for the three aptitude sections, then add the two knowledge sections deliberately. Start daily general awareness reading three months out, weighting business and economy more than a general competitive-exam habit would, and work through the innovation and entrepreneurship material systematically about two months out. That is where the cheapest marginal marks are, because improving a quantitative percentile takes months against strong competition while covering a skipped knowledge section takes weeks.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     MAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'mat',
    path: '/entrance-exams/mba/mat/',
    name: 'MAT',
    fullName: 'Management Aptitude Test',
    authority: 'All India Management Association (AIMA)',
    official: 'mat.aima.in',
    seoTitle: 'MAT 2026: Pattern, Multiple Cycles & Business Environment',
    metaDescription:
      'MAT exam guide — five-section pattern with economic and business environment, multiple test cycles a year, marking scheme and preparation.',
    lead: [
      'MAT is conducted by the All India Management Association several times a year and accepted by a wide range of business schools. Its most useful feature for a candidate is that frequency: with multiple cycles annually and multiple delivery modes, it offers more opportunities than any other national management entrance.',
      'Its content is conventional with one addition — a section on the economic and business environment, which tests knowledge of business, economy and current affairs rather than aptitude, and which is entirely learnable in advance.',
    ],
    quickFacts: [
      ['Conducted by', 'All India Management Association (AIMA)'],
      ['Accepted by', 'A wide range of business schools across India'],
      ['Frequency', 'Several cycles a year, in multiple delivery modes'],
      ['Structure', 'Five sections, including economic and business environment'],
      ['Marking', 'One mark for a correct answer, with a deduction for a wrong one'],
      ['Level', 'A bachelor’s degree in any discipline'],
    ],
    overview: [
      {
        type: 'p',
        text: 'MAT is a national management entrance run several times a year, with candidates able to choose from computer-based, internet-based and paper-based delivery in the cycles where those are offered. Its scores are accepted by a broad set of institutions, and because it recurs frequently, a candidate is never far from the next opportunity.',
      },
      {
        type: 'p',
        text: 'The paper has five sections: language comprehension, intelligence and critical reasoning, mathematical skills, data analysis and sufficiency, and economic and business environment. The first four are conventional aptitude sections; the fifth is a knowledge section, and it is the one that distinguishes a MAT preparation from a general management-entrance preparation.',
      },
      {
        type: 'list',
        title: 'What MAT offers a candidate',
        items: [
          { text: 'Frequency', note: 'multiple cycles a year, so a disappointing attempt is quickly followed by another opportunity.' },
          { text: 'Delivery choice', note: 'computer-based, internet-based and paper-based modes have been offered in different cycles.' },
          { text: 'Wide acceptance', note: 'a large number of institutions accept the score.' },
          { text: 'A knowledge section', note: 'economic and business environment, which rewards preparation directly.' },
        ],
      },
      {
        type: 'note',
        title: 'The business environment section is generally excluded from the composite score',
        text: 'In most cycles the economic and business environment section is not counted in the composite score used for percentile ranking, though institutions may consider it separately. That does not make it optional — it changes when it matters. Confirm the position for your cycle in the bulletin.',
      },
    ],
    stages: [
      {
        name: 'Language Comprehension',
        mode: 'Objective section',
        detail:
          'Reading comprehension, verbal ability, grammar, vocabulary, para jumbles and sentence correction.',
      },
      {
        name: 'Intelligence and Critical Reasoning',
        mode: 'Objective section',
        detail:
          'Analytical reasoning, critical reasoning, arrangements, puzzles, series, coding, syllogisms and statement-based questions.',
      },
      {
        name: 'Mathematical Skills and Data Analysis',
        mode: 'Two objective sections',
        detail:
          'Mathematical skills covering arithmetic, algebra, geometry and modern mathematics; and data analysis and sufficiency covering tables, charts, graphs and data sufficiency questions.',
      },
      {
        name: 'Indian and Global Economic and Business Environment',
        mode: 'Objective section',
        detail:
          'Business and economy knowledge, current affairs, companies and brands, economic concepts and policy. Generally excluded from the composite score but considered separately by some institutions.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'MAT syllabus — language comprehension, reasoning, mathematical skills, data analysis and the business environment section.',
        lead: [
          'Four conventional aptitude sections and one knowledge section. The knowledge section is what MAT preparation adds.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Language Comprehension',
                'Reading comprehension passages, verbal ability, grammar and usage, vocabulary including synonyms, antonyms and one-word substitution, idioms, para jumbles, sentence correction and fill in the blanks. More rule-based than CAT verbal.',
              ],
              [
                'Intelligence and Critical Reasoning',
                'Analytical reasoning through arrangements, distributions and puzzles; critical reasoning covering statements, assumptions, arguments and conclusions; series, coding and decoding, blood relations, direction sense, syllogisms, and visual and non-verbal reasoning.',
              ],
              [
                'Mathematical Skills',
                'Arithmetic covering percentage, ratio and proportion, averages, profit and loss, interest, time and work, time speed and distance, mixtures and partnership; algebra, number systems, geometry, mensuration; and permutations, combinations and probability.',
              ],
              [
                'Data Analysis and Sufficiency',
                'Data interpretation from tables, bar and line graphs, pie charts and caselets; data comparison; and data sufficiency questions, which have their own technique and are worth practising separately.',
              ],
              [
                'Indian and Global Economic and Business Environment',
                'Indian economy and its structure, economic policy and reforms, banking and finance, international economic institutions and agreements, business and corporate news, companies and brands, business personalities, government schemes affecting business, and general current affairs with a business emphasis.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The business environment section rewards the same daily reading habit that serves CMAT’s general awareness and XAT’s general knowledge sections. A candidate preparing for several management entrances gets this section largely for free by reading a business newspaper daily, which is a good argument for starting that habit early regardless of which test is the primary target.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'MAT exam pattern — the five-section structure, marking, composite score treatment and the multiple cycles each year.',
        lead: [
          'Five sections, of which four typically count towards the composite score. And several chances a year to improve it.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Section structure. Question counts, timing and the composite-score treatment vary between cycles — confirm in the current bulletin.',
            head: ['Section', 'Character', 'Typically in composite score'],
            rows: [
              ['Language Comprehension', 'Aptitude with grammar', 'Yes'],
              ['Intelligence and Critical Reasoning', 'Aptitude', 'Yes'],
              ['Mathematical Skills', 'Aptitude', 'Yes'],
              ['Data Analysis and Sufficiency', 'Aptitude', 'Yes'],
              ['Economic and Business Environment', 'Knowledge', 'Generally excluded'],
            ],
          },
          {
            type: 'p',
            text: 'A deduction applies for wrong answers, which makes narrowing before guessing worthwhile without making the paper punishing. The timing is generous compared with CAT or SNAP, which means accuracy rather than speed is usually the binding constraint — and a candidate who has practised for tighter papers may find they have more time here than they know what to do with.',
          },
          {
            type: 'list',
            title: 'Using the multiple cycles',
            items: [
              { text: 'Several opportunities a year', note: 'which makes an early attempt genuine calibration rather than a decisive event.' },
              { text: 'Delivery mode choice', note: 'computer-based, internet-based and paper-based modes have been offered in different cycles; choose what suits you.' },
              { text: 'Improve between attempts', note: 'the gap between cycles is long enough for targeted work on a weak section.' },
              { text: 'Check which score institutions use', note: 'where multiple attempts exist, institutions may treat them differently.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the composite score treatment',
            text: 'Whether the economic and business environment section counts towards the composite score, and how institutions use it separately, has been stated differently across cycles and institutions. It affects how much preparation time that section deserves, so confirm it for your cycle.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'MAT previous year papers — calibrating a conventional paper and mapping the business environment themes.',
        lead: [
          'Past papers calibrate a paper that is gentler than CAT, and they map the business environment themes that recur.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'MAT questions are generally more approachable than CAT’s, and the timing is more generous, which means a CAT-prepared candidate should find the aptitude sections comfortable. The value of past papers therefore lies less in difficulty calibration and more in the business environment section, where they define which themes actually appear.',
          },
          {
            type: 'steps',
            title: 'How to use them',
            items: [
              { text: 'Extract business environment questions across several cycles.', note: 'The recurring themes — economic policy, institutions, companies, schemes — define a manageable revision list.' },
              { text: 'Practise data sufficiency separately.', note: 'It has its own technique and appears as part of a full section here.' },
              { text: 'Use the aptitude sections for pacing rather than difficulty.', note: 'They are conventional; the timing is generous.' },
              { text: 'Practise with the deduction applied.', note: 'To calibrate how much narrowing justifies a guess.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CMAT exam guide', to: '/entrance-exams/mba/cmat/' },
              { label: 'CAT exam guide', to: '/entrance-exams/mba/cat/' },
              { label: 'Economy study material', to: '/study-material/economy/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'MAT mock tests — full five-section practice including the economic and business environment section.',
        lead: [
          'Practise all five sections. The one that does not count towards the composite score still gets asked about later.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the business environment section is generally excluded from the composite score, candidates often skip it in practice. That is defensible if your only objective is the percentile — but institutions do consider it, and the same material serves the interview stage, where being unable to discuss a current business development is a visible weakness.',
          },
          {
            type: 'list',
            title: 'What to review',
            items: [
              { text: 'Section-wise accuracy across the four scored sections', note: 'the composite is what institutions shortlist on.' },
              { text: 'Data sufficiency accuracy specifically', note: 'a technique-dependent question type worth isolating.' },
              { text: 'Time left over', note: 'MAT timing is generous; unused time should be spent verifying rather than left idle.' },
              { text: 'Business environment coverage', note: 'even where it does not score, it matters later.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'MAT preparation strategy — using the multiple cycles, covering the business environment section and a conventional aptitude base.',
        lead: [
          'Conventional preparation for four sections, a daily reading habit for the fifth, and a plan that uses more than one cycle.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'MAT does not need a preparation of its own. Its aptitude sections are covered by any management-entrance preparation, its timing is generous, and its distinguishing section rewards a daily business newspaper rather than a study plan. What it does offer, and what candidates under-use, is frequency — several cycles a year means an early attempt genuinely costs nothing.',
          },
          {
            type: 'steps',
            title: 'A plan that uses the frequency',
            items: [
              { text: 'Prepare with a conventional management-entrance base.', note: 'Quantitative, reasoning and verbal, shared with CAT and the others.' },
              { text: 'Add data sufficiency practice.', note: 'A full section here, with its own technique.' },
              { text: 'From day one — read a business newspaper daily.', note: 'It serves the MAT business environment section, CMAT general awareness, XAT general knowledge and every interview.' },
              { text: 'Attempt an early cycle as calibration.', note: 'With several a year, nothing is lost by an early attempt.' },
              { text: 'Between cycles, work only on the weakest section.', note: 'Targeted improvement between attempts is what the frequency is for.' },
              { text: 'Use the generous timing to verify.', note: 'Practise checking rather than rushing, since the clock allows it.' },
            ],
          },
          {
            type: 'list',
            title: 'What candidates miss',
            items: [
              { text: 'Not using multiple cycles', note: 'the most under-used advantage this examination offers.' },
              { text: 'Skipping the business environment section entirely', note: 'it may not score, but institutions consider it and interviews draw on it.' },
              { text: 'Rushing a paper that does not require it', note: 'timing is generous; use it for accuracy.' },
              { text: 'Neglecting data sufficiency', note: 'a full section with a learnable technique.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'MAT study material — aptitude notes plus economy and business reading for the environment section.',
        lead: [
          'Conventional aptitude notes, plus the economy and current affairs material the business environment section needs.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The economy notes and current affairs material serve the business environment section, and the same reading serves several other management entrances and the interview stage. Among the aptitude notes, the data interpretation material deserves particular attention because data analysis and sufficiency is a full section here rather than a component of one.',
          },
          {
            type: 'links',
            title: 'Subject notes for MAT',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Data interpretation and logical reasoning', to: '/study-material/dilr/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English grammar and vocabulary', to: '/study-material/english/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A routine that serves several exams at once',
            items: [
              'A business newspaper daily — it feeds MAT, CMAT, XAT and every interview.',
              'Data sufficiency practice twice a week, since it is a full section here.',
              'Conventional aptitude practice, timed but unhurried.',
              'Vocabulary and grammar work, since MAT verbal is more rule-based than CAT.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the MAT exam pattern?',
        a: 'Five sections — language comprehension, intelligence and critical reasoning, mathematical skills, data analysis and sufficiency, and Indian and global economic and business environment. A deduction applies for wrong answers, and the timing is generous compared with CAT or SNAP. Question counts, section timings and the delivery modes offered vary between cycles, so confirm them in the current bulletin.',
      },
      {
        q: 'How often is MAT conducted?',
        a: 'Several times a year, which is its most useful feature for a candidate and the one most often under-used. Multiple cycles mean an early attempt is genuine calibration rather than a decisive event, and the gap between cycles is long enough for targeted work on whichever section proved weakest. Different cycles have also offered computer-based, internet-based and paper-based delivery, letting candidates choose the mode that suits them.',
      },
      {
        q: 'Does the business environment section count in the MAT score?',
        a: 'In most cycles it is excluded from the composite score used for percentile ranking, though institutions may consider it separately and it commonly comes up at the interview stage. So it is not optional so much as differently timed in its usefulness. The practical approach is to cover it through a daily business newspaper, which also serves CMAT general awareness, XAT general knowledge and interviews across every management entrance you sit.',
      },
      {
        q: 'How does MAT compare with CAT?',
        a: 'MAT questions are generally more approachable and its timing considerably more generous, so a candidate prepared for CAT should find the aptitude sections comfortable. MAT also has a full data analysis and sufficiency section, where data sufficiency is a distinct question type CAT does not use, and it adds the business environment section. It is accepted by a wide set of institutions, though typically not the ones that shortlist primarily on CAT.',
      },
      {
        q: 'Do I need a separate preparation for MAT?',
        a: 'No. Any conventional management-entrance preparation covers the four aptitude sections, and the distinguishing business environment section rewards a daily business newspaper rather than a dedicated study plan. The two additions worth making are data sufficiency practice, since it constitutes a full section here with a technique of its own, and a deliberate decision to use more than one of the annual cycles rather than treating a single attempt as final.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     GMAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'gmat',
    path: '/entrance-exams/mba/gmat/',
    name: 'GMAT',
    fullName: 'Graduate Management Admission Test',
    authority: 'Graduate Management Admission Council (GMAC)',
    official: 'mba.com',
    seoTitle: 'GMAT 2026: Focus Edition Pattern, Adaptive Scoring & Strategy',
    metaDescription:
      'GMAT exam guide — Focus Edition structure with Quantitative, Verbal and Data Insights, adaptive scoring, review and edit, and preparation.',
    lead: [
      'The GMAT is the international entrance test for graduate management programmes, used by business schools worldwide and by a growing number of Indian institutions for their executive and international programmes. Its current Focus Edition has three sections — Quantitative Reasoning, Verbal Reasoning and Data Insights — of forty-five minutes each.',
      'Two features make it unlike the Indian management entrances. It is computer adaptive, so the difficulty of each question depends on how you have answered the previous ones, and it allows you to review and edit a limited number of answers within a section before it closes. Both change strategy in ways that are worth understanding before you start preparing.',
    ],
    quickFacts: [
      ['Administered by', 'Graduate Management Admission Council (GMAC)'],
      ['Used by', 'Business schools worldwide, and Indian executive and international programmes'],
      ['Current format', 'GMAT Focus Edition — three sections of 45 minutes each'],
      ['Sections', 'Quantitative Reasoning, Verbal Reasoning, Data Insights'],
      ['Scoring', 'Adaptive, on a scale from 205 to 805'],
      ['Distinctive features', 'Section order choice, and a limited review-and-edit facility'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The GMAT is taken year-round at test centres and online, with candidates scheduling their own appointment. Scores are valid for several years and may be sent to schools selectively, which gives candidates more control over how their record is presented than the Indian entrances do.',
      },
      {
        type: 'p',
        text: 'The Focus Edition restructured the test around three sections. Quantitative Reasoning covers problem solving without geometry; Verbal Reasoning covers reading comprehension and critical reasoning without sentence correction; and Data Insights combines data sufficiency, graphics interpretation, table analysis, multi-source reasoning and two-part analysis into a section of its own.',
      },
      {
        type: 'list',
        title: 'What distinguishes the GMAT',
        items: [
          { text: 'Computer adaptive', note: 'question difficulty responds to your performance, which means you cannot skip freely and return later within the adaptive flow.' },
          { text: 'Review and edit', note: 'a limited number of answers may be revisited and changed at the end of a section — a facility the Indian entrances do not offer.' },
          { text: 'Section order choice', note: 'you select the order in which to take the three sections.' },
          { text: 'Data Insights as a full section', note: 'data sufficiency and integrated reasoning question types elevated into a scored section of their own.' },
        ],
      },
      {
        type: 'note',
        title: 'The Focus Edition changed what is tested',
        text: 'Geometry was removed from the quantitative section and sentence correction from the verbal section, while data sufficiency moved into the new Data Insights section. Preparation material written for the earlier format therefore covers content the current test does not ask and omits emphasis it does. Check that any material you use is written for the Focus Edition.',
      },
    ],
    stages: [
      {
        name: 'Quantitative Reasoning',
        mode: 'Adaptive, 45 minutes',
        detail:
          'Problem solving questions covering arithmetic and algebra. Geometry is not tested in the Focus Edition, and data sufficiency has moved to the Data Insights section.',
      },
      {
        name: 'Verbal Reasoning',
        mode: 'Adaptive, 45 minutes',
        detail:
          'Reading comprehension and critical reasoning. Sentence correction is not tested in the Focus Edition.',
      },
      {
        name: 'Data Insights',
        mode: 'Adaptive, 45 minutes',
        detail:
          'Data sufficiency, multi-source reasoning, table analysis, graphics interpretation and two-part analysis. A scored section in its own right, testing the ability to work with data presented in several forms at once.',
      },
      {
        name: 'Review and edit, and score reporting',
        mode: 'Within each section, then at the end',
        detail:
          'A limited number of answers may be bookmarked and revisited at the end of each section. Scores are reported on a 205 to 805 scale, and candidates may choose which scores to send to schools.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'GMAT syllabus — Quantitative Reasoning, Verbal Reasoning and Data Insights content under the Focus Edition.',
        lead: [
          'Three sections, and the Focus Edition removed content the older format tested. Make sure your material matches the current test.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Quantitative Reasoning',
                'Problem solving across arithmetic — properties of integers, fractions, decimals, percentages, ratio and proportion, rates, statistics and probability — and algebra covering expressions, equations, inequalities, functions and exponents. Geometry is not tested in the Focus Edition, which is a significant change from the earlier format.',
              ],
              [
                'Verbal Reasoning',
                'Reading comprehension of passages from business, science and the humanities, with questions on main idea, inference, tone and detail; and critical reasoning covering argument structure, assumptions, strengthening and weakening, evaluation, paradox resolution and conclusion drawing. Sentence correction is not tested in the Focus Edition.',
              ],
              [
                'Data Insights',
                'Data sufficiency, in which you judge whether given statements suffice to answer a question rather than solving it; multi-source reasoning, drawing on several tabs of related information; table analysis; graphics interpretation; and two-part analysis. The section tests the ability to synthesise information presented in different formats, which is closer to actual managerial work than any other part of the test.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Critical reasoning deserves particular emphasis for Indian candidates, because it is tested more rigorously here than in most domestic entrances. GMAT critical reasoning questions turn on the precise logical structure of an argument — what exactly is assumed, what would weaken it, what does not follow — and the discipline of reading for structure rather than for content is the skill that most improves a verbal score.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'GMAT exam pattern — Focus Edition sections, adaptive scoring, the review and edit facility and section order choice.',
        lead: [
          'Three forty-five-minute sections, adaptive difficulty, and a limited chance to change your mind. Each of those shapes strategy.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'GMAT Focus Edition structure. Confirm current details on the official site, as the format has been revised.',
            head: ['Section', 'Time', 'Content'],
            rows: [
              ['Quantitative Reasoning', '45 minutes', 'Arithmetic and algebra problem solving; no geometry'],
              ['Verbal Reasoning', '45 minutes', 'Reading comprehension and critical reasoning; no sentence correction'],
              ['Data Insights', '45 minutes', 'Data sufficiency and integrated reasoning question types'],
              ['Total', 'About 2 hours 15 minutes', 'Section order chosen by the candidate'],
            ],
          },
          {
            type: 'p',
            text: 'Adaptive testing means the difficulty of the next question depends on how you have answered so far, which has two practical consequences. Early questions carry disproportionate influence on where the algorithm places you, so a careless early error is expensive. And you cannot skip a question and return to it in the ordinary way — though the review-and-edit facility provides a limited version of that at the end of each section.',
          },
          {
            type: 'list',
            title: 'Using the review-and-edit facility',
            items: [
              { text: 'Bookmark as you go', note: 'flag questions you were uncertain about, so you can find them quickly at the end.' },
              { text: 'A limited number of edits per section', note: 'so bookmark liberally but plan to change few.' },
              { text: 'Time must be reserved for it', note: 'the facility is worthless if the section clock has run out.' },
              { text: 'Change an answer only for a reason', note: 'second-guessing without new insight usually makes things worse.' },
            ],
          },
          {
            type: 'note',
            title: 'Scores are valid for years and may be sent selectively',
            text: 'GMAT scores remain valid for several years and candidates may choose which scores to report to schools. Combined with the ability to retake the test after a short interval, this gives candidates considerably more control over their record than a once-a-year Indian entrance allows.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'GMAT practice material — why official questions matter more than past papers, and how to use them.',
        lead: [
          'The GMAT does not release past papers in the Indian sense. What it provides instead is official practice material, and it is worth more.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the test is adaptive and administered year-round, there is no annual paper to work through. GMAC instead publishes official guides and practice questions drawn from retired test material, and these are considerably more valuable than third-party imitations — the logical precision of GMAT critical reasoning and data sufficiency questions is difficult to replicate, and material that gets it slightly wrong teaches slightly wrong habits.',
          },
          {
            type: 'steps',
            title: 'How to use official material',
            items: [
              { text: 'Work official questions before third-party ones.', note: 'They define the standard of logical precision the test uses.' },
              { text: 'For every critical reasoning question, articulate the argument’s structure.', note: 'Premise, conclusion, assumption. Doing this explicitly is what builds the skill.' },
              { text: 'For data sufficiency, resist solving.', note: 'The question asks whether you could solve, not what the answer is. Solving wastes time and causes errors.' },
              { text: 'Keep an error log by question type and cause.', note: 'Adaptive scoring means recurring error types are expensive.' },
              { text: 'Take official practice tests under real conditions.', note: 'Adaptive practice tests are the only realistic score predictor.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CAT exam guide', to: '/entrance-exams/mba/cat/' },
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
              { label: 'Verbal ability study material', to: '/study-material/varc/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'GMAT mock tests — adaptive practice tests, section order rehearsal and review-and-edit strategy.',
        lead: [
          'Only an adaptive practice test predicts a GMAT score. A fixed-difficulty mock cannot, however good its questions.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The adaptive algorithm is central to how the GMAT scores you, which means a linear practice test — however well written — cannot tell you where you would land. Official adaptive practice tests are the only realistic predictor, and they should be spaced through the preparation rather than clustered at the end, since each one usefully redirects the weeks that follow.',
          },
          {
            type: 'list',
            title: 'What to practise beyond content',
            items: [
              { text: 'Your section order', note: 'chosen in advance and rehearsed. Most candidates find one order consistently better.' },
              { text: 'Bookmarking discipline', note: 'flagging uncertain questions as you go so review time is spent well.' },
              { text: 'Reserving time for review', note: 'the edit facility is useless if the clock has run out.' },
              { text: 'Pacing under adaptive difficulty', note: 'questions get harder as you succeed, so time per question naturally rises.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CAT mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'GMAT preparation strategy — building logical precision, mastering Data Insights and planning retakes.',
        lead: [
          'GMAT preparation is about precision rather than volume. The test rewards exactness of reasoning more than breadth of knowledge.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The GMAT tests a narrow set of abilities to an unusual depth. Its quantitative content stops at algebra; its verbal content is comprehension and argument analysis; its data section is about drawing conclusions from evidence. What makes it hard is the precision demanded — an answer that is nearly right is wrong, and the distractors are built specifically to catch approximate reasoning.',
          },
          {
            type: 'steps',
            title: 'A three to six month plan',
            items: [
              { text: 'Start with a diagnostic official practice test.', note: 'Adaptive, under real conditions. It sets the baseline everything else is measured against.' },
              { text: 'Months one to two — quantitative fundamentals.', note: 'Arithmetic and algebra to complete fluency. Geometry is not tested, so do not spend time there.' },
              { text: 'Months one to three — critical reasoning, systematically.', note: 'Articulating argument structure for every question. This is the highest-leverage verbal skill.' },
              { text: 'Months two to four — Data Insights as its own project.', note: 'Data sufficiency technique, multi-source reasoning and graphics interpretation each need separate practice.' },
              { text: 'Throughout — read demanding non-fiction daily.', note: 'GMAT reading comprehension passages are dense and unfamiliar by design.' },
              { text: 'Every three or four weeks — an adaptive practice test.', note: 'To redirect the weeks that follow.' },
              { text: 'Plan for a retake.', note: 'Scores are valid for years, sendable selectively, and retakes are permitted after a short interval.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates high scorers',
            items: [
              { text: 'Precision over speed', note: 'the distractors punish approximate reasoning specifically.' },
              { text: 'Not solving data sufficiency questions', note: 'the question asks whether you could, not what the answer is.' },
              { text: 'Official material first', note: 'third-party questions that miss the logical standard teach the wrong habits.' },
              { text: 'Using adaptive practice tests', note: 'the only realistic score predictor.' },
              { text: 'Using Focus Edition material', note: 'older material tests geometry and sentence correction, which the current format does not.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'GMAT study material — guidance on official guides, quantitative fundamentals and critical reasoning practice.',
        lead: [
          'Official GMAC material first. The notes here support the underlying quantitative and verbal fundamentals.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the GMAT specifically, official GMAC guides and question banks should be the core of your material, because the logical precision of the questions is what the test measures and third-party imitations frequently miss it. The notes on this site are useful for rebuilding quantitative fundamentals and general verbal ability, which the official material assumes rather than teaches.',
          },
          {
            type: 'links',
            title: 'Supporting notes',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Verbal ability and reading comprehension', to: '/study-material/varc/' },
              { label: 'Data interpretation and logical reasoning', to: '/study-material/dilr/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
            ],
          },
          {
            type: 'list',
            title: 'How to structure GMAT study',
            items: [
              'Official GMAC guides and question banks as the primary source.',
              'These notes for rebuilding arithmetic and algebra fundamentals, which the official material assumes.',
              'Daily reading of demanding non-fiction for comprehension speed.',
              'An error log by question type and cause, reviewed weekly.',
              'Adaptive practice tests every three or four weeks, not clustered at the end.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the GMAT Focus Edition pattern?',
        a: 'Three sections of forty-five minutes each — Quantitative Reasoning, Verbal Reasoning and Data Insights — taken in an order the candidate chooses, for a total of about two hours and fifteen minutes. The test is computer adaptive and scored on a 205 to 805 scale. Notably, the Focus Edition removed geometry from the quantitative section and sentence correction from the verbal section, and moved data sufficiency into the new Data Insights section.',
      },
      {
        q: 'What is Data Insights on the GMAT?',
        a: 'A scored section combining data sufficiency, multi-source reasoning, table analysis, graphics interpretation and two-part analysis. It tests the ability to synthesise information presented in several different formats at once, which is closer to actual managerial work than any other part of the test. Because it draws together question types that were previously scattered or unscored, it needs preparation as a project in its own right rather than as an extension of the quantitative section.',
      },
      {
        q: 'How does GMAT adaptive scoring work?',
        a: 'The difficulty of each question depends on how you have answered the previous ones, so the test converges on your ability level rather than presenting a fixed paper. Two practical consequences follow. Early questions carry disproportionate influence on where the algorithm places you, which makes a careless early error expensive. And because the sequence is adaptive, only an adaptive practice test can realistically predict your score — a linear mock, however well written, cannot.',
      },
      {
        q: 'What is the GMAT review and edit feature?',
        a: 'At the end of each section you may revisit and change a limited number of answers you have bookmarked along the way. It is a facility no Indian management entrance offers, and using it well requires two habits: bookmarking uncertain questions liberally as you go so you can find them quickly, and reserving time for the review, since the facility is worthless once the section clock has run out. Change an answer only when you have a specific reason — second-guessing without new insight generally makes things worse.',
      },
      {
        q: 'How is the GMAT different from CAT?',
        a: 'Almost entirely, apart from broad subject areas. The GMAT is adaptive rather than fixed, taken year-round rather than annually, valid for several years, retakeable after a short interval, and sendable to schools selectively — which gives candidates far more control over their record. Its content is narrower but tested more precisely: no geometry, no sentence correction, and critical reasoning examined on exact logical structure. CAT, by contrast, rewards breadth of problem-solving and set selection under severe sectional time pressure.',
      },
    ],
  },
]

export default mba
