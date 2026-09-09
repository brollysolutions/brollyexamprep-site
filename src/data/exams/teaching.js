/**
 * Teaching and NET exams — /government-exams/teaching-net/
 *
 * Four qualifying examinations rather than recruitments, and that distinction
 * matters enough to state on every page here: clearing CTET, a state TET,
 * UGC NET or CSIR NET makes you eligible to be appointed, but it does not
 * appoint you. Candidates who treat them as job examinations are often
 * surprised by what follows.
 *
 * They also share a feature unusual among competitive exams — no negative
 * marking in CTET and the NETs — which changes attempt strategy completely.
 */

const teaching = [
  /* ══════════════════════════════════════════════════════════════
     CTET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ctet',
    path: '/government-exams/teaching-net/ctet/',
    name: 'CTET',
    fullName: 'Central Teacher Eligibility Test',
    authority: 'Central Board of Secondary Education (CBSE)',
    official: 'ctet.nic.in',
    seoTitle: 'CTET 2026: Paper 1 & 2 Syllabus, Pedagogy Focus, Free Mocks',
    metaDescription:
      'CTET exam guide — Paper 1 and Paper 2 pattern, child development and pedagogy syllabus, qualifying marks, validity and free mock tests.',
    lead: [
      'The Central Teacher Eligibility Test establishes the minimum eligibility to be appointed as a teacher for classes one to eight in central government schools and in schools that recognise it. Paper 1 covers the primary stage, classes one to five; Paper 2 covers the upper primary stage, classes six to eight.',
      'The most useful thing to understand about CTET is what it is really testing. Candidates prepare the content — mathematics, science, social studies — and are then surprised by how much of the paper asks about how children learn, why a particular misconception arises, and what a teacher should do about it. Pedagogy is not a section of this exam so much as its organising principle.',
    ],
    quickFacts: [
      ['Conducted by', 'Central Board of Secondary Education (CBSE)'],
      ['Papers', 'Paper 1 for classes I–V; Paper 2 for classes VI–VIII'],
      ['Structure', '150 multiple-choice questions, 150 marks, 2 hours 30 minutes'],
      ['Negative marking', 'None — every question should be attempted'],
      ['Qualifying standard', 'A prescribed percentage, with relaxation for reserved categories'],
      ['Nature', 'An eligibility test, not a recruitment — it qualifies you to apply'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CTET is conducted by the Central Board of Secondary Education to establish eligibility for teaching appointments at the primary and upper primary stages. Candidates take Paper 1 if they intend to teach classes one to five, Paper 2 for classes six to eight, or both if they wish to be eligible for either stage.',
      },
      {
        type: 'p',
        text: 'It is a qualifying examination. Clearing it gives you a certificate of eligibility; appointment then depends on separate recruitment processes run by central schools, state education departments and private schools that recognise the certificate. Understanding that distinction early prevents a good deal of disappointment.',
      },
      {
        type: 'list',
        title: 'What each paper covers',
        items: [
          { text: 'Paper 1 — classes I to V', note: 'child development and pedagogy, two languages, mathematics and environmental studies, each of 30 questions.' },
          { text: 'Paper 2 — classes VI to VIII', note: 'child development and pedagogy, two languages, and then either mathematics and science or social studies and social science, at 60 questions for the subject block.' },
          { text: 'Both papers', note: '150 questions, 150 marks, two and a half hours, with no negative marking.' },
        ],
      },
      {
        type: 'note',
        title: 'Eligibility requires a teacher training qualification',
        text: 'CTET eligibility depends on holding or pursuing a recognised teacher education qualification — a diploma in elementary education, a bachelor of elementary education or a bachelor of education, depending on the paper and the candidate’s academic background. The combinations permitted are set out in detail in the notification, and they are not interchangeable.',
      },
    ],
    stages: [
      {
        name: 'Paper 1 — Primary stage (classes I to V)',
        mode: 'Objective, 2 hours 30 minutes',
        detail:
          '150 questions for 150 marks: child development and pedagogy (30), Language I (30), Language II (30), mathematics (30) and environmental studies (30). No negative marking.',
      },
      {
        name: 'Paper 2 — Upper primary stage (classes VI to VIII)',
        mode: 'Objective, 2 hours 30 minutes',
        detail:
          '150 questions for 150 marks: child development and pedagogy (30), Language I (30), Language II (30), and then either mathematics and science (60) or social studies and social science (60), according to the subject the candidate intends to teach.',
      },
      {
        name: 'Certification',
        mode: 'Result',
        detail:
          'Candidates who reach the qualifying standard receive an eligibility certificate. Appointment requires separately applying to recruiting bodies that recognise it.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CTET syllabus — child development and pedagogy, language, mathematics, environmental studies, science and social studies for Papers 1 and 2.',
        lead: [
          'Read every subject section of this syllabus twice: once for the content, and once for the pedagogy that sits alongside it. The second reading is the one most candidates skip.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Child Development and Pedagogy',
                'The concept of development and its relationship with learning; principles of child development; the influence of heredity and environment; socialisation processes; the theoretical contributions of Piaget, Kohlberg and Vygotsky; child-centred and progressive education; intelligence and multi-dimensional views of it; language and thought; gender as a social construct; individual differences among learners; the distinction between assessment for learning and assessment of learning; inclusive education covering learners with special needs, disadvantaged and deprived groups, and children with learning difficulties; and the learning process itself — how children think and learn, why and how they make errors, motivation, and the factors that contribute to learning. Thirty questions in every paper, and the section that most rewards genuine understanding.',
              ],
              [
                'Language I and Language II',
                'Language I tests comprehension and the pedagogy of language development — learning and acquisition, principles of language teaching, the role of listening and speaking, challenges of teaching in a diverse classroom, language skills, evaluating comprehension and proficiency, teaching-learning materials, and remedial teaching. Language II similarly combines comprehension with language pedagogy. The two languages must be different, chosen from the list in the notification.',
              ],
              [
                'Mathematics',
                'For Paper 1: geometry, shapes and spatial understanding, numbers, addition and subtraction, multiplication and division, measurement, weight, time, volume, data handling, patterns and money — alongside the pedagogical issues of the nature of mathematics, its place in the curriculum, language of mathematics, community mathematics, evaluation, problems of teaching, error analysis and diagnostic and remedial teaching. For Paper 2: number system, algebra, geometry, mensuration and data handling, with the same pedagogical strand.',
              ],
              [
                'Environmental Studies (Paper 1)',
                'Family and friends including relationships, work and play, animals and plants; food; shelter; water; travel; and things we make and do — alongside the pedagogical concerns of the concept and scope of environmental studies, its significance, integrated approaches, learning principles, the relation to science and social science, activity-based approaches, experimentation, discussion, continuous and comprehensive evaluation, and teaching material and aids.',
              ],
              [
                'Science (Paper 2)',
                'Food, materials, the world of the living, moving things and people and ideas, how things work covering electric current and magnets, natural phenomena and natural resources — alongside the nature and structure of science, natural science and its aims and objectives, understanding and appreciating science, approaches to teaching, observation and experiment, innovation, text material and aids, evaluation, problems and remedial teaching.',
              ],
              [
                'Social Studies and Social Science (Paper 2)',
                'History from earliest societies through empires, social change, colonialism and the nationalist movement to independence; geography covering the earth, globe, environment, air, water, human environment, resources and agriculture; social and political life covering diversity, government, local government, livelihoods, democracy, state government, media, unpacking gender, the Constitution, parliamentary government, the judiciary and social justice — alongside the pedagogical issues of the concept and nature of social science, class room processes, developing critical thinking, enquiry and empirical evidence, problems of teaching, sources and project work, and evaluation.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Notice the pattern: every content section carries a pedagogical component. That is not decoration. A large share of the questions in each subject ask how a concept should be taught, why a learner might misunderstand it, or how a teacher should respond — and those questions cannot be answered from subject knowledge alone.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CTET exam pattern — Paper 1 and Paper 2 structure, the absence of negative marking, qualifying marks and certificate validity.',
        lead: [
          'No negative marking. That single fact should change how you attempt the paper more than any other piece of strategy advice.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper 1 — for teaching classes I to V. Confirm against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Child Development and Pedagogy', '30', '30', 'Compulsory in both papers'],
              ['Language I', '30', '30', 'Medium of instruction'],
              ['Language II', '30', '30', 'Must differ from Language I'],
              ['Mathematics', '30', '30', 'Content plus pedagogy'],
              ['Environmental Studies', '30', '30', 'Content plus pedagogy'],
              ['Total', '150', '150', '2 hours 30 minutes'],
            ],
          },
          {
            type: 'table',
            caption: 'Paper 2 — for teaching classes VI to VIII. Confirm against the current notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Child Development and Pedagogy', '30', '30', 'Compulsory'],
              ['Language I', '30', '30', 'Medium of instruction'],
              ['Language II', '30', '30', 'Must differ from Language I'],
              ['Mathematics and Science, or Social Studies', '60', '60', 'Chosen according to the subject you intend to teach'],
              ['Total', '150', '150', '2 hours 30 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'With no deduction for wrong answers, leaving a question blank is a guaranteed zero where a guess is a free opportunity. There is no defensible reason to submit a CTET paper with unanswered questions, and yet candidates do it every cycle out of habits formed on papers that punish errors. Reserve the final minutes to fill every blank.',
          },
          {
            type: 'list',
            title: 'Qualifying, validity and eligibility',
            items: [
              { text: 'Qualifying standard', note: 'a prescribed percentage of the total, with relaxation for reserved categories as set out in the notification.' },
              { text: 'Certificate validity', note: 'the period for which a CTET certificate remains valid has been revised in the past — confirm the current position.' },
              { text: 'Both papers may be taken', note: 'a candidate wishing to be eligible for both stages sits Paper 1 and Paper 2, in separate sessions.' },
              { text: 'Eligibility to sit', note: 'depends on holding or pursuing a recognised teacher education qualification, in combinations specified by paper.' },
            ],
          },
          {
            type: 'note',
            title: 'Clearing CTET is not an appointment',
            text: 'The certificate establishes eligibility. Actual appointment requires applying to recruiting bodies — central schools such as Kendriya Vidyalayas and Navodaya Vidyalayas, state education departments, and private schools that recognise the certificate — each of which runs its own selection process, often with its own examination and interview.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CTET previous year papers — learning the pedagogy question style, which cannot be prepared for from content knowledge alone.',
        lead: [
          'Past CTET papers are valuable chiefly for one thing: showing you what a pedagogy question actually looks like, and why the obvious answer is often wrong.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Pedagogy questions have a distinctive character. They present a classroom situation — a child making a particular error, a teacher choosing between approaches — and ask what is happening or what should be done. The correct answer usually reflects a specific principle: that errors are informative rather than merely wrong, that learning is constructed rather than transmitted, that assessment should support learning rather than only measure it. Recognising that orientation is what past papers teach.',
          },
          {
            type: 'steps',
            title: 'A method for the pedagogy sections',
            items: [
              { text: 'Work past pedagogy questions and read every explanation.', note: 'The reasoning matters far more than the answer, because it is what transfers.' },
              { text: 'Notice which principle each correct answer reflects.', note: 'A small set of ideas — constructivism, child-centredness, formative assessment, inclusion — explains most of them.' },
              { text: 'Pay attention to the wrong options.', note: 'They typically represent the intuitive, teacher-centred or punitive response, which is precisely what the exam is testing you to reject.' },
              { text: 'Do the same for subject pedagogy.', note: 'Mathematics pedagogy and science pedagogy have their own recurring concerns — error analysis, activity-based learning, remedial teaching.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CTET free mock test', to: '/mock-tests/ctet/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Teaching and NET exams', to: '/government-exams/teaching-net/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Free CTET mock tests — full Paper 1 and Paper 2 practice with no negative marking, scoring and section-wise analysis.',
        lead: [
          'Practise with every question attempted. In a paper with no deduction, a blank is simply a discarded mark.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The free CTET mock on this site follows the current pattern for 150 questions in two and a half hours. Two things are worth watching beyond your score: whether you left anything unanswered, which you never should, and how your pedagogy accuracy compares with your content accuracy, since the two respond to entirely different preparation.',
          },
          {
            type: 'list',
            title: 'What your analysis should tell you',
            items: [
              { text: 'Blanks — there should be none', note: 'with no negative marking, an unanswered question is a mark thrown away.' },
              { text: 'Pedagogy accuracy versus content accuracy', note: 'if content is strong and pedagogy weak, more subject revision will not help.' },
              { text: 'Language section performance', note: 'often the most neglected sixty marks in the paper, and among the most learnable.' },
              { text: 'Time distribution', note: 'two and a half hours for 150 questions is comfortable; if you are rushed, you are over-deliberating.' },
            ],
          },
          {
            type: 'p',
            text: 'A closing note on the language papers. Sixty of the hundred and fifty marks come from Language I and Language II combined, and they test comprehension and language pedagogy rather than literary depth. Candidates routinely under-prepare them on the assumption that language ability is fixed — it is not, and the pedagogy half is entirely learnable.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Take the free CTET mock test', to: '/mock-tests/ctet/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'CTET preparation strategy — building pedagogical understanding, covering the content, and planning for a paper with no negative marking.',
        lead: [
          'Study pedagogy as a subject in its own right. It is thirty compulsory questions plus a substantial share of every other section.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Add it up: child development and pedagogy is thirty questions, and pedagogy accounts for a meaningful portion of the language, mathematics, environmental studies, science and social studies sections too. Across the whole paper, pedagogical understanding is worth considerably more than any single content subject — and it is the part a graduate in the relevant subject is least likely to already have.',
          },
          {
            type: 'steps',
            title: 'A two to three month plan',
            items: [
              { text: 'Weeks one to three — child development and pedagogy, properly.', note: 'Piaget, Vygotsky and Kohlberg understood rather than memorised; inclusive education; assessment for learning. This is the foundation for the whole paper.' },
              { text: 'Weeks two to six — the content subjects at the relevant class level.', note: 'For Paper 1, up to class five; for Paper 2, up to class eight. The content itself is not difficult; the level is what matters.' },
              { text: 'Alongside — subject pedagogy for each content area.', note: 'How mathematics should be taught, why children make particular errors, what remedial teaching means in that subject.' },
              { text: 'Weeks three to eight — both language sections.', note: 'Comprehension practice plus language pedagogy. Sixty marks, routinely under-prepared.' },
              { text: 'Weeks six to ten — past papers, focusing on pedagogy reasoning.', note: 'Reading explanations rather than only checking answers.' },
              { text: 'Final weeks — full timed mocks with every question attempted.', note: 'Building the habit of leaving nothing blank.' },
            ],
          },
          {
            type: 'list',
            title: 'The characteristic mistakes',
            items: [
              { text: 'Preparing content and neglecting pedagogy', note: 'the most common error, and the reason subject graduates sometimes fail a paper on their own subject.' },
              { text: 'Leaving questions blank', note: 'there is no negative marking; a blank is a discarded opportunity.' },
              { text: 'Under-preparing the language sections', note: 'sixty marks, half of it learnable pedagogy.' },
              { text: 'Studying content above the relevant class level', note: 'CTET asks at the level you will teach, not above it.' },
              { text: 'Assuming the certificate is a job', note: 'it establishes eligibility; appointment requires separate recruitment.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'CTET study material — child development and pedagogy, language, mathematics, science and social studies notes at the relevant class levels.',
        lead: [
          'Content at the class level you will teach, plus pedagogy for each subject. NCERT textbooks are the natural primary source.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the content sections, NCERT textbooks up to class five for Paper 1 and up to class eight for Paper 2 are the right source — they are what the syllabus is drawn from, and studying above that level wastes effort. What NCERT does not supply is the pedagogy, which needs its own material and its own study time.',
          },
          {
            type: 'links',
            title: 'Subject notes for CTET',
            items: [
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Environment notes', to: '/study-material/environment/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'History notes', to: '/study-material/history/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'How to study for a pedagogy-led paper',
            items: [
              'Read child development theory for understanding rather than for names and dates — the questions are applied.',
              'After each content topic, ask how it would be taught and where a learner would go wrong.',
              'Practise pedagogy questions continuously rather than in a final block; the reasoning takes time to internalise.',
              'Keep content revision at the class level of the paper you are sitting.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CTET exam pattern?',
        a: 'Both papers have 150 multiple-choice questions for 150 marks in two and a half hours, with no negative marking. Paper 1, for teaching classes one to five, has five sections of 30 questions each: child development and pedagogy, Language I, Language II, mathematics and environmental studies. Paper 2, for classes six to eight, has child development and pedagogy, Language I and Language II at 30 questions each, plus a 60-question block in either mathematics and science or social studies and social science.',
      },
      {
        q: 'Is there negative marking in CTET?',
        a: 'No. There is no deduction for a wrong answer, which means an unanswered question and a wrong answer score identically — so leaving anything blank is a guaranteed loss where a guess is a free opportunity. There is no defensible reason to submit a CTET paper with blanks, and yet candidates do it every cycle out of habits formed on exams that punish errors. Reserve the last few minutes to fill every unanswered question.',
      },
      {
        q: 'How much of CTET is pedagogy?',
        a: 'More than most candidates expect. Child development and pedagogy is a compulsory 30-question section in both papers, and every content section — language, mathematics, environmental studies, science, social studies — carries its own pedagogical component asking how a concept should be taught, why learners make particular errors, and how a teacher should respond. Across the whole paper, pedagogical understanding is worth considerably more than any single content subject, which is why subject graduates sometimes struggle with a paper on their own subject.',
      },
      {
        q: 'Does clearing CTET get me a teaching job?',
        a: 'No. CTET is a qualifying examination that establishes your eligibility to be appointed as a teacher; it is not itself a recruitment. Appointment requires applying separately to recruiting bodies — central schools such as Kendriya Vidyalayas and Navodaya Vidyalayas, state education departments, and private schools that recognise the certificate — each of which runs its own selection process, frequently with its own examination and interview.',
      },
      {
        q: 'Who is eligible to appear for CTET?',
        a: 'Eligibility depends on holding or pursuing a recognised teacher education qualification, with the permitted combinations differing between Paper 1 and Paper 2 and depending on your academic background — typically a diploma in elementary education, a bachelor of elementary education, or a bachelor of education alongside the relevant graduation. The combinations are set out in detail in the notification and are not interchangeable, so check the table that applies to your qualifications before applying.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     UGC NET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'ugc-net',
    path: '/government-exams/teaching-net/ugc-net/',
    name: 'UGC NET',
    fullName: 'University Grants Commission National Eligibility Test',
    authority: 'National Testing Agency, for the University Grants Commission',
    official: 'ugcnet.nta.ac.in',
    seoTitle: 'UGC NET 2026: Paper 1 & 2 Pattern, JRF Criteria, Free Mocks',
    metaDescription:
      'UGC NET exam guide — Paper 1 and subject Paper 2 pattern, JRF and Assistant Professor eligibility, PhD admission route and preparation strategy.',
    lead: [
      'The National Eligibility Test determines eligibility for Assistant Professor positions in Indian universities and colleges, and for the Junior Research Fellowship that funds doctoral research. It is conducted in a large number of subjects across the humanities, social sciences, commerce, education and allied disciplines.',
      'It now serves a third purpose as well, functioning as an admission route to doctoral programmes, which has widened the field considerably. What has not changed is the structure: a common paper on teaching and research aptitude, and a subject paper carrying twice the marks.',
    ],
    quickFacts: [
      ['Conducted by', 'National Testing Agency, for the University Grants Commission'],
      ['Purpose', 'Eligibility for Assistant Professor, the Junior Research Fellowship, and PhD admission'],
      ['Level', 'A master’s degree with the prescribed minimum percentage'],
      ['Structure', 'Paper 1 (50 questions, 100 marks) and Paper 2 (100 questions, 200 marks), in one three-hour session'],
      ['Negative marking', 'None — attempt every question'],
      ['Subjects', 'A wide list across humanities, social sciences, commerce and education'],
    ],
    overview: [
      {
        type: 'p',
        text: 'UGC NET is a qualifying examination with three possible outcomes. A candidate may qualify for Assistant Professor eligibility; may additionally qualify for the Junior Research Fellowship, which carries funding for doctoral work; or may qualify only for admission to a doctoral programme. The category a candidate falls into depends on their score relative to the cutoffs set for each.',
      },
      {
        type: 'p',
        text: 'The examination is held in a large number of subjects, and candidates choose the one corresponding to their postgraduate specialisation. Paper 2 is entirely in that subject and carries two hundred of the three hundred marks, which makes subject depth the dominant factor — Paper 1, though common to everyone, is the smaller half.',
      },
      {
        type: 'list',
        title: 'The three qualifications, in descending order of cutoff',
        items: [
          { text: 'Junior Research Fellowship and Assistant Professor', note: 'the highest threshold, carrying a research fellowship along with teaching eligibility.' },
          { text: 'Assistant Professor only', note: 'eligibility to be appointed as an Assistant Professor, without the fellowship.' },
          { text: 'Admission to a PhD programme only', note: 'the lowest of the three thresholds, qualifying the candidate for doctoral admission.' },
        ],
      },
      {
        type: 'note',
        title: 'Eligibility is a threshold, not an appointment',
        text: 'Qualifying for Assistant Professor eligibility does not appoint you to any post. Universities and colleges run their own recruitment, with their own selection committees, and NET qualification is a precondition for applying rather than a guarantee of anything beyond it.',
      },
    ],
    stages: [
      {
        name: 'Paper 1 — Teaching and Research Aptitude',
        mode: 'Objective, part of a three-hour session',
        detail:
          '50 questions for 100 marks, common to all candidates, covering teaching aptitude, research aptitude, comprehension, communication, reasoning, data interpretation, information and communication technology, people and environment, and higher education systems.',
      },
      {
        name: 'Paper 2 — Subject paper',
        mode: 'Objective, same three-hour session',
        detail:
          '100 questions for 200 marks in the candidate’s chosen subject, at postgraduate level. Two thirds of the total marks.',
      },
      {
        name: 'Result and category determination',
        mode: 'Score-based',
        detail:
          'Candidates are placed in one of three categories — JRF with Assistant Professor eligibility, Assistant Professor eligibility, or PhD admission eligibility — according to their score against separately set cutoffs.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'UGC NET syllabus — the ten units of Paper 1 and the structure of the postgraduate-level subject paper.',
        lead: [
          'Paper 1 has a fixed ten-unit syllabus common to everyone. Paper 2 follows your subject at postgraduate level, and is where two thirds of the marks sit.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Unit 1 — Teaching Aptitude',
                'The concept, objectives and levels of teaching; characteristics and adjustment of learners; factors affecting teaching including teacher, learner, support material, instructional facilities, learning environment and institution; methods of teaching in higher education institutions including teacher-centred, learner-centred and offline and online approaches; teaching support systems; and evaluation systems, including elements and types of evaluation and computer-based testing.',
              ],
              [
                'Unit 2 — Research Aptitude',
                'The meaning, characteristics and types of research; steps of research; methods of research; research ethics; the application of information and communication technology in research; the structure of a research report; and thesis and article writing, including format and referencing styles.',
              ],
              [
                'Unit 3 — Comprehension',
                'A passage of text with questions on it, testing reading comprehension at the level expected of a postgraduate.',
              ],
              [
                'Unit 4 — Communication',
                'The meaning, types and characteristics of communication; effective communication including verbal and non-verbal, intercultural and group communication, and classroom communication; and barriers to effective communication and mass media and society.',
              ],
              [
                'Units 5 and 6 — Mathematical Reasoning and Logical Reasoning',
                'Types of reasoning, number series, letter series, codes and relationships, and mathematical aptitude covering fractions, time and distance, ratio and proportion, percentage, profit and loss, interest and discounting, and averages; along with understanding the structure of arguments, evaluating and distinguishing deductive and inductive reasoning, verbal analogies, verbal classification, reasoning logical diagrams, Venn diagrams, and Indian logic including means of knowledge, pramanas, and the structure and kinds of anumana and hetvabhasa.',
              ],
              [
                'Unit 7 — Data Interpretation',
                'Sources, acquisition and classification of data; quantitative and qualitative data; graphical representation including bar chart, histogram, pie chart, table chart and line chart, and the mapping of data; data interpretation; and data and governance.',
              ],
              [
                'Unit 8 — Information and Communication Technology',
                'General abbreviations and terminology; basics of the internet, intranet, email, audio and video conferencing; digital initiatives in higher education; and ICT and governance.',
              ],
              [
                'Unit 9 — People, Development and Environment',
                'Development and environment including the Millennium and Sustainable Development Goals; human and environment interaction; environmental issues including local, regional and global air, water and soil pollution, and climate change; environmental protection acts and international agreements; natural and energy resources; and natural hazards and disasters.',
              ],
              [
                'Unit 10 — Higher Education System',
                'The institutions of higher learning and education in ancient India; the evolution of higher learning and research in post-independence India; oriental, conventional and non-conventional learning programmes; professional, technical and skill-based education; value education and environmental education; and policies, governance and administration in higher education.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Two units of Paper 1 are worth flagging because they surprise candidates. Indian logic within the reasoning unit — pramanas, anumana, hetvabhasa — has no counterpart in general competitive-exam preparation and appears reliably. And the higher education system unit rewards specific factual study of policy and institutional history rather than general awareness.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'UGC NET exam pattern — Paper 1 and Paper 2 marks and timing, the absence of negative marking and the three qualifying categories.',
        lead: [
          'Three hundred marks in one three-hour session, with no deduction for wrong answers. Every question should be answered.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Examination structure. Confirm marks, timing and the qualifying criteria against the current notification.',
            head: ['Paper', 'Content', 'Questions', 'Marks'],
            rows: [
              ['Paper 1', 'Teaching and Research Aptitude — common to all', '50', '100'],
              ['Paper 2', 'Subject paper at postgraduate level', '100', '200'],
              ['Total', 'One combined three-hour session', '150', '300'],
            ],
          },
          {
            type: 'p',
            text: 'The absence of negative marking is decisive for attempt strategy. With no penalty, an unanswered question is worth strictly less than a guessed one, and there is no situation in which leaving a blank improves your score. Candidates still do it, out of habits carried from other examinations, and it costs them.',
          },
          {
            type: 'list',
            title: 'How the three categories are determined',
            items: [
              { text: 'JRF with Assistant Professor eligibility', note: 'the highest cutoff, and additionally subject to an age limit that the other categories do not carry.' },
              { text: 'Assistant Professor eligibility', note: 'a lower cutoff, with no age limit.' },
              { text: 'PhD admission eligibility', note: 'the lowest of the three thresholds.' },
              { text: 'Cutoffs are subject-wise and category-wise', note: 'so the score needed varies with the subject you sat and your category.' },
            ],
          },
          {
            type: 'note',
            title: 'The JRF carries an age limit',
            text: 'Junior Research Fellowship eligibility is subject to an upper age limit, with relaxations for reserved categories and for certain other groups. Assistant Professor eligibility carries no such limit. A candidate above the JRF age band can still qualify for Assistant Professor eligibility, and should confirm the current bands in the notification.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'UGC NET previous year papers — using past Paper 1 sets to cover a fixed syllabus completely and calibrating subject paper depth.',
        lead: [
          'Paper 1 has a fixed ten-unit syllabus that repeats reliably. Past papers make it a finite, completely coverable hundred marks.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Paper 1 is one of the most learnable hundred marks in Indian competitive examinations. The syllabus is fixed, the ten units are well defined, and past papers show the same themes returning cycle after cycle — the same teaching and evaluation concepts, the same research methodology distinctions, the same Indian logic terms, the same higher education policy landmarks. A candidate who works through several years of Paper 1 systematically will have seen most of what can be asked.',
          },
          {
            type: 'steps',
            title: 'A method for each paper',
            items: [
              { text: 'For Paper 1 — tag past questions by unit and count.', note: 'The distribution is uneven and tells you where the hundred marks actually come from.' },
              { text: 'Build a factual sheet for the higher education and ICT units.', note: 'These reward specific recall rather than reasoning.' },
              { text: 'Practise Indian logic terms deliberately.', note: 'They appear reliably and are covered nowhere else in general preparation.' },
              { text: 'For Paper 2 — read past subject papers to calibrate depth.', note: 'The level is postgraduate, and past papers show which parts of your subject are actually examined.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CSIR NET guide', to: '/government-exams/teaching-net/csir-net/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Teaching and NET exams', to: '/government-exams/teaching-net/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'UGC NET mock tests — combined Paper 1 and Paper 2 practice in one three-hour session with no negative marking.',
        lead: [
          'Practise both papers in one sitting, because that is how they are sat — three hours, a hundred and fifty questions, no break between them.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The single-session format matters. Candidates who practise Paper 1 and Paper 2 separately arrive at an examination that runs them together and find their concentration flags in the subject paper, which is precisely the paper carrying two hundred of the three hundred marks. Full-session practice is the only way to build that stamina.',
          },
          {
            type: 'list',
            title: 'What to watch',
            items: [
              { text: 'Blanks — there should be none', note: 'no negative marking means an unanswered question is simply discarded.' },
              { text: 'Accuracy in the second half of Paper 2', note: 'a decline indicates stamina rather than knowledge, and the fix is longer practice sessions.' },
              { text: 'Paper 1 unit-wise accuracy', note: 'a fixed syllabus means every weak unit is completely fixable.' },
              { text: 'Time split between the two papers', note: 'Paper 2 has twice the questions and twice the marks; the time should reflect that.' },
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
          'UGC NET preparation strategy — securing Paper 1 completely, building subject depth for Paper 2 and targeting the JRF cutoff.',
        lead: [
          'Secure Paper 1 completely — it is finite and fixed — then put everything else into the subject paper, which carries two thirds of the marks.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Paper 1 is the most tractable component of this examination: a fixed syllabus of ten well-defined units, no negative marking, and past papers that show the same themes repeatedly. It can be brought close to complete in six to eight weeks of steady work. That is an unusually good return, and it is the foundation on which a JRF-level score is built, because Paper 2 alone rarely gets a candidate over the highest cutoff.',
          },
          {
            type: 'steps',
            title: 'A three to four month plan',
            items: [
              { text: 'Weeks one to eight — Paper 1, unit by unit, to near-completion.', note: 'Teaching and research aptitude first, then reasoning and Indian logic, then the ICT, environment and higher education units, which are factual.' },
              { text: 'From week one — the subject paper, systematically.', note: 'Your postgraduate syllabus, revisited at examination depth. This is two hundred marks and the longer project.' },
              { text: 'From week two — past Paper 1 questions, continuously.', note: 'A fixed syllabus rewards repeated exposure to how it is actually asked.' },
              { text: 'Weeks eight to twelve — past subject papers.', note: 'To calibrate depth and find which parts of your subject the examination favours.' },
              { text: 'Final weeks — full three-hour combined sessions.', note: 'Both papers together, every question answered.' },
              { text: 'If targeting JRF — check the age limit first.', note: 'It applies to the fellowship only, and has relaxations by category.' },
            ],
          },
          {
            type: 'list',
            title: 'Where NET candidates go wrong',
            items: [
              { text: 'Leaving questions blank', note: 'no negative marking; a blank is a discarded mark.' },
              { text: 'Neglecting Paper 1', note: 'a hundred marks that can be brought close to complete, and often the difference between Assistant Professor and JRF.' },
              { text: 'Skipping Indian logic and higher education units', note: 'both appear reliably and are covered nowhere else.' },
              { text: 'Practising the papers separately', note: 'they are sat in one three-hour session, and stamina is part of what is tested.' },
              { text: 'Relying on general awareness for the environment unit', note: 'it asks specific policy, agreement and goal content.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'UGC NET study material — teaching and research aptitude, reasoning, data interpretation and environment notes for Paper 1.',
        lead: [
          'These notes support Paper 1. The subject paper needs your postgraduate syllabus and its standard texts.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For Paper 2 there is no substitute for the standard texts of your own discipline read at postgraduate depth, guided by past papers. The notes below serve Paper 1, where reasoning, data interpretation and the environment unit overlap substantially with general competitive-exam material, while the teaching, research and higher education units need their own dedicated study.',
          },
          {
            type: 'links',
            title: 'Notes supporting Paper 1',
            items: [
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Data interpretation and quantitative aptitude', to: '/study-material/quantitative-aptitude/' },
              { label: 'Environment notes', to: '/study-material/environment/' },
              { label: 'English comprehension notes', to: '/study-material/english/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'How to work a fixed syllabus',
            items: [
              'Keep a unit checklist for Paper 1 and mark off only what is genuinely finished.',
              'Convert the factual units — ICT, higher education, environment agreements — into one-page sheets and revise weekly.',
              'Practise past questions for each unit as soon as you finish it, not at the end.',
              'For Paper 2, let past papers set your study order within your own syllabus.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the UGC NET exam pattern?',
        a: 'Two papers taken in a single three-hour session. Paper 1 has 50 questions for 100 marks on teaching and research aptitude, comprehension, communication, reasoning, data interpretation, ICT, people and environment, and the higher education system — common to all candidates. Paper 2 has 100 questions for 200 marks in your chosen subject at postgraduate level. There is no negative marking, so every question should be attempted.',
      },
      {
        q: 'What is the difference between JRF and Assistant Professor eligibility?',
        a: 'They are two of the three outcomes, determined by your score against separately set cutoffs. Junior Research Fellowship eligibility carries a research fellowship along with Assistant Professor eligibility, and requires the highest score; it is also subject to an upper age limit that the other categories do not carry. Assistant Professor eligibility alone has a lower cutoff and no age limit. A third, lower threshold qualifies a candidate for PhD admission only.',
      },
      {
        q: 'Is there negative marking in UGC NET?',
        a: 'No. There is no deduction for wrong answers, which means an unanswered question and a wrong one score identically — so leaving a blank can only lose you marks and never gain you any. Despite this, candidates regularly submit papers with unanswered questions out of habits formed on exams that penalise errors. Reserve the final minutes of the session to ensure every question has an answer.',
      },
      {
        q: 'How important is UGC NET Paper 1?',
        a: 'More important than its hundred marks suggest, because it is the most completely learnable part of the examination. The syllabus is fixed at ten well-defined units, the themes repeat reliably across cycles, and it can be brought close to complete in six to eight weeks. Since Paper 2 alone rarely carries a candidate over the JRF cutoff, a near-perfect Paper 1 is frequently what separates a fellowship from Assistant Professor eligibility alone.',
      },
      {
        q: 'Does UGC NET qualification guarantee a teaching job?',
        a: 'No. It establishes eligibility to be appointed as an Assistant Professor; universities and colleges then run their own recruitment with their own selection committees, and NET qualification is a precondition for applying rather than a guarantee of appointment. Where a candidate also qualifies for the Junior Research Fellowship, that does carry funding for doctoral research, subject to securing admission to a programme.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     CSIR NET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'csir-net',
    path: '/government-exams/teaching-net/csir-net/',
    name: 'CSIR NET',
    fullName: 'Council of Scientific and Industrial Research — National Eligibility Test',
    authority: 'National Testing Agency, for CSIR and the UGC',
    official: 'csirnet.nta.ac.in',
    seoTitle: 'CSIR NET 2026: Part A, B, C Pattern & Science Subject Guide',
    metaDescription:
      'CSIR NET exam guide — the three-part paper structure, five science subjects, JRF and lectureship eligibility, and preparation strategy.',
    lead: [
      'CSIR NET determines eligibility for the Junior Research Fellowship and for lectureship in the science disciplines — chemical sciences, earth sciences, life sciences, mathematical sciences and physical sciences. It is the science counterpart to UGC NET, conducted for the Council of Scientific and Industrial Research.',
      'Its paper works quite differently from UGC NET, and the difference is worth understanding before you prepare. It is divided into three parts of ascending difficulty and value, with Part C carrying the most marks and asking genuine problem-solving questions rather than recall. It also has negative marking, which UGC NET does not.',
    ],
    quickFacts: [
      ['Conducted by', 'National Testing Agency, for CSIR and the UGC'],
      ['Subjects', 'Chemical, Earth, Life, Mathematical and Physical Sciences'],
      ['Purpose', 'Junior Research Fellowship, lectureship eligibility, and PhD admission'],
      ['Structure', 'Three parts — A (general aptitude), B (subject), C (subject, higher value)'],
      ['Total', '200 marks over three hours'],
      ['Negative marking', 'Applies, and varies by part and subject'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CSIR NET is the eligibility examination for research fellowships and lectureship in the sciences. Successful candidates qualify for the Junior Research Fellowship, which funds doctoral research, or for lectureship eligibility, or for admission to a doctoral programme, according to their score against separately set cutoffs.',
      },
      {
        type: 'p',
        text: 'The examination runs in five subjects, and candidates choose the one corresponding to their postgraduate discipline. Unlike UGC NET, where a common aptitude paper sits alongside a subject paper, CSIR NET is overwhelmingly a subject examination — Part A is a modest general aptitude section, and Parts B and C are both in your science subject.',
      },
      {
        type: 'list',
        title: 'The three parts',
        items: [
          { text: 'Part A — General Aptitude', note: 'common to all five subjects, covering logical reasoning, graphical analysis, analytical and numerical ability, quantitative comparison, series formation and puzzles. Candidates attempt a specified number from a larger set.' },
          { text: 'Part B — Subject, conventional', note: 'subject questions of the kind a good postgraduate examination would ask, testing whether you know the discipline.' },
          { text: 'Part C — Subject, higher order', note: 'the highest-valued questions, requiring scientific reasoning and application rather than recall. This is where the examination genuinely separates candidates.' },
        ],
      },
      {
        type: 'note',
        title: 'You choose which questions to attempt',
        text: 'Each part specifies a maximum number of questions that will be evaluated, drawn from a larger set. That makes question selection an explicit part of the examination rather than an implicit one — you are expected to choose, and choosing well is a skill worth practising.',
      },
    ],
    stages: [
      {
        name: 'Part A — General Aptitude',
        mode: 'Objective, part of a three-hour paper',
        detail:
          'Common to all subjects. Logical reasoning, graphical analysis, analytical and numerical ability, quantitative comparison, series formation and puzzles. A specified number of questions are evaluated from a larger set.',
      },
      {
        name: 'Part B — Subject questions',
        mode: 'Objective, same paper',
        detail:
          'Conventional subject questions at postgraduate level in the candidate’s chosen science discipline, testing knowledge of the subject.',
      },
      {
        name: 'Part C — Higher order subject questions',
        mode: 'Objective, same paper',
        detail:
          'The highest-valued questions, testing scientific concepts and their application, analytical reasoning and problem solving rather than recall. Carries the largest share of the marks.',
      },
      {
        name: 'Result and category determination',
        mode: 'Score-based',
        detail:
          'Candidates are placed in the Junior Research Fellowship, lectureship or PhD admission categories according to their score against separately set subject-wise and category-wise cutoffs.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CSIR NET syllabus — the general aptitude section and the five science subject syllabi at postgraduate level.',
        lead: [
          'One common aptitude section and five subject syllabi, each drawn at postgraduate depth. Read only your own.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Part A — General Aptitude',
                'Logical reasoning, graphical analysis, analytical and numerical ability, quantitative comparison, series formation, puzzles, and basic data interpretation. Common to all five subjects and pitched at a level that rewards practice rather than study.',
              ],
              [
                'Chemical Sciences',
                'Inorganic chemistry covering chemical periodicity, structure and bonding, coordination chemistry, main group and transition elements, bioinorganic chemistry, organometallics and nuclear chemistry; physical chemistry covering quantum chemistry, thermodynamics, chemical kinetics, electrochemistry, surface phenomena and spectroscopy; and organic chemistry covering stereochemistry, reaction mechanisms, named reactions, synthetic strategies, natural products, heterocycles and spectroscopic determination of structures.',
              ],
              [
                'Life Sciences',
                'Molecules and their interaction relevant to biology; cellular organisation; fundamental processes including replication, transcription and translation; cell communication and signalling; developmental biology; system physiology in plants and animals; inheritance biology; diversity of life forms; ecological principles; evolution and behaviour; applied biology; and methods in biology including molecular biology techniques, microscopy, statistical methods and radiolabelling.',
              ],
              [
                'Physical Sciences',
                'Mathematical methods of physics; classical mechanics; electromagnetic theory; quantum mechanics; thermodynamic and statistical physics; electronics and experimental methods; atomic and molecular physics; condensed matter physics; nuclear and particle physics; and the associated experimental techniques and data analysis.',
              ],
              [
                'Mathematical Sciences',
                'Analysis and linear algebra; complex analysis, algebra and topology; ordinary and partial differential equations, numerical analysis, calculus of variations, linear integral equations and classical mechanics; and descriptive statistics, probability, statistical inference, design of experiments and operations research, with candidates attempting units according to their specialisation.',
              ],
              [
                'Earth, Atmospheric, Ocean and Planetary Sciences',
                'The earth and planetary system, geodynamics, geological time scale, mineralogy and petrology, structural geology and geotectonics, palaeontology, sedimentology and stratigraphy, marine geology, geochemistry, economic geology, and the atmospheric and ocean science components including meteorology, physical and chemical oceanography, and applied areas.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'What the syllabus does not convey is the difference between Part B and Part C depth. Part B asks whether you know the subject; Part C asks whether you can use it — deriving, applying and reasoning through problems that do not have a recalled answer. Two candidates with identical factual knowledge can score very differently on Part C, and it is the part that carries the most marks.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CSIR NET exam pattern — the three-part structure, marks distribution, question selection and negative marking by part.',
        lead: [
          'Three parts of ascending value, with the highest marks attached to the hardest questions and negative marking that varies between them.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The three-part structure. Question counts, marks per question and the negative marking rate vary by subject — confirm in the current notification for yours.',
            head: ['Part', 'Content', 'Character', 'Relative weight'],
            rows: [
              ['Part A', 'General aptitude, common to all subjects', 'Reasoning and numerical ability', 'The smallest share'],
              ['Part B', 'Subject questions at postgraduate level', 'Knowledge of the discipline', 'A substantial share'],
              ['Part C', 'Higher order subject questions', 'Application and scientific reasoning', 'The largest share'],
            ],
          },
          {
            type: 'p',
            text: 'Two features make this pattern unusual. First, each part evaluates only a specified number of questions from a larger set, so you select which to attempt — question choice is an explicit skill. Second, negative marking applies and the rate differs between parts and between subjects, which means the guessing calculus in Part C may not be the same as in Part A.',
          },
          {
            type: 'list',
            title: 'What follows for attempt strategy',
            items: [
              { text: 'Know your subject’s marking scheme exactly', note: 'marks per question and deduction rate differ by part and by subject. This is not a detail you can approximate.' },
              { text: 'Part C is where the marks are', note: 'and it is where preparation depth shows. Protect time for it.' },
              { text: 'Part A is fast marks', note: 'reasoning and numerical ability that a prepared candidate can bank quickly.' },
              { text: 'Selection matters', note: 'you are choosing which questions count, so triage is part of the examination rather than a workaround.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the marking scheme for your subject',
            text: 'Because the number of questions to be attempted, the marks per question and the negative marking rate vary by part and by subject, and have been revised between cycles, the marking scheme in the current notification for your specific subject is the only reliable source. Preparing an attempt strategy from a general summary is a real risk here.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CSIR NET previous year papers — calibrating Part C difficulty and building question selection skill.',
        lead: [
          'Past papers are the only way to understand what Part C actually asks, and Part C is where the examination is decided.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The gap between reading a syllabus topic and answering a Part C question on it is large. Part C questions typically combine two or three concepts, require a derivation or a multi-step calculation, and cannot be answered by recognition. Working past Part C questions is the only realistic way to calibrate how deeply you need to know each topic — and it usually reveals that the required depth is greater than a syllabus reading suggests.',
          },
          {
            type: 'steps',
            title: 'How to work the papers',
            items: [
              { text: 'Attempt full papers under three hours with the real selection rules.', note: 'Choosing which questions to attempt is part of what you are practising.' },
              { text: 'Separate your Part B and Part C accuracy.', note: 'Strong Part B with weak Part C means you know the subject but cannot yet apply it, and that needs problem practice rather than revision.' },
              { text: 'Build a topic frequency table for Parts B and C.', note: 'Across several years in your subject. The emphasis is uneven.' },
              { text: 'Track your guessing outcomes under the real deduction.', note: 'The rate varies by part; your threshold should too.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'UGC NET guide', to: '/government-exams/teaching-net/ugc-net/' },
              { label: 'GATE exam guide', to: '/entrance-exams/pg-research/gate/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'CSIR NET mock tests — three-hour practice with the correct part-wise marking and question selection rules.',
        lead: [
          'A useful mock enforces the selection rules and the part-wise deduction. Without those it is measuring a different examination.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Two things need practising that ordinary subject study does not build. One is selection — deciding within seconds which questions to spend the limited attempt budget on. The other is stamina across three hours of genuinely difficult problem solving, which is a different experience from three hours of recall-based testing.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Part C accuracy specifically', note: 'the largest share of the marks and the truest measure of your preparation depth.' },
              { text: 'Whether your selections were the right ones', note: 'review the questions you skipped. Were they genuinely harder, or merely unfamiliar?' },
              { text: 'Net gain from guessed questions', note: 'under the real deduction for each part.' },
              { text: 'Accuracy decline over the three hours', note: 'a sign that stamina, not knowledge, is the constraint.' },
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
          'CSIR NET preparation — building the problem-solving depth Part C demands, alongside subject revision and aptitude practice.',
        lead: [
          'Prepare for Part C from the beginning. It carries the most marks, and it is the part that subject revision alone does not prepare you for.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most common CSIR NET trajectory is a candidate who revises their postgraduate syllabus thoroughly, scores respectably in Part B, and finds Part C much harder than expected. The reason is that revision builds recognition while Part C tests application, and the two diverge. Solving problems — not reading solved ones — is what closes the gap, and it needs months.',
          },
          {
            type: 'steps',
            title: 'A four to six month plan',
            items: [
              { text: 'Week one — confirm the marking scheme for your subject.', note: 'Questions to attempt, marks per question, deduction rate, per part. Your whole attempt strategy depends on it.' },
              { text: 'Months one to three — subject revision at postgraduate depth.', note: 'From standard texts, with derivations understood rather than accepted.' },
              { text: 'From month one — solve problems daily.', note: 'Not read solutions. Part C rewards the ability to work through an unfamiliar combination of concepts.' },
              { text: 'From month two — past Part C questions specifically.', note: 'They calibrate the depth required better than any syllabus reading.' },
              { text: 'From month two — Part A practice, twice weekly.', note: 'Reasoning and numerical ability. Quick marks that need practice rather than study.' },
              { text: 'Month four — full three-hour papers with selection rules enforced.', note: 'Practising triage as deliberately as content.' },
              { text: 'Throughout — maintain a personal derivation sheet.', note: 'Written by hand, covering what you keep forgetting.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates qualifying candidates',
            items: [
              { text: 'Problem-solving practice rather than revision', note: 'Part C carries the most marks and cannot be recalled into.' },
              { text: 'Knowing the marking scheme precisely', note: 'it varies by part and subject, and shapes every attempt decision.' },
              { text: 'Practising question selection', note: 'an explicit feature of this examination that most candidates never rehearse.' },
              { text: 'Not neglecting Part A', note: 'fast, learnable marks common to every subject.' },
              { text: 'Understanding derivations', note: 'Part C questions frequently require working through something you have not memorised.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'CSIR NET study material — general aptitude notes for Part A, with guidance on postgraduate texts for the subject parts.',
        lead: [
          'Parts B and C need the standard texts of your own discipline. These notes support Part A.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the subject parts, standard postgraduate textbooks in your discipline are the correct source — matched in depth and framing to what Parts B and C ask, and carrying the derivations that Part C problems build on. Competitive-exam digests compress out exactly the reasoning this examination tests.',
          },
          {
            type: 'links',
            title: 'Notes supporting Part A and subject fundamentals',
            items: [
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Quantitative aptitude and data interpretation', to: '/study-material/quantitative-aptitude/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
            ],
          },
          {
            type: 'list',
            title: 'How to study for a problem-solving paper',
            items: [
              'Solve before reading solutions — a solution you have read is not a problem you can do.',
              'Work derivations by hand rather than accepting results.',
              'Maintain one derivation and formula sheet per subject area, written by you.',
              'Do past Part C questions continuously rather than as a final block.',
              'Practise Part A twice a week; it needs repetition rather than depth.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CSIR NET exam pattern?',
        a: 'A single three-hour paper of 200 marks divided into three parts. Part A is a general aptitude section common to all five subjects, covering logical reasoning, graphical analysis, numerical ability and puzzles. Part B has conventional subject questions at postgraduate level. Part C has higher order questions testing application and scientific reasoning, and carries the largest share of the marks. Each part evaluates a specified number of questions from a larger set, and negative marking applies at rates that vary by part and by subject.',
      },
      {
        q: 'How is CSIR NET different from UGC NET?',
        a: 'CSIR NET covers the five science subjects — chemical, earth, life, mathematical and physical sciences — while UGC NET covers the humanities, social sciences, commerce and allied disciplines. Structurally, CSIR NET has a three-part paper with ascending difficulty and a small general aptitude component, whereas UGC NET has a full hundred-mark aptitude paper alongside the subject paper. Critically, CSIR NET has negative marking and UGC NET does not, which changes attempt strategy entirely.',
      },
      {
        q: 'Why is CSIR NET Part C so important?',
        a: 'It carries the largest share of the marks and it tests something subject revision does not build. Part B asks whether you know the discipline; Part C asks whether you can use it, typically combining two or three concepts in a problem that requires derivation or multi-step reasoning rather than recall. Two candidates with identical factual knowledge can score very differently here, which is why solving problems — not reading solved ones — should run through the whole preparation rather than being left to the end.',
      },
      {
        q: 'Can I choose which CSIR NET questions to attempt?',
        a: 'Yes, and this is an explicit feature of the examination rather than an accident. Each part specifies a maximum number of questions that will be evaluated, drawn from a larger set, so you decide where to spend a limited attempt budget. That makes triage a genuine skill worth rehearsing under timed conditions, since a candidate who spends the budget on questions that resist them scores worse than one who selects well.',
      },
      {
        q: 'What can I do after qualifying CSIR NET?',
        a: 'Depending on your score against separately set cutoffs, you may qualify for the Junior Research Fellowship, which funds doctoral research; for lectureship eligibility, which permits you to apply for Assistant Professor positions; or for admission to a doctoral programme. As with UGC NET, lectureship eligibility is a precondition for applying rather than an appointment — institutions run their own recruitment processes.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     State TET
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'state-tet',
    path: '/government-exams/teaching-net/state-tet/',
    name: 'State TET',
    fullName: 'State Teacher Eligibility Tests',
    authority: 'State education departments and examination boards',
    official: 'Varies by state — see the conducting board’s website',
    seoTitle: 'State TET 2026: Pattern, Syllabus & How It Differs from CTET',
    metaDescription:
      'State Teacher Eligibility Test guide — common paper structure, state language requirements, how state TETs differ from CTET, and preparation.',
    lead: [
      'Every state conducts its own Teacher Eligibility Test to establish eligibility for teaching appointments in its government and aided schools. The tests follow a common national framework — two papers, one hundred and fifty questions, a pedagogy-led design — but each state sets its own syllabus details, language requirements and qualifying conditions.',
      'That combination is what makes state TETs easy to under-prepare for. A candidate who has studied for CTET is most of the way there on structure and pedagogy, and can still be caught out by the state-specific content and the regional language paper, both of which carry real marks.',
    ],
    quickFacts: [
      ['Conducted by', 'State education departments and their examination boards'],
      ['Papers', 'Paper 1 for classes I–V; Paper 2 for classes VI–VIII'],
      ['Common structure', '150 multiple-choice questions, 150 marks, two and a half hours'],
      ['Negative marking', 'Generally none — but confirm for your state'],
      ['State-specific content', 'Regional language paper and, often, state history, geography and culture'],
      ['Purpose', 'Eligibility for teaching appointments within that state'],
    ],
    overview: [
      {
        type: 'p',
        text: 'State Teacher Eligibility Tests exist because the right to education framework requires teachers at the elementary stage to hold a minimum eligibility qualification, and states conduct their own tests alongside the central one. A state TET certificate establishes eligibility for teaching appointments within that state’s government and aided school system.',
      },
      {
        type: 'p',
        text: 'The structure is broadly common: Paper 1 for those intending to teach classes one to five, Paper 2 for classes six to eight, each of 150 questions across child development and pedagogy, two languages, and the relevant content subjects. What varies is the detail — which languages are offered, how much state-specific content appears, the qualifying percentage, the validity period, and whether the certificate is accepted outside the state.',
      },
      {
        type: 'list',
        title: 'Where state TETs differ from CTET',
        items: [
          { text: 'The regional language paper', note: 'usually one of the two language papers is the state language, and proficiency in it is genuinely required rather than nominal.' },
          { text: 'State-specific content', note: 'many state TETs include the state’s own history, geography, culture and administrative structure within their general content.' },
          { text: 'Recognition', note: 'a state TET certificate is generally recognised for appointments within that state; CTET has wider recognition across central schools.' },
          { text: 'Conducting body and calendar', note: 'each state runs its own cycle, so timings vary and candidates can often sit several.' },
        ],
      },
      {
        type: 'note',
        title: 'Check your state’s specific rules',
        text: 'Qualifying percentages, certificate validity, permitted language combinations, eligibility qualifications and the extent of state-specific content all vary between states and have been revised. The conducting board’s notification for your state is the only reliable source, and a guide written for another state can mislead on all of these.',
      },
    ],
    stages: [
      {
        name: 'Paper 1 — Primary stage (classes I to V)',
        mode: 'Objective, about 2 hours 30 minutes',
        detail:
          'Typically 150 questions for 150 marks: child development and pedagogy, Language I, Language II, mathematics and environmental studies, at 30 questions each. One language is normally the state language.',
      },
      {
        name: 'Paper 2 — Upper primary stage (classes VI to VIII)',
        mode: 'Objective, about 2 hours 30 minutes',
        detail:
          'Typically 150 questions for 150 marks: child development and pedagogy, Language I and Language II at 30 questions each, and a 60-question block in either mathematics and science or social studies, according to the subject you intend to teach.',
      },
      {
        name: 'Certification',
        mode: 'Result',
        detail:
          'Candidates reaching the qualifying standard receive an eligibility certificate valid for teaching appointments in that state, subject to its own validity rules. Appointment requires separate recruitment.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'State TET syllabus — the common pedagogy and content framework, plus the state-specific language and general knowledge components.',
        lead: [
          'The framework is shared with CTET. The state-specific parts are what a CTET-based preparation will miss.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Child Development and Pedagogy',
                'The concept and principles of child development, the influence of heredity and environment, socialisation, the theories of Piaget, Kohlberg and Vygotsky, child-centred and progressive education, intelligence, language and thought, individual differences, inclusive education and learners with special needs, assessment for and of learning, and the learning process including how children think and why they make errors. Common to state TETs and CTET alike.',
              ],
              [
                'Language I — usually the state language',
                'Comprehension in the state language along with its pedagogy — language acquisition and learning, principles of language teaching, listening and speaking, challenges of the diverse classroom, evaluating language proficiency, teaching-learning materials and remedial teaching. Genuine proficiency is expected, not familiarity.',
              ],
              [
                'Language II',
                'Usually English or another language from the state’s permitted list, with comprehension and language pedagogy in the same shape as Language I. The two languages must differ.',
              ],
              [
                'Mathematics and Environmental Studies (Paper 1)',
                'Content at the level of classes one to five — numbers, operations, geometry, measurement, data handling and patterns; and environmental studies covering family, food, shelter, water, travel, plants and animals — each with its pedagogical strand covering the nature of the subject, error analysis, evaluation and remedial teaching.',
              ],
              [
                'Mathematics and Science, or Social Studies (Paper 2)',
                'Content at the level of classes six to eight in the chosen subject block, with the corresponding pedagogy. Social studies in particular frequently includes state-specific history, geography and civics alongside the national content.',
              ],
              [
                'State-specific general knowledge',
                'Many state TETs include the state’s own history, geography, culture, prominent figures and administrative structure. This is the component that a CTET-based preparation will not cover at all.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A candidate preparing for both CTET and a state TET gets most of the way with one preparation, since child development and pedagogy, subject pedagogy and the content levels are shared. The additions required are the state language paper and the state-specific content — both worth identifying early rather than discovering in the examination hall.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'State TET exam pattern — the common two-paper structure, qualifying marks, validity and the state variations to check.',
        lead: [
          'A shared framework with state-level variation. The framework you can prepare for generally; the variation you must confirm locally.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The typical structure. Confirm question counts, marks, timing, negative marking and qualifying percentage against your state’s notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Child Development and Pedagogy', '30', '30', 'Compulsory in both papers'],
              ['Language I', '30', '30', 'Usually the state language'],
              ['Language II', '30', '30', 'Must differ from Language I'],
              ['Content subjects', '60', '60', 'Two subjects of 30 in Paper 1; one 60-question block in Paper 2'],
              ['Total', '150', '150', 'About 2 hours 30 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'Most state TETs follow CTET in applying no negative marking, which makes attempting every question strictly correct. But this is one of the details that varies, and a candidate who assumes it without checking is taking an avoidable risk. Confirm it in your state’s notification.',
          },
          {
            type: 'list',
            title: 'The variations to check for your state',
            items: [
              { text: 'Qualifying percentage and category relaxations', note: 'the threshold and the relaxations available differ between states.' },
              { text: 'Certificate validity', note: 'the period for which the certificate remains valid varies and has been revised in several states.' },
              { text: 'Permitted language combinations', note: 'which languages may be taken as Language I and Language II.' },
              { text: 'Eligibility qualifications', note: 'the teacher education qualifications accepted, which are not identical across states.' },
              { text: 'Negative marking', note: 'usually absent, but worth confirming rather than assuming.' },
            ],
          },
          {
            type: 'note',
            title: 'Recognition is generally state-bound',
            text: 'A state TET certificate is normally recognised for teaching appointments within that state. CTET has wider recognition, particularly for central government schools. Candidates who may move between states, or who are interested in central schools, often sit both.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'State TET previous year papers — identifying the state-specific content and pedagogy question style for your particular state.',
        lead: [
          'Use your own state’s past papers. They are the only source that shows how much state-specific content actually appears and in what form.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The generic advice — that TET papers are pedagogy-led and that content sits at the class level you will teach — is true everywhere. What is not generic is how much state history, geography and culture appears, how demanding the state language paper is, and how the pedagogy questions are framed. Only your own state’s past papers answer those questions.',
          },
          {
            type: 'steps',
            title: 'A method for state TET papers',
            items: [
              { text: 'Work at least three years of your own state’s papers.', note: 'Before using CTET papers as supplementary practice.' },
              { text: 'Count the state-specific questions.', note: 'It tells you how much preparation that component actually deserves.' },
              { text: 'Assess the language paper honestly.', note: 'If the state language paper is harder than you expected, that is the finding that most changes your plan.' },
              { text: 'Use CTET papers for extra pedagogy practice.', note: 'The pedagogy framework is shared, so CTET papers are good supplementary material once your state’s are exhausted.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CTET exam guide', to: '/government-exams/teaching-net/ctet/' },
              { label: 'CTET free mock test', to: '/mock-tests/ctet/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'State government exams', to: '/government-exams/state/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'State TET mock tests — practising the shared framework with CTET material, plus state-specific and language preparation.',
        lead: [
          'CTET mocks cover the shared framework well. The state language paper and state-specific content need their own practice.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because child development and pedagogy, subject pedagogy and the content levels are common across TETs, CTET mock practice transfers almost completely. What it cannot give you is practice in the state language paper or the state-specific general knowledge, and those together can be a substantial share of a state TET paper.',
          },
          {
            type: 'list',
            title: 'A practical practice plan',
            items: [
              { text: 'Use CTET mocks for pedagogy and content', note: 'the framework is shared and the practice transfers directly.' },
              { text: 'Practise the state language paper separately', note: 'comprehension and language pedagogy in that language, from your state’s past papers.' },
              { text: 'Build a state general knowledge sheet', note: 'history, geography, culture and administration of your state, revised weekly.' },
              { text: 'Attempt every question in practice', note: 'assuming no negative marking, once you have confirmed that for your state.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'CTET free mock test', to: '/mock-tests/ctet/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'State TET preparation — combining CTET-shared preparation with state language and state-specific content work.',
        lead: [
          'Prepare the shared framework once and add the state-specific layer. Many candidates sit both CTET and their state TET on one preparation.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The efficient approach is to treat CTET and your state TET as one project with an extension. Child development and pedagogy, subject pedagogy and content at the relevant class levels are common; the state language paper and state-specific content are the addition. Prepared this way, a candidate can sit both and hold two certificates from little more than the effort of one.',
          },
          {
            type: 'steps',
            title: 'A two to three month plan',
            items: [
              { text: 'Week one — read your state’s notification fully.', note: 'Qualifying percentage, validity, language combinations, eligibility qualifications and negative marking. All vary.' },
              { text: 'Weeks one to three — child development and pedagogy.', note: 'Shared with CTET, and the foundation of the whole paper.' },
              { text: 'Weeks two to six — content at the relevant class level, with pedagogy.', note: 'Up to class five for Paper 1, class eight for Paper 2.' },
              { text: 'Weeks two to eight — the state language paper.', note: 'Comprehension and language pedagogy. Genuine proficiency is expected, so start early if the language is not your strongest.' },
              { text: 'Weeks four to eight — state-specific general knowledge.', note: 'History, geography, culture and administration of your state, built into a revision sheet.' },
              { text: 'Weeks six to ten — past papers, your state’s first.', note: 'Then CTET papers as supplementary pedagogy practice.' },
              { text: 'Final weeks — full timed mocks, every question answered.', note: 'Assuming no negative marking, once confirmed.' },
            ],
          },
          {
            type: 'list',
            title: 'What candidates miss',
            items: [
              { text: 'The state language paper', note: 'thirty marks requiring genuine proficiency, and often the weakest area for candidates schooled in another medium.' },
              { text: 'State-specific general knowledge', note: 'entirely absent from CTET-oriented material.' },
              { text: 'Pedagogy, in favour of content', note: 'the same error as in CTET, and equally costly here.' },
              { text: 'Assuming rules from another state', note: 'qualifying marks, validity and language rules all vary.' },
              { text: 'Assuming the certificate is an appointment', note: 'it establishes eligibility; recruitment is separate.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'State TET study material — pedagogy, mathematics, science and social studies notes, plus guidance on state-specific preparation.',
        lead: [
          'Shared pedagogy and content notes, with state-specific material built from your own state’s sources.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The notes below cover the content and pedagogy shared across all TETs. For the state-specific component, the practical sources are your state board’s textbooks — which often carry the state history, geography and culture directly — together with past papers from your own state’s TET.',
          },
          {
            type: 'links',
            title: 'Notes for the shared framework',
            items: [
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Environment notes', to: '/study-material/environment/' },
              { label: 'History notes', to: '/study-material/history/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'For the state-specific layer',
            items: [
              'Use your state board’s textbooks for state history, geography and culture.',
              'Build one revision sheet of state facts — districts, rivers, figures, festivals, administrative structure.',
              'Read in the state language daily if it is not your strongest, for the comprehension section.',
              'Work your own state’s past papers before any national material.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the State TET exam pattern?',
        a: 'Most state Teacher Eligibility Tests follow a common framework: Paper 1 for teaching classes one to five and Paper 2 for classes six to eight, each with 150 multiple-choice questions for 150 marks in about two and a half hours. The sections are child development and pedagogy, Language I, Language II, and the content subjects — mathematics and environmental studies in Paper 1, or a 60-question mathematics and science or social studies block in Paper 2. Question counts, timings, qualifying percentages and negative marking vary by state, so confirm in your state’s notification.',
      },
      {
        q: 'How is a State TET different from CTET?',
        a: 'The framework is shared, but three things differ. One of the language papers is usually the state language, and genuine proficiency is expected rather than familiarity. Many state TETs include state-specific history, geography, culture and administrative content that CTET does not. And recognition differs — a state TET certificate is generally valid for appointments within that state, while CTET has wider recognition, particularly for central government schools.',
      },
      {
        q: 'Can I prepare for CTET and a State TET together?',
        a: 'Yes, and it is the efficient approach. Child development and pedagogy, subject pedagogy and content at the relevant class levels are common to both, so one preparation covers most of the ground. The additions are the state language paper and the state-specific general knowledge, which need their own work. Prepared this way, a candidate can sit both and hold two certificates for little more than the effort of one.',
      },
      {
        q: 'Is there negative marking in State TET?',
        a: 'Most state TETs follow CTET in applying no negative marking, which would mean attempting every question is strictly correct. However, this is one of the details that varies between states, and assuming it without checking is an avoidable risk. Confirm the position in your state’s notification, along with the qualifying percentage, certificate validity and permitted language combinations, all of which also vary.',
      },
      {
        q: 'Does a State TET certificate get me a teaching job?',
        a: 'No. Like CTET, it is a qualifying examination that establishes eligibility to be appointed as a teacher within that state’s school system. Actual appointment requires applying to the relevant recruitment process run by the state education department or the schools concerned, each of which has its own selection procedure. The certificate is a precondition for applying rather than an outcome in itself.',
      },
    ],
  },
]

export default teaching
