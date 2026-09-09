/**
 * Railway exams — /government-exams/railways/
 *
 * Five recruitments run by the Railway Recruitment Boards. They share a
 * negative marking rate of one third of a mark, which is harsher than the SSC
 * quarter and materially changes guessing arithmetic — that is stated on every
 * pattern page here rather than assumed.
 *
 * The other thing candidates routinely miss is that railway recruitment
 * involves a normalisation step across shifts, and a medical classification
 * that can disqualify a candidate after every written stage has been cleared.
 */

const railways = [
  /* ══════════════════════════════════════════════════════════════
     RRB NTPC
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'rrb-ntpc',
    path: '/government-exams/railways/rrb-ntpc/',
    name: 'RRB NTPC',
    fullName: 'Railway Recruitment Board — Non-Technical Popular Categories',
    authority: 'Railway Recruitment Boards (RRB)',
    official: 'indianrailways.gov.in',
    seoTitle: 'RRB NTPC 2026: CBT 1 & 2 Pattern, Syllabus, Free Mock Tests',
    metaDescription:
      'RRB NTPC exam guide — CBT 1 and CBT 2 pattern, syllabus, typing and aptitude tests, normalisation, previous papers and free mock tests.',
    lead: [
      'RRB NTPC recruits for the non-technical popular categories across railway zones — Station Master, Goods Train Manager, Junior Clerk, Accounts Clerk, Commercial Apprentice, Traffic Assistant and similar posts. A single process covers both undergraduate-level and graduate-level posts, with candidates applying against the level their qualification permits.',
      'Two things about it are worth knowing before you start. General awareness is the largest section in both computer-based tests, which is unusual among competitive exams and makes a daily current affairs habit unusually valuable. And scores are normalised across shifts, so your raw mark is not the number that decides your result.',
    ],
    quickFacts: [
      ['Conducted by', 'Railway Recruitment Boards (RRB), zone-wise'],
      ['Levels', 'Undergraduate posts (class 12) and graduate posts (bachelor’s degree)'],
      ['Stages', 'CBT 1 → CBT 2 → skill test where applicable → document verification → medical'],
      ['Largest section', 'General awareness, in both computer-based tests'],
      ['Negative marking', 'One third of a mark per wrong answer'],
      ['Scoring', 'Normalised across shifts, so the raw score is not the final score'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Non-Technical Popular Categories recruitment fills the clerical, commercial and operational posts that keep the railway network running — the people who manage stations, schedule goods movement, handle commercial transactions and staff the traffic control functions. Posts are advertised at two qualification levels, and candidates apply against the posts their qualification permits.',
      },
      {
        type: 'p',
        text: 'It is one of the largest recruitments in the country by applicant numbers, which means the process is long: two computer-based tests, a skill test for certain posts, document verification and a medical examination, spread over many months. Planning for that duration is part of preparing for it.',
      },
      {
        type: 'list',
        title: 'Posts filled through RRB NTPC',
        items: [
          { text: 'Graduate-level posts', note: 'Station Master, Goods Train Manager, Chief Commercial cum Ticket Supervisor, Junior Account Assistant cum Typist, Traffic Assistant and similar.' },
          { text: 'Undergraduate-level posts', note: 'Junior Clerk cum Typist, Accounts Clerk cum Typist, Trains Clerk, Commercial cum Ticket Clerk and similar.' },
          { text: 'Posts with a typing requirement', note: 'the clerk cum typist roles require a typing skill test, which is qualifying.' },
          { text: 'Posts with an aptitude test', note: 'Station Master and Traffic Assistant require a computer-based aptitude test with its own qualifying standard.' },
        ],
      },
      {
        type: 'note',
        title: 'Medical standards vary by post',
        text: 'Railway posts are assigned medical classifications, and safety-related roles such as Station Master carry stricter vision requirements than clerical posts. Because a medical disqualification arrives after every written stage has been cleared, it is worth checking the classification for the posts you intend to apply for at the start rather than at the end.',
      },
    ],
    stages: [
      {
        name: 'CBT 1 — First Stage Computer Based Test',
        mode: 'Objective, 90 minutes',
        detail:
          'General awareness, mathematics, and general intelligence and reasoning, for 100 questions and 100 marks. Common to all posts at both qualification levels, and used to shortlist for the second stage. One third of a mark is deducted for each wrong answer.',
      },
      {
        name: 'CBT 2 — Second Stage Computer Based Test',
        mode: 'Objective, 90 minutes',
        detail:
          'The same three subjects at greater depth, for 120 questions and 120 marks. Conducted separately for the different post levels, and the stage whose marks carry the most weight in the merit.',
      },
      {
        name: 'Typing Skill Test or Computer Based Aptitude Test',
        mode: 'Qualifying, post-dependent',
        detail:
          'Clerk cum typist posts require a typing skill test on a computer. Station Master and Traffic Assistant posts require a computer-based aptitude test with a minimum standard in each test battery. Both are qualifying rather than merit-counting.',
      },
      {
        name: 'Document verification and medical examination',
        mode: 'Offline',
        detail:
          'Verification of qualification, category and identity documents, followed by a medical examination against the classification prescribed for the post.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'RRB NTPC syllabus — general awareness, mathematics and reasoning topics for CBT 1 and CBT 2, with the railway-specific general awareness emphasis.',
        lead: [
          'Three subjects across both stages, with general awareness the largest. CBT 2 covers the same ground as CBT 1 at greater depth rather than introducing new subjects.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Awareness',
                'Current events of national and international importance, games and sports, art and culture of India, Indian literature, monuments and places of India, general science and life science up to class 10, history of India and the freedom struggle, physical, social and economic geography of India and the world, Indian polity and governance including the Constitution, general scientific and technological developments including space and nuclear programmes, United Nations and other important world organisations, environmental issues, computer and applications basics, common abbreviations, transport systems in India, Indian economy, famous personalities of India and the world, flagship government programmes, flora and fauna of India, and important government and public sector organisations. The largest section in both stages.',
              ],
              [
                'Mathematics',
                'Number system, decimals and fractions, LCM and HCF, ratio and proportion, percentage, mensuration, time and work, time and distance, simple and compound interest, profit and loss, elementary algebra, geometry and trigonometry, and elementary statistics. Arithmetic dominates; the algebra and trigonometry expected stay at school level.',
              ],
              [
                'General Intelligence and Reasoning',
                'Analogies, completion of number and alphabetical series, coding and decoding, mathematical operations, similarities and differences, relationships, analytical reasoning, syllogism, jumbling, Venn diagrams, puzzles, data sufficiency, statement and conclusion, statement and courses of action, decision making, maps and interpretation of graphs. Both verbal and non-verbal.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Two features of this syllabus reward specific preparation. The general awareness list includes several railway-adjacent themes — transport systems, public sector organisations, government programmes — which appear more often than a general competitive-exam guide would suggest. And the science content sits at class 10 level across physics, chemistry and biology, which is narrow enough to cover completely rather than sample.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'RRB NTPC exam pattern — CBT 1 and CBT 2 structure, one-third negative marking, normalisation across shifts and the skill tests.',
        lead: [
          'Two computer-based tests with the same three subjects, a harsher deduction than most exams apply, and a normalisation step that means your raw score is not your final score.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'CBT 1 structure. Confirm marks, duration and the deduction rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Awareness', '40', '40', 'The largest section — where the exam is most efficiently scored'],
              ['Mathematics', '30', '30', 'Arithmetic-dominant, school level'],
              ['General Intelligence and Reasoning', '30', '30', 'Verbal and non-verbal'],
              ['Total', '100', '100', '90 minutes'],
            ],
          },
          {
            type: 'table',
            caption: 'CBT 2 structure — the same subjects at greater depth. Confirm against the current notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Awareness', '50', '50', 'Again the largest section'],
              ['Mathematics', '35', '35', 'Deeper than CBT 1, still arithmetic-led'],
              ['General Intelligence and Reasoning', '35', '35', 'Deeper puzzles and analytical reasoning'],
              ['Total', '120', '120', '90 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'The deduction is one third of a mark for a wrong answer, which is harsher than the quarter applied in banking and the half-mark-per-two-marks rate in SSC. In practical terms, a blind guess across four options is clearly negative expected value, and even a guess narrowed to two options yields only a modest edge. Disciplined skipping matters more in railway papers than in most.',
          },
          {
            type: 'list',
            title: 'Normalisation, and why your raw score is not your score',
            items: [
              { text: 'Papers run across many shifts and days', note: 'because of the sheer number of candidates, and no two shifts are exactly equal in difficulty.' },
              { text: 'Scores are normalised to account for that', note: 'so a candidate in a harder shift is not penalised for it.' },
              { text: 'The consequence', note: 'the raw mark you calculate after the exam is not the number compared against the cutoff. Comparing raw scores with other candidates across shifts tells you very little.' },
            ],
          },
          {
            type: 'note',
            title: 'Skill tests are qualifying but not optional',
            text: 'Typing skill tests for clerk cum typist posts and computer-based aptitude tests for Station Master and Traffic Assistant carry their own minimum standards. They add nothing to your merit score, but failing them removes you from consideration for those posts. Typing in particular improves gradually and should be practised from the beginning.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'RRB NTPC previous year papers — mining past general awareness sections for the railway and static themes that repeat every cycle.',
        lead: [
          'General awareness is the largest section in both stages, and it is the section past papers help with most, because its themes are remarkably stable.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work through several years of NTPC papers and the general awareness questions cluster into a recognisable set of themes: Indian polity basics, freedom struggle milestones, geography of rivers and states, class-10 science, sports and awards, government schemes, and a recurring seam of railway and transport-related questions. That clustering is the most useful thing past papers offer, because it turns an intimidating syllabus into a finite revision list.',
          },
          {
            type: 'steps',
            title: 'A method for the general awareness section',
            items: [
              { text: 'Extract every general awareness question from four or five years into one document.', note: 'Then sort by theme rather than by year.' },
              { text: 'Count the themes.', note: 'The distribution will be uneven, and the heavy themes are where revision time belongs.' },
              { text: 'Build a one-page revision sheet per theme.', note: 'Revised weekly, these are worth more than a general knowledge book read once.' },
              { text: 'Track which static facts repeat verbatim.', note: 'A surprising number do, across cycles.' },
            ],
          },
          {
            type: 'p',
            text: 'For mathematics and reasoning, past papers serve the ordinary purpose of calibrating difficulty and building speed. Both sections stay at a level that rewards fluency over cleverness, so timed repetition is the productive approach.',
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'RRB NTPC free mock test', to: '/mock-tests/rrb-ntpc/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Free RRB NTPC mock tests on the current CBT pattern with one-third negative marking, scoring and section-wise analysis.',
        lead: [
          'A mock with the wrong deduction rate teaches the wrong guessing habit. Practise with one third of a mark deducted, because that is what the exam applies.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The free RRB NTPC mock on this site follows the current CBT pattern with its actual deduction rate. That matters more than it sounds: candidates who practise on quarter-mark papers develop a guessing threshold calibrated to a gentler penalty, and carry it into an exam that punishes it harder.',
          },
          {
            type: 'steps',
            title: 'Getting value from each attempt',
            items: [
              { text: 'Take general awareness first and fast.', note: 'It is the largest section and pure recall — there is nothing to gain from spending longer on a question you do not know.' },
              { text: 'Count your wrong answers, not just your score.', note: 'At one third of a mark each, a dozen wrong answers is a four-mark loss on top of the marks not gained.' },
              { text: 'Separate "did not know" from "guessed and lost".', note: 'The first is a study problem; the second is a discipline problem, and the second is faster to fix.' },
              { text: 'Do not compare raw scores with other candidates.', note: 'Normalisation across shifts makes cross-shift comparison meaningless.' },
            ],
          },
          {
            type: 'p',
            text: 'If you are applying for a post with a typing or aptitude requirement, build that practice into your weekly routine now rather than after CBT 2. The gap between stages is not reliably long enough to acquire a skill from scratch.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Take the free RRB NTPC mock test', to: '/mock-tests/rrb-ntpc/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Railway exam mock tests', to: '/mock-tests/railways/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'RRB NTPC preparation strategy — weighting general awareness properly, managing a long multi-stage process and preparing for skill tests.',
        lead: [
          'General awareness is the largest section in both stages. Any plan that treats it as revision rather than as a daily subject is mis-weighted from the start.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'In most competitive exams, general awareness is a supporting section and quantitative aptitude is the main event. RRB NTPC inverts that. Across both computer-based tests, general awareness carries ninety of the two hundred and twenty marks available — more than either of the other subjects — and it is the section that responds most reliably to consistent daily effort.',
          },
          {
            type: 'steps',
            title: 'A four to six month plan',
            items: [
              { text: 'From day one — general awareness, forty minutes daily.', note: 'Static themes from one source, current affairs from one daily digest. This is the largest block of marks in the exam.' },
              { text: 'From day one — typing practice, if your target post requires it.', note: 'Fifteen minutes a day. It cannot be built in the gap between stages.' },
              { text: 'Months one to three — mathematics to fluency.', note: 'Arithmetic first, then the school-level algebra, geometry and trigonometry the syllabus specifies.' },
              { text: 'Months one to three — reasoning practice, timed.', note: 'Both verbal and non-verbal; puzzles and series carry much of the section.' },
              { text: 'Month two onwards — class-10 science, systematically.', note: 'A finite, coverable body of content that appears reliably within general awareness.' },
              { text: 'Month four — CBT-format mocks with the correct deduction.', note: 'Twice weekly, with wrong answers logged and classified.' },
              { text: 'Throughout — plan for a long process.', note: 'This recruitment runs over many months. Sustained moderate effort beats intense bursts followed by gaps.' },
            ],
          },
          {
            type: 'list',
            title: 'Where NTPC candidates lose ground',
            items: [
              { text: 'Treating general awareness as secondary', note: 'when it is the largest section in both stages.' },
              { text: 'Guessing at a banking-exam threshold', note: 'the one-third deduction is harsher and demands stricter discipline.' },
              { text: 'Leaving typing until after CBT 2', note: 'a qualifying test that has ended otherwise successful candidacies.' },
              { text: 'Losing momentum during the long gaps between stages', note: 'the process is slow, and preparation decays if it stops.' },
              { text: 'Ignoring the medical classification', note: 'safety posts carry stricter vision standards, and the medical comes last.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'RRB NTPC study material — general awareness, mathematics, reasoning and class-10 science notes matched to the CBT syllabus.',
        lead: [
          'Weighted the way the paper is weighted: general awareness first, mathematics and reasoning as fluency projects.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general knowledge and science notes deserve the largest share of your reading time here, which is unusual advice and follows directly from the mark distribution. Class-10 level science in particular is worth covering completely rather than sampling — it is a bounded body of content that appears reliably, which makes it some of the most predictable marks in the exam.',
          },
          {
            type: 'links',
            title: 'Subject notes for RRB NTPC',
            items: [
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'How to revise a large awareness syllabus',
            items: [
              'Build one-page theme sheets rather than reading a book linearly.',
              'Revise each sheet weekly. Frequency beats depth for recall-based content.',
              'Cover class-10 science completely; it is finite and reliably examined.',
              'Keep current affairs to one source, revisited, rather than several skimmed.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the RRB NTPC exam pattern?',
        a: 'Two computer-based tests covering the same three subjects. CBT 1 has 100 questions and 100 marks in 90 minutes — 40 general awareness, 30 mathematics and 30 general intelligence and reasoning. CBT 2 has 120 questions and 120 marks in 90 minutes at greater depth, with 50 general awareness, 35 mathematics and 35 reasoning. One third of a mark is deducted for each wrong answer. A typing skill test or computer-based aptitude test follows for the relevant posts, then document verification and a medical examination.',
      },
      {
        q: 'What is normalisation in RRB NTPC?',
        a: 'Because the exam runs across many shifts and days, and no two shifts are exactly equal in difficulty, scores are adjusted so that candidates who sat a harder shift are not penalised for it. The practical consequence is that the raw mark you calculate after the exam is not the number compared against the cutoff, and comparing raw scores with candidates who sat different shifts tells you very little about your relative position.',
      },
      {
        q: 'Which is the most important section in RRB NTPC?',
        a: 'General awareness, by mark weight. It is the largest section in both CBT 1 and CBT 2, together carrying more marks than either mathematics or reasoning. This inverts the usual competitive-exam priority, and it means a daily general awareness habit — static themes from one source and current affairs from one digest — is the highest-return preparation available for this exam.',
      },
      {
        q: 'Is there negative marking in RRB NTPC?',
        a: 'Yes, one third of a mark for each wrong answer, which is harsher than the quarter-mark deduction applied in banking exams. A blind guess across four options has clearly negative expected value, and even narrowing to two options gives only a modest edge. Candidates who practise on gentler papers often carry an over-optimistic guessing threshold into this exam and lose marks to it.',
      },
      {
        q: 'Do all RRB NTPC posts require a typing test?',
        a: 'No. Clerk cum typist posts require a typing skill test, and Station Master and Traffic Assistant posts require a computer-based aptitude test with a minimum standard in each test battery. Both are qualifying rather than merit-counting, but failing them removes you from consideration for those posts. Since typing speed builds gradually, start practising from the beginning of your preparation rather than after the second computer-based test.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     RRB Group D
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'rrb-group-d',
    path: '/government-exams/railways/rrb-group-d/',
    name: 'RRB Group D',
    fullName: 'Railway Recruitment Board — Level 1 (Group D) Posts',
    authority: 'Railway Recruitment Boards (RRB)',
    official: 'indianrailways.gov.in',
    seoTitle: 'RRB Group D 2026: CBT Syllabus, PET Standards & Free Mocks',
    metaDescription:
      'RRB Group D exam guide — single CBT pattern and syllabus, physical efficiency test standards, medical requirements and free mock tests.',
    lead: [
      'RRB Group D fills Level 1 posts across the railway network — track maintainer, assistant in various technical departments, pointsman, helper and similar roles that keep the physical infrastructure running. It asks for a class 10 pass or an ITI qualification, and it attracts one of the largest applicant fields of any recruitment in the country.',
      'Unlike NTPC it has a single computer-based test rather than two, which shortens the written stage considerably. What follows it does not shorten: a physical efficiency test with genuine standards, and a medical examination that assigns you to a classification.',
    ],
    quickFacts: [
      ['Conducted by', 'Railway Recruitment Boards (RRB), zone-wise'],
      ['Level', 'Class 10 pass, or an ITI qualification from a recognised institution'],
      ['Posts', 'Track maintainer, pointsman, assistant and helper roles across railway departments'],
      ['Stages', 'Single CBT → physical efficiency test → document verification → medical'],
      ['Distinctive section', 'General science carries a full quarter of the paper'],
      ['Negative marking', 'One third of a mark per wrong answer'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Level 1 posts are the operational and maintenance backbone of the railway network: the people who maintain track, work points, assist in electrical, mechanical and signal departments, and staff the ground-level functions on which train movement depends. The qualification requirement is a class 10 pass or an ITI certificate, which makes this the most widely accessible railway recruitment.',
      },
      {
        type: 'p',
        text: 'The written stage is a single computer-based test, which is simpler than the NTPC two-stage process. But the physical efficiency test that follows is a real filter, with prescribed lifting and running standards that differ for male and female candidates, and the medical examination assigns a classification that determines which posts you can hold.',
      },
      {
        type: 'list',
        title: 'What the paper actually asks',
        items: [
          { text: 'General science', note: 'physics, chemistry and life sciences up to class 10, carrying a quarter of the paper — a larger share than in most competitive exams at this level.' },
          { text: 'Mathematics', note: 'arithmetic and school-level algebra, geometry and trigonometry.' },
          { text: 'General intelligence and reasoning', note: 'the largest section, verbal and non-verbal.' },
          { text: 'General awareness and current affairs', note: 'the smallest section, but straightforward marks for a prepared candidate.' },
        ],
      },
      {
        type: 'note',
        title: 'Plan for the physical test from the beginning',
        text: 'The physical efficiency test requires carrying a prescribed weight over a prescribed distance within a time limit, and running a prescribed distance within a time limit, with different standards for male and female candidates. It is qualifying, it cannot be prepared for in a fortnight, and it arrives after the written result. Training should run alongside study from the first week.',
      },
    ],
    stages: [
      {
        name: 'Computer Based Test',
        mode: 'Objective, 90 minutes',
        detail:
          'General science, mathematics, general intelligence and reasoning, and general awareness and current affairs, for 100 questions and 100 marks. One third of a mark is deducted for each wrong answer, and scores are normalised across shifts.',
      },
      {
        name: 'Physical Efficiency Test',
        mode: 'Qualifying',
        detail:
          'Carrying a prescribed weight over a prescribed distance within a time limit without setting it down, and running a prescribed distance within a time limit. Standards differ for male and female candidates. Qualifying in nature — no marks are added to the merit.',
      },
      {
        name: 'Document verification',
        mode: 'Offline',
        detail: 'Verification of educational, category, age and identity documents for shortlisted candidates.',
      },
      {
        name: 'Medical examination',
        mode: 'Medical board',
        detail:
          'Assessment against the railway medical classification prescribed for the post, covering vision, hearing and general physical fitness.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'RRB Group D syllabus — general science, mathematics, reasoning and general awareness at class 10 level for the single computer-based test.',
        lead: [
          'Four subjects, all at class 10 level. The one that surprises candidates is general science, which carries a quarter of the paper.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Science',
                'Physics, chemistry and life sciences at approximately class 10 level. Physics covers motion, force, work and energy, light, sound, electricity and magnetism. Chemistry covers matter and its states, atoms and molecules, the periodic classification of elements, chemical reactions, acids, bases and salts, metals and non-metals, and carbon compounds. Life sciences cover cell structure, life processes, control and coordination, reproduction, heredity, and the environment. A quarter of the paper, and the most systematically coverable section in it.',
              ],
              [
                'Mathematics',
                'Number system, BODMAS, decimals and fractions, LCM and HCF, ratio and proportion, percentage, mensuration, time and work, time and distance, simple and compound interest, profit and loss, algebra, geometry and trigonometry, elementary statistics, and square roots, age calculations, calendar and clock, and pipes and cisterns.',
              ],
              [
                'General Intelligence and Reasoning',
                'Analogies, alphabetical and number series, coding and decoding, mathematical operations, relationships, syllogism, jumbling, Venn diagrams, data interpretation and sufficiency, conclusions and decision making, similarities and differences, analytical reasoning, classification, directions, and statement and argument and assumption. The largest section in the paper.',
              ],
              [
                'General Awareness and Current Affairs',
                'Current affairs in science and technology, sports, culture, personalities, economics, politics and other subjects of importance. The smallest section, and largely a matter of consistent daily contact rather than study.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The general science section deserves particular attention because it is finite. Class 10 physics, chemistry and biology is a bounded body of content — a few textbooks’ worth — which can be covered completely rather than sampled. That makes it the most predictable quarter of the paper, and the place where systematic preparation converts most reliably into marks.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'RRB Group D exam pattern — single CBT structure and marks, one-third negative marking, normalisation and the physical efficiency test.',
        lead: [
          'One computer-based test, then a physical test that many candidates underestimate.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Computer based test structure. Confirm question counts, marks, duration and the deduction rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Intelligence and Reasoning', '30', '30', 'The largest section; verbal and non-verbal'],
              ['General Science', '25', '25', 'Class 10 physics, chemistry and life sciences'],
              ['Mathematics', '25', '25', 'Arithmetic-led, with school-level algebra and geometry'],
              ['General Awareness and Current Affairs', '20', '20', 'The smallest section'],
              ['Total', '100', '100', '90 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'Ninety minutes for a hundred questions is a comfortable rate by competitive-exam standards — nearly a minute per question — which changes the optimal approach. Where SSC and banking papers punish deliberation, this one allows it. The binding constraint here is accuracy rather than speed, and with one third of a mark deducted per error, that is where the marks are won.',
          },
          {
            type: 'list',
            title: 'The physical efficiency test',
            items: [
              { text: 'A carrying task', note: 'lifting and carrying a prescribed weight over a prescribed distance within a time limit, without setting it down.' },
              { text: 'A running task', note: 'covering a prescribed distance within a time limit.' },
              { text: 'Different standards by gender', note: 'the weights, distances and times differ for male and female candidates.' },
              { text: 'Qualifying only', note: 'it adds nothing to your merit position, but failing it ends the attempt.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the standards and the medical classification',
            text: 'The exact weights, distances and timings for the physical test, and the medical classification prescribed for each post, are set out in the notification and have been revised between cycles. Both are worth reading before you begin training, so that you train to the right numbers.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'RRB Group D previous year papers — using past CBTs to cover the general science section systematically and build reasoning speed.',
        lead: [
          'Group D papers are the clearest illustration of a general principle: when a syllabus is finite, past papers show you exactly which parts of it get asked.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general science section draws from class 10 content, and past papers show it drawing repeatedly from the same areas — basic mechanics, electricity, the periodic table, acids and bases, human physiology and life processes. Tagging several years of science questions against a class 10 syllabus produces a prioritised revision list within an evening.',
          },
          {
            type: 'steps',
            title: 'Working the papers',
            items: [
              { text: 'Sort science questions by chapter.', note: 'Against a standard class 10 syllabus. The uneven distribution is the useful finding.' },
              { text: 'Solve mathematics without a calculator, untimed at first.', note: 'The generous time limit means accuracy is worth more than speed here.' },
              { text: 'Do reasoning sections in full.', note: 'It is the largest section and improves quickly with volume.' },
              { text: 'Build a current affairs theme list from the awareness questions.', note: 'A small section, but easy marks once you know what themes recur.' },
            ],
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'Railway mock tests', to: '/mock-tests/railways/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Science study material', to: '/study-material/science/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'RRB Group D mock tests — full CBT practice with one-third negative marking and section-wise analysis.',
        lead: [
          'With ninety minutes for a hundred questions, this is one of the few competitive papers where you can afford to think. Use mocks to build accuracy rather than raw speed.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most common way to lose marks in Group D is not running out of time — it is answering questions you were not sure about. With a third of a mark deducted per error and enough time available to check your work, the profile that scores best is a high-accuracy one with a disciplined number of skips. That is a habit, and mocks are where it is built.',
          },
          {
            type: 'list',
            title: 'What to track',
            items: [
              { text: 'Your error count, explicitly', note: 'each error costs a third of a mark on top of the mark not earned. Twelve errors is a four-mark penalty.' },
              { text: 'Time left at the end', note: 'if you finish with twenty minutes spare and still made avoidable errors, you rushed unnecessarily.' },
              { text: 'Science accuracy by chapter', note: 'a finite syllabus means every weak chapter is fixable.' },
              { text: 'Reasoning speed', note: 'the largest section, and the one where practice volume pays most directly.' },
            ],
          },
          {
            type: 'p',
            text: 'Keep physical training running alongside. The physical efficiency test follows the written result, and the interval is not reliably long enough to build carrying strength and running fitness from a standing start.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Railway mock tests', to: '/mock-tests/railways/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'RRB Group D preparation — covering class 10 science systematically, building reasoning volume and training for the physical test.',
        lead: [
          'Three to four months of study and physical training in parallel. The science section is the part that rewards systematic coverage most.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Group D preparation has an unusual property: the syllabus is genuinely finite. Class 10 science, school arithmetic and standard reasoning types can all be covered completely rather than sampled, which means a candidate who works through them methodically arrives at the exam having seen essentially everything it can ask. Few competitive exams offer that.',
          },
          {
            type: 'steps',
            title: 'A three to four month plan',
            items: [
              { text: 'Week one — start physical training, and check the standards.', note: 'Carrying and running to the prescribed figures. Build gradually to avoid injury.' },
              { text: 'Months one and two — class 10 science, chapter by chapter.', note: 'Physics, chemistry and life sciences. A quarter of the paper and completely coverable.' },
              { text: 'Months one and two — mathematics fundamentals.', note: 'Arithmetic first, then the school-level algebra, geometry and trigonometry the syllabus lists.' },
              { text: 'Months one to three — reasoning daily.', note: 'The largest section. Volume of practice is what moves this score.' },
              { text: 'Throughout — twenty minutes of current affairs.', note: 'A small section, but consistent contact makes it nearly free marks.' },
              { text: 'Month three — full timed mocks with the correct deduction.', note: 'Focused on accuracy, since time is not the constraint in this paper.' },
              { text: 'Throughout — maintain the physical training.', note: 'Never pause it during written preparation.' },
            ],
          },
          {
            type: 'list',
            title: 'What costs candidates their place',
            items: [
              { text: 'Failing the physical efficiency test', note: 'after clearing the written stage, because training started too late.' },
              { text: 'Guessing freely', note: 'at one third of a mark per error, in a paper that gives you time to be careful.' },
              { text: 'Sampling the science syllabus instead of covering it', note: 'when it is small enough to finish completely.' },
              { text: 'Rushing a paper that does not require rushing', note: 'ninety minutes for a hundred questions allows verification; use it.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'RRB Group D study material — class 10 science, mathematics, reasoning and general awareness notes for the single CBT.',
        lead: [
          'Science and reasoning together carry more than half the paper. Those are the notes to work hardest.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Treat the science notes as a syllabus to complete rather than a topic to revise. Working through class 10 physics, chemistry and life sciences in order, chapter by chapter, is a two-month project that secures a quarter of the paper — a better return than almost any other use of the same time in this exam.',
          },
          {
            type: 'links',
            title: 'Subject notes for RRB Group D',
            items: [
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'Study habits for a finite syllabus',
            items: [
              'Keep a chapter checklist and mark off what is genuinely finished, not what is started.',
              'Solve questions immediately after each chapter rather than at the end of the subject.',
              'Return to each science chapter twice more before the exam — recall decays faster than understanding.',
              'Practise mathematics on paper without a calculator, but without rushing.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the RRB Group D exam pattern?',
        a: 'A single computer-based test of 100 questions and 100 marks in 90 minutes: 30 questions of general intelligence and reasoning, 25 of general science, 25 of mathematics, and 20 of general awareness and current affairs. One third of a mark is deducted for each wrong answer, and scores are normalised across shifts. A physical efficiency test, document verification and a medical examination follow.',
      },
      {
        q: 'What is the RRB Group D physical efficiency test?',
        a: 'A qualifying test with two components: carrying a prescribed weight over a prescribed distance within a time limit without setting it down, and running a prescribed distance within a time limit. The weights, distances and timings differ for male and female candidates. It adds nothing to your merit score, but failing it ends the attempt — and since it arrives after the written result, training needs to run alongside study from the beginning rather than starting afterwards.',
      },
      {
        q: 'How much general science is there in RRB Group D?',
        a: 'A quarter of the paper — 25 of the 100 questions — covering physics, chemistry and life sciences at approximately class 10 level. It is the most systematically coverable section in the exam because the underlying syllabus is finite: a candidate who works through class 10 science chapter by chapter will have seen essentially everything this section can ask, which is unusual in competitive exams.',
      },
      {
        q: 'What qualification is needed for RRB Group D?',
        a: 'A class 10 pass from a recognised board, or an ITI qualification from a recognised institution, with the exact requirement depending on the post. This makes it the most widely accessible railway recruitment, and correspondingly one of the largest applicant fields of any examination in the country.',
      },
      {
        q: 'Is RRB Group D a speed test?',
        a: 'Less so than most competitive papers. Ninety minutes for a hundred questions works out to nearly a minute each, which is generous by the standards of SSC or banking exams. That changes the optimal approach: the binding constraint is accuracy rather than pace, and with one third of a mark deducted per error, the profile that scores best is careful and disciplined rather than fast and expansive.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     RRB ALP
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'rrb-alp',
    path: '/government-exams/railways/rrb-alp/',
    name: 'RRB ALP',
    fullName: 'Railway Recruitment Board — Assistant Loco Pilot',
    authority: 'Railway Recruitment Boards (RRB)',
    official: 'indianrailways.gov.in',
    seoTitle: 'RRB ALP 2026: CBT 1, CBT 2, CBAT Pattern & Trade Syllabus',
    metaDescription:
      'RRB ALP exam guide — CBT 1 and CBT 2 pattern, trade-specific Part B, computer-based aptitude test, vision standards and free mock tests.',
    lead: [
      'RRB ALP recruits Assistant Loco Pilots — the people who operate trains alongside the loco pilot and progress into that role. It requires an ITI qualification or an engineering diploma in a relevant trade, and it has a selection process with two features no other railway recruitment shares in the same form.',
      'The first is a trade-specific Part B paper that is qualifying but genuinely technical. The second is the computer-based aptitude test, which assesses psychological suitability for train operation and applies a minimum standard in every test battery, with no relaxation available. It ends more candidacies than the written papers do.',
    ],
    quickFacts: [
      ['Conducted by', 'Railway Recruitment Boards (RRB), zone-wise'],
      ['Post', 'Assistant Loco Pilot'],
      ['Level', 'Class 10 plus an ITI in a relevant trade, or an engineering diploma'],
      ['Stages', 'CBT 1 → CBT 2 (Parts A and B) → computer-based aptitude test → document verification → medical'],
      ['Aptitude test', 'A minimum standard in each battery, with no relaxation'],
      ['Medical', 'The strictest vision standard in railway recruitment'],
    ],
    overview: [
      {
        type: 'p',
        text: 'An Assistant Loco Pilot works in the locomotive cab, supporting the loco pilot and progressing through experience into that role. It is a safety-critical operational post, and the selection process reflects that: technical competence is assessed through a trade paper, and psychological suitability for the demands of train operation is assessed through a dedicated aptitude test.',
      },
      {
        type: 'p',
        text: 'Eligibility rests on a class 10 pass together with an ITI qualification in a relevant trade, or an engineering diploma in a relevant discipline. The trade you hold determines which Part B paper you sit in the second computer-based test, so the qualification is not merely an entry ticket — it shapes the exam you take.',
      },
      {
        type: 'list',
        title: 'The four filters, in order',
        items: [
          { text: 'CBT 1', note: 'a short screening paper of mathematics, mental ability, general science and current affairs.' },
          { text: 'CBT 2 Part A', note: 'the merit-counting paper — mathematics, reasoning, basic science and engineering, and general awareness.' },
          { text: 'CBT 2 Part B', note: 'trade-specific and qualifying. Technical, and drawn from your ITI or diploma trade.' },
          { text: 'Computer-based aptitude test', note: 'psychological suitability for train operation, with a minimum standard in every battery and no relaxation available.' },
        ],
      },
      {
        type: 'note',
        title: 'The vision standard is the strictest in railway recruitment',
        text: 'Assistant Loco Pilot is classified at the highest medical standard the railways apply, with demanding requirements for distant and near vision, colour perception and binocular vision. Spectacles are not permitted under this classification. This is worth verifying at the very start of your preparation, because it is not something that can be addressed later and it arrives after every other stage has been cleared.',
      },
    ],
    stages: [
      {
        name: 'CBT 1 — First Stage Computer Based Test',
        mode: 'Objective, 60 minutes',
        detail:
          'Mathematics, mental ability, general science and general awareness on current affairs, for 75 questions and 75 marks. A screening stage — its marks shortlist candidates for CBT 2 rather than contributing to the final merit.',
      },
      {
        name: 'CBT 2 Part A — Second Stage, merit paper',
        mode: 'Objective, 90 minutes',
        detail:
          'Mathematics, general intelligence and reasoning, basic science and engineering, and general awareness on current affairs, for 100 questions and 100 marks. This is the paper whose marks build the merit list.',
      },
      {
        name: 'CBT 2 Part B — trade paper',
        mode: 'Objective, 60 minutes, qualifying',
        detail:
          'Seventy-five questions on the candidate’s ITI trade or engineering diploma discipline, drawn from the relevant trade syllabus. Qualifying in nature — you must clear it, but its marks do not add to the merit.',
      },
      {
        name: 'Computer Based Aptitude Test',
        mode: 'Qualifying, no relaxation',
        detail:
          'A battery of psychological and aptitude tests assessing suitability for train operation, including reaction time, attention and perceptual ability. A minimum standard applies in each individual battery, and no relaxation is available to any category.',
      },
      {
        name: 'Document verification and medical examination',
        mode: 'Offline',
        detail:
          'Verification of trade qualification and other documents, followed by a medical examination against the highest railway medical classification, with strict vision and colour perception requirements.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'RRB ALP syllabus — CBT 1 and CBT 2 Part A subjects, plus the trade-specific Part B syllabus for ITI and diploma disciplines.',
        lead: [
          'Two general papers and one trade paper. The trade paper is qualifying, which leads candidates to under-prepare for it — and failing a qualifying paper ends the attempt just as surely as failing a merit one.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Mathematics',
                'Number system, BODMAS, decimals and fractions, LCM and HCF, ratio and proportion, percentage, mensuration, time and work, time and distance, simple and compound interest, profit and loss, algebra, geometry and trigonometry, elementary statistics, square roots, age calculations, calendar and clock, and pipes and cisterns. Present in both CBT 1 and CBT 2 Part A.',
              ],
              [
                'Mental Ability / General Intelligence and Reasoning',
                'Analogies, alphabetical and number series, coding and decoding, mathematical operations, relationships, syllogism, jumbling, Venn diagrams, data interpretation and sufficiency, conclusions and decision making, similarities and differences, analytical reasoning, classification, directions, and statement and argument and assumption.',
              ],
              [
                'General Science',
                'Physics, chemistry and life sciences at approximately class 10 level. Appears in CBT 1 in this general form.',
              ],
              [
                'Basic Science and Engineering (CBT 2 Part A)',
                'Engineering drawing including projections, views, drawing instruments, lines, geometric figures and symbolic representation; units and measurements; mass, weight and density; work, power and energy; speed and velocity; heat and temperature; basic electricity; levers and simple machines; occupational safety and health; environment education; and IT literacy. Broader and more applied than the CBT 1 science section.',
              ],
              [
                'General Awareness on Current Affairs',
                'Science and technology, sports, culture, personalities, economics, politics and other subjects of importance. A small section in both papers.',
              ],
              [
                'Part B — Trade Syllabus',
                'Drawn from the trade syllabus prescribed by the Directorate General of Training for the candidate’s ITI trade, or from the relevant engineering diploma discipline. Common trades include electrician, fitter, mechanic (motor vehicle, diesel), instrument mechanic, wireman, tractor mechanic, armature and coil winder, refrigeration and air conditioning mechanic, and machinist, alongside the diploma disciplines of electrical, electronics, mechanical and automobile engineering.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The section most candidates handle badly is Basic Science and Engineering in CBT 2 Part A. It is not the same as the general science of CBT 1 — it is applied and includes engineering drawing, units and measurement, and simple machines. Candidates who prepare it as "more class 10 science" find it does not match, and it carries merit-counting marks.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'RRB ALP exam pattern — CBT 1 screening, CBT 2 Parts A and B, the computer-based aptitude test standard and medical requirements.',
        lead: [
          'Four stages, of which two are qualifying. The qualifying ones are where most candidates are actually eliminated.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'CBT 1 — screening only. Confirm marks, duration and the deduction rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Mathematics', '20', '20', 'School-level arithmetic and algebra'],
              ['Mental Ability', '25', '25', 'The largest section in this paper'],
              ['General Science', '20', '20', 'Class 10 level'],
              ['General Awareness on Current Affairs', '10', '10', 'Small and straightforward'],
              ['Total', '75', '75', '60 minutes'],
            ],
          },
          {
            type: 'table',
            caption: 'CBT 2 — Part A builds the merit; Part B is qualifying. Confirm against the current notification.',
            head: ['Paper', 'Content', 'Questions / Marks', 'Duration'],
            rows: [
              ['Part A', 'Mathematics, reasoning, basic science and engineering, general awareness', '100 / 100', '90 minutes'],
              ['Part B', 'Trade-specific, from your ITI trade or diploma discipline', '75 / 75', '60 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'One third of a mark is deducted for each wrong answer across the objective papers, and scores are normalised across shifts. Part B is qualifying: you must reach the prescribed standard, but the marks do not enter the merit list. That combination — compulsory but not merit-counting — is exactly the structure candidates tend to under-prepare for.',
          },
          {
            type: 'list',
            title: 'The computer-based aptitude test',
            items: [
              { text: 'What it assesses', note: 'suitability for train operation through batteries covering reaction time, sustained attention, perceptual speed and related capacities.' },
              { text: 'The standard', note: 'a minimum must be reached in every individual battery, not merely on aggregate.' },
              { text: 'No relaxation', note: 'the standard applies equally to all categories, with no relaxation available.' },
              { text: 'Practical consequence', note: 'this stage removes candidates who have cleared every written paper. Familiarising yourself with the test formats in advance is genuinely worthwhile.' },
            ],
          },
          {
            type: 'note',
            title: 'Verify the medical standard before you invest months',
            text: 'Assistant Loco Pilot carries the strictest railway medical classification, with demanding distant and near vision, colour perception and binocular vision requirements, and spectacles are not permitted under it. Since the medical comes last, a candidate can clear every stage and be found ineligible at the end. Check the standard at the beginning.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'RRB ALP previous year papers — using past CBT 1 and Part A papers, and trade papers for the qualifying Part B.',
        lead: [
          'General papers build speed; trade papers are where a qualifying failure is prevented. Work both.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Past Part B papers are the most neglected resource in ALP preparation. Because the paper is qualifying, candidates assume it will be easy, and because it is trade-specific, general exam guides do not cover it. The result is a stage that catches out candidates who cleared the merit paper comfortably. Working past trade papers in your own trade is the direct fix.',
          },
          {
            type: 'steps',
            title: 'A structured approach',
            items: [
              { text: 'Work past Part B papers in your trade first.', note: 'They show the level and the topic emphasis. This is the highest-value and least-used resource in ALP preparation.' },
              { text: 'Tag Basic Science and Engineering questions by topic.', note: 'Engineering drawing, units, simple machines, basic electricity. It is a distinct subject from CBT 1 science and needs separate preparation.' },
              { text: 'Use CBT 1 papers for pacing.', note: 'Seventy-five questions in sixty minutes is a brisk rate and rewards familiarity.' },
              { text: 'Keep your ITI or diploma notes.', note: 'They are the right source for Part B — closer in level and framing than any competitive-exam guide.' },
            ],
          },
          {
            type: 'links',
            title: 'Related practice',
            items: [
              { label: 'Railway mock tests', to: '/mock-tests/railways/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Science study material', to: '/study-material/science/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'RRB ALP mock tests — CBT 1 and CBT 2 Part A practice, with guidance on preparing for the computer-based aptitude test.',
        lead: [
          'Mocks cover the written stages well. For the aptitude test, what helps is familiarity with the formats rather than a score.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The written stages respond to ordinary mock practice: timed papers, the correct deduction rate, and analysis of what went wrong. The aptitude test is different. It is not a knowledge test and cannot be studied for in the usual sense, but candidates who have seen the format of reaction-time and attention batteries before perform closer to their genuine capacity than those meeting them cold under pressure.',
          },
          {
            type: 'list',
            title: 'What to work on where',
            items: [
              { text: 'CBT 1', note: 'pacing. Seventy-five questions in sixty minutes with mental ability as the largest section.' },
              { text: 'CBT 2 Part A', note: 'accuracy across four subjects, with basic science and engineering prepared as its own subject.' },
              { text: 'CBT 2 Part B', note: 'trade knowledge, practised from past trade papers and your own ITI or diploma material.' },
              { text: 'Aptitude test', note: 'format familiarity, adequate sleep before the test, and a calm approach. Reaction-based batteries are markedly affected by fatigue and anxiety.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Railway mock tests', to: '/mock-tests/railways/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'RRB ALP preparation strategy — covering the trade paper properly, preparing basic science and engineering, and planning for the aptitude test.',
        lead: [
          'Prepare for the qualifying stages as seriously as the merit stage. That is where ALP candidates are most often eliminated.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The instinct in a multi-stage exam is to concentrate on the paper whose marks count. In ALP that instinct is misleading, because two of the four stages are qualifying, and a failure at either ends the attempt regardless of how well the merit paper went. A plan that allocates time proportionally to merit weight will under-prepare the trade paper and ignore the aptitude test entirely.',
          },
          {
            type: 'steps',
            title: 'A plan covering all four stages',
            items: [
              { text: 'Week one — verify the medical vision standard applies to you.', note: 'Before investing months. It is the one requirement that cannot be prepared for.' },
              { text: 'Months one to three — mathematics and reasoning.', note: 'Present in both CBT 1 and CBT 2 Part A. Steady daily practice.' },
              { text: 'Months one to three — basic science and engineering as its own subject.', note: 'Engineering drawing, units and measurement, simple machines, basic electricity. Not the same as class 10 science.' },
              { text: 'Months two to four — the trade paper, from your ITI or diploma material.', note: 'Qualifying, technical, and the stage general preparation does not touch.' },
              { text: 'Throughout — current affairs, twenty minutes daily.', note: 'A small section in both papers, but easy marks.' },
              { text: 'Month three — familiarise yourself with aptitude test formats.', note: 'Not to study for it, but so the format is not a surprise on the day.' },
              { text: 'Month four — timed mocks for both CBT stages.', note: 'With the correct deduction rate applied.' },
            ],
          },
          {
            type: 'list',
            title: 'Where ALP candidates are eliminated',
            items: [
              { text: 'The computer-based aptitude test', note: 'a minimum in every battery, no relaxation, and no way to compensate with written marks.' },
              { text: 'The trade paper', note: 'under-prepared because it is qualifying, and not covered by general exam material.' },
              { text: 'The medical examination', note: 'the strictest vision standard in railway recruitment, applied at the very end.' },
              { text: 'Basic science and engineering', note: 'prepared as class 10 science when it is an applied subject in its own right.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'RRB ALP study material — mathematics, reasoning and science notes, with guidance on using ITI and diploma material for the trade paper.',
        lead: [
          'General notes cover the aptitude subjects. The trade paper is best prepared from the material your qualification came with.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Keep your ITI or diploma textbooks and notes. For Part B they are the correct source — matched in level, framing and terminology to what the paper asks — in a way that no general competitive-exam guide is. Supplement them with past trade papers to see which topics carry the emphasis.',
          },
          {
            type: 'links',
            title: 'Notes for the general papers',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'How to divide your material',
            items: [
              'General notes for mathematics, reasoning and the current affairs section.',
              'Physics and science notes for the basic science and engineering component, focusing on units, measurement, work and energy, heat and basic electricity.',
              'Your own trade material, plus past trade papers, for Part B.',
              'Format familiarisation, not study material, for the aptitude test.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the RRB ALP exam pattern?',
        a: 'CBT 1 is a 60-minute screening paper of 75 questions covering mathematics, mental ability, general science and current affairs. CBT 2 has two parts: Part A, 100 questions in 90 minutes on mathematics, reasoning, basic science and engineering, and general awareness, which builds the merit list; and Part B, 75 questions in 60 minutes on your ITI trade or diploma discipline, which is qualifying. A computer-based aptitude test follows, then document verification and a medical examination. One third of a mark is deducted for each wrong answer.',
      },
      {
        q: 'What is the RRB ALP computer-based aptitude test?',
        a: 'A battery of psychological and aptitude assessments measuring suitability for train operation — reaction time, sustained attention, perceptual speed and related capacities. A minimum standard must be reached in every individual battery rather than on aggregate, and no relaxation is available to any category. It eliminates candidates who have cleared every written paper, which is why familiarising yourself with the test formats beforehand is worthwhile even though it is not a knowledge test.',
      },
      {
        q: 'Is CBT 2 Part B important if it is only qualifying?',
        a: 'Yes. Qualifying means the marks do not add to your merit position, not that the paper is optional — failing to reach the prescribed standard ends your attempt exactly as a merit-paper failure would. Because it is trade-specific and general exam guides do not cover it, it is the most under-prepared stage in ALP recruitment. Past trade papers in your own trade, worked alongside your ITI or diploma material, are the direct fix.',
      },
      {
        q: 'What are the vision requirements for RRB ALP?',
        a: 'Assistant Loco Pilot carries the strictest medical classification the railways apply, with demanding distant and near vision, colour perception and binocular vision requirements, and spectacles are not permitted under it. Because the medical examination comes after every other stage, a candidate can clear the written papers and the aptitude test and still be found ineligible. Verify the standard against the current notification before committing months of preparation.',
      },
      {
        q: 'What qualification do I need for RRB ALP?',
        a: 'A class 10 pass together with an ITI qualification in a relevant trade, or an engineering diploma in a relevant discipline. The trade or discipline you hold determines which Part B paper you sit in CBT 2, so the qualification shapes the exam rather than merely permitting entry. Common trades include electrician, fitter, mechanic, instrument mechanic and wireman, alongside electrical, electronics, mechanical and automobile diplomas.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     RRB JE
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'rrb-je',
    path: '/government-exams/railways/rrb-je/',
    name: 'RRB JE',
    fullName: 'Railway Recruitment Board — Junior Engineer',
    authority: 'Railway Recruitment Boards (RRB)',
    official: 'indianrailways.gov.in',
    seoTitle: 'RRB JE 2026: CBT 1 & 2 Pattern, Technical Abilities Syllabus',
    metaDescription:
      'RRB JE exam guide — CBT 1 and CBT 2 pattern, the 100-mark technical abilities section, discipline-wise syllabus and free mock tests.',
    lead: [
      'RRB JE recruits Junior Engineers, Depot Material Superintendents and Chemical and Metallurgical Assistants across the railway network. It asks for an engineering diploma or degree, and it is the technical counterpart to NTPC — same conducting boards, same deduction rate, entirely different centre of gravity.',
      'That centre of gravity is the Technical Abilities section of the second computer-based test: a hundred marks out of a hundred and fifty, drawn from your own engineering discipline. Everything else in the exam is a supporting act.',
    ],
    quickFacts: [
      ['Conducted by', 'Railway Recruitment Boards (RRB), zone-wise'],
      ['Posts', 'Junior Engineer, Depot Material Superintendent, Chemical and Metallurgical Assistant'],
      ['Level', 'Engineering diploma or degree in a relevant discipline'],
      ['Stages', 'CBT 1 → CBT 2 → document verification → medical'],
      ['Where the marks are', 'Technical Abilities — 100 of the 150 marks in CBT 2'],
      ['Negative marking', 'One third of a mark per wrong answer'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Junior Engineers in the railways work across civil, mechanical, electrical, electronics and signal and telecommunication departments — maintaining track and structures, rolling stock, traction systems and the signalling network that governs train movement. Related posts filled through the same examination include Depot Material Superintendent in the stores organisation and Chemical and Metallurgical Assistant in the research and testing function.',
      },
      {
        type: 'p',
        text: 'Eligibility rests on an engineering diploma or degree in a discipline relevant to the post applied for, and the mapping between qualification and post is set out in detail in the notification. That mapping matters, because the Technical Abilities paper you sit is determined by the discipline group your post belongs to.',
      },
      {
        type: 'list',
        title: 'How the two stages divide',
        items: [
          { text: 'CBT 1', note: 'mathematics, general intelligence and reasoning, general awareness and general science. A screening paper with no technical content at all.' },
          { text: 'CBT 2', note: 'general awareness, physics and chemistry, basics of computers and applications, basics of environment and pollution control, and Technical Abilities — which alone carries two thirds of the paper.' },
        ],
      },
      {
        type: 'note',
        title: 'Check the qualification-to-post mapping carefully',
        text: 'Which posts your diploma or degree makes you eligible for, and which Technical Abilities syllabus you will therefore sit, is set out post by post and discipline by discipline in the notification. Applying against a post your qualification does not map to is a wasted cycle, and the mapping is not always intuitive.',
      },
    ],
    stages: [
      {
        name: 'CBT 1 — First Stage Computer Based Test',
        mode: 'Objective, 90 minutes',
        detail:
          'Mathematics, general intelligence and reasoning, general awareness and general science, for 100 questions and 100 marks. No technical content. A screening stage whose marks shortlist for CBT 2 rather than contributing to the merit.',
      },
      {
        name: 'CBT 2 — Second Stage Computer Based Test',
        mode: 'Objective, 120 minutes',
        detail:
          'General awareness, physics and chemistry, basics of computers and applications, basics of environment and pollution control, and Technical Abilities, for 150 questions and 150 marks. Technical Abilities alone carries 100 of those marks.',
      },
      {
        name: 'Document verification',
        mode: 'Offline',
        detail:
          'Verification of the engineering qualification against the post applied for, along with category, age and identity documents.',
      },
      {
        name: 'Medical examination',
        mode: 'Medical board',
        detail:
          'Assessment against the railway medical classification prescribed for the post, which varies between engineering departments.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'RRB JE syllabus — CBT 1 subjects and the CBT 2 sections, including the discipline-wise Technical Abilities syllabus.',
        lead: [
          'CBT 1 is entirely non-technical. CBT 2 is two thirds technical. Preparing for them as though they were the same exam is the standard error.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'CBT 1 — Mathematics',
                'Number system, BODMAS, decimals and fractions, LCM and HCF, ratio and proportion, percentage, mensuration, time and work, time and distance, simple and compound interest, profit and loss, algebra, geometry and trigonometry, elementary statistics, square roots, age calculations, calendar and clock, and pipes and cisterns.',
              ],
              [
                'CBT 1 — General Intelligence and Reasoning',
                'Analogies, alphabetical and number series, coding and decoding, mathematical operations, relationships, syllogism, jumbling, Venn diagrams, data interpretation and sufficiency, conclusions and decision making, similarities and differences, analytical reasoning, classification, directions, and statement and argument and assumption.',
              ],
              [
                'CBT 1 — General Awareness and General Science',
                'Current affairs, Indian geography, culture and history including the freedom struggle, Indian polity and the Constitution, economics, environmental issues, and general scientific and technological developments; alongside physics, chemistry and life sciences at approximately class 10 level.',
              ],
              [
                'CBT 2 — Supporting sections',
                'General awareness; physics and chemistry at class 10 level; basics of computers and applications covering architecture, input and output devices, storage, networking, operating systems, MS Office, viruses and internet basics; and basics of environment and pollution control covering air, water, noise and soil pollution, their effects and control, and climate change and waste management.',
              ],
              [
                'CBT 2 — Technical Abilities',
                'Drawn from the candidate’s engineering discipline group. Civil covers engineering mechanics, building materials, construction, surveying, soil mechanics, hydraulics, environmental and transportation engineering, and structural analysis and design. Mechanical covers engineering mechanics, strength of materials, thermodynamics, fluid mechanics, machine design, manufacturing and industrial engineering. Electrical covers circuit theory, machines, power systems, measurement and instrumentation, and utilisation. Electronics and signal and telecommunication cover electronic devices, digital electronics, communication systems, microprocessors, measurement and control systems. Computer science covers programming, data structures, databases, operating systems and networking.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Read only the Technical Abilities syllabus for your own discipline group. It is a substantial body of material — comparable to a diploma revision — and the hundred marks it carries in CBT 2 are more than the rest of that paper and the whole of CBT 1 combined in importance to your final position.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'RRB JE exam pattern — CBT 1 screening structure, CBT 2 section marks with Technical Abilities dominant, and negative marking.',
        lead: [
          'The number that should drive your whole plan: Technical Abilities is 100 of the 150 marks in the paper that decides your rank.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'CBT 1 — screening only, and entirely non-technical. Confirm against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Mathematics', '30', '30', 'School-level arithmetic and algebra'],
              ['General Science', '30', '30', 'Class 10 physics, chemistry and biology'],
              ['General Intelligence and Reasoning', '25', '25', 'Verbal and non-verbal'],
              ['General Awareness', '15', '15', 'Current affairs and static knowledge'],
              ['Total', '100', '100', '90 minutes'],
            ],
          },
          {
            type: 'table',
            caption:
              'CBT 2 — the merit paper, dominated by Technical Abilities. Confirm against the current notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['Technical Abilities', '100', '100', 'Two thirds of the paper, in your own discipline'],
              ['General Awareness', '15', '15', 'Current affairs and static knowledge'],
              ['Physics and Chemistry', '15', '15', 'Class 10 level'],
              ['Basics of Computers and Applications', '10', '10', 'Small and quickly learnable'],
              ['Basics of Environment and Pollution Control', '10', '10', 'Small and quickly learnable'],
              ['Total', '150', '150', '120 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'The two small sections at the bottom of that table deserve a note. Computers and environment together carry twenty marks from twenty questions, both drawn from short, well-defined syllabi that can be covered in a fortnight. They are among the most efficient marks in the entire examination, and they are routinely skipped by candidates concentrating on their technical subject.',
          },
          {
            type: 'list',
            title: 'Planning implications',
            items: [
              { text: 'Technical revision is the plan, not part of it', note: 'a hundred marks in the merit paper, drawn from a diploma-scale syllabus.' },
              { text: 'CBT 1 needs enough work to clear, and no more', note: 'its marks do not enter the merit.' },
              { text: 'The two small CBT 2 sections are cheap marks', note: 'a fortnight each, twenty marks between them.' },
              { text: 'One third of a mark is deducted per error', note: 'and technical questions are where a half-remembered formula tempts an expensive guess.' },
            ],
          },
          {
            type: 'note',
            title: 'Normalisation applies here too',
            text: 'As with all railway recruitment run across multiple shifts, scores are normalised to account for differences in shift difficulty. The raw mark you calculate afterwards is not the figure compared against the cutoff.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'RRB JE previous year papers — building a topic weighting table for Technical Abilities from past discipline-wise papers.',
        lead: [
          'For a technical paper, past papers are a weighting table waiting to be extracted. The syllabus lists everything; the papers show what is actually asked.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The Technical Abilities syllabus for any discipline is long enough to be intimidating and gives no indication of emphasis. Past papers supply that emphasis immediately. In civil, structural analysis and building materials recur heavily; in electrical, machines and circuit theory dominate; in mechanical, thermodynamics and strength of materials carry a disproportionate share. Two evenings tabulating past papers in your discipline will redirect months of study.',
          },
          {
            type: 'steps',
            title: 'Building the table',
            items: [
              { text: 'Collect four to five years of CBT 2 papers in your discipline only.', note: 'Other disciplines tell you nothing.' },
              { text: 'Tag every technical question to a diploma-level topic.', note: 'Specific topics, not broad subjects.' },
              { text: 'Sort by frequency.', note: 'The top ten or twelve topics will account for most of the technical marks.' },
              { text: 'Rebuild those to full working depth before anything else.', note: 'Formulas, the reasoning behind them, and solved problems.' },
              { text: 'Then cover the small sections.', note: 'Computers and environment, from past papers, in a fortnight each.' },
            ],
          },
          {
            type: 'p',
            text: 'Keep your diploma textbooks. Railway technical questions are framed closer to diploma examination questions than to competitive-exam shortcuts, and the standard texts carry the derivations that make formulas stick rather than merely listing them.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Railway mock tests', to: '/mock-tests/railways/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'RRB JE mock tests — CBT 1 pacing practice and CBT 2 simulation with Technical Abilities weighted as the real paper weights it.',
        lead: [
          'A useful CBT 2 mock has two thirds of its questions in your engineering discipline. Anything else measures a different exam.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The pacing problem in CBT 2 is specific: technical questions take longer than general-awareness questions, and a candidate who works through the paper in printed order can reach the technical section with insufficient time for the part carrying two thirds of the marks. Practising the paper in its real proportions is how you find the order of attempt that protects those minutes.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Minutes spent on Technical Abilities', note: 'it should dominate your two hours, as it dominates the marks.' },
              { text: 'Technical accuracy', note: 'with a third of a mark deducted, uncertain technical answers are expensive.' },
              { text: 'Time on the small sections', note: 'computers and environment should take very few minutes; if not, you are over-thinking twenty easy marks.' },
              { text: 'Repeated technical errors by topic', note: 'in a technical paper these indicate gaps in understanding, and need the textbook rather than more questions.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Railway mock tests', to: '/mock-tests/railways/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'RRB JE preparation strategy — rebuilding diploma technical subjects, clearing CBT 1 efficiently and securing the small CBT 2 sections.',
        lead: [
          'Allocate time in proportion to marks. That means the technical subject gets most of your preparation, from the beginning.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'How long RRB JE takes is mostly a function of how recently you finished your diploma. A final-year student is revising; a candidate several years into unrelated work is rebuilding. The plan below assumes rebuilding, and compresses naturally for anyone whose technical knowledge is still current.',
          },
          {
            type: 'steps',
            title: 'A six-month plan',
            items: [
              { text: 'Week one — build a topic weighting table from past papers in your discipline.', note: 'Everything after this depends on knowing what is actually asked.' },
              { text: 'Months one to four — Technical Abilities, in weighting order.', note: 'Solved problems rather than passive reading. This is a hundred marks in the merit paper.' },
              { text: 'Months one to two — CBT 1 subjects, at clearing depth.', note: 'Mathematics, reasoning, class 10 science and general awareness. Enough to clear comfortably; no more, since the marks do not carry.' },
              { text: 'Month four — the two small CBT 2 sections.', note: 'Computers and applications, and environment and pollution control. A fortnight each for twenty marks.' },
              { text: 'Month five — physics and chemistry for CBT 2.', note: 'Class 10 level, overlapping with what CBT 1 already required.' },
              { text: 'Month six — full timed CBT 2 mocks in real proportions.', note: 'With attention to the order of attempt and the time protected for technical questions.' },
              { text: 'Throughout — twenty minutes of current affairs daily.', note: 'General awareness appears in both papers.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates successful JE candidates',
            items: [
              { text: 'Starting technical revision first', note: 'rather than after clearing CBT 1, which leaves too little time for a diploma-scale syllabus.' },
              { text: 'Solving rather than reading', note: 'technical marks come from worked problems; reading creates a false sense of readiness.' },
              { text: 'Not skipping the twenty easy marks', note: 'computers and environment are the cheapest marks in the paper.' },
              { text: 'Keeping a personal formula sheet', note: 'written by you, revised weekly, containing only what you keep forgetting.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'RRB JE study material — mathematics, reasoning, science and general awareness notes to support the non-technical sections.',
        lead: [
          'Your discipline textbooks carry the technical two thirds. These notes cover everything else.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'General study material plays a supporting role in RRB JE. It covers the whole of CBT 1 — which only needs to be cleared — and a third of CBT 2. The efficient approach is to work these notes briskly and return the time saved to the technical subject, which is where your rank is decided.',
          },
          {
            type: 'links',
            title: 'Notes for the non-technical sections',
            items: [
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Environment notes', to: '/study-material/environment/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'For the technical section',
            items: [
              'Use your diploma or degree textbooks as the primary source rather than a competitive-exam digest.',
              'Work from the past-paper weighting table rather than from the syllabus order.',
              'Maintain one handwritten formula sheet per technical subject.',
              'Revisit each major technical topic twice more before the exam — technical recall decays quickly.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the RRB JE exam pattern?',
        a: 'CBT 1 is a 90-minute screening paper of 100 questions and 100 marks covering mathematics, general science, general intelligence and reasoning, and general awareness — with no technical content. CBT 2 is a 120-minute paper of 150 questions and 150 marks in which Technical Abilities alone carries 100 marks, alongside general awareness, physics and chemistry, basics of computers and applications, and basics of environment and pollution control. One third of a mark is deducted for each wrong answer, and scores are normalised across shifts.',
      },
      {
        q: 'How much of RRB JE is technical?',
        a: 'Two thirds of the paper that decides your rank. Technical Abilities carries 100 of the 150 marks in CBT 2, drawn from your own engineering discipline, while CBT 1 contains no technical content at all and is purely a screening stage whose marks do not enter the merit. This is why technical revision should start first and take the majority of your preparation time, even though the first paper you sit contains none of it.',
      },
      {
        q: 'Which engineering disciplines can apply for RRB JE?',
        a: 'Civil, mechanical, electrical, electronics, signal and telecommunication, computer science and related disciplines, with the exact mapping between qualification and post set out in the notification. That mapping determines both which posts you are eligible for and which Technical Abilities syllabus you will sit, and it is not always intuitive — so it is worth reading carefully before applying rather than assuming.',
      },
      {
        q: 'Are the small sections in RRB JE CBT 2 worth preparing?',
        a: 'Yes, and they are among the best-value marks in the exam. Basics of computers and applications and basics of environment and pollution control carry ten marks each from short, well-defined syllabi that can each be covered in about a fortnight. Twenty marks for a month of light study compares very favourably with the effort needed for an equivalent gain in the technical section, yet candidates concentrating on their discipline routinely skip them.',
      },
      {
        q: 'How long does RRB JE preparation take?',
        a: 'Around six months for a candidate rebuilding technical knowledge from some years back, and considerably less for a recent diploma or degree holder whose material is still current. The technical section is the long pole — it is diploma-scale in volume and carries a hundred marks in the merit paper — so it should start first, guided by a topic weighting table built from past papers in your own discipline.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     RPF
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'rpf',
    path: '/government-exams/railways/rpf/',
    name: 'RPF',
    fullName: 'Railway Protection Force — Constable and Sub-Inspector',
    authority: 'Railway Recruitment Boards, for the Railway Protection Force',
    official: 'indianrailways.gov.in',
    seoTitle: 'RPF Constable & SI 2026: CBT Pattern, PET/PMT & Free Mocks',
    metaDescription:
      'RPF exam guide — Constable and Sub-Inspector CBT pattern and syllabus, physical efficiency and measurement tests, and free mock practice.',
    lead: [
      'The Railway Protection Force is the armed force responsible for protecting railway property, passengers and the passenger area. Its Constable and Sub-Inspector posts are filled through a computer-based test followed by physical efficiency and measurement tests, and it sits somewhere between the railway recruitments and the police recruitments in character.',
      'Its written paper is distinctive in one respect: general awareness is by far the largest section, larger than in any other railway examination. Candidates who arrive from SSC or banking preparation, where quantitative aptitude dominates, consistently mis-weight their study for it.',
    ],
    quickFacts: [
      ['Conducted by', 'Railway Recruitment Boards, for the Railway Protection Force'],
      ['Posts', 'Constable and Sub-Inspector'],
      ['Level', 'Class 10 for Constable; a bachelor’s degree for Sub-Inspector'],
      ['Stages', 'Computer-based test → physical efficiency and measurement tests → document verification'],
      ['Largest section', 'General awareness, at around forty per cent of the paper'],
      ['Negative marking', 'One third of a mark per wrong answer'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Railway Protection Force secures railway property, passenger areas and passengers themselves, with powers that extend to enforcement under railway legislation. Constables form the operational body of the force; Sub-Inspectors are the supervisory rank, requiring a bachelor’s degree rather than a class 10 pass.',
      },
      {
        type: 'p',
        text: 'Both posts are filled through the same shape of process — one computer-based test, then physical tests, then verification — with the same paper structure and the same qualifying physical standards framework, differing in the qualification required and in the standards applied.',
      },
      {
        type: 'list',
        title: 'What the process assesses',
        items: [
          { text: 'The computer-based test', note: 'general awareness, arithmetic, and general intelligence and reasoning, with general awareness the largest section.' },
          { text: 'The physical efficiency test', note: 'timed running over prescribed distances, plus long jump and high jump, with standards differing by post and gender.' },
          { text: 'The physical measurement test', note: 'height and, for male candidates, chest measurement with expansion, against standards that vary by category and region.' },
          { text: 'Document verification', note: 'qualification, category, age and identity.' },
        ],
      },
      {
        type: 'note',
        title: 'The physical stage is where most candidates are eliminated',
        text: 'As with other uniformed recruitments, the written paper is pitched to be widely clearable and the physical tests do the real filtering. Running and jumping standards cannot be reached in a few weeks, and the physical test follows the written result closely. Training from the first week of preparation is not optional advice here.',
      },
    ],
    stages: [
      {
        name: 'Computer Based Test',
        mode: 'Objective, 90 minutes',
        detail:
          'General awareness, arithmetic, and general intelligence and reasoning, for 120 questions and 120 marks. One third of a mark is deducted for each wrong answer, and scores are normalised across shifts.',
      },
      {
        name: 'Physical Efficiency Test',
        mode: 'Qualifying',
        detail:
          'Timed running over a prescribed distance, along with long jump and high jump, with different standards for Constable and Sub-Inspector posts and for male and female candidates. Qualifying in nature.',
      },
      {
        name: 'Physical Measurement Test',
        mode: 'Qualifying',
        detail:
          'Height for all candidates, and chest measurement with expansion for male candidates, against standards that vary by category and by region of origin.',
      },
      {
        name: 'Document verification',
        mode: 'Offline',
        detail: 'Verification of educational, category, age and identity documents for candidates who clear the earlier stages.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'RPF syllabus — general awareness, arithmetic and reasoning topics for the Constable and Sub-Inspector computer-based test.',
        lead: [
          'Three subjects, and general awareness is worth as much as the other two combined. Weight your preparation accordingly.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Awareness',
                'Current events of national and international importance, Indian history with an emphasis on the freedom struggle, geography of India and the world, Indian polity and the Constitution, economics, art and culture, sports, general science at approximately class 10 level, and static general knowledge including awards, books, important days and organisations. Around forty per cent of the paper — the largest section by a clear margin.',
              ],
              [
                'Arithmetic',
                'Number systems, whole numbers, decimals and fractions and relationships between numbers, fundamental arithmetical operations, percentage, ratio and proportion, averages, interest, profit and loss, discount, mensuration, time and work, time and distance, tables and graphs. Entirely arithmetic — there is no advanced algebra or trigonometry requirement.',
              ],
              [
                'General Intelligence and Reasoning',
                'Analogies, similarities and differences, spatial visualisation and orientation, visual memory, discrimination, observation, relationship concepts, arithmetical reasoning, verbal and figure classification, arithmetic number series, non-verbal series, coding and decoding, statement and conclusion, and syllogistic reasoning. Verbal and non-verbal in roughly equal measure.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The general awareness section is where an RPF candidate’s marks are most efficiently earned. It is recall-based, its themes repeat across cycles, and unlike arithmetic it does not depend on a skill that takes months to build. A daily habit of static revision plus current affairs will move this score further than an equivalent investment anywhere else in the paper.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'RPF exam pattern — CBT structure and marks, one-third negative marking, and the physical efficiency and measurement standards.',
        lead: [
          'One written paper weighted heavily towards general awareness, then two physical stages that decide most outcomes.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Computer based test structure for Constable and Sub-Inspector. Confirm marks, duration and the deduction rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Notes'],
            rows: [
              ['General Awareness', '50', '50', 'The largest section — recall-based and highly improvable'],
              ['Arithmetic', '35', '35', 'School-level arithmetic only'],
              ['General Intelligence and Reasoning', '35', '35', 'Verbal and non-verbal'],
              ['Total', '120', '120', '90 minutes'],
            ],
          },
          {
            type: 'p',
            text: 'A hundred and twenty questions in ninety minutes is a moderate rate — about forty-five seconds each — which leaves room for care. With one third of a mark deducted per error, that room is best spent on accuracy rather than on attempting more. Candidates arriving from faster papers often over-attempt here out of habit.',
          },
          {
            type: 'list',
            title: 'The physical stages',
            items: [
              { text: 'Physical efficiency test', note: 'timed running over a prescribed distance, plus long jump and high jump. Standards differ between Constable and Sub-Inspector, and between male and female candidates.' },
              { text: 'Physical measurement test', note: 'height for all candidates, and chest with expansion for male candidates, against standards varying by category and region of origin.' },
              { text: 'Both are qualifying', note: 'they contribute nothing to your merit position, and failing either ends the attempt.' },
              { text: 'Timing', note: 'they follow the written result closely, which is why training must run in parallel with study rather than after it.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the standards for your post and category',
            text: 'Running distances and timings, jump standards, and height and chest requirements all differ between Constable and Sub-Inspector, between male and female candidates, and by category and region. Train to the figures in the current notification for the post you are applying to rather than to a general summary.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'RPF previous year papers — mining past general awareness sections and building arithmetic accuracy from real papers.',
        lead: [
          'General awareness is nearly half the paper and its themes repeat. Past papers turn that section from a guessing game into a revision list.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Collect the general awareness questions from several years of RPF papers and sort them by theme. What emerges is a finite, prioritised list — constitutional basics, freedom struggle milestones, geography of rivers and states, class 10 science, sports and awards, and a recurring set of static knowledge items. Revising that list is a far better use of time than reading a general knowledge book cover to cover.',
          },
          {
            type: 'steps',
            title: 'Getting the most from past papers',
            items: [
              { text: 'Sort general awareness questions by theme across years.', note: 'The uneven distribution is exactly what you want to see.' },
              { text: 'Build one-page revision sheets per theme.', note: 'Revised weekly, they outperform any single book.' },
              { text: 'Solve arithmetic sections on paper, without a calculator.', note: 'The level is school arithmetic; accuracy matters more than technique.' },
              { text: 'Practise reasoning figures by annotating them.', note: 'Non-verbal reasoning is faster when you can mark the diagram.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Police exam preparation', to: '/government-exams/police/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'RPF mock tests — full CBT practice with one-third negative marking, plus guidance on parallel physical training.',
        lead: [
          'Practise the paper with its real weighting, where general awareness is the largest section rather than an afterthought.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A generic competitive-exam mock will give you a quarter of its questions in general awareness. The RPF paper gives you over forty per cent. That difference changes both your pacing and where your preparation should go, which is why practising in the correct proportions matters more than practising more.',
          },
          {
            type: 'list',
            title: 'What to review',
            items: [
              { text: 'General awareness accuracy', note: 'the most improvable number in your score, and the largest section.' },
              { text: 'Error count', note: 'at a third of a mark each, errors are expensive in a paper that gives you time to be careful.' },
              { text: 'Time left at the end', note: 'if you finish early having made avoidable errors, you rushed a paper that did not require it.' },
              { text: 'Arithmetic accuracy without a calculator', note: 'the level is simple; the marks are lost to slips rather than to difficulty.' },
            ],
          },
          {
            type: 'p',
            text: 'Run your physical training on a fixed schedule alongside mock practice. Running, long jump and high jump all improve gradually, and the physical test arrives soon after the written result — a gap that is not reliably long enough to build fitness from nothing.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Railway mock tests', to: '/mock-tests/railways/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'RPF preparation — a parallel written and physical plan, with general awareness weighted as the largest section.',
        lead: [
          'Two tracks from week one: general awareness as the largest written section, and physical training as the stage that eliminates most candidates.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'RPF preparation is simpler to plan than most because the priorities are so clear. General awareness is the biggest section and the most improvable. The physical tests eliminate the most candidates and take the longest to prepare for. Arithmetic and reasoning are at school level and need fluency rather than study. A plan that reflects those three facts is most of the way to being a good one.',
          },
          {
            type: 'steps',
            title: 'A three to four month parallel plan',
            items: [
              { text: 'Week one — check the physical standards for your post and category, and start training.', note: 'Running first, then jump technique. Build gradually to avoid injury.' },
              { text: 'From day one — general awareness, forty minutes daily.', note: 'Static themes from one source, current affairs from one digest. The largest section in the paper.' },
              { text: 'Months one and two — arithmetic to fluency.', note: 'Percentage, ratio, average, profit and loss, interest, time and work, time and distance. On paper, without a calculator.' },
              { text: 'Months one to three — reasoning practice.', note: 'Both verbal and non-verbal, with figures annotated rather than solved mentally.' },
              { text: 'Month two onwards — class 10 science within general awareness.', note: 'A finite, coverable body of content that recurs reliably.' },
              { text: 'Month three — full timed mocks with the correct deduction.', note: 'In the real section proportions.' },
              { text: 'Throughout — never pause the physical training.', note: 'The physical test follows the written result closely.' },
            ],
          },
          {
            type: 'list',
            title: 'The avoidable failures',
            items: [
              { text: 'Mis-weighting general awareness', note: 'preparing it as a minor section when it is over forty per cent of the paper.' },
              { text: 'Stopping physical training during written preparation', note: 'and meeting the physical test out of condition.' },
              { text: 'Over-attempting out of habit', note: 'the paper allows care; a third of a mark per error punishes haste.' },
              { text: 'Training to the wrong standards', note: 'they differ by post, gender, category and region — read the notification.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'RPF study material — general awareness, arithmetic and reasoning notes weighted for the Constable and Sub-Inspector paper.',
        lead: [
          'General awareness first, because it is the largest section. Arithmetic and reasoning as fluency projects rather than study projects.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general knowledge, polity and science notes carry the largest section of this paper between them, and they are the ones to work most systematically. Class 10 science in particular is finite and reliably examined, which makes it some of the most predictable marks available.',
          },
          {
            type: 'links',
            title: 'Subject notes for RPF',
            items: [
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'Habits that suit this paper',
            items: [
              'Build one-page theme sheets for general awareness and revise them weekly.',
              'Do arithmetic on paper, without a calculator, but without rushing.',
              'Annotate reasoning figures rather than solving them mentally.',
              'Keep the physical training on the calendar alongside the study, every week.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the RPF exam pattern?',
        a: 'A single computer-based test of 120 questions and 120 marks in 90 minutes, covering general awareness (50 questions), arithmetic (35) and general intelligence and reasoning (35). One third of a mark is deducted for each wrong answer, and scores are normalised across shifts. A physical efficiency test and a physical measurement test follow, both qualifying, then document verification.',
      },
      {
        q: 'What is the difference between RPF Constable and Sub-Inspector?',
        a: 'The qualification and the standards. Constable requires a class 10 pass; Sub-Inspector requires a bachelor’s degree and is the supervisory rank. Both sit the same shape of computer-based test and go through the same physical efficiency and measurement framework, but the physical standards applied differ between the two posts, as they do between male and female candidates.',
      },
      {
        q: 'Which section carries the most marks in RPF?',
        a: 'General awareness, at 50 of the 120 marks — over forty per cent of the paper, and a larger share than in any other railway examination. Because it is recall-based and its themes repeat across cycles, it is also the most improvable section, which makes a daily habit of static revision plus current affairs the highest-return preparation available for this exam. Candidates arriving from SSC or banking preparation, where quantitative aptitude dominates, routinely mis-weight their study.',
      },
      {
        q: 'What are the RPF physical test requirements?',
        a: 'A physical efficiency test with timed running over a prescribed distance plus long jump and high jump, and a physical measurement test covering height for all candidates and chest with expansion for male candidates. Standards differ by post, by gender, and by category and region of origin. Both are qualifying — they add nothing to your merit position, but failing either ends the attempt. Confirm the figures that apply to you in the current notification before you begin training.',
      },
      {
        q: 'How should I prepare for RPF?',
        a: 'On two tracks from the first week. Written preparation should be weighted towards general awareness, which is the largest section, with arithmetic and reasoning treated as fluency projects at school level. Physical training should start immediately and continue without pause, because running and jump standards build gradually and the physical test follows the written result closely — a gap that is not reliably long enough to get fit from a standing start.',
      },
    ],
  },
]

export default railways
