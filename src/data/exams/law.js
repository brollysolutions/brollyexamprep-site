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
