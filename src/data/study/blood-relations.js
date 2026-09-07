/**
 * Blood Relations — /study-material/reasoning/blood-relations/
 *
 * Taught around one habit: never reason in words, always draw. The notation
 * section is the spine of the page, and every worked example uses the same
 * three symbols so the method transfers from a one-line question to a full
 * banking family-tree puzzle without changing.
 */
export default {
  subject: 'reasoning',
  subjectName: 'Reasoning',
  slug: 'blood-relations',
  title: 'Blood Relations',
  seoTitle: 'Blood Relations Reasoning for Competitive Exams | Tricks & Practice',
  metaDescription:
    'Complete Blood Relations study material for SSC, banking and railway exams — the family-tree notation, relation vocabulary.',
  readMinutes: 17,
  lead: [
    'Blood Relations is a topic where almost nobody fails at reasoning and almost everybody fails at bookkeeping. Read "his mother is the only daughter of my father" in your head and you will convince yourself of two different answers in thirty seconds. Draw it, and the answer is unarguable.',
    'This page therefore teaches a single notation and then refuses to abandon it — the same three symbols solve a one-line SSC question, a coded expression and a five-question banking family-tree set. What changes between them is the amount of paper, not the method.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–2 questions', note: 'Usually one pointing-to-a-photograph or one short relation chain.' },
    { exam: 'Banking Prelims & Mains', count: '2–3 questions', note: 'Coded blood relations, or a family tree combined with a seating puzzle.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'Direct relation chains — among the most reliable marks in the paper.' },
    { exam: 'State Police & SI exams', count: '2–3 questions', note: 'Photograph questions and simple generation counting.' },
    { exam: 'CTET / Teaching exams', count: '1–2 questions', note: 'Short chains inside the general reasoning block.' },
  ],

  contents: [
    { icon: 'book', title: 'The relation vocabulary', sub: 'Paternal, maternal and in-law terms', href: '#vocabulary' },
    { icon: 'layers', title: 'The notation', sub: 'Three symbols that end all ambiguity', href: '#notation' },
    { icon: 'image', title: 'Pointing to a photograph', sub: 'Reading the sentence from the inside out', href: '#pointing' },
    { icon: 'target', title: 'Coded blood relations', sub: 'When + means father and − means brother', href: '#coded' },
    { icon: 'user', title: 'Family-tree puzzles', sub: 'Banking sets with six or more people', href: '#puzzles' },
    { icon: 'chart', title: 'Counting generations', sub: 'How many levels the family spans', href: '#generations' },
    { icon: 'bell', title: 'The four traps', sub: 'Where the wrong answers come from', href: '#mistakes' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'vocabulary',
      heading: 'The relation vocabulary',
      eyebrow: 'Know the words first',
      intro:
        'Exam questions are written in precise kinship language, and a term you half-know will cost you the mark even when your diagram is perfect. These are the ones that actually appear.',
      blocks: [
        {
          type: 'table',
          caption: 'The relation terms that appear in exam questions',
          head: ['Term', 'Means', 'Watch for'],
          rows: [
            ['Paternal uncle', "Father's brother", "Also the husband of your father's sister? No — that man is your uncle by marriage, not paternal."],
            ['Maternal uncle', "Mother's brother", 'The single most-tested relation in the chapter.'],
            ['Paternal aunt', "Father's sister", 'Her children are your cousins, never your nephews.'],
            ['Maternal aunt', "Mother's sister", 'Her husband is your uncle by marriage.'],
            ['Nephew / Niece', "Brother's or sister's son / daughter", 'Also used for a spouse’s siblings’ children.'],
            ['Cousin', "Uncle's or aunt's child", 'Gender-neutral in English — a question saying "cousin" tells you nothing about sex.'],
            ['Brother-in-law', "Spouse's brother, or sister's husband", 'Two different routes to the same word — check which one the question means.'],
            ['Sister-in-law', "Spouse's sister, or brother's wife", 'Same double meaning.'],
            ['Daughter-in-law', "Son's wife", "Not the same as 'stepdaughter', which exams avoid entirely."],
            ['Grandson / Granddaughter', "Child of your son or daughter", 'Two generations down, whichever side.'],
          ],
        },
        {
          type: 'note',
          title: 'The word "only" is never decoration',
          text:
            'When a question says "the only son of my father" or "the only daughter of my mother", that word is doing the entire job. It is what lets you collapse the phrase to a single person — usually the speaker or the speaker\'s sibling. Underline every "only" before you draw anything.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'notation',
      heading: 'The notation',
      eyebrow: 'Learn this properly',
      intro:
        'Everything on this page uses three marks and one rule about vertical space. Once you draw rather than reason, the topic stops producing wrong answers.',
      blocks: [
        {
          type: 'formula',
          title: 'The three marks',
          items: [
            { expr: 'A plus sign after a name means male, a minus sign means female', note: 'Write P+ or P− the moment the question tells you. If it never tells you, leave the sign off — and remember that the answer may then be genuinely undecidable.' },
            { expr: 'A double line between two names means a married couple', note: 'P = Q sits them side by side on the same level.' },
            { expr: 'A single line downwards means parent to child', note: 'Children hang below their parents, and siblings sit side by side on the same level joined by a short horizontal line.' },
          ],
        },
        {
          type: 'formula',
          title: 'The one rule about levels',
          items: [
            { expr: 'Everyone in the same generation goes on the same horizontal line', note: 'Spouses, siblings, cousins and siblings-in-law all share a level. If your diagram has a husband above his wife, redraw it.' },
            { expr: 'Each generation goes exactly one line lower', note: 'Grandparent, parent, child. Counting levels is how "great-grandmother" questions get answered in two seconds.' },
            { expr: 'Draw first, answer second', note: 'Never convert a phrase into a relationship in your head. Every phrase becomes a mark on the page before it becomes a conclusion.' },
          ],
        },
        {
          type: 'example',
          q: 'A is the father of B. B is the sister of C. C is the son of D. How is D related to A?',
          steps: [
            'A is the father of B, so B hangs below A. Mark A+.',
            'B is the sister of C, so B and C sit on the same level, joined. Mark B−.',
            'C is the son of D, so D sits one level above C — the same level as A.',
            'B and C are siblings, so they share both parents. A is the father, so D is the mother.',
          ],
          answer: "D is A's wife.",
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'pointing',
      heading: 'Pointing to a photograph',
      eyebrow: 'The classic shape',
      intro:
        'Someone points at a person and describes them with a nested phrase. The trick is to resolve the phrase from the inside out, and to resolve it into a person before you look at the relationship.',
      blocks: [
        {
          type: 'p',
          text:
            'Take "that man\'s father is my father\'s son". The innermost phrase is "my father\'s son". If the speaker has no brothers, that phrase resolves to the speaker himself. Now the sentence reads "that man\'s father is me" — so the man in the photograph is the speaker\'s son. Every question of this type yields to the same two moves: collapse the inner phrase to one named person, then rebuild the sentence around them.',
        },
        {
          type: 'defs',
          items: [
            [
              "'My father's son' with no brother mentioned",
              'Resolves to the speaker if the speaker is male. If a brother exists or the speaker is female, it resolves to the brother instead — which is exactly why the question always tells you whether siblings exist.',
            ],
            [
              "'My mother's only daughter'",
              'Resolves to the speaker if the speaker is female, and to the speaker\'s sister if the speaker is male. Check the sex of the person speaking before anything else.',
            ],
            [
              "'The only son of my grandfather'",
              'Your father — because your grandfather has exactly one son, and you have a father who is his son.',
            ],
            [
              "'My mother's father'",
              'Your maternal grandfather. His son is your maternal uncle, and that uncle’s children are your cousins.',
            ],
            [
              'Direction of the answer',
              'The question asks how one specific person is related to another, and the answer is not symmetric. "She is his mother" and "he is her son" are both true and only one is on the options list.',
            ],
          ],
        },
        {
          type: 'example',
          q: "Pointing to a man, a woman said, 'His mother is the only daughter of my father.' How is the woman related to the man?",
          steps: [
            'Innermost phrase: "the only daughter of my father".',
            'The speaker is a woman, and her father has exactly one daughter. That daughter is the speaker herself.',
            'Substitute: "his mother is me".',
          ],
          answer: 'The woman is the man’s mother.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'coded',
      heading: 'Coded blood relations',
      eyebrow: 'Symbols instead of words',
      intro:
        'A key defines what each symbol means, and an expression strings several together. These are usually the easiest marks in the chapter, provided you read the expression in the right direction.',
      blocks: [
        {
          type: 'formula',
          title: 'How to read a coded expression',
          items: [
            { expr: 'Read strictly left to right, one symbol at a time', note: 'In P − Q + R, first settle what P − Q says about P and Q, then bring in R. Never jump to the ends.' },
            { expr: 'The symbol describes the left name, not the right', note: 'If A + B means "A is the father of B", then in P + Q it is P who is the father. Reversing this is the most common error in the topic.' },
            { expr: 'Draw the tree as you read, exactly as before', note: 'The symbols are a different notation for the same family, so convert them into your own notation immediately.' },
            { expr: 'For "which expression shows …" questions, test the options', note: 'Building the expression forwards is slow. Reading each option and checking whether it produces the stated relation is faster and safer.' },
          ],
        },
        {
          type: 'example',
          q: 'If A + B means A is the mother of B, A − B means A is the brother of B, A × B means A is the father of B and A ÷ B means A is the sister of B, which expression shows that M is the maternal uncle of N?',
          steps: [
            'A maternal uncle is the brother of the mother. So the expression must say two things: M is somebody’s brother, and that somebody is the mother of N.',
            'The brother relation is the minus sign, so the expression begins M − K for some person K.',
            'K must be the mother of N, which is the plus sign: K + N.',
            'Chaining them gives M − K + N.',
          ],
          answer: 'M − K + N.',
        },
        {
          type: 'note',
          title: 'Male, female, and what the code does not say',
          text:
            'A code such as "A × B means A is the father of B" fixes the sex of A but says nothing about B. So M × N ÷ P tells you M is male and N is female — because the division sign makes her a sister — but leaves P entirely open. If an option says "grandson" and your diagram cannot establish that the person is male, the answer is not that option.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'puzzles',
      heading: 'Family-tree puzzles',
      eyebrow: 'Banking mains',
      intro:
        'Banking papers give six to nine family members across three generations and ask five questions. The diagram is the whole answer, so the discipline is in the order you place people.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Place the fixed generation first',
              'Find any statement naming a grandparent or a "married couple" and anchor it. A tree grows outwards from something stable, never from a floating cousin.',
            ],
            [
              'Handle "the only" statements next',
              'They cut the possibilities hardest. "P is the only son of Q" tells you Q has no other sons at all, which will contradict half the arrangements you might otherwise consider.',
            ],
            [
              'Leave gendered statements for last',
              'Statements such as "T is the daughter-in-law of S" fix sex as well as position, so they are best used to eliminate rather than to build.',
            ],
            [
              'Track people you have not placed',
              'Write every name in a corner and strike each one as it lands on the tree. A five-question set almost always includes one question about the person candidates forgot to place.',
            ],
            [
              'Accept an undetermined answer',
              'Banking sets often include one question whose answer is "cannot be determined", and it is a real option, not a trap. If the tree genuinely leaves a person’s sex or position open, say so.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'A is the wife of B. B is the brother of C. C is the daughter of D. How is A related to D?',
          steps: [
            'C is the daughter of D, so C hangs below D. Mark C−.',
            'B is the brother of C, so B sits beside C on the same level and is also a child of D. Mark B+.',
            'A is the wife of B, so A joins B on that same level by marriage. Mark A−.',
            'A is therefore married to a son of D.',
          ],
          answer: "A is D's daughter-in-law.",
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'generations',
      heading: 'Counting generations',
      eyebrow: 'Quick marks',
      intro:
        'Some questions ask how many generations a family spans, or how many married couples it contains. If your diagram already puts each generation on its own line, both are a matter of counting.',
      blocks: [
        {
          type: 'formula',
          title: 'What to count',
          items: [
            { expr: 'Generations = the number of horizontal levels in your diagram', note: 'Grandparent, parent, child is three. Spouses never add a level, because they join a level rather than creating one.' },
            { expr: 'Married couples = the number of double lines', note: 'Only mark a couple when the question actually says wife, husband, or a relation that requires marriage such as daughter-in-law.' },
            { expr: 'Generations up from X to Y = levels between them', note: 'One level up is a parent, two is a grandparent, three is a great-grandparent. Add one "great" for each level beyond two.' },
            { expr: 'Cousins are on the same level; nephews are one level below', note: 'If you find yourself unsure between the two words, look at the line your two people sit on — that settles it without any vocabulary.' },
          ],
        },
        {
          type: 'example',
          q: 'P is the brother of Q. R is the mother of P. S is the father of R. T is the mother of S. How is T related to Q?',
          steps: [
            'P and Q are siblings, so they share a level. R is their mother, one level above.',
            'S is the father of R, so S is one level above R — the grandparent level for P and Q.',
            'T is the mother of S, so T is one level above S again.',
            'That places T three levels above Q: parent, grandparent, great-grandparent.',
          ],
          answer: "T is Q's great-grandmother.",
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'mistakes',
      heading: 'The four traps',
      eyebrow: 'Error log',
      intro:
        'Blood Relations questions are short, which makes candidates confident, which is exactly what the paper is counting on.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Assuming sex from a name',
              'Names in these questions carry no information at all, and papers deliberately use names that read as one sex while the statements make the person the other. Only an explicit word — son, daughter, wife, brother — fixes it.',
            ],
            [
              'Answering the relation backwards',
              'If the question asks how D is related to A, do not answer with how A is related to D. Both appear in the options, and only one scores.',
            ],
            [
              'Reading "brother of" as "son of the same father"',
              'It is more than that: siblings in these questions share both parents unless the paper says otherwise, and that is what lets you attach a second parent to the tree.',
            ],
            [
              'Treating "cousin" or "in-law" as gendered',
              'Cousin says nothing about sex, and brother-in-law has two different derivations. When an option depends on which one is meant, check whether the diagram actually settles it — sometimes the honest answer is that it does not.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose photograph is it?",
      steps: [
        'Innermost phrase: "my father’s son".',
        'The speaker is male and has no brothers, so his father has exactly one son — the speaker himself.',
        'The sentence becomes "that man’s father is me".',
      ],
      answer: "It is the photograph of the man's son.",
    },
    {
      q: "Pointing to a man, a woman said, 'His mother is the only daughter of my father.' How is the woman related to the man?",
      steps: [
        'The speaker is a woman, and her father has exactly one daughter, so that daughter is the speaker.',
        'Substituting, "his mother is me".',
      ],
      answer: 'She is his mother.',
    },
    {
      q: 'A is the father of B. B is the sister of C. C is the mother of D. How is A related to D?',
      steps: [
        'B and C are siblings, both children of A.',
        'C is one level below A, and D is one level below C.',
        'That puts D two levels below A.',
      ],
      answer: "A is D's grandfather.",
    },
    {
      q: 'If A + B means A is the mother of B, A − B means A is the brother of B and A × B means A is the father of B, which expression shows that M is the maternal uncle of N?',
      steps: [
        'Maternal uncle = brother of the mother.',
        'M must be a brother: M − K.',
        'K must be the mother of N: K + N.',
      ],
      answer: 'M − K + N.',
    },
    {
      q: 'Q is the son of P. P is the sister of R. R has a daughter S. How is S related to Q?',
      steps: [
        'P and R are siblings, on the same level.',
        'Q hangs below P; S hangs below R.',
        'Q and S therefore share a level and their parents are siblings.',
      ],
      answer: 'S is Q’s cousin.',
    },
    {
      q: 'X is the brother of the son of Y’s son. How is X related to Y?',
      steps: [
        'Start from the inside: Y’s son — call him A, one level below Y.',
        'The son of A — call him B, two levels below Y.',
        'X is B’s brother, so X sits beside B on that same level and is also a child of A.',
      ],
      answer: "X is Y's grandson.",
    },
    {
      q: 'A is the wife of B. B is the brother of C. C is the daughter of D. How is A related to D?',
      steps: ['C is D’s daughter. B is C’s brother, so B is also D’s child — a son.', 'A is married to B.', 'A joins the family as the wife of D’s son.'],
      answer: "A is D's daughter-in-law.",
    },
    {
      q: 'A is the mother of B. B is the sister of C. C is the son of D. D is the son of E. How many generations does this family span?',
      steps: [
        'B and C are siblings on one level; A and D are their parents on the level above.',
        'E is the parent of D, one level above that.',
        'Levels: E; then A and D; then B and C.',
      ],
      answer: 'Three generations.',
    },
    {
      q: "Pointing to a woman, a man said, 'Her father is the only son of my mother's father.' How is the woman related to the man?",
      steps: [
        '"My mother’s father" is the man’s maternal grandfather.',
        'That grandfather has exactly one son, and the man’s mother is his daughter — so the only son is the man’s maternal uncle.',
        'The woman’s father is that uncle, which puts her on the man’s own level with a parent who is his mother’s sibling.',
      ],
      answer: 'She is his cousin.',
    },
    {
      q: 'If A ÷ B means A is the mother of B, A × B means A is the brother of B and A + B means A is the father of B, how is M related to P in M ÷ N × O + P?',
      steps: [
        'M ÷ N: M is the mother of N.',
        'N × O: N is the brother of O, so N and O are siblings — which makes M the mother of O as well.',
        'O + P: O is the father of P.',
        'M is therefore the mother of P’s father.',
      ],
      answer: "M is P's grandmother.",
    },
  ],

  practice: [
    {
      q: "Pointing to a photograph, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose photograph is it?",
      options: ['His own', 'His son', 'His father', 'His nephew'],
      answer: 1,
      explain: 'With no brothers, "my father’s son" is the speaker himself. So the man in the photograph has the speaker as his father.',
    },
    {
      q: "Pointing to a lady, Rahul said, 'She is the daughter of the only daughter of my mother.' How is the lady related to Rahul?",
      options: ['His sister', 'His cousin', 'His niece', 'His aunt'],
      answer: 2,
      explain: 'Rahul is male, so his mother’s only daughter is his sister. The lady is his sister’s daughter — his niece.',
    },
    {
      q: 'A is the brother of B. B is the sister of C. C is the father of D. How is A related to D?',
      options: ["D's father", "D's grandfather", "D's uncle", "D's brother"],
      answer: 2,
      explain: 'A, B and C are siblings on one level. C is D’s father, so A is D’s paternal uncle.',
    },
    {
      q: 'If P + Q means P is the mother of Q, P − Q means P is the brother of Q, P × Q means P is the father of Q and P ÷ Q means P is the sister of Q, which shows that M is the maternal uncle of N?',
      options: ['M + K − N', 'M − K + N', 'M × K ÷ N', 'M ÷ K + N'],
      answer: 1,
      explain: 'M − K makes M a brother, and K + N makes K the mother of N. A brother of the mother is the maternal uncle.',
    },
    {
      q: "Introducing a man, a woman said, 'His wife is the only daughter of my father.' How is the man related to the woman?",
      options: ['Her brother', 'Her father-in-law', 'Her brother-in-law', 'Her husband'],
      answer: 3,
      explain: 'The woman is her father’s only daughter, so his wife is the woman herself, making him her husband.',
    },
    {
      q: 'X is the son of Y. Y is the daughter of Z. Z is the husband of W. How is X related to W?',
      options: ['Her son', 'Her nephew', 'Her brother', 'Her grandson'],
      answer: 3,
      explain: 'Y is the daughter of Z and W, and X is Y’s son — two levels below W.',
    },
    {
      q: 'A is the father of B. B is the sister of C. C is the son of D. How is D related to A?',
      options: ["A's wife", "A's sister", "A's mother", "A's daughter"],
      answer: 0,
      explain: 'B and C are siblings, so they share both parents. A is the father, which makes D the mother and therefore A’s wife.',
    },
    {
      q: "Pointing to a man, a lady said, 'His mother is the only daughter of my mother.' How is the lady related to the man?",
      options: ['His aunt', 'His sister', 'His mother', 'His grandmother'],
      answer: 2,
      explain: 'The speaker is a lady and her mother has exactly one daughter, so that daughter is the speaker. The man’s mother is therefore the lady herself.',
    },
    {
      q: 'P is the brother of Q. R is the mother of P. S is the father of R. T is the mother of S. How is T related to Q?',
      options: ["Q's grandmother", "Q's mother", "Q's great-grandmother", "Q's aunt"],
      answer: 2,
      explain: 'R is one level above Q, S is two levels above and T is three — a great-grandparent.',
    },
    {
      q: 'If A × B means A is the daughter of B, A + B means A is the son of B and A − B means A is the wife of B, then in Z × T + S − P, how is T related to P?',
      options: ["P's son", "P's daughter", "P's grandson", "P's nephew"],
      answer: 0,
      explain: 'T + S makes T the son of S, and S − P makes S the wife of P. So T is the son of P’s wife and therefore P’s son.',
    },
    {
      q: 'Deepak is the brother of Ravi. Rekha is the sister of Atul. Ravi is the son of Rekha. How is Deepak related to Rekha?',
      options: ['Her brother', 'Her nephew', 'Her father', 'Her son'],
      answer: 3,
      explain: 'Ravi is Rekha’s son, and Deepak is Ravi’s brother, so Deepak is also Rekha’s son.',
    },
    {
      q: "Pointing to a photograph, Anjali said, 'He is the son of the only son of my grandfather.' How is the man related to Anjali?",
      options: ['Her cousin', 'Her uncle', 'Her nephew', 'Her brother'],
      answer: 3,
      explain: 'Her grandfather’s only son is Anjali’s father, and his son is Anjali’s brother.',
    },
    {
      q: 'A is the mother of B. B is the sister of C. C is the son of D. D is the son of E. How many generations does this family span?',
      options: ['Two', 'Three', 'Four', 'Five'],
      answer: 1,
      explain: 'E is one level, A and D the next, and B and C the third. Spouses share a level rather than adding one.',
    },
    {
      q: 'Q is the son of P. P is the sister of R. R has a daughter S. How is S related to Q?',
      options: ['His sister', 'His cousin', 'His niece', 'His aunt'],
      answer: 1,
      explain: 'P and R are siblings, so their children Q and S sit on the same level as cousins.',
    },
    {
      q: 'If A + B means A is the father of B, A × B means A is the sister of B and A ÷ B means A is the mother of B, which shows that P is the grandfather of Q?',
      options: ['P ÷ R + Q', 'P + R × Q', 'P + R + Q', 'P × R + Q'],
      answer: 2,
      explain: 'P + R makes P the father of R, and R + Q makes R the father of Q, placing Q two levels below P.',
    },
    {
      q: "Pointing to a woman, a man said, 'Her father is the only son of my mother's father.' How is the woman related to the man?",
      options: ['His sister', 'His niece', 'His aunt', 'His cousin'],
      answer: 3,
      explain: 'His mother’s father’s only son is his maternal uncle. The woman is that uncle’s daughter, so she is his cousin.',
    },
  ],

  faqs: [
    {
      q: 'What is the best method for blood relation questions?',
      a: 'Draw a family tree rather than reasoning in words. Mark each person as male or female, put every generation on its own horizontal line, join married couples on the same line and hang children below their parents. Almost every wrong answer in this topic comes from holding relationships in your head instead of on paper.',
    },
    {
      q: 'How do I solve "pointing to a photograph" questions?',
      a: 'Resolve the innermost phrase into a single person first, then rewrite the sentence with that person substituted in. "That man’s father is my father’s son" becomes "that man’s father is me" once you know the speaker has no brothers — so the photograph is of the speaker’s son.',
    },
    {
      q: 'What does "my father’s son" mean in these questions?',
      a: 'It means the speaker himself, but only when the speaker is male and the question tells you he has no brothers. If a brother exists, or the speaker is female, the phrase points to the brother instead. This is why the phrase "I have no brother or sister" is always in the question — it is data, not decoration.',
    },
    {
      q: 'How do I read coded blood relations such as P − Q + R?',
      a: 'Left to right, one symbol at a time, and remember that each symbol describes the name on its left. In P − Q + R with "−" meaning brother and "+" meaning mother, first P is the brother of Q, then Q is the mother of R — so P is R’s maternal uncle.',
    },
    {
      q: 'What is the difference between a paternal and a maternal uncle?',
      a: 'A paternal uncle is your father’s brother; a maternal uncle is your mother’s brother. Exams test the distinction constantly, and both usually appear in the options, so trace which parent the man is a sibling of before choosing.',
    },
    {
      q: 'How many blood relation questions come in bank and SSC exams?',
      a: 'SSC CGL Tier 1 typically has one or two, banking prelims and mains two to three including coded relations, and RRB NTPC three to four. In banking the topic often arrives as a five-question family-tree puzzle rather than as standalone questions.',
    },
    {
      q: 'How do I count generations in a family tree?',
      a: 'Count the horizontal levels in your diagram. Grandparent, parent and child is three generations. Spouses join an existing level rather than creating a new one, so a couple never adds a generation.',
    },
    {
      q: 'Can I assume someone’s sex from their name?',
      a: 'No, and papers exploit that assumption deliberately. Only explicit words fix sex — son, daughter, wife, husband, brother, sister, mother, father. Terms such as cousin, child, spouse and in-law leave it open, and sometimes the honest answer to a question is that the sex cannot be determined.',
    },
    {
      q: 'How do I handle a family puzzle with eight or nine people?',
      a: 'Anchor the oldest generation first, use the "only son" and "only daughter" statements next because they eliminate hardest, and save purely gendered statements such as "daughter-in-law" for confirming rather than building. Keep a list of names in the margin and strike each one as it lands on the tree.',
    },
    {
      q: 'Why do my answers keep coming out reversed?',
      a: 'Because the relation is not symmetric and the options include both directions. "How is D related to A" and "how is A related to D" have different answers. Circle the subject of the question before you read the options.',
    },
  ],

  related: [
    { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
    { label: 'Seating Arrangement', to: '/study-material/reasoning/seating-arrangement/' },
    { label: 'Coding-Decoding', to: '/study-material/reasoning/coding-decoding/' },
    { label: 'Syllogism', to: '/study-material/reasoning/syllogism/' },
    { label: 'Series', to: '/study-material/reasoning/series/' },
    { label: 'All Reasoning', to: '/study-material/reasoning/' },
  ],
}
