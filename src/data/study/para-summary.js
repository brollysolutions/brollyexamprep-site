/**
 * Para Summary, Jumbles and Odd One Out —
 * /study-material/varc/para-summary/
 *
 * The three non-RC question types in CAT VARC. All three are typed rather than
 * chosen, so they carry no negative marking — which changes both the method
 * and the attempt strategy from the multiple-choice versions in other exams.
 */
export default {
  subject: 'varc',
  subjectName: 'VARC',
  slug: 'para-summary',
  title: 'Para Summary & Jumbles',
  seoTitle: 'CAT Para Summary, Para Jumbles and Odd One Out | Method & Practice',
  metaDescription:
    'Complete method for the non-RC questions in CAT VARC — para summary, para jumbles in the typed answer format, and odd sentence out. Covers the summary traps.',
  readMinutes: 21,
  lead: [
    'The non-reading-comprehension questions in CAT VARC are worth attempting by almost everyone, for one structural reason: they are answered by typing rather than by choosing, so a wrong answer costs nothing. In a section with negative marking on everything else, that makes them the only risk-free marks available.',
    'All three types test the same underlying skill — recognising the spine of an argument and distinguishing it from the supporting material. This page gives a separate method for each, sets out the four faults that make a summary option wrong, and explains why the typed format makes para jumbles harder here than in any other exam.',
  ],

  weightage: [
    { exam: 'CAT VARC section', count: '8 questions', note: 'Typically para summary, para jumbles and odd one out, in the typed-answer format. The exact split has varied between years and should be verified against the current pattern.' },
    { exam: 'XAT Verbal Ability', count: '3–5 questions', note: 'Usually as multiple choice rather than typed, which makes them easier.' },
    { exam: 'SNAP / NMAT / CMAT', count: '3–6 questions', note: 'Standard multiple-choice para jumbles, closer to the banking format.' },
    { exam: 'Banking and SSC English', count: '4–5 questions', note: 'Multiple choice with four options, and generally more straightforward.' },
    { exam: 'GRE and GMAT', count: 'Not asked in this form', note: 'The related skills appear inside reading comprehension and critical reasoning instead.' },
  ],

  contents: [
    { icon: 'doc', title: 'The three question types', sub: 'Format and marking', href: '#formats' },
    { icon: 'target', title: 'Para summary', sub: 'The method', href: '#summary' },
    { icon: 'search', title: 'Summary traps', sub: 'Four ways an option fails', href: '#traps' },
    { icon: 'refresh', title: 'Para jumbles', sub: 'Sequencing without options', href: '#jumbles' },
    { icon: 'layers', title: 'The linking clues', sub: 'What fixes two sentences together', href: '#clues' },
    { icon: 'chart', title: 'Odd one out', sub: 'Finding the intruder', href: '#odd' },
    { icon: 'clock', title: 'Timing and practice', sub: 'How to work on these', href: '#approach' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'formats',
      heading: 'The three question types',
      eyebrow: 'Format and marking',
      intro:
        'Three formats, one skill. Each presents a short argument and asks you to identify its structure — by compressing it, by reassembling it, or by finding what does not belong to it.',
      blocks: [
        {
          type: 'table',
          caption: 'The formats',
          head: ['Type', 'What is given', 'What is asked'],
          rows: [
            ['Para summary', 'A paragraph of four to six sentences, and four candidate summaries', 'Choose the option that best captures the paragraph — usually answered by clicking, so negative marking may apply. Check the current pattern.'],
            ['Para jumbles', 'Four or five sentences labelled 1 to 5, in scrambled order', 'Type the correct sequence as a string of digits. No options are given, so there is nothing to work backwards from — and no negative marking.'],
            ['Odd sentence out', 'Five sentences, four of which form a coherent paragraph', 'Type the number of the sentence that does not belong. The remaining four need not be arranged.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why the typed format changes everything',
              'In a multiple-choice jumble, three of the four options are usually eliminable from the opening sentence alone, so the question is really a two-way choice. In the typed format there is no such shortcut: you must construct the whole sequence, and a single misplaced pair makes the entire answer wrong. It is the same question at perhaps twice the difficulty.',
            ],
            [
              'The compensation',
              'No negative marking. A typed answer that is wrong costs only the time spent on it. That makes these the questions to attempt when uncertain, and it makes leaving one blank strictly worse than a considered guess — a rule that reverses everything true of the rest of the section.',
            ],
            [
              'The shared skill',
              'All three require you to separate the claim from its support. A summary must keep the claim and drop the illustration; a jumble is reassembled by tracking how each sentence advances or supports the claim; and the odd sentence is the one that supports a different claim. Candidates who read for information rather than for argument find all three hard for the same reason.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'summary',
      heading: 'Para summary',
      eyebrow: 'The method',
      intro:
        'A summary is not a shortened version of the paragraph. It is a statement of what the paragraph asserts, with everything that merely supports the assertion removed.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Step one — find the claim',
              'Read the paragraph and identify the one sentence that states its position. It is often the last sentence, frequently the first, and occasionally implied rather than written. Everything else is doing something to that claim: illustrating it, qualifying it, contrasting it with an alternative, or supplying evidence.',
            ],
            [
              'Step two — note the shape',
              'Is the paragraph asserting one thing, or contrasting two? Is it conceding a point before rejecting it? Is it explaining a cause? The correct summary preserves the shape. A paragraph that says "although X, in fact Y" cannot be summarised by a statement about Y alone, because the concession is part of what is being asserted.',
            ],
            [
              'Step three — write your own before reading the options',
              'In one sentence, in your own words, before looking at the four candidates. This is the single most valuable habit in the question type, because the options are designed to be individually plausible and collectively confusing. Having your own version gives you something to compare them against rather than comparing them with one another.',
            ],
            [
              'Step four — match, do not judge',
              'Choose the option closest to your own sentence, not the one you find most interesting or most agreeable. Summary options frequently include a genuinely insightful extension of the paragraph, which is wrong precisely because the paragraph did not say it.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'What a summary must keep and drop',
          text:
            'Keep the main claim, the qualification attached to it and the logical relation between the parts. Drop examples, names of studies, statistics, illustrative anecdotes and any specific instance offered as evidence. If an option is built around the paragraph\'s example rather than its claim, it is wrong however accurately it reports the example.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'traps',
      heading: 'Summary traps',
      eyebrow: 'Four ways an option fails',
      intro:
        'The wrong summaries are constructed to specific patterns. Naming the pattern is what makes elimination reliable, exactly as with reading comprehension options.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Too narrow',
              'The option accurately restates one part of the paragraph — usually the example or the last sentence — and omits the claim it was supporting. It is fully consistent with the paragraph and still wrong, because a summary must cover the whole. This is the commonest fault in the type.',
            ],
            [
              'Too broad or extended',
              'The option generalises beyond what the paragraph asserted, or draws a conclusion the paragraph merely made possible. It often reads as the more insightful option, which is what makes it dangerous. A summary reports; it does not extend.',
            ],
            [
              'Distorted',
              'The option reverses a relation, converts a correlation into a cause, drops a qualifier, or attributes to the author a position the paragraph was describing in order to reject. Paragraphs of the "although X, in fact Y" form generate these constantly, since an option asserting X alone looks well-supported.',
            ],
            [
              'Right content, wrong emphasis',
              'The option contains everything the paragraph said but reorganises it so that a subordinate point becomes the main one. The test is to ask what the paragraph was for. If the option would be an odd answer to that question, its emphasis is wrong even though its facts are right.',
            ],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The tie-breaker',
              'When two options survive, compare their scope rather than their wording. One will usually cover slightly more or slightly less of the paragraph than the other. The correct summary covers the paragraph exactly — no part of the paragraph unaccounted for, and nothing asserted that the paragraph did not.',
            ],
            [
              'Length is not a signal',
              'Candidates often assume the shortest option is the summary, since summaries are short. In practice the correct option is frequently the longest, because preserving a qualification or a contrast takes words. Judge by coverage, never by length.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'jumbles',
      heading: 'Para jumbles',
      eyebrow: 'Sequencing without options',
      intro:
        'Four or five scrambled sentences, and no options to work backwards from. The method is to build the sequence from certain pairs outward rather than to guess an order and check it.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Step one — read all the sentences before moving anything',
              'Identify the topic and the position being argued. Until you know what the paragraph is about, no ordering decision can be made on principle, only by guess.',
            ],
            [
              'Step two — find mandatory pairs',
              'Look for two sentences that must be adjacent — one containing a pronoun or a definite reference that only the other can supply, or an explicit connective that demands a specific predecessor. A mandatory pair is worth more than an opening sentence, because it fixes two positions at once and rules out many orders.',
            ],
            [
              'Step three — identify the opener',
              'The opening sentence introduces its subject with a full noun phrase rather than a pronoun, contains no backward-looking connective, and does not answer a question that has not been asked. A sentence beginning "This", "Such", "However", "Therefore", "Instead" or "Yet" is almost never the opener.',
            ],
            [
              'Step four — build outward and check the whole',
              'Extend from the pairs to a full sequence, then read the result straight through as a paragraph. It should read without a jolt. Because the answer is typed, there is no option list to reassure you, so this final read is the only verification available — and it is worth the thirty seconds it takes.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Why the closer matters less than candidates think',
          text:
            'Much advice suggests identifying the concluding sentence first, since it often carries "thus", "therefore" or a summarising phrase. In practice this helps less than finding a mandatory pair, because several sentences may look conclusive while only one pair is genuinely forced. Work from what is certain, not from what is likely.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'clues',
      heading: 'The linking clues',
      eyebrow: 'What fixes two sentences together',
      intro:
        'Six categories of clue, in rough order of reliability. The first two are close to certain; the last two are suggestive only and should never override the first two.',
      blocks: [
        {
          type: 'table',
          caption: 'Clues and how much weight to give them',
          head: ['Clue', 'What it shows', 'Reliability'],
          rows: [
            ['Pronoun reference', 'A sentence containing "it", "they", "this", "these", "such" or "his" must follow the sentence that names what is being referred to', 'Very high. This is the strongest single clue and the one to look for first.'],
            ['Definite article and repeated noun', '"The proposal" must follow the sentence that introduced a proposal; "a proposal" introduces it', 'Very high. The shift from indefinite to definite fixes the order.'],
            ['Explicit connective', '"However", "moreover", "consequently", "nevertheless", "for instance" all point backward to something specific', 'High, but they tell you what kind of sentence precedes, not exactly which one.'],
            ['Chronology and sequence', 'Dates, "first", "later", "subsequently", "eventually" impose an order', 'High where present, but many paragraphs contain none.'],
            ['Cause and effect', 'A stated cause precedes its effect unless the paragraph is explaining backwards', 'Moderate. Some paragraphs deliberately state the effect first and then explain it.'],
            ['General to specific', 'A general statement usually precedes its illustration', 'Moderate. It is a tendency, not a rule, and should never override a pronoun reference.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The most common error',
              'Ordering by topic similarity — putting two sentences together because they mention the same thing. Sentences in a paragraph all mention the same thing; that is what makes it a paragraph. Adjacency is established by reference and connection, not by shared subject matter.',
            ],
            [
              'The second most common error',
              'Trusting a connective too far. "However" tells you the previous sentence said something being reversed, which may be any of three sentences. A pronoun tells you the previous sentence named a specific thing, which is usually only one. When the two clues conflict, follow the pronoun.',
            ],
            [
              'Odd one out uses the same clues in reverse',
              'The intruding sentence is the one that neither refers backward to any other nor is referred to by any. It typically mentions the same topic — otherwise the question would be trivial — but contributes to a different claim.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'odd',
      heading: 'Odd one out',
      eyebrow: 'Finding the intruder',
      intro:
        'Five sentences of which four form a paragraph. The trap is that all five are on the same topic, so topic is no guide at all.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Step one — find the four, not the one',
              'Construct the coherent paragraph from whichever sentences link. Once four sentences form a sequence that reads properly, the remaining one is the answer by elimination. Searching directly for the odd sentence usually produces the sentence you happen to find least interesting.',
            ],
            [
              'Step two — ask what claim each sentence serves',
              'The intruder is normally on the same subject but supports a different proposition, or shifts from description to evaluation, or from the general phenomenon to one specific case that the others do not build on. It is a difference of purpose, not of topic.',
            ],
            [
              'Step three — test for orphaned references',
              'The four coherent sentences will chain by pronouns and definite references. The intruder typically has no such link in either direction: nothing in it picks up an earlier sentence, and no later sentence picks it up. That orphaning is the surest structural sign.',
            ],
            [
              'The common trap',
              'A sentence that is more abstract or more strongly worded than the rest is often assumed to be the intruder, when in fact it is the paragraph\'s main claim and the others are its support. Before deciding, check whether the sentence you suspect is being supported by the others — if it is, it belongs, and something else does not.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'approach',
      heading: 'Timing and practice',
      eyebrow: 'How to work on these',
      intro:
        'Practical advice on how much time to give these questions in the exam and how to improve at them beforehand.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Time per question',
              'Two to three minutes for a para summary, two to three for a jumble, and one and a half to two for an odd one out. Beyond about three minutes on any of them, additional time rarely converts into a correct answer — the sequence either resolves or it does not. Set a mental limit and type your best construction when it is reached.',
            ],
            [
              'Never leave one blank',
              'They are typed rather than chosen, so there is no penalty for being wrong. A partially reasoned sequence has a real chance of being right, and it costs nothing if it is not. This is the one place in CAT where guessing is unambiguously correct behaviour.',
            ],
            [
              'Practise without looking at the answer key',
              'For jumbles in particular, write your sequence and your reason for each adjacency before checking. If your sequence is right for the wrong reason, you have learnt nothing, and the exam will find you out on a harder set. The reasoning matters more than the answer here than in almost any other question type.',
            ],
            [
              'Make your own from articles',
              'Take a paragraph from a long-form essay, break it into sentences, shuffle them and reassemble it a week later. Doing this a dozen times teaches how real paragraphs are constructed far better than working through prepared sets, because you see the original and can compare it with your reconstruction.',
            ],
            [
              'Read the summary of what you read',
              'After each article in your daily reading, write a single sentence stating what the author argued. That is precisely the para summary skill, practised on longer material, and it also serves the reading comprehension main-idea questions. It costs a minute a day.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A paragraph argues: "Solar costs have fallen sharply. Yet adoption in poorer countries has lagged, because financing rather than technology is the binding constraint." Which is the better summary — that solar has become cheap, or that cheapness has not been enough because finance is the real barrier?',
      steps: [
        'The first sentence states a fact; the second reverses the expectation it creates, signalled by "Yet".',
        'A summary must preserve the shape of the argument, and here the shape is a concession followed by the real claim.',
        'Reporting only the fall in costs is the "too narrow" fault — it takes the concession and drops the point.',
      ],
      answer: 'The second — that falling costs have not sufficed because financing is the binding constraint.',
    },
    {
      q: 'Why is a summary option built around the paragraph\'s example always wrong?',
      steps: [
        'An example exists to support a claim; it is not itself the claim.',
        'A summary states what the paragraph asserts, so it must keep the claim and drop the illustration.',
        'An option reporting the example accurately is therefore accurate and irrelevant — the "too narrow" fault in its purest form.',
      ],
      answer: 'Because an example is support, not assertion, and a summary states the assertion.',
    },
    {
      q: 'Sentence A begins "This assumption proved costly." Sentence C ends "…on the assumption that demand would recover." What follows?',
      steps: [
        'Sentence A opens with the demonstrative "This assumption", which must refer to an assumption already named.',
        'Sentence C names exactly such an assumption in its final clause.',
        'So CA is a mandatory pair, and A cannot be the opening sentence of the paragraph.',
      ],
      answer: 'CA is a mandatory pair, in that order.',
    },
    {
      q: 'Which of these could open a paragraph: (1) "However, the results were disappointing." (2) "In 2019 the government launched a pilot scheme."',
      steps: [
        'Sentence 1 opens with "However", a connective that reverses something already stated, so there must be a preceding sentence.',
        'Sentence 2 introduces its subject with a full noun phrase, contains no backward reference and needs nothing before it.',
        'Sentence 2 is therefore the opener, and sentence 1 must come later.',
      ],
      answer: 'Sentence 2. A sentence beginning with "However" is almost never the opener.',
    },
    {
      q: 'In an odd-one-out set, all five sentences are about urban air pollution. How do you find the intruder?',
      steps: [
        'Topic is useless as a guide, since all five share it by design.',
        'Build the four-sentence paragraph instead, chaining by pronouns and definite references.',
        'The sentence left over is the answer — and it will typically be the one that no other sentence refers to and that refers to no other, even though it is on the same subject.',
      ],
      answer: 'By constructing the coherent four and taking the remainder, not by hunting for the odd one directly.',
    },
    {
      q: 'Two summary options survive elimination. What is the tie-breaker?',
      steps: [
        'Stop comparing the options with each other, which produces deadlock.',
        'Compare each with the paragraph on scope: does it account for every part of the paragraph, and does it assert anything the paragraph did not?',
        'One will cover slightly less than the paragraph or slightly more. The correct summary matches it exactly.',
      ],
      answer: 'Scope — the right summary covers the paragraph exactly, no more and no less.',
    },
    {
      q: 'You have two minutes left and an unanswered para jumble. What should you do?',
      steps: [
        'Para jumbles in CAT are typed rather than chosen, so a wrong answer carries no penalty.',
        'Leaving it blank guarantees zero; typing a sequence gives a real chance of three marks.',
        'Use whatever is certain — the opener, or one mandatory pair — and fill the rest by best judgment.',
      ],
      answer: 'Type your best sequence. With no negative marking, a blank is strictly worse than a guess.',
    },
    {
      q: 'Why is the correct summary sometimes the longest option?',
      steps: [
        'Candidates assume a summary must be short, since summarising means shortening.',
        'But preserving a contrast or a qualification takes words — "although X, Y nevertheless holds" cannot be compressed without losing the shape.',
        'A short option often achieves its brevity by dropping the qualification, which makes it the "distorted" or "too narrow" fault. Judge by coverage, not by length.',
      ],
      answer: 'Because preserving a qualification or contrast takes words, and dropping it distorts the paragraph.',
    },
  ],

  practice: [
    {
      q: 'In CAT, para jumbles and odd-one-out questions are usually:',
      options: ['Multiple choice with negative marking', 'Typed answers with no negative marking', 'Multiple choice without negative marking', 'Optional questions'],
      answer: 1,
      explain: 'Which is why they should never be left blank, whatever your confidence.',
    },
    {
      q: 'A sentence beginning with "Such a policy…" must:',
      options: ['Follow a sentence describing a policy', 'Open the paragraph', 'Conclude the paragraph', 'Be the odd one out'],
      answer: 0,
      explain: 'The demonstrative "such" refers backward, so the referent must already have been introduced.',
    },
    {
      q: 'The strongest clue for fixing two sentences as adjacent is:',
      options: ['Shared subject matter', 'A connective such as "however"', 'Similar sentence length', 'A pronoun or definite reference'],
      answer: 3,
      explain: 'Shared subject matter is worthless, since every sentence in a paragraph shares it.',
    },
    {
      q: 'A para summary option that accurately restates the paragraph\'s example is:',
      options: ['Correct, as it uses the paragraph\'s content', 'Wrong — the "too narrow" fault', 'Wrong — the "distorted" fault', 'Correct if it is the last sentence'],
      answer: 1,
      explain: 'An example supports the claim; a summary must state the claim.',
    },
    {
      q: 'A paragraph runs "Although X is widely believed, the evidence suggests Y." A correct summary must:',
      options: ['State X only', 'State Y only', 'Preserve the contrast between X and Y', 'Extend Y to a general conclusion'],
      answer: 2,
      explain: 'The shape of the argument is part of what is being asserted; dropping the concession distorts it.',
    },
    {
      q: 'The first step in an odd-one-out question should be to:',
      options: ['Construct the coherent four-sentence paragraph', 'Find the sentence that seems different', 'Find the opening sentence', 'Eliminate the longest sentence'],
      answer: 0,
      explain: 'The remainder is then the answer by elimination, which is far more reliable than hunting directly.',
    },
    {
      q: 'Which sentence is most likely to be the opener of a jumbled paragraph?',
      options: ['"Therefore, the results were mixed."', '"This is what the study found."', '"In 1991 India liberalised its economy."', '"Such reforms rarely succeed."'],
      answer: 2,
      explain: 'It introduces its subject fully and contains no backward-looking reference or connective.',
    },
    {
      q: 'In a summary question, an option that draws an insightful conclusion the paragraph did not state is:',
      options: ['Correct, being the natural implication', 'Wrong — the "too broad" fault', 'Wrong — the "too narrow" fault', 'Correct if consistent with the paragraph'],
      answer: 1,
      explain: 'A summary reports what was said; it does not extend it, however reasonable the extension.',
    },
    {
      q: 'A "mandatory pair" in a para jumble means:',
      options: ['Two sentences of similar length', 'The first and last sentences', 'Two sentences on the same topic', 'Two sentences that must be adjacent, in a fixed order'],
      answer: 3,
      explain: 'Usually established by a pronoun or definite reference in one that only the other supplies.',
    },
    {
      q: 'The correct para summary is best identified by:',
      options: ['Choosing the shortest option', 'Choosing the option using the paragraph\'s own words', 'Writing your own summary first and matching', 'Choosing the most interesting option'],
      answer: 2,
      explain: 'It gives you something to compare the options against, rather than comparing them with one another.',
    },
    {
      q: 'Ordering two sentences together because they mention the same subject is:',
      options: ['The correct method', 'The commonest error in para jumbles', 'Valid only for five-sentence sets', 'Valid only when no pronouns are present'],
      answer: 1,
      explain: 'Every sentence in a paragraph shares the subject; adjacency comes from reference and connection.',
    },
    {
      q: 'How long should a para jumble be given before typing a best guess?',
      options: ['One minute', 'Two to three minutes', 'Five minutes', 'As long as it takes'],
      answer: 1,
      explain: 'Beyond about three minutes further time rarely converts into a correct sequence.',
    },
    {
      q: 'The odd sentence in an odd-one-out set is typically identified by:',
      options: ['Being on a different topic', 'Being the longest', 'Being the most abstract', 'Having no reference link in either direction'],
      answer: 3,
      explain: 'It is usually on the same topic — otherwise the question would be trivial — but structurally orphaned.',
    },
    {
      q: 'A summary option that reverses cause and effect exhibits which fault?',
      options: ['Too narrow', 'Too broad', 'Distorted', 'Wrong emphasis'],
      answer: 2,
      explain: 'Distortion also covers dropped qualifiers and views attributed to an author who was rejecting them.',
    },
    {
      q: 'When a pronoun clue and a connective clue conflict, you should follow:',
      options: ['The pronoun', 'The connective', 'Whichever comes first', 'Neither — reorder from scratch'],
      answer: 0,
      explain: 'A pronoun points to one specific referent; a connective only indicates the kind of sentence preceding.',
    },
    {
      q: 'The best independent practice for these question types is to:',
      options: ['Shuffle paragraphs from real essays and reassemble them later', 'Work through prepared question sets only', 'Memorise connective lists', 'Read the answer key first'],
      answer: 0,
      explain: 'You then have the original to compare against, which teaches how real paragraphs are built.',
    },
  ],

  faqs: [
    {
      q: 'Why are CAT para jumbles harder than banking ones?',
      a: 'Because there are no options. In a multiple-choice jumble, identifying the opening sentence usually eliminates three of the four options, so the question collapses into a two-way decision. In CAT the answer is typed, so the whole sequence must be constructed and a single misplaced pair makes it wrong. Same question, roughly twice the work.',
    },
    {
      q: 'Should I attempt a jumble I am unsure about?',
      a: 'Always. These questions are typed rather than chosen, so a wrong answer carries no penalty at all — only the time already spent. Leaving one blank guarantees zero; typing a partially reasoned sequence gives a real chance of three marks. This is the single clearest case in CAT where guessing is correct behaviour.',
    },
    {
      q: 'What is the difference between a summary and a shortened paragraph?',
      a: 'A shortened paragraph keeps a bit of everything. A summary keeps only what is asserted and drops everything that merely supports it — examples, statistics, named studies, illustrative cases. It also preserves the shape of the argument: a paragraph that concedes before asserting must be summarised in a way that keeps both halves.',
    },
    {
      q: 'How do I stop choosing the "too narrow" option?',
      a: 'Write your own one-sentence summary before looking at the options, and then check each option against the whole paragraph rather than against the sentence you remember best. The narrow option is almost always a faithful restatement of the last sentence or the example, so if your candidate answer corresponds to only one part of the paragraph, it is the wrong kind of answer.',
    },
    {
      q: 'Which linking clue is most reliable?',
      a: 'The pronoun or definite reference. A sentence containing "this", "such", "they" or "the proposal" cannot precede the sentence that introduces the thing referred to, so it fixes two sentences in a specific order. Connectives such as "however" are weaker, because they tell you what kind of sentence precedes without identifying which. When the two conflict, follow the pronoun.',
    },
    {
      q: 'Is the shortest summary option usually correct?',
      a: 'No, and this assumption costs marks regularly. Preserving a contrast or a qualification takes words, so the correct summary is often the longest option, while a short one has frequently achieved its brevity by dropping the very qualification that made the paragraph interesting. Judge by coverage of the paragraph, never by length.',
    },
    {
      q: 'How do I find the odd sentence when all five are on the same topic?',
      a: 'Do not look for it. Build the coherent four-sentence paragraph instead, chaining by pronoun and definite reference, and take whatever is left over. The intruder is normally on the same topic but serves a different claim, and it will be structurally orphaned — nothing refers to it and it refers to nothing.',
    },
    {
      q: 'How much time should these questions get?',
      a: 'Two to three minutes each for summary and jumbles, and about two for odd one out. Beyond three minutes on any of them, more time rarely converts into a correct answer — the structure either resolves or it does not. Set the limit in advance, and when it is reached, type your best construction and move on.',
    },
    {
      q: 'How should I practise these outside prepared question sets?',
      a: 'Take paragraphs from long-form essays, break them into sentences, shuffle them and reassemble them a week later when you have forgotten the original. Comparing your reconstruction with the real paragraph teaches how arguments are actually built, which prepared sets cannot, because there you only see whether you were right and not why the author ordered it so.',
    },
    {
      q: 'Do these skills help anywhere else?',
      a: 'Directly, in three places. Para summary is the same skill as the main-idea question in reading comprehension. Jumbles train you to track how sentences connect, which is what structural and function questions test. And both improve your reading of dense passages, because you begin noticing the architecture rather than only the content. Time spent here is not spent away from RC.',
    },
  ],

  related: [
    { label: 'Reading Comprehension Strategy', to: '/study-material/varc/rc-strategy/' },
    { label: 'Critical Reasoning', to: '/study-material/varc/critical-reasoning/' },
    { label: 'Para Jumbles (Banking & SSC)', to: '/study-material/english/para-jumbles/' },
    { label: 'DILR', to: '/study-material/dilr/' },
    { label: 'All VARC', to: '/study-material/varc/' },
  ],
}
