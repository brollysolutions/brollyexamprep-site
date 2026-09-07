/**
 * Cloze Test — /study-material/english/cloze-test/
 *
 * Organised around the order in which the blanks should be filled — grammar
 * first, then connectors, then collocation, then tone — because a cloze
 * passage is a system rather than a list of independent gaps, and every blank
 * you settle constrains the ones still open.
 */
export default {
  subject: 'english',
  subjectName: 'English',
  slug: 'cloze-test',
  title: 'Cloze Test',
  seoTitle: 'Cloze Test for SSC & Bank Exams | Connectors, Collocation & Practice',
  metaDescription:
    'Complete Cloze Test study material for SSC, banking and state exams — how to read the passage, grammar clues, connector logic, collocations.',
  readMinutes: 17,
  lead: [
    'A cloze test is a passage with words removed, and the single most useful thing to understand about it is that the blanks are not independent. The word you put in the third gap is constrained by the connector you chose in the second, and the whole passage has a direction that decides half the answers before you look at any option list.',
    'That is why filling the blanks in the order they appear is the slowest possible method. This page gives the order that works — read the whole passage first, settle the grammar-forced blanks, then the connectors, then the fixed word partnerships, and leave the judgement calls until the passage has told you what it is arguing.',
  ],

  weightage: [
    { exam: 'SSC CGL Tier 1', count: '3–5 questions', note: 'One passage of five blanks — among the highest-weightage English topics in the paper.' },
    { exam: 'SSC CGL Tier 2', count: '5–8 questions', note: 'Longer passages, sometimes two of them.' },
    { exam: 'Banking Prelims (IBPS / SBI)', count: '5–8 questions', note: 'Traditional cloze, or the newer double-filler and word-bank formats.' },
    { exam: 'Banking & Insurance Mains', count: '5–10 questions', note: 'Usually new-pattern, with two words per blank or a shared word bank.' },
    { exam: 'State PSC & Police exams', count: '3–5 questions', note: 'Traditional single-word cloze close to the SSC pattern.' },
  ],

  contents: [
    { icon: 'doc', title: 'What a cloze test is', sub: 'And the two formats it comes in', href: '#what' },
    { icon: 'target', title: 'The order to fill blanks', sub: 'Never left to right', href: '#method' },
    { icon: 'layers', title: 'Grammar clues', sub: 'What part of speech the gap needs', href: '#grammar-clue' },
    { icon: 'refresh', title: 'Connector logic', sub: 'The highest-yield blanks in the passage', href: '#connectors' },
    { icon: 'book', title: 'Collocation', sub: 'Words that travel in fixed pairs', href: '#collocation' },
    { icon: 'chart', title: 'Positive and negative charge', sub: 'Matching the direction of the passage', href: '#charge' },
    { icon: 'globe', title: 'New-pattern cloze', sub: 'Double fillers and word banks', href: '#new-pattern' },
    { icon: 'bell', title: 'Where marks are lost', sub: 'The recurring mistakes', href: '#mistakes' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten blanks worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'what',
      heading: 'What a cloze test is',
      eyebrow: 'And what it is testing',
      intro:
        'A short passage with words removed, each gap offering four choices. It looks like a vocabulary test and is really a test of whether you can follow an argument, because most blanks are decided by the sentence around them rather than by the meaning of the word alone.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Traditional cloze',
              'One blank, four single-word options. Five to ten blanks per passage. The SSC and state-exam standard, and still common in banking prelims.',
            ],
            [
              'Double fillers',
              'Each blank takes two words, and both must fit. Far easier than it looks — one of the two positions is usually obvious, and it eliminates two or three options at once.',
            ],
            [
              'Word bank cloze',
              'A list of words is given for the whole passage and each is used once. Fill the certain blanks first; every word you consume shortens the list for the ones that remain.',
            ],
            [
              'Sentence-based cloze',
              'The gap takes a whole phrase or clause rather than a word. Solve it by direction — what must the sentence be doing at that point — rather than by fitting the options one at a time.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The blanks are connected',
          text:
            'This is the fact candidates most often miss. If blank two is a contrast connector, the sentence after it must run against the sentence before it — which decides whether blank three is a positive or a negative word. Treating each gap as an independent question is what turns a two-minute passage into a five-minute one.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'The order to fill blanks',
      eyebrow: 'Learn this properly',
      intro:
        'Filling left to right means guessing at the hardest blank while the passage is still unclear. Fill by certainty instead, and the passage does the work for you.',
      blocks: [
        {
          type: 'formula',
          title: 'The order that works',
          items: [
            { expr: '1. Read the whole passage first, blanks and all', note: 'Thirty seconds. You need the topic and the direction — is the writer defending something, criticising it, or tracing how it changed?' },
            { expr: '2. Fill the blanks that grammar decides', note: 'A gap after a possessive needs a noun; a gap after "to" needs a base verb. These take five seconds each and have nothing to do with meaning.' },
            { expr: '3. Fill the connector blanks next', note: 'They are the most decidable, and each one fixes the relationship between two sentences — which constrains everything nearby.' },
            { expr: '4. Then the fixed collocations', note: 'Pose a threat, draw a conclusion, meet a demand. If one option makes a standard partnership and the other three do not, that is the answer regardless of meaning.' },
            { expr: '5. Leave the judgement calls until last', note: 'By then the passage is nearly complete, its direction is settled, and the remaining gaps usually have only one option that fits the tone.' },
            { expr: '6. Read the finished passage through once', note: 'Twenty seconds. A wrong connector is obvious on a full read and almost invisible while you are choosing it.' },
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'grammar-clue',
      heading: 'Grammar clues',
      eyebrow: 'The free blanks',
      intro:
        'Before thinking about meaning at all, ask what kind of word the gap can accept. Options are routinely built from the same root in four different forms, and three of them are ungrammatical.',
      blocks: [
        {
          type: 'table',
          caption: 'What the words around the blank demand',
          head: ['The blank sits after', 'It must be', 'Example'],
          rows: [
            ['a possessive or an article', 'a noun', "The committee's DECISION surprised nobody — not decide, decided or decisive."],
            ['"to"', 'a base verb', 'They agreed to POSTPONE the meeting.'],
            ['a preposition', 'a noun or an -ing form', 'Without WARNING; after COMPLETING the work.'],
            ['a modal (can, must, should)', 'a base verb', 'The damage could have been PREVENTED.'],
            ['"despite" or "in spite of"', 'a noun phrase, never a clause', 'DESPITE the heavy rain — but ALTHOUGH it rained heavily.'],
            ['a linking verb (is, seems, became)', 'an adjective or a noun', 'The report seemed OUTDATED.'],
            ['"very" before an uncountable noun phrase', 'little, not few', 'Very LITTLE of the building survives.'],
          ],
        },
        {
          type: 'note',
          title: 'Check the form before the meaning, always',
          text:
            'When the four options are decide, decided, decisive and decision, the question is not testing your vocabulary at all — it is testing whether you noticed the apostrophe-s in front of the gap. These blanks are the cheapest marks in the passage and they are lost only by candidates who start from meaning.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'connectors',
      heading: 'Connector logic',
      eyebrow: 'The highest-yield blanks',
      intro:
        'A connector blank is a question about the relationship between two statements, and that relationship is visible without knowing what either statement means. Read what comes before and after, decide the relationship, then pick the word.',
      blocks: [
        {
          type: 'table',
          caption: 'The relationship, and the words that carry it',
          head: ['Relationship', 'Connectors', 'The test'],
          rows: [
            ['Contrast', 'however, but, nevertheless, yet, on the contrary, conversely', 'The second statement works against the first.'],
            ['Concession', 'although, though, even though, while, despite, in spite of', 'The first fact is admitted, and the second holds anyway.'],
            ['Addition', 'moreover, furthermore, besides, in addition, also, likewise', 'The second statement pushes in the same direction as the first.'],
            ['Cause', 'because, since, as, owing to, due to', 'The second statement explains the first.'],
            ['Effect', 'therefore, thus, hence, consequently, as a result, so', 'The second statement follows from the first.'],
            ['Example', 'for instance, for example, such as, namely', 'The second statement is a particular case of the first.'],
            ['Sequence', 'first, then, subsequently, meanwhile, finally', 'The two statements are ordered in time.'],
            ['Condition', 'if, unless, only if, provided that', 'The second depends on the first being true.'],
          ],
        },
        {
          type: 'formula',
          title: 'The traps built into connector blanks',
          items: [
            { expr: '"Although X, Y" — never add "but" to the second clause', note: 'Although he was tired, he finished the work. Not "although he was tired, but he finished".' },
            { expr: '"Despite" and "in spite of" take a noun, "although" takes a clause', note: 'Despite the rain / although it rained. Options exploit this constantly.' },
            { expr: '"Because of" takes a noun, "because" takes a clause', note: 'Because of the delay / because the train was delayed.' },
            { expr: '"Unless" already contains a negative', note: 'The loan will be sanctioned ONLY IF you submit the certificate. "Unless you submit" would reverse the meaning entirely.' },
            { expr: 'Two contrast connectors in one sentence cancel each other', note: 'If the sentence already contains "however", the blank is not another contrast word.' },
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'collocation',
      heading: 'Collocation',
      eyebrow: 'Fixed partnerships',
      intro:
        'Some words simply travel together, and no rule explains why. When one option forms a standard partnership with the word beside the gap and the others do not, that is the answer even if all four are close in meaning.',
      blocks: [
        {
          type: 'table',
          caption: 'Collocations that appear in exam passages',
          head: ['Phrase', 'What goes with it', 'The tempting wrong option'],
          rows: [
            ['pose a threat', 'threats are posed, not made or given', 'make a threat — possible, but a different meaning'],
            ['draw a conclusion', 'conclusions are drawn', 'take a conclusion'],
            ['meet a demand', 'demands are met', 'fulfil a demand — weaker collocation'],
            ['raise concerns', 'concerns are raised', 'lift concerns'],
            ['play a role', 'roles are played', 'do a role'],
            ['strike a balance', 'balances are struck', 'make a balance'],
            ['shed light on', 'light is shed', 'throw light at'],
            ['bear the brunt of', 'the brunt is borne', 'take the brunt of — used, but less standard'],
            ['take into account', 'a fixed phrase in this order', 'take in account'],
            ['come to terms with', 'another fixed phrase', 'come to term with'],
          ],
        },
        {
          type: 'note',
          title: 'How to use collocation when you are unsure of the meaning',
          text:
            'Read the words on either side of the gap and ignore the rest of the sentence. If one option produces a phrase you have definitely read before and the others produce phrases you have not, take the familiar one. Collocation questions are testing exposure rather than reasoning, and your instinct here is more reliable than your analysis.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'charge',
      heading: 'Positive and negative charge',
      eyebrow: 'Direction before meaning',
      intro:
        'Many blanks can be settled without knowing the exact word required — only whether it must be approving or disapproving. The passage tells you that long before the option list does.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Establish the direction on the first read',
              'Is the writer defending the subject, attacking it, or tracing a change? Mark it in one word. Every judgement blank in the passage then has to point that way.',
            ],
            [
              'Use the evidence in the same sentence',
              '"Critics described the report as ___, pointing to its reliance on fifteen-year-old data." The clause after the comma is the reason, and it is unmistakably negative — so the blank cannot be thorough or authoritative.',
            ],
            [
              'Watch for a charge flip at a connector',
              'A "however" or "nevertheless" between two blanks means they carry opposite charges. This is the commonest way a single missed connector costs two marks instead of one.',
            ],
            [
              'Prefer the moderate word',
              'Exam passages come from editorials and reports, which rarely use extremes. Where "criticised" and "condemned" both fit the direction, the milder one is usually right.',
            ],
            [
              'Concessive language carries a hidden flip',
              '"Even from those who had opposed her appointment" tells you the blank before it is positive — the sentence is saying that approval came from an unlikely source.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'new-pattern',
      heading: 'New-pattern cloze',
      eyebrow: 'Banking formats',
      intro:
        'Banking papers have largely moved past single-word cloze. The formats look harder and are usually easier, because each one gives you more than one way into the answer.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Double fillers',
              'Two blanks in one sentence, and each option supplies both words. Find whichever of the two positions is more constrained — usually the grammatical one — and eliminate on that alone. You rarely need to evaluate both halves of more than one surviving option.',
            ],
            [
              'Word bank',
              'A numbered list of words serves the whole passage, each used once. Fill only the blanks you are certain of on the first pass, strike those words off the list, and go round again — the second pass is far easier than the first because the list has shrunk.',
            ],
            [
              'Sentence fillers',
              'The gap takes a full clause. Decide what the sentence has to be doing at that point — conceding, illustrating, concluding — and pick the option that performs that function. Reading all four options into the sentence is slower and less reliable.',
            ],
            [
              'Cloze with a "no change required" option',
              'The passage is complete and you judge whether a highlighted word is right. As with "no error" in error detection, this option is correct more often than candidates choose it.',
            ],
            [
              'Word usage and word swap',
              'Not cloze in form, but the same skill — collocation and register. A word swap gives you a sentence in which two words have traded places, and putting them back is a collocation judgement.',
            ],
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'mistakes',
      heading: 'Where marks are lost',
      eyebrow: 'Error log',
      intro:
        'Cloze passages punish a particular kind of hurry — the kind that treats five connected blanks as five separate questions.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Filling blanks in order',
              'The first blank is not the easiest one; it is merely the first. Filling by certainty rather than by position is the single biggest time saving available in this topic.',
            ],
            [
              'Not reading the whole passage first',
              'Thirty seconds spent reading the passage complete saves two minutes of committing to a word that the next sentence contradicts.',
            ],
            [
              'Choosing a synonym that does not collocate',
              'Two words can mean the same thing and only one can stand next to the noun in question. Threats are posed, conclusions are drawn, balances are struck.',
            ],
            [
              'Ignoring the grammar of the gap',
              'When the options are four forms of one root, the question is grammatical. Candidates who start from meaning lose a mark they were being given.',
            ],
            [
              'Missing a connector and then compounding it',
              'A wrong contrast word flips the direction of everything after it, which is how one careless blank becomes three wrong answers. The final read-through exists to catch exactly this.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Fill the blank: "The scheme was launched with much fanfare. ___, within two years it had quietly been abandoned."',
      steps: [
        'The first sentence is positive and public; the second is negative and quiet.',
        'The relationship between them is therefore contrast.',
        'Moreover adds, therefore concludes and similarly compares — none of those fit.',
      ],
      answer: 'However.',
    },
    {
      q: 'Fill the blank: "Rainfall was forty per cent below normal for three consecutive years. ___, the reservoir fell to its lowest level on record."',
      steps: [
        'The second statement is a direct result of the first.',
        'That is an effect relationship, not a contrast.',
        'Nevertheless and however both reverse the direction; instead replaces rather than follows.',
      ],
      answer: 'Consequently.',
    },
    {
      q: "Fill the blank: \"The committee's ___ to postpone the decision surprised nobody.\"",
      steps: [
        'The gap follows a possessive, so it must be a noun.',
        'Of the options decide, decided, decisive and decision, only one is a noun.',
        'Meaning never enters into it.',
      ],
      answer: 'Decision.',
    },
    {
      q: 'Fill the blank: "The new regulations are expected to ___ a serious threat to small traders."',
      steps: [
        'Look only at the words on either side of the gap: "to ___ a serious threat".',
        'Threats are posed. They are not made, given or put in this construction.',
        'This is a collocation question rather than a meaning question.',
      ],
      answer: 'Pose.',
    },
    {
      q: 'Fill the blank: "___ the project was completed on time, it cost nearly twice the original estimate."',
      steps: [
        'Two facts are given, and the second works against the first.',
        'The gap is followed by a full clause, so it needs a conjunction rather than a preposition — which rules out "despite".',
        'Because and therefore both make the second fact follow from the first, which reverses the sense.',
      ],
      answer: 'Although.',
    },
    {
      q: 'Fill the blank: "Critics described the report as ___, pointing to its reliance on data that was fifteen years old."',
      steps: [
        'The clause after the comma gives the reason, and it is a criticism.',
        'So the blank must carry a negative charge.',
        'Authoritative, thorough and exhaustive are all approving and can be eliminated together.',
      ],
      answer: 'Outdated.',
    },
    {
      q: 'Fill the blank: "___ the heavy rain, the match continued without interruption."',
      steps: [
        'The gap is followed by a noun phrase, not a clause.',
        'Although and because both require a subject and a verb after them.',
        'However cannot introduce a phrase in this position at all.',
      ],
      answer: 'Despite.',
    },
    {
      q: 'Fill the blank: "Her handling of the crisis won ___ even from those who had opposed her appointment."',
      steps: [
        '"Even from those who had opposed her" signals an unlikely source.',
        'For that to be surprising, what she won must be favourable.',
        'Criticism, suspicion and indifference all point the wrong way.',
      ],
      answer: 'Praise.',
    },
    {
      q: 'Fill the blank: "The loan will be sanctioned ___ you submit the income certificate."',
      steps: [
        'The certificate is a requirement for the loan.',
        '"Unless" would mean the loan is sanctioned when you fail to submit it — the opposite.',
        'Although and despite make no conditional sense here.',
      ],
      answer: 'Only if.',
    },
    {
      q: 'Fill both blanks: "The report was ___ criticised for its methodology, though its central ___ was never seriously challenged."',
      steps: [
        'Take the second gap first: it follows "its central", so it needs a noun — which eliminates every option offering a verb form.',
        '"Conclusion" is the only noun that makes sense with "challenged".',
        'For the first gap, "though" concedes that something survived widespread criticism, so the criticism must have been extensive.',
        '"Rarely" and "hardly" would leave nothing for the concession to work against.',
      ],
      answer: 'widely … conclusion.',
    },
  ],

  practice: [
    {
      q: 'The scheme was launched with much fanfare. ___, within two years it had quietly been abandoned.',
      options: ['Moreover', 'However', 'Therefore', 'Similarly'],
      answer: 1,
      explain: 'The two sentences pull in opposite directions, so the blank needs a contrast connector.',
    },
    {
      q: 'Rainfall was forty per cent below normal for three consecutive years. ___, the reservoir fell to its lowest level on record.',
      options: ['Nevertheless', 'However', 'Consequently', 'Instead'],
      answer: 2,
      explain: 'The reservoir falling is the result of the shortfall, which calls for an effect connector rather than a contrast.',
    },
    {
      q: "The committee's ___ to postpone the decision surprised nobody.",
      options: ['decide', 'decided', 'decisive', 'decision'],
      answer: 3,
      explain: 'The gap follows a possessive, so it must be a noun. The question is grammatical, not lexical.',
    },
    {
      q: 'The new regulations are expected to ___ a serious threat to small traders.',
      options: ['pose', 'make', 'give', 'put'],
      answer: 0,
      explain: 'Threats are posed — a fixed collocation. The other three do not form the standard partnership.',
    },
    {
      q: '___ the project was completed on time, it cost nearly twice the original estimate.',
      options: ['Because', 'Therefore', 'Moreover', 'Although'],
      answer: 3,
      explain: 'The second fact works against the first, and the gap is followed by a full clause, so a concessive conjunction is required.',
    },
    {
      q: 'Critics described the report as ___, pointing to its reliance on data that was fifteen years old.',
      options: ['authoritative', 'thorough', 'outdated', 'exhaustive'],
      answer: 2,
      explain: 'The reason given after the comma is a criticism, so the blank must carry a negative charge. The other three are approving.',
    },
    {
      q: 'The success of the programme depends largely ___ the cooperation of local officials.',
      options: ['in', 'on', 'at', 'for'],
      answer: 1,
      explain: '"Depend on" is a fixed pair. No other preposition works with this verb.',
    },
    {
      q: 'The minister refused to ___ on the matter until the inquiry was complete.',
      options: ['comment', 'describe', 'inform', 'narrate'],
      answer: 0,
      explain: '"Comment on" is the standard collocation. Describe and narrate take a direct object, and inform takes a person.',
    },
    {
      q: 'The road is narrow and poorly lit. ___, it floods after every heavy shower.',
      options: ['However', 'Nevertheless', 'Moreover', 'Instead'],
      answer: 2,
      explain: 'The second sentence adds another drawback rather than contradicting the first, so an addition connector is needed.',
    },
    {
      q: 'Had the warning ___ earlier, the damage could have been prevented.',
      options: ['issued', 'been issued', 'being issued', 'be issued'],
      answer: 1,
      explain: 'The inverted third conditional requires the past perfect passive — "had the warning been issued".',
    },
    {
      q: '___ the heavy rain, the match continued without interruption.',
      options: ['Although', 'However', 'Because', 'Despite'],
      answer: 3,
      explain: 'The gap is followed by a noun phrase rather than a clause, and only "despite" can introduce one here.',
    },
    {
      q: 'Her handling of the crisis won ___ even from those who had opposed her appointment.',
      options: ['criticism', 'suspicion', 'indifference', 'praise'],
      answer: 3,
      explain: '"Even from those who had opposed her" signals an unexpected source, which only works if what she won was favourable.',
    },
    {
      q: 'Very ___ of the original building survives today; only the east wall is still standing.',
      options: ['little', 'few', 'many', 'several'],
      answer: 0,
      explain: '"Building" here is treated as an uncountable mass, so "little" is required. Few, many and several need a countable plural.',
    },
    {
      q: 'The report was ___ criticised for its methodology, though its central ___ was never seriously challenged.',
      options: [
        'widely … conclusion',
        'rarely … conclusion',
        'widely … conclude',
        'hardly … concluding',
      ],
      answer: 0,
      explain: 'The second gap follows "its central" and needs a noun, and "though" requires the criticism to have been extensive for the concession to mean anything.',
    },
    {
      q: 'First the foundations were laid. ___ the walls went up, and the roof followed in the spring.',
      options: ['Nevertheless', 'Conversely', 'Subsequently', 'Otherwise'],
      answer: 2,
      explain: 'The passage is describing stages in order, so the blank needs a sequence connector rather than a contrast.',
    },
    {
      q: 'The loan will be sanctioned ___ you submit the income certificate.',
      options: ['unless', 'only if', 'although', 'despite'],
      answer: 1,
      explain: '"Unless" would mean the loan is sanctioned when the certificate is not submitted, reversing the sense. The certificate is a condition, not an exception.',
    },
  ],

  faqs: [
    {
      q: 'What is a cloze test?',
      a: 'A short passage with several words removed, each gap offering four choices. It looks like a vocabulary test but is mostly a test of whether you can follow an argument, because most blanks are decided by the sentences around them rather than by the meaning of the word in isolation.',
    },
    {
      q: 'In what order should I fill the blanks?',
      a: 'Never left to right. Read the whole passage first, then fill the blanks that grammar decides, then the connectors, then the fixed collocations, and leave the judgement calls until last — by which point the passage has told you what it is arguing and the remaining gaps usually have one obvious fit.',
    },
    {
      q: 'How do I decide a connector blank?',
      a: 'Read what comes before and after and name the relationship: contrast, addition, cause, effect, example, sequence or condition. Then choose from the words that carry that relationship. You can do this without understanding the subject matter at all.',
    },
    {
      q: 'What is the difference between "although" and "despite"?',
      a: '"Although" is a conjunction and takes a full clause — although it rained heavily. "Despite" and "in spite of" are prepositions and take a noun phrase — despite the heavy rain. Options exploit this difference constantly, so check what follows the gap before choosing.',
    },
    {
      q: 'What is collocation and why does it matter in cloze?',
      a: 'Collocation is the tendency of certain words to travel together for no reason other than usage — threats are posed, conclusions are drawn, balances are struck, concerns are raised. When one option forms a standard partnership with the word beside the gap and the others do not, that is the answer even if all four are close in meaning.',
    },
    {
      q: 'How do I use positive and negative charge?',
      a: 'Decide on your first read whether the writer is approving, disapproving or tracing a change, and make every judgement blank point that way. Watch for connectors such as "however", which flip the charge — a missed contrast word is how one wrong blank turns into three.',
    },
    {
      q: 'What is new-pattern cloze in bank exams?',
      a: 'Formats that go beyond a single word per gap: double fillers where each option supplies two words, word-bank passages where a shared list is used once each, and sentence fillers where the gap takes a whole clause. They look harder but are usually easier, because each gives you more than one route to the answer.',
    },
    {
      q: 'How do I attempt double fillers?',
      a: 'Find whichever of the two positions is more constrained — usually the one decided by grammar — and eliminate on that alone. If the second gap follows "its central" and needs a noun, every option offering a verb form dies at once, and you rarely have to evaluate both halves of more than one surviving option.',
    },
    {
      q: 'How much time should a cloze passage take?',
      a: 'About two minutes for five blanks, including thirty seconds to read the passage first and twenty to read it back at the end. That final read is what catches a wrong connector, which is invisible while you are choosing it and obvious once the passage is complete.',
    },
    {
      q: 'How many cloze test questions come in SSC and bank exams?',
      a: 'SSC CGL Tier 1 usually carries one passage of three to five blanks, making it one of the highest-weightage English topics in that paper, and Tier 2 five to eight. Banking prelims has five to eight, and mains a similar number, mostly in the new-pattern formats.',
    },
  ],

  related: [
    { label: 'Grammar', to: '/study-material/english/grammar/' },
    { label: 'Vocabulary', to: '/study-material/english/vocabulary/' },
    { label: 'Error Detection', to: '/study-material/english/error-detection/' },
    { label: 'Reading Comprehension', to: '/study-material/english/reading-comprehension/' },
    { label: 'Para Jumbles', to: '/study-material/english/para-jumbles/' },
    { label: 'All English', to: '/study-material/english/' },
  ],
}
