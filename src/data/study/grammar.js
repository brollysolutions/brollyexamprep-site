/**
 * Grammar — /study-material/english/grammar/
 *
 * Organised by what examiners actually test rather than by the textbook order.
 * Subject-verb agreement comes first because it produces more questions than
 * any other area, and voice and narration get a full section each because SSC
 * papers lean on them heavily while banking papers barely touch them.
 */
export default {
  subject: 'english',
  subjectName: 'English',
  slug: 'grammar',
  title: 'Grammar',
  seoTitle: 'English Grammar for Competitive Exams | Rules, Examples & Practice',
  metaDescription:
    'Complete English Grammar study material for SSC, banking and state exams — subject-verb agreement, tenses and sequence of tenses, articles, prepositions, pronouns and modifiers, active and passive voice, direct and indirect speech and conditionals, with solved examples and practice questions.',
  readMinutes: 22,
  lead: [
    'Grammar is the one part of the English section you can make deterministic. Vocabulary depends on what you happen to have read and comprehension on how fast you read, but grammar is a finite list of rules that examiners return to year after year — and roughly a dozen of them account for most of the marks.',
    'This page is organised around that fact. Subject-verb agreement comes first because it produces more questions than anything else, and each section ends with the specific sentence patterns examiners build questions from. Learn the rule with its trap attached and error detection, sentence improvement and cloze all become the same skill.',
  ],

  weightage: [
    { exam: 'SSC CGL Tier 1', count: '8–12 questions', note: 'Error spotting, sentence improvement, voice and narration, spread across the 25-question section.' },
    { exam: 'SSC CGL Tier 2', count: '15–20 questions', note: 'The same areas at higher difficulty across a 45-question paper.' },
    { exam: 'Banking Prelims', count: '5–10 questions', note: 'Error detection and sentence-based grammar; voice and narration rarely appear.' },
    { exam: 'Banking Mains', count: '8–12 questions', note: 'Usually embedded in phrase replacement and word-usage formats rather than asked directly.' },
    { exam: 'State PSC & Police exams', count: '5–10 questions', note: 'Direct rule-based questions, close to the SSC pattern.' },
  ],

  contents: [
    { icon: 'target', title: 'Subject-verb agreement', sub: 'The highest-yield rules in the section', href: '#agreement' },
    { icon: 'clock', title: 'Tenses and their sequence', sub: 'Time markers and what they force', href: '#tenses' },
    { icon: 'book', title: 'Articles and determiners', sub: 'Sound, not spelling', href: '#articles' },
    { icon: 'layers', title: 'Prepositions', sub: 'Fixed pairs and the verbs that take none', href: '#prepositions' },
    { icon: 'user', title: 'Pronouns and modifiers', sub: 'Case, agreement and dangling phrases', href: '#pronouns' },
    { icon: 'refresh', title: 'Active and passive voice', sub: 'Including imperatives and modals', href: '#voice' },
    { icon: 'globe', title: 'Direct and indirect speech', sub: 'Backshift and the words that change', href: '#narration' },
    { icon: 'chart', title: 'Conditionals and the subjunctive', sub: 'If, wish, as if and it is time', href: '#conditionals' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten sentences corrected line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'agreement',
      heading: 'Subject-verb agreement',
      eyebrow: 'Learn this first',
      intro:
        'More questions come from this single area than from any other in the grammar syllabus, and almost all of them work the same way — the examiner puts distance between the subject and its verb and hopes you agree with the wrong noun.',
      blocks: [
        {
          type: 'formula',
          title: 'The rules that generate the questions',
          items: [
            { expr: 'Phrases beginning with "along with, as well as, besides, together with, accompanied by, in addition to" do not change the verb', note: 'The captain, along with his players, WAS felicitated. The verb still answers to "the captain".' },
            { expr: 'With "either … or", "neither … nor" and "not only … but also", the verb agrees with the nearer subject', note: 'Neither the teacher nor the students WERE present. Reverse the two nouns and the verb changes with them.' },
            { expr: '"A number of" takes a plural verb; "the number of" takes a singular one', note: 'A number of students WERE absent, but the number of students IS increasing.' },
            { expr: 'Each, every, either, neither, everyone, somebody, nobody and none take a singular verb', note: 'Each of the boys HAS been given a room — "of the boys" is a prepositional phrase, not the subject.' },
            { expr: 'Subjects that look plural but are singular: news, mathematics, physics, economics, politics, measles', note: 'Mathematics IS my favourite subject. The final s is part of the word, not a plural ending.' },
            { expr: 'Subjects that are always plural: scissors, trousers, spectacles, tongs, pliers, premises', note: 'The scissors ARE on the table. Add "a pair of" and the verb turns singular again.' },
            { expr: 'Amounts of money, distance and time take a singular verb when treated as one quantity', note: 'Ten miles IS a long walk. Five thousand rupees IS a large sum.' },
          ],
        },
        {
          type: 'table',
          caption: 'The "one of the" pattern, which examiners use constantly',
          head: ['Sentence', 'Verb in the relative clause', 'Why'],
          rows: [
            ['He is one of the boys who … selected', 'who WERE selected', 'The clause describes "the boys", which is plural.'],
            ['He is the only one of the boys who … selected', 'who WAS selected', '"The only one" narrows it to a single person.'],
            ['One of my friends … a doctor', 'IS a doctor', 'The subject is "one", not "friends" — but the noun after "one of" must be plural.'],
            ['Many a student … passed', 'HAS passed', '"Many a" is singular in form despite its plural meaning.'],
            ['More than one candidate … applied', 'HAS applied', 'Singular, because "one candidate" sits next to the verb.'],
          ],
        },
        {
          type: 'note',
          title: 'Collective nouns cut both ways',
          text:
            'A committee, jury, team or family takes a singular verb when it acts as one body and a plural verb when its members act separately. "The committee has decided to postpone the meeting" is a single decision; "the jury were divided in their opinion" describes members disagreeing. Examiners set both, and a sentence using the plural correctly is a favourite answer for the "no error" option.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'tenses',
      heading: 'Tenses and their sequence',
      eyebrow: 'Follow the time markers',
      intro:
        'Tense questions almost always contain a word that fixes the answer before you have to think about it. Find the time marker first and the tense follows from it.',
      blocks: [
        {
          type: 'table',
          caption: 'Time markers and the tense they force',
          head: ['Marker in the sentence', 'Tense required', 'Example'],
          rows: [
            ['since / for + a period', 'present perfect continuous', 'He has been living here since 2015.'],
            ['ago', 'simple past', 'He left the office two hours ago.'],
            ['already / just / yet / never', 'present perfect', 'She has already submitted the form.'],
            ['by the time / before + past action', 'past perfect for the earlier action', 'The train had left before I reached.'],
            ['when / until / as soon as / after (future sense)', 'simple present, never "will"', 'I will call you when he comes.'],
            ['every day / usually / often', 'simple present', 'He usually walks to work.'],
            ['at this moment / right now', 'present continuous', 'They are waiting outside.'],
          ],
        },
        {
          type: 'formula',
          title: 'Sequence of tenses, and its exceptions',
          items: [
            { expr: 'A past main clause normally pulls the subordinate clause into the past', note: 'He said that he WAS unwell. Not "is unwell".' },
            { expr: 'Universal truths and habitual facts stay in the present', note: 'The teacher said that water BOILS at 100 degrees. A fact does not stop being true because it was reported yesterday.' },
            { expr: 'After "It is time" and "I wish", use the past form even for present meaning', note: 'It is time we WENT home. I wish I WERE taller.' },
            { expr: 'After "since" meaning "from a point in time", use the simple past for the starting point', note: 'It is two years since I MET him.' },
            { expr: '"Hardly / scarcely … when", "no sooner … than"', note: 'Hardly had he entered WHEN the lights went out. No sooner had he entered THAN the lights went out. Pairing the wrong second word is the whole question.' },
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'articles',
      heading: 'Articles and determiners',
      eyebrow: 'Sound, not spelling',
      intro:
        'The choice between a and an is decided by the sound a word starts with, not the letter. Every question in this area is built on a word where the two disagree.',
      blocks: [
        {
          type: 'table',
          caption: 'Where the letter and the sound disagree',
          head: ['Phrase', 'Article', 'Why'],
          rows: [
            ['… honest man', 'an honest man', 'The h is silent, so the word opens with a vowel sound.'],
            ['… university degree', 'a university degree', 'It opens with a "yu" sound, which is a consonant sound.'],
            ['… hour', 'an hour', 'Silent h again.'],
            ['… one-rupee note', 'a one-rupee note', '"One" opens with a "w" sound.'],
            ['… MP / MLA', 'an MP', 'The letter is read "em", a vowel sound.'],
            ['… European country', 'a European country', 'Another "yu" opening.'],
            ['… useful book', 'a useful book', 'Same reason — compare "an umbrella", where the u is a true vowel sound.'],
          ],
        },
        {
          type: 'formula',
          title: 'When "the" is required and when it is wrong',
          items: [
            { expr: 'Use "the" with superlatives, ordinals and unique things', note: 'The best player, the first chapter, the sun, the Ganges, the Himalayas, the Times of India.' },
            { expr: 'Use "the" with rivers, seas, mountain ranges, deserts and groups of islands', note: 'But not with individual mountains or lakes: Mount Everest, Lake Chilika.' },
            { expr: 'Drop the article before languages, subjects, games and most meals', note: 'He plays cricket. She teaches physics. We had lunch at noon.' },
            { expr: 'Drop the article before a plural or uncountable noun used in a general sense', note: 'Books are cheaper online — not "the books", unless you mean particular ones.' },
            { expr: '"The" before an adjective makes it a class of people', note: 'The poor, the rich, the elderly — all take a plural verb.' },
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'prepositions',
      heading: 'Prepositions',
      eyebrow: 'Memorise the pairs',
      intro:
        'There is no logic to learn here, only fixed partnerships. The good news is that examiners reuse the same twenty or so, and half the questions are about a preposition that should not be there at all.',
      blocks: [
        {
          type: 'table',
          caption: 'The pairs examiners test most',
          head: ['Correct form', 'Common wrong form', 'Note'],
          rows: [
            ['superior to / inferior to', 'superior than', 'Latin comparatives never take "than". Same for senior, junior, prior and preferable.'],
            ['prefer X to Y', 'prefer X than Y', 'But "would rather X than Y" is correct.'],
            ['different from', 'different than', 'Indian exams follow the British preference throughout.'],
            ['die of (a disease)', 'die from a disease', '"Die from" is used for injuries and external causes.'],
            ['angry with (a person)', 'angry on a person', 'Angry at or about a thing or situation.'],
            ['comprise', 'comprise of', 'The whole comprises the parts. "Consist of" and "composed of" do take a preposition.'],
            ['discuss', 'discuss about', 'Also drop the preposition after describe, resemble, order, emphasise, accompany, reach and marry.'],
            ['congratulate on', 'congratulate for', 'Compare "thank for", which is correct.'],
            ['compare with (similar things)', 'compare to for differences', '"Compare to" points out a likeness; "compare with" measures against.'],
            ['insist on', 'insist for', 'Similarly "depend on", "consist of", "deprive of", "accuse of".'],
          ],
        },
        {
          type: 'note',
          title: 'The verbs that take no preposition',
          text:
            'Discuss, describe, resemble, comprise, order, emphasise, accompany, attack, reach, enter, tell, request and marry are transitive in exam English and take their object directly. "Let us discuss the matter", not "discuss about the matter"; "he entered the room", not "entered into the room" — although "enter into" is correct for agreements and negotiations. This single group accounts for a large share of error-detection questions.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'pronouns',
      heading: 'Pronouns and modifiers',
      eyebrow: 'Case and reference',
      intro:
        'Two separate skills sit here. Pronouns must match their antecedent in number and take the right case; modifiers must sit next to the thing they describe.',
      blocks: [
        {
          type: 'formula',
          title: 'Pronoun rules worth having ready',
          items: [
            { expr: 'After a preposition, use the object form', note: 'Between you and ME, not "between you and I". This is the single most-tested pronoun error in the syllabus.' },
            { expr: 'After "than" and "as", use the form the missing verb would demand', note: 'He is taller than I (am). She likes you more than ME — meaning she likes you more than she likes me.' },
            { expr: 'Reflexive pronouns need a subject in the same sentence to reflect', note: 'He hurt HIMSELF is correct; "Myself Rahul" is not English at all, however common it is in speech.' },
            { expr: '"One" must be followed by "one\'s", not "his"', note: 'One should do ONE\'S duty. Mixing the two is a standard SSC error line.' },
            { expr: 'A pronoun after "each", "every" or "anyone" is singular', note: 'Each of the boys submitted HIS assignment — not "their", in exam English.' },
            { expr: 'Order of pronouns: second person, third person, first person for good news', note: 'You, he and I have been selected. For blame, the first person comes first: I, you and he were careless.' },
          ],
        },
        {
          type: 'note',
          title: 'Dangling and misplaced modifiers',
          text:
            'An opening participial phrase attaches itself to whatever noun follows the comma. "Walking down the road, the trees looked beautiful" says the trees were walking. The fix is either to give the phrase the right subject — "Walking down the road, I found the trees beautiful" — or to expand it into a clause: "As I walked down the road, the trees looked beautiful." Whenever a sentence opens with an -ing or -ed phrase, check what noun comes immediately after the comma.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'voice',
      heading: 'Active and passive voice',
      eyebrow: 'SSC staple',
      intro:
        'A mechanical transformation with three moving parts. Once you can do the standard sentence, the marks are in the four special cases.',
      blocks: [
        {
          type: 'formula',
          title: 'The transformation',
          items: [
            { expr: 'The object becomes the subject; the subject becomes "by + object form"', note: 'Ram wrote a letter → A letter was written by Ram.' },
            { expr: 'The verb becomes the matching form of "be" plus the past participle', note: 'The tense of "be" copies the tense of the original verb: writes → is written, wrote → was written, has written → has been written.' },
            { expr: 'Modals: modal + be + past participle', note: 'He can do it → It can be done by him. Same shape for may, must, should and will.' },
            { expr: 'Imperatives: "Let + object + be + past participle"', note: 'Open the door → Let the door be opened. Requests become "You are requested to …".' },
            { expr: 'Questions keep their question word at the front', note: 'Who wrote this? → By whom was this written? Did he do it? → Was it done by him?' },
            { expr: 'Drop "by them / by people / by someone" when the agent is unknown or obvious', note: 'Someone has stolen my bag → My bag has been stolen.' },
          ],
        },
        {
          type: 'example',
          q: 'Change to the passive: "The principal will announce the results tomorrow."',
          steps: [
            'Object: "the results" — that becomes the subject.',
            'The verb is "will announce", so the passive is "will be announced".',
            'The original subject moves to "by the principal".',
            'The time expression stays where it was.',
          ],
          answer: 'The results will be announced by the principal tomorrow.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'narration',
      heading: 'Direct and indirect speech',
      eyebrow: 'Three things change',
      intro:
        'Reported speech changes the pronouns, the tense and the words of time and place. Work through them in that order and the sentence assembles itself.',
      blocks: [
        {
          type: 'table',
          caption: 'The words that change when speech is reported',
          head: ['Direct', 'Indirect', 'Note'],
          rows: [
            ['now', 'then', 'Only when the reporting verb is in the past.'],
            ['today', 'that day', 'Similarly tonight becomes that night.'],
            ['tomorrow', 'the next day', 'Or "the following day".'],
            ['yesterday', 'the previous day', 'Or "the day before".'],
            ['here', 'there', 'And "this" becomes "that", "these" becomes "those".'],
            ['ago', 'before', 'Two days ago becomes two days before.'],
            ['last night', 'the previous night', 'And "next week" becomes "the following week".'],
          ],
        },
        {
          type: 'formula',
          title: 'The reporting verb decides the structure',
          items: [
            { expr: 'Statements: said that / told somebody that', note: '"Said to me" becomes "told me". "Said me" is never correct.' },
            { expr: 'Questions: asked if / asked whether, then normal word order and no question mark', note: 'He said, "Are you coming?" → He asked if I was coming. Not "asked that if".' },
            { expr: 'Wh-questions keep the question word as the connector', note: 'He said, "Why are you late?" → He asked why I was late. The verb follows the subject, not the other way round.' },
            { expr: 'Commands and requests: told / ordered / requested / advised + to + verb', note: 'He said, "Shut the door" → He told me to shut the door. Negatives become "not to".' },
            { expr: 'Exclamations and wishes: exclaimed with joy / sorrow, wished', note: 'He said, "What a beautiful sight!" → He exclaimed with delight that it was a very beautiful sight.' },
            { expr: 'Universal truths do not shift tense', note: 'He said, "The earth moves round the sun" → He said that the earth moves round the sun.' },
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'conditionals',
      heading: 'Conditionals and the subjunctive',
      eyebrow: 'Fixed patterns',
      intro:
        'Three conditional patterns and a handful of subjunctive expressions. Every question here is a test of whether you can keep the two halves of the sentence consistent.',
      blocks: [
        {
          type: 'table',
          caption: 'The three conditionals',
          head: ['Type', 'Pattern', 'Example'],
          rows: [
            ['Type 1 — likely', 'If + simple present, will + base verb', 'If it rains, we will cancel the trip.'],
            ['Type 2 — unlikely or unreal now', 'If + simple past, would + base verb', 'If I were you, I would accept the offer.'],
            ['Type 3 — impossible, about the past', 'If + had + past participle, would have + past participle', 'If I had known, I would have helped.'],
          ],
        },
        {
          type: 'formula',
          title: 'The traps inside conditionals',
          items: [
            { expr: 'Never put "would" in the if-clause', note: '"If I would have known" is wrong; it is "If I had known". This is the most common conditional error in exam papers.' },
            { expr: '"Unless" already means "if not", so never add another negative', note: 'Unless you work hard, you will fail — not "unless you do not work hard".' },
            { expr: 'Use "were" for all persons in unreal conditions', note: 'If he WERE here, he would explain. Also "I wish I were", "he behaves as if he were the owner".' },
            { expr: '"It is time" and "It is high time" take the simple past', note: 'It is high time you STARTED preparing.' },
            { expr: '"Lest" is followed by "should", never by "not"', note: 'Walk carefully lest you SHOULD fall — "lest" already carries the negative.' },
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Correct the sentence: "The captain along with his team members were felicitated."',
      steps: [
        'Find the true subject. "Along with his team members" is a parenthetical phrase, not part of the subject.',
        'The subject is "the captain", which is singular.',
        'So the verb must be singular.',
      ],
      answer: 'The captain, along with his team members, WAS felicitated.',
    },
    {
      q: 'Correct the sentence: "He is one of the best players who has ever played for India."',
      steps: [
        'The relative clause "who … played for India" describes the noun immediately before it.',
        'That noun is "players", which is plural.',
        'Compare "he is the only one of the players who HAS played", where "the only one" makes it singular.',
      ],
      answer: 'He is one of the best players who HAVE ever played for India.',
    },
    {
      q: 'Correct the sentence: "I prefer coffee than tea."',
      steps: ['"Prefer" is one of the Latin comparatives that never takes "than".', 'The fixed pattern is "prefer X to Y".'],
      answer: 'I prefer coffee TO tea.',
    },
    {
      q: 'Correct the sentence: "The teacher said that water boiled at 100 degrees Celsius."',
      steps: [
        'The reporting verb is in the past, which normally backshifts the reported clause.',
        'But the boiling point of water is a universal truth, and truths do not become past.',
      ],
      answer: 'The teacher said that water BOILS at 100 degrees Celsius.',
    },
    {
      q: 'Correct the sentence: "Scarcely had I reached the station than the train left."',
      steps: [
        '"Scarcely" and "hardly" pair with "when".',
        'It is "no sooner" that pairs with "than".',
      ],
      answer: 'Scarcely had I reached the station WHEN the train left.',
    },
    {
      q: 'Correct the sentence: "He has been living here since five years."',
      steps: [
        '"Since" marks a point in time; "for" marks a length of time.',
        '"Five years" is a duration, not a point.',
      ],
      answer: 'He has been living here FOR five years. (Or "since 2020", a point in time.)',
    },
    {
      q: 'Correct the sentence: "One should do his duty towards his country."',
      steps: [
        '"One" is a self-contained impersonal pronoun.',
        'It must be continued with "one\'s", not with a third-person pronoun.',
      ],
      answer: "One should do ONE'S duty towards ONE'S country.",
    },
    {
      q: 'Correct the sentence: "Walking down the road, a snake crossed my path."',
      steps: [
        'The opening phrase attaches to whatever noun follows the comma.',
        'As written, the snake was walking down the road.',
        'Either give the phrase its real subject or expand it into a full clause.',
      ],
      answer: 'As I was walking down the road, a snake crossed my path.',
    },
    {
      q: 'Change to the passive: "Open the door."',
      steps: [
        'This is an imperative, so the ordinary passive pattern does not apply.',
        'Imperatives take "Let + object + be + past participle".',
      ],
      answer: 'Let the door be opened.',
    },
    {
      q: 'Report the speech: He said to me, "I will meet you tomorrow."',
      steps: [
        '"Said to me" becomes "told me".',
        'Pronouns shift: "I" becomes "he" and "you" becomes "me".',
        'The tense backshifts: "will" becomes "would".',
        '"Tomorrow" becomes "the next day".',
      ],
      answer: 'He told me that he would meet me the next day.',
    },
  ],

  practice: [
    {
      q: 'Choose the grammatically correct sentence about the scissors.',
      options: [
        'The scissors is on the table.',
        'The scissors are on the table.',
        'A scissors are on the table.',
        'The scissor are on the table.',
      ],
      answer: 1,
      explain: 'Scissors, like trousers and spectacles, is always plural and takes a plural verb. Only "a pair of scissors" turns it singular.',
    },
    {
      q: 'Neither the manager nor the employees ___ present at the meeting.',
      options: ['is', 'was', 'has been', 'were'],
      answer: 3,
      explain: 'With "neither … nor", the verb agrees with the nearer subject, and "employees" is plural.',
    },
    {
      q: 'The number of applicants ___ increasing every year.',
      options: ['are', 'were', 'is', 'have been'],
      answer: 2,
      explain: '"The number of" takes a singular verb. It is "a number of" that takes a plural one.',
    },
    {
      q: 'He is senior ___ me by two years.',
      options: ['to', 'than', 'from', 'over'],
      answer: 0,
      explain: 'Senior, junior, superior, inferior, prior and preferable all take "to" rather than "than".',
    },
    {
      q: 'I have been waiting for you ___ two hours.',
      options: ['since', 'from', 'for', 'by'],
      answer: 2,
      explain: '"For" is used with a length of time; "since" needs a point in time such as "since two o\'clock".',
    },
    {
      q: 'Hardly had he entered the room ___ the lights went out.',
      options: ['than', 'when', 'then', 'that'],
      answer: 1,
      explain: 'Hardly and scarcely pair with "when". Only "no sooner" pairs with "than".',
    },
    {
      q: 'If I ___ you, I would accept the offer immediately.',
      options: ['was', 'am', 'had been', 'were'],
      answer: 3,
      explain: 'An unreal present condition takes "were" for every person — the subjunctive form.',
    },
    {
      q: 'The teacher said that water ___ at 100 degrees Celsius.',
      options: ['boils', 'boiled', 'had boiled', 'was boiling'],
      answer: 0,
      explain: 'Universal truths keep the present tense even after a past reporting verb.',
    },
    {
      q: 'He is ___ honest man and ___ European by birth.',
      options: ['a … a', 'an … an', 'an … a', 'a … an'],
      answer: 2,
      explain: 'Articles follow sound. "Honest" opens with a silent h and so takes "an"; "European" opens with a "yu" sound and takes "a".',
    },
    {
      q: 'Each of the students ___ been given a separate room.',
      options: ['have', 'has', 'were', 'are'],
      answer: 1,
      explain: '"Each" is singular. "Of the students" is a prepositional phrase and does not affect the verb.',
    },
    {
      q: 'Choose the grammatically correct sentence using the verb "discuss".',
      options: [
        'Let us discuss about the matter.',
        'Let us discuss on the matter.',
        'Let us discuss over the matter.',
        'Let us discuss the matter.',
      ],
      answer: 3,
      explain: 'Discuss takes its object directly. The same applies to describe, resemble, comprise, emphasise and reach.',
    },
    {
      q: 'Choose the correct passive form of "Open the door."',
      options: [
        'Let the door be opened.',
        'The door is opened.',
        'The door was opened.',
        'The door has been opened.',
      ],
      answer: 0,
      explain: 'An imperative becomes "Let + object + be + past participle" in the passive.',
    },
    {
      q: 'Report the speech: He said to me, "I will meet you tomorrow."',
      options: [
        'He told me that he will meet me tomorrow.',
        'He told me that he would meet me the next day.',
        'He said me that he would meet me tomorrow.',
        'He told to me that he would meet me the next day.',
      ],
      answer: 1,
      explain: '"Said to me" becomes "told me", "will" backshifts to "would", and "tomorrow" becomes "the next day".',
    },
    {
      q: 'It is high time we ___ home.',
      options: ['go', 'will go', 'have gone', 'went'],
      answer: 3,
      explain: '"It is time" and "it is high time" take the simple past even though the meaning is present.',
    },
    {
      q: 'Between you and ___, the plan is unlikely to work.',
      options: ['me', 'I', 'myself', 'mine'],
      answer: 0,
      explain: '"Between" is a preposition, so the pronoun after it takes the object form.',
    },
    {
      q: 'Choose the sentence with no modifier error.',
      options: [
        'Walking down the road, the trees looked beautiful.',
        'Walking down the road, beautiful trees were seen by me.',
        'Walking down the road, I found the trees beautiful.',
        'The trees looked beautiful, walking down the road.',
      ],
      answer: 2,
      explain: 'An opening participial phrase attaches to the noun right after the comma, so that noun must be the one doing the walking.',
    },
  ],

  faqs: [
    {
      q: 'Which grammar topics carry the most marks in competitive exams?',
      a: 'Subject-verb agreement produces more questions than anything else, followed by tenses, prepositions and pronouns. In SSC papers, active-passive voice and direct-indirect speech add a further two to four questions each, while banking papers largely replace those with error detection and phrase replacement built on the same underlying rules.',
    },
    {
      q: 'Does "along with" make the verb plural?',
      a: 'No. Phrases beginning with along with, as well as, besides, together with, accompanied by and in addition to are parenthetical — the verb still agrees with the original subject. "The captain, along with his players, was felicitated" is correct.',
    },
    {
      q: 'What is the difference between "a number of" and "the number of"?',
      a: '"A number of" means "many" and takes a plural verb: a number of students were absent. "The number of" refers to the count itself and takes a singular verb: the number of students is increasing. Both appear in the same paper regularly.',
    },
    {
      q: 'When do I use "a" and when "an"?',
      a: 'By sound, not spelling. Use "an" before a vowel sound — an hour, an honest man, an MP — and "a" before a consonant sound, including the "yu" sound in a university, a European and a useful book, and the "w" sound in a one-rupee note.',
    },
    {
      q: 'Which verbs should not take a preposition?',
      a: 'Discuss, describe, resemble, comprise, order, emphasise, accompany, attack, reach, enter, tell, request and marry take their object directly in exam English. "Discuss about", "comprise of" and "reach at" are standard error-detection answers.',
    },
    {
      q: 'What is the difference between "since" and "for"?',
      a: '"Since" is followed by a point in time — since 2015, since Monday, since morning. "For" is followed by a length of time — for five years, for two hours. Both usually appear with the present perfect or present perfect continuous.',
    },
    {
      q: 'Why is "If I would have known" wrong?',
      a: 'Because "would" never belongs in the if-clause. A third conditional is "If + had + past participle" in the condition and "would have + past participle" in the result: "If I had known, I would have helped." This is among the most frequently tested errors in the syllabus.',
    },
    {
      q: 'How do I convert an imperative sentence into the passive?',
      a: 'Use "Let + object + be + past participle": "Open the door" becomes "Let the door be opened". Polite requests take a different shape — "Please help me" becomes "You are requested to help me".',
    },
    {
      q: 'What changes when I report speech?',
      a: 'Three things, in this order: the pronouns shift to the reporter\'s point of view, the tense backshifts one step into the past, and words of time and place change — now becomes then, tomorrow becomes the next day, here becomes there. Universal truths are the exception and keep their tense.',
    },
    {
      q: 'Is a collective noun singular or plural?',
      a: 'Singular when the body acts as one — "the committee has decided" — and plural when its members act separately — "the jury were divided in their opinion". Papers set both, and the plural use is often the correct answer for a "no error" option.',
    },
  ],

  related: [
    { label: 'Error Detection', to: '/study-material/english/error-detection/' },
    { label: 'Cloze Test', to: '/study-material/english/cloze-test/' },
    { label: 'Vocabulary', to: '/study-material/english/vocabulary/' },
    { label: 'Reading Comprehension', to: '/study-material/english/reading-comprehension/' },
    { label: 'Para Jumbles', to: '/study-material/english/para-jumbles/' },
    { label: 'All English', to: '/study-material/english/' },
  ],
}
