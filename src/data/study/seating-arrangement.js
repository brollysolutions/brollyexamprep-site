/**
 * Seating Arrangement — /study-material/reasoning/seating-arrangement/
 *
 * The whole topic turns on one thing candidates guess at instead of knowing:
 * which way "left" points once the person is facing away from you. So the
 * direction conventions are derived here rather than asserted, and every
 * arrangement type afterwards is just that rule applied to a different shape.
 */
export default {
  subject: 'reasoning',
  subjectName: 'Reasoning',
  slug: 'seating-arrangement',
  title: 'Seating Arrangement',
  seoTitle: 'Seating Arrangement Reasoning for Bank & SSC Exams | Tricks & Practice',
  metaDescription:
    'Complete Seating Arrangement study material for banking, SSC and railway exams — linear rows, circular tables, square and rectangular tables, dual-row arrangements, the left-right direction rules, possibility cases and position counting, with solved examples and practice questions.',
  readMinutes: 21,
  lead: [
    'Seating Arrangement is the highest-scoring block in any banking paper and the one where candidates most often lose fifteen minutes for nothing. The reasoning is never the problem. The problem is that "third to the left of B" points in opposite directions depending on which way B is facing, and a single wrong turn invalidates every deduction after it.',
    'This page fixes that first — the direction rules are derived, not memorised, so you can rebuild them under pressure. Then it works through each arrangement shape, and finishes with the part nobody teaches: how to decide within thirty seconds whether a set is worth attempting at all.',
  ],

  weightage: [
    { exam: 'Banking Prelims (IBPS / SBI)', count: '5–10 questions', note: 'One or two full sets, usually a linear row and a circular table.' },
    { exam: 'Banking & Insurance Mains', count: '10–15 questions', note: 'Two or three sets, often with an extra variable such as age or floor.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '0–1 questions', note: 'Rare, and when it appears it is a short direct question rather than a set.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Simple linear puzzles with five or six people.' },
    { exam: 'State PSC & Police exams', count: '2–5 questions', note: 'Linear and circular sets of moderate difficulty.' },
  ],

  contents: [
    { icon: 'target', title: 'The direction rules', sub: 'Which way "left" actually points', href: '#directions' },
    { icon: 'layers', title: 'The five arrangement types', sub: 'What each one changes', href: '#types' },
    { icon: 'user', title: 'Linear arrangements', sub: 'Rows, and rows with mixed facing', href: '#linear' },
    { icon: 'refresh', title: 'Circular arrangements', sub: 'Facing the centre and facing outward', href: '#circular' },
    { icon: 'globe', title: 'Square and rectangular tables', sub: 'Corners, middles and alternating facing', href: '#square' },
    { icon: 'book', title: 'Dual-row arrangements', sub: 'Two rows facing each other', href: '#dual-row' },
    { icon: 'chart', title: 'Position counting', sub: 'The four formulas worth knowing', href: '#counting' },
    { icon: 'clock', title: 'How to attack a set', sub: 'Clue order, possibility cases and when to skip', href: '#method' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'directions',
      heading: 'The direction rules',
      eyebrow: 'Get this right or nothing else matters',
      intro:
        'Every wrong seating answer in an exam hall traces back to one of these four lines. Do not memorise them as facts — derive them once by standing up and turning, and you will never lose them again.',
      blocks: [
        {
          type: 'table',
          caption: 'Which way is left, for each facing direction',
          head: ['The person is facing', 'Their left is', 'Their right is', 'On your page'],
          rows: [
            ['North', 'West', 'East', 'Their left is the left of your page'],
            ['South', 'East', 'West', 'Their left is the right of your page'],
            ['The centre of a circle', 'Clockwise', 'Anticlockwise', 'Left moves the way the clock hands move'],
            ['Outward from a circle', 'Anticlockwise', 'Clockwise', 'The mirror image of the row above'],
          ],
        },
        {
          type: 'p',
          text:
            'The circular rules are worth deriving rather than trusting. Stand at the south point of a table facing the centre — you are facing north, so your left hand points west. Now walk along the edge of the table towards the west point. You have moved from south to west, which is the direction a clock hand travels. That is the whole proof: facing the centre, your left is clockwise. Turn around to face outward and everything mirrors.',
        },
        {
          type: 'note',
          title: 'Draw the page the same way every time',
          text:
            'Always put north at the top and west on the left, and always write a circular arrangement clockwise. Consistency is worth more than cleverness here — the moment you draw one set anticlockwise because it seemed to fit, every "third to the left" in your notes means something different from what it meant ten seconds earlier.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'types',
      heading: 'The five arrangement types',
      eyebrow: 'What changes between them',
      intro:
        'Almost every set in every paper is one of these. Recognising which one you are holding tells you how many positions exist and how the ends behave.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Linear (single row)',
              'Five to eight people in one row, usually all facing north or all facing south. Rows have ends, and ends are the strongest clue in the topic — a person at an extreme end has only one neighbour.',
            ],
            [
              'Circular',
              'Six to ten people around a table, facing the centre, facing outward, or a mix. There are no ends, so nothing is fixed until a clue ties two people together; expect to place the first person arbitrarily.',
            ],
            [
              'Square or rectangular',
              'Usually eight people — four at the corners and four at the middles of the sides — with the two groups facing opposite ways. The alternation of corner and middle positions is itself a constraint.',
            ],
            [
              'Dual row',
              'Two rows facing each other, typically four or five per row. Each person faces exactly one person opposite, and the two rows have mirrored left-right senses.',
            ],
            [
              'Arrangement with an extra variable',
              'Any of the above, plus a second attribute — a floor, an age, a salary, a city. Draw the seating first and hang the second variable off it; trying to solve both at once is how these sets eat ten minutes.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'linear',
      heading: 'Linear arrangements',
      eyebrow: 'The most common shape',
      intro:
        'A row of numbered seats. Number them once, left to right, and never renumber — every clue then becomes arithmetic on those numbers.',
      blocks: [
        {
          type: 'formula',
          title: 'Turning clues into arithmetic',
          items: [
            { expr: '"X is third to the left of Y" (facing north) means position of X = position of Y − 3', note: 'Third to the left, not third from the left. The difference is three seats, with two people in between.' },
            { expr: '"X is third from the left end" means position 3', note: 'Counted from the end of the row, not from another person. Papers place both phrasings in the same set deliberately.' },
            { expr: '"Only two people sit between X and Y" fixes the gap at three', note: 'The gap between positions is one more than the number of people between them.' },
            { expr: '"X sits at an extreme end" means position 1 or the last position', note: 'The strongest single clue available. Start every linear set by finding it.' },
            { expr: 'For a south-facing row, flip every left and right', note: 'Or simpler: solve it as a north-facing row and mirror the finished arrangement.' },
          ],
        },
        {
          type: 'example',
          q: 'Six friends A, B, C, D, E and F sit in a row facing north. B sits at the extreme left end. C sits third to the left of F. A sits second to the right of C. D is an immediate neighbour of B. Who sits at the extreme right end?',
          steps: [
            'Number the seats 1 to 6 from the left. B is at seat 1.',
            'C is third to the left of F, so (C, F) is one of (1,4), (2,5) or (3,6). Seat 1 is taken, so C is at 2 or 3.',
            'If C were at 2, then F is at 5 and A is at 4 — but the only neighbour of B is seat 2, which C occupies, so D has nowhere to go. Rule it out.',
            'So C is at 3 and F at 6. A is second to the right of C, at seat 5. D takes seat 2 as B’s neighbour, and E takes seat 4.',
          ],
          answer: 'The row is B, D, C, E, A, F — so F sits at the extreme right end.',
        },
        {
          type: 'note',
          title: 'Rows with mixed facing',
          text:
            'When some people in a row face north and others south, write the facing direction under every name as you place it. A clue such as "P sits second to the left of Q" must then be resolved using Q\'s facing, not P\'s — the clue always describes the direction from the person named second. Getting this backwards is the most common error in mixed-facing sets.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'circular',
      heading: 'Circular arrangements',
      eyebrow: 'No ends to anchor on',
      intro:
        'The circle has no first seat, so nothing is fixed in absolute terms. Place one person anywhere, build everything relative to them, and read the answer off the finished ring.',
      blocks: [
        {
          type: 'formula',
          title: 'Working a circle',
          items: [
            { expr: 'Fix the first person arbitrarily and mark the seats clockwise', note: 'This costs nothing — a circular arrangement is only ever determined up to rotation, and every question asks about relative position.' },
            { expr: 'Facing the centre: left is clockwise, right is anticlockwise', note: 'Facing outward reverses both. Write the facing direction next to each name as you place it.' },
            { expr: '"X is third to the left of Y" means three seats clockwise from Y, if Y faces the centre', note: 'Count seats, not people — an empty seat still counts if the question allows one.' },
            { expr: 'With n people, "third to the left" and "(n − 3)th to the right" are the same seat', note: 'With eight people, third to the left is also fifth to the right. Papers use this to make two clues look independent when they are not.' },
            { expr: '"X sits opposite Y" works only for an even number of people', note: 'With n people, opposite means n/2 seats away in either direction.' },
          ],
        },
        {
          type: 'example',
          q: 'Six people A, B, C, D, E and F sit around a circular table facing the centre. A sits second to the left of B. C sits third to the left of A. D sits immediately to the left of B. E is not an immediate neighbour of A. Who sits third to the right of E?',
          steps: [
            'Place B at seat 1 and number the seats 2 to 6 clockwise. Facing the centre, left means clockwise.',
            'A is second to the left of B, so A is at seat 3. C is third to the left of A, so C is at seat 6.',
            'D is immediately to the left of B, so D is at seat 2. That leaves seats 4 and 5 for E and F.',
            'A is at seat 3, so its neighbours are seats 2 and 4. E cannot take seat 4, so E is at seat 5 and F at seat 4.',
            'Right means anticlockwise. From E at seat 5, count back three seats: 4, then 3, then 2.',
          ],
          answer: 'Seat 2 holds D, so D sits third to the right of E.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'square',
      heading: 'Square and rectangular tables',
      eyebrow: 'Corners and middles',
      intro:
        'The standard set-up is eight people: four at the corners and four at the middles of the sides, with the two groups facing opposite ways. Everything you know about circles applies — plus one extra constraint you get for free.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The positions alternate',
              'Going round the table you meet corner, middle, corner, middle, and so on. So anyone an odd number of seats from a corner person sits at a middle, and anyone an even number away sits at a corner. This alone resolves a surprising number of clues.',
            ],
            [
              'The two groups face opposite ways',
              'The question will tell you which — typically corners face the centre and middles face outward, or the reverse. Left and right therefore mean opposite things for the two groups, so write the facing next to every name.',
            ],
            [
              'Opposite means four seats away',
              'With eight seats, a corner sits opposite a corner and a middle opposite a middle. A clue saying "X sits opposite Y" instantly tells you they are the same kind of position.',
            ],
            [
              'Rectangular tables sometimes seat three per long side',
              'Read the geometry statement carefully — the number of people per side changes what "immediate neighbour" and "opposite" mean, and it is stated only once, in the first line.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'Eight people sit around a square table, four at the corners facing outward and four at the middles of the sides facing the centre. A sits at a corner. Is the person third to the left of A at a corner or at a middle?',
          steps: [
            'A faces outward, so A’s left is the anticlockwise direction.',
            'Count three seats anticlockwise from A. Because positions alternate, the first is a middle, the second a corner, the third a middle.',
            'Three is an odd number of seats from a corner, so the seat must be of the other kind.',
          ],
          answer: 'The person third to the left of A sits at the middle of a side.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'dual-row',
      heading: 'Dual-row arrangements',
      eyebrow: 'Two rows facing each other',
      intro:
        'Four or five people in each of two rows, one facing north and the other south, so that each person faces exactly one person opposite. The mirroring between the rows is where the marks are.',
      blocks: [
        {
          type: 'formula',
          title: 'The mirroring rules',
          items: [
            { expr: 'If X faces Y, then X’s left is on the same side of the page as Y’s right', note: 'They face opposite ways, so their left-right senses are mirror images. Everything else in dual-row follows from this line.' },
            { expr: 'In rows of n, the person facing the kth from the left of one row is the kth from the right of the other', note: 'With six per row, the person opposite the second from the left faces the second from the right — which is the fifth from the left.' },
            { expr: 'Draw the two rows one above the other, both numbered left to right', note: 'Then apply the facing direction to each row separately. Numbering one row backwards to "help" is how dual-row sets go wrong.' },
            { expr: 'A clue linking the rows is worth three clues inside one row', note: '"P faces Q" collapses two independent problems into one, so hunt for those clues first.' },
          ],
        },
        {
          type: 'note',
          title: 'Read whose left is being described',
          text:
            'In a dual-row set, "X sits to the immediate left of Y" is always about Y\'s left, and Y\'s left depends on which row Y is in. Two candidates can produce two perfectly consistent but mirror-image arrangements from the same clues, and only one of them is on the answer key. Write N or S beside every single name.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'counting',
      heading: 'Position counting',
      eyebrow: 'Quick standalone marks',
      intro:
        'Short questions about ranks in a row appear on their own in SSC and railway papers. They take ten seconds each once the four formulas are automatic.',
      blocks: [
        {
          type: 'formula',
          title: 'The four formulas',
          items: [
            { expr: 'Position from the right = total − position from the left + 1', note: 'In a row of 25, the 11th from the left is the 15th from the right.' },
            { expr: 'Total = position from the left + position from the right − 1', note: 'The minus one stops you counting the person twice. Someone 7th from the left and 9th from the right sits in a row of 15.' },
            { expr: 'People between two positions = difference of positions − 1', note: 'Seats 12 and 26 have 13 people between them.' },
            { expr: 'After two people swap, use the new position with the other person’s old one', note: 'If A was 9th from the left, swaps with B who was 12th from the right, and A is now 15th from the left, the total is 15 + 12 − 1 = 26.' },
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'How to attack a set',
      eyebrow: 'Where the time goes',
      intro:
        'A five-question set is worth five marks, which makes it worth roughly four minutes and no more. The order in which you use the clues decides whether you finish inside that budget.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Use definite clues first',
              'Anything naming an end seat, a fixed position, or two named people in a fixed relation goes on the diagram immediately. Clues containing "not" go into a margin list to be used later as filters.',
            ],
            [
              'Branch, do not guess',
              'When a clue permits two placements, draw both diagrams side by side rather than picking one. Guessing wrong costs you the whole set; carrying two cases costs you thirty seconds and one of them usually dies at the next clue.',
            ],
            [
              'Recheck every clue at the end',
              'Once a diagram is full, walk back through the clue list and tick each one off against it. This catches the case where you satisfied a clue by accident and a second arrangement also works.',
            ],
            [
              'Count the people before you start',
              'If the set names nine people and your diagram has eight seats, you have misread the shape. Thirty seconds spent here saves the whole set.',
            ],
            [
              'Know when to skip',
              'If two minutes have gone and the diagram still has three empty seats and no forced placement, leave it. In banking prelims that time buys four or five inequality or syllogism questions, which are worth exactly the same marks each.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The set that is worth attempting',
          text:
            'Scan the clues before committing. A set with two or three clues naming extreme ends or fixed positions will resolve quickly. A set built almost entirely of negative clues — "P does not sit adjacent to Q", "R is not at either end" — needs case-branching and typically takes twice as long. In a sectional-timed paper, that scan is worth more than any solving technique on this page.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A person is facing south. In which direction is their left hand pointing?',
      steps: ['Face north and your left is west, your right is east.', 'Turn around to face south and both swap.'],
      answer: 'East.',
    },
    {
      q: 'In a row of 25 students all facing north, Ravi is 11th from the left end. What is his position from the right end?',
      steps: ['Position from the right = total − position from the left + 1.', '25 − 11 + 1.'],
      answer: '15th from the right end.',
    },
    {
      q: 'Amit is 7th from the left end and 9th from the right end of a row. How many students are in the row?',
      steps: ['Total = left position + right position − 1.', '7 + 9 − 1. The subtraction prevents counting Amit twice.'],
      answer: '15 students.',
    },
    {
      q: 'In a row of 40 students facing north, Ram is 12th from the left and Shyam is 15th from the right. How many students sit between them?',
      steps: ['Convert Shyam to a left-hand position: 40 − 15 + 1 = 26th from the left.', 'People between = 26 − 12 − 1.'],
      answer: '13 students.',
    },
    {
      q: 'Anu is 9th from the left of a row. She swaps places with Bina, who was 12th from the right. Anu is now 15th from the left. How many children are in the row?',
      steps: [
        'After the swap Anu occupies Bina’s old seat, so that seat is 15th from the left and 12th from the right.',
        'Total = 15 + 12 − 1.',
      ],
      answer: '26 children.',
    },
    {
      q: 'Six friends A, B, C, D, E and F sit in a row facing north. B is at the extreme left end. C sits third to the left of F. A sits second to the right of C. D is an immediate neighbour of B. Who sits at the extreme right end?',
      steps: [
        'Seats 1 to 6 from the left; B takes seat 1.',
        'C third to the left of F allows (C, F) = (2,5) or (3,6), since seat 1 is taken.',
        'With C at 2, D has no seat — B’s only neighbour is seat 2. So C is at 3 and F at 6.',
        'A sits at seat 5, D at seat 2 and E at seat 4.',
      ],
      answer: 'F, at seat 6.',
    },
    {
      q: 'Six people A to F sit around a circular table facing the centre. A is second to the left of B, C is third to the left of A, D is immediately to the left of B, and E is not adjacent to A. Who sits third to the right of E?',
      steps: [
        'Put B at seat 1 and number clockwise; facing the centre means left is clockwise.',
        'A is at seat 3 and C at seat 6. D, immediately to B’s left, takes seat 2.',
        'Seats 4 and 5 remain. A’s neighbours are seats 2 and 4, so E must take seat 5 and F seat 4.',
        'Right is anticlockwise: three seats back from 5 gives 4, 3, then 2.',
      ],
      answer: 'D.',
    },
    {
      q: 'A, B, C, D and E sit in a row facing north. C is at the extreme right end. A sits second to the left of C. B sits immediately to the left of A, and E immediately to the right of A. Who sits at the extreme left end?',
      steps: [
        'Seats 1 to 5; C is at seat 5.',
        'A is second to the left of C, so A is at seat 3.',
        'B takes seat 2 and E takes seat 4.',
        'Only seat 1 remains.',
      ],
      answer: 'D.',
    },
    {
      q: 'Eight people sit around a square table, four at the corners facing outward and four at the middles of the sides facing the centre. Is the person third to the left of a corner-seated A at a corner or a middle?',
      steps: [
        'A faces outward, so A’s left is anticlockwise.',
        'Positions alternate corner, middle, corner, middle as you go round.',
        'Three seats from a corner is an odd number of steps, so it lands on the other kind of position.',
      ],
      answer: 'At the middle of a side.',
    },
    {
      q: 'Two rows of six face each other, row 1 facing north and row 2 facing south. If P is second from the left end of row 1 and Q faces P, what is Q’s position from the left end of row 2?',
      steps: [
        'The rows face each other, so the person opposite the kth from the left of one row is the kth from the right of the other.',
        'Q is therefore second from the right end of row 2.',
        'Convert: 6 − 2 + 1.',
      ],
      answer: 'Fifth from the left end.',
    },
  ],

  practice: [
    {
      q: 'A person is facing south. Their left hand points towards:',
      options: ['East', 'West', 'North', 'South'],
      answer: 0,
      explain: 'Facing north, left is west. Turning to face south swaps both sides, so left becomes east.',
    },
    {
      q: 'In a circular arrangement where everyone faces the centre, the immediate left of a person lies in which direction?',
      options: ['Clockwise', 'Anticlockwise', 'It depends on the seat', 'Cannot be determined'],
      answer: 0,
      explain: 'Stand at the south of the table facing the centre — you face north, your left is west, and moving south to west is clockwise.',
    },
    {
      q: 'In a circular arrangement where everyone faces outward, the immediate right of a person lies in which direction?',
      options: ['Anticlockwise', 'Clockwise', 'It depends on the seat', 'Cannot be determined'],
      answer: 1,
      explain: 'Facing outward mirrors the facing-centre case, so right becomes clockwise and left becomes anticlockwise.',
    },
    {
      q: 'In a row of 25 students facing north, Ravi is 11th from the left end. His position from the right end is:',
      options: ['14th', '16th', '13th', '15th'],
      answer: 3,
      explain: 'Position from the right = 25 − 11 + 1 = 15.',
    },
    {
      q: 'Amit is 7th from the left end and 9th from the right end of a row. The number of students in the row is:',
      options: ['16', '17', '15', '14'],
      answer: 2,
      explain: 'Total = 7 + 9 − 1 = 15. The subtraction avoids counting Amit in both directions.',
    },
    {
      q: 'In a row of 40 students, Ram is 12th from the left and Shyam is 15th from the right. The number of students between them is:',
      options: ['12', '14', '15', '13'],
      answer: 3,
      explain: 'Shyam is 40 − 15 + 1 = 26th from the left, so the students between them number 26 − 12 − 1 = 13.',
    },
    {
      q: 'Anu is 9th from the left of a row. She swaps with Bina, who was 12th from the right, and Anu is now 15th from the left. The row has:',
      options: ['24 children', '25 children', '26 children', '27 children'],
      answer: 2,
      explain: 'Anu now sits in Bina’s old seat, which is 15th from the left and 12th from the right, so the total is 15 + 12 − 1 = 26.',
    },
    {
      q: 'Six friends A, B, C, D, E, F sit in a row facing north. B is at the extreme left end. C sits third to the left of F. A sits second to the right of C. D is an immediate neighbour of B. Who sits at the extreme right end?',
      options: ['A', 'E', 'F', 'D'],
      answer: 2,
      explain: 'The only consistent row is B, D, C, E, A, F, because placing C at seat 2 leaves D with nowhere to sit beside B.',
    },
    {
      q: 'In the same arrangement — B, D, C, E, A, F facing north — who sits fourth from the left end?',
      options: ['E', 'C', 'A', 'D'],
      answer: 0,
      explain: 'Counting from the left: B, D, C, then E in the fourth seat.',
    },
    {
      q: 'Six people A to F sit around a circular table facing the centre. A is second to the left of B, C is third to the left of A, D is immediately to the left of B and E is not adjacent to A. Who sits third to the right of E?',
      options: ['A', 'C', 'F', 'D'],
      answer: 3,
      explain: 'The clockwise order is B, D, A, F, E, C. Right means anticlockwise, and three seats back from E lands on D.',
    },
    {
      q: 'In that same circular arrangement, who sits between A and E in the clockwise direction?',
      options: ['C', 'D', 'F', 'B'],
      answer: 2,
      explain: 'Clockwise the order runs B, D, A, F, E, C — so F sits between A and E.',
    },
    {
      q: 'A, B, C, D and E sit in a row facing north. C is at the extreme right end, A sits second to the left of C, B sits immediately to the left of A and E immediately to the right of A. Who is at the extreme left end?',
      options: ['B', 'E', 'D', 'A'],
      answer: 2,
      explain: 'C is at seat 5, A at seat 3, B at seat 2 and E at seat 4, so only D can occupy seat 1.',
    },
    {
      q: 'In that same row, how many people sit between B and C?',
      options: ['One', 'Two', 'Three', 'None'],
      answer: 1,
      explain: 'B is at seat 2 and C at seat 5, so seats 3 and 4 lie between them — two people.',
    },
    {
      q: 'Two rows of six face each other, row 1 facing north and row 2 facing south. P is second from the left end of row 1 and Q faces P. Q’s position from the left end of row 2 is:',
      options: ['Second', 'Third', 'Fourth', 'Fifth'],
      answer: 3,
      explain: 'Facing rows mirror, so Q is second from the right of row 2, which is 6 − 2 + 1 = 5th from the left.',
    },
    {
      q: 'P and Q sit in facing rows, P facing north and Q facing south. Something placed to P’s left lies on which side of Q?',
      options: ['Q’s left', 'Q’s right', 'Directly in front of Q', 'Directly behind Q'],
      answer: 1,
      explain: 'They face opposite directions, so their left-right senses are mirror images — P’s left is on the same side as Q’s right.',
    },
    {
      q: 'Eight people sit around a square table with four at the corners facing outward and four at the middles of the sides. The person third to the left of a corner-seated A sits:',
      options: ['At the middle of a side', 'At a corner', 'Opposite A', 'Cannot be determined'],
      answer: 0,
      explain: 'Positions alternate corner and middle, so an odd number of seats away from a corner always lands on a middle.',
    },
  ],

  faqs: [
    {
      q: 'How do I decide which way is left in a seating arrangement?',
      a: 'It depends entirely on which way the person faces. Facing north, left is west; facing south, left is east. In a circle, someone facing the centre has their left in the clockwise direction, and someone facing outward has their left anticlockwise. Write the facing direction beside every name as you place it.',
    },
    {
      q: 'What is the difference between "third to the left" and "third from the left"?',
      a: '"Third to the left of Y" is measured from Y and means three seats away, with two people in between. "Third from the left" is measured from the end of the row and means seat number three. Papers put both phrasings in the same set precisely because candidates read them as the same thing.',
    },
    {
      q: 'How do I start a circular seating arrangement when nothing is fixed?',
      a: 'Place any one named person at any seat and number the rest clockwise. A circular arrangement is only ever determined up to rotation, and every question asks about relative position, so the arbitrary choice costs you nothing and gives you a frame to build on.',
    },
    {
      q: 'How do dual-row arrangements work?',
      a: 'Two rows face each other, so their left-right senses are mirrored: whatever lies to the left of a person in one row lies to the right of the person opposite. The person facing the kth from the left of one row is the kth from the right of the other. Draw both rows left to right and apply each row’s facing separately.',
    },
    {
      q: 'What is the formula for position from the other end of a row?',
      a: 'Position from the right = total − position from the left + 1. To find the total instead, add the two positions and subtract one: someone 7th from the left and 9th from the right sits in a row of 15.',
    },
    {
      q: 'How many people sit between two given positions?',
      a: 'Subtract the positions and then subtract one more. Seats 12 and 26 have 26 − 12 − 1 = 13 people between them. Forgetting the final subtraction is the most common slip in position-counting questions.',
    },
    {
      q: 'In which order should I use the clues?',
      a: 'Definite placements first — extreme ends, fixed positions, and pairs tied together. Negative clues such as "P does not sit next to Q" go into a margin list and are used as filters afterwards. When a clue allows two placements, draw both cases rather than choosing one.',
    },
    {
      q: 'How much time should a seating arrangement set take?',
      a: 'A five-question set is worth about four minutes. If two minutes have passed and no placement is forced, abandon it — the same four minutes will buy four or five syllogism or inequality questions worth the same marks each.',
    },
    {
      q: 'How many seating arrangement questions come in bank exams?',
      a: 'Banking prelims usually carry one or two sets, so five to ten questions, and mains two or three sets often with an extra variable such as a floor or an age. SSC papers ask at most one, and RRB NTPC two or three simple linear ones.',
    },
    {
      q: 'What is a square table arrangement?',
      a: 'Eight people sit around a square table — four at the corners and four at the middles of the sides — with the two groups facing opposite ways. Positions alternate corner and middle as you go round, which means an odd number of seats from a corner always lands on a middle, and a person sits opposite someone of the same kind.',
    },
  ],

  related: [
    { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
    { label: 'Blood Relations', to: '/study-material/reasoning/blood-relations/' },
    { label: 'Syllogism', to: '/study-material/reasoning/syllogism/' },
    { label: 'Coding-Decoding', to: '/study-material/reasoning/coding-decoding/' },
    { label: 'Series', to: '/study-material/reasoning/series/' },
    { label: 'All Reasoning', to: '/study-material/reasoning/' },
  ],
}
