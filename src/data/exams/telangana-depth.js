/**
 * Additional written blocks for the Telangana exam records.
 *
 * Why this file is separate from telangana.js
 * -------------------------------------------
 * The eight Telangana recruitments carried the shortest resource pages on the
 * site — roughly half the body length of the SSC, banking and entrance records
 * — while being the family where this site has the most to say that national
 * platforms do not. Rather than thread several hundred lines of new copy
 * through an already long record file, the extra sections live here and are
 * merged onto the matching resource by telangana.js.
 *
 * Shape: exam slug → resource slug → array of blocks, appended after the
 * blocks already written in telangana.js. Block types are the ones defined in
 * src/components/Blocks.jsx.
 *
 * Editorial rules, same as the parent file: nothing here states a vacancy
 * count, a cutoff, a fee, an exam date, a mark total or an age relaxation,
 * because those are set per cycle by the notification and any figure printed
 * here would age into a falsehood. What is written is the durable shape of
 * each recruitment and the method that shape implies.
 */

/** Reused where a page should send the reader to the source rather than to us. */
function notificationRule(opening) {
  return {
    type: 'note',
    title: 'The notification overrides this page',
    text:
      opening +
      ' Nothing here is a substitute for the notification issued for the cycle you are sitting: that is the document the commission is bound by, and it is where paper counts, marks, syllabus wording, eligibility and reservation are actually fixed.',
  }
}

