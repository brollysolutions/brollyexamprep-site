/**
 * Coding-Decoding — /study-material/reasoning/coding-decoding/
 *
 * The topic is really one skill — knowing the alphabet as numbers, in both
 * directions — plus a catalogue of the shapes examiners wrap around it. So the
 * page teaches the alphabet table first and then works through the shapes in
 * the order they get harder: letter shifts, number codes, message codes, the
 * banking new-pattern set, and conditional coding.
 */
export default {
  subject: 'reasoning',
  subjectName: 'Reasoning',
  slug: 'coding-decoding',
  title: 'Coding-Decoding',
  seoTitle: 'Coding-Decoding Reasoning for Competitive Exams | Tricks & Practice',
  metaDescription:
    'Complete Coding-Decoding study material for SSC, banking and railway exams — alphabet positions, letter-shift codes, number codes, message and Chinese coding.',
  readMinutes: 18,
  lead: [
    'Coding-Decoding is the topic candidates most often get wrong for a reason that has nothing to do with reasoning: they do not know the alphabet well enough. Every question in this chapter is a pattern hidden in letter positions, and if you have to count from A on your fingers, you will run out of time before you find it.',
    'So this page starts with the alphabet table and the two mnemonics worth memorising, then works through every question shape that follows from it — simple shifts, opposite letters, number codes, message codes, the banking new-pattern set and conditional coding. The reasoning is easy. The recall is what you are actually being tested on.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–4 questions', note: 'Letter shifts and number codes, occasionally with a mirror-image twist.' },
    { exam: 'Banking Prelims (IBPS / SBI)', count: '0–5 questions', note: 'Either absent or a full new-pattern set of five sentence-coding questions.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'The most predictable topic in the paper — direct shifts and substitution.' },
    { exam: 'State Police & SI exams', count: '2–4 questions', note: 'Straight letter and number coding, rarely new-pattern.' },
    { exam: 'CTET / Teaching exams', count: '1–2 questions', note: 'Simple shifts inside the general reasoning block.' },
  ],

  contents: [
    { icon: 'book', title: 'The alphabet, both ways', sub: 'The table everything else rests on', href: '#alphabet' },
    { icon: 'target', title: 'Letter-to-letter coding', sub: 'Shifts, alternate shifts and opposites', href: '#letter' },
    { icon: 'chart', title: 'Number coding', sub: 'Positions, sums and products', href: '#number' },
    { icon: 'globe', title: 'Message coding', sub: 'The cross-out method for coded sentences', href: '#message' },
    { icon: 'layers', title: 'New-pattern banking coding', sub: 'Five questions from three sentences', href: '#new-pattern' },
    { icon: 'refresh', title: 'Substitution and reversal', sub: 'Group reversals and letter swaps', href: '#substitution' },
    { icon: 'clock', title: 'Conditional coding', sub: 'Rule tables with exceptions', href: '#conditional' },
    { icon: 'bell', title: 'Where marks are lost', sub: 'The four recurring mistakes', href: '#mistakes' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'alphabet',
      heading: 'The alphabet, in both directions',
      eyebrow: 'Start here',
      intro:
        'Before any technique, learn this table cold. Every coding question is a pattern in these numbers, and the candidates who solve them in fifteen seconds are simply the ones who do not have to count.',
      blocks: [
        {
          type: 'table',
          caption: 'Letter positions from the front and from the back',
          head: ['Letter', 'From A', 'From Z', 'Opposite letter'],
          rows: [
            ['A', '1', '26', 'Z'],
            ['E', '5', '22', 'V'],
            ['J', '10', '17', 'Q'],
            ['M', '13', '14', 'N'],
            ['O', '15', '12', 'L'],
            ['T', '20', '7', 'G'],
            ['Y', '25', '2', 'B'],
            ['Z', '26', '1', 'A'],
          ],
        },
        {
          type: 'formula',
          title: 'Three facts that replace counting',
          items: [
            { expr: 'Position from the back = 27 − position from the front', note: 'R is 18th from the front, so it is 27 − 18 = 9th from the back.' },
            { expr: 'A letter and its opposite always sum to 27', note: 'A↔Z, B↔Y, C↔X, D↔W … M↔N. This single fact solves every "opposite letter" code.' },
            { expr: 'EJOTY: E = 5, J = 10, O = 15, T = 20, Y = 25', note: 'Land on the nearest anchor and step. To find R: T is 20, step back two to 18.' },
          ],
        },
        {
          type: 'note',
          title: 'Wrapping around the ends',
          text:
            'When a shift runs past Z, continue from A — Y + 2 is A, not a dead end. Formally, add or subtract 26 to bring the position back into the 1–26 range. Half the wrong answers in this topic come from candidates who stop at Z instead of wrapping, and examiners deliberately place a Y or a Z in the word to catch exactly that.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'letter',
      heading: 'Letter-to-letter coding',
      eyebrow: 'The most common shape',
      intro:
        'A word is coded as another word. Write the two words one above the other, mark the gap between each pair of letters, and the pattern is usually visible in the first three columns.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Constant shift',
              'Every letter moves the same number of places. TEACHER → UFBDIFS is +1 throughout. Check at least three letters before you commit — a single matching letter proves nothing.',
            ],
            [
              'Alternate shift',
              'Odd positions move one way, even positions the other. CAT → DZU is +1, −1, +1. Whenever the gaps refuse to be constant, test whether they alternate before you look for anything cleverer.',
            ],
            [
              'Shift by position',
              'The first letter moves 1, the second 2, the third 3, and so on. ABC → BDF. Rare in SSC, common in state-level papers.',
            ],
            [
              'Opposite letters',
              'Each letter is replaced by its partner from the other end of the alphabet: GUN → TFM, because 7↔20, 21↔6 and 14↔13. If the gaps look random and large, test the sum-to-27 rule immediately.',
            ],
            [
              'Reverse then shift',
              'The word is written backwards and then shifted. MONKEY → XDJMNL: reverse to YEKNOM, then take each letter back one. Suspect this whenever the last letter of the word seems to be driving the first letter of the code.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'If MONKEY is coded as XDJMNL, how is DONKEY coded?',
          steps: [
            'The code is the same length, so line them up: M→X, O→D, N→J, K→M, E→N, Y→L. The gaps are wild, so a simple shift is out.',
            'Try reversing first: MONKEY reversed is YEKNOM.',
            'Compare with XDJMNL: Y→X, E→D, K→J, N→M, O→N, M→L — a clean −1.',
            'Apply the same rule to DONKEY: reversed it is YEKNOD, and −1 on each letter gives X, D, J, M, N, C.',
          ],
          answer: 'XDJMNC.',
        },
        {
          type: 'note',
          title: 'Check the length first',
          text:
            'If the code has the same number of characters as the word, you are looking at a letter-by-letter rule. If it is shorter — a single number, say — you are looking at a sum or a count, and lining letters up is wasted effort. This one glance decides which half of the chapter applies.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'number',
      heading: 'Number coding',
      eyebrow: 'Arithmetic on positions',
      intro:
        'A word becomes a number or a string of digits. There are only a handful of things examiners do to alphabet positions, and you should test them in this order.',
      blocks: [
        {
          type: 'formula',
          title: 'What to try, in order',
          items: [
            { expr: 'Sum of the letter positions', note: 'SUN = 19 + 21 + 14 = 54. The single most common number code, and always worth ten seconds first.' },
            { expr: 'Sum × or ÷ a constant, or sum ± the number of letters', note: 'If the sum is close to the code but not equal, look at the gap — it is usually the letter count or a small multiple.' },
            { expr: 'Each position written out, sometimes ± 1', note: 'CAT = 3-1-20, or 4-2-21 if the rule adds one before writing.' },
            { expr: 'Each position doubled, halved or squared', note: 'BOY = 4, 30, 50 is simply each position × 2.' },
            { expr: 'A fixed digit per letter (substitution)', note: 'When two words share letters and share digits in the same places, it is a substitution table — build the table rather than hunt for arithmetic.' },
          ],
        },
        {
          type: 'example',
          q: 'If DELHI is coded as 73541 and CALCUTTA as 82589662, how is CALICUT coded?',
          steps: [
            'Both codes have exactly as many digits as their words have letters, and L appears in both words. In DELHI, L is the third letter and the third digit is 5; in CALCUTTA, L is the third letter and the third digit is 5. Substitution confirmed.',
            'Read off the table: D=7, E=3, L=5, H=4, I=1, C=8, A=2, U=9, T=6.',
            'Spell CALICUT with it: C=8, A=2, L=5, I=1, C=8, U=9, T=6.',
          ],
          answer: '8251896.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'message',
      heading: 'Message coding',
      eyebrow: 'Coded sentences',
      intro:
        'Three or four coded sentences are given, and you must find the code for one word. The words inside each sentence are deliberately scrambled, so position tells you nothing — only overlap does.',
      blocks: [
        {
          type: 'p',
          text:
            'The method never changes. Take two sentences at a time. Find the words they share in English and the codes they share in the code language. If exactly one word is shared and exactly one code is shared, those two are a pair — and you can strike both out of every other line.',
        },
        {
          type: 'example',
          q: "In a certain language, 'pit na som' means 'bring me water', 'na jo dip' means 'water is life', and 'som dip lo' means 'give me life'. Which word means 'me'?",
          steps: [
            'Compare lines 1 and 2. Shared English word: water. Shared code: na. So na = water.',
            'Compare lines 2 and 3. Shared English word: life. Shared code: dip. So dip = life.',
            'Compare lines 1 and 3. Shared English word: me. Shared code: som. So som = me.',
            'The leftovers confirm it: pit = bring, jo = is, lo = give.',
          ],
          answer: "'som' means 'me'.",
        },
        {
          type: 'note',
          title: 'When two words are shared at once',
          text:
            'If a pair of sentences shares two English words and two codes, you cannot split them yet — record the pair as a set, such as {clear, doubt} = {ma, pi}, and move on. A third sentence almost always contains one of them and resolves it. Guessing which is which is how a whole five-question set goes wrong.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'new-pattern',
      heading: 'New-pattern banking coding',
      eyebrow: 'IBPS and SBI',
      intro:
        'Banking papers rarely ask one coding question — they ask five off a single block of three or four coded sentences. That changes the economics: the setup costs you two minutes and then each answer costs seconds.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Sentence-based new pattern',
              'Three or four coded sentences, then five questions asking for the code of a particular word or the meaning of a particular code. Solve the whole mapping once, on paper, before reading any question.',
            ],
            [
              'Letter-and-number hybrid',
              'Each word is coded as a letter plus a number — the letter usually from the first or last character of the word, the number from its length, its position in the sentence, or the alphabet position of a letter in it. Test length first; it is the most common.',
            ],
            [
              'Position-in-sentence coding',
              'The code depends on where the word sits in the sentence, so the same English word may be coded differently in two lines. If a word appears twice with different codes, stop looking for a substitution table — this is the rule in play.',
            ],
            [
              'Symbol-and-digit coding',
              'Words map to a symbol chosen by whether the first letter is a vowel or a consonant, and a digit taken from the word length. Read the condition list carefully; the exceptions are where the marks are.',
            ],
          ],
        },
        {
          type: 'example',
          q: "In a code, 'clear the doubt now' is 'ma pi ru jo', 'doubt is very clear' is 'pi la ka ma', and 'the very best now' is 'ru za la jo'. What is the code for 'best'?",
          steps: [
            'Lines 1 and 2 share clear and doubt, and share ma and pi. Record {clear, doubt} = {ma, pi} without splitting it.',
            'Lines 1 and 3 share the and now, and share ru and jo. Record {the, now} = {ru, jo}.',
            'Lines 2 and 3 share only very, and share only la. So la = very.',
            'Line 3 is ru za la jo for the very best now. Remove ru and jo (the/now) and la (very), and one word and one code are left.',
          ],
          answer: "'za' is the code for 'best'.",
        },
        {
          type: 'note',
          title: 'Do the mapping before you read the questions',
          text:
            'The temptation in an exam is to read question one and hunt for just that word. It is a false economy — the mapping is what takes the time, and once it exists all five questions are lookups. Candidates who work question by question typically finish three of the five and leave marks behind.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'substitution',
      heading: 'Substitution and reversal',
      eyebrow: 'Word-level rules',
      intro:
        'Some codes leave the letters alone and rearrange them instead, or swap one everyday word for another. Both are quick marks once you recognise them.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Whole-word reversal',
              'ORANGE → EGNARO. The giveaway is that the code contains exactly the same letters as the word.',
            ],
            [
              'Group reversal',
              'The word is cut into blocks — usually of three — and each block is reversed in place. SYSTEM → SYS|MET, NEARER → AEN|RER. Count the letters and try blocks of three first.',
            ],
            [
              'Halves swapped',
              'The first half and second half trade places: PENCIL → CILPEN. Test this whenever the code contains the same letters but reversal alone does not fit.',
            ],
            [
              'Word substitution',
              'A dictionary question rather than a pattern one: "if sky is called sea, sea is called water and water is called air, where do fish live?" Follow the chain to whatever the real answer has been renamed to — fish live in water, and water is called air.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'If SYSTEM is coded as SYSMET and NEARER as AENRER, how is FRACTION coded?',
          steps: [
            'Both codes use the same letters as their words, so nothing is shifted — only moved.',
            'Split into threes: SYS|TEM becomes SYS|MET, and NEA|RER becomes AEN|RER. Each block of three is reversed.',
            'FRACTION has eight letters: FRA|CTI|ON.',
            'Reverse each block: ARF, ITC, NO.',
          ],
          answer: 'ARFITCNO.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'conditional',
      heading: 'Conditional coding',
      eyebrow: 'SSC and insurance exams',
      intro:
        'A table of letters and their codes is given, followed by two or three conditions that override the table in special cases. The reasoning is trivial; the discipline is not.',
      blocks: [
        {
          type: 'p',
          text:
            'A typical condition set reads: (i) if the first letter is a vowel and the last a consonant, both are coded as the code for the last letter; (ii) if both the first and last letters are consonants, both are coded as ×; (iii) if the first letter is a consonant and the last a vowel, their codes are interchanged. Only one condition can apply to a given group, and a question always includes at least one group where none applies.',
        },
        {
          type: 'formula',
          title: 'How to work a conditional set',
          items: [
            { expr: 'Step 1 — write the plain code from the table first', note: 'Ignore the conditions completely on the first pass. You now have something to correct rather than something to invent.' },
            { expr: 'Step 2 — check only the first and last elements', note: 'Every condition in this format is triggered by the ends of the group, never by the middle.' },
            { expr: 'Step 3 — apply at most one condition', note: 'The conditions are written to be mutually exclusive. If two seem to apply, you have misread one.' },
            { expr: 'Step 4 — compare options at the ends, not the middle', note: 'The four options usually differ only in the first and last characters, so those are the only ones worth checking twice.' },
          ],
        },
        {
          type: 'note',
          title: 'The condition that catches everyone',
          text:
            'Read "interchanged" carefully. Interchanging the codes of the first and last letters is not the same as coding both with the same symbol, and examiners offer both as options. Underline the verb in each condition before you start — it is the single highest-value ten seconds in this question type.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'mistakes',
      heading: 'Where marks are lost',
      eyebrow: 'Error log',
      intro:
        'Four mistakes account for almost every wrong answer in this chapter, and none of them is a reasoning failure.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Confirming the pattern on one letter',
              'A +1 shift and a "reverse then +1" rule agree on plenty of individual letters. Verify on three letters, including the last one, before you apply a rule to the answer word.',
            ],
            [
              'Not wrapping past Z',
              'Y + 3 is B. Examiners put Y and Z in the target word precisely because candidates freeze there. Add 26 whenever a position falls below 1, and subtract 26 whenever it climbs above 26.',
            ],
            [
              'Coding the wrong word',
              'The question gives you a coded example and then asks about a different word. Circle the word you are actually being asked to code before you write anything down.',
            ],
            [
              'Assuming word order in message coding',
              'The codes in a coded sentence are scrambled on purpose. The third code is not the third word. Only overlap between sentences carries information.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'If TEACHER is coded as UFBDIFS, how is STUDENT coded?',
      steps: ['T→U, E→F, A→B — a constant +1.', 'Check the last letter too: R→S. Confirmed.', 'Apply +1 to every letter of STUDENT.'],
      answer: 'TUVEFOU.',
    },
    {
      q: 'If GUN is coded as TFM, how is BOX coded?',
      steps: [
        'G is 7 and T is 20; 7 + 20 = 27. U is 21 and F is 6; again 27. These are opposite letters.',
        'B is 2, so its partner is 27 − 2 = 25 = Y.',
        'O is 15 → 12 = L. X is 24 → 3 = C.',
      ],
      answer: 'YLC.',
    },
    {
      q: 'If PAPER is coded as 56, how is PENCIL coded?',
      steps: [
        'P + A + P + E + R = 16 + 1 + 16 + 5 + 18 = 56. It is a plain sum of positions.',
        'PENCIL = 16 + 5 + 14 + 3 + 9 + 12.',
      ],
      answer: '59.',
    },
    {
      q: 'If CAT is 24 and DOG is 26, what is BAT?',
      steps: ['C + A + T = 3 + 1 + 20 = 24, and D + O + G = 4 + 15 + 7 = 26. Sum of positions.', 'B + A + T = 2 + 1 + 20.'],
      answer: '23.',
    },
    {
      q: 'If BOY is written as 4, 30, 50, how is GIRL written?',
      steps: [
        'B is 2 and the code is 4; O is 15 and the code is 30. Each position is doubled.',
        'G = 7 → 14, I = 9 → 18, R = 18 → 36, L = 12 → 24.',
      ],
      answer: '14, 18, 36, 24.',
    },
    {
      q: 'If RAIN is coded as OXFK, how is HAIL coded?',
      steps: ['R (18) → O (15) is −3, and A (1) → X (24) is −3 after wrapping past A.', 'I (9) → F (6) and N (14) → K (11) confirm it.', 'H → E, A → X, I → F, L → I.'],
      answer: 'EXFI.',
    },
    {
      q: 'If MANGO is coded as OCPIQ, how is PAPAYA coded?',
      steps: ['M→O, A→C, N→P: a constant +2.', 'P→R, A→C, P→R, A→C.', 'Y is 25, and 25 + 2 = 27, which wraps to 1 = A. Then A→C.'],
      answer: 'RCRCAC.',
    },
    {
      q: 'If ABC is coded as BDF, how is DEF coded?',
      steps: [
        'A→B is +1, B→D is +2, C→F is +3. The shift equals the position of the letter in the word.',
        'D + 1 = E, E + 2 = G, F + 3 = I.',
      ],
      answer: 'EGI.',
    },
    {
      q: "In a code, 'ka bi pu' means 'he is good', 'bi lo re' means 'good and bad', and 'pu re na' means 'is bad now'. What is the code for 'bad'?",
      steps: [
        'Lines 1 and 2 share only good, and share only bi. So bi = good.',
        'Lines 1 and 3 share only is, and share only pu. So pu = is.',
        'Lines 2 and 3 share only bad, and share only re.',
      ],
      answer: "'re' means 'bad'.",
    },
    {
      q: 'If PENCIL is coded as MBKZFI, how is PAPER coded?',
      steps: [
        'P (16) → M (13) is −3, E (5) → B (2) is −3, N (14) → K (11) is −3.',
        'C (3) → Z: 3 − 3 = 0, which wraps to 26 = Z. The rule holds.',
        'P → M, A → X, P → M, E → B, R → O.',
      ],
      answer: 'MXMBO.',
    },
  ],

  practice: [
    {
      q: 'In a certain code, CHAIR is written as DIBJS. How is TABLE written?',
      options: ['UBCFM', 'SZAKD', 'UBCMF', 'UCBMF'],
      answer: 2,
      explain: 'The rule is +1 on every letter: T→U, A→B, B→C, L→M, E→F.',
    },
    {
      q: 'If RAIN is coded as OXFK, how is HAIL coded?',
      options: ['EXFJ', 'EXFI', 'FYGJ', 'EWFI'],
      answer: 1,
      explain: 'The shift is −3 with wrapping: H→E, A→X, I→F, L→I.',
    },
    {
      q: 'If MANGO is coded as OCPIQ, how is PAPAYA coded?',
      options: ['RCRCCA', 'RCRCAC', 'RCRCAA', 'QBQBZB'],
      answer: 1,
      explain: 'A +2 shift throughout. Y is 25, and 25 + 2 = 27 wraps round to A, giving RCRCAC.',
    },
    {
      q: 'If LIGHT is coded as ORTSG, how is DARK coded?',
      options: ['WZJP', 'XZIP', 'WYIP', 'WZIP'],
      answer: 3,
      explain: 'Opposite letters, summing to 27: D(4)→W(23), A(1)→Z(26), R(18)→I(9), K(11)→P(16).',
    },
    {
      q: 'In a certain code, SUN is written as 54. What is MOON?',
      options: ['54', '55', '57', '60'],
      answer: 2,
      explain: 'S + U + N = 19 + 21 + 14 = 54, so it is a sum of positions. M + O + O + N = 13 + 15 + 15 + 14 = 57.',
    },
    {
      q: 'If DELHI is coded as 73541 and CALCUTTA as 82589662, how is CALICUT coded?',
      options: ['8215896', '8251986', '8251896', '8521896'],
      answer: 2,
      explain: 'A substitution table: C=8, A=2, L=5, I=1, U=9, T=6. CALICUT therefore reads 8-2-5-1-8-9-6.',
    },
    {
      q: "In a language, 'ka bi pu' means 'he is good', 'bi lo re' means 'good and bad', and 'pu re na' means 'is bad now'. Which word means 'bad'?",
      options: ['bi', 'pu', 're', 'na'],
      answer: 2,
      explain: 'Lines 2 and 3 share only the word bad and only the code re, so re = bad.',
    },
    {
      q: 'If MONKEY is coded as XDJMNL, how is TIGER coded?',
      options: ['QDFHS', 'SDFHQ', 'QDFGS', 'QCFHS'],
      answer: 0,
      explain: 'Reverse the word, then shift each letter back one. TIGER reversed is REGIT, and −1 gives QDFHS.',
    },
    {
      q: 'If SYSTEM is coded as SYSMET and NEARER as AENRER, how is FRACTION coded?',
      options: ['ARFTICON', 'ARFITCON', 'FARITCNO', 'ARFITCNO'],
      answer: 3,
      explain: 'Each block of three letters is reversed: FRA|CTI|ON becomes ARF|ITC|NO.',
    },
    {
      q: 'If BOY is written as 4, 30, 50, how is CAT written?',
      options: ['3, 1, 20', '6, 2, 20', '6, 2, 40', '9, 1, 40'],
      answer: 2,
      explain: 'Each alphabet position is doubled: C(3)→6, A(1)→2, T(20)→40.',
    },
    {
      q: 'If PENCIL is coded as MBKZFI, how is PAPER coded?',
      options: ['MXMBO', 'MXMBP', 'NXNBO', 'MWMBO'],
      answer: 0,
      explain: 'A −3 shift with wrapping. P→M, A→X, P→M, E→B, R→O.',
    },
    {
      q: 'If CAT is coded as DZU, how is DOG coded?',
      options: ['EPH', 'ENH', 'CNF', 'ENF'],
      answer: 1,
      explain: 'The shifts alternate +1, −1, +1: D→E, O→N, G→H.',
    },
    {
      q: 'If HOUSE is coded as 68, what is CHAIR?',
      options: ['39', '41', '37', '43'],
      answer: 0,
      explain: 'H + O + U + S + E = 8 + 15 + 21 + 19 + 5 = 68. So CHAIR = 3 + 8 + 1 + 9 + 18 = 39.',
    },
    {
      q: 'If ORANGE is coded as EGNARO, how is BANANA coded?',
      options: ['BANANA', 'ANABAN', 'NABANA', 'ANANAB'],
      answer: 3,
      explain: 'The code is the word written backwards. BANANA reversed is ANANAB.',
    },
    {
      q: "In a code, 'clear the doubt now' is 'ma pi ru jo', 'doubt is very clear' is 'pi la ka ma', and 'the very best now' is 'ru za la jo'. What is the code for 'best'?",
      options: ['la', 'ka', 'ru', 'za'],
      answer: 3,
      explain: 'Lines 2 and 3 share only very and only la, so la = very. In line 3, ru and jo cover the and now, leaving za for best.',
    },
    {
      q: 'If ABC is coded as BDF, how is DEF coded?',
      options: ['EFG', 'EGI', 'EGH', 'FGI'],
      answer: 1,
      explain: 'Each letter shifts by its position in the word: D + 1 = E, E + 2 = G, F + 3 = I.',
    },
  ],

  faqs: [
    {
      q: 'What is coding-decoding in reasoning?',
      a: 'Coding-decoding gives you a word alongside the code it has been turned into, and asks you to find the rule and apply it to a second word. The rule is almost always an operation on alphabet positions — a shift, a reversal, a sum or a substitution — so the topic is really a test of how well you know the alphabet as numbers.',
    },
    {
      q: 'What is the fastest way to find alphabet positions?',
      a: 'Memorise the EJOTY anchors — E is 5, J is 10, O is 15, T is 20, Y is 25 — and count at most two steps from the nearest one. For positions from the back, subtract from 27 rather than counting: R is 18th from the front, so it is the 9th from the back.',
    },
    {
      q: 'What is the sum-to-27 rule?',
      a: 'Every letter and its opposite from the other end of the alphabet add up to 27: A with Z, B with Y, C with X, and so on to M with N. Whenever the gaps between a word and its code look large and irregular, test this rule before anything else — it explains a large share of SSC coding questions.',
    },
    {
      q: 'How do I solve message or "Chinese" coding questions?',
      a: 'Compare the coded sentences two at a time. If a pair shares exactly one English word and exactly one code, that is a confirmed pair — strike it out everywhere. If a pair shares two words and two codes, record them as an unsplit set and let a third sentence resolve which is which. Position within a sentence tells you nothing, because the codes are deliberately scrambled.',
    },
    {
      q: 'What is new-pattern coding-decoding in bank exams?',
      a: 'Banking papers give three or four coded sentences and then ask five questions from that one block. The efficient approach is to build the entire word-to-code mapping first and then treat the five questions as lookups — solving them one at a time repeats the hardest work five times over.',
    },
    {
      q: 'How many coding-decoding questions come in SSC CGL?',
      a: 'Expect roughly two to four questions in Tier 1, mostly letter shifts and number codes. RRB NTPC is more generous at three to four, and banking prelims is all-or-nothing — either the topic is absent or a full five-question new-pattern set appears.',
    },
    {
      q: 'What do I do when a shift runs past Z?',
      a: 'Wrap around to A and keep going, which is the same as subtracting 26 from the position. Y + 2 is A, and C − 3 is Z. Examiners place Y and Z in the target word specifically to catch candidates who stop at the end of the alphabet.',
    },
    {
      q: 'How do I know whether a code is a shift or a substitution?',
      a: 'Look for a repeated letter. If the same letter produces the same code character everywhere it appears, and different letters produce unrelated characters, it is a substitution table — build the table. If the gap between letter and code is consistent instead, it is a shift.',
    },
    {
      q: 'How do I attempt conditional coding questions?',
      a: 'Write the plain code from the given table first, ignoring every condition. Then check only the first and last elements of the group, apply at most one condition, and compare the options at their ends — that is where they differ. Reading the verb in each condition carefully matters more than any shortcut.',
    },
    {
      q: 'How much time should a coding-decoding question take?',
      a: 'A direct SSC-style question should take twenty to thirty seconds; if a minute has gone and no pattern has appeared, move on and return later. A banking new-pattern block is different — budget two minutes for the mapping and then roughly fifteen seconds for each of the five questions.',
    },
  ],

  related: [
    { label: 'Series', to: '/study-material/reasoning/series/' },
    { label: 'Blood Relations', to: '/study-material/reasoning/blood-relations/' },
    { label: 'Syllogism', to: '/study-material/reasoning/syllogism/' },
    { label: 'Seating Arrangement', to: '/study-material/reasoning/seating-arrangement/' },
    { label: 'Puzzles', to: '/study-material/reasoning/puzzles/' },
    { label: 'All Reasoning', to: '/study-material/reasoning/' },
  ],
}
