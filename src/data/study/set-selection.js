/**
 * Set Selection — /study-material/dilr/set-selection/
 *
 * The skill that converts DILR ability into a DILR percentile: deciding which
 * sets to attempt, in what order, and when to walk away. Treated as a topic in
 * its own right because it is worth more marks than solving speed.
 */
export default {
  subject: 'dilr',
  subjectName: 'DILR',
  slug: 'set-selection',
  title: 'Set Selection',
  seoTitle: 'DILR Set Selection Strategy for CAT | Choosing, Sequencing & Practice',
  metaDescription:
    'Complete set selection strategy for CAT DILR — why selection decides the score, how to run the scanning round, the signals of a doable set.',
  readMinutes: 21,
  lead: [
    'Two candidates with identical DILR ability can differ by twenty percentile points, and the difference is almost never speed. It is which sets they chose. A section with four or five sets and forty minutes does not permit all of them to be attempted, so choosing is not optional — it happens whether or not you do it deliberately, and doing it deliberately is worth more than any amount of additional practice.',
    'This page treats selection as a skill with a procedure: a scanning round with a fixed budget, a checklist of signals that a set will resolve, warning signs that it will not, and an abandonment rule. It also covers the harder judgment of when a partial attempt is worth making and when it is a trap.',
  ],

  weightage: [
    { exam: 'CAT DILR section', count: 'Determines the whole score', note: 'Four to five sets in forty minutes, of which most candidates can fully solve two or three. The choice is the score.' },
    { exam: 'XAT Decision Making and DI', count: 'Significant', note: 'XAT has no sectional timing in the same form, which widens the selection problem across the paper.' },
    { exam: 'Banking Reasoning and DI', count: 'Moderate', note: 'Sets are more uniform in difficulty, so selection matters less than in CAT — but attempting the puzzle sets in the right order still matters.' },
    { exam: 'Any sectionally timed paper', count: 'Applies generally', note: 'The reasoning here transfers to any section where the material exceeds the time available.' },
    { exam: 'Mock test analysis', count: 'The main use', note: 'Selection is learnt by reviewing choices after mocks, not by reading about it.' },
  ],

  contents: [
    { icon: 'chart', title: 'Why selection decides the score', sub: 'The arithmetic of the section', href: '#why' },
    { icon: 'search', title: 'The scanning round', sub: 'Reading all the sets first', href: '#scan' },
    { icon: 'check', title: 'Signals of a doable set', sub: 'What to look for', href: '#signals' },
    { icon: 'bell', title: 'Warning signs', sub: 'What to avoid', href: '#warnings' },
    { icon: 'clock', title: 'Sequencing and time', sub: 'Order and budget', href: '#sequencing' },
    { icon: 'target', title: 'Partial attempts', sub: 'When half a set is worth it', href: '#partial' },
    { icon: 'refresh', title: 'Building the skill', sub: 'What to do in mocks', href: '#practice' },
    { icon: 'layers', title: 'Solved examples', sub: 'Eight decisions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'why',
      heading: 'Why selection decides the score',
      eyebrow: 'The arithmetic of the section',
      intro:
        'The case for treating selection as a skill rests on three features of how the section is built and scored.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The section is deliberately over-supplied',
              'Four or five sets in forty minutes means roughly eight to ten minutes each if all are attempted — and a genuine CAT set rarely resolves in eight minutes. The paper is designed so that no one finishes it, which means every candidate is choosing, and the only question is whether they choose consciously.',
            ],
            [
              'Sets are all-or-nothing',
              'The cost of a set is concentrated in the setup: reading the conditions, building the representation, making the first deductions. Once the conditions resolve, four or five questions follow quickly. Once they do not, none of them can be answered with confidence. So a set half-solved is worth far less than half a set solved — usually nothing at all.',
            ],
            [
              'DILR percentiles are compressed',
              'DILR has historically produced the lowest raw scores of CAT\'s three sections, so the distribution is bunched at the bottom and a small number of additional correct answers moves the percentile a long way. Two sets solved cleanly can produce a percentile that four sets attempted messily cannot approach.',
            ],
            [
              'The implication',
              'Improving your solving speed by ten per cent is hard and moves the score a little. Choosing two solvable sets instead of two unsolvable ones is a decision, costs nothing, and can move the score enormously. That asymmetry is why selection deserves its own preparation.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'The arithmetic',
          items: [
            { expr: '40 minutes ÷ 4 sets = 10 minutes per set', note: 'And a genuine CAT set takes twelve to fifteen when it resolves, so all four cannot be attempted properly.' },
            { expr: '2 sets fully solved = 8 to 10 correct answers', note: 'Against perhaps 5 or 6 correct from four sets attempted hastily, with wrong answers penalised.' },
            { expr: 'Scanning budget = 3 to 4 minutes', note: 'Roughly a tenth of the section, and the highest-return time in it.' },
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'scan',
      heading: 'The scanning round',
      eyebrow: 'Reading all the sets first',
      intro:
        'Before attempting anything, spend three to four minutes reading every set. It feels like time lost and it is the most valuable time in the section.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'What to do in the scan',
              'For each set: read the introduction and the conditions, look at how the data is presented, glance at the question types, and give it a rating — attempt now, attempt if time, or avoid. Do not attempt to solve anything. Forty to fifty seconds per set is enough for a judgment.',
            ],
            [
              'Why scanning beats attempting in order',
              'Sets are not arranged by difficulty, and the easiest one is as likely to be last as first. A candidate who works through them in order spends their freshest minutes on whatever happens to be first, and frequently discovers the accessible set with eight minutes left. The scan costs four minutes and prevents that.',
            ],
            [
              'Rate, do not rank precisely',
              'You are not trying to order all five sets exactly. You are separating them into three groups. Fine distinctions within a group are not worth the scanning time, because they will resolve themselves once you start solving.',
            ],
            [
              'Write the ratings down',
              'One line on the rough sheet — set numbers with a tick, a question mark or a cross. Under pressure, twenty minutes into the section, you will not reliably remember what you thought of set four during the scan.',
            ],
            [
              'The discipline that makes it work',
              'Not starting to solve during the scan. The temptation is enormous when a set looks tractable, and yielding to it means the remaining sets are never scanned — which reproduces exactly the problem the scan was meant to solve. Read, rate, move on.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'signals',
      heading: 'Signals of a doable set',
      eyebrow: 'What to look for',
      intro:
        'Six signals, all of which can be assessed in under a minute without solving anything.',
      blocks: [
        {
          type: 'table',
          caption: 'What makes a set likely to resolve',
          head: ['Signal', 'Why it matters', 'How to spot it'],
          rows: [
            ['A small number of entities', 'Fewer people, teams or items means a smaller possibility space and faster convergence', 'Count them in the opening line. Five or six is comfortable; ten or more is a warning.'],
            ['At least one absolute condition', 'A definite placement gives a starting point that needs no assumption', 'Look for "A is in position 3", "the total is 100", "X scored the highest".'],
            ['Few branching points', 'Each "either or" doubles the cases you must carry', 'Scan the conditions for "either", "or", "at least one of" — three or more of these is a poor sign.'],
            ['A representation you can see immediately', 'If you know how to draw it within seconds, the setup is cheap', 'Ask yourself: line, circle, grid, table or diagram? If nothing comes to mind, the set will be slow.'],
            ['Questions that are mostly direct', 'Direct questions can be answered from a partial solution; "how many of the following" cannot', 'Glance at the question stems, not the options.'],
            ['A closed system', 'When totals are fixed and everything must be allocated, arithmetic constrains the possibilities heavily', 'Look for a stated grand total, a fixed number of seats, or a points system.'],
          ],
        },
        {
          type: 'note',
          title: 'The strongest single signal',
          text:
            'A set in which the first two conditions, taken together, immediately fix something. If reading the opening conditions puts a definite entry on your page within thirty seconds, the set will usually continue to resolve. If forty-five seconds of reading has produced nothing definite, that is the clearest available evidence that the set will be slow — and it is exactly what the scanning round is designed to detect.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'warnings',
      heading: 'Warning signs',
      eyebrow: 'What to avoid',
      intro:
        'The signals that a set will consume time without yielding answers. None of them is decisive alone; two or three together is enough to avoid the set.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'A long scenario with few conditions',
              'A paragraph of elaborate setup followed by only three or four constraints usually means the constraints are weak and the possibility space is large. Long descriptions with short condition lists are among the most reliably difficult sets.',
            ],
            [
              'Many conditional clues',
              'Clauses of the form "if X then Y" cannot be entered directly and become decisive only late. A set with three or more of them requires you to carry pending conditions through every deduction, which is slow and error-prone.',
            ],
            [
              'Numbers that will not divide',
              'Awkward totals, prices with several significant figures, or values that resist approximation signal a set where the arithmetic itself will consume the time even after the reasoning is done.',
            ],
            [
              'Question stems asking how many statements are true',
              'These require the full solution and often the full space of solutions. A set whose questions are mostly of this type cannot be attempted partially, so it is only worth starting if you are confident of finishing.',
            ],
            [
              'Unfamiliar representation with no obvious diagram',
              'If after reading the conditions you cannot see how to draw the situation, the setup will be expensive. That is not the same as an unfamiliar scenario — an invented context with an obvious grid behind it is fine.',
            ],
            [
              'The set everyone starts with',
              'The first set is attempted by everyone and is not usually the easiest. There is no reward for solving a set that most candidates solve, and no penalty for skipping it if a better one exists. Selection should be driven by the set, not by its position.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'sequencing',
      heading: 'Sequencing and time',
      eyebrow: 'Order and budget',
      intro:
        'Having chosen, the order of attempt and the time allotted to each set are the remaining decisions.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Easiest first, always',
              'Solve the set you rated highest first, whatever its position in the paper. Two reasons: the marks are banked before time pressure builds, and a solved set early settles the nerves, which measurably improves performance on the next. Saving the easy set for later assumes you will reach it, which is exactly the assumption that fails.',
            ],
            [
              'A hard stop per set',
              'Twelve to fifteen minutes for a set you rated highly, and a check at five minutes: has anything definite been established? If not, the rating was wrong and you should move on. Setting the checkpoint in advance is what makes it possible to act on it, because in the moment the sunk cost feels like a reason to continue.',
            ],
            [
              'Reserve the last five minutes',
              'For the questions in attempted sets that you left, for the direct questions in a set you started and abandoned, and for entering answers you worked out but did not record. Candidates regularly lose marks by running out of time with correct answers on the rough sheet.',
            ],
            [
              'Two full sets is a good section',
              'Given the compression of DILR percentiles, two sets solved cleanly with a few extra questions from a third is a strong performance. Aiming at four sets is what produces four partial attempts, and four partial attempts usually score less than two complete ones.',
            ],
            [
              'Do not revisit an abandoned set',
              'Unless you abandoned it for time rather than difficulty, and unless it was the only remaining option. Returning to a set that defeated you once means paying the setup cost again from a cold start, and the reason it did not resolve has not changed.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'A workable budget for a forty-minute section',
          items: [
            { expr: 'Scan: 3–4 minutes', note: 'All sets read and rated, nothing attempted.' },
            { expr: 'First set: 12–14 minutes', note: 'The one rated highest, with a checkpoint at 5 minutes.' },
            { expr: 'Second set: 12–14 minutes', note: 'Same discipline.' },
            { expr: 'Third set or clean-up: 6–8 minutes', note: 'Either a full attempt at a third set if the first two went quickly, or direct questions from elsewhere.' },
            { expr: 'Reserve: 2–3 minutes', note: 'Entering answers and checking that nothing worked out has gone unrecorded.' },
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'partial',
      heading: 'Partial attempts',
      eyebrow: 'When half a set is worth it',
      intro:
        'The most misunderstood judgment in the section. Partial attempts are usually a trap, and occasionally exactly right.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The default: partial attempts are a trap',
              'Because the cost is in the setup and the return is in the resolution, stopping between the two pays the whole cost for none of the return. A set that is half-resolved usually leaves every question uncertain, and answering them from an incomplete arrangement produces wrong answers with negative marking attached.',
            ],
            [
              'The exception: sets with independent direct questions',
              'Some sets contain one or two questions answerable from a fraction of the data — "what is the largest value in row three", "which entity has the highest total". These can be taken without resolving the set. Scanning the question stems during your reading tells you whether such questions exist.',
            ],
            [
              'The second exception: bounds questions',
              'Questions asking for a maximum or minimum can often be answered from the constraints alone, without a full arrangement. If you have established the range within which a quantity must lie, a question asking for its greatest possible value may already be answered.',
            ],
            [
              'What makes a partial attempt actively harmful',
              'Answering a "must be true" or "how many of the following" question from an incomplete solution. These require the full space of valid arrangements, and an incomplete solution gives one candidate arrangement at best. The confident wrong answer here costs both the mark and the penalty.',
            ],
            [
              'The honest test',
              'Ask: can I answer this question from what I have actually established, or am I inferring it from an arrangement I have not verified? If the second, leave it. In a section with negative marking, an unanswered question costs zero and a confidently wrong one costs more than that.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'practice',
      heading: 'Building the skill',
      eyebrow: 'What to do in mocks',
      intro:
        'Selection cannot be learnt by reading about it. It is learnt by making choices under timed conditions and then reviewing them, which requires a specific review habit.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Record your ratings during the mock',
              'Write the scan ratings on the rough sheet and keep it. Afterwards, compare your ratings with how the sets actually behaved. Over ten mocks a pattern emerges — most candidates systematically over-rate one family of set and under-rate another, and knowing which is an immediate improvement.',
            ],
            [
              'Solve the sets you skipped, untimed',
              'After the mock, attempt every set you avoided, without a clock. This tells you whether your avoidance was correct. A set you skipped and can solve comfortably in twelve untimed minutes was a selection error; one you still cannot solve in thirty was correctly avoided, and you should note what signalled that.',
            ],
            [
              'Time each set separately in practice',
              'When practising sets outside mocks, time each one and record how long it took to resolve. Building an accurate sense of how long a set of a given appearance takes you is precisely what the scan depends on, and it can only come from measurement.',
            ],
            [
              'Practise the scan on its own',
              'Take a full DILR section, spend four minutes scanning and rating, and then stop. Check your ratings against the solutions. This drills the skill in isolation, takes four minutes rather than forty, and can be done far more often than a full mock.',
            ],
            [
              'Review the abandonment decisions specifically',
              'For each set you abandoned mid-attempt, ask whether the five-minute checkpoint would have caught it. Candidates who abandon too late almost always failed to set a checkpoint rather than failed to notice; the remedy is procedural, not perceptual.',
            ],
            [
              'Do not confuse selection failure with ability failure',
              'A poor DILR score has two possible causes, and they need opposite remedies. If you solved the sets you chose and simply chose badly, more practice at solving will not help — better scanning will. If you chose well and could not solve them, selection practice is beside the point. Diagnose which before deciding what to work on.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A DILR section has four sets. You are confident about the fourth. Should you attempt it first?',
      steps: [
        'The order in which sets are printed carries no information about difficulty.',
        'Solving the easiest set first banks its marks before time pressure builds and before fatigue sets in.',
        'Saving it for later assumes you will still have time to reach it, which is precisely the assumption that fails when an earlier set turns out to be hard.',
      ],
      answer: 'Yes — always attempt the set you rated highest first, whatever its position.',
    },
    {
      q: 'Is spending four minutes scanning without solving anything a waste of time?',
      steps: [
        'It is about a tenth of the section, which is a real cost.',
        'Without it, you attempt sets in the order printed, and the accessible set is as likely to be last as first.',
        'The cost of discovering the easy set with eight minutes left is far greater than four minutes. The scan converts an accidental choice into a deliberate one, which is what the whole section turns on.',
      ],
      answer: 'No — it is the highest-return time in the section.',
    },
    {
      q: 'Five minutes into a set you rated highly, nothing definite has been established. What now?',
      steps: [
        'The five minutes are spent and cannot be recovered; sunk cost should play no part in the decision.',
        'The only question is whether the next five minutes yield more here or on another set.',
        'A set that has produced nothing definite in five minutes rarely resolves in ten. Your rating was wrong; act on the new information and move on.',
      ],
      answer: 'Move on. The checkpoint exists precisely so that this decision is made rather than drifted into.',
    },
    {
      q: 'A set has an elaborate two-paragraph scenario but only three conditions. Attempt or avoid?',
      steps: [
        'The length of the scenario tells you nothing; the number and strength of the conditions tell you everything.',
        'Three conditions over a large scenario means a weakly constrained possibility space, so convergence will be slow.',
        'This is one of the most reliable warning signs in the section. Avoid unless the alternatives are worse.',
      ],
      answer: 'Avoid. Long description with few constraints is a classic hard set.',
    },
    {
      q: 'You have solved two sets fully with eight minutes left, and two sets remain untouched. What is the best use of the time?',
      steps: [
        'Eight minutes is not enough to set up and resolve a full CAT set from scratch.',
        'So scan both remaining sets for direct questions — the ones answerable from a fraction of the data, such as a maximum value or a single row total.',
        'Take those, and reserve the last two minutes for recording answers. Starting a full set with eight minutes usually produces nothing.',
      ],
      answer: 'Harvest direct questions from the remaining sets rather than starting one properly.',
    },
    {
      q: 'You have partially resolved a set. A question asks "how many of the following must be true". Should you attempt it?',
      steps: [
        '"Must be true" requires the full space of valid arrangements, not one candidate arrangement.',
        'A partial resolution gives at best one arrangement, and possibly one that further conditions would have eliminated.',
        'Answering confidently from it produces a wrong answer with a penalty attached. Leave it.',
      ],
      answer: 'No — that question type cannot be answered from an incomplete solution.',
    },
    {
      q: 'How do you tell after a mock whether your DILR problem is selection or solving?',
      steps: [
        'Attempt every set you skipped, untimed, after the mock.',
        'If you can comfortably solve the ones you avoided, your solving ability is fine and your scanning is not — the remedy is selection practice.',
        'If you still cannot solve them with unlimited time, your avoidance was correct and the constraint is genuine ability, which needs solving practice instead.',
      ],
      answer: 'By solving the skipped sets untimed — that separates a selection failure from an ability failure.',
    },
    {
      q: 'Is three sets attempted better than two sets solved?',
      steps: [
        'A set\'s cost is concentrated in the setup and its return in the resolution, so a partial attempt pays the cost without the return.',
        'Two sets solved cleanly typically give eight to ten correct answers; three attempted hastily might give five or six, with wrong answers penalised.',
        'And because DILR percentiles are compressed, those additional correct answers move the percentile disproportionately.',
      ],
      answer: 'Two solved beats three attempted, in almost every case.',
    },
  ],

  practice: [
    {
      q: 'The recommended time for the scanning round in a 40-minute DILR section is:',
      options: ['3–4 minutes', '30 seconds', '8–10 minutes', 'None — start solving immediately'],
      answer: 0,
      explain: 'About a tenth of the section, spent reading and rating every set without solving anything.',
    },
    {
      q: 'Sets should be attempted in order of:',
      options: ['Your rating, easiest first', 'Their position in the paper', 'Question count', 'Length of the scenario'],
      answer: 0,
      explain: 'Position carries no information about difficulty, and banking easy marks early reduces time pressure later.',
    },
    {
      q: 'A long scenario with only three or four conditions usually signals:',
      options: ['An easy set', 'A weakly constrained and therefore hard set', 'A calculation-heavy set', 'A set with direct questions'],
      answer: 1,
      explain: 'Few constraints mean a large possibility space and slow convergence.',
    },
    {
      q: 'The five-minute checkpoint in a set exists to:',
      options: ['Measure your speed', 'Divide the time equally', 'Force a decision about whether the set is resolving', 'Signal when to start answering'],
      answer: 2,
      explain: 'It converts a decision that would otherwise be drifted into an explicit one.',
    },
    {
      q: 'Sunk time already spent on a set should influence the decision to continue:',
      options: ['Strongly — it would be wasted otherwise', 'Only if more than ten minutes', 'Only in the first half of the section', 'Not at all'],
      answer: 3,
      explain: 'The only question is whether the next five minutes are better spent here or elsewhere.',
    },
    {
      q: 'Which is generally the better outcome in CAT DILR?',
      options: ['Four sets attempted partially', 'Two sets solved fully', 'Three sets attempted with two questions each', 'All sets scanned but none completed'],
      answer: 1,
      explain: 'The setup cost is paid once and the return comes only on resolution, so partial attempts pay cost without return.',
    },
    {
      q: 'A question asking "how many of the following must be true" can be answered from a partial solution:',
      options: ['Yes, if the partial solution is consistent', 'Yes, if two conditions remain unused', 'No — it requires the full space of valid arrangements', 'Only in the last five minutes'],
      answer: 2,
      explain: 'A partial solution gives at best one candidate arrangement, which is not enough for a "must" question.',
    },
    {
      q: 'The strongest single signal that a set will resolve is:',
      options: ['A familiar-looking scenario', 'Something definite fixed within the first thirty seconds of reading', 'A small number of questions', 'A table rather than prose'],
      answer: 1,
      explain: 'If forty-five seconds of reading has produced nothing definite, the set will usually be slow.',
    },
    {
      q: 'With eight minutes left and two untouched sets, the best move is usually to:',
      options: ['Start one set properly', 'Guess on all remaining questions', 'Recheck completed sets', 'Scan both for directly answerable questions'],
      answer: 3,
      explain: 'Eight minutes is not enough to set up and resolve a CAT set from scratch.',
    },
    {
      q: 'Three or more conditional "if-then" clues in a set is:',
      options: ['A good sign', 'A warning sign', 'Irrelevant to difficulty', 'A sign of an arithmetic set'],
      answer: 1,
      explain: 'Conditionals cannot be entered directly and must be carried as pending checks through every deduction.',
    },
    {
      q: 'After a mock, the best way to test whether your selection was sound is to:',
      options: ['Solve the skipped sets untimed', 'Compare your score with the average', 'Redo the attempted sets', 'Read the solutions'],
      answer: 0,
      explain: 'If you can solve the skipped sets comfortably, the failure was selection, not ability.',
    },
    {
      q: 'You should revisit an abandoned set:',
      options: ['Always, since the setup is done', 'Only if you abandoned it for time rather than difficulty', 'Never', 'Only in the first half of the section'],
      answer: 1,
      explain: 'Returning to a set that defeated you means paying the setup cost again while the difficulty is unchanged.',
    },
    {
      q: 'Writing your scan ratings on the rough sheet matters because:',
      options: ['It is required by the exam', 'It saves reading time later', 'You will not reliably recall them under pressure', 'It helps the invigilator'],
      answer: 2,
      explain: 'Twenty minutes into the section, your judgment of set four during the scan is not reliably available.',
    },
    {
      q: 'The last two to three minutes of the section should be reserved for:',
      options: ['A final new set', 'Rechecking every answer', 'Rereading the conditions', 'Recording answers already worked out and taking direct questions'],
      answer: 3,
      explain: 'Candidates regularly lose marks by leaving correct answers unentered on the rough sheet.',
    },
    {
      q: 'DILR percentiles respond disproportionately to a few extra correct answers because:',
      options: ['The section is marked differently', 'Raw scores are compressed at the low end', 'There is no negative marking', 'The section is shorter'],
      answer: 1,
      explain: 'Historically the lowest-scoring of CAT\'s three sections, so the distribution is bunched and small gains move the percentile a long way.',
    },
    {
      q: 'A set whose questions are mostly "how many of the following" should be:',
      options: ['Attempted first', 'Attempted partially', 'Attempted only if you expect to finish it', 'Attempted last regardless'],
      answer: 2,
      explain: 'Such questions require a full solution, so the set cannot be harvested partially.',
    },
  ],

  faqs: [
    {
      q: 'Is set selection really worth studying as a topic?',
      a: 'Yes, because of an asymmetry. Improving your solving speed by ten per cent is hard, takes months and moves the score modestly. Choosing two solvable sets instead of two unsolvable ones is a decision that costs nothing and can move the score enormously. In a section deliberately built so that nobody finishes, the choice is the score.',
    },
    {
      q: 'How long should the scanning round take?',
      a: 'Three to four minutes for four or five sets — about forty to fifty seconds each. Long enough to read the conditions, see the data format and glance at the question types; not long enough to start solving. The discipline that makes it work is not beginning to solve when a set looks tractable, because then the remaining sets never get scanned.',
    },
    {
      q: 'What if all the sets look hard?',
      a: 'Then they are hard for everyone, and the percentile will reflect that. Pick the one with the fewest entities and at least one absolute condition, and give it the full time. In a hard section, one clean set can produce a very high percentile, and the worst response is to sample all of them and finish none.',
    },
    {
      q: 'When should I abandon a set?',
      a: 'At the five-minute checkpoint, if nothing definite has been established. Set the checkpoint before you begin, because in the moment the time already invested feels like a reason to continue, which is exactly backwards — that time is spent whatever you decide, and the only live question is where the next five minutes go.',
    },
    {
      q: 'Are partial attempts ever worth making?',
      a: 'Occasionally. Some sets contain one or two questions answerable from a fraction of the data — a single row total, a maximum value, the largest entry in a column. Those can be harvested. What is never worth attempting from a partial solution is a "must be true" or "how many of the following" question, because those require the complete space of valid arrangements.',
    },
    {
      q: 'How do I know whether my DILR problem is selection or ability?',
      a: 'After a mock, attempt every set you skipped without a clock. If you can solve them comfortably, your solving ability is adequate and your scanning is not — work on selection. If you still cannot solve them given unlimited time, your avoidance was correct and the constraint is genuine ability. The two diagnoses call for opposite remedies, and treating one as the other wastes months.',
    },
    {
      q: 'Should I attempt the first set because everyone else does?',
      a: 'No. Position in the paper carries no information about difficulty, and there is no advantage in solving a set that most candidates solve. Selection should be driven by the properties of the set — number of entities, presence of an absolute condition, obviousness of the representation — and not by where it appears or by what others are likely to do.',
    },
    {
      q: 'How many sets should I aim to solve?',
      a: 'Two fully, with some questions harvested from a third if the first two went quickly. That is a strong DILR performance given how compressed the percentiles are. Aiming at four is what produces four partial attempts, and four partial attempts almost always score less than two complete ones — while feeling considerably more productive at the time.',
    },
    {
      q: 'How do I practise selection specifically?',
      a: 'Take a full DILR section, spend four minutes scanning and rating each set, then stop and check your ratings against the solutions. That drills the skill in four minutes rather than forty, so you can do it several times a week. Alongside that, keep your scan ratings from every mock and compare them with how the sets actually behaved.',
    },
    {
      q: 'Does any of this transfer outside CAT?',
      a: 'Directly, to any sectionally timed paper where the material exceeds the time. Banking reasoning sections have puzzle sets of varying difficulty and reward the same scanning discipline, and XAT\'s untimed sections make the selection problem larger rather than smaller. The general principle — that where you cannot do everything, choosing well beats working faster — holds wherever the paper is over-supplied.',
    },
  ],

  related: [
    { label: 'Data Interpretation', to: '/study-material/dilr/data-interpretation/' },
    { label: 'Logical Reasoning Sets', to: '/study-material/dilr/logical-reasoning-sets/' },
    { label: 'Reading Comprehension Strategy', to: '/study-material/varc/rc-strategy/' },
    { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
    { label: 'All DILR', to: '/study-material/dilr/' },
  ],
}
