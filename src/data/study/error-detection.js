/**
 * Error Detection — /study-material/english/error-detection/
 *
 * The applied half of the grammar page. The spine here is the eight-point
 * scan: a fixed order in which to interrogate a sentence, so that finding the
 * error becomes a procedure rather than a matter of whether something "sounds
 * wrong" — which, for most Indian candidates, it will not, because the error
 * is usually something everyone around them says.
 */
export default {
  subject: 'english',
  subjectName: 'English',
  slug: 'error-detection',
  title: 'Error Detection',
  seoTitle: 'Error Detection & Sentence Correction for SSC and Bank Exams | Practice',
  metaDescription:
    'Complete Error Detection study material for SSC, banking and state exams — the eight-point scan order, agreement, tense, preposition.',
  readMinutes: 18,
  lead: [
    'Error detection is where the grammar you know gets tested against the English you speak, and those two are not the same thing. "Discuss about the matter", "returned back", "one of my friend", "cope up with" — every one of these is standard in everyday Indian usage and every one is an error in an exam paper. Waiting for a sentence to sound wrong will not work.',
    'What works is a scan: a fixed order in which you interrogate each sentence, so that the error is found by procedure rather than by ear. This page teaches that order, then works through the seven error families it uncovers, and finishes with the question everybody gets wrong for the opposite reason — the sentence where the answer really is "no error".',
  ],

  weightage: [
    { exam: 'SSC CGL Tier 1', count: '2–4 questions', note: 'Spot the error and sentence improvement, usually two of each.' },
    { exam: 'SSC CGL Tier 2', count: '6–10 questions', note: 'Longer sentences, with more than one plausible-looking part.' },
    { exam: 'Banking Prelims (IBPS / SBI)', count: '3–5 questions', note: 'Error spotting or the newer phrase-replacement format.' },
    { exam: 'Banking & Insurance Mains', count: '4–6 questions', note: 'Often disguised as word swap, word usage or sentence improvement.' },
    { exam: 'State PSC & Police exams', count: '3–6 questions', note: 'The classic four-part format with a "no error" option.' },
  ],

  contents: [
    { icon: 'doc', title: 'The question formats', sub: 'Four wrappers, one skill', href: '#formats' },
    { icon: 'target', title: 'The eight-point scan', sub: 'The order to check things in', href: '#scan' },
    { icon: 'layers', title: 'Agreement errors', sub: 'Where the subject hides', href: '#agreement' },
    { icon: 'clock', title: 'Tense errors', sub: 'Time markers that give it away', href: '#tense' },
    { icon: 'globe', title: 'Preposition errors', sub: 'Wrong ones and superfluous ones', href: '#prepositions' },
    { icon: 'user', title: 'Pronoun and modifier errors', sub: 'Case, reference and placement', href: '#pronoun' },
    { icon: 'refresh', title: 'Redundancy and word order', sub: 'The SSC favourite', href: '#redundancy' },
    { icon: 'check', title: 'When there is no error', sub: 'The option candidates never pick', href: '#no-error' },
    { icon: 'bell', title: 'Solved examples', sub: 'Ten sentences diagnosed line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'formats',
      heading: 'The question formats',
      eyebrow: 'Four wrappers, one skill',
      intro:
        'Papers present this topic in several ways, and all of them test the same thing. Recognising the format only changes what you do with the answer once you have found the error.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Spot the error',
              'The sentence is split into three or four labelled parts and you name the faulty one. A fifth option, "No error", is often included — and is correct more often than candidates believe.',
            ],
            [
              'Sentence improvement',
              'One phrase is underlined and you choose the best replacement. "No improvement" appears as an option and follows the same logic as "no error".',
            ],
            [
              'Choose the correct sentence',
              'Four complete sentences, one grammatical. Faster to solve backwards: find the error in three of them rather than trying to certify the fourth.',
            ],
            [
              'Phrase replacement and word swap',
              'The banking versions. Phrase replacement is sentence improvement under another name; word swap gives you a sentence in which two words have exchanged places, and asks you to put them back.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Choose the correct sentence is an elimination question',
          text:
            'When four full sentences are offered, do not try to verify the right one — verifying takes far longer than falsifying. Run the scan on each option only until you hit an error, then move to the next. Three quick disqualifications leave the answer standing without your ever having to prove it correct.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'scan',
      heading: 'The eight-point scan',
      eyebrow: 'Learn this properly',
      intro:
        'This is the whole method. Run the eight checks in this order on every sentence, and stop at the first one that fails. The order matters — the earlier checks catch the commonest errors, so most sentences are settled in the first three.',
      blocks: [
        {
          type: 'table',
          caption: 'The scan, in order',
          head: ['Check', 'What to look at', 'The error it catches'],
          rows: [
            ['1. Subject and verb', 'Find the real subject, ignoring everything between it and the verb', 'The quality of the mangoes WERE not good'],
            ['2. Tense', 'Find the time marker — since, for, ago, by the time, when', 'I AM LIVING here since 2015'],
            ['3. Prepositions', 'Check every one, and check for ones that should not be there', 'Discuss ABOUT the matter; superior THAN me'],
            ['4. Pronouns', 'Every pronoun needs an antecedent and the right case', 'Between you and I; one should do HIS duty'],
            ['5. Articles', 'a versus an by sound; missing or superfluous "the"', 'He is AN university student'],
            ['6. Parallelism', 'Items in a list must share a grammatical form', 'He likes reading, writing and TO SWIM'],
            ['7. Redundancy', 'Any word that repeats meaning already present', 'RETURNED BACK; more BETTER; repeat AGAIN'],
            ['8. Adjective and adverb forms', 'Comparatives, superlatives, adverbs modifying verbs', 'He runs QUICK; the MOST tallest boy'],
          ],
        },
        {
          type: 'note',
          title: 'Why the order is what it is',
          text:
            'Agreement, tense and prepositions between them account for the majority of errors set in Indian competitive exams. Running them first means most sentences are decided in ten seconds, which leaves time for the ones that need all eight checks. Running the checks in a different order costs nothing in accuracy and a great deal in time.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'agreement',
      heading: 'Agreement errors',
      eyebrow: 'Check one',
      intro:
        'The examiner separates the subject from its verb with a phrase, and the eye agrees with the nearest noun. The fix is mechanical: cross out everything between the subject and the verb before you judge.',
      blocks: [
        {
          type: 'formula',
          title: 'What to cross out before deciding',
          items: [
            { expr: 'Any "of" phrase after the subject', note: 'The quality OF THE MANGOES was not good. The subject is quality, not mangoes.' },
            { expr: 'Anything between commas', note: 'The captain, ALONG WITH HIS PLAYERS, was felicitated.' },
            { expr: 'Any relative clause', note: 'The boy WHO WON THE PRIZES is my cousin.' },
            { expr: 'Then check "each", "every", "one of", "neither" and "the number of"', note: 'All singular. "A number of" and "one of the … who" are the plural exceptions.' },
            { expr: 'And check whether the subject only looks plural', note: 'News, mathematics, physics and economics take singular verbs; scissors and trousers take plural ones.' },
          ],
        },
        {
          type: 'example',
          q: 'Find the error: "One of my friend is working as a software engineer in Bengaluru."',
          steps: [
            'The verb "is" is correct — the subject is "one", which is singular.',
            'But "one of" must be followed by a plural noun, because you are picking one out of a group.',
            'The error is therefore in the noun, not in the verb — which is exactly what the sentence is designed to disguise.',
          ],
          answer: 'One of my FRIENDS is working as a software engineer in Bengaluru.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'tense',
      heading: 'Tense errors',
      eyebrow: 'Check two',
      intro:
        'Tense errors are the easiest family to catch because the sentence almost always contains the word that decides the answer. Find that word first.',
      blocks: [
        {
          type: 'table',
          caption: 'The marker, and the error it exposes',
          head: ['Marker in the sentence', 'Required tense', 'The error examiners set'],
          rows: [
            ['since 2015 / for five years', 'present perfect continuous', 'I AM LIVING here since 2015'],
            ['before / by the time + past', 'past perfect for the earlier action', 'The train LEFT before I reached'],
            ['when / before / until, future sense', 'simple present, never "will"', 'I will call you when he WILL COME'],
            ['scarcely / hardly … ', 'must be completed by "when"', 'Scarcely had he left THAN the phone rang'],
            ['no sooner …', 'must be completed by "than"', 'No sooner had he left WHEN the phone rang'],
            ['a universal truth in reported speech', 'no backshift', 'He said that water BOILED at 100 degrees'],
            ['if-clause of a third conditional', 'had + past participle', 'If I WOULD HAVE known, I would have helped'],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'prepositions',
      heading: 'Preposition errors',
      eyebrow: 'Check three',
      intro:
        'Two different errors live here — the wrong preposition, and a preposition that should not be there at all. The second is more common in Indian papers, because the superfluous ones are standard in speech.',
      blocks: [
        {
          type: 'table',
          caption: 'The superfluous preposition — the most-set error in the topic',
          head: ['Wrong', 'Correct', 'Note'],
          rows: [
            ['discuss about the matter', 'discuss the matter', 'Also describe, resemble, order, emphasise, attack.'],
            ['comprises of four parts', 'comprises four parts', 'But "consists of" and "is composed of" are correct.'],
            ['reached at the station', 'reached the station', '"Arrived at the station" is correct — the verb decides.'],
            ['entered into the room', 'entered the room', '"Enter into" is right for agreements and negotiations only.'],
            ['cope up with the pressure', 'cope with the pressure', 'A very common addition in speech.'],
            ['accompanied with his father', 'accompanied by his father', '"With" is used for things, "by" for people.'],
            ['married with a doctor', 'married to a doctor', 'Or simply "married a doctor".'],
          ],
        },
        {
          type: 'formula',
          title: 'The wrong-preposition pairs to check by reflex',
          items: [
            { expr: 'superior / inferior / senior / junior / prior / preferable — all take "to"', note: 'Never "than". This single group appears in nearly every SSC paper.' },
            { expr: 'prefer X to Y', note: 'But "would rather X than Y".' },
            { expr: 'die of a disease, die from an injury', note: 'And "die for a cause".' },
            { expr: 'angry with a person, angry at a thing', note: 'Similarly "annoyed with" and "annoyed at".' },
            { expr: 'congratulate on, thank for, apologise for, insist on, depend on, deprive of', note: 'Fixed pairs — there is nothing to reason out, only to recall.' },
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'pronoun',
      heading: 'Pronoun and modifier errors',
      eyebrow: 'Checks four and six',
      intro:
        'Pronouns fail on case or on reference; modifiers fail on placement. Both are easy to see once you know to look, and almost invisible if you do not.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The wrong case after a preposition',
              '"Between you and I" is the most common example in the language. After between, for, to and with, use me, him, her, us and them.',
            ],
            [
              '"One" continued as "he"',
              '"One should do his duty" must be "one should do one\'s duty". A favourite in SSC papers because the sentence reads perfectly naturally.',
            ],
            [
              'A pronoun with no clear antecedent',
              'When a sentence names two people and then says "he", the sentence is faulty even though nothing is technically ungrammatical. Sentence-improvement questions test this more than error-spotting ones.',
            ],
            [
              '"Their" after a singular indefinite',
              '"Each of the boys submitted their assignment" — exam English requires "his". This is one of the places where the paper is stricter than modern usage.',
            ],
            [
              'The dangling participle',
              'An opening -ing or -ed phrase attaches to the noun immediately after the comma. "Walking down the road, a snake crossed my path" puts the snake on foot. Whenever a sentence opens with such a phrase, check the noun that follows.',
            ],
            [
              'The misplaced "only"',
              '"He only eats vegetables" and "he eats only vegetables" mean different things. Sentence-improvement questions use this constantly — place "only" immediately before the word it limits.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'redundancy',
      heading: 'Redundancy and word order',
      eyebrow: 'Check seven',
      intro:
        'A redundant word repeats meaning the sentence already contains. These are the most reliably scoring errors in SSC papers, because the list is short and it repeats.',
      blocks: [
        {
          type: 'table',
          caption: 'Redundancies examiners set',
          head: ['Wrong', 'Correct', 'Why'],
          rows: [
            ['returned back', 'returned', 'Return already means to come back.'],
            ['revert back', 'revert', 'Same reason.'],
            ['repeat again', 'repeat', 'Repeat already means to do again.'],
            ['more better / most best', 'better / best', 'A comparative cannot be compared twice.'],
            ['ascend up / descend down', 'ascend / descend', 'The direction is inside the verb.'],
            ['join together', 'join', 'Joining is by definition together.'],
            ['final conclusion', 'conclusion', 'A conclusion is already final.'],
            ['past history', 'history', 'History is already past.'],
            ['new innovation', 'innovation', 'An innovation is by definition new.'],
            ['the reason is because', 'the reason is that', '"Because" repeats the idea of "reason".'],
            ['sufficient enough', 'sufficient', 'Both words say the same thing.'],
            ['return the book back', 'return the book', 'The commonest of the whole family.'],
          ],
        },
        {
          type: 'note',
          title: 'Word order errors',
          text:
            'Two patterns recur. First, adverbs of frequency go before the main verb but after "be": "he always comes late", but "he is always late". Second, in reported questions the word order becomes statement order — "he asked why I was late", never "he asked why was I late". Both look correct to an ear trained on spoken English, which is exactly why they are set.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'no-error',
      heading: 'When there is no error',
      eyebrow: 'The option nobody picks',
      intro:
        'Roughly one question in six or seven has no error at all, and it is the least-chosen correct option in the whole English section — because a candidate who has spent thirty seconds searching feels obliged to find something.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Correct sentences that look wrong',
              '"The jury were divided in their opinion" is right, because the members are acting individually. "Neither of them is coming" is right, because "neither" is singular. Both feel odd, and both are set as "no error" questions.',
            ],
            [
              'Run the scan, then stop',
              'If all eight checks pass, mark "no error" and move on. Reading the sentence a fourth time will not reveal anything the scan missed; it will only make an acceptable phrasing start to sound strange.',
            ],
            [
              'Distinguish awkward from wrong',
              'Exam sentences are often clumsily written. Clumsy is not an error. The question is whether a rule has been broken, not whether you would have phrased it that way.',
            ],
            [
              'Do not mark a part just because it is unfamiliar',
              'Unusual vocabulary and formal constructions attract suspicion unfairly. "He is possessed of considerable ability" is correct English, however rarely you meet it.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Find the error: "The quality of the mangoes were not good and hence they were returned."',
      steps: [
        'Cross out the "of" phrase: the quality … was.',
        'The subject is "quality", which is singular; "mangoes" is only the object of a preposition.',
        'The plural verb has agreed with the nearest noun instead of the subject.',
      ],
      answer: 'The quality of the mangoes WAS not good.',
    },
    {
      q: 'Find the error: "He returned back from Delhi yesterday after completing his work."',
      steps: [
        'Agreement and tense are both sound — "returned" matches "yesterday".',
        'Check three finds no preposition problem.',
        'Check seven does: "return" already contains the sense of coming back.',
      ],
      answer: 'He RETURNED from Delhi yesterday.',
    },
    {
      q: 'Find the error: "He is superior than me in mathematics."',
      steps: [
        'The subject and verb agree, and the tense is fine.',
        'Check three: "superior" belongs to the Latin comparative group.',
        'Superior, inferior, senior, junior, prior and preferable all take "to".',
      ],
      answer: 'He is superior TO me in mathematics.',
    },
    {
      q: 'Find the error: "I am living in this city since 2015."',
      steps: [
        '"Since 2015" marks an action that began in the past and continues now.',
        'The present continuous cannot express that.',
        'The required form is the present perfect continuous.',
      ],
      answer: 'I HAVE BEEN LIVING in this city since 2015.',
    },
    {
      q: 'Find the error: "Each of the boys have submitted their assignment on time."',
      steps: [
        '"Each" is singular, so the verb must be "has".',
        'The pronoun must match as well, which makes "their" wrong in exam English.',
        'Both errors sit in the same part of the sentence, which is how the question is built.',
      ],
      answer: 'Each of the boys HAS submitted HIS assignment on time.',
    },
    {
      q: 'Find the error: "He said me that he would come to the office on Monday."',
      steps: [
        '"Say" does not take an indirect object without "to".',
        'Either "said to me" or "told me" is correct; "said me" is neither.',
        'The rest of the sentence — the backshift to "would" — is right.',
      ],
      answer: 'He TOLD ME that he would come to the office on Monday.',
    },
    {
      q: 'Find the error: "The number of students in the class are fifty this year."',
      steps: [
        'The subject is "the number", not "students".',
        '"The number of" is always singular; it is "a number of" that takes a plural verb.',
      ],
      answer: 'The number of students in the class IS fifty this year.',
    },
    {
      q: 'Find the error: "The reason why he failed is because he did not prepare well."',
      steps: [
        'The sentence has already said "the reason".',
        '"Because" then says it a second time.',
        'The correct completion of "the reason is" is a noun clause introduced by "that".',
      ],
      answer: 'The reason why he failed is THAT he did not prepare well.',
    },
    {
      q: 'Find the error: "She is one of the best singers who has ever performed on this stage."',
      steps: [
        'The relative clause describes the noun immediately before it.',
        'That noun is "singers", which is plural.',
        'Compare "she is the only one of the singers who HAS performed", where "the only one" makes it singular.',
      ],
      answer: 'She is one of the best singers who HAVE ever performed on this stage.',
    },
    {
      q: 'Find the error: "The jury were divided in their opinion about the verdict."',
      steps: [
        'Run the scan. The subject is "the jury" and the verb is "were" — a collective noun.',
        'A collective noun takes a plural verb when its members act individually, and being divided is precisely that.',
        'The pronoun "their" is consistent with the plural verb, and nothing else fails a check.',
      ],
      answer: 'There is no error in this sentence.',
    },
  ],

  practice: [
    {
      q: 'Find the part containing the error: "The quality of the mangoes / were not good / and hence they / were returned to the seller."',
      options: ['The quality of the mangoes', 'were not good', 'and hence they', 'were returned to the seller'],
      answer: 1,
      explain: 'The subject is "quality", which is singular. "Of the mangoes" is a prepositional phrase and cannot control the verb.',
    },
    {
      q: 'Find the part containing the error: "He returned back from Delhi / yesterday evening / after completing / his official work."',
      options: ['He returned back from Delhi', 'yesterday evening', 'after completing', 'his official work'],
      answer: 0,
      explain: '"Return" already means to come back, so "back" is redundant.',
    },
    {
      q: 'Choose the grammatically correct sentence.',
      options: [
        'One of my friend is a doctor.',
        'One of my friends are a doctor.',
        'One of my friends is a doctor.',
        'One of my friend are a doctor.',
      ],
      answer: 2,
      explain: '"One of" must be followed by a plural noun, but the subject is "one", so the verb stays singular.',
    },
    {
      q: 'Find the part containing the error: "He is superior / than me / in mathematics / and in science."',
      options: ['He is superior', 'than me', 'in mathematics', 'and in science'],
      answer: 1,
      explain: 'Superior, inferior, senior, junior, prior and preferable all take "to", never "than".',
    },
    {
      q: 'Find the part containing the error: "The teacher told the students / that they should / submit their assignments / before they will leave."',
      options: [
        'The teacher told the students',
        'that they should',
        'submit their assignments',
        'before they will leave',
      ],
      answer: 3,
      explain: 'A time clause introduced by before, when, until or as soon as takes the simple present, never "will".',
    },
    {
      q: 'Find the part containing the error: "Neither of the two brothers / are willing / to help him / in this matter."',
      options: ['Neither of the two brothers', 'are willing', 'to help him', 'in this matter'],
      answer: 1,
      explain: '"Neither" is singular and takes "is". The phrase "of the two brothers" does not affect the verb.',
    },
    {
      q: 'Choose the correct replacement for the underlined word: "Scarcely had he left the house THAN the phone rang."',
      options: ['then', 'that', 'so', 'when'],
      answer: 3,
      explain: 'Scarcely and hardly pair with "when". Only "no sooner" pairs with "than".',
    },
    {
      q: 'Find the part containing the error: "Let us discuss about the problem / in detail / before we take / a final decision."',
      options: [
        'Let us discuss about the problem',
        'in detail',
        'before we take',
        'a final decision',
      ],
      answer: 0,
      explain: 'Discuss takes its object directly — the preposition is superfluous. The same applies to describe, resemble and comprise.',
    },
    {
      q: 'Find the part containing the error: "Each of the boys / in the class / have submitted their assignment / on time."',
      options: ['Each of the boys', 'in the class', 'have submitted their assignment', 'on time'],
      answer: 2,
      explain: '"Each" is singular, so the verb must be "has" and the pronoun "his" rather than "their".',
    },
    {
      q: 'Find the part containing the error: "The jury / were divided / in their opinion about the verdict."',
      options: ['The jury', 'were divided', 'in their opinion about the verdict', 'No error'],
      answer: 3,
      explain: 'A collective noun takes a plural verb when its members act individually, and being divided is exactly that. The sentence is correct.',
    },
    {
      q: 'Find the part containing the error: "He said me / that he would come / to the office / on Monday."',
      options: ['He said me', 'that he would come', 'to the office', 'on Monday'],
      answer: 0,
      explain: '"Say" needs "to" before the listener. Either "said to me" or "told me" is correct; "said me" is neither.',
    },
    {
      q: 'Find the part containing the error: "The number of / students in the class / are fifty / this year."',
      options: ['The number of', 'students in the class', 'are fifty', 'this year'],
      answer: 2,
      explain: '"The number of" is always singular. It is "a number of" that takes a plural verb.',
    },
    {
      q: 'Find the part containing the error: "The reason why he failed / is because / he did not / prepare well."',
      options: ['The reason why he failed', 'is because', 'he did not', 'prepare well'],
      answer: 1,
      explain: '"Because" repeats the idea already carried by "the reason". The correct completion is "is that".',
    },
    {
      q: 'Choose the sentence that contains no error.',
      options: [
        'He is more taller than his brother.',
        'If I would have known, I would have helped.',
        'One should do his duty towards his country.',
        'The committee has decided to postpone the meeting.',
      ],
      answer: 3,
      explain: 'The first doubles a comparative, the second puts "would" in an if-clause, and the third continues "one" with "his". A collective noun acting as one body correctly takes a singular verb.',
    },
    {
      q: 'Find the part containing the error: "Walking down the road, / a snake / crossed / my path."',
      options: ['Walking down the road,', 'a snake', 'crossed', 'my path'],
      answer: 0,
      explain: 'The opening participial phrase attaches to the noun after the comma, so as written the snake was walking. It needs a subject or a full clause.',
    },
    {
      q: 'Find the part containing the error: "He has been / living in Delhi / for he was a child / and knows the city well."',
      options: ['He has been', 'living in Delhi', 'for he was a child', 'and knows the city well'],
      answer: 2,
      explain: '"Since" is required before a point in time such as "he was a child". "For" is used only with a length of time.',
    },
  ],

  faqs: [
    {
      q: 'How do I find the error in a sentence quickly?',
      a: 'Run a fixed scan rather than reading for what sounds wrong: subject-verb agreement, then tense, then prepositions, then pronouns, then articles, then parallelism, then redundancy, then adjective and adverb forms. Stop at the first check that fails. Agreement, tense and prepositions between them settle most sentences within ten seconds.',
    },
    {
      q: 'Why can I not just rely on what sounds correct?',
      a: 'Because many of the errors examiners set are standard in everyday Indian usage — "discuss about", "returned back", "one of my friend", "cope up with", "revert back". They sound perfectly natural, which is exactly why they are chosen. The scan is what protects you from your own ear.',
    },
    {
      q: 'What is the most commonly tested error?',
      a: 'Subject-verb agreement where a phrase separates the subject from its verb — "the quality of the mangoes were not good". The fix is mechanical: cross out every "of" phrase, everything between commas, and every relative clause before deciding on the verb.',
    },
    {
      q: 'Which prepositions should I check by reflex?',
      a: 'The "to" group first — superior, inferior, senior, junior, prior and preferable never take "than". Then check for superfluous prepositions after discuss, describe, resemble, comprise, reach, enter, cope, emphasise and accompany, which is the single largest error family in SSC papers.',
    },
    {
      q: 'What are redundancy errors?',
      a: 'A word that repeats meaning already present in the sentence — returned back, revert back, repeat again, more better, ascend up, final conclusion, past history, new innovation, the reason is because. The list is short and it repeats across years, so it is worth learning outright.',
    },
    {
      q: 'How often is "no error" the correct answer?',
      a: 'Roughly one question in six or seven, and it is the least-chosen correct option in the English section — a candidate who has spent thirty seconds searching feels obliged to find something. If all eight checks pass, mark it and move on; a fourth reading will not reveal anything the scan missed.',
    },
    {
      q: 'Is "The jury were divided" correct?',
      a: 'Yes. A collective noun takes a plural verb when its members act individually, and being divided is exactly that. The same noun takes a singular verb when the body acts as one — "the jury has reached a verdict". Both versions are set, one as an error and one as a "no error" question.',
    },
    {
      q: 'How do I spot a dangling modifier?',
      a: 'Whenever a sentence opens with an -ing or -ed phrase followed by a comma, look at the noun immediately after the comma and ask whether that noun could be doing the action. "Walking down the road, a snake crossed my path" fails the test, because the snake was not walking.',
    },
    {
      q: 'What is the fastest way to do "choose the correct sentence" questions?',
      a: 'Backwards. Verifying that a sentence is correct takes much longer than finding an error in one, so run the scan on each option only until it fails, and move on. Three quick disqualifications leave the answer standing without your having to certify it.',
    },
    {
      q: 'How many error detection questions come in SSC and bank exams?',
      a: 'SSC CGL Tier 1 usually carries two to four across error spotting and sentence improvement, and Tier 2 six to ten. Banking prelims has three to five, often as phrase replacement, and mains four to six, frequently disguised as word swap or word usage.',
    },
  ],

  related: [
    { label: 'Grammar', to: '/study-material/english/grammar/' },
    { label: 'Cloze Test', to: '/study-material/english/cloze-test/' },
    { label: 'Vocabulary', to: '/study-material/english/vocabulary/' },
    { label: 'Para Jumbles', to: '/study-material/english/para-jumbles/' },
    { label: 'Reading Comprehension', to: '/study-material/english/reading-comprehension/' },
    { label: 'All English', to: '/study-material/english/' },
  ],
}
