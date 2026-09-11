/**
 * Additional blocks for the railway recruitment records.
 *
 * One reading table for `study-material` and one diagnostic table for
 * `mock-tests`, per exam. See src/data/exams/ssc-depth.js for why these two
 * resource pages needed them.
 *
 * Two facts shape everything below and are specific to this family. Railway
 * computer-based tests are conducted across many shifts and scores are
 * normalised between them, so a raw practice mark cannot be read as a position
 * relative to other candidates. And most of these recruitments carry a stage
 * after the written papers — a second CBT, a skill or aptitude test, a physical
 * efficiency test — that takes months to prepare for and cannot be arranged
 * after a result.
 *
 * No vacancy count, cutoff, fee, date or normalised score appears here.
 */

const RAILWAYS_DEPTH = {
  'rrb-ntpc': {
    'study-material': [
      {
        type: 'table',
        caption: 'What to read for each section, and where the marks per hour actually are.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General awareness',
            'The largest and fastest-scoring block: static pairs, Indian history and the national movement, geography, polity, economy, general science and current affairs, plus material on Indian railways itself.',
            'Depth in any single subject. The questions are single-fact and the section is very broad.',
          ],
          [
            'General science',
            'Class 10 level physics, chemistry and biology, covered completely rather than deeply. This is a defined, finishable syllabus.',
            'Senior-secondary or entrance-level science, which is above the level asked.',
          ],
          [
            'Mathematics',
            'Arithmetic to completion, plus basic algebra, geometry, mensuration and elementary statistics.',
            'Advanced mathematics. Time here has a poor return relative to general awareness.',
          ],
          [
            'General intelligence and reasoning',
            'A question bank across the standard families including non-verbal, drilled in short daily sets.',
            'Extended theory. The forms are mechanical once recognised.',
          ],
          [
            'The stage after the papers',
            'The typing skill test or the computer-based aptitude test, depending on the post, prepared for on a daily schedule.',
            'Deferring it until a written result. A prescribed typing speed takes months.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading an NTPC result. Compare yourself against your own previous attempts, not against a target mark.',
        head: ['What you see', 'What it usually means', 'What to change'],
        rows: [
          [
            'General awareness dragging the total',
            'Coverage. This is the largest block and the cheapest to improve.',
            'A pair-format static sheet revised daily, plus a monthly current-affairs consolidation.',
          ],
          [
            'Too many minutes in mathematics',
            'Over-investment in the section with the worst marks-per-minute return.',
            'Cap the time you allow mathematics and spend the difference on awareness.',
          ],
          [
            'Science questions missed on basics',
            'Class 10 science not covered completely.',
            'Finish it chapter by chapter. It is finite and it recurs every cycle.',
          ],
          [
            'Wrong answers well above blanks',
            'Guessing blind in a paper that deducts.',
            'Guess only between two options you can defend; leave the rest.',
          ],
          [
            'Skill or aptitude test unpractised',
            'The stage that eliminates candidates who cleared the papers.',
            'Put it on the same weekly calendar as the mocks, starting now.',
          ],
        ],
      },
    ],
  },

  'rrb-group-d': {
    'study-material': [
      {
        type: 'table',
        caption: 'A reading list for a genuinely finite syllabus.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General science',
            'Class 10 level physics, chemistry and life sciences, covered completely. This carries real weight and it is a closed syllabus.',
            'Anything above class 10 level.',
          ],
          [
            'Mathematics',
            'School arithmetic to completion, with basic mensuration, geometry and elementary statistics.',
            'Algebra and trigonometry at competitive-mathematics depth.',
          ],
          [
            'General intelligence and reasoning',
            'A mixed question bank, short daily sets, including analogies, classification, series and non-verbal families.',
            'Theory of any kind.',
          ],
          [
            'General awareness and current affairs',
            'Recent current affairs, basic polity, geography, economy and general science in the news, plus material on Indian railways.',
            'Deep static general knowledge, which returns less here than current material.',
          ],
          [
            'Physical efficiency test',
            'The events and standards prescribed in the notification, trained for from the first month with margin above the requirement.',
            'Treating the written stage as the recruitment.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a Group D practice result points at.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Time left over, score modest',
            'The clock is forgiving; accuracy under the deduction is the binding constraint.',
            'Use spare minutes to recheck rather than to attempt blind guesses.',
          ],
          [
            'Science below half',
            'The class 10 syllabus has been sampled rather than finished.',
            'Work through it chapter by chapter and revisit each chapter twice.',
          ],
          [
            'Arithmetic slips on simple questions',
            'Calculation, not method.',
            'Daily drill on paper; the slip rate falls within weeks.',
          ],
          [
            'Reasoning inconsistent between mocks',
            'Some families drilled and others never met.',
            'List the families and work each to fluency in turn.',
          ],
          [
            'Physical training off the calendar',
            'The most common way candidates lose this recruitment after clearing the paper.',
            'Fixed weekly schedule, trained above the standard, never paused for mock season.',
          ],
        ],
      },
    ],
  },

  'rrb-alp': {
    'study-material': [
      {
        type: 'table',
        caption: 'Splitting the reading between the general papers and the trade paper.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'CBT 1 — general sections',
            'Mathematics, reasoning, general science and general awareness at the level the first stage sets — broad and quick.',
            'Deep preparation for a stage that screens rather than decides.',
          ],
          [
            'CBT 2 Part A',
            'The same subjects at greater depth, since this is the part that carries the selection weight.',
            'Assuming CBT 1 preparation is sufficient. The depth is different.',
          ],
          [
            'CBT 2 Part B — trade syllabus',
            'The syllabus for your own trade or engineering discipline, prepared from your diploma or trade material and the prescribed topic list.',
            'Preparing a trade other than the one you are eligible in. Part B is qualifying and specific.',
          ],
          [
            'Computer-based aptitude test',
            'The test format itself, practised deliberately — it is a distinct stage for assistant loco pilot selection and it is unlike the knowledge papers.',
            'Leaving it until after CBT 2, which is the usual and costly order.',
          ],
          [
            'Formula and procedure sheet',
            'One page per technical subject, written by hand and rewritten from memory.',
            'Rereading trade textbooks instead of building retrieval.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Where practice effort actually pays across the ALP stages.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'CBT 1 comfortable, CBT 2 untested',
            'Preparation weighted to the screening stage.',
            'Move practice to CBT 2 depth once CBT 1 is reliably clear.',
          ],
          [
            'Part B practice not started',
            'It is qualifying, so failing it ends the attempt regardless of Part A.',
            'Work the trade syllabus in parallel from the start, not after CBT 2.',
          ],
          [
            'Technical questions slow',
            'Formulas and procedures being reconstructed.',
            'Write the sheet from memory weekly until recall is immediate.',
          ],
          [
            'Aptitude test unfamiliar',
            'A distinct stage with its own format and no overlap with the knowledge papers.',
            'Practise the actual test format on a schedule.',
          ],
          [
            'Scores swinging between mocks',
            'Normal in a family with shift-based papers of varying difficulty.',
            'Track the trend across two months rather than reacting to any single result.',
          ],
        ],
      },
    ],
  },

  'rrb-je': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a recruitment decided in its technical stage.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'CBT 1 general sections',
            'Mathematics, reasoning, general science and general awareness at screening depth.',
            'Heavy investment in a stage whose marks screen rather than decide.',
          ],
          [
            'CBT 2 general awareness and physics and chemistry',
            'General awareness including railway material, plus physics and chemistry at the level the second stage sets.',
            'Assuming these repeat CBT 1 content unchanged.',
          ],
          [
            'CBT 2 technical abilities',
            'Your discipline’s core subjects, revised from a chapter-weight table built by tagging past papers.',
            'Reading a degree or diploma textbook from chapter one.',
          ],
          [
            'Basics of computers and applications',
            'A small, closed and highly examinable block: hardware, software, networking, internet and security terms.',
            'Any depth beyond terminology and function.',
          ],
          [
            'Environment and pollution control',
            'The prescribed topics, which are finite and regularly examined.',
            'Skipping it as minor. It is cheap and repeatable marks.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Getting a real signal from JE practice.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Technical section slow but accurate',
            'Formula reconstruction rather than recall.',
            'Rewrite the formula sheet from memory weekly.',
          ],
          [
            'Technical marks concentrated in a few chapters',
            'Coverage narrower than the paper.',
            'Work down the chapter-weight table rather than deepening strong chapters.',
          ],
          [
            'Computer and environment blocks conceded',
            'Treated as minor and never studied.',
            'A weekend each. They are among the cheapest marks in the paper.',
          ],
          [
            'CBT 1 mocks used as the main measurement',
            'Measuring the screening stage instead of the deciding one.',
            'Use CBT 1 mocks sparingly and practise CBT 2 depth regularly.',
          ],
          [
            'Unit and sign errors recurring',
            'A discipline problem rather than a knowledge one.',
            'Redo wrong questions writing units at every line.',
          ],
        ],
      },
    ],
  },

  rpf: {
    'study-material': [
      {
        type: 'table',
        caption: 'A reading list for a short paper with a demanding physical stage.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General awareness',
            'Static pairs, Indian history, geography, polity, economy, general science and current affairs, plus material on Indian railways.',
            'Depth in one subject. The section is broad and single-fact.',
          ],
          [
            'Arithmetic',
            'School arithmetic to completion, practised for speed.',
            'Advanced mathematics of any kind.',
          ],
          [
            'General intelligence and reasoning',
            'A mixed question bank including non-verbal families, in short daily sets.',
            'Theory.',
          ],
          [
            'Physical efficiency and measurement standards',
            'The events, timings and measurement standards in the notification, trained for from the first month.',
            'Assuming general fitness is preparation. The events are specific and are tested as events.',
          ],
          [
            'Documents for verification',
            'The certificates the notification requires, checked for validity and for the reckoning date, early.',
            'Discovering a document problem after clearing the stages.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What an RPF practice result is worth reading for.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Score fine, awareness weak',
            'The largest block in the paper is under-prepared.',
            'Daily short revision of a compact static sheet.',
          ],
          [
            'Arithmetic accurate but slow',
            'Calculation speed.',
            'Fifteen minutes of drill a day, on paper.',
          ],
          [
            'Reasoning inconsistent',
            'Families met unevenly.',
            'Work one family at a time to fluency.',
          ],
          [
            'Guessing widely under the deduction',
            'No attempt policy decided in advance.',
            'Fix a rule — guess only between two defensible options — and rehearse it in mocks.',
          ],
          [
            'Physical events untested under timing',
            'General fitness mistaken for event readiness.',
            'Rehearse the actual events to the prescribed timings, weekly.',
          ],
        ],
      },
    ],
  },
}

export default RAILWAYS_DEPTH
