/**
 * Ratio & Proportion — /study-material/quantitative-aptitude/ratio-proportion/
 *
 * The structural topic of the arithmetic section. Partnership, alligation,
 * mixtures, ages, time-and-work and speed questions are all ratio questions,
 * so the page spends its length on the manipulation skills — chaining ratios,
 * the k-method and alligation — rather than on definitions.
 */
export default {
  subject: 'quantitative-aptitude',
  subjectName: 'Quantitative Aptitude',
  slug: 'ratio-proportion',
  title: 'Ratio & Proportion',
  seoTitle: 'Ratio and Proportion for Competitive Exams | Formulas & Practice',
  metaDescription:
    'Complete Ratio and Proportion study material for SSC, banking and railway exams — chaining ratios, the k-method, mean and third proportional.',
  readMinutes: 20,
  lead: [
    'Ratio and Proportion is the structural topic of the arithmetic section. Partnership, alligation, mixtures, ages, time-and-work and speed problems are all ratio questions underneath, which is why fluency here quietly raises your score on topics that never mention the word "ratio".',
    'The skills that matter are manipulation, not definition: chaining two ratios into one, replacing a ratio with variables so an equation can be written, and reading alligation as a ratio of distances. All three are worked in full below.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–4 direct questions', note: 'Plus partnership and mixture questions built on the same skill.' },
    { exam: 'Banking Prelims & Mains', count: '3–5 questions', note: 'Heavily used in Data Interpretation, where quantities are compared as ratios.' },
    { exam: 'RRB NTPC / Group D', count: '2–4 questions', note: 'Usually direct: simplify, divide a sum, find a proportional.' },
    { exam: 'CAT / MBA entrances', count: '3–5 questions', note: 'Multi-step chaining and mixture-replacement questions.' },
  ],

  contents: [
    { icon: 'book', title: 'What a ratio is', sub: 'Terms, properties and simplest form', href: '#basics' },
    { icon: 'layers', title: 'Chaining and combining ratios', sub: 'From a:b and b:c to a:b:c', href: '#chaining' },
    { icon: 'target', title: 'The k-method', sub: 'Turn any ratio into an equation you can solve', href: '#k-method' },
    { icon: 'chart', title: 'Proportion and proportionals', sub: 'Mean, third and fourth proportional', href: '#proportion' },
    { icon: 'refresh', title: 'Componendo and dividendo', sub: 'Shortcuts for ratio equations', href: '#componendo' },
    { icon: 'doc', title: 'Dividing a quantity', sub: 'Sharing money, and partnership profits', href: '#division' },
    { icon: 'globe', title: 'Alligation and mixtures', sub: 'The rule of alligation and repeated replacement', href: '#alligation' },
    { icon: 'bell', title: 'Traps that cost marks', sub: 'Adding ratios, order, and unequal units', href: '#traps' },
    { icon: 'user', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'basics',
      heading: 'What a ratio is',
      eyebrow: 'Start here',
      intro:
        'A ratio compares two quantities of the same kind by division. Writing a : b is another way of writing the fraction a/b, and every property follows from that.',
      blocks: [
        {
          type: 'defs',
          items: [
            ['Terms', 'In a : b, a is the antecedent (first term) and b the consequent (second term). Order matters — 3 : 4 and 4 : 3 are different ratios.'],
            ['Same units only', 'A ratio compares like with like, so both quantities must be in the same unit before you write it. 500 g to 2 kg is 500 : 2000 = 1 : 4, not 500 : 2.'],
            ['A ratio has no unit', 'Because the units cancel, a ratio is a pure number. That is exactly what makes it comparable across different contexts.'],
            ['Multiplying or dividing both terms changes nothing', 'a : b = ma : mb for any non-zero m. This is why every ratio has a simplest form — divide both terms by their HCF.'],
            ['Inverse ratio', 'The inverse of a : b is b : a. It appears whenever two quantities are inversely proportional, such as speed and time over a fixed distance.'],
            ['Compounded ratio', 'The compounded ratio of a : b and c : d is ac : bd — multiply the antecedents and the consequents separately.'],
            ['Duplicate and sub-duplicate', 'The duplicate ratio of a : b is a² : b², the triplicate is a³ : b³, and the sub-duplicate is √a : √b. Sub-duplicate of 16 : 25 is 4 : 5.'],
          ],
        },
        {
          type: 'note',
          title: 'A ratio is not a quantity',
          text:
            'Knowing two salaries are in the ratio 3 : 5 tells you nothing about their size — they might be ₹3 000 and ₹5 000 or ₹30 000 and ₹50 000. You always need one absolute value, or a sum, before a ratio can produce a number.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'chaining',
      heading: 'Chaining and combining ratios',
      eyebrow: 'Core skill',
      intro:
        'Given a : b and b : c, producing a : b : c is the single most-used manipulation in the topic. The trick is to make the shared term identical in both ratios.',
      blocks: [
        {
          type: 'p',
          text:
            'Take the LCM of the two values of the shared term and scale each ratio up to match. Once b is the same number in both, the three terms can simply be read off side by side.',
        },
        {
          type: 'example',
          q: 'If a : b = 2 : 3 and b : c = 4 : 5, find a : b : c.',
          steps: [
            'b appears as 3 in the first ratio and as 4 in the second. Their LCM is 12.',
            'Scale the first by 4: a : b = 8 : 12',
            'Scale the second by 3: b : c = 12 : 15',
            'b is now 12 in both, so the terms line up directly.',
          ],
          answer: 'a : b : c = 8 : 12 : 15.',
        },
        {
          type: 'formula',
          title: 'Related manipulations',
          items: [
            { expr: 'If 2A = 3B = 4C, then A : B : C = 1/2 : 1/3 : 1/4', note: 'Take the LCM of the denominators (12) and multiply through: 6 : 4 : 3. Verify: 2×6 = 3×4 = 4×3 = 12.' },
            { expr: 'If A : B = a : b and C is unrelated, you cannot combine them', note: 'A shared term is required. Without one, the two ratios carry no common scale.' },
            { expr: 'Compounded ratio of a : b and c : d = ac : bd', note: 'Compound 2 : 3 with 4 : 5 to get 8 : 15.' },
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'k-method',
      heading: 'The k-method',
      eyebrow: 'The big one',
      intro:
        'Whenever a question gives a ratio and then changes it, replace the ratio with variables and write an equation. This one habit solves most of the harder questions in the topic.',
      blocks: [
        {
          type: 'p',
          text:
            'If two numbers are in the ratio 5 : 8, write them as 5x and 8x. The single unknown x carries the scale, and any further condition in the question becomes an equation in x that you can solve directly.',
        },
        {
          type: 'example',
          q: 'Two numbers are in the ratio 5 : 8. If each is increased by 9, the ratio becomes 8 : 11. Find the numbers.',
          steps: [
            'Write the numbers as 5x and 8x.',
            'After the increase: (5x + 9)/(8x + 9) = 8/11',
            'Cross-multiply: 11(5x + 9) = 8(8x + 9)',
            '55x + 99 = 64x + 72, so 9x = 27 and x = 3.',
            'Check: 24 and 33 are in the ratio 8 : 11.',
          ],
          answer: 'The numbers are 15 and 24.',
        },
        {
          type: 'note',
          title: 'Use one variable, not two',
          text:
            'Writing the numbers as 5x and 8y throws away the information the ratio gave you and leaves an unsolvable pair. The whole point of the ratio is that a single scale factor governs both.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'proportion',
      heading: 'Proportion and proportionals',
      eyebrow: 'Definitions worth knowing',
      intro:
        'Four quantities are in proportion when a : b = c : d. The three named "proportionals" are just this equation with one term missing, and each has a one-line formula.',
      blocks: [
        {
          type: 'formula',
          title: 'The proportionals',
          items: [
            { expr: 'a : b = c : d ⟺ ad = bc', note: 'The product of the extremes equals the product of the means. a and d are the extremes; b and c the means.' },
            { expr: 'Mean proportional between a and b = √(ab)', note: 'Between 9 and 25 it is √225 = 15. This is the b in a : b = b : c.' },
            { expr: 'Third proportional to a and b = b² ÷ a', note: 'To 4 and 12 it is 144/4 = 36, because 4 : 12 = 12 : 36.' },
            { expr: 'Fourth proportional to a, b and c = (b × c) ÷ a', note: 'To 3, 6 and 9 it is 6 × 9 / 3 = 18, because 3 : 6 = 9 : 18.' },
            { expr: 'Continued proportion a : b = b : c ⟹ b² = ac', note: 'The middle term is the mean proportional of the outer two.' },
          ],
        },
        {
          type: 'note',
          title: 'Third and mean are not the same',
          text:
            'The mean proportional sits between the two given numbers; the third proportional sits after them. For 4 and 12 the mean proportional is √48 ≈ 6.93 while the third proportional is 36. Questions often offer both as options.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'componendo',
      heading: 'Componendo and dividendo',
      eyebrow: 'Shortcut',
      intro:
        'A family of transformations that turn an awkward ratio equation into a clean one. Worth recognising, because a question built for them collapses in one step.',
      blocks: [
        {
          type: 'formula',
          title: 'The transformations',
          items: [
            { expr: 'Componendo: if a/b = c/d then (a + b)/b = (c + d)/d', note: 'Add 1 to both sides and simplify.' },
            { expr: 'Dividendo: if a/b = c/d then (a − b)/b = (c − d)/d', note: 'Subtract 1 from both sides.' },
            { expr: 'Componendo and dividendo: (a + b)/(a − b) = (c + d)/(c − d)', note: 'The combined form, and by far the most useful. It removes the need to cross-multiply and expand.' },
            { expr: 'Invertendo: a/b = c/d ⟹ b/a = d/c', note: 'Invert both sides.' },
            { expr: 'Alternendo: a/b = c/d ⟹ a/c = b/d', note: 'Swap the means.' },
          ],
        },
        {
          type: 'example',
          q: 'If (3x + 2y) : (3x − 2y) = 5 : 1, find x : y.',
          steps: [
            'Apply componendo and dividendo in reverse, treating a = 3x and b = 2y.',
            'Sum over difference is 5/1, so (a + b)/(a − b) = 5/1.',
            'This gives a/b = (5 + 1)/(5 − 1) = 6/4 = 3/2.',
            'So 3x/2y = 3/2, which means x/y = 1/1.',
          ],
          answer: 'x : y = 1 : 1.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'division',
      heading: 'Dividing a quantity, and partnership',
      eyebrow: 'Exam classic',
      intro:
        'Splitting an amount in a given ratio is the most common direct question. Partnership is the same operation, with each partner\'s share weighted by both capital and time.',
      blocks: [
        {
          type: 'formula',
          title: 'The formulas',
          items: [
            { expr: 'Dividing N in the ratio a : b : c gives Na/(a+b+c), Nb/(a+b+c), Nc/(a+b+c)', note: 'Add the parts first; that total is the denominator for every share.' },
            { expr: 'Simple partnership (same duration): profit ratio = capital ratio', note: 'Invest ₹4 000 and ₹6 000 for the same year → profits split 2 : 3.' },
            { expr: 'Compound partnership: profit ratio = capital × time', note: 'The product is often called the monthly equivalent of the investment.' },
            { expr: 'Working vs sleeping partner', note: 'A working partner\'s salary or commission is taken out of the profit FIRST; only the remainder is split in the capital ratio.' },
          ],
        },
        {
          type: 'example',
          q: 'A invests ₹10 000 for 6 months and B invests ₹15 000 for 8 months. In what ratio should a profit of ₹9 000 be divided?',
          steps: [
            "A's weight = 10 000 × 6 = 60 000",
            "B's weight = 15 000 × 8 = 120 000",
            'Ratio = 60 000 : 120 000 = 1 : 2',
            'Three parts of ₹9 000 gives ₹3 000 per part.',
          ],
          answer: 'A receives ₹3 000 and B receives ₹6 000.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'alligation',
      heading: 'Alligation and mixtures',
      eyebrow: 'High yield',
      intro:
        'Alligation finds the ratio in which two things at different rates must be mixed to reach a given average. It is a ratio of distances from the mean, and it works for prices, speeds, percentages and concentrations alike.',
      blocks: [
        {
          type: 'formula',
          title: 'The rule of alligation',
          items: [
            { expr: 'Cheaper quantity : Dearer quantity = (Dearer rate − Mean) : (Mean − Cheaper rate)', note: 'Each side gets the distance from the mean on the OPPOSITE side. This crossing over is the whole rule.' },
            { expr: 'Repeated replacement: pure left = V × (1 − x/V)ⁿ', note: 'V is the vessel, x the amount drawn off and replaced each time, n the number of operations.' },
            { expr: 'Mean of a mixture = (q₁r₁ + q₂r₂) ÷ (q₁ + q₂)', note: 'The weighted average — alligation is just this equation rearranged.' },
          ],
        },
        {
          type: 'example',
          q: 'In what ratio must rice at ₹30 a kg be mixed with rice at ₹45 a kg to obtain a mixture worth ₹36 a kg?',
          steps: [
            'Distance of the dearer rate from the mean: 45 − 36 = 9',
            'Distance of the cheaper rate from the mean: 36 − 30 = 6',
            'Cross over: cheaper : dearer = 9 : 6',
            'Simplify by 3.',
          ],
          answer: '3 : 2 — three parts of the ₹30 rice to two of the ₹45 rice.',
        },
        {
          type: 'example',
          q: 'A vessel holds 40 litres of pure milk. Four litres are drawn off and replaced with water, and this is done a second time. How much milk remains?',
          steps: [
            'Each operation leaves a fraction (1 − 4/40) = 9/10 of the milk.',
            'After two operations: 40 × (9/10)²',
            '40 × 81/100',
          ],
          answer: '32.4 litres of milk (and 7.6 litres of water).',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'traps',
      heading: 'Traps that cost marks',
      eyebrow: 'Read this twice',
      intro: 'Four errors account for most lost marks here, and every one is a misreading rather than a miscalculation.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Adding ratios term by term',
              'If A : B = 2 : 3 and C : D = 4 : 5, then (A + C) : (B + D) is NOT 6 : 8. Ratios only add when they share a common scale, which two unrelated ratios do not.',
            ],
            [
              'Forgetting that order matters',
              '3 : 4 and 4 : 3 are different answers, and both usually appear in the options. Check which quantity the question named first.',
            ],
            [
              'Mixing units',
              'A ratio needs both quantities in the same unit. 45 minutes to 2 hours is 45 : 120 = 3 : 8, not 45 : 2.',
            ],
            [
              'Alligation the wrong way round',
              'The distance from the mean on one side gives the quantity on the OTHER side. If you do not cross over, you get the reciprocal — which is also in the options.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Divide ₹1 200 among three people in the ratio 3 : 4 : 5.',
      steps: ['Total parts = 3 + 4 + 5 = 12', 'One part = 1200 ÷ 12 = ₹100', 'Multiply out each share.'],
      answer: '₹300, ₹400 and ₹500.',
    },
    {
      q: 'Find the mean proportional between 9 and 25.',
      steps: ['Mean proportional = √(a × b)', '√(9 × 25) = √225'],
      answer: '15, because 9 : 15 = 15 : 25.',
    },
    {
      q: 'Find the third proportional to 4 and 12.',
      steps: ['Third proportional = b² ÷ a', '144 ÷ 4'],
      answer: '36, because 4 : 12 = 12 : 36.',
    },
    {
      q: 'Find the fourth proportional to 3, 6 and 9.',
      steps: ['Fourth proportional = (b × c) ÷ a', '(6 × 9) ÷ 3'],
      answer: '18, because 3 : 6 = 9 : 18.',
    },
    {
      q: 'If 2A = 3B = 4C, find A : B : C.',
      steps: [
        'Set all three equal to a constant k, so A = k/2, B = k/3, C = k/4.',
        'A : B : C = 1/2 : 1/3 : 1/4',
        'Multiply through by the LCM of the denominators, 12.',
        'Check: 2 × 6 = 3 × 4 = 4 × 3 = 12.',
      ],
      answer: 'A : B : C = 6 : 4 : 3.',
    },
    {
      q: 'If x : y = 3 : 4, find (2x + 3y) : (3x − 2y).',
      steps: ['Take x = 3 and y = 4.', '2x + 3y = 6 + 12 = 18', '3x − 2y = 9 − 8 = 1'],
      answer: '18 : 1.',
    },
    {
      q: 'A mixture of 60 litres has milk and water in the ratio 2 : 1. How much water must be added to make the ratio 1 : 1?',
      steps: [
        'Milk = 60 × 2/3 = 40 litres and water = 20 litres.',
        'Milk does not change, so the final water must also be 40 litres.',
        'Water to add = 40 − 20',
      ],
      answer: '20 litres.',
    },
    {
      q: 'In what ratio must tea at ₹20 a kg be mixed with tea at ₹32 a kg to get a mixture at ₹26 a kg?',
      steps: ['Dearer − mean = 32 − 26 = 6', 'Mean − cheaper = 26 − 20 = 6', 'Cross over: cheaper : dearer = 6 : 6'],
      answer: '1 : 1 — equal quantities, since ₹26 is exactly halfway.',
    },
    {
      q: 'The ratio of two numbers is 7 : 9. If each is increased by 6, the ratio becomes 5 : 6. Find the larger number.',
      steps: [
        'Write the numbers as 7x and 9x.',
        '(7x + 6)/(9x + 6) = 5/6',
        '6(7x + 6) = 5(9x + 6) gives 42x + 36 = 45x + 30.',
        '3x = 6, so x = 2 and the numbers are 14 and 18.',
      ],
      answer: 'The larger number is 18. (Check: 20 : 24 = 5 : 6.)',
    },
    {
      q: 'From 20 litres of pure milk, 5 litres are removed and replaced by water. This is repeated once more. How much milk is left?',
      steps: ['Each operation leaves (1 − 5/20) = 3/4 of the milk.', 'After two operations: 20 × (3/4)²', '20 × 9/16'],
      answer: '11.25 litres.',
    },
  ],

  practice: [
    {
      q: 'The ratio 48 : 60 in its simplest form is:',
      options: ['4 : 5', '8 : 10', '3 : 4', '6 : 7'],
      answer: 0,
      explain: 'The HCF of 48 and 60 is 12, and dividing both terms gives 4 : 5.',
    },
    {
      q: '₹640 is divided in the ratio 3 : 5. The smaller share is:',
      options: ['₹320', '₹240', '₹280', '₹200'],
      answer: 1,
      explain: 'Total parts = 8, so one part is ₹80 and the smaller share is 3 × 80 = ₹240.',
    },
    {
      q: 'If a : b = 2 : 3 and b : c = 4 : 5, then a : c is:',
      options: ['4 : 5', '2 : 5', '8 : 15', '3 : 4'],
      answer: 2,
      explain: 'Making b common gives a : b : c = 8 : 12 : 15, so a : c = 8 : 15.',
    },
    {
      q: 'The mean proportional between 4 and 49 is:',
      options: ['18', '26.5', '28', '14'],
      answer: 3,
      explain: 'Mean proportional = √(4 × 49) = √196 = 14.',
    },
    {
      q: 'The third proportional to 6 and 12 is:',
      options: ['24', '30', '18', '36'],
      answer: 0,
      explain: 'Third proportional = b²/a = 144/6 = 24, because 6 : 12 = 12 : 24.',
    },
    {
      q: 'The fourth proportional to 5, 8 and 15 is:',
      options: ['18', '24', '20', '30'],
      answer: 1,
      explain: 'Fourth proportional = (8 × 15)/5 = 24, because 5 : 8 = 15 : 24.',
    },
    {
      q: 'Two numbers are in the ratio 7 : 9. Increasing each by 6 makes the ratio 5 : 6. The larger number is:',
      options: ['14', '16', '18', '20'],
      answer: 2,
      explain: '(7x + 6)/(9x + 6) = 5/6 gives x = 2, so the numbers are 14 and 18.',
    },
    {
      q: 'If 2A = 3B = 4C, then A : B : C equals:',
      options: ['3 : 4 : 6', '4 : 3 : 2', '2 : 3 : 4', '6 : 4 : 3'],
      answer: 3,
      explain: 'A : B : C = 1/2 : 1/3 : 1/4, and multiplying by 12 gives 6 : 4 : 3.',
    },
    {
      q: 'A and B invest capitals in the ratio 5 : 6 for times in the ratio 6 : 5. Their profits are in the ratio:',
      options: ['1 : 1', '5 : 6', '6 : 5', '25 : 36'],
      answer: 0,
      explain: 'Profit weight is capital × time: 5 × 6 = 30 and 6 × 5 = 30, so the ratio is 1 : 1.',
    },
    {
      q: 'In what ratio must rice at ₹20 a kg be mixed with rice at ₹32 a kg to get a mixture at ₹26 a kg?',
      options: ['3 : 2', '1 : 1', '1 : 2', '2 : 1'],
      answer: 1,
      explain: 'Distances from the mean are 32 − 26 = 6 and 26 − 20 = 6, so the ratio is 6 : 6 = 1 : 1.',
    },
    {
      q: 'A 60-litre mixture has milk and water in the ratio 2 : 1. Water to be added to make it 1 : 1 is:',
      options: ['30 litres', '10 litres', '20 litres', '15 litres'],
      answer: 2,
      explain: 'Milk is 40 litres and water 20. Milk is unchanged, so water must reach 40 — add 20 litres.',
    },
    {
      q: 'The duplicate ratio of 3 : 4 is:',
      options: ['6 : 8', '3 : 8', '27 : 64', '9 : 16'],
      answer: 3,
      explain: 'The duplicate ratio squares both terms: 3² : 4² = 9 : 16. Cubing would give the triplicate ratio.',
    },
    {
      q: 'The sub-duplicate ratio of 16 : 25 is:',
      options: ['4 : 5', '32 : 50', '8 : 12.5', '256 : 625'],
      answer: 0,
      explain: 'The sub-duplicate ratio takes square roots: √16 : √25 = 4 : 5.',
    },
    {
      q: 'If x : y = 5 : 2, then (3x + 2y) : (2x − y) equals:',
      options: ['17 : 8', '19 : 8', '15 : 7', '19 : 6'],
      answer: 1,
      explain: 'Take x = 5 and y = 2. Then 3x + 2y = 19 and 2x − y = 8, giving 19 : 8.',
    },
    {
      q: 'From 20 litres of pure milk, 5 litres are removed and replaced with water twice. Milk left is:',
      options: ['12.5 litres', '15 litres', '11.25 litres', '10 litres'],
      answer: 2,
      explain: 'Milk left = 20 × (1 − 5/20)² = 20 × 9/16 = 11.25 litres.',
    },
    {
      q: 'Three numbers in the ratio 2 : 3 : 5 add up to 200. The largest is:',
      options: ['120', '80', '60', '100'],
      answer: 3,
      explain: 'Total parts = 10, so one part is 20 and the largest number is 5 × 20 = 100.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between ratio and proportion?',
      a: 'A ratio compares two quantities of the same kind — 3 : 4. A proportion states that two ratios are equal — 3 : 4 = 9 : 12. Every proportion contains ratios, but a single ratio on its own is not a proportion.',
    },
    {
      q: 'How do I combine a : b and b : c into a : b : c?',
      a: 'Make the shared term identical in both. If a : b = 2 : 3 and b : c = 4 : 5, the LCM of 3 and 4 is 12, so scale the first ratio by 4 and the second by 3. That gives 8 : 12 and 12 : 15, so a : b : c = 8 : 12 : 15.',
    },
    {
      q: 'What is the k-method in ratio problems?',
      a: 'Replace the ratio with variables sharing one scale factor. Two numbers in the ratio 5 : 8 become 5x and 8x. Any further condition in the question then becomes a single equation in x. Using two different variables discards the ratio and leaves the problem unsolvable.',
    },
    {
      q: 'What is the difference between mean proportional and third proportional?',
      a: 'The mean proportional between a and b is √(ab) and sits between them. The third proportional to a and b is b²/a and comes after them. For 4 and 12 the mean proportional is √48 while the third proportional is 36 — questions usually offer both.',
    },
    {
      q: 'How does the rule of alligation work?',
      a: 'Write the two rates and the required mean, then take each rate\'s distance from the mean and cross them over. The quantity of the cheaper item is proportional to (dearer rate − mean), and the quantity of the dearer item to (mean − cheaper rate). Forgetting to cross over gives the reciprocal, which is always in the options.',
    },
    {
      q: 'How is profit shared in a partnership?',
      a: 'In the ratio of capital × time for each partner. If A invests ₹10 000 for 6 months and B ₹15 000 for 8 months, the weights are 60 000 and 120 000, so profits split 1 : 2. If one partner draws a salary, deduct it from the profit first and split only the remainder.',
    },
    {
      q: 'What is the formula for repeated replacement in a mixture?',
      a: 'If x litres are drawn from a vessel of V litres and replaced with water, n times, the original liquid remaining is V × (1 − x/V)ⁿ. Drawing 4 litres twice from 40 litres of milk leaves 40 × (0.9)² = 32.4 litres.',
    },
    {
      q: 'Can I add two ratios together?',
      a: 'Not term by term. If A : B = 2 : 3 and C : D = 4 : 5, then (A + C) : (B + D) is not 6 : 8 — the two ratios have no common scale. You can only combine ratios that share a term, and then only by chaining them.',
    },
    {
      q: 'Why do units matter in a ratio?',
      a: 'A ratio compares like with like, so both quantities must be converted to the same unit first. 45 minutes to 2 hours is 45 : 120 = 3 : 8. Writing 45 : 2 compares minutes with hours and is meaningless.',
    },
    {
      q: 'Which topics depend on Ratio and Proportion?',
      a: 'Partnership, alligation and mixtures directly; and less obviously ages, time and work, time-speed-distance, and most Data Interpretation. Speed is inversely proportional to time over a fixed distance, and work rates combine as ratios — so fluency here pays off well beyond the questions labelled "ratio".',
    },
  ],

  related: [
    { label: 'Percentages', to: '/study-material/quantitative-aptitude/percentages/' },
    { label: 'Profit & Loss', to: '/study-material/quantitative-aptitude/profit-loss/' },
    { label: 'Time & Work', to: '/study-material/quantitative-aptitude/time-work/' },
    { label: 'Time, Speed & Distance', to: '/study-material/quantitative-aptitude/time-speed-distance/' },
    { label: 'Number System', to: '/study-material/quantitative-aptitude/number-system/' },
    { label: 'All Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
  ],
}
