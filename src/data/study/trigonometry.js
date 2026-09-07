/**
 * Trigonometry and Calculus —
 * /study-material/mathematics/trigonometry/
 *
 * Trigonometric ratios and identities, heights and distances, and the
 * statistics and introductory calculus that complete the school mathematics
 * competitive exams draw on. Formula-first, like the other mathematics pages.
 */
export default {
  subject: 'mathematics',
  subjectName: 'Mathematics',
  slug: 'trigonometry',
  title: 'Trigonometry & Calculus',
  seoTitle: 'Trigonometry for Competitive Exams | Identities, Heights, Calculus & Practice',
  metaDescription:
    'Complete trigonometry and calculus study material for SSC, CAT, JEE and state exams — trigonometric ratios and the standard table, identities.',
  readMinutes: 23,
  lead: [
    'Trigonometry is the most mechanical topic in the quantitative syllabus. There is a standard table of five angles, three Pythagorean identities and a short list of compound-angle formulas, and virtually every question is an application of one of them. Once those are secure, the topic becomes a reliable source of marks rather than a source of dread.',
    'Heights and distances is included because it is trigonometry in its original form and because SSC asks it every year. Statistics and introductory calculus complete the page — the first because measures of central tendency appear in every data interpretation set, the second because differentiation and integration are the last substantial school topic that entrance papers require.',
  ],

  weightage: [
    { exam: 'SSC CGL Tier 1 and 2', count: '3–5 questions', note: 'Identities and heights and distances, both asked in a standard form year after year.' },
    { exam: 'JEE Main / Advanced', count: '20–25% of the mathematics paper', note: 'Trigonometry plus calculus, of which calculus is by far the larger part.' },
    { exam: 'CAT Quantitative Ability', count: '1–2 questions', note: 'Trigonometry is a small area in CAT; geometry and algebra dominate.' },
    { exam: 'Banking Quantitative Aptitude', count: '0–1 questions', note: 'Rarely asked directly; statistics appears within data interpretation sets.' },
    { exam: 'RRB NTPC / Group D', count: '1–2 questions', note: 'The standard table and simple identity questions.' },
  ],

  contents: [
    { icon: 'target', title: 'Ratios and the table', sub: 'The five angles to memorise', href: '#ratios' },
    { icon: 'refresh', title: 'Identities', sub: 'The three Pythagorean relations', href: '#identities' },
    { icon: 'globe', title: 'Allied and compound angles', sub: 'Signs, sums and multiples', href: '#angles' },
    { icon: 'layers', title: 'Triangle rules', sub: 'Sine, cosine and inverse functions', href: '#triangle' },
    { icon: 'search', title: 'Heights and distances', sub: 'Elevation and depression', href: '#heights' },
    { icon: 'chart', title: 'Statistics', sub: 'Central tendency and dispersion', href: '#statistics' },
    { icon: 'play', title: 'Calculus basics', sub: 'Limits, derivatives, integrals', href: '#calculus' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'ratios',
      heading: 'Ratios and the table',
      eyebrow: 'The five angles to memorise',
      intro:
        'Six ratios, defined from a right triangle, and one table of five angles. This is the entire foundation of the subject, and it must be recallable instantly.',
      blocks: [
        {
          type: 'formula',
          title: 'The six ratios',
          items: [
            { expr: 'sin θ = opposite / hypotenuse', note: 'And cosec θ is its reciprocal, hypotenuse / opposite.' },
            { expr: 'cos θ = adjacent / hypotenuse', note: 'And sec θ is its reciprocal, hypotenuse / adjacent.' },
            { expr: 'tan θ = opposite / adjacent = sin θ / cos θ', note: 'And cot θ is its reciprocal, cos θ / sin θ.' },
          ],
        },
        {
          type: 'table',
          caption: 'The standard table',
          head: ['Angle', 'sin and cos', 'tan'],
          rows: [
            ['0°', 'sin 0, cos 1', 'tan 0'],
            ['30°', 'sin ½, cos √3/2', 'tan 1/√3'],
            ['45°', 'sin 1/√2, cos 1/√2', 'tan 1'],
            ['60°', 'sin √3/2, cos ½', 'tan √3'],
            ['90°', 'sin 1, cos 0', 'tan undefined'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'How to reconstruct the table',
              'Write 0, 1, 2, 3, 4 in a row, divide each by 4, and take the square root of each — that gives the sine values 0, ½, 1/√2, √3/2, 1. The cosine values are the same sequence reversed. The tangent is the sine divided by the cosine. Reconstructing it this way takes fifteen seconds and is far more reliable than memorising twelve separate fractions.',
            ],
            [
              'Ranges and signs',
              'Sine and cosine always lie between −1 and 1, so any question producing a value outside that range contains an error. Secant and cosecant have magnitude at least 1. Tangent and cotangent take all real values. Sine, cosecant, tangent and cotangent are odd functions; cosine and secant are even.',
            ],
            [
              'Degrees and radians',
              'π radians equal 180°, so one radian is about 57.3° and to convert from degrees multiply by π/180. Radians are the natural unit in calculus, where the derivative of sine is cosine only if the angle is in radians. Aptitude papers use degrees; JEE uses both.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'identities',
      heading: 'Identities',
      eyebrow: 'The three Pythagorean relations',
      intro:
        'Three identities, all derived from Pythagoras, plus the complementary-angle relations. Between them they solve almost every simplification question SSC sets.',
      blocks: [
        {
          type: 'formula',
          title: 'The Pythagorean identities',
          items: [
            { expr: 'sin²θ + cos²θ = 1', note: 'The fundamental identity, and the one from which the other two follow.' },
            { expr: '1 + tan²θ = sec²θ', note: 'Obtained by dividing the first identity by cos²θ.' },
            { expr: '1 + cot²θ = cosec²θ', note: 'Obtained by dividing the first by sin²θ.' },
            { expr: 'sin θ · cosec θ = cos θ · sec θ = tan θ · cot θ = 1', note: 'The three reciprocal pairs.' },
          ],
        },
        {
          type: 'formula',
          title: 'Complementary angles',
          items: [
            { expr: 'sin(90° − θ) = cos θ and cos(90° − θ) = sin θ', note: 'Which is why the two are called co-functions.' },
            { expr: 'tan(90° − θ) = cot θ and cot(90° − θ) = tan θ', note: '' },
            { expr: 'sec(90° − θ) = cosec θ and cosec(90° − θ) = sec θ', note: 'The pattern throughout: the function becomes its co-function.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'How simplification questions work',
              'A typical SSC question gives an expression such as sin⁶θ + cos⁶θ and asks for its value in terms of sin θ cos θ. The method is always the same: convert everything to sines and cosines, use sin²θ + cos²θ = 1 to eliminate, and factorise. Recognising that a⁶ + b⁶ is a sum of cubes of squares turns that particular question into a two-line answer.',
            ],
            [
              'The substitutions worth knowing',
              'If sin θ + cos θ = k, then squaring gives 1 + 2 sin θ cos θ = k², so sin θ cos θ = (k² − 1)/2. The same trick — square the given expression and use the fundamental identity — handles most of this question family, exactly as x + 1/x = k does in algebra.',
            ],
            [
              'Values worth recognising',
              'sin θ cos θ has a maximum of ½, at θ = 45°. sin θ + cos θ has a maximum of √2, again at 45°. a sin θ + b cos θ lies between −√(a² + b²) and +√(a² + b²). These bounds answer the maximum-and-minimum questions without calculus.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'angles',
      heading: 'Allied and compound angles',
      eyebrow: 'Signs, sums and multiples',
      intro:
        'Extending the ratios beyond the first quadrant, and combining two angles into one. This is the JEE half of trigonometry, and it is largely a matter of a sign rule plus six formulas.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The quadrant sign rule',
              'All ratios are positive in the first quadrant; only sine and cosecant in the second; only tangent and cotangent in the third; only cosine and secant in the fourth. The mnemonic is ASTC — All, Sine, Tangent, Cosine — read anticlockwise from the first quadrant.',
            ],
            [
              'Allied angles',
              'For angles of the form 90° ± θ and 270° ± θ, the function changes to its co-function; for 180° ± θ and 360° ± θ it does not. The sign in each case is determined by the quadrant in which the resulting angle lies, using the ASTC rule. Those two statements handle every allied-angle conversion.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Compound and multiple angles',
          items: [
            { expr: 'sin(A ± B) = sin A cos B ± cos A sin B', note: 'The signs match on both sides.' },
            { expr: 'cos(A ± B) = cos A cos B ∓ sin A sin B', note: 'The signs are opposite on the two sides — the point most often forgotten.' },
            { expr: 'tan(A ± B) = (tan A ± tan B) / (1 ∓ tan A tan B)', note: '' },
            { expr: 'sin 2A = 2 sin A cos A', note: 'And sin 2A = 2 tan A / (1 + tan²A) in terms of the tangent.' },
            { expr: 'cos 2A = cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A', note: 'Three equivalent forms; which to use depends on what the question gives.' },
            { expr: 'tan 2A = 2 tan A / (1 − tan²A)', note: '' },
            { expr: 'sin 3A = 3 sin A − 4 sin³A; cos 3A = 4 cos³A − 3 cos A', note: 'The triple-angle formulas, worth knowing for JEE.' },
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'triangle',
      heading: 'Triangle rules',
      eyebrow: 'Sine, cosine and inverse functions',
      intro:
        'Trigonometry applied to triangles that are not right-angled, plus the inverse functions that answer "what angle has this ratio".',
      blocks: [
        {
          type: 'formula',
          title: 'Solving any triangle',
          items: [
            { expr: 'a/sin A = b/sin B = c/sin C = 2R', note: 'The sine rule, where R is the circumradius. Use it when you have two angles and a side, or two sides and a non-included angle.' },
            { expr: 'a² = b² + c² − 2bc cos A', note: 'The cosine rule. Use it when you have three sides, or two sides and the included angle. With A = 90° it reduces to Pythagoras.' },
            { expr: 'Area = ½ab sin C', note: 'Two sides and the included angle — the trigonometric companion to ½ × base × height.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Which rule to use',
              'Count what you are given. Two angles and any side, or two sides and an angle opposite one of them, means the sine rule. Three sides, or two sides and the angle between them, means the cosine rule. Since the angles of a triangle sum to 180°, knowing two gives the third for free.',
            ],
            [
              'Inverse trigonometric functions',
              'sin⁻¹x answers the question "which angle has sine x". To make it a function, the range is restricted — to [−90°, 90°] for the inverse sine and inverse tangent, and to [0°, 180°] for the inverse cosine. The domain of the inverse sine and cosine is [−1, 1], since no angle has a sine outside that range. Note that sin⁻¹x means the inverse function and not 1/sin x, which is a standard confusion.',
            ],
            [
              'Trigonometric equations',
              'An equation such as sin θ = ½ has infinitely many solutions, since sine is periodic. The general solution for sin θ = sin α is θ = nπ + (−1)ⁿα; for cos θ = cos α it is θ = 2nπ ± α; and for tan θ = tan α it is θ = nπ + α, with n any integer. Aptitude papers ask for solutions within a stated range, so find the principal value and then add the period repeatedly.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'heights',
      heading: 'Heights and distances',
      eyebrow: 'Elevation and depression',
      intro:
        'The original application of trigonometry, and one that SSC asks in an almost unvarying form. Nearly every question is a right triangle with one known side and one known angle.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Angle of elevation and depression',
              'The angle of elevation is measured upward from the horizontal to the line of sight; the angle of depression is measured downward. The angle of depression from a tower top to an object on the ground equals the angle of elevation from that object to the tower top, because the two are alternate angles between parallel horizontals. Using that equality is usually the first step of a solution.',
            ],
            [
              'The standard method',
              'Draw the figure with the vertical object and the horizontal ground. Mark the given angle at the correct vertex and the given distance on the correct side. Then choose the ratio that connects what you know to what you want: tangent when both sides are horizontal and vertical, sine or cosine when the hypotenuse is involved. Most errors here come from marking the angle at the wrong point.',
            ],
            [
              'The results worth recognising',
              'If the angle of elevation is 45°, the height equals the horizontal distance, because tan 45° = 1. If it is 60°, the height is √3 times the distance. If it is 30°, the height is the distance divided by √3. Recognising these three saves working out the ratio each time.',
            ],
            [
              'Two-angle problems',
              'The common harder form gives the elevation from two points on the same line and asks for the height or the separation. Set up one equation from each triangle, both containing the unknown height, and eliminate. The answer usually falls out as a difference of two cotangents, and the arithmetic is easier if the height is kept as the unknown throughout.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'The relations used',
          items: [
            { expr: 'tan θ = height / horizontal distance', note: 'The workhorse of the topic.' },
            { expr: 'Height = distance × tan θ', note: 'And distance = height ÷ tan θ, which is height × cot θ.' },
            { expr: 'For elevations θ₁ and θ₂ from two points d apart: h = d / (cot θ₂ − cot θ₁)', note: 'The standard two-point result, with θ₁ the larger angle from the nearer point.' },
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'statistics',
      heading: 'Statistics',
      eyebrow: 'Central tendency and dispersion',
      intro:
        'A short block that appears both as direct questions and inside every data interpretation set, since a DI question about an average is a statistics question with a chart attached.',
      blocks: [
        {
          type: 'formula',
          title: 'Measures of central tendency and spread',
          items: [
            { expr: 'Mean = sum of observations ÷ number of observations', note: 'The arithmetic mean. It uses every value, which makes it sensitive to outliers.' },
            { expr: 'Median = the middle value when arranged in order', note: 'For an even number of observations, the average of the two middle ones. It is unaffected by extreme values, which is why income is usually reported as a median.' },
            { expr: 'Mode = the most frequently occurring value', note: 'A data set may have no mode, one mode or several.' },
            { expr: 'Mode ≈ 3 × Median − 2 × Mean', note: 'The empirical relation, approximately true for a moderately skewed distribution.' },
            { expr: 'Range = largest value − smallest value', note: 'The crudest measure of spread, using only two observations.' },
            { expr: 'Variance = mean of the squared deviations from the mean; SD = √variance', note: 'Standard deviation is in the same units as the data, which is why it is preferred to variance for reporting.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Which average to use',
              'The mean when the data is symmetric and every value should count. The median when the data is skewed or contains outliers — a single very large income distorts a mean and leaves a median untouched. The mode when the data is categorical, or when the most common value is what matters, as in shoe sizes stocked by a shop.',
            ],
            [
              'Weighted mean',
              'When observations carry different importance, multiply each by its weight, sum, and divide by the total weight. This is what a percentage aggregate across subjects with different marks is, and it explains why the simple average of two percentages is usually wrong.',
            ],
            [
              'Effect of transformations',
              'Adding a constant to every observation shifts the mean, median and mode by that constant but leaves the range, variance and standard deviation unchanged. Multiplying every observation by a constant multiplies all the measures of centre by it and multiplies the standard deviation by its magnitude, while the variance is multiplied by its square. Questions test this directly.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'calculus',
      heading: 'Calculus basics',
      eyebrow: 'Limits, derivatives, integrals',
      intro:
        'The last substantial school topic, and the largest single block in JEE mathematics. Aptitude papers rarely touch it, so this section is a compact reference rather than a full treatment.',
      blocks: [
        {
          type: 'formula',
          title: 'Differentiation',
          items: [
            { expr: 'd/dx (xⁿ) = n xⁿ⁻¹', note: 'The power rule, and the one used most.' },
            { expr: 'd/dx (sin x) = cos x; d/dx (cos x) = −sin x', note: 'Valid only when x is in radians — the reason radians are the natural unit.' },
            { expr: 'd/dx (eˣ) = eˣ; d/dx (ln x) = 1/x', note: 'The exponential is its own derivative, which is what makes e the natural base.' },
            { expr: 'Product rule: d/dx(uv) = u\'v + uv\'', note: '' },
            { expr: 'Quotient rule: d/dx(u/v) = (u\'v − uv\')/v²', note: 'Note the minus sign and the order — reversing them is the standard error.' },
            { expr: 'Chain rule: d/dx f(g(x)) = f\'(g(x)) · g\'(x)', note: 'Differentiate the outer function, then multiply by the derivative of the inner.' },
          ],
        },
        {
          type: 'formula',
          title: 'Integration',
          items: [
            { expr: '∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, for n ≠ −1', note: 'The reverse of the power rule; the exception n = −1 gives the logarithm.' },
            { expr: '∫ (1/x) dx = ln|x| + C', note: 'The exceptional case.' },
            { expr: '∫ sin x dx = −cos x + C; ∫ cos x dx = sin x + C', note: 'Note the sign on the first.' },
            { expr: '∫ eˣ dx = eˣ + C', note: '' },
            { expr: 'Definite integral from a to b = F(b) − F(a)', note: 'The fundamental theorem of calculus, where F is any antiderivative. Geometrically it is the signed area under the curve.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'What a derivative means',
              'The instantaneous rate of change of a quantity, and geometrically the slope of the tangent to its graph. Velocity is the derivative of displacement with respect to time, and acceleration the derivative of velocity — which is why calculus and mechanics developed together.',
            ],
            [
              'Maxima and minima',
              'At a maximum or minimum of a smooth function the derivative is zero. To distinguish them, take the second derivative: negative indicates a maximum, positive a minimum, and zero requires further investigation. This is the standard method for optimisation questions in JEE.',
            ],
            [
              'What an integral means',
              'Two things that turn out to be the same. It is the antiderivative — the function whose derivative is the integrand — and it is the area under a curve. The fundamental theorem of calculus is precisely the statement that these coincide, which is why areas can be computed by reversing differentiation.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'If sin θ = 3/5, find cos θ and tan θ for an acute angle θ.',
      steps: [
        'Use sin²θ + cos²θ = 1, so cos²θ = 1 − 9/25 = 16/25.',
        'For an acute angle the cosine is positive, so cos θ = 4/5.',
        'tan θ = sin θ / cos θ = (3/5)/(4/5) = 3/4. This is simply the 3-4-5 triangle.',
      ],
      answer: 'cos θ = 4/5 and tan θ = 3/4.',
    },
    {
      q: 'Simplify (1 − sin²θ)(1 + tan²θ).',
      steps: [
        '1 − sin²θ = cos²θ, from the fundamental identity.',
        '1 + tan²θ = sec²θ, which is 1/cos²θ.',
        'The product is cos²θ × 1/cos²θ = 1.',
      ],
      answer: '1.',
    },
    {
      q: 'If sin θ + cos θ = √2, find sin θ cos θ.',
      steps: [
        'Square both sides: sin²θ + cos²θ + 2 sin θ cos θ = 2.',
        'The first two terms sum to 1, so 1 + 2 sin θ cos θ = 2.',
        '2 sin θ cos θ = 1, so sin θ cos θ = ½ — which is its maximum, occurring at θ = 45°.',
      ],
      answer: '½.',
    },
    {
      q: 'The angle of elevation of a tower top from a point 30 m away is 60°. Find the height.',
      steps: [
        'Draw the right triangle: the tower is vertical, the 30 m is horizontal, and the angle is at the observer.',
        'tan 60° = height / 30, and tan 60° = √3.',
        'Height = 30√3 ≈ 51.96 metres.',
      ],
      answer: '30√3 metres, about 52 m.',
    },
    {
      q: 'Find the value of sin 75° using a compound angle formula.',
      steps: [
        'Write 75° as 45° + 30°, both of which are in the standard table.',
        'sin(A + B) = sin A cos B + cos A sin B = sin45 cos30 + cos45 sin30.',
        '= (1/√2)(√3/2) + (1/√2)(1/2) = (√3 + 1)/(2√2).',
      ],
      answer: '(√3 + 1)/(2√2), approximately 0.966.',
    },
    {
      q: 'The mean of 10 observations is 25. If one observation of 30 is replaced by 50, find the new mean.',
      steps: [
        'The original total is 10 × 25 = 250.',
        'Replacing 30 by 50 increases the total by 20, giving 270.',
        'New mean = 270/10 = 27.',
      ],
      answer: '27.',
    },
    {
      q: 'A constant 5 is added to every observation in a data set. What happens to the mean and the standard deviation?',
      steps: [
        'The mean is the average of the values, so adding 5 to each raises the mean by exactly 5.',
        'The standard deviation measures spread about the mean, and every value and the mean have shifted by the same amount.',
        'The deviations are therefore unchanged, so the standard deviation is unaffected.',
      ],
      answer: 'The mean rises by 5; the standard deviation does not change.',
    },
    {
      q: 'Find the derivative of x³ + 2x² − 5x + 7, and the value of x where it is stationary.',
      steps: [
        'Apply the power rule term by term: 3x² + 4x − 5.',
        'A stationary point requires the derivative to be zero, so 3x² + 4x − 5 = 0.',
        'By the quadratic formula, x = (−4 ± √(16 + 60))/6 = (−4 ± √76)/6.',
      ],
      answer: 'Derivative 3x² + 4x − 5; stationary where x = (−4 ± √76)/6.',
    },
  ],

  practice: [
    {
      q: 'The value of sin 30° is:',
      options: ['1/2', '√3/2', '1/√2', '1'],
      answer: 0,
      explain: 'cos 30° is √3/2 and sin 45° is 1/√2.',
    },
    {
      q: 'sin²θ + cos²θ equals:',
      options: ['0', 'sec²θ', 'tan²θ', '1'],
      answer: 3,
      explain: 'The fundamental identity, from which 1 + tan²θ = sec²θ and 1 + cot²θ = cosec²θ both follow.',
    },
    {
      q: 'tan 45° equals:',
      options: ['0', '1/√3', '1', '√3'],
      answer: 2,
      explain: 'Which is why an angle of elevation of 45° means the height equals the horizontal distance.',
    },
    {
      q: 'cos(90° − θ) equals:',
      options: ['cos θ', '−cos θ', 'tan θ', 'sin θ'],
      answer: 3,
      explain: 'Complementary angles interchange a function with its co-function.',
    },
    {
      q: 'The maximum value of sin θ cos θ is:',
      options: ['1', '2', '√2', '1/2'],
      answer: 3,
      explain: 'Since sin θ cos θ = ½ sin 2θ, and the sine has maximum 1 — occurring at θ = 45°.',
    },
    {
      q: 'In any triangle, a/sin A = b/sin B = c/sin C is known as the:',
      options: ['Cosine rule', 'Sine rule', 'Projection rule', 'Tangent rule'],
      answer: 1,
      explain: 'The common value equals 2R, twice the circumradius.',
    },
    {
      q: 'sin 2A equals:',
      options: ['2 sin A', 'sin²A − cos²A', '2 sin A cos A', '2 cos A'],
      answer: 2,
      explain: 'And cos 2A has three equivalent forms: cos²A − sin²A, 2cos²A − 1 and 1 − 2sin²A.',
    },
    {
      q: 'If the angle of elevation of the top of a tower from a point is 45°, then the height of the tower is:',
      options: ['Twice the distance', 'Equal to the distance', 'Half the distance', '√3 times the distance'],
      answer: 1,
      explain: 'Because tan 45° = 1, so height equals horizontal distance.',
    },
    {
      q: 'The median of 3, 7, 9, 4, 11, 6 is:',
      options: ['6', '6.5', '7', '9'],
      answer: 1,
      explain: 'Arranged in order: 3, 4, 6, 7, 9, 11. With six values, the median is the average of the third and fourth, so (6 + 7)/2.',
    },
    {
      q: 'Which measure of central tendency is least affected by extreme values?',
      options: ['Mean', 'Median', 'Range', 'Standard deviation'],
      answer: 1,
      explain: 'Which is why income and house prices are usually reported as medians rather than means.',
    },
    {
      q: 'If every observation is multiplied by 3, the standard deviation is:',
      options: ['Unchanged', 'Multiplied by 3', 'Multiplied by 9', 'Divided by 3'],
      answer: 1,
      explain: 'The variance is multiplied by 9, and the standard deviation is its square root.',
    },
    {
      q: 'The derivative of x⁵ is:',
      options: ['5x⁴', 'x⁴', '5x⁶', 'x⁶/6'],
      answer: 0,
      explain: 'The power rule, d/dx(xⁿ) = nxⁿ⁻¹.',
    },
    {
      q: '∫ cos x dx equals:',
      options: ['−sin x + C', 'sin x + C', 'cos x + C', '−cos x + C'],
      answer: 1,
      explain: 'Integration reverses differentiation, and the derivative of sin x is cos x. Note that ∫ sin x dx = −cos x + C.',
    },
    {
      q: 'One radian is approximately equal to:',
      options: ['45°', '57.3°', '60°', '90°'],
      answer: 1,
      explain: 'Since π radians equal 180°, one radian is 180/π degrees.',
    },
    {
      q: 'In which quadrant are all trigonometric ratios positive?',
      options: ['First', 'Second', 'Third', 'Fourth'],
      answer: 0,
      explain: 'By the ASTC rule: All in the first, Sine in the second, Tangent in the third, Cosine in the fourth.',
    },
    {
      q: 'The empirical relation between mean, median and mode is:',
      options: ['Mode = 2 Median − Mean', 'Mode = 3 Median − 2 Mean', 'Mode = Mean − Median', 'Mode = 2 Mean − Median'],
      answer: 1,
      explain: 'It holds approximately for a moderately skewed distribution.',
    },
  ],

  faqs: [
    {
      q: 'What is the fastest way to remember the trigonometric table?',
      a: 'Reconstruct it rather than memorise it. Write 0, 1, 2, 3, 4 across the five standard angles, divide each by 4, and take square roots — that gives the sines: 0, ½, 1/√2, √3/2, 1. The cosines are the same list reversed, and the tangents are sine over cosine. It takes fifteen seconds and never fails, whereas twelve memorised fractions do fail under pressure.',
    },
    {
      q: 'How do trigonometric simplification questions actually work?',
      a: 'Almost always by converting everything to sines and cosines, then using sin²θ + cos²θ = 1 to eliminate. The other standard move is squaring a given expression: if sin θ + cos θ = k, squaring immediately gives sin θ cos θ. That single technique handles a large family of SSC questions, and it is the exact analogue of the x + 1/x trick in algebra.',
    },
    {
      q: 'When do I use the sine rule and when the cosine rule?',
      a: 'Count what you have. Two angles and a side, or two sides and an angle opposite one of them, means the sine rule. Three sides, or two sides and the angle between them, means the cosine rule. Since the angles sum to 180°, two angles give you the third free, which often converts a cosine-rule situation into a sine-rule one.',
    },
    {
      q: 'Why is the angle of depression equal to the corresponding angle of elevation?',
      a: 'Because the horizontal at the top of the tower and the horizontal at the ground are parallel, and the line of sight is a transversal cutting them. The angle of depression at the top and the angle of elevation at the bottom are therefore alternate interior angles, and alternate angles between parallels are equal. Recognising this is usually the first step in solving the problem.',
    },
    {
      q: 'Why must angles be in radians for calculus?',
      a: 'Because the derivative of sin x equals cos x only when x is in radians. In degrees an extra factor of π/180 appears, since the underlying limit of sin x over x as x approaches zero equals 1 only in radian measure. Radians are defined by arc length over radius, which is what makes them the natural unit for anything involving rates of change.',
    },
    {
      q: 'When should I report a median rather than a mean?',
      a: 'When the data is skewed or contains outliers. A single very large value pulls the mean substantially while leaving the median untouched, which is why incomes, house prices and waiting times are conventionally reported as medians. The mean is preferable for symmetric data, because it uses every observation rather than only the middle one.',
    },
    {
      q: 'What happens to the standard deviation if I add a constant to every value?',
      a: 'Nothing. The standard deviation measures spread about the mean, and adding a constant shifts every value and the mean by the same amount, so every deviation is unchanged. Multiplying by a constant is different: it multiplies the standard deviation by the magnitude of that constant and the variance by its square. This pair of results is asked directly.',
    },
    {
      q: 'How much calculus do I actually need?',
      a: 'For JEE, a great deal — differentiation, integration, applications to maxima and minima, areas and differential equations form the largest single block of the paper. For SSC, banking and CAT, essentially none: those papers do not test calculus. The section here is a compact reference for the first group and a completeness note for the second.',
    },
    {
      q: 'Is trigonometry worth preparing for CAT?',
      a: 'Only lightly. CAT asks one or two trigonometry questions at most, and geometry and algebra dominate the quantitative section. Learn the standard table, the three identities and the heights-and-distances method, and spend the remaining time on the higher-yield areas. For SSC the calculation is different — three to five questions a paper makes it worth full preparation.',
    },
    {
      q: 'How many questions come from this page?',
      a: 'Three to five in SSC CGL, split between identities and heights and distances; twenty to twenty-five per cent of JEE mathematics once calculus is included, and calculus is much the larger half; one to two in CAT; one to two in RRB; and in banking, statistics appears inside data interpretation sets rather than as separate questions.',
    },
  ],

  related: [
    { label: 'Algebra', to: '/study-material/mathematics/algebra/' },
    { label: 'Geometry & Mensuration', to: '/study-material/mathematics/geometry-mensuration/' },
    { label: 'Physics', to: '/study-material/physics/' },
    { label: 'Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
    { label: 'All Mathematics', to: '/study-material/mathematics/' },
  ],
}
