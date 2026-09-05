/**
 * SBI PO Prelims — starter mock.
 *
 * Prelims runs 100 questions in 60 minutes, split 35 Reasoning / 35 Quant /
 * 30 English, 1 mark each with a 0.25 penalty. This set keeps that ratio and
 * marking at a quarter of the length. Prelims is sectionally timed in the
 * real exam; here the clock runs across the whole paper.
 */
export default {
  slug: 'sbi-po',
  cat: 'Banking',
  exam: 'SBI PO',
  title: 'SBI PO Prelims Mock Test',
  fullSpec: 'Full paper: 100 questions · 60 min · 100 marks',
  minutes: 18,
  marks: 1,
  negative: 0.25,
  pattern:
    'Prelims carries 100 questions for 100 marks in 60 minutes — 35 Reasoning Ability, 35 Quantitative Aptitude and 30 English Language, each section separately timed at 20 minutes. A wrong answer costs 0.25 marks.',
  sections: [
    { id: 'reasoning', name: 'Reasoning Ability' },
    { id: 'quant', name: 'Quantitative Aptitude' },
    { id: 'english', name: 'English Language' },
  ],
  questions: [
    {
      section: 'reasoning',
      q: 'Find the next term: 7, 10, 16, 28, 52, ?',
      options: ['96', '100', '104', '108'],
      answer: 1,
      explain:
        'The differences double each time: 3, 6, 12, 24, so the next gap is 48. 52 + 48 = 100.',
    },
    {
      section: 'reasoning',
      q: 'A man walks 10 m north, turns right and walks 15 m, then turns right and walks 10 m. How far is he from his starting point and in which direction?',
      options: ['15 m east', '15 m west', '25 m east', '10 m south'],
      answer: 0,
      explain:
        'The 10 m north and the final 10 m south cancel out, leaving only the 15 m eastward leg. He ends 15 m due east of where he started.',
    },
    {
      section: 'reasoning',
      q: 'Statements: All roses are flowers. Some flowers are red. Conclusions: I. Some roses are red. II. All flowers are roses. Which follows?',
      options: ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'],
      answer: 3,
      explain:
        'The red flowers need not be the rose ones, so I is only a possibility, not a certainty. II reverses the first statement and is invalid. Neither conclusion follows.',
    },
    {
      section: 'reasoning',
      q: 'In a certain code PENCIL is written as MBKZFI. How is PAPER written in that code?',
      options: ['MXMBO', 'MZMBO', 'NXMBO', 'MXNBO'],
      answer: 0,
      explain:
        'Each letter shifts three places back: P→M, A→X (wrapping past A), P→M, E→B, R→O. The code is MXMBO.',
    },
    {
      section: 'reasoning',
      q: 'In a row of 40 students Rahul is 12th from the left end. What is his position from the right end?',
      options: ['28th', '29th', '30th', '27th'],
      answer: 1,
      explain: 'Position from right = total − position from left + 1 = 40 − 12 + 1 = 29th.',
    },
    {
      section: 'reasoning',
      q: 'A is B’s brother, C is A’s mother, D is C’s father and E is D’s mother. How is A related to D?',
      options: ['Great-grandson', 'Nephew', 'Son', 'Grandson'],
      answer: 3,
      explain:
        'D is C’s father and C is A’s mother, so D is A’s maternal grandfather. A is therefore D’s grandson.',
    },
    {
      section: 'reasoning',
      q: 'If A > B ≥ C and C > D, which of the following is definitely true?',
      options: ['B > D', 'A = C', 'D ≥ B', 'C ≥ A'],
      answer: 0,
      explain:
        'B ≥ C and C > D together give B > D. A = C is ruled out by A > B ≥ C, and the other two reverse the established order.',
    },
    {
      section: 'reasoning',
      q: 'How many letters lie between the 7th letter from the left and the 9th letter from the right of the English alphabet?',
      options: ['9', '10', '11', '12'],
      answer: 1,
      explain:
        'The 7th from the left is G (position 7) and the 9th from the right is R (position 18). The letters strictly between them number 18 − 7 − 1 = 10.',
    },
    {
      section: 'reasoning',
      q: 'Choose the odd one out.',
      options: ['Cricket', 'Hockey', 'Football', 'Chess'],
      answer: 3,
      explain: 'Cricket, hockey and football are outdoor field games. Chess is an indoor board game.',
    },

    {
      section: 'quant',
      q: 'Find the simple interest on ₹12,000 at 8% per annum for 3 years.',
      options: ['₹2,660', '₹2,880', '₹2,920', '₹3,120'],
      answer: 1,
      explain: 'SI = P × R × T / 100 = 12000 × 8 × 3 / 100 = ₹2,880.',
    },
    {
      section: 'quant',
      q: 'A boat covers 20 km downstream in 2 hours and returns upstream in 4 hours. What is the speed of the boat in still water?',
      options: ['6 km/h', '7.5 km/h', '8 km/h', '10 km/h'],
      answer: 1,
      explain:
        'Downstream speed = 20/2 = 10 km/h and upstream = 20/4 = 5 km/h. Still-water speed is their average: (10 + 5)/2 = 7.5 km/h.',
    },
    {
      section: 'quant',
      q: 'Two numbers are in the ratio 3 : 5 and add up to 96. What is the smaller number?',
      options: ['32', '36', '40', '42'],
      answer: 1,
      explain: 'The parts total 8, so one part is 96 / 8 = 12. The smaller number is 3 × 12 = 36.',
    },
    {
      section: 'quant',
      q: 'A number is increased by 20% and the result is then decreased by 20%. What is the net change?',
      options: ['No change', '4% increase', '4% decrease', '2% decrease'],
      answer: 2,
      explain:
        'The multiplier is 1.20 × 0.80 = 0.96, so the number ends at 96% of its original value — a 4% decrease.',
    },
    {
      section: 'quant',
      q: 'The average of five numbers is 27. If the number 35 is removed, what is the average of the rest?',
      options: ['24', '25', '26', '27'],
      answer: 1,
      explain: 'Their total is 5 × 27 = 135. Removing 35 leaves 100 across four numbers, an average of 25.',
    },
    {
      section: 'quant',
      q: 'What is 15% of 15% of 4,000?',
      options: ['60', '75', '90', '120'],
      answer: 2,
      explain: '15% of 4000 = 600, and 15% of 600 = 90. (Equivalently 4000 × 0.0225 = 90.)',
    },
    {
      section: 'quant',
      q: 'An article costing ₹1,200 is marked 25% above cost and then sold at a 10% discount. What is the profit percentage?',
      options: ['10%', '12.5%', '15%', '17.5%'],
      answer: 1,
      explain:
        'Marked price = 1200 × 1.25 = ₹1,500. Selling price = 1500 × 0.90 = ₹1,350. Profit = ₹150, which is 150/1200 = 12.5% of cost.',
    },
    {
      section: 'quant',
      q: 'A alone finishes a job in 15 days and B alone in 10 days. Working together, how long do they take?',
      options: ['5 days', '6 days', '7.5 days', '8 days'],
      answer: 1,
      explain: 'Combined rate = 1/15 + 1/10 = 1/6 of the job per day, so together they finish in 6 days.',
    },

    {
      section: 'english',
      q: 'Fill in the blank: "The manager was ______ with the results of the quarter."',
      options: ['satisfied', 'satisfy', 'satisfying', 'satisfaction'],
      answer: 0,
      explain:
        'The passive construction "was ______ with" needs the past participle "satisfied". "Satisfying" would describe the results, not the manager.',
    },
    {
      section: 'english',
      q: 'Find the error: "Neither of the two candidates were selected for the post."',
      options: ['Neither of', 'the two candidates', 'were selected', 'No error'],
      answer: 2,
      explain: '"Neither" is singular, so the verb must be "was selected", not "were selected".',
    },
    {
      section: 'english',
      q: 'Choose the word closest in meaning to PRUDENT.',
      options: ['Talkative', 'Generous', 'Reckless', 'Judicious'],
      answer: 3,
      explain: 'Prudent means showing careful good judgement, so "judicious" is the closest synonym.',
    },
    {
      section: 'english',
      q: 'Choose the word most opposite in meaning to LUCID.',
      options: ['Obscure', 'Bright', 'Simple', 'Clear'],
      answer: 0,
      explain: 'Lucid means easily understood or clearly expressed. Its antonym is obscure.',
    },
    {
      section: 'english',
      q: 'What does the idiom "once in a blue moon" mean?',
      options: ['At night', 'Suddenly', 'Regularly', 'Very rarely'],
      answer: 3,
      explain: 'The idiom describes something that happens very seldom.',
    },
    {
      section: 'english',
      q: 'Choose the correctly spelt word.',
      options: ['Accommodation', 'Acommodation', 'Accomadation', 'Accomodation'],
      answer: 0,
      explain: '"Accommodation" carries a double c and a double m — it is one of the most misspelt words in English.',
    },
    {
      section: 'english',
      q: 'Fill in the blank: "He is well versed ______ mathematics."',
      options: ['with', 'about', 'on', 'in'],
      answer: 3,
      explain: 'The fixed collocation is "well versed in" a subject.',
    },
    {
      section: 'english',
      q: 'One word for "government by the wealthy".',
      options: ['Plutocracy', 'Aristocracy', 'Autocracy', 'Oligarchy'],
      answer: 0,
      explain:
        'Plutocracy is rule by the rich. Oligarchy is rule by a small group, aristocracy by a hereditary nobility and autocracy by a single person.',
    },
  ],
}
