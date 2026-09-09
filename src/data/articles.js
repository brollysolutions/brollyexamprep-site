/**
 * The written bodies for the blog articles.
 *
 * Before this existed, /blog/:slug/ rendered a paragraph saying "This article
 * is a placeholder. Wire the route to your CMS" — on three indexed URLs that
 * were linked from the homepage.
 *
 * The metadata for each article (title, category, excerpt, date) lives in
 * ARTICLES in src/data/site.js, which the index page and the route table read.
 * This file supplies the body, keyed by the same slug, so that adding an
 * article means writing it here and listing it there.
 *
 * Bodies use the block vocabulary from src/components/Blocks.jsx.
 */

const ARTICLE_BODIES = {
  /* ══════════════════════════════════════════════════════════════ */
  'how-to-start-competitive-exam-preparation': {
    lead: [
      'Almost every guide to starting competitive exam preparation begins with a timetable. That is the wrong first step, and it is why so many carefully built plans are abandoned by the second month.',
      'The first step is a measurement. You cannot allocate study time sensibly until you know which sections are already competitive and which are not — and the only way to know that is to sit a full paper before you have studied anything.',
    ],
    sections: [
      {
        id: 'measure',
        eyebrow: 'Step one',
        heading: 'Take a mock before you study anything',
        blocks: [
          {
            type: 'p',
            text: 'This is uncomfortable advice and it is the most useful hour a new aspirant will spend. Sit a full-length mock test for your target exam, under real timing, with the correct negative marking, before opening a single book. The score does not matter. What matters is the section-wise breakdown, because it turns a vague sense of "I need to prepare" into a specific list of what to prepare.',
          },
          {
            type: 'p',
            text: 'Most candidates discover something they did not expect. A graduate who assumed their English was fine finds it is their weakest section. Someone dreading quantitative aptitude finds their arithmetic is intact and their reasoning is not. Without that information, a study plan is guesswork dressed up as a schedule.',
          },
          {
            type: 'note',
            title: 'Why this so rarely happens',
            text: 'Because sitting an exam you know you will do badly at feels like a waste of time, and because studying first feels more productive. It is a natural instinct and it costs candidates months of misdirected effort every year.',
          },
        ],
      },
      {
        id: 'choose',
        eyebrow: 'Step two',
        heading: 'Choose one exam, and at most two others that overlap with it',
        blocks: [
          {
            type: 'p',
            text: 'The single most common way to lose a first year is to prepare for everything. Applications are cheap and hope is free, so a new aspirant signs up for SSC, banking, railways and a state examination, and prepares properly for none of them.',
          },
          {
            type: 'p',
            text: 'The sensible approach is one primary exam and at most two secondary ones chosen so that their syllabi overlap heavily. SSC CGL alongside banking works; SSC CGL alongside a technical engineering recruitment does not. The shared core — reasoning, quantitative aptitude, English, general awareness — carries you across several exams, and each exam’s specifics are then a matter of weeks rather than months.',
          },
          {
            type: 'list',
            title: 'Questions that narrow the choice',
            items: [
              { text: 'What does your qualification open?', note: 'This eliminates most of the field immediately.' },
              { text: 'Are you willing to meet physical and medical standards?', note: 'Uniformed recruitment applies them, and they eliminate more candidates than the written papers do.' },
              { text: 'Do you want to work in your own state or anywhere?', note: 'State recruitment usually means staying; central recruitment usually does not.' },
              { text: 'Can you write at length under time?', note: 'UPSC, judiciary and RBI Grade B require it. Most other examinations never test it.' },
            ],
          },
        ],
      },
      {
        id: 'sequence',
        eyebrow: 'Step three',
        heading: 'Start the slow things first, not the urgent things',
        blocks: [
          {
            type: 'p',
            text: 'Preparation components differ enormously in how fast they build. Some — a reasoning technique, a formula, an exam’s attempt strategy — can be acquired in days. Others accumulate over months and cannot be compressed at all. Almost every failed plan gets this ordering backwards, spending the early months on what feels productive and leaving the slow things until there is no time for them.',
          },
          {
            type: 'table',
            caption: 'What builds quickly and what does not.',
            head: ['Component', 'How it builds', 'When to start'],
            rows: [
              ['Vocabulary and grammar', 'Slowly, through daily contact over months', 'Day one'],
              ['General awareness', 'Cumulatively, and impossible to cram', 'Day one'],
              ['Physical fitness', 'Gradually, and injuries follow rushing', 'Day one, if your exam has physical stages'],
              ['Calculation speed', 'Steadily, through short daily drilling', 'Day one'],
              ['Subject concepts', 'In weeks per topic, with focused study', 'Months one to four'],
              ['Attempt strategy and pacing', 'In weeks, through timed practice', 'The final two months'],
            ],
          },
          {
            type: 'p',
            text: 'Notice that four of the six start on day one, and that none of them feels like real studying. Twenty minutes of general awareness and fifteen of calculation drilling is not a satisfying study session. It is, however, the part of the plan that most reliably decides the outcome, because it is the part that cannot be recovered later.',
          },
        ],
      },
      {
        id: 'weakest',
        eyebrow: 'Step four',
        heading: 'Study the weakest section first',
        blocks: [
          {
            type: 'p',
            text: 'The natural instinct is to study what you enjoy, which is usually what you are already good at. It feels productive because progress is easy and the practice scores are pleasant. It is also close to worthless, because the marks available in a section you already handle well are limited, while the marks available in your weakest section are substantial.',
          },
          {
            type: 'p',
            text: 'This matters even more where an exam applies sectional cutoffs, as CAT and most banking recruitments do. There, a weak section does not merely reduce your total — it can disqualify you outright regardless of how strong the rest of your paper was.',
          },
        ],
      },
      {
        id: 'retest',
        eyebrow: 'Step five',
        heading: 'Re-test every few weeks, and read the analysis properly',
        blocks: [
          {
            type: 'p',
            text: 'A mock every two or three weeks is enough to tell you whether the gap you identified in week one is actually closing. What matters is not the score but the classification of your errors, because different errors need completely different fixes.',
          },
          {
            type: 'list',
            title: 'Five causes, five different remedies',
            items: [
              { text: 'Did not know the concept', note: 'study that topic.' },
              { text: 'Knew it but misread the question', note: 'slow down slightly; this is a reading discipline problem, not a knowledge one.' },
              { text: 'Knew it but chose the wrong method', note: 'practise recognising the question type through mixed sets.' },
              { text: 'Knew it but made a calculation slip', note: 'drill arithmetic fluency; more topic study will not help.' },
              { text: 'Ran out of time', note: 'a pacing and selection problem, fixed by sectional practice rather than revision.' },
            ],
          },
          {
            type: 'p',
            text: 'Candidates who lump all five together as "I need to revise more" plateau despite taking dozens of mocks. Those who separate them improve steadily, because they are treating the actual problem.',
          },
        ],
      },
      {
        id: 'summary',
        eyebrow: 'In short',
        heading: 'The whole plan in five lines',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Take a full mock before studying anything.', note: 'To find out what actually needs work.' },
              { text: 'Pick one exam and at most two that overlap with it.', note: 'Rather than applying for everything.' },
              { text: 'Start the slow-building things on day one.', note: 'Awareness, vocabulary, calculation speed, fitness.' },
              { text: 'Study the weakest section first.', note: 'Not the one you enjoy.' },
              { text: 'Re-test every few weeks and classify your errors by cause.', note: 'Because five causes have five different fixes.' },
            ],
          },
          {
            type: 'links',
            title: 'Where to go next',
            items: [
              { label: 'Take a free mock test', to: '/mock-tests/free/' },
              { label: 'Browse government exams', to: '/government-exams/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'How to use previous year papers', to: '/blog/how-to-use-previous-year-papers/' },
            ],
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════ */
  'ssc-cgl-syllabus-exam-pattern': {
    lead: [
      'SSC CGL is described as one examination and is really two. Tier 1 is a sixty-minute screening test that everybody sits; Tier 2 is where the merit list is actually built. Understanding that split is the most useful thing a candidate can do early, because it changes what you study and when.',
      'This article walks through the pattern and syllabus of both tiers, and then through the consequence that follows from the split — which is that preparing for Tier 1 alone is the most common way candidates lose a cycle.',
    ],
    sections: [
      {
        id: 'tier1',
        eyebrow: 'Tier 1',
        heading: 'The screening paper',
        blocks: [
          {
            type: 'table',
            caption:
              'Tier 1 structure. Confirm marks, timing and the deduction rate against the current official notification.',
            head: ['Section', 'Questions', 'Marks', 'Character'],
            rows: [
              ['General Intelligence and Reasoning', '25', '50', 'Verbal and non-verbal; the fastest section to score in'],
              ['General Awareness', '25', '50', 'Pure recall — you either know it or you move on'],
              ['Quantitative Aptitude', '25', '50', 'Arithmetic-dominant at this stage'],
              ['English Comprehension', '25', '50', 'Grammar and vocabulary rather than long passages'],
              ['Total', '100', '200', '60 minutes, no sectional timing'],
            ],
          },
          {
            type: 'p',
            text: 'Sixty minutes for a hundred questions is roughly thirty-six seconds each, and that number is the real design constraint. There is no sectional timing, which means you allocate the hour yourself — and most successful candidates bank reasoning and general awareness quickly, then spend what remains on quantitative aptitude.',
          },
          {
            type: 'note',
            title: 'Tier 1 marks do not carry forward',
            text: 'A very high Tier 1 score buys you nothing beyond a seat in Tier 2. This is the single most important structural fact about SSC CGL, and it is the one candidates most often act as though they do not know.',
          },
        ],
      },
      {
        id: 'tier2',
        eyebrow: 'Tier 2',
        heading: 'The paper that builds the merit list',
        blocks: [
          {
            type: 'p',
            text: 'Tier 2 runs as Paper 1 for every candidate, plus Paper 2 or Paper 3 for two specialist post groups. Paper 1 is delivered in modules across sessions: a mathematics and reasoning session, then a session covering English and general awareness and a computer knowledge module, followed by a data entry speed test.',
          },
          {
            type: 'list',
            title: 'What changes between the tiers',
            items: [
              { text: 'Marks that count', note: 'Tier 1 decides who advances; only Tier 2 builds the final merit list.' },
              { text: 'Depth of mathematics', note: 'Tier 1 leans arithmetic; Tier 2 brings algebra, geometry, trigonometry and mensuration properly into play.' },
              { text: 'New subjects', note: 'computer knowledge appears in Tier 2 and not in Tier 1 at all.' },
              { text: 'Sectional timing', note: 'Tier 1 is one open hour; Tier 2 modules are separately timed, so you cannot borrow minutes.' },
              { text: 'Additional papers', note: 'Paper 2 in statistics for Junior Statistical Officer applicants, Paper 3 in finance and economics for Assistant Audit Officer applicants.' },
            ],
          },
        ],
      },
      {
        id: 'syllabus',
        eyebrow: 'Syllabus',
        heading: 'What each subject actually covers',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'General Intelligence and Reasoning',
                'Analogies, classification, series in numbers letters and figures, coding-decoding, blood relations, direction sense, syllogism, seating arrangement, matrix and word-formation problems, Venn diagrams, mirror and water images, paper folding and cutting, and embedded figures. Non-verbal reasoning carries real weight, which surprises candidates prepared only for banking exams.',
              ],
              [
                'Quantitative Aptitude',
                'Arithmetic through number system, percentage, ratio and proportion, average, profit and loss, discount, simple and compound interest, time and work, time speed and distance, mixture and alligation and partnership; and advanced mathematics through algebraic identities, linear equations, triangles and their centres, circles and tangents, quadrilaterals, regular polygons, mensuration of solids, trigonometric ratios and identities, heights and distances, and data interpretation.',
              ],
              [
                'English Comprehension',
                'Reading comprehension, cloze test, spotting errors, sentence improvement, fill in the blanks, synonyms and antonyms, one-word substitution, idioms and phrases, spelling correction, active and passive voice, direct and indirect speech, and para jumbles. Tier 2 adds substantially more vocabulary and a longer comprehension load.',
              ],
              [
                'General Awareness',
                'Indian history with emphasis on the freedom movement, geography of India and the world, Indian polity and the Constitution, economics, general science across physics chemistry and biology, static general knowledge, and current events. Recall rather than analysis, so breadth beats depth.',
              ],
              [
                'Computer Knowledge (Tier 2 only)',
                'Computer organisation, input and output devices, memory, software basics, operating systems, MS Office fundamentals, internet and email, networking basics and cyber security awareness. A small module and one of the highest scoring-per-hour areas in the entire exam.',
              ],
            ],
          },
        ],
      },
      {
        id: 'consequence',
        eyebrow: 'The consequence',
        heading: 'Why preparing for Tier 1 alone loses a cycle',
        blocks: [
          {
            type: 'p',
            text: 'Follow the logic through. Tier 1 marks are discarded. Tier 2 mathematics is substantially harder than Tier 1 mathematics. The gap between the Tier 1 result and the Tier 2 examination is a matter of weeks. Therefore the harder mathematics — the algebra, geometry, trigonometry and mensuration that decide your rank — has to be built before Tier 1, not after it.',
          },
          {
            type: 'p',
            text: 'Every cycle produces candidates who clear Tier 1 comfortably, discover that Tier 2 is a different examination, and have six weeks to prepare for it. They are not less capable than the candidates who are selected; they sequenced their preparation wrongly, on the reasonable-sounding assumption that you prepare for the first stage first.',
          },
          {
            type: 'steps',
            title: 'A sequence that reflects the structure',
            items: [
              { text: 'Months one to three — build the mathematics base, including the Tier 2 topics.', note: 'This is the longest pole. Start it first.' },
              { text: 'Alongside — thirty minutes of English every day.', note: 'Vocabulary and grammar respond to daily contact and almost nothing else.' },
              { text: 'From month two — general awareness in small daily doses.', note: 'One static source, one current affairs digest, revisited rather than accumulated.' },
              { text: 'Month four — reasoning to speed.', note: 'Where a prepared candidate gains the most minutes.' },
              { text: 'Do not skip computer knowledge.', note: 'Small, easy, fully learnable, and Tier 2 marks.' },
              { text: 'Final six weeks — mocks and correction, in both tier formats.', note: 'With more time spent on analysis than on the attempt.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'SSC CGL exam guide', to: '/government-exams/ssc/ssc-cgl/' },
              { label: 'SSC CGL free mock test', to: '/mock-tests/ssc-cgl/' },
              { label: 'Quantitative aptitude study material', to: '/study-material/quantitative-aptitude/' },
              { label: 'All SSC exams', to: '/government-exams/ssc/' },
            ],
          },
        ],
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════ */
  'how-to-use-previous-year-papers': {
    lead: [
      'Most aspirants solve previous year papers the way they solve mock tests: timed, scored, filed away, on to the next one. That is a reasonable-looking use of them and it wastes the one thing a past paper offers that a mock cannot — evidence of what the examiner actually asks.',
      'A syllabus lists every topic and gives no indication of weighting. Past papers supply that weighting immediately, and the distribution is almost always uneven enough to redirect months of study.',
    ],
    sections: [
      {
        id: 'problem',
        eyebrow: 'The problem',
        heading: 'A syllabus tells you scope, not emphasis',
        blocks: [
          {
            type: 'p',
            text: 'Open the quantitative aptitude syllabus for any major examination and you will find thirty or forty topics listed with equal visual weight. Nothing in the document tells you that percentage appears in every paper and that a particular geometry configuration has appeared once in five years. Both occupy one line.',
          },
          {
            type: 'p',
            text: 'That equal weighting is what makes syllabus-driven preparation inefficient. A candidate working through the list in order spends the same effort on the topic carrying eight marks a year as on the one carrying eight marks a decade. Past papers fix this in an evening.',
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'The method',
        heading: 'Building a weighting table',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Solve one paper untimed first.', note: 'The point of the first pass is comprehension, not speed. Work every question to a full solution, including the ones you would have skipped in an exam.' },
              { text: 'Tag every question by specific topic, not by section.', note: 'Not "quantitative aptitude" but "circles — tangent length"; not "reasoning" but "seating arrangement — circular, mixed facing". The specificity is the whole point.' },
              { text: 'Repeat across four or five years.', note: 'One year is a sample; four is a distribution.' },
              { text: 'Count the tags and sort them.', note: 'A short list of topics will carry a disproportionate share of the marks. A long tail will appear once in five years.' },
              { text: 'Study the short list to fluency before touching the tail.', note: 'This is where most of the available marks actually live.' },
              { text: 'Only then start solving papers under exam timing.', note: 'Now you are measuring speed on material you understand, which is what a timed attempt is good for.' },
            ],
          },
          {
            type: 'p',
            text: 'The exercise takes two evenings for most examinations. It is the highest-leverage two evenings available in a preparation, because everything you do for the next four months is directed by its output.',
          },
        ],
      },
      {
        id: 'subject',
        eyebrow: 'By subject',
        heading: 'What to extract from each section',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Quantitative aptitude',
                'Tag by the shape of the problem rather than the topic name. "Two workers, different rates, working together" is a shape; recognising it on sight is faster than re-deriving the method. Across several years the number of distinct shapes is smaller than candidates expect.',
              ],
              [
                'Reasoning',
                'Catalogue puzzle families — linear rows facing two directions, circular arrangements, floor-and-flat combinations, month-and-date scheduling. Recognising which family a puzzle belongs to within ten seconds is the single largest speed gain available in this section.',
              ],
              [
                'English',
                'Extract every vocabulary item — synonyms, antonyms, one-word substitutions, idioms — into a single list. Five years of papers produces a revision list that is directly relevant rather than generically long, and it beats any general vocabulary book.',
              ],
              [
                'General awareness',
                'Group by theme rather than by year. Awards, dances, national parks, constitutional articles, first-in-India facts. Themes repeat far more reliably than individual facts do, and a themed sheet is revisable where a chronological list is not.',
              ],
              [
                'Technical papers',
                'Tag to diploma or degree topics and count. In every engineering discipline a handful of topics recur annually and a long tail appears rarely — and the standard textbooks, not exam digests, are what will teach the recurring ones properly.',
              ],
            ],
          },
        ],
      },
      {
        id: 'cautions',
        eyebrow: 'Three cautions',
        heading: 'What past papers cannot do',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'A paper you have read is no longer a measurement', note: 'familiarity inflates the score. Keep two or three papers untouched for the final month so that at least a couple of your measurements are honest, and use fresh mocks for anything you intend to treat as a genuine assessment.' },
              { text: 'Current affairs do not transfer', note: 'those questions are tied to the months preceding each exam. Use past papers to learn which themes are asked, then follow current sources for the content itself.' },
              { text: 'Patterns change', note: 'when an examination is restructured, older papers describe a test that no longer exists. The content and topic weighting usually survive a restructuring; the marks, timing and stage design do not. Read the current notification alongside.' },
            ],
          },
        ],
      },
      {
        id: 'close',
        eyebrow: 'In short',
        heading: 'Read them, then solve them',
        blocks: [
          {
            type: 'p',
            text: 'The instinct to treat a past paper as a test is natural — it looks like a test, after all. But its more valuable use comes earlier in a preparation, as the document that tells you where to spend the next four months. Read them for trends first. Solve them under timing later, when the timing is measuring something you have actually built.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Previous year papers by exam', to: '/previous-year-papers/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
              { label: 'Topic-wise practice', to: '/practice/topic-wise-questions/' },
              { label: 'How to start competitive exam preparation', to: '/blog/how-to-start-competitive-exam-preparation/' },
            ],
          },
        ],
      },
    ],
  },
}

/** The written body for a blog slug, or undefined if none exists yet. */
export function getArticleBody(slug) {
  return ARTICLE_BODIES[slug]
}

export default ARTICLE_BODIES
