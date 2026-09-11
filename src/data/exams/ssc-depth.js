/**
 * Additional blocks for the SSC exam records.
 *
 * The `study-material` and `mock-tests` resource pages across every exam
 * family were written as prose, lists and notes, and carried no table. That
 * left two of the six resource pages consistently lighter than the other four
 * and, more importantly, missing the one format those two questions most want:
 * a reading list you can scan by section, and a diagnostic you can look your
 * own result up in.
 *
 * This file supplies both for the SSC recruitments, per exam. Merged onto the
 * matching resource by src/data/exams/index.js.
 *
 * Editorial rules unchanged: no vacancy count, no cutoff, no fee, no date, no
 * mark total for a named cycle. Everything here describes the durable shape of
 * each paper and what it implies for reading and for practice.
 */

const SSC_DEPTH = {
  'ssc-cgl': {
    'study-material': [
      {
        type: 'table',
        caption:
          'What to read for each Tier 1 section, and the depth that is wasted on it. Tier 2 depth differs and is noted where it does.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Quantitative aptitude',
            'One arithmetic source worked to completion, then algebra, geometry, mensuration and trigonometry — which carry far more weight in Tier 2 than in Tier 1.',
            'Advanced or competitive-mathematics material written for engineering entrance papers. The level here is school arithmetic and school geometry, applied fast.',
          ],
          [
            'General intelligence and reasoning',
            'A question bank rather than a textbook. Verbal and non-verbal families both appear, and non-verbal is the half banking-focused material omits.',
            'Long theoretical treatments of reasoning. Nothing here has to be learned, only drilled.',
          ],
          [
            'General awareness',
            'Static general knowledge organised as pairs, school-level general science, polity, modern history, geography and economy, plus current affairs kept as a monthly consolidation.',
            'Deep subject reading. The questions are single-fact and broad; depth in one subject buys very little across the section.',
          ],
          [
            'English comprehension',
            'A grammar reference worked through once, then error detection, sentence improvement and cloze practice. Vocabulary built from reading rather than from lists.',
            'Literature or advanced usage. The paper tests rule application and common vocabulary.',
          ],
          [
            'Tier 2 additions',
            'Computer knowledge and the data entry or skill requirement for the posts you are eligible for, plus statistics or finance where your post paper requires it.',
            'Assuming the Tier 1 reading list covers Tier 2. It does not, and Tier 2 is the stage that builds the merit list.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a CGL Tier 1 result is telling you, section by section.',
        head: ['What you see', 'What it usually means', 'What to change'],
        rows: [
          [
            'General awareness answered fast and badly',
            'Coverage rather than technique. These questions are single-fact — you either hold it or you do not.',
            'Build the pair-format static sheet and revise it in short daily sessions. Nothing else moves this section.',
          ],
          [
            'Quantitative section consumed most of the clock',
            'Calculation speed, not method knowledge.',
            'Fifteen minutes of daily arithmetic drill. Then re-sit and compare minutes, not marks.',
          ],
          [
            'Reasoning slow on non-verbal questions',
            'Unfamiliarity. Non-verbal families are closed and mechanical.',
            'Work one non-verbal family to fluency at a time rather than mixing them.',
          ],
          [
            'Wrong answers far outnumber blanks',
            'Guessing past the point where the guess is informed, in a paper that deducts.',
            'Mark every guessed question and study only those topics. Do not raise the attempt count.',
          ],
          [
            'Score plateaued for several weeks',
            'Revision has replaced practice.',
            'Replace reading hours with solving hours for a fortnight, then re-measure.',
          ],
        ],
      },
    ],
  },

  'ssc-chsl': {
    'study-material': [
      {
        type: 'table',
        caption: 'A reading list pitched at the level this paper actually sets.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Quantitative aptitude',
            'Arithmetic to completion — percentage, ratio, interest, profit and loss, averages, time and work — with basic mensuration and data interpretation.',
            'Higher algebra and advanced geometry. The CHSL level is lower than CGL and material written for CGL Tier 2 wastes weeks.',
          ],
          [
            'General intelligence',
            'A mixed question bank covering verbal and non-verbal families, worked daily in short sets.',
            'Theory. The section is entirely method recognition under time.',
          ],
          [
            'General awareness',
            'Static pairs, school-level science, polity and history basics, and a monthly current-affairs consolidation.',
            'Analytical treatments of any subject. The questions are recall, not reasoning.',
          ],
          [
            'English language',
            'Grammar rules applied through error detection and sentence improvement, plus steady reading for vocabulary and comprehension.',
            'Word lists memorised in isolation, which are retained poorly and tested in context.',
          ],
          [
            'The skill requirement',
            'Typing practice on a fixed daily schedule from the first month, in the format the notification prescribes.',
            'Leaving it until after a result. A prescribed speed takes months of daily practice and cannot be arranged late.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a CHSL mock, and what each pattern points at.',
        head: ['Pattern in the result', 'Likely cause', 'Correction'],
        rows: [
          [
            'Comfortable accuracy, low attempt count',
            'Reading every option before committing on questions you already know.',
            'Commit faster on the recall questions to buy minutes for the arithmetic.',
          ],
          [
            'Arithmetic accurate but slow',
            'Working long-form where a fraction equivalent would settle it.',
            'Daily calculation drill; the method is not the bottleneck.',
          ],
          [
            'General awareness below half',
            'A coverage gap, since these are single-fact questions.',
            'Pair-format static sheet, revised in short daily sessions.',
          ],
          [
            'English weak on error detection',
            'Grammar known descriptively rather than applied.',
            'Work rules one at a time through fifty questions each.',
          ],
          [
            'Typing practice not happening',
            'It is not on the same schedule as the study plan.',
            'Put it in the same calendar as the mocks, every day, from now.',
          ],
        ],
      },
    ],
  },

  'ssc-mts': {
    'study-material': [
      {
        type: 'table',
        caption: 'A short reading list for a paper with a genuinely finite syllabus.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Numerical and mathematical ability',
            'School arithmetic to completion: number system, percentage, ratio, average, interest, time and work, and basic mensuration.',
            'Algebra and trigonometry at CGL depth. The MTS level does not reach it.',
          ],
          [
            'Reasoning and problem solving',
            'A question bank across the standard families, drilled in short daily sets.',
            'Complex puzzle sets written for banking papers.',
          ],
          [
            'General awareness',
            'Static pairs, everyday science, basic polity and geography, and a light monthly current-affairs consolidation.',
            'Detailed subject reading. Breadth beats depth decisively in this section.',
          ],
          [
            'English language',
            'Basic grammar, common vocabulary and short comprehension practice.',
            'Advanced usage or literature-level vocabulary.',
          ],
          [
            'Physical requirements',
            'Where you are applying to a Havaldar post, the physical standards and tests set out in the notification, trained for from the first month.',
            'Assuming the written stage is the whole recruitment. For those posts it is not.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What to read off an MTS practice result.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Session timing felt tight',
            'The sessions are separately timed in this recruitment, so minutes cannot be borrowed.',
            'Practise each session to its own clock rather than sitting the paper as one block.',
          ],
          [
            'Accuracy fine, several questions unread',
            'Pacing rather than knowledge.',
            'Work in two passes: everything immediate first, then the rest.',
          ],
          [
            'General awareness inconsistent between mocks',
            'Recall decaying between sessions, which is normal for static material.',
            'Short daily revision rather than long weekly sessions.',
          ],
          [
            'Arithmetic errors on easy questions',
            'Calculation slips, not concepts.',
            'Redo them writing every step; the slip rate falls quickly.',
          ],
          [
            'Physical preparation paused during mock season',
            'The written stage has crowded out the standard.',
            'Keep training on a fixed weekly schedule regardless of the study calendar.',
          ],
        ],
      },
    ],
  },

  'ssc-gd': {
    'study-material': [
      {
        type: 'table',
        caption: 'What to read, at the level a constable recruitment paper sets.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Elementary mathematics',
            'Arithmetic to completion at school level, practised for speed rather than for depth.',
            'Algebra, geometry and trigonometry at competitive-mathematics depth.',
          ],
          [
            'General intelligence and reasoning',
            'A mixed question bank, short daily sets, including non-verbal families.',
            'Theory of any kind.',
          ],
          [
            'General knowledge and general awareness',
            'Static pairs, everyday science, basic polity, geography and history, plus current affairs kept light and consolidated monthly.',
            'Subject depth. Every question here is a single retrievable fact.',
          ],
          [
            'Language paper',
            'Basic grammar and comprehension in the language you will sit — the paper is offered in more than one, and reading speed in your chosen one matters.',
            'Preparing in one language and sitting in another out of habit.',
          ],
          [
            'Physical standards and medical',
            'The standards and events in the notification, trained for from the first month, with margin above the prescribed figure.',
            'Treating the written stage as the recruitment. It is the first filter, not the outcome.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a GD constable practice result.',
        head: ['What you see', 'What it means', 'What to do'],
        rows: [
          [
            'Score fine, time left over',
            'The paper is short and the questions are quick; the binding constraint is accuracy rather than pace.',
            'Use the spare minutes to recheck rather than to attempt blind guesses under a deduction.',
          ],
          [
            'General knowledge dragging the total',
            'Coverage, not technique.',
            'Daily short revision of a pair-format sheet, sustained over months.',
          ],
          [
            'Reasoning inconsistent between attempts',
            'Some families drilled, others not met.',
            'List the families and work each to fluency in turn.',
          ],
          [
            'Language section weaker than expected',
            'Prepared in a different language from the one being sat.',
            'Settle the medium now and practise every mock in it.',
          ],
          [
            'Physical training slipping',
            'The most common single reason candidates lose this recruitment after clearing the paper.',
            'Fixed weekly schedule, trained with margin, never paused for mock season.',
          ],
        ],
      },
    ],
  },

  'ssc-cpo': {
    'study-material': [
      {
        type: 'table',
        caption: 'A reading list for a two-paper recruitment with an English paper of its own.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Paper 1 — quantitative aptitude',
            'Arithmetic to completion, plus geometry, mensuration and basic algebra and trigonometry.',
            'Material pitched at engineering entrance level.',
          ],
          [
            'Paper 1 — general intelligence',
            'A mixed question bank including non-verbal families, drilled daily.',
            'Extended theory.',
          ],
          [
            'Paper 1 — general awareness',
            'Static pairs, polity, history, geography, economy and everyday science, with monthly current affairs.',
            'Depth in one subject at the expense of coverage.',
          ],
          [
            'Paper 2 — English language and comprehension',
            'A full grammar reference worked through, extended reading for comprehension speed, and sustained vocabulary building. This is a separate English paper and it needs separate preparation.',
            'Treating Paper 2 as the Paper 1 English section with more questions. The depth is different.',
          ],
          [
            'Physical standards and medical',
            'The events, standards and medical requirements in the notification, prepared for from the start.',
            'Deferring physical preparation until the written result.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a CPO result across both papers.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Paper 1 strong, Paper 2 weak',
            'The dedicated English paper has been prepared as an afterthought.',
            'Give Paper 2 its own study slot and its own weekly mock. It is a full paper.',
          ],
          [
            'Comprehension accurate but slow',
            'Reading speed rather than understanding.',
            'A page of dense prose daily, read at pace, over months.',
          ],
          [
            'Quantitative section eating the clock',
            'Calculation reconstruction.',
            'Daily arithmetic drill, and geometry practised until configurations are recognised on sight.',
          ],
          [
            'General awareness inconsistent',
            'Static material revised occasionally rather than daily.',
            'Short daily revision of a compact sheet.',
          ],
          [
            'Physical events untested',
            'No rehearsal of the actual events under timing.',
            'Practise the events themselves, not general fitness, and train above the prescribed standard.',
          ],
        ],
      },
    ],
  },

  'ssc-je': {
    'study-material': [
      {
        type: 'table',
        caption: 'Splitting the reading between the general half and the technical half.',
        head: ['Half', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General intelligence and reasoning',
            'A question bank drilled in short sets. It is a small, reliable block of marks.',
            'Extended theory or banking-level puzzle material.',
          ],
          [
            'General awareness',
            'Static pairs, everyday science, polity and geography, plus monthly current affairs.',
            'Subject depth, which does not pay in a single-fact section.',
          ],
          [
            'Core engineering discipline',
            'Your own degree or diploma texts, but only the chapters your weight table ranks highest — built by tagging past papers to chapters and counting.',
            'Reading a degree textbook from chapter one. Four weeks later the introductory chapters are revised and the weighted ones are not.',
          ],
          [
            'Standards, codes and standard values',
            'Where your discipline uses them. Memorable, examinable and routinely dismissed as reference material.',
            'Assuming they will not be asked because they are not concepts.',
          ],
          [
            'The formula sheet',
            'One page per subject, written by hand and rewritten from memory weekly. This is the central artefact of technical preparation.',
            'Building it in the final month, when it is worth least.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Diagnosing a JE result across the general and technical papers.',
        head: ['What you see', 'What it usually is', 'What to change'],
        rows: [
          [
            'Technical section slow but accurate',
            'Formulas being reconstructed rather than recalled.',
            'Write the formula sheet from memory daily. Understanding is not the bottleneck.',
          ],
          [
            'Technical section fast but inaccurate',
            'Unit and sign slips rather than concept gaps.',
            'Redo the wrong questions writing units at every line.',
          ],
          [
            'Marks concentrated in two or three chapters',
            'Coverage narrower than the paper.',
            'Work down the chapter-weight table instead of deepening strong chapters.',
          ],
          [
            'General sections neglected',
            'The common shape for an engineering graduate.',
            'Daily current affairs and a compact static sheet; these are cheap marks being conceded.',
          ],
          [
            'Paper 2 practice not happening',
            'Its format has not been checked in the current notification.',
            'Confirm the Paper 2 format for your cycle before building practice around an assumed one.',
          ],
        ],
      },
    ],
  },
}

export default SSC_DEPTH
