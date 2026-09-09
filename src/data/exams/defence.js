/**
 * Defence exams — /government-exams/defence/
 *
 * AFCAT is the Air Force's own officer entry, run separately from the UPSC
 * defence examinations. Agniveer is the tri-service recruitment introduced
 * under the Agnipath scheme, and it is deliberately described here in terms of
 * its durable structure rather than its numbers, because scheme terms have
 * been revised and a candidate should read the current notification.
 *
 * NDA and CDS live under /government-exams/upsc/ because the Commission
 * conducts them; they are linked from here rather than duplicated.
 */

const defence = [
  /* ══════════════════════════════════════════════════════════════
     AFCAT
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'afcat',
    path: '/government-exams/defence/afcat/',
    name: 'AFCAT',
    fullName: 'Air Force Common Admission Test',
    authority: 'Indian Air Force',
    official: 'afcat.cdac.in',
    seoTitle: 'AFCAT 2026: Pattern, EKT, AFSB Interview & Free Mock Tests',
    metaDescription:
      'AFCAT exam guide — written pattern with one-mark negative marking, Engineering Knowledge Test, AFSB interview, eligibility and free mock tests.',
    lead: [
      'The Air Force Common Admission Test is the Indian Air Force’s own officer entry, conducted twice a year for the flying branch and for ground duty in both technical and non-technical streams. Unlike NDA and CDS it is run by the Air Force rather than by the Union Public Service Commission, and it has its own timetable, its own paper and its own selection board process.',
      'One feature of the paper deserves flagging before anything else: the negative marking is a full mark per wrong answer against three marks for a correct one. That is far harsher than the fractional deductions most competitive exams apply, and it should change how you guess.',
    ],
    quickFacts: [
      ['Conducted by', 'Indian Air Force'],
      ['Branches', 'Flying, Ground Duty (Technical) and Ground Duty (Non-Technical)'],
      ['Level', 'A degree; the flying and technical branches add subject requirements'],
      ['Written paper', '100 questions, 300 marks, 2 hours'],
      ['Negative marking', 'One full mark per wrong answer — unusually harsh'],
      ['Additional paper', 'Engineering Knowledge Test for technical branch candidates'],
    ],
    overview: [
      {
        type: 'p',
        text: 'AFCAT selects officers for three streams. The flying branch leads to pilot training; ground duty technical covers aeronautical engineering in the electronics and mechanical streams; ground duty non-technical covers administration, logistics, accounts, education and meteorology. Candidates indicate their branch at application, and the eligibility conditions differ substantially between them.',
      },
      {
        type: 'p',
        text: 'The process is short by defence standards: one written paper, an additional technical paper for the technical branch, then the Air Force Selection Board and a medical examination. Held twice a year, it gives candidates more attempts within an age window than the annual examinations do.',
      },
      {
        type: 'list',
        title: 'The three branches and their requirements',
        items: [
          { text: 'Flying branch', note: 'a degree with physics and mathematics at class 12, within a narrower age band than the ground duty branches. Additionally requires clearing the pilot aptitude battery at the selection board.' },
          { text: 'Ground Duty (Technical)', note: 'an engineering degree in a prescribed discipline. These candidates also sit the Engineering Knowledge Test.' },
          { text: 'Ground Duty (Non-Technical)', note: 'a degree in any discipline, with additional subject requirements for particular sub-branches such as accounts, education and meteorology.' },
        ],
      },
      {
        type: 'note',
        title: 'The pilot aptitude battery is a one-time test',
        text: 'Candidates for the flying branch sit a computerised pilot selection system test at the Air Force Selection Board. A candidate who does not clear it cannot reattempt it for flying branch entry in future cycles. Because of that finality, it is worth understanding the format in advance rather than meeting it unprepared.',
      },
    ],
    stages: [
      {
        name: 'AFCAT written examination',
        mode: 'Objective, 2 hours',
        detail:
          '100 questions for 300 marks covering general awareness, verbal ability in English, numerical ability, and reasoning and military aptitude. Three marks are awarded for a correct answer and one mark deducted for a wrong one.',
      },
      {
        name: 'Engineering Knowledge Test',
        mode: 'Objective, 45 minutes — technical branch only',
        detail:
          '50 questions for 150 marks on the candidate’s engineering discipline, taken immediately after the AFCAT paper by Ground Duty (Technical) applicants only.',
      },
      {
        name: 'Air Force Selection Board',
        mode: 'Multi-day assessment',
        detail:
          'Stage one screening through an officer intelligence rating test and picture perception and discussion; stage two comprising psychological testing, group tasks and a personal interview. Flying branch candidates additionally sit the computerised pilot selection system test.',
      },
      {
        name: 'Medical examination',
        mode: 'Medical board',
        detail:
          'Assessment against Air Force medical standards, which are strictest for the flying branch and include demanding vision and physical requirements.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'AFCAT syllabus — general awareness, verbal ability, numerical ability and reasoning and military aptitude, plus the Engineering Knowledge Test.',
        lead: [
          'Four sections in the main paper, and a technical paper for one branch. The military aptitude component is what distinguishes it from a general competitive exam.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Awareness',
                'History, sports, geography, environment, civics, basic science, defence, art, culture, current affairs, politics and other subjects of contemporary importance. The defence-related content is a consistent seam — services, ranks, aircraft, exercises and organisational structure — and it is not covered by general competitive-exam material.',
              ],
              [
                'Verbal Ability in English',
                'Comprehension, error detection, sentence completion, synonyms and antonyms, and testing of vocabulary. Straightforward in level and highly learnable, which makes it a reliable source of marks.',
              ],
              [
                'Numerical Ability',
                'Decimal fractions, simplification, average, profit and loss, percentage, ratio and proportion, simple interest, and time and work, along with time and distance covering trains, boats and streams. Pitched at approximately matriculation level — the least demanding numerical section among officer entry examinations.',
              ],
              [
                'Reasoning and Military Aptitude Test',
                'Verbal skills and spatial ability, covering analogies, pattern completion, figure classification, embedded figures, rotated blocks, hidden figures and similar visual reasoning. The spatial component is heavier than in most competitive exams and rewards specific practice.',
              ],
              [
                'Engineering Knowledge Test',
                'Discipline-specific questions for Ground Duty (Technical) candidates, drawn from the engineering branch they hold a degree in. Covers the core subjects of that discipline at degree level.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The spatial reasoning within the military aptitude section is worth singling out. Rotated blocks, embedded figures and pattern completion appear far more heavily here than in SSC or banking papers, and candidates who have prepared only through verbal reasoning practice find this section slower than expected. It responds very well to targeted repetition.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'AFCAT exam pattern — marks, timing, the one-mark negative marking rule, the Engineering Knowledge Test and the AFSB stage.',
        lead: [
          'Three marks for a right answer, one mark off for a wrong one. That ratio is the single most important thing to internalise about this paper.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'AFCAT written paper. Confirm marks, question counts and the negative marking rate against the current notification.',
            head: ['Section', 'Approximate share', 'Notes'],
            rows: [
              ['General Awareness', 'Substantial', 'Includes a consistent defence awareness seam'],
              ['Verbal Ability in English', 'Substantial', 'Straightforward and highly learnable'],
              ['Numerical Ability', 'Moderate', 'Matriculation-level arithmetic'],
              ['Reasoning and Military Aptitude', 'Substantial', 'Spatial reasoning weighted more heavily than usual'],
              ['Total', '100 questions, 300 marks', '2 hours'],
            ],
          },
          {
            type: 'p',
            text: 'With three marks gained and one lost, a guess breaks even at a one-in-four success rate — which is exactly what a blind guess among four options gives you. In practice that means blind guessing is a coin flip that adds variance without adding expected value, while any genuine narrowing makes a guess clearly worthwhile. The rule that follows is simple: eliminate at least one option or leave it.',
          },
          {
            type: 'list',
            title: 'The rest of the process',
            items: [
              { text: 'Engineering Knowledge Test', note: '50 questions for 150 marks in 45 minutes, for Ground Duty (Technical) candidates only, taken immediately after the main paper.' },
              { text: 'Air Force Selection Board', note: 'a multi-day assessment with screening, psychological tests, group tasks and interview, structurally similar to the Services Selection Board.' },
              { text: 'Pilot aptitude battery', note: 'for flying branch candidates, and a one-time opportunity that cannot be reattempted.' },
              { text: 'Medical examination', note: 'against Air Force standards, strictest for the flying branch.' },
            ],
          },
          {
            type: 'note',
            title: 'Held twice a year',
            text: 'AFCAT runs in two cycles annually, which gives candidates more opportunities within an age window than the annual defence examinations do. That makes a first attempt genuinely useful as calibration, provided the age band still leaves room for another.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'AFCAT previous year papers — extracting the defence awareness seam and practising the spatial reasoning that dominates the aptitude section.',
        lead: [
          'Two things past AFCAT papers give you that nothing else will: the defence awareness content, and enough spatial reasoning practice to make that section fast.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'General competitive-exam material does not cover Air Force and defence awareness — aircraft types, service structure, ranks and insignia, exercises, defence organisations and recent developments. Past AFCAT papers are effectively the only systematic source, and because the themes recur, extracting them into a revision list is unusually productive.',
          },
          {
            type: 'steps',
            title: 'Working the papers',
            items: [
              { text: 'Extract every defence-related question into one list.', note: 'Aircraft, ranks, exercises, organisations, operations. It becomes a revision resource you cannot buy.' },
              { text: 'Do the spatial reasoning sections repeatedly.', note: 'Rotated blocks and embedded figures become fast with volume and stay slow without it.' },
              { text: 'Track your guessing outcomes.', note: 'With a one-mark deduction, whether your guesses gain or lose you marks over a full paper is measurable and worth knowing.' },
              { text: 'For technical candidates, work past Engineering Knowledge Test papers.', note: 'In your own discipline, alongside your degree material.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'NDA exam guide', to: '/government-exams/upsc/nda/' },
              { label: 'CDS exam guide', to: '/government-exams/upsc/cds/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'AFCAT mock tests — full paper practice with the one-mark negative marking applied, plus spatial reasoning drills.',
        lead: [
          'Practise with the real deduction. A mock using fractional negative marking teaches a guessing habit this paper punishes.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The AFCAT deduction is severe enough that guessing discipline is a genuine skill rather than a footnote. Candidates who practise on quarter-mark or third-mark papers develop a threshold calibrated to a gentler penalty. The correction is simple but has to be practised: eliminate at least one option or leave the question.',
          },
          {
            type: 'list',
            title: 'What to measure',
            items: [
              { text: 'Net gain from guessed questions', note: 'count them separately. If your guesses net out negative, your threshold is too loose.' },
              { text: 'Time spent on spatial reasoning', note: 'the section that most improves with volume and most slows an unpractised candidate.' },
              { text: 'Defence awareness accuracy', note: 'the most improvable part of general awareness and the least covered by general material.' },
              { text: 'Overall attempt count', note: 'with this deduction, a smaller number of confident attempts often outscores a larger number of hopeful ones.' },
            ],
          },
          {
            type: 'p',
            text: 'Begin selection board preparation in parallel. The Air Force Selection Board assesses officer-like qualities through psychological tests, group tasks and interview, and those reward months of activity, reading and reflection rather than a fortnight of preparation.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'NDA mock test', to: '/mock-tests/nda/' },
            ],
          },
        ],
      },
      preparation: {
        description:
          'AFCAT preparation strategy — guessing discipline, spatial reasoning, defence awareness and preparing for the AFSB.',
        lead: [
          'A short syllabus, a harsh deduction, and a selection board worth months of preparation. Plan around all three.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'AFCAT is one of the more approachable written papers among officer entries — the numerical section is at matriculation level, English is straightforward, and the whole paper is a hundred questions in two hours. What it demands instead is discipline on guessing, targeted practice on spatial reasoning, and serious preparation for a selection board that assesses attributes rather than knowledge.',
          },
          {
            type: 'steps',
            title: 'A three to four month plan',
            items: [
              { text: 'From day one — general awareness with a defence emphasis.', note: 'A general knowledge source plus a defence news source, daily. The defence seam is learnable and rarely covered elsewhere.' },
              { text: 'From day one — physical fitness and group activity.', note: 'The selection board assesses officer-like qualities built over months, not weeks.' },
              { text: 'Month one — spatial reasoning, daily and deliberately.', note: 'Rotated blocks, embedded figures, pattern completion. Slow at first and fast with volume.' },
              { text: 'Months one and two — numerical ability to fluency.', note: 'Matriculation-level arithmetic, practised for speed rather than depth.' },
              { text: 'Months one and two — English, twenty minutes daily.', note: 'Vocabulary, error detection and comprehension. Reliable marks for modest effort.' },
              { text: 'For technical candidates — Engineering Knowledge Test revision.', note: 'From your degree material, alongside the main paper preparation.' },
              { text: 'Month three — full mocks with the correct deduction.', note: 'Tracking guessing outcomes explicitly.' },
              { text: 'Throughout — read widely and form views.', note: 'The interview rewards this more than any rehearsal does.' },
            ],
          },
          {
            type: 'list',
            title: 'What candidates get wrong',
            items: [
              { text: 'Guessing at a fractional-penalty threshold', note: 'the one-mark deduction makes blind guessing pure variance with no expected gain.' },
              { text: 'Under-practising spatial reasoning', note: 'a heavily weighted section that most competitive preparation does not build.' },
              { text: 'Skipping defence awareness', note: 'a consistent, learnable seam within general awareness.' },
              { text: 'Treating the AFSB as a formality', note: 'it is the stage that actually selects, and it rewards months of formation.' },
              { text: 'For flying branch candidates, meeting the pilot aptitude test cold', note: 'a one-time opportunity that cannot be reattempted.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'AFCAT study material — general awareness, English, numerical ability and reasoning notes, with a defence awareness emphasis.',
        lead: [
          'Standard notes cover three of the four sections well. Defence awareness and spatial reasoning need their own attention.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The reasoning notes are worth working specifically for their spatial content, which is the part of AFCAT that most differs from other competitive papers. For defence awareness, past papers plus a regularly followed defence news source are the practical substitute for study material, since no general guide covers it.',
          },
          {
            type: 'links',
            title: 'Subject notes for AFCAT',
            items: [
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine',
            items: [
              'Twenty minutes of spatial reasoning practice — the highest-return drill for this paper.',
              'Thirty minutes of general awareness, including a defence news source.',
              'Twenty minutes of English vocabulary and error detection.',
              'Arithmetic practice timed, on paper, without a calculator.',
              'Physical training on most days, for the selection board and the medical.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the AFCAT exam pattern?',
        a: 'A single objective paper of 100 questions and 300 marks over two hours, covering general awareness, verbal ability in English, numerical ability, and reasoning and military aptitude. Three marks are awarded for a correct answer and one mark is deducted for a wrong one. Ground Duty (Technical) candidates additionally sit the Engineering Knowledge Test — 50 questions for 150 marks in 45 minutes. The Air Force Selection Board and a medical examination follow.',
      },
      {
        q: 'How harsh is AFCAT negative marking?',
        a: 'Considerably harsher than most competitive exams. Three marks are awarded for a correct answer and one is deducted for a wrong one, which means a blind guess among four options breaks even at best — adding variance without adding expected value. The practical rule is to eliminate at least one option before guessing, or leave the question. Candidates who practise on papers with quarter-mark or third-mark deductions carry too loose a threshold into this exam.',
      },
      {
        q: 'What is the AFCAT Engineering Knowledge Test?',
        a: 'An additional 45-minute paper of 50 questions for 150 marks, taken immediately after the main AFCAT paper by Ground Duty (Technical) candidates only. It covers the candidate’s own engineering discipline at degree level. Flying branch and Ground Duty (Non-Technical) candidates do not sit it.',
      },
      {
        q: 'How is AFCAT different from NDA and CDS?',
        a: 'AFCAT is conducted by the Indian Air Force itself rather than by the Union Public Service Commission, and it recruits only for the Air Force. Its paper is a single two-hour test with an unusually harsh one-mark deduction and a heavier spatial reasoning component than NDA or CDS. It is held twice a year, and the selection board is the Air Force Selection Board rather than a Services Selection Board, with flying branch candidates additionally sitting a one-time pilot aptitude battery.',
      },
      {
        q: 'What is the pilot aptitude battery, and can it be reattempted?',
        a: 'It is a computerised pilot selection system test taken by flying branch candidates at the Air Force Selection Board, assessing the aptitudes relevant to flying. A candidate who does not clear it cannot reattempt it for flying branch entry in any future cycle, which makes it one of the few genuinely one-time assessments in defence recruitment. Because of that finality, understanding the format before you sit it is worth the effort.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Agniveer
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'agniveer',
    path: '/government-exams/defence/agniveer/',
    name: 'Agniveer',
    fullName: 'Agnipath Scheme — Agniveer recruitment across the Army, Navy and Air Force',
    authority: 'Indian Army, Indian Navy and Indian Air Force',
    official: 'joinindianarmy.nic.in, joinindiannavy.gov.in, agnipathvayu.cdac.in',
    seoTitle: 'Agniveer 2026: Army, Navy & Air Force Entry — Complete Guide',
    metaDescription:
      'Agniveer exam guide — Army, Navy and Air Force entries under the Agnipath scheme, categories, online test, physical and medical stages.',
    lead: [
      'Agniveer is the enrolment route into the armed forces below officer rank under the Agnipath scheme, covering the Army, the Navy and the Air Force. Each service runs its own recruitment with its own categories, its own written test and its own physical and medical standards, so "Agniveer" names a scheme rather than a single examination.',
      'Because the scheme’s terms have been revised since its introduction, this page describes the durable structure of the recruitment — the categories, the stage sequence and how to prepare for each — and directs you to the current notification for the terms of service, which is where those details properly belong.',
    ],
    quickFacts: [
      ['Services', 'Indian Army, Indian Navy and Indian Air Force, each recruiting separately'],
      ['Army categories', 'General Duty, Technical, Clerk / Store Keeper Technical, Tradesman'],
      ['Navy entries', 'Agniveer SSR and Agniveer MR'],
      ['Air Force entry', 'Agniveer Vayu'],
      ['Typical sequence', 'Online written test → physical fitness and measurement → medical examination'],
      ['Level', 'Class 10 or class 12 depending on the category, with subject requirements for technical entries'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Agnipath scheme is the route through which the three services enrol personnel below officer rank. Each service conducts its own recruitment: the Army through category-wise rallies preceded by a common entrance examination, the Navy through the Agniveer SSR and MR entries, and the Air Force through Agniveer Vayu. The written tests, physical standards and educational requirements differ between them.',
      },
      {
        type: 'p',
        text: 'The common structure across all three is a sequence of three filters: a written or online test, a physical fitness and measurement stage, and a detailed medical examination. As with every uniformed recruitment, the later stages eliminate more candidates than the first, and they are the ones that cannot be prepared for at short notice.',
      },
      {
        type: 'list',
        title: 'The categories, in outline',
        items: [
          { text: 'Army — Agniveer General Duty', note: 'the largest category, requiring a class 10 pass, with a written test covering general knowledge, general science and mathematics.' },
          { text: 'Army — Agniveer Technical', note: 'requiring class 12 with physics, chemistry, mathematics and English, and a written test with a substantial physics, chemistry and mathematics component.' },
          { text: 'Army — Agniveer Clerk / Store Keeper Technical', note: 'requiring class 12, with a written test that includes general knowledge, general science, mathematics, computer science, English and accountancy or book-keeping elements.' },
          { text: 'Army — Agniveer Tradesman', note: 'trade-specific entries at class 8 or class 10 level depending on the trade.' },
          { text: 'Navy — Agniveer SSR and MR', note: 'SSR generally requiring class 12 with physics and mathematics; MR at class 10 level, with a written test appropriate to each.' },
          { text: 'Air Force — Agniveer Vayu', note: 'science and other-than-science streams, with a written test covering English plus physics and mathematics or reasoning and general awareness depending on the stream.' },
        ],
      },
      {
        type: 'note',
        title: 'Read the current notification for the terms of service',
        text: 'The Agnipath scheme’s terms — duration of engagement, the proportion retained for further service, the financial package and related conditions — have been revised since the scheme was introduced and may be revised again. Those details are properly the subject of the official notification and government announcements rather than a preparation guide, and you should read them there before applying.',
      },
    ],
    stages: [
      {
        name: 'Online written examination',
        mode: 'Objective, category-specific',
        detail:
          'Each service and category has its own paper. Army entries are preceded by a common entrance examination whose content varies by category; the Navy and Air Force run their own online tests. Negative marking generally applies — check the rate for your category.',
      },
      {
        name: 'Physical fitness test',
        mode: 'Qualifying',
        detail:
          'Timed running over a prescribed distance, along with strength events such as pull-ups, and additional events depending on the service and category. Standards vary by service, category, gender and region.',
      },
      {
        name: 'Physical measurement test',
        mode: 'Qualifying',
        detail:
          'Height, chest and weight measurement against standards that vary by service, category and region of origin.',
      },
      {
        name: 'Medical examination',
        mode: 'Medical board',
        detail:
          'A detailed examination against the medical standards for the service and category, covering vision, hearing, dental condition, body marks and general fitness. Historically the stage at which the largest number of otherwise successful candidates are eliminated.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'Agniveer syllabus — category-wise content for Army General Duty, Technical and Clerk entries, and for the Navy and Air Force tests.',
        lead: [
          'There is no single Agniveer syllabus. Each service and category has its own, and preparing from the wrong one is a genuine risk.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The first thing to establish is which category you are actually applying for, because the papers differ substantially. A General Duty candidate studying physics and chemistry is wasting time; a Technical candidate studying only general knowledge is under-preparing badly. Confirm the category, then find its syllabus in the notification.',
          },
          {
            type: 'defs',
            items: [
              [
                'Army — General Duty',
                'General knowledge covering current affairs, history, geography, polity, sports and awards; general science at approximately class 10 level across physics, chemistry and biology; and mathematics covering arithmetic, algebra, geometry, mensuration and trigonometry at school level.',
              ],
              [
                'Army — Technical',
                'Physics, chemistry and mathematics at class 12 level, alongside general knowledge. The physics and chemistry content is substantially deeper than in the General Duty paper and follows the class 11 and 12 syllabus.',
              ],
              [
                'Army — Clerk / Store Keeper Technical',
                'General knowledge, general science, mathematics, computer science, English language and comprehension, and elements of accountancy or book-keeping. The broadest of the Army papers.',
              ],
              [
                'Navy — Agniveer SSR and MR',
                'SSR covers science and mathematics at class 12 level along with English and general awareness; MR covers science, mathematics, general knowledge and English at a level appropriate to the class 10 requirement.',
              ],
              [
                'Air Force — Agniveer Vayu',
                'The science stream covers English, physics and mathematics at class 12 level; the other-than-science stream covers English along with reasoning and general awareness. Candidates eligible for both may sit a combined paper.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Across all categories, class 10 general science and school mathematics form a large common core. A candidate uncertain which category to target can begin with those safely, then specialise once the choice is settled.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'Agniveer exam pattern — how the online test, physical fitness and measurement tests, and medical examination fit together across the three services.',
        lead: [
          'Three filters in every service. The written test is the first and, for most candidates, the least difficult.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'The common stage sequence. Question counts, marks, timings and negative marking vary by service and category — confirm in the notification for the one you are applying to.',
            head: ['Stage', 'Nature', 'What it decides'],
            rows: [
              ['Online written test', 'Objective, category-specific', 'Shortlisting for the physical stage'],
              ['Physical fitness test', 'Timed running and strength events', 'Qualifying — standards vary by service and category'],
              ['Physical measurement test', 'Height, chest and weight', 'Qualifying — standards vary by category and region'],
              ['Medical examination', 'Detailed medical board', 'Final eligibility — the largest source of eliminations'],
            ],
          },
          {
            type: 'p',
            text: 'The proportions are worth understanding. The written test is pitched to be clearable by a well-prepared candidate at the relevant educational level. The physical fitness test requires months of training to pass comfortably. The medical examination is where a great many candidates who have cleared everything else are eliminated, often for conditions they did not know would matter.',
          },
          {
            type: 'list',
            title: 'What the medical typically covers',
            items: [
              { text: 'Vision', note: 'including colour perception, with standards varying by service and category.' },
              { text: 'Hearing and dental condition', note: 'both assessed against defined standards.' },
              { text: 'Body marks and skin conditions', note: 'tattoos in particular are subject to rules about location and size.' },
              { text: 'Orthopaedic conditions', note: 'flat feet, knock knees and similar conditions are commonly disqualifying.' },
              { text: 'General physical condition', note: 'assessed against the standards for the service and category.' },
            ],
          },
          {
            type: 'note',
            title: 'Check the medical standards before you begin',
            text: 'Several of the conditions that end candidacies at the medical stage are identifiable in advance, and some are correctable given time. Because the medical comes last, a candidate can spend a year preparing and be eliminated for something they could have checked at the outset. Read the medical standards for your service and category first.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'Agniveer previous year papers — using past category-wise papers to calibrate level and cover the finite science and mathematics syllabus.',
        lead: [
          'The syllabi are finite and school-based, which makes past papers an efficient way to see exactly which parts of them get asked.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because Agniveer papers draw on school science and mathematics, past papers map cleanly onto chapters you may already have studied. Tagging a few years of questions against a class 10 or class 12 syllabus produces a prioritised list quickly, and the distribution is usually uneven enough to be worth acting on.',
          },
          {
            type: 'steps',
            title: 'How to use them',
            items: [
              { text: 'Work only with papers for your own category.', note: 'A General Duty paper tells a Technical candidate very little.' },
              { text: 'Tag science and mathematics questions by chapter.', note: 'Then study the heavy chapters to fluency before the light ones.' },
              { text: 'Build a general knowledge theme list.', note: 'Defence awareness, current affairs, static knowledge. The themes recur across cycles.' },
              { text: 'Time your practice.', note: 'The papers are short and the pace matters more than the difficulty.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'NDA exam guide', to: '/government-exams/upsc/nda/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Science study material', to: '/study-material/science/' },
            ],
          },
        ],
      },
      'mock-tests': {
        description:
          'Agniveer mock tests — timed practice for the online written test alongside a structured physical training plan.',
        lead: [
          'Written mocks are useful, but for this recruitment your training log matters at least as much as your mock scores.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For most Agniveer candidates the written test is the least uncertain part of the process. Practise it enough to be comfortable and accurate under time, then spend the remaining effort on the two stages that eliminate more people — physical fitness, which improves only with months of consistent training, and the medical standards, which need checking rather than training.',
          },
          {
            type: 'list',
            title: 'A balanced weekly routine',
            items: [
              { text: 'Two timed written practice sessions', note: 'in your category’s format, with negative marking applied if it applies.' },
              { text: 'Running on most days', note: 'building distance and pace gradually towards the prescribed standard with margin to spare.' },
              { text: 'Strength work for the required events', note: 'pull-ups and similar, built progressively rather than attempted at maximum from the start.' },
              { text: 'Daily general knowledge and science revision', note: 'short sessions; both are recall-heavy and respond to frequency.' },
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
          'Agniveer preparation — a combined written and physical training plan, with early medical standards checking.',
        lead: [
          'Three tracks from the first week: the written test, physical training, and confirming you meet the medical standards.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The most common way to lose an Agniveer cycle is not failing the written test. It is arriving at the physical stage without months of running behind you, or arriving at the medical with a condition that could have been identified at the start. Both are avoidable, and both need attention in week one rather than after the written result.',
          },
          {
            type: 'steps',
            title: 'A three to four month plan',
            items: [
              { text: 'Week one — settle your category and read its notification fully.', note: 'Syllabus, physical standards, medical standards and educational requirements all vary by category.' },
              { text: 'Week one — check the medical standards against yourself honestly.', note: 'Vision, colour perception, body marks and orthopaedic conditions. Find out now.' },
              { text: 'Week one — begin running.', note: 'Whatever distance you can manage, built up gradually. This is the longest-lead component.' },
              { text: 'Months one and two — school science and mathematics for your category.', note: 'Finite and completely coverable, which is the advantage to exploit.' },
              { text: 'Throughout — general knowledge daily.', note: 'Including defence awareness, which recurs in these papers.' },
              { text: 'Month two onwards — strength events.', note: 'Pull-ups and the other prescribed events, built progressively.' },
              { text: 'Month three — timed written practice, twice weekly.', note: 'In your category’s format.' },
              { text: 'Throughout — never pause the physical training.', note: 'The physical stage follows the written result closely.' },
            ],
          },
          {
            type: 'list',
            title: 'Where candidates lose the cycle',
            items: [
              { text: 'At the medical', note: 'for conditions identifiable at the outset — vision, colour perception, body marks, orthopaedic issues.' },
              { text: 'At the physical fitness test', note: 'having trained for weeks rather than months.' },
              { text: 'Preparing from the wrong category’s syllabus', note: 'the papers differ substantially between General Duty, Technical and Clerk entries.' },
              { text: 'Reading scheme terms from unofficial sources', note: 'the terms have been revised; read the official notification.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'Agniveer study material — school science, mathematics, general knowledge and English notes across the Army, Navy and Air Force categories.',
        lead: [
          'School-level science and mathematics form the common core across every category. Start there, then specialise.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For technical categories, your class 11 and 12 physics, chemistry and mathematics textbooks are the right primary source — matched in level and framing to what the papers ask. For General Duty and equivalent entries, class 10 science and mathematics play the same role. The notes below supplement those and cover the general knowledge breadth that school syllabi do not.',
          },
          {
            type: 'links',
            title: 'Subject notes for Agniveer',
            items: [
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'Study habits that suit this recruitment',
            items: [
              'Treat the science syllabus as something to finish, not to sample — it is small enough.',
              'Revise general knowledge in short daily passes rather than long weekly sessions.',
              'Do mathematics on paper without a calculator, timed.',
              'Keep the physical training log alongside the study plan, and treat both as compulsory.',
            ],
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the Agniveer recruitment process?',
        a: 'Each service runs its own recruitment under the Agnipath scheme, but all follow the same three-stage shape: an online written test appropriate to the category applied for, a physical fitness and measurement stage, and a detailed medical examination. The Army recruits in the General Duty, Technical, Clerk / Store Keeper Technical and Tradesman categories; the Navy through the Agniveer SSR and MR entries; and the Air Force through Agniveer Vayu in science and other-than-science streams.',
      },
      {
        q: 'Is there a single Agniveer syllabus?',
        a: 'No. Each service and category has its own paper, and they differ substantially. Army General Duty covers general knowledge, class 10 general science and school mathematics; Army Technical covers class 12 physics, chemistry and mathematics; the Clerk entry adds English, computer science and accountancy elements; and the Navy and Air Force tests have their own compositions. Preparing from the wrong category’s syllabus is a real and avoidable risk, so confirm your category first.',
      },
      {
        q: 'Which Agniveer stage eliminates the most candidates?',
        a: 'The medical examination, followed by the physical fitness test. The written test is pitched to be clearable by a well-prepared candidate at the relevant educational level. The physical test requires months of consistent running and strength training to pass comfortably. The medical assesses vision and colour perception, hearing, dental condition, body marks including tattoo rules, and orthopaedic conditions such as flat feet and knock knees — several of which are identifiable in advance and some correctable given time.',
      },
      {
        q: 'What are the Agnipath scheme terms of service?',
        a: 'The duration of engagement, the proportion of Agniveers retained for further service, the financial package and related conditions have been revised since the scheme was introduced and may be revised again. Those terms belong in the official notification and government announcements rather than in a preparation guide, and you should read them there before applying rather than relying on a summary.',
      },
      {
        q: 'How long should I prepare for Agniveer?',
        a: 'Three to four months is realistic for the written test if your school science and mathematics are intact, since the syllabi are finite and school-based. The binding constraint is usually physical: running and strength standards take months of consistent training to reach with margin, and the physical stage follows the written result closely. Start the training in week one, alongside checking the medical standards for your category.',
      },
    ],
  },
]

export default defence
