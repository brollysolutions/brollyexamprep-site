/**
 * SSC CGL Tier 1 — starter mock.
 *
 * The live Tier 1 paper is 100 questions in 60 minutes across four equally
 * weighted sections, +2 per correct answer and -0.5 per wrong one. This set
 * keeps the marking scheme and the section split at a quarter of the length,
 * so a candidate can sit it in a single study slot.
 */
export default {
  slug: 'ssc-cgl',
  cat: 'SSC',
  exam: 'SSC CGL',
  title: 'SSC CGL Tier 1 Mock Test',
  fullSpec: 'Full paper: 100 questions · 60 min · 200 marks',
  minutes: 20,
  marks: 2,
  negative: 0.5,
  pattern:
    'Tier 1 has four sections of 25 questions each — General Intelligence & Reasoning, General Awareness, Quantitative Aptitude and English Comprehension. Every correct answer earns 2 marks and every wrong one costs 0.5.',
  sections: [
    { id: 'ga', name: 'General Awareness' },
    { id: 'reasoning', name: 'Reasoning' },
    { id: 'quant', name: 'Quantitative Aptitude' },
    { id: 'english', name: 'English' },
  ],
  questions: [
    {
      section: 'ga',
      q: 'Who is popularly known as the "Father of the Indian Constitution"?',
      options: ['Sardar Vallabhbhai Patel', 'Dr Rajendra Prasad', 'Jawaharlal Nehru', 'Dr B. R. Ambedkar'],
      answer: 3,
      explain:
        'Dr B. R. Ambedkar chaired the Drafting Committee of the Constituent Assembly and piloted the draft Constitution through the Assembly. Dr Rajendra Prasad was the Assembly’s President, a different role.',
    },
    {
      section: 'ga',
      q: 'The Tropic of Cancer does NOT pass through which of these Indian states?',
      options: ['Tripura', 'Rajasthan', 'Madhya Pradesh', 'Odisha'],
      answer: 3,
      explain:
        'The Tropic of Cancer crosses eight states — Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram. Odisha lies south of it.',
    },
    {
      section: 'ga',
      q: 'Which Article of the Constitution guarantees the Right to Constitutional Remedies?',
      options: ['Article 44', 'Article 19', 'Article 21', 'Article 32'],
      answer: 3,
      explain:
        'Article 32 lets a citizen move the Supreme Court directly to enforce a fundamental right. Ambedkar called it "the heart and soul of the Constitution".',
    },
    {
      section: 'ga',
      q: 'What is the chemical formula of washing soda?',
      options: ['NaOH', 'Ca(OCl)Cl', 'NaHCO₃', 'Na₂CO₃·10H₂O'],
      answer: 3,
      explain:
        'Washing soda is hydrated sodium carbonate, Na₂CO₃·10H₂O. NaHCO₃ is baking soda and NaOH is caustic soda.',
    },
    {
      section: 'ga',
      q: 'Which 1757 battle laid the foundation of British political power in India?',
      options: ['Third Battle of Panipat', 'Battle of Wandiwash', 'Battle of Buxar', 'Battle of Plassey'],
      answer: 3,
      explain:
        'At Plassey (1757) Robert Clive defeated Siraj-ud-Daulah, giving the East India Company control of Bengal. Buxar followed in 1764 and converted that control into formal revenue rights.',
    },
    {
      section: 'ga',
      q: 'Where are the headquarters of the International Monetary Fund located?',
      options: ['Washington, D.C.', 'Paris', 'Geneva', 'New York'],
      answer: 0,
      explain:
        'The IMF is headquartered in Washington, D.C., as is the World Bank. Geneva hosts the WTO and WHO; Paris hosts the OECD and UNESCO.',
    },
    {
      section: 'ga',
      q: 'Deficiency of which vitamin causes scurvy?',
      options: ['Vitamin D', 'Vitamin A', 'Vitamin B₁₂', 'Vitamin C'],
      answer: 3,
      explain:
        'Scurvy is caused by a lack of ascorbic acid (vitamin C), which the body needs to make collagen. Vitamin D deficiency causes rickets and vitamin A deficiency causes night blindness.',
    },

    {
      section: 'reasoning',
      q: 'Find the next term: 3, 7, 15, 31, 63, ?',
      options: ['95', '127', '124', '131'],
      answer: 1,
      explain: 'Each term is double the previous one plus 1: 63 × 2 + 1 = 127.',
    },
    {
      section: 'reasoning',
      q: 'If CAT is coded as DBU, how is DOG coded in the same language?',
      options: ['EPH', 'EPG', 'FPH', 'DPH'],
      answer: 0,
      explain: 'Every letter moves one step forward: D→E, O→P, G→H, giving EPH.',
    },
    {
      section: 'reasoning',
      q: 'Choose the odd one out.',
      options: ['Square', 'Rectangle', 'Rhombus', 'Cube'],
      answer: 3,
      explain:
        'Square, rectangle and rhombus are two-dimensional quadrilaterals. A cube is a three-dimensional solid.',
    },
    {
      section: 'reasoning',
      q: 'Pointing to a photograph, a man said, "She is the daughter of my grandfather’s only son." How is the woman related to him?',
      options: ['Sister', 'Niece', 'Cousin', 'Daughter'],
      answer: 0,
      explain:
        'His grandfather’s only son must be his own father. The daughter of his father is therefore his sister.',
    },
    {
      section: 'reasoning',
      q: 'Complete the series: AZ, BY, CX, ?',
      options: ['DV', 'EW', 'DX', 'DW'],
      answer: 3,
      explain:
        'The first letter moves forward (A, B, C, D) while the second moves backward from the end of the alphabet (Z, Y, X, W). The next pair is DW.',
    },
    {
      section: 'reasoning',
      q: 'Arrange these in a meaningful logical order: 1. Seed  2. Plant  3. Flower  4. Fruit  5. Tree',
      options: ['1, 2, 5, 3, 4', '1, 2, 3, 4, 5', '1, 5, 2, 3, 4', '2, 1, 5, 3, 4'],
      answer: 0,
      explain:
        'A seed germinates into a plant, the plant grows into a tree, the tree bears flowers, and the flowers become fruit: 1, 2, 5, 3, 4.',
    },

    {
      section: 'quant',
      q: 'What is the average of the first ten natural numbers?',
      options: ['5', '5.5', '6', '6.5'],
      answer: 1,
      explain: 'Their sum is 10 × 11 / 2 = 55, so the average is 55 / 10 = 5.5.',
    },
    {
      section: 'quant',
      q: 'A sum of ₹8,000 grows to ₹9,261 in 3 years under annual compound interest. What is the rate?',
      options: ['4%', '5%', '6%', '7%'],
      answer: 1,
      explain:
        '9261 / 8000 = 1.157625 = (1.05)³, so the rate is 5% per annum. Equivalently 9261 = 21³ and 8000 = 20³, so the sum grows by 21/20 each year.',
    },
    {
      section: 'quant',
      q: 'A shopkeeper sells an article for ₹960 and gains 20%. What did the article cost him?',
      options: ['₹768', '₹800', '₹820', '₹840'],
      answer: 1,
      explain: 'Cost price = 960 / 1.20 = ₹800. The profit of ₹160 is 20% of ₹800.',
    },
    {
      section: 'quant',
      q: 'A train 180 m long crosses a pole in 12 seconds. What is its speed?',
      options: ['48 km/h', '54 km/h', '60 km/h', '66 km/h'],
      answer: 1,
      explain:
        'Crossing a pole means covering its own length: 180 / 12 = 15 m/s. Multiplying by 18/5 gives 54 km/h.',
    },
    {
      section: 'quant',
      q: 'Find the value of 25% of 480 + 15% of 200.',
      options: ['140', '145', '150', '155'],
      answer: 2,
      explain: '25% of 480 = 120 and 15% of 200 = 30, so the total is 150.',
    },
    {
      section: 'quant',
      q: 'Pipe A fills a tank in 12 hours and pipe B in 24 hours. How long do they take together?',
      options: ['6 hours', '8 hours', '9 hours', '18 hours'],
      answer: 1,
      explain:
        'Combined rate = 1/12 + 1/24 = 3/24 = 1/8 of the tank per hour, so the tank fills in 8 hours.',
    },

    {
      section: 'english',
      q: 'Choose the word closest in meaning to BENEVOLENT.',
      options: ['Kind-hearted', 'Indifferent', 'Greedy', 'Hostile'],
      answer: 0,
      explain: 'Benevolent means well-meaning and generous towards others, so "kind-hearted" is the synonym.',
    },
    {
      section: 'english',
      q: 'Choose the word most opposite in meaning to SCARCE.',
      options: ['Meagre', 'Limited', 'Rare', 'Abundant'],
      answer: 3,
      explain:
        'Scarce means in short supply. Its antonym is abundant; rare, meagre and limited are all near-synonyms.',
    },
    {
      section: 'english',
      q: 'What does the idiom "to let the cat out of the bag" mean?',
      options: ['To reveal a secret', 'To escape from danger', 'To waste an opportunity', 'To create confusion'],
      answer: 0,
      explain: 'The idiom means to disclose something that was meant to be kept secret, usually by accident.',
    },
    {
      section: 'english',
      q: 'Fill in the blank: "She has been working here ______ 2015."',
      options: ['by', 'for', 'from', 'since'],
      answer: 3,
      explain:
        'The present perfect continuous takes "since" before a point in time and "for" before a length of time. 2015 is a point in time.',
    },
    {
      section: 'english',
      q: 'Identify the part that contains an error: "One of / my friend / is a doctor. / No error"',
      options: ['One of', 'my friend', 'is a doctor.', 'No error'],
      answer: 1,
      explain: '"One of" must be followed by a plural noun, so the phrase should read "one of my friends".',
    },
    {
      section: 'english',
      q: 'One word for "a person who speaks many languages".',
      options: ['Polyglot', 'Bilingual', 'Orator', 'Linguist'],
      answer: 0,
      explain:
        'A polyglot speaks several languages. A linguist studies language as a subject, and a bilingual speaker knows exactly two.',
    },
  ],
}
