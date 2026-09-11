/**
 * Additional blocks for the UPSC, defence and police records.
 *
 * One reading table for `study-material` and one diagnostic table for
 * `mock-tests`, per exam. See src/data/exams/ssc-depth.js for why these two
 * resource pages needed them.
 *
 * The recurring structural facts in this family: screening stages whose marks
 * are discarded, descriptive papers that decide the merit, and selection
 * stages after the papers — boards, physical standards, medical examinations —
 * that take months to prepare for and cannot be arranged after a result.
 *
 * Nothing here states a cutoff, a vacancy count, a fee, a date or a mark
 * total for a named cycle. The notification is the authority on all of them.
 */

const UPSC_DEFENCE_DEPTH = {
  'upsc-civil-services': {
    'study-material': [
      {
        type: 'table',
        caption:
          'What to read for each part of the examination, and where reading has a poor return.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Prelims general studies',
            'One standard source per subject, finished and revised, plus the current affairs of roughly the last year kept as themed notes.',
            'Collecting several sources per subject. The prelims rewards reliable coverage far more than depth in any one area.',
          ],
          [
            'Prelims aptitude paper',
            'Comprehension, basic numeracy and reasoning practised until the qualifying standard is comfortable rather than marginal.',
            'Extended mathematics. It qualifies; it does not build rank.',
          ],
          [
            'Mains general studies',
            'The same subjects at argument depth — enough to write two hundred words on a topic without notes — plus committee reports, official data and government positions for specifics.',
            'Reading more books. The constraint at mains is writing practice, not input.',
          ],
          [
            'Essay',
            'Practice essays written to time on themes from public affairs, social questions and philosophy, planned in five minutes and held to the plan.',
            'Collecting quotations. Markers read for structure, balance and evidence.',
          ],
          [
            'Optional subject',
            'The prescribed syllabus, one standard reading list, and past questions worked as written answers from the first month.',
            'Choosing an optional late, or changing it once the reading has started.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a civil services practice result, where the score is the least useful number.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Prelims score good, no mains answers written',
            'Measuring the stage whose marks are discarded.',
            'One handwritten answer a day from the start, whatever the prelims score is.',
          ],
          [
            'Multi-statement questions missed disproportionately',
            'Partial knowledge turning into guesses.',
            'Practise elimination explicitly and record whether narrowing produced the right answer.',
          ],
          [
            'Mains answers unfinished',
            'Writing speed, the most common single failure in this examination.',
            'Twenty minutes per answer, daily, by hand, until the paper finishes itself.',
          ],
          [
            'Answers fluent but marked low',
            'Generality. Specific evidence is what separates a scoring answer from a readable one.',
            'For every practice answer, name a committee, a scheme, a figure or a case.',
          ],
          [
            'Essay weaker than general studies',
            'Structure and balance rather than content.',
            'Plan for five minutes, keep the plan in the margin, and write to it.',
          ],
        ],
      },
    ],
  },

  nda: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for two written papers and a selection board that follows them.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Mathematics',
            'The senior-secondary syllabus worked to fluency — algebra, trigonometry, calculus, vectors, statistics and analytical geometry — with speed built through solved problems.',
            'Competition-level mathematics. The paper is set to the school syllabus and rewards fluency rather than ingenuity.',
          ],
          [
            'General ability — English',
            'Grammar applied through practice, comprehension at pace, and vocabulary from sustained reading. This carries a large share of the paper.',
            'Neglecting it in favour of mathematics and general knowledge, which is the standard and costly pattern.',
          ],
          [
            'General ability — science',
            'Physics and chemistry at school level, with the applied and everyday questions the paper favours.',
            'Entrance-level science depth.',
          ],
          [
            'General ability — humanities and current events',
            'History, geography, polity, economy and current affairs at general studies breadth, with a defence and national security layer.',
            'Depth in one subject at the expense of coverage.',
          ],
          [
            'Selection board and medical',
            'What the board process assesses and what the medical standards require, read early from the official source.',
            'Assuming the written papers are the selection. A substantial part of the outcome is decided afterwards.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What an NDA written practice result should tell you.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Mathematics slow',
            'Standard results being reconstructed rather than recalled.',
            'Write the formula sheet from memory on a schedule and solve daily.',
          ],
          [
            'English weaker than expected',
            'The most under-prepared part of the general ability paper.',
            'Give it a daily slot of its own rather than folding it into general reading.',
          ],
          [
            'General knowledge uneven across subjects',
            'One or two areas covered and the rest absent.',
            'Rotate the subjects rather than finishing one and stopping.',
          ],
          [
            'Guessing widely under the deduction',
            'No attempt policy fixed before the paper.',
            'Decide how narrow a guess must be before you take it, and rehearse it.',
          ],
          [
            'Board preparation not started',
            'It cannot be prepared for after a written result.',
            'Read widely, form views, and be able to talk about yourself and your interests.',
          ],
        ],
      },
    ],
  },

  cds: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a graduate-entry defence examination.',
        head: ['Paper', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'English',
            'Grammar applied through practice, comprehension at pace, and vocabulary from sustained reading. It is a full paper here.',
            'Treating it as a section rather than a paper.',
          ],
          [
            'General knowledge',
            'History, geography, polity, economy, general science and current affairs, with a defence and international-relations layer.',
            'Depth in one subject; the paper is broad and single-fact.',
          ],
          [
            'Elementary mathematics',
            'School arithmetic, algebra, geometry, trigonometry, mensuration and statistics — set at school level and required only for the academies where it applies.',
            'Preparing mathematics for an entry that does not examine it. Check which papers your chosen academy requires.',
          ],
          [
            'Defence and current affairs',
            'One reliable defence news source, followed regularly, plus national and international current affairs.',
            'Accumulating defence trivia without the policy and institutional context questions are built on.',
          ],
          [
            'Selection board and medical',
            'The board process and the medical standards, read early from official sources.',
            'Deferring physical and medical preparation until after the written result.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Making a CDS practice result useful.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'English fine on grammar, weak on comprehension',
            'Reading speed rather than rules.',
            'A page of dense prose daily, read at pace.',
          ],
          [
            'General knowledge inconsistent between attempts',
            'Static material revised occasionally.',
            'Short daily revision of a compact sheet, sustained over months.',
          ],
          [
            'Mathematics conceded',
            'Assumed to be beyond reach when it is set at school level.',
            'Work arithmetic and geometry to fluency; the level is lower than most candidates expect.',
          ],
          [
            'Defence questions missed',
            'No regular defence news habit.',
            'One source, followed weekly, with notes by theme rather than by date.',
          ],
          [
            'Board preparation absent',
            'It is the stage most candidates arrive at unprepared.',
            'Begin alongside the written preparation, not after it.',
          ],
        ],
      },
    ],
  },

  capf: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for an examination with a descriptive paper and a physical stage.',
        head: ['Paper', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Paper 1 — general ability and intelligence',
            'General studies at prelims breadth — polity, history, geography, economy, science, environment and current affairs — plus a reasoning and numerical block.',
            'Depth beyond what a broad objective paper asks.',
          ],
          [
            'Paper 2 — general studies, essay and comprehension',
            'Timed writing practice: essays on national and international issues, précis, comprehension and argument. This paper is descriptive and it is where candidates are separated.',
            'Preparing it as a reading exercise. It is a writing examination.',
          ],
          [
            'The writing file',
            'Your own timed answers and essays, dated, with the time taken noted. Reread monthly.',
            'A reading file of collected material you will not revisit.',
          ],
          [
            'Security and internal affairs',
            'Internal security, border management, the forces themselves and the current policy debate around them.',
            'Assuming general current affairs covers this. It is a distinct and examinable layer.',
          ],
          [
            'Physical standards and medical',
            'The events, standards and medical requirements in the notification, prepared for from the first month.',
            'Leaving them until after the written result.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising an examination that is half objective and half written.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Paper 1 comfortable, Paper 2 unpractised',
            'The descriptive paper decides more and is prepared less.',
            'Write one timed piece a week from the first month.',
          ],
          [
            'Essays running over time',
            'Planning and writing speed rather than content.',
            'Five-minute plan, fixed structure, and time every practice piece.',
          ],
          [
            'Précis and comprehension weak',
            'A specific skill that is rarely practised deliberately.',
            'Work past questions in exactly the format the paper sets.',
          ],
          [
            'Handwriting deteriorating late in a paper',
            'Physical writing stamina, which is trainable.',
            'Write full papers by hand rather than practising single answers only.',
          ],
          [
            'Physical preparation paused',
            'The stage that eliminates candidates who cleared the papers.',
            'Fixed weekly training, above the prescribed standard.',
          ],
        ],
      },
    ],
  },

  'engineering-services': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for an examination with objective and conventional stages in one discipline.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General studies and engineering aptitude',
            'The prescribed topics — current affairs, engineering aptitude, ethics, project management, energy and environment, materials, ICT and standards — treated as a subject in its own right.',
            'Assuming it is a light general paper. It is a scored paper with a defined syllabus.',
          ],
          [
            'Objective discipline papers',
            'Your discipline’s core subjects, revised from a chapter-weight table built by tagging past papers, with a formula sheet rewritten from memory.',
            'Reading degree textbooks from the first chapter.',
          ],
          [
            'Conventional discipline papers',
            'The same subjects prepared for written answers — derivations, sketches, worked problems and justifications — practised by hand and to time.',
            'Preparing conventional papers by reading. They are written papers and reward writing practice.',
          ],
          [
            'Standards, codes and design practice',
            'Where your discipline uses them, learned as material rather than dismissed as reference.',
            'Skipping them because they are not concepts.',
          ],
          [
            'Personality test',
            'Your branch, your projects, your work and the current debates in your field.',
            'Preparing it after the written result. The board reads what you claimed.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising across an objective and a conventional stage.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'Objective strong, conventional unpractised',
            'The stage that builds rank is the one being neglected.',
            'One full conventional answer by hand each day from early on.',
          ],
          [
            'Conventional answers incomplete',
            'Writing and sketching speed.',
            'Practise full papers by hand and time them; sketching is a trainable skill.',
          ],
          [
            'General studies paper conceded',
            'Treated as unpreparable when it has a defined syllabus.',
            'Work through the prescribed topics deliberately; the marks are available.',
          ],
          [
            'Marks concentrated in a few subjects',
            'Coverage narrower than the paper.',
            'Follow the chapter-weight table rather than revising what is comfortable.',
          ],
          [
            'Formula recall slow',
            'Reading instead of retrieval practice.',
            'Rewrite the sheet from memory weekly.',
          ],
        ],
      },
    ],
  },

  'indian-forest-service': {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading across the shared prelims, the general papers and two optionals.',
        head: ['Part', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'Preliminary stage',
            'The same general studies preparation as the civil services prelims, since the screening stage is shared.',
            'A separate prelims preparation. The overlap is the whole point.',
          ],
          [
            'General English and general knowledge papers',
            'Timed writing in English, and general knowledge at the breadth the papers set.',
            'Treating them as qualifying formalities.',
          ],
          [
            'The two optional subjects',
            'The prescribed syllabus for each, one standard reading list per subject, and past questions worked as written answers from the first month.',
            'Choosing optionals late, or choosing a pair whose syllabi you have not read.',
          ],
          [
            'Forestry, ecology and environment context',
            'The institutional and policy framework the service works within, read alongside the optionals.',
            'Ignoring it because it is not a named paper. It informs both the answers and the interview.',
          ],
          [
            'Physical standards and medical',
            'The standards in the notification, prepared for from the start.',
            'Deferring them, since this service has requirements a purely written preparation ignores.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Where practice effort belongs in a two-optional examination.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Prelims fine, optional answers unwritten',
            'The optionals carry the marks and get the least practice.',
            'Write in both optionals from the first month, not after the prelims.',
          ],
          [
            'One optional far stronger than the other',
            'The weaker one caps the total.',
            'Give the weaker optional the larger share of writing practice.',
          ],
          [
            'Answers fluent but general',
            'Specificity is what scores in a subject paper.',
            'Name the study, the classification, the figure or the case in every answer.',
          ],
          [
            'No external reading of your answers',
            'Self-marking a subject answer is unreliable.',
            'Have optional answers read by someone who knows the subject.',
          ],
          [
            'Physical preparation absent',
            'A requirement of this service that a written preparation overlooks.',
            'Put it on the same calendar as the writing practice.',
          ],
        ],
      },
    ],
  },

  afcat: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a short, harshly penalised paper with a board stage after it.',
        head: ['Section', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'English',
            'Grammar applied through practice, comprehension at pace, and vocabulary from sustained reading.',
            'Advanced literary material.',
          ],
          [
            'General awareness',
            'History, geography, polity, economy, science, sports, culture, current affairs and defence-related material.',
            'Depth in one subject; the section is broad and quick.',
          ],
          [
            'Numerical ability',
            'School arithmetic — percentage, ratio, average, profit and loss, time and work, simple interest — practised for speed.',
            'Advanced mathematics, which the paper does not reach.',
          ],
          [
            'Reasoning and military aptitude',
            'Verbal and spatial reasoning practised deliberately, since the spatial half is unfamiliar to most candidates.',
            'Only verbal reasoning practice, which leaves half the section untouched.',
          ],
          [
            'Board and, where applicable, pilot aptitude',
            'The board process, and for flying-branch candidates the aptitude test, which has its own character and limited retake rules.',
            'Assuming the written paper is the selection.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Practising a paper where the deduction is severe.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Attempts high, score low',
            'Guessing in a paper that penalises heavily.',
            'Attempt only what you can defend; a lower attempt count usually scores higher here.',
          ],
          [
            'Spatial reasoning weak',
            'The half of the reasoning section candidates skip.',
            'Drill it specifically; it is mechanical and improves quickly.',
          ],
          [
            'Numerical section slow',
            'Calculation rather than method.',
            'Daily arithmetic drill on paper.',
          ],
          [
            'Awareness section variable',
            'Static material revised irregularly.',
            'Short daily revision of a compact sheet.',
          ],
          [
            'Board preparation deferred',
            'It carries the outcome and cannot be compressed.',
            'Start reading widely and forming views alongside the written preparation.',
          ],
        ],
      },
    ],
  },

  agniveer: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a recruitment with a written stage and a demanding physical stage.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General knowledge and awareness',
            'Static pairs, basic history, geography, polity and current affairs at the level the entry sets.',
            'Depth in any subject.',
          ],
          [
            'General science',
            'School-level physics, chemistry and biology, covered completely.',
            'Anything above the level the entry examines.',
          ],
          [
            'Mathematics',
            'School arithmetic and basic algebra and geometry, practised for speed.',
            'Advanced mathematics.',
          ],
          [
            'Trade or entry-specific material',
            'The syllabus for the specific entry you are eligible for, which differs between entries.',
            'Preparing a general syllabus when the entry has a specific one.',
          ],
          [
            'Physical standards and medical',
            'The events, standards and medical requirements for your entry, trained for from the first month with margin.',
            'Training to exactly the prescribed standard, which leaves no room on the day.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Balancing written practice against physical preparation.',
        head: ['What you see', 'What it means', 'What to change'],
        rows: [
          [
            'Written scores fine, training irregular',
            'The most common way this recruitment is lost.',
            'Fixed weekly training schedule, kept in the same calendar as the study plan.',
          ],
          [
            'Science below half',
            'The school syllabus sampled rather than finished.',
            'Work through it chapter by chapter.',
          ],
          [
            'Mathematics slow',
            'Calculation speed.',
            'Daily drill; the level of the mathematics is not the problem.',
          ],
          [
            'Entry-specific content untouched',
            'A general preparation for a specific entry.',
            'Read the syllabus for your own entry and prepare to that.',
          ],
          [
            'Training to the exact standard',
            'No margin on the day, when conditions are worse than in practice.',
            'Train above the prescribed figure so the standard is comfortable.',
          ],
        ],
      },
    ],
  },

  police: {
    'study-material': [
      {
        type: 'table',
        caption: 'Reading for a state police recruitment, where the state layer is the differentiator.',
        head: ['Area', 'Read this', 'Do not spend time on'],
        rows: [
          [
            'General studies',
            'History, geography, polity, economy and general science at the level your state’s paper sets, from one source per subject.',
            'National-level depth beyond what the paper reaches.',
          ],
          [
            'The state layer',
            'Your own state’s history, geography, economy, administration, schemes and culture — assembled from the state’s own publications and past papers.',
            'National compilations, which do not cover a state at the depth its own paper examines.',
          ],
          [
            'Reasoning and arithmetic',
            'A question bank drilled in short daily sets; these are quick, reliable marks.',
            'Extended theory.',
          ],
          [
            'Law and police-specific material',
            'Where the notification prescribes it — basic criminal law, procedure and the acts the force operates under.',
            'Skipping it because it is unfamiliar. It is finite and directly examinable.',
          ],
          [
            'Physical standards, events and medical',
            'The measurement standards and the events themselves, trained for from the first month, with the document requirements checked early.',
            'General fitness in place of event rehearsal.',
          ],
        ],
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a police recruitment practice result across both tracks.',
        head: ['Pattern', 'Cause', 'Correction'],
        rows: [
          [
            'General sections fine, state questions missed',
            'The block that differentiates candidates is under-prepared.',
            'Build the state file and test it separately, fortnightly.',
          ],
          [
            'Arithmetic and reasoning slow',
            'Familiar material, insufficient drilling.',
            'Short daily sets rather than occasional long ones.',
          ],
          [
            'Law questions conceded',
            'Unfamiliarity treated as difficulty.',
            'Work the prescribed acts and past questions; the material is closed.',
          ],
          [
            'Physical events untested under timing',
            'General fitness mistaken for readiness.',
            'Rehearse the events themselves, weekly, above the standard.',
          ],
          [
            'Training paused during written preparation',
            'The two tracks are being run sequentially rather than together.',
            'Keep the training log beside the mock scores and never pause one for the other.',
          ],
        ],
      },
    ],
  },
}

export default UPSC_DEFENCE_DEPTH
