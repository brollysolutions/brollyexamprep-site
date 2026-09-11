/**
 * Additional blocks for the entrance-exam records.
 *
 * One reading table for `study-material` and one diagnostic table for
 * `mock-tests`, per exam, across the engineering, medical, management, law,
 * university, research and international families. See
 * src/data/exams/ssc-depth.js for why these two resource pages needed them.
 *
 * These families divide by what the paper rewards, and the tables are written
 * to that division: engineering and medical papers reward fluency on standard
 * problems, management papers reward set selection, law papers reward applying
 * a stated principle exactly, and the international tests divide again between
 * timed reasoning and a described language standard.
 *
 * No cutoff, percentile, fee, date or seat figure for a named cycle appears
 * here. Format, marking and eligibility are set by each examination's own
 * current information bulletin, which the pages point at.
 */

const ENTRANCE_DEPTH = {
  /* ── Engineering ───────────────────────────────────────────── */
  'jee-main': {
    'study-material': [
      {
        type: 'table',
        caption: 'What to read for each subject, and what wastes months.',
        head: ['Subject', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Physics',
            'The senior-secondary syllabus with mechanics secured first, since everything else builds on it. Problems in volume, and a formula sheet rewritten from memory.',
            'Olympiad-level problem books. This paper rewards speed on standard problems, not ingenuity on hard ones.',
          ],
          [
            'Chemistry',
            'Physical chemistry through numerical practice, inorganic through structured revision of periodic trends and compounds, organic through mechanism and named reactions.',
            'Treating inorganic chemistry as unlearnable. It is the most reliably scoreable third of the paper.',
          ],
          [
            'Mathematics',
            'Calculus, algebra, coordinate geometry and vectors worked to fluency, with the chapters your weight table ranks highest done first.',
            'Reading theory. Mathematics here is entirely a solving subject.',
          ],
          [
            'The weight table',
            'Built by tagging several years of past papers to chapters and counting, before opening any textbook.',
            'Revising in the order your school taught the subjects, which is not the order the paper weights them.',
          ],
          [
            'The information bulletin',
            'The current one, for section structure, optional questions, marking and the number of sessions permitted — all of which have changed across recent cycles.',
            'Preparing to a previous year’s structure.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a JEE Main result. Error type matters far more than error count.',
        head: ['What you see', 'What it usually means', 'What to change'],
        rows: [
          [
            'Time disappearing in one subject',
            'Formulas and standard results being reconstructed rather than recalled.',
            'Write that subject’s formula sheet from memory daily until recall is immediate.',
          ],
          [
            'Correct method, wrong answer',
            'Unit slips, sign errors and misread data rather than concept gaps.',
            'Redo the wrong questions writing every step and unit; the rate falls quickly.',
          ],
          [
            'Marks concentrated in a few chapters',
            'Coverage narrower than the paper.',
            'Work down the chapter-weight table instead of deepening strong chapters.',
          ],
          [
            'Questions unread at the end of a section',
            'Pacing, and the cheapest problem on this list to fix.',
            'Two passes: everything immediate first, then the rest.',
          ],
          [
            'Score dropping between sessions',
            'New material started between attempts.',
            'Between sessions, revise and solve rather than opening anything new.',
          ],
        ],
      },
    ],
  },

  'jee-advanced': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper that changes its own format deliberately.',
        head: ['Subject', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Physics',
            'Concepts deep enough to handle a problem stated in an unfamiliar way, worked through hard multi-step problems rather than through volume.',
            'Formula-substitution practice. This paper is built to defeat it.',
          ],
          [
            'Chemistry',
            'Physical chemistry with real numerical depth, organic mechanisms understood rather than memorised, and inorganic secured as the reliable third.',
            'Rote reaction lists without mechanism, which do not transfer to unfamiliar questions.',
          ],
          [
            'Mathematics',
            'Problems that require constructing an approach rather than recognising one, worked slowly and then re-solved after a month.',
            'Speed drilling alone, which prepares for a different examination.',
          ],
          [
            'Format variety',
            'Past papers across several years, deliberately including the question types you find awkward — multiple-correct, integer, matching and paragraph-based.',
            'Practising only the formats you are comfortable with.',
          ],
          [
            'The re-solve habit',
            'Hard problems attempted again a month later, from scratch, which is the only reliable test of whether the approach was learned or the answer remembered.',
            'Marking a problem as done because the solution was understood.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What an Advanced-level result actually measures.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Score falls on an unfamiliar format',
            'Preparation built on recognition rather than construction.',
            'Deliberately practise the formats you avoid; adaptability is what this paper selects for.',
          ],
          [
            'Partial-marking questions lost',
            'Attempt policy not adapted to the marking rule.',
            'Read the marking scheme for each question type and decide your rule before the paper.',
          ],
          [
            'Long problems abandoned late',
            'Time sunk before the decision to leave.',
            'Set a checkpoint: if there is no path within a fixed time, move.',
          ],
          [
            'Score lower on harder mocks',
            'Not a signal. Difficulty varies and the comparison is only valid within a series.',
            'Track the trend across a series rather than reacting to a single result.',
          ],
          [
            'Solutions understood but not reproducible',
            'Reading a solution is not learning an approach.',
            'Re-solve the same problems a month later without notes.',
          ],
        ],
      },
    ],
  },

  bitsat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper with sections most candidates do not prepare.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Physics, chemistry, mathematics or biology',
            'The senior-secondary syllabus at speed. This paper rewards rapid, accurate handling of standard questions more than depth.',
            'Advanced problem books written for a harder paper.',
          ],
          [
            'English proficiency',
            'Grammar, vocabulary and comprehension practised deliberately — a section that carries marks and is routinely ignored.',
            'Assuming general reading covers it.',
          ],
          [
            'Logical reasoning',
            'Verbal and non-verbal reasoning drilled in short sets. Closed, mechanical and quick to improve.',
            'Skipping it because it is not a school subject.',
          ],
          [
            'Speed practice',
            'Timed sets against a stopwatch rather than untimed study, since the constraint here is pace.',
            'Studying syllabus depth you already have.',
          ],
          [
            'The computer-based format',
            'Practice on a screen, in the paper’s own interface style where available.',
            'Practising only on paper for a computer-based test.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a BITSAT practice result shows.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Strong on JEE mocks, weaker here',
            'Different paper: more questions, less time, extra sections.',
            'Do not diagnose this paper with another paper’s mocks.',
          ],
          [
            'English and reasoning conceded',
            'Sections that carry marks and get no study.',
            'A short weekly slot each; both improve quickly.',
          ],
          [
            'Science accurate but slow',
            'Preparing depth where the paper wants pace.',
            'Timed sets against a stopwatch, not more theory.',
          ],
          [
            'Questions unattempted at the end',
            'Pacing under a tight clock.',
            'Fix a seconds-per-question target and practise at it.',
          ],
          [
            'Careless errors rising with speed',
            'Speed raised ahead of accuracy.',
            'Build accuracy at pace on smaller sets before extending the length.',
          ],
        ],
      },
    ],
  },

  viteee: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper that includes sections outside the science syllabus.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Physics, chemistry, and mathematics or biology',
            'The senior-secondary syllabus, worked for speed on standard questions.',
            'Advanced material. The level here is school syllabus applied quickly.',
          ],
          [
            'Aptitude',
            'Reasoning and quantitative aptitude practised in short sets — a distinct section that science preparation does not touch.',
            'Ignoring it because it is not a school subject.',
          ],
          [
            'English',
            'Comprehension and basic usage practised occasionally; a small block that costs little to secure.',
            'Extended English study, which the section does not warrant.',
          ],
          [
            'Biology stream candidates',
            'Biology prepared as the main section rather than as a substitute for mathematics, at the same depth a mathematics candidate gives mathematics.',
            'Treating the biology option as the lighter route.',
          ],
          [
            'The current bulletin',
            'Section structure and question counts, which differ from the other engineering entrances and have changed between cycles.',
            'Assuming the format matches another entrance test.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a VITEEE practice result should measure.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Science fine, aptitude weak',
            'The section outside the school syllabus has been skipped.',
            'Short reasoning and quantitative sets, twice a week.',
          ],
          [
            'Pace uncomfortable',
            'The paper is quick and rewards recognition.',
            'Timed sets at the paper’s own seconds-per-question.',
          ],
          [
            'English conceded',
            'A small block treated as negligible.',
            'A few practice sets; it is inexpensive to secure.',
          ],
          [
            'Biology stream underperforming',
            'Prepared as a fallback rather than as the main section.',
            'Give biology the depth and the practice a main section requires.',
          ],
          [
            'Format surprises in the mock',
            'Practising on another entrance test’s material.',
            'Use this paper’s own past material and current bulletin.',
          ],
        ],
      },
    ],
  },

  comedk: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for an evenly weighted three-subject paper.',
        head: ['Subject', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Physics',
            'The senior-secondary syllabus, complete rather than deep, since the weighting across subjects is even.',
            'Depth in one subject at the expense of another that carries the same weight.',
          ],
          [
            'Chemistry',
            'All three branches covered, with inorganic secured as the most reliably scoreable.',
            'Skipping inorganic as memorisation.',
          ],
          [
            'Mathematics',
            'Calculus, algebra and coordinate geometry worked to fluency, with practice in volume.',
            'Theory reading.',
          ],
          [
            'One source per subject',
            'Finished and revised rather than sampled. An evenly weighted paper punishes gaps more than it rewards depth.',
            'Collecting several sources per subject.',
          ],
          [
            'The computer-based format',
            'Practice on a screen, since the paper is delivered that way.',
            'Paper-only practice.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a COMEDK practice result.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'One subject far behind the others',
            'In an evenly weighted paper this costs a third of the available marks.',
            'Study time follows the weakest subject until it is no longer the weakest.',
          ],
          [
            'Comfortable on time',
            'The clock is more forgiving than in the tighter entrance papers.',
            'Use the margin to recheck rather than to guess.',
          ],
          [
            'Accuracy inconsistent between attempts',
            'Coverage gaps surfacing as different chapters appear.',
            'Finish each subject rather than rotating between three.',
          ],
          [
            'Careless errors',
            'Working quickly out of habit rather than necessity.',
            'Slow down where the clock permits it; the marks are the same.',
          ],
          [
            'On-screen practice absent',
            'Format unfamiliarity on the day.',
            'Practise on a computer from the start.',
          ],
        ],
      },
    ],
  },

  'ap-eapcet': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a state entrance where the subject weighting is uneven.',
        head: ['Subject', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Mathematics (engineering stream)',
            'The state board syllabus worked to fluency, at the pace the paper demands — this subject carries the largest share of the engineering paper.',
            'Preparing all three subjects equally when the paper does not weight them equally.',
          ],
          [
            'Physics and chemistry',
            'The state board syllabus covered completely; these carry less than mathematics but are cheaper marks per hour.',
            'Depth beyond the board syllabus.',
          ],
          [
            'The state board textbooks',
            'Used as the primary source, since the paper is set to that syllabus rather than to a national one.',
            'National entrance material as the main source, which is pitched differently.',
          ],
          [
            'Agriculture and pharmacy stream candidates',
            'Biology prepared as the main subject, at the depth the stream paper sets.',
            'Assuming the engineering stream’s subject balance applies.',
          ],
          [
            'Pace practice',
            'Timed mathematics sets specifically, because the paper’s length relative to its time is what catches candidates.',
            'Untimed problem solving.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What to track in an AP EAPCET practice result.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Mathematics unfinished',
            'The heaviest section is also the slowest.',
            'Timed mathematics sets at the paper’s own pace, several times a week.',
          ],
          [
            'Physics and chemistry conceded',
            'Effort concentrated in mathematics to the point of neglect.',
            'These are quicker marks per hour; secure them.',
          ],
          [
            'Questions outside your expectation',
            'Prepared from national material rather than the state syllabus.',
            'Move to the state board textbooks as the primary source.',
          ],
          [
            'Accuracy falling under time',
            'Pace built ahead of fluency.',
            'Build fluency on smaller sets, then extend.',
          ],
          [
            'Stream mismatch',
            'Practising the engineering paper for an agriculture or pharmacy admission.',
            'Practise your own stream’s paper structure.',
          ],
        ],
      },
    ],
  },

  'tg-eapcet': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a mathematics-heavy state entrance paper.',
        head: ['Subject', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Mathematics (engineering stream)',
            'The state board syllabus worked to fluency and to time, since it carries the largest share of the paper.',
            'An even split of study hours across three unevenly weighted subjects.',
          ],
          [
            'Physics and chemistry',
            'The state board syllabus covered completely, worked for recall speed.',
            'Depth beyond the board level.',
          ],
          [
            'State board textbooks',
            'The primary source, because the paper is set to that syllabus.',
            'National entrance material as the main text.',
          ],
          [
            'Agriculture and pharmacy stream candidates',
            'Biology as the main subject at full depth, with the stream’s own paper structure.',
            'Preparing to the engineering stream’s balance.',
          ],
          [
            'Timed sets',
            'Mathematics against a clock as the core practice, several times a week.',
            'Long untimed problem sessions.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a TG EAPCET practice result.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Mathematics section unfinished',
            'The section that carries most of the paper is also the slowest.',
            'Timed mathematics practice as the central habit.',
          ],
          [
            'Physics or chemistry gaps',
            'Neglect while concentrating on mathematics.',
            'Complete the board syllabus in both; they are cheaper marks.',
          ],
          [
            'Unfamiliar question styles',
            'Prepared from national material.',
            'Use the state board syllabus and this paper’s own past material.',
          ],
          [
            'Careless errors under time',
            'Speed ahead of fluency.',
            'Build accuracy at pace on shorter sets.',
          ],
          [
            'Practising the wrong stream',
            'Agriculture and pharmacy papers differ in structure.',
            'Practise your own stream’s paper.',
          ],
        ],
      },
    ],
  },

  /* ── Medical ───────────────────────────────────────────────── */
  'neet-ug': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a precision examination, where accuracy matters more than difficulty tolerance.',
        head: ['Subject', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Biology',
            'The senior-secondary syllabus line by line, because questions are frequently drawn from statements in the prescribed text, and revised on a fixed schedule.',
            'Supplementary biology material before the prescribed syllabus is secure line by line.',
          ],
          [
            'Chemistry',
            'All three branches complete, with inorganic revised regularly as the most reliably scoreable and physical chemistry practised numerically.',
            'Treating inorganic as unlearnable; it is the steadiest section in the paper.',
          ],
          [
            'Physics',
            'The syllabus with mechanics secured first, worked through problems in volume rather than through theory.',
            'Advanced problem books written for engineering entrance papers.',
          ],
          [
            'Revision schedule',
            'A fixed cycle that returns to biology at short intervals, because the volume is large and recall decays.',
            'Single passes through the syllabus.',
          ],
          [
            'The current bulletin',
            'Section structure, optional questions and marking, which have changed across recent cycles.',
            'Preparing to a previous year’s structure.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a NEET UG result is telling you. Accuracy is the number to watch.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Biology accuracy below the rest',
            'The steadiest predictor in this paper, and the one most responsive to schedule.',
            'Fixed-interval revision of the prescribed syllabus, line by line.',
          ],
          [
            'Physics slow',
            'Formulas reconstructed rather than recalled.',
            'Formula sheet from memory, and problems in volume.',
          ],
          [
            'Inorganic chemistry conceded',
            'Treated as memorisation and skipped.',
            'Structured regular revision; it is the most reliable third of the chemistry section.',
          ],
          [
            'Wrong answers well above blanks',
            'Guessing under a deduction in a paper decided on accuracy.',
            'Attempt only what you can defend, and study the topics you guessed on.',
          ],
          [
            'Accuracy falling late in the paper',
            'Concentration across a long single sitting.',
            'Full-length rehearsals at the real duration and hour.',
          ],
        ],
      },
    ],
  },

  'neet-pg': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading around clinical duties, where time is fragmented rather than scarce.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Clinical subjects',
            'The subjects carrying the largest share, worked through question-based revision rather than textbook reading, since recall under time is what is tested.',
            'Reading full textbooks. There is not time, and it is not what the paper measures.',
          ],
          [
            'Pre- and para-clinical subjects',
            'Revised through questions and high-yield notes, with attention to the areas that recur across cycles.',
            'Re-reading first-year material at original depth.',
          ],
          [
            'A single revision resource per subject',
            'Chosen once and revised repeatedly, so that fragmented study still accumulates.',
            'Switching resources, which resets progress every time.',
          ],
          [
            'Question banks',
            'Worked continuously and in short sessions, which suits a fragmented schedule better than long blocks.',
            'Saving questions for a dedicated later phase that duty rosters will not permit.',
          ],
          [
            'Full-length papers',
            'Scheduled explicitly, because they will not happen by themselves around clinical work.',
            'Assuming section practice substitutes for a full sitting.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Making practice work around clinical duties.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Section practice fine, full papers rare',
            'The schedule permits short sessions and not long ones.',
            'Book full papers into the calendar in advance, as fixed commitments.',
          ],
          [
            'Recall inconsistent across subjects',
            'Fragmented study without a revision cycle.',
            'A fixed rotation so every subject is revisited at a known interval.',
          ],
          [
            'Attempt rate low',
            'Deliberating rather than deciding under a long paper.',
            'Track attempt rate as a headline number in every mock.',
          ],
          [
            'Accuracy dropping across the paper',
            'Stamina, which duty fatigue makes worse.',
            'Rehearse the full duration when rested, and note the difference.',
          ],
          [
            'Resource switching',
            'Progress resetting each time.',
            'One resource per subject, revised, whatever else is recommended.',
          ],
        ],
      },
    ],
  },

  'ini-cet': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper that rewards precision and a high attempt rate.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Clinical subjects',
            'Question-based revision at depth, since this paper reaches further into detail than a general postgraduate entrance.',
            'Broad, shallow revision, which this paper exposes.',
          ],
          [
            'Recent developments and guidelines',
            'Current clinical guidance in the areas the paper favours, because it examines closer to current practice.',
            'Dated notes on subjects where practice has moved.',
          ],
          [
            'Image- and data-based questions',
            'Practised deliberately, since interpretation under time is a separate skill from recall.',
            'Text-only revision.',
          ],
          [
            'A single revision resource per subject',
            'Chosen and revised repeatedly, with the question bank as the working tool.',
            'Accumulating resources.',
          ],
          [
            'Full three-hour rehearsals',
            'Sat regularly, because attention across the full duration is what most candidates have never measured.',
            'Sectional practice only.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What an INI-CET practice result should tell you.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Attempt rate low',
            'Deliberation, in a paper where attempt rate is a headline number.',
            'Track it every mock and decide a commit rule.',
          ],
          [
            'Depth questions missed',
            'Revision pitched at general postgraduate entrance level.',
            'Go deeper in the subjects the paper favours rather than broader.',
          ],
          [
            'Image and data questions weak',
            'A distinct skill never practised.',
            'Work those question types specifically.',
          ],
          [
            'Performance falling in the third hour',
            'Stamina.',
            'Rehearse the full duration, regularly.',
          ],
          [
            'Guideline-based questions missed',
            'Notes older than current practice.',
            'Refresh against current clinical guidance in the favoured areas.',
          ],
        ],
      },
    ],
  },

  /* ── Management ────────────────────────────────────────────── */
  cat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper decided by selection as much as by ability.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'VARC',
            'Long, dense, argumentative prose read daily — philosophy, economics, science writing — plus para summary and jumble technique.',
            'Grammar drilling. This section is reading and reasoning about text, not rules.',
          ],
          [
            'DILR',
            'Sets in variety rather than in volume of one type, with selection practised explicitly: rank the sets before solving any of them.',
            'Solving every set in the order printed, which trains the wrong skill.',
          ],
          [
            'Quantitative ability',
            'Arithmetic secured first — it carries more than candidates expect — then algebra, geometry and number properties.',
            'Advanced mathematics. The syllabus is school-level; the difficulty is in the application.',
          ],
          [
            'Approximation and estimation',
            'Practised deliberately, because most questions ask which is larger or roughly how much.',
            'Exact computation as a habit.',
          ],
          [
            'The current pattern',
            'Section structure, sectional timing and marking from the official announcement, which has changed across cycles.',
            'Assuming a previous year’s structure.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a CAT mock, where selection decisions matter more than the score.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Time sunk in a set you did not finish',
            'Selection, the single largest lever in this paper.',
            'Rank every set in the first minutes and solve in that order; review whether the ranking was right.',
          ],
          [
            'VARC accuracy low on inference questions',
            'Answering from knowledge rather than from the passage.',
            'For each wrong answer, find the line that supports the correct option.',
          ],
          [
            'Quantitative section unfinished',
            'Exact computation where estimation would settle it.',
            'Decide the precision each question needs before calculating.',
          ],
          [
            'Sectional scores uneven',
            'Sectional timing means a weak section cannot be rescued.',
            'Study time follows the weakest section.',
          ],
          [
            'Score volatile between mocks',
            'Normal, given set difficulty varies.',
            'Track selection decisions and accuracy rather than the raw percentile.',
          ],
        ],
      },
    ],
  },

  xat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper with a section no other management entrance sets.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Decision making',
            'Past decision-making sets worked and reviewed, because the section rewards a consistent way of reading a situation rather than knowledge.',
            'Assuming ethical intuition is enough. The section has patterns and they are learnable from past papers.',
          ],
          [
            'Verbal and logical ability',
            'Dense reading, plus critical reasoning and the poem or abstract passage types this paper favours.',
            'Only conventional comprehension practice.',
          ],
          [
            'Quantitative ability and data interpretation',
            'Arithmetic, algebra and geometry at management-entrance level, with data sets worked to time.',
            'Advanced mathematics.',
          ],
          [
            'General knowledge',
            'Current affairs and static general knowledge, prepared knowing how the section is treated in the scoring.',
            'Over-investing before checking how the section counts in the current cycle.',
          ],
          [
            'The current bulletin',
            'Section structure, marking, and any penalty for unattempted questions — a feature this paper has used.',
            'Assuming another entrance test’s marking rules apply.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a paper with an unusual section and unusual marking.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Decision making inconsistent',
            'Answering by instinct rather than by a consistent reading of the stakeholders.',
            'Work past sets and articulate the rule behind each correct answer.',
          ],
          [
            'Marks lost to unattempted questions',
            'A marking rule this paper has applied and others do not.',
            'Check the current rule and decide an attempt policy that accounts for it.',
          ],
          [
            'Verbal section weaker than in other mocks',
            'Abstract and unconventional passage types.',
            'Practise those specifically rather than avoiding them.',
          ],
          [
            'General knowledge treated as core',
            'Effort disproportionate to how the section counts.',
            'Confirm its role in the current cycle before allocating months.',
          ],
          [
            'Time allocation copied from another paper',
            'Different section structure.',
            'Build a plan from this paper’s own structure.',
          ],
        ],
      },
    ],
  },

  gmat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for an adaptive test, where accuracy early matters and pace cannot slip.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Quantitative reasoning',
            'Arithmetic, algebra and number properties worked for accuracy under time. The syllabus is narrow; the reasoning is the difficulty.',
            'Advanced mathematics, which is not what the section tests.',
          ],
          [
            'Verbal reasoning',
            'Critical reasoning and reading comprehension practised at length, since these reward argument analysis rather than vocabulary.',
            'Vocabulary lists.',
          ],
          [
            'Data insights',
            'Data sufficiency, table and graphics interpretation and multi-source reasoning, practised as their own formats.',
            'Assuming quantitative practice covers them.',
          ],
          [
            'Official practice material',
            'Used as the primary source, because question style is what this test is most consistent about.',
            'Third-party material as the main diet, which can misrepresent difficulty and style.',
          ],
          [
            'The adaptive format',
            'Understood — the test adjusts to your answers, so pacing and steady accuracy matter differently from a fixed paper.',
            'Skipping questions the way you would in a fixed paper.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising an adaptive test.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Score falls despite feeling comfortable',
            'The test adapts; comfort can mean easier questions.',
            'Read the section-level analysis rather than the feel of the sitting.',
          ],
          [
            'Running out of time late in a section',
            'Early over-investment, which an adaptive format punishes.',
            'Hold an even pace; do not spend disproportionately on the opening questions.',
          ],
          [
            'Critical reasoning errors',
            'Answering from plausibility rather than from the argument’s structure.',
            'For each error, name the assumption or flaw the question turned on.',
          ],
          [
            'Data insights weak',
            'A distinct section never practised as one.',
            'Work its formats separately from quantitative practice.',
          ],
          [
            'Third-party mocks scoring differently',
            'Style and adaptivity differ from the official test.',
            'Calibrate on official practice tests.',
          ],
        ],
      },
    ],
  },

  nmat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a test with sectional time limits and a retake structure.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Language skills',
            'Grammar, vocabulary and comprehension practised for speed — this paper is quicker and less dense than the harder management entrances.',
            'The long argumentative reading practice suited to a different paper.',
          ],
          [
            'Quantitative skills',
            'Arithmetic and data interpretation drilled hard for pace, since the section is long relative to its time.',
            'Difficult problem solving; the challenge here is volume.',
          ],
          [
            'Logical reasoning',
            'Standard reasoning families practised in short timed sets.',
            'Extended theory.',
          ],
          [
            'Sectional timing',
            'Practised as separately timed sections from the start, because minutes cannot be moved.',
            'Practising the paper as one continuous block.',
          ],
          [
            'The retake rules',
            'Read in the current bulletin, since the number of attempts permitted and how scores are treated affects how you plan a window.',
            'Assuming a retake structure without checking it.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a speed-oriented, sectionally timed test.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Sections unfinished',
            'Pace rather than difficulty.',
            'Practise at the paper’s own seconds-per-question, which is tighter than it looks.',
          ],
          [
            'Accuracy fine, attempts low',
            'Working carefully in a test that rewards volume.',
            'Raise speed on the question types you already answer reliably.',
          ],
          [
            'One section consistently weak',
            'Sectional timing means it cannot be compensated.',
            'Study time follows that section.',
          ],
          [
            'Score improving then plateauing',
            'Speed gains exhausted; accuracy now the constraint.',
            'Return to error review by cause rather than taking more mocks.',
          ],
          [
            'No plan for the attempt window',
            'The retake structure not read.',
            'Plan the window against the current rules before booking.',
          ],
        ],
      },
    ],
  },

  snap: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a short paper where every question carries proportionally more.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General English',
            'Grammar, vocabulary and comprehension at moderate difficulty, practised for speed.',
            'The dense argumentative reading suited to harder papers.',
          ],
          [
            'Analytical and logical reasoning',
            'Standard reasoning families and arrangement sets, drilled in short timed sets.',
            'Extended theory.',
          ],
          [
            'Quantitative, data interpretation and data sufficiency',
            'Arithmetic and data handling practised to time, with data sufficiency treated as its own format.',
            'Advanced mathematics.',
          ],
          [
            'Accuracy under a short paper',
            'Practised deliberately, since a short paper magnifies the cost of each error.',
            'Volume practice without attention to the error rate.',
          ],
          [
            'The current bulletin',
            'Section structure, question count and marking, which have changed across cycles.',
            'Preparing to a remembered format.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a SNAP practice result.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'A few errors costing a large share of the score',
            'A short paper magnifies each mistake.',
            'Prioritise accuracy over attempt count.',
          ],
          [
            'Reasoning sets slow',
            'Set-type unfamiliarity.',
            'Drill the families in short timed sets.',
          ],
          [
            'Quantitative section rushed',
            'Pace built without arithmetic fluency.',
            'Daily calculation drill.',
          ],
          [
            'English inconsistent',
            'Vocabulary carried by chance rather than by reading.',
            'Steady reading over months, with a short record of unfamiliar words.',
          ],
          [
            'Format surprises',
            'Preparing to a previous structure.',
            'Read the current bulletin and practise to it.',
          ],
        ],
      },
    ],
  },

  cmat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper with a general awareness section most management entrances omit.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Quantitative techniques and data interpretation',
            'Arithmetic, basic algebra and data interpretation practised for accuracy and pace.',
            'Advanced mathematics.',
          ],
          [
            'Logical reasoning',
            'Standard families drilled in short sets.',
            'Extended theory.',
          ],
          [
            'Language comprehension',
            'Grammar, usage and comprehension at moderate difficulty.',
            'Dense argumentative reading practice.',
          ],
          [
            'General awareness',
            'Current affairs and static general knowledge, prepared deliberately — this section distinguishes this paper from most management entrances.',
            'Skipping it because other entrance tests do not set it.',
          ],
          [
            'Innovation and entrepreneurship, where set',
            'The prescribed topics, checked in the current bulletin since this section has varied between cycles.',
            'Assuming the section list from a previous year.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a CMAT practice result.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'General awareness conceded',
            'The section other management preparation ignores.',
            'A compact current-affairs and static routine, sustained.',
          ],
          [
            'Quantitative accurate but slow',
            'Calculation speed.',
            'Daily arithmetic drill.',
          ],
          [
            'Reasoning inconsistent',
            'Families met unevenly.',
            'Work each family to fluency in turn.',
          ],
          [
            'Language section variable',
            'Vocabulary and reading speed.',
            'Steady daily reading over months.',
          ],
          [
            'Section list unfamiliar',
            'Structure has varied between cycles.',
            'Confirm the current sections before building a plan.',
          ],
        ],
      },
    ],
  },

  mat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper offered in more than one delivery mode and multiple windows.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Language comprehension',
            'Grammar, vocabulary and comprehension at moderate difficulty, practised for speed.',
            'Harder-paper reading practice.',
          ],
          [
            'Intelligence and critical reasoning',
            'Standard reasoning families and critical reasoning, drilled in short sets.',
            'Extended theory.',
          ],
          [
            'Mathematical skills',
            'Arithmetic, basic algebra and geometry practised for accuracy and pace.',
            'Advanced mathematics.',
          ],
          [
            'Data analysis and sufficiency',
            'Data interpretation and data sufficiency worked as separate formats.',
            'Assuming general quantitative practice covers data sufficiency.',
          ],
          [
            'Indian and global environment',
            'Current affairs and business awareness, prepared knowing how the section is treated in the scoring for the cycle you sit.',
            'Investing months before checking how it counts.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a paper with several sections and several delivery modes.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Sections unevenly prepared',
            'Five sections is more than most candidates plan for.',
            'Rotate deliberately rather than defaulting to the comfortable ones.',
          ],
          [
            'Time running short',
            'Pace not built to the paper’s own length.',
            'Practise at the real seconds-per-question.',
          ],
          [
            'Data sufficiency errors',
            'A distinct format never practised.',
            'Work it separately from data interpretation.',
          ],
          [
            'Awareness section neglected',
            'Its role in scoring not checked.',
            'Confirm how it counts for your cycle, then allocate accordingly.',
          ],
          [
            'Mode unfamiliarity',
            'Practised in one delivery mode and sitting another.',
            'Practise in the mode you have booked.',
          ],
        ],
      },
    ],
  },

  /* ── Law ───────────────────────────────────────────────────── */
  clat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a comprehension-led paper where every section is passage-based.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Legal reasoning',
            'Passage-based legal reasoning practised until applying a stated principle exactly is automatic, drawing on contract, tort and criminal principles.',
            'Studying the actual law. The answer must follow the principle as given, even where it differs from real law.',
          ],
          [
            'English language',
            'Long comprehension passages read daily, since every section of this paper is comprehension in some form.',
            'Isolated grammar drilling.',
          ],
          [
            'Current affairs and general knowledge',
            'Current affairs read as passages with follow-up questions, which is how the paper sets them.',
            'Fact lists divorced from context.',
          ],
          [
            'Logical reasoning',
            'Argument structure, assumptions and inference, practised on passages.',
            'Puzzle-style reasoning suited to a different family of examinations.',
          ],
          [
            'Quantitative techniques',
            'Data drawn from passages, with school arithmetic applied to it.',
            'Advanced mathematics.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a CLAT result is measuring — mostly, reading speed and precision.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Paper unfinished',
            'Reading speed, which is the binding constraint in a fully passage-based paper.',
            'Daily long-form reading at pace, over months.',
          ],
          [
            'Legal reasoning errors on familiar principles',
            'Answering from real law or from fairness rather than from the principle as stated.',
            'For each question, underline the operative words in the principle before answering.',
          ],
          [
            'Current affairs questions missed',
            'Facts learned without the context the passages supply.',
            'Read current affairs as reading, not as lists.',
          ],
          [
            'Accuracy dropping in later sections',
            'Reading fatigue.',
            'Full-length rehearsals rather than sectional practice.',
          ],
          [
            'Quantitative section skipped',
            'Assumed hard when it is school arithmetic applied to a passage.',
            'Practise it; the marks are cheap.',
          ],
        ],
      },
    ],
  },

  ailet: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a shorter law entrance with its own section balance.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'English language',
            'Comprehension and usage practised to time, with vocabulary built from reading.',
            'Only grammar rules.',
          ],
          [
            'Current affairs and general knowledge',
            'Current affairs of the recent period, plus static general knowledge, prepared knowing this paper weights the section differently from other law entrances.',
            'Assuming another entrance test’s balance applies.',
          ],
          [
            'Logical reasoning',
            'Argument analysis, assumptions and inference, practised on passages and on discrete questions.',
            'Puzzle-heavy reasoning material.',
          ],
          [
            'Past papers of this examination specifically',
            'Worked first, because section balance and question style differ from other law entrances.',
            'Practising exclusively on another law entrance’s material.',
          ],
          [
            'The current bulletin',
            'Section structure and marking, which have varied.',
            'Preparing to a remembered format.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading an AILET practice result.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Score differs from other law entrance mocks',
            'Different section balance and paper length.',
            'Practise on this examination’s own material.',
          ],
          [
            'General knowledge weak',
            'Under-prepared relative to how this paper weights it.',
            'A sustained current-affairs and static routine.',
          ],
          [
            'Reasoning errors on inference',
            'Answering beyond what the passage supports.',
            'Find the supporting line for every correct option.',
          ],
          [
            'English section slow',
            'Reading speed.',
            'Daily long-form reading at pace.',
          ],
          [
            'Time pressure late in the paper',
            'Pace not matched to this paper’s length.',
            'Practise at its own seconds-per-question.',
          ],
        ],
      },
    ],
  },

  /* ── University ────────────────────────────────────────────── */
  'cuet-ug': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a test whose content is decided by the subjects you choose.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Domain subjects',
            'The senior-secondary syllabus for each subject you have opted for, since domain papers are set to it.',
            'Competitive-entrance material pitched above the school syllabus.',
          ],
          [
            'Subject choice itself',
            'The eligibility and subject requirements of the specific programmes and universities you would join, checked before opting.',
            'Choosing subjects by comfort and discovering afterwards that a programme required a different combination.',
          ],
          [
            'General test, where required',
            'General knowledge, current affairs, quantitative reasoning and logical reasoning, prepared as its own paper.',
            'Assuming domain preparation covers it.',
          ],
          [
            'Language papers',
            'Reading comprehension, vocabulary and grammar in the language you have opted for.',
            'Opting for a language by habit rather than by measured reading speed.',
          ],
          [
            'The current bulletin',
            'The number of subjects permitted, the slot structure and the marking, all of which have changed across cycles.',
            'Planning to a previous year’s rules.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a test made of separately chosen papers.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'One domain paper far weaker',
            'Each paper stands alone for the programmes that use it.',
            'Allocate study by the programmes you want, not evenly.',
          ],
          [
            'General test conceded',
            'Prepared as an afterthought where a programme requires it.',
            'Give it its own slot if any target programme uses it.',
          ],
          [
            'Domain questions above expected level',
            'Prepared from entrance material rather than the school syllabus.',
            'Return to the prescribed senior-secondary syllabus.',
          ],
          [
            'Language paper slow',
            'Reading speed in the opted language.',
            'Practise reading at pace in that language specifically.',
          ],
          [
            'Subject choice uncertain',
            'Programme requirements not checked.',
            'Settle the programme list first; it decides the subjects.',
          ],
        ],
      },
    ],
  },

  'cuet-pg': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a postgraduate entrance set to your own discipline.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Your subject paper',
            'The official syllabus for the paper code you will sit, worked unit by unit from standard references.',
            'A general subject textbook not mapped to the paper’s syllabus.',
          ],
          [
            'Paper code selection',
            'Checked against the programmes and universities you would actually join, because the code governs where the score can be used.',
            'Choosing a code by subject name alone.',
          ],
          [
            'Past questions',
            'Worked and tagged to syllabus units, which shows weighting the syllabus does not.',
            'Reading solved papers without attempting them.',
          ],
          [
            'General and language components, where set',
            'Prepared deliberately where your paper includes them.',
            'Assuming the subject paper is the whole test.',
          ],
          [
            'The current bulletin',
            'Paper structure, marking and eligibility, which have varied between cycles.',
            'Preparing to a previous structure.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a subject-specific postgraduate entrance.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Marks concentrated in a few units',
            'Reading a textbook rather than the syllabus units.',
            'Work unit by unit against the official syllabus.',
          ],
          [
            'Questions outside your reading',
            'Wrong paper code, or a syllabus not read.',
            'Confirm the code and read its syllabus line by line.',
          ],
          [
            'Pace uncomfortable',
            'Untimed study only.',
            'Practise at the paper’s seconds-per-question.',
          ],
          [
            'General component conceded',
            'Assumed absent.',
            'Check whether your paper sets one, and prepare it if so.',
          ],
          [
            'Score not translating to admission options',
            'The code does not serve the programmes you want.',
            'Settle the programme list before the preparation, not after.',
          ],
        ],
      },
    ],
  },

  /* ── PG and research ───────────────────────────────────────── */
  gate: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading to rebuild a degree subject into something retrievable under a clock.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Your discipline’s core subjects',
            'The chapters your weight table ranks highest, rebuilt onto one page each — definitions, standard results, the formulas that appear and the question forms that recur.',
            'Reading a degree textbook from chapter one, which leaves the weighted chapters unrevised four weeks later.',
          ],
          [
            'Engineering mathematics',
            'The prescribed topics, worked in volume. Common across papers and reliably examined.',
            'Skipping it as generic; it is a defined and scoreable block.',
          ],
          [
            'General aptitude',
            'Verbal and numerical aptitude drilled in short sets — a small, reliable block discipline-focused candidates concede.',
            'Ignoring it because it is not your subject.',
          ],
          [
            'Numerical answer questions',
            'Practised specifically, since they permit no elimination and demand precision.',
            'Assuming multiple-choice practice covers them.',
          ],
          [
            'The paper code and its syllabus',
            'Confirmed in the current brochure, because eligibility, syllabus and the programmes a score serves all follow from it.',
            'Preparing a subject before settling the code.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Diagnosing a discipline-paper result.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Slow but accurate',
            'Formulas being reconstructed rather than recalled.',
            'Write the sheet from memory on a schedule.',
          ],
          [
            'Fast but inaccurate',
            'Unit and sign slips rather than concept gaps.',
            'Redo wrong questions writing units at every line.',
          ],
          [
            'Numerical answer questions missed',
            'No elimination available, so partial knowledge does not help.',
            'Practise them as a separate format.',
          ],
          [
            'Aptitude and mathematics conceded',
            'Treated as peripheral.',
            'Both are defined, common and reliably scoreable.',
          ],
          [
            'Marks concentrated in a few chapters',
            'Revision order taken from the degree rather than from the papers.',
            'Follow the chapter-weight table.',
          ],
        ],
      },
    ],
  },

  'iit-jam': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a science postgraduate entrance.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Your test paper’s syllabus',
            'The official syllabus for the paper you will sit, unit by unit, from standard undergraduate references.',
            'A general subject reading list not mapped to the syllabus.',
          ],
          [
            'Problem practice',
            'Past questions worked continuously, because the paper rewards problem-solving rather than recall.',
            'Reading theory in the hope that problems become easier.',
          ],
          [
            'Numerical and multiple-select formats',
            'Practised separately, since both punish partial knowledge differently from single-answer questions.',
            'Practising only single-answer multiple choice.',
          ],
          [
            'Mathematical technique',
            'Whatever your paper requires, worked to fluency rather than looked up.',
            'Depending on formula lookup, which the clock does not permit.',
          ],
          [
            'Paper choice and programme fit',
            'Settled against the programmes and institutions you would join, from the current brochure.',
            'Choosing by subject name without checking programme eligibility.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading an IIT JAM practice result.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Theory secure, problems slow',
            'Reading has substituted for solving.',
            'Work past questions continuously.',
          ],
          [
            'Multiple-select questions lost',
            'Partial knowledge, which this format punishes.',
            'Practise the format specifically and decide an attempt rule.',
          ],
          [
            'Numerical answers wrong by a factor',
            'Units and precision.',
            'Write units at every line and check magnitude before submitting.',
          ],
          [
            'Coverage narrow',
            'Reading a book rather than the syllabus.',
            'Work unit by unit against the official syllabus.',
          ],
          [
            'Score flat across attempts',
            'Revision without problem practice.',
            'Replace reading hours with solving hours.',
          ],
        ],
      },
    ],
  },

  /* ── International ─────────────────────────────────────────── */
  gre: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a general aptitude test used in graduate admissions.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Verbal reasoning',
            'Dense academic prose read daily, plus vocabulary built in context — this section rewards both reading and word knowledge.',
            'Memorising very long word lists in isolation, which is retained poorly.',
          ],
          [
            'Quantitative reasoning',
            'Arithmetic, algebra, geometry and data interpretation at school level, worked for accuracy and pace.',
            'Advanced mathematics; the difficulty is in the reasoning, not the syllabus.',
          ],
          [
            'Analytical writing',
            'Timed essays written to a clear structure, on the task types the test actually sets.',
            'Collecting template phrases, which read as templates.',
          ],
          [
            'Official practice material',
            'Used as the primary source, since question style and difficulty calibration matter here.',
            'Third-party material as the main diet.',
          ],
          [
            'Score reporting and validity',
            'The current rules on how and when scores reach institutions, and how long a result remains valid.',
            'Booking without working backwards from application deadlines.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising for a computer-delivered aptitude test.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Verbal accuracy low on vocabulary questions',
            'Words learned from lists rather than in context.',
            'Read daily and record only the words you actually met and could not define.',
          ],
          [
            'Quantitative section unfinished',
            'Exact computation where estimation would settle it.',
            'Decide the precision each question needs first.',
          ],
          [
            'Essays running over time',
            'Planning and structure.',
            'Plan for a fixed few minutes, then write to the plan.',
          ],
          [
            'Score differing from third-party mocks',
            'Different calibration.',
            'Trust official practice tests for the estimate.',
          ],
          [
            'Practice all on paper',
            'The test is delivered on screen.',
            'Practise in the delivery mode you have booked.',
          ],
        ],
      },
    ],
  },

  ielts: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a proficiency test marked against described criteria.',
        head: ['Skill', 'Work on this', 'Do not spend time on'],
        rows: [
          [
            'Listening',
            'Practice with a range of accents, and the specific task types the test sets, with attention to spelling and to instructions on word limits.',
            'Passive listening, which does not build the task-specific skill.',
          ],
          [
            'Reading',
            'Timed practice on the actual task types, and the technique for locating information quickly in a long passage.',
            'Reading for enjoyment alone as preparation for a timed test.',
          ],
          [
            'Writing',
            'Both tasks written to time and assessed against the published criteria, which describe exactly what is rewarded.',
            'Writing without ever comparing the result against the criteria.',
          ],
          [
            'Speaking',
            'Speaking aloud, recorded and reviewed, across the three parts the test uses.',
            'Preparing answers to memorise, which is audible and penalised.',
          ],
          [
            'Test choice and requirements',
            'The version your institution accepts — the academic and general training modules differ — and any minimum on individual skills.',
            'Booking before checking the module and the section minimums.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What practice should measure in a proficiency test.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Receptive skills strong, productive skills weaker',
            'The usual shape. Writing and speaking are practised least and marked hardest.',
            'Produce work under real task conditions and assess it against the published criteria.',
          ],
          [
            'Reading unfinished',
            'Technique for locating information rather than comprehension.',
            'Practise the task types to time, not general reading.',
          ],
          [
            'Listening errors on spelling or word limits',
            'Instructions rather than listening.',
            'Read the task instruction every time; these are avoidable losses.',
          ],
          [
            'Speaking answers sounding rehearsed',
            'Memorised material, which is penalised.',
            'Practise fluency on unfamiliar prompts instead.',
          ],
          [
            'One band below the requirement',
            'Section minimums may apply even if the overall is sufficient.',
            'Check the institution’s per-skill minimums and target the weakest skill.',
          ],
        ],
      },
    ],
  },

  toefl: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for an academic-English test delivered on a computer.',
        head: ['Skill', 'Work on this', 'Do not spend time on'],
        rows: [
          [
            'Reading',
            'Academic passages read to time, with the specific question types the test uses.',
            'General reading alone.',
          ],
          [
            'Listening',
            'Academic lectures and conversations, with note-taking practised as a skill, since notes are permitted and useful.',
            'Listening without taking notes, which does not rehearse the actual task.',
          ],
          [
            'Speaking',
            'Responses recorded and reviewed against the task types, with attention to organisation within a very short time.',
            'Memorised openings, which cost more than they save.',
          ],
          [
            'Writing',
            'Integrated and independent tasks written to time, then compared against the published scoring criteria.',
            'Writing without checking against the criteria.',
          ],
          [
            'Delivery format',
            'Practice in the mode you have booked, including typing speed for the writing tasks.',
            'Handwritten practice for a typed test.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising an integrated-skills test.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Integrated tasks weaker than independent ones',
            'They require combining a reading and a listening source under time.',
            'Practise the integrated formats specifically.',
          ],
          [
            'Notes not useful during listening',
            'Note-taking untrained.',
            'Practise structured notes, not transcription.',
          ],
          [
            'Speaking responses disorganised',
            'Very short preparation time.',
            'Rehearse a simple structure you can fill quickly on any prompt.',
          ],
          [
            'Typing slowing the writing tasks',
            'A mechanical constraint on a typed test.',
            'Practise typing to build speed.',
          ],
          [
            'Score below a section minimum',
            'Institutions may set per-skill minimums.',
            'Target the weakest skill rather than the overall.',
          ],
        ],
      },
    ],
  },

  sat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for an undergraduate admissions test.',
        head: ['Section', 'Work on this', 'Do not spend time on'],
        rows: [
          [
            'Reading and writing',
            'Short passages read closely, with the grammar and rhetoric question types practised to time.',
            'Vocabulary lists in isolation; the test asks about words in context.',
          ],
          [
            'Mathematics',
            'Algebra, problem solving and data analysis, and the advanced topics the syllabus names — worked for accuracy and pace.',
            'Mathematics beyond the published syllabus.',
          ],
          [
            'Calculator use',
            'Practised as the test permits it, including knowing when not to use one.',
            'Depending on a calculator for questions faster done mentally.',
          ],
          [
            'Official practice material',
            'The primary source, since style and calibration matter.',
            'Third-party material as the main diet.',
          ],
          [
            'Institution policy',
            'Whether your target institutions require, consider or do not use the test, and their score-reporting rules.',
            'Preparing for a test the programmes you want do not use.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading an SAT practice result.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Reading section unfinished',
            'Pace on short passages.',
            'Practise to the real per-question timing.',
          ],
          [
            'Grammar questions inconsistent',
            'Rules known descriptively rather than applied.',
            'Work one rule at a time through a large set.',
          ],
          [
            'Mathematics errors on easy questions',
            'Careless slips rather than concepts.',
            'Redo them writing each step.',
          ],
          [
            'Score differing from third-party practice',
            'Different calibration.',
            'Calibrate on official practice tests.',
          ],
          [
            'Unsure whether to sit at all',
            'Institution policy not checked.',
            'Confirm whether your target programmes use the test before preparing further.',
          ],
        ],
      },
    ],
  },
}

export default ENTRANCE_DEPTH
