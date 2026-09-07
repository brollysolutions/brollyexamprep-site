/**
 * Para Jumbles — /study-material/english/para-jumbles/
 *
 * Taught as a search for links rather than for meaning. Candidates who try to
 * reconstruct the author's argument are slow and often wrong; candidates who
 * chase pronouns, articles and connectors are fast and nearly always right.
 * Every worked example names the specific link that fixes each join.
 */
export default {
  subject: 'english',
  subjectName: 'English',
  slug: 'para-jumbles',
  title: 'Para Jumbles',
  seoTitle: 'Para Jumbles for Bank & SSC Exams | Sentence Rearrangement Tricks',
  metaDescription:
    'Complete Para Jumbles study material for banking, SSC and state exams — how to find the opening sentence, pronoun and article links, connectors.',
  readMinutes: 17,
  lead: [
    'Para jumbles look like a comprehension exercise and are really a puzzle. The candidates who do them quickly are not the ones who understand the paragraph best — they are the ones who stopped reading for meaning and started hunting for links: a pronoun with nothing to refer to, an article that has switched from "a" to "the", a connector that cannot begin anything.',
    'That is what this page teaches. Find the opening sentence, chain the links, use the options to kill three of the four orders, and confirm by reading the result once. Done properly the whole thing takes about ninety seconds, which is what makes it one of the best-value blocks in the English section.',
  ],

  weightage: [
    { exam: 'Banking Prelims (IBPS / SBI)', count: '4–5 questions', note: 'A full set from one jumbled paragraph, or single-sentence rearrangements.' },
    { exam: 'Banking & Insurance Mains', count: '4–5 questions', note: 'Longer paragraphs, sometimes with the first sentence fixed.' },
    { exam: 'SSC CGL Tier 1', count: '0–3 questions', note: 'Usually four sentences labelled A to D with the order asked directly.' },
    { exam: 'SSC CGL Tier 2', count: '3–5 questions', note: 'Five or six sentences, denser subject matter.' },
    { exam: 'State PSC & Police exams', count: '2–4 questions', note: 'Four-sentence sets close to the SSC pattern.' },
  ],

  contents: [
    { icon: 'target', title: 'The four-step method', sub: 'What to do, in what order', href: '#method' },
    { icon: 'play', title: 'Finding the opener', sub: 'What an opening sentence never does', href: '#opener' },
    { icon: 'layers', title: 'The link signals', sub: 'Pronouns, articles, connectors, time', href: '#links' },
    { icon: 'refresh', title: 'Mandatory pairs', sub: 'Two sentences that must be adjacent', href: '#pairs' },
    { icon: 'check', title: 'The concluding sentence', sub: 'How a paragraph signals its end', href: '#closer' },
    { icon: 'search', title: 'Using the options', sub: 'Eliminating without solving', href: '#options' },
    { icon: 'doc', title: 'The question formats', sub: 'Fixed openers, para completion, odd one out', href: '#formats' },
    { icon: 'bell', title: 'Where marks are lost', sub: 'The recurring mistakes', href: '#mistakes' },
    { icon: 'book', title: 'Solved examples', sub: 'Ten paragraphs reassembled step by step', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'method',
      heading: 'The four-step method',
      eyebrow: 'Start here',
      intro:
        'The same four steps solve every para jumble, and they are worth following in order even when the answer seems obvious — because the obvious answer is what the distractor options are built to be.',
      blocks: [
        {
          type: 'formula',
          title: 'The four steps',
          items: [
            { expr: '1. Read all the sentences once, quickly, for the topic', note: 'You are not trying to reconstruct the argument yet. You want to know what the paragraph is about, so that pronouns and repeated nouns mean something when you meet them.' },
            { expr: '2. Find the opening sentence', note: 'Usually there is exactly one candidate, and identifying it eliminates two or three options immediately.' },
            { expr: '3. Chain the links', note: 'Take each remaining sentence and ask what it needs before it — a noun for its pronoun, a claim for its "however", a general statement for its "for instance".' },
            { expr: '4. Check against the options, then read the result once', note: 'The options exist to be used. And the final read-through catches the case where two orders both seemed to work.' },
          ],
        },
        {
          type: 'note',
          title: 'Do not try to work out what the author meant',
          text:
            'A paragraph about monetary policy and a paragraph about mangroves are reassembled by exactly the same technique, and you need to understand neither subject to do it. Candidates who read for meaning slow to a crawl on unfamiliar topics; candidates who read for links finish both in the same time. If you find yourself thinking about the subject rather than the sentences, you have drifted off method.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'opener',
      heading: 'Finding the opener',
      eyebrow: 'The single highest-value step',
      intro:
        'An opening sentence has to stand on its own, because there is nothing before it to lean on. That gives you a checklist of things it can never do.',
      blocks: [
        {
          type: 'table',
          caption: 'What disqualifies a sentence from opening a paragraph',
          head: ['Feature', 'Why it cannot open', 'Example of a disqualified sentence'],
          rows: [
            ['Starts with a connector', 'However, therefore and moreover all point back at something', 'However, the results were disappointing.'],
            ['Starts with a pronoun', 'He, she, it, they and their need an antecedent', 'They were overruled by the state government.'],
            ['Starts with this / these / such', 'These are pointing words with nothing to point at', 'Such an approach has obvious limitations.'],
            ['Uses "the" for a first mention', 'A new thing is introduced with "a", not "the"', 'The scientist repeated the experiment.'],
            ['Answers an unasked question', 'A sentence beginning "The reason is" needs the claim first', 'The reason is not nostalgia but neurology.'],
            ['Refers to an unnamed comparison', '"The latest" or "the second" implies an earlier one', 'The latest trial involved two thousand patients.'],
          ],
        },
        {
          type: 'note',
          title: 'What the opener usually looks like',
          text:
            'A full noun subject rather than a pronoun, an indefinite article for anything being introduced, no connector at the front, and a general statement rather than a specific detail. "Solar power has become cheaper than coal across much of the world" opens a paragraph; "But the cost of storing that energy remains the real obstacle" cannot.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'links',
      heading: 'The link signals',
      eyebrow: 'What actually joins two sentences',
      intro:
        'Once the opener is fixed, each remaining join is decided by one of five signals. Learn to see them and the ordering stops being a matter of judgement.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Pronoun reference',
              'A sentence beginning "He", "They", "It" or "Their" must follow the sentence that names whoever that is. If two sentences could supply the antecedent, the nearer one wins — a writer does not leave a pronoun stranded three sentences from its noun.',
            ],
            [
              'Article progression',
              'A thing is introduced with "a" and referred to afterwards with "the". So a sentence containing "a refrigerator" comes before one containing "the refrigerator", never after. This is the quietest signal and often the decisive one.',
            ],
            [
              'Connector logic',
              'However and but need a claim to contradict. Therefore, thus and hence need a cause. For instance and for example need a general statement to illustrate. Moreover and furthermore need something to add to. Each connector tells you what kind of sentence must precede it.',
            ],
            [
              'Chronology and sequence',
              'Dates, "once", "today", "by the sixteenth century", "first" and "the latest" put sentences in order without any grammatical link at all. In a historical paragraph this is usually the strongest signal available.',
            ],
            [
              'Repeated and echoed vocabulary',
              'One sentence ends on a noun and the next picks it up — "…outnumber human beings" followed by "Their sheer number…". Writers chain paragraphs this way naturally, and jumbles preserve the chain.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'Arrange: (A) A refrigerator that reorders milk when it runs low is a simple example. (B) The internet of things refers to everyday objects connected to a network. (C) Their sheer number now raises security questions nobody anticipated. (D) Such devices already outnumber human beings on the planet.',
          steps: [
            'B is the only sentence that can open — A begins with an indefinite example that needs a definition first, C starts with "Their", and D starts with "Such devices".',
            'A follows B: it is offered as "a simple example" of what B has just defined.',
            'D follows A: "Such devices" generalises from the single refrigerator back to the class.',
            'C follows D: "Their sheer number" picks up "outnumber" from the sentence before it.',
          ],
          answer: 'B A D C.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'pairs',
      heading: 'Mandatory pairs',
      eyebrow: 'Solve in blocks',
      intro:
        'Two sentences that must sit next to each other form a block you can move as a unit. Finding one pair usually cuts the options from four to one.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Claim followed by its reversal',
              '"The rule was introduced to reduce paperwork" and "In practice, it doubled it" cannot be separated — the second sentence has no meaning without the first, and nothing can be inserted between them.',
            ],
            [
              'Statement followed by its example',
              'A general claim and the sentence beginning "For instance" belong together. If a third sentence separates them, the example loses its referent.',
            ],
            [
              'Question followed by its answer',
              'Rare but decisive. A sentence ending in a question mark is followed immediately by the sentence that responds to it.',
            ],
            [
              'A pair joined by a pronoun with a unique antecedent',
              'If only one sentence mentions the engineers, then the sentence beginning "They were overruled" must come straight after it.',
            ],
            [
              'How to use a pair',
              'Look at the four options and strike every one that separates the two sentences. In a four-sentence jumble a single confirmed pair usually leaves one option standing, and you never have to build the full order at all.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'closer',
      heading: 'The concluding sentence',
      eyebrow: 'Work from both ends',
      intro:
        'When the opener is ambiguous, the closing sentence is often obvious — and fixing the last position eliminates options just as effectively as fixing the first.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'It looks forward rather than back',
              '"If the results hold, treatment could begin within five years" is a conclusion. Nothing in the paragraph can follow a projection into the future.',
            ],
            [
              'It generalises from what came before',
              'A sentence that widens out — "Most of it is still in the environment somewhere" — sits naturally at the end of a paragraph of particulars.',
            ],
            [
              'It carries a summarising connector',
              'Thus, therefore, in short, so, consequently. These can close a paragraph and can almost never open one.',
            ],
            [
              'It resolves the tension the paragraph set up',
              'Where a paragraph raises a problem, the sentence describing the outcome or the current state of affairs is the last one.',
            ],
            [
              'A "however" sentence can close as well as join',
              '"However, it was not until the 1850s that the practice became widespread" ends a historical paragraph perfectly well. Do not assume a connector sentence belongs in the middle.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'options',
      heading: 'Using the options',
      eyebrow: 'Eliminate without solving',
      intro:
        'A para jumble is a multiple-choice question, not a free reconstruction. You are not required to build the order — only to identify which of four is right, and that is a much cheaper task.',
      blocks: [
        {
          type: 'formula',
          title: 'How to work the options',
          items: [
            { expr: 'Compare the first letters of the four options first', note: 'If three options begin with B and one with A, you only have to decide whether A can open — one judgement instead of a full ordering.' },
            { expr: 'Strike any option that separates a confirmed pair', note: 'The fastest single elimination available, and it needs no knowledge of the rest of the order.' },
            { expr: 'Strike any option ending on a sentence that cannot close', note: 'A sentence introducing a new subject with "a" cannot be last.' },
            { expr: 'If two options survive, find the one join where they differ', note: 'They will differ in exactly one place. Decide that single join rather than re-reading everything.' },
            { expr: 'Read the winning order through once before marking it', note: 'Fifteen seconds, and it catches the case where a link you assumed does not actually hold.' },
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'formats',
      heading: 'The question formats',
      eyebrow: 'Same skill, different wrapper',
      intro:
        'Papers dress this topic up in several ways. All of them are solved by the method above; only the starting information changes.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Plain rearrangement',
              'Four to six labelled sentences, four possible orders. The standard SSC and banking format.',
            ],
            [
              'Fixed first sentence',
              'Sentence one is given and the rest are jumbled. This removes the opener step but makes the link-chaining decisive, so go straight to pronouns and connectors.',
            ],
            [
              'Which sentence is first / last',
              'You are asked only for one position rather than the whole order. Answer it with the opener or closer checklist alone — building the full paragraph is wasted work.',
            ],
            [
              'Which pair is mandatory',
              'Identify the two sentences that cannot be separated. Test each candidate pair by asking whether anything could be inserted between them.',
            ],
            [
              'Para completion',
              'A paragraph is given with the last sentence missing. The answer must continue the direction of the final sentence, match its tone, and introduce nothing new — options that open a fresh subject are wrong however sensible they read.',
            ],
            [
              'Odd sentence out',
              'Five sentences make a paragraph and one does not belong. The intruder is usually on the same topic but at a different level of generality, or it breaks the chronology.',
            ],
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'mistakes',
      heading: 'Where marks are lost',
      eyebrow: 'Error log',
      intro:
        'Para jumbles are objective — one order is right — so every lost mark comes from a habit rather than from ambiguity.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Choosing an opener that merely sounds general',
              'Sounding introductory is not the test. Run the checklist: no connector, no pronoun, no "this" or "such", no "the" for a first mention. A sentence can sound like an opening and still fail all four.',
            ],
            [
              'Reading for the subject instead of the links',
              'The slowest way to do a para jumble is to try to understand the argument. On an unfamiliar topic it is also the least reliable.',
            ],
            [
              'Ignoring the articles',
              '"A refrigerator" before "the refrigerator" is a hard rule of English prose and is frequently the only signal separating two surviving options.',
            ],
            [
              'Not using the options',
              'Building the full order from scratch takes three times as long as eliminating three options. The four orders on the page are data.',
            ],
            [
              'Marking without the final read',
              'Fifteen seconds reading the assembled paragraph catches the join you assumed rather than checked. It is the cheapest insurance in the English section.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Arrange: (A) However, it was not until the 1850s that the practice became widespread. (B) The idea of vaccination is usually credited to Edward Jenner. (C) He had noticed that milkmaids who caught cowpox rarely fell ill with smallpox. (D) Acting on that observation, he inoculated a boy with cowpox material in 1796.',
      steps: [
        'A begins with "However" and C with "He", so neither can open. D begins with "that observation", which needs the observation first.',
        'B introduces Jenner by full name — the opener.',
        'C follows B, because "He" now has an antecedent.',
        'D follows C, because "that observation" refers to what C describes.',
        'A closes, contrasting 1796 with the 1850s.',
      ],
      answer: 'B C D A.',
    },
    {
      q: 'Arrange: (A) A refrigerator that reorders milk when it runs low is a simple example. (B) The internet of things refers to everyday objects connected to a network. (C) Their sheer number now raises security questions nobody anticipated. (D) Such devices already outnumber human beings on the planet.',
      steps: [
        'B is the only sentence that defines rather than refers, so it opens.',
        'A is offered as an example of the definition.',
        'D generalises back from the single example with "Such devices".',
        'C picks up "outnumber" with "Their sheer number".',
      ],
      answer: 'B A D C.',
    },
    {
      q: 'Arrange: (A) But the cost of storing that energy remains the real obstacle. (B) Solar power has become cheaper than coal across much of the world. (C) Batteries able to hold a full day\'s supply are still expensive to build. (D) Without them, a solar farm cannot supply anything after sunset.',
      steps: [
        'A opens with "But" and D with "Without them", so both are disqualified.',
        'B is a general claim with a full noun subject — the opener.',
        'A follows, and "that energy" refers back to solar power.',
        'C names the batteries the storage problem depends on, and D\'s "them" refers to those batteries.',
      ],
      answer: 'B A C D.',
    },
    {
      q: 'Arrange: (A) This shift has changed the way publishers commission books. (B) Audiobooks were once a niche format for long car journeys. (C) Today they account for a fast-growing share of publishing revenue. (D) Narrators are now cast with the care once reserved for film. (E) Some authors have even begun writing with the spoken version in mind.',
      steps: [
        'B opens: a full noun subject and the word "once", which sets up a contrast.',
        'C answers it with "Today they" — the contrast completed.',
        'A refers to "this shift", which is the change C has just described.',
        'D gives the first consequence for commissioning, and E escalates it with "even".',
      ],
      answer: 'B C A D E.',
    },
    {
      q: 'Which is the opening sentence? (A) It was, however, abandoned within a decade. (B) The scheme was intended to bring irrigation to three districts. (C) Engineers had warned that the terrain would not permit it. (D) They were overruled by the state government.',
      steps: [
        'A contains both "It" and "however" — two disqualifications.',
        'C uses "it" to refer to something not yet named.',
        'D begins with "They", which needs the engineers first.',
        'B names the scheme with a full noun and carries no backward reference.',
      ],
      answer: 'B. The full order is B C D A.',
    },
    {
      q: 'Arrange: (A) Yet the skill continues to be taught in almost every primary school. (B) Handwriting is no longer necessary for most adult work. (C) Research suggests the reason is not nostalgia but neurology. (D) Children who form letters by hand recognise them faster afterwards.',
      steps: [
        'A begins with "Yet" and C with "the reason", so neither opens.',
        'B is the general claim — the opener.',
        'A contradicts it: the skill survives despite being unnecessary.',
        'C explains why that is so, and D supplies the neurological detail C promised.',
      ],
      answer: 'B A C D.',
    },
    {
      q: 'Arrange: (A) The plant was carried to Yemen, and from there to the rest of the world. (B) Coffee is believed to have originated in the highlands of Ethiopia. (C) Today it is the second most traded commodity on earth. (D) By the sixteenth century it had reached the coffee houses of Constantinople.',
      steps: [
        'This is a chronological paragraph, so order by time rather than by grammar.',
        'B gives the origin and is the only sentence naming coffee in full.',
        'A moves it to Yemen, D to Constantinople by the sixteenth century.',
        'C is the present day, and closes.',
      ],
      answer: 'B A D C.',
    },
    {
      q: 'Which two sentences form a mandatory pair? (A) The rule was introduced to reduce paperwork. (B) In practice, it doubled it. (C) Every application now requires two signatures instead of one. (D) Officials say a review is under way.',
      steps: [
        'B is meaningless on its own — "in practice" contrasts with a stated intention, and "it" refers to the rule.',
        'Only A states an intention, so B must follow A directly.',
        'Nothing can be inserted between them without stranding the contrast.',
      ],
      answer: 'A and B. The full order is A B C D.',
    },
    {
      q: 'Which is the concluding sentence? (A) The first trial involved forty patients. (B) A drug that reverses the damage is now in its third round of testing. (C) If the results hold, treatment could begin within five years. (D) The latest has involved more than two thousand.',
      steps: [
        'B introduces the drug with "a" and opens the paragraph.',
        'A and D are the trial history, in that order — "the first" then "the latest".',
        'C projects into the future, and nothing in a paragraph can follow a projection.',
      ],
      answer: 'C. The full order is B A D C.',
    },
    {
      q: 'Arrange: (A) Most of it is still in the environment somewhere. (B) Humanity has produced roughly nine billion tonnes of plastic since 1950. (C) Only about nine per cent of that total has ever been recycled. (D) The rest has been burned, buried, or simply discarded.',
      steps: [
        'B is the only sentence that supplies a total, and both C and D refer back to one.',
        'C narrows the total to a percentage.',
        'D takes "the rest", which is what C leaves over.',
        'A generalises across the whole and closes.',
      ],
      answer: 'B C D A.',
    },
  ],

  practice: [
    {
      q: 'Arrange: (A) However, it was not until the 1850s that the practice became widespread. (B) The idea of vaccination is usually credited to Edward Jenner. (C) He had noticed that milkmaids who caught cowpox rarely fell ill with smallpox. (D) Acting on that observation, he inoculated a boy with cowpox material in 1796.',
      options: ['BCDA', 'BDCA', 'CBDA', 'BCAD'],
      answer: 0,
      explain: 'B introduces Jenner by name, C follows because "He" needs him, D refers to "that observation" in C, and A closes with the contrast between 1796 and the 1850s.',
    },
    {
      q: 'Arrange: (A) A refrigerator that reorders milk is a simple example. (B) The internet of things refers to everyday objects connected to a network. (C) Their sheer number now raises security questions nobody anticipated. (D) Such devices already outnumber human beings on the planet.',
      options: ['ABDC', 'BADC', 'BDAC', 'DBAC'],
      answer: 1,
      explain: 'Only B defines rather than refers, so it opens. A is the example, D generalises back with "Such devices", and C picks up "outnumber" with "Their sheer number".',
    },
    {
      q: 'Arrange: (A) But the cost of storing that energy remains the real obstacle. (B) Solar power has become cheaper than coal across much of the world. (C) Batteries able to hold a full day\'s supply are still expensive to build. (D) Without them, a solar farm cannot supply anything after sunset.',
      options: ['ABCD', 'BCAD', 'BACD', 'CBAD'],
      answer: 2,
      explain: 'B is the only possible opener. A contrasts with it, C names the batteries, and D\'s "them" can only refer to those batteries.',
    },
    {
      q: 'Arrange: (A) This shift has changed the way publishers commission books. (B) Audiobooks were once a niche format. (C) Today they account for a fast-growing share of revenue. (D) Narrators are now cast with the care once reserved for film. (E) Some authors have even begun writing with the spoken version in mind.',
      options: ['BCDAE', 'CBADE', 'BACDE', 'BCADE'],
      answer: 3,
      explain: '"Once" in B is answered by "Today" in C; A then refers to "this shift"; D gives the consequence and E escalates it with "even".',
    },
    {
      q: 'Which is the opening sentence? (A) It was, however, abandoned within a decade. (B) The scheme was intended to bring irrigation to three districts. (C) Engineers had warned that the terrain would not permit it. (D) They were overruled by the state government.',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,
      explain: 'A carries both a pronoun and a connector, C uses "it" before naming anything, and D begins with "They". Only B stands alone.',
    },
    {
      q: 'Arrange those same four sentences into the full paragraph: (A) It was, however, abandoned within a decade. (B) The scheme was intended to bring irrigation to three districts. (C) Engineers had warned that the terrain would not permit it. (D) They were overruled by the state government.',
      options: ['BDCA', 'BCAD', 'CDBA', 'BCDA'],
      answer: 3,
      explain: 'B names the scheme, C reports the warning about it, D says the engineers were overruled, and A records the outcome.',
    },
    {
      q: 'Arrange: (A) Yet the skill continues to be taught in almost every primary school. (B) Handwriting is no longer necessary for most adult work. (C) Research suggests the reason is not nostalgia but neurology. (D) Children who form letters by hand recognise them faster afterwards.',
      options: ['BACD', 'ABCD', 'BCAD', 'ACBD'],
      answer: 0,
      explain: 'B states the claim, A contradicts it with "Yet", C promises a reason for that contradiction, and D delivers the neurological detail.',
    },
    {
      q: 'Arrange: (A) The plant was carried to Yemen, and from there to the rest of the world. (B) Coffee is believed to have originated in the highlands of Ethiopia. (C) Today it is the second most traded commodity on earth. (D) By the sixteenth century it had reached the coffee houses of Constantinople.',
      options: ['BDAC', 'BADC', 'ABDC', 'BACD'],
      answer: 1,
      explain: 'The paragraph is chronological: origin, then Yemen, then Constantinople by the sixteenth century, then the present day.',
    },
    {
      q: 'Which two sentences form a mandatory pair? (A) The rule was introduced to reduce paperwork. (B) In practice, it doubled it. (C) Every application now requires two signatures. (D) Officials say a review is under way.',
      options: ['B and C', 'C and D', 'A and B', 'A and D'],
      answer: 2,
      explain: '"In practice" contrasts with a stated intention and "it" refers to the rule, so B cannot be separated from A.',
    },
    {
      q: 'Arrange: (A) The first trial involved forty patients. (B) A drug that reverses the damage is now in its third round of testing. (C) If the results hold, treatment could begin within five years. (D) The latest has involved more than two thousand.',
      options: ['ABDC', 'BDAC', 'BADC', 'DBAC'],
      answer: 2,
      explain: 'B introduces the drug with "a". A and D give the trial history in order — "the first" then "the latest" — and C projects forward, which can only close.',
    },
    {
      q: 'In that same set, which sentence concludes the paragraph?',
      options: ['A', 'B', 'D', 'C'],
      answer: 3,
      explain: 'C looks forward to what may happen if the results hold. Nothing in a paragraph can follow a projection into the future.',
    },
    {
      q: 'Which of these is most likely to be the opening sentence of a paragraph?',
      options: [
        'However, the results were disappointing.',
        'They had expected a very different outcome.',
        'The department launched a pilot programme in three villages.',
        'Such an approach has obvious limitations.',
      ],
      answer: 2,
      explain: 'The first carries a connector, the second a pronoun and the fourth a pointing word. Only the third introduces its subject without leaning on anything earlier.',
    },
    {
      q: 'In a jumbled paragraph, a sentence referring to "the scientist" rather than "a scientist" most likely:',
      options: [
        'Opens the paragraph.',
        'Comes after the sentence that first introduces the scientist.',
        'Concludes the paragraph.',
        'Can appear anywhere in the paragraph.',
      ],
      answer: 1,
      explain: 'English introduces a thing with "a" and refers back to it with "the", so the definite article marks a second mention.',
    },
    {
      q: 'A sentence beginning "For instance" must be placed:',
      options: [
        'Immediately before a general statement.',
        'At the start of the paragraph.',
        'At the end of the paragraph.',
        'Immediately after the general statement it illustrates.',
      ],
      answer: 3,
      explain: 'An example needs something to be an example of, and nothing may be inserted between the claim and its illustration.',
    },
    {
      q: 'Which is the opening sentence? (A) Yet the skill continues to be taught in almost every primary school. (B) Handwriting is no longer necessary for most adult work. (C) Research suggests the reason is not nostalgia but neurology. (D) Children who form letters by hand recognise them faster afterwards.',
      options: ['B', 'A', 'C', 'D'],
      answer: 0,
      explain: 'A opens with "Yet", C promises a reason for a claim not yet made, and D is a specific finding. Only B is a self-contained general statement.',
    },
    {
      q: 'Arrange: (A) Most of it is still in the environment somewhere. (B) Humanity has produced roughly nine billion tonnes of plastic since 1950. (C) Only about nine per cent of that total has ever been recycled. (D) The rest has been burned, buried, or simply discarded.',
      options: ['BDCA', 'BCDA', 'CBDA', 'BADC'],
      answer: 1,
      explain: 'B supplies the total, C takes a percentage of it, D takes what C leaves over, and A generalises across the whole to close.',
    },
  ],

  faqs: [
    {
      q: 'How do I find the first sentence in a para jumble?',
      a: 'By elimination rather than by intuition. An opening sentence cannot begin with a connector such as however or therefore, cannot begin with a pronoun, cannot begin with this, these or such, and cannot use "the" for something being mentioned for the first time. Usually only one sentence survives all four tests.',
    },
    {
      q: 'What are the main clues for joining two sentences?',
      a: 'Five: a pronoun that needs its antecedent in the previous sentence; an article that has moved from "a" to "the"; a connector that requires a particular kind of sentence before it; chronology; and vocabulary echoed from the end of one sentence to the start of the next.',
    },
    {
      q: 'Should I understand the paragraph to solve a para jumble?',
      a: 'No, and trying to is the slowest route. A paragraph on monetary policy and one on mangroves are reassembled by exactly the same technique. If you are thinking about the subject rather than about pronouns, articles and connectors, you have drifted off method.',
    },
    {
      q: 'What is a mandatory pair?',
      a: 'Two sentences that cannot be separated, because the second is meaningless without the first — a claim and its reversal, a statement and its example, or a noun and the pronoun that refers to it. Finding one pair lets you strike every option that separates them, which often leaves a single answer without building the full order.',
    },
    {
      q: 'How do I identify the concluding sentence?',
      a: 'It looks forward rather than back, generalises from the particulars before it, or carries a summarising connector such as thus or in short. A sentence projecting into the future — "if the results hold, treatment could begin within five years" — can only be last.',
    },
    {
      q: 'How should I use the answer options?',
      a: 'As data, not as an afterthought. Compare the first letters of the four orders to see how many openers you actually have to judge, strike anything that separates a confirmed pair or ends on a sentence that cannot close, and when two options survive, find the single join where they differ and decide only that.',
    },
    {
      q: 'What is para completion?',
      a: 'A paragraph is given with its last sentence missing and you choose the continuation. The right option carries on the direction of the final sentence, matches the tone, and introduces nothing new — an option that opens a fresh subject is wrong however sensible it reads on its own.',
    },
    {
      q: 'How long should a para jumble take?',
      a: 'About ninety seconds for a four-sentence set, including a final read-through. If two minutes have gone and no opener is settled, mark it and move on — the same marks are available faster in error detection or vocabulary.',
    },
    {
      q: 'How many para jumble questions come in bank and SSC exams?',
      a: 'Banking prelims and mains usually carry a set of four or five, often as sentence rearrangement. SSC CGL Tier 1 asks up to three, typically as four labelled sentences, and Tier 2 asks three to five with longer sentences.',
    },
    {
      q: 'Why do I keep getting the order almost right?',
      a: 'Almost always because of a join you assumed rather than verified — usually an article progression you did not check, or a pronoun you allowed to refer backwards past another candidate sentence. Reading the assembled paragraph through once before marking catches nearly all of these, and costs fifteen seconds.',
    },
  ],

  related: [
    { label: 'Reading Comprehension', to: '/study-material/english/reading-comprehension/' },
    { label: 'Cloze Test', to: '/study-material/english/cloze-test/' },
    { label: 'Grammar', to: '/study-material/english/grammar/' },
    { label: 'Error Detection', to: '/study-material/english/error-detection/' },
    { label: 'Vocabulary', to: '/study-material/english/vocabulary/' },
    { label: 'All English', to: '/study-material/english/' },
  ],
}
