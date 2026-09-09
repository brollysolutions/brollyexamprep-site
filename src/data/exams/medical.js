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
          {
            type: 'list',
            title: 'How closely each subject tracks NCERT',
            items: [
              { text: 'Biology — very closely indeed', note: 'a large share of questions can be traced to specific lines, diagrams, tables and even chapter summaries. Reading it once for understanding is not enough; the level of recall the paper expects is close to the level of the text itself.' },
              { text: 'Inorganic chemistry — almost as closely', note: 'trends, exceptions and specific facts are drawn from NCERT with little embellishment, which makes it among the most reliably scoreable material in the paper.' },
              { text: 'Organic and physical chemistry — NCERT as the base', note: 'the concepts and mechanisms come from NCERT, but the questions require applying them to unfamiliar cases, so problem practice is needed on top of the reading.' },
              { text: 'Physics — NCERT for scope, not for practice', note: 'the syllabus is NCERT’s, and the questions demand problem-solving the textbook does not train. This is the subject where additional problem sources are genuinely necessary.' },
            ],
          },
          {
            type: 'p',
            text: 'That asymmetry explains a common and expensive confusion. A candidate told that NCERT is everything applies the advice uniformly, reads physics from NCERT alone, and arrives able to state every principle and unable to solve a problem under time. The advice is close to literally true in biology and inorganic chemistry, roughly true in the rest of chemistry, and substantially false in physics.',
          },
          {
            type: 'note',
            title: 'Read the diagrams and captions, not just the prose',
            text: 'In biology particularly, questions are drawn from labelled diagrams, tables, boxed asides and chapter summaries as readily as from the running text. Candidates who read NCERT as continuous prose and skim the visual material leave a meaningful part of the most heavily weighted subject unread.',
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
          {
            type: 'p',
            text: 'Rank compression is the fact that gives the marking scheme its bite. Because an enormous number of candidates sit this paper and the syllabus is well defined, scores cluster tightly at the top — a handful of marks can separate rank bands that lead to very different colleges. That changes what an error costs: not simply four marks plus one, but a movement in rank that a comparably hard question left unattempted would not have caused.',
          },
          {
            type: 'defs',
            items: [
              [
                'Where the four-to-one ratio pays',
                'A guess narrowed to two options has clearly positive expected value and should be taken. A guess narrowed to three is marginally positive. A blind guess across four breaks even in the abstract and loses in practice, because the distractors are designed to attract the half-informed.',
              ],
              [
                'Why biology deserves its share of the time',
                'Half the paper and the most reliably scoreable half, because it rewards thorough reading rather than problem-solving ability. A candidate who secures biology has secured the largest and steadiest block of marks available.',
              ],
              [
                'Why physics is the differentiator',
                'It is where scores vary most between candidates and where a marginal hour of practice moves a rank furthest. Precisely because it is nobody’s comfortable subject, it is where the field separates.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Confirm the section rules for your cycle',
            text: 'NEET has at times offered optional questions within each subject and has at times used a different duration. Those rules affect how you plan the paper — whether there is any choice to exercise, and how many minutes each subject actually gets — so read the current information bulletin rather than a description written for an earlier year.',
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
          {
            type: 'list',
            title: 'What tracing questions back to NCERT teaches',
            items: [
              { text: 'How literally the text is examined', note: 'once you have traced fifty biology questions to their source lines, the instruction to read NCERT properly stops being advice and becomes obvious.' },
              { text: 'Which parts of the text carry weight', note: 'certain chapters and certain kinds of content — classifications, exceptions, named examples, labelled structures — supply questions far out of proportion to their length.' },
              { text: 'What level of detail is expected', note: 'the difference between knowing a process and knowing the specific enzyme, the specific stage, the specific figure. Past papers set that calibration precisely.' },
              { text: 'Where NCERT is not enough', note: 'the physics questions will not trace back, which is itself the finding — it tells you where additional problem sources are required.' },
            ],
          },
          {
            type: 'p',
            text: 'For physics, build a chapter frequency table instead and let it order your problem practice. The syllabus gives no weighting, and past papers show a clear concentration — mechanics, electrodynamics and modern physics between them supplying a large share. A candidate short of time should be practising in that order rather than working through the syllabus as printed.',
          },
          {
            type: 'p',
            text: 'Organic chemistry repays a different treatment again: collect the reaction and mechanism patterns rather than the questions. Across several years the same conversions, the same named reactions and the same reasoning about stability and selectivity recur in different clothing. A pattern sheet built from past papers is more useful than any number of solved questions, because what transfers is the recognition rather than the instance.',
          },
          {
            type: 'note',
            title: 'Log careless errors as their own category',
            text: 'In a rank-compressed examination, the marks lost to misreading a question, misbubbling an answer or dropping a sign are worth more attention than the marks lost to genuinely hard questions. Keep them in a separate list from knowledge gaps, because they have a different and much cheaper remedy.',
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
          {
            type: 'steps',
            title: 'A mock routine built around accuracy',
            items: [
              { title: 'Full length, on paper, with an answer sheet', text: 'Two hundred minutes in one sitting. NEET is a pen-and-paper examination and bubbling is part of the task, including the time it takes and the errors it invites.' },
              { title: 'Count careless errors before anything else', text: 'Questions you knew and got wrong. This number, not the score, is the one that predicts how much rank you are leaving on the table.' },
              { title: 'Check time per subject', text: 'Biology should be fastest and physics slowest. If biology is consuming a disproportionate share, the reading has not gone deep enough to make recall quick.' },
              { title: 'Review unattempted questions', text: 'Were they genuinely beyond you, or did you run out of time? The two findings point in opposite directions.' },
              { title: 'Fix one thing before the next mock', text: 'A chapter, or a habit. A mock taken without an intervening change re-measures the same candidate a week later.' },
            ],
          },
          {
            type: 'p',
            text: 'The bubbling mechanics deserve genuine rehearsal rather than a mention. Candidates lose marks every year to answers filled in the wrong row after skipping a question, to incomplete shading, and to the time cost of transferring answers in a rush at the end. Deciding in advance whether you bubble as you go or in blocks, and practising that decision, removes an entire category of avoidable loss.',
          },
          {
            type: 'note',
            title: 'Biology accuracy is the steadiest predictor',
            text: 'Because it is half the paper and rewards thorough reading rather than problem-solving under pressure, biology accuracy tends to be the most stable number across a candidate’s mocks. A biology score that fluctuates is usually a sign that the NCERT reading is not yet deep enough to be reliable under examination conditions.',
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
          {
            type: 'defs',
            items: [
              [
                'Biology — a revision cycle, not a reading',
                'Half the paper, largely factual, and impossible to hold from a single pass. Build a cycle that returns to each chapter several times across the preparation rather than reading the book thoroughly once and hoping it stays.',
              ],
              [
                'Physics — problems, daily, from the start',
                'The subject that separates candidates and the one that cannot be read into competence. Reading solved physics builds recognition; solving builds the ability to set up an unfamiliar problem under time.',
              ],
              [
                'Chemistry — split by branch',
                'Inorganic from NCERT as near-literal reading, organic through pattern practice, physical through problems. Treating chemistry as one subject with one method under-serves at least two of its three parts.',
              ],
              [
                'Accuracy — a discipline in its own right',
                'In the final months, reducing careless errors is worth more rank than covering additional material. It deserves explicit attention rather than being left to improve on its own.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Class 11 retention is the quiet failure in two-year preparations. Roughly half the paper comes from the first year of the curriculum, and it decays steadily while class 12 material is being covered — most visibly in biology, where the volume of factual detail is largest. A weekly slot for class 11 revision throughout class 12 costs a few hours a month and protects a very large share of the paper.',
          },
          {
            type: 'note',
            title: 'The final two months belong to revision and accuracy',
            text: 'New material started in the last eight weeks rarely reaches the reliability at which it produces marks under pressure, and the time it consumes comes out of the revision cycle and the mock analysis that reliably would. By that stage the productive work is repeated biology revision, physics problem practice, mocks and error correction.',
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
          {
            type: 'defs',
            items: [
              [
                'NCERT biology — the primary text, read repeatedly',
                'Not a starting book but very nearly the examination itself. Diagrams, tables, captions, boxed asides and chapter summaries all included, and revisited on a cycle rather than read once.',
              ],
              [
                'NCERT chemistry — with problem practice attached',
                'Inorganic close to literal, organic and physical as the conceptual base for problems worked elsewhere. The reading is necessary and, for two of the three branches, not sufficient.',
              ],
              [
                'A physics problem source — genuinely necessary',
                'The one place where NCERT alone will not carry a candidate. Choose one demanding problem book and finish it rather than sampling several.',
              ],
              [
                'An error log — the document you revise from at the end',
                'Split by cause: careless, half-known, unknown. It is short, specific to you, and by the final month it is more useful than any textbook.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A word on how much material to own. NEET candidates accumulate books readily, and the accumulation itself becomes a problem — three partially worked physics sources leave three incomplete libraries of problem types where one finished source worked twice would have left a complete one. Choose one supplementary book per subject, finish it, and only then consider whether another is needed.',
          },
          {
            type: 'note',
            title: 'Revise biology on a fixed schedule',
            text: 'A cycle that returns to each chapter at planned intervals — a few days after first study, then a few weeks, then again in the final months — holds factual material far better than any amount of thorough single reading. For half a paper drawn from a largely factual subject, the schedule matters as much as the source.',
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
          {
            type: 'list',
            title: 'Reading the syllabus as a weighting problem',
            items: [
              { text: 'The major clinical subjects carry the paper', note: 'medicine, surgery, obstetrics and gynaecology, and paediatrics between them supply the largest share of questions, and they are also the subjects most candidates are still using clinically.' },
              { text: 'The para-clinical subjects are the most question-dense per hour', note: 'pathology, pharmacology and microbiology reward systematic revision more directly than the clinical subjects do, and they are where a candidate short of time often gains most.' },
              { text: 'The short clinical subjects are collectively significant', note: 'ophthalmology, ENT, dermatology, psychiatry, orthopaedics, anaesthesia and radiology are individually small and quick to cover, and together they represent a meaningful block that is routinely left to last and then left undone.' },
              { text: 'The pre-clinical subjects are foundational rather than heavy', note: 'anatomy, physiology and biochemistry supply fewer questions directly but underpin the clinical reasoning the paper rewards.' },
            ],
          },
          {
            type: 'p',
            text: 'The practical planning consequence is to start where the return per hour is highest rather than where the marks are heaviest. The para-clinical subjects and the short clinical ones are finite, systematically revisable and frequently under-prepared, which makes them a better place to begin than medicine — a subject you will be revising continuously anyway and that will absorb any amount of time you give it.',
          },
          {
            type: 'note',
            title: 'Community medicine and current guidelines earn their place',
            text: 'National health programmes, biostatistics and epidemiology supply a reliable set of questions, and awareness of updated clinical guidance appears regularly. Both are learnable from defined sources, and both are commonly skipped by candidates concentrating on the major clinical subjects.',
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
          {
            type: 'p',
            text: 'The five-mark swing is the number to internalise. A correct answer earns four and a wrong one costs one, so the difference between answering correctly and answering wrongly is five marks — while the difference between answering wrongly and leaving it blank is only one. That asymmetry means the question is rarely whether to guess but whether you have narrowed enough for the guess to be better than even, and in a paper of two hundred questions those decisions compound quickly.',
          },
          {
            type: 'defs',
            items: [
              [
                'What time-bound sections change',
                'Where they are used, a section closes and cannot be revisited. That removes the second pass entirely, which means every question must be settled when you meet it. A candidate who habitually flags and returns has to unlearn that habit before the examination rather than discover it during one.',
              ],
              [
                'Why the vignette rewards full reading',
                'Clinical questions are built around one distinguishing detail, and it is frequently in the final line — the age, the duration, a single laboratory value. Skimming to the question and back is the characteristic way of getting a question wrong that you knew the answer to.',
              ],
              [
                'What just over a minute per question means',
                'Little time for a case-based question, which makes recognition speed rather than reasoning speed the binding constraint. Question practice builds that; reading does not.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Understand counselling before the result',
            text: 'Seat allotment runs through multiple rounds of all-India and state counselling, each with its own registration windows, choice-filling rules, and consequences for resigning or holding a seat. Candidates lose seats to procedural errors every cycle, and the rules are considerably easier to learn in the months before the examination than in the days after a result.',
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
          {
            type: 'list',
            title: 'A method for reading a clinical vignette',
            items: [
              { text: 'Find the distinguishing detail before you look at the options', note: 'the age, the duration, the one abnormal value, the exposure history. Deciding what the question hinges on before seeing the choices prevents the options from steering your reasoning.' },
              { text: 'Name the diagnosis or the principle', note: 'then check which option matches. Reading the options first invites you to reason backwards from a plausible-sounding answer.' },
              { text: 'Notice what the question actually asks', note: 'the most likely diagnosis, the next investigation, the definitive management and the most appropriate initial step are four different questions about the same vignette.' },
              { text: 'Read the last line twice', note: 'it frequently carries the detail that separates two otherwise identical presentations.' },
            ],
          },
          {
            type: 'p',
            text: 'Building a high-yield topic list across several years of papers is worth the afternoon it takes. The same conditions, the same investigations and the same management decisions recur, and a list drawn from the papers themselves is both shorter and better targeted than any published compilation — it reflects what this examination has actually asked rather than what a subject is generally considered to contain.',
          },
          {
            type: 'p',
            text: 'Note the questions where the accepted answer has changed. Clinical guidance is revised, and a question answered one way five years ago may be answered differently now — which makes an old paper a source of both practice and potential error. Where a past answer conflicts with current guidance, the current guidance is what the examination will follow, and noticing those points is itself useful revision.',
          },
          {
            type: 'note',
            title: 'Practise in the current delivery format',
            text: 'Whether sections are time-bound, and whether you can revisit answers, changes how a paper must be attempted. Practising with free navigation and then sitting a time-bound paper is a genuine disadvantage, because the habit of deferring difficult questions has nowhere to go.',
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
          {
            type: 'steps',
            title: 'Making mocks work around clinical duties',
            items: [
              { title: 'Schedule them deliberately, in advance', text: 'A three-and-a-half-hour block will not appear spontaneously in a working week. Put full-length mocks in the calendar or they will not happen.' },
              { title: 'Analyse by subject, not in aggregate', text: 'Across the full MBBS curriculum, a single accuracy figure tells you almost nothing about where to direct revision.' },
              { title: 'Separate misreading from not knowing', text: 'Vignette misreads are a reading-discipline problem with a cheap fix. Treating them as knowledge gaps sends you back to textbooks unnecessarily.' },
              { title: 'Watch the final hour', text: 'Accuracy declining late is a stamina finding, and one that only full-length practice addresses.' },
              { title: 'Count the net effect of your guesses', text: 'With a five-mark swing per question, loose guessing is expensive and disciplined guessing is not. Your own mocks are the only way to see which you are doing.' },
            ],
          },
          {
            type: 'p',
            text: 'Question practice is the primary study method for this examination rather than a way of testing what you have studied, and mocks are the extension of that. An applied clinical paper rewards applied preparation: a candidate who has worked several thousand questions with their explanations read carefully will usually outperform one who has read more and answered less, even where the second candidate knows more in the abstract.',
          },
          {
            type: 'note',
            title: 'Fragmented study needs a sustainable revision cycle',
            text: 'Most candidates prepare during internship or clinical work, in short and irregular blocks. That makes a revision cycle you can actually keep — short, frequent, spaced — far more valuable than an ambitious schedule that collapses in the first busy fortnight. Design for the weeks you will actually have.',
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
          {
            type: 'defs',
            items: [
              [
                'Start with the para-clinical subjects',
                'Pathology, pharmacology and microbiology are question-dense, systematically revisable and finite. They give a working candidate visible progress in the early months, which matters both for the marks and for sustaining the preparation.',
              ],
              [
                'Cover the short clinical subjects deliberately',
                'Ophthalmology, ENT, dermatology, psychiatry, orthopaedics, anaesthesia and radiology. Each is quick; collectively they are significant; and they are the subjects most reliably left undone by candidates who intend to get to them later.',
              ],
              [
                'Keep the major clinical subjects running continuously',
                'Medicine, surgery, obstetrics and gynaecology, and paediatrics will absorb any time you give them. They belong in the schedule throughout rather than in a block, and clinical work itself contributes to them.',
              ],
              [
                'Build a revision cycle you can sustain',
                'The curriculum is far too large to hold from one pass. What matters is not the ambition of the schedule but whether it survives a busy month.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The genuine difficulty of this examination is logistical rather than intellectual. Candidates preparing during internship or residency have irregular hours, fatigue and no long uninterrupted blocks — which means the preparation that works is the one designed for fifteen-minute fragments and occasional longer sessions, built on question practice that can be picked up and put down, rather than on reading that requires continuity.',
          },
          {
            type: 'note',
            title: 'Keep current with guideline changes',
            text: 'Management questions follow current clinical guidance, and guidance is revised. A candidate revising from a source several years old will answer some questions the way they were answered then rather than the way they are answered now — a small category, entirely avoidable, and disproportionately annoying to lose marks to.',
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
          {
            type: 'defs',
            items: [
              [
                'One standard text per subject — chosen and kept',
                'The accumulation problem is acute at this level, because there are many good resources and no natural stopping point. One source per subject, worked through and revised, beats several sampled — and switching sources mid-preparation loses the annotations and familiarity that make revision fast.',
              ],
              [
                'A question bank as the primary study method',
                'Worked systematically rather than as testing. The explanations are the teaching material, and reading them carefully is where most of the learning in this preparation actually happens.',
              ],
              [
                'An error log by subject and cause',
                'Across nineteen subjects, an unstructured list of wrong answers is unusable. Organised by subject and by cause — not known, half known, misread — it becomes the document your revision cycle is built from.',
              ],
              [
                'A current guidelines source, checked periodically',
                'Small in volume, regularly examined, and the one component that goes out of date while you are preparing.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Design the revision schedule for fragmented time rather than for ideal conditions. Short, frequent, spaced returns to a subject hold clinical detail considerably better than occasional long sessions, and they fit the reality of preparing alongside clinical duties. A schedule that assumes three-hour evenings will fail in the first busy week and take the preparation’s momentum with it.',
          },
          {
            type: 'note',
            title: 'Full-length mocks will not happen by themselves',
            text: 'Everything else in this preparation can be done in fragments, which is precisely why the one component that cannot — a three-and-a-half-hour paper in one sitting — needs to be scheduled explicitly. Candidates who intend to fit mocks in where they can generally arrive having sat very few.',
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
          {
            type: 'list',
            title: 'Where the additional depth actually shows',
            items: [
              { text: 'Pre-clinical subjects probed further', note: 'anatomy, physiology and biochemistry are examined beyond the level a NEET PG summary covers, and questions frequently turn on mechanism rather than on association.' },
              { text: 'Para-clinical detail', note: 'pathology, pharmacology and microbiology reward textbook-level knowledge — specific values, specific mechanisms, specific exceptions — rather than the high-yield version of the same topic.' },
              { text: 'Community medicine and biostatistics', note: 'more prominent than in NEET PG, and drawn from defined material that most candidates have not revisited since their undergraduate course.' },
              { text: 'Recent advances and guidelines', note: 'consistently represented, which makes currency a preparation requirement rather than a bonus.' },
            ],
          },
          {
            type: 'p',
            text: 'The useful way to describe the difference is that NEET PG rewards knowing the topic and INI-CET rewards knowing the topic one layer further in. The subjects are identical and the syllabus is the same MBBS curriculum — which means the adjustment is a change of source rather than an addition of scope. Upgrading from summaries to standard texts in the subjects where you are already competitive does more than adding new subjects ever will.',
          },
          {
            type: 'note',
            title: 'Twice a year, for the January and July sessions',
            text: 'The two annual cycles change how the examination should be approached. An early attempt is genuine calibration rather than a decisive event, and the interval between cycles is long enough to act on what the first one exposed — an advantage that an annual examination cannot offer and that candidates routinely leave unused.',
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
          {
            type: 'p',
            text: 'The two marking schemes reward genuinely opposite behaviour, which is why a candidate moving between the examinations must consciously recalibrate. In NEET PG a wrong answer costs five marks relative to a correct one, so the threshold for attempting is high. In INI-CET a wrong answer costs a third of a mark against a full mark for a correct one, so the threshold is low — and a candidate who carries NEET PG caution into an INI-CET hall is systematically leaving positive-value questions unanswered.',
          },
          {
            type: 'defs',
            items: [
              [
                'The arithmetic, made explicit',
                'With one mark for a correct answer and a third deducted for a wrong one, a guess narrowed to three options is clearly positive, a guess between two is strongly positive, and even a blind guess across four is close to neutral. Under that scheme, widespread attempting is not recklessness but arithmetic.',
              ],
              [
                'Why uncertainty is more common here',
                'Because the questions probe deeper, more of them sit at the edge of what you know. That is a feature of the examination rather than a sign of under-preparation, and the correct response is to answer them rather than to treat uncertainty as a reason to skip.',
              ],
              [
                'What just under a minute per question means',
                'Tight for questions asked at this depth. Recognition speed matters, and it comes from having met the detail before rather than from reasoning quickly at the time.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Separate counselling, separate decisions',
            text: 'INI-CET runs its own counselling for the participating institutes, with its own rounds and its own rules about accepting, holding and resigning seats — and decisions taken there can affect your position in the NEET PG process. Candidates sitting both should understand how the two interact before either result arrives.',
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
          {
            type: 'list',
            title: 'A diagnostic to run on your own past-paper attempt',
            items: [
              { text: 'For each question you missed, ask what would have answered it', note: 'if a high-yield summary would have covered it, the gap is coverage. If only a textbook would have, the gap is depth — and that distinction determines what you change.' },
              { text: 'Count how many were recent-advance questions', note: 'they recur reliably, and they are the category no amount of textbook depth addresses. They need a current source instead.' },
              { text: 'Note which subjects the depth gap concentrates in', note: 'usually the ones you prepared from summaries because they were not your strong areas — which is precisely where the upgrade is worth making.' },
              { text: 'Track how many you left blank', note: 'and calculate what attempting them would have been worth under the one-third deduction. The answer is usually uncomfortable.' },
            ],
          },
          {
            type: 'p',
            text: 'Sitting one past paper of each examination early in your preparation is the fastest way to understand the difference between them, and it is more informative than any description. The topics will be familiar from your NEET PG work and the questions will not be, which locates the gap precisely — and locating it early is what allows a preparation to be adjusted rather than repeated.',
          },
          {
            type: 'p',
            text: 'Practise with the correct deduction applied from the first paper. Working INI-CET questions under NEET PG marking trains the wrong attempt threshold, and the threshold is a habit rather than a calculation you will perform in the hall. A candidate who has practised a hundred questions under a one-third deduction attempts appropriately by instinct; one who has not will hesitate.',
          },
          {
            type: 'note',
            title: 'Use INI-CET papers specifically, not only NEET PG ones',
            text: 'They are fewer and they are the only source that demonstrates this examination’s characteristic depth and phrasing. Candidates preparing for both often work NEET PG papers exclusively on the reasonable assumption that the syllabus is shared — and arrive having never practised the paper they find harder.',
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
          {
            type: 'steps',
            title: 'What an INI-CET mock should tell you',
            items: [
              { title: 'Your attempt rate, first', text: 'Under this marking scheme it should be high. A large number of blanks is the characteristic error of a NEET PG-trained candidate and the cheapest thing to fix.' },
              { title: 'The net value of your guesses', text: 'Calculate what the questions you guessed actually earned or cost. Under a one-third deduction, disciplined guessing should be gaining you marks.' },
              { title: 'What the blanks were worth', text: 'Estimate the expected value of the questions you left. Seeing that number once generally changes the behaviour permanently.' },
              { title: 'Accuracy by subject', text: 'To find where your preparation depth stops reaching. Those subjects are where the source upgrade should happen.' },
              { title: 'Whether errors reflect depth or carelessness', text: 'Depth errors need better material; careless ones need reading discipline. The remedies do not overlap.' },
            ],
          },
          {
            type: 'p',
            text: 'The attempt rate is the headline metric for this examination in a way it is not for any other on this site. Candidates arriving from NEET PG preparation routinely leave twenty or thirty questions unanswered out of habit — and under a one-third deduction those blanks represent a straightforward loss, since even weakly informed answers carry positive expected value. Tracking the number explicitly, mock after mock, is what changes it.',
          },
          {
            type: 'note',
            title: 'Practise the full three hours',
            text: 'Two hundred questions at this depth in three hours is a genuine stamina demand, and accuracy in the final hour is where it shows. Candidates preparing in fragments around clinical duties need to schedule full-length practice deliberately, because it is the one component that fragmented study cannot approximate.',
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
          {
            type: 'defs',
            items: [
              [
                'Upgrade sources rather than add subjects',
                'The syllabus is the same MBBS curriculum. What INI-CET asks for is depth within it, which means moving from high-yield summaries to standard texts — starting with the subjects where you are already competitive, since that is where the extra layer converts into marks fastest.',
              ],
              [
                'Recalibrate the guessing threshold deliberately',
                'The marking scheme is materially gentler than NEET PG’s. That is a change in behaviour rather than in knowledge, and it has to be practised rather than merely understood.',
              ],
              [
                'Keep current',
                'Recent advances and updated guidance appear consistently, and no textbook is current enough on its own. A regularly checked source for guideline changes is a small, specific addition with a reliable return.',
              ],
              [
                'Use both cycles',
                'Two sessions a year means an early attempt costs a fee and a day and returns an accurate diagnosis. The interval afterwards is where the improvement happens.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The efficient plan for a candidate sitting both examinations is one preparation with an INI-CET layer, not two preparations. NEET PG work builds the coverage; the additional layer is depth in selected subjects, currency on guidelines, INI-CET-specific past papers, and the recalibrated attempt threshold. Building two parallel preparations for the same curriculum duplicates months of effort for no additional coverage.',
          },
          {
            type: 'note',
            title: 'Track the two counselling processes separately',
            text: 'INI-CET and NEET PG run distinct counselling with distinct rounds, timelines and rules — and a decision in one can constrain your options in the other. Understanding both before either result arrives is worth an evening, and it prevents choices made in a hurry that are difficult to unwind.',
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
          {
            type: 'defs',
            items: [
              [
                'Standard textbooks — the depth source',
                'At least in the subjects where you are already competitive, since that is where an additional layer converts into marks most reliably. Summaries cover the topics INI-CET asks about; textbooks cover the level at which it asks about them.',
              ],
              [
                'A question bank worked under the correct deduction',
                'Practising with the one-third deduction applied from the beginning, so that the attempt threshold becomes instinct rather than arithmetic performed under pressure.',
              ],
              [
                'A current-advances source, checked regularly',
                'Small, specific and consistently examined. It is the one component that no textbook supplies and that no amount of depth compensates for.',
              ],
              [
                'INI-CET past papers, kept separate',
                'Fewer than the NEET PG archive and the only material that demonstrates this examination’s characteristic phrasing and depth. Worth reserving some for late practice rather than working through them all early.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Choosing where to upgrade is a real decision rather than an instruction to read everything at textbook depth, which is not achievable alongside clinical work. The productive rule is to deepen the subjects you are already strong in — where you are competing near the top of the field and where the extra layer separates you — and to keep summary-level coverage in the subjects where you are still building basic competence.',
          },
          {
            type: 'note',
            title: 'Track attempt rate as a headline number in every mock',
            text: 'Not as one metric among several. For this examination specifically, the gap between a candidate’s knowledge and their score is most often an attempt-rate gap rather than a knowledge gap, and putting the number at the top of your mock log is what keeps it visible enough to correct.',
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
