/**
 * Engineering entrance exams — /entrance-exams/engineering/
 *
 * Seven papers covering the same three subjects, which is why candidates
 * prepare for several at once. What differs — and what these pages emphasise,
 * because it is where marks are actually lost — is the marking scheme. Two of
 * these exams have no negative marking at all, one deducts a mark per error,
 * and one changes its rules every year on purpose.
 */

const engineering = [
  /* ══════════════════════════════════════════════════════════════
     JEE Main
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'jee-main',
    path: '/entrance-exams/engineering/jee-main/',
    name: 'JEE Main',
    fullName: 'Joint Entrance Examination (Main)',
    authority: 'National Testing Agency (NTA)',
    official: 'jeemain.nta.nic.in',
    seoTitle: 'JEE Main 2026: Pattern, Syllabus, Two Sessions & Free Mocks',
    metaDescription:
      'JEE Main exam guide — Paper 1 pattern and marking, subject-wise syllabus, two-session best-of-two rule, percentile scoring and free mock tests.',
    lead: [
      'JEE Main is the national engineering entrance for the NITs, IIITs and centrally funded technical institutions, and it is also the qualifying examination for JEE Advanced and therefore for the IITs. It is held in two sessions a year, and a candidate who sits both is credited with the better result.',
      'Two features shape how it should be approached. Scores are reported as normalised percentiles rather than raw marks, because the paper runs across many shifts. And the two-session structure changes the strategic picture entirely: the first session is a genuine attempt that costs nothing to make.',
    ],
    quickFacts: [
      ['Conducted by', 'National Testing Agency (NTA)'],
      ['Admits to', 'NITs, IIITs and centrally funded technical institutions; qualifies candidates for JEE Advanced'],
      ['Level', 'Class 12 with physics, chemistry and mathematics'],
      ['Paper 1 structure', '75 questions, 300 marks, 3 hours — physics, chemistry and mathematics'],
      ['Marking', 'Four marks for a correct answer, one deducted for a wrong one'],
      ['Sessions', 'Two a year, with the better result counted'],
    ],
    overview: [
      {
        type: 'p',
        text: 'JEE Main serves two purposes at once. Its ranks feed admission to the National Institutes of Technology, the Indian Institutes of Information Technology and other centrally funded institutions through the joint counselling process. Separately, the top band of its qualifiers becomes eligible to sit JEE Advanced, which is the route to the IITs.',
      },
      {
        type: 'p',
        text: 'Paper 1 is for engineering admissions and covers physics, chemistry and mathematics. Paper 2A and Paper 2B cover architecture and planning respectively, adding an aptitude test and, for architecture, a drawing test. Most candidates sit Paper 1 alone.',
      },
      {
        type: 'list',
        title: 'What the two-session structure means in practice',
        items: [
          { text: 'The better of the two results counts', note: 'so a session that goes badly costs you nothing except the time spent sitting it.' },
          { text: 'The first session is a free calibration', note: 'a real examination under real conditions, which no mock can fully replicate.' },
          { text: 'It reduces the cost of a bad day', note: 'illness, nerves or an unlucky paper in one session is recoverable in the other.' },
          { text: 'It rewards being ready earlier', note: 'candidates who plan only for the second session forgo the calibration the first would have given them.' },
        ],
      },
      {
        type: 'note',
        title: 'Percentiles, not marks',
        text: 'Because the examination runs across many shifts with papers of slightly differing difficulty, scores are normalised and reported as percentiles. Your percentile reflects the proportion of candidates who scored at or below you in your session, not a raw mark. Comparing raw scores with candidates from other shifts tells you very little.',
      },
    ],
    stages: [
      {
        name: 'Paper 1 — B.E. / B.Tech',
        mode: 'Computer-based, 3 hours',
        detail:
          'Physics, chemistry and mathematics, with 25 questions per subject — 20 multiple choice and 5 numerical value questions — for 75 questions and 300 marks. Four marks for a correct answer, one mark deducted for a wrong one.',
      },
      {
        name: 'Paper 2A and 2B — B.Arch and B.Planning',
        mode: 'Computer-based, with a drawing component for B.Arch',
        detail:
          'Mathematics and an aptitude test, with a drawing test for architecture and a planning-based section for planning. Taken only by candidates seeking architecture or planning admission.',
      },
      {
        name: 'Result and JEE Advanced eligibility',
        mode: 'Percentile-based',
        detail:
          'Ranks are computed from normalised percentiles across sessions, with the better session counted. A defined top band of Paper 1 qualifiers becomes eligible to register for JEE Advanced.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'JEE Main syllabus — physics, chemistry and mathematics topics drawn from the class 11 and 12 curriculum.',
        lead: [
          'The syllabus is the class 11 and 12 curriculum in the three sciences, which means your school textbooks and this examination are studying the same thing. The difference is depth of application.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Physics',
                'Units and measurement, kinematics, laws of motion, work energy and power, rotational motion, gravitation, properties of solids and liquids, thermodynamics, kinetic theory of gases, oscillations and waves; electrostatics, current electricity, magnetic effects of current and magnetism, electromagnetic induction and alternating currents, electromagnetic waves, optics, dual nature of matter and radiation, atoms and nuclei, electronic devices, and experimental skills. Mechanics and electrodynamics together carry the largest share.',
              ],
              [
                'Chemistry',
                'Physical chemistry covering some basic concepts, atomic structure, chemical bonding and molecular structure, chemical thermodynamics, solutions, equilibrium, redox reactions and electrochemistry, chemical kinetics; inorganic chemistry covering classification of elements and periodicity, p-block, d- and f-block elements, coordination compounds; and organic chemistry covering purification and characterisation, basic principles, hydrocarbons, organic compounds containing halogens, oxygen and nitrogen, biomolecules, and principles of practical chemistry.',
              ],
              [
                'Mathematics',
                'Sets relations and functions, complex numbers and quadratic equations, matrices and determinants, permutations and combinations, binomial theorem, sequences and series, limits continuity and differentiability, integral calculus, differential equations, coordinate geometry, three-dimensional geometry, vector algebra, statistics and probability, and trigonometry.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A practical observation about weighting. Across recent years the distribution has been reasonably even between the three subjects, but within them the emphasis is not: in physics, mechanics and electrodynamics dominate; in chemistry, physical and organic chemistry carry more than inorganic; in mathematics, calculus and coordinate geometry recur most. Past papers show this far more reliably than any syllabus listing.',
          },
          {
            type: 'list',
            title: 'How the three subjects reward different study',
            items: [
              { text: 'Chemistry rewards coverage', note: 'inorganic chemistry in particular is closer to recall than to problem-solving, and NCERT covers it unusually well. It is the subject where completeness is achievable and where leaving gaps is least defensible.' },
              { text: 'Mathematics rewards volume', note: 'the techniques are finite and the difficulty lies in recognising which applies. That recognition comes from having worked a large number of problems rather than from understanding any one of them more deeply.' },
              { text: 'Physics rewards understanding', note: 'the subject where formula-collecting fails most visibly. Questions are frequently built by combining two familiar ideas, and a candidate who has memorised results without the reasoning cannot make the combination.' },
              { text: 'All three reward class 11 retention', note: 'roughly half the paper comes from the first year of the curriculum, and it is the half most likely to have decayed by the time you sit the examination.' },
            ],
          },
          {
            type: 'p',
            text: 'A common planning error follows from reading the syllabus as a flat list: candidates study it in the order it is printed, which puts mechanics and basic concepts early and leaves optics, modern physics and organic chemistry to the end. Those late chapters are not less examinable — several of them are among the most reliably represented in the paper — and arriving at them in the final weeks, when there is no time to practise, is a self-inflicted loss.',
          },
          {
            type: 'note',
            title: 'The syllabus has been trimmed and restored before',
            text: 'Topics have been removed from and added back to the JEE Main syllabus in recent years, sometimes with limited notice, and the class 12 board syllabus has moved separately. Check the current information bulletin rather than working from an older list — a chapter you skipped because a guide said it was dropped is an expensive mistake to discover in the examination hall.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'JEE Main exam pattern — Paper 1 structure, marking scheme, numerical value questions, normalisation and the two-session rule.',
        lead: [
          'Four marks for right, one off for wrong. That ratio makes JEE Main one of the more forgiving papers to guess on — up to a point.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper 1 structure. Confirm question counts, the numerical section rules and marking against the current information bulletin.',
            head: ['Subject', 'MCQ', 'Numerical', 'Marks'],
            rows: [
              ['Physics', '20', '5', '100'],
              ['Chemistry', '20', '5', '100'],
              ['Mathematics', '20', '5', '100'],
              ['Total', '60', '15', '300 in 3 hours'],
            ],
          },
          {
            type: 'p',
            text: 'With four marks gained and one lost, a guess narrowed to two options has clearly positive expected value, and even a guess among three is worth taking. A blind guess among four breaks even. That is a considerably gentler regime than AFCAT or a railway paper, and it means the right approach is to attempt more rather than fewer — provided the attempts are informed.',
          },
          {
            type: 'list',
            title: 'Details that matter',
            items: [
              { text: 'Numerical value questions', note: 'answers are entered rather than selected, so there is no elimination to fall back on. The rules on how many must be attempted and whether they carry a deduction have changed between cycles — confirm them.' },
              { text: 'Normalisation across shifts', note: 'raw scores are converted to percentiles, so cross-shift comparison is meaningless.' },
              { text: 'Best of two sessions', note: 'the better result counts, which makes the first session a free calibration.' },
              { text: 'Eligibility for JEE Advanced', note: 'a defined top band of Paper 1 qualifiers, subject to additional class 12 performance conditions.' },
            ],
          },
          {
            type: 'note',
            title: 'Read the current information bulletin',
            text: 'The numerical section rules in particular have been revised more than once — whether all questions are compulsory, and whether wrong numerical answers carry a deduction. Since both change how you should attempt the section, they are worth confirming rather than assuming.',
          },
          {
            type: 'defs',
            items: [
              [
                'What the four-to-one ratio actually implies',
                'A blind guess across four options has a positive expected value in the abstract, but only just, and it evaporates once you account for the questions where a plausible-looking wrong option was designed to attract you. The defensible rule is to attempt anything you can narrow to two options and to leave anything you cannot narrow at all.',
              ],
              [
                'Why numerical questions need a different rule',
                'Answers are entered rather than selected, so there is no elimination and no partial information from the options. A numerical question you cannot solve is simply unanswerable, and time spent on it is time lost. Recognising that quickly is worth more here than anywhere else in the paper.',
              ],
              [
                'What normalisation does and does not do',
                'It converts raw scores to percentiles so that candidates across different shifts are compared fairly, which means your raw mark is not directly meaningful and comparing it with a friend in another shift tells you nothing. It does not soften a hard paper for you personally — it adjusts for the shift as a whole.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The best-of-two-sessions rule deserves to be planned for rather than merely known. It makes the first session a genuinely low-cost calibration: a real paper, in a real centre, under real conditions, with no downside if it goes badly. Candidates who skip it in order to be better prepared for the second give up the single most accurate diagnostic available to them, and they arrive at their only attempt having never sat the examination.',
          },
          {
            type: 'note',
            title: 'The interface is part of the paper',
            text: 'Marking questions for review, moving between sections, and using the on-screen calculator where one is provided all cost time you have not budgeted for if you meet them first on the day. Take a meaningful share of your mocks on a computer, in a browser, with a rough sheet beside you rather than a notebook you can spread out.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'JEE Main previous year papers — building a topic weighting table and practising the numerical value question format.',
        lead: [
          'With multiple sessions each year, JEE Main generates an unusually large body of past papers. That volume is an asset if you use it systematically.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Two sessions a year, several shifts each, means dozens of recent papers rather than a handful. Tagging them by topic produces a weighting table far more reliable than one built from a single year, and it reveals which chapters carry consistent marks and which appear occasionally. That table should govern your revision order in the final months.',
          },
          {
            type: 'steps',
            title: 'How to use the volume',
            items: [
              { text: 'Build a chapter-wise frequency table from two years of papers.', note: 'Across all shifts, not just one. The consistency across shifts is what makes the table trustworthy.' },
              { text: 'Practise numerical value questions specifically.', note: 'They allow no elimination and no back-solving from options, which makes them a different skill from MCQs.' },
              { text: 'Solve full papers under three hours from the start of the final phase.', note: 'Subject-switching stamina is part of what the paper tests.' },
              { text: 'Log errors by cause, not just by chapter.', note: 'Calculation slip, misread question, concept gap and time pressure need four different fixes.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'JEE Advanced guide', to: '/entrance-exams/engineering/jee-advanced/' },
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'Physics study material', to: '/study-material/physics/' },
            ],
          },
          {
            type: 'list',
            title: 'What a chapter-wise frequency table changes',
            items: [
              { text: 'It settles arguments about weighting', note: 'candidates spend a surprising amount of energy on second-hand claims about which chapters matter. Two years of papers, tagged yourself, replaces all of it with evidence.' },
              { text: 'It exposes the chapters you have quietly avoided', note: 'a chapter appearing every session that you have never practised is a finding, and it is usually a chapter you found unpleasant in class 11.' },
              { text: 'It shows how a chapter is asked, not just whether', note: 'rotational motion asked as a short conceptual question is a different preparation from rotational motion asked as a two-step numerical, and only the papers tell you which this examination favours.' },
              { text: 'It makes revision decisions cheap', note: 'in the final month, when there is time for perhaps a third of what you would like to revise, the table decides for you.' },
            ],
          },
          {
            type: 'p',
            text: 'Because there are two sessions a year with several shifts each, the volume of recent papers available is much larger than for most examinations — dozens rather than a handful. That abundance is only an advantage if it is used systematically. Solving thirty papers casually teaches less than tagging ten and then working the chapters the tagging identifies, because the second approach converts volume into direction.',
          },
          {
            type: 'p',
            text: 'Log your errors by cause rather than by chapter, which is the habit that separates candidates who improve from candidates who merely accumulate practice. A wrong answer is either a concept you do not have, a concept you have but did not recognise, a calculation slip, or a misread question. Those four have four different remedies, and a log organised by chapter cannot distinguish them — so the candidate keeps re-studying topics when the actual problem was reading speed or arithmetic care.',
          },
          {
            type: 'note',
            title: 'Practise numerical value questions deliberately',
            text: 'They behave differently from the multiple-choice questions in the same paper: no elimination, no partial information, and often a rounding or significant-figure convention to observe. Working them as a separate set for a few sessions is worth doing, because a candidate who has only ever met them mixed into full papers has never practised the specific decision they demand.',
          },
        ],
      },
      'mock-tests': {
        description:
          'JEE Main mock tests — full three-hour computer-based practice with the correct marking scheme and numerical sections.',
        lead: [
          'Practise on a computer, in three-hour blocks, with the real marking scheme. All three conditions matter for this paper.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'JEE Main is computer-based, and the interface itself is a variable: marking questions for review, moving between sections, and entering numerical answers all take time that paper practice does not account for. Candidates who have only practised on paper lose minutes to the interface on the day.',
          },
          {
            type: 'list',
            title: 'What each mock should tell you',
            items: [
              { text: 'Your attempt count against your accuracy', note: 'with a four-to-one ratio, attempting more is usually right — but only while accuracy holds.' },
              { text: 'Time spent per subject', note: 'an imbalance usually means one subject is being over-attempted at the cost of easy marks in another.' },
              { text: 'Numerical question accuracy separately', note: 'no elimination is possible there, so errors have a different cause.' },
              { text: 'Where your last twenty minutes went', note: 'a rushed finish usually points to poor selection early rather than to genuine shortage of time.' },
            ],
          },
          {
            type: 'p',
            text: 'A note on the first session. If you are reasonably prepared, sit it. It is a real examination under real conditions, the better result counts, and no number of mocks reproduces the experience of the actual hall.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A mock cycle that produces improvement',
            items: [
              { title: 'Sit the full three hours', text: 'On a computer, in one block, at roughly the time of day your shift falls. A mock taken in two sittings measures a paper that does not exist.' },
              { title: 'Record four numbers', text: 'Score, attempts, accuracy, and time spent per subject. The score alone conceals every actionable finding in the paper.' },
              { title: 'Classify each error by cause', text: 'Concept missing, concept unrecognised, calculation slip, misread. Then act on the largest category only — spreading effort across all four is why analysis so often changes nothing.' },
              { title: 'Fix something before the next mock', text: 'One chapter, one habit. Taking another mock without an intervening change simply re-measures the same candidate a week later.' },
              { title: 'Re-test the fix specifically', text: 'A short topic set on the thing you repaired, before the next full mock. Confirming a repair is quicker and more informative than hoping it shows up in a total.' },
            ],
          },
          {
            type: 'p',
            text: 'Watch the relationship between attempts and accuracy rather than either alone. Under a four-to-one marking scheme the optimal attempt count is higher than most candidates instinctively choose, but it is not unlimited — there is a point at which additional attempts are drawn from questions you have not genuinely narrowed, and beyond that point each one costs more than it returns. Your own mocks are the only way to find where that point sits for you.',
          },
          {
            type: 'note',
            title: 'Between the two sessions, do not start new material',
            text: 'The interval between sessions is short and is best spent on the error log from the first attempt — the specific chapters and habits it exposed — rather than on chapters left uncovered. New material started in that window rarely reaches the depth at which it produces marks, and it displaces the corrections that reliably would.',
          },
        ],
      },
      preparation: {
        description:
          'JEE Main preparation strategy — sequencing the three subjects, using the two sessions, and building speed alongside board study.',
        lead: [
          'JEE Main and your class 12 boards study the same syllabus. Treating them as two separate projects is the most common way candidates run out of time.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The syllabus overlap between JEE Main and the class 12 board examinations is close to complete. What differs is the depth of application — boards ask you to state and derive, JEE asks you to apply under time pressure. A candidate who studies the concept properly once and then practises applying it is doing both at the same time, which is the only realistic way to fit them into one year.',
          },
          {
            type: 'steps',
            title: 'A two-year plan, compressible to one',
            items: [
              { text: 'Class 11 — build the foundations properly.', note: 'Mechanics, physical chemistry basics and algebra and trigonometry. Everything in class 12 rests on these, and gaps here compound.' },
              { text: 'Throughout — solve rather than read.', note: 'Physics and mathematics are learned by working problems; reading solved examples produces recognition without capability.' },
              { text: 'Class 12 — the new syllabus, alongside class 11 revision.', note: 'Electrodynamics, organic chemistry and calculus carry heavy weight. Do not let class 11 material decay while you cover them.' },
              { text: 'From the start — maintain an error log.', note: 'Every mistake, classified by cause. It becomes the most valuable revision document you own.' },
              { text: 'Final six months — full-length mocks weekly.', note: 'Three hours, computer-based, correct marking, subjects mixed.' },
              { text: 'Sit the first session.', note: 'The better result counts, and the experience is worth having.' },
              { text: 'Between sessions — work the error log, not new material.', note: 'The gap is short and consolidation beats expansion.' },
            ],
          },
          {
            type: 'list',
            title: 'Where candidates lose marks they had earned',
            items: [
              { text: 'Letting class 11 material decay', note: 'it carries a large share of the paper and is easy to lose while covering class 12.' },
              { text: 'Reading solutions rather than solving problems', note: 'the most seductive and least productive study habit in JEE preparation.' },
              { text: 'Skipping the first session', note: 'a free attempt with the better result counted.' },
              { text: 'Practising only on paper', note: 'the computer-based interface costs time you have not budgeted for.' },
              { text: 'Guessing too conservatively', note: 'a four-to-one marking ratio rewards informed attempts more than most exams do.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Solving versus reading',
                'The most consequential distinction in JEE preparation. Reading a worked solution produces recognition, which feels like understanding and disappears under examination conditions. Solving produces the ability to generate the argument yourself, which is what the paper asks for. When time is short the temptation is always to read more and solve less, and it is always the wrong trade.',
              ],
              [
                'Retention versus coverage',
                'Class 11 material carries roughly half the paper and decays quietly across the following year. A weekly slot for class 11 revision throughout class 12 costs a few hours a month and protects a very large share of your score.',
              ],
              [
                'Speed versus depth',
                'JEE Main gives about two minutes a question, which is generous compared with some entrances and tight compared with JEE Advanced. It rewards fluency in standard techniques rather than deep insight, so practice volume matters more here than working a small number of very hard problems.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'On preparing alongside the class 12 boards, which is the position most candidates are actually in: the syllabi overlap almost entirely, so the two are not competing for study time in the way candidates fear. What they compete for is method. Board preparation rewards clear written derivations and complete coverage; JEE rewards speed and problem selection. Study the material once, then practise it twice in the two different modes rather than studying it twice.',
          },
          {
            type: 'note',
            title: 'One error log, all three subjects',
            text: 'Keeping separate logs per subject fragments the thing that makes a log useful, which is spotting that the same cause — a rushed reading, a sign error, an unrecognised standard form — is costing you marks across physics and mathematics alike. One document, entries classified by cause, reviewed weekly, is among the highest-return habits available in this preparation.',
          },
        ],
      },
      'study-material': {
        description:
          'JEE Main study material — physics, chemistry and mathematics notes mapped to the class 11 and 12 syllabus.',
        lead: [
          'NCERT for chemistry, standard problem books for physics and mathematics, and these notes to consolidate. Volume of practice matters more than volume of reading.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For chemistry, and inorganic chemistry especially, the NCERT textbooks are unusually close to what is asked and should be your primary source. For physics and mathematics, the textbook establishes the concept and a good problem book builds the capability — and it is the second half that JEE marks reward.',
          },
          {
            type: 'links',
            title: 'Subject notes for JEE Main',
            items: [
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Algebra and calculus topics', to: '/study-material/mathematics/' },
              { label: 'Science notes', to: '/study-material/science/' },
            ],
          },
          {
            type: 'list',
            title: 'Study habits that convert into marks',
            items: [
              'Solve before reading the solution, every time, even when it takes longer.',
              'Keep one error log across all three subjects, classified by cause.',
              'Revisit each chapter three days after finishing it and again after three weeks.',
              'Time every practice session; JEE is as much a speed test as a knowledge test.',
              'Use NCERT as the primary source for chemistry, particularly inorganic.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Chemistry — NCERT as the primary text',
                'Unusually close to what is asked, particularly in inorganic chemistry where questions are frequently traceable to specific lines. Read it properly rather than treating it as a summary, and use additional material for physical chemistry problems rather than for coverage.',
              ],
              [
                'Physics — a standard problem book, worked',
                'Concepts from your textbook, then problems from a source with enough variety that you meet unfamiliar combinations. Physics is where reading solutions damages a preparation most, because the subject is built on being able to set a problem up rather than on recognising it.',
              ],
              [
                'Mathematics — volume and variety',
                'A large number of problems across the full range of chapters, with an emphasis on recognising standard forms quickly. Depth on a few topics is worth less here than fluency across many.',
              ],
              [
                'Your own error log — the material you revise from',
                'By the final month this should be the document you spend most of your revision time in. It is short, it is specific to you, and it names the exact things that have cost you marks.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A word on how much material to own. Candidates accumulate books because acquiring one feels like progress and because a recommendation is easy to follow. The cost is real: three partially worked problem sets leave you with three incomplete mental libraries of standard forms, where one finished set worked twice would have left a complete one. Choose a source per subject, finish it, and only then consider whether you need another.',
          },
          {
            type: 'note',
            title: 'Spaced revisits, not single passes',
            text: 'Return to each chapter about three days after finishing it and again about three weeks later. Two short revisits placed at those intervals hold material far better than one long session, and the arithmetic matters over a two-year preparation: a chapter learned in class 11 and never revisited is largely gone by the examination.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the JEE Main exam pattern?',
        a: 'Paper 1 for engineering has 75 questions for 300 marks in three hours — physics, chemistry and mathematics with 25 questions each, comprising 20 multiple-choice and 5 numerical value questions. Four marks are awarded for a correct answer and one is deducted for a wrong one. Papers 2A and 2B cover architecture and planning, adding an aptitude test and, for architecture, a drawing test. The examination is computer-based and held in two sessions a year.',
      },
      {
        q: 'How does the two-session system work in JEE Main?',
        a: 'The examination is held twice a year and a candidate may sit either or both. Where both are attempted, the better result is counted for ranking. This makes the first session effectively a free attempt: a bad day costs nothing, while the experience of sitting a real paper under real conditions is something no mock fully reproduces. Candidates who plan only for the second session give up that calibration for no benefit.',
      },
      {
        q: 'Why are JEE Main results given as percentiles?',
        a: 'Because the examination runs across many shifts whose papers differ slightly in difficulty, raw scores are normalised so that no candidate is disadvantaged by drawing a harder shift. Your percentile reflects the proportion of candidates in your session who scored at or below you, not a raw mark out of 300. This is why comparing raw scores with candidates who sat other shifts tells you very little about relative position.',
      },
      {
        q: 'Is guessing worthwhile in JEE Main?',
        a: 'More than in most competitive exams. With four marks for a correct answer and one deducted for a wrong one, a blind guess among four options breaks even, a guess narrowed to three is positive, and a guess narrowed to two is clearly worth taking. That is a far gentler regime than exams deducting a third or a full mark, and it means the right instinct is to attempt informed guesses rather than to skip conservatively. Numerical value questions are different, since no elimination is possible there.',
      },
      {
        q: 'How is JEE Main related to JEE Advanced?',
        a: 'JEE Main ranks feed admission to the NITs, IIITs and other centrally funded institutions, and separately a defined top band of Paper 1 qualifiers becomes eligible to register for JEE Advanced, which is the entrance for the IITs. Eligibility for Advanced is also subject to conditions on class 12 performance and on the number of attempts. The two examinations share a syllabus in outline but differ sharply in depth and in question style.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     JEE Advanced
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'jee-advanced',
    path: '/entrance-exams/engineering/jee-advanced/',
    name: 'JEE Advanced',
    fullName: 'Joint Entrance Examination (Advanced)',
    authority: 'One of the Indian Institutes of Technology, on a rotating basis',
    official: 'jeeadv.ac.in',
    seoTitle: 'JEE Advanced 2026: Pattern, Marking Scheme & IIT Admission',
    metaDescription:
      'JEE Advanced exam guide — two-paper structure, the deliberately variable marking scheme, syllabus depth, AAT and preparation strategy.',
    lead: [
      'JEE Advanced is the entrance examination for the Indian Institutes of Technology, conducted each year by one of the IITs on a rotating basis. Only candidates who reach a defined band in JEE Main are eligible to sit it, and a candidate has a limited number of attempts within consecutive years.',
      'What makes it different from every other entrance examination in the country is deliberate: the marking scheme changes from year to year, and often between the two papers of the same year. Single-correct, multiple-correct with partial credit, numerical, matching — the combination and the penalties are not announced in advance. Adaptability is not a soft skill here; it is examined directly.',
    ],
    quickFacts: [
      ['Conducted by', 'One of the IITs, on a rotating basis'],
      ['Admits to', 'The Indian Institutes of Technology'],
      ['Eligibility', 'A defined top band of JEE Main qualifiers, with attempt and age conditions'],
      ['Structure', 'Two compulsory papers of three hours each, both covering all three subjects'],
      ['Marking scheme', 'Deliberately variable — read the instructions in the hall'],
      ['Additional test', 'Architecture Aptitude Test for candidates seeking architecture admission at IITs'],
    ],
    overview: [
      {
        type: 'p',
        text: 'JEE Advanced selects for the IITs. It is sat only by candidates who have cleared the eligibility band in JEE Main, which means the field is already strong — and the paper is designed accordingly. Questions typically combine two or three concepts, require multi-step reasoning, and cannot be answered by recognising a familiar type.',
      },
      {
        type: 'p',
        text: 'Both papers are compulsory and both cover physics, chemistry and mathematics, so a candidate sits six hours of examination across one day. The number of attempts is limited to consecutive years, which means a candidate has very few genuine opportunities and each one matters.',
      },
      {
        type: 'list',
        title: 'What distinguishes it from JEE Main',
        items: [
          { text: 'Depth over breadth', note: 'the same syllabus in outline, examined through problems that combine concepts rather than testing them singly.' },
          { text: 'A variable marking scheme', note: 'question types and penalties change between years and between papers, and are announced only in the paper itself.' },
          { text: 'Partial marking', note: 'multiple-correct questions frequently award partial credit, which makes the decision to attempt them a genuine calculation.' },
          { text: 'Two papers in one day', note: 'six hours of demanding problem solving, which makes stamina a real factor.' },
        ],
      },
      {
        type: 'note',
        title: 'Read the instructions in the hall, carefully',
        text: 'Because the marking scheme is not fixed year to year, the instruction page at the start of each paper is not a formality — it tells you the rules you are playing under, including how partial marking works and what a wrong answer costs. Candidates who skim it and apply last year’s assumptions lose marks for no reason at all.',
      },
    ],
    stages: [
      {
        name: 'Paper 1',
        mode: 'Computer-based, 3 hours',
        detail:
          'Physics, chemistry and mathematics, in a question format and marking scheme determined by the conducting IIT for that year. Compulsory.',
      },
      {
        name: 'Paper 2',
        mode: 'Computer-based, 3 hours',
        detail:
          'The same three subjects, frequently in a different question format and marking scheme from Paper 1. Also compulsory — both papers must be attempted.',
      },
      {
        name: 'Architecture Aptitude Test',
        mode: 'Additional test',
        detail:
          'Taken only by candidates seeking admission to architecture programmes at the IITs, after qualifying in JEE Advanced.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'JEE Advanced syllabus — physics, chemistry and mathematics at the depth the IIT entrance examines, with the differences from JEE Main.',
        lead: [
          'The syllabus overlaps heavily with JEE Main. The depth at which each topic is examined does not, and that gap is where the examination lives.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Physics',
                'General physics and units, mechanics including systems of particles, rotational motion and gravitation, thermal physics, electricity and magnetism, electromagnetic induction, optics including wave optics, and modern physics. Problems typically combine mechanics with energy methods, or electromagnetism with circuit analysis, rather than testing a single principle.',
              ],
              [
                'Chemistry',
                'Physical chemistry covering gaseous and liquid states, atomic structure, energetics, chemical equilibrium, electrochemistry, chemical kinetics, solid state, solutions, surface chemistry and nuclear chemistry; inorganic chemistry covering isolation and preparation of metals, the periodic table, transition elements, coordination compounds, ores and minerals, extractive metallurgy, and qualitative analysis; organic chemistry covering concepts, reactions and mechanisms, stereochemistry, and the chemistry of the major functional groups including reasoning-based mechanism questions.',
              ],
              [
                'Mathematics',
                'Algebra including complex numbers, quadratic equations, sequences, permutations and combinations, binomial theorem, matrices and probability; trigonometry; analytical geometry in two and three dimensions; differential and integral calculus; and vectors. Calculus and coordinate geometry carry heavy weight, and questions frequently require combining them.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The syllabus has been revised in recent years, with some topics added and others removed. Because JEE Main and JEE Advanced syllabi are not identical, a candidate preparing for both should check the differences rather than assuming the Advanced syllabus is simply Main studied harder.',
          },
          {
            type: 'list',
            title: 'Where the depth gap between Main and Advanced shows',
            items: [
              { text: 'Physics — multi-concept problems', note: 'Main asks you to apply an idea; Advanced asks you to notice that two ideas apply at once, and often that one of them constrains the other. The syllabus entry is identical; the question is not.' },
              { text: 'Chemistry — mechanism and reasoning', note: 'organic chemistry in particular moves from recognising a reaction to arguing about why a particular product forms. Inorganic chemistry stays closer to Main, which makes it the more reliable scoring ground here.' },
              { text: 'Mathematics — proof-like structure', note: 'questions frequently require a small argument rather than a computation, and the standard forms that carry Main appear in disguised versions.' },
              { text: 'All three — problems with no obvious first step', note: 'the defining feature. A Main problem tells you what it is about; an Advanced problem often does not, and finding the entry point is the actual task.' },
            ],
          },
          {
            type: 'p',
            text: 'Because the syllabus for the two examinations is written separately and has been revised at different times, it is worth doing the comparison explicitly rather than assuming they match. Some topics appear in one and not the other in a given year, and a candidate who assumes complete overlap either prepares material that will not be asked or omits material that will. An hour spent comparing the two current syllabi side by side is one of the better hours in this preparation.',
          },
          {
            type: 'note',
            title: 'Depth is not the same as obscurity',
            text: 'A common misreading of the depth gap sends candidates towards exotic topics and unusually hard problems from unrelated sources. The examination is built on the standard syllabus, worked hard — combinations of ordinary ideas, not rare ones. Problems that require knowledge outside the syllabus are a poor use of preparation time however difficult they feel.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'JEE Advanced exam pattern — two compulsory papers, the variable marking scheme, partial credit and how to handle it.',
        lead: [
          'There is no fixed pattern, and that is the pattern. The examination tests whether you can work out the rules quickly and play by them.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The structure that does stay constant. Everything about question types and marking is decided annually by the conducting IIT.',
            head: ['Element', 'What is fixed', 'What varies'],
            rows: [
              ['Papers', 'Two, both compulsory, three hours each', 'Question composition differs between them'],
              ['Subjects', 'Physics, chemistry and mathematics in both papers', 'The balance of question types per subject'],
              ['Question types', 'Drawn from MCQ, multiple-correct, numerical and matching', 'Which appear, and in what proportion'],
              ['Marking', 'Announced in the paper instructions', 'Full, partial and negative marks all change'],
            ],
          },
          {
            type: 'p',
            text: 'Partial marking is the feature that most rewards careful reading. In a typical multiple-correct question with partial credit, selecting some but not all of the correct options earns a fraction of the marks, while selecting any incorrect option earns a penalty. That structure makes a partially confident answer worth giving and an over-confident one expensive — and the exact rates change between papers.',
          },
          {
            type: 'list',
            title: 'How to handle a variable scheme',
            items: [
              { text: 'Spend the first two minutes reading the instructions properly', note: 'they define the rules of the paper you are about to sit. This is not wasted time.' },
              { text: 'Recalculate your guessing threshold from those rules', note: 'a scheme with partial credit and a small penalty rewards attempting far more than one with a large penalty.' },
              { text: 'Practise across several years of papers', note: 'so that no format is unfamiliar, whichever combination appears.' },
              { text: 'Do not carry last year’s assumptions in', note: 'the commonest self-inflicted loss in this examination.' },
            ],
          },
          {
            type: 'note',
            title: 'Attempts are limited',
            text: 'A candidate may sit JEE Advanced a limited number of times, in consecutive years, subject to the eligibility conditions in force. That constraint — very few opportunities, each a year apart — is worth factoring into how seriously a first attempt is taken.',
          },
          {
            type: 'steps',
            title: 'The first five minutes of an Advanced paper',
            items: [
              { title: 'Read the instruction page properly', text: 'It defines the marking scheme for the paper in front of you, and that scheme differs from last year’s. Two minutes here prevents the most avoidable losses available in this examination.' },
              { title: 'Work out the guessing threshold for each question type', text: 'A scheme with partial credit and a small penalty rewards partial attempts; one with full negative marking on multiple-correct questions punishes them severely. The right behaviour is opposite in the two cases.' },
              { title: 'Scan for the question types present', text: 'Knowing before you start whether the paper contains matching sets, numerical entries or paragraph-based questions lets you plan the order rather than discover the structure question by question.' },
              { title: 'Decide your abandonment rule', text: 'A fixed ceiling per question, set before you begin. In a paper this hard the difference between a good and a poor score is often entirely in what was left alone.' },
            ],
          },
          {
            type: 'p',
            text: 'Partial marking deserves specific thought because it inverts an instinct built over years of JEE Main practice. In a typical multiple-correct question with partial credit, selecting the options you are confident about and leaving the uncertain ones can score more than attempting a complete answer that includes one wrong selection — and in some schemes a single wrong selection removes the partial credit entirely. Which of those applies is stated on the instruction page, and it is the reason to read it.',
          },
          {
            type: 'note',
            title: 'Two papers on one day is a physical demand',
            text: 'Six hours of hard problem-solving in a single day, with a break in the middle, is a stamina task as much as an intellectual one. Candidates who have only ever practised single three-hour papers reliably find that their accuracy falls in the second paper — not because the paper is harder, but because they have never rehearsed being that tired and still thinking clearly.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'JEE Advanced previous year papers — the only realistic way to prepare for a paper whose format changes deliberately.',
        lead: [
          'For an examination that varies its own rules, past papers are not practice material — they are the syllabus of formats you must be ready for.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work through a decade of JEE Advanced papers and you will have met every question format the examination uses: single-correct, multiple-correct with and without partial credit, integer and decimal numerical answers, matching lists in several arrangements, and paragraph-based sets. That familiarity is the point. A candidate who has seen all of them will not lose time working out what a question wants; a candidate who has seen only recent papers may.',
          },
          {
            type: 'steps',
            title: 'A method that fits this examination',
            items: [
              { text: 'Solve a decade of papers, both papers of each year.', note: 'Breadth of format exposure matters as much as topic coverage.' },
              { text: 'For each paper, note its marking scheme before you start.', note: 'Then apply it. Practising with the wrong scheme trains the wrong instincts.' },
              { text: 'Do both papers of a year on the same day, occasionally.', note: 'Six hours is what the examination actually asks of you.' },
              { text: 'Analyse partial-credit questions especially.', note: 'Whether you gained or lost from partial attempts is a measurable and improvable decision.' },
              { text: 'Return to old papers after six months.', note: 'A problem you solved once and can still solve is genuinely learned.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'JEE Main guide', to: '/entrance-exams/engineering/jee-main/' },
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'Physics study material', to: '/study-material/physics/' },
            ],
          },
          {
            type: 'list',
            title: 'What a decade of papers gives you',
            items: [
              { text: 'Every format the examination has used', note: 'single-correct, multiple-correct, numerical entry, matching, paragraph-based, and assertion-reason in their various incarnations. Whichever combination appears in your year, you will have met it.' },
              { text: 'A sense of how hard is hard enough', note: 'candidates routinely over-estimate the difficulty of Advanced by practising on material harder than the examination has ever set. The papers themselves are the correct calibration.' },
              { text: 'The recurring problem archetypes', note: 'certain configurations return across years in different clothing — particular mechanics setups, particular equilibrium arguments, particular functional equations. Recognising one under time pressure is worth several minutes.' },
              { text: 'Evidence about your own selection', note: 'reviewing which problems you abandoned, and whether you were right to, is a skill that only past papers under time can teach.' },
            ],
          },
          {
            type: 'p',
            text: 'Note the marking scheme at the top of each past paper before you attempt it, and treat it as binding for that attempt. Working every paper under the same familiar rules defeats the main purpose of using a decade of them, which is to become comfortable recalculating your risk appetite on the spot. The scheme is part of the problem set, not administrative detail attached to it.',
          },
          {
            type: 'p',
            text: 'Returning to old papers after six months is unusually informative in this examination. A problem you solved by recalling the method is not evidence of anything; a problem you can solve again, having forgotten the specific trick, is. The second pass separates genuine capability from remembered solutions, and it is the closest thing to an honest self-assessment available at this level.',
          },
          {
            type: 'note',
            title: 'Analyse the partial-credit questions hardest',
            text: 'For each multiple-correct question, ask not only whether you got it right but whether your attempt decision was correct under that paper’s scheme. Over a decade of papers a pattern emerges — most candidates find they were either systematically too cautious or systematically too aggressive — and correcting that single tendency is worth more marks than any additional topic.',
          },
        ],
      },
      'mock-tests': {
        description:
          'JEE Advanced mock tests — practice across varied formats, with six-hour days and partial-marking decision analysis.',
        lead: [
          'Vary the format of your own mocks deliberately. Comfort with one pattern is not preparation for an examination that changes its pattern.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most useful JEE Advanced mock is one whose format you did not expect. Practising the same pattern repeatedly builds fluency in that pattern and nothing else, while the examination is specifically designed to present something you have not rehearsed. Rotating through past papers of different years achieves this naturally.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Net outcome of partial-credit attempts', note: 'did attempting partially known multiple-correct questions gain or lose you marks overall?' },
              { text: 'Accuracy in Paper 2 versus Paper 1', note: 'a decline signals stamina, and the remedy is more six-hour days rather than more study.' },
              { text: 'Time lost to unfamiliar formats', note: 'if a question type slowed you down, it is a format to practise rather than a topic to revise.' },
              { text: 'Problems abandoned and their cost', note: 'in a paper this hard, knowing what to leave is worth as much as knowing how to solve.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'Building format adaptability deliberately',
            items: [
              { title: 'Rotate the marking scheme between mocks', text: 'Take one under a partial-credit scheme, the next with full negative marking on multiple-correct questions. The point is to practise recalculating, not to settle into a routine.' },
              { title: 'Occasionally take a mock with an unannounced format', text: 'Have someone else choose the paper, or work an old paper without checking the year first. Meeting an unexpected structure is the specific experience this examination is designed to create.' },
              { title: 'Schedule six-hour days monthly', text: 'Two papers, a realistic break, one day. Stamina is trained and cannot be improvised, and Paper 2 is where it shows.' },
              { title: 'Track abandonment as a metric', text: 'Problems left, minutes spent before leaving them, and whether the review showed they were genuinely long. Good selection is measurable and therefore improvable.' },
            ],
          },
          {
            type: 'p',
            text: 'The most valuable review step after an Advanced mock is not going through the problems you got wrong but going through the ones you did not attempt. Some will turn out to have been tractable, which is a selection error and the most expensive kind in a paper where every problem is worth real marks. Others will confirm your judgement, which is worth knowing too — it builds the confidence to leave things quickly next time.',
          },
          {
            type: 'note',
            title: 'A falling score on harder mocks is not a signal',
            text: 'Mock papers vary widely in difficulty and are not normalised against each other, so the absolute score across different sources carries little information. What carries information is your behaviour: how long you spent stuck, whether your attempt decisions were sound under that paper’s scheme, and whether the second paper held up. Track those rather than the number.',
          },
        ],
      },
      preparation: {
        description:
          'JEE Advanced preparation strategy — building conceptual depth, problem-solving stamina and format adaptability.',
        lead: [
          'Prepare for problems you have not seen. That is a different objective from covering a syllabus, and it needs a different method.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A candidate can cover the entire JEE Advanced syllabus and still find the paper impenetrable, because the examination does not test whether you have met a topic — it tests whether you can combine two or three of them under pressure on a problem nobody has shown you. The preparation that produces that ability is prolonged practice on genuinely hard problems, worked through rather than looked up.',
          },
          {
            type: 'steps',
            title: 'A plan for the year after JEE Main preparation begins',
            items: [
              { text: 'Build the JEE Main foundation first.', note: 'Advanced-level problem solving on a shaky foundation produces frustration rather than progress.' },
              { text: 'From class 11 — work hard problems, slowly.', note: 'One difficult problem worked through completely teaches more than ten routine ones.' },
              { text: 'Never look up a solution before an honest attempt.', note: 'The struggle is where the learning happens; reading the solution first replaces it with recognition.' },
              { text: 'Study the syllabus differences from JEE Main.', note: 'The two are not identical, and the Advanced syllabus has been revised.' },
              { text: 'From the final year — past papers across a decade.', note: 'For format breadth as much as for topic coverage.' },
              { text: 'Practise six-hour days periodically.', note: 'Both papers, same day, which is what the examination asks.' },
              { text: 'Maintain an error log classified by cause.', note: 'Concept gap, algebraic slip, misread, or a partial-marking decision that went wrong.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates candidates who convert',
            items: [
              { text: 'Time spent stuck on problems', note: 'productive struggle is the mechanism by which this ability is built.' },
              { text: 'Format breadth', note: 'having met every question type the examination has used.' },
              { text: 'Reading the instruction page carefully', note: 'a free two minutes that prevents avoidable losses under an unfamiliar scheme.' },
              { text: 'Stamina', note: 'six hours of hard problem solving in one day is a physical as well as intellectual task.' },
              { text: 'Not treating Advanced as harder Main', note: 'the difference is in kind as much as in degree.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Productive struggle',
                'The mechanism by which the ability this examination tests is actually built. Time spent genuinely stuck on a problem — twenty minutes, thirty — is not wasted time; it is the training. Candidates who consult a solution after five minutes accumulate exposure without accumulating capability, and the difference shows up precisely on the problems that have no obvious first step.',
              ],
              [
                'Format breadth',
                'Having met every question type the examination has used, so that no structure costs you time on the day. Built entirely from past papers, and cheap to acquire relative to what it protects.',
              ],
              [
                'Stamina',
                'Six hours of hard thinking in a day, rehearsed rather than assumed. It is the component most often left entirely unpractised and the one most visible in a Paper 2 score.',
              ],
              [
                'Selection judgement',
                'Knowing what to leave. In a paper where several problems are designed to consume twenty minutes each, the candidate who identifies them early has bought time the candidate who solves them heroically has spent.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The limited number of attempts changes the calculus of this examination in a way worth thinking about explicitly. A candidate has a small, fixed number of consecutive-year opportunities, which means the decision about how to use a given year — whether to sit it under-prepared for the experience, or to protect the attempt — is real rather than academic. Read the current eligibility rules carefully, because the constraint is on attempts and years rather than on age alone.',
          },
          {
            type: 'note',
            title: 'Advanced is not Main with harder numbers',
            text: 'The difference is in kind rather than degree. Main rewards fluency in standard techniques applied quickly; Advanced rewards the ability to construct an approach to a problem you have not seen. A preparation that consists of doing Main-style practice at greater volume will produce a better Main score and will not, on its own, produce an Advanced one.',
          },
        ],
      },
      'study-material': {
        description:
          'JEE Advanced study material — physics, chemistry and mathematics notes, with guidance on problem sources for advanced practice.',
        lead: [
          'Notes establish the concepts. For JEE Advanced, what builds capability is a hard problem set worked through without shortcuts.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Concept notes matter, but they are the smaller half of JEE Advanced preparation. The larger half is a body of genuinely difficult problems worked through honestly — where you sit with a problem for twenty minutes before it yields, and where you resist looking up the solution. That habit, sustained over two years, is what the examination actually rewards.',
          },
          {
            type: 'links',
            title: 'Subject notes for JEE Advanced',
            items: [
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'JEE Main guide', to: '/entrance-exams/engineering/jee-main/' },
            ],
          },
          {
            type: 'list',
            title: 'How to work at this level',
            items: [
              'Attempt every problem for a genuine stretch before consulting any solution.',
              'When you do read a solution, close it and reproduce the argument from memory.',
              'Keep an error log classified by cause rather than by chapter.',
              'Revisit hard problems after a month; solving one twice is what proves it is learned.',
              'Check the Advanced syllabus against the Main syllabus rather than assuming they match.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'A hard problem set, worked honestly',
                'The core material. What matters is not which source you choose but that the problems require you to construct an approach rather than recognise one, and that you work them without shortcuts. One demanding book finished is worth several sampled.',
              ],
              [
                'Past papers — the second core source',
                'A decade of them, treated as material rather than as assessment. They are simultaneously the best calibration of difficulty, the complete catalogue of formats, and the most reliable indicator of what the examiners consider fair.',
              ],
              [
                'Concept notes — necessary, not sufficient',
                'You cannot construct an argument from ideas you do not have, so the conceptual base matters. But it is the smaller half of this preparation, and candidates who keep returning to theory are usually avoiding the problems.',
              ],
              [
                'The error log — classified by cause',
                'At this level the useful classification is rarely by chapter. It is by what went wrong: no entry point found, entry point found too late, correct approach with an algebraic failure, or a misread of what was asked.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'There is a specific discipline worth adopting when you do consult a solution: read it, close it, and reproduce the argument from memory before moving on. Reading a solution and feeling that it makes sense is almost worthless — the sensation of following an argument is not the same as being able to generate it. Reproducing it forces you to identify the step you would not have found, which is the only part of the solution that was ever going to teach you anything.',
          },
          {
            type: 'note',
            title: 'Re-solve hard problems after a month',
            text: 'A problem solved once may have been solved by insight, by luck, or by a hint you no longer remember receiving. A problem solved twice, a month apart, is learned. Building a short list of the hardest problems you have worked and revisiting it periodically is a better use of late preparation time than meeting an equivalent number of new ones.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the JEE Advanced exam pattern?',
        a: 'Two compulsory papers of three hours each, both covering physics, chemistry and mathematics, sat on the same day. Beyond that, the pattern is deliberately variable: the conducting IIT decides each year which question types appear — single-correct, multiple-correct with or without partial credit, numerical answer, matching lists — and what the marking and penalties are. Those rules are announced in the instruction page of the paper itself rather than in advance.',
      },
      {
        q: 'Why does the JEE Advanced marking scheme change every year?',
        a: 'Because adaptability is part of what the examination assesses. A fixed pattern rewards candidates who have drilled that pattern; a variable one rewards candidates who understand the subject and can work out how to play under whatever rules apply. The practical consequence is that the first two minutes of each paper, spent reading the instructions properly, are among the most valuable of the three hours — and that carrying last year’s assumptions into this year’s paper is a common and entirely avoidable loss.',
      },
      {
        q: 'How is JEE Advanced different from JEE Main?',
        a: 'The syllabi overlap in outline but not exactly, and the depth differs sharply. JEE Main questions generally test one concept at a time and reward speed and accuracy; JEE Advanced questions typically combine two or three concepts and require multi-step reasoning on problems that cannot be answered by recognising a familiar type. Advanced also runs two compulsory papers in one day, uses a variable marking scheme with partial credit, and is sat only by candidates who reach a defined band in Main.',
      },
      {
        q: 'How many attempts do I get at JEE Advanced?',
        a: 'A limited number, and only in consecutive years, subject to the eligibility conditions in force for each cycle along with age and class 12 performance conditions. Because opportunities are few and a year apart, there is little room for treating a first attempt as practice — which is one reason candidates are advised to sit the first JEE Main session as their calibration instead, since that examination allows the better of two results to count.',
      },
      {
        q: 'How should I prepare differently for JEE Advanced?',
        a: 'By working genuinely hard problems slowly, rather than covering more syllabus. The examination tests whether you can combine concepts on a problem nobody has shown you, and that ability comes from sustained productive struggle — attempting a difficult problem for twenty minutes before it yields, and resisting the urge to read the solution first. Alongside that, work a decade of past papers for breadth of question format, since the format you meet is not announced in advance.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     BITSAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'bitsat',
    path: '/entrance-exams/engineering/bitsat/',
    name: 'BITSAT',
    fullName: 'Birla Institute of Technology and Science Admission Test',
    authority: 'BITS Pilani',
    official: 'bitsadmission.com',
    seoTitle: 'BITSAT 2026: Pattern, Bonus Questions, Syllabus & Strategy',
    metaDescription:
      'BITSAT exam guide — 130-question pattern with English and logical reasoning, the bonus questions rule, syllabus and preparation strategy.',
    lead: [
      'BITSAT is the entrance test for the Birla Institute of Technology and Science campuses at Pilani, Goa and Hyderabad. It covers physics, chemistry and mathematics like every other engineering entrance, and then adds two sections nobody else asks for: English proficiency and logical reasoning.',
      'It also has a rule found in no other Indian entrance examination. Finish all 130 questions with time remaining and you may opt for twelve additional bonus questions — but doing so is irreversible, and you cannot return to the questions you have already answered.',
    ],
    quickFacts: [
      ['Conducted by', 'BITS Pilani'],
      ['Campuses', 'Pilani, Goa and Hyderabad'],
      ['Level', 'Class 12 with physics, chemistry and mathematics, and prescribed minimum marks'],
      ['Structure', '130 questions, 3 hours — including English proficiency and logical reasoning'],
      ['Marking', 'Three marks for a correct answer, one deducted for a wrong one'],
      ['Distinctive rule', 'Twelve bonus questions available if you finish early — an irreversible choice'],
    ],
    overview: [
      {
        type: 'p',
        text: 'BITSAT is used for admission to the BITS campuses, which admit purely on test score without reference to a national counselling process. Admission is based on the BITSAT score alongside a minimum class 12 performance requirement, and the cutoffs for the popular programmes are high.',
      },
      {
        type: 'p',
        text: 'The paper differs from JEE Main in two important ways. It is longer in question count and shorter per question, which makes it distinctly a speed test. And thirty of its questions come from English proficiency and logical reasoning — sections that require no additional study for a well-read candidate but that are easy marks left on the table by those who ignore them entirely.',
      },
      {
        type: 'list',
        title: 'The five sections',
        items: [
          { text: 'Physics and Chemistry', note: 'thirty questions each, at a level comparable to JEE Main.' },
          { text: 'Mathematics or Biology', note: 'forty questions — biology for candidates applying to the pharmacy programme.' },
          { text: 'English Proficiency', note: 'ten questions on grammar, vocabulary and comprehension.' },
          { text: 'Logical Reasoning', note: 'twenty questions on verbal and non-verbal reasoning.' },
        ],
      },
      {
        type: 'note',
        title: 'The bonus questions are a one-way door',
        text: 'If you complete all 130 questions before time expires, you may opt to attempt twelve additional questions — four each in physics, chemistry and mathematics. Choosing this is irreversible: you cannot go back to review or change any earlier answer. That makes it a genuine decision rather than a free bonus, and it should be made deliberately rather than in the moment.',
      },
    ],
    stages: [
      {
        name: 'BITSAT computer-based test',
        mode: 'Objective, 3 hours',
        detail:
          '130 questions across physics (30), chemistry (30), mathematics or biology (40), English proficiency (10) and logical reasoning (20). Three marks for a correct answer, one deducted for a wrong one.',
      },
      {
        name: 'Bonus questions',
        mode: 'Optional, irreversible',
        detail:
          'Available only to candidates who complete all 130 questions with time remaining. Twelve additional questions — four each in physics, chemistry and mathematics. Opting in prevents any return to earlier questions.',
      },
      {
        name: 'Admission',
        mode: 'Score-based',
        detail:
          'Admission to BITS campuses is made on the BITSAT score against programme-wise cutoffs, subject to the prescribed minimum class 12 performance in physics, chemistry and mathematics and in aggregate.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'BITSAT syllabus — physics, chemistry and mathematics at class 11 and 12 level, plus English proficiency and logical reasoning.',
        lead: [
          'The science syllabus is close to JEE Main. The two additional sections are what a JEE-focused preparation will not have covered at all.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Physics',
                'Units and measurement, kinematics, Newton’s laws of motion, impulse and momentum, work and energy, rotational motion, gravitation, mechanics of solids and fluids, oscillations, waves, heat and thermodynamics, electrostatics, current electricity, magnetic effect of current, electromagnetic induction, optics, modern physics and electronic devices.',
              ],
              [
                'Chemistry',
                'States of matter, atomic structure, chemical bonding and molecular structure, thermodynamics, physical and chemical equilibria, electrochemistry, chemical kinetics, hydrogen and s-block elements, p-d-and f-block elements, principles of organic chemistry and hydrocarbons, stereochemistry, organic compounds with functional groups, biological and industrial chemistry, and theoretical principles of experimental chemistry.',
              ],
              [
                'Mathematics',
                'Algebra, trigonometry, two- and three-dimensional coordinate geometry, differential calculus, integral calculus, ordinary differential equations, probability, vectors, statistics, linear programming and mathematical modelling. Note the inclusion of linear programming and mathematical modelling, which JEE Main does not carry.',
              ],
              [
                'English Proficiency',
                'Grammar covering agreement, time and tense, parallel construction, relative pronouns, determiners, prepositions, modals, voice and transformation; vocabulary covering synonyms, antonyms, one-word substitution, analogy and spelling; and reading comprehension including content, tone and inference.',
              ],
              [
                'Logical Reasoning',
                'Verbal reasoning covering analogy, classification, series completion, logical deduction and chart logic; and non-verbal reasoning covering pattern perception, figure formation and analysis, paper cutting, figure matrix and rule detection.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The two sections beyond the sciences are worth thirty of the hundred and thirty questions — nearly a quarter of the paper — and they need very little preparation to score well in. A few hours a week on logical reasoning and a habit of reading English carefully will secure most of those marks, which is one of the better returns available in engineering entrance preparation.',
          },
          {
            type: 'list',
            title: 'What a JEE-prepared candidate is missing',
            items: [
              { text: 'Logical reasoning — twenty questions', note: 'verbal and non-verbal: analogy, classification, series, logical deduction, figure completion, pattern perception and paper folding. No conceptual depth, and it improves quickly with practice.' },
              { text: 'English proficiency — ten questions', note: 'grammar, vocabulary, and short comprehension. A finite rule set and a modest word list cover most of it.' },
              { text: 'A mathematics topic or two', note: 'linear programming and mathematical modelling appear in the BITSAT syllabus and are not part of a standard JEE preparation. Small, self-contained, and easily missed entirely.' },
              { text: 'A different tempo', note: 'not a syllabus item but a real gap. The science sections are pitched below JEE Main in difficulty and well above it in required pace.' },
            ],
          },
          {
            type: 'p',
            text: 'The proportions are what make this worth acting on. Thirty of a hundred and thirty questions come from the two additional sections — close to a quarter of the paper — and at three marks each they are worth ninety marks. Those ninety marks require perhaps three weeks of light, low-difficulty practice, which is an extraordinary rate of return compared with the effort required to gain the equivalent in physics or mathematics.',
          },
          {
            type: 'note',
            title: 'Biology instead of mathematics for pharmacy applicants',
            text: 'Candidates applying to the pharmacy programme take biology in place of mathematics. The rest of the paper — physics, chemistry, English proficiency, logical reasoning and the bonus question rule — is unchanged, so most of the guidance here applies without modification.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'BITSAT exam pattern — the 130-question structure, marking, timing pressure and how the bonus question rule works.',
        lead: [
          'A hundred and thirty questions in three hours, with a mark deducted for each error. Speed and accuracy both bind, which is unusual.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm question counts, marking and the bonus question rules against the current admission brochure.',
            head: ['Section', 'Questions', 'Notes'],
            rows: [
              ['Physics', '30', 'Comparable in level to JEE Main'],
              ['Chemistry', '30', 'Comparable in level to JEE Main'],
              ['Mathematics or Biology', '40', 'Biology for pharmacy applicants'],
              ['English Proficiency', '10', 'Grammar, vocabulary and comprehension'],
              ['Logical Reasoning', '20', 'Verbal and non-verbal'],
              ['Total', '130', '3 hours — about 83 seconds per question'],
            ],
          },
          {
            type: 'p',
            text: 'Three marks for a correct answer and one deducted for a wrong one means a blind guess among four options is slightly negative, while a guess narrowed to two is clearly positive. Combined with the pace — under a minute and a half per question — the paper rewards candidates who move quickly through what they know and skip decisively rather than pursuing hard questions.',
          },
          {
            type: 'list',
            title: 'The bonus question decision',
            items: [
              { text: 'Available only if all 130 are completed', note: 'with time remaining on the clock.' },
              { text: 'Twelve additional questions', note: 'four each in physics, chemistry and mathematics.' },
              { text: 'Irreversible', note: 'you cannot return to review or change any earlier answer once you opt in.' },
              { text: 'The trade-off', note: 'twelve chances at three marks each, against the ability to check work you may have rushed. Decide in advance which you would rather have.' },
            ],
          },
          {
            type: 'note',
            title: 'Think about the bonus decision before the exam',
            text: 'Made in the moment, under time pressure, this decision tends to be made badly. A candidate confident in their accuracy gains from the extra questions; one who knows they rush and make slips is usually better served by the review time. Decide which you are before the day, and then follow your own decision.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why eighty-three seconds a question is the real constraint',
                'JEE Main allows about two minutes; BITSAT allows well under half of that. The questions are correspondingly easier, but the margin for deliberation is gone. A candidate who solves BITSAT questions with JEE-style thoroughness will be accurate and will not finish, which in this paper is the more expensive failure.',
              ],
              [
                'What three-for-one means for guessing',
                'A blind guess across four options is slightly positive in expectation, and a guess narrowed to two is clearly worth taking. But the deduction is real enough that rushing into avoidable errors costs more than the extra questions gain — which is the tension this paper is built around.',
              ],
              [
                'Why the bonus rule is a genuine dilemma',
                'Twelve extra questions at three marks each is thirty-six marks of upside. The cost is the ability to revisit anything — and in a paper sat at this pace, there are usually several answers you would want to check. The trade is real in both directions, which is exactly why it should not be decided in the moment.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A defensible policy, decided in advance: opt for the bonus questions only if you finished with genuine time to spare and are not carrying a list of answers you meant to revisit. If you rushed the last section, or if there are three or four questions you flagged as uncertain, the checking time is worth more than twelve fresh attempts at unseen material. Write your rule down before the examination and follow it rather than re-deciding under pressure.',
          },
          {
            type: 'note',
            title: 'Confirm the current structure',
            text: 'Question counts, the bonus question rules and the section composition have been adjusted between cycles. Read the current information brochure rather than relying on a description written for an earlier year — and note in particular any change to how the bonus option is offered, since a policy decided against the old rules may not apply.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'BITSAT previous year papers — building the speed the paper demands and covering the reasoning and English sections.',
        lead: [
          'BITSAT is a speed test more than a difficulty test. Past papers are where you find out whether your pace matches it.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Compared with JEE Main, BITSAT questions are individually easier and there are far more of them. That changes what past-paper practice is for: not to stretch your understanding, but to compress the time you take on questions you already know how to do. A candidate who solves everything correctly but slowly will not finish.',
          },
          {
            type: 'steps',
            title: 'What to practise',
            items: [
              { text: 'Time each section separately at first.', note: 'Find out where your minutes actually go before practising the full paper.' },
              { text: 'Drill English and logical reasoning specifically.', note: 'Thirty questions that a JEE-focused preparation ignores entirely, and which are quick marks once practised.' },
              { text: 'Include linear programming and mathematical modelling.', note: 'They appear in the BITSAT mathematics syllabus but not in JEE Main.' },
              { text: 'Practise finishing early deliberately.', note: 'If you intend to take the bonus questions, you need the pace that makes them available.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'JEE Main guide', to: '/entrance-exams/engineering/jee-main/' },
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'Reasoning study material', to: '/study-material/reasoning/' },
            ],
          },
          {
            type: 'list',
            title: 'What past papers reveal about the science sections',
            items: [
              { text: 'Single-step questions dominate', note: 'most physics and chemistry questions test one idea directly rather than combining two. A candidate trained on JEE-style multi-concept problems is over-equipped and needs to practise recognising simplicity quickly.' },
              { text: 'Formula recall matters more than usual', note: 'at this pace there is no time to re-derive. Results that a JEE candidate would happily reconstruct need to be immediately available here.' },
              { text: 'Chemistry is the fastest section for most candidates', note: 'and therefore the place to bank time for mathematics, which is both the largest section and the slowest per question.' },
              { text: 'The reasoning section is entirely learnable', note: 'the same question families recur, and each has a method that takes an afternoon to acquire and pays for the rest of the paper.' },
            ],
          },
          {
            type: 'p',
            text: 'Practise finishing early on purpose, which sounds odd and is the specific skill this paper rewards. Set yourself a target of completing all hundred and thirty questions with ten minutes remaining, and treat falling short of that as the finding rather than treating your accuracy as the finding. Most candidates who underperform at BITSAT do so because they ran out of paper, not because they got things wrong.',
          },
          {
            type: 'p',
            text: 'Time the sections separately in your early practice, then together later. Separate timing tells you where your pace is actually failing — and it is very often mathematics, where forty questions at eighty-three seconds each is a genuinely demanding rate. Combined timing later tells you whether the section-level improvements survive when you have to make the allocation decisions yourself.',
          },
          {
            type: 'note',
            title: 'Cover linear programming and mathematical modelling explicitly',
            text: 'These two topics sit in the BITSAT mathematics syllabus and outside a standard JEE preparation, which means a candidate working only from JEE material will meet them for the first time in the examination. They are small and self-contained; an afternoon each is enough, and skipping them is a wholly avoidable loss.',
          },
        ],
      },
      'mock-tests': {
        description:
          'BITSAT mock tests — full 130-question computer-based practice including the English and reasoning sections.',
        lead: [
          'Practise the whole paper, including the two sections JEE preparation skips. They are a quarter of the questions.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A common error is to practise BITSAT using JEE Main mocks on the assumption that the science sections are what matter. They matter most, but thirty questions of English and reasoning at three marks each is ninety marks — enough to move a rank substantially, and available for far less effort than an equivalent gain in physics would cost.',
          },
          {
            type: 'list',
            title: 'What to track',
            items: [
              { text: 'Whether you finish', note: 'the primary question in this paper. If you do not, the fix is pace on easy questions rather than more study.' },
              { text: 'Time per section', note: 'English and reasoning should be fast; if they are not, they need practice rather than avoidance.' },
              { text: 'Accuracy under speed', note: 'with a mark deducted per error, rushing into mistakes can cost more than the questions gained.' },
              { text: 'Your bonus question decision', note: 'simulate it. Finishing early and choosing is a scenario worth rehearsing.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A BITSAT mock routine',
            items: [
              { title: 'Take the whole paper, all five sections', text: 'A JEE Main mock covers ninety of the hundred and thirty questions and none of the pacing pressure that defines this examination.' },
              { title: 'Record completion before accuracy', text: 'Did you finish? That is the primary question. Accuracy analysis on an unfinished paper is analysis of the wrong problem.' },
              { title: 'Check English and reasoning timing', text: 'Thirty questions that should take a small fraction of the three hours. If they are eating time, they need practice — they are not sections to work slowly.' },
              { title: 'Simulate the bonus decision', text: 'When you do finish early, actually make the choice and live with it. Rehearsing the decision once or twice is what makes the real one calm.' },
              { title: 'Take mocks on a computer', text: 'The examination is computer-based and the interface costs time you have not budgeted for if you meet it first on the day.' },
            ],
          },
          {
            type: 'p',
            text: 'A useful diagnostic is to compare your accuracy on the first sixty questions with your accuracy on the last sixty. A pronounced drop is a pacing signal — you started comfortably, realised you were behind, and rushed — and the remedy is not more study but a faster, more consistent tempo from the beginning. A flat profile with modest accuracy is a different diagnosis entirely and points at the science preparation itself.',
          },
          {
            type: 'note',
            title: 'Do not diagnose BITSAT with JEE mocks',
            text: 'A candidate scoring well in JEE Main mocks may still be poorly prepared for this paper, because the two examinations reward opposite things at the margin — deliberation versus pace, and depth versus breadth of section. Use BITSAT-format mocks to assess BITSAT readiness, however good the JEE numbers look.',
          },
        ],
      },
      preparation: {
        description:
          'BITSAT preparation strategy — adding the reasoning and English sections to a JEE-based preparation, and building speed.',
        lead: [
          'If you are preparing for JEE Main, you are most of the way to BITSAT. The gap is speed, two extra sections and two extra mathematics topics.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'BITSAT rarely justifies a separate preparation. The efficient approach is to prepare for JEE Main properly and then add three things in the final couple of months: logical reasoning practice, English proficiency, and the mathematics topics BITSAT carries that JEE Main does not. Alongside those, deliberate speed work, because the pace is faster than JEE Main demands.',
          },
          {
            type: 'steps',
            title: 'Adding BITSAT to a JEE preparation',
            items: [
              { text: 'Two months out — start logical reasoning, twenty minutes daily.', note: 'Verbal and non-verbal. It improves quickly and is worth sixty marks.' },
              { text: 'Two months out — English proficiency practice.', note: 'Grammar rules and vocabulary. Thirty marks for very modest effort.' },
              { text: 'Two months out — cover linear programming and mathematical modelling.', note: 'In the BITSAT syllabus but not JEE Main. A short addition.' },
              { text: 'Final six weeks — speed drills on science questions.', note: 'The questions are easier than JEE Main; the constraint is how fast you can move through them.' },
              { text: 'Final month — full 130-question mocks.', note: 'On a computer, three hours, correct marking.' },
              { text: 'Decide your bonus-question policy in advance.', note: 'And rehearse it in at least two mocks.' },
            ],
          },
          {
            type: 'list',
            title: 'The avoidable losses',
            items: [
              { text: 'Ignoring English and logical reasoning', note: 'ninety marks available for a fraction of the effort science marks cost.' },
              { text: 'Not finishing the paper', note: 'the commonest BITSAT failure, and one of pace rather than knowledge.' },
              { text: 'Missing the BITSAT-only mathematics topics', note: 'linear programming and mathematical modelling.' },
              { text: 'Taking the bonus questions impulsively', note: 'an irreversible choice best made before the day rather than under the clock.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'What carries over from JEE preparation',
                'Essentially all of the physics, chemistry and mathematics content, and most of the problem-solving capability. This is why BITSAT rarely justifies a separate preparation and why starting one is usually a misallocation.',
              ],
              [
                'What does not carry over',
                'Pace, the two additional sections, two mathematics topics, and the attempt psychology. Roughly three to six weeks of targeted work, placed after your JEE preparation is substantially built.',
              ],
              [
                'When to start the BITSAT-specific work',
                'About two months out. Earlier and it competes with the science preparation that underpins everything; later and there is not enough time for the reasoning practice to compound.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The English and reasoning sections deserve a specific defence, because candidates deprioritise them almost universally and the reasoning is always the same: they are not real subjects, and science marks are what matter. The arithmetic says otherwise. Ninety marks, available for a few weeks of undemanding daily practice, in a paper where every mark counts equally — there is no science topic on the syllabus that offers a comparable return for the same investment.',
          },
          {
            type: 'note',
            title: 'Write your bonus-question policy down',
            text: 'Decide the rule now, in writing, while you are calm: under what conditions you will opt in and under what conditions you will not. The decision is irreversible, it arrives at the end of three hours of sustained pace, and candidates who leave it to the moment consistently report making it on instinct and regretting it either way.',
          },
        ],
      },
      'study-material': {
        description:
          'BITSAT study material — physics, chemistry and mathematics notes plus reasoning and English for the additional sections.',
        lead: [
          'Your JEE material covers the sciences. These add the two sections it does not.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The reasoning and English notes below are the ones a JEE-focused candidate is most likely to be missing, and they are worth the small time investment: thirty questions at three marks each, on material that improves quickly with practice and requires no conceptual depth.',
          },
          {
            type: 'links',
            title: 'Subject notes for BITSAT',
            items: [
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'A final-months routine',
            items: [
              'Twenty minutes of logical reasoning daily — verbal one day, non-verbal the next.',
              'Fifteen minutes of English grammar and vocabulary.',
              'Science practice timed tightly, since speed rather than difficulty is the constraint.',
              'One full 130-question mock a week on a computer.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Logical reasoning — the highest return in this preparation',
                'Verbal reasoning covers analogy, classification, series completion and logical deduction; non-verbal covers pattern perception, figure formation and completion, figure matrix and paper cutting. Each family has a method, and twenty minutes a day for a month covers all of them.',
              ],
              [
                'English proficiency — a short rule set',
                'Agreement, tense, parallel construction, determiners, prepositions and modifiers, plus a vocabulary list and short comprehension practice. Finite enough to be genuinely finished, which is rare in this preparation.',
              ],
              [
                'Science — your existing JEE material, worked faster',
                'No new sources needed. What changes is how you practise it: timed tightly, aiming at recognition speed rather than at the ability to handle a harder version of the same question.',
              ],
              [
                'The two extra mathematics topics',
                'Linear programming and mathematical modelling, worked from any standard source. Small, self-contained, and the most commonly skipped part of a BITSAT syllabus.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Alternate verbal and non-verbal reasoning day by day rather than working through one and then the other. The two use different mental operations, the families within each are numerous but shallow, and alternating keeps both fresh over the weeks that matter. It also prevents the common outcome where a candidate becomes comfortable with verbal reasoning, runs out of time, and meets the non-verbal questions cold.',
          },
          {
            type: 'note',
            title: 'Practise science against a stopwatch, not a syllabus',
            text: 'In the final six weeks, the useful science practice is not new topics but old topics done faster. Take sets of thirty questions at BITSAT difficulty and work them against a strict clock, aiming to bring your per-question time down towards a minute. Speed at this level of difficulty is a trainable skill and it is what the paper actually measures.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the BITSAT exam pattern?',
        a: 'A three-hour computer-based test of 130 questions: physics (30), chemistry (30), mathematics or biology (40), English proficiency (10) and logical reasoning (20). Three marks are awarded for a correct answer and one is deducted for a wrong one. Candidates who complete all 130 questions with time remaining may opt for twelve additional bonus questions, four each in physics, chemistry and mathematics.',
      },
      {
        q: 'How do BITSAT bonus questions work?',
        a: 'If you finish all 130 questions before time expires, you may choose to attempt twelve extra questions worth three marks each. The choice is irreversible — once you opt in, you cannot return to review or change any earlier answer. That makes it a genuine trade-off between twelve additional scoring chances and the ability to check work you may have rushed. Because the decision is made under time pressure, it is best settled in advance: a candidate confident in their accuracy generally gains, while one prone to slips is often better served by the review time.',
      },
      {
        q: 'How is BITSAT different from JEE Main?',
        a: 'BITSAT adds two sections JEE Main does not have — English proficiency and logical reasoning, together worth thirty of the 130 questions — and its mathematics syllabus includes linear programming and mathematical modelling, which JEE Main omits. The science questions are generally easier than JEE Main’s but there are more of them in the same three hours, which makes BITSAT distinctly more of a speed test. Its marking is also gentler, at three marks gained against one lost.',
      },
      {
        q: 'Do I need a separate preparation for BITSAT?',
        a: 'Rarely. A proper JEE Main preparation covers the science sections well, and the efficient approach is to add three things in the final two months: logical reasoning practice, English proficiency work, and the two mathematics topics BITSAT carries that JEE Main does not. Alongside those, deliberate speed practice, because the pace BITSAT demands is faster than JEE Main’s and not finishing is the commonest way candidates lose marks here.',
      },
      {
        q: 'Are the English and logical reasoning sections worth preparing?',
        a: 'Very much so. Thirty questions at three marks each is ninety marks — nearly a quarter of what the paper offers — on material that improves quickly with modest practice and requires no conceptual depth. It is one of the best returns available anywhere in engineering entrance preparation, and it is routinely left on the table by candidates who treat BITSAT as a JEE paper with a different name.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     VITEEE
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'viteee',
    path: '/entrance-exams/engineering/viteee/',
    name: 'VITEEE',
    fullName: 'VIT Engineering Entrance Examination',
    authority: 'Vellore Institute of Technology',
    official: 'vit.ac.in',
    seoTitle: 'VITEEE 2026: Pattern, No Negative Marking, Syllabus & Strategy',
    metaDescription:
      'VITEEE exam guide — 125-question pattern with no negative marking, aptitude and English sections, syllabus and preparation strategy.',
    lead: [
      'VITEEE is the entrance examination for the Vellore Institute of Technology campuses. It follows the familiar physics, chemistry and mathematics structure, adds short aptitude and English sections, and differs from most engineering entrances in one respect that should change how you attempt it entirely.',
      'There is no negative marking. Not a reduced penalty — none. Every question you leave blank is a guaranteed zero where a guess costs nothing, and yet candidates trained on JEE-style papers routinely submit VITEEE papers with unanswered questions.',
    ],
    quickFacts: [
      ['Conducted by', 'Vellore Institute of Technology'],
      ['Campuses', 'Vellore, Chennai, Amaravati and Bhopal'],
      ['Level', 'Class 12 with physics, chemistry and mathematics or biology'],
      ['Structure', '125 questions in 2 hours 30 minutes'],
      ['Negative marking', 'None — attempt every question'],
      ['Sections', 'Mathematics or biology, physics, chemistry, aptitude and English'],
    ],
    overview: [
      {
        type: 'p',
        text: 'VITEEE is used for admission to engineering programmes across the VIT campuses. It is a computer-based test conducted over a window of several days, with candidates allotted a slot, and admission follows from the rank achieved together with the choice-filling and counselling process the institute runs.',
      },
      {
        type: 'p',
        text: 'The paper is shorter and gentler than JEE Main — a hundred and twenty-five questions in two and a half hours, drawn mostly from the class 11 and 12 syllabus, with two brief additional sections on aptitude and English. Its distinguishing feature is the absence of any penalty for a wrong answer.',
      },
      {
        type: 'list',
        title: 'The five sections',
        items: [
          { text: 'Mathematics or Biology', note: 'forty questions; biology for candidates applying to biotechnology and related programmes.' },
          { text: 'Physics', note: 'thirty-five questions at class 11 and 12 level.' },
          { text: 'Chemistry', note: 'thirty-five questions at class 11 and 12 level.' },
          { text: 'Aptitude', note: 'ten questions on data interpretation, data sufficiency, syllogism, number series and directional sense.' },
          { text: 'English', note: 'five questions on comprehension and language use.' },
        ],
      },
      {
        type: 'note',
        title: 'No negative marking changes everything about attempt strategy',
        text: 'With no penalty, there is no such thing as a bad guess. An unanswered question scores zero; a guessed one has a real chance of scoring. Leaving anything blank in VITEEE is a pure, avoidable loss — and the habit of careful skipping, correct in JEE Main, is exactly wrong here.',
      },
    ],
    stages: [
      {
        name: 'VITEEE computer-based test',
        mode: 'Objective, 2 hours 30 minutes',
        detail:
          '125 questions across mathematics or biology (40), physics (35), chemistry (35), aptitude (10) and English (5). No negative marking for wrong answers.',
      },
      {
        name: 'Counselling and admission',
        mode: 'Rank-based',
        detail:
          'Admission to VIT campuses and programmes follows from the VITEEE rank through the institute’s own counselling and choice-filling process.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'VITEEE syllabus — physics, chemistry, mathematics or biology at class 11 and 12 level, plus aptitude and English.',
        lead: [
          'The science syllabus tracks the class 11 and 12 curriculum closely, which means a JEE-oriented preparation covers it comfortably.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Physics',
                'Laws of motion and work energy and power, properties of matter, electrostatics, current electricity, magnetic effects of electric current, electromagnetic induction and alternating current, optics, dual nature of radiation and atomic physics, nuclear physics, and semiconductor devices and their applications.',
              ],
              [
                'Chemistry',
                'Atomic structure, p-d-and f-block elements, coordination chemistry and solid state chemistry, thermodynamics, chemical equilibrium and chemical kinetics, electrochemistry, isomerism in organic compounds, alcohols and ethers, carbonyl compounds, carboxylic acids and their derivatives, organic nitrogen compounds, and biomolecules.',
              ],
              [
                'Mathematics',
                'Matrices and their applications, trigonometry and complex numbers, analytical geometry of two dimensions, vector algebra, analytical geometry of three dimensions, differential calculus, integral calculus and its applications, differential equations, probability distributions, and discrete mathematics.',
              ],
              [
                'Biology (alternative to mathematics)',
                'Taxonomy, cell and molecular biology, reproduction, genetics and evolution, human health and diseases, biochemistry, plant physiology, human physiology, biotechnology and its applications, biodiversity and ecology and environment.',
              ],
              [
                'Aptitude',
                'Data interpretation covering graphs and charts, data sufficiency, syllogism, number series, coding and decoding, and directional sense. Ten questions requiring no preparation beyond basic familiarity.',
              ],
              [
                'English',
                'Comprehension of short passages or lines of dialogue, along with questions on grammar and pronunciation. Five questions.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'One point of difference from JEE Main worth noting: the mathematics syllabus includes discrete mathematics, and physics gives more explicit weight to semiconductor devices. Neither is large, but both are easy to miss if you assume the syllabi are identical.',
          },
          {
            type: 'list',
            title: 'The differences a JEE-prepared candidate should check',
            items: [
              { text: 'Discrete mathematics', note: 'appears in the VITEEE mathematics syllabus and not in a standard JEE preparation. Small and self-contained, and the most commonly missed part of this syllabus.' },
              { text: 'Semiconductor devices treated at length', note: 'the electronics content in physics is given more room here than a JEE-focused candidate will have allocated to it.' },
              { text: 'A short aptitude section', note: 'data interpretation, data sufficiency, syllogism, number series and directions. Ten questions, no depth, and worth an afternoon of familiarisation.' },
              { text: 'A short English section', note: 'five questions on comprehension and language use. Small enough to be tempting to ignore, and cheap enough that ignoring it makes no sense.' },
            ],
          },
          {
            type: 'p',
            text: 'The biology option is worth noting for candidates applying to biotechnology and allied programmes: it replaces mathematics rather than supplementing it, and it covers a conventional class 11 and 12 biology syllabus. Candidates who have prepared for NEET will find it familiar, and the rest of the paper — physics, chemistry, aptitude and English — is unchanged.',
          },
          {
            type: 'note',
            title: 'The syllabus follows school science closely',
            text: 'VITEEE stays close to the class 11 and 12 curriculum in both content and framing, which means school textbooks are genuinely adequate as a base. The examination distinguishes candidates on speed and completeness rather than on depth, so material pitched well above the school level is not the constraint here.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'VITEEE exam pattern — 125 questions in 150 minutes, section-wise distribution, and the absence of negative marking.',
        lead: [
          'A hundred and twenty-five questions, a hundred and fifty minutes, and no penalty for a wrong answer.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm question counts and timing against the current information brochure.',
            head: ['Section', 'Questions', 'Notes'],
            rows: [
              ['Mathematics or Biology', '40', 'Biology for biotechnology and allied programmes'],
              ['Physics', '35', 'Class 11 and 12 level'],
              ['Chemistry', '35', 'Class 11 and 12 level'],
              ['Aptitude', '10', 'Data interpretation, syllogism, series, directions'],
              ['English', '5', 'Comprehension and language use'],
              ['Total', '125', '2 hours 30 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'Just over seventy seconds per question sounds tight, but the questions are individually easier than JEE Main’s, and the absence of a penalty removes the deliberation that slows candidates down elsewhere. The correct approach is to move briskly, answer everything you can reason about, and guess the rest — reserving the final minutes to ensure nothing at all is left blank.',
          },
          {
            type: 'list',
            title: 'How to attempt a paper with no penalty',
            items: [
              { text: 'Never leave a question unanswered', note: 'there is no scenario in which a blank scores better than a guess.' },
              { text: 'Reserve the last three minutes for filling blanks', note: 'even a random selection is strictly better than nothing.' },
              { text: 'Do not agonise over marginal questions', note: 'the penalty that makes deliberation worthwhile elsewhere does not exist here.' },
              { text: 'Take the aptitude and English sections quickly', note: 'fifteen easy questions that should not consume much of your time.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current structure',
            text: 'VITEEE has adjusted its section composition and timing between cycles. The current information brochure is the reliable source for question counts, duration and the slot booking process.',
          },
          {
            type: 'p',
            text: 'The absence of a penalty is the most strategically important fact about this paper, and it is one that a year of JEE preparation actively trains you to mishandle. A JEE-prepared candidate has spent months building the discipline of leaving questions they cannot narrow — a correct and valuable habit there, and a straightforwardly costly one here. Every blank in a VITEEE paper is a mark discarded for no reason at all, and the instinct not to guess has to be deliberately retrained.',
          },
          {
            type: 'steps',
            title: 'How to work the hundred and fifty minutes',
            items: [
              { title: 'Aptitude and English first, quickly', text: 'Fifteen questions that should take a few minutes between them. Banking them early costs almost nothing and removes the risk of never reaching them.' },
              { title: 'Then your strongest science subject', text: 'Building a time cushion while you are fresh, on the section where your per-question rate is highest.' },
              { title: 'Then the remaining two, in order of comfort', text: 'Mathematics or biology is the largest section at forty questions and usually the slowest, so it should have the accumulated surplus rather than the remainder.' },
              { title: 'Last three minutes — fill every blank', text: 'Non-negotiable. With no penalty, a random selection is strictly better than an empty answer, and this single habit is worth several marks.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the structure for your cycle',
            text: 'VITEEE has adjusted its section composition, question counts and duration between cycles. The section order and timings suggested above depend on those proportions, so read the current information brochure and adjust the plan rather than assuming the table you learned last year still holds.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'VITEEE previous year papers — calibrating the level and building the habit of attempting every question.',
        lead: [
          'Past papers serve two purposes here: showing you the level, which is gentler than JEE, and breaking the habit of leaving blanks.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Candidates who have spent a year preparing for JEE Main arrive at VITEEE with instincts calibrated to a penalty regime — skip when uncertain, never guess blindly. Those instincts are precisely wrong here, and they are surprisingly hard to unlearn under exam pressure. Practising past papers with the correct no-penalty rule is how you retrain them.',
          },
          {
            type: 'steps',
            title: 'What to practise',
            items: [
              { text: 'Attempt every question in every practice paper.', note: 'Build the habit deliberately, so that under pressure it is automatic.' },
              { text: 'Time yourself at just over a minute per question.', note: 'The pace is brisk but the questions are easier.' },
              { text: 'Cover discrete mathematics and semiconductor devices.', note: 'Present in the VITEEE syllabus and easy to miss from a JEE-oriented preparation.' },
              { text: 'Practise the aptitude section briefly.', note: 'Ten easy questions that need familiarity rather than study.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'JEE Main guide', to: '/entrance-exams/engineering/jee-main/' },
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'Reasoning study material', to: '/study-material/reasoning/' },
            ],
          },
          {
            type: 'list',
            title: 'What past papers are for here',
            items: [
              { text: 'Recalibrating difficulty downwards', note: 'candidates arriving from JEE preparation consistently over-estimate this paper and spend too long verifying questions that did not need it. Past papers settle that faster than any description can.' },
              { text: 'Retraining the attempt instinct', note: 'the discipline of answering everything has to be built by repetition, and practice papers are where it is built. A blank left in practice is a habit that will appear in the examination.' },
              { text: 'Finding the syllabus gaps', note: 'discrete mathematics and the electronics content show up in past papers, which is a more reliable way of noticing them than reading a syllabus list.' },
              { text: 'Establishing your per-question rate', note: 'just over seventy seconds is the budget. Most candidates discover they are comfortably inside it on two subjects and outside it on one.' },
            ],
          },
          {
            type: 'p',
            text: 'A practical instruction for every practice paper: mark your uncertain answers as you go rather than leaving them blank with the intention of returning. In a no-penalty paper, an uncertain answer already recorded is strictly better than an empty one you may not have time to revisit, and marking it for review costs nothing. The failure mode this prevents — running out of time with eight carefully deferred blanks — is common and entirely self-inflicted.',
          },
          {
            type: 'p',
            text: 'Because VITEEE sits below JEE Main in difficulty, past papers are also a reasonable confidence exercise late in a preparation. A candidate who has spent a year on JEE material and is finding it demanding will usually find these papers comfortable, and there is genuine value in sitting an examination whose level you have already exceeded — it is good practice for the JEE papers to come as well as adequate preparation for this one.',
          },
          {
            type: 'note',
            title: 'Cover the aptitude section once, properly',
            text: 'Ten questions on data interpretation, data sufficiency, syllogism, series and directions. None of it is difficult and none of it appears in a JEE preparation, so a single afternoon of familiarisation converts a section you would have improvised into one you can bank quickly. That is a better use of an afternoon than most late-stage science revision.',
          },
        ],
      },
      'mock-tests': {
        description:
          'VITEEE mock tests — full 125-question practice with no negative marking, and the habit of leaving nothing blank.',
        lead: [
          'The single number to watch in a VITEEE mock is how many questions you left unanswered. It should always be zero.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Everything else in a VITEEE mock — accuracy, pace, section balance — matters in the ordinary way. But the blank count is the one number unique to this paper, and it is the one candidates most reliably get wrong, because the instinct that produces it was correct in every other exam they have practised for.',
          },
          {
            type: 'list',
            title: 'What to review',
            items: [
              { text: 'Blanks — always zero', note: 'if there is even one, the habit has not been retrained.' },
              { text: 'Time left at the end', note: 'you should have a few minutes to fill anything unanswered.' },
              { text: 'Accuracy by section', note: 'the ordinary diagnostic; where the study time should go.' },
              { text: 'Guess success rate', note: 'informed guesses should outperform chance; if they do not, you are guessing where you could be reasoning.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'What a VITEEE mock should measure',
            items: [
              { title: 'Blanks — the primary metric', text: 'Zero, every time. If a mock ends with even one unanswered question, the habit has not been retrained and no other finding matters as much.' },
              { title: 'Time remaining at the end', text: 'You want a few minutes in hand to fill anything outstanding. Finishing exactly on the buzzer means you had no margin for the one thing this paper requires.' },
              { title: 'Accuracy by section', text: 'The ordinary diagnostic, and where your remaining study time should go. With equal marks per question, the weakest section is the binding constraint.' },
              { title: 'Guess quality', text: 'Track how your marked-uncertain answers performed. Informed guesses should beat chance comfortably; if they do not, you are guessing on questions where a little more thought would have narrowed the options.' },
            ],
          },
          {
            type: 'p',
            text: 'Take the mocks on a computer. VITEEE is a computer-based test, and the mechanics of navigating sections, marking questions for review and moving quickly through a long list are part of the seventy-second budget. Candidates who practise on paper build a workflow — spreading out, annotating freely, scanning ahead — that the interface does not support, and they lose time rediscovering that on the day.',
          },
          {
            type: 'note',
            title: 'One mock in the biology stream if that is your paper',
            text: 'Candidates applying to biotechnology and allied programmes sit biology in place of mathematics, and the section is the largest in the paper at forty questions. Practising with a mathematics mock and assuming the biology will look after itself misjudges both the volume and the pace of the section that carries the most weight.',
          },
        ],
      },
      preparation: {
        description:
          'VITEEE preparation strategy — adding the syllabus differences and attempt habits to an existing JEE preparation.',
        lead: [
          'A few weeks on top of a JEE Main preparation, spent on syllabus gaps and on retraining your attempt instincts.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'VITEEE almost never justifies a separate preparation. A candidate preparing for JEE Main is covering the science content at greater depth than VITEEE requires, and the additions needed are small: two syllabus areas, two short sections, and a deliberate change in how the paper is attempted.',
          },
          {
            type: 'steps',
            title: 'Adding VITEEE to a JEE preparation',
            items: [
              { text: 'Six weeks out — cover discrete mathematics and semiconductor devices.', note: 'In the VITEEE syllabus, absent or lighter in JEE Main.' },
              { text: 'Four weeks out — brief aptitude practice.', note: 'Data interpretation, syllogism, series, directions. Ten questions needing familiarity, not study.' },
              { text: 'Four weeks out — light English practice.', note: 'Five questions on comprehension and grammar.' },
              { text: 'Four weeks out — full mocks with no negative marking.', note: 'And a firm rule that nothing is left blank.' },
              { text: 'Two weeks out — speed practice.', note: 'The pace is brisk; the questions are easier. Move faster than you would in JEE.' },
              { text: 'Book your slot thoughtfully.', note: 'The test runs across a window; choose a slot at a time of day when you are alert.' },
            ],
          },
          {
            type: 'list',
            title: 'What costs candidates marks here',
            items: [
              { text: 'Leaving questions blank', note: 'the defining error in this examination, caused by habits from penalty-based papers.' },
              { text: 'Deliberating too long on hard questions', note: 'the calculus that justifies it elsewhere does not apply without a penalty.' },
              { text: 'Missing the syllabus differences', note: 'discrete mathematics in particular.' },
              { text: 'Ignoring aptitude and English', note: 'fifteen easy questions worth having.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The syllabus gap — about a week',
                'Discrete mathematics, the electronics and semiconductor content, and a pass over the aptitude question types. Small, specific, and easily scheduled six weeks out.',
              ],
              [
                'The habit gap — about a month',
                'Retraining the no-penalty attempt instinct and building comfort at seventy seconds a question. This takes longer than the syllabus work because habits formed over a year of JEE practice do not change in a fortnight.',
              ],
              [
                'What needs no work at all',
                'The core physics, chemistry and mathematics. A candidate preparing seriously for JEE Main is already past the level this paper sets, and additional science study is not where the marginal VITEEE mark comes from.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The failure pattern in VITEEE is unusually consistent and worth naming: a well-prepared candidate, comfortable with the material, sits the paper with JEE instincts — verifying carefully, skipping the uncertain — and finishes with twelve blanks and a rank well below their capability. Nothing about that outcome is a knowledge problem, and everything about it is fixed by a month of practice papers taken with the rule that nothing is left unanswered.',
          },
          {
            type: 'note',
            title: 'Understand the counselling process before the result',
            text: 'Admission runs through VIT’s own counselling and choice-filling on its own timeline, with campus and programme preferences to be ordered. Reading how that works while you still have time is worth more than it sounds — candidates who first engage with it after a result routinely make preference decisions in a hurry that they would have made differently with a week to think.',
          },
        ],
      },
      'study-material': {
        description:
          'VITEEE study material — physics, chemistry, mathematics and biology notes, plus aptitude and English for the short sections.',
        lead: [
          'Standard science notes cover the bulk. The additions are small and quick.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For most VITEEE candidates the science notes are already familiar from JEE preparation. What is worth a specific look is discrete mathematics within the mathematics notes and the semiconductor and electronic devices material within physics, both of which VITEEE weights more explicitly than JEE Main does.',
          },
          {
            type: 'links',
            title: 'Subject notes for VITEEE',
            items: [
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'A short final-weeks routine',
            items: [
              'Cover the two syllabus gaps first — they are quick and easily forgotten.',
              'Fifteen minutes of aptitude practice, three times a week.',
              'One full mock a week, with zero blanks as a hard rule.',
              'Speed drills on science questions, since the pace is brisker than JEE.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Science — school textbooks plus your JEE material',
                'The class 11 and 12 books are genuinely adequate as a base here, and whatever problem sources you are using for JEE cover the rest comfortably. No additional science material is required for this paper.',
              ],
              [
                'The gap topics — any standard source',
                'Discrete mathematics and the semiconductor and electronics content. Both are small, both are well covered in school-level material, and both are commonly skipped by candidates working from national entrance material only.',
              ],
              [
                'Aptitude — a short familiarisation',
                'Data interpretation, data sufficiency, syllogism, number series and direction sense. Ten questions in the paper and an afternoon of preparation is proportionate.',
              ],
              [
                'English — the smallest section, and free marks',
                'Five questions on comprehension and language use. A short grammar refresher and a few practice passages is all this warrants, and it is still worth doing.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The most useful study adjustment for this examination is not what you read but how you practise. Work science questions in timed sets aimed at recognition speed rather than at handling harder variants — thirty questions in thirty-five minutes, repeatedly, until the pace is comfortable. That is a different exercise from JEE practice and it is the one that translates into a VITEEE rank.',
          },
          {
            type: 'note',
            title: 'Biology candidates — prepare it as the main section',
            text: 'For biotechnology and allied programmes, biology replaces mathematics and is the largest section at forty questions. Class 11 and 12 biology textbooks, worked for completeness and recall speed, are the right material — and candidates who have also prepared for NEET will find they need very little beyond adjusting to the pace.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the VITEEE exam pattern?',
        a: 'A computer-based test of 125 questions in two and a half hours: mathematics or biology (40), physics (35), chemistry (35), aptitude (10) and English (5). There is no negative marking for wrong answers. Biology is taken instead of mathematics by candidates applying to biotechnology and allied programmes. Confirm the current question counts and timing in the information brochure, as the composition has been adjusted between cycles.',
      },
      {
        q: 'Is there negative marking in VITEEE?',
        a: 'No — none at all. This is the most consequential fact about the examination, because it means an unanswered question scores zero while a guessed one has a real chance of scoring. There is no scenario in which leaving a blank is better than guessing. Candidates who have spent a year preparing for JEE Main arrive with instincts calibrated to a penalty regime and routinely submit VITEEE papers with unanswered questions, which is a pure and entirely avoidable loss.',
      },
      {
        q: 'How is VITEEE different from JEE Main?',
        a: 'It is shorter and gentler — 125 questions in 150 minutes rather than 75 in 180, with individually easier questions and no negative marking. It adds brief aptitude and English sections worth fifteen questions between them. Its mathematics syllabus includes discrete mathematics, which JEE Main does not, and physics gives more explicit weight to semiconductor devices. Admission follows from VIT’s own counselling process rather than a national one.',
      },
      {
        q: 'Do I need separate preparation for VITEEE?',
        a: 'Rarely. A JEE Main preparation covers the science content at greater depth than VITEEE requires, so the additions are small: the two syllabus areas VITEEE carries that JEE does not, brief practice on the aptitude and English sections, and — most importantly — deliberately retraining your attempt habits for a paper with no penalty. Four to six weeks of light additional work on top of an existing preparation is usually sufficient.',
      },
      {
        q: 'How should I attempt the VITEEE paper?',
        a: 'Briskly, and completely. With just over seventy seconds per question and no penalty for errors, the correct approach is to move quickly through what you can reason about, guess without hesitation on what you cannot, and reserve the last few minutes to ensure that not a single question is left unanswered. The careful skipping that serves you well in JEE Main is exactly the wrong instinct here.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     COMEDK UGET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'comedk',
    path: '/entrance-exams/engineering/comedk/',
    name: 'COMEDK UGET',
    fullName: 'Consortium of Medical, Engineering and Dental Colleges of Karnataka — Undergraduate Entrance Test',
    authority: 'COMEDK',
    official: 'comedk.org',
    seoTitle: 'COMEDK UGET 2026: Pattern, No Negative Marking & Strategy',
    metaDescription:
      'COMEDK UGET exam guide — 180-question pattern with no negative marking, syllabus, tie-breaking rules and counselling for Karnataka colleges.',
    lead: [
      'COMEDK UGET is the common entrance test for private engineering colleges in Karnataka that belong to the consortium. It is a straightforward paper — sixty questions each in physics, chemistry and mathematics, three hours, no negative marking — and it leads into the consortium’s own counselling process.',
      'What makes it worth understanding beyond the pattern is the tie-breaking rule. With no negative marking and a large field, identical scores are common, and the order in which ties are broken is defined in advance. It rewards mathematics over the other two subjects, which is a small but real strategic fact.',
    ],
    quickFacts: [
      ['Conducted by', 'COMEDK'],
      ['Admits to', 'Private engineering colleges in Karnataka within the consortium'],
      ['Level', 'Class 12 with physics, chemistry and mathematics'],
      ['Structure', '180 questions in 3 hours — 60 each in physics, chemistry and mathematics'],
      ['Negative marking', 'None'],
      ['Tie-breaking', 'Defined in advance, with mathematics performance weighted first'],
    ],
    overview: [
      {
        type: 'p',
        text: 'COMEDK conducts a single undergraduate entrance test used by its member private engineering institutions in Karnataka. Candidates who take it enter the consortium’s counselling process, where seats are allotted on rank and choice. It is a widely taken alternative and supplement to JEE Main for candidates targeting Karnataka.',
      },
      {
        type: 'p',
        text: 'The paper follows the class 11 and 12 syllabus in the three sciences with no additional sections, which makes it the most conventional of the private-college entrance tests. Its level sits between the state engineering entrances and JEE Main — harder than the former, gentler than the latter.',
      },
      {
        type: 'list',
        title: 'The features that shape strategy',
        items: [
          { text: 'No negative marking', note: 'so every question should be answered, exactly as in VITEEE.' },
          { text: 'A generous time allowance', note: 'a hundred and eighty questions in three hours is a minute each, which permits care.' },
          { text: 'Equal subject weighting', note: 'sixty questions each; no subject can be neglected in favour of another.' },
          { text: 'Defined tie-breaking', note: 'with mathematics weighted first, then physics, then chemistry, followed by further criteria.' },
        ],
      },
      {
        type: 'note',
        title: 'The tie-breaking rule is worth knowing',
        text: 'Because there is no negative marking and the field is large, identical total scores are common. Ties are resolved by a defined sequence — typically the mathematics score first, then physics, then chemistry, with further criteria after that. Confirm the current sequence in the brochure, but the general point holds: mathematics accuracy carries a little more weight than its share of the marks suggests.',
      },
    ],
    stages: [
      {
        name: 'COMEDK UGET computer-based test',
        mode: 'Objective, 3 hours',
        detail:
          '180 questions — 60 each in physics, chemistry and mathematics — with one mark per correct answer and no deduction for a wrong one.',
      },
      {
        name: 'Counselling and seat allotment',
        mode: 'Rank-based',
        detail:
          'Seats in member institutions are allotted through the consortium’s own counselling process on the basis of rank and the choices filled by the candidate.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'COMEDK UGET syllabus — physics, chemistry and mathematics drawn from the class 11 and 12 curriculum.',
        lead: [
          'A conventional class 11 and 12 science syllabus with no additional sections. If you are preparing for JEE Main, you are already covering it.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Physics',
                'Units and measurement, motion in one and two dimensions, laws of motion, work energy and power, rotational motion, gravitation, properties of matter, heat and thermodynamics, oscillations and waves, electrostatics, current electricity, magnetic effects of current, electromagnetic induction and alternating currents, optics including ray and wave optics, dual nature of matter and radiation, atomic physics, nuclear physics, and electronic devices.',
              ],
              [
                'Chemistry',
                'Basic concepts and atomic structure, chemical bonding and molecular structure, states of matter, thermodynamics, equilibrium, redox reactions and electrochemistry, chemical kinetics, surface chemistry, classification of elements and periodicity, hydrogen and s-block elements, p-block elements, d- and f-block elements, coordination compounds, environmental chemistry, and organic chemistry covering basic principles, hydrocarbons, haloalkanes and haloarenes, alcohols phenols and ethers, aldehydes ketones and carboxylic acids, organic nitrogen compounds, biomolecules and polymers.',
              ],
              [
                'Mathematics',
                'Sets relations and functions, complex numbers, quadratic equations, matrices and determinants, permutations and combinations, binomial theorem, sequences and series, trigonometry, straight lines and conic sections, three-dimensional geometry, vector algebra, limits continuity and differentiability, applications of derivatives, integrals and their applications, differential equations, probability, and statistics.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Because the syllabus is conventional and shares almost everything with JEE Main, COMEDK preparation is best treated as an extension of an existing plan rather than a separate project. The difference is not in what to study but in how to attempt the paper.',
          },
          {
            type: 'list',
            title: 'How this syllabus compares with the ones around it',
            items: [
              { text: 'Against JEE Main', note: 'the same class 11 and 12 ground, examined at a lower level of difficulty. A JEE preparation covers it entirely, with no gap topics to add.' },
              { text: 'Against the state entrances', note: 'somewhat harder, and framed in the national curriculum idiom rather than a state intermediate one. A candidate preparing only for a state examination will find the framing less familiar than the content.' },
              { text: 'Against BITSAT', note: 'no English or reasoning sections at all, and a more generous time allowance. The sciences are comparable; the paper around them is quite different.' },
              { text: 'Within itself', note: 'three subjects of sixty questions each, weighted identically. There is no subject whose syllabus deserves a larger share of your attention on structural grounds.' },
            ],
          },
          {
            type: 'p',
            text: 'The practical consequence of a conventional, evenly weighted syllabus is that preparation decisions should be made on your own weaknesses rather than on the examination’s structure. In papers like AP EAPCET or BITSAT the structure itself tells you where to spend time; here it does not, which means the diagnostic work of finding your weakest subject matters more than it does elsewhere.',
          },
          {
            type: 'note',
            title: 'Mathematics carries a small structural premium',
            text: 'Not in the syllabus but in the tie-breaking sequence, where mathematics is typically considered first. Two candidates on the same total are separated by their mathematics score, which makes accuracy in that subject worth marginally more than the same accuracy elsewhere — a small effect, and a free one to act on.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'COMEDK UGET exam pattern — 180 questions, equal subject weighting, no negative marking and the tie-breaking sequence.',
        lead: [
          'A minute per question, no penalty, and equal weight across three subjects. A paper that rewards steady accuracy over cleverness.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm question counts, marking and the tie-breaking sequence against the current brochure.',
            head: ['Subject', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Physics', '60', '60', 'Class 11 and 12 level'],
              ['Chemistry', '60', '60', 'Class 11 and 12 level'],
              ['Mathematics', '60', '60', 'Weighted first in tie-breaking'],
              ['Total', '180', '180', '3 hours — one minute per question'],
            ],
          },
          {
            type: 'p',
            text: 'The combination of no penalty and a full minute per question makes this an unusually forgiving paper to attempt well. There is time to check work, no cost to guessing, and no section that can be safely neglected. The candidates who do best are those who work steadily and accurately rather than those who take risks.',
          },
          {
            type: 'list',
            title: 'Strategy that follows from the rules',
            items: [
              { text: 'Answer every question', note: 'with no penalty, a blank is a discarded mark.' },
              { text: 'Use the time you have', note: 'a minute per question allows verification, which is worth more than extra attempts here.' },
              { text: 'Give mathematics a little extra care', note: 'it is weighted first in tie-breaking, so accuracy there is worth marginally more.' },
              { text: 'Balance across subjects', note: 'equal weighting means a weak subject cannot be offset by a strong one as easily as in weighted papers.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the tie-breaking sequence',
            text: 'The order in which ties are resolved — typically mathematics, then physics, then chemistry, followed by further criteria — is set out in the current brochure and has been stated slightly differently between cycles. It matters more here than in most exams because identical scores are common in a no-penalty paper.',
          },
          {
            type: 'p',
            text: 'A minute per question with no penalty is an unusually comfortable combination, and it changes what good technique looks like. In most entrance papers the skill is deciding what to skip; here there is nothing to skip, because a wrong answer costs no more than a blank and you have time to attempt everything. The skill that remains is verification — using the available minute to check a step you would otherwise have rushed — and it is a skill most candidates have never practised because no other paper on their list rewards it.',
          },
          {
            type: 'steps',
            title: 'Working a hundred and eighty questions in three hours',
            items: [
              { title: 'Set a per-subject budget of about an hour', text: 'Equal weighting means equal time, and a subject running twenty minutes over is borrowing from one that will pay for it.' },
              { title: 'First pass — answer and verify', text: 'The minute per question allows a quick check of the setup on anything numerical. Use it; this is the paper where careless errors are the main source of loss.' },
              { title: 'Second pass — the questions you deferred', text: 'Kept short. Anything still unresolved gets a considered guess rather than more time, because there is no penalty and no prize for leaving it clean.' },
              { title: 'Final minutes — no blanks', text: 'Sweep the paper for anything unanswered. In a no-penalty examination this is pure, free score.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the tie-breaking sequence for your cycle',
            text: 'The order in which ties are resolved — commonly mathematics first, then physics, then chemistry, with further criteria after that — is published and has been stable, but it is worth checking rather than assuming. It is the one place where the examination rewards subject-specific accuracy over total marks, so knowing the current order is worth the two minutes.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'COMEDK UGET previous year papers — calibrating the level and building steady accuracy across all three subjects.',
        lead: [
          'Use past papers to calibrate difficulty. COMEDK sits between the state entrances and JEE Main, and knowing that saves misdirected effort.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Candidates preparing for JEE Main sometimes over-prepare for COMEDK and candidates preparing for a state entrance sometimes under-prepare. Past papers settle the question quickly: the level is conventional class 11 and 12, more demanding than a typical state paper but without the multi-concept problems JEE Advanced or even harder JEE Main questions use.',
          },
          {
            type: 'steps',
            title: 'What to practise',
            items: [
              { text: 'Solve full papers with no penalty applied.', note: 'And with every question answered, so the habit is automatic.' },
              { text: 'Use the full minute per question.', note: 'Practising at a rushed pace trains a haste this paper does not require.' },
              { text: 'Track your mathematics accuracy separately.', note: 'It carries extra weight through the tie-breaking rule.' },
              { text: 'Check subject balance.', note: 'Equal weighting means the weakest subject caps your score more directly than in weighted papers.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'JEE Main guide', to: '/entrance-exams/engineering/jee-main/' },
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'Mathematics study material', to: '/study-material/mathematics/' },
            ],
          },
          {
            type: 'list',
            title: 'The calibration past papers give you',
            items: [
              { text: 'For JEE-prepared candidates', note: 'reassurance and a pace adjustment. The questions are more direct than you are used to, and the risk is spending JEE-length thinking time on questions that did not need it.' },
              { text: 'For state-entrance candidates', note: 'a genuine step up in framing rather than in content. The topics are the same; the phrasing and the expected fluency are closer to the national papers.' },
              { text: 'For everyone', note: 'evidence about subject balance. With sixty questions in each subject, a weak subject caps your total directly and past papers show you which of the three it actually is.' },
              { text: 'On length', note: 'three hours and a hundred and eighty questions is a long sitting, and concentration in the final hour is a real variable that only full-length practice exposes.' },
            ],
          },
          {
            type: 'p',
            text: 'Solve past papers with the real rules applied — no penalty, full three hours — rather than importing habits from whichever examination you have practised most. Candidates who solve COMEDK papers under JEE conditions, skipping the uncertain and racing the clock, get a score that misrepresents their readiness in both directions: it understates what they would achieve with nothing left blank, and it overstates their comfort with a three-hour sitting.',
          },
          {
            type: 'p',
            text: 'Track your mathematics accuracy as a separate number throughout. It matters twice over — once as a third of your total and once again as the first tie-breaker — and in a paper where a great many candidates cluster on similar totals, the tie-breaking criterion is not a remote technicality. It is a realistic determinant of your rank.',
          },
          {
            type: 'note',
            title: 'Use the papers to find your weakest subject, then act on it',
            text: 'Equal weighting has a straightforward implication that candidates often resist: your time belongs to your weakest subject, not your favourite. Three or four past papers, scored by subject, will identify it unambiguously — and the marginal mark is always cheaper to gain there than in the subject you already enjoy.',
          },
        ],
      },
      'mock-tests': {
        description:
          'COMEDK UGET mock tests — full 180-question practice with no negative marking and equal subject weighting.',
        lead: [
          'Practise the full three hours. The length is part of the challenge in a paper this long.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A hundred and eighty questions is a long paper, and concentration across three hours is a real factor. Candidates who practise in shorter blocks find their accuracy falls away in the final subject, which in an equally weighted paper costs exactly as much as a fall anywhere else.',
          },
          {
            type: 'list',
            title: 'What to review',
            items: [
              { text: 'Blanks — always zero', note: 'no penalty means no reason to leave anything.' },
              { text: 'Accuracy in the final hour', note: 'a decline signals concentration rather than knowledge.' },
              { text: 'Mathematics accuracy specifically', note: 'for the tie-breaking advantage.' },
              { text: 'The weakest of the three subjects', note: 'equal weighting makes it the binding constraint on your score.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A mock routine for a long, forgiving paper',
            items: [
              { title: 'Full three hours, one sitting', text: 'The length is part of the difficulty. Practising in ninety-minute halves removes precisely the challenge this paper presents.' },
              { title: 'Check blanks first', text: 'Zero, always. No penalty applies, so any unanswered question is a discarded mark and the habit needs to be automatic before the day.' },
              { title: 'Compare first-hour and last-hour accuracy', text: 'A decline is a concentration finding, not a knowledge one, and the remedy is more full-length practice rather than more revision.' },
              { title: 'Score by subject, every time', text: 'Equal weighting makes the weakest subject the binding constraint, and only a subject-wise score makes it visible.' },
              { title: 'Watch for rushing', text: 'Errors on questions you knew how to do are the characteristic COMEDK loss. With a full minute available, they are almost always avoidable.' },
            ],
          },
          {
            type: 'p',
            text: 'Because there is no penalty and the time allowance is generous, a COMEDK mock has an unusually clean interpretation: your score is close to a direct measure of what you know, uncontaminated by selection strategy or risk appetite. That makes it a good diagnostic for your underlying science preparation generally — including for the other entrances on your list, where the same knowledge is hidden behind more strategy.',
          },
          {
            type: 'note',
            title: 'Practise on a computer',
            text: 'The examination is computer-based, and moving through a hundred and eighty questions on screen — marking for review, navigating between subjects, keeping track of what is unanswered — is a workflow worth having practised. The final sweep for blanks in particular is much faster if you already know how the interface displays them.',
          },
          {
            type: 'p',
            text: 'One further habit worth building into every mock: record the number of questions you answered on the first pass without needing to return to them. In a paper with a generous time allowance, that number is a good proxy for genuine fluency, and it should climb steadily as your preparation matures. A candidate whose total score is respectable but whose first-pass count is low is relying on the second pass to rescue questions they ought to know outright — which works in a three-hour paper and will not work in any of the tighter examinations on the same candidate’s list.',
          },
        ],
      },
      preparation: {
        description:
          'COMEDK UGET preparation — extending a JEE preparation, balancing the three subjects and attempting a no-penalty paper.',
        lead: [
          'The syllabus needs no additional work if you are preparing for JEE Main. What needs attention is subject balance and attempt habits.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the three subjects are equally weighted and there is no negative marking, COMEDK rewards a balanced, accurate candidate more than a spiky brilliant one. A student who is outstanding in mathematics and weak in chemistry will be capped by the chemistry, in a way that a weighted paper with penalties would partly disguise.',
          },
          {
            type: 'steps',
            title: 'A short plan alongside JEE preparation',
            items: [
              { text: 'Six weeks out — identify your weakest of the three subjects.', note: 'Equal weighting makes it the binding constraint. Give it disproportionate time.' },
              { text: 'Four weeks out — full-length mocks, three hours.', note: 'With no penalty and every question answered.' },
              { text: 'Four weeks out — accuracy work rather than speed work.', note: 'Time is not the constraint in this paper; errors are.' },
              { text: 'Two weeks out — mathematics accuracy specifically.', note: 'For the tie-breaking weighting.' },
              { text: 'Confirm the counselling process and timelines.', note: 'COMEDK runs its own counselling separately from national processes.' },
            ],
          },
          {
            type: 'list',
            title: 'Common errors',
            items: [
              { text: 'Leaving questions blank', note: 'no penalty applies; a blank is a discarded mark.' },
              { text: 'Rushing', note: 'a full minute per question is available and should be used for verification.' },
              { text: 'Neglecting the weakest subject', note: 'equal weighting means it caps the total directly.' },
              { text: 'Overlooking the counselling process', note: 'admission runs through COMEDK’s own choice-filling, on its own timeline.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'What needs no additional work',
                'The syllabus, for anyone preparing for JEE Main. There are no gap topics and no additional sections, which is why COMEDK preparation is properly measured in weeks rather than months.',
              ],
              [
                'What needs a few weeks',
                'Subject balance and attempt habits. Identifying the weakest of your three subjects and raising it, and retraining yourself to leave nothing blank in a no-penalty paper.',
              ],
              [
                'What needs an evening',
                'Understanding the counselling process. COMEDK runs its own choice-filling and seat allotment on its own timeline, and the decisions it asks for are better made with a week of thought than in the hours after a result.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'For candidates whose main target is a state entrance rather than JEE, COMEDK is a modest step up and the adjustment is mostly in framing rather than content. Working a few national-curriculum problem sets alongside your state material — the same topics, phrased the way the national papers phrase them — closes most of that gap, and it is worth doing early rather than in the final fortnight.',
          },
          {
            type: 'note',
            title: 'Accuracy work beats speed work here',
            text: 'In the final weeks, the productive practice for this paper is not going faster but making fewer avoidable errors — checking the setup, confirming units, re-reading what was actually asked. A full minute per question is available and most candidates are losing more marks to haste than they would gain from saving another ten seconds.',
          },
        ],
      },
      'study-material': {
        description:
          'COMEDK UGET study material — physics, chemistry and mathematics notes at class 11 and 12 level.',
        lead: [
          'Conventional science notes across the three subjects, worked evenly because the paper weights them evenly.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'With sixty questions in each subject and no weighting differences, the sensible study allocation is even — or tilted towards whichever subject is weakest, since that is the one capping your total. This is different from JEE Main, where a spiky profile can still produce a strong score.',
          },
          {
            type: 'links',
            title: 'Subject notes for COMEDK',
            items: [
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
            ],
          },
          {
            type: 'list',
            title: 'How to study for an evenly weighted paper',
            items: [
              'Allocate time by weakness rather than by preference.',
              'Work for accuracy rather than speed — the time allowance is generous.',
              'Practise full three-hour papers to build concentration across the length.',
              'Give mathematics slightly more attention for the tie-breaking advantage.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Physics — concepts plus steady practice',
                'Class 11 and 12 material at a level below JEE Main. What matters is completeness across the chapters rather than depth in any of them, since sixty questions spread widely.',
              ],
              [
                'Chemistry — the most completable subject',
                'NCERT covers the ground well and inorganic chemistry in particular rewards straightforward reading. For most candidates this is the fastest of the three sections and therefore the place to build a time cushion.',
              ],
              [
                'Mathematics — worth the small premium',
                'A third of the paper and the first tie-breaker. Practise for accuracy specifically, since that is the dimension the tie-breaking rule rewards.',
              ],
              [
                'Full-length practice papers — the real requirement',
                'Three hours, a hundred and eighty questions, taken repeatedly. Concentration across the length is the part of this examination no amount of topic study prepares you for.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Allocate study time by weakness rather than by preference, which is easy advice to give and genuinely difficult to follow, because working on a subject you find hard is less pleasant than consolidating one you find easy. Equal weighting makes the arithmetic unusually stark here: ten marks gained in your weakest subject and ten gained in your strongest are worth exactly the same, and the first ten are always cheaper.',
          },
          {
            type: 'note',
            title: 'One source per subject, finished',
            text: 'The syllabus holds no surprises and the difficulty is moderate, which means the constraint on a COMEDK score is completeness rather than depth. A single standard source per subject, worked all the way through, serves this examination better than a collection of harder material sampled selectively.',
          },
          {
            type: 'p',
            text: 'A closing note on how to schedule the material. Because the syllabus needs no additions and the difficulty is moderate, the productive shape of a COMEDK preparation is short and late: confirm your subject balance with a few past papers, spend a few weeks raising the weakest of the three, and give the final fortnight to full-length practice papers rather than to further topic study. Anything more elaborate than that is usually a JEE preparation being relabelled, and it consumes time that would produce more marks elsewhere on your list.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the COMEDK UGET exam pattern?',
        a: 'A three-hour computer-based test of 180 questions — 60 each in physics, chemistry and mathematics — with one mark per correct answer and no deduction for a wrong one. That works out to a full minute per question, which is generous by competitive-exam standards and allows time to verify answers rather than rush through them.',
      },
      {
        q: 'Is there negative marking in COMEDK UGET?',
        a: 'No. With no penalty for wrong answers, every question should be attempted — a blank scores zero while a guess has a real chance of scoring. Combined with the generous minute-per-question timing, this makes COMEDK an unusually forgiving paper to attempt well: there is time to check work, no cost to guessing, and the candidates who do best are those who work steadily and accurately rather than taking risks.',
      },
      {
        q: 'How are ties broken in COMEDK UGET?',
        a: 'By a defined sequence set out in the brochure — typically the mathematics score first, then physics, then chemistry, with further criteria after that. This matters more than in most examinations because a no-penalty paper with a large field produces identical total scores frequently. The practical implication is small but real: mathematics accuracy carries a little more weight than its equal share of the marks would suggest.',
      },
      {
        q: 'How does COMEDK compare with JEE Main in difficulty?',
        a: 'It sits between the state engineering entrances and JEE Main. The syllabus is the conventional class 11 and 12 science curriculum with no additional sections, and the questions are more demanding than a typical state paper but without the multi-concept problems that characterise harder JEE Main questions. A candidate preparing properly for JEE Main is already covering the content at more than sufficient depth.',
      },
      {
        q: 'How should I prepare for COMEDK alongside JEE?',
        a: 'The syllabus needs no additional study, so the work is in two other places. First, subject balance: because the three subjects are equally weighted, your weakest one caps your score directly, in a way that a weighted paper partly disguises — so give it disproportionate attention. Second, attempt habits: practise full three-hour papers with no penalty applied and every question answered, so the no-blanks discipline is automatic on the day.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     AP EAPCET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ap-eapcet',
    path: '/entrance-exams/engineering/ap-eapcet/',
    name: 'AP EAPCET',
    fullName: 'Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test',
    authority: 'Andhra Pradesh State Council of Higher Education',
    official: 'cets.apsche.ap.gov.in',
    seoTitle: 'AP EAPCET 2026: Pattern, Syllabus, Weightage & Counselling',
    metaDescription:
      'AP EAPCET exam guide — engineering and agriculture stream patterns, syllabus, intermediate marks weightage, local status and counselling.',
    lead: [
      'AP EAPCET, long known as EAMCET, is the common entrance test for engineering, agriculture and pharmacy admissions in Andhra Pradesh. It runs in two streams — an engineering stream weighted heavily towards mathematics, and an agriculture and medical stream covering biology alongside the physical sciences.',
      'Two things distinguish it from national entrances and both matter for planning. There is no negative marking, so nothing should be left blank. And admission depends not only on the test but on local candidate status under the state’s reservation rules, which is a matter of documentation rather than preparation.',
    ],
    quickFacts: [
      ['Conducted by', 'Andhra Pradesh State Council of Higher Education'],
      ['Streams', 'Engineering; and Agriculture and Pharmacy'],
      ['Level', 'Class 12 with the relevant subject combination'],
      ['Engineering structure', '160 questions in 3 hours — mathematics 80, physics 40, chemistry 40'],
      ['Negative marking', 'None'],
      ['Admission', 'Through state counselling, with local candidate status affecting seat eligibility'],
    ],
    overview: [
      {
        type: 'p',
        text: 'AP EAPCET is used for admission to engineering, agriculture, pharmacy and allied professional courses in Andhra Pradesh institutions. Candidates apply in one of two streams according to their intermediate subject combination, and admission is made through the state counselling process on rank.',
      },
      {
        type: 'p',
        text: 'The engineering stream paper is distinctive for its mathematics weighting — eighty of the hundred and sixty questions, exactly half the paper. That is a far heavier concentration than JEE Main or any of the private entrances apply, and it means a candidate’s mathematics ability shapes their rank more than anything else.',
      },
      {
        type: 'list',
        title: 'The two streams',
        items: [
          { text: 'Engineering stream', note: 'mathematics (80), physics (40) and chemistry (40) — 160 questions in three hours.' },
          { text: 'Agriculture and Pharmacy stream', note: 'botany (40), zoology (40), physics (40) and chemistry (40) — 160 questions in three hours.' },
          { text: 'No negative marking in either', note: 'so every question should be answered.' },
          { text: 'Syllabus', note: 'based on the Andhra Pradesh intermediate curriculum, which differs in places from the CBSE syllabus national exams follow.' },
        ],
      },
      {
        type: 'note',
        title: 'Local candidate status affects seat eligibility',
        text: 'Admission through state counselling applies local and non-local candidate rules based on where the candidate studied. This is a documentation matter rather than a preparation one, but it affects which seats you are eligible for, and the requirements should be checked well before counselling rather than during it.',
      },
    ],
    stages: [
      {
        name: 'AP EAPCET — Engineering stream',
        mode: 'Computer-based, 3 hours',
        detail:
          '160 questions: mathematics (80), physics (40) and chemistry (40). One mark per correct answer, with no deduction for a wrong one.',
      },
      {
        name: 'AP EAPCET — Agriculture and Pharmacy stream',
        mode: 'Computer-based, 3 hours',
        detail:
          '160 questions: botany (40), zoology (40), physics (40) and chemistry (40). One mark per correct answer, no negative marking.',
      },
      {
        name: 'Rank and counselling',
        mode: 'State counselling',
        detail:
          'Ranks are prepared according to the rules in force, which have in some years included a weightage of intermediate marks. Admission follows through the state counselling process, subject to local candidate status and reservation rules.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'AP EAPCET syllabus — mathematics, physics and chemistry for the engineering stream, and botany and zoology for the agriculture stream.',
        lead: [
          'The syllabus follows the Andhra Pradesh intermediate curriculum, which is close to but not identical with the CBSE syllabus that national entrances use.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Mathematics (Engineering stream)',
                'Algebra covering functions, mathematical induction, matrices, complex numbers, quadratic expressions, theory of equations, permutations and combinations, binomial theorem and partial fractions; trigonometry covering ratios, transformations, inverse functions, hyperbolic functions and properties of triangles; vector algebra; probability and statistics; and coordinate geometry covering the locus, transformation of axes, straight lines, pairs of lines, circles, conic sections, three-dimensional coordinates, direction cosines, planes and calculus including limits, differentiation, applications of derivatives, integration and differential equations. Eighty questions — half the paper.',
              ],
              [
                'Physics',
                'Physical world and measurement, kinematics, laws of motion, work energy and power, systems of particles and rotational motion, oscillations, gravitation, mechanical properties of solids and fluids, thermal properties, thermodynamics, kinetic theory, waves, ray and wave optics, electric charges and fields, current electricity, moving charges and magnetism, magnetism and matter, electromagnetic induction, alternating current, electromagnetic waves, dual nature of radiation and matter, atoms and nuclei, semiconductor electronics and communication systems.',
              ],
              [
                'Chemistry',
                'Atomic structure, classification of elements and periodicity, chemical bonding and molecular structure, states of matter, stoichiometry, thermodynamics, chemical equilibrium and acids and bases, hydrogen and its compounds, s-block and p-block elements, environmental chemistry, organic chemistry basic principles and hydrocarbons, solid state, solutions, electrochemistry and chemical kinetics, surface chemistry, general principles of metallurgy, d- and f-block elements, coordination compounds, haloalkanes and haloarenes, organic compounds containing oxygen and nitrogen, polymers, biomolecules and chemistry in everyday life.',
              ],
              [
                'Botany and Zoology (Agriculture and Pharmacy stream)',
                'Botany covering diversity in the living world, structural organisation in plants, reproduction in plants, plant systematics, cell structure and function, internal organisation of plants, plant ecology, plant physiology, microbiology, genetics, molecular biology and biotechnology. Zoology covering diversity of living world, structural organisation in animals, animal diversity, locomotion and reproduction in protozoa, biology in human welfare, type study of periplaneta americana, ecology and environment, human anatomy and physiology, human reproduction, genetics, organic evolution and applied biology.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A candidate preparing simultaneously for JEE Main should be aware that the intermediate syllabus includes topics presented differently — hyperbolic functions and partial fractions in mathematics, for instance — and organises some material in a different sequence. Working from the state intermediate textbooks rather than only from JEE material closes that gap.',
          },
          {
            type: 'note',
            title: 'Read the syllabus alongside your intermediate textbook contents page',
            text: 'The two are close enough that the most efficient way to use the syllabus is as a checklist against the books you already own, marking what the entrance adds and what your course covers more thoroughly than the paper requires. That comparison takes an afternoon and replaces a great deal of second-hand advice about what to study.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'AP EAPCET exam pattern — the two stream structures, the mathematics weighting, no negative marking and rank preparation.',
        lead: [
          'Half the engineering paper is mathematics. That single fact should determine most of a candidate’s preparation allocation.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Engineering stream structure. Confirm question counts, marking and rank preparation rules against the current notification.',
            head: ['Subject', 'Questions', 'Marks', 'Share'],
            rows: [
              ['Mathematics', '80', '80', 'Half the paper'],
              ['Physics', '40', '40', 'A quarter'],
              ['Chemistry', '40', '40', 'A quarter'],
              ['Total', '160', '160', '3 hours'],
            ],
          },
          {
            type: 'p',
            text: 'A candidate whose mathematics is strong is at a substantial structural advantage in this paper, and one whose mathematics is weak cannot compensate through the sciences, because together they account for only half the marks. That asymmetry does not exist in JEE Main, where the three subjects are equal, and it should be reflected in how time is allocated.',
          },
          {
            type: 'list',
            title: 'Other rules to know',
            items: [
              { text: 'No negative marking', note: 'in either stream, so nothing should be left unanswered.' },
              { text: 'Three hours for 160 questions', note: 'a little over a minute each — comfortable enough to allow checking.' },
              { text: 'Agriculture stream is evenly weighted', note: 'forty questions each in botany, zoology, physics and chemistry.' },
              { text: 'Rank preparation rules', note: 'the state has in some years applied a weightage of intermediate marks in preparing ranks. Confirm the position for your cycle.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm how the rank is calculated',
            text: 'Whether and how intermediate marks are weighted in preparing the rank has varied. Because it changes how much your board examination performance matters relative to the entrance test, it is worth confirming in the current notification rather than assuming continuity from a previous year.',
          },
          {
            type: 'p',
            text: 'Work through what the eighty-forty-forty split means minute by minute and the planning becomes obvious. If mathematics is half the questions, it should be roughly half your three hours — about ninety minutes for eighty questions, or a little over a minute each. Physics and chemistry then have forty-five minutes each for forty questions, which is comfortable. Candidates who divide their time evenly across the three subjects give mathematics an hour it cannot work in, and the shortfall lands on the section that carries half the marks.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why no negative marking changes the endgame',
                'There is no defensible reason to leave anything blank, which makes the last three minutes of the paper a mechanical sweep rather than a judgement call. Candidates carrying JEE instincts into this paper routinely leave marks on the table by declining to guess on questions they could not narrow.',
              ],
              [
                'Why mathematics accuracy compounds',
                'It is half the paper, so an accuracy improvement there is worth twice the same improvement in physics or chemistry. In a state examination where ranks are tightly bunched, that ratio is the single most useful thing to know about the paper.',
              ],
              [
                'What the agriculture stream looks like instead',
                'Forty questions each in botany, zoology, physics and chemistry — evenly weighted, unlike the engineering stream. The strategy above does not transfer; for that stream, time follows weakness rather than structure.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Confirm how your rank is computed',
            text: 'Whether intermediate marks carry a weightage in preparing the rank, and in what proportion, has varied between cycles. It matters for planning: if board performance feeds the rank, then intermediate study is entrance preparation rather than a competing demand, and the whole shape of your year changes accordingly.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'AP EAPCET previous year papers — using past papers to work the intermediate syllabus and build mathematics speed.',
        lead: [
          'Past papers are the best guide to how the intermediate syllabus is actually examined, which differs from how national entrances test the same topics.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'AP EAPCET questions are framed in the idiom of the state intermediate curriculum — the notation, the standard problem types, and the emphasis all follow the state textbooks rather than the national ones. A candidate preparing only from JEE material will find the content familiar but the framing slightly foreign, and past papers are the fastest way to bridge that.',
          },
          {
            type: 'steps',
            title: 'How to work the papers',
            items: [
              { text: 'Prioritise mathematics practice heavily.', note: 'Eighty of a hundred and sixty questions. Nothing else in your preparation has this leverage.' },
              { text: 'Work from the state intermediate textbooks alongside past papers.', note: 'They match the framing the questions use.' },
              { text: 'Answer every question in practice.', note: 'No negative marking; build the habit.' },
              { text: 'Time yourself at just over a minute per question.', note: 'Comfortable, but not so comfortable that pace can be ignored.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'TG EAPCET guide', to: '/entrance-exams/engineering/tg-eapcet/' },
              { label: 'JEE Main guide', to: '/entrance-exams/engineering/jee-main/' },
              { label: 'Mathematics study material', to: '/study-material/mathematics/' },
            ],
          },
          {
            type: 'list',
            title: 'What the intermediate framing actually changes',
            items: [
              { text: 'Notation and standard forms', note: 'the state textbooks use particular conventions and present certain results in particular forms. Questions are built on those, and a candidate reading only national material meets them in an unfamiliar shape.' },
              { text: 'Which results are assumed known', note: 'a paper written against the intermediate curriculum will quote a standard result without derivation where a national paper might set it up. Knowing which results are treated as furniture saves real time.' },
              { text: 'Topic emphasis within a chapter', note: 'the same chapter can be examined quite differently depending on which sub-topics the state curriculum foregrounds, and past papers are the only reliable guide.' },
              { text: 'A handful of topics treated differently', note: 'the intermediate syllabus and the national entrance syllabus are close but not identical, and the differences show up in papers before they show up in any comparison you could read.' },
            ],
          },
          {
            type: 'p',
            text: 'Weight your past-paper practice the way the paper is weighted. For every full paper you work, you should be doing roughly twice as much mathematics as physics or chemistry — which means that when you practise in sections rather than full papers, the mathematics sets should be twice as frequent. Candidates who practise evenly across subjects are training a distribution of skill the examination does not reward.',
          },
          {
            type: 'p',
            text: 'Answer every question in every practice paper, without exception, from the first one. The habit has to be automatic by the examination, and habits built under practice conditions are the ones that survive when the clock is running down. A candidate who leaves blanks in practice, intending to guess properly on the day, is relying on a decision they have never rehearsed.',
          },
          {
            type: 'note',
            title: 'TG EAPCET papers are useful supplementary practice',
            text: 'The two state examinations are close enough in structure, weighting and curriculum that papers from the other one make good additional material — particularly useful given that mathematics practice at this specific level and framing is the thing you need most of. Note the differences in rules and counselling, but use the papers.',
          },
        ],
      },
      'mock-tests': {
        description:
          'AP EAPCET mock tests — full 160-question practice in the correct stream weighting, with no negative marking.',
        lead: [
          'Practise in the real proportions. A mock with equal subject weighting is not this examination.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the engineering stream, a mock must give you eighty mathematics questions. Practising on a JEE-style paper with even weighting misrepresents both the pacing and, more importantly, where your preparation effort should go. Half of your score comes from one subject, and your practice should reflect it.',
          },
          {
            type: 'list',
            title: 'What to track',
            items: [
              { text: 'Mathematics accuracy and pace', note: 'the dominant determinant of your rank in the engineering stream.' },
              { text: 'Blanks — always zero', note: 'no penalty applies.' },
              { text: 'Time spent in mathematics', note: 'it should be roughly half your three hours, matching the question share.' },
              { text: 'Physics and chemistry efficiency', note: 'forty questions each; they should be worked briskly to protect mathematics time.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A mock routine matched to the weighting',
            items: [
              { title: 'Use the real proportions', text: 'Eighty mathematics questions, forty each in physics and chemistry. A JEE-style mock with even weighting is a different examination and produces a score that does not transfer.' },
              { title: 'Time mathematics separately', text: 'It should be taking around half your three hours. If it is taking less, you are rushing the section that carries half the marks; if considerably more, the other two are being squeezed.' },
              { title: 'Check blanks — always zero', text: 'No penalty applies. A single unanswered question in a mock means the habit is not yet automatic.' },
              { title: 'Score physics and chemistry for efficiency', text: 'Eighty questions between them that need to be worked briskly, because every minute saved there is a minute mathematics can use.' },
              { title: 'Track mathematics accuracy over time', text: 'The single number most predictive of your rank in this stream. Watch its trend rather than the paper total.' },
            ],
          },
          {
            type: 'p',
            text: 'A useful exercise once you have a few mocks behind you: calculate what your score would have been with five more correct mathematics answers, and what it would have been with five more in chemistry. The difference between those two numbers is the whole argument for weighting your preparation, and seeing it in your own figures is more persuasive than being told about the eighty-forty-forty split.',
          },
          {
            type: 'note',
            title: 'Agriculture and pharmacy stream candidates',
            text: 'Your paper is evenly weighted across botany, zoology, physics and chemistry, so the mathematics-first guidance here does not apply. Practise in your own stream’s proportions, and direct time towards whichever of the four subjects your mocks identify as weakest — with even weighting, that subject caps your total directly.',
          },
        ],
      },
      preparation: {
        description:
          'AP EAPCET preparation — allocating time to a mathematics-heavy paper, working from intermediate textbooks and planning counselling.',
        lead: [
          'Half the paper is mathematics. Allocate accordingly, and work from the state intermediate books rather than only national material.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The two adjustments that most improve an AP EAPCET result are both structural rather than about effort. The first is allocating study time in proportion to the paper — mathematics deserves close to half. The second is working from the state intermediate textbooks, because they match the framing and the emphasis of the questions in a way national material does not.',
          },
          {
            type: 'steps',
            title: 'A plan alongside intermediate study',
            items: [
              { text: 'Throughout intermediate — study from the state textbooks properly.', note: 'The entrance and the board examination draw on the same material; studying well for one serves the other.' },
              { text: 'Allocate about half your entrance preparation time to mathematics.', note: 'Matching its share of the paper.' },
              { text: 'Work physics and chemistry for speed as well as accuracy.', note: 'Forty questions each; they should not consume half your paper time.' },
              { text: 'Practise with no negative marking and no blanks.', note: 'Building the habit deliberately.' },
              { text: 'Confirm the rank calculation rules early.', note: 'Whether intermediate marks carry weightage affects how much your board performance matters.' },
              { text: 'Check local candidate documentation well before counselling.', note: 'It affects seat eligibility and is a documentation matter, not a preparation one.' },
            ],
          },
          {
            type: 'list',
            title: 'Common errors',
            items: [
              { text: 'Preparing as though the subjects were equally weighted', note: 'mathematics is half the paper.' },
              { text: 'Using only national exam material', note: 'the intermediate syllabus differs in framing and in some topics.' },
              { text: 'Leaving questions blank', note: 'no penalty applies in either stream.' },
              { text: 'Leaving counselling documentation late', note: 'local candidate status affects which seats you can access.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Allocation — the first correction',
                'Roughly half your entrance preparation time to mathematics, matching its share of the paper. Most candidates arrive at this examination having divided their time in thirds, which under-serves the section that decides their rank.',
              ],
              [
                'Sources — the second correction',
                'The state intermediate textbooks as the primary material, with national entrance material as supplement rather than substitute. The framing of the paper follows the intermediate curriculum, and candidates working only from national books meet familiar content in unfamiliar clothing.',
              ],
              [
                'Attempt habits — the third correction',
                'Nothing left blank. Simple, mechanical, and worth several marks to a candidate whose instincts were built on penalty-bearing papers.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The relationship between intermediate study and entrance preparation is closer here than for national examinations, and that is an advantage worth using deliberately. The same textbooks serve both, the framing is shared, and in cycles where intermediate marks carry a weightage in rank preparation the two are not competing at all. Studying your intermediate course properly is the foundation of an AP EAPCET preparation rather than a distraction from it.',
          },
          {
            type: 'note',
            title: 'Settle the counselling documentation early',
            text: 'Local candidate status governs which seats you can access, and establishing it requires documentation that takes time to assemble. This is administrative work with no relationship to how your preparation is going, and it is trivial in month one and stressful in the week counselling opens. Find out now what you will need.',
          },
        ],
      },
      'study-material': {
        description:
          'AP EAPCET study material — mathematics, physics, chemistry and biology notes alongside the state intermediate curriculum.',
        lead: [
          'The state intermediate textbooks are the primary source. These notes consolidate and supplement them.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the paper follows the Andhra Pradesh intermediate curriculum, the state textbooks are the correct primary source — matched in framing, notation and emphasis to what the questions ask. The notes below serve to consolidate topics and to fill gaps, particularly in mathematics, which carries half the engineering paper.',
          },
          {
            type: 'links',
            title: 'Subject notes for AP EAPCET',
            items: [
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
            ],
          },
          {
            type: 'list',
            title: 'How to allocate your study',
            items: [
              'Roughly half your time to mathematics, matching its share of the engineering paper.',
              'State intermediate textbooks as the primary source, with these notes to consolidate.',
              'Physics and chemistry practised for speed as well as accuracy.',
              'Every practice paper attempted completely, since no penalty applies.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Mathematics — half your material and half your time',
                'The intermediate textbooks first, worked thoroughly, with additional problem practice for speed. Eighty questions in about ninety minutes requires fluency in the standard forms rather than depth on any of them.',
              ],
              [
                'Physics and chemistry — brisk and complete',
                'Forty questions each, drawn across the whole intermediate syllabus. Completeness matters more than depth, and the practice should be aimed at working quickly enough to protect mathematics time.',
              ],
              [
                'Biology, for the agriculture stream',
                'Botany and zoology at intermediate level, evenly weighted with physics and chemistry. A different paper with a different allocation logic, and it should be prepared in its own proportions.',
              ],
              [
                'Past papers — the framing guide',
                'The most reliable indicator of how the intermediate syllabus is actually examined, which is not quite how national entrances examine the same topics.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'For candidates preparing for JEE Main alongside this examination, the two sets of material are complementary rather than duplicative. National problem sources build depth and problem-solving range, which helps everywhere; the state textbooks build familiarity with the framing and cover the topics the intermediate curriculum treats differently. Working only from one or the other leaves a gap that shows up in exactly one of the two examinations.',
          },
          {
            type: 'note',
            title: 'Practise mathematics at the paper’s pace',
            text: 'Eighty questions in ninety minutes is a little over a minute each, which is faster than most candidates practise mathematics. Timed sets of twenty questions, worked repeatedly against a clock, build the recognition speed the section requires — and that speed, rather than any additional technique, is usually what separates a good AP EAPCET mathematics score from an average one.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the AP EAPCET exam pattern?',
        a: 'The engineering stream has 160 questions in three hours — mathematics (80), physics (40) and chemistry (40) — with one mark per correct answer and no negative marking. The agriculture and pharmacy stream also has 160 questions in three hours, evenly split between botany, zoology, physics and chemistry at 40 each. The syllabus follows the Andhra Pradesh intermediate curriculum.',
      },
      {
        q: 'Why does mathematics matter so much in AP EAPCET?',
        a: 'Because it is eighty of the hundred and sixty questions in the engineering stream — exactly half the paper. That is a far heavier concentration than JEE Main or the private entrances apply, where the three subjects are equally weighted. The practical consequence is that a candidate with weak mathematics cannot compensate through physics and chemistry, since those together account for only half the marks, and study time should be allocated roughly in proportion.',
      },
      {
        q: 'Is there negative marking in AP EAPCET?',
        a: 'No, in either stream. Every question should therefore be answered — a blank scores zero while a guess has a real chance of scoring. With just over a minute per question, there is also time to check work rather than rush, which makes accuracy rather than speed the binding constraint for most candidates.',
      },
      {
        q: 'Do intermediate marks count towards the AP EAPCET rank?',
        a: 'The state has in some years applied a weightage of intermediate marks when preparing ranks, and the position has varied between cycles. Because it changes how much your board examination performance matters relative to the entrance test itself, it is worth confirming in the current notification rather than assuming continuity from a previous year.',
      },
      {
        q: 'Can I prepare for AP EAPCET alongside JEE Main?',
        a: 'Yes, and the content overlaps substantially. Two adjustments are needed. First, the weighting: mathematics is half the AP EAPCET engineering paper against a third of JEE Main, so your practice proportions should differ. Second, the source material: AP EAPCET follows the state intermediate curriculum, which frames some topics differently and includes material presented differently from the CBSE syllabus, so working from the state textbooks alongside your JEE material closes that gap.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     TG EAPCET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'tg-eapcet',
    path: '/entrance-exams/engineering/tg-eapcet/',
    name: 'TG EAPCET',
    fullName: 'Telangana Engineering, Agriculture and Pharmacy Common Entrance Test',
    authority: 'Telangana State Council of Higher Education',
    official: 'eapcet.tgche.ac.in',
    seoTitle: 'TG EAPCET 2026: Pattern, Syllabus, Local Status & Counselling',
    metaDescription:
      'TG EAPCET exam guide — engineering and agriculture stream patterns, Telangana intermediate syllabus, local candidate rules and counselling.',
    lead: [
      'TG EAPCET is Telangana’s common entrance test for engineering, agriculture and pharmacy admissions, conducted by the state council of higher education. In structure it mirrors its Andhra Pradesh counterpart — two streams, a hundred and sixty questions, three hours, no negative marking — and the engineering paper is likewise dominated by mathematics.',
      'The two states run separate examinations with separate counselling, separate local candidate rules and separate institution lists. Candidates from the region frequently sit both, which is straightforward since the syllabus and structure are so close, but the admission processes are entirely distinct.',
    ],
    quickFacts: [
      ['Conducted by', 'Telangana State Council of Higher Education'],
      ['Streams', 'Engineering; and Agriculture and Pharmacy'],
      ['Level', 'Class 12 with the relevant subject combination'],
      ['Engineering structure', '160 questions in 3 hours — mathematics 80, physics 40, chemistry 40'],
      ['Negative marking', 'None'],
      ['Admission', 'Through Telangana state counselling, with local candidate rules applying'],
    ],
    overview: [
      {
        type: 'p',
        text: 'TG EAPCET is used for admission to engineering, agriculture, pharmacy and allied professional programmes in Telangana institutions. Candidates apply in the engineering stream or the agriculture and pharmacy stream according to their intermediate subject combination, and admission is made through the state counselling process on rank.',
      },
      {
        type: 'p',
        text: 'The engineering paper allocates eighty of its hundred and sixty questions to mathematics — half the paper — with physics and chemistry taking forty each. As with the Andhra Pradesh examination, that weighting is the most important structural fact for a candidate to plan around, and it differs sharply from the equal weighting national entrances use.',
      },
      {
        type: 'list',
        title: 'How it relates to AP EAPCET',
        items: [
          { text: 'Same structure', note: 'two streams, 160 questions, three hours, no negative marking, mathematics-heavy engineering paper.' },
          { text: 'Similar syllabus', note: 'both follow their respective state intermediate curricula, which are close to one another.' },
          { text: 'Separate examinations', note: 'different conducting bodies, different papers, different dates.' },
          { text: 'Separate counselling and local rules', note: 'admission processes and local candidate status are determined state by state.' },
        ],
      },
      {
        type: 'note',
        title: 'Local candidate status is determined separately for each state',
        text: 'Telangana applies its own local and non-local candidate rules based on where the candidate studied, and these govern which seats you are eligible for in state counselling. The rules and the documentation required differ from those in Andhra Pradesh, and both should be checked well before counselling.',
      },
    ],
    stages: [
      {
        name: 'TG EAPCET — Engineering stream',
        mode: 'Computer-based, 3 hours',
        detail:
          '160 questions: mathematics (80), physics (40) and chemistry (40). One mark per correct answer, with no deduction for a wrong one.',
      },
      {
        name: 'TG EAPCET — Agriculture and Pharmacy stream',
        mode: 'Computer-based, 3 hours',
        detail:
          '160 questions: botany (40), zoology (40), physics (40) and chemistry (40). One mark per correct answer, no negative marking.',
      },
      {
        name: 'Rank and counselling',
        mode: 'State counselling',
        detail:
          'Ranks are prepared according to the rules in force for the cycle, and admission follows through Telangana’s counselling process, subject to local candidate status and reservation rules.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'TG EAPCET syllabus — mathematics, physics and chemistry for engineering, and botany and zoology for the agriculture stream.',
        lead: [
          'The syllabus follows the Telangana intermediate curriculum. It is close to the Andhra Pradesh syllabus and close to, but not identical with, the CBSE material national entrances use.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Mathematics (Engineering stream)',
                'Algebra covering functions, mathematical induction, matrices, complex numbers, de Moivre’s theorem, quadratic expressions, theory of equations, permutations and combinations, binomial theorem and partial fractions; trigonometry covering ratios and transformations, inverse trigonometric functions, hyperbolic functions and properties of triangles; vector algebra; probability and statistics including measures of dispersion, random variables and distributions; coordinate geometry covering locus, transformation of axes, straight lines, pairs of straight lines, circles, systems of circles, parabola, ellipse, hyperbola, three-dimensional coordinates, direction cosines and ratios, and planes; and calculus covering limits and continuity, differentiation, applications of derivatives, integration, definite integrals and differential equations. Half the paper.',
              ],
              [
                'Physics',
                'Physical world, units and measurements, motion in a straight line and in a plane, laws of motion, work energy and power, systems of particles and rotational motion, oscillations, gravitation, mechanical properties of solids and fluids, thermal properties of matter, thermodynamics, kinetic theory, waves, ray optics, wave optics, electric charges and fields, electrostatic potential and capacitance, current electricity, moving charges and magnetism, magnetism and matter, electromagnetic induction, alternating current, electromagnetic waves, dual nature of radiation and matter, atoms, nuclei, semiconductor electronics and communication systems.',
              ],
              [
                'Chemistry',
                'Atomic structure, classification of elements and periodicity, chemical bonding and molecular structure, states of matter, stoichiometry, thermodynamics, chemical equilibrium and acids and bases, hydrogen and its compounds, s-block elements, p-block elements, environmental chemistry, organic chemistry basic principles and techniques, hydrocarbons, solid state, solutions, electrochemistry and chemical kinetics, surface chemistry, general principles of metallurgy, d- and f-block elements and coordination compounds, haloalkanes and haloarenes, organic compounds containing oxygen and nitrogen, polymers, biomolecules and chemistry in everyday life.',
              ],
              [
                'Botany and Zoology (Agriculture and Pharmacy stream)',
                'Botany covering diversity in the living world, structural organisation in plants, reproduction in plants, plant systematics, cell structure and function, internal organisation of plants, plant ecology, plant physiology, microbiology, genetics, molecular biology and biotechnology. Zoology covering diversity of living world, structural organisation in animals, animal diversity, locomotion and reproduction in protozoa, biology in human welfare, ecology and environment, human anatomy and physiology, human reproduction, genetics, organic evolution and applied biology.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Candidates preparing for both TG EAPCET and AP EAPCET will find the syllabi close enough to prepare once. Candidates preparing alongside JEE Main should note the topics the intermediate curriculum treats that CBSE handles differently — hyperbolic functions, partial fractions and de Moivre’s theorem among them — and work from the state textbooks to match the framing.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'TG EAPCET exam pattern — the two stream structures, mathematics weighting, no negative marking and rank preparation.',
        lead: [
          'Half the engineering paper is mathematics. As in the Andhra Pradesh examination, that determines most of the sensible preparation allocation.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Engineering stream structure. Confirm question counts, marking and rank rules against the current notification.',
            head: ['Subject', 'Questions', 'Marks', 'Share'],
            rows: [
              ['Mathematics', '80', '80', 'Half the paper'],
              ['Physics', '40', '40', 'A quarter'],
              ['Chemistry', '40', '40', 'A quarter'],
              ['Total', '160', '160', '3 hours'],
            ],
          },
          {
            type: 'p',
            text: 'With no negative marking and just over a minute per question, this is a paper where accuracy rather than risk-taking determines the outcome. There is time to verify, no cost to guessing, and no reason for any question to be left unanswered. What differentiates candidates is mathematics — both accuracy and the speed to get through eighty questions without shortchanging the sciences.',
          },
          {
            type: 'list',
            title: 'What to plan around',
            items: [
              { text: 'Mathematics dominance', note: 'half the marks, and the single largest determinant of rank in the engineering stream.' },
              { text: 'No negative marking', note: 'so nothing should be left blank in either stream.' },
              { text: 'Even weighting in the agriculture stream', note: 'forty questions each in botany, zoology, physics and chemistry.' },
              { text: 'Rank preparation rules', note: 'confirm how the rank is computed for your cycle, including any weightage applied to intermediate marks.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the rank calculation and local status rules',
            text: 'Both the method of computing ranks and the local candidate rules governing seat eligibility are set out by the state and have been stated differently across cycles and between the two Telugu states. Read the current Telangana notification rather than relying on a summary written for another state or year.',
          },
          {
            type: 'p',
            text: 'The eighty-forty-forty split should translate directly into a time budget, and it is worth writing that budget down before you sit any practice paper. Ninety minutes for eighty mathematics questions, forty-five each for physics and chemistry. Candidates who divide three hours evenly across three subjects are giving mathematics an hour to do ninety minutes of work, and the shortfall falls squarely on the half of the paper that determines their rank.',
          },
          {
            type: 'defs',
            items: [
              [
                'What no negative marking removes',
                'The entire question of whether to attempt. There is no risk calculation, no elimination threshold and no reason to leave anything unanswered — which makes the last few minutes of the paper a mechanical sweep rather than a series of judgements.',
              ],
              [
                'What it does not remove',
                'The cost of haste. Time spent on a question you get wrong is still time lost, and in a paper with just over a minute per question that cost is real. No penalty makes guessing free; it does not make rushing free.',
              ],
              [
                'How the agriculture stream differs',
                'Forty questions each across botany, zoology, physics and chemistry — evenly weighted. The mathematics-first logic of the engineering stream does not apply, and time should follow your weakest subject instead.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Rank rules and local status are set by Telangana',
            text: 'Both the method of computing ranks — including any weightage given to intermediate marks — and the local candidate rules governing seat eligibility are set by the Telangana authorities and are not the same as Andhra Pradesh’s. Confirm both for your cycle rather than assuming that what applies across the border applies here.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'TG EAPCET previous year papers — matching the intermediate framing and building the mathematics speed the paper needs.',
        lead: [
          'Past papers show how the Telangana intermediate syllabus is examined, which is not quite how national entrances examine the same topics.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The content of TG EAPCET overlaps heavily with JEE Main, but the framing follows the state intermediate textbooks — the notation, the standard problem forms and the emphasis within each chapter. Past papers close that gap faster than anything else, and they also make clear how much mathematics practice the paper actually demands.',
          },
          {
            type: 'steps',
            title: 'Working the papers',
            items: [
              { text: 'Practise mathematics far more than the other subjects.', note: 'Eighty of a hundred and sixty questions. No other allocation decision has this much leverage.' },
              { text: 'Use Telangana intermediate textbooks alongside past papers.', note: 'They match the framing the questions use.' },
              { text: 'Attempt every question.', note: 'No negative marking; build the habit in practice so it is automatic.' },
              { text: 'AP EAPCET papers are useful supplementary practice.', note: 'The structure and syllabus are close enough for the practice to transfer.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'AP EAPCET guide', to: '/entrance-exams/engineering/ap-eapcet/' },
              { label: 'JEE Main guide', to: '/entrance-exams/engineering/jee-main/' },
              { label: 'Telangana state exams', to: '/government-exams/state/telangana/' },
            ],
          },
          {
            type: 'list',
            title: 'Why the framing matters as much as the content',
            items: [
              { text: 'Standard forms and notation', note: 'the Telangana intermediate textbooks present certain results in particular forms, and questions are built expecting that presentation. Familiar content in unfamiliar notation costs seconds you cannot spare at this pace.' },
              { text: 'Results treated as assumed', note: 'a paper written against the intermediate curriculum quotes standard results without setting them up. Knowing which results are treated as common ground is a real time advantage.' },
              { text: 'Emphasis within chapters', note: 'the same chapter is examined differently depending on which parts the state curriculum foregrounds, and only past papers reveal that.' },
              { text: 'Question length and directness', note: 'these papers ask more direct questions than national entrances do, which rewards recognition speed rather than the extended reasoning JEE practice builds.' },
            ],
          },
          {
            type: 'p',
            text: 'Practise in the paper’s proportions rather than evenly. For every hour of physics or chemistry practice you should be doing roughly two of mathematics, and when you work in sections rather than full papers, mathematics sets should appear twice as often. It is a simple correction and it is the one most TG EAPCET candidates have not made.',
          },
          {
            type: 'p',
            text: 'AP EAPCET past papers are genuinely useful supplementary material here. The two examinations share their structure, their weighting and a very similar curriculum, which means the other state’s papers give you additional practice at exactly the level and framing you need — and mathematics practice at that specific level is the resource you will run short of first.',
          },
          {
            type: 'note',
            title: 'Attempt everything, from the first practice paper',
            text: 'No penalty applies, so the correct behaviour is to answer every question — and that has to become automatic well before the examination. Candidates who leave blanks in practice on the assumption that they will guess properly on the day are depending on a habit they have never built.',
          },
        ],
      },
      'mock-tests': {
        description:
          'TG EAPCET mock tests — full 160-question practice in the real stream weighting, with no negative marking.',
        lead: [
          'Practise with eighty mathematics questions. Any mock that does not is measuring a different examination.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The pacing challenge in this paper is specific: eighty mathematics questions take longer per question than eighty science questions would, and a candidate who works through the paper in printed order can find the mathematics section squeezed. Practising in the real proportions is how you find the attempt order that protects it.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Mathematics accuracy and time', note: 'the dominant factor in your rank.' },
              { text: 'Blanks — always zero', note: 'no penalty applies.' },
              { text: 'Physics and chemistry pace', note: 'eighty questions between them that should be worked briskly.' },
              { text: 'Concentration across three hours', note: 'a long paper, and a decline in the final hour costs as much as one anywhere else.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A mock routine for a mathematics-heavy paper',
            items: [
              { title: 'Insist on eighty mathematics questions', text: 'Any mock without that weighting is measuring a different examination, however well constructed it is.' },
              { title: 'Budget the time before you start', text: 'Ninety minutes for mathematics, forty-five each for physics and chemistry, written down. Compare the plan with what actually happened afterwards.' },
              { title: 'Count blanks — the answer is always zero', text: 'No penalty applies, and a single unanswered question means the habit is not yet automatic.' },
              { title: 'Work physics and chemistry briskly', text: 'Eighty questions between them, and every minute saved is a minute available to the section carrying half the marks.' },
              { title: 'Watch the final hour', text: 'Three hours is a long sitting and a decline in accuracy late in the paper is a concentration finding that only full-length practice will expose.' },
            ],
          },
          {
            type: 'p',
            text: 'The specific pacing trap in this paper is that mathematics questions take longer per question than physics or chemistry questions do, while carrying the same single mark each. A candidate who works through in question order, at a uniform pace, will find the mathematics section consuming far more than its share of the clock — and will then rush the remaining subjects to compensate, losing marks in the sections that were supposed to be quick.',
          },
          {
            type: 'note',
            title: 'Agriculture and pharmacy candidates practise differently',
            text: 'With botany, zoology, physics and chemistry evenly weighted at forty questions each, there is no dominant section to build a time budget around. Practise in even proportions, and direct your study time towards whichever subject your mocks identify as weakest — under even weighting, that subject is the direct constraint on your total.',
          },
        ],
      },
      preparation: {
        description:
          'TG EAPCET preparation — mathematics-weighted study, intermediate textbook use and planning for state counselling.',
        lead: [
          'Half your preparation to mathematics, worked from the state intermediate books, with counselling documentation settled early.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most effective TG EAPCET preparation is not more effort but better allocation. Mathematics carries half the engineering paper and should carry close to half the study time; the state intermediate textbooks match the framing the paper uses and should be the primary source; and the counselling documentation, including local candidate status, should be settled before the results rather than after.',
          },
          {
            type: 'steps',
            title: 'A plan alongside intermediate study',
            items: [
              { text: 'Throughout intermediate — work the state textbooks properly.', note: 'The board examination and the entrance draw on the same material.' },
              { text: 'Allocate close to half your entrance preparation to mathematics.', note: 'Matching its share of the paper.' },
              { text: 'Practise physics and chemistry for pace.', note: 'Eighty questions between them, and they should not eat into mathematics time.' },
              { text: 'Practise with no penalty and no blanks.', note: 'Deliberately, so the habit is automatic on the day.' },
              { text: 'Use AP EAPCET past papers as extra practice.', note: 'Close enough in structure and syllabus for the practice to transfer.' },
              { text: 'Settle local candidate documentation early.', note: 'It governs which seats you can access in state counselling.' },
            ],
          },
          {
            type: 'list',
            title: 'Common errors',
            items: [
              { text: 'Even allocation across subjects', note: 'mathematics is half the paper, not a third.' },
              { text: 'Preparing only from national material', note: 'the intermediate framing differs and some topics are treated differently.' },
              { text: 'Leaving questions blank', note: 'no penalty applies in either stream.' },
              { text: 'Assuming Andhra Pradesh rules apply', note: 'the two states run separate examinations, counselling and local status rules.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Allocation before effort',
                'Close to half your entrance preparation time to mathematics. This is the correction that produces the largest improvement for most candidates, and it costs nothing but a redistribution of hours you were already spending.',
              ],
              [
                'State textbooks before national material',
                'The paper follows the Telangana intermediate curriculum in both content and framing. National entrance material is a useful supplement for depth and problem variety, and a poor substitute for the books the examination is actually written against.',
              ],
              [
                'Pace before difficulty',
                'The questions are more direct than JEE Main’s and there are more of them per minute. Practice should be aimed at working quickly and accurately at a moderate level, not at handling harder variants slowly.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Intermediate study and entrance preparation reinforce each other here in a way they do not for national examinations. The same textbooks serve both, the framing is shared, and in cycles where intermediate marks carry a weightage in rank preparation the two genuinely are one project. A candidate who treats their intermediate course as a distraction from entrance preparation has the relationship backwards.',
          },
          {
            type: 'note',
            title: 'Telangana and Andhra Pradesh run separate processes',
            text: 'Two examinations, two counselling processes, two sets of local candidate rules and two seat matrices. The papers are similar enough to prepare for together, and the administration is not. If you intend to sit both, read each state’s rules separately rather than assuming that what you have learned about one transfers.',
          },
        ],
      },
      'study-material': {
        description:
          'TG EAPCET study material — mathematics, physics, chemistry and biology notes alongside the Telangana intermediate curriculum.',
        lead: [
          'Telangana intermediate textbooks as the primary source, with these notes to consolidate — mathematics first.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the paper follows the Telangana intermediate curriculum, the state textbooks are the right primary source. The notes below consolidate and supplement them, and mathematics deserves the greatest attention within them, since it accounts for half the engineering paper.',
          },
          {
            type: 'links',
            title: 'Subject notes for TG EAPCET',
            items: [
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
            ],
          },
          {
            type: 'list',
            title: 'How to allocate study time',
            items: [
              'Close to half to mathematics, matching its share of the engineering paper.',
              'State intermediate textbooks first, with these notes to consolidate and fill gaps.',
              'Physics and chemistry worked for pace as well as accuracy.',
              'Every practice paper attempted completely, since no penalty applies.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Mathematics — the priority in both time and material',
                'Telangana intermediate textbooks worked thoroughly, plus additional problem practice for speed. Eighty questions in ninety minutes rewards fluency in standard forms far more than it rewards depth.',
              ],
              [
                'Physics and chemistry — complete and quick',
                'Forty questions each, spread across the whole intermediate syllabus. Breadth matters more than depth, and the practice should be aimed at pace so that mathematics keeps its share of the clock.',
              ],
              [
                'Botany and zoology, for the agriculture stream',
                'Intermediate-level biology, evenly weighted with physics and chemistry in that stream. A different paper with a different allocation, prepared in its own proportions.',
              ],
              [
                'Past papers — from both states',
                'Telangana papers first, Andhra Pradesh papers as additional practice at the same level and framing. Together they provide more mathematics practice at the right pitch than any single source will.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A candidate preparing for JEE Main as well should keep both sets of material rather than choosing between them. The national problem sources build range and depth that help everywhere, including here; the state textbooks supply the framing, the notation and the topics the intermediate curriculum treats in its own way. Dropping either leaves a gap that appears in precisely one of the two examinations, and usually late.',
          },
          {
            type: 'note',
            title: 'Timed mathematics sets are the core practice',
            text: 'Twenty questions against a clock, repeatedly, until a little over a minute each feels unhurried. That single drill does more for a TG EAPCET rank than any amount of additional topic study, because the section that decides the paper is limited by recognition speed rather than by technique.',
          },
          {
            type: 'p',
            text: 'On sequencing the material across a year: work the intermediate textbooks as your course covers them, so that entrance preparation and college study advance together rather than competing. Then, in the final three or four months, shift the balance decisively towards timed mathematics practice and full-length papers. That order matters — the textbook work builds the content and the framing, and the timed work converts it into the recognition speed the paper rewards. Reversing it produces a candidate who is fast on material they have not fully covered.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the TG EAPCET exam pattern?',
        a: 'The engineering stream has 160 questions in three hours — mathematics (80), physics (40) and chemistry (40) — with one mark per correct answer and no negative marking. The agriculture and pharmacy stream also has 160 questions in three hours, split evenly between botany, zoology, physics and chemistry at 40 each. The syllabus follows the Telangana intermediate curriculum.',
      },
      {
        q: 'How is TG EAPCET different from AP EAPCET?',
        a: 'Structurally they are almost identical — two streams, 160 questions, three hours, no negative marking, and an engineering paper dominated by mathematics. What differs is everything administrative: separate conducting bodies, separate papers on separate dates, separate counselling processes, separate institution lists, and separate local candidate rules governing seat eligibility. Candidates from the region often sit both, which is straightforward given the syllabus overlap, but the admission processes are entirely distinct.',
      },
      {
        q: 'Why is mathematics so heavily weighted in TG EAPCET?',
        a: 'The engineering paper allocates eighty of its hundred and sixty questions to mathematics — exactly half. That is far more than the equal weighting national entrances such as JEE Main use, and it means a candidate cannot compensate for weak mathematics through physics and chemistry, since those together account for only the other half. Study time should be allocated roughly in proportion, with close to half going to mathematics.',
      },
      {
        q: 'Is there negative marking in TG EAPCET?',
        a: 'No, in either stream. Every question should therefore be attempted, since a blank scores zero while a guess has a genuine chance. With just over a minute per question there is also time to verify work, which makes accuracy rather than speed the binding constraint for most candidates — and makes the careful skipping habits learned from penalty-based papers actively counterproductive here.',
      },
      {
        q: 'What is local candidate status in TG EAPCET counselling?',
        a: 'Telangana applies local and non-local candidate rules based on where the candidate studied, and these determine which seats you are eligible for in the state counselling process. The rules and required documentation are set by the state, differ from those in Andhra Pradesh, and are worth confirming and preparing for well before counselling begins rather than during it — it is a documentation matter rather than a preparation one, but it affects outcomes just as directly.',
      },
    ],
  },
]

export default engineering
