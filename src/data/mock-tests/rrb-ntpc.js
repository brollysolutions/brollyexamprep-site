/**
 * RRB NTPC CBT 1 — starter mock.
 *
 * CBT 1 is 100 questions in 90 minutes: 40 General Awareness, 30 Mathematics
 * and 30 General Intelligence & Reasoning, one mark each with a one-third
 * penalty for a wrong answer. This set holds that 40/30/30 weighting.
 */
export default {
  slug: 'rrb-ntpc',
  cat: 'Railways',
  exam: 'RRB NTPC',
  title: 'RRB NTPC CBT 1 Mock Test',
  fullSpec: 'Full paper: 100 questions · 90 min · 100 marks',
  minutes: 22,
  marks: 1,
  negative: 0.3333,
  pattern:
    'CBT 1 carries 100 questions for 100 marks in 90 minutes — 40 General Awareness, 30 Mathematics and 30 General Intelligence & Reasoning. One third of a mark is deducted for every wrong answer.',
  sections: [
    { id: 'ga', name: 'General Awareness' },
    { id: 'maths', name: 'Mathematics' },
    { id: 'reasoning', name: 'General Intelligence & Reasoning' },
  ],
  questions: [
    {
      section: 'ga',
      q: 'Which is the longest river flowing entirely within India?',
      options: ['Yamuna', 'Narmada', 'Godavari', 'Ganga'],
      answer: 3,
      explain:
        'The Ganga is India’s longest river at roughly 2,525 km. The Godavari, at about 1,465 km, is the longest river of peninsular India.',
    },
    {
      section: 'ga',
      q: 'Who was the first woman President of India?',
      options: ['Pratibha Patil', 'Sucheta Kripalani', 'Indira Gandhi', 'Sarojini Naidu'],
      answer: 0,
      explain:
        'Pratibha Patil served as President from 2007 to 2012. Indira Gandhi was Prime Minister, and Sarojini Naidu was India’s first woman state Governor.',
    },
    {
      section: 'ga',
      q: 'What is the SI unit of electric current?',
      options: ['Watt', 'Volt', 'Ohm', 'Ampere'],
      answer: 3,
      explain:
        'Current is measured in amperes. The volt measures potential difference, the ohm resistance and the watt power.',
    },
    {
      section: 'ga',
      q: 'In which year did the Jallianwala Bagh massacre take place?',
      options: ['1911', '1919', '1922', '1930'],
      answer: 1,
      explain:
        'General Dyer ordered troops to fire on an unarmed gathering at Amritsar on 13 April 1919, during the protests against the Rowlatt Act.',
    },
    {
      section: 'ga',
      q: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Mercury', 'Venus'],
      answer: 0,
      explain: 'Mars appears red because its surface is rich in iron oxide — rust.',
    },
    {
      section: 'ga',
      q: 'Who composed India’s national song, "Vande Mataram"?',
      options: [
        'Sarojini Naidu',
        'Muhammad Iqbal',
        'Rabindranath Tagore',
        'Bankim Chandra Chattopadhyay',
      ],
      answer: 3,
      explain:
        'Bankim Chandra Chattopadhyay wrote "Vande Mataram", later included in his novel Anandamath. Rabindranath Tagore wrote the national anthem, "Jana Gana Mana".',
    },
    {
      section: 'ga',
      q: 'Which gas is the most abundant in the Earth’s atmosphere?',
      options: ['Nitrogen', 'Argon', 'Oxygen', 'Carbon dioxide'],
      answer: 0,
      explain: 'Nitrogen makes up about 78% of dry air by volume; oxygen accounts for roughly 21%.',
    },
    {
      section: 'ga',
      q: 'Where are the headquarters of the Southern Railway zone?',
      options: ['Hyderabad', 'Thiruvananthapuram', 'Bengaluru', 'Chennai'],
      answer: 3,
      explain:
        'Southern Railway, the first zone formed after Independence, is headquartered at Chennai. Bengaluru heads the South Western Railway zone.',
    },
    {
      section: 'ga',
      q: 'Who wrote the book "The Discovery of India"?',
      options: ['Jawaharlal Nehru', 'Dr S. Radhakrishnan', 'Maulana Azad', 'Mahatma Gandhi'],
      answer: 0,
      explain:
        'Jawaharlal Nehru wrote The Discovery of India while imprisoned at Ahmednagar Fort between 1942 and 1946.',
    },
    {
      section: 'ga',
      q: 'What is the maximum permitted strength of the Rajya Sabha?',
      options: ['238', '245', '250', '252'],
      answer: 2,
      explain:
        'Article 80 caps the Rajya Sabha at 250 members — up to 238 representing the states and Union Territories, plus 12 nominated by the President.',
    },

    {
      section: 'maths',
      q: 'What is the LCM of 12, 15 and 20?',
      options: ['30', '45', '60', '120'],
      answer: 2,
      explain:
        'The prime factors are 2²×3, 3×5 and 2²×5. Taking the highest power of each gives 2² × 3 × 5 = 60.',
    },
    {
      section: 'maths',
      q: 'What is the HCF of 36 and 48?',
      options: ['6', '9', '12', '18'],
      answer: 2,
      explain: '36 = 2²×3² and 48 = 2⁴×3, so the common factors give 2² × 3 = 12.',
    },
    {
      section: 'maths',
      q: 'Solve for x: 3x − 7 = 14.',
      options: ['5', '6', '7', '8'],
      answer: 2,
      explain: 'Adding 7 to both sides gives 3x = 21, so x = 7.',
    },
    {
      section: 'maths',
      q: 'Find the area of a circle of radius 7 cm, taking π = 22/7.',
      options: ['144 cm²', '154 cm²', '164 cm²', '176 cm²'],
      answer: 1,
      explain: 'Area = πr² = (22/7) × 7 × 7 = 154 cm².',
    },
    {
      section: 'maths',
      q: 'Find the simple interest on ₹5,000 at 6% per annum for 2 years.',
      options: ['₹500', '₹600', '₹650', '₹700'],
      answer: 1,
      explain: 'SI = 5000 × 6 × 2 / 100 = ₹600.',
    },
    {
      section: 'maths',
      q: 'What is 15% of 300?',
      options: ['35', '40', '45', '50'],
      answer: 2,
      explain: '10% of 300 is 30 and 5% is 15, so 15% is 45.',
    },
    {
      section: 'maths',
      q: 'An article bought for ₹250 is sold for ₹300. What is the profit percentage?',
      options: ['16.67%', '20%', '25%', '30%'],
      answer: 1,
      explain: 'Profit is ₹50 on a cost of ₹250, which is 50/250 = 20%.',
    },
    {
      section: 'maths',
      q: 'What is the value of 0.6 × 0.6 × 0.6?',
      options: ['0.018', '0.216', '1.8', '2.16'],
      answer: 1,
      explain: '6 × 6 × 6 = 216, and three factors each with one decimal place give three decimal places: 0.216.',
    },

    {
      section: 'reasoning',
      q: 'Find the next term: 2, 6, 12, 20, 30, ?',
      options: ['38', '40', '42', '44'],
      answer: 2,
      explain:
        'The terms are n(n + 1): 1×2, 2×3, 3×4, 4×5, 5×6. The next is 6 × 7 = 42. (The gaps also grow 4, 6, 8, 10, 12.)',
    },
    {
      section: 'reasoning',
      q: 'Choose the odd one out.',
      options: ['July', 'January', 'March', 'June'],
      answer: 3,
      explain: 'January, March and July each have 31 days. June has 30.',
    },
    {
      section: 'reasoning',
      q: 'If a word is valued by adding the alphabetical positions of its letters, so that RED = 27, what is the value of BLUE?',
      options: ['36', '38', '40', '42'],
      answer: 2,
      explain:
        'RED = 18 + 5 + 4 = 27 confirms the rule. BLUE = 2 + 12 + 21 + 5 = 40.',
    },
    {
      section: 'reasoning',
      q: 'Doctor is to Hospital as Teacher is to ______.',
      options: ['School', 'Student', 'Lesson', 'Book'],
      answer: 0,
      explain: 'The pairing is a professional and the institution they work in: a doctor in a hospital, a teacher in a school.',
    },
    {
      section: 'reasoning',
      q: 'If today is Wednesday, what day will it be after 61 days?',
      options: ['Tuesday', 'Saturday', 'Sunday', 'Monday'],
      answer: 3,
      explain:
        '61 ÷ 7 leaves a remainder of 5, so the day advances five places from Wednesday: Thursday, Friday, Saturday, Sunday, Monday.',
    },
    {
      section: 'reasoning',
      q: 'Choose the odd one out: 8, 27, 64, 100, 125.',
      options: ['27', '64', '100', '125'],
      answer: 2,
      explain: '8, 27, 64 and 125 are the cubes of 2, 3, 4 and 5. 100 is a perfect square, not a cube.',
    },
    {
      section: 'reasoning',
      q: 'Complete the series: Z, X, V, T, ?',
      options: ['R', 'Q', 'P', 'S'],
      answer: 0,
      explain: 'The letters step back two places each time — Z, X, V, T — so the next is R.',
    },
  ],
}
