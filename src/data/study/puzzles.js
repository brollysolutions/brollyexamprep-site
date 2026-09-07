/**
 * Puzzles — /study-material/reasoning/puzzles/
 *
 * Written as a companion to Seating Arrangement rather than a repeat of it:
 * the shapes here are grids rather than rings, and the skill being taught is
 * choosing the right spine for the table, branching instead of guessing, and
 * knowing within thirty seconds whether a set is worth four minutes.
 */
export default {
  subject: 'reasoning',
  subjectName: 'Reasoning',
  slug: 'puzzles',
  title: 'Puzzles',
  seoTitle: 'Reasoning Puzzles for Bank & SSC Exams | Floor, Box, Scheduling & Practice',
  metaDescription:
    'Complete Reasoning Puzzles study material for banking, SSC and railway exams — floor and flat puzzles, box and stack puzzles, day and month scheduling.',
  readMinutes: 20,
  lead: [
    'Puzzles are the largest single block in a banking reasoning paper and the reason most candidates fail to finish the section. A five-question set is worth five marks — the same as five inequality questions that take forty seconds each — so the topic is really a test of judgement as much as logic.',
    'What follows is a working method rather than a catalogue: how to choose the spine of your grid, which clue to use first, how to branch without losing the thread, and how to recognise a set that will not resolve in time. Every type on this page is solved with the same four moves.',
  ],

  weightage: [
    { exam: 'Banking Prelims (IBPS / SBI)', count: '10–15 questions', note: 'Two or three sets, typically a floor puzzle and a scheduling or box puzzle.' },
    { exam: 'Banking & Insurance Mains', count: '15–20 questions', note: 'Three or four sets, usually with two variables each and one uncertain-number puzzle.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '0–2 questions', note: 'Short comparison or ordering questions rather than full sets.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'One simple linear or floor puzzle with five or six people.' },
    { exam: 'State PSC & Police exams', count: '3–5 questions', note: 'One moderate set, often floor-based.' },
  ],

  contents: [
    { icon: 'layers', title: 'The puzzle types', sub: 'Six shapes that cover every paper', href: '#types' },
    { icon: 'target', title: 'The grid method', sub: 'Choosing the spine and filling it', href: '#grid' },
    { icon: 'chart', title: 'Floor and flat puzzles', sub: 'Numbering, and what "above" means', href: '#floor' },
    { icon: 'book', title: 'Box and stack puzzles', sub: 'Gaps, immediacy and the ends', href: '#box' },
    { icon: 'clock', title: 'Day and month scheduling', sub: 'Calendar facts the puzzle assumes', href: '#scheduling' },
    { icon: 'user', title: 'Comparison and ranking', sub: 'When the order cannot be completed', href: '#comparison' },
    { icon: 'refresh', title: 'Two-variable and uncertain puzzles', sub: 'The mains-level shapes', href: '#advanced' },
    { icon: 'bell', title: 'Clue order and when to skip', sub: 'Where the four minutes go', href: '#method' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'types',
      heading: 'The puzzle types',
      eyebrow: 'Recognise the shape first',
      intro:
        'Naming the type in the first ten seconds tells you what the spine of your grid should be, and the spine decides how fast everything else falls into place.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Floor or flat puzzle',
              'Five to eight people on as many floors, sometimes with two flats per floor. The floors are the spine because they are already numbered and ordered — that ordering is free information no other type gives you.',
            ],
            [
              'Box or stack puzzle',
              'Boxes placed one above another. Structurally identical to a floor puzzle, but the language is different: "immediately above", "three boxes between", "at the bottom".',
            ],
            [
              'Day, month or date scheduling',
              'People assigned to days of a week, months of a year, or dates within two months. The calendar itself carries constraints — how many days a month has, which months are consecutive — and the puzzle expects you to know them.',
            ],
            [
              'Tabular puzzle',
              'People matched to two or three attributes — a city, a subject, a colour — with no natural order. Nothing is ordered here, so the spine is whichever attribute the clues mention most often.',
            ],
            [
              'Comparison or ranking',
              'Heights, weights, salaries or marks compared pairwise. The answer is a chain, and the chain very often stays incomplete on purpose.',
            ],
            [
              'Uncertain-number puzzle',
              'A queue or a row where the total is not given and must be deduced. Treat the positions as arithmetic and the total falls out of the last clue.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'grid',
      heading: 'The grid method',
      eyebrow: 'Learn this properly',
      intro:
        'Every puzzle on this page is solved by the same four moves. What changes between types is only what goes down the left-hand column.',
      blocks: [
        {
          type: 'formula',
          title: 'The four moves',
          items: [
            { expr: 'Move 1 — draw the spine and number it', note: 'Floors bottom to top, days Monday to Sunday, boxes bottom to top. Anything with a natural order is the spine; if nothing has one, use the attribute that appears in the most clues.' },
            { expr: 'Move 2 — place every definite clue', note: 'A clue naming a specific floor, day or end position goes straight on the grid. Everything containing "not" goes into a margin list instead.' },
            { expr: 'Move 3 — branch on the strongest ambiguous clue', note: 'Pick the clue with the fewest possible placements — usually two or three — and draw a separate grid for each. Then let the remaining clues kill the wrong ones.' },
            { expr: 'Move 4 — apply the negative clues last', note: 'Negative clues rarely place anyone but they eliminate cases very efficiently, which is exactly what you need once you are carrying two or three grids.' },
          ],
        },
        {
          type: 'note',
          title: 'The gap rule, which is where half the errors live',
          text:
            '"Only three people sit between P and Q" means their positions differ by four, not three. "P is three floors above Q" means the difference is three. Two different sentences, two different arithmetic operations, and papers use both inside a single set. Convert every such clue into a number the moment you read it, and write that number down.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'floor',
      heading: 'Floor and flat puzzles',
      eyebrow: 'The most common set',
      intro:
        'The building is numbered for you, which makes this the friendliest type in the paper. The clues are almost always about differences between floor numbers.',
      blocks: [
        {
          type: 'formula',
          title: 'Reading floor clues',
          items: [
            { expr: '"P lives above Q" only means P’s number is larger', note: 'It does not mean immediately above. If the clue meant that, it would say so.' },
            { expr: '"P lives immediately above Q" means P = Q + 1', note: 'The strongest floor clue there is, because it fixes a pair as a block you can slide up and down.' },
            { expr: '"Only two people live between P and Q" means the difference is three', note: 'And it does not say which of them is higher — that is usually two cases, so branch.' },
            { expr: '"P lives on an even-numbered floor" halves the options at once', note: 'Parity clues are underrated. In a seven-floor building, "odd floor above the fourth" leaves only floors five and seven.' },
            { expr: 'For two flats per floor, treat it as a grid with two columns', note: 'Clues then split into floor clues and flat clues, and the flat clues usually resolve last.' },
          ],
        },
        {
          type: 'example',
          q: 'Five people P, Q, R, S and T live on a five-storey building, floor 1 at the bottom. P lives above Q. R lives on an even-numbered floor. S lives immediately above T. Only two people live between P and T. Who lives on the top floor?',
          steps: [
            'S immediately above T gives four possible pairs: T on 1, 2, 3 or 4 with S one above.',
            '"Only two between P and T" means the floors differ by three.',
            'If T is on 1, then P is on 4 — but R needs an even floor and both 2 and 4 are gone. Rejected.',
            'If T is on 3 or 4, P would need floor 6 or 0, or the clue "P above Q" fails. Rejected.',
            'So T is on 2, S on 3 and P on 5. R takes even floor 4, and Q takes floor 1, which satisfies P above Q.',
          ],
          answer: 'P lives on the top floor. The order from the bottom is Q, T, S, R, P.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'box',
      heading: 'Box and stack puzzles',
      eyebrow: 'Same grid, different words',
      intro:
        'A stack of boxes is a building with the names changed. What differs is the vocabulary, and one piece of vocabulary in particular.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              '"Immediately above" versus "above"',
              'Immediately above means the very next position; above means anywhere higher. Boxes puzzles lean on this distinction far more than floor puzzles do.',
            ],
            [
              '"At the top" and "at the bottom"',
              'The equivalent of an extreme end in a row, and just as valuable. If a set gives you one of these, place it before reading anything else.',
            ],
            [
              '"How many boxes are above X"',
              'A counting clue that fixes X’s position outright in a stack of known size. "Three boxes are above X" in a stack of seven puts X at position four.',
            ],
            [
              'Boxes with weights or colours attached',
              'A two-variable puzzle in disguise. Solve the stack first and attach the second attribute afterwards — never both at once.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'Seven boxes A to G are stacked. E is at the top and A at the bottom. C is immediately above A. Three boxes lie between C and D. B is immediately below D. Only one box lies between B and F. Which box is immediately above G?',
          steps: [
            'Number the positions 1 at the bottom to 7 at the top. A is at 1, E at 7, and C — immediately above A — is at 2.',
            'Three boxes between C and D means the positions differ by four, so D is at 6.',
            'B is immediately below D, so B is at 5.',
            'Only one box between B and F means the gap is two, so F is at 3 or 7. Position 7 is E, so F is at 3.',
            'Only position 4 remains, so G is there, and the box immediately above it is at position 5.',
          ],
          answer: 'B is immediately above G. The stack from the bottom is A, C, F, G, B, D, E.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'scheduling',
      heading: 'Day and month scheduling',
      eyebrow: 'The calendar is a clue',
      intro:
        'When people are assigned to days or months, the calendar itself carries information the paper never spells out. Candidates lose these sets to arithmetic, not to logic.',
      blocks: [
        {
          type: 'table',
          caption: 'Calendar facts these puzzles assume you know',
          head: ['Fact', 'Detail', 'How it is used'],
          rows: [
            ['Months with 31 days', 'January, March, May, July, August, October, December', 'A clue such as "born in a month of 31 days" cuts the options in half.'],
            ['Months with 30 days', 'April, June, September, November', 'The four-month set is small enough to test directly.'],
            ['February', '28 days, or 29 in a leap year', 'Puzzles say "a non-leap year" when it matters — read that line.'],
            ['Days in a week', 'Monday through Sunday, seven positions', 'Treat exactly like a row of seven seats with fixed labels.'],
            ['Dates across two months', 'Usually the 5th, 12th, 19th and 26th of two named months', 'Eight slots in a fixed order — the same grid, with longer labels.'],
          ],
        },
        {
          type: 'example',
          q: 'Six people attend a seminar on six different days from Monday to Saturday. A attends on Wednesday. B attends immediately before C. Only two people attend between A and D. E attends before A but not on Monday. Who attends on Saturday?',
          steps: [
            'Number the days 1 to 6 from Monday. A is on day 3.',
            '"Only two between A and D" means the days differ by three, so D is on day 6 — day 0 does not exist.',
            'E is before Wednesday but not Monday, which leaves only Tuesday. E is on day 2.',
            'Days 1, 4 and 5 remain. B immediately before C needs a consecutive pair, and the only one available is 4 and 5.',
            'So B is on Thursday, C on Friday and F takes Monday.',
          ],
          answer: 'D attends on Saturday.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'comparison',
      heading: 'Comparison and ranking',
      eyebrow: 'Chains, not tables',
      intro:
        'Heights, weights, marks or salaries compared two at a time. Write them as a single chain of inequalities and the questions answer themselves — including the ones whose answer is that they cannot be answered.',
      blocks: [
        {
          type: 'formula',
          title: 'Building the chain',
          items: [
            { expr: 'Write every comparison in one direction only', note: 'Pick "greater than" and stick to it. Mixing "taller than" and "shorter than" in the same line is how chains get reversed.' },
            { expr: 'Join chains only where they share a name', note: 'A < B and C < D cannot be merged. Two separate chains are a legitimate final answer.' },
            { expr: 'The tallest is determined only if one name sits above everyone', note: 'If two people are unbeaten in separate chains, there is no answer to "who is tallest".' },
            { expr: '"X is not the tallest" is an elimination, not a placement', note: 'It removes one option and often that is exactly enough to finish the top of the chain.' },
            { expr: 'Expect "cannot be determined" to be correct', note: 'These sets deliberately leave the bottom of the chain open. If two people are unordered relative to each other, say so rather than inventing an order.' },
          ],
        },
        {
          type: 'example',
          q: 'Five friends have different heights. A is taller than B but shorter than C. D is taller than C. E is not the tallest. Who is the tallest, and who is the shortest?',
          steps: [
            'A taller than B and shorter than C gives B < A < C.',
            'D taller than C extends the chain to B < A < C < D.',
            'E is not the tallest, so E cannot sit above D. D is therefore the tallest.',
            'But nothing compares E with B, A or C — E could sit anywhere below D.',
          ],
          answer: 'D is the tallest. The shortest cannot be determined, because E and B are never compared.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'advanced',
      heading: 'Two-variable and uncertain puzzles',
      eyebrow: 'Mains level',
      intro:
        'Two shapes separate a mains paper from a prelims one. Neither is harder to reason about; both are easier to mismanage.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Two-variable puzzles',
              'People plus floors plus, say, a car brand. Solve the ordered variable completely first, then attach the second as a new column. Trying to satisfy both at once triples the number of cases you are carrying.',
            ],
            [
              'Which variable to solve first',
              'Always the one with a natural order — floors, days, positions. An unordered attribute such as a colour gives you no structure to eliminate against until the ordered one is settled.',
            ],
            [
              'Uncertain-number puzzles',
              'A queue whose length is not given. Convert every clue into a position number relative to one end, and the last clue — usually naming someone at the other end — closes the total.',
            ],
            [
              'Uncertain puzzles with a range',
              'Some sets ask for the minimum or maximum possible number of people. Build the tightest arrangement for the minimum and the loosest for the maximum; both are legitimate answers to different questions in the same set.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'Some people stand in a queue. A is 5th from the front. B stands 3 places behind A. Exactly two people stand between B and C, and C is at the back. How many people are in the queue?',
          steps: [
            'A is at position 5 from the front.',
            'B is three places behind A, so B is at position 8.',
            'Exactly two people between B and C means the positions differ by three, and C is behind B, so C is at position 11.',
            'C is at the back, so position 11 is the last one.',
          ],
          answer: '11 people.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'Clue order and when to skip',
      eyebrow: 'Where the four minutes go',
      intro:
        'The difference between a candidate who clears the sectional cut-off and one who does not is rarely the reasoning. It is the decision made in the first thirty seconds of each set.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Scan before you commit',
              'Count the definite clues — the ones naming a specific floor, day, end or fixed pair. Three or more and the set will resolve quickly. Fewer than two and you are looking at case work.',
            ],
            [
              'Branch on paper, never in your head',
              'When a clue allows two placements, draw two grids. Holding the second case mentally while filling the first is the single most reliable way to lose a set you had already solved.',
            ],
            [
              'Kill cases with negative clues',
              '"P does not live on an even floor" places nobody but can end a whole branch in one line. Save them for exactly this.',
            ],
            [
              'Verify against every clue before answering',
              'Walk the clue list once against the finished grid. It costs fifteen seconds and it catches the accidental fit, where your grid satisfies the clues but so does another one.',
            ],
            [
              'Abandon at the two-minute mark',
              'If nothing is forced after two minutes, the set is not going to be quick. Leave it, bank the easier questions, and come back only if time remains. Five marks are not worth eight minutes when they cost four elsewhere.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Solve the questions, not the puzzle',
          text:
            'Occasionally a set asks five questions that all depend on the top three floors, and the bottom of the grid never matters. Read the questions after two minutes of solving — if the arrangement you already have answers three of them, take those three marks and move on rather than completing a diagram nobody is paying you for.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Five people P, Q, R, S and T live on a five-storey building, floor 1 at the bottom. P lives above Q. R lives on an even floor. S lives immediately above T. Only two people live between P and T. Who lives on the top floor?',
      steps: [
        'The S-above-T block can sit at T = 1, 2, 3 or 4.',
        '"Two people between P and T" means their floors differ by three.',
        'T = 1 forces P = 4 and leaves no even floor for R. T = 3 or 4 pushes P off the building or breaks "P above Q".',
        'So T = 2, S = 3, P = 5, R = 4 and Q = 1.',
      ],
      answer: 'P, on floor 5.',
    },
    {
      q: 'Six people attend a seminar from Monday to Saturday. A attends on Wednesday, B immediately before C, only two people between A and D, and E before A but not on Monday. Who attends on Monday?',
      steps: [
        'A is on day 3, so D — three days away — is on day 6.',
        'E must be before Wednesday and not Monday, so E is on Tuesday.',
        'Days 1, 4 and 5 remain, and the only consecutive pair for B and C is 4 and 5.',
        'That leaves day 1 for F.',
      ],
      answer: 'F attends on Monday.',
    },
    {
      q: 'Seven boxes A to G are stacked, E at the top and A at the bottom. C is immediately above A, three boxes lie between C and D, B is immediately below D, and only one box lies between B and F. How many boxes lie between F and B?',
      steps: [
        'A is at 1, C at 2, E at 7.',
        'Three boxes between C and D puts D at 6, and B immediately below it at 5.',
        'One box between B and F means a gap of two, so F is at 3 — position 7 is taken.',
        'F is at 3 and B at 5.',
      ],
      answer: 'One box — G, at position 4.',
    },
    {
      q: 'A is taller than B but shorter than C. D is taller than C. E is not the tallest. Who is the tallest?',
      steps: ['B < A < C from the first statement.', 'D above C extends it to B < A < C < D.', 'E cannot be above D, so nothing outranks D.'],
      answer: 'D is the tallest.',
    },
    {
      q: 'In the same set of five friends, who is the shortest?',
      steps: [
        'The chain is B < A < C < D, with E known only to be below D.',
        'E is never compared with B, A or C.',
        'So E could be the shortest, or could sit between any two of them.',
      ],
      answer: 'It cannot be determined.',
    },
    {
      q: 'Four friends P, Q, R and S each like a different colour among red, blue, green and yellow. P likes neither red nor blue. Q likes green. S likes blue. Who likes red?',
      steps: [
        'Q takes green, so P — barred from red and blue — must take yellow.',
        'S takes blue.',
        'Only red and only R remain.',
      ],
      answer: 'R likes red.',
    },
    {
      q: 'In a stack of boxes, only three boxes lie between P and Q. By how much do their positions differ?',
      steps: ['Count the boxes from P to Q: three in between, plus the step onto Q itself.', 'So the difference is three plus one.'],
      answer: 'Four positions.',
    },
    {
      q: 'In a seven-storey building, X lives on floor 3 and exactly three people live between X and Y. Which floor does Y live on?',
      steps: ['Three people between means the floors differ by four.', 'Floor 3 minus 4 is −1, which does not exist.', 'Floor 3 plus 4 is 7.'],
      answer: 'Floor 7.',
    },
    {
      q: 'Five people are born in January, March, May, August and November of the same year. One is born in a month with 30 days. Which month is it?',
      steps: [
        'January, March, May and August all have 31 days.',
        'The 30-day months are April, June, September and November.',
        'Only one of the five listed months appears in that set.',
      ],
      answer: 'November.',
    },
    {
      q: 'Some people stand in a queue. A is 5th from the front, B stands 3 places behind A, exactly two people stand between B and C, and C is at the back. How many people are in the queue?',
      steps: ['A is at 5, so B is at 8.', 'Two people between B and C means a gap of three, so C is at 11.', 'C is last, so the queue ends there.'],
      answer: '11 people.',
    },
  ],

  practice: [
    {
      q: 'Five people P, Q, R, S, T live on a five-storey building, floor 1 at the bottom. P lives above Q. R lives on an even floor. S lives immediately above T. Only two people live between P and T. Who lives on the top floor?',
      options: ['S', 'R', 'P', 'T'],
      answer: 2,
      explain: 'The only consistent arrangement from the bottom is Q, T, S, R, P — every other placement of the S-above-T block either leaves R without an even floor or pushes P off the building.',
    },
    {
      q: 'In that same building, who lives on the third floor?',
      options: ['S', 'T', 'R', 'Q'],
      answer: 0,
      explain: 'The order from the bottom is Q, T, S, R, P, so the third floor holds S.',
    },
    {
      q: 'In that same building, how many people live between R and Q?',
      options: ['One', 'Three', 'None', 'Two'],
      answer: 3,
      explain: 'Q is on floor 1 and R on floor 4, so floors 2 and 3 lie between them — two people.',
    },
    {
      q: 'Six people attend a seminar on six different days from Monday to Saturday. A attends on Wednesday, B immediately before C, only two people between A and D, and E before A but not on Monday. Who attends on Saturday?',
      options: ['D', 'C', 'B', 'F'],
      answer: 0,
      explain: 'A is on day 3, so D is three days away on day 6 — day 0 does not exist.',
    },
    {
      q: 'In that same seminar, who attends on Monday?',
      options: ['E', 'B', 'F', 'C'],
      answer: 2,
      explain: 'E must take Tuesday, and B and C take the only consecutive pair left, Thursday and Friday. That leaves Monday for F.',
    },
    {
      q: 'In that same seminar, how many people attend between E and B?',
      options: ['None', 'One', 'Two', 'Three'],
      answer: 1,
      explain: 'E attends on Tuesday and B on Thursday, so only Wednesday lies between them — one person, A.',
    },
    {
      q: 'Seven boxes A to G are stacked, E at the top and A at the bottom. C is immediately above A, three boxes lie between C and D, B is immediately below D, and only one box lies between B and F. Which box is immediately above G?',
      options: ['F', 'D', 'C', 'B'],
      answer: 3,
      explain: 'The stack from the bottom is A, C, F, G, B, D, E, so B sits directly above G.',
    },
    {
      q: 'In that same stack, how many boxes lie between F and B?',
      options: ['None', 'One', 'Two', 'Three'],
      answer: 1,
      explain: 'F is at position 3 and B at position 5, so only G at position 4 lies between them.',
    },
    {
      q: 'A is taller than B but shorter than C. D is taller than C. E is not the tallest. Who is the tallest?',
      options: ['D', 'C', 'E', 'A'],
      answer: 0,
      explain: 'The chain is B < A < C < D, and E is barred from the top, so nothing outranks D.',
    },
    {
      q: 'In that same group of five friends, who is the shortest?',
      options: ['B', 'E', 'A', 'Cannot be determined'],
      answer: 3,
      explain: 'E is only known to be below D and is never compared with B, A or C, so the bottom of the chain stays open.',
    },
    {
      q: 'Four friends P, Q, R, S each like a different colour among red, blue, green and yellow. P likes neither red nor blue, Q likes green and S likes blue. Who likes red?',
      options: ['P', 'Q', 'R', 'S'],
      answer: 2,
      explain: 'Q takes green and S blue, so P — barred from red — takes yellow, leaving red for R.',
    },
    {
      q: 'In a seven-storey building, X lives on floor 3 and exactly three people live between X and Y. Y lives on floor:',
      options: ['6', '2', '8', '7'],
      answer: 3,
      explain: 'Three people between means a difference of four. Floor 3 − 4 does not exist, so Y is on floor 3 + 4 = 7.',
    },
    {
      q: 'In a stack of boxes, "only three boxes are placed between P and Q" means their positions differ by:',
      options: ['Two', 'Three', 'Four', 'Five'],
      answer: 2,
      explain: 'Three boxes in between, plus the final step onto Q itself, makes a difference of four.',
    },
    {
      q: 'Five people are born in January, March, May, August and November of the same year. The one born in a month of 30 days was born in:',
      options: ['January', 'March', 'August', 'November'],
      answer: 3,
      explain: 'January, March, May and August all have 31 days. Of the listed months, only November has 30.',
    },
    {
      q: 'P is heavier than Q but lighter than R. S is heavier than R. T is lighter than Q. Who is the second heaviest?',
      options: ['P', 'R', 'S', 'Q'],
      answer: 1,
      explain: 'The chain is T < Q < P < R < S, so S is heaviest and R comes second.',
    },
    {
      q: 'In a seven-floor building numbered 1 at the bottom, A lives on an odd-numbered floor above the fourth floor. How many floors could A live on?',
      options: ['One', 'Two', 'Three', 'Four'],
      answer: 1,
      explain: 'The floors above the fourth are 5, 6 and 7, and only 5 and 7 are odd.',
    },
  ],

  faqs: [
    {
      q: 'What is the best way to solve reasoning puzzles?',
      a: 'Draw a grid whose left-hand column is the variable with a natural order — floors, days, positions — then place every definite clue, branch into separate grids wherever a clue allows two placements, and use negative clues last to kill the wrong branches. The same four moves solve every puzzle type in a banking paper.',
    },
    {
      q: 'Does "only three people between P and Q" mean a gap of three?',
      a: 'No — it means their positions differ by four. Three people sit in between, and one more step takes you onto Q. "P is three floors above Q" is the clue that means a difference of three. Papers place both phrasings in one set deliberately.',
    },
    {
      q: 'Which variable should I solve first in a two-variable puzzle?',
      a: 'Always the ordered one. Floors, days and positions come with structure you can eliminate against; an unordered attribute such as a colour or a car brand gives you nothing to work with until the ordering is settled. Solve the order completely, then attach the second attribute as a new column.',
    },
    {
      q: 'How much time should I spend on one puzzle set?',
      a: 'About four minutes for five questions. Scan the clues first — three or more definite clues and the set will resolve quickly; fewer than two and you are facing case work. If nothing is forced after two minutes, leave the set and spend the time on syllogism or inequality questions, which are worth the same marks each.',
    },
    {
      q: 'What is an uncertain-number puzzle?',
      a: 'A queue or row whose total is not stated. Convert each clue into a position counted from one end, and the clue naming someone at the far end closes the total. If A is 5th from the front, B is 3 behind at position 8, and C is 3 places behind B at the back, the queue has 11 people.',
    },
    {
      q: 'Can the answer to a comparison puzzle be "cannot be determined"?',
      a: 'Frequently, and it is a real option rather than a trap. Comparison sets often leave two people unordered relative to each other on purpose. If your chain has a genuine gap, the honest answer is that the order cannot be fixed.',
    },
    {
      q: 'How many puzzle questions come in bank exams?',
      a: 'Banking prelims usually carry two or three sets, so ten to fifteen questions, and mains three or four sets running to fifteen or twenty. Together with seating arrangement, puzzles make up the majority of the reasoning section, which is why time management on them decides the sectional score.',
    },
    {
      q: 'What calendar facts do scheduling puzzles assume?',
      a: 'Which months have 31 days — January, March, May, July, August, October and December — which have 30, and that February has 28 days unless the puzzle says leap year. A clue such as "born in a month of 30 days" is useless unless you know the four-month set by heart.',
    },
    {
      q: 'Should I guess when a clue allows two placements?',
      a: 'No — draw both grids. Guessing wrong costs you the entire set, while carrying two cases costs about thirty seconds and one of them usually dies at the next clue. Branch on the clue with the fewest possibilities, and keep the branches on paper rather than in your head.',
    },
    {
      q: 'Why does my arrangement satisfy the clues but still give wrong answers?',
      a: 'Almost always because a second arrangement also satisfies them and you found the other one. Before answering, walk back through the clue list and tick each clue off against your finished grid — it takes fifteen seconds and catches the accidental fit.',
    },
  ],

  related: [
    { label: 'Seating Arrangement', to: '/study-material/reasoning/seating-arrangement/' },
    { label: 'Blood Relations', to: '/study-material/reasoning/blood-relations/' },
    { label: 'Syllogism', to: '/study-material/reasoning/syllogism/' },
    { label: 'Series', to: '/study-material/reasoning/series/' },
    { label: 'Coding-Decoding', to: '/study-material/reasoning/coding-decoding/' },
    { label: 'All Reasoning', to: '/study-material/reasoning/' },
  ],
}
