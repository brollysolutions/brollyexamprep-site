/**
 * IBPS PO Prelims — starter mock.
 *
 * Same shape as the SBI PO paper (35/35/30, one mark each, 0.25 penalty) but
 * a distinct question set, so a candidate preparing for both banks is not
 * re-attempting the same questions twice.
 */
export default {
  slug: 'ibps-po',
  cat: 'Banking',
  exam: 'IBPS PO',
  title: 'IBPS PO Prelims Mock Test',
  fullSpec: 'Full paper: 100 questions · 60 min · 100 marks',
  minutes: 18,
  marks: 1,
  negative: 0.25,
  pattern:
    'Prelims carries 100 questions for 100 marks in 60 minutes — 35 Reasoning Ability, 35 Quantitative Aptitude and 30 English Language, each separately timed at 20 minutes. A wrong answer costs 0.25 marks.',
  sections: [
    { id: 'reasoning', name: 'Reasoning Ability' },
    { id: 'quant', name: 'Quantitative Aptitude' },
    { id: 'english', name: 'English Language' },
  ],
  questions: [
    {
      section: 'reasoning',
      q: 'Find the next term: 5, 11, 23, 47, 95, ?',
      options: ['180', '187', '191', '195'],
      answer: 2,
      explain: 'Each term is double the previous one plus 1: 95 × 2 + 1 = 191.',
    },
    {
      section: 'reasoning',
      q: 'Five people sit in a row of five seats. P is third to the left of Q, R sits immediately to the right of P, and Q occupies the extreme right seat. Who sits in the middle?',
      options: ['Cannot be determined', 'P', 'Q', 'R'],
      answer: 3,
      explain:
        'Numbering the seats 1 to 5 from the left, Q is at seat 5. Third to the left of Q is seat 2, so P sits there, and R sits immediately to P’s right at seat 3 — the middle seat.',
    },
    {
      section: 'reasoning',
      q: 'If GARDEN is written as HBSEFO, how is FLOWER written in the same code?',
      options: ['GMPXFS', 'GMPWFS', 'GNPXFS', 'FMPXFS'],
      answer: 0,
      explain: 'Each letter moves one step forward: F→G, L→M, O→P, W→X, E→F, R→S, giving GMPXFS.',
    },
    {
      section: 'reasoning',
      q: 'Ravi is 18th from the top and 22nd from the bottom in a class ranking. How many students are in the class?',
      options: ['38', '39', '40', '41'],
      answer: 1,
      explain: 'Total = 18 + 22 − 1 = 39. The subtraction avoids counting Ravi twice.',
    },
    {
      section: 'reasoning',
      q: 'A person walks 5 km east, then 4 km north, then 5 km west. How far is he from his starting point?',
      options: ['4 km', '5 km', '9 km', '14 km'],
      answer: 0,
      explain:
        'The eastward and westward 5 km legs cancel, leaving only the 4 km northward leg. He is 4 km due north of the start.',
    },
    {
      section: 'reasoning',
      q: 'Pointing to a woman, Rohit said, "She is the only daughter of my father’s father." How is she related to Rohit?',
      options: ['Cousin', 'Mother', 'Sister', 'Aunt'],
      answer: 3,
      explain:
        'His father’s father is his grandfather, and that grandfather’s daughter is Rohit’s father’s sister — his paternal aunt.',
    },
    {
      section: 'reasoning',
      q: 'Statements: All pens are books. No book is a pencil. Conclusions: I. No pen is a pencil. II. Some books are pens. Which follows?',
      options: ['Both follow', 'Neither follows', 'Only I follows', 'Only II follows'],
      answer: 0,
      explain:
        'Every pen is a book and no book is a pencil, so no pen can be a pencil — I follows. "All pens are books" also guarantees an overlap, so II follows by conversion.',
    },
    {
      section: 'reasoning',
      q: 'Choose the odd one out.',
      options: ['Mumbai', 'Chennai', 'Kolkata', 'Delhi'],
      answer: 3,
      explain: 'Mumbai, Chennai and Kolkata are coastal port cities. Delhi is landlocked.',
    },
    {
      section: 'reasoning',
      q: 'What is the sum of the digits of the third-largest number among 462, 674, 528, 391 and 745?',
      options: ['13', '15', '17', '12'],
      answer: 1,
      explain:
        'In descending order the numbers are 745, 674, 528, 462, 391. The third largest is 528, whose digits add to 5 + 2 + 8 = 15.',
    },

    {
      section: 'quant',
      q: 'A shopkeeper allows a 20% discount on the marked price and still gains 20%. If the cost price is ₹600, what is the marked price?',
      options: ['₹840', '₹880', '₹900', '₹960'],
      answer: 2,
      explain:
        'A 20% gain on ₹600 means a selling price of ₹720. Since ₹720 is 80% of the marked price, MP = 720 / 0.8 = ₹900.',
    },
    {
      section: 'quant',
      q: 'The average age of 30 students is 14 years. Including the teacher, the average becomes 15 years. How old is the teacher?',
      options: ['40 years', '43 years', '45 years', '48 years'],
      answer: 2,
      explain:
        'Students total 30 × 14 = 420 years; with the teacher the total is 31 × 15 = 465. The teacher is 465 − 420 = 45.',
    },
    {
      section: 'quant',
      q: 'Pipe A can fill a tank in 20 minutes while pipe B empties it in 30 minutes. If both are open, how long does the tank take to fill?',
      options: ['50 minutes', '60 minutes', '75 minutes', '12 minutes'],
      answer: 1,
      explain:
        'Net rate = 1/20 − 1/30 = 1/60 of the tank per minute, so the tank fills in 60 minutes.',
    },
    {
      section: 'quant',
      q: 'The ages of A and B are in the ratio 4 : 5. Six years from now the ratio will be 6 : 7. How old is A now?',
      options: ['10 years', '12 years', '15 years', '16 years'],
      answer: 1,
      explain:
        'Let the ages be 4x and 5x. Then (4x + 6)/(5x + 6) = 6/7 gives 28x + 42 = 30x + 36, so x = 3 and A is 4 × 3 = 12.',
    },
    {
      section: 'quant',
      q: 'A bag holds 4 red and 6 blue balls. One ball is drawn at random. What is the probability that it is red?',
      options: ['1/4', '2/5', '3/5', '2/3'],
      answer: 1,
      explain: 'There are 10 balls in total, 4 of them red, so the probability is 4/10 = 2/5.',
    },
    {
      section: 'quant',
      q: 'Find the value of √1764.',
      options: ['38', '40', '42', '44'],
      answer: 2,
      explain: '42 × 42 = 1764, so the square root is 42.',
    },
    {
      section: 'quant',
      q: 'A sum of money doubles itself in 8 years under simple interest. What is the annual rate?',
      options: ['10%', '12%', '12.5%', '15%'],
      answer: 2,
      explain:
        'Doubling means the interest equals the principal, so 100 = 100 × R × 8 / 100, giving R = 100/8 = 12.5% per annum.',
    },
    {
      section: 'quant',
      q: 'A train 240 m long travelling at 72 km/h crosses a platform 360 m long. How long does it take?',
      options: ['24 seconds', '28 seconds', '30 seconds', '33 seconds'],
      answer: 2,
      explain:
        '72 km/h is 20 m/s. The train must cover its own length plus the platform: 240 + 360 = 600 m, which takes 600 / 20 = 30 seconds.',
    },

    {
      section: 'english',
      q: 'Choose the word closest in meaning to UBIQUITOUS.',
      options: ['Omnipresent', 'Ancient', 'Hidden', 'Rare'],
      answer: 0,
      explain: 'Ubiquitous means present everywhere at once, so "omnipresent" is the synonym.',
    },
    {
      section: 'english',
      q: 'Choose the word most opposite in meaning to FRUGAL.',
      options: ['Careful', 'Modest', 'Thrifty', 'Extravagant'],
      answer: 3,
      explain:
        'Frugal means sparing with money or resources. Its opposite is extravagant; thrifty, careful and modest are all close in meaning to frugal.',
    },
    {
      section: 'english',
      q: 'Find the error: "He is one of the best player in the team."',
      options: ['He is', 'one of the best', 'player in the team', 'No error'],
      answer: 2,
      explain: '"One of the best" must be followed by a plural noun, so the sentence needs "players in the team".',
    },
    {
      section: 'english',
      q: 'What does the idiom "to bite the bullet" mean?',
      options: [
        'To endure a painful situation with courage',
        'To take a big risk for profit',
        'To refuse an offer outright',
        'To speak rudely',
      ],
      answer: 0,
      explain:
        'The idiom means to face something unpleasant but unavoidable, and to get through it without complaint.',
    },
    {
      section: 'english',
      q: 'Fill in the blank: "He prefers coffee ______ tea."',
      options: ['over than', 'from', 'than', 'to'],
      answer: 3,
      explain: '"Prefer" takes "to" when comparing two things, never "than".',
    },
    {
      section: 'english',
      q: 'Choose the correctly spelt word.',
      options: ['Privilege', 'Privelege', 'Privilage', 'Priviledge'],
      answer: 0,
      explain: 'The correct spelling is "privilege" — no d, and an e in the middle syllable.',
    },
    {
      section: 'english',
      q: 'One word for "a person who cannot be corrected".',
      options: ['Invincible', 'Incredible', 'Illegible', 'Incorrigible'],
      answer: 3,
      explain:
        'Incorrigible describes someone whose bad habits cannot be reformed. Illegible means unreadable and invincible means unbeatable.',
    },
    {
      section: 'english',
      q: 'Change to the active voice: "The letter was written by Rita."',
      options: ['Rita wrote the letter.', 'Rita has wrote the letter.', 'Rita is writing the letter.', 'The letter Rita wrote.'],
      answer: 0,
      explain:
        'The passive "was written by Rita" becomes the simple past active "Rita wrote the letter", with Rita as the subject.',
    },
  ],
}
