/**
 * Syllogism — /study-material/reasoning/syllogism/
 *
 * Written around the only definition that survives contact with a hard
 * question: a conclusion follows if and only if it is true in every diagram
 * the statements permit. The shortcut rules are taught afterwards and framed
 * as what they are — a fast path for easy questions, not a substitute for the
 * diagram when possibility and "only a few" statements appear.
 */
export default {
  subject: 'reasoning',
  subjectName: 'Reasoning',
  slug: 'syllogism',
  title: 'Syllogism',
  seoTitle: 'Syllogism Reasoning for Competitive Exams | Venn Method, Rules & Practice',
  metaDescription:
    'Complete Syllogism study material for banking, SSC and insurance exams — the four statement types, the Venn diagram method, combination rules, possibility conclusions, either-or complementary pairs, "only a few" statements and reverse syllogism, with solved examples and practice questions.',
  readMinutes: 19,
  lead: [
    'Syllogism is the one reasoning topic with a genuinely objective answer key. A conclusion either holds in every diagram the statements allow, or it does not — there is no judgement involved. That is why it is worth learning properly: once the method is right, the marks are not negotiable.',
    'The trouble is that most candidates learn the shortcut rules first and the definition never. Those rules handle a plain two-statement question in ten seconds and then fail completely on possibility conclusions, "only a few" statements and reverse syllogism — which is exactly where banking papers now live. This page teaches the diagram first and the shortcuts second.',
  ],

  weightage: [
    { exam: 'Banking Prelims (IBPS / SBI)', count: '3–5 questions', note: 'Usually one full set, increasingly with a possibility conclusion inside it.' },
    { exam: 'Banking & Insurance Mains', count: '3–5 questions', note: 'Reverse syllogism and "only a few" statements are standard here.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '0–3 questions', note: 'Simpler two-statement sets, answered fastest by drawing.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Straight two- or three-statement questions, no possibility.' },
    { exam: 'State PSC & Police exams', count: '1–3 questions', note: 'Often paired with a logical Venn diagram question.' },
  ],

  contents: [
    { icon: 'book', title: 'The four statement types', sub: 'All, No, Some, Some not', href: '#statements' },
    { icon: 'layers', title: 'The Venn method', sub: 'The definition every rule comes from', href: '#venn' },
    { icon: 'target', title: 'The combination rules', sub: 'The fast path for easy questions', href: '#rules' },
    { icon: 'globe', title: 'Possibility conclusions', sub: 'Why "is a possibility" flips the question', href: '#possibility' },
    { icon: 'refresh', title: 'Either-or pairs', sub: 'When neither conclusion follows alone', href: '#either-or' },
    { icon: 'chart', title: '"Only" and "only a few"', sub: 'Statements that carry two facts', href: '#only' },
    { icon: 'clock', title: 'Reverse syllogism', sub: 'Conclusions given, statements asked', href: '#reverse' },
    { icon: 'bell', title: 'Where marks are lost', sub: 'The recurring mistakes', href: '#mistakes' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'statements',
      heading: 'The four statement types',
      eyebrow: 'Start here',
      intro:
        'Every statement and every conclusion in this topic is one of four forms. Knowing which form you are holding — and what it does and does not imply when reversed — settles a large share of questions on its own.',
      blocks: [
        {
          type: 'table',
          caption: 'The four forms and what each one gives you for free',
          head: ['Statement', 'Form', 'Valid reverse (conversion)', 'Also gives you'],
          rows: [
            ['All A are B', 'Universal affirmative', 'Some B are A', 'Nothing about A being C'],
            ['No A is B', 'Universal negative', 'No B is A', 'Some B are not A'],
            ['Some A are B', 'Particular affirmative', 'Some B are A', 'Nothing negative'],
            ['Some A are not B', 'Particular negative', 'Nothing at all', 'Nothing — this is the weakest form'],
          ],
        },
        {
          type: 'formula',
          title: 'The conversions worth memorising',
          items: [
            { expr: '"All A are B" gives "Some B are A", never "All B are A"', note: 'Every mango is a fruit; that does not make every fruit a mango. This one conversion is worth a mark in most papers.' },
            { expr: '"No A is B" reverses fully to "No B is A"', note: 'The negative universal is the only form that reverses without weakening.' },
            { expr: '"Some A are B" reverses to "Some B are A"', note: 'Symmetric, and often the second conclusion in a two-conclusion question.' },
            { expr: '"Some A are not B" reverses to nothing', note: 'It does not give "Some B are not A". If an option says that, it is wrong.' },
          ],
        },
        {
          type: 'note',
          title: '"Some" means "at least one", not "not all"',
          text:
            'In everyday speech, saying "some students passed" hints that others failed. In syllogism it does not. "Some A are B" is satisfied even when all A are B, which is precisely why "All A are B" gives you "Some B are A" for free. Reading "some" as "some but not all" is the single most expensive habit in this chapter.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'venn',
      heading: 'The Venn method',
      eyebrow: 'The actual definition',
      intro:
        'A conclusion follows if it is true in every arrangement the statements permit. Not the obvious arrangement — every one. So the method is to draw the least committed diagram you can, and then try to break the conclusion.',
      blocks: [
        {
          type: 'formula',
          title: 'How to draw',
          items: [
            { expr: 'All A are B — circle A entirely inside circle B', note: 'Touching the boundary is fine; overlapping outwards is not.' },
            { expr: 'No A is B — two circles that do not touch', note: 'Keep them well apart so you are not tempted to read an overlap that is not there.' },
            { expr: 'Some A are B — two circles that overlap, and mark the overlap', note: 'Put a cross in the overlap to record that something definitely lives there.' },
            { expr: 'Some A are not B — overlap, with a cross in the part of A outside B', note: 'The cross is what makes this different from a plain overlap.' },
            { expr: 'Then attack your own diagram', note: 'Redraw it a second way that still satisfies every statement. If the conclusion survives both, it follows; if one redraw kills it, it does not.' },
          ],
        },
        {
          type: 'example',
          q: 'Statements: All roses are flowers. All flowers are plants. Conclusions: I. All roses are plants. II. Some plants are roses.',
          steps: [
            'Draw roses inside flowers, and flowers inside plants. Roses are now inside plants no matter how the circles are sized.',
            'Conclusion I is forced by the nesting, so it follows.',
            'Conclusion II is the valid conversion of "All roses are plants" — if roses live inside plants, then some plants are roses.',
            'Try to redraw: nothing lets a rose escape the plant circle, so both survive.',
          ],
          answer: 'Both conclusions follow.',
        },
        {
          type: 'note',
          title: 'Draw once, test twice',
          text:
            'The single most common failure is drawing one diagram, seeing the conclusion sitting there, and moving on. That proves the conclusion is possible, not that it follows. The second drawing — the deliberately awkward one — is where the mark is actually decided.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'rules',
      heading: 'The combination rules',
      eyebrow: 'The fast path',
      intro:
        'For a plain question with two statements sharing a middle term, these results are worth knowing by heart. They are consequences of the diagram, not replacements for it.',
      blocks: [
        {
          type: 'table',
          caption: 'Combining two statements that share a middle term',
          head: ['Combination', 'The two statements', 'What follows'],
          rows: [
            ['All + All', 'All A are B; All B are C', 'All A are C'],
            ['All + No', 'All A are B; No B is C', 'No A is C'],
            ['Some + All', 'Some A are B; All B are C', 'Some A are C'],
            ['Some + No', 'Some A are B; No B is C', 'Some A are not C'],
            ['No + All', 'No A is B; All B are C', 'Some C are not A'],
            ['All + Some', 'All A are B; Some B are C', 'No conclusion'],
            ['Some + Some', 'Some A are B; Some B are C', 'No conclusion'],
            ['No + No', 'No A is B; No B is C', 'No conclusion'],
          ],
        },
        {
          type: 'formula',
          title: 'The two principles behind the whole table',
          items: [
            { expr: 'The middle term must be fully covered at least once', note: 'It has to appear as "All B …" or "No … is B" somewhere. Two "some" statements never connect, which is why the last three rows are blank.' },
            { expr: 'The conclusion inherits the weaker premise', note: 'Pair a universal with a particular and the conclusion is particular; pair an affirmative with a negative and the conclusion is negative.' },
            { expr: 'Two particulars give nothing; two negatives give nothing', note: 'If both statements say "some", or both say "no", stop — there is no link to draw.' },
            { expr: 'Reversed conclusions count', note: 'Row five gives "Some C are not A" rather than a statement about A. Options are often written in the reversed order precisely to catch a candidate looking only for A-to-C.' },
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'possibility',
      heading: 'Possibility conclusions',
      eyebrow: 'Where banking papers live',
      intro:
        'A conclusion phrased "Some A being B is a possibility" asks a different question, and the burden of proof flips. You are no longer asking whether it must be true — only whether it can be.',
      blocks: [
        {
          type: 'formula',
          title: 'The rule, and it is a short one',
          items: [
            { expr: 'A possibility is TRUE unless the statements make it impossible', note: 'You need to find one legal diagram in which it happens. One is enough.' },
            { expr: '"Some A being B is a possibility" fails only if no A can be B', note: 'That requires the statements to force "No A is B" — through a chain such as All A are C and No C is B.' },
            { expr: '"All A being B is a possibility" fails if even one A is definitely outside B', note: 'A single definite "Some A are not B", however it arises, kills it.' },
            { expr: 'A definite conclusion and its possibility are not the same question', note: '"Some A are B" can be false while "Some A being B is a possibility" is true. Read which one the option actually says.' },
          ],
        },
        {
          type: 'example',
          q: 'Statements: All books are pens. No pen is a pencil. Conclusion: Some books being pencils is a possibility.',
          steps: [
            'Books sit entirely inside pens.',
            'The pen circle and the pencil circle do not touch at all.',
            'So every book is inside a region that is disjoint from pencils — there is nowhere to draw a book that is also a pencil.',
            'No legal diagram produces even one book-pencil, so the possibility is not merely unproven, it is impossible.',
          ],
          answer: 'The conclusion does not follow.',
        },
        {
          type: 'note',
          title: 'Why possibility questions feel backwards',
          text:
            'For an ordinary conclusion you hunt for a counter-diagram; for a possibility conclusion you hunt for a supporting one. Candidates who apply the same instinct to both get roughly half of them wrong. Read the last four words of the option before you start drawing.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'either-or',
      heading: 'Either-or pairs',
      eyebrow: 'The rescue rule',
      intro:
        'Sometimes neither conclusion follows on its own, yet the answer is not "neither follows". If the two conclusions are complementary, one of them has to be true — and the answer is "either I or II follows".',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The three complementary pairs',
              '"All A are B" with "Some A are not B"; "Some A are B" with "No A is B"; and "Some A are B" with "Some A are not B". Between them, these three cover every way two statements can be exact opposites in exam convention.',
            ],
            [
              'The subject and predicate must match exactly',
              '"Some cats are rats" pairs with "No cat is a rat". It does not pair with "No rat is a cat" written about a different subject, and it does not pair with a conclusion about a third term.',
            ],
            [
              'Neither may follow individually',
              'This is the entry condition. If one of them already follows on its own, the answer is simply that one — the either-or rule never applies.',
            ],
            [
              'Check it before answering "neither follows"',
              'The rule exists precisely because "neither follows" looks right at first glance. Whenever you are about to choose it, spend five seconds checking whether the two conclusions are opposites.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'Statements: All cats are dogs. Some dogs are rats. Conclusions: I. Some cats are rats. II. No cat is a rat.',
          steps: [
            'Cats sit inside dogs, and the dog circle overlaps rats somewhere.',
            'Draw the overlap away from the cats: no cat is a rat, so conclusion I fails.',
            'Now draw the overlap so that it includes some cats: some cats are rats, so conclusion II fails.',
            'Neither follows alone — but the two are a complementary pair with the same subject and predicate, so in every possible diagram exactly one of them is true.',
          ],
          answer: 'Either conclusion I or conclusion II follows.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'only',
      heading: '"Only" and "only a few"',
      eyebrow: 'Statements that carry two facts',
      intro:
        'Two phrasings that appear constantly in current banking papers and that candidates routinely translate wrongly. Get the translation right and the question becomes ordinary.',
      blocks: [
        {
          type: 'formula',
          title: 'The translations',
          items: [
            { expr: '"Only A are B" means "All B are A"', note: 'Only students are boys means every boy is a student. Note that it reverses the order you might expect — the word after "only" becomes the larger set.' },
            { expr: '"Only a few A are B" means "Some A are B" AND "Some A are not B"', note: 'One statement, two definite facts. This is why it appears so often — it does more work than a plain "some".' },
            { expr: '"Only a few A are B" makes "All A are B" definitely false', note: 'It also makes "All A being B is a possibility" false, because some A are already outside B.' },
            { expr: 'It does not fix anything about all of B', note: '"Only a few singers are dancers" leaves the dancers entirely open — they may all be singers, or not.' },
          ],
        },
        {
          type: 'example',
          q: 'Statement: Only a few teachers are writers. Conclusions: I. Some teachers are not writers. II. All writers are teachers.',
          steps: [
            'Translate: some teachers are writers, and some teachers are not writers.',
            'Conclusion I is literally the second half of that translation, so it follows.',
            'Conclusion II is about the writers, and the statement says nothing definite about them.',
            'Draw the writer circle spilling outside teachers — every statement is still satisfied, so II is broken.',
          ],
          answer: 'Only conclusion I follows.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'reverse',
      heading: 'Reverse syllogism',
      eyebrow: 'Banking mains',
      intro:
        'The conclusions are given and you must pick the set of statements that produces them. It looks harder and is usually easier, because you can test the options instead of deriving anything.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Work option by option',
              'Take each option as if it were the statement set, derive what follows, and check whether both given conclusions appear. There are only four options, and most die in seconds.',
            ],
            [
              'Eliminate on the negative conclusions first',
              'A negative conclusion needs a negative statement somewhere in the set. Any option made entirely of "all" and "some" statements cannot produce "no" or "some not", so strike it without further work.',
            ],
            [
              'A definite universal conclusion needs a chain of universals',
              '"All rivers are mountains" cannot come out of any set whose relevant link is a "some" statement.',
            ],
            [
              'Both conclusions must follow, not one',
              'The commonest error is stopping when the first conclusion checks out. Verify the second before you mark the option.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'Conclusions: I. Some hills are rivers. II. All rivers are mountains. Which statements produce both? (a) All hills are rivers, All rivers are mountains. (b) All rivers are hills, Some hills are mountains.',
          steps: [
            'Conclusion II is a definite universal about rivers and mountains, so the set must contain a universal linking exactly those two.',
            'Option (b) links hills and mountains with a "some" statement, which can never yield "All rivers are mountains". Strike it.',
            'Test option (a): "All hills are rivers" converts to "Some hills are rivers", which is conclusion I.',
            '"All rivers are mountains" is conclusion II word for word.',
          ],
          answer: 'Option (a) produces both conclusions.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'mistakes',
      heading: 'Where marks are lost',
      eyebrow: 'Error log',
      intro:
        'Syllogism has an objective answer key, so every lost mark traces to one of a handful of identifiable habits.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Using real-world knowledge',
              'If the statements say all dogs are cats, then in this question all dogs are cats. Your knowledge of animals is not evidence, and papers use deliberately absurd terms to test whether you can hold that line.',
            ],
            [
              'Reading "some" as "not all"',
              '"Some A are B" is true even when every A is a B. Treating it as "some but not all" invents a negative fact the statements never gave you.',
            ],
            [
              'Converting "All A are B" into "All B are A"',
              'It only gives "Some B are A". This appears in the options of almost every set.',
            ],
            [
              'Drawing one diagram and stopping',
              'One diagram shows a conclusion is possible. Only failing to break it across every legal redraw shows that it follows.',
            ],
            [
              'Choosing "neither follows" without checking for a pair',
              'When neither conclusion survives, check whether the two are complementary. If they are, the answer is "either I or II" and the paper has just caught a very common reflex.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Statements: All roses are flowers. All flowers are plants. Conclusions: I. All roses are plants. II. Some plants are roses.',
      steps: [
        'Roses sit inside flowers, which sit inside plants.',
        'Nesting forces conclusion I.',
        'Conclusion II is the valid conversion of I — "All A are B" always gives "Some B are A".',
      ],
      answer: 'Both conclusions follow.',
    },
    {
      q: 'Statements: All doctors are engineers. No engineer is a lawyer. Conclusions: I. No doctor is a lawyer. II. Some lawyers are engineers.',
      steps: [
        'Doctors sit inside engineers, and engineers are entirely separate from lawyers.',
        'So no doctor can reach the lawyer circle — conclusion I follows (All + No = No).',
        'Conclusion II contradicts the second statement outright, since "No engineer is a lawyer" reverses to "No lawyer is an engineer".',
      ],
      answer: 'Only conclusion I follows.',
    },
    {
      q: 'Statements: Some pens are books. No book is a paper. Conclusions: I. Some pens are not papers. II. All pens are papers.',
      steps: [
        'The pens that are books cannot be papers, because no book is a paper.',
        'That gives at least one pen definitely outside papers — conclusion I (Some + No = Some not).',
        'Conclusion II is contradicted by the very same pens.',
      ],
      answer: 'Only conclusion I follows.',
    },
    {
      q: 'Statements: All cats are dogs. Some dogs are rats. Conclusions: I. Some cats are rats. II. No cat is a rat.',
      steps: [
        'Place the dog-rat overlap away from the cats and conclusion I is false.',
        'Place it over the cats and conclusion II is false.',
        'Neither follows alone, but the pair is complementary — same subject, same predicate, exact opposites.',
      ],
      answer: 'Either conclusion I or conclusion II follows.',
    },
    {
      q: 'Statements: Some books are pens. Some pens are erasers. Conclusions: I. Some books are erasers. II. Some erasers are books.',
      steps: [
        'The middle term "pens" is never fully covered — both statements are "some".',
        'So the books and the erasers need never meet. Draw them apart and both conclusions fail.',
        'The two conclusions are not opposites of each other, so the either-or rule does not apply.',
      ],
      answer: 'Neither conclusion follows.',
    },
    {
      q: 'Statements: All books are pens. No pen is a pencil. Conclusion: Some books being pencils is a possibility.',
      steps: [
        'Books are inside pens, and pens are disjoint from pencils.',
        'Every book therefore lies in a region with no pencils in it.',
        'No legal diagram produces a single book-pencil.',
      ],
      answer: 'The conclusion does not follow — the possibility is ruled out.',
    },
    {
      q: 'Statements: All A are B. Some B are C. Conclusion: All C being A is a possibility.',
      steps: [
        'A sits inside B, and B overlaps C somewhere.',
        'Now try to draw the whole of C inside A: since A is inside B, that automatically puts C inside B too.',
        '"Some B are C" is still satisfied by that drawing, and no statement is broken.',
        'One legal diagram is all a possibility needs.',
      ],
      answer: 'The conclusion follows.',
    },
    {
      q: 'Statement: Only a few teachers are writers. Conclusions: I. Some teachers are not writers. II. All writers are teachers.',
      steps: [
        'Translate the statement into its two halves: some teachers are writers, and some teachers are not.',
        'Conclusion I is the second half.',
        'Nothing has been fixed about the writers, so let the writer circle spill outside teachers — conclusion II breaks.',
      ],
      answer: 'Only conclusion I follows.',
    },
    {
      q: 'Statements: All flowers are trees. Some trees are plants. No plant is a stone. Conclusions: I. Some trees are not stones. II. Some flowers are plants.',
      steps: [
        'The trees that are plants cannot be stones, because no plant is a stone — that is conclusion I.',
        'For conclusion II: flowers sit inside trees, and only some trees are plants.',
        'Draw the tree-plant overlap away from the flower circle; every statement still holds and II fails.',
      ],
      answer: 'Only conclusion I follows.',
    },
    {
      q: 'Conclusions: I. Some hills are rivers. II. All rivers are mountains. Which statement set produces both?',
      steps: [
        'Conclusion II is a definite universal, so the set needs a universal directly linking rivers to mountains.',
        'That rules out any option whose river-mountain link is a "some" statement.',
        '"All hills are rivers" converts to "Some hills are rivers", giving conclusion I.',
        'Adding "All rivers are mountains" gives conclusion II directly.',
      ],
      answer: 'All hills are rivers; All rivers are mountains.',
    },
  ],

  practice: [
    {
      q: 'Statements: All roses are flowers. All flowers are plants. Conclusions: I. All roses are plants. II. Some plants are roses.',
      options: ['Only I follows', 'Only II follows', 'Both I and II follow', 'Neither follows'],
      answer: 2,
      explain: 'The nesting forces conclusion I, and conclusion II is its valid conversion — "All A are B" always yields "Some B are A".',
    },
    {
      q: 'Statements: Some pens are books. All books are papers. Conclusions: I. Some pens are papers. II. All papers are pens.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 0,
      explain: 'Some + All gives Some, so conclusion I holds. Conclusion II reverses a universal illegitimately.',
    },
    {
      q: 'Statements: All cats are dogs. Some dogs are rats. Conclusions: I. Some cats are rats. II. No cat is a rat.',
      options: ['Only I follows', 'Either I or II follows', 'Both follow', 'Neither follows'],
      answer: 1,
      explain: 'Neither survives on its own, but the two are a complementary pair with the same subject and predicate, so exactly one must be true.',
    },
    {
      q: 'Statements: Some books are pens. Some pens are erasers. Conclusions: I. Some books are erasers. II. Some erasers are books.',
      options: ['Only I follows', 'Either I or II follows', 'Both follow', 'Neither follows'],
      answer: 3,
      explain: 'Two "some" statements never connect their end terms, and the two conclusions are not opposites, so the either-or rule does not apply.',
    },
    {
      q: 'Statements: All doctors are engineers. No engineer is a lawyer. Conclusions: I. Some lawyers are doctors. II. No doctor is a lawyer.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 1,
      explain: 'All + No gives No, so conclusion II follows. Conclusion I is directly contradicted by the second statement.',
    },
    {
      q: 'Statement: Only a few pens are books. Conclusions: I. Some pens are not books. II. All books are pens.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 0,
      explain: '"Only a few pens are books" means some pens are books and some are not. Nothing definite is fixed about the books.',
    },
    {
      q: 'Statement: Only students are boys. Conclusions: I. All boys are students. II. Some students are boys.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 2,
      explain: '"Only A are B" translates to "All B are A", giving conclusion I, and its valid conversion gives conclusion II.',
    },
    {
      q: 'Statements: All A are B. Some B are C. Conclusions: I. Some A are C. II. All C being A is a possibility.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 1,
      explain: 'All + Some yields nothing definite, so I fails. But C can legally be drawn entirely inside A, so the possibility in II holds.',
    },
    {
      q: 'Statements: No pen is a pencil. All pencils are erasers. Conclusions: I. No eraser is a pen. II. Some erasers are not pens.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 1,
      explain: 'The pencils are erasers and none of them is a pen, so some erasers are definitely not pens. But other erasers may still be pens, so I fails.',
    },
    {
      q: 'Statements: Some cars are buses. All buses are trains. Conclusions: I. Some cars are trains. II. Some trains are cars.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 2,
      explain: 'Some + All gives conclusion I, and conclusion II is its valid conversion.',
    },
    {
      q: 'Statements: All books are pens. No pen is a pencil. Conclusions: I. Some books being pencils is a possibility. II. Some books are not pencils.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 1,
      explain: 'Books lie inside pens and pens are disjoint from pencils, so no book can be a pencil. That makes II true and rules the possibility in I out entirely.',
    },
    {
      q: 'Statements: Some tables are chairs. No chair is a stool. Conclusions: I. Some tables are not stools. II. All tables being stools is a possibility.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 0,
      explain: 'The tables that are chairs cannot be stools, which gives I and simultaneously blocks II — a definite "some not" kills an "all … is a possibility".',
    },
    {
      q: 'Statements: All papers are files. Some files are folders. Conclusions: I. Some papers are folders. II. Some folders are not papers.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 3,
      explain: 'All + Some yields nothing. The folders can be drawn either overlapping the papers or entirely inside them, breaking I and II in turn, and the two are not a complementary pair.',
    },
    {
      q: 'Conclusions: I. Some hills are rivers. II. All rivers are mountains. Which set of statements makes both follow?',
      options: [
        'All hills are rivers. All rivers are mountains.',
        'Some hills are mountains. All mountains are rivers.',
        'All rivers are hills. Some hills are mountains.',
        'No hill is a river. All rivers are mountains.',
      ],
      answer: 0,
      explain: '"All hills are rivers" converts to "Some hills are rivers", and the second statement is conclusion II word for word. No other option produces a definite universal linking rivers to mountains.',
    },
    {
      q: 'Statements: All keys are locks. All locks are doors. Some doors are windows. Conclusions: I. Some keys are windows. II. All keys are doors.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 1,
      explain: 'The chain of universals forces II. The door-window overlap can be drawn away from the keys, so I fails.',
    },
    {
      q: 'Statements: Only a few singers are dancers. All dancers are actors. Conclusions: I. Some singers are actors. II. All singers being actors is a possibility.',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 2,
      explain: '"Only a few" guarantees some singers are dancers, and all dancers are actors, giving I. The remaining singers can legally be drawn inside the actor circle too, so II holds as well.',
    },
  ],

  faqs: [
    {
      q: 'What is syllogism in reasoning?',
      a: 'Syllogism gives you statements about groups and asks which conclusions necessarily follow from them. The test is strict: a conclusion follows only if it is true in every diagram consistent with the statements, regardless of whether it is true in the real world.',
    },
    {
      q: 'What is the Venn diagram method for syllogism?',
      a: 'Draw each statement as circles — one circle inside another for "all", separate circles for "no", overlapping circles with a mark for "some". Then redraw the same statements a second, more awkward way. A conclusion follows only if it survives every legal drawing; if one redraw breaks it, it does not follow.',
    },
    {
      q: 'Does "All A are B" mean "All B are A"?',
      a: 'No. It only gives "Some B are A". All mangoes are fruits, but not all fruits are mangoes. This illegitimate reversal is offered as an option in almost every syllogism set, so it is worth checking for by reflex.',
    },
    {
      q: 'What does "some" mean in syllogism?',
      a: 'At least one — and possibly all. "Some A are B" is still true when every A is a B, which is exactly why a universal statement gives you a "some" conversion for free. Reading "some" as "some but not all" adds a negative fact the statements never provided.',
    },
    {
      q: 'How do I answer possibility conclusions?',
      a: 'The burden flips. Instead of proving the conclusion must be true, you only need one legal diagram in which it is true. So a possibility conclusion fails only when the statements make it impossible — for example, "some books being pencils is a possibility" fails if all books are pens and no pen is a pencil.',
    },
    {
      q: 'When is the answer "either I or II follows"?',
      a: 'When neither conclusion follows on its own and the two are a complementary pair with the same subject and predicate. The three pairs are: "All A are B" with "Some A are not B"; "Some A are B" with "No A is B"; and "Some A are B" with "Some A are not B".',
    },
    {
      q: 'What does "only a few A are B" mean?',
      a: 'It carries two definite facts at once — some A are B, and some A are not B. That makes "All A are B" definitely false and also blocks "All A being B is a possibility". It fixes nothing about B, so all of B may still be A.',
    },
    {
      q: 'What does "only A are B" mean?',
      a: 'It means "All B are A" — the order reverses. "Only students are boys" tells you every boy is a student, not that every student is a boy. Translate the sentence before drawing anything.',
    },
    {
      q: 'What is reverse syllogism?',
      a: 'The conclusions are given and you must choose the statement set that produces them. Test the options rather than deriving forwards: any option without a negative statement cannot produce a negative conclusion, and any option whose key link is a "some" statement cannot produce a definite universal.',
    },
    {
      q: 'How many syllogism questions come in bank exams?',
      a: 'Banking prelims usually carry a set of three to five, and mains a similar number with possibility conclusions, "only a few" statements or reverse syllogism included. SSC papers ask up to three simpler ones, and RRB NTPC two to three.',
    },
  ],

  related: [
    { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
    { label: 'Seating Arrangement', to: '/study-material/reasoning/seating-arrangement/' },
    { label: 'Blood Relations', to: '/study-material/reasoning/blood-relations/' },
    { label: 'Coding-Decoding', to: '/study-material/reasoning/coding-decoding/' },
    { label: 'Series', to: '/study-material/reasoning/series/' },
    { label: 'All Reasoning', to: '/study-material/reasoning/' },
  ],
}
