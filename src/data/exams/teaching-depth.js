/**
 * Additional blocks for the teaching and research-eligibility records.
 *
 * One reading table for `study-material` and one diagnostic table for
 * `mock-tests`, per exam. See src/data/exams/ssc-depth.js for why these two
 * resource pages needed them.
 *
 * The fact that shapes this family: these are pedagogy and subject-depth
 * examinations rather than aptitude tests, and the commonest failure is a
 * candidate preparing the subject they know at the depth they know it, rather
 * than at the depth and in the form the paper actually asks for.
 *
 * No qualifying percentage, cutoff, date or fee for a named cycle appears
 * here; the notification for your own track is the authority on those.
 */

const TEACHING_DEPTH = {
  ctet: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a paper that examines subjects pedagogically rather than academically.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Child development and pedagogy',
            'The major developmental and learning theories read for their classroom implications, inclusive education, assessment for learning, and the rights framework.',
            'Biographies of theorists. The questions ask what a position implies for teaching, not who held it.',
          ],
          [
            'Language I',
            'Grammar, comprehension and — the part candidates skip — the pedagogy of language: acquisition, the role of the mother tongue, and language across the curriculum.',
            'Assuming fluency covers this paper. It tests grammar and pedagogy, not fluency.',
          ],
          [
            'Language II',
            'The same, in your second chosen language, prepared deliberately rather than assumed.',
            'Choosing the second language by habit rather than by trying a past section in each.',
          ],
          [
            'Mathematics and environmental studies, or mathematics and science',
            'The school textbooks for the classes in your paper, read cover to cover, plus the pedagogy of each subject.',
            'Your degree material, which is pitched well above the level the paper sets.',
          ],
          [
            'Social studies, where it applies',
            'The school syllabus for the relevant classes, plus how the subject is meant to be taught.',
            'General studies competitive material, which covers content but not methodology.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a CTET result is telling you.',
        head: ['Where marks are lost', 'The usual reason', 'The correction'],
        rows: [
          [
            'Child development and pedagogy',
            'Answered from personal opinion about teaching rather than from the theory tested.',
            'Learn the positions as named positions; then practise choosing between two defensible options.',
          ],
          [
            'Two-option questions across the paper',
            'The discrimination between a good answer and a better one.',
            'Write one line on why the better option is better, ten questions a day.',
          ],
          [
            'Subject content',
            'Read at graduate depth rather than at school-syllabus level.',
            'Work through the school textbooks for the classes in your paper.',
          ],
          [
            'Language sections',
            'Fluency mistaken for grammar and language pedagogy.',
            'Prepare the pedagogy of language explicitly; it is a defined block.',
          ],
          [
            'Accuracy falling in the second half',
            'Concentration across a long single sitting.',
            'Sit full papers, and both papers on one day if you are taking both.',
          ],
        ],
      },
    ],
  },

  'state-tet': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading across the shared framework and the state-specific layer.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Child development and pedagogy',
            'The same body of theory every eligibility test examines, read for classroom implications.',
            'Assuming a state test differs here. This layer is largely shared.',
          ],
          [
            'The state school syllabus',
            'Your own state’s textbooks for the classes in your paper. State tests are set to the state syllabus, and this is where they diverge from the central test.',
            'Preparing from another state’s material or from a central-test guide alone.',
          ],
          [
            'The state language paper',
            'The language your state prescribes, including its grammar and its pedagogy, prepared deliberately.',
            'Treating a language you speak as a paper you do not need to study.',
          ],
          [
            'State-specific education policy',
            'The state’s own schemes, structures and rules where the syllabus names them.',
            'National policy alone, which does not cover the state layer.',
          ],
          [
            'Your own state’s past papers',
            'Worked before anything else, because they are the only evidence of how your state sets this paper.',
            'Central-test past papers as the primary practice material.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a test that is partly shared and partly state-specific.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Pedagogy fine, subject content weak',
            'Prepared from central material rather than the state syllabus.',
            'Move to your own state’s school textbooks for the classes in your paper.',
          ],
          [
            'Language paper weaker than expected',
            'Fluency assumed to be sufficient.',
            'Work grammar and language pedagogy in that language specifically.',
          ],
          [
            'Score differs sharply from central-test practice',
            'Different syllabus and different question style.',
            'Practise on your own state’s past papers as the primary material.',
          ],
          [
            'Two-option losses in pedagogy',
            'Principles known, discrimination not practised.',
            'For each such question, write why the better option is better.',
          ],
          [
            'Preparing in one medium, sitting in another',
            'A habit rather than a decision.',
            'Settle the medium now and practise every mock in it.',
          ],
        ],
      },
    ],
  },

  'ugc-net': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a two-paper examination where one paper is fixed and the other is your subject.',
        head: ['Paper', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Paper 1 — teaching and research aptitude',
            'The prescribed units, each finished and checked off: teaching, research, comprehension, communication, reasoning, data interpretation, ICT, environment and higher education.',
            'Over-allocating time here. It is a fixed, finishable syllabus and the subject paper carries more.',
          ],
          [
            'Paper 1 — the quantitative units',
            'Reasoning, mathematical reasoning and data interpretation, drilled rather than read. These are where arts candidates lose Paper 1 marks.',
            'Reading about reasoning instead of solving it.',
          ],
          [
            'Paper 2 — your subject',
            'The official subject syllabus unit by unit, from standard references, with past questions worked continuously.',
            'A general subject textbook not mapped to the syllabus units. The units are the specification.',
          ],
          [
            'Past questions, both papers',
            'Worked and tagged to units, which shows the weighting the syllabus does not.',
            'Reading solved papers without attempting them.',
          ],
          [
            'Higher education system',
            'The structure, bodies and policy of Indian higher education, which is a named and reliably examined unit.',
            'Skipping it as background. It is examinable and finite.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a result across a general paper and a subject paper.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Paper 1 strong, Paper 2 weak',
            'Time allocated to the paper that carries less.',
            'Shift the balance to the subject paper; Paper 1 is finishable and should be finished.',
          ],
          [
            'Paper 1 reasoning and data questions missed',
            'The units that are drilled rather than read.',
            'Short daily practice sets on reasoning and data interpretation.',
          ],
          [
            'Subject marks concentrated in a few units',
            'Reading a textbook rather than the syllabus units.',
            'Work unit by unit against the official syllabus and tick them off.',
          ],
          [
            'Accuracy falling late in the session',
            'Both papers are sat in one continuous session.',
            'Practise the full session length rather than the papers separately.',
          ],
          [
            'Score flat across attempts',
            'Revision without question practice.',
            'Work past questions by unit instead of rereading.',
          ],
        ],
      },
    ],
  },

  'csir-net': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a science paper that rewards problem-solving over recall.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Part A — general aptitude',
            'Numerical ability, reasoning, data interpretation and graphical analysis, drilled in short sets. It is common across subjects and reliably scoreable.',
            'Neglecting it as trivial. It is free marks for a candidate who practises it.',
          ],
          [
            'Part B — subject fundamentals',
            'Your subject syllabus unit by unit from standard references, with attention to the fundamentals the paper keeps returning to.',
            'Depth in a favourite area at the expense of syllabus coverage.',
          ],
          [
            'Part C — analytical and applied questions',
            'Past Part C questions worked continuously, because this part tests scientific reasoning and application rather than recall and cannot be prepared by reading.',
            'Reading more theory in the hope that Part C becomes easier. It does not.',
          ],
          [
            'Numerical and data-based problems',
            'Calculation practice with units and orders of magnitude, since a large share of avoidable loss is arithmetic rather than science.',
            'Assuming calculation will look after itself.',
          ],
          [
            'The full-session rehearsal',
            'The whole paper sat in one three-hour block, regularly, because performance across the third hour is what most candidates have never measured.',
            'Practising in sections only.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Diagnosing a result on a paper with three differently behaving parts.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Part A conceded',
            'Treated as trivial and never drilled.',
            'Short daily sets. It is the cheapest scoring part of the paper.',
          ],
          [
            'Part B fine, Part C poor',
            'Knowledge present, application not practised.',
            'Work past Part C questions continuously rather than reading theory.',
          ],
          [
            'Errors in numerical questions',
            'Units and orders of magnitude rather than concepts.',
            'Redo them writing units at every line.',
          ],
          [
            'Performance declining across the paper',
            'Stamina across a long single session.',
            'Rehearse the full duration, not sections.',
          ],
          [
            'Coverage narrow',
            'Depth in a favourite area at the cost of the syllabus.',
            'Work unit by unit against the official syllabus.',
          ],
        ],
      },
    ],
  },
}

export default TEACHING_DEPTH
