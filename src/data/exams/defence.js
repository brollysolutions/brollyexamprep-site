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
          {
            type: 'list',
            title: 'How the four sections behave in practice',
            items: [
              { text: 'General awareness carries a defence seam', note: 'aircraft, service structure, ranks, exercises and defence organisations appear consistently alongside conventional general knowledge, and no general competitive-exam guide covers them.' },
              { text: 'English is straightforward and highly learnable', note: 'comprehension, error detection, sentence completion and vocabulary at a level any graduate can reach with modest daily practice.' },
              { text: 'Numerical ability stays at matriculation level', note: 'arithmetic only — decimals, averages, percentage, ratio, profit and loss, time and work, simple interest. The difficulty is pace rather than content.' },
              { text: 'Military aptitude leans heavily on spatial reasoning', note: 'rotated blocks, embedded figures, pattern completion and figure classification, weighted far more than in a general aptitude paper.' },
            ],
          },
          {
            type: 'p',
            text: 'The spatial component is the part of this syllabus that most rewards preparation, precisely because it is the part most competitive preparation does not build. A candidate who has practised banking or SSC reasoning has met analogies and series thoroughly and rotated three-dimensional figures barely at all — and that is a skill that improves quickly with volume and slowly with theory.',
          },
          {
            type: 'note',
            title: 'The Engineering Knowledge Test applies to one branch only',
            text: 'Ground Duty (Technical) candidates sit an additional paper drawn from their engineering discipline. Candidates applying for the flying branch or for non-technical ground duty do not, which means much of what is written about AFCAT technical preparation is irrelevant to them — check which paper set applies to your branch before planning.',
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
          {
            type: 'p',
            text: 'Work the arithmetic of the deduction properly, because it is harsher than most candidates assume. Three marks for a correct answer and one deducted for a wrong one means a guess breaks even only at a one-in-four success rate — which is exactly what a blind guess across four options gives you. A blind guess is therefore pure variance with no expected gain, while a guess narrowed to two options is clearly worth taking. That threshold is higher than the one a fractional-penalty paper trains, and it has to be adopted deliberately.',
          },
          {
            type: 'defs',
            items: [
              [
                'What the selection board actually does',
                'A multi-day assessment with a screening stage, psychological testing, group tasks and an interview — structurally similar to the Services Selection Board used for NDA and CDS. It is the stage that selects, and the written paper is the ticket to it rather than the substance of it.',
              ],
              [
                'Why the pilot aptitude battery matters so much',
                'For flying branch candidates it is normally a one-time opportunity in a career: a failure cannot be reattempted at a later cycle. That makes understanding what it involves before sitting it materially more important than for any other component.',
              ],
              [
                'What two cycles a year gives you',
                'More opportunities within an age band than an annual examination allows, and the chance to treat an early attempt as calibration. The interval between cycles is long enough to act on what the first one exposed.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Medical standards are strictest for the flying branch',
            text: 'Vision requirements in particular differ between the flying branch and ground duty entries, and they are applied at the end of the process. A candidate whose eyesight rules out one branch may be entirely eligible for another — but establishing that in the first week is considerably better than discovering it at the medical board.',
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
          {
            type: 'list',
            title: 'The defence awareness cluster worth extracting',
            items: [
              { text: 'Aircraft and equipment', note: 'the types in service, indigenous programmes and the organisations behind them. Stable material that recurs with little variation.' },
              { text: 'Service structure and ranks', note: 'commands and their headquarters, rank insignia, and the organisation of the Air Force specifically.' },
              { text: 'Exercises and operations', note: 'joint and bilateral exercises with their participating countries, and named operations that have entered general awareness.' },
              { text: 'Institutions, awards and history', note: 'training establishments, gallantry awards and their precedence, and the notable episodes of Air Force history.' },
            ],
          },
          {
            type: 'p',
            text: 'That cluster is the best return available in an AFCAT preparation for the same structural reason it is in CDS: it is examined consistently, it is finite, and almost no general competitive-exam material covers it. A list built from past papers and topped up from a defence news source for twenty minutes a week puts you ahead of most of the field on a predictable slice of the largest section.',
          },
          {
            type: 'p',
            text: 'Work the spatial reasoning sections repeatedly rather than once. Unlike general knowledge, where a second pass over the same questions teaches little, spatial reasoning improves through sheer exposure to rotated and embedded figures — the recognition becomes faster with repetition even on problems you have seen. Redoing past aptitude sections is therefore genuinely productive practice rather than a memory test.',
          },
          {
            type: 'note',
            title: 'Track your guessing outcomes explicitly',
            text: 'Count the questions you guessed and calculate what they earned or cost under the one-mark deduction. Candidates carrying habits from fractionally penalised papers usually find their guesses net out negative, and seeing that number once is generally enough to raise the threshold permanently.',
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
          {
            type: 'steps',
            title: 'A mock routine for a harshly penalised paper',
            items: [
              { title: 'Apply the real deduction, every time', text: 'Three for a correct answer, one off for a wrong one. A mock using a quarter or a third teaches a guessing threshold this paper punishes.' },
              { title: 'Count guessed questions separately', text: 'Mark them as you go, then calculate their net contribution afterwards. It should be positive; if it is not, your threshold is too low.' },
              { title: 'Time the military aptitude section', text: 'Spatial reasoning is where an unpractised candidate loses minutes, and where practice most visibly buys them back.' },
              { title: 'Score defence awareness within general awareness', text: 'It is the most improvable component and the least covered by general material, so it deserves its own line in the log.' },
              { title: 'Compare attempt count with accuracy', text: 'Under this deduction, a smaller number of confident attempts frequently outscores a larger number with a scatter of guesses.' },
            ],
          },
          {
            type: 'p',
            text: 'For technical branch candidates, the Engineering Knowledge Test needs its own practice rather than being folded into general preparation. Fifty questions for a hundred and fifty marks in forty-five minutes is a brisk rate on discipline-specific material, and it is drawn from your engineering syllabus rather than from anything a competitive-exam guide covers. Past technical papers in your own discipline are the right source.',
          },
          {
            type: 'note',
            title: 'Start selection board preparation alongside, not after',
            text: 'The Air Force Selection Board assesses qualities formed over years — the ability to work in a group, physical confidence, having views you can explain. Those cannot be assembled in the weeks between the written result and the board call, which is why fitness, group activity and wide reading belong in the schedule from the first month.',
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
          {
            type: 'defs',
            items: [
              [
                'Spatial reasoning — the daily drill',
                'Twenty minutes a day from the first month. It is heavily weighted, it is the section most competitive preparation neglects, and it improves through volume rather than through instruction — which makes it the highest-return habit in this preparation.',
              ],
              [
                'Guessing discipline — a trained behaviour',
                'The one-mark deduction makes blind guessing worthless in expectation. Adopting the higher threshold deliberately, and practising with the correct marking so it becomes instinct, is worth several marks and costs no study time.',
              ],
              [
                'Defence awareness — twenty minutes a week',
                'A list built from past papers, topped up from a defence news source. Small, finite and consistently examined, and it is the part of general awareness the field has largely conceded.',
              ],
              [
                'Physical fitness and formation — from day one',
                'For the selection board, the medical, and the officer-like qualities the board is assessing. This track runs continuously rather than starting after a written result.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The written paper is genuinely approachable — matriculation arithmetic, straightforward English, general awareness at a general level. That accessibility is the trap: it invites candidates to treat AFCAT as a written examination with a board attached, when the board is what actually selects. A candidate who clears the paper comfortably and arrives at the selection board unprepared has done the easier half of the work well.',
          },
          {
            type: 'note',
            title: 'Two cycles a year changes how the first attempt should feel',
            text: 'With an examination held twice annually within a defined age band, an early attempt is calibration rather than a decisive event — and the interval afterwards is long enough to fix whatever it exposed. Candidates who wait until they feel fully ready generally get fewer attempts than the age band actually allows.',
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
          {
            type: 'defs',
            items: [
              [
                'Reasoning material — worked for its spatial content',
                'Rotated blocks, embedded figures, pattern completion, figure classification and mirror images. General reasoning books cover the verbal families well and the spatial ones lightly, so seek out the spatial sets specifically.',
              ],
              [
                'General awareness — with a defence list attached',
                'Conventional history, geography, polity, science and current affairs, plus a separate defence awareness sheet built from past papers. The second is the part nothing on a general shelf supplies.',
              ],
              [
                'English — a short rule set and a word list',
                'Error detection, sentence completion, synonyms and antonyms. Finite, learnable and among the most reliable marks in the paper for a candidate willing to spend twenty minutes a day.',
              ],
              [
                'Numerical ability — fluency drilling',
                'Matriculation arithmetic done on paper without a calculator, against a clock. The content will not stretch a graduate; the pace will.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'For Ground Duty (Technical) candidates the Engineering Knowledge Test is best prepared from your own degree or diploma material rather than from any competitive-exam source. It is drawn from your engineering discipline at the level you studied it, and the standard textbooks carry the derivations and standard values that condensed guides compress out — the same argument that applies to every technical recruitment paper.',
          },
          {
            type: 'note',
            title: 'Reading widely serves the board as well as the paper',
            text: 'For an entry where a multi-day assessment carries the selection, a habit of reading beyond the syllabus is preparation rather than enrichment. It feeds current affairs, it supplies the informed views the interview probes, and it is one of the few things a candidate can do months in advance that visibly changes how they present at a selection board.',
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
          {
            type: 'list',
            title: 'What the common core across categories looks like',
            items: [
              { text: 'Class 10 general science', note: 'physics, chemistry and life sciences at school level, appearing in almost every category in some form. Finite, finishable and the most efficient place to start.' },
              { text: 'School mathematics', note: 'arithmetic and elementary algebra and geometry for the general categories, rising to class 12 mathematics for the technical and science-stream entries.' },
              { text: 'General knowledge', note: 'current affairs, history, geography, polity, sports and awards — the conventional pool, shared with most other recruitment at this level.' },
              { text: 'English or the language component', note: 'basic comprehension, grammar and vocabulary, weighted differently across categories but present in most.' },
            ],
          },
          {
            type: 'p',
            text: 'That common core is worth identifying early because it lets a candidate begin productively before finalising every detail of their category. Class 10 science and school mathematics will be needed whichever entry you pursue, and starting them in week one costs nothing even if the category choice shifts. The specialisation — class 12 physics and mathematics for technical and science-stream entries, computer science for clerical ones — can be layered on once the notification is settled.',
          },
          {
            type: 'note',
            title: 'Read your own category’s notification, not a general summary',
            text: 'The Army, Navy and Air Force each run their own recruitment with their own categories, syllabi, marking and standards, and the differences between General Duty, Technical, Clerk, SSR, MR and Agniveer Vayu are substantial. Preparing from a general account of Agniveer is a real way to prepare for the wrong paper.',
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
          {
            type: 'p',
            text: 'The proportions across the four stages are the important thing to understand, and they are the reverse of what most candidates assume. The written test is pitched to be clearable by a well-prepared candidate and eliminates a moderate share of applicants. The physical fitness test eliminates a larger share, mostly among candidates who trained for weeks rather than months. The medical eliminates the largest share of all, frequently for conditions that were identifiable in advance. Effort allocated in proportion to the written test alone is allocated backwards.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why the physical test is a months-long project',
                'Running endurance and event strength build gradually and cannot be compressed. A candidate who starts running in week one arrives at the physical test having trained for months; one who starts after the written result has weeks, which is not enough to build a base safely.',
              ],
              [
                'Why the measurement test is worth checking early',
                'Height, chest and weight standards vary by category and in some cases by region. They are published, they are fixed, and a candidate can establish in an afternoon whether they meet them — which is considerably better than establishing it at the recruitment rally.',
              ],
              [
                'Why the medical is the largest filter',
                'It assesses vision including colour perception, hearing, dental condition, body marks and tattoos, orthopaedic conditions such as flat feet and knock knees, and general physical condition. Several of these are identifiable in advance by anyone willing to check.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Standards differ by service, category and region',
            text: 'The written format, the physical events, the measurement thresholds and the medical criteria all vary between the Army, Navy and Air Force and between categories within each. Generic figures circulated online are a poor substitute for the notification that applies to you — find the standards for your own category and train against those numbers.',
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
          {
            type: 'list',
            title: 'What tagging past papers by chapter reveals',
            items: [
              { text: 'Science clusters in a predictable set of chapters', note: 'motion and force, work and energy, light, electricity, acids and bases, metals and non-metals, and life processes supply a large share of the questions across categories.' },
              { text: 'Mathematics stays within a narrow range of shapes', note: 'percentage, average, ratio, profit and loss, time and work, time and distance, and basic mensuration, asked directly and repeatedly.' },
              { text: 'General knowledge repeats by theme rather than by question', note: 'polity basics, national symbols, geography, sports and awards, and current affairs from the preceding months.' },
              { text: 'Technical categories go substantially deeper', note: 'class 12 physics, chemistry and mathematics for Army Technical, Navy SSR and the Agniveer Vayu science stream — a different level entirely from the general categories.' },
            ],
          },
          {
            type: 'p',
            text: 'Work only with papers for your own category, and check the category before you start rather than after. Because the papers differ substantially between General Duty, Technical, Clerk and the various Navy and Air Force entries, a candidate practising on the wrong set is building the wrong level — usually discovering it late, when the time to correct is short.',
          },
          {
            type: 'p',
            text: 'The finiteness of these syllabi is the thing to exploit. Class 10 science can genuinely be finished, and so can school mathematics at this level — which changes the question from what to prioritise to how many complete passes you can make. A candidate on a second full pass with a chapter checklist marked off is in a materially stronger position than one who has sampled more material broadly.',
          },
          {
            type: 'note',
            title: 'Time your practice from early on',
            text: 'The online tests are short and the questions are individually straightforward, which makes pace rather than difficulty the constraint for most candidates. Practising untimed produces a comfortable score that misrepresents readiness, and the habit of working against a clock is easier to build early than to retrofit.',
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
          {
            type: 'steps',
            title: 'A weekly routine across both tracks',
            items: [
              { title: 'Two timed written sessions', text: 'In your own category’s format, with negative marking applied where it applies. Enough to keep the material sharp without letting written practice crowd out the training.' },
              { title: 'Running on most days', text: 'Building distance and pace gradually towards the prescribed standard, with margin to spare rather than exactly meeting it.' },
              { title: 'Progressive strength work', text: 'Pull-ups and the other required events, built up over months rather than attempted at maximum effort each session. Progressive loading is what produces a reliable result on the day.' },
              { title: 'Daily general knowledge and science revision', text: 'Short sessions, since both are recall-heavy and respond to frequency rather than duration.' },
              { title: 'A training log kept alongside the study plan', text: 'Written down, week by week. It is the record that shows whether the physical track is actually progressing.' },
            ],
          },
          {
            type: 'p',
            text: 'The unusual advice for this recruitment is to treat your training log as at least as important as your mock scores. For most candidates the written test is the least uncertain part of the process — practise it until it is comfortable and then maintain it — while the physical stage is where preparation genuinely determines the outcome and where progress is only visible if it is recorded.',
          },
          {
            type: 'note',
            title: 'Train with margin, not to the standard',
            text: 'A candidate who can just meet the running time in training will frequently miss it at the rally, where nerves, terrain and fatigue all work against them. Building to comfortably inside the standard is the difference between a result that depends on the day and one that does not.',
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
          {
            type: 'defs',
            items: [
              [
                'The medical check — week one, honestly',
                'Vision and colour perception, hearing, dental condition, body marks and tattoos, and orthopaedic conditions such as flat feet and knock knees. Several are identifiable by a candidate willing to look, and identifying one in week one is entirely different from meeting it at the medical board.',
              ],
              [
                'The physical track — months, not weeks',
                'Running from the first week, strength work layered on from the second month, both progressing gradually and both maintained without interruption through the written preparation.',
              ],
              [
                'The written track — a finite syllabus',
                'School science and mathematics for your category, general knowledge as a daily habit, and timed practice from the third month. Small enough to complete, which makes completion the right target.',
              ],
              [
                'The category decision — settled first',
                'Everything above depends on it, because the syllabus, the standards and the medical criteria all vary by service and category.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A realistic timeline is three to four months for the written test if your school science and mathematics are intact, and six months or more if the physical side has to be built from a standing start. The physical track sets the true schedule, which is worth knowing at the beginning — it is the component candidates plan around last and the one that removes them most often.',
          },
          {
            type: 'note',
            title: 'Read the scheme terms from the official notification',
            text: 'The terms of service under the Agnipath scheme — the period of engagement, the retention provisions and the associated entitlements — have been the subject of a great deal of unofficial commentary and have been revised. Read them in the official notification rather than from secondary sources, since this is a decision about several years of your life.',
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
          {
            type: 'defs',
            items: [
              [
                'School science — the common core, finished',
                'Class 10 physics, chemistry and life sciences for the general categories; class 11 and 12 for technical and science-stream entries. Small enough to complete, and completion is the right target rather than coverage.',
              ],
              [
                'School mathematics — accuracy and pace',
                'Arithmetic and elementary algebra and geometry, worked on paper without a calculator and against a clock. The level will not stretch a school leaver; the timing will.',
              ],
              [
                'General knowledge — themed lists, revised daily',
                'Polity basics, national symbols, geography, sports and awards, plus current affairs from a single running source. Short frequent passes rather than long sessions.',
              ],
              [
                'Your own class textbooks — for technical categories',
                'Class 11 and 12 physics, chemistry and mathematics for the technical and science-stream entries, which are the right level and framing for those papers.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Keep a chapter checklist for science and mathematics and mark off only what is genuinely finished — read, understood and tested with questions. In a syllabus this small the distinction between started and finished is where self-assessment usually goes wrong, and the difference between eighty per cent covered and fully covered is several marks that were entirely available.',
          },
          {
            type: 'note',
            title: 'Keep the training log in the same place as the study plan',
            text: 'Candidates who track their study and treat physical training as something that happens when there is time reliably let the training slip first. Writing the running and strength sessions into the same weekly plan as the revision is a small administrative habit, and in a recruitment where the physical and medical stages eliminate the most candidates it protects the part that matters most.',
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
