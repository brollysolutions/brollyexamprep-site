/**
 * Per-paper written guidance for the mock-test pages.
 *
 * The instructions panel on a test page states the question count, the timing
 * and the marking, and the shared "use the result" section explains how to
 * review any attempt. What neither could say is anything specific to the exam
 * the paper is modelled on — which section decides the result, what the
 * marking rate implies for guessing on this particular paper, and what a
 * score on a shortened set does and does not tell a candidate about the real
 * one.
 *
 * That is what lives here, keyed by test slug, and it is written per exam
 * rather than templated, so the SSC CGL page and the CTET page do not read as
 * the same page with a name substituted.
 *
 * Editorial rules: no cutoff, no vacancy count, no predicted score, and no
 * claim that these shortened diagnostics are full-length papers. Where a
 * figure would move between cycles, the text points at the notification.
 */

const GUIDES = {
  'ssc-cgl': {
    heading: 'What this SSC CGL set is measuring',
    intro:
      'Tier 1 is a speed paper with four equally weighted sections and no sectional timing, which means the whole of it is a single allocation problem. This shortened set keeps the section split and the marking so that the allocation decision is the same one.',
    blocks: [
      {
        type: 'list',
        title: 'Read these four numbers off your result',
        items: [
          {
            text: 'Accuracy, section by section',
            note: 'with a deduction for every wrong answer, the section where you are least accurate is costing you twice — once in the mark forgone and once in the penalty.',
          },
          {
            text: 'Where the minutes went',
            note: 'quantitative aptitude absorbs time disproportionately, and candidates routinely finish it having left answerable general awareness questions unread. General awareness is the fastest section in the paper and should be attempted early.',
          },
          {
            text: 'Blanks versus wrong answers',
            note: 'a blank costs nothing and a wrong answer costs the deduction. If your wrong answers outnumber your blanks by a wide margin, you are guessing past the point where the guess is informed.',
          },
          {
            text: 'English accuracy in particular',
            note: 'it is the section most often treated as filler and the one where a small amount of grammar work moves a score quickly.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Tier 1 screens; Tier 2 decides',
        text: 'Marks from Tier 1 do not build the final merit list — Tier 2 does. That has a direct planning consequence: once your Tier 1 score is comfortably clear of the level that gets called, further effort belongs in Tier 2 preparation rather than in raising a Tier 1 score that will be discarded. Confirm the current stage structure in the notification for your cycle.',
      },
    ],
  },

  'sbi-po': {
    heading: 'What this SBI PO set is measuring',
    intro:
      'The prelims is sectionally timed, which changes the whole strategy: minutes cannot be moved from a section you find easy to one you do not. This set uses the same subject mix so the sectional discipline is the thing being practised.',
    blocks: [
      {
        type: 'list',
        title: 'What to look for in the result',
        items: [
          {
            text: 'Whether every section cleared on its own',
            note: 'sectional timing means each section is a self-contained paper. A strong overall score built on one weak section is a failure mode, not a result.',
          },
          {
            text: 'Reasoning attempts against reasoning accuracy',
            note: 'puzzles and seating arrangement carry the largest block of reasoning marks and the largest risk of a set consuming several minutes for nothing. Set an abandonment limit and check whether you kept to it.',
          },
          {
            text: 'Data interpretation speed',
            note: 'most quantitative marks in a banking paper sit in DI sets, and most DI time is lost to arithmetic that approximation would have settled.',
          },
          {
            text: 'English accuracy',
            note: 'English is where sectional standards eliminate otherwise strong candidates, because it is the section most often left until last.',
          },
        ],
      },
      {
        type: 'note',
        title: 'The prelims is a filter',
        text: 'Marks from the preliminary stage do not carry into the final merit in the SBI PO selection — mains and the interview stage do. Prepare for mains from the beginning rather than after the prelims result, and confirm the current stage structure and marking in the notification for your cycle.',
      },
    ],
  },

  'ibps-po': {
    heading: 'What this IBPS PO set is measuring',
    intro:
      'IBPS PO recruits across participating banks through a common process, and the prelims is a sectionally timed screening paper. The value of this shortened set is in the section-by-section reading rather than in the total.',
    blocks: [
      {
        type: 'list',
        title: 'What the result should tell you',
        items: [
          {
            text: 'Your weakest section, treated as the priority',
            note: 'where each section is separately timed and separately assessed, the weakest one caps you regardless of how strong the others are.',
          },
          {
            text: 'How many reasoning sets you completed',
            note: 'rather than how many questions you answered. Puzzle sets are all-or-nothing in practice: a half-solved arrangement usually yields nothing.',
          },
          {
            text: 'Arithmetic accuracy under time',
            note: 'the quantitative section is decided by calculation fluency more than by method knowledge, and the fix is daily drill rather than more topics.',
          },
          {
            text: 'Whether you left anything unread',
            note: 'unread questions in a section you had time for is a pacing problem, and it is the cheapest one on this list to fix.',
          },
        ],
      },
      {
        type: 'note',
        title: 'One preparation, several banking recruitments',
        text: 'IBPS PO, IBPS Clerk, SBI PO and SBI Clerk draw on the same three subject areas at different depths, so a candidate preparing for one is largely prepared for the others. What differs is the pattern, the timing and the stage structure — check each in its own notification rather than assuming they match.',
      },
    ],
  },

  'rrb-ntpc': {
    heading: 'What this RRB NTPC set is measuring',
    intro:
      'The NTPC first stage is a computer-based test with a large general awareness component and no sectional timing, which makes it a very different allocation problem from a banking paper. This set keeps the subject mix and the marking rate.',
    blocks: [
      {
        type: 'list',
        title: 'What to take from the result',
        items: [
          {
            text: 'General awareness accuracy',
            note: 'it is the largest and fastest-scoring block in the paper. A candidate weak here is trying to make up the difference in mathematics, which costs far more minutes per mark.',
          },
          {
            text: 'Time spent in mathematics',
            note: 'the arithmetic is standard and the risk is not difficulty but over-investment. Watch how many minutes went in for how many marks out.',
          },
          {
            text: 'Reasoning speed',
            note: 'general intelligence questions in this paper are mostly quick and mechanical. Slow reasoning usually means the question forms are unfamiliar rather than hard.',
          },
          {
            text: 'Your wrong-to-blank ratio',
            note: 'there is a deduction for wrong answers, so an informed guess between two options is worth taking and a blind guess is not.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Normalisation and multiple shifts',
        text: 'Railway recruitment is conducted across many shifts, and scores are normalised to account for differences in difficulty between them. That means a raw mark on any practice paper — including this one — cannot be read as a position relative to other candidates. Use it to compare yourself against yourself over time, which is the only comparison it supports.',
      },
    ],
  },

  'upsc-cse': {
    heading: 'What this UPSC prelims set is measuring',
    intro:
      'The civil services preliminary examination is a screening test whose marks do not enter the final merit, and it is answered largely by elimination rather than by recall. This shortened set is built to practise that elimination.',
    blocks: [
      {
        type: 'list',
        title: 'What the result is actually showing',
        items: [
          {
            text: 'How often elimination worked',
            note: 'for each question you answered without knowing the fact outright, note whether you narrowed the options and whether the narrowing was right. That skill, not recall, is what the paper rewards.',
          },
          {
            text: 'Your accuracy on statement-based questions',
            note: 'the “how many of the statements are correct” form is where most marks are lost, because a single uncertain statement makes the whole question a guess.',
          },
          {
            text: 'Where your wrong answers came from',
            note: 'a wrong answer on a topic you have studied is a comprehension problem; a wrong answer on a topic you have not is a coverage problem. They need different responses.',
          },
          {
            text: 'How many you left blank',
            note: 'with a deduction for wrong answers, the number of blanks is a strategy decision rather than an accident, and it should be a decision you made before the paper rather than during it.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Prelims marks do not survive the stage',
        text: 'The preliminary examination decides who writes the mains and contributes nothing to the final ranking. Candidates who spend a full year optimising a prelims score arrive at a descriptive examination having never written a timed answer. Begin mains answer practice from the start, and treat the prelims as a filter to pass rather than a paper to top.',
      },
    ],
  },

  nda: {
    heading: 'What this NDA set is measuring',
    intro:
      'The written examination has two papers — mathematics, and a general ability test with a large English component — and the written stage is only half of the selection. This set covers the written side; the rest of the process is not a paper at all.',
    blocks: [
      {
        type: 'list',
        title: 'What to read off the result',
        items: [
          {
            text: 'Mathematics accuracy at senior-secondary level',
            note: 'the paper is set to the school syllabus and rewards fluency with standard results rather than ingenuity. Slow working here usually means formulas being reconstructed instead of recalled.',
          },
          {
            text: 'English performance specifically',
            note: 'English carries a large share of the general ability paper and is regularly under-prepared by candidates focused on mathematics and general knowledge.',
          },
          {
            text: 'General knowledge spread',
            note: 'the general ability paper draws on physics, chemistry, general science, history, geography and current events. A candidate strong in one and absent in three loses marks that are individually cheap to recover.',
          },
          {
            text: 'Your guessing discipline',
            note: 'there is a deduction for wrong answers in the written papers. Decide in advance how narrow a guess has to be before you take it.',
          },
        ],
      },
      {
        type: 'note',
        title: 'The written examination is not the selection',
        text: 'Candidates who clear the written stage face the Services Selection Board process and a medical examination, and a substantial share of the outcome is decided there rather than on the papers. Physical fitness and medical standards in particular take months to prepare for and cannot be arranged after a result. Read the current notification for the standards that apply to you.',
      },
    ],
  },

  ctet: {
    heading: 'What this CTET set is measuring',
    intro:
      'The teacher eligibility test is not a subject examination with some teaching questions attached. It is a pedagogy examination that uses subject content as its material, and that distinction is where most candidates lose marks.',
    blocks: [
      {
        type: 'list',
        title: 'What the result should tell you',
        items: [
          {
            text: 'Child development and pedagogy accuracy',
            note: 'this section is answered badly by candidates who answer from their own opinions about teaching rather than from the theory being tested. If your accuracy here is low, the fix is learning the named positions, not more subject study.',
          },
          {
            text: 'Whether you lost two-option questions',
            note: 'pedagogy questions are rarely decided between one right answer and three absurd ones. They are decided between a good answer and a better one, and that discrimination is trainable.',
          },
          {
            text: 'Subject accuracy at school level',
            note: 'a graduate reading subject content at graduate depth misses what the school syllabus actually contains. The state and national school textbooks for the classes in your paper are the right source.',
          },
          {
            text: 'Language section performance',
            note: 'the language papers test grammar, comprehension and language pedagogy rather than fluency, which is why confident speakers still lose marks here.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Eligibility is not appointment',
        text: 'Clearing a teacher eligibility test qualifies a candidate to be considered; it does not appoint them. Recruitment is a separate process conducted by the appointing authority, and in several states the eligibility score is combined with the recruitment score in fixing merit — which is why a bare pass starts a candidate behind. Check the position that applies to your state and your notification.',
      },
    ],
  },

  'state-psc': {
    heading: 'What this state PSC set is measuring',
    intro:
      'State commission prelims papers share a common spine — polity, history, geography, economy, environment, science and reasoning — and then add a state layer that national preparation does not cover. This set exercises the spine; the state layer is what you build separately.',
    blocks: [
      {
        type: 'list',
        title: 'What to take from the result',
        items: [
          {
            text: 'Accuracy on the national spine',
            note: 'this is the portion shared across every state commission and with national recruitment papers, so a weakness here costs you in every examination you sit.',
          },
          {
            text: 'How you handled statement-based questions',
            note: 'state prelims papers increasingly use the multi-statement form, which turns partial knowledge into a guess. Note how many you answered by elimination and how many by recall.',
          },
          {
            text: 'Whether reasoning cost you time',
            note: 'most state papers carry a reasoning and data block that is quick marks for a prepared candidate and a time sink for an unprepared one.',
          },
          {
            text: 'What this paper could not measure',
            note: 'your own state’s history, geography, economy, schemes and administrative arrangements. That is the block that separates candidates in a state examination, and no general paper reaches it.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Build the state layer separately, and test it separately',
        text: 'A general mock dilutes state-specific questions across a full paper, which hides how you are doing on the material that actually differentiates candidates. Keep a separate short test of your own state’s content — history, geography, economy, schemes, and any state formation or movement material your commission examines — and sit it fortnightly. It is finite material and it is the fastest score to move.',
      },
    ],
  },
}

/** Written guidance for a paper, or undefined where none exists yet. */
export function getTestGuide(slug) {
  return GUIDES[slug]
}

/**
 * Guidance for the exam-family listing pages — /mock-tests/ssc/ and the rest.
 *
 * A family page lists whichever papers exist for that family and would
 * otherwise be a set of cards with a heading. What it can usefully add is the
 * thing a candidate needs before choosing a paper: how testing should be
 * scheduled for this family of examinations, and what the family's own
 * structure means for how a result should be read.
 *
 * Keyed by the family slug used in the "Find by exam" nav links.
 */
const FAMILY_GUIDES = {
  ssc: {
    heading: 'How to schedule mock tests for SSC recruitment',
    intro:
      'SSC papers are speed papers. The syllabus is not deep, the questions are not individually hard, and results turn on how many correct answers a candidate can produce per minute under a deduction rule. That makes testing frequency unusually important here.',
    blocks: [
      {
        type: 'steps',
        title: 'A testing rhythm that works for a speed paper',
        items: [
          {
            title: 'One full-length paper a week, from the start.',
            text: 'Not once the syllabus is covered — from the start. In a speed paper, exam craft is a large share of the score and it is built only by sitting papers.',
          },
          {
            title: 'Two sectional tests midweek.',
            text: 'On the two sections your last full paper was weakest in. Sectional tests isolate a problem that a full paper only reports.',
          },
          {
            title: 'A daily calculation drill of fifteen minutes.',
            text: 'Tables, squares, fraction-to-percentage equivalents. This is the single habit that moves an SSC quantitative score fastest and it is not a test.',
          },
          {
            title: 'An error log the same day, every time.',
            text: 'Cause, not topic: did not know, misread, wrong method, calculation slip, ran out of time. Five causes, five different fixes.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Which tier are you actually preparing for?',
        text: 'In several SSC recruitments the first tier screens and a later tier builds the merit list. Once a Tier 1 score is comfortably clear, further effort belongs in the tier that decides the result. Confirm the stage structure for your recruitment in its own notification, because it does change between cycles.',
      },
    ],
  },

  banking: {
    heading: 'How to schedule mock tests for banking recruitment',
    intro:
      'Banking prelims papers are sectionally timed, which makes them a different exercise from any paper with a single clock. Minutes cannot be moved between sections, so a candidate has to be independently competent in reasoning, quantitative aptitude and English rather than strong overall.',
    blocks: [
      {
        type: 'list',
        title: 'What sectional timing changes about practice',
        items: [
          {
            text: 'Every section is its own paper',
            note: 'and should be practised to its own clock. Practising a mixed set without sectional limits rehearses a paper you will not sit.',
          },
          {
            text: 'The weakest section caps you',
            note: 'so a strong total built on one weak section is a failure mode. Study time follows the weakest section, not the most enjoyable one.',
          },
          {
            text: 'Set selection matters in reasoning',
            note: 'puzzles and arrangements are effectively all-or-nothing. Choosing which sets to attempt in the first minute is a trainable skill and it is worth more than another method.',
          },
          {
            text: 'Approximation matters in quantitative aptitude',
            note: 'most data interpretation questions ask which is larger or roughly how much. Computing exactly is how minutes disappear.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Prepare for mains from the beginning',
        text: 'In the major banking recruitments the preliminary stage screens and does not carry into the final merit. Candidates who prepare only for prelims and then start mains preparation after the result have compressed the stage that actually decides the outcome into a few weeks. Confirm the current stage structure in your own notification.',
      },
    ],
  },

  upsc: {
    heading: 'How to use mock tests for UPSC examinations',
    intro:
      'The civil services preliminary paper is answered mostly by elimination rather than by recall, and its marks do not enter the final ranking. Both facts change what a mock test is for here.',
    blocks: [
      {
        type: 'list',
        title: 'What to measure, beyond the score',
        items: [
          {
            text: 'Elimination success rate',
            note: 'for every question answered without knowing the fact outright, record whether narrowing the options produced the right answer. That is the skill the paper actually tests.',
          },
          {
            text: 'Your blank count as a decision',
            note: 'with a deduction for wrong answers, how many questions you leave is a strategy fixed before the paper rather than an accident during it.',
          },
          {
            text: 'Accuracy on multi-statement questions',
            note: 'the form where partial knowledge becomes a guess, and where most prelims marks are lost.',
          },
          {
            text: 'Whether mains practice is happening at all',
            note: 'the merit list is built on descriptive papers. A candidate who has taken thirty prelims mocks and written no timed answers has measured the wrong thing thirty times.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Defence and forest service papers are related but not identical',
        text: 'Several examinations conducted by the commission share general studies ground with the civil services prelims but differ in structure, in the weight given to mathematics or English, and in the non-written stages that follow. Practice transfers; strategy does not. Read the notification for the examination you are actually sitting.',
      },
    ],
  },

  railways: {
    heading: 'How to use mock tests for railway recruitment',
    intro:
      'Railway computer-based tests are conducted across many shifts and scores are normalised for difficulty between them. That has a direct consequence for practice: a raw mark on any mock cannot be read as a position relative to other candidates, only as a position relative to your own previous attempts.',
    blocks: [
      {
        type: 'list',
        title: 'What actually moves a railway score',
        items: [
          {
            text: 'General awareness breadth',
            note: 'the largest and fastest-scoring block in most railway papers. A candidate weak here is trying to recover the difference in mathematics, at several times the cost per mark.',
          },
          {
            text: 'Arithmetic speed rather than difficulty',
            note: 'the mathematics is standard. The risk is over-investment, so track minutes spent against marks earned rather than accuracy alone.',
          },
          {
            text: 'Familiarity with the reasoning forms',
            note: 'general intelligence questions here are mostly mechanical. Slowness usually means unfamiliarity rather than difficulty, and it disappears with volume.',
          },
          {
            text: 'Discipline about the deduction',
            note: 'an informed guess between two options is usually worth taking; a blind guess across four is not.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Stages beyond the written test',
        text: 'Depending on the post, railway recruitment can include a further computer-based stage, a typing or aptitude test, a physical efficiency test and document verification. Several of these take months to prepare for and cannot be arranged after a result. Read the stage list in your own notification early.',
      },
    ],
  },

  defence: {
    heading: 'How to use mock tests for defence recruitment',
    intro:
      'For defence entries the written examination is a filter rather than the selection. A substantial share of the outcome is decided at the selection board and the medical examination, and neither can be prepared for after a written result.',
    blocks: [
      {
        type: 'list',
        title: 'What to prepare alongside the papers',
        items: [
          {
            text: 'Physical fitness, from the first month',
            note: 'standards are prescribed and they take months to reach. This is the most commonly conceded stage in defence recruitment and the most avoidable.',
          },
          {
            text: 'Medical standards, checked early',
            note: 'several conditions are correctable given time and disqualifying without it. Reading the medical standards in the notification early is a cheap and consequential hour.',
          },
          {
            text: 'English, which is under-prepared',
            note: 'it carries a large share of the general ability paper and is routinely neglected by candidates focused on mathematics and general knowledge.',
          },
          {
            text: 'The selection board process itself',
            note: 'it assesses reasoning, communication and temperament over several days, and it rewards candidates who know what the stages are before arriving at them.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Read the eligibility clause before anything else',
        text: 'Defence entries carry age bands, marital status conditions, educational requirements and, for some entries, subject requirements at senior-secondary level. They differ by entry and by cycle, they are checked strictly, and they cannot be argued at verification. The notification is the only authority on them.',
      },
    ],
  },

  teaching: {
    heading: 'How to use mock tests for teaching recruitment',
    intro:
      'Teacher eligibility tests are pedagogy examinations that use subject content as their material. A mock is therefore useful mainly for what it shows about pedagogy accuracy, which is the part a subject degree does not prepare a candidate for.',
    blocks: [
      {
        type: 'list',
        title: 'What to look for after a teaching mock',
        items: [
          {
            text: 'Pedagogy accuracy, tracked separately',
            note: 'if it is low, the fix is learning the named theoretical positions rather than more subject revision.',
          },
          {
            text: 'Two-option losses',
            note: 'these questions are decided between a good answer and a better one. Writing one line on why the better option is better, ten questions a day, closes the gap quickly.',
          },
          {
            text: 'Subject accuracy at school level',
            note: 'the paper is set to the school syllabus. Read the textbooks for the classes in your paper rather than your degree material.',
          },
          {
            text: 'Language section performance',
            note: 'grammar, comprehension and language pedagogy — not fluency, which is why confident speakers still lose marks here.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Eligibility and recruitment are separate',
        text: 'Passing an eligibility test qualifies a candidate to be considered. Appointment follows a separate recruitment conducted by the appointing authority, and in several states the eligibility score is combined with the recruitment score in fixing merit. Check the position for your state before treating the eligibility test as a formality.',
      },
    ],
  },

  'state-psc': {
    heading: 'How to use mock tests for state commission examinations',
    intro:
      'A general state PSC mock exercises the national spine — polity, history, geography, economy, environment, science and reasoning — that every state commission shares. It cannot reach the state layer, and the state layer is what separates candidates.',
    blocks: [
      {
        type: 'steps',
        title: 'A two-track testing routine',
        items: [
          {
            title: 'A full general paper weekly.',
            text: 'For the shared spine, pacing and stamina. This is what a general state PSC mock is good for.',
          },
          {
            title: 'A short state-content test fortnightly.',
            text: 'Twenty questions on your own state’s history, geography, economy, schemes and administrative arrangements. Finite material, and the fastest score to move.',
          },
          {
            title: 'A separate reasoning and data drill twice a week.',
            text: 'Most state papers carry this block and it decays fast without use.',
          },
          {
            title: 'Full-length rehearsals once a notification appears.',
            text: 'At the paper count, marks and timing your own notification sets, which differ between commissions.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Where the state layer comes from',
        text: 'No national compilation covers a state at the depth its commission examines. Build it from the commission’s own past papers, the state’s statistical and economic publications, state board textbooks and department pages. Assembling it is slow, and it is the most defensible advantage available in a state examination.',
      },
    ],
  },

  cat: {
    heading: 'How to use mock tests for MBA entrance examinations',
    intro:
      'In an MBA entrance the mock is not primarily a knowledge measurement — it is where set selection and time allocation are learned. Most of the score difference between candidates of similar ability comes from which questions they chose to attempt.',
    blocks: [
      {
        type: 'list',
        title: 'What a mock is for in this family',
        items: [
          {
            text: 'Practising selection explicitly',
            note: 'spend the first minutes of a section ranking the sets, then solve in that order and afterwards check whether the ranking was right. This is the trainable skill.',
          },
          {
            text: 'Learning to abandon',
            note: 'some sets are deliberately not solvable in the time available. Leaving one is a correct decision, not a failure, and it has to be rehearsed.',
          },
          {
            text: 'Building reading stamina',
            note: 'verbal sections set long, dense passages on unfamiliar subjects. Reading speed on easy text does not transfer.',
          },
          {
            text: 'Calibrating precision',
            note: 'most quantitative and data questions ask which is larger or roughly how much. Deciding what precision a question needs before calculating saves more time than any shortcut.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Formats differ across the entrance tests',
        text: 'The major MBA entrance tests differ in section structure, in whether sections are separately timed, in negative marking and in whether a decision-making or general-knowledge component is set. Practice transfers between them; strategy does not. Check the current format for the test you are sitting rather than assuming it matches another.',
      },
    ],
  },

  'jee-neet': {
    heading: 'How to use mock tests for engineering and medical entrances',
    intro:
      'These are syllabus-complete examinations set to the senior-secondary curriculum, and the score is decided by accuracy and speed on standard problems rather than by unusual insight. A mock here is mainly a measurement of problem-solving fluency.',
    blocks: [
      {
        type: 'list',
        title: 'What the result should be read for',
        items: [
          {
            text: 'Time per question, by subject',
            note: 'the subject where minutes disappear is usually the one where formulas are being reconstructed rather than recalled.',
          },
          {
            text: 'Error type rather than error count',
            note: 'unit slips, sign errors and misread data are different problems from conceptual gaps and are fixed far faster.',
          },
          {
            text: 'Chapter coverage against the weighting',
            note: 'build a chapter-frequency table from past papers, and check that your marks are coming from the chapters that actually carry weight.',
          },
          {
            text: 'Whether attempts were left on the table',
            note: 'unread questions at the end of a section are a pacing problem, and the cheapest one on this list to correct.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Confirm the pattern for your own cycle',
        text: 'Section structure, optional questions, the marking scheme and the number of attempts permitted have all changed across recent cycles in this family of examinations. The examination’s own information bulletin is the authority, and preparing to a previous year’s structure is a self-inflicted loss.',
      },
    ],
  },
}

/** Guidance for an exam-family listing page, or undefined where none exists. */
export function getFamilyGuide(slug) {
  return FAMILY_GUIDES[slug]
}

export default GUIDES
