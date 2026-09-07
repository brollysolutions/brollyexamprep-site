/**
 * Percentages — /study-material/quantitative-aptitude/percentages/
 *
 * The single highest-leverage topic in the arithmetic section: profit and loss,
 * simple and compound interest, discount, data interpretation and mixtures are
 * all percentage questions wearing different clothes.
 *
 * Written to be worked through in order. The fraction table in section 2 and
 * the reversal shortcut in section 5 are the two things that actually change a
 * candidate's speed, so both are given far more room than a formula list.
 */
export default {
  subject: 'quantitative-aptitude',
  subjectName: 'Quantitative Aptitude',
  slug: 'percentages',
  title: 'Percentages',
  seoTitle: 'Percentage for Competitive Exams | Formulas, Shortcuts & Practice',
  metaDescription:
    'Complete Percentage study material for SSC, banking and railway exams — fraction to percentage table, successive change, reversal shortcuts.',
  readMinutes: 22,
  lead: [
    'Percentages is the most reusable topic in the whole quantitative paper. Profit and loss, discount, simple and compound interest, data interpretation, mixtures and even parts of time-and-work are percentage questions in different clothing — so every hour spent here pays off several times over.',
    'The plan on this page is deliberate. Learn the fraction-to-percentage table until it is instant, learn the multiplying factor so you stop writing "×100 ÷100" chains, then learn the reversal shortcut. Those three between them convert most exam percentage questions from a minute of working into a line of mental arithmetic.',
  ],

  /** Ranges, not promises — question counts move between cycles. */
  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–5 direct questions', note: 'Plus most of profit-and-loss and interest, which are percentages underneath.' },
    { exam: 'Banking Prelims & Mains', count: '4–6 questions', note: 'Heavily used inside Data Interpretation sets, where speed matters most.' },
    { exam: 'RRB NTPC / Group D', count: '3–5 questions', note: 'Usually direct and formula-based.' },
    { exam: 'CAT / MBA entrances', count: '3–6 questions', note: 'Multi-step: successive change, base shifts and percentage-point traps.' },
  ],

  contents: [
    { icon: 'book', title: 'What a percentage is', sub: 'Per hundred, and the three conversions', href: '#basics' },
    { icon: 'layers', title: 'Fraction ↔ percentage table', sub: 'The one table worth memorising cold', href: '#conversions' },
    { icon: 'chart', title: 'Increase, decrease, multiplying factor', sub: 'Stop writing ×100 ÷100 chains', href: '#change' },
    { icon: 'refresh', title: 'Successive percentage change', sub: 'The a + b + ab/100 rule', href: '#successive' },
    { icon: 'target', title: 'The reversal shortcut', sub: 'x% more one way, how much less the other', href: '#reversal' },
    { icon: 'doc', title: 'Price, consumption, expenditure', sub: 'The classic three-quantity question', href: '#expenditure' },
    { icon: 'globe', title: 'Growth and depreciation', sub: 'Population, machinery and repeated change', href: '#growth' },
    { icon: 'user', title: 'Marks, elections and people', sub: 'The recurring word-problem shapes', href: '#applications' },
    { icon: 'bell', title: 'Traps that cost marks', sub: 'Percentage points and shifting bases', href: '#traps' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'basics',
      heading: 'What a percentage is',
      eyebrow: 'Start here',
      intro:
        '"Per cent" means "per hundred". A percentage is nothing more than a fraction whose denominator has been fixed at 100, which is what makes two different quantities comparable.',
      blocks: [
        {
          type: 'formula',
          title: 'The three conversions',
          items: [
            { expr: 'x% = x / 100', note: 'A percentage is a fraction. 35% is exactly 35/100, or 7/20.' },
            { expr: 'Fraction → percentage: multiply by 100', note: '3/8 → (3/8) × 100 = 37.5%' },
            { expr: 'Percentage → decimal: divide by 100', note: '35% → 0.35. Shift the decimal point two places left.' },
          ],
        },
        {
          type: 'p',
          text:
            'Two phrasings account for almost every basic question, and mixing them up is the most common avoidable error in the section. "x% of y" means (x/100) × y. "A as a percentage of B" means (A/B) × 100. The first gives you a quantity; the second gives you a percentage.',
        },
        {
          type: 'example',
          q: 'What percentage of 2 hours is 18 minutes?',
          steps: [
            'Both quantities must be in the same unit: 2 hours = 120 minutes.',
            'Divide the part by the whole: 18 / 120',
            'Multiply by 100: (18 / 120) × 100',
          ],
          answer: '15%.',
        },
        {
          type: 'note',
          title: 'A property worth exploiting',
          text:
            'x% of y is always equal to y% of x, because both equal xy/100. So 16% of 25 is the same as 25% of 16 — and the second is a quarter of 16, which is 4. Whenever one of the two numbers is a friendly percentage, flip them.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'conversions',
      heading: 'The fraction ↔ percentage table',
      eyebrow: 'Memorise this',
      intro:
        'This is the single highest-return thing on the page. Almost every percentage in an exam is a friendly fraction in disguise, and recognising it turns long division into a one-step calculation. Learn it until it is instant recall, not something you derive.',
      blocks: [
        {
          type: 'table',
          caption: 'Read it both ways — from the fraction to the percentage, and from the percentage back to the fraction. The second direction is the one that saves time under pressure.',
          head: ['Fraction', 'Percentage', 'Handy multiples'],
          rows: [
            ['1/2', '50%', '3/2 = 150%'],
            ['1/3', '33.33%  (33⅓%)', '2/3 = 66.67% (66⅔%)'],
            ['1/4', '25%', '3/4 = 75%'],
            ['1/5', '20%', '2/5 = 40%, 3/5 = 60%, 4/5 = 80%'],
            ['1/6', '16.67%  (16⅔%)', '5/6 = 83.33% (83⅓%)'],
            ['1/7', '14.29%  (14 2/7 %)', '2/7 = 28.57%, 3/7 = 42.86%'],
            ['1/8', '12.5%', '3/8 = 37.5%, 5/8 = 62.5%, 7/8 = 87.5%'],
            ['1/9', '11.11%  (11 1/9 %)', '2/9 = 22.22%, 4/9 = 44.44%'],
            ['1/10', '10%', '3/10 = 30%, 7/10 = 70%'],
            ['1/11', '9.09%  (9 1/11 %)', '2/11 = 18.18%, 3/11 = 27.27%'],
            ['1/12', '8.33%  (8⅓%)', '5/12 = 41.67%, 7/12 = 58.33%'],
            ['1/13', '7.69%', '2/13 = 15.38%'],
            ['1/14', '7.14%', '3/14 = 21.43%'],
            ['1/15', '6.67%  (6⅔%)', '4/15 = 26.67%'],
            ['1/16', '6.25%', '3/16 = 18.75%, 5/16 = 31.25%'],
            ['1/18', '5.56%', '5/18 = 27.78%'],
            ['1/20', '5%', '3/20 = 15%, 9/20 = 45%'],
            ['1/25', '4%', '7/25 = 28%'],
            ['1/40', '2.5%', '3/40 = 7.5%'],
            ['1/50', '2%', '7/50 = 14%'],
          ],
        },
        {
          type: 'p',
          text:
            'The pattern to notice is that each denominator gives a repeating decimal you can reconstruct. Sevenths always cycle through 14.28, 28.57, 42.85, 57.14, 71.42, 85.71 — the same six digits rotating. Ninths are the digit repeated: 11.11, 22.22, 33.33. Elevenths go up in 9.09s. You do not need to memorise every multiple, only the unit fraction and the pattern.',
        },
        {
          type: 'example',
          q: 'Find 37.5% of 464 without long multiplication.',
          steps: [
            'Recognise 37.5% as 3/8 from the table.',
            'Divide first, because 464 splits cleanly by 8: 464 / 8 = 58',
            'Then multiply by 3: 58 × 3',
          ],
          answer: '174. Dividing before multiplying keeps the numbers small.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'change',
      heading: 'Increase, decrease and the multiplying factor',
      eyebrow: 'Core skill',
      intro:
        'Most candidates compute a percentage change in two steps — find the change, then add it on. The multiplying factor does it in one, and it is what makes successive changes and compound growth tractable later.',
      blocks: [
        {
          type: 'formula',
          title: 'The formulas',
          items: [
            { expr: 'Percentage change = (change ÷ original value) × 100', note: 'The denominator is always the ORIGINAL value, never the new one. This is the single most common mistake in the topic.' },
            { expr: 'Value after an r% increase = original × (1 + r/100)', note: 'A 20% rise means × 1.20. Multiply once, not add-after-computing.' },
            { expr: 'Value after an r% decrease = original × (1 − r/100)', note: 'A 20% fall means × 0.80.' },
            { expr: 'Original = new value ÷ (1 ± r/100)', note: 'Working backwards is division, not subtracting the same percentage.' },
          ],
        },
        {
          type: 'table',
          caption: 'Learn the factor, not the arithmetic. The fraction form on the right is what makes mental cancellation possible.',
          head: ['Change', 'Multiplying factor', 'As a fraction'],
          rows: [
            ['+10%', '1.10', '11/10'],
            ['+20%', '1.20', '6/5'],
            ['+25%', '1.25', '5/4'],
            ['+50%', '1.50', '3/2'],
            ['+100%', '2.00', '2/1'],
            ['−10%', '0.90', '9/10'],
            ['−20%', '0.80', '4/5'],
            ['−25%', '0.75', '3/4'],
            ['−50%', '0.50', '1/2'],
          ],
        },
        {
          type: 'note',
          title: 'Working backwards is not symmetrical',
          text:
            'If a price after a 25% increase is ₹500, the original is 500 ÷ 1.25 = ₹400 — not 500 minus 25%, which would wrongly give ₹375. Increases and decreases of the same size do not cancel, and the next section explains exactly by how much they miss.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'successive',
      heading: 'Successive percentage change',
      eyebrow: 'High yield',
      intro:
        'When two percentage changes are applied one after the other, they do not simply add — the second one acts on an already-changed base. One formula handles every case.',
      blocks: [
        {
          type: 'formula',
          title: 'The successive-change rule',
          items: [
            { expr: 'Net change = a + b + ab/100', note: 'Use a and b with their signs: increases positive, decreases negative. A positive result is a net increase.' },
            { expr: 'Two equal increases of x%: net = 2x + x²/100', note: '10% twice → 20 + 1 = 21%, not 20%.' },
            { expr: 'An x% increase followed by an x% decrease: net = −x²/100', note: 'Always a loss, whichever order you apply them. +20% then −20% gives −4%.' },
            { expr: 'For three changes, apply the rule twice', note: 'Combine a and b first, then combine that result with c.' },
          ],
        },
        {
          type: 'example',
          q: 'A salary is increased by 20% and then by 30%. What is the overall increase?',
          steps: [
            'Here a = +20 and b = +30.',
            'Net = 20 + 30 + (20 × 30)/100',
            'Net = 50 + 6',
            'Check with factors: 1.20 × 1.30 = 1.56, which is a 56% rise.',
          ],
          answer: 'A 56% increase — not 50%.',
        },
        {
          type: 'example',
          q: 'A shopkeeper marks goods up 40% above cost and then allows a 25% discount. What is the profit percentage?',
          steps: [
            'Mark-up a = +40, discount b = −25.',
            'Net = 40 + (−25) + (40 × −25)/100',
            'Net = 15 − 10',
            'Check: cost 100 → marked 140 → sold at 140 × 0.75 = 105.',
          ],
          answer: 'A 5% profit.',
        },
        {
          type: 'note',
          title: 'Order never matters',
          text:
            'Because the multiplying factors are simply multiplied together, applying +20% then −30% gives exactly the same result as −30% then +20%. If a question implies the order changes the answer, re-read it — something other than a plain percentage change is going on.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'reversal',
      heading: 'The reversal shortcut',
      eyebrow: 'The big one',
      intro:
        'If A is 25% more than B, B is not 25% less than A — it is 20% less, because the two statements use different bases. This is the most frequently tested idea in the whole topic, and there is a shortcut that makes it instant.',
      blocks: [
        {
          type: 'formula',
          title: 'The formulas',
          items: [
            { expr: 'If A is x% more than B, then B is [x / (100 + x)] × 100 % less than A', note: 'A is 25% more than B → B is (25/125) × 100 = 20% less than A.' },
            { expr: 'If A is x% less than B, then B is [x / (100 − x)] × 100 % more than A', note: 'A is 20% less than B → B is (20/80) × 100 = 25% more than A.' },
          ],
        },
        {
          type: 'p',
          text:
            'You almost never need to compute those. Convert the percentage into a unit fraction 1/n and the answer falls out: if something is 1/n MORE, the reverse is 1/(n + 1) LESS. If something is 1/n LESS, the reverse is 1/(n − 1) MORE. One step, no division.',
        },
        {
          type: 'table',
          caption: 'Both columns are the same shortcut read in opposite directions. Learning the left column is usually enough — the right one is the mirror image.',
          head: ['"A is x% more than B" → B is … less', 'Fraction step', '"A is x% less than B" → B is … more'],
          rows: [
            ['100% more → 50% less', '1/1 → 1/2', '50% less → 100% more'],
            ['50% more → 33.33% less', '1/2 → 1/3', '33.33% less → 50% more'],
            ['33.33% more → 25% less', '1/3 → 1/4', '25% less → 33.33% more'],
            ['25% more → 20% less', '1/4 → 1/5', '20% less → 25% more'],
            ['20% more → 16.67% less', '1/5 → 1/6', '16.67% less → 20% more'],
            ['16.67% more → 14.29% less', '1/6 → 1/7', '14.29% less → 16.67% more'],
            ['12.5% more → 11.11% less', '1/8 → 1/9', '11.11% less → 12.5% more'],
            ['10% more → 9.09% less', '1/10 → 1/11', '9.09% less → 10% more'],
          ],
        },
        {
          type: 'note',
          title: 'Turn it into a ratio instead',
          text:
            'If A is 25% more than B, then A : B = 5 : 4 — read straight off the fraction 1/4. Every "how much less / what percentage of" question then becomes a ratio question. B is 4/5 of A, which is 80%, so B is 20% less. Candidates who work in ratios finish these in a few seconds.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'expenditure',
      heading: 'Price, consumption and expenditure',
      eyebrow: 'Exam classic',
      intro:
        'Expenditure = price × consumption. Every question in this family fixes one of the three and changes another, and they are really just the reversal shortcut applied to a product.',
      blocks: [
        {
          type: 'formula',
          title: 'The three cases',
          items: [
            { expr: 'Price rises x%, expenditure unchanged → cut consumption by [x/(100 + x)] × 100 %', note: 'Price up 25% → cut consumption 20%. Same shortcut: 1/4 up means 1/5 down.' },
            { expr: 'Price falls x%, expenditure unchanged → consumption may rise by [x/(100 − x)] × 100 %', note: 'Price down 20% → consumption up 25%.' },
            { expr: 'Price changes a% and consumption b% → expenditure changes a + b + ab/100 %', note: 'The successive-change rule again, because expenditure is their product.' },
          ],
        },
        {
          type: 'example',
          q: 'The price of petrol rises by 25%. By what percentage must a driver cut usage so that the monthly fuel bill is unchanged?',
          steps: [
            '25% is 1/4, so the price goes from 4 parts to 5 parts.',
            'To keep the product fixed, usage must go from 5 parts to 4 parts.',
            'That is a fall of 1 part out of 5.',
          ],
          answer: 'A 20% cut in usage.',
        },
        {
          type: 'example',
          q: 'The price of rice falls 10% and a family increases consumption by 5%. What happens to their spending on rice?',
          steps: [
            'a = −10 (price), b = +5 (consumption).',
            'Net = −10 + 5 + (−10 × 5)/100',
            'Net = −5 − 0.5',
          ],
          answer: 'Spending falls by 5.5%.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'growth',
      heading: 'Growth and depreciation',
      eyebrow: 'Repeated change',
      intro:
        'A percentage applied again and again — to a population, a machine\'s value or an investment — is compound growth. It is the same multiplying factor, raised to a power.',
      blocks: [
        {
          type: 'formula',
          title: 'Repeated change',
          items: [
            { expr: 'Value after n periods of r% growth = P × (1 + r/100)ⁿ', note: 'Population 25 000 growing 4% for 2 years → 25 000 × 1.04² = 27 040.' },
            { expr: 'Value after n periods of r% depreciation = P × (1 − r/100)ⁿ', note: 'Machinery worth ₹80 000 depreciating 10% a year is worth ₹64 800 after two years.' },
            { expr: 'Different rates each period → multiply the factors', note: 'Up 10% then down 5% then up 20% = P × 1.10 × 0.95 × 1.20.' },
            { expr: 'Present value from a future value = P ÷ (1 + r/100)ⁿ', note: 'Going backwards in time divides; it never subtracts.' },
          ],
        },
        {
          type: 'note',
          title: 'This is compound interest',
          text:
            'The population formula and the compound interest formula are the same equation. If you are comfortable here, compound interest questions are already solved — the only difference is vocabulary and the occasional half-yearly compounding, where you halve the rate and double the number of periods.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'applications',
      heading: 'Marks, elections and people',
      eyebrow: 'Word problems',
      intro:
        'Three question shapes recur so often that recognising them is most of the work. Each has a one-line route to the answer.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Pass marks — one candidate',
              'A candidate scoring m marks fails by f marks, and the pass requirement is p%. Then the pass mark is m + f, and total = (m + f) × 100 / p. Score 178, fail by 22, pass at 40% → pass mark 200, total 500.',
            ],
            [
              'Pass marks — two candidates',
              'One scoring p% fails by m marks; another scoring q% exceeds the pass mark by n. The gap between them is both (q − p)% of the total and (m + n) marks, so total = (m + n) × 100 / (q − p).',
            ],
            [
              'Two-candidate election',
              'If the winner takes x% of the valid votes, the loser takes (100 − x)% and the majority is (2x − 100)% of the valid votes. A 60% winner has a majority of 20% of the valid votes.',
            ],
            [
              'Invalid votes',
              'Read carefully whether a percentage is of total votes polled or of valid votes. If 20% of votes polled are invalid, valid votes are 80% of the poll, and every candidate percentage after that is usually of the valid figure.',
            ],
            [
              'Population by gender or category',
              'Percentages of a whole that must add to 100. If 60% are boys and there are 240 girls, the girls are 40% — so the total is 240 × 100/40 = 600. Always anchor on the group whose count you are given.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'A candidate scoring 30% of the total fails by 30 marks. Another scoring 40% gets 10 marks more than the pass mark. Find the total marks and the pass mark.',
          steps: [
            'The difference in their scores is 40% − 30% = 10% of the total.',
            'In marks that same gap is 30 + 10 = 40 marks.',
            'So 10% of the total = 40, giving a total of 400.',
            'Pass mark = 30% of 400 + 30 = 120 + 30 = 150.',
            'Check: 40% of 400 = 160, which is indeed 10 more than 150.',
          ],
          answer: 'Total marks 400 and pass mark 150.',
        },
      ],
    },

    /* ── 9 ─────────────────────────────────────────────────────── */
    {
      id: 'traps',
      heading: 'Traps that cost marks',
      eyebrow: 'Read this twice',
      intro:
        'Almost every percentage question a well-prepared candidate gets wrong falls into one of these four. None of them is difficult — they are all about reading precisely.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Percentage points are not percent',
              'A rate moving from 5% to 7% has risen by 2 percentage points, but by 40% in relative terms. If a question says "increased by 2%", that is relative; "increased by 2 percentage points" is absolute. Data interpretation sets exploit this constantly.',
            ],
            [
              'The base silently changes',
              '"20% of the boys" and "20% of the class" are different quantities. Underline the noun that follows "of" before you compute anything — it names the base, and the base is what the whole answer hangs on.',
            ],
            [
              'Reversing a change by the same percentage',
              'Adding 10% then removing 10% does not return you to the start; it leaves you 1% short. To undo an x% increase you must remove [x/(100 + x)] × 100 %.',
            ],
            [
              'Averaging percentages directly',
              'You cannot average 40% and 60% to get 50% unless both refer to groups of equal size. With 20 students at 40% and 80 students at 60%, the combined figure is (8 + 48)/100 = 56%. Always weight by the group sizes.',
            ],
          ],
        },
      ],
    },
  ],

  /* ── Worked examples ────────────────────────────────────────── */
  examples: [
    {
      q: 'If 40% of a number is 240, what is 65% of the same number?',
      steps: ['40% of N = 240, so N = 240 × 100/40 = 600.', '65% of 600 = 0.65 × 600'],
      answer: '390.',
    },
    {
      q: "A's salary is 20% less than B's. By what percentage is B's salary more than A's?",
      steps: [
        '20% is 1/5, so A is 1/5 less than B — take A = 4 parts and B = 5 parts.',
        'B exceeds A by 1 part out of A\'s 4.',
        'That is 1/4 = 25%. (Formula check: 20/(100 − 20) × 100 = 25.)',
      ],
      answer: "B's salary is 25% more than A's.",
    },
    {
      q: 'A number is increased by 30% and the result is then decreased by 30%. What is the net change?',
      steps: ['a = +30 and b = −30.', 'Net = 30 − 30 + (30 × −30)/100', 'Net = −900/100'],
      answer: 'A 9% decrease.',
    },
    {
      q: 'In an election between two candidates, the winner secured 60% of the valid votes and won by 1 200 votes. How many valid votes were cast?',
      steps: [
        'The loser got 40%, so the majority is 60% − 40% = 20% of the valid votes.',
        '20% of the valid votes = 1 200',
        'Valid votes = 1 200 × 100/20',
      ],
      answer: '6 000 valid votes.',
    },
    {
      q: 'A student must score 40% to pass. He scores 178 marks and fails by 22 marks. What are the maximum marks?',
      steps: ['The pass mark is 178 + 22 = 200.', '200 is 40% of the total.', 'Total = 200 × 100/40'],
      answer: '500 marks.',
    },
    {
      q: 'The population of a town is 25 000 and grows at 4% per annum. What will it be after 2 years?',
      steps: ['Apply the factor twice: 25 000 × 1.04 × 1.04', '1.04² = 1.0816', '25 000 × 1.0816'],
      answer: '27 040.',
    },
    {
      q: 'In a class of 60 students, 40% are girls. If 6 more girls join, what percentage of the class is then girls?',
      steps: [
        'Girls now = 40% of 60 = 24.',
        'After 6 join: girls = 30 and the class = 66.',
        '30/66 = 5/11',
        '5/11 as a percentage = 45.45%',
      ],
      answer: 'About 45.45% (exactly 45 5/11 %).',
    },
    {
      q: 'Two successive discounts of 20% and 10% are offered. What single discount is equivalent?',
      steps: [
        'Both are decreases: a = −20, b = −10.',
        'Net = −20 − 10 + (−20 × −10)/100',
        'Net = −30 + 2',
        'Check: 100 → 80 → 72, so 28 is lost.',
      ],
      answer: 'A single discount of 28%.',
    },
    {
      q: 'The price of an article after a 25% increase is ₹500. What was the original price?',
      steps: [
        'The new price is the original × 1.25.',
        'Original = 500 ÷ 1.25',
        'Note that subtracting 25% from 500 would wrongly give ₹375.',
      ],
      answer: '₹400.',
    },
    {
      q: 'A group of 20 students averaged 40% in a test and another group of 80 students averaged 60%. What is the combined percentage?',
      steps: [
        'Weight by group size, never average the percentages.',
        'Group 1 contributes 20 × 40% = 8 "student-percent" units of 100.',
        'Group 2 contributes 80 × 60% = 48.',
        'Combined = (8 + 48)/100',
      ],
      answer: '56%, not 50%.',
    },
  ],

  /* ── Practice ───────────────────────────────────────────────── */
  practice: [
    {
      q: 'What is 35% of 480?',
      options: ['158', '168', '172', '164'],
      answer: 1,
      explain: '35% = 7/20, so 480 × 7/20 = 24 × 7 = 168.',
    },
    {
      q: 'If 15% of x is 45, what is x?',
      options: ['250', '350', '300', '450'],
      answer: 2,
      explain: 'x = 45 × 100/15 = 300. Check: 15% of 300 = 45.',
    },
    {
      q: 'A number is increased by 30% and then decreased by 30%. The net change is:',
      options: ['9% decrease', 'No change', '9% increase', '6% decrease'],
      answer: 0,
      explain: 'Net = 30 − 30 + (30 × −30)/100 = −9. An equal rise and fall always leaves a loss of x²/100.',
    },
    {
      q: 'If A is 20% more than B, then B is less than A by:',
      options: ['20%', '25%', '16.67%', '18%'],
      answer: 2,
      explain: '20% is 1/5, so the reverse is 1/6 = 16.67%. Formula check: 20/(100 + 20) × 100 = 16.67.',
    },
    {
      q: 'The price of sugar falls by 20%. By what percentage can consumption rise while spending stays the same?',
      options: ['20%', '30%', '16.67%', '25%'],
      answer: 3,
      explain: '20% less is 1/5, so the reverse is 1/4 = 25%. Formula: 20/(100 − 20) × 100 = 25.',
    },
    {
      q: 'In a two-candidate election the winner took 55% of the valid votes and won by 900 votes. How many valid votes were cast?',
      options: ['9 000', '18 000', '4 500', '12 000'],
      answer: 0,
      explain: 'The majority is 55% − 45% = 10% of the valid votes. So 10% = 900 and the total is 9 000.',
    },
    {
      q: 'Two successive discounts of 20% and 10% are equivalent to a single discount of:',
      options: ['30%', '25%', '32%', '28%'],
      answer: 3,
      explain: 'Net = −20 − 10 + (−20 × −10)/100 = −28. Check: 100 → 80 → 72.',
    },
    {
      q: "A's income is 25% more than B's. B's income is what percentage of A's?",
      options: ['75%', '80%', '85%', '90%'],
      answer: 1,
      explain: 'A : B = 5 : 4, so B is 4/5 of A = 80%. (B is therefore 20% less than A.)',
    },
    {
      q: 'If 60% of the students in a school are boys and there are 240 girls, how many students are there in all?',
      options: ['400', '600', '480', '540'],
      answer: 1,
      explain: 'Girls are 100% − 60% = 40% of the school. So the total is 240 × 100/40 = 600.',
    },
    {
      q: 'A town of 8 000 people grows at 5% per annum. Its population after 2 years is:',
      options: ['8 800', '8 820', '8 400', '9 000'],
      answer: 1,
      explain: '8 000 × 1.05² = 8 000 × 1.1025 = 8 820. Simply adding 10% would wrongly give 8 800.',
    },
    {
      q: 'A student scored 30% of the total and failed by 45 marks. If the pass mark is 210, the maximum marks are:',
      options: ['500', '600', '550', '650'],
      answer: 2,
      explain: 'The student scored 210 − 45 = 165, which is 30% of the total. Total = 165 × 100/30 = 550.',
    },
    {
      q: 'If the length of a rectangle rises 20% and the breadth falls 20%, the area changes by:',
      options: ['4% decrease', 'No change', '2% decrease', '4% increase'],
      answer: 0,
      explain: 'Area is length × breadth, so the successive rule applies: 20 − 20 − 400/100 = −4%.',
    },
    {
      q: 'What is 25% of 25% of 800?',
      options: ['100', '200', '25', '50'],
      answer: 3,
      explain: '25% of 800 = 200, and 25% of 200 = 50. (Equivalently 800 × 1/4 × 1/4 = 50.)',
    },
    {
      q: 'A salary is raised 20% and then raised 20% again. The overall increase is:',
      options: ['40%', '42%', '44%', '48%'],
      answer: 2,
      explain: 'Net = 20 + 20 + (20 × 20)/100 = 44%. Check with factors: 1.2 × 1.2 = 1.44.',
    },
    {
      q: 'What percentage of 2 hours is 18 minutes?',
      options: ['15%', '18%', '12%', '9%'],
      answer: 0,
      explain: 'Convert to one unit first: 2 hours = 120 minutes. Then (18/120) × 100 = 15%.',
    },
    {
      q: 'After a 25% increase an article costs ₹500. Its original price was:',
      options: ['₹375', '₹425', '₹450', '₹400'],
      answer: 3,
      explain: 'Divide by the factor: 500 ÷ 1.25 = ₹400. Subtracting 25% from 500 gives ₹375, which is the trap.',
    },
  ],

  /* ── FAQs ───────────────────────────────────────────────────── */
  faqs: [
    {
      q: 'What is the formula for percentage?',
      a: 'A percentage is a fraction out of 100. To express one quantity as a percentage of another, use (part ÷ whole) × 100. To find a percentage of a quantity, use (rate ÷ 100) × quantity. Both come from the same definition: x% simply means x/100.',
    },
    {
      q: 'Why is a 20% increase followed by a 20% decrease not a return to the original value?',
      a: 'Because the two changes act on different bases. The increase is 20% of the original, but the decrease is 20% of the larger, already-increased value, so more is taken away than was added. The net effect is always a loss of x²/100 percent — here 4%.',
    },
    {
      q: 'If A is 25% more than B, by how much is B less than A?',
      a: '20%. Treat 25% as the fraction 1/4, so A : B = 5 : 4. B falls short of A by 1 part out of A\'s 5, which is 20%. The general rule is that "1/n more" reverses to "1/(n + 1) less".',
    },
    {
      q: 'What is the difference between percentage and percentage points?',
      a: 'Percentage points measure an absolute gap between two percentages; percent measures a relative change. A rate moving from 5% to 7% has risen by 2 percentage points, but by 40% relative to where it started. Exams — especially data interpretation — test this distinction deliberately.',
    },
    {
      q: 'What is the shortcut for successive percentage changes?',
      a: 'Use a + b + ab/100, keeping the signs of a and b. So +20% then +30% gives 20 + 30 + 6 = 56%, and +10% then −10% gives 10 − 10 − 1 = −1%. For three or more changes, apply the rule to the first two and then combine the result with the next.',
    },
    {
      q: 'Which fraction-to-percentage values should I memorise?',
      a: 'At minimum every unit fraction from 1/2 down to 1/20, plus 1/25, 1/40 and 1/50. Knowing that 12.5% is 1/8 or that 16.67% is 1/6 lets you divide rather than multiply, which is far faster and much less error-prone under time pressure.',
    },
    {
      q: 'How do I find the original value after a percentage change?',
      a: 'Divide by the multiplying factor. If a price rose 25% to reach ₹500, the original is 500 ÷ 1.25 = ₹400. Subtracting the same percentage from the new value is the most common error here and would give ₹375.',
    },
    {
      q: 'Can I average two percentages together?',
      a: 'Only when both refer to groups of the same size. Otherwise you must weight each percentage by its group size. Twenty students at 40% and eighty at 60% combine to 56%, not 50%.',
    },
    {
      q: 'How important is Percentages for SSC and banking exams?',
      a: 'It is the highest-leverage arithmetic topic there is. Expect roughly three to six direct questions, but its real weight is much larger, because profit and loss, discount, simple and compound interest, and most data interpretation sets are percentage calculations underneath. Speed here raises your score across the entire section.',
    },
    {
      q: 'What is the fastest way to improve at percentage questions?',
      a: 'Three things, in order: memorise the fraction table until recall is instant, switch from "find the change then add it" to multiplying factors, and learn the 1/n to 1/(n+1) reversal rule. Together they remove most of the written working from a typical question.',
    },
  ],

  related: [
    { label: 'Number System', to: '/study-material/quantitative-aptitude/number-system/' },
    { label: 'Profit & Loss', to: '/study-material/quantitative-aptitude/profit-loss/' },
    { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
    { label: 'Time & Work', to: '/study-material/quantitative-aptitude/time-work/' },
    { label: 'Time, Speed & Distance', to: '/study-material/quantitative-aptitude/time-speed-distance/' },
    { label: 'All Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
  ],
}
