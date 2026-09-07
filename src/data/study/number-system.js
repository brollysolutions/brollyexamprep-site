/**
 * Number System — /study-material/quantitative-aptitude/number-system/
 *
 * Written for SSC, banking, railway and state-PSC aspirants: the classification
 * of numbers, divisibility, HCF and LCM, factors, cyclicity, remainders and
 * factorials, in the order a candidate actually needs them.
 *
 * Block types the renderer understands are documented in ./index.js. Anything
 * exam-specific (weightage, marks) is phrased as a range rather than a promise,
 * because question counts move between cycles.
 */
export default {
  subject: 'quantitative-aptitude',
  subjectName: 'Quantitative Aptitude',
  slug: 'number-system',
  title: 'Number System',
  seoTitle: 'Number System for Competitive Exams | Concepts, Formulas & Practice',
  metaDescription:
    'Complete Number System study material for SSC, banking and railway exams — classification of numbers, divisibility rules, HCF and LCM, factors, cyclicity.',
  readMinutes: 18,
  lead: [
    'Number System is the foundation of the entire quantitative aptitude paper. Divisibility, factors, HCF and LCM, unit digits and remainders turn up directly as questions, and they also sit underneath simplification, algebra, and time-and-work sums you will meet later.',
    'This page covers the whole topic in the order it is worth learning: what the different kinds of numbers are, how to test divisibility quickly, how factors behave, and then the four techniques — cyclicity, remainder theorems, factorial powers and last-digit work — that turn a two-minute question into a fifteen-second one.',
  ],

  /** What a candidate can reasonably expect. Counts vary between cycles. */
  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–4 questions', note: 'Usually direct — divisibility, LCM/HCF, unit digit.' },
    { exam: 'Banking Prelims', count: '1–3 questions', note: 'Mostly inside simplification and number-series sets.' },
    { exam: 'RRB NTPC / Group D', count: '3–5 questions', note: 'The most direct of the lot — LCM, HCF, factors.' },
    { exam: 'CAT / MBA entrances', count: '2–4 questions', note: 'Harder: remainders, factorials, base systems.' },
  ],

  contents: [
    { icon: 'layers', title: 'Classification of numbers', sub: 'Natural, integer, rational, prime and the rest', href: '#classification' },
    { icon: 'check', title: 'Divisibility rules', sub: 'Fast tests for 2 through 13', href: '#divisibility' },
    { icon: 'target', title: 'HCF and LCM', sub: 'Methods, the product rule and fractions', href: '#hcf-lcm' },
    { icon: 'chart', title: 'Factors of a number', sub: 'Counting, summing and pairing factors', href: '#factors' },
    { icon: 'refresh', title: 'Unit digit and cyclicity', sub: 'The four-step cycle every power follows', href: '#cyclicity' },
    { icon: 'book', title: 'Remainders', sub: 'Euler, Fermat and negative remainders', href: '#remainders' },
    { icon: 'doc', title: 'Factorials and trailing zeros', sub: 'Highest power of a prime in n!', href: '#factorials' },
    { icon: 'globe', title: 'Series sums to memorise', sub: 'Squares, cubes, odds and evens', href: '#series' },
    { icon: 'user', title: 'Solved examples', sub: 'Eight questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'classification',
      heading: 'Classification of numbers',
      eyebrow: 'Start here',
      intro:
        'Most Number System questions begin by telling you what kind of number you are dealing with. Getting these definitions exactly right is what stops you losing marks on otherwise easy questions.',
      blocks: [
        {
          type: 'defs',
          items: [
            ['Natural numbers (N)', 'The counting numbers 1, 2, 3, 4, … Zero is not a natural number.'],
            ['Whole numbers (W)', 'The natural numbers together with zero: 0, 1, 2, 3, …'],
            ['Integers (Z)', 'All whole numbers and their negatives: …, −3, −2, −1, 0, 1, 2, 3, …'],
            ['Rational numbers (Q)', 'Any number that can be written as p/q where p and q are integers and q ≠ 0. In decimal form a rational number either terminates or repeats — 0.75, 0.333…, 2.1414…'],
            ['Irrational numbers', 'Numbers that cannot be written as p/q. Their decimals never terminate and never repeat — √2, √3, π, e. Note that √4 = 2 is rational, so a square root is not automatically irrational.'],
            ['Real numbers (R)', 'Every rational and irrational number together. Everything you meet in an aptitude paper is real.'],
            ['Even and odd', 'An even number is divisible by 2; an odd number is not. Zero counts as even.'],
            ['Prime numbers', 'A number greater than 1 with exactly two factors — 1 and itself. 2 is the only even prime.'],
            ['Composite numbers', 'A number greater than 1 with more than two factors. 4, 6, 8, 9, 10, …'],
            ['Co-prime numbers', 'Two numbers whose HCF is 1. They need not be prime themselves — 8 and 9 are co-prime.'],
            ['Twin primes', 'A pair of primes differing by 2 — (3, 5), (5, 7), (11, 13), (17, 19).'],
            ['Perfect numbers', 'A number equal to the sum of its proper divisors. 6 = 1 + 2 + 3 and 28 = 1 + 2 + 4 + 7 + 14.'],
          ],
        },
        {
          type: 'note',
          title: 'The one that catches everybody',
          text:
            '1 is neither prime nor composite — it has only one factor. Examiners test this constantly, usually by asking for "the smallest prime number" (2) or "the number of primes below 10" (four: 2, 3, 5, 7).',
        },
        {
          type: 'p',
          text:
            'There are 25 prime numbers below 100. Learning them saves real time, because divisibility and factorisation questions almost always live inside this list: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.',
        },
        {
          type: 'p',
          text:
            'To test whether a number N is prime, you only need to divide by the primes up to √N. To check 149, for example, √149 is a little over 12, so testing 2, 3, 5, 7 and 11 is enough — none divide it, so 149 is prime.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'divisibility',
      heading: 'Divisibility rules',
      eyebrow: 'Speed tools',
      intro:
        'These are the highest-return facts in the whole topic. They appear as questions in their own right, and they cut the work in every factorisation, simplification and LCM sum you will ever do.',
      blocks: [
        {
          type: 'table',
          caption: 'Divisibility tests worth memorising. Rules for 7 and 13 can be applied repeatedly until the number is small enough to judge by sight.',
          head: ['Divisor', 'Test', 'Example'],
          rows: [
            ['2', 'The last digit is even (0, 2, 4, 6, 8).', '4 138 ends in 8 → divisible'],
            ['3', 'The sum of the digits is divisible by 3.', '5 271 → 5+2+7+1 = 15 → divisible'],
            ['4', 'The number formed by the last two digits is divisible by 4.', '7 316 → 16 → divisible'],
            ['5', 'The last digit is 0 or 5.', '2 465 → divisible'],
            ['6', 'Divisible by both 2 and 3.', '1 314 → even and 1+3+1+4 = 9 → divisible'],
            ['7', 'Double the last digit and subtract it from the rest. Repeat.', '1 729 → 172 − 18 = 154 → 15 − 8 = 7 → divisible'],
            ['8', 'The number formed by the last three digits is divisible by 8.', '9 512 → 512 = 8 × 64 → divisible'],
            ['9', 'The sum of the digits is divisible by 9.', '6 831 → 6+8+3+1 = 18 → divisible'],
            ['10', 'The last digit is 0.', '4 570 → divisible'],
            ['11', 'The difference between the sum of digits in odd places and even places is 0 or a multiple of 11.', '918 082 → (2+0+1) − (8+8+9) = −22 → divisible'],
            ['12', 'Divisible by both 3 and 4.', '2 136 → digits sum 12, last two digits 36 → divisible'],
            ['13', 'Multiply the last digit by 4 and add it to the rest. Repeat.', '2 197 → 219 + 28 = 247 → 24 + 28 = 52 → divisible'],
            ['25', 'The last two digits are 00, 25, 50 or 75.', '3 475 → divisible'],
          ],
        },
        {
          type: 'note',
          title: 'Combining tests',
          text:
            'To test divisibility by a composite number, split it into co-prime factors and test each. For 12, test 3 and 4 — not 2 and 6, because 2 and 6 share a factor and would pass numbers such as 18 that 12 does not divide.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'hcf-lcm',
      heading: 'HCF and LCM',
      eyebrow: 'Core skill',
      intro:
        'The HCF (highest common factor, also called GCD) is the largest number that divides all the given numbers. The LCM (lowest common multiple) is the smallest number that all of them divide.',
      blocks: [
        {
          type: 'p',
          text:
            'The reliable method for both is prime factorisation. Break every number into primes, then take the lowest power of each shared prime for the HCF, and the highest power of every prime that appears for the LCM.',
        },
        {
          type: 'example',
          q: 'Find the HCF and LCM of 72 and 120.',
          steps: [
            '72 = 2³ × 3²',
            '120 = 2³ × 3 × 5',
            'HCF — lowest power of each shared prime: 2³ × 3 = 24',
            'LCM — highest power of every prime present: 2³ × 3² × 5 = 360',
          ],
          answer: 'HCF = 24 and LCM = 360.',
        },
        {
          type: 'formula',
          title: 'The rules worth knowing cold',
          items: [
            { expr: 'HCF × LCM = product of the two numbers', note: 'True for exactly two numbers, never for three or more. Check: 24 × 360 = 8 640 = 72 × 120.' },
            { expr: 'HCF of fractions = HCF of numerators ÷ LCM of denominators', note: 'HCF of 2/3, 4/9, 6/5 = 2 / 45.' },
            { expr: 'LCM of fractions = LCM of numerators ÷ HCF of denominators', note: 'LCM of 2/3, 4/9, 6/5 = 12 / 1 = 12.' },
            { expr: 'If two numbers are co-prime, HCF = 1 and LCM = their product', note: '8 and 9 → HCF 1, LCM 72.' },
            { expr: 'HCF of a set always divides every member; LCM is always a multiple of each', note: 'A quick sanity check on any answer you compute.' },
          ],
        },
        {
          type: 'p',
          text:
            'Word problems built on LCM and HCF follow a small number of shapes, and recognising the shape is most of the work.',
        },
        {
          type: 'defs',
          items: [
            ['Same remainder r each time', 'Smallest number = LCM of the divisors + r. Divided by 12, 15 and 20 leaving 5 each → LCM(12, 15, 20) + 5 = 60 + 5 = 65.'],
            ['Divides exactly, leaving nothing', 'The answer is the LCM itself, or a multiple of it inside the range asked for.'],
            ['Largest number that divides a, b, c leaving the same remainder', 'Take the HCF of the differences: HCF(b − a, c − b, c − a).'],
            ['Bells ringing / lights blinking together', 'Always LCM. Bells at 6, 8 and 12 second intervals ring together every LCM(6, 8, 12) = 24 seconds.'],
            ['Largest tile or measure that fits exactly', 'Always HCF. The largest square tile paving a 12 m × 18 m floor has side HCF(12, 18) = 6 m.'],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'factors',
      heading: 'Factors of a number',
      eyebrow: 'High yield',
      intro:
        'Once a number is written as a product of prime powers, everything about its factors follows from the exponents. This is one of the few places in aptitude where a formula genuinely replaces all the counting.',
      blocks: [
        {
          type: 'p',
          text: 'Write the number as N = p^a × q^b × r^c, where p, q and r are distinct primes. Then:',
        },
        {
          type: 'formula',
          title: 'Factor formulas',
          items: [
            { expr: 'Number of factors = (a + 1)(b + 1)(c + 1)', note: 'Each prime can appear 0, 1, … up to its exponent — that is (exponent + 1) choices.' },
            { expr: 'Sum of factors = [(p^(a+1) − 1)/(p − 1)] × [(q^(b+1) − 1)/(q − 1)] × …', note: 'Each bracket is the sum of a geometric progression of one prime’s powers.' },
            { expr: 'Product of all factors = N^(number of factors ÷ 2)', note: 'Factors pair up around √N, and each pair multiplies to N.' },
            { expr: 'Ways to write N as a product of two factors = number of factors ÷ 2', note: 'If N is a perfect square, use (number of factors + 1) ÷ 2, because √N pairs with itself.' },
            { expr: 'Count of numbers below N and co-prime to it = N(1 − 1/p)(1 − 1/q)…', note: 'Euler’s totient φ(N). For 36 = 2² × 3²: 36 × ½ × ⅔ = 12.' },
          ],
        },
        {
          type: 'example',
          q: 'How many factors does 720 have, and what do they add up to?',
          steps: [
            '720 = 2⁴ × 3² × 5¹',
            'Number of factors = (4 + 1)(2 + 1)(1 + 1) = 5 × 3 × 2 = 30',
            'Sum = (2⁵ − 1)/(2 − 1) × (3³ − 1)/(3 − 1) × (5² − 1)/(5 − 1)',
            'Sum = 31 × 13 × 6',
          ],
          answer: '720 has 30 factors, adding up to 2 418.',
        },
        {
          type: 'note',
          title: 'A useful consequence',
          text:
            'A number has an odd count of factors only when it is a perfect square. Every other number pairs its factors off, so the total is even. Questions phrased as "how many numbers below 100 have an odd number of factors" are really asking how many perfect squares there are (nine: 1, 4, 9, 16, 25, 36, 49, 64, 81).',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'cyclicity',
      heading: 'Unit digit and cyclicity',
      eyebrow: 'Shortcut',
      intro:
        'Asked for the last digit of 7¹⁰⁵, you do not compute anything. The unit digits of the powers of any digit repeat in a short cycle, so all you need is the remainder of the exponent.',
      blocks: [
        {
          type: 'table',
          caption: 'The unit digit of every power repeats with a cycle length of 1, 2 or 4.',
          head: ['Digit', 'Cycle of unit digits', 'Cycle length'],
          rows: [
            ['0, 1, 5, 6', 'Always ends in the same digit', '1'],
            ['4', '4, 6', '2'],
            ['9', '9, 1', '2'],
            ['2', '2, 4, 8, 6', '4'],
            ['3', '3, 9, 7, 1', '4'],
            ['7', '7, 9, 3, 1', '4'],
            ['8', '8, 4, 2, 6', '4'],
          ],
        },
        {
          type: 'p',
          text:
            'The method is always the same. Take the unit digit of the base, divide the exponent by that digit’s cycle length, and use the remainder to pick a position in the cycle. A remainder of 0 means the last entry in the cycle.',
        },
        {
          type: 'example',
          q: 'Find the unit digit of 7¹⁰⁵.',
          steps: [
            'The unit digit of the base is 7, whose cycle is 7, 9, 3, 1 — length 4.',
            '105 ÷ 4 leaves a remainder of 1.',
            'A remainder of 1 points at the first entry in the cycle.',
          ],
          answer: 'The unit digit is 7.',
        },
        {
          type: 'example',
          q: 'Find the unit digit of 2⁴⁴ × 3³⁷.',
          steps: [
            '2 has cycle 2, 4, 8, 6 — length 4. 44 ÷ 4 leaves remainder 0, so take the last entry: 6.',
            '3 has cycle 3, 9, 7, 1 — length 4. 37 ÷ 4 leaves remainder 1, so take the first entry: 3.',
            'Multiply the two unit digits: 6 × 3 = 18.',
          ],
          answer: 'The unit digit of the product is 8.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'remainders',
      heading: 'Remainders',
      eyebrow: 'Advanced',
      intro:
        'Remainder questions look intimidating and are usually the fastest marks on the paper once you know three theorems and one trick.',
      blocks: [
        {
          type: 'formula',
          title: 'The three theorems',
          items: [
            { expr: 'Euler: if HCF(a, N) = 1, then a^φ(N) leaves remainder 1 on division by N', note: 'φ(N) is the totient from the factors section. The workhorse for composite divisors.' },
            { expr: 'Fermat: if p is prime and does not divide a, then a^(p−1) leaves remainder 1 on division by p', note: 'Euler’s theorem in the special case where N is prime, since φ(p) = p − 1.' },
            { expr: 'Wilson: for a prime p, (p − 1)! leaves remainder p − 1 on division by p', note: 'Equivalently (p − 1)! ≡ −1 (mod p). Rare, but unmistakable when it appears.' },
          ],
        },
        {
          type: 'example',
          q: 'What is the remainder when 2¹⁰⁰ is divided by 7?',
          steps: [
            'Look for a small power of 2 that leaves remainder 1: 2³ = 8, which leaves 1 on division by 7.',
            'Write 100 = 3 × 33 + 1, so 2¹⁰⁰ = (2³)³³ × 2¹.',
            '(2³)³³ leaves remainder 1³³ = 1, so the whole expression leaves the same remainder as 1 × 2.',
          ],
          answer: 'The remainder is 2.',
        },
        {
          type: 'example',
          q: 'What is the remainder when 5¹⁰⁰ is divided by 13?',
          steps: [
            '13 is prime and does not divide 5, so by Fermat 5¹² leaves remainder 1.',
            '100 ÷ 12 leaves a remainder of 4, so 5¹⁰⁰ leaves the same remainder as 5⁴.',
            '5⁴ = 625, and 625 = 13 × 48 + 1.',
          ],
          answer: 'The remainder is 1.',
        },
        {
          type: 'note',
          title: 'Negative remainders',
          text:
            'When a base is just below the divisor, treat it as negative. Dividing 6¹⁰⁰ by 7, note that 6 ≡ −1, so 6¹⁰⁰ ≡ (−1)¹⁰⁰ = 1. An odd power would give −1, which you then convert back by adding the divisor: −1 + 7 = 6.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'factorials',
      heading: 'Factorials and trailing zeros',
      eyebrow: 'Frequently asked',
      intro:
        '"How many zeros does 100! end in?" is a standard question with a one-line method, and it generalises to the highest power of any prime.',
      blocks: [
        {
          type: 'formula',
          title: 'Highest power of a prime in n!',
          items: [
            { expr: 'Highest power of prime p in n! = [n/p] + [n/p²] + [n/p³] + …', note: 'Square brackets mean "discard the fractional part". Stop once a term reaches zero.' },
            { expr: 'Trailing zeros in n! = highest power of 5 in n!', note: 'A zero needs a 2 and a 5, and factorials always contain more 2s than 5s, so the 5s are the constraint.' },
          ],
        },
        {
          type: 'example',
          q: 'How many trailing zeros does 100! have?',
          steps: [
            'Count the 5s: [100/5] = 20',
            'Then the 25s, each contributing a second 5: [100/25] = 4',
            '[100/125] = 0, so stop.',
            'Total = 20 + 4 = 24',
          ],
          answer: '100! ends in 24 zeros.',
        },
        {
          type: 'example',
          q: 'What is the highest power of 3 that divides 50!?',
          steps: ['[50/3] = 16', '[50/9] = 5', '[50/27] = 1', '[50/81] = 0, so stop.', 'Total = 16 + 5 + 1'],
          answer: '3²² divides 50!, and 3²³ does not.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'series',
      heading: 'Series sums to memorise',
      eyebrow: 'Formula sheet',
      intro:
        'These five appear inside a huge range of questions — averages, algebra, data interpretation — and are quick marks whenever they turn up directly.',
      blocks: [
        {
          type: 'formula',
          title: 'Standard sums',
          items: [
            { expr: 'Sum of the first n natural numbers = n(n + 1) / 2', note: '1 + 2 + … + 100 = 100 × 101 / 2 = 5 050.' },
            { expr: 'Sum of the squares of the first n = n(n + 1)(2n + 1) / 6', note: '1² + 2² + … + 10² = 10 × 11 × 21 / 6 = 385.' },
            { expr: 'Sum of the cubes of the first n = [n(n + 1) / 2]²', note: 'Always the square of the plain sum: 1³ + … + 5³ = 15² = 225.' },
            { expr: 'Sum of the first n odd numbers = n²', note: '1 + 3 + 5 + 7 + 9 = 5² = 25.' },
            { expr: 'Sum of the first n even numbers = n(n + 1)', note: '2 + 4 + 6 + 8 = 4 × 5 = 20.' },
          ],
        },
      ],
    },
  ],

  /* ── Worked examples ────────────────────────────────────────── */
  examples: [
    {
      q: 'Find the largest three-digit number divisible by 13.',
      steps: ['The largest three-digit number is 999.', '999 ÷ 13 = 76 with a remainder of 11.', 'Subtract the remainder: 999 − 11 = 988.'],
      answer: '988, which is 13 × 76.',
    },
    {
      q: 'What is the least number that leaves a remainder of 3 when divided by 15, 20 and 25?',
      steps: [
        '15 = 3 × 5, 20 = 2² × 5, 25 = 5²',
        'LCM = 2² × 3 × 5² = 300',
        'A common remainder of 3 means adding 3 to the LCM.',
      ],
      answer: '303.',
    },
    {
      q: 'If the six-digit number 4A2B18 is divisible by 9 and B = 4, find A.',
      steps: [
        'For divisibility by 9 the digit sum must be a multiple of 9.',
        'Sum = 4 + A + 2 + 4 + 1 + 8 = 19 + A',
        'The next multiple of 9 above 19 is 27, so 19 + A = 27.',
      ],
      answer: 'A = 8.',
    },
    {
      q: 'Find the HCF of 3/4, 9/10 and 6/7.',
      steps: ['HCF of numerators: HCF(3, 9, 6) = 3', 'LCM of denominators: LCM(4, 10, 7) = 140', 'Apply the fraction rule: HCF of numerators over LCM of denominators.'],
      answer: '3/140.',
    },
    {
      q: 'The product of two numbers is 2 028 and their HCF is 13. How many such pairs exist?',
      steps: [
        'Write the numbers as 13a and 13b with a and b co-prime.',
        '13a × 13b = 2 028, so ab = 2 028 / 169 = 12.',
        'Co-prime pairs multiplying to 12: (1, 12) and (3, 4). The pair (2, 6) shares a factor, so it fails.',
      ],
      answer: 'Two pairs — (13, 156) and (39, 52).',
    },
    {
      q: 'Find the unit digit of 4⁸³.',
      steps: ['4 has the cycle 4, 6 — length 2.', '83 is odd, so it leaves remainder 1 on division by 2.', 'Remainder 1 points at the first entry of the cycle.'],
      answer: 'The unit digit is 4. (Every odd power of 4 ends in 4; every even power ends in 6.)',
    },
    {
      q: 'How many numbers between 1 and 100 are divisible by 3 or 5?',
      steps: [
        'Divisible by 3: [100/3] = 33',
        'Divisible by 5: [100/5] = 20',
        'Divisible by both, that is by 15: [100/15] = 6',
        'Inclusion–exclusion: 33 + 20 − 6',
      ],
      answer: '47 numbers.',
    },
    {
      q: 'What is the remainder when 7⁸⁴ is divided by 100?',
      steps: [
        '7⁴ = 2 401, which leaves a remainder of 1 on division by 100.',
        '84 is a multiple of 4, so 7⁸⁴ = (7⁴)²¹.',
        'That leaves remainder 1²¹ = 1.',
      ],
      answer: 'The remainder is 1, so 7⁸⁴ ends in 01.',
    },
  ],

  /* ── Practice ───────────────────────────────────────────────── */
  practice: [
    {
      q: 'How many factors does 1 260 have?',
      options: ['24', '30', '36', '42'],
      answer: 2,
      explain: '1 260 = 2² × 3² × 5 × 7, so the count is (2+1)(2+1)(1+1)(1+1) = 3 × 3 × 2 × 2 = 36.',
    },
    {
      q: 'How many trailing zeros does 50! have?',
      options: ['10', '12', '14', '8'],
      answer: 1,
      explain: '[50/5] = 10 and [50/25] = 2, and [50/125] = 0. The total is 12.',
    },
    {
      q: 'What is the remainder when 3⁴⁰ is divided by 11?',
      options: ['3', '9', '10', '1'],
      answer: 3,
      explain: '11 is prime, so by Fermat 3¹⁰ leaves remainder 1. Since 40 is a multiple of 10, 3⁴⁰ = (3¹⁰)⁴ leaves remainder 1.',
    },
    {
      q: 'Which is the largest three-digit number divisible by 17?',
      options: ['986', '992', '969', '999'],
      answer: 0,
      explain: '999 ÷ 17 = 58 remainder 13, so 999 − 13 = 986 = 17 × 58.',
    },
    {
      q: 'The sum of the first 25 odd natural numbers is:',
      options: ['600', '650', '576', '625'],
      answer: 3,
      explain: 'The sum of the first n odd numbers is n². Here 25² = 625.',
    },
    {
      q: 'If a number is divisible by both 5 and 8, it must also be divisible by:',
      options: ['13', '20', '40', '80'],
      answer: 2,
      explain: '5 and 8 are co-prime, so the number is divisible by their product, 40. It need not be divisible by 80.',
    },
    {
      q: 'How many prime numbers lie between 50 and 70?',
      options: ['3', '5', '6', '4'],
      answer: 3,
      explain: 'They are 53, 59, 61 and 67 — four primes. 51 = 3 × 17 and 57 = 3 × 19 are the usual traps.',
    },
    {
      q: 'The LCM of 2/3, 4/9 and 6/5 is:',
      options: ['12', '2/45', '24', '4/15'],
      answer: 0,
      explain: 'LCM of fractions = LCM of numerators ÷ HCF of denominators = LCM(2, 4, 6) / HCF(3, 9, 5) = 12 / 1 = 12.',
    },
    {
      q: 'What is the unit digit of 8²⁷?',
      options: ['4', '2', '6', '8'],
      answer: 1,
      explain: '8 has the cycle 8, 4, 2, 6 — length 4. 27 ÷ 4 leaves remainder 3, and the third entry in the cycle is 2.',
    },
    {
      q: 'The HCF of two numbers is 12 and their LCM is 72. If one number is 24, the other is:',
      options: ['36', '48', '30', '18'],
      answer: 0,
      explain: 'For two numbers, HCF × LCM = their product. So the other number is (12 × 72) / 24 = 36.',
    },
    {
      q: 'How many numbers below 100 have an odd number of factors?',
      options: ['10', '9', '12', '7'],
      answer: 1,
      explain: 'Only perfect squares have an odd factor count. Below 100 they are 1, 4, 9, 16, 25, 36, 49, 64 and 81 — nine numbers.',
    },
    {
      q: 'What is the value of φ(36), the count of numbers below 36 that are co-prime to it?',
      options: ['18', '15', '12', '10'],
      answer: 2,
      explain: '36 = 2² × 3², so φ(36) = 36 × (1 − 1/2) × (1 − 1/3) = 36 × ½ × ⅔ = 12.',
    },
  ],

  /* ── FAQs ───────────────────────────────────────────────────── */
  faqs: [
    {
      q: 'What is the Number System in quantitative aptitude?',
      a: 'It is the branch of arithmetic that deals with the kinds of numbers — natural, whole, integer, rational, irrational, prime and composite — and with their behaviour under division: divisibility rules, factors, HCF and LCM, remainders and unit digits. It is the base layer for almost every other quant topic.',
    },
    {
      q: 'Is 1 a prime number?',
      a: 'No. A prime number has exactly two distinct factors, 1 and itself. The number 1 has only one factor, so it is neither prime nor composite. The smallest prime number is 2, which is also the only even prime.',
    },
    {
      q: 'How many prime numbers are there between 1 and 100?',
      a: 'There are 25: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 and 97.',
    },
    {
      q: 'What is the difference between HCF and LCM?',
      a: 'The HCF is the largest number that divides all the given numbers, so it is never larger than the smallest of them. The LCM is the smallest number that all of them divide, so it is never smaller than the largest. For exactly two numbers, HCF × LCM equals their product.',
    },
    {
      q: 'How do I find the unit digit of a large power quickly?',
      a: 'Take the unit digit of the base and find its cycle: digits 0, 1, 5 and 6 repeat with cycle length 1; 4 and 9 with length 2; and 2, 3, 7 and 8 with length 4. Divide the exponent by the cycle length and use the remainder to pick the position in the cycle, treating a remainder of 0 as the last entry.',
    },
    {
      q: 'How many zeros does 100 factorial end with?',
      a: '24. A trailing zero needs a factor of 10, which needs a 2 and a 5, and factorials always contain more 2s than 5s. So count the 5s: [100/5] = 20 plus [100/25] = 4, giving 24.',
    },
    {
      q: 'How much of the exam does Number System account for?',
      a: 'It varies by exam and by cycle, but expect roughly two to four direct questions in SSC CGL and CHSL Tier 1, three to five in RRB NTPC and Group D, and one to three in banking prelims — where it mostly appears inside simplification and number-series sets. Its real weight is larger than the direct count, because the concepts underpin the rest of the paper.',
    },
    {
      q: 'What is the best order to study Number System?',
      a: 'Start with classification and divisibility rules, because everything else uses them. Then learn HCF and LCM with the word-problem shapes, then factors. Leave cyclicity, remainder theorems and factorial powers until last — they are the highest-scoring but only make sense once factorisation is automatic.',
    },
  ],

  related: [
    { label: 'Percentages', to: '/study-material/quantitative-aptitude/percentages/' },
    { label: 'Profit & Loss', to: '/study-material/quantitative-aptitude/profit-loss/' },
    { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
    { label: 'Time & Work', to: '/study-material/quantitative-aptitude/time-work/' },
    { label: 'Time, Speed & Distance', to: '/study-material/quantitative-aptitude/time-speed-distance/' },
    { label: 'All Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
  ],
}
