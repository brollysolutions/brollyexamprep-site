/**
 * Postgraduate and research entrance exams — /entrance-exams/pg-research/
 *
 * GATE and IIT JAM. Both are subject examinations at degree level, and both
 * are used for far more than the admissions they were designed for — GATE for
 * public sector recruitment as much as for postgraduate admission, JAM as the
 * route into integrated and postgraduate science programmes at the IITs and
 * IISc. Those secondary uses shape how candidates should approach them.
 */

const pgResearch = [
  /* ══════════════════════════════════════════════════════════════
     GATE
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'gate',
    path: '/entrance-exams/pg-research/gate/',
    name: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    authority: 'The IITs and IISc, on a rotating basis',
    official: 'gate.iitk.ac.in',
    seoTitle: 'GATE 2026: Pattern, NAT Questions, PSU Recruitment & Strategy',
    metaDescription:
      'GATE exam guide — paper structure with general aptitude and NAT questions, subject papers, PSU recruitment use, scoring and preparation.',
    lead: [
      'GATE tests comprehensive understanding of undergraduate engineering and science subjects. It was designed as a postgraduate admission test, and it still is one — but for a great many candidates its more consequential use is public sector recruitment, since a large number of PSUs shortlist for engineering posts on GATE score.',
      'That dual purpose matters for how you prepare. Postgraduate admission and PSU recruitment can call for different score targets and different paper choices, and a candidate who has not decided which they are pursuing tends to prepare for neither well.',
    ],
    quickFacts: [
      ['Conducted by', 'The IITs and IISc, on a rotating basis'],
      ['Used for', 'Postgraduate admission, research programmes, and public sector recruitment'],
      ['Level', 'A bachelor’s degree in engineering, technology, science or architecture'],
      ['Structure', 'One 3-hour paper — 15 marks of general aptitude plus 85 marks of subject content'],
      ['Question types', 'Multiple choice, multiple select, and numerical answer type'],
      ['Score validity', 'Three years'],
    ],
    overview: [
      {
        type: 'p',
        text: 'GATE is a single three-hour paper in a chosen subject, offered across a wide range of engineering, science, humanities and architecture disciplines. Candidates may sit one paper or, where permitted, two, and the score is valid for three years — which gives it a longer useful life than most Indian entrance examinations.',
      },
      {
        type: 'p',
        text: 'Its results feed three quite different processes. Postgraduate admission to the IITs, IISc, NITs and other institutions, frequently with a written test or interview stage after shortlisting. Research fellowships and direct doctoral admission. And recruitment by public sector undertakings, many of which shortlist entirely on GATE score before their own interview process.',
      },
      {
        type: 'list',
        title: 'The three question types, and why they matter',
        items: [
          { text: 'Multiple choice questions', note: 'four options, one correct, with negative marking. The conventional type.' },
          { text: 'Multiple select questions', note: 'more than one option may be correct, and partial credit generally does not apply — you must select exactly the right set. No negative marking, but also no partial reward.' },
          { text: 'Numerical answer type', note: 'you enter a value rather than selecting an option. No negative marking, and no elimination possible either.' },
          { text: 'The consequence', note: 'the two non-MCQ types carry no penalty, which means they should never be left unanswered.' },
        ],
      },
      {
        type: 'note',
        title: 'Decide early whether you are targeting admission or PSU recruitment',
        text: 'The two use GATE differently. PSU recruitment generally shortlists on a high rank in a specific paper and applies its own eligibility criteria; postgraduate admission uses the score alongside institutional processes and may weigh other factors. The score target, and sometimes the paper choice, differ accordingly — and a candidate who has not settled the question ends up optimising for neither.',
      },
    ],
    stages: [
      {
        name: 'GATE paper',
        mode: 'Computer-based, 3 hours',
        detail:
          'One paper of 100 marks — 15 marks of general aptitude and 85 marks of subject content — using multiple choice, multiple select and numerical answer type questions. Negative marking applies to multiple choice questions only.',
      },
      {
        name: 'Score and rank',
        mode: 'Normalised',
        detail:
          'A GATE score is computed from the marks obtained, with normalisation applied where a paper runs across multiple sessions. The score is valid for three years.',
      },
      {
        name: 'Postgraduate admission',
        mode: 'Institution-conducted',
        detail:
          'Institutions shortlist on GATE score and then conduct their own processes, frequently including a written test or interview, for admission to master’s and doctoral programmes.',
      },
      {
        name: 'PSU recruitment',
        mode: 'Organisation-conducted',
        detail:
          'Public sector undertakings advertise vacancies and shortlist candidates on GATE score in the relevant paper, followed by their own group discussion and interview processes.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'GATE syllabus — general aptitude, engineering mathematics and the subject syllabus for each paper.',
        lead: [
          'Three components: general aptitude, engineering mathematics in most papers, and the core subject. All three carry marks, and the first two are frequently under-prepared.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Aptitude',
                'Verbal aptitude covering basic English grammar, vocabulary, comprehension and narrative sequencing; and quantitative aptitude covering data interpretation, numerical computation and estimation, mensuration, elementary statistics and probability. Fifteen marks in every paper, common to all disciplines, and among the most reliably scoreable content in the examination.',
              ],
              [
                'Engineering Mathematics',
                'Present in most engineering papers, covering linear algebra, calculus, differential equations, complex variables, probability and statistics, and numerical methods, with the exact composition varying by paper. A substantial block of marks that many candidates leave to the end and consequently prepare thinly.',
              ],
              [
                'Core subject content',
                'The undergraduate curriculum of the chosen discipline, at degree level. For civil engineering that means structural analysis, geotechnical, water resources, environmental, transportation and construction management; for mechanical, applied mechanics, thermodynamics, fluid mechanics, manufacturing and design; for electrical, circuits, machines, power systems, control and electronics; for computer science, algorithms, data structures, operating systems, databases, networks, theory of computation and computer organisation — and correspondingly for every other paper.',
              ],
              [
                'Science and humanities papers',
                'GATE also offers papers in physics, chemistry, mathematics, life sciences, statistics, geology and geophysics, and in humanities and social sciences, each with its own defined syllabus at degree level.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The general aptitude section deserves more attention than it usually gets. Fifteen marks — the same as several substantial subject topics — for content that requires no engineering knowledge and can be secured in a few weeks. For a candidate targeting a high rank, leaving even a few of those marks on the table is an expensive habit.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'GATE exam pattern — the 100-mark structure, three question types, negative marking rules and score validity.',
        lead: [
          'Negative marking applies to multiple choice questions only. The other two question types are free attempts, and should be treated as such.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm the exact composition, marks and negative marking rules for your paper in the current information brochure.',
            head: ['Component', 'Marks', 'Notes'],
            rows: [
              ['General Aptitude', '15', 'Common to all papers; verbal and quantitative'],
              ['Subject content', '85', 'Including engineering mathematics in most engineering papers'],
              ['Total', '100', '3 hours, computer-based'],
            ],
          },
          {
            type: 'p',
            text: 'The marking rules differ by question type and this is the detail most worth internalising. Multiple choice questions carry a deduction. Multiple select questions require exactly the correct set of options — no partial credit, but no penalty either. Numerical answer type questions require you to type a value, with no options and no penalty. Since two of the three types cannot cost you marks, leaving any of them blank is a pure loss.',
          },
          {
            type: 'list',
            title: 'Strategy that follows from the marking',
            items: [
              { text: 'Never leave a numerical answer type question blank', note: 'no penalty applies, and an estimate has a real chance of falling in the accepted range.' },
              { text: 'Attempt multiple select questions carefully', note: 'no penalty, but you must get the whole set right, so partial confidence does not convert.' },
              { text: 'Apply guessing discipline to multiple choice only', note: 'these are the questions where a wrong answer costs you.' },
              { text: 'Secure the general aptitude marks', note: 'fifteen marks requiring no subject knowledge.' },
            ],
          },
          {
            type: 'note',
            title: 'The score is valid for three years',
            text: 'That validity gives GATE an unusual property: a strong score can be used across multiple admission cycles and multiple PSU recruitment advertisements. It also means a candidate who does well early has a genuine asset, and one who does poorly has time to improve without losing the option entirely.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'GATE previous year papers — building a topic weighting table and practising the three question types.',
        lead: [
          'GATE past papers are the most reliable weighting guide available for a syllabus that lists everything and prioritises nothing.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A GATE subject syllabus is long and gives no indication of emphasis. Past papers supply it immediately: in every discipline a handful of topics recur every year, several appear intermittently, and a long tail appears once in five years. Two evenings tabulating a decade of papers in your own subject will redirect months of study more effectively than any strategy article.',
          },
          {
            type: 'steps',
            title: 'How to work the papers',
            items: [
              { text: 'Build a topic frequency table from a decade of papers in your subject.', note: 'The uneven distribution is what makes it useful.' },
              { text: 'Study the heavy topics to full working depth first.', note: 'With solved problems rather than passive reading.' },
              { text: 'Practise numerical answer type questions specifically.', note: 'No elimination is possible, so they require genuine calculation and careful attention to units and precision.' },
              { text: 'Note where multiple select questions appear.', note: 'They demand complete correctness, which changes how you approach them.' },
              { text: 'Do not skip general aptitude in past papers.', note: 'Fifteen marks that most candidates under-practise.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'IIT JAM guide', to: '/entrance-exams/pg-research/iit-jam/' },
              { label: 'UPSC Engineering Services guide', to: '/government-exams/upsc/engineering-services/' },
              { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'GATE mock tests — full three-hour practice with the correct marking rules for each question type.',
        lead: [
          'A useful GATE mock applies the right penalty to the right question type. Uniform marking teaches the wrong attempt habits.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The three question types have three different risk profiles, and a mock that treats them identically misses the most actionable strategy in the examination. Track your performance on each separately — particularly numerical answer type questions, where errors come from calculation and precision rather than from conceptual gaps and are fixed differently.',
          },
          {
            type: 'list',
            title: 'What to analyse',
            items: [
              { text: 'Blanks on non-MCQ questions — always zero', note: 'no penalty applies to numerical or multiple select questions.' },
              { text: 'Numerical answer accuracy', note: 'errors here are often about units, precision or arithmetic rather than understanding.' },
              { text: 'General aptitude score', note: 'it should be near-complete; if it is not, a few weeks of work fixes fifteen marks.' },
              { text: 'Engineering mathematics accuracy', note: 'a substantial block that is commonly under-prepared.' },
              { text: 'Topic-wise subject accuracy', note: 'mapped against your frequency table to find where revision pays.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Mathematics study material', to: '/study-material/mathematics/' },
              { label: 'Reasoning study material', to: '/study-material/reasoning/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'GATE preparation — topic-weighted subject revision, engineering mathematics, general aptitude and choosing your target.',
        lead: [
          'Decide what you are using GATE for, then prepare in the order the marks are weighted: subject, mathematics, aptitude.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'GATE preparation is a rebuilding project rather than a learning one. The content is your own degree, revisited at examination depth, guided by a topic weighting table built from past papers. What makes candidates unsuccessful is rarely a missing topic — it is uneven depth, weak engineering mathematics, and general aptitude marks left unclaimed.',
          },
          {
            type: 'steps',
            title: 'A plan of about a year',
            items: [
              { text: 'First — decide whether you are targeting admission or PSU recruitment.', note: 'It affects your score target and sometimes your paper choice.' },
              { text: 'Week one — build a topic frequency table from a decade of past papers.', note: 'In your own subject. Everything after this follows from it.' },
              { text: 'Months one to six — core subject, in weighting order.', note: 'From your degree textbooks, with problems worked rather than read.' },
              { text: 'Months two to five — engineering mathematics as a subject in its own right.', note: 'A substantial block that is routinely left too late.' },
              { text: 'Month three — general aptitude, as a short project.', note: 'Fifteen marks securable in a few weeks. High return for limited time.' },
              { text: 'Months six to nine — full timed papers with correct question-type marking.', note: 'And revision guided by where errors cluster.' },
              { text: 'Throughout — maintain a personal formula and derivation sheet.', note: 'Written by hand, covering only what you keep forgetting.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates high scorers',
            items: [
              { text: 'A weighting table driving the study order', note: 'rather than working through the syllabus in its printed sequence.' },
              { text: 'Working problems rather than reading theory', note: 'the numerical questions in particular reward practice and nothing else.' },
              { text: 'Preparing engineering mathematics seriously', note: 'a large, learnable block that many treat as an afterthought.' },
              { text: 'Securing general aptitude completely', note: 'fifteen marks requiring no subject knowledge.' },
              { text: 'Never leaving a non-MCQ question blank', note: 'no penalty applies to two of the three question types.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'GATE study material — guidance on degree textbooks for the subject, plus mathematics and aptitude notes.',
        lead: [
          'Degree textbooks for the subject, guided by past-paper weighting. These notes cover mathematics and general aptitude.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the eighty-five marks of subject content, standard degree textbooks in your discipline are the right primary source — they carry the derivations and the worked problems that a competitive digest compresses out, and GATE questions reward exactly that depth. The notes below support engineering mathematics and the general aptitude section, which are common across papers.',
          },
          {
            type: 'links',
            title: 'Notes supporting the common sections',
            items: [
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
            ],
          },
          {
            type: 'list',
            title: 'How to work at GATE depth',
            items: [
              'Solve problems before reading solutions, always.',
              'Work derivations by hand rather than accepting stated results.',
              'Maintain one formula and derivation sheet per subject area, written by you.',
              'Practise numerical answer type questions with attention to units and precision.',
              'Revisit each heavy topic twice more before the examination.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the GATE exam pattern?',
        a: 'A single three-hour computer-based paper of 100 marks — 15 marks of general aptitude common to all papers, and 85 marks of subject content including engineering mathematics in most engineering papers. Three question types are used: multiple choice, which carries negative marking; multiple select, which requires exactly the correct set of options with no partial credit but no penalty; and numerical answer type, where you enter a value with no penalty. Confirm the composition for your specific paper in the current information brochure.',
      },
      {
        q: 'Is there negative marking in GATE?',
        a: 'Only on multiple choice questions. Multiple select and numerical answer type questions carry no penalty, which means leaving either of them blank is a pure loss — an unanswered numerical question scores zero, while an estimate has a genuine chance of falling within the accepted range. Applying uniform caution across all three question types is one of the more common and more costly habits candidates bring from other examinations.',
      },
      {
        q: 'How is GATE used for PSU recruitment?',
        a: 'A large number of public sector undertakings advertise engineering vacancies and shortlist candidates on their GATE score in the relevant paper, followed by the organisation’s own group discussion and interview process. This is a materially different use from postgraduate admission — it generally requires a high rank in a specific paper and applies its own eligibility criteria — so a candidate should settle early which they are targeting, because the score goal and sometimes the paper choice differ.',
      },
      {
        q: 'How long is a GATE score valid?',
        a: 'Three years, which is longer than most Indian entrance examinations and gives the score real value as an asset. A strong score can be used across multiple admission cycles and multiple PSU recruitment advertisements within that window, and a candidate who scores well early has time to pursue several options. It also means a disappointing attempt does not close the door — there is time to prepare properly and improve.',
      },
      {
        q: 'How much does general aptitude matter in GATE?',
        a: 'Fifteen marks out of a hundred, in every paper, for content that requires no engineering knowledge — verbal ability, comprehension, basic quantitative aptitude and data interpretation. It is among the most reliably scoreable material in the examination and can be secured with a few weeks of focused work, yet candidates concentrating on their subject routinely under-practise it. For anyone targeting a high rank, leaving even a few of those marks unclaimed is an expensive habit.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     IIT JAM
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'iit-jam',
    path: '/entrance-exams/pg-research/iit-jam/',
    name: 'IIT JAM',
    fullName: 'Joint Admission Test for Masters',
    authority: 'The IITs and IISc, on a rotating basis',
    official: 'jam.iitm.ac.in',
    seoTitle: 'IIT JAM 2026: Test Papers, Pattern, MSQ & NAT Question Types',
    metaDescription:
      'IIT JAM exam guide — the science test papers, three question types and their marking, admission to IIT and IISc programmes, and strategy.',
    lead: [
      'IIT JAM is the entrance test for master’s and integrated programmes in the sciences at the IITs, IISc and a number of other participating institutions. It offers test papers in biotechnology, chemistry, economics, geology, mathematics, mathematical statistics and physics.',
      'Its question structure mirrors GATE’s — multiple choice with negative marking, multiple select without, and numerical answer type without — which makes the same strategic point apply: two of the three question types cost nothing to attempt, and leaving them blank is a straightforward loss.',
    ],
    quickFacts: [
      ['Conducted by', 'The IITs and IISc, on a rotating basis'],
      ['Admits to', 'Master’s and integrated science programmes at IITs, IISc and other institutions'],
      ['Level', 'A bachelor’s degree with the relevant subject background'],
      ['Test papers', 'Biotechnology, Chemistry, Economics, Geology, Mathematics, Mathematical Statistics, Physics'],
      ['Structure', '3-hour computer-based paper of 100 marks in three sections'],
      ['Question types', 'Multiple choice (negative marking), multiple select and numerical answer type (no penalty)'],
    ],
    overview: [
      {
        type: 'p',
        text: 'JAM was created to give science graduates a common route into postgraduate programmes at the IITs, which historically ran their own separate entrances. It now also feeds programmes at IISc and at a set of other participating institutions, with admission made through a centralised process on the basis of rank.',
      },
      {
        type: 'p',
        text: 'Candidates choose a test paper corresponding to their intended field of study, and eligibility for particular programmes depends on both the paper taken and the subjects studied at bachelor’s level. As with CUET PG, the mapping between test paper and target programme is worth verifying before registering rather than after.',
      },
      {
        type: 'list',
        title: 'The paper structure',
        items: [
          { text: 'Section A — multiple choice questions', note: 'four options, one correct, with negative marking. The largest section by question count.' },
          { text: 'Section B — multiple select questions', note: 'more than one option may be correct, no partial credit, and no negative marking.' },
          { text: 'Section C — numerical answer type questions', note: 'a value is entered rather than selected, with no negative marking.' },
          { text: 'The strategic consequence', note: 'Sections B and C carry no penalty, so nothing in them should be left unanswered.' },
        ],
      },
      {
        type: 'note',
        title: 'Check programme eligibility against your degree subjects',
        text: 'Admission to a particular programme depends not only on your JAM paper and rank but on the subjects you studied at bachelor’s level, with participating institutions specifying minimum educational qualifications for each programme. Verify these before you register, since a strong rank in the wrong paper — or with the wrong subject background — does not open the programme you want.',
      },
    ],
    stages: [
      {
        name: 'JAM test paper',
        mode: 'Computer-based, 3 hours',
        detail:
          'One paper of 100 marks in the chosen subject, divided into Section A multiple choice questions with negative marking, Section B multiple select questions, and Section C numerical answer type questions. Sections B and C carry no negative marking.',
      },
      {
        name: 'Result and merit list',
        mode: 'Score-based',
        detail:
          'A merit list is prepared for each test paper, and candidates apply for programmes through the centralised admission portal on the basis of rank and eligibility.',
      },
      {
        name: 'Admission',
        mode: 'Centralised',
        detail:
          'Admission to participating institutions is made through a centralised process with choice-filling and multiple rounds, subject to programme-specific minimum educational qualifications.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'IIT JAM syllabus — the seven test papers and the degree-level content each covers.',
        lead: [
          'Seven papers, each drawn from the undergraduate curriculum of its discipline. Read only the one you are sitting.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Physics',
                'Mathematical methods, mechanics and general properties of matter, oscillations waves and optics, electricity and magnetism, kinetic theory and thermodynamics, modern physics, solid state physics and devices, and electronics. Degree-level throughout.',
              ],
              [
                'Chemistry',
                'Physical chemistry covering basic mathematical concepts, atomic and molecular structure, theory of gases, solid state, chemical thermodynamics, chemical and phase equilibria, electrochemistry, chemical kinetics and adsorption; organic chemistry covering basic concepts, stereochemistry, reaction mechanisms, organic synthesis, natural products, heterocyclic chemistry and spectroscopy; and inorganic chemistry covering periodic table, chemical bonding, main group and transition elements, bioinorganic chemistry, analytical chemistry and instrumental methods.',
              ],
              [
                'Mathematics',
                'Sequences and series of real numbers, functions of one and two real variables, integral calculus, differential equations, vector calculus, group theory, linear algebra and real analysis. A demanding paper that rewards genuine mathematical maturity rather than technique alone.',
              ],
              [
                'Mathematical Statistics',
                'Mathematics comprising sequences and series, differential calculus, integral calculus, matrices and differential equations; and statistics comprising probability, random variables, standard distributions, joint distributions, sampling distributions, limit theorems, estimation and testing of hypotheses. The paper is weighted towards the statistics component.',
              ],
              [
                'Biotechnology',
                'Biology, chemistry, mathematics and physics at approximately the level of the first year of a bachelor’s degree, with biology carrying the largest share. The breadth across four subjects is what makes this paper distinctive.',
              ],
              [
                'Geology',
                'The planet earth, geomorphology, structural geology, palaeontology, stratigraphy, mineralogy, petrology, economic geology and applied geology.',
              ],
              [
                'Economics',
                'Microeconomics, macroeconomics, statistics for economics, Indian economy, and mathematics for economics. A paper aimed at graduates in economics and related quantitative disciplines.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The biotechnology paper deserves a specific note because its structure differs from the others: it draws on four subjects rather than one, which means a candidate with a narrow specialisation may be examined well outside it. Reading the weighting between the four before committing to that paper is worthwhile.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'IIT JAM exam pattern — the three sections, their marking rules and how the paper is scored.',
        lead: [
          'Three sections with three different marking rules. Only one of them can cost you marks.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm question counts and marks per question in the current information brochure.',
            head: ['Section', 'Question type', 'Negative marking'],
            rows: [
              ['Section A', 'Multiple choice — one correct option', 'Yes'],
              ['Section B', 'Multiple select — one or more correct options', 'No'],
              ['Section C', 'Numerical answer type — value entered', 'No'],
              ['Total', '100 marks', '3 hours, computer-based'],
            ],
          },
          {
            type: 'p',
            text: 'Section B is the one that catches candidates out. Multiple select questions require exactly the right set of options — selecting three of four correct options usually earns nothing — but they carry no penalty either. That combination means partial knowledge does not convert, yet there is no reason not to try: an attempt costs nothing and might be complete.',
          },
          {
            type: 'list',
            title: 'Attempt strategy by section',
            items: [
              { text: 'Section A — apply guessing discipline', note: 'the only section where a wrong answer costs you.' },
              { text: 'Section B — attempt everything, but be precise', note: 'no penalty, but the whole set must be right for the marks.' },
              { text: 'Section C — never leave a blank', note: 'no penalty, and an estimate may fall within the accepted range.' },
              { text: 'Reserve time at the end for Sections B and C blanks', note: 'filling them costs nothing and can only add.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current marks distribution',
            text: 'The number of questions in each section and the marks per question have been adjusted between cycles. Because they determine how much time each section deserves, read the current information brochure for your paper rather than assuming continuity.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'IIT JAM previous year papers — calibrating degree-level depth and practising the multiple select format.',
        lead: [
          'Past papers show the depth expected, which for a degree-level science paper is the hardest thing to judge from a syllabus.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'JAM papers are pitched at a level closer to a good degree examination than to a competitive-exam summary. Working past papers calibrates that quickly, and usually reveals that a candidate relying on exam-oriented compilations is under-prepared — the questions frequently require deriving or reasoning rather than recalling a stated result.',
          },
          {
            type: 'steps',
            title: 'How to work them',
            items: [
              { text: 'Work past papers in your own subject only.', note: 'The seven papers differ entirely.' },
              { text: 'Build a topic frequency table.', note: 'Degree syllabi are broad and the emphasis is uneven.' },
              { text: 'Practise Section B questions specifically.', note: 'The all-or-nothing format is unlike anything most degree courses test.' },
              { text: 'Practise Section C with attention to precision.', note: 'Units, decimal places and rounding all matter when you type a value.' },
              { text: 'Use your degree textbooks alongside.', note: 'They carry the derivations the questions build on.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'GATE exam guide', to: '/entrance-exams/pg-research/gate/' },
              { label: 'CSIR NET guide', to: '/government-exams/teaching-net/csir-net/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'IIT JAM mock tests — three-hour practice with section-specific marking and precision on numerical answers.',
        lead: [
          'Track your three sections separately. They reward different behaviour and their errors have different causes.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A single overall accuracy figure hides most of what a JAM mock can tell you. Section A errors are usually knowledge gaps or guessing losses; Section B errors are usually incomplete selections on questions you partly knew; Section C errors are frequently about precision — a right method and a wrong unit. Each needs a different fix.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Blanks in Sections B and C — always zero', note: 'no penalty applies, so a blank is a discarded chance.' },
              { text: 'Section B completeness', note: 'how often you selected some but not all correct options. A distinctive and fixable error.' },
              { text: 'Section C precision errors', note: 'units, rounding and decimal places, separate from conceptual errors.' },
              { text: 'Section A guessing outcomes', note: 'the only section where wrong answers cost you.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Study material by subject', to: '/study-material/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'IIT JAM preparation — degree-level revision, question-type practice and verifying programme eligibility.',
        lead: [
          'Revise your degree at examination depth, practise the three question types separately, and verify eligibility before you register.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'JAM is a degree-level science examination, which makes your own bachelor’s course material the natural foundation. The two things that need adding are the question formats — degree examinations rarely use multiple select or typed numerical answers — and the discipline of covering the whole published syllabus rather than only the parts your particular course emphasised.',
          },
          {
            type: 'steps',
            title: 'A six to nine month plan',
            items: [
              { text: 'First — verify eligibility for your target programmes.', note: 'Which paper they accept, and what bachelor’s subjects they require.' },
              { text: 'Week one — map the published syllabus against your degree course.', note: 'The gaps are where the risk sits.' },
              { text: 'Months one to five — revise the syllabus at degree depth.', note: 'From your own textbooks, with problems worked rather than read.' },
              { text: 'From month two — practise all three question types.', note: 'Especially Section B, whose all-or-nothing format is unfamiliar from degree study.' },
              { text: 'From month three — past papers in your subject.', note: 'For depth calibration and topic weighting.' },
              { text: 'From month five — full three-hour papers with correct section marking.', note: 'And zero blanks in Sections B and C.' },
              { text: 'Maintain a derivation sheet.', note: 'Written by hand, covering what you keep forgetting.' },
            ],
          },
          {
            type: 'list',
            title: 'Where JAM candidates lose marks',
            items: [
              { text: 'Leaving Section B and C questions blank', note: 'no penalty applies; a blank is a discarded chance.' },
              { text: 'Incomplete Section B selections', note: 'partial knowledge does not convert in an all-or-nothing format.' },
              { text: 'Precision errors in Section C', note: 'units and rounding, distinct from conceptual errors.' },
              { text: 'Relying on exam digests', note: 'the depth is closer to a degree examination than to a competitive summary.' },
              { text: 'Registering without checking programme eligibility', note: 'a strong rank in the wrong paper does not open the programme you want.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'IIT JAM study material — degree textbooks for the subject, with science notes for consolidation.',
        lead: [
          'Your own degree textbooks are the primary source. These notes help consolidate the fundamentals.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For a degree-level science paper, standard undergraduate textbooks in your subject are the correct source — they carry the derivations and worked problems that JAM questions build on, which competitive-exam compilations strip out. The notes below are useful for consolidating fundamentals, particularly where your own course covered a topic thinly.',
          },
          {
            type: 'links',
            title: 'Notes supporting the science papers',
            items: [
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'Environment notes', to: '/study-material/environment/' },
            ],
          },
          {
            type: 'list',
            title: 'How to study for a degree-level paper',
            items: [
              'Work from the published syllabus for your paper, not from your course syllabus.',
              'Solve problems before consulting solutions, always.',
              'Work derivations by hand rather than accepting stated results.',
              'Practise multiple select and numerical answer formats deliberately.',
              'Keep a hand-written derivation and formula sheet, revised weekly.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the IIT JAM exam pattern?',
        a: 'A three-hour computer-based paper of 100 marks in the chosen subject, divided into three sections. Section A has multiple choice questions with one correct option and negative marking; Section B has multiple select questions where more than one option may be correct, with no partial credit and no negative marking; and Section C has numerical answer type questions where a value is entered, again with no negative marking. Question counts and marks per question have been adjusted between cycles, so confirm them in the current brochure.',
      },
      {
        q: 'Which subjects can I take in IIT JAM?',
        a: 'Test papers are offered in biotechnology, chemistry, economics, geology, mathematics, mathematical statistics and physics. The biotechnology paper is distinctive in drawing on four subjects — biology, chemistry, mathematics and physics — rather than one, which means a candidate with a narrow specialisation may be examined well outside it, so the weighting between them is worth checking before committing to that paper.',
      },
      {
        q: 'How does negative marking work in IIT JAM?',
        a: 'It applies only to Section A, the multiple choice questions. Sections B and C carry no penalty, which means nothing in them should be left unanswered — an unattempted numerical question scores zero while an estimate has a genuine chance of falling within the accepted range. Section B is the one that catches candidates out: it requires exactly the correct set of options with no partial credit, so partial knowledge does not convert, but attempting still costs nothing.',
      },
      {
        q: 'How deep is the IIT JAM syllabus?',
        a: 'Degree level, and closer in depth to a good bachelor’s examination than to a competitive-exam summary. Questions frequently require deriving or reasoning rather than recalling a stated result, which is why standard undergraduate textbooks are the right primary source and exam-oriented compilations tend to leave candidates under-prepared. Working past papers early is the fastest way to calibrate how far into each topic you need to go.',
      },
      {
        q: 'Does a good JAM rank guarantee admission to my preferred programme?',
        a: 'No — admission depends on the test paper you took, your rank, and the minimum educational qualifications each institution specifies for each programme, including the subjects you studied at bachelor’s level. A strong rank in a paper that your target programme does not accept, or with a subject background that does not meet its requirement, will not open that programme. Verify both before registering rather than after the result.',
      },
    ],
  },
]

export default pgResearch
