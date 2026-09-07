/**
 * Algebra — /study-material/mathematics/algebra/
 *
 * The structural mathematics that quantitative aptitude assumes and that
 * entrance papers test directly. Written formula-first, because in a timed
 * paper the identity you can recall instantly is worth more than the
 * derivation you could reconstruct.
 */
export default {
  subject: 'mathematics',
  subjectName: 'Mathematics',
  slug: 'algebra',
  title: 'Algebra',
  seoTitle: 'Algebra for Competitive Exams | Equations, Progressions, Formulas & Practice',
  metaDescription:
    'Complete algebra study material for JEE, SSC, banking, CAT and state exams — number systems and divisibility, indices surds and logarithms.',
  readMinutes: 24,
  lead: [
    'Algebra is the machinery underneath quantitative aptitude. A percentage question, a time-and-work question and a mixture question are all linear equations in disguise, and a candidate who sets them up as equations rather than as remembered tricks solves the unfamiliar ones too.',
    'The material below is deliberately formula-first, because in a timed paper what matters is the identity you can recall instantly. Each formula is given with the condition under which it holds and, wherever there is one, the shortcut that follows from it — such as reading the sum and product of the roots of a quadratic straight off the coefficients, without solving anything.',
  ],

  weightage: [
    { exam: 'JEE Main / Advanced', count: '25–30% of the mathematics paper', note: 'Quadratics, progressions, permutations, probability and binomial theorem together.' },
    { exam: 'SSC CGL Tier 1 and 2', count: '4–7 questions', note: 'Algebraic identities and simplification are asked heavily, often as speed questions.' },
    { exam: 'Banking Quantitative Aptitude', count: '3–5 questions', note: 'Quadratic equation comparison sets are a standard question type.' },
    { exam: 'CAT Quantitative Ability', count: '5–8 questions', note: 'Algebra is the largest single area, with progressions and functions prominent.' },
    { exam: 'RRB NTPC / Group D', count: '2–4 questions', note: 'Simplification, LCM and HCF, and simple equations.' },
  ],

  contents: [
    { icon: 'chart', title: 'Number systems', sub: 'Divisibility, HCF and LCM', href: '#numbers' },
    { icon: 'refresh', title: 'Indices, surds and logs', sub: 'The three linked rule sets', href: '#indices' },
    { icon: 'layers', title: 'Polynomials and identities', sub: 'The identities worth memorising', href: '#polynomials' },
    { icon: 'target', title: 'Equations', sub: 'Linear and quadratic', href: '#equations' },
    { icon: 'play', title: 'Progressions', sub: 'AP, GP and standard sums', href: '#progressions' },
    { icon: 'search', title: 'Counting and probability', sub: 'Permutations, combinations, chance', href: '#counting' },
    { icon: 'doc', title: 'Sets and functions', sub: 'Language and mappings', href: '#sets' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'numbers',
      heading: 'Number systems',
      eyebrow: 'Divisibility, HCF and LCM',
      intro:
        'The arithmetic foundation. Most of it is memorisation of small rules, and the return per minute of study is unusually high.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The hierarchy of numbers',
              'Natural numbers begin at 1; whole numbers add 0; integers add the negatives. Rational numbers are those expressible as p/q with q non-zero, and their decimal expansions terminate or recur. Irrational numbers such as √2, π and e cannot be so expressed, and their expansions neither terminate nor recur. Together these form the real numbers; adding √−1 gives the complex numbers.',
            ],
            [
              'Divisibility rules',
              'By 2 if the last digit is even; by 3 if the digit sum is divisible by 3; by 4 if the last two digits form a multiple of 4; by 5 if the last digit is 0 or 5; by 6 if divisible by both 2 and 3; by 8 if the last three digits form a multiple of 8; by 9 if the digit sum is divisible by 9; by 11 if the alternating sum of digits is divisible by 11. These are asked directly and also save time in factorisation.',
            ],
            [
              'Prime numbers',
              'A prime has exactly two distinct factors, itself and 1. So 1 is not prime, and 2 is the only even prime. To test whether n is prime it is enough to check divisibility by primes up to √n. Every integer greater than 1 has a unique prime factorisation, which is the fundamental theorem of arithmetic.',
            ],
            [
              'Number of factors',
              'If a number factorises as p^a × q^b × r^c, the number of factors is (a+1)(b+1)(c+1). The sum of factors and the number of ways of writing it as a product of two factors follow from the same decomposition. This trio of results appears regularly in SSC and CAT papers.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'HCF, LCM and remainders',
          items: [
            { expr: 'HCF × LCM = product of the two numbers', note: 'Valid for two numbers only, not for three or more.' },
            { expr: 'HCF of fractions = HCF of numerators ÷ LCM of denominators', note: 'And LCM of fractions is LCM of numerators ÷ HCF of denominators — the reverse.' },
            { expr: 'Dividend = divisor × quotient + remainder', note: 'The division algorithm, and the starting point of every remainder problem.' },
            { expr: 'Number leaving remainder r with each of a, b, c = k·LCM(a,b,c) + r', note: 'When the remainder is the same in each case.' },
            { expr: 'When remainders differ by a constant d: number = k·LCM − d', note: 'For example, leaving remainders 2, 3 and 4 on division by 4, 5 and 6.' },
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'indices',
      heading: 'Indices, surds and logarithms',
      eyebrow: 'The three linked rule sets',
      intro:
        'Three topics that are really one: a logarithm is an index written the other way round, and a surd is a fractional index. Learning them together halves the work.',
      blocks: [
        {
          type: 'formula',
          title: 'Laws of indices',
          items: [
            { expr: 'aᵐ × aⁿ = aᵐ⁺ⁿ and aᵐ ÷ aⁿ = aᵐ⁻ⁿ', note: 'Same base: add the powers to multiply, subtract to divide.' },
            { expr: '(aᵐ)ⁿ = aᵐⁿ', note: 'A power of a power multiplies the indices.' },
            { expr: 'a⁰ = 1 for a ≠ 0, and a⁻ⁿ = 1/aⁿ', note: 'Zero index gives 1; a negative index gives the reciprocal.' },
            { expr: 'a^(m/n) = ⁿ√(aᵐ)', note: 'A fractional index is a root — which is why surds and indices are the same subject.' },
          ],
        },
        {
          type: 'formula',
          title: 'Laws of logarithms',
          items: [
            { expr: 'log(ab) = log a + log b', note: 'A logarithm turns multiplication into addition, which is why logarithms were invented.' },
            { expr: 'log(a/b) = log a − log b', note: 'Division becomes subtraction.' },
            { expr: 'log(aⁿ) = n log a', note: 'A power becomes a coefficient — the most used rule in solving exponential equations.' },
            { expr: 'log_b a = log a ÷ log b', note: 'Change of base. It lets any logarithm be evaluated with a calculator that has only one base.' },
            { expr: 'log_a a = 1 and log_a 1 = 0', note: 'For any valid base. The logarithm of a negative number or of zero is undefined.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Rationalising a surd',
              'To remove a surd from the denominator, multiply numerator and denominator by the conjugate. For 1/(√a + √b), multiply by (√a − √b), giving (√a − √b)/(a − b). This is a standard first step and often reveals a simplification that was invisible before.',
            ],
            [
              'Comparing surds',
              'Raise both to a common power so that the roots disappear. To compare ∛2 and ⁴√3, raise both to the twelfth power, giving 2⁴ = 16 and 3³ = 27, so ⁴√3 is larger. The method is quicker and safer than estimating decimals.',
            ],
            [
              'Where logarithms appear in exams',
              'In compound interest and population growth, where the unknown is in the exponent; in comparing very large numbers, since the number of digits in N is one more than the integer part of log₁₀N; and in simplification questions that look formidable but collapse once the log rules are applied.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'polynomials',
      heading: 'Polynomials and identities',
      eyebrow: 'The identities worth memorising',
      intro:
        'A dozen identities account for the great majority of algebraic simplification questions, and SSC in particular asks them almost verbatim.',
      blocks: [
        {
          type: 'formula',
          title: 'The standard identities',
          items: [
            { expr: '(a + b)² = a² + 2ab + b² and (a − b)² = a² − 2ab + b²', note: 'From which a² + b² = (a + b)² − 2ab — the substitution most often needed.' },
            { expr: 'a² − b² = (a + b)(a − b)', note: 'The difference of two squares; the single most useful factorisation.' },
            { expr: '(a + b)³ = a³ + b³ + 3ab(a + b)', note: 'And (a − b)³ = a³ − b³ − 3ab(a − b).' },
            { expr: 'a³ + b³ = (a + b)(a² − ab + b²)', note: 'And a³ − b³ = (a − b)(a² + ab + b²).' },
            { expr: 'a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca)', note: 'So if a + b + c = 0, then a³ + b³ + c³ = 3abc — a shortcut worth watching for.' },
            { expr: '(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)', note: 'The three-variable expansion.' },
            { expr: 'If x + 1/x = k, then x² + 1/x² = k² − 2 and x³ + 1/x³ = k³ − 3k', note: 'This family of questions is asked in almost every SSC paper.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Remainder theorem',
              'When a polynomial p(x) is divided by (x − a), the remainder is p(a). It turns a long division into a single substitution.',
            ],
            [
              'Factor theorem',
              'The special case where the remainder is zero: (x − a) is a factor of p(x) if and only if p(a) = 0. This is how a cubic is factorised — find one root by inspection among the factors of the constant term, divide out, and solve the resulting quadratic.',
            ],
            [
              'Degree and roots',
              'A polynomial of degree n has exactly n roots, counting multiplicity and allowing complex ones. A cubic with real coefficients therefore has either three real roots or one real and two complex conjugates, since complex roots of a real polynomial always occur in conjugate pairs.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'equations',
      heading: 'Equations',
      eyebrow: 'Linear and quadratic',
      intro:
        'Two families. Linear equations are about setting the problem up correctly; quadratics are about knowing what the coefficients tell you before you solve anything.',
      blocks: [
        {
          type: 'formula',
          title: 'Quadratic equations, ax² + bx + c = 0',
          items: [
            { expr: 'x = (−b ± √(b² − 4ac)) / 2a', note: 'The quadratic formula. Worth using even when factorisation seems possible, because it never fails.' },
            { expr: 'Sum of roots = −b/a', note: 'Read straight off the coefficients, with no solving at all.' },
            { expr: 'Product of roots = c/a', note: 'The companion result. Together these two answer most questions about roots without finding them.' },
            { expr: 'Discriminant D = b² − 4ac', note: 'D > 0 gives two distinct real roots; D = 0 gives two equal real roots; D < 0 gives a pair of complex conjugates.' },
            { expr: 'Equation with roots α and β: x² − (α + β)x + αβ = 0', note: 'How to construct a quadratic from its roots.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Systems of linear equations',
              'Two equations in two unknowns are solved by substitution, elimination or cross-multiplication. Geometrically, the pair has a unique solution when the lines intersect, no solution when they are parallel — the ratios of the x and y coefficients equal but not the constants — and infinitely many when the two equations describe the same line.',
            ],
            [
              'The condition for consistency',
              'For a₁x + b₁y = c₁ and a₂x + b₂y = c₂: a unique solution when a₁/a₂ ≠ b₁/b₂; no solution when a₁/a₂ = b₁/b₂ ≠ c₁/c₂; infinitely many when all three ratios are equal. This is asked directly and also underlies word problems that turn out to have no answer.',
            ],
            [
              'Setting up word problems',
              'Name the unknown explicitly, write one equation for each independent statement in the question, and check that the number of equations equals the number of unknowns. Most errors in this topic are errors of translation rather than of algebra, and writing the definition of the variable down before starting eliminates most of them.',
            ],
            [
              'Inequalities',
              'The rules of algebra carry across with one exception: multiplying or dividing both sides by a negative number reverses the inequality. For a quadratic inequality, find the roots, mark them on a number line and test the sign in each interval. For modulus, |x| < a means −a < x < a, while |x| > a means x < −a or x > a.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'progressions',
      heading: 'Progressions',
      eyebrow: 'AP, GP and standard sums',
      intro:
        'Sequences with a fixed rule connecting each term to the last. Recognising which kind you are looking at is most of the work.',
      blocks: [
        {
          type: 'formula',
          title: 'Arithmetic and geometric progressions',
          items: [
            { expr: 'AP: aₙ = a + (n − 1)d', note: 'Each term exceeds the last by a constant difference d.' },
            { expr: 'AP sum: Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l)', note: 'The second form, using the last term l, is faster when both ends are known.' },
            { expr: 'GP: aₙ = ar^(n−1)', note: 'Each term is a constant multiple r of the last.' },
            { expr: 'GP sum: Sₙ = a(rⁿ − 1)/(r − 1), for r ≠ 1', note: 'Use a(1 − rⁿ)/(1 − r) when r < 1, to avoid negative denominators.' },
            { expr: 'Infinite GP: S∞ = a/(1 − r), valid only when |r| < 1', note: 'The condition matters — an infinite GP with |r| ≥ 1 has no finite sum.' },
            { expr: 'Arithmetic mean = (a + b)/2; geometric mean = √(ab)', note: 'And AM ≥ GM for positive numbers, with equality only when the numbers are equal — the basis of many maximum and minimum questions.' },
          ],
        },
        {
          type: 'formula',
          title: 'Standard sums worth memorising',
          items: [
            { expr: 'Sum of the first n natural numbers = n(n + 1)/2', note: 'The most used of the three.' },
            { expr: 'Sum of the squares of the first n = n(n + 1)(2n + 1)/6', note: '' },
            { expr: 'Sum of the cubes of the first n = [n(n + 1)/2]²', note: 'The square of the sum of the numbers themselves — an elegant result and a useful check.' },
            { expr: 'Sum of the first n odd numbers = n²', note: 'And the sum of the first n even numbers is n(n + 1).' },
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'counting',
      heading: 'Counting and probability',
      eyebrow: 'Permutations, combinations, chance',
      intro:
        'One distinction runs through this whole topic: whether order matters. Get that right and the formulas take care of themselves.',
      blocks: [
        {
          type: 'formula',
          title: 'Counting',
          items: [
            { expr: 'ⁿPᵣ = n! / (n − r)!', note: 'Arrangements of r things chosen from n, where order matters.' },
            { expr: 'ⁿCᵣ = n! / [r!(n − r)!]', note: 'Selections of r things from n, where order does not matter. Note that ⁿPᵣ = ⁿCᵣ × r!' },
            { expr: 'ⁿCᵣ = ⁿC₍ₙ₋ᵣ₎', note: 'Choosing r to include is the same as choosing n − r to exclude — which often turns a long computation into a short one.' },
            { expr: 'Circular arrangements of n objects = (n − 1)!', note: 'One position is fixed to remove rotational duplicates; if clockwise and anticlockwise are not distinguished, divide by two again.' },
            { expr: 'Arrangements of n objects with repeats = n! / (p! q! …)', note: 'Divide by the factorial of the count of each repeated item.' },
          ],
        },
        {
          type: 'formula',
          title: 'Probability',
          items: [
            { expr: 'P(E) = favourable outcomes ÷ total outcomes', note: 'For equally likely outcomes. Probability always lies between 0 and 1.' },
            { expr: 'P(not E) = 1 − P(E)', note: 'Often far quicker than counting the favourable cases directly — the "at least one" questions almost always yield to it.' },
            { expr: 'P(A ∪ B) = P(A) + P(B) − P(A ∩ B)', note: 'The subtraction removes the double count; for mutually exclusive events the last term is zero.' },
            { expr: 'P(A ∩ B) = P(A) × P(B) for independent events', note: 'Independence means one event does not affect the other. Mutually exclusive is a different idea entirely — such events cannot both occur.' },
            { expr: 'Conditional: P(A | B) = P(A ∩ B) / P(B)', note: 'The probability of A given that B has occurred.' },
          ],
        },
        {
          type: 'note',
          title: 'The distinction candidates most often blur',
          text:
            'Mutually exclusive events cannot both happen, so P(A ∩ B) = 0. Independent events can both happen, and one occurring tells you nothing about the other, so P(A ∩ B) = P(A)P(B). Two events with non-zero probabilities cannot be both mutually exclusive and independent, because exclusivity means each tells you a great deal about the other. Questions exploit this regularly.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'sets',
      heading: 'Sets and functions',
      eyebrow: 'Language and mappings',
      intro:
        'The vocabulary of modern mathematics, plus the Venn diagram results that solve a recurring family of aptitude questions.',
      blocks: [
        {
          type: 'formula',
          title: 'Set relations',
          items: [
            { expr: 'n(A ∪ B) = n(A) + n(B) − n(A ∩ B)', note: 'The inclusion-exclusion principle for two sets — the workhorse of Venn diagram questions.' },
            { expr: 'n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A∩B) − n(B∩C) − n(C∩A) + n(A∩B∩C)', note: 'The three-set version. The final term is added back because it was subtracted three times.' },
            { expr: 'A set with n elements has 2ⁿ subsets', note: 'Of which 2ⁿ − 1 are proper subsets — each element is either in or out.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Types of set',
              'The null or empty set has no elements. A finite set has a countable number; an infinite set does not. Two sets are equal if they have exactly the same elements, and equivalent if they merely have the same number. The universal set contains everything under discussion, and the complement of A is everything in the universal set not in A.',
            ],
            [
              'Set operations',
              'Union contains everything in either set; intersection contains only what is in both; difference A − B contains what is in A but not B. De Morgan\'s laws state that the complement of a union is the intersection of the complements, and the complement of an intersection is the union of the complements.',
            ],
            [
              'Functions',
              'A relation from A to B is a function if every element of A maps to exactly one element of B. It is one-to-one or injective if distinct inputs give distinct outputs; onto or surjective if every element of B is used; and bijective if both, in which case an inverse exists. The domain is the set of permitted inputs, the codomain the target set, and the range the set of values actually taken.',
            ],
            [
              'Common function types',
              'Linear, of the form f(x) = mx + c, whose graph is a straight line. Quadratic, whose graph is a parabola, opening upward when the leading coefficient is positive. Exponential, growing by a constant factor. Logarithmic, its inverse. Modulus, which returns magnitude. Greatest integer, which returns the largest integer not exceeding x. Recognising the shape of each from its equation is what most function questions test.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'The HCF of two numbers is 12 and their LCM is 180. If one number is 36, find the other.',
      steps: [
        'For two numbers, HCF × LCM = product of the numbers.',
        '12 × 180 = 36 × x, so 2160 = 36x.',
        'x = 60.',
      ],
      answer: '60.',
    },
    {
      q: 'If x + 1/x = 5, find x³ + 1/x³.',
      steps: [
        'Use the identity x³ + 1/x³ = (x + 1/x)³ − 3(x + 1/x).',
        'Substituting k = 5 gives 125 − 15.',
        'So the value is 110. Note that x itself never has to be found.',
      ],
      answer: '110.',
    },
    {
      q: 'Find the sum and product of the roots of 2x² − 7x + 3 = 0 without solving it.',
      steps: [
        'For ax² + bx + c = 0, the sum of the roots is −b/a and the product is c/a.',
        'Here a = 2, b = −7 and c = 3.',
        'Sum = 7/2 and product = 3/2.',
      ],
      answer: 'Sum 3.5, product 1.5 — read directly off the coefficients.',
    },
    {
      q: 'The 5th term of an AP is 17 and the 9th is 29. Find the first term and the common difference.',
      steps: [
        'aₙ = a + (n − 1)d, so a + 4d = 17 and a + 8d = 29.',
        'Subtracting gives 4d = 12, so d = 3.',
        'Substituting back, a + 12 = 17, so a = 5.',
      ],
      answer: 'First term 5, common difference 3.',
    },
    {
      q: 'In how many ways can the letters of the word BANANA be arranged?',
      steps: [
        'There are 6 letters, so without repeats there would be 6! = 720 arrangements.',
        'But A occurs three times and N twice, and swapping identical letters produces no new arrangement.',
        'Divide by 3! for the A\'s and 2! for the N\'s: 720 ÷ (6 × 2) = 60.',
      ],
      answer: '60 arrangements.',
    },
    {
      q: 'Two dice are thrown. What is the probability of getting at least one six?',
      steps: [
        'Counting the favourable cases directly is fiddly, so use the complement.',
        'P(no six on either die) = (5/6) × (5/6) = 25/36.',
        'P(at least one six) = 1 − 25/36 = 11/36.',
      ],
      answer: '11/36 — the complement is almost always faster for "at least one".',
    },
    {
      q: 'In a class of 50, 30 study Hindi and 25 study English, and 10 study both. How many study neither?',
      steps: [
        'n(H ∪ E) = n(H) + n(E) − n(H ∩ E) = 30 + 25 − 10 = 45.',
        'That is the number studying at least one of the two.',
        'Those studying neither = 50 − 45 = 5.',
      ],
      answer: '5 students.',
    },
    {
      q: 'For what value of k does 4x² + kx + 9 = 0 have equal roots?',
      steps: [
        'Equal roots require the discriminant to be zero: b² − 4ac = 0.',
        'k² − 4 × 4 × 9 = 0, so k² = 144.',
        'k = ±12. Both values are valid, and a question asking for "the" value is usually seeking the positive one.',
      ],
      answer: 'k = ±12.',
    },
  ],

  practice: [
    {
      q: 'The HCF of two numbers is 8 and their LCM is 96. If one number is 32, the other is:',
      options: ['24', '48', '12', '16'],
      answer: 0,
      explain: 'HCF × LCM = product, so 8 × 96 = 32 × x, giving x = 24.',
    },
    {
      q: 'How many factors does 72 have?',
      options: ['8', '10', '12', '6'],
      answer: 2,
      explain: '72 = 2³ × 3², so the number of factors is (3+1)(2+1) = 12.',
    },
    {
      q: 'If a + b + c = 0, then a³ + b³ + c³ equals:',
      options: ['0', 'abc', '3abc', '−3abc'],
      answer: 2,
      explain: 'From a³ + b³ + c³ − 3abc = (a+b+c)(…), the right side vanishes when the sum is zero.',
    },
    {
      q: 'The discriminant of 3x² − 5x + 2 = 0 is:',
      options: ['1', '−1', '49', '25'],
      answer: 0,
      explain: 'b² − 4ac = 25 − 24 = 1. Being positive, the equation has two distinct real roots.',
    },
    {
      q: 'The sum of the first 20 natural numbers is:',
      options: ['180', '190', '200', '210'],
      answer: 3,
      explain: 'n(n+1)/2 = 20 × 21/2 = 210.',
    },
    {
      q: 'The sum to infinity of the GP 8, 4, 2, 1, … is:',
      options: ['15', '16', '14', 'Infinite'],
      answer: 1,
      explain: 'S∞ = a/(1 − r) = 8/(1 − 0.5) = 16, valid because |r| < 1.',
    },
    {
      q: 'The value of ⁸C₃ is:',
      options: ['336', '56', '112', '28'],
      answer: 1,
      explain: '8!/(3!5!) = (8 × 7 × 6)/(3 × 2 × 1) = 56. The value 336 is ⁸P₃, where order matters.',
    },
    {
      q: 'In how many ways can 5 people be seated around a circular table?',
      options: ['120', '60', '24', '20'],
      answer: 2,
      explain: '(n − 1)! = 4! = 24, since one position is fixed to remove rotational duplicates.',
    },
    {
      q: 'A card is drawn from a standard pack. The probability that it is a king is:',
      options: ['1/52', '1/13', '1/4', '4/13'],
      answer: 1,
      explain: 'There are 4 kings in 52 cards, so 4/52 = 1/13.',
    },
    {
      q: 'If log 2 = 0.301, the number of digits in 2⁵⁰ is:',
      options: ['14', '15', '16', '17'],
      answer: 2,
      explain: 'log(2⁵⁰) = 50 × 0.301 = 15.05, and the number of digits is one more than the integer part.',
    },
    {
      q: 'A set with 5 elements has how many subsets?',
      options: ['10', '25', '32', '31'],
      answer: 2,
      explain: '2ⁿ = 2⁵ = 32, of which 31 are proper subsets.',
    },
    {
      q: 'If the roots of x² + px + q = 0 are 3 and −4, then p and q are:',
      options: ['1 and −12', '−1 and 12', '1 and 12', '−1 and −12'],
      answer: 0,
      explain: 'Sum of roots = −p = −1, so p = 1; product = q = −12.',
    },
    {
      q: 'The 10th term of the AP 3, 7, 11, … is:',
      options: ['37', '39', '41', '43'],
      answer: 1,
      explain: 'aₙ = a + (n−1)d = 3 + 9 × 4 = 39.',
    },
    {
      q: 'For which value of k do the equations 2x + 3y = 5 and 4x + ky = 10 have infinitely many solutions?',
      options: ['3', '6', '9', '12'],
      answer: 1,
      explain: 'All three ratios must be equal: 2/4 = 3/k = 5/10, giving k = 6.',
    },
    {
      q: 'Which number is divisible by 11?',
      options: ['12331', '45672', '90816', '25817'],
      answer: 0,
      explain: 'The alternating digit sum of 12331 is 1 − 2 + 3 − 3 + 1 = 0, which is divisible by 11.',
    },
    {
      q: 'If x² + 1/x² = 27, then x + 1/x equals:',
      options: ['√29', '5', '√27', '29'],
      answer: 0,
      explain: '(x + 1/x)² = x² + 1/x² + 2 = 29, so x + 1/x = √29.',
    },
  ],

  faqs: [
    {
      q: 'How is this page different from the Quantitative Aptitude section?',
      a: 'Quantitative Aptitude covers arithmetic as exams apply it — percentages, profit and loss, time and work, ratios. This page covers the algebraic structure those topics rest on: equations, identities, progressions and counting. A candidate who has both can set up an unfamiliar arithmetic problem as an equation instead of hunting for a remembered shortcut, which is the difference between solving the questions you have practised and solving the ones you have not.',
    },
    {
      q: 'Do I need to memorise the algebraic identities?',
      a: 'Yes, and completely. SSC in particular asks them almost verbatim, and questions of the form "if x + 1/x = k, find x³ + 1/x³" appear in nearly every paper. There are about a dozen identities worth knowing cold, listed in the polynomials section, and they take an evening to fix and save minutes in every paper thereafter.',
    },
    {
      q: 'When can I use the sum and product of roots instead of solving a quadratic?',
      a: 'Whenever the question asks about the roots collectively rather than individually — their sum, their product, the sum of their squares, their reciprocals, or an equation whose roots are related to them. Since sum = −b/a and product = c/a can be read straight off the coefficients, these questions take seconds. Only solve the equation when you actually need a specific root.',
    },
    {
      q: 'How do I decide between a permutation and a combination?',
      a: 'Ask whether rearranging the chosen items gives a different outcome. Selecting a committee of three from ten is a combination, since the committee is the same whichever order you name them in. Awarding first, second and third prizes among ten is a permutation, since the order determines who gets what. The relation ⁿPᵣ = ⁿCᵣ × r! captures the difference: permutations are combinations multiplied by the arrangements of each selection.',
    },
    {
      q: 'What is the fastest way to handle "at least one" probability questions?',
      a: 'Take the complement. Computing the probability of at least one success usually means summing several cases, while the probability of no successes is a single product. Then subtract from 1. The two-dice example above takes one line by this route and several by direct counting, and the saving grows with the number of trials.',
    },
    {
      q: 'What is the difference between mutually exclusive and independent events?',
      a: 'Mutually exclusive events cannot both occur, so their intersection has probability zero — drawing a card that is both a king and a queen. Independent events can both occur, and one happening tells you nothing about the other — two separate coin tosses. They are not opposites but entirely different ideas, and two events of non-zero probability cannot be both, since exclusivity makes each highly informative about the other.',
    },
    {
      q: 'Why does the infinite GP formula need |r| < 1?',
      a: 'Because the sum converges only if the terms shrink towards zero. If |r| ≥ 1, each term is at least as large as the last in magnitude, so the partial sums grow without limit or oscillate, and no finite total exists. The formula a/(1 − r) is derived on the assumption that rⁿ tends to zero, which requires exactly that condition.',
    },
    {
      q: 'How should I approach word problems that I cannot see how to start?',
      a: 'Name the unknown explicitly in writing, then translate each sentence of the question into one equation. Count: if you have as many independent equations as unknowns, the problem is solvable and the rest is mechanical. Most failures in this topic are failures of translation rather than of algebra, and writing the variable definition down first removes most of them.',
    },
    {
      q: 'How much algebra appears in each exam?',
      a: 'Around a quarter to a third of JEE mathematics; four to seven questions in SSC CGL, where identities and simplification dominate; three to five in banking quantitative aptitude, often as quadratic comparison sets; five to eight in CAT, where it is the largest single area; and two to four in RRB.',
    },
    {
      q: 'Is it worth learning the standard sums of series?',
      a: 'Yes — the sums of the first n naturals, squares and cubes come up constantly, and each takes seconds to apply and a long time to derive under pressure. The result that the sum of the first n odd numbers is exactly n² is also worth knowing, both because it is asked and because it makes several otherwise tedious questions immediate.',
    },
  ],

  related: [
    { label: 'Geometry & Mensuration', to: '/study-material/mathematics/geometry-mensuration/' },
    { label: 'Trigonometry', to: '/study-material/mathematics/trigonometry/' },
    { label: 'Number System', to: '/study-material/quantitative-aptitude/number-system/' },
    { label: 'Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
    { label: 'All Mathematics', to: '/study-material/mathematics/' },
  ],
}
