/**
 * Additional blocks for the banking and insurance exam records.
 *
 * One table for the `study-material` page — a reading list scannable by
 * section — and one for `mock-tests` — a diagnostic a candidate can look their
 * own result up in. See src/data/exams/ssc-depth.js for why these two resource
 * pages needed them.
 *
 * The banking family is defined by sectional timing, so almost every entry
 * below turns on the same structural fact: minutes cannot be moved between
 * sections, and a candidate has to be independently competent in each rather
 * than strong overall.
 *
 * No cutoff, vacancy count, fee, date or mark total for a named cycle appears
 * here; the notification is the authority on all of them.
 */

const BANKING_DEPTH = {
  'ibps-po': {
    'study-material': [
      {
        type: 'table',
        caption: 'What to read for each section, and the depth that does not pay.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Reasoning ability',
            'Puzzle and seating-arrangement sets above all else — they carry the largest block of marks — plus syllogism, inequality, coding and data sufficiency.',
            'Non-verbal reasoning, which is weighted in SSC and railway papers and largely absent here.',
          ],
          [
            'Quantitative aptitude',
            'Data interpretation sets in volume, arithmetic to completion, and quadratic and number series for the quick marks.',
            'Advanced algebra and geometry. The paper rewards arithmetic speed and DI handling, not mathematical depth.',
          ],
          [
            'English language',
            'A grammar reference worked through once, then reading comprehension, cloze and para jumbles practised to time. Vocabulary from steady reading.',
            'Word lists in isolation. The paper tests usage in context.',
          ],
          [
            'General and banking awareness',
            'Current affairs of the last several months, banking and financial terms, regulatory bodies and their functions, and government schemes with a financial component.',
            'Static general knowledge at SSC breadth. This section is current and financial rather than encyclopedic.',
          ],
          [
            'Descriptive paper',
            'Letter and essay practice written to time, on topics from banking, economy and social policy.',
            'Collecting templates. Markers read for structure and argument, and templates produce neither.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a sectionally timed result. Score the sections separately and never average them.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'One section far below the others',
            'In a sectionally timed paper this caps you regardless of the total.',
            'Study time follows the weakest section until it is no longer the weakest.',
          ],
          [
            'Reasoning attempts high, sets completed low',
            'Half-worked puzzles, which yield nothing.',
            'Set an abandonment limit per set and obey it; completing three sets beats starting six.',
          ],
          [
            'Quantitative accurate but unfinished',
            'Computing exactly where approximation would settle the question.',
            'Practise deciding what precision a question needs before calculating.',
          ],
          [
            'English fine on grammar, weak on comprehension',
            'Reading speed rather than rules.',
            'A page of dense prose daily, read at pace, over months.',
          ],
          [
            'Awareness section inconsistent',
            'Current affairs read rather than retrieved.',
            'Monthly consolidation plus weekly self-quizzing, organised by category.',
          ],
        ],
      },
    ],
  },

  'ibps-clerk': {
    'study-material': [
      {
        type: 'table',
        caption: 'A reading list pitched at a clerical paper, which is broad and quick rather than deep.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Reasoning ability',
            'Puzzles and seating arrangement at moderate difficulty, inequality, syllogism, coding, alphanumeric series and order-and-ranking.',
            'The hardest officer-level puzzle sets. The clerical level is lower and speed matters more than difficulty tolerance.',
          ],
          [
            'Numerical ability',
            'Simplification and approximation drilled hard, arithmetic to completion, and simpler data interpretation.',
            'Complex multi-set DI written for officer papers.',
          ],
          [
            'English language',
            'Grammar applied through error detection and sentence rearrangement, plus comprehension practised to time.',
            'Advanced vocabulary lists.',
          ],
          [
            'General and financial awareness',
            'Recent current affairs, banking terms, and the institutions a bank customer actually encounters.',
            'Deep economic theory, which is not what this section asks.',
          ],
          [
            'Regional language requirement',
            'Where the notification requires proficiency in a state language, confirm what form the test takes and prepare it deliberately.',
            'Assuming it is a formality. It is an eligibility condition.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a clerk-level mock result usually points at.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'High accuracy, low attempts',
            'Working carefully in a paper that rewards volume at moderate difficulty.',
            'Practise simplification and approximation until they are reflexive, then raise the attempt target.',
          ],
          [
            'Numerical section unfinished',
            'Calculation speed.',
            'Fifteen minutes of daily drill; this is the single biggest lever in a clerical paper.',
          ],
          [
            'Reasoning fine but slow to start each set',
            'Time spent deciding which set to attempt.',
            'Scan all sets in the first minute and rank them before solving anything.',
          ],
          [
            'English inconsistent between mocks',
            'Rules known but not automatic.',
            'Work one grammar rule at a time through a large question set.',
          ],
          [
            'Strong prelims scores, weak mains practice',
            'Prelims marks screen; mains decides.',
            'Add mains-level sets to the routine well before the prelims result.',
          ],
        ],
      },
    ],
  },

  'sbi-po': {
    'study-material': [
      {
        type: 'table',
        caption: 'What to read, given a paper that rewards handling unfamiliar formats.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Reasoning',
            'Puzzles and arrangements in variety rather than in volume of one type, plus critical reasoning and data sufficiency.',
            'Drilling a single puzzle family. This paper varies its formats deliberately.',
          ],
          [
            'Quantitative aptitude',
            'Data interpretation in unfamiliar presentations — caselets, mixed graphs, missing-data sets — plus arithmetic to completion.',
            'Standard DI sets alone, which do not rehearse the adaptation this paper asks for.',
          ],
          [
            'English language',
            'Long and argumentative reading passages, plus the newer question forms this paper favours over straightforward grammar items.',
            'Only rule-based grammar practice. The English here leans towards comprehension and reasoning about text.',
          ],
          [
            'Data analysis and interpretation, at mains level',
            'Extended, multi-part sets worked to time, since the mains treats this as a section of its own.',
            'Assuming prelims-level DI transfers directly.',
          ],
          [
            'Descriptive and group exercise',
            'Timed writing on economy, banking and social policy, and forming actual views on current issues you can defend aloud.',
            'Memorised content for a discussion, which is visible immediately.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading an SBI PO result, where format adaptability matters more than in most papers.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Score falls sharply on an unfamiliar set type',
            'Preparation built on one format rather than on the underlying method.',
            'Deliberately practise formats you have not seen; that adaptability is what the paper selects for.',
          ],
          [
            'A section left incomplete despite spare time elsewhere',
            'Sectional timing — the spare minutes were not transferable.',
            'Practise every section to its own clock, always.',
          ],
          [
            'Accuracy dropping in the final minutes of a section',
            'Pacing that back-loads the difficult questions.',
            'Two passes within each section: immediate answers first, then the rest.',
          ],
          [
            'Strong prelims, untested mains skills',
            'Prelims marks screen and do not carry to the merit list.',
            'Begin mains-level DI and descriptive practice from the start of preparation.',
          ],
          [
            'No preparation for the discussion stage',
            'It carries marks and is usually left until after the mains result.',
            'Read a serious news source daily and form defensible positions as you go.',
          ],
        ],
      },
    ],
  },

  'sbi-clerk': {
    'study-material': [
      {
        type: 'table',
        caption: 'A reading list for a clerical paper that rewards speed at moderate difficulty.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Reasoning ability',
            'Moderate puzzles and arrangements, inequality, syllogism, coding and series, drilled for speed.',
            'Officer-level puzzle sets, which train difficulty tolerance you will not need.',
          ],
          [
            'Numerical ability',
            'Simplification, approximation, arithmetic and simple DI, all practised against a clock.',
            'Advanced mathematics of any kind.',
          ],
          [
            'English language',
            'Grammar applied through practice, plus comprehension at moderate length.',
            'Literary or advanced usage material.',
          ],
          [
            'General and financial awareness',
            'Recent current affairs, banking abbreviations and terms, and the main financial institutions and their roles.',
            'Static general knowledge at recruitment-exam breadth.',
          ],
          [
            'Language proficiency requirement',
            'Where the notification requires knowledge of a specified local language, confirm the form of the test and prepare for it.',
            'Treating it as a formality when it is an eligibility condition.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Diagnosing a clerical mock result.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Attempts well below the section total',
            'The paper rewards volume; carefulness is costing more than it saves.',
            'Drill simplification and approximation until they need no working.',
          ],
          [
            'Accuracy falling as attempts rise',
            'Attempt target raised ahead of the underlying speed.',
            'Raise speed first, then attempts. The order matters.',
          ],
          [
            'Reasoning strong, numerical weak',
            'The usual shape, and the one that most limits a clerical score.',
            'Daily calculation drill, on paper, without a calculator.',
          ],
          [
            'Awareness section variable',
            'Current affairs read once and never retrieved.',
            'Weekly self-quizzing on a monthly consolidation.',
          ],
          [
            'Mains practice not started',
            'Prelims screens; mains decides the result.',
            'Add mains-level sets before the prelims result rather than after it.',
          ],
        ],
      },
    ],
  },

  'ibps-rrb': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for the regional rural bank format, which differs from the main banking papers.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Reasoning',
            'Puzzles and arrangements, syllogism, inequality and coding, practised for speed — the prelims here is reasoning and numerical only.',
            'Assuming the section mix matches IBPS PO. It does not.',
          ],
          [
            'Quantitative aptitude',
            'Data interpretation and arithmetic drilled hard, since the prelims rests on these two sections alone.',
            'Spreading effort across sections that this stage does not examine.',
          ],
          [
            'General awareness, at mains level',
            'Current affairs, banking and financial awareness, and rural and agricultural banking specifically — the last is what distinguishes this family.',
            'Ignoring the rural and agricultural credit material, which is examined here and nowhere else in banking.',
          ],
          [
            'English or Hindi language',
            'Whichever language paper you opt for, prepared deliberately rather than by default. The choice is offered and it is consequential.',
            'Preparing in one language and sitting in the other.',
          ],
          [
            'Computer knowledge',
            'Basic hardware, software, networking, internet and security terms, which is a small and highly learnable block.',
            'Any depth beyond terminology and function.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What an RRB-format result shows.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Prelims score fine, mains far behind',
            'The prelims tests two sections; the mains tests five.',
            'Build awareness, English or Hindi, and computer knowledge from the start rather than after the prelims.',
          ],
          [
            'Rural and agricultural questions missed',
            'The material that distinguishes this family has been skipped.',
            'A dedicated file on rural credit, agricultural finance and the institutions involved.',
          ],
          [
            'Language section weaker than expected',
            'The opted paper was chosen by habit rather than by measurement.',
            'Sit one past section in each language before opting.',
          ],
          [
            'Reasoning slower than in other banking mocks',
            'Different set styles at this level.',
            'Practise on this family’s own past material rather than on PO-level sets.',
          ],
          [
            'Officer Scale I candidates ignoring the interview',
            'It is a later stage that carries marks.',
            'Form views on rural banking and the local economy while you prepare, not afterwards.',
          ],
        ],
      },
    ],
  },

  'rbi-grade-b': {
    'study-material': [
      {
        type: 'table',
        caption: 'A reading list for a paper that is closer to an economics examination than to a banking aptitude test.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Phase 1 — general awareness',
            'Economic and financial awareness in depth, current affairs of the last several months, and the regulatory landscape.',
            'Static general knowledge. This paper’s awareness section is economic and current, not encyclopedic.',
          ],
          [
            'Phase 1 — reasoning, quantitative and English',
            'Standard banking-level practice, maintained rather than built. These sections screen; they do not distinguish.',
            'Over-investing here at the expense of Phase 2 subjects.',
          ],
          [
            'Economic and social issues',
            'Growth and development, poverty and inequality, the structure of the Indian economy, sectors, social policy and the current economic debate.',
            'Reading a general studies economy chapter and stopping there. The depth required is considerably greater.',
          ],
          [
            'Finance and management',
            'The financial system, regulators, markets and instruments, risk, and the management and governance material the syllabus names.',
            'Only market news, which does not cover the conceptual half.',
          ],
          [
            'Primary sources',
            'The central bank’s own publications — monetary policy statements, annual reports and bulletins — and the government’s budget and economic survey, read for direction and argument.',
            'Memorising figures from them. Learn the structure of the argument and the instruments; the numbers move.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a two-phase examination where the phases are different subjects.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Phase 1 comfortable, Phase 2 untested',
            'The common shape, and the dangerous one — Phase 2 is where the recruitment is decided.',
            'Write timed answers on economic and financial topics from the first month.',
          ],
          [
            'Descriptive answers running over time',
            'Writing speed and planning rather than knowledge.',
            'Plan for five minutes, write to a fixed structure, and time every practice answer.',
          ],
          [
            'Awareness section weak on economic items',
            'Current affairs read generally rather than economically.',
            'Follow the policy statements and the economic press specifically, and keep notes by theme.',
          ],
          [
            'Strong content, unconvincing arguments',
            'Facts collected without positions formed.',
            'For each major issue, write down the case, the counter-case and where you land.',
          ],
          [
            'Interview stage unprepared',
            'It carries marks and draws on your own background and the current economic debate.',
            'Be able to defend your graduation subject, your work, and a view on current policy.',
          ],
        ],
      },
    ],
  },
}

export default BANKING_DEPTH
