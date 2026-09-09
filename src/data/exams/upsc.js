/**
 * UPSC exams — /government-exams/upsc/
 *
 * Six examinations conducted by the Union Public Service Commission. They
 * differ enormously in shape — one is an essay-and-optional marathon, one is a
 * school-level defence entry, one is a technical engineering paper — but they
 * share a characteristic worth stating on every page: the written stage is
 * only part of the assessment, and the personality test or Services Selection
 * Board that follows carries real weight.
 */

const upsc = [
  /* ══════════════════════════════════════════════════════════════
     UPSC Civil Services
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'upsc-civil-services',
    path: '/government-exams/upsc/upsc-civil-services/',
    name: 'UPSC CSE',
    fullName: 'Union Public Service Commission — Civil Services Examination',
    authority: 'Union Public Service Commission (UPSC)',
    official: 'upsc.gov.in',
    seoTitle: 'UPSC CSE 2026: Prelims, Mains & Interview — Complete Guide',
    metaDescription:
      'UPSC Civil Services exam guide — prelims and CSAT, the nine mains papers, optional subject, interview, syllabus, strategy and free mock tests.',
    lead: [
      'The Civil Services Examination selects officers for the Indian Administrative Service, the Indian Police Service, the Indian Foreign Service and a range of allied central services. It is the most written-about examination in the country, and also the most widely misunderstood — largely because its three stages test three genuinely different things.',
      'Prelims is an elimination filter whose marks are then discarded. Mains is nine papers of written argument, of which seven count. The interview is a personality test rather than a knowledge test. A candidate who prepares for all three as though they were the same exam will be well prepared for none of them.',
    ],
    quickFacts: [
      ['Conducted by', 'Union Public Service Commission (UPSC)'],
      ['Services filled', 'IAS, IPS, IFS and a range of Group A and Group B central services'],
      ['Level', 'Bachelor’s degree in any discipline'],
      ['Stages', 'Preliminary (screening) → Main (written, nine papers) → Personality Test'],
      ['Merit is built from', 'Seven mains papers plus the interview — prelims marks are discarded'],
      ['Attempts and age', 'Limited by category, with a narrower band than most exams — confirm in the notification'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The Civil Services Examination is a single competitive process feeding more than twenty services. Candidates submit a preference order over those services, and allocation follows from rank and preference, along with category and cadre considerations. One examination, one merit list, and outcomes that differ enormously across a narrow band of marks.',
      },
      {
        type: 'p',
        text: 'Its structure is the thing to understand first. The preliminary examination is an objective screen whose marks do not carry forward. The main examination consists of nine papers, two of which are qualifying language papers and seven of which build the merit — an essay, four general studies papers and two papers in an optional subject of your choosing. The personality test follows, carrying marks that are a meaningful fraction of the total.',
      },
      {
        type: 'list',
        title: 'What each stage actually rewards',
        items: [
          { text: 'Prelims', note: 'breadth of factual coverage and elimination skill under a one-third deduction, plus a qualifying aptitude paper that must not be neglected.' },
          { text: 'Mains general studies', note: 'the ability to write a structured, balanced answer on an unfamiliar question in about seven or eight minutes.' },
          { text: 'The essay paper', note: 'sustained argument over two essays, assessed on coherence and perspective rather than on information density.' },
          { text: 'The optional subject', note: 'genuine subject depth, at roughly postgraduate level, across two papers.' },
          { text: 'The personality test', note: 'judgement, balance and the ability to hold a considered view under questioning — not recall.' },
        ],
      },
      {
        type: 'note',
        title: 'The qualifying papers are not a formality',
        text: 'The two language papers in the main examination are qualifying rather than merit-counting, but failing either means the rest of your mains papers are not evaluated at all. Every cycle produces candidates whose merit-paper performance was never assessed because a qualifying paper went wrong.',
      },
    ],
    stages: [
      {
        name: 'Preliminary Examination',
        mode: 'Two objective papers, 2 hours each',
        detail:
          'General Studies Paper I of 100 questions and 200 marks, which decides the prelims cutoff; and CSAT Paper II of 80 questions and 200 marks, which is qualifying at a prescribed percentage. One third of a mark is deducted for wrong answers. Prelims marks do not carry into the final merit.',
      },
      {
        name: 'Main Examination',
        mode: 'Nine descriptive papers',
        detail:
          'Paper A in an Indian language and Paper B in English, both qualifying at 300 marks each; the Essay paper at 250 marks; General Studies Papers I to IV at 250 marks each; and two optional subject papers at 250 marks each. The seven merit papers total 1750 marks.',
      },
      {
        name: 'Personality Test',
        mode: 'Interview before a board',
        detail:
          'An assessment of personal suitability for a career in public service — judgement, intellectual balance, depth of interest and the capacity to hold a reasoned position. Carries 275 marks, added to the 1750 mains marks for a final total of 2025.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'UPSC CSE syllabus — prelims General Studies and CSAT, the four mains General Studies papers, the essay and optional subject.',
        lead: [
          'The UPSC syllabus is famously short and famously open-ended. Its brevity is the difficulty: a line such as "salient features of Indian society" is a year of reading compressed into six words.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Prelims — General Studies Paper I',
                'Current events of national and international importance; history of India and the Indian national movement; Indian and world geography, physical, social and economic; Indian polity and governance covering the Constitution, political system, panchayati raj, public policy and rights issues; economic and social development including sustainable development, poverty, inclusion, demographics and social sector initiatives; general issues on environmental ecology, biodiversity and climate change; and general science.',
              ],
              [
                'Prelims — CSAT Paper II',
                'Comprehension; interpersonal skills including communication; logical reasoning and analytical ability; decision making and problem solving; general mental ability; and basic numeracy and data interpretation at approximately class 10 level. Qualifying at a prescribed percentage — and a paper that has ended candidacies for those who assumed it would look after itself.',
              ],
              [
                'Mains — General Studies Paper I',
                'Indian heritage and culture; modern Indian history from the mid-eighteenth century, the freedom struggle and post-independence consolidation; the history of the world from the eighteenth century; salient features of Indian society, diversity, the role of women, population issues, poverty, urbanisation, globalisation, secularism and communalism; and physical geography, resource distribution, industrial location and geophysical phenomena.',
              ],
              [
                'Mains — General Studies Paper II',
                'The Constitution — its features, amendments, basic structure and comparison with other constitutions; the union and states, separation of powers, parliament and state legislatures, executive and judiciary; governance, transparency and accountability, e-governance, citizens’ charters; welfare schemes and social sector development in health, education and human resources; and India and its neighbourhood, bilateral and global groupings and international institutions.',
              ],
              [
                'Mains — General Studies Paper III',
                'The Indian economy, planning, resource mobilisation, growth and employment; inclusive growth; government budgeting; agriculture, cropping patterns, subsidies, food processing, storage and public distribution; land reforms; liberalisation and its effects; infrastructure and investment models; science and technology and its applications, including IT, space, biotechnology and intellectual property; environment, conservation and impact assessment; disaster management; and internal security including its linkages with development, cyber security, money laundering and border management.',
              ],
              [
                'Mains — General Studies Paper IV: Ethics',
                'Ethics and human interface, human values, attitude, aptitude and foundational values for civil service, emotional intelligence, contributions of moral thinkers, public and civil service values, probity in governance, and case studies. The paper that rewards clarity of principle far more than volume of reading.',
              ],
              [
                'Optional Subject',
                'Two papers of 250 marks each in one subject chosen from a prescribed list covering the humanities, social sciences, sciences, engineering, medicine, commerce, management, law and a range of literatures. The syllabus for each is roughly postgraduate in depth.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The practical way to read this syllabus is as a set of themes to build views about rather than facts to accumulate. Mains questions rarely ask what something is; they ask you to examine, critically analyse or discuss. A candidate who has read broadly but never formed a position finds that the reading does not convert into marks.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'UPSC CSE exam pattern — prelims and CSAT structure, the nine mains papers and their marks, and how the final merit is calculated.',
        lead: [
          'Three stages, 2025 total marks, and only 1750 of them earned in writing. The arithmetic of where marks come from should shape where preparation goes.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Preliminary examination. Confirm marks, timing and the qualifying percentage for CSAT against the current notification.',
            head: ['Paper', 'Questions', 'Marks', 'Status'],
            rows: [
              ['General Studies Paper I', '100', '200', 'Decides the prelims cutoff'],
              ['CSAT Paper II', '80', '200', 'Qualifying at a prescribed percentage'],
            ],
          },
          {
            type: 'table',
            caption: 'Main examination. Confirm the current paper list and marks in the notification.',
            head: ['Paper', 'Content', 'Marks', 'Status'],
            rows: [
              ['Paper A', 'Indian language', '300', 'Qualifying'],
              ['Paper B', 'English', '300', 'Qualifying'],
              ['Essay', 'Two essays', '250', 'Merit'],
              ['General Studies I', 'Heritage, history, geography, society', '250', 'Merit'],
              ['General Studies II', 'Polity, governance, international relations', '250', 'Merit'],
              ['General Studies III', 'Economy, technology, environment, security', '250', 'Merit'],
              ['General Studies IV', 'Ethics, integrity and aptitude', '250', 'Merit'],
              ['Optional Paper I', 'Chosen subject', '250', 'Merit'],
              ['Optional Paper II', 'Chosen subject', '250', 'Merit'],
            ],
          },
          {
            type: 'p',
            text: 'The optional subject carries 500 marks — as much as two general studies papers — and it is the one component where a candidate can achieve genuine depth rather than broad familiarity. That makes the choice of optional a strategically significant decision rather than a matter of taste, and one worth making on the basis of what you can actually study for a year with sustained interest.',
          },
          {
            type: 'list',
            title: 'Details that decide outcomes',
            items: [
              { text: 'One third of a mark deducted in prelims', note: 'making elimination skill more valuable than recall in marginal cases.' },
              { text: 'CSAT must be cleared', note: 'at a prescribed percentage. It is qualifying, not optional, and candidates from non-quantitative backgrounds neglect it at real risk.' },
              { text: 'Word limits are enforced in mains', note: 'answers are written to a prescribed length in a fixed time, which makes writing speed a genuine constraint.' },
              { text: 'The personality test is 275 marks', note: 'a substantial share of the 2025 total, and the stage least often prepared for systematically.' },
            ],
          },
          {
            type: 'note',
            title: 'Attempts and age are limited',
            text: 'The number of attempts and the upper age limit vary by category, and both are narrower than in most competitive examinations. Because the full cycle takes about a year, the number of realistic attempts available to any candidate is small, which argues for treating each one seriously rather than using the first as a trial.',
          },
          {
            type: 'p',
            text: 'One consequence of the marks table deserves stating on its own, because candidates routinely plan as though it were not true: prelims marks do not enter the final merit at all. The preliminary examination is a gate, not a scorer. A candidate who clears it by a single mark and one who tops it arrive at mains on identical terms. That makes over-investment in prelims — months of objective test practice pursued past the point of comfortable clearance — one of the more expensive mistakes available, because the time comes directly out of the writing practice that does determine the outcome.',
          },
          {
            type: 'defs',
            items: [
              [
                'What the qualifying papers do',
                'Paper A in an Indian language and Paper B in English are marked, but their marks do not count. What they can do is end your candidature: fail either one and the merit papers are not evaluated at all. They need modest, targeted preparation rather than none, and native fluency is not the same thing as familiarity with the format.',
              ],
              [
                'What CSAT does',
                'It is qualifying at a prescribed percentage, which sounds undemanding and is not. Candidates from humanities backgrounds who assumed comprehension alone would carry them have been eliminated at this paper while scoring well in the general studies paper. Practise it as a real component, not an afterthought.',
              ],
              [
                'What the interview does',
                'Two hundred and seventy-five marks, added directly to the mains total. The spread between a weak and a strong performance is wide enough to move a candidate across service allocations, and it rewards views formed over months rather than answers rehearsed over a fortnight.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'The pattern is stable, the details are not',
            text: 'The three-stage structure has held for many years, but the number of papers, the optional subject list, the CSAT threshold, the attempt limits and the age bands have all been revised at various points. Read the pattern section of the current notification each cycle rather than working from a plan built in an earlier year — this is one exam where a two-year-old guide can be quietly wrong in ways that matter.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'UPSC CSE previous year papers — reading past prelims and mains questions to calibrate depth, framing and the shift in question style.',
        lead: [
          'Past UPSC papers are less a practice resource than a specification. They tell you what depth is expected and, more importantly, what kind of thinking is being asked for.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Read ten years of mains general studies questions in one sitting and something becomes obvious that no syllabus conveys: the questions are almost never about retrieval. They ask you to evaluate a policy, weigh a tension, or take a position on a contested question. That framing is the actual specification of the exam, and it should govern how you read everything else.',
          },
          {
            type: 'steps',
            title: 'A method for past papers',
            items: [
              { text: 'Read the last decade of mains questions before you start studying.', note: 'Not to answer them, but to calibrate what "knowing a topic" has to mean for this exam.' },
              { text: 'For prelims, work out why each wrong option is wrong.', note: 'UPSC prelims is largely an elimination exercise, and the skill is in ruling out rather than in recognising.' },
              { text: 'Track the shift in prelims style across years.', note: 'The balance between static and current, and between factual and analytical, has moved noticeably.' },
              { text: 'Answer past mains questions under real time and word limits.', note: 'Seven or eight minutes and a fixed word count. Reading a question and feeling able to answer it is not the same thing.' },
              { text: 'Do the same with CSAT papers.', note: 'Especially if quantitative material is not your background — the qualifying bar is real.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'UPSC mock tests', to: '/mock-tests/upsc/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
          {
            type: 'list',
            title: 'What past papers tell you that no syllabus can',
            items: [
              { text: 'The depth expected on any given theme', note: 'the syllabus says environment; the papers show whether that means a paragraph of general awareness or a considered position on a specific policy trade-off. The difference is a year of misdirected reading.' },
              { text: 'The verbs that recur in mains questions', note: 'examine, critically analyse, comment, discuss, evaluate, substantiate. These are not decoration — they specify the structure of the answer, and candidates who ignore them write essays where an argument was asked for.' },
              { text: 'The shift in prelims style over the last decade', note: 'from single-fact recall towards multi-statement questions requiring elimination. Working older papers alone trains a skill the current paper rewards less.' },
              { text: 'Which parts of the syllabus are effectively dormant', note: 'a few listed themes appear rarely enough that they do not justify the reading a thorough candidate would otherwise give them.' },
            ],
          },
          {
            type: 'p',
            text: 'A specific and unusually productive exercise: take a past mains question, write your answer, then find the same theme in a paper from six or seven years earlier and write that answer too. The comparison shows how the commission has moved on the same ground — usually from description towards judgement — and it is a clearer lesson in what is currently wanted than any amount of reading about answer-writing technique.',
          },
          {
            type: 'note',
            title: 'Prelims papers are a diagnostic, not a scoreboard',
            text: 'When you get a prelims question wrong, the useful question is rarely which fact you were missing. It is more often why you failed to eliminate an option you had enough information to reject. Recording the reason for each elimination — before checking the key — turns a past paper from a test into a training exercise, and it is the habit that most reliably moves prelims scores.',
          },
        ],
      },
      'mock-tests': {
        description:
          'UPSC CSE mock tests — prelims and CSAT practice, and why mains preparation needs written answers rather than test scores.',
        lead: [
          'Mocks serve prelims well. For mains, the equivalent practice is writing full answers under time and having someone read them.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Prelims is where mock testing earns its keep. It is an objective paper with a deduction, a wide syllabus and a cutoff — precisely the conditions under which repeated timed practice improves outcomes. Take mocks regularly, and pay more attention to your elimination reasoning than to your raw score.',
          },
          {
            type: 'list',
            title: 'For prelims',
            items: [
              { text: 'Review why you eliminated each option', note: 'the reasoning matters more than the answer, because it is what transfers to an unfamiliar question.' },
              { text: 'Track your attempt count', note: 'with a one-third deduction, the optimal number of attempts is a strategic choice, not a matter of confidence.' },
              { text: 'Do not skip CSAT mocks', note: 'especially if your background is not quantitative. The qualifying threshold has ended many candidacies.' },
              { text: 'Watch the static-current balance in your errors', note: 'it tells you which half of your preparation is weaker.' },
            ],
          },
          {
            type: 'list',
            title: 'For mains, instead of mocks',
            items: [
              { text: 'Write one full answer daily, timed to the real limit.', note: 'Volume of writing practice is the mains equivalent of mock volume.' },
              { text: 'Write full-length essays weekly.', note: 'Two essays in three hours is a stamina task as much as an intellectual one.' },
              { text: 'Have answers read by someone who will be honest.', note: 'You cannot see your own unclear sentences or unsupported assertions.' },
              { text: 'Practise the ethics paper with case studies specifically.', note: 'It has its own register, and general studies practice does not prepare you for it.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'UPSC mock tests', to: '/mock-tests/upsc/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'p',
            text: 'There is a specific failure mode in prelims mock practice worth naming: the candidate whose mock scores are excellent and whose actual prelims performance is not. It usually comes from taking mocks from a single source until their house style becomes familiar — the way that publisher frames a multi-statement question, the topics they favour, the length of their options. The exam is written by someone else. Mixing sources, and treating an unfamiliar style as useful discomfort rather than a badly set paper, is the correction.',
          },
          {
            type: 'steps',
            title: 'Building the mains writing habit',
            items: [
              { title: 'Start before you feel ready', text: 'The instinct is to finish reading a subject before writing on it. That instinct costs candidates their first attempt. Write badly on a half-learned topic in month two rather than writing for the first time in month ten.' },
              { title: 'Write to the real limits', text: 'The word count and the time per answer are the constraints being tested. An excellent answer at twice the length is not a better answer; in this examination it is an unmarked one.' },
              { title: 'Answer the verb', text: 'Before writing, name what the question asked for — examine, evaluate, comment — and structure to that. Most weak answers are well-informed responses to a question that was not set.' },
              { title: 'Get it read', text: 'By a peer group, a mentor, anyone honest. You cannot see your own vague sentences or your own unsupported claims; that is precisely what makes them yours.' },
              { title: 'Rewrite the same answer a month later', text: 'Without looking at the first version. The comparison is the clearest measure of progress available in mains preparation.' },
            ],
          },
          {
            type: 'note',
            title: 'Essay practice is not general studies practice',
            text: 'Two essays in three hours is a distinct skill: sustaining one argument at length, with structure, illustration and a conclusion that does more than summarise. Candidates who write general studies answers all year and their first full essay a fortnight before mains consistently find the paper harder than they expected. One full essay a month from early on, rising in the final months, is enough to prevent that.',
          },
        ],
      },
      preparation: {
        description:
          'UPSC CSE preparation strategy — choosing an optional, sequencing general studies, building answer-writing skill and preparing for the interview.',
        lead: [
          'The most common failure in UPSC preparation is not insufficient reading. It is reading for a year and never writing, then discovering in the mains hall that the two are different skills.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Almost every candidate reads enough. Far fewer write enough. The gap between understanding a topic and producing a structured, balanced two-hundred-word answer on it in eight minutes is large, and it closes only through practice. If you take one thing from this page, let it be that answer writing should start in the first month, long before you feel ready.',
          },
          {
            type: 'steps',
            title: 'A first-attempt plan over about a year',
            items: [
              { text: 'Month one — choose your optional, deliberately.', note: 'Five hundred marks and a year of study. Choose on genuine interest and availability of material, not on reported success rates.' },
              { text: 'Months one to three — build the core general studies base.', note: 'Polity, modern history, geography, economy. Standard texts read properly rather than many books skimmed.' },
              { text: 'From month one — a daily newspaper, read for issues rather than events.', note: 'Current affairs in this exam means the debate around a development, not the development itself.' },
              { text: 'From month one — one written answer a day.', note: 'Badly at first. The point is to start the skill accumulating early.' },
              { text: 'Months three to eight — the optional subject, seriously.', note: 'It needs sustained, deep study, not a compressed final push.' },
              { text: 'Months four to nine — general studies depth and interlinking.', note: 'The four papers overlap heavily; studying them as one connected body is more efficient than four silos.' },
              { text: 'Three months before prelims — switch to prelims mode.', note: 'Objective practice, factual revision and CSAT, with mains preparation reduced but not stopped.' },
              { text: 'After prelims — full mains mode.', note: 'Essays, answer writing, ethics case studies and optional revision, at high intensity for the available weeks.' },
              { text: 'After mains — interview preparation.', note: 'Your application form, your optional, your home state and your stated interests. All of it is fair ground.' },
            ],
          },
          {
            type: 'list',
            title: 'The mistakes that cost most',
            items: [
              { text: 'Reading without writing', note: 'the single most common and most expensive error in UPSC preparation.' },
              { text: 'Neglecting CSAT', note: 'a qualifying paper that regularly eliminates well-prepared candidates from non-quantitative backgrounds.' },
              { text: 'Choosing an optional by reputation', note: 'rather than by whether you can study it with interest for a year.' },
              { text: 'Collecting sources', note: 'ten books read once are worth less than three read three times.' },
              { text: 'Treating the interview as unpreparable', note: '275 marks that reward months of forming views, not a fortnight of mock interviews.' },
              { text: 'Ignoring the qualifying language papers', note: 'failing one means your merit papers are never evaluated.' },
            ],
          },
        ],
      },
      'study-material': {
        description:
          'UPSC CSE study material — polity, history, geography, economy, environment and ethics notes mapped to the general studies syllabus.',
        lead: [
          'A small number of sources, read repeatedly, beats a large number read once. These notes are organised to be revisited rather than consumed.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general studies papers overlap enough that studying them as four separate subjects wastes effort. A single development — a new agricultural policy, say — is simultaneously economy in Paper III, governance in Paper II and social change in Paper I. Reading with those connections in mind produces answers with the range that examiners reward.',
          },
          {
            type: 'links',
            title: 'Subject notes for UPSC CSE',
            items: [
              { label: 'Indian polity and the Constitution', to: '/study-material/polity/' },
              { label: 'Modern Indian history', to: '/study-material/history/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Indian economy notes', to: '/study-material/economy/' },
              { label: 'Environment and ecology', to: '/study-material/environment/' },
              { label: 'Art and culture', to: '/study-material/art-culture/' },
              { label: 'Science and technology', to: '/study-material/science/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'How to read for this exam',
            items: [
              'Read for arguments rather than facts — mains questions ask you to weigh, not to recall.',
              'Keep one page of notes per theme, added to over time, rather than transcribing books.',
              'Revise from your own notes, not from the source, once the first pass is done.',
              'Convert every significant topic into at least one written answer while it is fresh.',
              'Follow one newspaper properly rather than three partially.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The core static subjects',
                'Polity, modern history, geography, economy and environment. These are the foundation, they change slowly, and they are best built once from a small number of sources and then maintained through revision rather than re-reading. Most of a first-attempt candidate’s first three months belong here.',
              ],
              [
                'Current affairs',
                'Not a subject but a lens applied to the static ones. A news item about a court judgment is polity; one about a trade dispute is economy; one about a river is geography. Filing what you read under the static theme it belongs to is what turns a year of newspapers into usable material rather than a pile of dated headlines.',
              ],
              [
                'The optional subject',
                'Five hundred marks in one subject, and the only component where you can build a genuine advantage over other candidates rather than parity. It deserves its own sources, its own notes and a protected block of time that general studies is not allowed to borrow from.',
              ],
              [
                'Ethics, the fourth general studies paper',
                'Poorly served by conventional notes, because it asks for applied judgement rather than recall. It is built by working case studies, forming positions on real administrative dilemmas, and writing — not by memorising definitions of terms such as integrity and probity.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A word on note-making, since it consumes so much of a candidate’s first year and produces so little for many of them. Notes that reproduce a source are wasted labour — you already own the source. Notes worth keeping are ones the source could not give you: a theme with arguments on both sides, a link between two subjects, a table of positions on a contested question, a list of examples you could deploy in an answer. If a note could be replaced by a bookmark, it should be.',
          },
          {
            type: 'note',
            title: 'The final months belong to your own material',
            text: 'By the last stage of preparation you should be revising almost entirely from documents you wrote — theme notes, answer frameworks, example banks, your optional summaries. Returning to source books at that point feels productive and is usually displacement activity. The test of a year of note-making is whether it produced something you can actually revise from in three days.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the UPSC Civil Services exam pattern?',
        a: 'Three stages. The preliminary examination has two objective papers of two hours each — General Studies Paper I of 100 questions and 200 marks, which decides the cutoff, and CSAT Paper II of 80 questions and 200 marks, which is qualifying at a prescribed percentage. The main examination has nine descriptive papers: two qualifying language papers of 300 marks each, an essay paper of 250 marks, four general studies papers of 250 marks each, and two optional subject papers of 250 marks each, giving 1750 merit marks. The personality test carries 275 marks, for a final total of 2025.',
      },
      {
        q: 'Do UPSC prelims marks count in the final merit?',
        a: 'No. The preliminary examination is purely a screening stage — it decides who sits the main examination and is then discarded. The final merit is built from the seven merit-counting mains papers and the personality test. This is why prelims should be cleared efficiently rather than maximised, and why serious mains preparation cannot wait for the prelims result.',
      },
      {
        q: 'How important is the optional subject in UPSC?',
        a: 'It carries 500 marks across two papers — as much as two general studies papers combined — and it is the only component where you can build genuine subject depth rather than broad familiarity. That makes the choice strategically significant. The sensible basis for choosing is whether you can study the subject with sustained interest for a year and whether good material is available to you, rather than reported success rates, which reflect who chooses a subject more than how scoring it is.',
      },
      {
        q: 'Is CSAT really qualifying, or can I ignore it?',
        a: 'It is qualifying at a prescribed percentage, and it eliminates candidates every cycle — particularly those from humanities backgrounds who assume the comprehension section will carry them. The paper covers comprehension, logical reasoning, decision making, general mental ability and basic numeracy at around class 10 level. It does not need months of work, but it does need enough timed practice to confirm you clear the threshold comfortably rather than narrowly.',
      },
      {
        q: 'How long does UPSC preparation take?',
        a: 'About a year of serious, structured preparation for a first attempt, and the full cycle from notification to final result takes roughly that long again. The binding constraint is usually not reading volume but answer-writing skill, which accumulates slowly. Candidates who read for a year without writing regularly find in the mains hall that producing a structured, balanced answer in seven or eight minutes is a distinct skill they have not practised.',
      },
      {
        q: 'How should I prepare for the UPSC personality test?',
        a: 'By forming views over months rather than rehearsing answers over weeks. The board draws on your application form — your education, your optional subject, your home state and district, your hobbies and your work — and assesses judgement and balance rather than recall. The preparation that works is following current issues well enough to hold a considered position, being able to defend it, and being equally able to acknowledge a reasonable objection to it.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     NDA
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'nda',
    path: '/government-exams/upsc/nda/',
    name: 'NDA',
    fullName: 'National Defence Academy and Naval Academy Examination',
    authority: 'Union Public Service Commission (UPSC)',
    official: 'upsc.gov.in',
    seoTitle: 'NDA 2026: Maths & GAT Syllabus, SSB Interview, Free Mocks',
    metaDescription:
      'NDA exam guide — Mathematics and General Ability Test pattern, syllabus, five-day SSB interview, eligibility and free mock tests.',
    lead: [
      'The National Defence Academy examination is the earliest entry into the officer cadre of the armed forces — candidates apply while still at school or just after, and successful ones join a three-year academy programme before commissioning into the Army, Navy or Air Force.',
      'Its written paper is demanding but conventional: mathematics and a general ability test, both at school level, weighted 300 and 600 marks. What is not conventional is what follows. The Services Selection Board is a five-day assessment carrying as many marks as the entire written examination, and it tests things no amount of syllabus preparation will develop.',
    ],
    quickFacts: [
      ['Conducted by', 'Union Public Service Commission (UPSC)'],
      ['Entry to', 'National Defence Academy — Army, Navy and Air Force wings — and the Naval Academy'],
      ['Level', 'Class 12; physics and mathematics required for the Air Force and Navy wings'],
      ['Stages', 'Written examination (900 marks) → Services Selection Board (900 marks) → medical'],
      ['Written papers', 'Mathematics (300 marks) and General Ability Test (600 marks)'],
      ['SSB', 'A five-day assessment weighted equally with the whole written examination'],
    ],
    overview: [
      {
        type: 'p',
        text: 'The NDA examination is held twice a year and leads to the three-year programme at the National Defence Academy at Khadakwasla, followed by service-specific training and commissioning as an officer. Candidates for the Naval Academy’s ten-plus-two cadet entry are selected through the same examination.',
      },
      {
        type: 'p',
        text: 'Eligibility is tied closely to schooling. Candidates apply while in class 12 or shortly after, within a narrow age band, and the Air Force and Naval wings require physics and mathematics at the twelfth level while the Army wing does not. Because the age window is short, most candidates have only two or three genuine opportunities.',
      },
      {
        type: 'list',
        title: 'The two halves of the selection',
        items: [
          { text: 'The written examination — 900 marks', note: 'mathematics at 300 marks and the General Ability Test at 600, both at class 12 level, both with negative marking.' },
          { text: 'The Services Selection Board — 900 marks', note: 'a five-day assessment covering screening, psychological testing, group tasks and a personal interview.' },
          { text: 'The medical examination', note: 'against demanding armed forces standards, with wing-specific requirements that are strictest for flying branches.' },
        ],
      },
      {
        type: 'note',
        title: 'The SSB is half the marks and cannot be crammed',
        text: 'Candidates routinely spend a year on the written papers and a fortnight on the Services Selection Board, despite the two carrying equal weight. The SSB assesses officer-like qualities through psychological tests, group tasks and interview — attributes built through years of activity, responsibility and reading rather than through last-minute coaching.',
      },
    ],
    stages: [
      {
        name: 'Written Examination — Mathematics',
        mode: 'Objective, 2 hours 30 minutes',
        detail:
          '120 questions for 300 marks covering algebra, matrices and determinants, trigonometry, analytical geometry, differential and integral calculus, differential equations, vector algebra, and statistics and probability, all at class 12 level. Negative marking applies.',
      },
      {
        name: 'Written Examination — General Ability Test',
        mode: 'Objective, 2 hours 30 minutes',
        detail:
          '150 questions for 600 marks in two parts: English at 200 marks, and General Knowledge at 400 marks covering physics, chemistry, general science, history and freedom movement, geography and current events. Negative marking applies.',
      },
      {
        name: 'Services Selection Board',
        mode: 'Five-day assessment, 900 marks',
        detail:
          'Stage one screening through an intelligence test and picture perception and description; stage two comprising psychological tests, group testing officer tasks including group discussion, group planning, outdoor tasks and the command task, a personal interview, and a conference. Carries the same weight as the entire written examination.',
      },
      {
        name: 'Medical examination',
        mode: 'Medical board',
        detail:
          'Assessment against armed forces medical standards, with requirements varying by wing and strictest for the flying branch. Candidates found unfit may seek an appeal medical board.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'NDA syllabus — class 12 mathematics topics and the two-part General Ability Test covering English and general knowledge.',
        lead: [
          'Both papers sit at school level, which makes the syllabus finite and completely coverable — an advantage NDA candidates should exploit rather than assume.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Mathematics',
                'Sets, relations and functions, complex numbers, quadratic equations, arithmetic and geometric progressions, permutation and combination, binomial theorem, logarithms; matrices and determinants including their properties and applications to systems of equations; trigonometric ratios and identities, inverse trigonometric functions, and applications to heights and distances; analytical geometry in two and three dimensions covering straight lines, circles, conic sections, planes and lines in space; differential calculus including limits, continuity, differentiation and applications to maxima and minima; integral calculus and differential equations; vector algebra; and statistics and probability.',
              ],
              [
                'General Ability Test — Part A: English',
                'Grammar and usage, vocabulary, comprehension and cohesion, spotting errors, sentence improvement, fill in the blanks, synonyms and antonyms, ordering of sentences and words, and idioms. Two hundred marks in a six-hundred-mark paper, and the most learnable part of it.',
              ],
              [
                'General Ability Test — Part B: General Knowledge',
                'Physics covering properties of matter, motion, work and energy, heat, light, sound, magnetism and electricity, and simple pendulum and measuring instruments; chemistry covering physical and chemical changes, elements and compounds, acids, bases and salts, common preparations and uses, carbon and its forms, fertilisers and explosives; general science covering basic biology, human physiology, nutrition and common diseases; history covering the freedom movement, the Constitution, social reform, and the broad sweep of Indian and world history; geography covering the earth, atmosphere, oceans, climate, resources and Indian regional geography; and current events across India and the world including sporting and cultural developments.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Note the weighting carefully. General knowledge alone is 400 marks — more than the entire mathematics paper — and it draws on class 11 and 12 physics and chemistry more heavily than most candidates expect. A candidate strong in mathematics but casual about general knowledge is preparing for the smaller half of the written examination.',
          },
          {
            type: 'list',
            title: 'Reading the syllabus against your school course',
            items: [
              { text: 'Mathematics maps almost exactly onto class 11 and 12', note: 'which means your school course is your syllabus. The exam-specific work is speed and question variety, not new content.' },
              { text: 'Physics and chemistry within general knowledge sit slightly below school level', note: 'broad and conceptual rather than numerical. A candidate taking science at school is already most of the way there and should not over-prepare this.' },
              { text: 'History, geography and polity within general knowledge are genuinely additional', note: 'they go beyond what most school streams cover in depth, and they are where a science student has the most ground to make up.' },
              { text: 'Current events are examined lightly but consistently', note: 'a daily habit is sufficient; an intensive block is not necessary and rarely pays back the time.' },
            ],
          },
          {
            type: 'p',
            text: 'The mathematics syllabus rewards a specific reading. It lists a wide set of chapters, but the questions are overwhelmingly single-concept and solvable in a couple of minutes — this is not an examination that sets multi-step problems requiring insight. What it does demand is that you recognise which of a hundred and twenty chapter-sized ideas is in play, and apply it immediately. Breadth of recognition beats depth of technique here, which is close to the opposite of what an engineering entrance rewards.',
          },
          {
            type: 'note',
            title: 'A finite syllabus is an opportunity',
            text: 'Very few competitive examinations have a syllabus a candidate can genuinely finish. This one does. That changes the strategic question from what to leave out to how many times you can go over the whole of it, and a candidate on their second or third complete pass is in a materially stronger position than one still making a first pass through material they chose selectively.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'NDA exam pattern — Mathematics and General Ability Test marks and timing, negative marking, and the five-day SSB structure.',
        lead: [
          'Nine hundred written marks and nine hundred SSB marks. Any plan that reflects only the first half is planning for half the exam.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Written examination structure. Confirm marks, question counts and the negative marking rate against the current notification.',
            head: ['Paper', 'Questions', 'Marks', 'Duration'],
            rows: [
              ['Mathematics', '120', '300', '2 hours 30 minutes'],
              ['General Ability Test', '150', '600', '2 hours 30 minutes'],
              ['Total', '270', '900', 'Two sessions on one day'],
            ],
          },
          {
            type: 'p',
            text: 'Within the General Ability Test, English carries 200 marks and general knowledge 400. Each general knowledge question is therefore worth the same as a mathematics question and rather more than an English question, which means that a candidate’s general knowledge preparation has an outsized effect on the written total. Negative marking applies across both papers, so disciplined skipping matters.',
          },
          {
            type: 'list',
            title: 'The Services Selection Board, in outline',
            items: [
              { text: 'Stage one — screening', note: 'an officer intelligence rating test and a picture perception and description exercise. A substantial proportion of candidates are screened out on day one.' },
              { text: 'Psychological tests', note: 'thematic apperception, word association, situation reaction and self-description. Assessed for consistency and for genuine disposition rather than for rehearsed answers.' },
              { text: 'Group testing officer tasks', note: 'group discussion, group planning, progressive group tasks, half group task, individual obstacles, command task and the final group task. Assessed on cooperation and initiative together, not one at the expense of the other.' },
              { text: 'Personal interview and conference', note: 'a long interview covering background, interests and views, followed by a board conference that makes the recommendation.' },
            ],
          },
          {
            type: 'note',
            title: 'Medical standards vary by wing',
            text: 'Vision requirements in particular differ sharply between the Army, Navy and Air Force wings, and the flying branch applies the strictest standard. Candidates should check the requirement for the wing they intend to join at the outset, because a standard that permits one wing may not permit another.',
          },
          {
            type: 'p',
            text: 'Both papers run for two and a half hours on the same day, which makes stamina a real variable rather than a notional one. The General Ability Test in particular is a hundred and fifty questions of mixed English and general knowledge sat in the second session, when concentration is already spent. Candidates who have only ever practised one paper at a time consistently report that the second paper felt harder than any of their practice sets — not because it was, but because they had never rehearsed arriving at it tired.',
          },
          {
            type: 'defs',
            items: [
              [
                'How the marks per question differ',
                'Mathematics questions and general knowledge questions are not worth the same, and the deduction scales with the mark value. That means a wrong general knowledge answer costs more than a wrong mathematics answer, which should make you slightly more conservative about guessing in the larger paper — a point most candidates never work out.',
              ],
              [
                'Why the SSB is not a formality',
                'Nine hundred marks, equal to the entire written examination, awarded over five days by assessors looking for a consistent picture across the psychological tests, the group tasks and the interview. It is not an interview with extra steps; it is a longer and more thorough assessment than the written papers are.',
              ],
              [
                'Where the screening stage sits',
                'A substantial proportion of candidates who reach the SSB are sent home on the first day, after the officer intelligence rating test and the picture perception exercise. Those two are practisable, and practising them is the highest-return SSB preparation available precisely because so much of the field is removed there.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Check the wing standards before you build the plan',
            text: 'Vision requirements, height standards and other medical criteria differ between the Army, Navy and Air Force entries, and the Air Force is the most demanding on several of them. A candidate whose eyesight rules out one wing may be entirely eligible for another — but that is worth establishing in the first week of preparation rather than at the medical board, when the preference order has already been submitted.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'NDA previous year papers — using past Mathematics and GAT papers to cover a finite syllabus completely.',
        lead: [
          'The NDA syllabus is finite. Past papers show which parts of it are asked most, which turns a school syllabus into a prioritised plan.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because both papers draw on class 11 and 12 material, past papers map directly onto chapters you may already have studied. Tagging several years of mathematics questions by chapter reveals a consistent emphasis — trigonometry, calculus, analytical geometry and matrices carry a disproportionate share — and the same exercise on general knowledge shows physics and chemistry appearing more heavily than the "general knowledge" label suggests.',
          },
          {
            type: 'steps',
            title: 'Working through past papers',
            items: [
              { text: 'Tag mathematics questions by class 11 or 12 chapter.', note: 'Then study the heavy chapters to fluency before the light ones.' },
              { text: 'Do the same for the general knowledge section.', note: 'The physics and chemistry weighting is the finding that most changes candidates’ plans.' },
              { text: 'Solve the English section for pattern.', note: 'Grammar and vocabulary questions recur in recognisable families; two hundred marks are highly learnable here.' },
              { text: 'Practise both papers at full length in one day.', note: 'Two two-and-a-half-hour papers in a single sitting is a stamina task worth rehearsing.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'NDA free mock test', to: '/mock-tests/nda/' },
              { label: 'Defence exam preparation', to: '/government-exams/defence/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
          {
            type: 'list',
            title: 'What the tagging exercise usually reveals',
            items: [
              { text: 'Mathematics clusters in a predictable set of chapters', note: 'trigonometry, calculus, matrices and determinants, quadratic equations, sequences, probability and coordinate geometry between them account for a large share of the paper cycle after cycle.' },
              { text: 'Physics and chemistry dominate the general knowledge section', note: 'more than the section name implies. Candidates who prepare general knowledge as history and current affairs alone are preparing the smaller part of a four-hundred-mark section.' },
              { text: 'English is mechanical and highly repetitive', note: 'the same grammar rules and a recurring vocabulary pool, which makes two hundred marks unusually available to a candidate willing to work past papers systematically.' },
              { text: 'Static general knowledge outweighs current affairs', note: 'geography, polity basics and Indian history recur far more reliably than the year’s news does.' },
            ],
          },
          {
            type: 'p',
            text: 'Once you have the tagging table, use it to decide what to revise rather than what to read. NDA candidates are usually still at school and short of time; the value of the table is that it lets you concentrate a limited number of study hours on the chapters that actually recur, and treat the tail as something to meet in a mock rather than to prepare for in advance.',
          },
          {
            type: 'p',
            text: 'One practical instruction on method: solve the mathematics sections without a calculator and, as far as possible, without long written working. The paper gives you a little over a minute a question, and a candidate who solves correctly but slowly will finish with a good accuracy figure and twenty unattempted questions. Speed here comes from recognising the chapter fast and from arithmetic fluency, both of which are trained by volume rather than by studying harder material.',
          },
          {
            type: 'note',
            title: 'Sit both papers in one day, at least monthly',
            text: 'Working past papers section by section on separate evenings is a reasonable way to learn, but it never rehearses the actual demand. Once a month, sit mathematics and the General Ability Test on the same day with a realistic gap between them. The second paper is where the examination is usually won or lost, and it is the one candidates have practised least in a genuinely tired state.',
          },
        ],
      },
      'mock-tests': {
        description:
          'Free NDA mock tests — full Mathematics and General Ability Test practice with negative marking and section analysis.',
        lead: [
          'Practise both papers at full length, in the same day, because that is how the examination is actually sat.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The free NDA mock on this site follows the current pattern for both papers. Beyond the score, the two things worth watching are your general knowledge accuracy — the largest single block of marks in the examination — and your fatigue across five hours of testing, which is a real factor on the day and one that only full-length practice reveals.',
          },
          {
            type: 'list',
            title: 'What to look at afterwards',
            items: [
              { text: 'General knowledge accuracy', note: '400 marks. Improvements here move your total further than equivalent gains in mathematics.' },
              { text: 'Mathematics chapters that repeat as errors', note: 'a finite syllabus means every recurring weakness is fixable.' },
              { text: 'Your English score', note: 'two hundred learnable marks that candidates often leave partly on the table.' },
              { text: 'Performance in the second paper versus the first', note: 'a drop indicates stamina, and the fix is more full-length practice rather than more study.' },
            ],
          },
          {
            type: 'p',
            text: 'Alongside written practice, begin preparing for the Services Selection Board. Physical fitness, reading, participation in team activities and honest self-reflection are the preparation that stage rewards, and all of them take months.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'Take the free NDA mock test', to: '/mock-tests/nda/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'Reading an NDA mock properly',
            items: [
              { title: 'Score the two papers separately', text: 'A combined total hides which of the two is actually holding you back, and with a three-to-six mark split between them the answer is rarely the one candidates assume.' },
              { title: 'Break general knowledge into its parts', text: 'Physics, chemistry, history, geography, polity, current events. Four hundred marks is far too large a block to analyse as one number, and the weak part is usually specific.' },
              { title: 'Count unattempted mathematics questions', text: 'If there is a tail of untouched questions, the constraint is pace rather than knowledge, and more practice sets will help where more theory will not.' },
              { title: 'Check your English separately', text: 'Two hundred marks, mechanical, and highly responsive to practice. Candidates rarely track it and frequently leave marks in it.' },
              { title: 'Compare first-session and second-session accuracy', text: 'A consistent drop is a stamina signal and calls for more full-day practice rather than more study.' },
            ],
          },
          {
            type: 'p',
            text: 'For the Services Selection Board, the two components that respond most to advance practice are the officer intelligence rating test and the picture perception and description exercise, because they form the screening stage and because both are recognisably test-like. Working through OIR-style questions and writing timed picture stories is genuinely useful preparation. The psychological tests and group tasks reward something different — a settled sense of your own views, some experience of working in groups, and physical confidence — which is built over months of ordinary life rather than through drills.',
          },
          {
            type: 'note',
            title: 'What SSB preparation is not',
            text: 'It is not memorising model answers or rehearsing a personality. Assessors see a large number of coached candidates and are practised at spotting the gap between a prepared response and a consistent one — and consistency across five days of different exercises is precisely what the process is designed to measure. Reading widely, staying fit, forming real opinions and being able to explain your own choices is the preparation that survives contact with the board.',
          },
        ],
      },
      preparation: {
        description:
          'NDA preparation — a plan covering both written papers and the Services Selection Board, with realistic timelines for a school candidate.',
        lead: [
          'Prepare for two examinations at once: a school-level written paper, and a five-day assessment of who you are. They need completely different preparation, and they carry the same marks.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The written half of NDA is genuinely tractable. It draws on class 11 and 12 material, the syllabus is finite, and a candidate who is studying for board examinations is already covering much of it. The half that catches candidates out is the Services Selection Board, which is not a test of preparation in the usual sense — it assesses initiative, cooperation, resilience and clarity, all of which develop over years rather than weeks.',
          },
          {
            type: 'steps',
            title: 'A plan for a school candidate',
            items: [
              { text: 'Use your school syllabus as the base.', note: 'Class 11 and 12 mathematics, physics and chemistry cover most of what both papers ask. Studying well for boards is studying for NDA.' },
              { text: 'From the start — general knowledge daily.', note: '400 marks, drawing on science, history, geography and current events. The largest single block in the examination.' },
              { text: 'From the start — English practice.', note: 'Grammar and vocabulary; two hundred marks that respond directly to consistent effort.' },
              { text: 'Months two to four — mathematics to speed.', note: 'Trigonometry, calculus, analytical geometry and matrices carry the most weight. Practise timed.' },
              { text: 'From the start — physical fitness, seriously.', note: 'Running, strength and stamina. The SSB includes outdoor tasks, and the services expect a standard.' },
              { text: 'From the start — build the SSB attributes.', note: 'Take responsibility in group settings, read widely, form views, and practise expressing them clearly. This is the real preparation for half the marks.' },
              { text: 'Two months before — full-length written mocks.', note: 'Both papers in one day, with negative marking applied.' },
              { text: 'After the written result — focused SSB preparation.', note: 'Format familiarisation and mock interviews, on top of the attributes you have been building for months.' },
            ],
          },
          {
            type: 'list',
            title: 'What candidates get wrong',
            items: [
              { text: 'Treating the SSB as a fortnight’s work', note: 'it is 900 marks, equal to the written examination, and it assesses years of formation.' },
              { text: 'Over-weighting mathematics', note: '300 marks against 600 for the General Ability Test.' },
              { text: 'Neglecting physics and chemistry within general knowledge', note: 'they carry more of that section than the name suggests.' },
              { text: 'Leaving fitness until after the written result', note: 'the SSB includes outdoor tasks and the medical follows.' },
              { text: 'Not checking wing-specific medical standards early', note: 'particularly vision, which differs sharply between the Army, Navy and Air Force wings.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'If you are in class 11',
                'You have the most comfortable position available and should use it structurally: keep pace with school mathematics, build the general knowledge habit now while there is no time pressure, and start running. Candidates who begin here rarely need to choose between board examinations and NDA preparation later.',
              ],
              [
                'If you are in class 12',
                'The constraint is the board examinations, and the right response is overlap rather than competition. Your mathematics, physics and chemistry preparation serves both. Add general knowledge, English and fitness as small daily habits, and keep full mocks for the period after your boards.',
              ],
              [
                'If you have finished school',
                'You have time to prepare properly and should use it on the two things school did not give you — general knowledge breadth and SSB readiness — rather than on re-covering mathematics you have already sat an examination in.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The attribute set the SSB assesses is worth understanding early, because it is built rather than revised: effective intelligence, reasoning, organising ability, initiative, social adaptability, cooperation, sense of responsibility, determination, courage and stamina. None of those is acquired in a fortnight. All of them are developed by the ordinary things a school candidate can start now — taking responsibility in a team, playing a sport seriously, reading beyond the syllabus, and having genuine interests you can talk about.',
          },
          {
            type: 'note',
            title: 'Physical training is preparation, not recreation',
            text: 'The SSB includes outdoor group tasks and an obstacle course, and a medical examination follows. Running, basic strength work and general stamina should be part of the schedule from the first week alongside study, not a project deferred until after the written result. The gap between the written result and the SSB call is not long enough to build a base from nothing.',
          },
        ],
      },
      'study-material': {
        description:
          'NDA study material — class 11 and 12 mathematics, physics, chemistry, English and general knowledge notes for both written papers.',
        lead: [
          'School textbooks are the right primary source for NDA. These notes supplement them and cover the general knowledge breadth that school syllabi do not.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For mathematics, physics and chemistry, your class 11 and 12 textbooks are better material than most competitive-exam guides — matched in level and framing to what the paper actually asks. Where school material falls short is the general knowledge breadth: history, geography, polity and current events, which need their own reading.',
          },
          {
            type: 'links',
            title: 'Subject notes for NDA',
            items: [
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Physics notes', to: '/study-material/physics/' },
              { label: 'Chemistry notes', to: '/study-material/chemistry/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A weekly rhythm alongside school',
            items: [
              'Mathematics practice daily, timed, drawn from the heavy chapters.',
              'Thirty minutes of general knowledge, covering science, history, geography and current events in rotation.',
              'English grammar and vocabulary, twenty minutes daily.',
              'Physical training on most days — running, strength and stamina.',
              'Reading beyond the syllabus, which serves both general knowledge and the SSB interview.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Mathematics — school textbooks first',
                'Your class 11 and 12 books are better matched to this paper than most competitive-exam compilations, which pitch at engineering-entrance depth the paper does not reach. Supplement with question volume rather than with harder theory.',
              ],
              [
                'Physics and chemistry — conceptual, not numerical',
                'Within the general knowledge section these are tested for understanding rather than calculation. Reading your school chapters for the ideas, and skipping the heavy numerical work, is the efficient approach for this paper specifically.',
              ],
              [
                'History, geography and polity — the genuine additions',
                'These need dedicated notes because school coverage is uneven. Keep them as themed lists that can be revised quickly rather than as continuous reading.',
              ],
              [
                'English — rules plus a running list',
                'A short set of grammar rules covers most of the section, and a vocabulary list built from past papers covers much of the rest. Twenty minutes a day is enough if it is genuinely daily.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Reading beyond the syllabus deserves a specific mention for this examination, because it is the rare case where general reading is directly examinable. A newspaper habit and some non-fiction reading feed the current events questions, the English section, and — most importantly — the interview, where a candidate with genuine interests and formed opinions is immediately distinguishable from one who has prepared answers. For an examination where nine hundred marks are awarded by people talking to you, that is not a marginal benefit.',
          },
          {
            type: 'note',
            title: 'Do not build a separate study life',
            text: 'The most sustainable NDA preparation for a school candidate is the one that sits inside their existing schedule: school mathematics and science done properly, thirty minutes of general knowledge, twenty of English, and physical training on most days. Candidates who construct an entirely parallel preparation alongside school usually abandon one of the two, and it is rarely the school one.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the NDA exam pattern?',
        a: 'Two written papers on the same day. Mathematics has 120 questions for 300 marks in two and a half hours, covering class 12 algebra, trigonometry, analytical geometry, calculus, vectors and statistics. The General Ability Test has 150 questions for 600 marks in two and a half hours, split between English at 200 marks and General Knowledge at 400 marks. Negative marking applies to both. The written total of 900 marks is matched by 900 marks for the Services Selection Board.',
      },
      {
        q: 'How much does the SSB interview count in NDA?',
        a: 'Nine hundred marks — exactly as much as both written papers combined. It runs over five days and covers screening, psychological testing, group testing officer tasks and a personal interview. Because it assesses officer-like qualities such as initiative, cooperation, resilience and clarity of thought, it rewards years of activity, responsibility and reading rather than weeks of coaching. Candidates who spend a year on the written papers and a fortnight on the SSB are preparing for half the examination.',
      },
      {
        q: 'Who is eligible for NDA?',
        a: 'Unmarried candidates within a narrow age band, holding or appearing for class 12 from a recognised board. The Army wing accepts candidates from any stream, while the Air Force and Naval wings require physics and mathematics at the twelfth level. Because the age window is short, most candidates have only two or three genuine opportunities, which argues for treating the first attempt seriously. Confirm the exact age band, marital status conditions and subject requirements in the current notification.',
      },
      {
        q: 'Which is more important in NDA, Mathematics or General Ability?',
        a: 'The General Ability Test, by mark weight — 600 marks against 300 for mathematics. Within it, General Knowledge alone carries 400 marks, more than the entire mathematics paper, and it draws on class 11 and 12 physics and chemistry more heavily than the label suggests. Candidates who are strong in mathematics but casual about general knowledge are optimising the smaller half of the written examination.',
      },
      {
        q: 'How should I prepare for the NDA SSB?',
        a: 'Over months, not weeks, and through activity rather than study. The board assesses initiative, cooperation, decisiveness, physical robustness and the ability to think and speak clearly under pressure. Building those means taking responsibility in group settings, maintaining genuine physical fitness, reading widely enough to hold views, and practising expressing them. Format familiarisation and mock interviews are useful in the final weeks, but they refine what is already there rather than creating it.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     CDS
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'cds',
    path: '/government-exams/upsc/cds/',
    name: 'CDS',
    fullName: 'Combined Defence Services Examination',
    authority: 'Union Public Service Commission (UPSC)',
    official: 'upsc.gov.in',
    seoTitle: 'CDS 2026: IMA, INA, AFA & OTA Pattern, Syllabus and Mocks',
    metaDescription:
      'CDS exam guide — IMA, INA, Air Force Academy and OTA papers, syllabus, SSB interview, eligibility differences and free mock tests.',
    lead: [
      'The Combined Defence Services examination is the graduate entry into the officer cadre, leading to the Indian Military Academy, the Indian Naval Academy, the Air Force Academy or the Officers Training Academy. One examination, four academies, and — crucially — two different written papers depending on which you apply for.',
      'That last point catches candidates out. Applicants to the Officers Training Academy sit two papers rather than three; there is no mathematics paper for that entry. It is a materially different examination taken under the same name.',
    ],
    quickFacts: [
      ['Conducted by', 'Union Public Service Commission (UPSC)'],
      ['Academies', 'Indian Military Academy, Indian Naval Academy, Air Force Academy, Officers Training Academy'],
      ['Level', 'Bachelor’s degree; engineering or physics and mathematics required for some entries'],
      ['Papers', 'Three for IMA, INA and AFA; two for OTA — no mathematics paper for OTA'],
      ['Stages', 'Written examination → Services Selection Board → medical'],
      ['Frequency', 'Twice a year'],
    ],
    overview: [
      {
        type: 'p',
        text: 'CDS is the principal graduate route to a commission in the armed forces. Successful candidates join the Indian Military Academy for a permanent commission in the Army, the Indian Naval Academy, the Air Force Academy, or the Officers Training Academy for a short service commission. The academy determines both the papers you sit and the eligibility conditions you must meet.',
      },
      {
        type: 'p',
        text: 'The examination is held twice a year, which gives candidates more opportunities than NDA within a comparable age window. Eligibility varies by academy: a degree in any discipline suffices for the IMA and OTA, while the Naval Academy generally expects an engineering degree and the Air Force Academy expects physics and mathematics at the twelfth level or an engineering degree.',
      },
      {
        type: 'list',
        title: 'The four entries and what they require',
        items: [
          { text: 'Indian Military Academy', note: 'permanent commission in the Army. A degree in any discipline. Three written papers.' },
          { text: 'Indian Naval Academy', note: 'permanent commission in the Navy. Generally an engineering degree. Three written papers.' },
          { text: 'Air Force Academy', note: 'permanent commission in the Air Force. Physics and mathematics at class 12, or an engineering degree. Three written papers, plus an additional aptitude test at the SSB.' },
          { text: 'Officers Training Academy', note: 'short service commission. A degree in any discipline. Two written papers — English and General Knowledge only.' },
        ],
      },
      {
        type: 'note',
        title: 'The Air Force entry has an extra test',
        text: 'Candidates for the Air Force Academy sit a computerised pilot selection system test at the Services Selection Board, in addition to the standard SSB process. It is a one-time test — a candidate who does not clear it cannot reattempt it for flying branch entry — which makes it worth understanding in advance rather than meeting cold.',
      },
    ],
    stages: [
      {
        name: 'Written Examination — IMA, INA and AFA',
        mode: 'Three objective papers, 2 hours each',
        detail:
          'English (100 marks), General Knowledge (100 marks) and Elementary Mathematics (100 marks), for 300 marks in total. One third of a mark is deducted for each wrong answer.',
      },
      {
        name: 'Written Examination — OTA',
        mode: 'Two objective papers, 2 hours each',
        detail:
          'English (100 marks) and General Knowledge (100 marks), for 200 marks in total. There is no mathematics paper for the Officers Training Academy entry.',
      },
      {
        name: 'Services Selection Board',
        mode: 'Five-day assessment',
        detail:
          'Stage one screening, then psychological testing, group testing officer tasks and a personal interview, followed by a conference. Air Force Academy candidates additionally sit the computerised pilot selection system test.',
      },
      {
        name: 'Medical examination',
        mode: 'Medical board',
        detail:
          'Assessment against armed forces medical standards, which vary by academy and are strictest for the flying branch.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'CDS syllabus — English, General Knowledge and Elementary Mathematics topics, and which papers apply to which academy.',
        lead: [
          'Three subjects, of which one applies only to the IMA, INA and AFA entries. Check which papers you are sitting before you plan your preparation.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'English',
                'Comprehension passages, spotting errors, sentence improvement, synonyms and antonyms, fill in the blanks, ordering of words and sentences, idioms and phrases, and vocabulary in context. The paper tests command of the language rather than literary knowledge, and it is common to all four entries.',
              ],
              [
                'General Knowledge',
                'Current events of national and international importance; Indian history with an emphasis on the freedom movement; geography of India and the world; Indian polity and the Constitution; economics; general science across physics, chemistry and biology; defence-related awareness including services, ranks, equipment and exercises; and sports and culture. Common to all four entries, and the section where defence-specific awareness genuinely helps.',
              ],
              [
                'Elementary Mathematics',
                'Arithmetic covering number systems, fundamental operations, HCF and LCM, decimals and fractions, square roots, percentage, ratio and proportion, average, profit and loss, simple and compound interest, time and work, time and distance; algebra covering basic operations, factorisation, linear and quadratic equations and simultaneous equations; trigonometry covering ratios, identities, heights and distances; geometry covering lines, angles, triangles, circles, quadrilaterals and loci; mensuration of plane figures and solids; and statistics covering the collection and presentation of data, measures of central tendency, and graphs. Applies to the IMA, INA and AFA entries only — not to OTA. Pitched at approximately class 10 level.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The general knowledge paper has a feature worth exploiting: it consistently includes defence-related questions on services, ranks, equipment, exercises and recent operational developments. This is material a general competitive-exam guide will not cover, and it is entirely learnable, which makes it some of the most reliably available marks in the paper.',
          },
          {
            type: 'list',
            title: 'How the three subjects behave in practice',
            items: [
              { text: 'English is the most reliable scoring paper', note: 'a hundred marks in every entry, drawn from a mechanical and repetitive set of question types. It responds to practice more predictably than either of the others.' },
              { text: 'General Knowledge is broad but not deep', note: 'history, polity, geography, economy, science and current events at general level, with a distinctive defence and security seam running through it that general guides do not cover.' },
              { text: 'Elementary Mathematics is class 10 in content and a speed test in practice', note: 'nothing conceptually difficult, and two hours in which to work through a substantial number of arithmetic, algebra, geometry and trigonometry questions.' },
              { text: 'The three do not need equal time', note: 'a graduate candidate usually needs least work on mathematics, most on the defence and current affairs strand of general knowledge, and steady daily maintenance on English.' },
            ],
          },
          {
            type: 'p',
            text: 'For OTA candidates the syllabus reading changes completely. With mathematics absent, English and General Knowledge carry a hundred marks each and there is nowhere to hide a weak subject — a candidate who is strong in mathematics and weak in general knowledge, which is a common profile among engineering graduates, has lost the paper that would have carried them. Confirm which entry you are applying for before you allocate a single study hour.',
          },
          {
            type: 'note',
            title: 'The defence awareness strand is learnable and rarely prepared',
            text: 'Questions on service structures, ranks and insignia, major exercises, indigenous equipment programmes, defence organisations and recent acquisitions appear consistently in the General Knowledge paper. Almost no general competitive-exam guide covers this ground, which means the candidates who follow defence news specifically are competing for marks most of the field has conceded without noticing.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'CDS exam pattern — three papers for IMA, INA and AFA, two for OTA, negative marking, and the SSB stage.',
        lead: [
          'Two different written examinations under one name. The number of papers you sit depends entirely on which academy you applied for.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Written examination structure by entry. Confirm marks, timing and the deduction rate against the current notification.',
            head: ['Entry', 'Papers', 'Total marks', 'Duration per paper'],
            rows: [
              ['IMA / INA / AFA', 'English, General Knowledge, Elementary Mathematics', '300', '2 hours each'],
              ['OTA', 'English, General Knowledge', '200', '2 hours each'],
            ],
          },
          {
            type: 'p',
            text: 'For the OTA entry, English and General Knowledge carry the entire written examination between them — a hundred marks each. That concentration changes preparation completely: a candidate applying only for OTA has no reason to work through the mathematics syllabus, and every reason to push their English and general knowledge as far as they will go.',
          },
          {
            type: 'list',
            title: 'Details worth knowing',
            items: [
              { text: 'One third of a mark is deducted for wrong answers', note: 'across all papers, which makes disciplined skipping worthwhile.' },
              { text: 'Mathematics is at approximately class 10 level', note: 'accessible to any graduate, but requiring genuine speed over two hours.' },
              { text: 'The SSB follows for all entries', note: 'a five-day assessment identical in structure to the NDA process.' },
              { text: 'Air Force candidates take an additional test', note: 'the computerised pilot selection system test, which is a one-time opportunity for flying branch entry.' },
            ],
          },
          {
            type: 'note',
            title: 'Eligibility varies sharply by academy',
            text: 'Age bands, marital status conditions and qualification requirements differ between the four entries — the Naval Academy generally expects an engineering degree, the Air Force Academy expects physics and mathematics at class 12 or an engineering degree, and the age bands are not identical. Read the eligibility table for the specific entries you intend to apply for.',
          },
          {
            type: 'p',
            text: 'The two-hour-per-paper format hides a real difference in pressure between the subjects. English and General Knowledge are recall and recognition papers where two hours is comfortable for most candidates; Elementary Mathematics is where the clock genuinely binds, because the questions are individually easy and numerous. A candidate reporting that CDS was straightforward and a candidate reporting that it was a scramble have usually both described the same paper — they simply differ on whether they sat the mathematics one.',
          },
          {
            type: 'steps',
            title: 'How to use the two hours in each paper',
            items: [
              { title: 'English', text: 'Comprehension passages last, not first. They take a fixed and substantial block of reading time, and doing them early leaves the mechanical grammar and vocabulary questions — which are faster marks — competing for the remainder.' },
              { title: 'General Knowledge', text: 'One pass, answering what you know and marking what you can narrow. Recall questions do not improve with deliberation, and the second pass is for the ones where elimination is genuinely available.' },
              { title: 'Elementary Mathematics', text: 'Two passes, deliberately. First the questions you can do immediately; then the ones needing real working. Working in question order is what leaves candidates with unattempted easy questions at the end.' },
            ],
          },
          {
            type: 'note',
            title: 'Eligibility differs more between the academies than the exam does',
            text: 'The written papers vary only between the three-paper and two-paper sets, but age bands, marital status conditions and qualification requirements differ meaningfully across the IMA, INA, AFA and OTA entries — and the OTA age band is wider than the others. Candidates have prepared for an entry they were not eligible for. Read the eligibility table for each entry you intend to apply to before the application window, not after.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'CDS previous year papers — extracting the recurring defence awareness themes and calibrating the English and mathematics level.',
        lead: [
          'CDS papers repeat their themes reliably, and the defence awareness seam within general knowledge is both consistent and rarely covered elsewhere.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Work through several years of CDS general knowledge papers and a defence-specific cluster emerges: service structures and ranks, aircraft and naval vessels, joint exercises, defence organisations and recent acquisitions. Almost no general competitive-exam material covers this, and past papers are effectively the only systematic guide to it.',
          },
          {
            type: 'steps',
            title: 'Using the papers well',
            items: [
              { text: 'Extract every defence-related question into one list.', note: 'It becomes a revision resource you cannot buy.' },
              { text: 'Tag general knowledge by theme across years.', note: 'History, geography, polity, science, defence, sports. The distribution guides your revision time.' },
              { text: 'Time the mathematics paper strictly.', note: 'The level is class 10, but a hundred questions in two hours still requires pace.' },
              { text: 'Use the English papers to build a vocabulary list.', note: 'The range recurs across cycles, which makes past papers a better source than a general word book.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Defence exam preparation', to: '/government-exams/defence/' },
              { label: 'NDA mock test', to: '/mock-tests/nda/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
          {
            type: 'list',
            title: 'The defence cluster that past papers reveal',
            items: [
              { text: 'Service structure and ranks', note: 'the organisation of the Army, Navy and Air Force, rank insignia, commands and their headquarters. Stable material that repeats across cycles with very little variation.' },
              { text: 'Equipment and indigenous programmes', note: 'aircraft, ships, submarines, missiles and armoured vehicles, with a consistent emphasis on domestically developed systems and the organisations behind them.' },
              { text: 'Exercises and operations', note: 'joint and bilateral exercises and their participating countries, and the named operations that have entered general awareness.' },
              { text: 'Defence institutions and awards', note: 'training academies, research organisations, gallantry awards and their order of precedence.' },
            ],
          },
          {
            type: 'p',
            text: 'That cluster is the single best return available in CDS preparation, and the reason is structural rather than clever: it is examined consistently, it is finite, and almost nobody prepares it deliberately. Building one list from past papers and adding to it from a defence news source for twenty minutes a week will put you ahead of most of the field on a predictable slice of the General Knowledge paper.',
          },
          {
            type: 'p',
            text: 'Treat the mathematics papers differently from the other two. Their content will hold no surprises for a graduate, so solving them for correctness teaches little; solving them against a strict clock teaches a great deal. Record the time as well as the score, and keep working papers until the time comes down. When a paper takes you comfortably inside two hours at good accuracy, the mathematics preparation is finished and further work there is displacement.',
          },
          {
            type: 'note',
            title: 'Build the vocabulary list from the English papers',
            text: 'CDS English draws on a recognisable pool of synonyms, antonyms and idioms that recurs across cycles, and it overlaps heavily with the pool other UPSC and SSC papers use. A list built from four or five years of CDS English sections is short, specific and considerably more useful than a general word list of ten times the length.',
          },
        ],
      },
      'mock-tests': {
        description:
          'CDS mock tests — practice for the three-paper and two-paper formats with negative marking and section analysis.',
        lead: [
          'Practise the format you are actually sitting. A three-paper mock is the wrong preparation for an OTA-only candidate.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The single most useful adjustment a CDS candidate can make is to practise the correct paper set. Candidates applying across multiple academies need all three papers; candidates applying only to the Officers Training Academy need two, and should redirect the mathematics time into English and general knowledge, where their entire written score is decided.',
          },
          {
            type: 'list',
            title: 'What to review',
            items: [
              { text: 'General knowledge accuracy, by theme', note: 'the largest improvable component, with the defence seam most improvable of all.' },
              { text: 'English score', note: 'a hundred marks in every entry, and highly responsive to consistent practice.' },
              { text: 'Mathematics pace', note: 'for the three-paper entries. The level is modest; the time pressure is real.' },
              { text: 'Errors caused by guessing', note: 'a third of a mark each, and the easiest loss to eliminate.' },
            ],
          },
          {
            type: 'p',
            text: 'Begin Services Selection Board preparation in parallel. Physical fitness, group activity and the habit of forming and expressing views are what that stage assesses, and they take months to develop rather than weeks.',
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'NDA mock test', to: '/mock-tests/nda/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'Making a CDS mock useful',
            items: [
              { title: 'Sit the correct paper set', text: 'Three papers if you are applying to the IMA, INA or AFA; two if you are an OTA candidate. Practising the wrong set trains a distribution of effort you will not be able to use.' },
              { title: 'Track General Knowledge by theme', text: 'History, polity, geography, economy, science, current events and defence. One aggregate score across seven very different areas tells you nothing you can act on.' },
              { title: 'Record mathematics time as well as score', text: 'For the three-paper entries this is the number that predicts your performance, because the content itself is not the constraint.' },
              { title: 'Count losses to guessing', text: 'A third of a mark each. Candidates are consistently surprised by how much of the gap between their mock scores and their target is simply undisciplined guessing.' },
            ],
          },
          {
            type: 'p',
            text: 'Because CDS is held more than once a year, candidates often sit it repeatedly, and there is a specific trap in that: treating the next attempt as another go at the same paper rather than as a chance to fix what the last one exposed. If your General Knowledge was the weak paper, the interval between attempts is a general knowledge project. Sitting the examination again without having changed anything simply re-measures a candidate who has not moved.',
          },
          {
            type: 'note',
            title: 'Air Force candidates — the pilot aptitude test',
            text: 'Candidates applying for the flying branch take a computerised pilot selection system test at the SSB. It is normally a one-time opportunity in a candidate’s career — a failure is not repeatable at a later attempt — which makes understanding what it involves before you sit it materially more important than for any other component of the process.',
          },
        ],
      },
      preparation: {
        description:
          'CDS preparation strategy — planning by academy, building defence awareness and preparing for the SSB alongside the written papers.',
        lead: [
          'Decide which academies you are applying to first. That decision determines your entire written preparation.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'CDS preparation begins with a decision rather than a syllabus. A candidate targeting the IMA needs three papers and a class-10 mathematics revision; a candidate targeting only the OTA needs two papers and can put all of that mathematics time into English and general knowledge instead. Getting this decision clear at the outset avoids months of misdirected effort.',
          },
          {
            type: 'steps',
            title: 'A four to six month plan',
            items: [
              { text: 'Week one — settle which entries you are applying for.', note: 'Check the eligibility conditions for each; they differ in qualification, age and marital status.' },
              { text: 'From day one — general knowledge daily, including defence awareness.', note: 'A hundred marks in every entry, and the defence seam is learnable and rarely covered elsewhere.' },
              { text: 'From day one — English, thirty minutes daily.', note: 'A hundred marks in every entry, and for OTA candidates half the written examination.' },
              { text: 'Months one to three — elementary mathematics, if applicable.', note: 'Class 10 level, practised for speed rather than difficulty.' },
              { text: 'From day one — physical fitness.', note: 'The SSB includes outdoor tasks and a medical examination follows.' },
              { text: 'Throughout — build the SSB attributes.', note: 'Read, take responsibility in groups, form views and practise defending them.' },
              { text: 'Month four — full timed mocks in your paper set.', note: 'With negative marking applied.' },
            ],
          },
          {
            type: 'list',
            title: 'Common errors',
            items: [
              { text: 'Preparing the wrong paper set', note: 'mathematics is not part of the OTA entry at all.' },
              { text: 'Skipping defence awareness', note: 'a consistent and learnable seam within general knowledge that general guides ignore.' },
              { text: 'Postponing SSB preparation', note: 'it assesses attributes formed over years, and the written stage is only the entry ticket.' },
              { text: 'Overlooking the Air Force pilot aptitude test', note: 'a one-time opportunity for flying branch entry, worth understanding before you meet it.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'If you are applying to the IMA, INA or AFA',
                'Three papers, three hundred marks, with mathematics adding a speed component. For most graduates the mathematics needs maintenance rather than construction, which frees the bulk of your time for the general knowledge breadth that actually separates candidates.',
              ],
              [
                'If you are applying to the OTA only',
                'Two papers and no mathematics, which concentrates everything on English and General Knowledge. This is the entry where the defence awareness strand matters most, because with only two hundred written marks in play a predictable seam of questions is a larger share of your total.',
              ],
              [
                'If you are applying to several entries',
                'Prepare the full three-paper set and treat the OTA as covered by it. The reverse does not hold, and candidates who prepared for OTA and later added an IMA application have found the mathematics paper harder than its class 10 level suggests, purely on pace.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The SSB is the same five-day assessment used for NDA, but the candidates are different — graduates rather than school-leavers — and the board reasonably expects more: clearer views, some account of what you have done since school, and a better-formed sense of why you want a commission. That is not something to assemble in the fortnight after the written result. Reading widely, staying fit and being able to explain your own decisions is preparation that has to run alongside the written work.',
          },
          {
            type: 'note',
            title: 'A repeatable examination rewards a maintained base',
            text: 'Because CDS is conducted more than once a year, the most efficient long-run approach is a maintained base rather than a preparation cycle: English and general knowledge as permanent daily habits, mathematics kept warm with weekly timed practice, and fitness continuous. Candidates who build up and wind down around each notification spend most of their effort rebuilding ground they had already covered.',
          },
        ],
      },
      'study-material': {
        description:
          'CDS study material — English, general knowledge, defence awareness and elementary mathematics notes for all four entries.',
        lead: [
          'English and general knowledge serve every entry. Mathematics serves three of the four.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because English and general knowledge appear in every CDS entry and carry the whole of the OTA written examination, they deserve the largest share of study time for most candidates. Within general knowledge, the defence-specific content is worth building deliberately from past papers and defence news, since standard study material does not cover it.',
          },
          {
            type: 'links',
            title: 'Subject notes for CDS',
            items: [
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'Quantitative aptitude notes', to: '/study-material/quantitative-aptitude/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A daily routine',
            items: [
              'Thirty minutes of English — grammar rules and a running vocabulary list.',
              'Thirty minutes of general knowledge, rotating between static themes and current events.',
              'A defence news source followed regularly, for the awareness seam.',
              'Mathematics practice timed, if you are sitting the three-paper set.',
              'Physical training on most days.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'English — the common paper',
                'Grammar rules as a short, stable set, plus a running vocabulary list built from past papers. Comprehension speed built by reading a passage a day. A hundred marks in every entry and the most predictable return in the examination.',
              ],
              [
                'General Knowledge — the wide paper',
                'Polity, modern history, geography, economy and general science at general level, kept as themed lists for quick revision rather than as continuous reading. Add a defence awareness list, which nothing else on your shelf will cover.',
              ],
              [
                'Elementary Mathematics — for three of the four entries',
                'Arithmetic, elementary algebra, geometry, mensuration and basic trigonometry at class 10 level. Practise for speed rather than for difficulty; the material itself will not stretch a graduate.',
              ],
              [
                'Current affairs — with a defence emphasis',
                'A general news habit covers the standard current events questions. Following defence and security news specifically covers the seam that most candidates leave entirely unprepared.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The overlap with other examinations is worth exploiting deliberately. CDS English and general knowledge sit close enough to SSC and other UPSC papers that material prepared for one serves the others with little modification, and candidates sitting several examinations in a year should maintain a single set of notes rather than parallel ones. The only genuinely CDS-specific document you need is the defence awareness list.',
          },
          {
            type: 'note',
            title: 'One defence news source, followed regularly',
            text: 'Twenty minutes a week with a reliable defence news source, with anything new added to your list, is enough to keep the awareness strand current. The aim is not comprehensive coverage of every development but familiarity with the systems, organisations, exercises and programmes that recur — which is exactly what the paper asks about.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the CDS exam pattern?',
        a: 'It depends on the academy. Candidates for the Indian Military Academy, Indian Naval Academy and Air Force Academy sit three papers of two hours each — English, General Knowledge and Elementary Mathematics — for 300 marks. Candidates for the Officers Training Academy sit only two papers, English and General Knowledge, for 200 marks; there is no mathematics paper for that entry. One third of a mark is deducted for wrong answers, and the Services Selection Board follows for all entries.',
      },
      {
        q: 'Is there a mathematics paper in CDS OTA?',
        a: 'No. The Officers Training Academy entry has only two papers, English and General Knowledge, carrying a hundred marks each. This is the most consequential difference between the CDS entries, and it changes preparation entirely — an OTA-only candidate has no reason to work through the elementary mathematics syllabus and every reason to put that time into the two papers that decide their whole written score.',
      },
      {
        q: 'What is the eligibility for CDS?',
        a: 'A bachelor’s degree in any discipline for the Indian Military Academy and the Officers Training Academy. The Indian Naval Academy generally expects an engineering degree, and the Air Force Academy expects physics and mathematics at class 12 or an engineering degree. Age bands and marital status conditions differ between the entries and are not identical, so read the eligibility table for the specific academies you intend to apply for in the current notification.',
      },
      {
        q: 'How is CDS different from NDA?',
        a: 'CDS is the graduate entry and NDA is the school-level entry. NDA candidates apply from class 12 and undergo three years at the academy before commissioning; CDS candidates apply with a degree and go directly into academy training for a commission. The papers differ too — NDA has a heavy 300-mark mathematics paper and a 600-mark General Ability Test, while CDS uses three shorter hundred-mark papers, or two for the OTA entry. Both are followed by the same five-day Services Selection Board process.',
      },
      {
        q: 'What is the defence awareness component in CDS General Knowledge?',
        a: 'CDS general knowledge papers consistently include questions on the armed forces themselves — service structures and ranks, aircraft and naval vessels, joint exercises, defence organisations and recent acquisitions. General competitive-exam material does not cover this, which makes past CDS papers and a regularly followed defence news source effectively the only systematic preparation for it. Because the themes recur reliably, it is some of the most dependable material in the paper.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     UPSC CAPF
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'capf',
    path: '/government-exams/upsc/capf/',
    name: 'UPSC CAPF',
    fullName: 'Central Armed Police Forces (Assistant Commandants) Examination',
    authority: 'Union Public Service Commission (UPSC)',
    official: 'upsc.gov.in',
    seoTitle: 'UPSC CAPF AC 2026: Paper 1 & 2, PET, Interview — Full Guide',
    metaDescription:
      'UPSC CAPF Assistant Commandant exam guide — Paper 1 and the descriptive Paper 2, physical tests, medical standards, interview and preparation.',
    lead: [
      'The Central Armed Police Forces examination recruits Assistant Commandants — the entry-level gazetted officer rank — into the BSF, CRPF, CISF, ITBP and SSB. It is a direct officer entry into forces that between them secure borders, industrial installations and internal order.',
      'Its distinguishing feature among uniformed recruitments is Paper 2: a three-hour descriptive paper of essay and comprehension. No other central police recruitment at this level asks candidates to write at length, and it separates the field more sharply than the objective paper does.',
    ],
    quickFacts: [
      ['Conducted by', 'Union Public Service Commission (UPSC)'],
      ['Post', 'Assistant Commandant — a gazetted officer rank'],
      ['Forces', 'BSF, CRPF, CISF, ITBP and SSB'],
      ['Level', 'Bachelor’s degree in any discipline'],
      ['Stages', 'Written examination (Papers 1 and 2) → physical and medical standards tests → interview'],
      ['Distinctive feature', 'Paper 2 is a three-hour descriptive paper — essay and comprehension'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Assistant Commandant is the direct entry officer rank in the central armed police forces. Successful candidates are allocated to one of the five forces based on merit and preference, and take up command responsibilities relatively early — leading a company-sized body of personnel in operational conditions.',
      },
      {
        type: 'p',
        text: 'The selection reflects that responsibility. The written examination combines an objective paper on general ability and intelligence with a descriptive paper testing written expression and reasoning. Physical efficiency and medical standards follow, and the interview carries meaningful marks. It is a process designed to test judgement and communication alongside knowledge and fitness.',
      },
      {
        type: 'list',
        title: 'The five forces',
        items: [
          { text: 'Border Security Force', note: 'guarding the land borders with Pakistan and Bangladesh.' },
          { text: 'Central Reserve Police Force', note: 'internal security, counter-insurgency and law and order assistance to states.' },
          { text: 'Central Industrial Security Force', note: 'security of industrial installations, airports and critical infrastructure.' },
          { text: 'Indo-Tibetan Border Police', note: 'guarding the high-altitude northern border.' },
          { text: 'Sashastra Seema Bal', note: 'guarding the borders with Nepal and Bhutan.' },
        ],
      },
      {
        type: 'note',
        title: 'Allocation follows merit and preference',
        text: 'You are not applying to one force. Candidates submit a preference order and are allocated according to rank, which means the force you serve in is determined by your position in the merit list as much as by your choice.',
      },
    ],
    stages: [
      {
        name: 'Paper 1 — General Ability and Intelligence',
        mode: 'Objective, 2 hours',
        detail:
          '125 questions for 250 marks covering general mental ability, general science, current events, Indian polity and economy, history and geography. One third of a mark is deducted for each wrong answer.',
      },
      {
        name: 'Paper 2 — General Studies, Essay and Comprehension',
        mode: 'Descriptive, 3 hours',
        detail:
          '200 marks. Part A requires essays in English or Hindi on topics such as modern Indian history, polity, economy, security and human rights; Part B tests comprehension, precis writing, developing counter-arguments and other communication skills, in English only.',
      },
      {
        name: 'Physical Efficiency Test and Medical Standards Test',
        mode: 'Qualifying',
        detail:
          'Timed running, long jump and shot put, with standards differing for male and female candidates, followed by a medical examination against the standards prescribed for the forces. Qualifying in nature.',
      },
      {
        name: 'Interview / Personality Test',
        mode: 'Interview before a board',
        detail:
          '150 marks, assessing suitability for a command role in the armed police forces — judgement, communication, awareness and temperament.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'UPSC CAPF syllabus — Paper 1 general ability topics and the Paper 2 essay and comprehension requirements.',
        lead: [
          'One objective paper covering broad general studies, and one descriptive paper testing whether you can write. The second is where preparation most often falls short.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Paper 1 — General Mental Ability',
                'Logical reasoning, quantitative aptitude including numerical ability, and data interpretation through graphs, charts and tables. A substantial component, and one that rewards ordinary competitive-exam practice.',
              ],
              [
                'Paper 1 — General Science',
                'General awareness and scientific temper, comprehension and appreciation of scientific phenomena in everyday life, and contemporary developments in information technology, biotechnology, environmental science and space.',
              ],
              [
                'Paper 1 — Current Events',
                'National and international developments across culture, music, arts, literature, sports, governance, societal and developmental issues, industry, business, globalisation, and the interplay between nations.',
              ],
              [
                'Paper 1 — Indian Polity and Economy',
                'The Constitution and political system, panchayati raj, social systems and public administration, economic development in India, regional and international security issues, human rights and their indicators.',
              ],
              [
                'Paper 1 — History and Geography',
                'History of India with an emphasis on culture, freedom movement and the post-independence period; and Indian and world geography covering physical, social and economic aspects.',
              ],
              [
                'Paper 2 — Part A: Essay',
                'Essays in English or Hindi on topics drawn from modern Indian history and the freedom struggle, geography, polity and economy, knowledge of security and human rights issues, and analytical ability. Tests whether you can construct and sustain an argument.',
              ],
              [
                'Paper 2 — Part B: Comprehension and Communication',
                'Comprehension passages, precis writing, developing counter-arguments, simple grammar and other aspects of language testing, and communication and language skills. Answered in English only, regardless of the language chosen for Part A.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The security and human rights strand running through both papers is worth noting. CAPF asks about internal security, border management, insurgency, policing and rights questions more directly than most general competitive examinations, and a candidate who follows those debates specifically will find both the essay paper and the interview considerably easier.',
          },
          {
            type: 'p',
            text: 'Read the Paper 2 syllabus as a description of a skill rather than a body of content. Essay, precis, comprehension, counter-argument, grammar and usage — none of those is something you can study in the way you can study polity. They are practised. That distinction explains why candidates who prepare CAPF entirely from general studies material arrive with a well-stocked Paper 1 and no Paper 2 preparation at all, having read a syllabus that did not look like it was asking for anything.',
          },
          {
            type: 'note',
            title: 'The counter-argument requirement is unusual and revealing',
            text: 'Few competitive examinations explicitly ask candidates to develop a counter-argument to a given position. Its presence here tells you what the commission wants from an Assistant Commandant: someone who can see the other side of a contested question, which in a force context usually means the tension between security imperatives and civil liberties. Practise writing against your own position, not just for it.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'UPSC CAPF exam pattern — Paper 1 and Paper 2 marks and format, the physical standards, and the interview weighting.',
        lead: [
          'Four hundred and fifty written marks, split between an objective paper and a descriptive one, then physicals and a hundred and fifty marks of interview.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Written examination structure. Confirm marks, timing and the deduction rate against the current notification.',
            head: ['Paper', 'Format', 'Marks', 'Duration'],
            rows: [
              ['Paper 1 — General Ability and Intelligence', 'Objective, 125 questions', '250', '2 hours'],
              ['Paper 2 — General Studies, Essay and Comprehension', 'Descriptive', '200', '3 hours'],
            ],
          },
          {
            type: 'p',
            text: 'Paper 2 is worth two hundred marks — close to half the written total — and it is evaluated only for candidates who clear the Paper 1 threshold. Because it is descriptive, it rewards a skill that objective preparation does not build at all, and it is the paper where a candidate’s marks most often diverge from their expectations.',
          },
          {
            type: 'list',
            title: 'Physical and medical standards',
            items: [
              { text: 'Physical efficiency test', note: 'timed running over prescribed distances, plus long jump and shot put, with different standards for male and female candidates. Qualifying only.' },
              { text: 'Medical standards test', note: 'height, chest and weight requirements, along with vision, hearing and general fitness against the standards prescribed for the forces.' },
              { text: 'Interview', note: '150 marks, added to the written marks in the final merit.' },
              { text: 'One third of a mark deducted in Paper 1', note: 'so disciplined skipping is worthwhile in the objective paper.' },
            ],
          },
          {
            type: 'note',
            title: 'Confirm the physical and medical standards early',
            text: 'Running distances and timings, jump and shot put standards, and the height, chest and vision requirements are all set out in the notification and vary by gender and category. Because the medical stage comes after the written examination, it is worth confirming at the outset that you meet the standards you will eventually be assessed against.',
          },
          {
            type: 'p',
            text: 'The evaluation rule for Paper 2 is the single most consequential detail in this pattern, and it changes how you should think about Paper 1. Because Paper 2 is assessed only for candidates who clear a threshold in Paper 1, the objective paper is a gate as well as a scorer — but once you are comfortably past that gate, further Paper 1 improvement is worth much less than the equivalent effort spent on the descriptive paper that carries close to half the written marks and is where the field thins out.',
          },
          {
            type: 'defs',
            items: [
              [
                'Paper 1 — two hours, a hundred and twenty-five questions',
                'A little under a minute a question across general mental ability, science, current events, polity, economy, history and geography. Broad rather than deep, with a third of a mark deducted for errors, which makes elimination discipline worth more than extra recall at the margin.',
              ],
              [
                'Paper 2 — three hours, written by hand',
                'An essay component and a comprehension and communication component. Three hours of sustained writing is a physical as well as an intellectual demand, and candidates who have never written for that long consistently run out of time in the second half.',
              ],
              [
                'The physical stage — qualifying but eliminating',
                'It adds nothing to your merit position and can remove you entirely. Standards for running, long jump and shot put differ by gender and category, and they are published in advance, which makes failure there unusually avoidable.',
              ],
              [
                'The interview — a hundred and fifty marks',
                'Added to the written total, and drawing on the same ground the essay paper does: security, governance, rights and your own reasons for wanting a commission in a central armed police force.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'The forces differ, and the interview knows it',
            text: 'The BSF, CRPF, CISF, ITBP and SSB have distinct mandates, terrains and operational cultures, and a candidate who cannot say why they have ordered their preferences the way they have is answering the most predictable interview question badly. An evening spent reading about what each force actually does is worth more at that stage than a week of general preparation.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'UPSC CAPF previous year papers — calibrating the essay paper and identifying the recurring security and human rights themes.',
        lead: [
          'Past Paper 2 topics are the best available guide to what this examination actually cares about, and they cluster tightly.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Read the essay topics from several years of CAPF Paper 2 and a clear preoccupation emerges: internal security, border management, the relationship between development and insurgency, human rights in policing, federalism and centre-state security coordination. These are the themes the examination returns to, and a candidate who has thought about them carefully will write far better than one meeting them for the first time in the hall.',
          },
          {
            type: 'steps',
            title: 'Using past papers for a descriptive exam',
            items: [
              { text: 'Write full essays on past topics, under time.', note: 'Three hours for both parts of Paper 2 is less generous than it appears once precis and comprehension are included.' },
              { text: 'Build a position on each recurring theme.', note: 'Not a memorised essay, but a considered view you can adapt to whatever framing appears.' },
              { text: 'Practise precis writing separately.', note: 'It is the most mechanically improvable component of Part B, and the one candidates practise least.' },
              { text: 'Use Paper 1 papers for pacing and coverage.', note: '125 questions in two hours, with a deduction, rewards a settled attempt strategy.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Police exam preparation', to: '/government-exams/police/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
          {
            type: 'list',
            title: 'The themes past essay topics keep returning to',
            items: [
              { text: 'Internal security and its civil costs', note: 'insurgency, radicalisation, policing in disturbed areas, and the standing tension between security measures and constitutional rights.' },
              { text: 'Federalism and centre-state friction', note: 'the deployment of central forces, law and order as a state subject, and the coordination problems that follow from that division.' },
              { text: 'Development as a security question', note: 'the argument that under-development sustains insurgency, and the counter-argument that security is a precondition for development rather than a consequence of it.' },
              { text: 'Border management and migration', note: 'the practical and human dimensions of securing long and populated borders.' },
              { text: 'Society under stress', note: 'communalism, gender, social media and misinformation, and the role of a uniformed force within a plural society.' },
            ],
          },
          {
            type: 'p',
            text: 'The productive way to work with that list is not to write an essay on each topic but to build a position on each theme — a page containing the strongest case on both sides, three or four concrete illustrations, and your own considered view. Essay topics are phrased differently every year; themes are not. A candidate carrying five well-formed positions into the hall can construct an argued essay on almost any framing, while one carrying five memorised essays is hoping for a match.',
          },
          {
            type: 'p',
            text: 'Precis writing deserves separate and explicit practice, because it is the component where improvement is fastest and preparation is rarest. It is a mechanical skill: identify the argument, discard illustration, preserve proportion, hold to the length. Ten precis written and checked against their sources will take you most of the way, and almost no candidate does ten.',
          },
          {
            type: 'note',
            title: 'Read the passages as a writer, not a candidate',
            text: 'The comprehension passages in past Paper 2 sets are worth studying for their construction as much as for their content. Noticing how a well-built argument moves — claim, evidence, qualification, conclusion — is directly transferable to the essay you have to write in the same three hours, and it is a more efficient way to improve your own structure than reading advice about essay structure.',
          },
        ],
      },
      'mock-tests': {
        description:
          'UPSC CAPF mock tests — Paper 1 objective practice, and written-answer practice as the equivalent for Paper 2.',
        lead: [
          'Mocks cover Paper 1. For Paper 2, the equivalent is writing essays and precis under time and having them read.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Paper 1 responds well to conventional mock practice: timed papers, the correct deduction, and error analysis by subject. Paper 2 does not have a mock equivalent, and the substitute — writing full pieces under time and getting honest feedback — is the part of CAPF preparation most often skipped.',
          },
          {
            type: 'list',
            title: 'A weekly practice rhythm',
            items: [
              { text: 'One full Paper 1 mock', note: 'with the one-third deduction applied, analysed by subject rather than by score alone.' },
              { text: 'One full essay under time', note: 'on a past topic or a current security or governance question.' },
              { text: 'One precis', note: 'checked against the source for faithfulness and length discipline.' },
              { text: 'Physical training throughout', note: 'the efficiency test follows the written stage, and running and shot put standards take months to reach.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'UPSC mock tests', to: '/mock-tests/upsc/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A practice week that matches the paper',
            items: [
              { title: 'One timed Paper 1 mock', text: 'A hundred and twenty-five questions in two hours with the one-third deduction applied, analysed by subject rather than by total.' },
              { title: 'One full essay by hand', text: 'Under time, on a past topic or a current security question, written on paper rather than typed — the exam is handwritten and stamina is part of what is being tested.' },
              { title: 'One precis, checked properly', text: 'Against the source, for faithfulness, proportion and length discipline. This is the component that improves fastest with feedback.' },
              { title: 'One counter-argument exercise', text: 'Take a position you hold and write the strongest case against it in three hundred words. It is the specific skill the syllabus names and the one least practised.' },
              { title: 'Physical training throughout', text: 'Running at the prescribed distance, plus long jump and shot put practice. The efficiency test follows the written stage and does not wait for you to get fit.' },
            ],
          },
          {
            type: 'p',
            text: 'Get your written work read by someone willing to be blunt. The failure modes in a descriptive paper — assertions without support, paragraphs that repeat rather than advance, a conclusion that summarises instead of concluding — are close to invisible from the inside. A single honest reader over several months will do more for your Paper 2 score than any quantity of unreviewed writing, and writing that is never read tends to entrench habits rather than correct them.',
          },
          {
            type: 'note',
            title: 'Handwriting and time are part of the test',
            text: 'Three hours of continuous handwriting is unfamiliar to most candidates who have spent their preparation typing or reading. Practise on paper, at speed, and find out early whether your writing stays legible in the third hour. A well-argued answer that the examiner cannot read is marked as what it appears to be.',
          },
        ],
      },
      preparation: {
        description:
          'UPSC CAPF preparation — building essay-writing skill, covering security and human rights themes, and training physically.',
        lead: [
          'Three tracks: the objective paper, the descriptive paper, and physical fitness. The descriptive paper is the one candidates neglect and the one that most often decides the outcome.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A candidate preparing for CAPF with general competitive-exam material will cover Paper 1 adequately and Paper 2 hardly at all. Two hundred marks of essay, precis and comprehension is not something objective practice develops, and the gap shows immediately in the mark sheet. Writing practice should start in the first month.',
          },
          {
            type: 'steps',
            title: 'A four to six month plan',
            items: [
              { text: 'Week one — check the physical and medical standards, and start training.', note: 'Running, long jump and shot put. All improve gradually.' },
              { text: 'From day one — one written piece a week, minimum.', note: 'An essay or a precis, under time. Start before you feel ready; the skill accumulates slowly.' },
              { text: 'From day one — follow security and governance news specifically.', note: 'Internal security, border management, insurgency and development, human rights in policing. The examination’s recurring preoccupations.' },
              { text: 'Months one to three — Paper 1 general studies.', note: 'Polity, economy, history, geography, general science and mental ability. Conventional preparation serves well here.' },
              { text: 'Month three — increase writing to twice weekly.', note: 'And begin timing the full three-hour Paper 2 format.' },
              { text: 'Month four — Paper 1 mocks and continued writing.', note: 'With physical training maintained throughout.' },
              { text: 'After the written examination — interview preparation.', note: 'A hundred and fifty marks, drawing on the same security and governance awareness the essay paper rewards.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates successful candidates',
            items: [
              { text: 'Regular writing practice', note: 'the single largest differentiator in this examination.' },
              { text: 'Genuine engagement with security and rights questions', note: 'which serves the essay, the comprehension and the interview together.' },
              { text: 'Physical preparation started early', note: 'rather than after the written result.' },
              { text: 'Precis practice', note: 'a mechanical skill that improves quickly and is almost universally under-practised.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'The writing track',
                'The differentiator, and the one that has to run for the whole preparation rather than a phase of it. One written piece a week from the first week, rising to two or three, always under time and always read by someone. Nothing else in a CAPF plan produces as much marginal return.',
              ],
              [
                'The reading track',
                'A newspaper daily, read specifically for the security, governance and rights strand rather than for general awareness. This single habit feeds Paper 1 current events, the Paper 2 essay, and the interview simultaneously.',
              ],
              [
                'The physical track',
                'Started in week one and maintained continuously. Running to the prescribed distance and timing, plus long jump and shot put, which are technique events where a few sessions of actual practice matter more than general fitness.',
              ],
              [
                'The general studies track',
                'Polity, economy, history, geography and science at standard graduate level. Necessary, finite, and the part of the preparation most likely to expand to fill the space that writing practice should have occupied.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'A candidate arriving from Civil Services preparation has a real head start in Paper 1 and in the reading habit, and should be careful about one thing only: the CAPF essay is not a mains general studies answer. It is longer, it sustains a single argument rather than covering dimensions, and it rewards a clear position more than balanced coverage. Candidates trained to write two-hundred-word structured answers often produce an essay that reads as several answers placed end to end.',
          },
          {
            type: 'note',
            title: 'Check the standards before committing the year',
            text: 'Height, chest and vision requirements, and the running, jump and throw standards, are published in the notification and differ by gender and category. Reading them in your first week costs an hour. Discovering at the physical stage that you do not meet a fixed standard costs a year of preparation and a full application cycle.',
          },
        ],
      },
      'study-material': {
        description:
          'UPSC CAPF study material — polity, economy, history, geography and science notes, plus guidance on security and human rights reading.',
        lead: [
          'Standard general studies notes cover Paper 1. Paper 2 needs reading and writing rather than notes.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The general studies notes below serve Paper 1 well. For Paper 2, the material that matters is a newspaper read for argument, sustained attention to security and governance debates, and — above all — your own written output, which is the only thing that develops the skill the paper measures.',
          },
          {
            type: 'links',
            title: 'Subject notes for UPSC CAPF',
            items: [
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Indian economy notes', to: '/study-material/economy/' },
              { label: 'Modern Indian history', to: '/study-material/history/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'A weekly routine',
            items: [
              'A newspaper daily, read for the security and governance strand in particular.',
              'One essay or precis a week under time, rising to two as the exam approaches.',
              'General studies revision from your own notes rather than from source books.',
              'Physical training on most days, to the standards in the notification.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'For Paper 1 — conventional general studies',
                'Polity, economy, modern history, geography and general science at graduate level, kept as revisable notes rather than as books to re-read. This material is widely available and interchangeable with what you would use for any other general studies paper.',
              ],
              [
                'For the essay — positions, not notes',
                'One page per recurring theme: the strongest case each way, three or four concrete illustrations, and your own view. Five or six of these pages are worth more than a shelf of general studies material, because they are what you actually draw on under time.',
              ],
              [
                'For comprehension and precis — practice, not reading',
                'Passages worked and checked. There is no body of knowledge to acquire here; there is only a technique that improves with repetition and feedback.',
              ],
              [
                'For current affairs — a security lens',
                'The same newspaper other candidates read, filtered differently. Internal security developments, policing and rights questions, border and force-related news, and major governance debates.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Beyond the standard general studies shelf, this is an examination where a small amount of serious reading on internal security and civil liberties pays disproportionately. You are not being asked for expertise; you are being asked to write as someone who has thought about the trade-offs a central armed police force actually lives with. A handful of good long-form articles on policing, insurgency and rights, read properly and argued with, will show up in the essay, the counter-argument and the interview alike.',
          },
          {
            type: 'note',
            title: 'Keep the writing file, not the reading file',
            text: 'The most valuable document at the end of a CAPF preparation is the folder of your own written pieces with corrections on them. Re-reading your third essay beside your fifteenth is the clearest evidence of progress you will get, and the corrections themselves become the checklist you run through before submitting a paper.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the UPSC CAPF exam pattern?',
        a: 'Two written papers. Paper 1 is objective — 125 questions for 250 marks in two hours, covering general mental ability, general science, current events, Indian polity and economy, and history and geography, with one third of a mark deducted for wrong answers. Paper 2 is descriptive — 200 marks over three hours, comprising essays in English or Hindi and a comprehension and communication section answered in English only. A physical efficiency test, medical standards test and a 150-mark interview follow.',
      },
      {
        q: 'Which forces does UPSC CAPF recruit for?',
        a: 'The Border Security Force, Central Reserve Police Force, Central Industrial Security Force, Indo-Tibetan Border Police and Sashastra Seema Bal. Candidates submit a preference order rather than applying to a single force, and allocation follows from merit position and preference together, so the force you serve in depends substantially on your rank.',
      },
      {
        q: 'How important is CAPF Paper 2?',
        a: 'It carries 200 marks — close to half the written total — and it tests a skill objective preparation does not build. Candidates preparing with standard competitive-exam material typically cover Paper 1 well and Paper 2 barely at all, and the gap shows directly in the result. Essay and precis writing under time should start in the first month of preparation rather than in the final weeks.',
      },
      {
        q: 'What are the physical requirements for UPSC CAPF?',
        a: 'A physical efficiency test with timed running over prescribed distances, plus long jump and shot put, with different standards for male and female candidates, followed by a medical standards test covering height, chest and weight along with vision, hearing and general fitness. Both are qualifying rather than merit-counting. Because the standards vary by gender and category and the medical comes after the written stage, it is worth confirming at the outset that you meet the requirements you will be assessed against.',
      },
      {
        q: 'What should I read for the CAPF essay paper?',
        a: 'Follow internal security, border management, the relationship between development and insurgency, human rights in policing, and centre-state security coordination — the themes CAPF essay topics return to across cycles. The aim is not to memorise essays but to form considered positions you can adapt to whatever framing appears, and to be able to acknowledge the reasonable counter-argument. The same reading serves the comprehension section and the interview.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Engineering Services (ESE)
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'engineering-services',
    path: '/government-exams/upsc/engineering-services/',
    name: 'UPSC ESE',
    fullName: 'Engineering Services Examination',
    authority: 'Union Public Service Commission (UPSC)',
    official: 'upsc.gov.in',
    seoTitle: 'UPSC ESE 2026: Prelims, Mains, Branch Syllabus & Strategy',
    metaDescription:
      'UPSC Engineering Services exam guide — prelims and conventional mains pattern, branch-wise syllabus, personality test and preparation strategy.',
    lead: [
      'The Engineering Services Examination recruits Class I technical officers for central government engineering departments and public sector organisations — the Indian Railways engineering services, the Central Engineering Service, the Border Roads Engineering Service, the Indian Ordnance Factories Service and others. It is the most demanding technical recruitment the Commission conducts.',
      'What makes it hard is not breadth but depth combined with format. The mains papers are conventional — you write full engineering solutions by hand, with derivations, diagrams and numerical working — which is a skill most candidates have not practised since their degree examinations.',
    ],
    quickFacts: [
      ['Conducted by', 'Union Public Service Commission (UPSC)'],
      ['Branches', 'Civil, Mechanical, Electrical, and Electronics and Telecommunication Engineering'],
      ['Level', 'A degree in engineering in the relevant branch'],
      ['Stages', 'Preliminary (objective) → Main (conventional, written) → Personality Test'],
      ['Distinctive feature', 'The main examination is conventional — full written engineering solutions'],
      ['Total marks', 'Prelims 500, Mains 600, Personality Test 200'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Engineering Services officers occupy senior technical positions across central government engineering organisations, with responsibilities spanning design, execution, maintenance and project management on public infrastructure of national scale. It is a Class I gazetted entry, and the selection process is correspondingly demanding.',
      },
      {
        type: 'p',
        text: 'The examination runs in four branches — civil, mechanical, electrical, and electronics and telecommunication — and a candidate competes only within their own branch. Eligibility is an engineering degree in the relevant branch, and the syllabus is drawn at degree level rather than diploma level, which distinguishes it sharply from technical recruitments such as SSC JE or RRB JE.',
      },
      {
        type: 'list',
        title: 'The three stages, and what changes between them',
        items: [
          { text: 'Preliminary — 500 marks', note: 'two objective papers: a general studies and engineering aptitude paper of 200 marks, and a branch paper of 300 marks. A screening stage whose marks do carry forward.' },
          { text: 'Main — 600 marks', note: 'two conventional branch papers of 300 marks each, written by hand with full solutions. This is where the examination is genuinely decided.' },
          { text: 'Personality Test — 200 marks', note: 'an interview assessing technical grounding, awareness and suitability for a senior technical role.' },
        ],
      },
      {
        type: 'note',
        title: 'Unlike UPSC CSE, prelims marks carry forward',
        text: 'A candidate familiar with the Civil Services Examination may assume the preliminary stage is discarded. In the Engineering Services Examination it is not — prelims marks form part of the final total alongside the mains and personality test. That changes the calculus: performing well in prelims is worth real marks, not merely a seat in the next stage.',
      },
    ],
    stages: [
      {
        name: 'Preliminary — Paper I: General Studies and Engineering Aptitude',
        mode: 'Objective, 2 hours',
        detail:
          '200 marks covering current affairs, engineering aptitude including reasoning and analytical ability, engineering mathematics and numerical analysis, general principles of design and drawing, standards and safety, natural and social environment and engineering, basics of energy and environment, project management, materials science, information and communication technologies, and ethics and values in the engineering profession.',
      },
      {
        name: 'Preliminary — Paper II: Engineering Discipline',
        mode: 'Objective, 3 hours',
        detail:
          '300 marks on the candidate’s own branch — civil, mechanical, electrical, or electronics and telecommunication — at degree level.',
      },
      {
        name: 'Main — Papers I and II',
        mode: 'Conventional, 3 hours each',
        detail:
          'Two written papers of 300 marks each in the candidate’s branch, requiring full solutions with derivations, diagrams and numerical working. The format that distinguishes this examination from every other technical recruitment.',
      },
      {
        name: 'Personality Test',
        mode: 'Interview before a board',
        detail:
          '200 marks, assessing technical understanding, awareness of the profession and its context, and general suitability for a senior technical position in government.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'UPSC ESE syllabus — the general studies and engineering aptitude paper, and the branch-wise syllabus for all four engineering disciplines.',
        lead: [
          'One common paper and a branch syllabus at degree depth. Read only your own branch, and read it against your degree textbooks rather than a competitive-exam digest.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Studies and Engineering Aptitude',
                'Current issues of national and international importance; engineering aptitude covering logical reasoning and analytical ability; engineering mathematics and numerical analysis; general principles of design, drawing and importance of safety; standards and quality practices in production, construction, maintenance and services; basics of energy and environment covering conservation, environmental pollution and degradation, climate change and environmental impact assessment; basics of project management; basics of material science and engineering; information and communication technologies based tools and their applications; and ethics and values in the engineering profession.',
              ],
              [
                'Civil Engineering',
                'Building materials, solid mechanics, structural analysis, design of steel structures, design of concrete and masonry structures, construction practice, planning and management; flow of fluids, hydraulic machines and hydropower, hydrology and water resources engineering, environmental engineering, geotechnical engineering and foundation engineering, surveying and geology, and transportation engineering.',
              ],
              [
                'Mechanical Engineering',
                'Fluid mechanics, thermodynamics and heat transfer, IC engines, refrigeration and air conditioning, turbomachinery, power plant engineering, renewable sources of energy; engineering mechanics, engineering materials, mechanisms and machines, design of machine elements, manufacturing, industrial and maintenance engineering, and mechatronics and robotics.',
              ],
              [
                'Electrical Engineering',
                'Engineering mathematics, electrical materials, electric circuits and fields, electrical and electronic measurements, computer fundamentals, basic electronics engineering; analog and digital electronics, systems and signal processing, control systems, electrical machines, power systems, power electronics and drives.',
              ],
              [
                'Electronics and Telecommunication Engineering',
                'Basic electronics engineering, basic electrical engineering, materials science, electronic measurements and instrumentation, network theory, analog and digital circuits; analog and digital communication systems, control systems, computer organisation and architecture, electromagnetics, and advanced electronics and communication topics.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The general studies and engineering aptitude paper deserves more attention than candidates give it. It is two hundred marks of the five hundred available in prelims, and much of it — project management, standards and safety, ethics, environment, materials — is not covered by an engineering degree at all. It is a distinct subject requiring its own preparation.',
          },
          {
            type: 'p',
            text: 'The branch syllabi are written at degree level and span most of a four-year programme, which means reading them cover to cover produces despair rather than a plan. The usable approach is to convert the list into three groups against your own transcript: subjects you can still work problems in, subjects you understood once and would need to rebuild, and subjects you never really had. Almost all of your first three months belongs to the second group, because that is where the return per hour is highest — rebuilding is faster than learning, and those subjects are usually the high-weight ones.',
          },
          {
            type: 'note',
            title: 'The common paper is not a general knowledge paper',
            text: 'The general studies and engineering aptitude syllabus lists things engineering study genuinely does not cover — project management, engineering ethics, standards and quality practices, materials, energy and environment, and information technology basics — alongside conventional current affairs. Candidates who read the paper title and assume it is ordinary general studies prepare the wrong half of two hundred prelims marks that count towards the final total.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'UPSC ESE exam pattern — prelims and mains marks, the conventional answer format, and how the final merit is calculated.',
        lead: [
          'Thirteen hundred marks in total, of which six hundred come from papers you write by hand. That format is the defining feature.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Examination structure. Confirm marks, durations and the negative marking rate against the current notification.',
            head: ['Stage', 'Paper', 'Marks', 'Format'],
            rows: [
              ['Preliminary', 'General Studies and Engineering Aptitude', '200', 'Objective, 2 hours'],
              ['Preliminary', 'Engineering Discipline', '300', 'Objective, 3 hours'],
              ['Main', 'Branch Paper I', '300', 'Conventional, 3 hours'],
              ['Main', 'Branch Paper II', '300', 'Conventional, 3 hours'],
              ['Personality Test', 'Interview', '200', 'Before a board'],
            ],
          },
          {
            type: 'p',
            text: 'The conventional papers are what separate this examination from every other technical recruitment. You are not selecting an option — you are producing a full engineering solution with the derivation, the diagram, the assumptions stated and the numerical working shown, by hand, at pace. Candidates who prepare exclusively through objective practice arrive unable to do this at speed, and the mains marks reflect it.',
          },
          {
            type: 'list',
            title: 'Consequences worth planning around',
            items: [
              { text: 'Prelims marks carry into the final total', note: 'unlike the Civil Services Examination. Performing well there is worth real marks.' },
              { text: 'Handwriting speed and presentation matter', note: 'a correct solution that is illegible or incomplete for want of time earns less than it should.' },
              { text: 'Negative marking applies in prelims', note: 'so the objective stage still rewards elimination discipline.' },
              { text: 'The personality test is 200 marks', note: 'a meaningful share of 1300, and it draws on technical grounding as well as general awareness.' },
            ],
          },
          {
            type: 'note',
            title: 'Practise writing, not just solving',
            text: 'The most common gap in ESE preparation is between being able to solve a problem and being able to present the solution fully, legibly and within time. Those are different skills, and only the second is what the mains papers measure. Written practice against a clock should begin months before the examination.',
          },
          {
            type: 'p',
            text: 'Because prelims marks carry into the final total, ESE behaves differently from every other UPSC examination a candidate may have prepared for. There is no point at which the objective stage becomes irrelevant, and a comfortable prelims performance is not merely a ticket to the next round — it is banked. That single difference should change how you treat the objective stage: not as a hurdle to clear and forget, but as five hundred of thirteen hundred marks to be maximised.',
          },
          {
            type: 'defs',
            items: [
              [
                'What conventional actually demands',
                'Full worked solutions in your own handwriting: stated assumptions, the governing equation, the substitution, carried units, a labelled diagram where one helps, and an explicit conclusion. Marks are awarded along that path, which means a partially completed answer scores and a correct final number with no working may not.',
              ],
              [
                'Why three hours is short',
                'A conventional paper asks for a small number of long answers rather than a large number of short ones, and the binding constraint is writing speed rather than solving speed. Candidates who can solve every question on a paper routinely find they can only write up two thirds of it.',
              ],
              [
                'Choice within the paper',
                'Where a conventional paper offers a choice of questions, the decision of what to attempt is worth real minutes at the start. Choosing a question because the topic is familiar, and discovering in the third part that it is not, is the most expensive error available in a three-hour paper.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Presentation is marked, whether or not it is listed',
            text: 'A legible answer with a clear structure, an underlined final result and a properly labelled diagram is easier to award marks to than an equally correct answer that is not. Over four papers this is not a marginal effect. Build the habits — a ruled diagram, units carried through, assumptions stated at the top — during practice, because they are too deliberate to adopt for the first time under exam pressure.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'UPSC ESE previous year papers — using past prelims and conventional mains papers to identify recurring topics and practise presentation.',
        lead: [
          'For the conventional papers, past questions are not just practice — they are the only realistic way to learn how much to write and how fast.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'A candidate who has solved a hundred objective questions on structural analysis still does not know how long a full conventional answer on the same topic takes to write, how much derivation to include, or how to lay out a diagram so an examiner can follow it. Past mains papers, attempted in full and under time, are the only way to find out — and finding out in the examination hall is expensive.',
          },
          {
            type: 'steps',
            title: 'Working past papers properly',
            items: [
              { text: 'Build a topic frequency table for your branch.', note: 'Across several years of both prelims and mains. The emphasis is uneven and knowing where it falls redirects months of study.' },
              { text: 'Attempt past mains papers in full, by hand, under three hours.', note: 'Not selected questions — full papers, because the constraint being tested is time across the whole paper.' },
              { text: 'Review your own answers for presentation.', note: 'Are assumptions stated, diagrams labelled, units carried, conclusions clear? Examiners reward all of these.' },
              { text: 'Use prelims papers for coverage checking.', note: 'They sample the branch syllabus broadly and expose gaps quickly.' },
              { text: 'Do not neglect the general studies and aptitude paper.', note: 'Its content sits outside an engineering degree and past papers show what is actually asked.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Engineering and PSU exams', to: '/government-exams/engineering-psu/' },
              { label: 'GATE exam guide', to: '/entrance-exams/pg-research/gate/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
          {
            type: 'list',
            title: 'What the frequency table changes about your plan',
            items: [
              { text: 'It identifies the four or five subjects that carry the paper', note: 'every branch has them, and they are not always the ones a candidate remembers as important from their degree.' },
              { text: 'It separates objective-only topics from conventional topics', note: 'some material appears in prelims and essentially never in the written papers. Knowing which is which stops you preparing derivations you will never be asked to write.' },
              { text: 'It shows the standard configurations', note: 'the recurring beam arrangements, circuits, cycles and mechanisms around which numerical questions are built. Recognising the configuration quickly is most of the battle in a timed conventional paper.' },
              { text: 'It reveals what is asked as theory', note: 'a meaningful share of conventional marks comes from explanation and derivation rather than numbers, and those questions need a different kind of preparation from problem-solving.' },
            ],
          },
          {
            type: 'p',
            text: 'Attempting a full conventional paper by hand under three hours is uncomfortable the first several times and is not optional. It is the only way to discover the things that matter — how long your handwriting takes, how many questions you can genuinely complete, whether your diagrams are costing you minutes, whether you can hold concentration through the third hour. None of that is knowable from solving problems in a notebook at your own pace, and all of it is decisive on the day.',
          },
          {
            type: 'p',
            text: 'Review your own scripts as an examiner would, a day after writing them rather than immediately. Read for the things marks are actually awarded for: is the assumption stated, is the governing equation identified, does the working follow, are the units consistent, is the answer clearly presented and concluded. Candidates who mark their own papers for correctness alone routinely miss that they are losing marks on presentation in every single answer.',
          },
          {
            type: 'note',
            title: 'Do the counting yourself',
            text: 'Published weightage charts for ESE circulate widely and are frequently undated, built from a different branch, or drawn from before a syllabus revision. Two afternoons spent tagging four or five years of papers in your own branch gives you a table you can trust — and the tagging is itself effective revision, because categorising a question requires recalling how it is solved.',
          },
        ],
      },
      'mock-tests': {
        description:
          'UPSC ESE mock tests — objective practice for prelims and full written practice as the equivalent for the conventional mains papers.',
        lead: [
          'Objective mocks prepare you for five hundred marks. The other six hundred need pen, paper and a clock.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Prelims responds to conventional mock practice — timed objective papers, negative marking applied, analysis by topic. For mains there is no such thing as a mock in the usual sense; the equivalent is writing a full three-hour conventional paper by hand and then assessing it honestly against what an examiner would reward.',
          },
          {
            type: 'list',
            title: 'What to work on where',
            items: [
              { text: 'Prelims Paper II', note: 'branch coverage and speed. Objective mocks, analysed by topic, with the deduction applied.' },
              { text: 'Prelims Paper I', note: 'the non-degree content — project management, ethics, standards, environment, materials. It needs separate study.' },
              { text: 'Mains', note: 'full conventional papers by hand, under time, at least weekly in the final months.' },
              { text: 'Personality test', note: 'technical grounding in your branch plus awareness of the sector, built over months.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'UPSC mock tests', to: '/mock-tests/upsc/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A written practice routine for the conventional papers',
            items: [
              { title: 'Start with single questions under time', text: 'Before attempting a full paper, write individual answers to a strict per-question budget. This is where handwriting speed and structure are built, and it costs half an hour rather than three.' },
              { title: 'Move to half papers', text: 'Ninety minutes, half a paper, complete answers. Long enough to expose pacing problems, short enough to repeat weekly without dominating your schedule.' },
              { title: 'Then full papers, weekly', text: 'Three hours, by hand, no interruptions, with the question-selection decision made in the first five minutes as it would be in the hall.' },
              { title: 'Review a day later', text: 'For structure and presentation as well as correctness. Same-day review reads your own intentions into the script; a day’s gap lets you see what is actually on the page.' },
              { title: 'Rewrite one answer from each paper', text: 'The weakest one, properly. Rewriting is where the correction actually lands — reading a model solution rarely changes what you produce next time.' },
            ],
          },
          {
            type: 'p',
            text: 'Keep the prelims paper on general studies and engineering aptitude in your practice rotation throughout rather than treating it as a late add-on. It carries two hundred marks that count towards the final total, it covers material your degree did not teach, and it is the component ESE candidates most reliably underestimate — partly because it is the only part of the examination that does not feel like engineering.',
          },
          {
            type: 'note',
            title: 'The personality test draws on your branch',
            text: 'Two hundred marks before a board that will ask about your own discipline as well as your general awareness and your reasons for wanting the service. A candidate who has spent a year rebuilding degree-level technical knowledge is well placed for that conversation, provided they can also explain what the department they are applying to actually does.',
          },
        ],
      },
      preparation: {
        description:
          'UPSC ESE preparation strategy — degree-level branch revision, conventional answer practice and the general studies paper.',
        lead: [
          'A year of degree-level technical revision, plus a writing skill most candidates have not used since their final examinations.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'ESE is a long preparation. The branch syllabus is drawn at degree level and spans most of a four-year programme, the general studies and aptitude paper covers material an engineering degree does not include, and the conventional format requires a writing skill that needs months of rebuilding. Candidates who plan for six months are usually planning for the wrong examination.',
          },
          {
            type: 'steps',
            title: 'A plan of roughly a year',
            items: [
              { text: 'Month one — build a topic frequency table from past papers in your branch.', note: 'It determines the order of everything that follows.' },
              { text: 'Months one to six — branch subjects at degree depth, in weighting order.', note: 'From your degree textbooks, with derivations understood rather than memorised.' },
              { text: 'From month two — conventional answer writing, weekly.', note: 'Full solutions by hand, with diagrams and stated assumptions. Start long before you feel ready.' },
              { text: 'Months three to six — the general studies and engineering aptitude paper.', note: 'Project management, ethics, standards, environment, materials, ICT. Two hundred prelims marks of content your degree did not cover.' },
              { text: 'Months six to nine — prelims-focused objective practice.', note: 'Branch coverage checked systematically, with the deduction applied.' },
              { text: 'After prelims — full conventional mains papers, weekly.', note: 'Three hours, by hand, complete papers rather than selected questions.' },
              { text: 'After mains — personality test preparation.', note: 'Your branch, your projects, the sector and current developments in it.' },
            ],
          },
          {
            type: 'list',
            title: 'What separates successful ESE candidates',
            items: [
              { text: 'Writing full solutions from early on', note: 'the mains format is the differentiator, and it cannot be acquired late.' },
              { text: 'Using degree textbooks rather than exam digests', note: 'the depth required is degree level, and digests compress out the derivations examiners want to see.' },
              { text: 'Taking the general studies paper seriously', note: 'two hundred prelims marks that engineering study does not cover.' },
              { text: 'Presentation discipline', note: 'stated assumptions, labelled diagrams, carried units and clear conclusions all earn marks.' },
              { text: 'Remembering that prelims marks count', note: 'unlike the Civil Services Examination, they form part of the final total.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'If you are preparing alongside GATE',
                'The overlap in the branch syllabus is substantial and worth exploiting, but the two examinations diverge at the format. GATE preparation builds objective speed; ESE mains needs written solutions. Treat conventional answer writing as the ESE-specific track that GATE study does not cover, and protect it.',
              ],
              [
                'If you are a working engineer',
                'Give the technical rebuilding your best hours rather than your leftover ones, and accept a longer timeline — twelve to eighteen months is realistic. The general studies paper and objective practice tolerate tired evenings; writing a three-hour conventional paper does not.',
              ],
              [
                'If you are a recent graduate',
                'Your advantage is that the material is still accessible; your risk is assuming that recency substitutes for the writing skill. Start conventional answer practice in month two, not month eight.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'One point that changes how the year is planned: because prelims marks count, the period before prelims is not a detour from mains preparation. Time spent getting the objective branch paper and the general studies paper solid is time spent on the final total. That resolves a tension candidates often feel between prelims-focused and mains-focused study — in this examination the two are not competing for the same marks.',
          },
          {
            type: 'note',
            title: 'The formula and derivation sheet, written by hand',
            text: 'One per subject, built from your own repeated errors rather than copied from a chapter, and containing derivations as well as results — because the conventional papers ask you to produce derivations, not merely to use their outcomes. Revised weekly, it becomes the only document you need in the final fortnight, and it is the single most useful artefact of an ESE preparation.',
          },
        ],
      },
      'study-material': {
        description:
          'UPSC ESE study material — guidance on degree textbooks for branch preparation, plus notes for the general studies paper.',
        lead: [
          'Your degree textbooks are the right source for the branch papers. These notes support the general studies and aptitude paper.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the branch syllabus, standard degree textbooks are better preparation than any competitive-exam digest. The conventional papers ask for derivations and reasoned solutions, and textbooks carry the reasoning that digests strip out. Keep them, and work problems from them rather than only reading.',
          },
          {
            type: 'links',
            title: 'Notes for the general studies and aptitude paper',
            items: [
              { label: 'Environment notes', to: '/study-material/environment/' },
              { label: 'Science and technology notes', to: '/study-material/science/' },
              { label: 'Mathematics notes', to: '/study-material/mathematics/' },
              { label: 'Reasoning notes', to: '/study-material/reasoning/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'How to study for a conventional paper',
            items: [
              'Work problems with pen and paper, writing the full solution rather than checking the answer.',
              'Maintain one formula and derivation sheet per subject, written by hand.',
              'Draw every diagram yourself; recognising a diagram is not the same as being able to produce one.',
              'Time your written practice from the beginning — three hours is less than it sounds.',
              'Revisit each major topic twice more before the examination; conventional recall decays quickly.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Branch textbooks — the primary source',
                'The standard degree texts for your discipline, the ones your course was actually taught from. They carry the derivations, the assumptions and the physical reasoning that conventional answers are marked on, and which digests compress out precisely because objective papers do not need them.',
              ],
              [
                'Your own solved problems — the second source',
                'A worked notebook, written in full solution form rather than as scratch working. It doubles as writing practice and as the material you revise from, and it is the only record of how you personally solve a problem type.',
              ],
              [
                'The general studies and aptitude material',
                'Project management, ethics, standards and quality, materials, energy and environment, information technology basics, and current affairs. Genuinely additional content that no engineering textbook covers, for two hundred marks that count.',
              ],
              [
                'Objective question banks — supporting only',
                'Useful for prelims coverage and speed, and actively misleading if they become the primary source. A candidate who has only ever selected between four options has not practised the skill six hundred marks of this examination measures.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Diagrams deserve a specific mention. In conventional papers a clear, labelled diagram often carries marks in its own right and almost always makes the accompanying explanation shorter and clearer. Practise drawing the standard ones for your branch by hand until they are quick and consistent — free-body diagrams, circuit schematics, cycle diagrams, section drawings — because a diagram you have to invent under time pressure will cost you minutes and come out badly.',
          },
          {
            type: 'note',
            title: 'Read for why, not just what',
            text: 'The distinguishing feature of ESE technical questions is that they often ask for reasoning rather than recall — why an assumption holds, what happens when a condition changes, how a design choice trades against another. Material that gives you results without reasons prepares you for the objective half of the examination and leaves you exposed in the half that carries more marks.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the UPSC ESE exam pattern?',
        a: 'Three stages totalling 1300 marks. The preliminary examination has two objective papers — General Studies and Engineering Aptitude at 200 marks over two hours, and an Engineering Discipline paper at 300 marks over three hours. The main examination has two conventional papers of 300 marks each in your branch, written by hand over three hours each. The personality test carries 200 marks. Unlike the Civil Services Examination, prelims marks do carry into the final total.',
      },
      {
        q: 'What does "conventional" mean in the ESE mains?',
        a: 'The mains papers are descriptive rather than objective: you write full engineering solutions by hand, including derivations, labelled diagrams, stated assumptions and complete numerical working. This is the format that distinguishes ESE from every other technical recruitment, and it requires a skill most candidates have not used since their degree examinations. Being able to solve a problem and being able to present the solution fully within time are different abilities, and only the second is what these papers measure.',
      },
      {
        q: 'Which branches can apply for UPSC ESE?',
        a: 'Civil, Mechanical, Electrical, and Electronics and Telecommunication Engineering. Candidates compete only within their own branch, and eligibility requires an engineering degree in that branch. The syllabus is drawn at degree level rather than diploma level, which makes ESE substantially more demanding than technical recruitments such as SSC JE or RRB JE even though the subjects sound similar.',
      },
      {
        q: 'How important is the General Studies and Engineering Aptitude paper?',
        a: 'It carries 200 of the 500 preliminary marks, and since prelims marks count towards the final total, those are real marks rather than a threshold. Much of its content — project management, standards and safety, ethics in the profession, environment and impact assessment, materials science and ICT — is not covered by an engineering degree at all, so it requires its own preparation rather than being absorbed alongside branch revision.',
      },
      {
        q: 'How long does ESE preparation take?',
        a: 'About a year for most candidates. The branch syllabus spans degree-level material across most of a four-year programme, the general studies paper covers content engineering study does not include, and the conventional writing skill needs months of rebuilding. Candidates planning for six months typically underestimate the writing component in particular, which is where the examination is most often decided.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Indian Forest Service
     ══════════════════════════════════════════════════════════════ */
  {
    slug: 'indian-forest-service',
    path: '/government-exams/upsc/indian-forest-service/',
    name: 'UPSC IFoS',
    fullName: 'Indian Forest Service Examination',
    authority: 'Union Public Service Commission (UPSC)',
    official: 'upsc.gov.in',
    seoTitle: 'UPSC IFoS 2026: Mains Papers, Optional Subjects & Strategy',
    metaDescription:
      'Indian Forest Service exam guide — shared CSE prelims, the six mains papers, two optional subjects, physical standards and preparation strategy.',
    lead: [
      'The Indian Forest Service is the third of the All India Services, responsible for the management of forests, wildlife and environmental resources. Its officers head forest divisions, run wildlife protection, oversee working plans and carry statutory responsibilities under environmental legislation.',
      'It shares its preliminary examination with the Civil Services Examination, which means candidates apply for both from a single screening paper. From the main examination onwards it diverges completely: two optional subjects rather than one, no essay paper, no general studies papers as CSE understands them, and a science-weighted subject list.',
    ],
    quickFacts: [
      ['Conducted by', 'Union Public Service Commission (UPSC)'],
      ['Service', 'Indian Forest Service — one of the three All India Services'],
      ['Level', 'A degree with at least one of a prescribed list of science or engineering subjects'],
      ['Prelims', 'Shared with the Civil Services Examination'],
      ['Mains', 'Six papers, including two optional subjects — 1400 marks'],
      ['Additional requirement', 'Physical standards and a walking test'],
    ],
    overview: [
      {
        type: 'p',
        text: 'Indian Forest Service officers manage the country’s forest and wildlife resources — preparing and implementing working plans, administering protected areas, enforcing forest and wildlife legislation, and balancing conservation against the demands of development and local livelihoods. It is a field service, and the working conditions are correspondingly demanding.',
      },
      {
        type: 'p',
        text: 'Eligibility is narrower than for the Civil Services Examination. Candidates must hold a bachelor’s degree with at least one of a prescribed list of subjects — animal husbandry and veterinary science, botany, chemistry, geology, mathematics, physics, statistics and zoology — or a degree in agriculture, forestry or engineering. A degree in the humanities alone does not qualify.',
      },
      {
        type: 'list',
        title: 'How IFoS differs from the Civil Services Examination',
        items: [
          { text: 'Shared prelims', note: 'the same screening paper, with candidates able to apply for both examinations.' },
          { text: 'Two optional subjects, not one', note: 'four papers of 200 marks each, drawn from a science and engineering weighted list.' },
          { text: 'No essay paper and no general studies papers', note: 'the mains structure is General English, General Knowledge and the two optionals.' },
          { text: 'Physical standards apply', note: 'including height and chest requirements and a walking test, which the Civil Services Examination does not have.' },
        ],
      },
      {
        type: 'note',
        title: 'The optional subject choice is heavily constrained',
        text: 'IFoS optionals are drawn from a science, agriculture and engineering list — subjects such as botany, zoology, forestry, agriculture, chemistry, physics, mathematics, statistics, geology and the engineering disciplines. Certain combinations are not permitted together. Both the list and the disallowed pairings are set out in the notification, and getting this wrong at application is a wasted cycle.',
      },
    ],
    stages: [
      {
        name: 'Preliminary Examination',
        mode: 'Two objective papers, shared with the Civil Services Examination',
        detail:
          'General Studies Paper I of 200 marks, which decides the cutoff, and CSAT Paper II of 200 marks, which is qualifying. The IFoS cutoff is set separately from the Civil Services cutoff. Prelims marks do not carry into the final merit.',
      },
      {
        name: 'Main Examination',
        mode: 'Six descriptive papers, 1400 marks',
        detail:
          'Paper I General English (300 marks), Paper II General Knowledge (300 marks), and Papers III to VI comprising two papers each in two optional subjects (200 marks per paper, 800 marks in total).',
      },
      {
        name: 'Personality Test',
        mode: 'Interview before a board',
        detail:
          '300 marks, assessing suitability for a field service with conservation and enforcement responsibilities. Added to the mains total of 1400 for a final total of 1700.',
      },
      {
        name: 'Physical standards and walking test',
        mode: 'Qualifying',
        detail:
          'Height and chest requirements, along with a walking test over a prescribed distance within a prescribed time, differing for male and female candidates. Medical standards for field service also apply.',
      },
    ],
    resources: {
      syllabus: {
        description:
          'UPSC IFoS syllabus — shared prelims content, the General English and General Knowledge mains papers, and the optional subject list.',
        lead: [
          'The prelims syllabus is the Civil Services syllabus. From mains onwards it is a different examination, built around two science optionals.',
        ],
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Preliminary Examination',
                'Identical to the Civil Services Examination — General Studies Paper I covering current events, history and the national movement, geography, polity and governance, economic and social development, environment and ecology, and general science; and CSAT Paper II covering comprehension, reasoning, decision making, mental ability and basic numeracy, which is qualifying.',
              ],
              [
                'Mains Paper I — General English',
                'An essay, precis writing, comprehension of given passages, and usage and vocabulary. Three hundred marks assessing command of written English rather than literary knowledge.',
              ],
              [
                'Mains Paper II — General Knowledge',
                'Indian polity, Indian and world geography, history of India, current national and international events, and general science with an emphasis on environment, ecology and conservation. Three hundred marks, and considerably narrower than the four general studies papers of the Civil Services Examination.',
              ],
              [
                'Optional subjects',
                'Two subjects chosen from a prescribed list — agriculture, agricultural engineering, animal husbandry and veterinary science, botany, chemistry, chemical engineering, civil engineering, forestry, geology, mathematics, mechanical engineering, physics, statistics and zoology. Each contributes two papers of 200 marks. Certain combinations are disallowed, and the notification sets out which.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Because eight hundred of the fourteen hundred mains marks come from the optional subjects, the choice of optionals is the most consequential decision in IFoS preparation. The sensible basis is your degree background — a candidate who studied botany and zoology is starting a long way ahead of one choosing them from scratch — tempered by the availability of material and the disallowed-combination rules.',
          },
          {
            type: 'p',
            text: 'The syllabus has an unusual shape that should be read carefully before any planning: the preliminary stage is borrowed wholesale from the Civil Services Examination, and everything after it is a different examination built around two science subjects. That means the first three months of an IFoS preparation look exactly like a Civil Services preparation and the remaining nine do not, and a candidate who does not notice the join will spend the second half of the year reading general studies material for papers that will never ask about it.',
          },
          {
            type: 'note',
            title: 'Check which optional pairings are permitted',
            text: 'The notification lists combinations of optional subjects that may not be taken together — typically those with substantial overlap, such as certain pairings among the agricultural, forestry and biological sciences. Choosing two subjects you are strong in, and then discovering the pairing is disallowed, forces a late substitution into a subject you have not prepared. Confirm the combination before you begin, not at the application stage.',
          },
        ],
      },
      'exam-pattern': {
        description:
          'UPSC IFoS exam pattern — shared prelims, the six mains papers and their marks, the interview and the physical standards.',
        lead: [
          'Fourteen hundred mains marks, of which eight hundred come from your two optional subjects. That ratio should shape the whole preparation.',
        ],
        blocks: [
          {
            type: 'table',
            caption:
              'Main examination structure. Confirm marks and the optional subject list against the current notification.',
            head: ['Paper', 'Content', 'Marks'],
            rows: [
              ['Paper I', 'General English', '300'],
              ['Paper II', 'General Knowledge', '300'],
              ['Papers III and IV', 'Optional Subject 1 — two papers', '400'],
              ['Papers V and VI', 'Optional Subject 2 — two papers', '400'],
              ['Total (mains)', '', '1400'],
              ['Personality Test', 'Interview', '300'],
            ],
          },
          {
            type: 'p',
            text: 'A candidate preparing for both the Civil Services Examination and IFoS shares only the preliminary stage. From mains onwards the preparations diverge sharply — CSE needs four general studies papers, an essay and one optional; IFoS needs a general English paper, a narrower general knowledge paper and two optionals. Attempting both seriously means accepting that the mains preparations are largely separate projects.',
          },
          {
            type: 'list',
            title: 'The physical requirements',
            items: [
              { text: 'Height and chest standards', note: 'prescribed minimums differing for male and female candidates, with relaxations for certain communities.' },
              { text: 'Walking test', note: 'a prescribed distance within a prescribed time, differing by gender. Qualifying in nature.' },
              { text: 'Medical standards for field service', note: 'reflecting the physical demands of forest and wildlife duty.' },
              { text: 'Timing', note: 'these apply after the written stages, so confirm the standards apply to you before investing a year.' },
            ],
          },
          {
            type: 'note',
            title: 'The IFoS prelims cutoff is separate',
            text: 'Although the preliminary paper is shared with the Civil Services Examination, the cutoff for IFoS is set separately, and candidates must have applied for IFoS at the application stage to be considered. A candidate who applied only for the Civil Services Examination cannot be brought into the IFoS process afterwards.',
          },
          {
            type: 'p',
            text: 'The ratio in the marks table is the whole strategy of this examination stated numerically: eight hundred of fourteen hundred mains marks come from two subjects you choose. No other component comes close, and no amount of excellence in General English or General Knowledge compensates for a weak optional. A study plan that gives the optionals less than half its hours is not matched to the paper it is preparing for.',
          },
          {
            type: 'defs',
            items: [
              [
                'Why the shared prelims is not a shared preparation',
                'The paper is the same and the cutoff is not. A candidate may clear the Civil Services cutoff and miss the IFoS one, or the reverse, and the two lists are drawn separately. More importantly, clearing prelims for IFoS requires having applied for IFoS in the first place — it is a choice made at the application stage that cannot be added afterwards.',
              ],
              [
                'What the descriptive format means here',
                'All six mains papers are written by hand, including both optional papers. For science subjects that means diagrams, labelled figures and structured explanation, and it means writing practice matters as much as it does in any other descriptive examination.',
              ],
              [
                'Where the physical requirements sit',
                'After the written stages, as qualifying tests. Height and chest standards and a timed walking test over a prescribed distance, differing by gender, along with medical standards reflecting field service. They do not add marks and they can end a candidature.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'The interview carries three hundred marks',
            text: 'A larger share than candidates expect, and drawn from a board interested in why you want field service in forestry and wildlife specifically. Familiarity with conservation policy, protected area management and current environmental debates is preparation for that conversation, and it overlaps usefully with the General Knowledge paper’s conservation emphasis.',
          },
        ],
      },
      'previous-year-papers': {
        description:
          'UPSC IFoS previous year papers — calibrating optional subject depth and the General Knowledge paper’s conservation emphasis.',
        lead: [
          'Past optional papers are the only reliable guide to the depth expected, which is closer to a good degree examination than to a competitive-exam summary.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'IFoS optional papers ask genuine subject questions — the kind a well-taught degree course would set — rather than the broad-brush questions of a general studies paper. Reading past papers in your chosen optionals is the fastest way to calibrate how deeply you need to know each topic, and it usually reveals that the required depth is greater than candidates assume.',
          },
          {
            type: 'steps',
            title: 'How to use them',
            items: [
              { text: 'Read past papers in your two optionals before finalising the choice.', note: 'Better to discover the depth expected before committing a year than after.' },
              { text: 'Build a topic frequency table for each optional.', note: 'Eight hundred marks; knowing where the emphasis falls is worth a great deal.' },
              { text: 'Note the environment and conservation emphasis in General Knowledge.', note: 'It is heavier here than in the Civil Services general studies papers, and it is a natural strength to build.' },
              { text: 'Practise the General English paper in full.', note: 'Essay, precis and comprehension in one three-hour sitting is a stamina task.' },
            ],
          },
          {
            type: 'links',
            title: 'Related material',
            items: [
              { label: 'Environment and ecology notes', to: '/study-material/environment/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'UPSC Civil Services guide', to: '/government-exams/upsc/upsc-civil-services/' },
              { label: 'All previous year papers', to: '/previous-year-papers/' },
            ],
          },
          {
            type: 'list',
            title: 'How to read past optional papers before choosing',
            items: [
              { text: 'Check the depth against your own degree', note: 'if the questions read like your final-year papers you have chosen well; if they read like a subject you touched in one semester, the year of catching up is the cost you are accepting.' },
              { text: 'Look at how much is descriptive explanation', note: 'these are written papers, and subjects that felt comfortable in a multiple-choice setting can be considerably harder when the answer has to be constructed and justified.' },
              { text: 'Note the diagram load', note: 'botany, zoology, forestry and agriculture papers often reward labelled figures heavily, which is a skill to practise rather than assume.' },
              { text: 'Compare the two subjects for overlap', note: 'some permitted pairings share substantial ground, which reduces total preparation without reducing marks — a legitimate and underused advantage.' },
            ],
          },
          {
            type: 'p',
            text: 'The General Knowledge paper repays past-paper reading for one specific reason: its emphasis is not the same as the Civil Services general studies emphasis. Environment, ecology, forestry, wildlife and conservation policy carry more weight here than a candidate coming from Civil Services preparation would expect, and the past papers make that shift visible in a way the syllabus wording does not.',
          },
          {
            type: 'p',
            text: 'For General English, work a full three-hour paper rather than practising the components separately. Essay, precis and comprehension in one sitting is a different demand from any of them alone, and it is the paper candidates most often assume will take care of itself. Three hundred marks is too large a component to leave to assumption, particularly for candidates from science backgrounds who have written little extended prose since school.',
          },
          {
            type: 'note',
            title: 'Frequency tables work for optionals too',
            text: 'Tag four or five years of questions in each of your optionals by topic and study in that order. Science syllabi are long and evenly written, giving no indication of weighting, and the papers show a distribution that is anything but even. Two afternoons of tagging can save you two months of reading in the wrong places.',
          },
        ],
      },
      'mock-tests': {
        description:
          'UPSC IFoS mock tests — shared prelims practice, and written answer practice for the mains optional and general papers.',
        lead: [
          'Prelims mocks are shared with the Civil Services Examination. For mains, written practice in your optionals is the only meaningful preparation.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'Because the preliminary paper is common, Civil Services prelims mocks serve IFoS candidates perfectly well — with one caveat: the IFoS cutoff is set separately, so the score you need is not necessarily the CSE score. For mains, there is no mock equivalent; the practice that counts is writing full answers in your optional subjects under time.',
          },
          {
            type: 'list',
            title: 'Where to put practice effort',
            items: [
              { text: 'Prelims', note: 'objective mocks with the deduction applied, plus CSAT practice, exactly as for the Civil Services Examination.' },
              { text: 'Optionals', note: 'written answers under time, from past papers, in both subjects. This is eight hundred of fourteen hundred marks.' },
              { text: 'General English', note: 'essay, precis and comprehension practised as a full three-hour paper.' },
              { text: 'General Knowledge', note: 'written practice with a deliberate environment and conservation emphasis.' },
            ],
          },
          {
            type: 'links',
            title: 'Start practising',
            items: [
              { label: 'UPSC mock tests', to: '/mock-tests/upsc/' },
              { label: 'All free mock tests', to: '/mock-tests/free/' },
            ],
          },
          {
            type: 'steps',
            title: 'A practice routine weighted to the marks',
            items: [
              { title: 'Prelims — shared objective practice', text: 'Civil Services prelims mocks with the deduction applied, plus CSAT. Keep this running through the first phase; it is the same paper and there is no IFoS-specific version to seek out.' },
              { title: 'Optionals — written answers from month two', text: 'Eight hundred of fourteen hundred marks. One full answer a day in one of the two subjects, alternating, from past papers wherever possible.' },
              { title: 'General English — a full paper monthly', text: 'Three hours, by hand, essay and precis and comprehension together. Rising to fortnightly in the final months.' },
              { title: 'General Knowledge — written practice with a conservation lens', text: 'Answering in writing rather than reviewing objectively, because the paper is descriptive and the skills are not interchangeable.' },
              { title: 'Physical — the walking test', text: 'Train to the prescribed distance and time from early on. It is qualifying, it is published, and it is entirely avoidable as a failure.' },
            ],
          },
          {
            type: 'p',
            text: 'Diagrams are worth building into optional practice explicitly rather than sketching loosely and intending to do better on the day. In the biological and agricultural sciences a well-labelled figure often answers a substantial part of a question more efficiently than prose can, and examiners award for it. Practise drawing the standard figures of your subjects by hand until they are quick, accurate and consistently labelled.',
          },
          {
            type: 'note',
            title: 'Get the optional answers read by a subject person',
            text: 'General answer-writing feedback helps with structure but cannot tell you whether your treatment of a technical question is complete or current. A teacher, a senior or anyone with genuine command of the subject reading a handful of your answers is worth more than a large volume of unreviewed writing, particularly for the paper that carries the most marks.',
          },
        ],
      },
      preparation: {
        description:
          'UPSC IFoS preparation — choosing two optionals, using a science degree background, and preparing for the physical standards.',
        lead: [
          'Choose the optionals first. Everything else in an IFoS plan follows from that decision, because they carry more than half the mains marks.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'The candidates who do well in IFoS are usually those whose degree background maps onto their optionals. Two subjects at genuine depth is a substantial undertaking, and starting one of them from scratch while also studying the other, the general papers and prelims is more than most candidates can manage in a cycle. Where your degree gives you a subject, take it.',
          },
          {
            type: 'steps',
            title: 'A plan of about a year',
            items: [
              { text: 'Month one — choose two optionals and confirm the combination is permitted.', note: 'Read past papers in each before committing. Eight hundred marks depend on this.' },
              { text: 'Month one — check the physical standards apply to you.', note: 'Height, chest and the walking test. Confirm before investing the year.' },
              { text: 'Months one to seven — the two optional subjects, in depth.', note: 'Degree-level study, with written answers practised from early on.' },
              { text: 'Throughout — General Knowledge with a conservation emphasis.', note: 'Polity, geography, history, current events, and environment and ecology weighted more heavily than a CSE plan would.' },
              { text: 'Throughout — General English practice.', note: 'Essay, precis and comprehension. Three hundred marks that respond well to steady practice.' },
              { text: 'Three months before prelims — objective mode.', note: 'Shared with the Civil Services Examination, including CSAT.' },
              { text: 'After prelims — full mains mode.', note: 'Optional revision and written practice at high intensity.' },
              { text: 'Throughout — physical fitness for the walking test and field service.', note: 'Modest but not trivial, and the field role expects genuine fitness.' },
            ],
          },
          {
            type: 'list',
            title: 'Where IFoS candidates go wrong',
            items: [
              { text: 'Choosing optionals without reading past papers', note: 'the depth expected is closer to a degree examination than to a competitive summary.' },
              { text: 'Choosing a disallowed combination', note: 'the notification lists which pairings are not permitted.' },
              { text: 'Preparing for CSE mains and assuming it covers IFoS', note: 'from mains onwards these are different examinations.' },
              { text: 'Not applying for IFoS at the application stage', note: 'a candidate who applied only for the Civil Services Examination cannot be brought into the IFoS process later.' },
              { text: 'Overlooking the physical standards', note: 'height, chest and a walking test that the Civil Services Examination does not have.' },
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'If your degree maps onto both optionals',
                'The strongest position available. Your work is depth and writing practice rather than acquisition, and a year is a realistic and comfortable timeline. Use the surplus on General English, which science graduates most often under-prepare.',
              ],
              [
                'If your degree maps onto one optional',
                'Choose the second subject for overlap with the first rather than for reputation, and start it first — the unfamiliar subject needs the long runway, and the familiar one can be brought up later with less risk.',
              ],
              [
                'If you are preparing for the Civil Services Examination too',
                'The prelims is genuinely shared and the mains genuinely is not. Decide honestly which examination is primary, because the mains preparations do not overlap and a year split evenly between them tends to produce two incomplete preparations rather than one strong one.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'The physical dimension of this service is not a formality attached to the end of the process — it reflects what the work is. Forest officers walk difficult terrain, and the standards exist for that reason. Reading the height, chest, walking test and medical requirements in your first week is a practical filter that lets you commit a year with confidence, or redirect it, rather than discovering the answer after the written examination is behind you.',
          },
          {
            type: 'note',
            title: 'Apply for IFoS at the application stage',
            text: 'It is a choice made when you fill the form, and it cannot be added later on the strength of a good prelims performance. Candidates who intended to keep the option open and did not tick it have found themselves ineligible for a mains they were well prepared for. If IFoS is a genuine possibility, apply for it.',
          },
        ],
      },
      'study-material': {
        description:
          'UPSC IFoS study material — environment, biology, geography and general knowledge notes, plus guidance on optional subject sources.',
        lead: [
          'The general papers are served by these notes. The optionals need degree-level textbooks in the subjects you have chosen.',
        ],
        blocks: [
          {
            type: 'p',
            text: 'For the optional subjects, use standard degree textbooks rather than competitive-exam material — the depth expected is degree level and the questions are framed accordingly. The notes below serve the General Knowledge paper, where the environment and ecology emphasis is heavier than in the Civil Services general studies papers and worth building deliberately.',
          },
          {
            type: 'links',
            title: 'Notes for the general papers',
            items: [
              { label: 'Environment and ecology notes', to: '/study-material/environment/' },
              { label: 'Biology notes', to: '/study-material/biology/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Modern Indian history', to: '/study-material/history/' },
              { label: 'English notes', to: '/study-material/english/' },
              { label: 'Current affairs', to: '/current-affairs/' },
            ],
          },
          {
            type: 'list',
            title: 'How to work the optionals',
            items: [
              'Use the degree textbook you know best as your primary source for each optional.',
              'Build a topic frequency table from past papers and study in that order.',
              'Write full answers from the first month; the papers are descriptive throughout.',
              'Draw diagrams by hand — in botany, zoology and forestry especially, they earn marks.',
              'Revise each optional twice more before the examination.',
            ],
          },
          {
            type: 'defs',
            items: [
              [
                'Optional subjects — degree textbooks',
                'The standard texts for the subjects you have chosen, not competitive-exam summaries. The depth expected is closer to a good degree examination than to a general studies paper, and summaries are written for a different level entirely.',
              ],
              [
                'General Knowledge — with a conservation weighting',
                'Standard polity, history, geography and current affairs material, supplemented deliberately with environment, ecology, forestry and wildlife policy. The last of these is where the IFoS paper diverges from its Civil Services counterpart.',
              ],
              [
                'General English — practice material rather than a book',
                'Past papers, passages to precis, and essay topics. This paper is built by writing, and three hundred marks is enough to justify a weekly slot from the start.',
              ],
              [
                'Prelims — the Civil Services shelf',
                'Identical requirements, including CSAT. Nothing IFoS-specific is needed at this stage, which is worth knowing because it prevents candidates from duplicating material they already have.',
              ],
            ],
          },
          {
            type: 'p',
            text: 'Keeping current with conservation policy is unusually well rewarded across this examination. Protected area management, wildlife legislation, forest rights, human-wildlife conflict, climate commitments and afforestation programmes feed the General Knowledge paper, several optional subjects at their applied edges, and the interview. One good source followed regularly does more for an IFoS candidate than the same time spent on general current affairs breadth.',
          },
          {
            type: 'note',
            title: 'Write from the first month in both optionals',
            text: 'The most common regret among IFoS candidates is having read two science subjects thoroughly and written in neither until late. These are descriptive papers: the ability to construct a complete, well-organised, properly illustrated answer under time is a separate skill from knowing the subject, and it takes months rather than weeks to build.',
          },
        ],
      },
    },
    faqs: [
      {
        q: 'What is the UPSC IFoS exam pattern?',
        a: 'The preliminary examination is shared with the Civil Services Examination — General Studies Paper I of 200 marks and the qualifying CSAT Paper II — though the IFoS cutoff is set separately. The main examination has six papers totalling 1400 marks: General English (300), General Knowledge (300), and two papers each in two optional subjects (200 marks per paper, 800 in total). A personality test of 300 marks follows, for a final total of 1700. Physical standards and a walking test also apply.',
      },
      {
        q: 'How is IFoS different from the Civil Services Examination?',
        a: 'They share only the preliminary paper. From mains onwards IFoS has no essay paper and none of the four general studies papers; instead it has a General English paper, a narrower General Knowledge paper and two optional subjects rather than one. The optionals are drawn from a science, agriculture and engineering list rather than the broad CSE list. IFoS also applies physical standards and a walking test, which the Civil Services Examination does not.',
      },
      {
        q: 'Who is eligible for the Indian Forest Service?',
        a: 'Candidates need a bachelor’s degree with at least one of a prescribed list of subjects — animal husbandry and veterinary science, botany, chemistry, geology, mathematics, physics, statistics or zoology — or a degree in agriculture, forestry or engineering. A degree in the humanities alone does not qualify, which makes IFoS eligibility considerably narrower than that of the Civil Services Examination.',
      },
      {
        q: 'How should I choose IFoS optional subjects?',
        a: 'Primarily on your degree background, because the two optionals carry 800 of the 1400 mains marks and the depth expected is closer to a degree examination than to a competitive summary. Read past papers in each candidate subject before committing — that reveals the required depth better than any syllabus. Note also that certain combinations are not permitted together; the notification sets out which, and choosing a disallowed pairing at application costs a full cycle.',
      },
      {
        q: 'Can I prepare for UPSC CSE and IFoS together?',
        a: 'Up to a point. The preliminary examination is shared, so that stage is genuinely common preparation, and you can apply for both from one application. From the main examination onwards they diverge substantially: CSE requires four general studies papers, an essay and one optional, while IFoS requires General English, General Knowledge and two optionals. Treating both mains preparations seriously means accepting they are largely separate projects rather than one plan with an extension.',
      },
    ],
  },
]

export default upsc
