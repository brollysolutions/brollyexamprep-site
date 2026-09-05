/**
 * NDA & NA — starter mock.
 *
 * The written exam is two papers: Mathematics (120 questions, 300 marks) and
 * the General Ability Test (150 questions, 600 marks), 270 questions and 900
 * marks in total. Both carry a one-third negative penalty. This set samples
 * Mathematics, English and General Science in roughly that proportion.
 */
export default {
  slug: 'nda',
  cat: 'Defence',
  exam: 'NDA & NA',
  title: 'NDA Mock Test',
  fullSpec: 'Full exam: 270 questions · 150 min per paper · 900 marks',
  minutes: 25,
  marks: 2.5,
  negative: 0.83,
  pattern:
    'Paper 1 is Mathematics — 120 questions for 300 marks. Paper 2 is the General Ability Test — 50 English and 100 General Knowledge questions for 600 marks. Each paper runs 2 hours 30 minutes, and a wrong answer costs one third of the marks for that question.',
  sections: [
    { id: 'maths', name: 'Mathematics' },
    { id: 'english', name: 'English' },
    { id: 'science', name: 'General Science & GK' },
  ],
  questions: [
    {
      section: 'maths',
      q: 'If sin θ = 3/5 and θ is acute, what is cos θ?',
      options: ['3/4', '4/5', '5/4', '5/3'],
      answer: 1,
      explain:
        'From sin²θ + cos²θ = 1, cos²θ = 1 − 9/25 = 16/25, so cos θ = 4/5. The positive root is taken because θ is acute.',
    },
    {
      section: 'maths',
      q: 'What is the value of log₁₀ 1000?',
      options: ['2', '3', '10', '100'],
      answer: 1,
      explain: '1000 = 10³, so the logarithm to base 10 is 3.',
    },
    {
      section: 'maths',
      q: 'What are the roots of x² − 5x + 6 = 0?',
      options: ['1 and 6', '2 and 3', '−2 and −3', '−1 and −6'],
      answer: 1,
      explain:
        'The equation factors as (x − 2)(x − 3) = 0. The roots 2 and 3 add to 5 and multiply to 6, matching the coefficients.',
    },
    {
      section: 'maths',
      q: 'What is the derivative of x³ with respect to x?',
      options: ['x²', '3x²', '3x', 'x⁴/4'],
      answer: 1,
      explain: 'By the power rule, d/dx (xⁿ) = n·xⁿ⁻¹, so the derivative of x³ is 3x².',
    },
    {
      section: 'maths',
      q: 'Evaluate ∫ 2x dx.',
      options: ['2x² + C', 'x² + C', 'x²/2 + C', '2 + C'],
      answer: 1,
      explain: 'Integrating gives 2 · x²/2 = x², plus the constant of integration.',
    },
    {
      section: 'maths',
      q: 'If A = {1, 2, 3} and B = {3, 4}, what is A ∩ B?',
      options: ['{3}', '{1, 2}', 'The empty set', '{1, 2, 3, 4}'],
      answer: 0,
      explain: 'The intersection holds only the elements common to both sets, and 3 is the only one.',
    },
    {
      section: 'maths',
      q: 'What is the determinant of the matrix [[2, 3], [4, 5]]?',
      options: ['−2', '2', '22', '−22'],
      answer: 0,
      explain: 'For a 2×2 matrix the determinant is ad − bc = (2 × 5) − (3 × 4) = 10 − 12 = −2.',
    },
    {
      section: 'maths',
      q: 'In how many ways can the letters of the word CAT be arranged?',
      options: ['3', '6', '9', '27'],
      answer: 1,
      explain: 'Three distinct letters can be arranged in 3! = 6 ways.',
    },
    {
      section: 'maths',
      q: 'A vector has components (3, 4). What is its magnitude?',
      options: ['3', '4', '5', '7'],
      answer: 2,
      explain: 'The magnitude is √(3² + 4²) = √25 = 5.',
    },
    {
      section: 'maths',
      q: 'What is the sum of the first 20 natural numbers?',
      options: ['180', '200', '210', '220'],
      answer: 2,
      explain: 'The sum is n(n + 1)/2 = 20 × 21 / 2 = 210.',
    },
    {
      section: 'maths',
      q: 'What is the value of tan 45° + cot 45°?',
      options: ['0', '1', '2', '√2'],
      answer: 2,
      explain: 'Both tan 45° and cot 45° equal 1, so the sum is 2.',
    },
    {
      section: 'maths',
      q: 'What is the slope of the line 2x + 3y = 6?',
      options: ['2/3', '−2/3', '3/2', '−3/2'],
      answer: 1,
      explain:
        'Rearranging gives y = −(2/3)x + 2, so the slope is −2/3.',
    },

    {
      section: 'english',
      q: 'Choose the word most opposite in meaning to EPHEMERAL.',
      options: ['Brief', 'Everlasting', 'Fragile', 'Sudden'],
      answer: 1,
      explain: 'Ephemeral means lasting a very short time, so its antonym is everlasting.',
    },
    {
      section: 'english',
      q: 'Choose the word closest in meaning to CANDID.',
      options: ['Rude', 'Cautious', 'Frank', 'Secretive'],
      answer: 2,
      explain: 'Candid means truthful and straightforward, so "frank" is the closest synonym.',
    },
    {
      section: 'english',
      q: 'Find the error: "Each of the boys have submitted their assignment."',
      options: ['Each of the boys', 'have submitted', 'their assignment', 'No error'],
      answer: 1,
      explain: '"Each" is singular and takes a singular verb, so the sentence needs "has submitted".',
    },
    {
      section: 'english',
      q: 'What does the idiom "a blessing in disguise" mean?',
      options: [
        'An unexpected gift',
        'A promise that is never kept',
        'A hidden threat',
        'Something that seemed bad but turned out to be good',
      ],
      answer: 3,
      explain: 'The idiom describes a misfortune that eventually produces an advantage.',
    },
    {
      section: 'english',
      q: 'Fill in the blank: "He was accused ______ theft."',
      options: ['of', 'with', 'about', 'for'],
      answer: 0,
      explain: '"Accuse" takes the preposition "of". "Charge", by contrast, takes "with".',
    },
    {
      section: 'english',
      q: 'One word for "a speech made without preparation".',
      options: ['Eloquent', 'Extempore', 'Verbose', 'Soliloquy'],
      answer: 1,
      explain:
        'An extempore speech is delivered on the spur of the moment. A soliloquy is a speech made to oneself, usually on stage.',
    },

    {
      section: 'science',
      q: 'What is the SI unit of force?',
      options: ['Watt', 'Joule', 'Newton', 'Pascal'],
      answer: 2,
      explain:
        'Force is measured in newtons, where one newton accelerates one kilogram at one metre per second squared. The joule measures energy and the pascal pressure.',
    },
    {
      section: 'science',
      q: 'Which is the hardest naturally occurring substance?',
      options: ['Topaz', 'Quartz', 'Corundum', 'Diamond'],
      answer: 3,
      explain: 'Diamond sits at 10 on the Mohs scale, the top of the scale. Corundum is 9 and topaz 8.',
    },
    {
      section: 'science',
      q: 'The Chief of the Army Staff of the Indian Army holds which rank?',
      options: ['General', 'Field Marshal', 'Brigadier', 'Lieutenant General'],
      answer: 0,
      explain:
        'The serving Chief of the Army Staff is a four-star General. Field Marshal is a ceremonial five-star rank conferred only twice in India, on Sam Manekshaw and K. M. Cariappa.',
    },
    {
      section: 'science',
      q: 'INS Vikrant is which type of naval vessel?',
      options: ['Destroyer', 'Aircraft carrier', 'Frigate', 'Submarine'],
      answer: 1,
      explain:
        'INS Vikrant is an aircraft carrier — the name was carried first by India’s 1961 carrier and now by the indigenously built carrier commissioned in 2022.',
    },
    {
      section: 'science',
      q: 'What is the approximate escape velocity from the Earth’s surface?',
      options: ['7.9 km/s', '9.8 km/s', '11.2 km/s', '15.0 km/s'],
      answer: 2,
      explain:
        'Escape velocity from Earth is about 11.2 km/s. The lower figure of 7.9 km/s is the orbital velocity needed for a low Earth orbit.',
    },
    {
      section: 'science',
      q: 'Which acid is present in the human stomach?',
      options: ['Citric acid', 'Sulphuric acid', 'Hydrochloric acid', 'Acetic acid'],
      answer: 2,
      explain:
        'Gastric glands secrete hydrochloric acid, which kills microbes and creates the acidic medium that pepsin needs to digest protein.',
    },
    {
      section: 'science',
      q: 'Where is the National Defence Academy located?',
      options: ['Wellington, Nilgiris', 'Hyderabad', 'Dehradun', 'Khadakwasla, Pune'],
      answer: 3,
      explain:
        'The NDA is at Khadakwasla near Pune. Dehradun hosts the Indian Military Academy and Wellington the Defence Services Staff College.',
    },
  ],
}
