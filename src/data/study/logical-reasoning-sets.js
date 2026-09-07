/**
 * Logical Reasoning Sets — /study-material/dilr/logical-reasoning-sets/
 *
 * CAT-level reasoning sets: four to six questions built on one set of
 * conditions, with far more deduction and far less arithmetic than the banking
 * puzzles. Written around notation and the discipline of not guessing.
 */
export default {
  subject: 'dilr',
  subjectName: 'DILR',
  slug: 'logical-reasoning-sets',
  title: 'Logical Reasoning Sets',
  seoTitle: 'Logical Reasoning Sets for CAT | Arrangement, Games, Grids & Practice',
  metaDescription:
    'Complete logical reasoning study material for CAT DILR and other entrance exams — the families of LR set, arrangement and grid problems.',
  readMinutes: 22,
  lead: [
    'A logical reasoning set gives you a small number of conditions and asks four or five questions that all depend on working out what the conditions force. Unlike a banking puzzle, the answer options rarely help — CAT questions are often typed, and even the multiple-choice ones are usually about what can or cannot be determined rather than about a specific value.',
    'That makes this the most method-dependent topic in any entrance paper. Two candidates of equal ability differ enormously in how efficiently they represent the conditions, how systematically they branch when a condition permits two possibilities, and how quickly they abandon a set that is not resolving. This page is about those three things.',
  ],

  weightage: [
    { exam: 'CAT DILR section', count: '2–3 sets of 4–5 questions', note: 'Logical reasoning and data interpretation are no longer clearly separable in CAT; most sets require both.' },
    { exam: 'XAT Decision Making', count: '5–8 questions', note: 'Presented as business scenarios but requiring the same deductive discipline.' },
    { exam: 'Banking Reasoning', count: '15–20 questions', note: 'In a more standardised form — see the seating arrangement and puzzles pages for that treatment.' },
    { exam: 'GMAT and GRE', count: 'Not a separate section', note: 'The related skills appear in critical reasoning and quantitative comparison.' },
    { exam: 'SSC CGL Reasoning', count: '4–6 questions', note: 'Simpler arrangement and coding sets rather than multi-question sets.' },
  ],

  contents: [
    { icon: 'layers', title: 'The families of set', sub: 'What CAT actually asks', href: '#types' },
    { icon: 'user', title: 'Arrangement sets', sub: 'Linear, circular and multi-variable', href: '#arrangement' },
    { icon: 'doc', title: 'Grid and matching', sub: 'Assigning attributes to entities', href: '#grid' },
    { icon: 'chart', title: 'Games and tournaments', sub: 'Scoring and elimination', href: '#games' },
    { icon: 'refresh', title: 'Quantitative sets', sub: 'Networks, routes and distributions', href: '#quantitative' },
    { icon: 'target', title: 'Notation and method', sub: 'How to represent conditions', href: '#notation' },
    { icon: 'bell', title: 'Errors and recovery', sub: 'What goes wrong and what to do', href: '#errors' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'types',
      heading: 'The families of set',
      eyebrow: 'What CAT actually asks',
      intro:
        'Sets fall into a handful of families, and recognising the family within the first thirty seconds determines how you should represent the information.',
      blocks: [
        {
          type: 'table',
          caption: 'The families and their representations',
          head: ['Family', 'Typical content', 'Representation'],
          rows: [
            ['Arrangement', 'People in a row, around a table, on floors of a building, in a queue', 'A line or circle of positions, filled by elimination.'],
            ['Grid or matching', 'Entities with several attributes each — name, city, subject, colour', 'A table with entities as rows and attribute types as columns, or a matrix of ticks and crosses.'],
            ['Selection and grouping', 'Choosing a team or committee subject to conditions', 'A list of constraints, and enumeration of the permitted combinations.'],
            ['Games and tournaments', 'Matches, scores, rounds, eliminations', 'A results table plus a running points calculation.'],
            ['Networks and routes', 'Cities connected by roads with distances or capacities', 'A sketch of the network, with all feasible paths listed before any is evaluated.'],
            ['Distribution and allocation', 'Dividing quantities among entities subject to limits', 'Inequalities, with the extreme cases computed first.'],
            ['Venn and set overlap', 'Categories with intersections', 'A Venn diagram filled from the innermost region outward.'],
            ['Ordering and ranking', 'Positions in a sequence with partial information', 'A partial order, with what is fixed distinguished from what is merely constrained.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why CAT sets differ from banking puzzles',
              'Banking puzzles follow standardised templates — eight people, one variable, a fixed set of clue types — so a practised candidate recognises the whole shape immediately. CAT sets are designed not to be recognisable: they invent a scenario, invent the rules, and often ask what cannot be determined rather than what is. Template memorisation does not transfer; the underlying method does.',
            ],
            [
              'The questions that reveal the design',
              'CAT frequently asks "how many of the following can be determined", "what is the maximum possible value" or "which of these arrangements is not possible". These require you to know not just one valid arrangement but the full space of valid arrangements — which is why stopping at the first consistent solution is so often wrong.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'arrangement',
      heading: 'Arrangement sets',
      eyebrow: 'Linear, circular and multi-variable',
      intro:
        'The most familiar family, and the one where notation discipline pays most directly.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Start with what is fixed',
              'Enter the definite conditions first — anyone whose position is stated absolutely, and any block of people who must sit together. Conditional and negative information comes second. Beginning with a conditional clue means guessing, and a guess made early contaminates everything after it.',
            ],
            [
              'Blocks before individuals',
              'A condition placing two people adjacent creates a block that can be positioned as a unit. Blocks constrain the arrangement far more than individual placements do, so treat "A and B sit together" as more valuable information than "C sits at one end", and place blocks first.',
            ],
            [
              'Circular arrangements',
              'Fix one person\'s position arbitrarily, since only relative positions matter. Then establish whether people face the centre or outward, because "to the left of" reverses meaning between the two, and the whole set collapses if this is read wrongly. Where some face in and some face out, mark each person\'s orientation explicitly on the diagram.',
            ],
            [
              'Multi-variable arrangements',
              'A set may fix positions and also assign each person a city, a profession and an age. Do not attempt to hold these in one diagram. Use the positional line for positions, and a table alongside it for the attributes, transferring between them as deductions are made.',
            ],
            [
              'Branch systematically',
              'When a condition permits exactly two possibilities, draw both, label them Case 1 and Case 2, and develop each until one produces a contradiction. Holding two possibilities in your head instead of on paper is the commonest cause of a set that takes twenty minutes and yields nothing.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Negative information is information',
          text:
            '"D does not sit at either end" eliminates two positions and is worth as much as a positive placement in a small arrangement. Mark negatives explicitly — a crossed-out cell or a note beneath the position — rather than trying to remember them. In sets with many negative conditions, a grid of ticks and crosses is more reliable than a line diagram.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'grid',
      heading: 'Grid and matching',
      eyebrow: 'Assigning attributes to entities',
      intro:
        'Where each of several entities must be matched to one of each of several attributes, and no two share an attribute. The matrix method makes these almost mechanical.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The matrix',
              'Draw a grid with entities down the side and one attribute type across the top. Enter a tick when a pairing is established and a cross when it is ruled out. The essential discipline is that a tick in a cell means crosses in the whole of that row and that column, because each entity takes one value and each value goes to one entity.',
            ],
            [
              'Propagate every deduction immediately',
              'The mechanical power of the method comes from propagation. Each tick generates several crosses; a row or column with a single remaining blank generates a tick; and that tick generates further crosses. Working through this cascade after every entry usually resolves the grid without any reasoning beyond bookkeeping.',
            ],
            [
              'Multiple attribute types',
              'With three or more attribute types, either use several grids or use one wide table with entities as rows and attribute types as columns. The table is easier to read but harder to record negative information in; the grids handle negatives well but require deductions to be carried between them. For most sets, one table plus a short list of pending negatives works best.',
            ],
            [
              'Conditional clues',
              'A clue of the form "if X is from Delhi then Y teaches physics" cannot be entered directly. Note it separately as a pending condition and check it after each substantive deduction. Many sets are constructed so that a conditional clue becomes decisive only late, and candidates who entered it as a fact early have already gone wrong.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'games',
      heading: 'Games and tournaments',
      eyebrow: 'Scoring and elimination',
      intro:
        'A recurring CAT family, and one where a single arithmetic constraint often forces most of the results.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Count the totals first',
              'In a round-robin with n teams, each plays every other once, so there are n(n−1)/2 matches. Multiply by the points available per match to get the total points distributed. That total is a hard constraint, and comparing it with the points actually shown usually forces several unknown results immediately.',
            ],
            [
              'Maximum and minimum',
              'Most tournament questions ask for the highest or lowest score a team could have, or how few points guarantee qualification. Compute the best and worst case for each entity before attempting any specific question; those bounds answer several questions at once and rule out options in others.',
            ],
            [
              'Knockout structures',
              'In a single-elimination tournament with n players, exactly n−1 matches are played, because each match eliminates one player and all but the winner are eliminated. Seeding rules determine who can meet whom and in which round, and questions frequently turn on whether two named players could meet before the final.',
            ],
            [
              'Points systems with draws',
              'Where a win gives three points and a draw one, the total distributed varies — three for a decisive match and two for a drawn one. So the shortfall between the maximum possible total and the actual total gives the number of drawn matches directly. This deduction unlocks a large proportion of football-style sets.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Tournament arithmetic',
          items: [
            { expr: 'Round robin matches = n(n − 1)/2', note: 'Each pair plays once. Double round robin doubles it.' },
            { expr: 'Knockout matches = n − 1', note: 'Each match eliminates exactly one player, and all but one are eliminated.' },
            { expr: 'Number of draws = (3 × matches − total points awarded)', note: 'Where a win gives 3 and a draw gives 1 to each side, so a drawn match distributes 2 instead of 3.' },
            { expr: 'Rounds in a knockout = log₂ n, rounded up', note: 'A 16-player draw takes 4 rounds; a 12-player draw needs byes.' },
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'quantitative',
      heading: 'Quantitative sets',
      eyebrow: 'Networks, routes and distributions',
      intro:
        'Sets where the reasoning is about numbers rather than about positions, and which sit on the boundary between logical reasoning and data interpretation.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Networks and routes',
              'Cities joined by roads with distances, costs or capacities. List every feasible path systematically before evaluating any — there are usually far fewer than the diagram suggests, and enumerating them prevents the error of missing the one that turns out to be shortest. For capacity questions, the limiting link on a path determines the whole path\'s capacity.',
            ],
            [
              'Distribution under constraints',
              'A quantity divided among entities subject to minimums, maximums and relations. Set up the inequalities and compute the extreme cases first: what is the largest any one entity can receive, given that the others take their minimums, and the smallest, given that the others take their maximums. Most questions in these sets are about those extremes.',
            ],
            [
              'Scheduling and sequencing',
              'Tasks with durations and dependencies. Draw the dependency structure, then compute the earliest and latest each task can start. The critical path — the longest chain of dependent tasks — determines the minimum total time, and questions about delay usually turn on whether a task lies on it.',
            ],
            [
              'Truth-teller and liar sets',
              'Statements from people who always tell the truth, always lie, or alternate. The method is to assume one person\'s type, follow the consequences through every statement, and check for contradiction; then repeat with the alternative assumption. It is exhaustive branching, and it is reliable precisely because it is exhaustive.',
            ],
            [
              'Bounds before values',
              'Across all these types, the productive first move is rarely to find an exact value. It is to establish the range within which each unknown must lie. Ranges narrow one another, and the set frequently resolves through successive narrowing without a single equation being solved.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'notation',
      heading: 'Notation and method',
      eyebrow: 'How to represent conditions',
      intro:
        'The largest single difference between a candidate who solves sets and one who does not is how the information is written down.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'A fixed personal notation',
              'Decide in advance how you will write "A immediately left of B", "A and B not adjacent", "C is somewhere above D". Using the same symbols every time removes the effort of inventing them under pressure and, more importantly, removes the risk of misreading your own working three minutes later.',
            ],
            [
              'Convert every clue before deducing anything',
              'Read all the conditions and record them in your notation first. Beginning to deduce after the second clue means rereading the rest repeatedly, and it risks building on an early clue that a later one would have qualified.',
            ],
            [
              'Order the clues by strength',
              'After recording them, rank them: definite placements first, then blocks, then relative positions, then negatives, then conditionals. Work in that order. The most common failure in an LR set is starting from a weak clue, generating possibilities, and drowning in branches that a stronger clue would have eliminated.',
            ],
            [
              'Label and separate cases',
              'When branching is unavoidable, draw each case in a clearly separated area of the page with a label. Do not overwrite one case with another, and do not erase a case until it has produced an actual contradiction. Questions asking what "can be" true require the surviving cases, so a discarded case that was in fact valid loses several marks.',
            ],
            [
              'Do not stop at the first solution',
              'If the conditions permit more than one arrangement, a question asking what must be true cannot be answered from one of them. Check explicitly whether your solution is unique before answering; if two cases survive, note what is common to both, because that is what "must be true" means.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Write on the rough sheet, not in your head',
          text:
            'Every serious candidate discovers this eventually, and most discover it too late. A set with two branching points has four cases, and holding four partial arrangements mentally is not possible under time pressure. The candidates who finish sets are not faster thinkers; they are the ones whose page shows the deductions in order, so that they can move forward without recomputing.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'errors',
      heading: 'Errors and recovery',
      eyebrow: 'What goes wrong and what to do',
      intro:
        'Six failure modes account for most lost time in this section, and each has a specific remedy.',
      blocks: [
        {
          type: 'table',
          caption: 'Failure modes and remedies',
          head: ['What goes wrong', 'Why', 'Remedy'],
          rows: [
            ['Assuming a condition that was not given', 'Real-world expectations fill gaps the set left open — assuming everyone faces the same way, or that all positions are occupied', 'Reread the conditions once before answering, checking that each entry in your diagram traces to a stated clue.'],
            ['Misreading direction in a circular set', 'Left and right reverse for people facing outward', 'Mark each person\'s facing explicitly, and write the orientation convention at the top of your working.'],
            ['Stopping at one valid arrangement', 'It satisfies every condition, so it feels complete', 'Check for uniqueness before answering any "must be true" question. If two cases survive, answer from what they share.'],
            ['Branching mentally', 'Two possibilities feel manageable without paper', 'Draw both. Two branching points give four cases, and mental tracking fails at that point.'],
            ['Starting from a weak clue', 'It is often the first clue given', 'Rank the clues by strength before beginning, and start with placements and blocks.'],
            ['Persisting with an unyielding set', 'The time already invested feels wasted if abandoned', 'That time is sunk. Judge only whether the next five minutes are better spent here or elsewhere.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'When you are stuck',
              'Go back to the conditions rather than staring at the diagram. Nine times in ten, one clue has not been fully used — most often a negative or a conditional. Read them in order and ask of each whether it has been exhausted. If all have, the set genuinely requires branching, and you should branch on the condition with the fewest possibilities.',
            ],
            [
              'When you suspect an error',
              'Do not patch. If a contradiction appears, either the set is unsolvable as you have entered it — meaning you made an error — or the branch is dead, which is progress. Distinguish the two by checking your entries against the clue list. Patching a diagram to remove a contradiction produces an arrangement that satisfies nothing.',
            ],
            [
              'The value of abandoning',
              'In CAT, attempting two sets fully beats attempting three partially, because a set answered in part usually means every question in it is uncertain. If a set has not begun to resolve in five minutes, the honest conclusion is that it was the wrong choice, and the remaining time is better spent on a set that will.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Eight teams play a single round robin. How many matches are played?',
      steps: [
        'In a round robin each team plays every other exactly once, so the number of matches is the number of pairs.',
        'That is n(n−1)/2 with n = 8.',
        '8 × 7 / 2 = 28 matches.',
      ],
      answer: '28 matches.',
    },
    {
      q: 'In a football-style tournament, 10 matches are played, a win gives 3 points and a draw 1 to each side. The total points awarded is 26. How many matches were drawn?',
      steps: [
        'A decisive match distributes 3 points; a drawn match distributes 2.',
        'If all 10 were decisive, the total would be 30. The actual total is 26, a shortfall of 4.',
        'Each draw reduces the total by 1, so there were 4 draws.',
      ],
      answer: 'Four matches were drawn.',
    },
    {
      q: 'A knockout tournament has 32 players. How many matches are played, and how many rounds?',
      steps: [
        'Each match eliminates exactly one player, and all but the champion must be eliminated.',
        'So the number of matches is 32 − 1 = 31.',
        'The number of rounds is log₂ 32 = 5, since the field halves each round: 32, 16, 8, 4, 2.',
      ],
      answer: '31 matches over 5 rounds.',
    },
    {
      q: 'In a circular arrangement, some people face the centre and some face outward. Why does this matter?',
      steps: [
        'For a person facing the centre, their left is the clockwise direction as seen from above.',
        'For a person facing outward, their left is the anticlockwise direction — the reverse.',
        'So a clue such as "B sits to the left of A" means opposite things depending on which way A faces, and misreading it invalidates the whole arrangement. Mark each person\'s facing on the diagram.',
      ],
      answer: 'Because left and right reverse for outward-facing people, so every relative clue must be read against the facing.',
    },
    {
      q: 'You find one arrangement satisfying every condition. A question asks what must be true. Can you answer from it?',
      steps: [
        'Only if that arrangement is the unique solution.',
        '"Must be true" means true in every valid arrangement, not in the one you happened to construct.',
        'So check whether any branching point remains open. If two cases survive, the answer is whatever they have in common — which may be far less than what your single arrangement shows.',
      ],
      answer: 'Only if the arrangement is unique; otherwise answer from what all surviving cases share.',
    },
    {
      q: 'A grid set gives a clue: "If Ravi is from Pune, then Sneha teaches physics." How should this be recorded?',
      steps: [
        'It is a conditional, not a fact, so nothing can be entered in the grid from it directly.',
        'Record it separately as a pending condition, alongside the grid rather than inside it.',
        'Check it after each substantive deduction: once Ravi\'s city is settled either way, the condition either fires or lapses. Entering it as a fact early is a common and fatal error.',
      ],
      answer: 'As a pending condition outside the grid, checked after each new deduction.',
    },
    {
      q: 'You are five minutes into a CAT set and nothing has resolved. What should you do?',
      steps: [
        'The five minutes are spent and cannot be recovered; they should play no part in the decision.',
        'The only question is whether the next five minutes are more productive here or on a different set.',
        'A set that has not begun to resolve in five minutes usually will not resolve in ten, so move on. This is a selection failure rather than a solving failure, and abandoning limits the cost.',
      ],
      answer: 'Abandon it. The time already spent is sunk and should not influence the choice.',
    },
    {
      q: 'A clue says "D does not sit at either end" in a row of six. How much information is that?',
      steps: [
        'It is negative information, which candidates often undervalue.',
        'It eliminates two of six positions for D, leaving four.',
        'That is a third of the possibility space removed by one clue — as valuable as many positive clues, and it should be marked explicitly on the diagram rather than remembered.',
      ],
      answer: 'It removes two of six positions — substantial, and worth marking explicitly.',
    },
  ],

  practice: [
    {
      q: 'The number of matches in a single round robin with 10 teams is:',
      options: ['45', '90', '55', '9'],
      answer: 0,
      explain: 'n(n−1)/2 = 10 × 9 / 2 = 45.',
    },
    {
      q: 'A single-elimination tournament with 64 players requires how many matches?',
      options: ['32', '63', '64', '127'],
      answer: 1,
      explain: 'Each match eliminates one player and all but the champion are eliminated, so n − 1.',
    },
    {
      q: 'In an arrangement set, you should begin with:',
      options: ['Conditional clues', 'Negative clues', 'Definite placements and blocks', 'The first clue given'],
      answer: 2,
      explain: 'Starting from a weak clue generates branches that a stronger clue would have eliminated.',
    },
    {
      q: 'In a circular arrangement where a person faces outward, their left is:',
      options: ['The clockwise direction seen from above', 'The anticlockwise direction seen from above', 'The same as for an inward-facing person', 'Undefined'],
      answer: 0,
      explain: 'It reverses relative to an inward-facing person, for whom left is anticlockwise as seen from above.',
    },
    {
      q: 'In a matching grid, placing a tick in a cell means you should immediately:',
      options: ['Move to the next clue', 'Start a new case', 'Recheck all previous clues', 'Cross out the rest of that row and column'],
      answer: 3,
      explain: 'Each entity takes one value and each value goes to one entity, so the propagation is automatic.',
    },
    {
      q: 'A conditional clue of the form "if P then Q" should be:',
      options: ['Entered as a fact', 'Used to start a branch immediately', 'Ignored until the end', 'Recorded separately and checked after each deduction'],
      answer: 3,
      explain: 'It becomes decisive only once the antecedent is settled, and entering it as a fact early is a fatal error.',
    },
    {
      q: 'In a tournament where a win gives 3 points and a draw 1 each, each draw reduces the total distributed by:',
      options: ['1 point', '2 points', '3 points', 'It does not change'],
      answer: 0,
      explain: 'A decisive match distributes 3 and a drawn match 2, so the shortfall from the maximum gives the number of draws.',
    },
    {
      q: 'A question asking what "must be true" can be answered from a single valid arrangement only if:',
      options: ['It satisfies all conditions', 'No contradiction appeared', 'It was found quickly', 'That arrangement is the unique solution'],
      answer: 3,
      explain: 'Otherwise the answer is what all surviving cases share, which may be much less.',
    },
    {
      q: 'When a condition permits exactly two possibilities, you should:',
      options: ['Choose the more likely one', 'Draw both cases separately and develop each', 'Hold both in mind and continue', 'Skip the condition'],
      answer: 1,
      explain: 'Two branching points give four cases, and mental tracking fails at that point.',
    },
    {
      q: 'In a network set, the capacity of a path is determined by:',
      options: ['The sum of its link capacities', 'The average of its link capacities', 'Its lowest-capacity link', 'The number of links'],
      answer: 2,
      explain: 'The bottleneck limits the whole path, however large the other links are.',
    },
    {
      q: 'The clue "D does not sit at either end" in a row of six eliminates:',
      options: ['One position', 'Two positions', 'Three positions', 'No positions'],
      answer: 1,
      explain: 'Negative information is substantial and should be marked explicitly rather than remembered.',
    },
    {
      q: 'When stuck in an LR set, the most productive move is to:',
      options: ['Stare at the diagram', 'Reread the conditions for one not fully used', 'Guess a placement', 'Start again from scratch'],
      answer: 1,
      explain: 'Nine times in ten a negative or conditional clue has not been exhausted.',
    },
    {
      q: 'In a scheduling set, the minimum total time is determined by:',
      options: ['The longest single task', 'The critical path', 'The number of tasks', 'The sum of all durations'],
      answer: 1,
      explain: 'The longest chain of dependent tasks; tasks off it have slack.',
    },
    {
      q: 'CAT logical reasoning sets differ from banking puzzles chiefly in that they:',
      options: ['Use larger numbers', 'Follow standardised templates', 'Invent the scenario and the rules each time', 'Have more questions'],
      answer: 2,
      explain: 'Template recognition does not transfer; only the underlying method does.',
    },
    {
      q: 'If a contradiction appears in your working, the correct response is to:',
      options: ['Adjust a placement to remove it', 'Check your entries against the clues, then treat the branch as dead if they are correct', 'Start a new case at random', 'Answer from the closest consistent arrangement'],
      answer: 1,
      explain: 'A contradiction either reveals your error or kills the branch, which is progress. Patching produces an arrangement satisfying nothing.',
    },
    {
      q: 'In CAT DILR, attempting two sets fully generally beats attempting three partially because:',
      options: ['Sets carry different marks', 'A partially solved set leaves every question in it uncertain', 'Partial attempts are penalised', 'Three sets take longer'],
      answer: 1,
      explain: 'The setup cost is paid once; the return comes only when the conditions resolve.',
    },
  ],

  faqs: [
    {
      q: 'Why do banking puzzle techniques not work for CAT?',
      a: 'Because banking puzzles follow templates. Eight people, one or two variables, a familiar set of clue types — a practised candidate recognises the whole shape at once. CAT sets are designed to be unfamiliar: the scenario is invented, the rules are stated fresh, and the questions often ask what cannot be determined. Template memorisation gives nothing; the underlying discipline of notation, ranking clues and systematic branching transfers completely.',
    },
    {
      q: 'What is the single biggest improvement I can make?',
      a: 'Writing more down. The candidates who finish sets are not faster thinkers — they are the ones whose page shows every deduction in order, so nothing is recomputed and no branch is lost. Two branching points produce four cases, and no one tracks four partial arrangements mentally under time pressure. Almost every candidate discovers this, and most discover it later than they should.',
    },
    {
      q: 'In what order should I use the clues?',
      a: 'Definite placements first, then blocks of people who must be together, then relative positions, then negative information, and conditionals last. Starting from a weak or conditional clue generates branches that a stronger clue would have eliminated in one step, which is why sets that should take eight minutes take twenty.',
    },
    {
      q: 'Why is negative information so valuable?',
      a: 'Because it eliminates possibilities directly. "D is not at either end" in a row of six removes a third of D\'s possible positions in one clue. Candidates undervalue negatives because they do not produce a placement, but a set with several negatives is often best solved on a grid of ticks and crosses rather than a line diagram, precisely because the grid records negatives naturally.',
    },
    {
      q: 'When should I abandon a set?',
      a: 'When five minutes have produced no resolution. The time already spent is sunk and should play no part in the decision — the only question is whether the next five minutes are more productive here or on another set. In CAT, two sets solved fully beat three attempted partially, because a partially solved set leaves every one of its questions uncertain.',
    },
    {
      q: 'How do I know when to stop deducing and start answering?',
      a: 'When every clue has been fully used and either a unique arrangement has emerged or a small number of cases remain. Then check what the questions actually need: many can be answered from partial information, and questions about maximum or minimum values often need only the bounds, not the full arrangement. Read the questions before completing the deduction.',
    },
    {
      q: 'What if a contradiction appears?',
      a: 'Do not patch the diagram. A contradiction means either that you entered something the clues did not support, or that the branch you are in is impossible. Check your entries against the clue list; if they are all supported, the branch is dead and eliminating it is progress. Adjusting a placement to remove a contradiction produces an arrangement that satisfies nothing.',
    },
    {
      q: 'Should I answer questions as I solve, or after?',
      a: 'Scan the questions early, so you know what will be needed — some sets can be answered without full resolution. But answer only once the deduction is stable. Answering from a half-built arrangement is how candidates get four questions wrong from one set, and it is the reason a partially solved set is worth so much less than half a solved one.',
    },
    {
      q: 'How much of this transfers to banking reasoning?',
      a: 'The method transfers entirely — notation, clue ranking, systematic branching, marking negatives. What does not transfer in the other direction is template recognition, because CAT does not reuse templates. A banking aspirant who learns the CAT method will find banking puzzles easier; a CAT aspirant who has only practised banking templates will find CAT sets bewildering.',
    },
    {
      q: 'How many sets should I expect in CAT?',
      a: 'Recent papers have carried four to five sets of four to five questions each in the DILR section, of which most candidates attempt two or three fully. The composition and count have changed between years, so verify the current pattern. Since sectional percentiles in DILR are the most volatile of the three sections, full solutions to two well-chosen sets often produce a better percentile than partial work on four.',
    },
  ],

  related: [
    { label: 'Data Interpretation', to: '/study-material/dilr/data-interpretation/' },
    { label: 'Set Selection', to: '/study-material/dilr/set-selection/' },
    { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
    { label: 'Seating Arrangement', to: '/study-material/reasoning/seating-arrangement/' },
    { label: 'All DILR', to: '/study-material/dilr/' },
  ],
}
