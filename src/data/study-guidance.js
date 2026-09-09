/**
 * "How to study this subject" guidance for each study-material subject page.
 *
 * The subject landing pages already carried good hero copy explaining what the
 * subject is and what order to read the topics in. What they did not carry was
 * any advice on method — how this particular subject should actually be
 * studied, which differs enormously between, say, vocabulary and mechanics.
 *
 * That advice is the most useful thing a subject hub can add, because it is
 * the part a topic page cannot cover and a syllabus never mentions.
 *
 * Keyed by subject slug, matching SUBJECTS in src/data/study/index.js.
 * Blocks use the vocabulary from src/components/Blocks.jsx.
 */

const GUIDANCE = {
  'quantitative-aptitude': {
    heading: 'How to study quantitative aptitude',
    intro:
      'This is a skill subject, not a knowledge subject. Reading a method teaches you to recognise it; only solving builds the ability to use it under a clock.',
    blocks: [
      {
        type: 'steps',
        title: 'The sequence that works',
        items: [
          { text: 'Fix arithmetic fluency before anything else.', note: 'Percentage, ratio and fraction equivalents held instantly. Data interpretation, profit and loss, interest and mixtures are all built on them.' },
          { text: 'Read a topic once, then solve twenty questions.', note: 'Before re-reading anything. Re-reading feels productive and teaches recognition rather than capability.' },
          { text: 'Move to mixed sets once accuracy on a topic is stable.', note: 'Topic sets tell you which method to use; the exam does not.' },
          { text: 'Drill calculation separately, fifteen minutes daily.', note: 'Tables, squares, cubes, fraction-to-percentage conversions. Unglamorous, and the single highest-return habit in the subject.' },
        ],
      },
      {
        type: 'list',
        title: 'What separates fast candidates',
        items: [
          'They recognise the shape of a problem before reading it fully — "two rates, working together" rather than "a time and work question".',
          'They convert fractions to percentages without computing, which is most of the speed advantage in data interpretation.',
          'They abandon a question that has not yielded within their limit, rather than sinking three minutes into it.',
          'They practise on paper without a calculator, because that is how the exam is sat.',
        ],
      },
    ],
  },

  reasoning: {
    heading: 'How to study reasoning',
    intro:
      'Reasoning is the section where preparation shows fastest, because nothing here needs memorising. Every topic is a method, and methods respond to repetition rather than to study.',
    blocks: [
      {
        type: 'steps',
        title: 'A daily routine that builds it',
        items: [
          { text: 'Two or three puzzles a day, timed, every day.', note: 'Volume over months is what builds the pattern recognition. A hundred puzzles in one week teaches far less than the same hundred over two months.' },
          { text: 'Always draw the diagram.', note: 'Reasoning solved in your head is slow and error-prone. The representation is the solution; drawing it fluently is the skill.' },
          { text: 'Catalogue puzzle families as you meet them.', note: 'Linear rows facing two directions, circular arrangements, floor-and-flat, scheduling, comparison. Recognising the family in ten seconds is the largest speed gain available.' },
          { text: 'Practise non-verbal reasoning specifically.', note: 'It is heavily weighted in SSC, railway and defence papers and almost absent from banking preparation.' },
        ],
      },
      {
        type: 'note',
        title: 'The abandonment rule',
        text: 'Set a hard time limit per puzzle set and obey it. In a sectionally timed paper, a puzzle that resists you for four minutes has cost you two other sets you could have solved. The discipline to leave a half-worked puzzle is what most candidates lack, and it is trainable.',
      },
    ],
  },

  english: {
    heading: 'How to study English',
    intro:
      'English divides into two halves that need completely different treatment. Grammar is finite and can be learned in weeks; vocabulary and reading speed are cumulative and take months.',
    blocks: [
      {
        type: 'defs',
        items: [
          [
            'Grammar — a finite project',
            'Subject-verb agreement, tense sequence, prepositions, articles, modifiers, parallelism. A closed set of rules that explains most error-detection and sentence-improvement questions. Work through them systematically once, then practise until application is automatic.',
          ],
          [
            'Vocabulary — a daily habit',
            'Ten words a day, met in reading and recorded with their usage, revisited after three days and again after two weeks. Word lists memorised in isolation fade; words met in context stay. This cannot be compressed into a final month.',
          ],
          [
            'Reading comprehension — a reading habit',
            'Built by reading demanding material daily, not by practising comprehension questions. The questions test speed and inference on unfamiliar prose, and only unfamiliar prose develops that.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The practical consequence is that English should start on day one and continue every day, at thirty minutes rather than in blocks. It is also the section that most often carries a sectional cutoff in banking and insurance examinations, which means a weakness here can disqualify a candidate whose overall score was comfortable.',
      },
    ],
  },

  history: {
    heading: 'How to study history for competitive exams',
    intro:
      'History is examined as pairings rather than as narrative — which site, which ruler, which movement, which year. Reading it as a story is enjoyable and prepares you poorly for that.',
    blocks: [
      {
        type: 'list',
        title: 'What to record while reading',
        items: [
          { text: 'Person and their single defining association', note: 'a reform, a movement, a text, a policy. Most questions are a name and one attribute.' },
          { text: 'Chronological anchors, not every date', note: 'a handful of fixed points per period, with everything else placed relative to them.' },
          { text: 'Cause and consequence pairs', note: 'which incident led to which withdrawal, which act provoked which response.' },
          { text: 'Terms and their period', note: 'administrative, revenue and architectural terms are asked directly and are easy marks.' },
        ],
      },
      {
        type: 'note',
        title: 'Where to start if time is short',
        text: 'Modern India. It carries more marks than ancient and medieval combined in almost every competitive examination, and it is the period where exact dates and named individuals are actually asked rather than described in general terms.',
      },
    ],
  },

  geography: {
    heading: 'How to study geography',
    intro:
      'Geography rewards maps more than notes. A candidate who can place ranges, rivers and passes on a blank outline answers most questions faster than one who has memorised lists of them.',
    blocks: [
      {
        type: 'steps',
        title: 'A method built on the map',
        items: [
          { text: 'Keep a blank outline map beside you while reading.', note: 'Mark every feature as you meet it. The act of placing it is what fixes it.' },
          { text: 'Learn physical geography first.', note: 'Relief and latitude explain monsoon, soils, drainage and agriculture. Learning them in that order makes the rest follow rather than needing separate memorisation.' },
          { text: 'Connect current affairs to the map.', note: 'Every national park, river dispute or project in the news is a place to locate. This makes both subjects easier.' },
          { text: 'Learn the sequences.', note: 'Rivers by the states they cross, ranges from north to south, passes by the ranges they cut. Questions are frequently about order and adjacency.' },
        ],
      },
    ],
  },

  polity: {
    heading: 'How to study Indian polity',
    intro:
      'Polity is the most predictable scoring block in general studies, because the institutions are fixed and the questions repeat. What changes between examinations is the depth expected.',
    blocks: [
      {
        type: 'defs',
        items: [
          [
            'For SSC, railway and state papers',
            'Which article, which schedule, which body, which appointment. Direct recall of provisions and institutional facts. A themed sheet of articles and institutions, revised weekly, covers most of it.',
          ],
          [
            'For UPSC and descriptive papers',
            'How institutions interact — the executive’s accountability to the legislature, the judiciary’s relationship to both, the working of federalism in practice. Questions ask you to examine tensions rather than recall provisions.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Read Parliament first regardless of your target examination. The executive is accountable to it and the judiciary is defined against it, which makes it the structure the rest hangs from. Connecting current developments — a bill, a dispute, an appointment — to the provision they turn on is what makes polity stick.',
      },
    ],
  },

  constitution: {
    heading: 'How to study the Constitution',
    intro:
      'The Constitution is examined article by article, which makes it unusually learnable — the numbers do not move, and the questions repeat across cycles.',
    blocks: [
      {
        type: 'steps',
        items: [
          { text: 'Start with the making and the Preamble.', note: 'They explain why the document looks as it does, which makes the rest less arbitrary to remember.' },
          { text: 'Learn the parts and what each contains.', note: 'A structural map is worth more than isolated article numbers, because it lets you place an unfamiliar article.' },
          { text: 'Then the rights, duties and directive principles article by article.', note: 'These carry the largest share of questions.' },
          { text: 'Then amendment, basic structure and the significant cases.', note: 'Where descriptive papers and interviews concentrate.' },
        ],
      },
      {
        type: 'note',
        title: 'On numbers that change',
        text: 'Some counts — the number of amendments, for instance — change over time. Where they do, learn the structure rather than the current figure, and check the figure close to your examination rather than carrying one from an older source.',
      },
    ],
  },

  economy: {
    heading: 'How to study Indian economy',
    intro:
      'Economy questions divide into two kinds: definitions that never change, and figures that change every year. Concentrating on the first and flagging the second is what makes this subject manageable.',
    blocks: [
      {
        type: 'list',
        title: 'What to prioritise',
        items: [
          { text: 'Concepts and definitions', note: 'national income measures, inflation types and measures, unemployment types, money supply aggregates, budget terminology. Stable, reliably asked, entirely learnable.' },
          { text: 'Institutional roles', note: 'the central bank and its instruments, the regulators, the international financial institutions. Also stable.' },
          { text: 'Mechanisms', note: 'how a policy rate change is meant to affect inflation, how a subsidy reaches a beneficiary. Needed for descriptive papers and interviews.' },
          { text: 'Current figures — noted, not memorised', note: 'a growth rate or a deficit figure is worth knowing close to the exam and worthless a year later.' },
        ],
      },
      {
        type: 'p',
        text: 'A business newspaper read daily is the most efficient single habit for this subject, because it serves economy, banking awareness, current affairs and the interview stage at once. Concepts should come from a structured source; currency should come from the newspaper.',
      },
    ],
  },

  environment: {
    heading: 'How to study environment and ecology',
    intro:
      'Environment has grown from a minor topic into a substantial one, and it is unusually well connected to geography, biology and current affairs — which makes studying it alongside them far more efficient than treating it separately.',
    blocks: [
      {
        type: 'list',
        title: 'The components that get asked',
        items: [
          { text: 'Ecological concepts', note: 'ecosystems, food chains, nutrient cycles, biodiversity and its levels. Stable and foundational.' },
          { text: 'Protected areas and species', note: 'national parks, sanctuaries, biosphere reserves and tiger reserves, with their states and notable species. Locate each on a map as you meet it.' },
          { text: 'Conservation status and the bodies that assign it', note: 'the lists, the categories and the organisations maintaining them.' },
          { text: 'Climate agreements and institutions', note: 'the conventions, the protocols, the summits and the commitments.' },
          { text: 'Domestic legislation and policy', note: 'the major acts, the rules under them, and current missions and targets.' },
        ],
      },
      {
        type: 'note',
        title: 'The map habit',
        text: 'Every time a protected area appears in the news, locate it — state, river system, range. Every time a species is discussed, note where it is found. Environment questions are frequently geography questions in disguise, and this habit answers both.',
      },
    ],
  },

  science: {
    heading: 'How to study general science',
    intro:
      'General science for competitive exams is finite, which is a rare and valuable property. Physics, chemistry and biology at approximately class 10 level is a bounded body of content that can be covered completely rather than sampled.',
    blocks: [
      {
        type: 'p',
        text: 'That boundedness is the reason to treat it as a syllabus to finish rather than a topic to revise. Working through class 10 science chapter by chapter is a two-month project that secures a substantial and reliably examined block of general awareness marks — a better return than almost any comparable use of the same time.',
      },
      {
        type: 'steps',
        items: [
          { text: 'Keep a chapter checklist and mark off what is genuinely finished.', note: 'Not what is started. The value of a finite syllabus is lost if it is sampled.' },
          { text: 'Solve questions immediately after each chapter.', note: 'Rather than at the end of the subject, when the material has faded.' },
          { text: 'Connect science to everyday phenomena.', note: 'Many questions are framed as observations rather than as textbook statements, and the connection is what lets you recognise them.' },
          { text: 'Revisit each chapter twice more before the exam.', note: 'Recall of factual science decays faster than understanding of method.' },
        ],
      },
    ],
  },

  'art-culture': {
    heading: 'How to study art and culture',
    intro:
      'Art and culture is examined almost entirely as pairings — which dance belongs to which state, which festival to which region, which architectural feature to which period. That structure should determine how you record it.',
    blocks: [
      {
        type: 'list',
        title: 'The pairings that recur',
        items: [
          { text: 'Classical dances and their states', note: 'along with their distinguishing features and notable exponents.' },
          { text: 'Folk dances, festivals and their regions', note: 'a long list, best kept as a table rather than as prose.' },
          { text: 'Architectural styles and their periods', note: 'with the distinguishing features that identify each.' },
          { text: 'Musical traditions and instruments', note: 'classical schools, gharanas and the instruments associated with each.' },
          { text: 'Painting schools and their patrons', note: 'periods, regions and characteristic subjects.' },
        ],
      },
      {
        type: 'note',
        title: 'Keep it as a table, not as notes',
        text: 'This subject is a set of correspondences, and a table is the format that matches it. Prose notes on art and culture are pleasant to write and almost impossible to revise; a two-column table is revisable in minutes and mirrors exactly how the questions are constructed.',
      },
    ],
  },

  physics: {
    heading: 'How to study physics',
    intro:
      'Physics is learned by solving, not by reading. A worked solution you have read produces recognition; a problem you have struggled through produces capability, and only the second survives an exam.',
    blocks: [
      {
        type: 'steps',
        items: [
          { text: 'Attempt every problem for a genuine stretch before consulting a solution.', note: 'The struggle is the mechanism. Reading the solution first replaces learning with recognition.' },
          { text: 'When you do read a solution, close it and reproduce the argument.', note: 'If you cannot, you have not learned it yet.' },
          { text: 'Build mechanics first.', note: 'Kinematics, laws of motion, work and energy, rotational motion. Everything later assumes them, and gaps here compound.' },
          { text: 'Keep an error log classified by cause.', note: 'Concept gap, algebraic slip, misread question, unit error. Four causes with four different remedies.' },
          { text: 'Derive rather than memorise where you can.', note: 'A formula you can rebuild is one you will not misremember under pressure.' },
        ],
      },
      {
        type: 'note',
        title: 'On units and dimensions',
        text: 'A dimensional check takes ten seconds and catches a surprising proportion of algebraic errors before they become wrong answers. It is the cheapest verification available in any physics paper, and almost nobody uses it systematically.',
      },
    ],
  },

  chemistry: {
    heading: 'How to study chemistry',
    intro:
      'Chemistry divides into three parts that need genuinely different methods, and treating them alike is why candidates find one of the three unreasonably hard.',
    blocks: [
      {
        type: 'defs',
        items: [
          [
            'Physical chemistry — solve it',
            'Thermodynamics, equilibrium, kinetics, electrochemistry and solutions are problem subjects. They behave like physics and respond to the same treatment: work problems, do not read them.',
          ],
          [
            'Organic chemistry — understand mechanisms',
            'Memorising reactions produces a list that collapses under an unfamiliar substrate. Understanding why a reaction proceeds — electron movement, stability of intermediates, steric effects — lets you predict reactions you have not seen.',
          ],
          [
            'Inorganic chemistry — revise it',
            'Periodicity, group properties, coordination compounds and metallurgy are largely factual, and they reward repeated light revision rather than problem practice. This is the part that tracks the textbook most closely in examinations like NEET.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The practical implication is a split routine: problem practice for physical chemistry, mechanism study for organic, and short frequent revision passes for inorganic. Candidates who apply one method to all three usually find inorganic tedious and organic impossible.',
      },
    ],
  },

  mathematics: {
    heading: 'How to study mathematics',
    intro:
      'Mathematics rewards the same discipline everywhere it is examined: solve before reading, work the derivation, and practise mixed rather than sorted.',
    blocks: [
      {
        type: 'steps',
        items: [
          { text: 'Never read a solution before attempting the problem.', note: 'This single habit accounts for most of the difference between candidates who improve and those who plateau.' },
          { text: 'Work derivations by hand rather than accepting results.', note: 'A formula you can rebuild will not be misremembered; one you memorised will.' },
          { text: 'Practise mixed sets once a topic is stable.', note: 'Sorted practice tells you which method to use, which is exactly what the exam withholds.' },
          { text: 'Maintain a hand-written formula sheet.', note: 'Containing only what you personally keep forgetting, revised weekly. Someone else’s formula sheet is a list; yours is a diagnosis.' },
          { text: 'Revisit hard problems after a month.', note: 'A problem solved twice, a month apart, is one you have actually learned.' },
        ],
      },
    ],
  },

  biology: {
    heading: 'How to study biology',
    intro:
      'Biology is the most factual of the sciences and the most closely tied to its textbook, which makes it both the easiest to prepare systematically and the easiest to under-prepare by reading rather than revising.',
    blocks: [
      {
        type: 'list',
        title: 'What the subject actually asks for',
        items: [
          { text: 'Detail, not gist', note: 'in examinations like NEET, questions trace to specific lines, tables, diagram captions and summary points. Skimming for concepts leaves those unlearned.' },
          { text: 'Diagrams as content', note: 'labelled figures are a source of questions, not illustrations of the text.' },
          { text: 'Repeated revision cycles', note: 'a largely factual body of material needs several passes rather than one thorough reading, however careful that reading was.' },
          { text: 'Terminology held precisely', note: 'distractor options are frequently built from adjacent terms.' },
        ],
      },
      {
        type: 'note',
        title: 'Read for detail, then revise on a cycle',
        text: 'The single most useful adjustment for biology is to stop reading it as though understanding were the objective. Understand it once, then revise it repeatedly — because what is examined is the detail, and detail decays without repetition in a way that understanding does not.',
      },
    ],
  },

  'general-knowledge': {
    heading: 'How to study general knowledge',
    intro:
      'General knowledge feels unlearnable because it looks unbounded. It is not: across every examination, the same themes recur, and past papers reveal a list short enough to revise weekly.',
    blocks: [
      {
        type: 'steps',
        title: 'Turning an unbounded subject into a finite one',
        items: [
          { text: 'Extract general awareness questions from several years of past papers.', note: 'For your own target examination.' },
          { text: 'Sort them by theme rather than by year.', note: 'Awards, dances, national parks, constitutional articles, organisations, first-in-India facts, important days.' },
          { text: 'Build a one-page sheet per theme.', note: 'The distribution will be uneven, and the heavy themes are where revision time belongs.' },
          { text: 'Revise the sheets weekly and test yourself rather than re-reading.', note: 'Recall-based material responds to retrieval, not exposure.' },
        ],
      },
      {
        type: 'p',
        text: 'This works because static general knowledge repeats across cycles in a way current affairs cannot. A candidate who has built themed sheets from past papers is revising exactly the material the examiner draws from, rather than reading a general knowledge book that weights everything equally.',
      },
    ],
  },

  varc: {
    heading: 'How to study verbal ability and reading comprehension',
    intro:
      'VARC is the section candidates most often try to fix with technique and most reliably fix with reading. Comprehension speed on unfamiliar prose is built by reading unfamiliar prose, and by very little else.',
    blocks: [
      {
        type: 'steps',
        items: [
          { text: 'Read demanding long-form material daily.', note: 'Essays, criticism, science writing, history — from subjects you would not naturally choose. Familiar material does not build the skill the section tests.' },
          { text: 'For each passage, identify the author’s position before answering anything.', note: 'Most inference questions turn on it, and locating it explicitly makes the questions faster.' },
          { text: 'Practise para jumbles and para summary as reasoning, not vocabulary.', note: 'They test the logical structure of an argument, which is a different skill from knowing words.' },
          { text: 'Track accuracy by passage type.', note: 'Most candidates are consistently weaker on one kind — philosophy, science, economics — and knowing which lets you triage in the exam.' },
        ],
      },
      {
        type: 'note',
        title: 'Why technique alone plateaus',
        text: 'Reading techniques help a candidate who can already read the passage comfortably. For one who cannot, they add a layer of process to a bottleneck they do not address. If your comprehension is slow, the fix is months of reading rather than another method.',
      },
    ],
  },

  dilr: {
    heading: 'How to study data interpretation and logical reasoning',
    intro:
      'In sectionally timed examinations, DILR is decided less by whether you can solve a set than by whether you chose the right sets to attempt. Selection is the skill, and it is trainable.',
    blocks: [
      {
        type: 'steps',
        title: 'Building selection judgement',
        items: [
          { text: 'Spend the first minute of the section scanning, not solving.', note: 'Triage costs a minute and repeatedly saves five.' },
          { text: 'Before calculating anything, read the structure of a set.', note: 'Thirty seconds understanding how a set is arranged is recovered several times over. Rushing into an unread structure is how whole sets are lost.' },
          { text: 'Set a hard abandonment rule and obey it.', note: 'A set that has not yielded within your limit is costing you another you could have solved. Sunk cost is the most expensive error in a timed section.' },
          { text: 'Review your selections afterwards, not just your answers.', note: 'Were the sets you skipped genuinely harder, or merely unfamiliar? That distinction calibrates the instinct.' },
        ],
      },
      {
        type: 'p',
        text: 'Underneath the selection skill sits arithmetic fluency. A candidate who reads a fraction as a percentage without computing works through a data set in a fraction of the time someone converting each figure longhand takes — which is why calculation drilling, apparently unrelated to reasoning, improves this section more than most reasoning practice does.',
      },
    ],
  },

  'legal-reasoning': {
    heading: 'How to study legal reasoning',
    intro:
      'Modern law entrance examinations supply the legal principles their questions need. What they test is whether you can apply a stated principle precisely — including when it conflicts with your intuition, or with what you believe the actual law to be.',
    blocks: [
      {
        type: 'steps',
        items: [
          { text: 'Answer strictly from the principle given.', note: 'Even where you know the real law says otherwise. This discipline is what the section tests, and importing outside knowledge is the characteristic error.' },
          { text: 'Identify the elements of the principle before reading the facts.', note: 'A principle usually has two or three conditions; the facts either satisfy them or do not.' },
          { text: 'Check each element against the facts explicitly.', note: 'Rather than reaching a conclusion by feel and then justifying it.' },
          { text: 'Notice why the wrong options are wrong.', note: 'They typically satisfy some elements and not all, which is exactly the trap the question is built around.' },
        ],
      },
      {
        type: 'note',
        title: 'Memorising law is preparing for the wrong exam',
        text: 'CLAT and AILET undergraduate papers do not test legal knowledge — they supply what they need and test application. A candidate memorising sections and case names is preparing for a format these examinations moved away from, and the time is better spent on reading speed and on the discipline of applying a given rule exactly.',
      },
    ],
  },
}

/** Guidance for a subject slug, or undefined where none is written yet. */
export function getGuidance(subject) {
  return GUIDANCE[subject]
}

export default GUIDANCE