const DEPTH = {
  /* ── TGPSC Group 1 ─────────────────────────────────────────── */
  'tgpsc-group-1': {
    syllabus: [
      {
        type: 'table',
        caption:
          'The same subject is examined twice at two different depths. The prelims asks whether you know the fact; the mains asks what you can build with it.',
        head: ['Subject', 'What the prelims asks', 'What the mains asks'],
        rows: [
          [
            'Indian polity',
            'Which article, which body, which amendment — a single retrievable fact.',
            'How two institutions interact, and whether a stated arrangement is working, written as an argument with examples.',
          ],
          [
            'Modern history',
            'A date, a session, a leader, an act.',
            'Why a movement took the shape it did and what it changed. Chronology is assumed rather than tested.',
          ],
          [
            'Telangana movement',
            'A named agreement, a year, a leader, an organisation.',
            'The causes of an agitation, the content of a settlement and the reasons it held or failed, reconstructed in prose.',
          ],
          [
            'Economy',
            'A definition, an institution, a scheme name.',
            'The state’s own development problem — irrigation, power, agriculture, revenue — argued with specifics.',
          ],
          [
            'Science and technology',
            'A recent application or development.',
            'The role of a technology in development, plus a data interpretation block that is arithmetic rather than science.',
          ],
          [
            'Geography',
            'A location, resource, river or district.',
            'Physical geography used to explain an economic or social outcome inside the state.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Reading the syllabus with that column split in mind changes what study looks like. A candidate who prepares only the left-hand column can clear the prelims and still write an unmarkable mains, because the mains never asks for the fact on its own — it asks for the fact deployed inside an argument, with a second fact supporting it. The practical test for whether a topic is ready is not whether you can recall it but whether you can write two hundred words on it without notes.',
      },
      {
        type: 'list',
        title: 'The syllabus lines candidates consistently under-read',
        items: [
          {
            text: 'Disaster management',
            note: 'listed inside the environment line and treated as an afterthought. It is a small, closed, highly examinable body of material — the institutional structure, the phases of the cycle and the state-level machinery.',
          },
          {
            text: 'Data interpretation inside the science paper',
            note: 'not a science topic at all. Tables, ratios and percentage change under time pressure, sitting inside a paper that arts graduates already fear and science graduates assume is safe.',
          },
          {
            text: 'The social-issues half of society',
            note: 'caste, gender, tribal questions, migration and welfare policy, examined with the state as the subject rather than the nation.',
          },
          {
            text: 'The qualifying language paper',
            note: 'comprehension, précis, translation and composition. It carries no merit marks and it ends candidacies, because it is the paper nobody schedules practice for.',
          },
        ],
      },
      notificationRule('The wording above describes the shape TGPSC Group 1 has held across recent cycles.'),
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'What the format costs you, in the order it costs it',
        items: [
          {
            text: 'The paper is written by hand, continuously, for hours',
            note: 'and the last answer is written by a hand that has already been writing for two and a half of them. Candidates lose marks at the end of papers rather than at the start, and the fix is physical practice rather than more reading.',
          },
          {
            text: 'Every marked paper is descriptive',
            note: 'so there is no partial credit for recognising the right option. An answer either exists on the page or it does not, which makes a blank the most expensive thing in the examination.',
          },
          {
            text: 'The word limit is a scoring instrument',
            note: 'an answer that runs long is not marked more generously; it consumes the minutes of a later answer instead. Timed practice is what stops the limit being theoretical.',
          },
          {
            text: 'Nothing after the papers can rescue them',
            note: 'the scheme notified for the current cycle carries no interview, so the six marked papers are the whole of the merit list. A weak paper is not recoverable at a later stage, because there is no later stage that carries marks.',
          },
        ],
      },
      {
        type: 'p',
        text: 'One structural asymmetry is worth planning around explicitly. Prelims marks are discarded once the mains list is published, so effort spent moving a prelims score from comfortable to excellent returns nothing at all. The same hours spent on handwritten answer practice move a number that survives into the merit list. Candidates rarely believe this in month two and always believe it in month eleven.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'Building a Group 1 question ledger',
        items: [
          {
            title: 'Take one paper and one spreadsheet.',
            text: 'One row per question. Columns: year, stage, paper, subject, narrow topic, the instruction verb for mains questions, and whether you could answer it today.',
          },
          {
            title: 'Tag topics narrowly.',
            text: '“Six-Point Formula” rather than “Telangana movement”; “Finance Commission” rather than “polity”. A tag broad enough to cover forty questions tells you nothing about where to study.',
          },
          {
            title: 'Repeat across as many cycles as the archive holds.',
            text: 'Papers issued under the TSPSC name belong in the same ledger. The commission was renamed with the state style in 2024; the examination it conducts did not change with the letterhead.',
          },
          {
            title: 'Sort by tag count and read the top twenty rows.',
            text: 'That list is the syllabus in the order the commission actually weights it, which is not the order the syllabus document prints it in.',
          },
          {
            title: 'Then sort by the “could I answer this today” column.',
            text: 'High frequency plus low confidence is the highest-return study available to you. Work down that list and nothing else until it is short.',
          },
        ],
      },
      {
        type: 'p',
        text: 'The ledger has a second use that matters more at the mains. Group the mains questions by their instruction verb — describe, examine, critically examine, discuss, analyse — and write down what each demands structurally. “Examine” wants the case and the counter-case; “critically examine” wants a judgement at the end; “discuss” tolerates breadth. Markers are reading for whether you obeyed the verb, and the verbs recur far more predictably than the topics do.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'How to read a Group 1 mock result. The score is the least informative number on the sheet.',
        head: ['What you observe', 'What it usually means', 'What to change'],
        rows: [
          [
            'High accuracy, low attempts',
            'You are reading every option before committing. Knowledge is fine; decision speed is not.',
            'Practise a fixed commit rule on questions you know, to buy minutes for the ones you do not.',
          ],
          [
            'High attempts, low accuracy',
            'You are guessing past the point where the guess is informed.',
            'Mark every question you guessed and study only those topics. Do not raise attempts further.',
          ],
          [
            'Telangana questions missed disproportionately',
            'The state layer is the gap, and it is the one national material will not close.',
            'Move state history, geography and the movement to the front of the daily schedule for a month.',
          ],
          [
            'Mains answers unfinished',
            'Writing speed rather than knowledge — the most common single failure in this examination.',
            'One handwritten answer daily at twenty minutes, every day, until the paper finishes itself.',
          ],
          [
            'Essay marked lower than expected',
            'Usually structure and balance rather than content.',
            'Plan for five minutes before writing, and keep the plan visible in the margin.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'A mains mock is only a mock if it is written by hand, to time, in one sitting, and then marked by someone who is not you — or, failing that, marked by you a week later when you have forgotten what you meant to say. An answer that made sense while you were writing it and does not make sense seven days on is an answer a marker would also have failed to follow.',
      },
    ],
    preparation: [
      {
        type: 'defs',
        items: [
          [
            'File one — the movement file',
            'Everything on the Telangana movement and state formation, built from past questions rather than from a book: the periodisation, the agreements and their exact content, the agitations and what triggered each, the organisations and the people. It should grow for six months and shrink for six, until it is short enough to read in an evening.',
          ],
          [
            'File two — the current-affairs note',
            'A page a day in your own words, national and state developments together, with the source and the date on every entry. Its purpose is not coverage; it is having sentences you have already written when a question needs them.',
          ],
          [
            'File three — the answer bank',
            'Your own handwritten answers, dated, with the time taken written at the top. Reread it monthly. Watching your own answers get shorter, better organised and faster is the only reliable evidence that the preparation is working.',
          ],
        ],
      },
      {
        type: 'list',
        title: 'Know your own district, even though there is no interview',
        items: [
          {
            text: 'The scheme ends at the written papers',
            note: 'there is no interview and no personality test under the current notification, so none of the preparation below is rehearsal for a board. It is material that keeps turning up inside the marked papers instead.',
          },
          {
            text: 'Know your own district',
            note: 'its history, economy, crops, industries, administrative problems and the schemes running in it. A candidate who can name a real irrigation project, a real revenue problem and a real welfare scheme writes better essay and governance answers than one working entirely from generalities.',
          },
          {
            text: 'Hold a position on the state’s live administrative debates',
            note: 'irrigation and water sharing, urban expansion, revenue administration, welfare delivery. Paper I is an essay paper and Paper III is governance; both reward a position argued with specifics over a summary of both sides.',
          },
          {
            text: 'Keep a file of state-specific examples',
            note: 'a scheme, a district statistic, a court decision, a policy that worked and one that did not. Examples are what separate a competent answer from a generic one, and they are the part of preparation most candidates leave to memory.',
          },
        ],
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'Assembling the Telangana layer from primary sources',
        items: [
          {
            text: 'The state’s own statistical and economic publications',
            note: 'the socio-economic outlook and statistical abstract published by the state carry district-level figures on agriculture, irrigation, power and demography that make a mains answer specific rather than general.',
          },
          {
            text: 'Government orders and department pages',
            note: 'for how a scheme is actually structured rather than how a summary describes it. Department sites hold the guidelines that answer “how does this work” questions.',
          },
          {
            text: 'The commission’s own archive',
            note: 'past papers, syllabus documents and notifications. This is the only source that tells you what has actually been asked rather than what could be.',
          },
          {
            text: 'State-published history and culture material',
            note: 'for the dynasties, monuments, literature and crafts that national history books cover in a paragraph and the mains examines in a full question.',
          },
          {
            text: 'Contemporary reportage for the movement',
            note: 'read alongside a single narrative account, so the agreements are read in their own words rather than through somebody’s summary of them.',
          },
        ],
      },
      {
        type: 'note',
        title: 'One source per layer, read twice',
        text: 'The failure mode in Group 1 reading is not too little material; it is four half-read books on the same subject. A single source finished and revised twice produces a chronology you can write out. Four sources sampled produce a set of impressions that collapse the moment a question asks for order and detail.',
      },
    ],
  },

  /* ── TGPSC Group 2 ─────────────────────────────────────────── */
  'tgpsc-group-2': {
    syllabus: [
      {
        type: 'p',
        text: 'The Group 2 syllabus is best read as three bodies of material that behave completely differently under preparation. General studies is broad and shallow and rewards coverage. The Telangana movement material is narrow and deep and rewards a single well-built file. Economy, society and governance sit between them and reward being able to connect a national policy to its state implementation. Splitting study time by those three behaviours works considerably better than splitting it evenly by paper.',
      },
      {
        type: 'list',
        title: 'What the state layer actually contains',
        items: [
          {
            text: 'Telangana history from the Satavahanas onwards',
            note: 'the Kakatiyas, the Qutb Shahis and the Asaf Jahi period, examined for administration, architecture, literature and language policy rather than as a list of rulers.',
          },
          {
            text: 'The Hyderabad state period',
            note: 'the Nizam’s administration, the peasant armed struggle and the integration of the state. This is the ground the movement material is built on.',
          },
          {
            text: 'The statehood movement in full',
            note: 'the 1956 merger and the Gentlemen’s Agreement, the 1969 agitation, the Six-Point Formula, the revival from the 1990s, and formation in 2014.',
          },
          {
            text: 'Telangana geography and economy',
            note: 'the Deccan plateau, the Godavari and Krishna basins, soils, rainfall, irrigation projects, mineral resources, power, and the state’s industrial and agricultural policy.',
          },
          {
            text: 'Telangana society and culture',
            note: 'festivals including Bathukamma and Bonalu, crafts, literature, folk forms, and the social questions the state’s own policy addresses.',
          },
        ],
      },
      notificationRule('Paper structure has changed across Group 2 cycles.'),
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'Four consequences of an objective, interview-free format',
        items: [
          {
            text: 'Nothing recovers a weak paper',
            note: 'there is no interview to move a borderline candidate and no descriptive paper where a strong writer can outperform. Every paper has to be defended on its own.',
          },
          {
            text: 'Accuracy is close to the whole game',
            note: 'where negative marking applies, a candidate answering fewer questions with high accuracy routinely outranks one who answers everything. Find the marking rule in your notification before deciding an attempt strategy.',
          },
          {
            text: 'The papers are sat close together',
            note: 'so stamina across a short window matters. Practise two full papers in a single day at least a few times before the examination.',
          },
          {
            text: 'The state paper is a whole paper',
            note: 'not a section inside general studies. A candidate weak on it is weak on a fraction of the total that no other paper can offset.',
          },
        ],
      },
      {
        type: 'p',
        text: 'The planning rule that follows is to decide your per-paper attempt policy in advance and rehearse it, rather than deciding it in the hall. A policy expressed as “attempt everything I can justify and leave the rest” survives contact with a hard paper. A policy expressed as a percentage does not, because on a hard paper the last stretch of attempts are all guesses.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'A four-week past-paper cycle',
        items: [
          {
            title: 'Week one — sit two full past papers cold.',
            text: 'No preparation, no lookups, full time. The purpose is a baseline, and it will be uncomfortable.',
          },
          {
            title: 'Week two — tag every question you missed.',
            text: 'By narrow topic, and by cause: did not know, knew and misread, knew and ran out of time. The three have different fixes and mixing them wastes the exercise.',
          },
          {
            title: 'Week three — study only the top ten tags.',
            text: 'Nothing else. The temptation to revise what you already know is strong, and it is the usual reason scores plateau.',
          },
          {
            title: 'Week four — sit two more papers and compare tags.',
            text: 'If the same tags reappear, the study was reading rather than learning. Solve questions on those tags instead of rereading them.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Group 2 has an unusual advantage in the archive. Because Groups 2, 3 and 4 draw on overlapping general studies material, papers from all three are usable practice for the shared portion. Use the Group 3 and Group 4 papers for general studies and current-affairs drilling, and reserve the Group 2 papers themselves for full timed rehearsals, so the most representative material is not exhausted early.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'A Group 2 mock review sheet — one row per paper, filled in on the same day.',
        head: ['What to record', 'Why it is on the sheet'],
        rows: [
          ['Attempted, correct, wrong, blank', 'The four numbers that decide whether your problem is knowledge, speed or judgement.'],
          ['Accuracy on attempted questions', 'The single number most predictive of a real score wherever wrong answers are penalised.'],
          ['Questions answered in the last ten minutes', 'These were taken under pressure. Their accuracy is usually far lower, and that is a pacing problem rather than a knowledge one.'],
          ['Telangana questions right', 'Tracked separately, because this is the block that distinguishes candidates and the one national material misses.'],
          ['Topics of the five worst misses', 'Written as narrow tags and carried straight into next week’s study list.'],
        ],
      },
      {
        type: 'p',
        text: 'Sit mocks at the time of day the examination is actually held. That sounds like superstition and is not: attention, reading speed and arithmetic accuracy are all worse at hours you have never practised in, and a candidate who has only ever taken mocks late at night has no measurement of how they perform in a morning paper.',
      },
    ],
    preparation: [
      {
        type: 'steps',
        title: 'A six-month plan for a candidate who is also working',
        items: [
          {
            title: 'Month one — the state layer, alone.',
            text: 'Telangana history, geography, economy and the movement. Studied first because it is the least crowded material and because it takes the longest to feel secure.',
          },
          {
            title: 'Months two and three — polity, economy, history.',
            text: 'The general studies spine, one subject at a time to completion rather than three in rotation. Finish a subject before opening the next.',
          },
          {
            title: 'Month four — science, environment, geography, current affairs.',
            text: 'The breadth subjects, prepared through questions rather than through reading, because their syllabus has no natural end.',
          },
          {
            title: 'Month five — full papers, twice a week.',
            text: 'Under time, in one sitting. Weekday study is decided entirely by what the weekend’s papers exposed.',
          },
          {
            title: 'Month six — revision of your own notes only.',
            text: 'No new sources. A new book in the final month adds anxiety and displaces revision of material you have already half-learned.',
          },
        ],
      },
      {
        type: 'note',
        title: 'One preparation, three recruitments',
        text: 'Groups 2, 3 and 4 overlap substantially in general studies and in the Telangana layer. A candidate preparing for Group 2 is close to prepared for the other two, and the marginal work is format rather than content — Group 4’s secretarial abilities paper, and Group 3’s own paper structure. Applying to every group you are eligible for costs a fraction of the preparation and multiplies the chances of a result.',
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'A source list that fits an objective paper',
        items: [
          {
            text: 'One general studies source per subject, finished',
            note: 'objective papers reward reliable recall of standard material far more than they reward depth. Depth without completion loses marks to breadth with completion.',
          },
          {
            text: 'The state layer assembled rather than bought',
            note: 'from the commission’s past papers, state department pages and the state’s own statistical publications. There is no single book that covers this at exam depth.',
          },
          {
            text: 'A current-affairs note kept monthly, not daily',
            note: 'for an objective paper, a consolidated monthly review with state and national items together is far more revisable than a daily diary you will never reread.',
          },
          {
            text: 'A question bank, opened early',
            note: 'objective preparation should move to questions within days of starting a topic, because the paper tests recognition under time and reading alone does not build it.',
          },
        ],
      },
      {
        type: 'p',
        text: 'The medium question is worth settling in the first week. Papers are set in English and Telugu, and candidates who read faster in Telugu often prepare in English out of habit and then read the paper slowly. Reading speed in the language you will actually sit the paper in is worth several questions, and it is trainable only by reading in that language from the start.',
      },
    ],
  },

  /* ── TGPSC Group 3 ─────────────────────────────────────────── */
  'tgpsc-group-3': {
    syllabus: [
      {
        type: 'table',
        caption:
          'The same body of material, packaged differently by each group. Read across a row to see how much of one subject a single paper has to carry.',
        head: ['Material', 'In Group 2', 'In Group 3', 'In Group 4'],
        rows: [
          [
            'General studies and current affairs',
            'A paper of its own, with a general abilities block.',
            'Paper I, carrying the reasoning and data interpretation block as well.',
            'Most of the general studies paper.',
          ],
          [
            'History, polity and society',
            'Distributed across papers, with the Constitution given real room.',
            'Concentrated into Paper II alongside social structure and public policy.',
            'Compressed to the level a general studies paper reaches.',
          ],
          [
            'Economy and development',
            'A paper of its own, national and state together.',
            'Paper III, national concepts applied to the state’s economy.',
            'A section rather than a paper.',
          ],
          [
            'The Telangana layer',
            'Substantially a paper of its own.',
            'Inside Papers I and II, at undiminished depth.',
            'Inside general studies, at prelims-level depth.',
          ],
          [
            'Reasoning and abilities',
            'A general abilities component.',
            'Inside Paper I.',
            'A full secretarial abilities paper of its own.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'That table is the argument for preparing by subject rather than by recruitment. The reading list does not change between the groups; only the container does. A candidate whose notes are organised as “polity”, “state economy” and “the movement” can sit whichever recruitment is notified. A candidate whose notes are organised as “Group 3 Paper II” has to rebuild them the moment a different notification appears.',
      },
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'What three papers, and only three, actually means',
        items: [
          {
            text: 'Each paper carries a third of your result',
            note: 'so a single weak paper is more damaging here than in a recruitment with more papers to average across. Study the paper you score worst in, not the one you enjoy.',
          },
          {
            text: 'There is no interview and no descriptive stage',
            note: 'the written papers are the recruitment. Everything after them is verification of what you claimed at application.',
          },
          {
            text: 'Breadth sits in Paper I, depth in Papers II and III',
            note: 'which means Paper I rewards a wide, shallow revision habit and the other two reward finishing subjects properly. The same study routine does not serve both.',
          },
          {
            text: 'The reasoning block is inside a knowledge paper',
            note: 'so time spent on a hard reasoning set is time taken from questions you could have answered from memory. Decide your abandonment rule before the day.',
          },
        ],
      },
      {
        type: 'p',
        text: 'A practical consequence for the hall: work Paper I in two passes rather than straight through. A first pass answering everything you know immediately, and a second pass on what is left, protects the retrievable marks from being stranded behind a reasoning set that ate eleven minutes. Candidates who work straight through routinely leave answerable questions unread at the end of a paper they could have finished.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'Converting another group’s paper into honest Group 3 practice',
        items: [
          {
            title: 'Take the source paper and strip it to your syllabus.',
            text: 'Cross out the questions that come from material Group 3 does not examine. What remains is the practice set.',
          },
          {
            title: 'Reset the clock to your own pace.',
            text: 'Work out the seconds per question your own paper allows, multiply by the number of questions you kept, and use that as the time limit rather than the source paper’s.',
          },
          {
            title: 'Mark depth mismatches instead of discarding them.',
            text: 'A question pitched above your paper’s level is still useful evidence about a topic. Note it as “above level” rather than deleting it, and revisit it if the topic recurs.',
          },
          {
            title: 'Move every state question into the state file.',
            text: 'Telangana geography, history, culture, schemes and the movement, collected out of every paper you work, regardless of which group set it.',
          },
          {
            title: 'Re-sit the stripped paper three weeks later.',
            text: 'A second sitting measures retention rather than exposure, and retention is what the examination pays for.',
          },
        ],
      },
      {
        type: 'p',
        text: 'One caution about the archive. Because Group 3 is notified irregularly, some of the material circulating as “Group 3 previous papers” is in fact reconstructed from memory rather than released by the commission. Reconstructed papers are useful for topic spotting and unreliable for wording, marking and difficulty. Treat the commission’s own published papers and keys as the measurement, and everything else as practice volume.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a three-paper mock. Score the papers separately and never average them.',
        head: ['Pattern in the result', 'The likely cause', 'The correction'],
        rows: [
          [
            'Paper I weak, Papers II and III fine',
            'Current affairs and the reasoning block, which decay without weekly contact.',
            'Twenty minutes daily on current affairs; two timed reasoning sets a week.',
          ],
          [
            'Paper II weak',
            'The Constitution and social policy studied by reading rather than by questions.',
            'Move to a question bank on polity and society for a fortnight; stop rereading.',
          ],
          [
            'Paper III weak',
            'National economic concepts understood, state application not.',
            'Work through the state’s own economic publications and tie every concept to a state example.',
          ],
          [
            'All three within a few marks of each other, and low',
            'A coverage problem rather than a subject problem.',
            'Return to finishing subjects one at a time. Rotation across three subjects at once is the usual cause.',
          ],
          [
            'Good on topic tests, poor on full papers',
            'Stamina and pacing, not knowledge.',
            'Sit full papers back to back on one day, weekly, until the drop-off disappears.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Keep the marks from every mock in one sheet with the date, and plot nothing else. The useful signal is the slope over two months, not any single score. A candidate whose scores move sideways for eight weeks is revising rather than learning, and the correction is to replace reading time with question time — not to sit more mocks.',
      },
    ],
    preparation: [
      {
        type: 'defs',
        items: [
          [
            'The subject notes',
            'Organised by subject and never by recruitment: polity, modern history, geography, economy, science and environment. Written once, revised repeatedly, and used unchanged for whichever TGPSC recruitment opens.',
          ],
          [
            'The Telangana file',
            'One file for the state layer across every group — history and culture, geography, the economy, state schemes and the statehood movement. It is the most reused document in a Telangana candidate’s preparation and the one worth the most care.',
          ],
          [
            'The abilities drill',
            'Reasoning, analytical ability and data interpretation, practised in short sessions rather than studied. Fifteen minutes twice a week keeps a skill that decays fast and appears in every group’s papers.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The reason to hold that structure is that TGPSC does not notify its recruitments on a predictable calendar. A candidate organised by subject can respond to a notification with a week of format adjustment. A candidate organised by recruitment spends the first month of every notification window rebuilding notes they already had, which is a month taken from practice.',
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'Getting the most out of state board textbooks',
        items: [
          {
            text: 'Read them for the state chapters first',
            note: 'the Telangana history, geography and economy chapters are pitched close to the level the papers examine, and most compiled guides are drawn from them anyway.',
          },
          {
            text: 'Use the exercise questions as a checklist',
            note: 'the end-of-chapter questions name what the book considers the examinable points. Answering them in a line each is faster and more useful than making linear notes.',
          },
          {
            text: 'Do not read them for national subjects at the same depth',
            note: 'for polity and modern history a standard competitive reference goes further. The board texts earn their place on the state material specifically.',
          },
          {
            text: 'Check the edition against current administrative divisions',
            note: 'district boundaries and administrative units in Telangana have been reorganised. Where a text and a current government source disagree on such a detail, the government source is authoritative.',
          },
        ],
      },
      {
        type: 'note',
        title: 'A revision file you can read in one evening',
        text: 'Whatever else you keep, build one document that holds only what you keep forgetting: the dates you confuse, the articles you swap, the schemes whose department you cannot recall, the projects whose river you mix up. Add to it whenever a mock exposes something. By the final month it should be readable in an evening, and it will be worth more than any book on the shelf.',
      },
    ],
  },

  /* ── TGPSC Group 4 ─────────────────────────────────────────── */
  'tgpsc-group-4': {
    syllabus: [
      {
        type: 'list',
        title: 'Secretarial abilities, decomposed',
        items: [
          {
            text: 'Mental ability',
            note: 'series, coding, analogies, classification and arrangement. A closed set of question forms that responds to drilling and to nothing else.',
          },
          {
            text: 'Logical reasoning',
            note: 'statement and conclusion, assumptions, arguments and simple syllogism. The trap is answering from what you believe rather than from what the statement permits.',
          },
          {
            text: 'Comprehension',
            note: 'a short passage with questions answerable from it alone. Straightforward marks, and the reason to practise reading at speed in the language you will sit the paper in.',
          },
          {
            text: 'Re-arrangement of sentences',
            note: 'ordering a scrambled paragraph. A technique rather than knowledge: find the opening sentence, then follow the pronouns and connectives.',
          },
          {
            text: 'Numerical and arithmetical ability',
            note: 'percentages, ratio, averages, interest and simple data reading. School arithmetic under a clock, which is exactly why speed practice beats revision here.',
          },
        ],
      },
      {
        type: 'p',
        text: 'The reason this paper decides Group 4 results is that it is the only one on which candidates differ predictably. General studies rewards months of accumulation and most serious candidates arrive with a similar stock of it. Secretarial abilities rewards a skill almost nobody practises, which means the marks are available to whoever puts in the fifteen minutes a day that the general studies paper cannot absorb anyway.',
      },
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'Planning around a thin margin',
        items: [
          {
            text: 'Two papers means no hiding place',
            note: 'with only two components, a weak paper is half your result. There is no third paper to average against and no interview to recover in.',
          },
          {
            text: 'The field is very large',
            note: 'Group 4 attracts more applicants than any other TGPSC recruitment, which compresses the gap between adjacent ranks. Small numbers of marks move a candidate a long way in the list.',
          },
          {
            text: 'Speed is worth more than in the higher groups',
            note: 'because the questions are individually easier, more candidates can answer them, and the differentiator becomes how many you get through accurately.',
          },
          {
            text: 'Tie-breaking is governed by rule, not by preference',
            note: 'where candidates finish level, the notification and the service rules decide the order. Read that clause rather than assuming it.',
          },
        ],
      },
      {
        type: 'p',
        text: 'One consequence deserves stating plainly: in a recruitment this crowded, the marginal hour is better spent raising accuracy on questions you can already almost do than on learning a new topic. A candidate who converts near-misses into marks moves further up a compressed list than one who adds a subject they will answer two questions from.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'Turning past papers into a secretarial abilities drill',
        items: [
          {
            title: 'Pull every abilities question out of every paper you can find.',
            text: 'Across groups and across years. They are interchangeable, because the question forms are stable even when the topics are not.',
          },
          {
            title: 'Sort them into the five families.',
            text: 'Mental ability, logical reasoning, comprehension, sentence re-arrangement, arithmetic. You now have five drill sets rather than a pile of papers.',
          },
          {
            title: 'Time yourself per family, not per paper.',
            text: 'Twenty questions from one family against a clock tells you where your seconds are going. A mixed paper hides it.',
          },
          {
            title: 'Rebuild the slowest family from scratch.',
            text: 'Learn the standard method for each question form in it, then redo the same set. The second timing is the measurement that matters.',
          },
          {
            title: 'Return to mixed sets only once each family is fast.',
            text: 'Mixed practice tests selection between methods, which is a different skill and worth nothing until the methods themselves are quick.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Keep the arithmetic questions separate from the rest even inside the abilities set. They are the family that most rewards mechanical fluency — tables, fraction-to-percentage conversions, squares — and the one where a candidate can gain seconds on every single question rather than on a few. Fifteen minutes of calculation drill a day changes a Group 4 score more reliably than an hour of general studies revision does.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Reading a Group 4 mock, paper by paper.',
        head: ['What the result shows', 'What it means', 'What to do about it'],
        rows: [
          [
            'General studies fine, abilities poor',
            'The common shape. Knowledge accumulated, skill never drilled.',
            'Fifteen minutes daily on one abilities family, rotating. Stop adding general studies material for a month.',
          ],
          [
            'Abilities fine, general studies poor',
            'Coverage gaps, usually in current affairs and the state layer.',
            'Finish subjects one at a time; keep a monthly current-affairs consolidation rather than a daily diary.',
          ],
          [
            'Both papers fine on topic tests, both poor on full papers',
            'Pacing. You are working comfortably rather than at exam speed.',
            'Practise at the paper’s real seconds-per-question, which will feel uncomfortably fast at first.',
          ],
          [
            'Accuracy falling in the last quarter of a paper',
            'Concentration, not knowledge.',
            'Full-length sittings without breaks, and the same time of day as the examination.',
          ],
          [
            'A plateau across several weeks',
            'Revision has replaced learning.',
            'Switch from reading to solving. Score movement comes from questions attempted, not pages reread.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Because Group 4 has only two papers, a full mock is short enough to sit weekly without disrupting a working week — which removes the usual excuse. Weekly full mocks from three months out, each followed the same evening by an error log, is a routine that fits around a job and outperforms sporadic long study sessions.',
      },
    ],
    preparation: [
      {
        type: 'defs',
        items: [
          [
            'The accumulating half',
            'General studies, current affairs and the Telangana layer. Built by daily contact over months, largely immune to cramming, and the half that also serves Group 2 and Group 3 if you apply to them.',
          ],
          [
            'The drillable half',
            'Secretarial abilities. Built by short daily repetition, improves quickly, decays quickly, and is where a candidate with less time can still gain ground fast.',
          ],
          [
            'The finishing month',
            'No new material. Revision of your own notes, weekly full mocks, and the error log worked backwards from the most recent mock. The purpose of the final month is retention and pace, not coverage.',
          ],
        ],
      },
      {
        type: 'note',
        title: 'Check the qualification clause for your post code, not for the group',
        text: 'Group 4 is graduate-level throughout, but the requirement is set per post code rather than once for the recruitment. In the last cycle some post codes wanted a commerce degree, one wanted B.Com (Computers), and the Ward Officer posts wanted a graduate with a minimum aggregate. A few post codes are reserved for women, and two carry physical measurement requirements. None of that is visible in the general eligibility paragraph — it is in the notification’s own post-code table, which is the part worth reading line by line before you choose what to apply for.',
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'Where to get abilities practice that resembles the paper',
        items: [
          {
            text: 'The commission’s own past papers, across every group',
            note: 'the closest match to the question forms and the phrasing you will meet. Exhaust these before buying anything.',
          },
          {
            text: 'Any standard reasoning and arithmetic question bank',
            note: 'for volume. The topics are common to competitive examinations generally, so the source matters less than the number of questions worked.',
          },
          {
            text: 'A calculation drill you make yourself',
            note: 'tables to twenty, squares to thirty, common fraction-to-percentage equivalents. Fifteen minutes a day, on paper, without a calculator.',
          },
          {
            text: 'Reading practice in your chosen medium',
            note: 'a newspaper page a day, timed, in the language you will sit the paper in. It serves comprehension, sentence re-arrangement and current affairs at once.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Resist buying a Group 4-specific compilation as the primary source. These recruitments draw on the same general studies and abilities material as the rest of the commission’s papers, and a compilation assembled for one recruitment is usually thinner on each subject than a standard subject text. Use one reliable book per subject, and let the past papers rather than a guide decide how much of each subject to revise.',
      },
    ],
  },

  /* ── Telangana teaching posts ──────────────────────────────── */
  'teaching-posts': {
    syllabus: [
      {
        type: 'table',
        caption:
          'The three papers a teaching candidate may sit, and what each is really testing. Exact content is set by the notification for your track.',
        head: ['Paper', 'Who sits it', 'What it tests'],
        rows: [
          [
            'TET Paper I',
            'Candidates seeking to teach classes I to V.',
            'Child development and pedagogy, languages, mathematics and environmental studies, all at primary level but examined pedagogically.',
          ],
          [
            'TET Paper II',
            'Candidates seeking to teach classes VI to VIII.',
            'Child development and pedagogy, languages, and either mathematics and science or social studies, at upper-primary level.',
          ],
          [
            'Recruitment test',
            'Candidates competing for a specific post.',
            'Subject content at the depth of the post, general knowledge, and teaching methodology for the subject.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The distinction that costs candidates marks is between subject content and subject pedagogy. A question asking what photosynthesis is tests content. A question asking which activity best introduces photosynthesis to a class of eleven-year-olds, or what a specific pupil error reveals about their understanding, tests pedagogy. The second kind cannot be answered from subject knowledge alone, and it is a large share of the eligibility papers.',
      },
      {
        type: 'list',
        title: 'The pedagogy material that recurs across both papers',
        items: [
          {
            text: 'How children learn',
            note: 'the major developmental and learning theories, examined for their classroom implications rather than for their authors’ biographies.',
          },
          {
            text: 'Inclusive education',
            note: 'learners with disabilities, learners from disadvantaged groups, and the adjustments a teacher is expected to make. Consistently examined and consistently under-prepared.',
          },
          {
            text: 'Assessment',
            note: 'the difference between assessment of learning and assessment for learning, continuous assessment, and what a wrong answer tells a teacher.',
          },
          {
            text: 'Language across the curriculum',
            note: 'first and second language acquisition, the role of the mother tongue, and language as a barrier in subject teaching.',
          },
          {
            text: 'The rights framework',
            note: 'the entitlements the law creates for a child and the duties it places on a school and a teacher. Examined as applied questions rather than as sections.',
          },
        ],
      },
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'Why the eligibility score is not a formality',
        items: [
          {
            text: 'It has carried weight in the selection',
            note: 'Telangana recruitment has combined the eligibility test score with the recruitment test score in fixing merit. A bare pass therefore starts you behind candidates who treated it as a scoring paper.',
          },
          {
            text: 'The qualifying percentage is a floor, not a target',
            note: 'clearing it makes you eligible. It does not make you competitive, and those are different problems with different preparation.',
          },
          {
            text: 'The certificate has a validity period fixed by rule',
            note: 'which affects when it is worth sitting the eligibility test relative to an expected recruitment. Check the current position before deciding to wait.',
          },
          {
            text: 'The recruitment test is subject-specific',
            note: 'so a candidate with a strong eligibility score and weak subject depth still loses. The two tests need separate preparation, not the same preparation twice.',
          },
        ],
      },
      {
        type: 'p',
        text: 'The sequencing implication is simple and widely ignored. Sit the eligibility test as early as you are qualified to, prepare for it as though the score counts, and use the gap before a recruitment notification to build subject depth rather than to wait. Candidates who postpone the eligibility test until a recruitment is announced end up preparing for both papers in the same weeks, which is the worst available arrangement.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'Reading pedagogy questions properly',
        items: [
          {
            title: 'Separate the content questions from the pedagogy questions.',
            text: 'Count them. Most candidates are surprised by how large the pedagogy share is, and it is the share their subject degree did not prepare them for.',
          },
          {
            title: 'For each pedagogy question, write down why the wrong options are wrong.',
            text: 'These questions are almost never decided between a right answer and three absurd ones. They are decided between a good answer and a better one.',
          },
          {
            title: 'Group them by the principle being tested.',
            text: 'Constructivist learning, assessment for learning, inclusion, language acquisition, error analysis. Five or six principles generate most of the paper.',
          },
          {
            title: 'Learn each principle as a rule you can apply.',
            text: '“The option that has the child doing rather than the teacher telling is usually correct” is a crude rule and it is right more often than a guess.',
          },
          {
            title: 'Then check your rules against a fresh paper.',
            text: 'If a rule fails, it was a pattern in your sample rather than a principle in the subject. Refine it and repeat.',
          },
        ],
      },
      {
        type: 'p',
        text: 'One further use of the archive: work the language sections in both the languages you are eligible to offer before choosing. Candidates commonly assume their stronger conversational language is their stronger examination language, and the two diverge — the paper tests grammar, comprehension and pedagogy of a language rather than fluency in it. An hour spent comparing two past sections settles a choice that affects every subsequent month of preparation.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Diagnosing a teaching-track mock result.',
        head: ['Where the marks are lost', 'The usual reason', 'The correction'],
        rows: [
          [
            'Child development and pedagogy',
            'Answered from personal opinion about teaching rather than from the theory the paper is testing.',
            'Learn the principles as named positions, then practise choosing between two defensible options.',
          ],
          [
            'The language section',
            'Fluency mistaken for grammar and pedagogy knowledge.',
            'Work the grammar and language-pedagogy portions explicitly; fluency does not cover them.',
          ],
          [
            'Subject content at upper-primary level',
            'A graduate reading the material at graduate depth and missing what a school syllabus actually contains.',
            'Read the state school textbooks for the classes you will teach, cover to cover.',
          ],
          [
            'Environmental studies or social studies',
            'Treated as general knowledge rather than as a school subject with its own methodology.',
            'Study the subject from the school syllabus, including how it is meant to be taught.',
          ],
          [
            'Consistent near-misses on two-option questions',
            'The principle is known; the discrimination between good and better is not.',
            'For every such question, write one sentence on why the better option is better. Ten a day for a fortnight.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Sit at least one full mock in each language medium you might offer, early. Reading speed and comfort with subject terminology differ more than candidates expect between media, and the choice is difficult to reverse once preparation material has been assembled around it.',
      },
    ],
    preparation: [
      {
        type: 'defs',
        items: [
          [
            'Content knowledge',
            'What you will teach, at the depth of the class you will teach it to. Built from the state school textbooks for those classes rather than from your degree material, because the paper is set to the school syllabus.',
          ],
          [
            'Pedagogical knowledge',
            'How children learn the subject, what a common error reveals, and which activity teaches which idea. This is the material a subject degree does not supply and the eligibility paper weights heavily.',
          ],
          [
            'Professional knowledge',
            'The curriculum framework, the rights and entitlements the law creates, inclusive education and assessment policy. Finite, learnable, and consistently examined.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'A candidate preparing across all three tracks — eligibility test, government recruitment and residential institutions recruitment — should build the three bodies above once and then treat each notification as a format problem. What differs between the tracks is the depth of subject content and the weight given to methodology, not the material itself. What must be checked separately for each is eligibility, because the training qualification prescribed for a post is not negotiable and cannot be arranged after a notification appears.',
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'The primary documents worth reading in full',
        items: [
          {
            text: 'The state school textbooks for the classes in your track',
            note: 'the single most efficient source, because the papers are set to this syllabus and at this level. Read the ones for the classes you intend to teach cover to cover.',
          },
          {
            text: 'The national curriculum framework',
            note: 'read for its positions on how subjects should be taught and how children should be assessed. Pedagogy questions are frequently a restatement of these positions.',
          },
          {
            text: 'The right to education legislation',
            note: 'entitlements, duties and prohibited practices, read as text rather than through a summary. Applied questions on it are common and answerable.',
          },
          {
            text: 'The notification and syllabus for your own track',
            note: 'the only document that fixes what your paper contains. The three tracks differ, and a syllabus taken from the wrong one wastes months.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Read the school textbook as a teacher, not as a candidate',
        text: 'When you work through a school chapter, stop at each activity and ask what it is for, what a child is likely to get wrong in it, and how you would tell whether they had understood. That habit converts reading into exactly the material the pedagogy questions test, and it costs no extra hours — it changes what the hours you were already spending produce.',
      },
    ],
  },

  /* ── Telangana technical posts ─────────────────────────────── */
  'technical-posts': {
    syllabus: [
      {
        type: 'table',
        caption:
          'How a technical notification divides its paper. The discipline column changes with the post; the general column rarely does.',
        head: ['Component', 'What it covers', 'How it behaves under preparation'],
        rows: [
          [
            'Core discipline paper',
            'The degree-level subjects of the engineering or science discipline the post requires.',
            'Deep and finite. Responds to systematic revision of subjects you have already studied once.',
          ],
          [
            'General studies',
            'Current affairs, polity, economy, geography, science, and the Telangana layer.',
            'Broad and open-ended. Responds to daily contact and to question practice rather than to reading.',
          ],
          [
            'The state layer',
            'Telangana geography, resources, irrigation, power and the statehood movement.',
            'Finite, differentiating, and directly relevant to the departments these posts sit in.',
          ],
          [
            'Departmental context',
            'The irrigation, panchayat raj, public health or municipal system the post works within.',
            'Rarely a syllabus line and frequently useful — for the paper, and unmistakably for the interview stage where one exists.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The characteristic mistake in these recruitments is treating the core paper as revision and the general studies paper as the real work. It is usually the other way round. Core subjects were studied for a degree and can be rebuilt from a formula sheet in weeks; general studies and the state layer are accumulated over months and cannot be compressed. Start the slow half first, and use the core paper as the thing you revise while it accumulates.',
      },
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'What an objective engineering paper rewards',
        items: [
          {
            text: 'Formula recall rather than derivation',
            note: 'there is no space to derive under an objective clock. The working set of formulas has to be immediate, which means written out repeatedly rather than understood once.',
          },
          {
            text: 'Unit discipline',
            note: 'a large share of avoidable errors in technical papers are unit conversions rather than concepts. Practise with mixed units deliberately.',
          },
          {
            text: 'Order-of-magnitude judgement',
            note: 'the ability to see that an option is impossible before computing anything. It converts several questions a paper into ten-second decisions.',
          },
          {
            text: 'Standard values and code provisions',
            note: 'where the discipline uses them. These are memorisable, examinable and routinely neglected because they feel like reference material rather than knowledge.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Confirm two things in your own notification before planning: whether the core paper and the general paper are separately qualified, and what the negative marking rule is. If each paper carries its own qualifying standard, a strong core score cannot rescue a general studies paper below the line, and the time allocation that follows is completely different from the one a combined total would justify.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'Building a topic-weight table for your discipline',
        items: [
          {
            title: 'Collect every technical paper you can find in your discipline.',
            text: 'From this commission and from other state and national technical recruitments at the same level. Question forms travel between them.',
          },
          {
            title: 'Tag each question to a subject and a chapter.',
            text: 'Not to a broad field. “Open channel flow” rather than “fluid mechanics”; “bending moment diagrams” rather than “structures”.',
          },
          {
            title: 'Count the tags and rank the chapters.',
            text: 'The ranking is your revision order. It will not match the order your degree taught the subjects in, and the degree order is not the one to follow.',
          },
          {
            title: 'Mark the chapters you can no longer do.',
            text: 'Rank multiplied by inability is your work list. High weight and low ability first, always.',
          },
          {
            title: 'Rebuild each of those chapters onto one page.',
            text: 'Definitions, formulas, standard values, and the three question forms that actually appear. One page per chapter is the deliverable.',
          },
        ],
      },
      {
        type: 'p',
        text: 'The same tagging exercise done on the general studies half is worth an evening. It will usually show that the state layer and current affairs together account for a larger share of that paper than any single national subject — which is an argument for putting Telangana geography, irrigation and the statehood movement early in the schedule rather than treating them as revision material.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'Diagnosing a two-paper technical mock.',
        head: ['What you see', 'What it usually is', 'What to change'],
        rows: [
          [
            'Core paper slow but accurate',
            'Formulas being reconstructed rather than recalled.',
            'Write the formula sheet from memory daily until it is automatic. Understanding is not the bottleneck.',
          ],
          [
            'Core paper fast but inaccurate',
            'Unit slips and sign errors rather than concept gaps.',
            'Redo the wrong questions writing units at every line. The error rate falls quickly.',
          ],
          [
            'General studies weak, core strong',
            'The common shape for an engineering graduate.',
            'Daily current affairs and a fixed month on the state layer. Stop revising core subjects you already score on.',
          ],
          [
            'Both papers fine separately, poor together',
            'Stamina and switching cost.',
            'Sit both papers back to back at the real timing, weekly.',
          ],
          [
            'Marks concentrated in two or three chapters',
            'Coverage is narrower than the paper.',
            'Work down the weight table rather than deepening chapters you are already strong in.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'A useful drill specific to technical papers: take twenty questions from your weakest chapter and answer them with the formula sheet in front of you, then re-sit the same twenty a week later without it. The gap between the two scores is a clean measurement of what you have actually memorised, separated from what you understand — and in an objective paper under time, memorised is the half that pays.',
      },
    ],
    preparation: [
      {
        type: 'defs',
        items: [
          [
            'The formula sheet',
            'One page per subject, written by hand, rewritten from memory weekly. It is the central artefact of technical preparation and the thing most candidates postpone until the last month, when it is worth least.',
          ],
          [
            'The weight table',
            'Built from past papers, ranking chapters by how often they are examined. It decides revision order, and it prevents the natural drift towards revising what is enjoyable.',
          ],
          [
            'The slow half',
            'General studies, current affairs and the Telangana layer, accumulated daily from the first week. It cannot be compressed into the final month, and attempting to is the usual reason a strong engineer misses a cutoff.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'One organisational point specific to these recruitments: technical notifications are issued per department and per discipline, and their eligibility clauses are narrower than the general Group notifications. The degree, the branch, and sometimes the specialisation are all specified. Check the clause for the post you intend to apply to before building a preparation plan around it, because an eligibility mismatch discovered at verification cannot be corrected.',
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'What to read, and what to stop reading',
        items: [
          {
            text: 'Your own degree textbooks, selectively',
            note: 'for the chapters the weight table ranks highest. Reading a degree text cover to cover is a poor use of the months available.',
          },
          {
            text: 'A single objective question bank for the discipline',
            note: 'because the paper tests recognition and speed. Volume of solved questions matters more here than the choice of source.',
          },
          {
            text: 'The relevant codes, manuals and standard values',
            note: 'where your discipline uses them. Examinable, memorisable and commonly skipped as reference material.',
          },
          {
            text: 'The department’s own material for context',
            note: 'the irrigation, public health or municipal system you are applying into. It costs an evening and it repeatedly proves useful.',
          },
          {
            text: 'One general studies source per subject, plus the state layer',
            note: 'kept deliberately small so it can be revised, since this is the half that has to be maintained over months alongside technical revision.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Do not restart the degree',
        text: 'The instinct on opening an old textbook is to begin at chapter one and read forward. Four weeks later a candidate has revised the introductory chapters thoroughly and none of the ones the paper actually weights. The weight table exists to prevent exactly this, and following it feels wrong precisely because it starts in the middle of books.',
      },
    ],
  },

  /* ── Telangana Panchayat Secretary ─────────────────────────── */
  'panchayat-secretary': {
    syllabus: [
      {
        type: 'table',
        caption:
          'The panchayat raj and rural development portion, mapped. The general studies portion follows the standard state pattern.',
        head: ['Area', 'What sits inside it', 'Why it is examined'],
        rows: [
          [
            'Constitutional basis',
            'The 73rd Amendment, the panchayat provisions it inserted, the subjects listed for devolution, and the reservation and election requirements it creates.',
            'It is the legal foundation of the post itself, and it is finite, precise and easy to examine.',
          ],
          [
            'State legislation',
            'The Telangana panchayat raj legislation — the tiers, the powers and functions of each, the position of the secretary, and the meetings and records the law requires.',
            'This is the law the post operates under day to day.',
          ],
          [
            'Panchayat administration',
            'Gram sabha procedure, budgeting and accounts, records and registers, audit, and the relationship with the district administration.',
            'It is the actual work of the job, which is why the paper asks about it.',
          ],
          [
            'Rural development',
            'The employment, housing, sanitation, water, livelihoods and social security programmes delivered through panchayats.',
            'The secretary is the delivery point for these, so their structure and their beneficiary rules are examinable.',
          ],
          [
            'Rural society and economy',
            'Agriculture, land, credit, migration, poverty measurement and the social structure of the village.',
            'It supplies the context questions and connects the specialist half to general studies.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Read that table as a warning against a common shortcut. Candidates often prepare the rural development schemes — which are numerous, memorable and heavily covered in guides — and skip the constitutional and statutory basis, which is shorter, drier and more reliably examined. The amendment and the state act between them generate questions that repeat almost verbatim across cycles, and they take a fortnight to learn properly.',
      },
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'What a single-stage objective recruitment implies',
        items: [
          {
            text: 'One paper decides it',
            note: 'there is no second stage in which a strong candidate recovers. Everything after the written examination is verification of eligibility claimed at application.',
          },
          {
            text: 'The specialist half is the differentiator',
            note: 'general studies is prepared by every candidate in the state for every recruitment. Panchayat raj and rural development is prepared properly by far fewer, and it is where the separable marks are.',
          },
          {
            text: 'The post designation has varied between cycles',
            note: 'as have the grade and the conducting arrangement. Read the notification for the recruitment you are sitting rather than assuming continuity with an earlier one.',
          },
          {
            text: 'Local status and zonal rules affect what you compete for',
            note: 'not whether you can apply. They are settled at verification against documents, so check what yours are before the application rather than after the result.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Because the recruitment is notified irregularly, the practical planning question is not how to prepare in the window but how to be prepared before it opens. A candidate already preparing for the TGPSC groups shares most of the general studies half; the marginal work is the panchayat raj and rural development module, which can be built in four to six weeks and then maintained with occasional revision.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'Assembling practice where the archive is thin',
        items: [
          {
            title: 'Work whatever papers this recruitment has released, first and to time.',
            text: 'They are the only material that shows the real balance between the general and specialist halves.',
          },
          {
            title: 'Add the TGPSC group papers for the general studies half.',
            text: 'Same commission, same syllabus areas, same phrasing habits. Strip the questions outside your syllabus before sitting them.',
          },
          {
            title: 'Add rural development questions from other recruitments.',
            text: 'Rural development and panchayat administration are examined in several state and national recruitments. The scheme structures are national, so those questions transfer.',
          },
          {
            title: 'Write your own questions from the act.',
            text: 'Take a section of the state panchayat raj legislation and turn it into five questions. The exercise teaches the section better than reading it three times, and it produces revision material.',
          },
          {
            title: 'Keep one file of every panchayat raj question you meet.',
            text: 'Across every source. Within a few months it becomes the most exam-specific document available for this recruitment.',
          },
        ],
      },
      {
        type: 'p',
        text: 'Treat scheme figures found in old papers with care. Coverage numbers, wage rates, unit costs and entitlement amounts under rural development programmes are revised by government order and a figure that was correct in an old paper may not be correct now. Learn the structure of each scheme — who is eligible, what is guaranteed, who delivers it, how it is funded — and check any current figure against the programme’s own official source.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What a mock result is telling you in a single-paper recruitment.',
        head: ['Observation', 'Interpretation', 'Action'],
        rows: [
          [
            'Specialist half weak, general half fine',
            'The module was read rather than learned. Most common shape.',
            'Rebuild it from the act and the amendment, writing your own questions as you go.',
          ],
          [
            'Scheme questions missed on details',
            'Names learned, structures not.',
            'For each scheme, write four lines: who is eligible, what is provided, who delivers, how it is funded.',
          ],
          [
            'Constitutional questions missed',
            'The 73rd Amendment skipped in favour of scheme content.',
            'A fortnight on the amendment and the state act. It is short and it repeats.',
          ],
          [
            'General half weak',
            'Coverage gaps rather than a specialist problem.',
            'Use the TGPSC group preparation directly; the material is shared.',
          ],
          [
            'Score flat across several mocks',
            'Revision without question practice.',
            'Replace reading hours with solving hours for a fortnight and re-measure.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'One drill worth building for this recruitment specifically: a twenty-question test made only of panchayat raj, rural development and state administration questions, sat fortnightly. It isolates the half that decides the result, it is quick to sit around a working week, and it is the score whose movement most reliably predicts the real one.',
      },
    ],
    preparation: [
      {
        type: 'defs',
        items: [
          [
            'The shared half',
            'General studies, current affairs and the Telangana layer — identical to what a TGPSC group candidate is already building. If you are preparing for the groups, this half is done.',
          ],
          [
            'The module',
            'Panchayat raj, rural development and rural administration. Four to six weeks of concentrated work, built from the amendment, the state act and the scheme guidelines rather than from a compilation.',
          ],
          [
            'The maintenance habit',
            'Because the recruitment is notified irregularly, the module has to be kept alive rather than learned once. An hour a fortnight on the file, and a scan of new government orders affecting rural programmes, is enough.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'A note on how the job itself informs the preparation. The secretary keeps the panchayat’s records, convenes and minutes its meetings, prepares its budget, and is accountable for the delivery of programmes through it. Questions in this paper are frequently phrased as situations from that work rather than as definitions, so reading the material with the question “what would the secretary actually have to do here” in mind makes the answers considerably easier to see.',
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'The documents to work from directly',
        items: [
          {
            text: 'The 73rd Amendment text and the schedule of subjects',
            note: 'short, precise and heavily examined. Read the provisions themselves rather than a summary of them.',
          },
          {
            text: 'The state panchayat raj legislation',
            note: 'for the tiers, the functions, the secretary’s own position, and the meeting and record requirements. This is the law of the job.',
          },
          {
            text: 'Programme guidelines for the major rural schemes',
            note: 'from the delivering ministry or department. Guidelines state eligibility, entitlement and process exactly; guides paraphrase them and lose the detail the paper asks for.',
          },
          {
            text: 'The state’s rural development department pages',
            note: 'for state-run programmes and for how national programmes are implemented in Telangana specifically.',
          },
          {
            text: 'One general studies source per subject',
            note: 'shared with your TGPSC group preparation. Do not build a separate general studies library for this recruitment.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Check any figure against a current official source',
        text: 'Wage rates, unit costs, entitlement limits and coverage figures under rural programmes are revised by order and are the fastest-ageing facts in this syllabus. Learn the structure of a scheme from its guidelines, and treat any specific number in a book, a video or an old paper as a prompt to check the programme’s own site rather than as a fact to memorise.',
      },
    ],
  },

  /* ── Telangana departmental tests ──────────────────────────── */
  'departmental-tests': {
    syllabus: [
      {
        type: 'table',
        caption:
          'The families the papers fall into. Which of them you must pass is decided by your service rules, not by this table.',
        head: ['Family', 'What it covers', 'How it is prepared'],
        rows: [
          [
            'Account tests',
            'Financial rules, treasury and accounts procedure, budgeting, and the codes governing government expenditure.',
            'By learning the structure of the code and the location of provisions, then working past questions against it.',
          ],
          [
            'Executive and departmental papers',
            'The acts, rules and manuals of a specific department, and the procedure its officers are expected to follow.',
            'By reading the department’s own manual and tabbing what past papers keep returning to.',
          ],
          [
            'Revenue and district administration papers',
            'Land revenue, records, survey and settlement, and the procedures of district and mandal administration.',
            'By procedure rather than by theory — what is done, in what order, under which provision.',
          ],
          [
            'Language and general papers',
            'Where the service rules prescribe them for the post.',
            'By past papers, because the standard is stable and the syllabus narrow.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'The single most important thing to establish before preparing anything is which papers your own service rules require and by when. The list differs by department, by service and by post; the period within which the tests must be cleared is set by rule; and the consequence of not clearing them — deferred probation, withheld increments, a promotion that does not happen — follows from that rule rather than from the commission. Your department, not a general guide, is the authority on your own list.',
      },
    ],
    'exam-pattern': [
      {
        type: 'list',
        title: 'Why a qualifying examination is a different problem',
        items: [
          {
            text: 'There is no field to beat',
            note: 'no cutoff moves with the number of candidates and no advantage attaches to outperforming anyone. There is a prescribed standard, and the only question is whether you meet it.',
          },
          {
            text: 'A pass is permanent and paper by paper',
            note: 'each paper stands on its own record. Registering for two papers you have prepared beats registering for four you have not, because there is no partial credit for a near miss.',
          },
          {
            text: 'The with-books papers are lookup tests',
            note: 'permission to carry the code does not make the paper easy; it changes what is being tested from recall to retrieval speed. Preparation is indexing, not memorising.',
          },
          {
            text: 'The sessions are fixed and the windows are short',
            note: 'registration closes on a date and is not generally extended. A missed window costs a whole session, and anything conditional on the pass waits with it.',
          },
        ],
      },
      {
        type: 'p',
        text: 'That last point deserves a practical response rather than an acknowledgement. Put the commission’s notification page on a calendar reminder at a fixed interval, because the cost of checking too often is a few minutes and the cost of checking too late is months. Employees who miss a session almost never miss it through unpreparedness; they miss it through not having looked.',
      },
    ],
    'previous-year-papers': [
      {
        type: 'steps',
        title: 'Turning past papers into a tabbed code',
        items: [
          {
            title: 'Work a paper with the code open and the clock running.',
            text: 'The clock is the point. A with-books paper is lost by candidates who can find every provision given unlimited time.',
          },
          {
            title: 'Record which provision answered each question.',
            text: 'Not the answer — the location. That list is the index the examination actually uses.',
          },
          {
            title: 'Tab those provisions physically.',
            text: 'In the copy you will carry, if the notification permits the edition. A tab you can find without reading is worth more than a rule you can half remember.',
          },
          {
            title: 'Repeat across several sessions of papers.',
            text: 'The same provisions recur. After four or five papers the tabs stop multiplying, and that is the signal that the index is complete.',
          },
          {
            title: 'Then practise lookups against the clock, cold.',
            text: 'Someone reads out a question; you find the provision. Thirty seconds is a good target and it is reachable with a properly tabbed book.',
          },
        ],
      },
      {
        type: 'p',
        text: 'For the papers where books are not permitted the same archive is used differently: tag the questions by provision, count the tags, and learn the twenty most frequent provisions properly rather than reading the code end to end. A departmental code is written to be consulted, not memorised, and reading one linearly is both slow and a poor match for how it is examined.',
      },
    ],
    'mock-tests': [
      {
        type: 'table',
        caption: 'What to time when the paper is a retrieval test rather than a recall test.',
        head: ['What to measure', 'Target behaviour', 'What a poor result means'],
        rows: [
          [
            'Seconds to locate a provision',
            'Found from the tab, without reading the contents page.',
            'The index is incomplete or the tabs are labelled in language you do not think in.',
          ],
          [
            'Questions answered without opening the book',
            'Rising over weeks, as the frequent provisions become familiar.',
            'You are relying entirely on lookup, which will not finish the paper.',
          ],
          [
            'Wrong answers where the provision was found',
            'Close to zero.',
            'The provision is being located but misread. Practise reading the whole provision, including its exceptions.',
          ],
          [
            'Questions left at the end',
            'None.',
            'A pacing problem. Set a per-question limit and move on when it is reached.',
          ],
          [
            'Performance on procedure questions',
            'Steady, because procedure repeats.',
            'The department manual has been read for content rather than for sequence.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Practise in the physical conditions of the paper. If the examination is computer-based and the permitted book is a paper copy, the real skill is switching between screen and book without losing your place — which is awkward the first time and unremarkable the tenth. A candidate who has only ever practised with a paper question set has not rehearsed the thing that actually slows them down.',
      },
    ],
    preparation: [
      {
        type: 'defs',
        items: [
          [
            'The rules check',
            'Establish, in writing from your department, which papers your service rules require, within what period, and with what consequence. Everything else in the preparation depends on this and it is the step most often skipped.',
          ],
          [
            'The two-paper rule',
            'Register for the number of papers you can genuinely prepare in the session rather than the number you eventually need. Passes accumulate; failures cost a session each.',
          ],
          [
            'The annotated book',
            'For with-books papers, the tabbed and indexed copy is the whole preparation. It is built from past papers over a few weekends and it is what you carry into the hall.',
          ],
        ],
      },
      {
        type: 'p',
        text: 'Preparation for these papers has to fit around a posting, which means it has to survive being interrupted. The format that survives is short and physical: half an hour with the code and a past paper, several evenings a week, producing tabs and margin notes rather than a notebook. Long study sessions planned for a weekend are the first thing a transfer, an inspection or an election duty removes.',
      },
    ],
    'study-material': [
      {
        type: 'list',
        title: 'What to obtain, in order',
        items: [
          {
            text: 'The commission’s notification for the session',
            note: 'it lists the papers, the permitted books and the editions. Everything else you buy should be decided after reading it.',
          },
          {
            text: 'The prescribed code or manual in the permitted edition',
            note: 'the edition matters. A different edition may be refused at the hall, and provisions do move between editions.',
          },
          {
            text: 'Your department’s own manual and standing orders',
            note: 'for the executive and departmental papers. These are the source; commercial guides are summaries of them.',
          },
          {
            text: 'Past papers across several sessions',
            note: 'the only reliable evidence of which provisions are actually examined and how the questions are phrased.',
          },
          {
            text: 'A colleague who has passed the paper',
            note: 'the cheapest source of the practical detail — which tabs helped, which provisions recur, what the hall procedure is.',
          },
        ],
      },
      {
        type: 'note',
        title: 'Confirm the permitted edition before the day',
        text: 'For with-books papers the notification specifies what may be carried, and it is checked. A book that is annotated beyond what the rules allow, or an edition other than the one prescribed, can be refused at the hall — which turns months of indexing into a paper sat from memory. Read that clause carefully and prepare the copy you are actually allowed to bring.',
      },
    ],
  },
}

export default DEPTH
