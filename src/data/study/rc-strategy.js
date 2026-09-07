/**
 * Reading Comprehension for VARC —
 * /study-material/varc/rc-strategy/
 *
 * Method rather than content: how to read a CAT passage, how each question
 * type should be attacked, and how to eliminate options. Written for the
 * management entrance format, which differs sharply from banking RC.
 */
export default {
  subject: 'varc',
  subjectName: 'VARC',
  slug: 'rc-strategy',
  title: 'Reading Comprehension Strategy',
  seoTitle: 'CAT Reading Comprehension Strategy | VARC Method, Passages & Practice',
  metaDescription:
    'Complete reading comprehension strategy for CAT, XAT and other management entrance exams — the VARC format, how to read a passage.',
  readMinutes: 22,
  lead: [
    'Reading comprehension is the largest part of the CAT verbal section and the part candidates most often try to shortcut. The shortcuts do not work: skimming for keywords fails on a paper whose wrong options are built from exactly the words the passage uses, and where the right answer is usually a restatement of an idea rather than a repetition of a phrase.',
    'What does work is a deliberate method — read once for structure, answer from understanding, and eliminate options on specific grounds rather than by feel. This page sets that method out, names the four things that make a wrong option wrong, and is honest about the one part of the preparation that cannot be compressed: the reading habit itself.',
  ],

  weightage: [
    { exam: 'CAT VARC section', count: '16 questions across 4 passages', note: 'Roughly two-thirds of the verbal section. The exact split has changed between years and should be checked against the current pattern.' },
    { exam: 'XAT Verbal and Logical Ability', count: '4–6 RC questions', note: 'XAT passages are often shorter but denser, and the section includes critical reasoning.' },
    { exam: 'GMAT and GRE Verbal', count: 'A substantial share', note: 'The method transfers almost unchanged, though GMAT passages are shorter.' },
    { exam: 'CMAT / SNAP / NMAT', count: '3–5 passages', note: 'Generally easier passages with more direct questions than CAT.' },
    { exam: 'Banking and SSC English', count: '5–10 questions', note: 'A different game — see the separate English reading comprehension page for that format.' },
  ],

  contents: [
    { icon: 'doc', title: 'The section format', sub: 'What VARC actually contains', href: '#format' },
    { icon: 'search', title: 'How to read the passage', sub: 'One pass, for structure', href: '#reading' },
    { icon: 'layers', title: 'Question types', sub: 'Five kinds and their methods', href: '#types' },
    { icon: 'target', title: 'Option elimination', sub: 'The four wrong-answer patterns', href: '#options' },
    { icon: 'book', title: 'Passage subjects', sub: 'What CAT draws on', href: '#subjects' },
    { icon: 'clock', title: 'Timing and selection', sub: 'Which passage to leave', href: '#timing' },
    { icon: 'chart', title: 'Building the habit', sub: 'The long preparation', href: '#habit' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'format',
      heading: 'The section format',
      eyebrow: 'What VARC actually contains',
      intro:
        'Verbal Ability and Reading Comprehension is the first of CAT\'s three sections, and it is unusual among Indian entrance papers in testing almost no grammar or vocabulary directly.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'What is and is not tested',
              'Reading comprehension dominates. The non-RC questions are para jumbles, para summary and the odd sentence out — all of which test the same skill of following an argument. There are no direct grammar questions, no fill-in-the-blanks and no synonym-antonym questions, which is the largest single difference from banking and SSC English. Vocabulary matters only as far as it lets you read the passage.',
            ],
            [
              'Marking',
              'Multiple-choice questions carry three marks for a correct answer and a penalty of one for a wrong one. Non-MCQ questions, where the answer is typed in, carry no negative marking — which is why the para jumbles and odd-one-out questions, usually in that format, should never be left blank. The exact composition has changed between years, so verify the current pattern before your attempt.',
            ],
            [
              'How it differs from banking RC',
              'Banking passages are longer but simpler, and most questions have a locatable answer in the text — a fact, a synonym, a stated reason. CAT passages are shorter, denser and often deliberately unresolved, and the questions ask what the author would agree with, what the passage implies, or which option best captures the central idea. Scanning works for the first; only understanding works for the second.',
            ],
            [
              'The scoring reality',
              'Because of sectional timing and normalisation, VARC percentiles are compressed: a small number of additional correct answers moves the percentile a great deal. That makes accuracy far more valuable than volume — a candidate who attempts twelve questions with ten correct usually outscores one who attempts twenty with twelve correct, because of the negative marking on the eight wrong ones.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'reading',
      heading: 'How to read the passage',
      eyebrow: 'One pass, for structure',
      intro:
        'The single most consequential decision in this section is how you read. Two habits carried over from school reading — reading for facts, and re-reading whenever comprehension slips — both cost more time than they save.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Read the passage before the questions',
              'The alternative — reading the questions first and then hunting — works for banking RC, where answers are locatable, and fails for CAT, where most questions require the whole argument. Hunting also makes you read the passage several times in fragments, which takes longer than one attentive pass.',
            ],
            [
              'Read once, for structure not for detail',
              'Ask of each paragraph only: what is this doing? Introducing a claim, giving evidence, raising an objection, conceding a point, drawing a conclusion. If you can say what each paragraph does, you can find any detail again in seconds. If you have absorbed the details but not the structure, you will have to reread for every question.',
            ],
            [
              'Follow the connectives',
              'The words that signal the shape of an argument are more important than the content words. "However", "yet" and "nevertheless" mark a reversal, and the author\'s real position is almost always after the reversal, not before it. "Therefore" and "thus" mark a conclusion. "For instance" marks evidence, which is rarely the answer to a main-idea question. Marking these as you read is faster than underlining nouns.',
            ],
            [
              'Locate the author',
              'A very large proportion of CAT questions turn on the author\'s own position — what they would agree with, what tone they take, what they are criticising. Passages often present two or three positions and endorse one. Ask explicitly, at the end of the pass: whose side is the author on, and how strongly? If you cannot answer that, you are not ready for the questions.',
            ],
            [
              'Do not stop when you lose the thread',
              'Comprehension is often restored by what comes next. Stopping to reread a difficult sentence breaks the momentum and usually does not help, because the difficulty is frequently resolved in the following sentence. Read to the end of the paragraph, then decide whether the passage still makes sense.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'What not to do',
          text:
            'Do not underline heavily — you will underline everything and gain nothing. Do not take notes; there is no time and the passage is on screen. Do not translate mentally into another language; it doubles the time. And do not skim: CAT passages are short enough to read properly, and the wrong options are constructed specifically to punish skim-readers who recognise a phrase without registering what was said about it.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'types',
      heading: 'Question types',
      eyebrow: 'Five kinds and their methods',
      intro:
        'Almost every RC question falls into one of five types, and each has a method. Identifying the type before looking at the options is worth several marks a paper.',
      blocks: [
        {
          type: 'table',
          caption: 'The five question types',
          head: ['Type', 'How it is worded', 'Method'],
          rows: [
            ['Main idea or central theme', '"The passage is primarily concerned with…", "The main purpose of the passage is…"', 'Ask what the whole passage does, not what its most striking sentence says. The right answer covers the entire passage; wrong options are usually true statements about one paragraph only.'],
            ['Inference', '"It can be inferred from the passage that…", "The author would most likely agree that…"', 'The answer is not stated but must follow necessarily from what is stated. Anything requiring outside knowledge or an extra assumption is wrong, however plausible.'],
            ['Specific detail', '"According to the passage…", "The author mentions X in order to…"', 'The answer is in the text. Locate it and read the surrounding two sentences; the trap is an option that quotes the passage accurately but answers a different question.'],
            ['Tone or attitude', '"The tone of the passage is best described as…"', 'Distinguish critical from dismissive, sceptical from hostile, appreciative from laudatory. Extreme tone words are almost always wrong, because academic prose rarely reaches them.'],
            ['Structure or function', '"The second paragraph serves to…", "Which of the following best describes the organisation…"', 'Answered from the structural reading described above. If you noted what each paragraph does, this type takes seconds.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why inference questions are the hardest',
              'Because the correct answer is deliberately understated and the attractive wrong answer overstates. If the passage says a policy had mixed results, the answer "the policy was partly successful" is right and "the policy failed" is wrong, even though the second feels like the conclusion the author is heading towards. Inference means what must follow, not what probably follows.',
            ],
            [
              'The "in order to" question',
              'A specific form of the detail question, asking why the author mentioned something rather than what was said. The answer is almost always about the argument: to illustrate a claim, to anticipate an objection, to introduce a contrast. Options describing the content of the example rather than its purpose are wrong by construction.',
            ],
            [
              'Except and Not questions',
              'Where four options are supported by the passage and one is not, the work is to verify four rather than to find one. These take longer than any other type and are worth the same marks, so they are the first candidates for skipping when time is short.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'options',
      heading: 'Option elimination',
      eyebrow: 'The four wrong-answer patterns',
      intro:
        'In a well-set paper the wrong options are not random. Four patterns account for nearly all of them, and learning to name the fault is what converts a guess into an elimination.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Too extreme',
              'An option that says "always", "never", "proves", "impossible" or "the only" when the passage said "often", "tends to" or "suggests". Academic prose is hedged, so an unhedged option is usually a distortion. This is the single commonest fault, and scanning the options for absolute words before reading them fully will often eliminate two immediately.',
            ],
            [
              'Out of scope',
              'An option that is entirely reasonable and simply not discussed in the passage. It frequently appeals to general knowledge or to what the candidate believes to be true. The test is not whether the statement is true but whether the passage supports it, and those are different questions.',
            ],
            [
              'Partly right',
              'An option that correctly describes one paragraph and is offered as the main idea, or that gets half a comparison right and reverses the other half. These are the most dangerous, because the recognisable correct portion creates confidence. Read every option to the end; the fault is often in the last clause.',
            ],
            [
              'Reversed or distorted',
              'An option that swaps cause and effect, attributes to the author a view the author was describing in order to criticise, or negates a qualifier. Passages that present two positions produce these constantly, which is why locating the author\'s own position while reading matters so much.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The discipline that raises accuracy most',
          text:
            'Before selecting an option, say why each of the other three is wrong, naming the fault. If you cannot name a fault in a rejected option, you have not eliminated it — you have preferred one over it, which is a different and much less reliable operation. Candidates who adopt this habit typically see accuracy rise before speed does, and in a negatively marked section accuracy is what the percentile responds to.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'subjects',
      heading: 'Passage subjects',
      eyebrow: 'What CAT draws on',
      intro:
        'Passages are drawn from serious general-interest writing rather than from textbooks or from business journalism. Knowing the recurring subject areas removes the shock of an unfamiliar topic.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The recurring areas',
              'Philosophy and ethics; economics and behavioural science; history and historiography; sociology and anthropology; literature and criticism; science and technology, usually its social implications rather than its technical content; environment and climate; and art, aesthetics and culture. Business and management passages are rarer than candidates expect.',
            ],
            [
              'Where the passages come from',
              'Long-form essays and reviews in publications such as Aeon, The Guardian\'s long reads, The New Yorker, The Atlantic, the London Review of Books, Nautilus, Project Syndicate and academic writing pitched at a general audience. Reading in these registers regularly is the most direct preparation there is.',
            ],
            [
              'Unfamiliar subject matter is not the obstacle',
              'Every passage contains everything needed to answer its questions. A passage on a philosophical position you have never heard of is not harder than one on a familiar topic — in fact it is often easier, because familiarity tempts you to answer from prior belief rather than from the text. Treat outside knowledge as a hazard rather than an asset.',
            ],
            [
              'The genuinely hard passages',
              'Difficulty in CAT comes from abstraction and from density of qualification, not from vocabulary. A passage that keeps conceding and re-qualifying — "while it is true that… nevertheless… although this should not be taken to mean…" — is hard because holding the position takes effort. Recognising that kind of passage early is what the selection decision in the next section depends on.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'timing',
      heading: 'Timing and selection',
      eyebrow: 'Which passage to leave',
      intro:
        'With a fixed sectional time, selection is a decision you make whether or not you notice making it. Making it deliberately is worth more than reading faster.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The budget',
              'Reading a passage of the usual length takes three to four minutes at a properly attentive pace, and each question a further minute to ninety seconds. A passage with four questions therefore costs around eight minutes. Multiply by the number of passages, add the non-RC questions, and it is usually clear that the section does not permit a full attempt at leisure — which is the whole point of the design.',
            ],
            [
              'Choosing what to leave',
              'Read the first two or three sentences of each passage before committing. Leave the one that is most abstract, most heavily qualified or least anchored to anything concrete. Do not choose by subject preference — an unfamiliar topic written plainly is far easier than a familiar topic written densely.',
            ],
            [
              'Never abandon a passage halfway',
              'The cost of a passage is almost all in the reading. Once you have read it, the questions are cheap. Abandoning after reading wastes the expensive part and keeps none of the return. Decide before reading, and having decided, answer all its questions.',
            ],
            [
              'Attempt the non-RC questions first or last, but decide in advance',
              'Para summary and odd-one-out questions take two to three minutes each and, being typed rather than chosen, carry no negative marking. Many candidates find it steadier to clear them first, banking the risk-free marks; others prefer to protect their reading concentration and leave them to the end. Either works; drifting between the two does not.',
            ],
            [
              'Accuracy over volume',
              'With three marks for a correct answer and minus one for a wrong one, a wrong answer costs the equivalent of a third of a correct one and the time spent as well. In VARC, where percentiles are tightly compressed, a candidate answering fourteen questions with twelve right will usually beat one answering twenty with thirteen right.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'habit',
      heading: 'Building the habit',
      eyebrow: 'The long preparation',
      intro:
        'The honest part of this page. Technique can be learnt in a week and is worth several marks. Reading ability takes months and is worth more, and there is no substitute for it.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Read daily, in the right register',
              'Thirty to forty-five minutes a day of the kind of writing CAT draws on — long-form essays, serious criticism, argumentative journalism. Not textbooks, not news reports, not exam material. The aim is to make dense argumentative prose feel ordinary, so that on the day the passage does not read as an obstacle.',
            ],
            [
              'Read for structure, not for information',
              'After each article, state in two sentences what the author argued and how. If you cannot, you read it as information rather than as argument, which is exactly the habit CAT punishes. This exercise takes a minute and does more for the score than another hour of practice questions.',
            ],
            [
              'Analyse every wrong answer',
              'For each RC question you get wrong, identify which of the four faults the option you chose had, and where in the passage the correct answer is supported. Keeping that log for two months reveals a pattern — most candidates consistently fall for one fault more than the others — and knowing your own pattern is the fastest available improvement.',
            ],
            [
              'Do not chase speed directly',
              'Reading speed rises as a consequence of comfort with the register, not as a result of trying to read faster. Deliberate speed-reading produces recognition without comprehension, which is precisely what the wrong options are built to exploit. Work on understanding, and the pace follows.',
            ],
            [
              'Vocabulary in the right way',
              'CAT does not test vocabulary directly, so learning word lists is largely wasted effort. What matters is not being stopped by a word in a passage, and that comes from meeting words in context while reading. Note unfamiliar words as you read and check them afterwards, which fixes both the meaning and the register in which the word is used.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A passage says a reform "produced uneven results across regions". Which inference is safe: (a) the reform failed, or (b) the reform worked better in some regions than others?',
      steps: [
        'Inference means what must follow from the statement, not what might.',
        '"Uneven results" states that outcomes differed between regions, which is exactly option (b).',
        'Option (a) adds a judgment the passage did not make; uneven results are consistent with overall success. It is the "too extreme" fault.',
      ],
      answer: '(b) — inference must be what necessarily follows, not the stronger conclusion.',
    },
    {
      q: 'How do you tell a main-idea option from a true-but-partial one?',
      steps: [
        'Both are supported by the passage, which is what makes the choice hard.',
        'Test coverage: read the option and ask whether it accounts for every paragraph, or only for one.',
        'An option describing only the second paragraph is true and is not the main idea. The right answer for this type is always the one that spans the whole passage.',
      ],
      answer: 'By coverage — the main idea must account for the whole passage, not one part of it.',
    },
    {
      q: 'A passage presents a scholar\'s view and then says "This, however, overlooks…". Whose view does the author hold?',
      steps: [
        '"However" signals a reversal, and what follows a reversal is the author\'s position.',
        'The scholar\'s view has been introduced in order to be qualified or rejected.',
        'So an option attributing the scholar\'s view to the author is the "reversed or distorted" fault — one of the commonest traps in two-position passages.',
      ],
      answer: 'The author holds the view stated after "however", not the one before it.',
    },
    {
      q: 'You have read a passage and find the first question very hard. Should you move to the next passage?',
      steps: [
        'The expensive part of a passage is reading it, and you have already paid that cost.',
        'The remaining questions are comparatively cheap, and they are not necessarily as hard as the first.',
        'Abandoning now wastes the investment entirely. Skip the hard question, attempt the others, and return if time allows.',
      ],
      answer: 'No — skip the question, not the passage. Selection happens before reading, not after.',
    },
    {
      q: 'Two options remain and both seem defensible. What is the next step?',
      steps: [
        'Stop comparing them with each other, which is what produces deadlock, and compare each with the passage.',
        'Find the specific words in each option that go beyond what the passage said — an absolute term, an added causal claim, a reversal of a qualifier.',
        'One of them will contain something the passage does not support. If neither does, the other will fail on scope: it will answer a slightly different question.',
      ],
      answer: 'Test each against the text separately, looking for the specific word that overreaches.',
    },
    {
      q: 'An option is entirely true in reality but not mentioned in the passage. Is it correct?',
      steps: [
        'The question asks what the passage supports, not what is true in the world.',
        'An option relying on outside knowledge is out of scope, however accurate.',
        'This fault catches well-informed candidates most often, because their knowledge makes the option feel obviously right. Treat prior knowledge as a hazard in this section.',
      ],
      answer: 'No — truth in the world is irrelevant; only support in the passage counts.',
    },
    {
      q: 'The tone options are "critical", "dismissive", "neutral" and "laudatory". The author disagrees with a theory but engages with it seriously. Which fits?',
      steps: [
        'Neutral is wrong, because the author takes a position.',
        'Laudatory is wrong, because the author disagrees.',
        'Dismissive implies refusing to take the theory seriously, which contradicts serious engagement. Critical is the accurate description — disagreement with respect.',
      ],
      answer: 'Critical — extreme tone words such as dismissive are almost always wrong.',
    },
    {
      q: 'Should you read the questions before the passage in CAT?',
      steps: [
        'That method works where answers are locatable in the text, as in banking RC, because you can scan for a fact.',
        'CAT questions ask for the main idea, inferences, the author\'s attitude and the function of a paragraph, none of which can be located by scanning.',
        'Reading the questions first therefore adds a pass without saving one, and it fragments the reading into keyword hunts. Read the passage first, once, for structure.',
      ],
      answer: 'No — the questions require the whole argument, so read the passage first.',
    },
  ],

  practice: [
    {
      q: 'In CAT VARC, the correct answer to an inference question is:',
      options: ['Stated directly in the passage', 'The strongest conclusion the passage points towards', 'What is most likely true in the real world', 'What must necessarily follow from the passage'],
      answer: 3,
      explain: 'Inference means logical necessity. The strongest conclusion is usually the "too extreme" trap.',
    },
    {
      q: 'An option containing the word "always" when the passage said "often" is an example of:',
      options: ['An out-of-scope option', 'A reversed option', 'A partly-right option', 'A too-extreme option'],
      answer: 3,
      explain: 'Academic prose is hedged, so unhedged options are usually distortions.',
    },
    {
      q: 'The word "however" in a passage usually signals that:',
      options: ['An example is coming', 'A conclusion is being drawn', 'The author is about to reverse or qualify', 'The topic is changing'],
      answer: 2,
      explain: 'And the author\'s own position is almost always after the reversal rather than before it.',
    },
    {
      q: 'Which question type is usually most time-consuming for the marks it carries?',
      options: ['Main idea', 'Specific detail', 'EXCEPT or NOT questions', 'Tone'],
      answer: 2,
      explain: 'They require verifying four options rather than finding one, and are the first candidates for skipping.',
    },
    {
      q: 'The correct approach to passage selection in CAT is to decide:',
      options: ['After reading the passage fully', 'After attempting the first question', 'Before reading, from the opening sentences', 'By subject preference'],
      answer: 2,
      explain: 'The reading is the expensive part, so the decision must come before it, not after.',
    },
    {
      q: 'An option that is factually true but not discussed in the passage is:',
      options: ['Correct, since it is true', 'Partly right', 'Correct if it supports the main idea', 'Out of scope and therefore wrong'],
      answer: 3,
      explain: 'Only support within the passage counts. This fault catches well-informed candidates most often.',
    },
    {
      q: 'In CAT, non-MCQ (typed answer) questions carry:',
      options: ['No negative marking', 'The same negative marking as MCQs', 'Double marks', 'Half marks'],
      answer: 0,
      explain: 'Which is why they should never be left blank, whatever your confidence.',
    },
    {
      q: 'A main-idea option that accurately describes only the third paragraph is:',
      options: ['Correct', 'Wrong, being partly right only', 'Wrong, being out of scope', 'Wrong, being too extreme'],
      answer: 1,
      explain: 'The main idea must account for the whole passage; a true statement about one part is the classic partly-right trap.',
    },
    {
      q: 'CAT reading comprehension passages are typically drawn from:',
      options: ['Business school case studies', 'Long-form essays and serious general-interest writing', 'Newspaper reports', 'Academic textbooks'],
      answer: 1,
      explain: 'Sources such as Aeon, The Guardian long reads, the London Review of Books and similar publications.',
    },
    {
      q: 'The most reliable way to raise VARC accuracy is to:',
      options: ['Read faster', 'Learn more vocabulary', 'Name the fault in every rejected option', 'Attempt more questions'],
      answer: 2,
      explain: 'If you cannot name a fault, you have preferred an option rather than eliminated its rivals.',
    },
    {
      q: 'When two options remain and both seem plausible, you should:',
      options: ['Compare them with each other', 'Compare each with the passage separately', 'Choose the longer one', 'Choose the one using the passage\'s words'],
      answer: 1,
      explain: 'Comparing the two with each other produces deadlock; testing each against the text finds the overreaching word.',
    },
    {
      q: 'Reading the questions before the passage is advisable in:',
      options: ['CAT VARC', 'Banking and SSC reading comprehension', 'Both equally', 'Neither'],
      answer: 1,
      explain: 'Banking answers are locatable by scanning; CAT questions require the whole argument.',
    },
    {
      q: 'An "in order to" question about why an author mentioned an example is asking about:',
      options: ['The content of the example', 'Its function in the argument', 'Its factual accuracy', 'The author\'s tone'],
      answer: 1,
      explain: 'Options describing the content rather than the purpose are wrong by construction.',
    },
    {
      q: 'Extreme tone words such as "dismissive" or "vitriolic" in tone questions are:',
      options: ['Usually correct', 'Almost always wrong', 'Correct only in science passages', 'Neither more nor less likely'],
      answer: 1,
      explain: 'Academic and long-form prose rarely reaches those registers; "critical" or "sceptical" is usually accurate.',
    },
    {
      q: 'Vocabulary preparation for CAT is best done by:',
      options: ['Memorising word lists', 'Noting unfamiliar words met while reading', 'Studying etymology systematically', 'Practising synonym questions'],
      answer: 1,
      explain: 'CAT does not test vocabulary directly; what matters is not being stopped by a word inside a passage.',
    },
    {
      q: 'If you find the first question of a passage very difficult, you should:',
      options: ['Move to the next passage immediately', 'Skip that question and attempt the rest', 'Guess and continue', 'Reread the whole passage'],
      answer: 1,
      explain: 'The reading cost is already paid, and the remaining questions may be far easier.',
    },
  ],

  faqs: [
    {
      q: 'How is CAT reading comprehension different from banking and SSC RC?',
      a: 'Almost entirely. Banking passages are longer, simpler and mostly ask for facts stated in the text, with several vocabulary questions attached, so scanning works. CAT passages are shorter, denser and ask for the main idea, inferences, tone and the function of paragraphs, none of which can be scanned for. A method that scores well in one will score poorly in the other.',
    },
    {
      q: 'Should I read the questions first?',
      a: 'No, for CAT. That technique depends on answers being locatable, which they are not when the question asks what the author would agree with. Reading the questions first adds a pass without removing one and fragments your reading into keyword hunts. Read the passage once, attentively, for structure — then the questions.',
    },
    {
      q: 'How much should I be reading outside the exam material?',
      a: 'Thirty to forty-five minutes daily of long-form argumentative writing — essays, criticism, serious journalism — sustained over months. This is the part of the preparation that cannot be compressed, and it is the part that moves the score most. Textbooks and news reports do not substitute, because they are written to inform rather than to argue.',
    },
    {
      q: 'Is vocabulary worth studying for CAT?',
      a: 'Not as lists. CAT has no direct vocabulary questions, so learning a thousand words in isolation is largely wasted. What matters is not being halted by a word inside a passage, and that comes from meeting words in context. Note the ones you meet while reading and look them up afterwards; you learn the register as well as the meaning.',
    },
    {
      q: 'How many passages should I attempt?',
      a: 'Fewer than you think, and with more care. Given negative marking and compressed percentiles, twelve to fourteen questions answered accurately typically outscores twenty answered hastily. Read the opening sentences of each passage, leave the most abstract and heavily qualified one, and give the rest the attention they need.',
    },
    {
      q: 'What are the four wrong-answer patterns?',
      a: 'Too extreme — an absolute claim where the passage hedged. Out of scope — true or plausible but not supported by the text. Partly right — accurate about one part of the passage and offered as the whole, or correct in its first half and wrong in its last clause. Reversed or distorted — cause and effect swapped, or a view the author was criticising attributed to the author. Naming the fault is what makes elimination reliable.',
    },
    {
      q: 'Does subject knowledge help?',
      a: 'Less than you would expect, and it can actively hurt. Every passage contains everything needed to answer its questions, and familiarity tempts you to answer from what you already believe rather than from the text — which is exactly the out-of-scope trap. Treat prior knowledge as something to set aside for the duration of the passage.',
    },
    {
      q: 'Why is my accuracy low even though I understand the passages?',
      a: 'Almost always because of option handling rather than comprehension. Keep a log for a month recording, for each wrong answer, which of the four faults the option you chose had. Most candidates find that one fault accounts for the majority of their errors — commonly too extreme, or partly right — and once you know your pattern you can check for it deliberately.',
    },
    {
      q: 'Should I attempt the non-RC questions first?',
      a: 'Either order works provided you decide in advance. Para summary and odd-one-out are typed rather than chosen, so they carry no negative marking and should never be left blank. Some candidates clear them first to bank the risk-free marks; others leave them to the end to protect their reading concentration. What costs marks is drifting between passages and standalone questions without a plan.',
    },
    {
      q: 'How long does it take to improve at VARC?',
      a: 'Technique improves within a week or two — option elimination and question typing are learnable skills. Reading ability improves over months, and it is the larger part of the score. A candidate starting a year out should expect the technique gains early and the reading gains gradually, and should not read a flat score after four weeks as evidence that the reading is not working.',
    },
  ],

  related: [
    { label: 'Para Summary & Jumbles', to: '/study-material/varc/para-summary/' },
    { label: 'Critical Reasoning', to: '/study-material/varc/critical-reasoning/' },
    { label: 'Reading Comprehension (Banking & SSC)', to: '/study-material/english/reading-comprehension/' },
    { label: 'DILR', to: '/study-material/dilr/' },
    { label: 'All VARC', to: '/study-material/varc/' },
  ],
}
