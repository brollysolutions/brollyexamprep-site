/**
 * Time, Speed & Distance — /study-material/quantitative-aptitude/time-speed-distance/
 *
 * One formula and a great many disguises. The page is organised around the
 * disguises — average speed, relative speed, trains, boats, races — because
 * the underlying equation never changes and is not what candidates get wrong.
 *
 * The inverse-ratio idea in section 3 is the highest-leverage part: most
 * "late by 10 minutes" questions collapse to a single line with it.
 */
export default {
  subject: 'quantitative-aptitude',
  subjectName: 'Quantitative Aptitude',
  slug: 'time-speed-distance',
  title: 'Time, Speed & Distance',
  seoTitle: 'Time Speed and Distance for Competitive Exams | Formulas & Practice',
  metaDescription:
    'Complete Time, Speed and Distance study material for SSC, banking and railway exams — unit conversion, average speed, the inverse-ratio shortcut.',
  readMinutes: 21,
  lead: [
    'Time, Speed and Distance is one formula wearing a dozen costumes. Trains, boats, races and "he walks slower and arrives late" questions all reduce to distance = speed × time, and none of them is difficult once you can see which of the three quantities the question has held constant.',
    'Two ideas do most of the work. The first is that when distance is fixed, speed and time are inversely proportional — which turns a whole family of questions into a one-line ratio. The second is relative speed, which is what makes trains, boats and races the same problem.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–5 questions', note: 'Usually one train, one boat and one straight speed question.' },
    { exam: 'Banking Prelims & Mains', count: '2–4 questions', note: 'Boats and trains recur; sometimes inside a caselet.' },
    { exam: 'RRB NTPC / Group D', count: '4–6 questions', note: 'The highest weight of any exam — trains especially.' },
    { exam: 'CAT / MBA entrances', count: '2–4 questions', note: 'Circular tracks, meeting points and multi-leg journeys.' },
  ],

  contents: [
    { icon: 'book', title: 'The formula and units', sub: 'km/h to m/s, and when to convert', href: '#basics' },
    { icon: 'chart', title: 'Average speed', sub: 'Why it is not the average of the speeds', href: '#average' },
    { icon: 'target', title: 'The inverse-ratio shortcut', sub: 'Fixed distance turns speed into time', href: '#inverse' },
    { icon: 'refresh', title: 'Relative speed', sub: 'Same direction, opposite direction', href: '#relative' },
    { icon: 'layers', title: 'Trains', sub: 'Poles, platforms and crossing each other', href: '#trains' },
    { icon: 'globe', title: 'Boats and streams', sub: 'Upstream, downstream and still water', href: '#boats' },
    { icon: 'user', title: 'Races and head starts', sub: '"A beats B by 20 metres"', href: '#races' },
    { icon: 'bell', title: 'Traps that cost marks', sub: 'Units, averages and lengths', href: '#traps' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'basics',
      heading: 'The formula and units',
      eyebrow: 'Start here',
      intro:
        'Everything on this page comes from one equation. The marks are lost in unit conversion, not in the algebra.',
      blocks: [
        {
          type: 'formula',
          title: 'The core relationships',
          items: [
            { expr: 'Distance = Speed × Time', note: 'And therefore Speed = Distance ÷ Time and Time = Distance ÷ Speed.' },
            { expr: 'km/h → m/s: multiply by 5/18', note: '72 km/h = 72 × 5/18 = 20 m/s. Every train question needs this.' },
            { expr: 'm/s → km/h: multiply by 18/5', note: '15 m/s = 15 × 18/5 = 54 km/h.' },
            { expr: 'Keep all three quantities in one system before computing', note: 'Metres with seconds, or kilometres with hours. Mixing them is the single most common error in the topic.' },
          ],
        },
        {
          type: 'note',
          title: 'Which conversion, and when',
          text:
            'Train and race questions are in metres and seconds, so convert speeds to m/s. Journey questions are in kilometres and hours, so leave them alone. A quick sanity check: 5/18 is less than 1, so converting km/h to m/s must make the number smaller.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'average',
      heading: 'Average speed',
      eyebrow: 'Guaranteed question',
      intro:
        'Average speed is total distance divided by total time. It is almost never the average of the two speeds, and the question is set precisely because candidates assume it is.',
      blocks: [
        {
          type: 'formula',
          title: 'The formulas',
          items: [
            { expr: 'Average speed = total distance ÷ total time', note: 'The definition. When in doubt, compute both totals and divide — it is never wrong.' },
            { expr: 'Equal DISTANCES at u and v: average = 2uv ÷ (u + v)', note: 'The harmonic mean. Going 30 km at 30 km/h and 30 km at 60 km/h averages 40 km/h, not 45.' },
            { expr: 'Equal TIMES at u and v: average = (u + v) ÷ 2', note: 'Only here is the plain average correct. Read carefully which is held equal.' },
            { expr: 'Three equal distances at u, v, w: average = 3uvw ÷ (uv + vw + wu)', note: 'The same harmonic pattern extended.' },
          ],
        },
        {
          type: 'note',
          title: 'The average is always closer to the slower speed',
          text:
            'You spend more time at the slower speed, so it carries more weight. For 30 and 60 km/h over equal distances the answer is 40 — below the midpoint of 45. If your answer lands above the midpoint, you have used the wrong formula.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'inverse',
      heading: 'The inverse-ratio shortcut',
      eyebrow: 'The big one',
      intro:
        'When the distance is fixed, speed and time are inversely proportional. A whole family of "late by ten minutes" questions collapses to one line with this.',
      blocks: [
        {
          type: 'formula',
          title: 'The relationship',
          items: [
            { expr: 'Fixed distance ⇒ Speed ∝ 1 ÷ Time', note: 'If speeds are in the ratio a : b, the times are in the ratio b : a. Simply flip it.' },
            { expr: 'Walking at a/b of the usual speed ⇒ time becomes b/a of usual', note: 'At 3/4 speed the journey takes 4/3 of the usual time — an extra 1/3.' },
            { expr: 'The extra time equals the difference in the time ratio', note: 'Time ratio 4 : 3 means the difference is 1 part, and that part is the lateness the question gives you.' },
          ],
        },
        {
          type: 'example',
          q: 'Walking at 3/4 of his usual speed, a man reaches his office 10 minutes late. What is his usual time?',
          steps: [
            'Speeds are in the ratio 3 : 4 (new : usual).',
            'Distance is fixed, so times are in the inverse ratio 4 : 3 (new : usual).',
            'The difference is 4 − 3 = 1 part, and that part is the 10 minutes of lateness.',
            'The usual time is 3 parts.',
          ],
          answer: '30 minutes.',
        },
        {
          type: 'note',
          title: 'Read which ratio is which',
          text:
            'At 3/4 of the usual speed, the NEW speed is 3 and the usual is 4. Getting these the wrong way round gives 40 minutes instead of 30, and both appear in the options. The slower speed must give the longer time.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'relative',
      heading: 'Relative speed',
      eyebrow: 'Core skill',
      intro:
        'When two bodies move, what matters is how fast the gap between them changes. That is the relative speed, and it is what makes trains, boats and races one topic rather than three.',
      blocks: [
        {
          type: 'formula',
          title: 'The two cases',
          items: [
            { expr: 'Opposite directions (approaching or crossing): relative speed = u + v', note: 'The gap closes at the sum, so crossing happens quickly.' },
            { expr: 'Same direction (overtaking): relative speed = u − v', note: 'The gap closes at the difference, so overtaking takes much longer.' },
            { expr: 'Time to meet = initial gap ÷ relative speed', note: 'Two cars 300 km apart approaching at 40 and 60 km/h meet after 300 ÷ 100 = 3 hours.' },
          ],
        },
        {
          type: 'note',
          title: 'The tell in the question',
          text:
            'Words like "towards each other", "cross" and "meet" mean add. Words like "overtake", "same direction" and "catch up" mean subtract. If a same-direction answer comes out smaller than an opposite-direction one for the same pair, you have swapped them.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'trains',
      heading: 'Trains',
      eyebrow: 'Highest yield',
      intro:
        'A train is not a point — it has length, and that length is part of the distance covered. Deciding what distance is involved is the whole question.',
      blocks: [
        {
          type: 'table',
          caption: 'Work out the distance first, then divide by the speed. Everything in metres and seconds.',
          head: ['Situation', 'Distance covered', 'Speed to use'],
          rows: [
            ['Train crosses a pole, post or standing person', 'Length of the train', 'Speed of the train'],
            ['Train crosses a platform, bridge or tunnel', 'Train length + platform length', 'Speed of the train'],
            ['Two trains cross, opposite directions', 'Sum of both lengths', 'Sum of the speeds'],
            ['Faster train overtakes slower, same direction', 'Sum of both lengths', 'Difference of the speeds'],
            ['Train passes a man walking towards it', 'Length of the train', 'Sum of the speeds'],
            ['Train passes a man walking away from it', 'Length of the train', 'Difference of the speeds'],
          ],
        },
        {
          type: 'example',
          q: 'A train 240 m long travelling at 72 km/h crosses a platform 360 m long. How long does it take?',
          steps: [
            'Convert the speed: 72 × 5/18 = 20 m/s.',
            'The train must clear its own length plus the platform: 240 + 360 = 600 m.',
            '600 ÷ 20',
          ],
          answer: '30 seconds.',
        },
        {
          type: 'example',
          q: 'Two trains 120 m and 180 m long run in opposite directions at 40 km/h and 50 km/h. How long do they take to cross each other?',
          steps: [
            'Opposite directions, so the relative speed is 40 + 50 = 90 km/h.',
            '90 × 5/18 = 25 m/s.',
            'Distance = 120 + 180 = 300 m.',
            '300 ÷ 25',
          ],
          answer: '12 seconds.',
        },
        {
          type: 'note',
          title: 'A person has no length',
          text:
            'When a train passes a pole or a person, the distance is just the train\'s length — a pole and a person are treated as points. Only platforms, bridges and other trains add length.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'boats',
      heading: 'Boats and streams',
      eyebrow: 'Relative speed again',
      intro:
        'The current helps you one way and hinders you the other. That is all there is to it, and the two formulas for recovering the boat and stream speeds are worth memorising exactly.',
      blocks: [
        {
          type: 'formula',
          title: 'The four relationships',
          items: [
            { expr: 'Downstream speed = boat speed + stream speed', note: 'Going with the current.' },
            { expr: 'Upstream speed = boat speed − stream speed', note: 'Going against it. If this is zero or negative the boat cannot make headway.' },
            { expr: 'Boat speed in still water = (downstream + upstream) ÷ 2', note: 'The average of the two observed speeds.' },
            { expr: 'Stream speed = (downstream − upstream) ÷ 2', note: 'Half the difference.' },
          ],
        },
        {
          type: 'example',
          q: 'A boat covers 30 km downstream in 2 hours and returns in 3 hours. Find the speed of the boat in still water and the speed of the stream.',
          steps: [
            'Downstream speed = 30 ÷ 2 = 15 km/h.',
            'Upstream speed = 30 ÷ 3 = 10 km/h.',
            'Boat = (15 + 10) ÷ 2 = 12.5 km/h.',
            'Stream = (15 − 10) ÷ 2 = 2.5 km/h.',
          ],
          answer: 'Boat 12.5 km/h, stream 2.5 km/h.',
        },
        {
          type: 'note',
          title: 'A round trip is never the plain average',
          text:
            'Rowing a fixed distance down and back at 15 and 10 km/h gives an average of 2 × 15 × 10 / 25 = 12 km/h, not 12.5. The still-water speed and the average speed of the round trip are different numbers, and both appear in the options.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'races',
      heading: 'Races and head starts',
      eyebrow: 'Question shapes',
      intro:
        'Race questions are relative-speed questions with a specific vocabulary. Translate the phrase into "in the same time, A covers this and B covers that" and it becomes a ratio.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              '"A beats B by x metres"',
              'In the time A finishes the race, B has covered (race length − x). Since the time is the same, the ratio of speeds equals the ratio of those distances. In a 200 m race won by 25 m, speeds are 200 : 175 = 8 : 7.',
            ],
            [
              '"A beats B by t seconds"',
              'B needs t more seconds to finish the same distance. Use that to find B\'s speed, then compare.',
            ],
            [
              '"A gives B a start of x metres"',
              'B runs (race length − x) while A runs the whole distance. A head start in metres shortens B\'s course.',
            ],
            [
              '"A gives B a start of t seconds"',
              'B begins t seconds earlier, so A\'s running time is t less than B\'s for the same finish.',
            ],
            [
              'Dead heat',
              'Both finish together, so their times are equal. Set the two times equal and solve for whatever the question left unknown.',
            ],
          ],
        },
        {
          type: 'example',
          q: 'In a 100 m race, A beats B by 20 m. If A runs at 5 m/s, what is B\'s speed?',
          steps: [
            'A covers 100 m at 5 m/s, taking 20 seconds.',
            'In those same 20 seconds B covers only 80 m.',
            '80 ÷ 20',
          ],
          answer: '4 m/s.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'traps',
      heading: 'Traps that cost marks',
      eyebrow: 'Read this twice',
      intro: 'Four recurring errors, none of them mathematical.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Forgetting to convert units',
              'A train length in metres divided by a speed in km/h gives nonsense. Convert to m/s with 5/18 before dividing, every time.',
            ],
            [
              'Averaging the two speeds',
              'Over equal distances the average speed is the harmonic mean 2uv/(u+v), not (u+v)/2. The plain average is right only when the TIMES are equal.',
            ],
            [
              'Leaving out the train\'s own length',
              'Crossing a platform means covering the platform plus the train. Only a pole or a person can be treated as a point.',
            ],
            [
              'Inverting the speed ratio the wrong way',
              'At 3/4 of the usual speed the time becomes 4/3 of usual, not 3/4. The slower you go, the longer it takes — check your answer against that before moving on.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Convert 72 km/h into metres per second.',
      steps: ['Multiply by 5/18.', '72 × 5/18 = 360/18'],
      answer: '20 m/s.',
    },
    {
      q: 'A man travels 30 km at 30 km/h and another 30 km at 60 km/h. Find his average speed.',
      steps: [
        'The distances are equal, so use the harmonic mean.',
        'Average = 2 × 30 × 60 ÷ (30 + 60)',
        '3600 ÷ 90',
        'Check the long way: 1 hour + 0.5 hours = 1.5 hours for 60 km.',
      ],
      answer: '40 km/h — not 45.',
    },
    {
      q: 'A train 180 m long crosses a pole in 12 seconds. Find its speed in km/h.',
      steps: [
        'Crossing a pole means covering only the train\'s own length.',
        '180 ÷ 12 = 15 m/s',
        '15 × 18/5',
      ],
      answer: '54 km/h.',
    },
    {
      q: 'A train 300 m long overtakes another train 200 m long moving in the same direction. Their speeds are 70 km/h and 50 km/h. How long does the overtaking take?',
      steps: [
        'Same direction, so relative speed = 70 − 50 = 20 km/h.',
        '20 × 5/18 = 50/9 m/s.',
        'Distance = 300 + 200 = 500 m.',
        '500 ÷ (50/9) = 500 × 9/50',
      ],
      answer: '90 seconds.',
    },
    {
      q: 'A boat travels 24 km upstream in 3 hours. If the boat\'s speed in still water is 12 km/h, find the speed of the stream.',
      steps: [
        'Upstream speed = 24 ÷ 3 = 8 km/h.',
        'Upstream = boat − stream, so 8 = 12 − stream.',
      ],
      answer: 'The stream flows at 4 km/h.',
    },
    {
      q: 'Two cars 300 km apart drive towards each other at 40 km/h and 60 km/h. After how long do they meet?',
      steps: ['Approaching, so relative speed = 40 + 60 = 100 km/h.', '300 ÷ 100'],
      answer: '3 hours.',
    },
    {
      q: 'Walking at 5/6 of his usual speed, a man is 8 minutes late. Find his usual time.',
      steps: [
        'Speeds new : usual = 5 : 6.',
        'Times invert to new : usual = 6 : 5.',
        'The difference of 1 part is the 8 minutes of lateness.',
        'Usual time is 5 parts.',
      ],
      answer: '40 minutes.',
    },
    {
      q: 'In a 200 m race A beats B by 25 m. Find the ratio of their speeds.',
      steps: [
        'In the time A runs 200 m, B runs 200 − 25 = 175 m.',
        'Equal times mean the speed ratio equals the distance ratio.',
        '200 : 175, divided by 25.',
      ],
      answer: '8 : 7.',
    },
    {
      q: 'A man walking at 6 km/h reaches his office 5 minutes early; at 4 km/h he is 5 minutes late. How far is the office?',
      steps: [
        'The two journeys differ by 10 minutes, which is 1/6 of an hour.',
        'Let the distance be d. Then d/4 − d/6 = 1/6.',
        'Common denominator: d(3 − 2)/12 = d/12 = 1/6.',
        'd = 12/6',
      ],
      answer: '2 km.',
    },
    {
      q: 'A train travelling at 54 km/h passes a man walking at 6 km/h in the same direction in 20 seconds. Find the length of the train.',
      steps: [
        'Same direction, so relative speed = 54 − 6 = 48 km/h.',
        '48 × 5/18 = 40/3 m/s.',
        'Passing a man covers only the train\'s length.',
        'Length = (40/3) × 20',
      ],
      answer: '266.67 m, or 800/3 metres.',
    },
  ],

  practice: [
    {
      q: '90 km/h expressed in metres per second is:',
      options: ['25 m/s', '30 m/s', '18 m/s', '20 m/s'],
      answer: 0,
      explain: 'Multiply by 5/18: 90 × 5/18 = 25 m/s.',
    },
    {
      q: 'A car travelling at 45 km/h covers, in 3 hours, a distance of:',
      options: ['120 km', '135 km', '90 km', '150 km'],
      answer: 1,
      explain: 'Distance = speed × time = 45 × 3 = 135 km.',
    },
    {
      q: 'Travelling 60 km at 40 km/h and returning at 60 km/h, the average speed is:',
      options: ['45 km/h', '50 km/h', '48 km/h', '52 km/h'],
      answer: 2,
      explain: 'Equal distances, so use 2uv/(u+v) = 2 × 40 × 60 / 100 = 48 km/h — below the midpoint of 50.',
    },
    {
      q: 'A train 150 m long crosses a pole in 10 seconds. Its speed is:',
      options: ['60 km/h', '45 km/h', '50 km/h', '54 km/h'],
      answer: 3,
      explain: '150 ÷ 10 = 15 m/s, and 15 × 18/5 = 54 km/h.',
    },
    {
      q: 'A train 200 m long at 54 km/h crosses a bridge 250 m long in:',
      options: ['30 seconds', '40 seconds', '25 seconds', '35 seconds'],
      answer: 0,
      explain: '54 km/h is 15 m/s. Distance = 200 + 250 = 450 m, so the time is 450 ÷ 15 = 30 seconds.',
    },
    {
      q: 'Two trains 150 m and 100 m long run in opposite directions at 60 and 40 km/h. They cross in:',
      options: ['10 seconds', '9 seconds', '12 seconds', '15 seconds'],
      answer: 1,
      explain: 'Relative speed = 100 km/h = 250/9 m/s. Distance = 250 m, so time = 250 ÷ (250/9) = 9 seconds.',
    },
    {
      q: 'A boat with a still-water speed of 12 km/h travels 30 km downstream in a 3 km/h current in:',
      options: ['2.5 hours', '3 hours', '2 hours', '1.5 hours'],
      answer: 2,
      explain: 'Downstream speed = 12 + 3 = 15 km/h, so 30 ÷ 15 = 2 hours.',
    },
    {
      q: 'A boat covers 24 km upstream in 3 hours. If its still-water speed is 12 km/h, the stream flows at:',
      options: ['3 km/h', '5 km/h', '2 km/h', '4 km/h'],
      answer: 3,
      explain: 'Upstream speed = 24 ÷ 3 = 8 km/h, so the stream is 12 − 8 = 4 km/h.',
    },
    {
      q: 'Two runners cover the same distance with speeds in the ratio 4 : 5. Their times are in the ratio:',
      options: ['5 : 4', '16 : 25', '1 : 1', '4 : 5'],
      answer: 0,
      explain: 'With distance fixed, time is inversely proportional to speed, so the ratio flips to 5 : 4.',
    },
    {
      q: 'Walking at 5/6 of his usual speed a man is 8 minutes late. His usual time is:',
      options: ['48 minutes', '40 minutes', '36 minutes', '45 minutes'],
      answer: 1,
      explain: 'Times invert to 6 : 5, so the 1-part difference is 8 minutes and the usual time is 5 × 8 = 40 minutes.',
    },
    {
      q: 'In a 200 m race A beats B by 25 m. The ratio of their speeds is:',
      options: ['4 : 3', '25 : 200', '8 : 7', '7 : 8'],
      answer: 2,
      explain: 'In equal time A runs 200 m and B runs 175 m, so the speeds are in the ratio 200 : 175 = 8 : 7.',
    },
    {
      q: 'Two cars 300 km apart approach each other at 40 and 60 km/h. They meet after:',
      options: ['2.5 hours', '2 hours', '4 hours', '3 hours'],
      answer: 3,
      explain: 'Relative speed = 40 + 60 = 100 km/h, so they meet after 300 ÷ 100 = 3 hours.',
    },
    {
      q: 'A cyclist rides 20 km at 10 km/h and 20 km at 20 km/h. His average speed is:',
      options: ['13.33 km/h', '16 km/h', '12 km/h', '15 km/h'],
      answer: 0,
      explain: 'Equal distances: 2 × 10 × 20 / 30 = 13.33 km/h. Total 40 km in 3 hours confirms it.',
    },
    {
      q: 'A train 300 m long overtakes a 200 m train going the same way; speeds are 70 and 50 km/h. It takes:',
      options: ['45 seconds', '90 seconds', '60 seconds', '75 seconds'],
      answer: 1,
      explain: 'Relative speed = 20 km/h = 50/9 m/s. Distance = 500 m, so time = 500 × 9/50 = 90 seconds.',
    },
    {
      q: 'A man walking at 6 km/h is 5 minutes early; at 4 km/h he is 5 minutes late. The distance is:',
      options: ['3 km', '1.5 km', '2 km', '2.5 km'],
      answer: 2,
      explain: 'The journeys differ by 10 minutes = 1/6 hour, so d/4 − d/6 = 1/6 gives d/12 = 1/6 and d = 2 km.',
    },
    {
      q: 'A train at 54 km/h passes a man walking at 6 km/h in the same direction in 20 seconds. The train is:',
      options: ['333.33 m long', '400 m long', '300 m long', '266.67 m long'],
      answer: 3,
      explain: 'Relative speed = 48 km/h = 40/3 m/s. Length = (40/3) × 20 = 800/3 = 266.67 m.',
    },
  ],

  faqs: [
    {
      q: 'What is the basic formula for time, speed and distance?',
      a: 'Distance = Speed × Time, which rearranges to Speed = Distance ÷ Time and Time = Distance ÷ Speed. Every question on the topic is this equation with one quantity held constant; the difficulty is always in identifying which one.',
    },
    {
      q: 'How do I convert km/h to m/s?',
      a: 'Multiply by 5/18. So 72 km/h becomes 20 m/s. To go the other way, multiply by 18/5. Since 5/18 is less than 1, converting to m/s must always make the number smaller — a quick way to catch the mistake.',
    },
    {
      q: 'Why is average speed not the average of the two speeds?',
      a: 'Because you spend more time at the slower speed, so it carries more weight. Over equal distances the correct figure is the harmonic mean, 2uv/(u+v). At 30 and 60 km/h that gives 40, not 45. The plain average is right only when the two TIMES are equal, not the distances.',
    },
    {
      q: 'What is relative speed?',
      a: 'The rate at which the gap between two moving bodies changes. Moving in opposite directions the speeds add; moving in the same direction they subtract. This one idea covers trains crossing, boats in a current, and overtaking questions alike.',
    },
    {
      q: 'What distance does a train cover when crossing a platform?',
      a: 'Its own length plus the platform\'s length, because the rear of the train must clear the far end. Crossing a pole or a person covers only the train\'s length, since those are treated as points with no length of their own.',
    },
    {
      q: 'How do I find the speed of a boat and of the stream?',
      a: 'Boat speed in still water = (downstream + upstream) ÷ 2, and stream speed = (downstream − upstream) ÷ 2. If a boat does 15 km/h downstream and 10 km/h upstream, the boat is 12.5 km/h and the stream 2.5 km/h.',
    },
    {
      q: 'What does "A beats B by 20 metres" mean?',
      a: 'That in the time A finished the race, B had covered 20 m less. Since both ran for the same time, the ratio of their speeds equals the ratio of the distances they covered. In a 100 m race that is 100 : 80 = 5 : 4.',
    },
    {
      q: 'How do I solve "walking at 3/4 of his usual speed he is 10 minutes late"?',
      a: 'With the inverse ratio. Speeds are 3 : 4, so times are 4 : 3. The difference of one part is the 10 minutes of lateness, so the usual time is 3 parts — 30 minutes. Reversing the ratio gives 40 minutes, which is the trap answer.',
    },
    {
      q: 'Is the still-water speed the same as the average speed of a round trip?',
      a: 'No, and both are usually in the options. Rowing a fixed distance at 15 km/h down and 10 km/h up gives a still-water speed of 12.5 km/h but a round-trip average of 2 × 15 × 10 / 25 = 12 km/h.',
    },
    {
      q: 'How much of the exam is Time, Speed and Distance?',
      a: 'It carries the highest weight in railway exams — four to six questions in RRB NTPC, trains especially. Expect three to five in SSC CGL and CHSL and two to four in banking. Together with Time and Work it is one of the two biggest arithmetic blocks.',
    },
  ],

  related: [
    { label: 'Time & Work', to: '/study-material/quantitative-aptitude/time-work/' },
    { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
    { label: 'Percentages', to: '/study-material/quantitative-aptitude/percentages/' },
    { label: 'Profit & Loss', to: '/study-material/quantitative-aptitude/profit-loss/' },
    { label: 'Number System', to: '/study-material/quantitative-aptitude/number-system/' },
    { label: 'All Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
  ],
}
