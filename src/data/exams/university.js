/**
 * University entrance exams — /entrance-exams/university/
 *
 * The CUET pair. Both are unusual among Indian entrances in that a candidate
 * chooses which subject papers to sit, and that choice is constrained by the
 * programmes and universities they intend to apply to. Getting the combination
 * wrong at the application stage cannot be fixed later, which is why both
 * pages here treat subject selection as seriously as syllabus coverage.
 */

const university = [
  /* ══════════════════════════════════════════════════════════════
     CUET UG
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'cuet-ug',
    path: '/entrance-exams/university/cuet-ug/',
    name: 'CUET UG',
    fullName: 'Common University Entrance Test (Undergraduate)',
    authority: 'National Testing Agency (NTA)',
    official: 'cuet.nta.nic.in',
    seoTitle: 'CUET UG 2026: Subject Selection, Pattern & Preparation Guide',
    metaDescription:
      'CUET UG exam guide — choosing subject papers, the general test, domain subjects and languages, marking scheme and preparation strategy.',
    lead: [
      'CUET UG is the common entrance test for undergraduate admission to central universities and a growing list of state, deemed and private institutions. It replaced the board-marks cutoff system that preceded it, which means class 12 performance no longer determines admission at these universities in the way it once did.',
      'Its defining feature is choice. Candidates select which subject papers to sit — languages, domain subjects and a general test — and that selection must match the requirements of every programme and university they intend to apply to. It is the one entrance examination where the most consequential decision is made before you study anything.',
    ],
    quickFacts: [
      ['Conducted by', 'National Testing Agency (NTA)'],
      ['Admits to', 'Central universities and a growing list of state, deemed and private institutions'],
      ['Level', 'Class 12'],
      ['Structure', 'Candidate-selected papers across languages, domain subjects and a general test'],
      ['Marking', 'Five marks for a correct answer, one deducted for a wrong one'],
      ['Critical decision', 'Which subject papers to select, matched to the programmes you want'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CUET UG created a single entrance route into undergraduate programmes at central universities, replacing a system in which admission turned on class 12 board marks. Candidates now sit subject papers of their choosing, and universities specify which papers and what scores they require for each programme.',
      },
      {
        type: 'p',
        text: 'The papers fall into three groups: languages, domain subjects corresponding to class 12 subjects, and a general test covering general knowledge, current affairs, reasoning and quantitative aptitude. A candidate might sit one language, two or three domain subjects and the general test — or a different combination entirely, depending on what their target programmes require.',
      },
      {
        type: 'list',
        title: 'The three paper types',
        items: [
          { text: 'Languages', note: 'reading comprehension, verbal ability, vocabulary and literary aptitude, in a language chosen from a substantial list.' },
          { text: 'Domain subjects', note: 'papers corresponding to class 12 subjects — accountancy, biology, business studies, chemistry, economics, history, mathematics, physics, political science and many more.' },
          { text: 'General Test', note: 'general knowledge, current affairs, general mental ability, numerical ability, quantitative reasoning and logical reasoning. Required by some programmes and optional for others.' },
        ],
      },
      {
        type: 'note',
        title: 'Check the requirements of every programme before choosing papers',
        text: 'Each university specifies which CUET papers it requires for each programme, and the requirements are not uniform — one university’s economics programme may require mathematics while another’s does not. A candidate who selects the wrong combination discovers it at the application stage, when nothing can be done. Compile the requirements of every programme you might apply to before you register.',
      },
    ],
    stages: [
      {
        name: 'Language papers',
        mode: 'Objective, computer-based',
        detail:
          'Reading comprehension based on passages, verbal ability, rearranging parts, choosing the correct word, synonyms and antonyms, and vocabulary. Chosen from a list of languages that includes English and a wide range of Indian and foreign languages.',
      },
      {
        name: 'Domain subject papers',
        mode: 'Objective, computer-based',
        detail:
          'Papers based on the class 12 NCERT syllabus for each subject. Candidates select the domain subjects their target programmes require, typically up to a specified maximum number of papers in total.',
      },
      {
        name: 'General Test',
        mode: 'Objective, computer-based',
        detail:
          'General knowledge, current affairs, general mental ability, numerical ability, quantitative reasoning at class 8 level, and logical and analytical reasoning. Required for some programmes, particularly interdisciplinary ones.',
      },
      {
        name: 'University admission',
        mode: 'Institution-conducted',
        detail:
          'Each university uses CUET scores in its own admission process, applying its own weighting across papers, its own cutoffs and, in some cases, additional criteria.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CUET UG syllabus — language papers, domain subjects based on class 12 NCERT, and the general test.',
        lead: [
          'Domain papers follow the class 12 NCERT syllabus closely, which means your board preparation and your CUET preparation are largely the same work.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Language papers',
                'Reading comprehension based on factual, narrative and literary passages; verbal ability; rearranging the parts of a sentence; choosing the correct word; synonyms and antonyms; and vocabulary. The papers test command of the language rather than knowledge of its literature.',
              ],
              [
                'Domain subjects — sciences',
                'Physics, chemistry, biology and mathematics, drawn from the class 12 NCERT syllabus. The content matches what you are already studying for board examinations, though the question style is objective rather than descriptive.',
              ],
              [
                'Domain subjects — commerce',
                'Accountancy and book-keeping, business studies, economics, and entrepreneurship, again drawn from the class 12 NCERT syllabus for each.',
              ],
              [
                'Domain subjects — humanities',
                'History, political science, geography, sociology, psychology, philosophy, home science, teaching aptitude, and a range of others including fine arts, performing arts, physical education, agriculture, mass media, legal studies, environmental studies and computer science.',
              ],
              [
                'General Test',
                'General knowledge and current affairs; general mental ability; numerical ability; quantitative reasoning involving the application of basic mathematical concepts including arithmetic, algebra, geometry and mensuration at approximately class 8 level; and logical and analytical reasoning.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The close alignment between the domain papers and the class 12 NCERT syllabus is the most useful fact about CUET preparation. A candidate studying properly for their board examinations is covering most of what the domain papers ask — what they need to add is objective-question practice, since boards test descriptively and CUET does not.',
          },
          {
            type: 'list',
            title: 'What the NCERT alignment does and does not give you',
            items: [
              { text: 'It gives you the content', note: 'domain papers are drawn from the class 12 NCERT syllabus, which means the material you are studying for your boards is the material CUET examines. There is no second syllabus to cover.' },
              { text: 'It does not give you the format', note: 'boards ask you to explain, derive and describe; CUET asks you to select between four close options under time. Knowing a chapter well and answering objective questions on it quickly are different achievements.' },
              { text: 'It does not cover the General Test', note: 'general knowledge, current affairs, mental ability and numerical ability appear in no class 12 syllabus, and for programmes that require the paper it has to be prepared separately.' },
              { text: 'It does not settle which papers you need', note: 'the syllabus tells you what each paper contains; only the universities tell you which papers your target programmes require.' },
            ],
          },
          {
            type: 'p',
            text: 'The language papers are worth a short deliberate effort rather than being assumed. Reading comprehension, verbal ability, vocabulary and rearranging jumbled sentences are all straightforward for a competent reader and none of them is automatic under a clock. A few weeks of practice usually takes a candidate from adequate to comfortable, and the paper is required by most programmes.',
          },
          {
            type: 'note',
            title: 'Read the syllabus for the subjects you have actually selected',
            text: 'CUET offers domain papers across the sciences, commerce and humanities, and the list has changed between cycles. Reading the full offering is a poor use of time; reading the syllabus for each paper in your own combination, and checking it against what your school has covered, is the useful version of the exercise.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CUET UG exam pattern — paper selection, marking scheme, normalisation and how universities use the scores.',
        lead: [
          'Five marks for a correct answer and one deducted for a wrong one. A relatively forgiving ratio that rewards attempting rather than skipping.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. The maximum number of papers, question counts and durations have been revised — confirm in the current information bulletin.',
            head: ['Paper type', 'Content', 'Who takes it'],
            rows: [
              ['Language', 'Comprehension, verbal ability, vocabulary', 'Most candidates take at least one'],
              ['Domain subject', 'Class 12 NCERT syllabus for the subject', 'As required by target programmes'],
              ['General Test', 'GK, reasoning, numerical ability', 'Required for some programmes, especially interdisciplinary ones'],
            ],
          },
          {
            type: 'p',
            text: 'The marking is five marks for a correct answer against one deducted for a wrong one — a five-to-one ratio that is considerably more forgiving than most entrance examinations. A blind guess among four options is positive expected value, and any narrowing makes a guess clearly worthwhile. Candidates who skip conservatively out of habit are giving away marks the scheme is offering them.',
          },
          {
            type: 'list',
            title: 'Details that decide outcomes',
            items: [
              { text: 'Paper selection is the critical decision', note: 'made at registration, matched to every programme you might apply to, and not correctable afterwards.' },
              { text: 'Scores are normalised across shifts', note: 'since papers run across multiple days and shifts.' },
              { text: 'Universities weight papers differently', note: 'one may count your best three papers, another may specify which three.' },
              { text: 'A maximum number of papers applies', note: 'and it has been revised, so confirm it before planning your combination.' },
            ],
          },
          {
            type: 'note',
            title: 'CUET has changed substantially between cycles',
            text: 'The maximum number of papers, the list of subjects offered, question counts, durations and the delivery mode have all been revised since the examination was introduced. This is not a case where last year’s guide is close enough — read the current information bulletin before selecting papers.',
          },
          {
            type: 'p',
            text: 'Paper selection is the one decision in this examination that cannot be corrected afterwards, and it is made at registration before any preparation is complete. A programme that required a domain paper you did not sit is closed to you regardless of how well you scored on the others. That makes compiling the requirements of every programme you might realistically apply to — not just your first choice — the genuine first task of a CUET preparation.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why the five-to-one ratio should change your instincts',
                'Five marks gained against one lost is among the more forgiving schemes in Indian entrance testing. A guess narrowed to three options is clearly positive, and even a blind guess breaks even on expectation. Candidates who skip conservatively are leaving marks on the table.',
              ],
              [
                'Why normalisation makes comparison pointless',
                'Papers run across multiple days and shifts, and scores are normalised so that a candidate in a harder shift is not disadvantaged. The raw mark you calculate afterwards is not what universities see, and comparing it with a friend in another shift tells you nothing.',
              ],
              [
                'Why universities differ in how they use the scores',
                'One programme may count your best three papers, another may specify exactly which three, and weightings vary. Two candidates with identical scores can therefore have different prospects at different institutions, which is why the requirements have to be checked programme by programme.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Confirm the maximum number of papers for your cycle',
            text: 'The cap on how many papers a candidate may take has been revised, as have the subjects offered, question counts and durations. Since your whole combination strategy depends on that cap, read the current information bulletin before finalising your registration rather than planning from an earlier year’s arrangement.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CUET UG previous year papers — calibrating the objective question style against your class 12 board preparation.',
        lead: [
          'Past papers show the gap between how boards test a subject and how CUET tests it. The content is the same; the questioning is not.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A class 12 student who knows their subject well can still score poorly on a CUET domain paper, because board preparation trains descriptive answering and CUET asks objective questions with close distractors. The correction is small but it must be made deliberately: practise objective questions on material you already know, under time.',
          },
          {
            type: 'steps',
            title: 'How to use past papers',
            items: [
              { text: 'Work domain papers in your own subjects only.', note: 'Others tell you nothing about the papers you will sit.' },
              { text: 'Notice the distractors.', note: 'CUET options are frequently close, which rewards precise knowledge rather than approximate understanding.' },
              { text: 'Practise the general test if any target programme requires it.', note: 'It is unlike anything class 12 prepares you for.' },
              { text: 'Time every paper.', note: 'The durations are tight relative to the question counts.' },
              { text: 'Practise with the five-to-one marking applied.', note: 'It should widen your attempt range considerably.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CUET PG guide', to: '/entrance-exams/university/cuet-pg/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
              { label: 'Study material by subject', to: '/study-material/' },
            ],
          },
          {
            type: 'list',
            title: 'What board preparation does not prepare you for',
            items: [
              { text: 'Close distractors', note: 'objective options are constructed to be plausible, often differing from the correct answer in one detail. A board answer that would have earned full marks for its explanation is no help in choosing between them.' },
              { text: 'Recognition speed', note: 'boards give you time to think and to write. CUET gives you a fixed short window per question, which rewards recognising what is being asked rather than reasoning it out.' },
              { text: 'Precision of recall', note: 'a specific value, a specific definition, a specific exception. Descriptive answers tolerate approximation; objective questions do not.' },
              { text: 'Breadth over depth', note: 'objective papers sample the whole syllabus rather than examining a few chapters in depth, which punishes the selective preparation many board candidates rely on.' },
            ],
          },
          {
            type: 'p',
            text: 'The productive habit that follows is to work objective questions on each chapter as you finish it for your boards, rather than saving CUET practice for a separate phase. It costs very little extra time, it converts board study into CUET preparation at the same moment, and it exposes the precision gaps while the chapter is still fresh — which is when they are cheapest to close.',
          },
          {
            type: 'p',
            text: 'Practise with the five-to-one marking applied from the beginning. Attempt thresholds are habits rather than calculations performed in the hall, and a candidate who has practised under a harsher scheme will skip questions that this paper rewards attempting. Working past papers with the correct marking is what makes the appropriate boldness automatic.',
          },
          {
            type: 'note',
            title: 'Practise the General Test if any target programme requires it',
            text: 'It is the paper with no class 12 equivalent — general knowledge, current affairs, mental ability, numerical ability and logical reasoning. Nothing in school prepares a candidate for it, which means it needs its own parallel track from early on rather than a fortnight at the end.',
          },
        ],
      },
      'mock-tests': {
        description:
          'CUET UG mock tests — practising your specific paper combination under the real timings.',
        lead: [
          'Practise the combination you have actually selected. A generic CUET mock is not your examination.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because every candidate sits a different set of papers, CUET mock practice has to be assembled rather than taken off the shelf. Work domain papers in your own subjects, your chosen language paper, and the general test if any of your target programmes requires it — each under its real duration.',
          },
          {
            type: 'list',
            title: 'What to track',
            items: [
              { text: 'Accuracy per domain paper', note: 'each is scored separately and universities weight them differently.' },
              { text: 'Attempt rate', note: 'the five-to-one marking justifies attempting more than instinct suggests.' },
              { text: 'General test performance', note: 'if required, it is the paper least covered by class 12 study.' },
              { text: 'Pace against the paper durations', note: 'which are tight relative to question counts.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'All free mock tests', to: '/mock-tests/free/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'steps',
            title: 'Assembling practice for your own combination',
            items: [
              { title: 'Practise the papers you actually selected', text: 'Every candidate sits a different set, so there is no standard CUET mock. Your practice has to be assembled from papers in your own combination.' },
              { title: 'Time each paper to its real duration', text: 'The durations are tight relative to the question counts, and pace is a real constraint even where the content is familiar.' },
              { title: 'Score each domain paper separately', text: 'They are reported separately and weighted differently by different universities, so a combined figure is not a number anyone will use.' },
              { title: 'Watch the attempt rate', text: 'Under five-to-one marking it should be high. A large number of skipped questions is the characteristic conservative error.' },
              { title: 'Track the General Test as its own project', text: 'If it is required, it improves on a different timescale from the domain papers and needs its own log.' },
            ],
          },
          {
            type: 'p',
            text: 'Because CUET falls close to the board examinations for most candidates, the practical constraint is scheduling rather than material. Full timed papers in your combination need to be placed deliberately in the final two months, around board preparation, or they will not happen — and the objective format is exactly the thing board study does not rehearse.',
          },
          {
            type: 'note',
            title: 'Practise on a computer',
            text: 'CUET is computer-based, and navigating between questions, marking for review and working from a rough sheet rather than an annotated question paper all cost time when unfamiliar. A meaningful share of screen-based practice removes an avoidable loss on the day.',
          },
          {
            type: 'p',
            text: 'One further check worth running after each set of practice papers: compare your accuracy on questions drawn from chapters you studied early in class 12 with those from chapters you studied recently. A pronounced gap is a retention finding rather than a knowledge one, and it tells you that the revision cycle needs building into your board preparation rather than that the earlier chapters need re-learning. For an examination sat at the end of a two-year syllabus, that distinction determines whether the final months are spent revising efficiently or re-covering ground you had already earned.',
          },
        ],
      },
      preparation: {
        description:
          'CUET UG preparation — choosing papers correctly, aligning with board study and covering the general test.',
        lead: [
          'The first task is not study. It is compiling the paper requirements of every programme you might apply to.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'CUET preparation begins with research rather than revision. Universities specify different paper requirements for the same-sounding programme, and a candidate who selects a combination that does not satisfy their preferred university finds out when applications open, with no remedy. An afternoon spent compiling those requirements is the most valuable afternoon of the whole preparation.',
          },
          {
            type: 'steps',
            title: 'A plan through class 12',
            items: [
              { text: 'Before registering — compile the paper requirements of every target programme.', note: 'University by university, programme by programme. They differ.' },
              { text: 'Select your combination to satisfy all of them.', note: 'Erring towards one extra paper is safer than one too few, within the permitted maximum.' },
              { text: 'Study class 12 properly.', note: 'The domain papers follow the NCERT syllabus closely; board study and CUET study are largely the same work.' },
              { text: 'Add objective-question practice in each domain subject.', note: 'The content is familiar; the question format is not.' },
              { text: 'If the general test is required — prepare it separately.', note: 'General knowledge, current affairs, reasoning and class 8 mathematics. Nothing in class 12 covers it.' },
              { text: 'Practise your language paper.', note: 'Comprehension and vocabulary, straightforward but worth a few weeks.' },
              { text: 'Final two months — timed papers in your actual combination.', note: 'With the five-to-one marking applied.' },
            ],
          },
          {
            type: 'list',
            title: 'Where CUET candidates lose out',
            items: [
              { text: 'Choosing the wrong paper combination', note: 'the one error that cannot be corrected later.' },
              { text: 'Assuming board preparation is sufficient', note: 'the content matches; the objective format does not.' },
              { text: 'Neglecting the general test', note: 'nothing in class 12 prepares you for it, and some programmes require it.' },
              { text: 'Skipping conservatively', note: 'the five-to-one marking rewards attempting widely.' },
              { text: 'Preparing to a previous year’s structure', note: 'CUET has been revised substantially between cycles.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The research task — before registration',
                'Compiling the paper requirements of every programme you might apply to, across every university you might apply to, and choosing a combination that satisfies all of them. It is the only decision in this examination that cannot be revisited.',
              ],
              [
                'The shared study — through class 12',
                'Class 12 NCERT worked properly. It serves your boards and your domain papers simultaneously, which is why CUET rarely justifies a separate content preparation.',
              ],
              [
                'The format layer — objective practice',
                'Questions on each chapter as you finish it, under time, with close distractors. Small, continuous and the thing that converts board knowledge into CUET marks.',
              ],
              [
                'The General Test — a parallel track',
                'Required by some programmes, especially interdisciplinary ones, and prepared by nothing in school. It needs its own slot from month two if you need it at all.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The tension candidates feel between board preparation and CUET preparation is largely illusory for the domain papers, since they draw on the same syllabus. What is genuinely additional is the format practice, the General Test if required, and the language paper — none of which is large. Treating CUET as a second full preparation alongside the boards creates a scheduling problem that does not need to exist.',
          },
          {
            type: 'note',
            title: 'Check requirements for programmes you might apply to, not only your first choice',
            text: 'Preferences shift between registration and admission, and a combination chosen for a single target can close off perfectly reasonable alternatives. Building the combination to cover a realistic range of programmes costs nothing extra at registration and preserves options you may want later.',
          },
        ],
      },
      'study-material': {
        description:
          'CUET UG study material — subject notes aligned to class 12 NCERT, plus general test preparation.',
        lead: [
          'NCERT for the domain papers. These notes consolidate them and cover the general test, which nothing in school does.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For domain subjects, the class 12 NCERT textbooks are the correct primary source — the papers are drawn from them directly. The notes below consolidate that material and, more importantly, cover the general test, which draws on general knowledge, reasoning and arithmetic that the class 12 curriculum does not touch.',
          },
          {
            type: 'links',
            title: 'Subject notes for CUET UG',
            items: [
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'History notes', to: '/study-material/history/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'English notes', to: '/study-material/english/' },
            ],
          },
          {
            type: 'list',
            title: 'How to combine board and CUET study',
            items: [
              'Study class 12 NCERT properly — it serves both examinations.',
              'After each chapter, do objective questions on it rather than only descriptive ones.',
              'Keep general test preparation separate and running in parallel from month two.',
              'Practise your language paper for a few weeks; it is straightforward but not automatic.',
              'Work timed papers in your actual selected combination in the final months.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Class 12 NCERT — the primary source for domain papers',
                'The papers are drawn from it directly, which makes it the right book rather than a starting point. Read it with the precision an objective paper requires — definitions, values, exceptions and the details a descriptive answer would gloss.',
              ],
              [
                'Objective question banks per subject',
                'Worked chapter by chapter alongside your board study. This is the layer that converts content knowledge into the recognition speed the paper tests.',
              ],
              [
                'General Test material — where required',
                'General knowledge, current affairs, mental ability and numerical ability. A separate body of material with no school equivalent, best built as themed sheets plus a daily current affairs habit.',
              ],
              [
                'Language practice — a few weeks',
                'Comprehension, verbal ability, vocabulary and sentence rearrangement. Straightforward, finite and worth a short deliberate effort rather than an assumption.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Read NCERT for detail rather than for narrative when preparing the domain papers. The difference matters: a candidate reading for understanding will follow the argument of a chapter and skim the specific values, definitions and exceptions, which is exactly where objective distractors are built. Reading with a question paper in mind changes what you notice on the page.',
          },
          {
            type: 'note',
            title: 'Keep the General Test running in parallel',
            text: 'Its current affairs component is cumulative and cannot be assembled late, and its reasoning and numerical components improve with regular short practice rather than with concentrated study. Twenty minutes a day from month two covers a paper that some interdisciplinary programmes treat as decisive.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CUET UG exam pattern?',
        a: 'Candidates select which papers to sit from three groups — language papers, domain subject papers based on the class 12 NCERT syllabus, and a general test covering general knowledge, current affairs, reasoning and numerical ability. Five marks are awarded for a correct answer and one deducted for a wrong one. The maximum number of papers, question counts and durations have been revised between cycles, so confirm them in the current information bulletin.',
      },
      {
        q: 'How do I choose which CUET papers to take?',
        a: 'By compiling the requirements of every programme and university you might apply to before you register, since each specifies which papers it requires and the requirements are not uniform — one university’s economics programme may require mathematics while another’s does not. This is the single most consequential decision in CUET preparation, because a candidate who selects a combination that does not satisfy their preferred programme finds out when applications open, with no remedy available.',
      },
      {
        q: 'Is CUET based on the class 12 syllabus?',
        a: 'The domain papers are, and they follow the NCERT syllabus closely — which means board preparation and CUET preparation are largely the same work. The difference is format: boards test descriptively while CUET asks objective questions with close distractors, so a student who knows the subject well can still score poorly without objective-question practice. The general test is the exception, drawing on general knowledge, reasoning and arithmetic that class 12 does not cover at all.',
      },
      {
        q: 'Should I guess in CUET?',
        a: 'Yes, more than instinct suggests. With five marks for a correct answer against one deducted for a wrong one, a blind guess among four options has positive expected value, and any genuine narrowing makes a guess clearly worthwhile. This is among the most forgiving marking schemes in Indian entrance examinations, and candidates who skip conservatively out of habits formed on harsher papers are giving away marks the scheme is offering them.',
      },
      {
        q: 'Do CUET scores replace board marks for admission?',
        a: 'For admission to the participating central universities, CUET scores are the basis of selection rather than class 12 board marks, which is the change the examination introduced. Universities apply their own weighting across the papers a candidate has taken, set their own cutoffs, and in some cases add further criteria — so the same CUET score can produce different outcomes at different institutions. Board performance may still matter for eligibility requirements.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     CUET PG
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'cuet-pg',
    path: '/entrance-exams/university/cuet-pg/',
    name: 'CUET PG',
    fullName: 'Common University Entrance Test (Postgraduate)',
    authority: 'National Testing Agency (NTA)',
    official: 'pgcuet.nta.nic.in',
    seoTitle: 'CUET PG 2026: Subject Paper Codes, Pattern & Strategy',
    metaDescription:
      'CUET PG exam guide — choosing the right subject paper code, the graduate-level syllabus, marking scheme and preparation strategy.',
    lead: [
      'CUET PG is the common entrance test for postgraduate admission to central universities and a widening set of other institutions. Like its undergraduate counterpart it replaced institution-specific entrances with a single test, and like it, the candidate chooses which paper to sit.',
      'Here that choice is expressed as a subject paper code, and it is even more consequential than at undergraduate level. Each code corresponds to a defined syllabus, universities map programmes to specific codes, and choosing a code that does not match your intended programme means sitting the wrong examination entirely.',
    ],
    quickFacts: [
      ['Conducted by', 'National Testing Agency (NTA)'],
      ['Admits to', 'Postgraduate programmes at central universities and other participating institutions'],
      ['Level', 'A bachelor’s degree in a relevant discipline'],
      ['Structure', 'A subject-specific paper chosen by code, at graduate level'],
      ['Marking', 'Four marks for a correct answer, one deducted for a wrong one'],
      ['Critical decision', 'Selecting the subject paper code that your target programmes accept'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CUET PG provides a single entrance route to postgraduate programmes at central universities and a growing number of state, deemed and private institutions. Candidates register for one or more subject paper codes, sit the corresponding papers, and universities then use those scores in their own admission processes.',
      },
      {
        type: 'p',
        text: 'The papers are subject-specific and pitched at graduate level, testing the content of a bachelor’s degree in that discipline. Some codes cover a single subject narrowly; others are broader, covering a family of related disciplines. Which code a programme accepts is set by the university, and mapping that correctly is the first task of any CUET PG preparation.',
      },
      {
        type: 'list',
        title: 'How the paper codes work',
        items: [
          { text: 'Each code has a defined syllabus', note: 'published by NTA, covering the graduate-level content of that subject.' },
          { text: 'Universities map programmes to codes', note: 'and the same programme name at two universities may accept different codes.' },
          { text: 'Candidates may register for more than one code', note: 'within the limits and scheduling of the examination.' },
          { text: 'Papers are held across a window', note: 'with different codes scheduled on different days and shifts.' },
        ],
      },
      {
        type: 'note',
        title: 'Verify the paper code for every programme you want',
        text: 'The commonest and most costly CUET PG error is registering for a subject paper code that the target programme does not accept. Because codes are set by NTA and mapped to programmes by each university, this must be checked programme by programme in the university’s own admission information, not assumed from the subject name.',
      },
    ],
    stages: [
      {
        name: 'Subject paper',
        mode: 'Objective, computer-based',
        detail:
          'A subject-specific paper at graduate level, corresponding to the code the candidate has registered for. Four marks for a correct answer, one deducted for a wrong one. Question counts and durations are set out in the information bulletin.',
      },
      {
        name: 'Result and score reporting',
        mode: 'Score-based',
        detail:
          'Scores are published for each paper taken, with normalisation applied where papers run across multiple shifts.',
      },
      {
        name: 'University admission',
        mode: 'Institution-conducted',
        detail:
          'Each participating university uses CUET PG scores in its own admission process, applying its own cutoffs, weightings and any additional criteria such as interviews for research-oriented programmes.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CUET PG syllabus — how subject paper codes define graduate-level syllabi, and what the papers cover.',
        lead: [
          'There is no single CUET PG syllabus. There is one per subject paper code, and reading the right one is the whole starting point.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'NTA publishes a syllabus for each subject paper code, and those syllabi are drawn from the graduate curriculum of the discipline concerned. The content is therefore whatever a well-taught bachelor’s degree in that subject would have covered — which makes your own degree material the natural primary source, guided by the published syllabus for the code you have selected.',
          },
          {
            type: 'defs',
            items: [
              [
                'Sciences and mathematics codes',
                'Graduate-level content in physics, chemistry, mathematics, statistics, life sciences, botany, zoology, environmental science and related disciplines, following the standard undergraduate curriculum in each.',
              ],
              [
                'Humanities and social sciences codes',
                'History, political science, sociology, psychology, economics, philosophy, geography, education, social work and related disciplines, again at graduate level.',
              ],
              [
                'Commerce and management codes',
                'Accounting, finance, business studies, management principles, economics for business and related content.',
              ],
              [
                'Language and literature codes',
                'Literature, linguistics and language studies in English and a range of Indian and foreign languages, covering the graduate curriculum in each.',
              ],
              [
                'Professional and applied codes',
                'Law, computer science and applications, agriculture, mass communication, library science, physical education and other applied disciplines, each with its own defined syllabus.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Some codes are narrow and some are broad, covering a family of related subjects in one paper. Where a broad code applies, a candidate may face questions outside their specialisation within the discipline — which is worth knowing before the examination, since it changes how widely you need to revise.',
          },
          {
            type: 'list',
            title: 'Why the code determines everything',
            items: [
              { text: 'It fixes the syllabus', note: 'each code has its own published syllabus, and they differ in scope as well as content. Preparing from a general account of CUET PG prepares you for no code in particular.' },
              { text: 'It fixes which programmes you can apply to', note: 'universities specify which code each programme accepts. A strong score in the wrong code does not open the programme you wanted.' },
              { text: 'It fixes the breadth expected', note: 'some codes are narrow and some cover a family of related subjects, which means a specialist may need to revise material well outside their own concentration.' },
              { text: 'It is chosen at registration', note: 'before your preparation is complete and before you may have finalised your programme preferences — which is why the verification has to come first.',
              },
            ],
          },
          {
            type: 'p',
            text: 'The broad codes are where candidates are most often caught out. A candidate who specialised in one area of a discipline may find the code covering the whole family of related subjects, several of which they last studied in their second year. Reading the published syllabus for the code — rather than assuming it matches their own degree concentration — is what surfaces that, and it is worth doing before rather than after registration.',
          },
          {
            type: 'note',
            title: 'The syllabus is graduate-level, not postgraduate',
            text: 'The papers examine the content of a bachelor’s degree in the discipline rather than research-level material. That calibration matters: a candidate preparing from postgraduate texts is working above the level the paper asks for, while one revising only their final-year modules is working below its breadth.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CUET PG exam pattern — subject paper structure, marking scheme, normalisation and how universities use scores.',
        lead: [
          'One subject paper, objective, at graduate level, with four marks for a correct answer and one deducted for a wrong one.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Paper structure. Question counts, duration and the code list have been revised — confirm in the current information bulletin.',
            head: ['Element', 'Detail', 'Notes'],
            rows: [
              ['Format', 'Objective, computer-based', 'One paper per subject code registered'],
              ['Level', 'Graduate', 'Content of a bachelor’s degree in the discipline'],
              ['Marking', '+4 for correct, −1 for wrong', 'A relatively forgiving ratio'],
              ['Normalisation', 'Applied across shifts', 'Where a code runs in multiple shifts'],
            ],
          },
          {
            type: 'p',
            text: 'The four-to-one marking ratio means a blind guess among four options breaks even and any narrowing makes a guess positive. In a subject paper at graduate level, where a candidate frequently has partial knowledge that eliminates one or two options, that arithmetic favours attempting widely rather than skipping.',
          },
          {
            type: 'list',
            title: 'What to settle before registering',
            items: [
              { text: 'Which code each target programme accepts', note: 'checked in the university’s own admission information, programme by programme.' },
              { text: 'Whether to register for more than one code', note: 'possible within scheduling constraints, and worth considering if your targets differ.' },
              { text: 'How each university weights the score', note: 'cutoffs, weightings and additional criteria vary.' },
              { text: 'Whether any target programme adds an interview', note: 'research-oriented programmes frequently do.' },
            ],
          },
          {
            type: 'note',
            title: 'CUET PG has changed between cycles',
            text: 'The code list, question counts, durations, delivery arrangements and the set of participating universities have all been revised since the examination began. Read the current information bulletin, and the current admission information of each university, rather than relying on a previous year’s arrangement.',
          },
          {
            type: 'p',
            text: 'The four-to-one marking ratio should change how a graduate candidate approaches the paper, because it is more forgiving than most postgraduate entrances. A blind guess among four options breaks even in expectation, and any narrowing at all makes an attempt clearly worthwhile. Candidates arriving from harsher examinations — or simply from an academic disposition that dislikes answering without certainty — routinely leave marks unclaimed.',
          },
          {
            type: 'defs',
            items: [
              [
                'Registering for more than one code',
                'Possible within the scheduling constraints, and worth considering where your target programmes are spread across disciplines or where a related code opens additional options. It multiplies the preparation, so it is a decision to make deliberately rather than defensively.',
              ],
              [
                'How universities use the score',
                'Cutoffs, weightings and additional criteria are set by each institution rather than centrally. Two programmes accepting the same code can treat the same score quite differently, which is why the checking has to be programme by programme.',
              ],
              [
                'Interviews at research-oriented programmes',
                'Frequently added, particularly for research degrees and for programmes with small intakes. Knowing in advance which of your targets require one changes what you prepare in the weeks after the result.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Confirm the current arrangements before registering',
            text: 'The code list, question counts, durations, delivery arrangements and the set of participating universities have all been revised between cycles. Since your code choice depends on which programmes accept what, and since that list changes, the current information bulletin is the only reliable source at the moment you register.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CUET PG previous year papers — calibrating the depth expected in your subject code and identifying emphasis.',
        lead: [
          'Past papers in your own subject code show how deep the questions go, which the published syllabus cannot convey.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A published syllabus lists topics without indicating how far into each the questions reach. For a graduate-level subject paper that difference matters a great deal, since the same topic can be examined at survey level or in detail. Past papers in your specific code settle the question, and they also reveal which parts of a broad syllabus carry the emphasis.',
          },
          {
            type: 'steps',
            title: 'How to use them',
            items: [
              { text: 'Work past papers in your own code only.', note: 'Other codes have different syllabi and different depths.' },
              { text: 'Build a topic frequency table.', note: 'Especially useful where the code covers a broad family of subjects.' },
              { text: 'Compare against your degree syllabus.', note: 'Gaps between what you studied and what the code covers are the priority.' },
              { text: 'Practise with the four-to-one marking.', note: 'It justifies a wider attempt range than instinct suggests.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'CUET UG guide', to: '/entrance-exams/university/cuet-ug/' },
              { label: 'UGC NET guide', to: '/government-exams/teaching-net/ugc-net/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
          {
            type: 'list',
            title: 'What past papers in your code establish',
            items: [
              { text: 'The depth of questioning', note: 'how far into each topic the paper reaches, which a topic list cannot convey and which determines whether you revise for recall or for application.' },
              { text: 'The distribution across the code', note: 'where a code covers several related subjects, the papers show how the questions are spread — often less evenly than the syllabus implies.' },
              { text: 'The distractor style', note: 'close options built around a specific distinction, which is the feature graduate coursework least prepares you for.' },
              { text: 'The gaps against your own degree', note: 'topics on the code syllabus your course covered lightly or not at all, visible in the papers before they become visible in a result.' },
            ],
          },
          {
            type: 'p',
            text: 'Compare your topic frequency table against your own degree syllabus explicitly rather than impressionistically. The overlap is usually substantial and the gaps are usually specific — two or three areas the paper emphasises and your course did not. Those areas are where a preparation is won or lost, and they are invisible unless the comparison is made deliberately.',
          },
          {
            type: 'p',
            text: 'Practise with the four-to-one marking applied from the first paper. The appropriate attempt threshold is a habit rather than a calculation, and a candidate who has practised under stricter rules — or under none — will not have built the boldness this scheme rewards. It is a small adjustment that reliably returns marks.',
          },
          {
            type: 'note',
            title: 'Work papers in your own code only',
            text: 'The codes are effectively separate examinations sharing a name and a format. Practice in a neighbouring discipline builds nothing transferable beyond familiarity with the question style, which a few papers in your own code supply anyway — and it consumes time that the code syllabus will absorb entirely.',
          },
        ],
      },
      'mock-tests': {
        description:
          'CUET PG mock tests — subject-specific practice at graduate level with the correct marking scheme.',
        lead: [
          'Practice must be in your own subject code. There is no generic CUET PG mock worth taking.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because every code has its own syllabus, CUET PG practice is necessarily subject-specific. Past papers in your code are the best available material, supplemented by graduate-level question banks in your discipline and by the objective-question practice that a degree course, which usually tests descriptively, will not have given you.',
          },
          {
            type: 'list',
            title: 'What to work on',
            items: [
              { text: 'Objective-question practice in your subject', note: 'a format most graduate courses do not use, and one with close distractors.' },
              { text: 'Coverage of the whole code syllabus', note: 'particularly where the code is broader than your specialisation.' },
              { text: 'Attempt rate', note: 'the four-to-one marking rewards attempting on partial knowledge.' },
              { text: 'Pace', note: 'the durations are set relative to the question counts and leave limited room.' },
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
          {
            type: 'steps',
            title: 'Building practice for a subject-specific paper',
            items: [
              { title: 'Use past papers in your code as the core', text: 'There is no generic CUET PG mock worth taking. Your own code’s papers are both the practice and the calibration.' },
              { title: 'Supplement with objective questions on your syllabus', text: 'Graduate courses examine descriptively, so most candidates have very little experience answering multiple-choice questions in their own discipline.' },
              { title: 'Check coverage across the whole code', text: 'Especially where the code is broader than your specialisation. Accuracy concentrated in your strong areas conceals a coverage problem.' },
              { title: 'Track attempt rate', text: 'Under four-to-one marking it should be high. Academic caution is the characteristic source of unclaimed marks here.' },
              { title: 'Time the full paper', text: 'The duration is set relative to the question count and leaves limited room, which is easy to underestimate when the content is familiar.' },
            ],
          },
          {
            type: 'p',
            text: 'The objective format is the genuinely unfamiliar element for most candidates, and it is worth naming as a skill rather than a detail. A graduate who can write a strong essay on a topic may still hesitate between two close options on it, because selecting under time draws on precision of recall rather than on the ability to construct an argument. Practice on that specific operation is what converts subject knowledge into a score.',
          },
          {
            type: 'note',
            title: 'Practise on a computer',
            text: 'The paper is computer-based, and navigation, review flags and working from a rough sheet all cost time when unfamiliar. For a candidate whose recent examinations have been written by hand, screen-based practice removes an avoidable loss that has nothing to do with the subject.',
          },
          {
            type: 'p',
            text: 'Because the code may cover a family of subjects rather than your own concentration, it is worth scoring your practice papers by sub-area as well as in total. A respectable overall figure built on strong performance in your specialisation and weak performance across the neighbouring subjects is a coverage problem wearing the appearance of a good result — and it will not survive a paper that distributes its questions across the whole code. Sub-area scoring is what makes that visible while there is still time to rebuild the areas your degree treated lightly.',
          },
        ],
      },
      preparation: {
        description:
          'CUET PG preparation — verifying paper codes, revising your degree syllabus and practising objective questions.',
        lead: [
          'Verify the code first, revise your degree second, and practise objective questions third. In that order.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The structure of CUET PG preparation follows from its structure as an examination. The code determines the syllabus, so it must be settled before any study begins. The syllabus is your degree content, so your own course material is the natural source. And the format is objective, which your degree examinations almost certainly were not — so that gap needs deliberate practice.',
          },
          {
            type: 'steps',
            title: 'A three to five month plan',
            items: [
              { text: 'First — verify the code each target programme accepts.', note: 'In each university’s own admission information. Do not infer from the subject name.' },
              { text: 'Second — read the published syllabus for that code.', note: 'And map it against what your degree actually covered.' },
              { text: 'Months one to three — revise the code syllabus.', note: 'From your degree textbooks, prioritising the gaps your mapping revealed.' },
              { text: 'From month two — objective-question practice in the subject.', note: 'The format gap between a degree examination and this one is real.' },
              { text: 'From month two — past papers in your code.', note: 'For depth calibration and topic emphasis.' },
              { text: 'Final month — timed full papers.', note: 'With the four-to-one marking applied.' },
              { text: 'Check whether any target programme adds an interview.', note: 'Research-oriented programmes often do, and it needs its own preparation.' },
            ],
          },
          {
            type: 'list',
            title: 'The costly errors',
            items: [
              { text: 'Registering for the wrong code', note: 'the error that cannot be corrected, and the commonest one.' },
              { text: 'Revising only your specialisation', note: 'where the code covers a broader family of subjects.' },
              { text: 'No objective-question practice', note: 'graduate courses test descriptively; this paper does not.' },
              { text: 'Skipping conservatively', note: 'the four-to-one marking rewards attempting on partial knowledge.' },
              { text: 'Ignoring university-specific requirements', note: 'cutoffs, weightings and interviews vary.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Verification — the first task',
                'Which code each target programme accepts, checked in each university’s own admission information. It is an afternoon of research, it precedes all study, and getting it wrong is the one error this examination does not let you correct.',
              ],
              [
                'Revision — the bulk of the work',
                'The published code syllabus at graduate level, using your own degree textbooks, prioritised by a past-paper frequency table rather than by syllabus order.',
              ],
              [
                'Format practice — the conversion layer',
                'Objective questions in your own subject, which graduate coursework does not supply. It is what turns knowing the material into scoring on it.',
              ],
              [
                'Programme-specific requirements — checked early',
                'Cutoffs, weightings and whether an interview is added. These vary by institution and they shape what you do after the examination as much as before it.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Where a code is broader than your degree specialisation, plan the revision around that gap from the beginning rather than discovering it in a mock. A candidate who concentrated in one area of a discipline may need to rebuild two or three neighbouring subjects to graduate level — which is entirely achievable over a few months and impossible in a final fortnight.',
          },
          {
            type: 'note',
            title: 'Consider a second code deliberately',
            text: 'Registering for more than one code is possible within scheduling constraints and can widen the programmes available to you. It also multiplies the syllabus you are responsible for, so it is worth doing where your targets genuinely span disciplines and worth avoiding where it merely feels like insurance.',
          },
        ],
      },
      'study-material': {
        description:
          'CUET PG study material — guidance on using degree textbooks alongside the published code syllabus.',
        lead: [
          'Your own degree textbooks, guided by the published syllabus for your code. These notes supplement where they overlap.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For a graduate-level subject paper, the standard textbooks of your own degree course are the correct primary source — matched in level and coverage to what the code syllabus specifies. The notes on this site overlap with several of the humanities and science codes and are useful for consolidation and revision, particularly where your degree course covered a topic thinly.',
          },
          {
            type: 'links',
            title: 'Notes overlapping common subject codes',
            items: [
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'History notes', to: '/study-material/history/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Environment notes', to: '/study-material/environment/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
            ],
          },
          {
            type: 'list',
            title: 'How to structure the revision',
            items: [
              'Start from the published syllabus for your code, not from your degree syllabus.',
              'Map the two against each other and prioritise the gaps.',
              'Use your degree textbooks as the primary source for depth.',
              'Practise objective questions on each topic as you finish it.',
              'Work past papers in your code throughout, not only at the end.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The published code syllabus — the starting document',
                'Not your degree syllabus. The two overlap substantially and differ specifically, and the differences are what your preparation is actually for.',
              ],
              [
                'Your own degree textbooks — the depth source',
                'Matched to graduate level, carrying the notation and framing you already recognise, and containing the reasoning that condensed guides remove.',
              ],
              [
                'Past papers in your code — the calibration and the practice',
                'The only material that shows how deep the questions reach and how the distractors are built. Worth reserving a couple for late practice rather than working through them all early.',
              ],
              [
                'Objective question practice — the format layer',
                'Chapter by chapter as you revise, rather than as a final phase. It exposes precision gaps while the material is still fresh.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Map the published syllabus against your degree syllabus in the first week and prioritise the gaps. That single exercise replaces a great deal of general advice about what to study: it identifies the topics you have covered and need only to refresh, the topics you covered lightly and need to rebuild, and the topics you never met at all — three categories requiring three quite different amounts of time.',
          },
          {
            type: 'note',
            title: 'Work past papers throughout, not only at the end',
            text: 'They serve as calibration early and as rehearsal late, and using them only in the final month wastes the more valuable of the two functions. Sitting one at the start of your preparation tells you how deep to revise; sitting the last one at the end tells you whether you did.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CUET PG exam pattern?',
        a: 'An objective, computer-based subject paper at graduate level, corresponding to the subject paper code the candidate has registered for. Four marks are awarded for a correct answer and one is deducted for a wrong one, and normalisation is applied where a code runs across multiple shifts. Question counts, durations and the list of available codes have been revised between cycles, so confirm them in the current information bulletin.',
      },
      {
        q: 'How do I choose the right CUET PG subject paper code?',
        a: 'By checking, programme by programme, which code each of your target universities accepts for the programme you want — in that university’s own admission information rather than by inferring from the subject name. Codes are defined by NTA and mapped to programmes by each university, and the same programme name at two institutions may accept different codes. Registering for a code your target programme does not accept means sitting the wrong examination, and it cannot be corrected afterwards.',
      },
      {
        q: 'What syllabus does CUET PG follow?',
        a: 'There is no single syllabus — NTA publishes one for each subject paper code, drawn from the graduate curriculum of that discipline. In practice the content is what a well-taught bachelor’s degree in the subject would have covered, which makes your own degree textbooks the natural primary source. Note that some codes are broad, covering a family of related subjects, so a candidate may face questions outside their own specialisation within the discipline.',
      },
      {
        q: 'How is CUET PG different from a degree examination?',
        a: 'Mainly in format. The content is graduate-level material you have already studied, but the questions are objective with close distractors, whereas most degree examinations test descriptively. A candidate who knows the subject well can still score poorly without deliberate objective-question practice, because the two formats reward different kinds of precision. The marking is also relatively forgiving at four marks against one, which rewards attempting on partial knowledge.',
      },
      {
        q: 'Can I register for more than one CUET PG paper?',
        a: 'Yes, within the limits and scheduling constraints of the examination, since different codes are held on different days and shifts. This is worth considering where your target programmes across universities map to different codes, or where you are applying across two related disciplines. Confirm the current rules on multiple registrations and the scheduling in the information bulletin before planning around it.',
      },
    ],
  },
]

export default university
