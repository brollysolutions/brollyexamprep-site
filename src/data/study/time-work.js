/**
 * Time & Work — /study-material/quantitative-aptitude/time-work/
 *
 * Built around the LCM (total-units) method rather than fraction addition.
 * Every worked example uses it, because it turns the whole topic into whole-
 * number arithmetic and makes pipes, alternate days and wage-sharing fall out
 * of the same setup.
 */
export default {
  subject: 'quantitative-aptitude',
  subjectName: 'Quantitative Aptitude',
  slug: 'time-work',
  title: 'Time & Work',
  seoTitle: 'Time and Work for Competitive Exams | LCM Method, Pipes & Practice',
  metaDescription:
    'Complete Time and Work study material for SSC, banking and railway exams — the LCM units method, combined work, efficiency ratios, man-days.',
  readMinutes: 20,
  lead: [
    'Time and Work has a reputation for fiddly fractions, and it is entirely undeserved. Adding 1/12 and 1/18 under exam pressure is slow and error-prone, but the same question in whole units — the LCM method — is mental arithmetic.',
    'This page teaches that method first and then uses it for everything else: pipes and cisterns, efficiency ratios, alternate-day working and wage sharing are all the same setup with a different label. Learn one technique properly and the topic collapses to a single skill.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–4 questions', note: 'Usually one straight work question and one pipes-and-cisterns.' },
    { exam: 'Banking Prelims & Mains', count: '2–3 questions', note: 'Often as a two-statement sufficiency or a caselet.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'Direct man-days and combined-work questions.' },
    { exam: 'CAT / MBA entrances', count: '1–3 questions', note: 'Mixed groups of men and women, or variable efficiency.' },
  ],

  contents: [
    { icon: 'book', title: 'The work-rate idea', sub: 'Why work is measured per day', href: '#basics' },
    { icon: 'target', title: 'The LCM units method', sub: 'The one technique to learn properly', href: '#lcm' },
    { icon: 'layers', title: 'Working together', sub: 'Combined rates, and finding one person alone', href: '#together' },
    { icon: 'chart', title: 'Efficiency and time', sub: 'Twice as fast means half the time', href: '#efficiency' },
    { icon: 'user', title: 'Men, days and hours', sub: 'The man-days equation', href: '#mandays' },
    { icon: 'refresh', title: 'Pipes and cisterns', sub: 'Inlets, outlets and leaks', href: '#pipes' },
    { icon: 'clock', title: 'Alternate days and leaving early', sub: 'Partial work and hand-overs', href: '#alternate' },
    { icon: 'doc', title: 'Sharing wages', sub: 'Payment follows work done', href: '#wages' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'basics',
      heading: 'The work-rate idea',
      eyebrow: 'Start here',
      intro:
        'The whole topic rests on one move: convert "days to finish" into "work done per day". Times cannot be added; rates can.',
      blocks: [
        {
          type: 'formula',
          title: 'The core relationships',
          items: [
            { expr: 'If A finishes a job in n days, A does 1/n of it per day', note: 'Ten days means a tenth a day. This is the only conversion in the topic.' },
            { expr: 'Work done = rate × time', note: 'Working for 3 days at 1/10 a day completes 3/10 of the job.' },
            { expr: 'Rates add; times do not', note: 'If A takes 10 days and B takes 15, together they do NOT take 12.5. Add the rates instead.' },
          ],
        },
        {
          type: 'note',
          title: 'The most common wrong answer',
          text:
            'Averaging the two times is the standard trap and the answer examiners put first in the options. If A takes 10 days and B takes 15, the pair must finish in fewer than 10 — two people are faster than the faster one alone. Any answer above the smallest individual time is wrong on its face.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'lcm',
      heading: 'The LCM units method',
      eyebrow: 'Learn this properly',
      intro:
        'Instead of calling the job "1" and working in fractions, call it the LCM of all the times given. Every rate then becomes a whole number, and the arithmetic stops being the hard part.',
      blocks: [
        {
          type: 'p',
          text:
            'The method is three steps. Take the LCM of every time in the question and call that the total work. Divide it by each person\'s time to get their daily output in units. Then add, subtract or scale those whole numbers as the question requires.',
        },
        {
          type: 'example',
          q: 'A can do a piece of work in 12 days and B in 18 days. How long will they take together?',
          steps: [
            'LCM of 12 and 18 is 36, so call the total work 36 units.',
            "A's rate = 36 ÷ 12 = 3 units a day.",
            "B's rate = 36 ÷ 18 = 2 units a day.",
            'Together they do 5 units a day, so the time is 36 ÷ 5.',
          ],
          answer: '7.2 days, or 7 1/5 days.',
        },
        {
          type: 'note',
          title: 'Why this beats fractions',
          text:
            'The fraction route needs 1/12 + 1/18 = 5/36 and then a reciprocal. The LCM route needs 3 + 2 = 5. Both give the same answer, but only one is safe to do in your head with a clock running — and the units carry through unchanged when the question adds a third worker or a leak.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'together',
      heading: 'Working together',
      eyebrow: 'Core skill',
      intro:
        'Once rates are whole numbers, combining workers is addition and removing one is subtraction. The reverse question — given the pair, find one alone — is the same operation backwards.',
      blocks: [
        {
          type: 'formula',
          title: 'Combined work',
          items: [
            { expr: 'Together, time = ab ÷ (a + b)', note: 'The direct formula for two workers taking a and b days. For 12 and 18 days: 216/30 = 7.2.' },
            { expr: 'In units: combined rate = sum of individual rates', note: 'The same statement, but it extends to three or more workers without a new formula.' },
            { expr: "One worker alone = total work ÷ (pair's rate − other's rate)", note: 'Subtract the known rate from the combined rate to isolate the unknown one.' },
          ],
        },
        {
          type: 'example',
          q: 'A and B together finish a job in 8 days. A alone takes 12 days. How long does B take alone?',
          steps: [
            'LCM of 8 and 12 is 24, so the total work is 24 units.',
            'Together they do 24 ÷ 8 = 3 units a day.',
            'A alone does 24 ÷ 12 = 2 units a day.',
            'So B does 3 − 2 = 1 unit a day.',
          ],
          answer: 'B alone takes 24 days.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'efficiency',
      heading: 'Efficiency and time',
      eyebrow: 'Inverse relationship',
      intro:
        'Efficiency is work per day, so it is inversely proportional to the time taken. A worker twice as efficient takes half as long — and the ratio flips.',
      blocks: [
        {
          type: 'formula',
          title: 'The relationship',
          items: [
            { expr: 'Efficiency ∝ 1 ÷ Time', note: 'If efficiencies are in the ratio 3 : 2, the times are in the ratio 2 : 3.' },
            { expr: 'If A is x times as efficient as B, A takes 1/x of the time', note: 'Three times as efficient means a third of the days.' },
            { expr: 'A alone : B alone = (total efficiency parts) ÷ (own parts) × combined time', note: 'With efficiencies 2 : 1 and 8 days together, the work is 3 × 8 = 24 parts, so A alone takes 24 ÷ 2 = 12 days.' },
          ],
        },
        {
          type: 'example',
          q: 'A is twice as efficient as B, and together they finish a job in 8 days. How long would A take alone?',
          steps: [
            'Efficiencies are in the ratio 2 : 1, so together they produce 3 parts a day.',
            'In 8 days they produce 3 × 8 = 24 parts, which is the whole job.',
            'A alone produces 2 parts a day.',
            '24 ÷ 2',
          ],
          answer: 'A alone takes 12 days. (B alone would take 24.)',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'mandays',
      heading: 'Men, days and hours',
      eyebrow: 'Exam classic',
      intro:
        'When the number of workers changes, the total labour required stays fixed. That constant is the man-days — or man-hours, if hours per day are involved.',
      blocks: [
        {
          type: 'formula',
          title: 'The man-days equation',
          items: [
            { expr: 'M₁ × D₁ × H₁ ÷ W₁ = M₂ × D₂ × H₂ ÷ W₂', note: 'M men, D days, H hours a day, W amount of work. Drop H when hours are not mentioned, and drop W when the job is the same.' },
            { expr: 'Simplest form: M₁D₁ = M₂D₂', note: '12 men for 15 days is 180 man-days, so 20 men need 180 ÷ 20 = 9 days.' },
            { expr: 'More workers ⇒ fewer days', note: 'An inverse proportion. If your answer moves the wrong way, you have multiplied where you should have divided.' },
          ],
        },
        {
          type: 'example',
          q: '8 men can complete a job in 6 days working 8 hours a day. How many days will 4 men take working 12 hours a day?',
          steps: [
            'Total labour = 8 × 6 × 8 = 384 man-hours.',
            'The new team supplies 4 × 12 = 48 man-hours a day.',
            '384 ÷ 48',
          ],
          answer: '8 days.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'pipes',
      heading: 'Pipes and cisterns',
      eyebrow: 'Same topic, new label',
      intro:
        'A pipe filling a tank is a worker doing a job. The only new idea is that an outlet pipe or a leak works at a negative rate.',
      blocks: [
        {
          type: 'formula',
          title: 'The rules',
          items: [
            { expr: 'Inlet pipes count as positive rates, outlets and leaks as negative', note: 'Add them all; the sign of the total tells you whether the tank fills or empties.' },
            { expr: 'Net rate = sum of inlet rates − sum of outlet rates', note: 'If the net is negative or zero, the tank never fills — a legitimate answer some questions want.' },
            { expr: 'Leak questions: leak rate = filling rate − observed net rate', note: 'A tap filling in 8 hours that actually takes 12 has a leak emptying in 24 hours.' },
          ],
        },
        {
          type: 'example',
          q: 'Pipe A fills a tank in 6 hours, pipe B in 8 hours, and pipe C empties it in 12 hours. If all three are open, how long does the tank take to fill?',
          steps: [
            'LCM of 6, 8 and 12 is 24, so call the tank 24 units.',
            'A = 24 ÷ 6 = +4, B = 24 ÷ 8 = +3, C = 24 ÷ 12 = −2.',
            'Net = 4 + 3 − 2 = 5 units an hour.',
            '24 ÷ 5',
          ],
          answer: '4.8 hours, or 4 hours 48 minutes.',
        },
        {
          type: 'example',
          q: 'A tap fills a tank in 8 hours, but because of a leak it takes 12 hours. How long would the leak alone take to empty a full tank?',
          steps: [
            'LCM of 8 and 12 is 24, so the tank is 24 units.',
            'The tap alone does 3 units an hour; with the leak the net is 2.',
            'The leak therefore removes 1 unit an hour.',
            '24 ÷ 1',
          ],
          answer: '24 hours.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'alternate',
      heading: 'Alternate days and leaving early',
      eyebrow: 'Question shapes',
      intro:
        'Two variations that look harder than they are. In units, both reduce to counting how much work is done and how much is left.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Working on alternate days',
              'Compute the work done in one full cycle of two days, then see how many complete cycles fit. If A does 3 units and B does 2, a two-day cycle produces 5 units — so a 30-unit job takes exactly six cycles, or 12 days. Watch for a job that finishes mid-cycle.',
            ],
            [
              'One worker leaves partway',
              'Work out the units completed while both worked, subtract from the total, and divide the remainder by the rate of whoever is left.',
            ],
            [
              'A worker joins partway',
              'Same idea in reverse. Count the units the first worker produced alone, then apply the combined rate to what remains.',
            ],
            [
              'Fraction of work left',
              'Units completed ÷ total units gives the fraction done; subtract from 1 for the fraction remaining. Keeping everything in units avoids fraction arithmetic entirely.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'A can do a job in 20 days and B in 30 days. They work together for 5 days, then A leaves. How long does B take to finish?',
          steps: [
            'LCM of 20 and 30 is 60, so the job is 60 units.',
            'A = 3 units a day, B = 2 units a day, together 5 a day.',
            'In 5 days they complete 25 units, leaving 35.',
            'B alone clears 35 ÷ 2',
          ],
          answer: '17.5 days more.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'wages',
      heading: 'Sharing wages',
      eyebrow: 'Straightforward marks',
      intro:
        'Payment is proportional to work actually done. When everyone works for the whole job, that means payment is proportional to efficiency.',
      blocks: [
        {
          type: 'formula',
          title: 'The rule',
          items: [
            { expr: 'Wages ∝ work done', note: 'Not to time spent. A faster worker on the same job earns more, not less.' },
            { expr: 'Same duration ⇒ wages ∝ efficiency ⇒ wages ∝ 1/time', note: 'Workers taking 6, 8 and 12 days have efficiencies 4 : 3 : 2 in 24-unit terms, and that is the pay ratio.' },
            { expr: 'Different durations ⇒ wages ∝ (rate × days actually worked)', note: 'Compute the units each person personally produced and split in that ratio.' },
          ],
        },
        {
          type: 'example',
          q: 'A, B and C together complete a job and are paid ₹1 800. Alone they would take 6, 8 and 12 days. How is the money shared?',
          steps: [
            'LCM of 6, 8 and 12 is 24 units.',
            'Rates: A = 4, B = 3, C = 2 units a day.',
            'Working together throughout, the pay ratio is 4 : 3 : 2 over 9 parts.',
            '₹1 800 ÷ 9 = ₹200 a part.',
          ],
          answer: 'A gets ₹800, B ₹600 and C ₹400.',
        },
      ],
    },
  ],

  examples: [
    {
      q: '12 men can complete a work in 15 days. How many days will 20 men take?',
      steps: ['Total labour = 12 × 15 = 180 man-days.', '180 ÷ 20'],
      answer: '9 days.',
    },
    {
      q: 'A can do a job in 10 days and B in 15 days. Working on alternate days starting with A, how long does the job take?',
      steps: [
        'LCM of 10 and 15 is 30 units. A = 3 a day, B = 2 a day.',
        'Each two-day cycle produces 5 units.',
        '30 ÷ 5 = 6 complete cycles.',
        'Six cycles is 12 days, and the job finishes exactly at the end.',
      ],
      answer: '12 days.',
    },
    {
      q: 'A alone can finish a work in 18 days. He works for 6 days and leaves; B finishes the rest in 12 days. How long would B alone take?',
      steps: [
        'A completes 6/18 = 1/3 of the work.',
        'The remaining 2/3 takes B 12 days.',
        'So the whole job would take B 12 × 3/2 days.',
      ],
      answer: '18 days.',
    },
    {
      q: 'Two pipes fill a tank in 20 and 30 minutes. How long do they take together?',
      steps: ['LCM 60 units. Rates 3 and 2 a minute.', 'Net 5 a minute.', '60 ÷ 5'],
      answer: '12 minutes.',
    },
    {
      q: 'A, B and C can do a work in 10, 12 and 15 days. How long together?',
      steps: ['LCM of 10, 12 and 15 is 60 units.', 'Rates: 6, 5 and 4 a day, totalling 15.', '60 ÷ 15'],
      answer: '4 days.',
    },
    {
      q: 'A can do half a work in 5 days and B can do a third of it in 4 days. How long will they take together?',
      steps: [
        'A does the whole job in 10 days; B does it in 12.',
        'LCM 60 units: A = 6 a day, B = 5 a day, together 11.',
        '60 ÷ 11',
      ],
      answer: '60/11 days, which is 5 5/11 days.',
    },
    {
      q: '6 men and 8 women finish a job in 10 days, while 26 men and 48 women finish it in 2 days. How long will 15 men and 20 women take?',
      steps: [
        'Let m and w be the daily rates of one man and one woman.',
        '10(6m + 8w) = 1 and 2(26m + 48w) = 1, so 60m + 80w = 52m + 96w.',
        '8m = 16w, so one man equals two women.',
        'Substituting: 60(2w) + 80w = 200w = 1, so w = 1/200 and m = 1/100.',
        '15m + 20w = 15/100 + 20/200 = 0.25 of the job a day.',
      ],
      answer: '4 days.',
    },
    {
      q: 'If 5 men or 8 women can do a work in 12 days, how long will 2 men and 4 women take?',
      steps: [
        '5 men and 8 women are equally productive, so 1 man = 8/5 women.',
        'The whole job is 8 women × 12 days = 96 woman-days.',
        '2 men + 4 women = 2(8/5) + 4 = 3.2 + 4 = 7.2 women.',
        '96 ÷ 7.2',
      ],
      answer: '13.33 days, or 13 1/3 days.',
    },
    {
      q: '12 men start a job that should take 20 days. After 8 days, 4 more men join. When is the job finished?',
      steps: [
        'Total labour = 12 × 20 = 240 man-days.',
        'In the first 8 days: 12 × 8 = 96 man-days used, leaving 144.',
        'With 16 men: 144 ÷ 16 = 9 more days.',
        'Total = 8 + 9',
      ],
      answer: '17 days.',
    },
    {
      q: 'A and B can do a work in 6 and 8 days. With C they finish it in 3 days. How long would C alone take?',
      steps: [
        'LCM of 6, 8 and 3 is 24 units.',
        'A = 4 a day, B = 3 a day, and all three together = 8 a day.',
        'C = 8 − 4 − 3 = 1 unit a day.',
        '24 ÷ 1',
      ],
      answer: '24 days.',
    },
  ],

  practice: [
    {
      q: 'A does a work in 15 days and B in 10 days. Together they take:',
      options: ['6 days', '12.5 days', '5 days', '8 days'],
      answer: 0,
      explain: 'LCM 30 units: A = 2 a day, B = 3 a day, together 5. So 30 ÷ 5 = 6 days.',
    },
    {
      q: 'A and B together finish a job in 12 days; B alone takes 20 days. A alone takes:',
      options: ['25 days', '30 days', '24 days', '32 days'],
      answer: 1,
      explain: 'LCM 60: together 5 a day, B = 3 a day, so A = 2 a day and 60 ÷ 2 = 30 days.',
    },
    {
      q: '10 men can complete a work in 12 days. 15 men will take:',
      options: ['10 days', '7 days', '8 days', '9 days'],
      answer: 2,
      explain: 'Total = 120 man-days, so 120 ÷ 15 = 8 days. More men means fewer days.',
    },
    {
      q: 'A is three times as efficient as B and together they finish in 9 days. B alone would take:',
      options: ['12 days', '27 days', '18 days', '36 days'],
      answer: 3,
      explain: 'Efficiencies 3 : 1 give 4 parts a day, so the job is 36 parts. B does 1 a day, needing 36 days.',
    },
    {
      q: 'A pipe fills a tank in 10 hours while a leak empties it in 15 hours. With both open the tank fills in:',
      options: ['30 hours', '20 hours', '12 hours', '25 hours'],
      answer: 0,
      explain: 'LCM 30: pipe +3, leak −2, net +1 an hour. So 30 ÷ 1 = 30 hours.',
    },
    {
      q: 'A and B take 20 and 25 days alone. After working together for 5 days, the fraction of work left is:',
      options: ['1/2', '11/20', '2/5', '9/20'],
      answer: 1,
      explain: 'LCM 100: A = 5, B = 4, together 9 a day. In 5 days 45 units are done, leaving 55/100 = 11/20.',
    },
    {
      q: '8 men complete a job in 6 days working 8 hours a day. 4 men working 12 hours a day will take:',
      options: ['10 days', '12 days', '8 days', '6 days'],
      answer: 2,
      explain: 'Total = 8 × 6 × 8 = 384 man-hours. The new team supplies 48 an hour a day, so 384 ÷ 48 = 8 days.',
    },
    {
      q: 'A, B and C can do a work in 10, 12 and 15 days respectively. Together they take:',
      options: ['5 days', '6 days', '3 days', '4 days'],
      answer: 3,
      explain: 'LCM 60: rates 6, 5 and 4, totalling 15 a day. So 60 ÷ 15 = 4 days.',
    },
    {
      q: 'A does half a work in 5 days and B does a third of it in 4 days. Together they finish the whole work in:',
      options: ['5 5/11 days', '5 days', '6 6/11 days', '6 days'],
      answer: 0,
      explain: 'A takes 10 days and B 12. LCM 60: rates 6 and 5, totalling 11, so 60 ÷ 11 = 5 5/11 days.',
    },
    {
      q: 'A and B finish a job together and are paid ₹3 000. Alone they would take 12 and 18 days. A receives:',
      options: ['₹1 200', '₹1 800', '₹2 000', '₹1 500'],
      answer: 1,
      explain: 'LCM 36: A = 3 a day, B = 2. Pay splits 3 : 2 over 5 parts, so A gets 3/5 of ₹3 000 = ₹1 800.',
    },
    {
      q: 'Two pipes fill a tank in 20 and 30 minutes. Opened together, the tank fills in:',
      options: ['10 minutes', '15 minutes', '12 minutes', '25 minutes'],
      answer: 2,
      explain: 'LCM 60: rates 3 and 2 a minute, totalling 5. So 60 ÷ 5 = 12 minutes.',
    },
    {
      q: 'A alone takes 18 days. He works 6 days and leaves; B finishes the rest in 12 days. B alone would take:',
      options: ['24 days', '20 days', '15 days', '18 days'],
      answer: 3,
      explain: 'A completes 1/3, so B does 2/3 in 12 days. The full job takes B 12 × 3/2 = 18 days.',
    },
    {
      q: 'A is twice as good a workman as B, and together they finish in 14 days. A alone would take:',
      options: ['21 days', '42 days', '28 days', '24 days'],
      answer: 0,
      explain: 'Efficiencies 2 : 1 give 3 parts a day, so the job is 42 parts. A does 2 a day, needing 21 days.',
    },
    {
      q: 'A tap fills a tank in 8 hours but takes 12 hours because of a leak. The leak alone empties a full tank in:',
      options: ['30 hours', '24 hours', '20 hours', '16 hours'],
      answer: 1,
      explain: 'LCM 24: tap +3, net +2, so the leak is −1 an hour. It empties the tank in 24 hours.',
    },
    {
      q: '12 men start a 20-day job. After 8 days, 4 more men join. The job is completed in a total of:',
      options: ['16 days', '18 days', '17 days', '19 days'],
      answer: 2,
      explain: '240 man-days total; 96 used in 8 days leaves 144, which 16 men clear in 9 days. Total 17 days.',
    },
    {
      q: 'A and B do a work in 6 and 8 days. With C they finish in 3 days. C alone would take:',
      options: ['20 days', '18 days', '12 days', '24 days'],
      answer: 3,
      explain: 'LCM 24: A = 4, B = 3, all three = 8. So C = 1 unit a day and takes 24 days.',
    },
  ],

  faqs: [
    {
      q: 'What is the LCM method in Time and Work?',
      a: 'Instead of calling the job "1" and working in fractions, call it the LCM of every time in the question. Each worker\'s daily output then becomes a whole number. For times of 12 and 18 days, the job is 36 units and the rates are 3 and 2 a day — so together they do 5 a day and finish in 7.2 days.',
    },
    {
      q: 'If A takes 10 days and B takes 15 days, why is the answer not 12.5 days?',
      a: 'Because times cannot be averaged — only rates add. Two people working together must be faster than the faster one alone, so any answer above 10 days is wrong on its face. The correct working is 1/10 + 1/15 = 1/6, giving 6 days.',
    },
    {
      q: 'What is the relationship between efficiency and time?',
      a: 'They are inversely proportional. If A is three times as efficient as B, A takes a third of the time, and the efficiency ratio 3 : 1 corresponds to a time ratio of 1 : 3. Whenever a question gives you one, write down the other immediately.',
    },
    {
      q: 'How do pipes and cisterns differ from ordinary work problems?',
      a: 'Only in sign. An inlet pipe is a worker with a positive rate; an outlet pipe or a leak has a negative one. Add all the rates and the sign of the total tells you whether the tank fills or empties. Everything else — the LCM method included — is unchanged.',
    },
    {
      q: 'What is the man-days formula?',
      a: 'M₁D₁H₁/W₁ = M₂D₂H₂/W₂, where M is the number of workers, D the days, H the hours per day and W the amount of work. Drop H when hours are not mentioned and W when the job is the same, which reduces it to M₁D₁ = M₂D₂.',
    },
    {
      q: 'How do I handle people working on alternate days?',
      a: 'Work out how much is done in one complete two-day cycle, then see how many cycles fit into the total. If A does 3 units and B 2, a cycle produces 5 units, so a 30-unit job needs six cycles — 12 days. Always check whether the job finishes partway through the last cycle.',
    },
    {
      q: 'How are wages divided in Time and Work problems?',
      a: 'In proportion to the work each person actually did, never to the time they spent. If three workers who would take 6, 8 and 12 days alone all work throughout, their rates are 4 : 3 : 2 and the money splits in that ratio.',
    },
    {
      q: 'How do I solve problems mixing men and women?',
      a: 'Set up two equations from the two given combinations and eliminate one variable to find how many women equal one man. Once you have that conversion, express the whole team in a single unit and use the man-days idea as normal.',
    },
    {
      q: 'How do I find how much work is left after some days?',
      a: 'Multiply the combined rate by the days worked to get units completed, then subtract from the total. Working in LCM units keeps this as whole-number subtraction; dividing at the end converts it back to a fraction if the question wants one.',
    },
    {
      q: 'How much of the exam is Time and Work?',
      a: 'Expect two to four questions in SSC CGL and CHSL, three to four in RRB NTPC, and two to three in banking — usually one straight work question plus one on pipes and cisterns. With the LCM method it is among the fastest topics to score in.',
    },
  ],

  related: [
    { label: 'Time, Speed & Distance', to: '/study-material/quantitative-aptitude/time-speed-distance/' },
    { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
    { label: 'Percentages', to: '/study-material/quantitative-aptitude/percentages/' },
    { label: 'Number System', to: '/study-material/quantitative-aptitude/number-system/' },
    { label: 'Profit & Loss', to: '/study-material/quantitative-aptitude/profit-loss/' },
    { label: 'All Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
  ],
}
