/**
 * Medical entrance exams — /entrance-exams/medical/
 *
 * One undergraduate entrance and two postgraduate ones. They differ so much in
 * character that grouping them can mislead: NEET UG is a school-syllabus
 * accuracy test taken by millions, while NEET PG and INI-CET are clinical
 * examinations taken by doctors, with question formats and time rules that
 * have no counterpart in undergraduate testing.
 */

const medical = [
  /* ══════════════════════════════════════════════════════════════
     NEET UG
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'neet-ug',
    path: '/entrance-exams/medical/neet-ug/',
    name: 'NEET UG',
    fullName: 'National Eligibility cum Entrance Test (Undergraduate)',
    authority: 'National Testing Agency (NTA)',
    official: 'neet.nta.nic.in',
    seoTitle: 'NEET UG 2026: Pattern, Syllabus, NCERT Focus & Free Mocks',
    metaDescription:
      'NEET UG exam guide — 180-question pattern and marking, subject-wise syllabus, why NCERT matters most, counselling and free mock tests.',
    lead: [
      'NEET UG is the single entrance examination for undergraduate medical, dental, AYUSH and allied courses across India. One paper, one merit list, and admission through central and state counselling — there is no separate entrance for any recognised medical college.',
      'It is also, in a specific sense, the most concentrated examination in the country. The syllabus is fixed at class 11 and 12 NCERT content, the questions rarely go beyond it, and with millions of candidates competing for a limited number of seats, the difference between ranks is measured in single marks. That combination makes NEET a precision test rather than a difficulty test.',
    ],
    quickFacts: [
      ['Conducted by', 'National Testing Agency (NTA)'],
      ['Admits to', 'MBBS, BDS, AYUSH, veterinary and allied undergraduate programmes'],
      ['Level', 'Class 12 with physics, chemistry and biology'],
      ['Structure', '180 questions, 720 marks, 200 minutes'],
      ['Marking', 'Four marks for a correct answer, one deducted for a wrong one'],
      ['Primary source', 'NCERT class 11 and 12 textbooks'],
    ],
    overview: [
      {
        type: 'p',
        text: 'NEET UG replaced the patchwork of national and state medical entrances with a single examination. Its score determines admission to MBBS, BDS, AYUSH, veterinary and allied programmes across government and private institutions, through the all-India counselling conducted centrally and the state counselling conducted by each state for its own quota.',
      },
      {
        type: 'p',
        text: 'The paper covers physics, chemistry, botany and zoology, with forty-five questions in each. Biology therefore accounts for half the paper — ninety questions and three hundred and sixty marks — which is the single most important structural fact for a candidate planning their preparation.',
      },
      {
        type: 'list',
        title: 'What makes NEET distinctive',
        items: [
          { text: 'Biology is half the paper', note: 'ninety of a hundred and eighty questions, and the section where marks are most reliably earned.' },
          { text: 'NCERT is the effective syllabus', note: 'questions stay unusually close to the textbook, particularly in biology and inorganic chemistry.' },
          { text: 'Precision matters more than difficulty', note: 'with millions competing, a handful of marks separates thousands of ranks.' },
          { text: 'One examination, all colleges', note: 'no recognised medical college conducts its own entrance.' },
        ],
      },
      {
        type: 'note',
        title: 'Ranks are compressed at the top',
        text: 'Because so many candidates score in a narrow band, small differences in marks translate into large differences in rank. That is why accuracy discipline — avoiding careless errors on questions you knew — matters more in NEET than in almost any other examination, and why a single avoidable mistake can cost thousands of places.',
      },
    ],
    stages: [
      {
        name: 'NEET UG examination',
        mode: 'Pen and paper, 200 minutes',
        detail:
          '180 questions for 720 marks — physics (45), chemistry (45), botany (45) and zoology (45). Four marks for a correct answer, one deducted for a wrong one. Confirm the current section structure and any optional-question rules in the information bulletin.',
      },
      {
        name: 'Result and qualifying percentile',
        mode: 'Score-based',
        detail:
          'Candidates must reach a prescribed qualifying percentile, which varies by category, to be eligible for counselling. Ranks are then prepared from the marks obtained.',
      },
      {
        name: 'Counselling',
        mode: 'Central and state',
        detail:
          'Admission is made through the all-India quota counselling conducted centrally and the state counselling conducted by each state for its own quota, with candidates able to participate in both where eligible.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'NEET UG syllabus — physics, chemistry, botany and zoology drawn from the class 11 and 12 NCERT curriculum.',
        lead: [
          'The syllabus is the NCERT class 11 and 12 curriculum in three sciences. Treating that as literal rather than approximate is the single most useful decision a NEET candidate makes.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Biology — Botany and Zoology',
                'Diversity in the living world, structural organisation in plants and animals, cell structure and function, plant physiology, human physiology, reproduction in plants and humans, genetics and evolution, biology and human welfare covering health and disease and food production, biotechnology and its applications, and ecology and environment. Ninety questions across botany and zoology — half the paper, and the section most closely bound to the NCERT text.',
              ],
              [
                'Chemistry',
                'Physical chemistry covering basic concepts, structure of atom, states of matter, thermodynamics, equilibrium, redox reactions, solutions, electrochemistry, chemical kinetics and surface chemistry; inorganic chemistry covering periodic classification, chemical bonding, hydrogen, s-block and p-block elements, d- and f-block elements, coordination compounds and metallurgy; and organic chemistry covering basic principles, hydrocarbons, haloalkanes and haloarenes, alcohols phenols and ethers, aldehydes ketones and carboxylic acids, organic nitrogen compounds, biomolecules, polymers and chemistry in everyday life.',
              ],
              [
                'Physics',
                'Physical world and measurement, kinematics, laws of motion, work energy and power, motion of systems of particles and rigid bodies, gravitation, properties of bulk matter, thermodynamics, behaviour of perfect gases and kinetic theory, oscillations and waves, electrostatics, current electricity, magnetic effects of current and magnetism, electromagnetic induction and alternating currents, electromagnetic waves, optics, dual nature of matter and radiation, atoms and nuclei, and electronic devices.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The relationship between the syllabus and NCERT is not the same across the three subjects, and understanding that difference saves months. Biology questions frequently derive directly from NCERT lines, including from diagrams, tables and summary sections. Inorganic chemistry is similarly close. Physics and physical chemistry require problem-solving beyond what NCERT exercises provide, though the concepts remain confined to it.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'NEET UG exam pattern — the 180-question structure, subject weighting, marking scheme and qualifying percentile.',
        lead: [
          'Half the paper is biology. Four marks for right, one off for wrong. Those two facts should govern almost every preparation decision.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm question counts, section rules and timing against the current information bulletin.',
            head: ['Subject', 'Questions', 'Marks', 'Share of paper'],
            rows: [
              ['Physics', '45', '180', 'A quarter'],
              ['Chemistry', '45', '180', 'A quarter'],
              ['Botany', '45', '180', 'A quarter'],
              ['Zoology', '45', '180', 'A quarter'],
              ['Total', '180', '720', '200 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'The four-to-one marking ratio means a blind guess among four options breaks even, a guess narrowed to three is positive, and a guess narrowed to two is clearly worth taking. But that arithmetic applies to a single question in isolation, and NEET is not played that way — with ranks compressed as tightly as they are, the marginal value of avoiding one careless error usually exceeds the marginal value of one extra speculative attempt.',
          },
          {
            type: 'list',
            title: 'What the structure implies',
            items: [
              { text: 'Biology carries 360 of 720 marks', note: 'and it is the most reliably scoreable half, because it rewards thorough NCERT study rather than problem-solving ability.' },
              { text: 'Physics is the differentiator', note: 'the section where scores vary most between candidates, and the one that most needs problem practice rather than reading.' },
              { text: 'Accuracy beats coverage', note: 'given rank compression, an avoidable error costs more than an unattempted hard question.' },
              { text: 'A qualifying percentile applies', note: 'varying by category, and must be met to enter counselling.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current section rules',
            text: 'NEET has at times used a structure with optional questions within each subject, and has at other times returned to a straightforward format. Because the rules affect how you allocate time in the hall, read the section structure in the current information bulletin rather than assuming continuity.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'NEET UG previous year papers — mining past papers for NCERT-linked biology questions and building physics problem practice.',
        lead: [
          'Past NEET papers demonstrate something no syllabus can: exactly how closely biology questions track the NCERT text.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Take a year of NEET biology questions and trace each one back to its NCERT source. A striking proportion map to a specific line, table, diagram caption or summary point. That exercise, done once, changes how a candidate reads the textbook for the rest of their preparation — from skimming for concepts to reading for detail, which is what the examination actually rewards.',
          },
          {
            type: 'steps',
            title: 'How to use past papers by subject',
            items: [
              { text: 'Biology — trace questions back to the NCERT line.', note: 'The single most instructive exercise in NEET preparation.' },
              { text: 'Inorganic chemistry — do the same.', note: 'It tracks NCERT almost as closely as biology does.' },
              { text: 'Physics — build a chapter frequency table and practise problems.', note: 'Here NCERT establishes the concept but does not supply enough problems.' },
              { text: 'Organic chemistry — collect reaction and mechanism patterns.', note: 'The recurring transformations are a finite set worth consolidating.' },
              { text: 'Log every careless error separately.', note: 'In a rank-compressed examination these cost more than gaps in knowledge.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'Biology study material', to: '/study-material/biology/' },
              { label: 'Physics study material', to: '/study-material/physics/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'NEET UG mock tests — full 180-question practice with the correct marking, and analysis focused on accuracy rather than coverage.',
        lead: [
          'In an examination where ranks are compressed, the number to obsess over is not your score but your careless error count.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Most NEET candidates lose more marks to errors on questions they knew than to questions they did not know. Misreading "not" in a statement, marking the wrong bubble, computing correctly and selecting the adjacent option — these are the losses that cost ranks, and they are the ones a mock analysis should hunt for specifically rather than folding into a general accuracy figure.',
          },
          {
            type: 'list',
            title: 'What to separate in your analysis',
            items: [
              { text: 'Errors on questions you knew', note: 'careless losses. The most fixable and most costly category.' },
              { text: 'Errors on questions you half-knew', note: 'genuine gaps, requiring revision of that topic.' },
              { text: 'Questions left unattempted', note: 'a strategic decision that may or may not have been right given the marking.' },
              { text: 'Time per subject', note: 'biology should be fastest, physics slowest. If not, something is misallocated.' },
            ],
          },
          {
            type: 'p',
            text: 'Practise on paper with an answer sheet, since NEET is a pen-and-paper examination and the mechanics of bubbling under time pressure are part of what you are training. Candidates who practise only on screen sometimes lose marks to the answer sheet itself.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'JEE and NEET mock tests', to: '/mock-tests/free/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'NEET UG preparation strategy — NCERT-first study, physics problem practice and the accuracy discipline the ranking demands.',
        lead: [
          'Read NCERT until you know it, then practise physics until you are fast, then work on not making mistakes. In that order.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'NEET preparation advice converges on one point more than any other: read NCERT properly. Not as a starting text before moving to something harder, but as the actual object of study — including the diagrams, tables, examples and summary boxes that candidates routinely skip and that questions routinely come from. In biology especially, thorough NCERT knowledge is close to the whole examination.',
          },
          {
            type: 'steps',
            title: 'A two-year plan, compressible to one',
            items: [
              { text: 'Class 11 — build biology and chemistry properly from NCERT.', note: 'Reading for detail rather than for gist. Diagrams and tables included.' },
              { text: 'Class 11 — build physics through problems.', note: 'Mechanics first. Physics is the section that most needs practice rather than reading.' },
              { text: 'Throughout — revise biology on a cycle.', note: 'Ninety questions of largely factual content requires repeated revision, not a single thorough reading.' },
              { text: 'Class 12 — the new syllabus, with class 11 revision continuing.', note: 'Class 11 carries roughly half the paper and decays if left alone.' },
              { text: 'From the start — maintain an error log split by cause.', note: 'Careless errors tracked separately from knowledge gaps.' },
              { text: 'Final year — full 200-minute mocks weekly.', note: 'On paper, with an answer sheet, with the correct marking.' },
              { text: 'Final two months — revision and accuracy work only.', note: 'No new material. Consolidation and error elimination.' },
            ],
          },
          {
            type: 'list',
            title: 'The characteristic mistakes',
            items: [
              { text: 'Treating NCERT as a beginner’s book', note: 'in biology and inorganic chemistry it is very nearly the whole examination.' },
              { text: 'Reading biology once', note: 'a largely factual half of the paper needs repeated revision cycles.' },
              { text: 'Under-practising physics', note: 'the section where candidate scores vary most, and the one that needs problems rather than reading.' },
              { text: 'Ignoring careless errors', note: 'in a rank-compressed examination they cost more than gaps in knowledge.' },
              { text: 'Practising only on screen', note: 'NEET is a pen-and-paper examination, and the answer sheet is part of the task.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'NEET UG study material — biology, chemistry and physics notes built around the NCERT syllabus.',
        lead: [
          'NCERT is the primary source. These notes consolidate it and add the problem practice physics requires.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Use the notes below to consolidate and revise rather than to replace NCERT. For biology in particular, the textbook itself should remain your main reading, with notes serving to structure revision cycles. Physics is the exception, where NCERT establishes the concepts but a good problem set is needed to build the capability the paper tests.',
          },
          {
            type: 'links',
            title: 'Subject notes for NEET UG',
            items: [
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Science notes', to: '/study-material/science/' },
            ],
          },
          {
            type: 'list',
            title: 'How to study for a precision examination',
            items: [
              'Read NCERT biology for detail — diagrams, tables, captions and summaries included.',
              'Revise biology on a fixed cycle rather than reading it once thoroughly.',
              'Solve physics problems daily; reading solved physics builds recognition, not capability.',
              'Keep an error log that separates careless mistakes from knowledge gaps.',
              'Practise on paper with an answer sheet, at the real 200-minute length.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the NEET UG exam pattern?',
        a: 'A pen-and-paper examination of 180 questions for 720 marks in 200 minutes, covering physics (45), chemistry (45), botany (45) and zoology (45). Four marks are awarded for a correct answer and one is deducted for a wrong one. Because NEET has at times used a structure with optional questions within each subject, confirm the current section rules in the information bulletin before the exam.',
      },
      {
        q: 'Why is NCERT so important for NEET?',
        a: 'Because the questions stay unusually close to it, particularly in biology and inorganic chemistry, where a striking proportion trace back to a specific line, table, diagram caption or summary point in the textbook. Biology is half the paper, so thorough NCERT knowledge is close to being half the examination on its own. Physics and physical chemistry are the exception: NCERT establishes the concepts but does not supply enough problems to build the capability those sections test.',
      },
      {
        q: 'Which subject matters most in NEET UG?',
        a: 'Biology by weight — ninety of the hundred and eighty questions, and 360 of the 720 marks — and it is also the most reliably scoreable, since it rewards thorough textbook study rather than problem-solving ability. Physics, however, is usually the differentiator: it is the section where candidate scores vary most, and where practice rather than reading determines the outcome. A strong NEET candidate is thorough in biology and competent in physics.',
      },
      {
        q: 'How much does one wrong answer cost in NEET?',
        a: 'Five marks in effect — four not gained and one deducted. In arithmetic terms a blind guess among four options breaks even and a guess narrowed to two is clearly worth taking. But NEET ranks are compressed so tightly that thousands of candidates sit within a few marks of one another, which means avoiding a careless error on a question you knew is usually worth more than an extra speculative attempt on one you did not.',
      },
      {
        q: 'Is NEET the only entrance for medical admission in India?',
        a: 'Yes, for recognised undergraduate medical, dental, AYUSH, veterinary and allied programmes. No recognised medical college conducts its own separate entrance. Admission is made from the NEET merit list through the all-India quota counselling conducted centrally and the state counselling conducted by each state for its own quota, subject to meeting the qualifying percentile for your category.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     NEET PG
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'neet-pg',
    path: '/entrance-exams/medical/neet-pg/',
    name: 'NEET PG',
    fullName: 'National Eligibility cum Entrance Test (Postgraduate)',
    authority: 'National Board of Examinations in Medical Sciences (NBEMS)',
    official: 'nbe.edu.in',
    seoTitle: 'NEET PG 2026: Pattern, Clinical Subjects & Preparation Guide',
    metaDescription:
      'NEET PG exam guide — 200-question computer-based pattern, subject weighting, clinical question style, counselling and preparation strategy.',
    lead: [
      'NEET PG is the entrance examination for MD, MS and postgraduate diploma programmes across India. It is taken by doctors who have completed their MBBS and internship, and it decides which speciality and which institution they enter — a decision that shapes an entire career.',
      'It is a fundamentally different examination from NEET UG, and not only in content. The questions are clinical rather than factual, often presenting a case and asking for the next step. And the computer-based format has at times been delivered in time-bound sections that cannot be revisited, which removes the ability to come back to a question later.',
    ],
    quickFacts: [
      ['Conducted by', 'National Board of Examinations in Medical Sciences (NBEMS)'],
      ['Admits to', 'MD, MS and postgraduate diploma programmes'],
      ['Eligibility', 'MBBS with completed or completing internship, and registration'],
      ['Structure', '200 multiple-choice questions, 800 marks, about 3 hours 30 minutes'],
      ['Marking', 'Four marks for a correct answer, one deducted for a wrong one'],
      ['Question style', 'Clinical and applied rather than factual recall'],
    ],
    overview: [
      {
        type: 'p',
        text: 'NEET PG determines admission to postgraduate medical programmes across government and private institutions, through the all-India quota counselling and state counselling processes. Its score decides both speciality and institution, and because the number of seats in sought-after specialities is small relative to the field, the competition at the top is intense.',
      },
      {
        type: 'p',
        text: 'The paper draws on the whole MBBS curriculum — pre-clinical, para-clinical and clinical subjects — but weights the clinical subjects most heavily. Questions are largely applied: a clinical vignette followed by a question about diagnosis, investigation or management, rather than a request to recall a fact.',
      },
      {
        type: 'list',
        title: 'How it differs from NEET UG',
        items: [
          { text: 'Clinical rather than factual', note: 'questions present cases and ask what to do, not what something is called.' },
          { text: 'The whole MBBS curriculum', note: 'nineteen subjects across pre-clinical, para-clinical and clinical years.' },
          { text: 'Computer-based', note: 'and at times delivered in time-bound sections that cannot be revisited once left.' },
          { text: 'Taken alongside clinical work', note: 'most candidates prepare during internship or while working, which constrains study time severely.' },
        ],
      },
      {
        type: 'note',
        title: 'Check whether sections are time-bound',
        text: 'NEET PG has been delivered with time-bound sections in which a candidate cannot return to an earlier section once its time has elapsed. That removes the standard strategy of flagging difficult questions for a second pass, and it changes how you should attempt the paper. Whether it applies to your cycle is stated in the information bulletin.',
      },
    ],
    stages: [
      {
        name: 'NEET PG examination',
        mode: 'Computer-based, about 3 hours 30 minutes',
        detail:
          '200 multiple-choice questions for 800 marks, drawn from the full MBBS curriculum with clinical subjects most heavily weighted. Four marks for a correct answer, one deducted for a wrong one.',
      },
      {
        name: 'Result and percentile',
        mode: 'Score-based',
        detail:
          'Candidates must reach the prescribed qualifying percentile for their category to be eligible for counselling. Ranks are prepared from the marks obtained.',
      },
      {
        name: 'Counselling',
        mode: 'Central and state',
        detail:
          'Admission is made through the all-India quota counselling conducted centrally and the state counselling conducted by each state, with seats allotted by rank, category and choice.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'NEET PG syllabus — the pre-clinical, para-clinical and clinical subjects of the MBBS curriculum, with their relative weighting.',
        lead: [
          'The syllabus is the whole MBBS course. What matters for planning is not its extent but its weighting, which is strongly tilted towards the clinical subjects.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Pre-clinical subjects',
                'Anatomy, physiology and biochemistry. Together a modest share of the paper, but foundational — clinical questions frequently rest on physiological or anatomical reasoning even when they do not ask about it directly.',
              ],
              [
                'Para-clinical subjects',
                'Pathology, pharmacology, microbiology and forensic medicine. A substantial share, and among the highest-yield areas relative to the study time required. Pathology and pharmacology in particular reward systematic revision.',
              ],
              [
                'Clinical subjects — the major share',
                'Medicine, surgery, obstetrics and gynaecology, and paediatrics carry the largest weighting. Questions are typically case-based, asking for the most likely diagnosis, the next investigation, or the appropriate management step.',
              ],
              [
                'Other clinical subjects',
                'Ophthalmology, ENT, dermatology, psychiatry, orthopaedics, anaesthesia, radiology and community medicine. Individually smaller, but collectively significant — and several of them are short enough to cover thoroughly, which makes them efficient marks.',
              ],
              [
                'Community medicine and recent guidelines',
                'National health programmes, biostatistics, epidemiology and public health, alongside awareness of updated clinical guidelines. This area rewards being current rather than being thorough.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The subjects most often under-prepared are the short clinical ones — ophthalmology, ENT, dermatology, psychiatry, forensic medicine. Each is small enough to be covered properly in a couple of weeks, and collectively they account for a meaningful block of the paper. Candidates who concentrate exclusively on medicine and surgery leave those marks available to others.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'NEET PG exam pattern — the 200-question structure, marking, time-bound sections and how counselling follows.',
        lead: [
          'Two hundred questions, eight hundred marks, and a format that may not let you go back. Read the delivery rules before you plan your attempt.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm question count, duration, section rules and marking against the current information bulletin.',
            head: ['Element', 'Detail', 'Notes'],
            rows: [
              ['Questions', '200 multiple-choice', 'Drawn from the full MBBS curriculum'],
              ['Marks', '800', 'Four per correct answer'],
              ['Negative marking', 'One mark per wrong answer', 'A wrong answer costs five marks relative to a correct one'],
              ['Duration', 'About 3 hours 30 minutes', 'Just over a minute per question'],
              ['Delivery', 'Computer-based', 'Has at times used time-bound sections that cannot be revisited'],
            ],
          },
          {
            type: 'p',
            text: 'The time-bound section format, where used, is the detail that most changes attempt strategy. Ordinarily a candidate flags uncertain questions and returns to them; under time-bound sections that option disappears, and every question must be settled when you meet it. That rewards decisiveness and punishes the habit of deferring difficult questions.',
          },
          {
            type: 'list',
            title: 'Attempting the paper',
            items: [
              { text: 'Settle each question when you meet it', note: 'if sections are time-bound, there is no second pass to rely on.' },
              { text: 'A wrong answer costs five marks relative to a right one', note: 'so a guess needs genuine narrowing to be worthwhile.' },
              { text: 'Clinical vignettes reward reading the question fully', note: 'the distinguishing detail is often in the last line.' },
              { text: 'Pace at just over a minute per question', note: 'which is little time for a case-based question, so recognition speed matters.' },
            ],
          },
          {
            type: 'note',
            title: 'Counselling is a separate process worth understanding early',
            text: 'Seat allotment runs through multiple rounds of all-India and state counselling with their own registration windows, choice-filling rules and forfeiture conditions. Candidates lose seats every cycle to procedural errors rather than to marks, and the rules are worth learning before the result rather than after it.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'NEET PG previous year papers — learning the clinical question style and identifying high-yield topics across subjects.',
        lead: [
          'Past papers teach the question style, which for a clinical examination is at least as valuable as the content they test.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A NEET PG question is usually a short clinical scenario with one distinguishing feature buried in it, followed by a question about the next step. Learning to spot the distinguishing feature quickly — the age, the specific finding, the timeline — is a trainable skill, and past papers are where it is trained. Content revision alone does not build it.',
          },
          {
            type: 'steps',
            title: 'How to work past papers',
            items: [
              { text: 'For each question, identify the distinguishing detail before answering.', note: 'Naming it explicitly builds the pattern recognition the examination rewards.' },
              { text: 'Build a high-yield topic list across several years.', note: 'The recurring topics in each subject are a small subset of the curriculum.' },
              { text: 'Track your accuracy by subject.', note: 'It reveals which of the nineteen subjects are actually costing you marks.' },
              { text: 'Practise under the current delivery format.', note: 'If sections are time-bound, practise without the ability to go back.' },
              { text: 'Note questions where the answer has changed.', note: 'Guidelines are updated, and older answer keys can mislead.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'INI-CET guide', to: '/entrance-exams/medical/ini-cet/' },
              { label: 'NEET UG guide', to: '/entrance-exams/medical/neet-ug/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'NEET PG mock tests — full-length computer-based practice with clinical questions and the current section rules.',
        lead: [
          'Practise at full length in the delivery format your cycle uses. Three and a half hours of clinical reasoning is a stamina task in itself.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Most NEET PG candidates are preparing while working clinically, which means study happens in fragments. That makes full-length practice unusually important and unusually hard to schedule — but sitting two hundred case-based questions in one three-and-a-half-hour block is a different experience from answering fifty at a time, and only the former resembles the examination.',
          },
          {
            type: 'list',
            title: 'What to analyse',
            items: [
              { text: 'Accuracy by subject', note: 'across nineteen subjects, a general score hides which ones are actually weak.' },
              { text: 'Errors from misreading the vignette', note: 'distinct from errors of knowledge, and fixed by reading discipline rather than revision.' },
              { text: 'Accuracy in the final hour', note: 'a decline points to stamina, which full-length practice fixes.' },
              { text: 'Guessing outcomes', note: 'with a five-mark swing per question, loose guessing is expensive.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'NEET PG preparation — building clinical reasoning, covering the short subjects and studying alongside internship or work.',
        lead: [
          'The hard part of NEET PG preparation is not the syllabus. It is finding consistent study time while working clinically.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Almost every NEET PG candidate is preparing during internship, residency or clinical practice, with study time that is fragmented and unpredictable. That reality should shape the plan: short, frequent, high-yield sessions with systematic revision beat the long uninterrupted blocks that most study advice assumes and that very few doctors actually have.',
          },
          {
            type: 'steps',
            title: 'A plan that fits clinical work',
            items: [
              { text: 'Start with the para-clinical subjects.', note: 'Pathology, pharmacology and microbiology are high-yield relative to the time they take and form the basis of many clinical questions.' },
              { text: 'Cover the short clinical subjects deliberately.', note: 'Ophthalmology, ENT, dermatology, psychiatry, forensic medicine — each coverable in a couple of weeks and routinely neglected.' },
              { text: 'Work the major clinical subjects continuously.', note: 'Medicine, surgery, obstetrics and gynaecology, paediatrics. These carry the largest weight and take the longest.' },
              { text: 'Use question practice as the primary study method.', note: 'For an applied examination, doing questions teaches more per hour than reading does.' },
              { text: 'Build a revision cycle you can actually sustain.', note: 'Fragmented time makes spaced revision essential rather than optional.' },
              { text: 'Keep current with guideline changes.', note: 'Management answers change, and older material can teach the wrong answer.' },
              { text: 'Do full-length mocks despite the difficulty of scheduling them.', note: 'Three and a half hours of continuous clinical reasoning is its own skill.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates candidates who convert',
            items: [
              { text: 'Question practice over passive reading', note: 'an applied examination rewards applied preparation.' },
              { text: 'Covering the short subjects', note: 'collectively significant and individually quick.' },
              { text: 'Sustained revision cycles', note: 'the curriculum is too large to hold from a single pass.' },
              { text: 'Reading vignettes fully', note: 'the distinguishing detail is frequently in the final line.' },
              { text: 'Understanding counselling before the result', note: 'seats are lost to procedural errors every cycle.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'NEET PG study material — guidance on using standard clinical texts, question banks and revision resources alongside clinical work.',
        lead: [
          'For a postgraduate clinical examination, question banks and standard texts do the work. General study notes have a limited role.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'NEET PG preparation runs on medical resources rather than general study material — standard textbooks in each subject, a good question bank worked systematically, and updated guideline sources. The most valuable habit is using questions as the primary study method rather than as a test of study already done, because an applied examination is best learned by application.',
          },
          {
            type: 'links',
            title: 'Related pages on this site',
            items: [
              { label: 'NEET UG guide', to: '/entrance-exams/medical/neet-ug/' },
              { label: 'INI-CET guide', to: '/entrance-exams/medical/ini-cet/' },
              { label: 'Biology study material', to: '/study-material/biology/' },
              { label: 'All entrance exams', to: '/entrance-exams/' },
            ],
          },
          {
            type: 'list',
            title: 'How to structure resources',
            items: [
              'One standard text per subject, chosen and stuck with rather than accumulated.',
              'A question bank worked systematically, with wrong answers logged by subject and cause.',
              'A revision schedule built for fragmented time — short, frequent, spaced.',
              'A source for updated clinical guidelines, checked periodically.',
              'Full-length mocks scheduled deliberately, since they will not happen otherwise.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the NEET PG exam pattern?',
        a: 'A computer-based examination of 200 multiple-choice questions for 800 marks over about three and a half hours, drawn from the full MBBS curriculum with clinical subjects most heavily weighted. Four marks are awarded for a correct answer and one deducted for a wrong one. The examination has at times been delivered in time-bound sections that cannot be revisited once left, so confirm the delivery format for your cycle in the information bulletin.',
      },
      {
        q: 'How is NEET PG different from NEET UG?',
        a: 'Almost entirely. NEET UG tests class 11 and 12 science factually and stays close to NCERT; NEET PG tests the whole MBBS curriculum through clinical vignettes that ask what to do next rather than what something is called. NEET PG is computer-based rather than pen-and-paper, may use time-bound sections that remove the ability to return to a question, and is taken by doctors preparing alongside clinical work rather than by students preparing full time.',
      },
      {
        q: 'Which subjects carry the most weight in NEET PG?',
        a: 'The major clinical subjects — medicine, surgery, obstetrics and gynaecology, and paediatrics — carry the largest share, followed by the para-clinical subjects of pathology, pharmacology and microbiology, which are high-yield relative to the study time they require. The most commonly under-prepared areas are the short clinical subjects such as ophthalmology, ENT, dermatology, psychiatry and forensic medicine: each is coverable in a couple of weeks and collectively they account for a meaningful block of the paper.',
      },
      {
        q: 'What are time-bound sections in NEET PG?',
        a: 'A delivery format in which the paper is divided into sections with their own time limits, and once a section’s time has elapsed you cannot return to it. This removes the standard strategy of flagging uncertain questions for a second pass, so every question must be settled when you meet it. Where it applies, it rewards decisiveness and penalises the habit of deferring difficult questions — and it should be practised in mocks rather than met for the first time in the exam.',
      },
      {
        q: 'How should I prepare for NEET PG while working?',
        a: 'By accepting that study time will be fragmented and building a plan around that rather than against it. Short, frequent, high-yield sessions with a sustained spaced-revision cycle work better than the long uninterrupted blocks most study advice assumes. Use question practice as the primary method rather than as a test of reading already done, since an applied examination is best learned by application, and schedule full-length mocks deliberately — three and a half hours of continuous clinical reasoning is a distinct skill that will not develop by itself.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     INI-CET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ini-cet',
    path: '/entrance-exams/medical/ini-cet/',
    name: 'INI-CET',
    fullName: 'Institutes of National Importance Combined Entrance Test',
    authority: 'All India Institute of Medical Sciences, New Delhi',
    official: 'aiimsexams.ac.in',
    seoTitle: 'INI-CET 2026: Pattern, Institutes, Marking & Preparation',
    metaDescription:
      'INI-CET exam guide — the combined entrance for AIIMS, PGIMER, JIPMER and NIMHANS, pattern and marking, twice-yearly cycles and strategy.',
    lead: [
      'INI-CET is the combined entrance test for postgraduate seats at the Institutes of National Importance — the AIIMS network, PGIMER Chandigarh, JIPMER Puducherry, NIMHANS Bengaluru and SCTIMST Thiruvananthapuram. It is a separate examination from NEET PG, held twice a year, for a small number of highly sought seats.',
      'Its reputation is for being harder than NEET PG, and the reputation is deserved but often misdescribed. The syllabus is the same MBBS curriculum; what differs is the depth and the framing. INI-CET questions probe further into detail and reasoning, and its marking scheme deducts a third of a mark rather than a full one, which changes the guessing calculus in a direction most candidates do not adjust for.',
    ],
    quickFacts: [
      ['Conducted by', 'AIIMS New Delhi'],
      ['Admits to', 'AIIMS institutes, PGIMER, JIPMER, NIMHANS and SCTIMST'],
      ['Eligibility', 'MBBS with completed or completing internship, and registration'],
      ['Structure', '200 multiple-choice questions in about 3 hours, computer-based'],
      ['Marking', 'One mark for a correct answer, one third deducted for a wrong one'],
      ['Frequency', 'Twice a year, in separate January and July admission sessions'],
    ],
    overview: [
      {
        type: 'p',
        text: 'INI-CET selects for postgraduate programmes at institutions designated as Institutes of National Importance. The seats are few and the institutions among the most sought after in Indian medicine, which produces a candidate field concentrated at the top end of the NEET PG distribution.',
      },
      {
        type: 'p',
        text: 'It is held twice a year, for the January and July admission sessions, which means a candidate has more opportunities within a year than NEET PG offers — though each cycle has its own registration, counselling and seat-acceptance process, and the two sessions do not pool seats.',
      },
      {
        type: 'list',
        title: 'How INI-CET differs from NEET PG',
        items: [
          { text: 'Depth of questioning', note: 'the same curriculum probed further, with more emphasis on detail and reasoning than on recognition.' },
          { text: 'A gentler deduction', note: 'one third of a mark rather than one full mark, which makes informed guessing more worthwhile.' },
          { text: 'Twice yearly', note: 'two cycles a year, each with its own counselling.' },
          { text: 'A smaller, stronger field', note: 'few seats, and a candidate pool concentrated at the top.' },
        ],
      },
      {
        type: 'note',
        title: 'The marking scheme is the most commonly mishandled detail',
        text: 'INI-CET awards one mark for a correct answer and deducts one third for a wrong one. That is markedly gentler than NEET PG’s four-and-minus-one. A candidate who carries NEET PG guessing discipline into INI-CET will leave marks on the table, because here a guess narrowed to three options is already worth taking.',
      },
    ],
    stages: [
      {
        name: 'INI-CET examination',
        mode: 'Computer-based, about 3 hours',
        detail:
          '200 multiple-choice questions drawn from the MBBS curriculum, with one mark for a correct answer and one third deducted for a wrong one. Held separately for the January and July admission sessions.',
      },
      {
        name: 'Result and merit',
        mode: 'Score-based',
        detail:
          'A merit list is prepared for each session, from which candidates are called for counselling according to rank and category.',
      },
      {
        name: 'Counselling and seat allotment',
        mode: 'Institute-conducted',
        detail:
          'Counselling is conducted for the participating institutes with its own rounds, choice-filling and seat-acceptance rules, separate from the NEET PG counselling process.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'INI-CET syllabus — the MBBS curriculum examined at greater depth, with emphasis on reasoning and detail.',
        lead: [
          'The syllabus is the same MBBS curriculum NEET PG covers. What differs is how far into each topic the questions go.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Pre-clinical subjects',
                'Anatomy, physiology and biochemistry. INI-CET probes these further than NEET PG typically does, with questions that require reasoning from first principles rather than recall of a named fact.',
              ],
              [
                'Para-clinical subjects',
                'Pathology, pharmacology, microbiology and forensic medicine. Well represented, and rewarding thorough rather than summary preparation — mechanisms and exceptions appear, not only classifications.',
              ],
              [
                'Clinical subjects',
                'Medicine, surgery, obstetrics and gynaecology, paediatrics, and the shorter clinical specialities. Questions frequently turn on a detail of presentation or management that distinguishes between two plausible answers.',
              ],
              [
                'Community medicine and biostatistics',
                'Public health, epidemiology, national health programmes and biostatistics, which appear more consistently here than candidates expect.',
              ],
              [
                'Recent advances and guidelines',
                'INI-CET has a reputation for including current developments and updated guidance, which rewards candidates who read beyond a fixed set of preparation notes.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The practical difference from NEET PG preparation is not additional subjects but additional depth in the same ones. A candidate whose preparation consists of high-yield summaries will find NEET PG questions largely answerable and INI-CET questions frequently just beyond reach, because the distinguishing detail is precisely what a summary omits.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'INI-CET exam pattern — the 200-question structure, the one-third deduction and how it changes attempt strategy.',
        lead: [
          'One mark for right, a third off for wrong. That is a materially different bargain from NEET PG, and it should change how you attempt the paper.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Confirm question count, duration and marking against the current prospectus.',
            head: ['Element', 'Detail', 'Notes'],
            rows: [
              ['Questions', '200 multiple-choice', 'From the MBBS curriculum, at greater depth'],
              ['Marking', '+1 for correct', 'Simpler scale than NEET PG'],
              ['Negative marking', '−1/3 for wrong', 'Markedly gentler than NEET PG’s −1 against +4'],
              ['Duration', 'About 3 hours', 'Just under a minute per question'],
              ['Frequency', 'Twice a year', 'January and July admission sessions'],
            ],
          },
          {
            type: 'p',
            text: 'Work the arithmetic. With a one-third deduction against a full mark for a correct answer, a blind guess among four options has a positive expected value, and a guess narrowed to three or two is clearly worth taking. Compare that with NEET PG, where a wrong answer costs five marks relative to a right one and a blind guess is close to neutral. Carrying the NEET PG instinct into INI-CET means leaving marks unclaimed on every uncertain question.',
          },
          {
            type: 'list',
            title: 'What follows for attempt strategy',
            items: [
              { text: 'Attempt widely', note: 'the marking scheme rewards it. Leaving many blanks is the characteristic INI-CET error.' },
              { text: 'Pace at just under a minute per question', note: 'tight for questions probing this deep, so recognition speed matters.' },
              { text: 'Expect to be uncertain more often', note: 'the depth means more questions sit at the edge of your knowledge. Answer them anyway.' },
              { text: 'Two cycles a year', note: 'which makes an early attempt useful calibration in a way an annual examination cannot be.' },
            ],
          },
          {
            type: 'note',
            title: 'Counselling is separate from NEET PG',
            text: 'INI-CET has its own counselling process for the participating institutes, with its own rounds, choice-filling and seat-acceptance conditions, running independently of the NEET PG counselling. Candidates pursuing both need to track two sets of dates and rules, and accepting a seat in one process can carry consequences in the other.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'INI-CET previous year papers — calibrating the depth of questioning and identifying the recurring detail-level topics.',
        lead: [
          'Past papers are how you find out how much deeper INI-CET goes, which is difficult to convey any other way.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The difference between NEET PG and INI-CET is best understood by sitting a past paper of each. The topics are the same; the questions ask about the exception rather than the rule, the mechanism rather than the name, the detail that distinguishes two similar presentations. That calibration, once experienced, tells you whether your preparation is deep enough.',
          },
          {
            type: 'steps',
            title: 'How to work them',
            items: [
              { text: 'Sit a past INI-CET paper early in your preparation.', note: 'It calibrates the depth required more effectively than any description.' },
              { text: 'For each question you missed, ask whether a summary would have covered it.', note: 'If not, your source material needs upgrading rather than your revision schedule.' },
              { text: 'Practise with the correct one-third deduction.', note: 'And track whether your guessing gained or lost marks overall.' },
              { text: 'Note the recent-advances questions.', note: 'They recur, and they reward reading beyond fixed preparation notes.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'NEET PG guide', to: '/entrance-exams/medical/neet-pg/' },
              { label: 'NEET UG guide', to: '/entrance-exams/medical/neet-ug/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'INI-CET mock tests — full-length practice with the one-third deduction and attempt-rate analysis.',
        lead: [
          'The number worth tracking in an INI-CET mock is your attempt rate. Under this marking scheme it should be high.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Candidates coming from NEET PG preparation habitually leave twenty or thirty INI-CET questions unattempted out of caution that the marking scheme does not justify. Measuring your attempt rate explicitly, and calculating what your unattempted questions would have been worth at your accuracy rate, usually settles the argument quickly.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Attempt rate', note: 'and the expected value of the questions you left. Under a one-third deduction it is usually positive.' },
              { text: 'Net outcome of guessed questions', note: 'guessing should be gaining you marks in this examination.' },
              { text: 'Accuracy by subject', note: 'to find which subjects your preparation depth does not reach.' },
              { text: 'Whether errors reflect depth or carelessness', note: 'depth errors need better sources; careless ones need reading discipline.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Topic and sectional practice', to: '/practice/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'INI-CET preparation — building depth beyond high-yield summaries, keeping current, and using two cycles a year.',
        lead: [
          'Prepare deeper rather than broader. INI-CET asks the same topics as NEET PG, one layer further in.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The single most useful adjustment for INI-CET is to upgrade sources rather than to add subjects. A preparation built on high-yield summaries will cover the topics INI-CET examines and miss the specific details it asks about — the exception to the rule, the mechanism behind the classification, the finding that distinguishes two similar presentations. Standard textbooks supply those; summaries by design do not.',
          },
          {
            type: 'steps',
            title: 'A plan for a deeper examination',
            items: [
              { text: 'Sit a past INI-CET paper early.', note: 'To calibrate the depth required before you commit to a preparation style.' },
              { text: 'Prepare with NEET PG, then add depth.', note: 'The syllabus is shared, so most preparation serves both. The addition is depth, not breadth.' },
              { text: 'Use standard texts for the subjects you are strongest in.', note: 'Those are the ones where an extra layer will actually convert into marks.' },
              { text: 'Follow recent advances and guideline updates.', note: 'A consistent seam in INI-CET papers, and one summaries lag behind on.' },
              { text: 'Recalibrate your guessing threshold.', note: 'A one-third deduction rewards attempting far more widely than NEET PG does.' },
              { text: 'Use both cycles.', note: 'Two sittings a year makes an early attempt genuine calibration rather than a wasted year.' },
              { text: 'Track both counselling processes separately.', note: 'INI-CET and NEET PG counselling run independently, with their own rules and consequences.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates candidates who convert',
            items: [
              { text: 'Depth of source material', note: 'textbooks over summaries, at least in your stronger subjects.' },
              { text: 'A high attempt rate', note: 'justified by the marking scheme, and routinely too low among NEET PG-trained candidates.' },
              { text: 'Currency', note: 'recent advances appear consistently.' },
              { text: 'Using both annual cycles', note: 'the calibration value of an early attempt is real.' },
              { text: 'Understanding the counselling rules', note: 'two separate processes, and decisions in one affect the other.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'INI-CET study material — guidance on upgrading from summaries to standard texts and keeping current with advances.',
        lead: [
          'The material question for INI-CET is depth. Summaries cover the topics; textbooks cover the details the questions ask about.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A postgraduate medical entrance at this depth is prepared for through standard subject textbooks, a question bank worked with the correct marking scheme, and a habit of following current developments in the major specialities. Where time is limited — as it is for every candidate preparing alongside clinical work — the sensible compromise is to read deeply in the subjects you are already strong in, where the extra layer converts most reliably into marks.',
          },
          {
            type: 'links',
            title: 'Related pages on this site',
            items: [
              { label: 'NEET PG guide', to: '/entrance-exams/medical/neet-pg/' },
              { label: 'NEET UG guide', to: '/entrance-exams/medical/neet-ug/' },
              { label: 'All entrance exams', to: '/entrance-exams/' },
              { label: 'PG and research entrance exams', to: '/entrance-exams/pg-research/' },
            ],
          },
          {
            type: 'list',
            title: 'How to structure preparation resources',
            items: [
              'Standard textbooks for depth, at least in the subjects where you are already competitive.',
              'A question bank practised with the one-third deduction applied.',
              'A source for recent advances and guideline updates, checked regularly.',
              'Past INI-CET papers specifically, not only NEET PG ones.',
              'Full-length mocks with attempt rate tracked as a headline number.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the INI-CET exam pattern?',
        a: 'A computer-based examination of 200 multiple-choice questions over about three hours, drawn from the MBBS curriculum. One mark is awarded for a correct answer and one third of a mark is deducted for a wrong one. It is held twice a year, for the January and July admission sessions, each with its own registration and counselling process.',
      },
      {
        q: 'Which institutes participate in INI-CET?',
        a: 'The Institutes of National Importance — the AIIMS network, the Postgraduate Institute of Medical Education and Research in Chandigarh, JIPMER Puducherry, NIMHANS Bengaluru and SCTIMST Thiruvananthapuram. The seats are few and among the most sought after in Indian postgraduate medicine, which concentrates the candidate field at the top of the distribution.',
      },
      {
        q: 'How is INI-CET harder than NEET PG?',
        a: 'Not in syllabus but in depth. Both draw on the same MBBS curriculum, but INI-CET questions probe further — asking about the exception rather than the rule, the mechanism rather than the classification, and the detail that distinguishes two similar presentations. A preparation built on high-yield summaries will cover the topics INI-CET examines while missing precisely the details it asks about, which is why upgrading sources matters more than adding subjects.',
      },
      {
        q: 'How does INI-CET negative marking compare with NEET PG?',
        a: 'It is markedly gentler. INI-CET deducts one third of a mark against one mark for a correct answer; NEET PG deducts one mark against four. In INI-CET a blind guess among four options has positive expected value and a guess narrowed to three is clearly worth taking, whereas in NEET PG a wrong answer costs five marks relative to a right one. Candidates who carry NEET PG caution into INI-CET leave marks unclaimed on every uncertain question, and leaving many blanks is the characteristic error in this exam.',
      },
      {
        q: 'Should I prepare separately for INI-CET and NEET PG?',
        a: 'No — prepare for both together, since the syllabus is shared, and then add depth for INI-CET rather than breadth. Use standard textbooks instead of summaries at least in your stronger subjects, follow recent advances and guideline updates, and recalibrate your guessing threshold for the gentler deduction. Because INI-CET runs twice a year, an early attempt also gives you genuine calibration in a way an annual examination cannot.',
      },
    ],
  },
]

export default medical
