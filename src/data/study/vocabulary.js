/**
 * Vocabulary — /study-material/english/vocabulary/
 *
 * Built on roots and affixes rather than word lists, because a candidate with
 * six weeks cannot memorise ten thousand words but can learn sixty roots that
 * unlock several thousand. The lists that do appear here — confusable pairs,
 * idioms, spellings — are the ones examiners genuinely repeat.
 */
export default {
  subject: 'english',
  subjectName: 'English',
  slug: 'vocabulary',
  title: 'Vocabulary',
  seoTitle: 'Vocabulary for Competitive Exams | Roots, Idioms, One-Word Substitution',
  metaDescription:
    'Complete Vocabulary study material for SSC, banking and state exams — word roots, prefixes and suffixes, synonyms and antonyms, one-word substitution, idioms and phrases, commonly confused words and spelling rules, with solved examples and practice questions.',
  readMinutes: 19,
  lead: [
    'Vocabulary is the part of the English section candidates most often try to brute-force, and it is the part where brute force works least well. A ten-thousand-word list read once is worth almost nothing in an exam hall; sixty word roots learned properly will let you make a sensible guess at a word you have never seen.',
    'So this page leads with roots and affixes, and keeps lists for the places where lists genuinely are the answer — confusable pairs, idioms and spellings, all of which examiners repeat from year to year. The last section is about the part nobody teaches: what to actually do in the weeks you have.',
  ],

  weightage: [
    { exam: 'SSC CGL Tier 1', count: '6–10 questions', note: 'Synonyms, antonyms, spelling, idioms and one-word substitution together.' },
    { exam: 'SSC CGL Tier 2', count: '12–18 questions', note: 'The same categories at greater difficulty across the 45-question paper.' },
    { exam: 'SSC CHSL / MTS', count: '6–10 questions', note: 'A reliably scoring block if the confusable pairs are known.' },
    { exam: 'Banking Prelims & Mains', count: '3–8 questions', note: 'Rarely asked directly — usually embedded in cloze, word usage and word swap.' },
    { exam: 'State PSC & Police exams', count: '5–10 questions', note: 'Direct synonym, antonym and idiom questions close to the SSC pattern.' },
  ],

  contents: [
    { icon: 'target', title: 'Why roots beat word lists', sub: 'What to do with limited time', href: '#why' },
    { icon: 'book', title: 'The word roots', sub: 'Sixty roots that unlock thousands', href: '#roots' },
    { icon: 'layers', title: 'Prefixes and suffixes', sub: 'Direction, negation and category', href: '#affixes' },
    { icon: 'refresh', title: 'Synonyms and antonyms', sub: 'How the wrong options are built', href: '#synonyms' },
    { icon: 'chart', title: 'One-word substitution', sub: 'Grouped so they stay learned', href: '#one-word' },
    { icon: 'globe', title: 'Idioms and phrases', sub: 'The ones that actually recur', href: '#idioms' },
    { icon: 'bell', title: 'Words that get confused', sub: 'Pairs examiners rely on', href: '#confusables' },
    { icon: 'doc', title: 'Spelling', sub: 'Three rules and a list', href: '#spelling' },
    { icon: 'clock', title: 'How to actually build it', sub: 'A method for the weeks you have', href: '#method' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'why',
      heading: 'Why roots beat word lists',
      eyebrow: 'Start here',
      intro:
        'The arithmetic is unforgiving. A candidate who memorises twenty words a day for two months has covered about twelve hundred words, and will recall perhaps half of them under pressure. The same effort spent on roots covers far more ground.',
      blocks: [
        {
          type: 'p',
          text:
            'Take the root anthrop, meaning man. It gives you anthropology, philanthropy, misanthrope, anthropomorphic and anthropocentric. Add phil, meaning love, and you also get philosophy, philately, bibliophile and Anglophile. Two roots, ten words — and more importantly, the ability to meet an eleventh in the exam and make a good guess rather than a blind one.',
        },
        {
          type: 'note',
          title: 'What roots cannot do',
          text:
            'Roots will not help you with idioms, with confusable pairs such as stationary and stationery, or with spelling. Those need lists, and this page gives you the short ones that repeat. The point is not that lists are useless — it is that they should be reserved for the places where nothing else works, rather than being the whole strategy.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'roots',
      heading: 'The word roots',
      eyebrow: 'The highest-return page in the topic',
      intro:
        'Learn these with their examples rather than as bare definitions — the examples are what make the root stick, and one of them is usually the answer.',
      blocks: [
        {
          type: 'table',
          caption: 'Roots that appear repeatedly in exam vocabulary',
          head: ['Root', 'Meaning', 'Words built on it'],
          rows: [
            ['bene', 'good, well', 'benefit, benevolent, benefactor, benign, beneficiary'],
            ['mal', 'bad, ill', 'malice, malign, malnutrition, malady, malevolent'],
            ['anthrop', 'man, mankind', 'anthropology, philanthropy, misanthrope'],
            ['phil', 'love, fondness', 'philosophy, bibliophile, philately, Anglophile'],
            ['chron', 'time', 'chronology, chronic, anachronism, synchronise'],
            ['cred', 'believe', 'credible, incredulous, credentials, creed'],
            ['dict', 'say, speak', 'predict, verdict, dictate, contradict, edict'],
            ['scrib / script', 'write', 'describe, manuscript, inscription, prescribe'],
            ['vor', 'eat', 'carnivore, herbivore, voracious, omnivorous'],
            ['ject', 'throw', 'reject, project, eject, conjecture'],
            ['omni', 'all', 'omnipotent, omniscient, omnipresent, omnivorous'],
            ['soph', 'wisdom', 'philosophy, sophisticated, sophistry'],
            ['theo', 'god', 'theology, atheist, monotheism, theocracy'],
            ['pod / ped', 'foot', 'tripod, pedestrian, pedal, expedite'],
            ['bio', 'life', 'biology, biography, antibiotic, symbiosis'],
            ['graph / gram', 'write, draw', 'autograph, telegram, cartography, epigram'],
            ['loqu / locu', 'speak', 'eloquent, soliloquy, loquacious, colloquial'],
            ['viv / vit', 'life', 'vivacious, revive, vital, survive'],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'affixes',
      heading: 'Prefixes and suffixes',
      eyebrow: 'Direction and category',
      intro:
        'A prefix usually tells you the direction or the polarity of a word; a suffix usually tells you what kind of thing it is. Between them they let you place an unfamiliar word even when the root is unclear.',
      blocks: [
        {
          type: 'table',
          caption: 'Prefixes worth knowing cold',
          head: ['Prefix', 'Meaning', 'Examples'],
          rows: [
            ['a- / an-', 'without', 'atheist, amoral, anarchy, anonymous'],
            ['ante-', 'before', 'antecedent, antedate, antechamber'],
            ['anti-', 'against', 'antibiotic, antithesis, antipathy'],
            ['circum-', 'around', 'circumference, circumnavigate, circumspect'],
            ['eu-', 'good, pleasant', 'eulogy, euphemism, euphoria, eugenics'],
            ['hyper- / hypo-', 'above / below', 'hyperbole and hypertension against hypothermia and hypothesis'],
            ['mono- / bi- / poly-', 'one / two / many', 'monopoly, bilingual, polyglot, polygamy'],
            ['pseudo-', 'false', 'pseudonym, pseudoscience'],
            ['retro-', 'backward', 'retrospect, retrograde, retroactive'],
          ],
        },
        {
          type: 'table',
          caption: 'Suffixes that name a category',
          head: ['Suffix', 'Meaning', 'Examples'],
          rows: [
            ['-cide', 'killing', 'homicide, genocide, patricide, fratricide, regicide'],
            ['-archy', 'rule by', 'monarchy, oligarchy, anarchy, matriarchy'],
            ['-cracy', 'government by', 'democracy, autocracy, bureaucracy, theocracy'],
            ['-logy', 'the study of', 'ornithology, etymology, geology, pathology'],
            ['-phobia', 'fear of', 'hydrophobia, claustrophobia, xenophobia'],
            ['-phile', 'one who loves', 'bibliophile, Francophile, audiophile'],
            ['-ous / -ious', 'full of (adjective)', 'voracious, courageous, ambitious'],
          ],
        },
        {
          type: 'note',
          title: 'Ante- and anti- are not the same prefix',
          text:
            'Ante- means before in time — an antecedent comes first, an antechamber is the room you wait in before the main one. Anti- means against — an antidote works against a poison. Examiners set them as a pair precisely because the spellings differ by one letter, and a candidate who reads quickly will not notice which one is on the page.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'synonyms',
      heading: 'Synonyms and antonyms',
      eyebrow: 'Read the options first',
      intro:
        'The word itself is only half the question. The four options are constructed to a pattern, and knowing that pattern turns a word you half-know into a mark.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The near-miss option',
              'A word that shares the general area but not the meaning. For "meticulous" the option "cautious" is in the right neighbourhood and still wrong — meticulous is about detail, cautious about risk. Whenever two options feel close, ask which one matches the exact sense rather than the mood.',
            ],
            [
              'The opposite planted in a synonym question',
              'Antonym and synonym questions look identical on the page, and papers place the direct opposite among the options of both. Read the instruction line before the word, every single time.',
            ],
            [
              'The sound-alike',
              'For "ingenuous" the option "ingenious" will be there. For "credulous" you will find "credible". These pairs are the entire question — see the confusable-words section below.',
            ],
            [
              'The right register, wrong strength',
              'For "furious" an option such as "annoyed" is the same emotion at the wrong intensity. Antonym questions exploit this hardest: the opposite of "sceptical" is "credulous" or "convinced", not merely "calm".',
            ],
            [
              'When you do not know the word at all',
              'Break it up. In-cred-ulous is not-believe-full-of, so it means unwilling to believe. Even a rough decomposition usually eliminates two options, which changes the odds enough to be worth attempting.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'one-word',
      heading: 'One-word substitution',
      eyebrow: 'Learn in groups',
      intro:
        'These stay learned when they are grouped by theme and forgotten when they are learned alphabetically. Here are the groups examiners return to.',
      blocks: [
        {
          type: 'table',
          caption: 'People, grouped by what defines them',
          head: ['Definition', 'Word', 'Related words in the same group'],
          rows: [
            ['One who loves and helps mankind', 'Philanthropist', 'Misanthrope — one who hates mankind'],
            ['One who knows many languages', 'Polyglot', 'Bilingual, linguist'],
            ['One who does not believe in God', 'Atheist', 'Agnostic — one who holds that God cannot be known; theist'],
            ['One who cannot be corrected', 'Incorrigible', 'Incorruptible, indefatigable — one who never tires'],
            ['One who is unable to pay debts', 'Insolvent', 'Bankrupt, pauper'],
            ['One who collects stamps', 'Philatelist', 'Numismatist — one who collects coins'],
            ['One who talks in their sleep', 'Somniloquist', 'Somnambulist — one who walks in their sleep'],
            ['One who does something for pleasure, not pay', 'Amateur', 'Connoisseur — an expert judge in matters of taste'],
          ],
        },
        {
          type: 'table',
          caption: 'Things, places and studies',
          head: ['Definition', 'Word', 'Related words in the same group'],
          rows: [
            ['A medicine that cures all diseases', 'Panacea', 'Antidote — a remedy against poison'],
            ['A speech made without preparation', 'Extempore', 'Eulogy — a speech of praise; elegy — a poem of mourning'],
            ['Words written on a tomb', 'Epitaph', 'Epigram — a short witty saying; epilogue — a closing section'],
            ['A place where coins are made', 'Mint', 'Armoury — where weapons are stored; granary — where grain is stored'],
            ['The study of birds', 'Ornithology', 'Entomology — insects; etymology — word origins'],
            ['A government by the people', 'Democracy', 'Autocracy, oligarchy, theocracy'],
            ['An animal that eats both plants and flesh', 'Omnivorous', 'Carnivorous, herbivorous'],
            ['Something no longer in use', 'Obsolete', 'Archaic, defunct'],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'idioms',
      heading: 'Idioms and phrases',
      eyebrow: 'A finite list',
      intro:
        'Idioms cannot be worked out from their parts, which is why they must be learned — but the set that appears in exams is small and repeats heavily.',
      blocks: [
        {
          type: 'table',
          caption: 'Idioms that recur in SSC and state papers',
          head: ['Idiom', 'Meaning', 'Used in a sentence'],
          rows: [
            ['To beat about the bush', 'To avoid coming to the point', 'Stop beating about the bush and tell me the cost.'],
            ['To let the cat out of the bag', 'To reveal a secret unintentionally', 'He let the cat out of the bag about the surprise party.'],
            ['To smell a rat', 'To suspect something is wrong', 'When the accounts did not match, she smelt a rat.'],
            ['To turn a deaf ear', 'To refuse to listen', 'The management turned a deaf ear to their demands.'],
            ['To burn the midnight oil', 'To work late into the night', 'He burnt the midnight oil before the exam.'],
            ['A wild goose chase', 'A hopeless and futile search', 'Following that lead was a wild goose chase.'],
            ['A white elephant', 'A costly possession that is of no use', 'The unused stadium became a white elephant.'],
            ['To make both ends meet', 'To manage on a limited income', 'On that salary he struggles to make both ends meet.'],
            ['At one\'s wits\' end', 'Utterly perplexed, out of ideas', 'After the third failure she was at her wits\' end.'],
            ['In the nick of time', 'Just in time, at the last possible moment', 'The ambulance arrived in the nick of time.'],
            ['To bury the hatchet', 'To make peace after a quarrel', 'The two families finally buried the hatchet.'],
            ['Once in a blue moon', 'Very rarely', 'He visits his home town once in a blue moon.'],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'confusables',
      heading: 'Words that get confused',
      eyebrow: 'Where the marks hide',
      intro:
        'These pairs produce more questions per word than any other part of the vocabulary syllabus, because a single letter separates two entirely different meanings.',
      blocks: [
        {
          type: 'table',
          caption: 'Pairs examiners use again and again',
          head: ['Pair', 'The difference', 'A sentence that fixes it'],
          rows: [
            ['affect / effect', 'affect is the verb, effect the noun', 'The rain will affect the crop; the effect was severe.'],
            ['principal / principle', 'principal is chief or a head; principle is a rule', 'The principal explained the principle behind the rule.'],
            ['stationary / stationery', 'stationary means not moving; stationery is writing material', 'The stationery van stood stationary outside.'],
            ['complement / compliment', 'complement completes; compliment praises', 'The scarf complements her dress, and he paid her a compliment.'],
            ['advice / advise', 'advice is the noun, advise the verb', 'I advise you to take my advice.'],
            ['lose / loose', 'lose is to misplace; loose means not tight', 'Do not lose the loose change.'],
            ['eminent / imminent', 'eminent means distinguished; imminent means about to happen', 'The eminent scientist warned of an imminent crisis.'],
            ['credible / credulous / creditable', 'believable / too willing to believe / praiseworthy', 'A credible witness, a credulous audience, a creditable performance.'],
            ['ingenious / ingenuous', 'clever / innocent and frank', 'An ingenious solution from an ingenuous young man.'],
            ['economic / economical', 'relating to the economy / thrifty', 'Economic policy versus an economical car.'],
            ['childish / childlike', 'immature, said as criticism / innocent, said with warmth', 'Childish sulking against childlike wonder.'],
            ['historic / historical', 'important in history / relating to history', 'A historic verdict in a historical drama.'],
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'spelling',
      heading: 'Spelling',
      eyebrow: 'Rules, then a list',
      intro:
        'Three rules cover a good share of spelling questions, and the rest is a list of words that examiners genuinely repeat.',
      blocks: [
        {
          type: 'formula',
          title: 'The three rules',
          items: [
            { expr: 'i before e, except after c — when the sound is "ee"', note: 'Believe, achieve, relieve; but receive, deceive, ceiling. Exceptions such as seize and weird have to be learned.' },
            { expr: 'Only three words end in -ceed; one ends in -sede; the rest use -cede', note: 'Proceed, exceed and succeed. Supersede. Then precede, recede, concede, intercede.' },
            { expr: 'Double the final consonant before -ing or -ed when the last syllable is stressed', note: 'Begin becomes beginning, refer becomes referred; but benefit becomes benefited, because the stress is on the first syllable.' },
          ],
        },
        {
          type: 'table',
          caption: 'The words most often set as spelling questions',
          head: ['Correct spelling', 'The usual mistake', 'What to remember'],
          rows: [
            ['accommodation', 'accomodation', 'Two c and two m.'],
            ['occurrence', 'occurence', 'Two c and two r.'],
            ['embarrass', 'embarass', 'Two r and two s.'],
            ['harass', 'harrass', 'One r, two s — the opposite of embarrass.'],
            ['necessary', 'neccessary', 'One c, two s.'],
            ['separate', 'seperate', 'There is "a rat" in sepARATe.'],
            ['privilege', 'priviledge', 'No d anywhere in it.'],
            ['maintenance', 'maintainance', 'The verb is maintain, but the noun drops the i.'],
            ['questionnaire', 'questionaire', 'Two n.'],
            ['liaison', 'liason', 'Two i, with an a between them.'],
            ['committee', 'commitee', 'Two m, two t, two e.'],
            ['millennium', 'millenium', 'Two l and two n.'],
          ],
        },
      ],
    },

    /* ── 9 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'How to actually build it',
      eyebrow: 'The part nobody teaches',
      intro:
        'Vocabulary is the only English topic that rewards daily work more than intensive work. A method that takes fifteen minutes a day beats a weekend spent with a word list.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Learn a word in a sentence, never alone',
              'A word held in a sentence survives; a word held as a definition does not. Write your own sentence rather than copying the one in the book — the effort of composing it is what fixes the meaning.',
            ],
            [
              'Keep a small book, not a large one',
              'Five to eight new words a day, revisited on days two, seven and twenty-one. That schedule is worth more than fifty words seen once, because forgetting happens on a curve and revision has to meet it.',
            ],
            [
              'Read one editorial a day and mine it',
              'Newspaper editorials are the source examiners themselves draw on for cloze passages and comprehension. Take three unfamiliar words from each and you have a syllabus that renews itself.',
            ],
            [
              'Learn confusable pairs together, never apart',
              'Stationary and stationery must be learned in the same minute or they will be confused forever. The same goes for eminent and imminent, credible and credulous, ingenious and ingenuous.',
            ],
            [
              'Practise in the exam format, not as flashcards',
              'Recognising a word is easier than choosing between four options that all look plausible. Do the question type you will actually face, and do it against a clock.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Deduce the meaning of BENEVOLENT without a dictionary.',
      steps: [
        'Split it: bene + vol + ent.',
        '"Bene" means good — as in benefit and benefactor.',
        '"Vol" means to wish or will — as in volition and voluntary.',
        'So the word describes someone who wishes well.',
      ],
      answer: 'Kind, well-meaning, generous towards others.',
    },
    {
      q: 'Deduce the meaning of MISANTHROPE.',
      steps: [
        'Split it: mis + anthrop + e.',
        '"Mis" here means hatred, as in misogyny.',
        '"Anthrop" means mankind, as in anthropology.',
      ],
      answer: 'One who hates or distrusts mankind — the opposite of a philanthropist.',
    },
    {
      q: 'Distinguish INCREDIBLE from INCREDULOUS.',
      steps: [
        'Both share cred, meaning believe, and in-, meaning not.',
        'The suffix -ible describes the thing: capable of being believed. So incredible means not believable.',
        'The suffix -ulous describes the person: full of the quality. So incredulous means unwilling to believe.',
      ],
      answer: 'An incredible story is told to an incredulous listener.',
    },
    {
      q: 'What is the one word for "a person who knows and speaks many languages"?',
      steps: [
        '"Poly" means many, as in polygamy and polytechnic.',
        '"Glot" relates to tongue or language, as in glottal.',
        'A bilingual person speaks two; the word for many is built the same way.',
      ],
      answer: 'Polyglot.',
    },
    {
      q: 'What is the one word for "a medicine that is claimed to cure all diseases"?',
      steps: [
        'An antidote works against one specific poison, so it is too narrow.',
        'A placebo has no active effect at all, which is the wrong idea entirely.',
        'The word required is the Greek term for a universal remedy.',
      ],
      answer: 'Panacea.',
    },
    {
      q: 'Explain the idiom "to make both ends meet".',
      steps: [
        'The image is of income at one end and expenditure at the other.',
        'Making them meet is covering what you spend with what you earn.',
        'It is used of someone whose income barely stretches, not of someone who is wealthy.',
      ],
      answer: 'To manage to live within a limited income.',
    },
    {
      q: 'Choose between AFFECT and EFFECT: "The new policy will ___ thousands of workers, and its ___ will be felt for years."',
      steps: [
        'The first blank needs a verb, and affect is the verb meaning to influence.',
        'The second blank follows "its" and needs a noun, and effect is the noun meaning result.',
        'The rare exception — "to effect a change", meaning to bring one about — does not apply here.',
      ],
      answer: 'affect … effect.',
    },
    {
      q: 'Which is correct: proceed, procede or prosede?',
      steps: [
        'Only three English words end in -ceed: proceed, exceed and succeed.',
        'Only one ends in -sede: supersede.',
        'Everything else in the family — precede, recede, concede — uses -cede.',
      ],
      answer: 'Proceed.',
    },
    {
      q: 'Find the antonym of CANDID.',
      steps: [
        'Candid means frank and open in speech.',
        'Options such as "honest" and "direct" are synonyms, planted to catch a candidate who has not read the instruction line.',
        'The true opposite describes someone who avoids speaking plainly.',
      ],
      answer: 'Evasive.',
    },
    {
      q: 'Distinguish EMINENT from IMMINENT.',
      steps: [
        'Eminent shares its root with "prominent" — standing out, distinguished.',
        'Imminent shares its root with "impend" — hanging over, about to happen.',
        'A useful test sentence keeps both: the eminent scientist warned of an imminent crisis.',
      ],
      answer: 'Eminent means distinguished; imminent means about to occur.',
    },
  ],

  practice: [
    {
      q: 'Choose the word most similar in meaning to BENEVOLENT.',
      options: ['Cruel', 'Kind-hearted', 'Wealthy', 'Talkative'],
      answer: 1,
      explain: 'Bene means good and vol means to wish, so a benevolent person is one who wishes others well.',
    },
    {
      q: 'Choose the word most opposite in meaning to FRUGAL.',
      options: ['Extravagant', 'Thrifty', 'Careful', 'Modest'],
      answer: 0,
      explain: 'Frugal means sparing with money. Thrifty and careful are synonyms planted to catch a misread instruction line.',
    },
    {
      q: 'One who loves mankind and works for its welfare is a:',
      options: ['Misanthrope', 'Philatelist', 'Philanthropist', 'Philologist'],
      answer: 2,
      explain: 'Phil means love and anthrop means mankind. A philatelist collects stamps and a philologist studies language.',
    },
    {
      q: 'The idiom "to beat about the bush" means:',
      options: ['To work very hard', 'To search thoroughly', 'To speak plainly', 'To avoid coming to the point'],
      answer: 3,
      explain: 'It describes someone circling a subject instead of addressing it — the opposite of speaking plainly.',
    },
    {
      q: 'The ___ of the school addressed the students on the ___ of honesty.',
      options: ['principle … principal', 'principal … principle', 'principle … principle', 'principal … principal'],
      answer: 1,
      explain: 'Principal is the head of an institution; principle is a rule or belief.',
    },
    {
      q: 'Choose the correctly spelt word.',
      options: ['Accomodation', 'Acommodation', 'Accommodation', 'Accommadation'],
      answer: 2,
      explain: 'Accommodation carries two c and two m — one of the most frequently set spelling questions in SSC papers.',
    },
    {
      q: 'The root "chron" in words such as chronology and anachronism means:',
      options: ['Life', 'Write', 'Sound', 'Time'],
      answer: 3,
      explain: 'Chron means time, which is why a chronic illness is one that persists and a chronology orders events by date.',
    },
    {
      q: 'Choose the word most similar in meaning to EPHEMERAL.',
      options: ['Everlasting', 'Short-lived', 'Delicate', 'Mysterious'],
      answer: 1,
      explain: 'Ephemeral describes something lasting a very short time. "Everlasting" is the direct opposite.',
    },
    {
      q: 'Choose the word most opposite in meaning to CANDID.',
      options: ['Frank', 'Honest', 'Evasive', 'Direct'],
      answer: 2,
      explain: 'Candid means open and straightforward, so its opposite is evasive. The other three options are synonyms.',
    },
    {
      q: 'A medicine believed to cure all diseases is a:',
      options: ['Antidote', 'Sedative', 'Placebo', 'Panacea'],
      answer: 3,
      explain: 'A panacea is a universal remedy. An antidote counters one specific poison and a placebo has no active effect.',
    },
    {
      q: 'The idiom "to smell a rat" means:',
      options: ['To find a solution', 'To suspect something is wrong', 'To be very hungry', 'To make a careless mistake'],
      answer: 1,
      explain: 'It describes an intuition that something dishonest or wrong is going on.',
    },
    {
      q: 'He bought pens, files and registers from the ___ shop near the college.',
      options: ['stationery', 'stationary', 'stationnery', 'stationaries'],
      answer: 0,
      explain: 'Stationery with an e is writing material; stationary with an a means not moving.',
    },
    {
      q: 'The suffix "-cide", as in homicide and genocide, means:',
      options: ['Government', 'Rule', 'Killing', 'Study'],
      answer: 2,
      explain: 'It denotes killing. Rule is -archy, government is -cracy and study is -logy.',
    },
    {
      q: 'Choose the word most similar in meaning to METICULOUS.',
      options: ['Careless', 'Hasty', 'Extremely careful about detail', 'Rude'],
      answer: 2,
      explain: 'Meticulous means showing great attention to detail — note that "cautious", a common distractor, is about risk rather than detail.',
    },
    {
      q: 'A speech delivered without any previous preparation is:',
      options: ['Extempore', 'Eulogy', 'Soliloquy', 'Elegy'],
      answer: 0,
      explain: 'A eulogy praises, a soliloquy is spoken to oneself and an elegy mourns. Only extempore refers to the absence of preparation.',
    },
    {
      q: 'The phrase "a white elephant" refers to:',
      options: ['A rare animal', 'A costly but useless possession', 'A lucky charm', 'A very large gathering'],
      answer: 1,
      explain: 'It describes something expensive to keep and of no practical use — an unused stadium, for instance.',
    },
  ],

  faqs: [
    {
      q: 'What is the best way to build vocabulary for competitive exams?',
      a: 'Learn word roots and affixes rather than long alphabetical lists. Sixty roots such as bene, mal, chron, cred and anthrop unlock several thousand words and let you make a sensible guess at one you have never met. Reserve rote lists for idioms, confusable pairs and spellings, where nothing else works.',
    },
    {
      q: 'How many vocabulary questions come in SSC CGL?',
      a: 'Around six to ten in Tier 1 across synonyms, antonyms, spelling, idioms and one-word substitution, and roughly twelve to eighteen in the 45-question Tier 2 paper. Banking exams ask far fewer directly but embed vocabulary inside cloze tests and word-usage questions.',
    },
    {
      q: 'How do I remember one-word substitutions?',
      a: 'Learn them in themed groups rather than alphabetically — all the "one who" words for people together, all the "study of" words together, all the collectors together. Learning philatelist next to numismatist, or somniloquist next to somnambulist, makes both stick because each defines the other by contrast.',
    },
    {
      q: 'What is the difference between "affect" and "effect"?',
      a: 'Affect is normally the verb meaning to influence — the rain will affect the crop. Effect is normally the noun meaning result — the effect was severe. The one exception worth knowing is "to effect a change", where effect is a verb meaning to bring about.',
    },
    {
      q: 'What is the difference between "stationary" and "stationery"?',
      a: 'Stationary with an a means not moving. Stationery with an e means writing materials such as paper and pens. A useful memory hook is that stationery and paper both contain an e.',
    },
    {
      q: 'How do I tell "credible", "credulous" and "creditable" apart?',
      a: 'All three share cred, meaning believe. Credible means believable, and describes a story or a witness. Credulous means too ready to believe, and describes a person. Creditable means deserving praise, and describes a performance or an effort.',
    },
    {
      q: 'What does the "i before e except after c" rule actually cover?',
      a: 'Only the "ee" sound. It gives you believe, achieve and relieve on one side, and receive, deceive and ceiling on the other. Words such as seize, weird and their have to be learned separately, and the rule does not apply where the sound is different, as in neighbour or weigh.',
    },
    {
      q: 'How are the wrong options built in synonym questions?',
      a: 'To a pattern. There is usually a near-miss from the same general area, a sound-alike such as ingenious for ingenuous, and often the direct opposite. Because antonym and synonym questions look identical on the page, reading the instruction line before the word is worth doing every time.',
    },
    {
      q: 'How many new words should I learn each day?',
      a: 'Five to eight, revisited on days two, seven and twenty-one. That schedule beats fifty words seen once, because forgetting follows a curve and revision has to meet it. Write your own sentence for each word — composing it is what fixes the meaning.',
    },
    {
      q: 'Are idioms worth learning if only one or two questions appear?',
      a: 'Yes, because the set that actually appears is small and repeats across years and across exams. Around fifty idioms cover most of what SSC and state papers ask, which is a far better return per hour than trying to widen general vocabulary by the same amount.',
    },
  ],

  related: [
    { label: 'Grammar', to: '/study-material/english/grammar/' },
    { label: 'Cloze Test', to: '/study-material/english/cloze-test/' },
    { label: 'Reading Comprehension', to: '/study-material/english/reading-comprehension/' },
    { label: 'Error Detection', to: '/study-material/english/error-detection/' },
    { label: 'Para Jumbles', to: '/study-material/english/para-jumbles/' },
    { label: 'All English', to: '/study-material/english/' },
  ],
}
