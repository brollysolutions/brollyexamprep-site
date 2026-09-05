/**
 * Series — /study-material/reasoning/series/
 *
 * Covers the whole family under one roof: number series and wrong-number
 * series (which sit in the quant section in banking but in reasoning almost
 * everywhere else), letter and alphabet series, and the alphanumeric series
 * block that is purely a banking reasoning shape. The organising idea is the
 * fixed order of checks in the first section — differences, then ratios, then
 * powers, then alternation.
 */
export default {
  subject: 'reasoning',
  subjectName: 'Reasoning',
  slug: 'series',
  title: 'Series',
  seoTitle: 'Number and Alphabet Series for Competitive Exams | Types, Tricks & Practice',
  metaDescription:
    'Complete Series study material for SSC, banking and railway exams — number series types, wrong number series, letter and alphabet series, alphanumeric series for bank exams and mixed alternating series, with solved examples and practice questions.',
  readMinutes: 18,
  lead: [
    'Series questions are pure pattern recognition under a clock, which makes them the most trainable topic in the paper. There is no theory to learn — only a fixed order of checks that you run until something fits, and enough familiarity with squares, cubes and the alphabet that the fit is obvious rather than discovered.',
    'One organisational note before you start. In banking papers, number series lives in the quantitative section while alphanumeric series lives in reasoning; in SSC and railway papers both sit under general intelligence. They are the same skill, so this page treats them together.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–5 questions', note: 'Missing-number and alphanumeric series, plus a separate number series in the quant section.' },
    { exam: 'Banking Prelims (IBPS / SBI)', count: '3–5 questions', note: 'Alphanumeric series in reasoning; number and wrong-number series in the quant section.' },
    { exam: 'Banking Mains', count: '3–5 questions', note: 'Wrong-number series and harder two-level patterns.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'Straight number and alphabet series — among the fastest marks in the paper.' },
    { exam: 'CTET / Teaching exams', count: '1–2 questions', note: 'Simple arithmetic and letter series.' },
  ],

  contents: [
    { icon: 'target', title: 'The order of checks', sub: 'What to try, and in what order', href: '#method' },
    { icon: 'chart', title: 'Number series types', sub: 'Every pattern examiners use', href: '#number-types' },
    { icon: 'layers', title: 'Two-level and mixed patterns', sub: 'When the differences form their own series', href: '#two-level' },
    { icon: 'bell', title: 'Wrong number series', sub: 'Finding the term that does not belong', href: '#wrong' },
    { icon: 'book', title: 'Letter and alphabet series', sub: 'Positions, gaps and paired letters', href: '#letter' },
    { icon: 'globe', title: 'Alphanumeric series', sub: 'The banking counting block', href: '#alphanumeric' },
    { icon: 'refresh', title: 'The numbers worth memorising', sub: 'Squares, cubes and primes', href: '#tables' },
    { icon: 'clock', title: 'Where marks are lost', sub: 'Time limits and false patterns', href: '#mistakes' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'The order of checks',
      eyebrow: 'Start here',
      intro:
        'Do not stare at a series looking for inspiration. Run this list in order — it takes about twenty seconds end to end and it catches almost every pattern an exam uses.',
      blocks: [
        {
          type: 'formula',
          title: 'Run these in order',
          items: [
            { expr: '1. Write the differences underneath', note: 'Always the first move, without exception. If the differences are constant you are done in five seconds; if not, you now have a second series to look at.' },
            { expr: '2. Take the differences of those differences', note: 'A constant second difference means the pattern is quadratic — the differences themselves form an arithmetic series, as in 2, 5, 11, 20, 32 where the gaps run 3, 6, 9, 12.' },
            { expr: '3. Check the ratios', note: 'Divide each term by the previous one. A constant ratio is a geometric series; a ratio that creeps up — roughly 2, then 2.2, then 2.1 — suggests "multiply and add".' },
            { expr: '4. Compare against squares and cubes', note: 'If a term is near 121, 144, 169 or near 125, 216, 343, test n² or n³ with a small offset. This is why the tables further down are worth memorising.' },
            { expr: '5. Try alternate terms', note: 'Read the 1st, 3rd and 5th terms as one series and the 2nd, 4th and 6th as another. Two interleaved series look like nonsense until you split them.' },
          ],
        },
        {
          type: 'note',
          title: 'The length of the series tells you something',
          text:
            'A series of four or five terms is almost always a simple rule — differences, ratios or powers. A series of seven or eight terms is usually two interleaved series, because the examiner needs enough terms for each half to be recognisable. Count the terms before you start and you will know which check to run first.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'number-types',
      heading: 'Number series types',
      eyebrow: 'The catalogue',
      intro:
        'Every number series in an Indian competitive exam is one of these, or two of them interleaved. Read the examples until the shapes are familiar rather than memorising the names.',
      blocks: [
        {
          type: 'table',
          caption: 'The patterns examiners actually use',
          head: ['Type', 'Example', 'How to spot it'],
          rows: [
            ['Arithmetic', '5, 10, 15, 20, 25', 'Constant difference. The differences row is flat.'],
            ['Geometric', '3, 6, 12, 24, 48', 'Constant ratio. Each term divides cleanly into the next.'],
            ['Multiply and add', '3, 7, 15, 31, 63', 'Each term is ×2 + 1. Ratios hover just under the multiplier.'],
            ['Increasing multiplier', '2, 4, 12, 48, 240', 'Multiplied by 2, then 3, then 4, then 5.'],
            ['Increasing operator', '5, 11, 24, 51, 106', 'Each term is ×2 and then +1, +2, +3, +4 in turn.'],
            ['Square-based', '2, 5, 10, 17, 26', 'Each term is n² + 1 for n = 1, 2, 3, 4, 5.'],
            ['Cube-based', '9, 28, 65, 126', 'Each term is n³ + 1 for n = 2, 3, 4, 5.'],
            ['Product of consecutives', '2, 6, 12, 20, 30, 42', 'Each term is n(n + 1). Differences rise by two each time.'],
            ['Power series', '1, 4, 27, 256, 3125', 'Each term is n to its own power: 1¹, 2², 3³, 4⁴, 5⁵.'],
            ['Fibonacci-type', '2, 3, 5, 8, 13, 21', 'Each term is the sum of the previous two.'],
            ['Prime-based', '2, 3, 5, 7, 11, 13', 'Or primes with an offset, such as 4, 5, 7, 9, 13.'],
            ['Alternating', '1, 4, 3, 9, 5, 16, 7', 'Odd positions form one series, even positions another.'],
          ],
        },
        {
          type: 'note',
          title: 'Two rules can produce the same first three terms',
          text:
            'The sequence 3, 7, 15 fits "×2 + 1" and also fits "add 4, add 8, add 16". They agree all the way to 63 and would only diverge later. That is fine — when two rules agree on every term you are given, either one produces the correct answer. What is not fine is testing a rule on two terms and applying it to the fourth.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'two-level',
      heading: 'Two-level and mixed patterns',
      eyebrow: 'Where the harder questions live',
      intro:
        'When the differences are not constant, they are usually a series in their own right. That is the whole of the "difficult" half of this topic.',
      blocks: [
        {
          type: 'example',
          q: 'Find the next term: 2, 5, 11, 20, 32, ?',
          steps: [
            'Differences: 3, 6, 9, 12.',
            'Those differences are themselves arithmetic, rising by 3 each time.',
            'The next difference is 15.',
            '32 + 15.',
          ],
          answer: '47.',
        },
        {
          type: 'example',
          q: 'Find the next term: 5, 11, 24, 51, ?',
          steps: [
            'Differences are 6, 13, 27 — not obviously patterned, so check ratios instead: roughly 2.2, 2.18, 2.13.',
            'Close to 2, so test "multiply by 2 and add something": 5 × 2 + 1 = 11, and 11 × 2 + 2 = 24.',
            'Confirm on the next: 24 × 2 + 3 = 51. The added number climbs by one each step.',
            '51 × 2 + 4.',
          ],
          answer: '106.',
        },
        {
          type: 'defs',
          items: [
            [
              'Alternating series',
              'Split the terms by position. In 1, 4, 3, 9, 5, 16, 7, the odd positions run 1, 3, 5, 7 and the even positions run 4, 9, 16 — that is 2², 3², 4², so the next even-position term is 25.',
            ],
            [
              'Difference series that is geometric',
              'In 3, 7, 15, 31, 63 the differences are 4, 8, 16, 32 — doubling. This is the same series as "×2 + 1", seen from the other side.',
            ],
            [
              'Series with a division step',
              'Some series shrink: 720, 120, 24, 6, 2 divides by 6, then 5, then 4, then 3. Whenever terms fall, check divisors before anything else.',
            ],
            [
              'Series built on a moving operator',
              'Terms such as +2, ×2, +4, ×4 alternate two operations. Suspect this when the differences alternate between small and large.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'wrong',
      heading: 'Wrong number series',
      eyebrow: 'Banking favourite',
      intro:
        'A complete series is given with one term replaced by an incorrect one, and you must name the intruder. The method is the same as before, with one extra habit.',
      blocks: [
        {
          type: 'formula',
          title: 'How to find the odd term out',
          items: [
            { expr: 'Establish the pattern from the first three terms', note: 'They are almost never the wrong one — examiners plant the error in the middle or near the end so that a candidate reading forwards commits to the right rule first.' },
            { expr: 'Then walk forwards and stop at the first break', note: 'The first term that fails the rule is the answer, provided every later term fits once you resume from the corrected value.' },
            { expr: 'If two terms seem to break, your rule is wrong', note: 'Exactly one term is incorrect. Two failures means you fitted a pattern to the wrong pair of terms — go back and re-derive it.' },
            { expr: 'State what the term should have been', note: 'It is the cheapest possible check. If you cannot name the correct replacement, you have not really found the pattern.' },
          ],
        },
        {
          type: 'example',
          q: 'Find the wrong number: 8, 27, 64, 125, 216, 343, 500',
          steps: [
            'The first terms are 2³, 3³ and 4³, so the rule is consecutive cubes.',
            'Continuing: 5³ = 125 and 6³ = 216 and 7³ = 343 all fit.',
            'The next should be 8³ = 512.',
          ],
          answer: '500 is wrong; it should be 512.',
        },
        {
          type: 'example',
          q: 'Find the wrong number: 5, 10, 17, 26, 37, 50, 64',
          steps: [
            'Differences: 5, 7, 9, 11, 13, 14 — the last one breaks a clean odd-number run.',
            'Check against squares: 5 = 2² + 1, 10 = 3² + 1, 17 = 4² + 1, 26 = 5² + 1, 37 = 6² + 1, 50 = 7² + 1.',
            'So the last term should be 8² + 1.',
          ],
          answer: '64 is wrong; it should be 65.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'letter',
      heading: 'Letter and alphabet series',
      eyebrow: 'Number series in disguise',
      intro:
        'Convert every letter to its alphabet position and you are back to a number series. That single move solves the entire type.',
      blocks: [
        {
          type: 'formula',
          title: 'The conversions you need',
          items: [
            { expr: 'Write the position under each letter before you look for anything', note: 'A, C, F, J, O becomes 1, 3, 6, 10, 15 — and the differences 2, 3, 4, 5 are then unmissable.' },
            { expr: 'EJOTY: E = 5, J = 10, O = 15, T = 20, Y = 25', note: 'Anchors that let you convert in either direction without counting from A.' },
            { expr: 'Paired letters usually move in opposite directions', note: 'In AZ, BY, CX, DW the first letters climb and the second letters fall — and each pair sums to 27.' },
            { expr: 'Wrap past Z back to A', note: 'A gap that runs off the end of the alphabet continues from the beginning, exactly as in coding-decoding.' },
            { expr: 'Watch for a repeated-letter block', note: 'Series such as AB, DE, GH, JK move in blocks of three positions; convert the first letter of each block and treat the rest as decoration.' },
          ],
        },
        {
          type: 'example',
          q: 'Find the next term: A, C, F, J, O, ?',
          steps: [
            'Positions: 1, 3, 6, 10, 15.',
            'Differences: 2, 3, 4, 5 — rising by one.',
            'The next gap is 6, so the position is 15 + 6 = 21.',
            'The 21st letter is U.',
          ],
          answer: 'U.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'alphanumeric',
      heading: 'Alphanumeric series',
      eyebrow: 'Pure banking reasoning',
      intro:
        'A single line mixing letters, digits and symbols is given, followed by four or five counting questions. There is no pattern to find — the whole skill is careful reading, and that is precisely why candidates lose marks here.',
      blocks: [
        {
          type: 'formula',
          title: 'How to work the block',
          items: [
            { expr: 'Number every position before reading any question', note: 'Write 1, 2, 3 … under the elements. Every question then becomes arithmetic on those numbers instead of finger-counting across the line.' },
            { expr: '"nth to the right of the mth from the left" is position m + n from the left', note: 'The fifth to the right of the seventh from the left is position 12. The same works mirrored from the right end.' },
            { expr: '"Immediately preceded by" means the element just before it', note: 'Preceded looks left, followed looks right. Reversing these two words is the most common single error in the topic.' },
            { expr: 'Handle "how many X are preceded by Y and followed by Z" as a scan', note: 'Go along the line once, testing each X against both conditions. Do not try to hold the answer in your head — tally it in the margin.' },
            { expr: 'First and last elements can never satisfy both conditions', note: 'The first has nothing before it and the last nothing after it, so cross them out at the start of any two-sided condition.' },
          ],
        },
        {
          type: 'example',
          q: 'In the sequence 4 P $ 7 B 2 % K 9 M # 5 R A 3, how many digits are immediately preceded by a letter and immediately followed by a symbol?',
          steps: [
            'Number the positions 1 to 15. The digits sit at positions 1, 4, 6, 9, 12 and 15.',
            'Position 1 has nothing before it and position 15 nothing after it, so both are out.',
            'Position 4 is preceded by the symbol $, so it fails. Position 12 is preceded by the symbol #, so it fails.',
            'Position 9 is preceded by K but followed by M, a letter, so it fails.',
            'Position 6 is preceded by B and followed by %, satisfying both conditions.',
          ],
          answer: 'One — the digit 2.',
        },
        {
          type: 'note',
          title: 'These are the fastest marks in a banking reasoning paper',
          text:
            'An alphanumeric block of five questions can be finished in ninety seconds once the positions are numbered, against roughly four minutes for a puzzle set worth the same five marks. If you take nothing else from this page into the exam hall, take the habit of attempting this block first.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'tables',
      heading: 'The numbers worth memorising',
      eyebrow: 'Recall, not reasoning',
      intro:
        'Recognising 361 as 19² instantly is the difference between a ten-second question and a ninety-second one. There is no shortcut for this — it is recall.',
      blocks: [
        {
          type: 'table',
          caption: 'Squares, cubes and primes to have on instant recall',
          head: ['Range', 'What to know', 'Why it matters'],
          rows: [
            ['Squares 1–30', '… 121, 144, 169, 196, 225, 256, 289, 324, 361, 400 …', 'Square-based series stay under 900 in almost every paper.'],
            ['Cubes 1–15', '1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331 …', 'Cube series are common and the gaps grow fast, so recognition is everything.'],
            ['Primes under 50', '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47', 'Prime series and prime-with-offset series appear in SSC papers.'],
            ['Factorials to 6', '1, 2, 6, 24, 120, 720', 'A falling series that divides by 6, 5, 4, 3 is a factorial read backwards.'],
            ['Powers of 2 and 3', '2, 4, 8, 16, 32, 64, 128 · 3, 9, 27, 81, 243', 'Geometric series almost always use one of these two bases.'],
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
        'Series is a topic where the wrong answers are cheap to avoid, because almost all of them come from the same three habits.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Testing a rule on two terms',
              'Any two numbers fit some rule. Confirm on at least three consecutive terms — including the last one given — before you compute the answer.',
            ],
            [
              'Not writing the differences down',
              'Candidates try to hold the difference row in their heads to save four seconds, and then lose forty reconstructing it. Write it under the series every single time.',
            ],
            [
              'Spending more than a minute',
              'If no pattern has appeared in sixty seconds, mark the question and move on. Series questions are all worth the same, and the next one is often trivial.',
            ],
            [
              'Confusing "preceded" and "followed"',
              'In alphanumeric blocks this single confusion can cost four of the five marks in the set, because the same misreading applies to every question in it. Underline the two words in the first question you read.',
            ],
            [
              'Answering the wrong end of the series',
              'Some questions ask for the missing middle term, not the next one. Check which position the question mark occupies before you compute anything.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Find the next term: 3, 7, 15, 31, 63, ?',
      steps: [
        'Differences: 4, 8, 16, 32 — doubling.',
        'The next difference is 64.',
        'Equivalently, each term is the previous one × 2 + 1, and 63 × 2 + 1 gives the same result.',
      ],
      answer: '127.',
    },
    {
      q: 'Find the next term: 2, 5, 11, 20, 32, ?',
      steps: ['Differences: 3, 6, 9, 12 — arithmetic, rising by 3.', 'The next difference is 15.', '32 + 15.'],
      answer: '47.',
    },
    {
      q: 'Find the next term: 5, 11, 24, 51, ?',
      steps: [
        'Ratios sit just above 2, so test "×2 and add".',
        '5 × 2 + 1 = 11, 11 × 2 + 2 = 24, 24 × 2 + 3 = 51. The addend climbs by one.',
        '51 × 2 + 4.',
      ],
      answer: '106.',
    },
    {
      q: 'Find the next term: 1, 4, 27, 256, ?',
      steps: ['1 = 1¹, 4 = 2², 27 = 3³, 256 = 4⁴.', 'Each term is n raised to its own power.', 'The next is 5⁵.'],
      answer: '3125.',
    },
    {
      q: 'Find the missing term: 2, 6, 12, 20, 30, ?, 56',
      steps: [
        'Differences: 4, 6, 8, 10 — rising by two.',
        'The next difference is 12, giving 42, and the one after that is 14, giving 56 — which matches the last given term.',
        'Equivalently each term is n(n + 1): 1×2, 2×3, 3×4, 4×5, 5×6, 6×7, 7×8.',
      ],
      answer: '42.',
    },
    {
      q: 'Find the wrong number: 8, 27, 64, 125, 216, 343, 500',
      steps: ['The opening terms are 2³, 3³ and 4³.', '125, 216 and 343 continue the cubes correctly.', 'The eighth cube is 512.'],
      answer: '500 is wrong; it should be 512.',
    },
    {
      q: 'Find the wrong number: 5, 10, 17, 26, 37, 50, 64',
      steps: [
        'Differences are 5, 7, 9, 11, 13 and then 14, which breaks the run of odd numbers.',
        'Test against squares: each term is n² + 1 for n = 2, 3, 4, 5, 6, 7.',
        'The next should be 8² + 1.',
      ],
      answer: '64 is wrong; it should be 65.',
    },
    {
      q: 'Find the next term: A, C, F, J, O, ?',
      steps: ['Positions: 1, 3, 6, 10, 15.', 'Differences: 2, 3, 4, 5.', 'The next gap is 6, giving position 21.'],
      answer: 'U.',
    },
    {
      q: 'Find the next term: AZ, BY, CX, DW, ?',
      steps: [
        'First letters: A, B, C, D — climbing by one, so the next is E.',
        'Second letters: Z, Y, X, W — falling by one, so the next is V.',
        'Each pair also sums to 27, which confirms it: E is 5 and V is 22.',
      ],
      answer: 'EV.',
    },
    {
      q: 'In the sequence 4 P $ 7 B 2 % K 9 M # 5 R A 3, how many digits are immediately preceded by a letter and immediately followed by a symbol?',
      steps: [
        'Number the fifteen positions. Digits sit at 1, 4, 6, 9, 12 and 15.',
        'Positions 1 and 15 are at the ends, so neither can meet a two-sided condition.',
        'Positions 4 and 12 are preceded by symbols, and position 9 is followed by a letter.',
        'Position 6 has B before it and % after it.',
      ],
      answer: 'One.',
    },
  ],

  practice: [
    {
      q: 'Find the next term: 3, 7, 15, 31, 63, ?',
      options: ['125', '127', '129', '121'],
      answer: 1,
      explain: 'The differences double — 4, 8, 16, 32, 64 — so the next term is 63 + 64 = 127. Equivalently each term is ×2 + 1.',
    },
    {
      q: 'Find the next term: 2, 5, 11, 20, 32, ?',
      options: ['47', '44', '45', '49'],
      answer: 0,
      explain: 'The differences 3, 6, 9, 12 rise by three, so the next is 15 and the term is 32 + 15 = 47.',
    },
    {
      q: 'Find the next term: 5, 11, 24, 51, ?',
      options: ['104', '105', '106', '108'],
      answer: 2,
      explain: 'Each term is the previous one doubled plus a climbing addend: ×2 + 1, ×2 + 2, ×2 + 3, so next is 51 × 2 + 4 = 106.',
    },
    {
      q: 'Find the next term: 1, 4, 27, 256, ?',
      options: ['3125', '625', '1024', '3025'],
      answer: 0,
      explain: 'Each term is n raised to its own power: 1¹, 2², 3³, 4⁴, so the next is 5⁵ = 3125.',
    },
    {
      q: 'Find the next term: 3, 6, 12, 24, ?',
      options: ['36', '42', '30', '48'],
      answer: 3,
      explain: 'A geometric series with ratio 2, so the next term is 24 × 2 = 48.',
    },
    {
      q: 'Find the missing term: 2, 6, 12, 20, 30, ?, 56',
      options: ['40', '42', '44', '46'],
      answer: 1,
      explain: 'Each term is n(n + 1) — 1×2, 2×3, 3×4 and so on — so the sixth term is 6 × 7 = 42, and 7 × 8 = 56 confirms it.',
    },
    {
      q: 'Find the wrong number: 8, 27, 64, 125, 216, 343, 500',
      options: ['216', '343', '125', '500'],
      answer: 3,
      explain: 'These are consecutive cubes from 2³, so the last term should be 8³ = 512, not 500.',
    },
    {
      q: 'Find the wrong number: 4, 9, 19, 39, 79, 160',
      options: ['19', '39', '79', '160'],
      answer: 3,
      explain: 'Each term is the previous one doubled plus one: 4, 9, 19, 39, 79 and then 159, not 160.',
    },
    {
      q: 'Find the wrong number: 5, 10, 17, 26, 37, 50, 64',
      options: ['37', '50', '26', '64'],
      answer: 3,
      explain: 'Each term is n² + 1 for n = 2, 3, 4, 5, 6, 7, so the last should be 8² + 1 = 65.',
    },
    {
      q: 'Find the next term: A, C, F, J, O, ?',
      options: ['T', 'U', 'V', 'S'],
      answer: 1,
      explain: 'The positions 1, 3, 6, 10, 15 rise by 2, 3, 4, 5, so the next gap is 6 and the position is 21 — the letter U.',
    },
    {
      q: 'Find the next term: AZ, BY, CX, DW, ?',
      options: ['EV', 'FU', 'EU', 'FV'],
      answer: 0,
      explain: 'The first letters climb A, B, C, D, E and the second letters fall Z, Y, X, W, V. Each pair also sums to 27.',
    },
    {
      q: 'Find the next term: B, D, G, K, ?',
      options: ['N', 'O', 'P', 'Q'],
      answer: 2,
      explain: 'Positions 2, 4, 7, 11 rise by 2, 3, 4, so the next gap is 5 and the position is 16 — the letter P.',
    },
    {
      q: 'Find the next term: 1, 4, 3, 9, 5, 16, 7, ?',
      options: ['9', '36', '21', '25'],
      answer: 3,
      explain: 'Two interleaved series: odd positions run 1, 3, 5, 7 and even positions run 2², 3², 4², so the next even-position term is 5² = 25.',
    },
    {
      q: 'Find the next term: 2, 3, 5, 8, 13, ?',
      options: ['18', '20', '21', '22'],
      answer: 2,
      explain: 'Each term is the sum of the two before it, so the next is 8 + 13 = 21.',
    },
    {
      q: 'In the sequence 4 P $ 7 B 2 % K 9 M # 5 R A 3, how many digits are immediately preceded by a letter and immediately followed by a symbol?',
      options: ['None', 'One', 'Two', 'Three'],
      answer: 1,
      explain: 'Only the digit 2 qualifies — it has B before it and % after it. The digits at the two ends cannot meet a two-sided condition at all.',
    },
    {
      q: 'In that same sequence, which element is fifth to the right of the seventh from the left end?',
      options: ['M', '#', '5', 'R'],
      answer: 2,
      explain: 'The seventh from the left is %, at position 7. Five to its right is position 12, which holds the digit 5.',
    },
  ],

  faqs: [
    {
      q: 'How do I solve number series questions quickly?',
      a: 'Run a fixed order of checks rather than searching for inspiration. Write the differences underneath; if they are not constant, take their differences; then check the ratios; then compare terms against squares and cubes; and finally try reading alternate terms as two separate series. The whole routine takes about twenty seconds.',
    },
    {
      q: 'What are the main types of number series?',
      a: 'Arithmetic and geometric series, multiply-and-add patterns, series with an increasing multiplier or addend, square- and cube-based series, products of consecutive numbers, power series such as 1¹, 2², 3³, Fibonacci-type sums, prime-based series and alternating series where odd and even positions follow different rules.',
    },
    {
      q: 'How do I find the wrong number in a series?',
      a: 'Establish the pattern from the first three terms — the error is almost always planted later — then walk forwards and stop at the first term that breaks it. If two terms seem to break the rule, your rule is wrong rather than the series, because exactly one term is incorrect. Always name what the term should have been as a check.',
    },
    {
      q: 'How do I solve letter and alphabet series?',
      a: 'Write the alphabet position under each letter and the problem becomes an ordinary number series. A, C, F, J, O turns into 1, 3, 6, 10, 15, and the differences 2, 3, 4, 5 make the next term obvious. Use the EJOTY anchors to convert quickly in both directions.',
    },
    {
      q: 'What is alphanumeric series in bank exams?',
      a: 'A single line of letters, digits and symbols, followed by four or five counting questions — how many digits are preceded by a letter, which element is fifth to the right of the seventh from the left, and so on. There is no pattern to discover; the skill is numbering the positions first and reading the conditions exactly.',
    },
    {
      q: 'What does "nth to the right of the mth from the left" mean?',
      a: 'Simply position m + n from the left. The fifth to the right of the seventh from the left is position 12. The mirrored phrase works the same way from the right end, so convert it into a single position number and stop counting on your fingers.',
    },
    {
      q: 'What is the difference between "preceded by" and "followed by"?',
      a: 'Preceded by refers to the element immediately before, and followed by to the element immediately after. Reversing them is the most expensive error in alphanumeric series, because the same misreading usually applies to every question in the block.',
    },
    {
      q: 'Which numbers should I memorise for series questions?',
      a: 'Squares to 30, cubes to 15, primes under 50, factorials to 720 and the powers of 2 and 3. Recognising 361 as 19² or 343 as 7³ instantly is what turns a ninety-second question into a ten-second one.',
    },
    {
      q: 'How much time should a series question take?',
      a: 'Thirty to forty seconds for a straightforward one and up to a minute for a two-level pattern. If nothing has appeared after sixty seconds, mark it and move on — every series question carries the same marks and the next one is often trivial.',
    },
    {
      q: 'Is number series part of reasoning or quantitative aptitude?',
      a: 'It depends on the exam. In banking papers, number series sits in the quantitative section while alphanumeric series sits in reasoning. In SSC and railway papers both appear under general intelligence and reasoning. The skill is identical either way.',
    },
  ],

  related: [
    { label: 'Coding-Decoding', to: '/study-material/reasoning/coding-decoding/' },
    { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
    { label: 'Syllogism', to: '/study-material/reasoning/syllogism/' },
    { label: 'Blood Relations', to: '/study-material/reasoning/blood-relations/' },
    { label: 'Seating Arrangement', to: '/study-material/reasoning/seating-arrangement/' },
    { label: 'All Reasoning', to: '/study-material/reasoning/' },
  ],
}
