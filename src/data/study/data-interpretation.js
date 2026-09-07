/**
 * Data Interpretation — /study-material/dilr/data-interpretation/
 *
 * Reading data accurately and calculating on it fast. Written around the two
 * things that actually decide a DI score — approximation technique and the
 * traps built into how the data is presented — rather than around chart types.
 */
export default {
  subject: 'dilr',
  subjectName: 'DILR',
  slug: 'data-interpretation',
  title: 'Data Interpretation',
  seoTitle: 'Data Interpretation for CAT and Banking | Charts, Calculation & Practice',
  metaDescription:
    'Complete data interpretation study material for CAT, banking and other competitive exams — chart formats, fast calculation and approximation, reading traps.',
  readMinutes: 22,
  lead: [
    'Data interpretation is not a mathematics topic. The arithmetic involved rarely goes beyond percentages, ratios and averages; what makes a set hard is reading the presentation correctly and calculating quickly enough to finish. Candidates lose marks to misread axes and unnecessary long division far more often than to any concept they do not know.',
    'This page therefore concentrates on two things: the approximation techniques that turn a two-minute calculation into a fifteen-second one, and the presentation traps that make a correctly calculated answer wrong. The chart formats are covered, but they are the least important part of the topic.',
  ],

  weightage: [
    { exam: 'CAT DILR section', count: '2–3 sets of 4–5 questions', note: 'CAT sets are non-standard and often require substantial reasoning before any calculation begins.' },
    { exam: 'Banking Quantitative Aptitude', count: '10–15 questions', note: 'Usually three or four conventional sets. This is the largest DI weighting of any exam family.' },
    { exam: 'SSC CGL Tier 1 and 2', count: '4–5 questions', note: 'A single straightforward set, usually a table or a pie chart.' },
    { exam: 'XAT Decision Making and QA', count: '4–6 questions', note: 'Often embedded in a business situation.' },
    { exam: 'RRB NTPC', count: '2–3 questions', note: 'Simple tables and bar charts.' },
  ],

  contents: [
    { icon: 'chart', title: 'Chart formats', sub: 'What each presentation does', href: '#formats' },
    { icon: 'refresh', title: 'Fast calculation', sub: 'Approximation and fractions', href: '#calculation' },
    { icon: 'search', title: 'Reading traps', sub: 'How correct arithmetic goes wrong', href: '#traps' },
    { icon: 'doc', title: 'Caselets', sub: 'Data given as prose', href: '#caselets' },
    { icon: 'layers', title: 'Modern CAT DI', sub: 'Non-standard sets', href: '#modern' },
    { icon: 'target', title: 'Recurring set types', sub: 'Patterns worth recognising', href: '#types' },
    { icon: 'clock', title: 'Approach and timing', sub: 'Working a set', href: '#approach' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'formats',
      heading: 'Chart formats',
      eyebrow: 'What each presentation does',
      intro:
        'Each format is chosen to make one kind of comparison easy and another kind hard. Knowing which is which tells you what the question is likely to ask.',
      blocks: [
        {
          type: 'table',
          caption: 'The presentations and what they suit',
          head: ['Format', 'Good for', 'What to watch'],
          rows: [
            ['Table', 'Exact values, and any comparison', 'The most information-dense format and the least visually misleading. Read the column headings and the unit line carefully.'],
            ['Bar chart', 'Comparing quantities across categories', 'Check whether the vertical axis starts at zero. A truncated axis exaggerates differences enormously, and the exam is entitled to use one.'],
            ['Line graph', 'Trends over time', 'Steepness depends on the scale chosen, so "the sharpest rise" must be verified numerically rather than visually.'],
            ['Pie chart', 'Shares of a whole', 'It gives proportions and not absolutes. Two pie charts with different totals cannot be compared segment to segment without converting to absolute values first — the single commonest error in DI.'],
            ['Stacked bar', 'Both total and composition', 'Reading an individual component requires subtracting the boundary below it from the boundary above it, not reading the upper boundary directly.'],
            ['Scatter plot and bubble chart', 'Relationship between two or three variables', 'In a bubble chart the third variable is the area of the bubble, not its radius, so a bubble twice as wide represents four times the value.'],
            ['Venn diagram', 'Overlapping categories', 'Distinguish "only A" from "A", which includes the overlaps. Almost every Venn question turns on that distinction.'],
            ['Radar or spider chart', 'Several attributes of a few entities', 'Increasingly used in CAT. Each spoke has its own scale, so the enclosed area means nothing.'],
          ],
        },
        {
          type: 'formula',
          title: 'Pie chart conversions',
          items: [
            { expr: '360° corresponds to 100%', note: 'So 1% is 3.6° and 1° is 5/18 of a per cent.' },
            { expr: 'Value of a segment = (segment percentage ÷ 100) × total', note: 'Always convert to absolute values before comparing across two pie charts.' },
            { expr: 'Segment angle = (segment value ÷ total) × 360°', note: 'Used when the question asks for the central angle rather than the share.' },
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'calculation',
      heading: 'Fast calculation',
      eyebrow: 'Approximation and fractions',
      intro:
        'The largest single source of improvement in DI is calculating less. Almost no DI question requires an exact answer, and the options are usually spaced far enough apart that a two-figure approximation settles it.',
      blocks: [
        {
          type: 'formula',
          title: 'The fraction-percentage table to memorise',
          items: [
            { expr: '1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%', note: 'The obvious ones.' },
            { expr: '1/6 = 16.67%, 1/7 = 14.29%, 1/8 = 12.5%, 1/9 = 11.11%', note: 'Note 1/7, which appears constantly and is rarely known.' },
            { expr: '1/11 = 9.09%, 1/12 = 8.33%, 1/13 = 7.69%, 1/14 = 7.14%', note: '' },
            { expr: '1/15 = 6.67%, 1/16 = 6.25%, 1/18 = 5.56%, 1/20 = 5%', note: 'Knowing these to two decimal places converts most percentage questions into recognition rather than division.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Percentage change',
              'Change divided by the original value, times a hundred. The recurring error is dividing by the new value instead of the old. A rise from 40 to 50 is a 25 per cent increase; a fall from 50 to 40 is a 20 per cent decrease. The same absolute change gives different percentages depending on the base, and questions exploit this constantly.',
            ],
            [
              'Ratio comparison without dividing',
              'To compare a/b with c/d, cross-multiply: a/b is greater than c/d when ad exceeds bc. This replaces two divisions with two multiplications and is far faster. For a series of ratios, compare them in pairs, keeping the larger each time.',
            ],
            [
              'Approximation discipline',
              'Round to two significant figures and check the option spacing. If the options are 12.4, 14.8, 18.2 and 21.6, working to the nearest whole number is ample. If they are 14.2, 14.5, 14.8 and 15.1, you need precision — but that is rare, and the presence of tightly spaced options is itself a signal that the question rewards care.',
            ],
            [
              'Percentage of a percentage',
              'To find 40 per cent of 25 per cent of a quantity, multiply the fractions: 0.4 × 0.25 = 0.1, so it is ten per cent. Reversing the order of multiplication often makes it easier — 25 per cent of 40 is obviously 10.',
            ],
            [
              'Successive percentage change',
              'A rise of a per cent followed by a rise of b per cent is not a + b per cent. The net change is a + b + ab/100. A 10 per cent rise followed by a 10 per cent fall leaves you at 99 per cent of the original, not at 100 — a result that appears in DI sets and in arithmetic alike.',
            ],
            [
              'Averages and weighted averages',
              'The average of two groups is not the average of their averages unless the groups are equal in size. Where they differ, use the weighted average, which lies closer to the larger group. Alligation gives the same result faster when the answer is a ratio.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'traps',
      heading: 'Reading traps',
      eyebrow: 'How correct arithmetic goes wrong',
      intro:
        'Most wrong answers in data interpretation are arithmetically correct answers to the wrong question. Six traps account for nearly all of them.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Units',
              'A chart in crore against a question in lakh, or figures in thousands with the multiplier stated once in a corner. Read the unit line before reading any number, and note it. This is the single commonest trap and the easiest to avoid.',
            ],
            [
              'Percentage against absolute',
              'A category\'s share can fall while its absolute value rises, if the total grew faster. Questions are written specifically to exploit this. Whenever a chart gives percentages, note whether the underlying total is constant across the periods shown; if it is not, no percentage comparison tells you anything about absolute values.',
            ],
            [
              'Two pie charts, different totals',
              'The special case of the above, and the most frequently set. Segments of two pie charts are comparable only after converting both to absolute values using their respective totals. A segment that is 30 per cent of a small pie may be smaller in absolute terms than one that is 20 per cent of a large one.',
            ],
            [
              'The truncated axis',
              'A bar chart whose vertical axis begins at 400 rather than at zero makes a difference of 20 look like a difference of half. Questions about "how much greater" must be answered from the numbers, never from the visual impression.',
            ],
            [
              'Cumulative against annual',
              'A line rising steadily may show a cumulative total, in which case the annual figure is the difference between consecutive points, not the point itself. A cumulative line that flattens means the annual figure fell to near zero, not that the total fell.',
            ],
            [
              '"Of which" and overlapping categories',
              'A table showing total employees and, separately, "of which, women" is not offering two disjoint groups. Similarly, in a Venn diagram, "students who took physics" includes those who also took chemistry, while "only physics" does not. Read whether the categories are exclusive before adding anything.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The thirty seconds that pay for themselves',
          text:
            'Before attempting any question in a set, read the title, the axis labels, the unit line and any footnote. Thirty seconds spent doing this prevents the kind of error that invalidates every answer in the set — a misread unit or a missed footnote does not cost one question, it costs four or five. It is the highest-return half-minute in the whole section.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'caselets',
      heading: 'Caselets',
      eyebrow: 'Data given as prose',
      intro:
        'A caselet gives the data in paragraphs rather than in a chart, and the first task is to build the table the question setter deliberately withheld.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Always tabulate',
              'Draw the grid before answering anything. Rows for the entities, columns for the attributes, and each stated fact entered in its cell. Attempting a caselet without tabulating means rereading the paragraph for every question, which is where the time goes.',
            ],
            [
              'Enter relations, not just values',
              'Much caselet information is relational — "A produced twice as much as B", "C was 20 more than D". Enter these as expressions in terms of a single variable rather than leaving them in the text. Frequently the whole caselet reduces to one unknown, and one further fact then resolves everything.',
            ],
            [
              'Work out what is determinable',
              'Some caselets deliberately leave certain cells indeterminate, and a question will ask which quantity cannot be found. After tabulating, mark each cell as known, derivable or unknown before starting the questions; that map answers several questions immediately.',
            ],
            [
              'Watch the order of information',
              'Caselets are written so that the most useful fact is rarely first. Read the whole passage before entering anything, because a later sentence often fixes an earlier ambiguity. Entering as you read produces a table you then have to correct.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'modern',
      heading: 'Modern CAT DI',
      eyebrow: 'Non-standard sets',
      intro:
        'CAT stopped setting conventional pie-and-bar sets some years ago. Its data interpretation now looks much more like logical reasoning with numbers attached, and preparation aimed at the banking format does not transfer.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'What changed',
              'A modern CAT set typically gives incomplete data and asks you to deduce the missing entries before any question can be answered. The reasoning comes first and the arithmetic second, which reverses the banking pattern. Some sets contain no conventional chart at all — a matrix with blanks, a set of conditions, a tournament schedule, a payment matrix.',
            ],
            [
              'Common modern forms',
              'Partially filled tables with row and column totals given. Data presented across two or three linked representations that must be combined. Scoring or ranking systems whose rules must be applied. Games and tournaments with results to be deduced. Routes and networks with distances or capacities. Bubble and radar charts with unusual encodings.',
            ],
            [
              'How to attack them',
              'Find the most constrained cell — the row or column with the fewest unknowns, or the entity about which the most is stated — and resolve it first. Each resolved value constrains others, and a set that looks impossible at the start usually unlocks after two or three deductions. This is exactly the method used for arrangement puzzles in reasoning.',
            ],
            [
              'The implication for practice',
              'Practising banking DI sets builds calculation speed, which is useful, but not the deduction skill CAT tests. For CAT, work through past DILR sets specifically and treat them as puzzles rather than as arithmetic exercises. Conversely, a CAT aspirant\'s reasoning practice transfers directly to modern DI, which is why the two halves of the section are now genuinely one.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'types',
      heading: 'Recurring set types',
      eyebrow: 'Patterns worth recognising',
      intro:
        'A handful of set structures recur across exams, and recognising one saves the time otherwise spent working out what the set is doing.',
      blocks: [
        {
          type: 'table',
          caption: 'Set types and their first move',
          head: ['Set type', 'What it gives', 'First move'],
          rows: [
            ['Missing table', 'A table with blanks, plus row and column totals', 'Find the row or column with a single blank and fill it; each fill creates another such row or column.'],
            ['Two-chart linked set', 'A pie chart of shares and a bar chart of totals, or similar', 'Convert everything to absolute values immediately, before reading the questions.'],
            ['Growth and percentage change', 'Values across several years', 'Compute the year-on-year changes once, in the margin, rather than recomputing them for each question.'],
            ['Venn or overlapping categories', 'Totals and intersections, some missing', 'Draw the diagram and fill from the innermost region outward — the triple overlap first, then the pairs, then the singles.'],
            ['Ranking or scoring', 'Rules for awarding points and partial results', 'Compute the maximum and minimum possible score for each entity; that usually settles most questions without full resolution.'],
            ['Games and tournaments', 'A schedule and some results', 'Count total matches and total points available; the arithmetic constraint often forces several results.'],
            ['Routes and networks', 'Nodes with distances, costs or capacities', 'List all feasible paths systematically before evaluating any; there are usually fewer than they appear.'],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'approach',
      heading: 'Approach and timing',
      eyebrow: 'Working a set',
      intro:
        'DI sets are all-or-nothing in a way individual questions are not: the setup cost is paid once and the questions are cheap afterwards. That shapes every decision about them.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The sequence',
              'Read the title, units and footnotes. Understand what the data represents before reading any question. Scan all the questions in the set to see what will be needed. Do any calculation that several questions share, once. Then answer, starting with the easiest.',
            ],
            [
              'Do the shared work once',
              'If three questions need the yearly totals, compute them once and write them down. Candidates routinely recompute the same figures three times because they work question by question rather than looking at the set as a whole. Scanning the questions first is what makes this possible.',
            ],
            [
              'Answer the easy questions first',
              'Within a set, one question is often much harder than the others — a "how many of the following are true" question, or one requiring every cell to be resolved. Take the direct ones first and return to it. There are no marks for order.',
            ],
            [
              'Set selection',
              'In CAT, choosing which sets to attempt matters more than speed. Spend the first two or three minutes reading all the available sets before committing to any, and choose by how much of the data resolves quickly rather than by how familiar the format looks. The set-selection page treats this in full.',
            ],
            [
              'Timing',
              'A conventional banking set of five questions should take six to eight minutes including setup. A CAT set of four to five questions typically takes twelve to fifteen, most of it in the deduction. If a CAT set has not begun to resolve after five minutes, it is usually the wrong set — that is a selection failure rather than a solving failure, and abandoning early limits the damage.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A value rises from 80 to 100. What is the percentage increase, and what is the percentage decrease if it falls back from 100 to 80?',
      steps: [
        'Percentage change is always computed on the original value.',
        'Rising from 80 to 100: change is 20, base is 80, so 20/80 = 25 per cent increase.',
        'Falling from 100 to 80: change is 20, base is now 100, so 20/100 = 20 per cent decrease. The same absolute change gives different percentages.',
      ],
      answer: '25 per cent increase; 20 per cent decrease.',
    },
    {
      q: 'A price rises 20 per cent and then falls 20 per cent. What is the net change?',
      steps: [
        'Successive percentage changes do not add. The net change is a + b + ab/100.',
        'Here a = +20 and b = −20, so the net is 20 − 20 + (20 × −20)/100 = −4.',
        'Starting at 100: after the rise, 120; after a 20 per cent fall on 120, 96. A net fall of 4 per cent.',
      ],
      answer: 'A net decrease of 4 per cent, not zero.',
    },
    {
      q: 'Segment A is 30% of a pie whose total is 500. Segment B is 20% of a pie whose total is 900. Which is larger?',
      steps: [
        'Percentages from two pies with different totals cannot be compared directly.',
        'A = 0.30 × 500 = 150.',
        'B = 0.20 × 900 = 180. So B is larger, despite having the smaller share — the most frequently set trap in DI.',
      ],
      answer: 'B, at 180 against 150.',
    },
    {
      q: 'Which is larger, 17/23 or 22/31? Compare without dividing.',
      steps: [
        'To compare a/b with c/d, cross-multiply: a/b exceeds c/d exactly when ad exceeds bc.',
        '17 × 31 = 527 and 23 × 22 = 506.',
        'Since 527 is greater than 506, 17/23 is larger. Two multiplications replace two long divisions.',
      ],
      answer: '17/23 is larger.',
    },
    {
      q: 'A bar chart\'s vertical axis begins at 400. Bar A reaches 420 and Bar B reaches 440. Visually B looks twice A. Is it?',
      steps: [
        'The visual impression comes from the height above the axis, which is 20 for A and 40 for B — hence the appearance of doubling.',
        'But the values are 420 and 440, and 440 is not twice 420.',
        'B exceeds A by 20 out of 420, which is about 4.8 per cent. A truncated axis exaggerates differences enormously, and questions are set to exploit exactly this.',
      ],
      answer: 'No — B exceeds A by under 5 per cent. Always read the numbers, never the picture.',
    },
    {
      q: 'A category\'s share of total sales fell from 25% to 20%, while total sales rose from 400 to 600. Did its sales fall?',
      steps: [
        'The share fell, which suggests a decline, but shares and absolutes move independently when the total changes.',
        'Earlier: 0.25 × 400 = 100. Later: 0.20 × 600 = 120.',
        'So the absolute sales rose from 100 to 120, a 20 per cent increase, even though the share fell.',
      ],
      answer: 'No — sales rose by 20 per cent despite the falling share.',
    },
    {
      q: 'In a table, one row has a total and a single missing cell. What should you do first?',
      steps: [
        'A row with exactly one blank is fully determined: the blank equals the total minus the sum of the known entries.',
        'Filling it may complete a column, which then has one blank of its own and can be filled the same way.',
        'Working outward from the most constrained row or column resolves most missing-table sets in a few steps, without any algebra.',
      ],
      answer: 'Fill it from the total, then look for the next row or column with a single blank.',
    },
    {
      q: 'Three questions in a set all require the yearly totals. How should you proceed?',
      steps: [
        'Scan all the questions in the set before answering any of them.',
        'Compute the yearly totals once and write them in the margin.',
        'Answer all three from the stored figures. Working question by question means computing the same totals three times, which is where most of the wasted time in DI goes.',
      ],
      answer: 'Compute the shared quantities once, after scanning all the questions.',
    },
  ],

  practice: [
    {
      q: 'A value increases from 250 to 300. The percentage increase is:',
      options: ['20%', '16.67%', '25%', '50%'],
      answer: 0,
      explain: '50/250 = 20 per cent. Dividing by 300 instead gives 16.67 per cent, which is the standard error.',
    },
    {
      q: 'In a pie chart, a segment of 54° represents what percentage of the total?',
      options: ['10%', '12%', '15%', '18%'],
      answer: 2,
      explain: '54/360 = 0.15. One per cent corresponds to 3.6 degrees.',
    },
    {
      q: 'A price rises 10% and then falls 10%. The net effect is:',
      options: ['No change', 'A 2% decrease', 'A 1% increase', 'A 1% decrease'],
      answer: 3,
      explain: 'Net = a + b + ab/100 = 10 − 10 − 1 = −1 per cent. Starting at 100 gives 110 and then 99.',
    },
    {
      q: 'Segments from two pie charts can be compared directly only if:',
      options: ['Both are percentages', 'The segments are adjacent', 'Both charts have the same number of segments', 'The two totals are equal'],
      answer: 3,
      explain: 'Otherwise both must be converted to absolute values first.',
    },
    {
      q: '1/7 expressed as a percentage is approximately:',
      options: ['12.5%', '11.11%', '16.67%', '14.29%'],
      answer: 3,
      explain: '12.5% is 1/8, 16.67% is 1/6 and 11.11% is 1/9.',
    },
    {
      q: 'To compare 13/17 with 15/19 without dividing, you should:',
      options: ['Convert both to decimals', 'Cross-multiply and compare the products', 'Compare the numerators', 'Compare the denominators'],
      answer: 1,
      explain: '13 × 19 = 247 against 17 × 15 = 255, so 15/19 is larger. Two multiplications replace two divisions.',
    },
    {
      q: 'A bar chart whose vertical axis begins above zero will:',
      options: ['Understate differences', 'Exaggerate differences', 'Show differences accurately', 'Be invalid'],
      answer: 1,
      explain: 'Which is why "how much greater" questions must be answered from the numbers, not from the visual impression.',
    },
    {
      q: 'In a stacked bar chart, the value of a middle component is found by:',
      options: ['Reading its upper boundary', 'Subtracting the boundary below it from the boundary above it', 'Reading the total', 'Dividing the total by the number of components'],
      answer: 1,
      explain: 'Reading the upper boundary gives the cumulative total up to that component, not the component itself.',
    },
    {
      q: 'A category\'s percentage share falls while the overall total rises. Its absolute value:',
      options: ['Must have fallen', 'Must have risen', 'May have risen or fallen', 'Is unchanged'],
      answer: 2,
      explain: 'It depends on how fast the total grew relative to the fall in share, so it must be computed.',
    },
    {
      q: 'The first thing to do on a missing-table set is to find:',
      options: ['The largest value', 'A row or column with exactly one blank', 'The grand total', 'The smallest value'],
      answer: 1,
      explain: 'That blank is fully determined, and filling it usually creates another such row or column.',
    },
    {
      q: 'The first step in a caselet is to:',
      options: ['Read the questions', 'Build a table from the prose', 'Estimate the answers', 'Look for the largest number'],
      answer: 1,
      explain: 'Without a table you reread the paragraph for every question, which is where the time is lost.',
    },
    {
      q: 'In a bubble chart, the third variable is represented by the bubble\'s:',
      options: ['Radius', 'Area', 'Colour', 'Position'],
      answer: 1,
      explain: 'So a bubble of twice the width represents four times the value, not twice.',
    },
    {
      q: 'In a Venn diagram question, "students who study physics" refers to:',
      options: ['Only those studying physics alone', 'All those studying physics, including overlaps', 'The largest region', 'The intersection'],
      answer: 1,
      explain: 'The "only" cases exclude the overlaps; almost every Venn question turns on this distinction.',
    },
    {
      q: 'Modern CAT data interpretation sets typically require you to:',
      options: ['Perform heavy calculation on complete data', 'Deduce missing data before calculating', 'Memorise chart conventions', 'Apply advanced statistics'],
      answer: 1,
      explain: 'The reasoning comes first and the arithmetic second, reversing the banking pattern.',
    },
    {
      q: 'Before answering any question in a set, you should read the:',
      options: ['Longest question first', 'Title, axis labels, units and footnotes', 'Answer options', 'Last question first'],
      answer: 1,
      explain: 'A misread unit or missed footnote invalidates every answer in the set, not just one.',
    },
    {
      q: 'A CAT DILR set that has not begun to resolve after five minutes should usually be:',
      options: ['Continued, since the setup cost is sunk', 'Abandoned in favour of another set', 'Answered by guessing', 'Attempted from the last question'],
      answer: 1,
      explain: 'Failure to resolve early is a selection failure; abandoning limits the damage while time remains for another set.',
    },
  ],

  faqs: [
    {
      q: 'Why is CAT data interpretation so different from banking DI?',
      a: 'Because CAT stopped setting conventional chart-based sets years ago. A banking set gives complete data and tests calculation speed; a CAT set gives incomplete data and tests whether you can deduce the rest before any calculation is possible. Practising banking sets builds useful speed but not the deduction skill CAT tests, so a CAT aspirant must practise past CAT sets specifically.',
    },
    {
      q: 'What is the single most common error in DI?',
      a: 'Comparing percentages across two totals that differ — most often, two pie charts. A share of 30 per cent of a small total can be smaller in absolute terms than 20 per cent of a large one, and questions are written precisely to catch this. Whenever a chart gives shares, convert to absolute values before any comparison.',
    },
    {
      q: 'How much should I approximate?',
      a: 'As much as the option spacing allows, which is usually a great deal. Check the options before calculating: if they are 12, 15, 19 and 24, a two-significant-figure estimate settles it and exact division is wasted effort. Tightly spaced options are themselves a signal that the setter wants precision, and they are the exception rather than the rule.',
    },
    {
      q: 'Which fractions should I memorise?',
      a: 'The reciprocals from 1/2 to 1/20 as percentages, to two decimal places. The ones that pay for themselves repeatedly are 1/7 at 14.29, 1/9 at 11.11, 1/11 at 9.09, 1/12 at 8.33 and 1/16 at 6.25, because these are the ones candidates do not know and therefore compute by long division under time pressure.',
    },
    {
      q: 'Why does a 10 per cent rise followed by a 10 per cent fall not return to the start?',
      a: 'Because the second percentage is applied to a larger base. Starting at 100, a 10 per cent rise gives 110; a 10 per cent fall on 110 is 11, giving 99. The general result is that successive changes of a and b per cent give a net change of a + b + ab/100, and equal rises and falls always leave you slightly below where you started.',
    },
    {
      q: 'How do I attack a set with no obvious starting point?',
      a: 'Find the most constrained element — the row or column with the fewest unknowns, the entity about which the most is stated, or the condition that permits the fewest possibilities. Resolve that, and each resolution constrains what remains. Sets that look impossible almost always unlock after two or three deductions; the difficulty is finding the first one, not the rest.',
    },
    {
      q: 'Should I read the questions before working the data?',
      a: 'Read the data presentation first — title, axes, units, footnotes — so that you understand what the numbers are. Then scan all the questions before answering any. That scan tells you which calculations several questions share, so you can do them once instead of three times, and it identifies the one hard question you should leave until last.',
    },
    {
      q: 'How long should a set take?',
      a: 'A conventional banking set of five questions, six to eight minutes including setup. A CAT set of four or five questions, twelve to fifteen, most of it in the deduction rather than the arithmetic. The important threshold is the early one: if a CAT set has not started to resolve within five minutes, it is usually not the set you should have chosen.',
    },
    {
      q: 'Is a calculator allowed?',
      a: 'CAT provides an on-screen basic calculator, and banking exams generally do too. It does not remove the need for approximation — using it for every step is slower than estimating, because of the mouse movement involved. Use it for genuinely awkward multiplications and long divisions, and estimate everything else mentally.',
    },
    {
      q: 'How many DI questions come in each exam?',
      a: 'Ten to fifteen in banking quantitative aptitude, the largest weighting of any exam family. Two to three sets in CAT DILR, mixed with logical reasoning sets. Four to five questions in SSC CGL, usually one simple set. Four to six in XAT and two to three in RRB NTPC.',
    },
  ],

  related: [
    { label: 'Logical Reasoning Sets', to: '/study-material/dilr/logical-reasoning-sets/' },
    { label: 'Set Selection', to: '/study-material/dilr/set-selection/' },
    { label: 'Percentages', to: '/study-material/quantitative-aptitude/percentages/' },
    { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
    { label: 'All DILR', to: '/study-material/dilr/' },
  ],
}
