/**
 * Reading Comprehension — /study-material/english/reading-comprehension/
 *
 * The one English topic where technique matters more than knowledge, so the
 * page is built around two things candidates get wrong: reading the passage
 * the wrong number of times, and answering inference questions from general
 * knowledge instead of from the text. Every example and practice item carries
 * its own short passage so the method can be applied immediately.
 */
export default {
  subject: 'english',
  subjectName: 'English',
  slug: 'reading-comprehension',
  title: 'Reading Comprehension',
  seoTitle: 'Reading Comprehension for Bank & SSC Exams | Method, Tricks & Practice',
  metaDescription:
    'Complete Reading Comprehension study material for banking, SSC and state exams — the six question types, how to read the passage, main idea.',
  readMinutes: 20,
  lead: [
    'Reading Comprehension carries more marks than any other English topic in a banking paper, and it is the topic where candidates most often lose marks to something other than English. The passage is usually not hard. What defeats people is reading it three times, answering inference questions from what they already believe, and choosing an option that is true in the world but absent from the text.',
    'This page is about those three failures. It sets out the six question types and what each one is really asking, gives a reading order that survives a sectional timer, and shows how the wrong options are manufactured — because once you can see the construction, half the elimination happens on sight.',
  ],

  weightage: [
    { exam: 'Banking Prelims (IBPS / SBI)', count: '7–10 questions', note: 'One passage, often with two vocabulary questions attached.' },
    { exam: 'Banking & Insurance Mains', count: '10–15 questions', note: 'Two passages, longer and denser, sometimes with a comparison question.' },
    { exam: 'SSC CGL Tier 1', count: '3–5 questions', note: 'One short passage of four or five questions, mostly factual.' },
    { exam: 'SSC CGL Tier 2', count: '5–10 questions', note: 'Longer passages with genuine inference questions.' },
    { exam: 'State PSC & Police exams', count: '5–8 questions', note: 'One or two short passages, usually direct.' },
  ],

  contents: [
    { icon: 'layers', title: 'The six question types', sub: 'What each one is really asking', href: '#types' },
    { icon: 'clock', title: 'How to read the passage', sub: 'The order that survives a timer', href: '#method' },
    { icon: 'target', title: 'Main idea and title', sub: 'Scope is the whole test', href: '#main-idea' },
    { icon: 'search', title: 'Detail and NOT questions', sub: 'Locating rather than remembering', href: '#detail' },
    { icon: 'chart', title: 'Inference', sub: 'The discipline of staying inside the text', href: '#inference' },
    { icon: 'book', title: 'Vocabulary in context', sub: 'When the dictionary meaning is wrong', href: '#vocab-context' },
    { icon: 'user', title: 'Tone, attitude and purpose', sub: 'Reading the writer, not the subject', href: '#tone' },
    { icon: 'bell', title: 'How wrong options are built', sub: 'Four patterns worth recognising', href: '#elimination' },
    { icon: 'play', title: 'Passage selection and timing', sub: 'Which one to attempt, and for how long', href: '#timing' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten passages worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'types',
      heading: 'The six question types',
      eyebrow: 'Name it before you answer it',
      intro:
        'Every comprehension question in every paper belongs to one of six families, and each family has a different rule about how far you are allowed to travel from the text. Naming the type first is what stops you applying the wrong rule.',
      blocks: [
        {
          type: 'table',
          caption: 'The six types and the rule each one follows',
          head: ['Type', 'What it asks', 'How far you may go from the text'],
          rows: [
            ['Main idea / title', 'What the passage as a whole is about', 'Must cover the whole passage — no further, no narrower'],
            ['Detail / fact', 'Something stated in the passage', 'Not at all — it is written down somewhere'],
            ['NOT / EXCEPT', 'Which option is absent or contradicted', 'Not at all — but you must check all four'],
            ['Inference', 'What must be true given what is stated', 'One short step, and only one'],
            ['Vocabulary in context', 'What a word means here', 'The passage overrides the dictionary'],
            ['Tone / attitude / purpose', 'What the writer thinks or is doing', 'Read the adjectives and the verbs, not the subject'],
          ],
        },
        {
          type: 'note',
          title: 'The families that get confused',
          text:
            'Detail and inference are the pair most often mixed up, and mixing them costs marks in both directions. A detail question has its answer written in the passage, so if you cannot point at the line, you have the wrong option. An inference question has its answer nowhere in the passage, so if you can point at the line, you are probably looking at a restatement trap rather than the inference.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'How to read the passage',
      eyebrow: 'The part that decides your time',
      intro:
        'There is a long-running argument about whether to read the passage first or the questions first. Both camps are half right, and the resolution matters more for your score than any other single habit.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Do not read the questions first',
              'It sounds efficient and is not. You end up holding five half-remembered questions while reading, which slows the reading and produces a shallow understanding — and then you re-read anyway. The exception is a short SSC passage of four questions, where scanning them first genuinely helps.',
            ],
            [
              'Do not read for detail either',
              'Reading a banking passage slowly enough to remember its facts takes four minutes you do not have. The facts are still on the page; you can go back for them.',
            ],
            [
              'Read once, at pace, for structure',
              'What is the passage arguing, and how does it move? One line per paragraph is enough: paragraph one poses a problem, two gives an example, three offers a counter-argument, four concludes. Ninety seconds for a banking passage.',
            ],
            [
              'Mark the turns as you go',
              'However, but, although, on the contrary, nevertheless. These are where the argument changes direction, and comprehension questions cluster around them because that is where meaning is easiest to misread.',
            ],
            [
              'Then answer question by question, returning to the text',
              'Locate the relevant lines for every question that has them. A detail question answered from memory is a guess wearing a disguise.',
            ],
            [
              'Answer main-idea questions last',
              'By then you will have re-read half the passage in fragments, and the main idea will be clearer than it was after the first pass.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'main-idea',
      heading: 'Main idea and title questions',
      eyebrow: 'Scope is everything',
      intro:
        'Almost every wrong option in a main-idea question fails on scope rather than on truth. It is either something the passage said in one line, or something wider than the passage ever claimed.',
      blocks: [
        {
          type: 'formula',
          title: 'The scope test',
          items: [
            { expr: 'Too narrow — true, but drawn from a single paragraph', note: 'The most seductive wrong option, because you can point at the line it came from. Ask whether it covers the last paragraph as well as the first.' },
            { expr: 'Too broad — the general subject rather than the specific claim', note: 'A passage arguing that road-widening increases traffic is not "about traffic". A title that would fit fifty other passages is not the title of this one.' },
            { expr: 'Right subject, wrong stance', note: 'If the passage argues against something, an option that describes the same topic approvingly is wrong however accurate its subject matter.' },
            { expr: 'The correct option usually mirrors the structure', note: 'Where a passage sets up a widely held view and then overturns it, the answer names the overturning — not the widely held view.' },
          ],
        },
        {
          type: 'example',
          q: 'Passage: "Cities that widened their roads to ease congestion found traffic worse within a decade. The extra capacity attracted drivers who had previously taken the train or travelled at other hours. Planners now call this induced demand." What is the main idea?',
          steps: [
            'The passage has one movement: an intervention was tried, and it backfired for a specific reason.',
            'An option about trains being efficient uses a detail from line two and misses the argument.',
            'An option about congestion in large cities is the general subject, not the claim.',
            'The claim is that adding capacity itself generates the traffic it was meant to relieve.',
          ],
          answer: 'That increasing road capacity can itself generate additional traffic.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'detail',
      heading: 'Detail and NOT questions',
      eyebrow: 'Free marks, if you go back',
      intro:
        'These are the easiest questions in the section and the ones most often lost to overconfidence. The answer is written in the passage; your only job is to find the line.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Locate before you decide',
              'Take a distinctive word from the question — a name, a number, a technical term — and find it in the passage. Read the sentence it sits in and the one after. That is where the answer lives.',
            ],
            [
              'Beware the paraphrase that shifts a qualifier',
              'The passage says "most economists"; the option says "economists". The passage says "may contribute"; the option says "causes". These are the standard detail traps, and they turn on one word.',
            ],
            [
              'For NOT and EXCEPT questions, check all four',
              'You are looking for the one option that is absent or contradicted, which means confirming that three of them are present. It takes longer than an ordinary detail question — budget for that rather than rushing it.',
            ],
            [
              'An option can be true and still wrong',
              'In a NOT question especially, an option may be perfectly true in the real world while never appearing in the passage. Absence from the text is the criterion, not falsity.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'Passage: "Mangroves protect coastlines from storm surges, serve as nurseries for young fish, and store carbon at rates several times higher than tropical forests. They are, however, among the fastest-disappearing habitats on earth." Which statement is NOT supported by the passage?',
          steps: [
            'Check each candidate against the text rather than against what you know about mangroves.',
            'Carbon storage — stated in line one. Shelter for young fish — stated as nurseries. Rapid disappearance — stated in the last line.',
            'Legal protection is never mentioned, although it may well be true of many countries.',
          ],
          answer: 'That mangroves are legally protected — true or not, the passage does not say it.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'inference',
      heading: 'Inference',
      eyebrow: 'One step, and only one',
      intro:
        'An inference is what must be true given what the passage says. Not what is likely, not what you happen to know, and not what a reasonable person would conclude after some thought — what must be true, in one short step.',
      blocks: [
        {
          type: 'formula',
          title: 'The tests an inference option has to pass',
          items: [
            { expr: 'Could the passage be entirely true while this option is false?', note: 'If yes, it is not an inference. This single question resolves most inference items faster than any amount of re-reading.' },
            { expr: 'Distance: one step from the text, never two', note: 'From "sales were falling before the internet arrived" you may infer that the internet was not the sole cause. You may not infer that the company was badly run.' },
            { expr: 'Strength: prefer the cautious option', note: 'Options containing always, never, all, none, must and only are rarely right, because passages rarely support absolutes. Options containing may, some, suggests and tends to survive scrutiny far better.' },
            { expr: 'Correlation is not cause', note: 'If most high scorers attended the evening classes, the supported inference is an association between the two. That the classes caused the scores is a further step the passage has not taken.' },
            { expr: 'Watch the contrapositive', note: 'From "every student who passed was offered admission" and "Ravi was not offered admission", it follows necessarily that Ravi did not pass. This is the one inference shape that is purely logical, and it appears often.' },
          ],
        },
        {
          type: 'note',
          title: 'The most expensive habit in the section',
          text:
            'Answering from what you already know about the subject. A passage on renewable energy will attract candidates who read about renewable energy, and they will pick the option that matches their reading rather than the paragraph in front of them. Everything you need is on the page, and anything not on the page is not evidence.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'vocab-context',
      heading: 'Vocabulary in context',
      eyebrow: 'The passage outranks the dictionary',
      intro:
        'These questions ask what a word means in this sentence, which is not always what it means in general. The options are chosen so that the dictionary meaning is present and wrong.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Cover the word and read the sentence',
              'Work out what would have to go in the gap, in your own words, before you look at the options. Then find the option closest to what you produced. Reading the options first lets them steer you.',
            ],
            [
              'Use the sentence around it, not the word alone',
              '"Studiously ambiguous" in a sentence about a minister whom neither side could claim is not badly worded — it is deliberately open to more than one reading. The neighbouring clause supplies the sense.',
            ],
            [
              'Expect a common meaning to be wrong',
              'If a word has an everyday sense and a specialised one, the question is usually testing the specialised one. Otherwise there would be nothing to ask.',
            ],
            [
              'Substitute your answer back into the sentence',
              'Read the whole line with your chosen option in place of the word. If it changes the sense of the paragraph, it is the wrong option even if it is a genuine synonym.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'tone',
      heading: 'Tone, attitude and purpose',
      eyebrow: 'Read the writer',
      intro:
        'Tone questions ask about the writer rather than the subject, and the evidence sits in the adjectives, the verbs and the sentence rhythm rather than in the content.',
      blocks: [
        {
          type: 'table',
          caption: 'Tone words that appear as options, and what signals each',
          head: ['Tone', 'What it looks like', 'A signal in the writing'],
          rows: [
            ['Objective / neutral', 'Reports without evaluating', 'Few adjectives, no first person, balanced qualifiers'],
            ['Critical', 'Judges the subject negatively but seriously', 'Words such as flawed, inadequate, fails to'],
            ['Sardonic / wry', 'Criticises through understatement or irony', 'A deliberately flat sentence after a build-up; repetition used for effect'],
            ['Appreciative', 'Approves without gushing', 'Remarkable, considerable, deserves credit'],
            ['Cautionary', 'Warns about a consequence', 'Risks, unless, may well find, before it is too late'],
            ['Analytical', 'Takes something apart to explain it', 'Because, therefore, the reason is, consider two cases'],
          ],
        },
        {
          type: 'note',
          title: 'Extreme tone words are almost never the answer',
          text:
            'Options such as furious, contemptuous, despairing or ecstatic describe writing you would notice. Exam passages are drawn from editorials and reports, which are rarely written in those registers. When an extreme and a moderate option both fit the direction of the writing, the moderate one is nearly always correct.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'elimination',
      heading: 'How wrong options are built',
      eyebrow: 'See the construction',
      intro:
        'Wrong options are manufactured to a small number of patterns. Recognising the pattern is faster than evaluating the content, and it works even when you are unsure of the answer.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The extreme statement',
              'Correct in direction but absolute in strength — "the internet destroyed the encyclopaedia business" where the passage said sales had already been falling. Scan for always, never, all, none, entirely, only and impossible.',
            ],
            [
              'The out-of-scope option',
              'Plausible, sensible, and about something the passage never discusses. Frequently the most attractive option to a well-read candidate, because it is true.',
            ],
            [
              'The half-right option',
              'The first clause matches the passage and the second does not. Papers rely on candidates reading until they recognise something and stopping. Read every option to its full stop.',
            ],
            [
              'The distortion',
              'The passage\'s own words with one relationship reversed — cause swapped with effect, a qualifier removed, "most" turned into "all". The vocabulary is familiar, which is precisely what makes it dangerous.',
            ],
            [
              'When two options survive',
              'Find the single word that separates them and go back to the passage for that word alone. There is always one, and it is usually a qualifier rather than a noun.',
            ],
          ],
        },
      ],
    },

    /* ── 9 ─────────────────────────────────────────────────────── */
    {
      id: 'timing',
      heading: 'Passage selection and timing',
      eyebrow: 'A decision worth marks',
      intro:
        'In a sectional-timed banking paper, which passage you attempt matters as much as how well you read it.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Budget the whole block, not the passage',
              'A ten-question banking passage deserves roughly eight minutes — about ninety seconds to read and forty seconds a question. If the reading alone has taken three minutes, the block is already losing.',
            ],
            [
              'Prefer the familiar subject over the short passage',
              'Length matters less than density. A four-paragraph piece on education is faster than two dense paragraphs on monetary policy, because comprehension speed depends on how much background you bring.',
            ],
            [
              'Take the vocabulary questions first',
              'Banking passages usually attach two synonym or antonym questions. They need one sentence of context each, so they are the cheapest marks in the block — do them before the inference questions.',
            ],
            [
              'Skip the passage, not the section',
              'If a passage is genuinely opaque after ninety seconds, leave it and take the error detection, cloze and para jumble questions first. Comprehension marks are worth exactly the same as those, and cost three times as much.',
            ],
            [
              'Never leave a comprehension question blank if there is no penalty',
              'Where negative marking applies, guess only once you have eliminated two options — which the patterns in the previous section usually allow.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Passage: "The company\'s profits rose 12% last quarter, though analysts had predicted 20%. Management attributed the shortfall to supply-chain delays rather than to weak demand." What can be inferred?',
      steps: [
        'Stated: profits rose, the rise was smaller than predicted, and management gave a reason.',
        'Test each candidate by asking whether the passage could be true while the candidate is false.',
        'Demand collapsing is explicitly denied by management. A loss contradicts "profits rose". Permanent disruption is a step beyond "delays".',
        'That the growth fell short of expectations is simply 12 against a predicted 20.',
      ],
      answer: 'That the profit growth fell short of what analysts had expected.',
    },
    {
      q: 'Passage: "Every student who passed the entrance test was offered admission. Ravi was not offered admission." What follows necessarily?',
      steps: [
        'The rule is: passed implies offered.',
        'Ravi was not offered, so he cannot be in the "passed" group — this is the contrapositive.',
        'Whether he sat the test at all is not settled, but either way he did not pass it.',
      ],
      answer: 'Ravi did not pass the test.',
    },
    {
      q: 'Passage: "The minister\'s remarks were studiously ambiguous; neither side could claim him as an ally, and neither could accuse him of opposition." What does "ambiguous" mean here?',
      steps: [
        'Cover the word and read the rest: the remarks let both sides read them either way.',
        '"Studiously" tells you the effect was intentional, which rules out "poorly worded".',
        'Nothing suggests the remarks were untrue, which rules out "deliberately false".',
      ],
      answer: 'Open to more than one interpretation.',
    },
    {
      q: 'Passage: "Another committee, another report, another set of recommendations destined for a shelf. One begins to suspect that the process is the point, and the outcome merely incidental." What is the tone?',
      steps: [
        'The repetition of "another" three times is doing work — it is not neutral reporting.',
        '"Destined for a shelf" and "merely incidental" are critical, but through understatement rather than anger.',
        'There is no alarm and no despair, only a dry judgement.',
      ],
      answer: 'Sardonic — critical, delivered wryly.',
    },
    {
      q: 'Passage: "Before dismissing the scheme as a failure, consider what it replaced. The previous system reached a third as many households and cost twice as much per beneficiary." What is the author\'s purpose?',
      steps: [
        'The opening clause tells you the author is responding to an existing judgement.',
        'The evidence offered is comparative, not absolute — reach and cost against the old system.',
        'The author never claims the scheme succeeded, only that the comparison is the right frame.',
      ],
      answer: 'To argue that the scheme should be judged against what it replaced.',
    },
    {
      q: 'Passage: "Sales of the printed encyclopaedia had been falling for years before the internet arrived. The company had already closed two of its three printing plants by 1993." What does this suggest?',
      steps: [
        'The key word is "before" — it establishes a sequence.',
        'An option blaming the internet reverses that sequence, which is a distortion of the passage\'s own point.',
        'Profitability in 1993 is never mentioned, and whether such encyclopaedias still exist is outside the passage.',
      ],
      answer: 'That the decline began before the internet could have been a factor.',
    },
    {
      q: 'Passage: "Most of the students who scored above ninety had attended the optional evening classes." What is best supported?',
      steps: [
        '"Most" is a qualifier and must survive into the answer.',
        'A causal claim is one step too far — the strong students may simply have been the ones who chose to attend.',
        '"Every student who attended scored above ninety" reverses the direction of the statement entirely.',
      ],
      answer: 'That there is an association between attending the classes and scoring highly.',
    },
    {
      q: 'Passage: "The library opens at nine on weekdays and at eleven on Saturdays. It is closed on Sundays and on the second Monday of every month." On which day is it certainly closed?',
      steps: [
        'Weekday mornings at ten fall after the nine o\'clock opening, so it is open.',
        'Saturday at noon falls after the eleven o\'clock opening, so it is open.',
        '"Every Monday" overstates the text, which closes only the second Monday.',
      ],
      answer: 'Sunday.',
    },
    {
      q: 'Passage: "The reforms were introduced piecemeal, a department at a time, over eleven years." What does "piecemeal" mean here?',
      steps: [
        'The phrase after the comma defines it: a department at a time.',
        'The time span reinforces that this was not a single event.',
        '"All at once" is the direct opposite, and reluctance is never mentioned.',
      ],
      answer: 'Gradually, in separate stages.',
    },
    {
      q: 'Passage: "Consider two farmers with identical land. One irrigates by flooding, the other by drip. After five years, their yields differ by a factor of three. The difference is not the soil." What does the last sentence do?',
      steps: [
        'The passage has set up a controlled comparison — identical land, one variable changed.',
        'The last sentence eliminates the one alternative explanation a reader might reach for.',
        'By closing off the soil, it points at the only difference the passage has named.',
      ],
      answer: 'It directs attention to the irrigation method as the cause of the difference.',
    },
  ],

  practice: [
    {
      q: 'Passage: "The company\'s profits rose 12% last quarter, though analysts had predicted 20%. Management attributed the shortfall to supply-chain delays rather than to weak demand." Which can be inferred?',
      options: [
        'Demand for the company\'s products collapsed.',
        'The company recorded a loss last quarter.',
        'The profit growth fell short of what analysts expected.',
        'The company\'s supply chains have been permanently disrupted.',
      ],
      answer: 2,
      explain: 'A 12% rise against a predicted 20% is a shortfall against expectations. The passage denies weak demand, states profits rose, and calls the problem delays rather than permanent disruption.',
    },
    {
      q: 'Passage: "Cities that widened their roads to ease congestion found traffic worse within a decade. The extra capacity attracted drivers who had previously taken the train or travelled at other hours." The main idea is that:',
      options: [
        'Trains are more efficient than cars.',
        'Planners rarely understand traffic.',
        'Congestion is worst in large cities.',
        'Adding road capacity can itself generate more traffic.',
      ],
      answer: 3,
      explain: 'The other options are either a detail from one line or the general subject. Only the last states the claim the passage actually makes.',
    },
    {
      q: 'Passage: "The library opens at nine on weekdays and at eleven on Saturdays. It remains closed on Sundays and on the second Monday of every month." On which of these is the library certainly closed?',
      options: ['Every Monday', 'Sunday', 'Saturday at noon', 'A weekday at ten in the morning'],
      answer: 1,
      explain: 'Only the second Monday is closed, and both the Saturday and weekday times fall after opening. Sunday is stated outright.',
    },
    {
      q: 'Passage: "The minister\'s remarks were studiously ambiguous; neither side could claim him as an ally, and neither could accuse him of opposition." Here "ambiguous" most nearly means:',
      options: ['Open to more than one interpretation', 'Aggressive', 'Poorly worded', 'Deliberately false'],
      answer: 0,
      explain: '"Studiously" signals that the effect was intended, which rules out poor wording, and nothing suggests the remarks were untrue.',
    },
    {
      q: 'Passage: "Another committee, another report, another set of recommendations destined for a shelf. One begins to suspect that the process is the point." The tone is best described as:',
      options: ['Neutral and descriptive', 'Enthusiastic', 'Sardonic', 'Alarmed'],
      answer: 2,
      explain: 'The threefold repetition and the dry final judgement mark criticism delivered through understatement rather than anger or alarm.',
    },
    {
      q: 'Passage: "Before dismissing the scheme as a failure, consider what it replaced. The previous system reached a third as many households and cost twice as much per beneficiary." The author\'s purpose is to:',
      options: [
        'Prove that the scheme was a complete success.',
        'Urge that the scheme be judged against what came before.',
        'Describe how the previous system worked.',
        'Recommend that the scheme be abolished.',
      ],
      answer: 1,
      explain: 'The author supplies a comparison rather than a verdict — the argument is about the right standard of judgement, not about success.',
    },
    {
      q: 'Passage: "Every student who passed the entrance test was offered admission. Ravi was not offered admission." Which conclusion certainly follows?',
      options: [
        'Ravi did not take the test.',
        'Ravi passed but declined the offer.',
        'The test was unfair.',
        'Ravi did not pass the test.',
      ],
      answer: 3,
      explain: 'Passing guarantees an offer, so the absence of an offer rules out passing. Whether Ravi sat the test at all is not settled either way.',
    },
    {
      q: 'Passage: "Mangroves protect coastlines from storm surges, serve as nurseries for young fish, and store carbon at rates several times higher than tropical forests. They are, however, among the fastest-disappearing habitats on earth." Which is NOT stated?',
      options: [
        'Mangroves store carbon efficiently.',
        'Mangroves shelter young fish.',
        'Mangroves are disappearing quickly.',
        'Mangroves are legally protected in most countries.',
      ],
      answer: 3,
      explain: 'Legal protection is never mentioned. It may well be true in the world, but absence from the text is the criterion in a NOT question.',
    },
    {
      q: 'Passage: "Sleep was long treated as time subtracted from productive life. Research over the past two decades has reversed that view: memory consolidation, immune function and emotional regulation all depend on it." The passage is mainly concerned with:',
      options: [
        'How much sleep an adult needs.',
        'A change in how sleep is understood.',
        'The dangers of insomnia.',
        'Methods of improving sleep quality.',
      ],
      answer: 1,
      explain: 'The structure is an old view followed by its reversal, so the main idea is the shift itself rather than any of the specific findings.',
    },
    {
      q: 'Passage: "The reforms were introduced piecemeal, a department at a time, over eleven years." Here "piecemeal" means:',
      options: ['All at once', 'Reluctantly', 'Gradually and in separate stages', 'Without consultation'],
      answer: 2,
      explain: 'The phrase "a department at a time" defines the word directly, and the eleven-year span confirms it.',
    },
    {
      q: 'Passage: "Sales of the printed encyclopaedia had been falling for years before the internet arrived. The company had already closed two of its three printing plants by 1993." The passage suggests that:',
      options: [
        'The decline began before the internet could have been a factor.',
        'The internet destroyed the encyclopaedia business.',
        'The company was profitable in 1993.',
        'Printed encyclopaedias are no longer produced.',
      ],
      answer: 0,
      explain: 'The word "before" fixes the sequence. Blaming the internet reverses the passage\'s own point, and the other two options are outside the text.',
    },
    {
      q: 'Passage: "The bridge was completed on schedule, within budget, and to the specification agreed at the outset. Such projects exist. They are simply not the ones that get written about." The tone is best described as:',
      options: ['Wry', 'Angry', 'Despairing', 'Sentimental'],
      answer: 0,
      explain: 'The short final sentences make a pointed observation through understatement. There is no heat in the writing and no despair.',
    },
    {
      q: 'Passage: "Applications close on 15 March. Candidates who applied in either of the two previous cycles need not submit fresh documents, but must confirm their intent by the closing date." A candidate who applied last year must:',
      options: [
        'Submit fresh documents by 15 March.',
        'Confirm their intent by 15 March.',
        'Do nothing at all.',
        'Apply again from the beginning.',
      ],
      answer: 1,
      explain: 'Such candidates are exempted from fresh documents but the confirmation requirement still applies, and the closing date is 15 March.',
    },
    {
      q: 'Passage: "Consider two farmers with identical land. One irrigates by flooding, the other by drip. After five years, their yields differ by a factor of three. The difference is not the soil." The final sentence chiefly serves to:',
      options: [
        'Introduce a new topic.',
        'Question the reliability of the data.',
        'Direct attention to the irrigation method as the cause.',
        'Summarise the whole passage.',
      ],
      answer: 2,
      explain: 'By closing off the one alternative explanation, the sentence leaves the single variable the passage has named.',
    },
    {
      q: 'Passage: "Most of the students who scored above ninety in the test had attended the optional evening classes." Which is best supported?',
      options: [
        'The evening classes caused the high scores.',
        'Every student who attended scored above ninety.',
        'Students who did not attend all scored below ninety.',
        'There is an association between attending and scoring highly.',
      ],
      answer: 3,
      explain: 'The statement establishes a correlation only. A causal claim, and both reversals of the direction, go beyond what "most" supports.',
    },
    {
      q: 'Passage: "A language dies roughly every two weeks. With each one goes a body of knowledge about local plants, weather and navigation that was never written down." The passage is primarily about:',
      options: [
        'What is lost when a language disappears.',
        'The difficulty of learning rare languages.',
        'How linguists record endangered languages.',
        'The number of languages in the world.',
      ],
      answer: 0,
      explain: 'The rate of loss opens the passage but the substance is what disappears with each language — the second sentence carries the claim.',
    },
  ],

  faqs: [
    {
      q: 'Should I read the passage first or the questions first?',
      a: 'Read the passage first, once, at pace, for structure rather than detail — about ninety seconds for a banking passage. Reading the questions first sounds efficient but leaves you holding five half-remembered questions while you read, which slows you down and produces a shallow understanding. The exception is a short four-question SSC passage, where scanning the questions first genuinely helps.',
    },
    {
      q: 'How do I answer inference questions?',
      a: 'Ask one question of each option: could the passage be entirely true while this option is false? If yes, it is not an inference. Stay one step from the text, prefer cautious wording over absolutes, and never bring in what you already know about the subject — everything you need is on the page.',
    },
    {
      q: 'What is the difference between a detail question and an inference question?',
      a: 'A detail question has its answer written in the passage, so if you cannot point at the line, you have the wrong option. An inference question has its answer nowhere in the passage, so if you can point at the line, you are probably looking at a restatement trap instead.',
    },
    {
      q: 'How are wrong options constructed in comprehension?',
      a: 'To four patterns: the extreme statement, right in direction but absolute in strength; the out-of-scope option, sensible and true but never discussed; the half-right option, whose first clause matches and second does not; and the distortion, which uses the passage\'s own words with one relationship reversed. Recognising the pattern is faster than evaluating the content.',
    },
    {
      q: 'How do I answer main idea and title questions?',
      a: 'Test the scope. Most wrong options are true but drawn from a single paragraph, or so broad that they would fit fifty other passages. The correct option mirrors the passage\'s structure — where a passage sets up a common view and overturns it, the answer names the overturning.',
    },
    {
      q: 'How do I handle vocabulary-in-context questions?',
      a: 'Cover the word, read the sentence, and decide in your own words what would fill the gap — then find the option closest to it. The passage overrides the dictionary, and the everyday meaning of the word is usually among the options precisely because it is wrong here.',
    },
    {
      q: 'How do I identify the tone of a passage?',
      a: 'Read the adjectives, the verbs and the rhythm rather than the subject matter. Also discount extremes: options such as furious, contemptuous or ecstatic describe writing you would notice, and exam passages come from editorials and reports. When a moderate and an extreme option point the same way, the moderate one is nearly always right.',
    },
    {
      q: 'How much time should a reading comprehension passage take?',
      a: 'Roughly eight minutes for a ten-question banking passage — about ninety seconds to read and forty seconds per question. If the reading alone takes three minutes, the passage is already costing more than it returns, and the same marks are available faster in error detection or cloze.',
    },
    {
      q: 'Which passage should I attempt when there are two?',
      a: 'The one on the more familiar subject, not the shorter one. Comprehension speed depends far more on the background you bring than on word count, so four paragraphs on education will usually be faster than two dense paragraphs on monetary policy.',
    },
    {
      q: 'How many comprehension questions come in bank exams?',
      a: 'Banking prelims typically carry one passage of seven to ten questions, often with two vocabulary questions attached, and mains carries two longer passages running to ten or fifteen questions. SSC CGL Tier 1 has a shorter passage of three to five mostly factual questions.',
    },
  ],

  related: [
    { label: 'Vocabulary', to: '/study-material/english/vocabulary/' },
    { label: 'Para Jumbles', to: '/study-material/english/para-jumbles/' },
    { label: 'Cloze Test', to: '/study-material/english/cloze-test/' },
    { label: 'Grammar', to: '/study-material/english/grammar/' },
    { label: 'Error Detection', to: '/study-material/english/error-detection/' },
    { label: 'All English', to: '/study-material/english/' },
  ],
}
