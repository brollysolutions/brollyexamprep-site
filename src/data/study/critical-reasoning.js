/**
 * Critical Reasoning — /study-material/varc/critical-reasoning/
 *
 * Reasoning about arguments rather than about facts: finding the conclusion,
 * exposing the assumption, and knowing exactly what strengthens, weakens or
 * follows from a claim. Central to XAT and GMAT, and useful throughout VARC.
 */
export default {
  subject: 'varc',
  subjectName: 'VARC',
  slug: 'critical-reasoning',
  title: 'Critical Reasoning',
  seoTitle: 'Critical Reasoning for CAT and XAT | Assumptions, Fallacies & Practice',
  metaDescription:
    'Complete critical reasoning study material for XAT, GMAT, CAT and law entrance exams — argument structure, assumption questions and the negation test.',
  readMinutes: 22,
  lead: [
    'Critical reasoning is the study of arguments as arguments — not whether a claim is true, but whether the reasons given actually support it. That distinction is the whole subject, and it is the one candidates most often fail to make: an option can be entirely true and still not strengthen the argument, and an option can be implausible and still weaken it decisively.',
    'The skill transfers widely. XAT tests it directly, GMAT builds a whole section on it, CAT rewards it inside reading comprehension, and CLAT\'s legal reasoning is the same discipline applied to legal principles. This page sets out the structure of an argument, the five question types, the negation test for assumptions, and the fallacies that examiners build wrong options from.',
  ],

  weightage: [
    { exam: 'XAT Verbal and Logical Ability', count: '5–8 questions', note: 'XAT tests critical reasoning more heavily than any other Indian management entrance exam.' },
    { exam: 'GMAT Verbal', count: 'A full question type', note: 'Roughly a third of the verbal section, and the method here is written for that standard.' },
    { exam: 'CAT VARC', count: 'Indirectly', note: 'Not a separate question type in recent patterns, but inference and author-position questions in RC use the same reasoning.' },
    { exam: 'CLAT and AILET', count: '5–8 questions', note: 'As legal reasoning, which is principle-and-fact application built on this foundation.' },
    { exam: 'SSC CGL Reasoning', count: '2–3 questions', note: 'As statement-and-conclusion and statement-and-assumption questions.' },
  ],

  contents: [
    { icon: 'layers', title: 'Argument structure', sub: 'Premise, conclusion, assumption', href: '#structure' },
    { icon: 'search', title: 'Assumption questions', sub: 'The negation test', href: '#assumption' },
    { icon: 'target', title: 'Strengthen and weaken', sub: 'Attacking and supporting the link', href: '#strengthen' },
    { icon: 'doc', title: 'Inference questions', sub: 'What must follow', href: '#inference' },
    { icon: 'refresh', title: 'Flaw, paradox and role', sub: 'The remaining types', href: '#flaw' },
    { icon: 'bell', title: 'Logical fallacies', sub: 'Named reasoning errors', href: '#fallacies' },
    { icon: 'clock', title: 'Method and practice', sub: 'How to work a question', href: '#method' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'structure',
      heading: 'Argument structure',
      eyebrow: 'Premise, conclusion, assumption',
      intro:
        'Every question in this topic begins with the same operation: separating what the argument claims from what it offers in support. Doing that reliably answers half the questions before the options are read.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The three components',
              'A premise is a stated reason, offered as evidence. A conclusion is the claim the premises are meant to establish. An assumption is an unstated premise — something the argument needs in order to work but does not say. Almost every critical reasoning question is asking you to identify one of these three, or to act on one of them.',
            ],
            [
              'Finding the conclusion',
              'Look for the signal words: "therefore", "thus", "hence", "so", "consequently", "it follows that", "clearly". If none is present, apply the "because" test — put "because" between two statements and see which direction makes sense. The conclusion is the statement the other is a reason for, and it need not be the last sentence; in many arguments it is the first.',
            ],
            [
              'Finding the premises',
              'They are signalled by "because", "since", "as", "given that", "for", "in view of". Everything offered as support is a premise, including facts, statistics and examples. Note that a premise is accepted as given — critical reasoning questions almost never ask you to doubt whether the stated facts are true.',
            ],
            [
              'Locating the gap',
              'The gap is the distance between the premises and the conclusion — what would have to be true for the reasons to establish the claim. Identifying it before reading the options is the single most valuable habit in the topic, because assumption, strengthen, weaken and flaw questions are all asking about that same gap from different directions.',
            ],
            [
              'Intermediate conclusions',
              'Longer arguments sometimes establish one claim in order to use it as a premise for another. The intermediate conclusion is supported by evidence and itself supports the main conclusion. Questions exploit this by offering the intermediate conclusion as an answer to a main-conclusion question, so ask of any candidate conclusion whether anything else in the argument follows from it.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'assumption',
      heading: 'Assumption questions',
      eyebrow: 'The negation test',
      intro:
        'An assumption is what the argument needs and does not state. There is a mechanical test for it, and it is worth applying rather than trusting intuition.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'What an assumption is not',
              'It is not background information, however relevant. It is not a restatement of a premise. It is not something that would merely help the argument — that is a strengthener. An assumption is necessary: without it, the argument cannot stand at all.',
            ],
            [
              'The negation test',
              'Negate the candidate option and reinsert it into the argument. If the negated version destroys the argument, the option is a necessary assumption. If the argument survives the negation more or less intact, it is not. This test resolves almost every assumption question and is far more reliable than asking which option "feels" assumed.',
            ],
            [
              'The two commonest assumption types',
              'That there is no alternative explanation for the evidence — an argument concluding that a policy caused an improvement assumes nothing else caused it. And that a sample or a case is representative — an argument generalising from one city assumes that city is typical. Watching for these two covers a large share of the questions.',
            ],
            [
              'Sufficient versus necessary',
              'GMAT and XAT ask for necessary assumptions: things without which the argument fails. Some other exams ask for sufficient assumptions: things which, if added, would make the conclusion follow completely. The negation test identifies the first, not the second. Read the question stem to see which is wanted — "the argument depends on" signals necessary, "if assumed, would allow the conclusion to be properly drawn" signals sufficient.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Why the negation test works',
          text:
            'Because "necessary" has a precise meaning: if a statement is necessary for a conclusion, then its falsity makes the conclusion unsupportable. So negating a genuine assumption must break the argument, and negating a non-assumption will leave it standing. The test converts a judgment call into a check, and it is worth doing explicitly on the two options that survive first-pass elimination.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'strengthen',
      heading: 'Strengthen and weaken',
      eyebrow: 'Attacking and supporting the link',
      intro:
        'Both question types operate on the gap between premise and conclusion — one narrows it, the other widens it. Neither is about whether the premises are true.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Weakening',
              'The strongest weakener supplies an alternative explanation for the evidence. If an argument concludes that a training programme raised productivity because productivity rose after it was introduced, the fatal objection is that something else changed at the same time. Other weakeners show the sample was unrepresentative, that the evidence is compatible with the opposite conclusion, or that a necessary condition for the conclusion does not hold.',
            ],
            [
              'Strengthening',
              'The mirror image. The strongest strengthener rules out the alternative explanation — establishing that nothing else changed. Others confirm that the sample was representative, or supply the missing link the argument assumed. A strengthener need not prove the conclusion; it need only make it more likely.',
            ],
            [
              'What does not weaken',
              'An option that attacks a premise rather than the reasoning. An option that is merely unfavourable in tone. An option that introduces a consideration the argument never depended on. And, most commonly, an option that is true and irrelevant — critical reasoning options are frequently accurate statements about the world that have no bearing on whether these premises support this conclusion.',
            ],
            [
              'Degree matters',
              'Where two options both point in the right direction, the correct one usually does so more decisively. An option showing that the alternative explanation definitely applies beats one showing that it might. But beware of extreme options that overshoot into irrelevance — an option so strong that it addresses a different claim altogether is not the answer.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'What to look for by question type',
          head: ['Question asks you to', 'Target', 'Typical correct answer'],
          rows: [
            ['Weaken', 'The premise-to-conclusion link', 'An alternative cause, an unrepresentative sample, or evidence that the effect occurred without the supposed cause.'],
            ['Strengthen', 'The same link', 'Ruling out the alternative cause, confirming representativeness, or supplying the unstated connection.'],
            ['Assumption', 'The same gap, but only what is necessary', 'A statement whose negation destroys the argument.'],
            ['Explain or resolve', 'An apparent contradiction between two facts', 'A fact under which both stated observations can be true at once.'],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'inference',
      heading: 'Inference questions',
      eyebrow: 'What must follow',
      intro:
        'The most under-answered type, because candidates apply the standard of "reasonable" where the exam applies the standard of "necessary".',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The standard',
              'An inference is something that must be true given the statements, not something that is probably true or that the author would likely accept. If you can construct any scenario in which all the given statements hold and the option does not, the option is wrong. This is a far stricter test than everyday reasoning uses.',
            ],
            [
              'The consequence for option choice',
              'Correct inference options are usually cautious, modest and slightly dull — "at least some X are Y", "the policy did not achieve all of its objectives". Wrong options are more interesting and more decisive. Where two options remain, the weaker claim is usually correct, which reverses the instinct built up in every other kind of question.',
            ],
            [
              'Inference is not conclusion',
              'A conclusion question asks what the author was arguing; an inference question asks what follows from the statements whether or not the author drew it. In a passage where facts are laid out without an explicit argument, there may be no conclusion at all and still be several valid inferences.',
            ],
            [
              'Statement and conclusion questions',
              'The SSC and banking version of this type gives a statement and two or three conclusions and asks which follow. The same standard applies: a conclusion follows only if it must, and conclusions that merely seem sensible in the light of general knowledge do not. Adding outside information is the commonest error.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'flaw',
      heading: 'Flaw, paradox and role',
      eyebrow: 'The remaining types',
      intro:
        'Three less common but entirely learnable types, each with its own approach.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Flaw questions',
              '"The argument is vulnerable to criticism on the grounds that…" The answer names the reasoning error in the abstract — confusing correlation with causation, treating a necessary condition as sufficient, generalising from an unrepresentative sample, attacking the person rather than the position. Predict the flaw before reading the options, because the options are worded abstractly and are hard to evaluate cold.',
            ],
            [
              'Paradox or discrepancy questions',
              'Two facts are given that appear to conflict — sales rose while customer numbers fell, or accident rates increased after safety equipment was mandated. The correct answer is a fact under which both can be true simultaneously. Do not look for an option that denies either fact; both are given and both stand. Look for the circumstance that reconciles them.',
            ],
            [
              'Role or boldface questions',
              'Part of the argument is highlighted and you are asked what it does — is it the conclusion, evidence for the conclusion, an objection the author is about to answer, or a position the author opposes? The method is to map the argument\'s structure first and only then match the option. The crucial question is whether the highlighted statement is something the author endorses or something the author is arguing against.',
            ],
            [
              'Parallel reasoning questions',
              'Given an argument, find the option with the same logical structure, regardless of subject matter. Strip both to their skeletons — "all A are B; this is A; therefore this is B" — and compare the skeletons. Subject-matter similarity between the stimulus and an option is a deliberate distraction.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'fallacies',
      heading: 'Logical fallacies',
      eyebrow: 'Named reasoning errors',
      intro:
        'The named fallacies are worth learning because flaw questions describe them abstractly, and because recognising one instantly locates the gap in an argument.',
      blocks: [
        {
          type: 'table',
          caption: 'The fallacies that recur',
          head: ['Fallacy', 'What it does', 'Example'],
          rows: [
            ['Correlation mistaken for causation', 'Treats two things occurring together as one causing the other', 'Ice cream sales and drowning both rise in summer; neither causes the other.'],
            ['Post hoc ergo propter hoc', 'Treats sequence as causation — B followed A, so A caused B', 'The economy grew after the policy, therefore because of it.'],
            ['Hasty generalisation', 'Draws a general conclusion from too small or unrepresentative a sample', 'Two customers complained, so the product is defective.'],
            ['False dilemma', 'Presents two options as exhaustive when others exist', 'Either we cut spending or the economy collapses.'],
            ['Circular reasoning', 'Assumes in the premises what it sets out to prove', 'The policy is effective because it works well.'],
            ['Ad hominem', 'Attacks the person rather than the argument', 'His view on the tax is worthless because he pays no tax.'],
            ['Straw man', 'Refutes a weakened or distorted version of the opposing position', 'Answering a call for regulation as though it were a call for prohibition.'],
            ['Appeal to authority', 'Treats endorsement as evidence, particularly outside the authority\'s field', 'A famous actor endorses a health product.'],
            ['Appeal to popularity', 'Treats widespread belief as evidence of truth', 'Most people believe it, so it must be so.'],
            ['Slippery slope', 'Claims one step leads inevitably to an extreme outcome, without establishing the chain', 'Allowing this exception will destroy the whole system.'],
            ['Equivocation', 'Uses one word in two different senses within the argument', 'Shifting between "free" as in cost and "free" as in unconstrained.'],
            ['Survivorship or selection bias', 'Draws a conclusion from a sample that systematically excludes relevant cases', 'Studying only successful firms to identify what causes success.'],
          ],
        },
        {
          type: 'note',
          title: 'The one to watch for above all',
          text:
            'Correlation mistaken for causation, in its various forms, underlies more critical reasoning questions than any other fallacy. Whenever an argument concludes that A caused B from evidence that A and B occurred together, the assumption is that nothing else explains B, the weakener supplies that something else, and the strengthener rules it out. Recognising that pattern answers assumption, strengthen, weaken and flaw questions about the same argument.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'Method and practice',
      eyebrow: 'How to work a question',
      intro:
        'A fixed sequence for every question, and the practice habits that improve accuracy fastest.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Read the question stem first',
              'Unlike reading comprehension, where the passage comes first, critical reasoning stimuli are short and the stem determines how you read them. Knowing that you are looking for a weakener changes what you notice in the argument, and it costs five seconds to find out.',
            ],
            [
              'Then map the argument',
              'Identify the conclusion, then the premises, then the gap between them. State the gap to yourself in a sentence. On assumption, strengthen, weaken and flaw questions, the answer will address that gap, and predicting it before reading the options is what separates fast accurate work from slow guessing.',
            ],
            [
              'Predict, then match',
              'Form an expectation of what the right answer must do — "it must rule out another cause", "it must show the sample was unrepresentative" — and then look for the option that does it. Reading five options cold and deciding which feels best is how candidates fall for well-constructed wrong answers.',
            ],
            [
              'Eliminate by relevance first',
              'Most wrong options in this topic are irrelevant rather than false. Ask of each: does this affect whether these premises support this conclusion? Options that discuss something adjacent, that are true but immaterial, or that address a different claim can be dismissed without further analysis.',
            ],
            [
              'Keep an error log',
              'For each wrong answer, record the question type and why the option you chose failed — irrelevant, out of scope, attacked a premise, too weak, reversed. Most candidates have one dominant failure mode, and identifying it is worth more than another hundred practice questions.',
            ],
            [
              'Time',
              'About ninety seconds to two minutes per question in an exam setting. Beyond that, the argument has usually not been mapped correctly, and rereading the options rarely helps. Return to the mapping rather than to the options if you are stuck.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A city introduced a cycling scheme and road accidents fell the following year. The council concludes the scheme caused the fall. What is the assumption?',
      steps: [
        'The premises are that the scheme was introduced and accidents fell afterwards; the conclusion is that the scheme caused the fall.',
        'The gap is between sequence and causation — something else may have changed in the same period.',
        'The assumption is therefore that no other factor accounts for the fall in accidents. Negate it — some other factor does account for it — and the argument collapses, which confirms it is necessary.',
      ],
      answer: 'That no other factor explains the reduction in accidents.',
    },
    {
      q: 'Which weakens that argument most: (a) the scheme was expensive, or (b) a strict new speed limit was introduced in the same year?',
      steps: [
        'Option (a) concerns the cost, which is irrelevant to whether the scheme caused the fall — the argument makes no claim about value for money.',
        'Option (b) supplies an alternative explanation for the fall in accidents.',
        'Since the assumption was that no other factor was responsible, option (b) directly contradicts it and is the strongest weakener.',
      ],
      answer: '(b) — an alternative cause is the classic weakener of a causal argument.',
    },
    {
      q: 'How does the negation test distinguish an assumption from a strengthener?',
      steps: [
        'Negate the candidate statement and reinsert it into the argument.',
        'If the argument is destroyed, the statement was necessary — an assumption.',
        'If the argument merely becomes somewhat less compelling but still stands, the statement was helpful rather than necessary — a strengthener. Only the first answers an assumption question.',
      ],
      answer: 'Negation destroys the argument for an assumption; it only weakens it for a strengthener.',
    },
    {
      q: 'A shop reports that revenue rose last quarter while the number of customers fell. Which resolves the paradox?',
      steps: [
        'Both facts are given and both must stand; the answer cannot deny either.',
        'Look for a circumstance under which fewer customers can produce more revenue.',
        'Higher prices, or a shift towards more expensive items, or larger purchases per customer would all do it. An option saying the customer figures were wrongly counted is not a resolution — it denies a given fact.',
      ],
      answer: 'A fact making both true at once, such as higher average spending per customer.',
    },
    {
      q: 'Why is a correct inference option usually the more cautious one?',
      steps: [
        'An inference must be true given the statements, not merely plausible.',
        'A modest claim — "at least some", "did not achieve all" — is easier to guarantee from limited premises.',
        'A strong claim requires more support than short stimuli usually provide, so it will normally fail on some scenario consistent with the statements. Where two options remain, prefer the weaker.',
      ],
      answer: 'Because a weaker claim is easier to guarantee, and inference demands guarantee rather than likelihood.',
    },
    {
      q: 'An argument runs: "Successful entrepreneurs report taking large risks. Therefore risk-taking causes success." Name the flaw.',
      steps: [
        'The evidence comes only from entrepreneurs who succeeded.',
        'Those who took equally large risks and failed are not in the sample, and there may be far more of them.',
        'This is survivorship or selection bias — the sample systematically excludes the cases that would test the claim.',
      ],
      answer: 'Survivorship bias — the failures are missing from the evidence.',
    },
    {
      q: 'An option in a weaken question is factually true but concerns a matter the argument never relied on. Is it correct?',
      steps: [
        'Weakening operates on the link between the premises and the conclusion.',
        'An option that concerns something the argument never depended on cannot affect that link, however true it is.',
        'Most wrong options in critical reasoning fail on relevance rather than on truth, which is why elimination should begin with relevance.',
      ],
      answer: 'No — truth is irrelevant if the statement does not bear on the premise-conclusion link.',
    },
    {
      q: 'In a boldface question, how do you tell evidence from an opposing position?',
      steps: [
        'Map the argument before looking at the options: identify the author\'s conclusion and what supports it.',
        'Then ask whether the highlighted statement is something the author endorses or something the author is about to answer.',
        'A statement introduced with "it has been argued that" or followed by "however" is usually the opposing position; a statement the conclusion rests on is evidence.',
      ],
      answer: 'By whether the author endorses it — signalled by the connectives around it.',
    },
  ],

  practice: [
    {
      q: 'An assumption in an argument is:',
      options: ['A stated reason', 'Any statement that helps the argument', 'The conclusion restated', 'An unstated premise the argument requires'],
      answer: 3,
      explain: 'A statement that merely helps is a strengthener; an assumption is necessary.',
    },
    {
      q: 'The negation test identifies an option as an assumption if negating it:',
      options: ['Strengthens the argument', 'Makes the conclusion certain', 'Leaves the argument unchanged', 'Destroys the argument'],
      answer: 3,
      explain: 'Necessity means the argument cannot survive the statement\'s falsity.',
    },
    {
      q: 'The strongest way to weaken a causal argument is to:',
      options: ['Show the cause was expensive', 'Show the author is biased', 'Deny one of the premises', 'Supply an alternative explanation for the effect'],
      answer: 3,
      explain: 'Causal arguments assume nothing else explains the effect, so an alternative cause attacks the assumption directly.',
    },
    {
      q: 'Concluding that A caused B merely because B followed A is the fallacy of:',
      options: ['Circular reasoning', 'Post hoc ergo propter hoc', 'Ad hominem', 'False dilemma'],
      answer: 1,
      explain: 'Sequence is not causation; something else may explain B.',
    },
    {
      q: 'In an inference question, the correct answer must be:',
      options: ['Probably true', 'True in the real world', 'Necessarily true given the statements', 'What the author intended'],
      answer: 2,
      explain: 'If any scenario satisfies all the statements while making the option false, the option is wrong.',
    },
    {
      q: 'Attacking the person making an argument rather than the argument itself is:',
      options: ['A straw man', 'An ad hominem', 'An appeal to authority', 'Equivocation'],
      answer: 1,
      explain: 'A straw man distorts the position before refuting it; ad hominem attacks the arguer.',
    },
    {
      q: 'In a paradox or discrepancy question, the correct answer:',
      options: ['Denies one of the two facts', 'Makes both facts true simultaneously', 'Proves the conclusion', 'Identifies the flaw'],
      answer: 1,
      explain: 'Both facts are given and stand; the answer supplies a circumstance reconciling them.',
    },
    {
      q: 'Refuting a distorted version of an opponent\'s position is the fallacy of:',
      options: ['Straw man', 'Slippery slope', 'Hasty generalisation', 'Equivocation'],
      answer: 0,
      explain: 'The distorted version is easier to attack than the real position.',
    },
    {
      q: 'Studying only successful companies to identify the causes of success involves:',
      options: ['Circular reasoning', 'Survivorship bias', 'False dilemma', 'Appeal to popularity'],
      answer: 1,
      explain: 'Companies that did the same things and failed are excluded from the sample.',
    },
    {
      q: 'In critical reasoning, most wrong options fail because they are:',
      options: ['Factually false', 'Irrelevant to the premise-conclusion link', 'Too short', 'Repetitions of the conclusion'],
      answer: 1,
      explain: 'Which is why elimination should begin by asking whether an option bears on the link at all.',
    },
    {
      q: 'Presenting two options as the only possibilities when others exist is:',
      options: ['A false dilemma', 'A slippery slope', 'Circular reasoning', 'An appeal to authority'],
      answer: 0,
      explain: 'Also called a false dichotomy or the either-or fallacy.',
    },
    {
      q: 'Which is the best first step on a critical reasoning question?',
      options: ['Read all five options', 'Read the question stem', 'Read the last sentence of the stimulus', 'Eliminate the longest option'],
      answer: 1,
      explain: 'The stem determines how you should read the short stimulus, and finding it costs a few seconds.',
    },
    {
      q: 'Using a word in two different senses within one argument is:',
      options: ['Equivocation', 'Straw man', 'Post hoc', 'Ad hominem'],
      answer: 0,
      explain: 'The argument appears valid only because the shift in meaning goes unnoticed.',
    },
    {
      q: 'A conclusion that is itself supported by evidence and also supports the main conclusion is:',
      options: ['A premise', 'An intermediate conclusion', 'An assumption', 'A counterexample'],
      answer: 1,
      explain: 'It is offered as the answer to main-conclusion questions, so check whether anything else follows from your candidate.',
    },
    {
      q: 'In parallel reasoning questions, similarity of subject matter between the stimulus and an option is:',
      options: ['Evidence that the option is correct', 'A deliberate distraction', 'Required for the answer', 'Irrelevant to the logical structure but usually present'],
      answer: 1,
      explain: 'The answer must match the logical skeleton, and subject-matter overlap is placed there to mislead.',
    },
    {
      q: 'How long should a critical reasoning question take in an exam?',
      options: ['30 seconds', '90 seconds to 2 minutes', '4 minutes', 'As long as needed'],
      answer: 1,
      explain: 'Beyond that, the argument has usually been mapped wrongly, and rereading the options rarely helps.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between an assumption and a strengthener?',
      a: 'Necessity. An assumption is something the argument requires — remove it and the argument collapses. A strengthener merely makes the conclusion more likely; the argument survives without it, just less convincingly. The negation test separates them: negate the option and see whether the argument is destroyed or merely weakened. Assumption questions want only the first.',
    },
    {
      q: 'Why does the negation test work?',
      a: 'Because "necessary" has a precise logical meaning: if a statement is necessary for a conclusion, then the statement being false makes the conclusion unsupportable. So negating a genuine assumption must break the argument, while negating an irrelevant or merely helpful statement will leave it standing. The test turns a judgment call into a check, and it is worth applying explicitly to the two options that survive first-pass elimination.',
    },
    {
      q: 'Why do so many wrong options seem plausible?',
      a: 'Because they are true. Most wrong options in critical reasoning are accurate statements about the world that have no bearing on whether these particular premises support this particular conclusion. Candidates evaluate them for truth, which they pass, instead of for relevance, which they fail. Always ask what an option does to the link, not whether it is correct.',
    },
    {
      q: 'How do I improve at finding the conclusion?',
      a: 'Use the "because" test rather than looking for position in the paragraph. Take two statements and put "because" between them in each order; only one direction will make sense, and the statement that "because" points away from is the conclusion. Signal words help when present — therefore, thus, hence — but the conclusion is frequently the first sentence of a stimulus, so position is unreliable.',
    },
    {
      q: 'Why are inference answers so weak-sounding?',
      a: 'Because inference requires guarantee, not likelihood. A modest claim such as "at least some" or "the policy did not achieve all its aims" is easier to guarantee from limited premises than a strong one. The instinct built up in strengthen and weaken questions — where the more decisive option usually wins — actively misleads here, and where two options remain the weaker is generally correct.',
    },
    {
      q: 'Which fallacy should I watch for above all others?',
      a: 'Correlation mistaken for causation, in all its forms. Whenever an argument concludes that A caused B from evidence that they occurred together or in sequence, the assumption is that nothing else explains B, the weakener supplies an alternative cause, the strengthener rules one out, and the flaw is the causal leap itself. One recognised pattern answers four question types about the same argument.',
    },
    {
      q: 'Is critical reasoning worth preparing for CAT specifically?',
      a: 'Not as a separate question type in recent patterns, but the skill is not wasted. CAT reading comprehension asks what the author would agree with, what the passage implies and what function a paragraph serves — all of which are critical reasoning operations applied to a longer text. For XAT, GMAT and CLAT it is directly tested and deserves dedicated preparation.',
    },
    {
      q: 'How is legal reasoning in CLAT related to this?',
      a: 'It is the same discipline with the premises supplied. CLAT gives you a legal principle and a set of facts and asks what follows, which is a pure application question — and the traps are identical: importing outside knowledge, letting your sense of fairness override the stated principle, and accepting a conclusion that is reasonable rather than one that follows. The reasoning habits transfer directly.',
    },
    {
      q: 'What should my error log record?',
      a: 'For each wrong answer: the question type, the option you chose, and why it failed — irrelevant, attacked a premise instead of the reasoning, too weak for an inference, too strong for an inference, or reversed. Most candidates have one dominant failure mode, and discovering yours after thirty logged questions is worth more than another hundred unanalysed ones.',
    },
    {
      q: 'How many questions come from critical reasoning?',
      a: 'Five to eight in XAT, which tests it more than any other Indian management exam; roughly a third of the GMAT verbal section; five to eight in CLAT and AILET as legal reasoning; two to three in SSC reasoning as statement-and-conclusion questions; and indirectly throughout CAT reading comprehension.',
    },
  ],

  related: [
    { label: 'Reading Comprehension Strategy', to: '/study-material/varc/rc-strategy/' },
    { label: 'Para Summary & Jumbles', to: '/study-material/varc/para-summary/' },
    { label: 'Legal Reasoning', to: '/study-material/legal-reasoning/' },
    { label: 'Syllogism', to: '/study-material/reasoning/syllogism/' },
    { label: 'All VARC', to: '/study-material/varc/' },
  ],
}
