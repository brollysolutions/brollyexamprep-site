/**
 * Law entrance exams — /entrance-exams/law/
 *
 * Two tests for the national law universities. Both moved away from testing
 * memorised legal knowledge towards testing comprehension of legal material,
 * which is the single most important thing a candidate can understand about
 * them — it changes what "preparing for law entrance" means entirely.
 */

const law = [
  /* ══════════════════════════════════════════════════════════════
     CLAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'clat',
    path: '/entrance-exams/law/clat/',
    name: 'CLAT',
    fullName: 'Common Law Admission Test',
    authority: 'Consortium of National Law Universities',
    official: 'consortiumofnlus.ac.in',
    seoTitle: 'CLAT 2026: Comprehension-Based Pattern, Sections & Strategy',
    metaDescription:
      'CLAT exam guide — the comprehension-based pattern across five sections, legal reasoning without prior legal knowledge, and preparation strategy.',
    lead: [
      'CLAT is the entrance test for the national law universities and is accepted by a wide range of other law schools. Its undergraduate paper covers five areas — English, current affairs including general knowledge, legal reasoning, logical reasoning and quantitative techniques — and every one of them is built on passages.',
      'That is the central fact about the modern CLAT. It does not ask you to recall legal principles; it gives you a passage containing them and asks you to apply them. A candidate who prepares by memorising law is preparing for an examination that no longer exists.',
    ],
    quickFacts: [
      ['Conducted by', 'The Consortium of National Law Universities'],
      ['Admits to', 'The national law universities and many other law schools'],
      ['Level', 'Class 12 for the undergraduate programme; a law degree for the postgraduate one'],
      ['Format', 'Comprehension-based across all five sections'],
      ['Marking', 'One mark for a correct answer, with a deduction for a wrong one'],
      ['Key skill', 'Reading speed and accurate application of given material'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CLAT is used for admission to the five-year integrated law programmes at the national law universities, and its postgraduate paper for LLM admission. It is conducted by the consortium of those universities, and admission follows from rank through a centralised counselling process.',
      },
      {
        type: 'p',
        text: 'The paper is entirely passage-based. Each section presents extracts — from journalism, legal writing, historical material or data — followed by questions that require reading and inference rather than recall. The quantitative section works the same way, presenting data in a passage and asking questions about it, rather than posing standalone problems.',
      },
      {
        type: 'list',
        title: 'The five sections',
        items: [
          { text: 'English Language', note: 'passages with questions on comprehension, inference, vocabulary in context and the author’s argument.' },
          { text: 'Current Affairs including General Knowledge', note: 'passages on recent developments, with questions extending beyond the passage into related knowledge.' },
          { text: 'Legal Reasoning', note: 'passages setting out legal principles or situations, with questions applying them. No prior legal knowledge is required.' },
          { text: 'Logical Reasoning', note: 'short argumentative passages with questions on assumptions, inferences, conclusions and argument structure.' },
          { text: 'Quantitative Techniques', note: 'data presented in passages or graphical form, with questions requiring basic mathematics up to class 10.' },
        ],
      },
      {
        type: 'note',
        title: 'No prior legal knowledge is required — but reading speed is',
        text: 'The legal reasoning section supplies whatever principles a question needs. What it does not supply is time: the paper is long, dense and read under pressure. The candidates who struggle are almost never those who lack legal knowledge; they are those who cannot read fast enough to reach the end.',
      },
    ],
    stages: [
      {
        name: 'CLAT undergraduate paper',
        mode: 'Objective, 2 hours',
        detail:
          'Comprehension-based questions across English language, current affairs with general knowledge, legal reasoning, logical reasoning and quantitative techniques. One mark per correct answer with a deduction for a wrong one.',
      },
      {
        name: 'CLAT postgraduate paper',
        mode: 'Objective, 2 hours',
        detail:
          'For LLM admission, comprising passages drawn from legal material with questions on constitutional law, jurisprudence and other core subjects of the law curriculum.',
      },
      {
        name: 'Counselling and admission',
        mode: 'Centralised',
        detail:
          'Admission to the participating universities is made through the consortium’s centralised counselling process on the basis of rank, category and choices filled.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CLAT syllabus — the five comprehension-based sections and what each actually tests.',
        lead: [
          'CLAT publishes no topic list in the conventional sense. What it publishes is a description of skills, and that description should be taken literally.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'English Language',
                'Passages of moderate length from contemporary and historically significant writing, with questions on the main idea, inference, the author’s point of view, the meaning of words in context, and summarising an argument. This is comprehension testing, not grammar testing — a distinction that surprises candidates arriving from other entrance exams.',
              ],
              [
                'Current Affairs including General Knowledge',
                'Passages drawn from news and journalistic sources on developments in India and the world, covering arts and culture, international affairs, and historical events of continuing significance. Questions relate to the passage but frequently extend beyond it, which means reading the news over months genuinely matters — the passage will not contain every answer.',
              ],
              [
                'Legal Reasoning',
                'Passages relating to legal matters, public policy or moral philosophical enquiries, followed by questions requiring the candidate to identify and apply the rules and principles set out. No prior knowledge of law is assumed, though general awareness of contemporary legal issues helps in reading the passages quickly.',
              ],
              [
                'Logical Reasoning',
                'Short passages containing arguments, with questions on recognising the argument and its premises and conclusion, identifying assumptions, drawing inferences, analysing patterns of reasoning, and applying reasoning to new situations. Closer to critical reasoning than to the puzzle-based logical reasoning of management entrances.',
              ],
              [
                'Quantitative Techniques',
                'Short sets of facts, propositions or numerical information presented in passages, graphs or other representations, with questions requiring the derivation of information and the application of mathematics at approximately class 10 level — ratio and proportion, percentage, averages, mensuration and basic statistics.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Read across those five descriptions and the common thread is unmistakable: every section is a reading task with a different flavour of question attached. That means the highest-return preparation for CLAT is not subject study at all — it is reading, daily, widely, and at increasing speed.',
          },
          {
            type: 'p',
            text: 'The single most useful consequence of a skills-based description rather than a topic list is that it tells you what cannot be crammed. A syllabus of topics can be finished in the final months; a description of reading and reasoning ability cannot be acquired that way at all. It has to be built over a long period, which is why a candidate who began reading seriously a year out is in a fundamentally different position from one who begins three months out, however hard the second works.',
          },
          {
            type: 'list',
            title: 'What the five sections have in common',
            items: [
              { text: 'Every section begins with a passage', note: 'even quantitative techniques, where the numbers arrive inside a set of facts or a short piece of prose rather than as a bare problem.' },
              { text: 'The answer is meant to be derivable from what is given', note: 'most obviously in legal reasoning, where the principle is supplied, but the same discipline applies across the paper.' },
              { text: 'Speed comes from reading, not from technique', note: 'there is no shortcut that substitutes for being able to take in a dense paragraph accurately at pace.' },
              { text: 'Outside knowledge helps least where candidates expect it to help most', note: 'legal knowledge in legal reasoning and general knowledge in the current affairs section are both less useful than reading the passage carefully.' },
            ],
          },
          {
            type: 'note',
            title: 'Current affairs questions reach beyond the passage',
            text: 'The section is passage-based, but the questions sometimes require knowledge the passage assumes rather than states — the background to a development, the institution involved, the term of art being used. That is the one place where a daily reading habit does more than reading skill alone, and it is why current affairs cannot be treated as a final-month subject.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CLAT exam pattern — the two-hour comprehension-based paper, section weighting, negative marking and postgraduate format.',
        lead: [
          'Two hours, a long paper of dense passages, and a deduction for wrong answers. Reading speed is the binding constraint.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Undergraduate paper structure. Question counts and section weights have varied — confirm in the current notification.',
            head: ['Section', 'Approximate share', 'Character'],
            rows: [
              ['English Language', 'Substantial', 'Comprehension and inference'],
              ['Current Affairs and General Knowledge', 'Substantial', 'Passage-based, extending beyond the passage'],
              ['Legal Reasoning', 'The largest section', 'Applying principles supplied in the passage'],
              ['Logical Reasoning', 'Substantial', 'Argument analysis rather than puzzles'],
              ['Quantitative Techniques', 'The smallest section', 'Class 10 mathematics from passages and data'],
            ],
          },
          {
            type: 'p',
            text: 'A deduction applies for wrong answers, which makes narrowing before guessing worthwhile. But the more consequential constraint is time: the paper is long enough that many candidates do not finish, and unread questions cost more than uncertain ones. That is why reading speed, rather than accuracy on any individual section, tends to determine outcomes.',
          },
          {
            type: 'list',
            title: 'Practical implications',
            items: [
              { text: 'Read the questions before the passage, sometimes', note: 'for data and legal reasoning sets, knowing what is asked can direct your reading usefully. Try both approaches in practice.' },
              { text: 'Do not re-read passages', note: 'a single careful read is faster than two hurried ones, and the paper does not allow both.' },
              { text: 'Quantitative is small', note: 'do not spend disproportionate time on the smallest section.' },
              { text: 'Legal reasoning is the largest', note: 'and it rewards the discipline of applying only what the passage says, not what you believe the law to be.' },
            ],
          },
          {
            type: 'note',
            title: 'The postgraduate paper is different',
            text: 'CLAT PG, for LLM admission, uses passages drawn from legal material and does assume knowledge of the core law curriculum — constitutional law, jurisprudence, contract, torts, criminal law and international law. Unlike the undergraduate paper, prior legal knowledge is genuinely required.',
          },
          {
            type: 'p',
            text: 'The binding constraint in this paper is not difficulty but volume of reading. A long paper of dense passages in two hours means that most candidates do not reach the end, and the ones who do are not necessarily the ones who understood the passages best — they are the ones who read them once, accurately, at pace. That is why analysing a mock by accuracy alone systematically misdiagnoses the problem.',
          },
          {
            type: 'steps',
            title: 'A workable approach to a passage-heavy paper',
            items: [
              { title: 'Read once, carefully, and commit', text: 'A single accurate read is faster than two hurried ones, and the paper does not give you time for both. The temptation to skim and return is what costs candidates the end of the paper.' },
              { title: 'Scan the questions first for data and legal sets', text: 'Knowing what is asked can direct your reading of a legal principle or a data set, which saves real time. For English and logical reasoning it usually does not.' },
              { title: 'Answer legal reasoning from the passage only', text: 'Even where you believe the actual law differs. The section tests application of a supplied principle, and importing outside knowledge is the most common source of confident wrong answers.' },
              { title: 'Keep quantitative in proportion', text: 'The smallest section, at class 10 level. It should not consume time the larger sections need.' },
            ],
          },
          {
            type: 'note',
            title: 'The postgraduate paper is a different examination',
            text: 'CLAT PG, for LLM admission, draws its passages from legal material and does assume substantive knowledge of law — which makes almost everything written about the undergraduate paper inapplicable to it. Candidates preparing for PG admission should work from the postgraduate syllabus and past papers specifically.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CLAT previous year papers — practising the comprehension format and building reading speed under time.',
        lead: [
          'Practise past papers strictly under two hours. CLAT is a reading endurance test, and untimed practice hides that entirely.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A candidate working through a CLAT paper without a clock will usually find it comfortable — the passages are readable, the questions fair, and no individual item is hard. Under two hours the same paper becomes a different experience. That gap is the whole difficulty of the examination, and only timed practice reveals it.',
          },
          {
            type: 'steps',
            title: 'How to work past papers',
            items: [
              { text: 'Always time the full paper.', note: 'Section-by-section practice hides the endurance problem that decides outcomes.' },
              { text: 'In legal reasoning, answer only from the passage.', note: 'Where your own view of the law differs from the principle given, the principle given wins. This discipline has to be practised.' },
              { text: 'Track how far you get.', note: 'If you are not finishing, reading speed is the priority over everything else.' },
              { text: 'For current affairs, note what the passage did not tell you.', note: 'Those gaps show what your reading habit needs to cover.' },
              { text: 'Practise a single careful read rather than skim-and-return.', note: 'The clock does not permit two passes.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'AILET exam guide', to: '/entrance-exams/law/ailet/' },
              { label: 'Legal reasoning study material', to: '/study-material/legal-reasoning/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'What to track across timed past papers',
            items: [
              { text: 'How far you got', note: 'the primary measurement. A score calculated over the questions you reached is not comparable with one calculated over the whole paper, and only the second number reflects your position.' },
              { text: 'Minutes per passage', note: 'tracked across papers, it should fall. If it does not, the reading habit is not yet producing the speed the paper needs.' },
              { text: 'Legal reasoning errors caused by outside knowledge', note: 'a distinctive category worth counting separately. Candidates who read about law recreationally are the most prone to it, which makes it a discipline problem rather than a knowledge one.' },
              { text: 'Current affairs questions the passage did not answer', note: 'these map directly onto gaps in your daily reading, and listing them tells you what to watch for over the following months.' },
            ],
          },
          {
            type: 'p',
            text: 'A candidate working a CLAT paper without a clock will usually find it manageable, conclude that their preparation is on track, and be surprised on the day. The passages are readable, the reasoning is fair, and none of the questions is individually hard. Everything about the difficulty of this paper lives in the two-hour limit, which means untimed practice does not merely under-measure your readiness — it measures something else entirely.',
          },
          {
            type: 'p',
            text: 'Practise the single careful read deliberately, because it is a habit rather than an insight. Most candidates default to skimming a passage, attempting the questions, and returning to hunt for details — a strategy that works comfortably in an untimed setting and fails in this paper. Reading once at a pace you can sustain, with enough attention that you do not need to go back, is trainable and it is the core skill this examination rewards.',
          },
          {
            type: 'note',
            title: 'Note where the paper assumes background',
            text: 'In the current affairs section particularly, a question may require knowing what an institution does or what a term means, without the passage explaining it. Keeping a list of those assumed items across several papers builds a targeted picture of the background knowledge this examination expects — far more efficiently than reading a general knowledge compendium.',
          },
        ],
      },
      'mock-tests': {
        description:
          'CLAT mock tests — full two-hour comprehension practice with analysis of reading speed and section coverage.',
        lead: [
          'The headline number in a CLAT mock is how much of the paper you reached. Everything else is secondary until that is solved.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Candidates routinely analyse their CLAT mocks by accuracy and conclude that they need to study more legal reasoning. Usually the real finding is in the coverage: twenty questions unread at the end, worth more than any accuracy improvement available. Fixing reading speed is less satisfying than studying a topic, and considerably more valuable.',
          },
          {
            type: 'list',
            title: 'What to analyse',
            items: [
              { text: 'Questions reached', note: 'the primary constraint. Solve this before anything else.' },
              { text: 'Time per passage', note: 'and whether it falls with practice. It should.' },
              { text: 'Legal reasoning errors from importing outside knowledge', note: 'a distinctive and very common error type in this section.' },
              { text: 'Current affairs questions the passage did not answer', note: 'they map directly onto what your daily reading is missing.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Legal reasoning study material', to: '/study-material/legal-reasoning/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'steps',
            title: 'Analysing a CLAT mock in the right order',
            items: [
              { title: 'Coverage first', text: 'How many questions did you reach? Until that number is close to the whole paper, every other diagnostic is being computed on a partial sample.' },
              { title: 'Then reading pace', text: 'Minutes per passage by section. It reveals which kind of passage is slowing you — usually one specific register rather than reading in general.' },
              { title: 'Then accuracy, by section', text: 'And within legal reasoning, split errors into misapplication of the principle and importation of outside knowledge.' },
              { title: 'Then the current affairs gaps', text: 'Which questions needed background you did not have, and what that tells you to read.' },
              { title: 'Fix one thing before the next mock', text: 'Coverage if it is short; otherwise the largest error category. A mock taken without an intervening change measures the same candidate again.' },
            ],
          },
          {
            type: 'p',
            text: 'The common misdiagnosis is worth spelling out. A candidate finishes a mock, sees weak legal reasoning accuracy, and resolves to study more legal reasoning — when the actual cause was reaching that section with fifteen minutes left and rushing it. Accuracy computed on rushed questions describes your pacing rather than your understanding, and the remedy for a pacing problem is reading practice rather than subject study.',
          },
          {
            type: 'note',
            title: 'Track coverage as a trend, not a single figure',
            text: 'Reading speed improves gradually and unevenly, so a single mock tells you little. Plotting how much of the paper you reached across eight or ten mocks shows whether the reading habit is working — and if the line is flat after two months of daily reading, the reading is probably too comfortable rather than insufficient.',
          },
        ],
      },
      preparation: {
        description:
          'CLAT preparation strategy — building reading speed, following current affairs and practising legal reasoning discipline.',
        lead: [
          'Read every day. That sentence is most of a CLAT preparation plan, and candidates consistently look for something more complicated.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'CLAT is a comprehension test in five costumes. English, legal reasoning, logical reasoning and current affairs are all reading tasks, and even the quantitative section presents its data in passages. A candidate who reads a newspaper and demanding long-form writing every day for a year, and practises applying principles precisely, has done most of what the examination rewards.',
          },
          {
            type: 'steps',
            title: 'A one-year plan',
            items: [
              { text: 'From day one — a newspaper daily, read properly.', note: 'Editorials and analysis, not headlines. It serves English, current affairs and legal reasoning together.' },
              { text: 'From day one — long-form reading beyond the news.', note: 'Essays, history, argument. Reading speed on unfamiliar material is what the paper tests.' },
              { text: 'Months one to three — legal reasoning technique.', note: 'Applying a given principle exactly, including when it conflicts with your intuition. This is a discipline, not knowledge.' },
              { text: 'Months two to four — logical reasoning as argument analysis.', note: 'Premises, conclusions, assumptions. Closer to critical reasoning than to puzzles.' },
              { text: 'Months three to five — quantitative techniques.', note: 'Class 10 mathematics, the smallest section. Cover it competently and move on.' },
              { text: 'From month four — full timed mocks, weekly.', note: 'With coverage tracked as the headline metric.' },
              { text: 'Final months — reading speed drills and mock analysis.', note: 'No new content; the gains at this stage are in pace and precision.' },
            ],
          },
          {
            type: 'list',
            title: 'The characteristic errors',
            items: [
              { text: 'Memorising legal provisions', note: 'the undergraduate paper supplies whatever principle it needs and tests application.' },
              { text: 'Practising untimed', note: 'which conceals the reading endurance problem that decides the exam.' },
              { text: 'Importing outside knowledge into legal reasoning', note: 'answer from the passage even when you believe the actual law differs.' },
              { text: 'Over-investing in quantitative techniques', note: 'the smallest section, at class 10 level.' },
              { text: 'Treating current affairs as a final-month subject', note: 'it is cumulative and passage questions reach beyond the passage.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Reading — the whole foundation',
                'A newspaper properly read, plus long-form writing from outside your comfort zone. It builds comprehension speed, vocabulary in context, current affairs background and tolerance for unfamiliar registers — which between them account for most of what the paper measures.',
              ],
              [
                'Legal reasoning — a technique, not a subject',
                'The discipline of applying a supplied principle exactly as given, including when it conflicts with what you believe the law to be. Built over a few months of daily passages, and unrelated to legal knowledge.',
              ],
              [
                'Logical reasoning — argument analysis',
                'Identifying premises, conclusions, assumptions and flaws in short passages, rather than the puzzles and arrangements that other entrance examinations set. Closer to the verbal reasoning in a management entrance than to conventional reasoning practice.',
              ],
              [
                'Quantitative techniques — proportionate effort',
                'Class 10 mathematics presented through passages and data. The smallest section, and the one where over-investment is most common among candidates with a science background.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The instruction to read every day sounds too simple to be a plan, and candidates consistently look past it for something more structured. But the paper is a comprehension test in five costumes, and the only thing that reliably improves comprehension speed across unfamiliar registers is sustained exposure to unfamiliar registers. A year of daily reading is worth more here than any quantity of question practice bolted on at the end.',
          },
          {
            type: 'note',
            title: 'Read outside your comfort zone deliberately',
            text: 'CLAT passages are drawn from writing on law, policy, philosophy, economics, history and culture. A candidate who reads only what they enjoy builds speed in one or two registers and meets the others cold. Choosing, each week, something you would not naturally pick up is a small discipline with a direct effect on the paper.',
          },
        ],
      },
      'study-material': {
        description:
          'CLAT study material — legal reasoning, English, current affairs and quantitative notes for a comprehension-based paper.',
        lead: [
          'Legal reasoning technique, comprehension practice and a daily reading habit. That is the material this examination actually needs.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The legal reasoning notes are worth working carefully, not to acquire legal knowledge but to build the habit of applying a stated principle exactly. Beyond that, the most valuable material for CLAT is not on any syllabus: a good newspaper read daily, and demanding writing read regularly enough that unfamiliar prose stops slowing you down.',
          },
          {
            type: 'links',
            title: 'Subject notes for CLAT',
            items: [
              { label: 'Legal reasoning notes', to: '/study-material/legal-reasoning/' },
              { label: 'English and reading comprehension', to: '/study-material/english/' },
              { label: 'Verbal ability and comprehension', to: '/study-material/varc/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine for a reading examination',
            items: [
              'A newspaper read properly — editorials and analysis, not headlines.',
              'One piece of demanding long-form writing, from outside your comfort zone.',
              'One legal reasoning passage practised, answering strictly from the principle given.',
              'One logical reasoning passage analysed for premises and conclusion.',
              'A weekly full-length timed paper, with coverage tracked.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'A newspaper — the primary text',
                'Read for editorials and analysis rather than for headlines. It supplies current affairs background, comprehension practice and argument analysis simultaneously, which no dedicated study material does.',
              ],
              [
                'Long-form writing — the range builder',
                'Essays, serious journalism and non-fiction across law, policy, philosophy and history. The point is breadth of register rather than coverage of topics, since the passages will come from somewhere you did not anticipate.',
              ],
              [
                'Legal reasoning passages — the technique drill',
                'One a day, answered strictly from the principle supplied. What is being built is a habit of disciplined application, which needs repetition rather than instruction.',
              ],
              [
                'Timed full papers — the measurement',
                'Weekly from the mid-point of your preparation, with coverage tracked as the headline number.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Legal knowledge is worth almost nothing for the undergraduate paper and can actively cost you marks. The section supplies whatever principle it needs and asks you to apply it — sometimes a principle that differs from the actual law, deliberately. A candidate who has read about law and answers from what they believe to be correct will get those questions wrong with complete confidence, which is why the discipline matters more than the knowledge.',
          },
          {
            type: 'note',
            title: 'Keep a vocabulary and background list from your reading',
            text: 'Words met in context, and institutions, terms and events the passages assumed you knew. Both come from the same daily reading and both feed the paper directly — the first into the English section, the second into current affairs. A running list revised weekly is the only study document this examination really needs beyond the reading itself.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CLAT exam pattern?',
        a: 'A two-hour objective paper that is entirely comprehension-based, covering five sections: English language, current affairs including general knowledge, legal reasoning, logical reasoning and quantitative techniques. Every section presents passages or data followed by questions requiring reading and inference rather than recall. One mark is awarded per correct answer with a deduction for a wrong one. Question counts and section weights have varied, so confirm them in the current notification.',
      },
      {
        q: 'Do I need to know law before taking CLAT?',
        a: 'Not for the undergraduate paper. The legal reasoning section supplies whatever principles a question requires, and tests whether you can apply them accurately — including when the stated principle conflicts with your intuition or with what you believe the actual law to be. Candidates who memorise legal provisions are preparing for an examination that no longer exists. CLAT PG, for LLM admission, is different and does assume knowledge of the core law curriculum.',
      },
      {
        q: 'What is the hardest part of CLAT?',
        a: 'Finishing it. The paper is long and dense, and a candidate working through it without a clock usually finds it comfortable — no individual question is hard. Under two hours it becomes a reading endurance test, and many candidates simply do not reach the end. That is why the headline metric in mock analysis should be how many questions you reached, and why reading speed is worth more preparation attention than any single section.',
      },
      {
        q: 'How should I prepare for CLAT current affairs?',
        a: 'By reading a newspaper properly every day for months rather than by revising a compilation at the end. The current affairs section is passage-based, but the questions frequently extend beyond what the passage tells you, so a candidate relying on the passage alone will lose marks. Reading daily also serves the English and legal reasoning sections at the same time, which makes it the single most efficient habit in a CLAT preparation.',
      },
      {
        q: 'How much mathematics is in CLAT?',
        a: 'The quantitative techniques section is the smallest in the paper, and the mathematics required goes to about class 10 level — ratio and proportion, percentage, averages, mensuration and basic statistics — applied to data presented in passages or graphical form. It should be covered competently and then left alone; over-investing in it at the expense of reading speed is a common misallocation.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     AILET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ailet',
    path: '/entrance-exams/law/ailet/',
    name: 'AILET',
    fullName: 'All India Law Entrance Test',
    authority: 'National Law University, Delhi',
    official: 'nationallawuniversitydelhi.in',
    seoTitle: 'AILET 2026: NLU Delhi Entrance Pattern, Sections & Strategy',
    metaDescription:
      'AILET exam guide — NLU Delhi’s own entrance test, three-section pattern, how it differs from CLAT, and preparation strategy.',
    lead: [
      'AILET is the entrance test for National Law University, Delhi, which does not participate in CLAT and conducts its own admission process. It is a shorter, more concentrated paper than CLAT, built around three sections rather than five, and it competes for a small number of seats at a single institution.',
      'Because it is one university with limited seats, the competition is intense, and because it is a separate examination on a separate date, most serious law aspirants sit both. The preparation overlaps almost entirely — the differences are in emphasis and pace rather than in content.',
    ],
    quickFacts: [
      ['Conducted by', 'National Law University, Delhi'],
      ['Admits to', 'NLU Delhi only — it does not participate in CLAT'],
      ['Level', 'Class 12 for the undergraduate programme'],
      ['Structure', 'Three sections — English, current affairs and general knowledge, and reasoning'],
      ['Marking', 'Negative marking applies'],
      ['Relationship to CLAT', 'Separate examination, separate date, heavily overlapping preparation'],
    ],
    overview: [
      {
        type: 'p',
        text: 'National Law University Delhi conducts AILET for admission to its five-year integrated law programme and to its postgraduate and doctoral programmes. It sits outside the CLAT consortium, which means candidates seeking admission there must sit this examination specifically, on its own date, with its own application.',
      },
      {
        type: 'p',
        text: 'The undergraduate paper is organised into three sections — English language, current affairs and general knowledge, and logical reasoning — which is a narrower structure than CLAT’s five. Like CLAT, it has moved towards comprehension-based questioning, though it has historically retained more direct questioning in the general knowledge section.',
      },
      {
        type: 'list',
        title: 'How AILET compares with CLAT',
        items: [
          { text: 'Three sections rather than five', note: 'with legal reasoning and quantitative techniques not appearing as separate sections in the current structure.' },
          { text: 'A single university', note: 'so a smaller number of seats and a correspondingly sharp cutoff.' },
          { text: 'More direct general knowledge questioning', note: 'historically less exclusively passage-based than CLAT’s current affairs section.' },
          { text: 'A separate date and application', note: 'which makes sitting both entirely practical.' },
        ],
      },
      {
        type: 'note',
        title: 'Confirm the current section structure',
        text: 'AILET has revised its paper structure more than once, including which sections appear and how they are weighted. Because that determines whether you need to prepare separately for a legal reasoning or mathematics component, read the current prospectus rather than relying on a description of an earlier format.',
      },
    ],
    stages: [
      {
        name: 'AILET undergraduate paper',
        mode: 'Objective, about 2 hours',
        detail:
          'English language, current affairs and general knowledge, and logical reasoning, in a structure NLU Delhi sets each cycle. Negative marking applies.',
      },
      {
        name: 'AILET postgraduate paper',
        mode: 'Objective and written',
        detail:
          'For LLM admission, covering the core subjects of the law curriculum, with a format set by the university.',
      },
      {
        name: 'Admission',
        mode: 'University-conducted',
        detail:
          'Admission to NLU Delhi is made from the AILET merit list through the university’s own counselling process, separately from the CLAT consortium counselling.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'AILET syllabus — English, current affairs and general knowledge, and logical reasoning for the undergraduate paper.',
        lead: [
          'Three sections in the current structure, and the general knowledge section is the one that most differentiates AILET preparation from CLAT preparation.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'English Language',
                'Reading comprehension passages with questions on the main idea, inference, tone, the author’s argument and the meaning of words in context; along with vocabulary, sentence arrangement and language usage. Passages tend to be demanding, and the section rewards a genuine reading habit rather than technique.',
              ],
              [
                'Current Affairs and General Knowledge',
                'National and international developments across politics, economy, international relations, sports, awards and culture, together with static general knowledge covering history, geography, polity, science and important institutions. Historically more directly questioned than CLAT’s passage-based current affairs section, which makes it more demanding of actual knowledge rather than reading.',
              ],
              [
                'Logical Reasoning',
                'Critical reasoning covering arguments, assumptions, inferences and conclusions; analytical reasoning through arrangements, sequences and relationships; and pattern-based reasoning. A mix of the argument analysis CLAT favours and the more structured reasoning of other entrance examinations.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The general knowledge section is where AILET most rewards preparation beyond a CLAT plan. Because it questions more directly and includes static knowledge, a candidate relying solely on reading passages carefully will find questions that simply require knowing something — and knowing it cannot be deduced from the paper.',
          },
          {
            type: 'list',
            title: 'How AILET differs from CLAT in what it asks',
            items: [
              { text: 'General knowledge is asked directly', note: 'not only through a passage. That means static knowledge — history, polity, institutions, awards, geography — carries weight in a way it does not in a purely passage-based section.' },
              { text: 'The English passages tend to be denser', note: 'drawn from demanding writing and asking about tone, inference and the author’s method rather than located facts.' },
              { text: 'Logical reasoning spans two styles', note: 'critical reasoning about arguments and analytical reasoning through arrangements and puzzles. A CLAT preparation covers the first thoroughly and the second lightly.' },
              { text: 'Fewer sections, so each carries more', note: 'a three-section paper concentrates the weight, which means a weak section has less to hide behind than in a five-section one.' },
            ],
          },
          {
            type: 'p',
            text: 'The practical planning point is that a CLAT preparation is the right base and is not sufficient on its own. The reading habit, the comprehension work and the critical reasoning transfer directly; what has to be added is a systematic static general knowledge effort and some analytical reasoning practice. Both are finite and both are commonly skipped by candidates who assume one preparation covers both examinations completely.',
          },
          {
            type: 'note',
            title: 'The structure has been revised more than once',
            text: 'AILET has changed its section composition between cycles, including the treatment of legal reasoning and mathematics. Preparing to a format described in an older guide is a real risk here, so read the current prospectus and build the plan from that rather than from a general account of the examination.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'AILET exam pattern — the three-section structure, negative marking, and how it differs in pace from CLAT.',
        lead: [
          'A shorter paper than CLAT, for fewer seats. The concentration cuts both ways.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Undergraduate paper structure. Section composition and weighting have been revised — confirm in the current prospectus.',
            head: ['Section', 'Character', 'Preparation emphasis'],
            rows: [
              ['English Language', 'Demanding comprehension passages', 'Daily reading of difficult material'],
              ['Current Affairs and General Knowledge', 'Direct questioning plus static knowledge', 'Sustained current affairs plus static revision'],
              ['Logical Reasoning', 'Argument analysis and analytical reasoning', 'Regular practice across both types'],
            ],
          },
          {
            type: 'p',
            text: 'Negative marking applies, so narrowing before guessing is worthwhile. The pace pressure is generally less severe than CLAT’s, which means AILET tends to reward depth of knowledge and precision more, and pure reading speed slightly less. That is a meaningful difference for candidates who are strong readers but weaker on retained knowledge, and for those in the opposite position.',
          },
          {
            type: 'list',
            title: 'Planning around a single-university exam',
            items: [
              { text: 'Few seats, sharp cutoff', note: 'a single institution means the competition is concentrated.' },
              { text: 'Separate date and application', note: 'so sitting both AILET and CLAT is entirely practical and usually advisable.' },
              { text: 'General knowledge matters more here', note: 'the section rewards knowledge rather than only reading.' },
              { text: 'Structure has changed', note: 'confirm the current sections rather than preparing to a previous format.' },
            ],
          },
          {
            type: 'note',
            title: 'Read the current prospectus',
            text: 'Section composition, question counts, duration and the marking scheme have all been revised across cycles. Because AILET is conducted by a single university rather than a consortium, changes are announced in its own prospectus rather than through a common notification.',
          },
          {
            type: 'p',
            text: 'A single university with a small intake produces a particular kind of competition. The cutoff is sharp because the seats are few, and the candidate pool is largely the same one sitting CLAT — which means the marginal advantage comes from whatever AILET asks that CLAT does not. For most candidates that is the general knowledge section, and it is the most under-prepared component of the paper for exactly that reason.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why the pace pressure is different',
                'A shorter paper with fewer sections generally allows more time per passage than CLAT does. That shifts the binding constraint from reading speed towards accuracy and knowledge, which changes what your practice should be aimed at.',
              ],
              [
                'Why sitting both is standard',
                'The dates differ, the applications are separate, and the preparation overlaps heavily. There is very little reason not to sit both, and a candidate who prepares for one has already done most of the work for the other.',
              ],
              [
                'Why the application is separate',
                'NLU Delhi is outside the CLAT consortium entirely, which means a separate form, a separate fee and a separate deadline. Candidates occasionally prepare for AILET and miss the application window because they were tracking the consortium calendar.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Confirm the marking scheme and section counts',
            text: 'Question counts, duration, section composition and the deduction rate have all been revised across cycles. Since the attempt strategy depends on the deduction and the time allocation depends on the section counts, these are strategic facts rather than administrative detail — read the current prospectus before your final mocks.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'AILET previous year papers — calibrating the general knowledge depth and the reading difficulty.',
        lead: [
          'Past AILET papers show two things a CLAT preparation will not: how directly general knowledge is asked, and how demanding the English passages are.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A candidate who has prepared for CLAT and then works an AILET paper usually discovers the same two gaps. The general knowledge questions ask things rather than supplying them, and the English passages are denser. Both are addressable, but only if identified early enough — which is an argument for working an AILET paper well before the examination rather than in the final fortnight.',
          },
          {
            type: 'steps',
            title: 'How to use them',
            items: [
              { text: 'Work an AILET paper early in your preparation.', note: 'To find the general knowledge and reading gaps while there is time.' },
              { text: 'Build a static general knowledge list from past papers.', note: 'History, polity, institutions, awards. The themes recur.' },
              { text: 'Note the reading difficulty of the English passages.', note: 'If they slow you down, the fix is reading harder material daily.' },
              { text: 'Practise with the deduction applied.', note: 'To calibrate guessing.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CLAT exam guide', to: '/entrance-exams/law/clat/' },
              { label: 'Legal reasoning study material', to: '/study-material/legal-reasoning/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'The static general knowledge themes worth extracting',
            items: [
              { text: 'Indian polity and constitutional basics', note: 'institutions, offices, articles and the structure of government — asked directly rather than through a passage.' },
              { text: 'Modern Indian history and the freedom movement', note: 'a stable, finite and heavily recycled body of material across law and civil services entrances alike.' },
              { text: 'International organisations and agreements', note: 'their functions, memberships and headquarters, which recur and are covered by almost no reading habit alone.' },
              { text: 'Awards, appointments, sports and culture', note: 'the conventional static general knowledge pool, small enough to build as a revision sheet.' },
            ],
          },
          {
            type: 'p',
            text: 'Building that list from past papers rather than from a general knowledge book is what makes it manageable. A general compendium is far broader than this section requires and cannot be revised often; a list drawn from three or four years of AILET papers is short, targeted and can be re-read weekly — which is what a recall-based section actually needs.',
          },
          {
            type: 'p',
            text: 'Work an AILET paper early rather than at the end of your preparation. A candidate who has prepared for CLAT and then sits one usually discovers the same two gaps in the same order — direct general knowledge questions they cannot answer, and English passages denser than the ones they have practised on. Finding that in month two allows the preparation to be adjusted; finding it in the final fortnight does not.',
          },
          {
            type: 'note',
            title: 'Practise with the deduction applied',
            text: 'Negative marking applies, and the guessing threshold it implies should be a habit rather than a calculation made in the hall. Working past papers under the correct marking from the beginning is what makes the discipline automatic — particularly in the general knowledge section, where the temptation to guess on half-remembered facts is strongest.',
          },
        ],
      },
      'mock-tests': {
        description:
          'AILET mock tests — full-length practice with attention to general knowledge accuracy and reading pace.',
        lead: [
          'Practise AILET separately from CLAT at least a few times. The emphasis differs enough to matter.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Most candidates sit both examinations and prepare once. That is sensible, but taking only CLAT-format mocks leaves the AILET-specific weaknesses invisible — particularly in general knowledge, where CLAT’s passage-based approach cushions gaps that AILET’s more direct questioning exposes.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'General knowledge accuracy', note: 'the section that most differentiates AILET from CLAT performance.' },
              { text: 'Reading pace on dense passages', note: 'AILET English passages tend to be demanding.' },
              { text: 'Logical reasoning across both question types', note: 'argument analysis and analytical reasoning both appear.' },
              { text: 'Guessing outcomes under the deduction', note: 'as in any negatively marked paper.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Current affairs', to: '/current-affairs/' },
              { label: 'Legal reasoning study material', to: '/study-material/legal-reasoning/' },
            ],
          },
          {
            type: 'steps',
            title: 'What to check in an AILET mock specifically',
            items: [
              { title: 'General knowledge accuracy, first', text: 'The section that most differentiates AILET from CLAT performance, and the one a CLAT-format mock does not test in the same way.' },
              { title: 'Reading pace on the denser passages', text: 'AILET English tends to be demanding. Time per passage is worth tracking even though the overall pace pressure is lower than CLAT’s.' },
              { title: 'Logical reasoning across both styles', text: 'Score critical reasoning and analytical reasoning separately. Candidates trained on CLAT are usually strong in the first and untested in the second.' },
              { title: 'Guessing outcomes under the deduction', text: 'Especially in general knowledge, where uncertain answers cluster.' },
              { title: 'Whether errors are knowledge or reading', text: 'In a paper with less time pressure than CLAT, a reading error is harder to excuse and easier to fix.' },
            ],
          },
          {
            type: 'p',
            text: 'Taking only CLAT-format mocks is the standard error among candidates preparing for both, and it is comfortable precisely because CLAT mocks cushion the gaps AILET exposes. A five-section passage-based paper never tests direct recall, so a candidate can practise for months without discovering that their static general knowledge is thin. Alternating formats in the final two months prevents that.',
          },
          {
            type: 'note',
            title: 'Alternate the two formats rather than running two schedules',
            text: 'One mock schedule with alternating formats gives you exposure to both papers without doubling the time commitment. The underlying skills are shared, and what alternating adds is familiarity with two sets of section conventions — which is exactly the marginal thing that separates candidates sitting both.',
          },
          {
            type: 'p',
            text: 'Because AILET allows more time per passage than CLAT does, an error in this paper is harder to attribute to pacing and easier to attribute to reading or to knowledge — which makes the analysis cleaner. If you misread a passage here, you misread it with time available, and the fix is attention rather than speed. That is a more uncomfortable finding than running out of time, and a more actionable one.',
          },
        ],
      },
      preparation: {
        description:
          'AILET preparation — one plan covering both AILET and CLAT, with the general knowledge depth AILET adds.',
        lead: [
          'Prepare once for both examinations, and add static general knowledge for AILET specifically.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Sitting both AILET and CLAT is the norm and the sensible course, since the dates differ and the preparation overlaps heavily. The addition AILET requires is depth of general knowledge — both current affairs retained over months and a body of static knowledge that CLAT’s passage-based format does not demand in the same way.',
          },
          {
            type: 'steps',
            title: 'A combined plan',
            items: [
              { text: 'From day one — a newspaper daily, read properly.', note: 'Serving English, current affairs and reading speed for both examinations.' },
              { text: 'From day one — demanding long-form reading.', note: 'AILET English passages reward it particularly.' },
              { text: 'From month two — static general knowledge, systematically.', note: 'History, polity, geography, institutions, awards. The AILET-specific addition.' },
              { text: 'Months two to four — logical reasoning across both styles.', note: 'Argument analysis for both papers, analytical reasoning for AILET.' },
              { text: 'Months three to five — legal reasoning technique for CLAT.', note: 'Which also helps with careful reading generally.' },
              { text: 'From month four — mocks in both formats.', note: 'At least some AILET-specific, to expose the general knowledge gaps.' },
              { text: 'Apply to both separately.', note: 'Different applications, different dates, different processes.' },
            ],
          },
          {
            type: 'list',
            title: 'What AILET candidates miss',
            items: [
              { text: 'Static general knowledge', note: 'the clearest difference from a CLAT-only preparation.' },
              { text: 'Practising only CLAT-format mocks', note: 'which cushion the gaps AILET exposes.' },
              { text: 'Assuming the structure is unchanged', note: 'AILET has revised its sections more than once.' },
              { text: 'Missing the separate application', note: 'NLU Delhi is outside the CLAT consortium entirely.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The shared base — most of the work',
                'Daily reading, comprehension practice, critical reasoning and the current affairs habit. Prepared once, it serves both examinations and accounts for the large majority of each.',
              ],
              [
                'Static general knowledge — the AILET addition',
                'Polity, modern history, international organisations, awards and culture, built as a revision sheet from past papers and revised weekly. Twenty minutes a day, cumulative, and the clearest differentiator.',
              ],
              [
                'Analytical reasoning — the second addition',
                'Arrangements and puzzles alongside the argument analysis a CLAT preparation builds. Finite, mechanical and quick to acquire with regular practice.',
              ],
              [
                'Two applications, two calendars',
                'Separate forms, fees and deadlines. An administrative matter that has cost prepared candidates an attempt.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Because NLU Delhi sits outside the consortium, a candidate has to track two admission processes rather than one — two application windows, two examination dates and two counselling procedures. None of that is difficult, and all of it is easy to overlook when the preparation itself is shared. Putting both calendars in one place at the start of the year is a small step that removes an entirely avoidable failure.',
          },
          {
            type: 'note',
            title: 'Start static general knowledge in month two, not month six',
            text: 'It is cumulative, it responds to short daily revision rather than to intensive study, and it is the component most likely to be deferred because the reading habit feels like it should cover it. It does not — a newspaper builds current affairs, not the static pool AILET draws on, and those are different bodies of material.',
          },
        ],
      },
      'study-material': {
        description:
          'AILET study material — English, general knowledge, polity and reasoning notes for NLU Delhi’s entrance.',
        lead: [
          'The same reading-centred material as CLAT, with general knowledge given considerably more weight.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general knowledge and polity notes deserve more attention for AILET than for CLAT, because the section asks directly rather than supplying context in a passage. Combined with a daily newspaper habit, they cover the section that most often separates candidates who prepared only for CLAT from those who prepared for both.',
          },
          {
            type: 'links',
            title: 'Subject notes for AILET',
            items: [
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'English and reading comprehension', to: '/study-material/english/' },
              { label: 'Legal reasoning notes', to: '/study-material/legal-reasoning/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'History notes', to: '/study-material/history/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A routine covering both law entrances',
            items: [
              'A newspaper daily, read for argument rather than headlines.',
              'One demanding long-form piece, from outside your usual reading.',
              'Twenty minutes of static general knowledge revision — the AILET-specific addition.',
              'One legal reasoning and one logical reasoning passage practised.',
              'Weekly full-length mocks, alternating between the two formats.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'General knowledge and polity notes — weighted up',
                'The clearest difference from a CLAT reading list. Kept as themed sheets rather than as continuous reading, so that they can be revised in minutes and therefore actually will be.',
              ],
              [
                'A newspaper and long-form reading — the shared base',
                'Serving comprehension, current affairs and argument analysis across both examinations. The same habit, unchanged.',
              ],
              [
                'Reasoning practice across both styles',
                'Critical reasoning for arguments and analytical reasoning for arrangements. The second is the one a CLAT-oriented preparation under-supplies.',
              ],
              [
                'Legal reasoning material — for CLAT, and useful here',
                'Where AILET includes legal aptitude in a given cycle it follows a similar logic, and the discipline of applying a supplied principle transfers regardless.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The static general knowledge sheet is the one document worth building specifically for this examination. Drawn from past papers, organised by theme, and revised weekly, it covers a section that direct questioning makes decisive and that no amount of reading for comprehension will supply. Twenty minutes a day against a short, targeted list beats hours spent with a general knowledge compendium.',
          },
          {
            type: 'note',
            title: 'One reading list, two revision sheets',
            text: 'The efficient shape of a combined law entrance preparation is a single reading habit serving both papers, with two short revision documents on top — a vocabulary and background list from your reading, and a static general knowledge sheet for AILET. Everything else in this preparation is practice rather than material.',
          },
          {
            type: 'p',
            text: 'On sequencing across a year: keep the reading habit running from the first week, since it is the slowest component to build and it serves both examinations. Add the static general knowledge sheet in the second month, because it is cumulative and needs months of short daily passes rather than a concentrated block. Bring in analytical reasoning practice around the same point, as a short finite project. Then give the final two months to alternating full-length mocks in both formats, with the general knowledge sheet revised weekly throughout. That order puts the slowest-building components first and leaves the finishable ones for when time is short.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the AILET exam pattern?',
        a: 'An objective paper of about two hours organised into three sections — English language, current affairs and general knowledge, and logical reasoning — with negative marking. National Law University Delhi sets the structure itself and has revised it more than once, including which sections appear and how they are weighted, so confirm the current composition in the university’s prospectus rather than relying on a description of an earlier format.',
      },
      {
        q: 'How is AILET different from CLAT?',
        a: 'AILET is conducted by NLU Delhi alone, which does not participate in the CLAT consortium, so it has its own date, application and counselling. Its paper has three sections rather than five, and its general knowledge section historically questions more directly and includes static knowledge, where CLAT’s current affairs section is passage-based. The pace pressure is generally less severe than CLAT’s, which means AILET rewards retained knowledge and precision somewhat more, and pure reading speed somewhat less.',
      },
      {
        q: 'Should I take both CLAT and AILET?',
        a: 'Most serious law aspirants do, and it is sensible. The examinations are on different dates with separate applications, and the preparation overlaps almost entirely — daily reading, comprehension practice, current affairs and logical reasoning serve both. The addition AILET requires is a body of static general knowledge, which CLAT’s passage-based format does not demand in the same way, and which is worth building from month two rather than in the final fortnight.',
      },
      {
        q: 'Is legal reasoning tested in AILET?',
        a: 'The current structure organises the paper into English, current affairs and general knowledge, and logical reasoning, rather than carrying legal reasoning as a separate section as CLAT does. However, AILET has revised its structure more than once, so confirm the sections in the current prospectus. In any case, the discipline that legal reasoning practice builds — applying a stated principle precisely rather than importing your own view — serves the careful reading that every section of this paper rewards.',
      },
      {
        q: 'How competitive is AILET?',
        a: 'Highly, because it fills seats at a single institution rather than across a consortium of universities. That concentration means the cutoff is sharp and the margin for error small. It also means the examination is worth preparing for specifically rather than treating as a CLAT rehearsal — particularly in the general knowledge section, where a CLAT-only preparation leaves the clearest gap.',
      },
    ],
  },
]

export default law
