/**
 * Principles and Facts — /study-material/legal-reasoning/legal-principles/
 *
 * The core method of CLAT and AILET legal reasoning: applying a stated
 * principle to a set of facts without importing outside knowledge and without
 * letting a sense of fairness override the principle as written.
 */
export default {
  subject: 'legal-reasoning',
  subjectName: 'Legal Reasoning',
  slug: 'legal-principles',
  title: 'Principles & Facts',
  seoTitle: 'CLAT Legal Reasoning | Principle and Fact Method, Traps & Practice',
  metaDescription:
    'Complete legal reasoning method for CLAT, AILET and other law entrance exams — the passage-based format, the principle-and-fact method.',
  readMinutes: 22,
  lead: [
    'Legal reasoning in a law entrance paper is not a test of legal knowledge. Every principle you need is given to you, and the question is only whether you can apply it to a set of facts exactly as written — neither adding to it, nor softening it, nor substituting what you feel the law ought to be.',
    'That sounds easy and is not, because the facts are constructed to make the correct application feel unjust. A candidate\'s instinct for fairness is the single largest source of wrong answers in this section, and building the discipline to set it aside is most of what preparation consists of.',
  ],

  weightage: [
    { exam: 'CLAT UG Legal Reasoning', count: 'About a quarter of the paper', note: 'Comprehension-based passages, each followed by several questions. No prior legal knowledge is formally required.' },
    { exam: 'AILET', count: 'A substantial section', note: 'Similar in form to CLAT, though the pattern has varied between years and should be verified.' },
    { exam: 'SLAT, LSAT India and state law entrances', count: 'A major section', note: 'Some retain the older standalone principle-and-fact format rather than passages.' },
    { exam: 'Judiciary preliminary examinations', count: 'Indirectly', note: 'Those test substantive law, but the application discipline is the same.' },
    { exam: 'CAT and XAT', count: 'Not asked', note: 'Though the reasoning is the same as in critical reasoning application questions.' },
  ],

  contents: [
    { icon: 'doc', title: 'The format', sub: 'What the section actually looks like', href: '#format' },
    { icon: 'target', title: 'The method', sub: 'Applying a principle to facts', href: '#method' },
    { icon: 'bell', title: 'The traps', sub: 'Why candidates get these wrong', href: '#traps' },
    { icon: 'layers', title: 'Types of principle', sub: 'How each behaves', href: '#types' },
    { icon: 'refresh', title: 'Multiple principles', sub: 'Conflict and interaction', href: '#multiple' },
    { icon: 'search', title: 'Reading the language', sub: 'Shall, may, and, or, unless', href: '#language' },
    { icon: 'chart', title: 'Practice approach', sub: 'How to build the skill', href: '#practice' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'format',
      heading: 'The format',
      eyebrow: 'What the section actually looks like',
      intro:
        'The presentation has changed over the years while the underlying task has not, so it is worth knowing both the current form and the older one.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The current comprehension format',
              'A passage of several hundred words, often drawn from legal journalism or a commentary on a judgment, followed by four to six questions. The passage supplies the legal principles, sometimes explicitly and sometimes embedded in the discussion, and the questions apply them to fresh fact situations. Some questions test comprehension of the passage itself.',
            ],
            [
              'The older standalone format',
              'A short principle stated in one or two sentences, a paragraph of facts, and a single question asking whether liability arises. Several state law entrances and mock papers still use it, and it is the clearest form in which to learn the method, which is why the examples on this page use it.',
            ],
            [
              'What is and is not tested',
              'Formally, no prior legal knowledge is required — every principle is supplied. In practice, familiarity with the basic vocabulary of contract, tort and criminal law makes the passages far quicker to read, which is why the other two pages in this subject are worth working through. But the answer must always come from the principle given, never from what you know the law to be.',
            ],
            [
              'Why the question is harder than it looks',
              'The facts are constructed so that the correct application often produces an outcome that feels harsh — a sympathetic defendant is liable, or a wronged plaintiff recovers nothing. That mismatch between the legal result and the moral one is deliberate. It is the whole point of the exercise, and it is where most marks are lost.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'The method',
      eyebrow: 'Applying a principle to facts',
      intro:
        'A four-step procedure, applied identically to every question. Its value is that it removes judgment from the places where judgment goes wrong.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Step one — break the principle into elements',
              'Almost every legal principle is a list of conditions joined by "and" or "or", sometimes with an exception attached. Write them out as a numbered list. "A person is liable if he does an act, intending to cause harm, and harm results" has three elements, all of which must be satisfied. Making the list explicit is what prevents the commonest error, which is checking two elements and forgetting the third.',
            ],
            [
              'Step two — test each element against the facts',
              'Go through the elements one at a time and mark each as satisfied, not satisfied, or uncertain on the facts given. Do not read the whole fact pattern and form an impression; check element by element. Where the facts are silent on an element, note that silence rather than filling the gap.',
            ],
            [
              'Step three — apply the logic of the joining words',
              'If the elements are joined by "and", all must be satisfied, so a single failure defeats liability. If joined by "or", one suffices. If there is an exception, check whether the facts fall within it, because an exception defeats liability even when every element of the main principle is met.',
            ],
            [
              'Step four — state the conclusion and check it against the options',
              'Conclude before reading the options. Then find the option that matches. Options in this section are frequently written to be individually plausible, and reading them before forming your own conclusion invites you to be persuaded by the most sympathetic one.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The rule that governs everything else',
          text:
            'The principle as stated is the whole of the applicable law for that question. It may be an incomplete statement of the real law, it may be one you disagree with, and it may produce a harsh outcome. None of that matters. If the principle says liability arises whenever a certain act causes harm, then it arises even where the defendant was careful, well-meaning and unlucky — unless the principle itself provides otherwise.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'traps',
      heading: 'The traps',
      eyebrow: 'Why candidates get these wrong',
      intro:
        'Five failure modes, of which the first accounts for more lost marks than the other four combined.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Deciding by fairness',
              'The facts are built to make the legally correct answer feel wrong. A defendant who acted from good motives is liable under a principle that does not ask about motive; a plaintiff who suffered terribly recovers nothing because an element is missing. If your reasoning contains the phrase "but that would be unfair", you have left the question and started answering a different one.',
            ],
            [
              'Importing outside knowledge',
              'A candidate who knows something of real law is at particular risk here. The principle given may be a simplified or modified version of the actual rule, and the question is set on the version given. Adding a defence, an exception or a qualification from the real law is a wrong answer, however legally accurate it is.',
            ],
            [
              'Adding facts',
              'Assuming the defendant must have known something, or that a reasonable person would have checked, when the facts do not say so. If an element requires knowledge and the facts are silent on knowledge, the element is not established. Filling gaps with plausible inference is the second commonest error after fairness.',
            ],
            [
              'Missing an element',
              'Checking two of three conditions, finding both satisfied, and concluding liability. This is why the element list must be written out. Under time pressure the third element of a three-part test is very easy to overlook, particularly when the first two are the interesting ones.',
            ],
            [
              'Confusing the question asked',
              'Some questions ask whether the defendant is liable, others whether a specific argument would succeed, others what the strongest argument for one side would be. These have different answers. A defendant may be liable overall while one particular argument against him fails, and an option can be a true statement and a wrong answer.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'types',
      heading: 'Types of principle',
      eyebrow: 'How each behaves',
      intro:
        'Principles come in recognisable shapes, and knowing the shape tells you what the facts will be testing.',
      blocks: [
        {
          type: 'table',
          caption: 'Shapes of principle',
          head: ['Shape', 'Form', 'What the facts will test'],
          rows: [
            ['Cumulative conditions', '"X is liable if A and B and C"', 'Whether one of the elements — usually the least obvious — is absent. Check all of them.'],
            ['Alternative conditions', '"X is liable if A or B"', 'Whether at least one is satisfied. Failure of the more prominent one does not defeat liability.'],
            ['Rule with exception', '"X is liable, unless Y"', 'Whether the facts fall within the exception. An exception defeats liability even where every element of the rule is met.'],
            ['Strict liability', '"X is liable for any harm caused, regardless of intention or care"', 'Whether the defendant was careful or well-meaning — which is irrelevant, and the facts will make it look relevant.'],
            ['Defined term', '"A \'public place\' means any place to which the public has access"', 'Whether the situation falls within the definition. The definition governs entirely, whatever the ordinary meaning of the term.'],
            ['Burden or standard', '"The plaintiff must prove that…"', 'Whether the party who bears the burden has the evidence. If the facts are silent, the party bearing the burden loses.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Definitions are absolute',
              'Where a principle defines a term, that definition replaces ordinary usage entirely for the purposes of the question. If a passage defines "vehicle" as including a bicycle, then a bicycle is a vehicle even though nobody would ordinarily call it one; and if it defines "vehicle" as a motorised conveyance, a bicycle is not, however clearly it is a vehicle in ordinary speech.',
            ],
            [
              'Exceptions are narrow',
              'An exception applies only where its own conditions are met. A principle providing an exception for acts done "in immediate defence of one\'s own person" does not cover defence of property, or defence of another, or a delayed response — however reasonable those might be. Exceptions are read strictly, and the facts will test the edges.',
            ],
            [
              'Watch for what a principle does not require',
              'A principle that says nothing about intention imposes liability regardless of intention. A principle that says nothing about damage may impose liability without any harm being shown. The absence of an element is as significant as its presence, and the facts will supply a sympathetic circumstance that the principle simply does not care about.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'multiple',
      heading: 'Multiple principles',
      eyebrow: 'Conflict and interaction',
      intro:
        'Harder questions give two or three principles that interact, and sometimes appear to conflict. There are settled ways of handling this.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Apply each principle separately first',
              'Work out the result under each principle on its own before considering how they interact. Attempting to combine them at the start produces confusion; taking them one at a time usually shows that they address different aspects and do not in fact conflict.',
            ],
            [
              'The specific prevails over the general',
              'Where a general principle and a specific one both apply, the specific governs the situation it covers. A general rule about liability for damage and a specific rule about damage caused by animals will both apply to a dog bite, and the specific rule governs. This is the ordinary approach to apparently conflicting provisions.',
            ],
            [
              'An exception overrides the rule it belongs to',
              'But only the rule it belongs to. An exception attached to Principle 1 does not cut down Principle 2, even if the facts are the same. Read carefully which principle an exception is attached to, because passages frequently list several principles and one exception.',
            ],
            [
              'Sequential principles',
              'Some sets give principles that operate in order: liability arises under the first, is then reduced by the second, and is then extinguished by the third if a further condition is met. Work through them in sequence, taking the output of one as the input of the next, rather than trying to reach the answer directly.',
            ],
            [
              'Where they genuinely conflict',
              'If two principles genuinely give opposite results on the same facts and neither is more specific, look for a stated hierarchy in the passage. If none is stated, the question is almost certainly testing something else — reread it, because a well-set question rarely turns on an unresolvable conflict.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'language',
      heading: 'Reading the language',
      eyebrow: 'Shall, may, and, or, unless',
      intro:
        'Legal language uses ordinary words with precise meanings, and questions are frequently set on exactly these words rather than on any substantive point.',
      blocks: [
        {
          type: 'table',
          caption: 'Words that decide questions',
          head: ['Word', 'Meaning in a principle', 'What the facts will test'],
          rows: [
            ['Shall', 'Mandatory — the thing must be done or the consequence must follow', 'Whether a discretion exists. It does not.'],
            ['May', 'Discretionary — the thing is permitted, not required', 'Whether an authority was obliged to act. It was not, so failing to act is not a breach.'],
            ['And', 'All the listed conditions must be satisfied', 'Whether one of them is missing. One failure defeats the whole.'],
            ['Or', 'Any one of the listed conditions suffices', 'Whether the obvious one failed while another succeeded.'],
            ['Unless', 'Introduces an exception that defeats the rule', 'Whether the facts fall inside the exception.'],
            ['Only if', 'The condition is necessary but may not be sufficient', 'Whether candidates treat it as sufficient. Satisfying it does not by itself establish liability.'],
            ['Knowingly, intentionally, negligently', 'A mental element that must be separately established', 'Whether the facts show the required state of mind, or merely the act.'],
            ['Reasonable', 'An objective standard, judged by what an ordinary prudent person would do', 'Whether the defendant\'s own honest belief is enough. It is not, under an objective standard.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Necessary and sufficient',
              'A necessary condition must be present for the result; a sufficient condition guarantees it. "A person is liable only if he was present" makes presence necessary — absence defeats liability — but presence alone does not establish it. "A person is liable if he was present" makes presence sufficient. Questions are set on precisely this difference, and the words "only if" are the signal.',
            ],
            [
              'Burden of proof',
              'Where a principle says a party "must prove" something, silence in the facts defeats that party. If the plaintiff must prove the defendant knew of the danger, and the facts do not say whether he knew, the plaintiff fails. This converts an apparent gap in the facts into a definite answer, and it is frequently the whole point of the question.',
            ],
            [
              'Objective and subjective standards',
              'An objective standard asks what a reasonable person would have thought or done; a subjective one asks what this person actually thought. A defendant who honestly but unreasonably believed he was in danger fails an objective test and passes a subjective one. Read which standard the principle sets, because the facts will be built to separate them.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'practice',
      heading: 'Practice approach',
      eyebrow: 'How to build the skill',
      intro:
        'What to do between now and the exam, and how to review your errors so that the review actually changes something.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Write the element list every time',
              'In practice, even where you can see the answer, write out the principle as a numbered list of conditions and mark each against the facts. It is slow at first and becomes automatic. Candidates who do this reliably stop missing the third element, which is a large share of the available improvement.',
            ],
            [
              'Log the reason for every error',
              'For each wrong answer, record which trap caught you: decided by fairness, imported outside law, added a fact, missed an element, or misread the question. After thirty logged questions a dominant pattern will be obvious, and knowing yours is worth more than another hundred unanalysed questions.',
            ],
            [
              'Read the passage before the questions',
              'As with any comprehension-based section. The questions apply the principle to new facts, so they cannot be answered by scanning, and reading them first fragments your understanding of the passage into keyword hunts.',
            ],
            [
              'Build the vocabulary, not the doctrine',
              'Knowing what consideration, negligence, mens rea, vicarious liability and strict liability mean makes passages far quicker to read, because you are not decoding the terminology while also applying it. But study the vocabulary to read faster, never to answer from. The answer always comes from the principle given.',
            ],
            [
              'Follow legal current affairs',
              'CLAT passages are frequently drawn from commentary on recent judgments and legislation. Reading a legal news source regularly makes the subject matter familiar and the reading faster, and it also serves the current affairs section of the same paper.',
            ],
            [
              'Time per question',
              'About ninety seconds to two minutes, once the passage has been read. The passage itself takes three to four minutes. If a question is taking longer, the usual cause is that the element list was not written out, and returning to the principle is faster than rereading the options.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Principle: "A person who keeps a dangerous animal is liable for any harm it causes, regardless of the precautions taken." Facts: A keeps a leopard in a reinforced enclosure inspected weekly. An earthquake breaks the enclosure and the leopard injures B. Is A liable?',
      steps: [
        'Break the principle into elements: (1) the person keeps a dangerous animal; (2) the animal causes harm.',
        'Both are satisfied — a leopard is a dangerous animal and it injured B.',
        'The principle expressly says liability arises regardless of precautions, so the reinforced enclosure and the weekly inspections are irrelevant, and so is the earthquake, since the principle provides no exception for it.',
      ],
      answer: 'Yes — the principle imposes liability regardless of care, and provides no exception.',
    },
    {
      q: 'Principle: "A person is liable for trespass if he enters land in the possession of another without permission." Facts: C is chased by a bull and runs into D\'s field to escape. Is C liable?',
      steps: [
        'The elements are: (1) entering land; (2) the land is in another\'s possession; (3) without permission.',
        'All three are satisfied on the facts — C entered D\'s field and had no permission.',
        'The principle contains no exception for necessity or emergency. Real law might well provide one, but the question is set on the principle given, so C is liable.',
      ],
      answer: 'Yes — however sympathetic the circumstances, the principle as stated has no exception.',
    },
    {
      q: 'Principle: "A person is liable only if he acted with knowledge of the risk." Facts: E digs a pit on his land. F falls in and is injured. The facts do not state whether E knew anyone might pass. Is E liable?',
      steps: [
        '"Only if" makes knowledge a necessary condition for liability.',
        'The facts are silent on whether E had knowledge of the risk.',
        'A necessary element that is not established on the facts cannot be assumed to exist. Since knowledge is not shown, liability is not established.',
      ],
      answer: 'No — knowledge is a necessary element and the facts do not establish it.',
    },
    {
      q: 'Why is "only if" different from "if" in a principle?',
      steps: [
        '"X is liable if A" makes A sufficient: establish A and liability follows.',
        '"X is liable only if A" makes A necessary: without A there is no liability, but A alone does not establish it either.',
        'So under "only if", showing that the condition is met does not answer the question — other requirements may remain. Questions are set precisely on this distinction.',
      ],
      answer: '"If" makes the condition sufficient; "only if" makes it merely necessary.',
    },
    {
      q: 'Principle: "An employer is liable for wrongs committed by an employee in the course of employment." Facts: G, a delivery driver, detours ten kilometres to visit a friend and injures H on the way. Is the employer liable?',
      steps: [
        'The element in issue is whether the wrong was committed "in the course of employment".',
        'A substantial detour for a purely personal purpose is generally outside the course of employment — the driver is said to be on a frolic of his own.',
        'Since that element fails, the employer is not liable, even though G was driving the company vehicle during working hours.',
      ],
      answer: 'No — the detour takes the act outside the course of employment.',
    },
    {
      q: 'A passage defines "vehicle" as "any device used for transport on land, including animal-drawn carts". Facts concern a bicycle. Is a bicycle a vehicle?',
      steps: [
        'The definition supplied governs entirely and replaces ordinary usage for this question.',
        'A bicycle is a device used for transport on land, so it falls within the main words of the definition.',
        'The inclusion of animal-drawn carts widens rather than narrows the definition, so it does not exclude bicycles. A bicycle is therefore a vehicle for the purposes of the passage.',
      ],
      answer: 'Yes — it falls within the definition given, whatever ordinary usage might suggest.',
    },
    {
      q: 'Two principles are given. Principle 1 imposes liability for damage to property. Principle 2 says no liability arises where the plaintiff consented. The plaintiff consented to a boxing match and was injured. Which governs?',
      steps: [
        'Apply each separately. Principle 1 concerns damage to property; the injury here is to the person, so it does not apply on its own terms.',
        'Principle 2 addresses consent, and the facts show consent to the activity.',
        'The apparent conflict dissolves once each principle is read carefully — they address different subject matter, and Principle 2 is the applicable one.',
      ],
      answer: 'Principle 2 — and the conflict was apparent rather than real, as it usually is.',
    },
    {
      q: 'A question asks "which of the following is the strongest argument for the defendant?" One option is a true statement about the facts. Is it necessarily the answer?',
      steps: [
        'The question is not asking what is true; it is asking which argument best serves the defendant.',
        'A true statement that does not bear on any element of the principle helps the defendant not at all.',
        'The strongest argument is the one that shows an element of the principle is not satisfied, or that an exception applies. Truth is necessary but nowhere near sufficient.',
      ],
      answer: 'No — the strongest argument is the one that defeats an element, not merely one that is true.',
    },
  ],

  practice: [
    {
      q: 'In CLAT legal reasoning, the applicable law for a question is:',
      options: ['The principle stated in the passage', 'The actual law of India', 'Whichever produces a just result', 'Established judicial precedent'],
      answer: 0,
      explain: 'The principle given governs entirely, even if it is a simplified or modified version of the real rule.',
    },
    {
      q: 'A principle joins three conditions with "and". If two are satisfied and one is not, liability:',
      options: ['Arises', 'Does not arise', 'Arises partially', 'Depends on which one failed'],
      answer: 1,
      explain: 'Cumulative conditions all have to be met; one failure defeats the whole.',
    },
    {
      q: '"X is liable only if he acted knowingly" means knowledge is:',
      options: ['Sufficient for liability', 'Necessary for liability', 'Irrelevant', 'Both necessary and sufficient'],
      answer: 1,
      explain: 'Without knowledge there is no liability, but knowledge alone does not establish it.',
    },
    {
      q: 'The facts are silent on an element that the plaintiff must prove. The result is that:',
      options: ['The element is presumed satisfied', 'The question cannot be answered', 'The plaintiff fails on that element', 'The court would investigate'],
      answer: 2,
      explain: 'A party bearing the burden of proof loses on any element the facts do not establish.',
    },
    {
      q: 'The single largest source of wrong answers in legal reasoning is:',
      options: ['Insufficient legal knowledge', 'Deciding by what seems fair', 'Slow reading', 'Vocabulary'],
      answer: 1,
      explain: 'The facts are constructed so that the legally correct answer often feels unjust.',
    },
    {
      q: 'A passage defines "public place" in a particular way. For the questions, that definition:',
      options: ['Supplements the ordinary meaning', 'Applies only if the ordinary meaning is unclear', 'Is advisory', 'Replaces the ordinary meaning entirely'],
      answer: 3,
      explain: 'A supplied definition governs completely, whatever ordinary usage would suggest.',
    },
    {
      q: '"May" in a legal principle indicates that an authority:',
      options: ['Must act', 'Is permitted but not required to act', 'Is prohibited from acting', 'Must act within a fixed time'],
      answer: 1,
      explain: '"Shall" is mandatory; "may" is discretionary, so failing to act is not a breach.',
    },
    {
      q: 'An exception attached to Principle 1 in a passage:',
      options: ['Applies to all the principles given', 'Overrides the facts', 'Applies only to Principle 1', 'Applies only if the facts are unclear'],
      answer: 2,
      explain: 'Read carefully which principle an exception belongs to; passages often list several with one exception.',
    },
    {
      q: 'A principle imposing liability "regardless of the care taken" is an example of:',
      options: ['Strict liability', 'Negligence', 'Vicarious liability', 'A defined term'],
      answer: 0,
      explain: 'Precautions are irrelevant, and the facts will be built to make them look relevant.',
    },
    {
      q: 'Where a general principle and a specific principle both cover a situation:',
      options: ['The general prevails', 'They cancel out', 'The earlier one prevails', 'The specific prevails'],
      answer: 3,
      explain: 'The specific governs the situation it addresses, which is the ordinary approach to apparent conflict.',
    },
    {
      q: 'A "reasonable person" standard is:',
      options: ['Subjective — what the defendant actually believed', 'Objective — what an ordinary prudent person would do', 'Determined by the defendant\'s profession only', 'Irrelevant to liability'],
      answer: 1,
      explain: 'An honest but unreasonable belief fails an objective test and would pass a subjective one.',
    },
    {
      q: 'Adding a defence from real law that the passage did not mention is:',
      options: ['Good practice, showing knowledge', 'Acceptable if legally accurate', 'A wrong answer', 'Required for full marks'],
      answer: 2,
      explain: 'The question is set on the principle as given, however incomplete that principle may be.',
    },
    {
      q: 'A question asks for the "strongest argument for the plaintiff". The correct option will:',
      options: ['Be the most sympathetic statement', 'Show that an element of the principle is satisfied', 'Be factually true about the case', 'Cite a real judgment'],
      answer: 1,
      explain: 'An argument helps only if it bears on an element of the principle; truth alone is not enough.',
    },
    {
      q: 'When several principles are given, the first step is to:',
      options: ['Combine them into one rule', 'Apply each separately before considering interaction', 'Choose the one that fits the facts best', 'Apply only the longest one'],
      answer: 1,
      explain: 'Taking them one at a time usually shows they address different aspects and do not truly conflict.',
    },
    {
      q: 'In a comprehension-based legal reasoning section, you should read:',
      options: ['The passage first, then the questions', 'The questions first, then scan the passage', 'Only the principles, skipping the discussion', 'The options first'],
      answer: 0,
      explain: 'The questions apply the principle to new facts, so they cannot be answered by scanning the passage.',
    },
    {
      q: 'The facts state that a defendant acted from good motives. Under a principle that does not mention motive, this is:',
      options: ['A complete defence', 'A partial defence', 'Grounds for reduced damages', 'Irrelevant to liability'],
      answer: 3,
      explain: 'What a principle does not require is as significant as what it does; the sympathetic fact is placed there to mislead.',
    },
  ],

  faqs: [
    {
      q: 'Do I need to know actual law for CLAT legal reasoning?',
      a: 'Formally, no — every principle you need is supplied. In practice, knowing the vocabulary of contract, tort and criminal law makes the passages much faster to read, because you are not decoding terminology while also applying it. But knowledge must never supply the answer: if the principle given differs from the real rule, the principle given governs.',
    },
    {
      q: 'Why does the "correct" answer so often feel unjust?',
      a: 'Because the facts are built that way deliberately. The section tests whether you can apply a rule as written rather than as you would prefer it to be, and the way to test that is to construct facts where the two diverge. A sympathetic defendant who is nonetheless liable, or a badly injured plaintiff who recovers nothing, is the question working as designed.',
    },
    {
      q: 'What is the difference between "if" and "only if"?',
      a: '"X is liable if A" makes A sufficient — establish A and liability follows. "X is liable only if A" makes A necessary — without A there is no liability, but A by itself does not establish it, because other requirements may remain. Questions are set precisely on this distinction, so the phrase "only if" should always slow you down.',
    },
    {
      q: 'What do I do when the facts are silent on an element?',
      a: 'Do not fill the gap. If the principle requires knowledge and the facts do not say whether the defendant knew, knowledge is not established. Where the principle allocates a burden of proof, the party bearing it loses on that element. Silence in the facts is information, and treating it as an invitation to infer is one of the commonest errors in the section.',
    },
    {
      q: 'How do I handle two principles that seem to conflict?',
      a: 'Apply each separately first, before trying to combine them. Nine times out of ten the conflict is apparent rather than real — they address different subject matter, or one is specific and the other general, in which case the specific governs. If they genuinely conflict on identical facts and the passage states no hierarchy, reread the question, because a well-set question rarely turns on an unresolvable clash.',
    },
    {
      q: 'Should I write out the elements even when the answer seems obvious?',
      a: 'Yes, at least during preparation. The commonest technical error is checking two elements of a three-part test, finding both satisfied, and concluding liability. Writing the numbered list makes the third element visible. It is slow at first and becomes automatic, and it removes a large share of the errors that are not caused by fairness reasoning.',
    },
    {
      q: 'What is the difference between an objective and a subjective standard?',
      a: 'An objective standard asks what a reasonable person would have believed or done; a subjective one asks what this particular person actually believed. A defendant who honestly but unreasonably thought he was in danger fails an objective test and passes a subjective one. The facts in these questions are usually constructed to separate the two, so read which standard the principle sets.',
    },
    {
      q: 'How should I review my mistakes?',
      a: 'By recording the reason, not just the answer. For each error, note which trap caught you: decided by fairness, imported outside law, added a fact the passage did not state, missed an element, or answered a different question from the one asked. After about thirty logged questions one pattern will dominate, and correcting that one pattern is the fastest improvement available.',
    },
    {
      q: 'How is this related to critical reasoning in CAT and GMAT?',
      a: 'Closely. Both are about applying stated premises rigorously without importing assumptions, and both punish answers that are reasonable rather than entailed. The traps map onto each other almost exactly — out of scope becomes importing outside law, and the too-extreme option becomes overreading a principle. Practice in one improves the other.',
    },
    {
      q: 'How many questions come from legal reasoning?',
      a: 'About a quarter of the CLAT UG paper, and a substantial section in AILET and the state law entrances, some of which retain the older standalone principle-and-fact format. The pattern has changed several times, so verify the current structure and question count before your attempt — but the method on this page applies to every version of it.',
    },
  ],

  related: [
    { label: 'The Indian Legal System', to: '/study-material/legal-reasoning/legal-system/' },
    { label: 'Contract, Tort & Crime', to: '/study-material/legal-reasoning/contract-tort-crime/' },
    { label: 'Critical Reasoning', to: '/study-material/varc/critical-reasoning/' },
    { label: 'Constitution', to: '/study-material/constitution/' },
    { label: 'All Legal Reasoning', to: '/study-material/legal-reasoning/' },
  ],
}
