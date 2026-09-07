/**
 * Profit & Loss — /study-material/quantitative-aptitude/profit-loss/
 *
 * Almost entirely an application of Percentages, so the page leans on that
 * topic rather than repeating it: the successive-change rule does all the
 * mark-up-and-discount work, and the reversal shortcut handles cost recovery.
 *
 * The two sections candidates lose marks on — same-selling-price pairs and
 * false weights — get worked derivations rather than a bare formula.
 */
export default {
  subject: 'quantitative-aptitude',
  subjectName: 'Quantitative Aptitude',
  slug: 'profit-loss',
  title: 'Profit & Loss',
  seoTitle: 'Profit and Loss for Competitive Exams | Formulas, Tricks & Practice',
  metaDescription:
    'Complete Profit and Loss study material for SSC, banking and railway exams — cost price and selling price, profit and loss percentage.',
  readMinutes: 20,
  lead: [
    'Profit and Loss is Percentages applied to buying and selling. Every formula on this page is really the percentage-change rule with cost price as the base, which is why the topic rewards understanding over memorising — there are only three quantities in play, and everything else is a relationship between them.',
    'The two places candidates reliably lose marks are the same-selling-price pair, where an equal gain and loss always ends in a net loss, and false-weight questions, where the base is the false weight rather than the true one. Both are derived in full below rather than stated as formulas to trust.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–5 questions', note: 'Among the most predictable scoring topics in the paper.' },
    { exam: 'Banking Prelims & Mains', count: '2–4 questions', note: 'Often merged with discount or partnership in one multi-step question.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'Usually single-step and formula-based.' },
    { exam: 'CAT / MBA entrances', count: '2–3 questions', note: 'Harder framing: false weights, mark-up chains, break-even reasoning.' },
  ],

  contents: [
    { icon: 'book', title: 'Cost, selling price and profit', sub: 'The three quantities and how they relate', href: '#basics' },
    { icon: 'chart', title: 'Profit and loss percentage', sub: 'Why the base is always cost price', href: '#percent' },
    { icon: 'layers', title: 'Marked price and discount', sub: 'Mark-up, discount and the chain between them', href: '#discount' },
    { icon: 'refresh', title: 'Successive discounts', sub: 'Two or three offers combined into one', href: '#successive' },
    { icon: 'target', title: 'The same-selling-price trap', sub: 'Equal gain and loss is always a loss', href: '#same-sp' },
    { icon: 'check', title: 'False weights and dishonest dealers', sub: 'Selling at cost and still profiting', href: '#false-weight' },
    { icon: 'doc', title: 'Article-count and offer questions', sub: 'Buy x get y free, CP of m equals SP of n', href: '#articles' },
    { icon: 'bell', title: 'Traps that cost marks', sub: 'Profit on SP, shifting bases, two-step recovery', href: '#traps' },
    { icon: 'user', title: 'Solved examples', sub: 'Ten questions worked line by line', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'basics',
      heading: 'Cost price, selling price and profit',
      eyebrow: 'Start here',
      intro:
        'Three quantities carry the whole topic. Get the vocabulary exactly right and most questions become one substitution.',
      blocks: [
        {
          type: 'defs',
          items: [
            ['Cost price (CP)', 'What the seller paid, including any overheads the question mentions — transport, repairs, labour. If a question gives you "bought for ₹400 and spent ₹50 on repairs", the cost price is ₹450, not ₹400.'],
            ['Selling price (SP)', 'What the buyer actually paid. If a discount is involved, the selling price is the price after the discount, not the marked price.'],
            ['Marked price (MP)', 'The label or list price, before any discount. Also called the list price or printed price.'],
            ['Profit', 'SP − CP, when the selling price is the larger. Also called gain.'],
            ['Loss', 'CP − SP, when the cost price is the larger.'],
            ['Overheads', 'Costs added to the purchase price before computing profit. They belong in CP.'],
          ],
        },
        {
          type: 'note',
          title: 'One rule underpins everything',
          text:
            'Unless a question explicitly says otherwise, profit and loss percentages are always calculated on the COST PRICE. Discount percentages, by contrast, are always calculated on the MARKED PRICE. Nearly every wrong answer in this topic comes from using the wrong base.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'percent',
      heading: 'Profit and loss percentage',
      eyebrow: 'Core formulas',
      intro:
        'These are the percentage-change formulas from the Percentages page, with cost price fixed as the base. If you are comfortable with multiplying factors, you can skip the addition entirely.',
      blocks: [
        {
          type: 'formula',
          title: 'The formulas',
          items: [
            { expr: 'Profit% = [(SP − CP) ÷ CP] × 100', note: 'The denominator is cost price. Always.' },
            { expr: 'Loss% = [(CP − SP) ÷ CP] × 100', note: 'Same base, opposite direction.' },
            { expr: 'SP = CP × (100 + profit%) ÷ 100', note: 'A 25% profit means SP = CP × 1.25.' },
            { expr: 'SP = CP × (100 − loss%) ÷ 100', note: 'A 20% loss means SP = CP × 0.80.' },
            { expr: 'CP = SP × 100 ÷ (100 + profit%)', note: 'Recovering cost price is a division, never a subtraction of the same percentage.' },
            { expr: 'CP = SP × 100 ÷ (100 − loss%)', note: 'Sold at ₹720 with a 10% loss → CP = 720 ÷ 0.90 = ₹800.' },
          ],
        },
        {
          type: 'p',
          text:
            'Because profit percentages are fractions in disguise, the fraction table from the Percentages page applies directly. A 25% profit is a 5/4 multiplier, a 20% loss is 4/5, a 16.67% profit is 7/6. Working in fractions keeps the numbers whole and removes almost all the arithmetic.',
        },
        {
          type: 'example',
          q: 'A man buys an article for ₹450 and sells it for ₹540. Find his profit percentage.',
          steps: ['Profit = 540 − 450 = ₹90', 'Profit% = (90 ÷ 450) × 100', '90/450 simplifies to 1/5'],
          answer: '20%.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'discount',
      heading: 'Marked price and discount',
      eyebrow: 'High yield',
      intro:
        'A shopkeeper marks goods above cost, then discounts from that mark. Two different bases are in play at once, which is exactly why these questions are set.',
      blocks: [
        {
          type: 'formula',
          title: 'The chain',
          items: [
            { expr: 'Discount = MP − SP', note: 'The rupee amount knocked off the label price.' },
            { expr: 'Discount% = [(MP − SP) ÷ MP] × 100', note: 'Base is the MARKED price, not the cost price.' },
            { expr: 'SP = MP × (100 − discount%) ÷ 100', note: 'Marked ₹1 200 with 15% off → SP = 1200 × 0.85 = ₹1 020.' },
            { expr: 'MP × (100 − discount%) = CP × (100 + profit%)', note: 'The master equation — both sides equal the selling price. Given any three of the four, the fourth follows.' },
          ],
        },
        {
          type: 'example',
          q: 'A shopkeeper marks goods 40% above cost and then allows a 25% discount. What is his profit percentage?',
          steps: [
            'Take CP = 100, so MP = 140.',
            'SP = 140 × 0.75 = 105',
            'Profit = 105 − 100 = 5 on a cost of 100.',
            'Or use the successive rule directly: 40 − 25 + (40 × −25)/100 = 15 − 10.',
          ],
          answer: 'A 5% profit.',
        },
        {
          type: 'note',
          title: 'Mark-up and profit are different numbers',
          text:
            'Marking goods up 40% does not mean a 40% profit unless nothing is discounted. The mark-up is measured on cost, the discount on the marked price, and the profit on cost again — three steps, two different bases.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'successive',
      heading: 'Successive discounts',
      eyebrow: 'Shortcut',
      intro:
        'Two discounts one after the other never add. The second acts on an already-reduced price, so the combined discount is always less than the sum.',
      blocks: [
        {
          type: 'formula',
          title: 'Combining offers',
          items: [
            { expr: 'Two discounts of a% and b% = a + b − ab/100 (as a single discount)', note: '20% and 15% → 35 − 3 = 32%, not 35%.' },
            { expr: 'Equivalently, multiply the factors: (1 − a/100)(1 − b/100)', note: '0.80 × 0.85 = 0.68, so 32% is lost.' },
            { expr: 'For three discounts, combine the first two, then combine that with the third', note: '20%, 10% and 5% → 28% then 31.6%.' },
            { expr: 'Buy x get y free ⇒ discount% = [y ÷ (x + y)] × 100', note: 'Buy 3 get 1 free is a 25% discount, because you pay for 3 of 4 items.' },
          ],
        },
        {
          type: 'example',
          q: 'Find the single discount equivalent to successive discounts of 20% and 15%.',
          steps: [
            'a = −20 and b = −15.',
            'Net = −20 − 15 + (−20 × −15)/100',
            'Net = −35 + 3',
            'Check: 100 → 80 → 68.',
          ],
          answer: 'A single discount of 32%.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'same-sp',
      heading: 'The same-selling-price trap',
      eyebrow: 'Guaranteed question',
      intro:
        'Two articles are sold at the SAME price, one at a gain of x% and the other at a loss of x%. Candidates answer "no profit no loss". The real answer is always a loss, and the derivation is worth seeing once.',
      blocks: [
        {
          type: 'formula',
          title: 'The result',
          items: [
            { expr: 'Two articles at the same SP, one at +x% and one at −x% ⇒ net LOSS of x²/100 %', note: 'Independent of the selling price itself. At ±10% the loss is 1%; at ±20% it is 4%.' },
          ],
        },
        {
          type: 'example',
          q: 'Two articles are each sold for ₹120, one at a 20% profit and the other at a 20% loss. Find the overall result.',
          steps: [
            'First article: CP = 120 ÷ 1.20 = ₹100',
            'Second article: CP = 120 ÷ 0.80 = ₹150',
            'Total CP = ₹250, total SP = ₹240',
            'Loss = ₹10 on ₹250 = 4%, which is 20²/100.',
          ],
          answer: 'A 4% loss overall.',
        },
        {
          type: 'note',
          title: 'Why it must be a loss',
          text:
            'The article sold at a loss had the higher cost price, so more money was tied up in the losing item than in the winning one. The percentages are equal but the bases are not, and the larger base always belongs to the loss.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'false-weight',
      heading: 'False weights and dishonest dealers',
      eyebrow: 'Trap',
      intro:
        'A trader claims to sell at cost price but hands over less than the stated weight. He still profits, and the base for that profit is what he actually gave, not what he claimed.',
      blocks: [
        {
          type: 'formula',
          title: 'The formulas',
          items: [
            { expr: 'Gain% = [(true weight − false weight) ÷ false weight] × 100', note: 'Giving 900 g for a kilogram → (100 ÷ 900) × 100 = 11.11%.' },
            { expr: 'Equivalently Gain% = [error ÷ (true value − error)] × 100', note: 'Same statement, phrased for questions that give you the shortfall directly.' },
            { expr: 'Selling at a mark-up AND using a false weight: multiply the factors', note: 'A 20% mark-up with a 900 g weight gives 1.20 × (1000/900) = 1.333, a 33.33% gain.' },
          ],
        },
        {
          type: 'example',
          q: 'A dealer professes to sell his goods at cost price but uses a 900 g weight for a kilogram. Find his gain percentage.',
          steps: [
            'He charges the cost of 1 000 g but parts with only 900 g.',
            'His actual cost is that of 900 g; his revenue is that of 1 000 g.',
            'Gain = 100 g worth on a cost of 900 g worth.',
            'Gain% = (100 ÷ 900) × 100',
          ],
          answer: '11.11% (exactly 11 1/9 %).',
        },
        {
          type: 'note',
          title: 'The base is the false weight',
          text:
            'Dividing by 1 000 instead of 900 gives 10%, which is the answer most candidates choose and the one examiners put in the options. Profit is always measured against what it actually cost the seller — and what it cost him was 900 g.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'articles',
      heading: 'Article-count and offer questions',
      eyebrow: 'Question shapes',
      intro:
        'A family of questions phrased in numbers of articles rather than in rupees. Each has a one-line route once you see what is being compared.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'CP of m articles = SP of n articles',
              'Profit% = [(m − n) ÷ n] × 100. If the cost of 20 articles equals the selling price of 16, the profit is (4 ÷ 16) × 100 = 25%. When n exceeds m the same formula returns a negative value, which is the loss.',
            ],
            [
              'Loss equal to the cost of k articles',
              'Set up the equation directly. Selling 17 balls for ₹720 at a loss equal to the cost of 5 balls gives 17x − 720 = 5x, so 12x = 720 and each ball cost ₹60.',
            ],
            [
              'Buy x get y free',
              'You pay for x and receive x + y, so the discount is y/(x + y). Buy 4 get 1 free is a 20% discount, not 25%.',
            ],
            [
              'Discount given AND profit still made',
              'Use the master equation MP(100 − d) = CP(100 + p). A 10% discount with a 20% profit gives MP/CP = 1.20/0.90 = 1.333, so goods were marked 33.33% above cost.',
            ],
            [
              'Profit quoted on selling price',
              'Convert it to a cost-price basis before comparing. A profit that is 25% of SP means CP is 75% of SP, so the profit is 25/75 = 33.33% of cost.',
            ],
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'traps',
      heading: 'Traps that cost marks',
      eyebrow: 'Read this twice',
      intro:
        'Four recurring errors. None involves difficult arithmetic — every one is about which number sits in the denominator.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Using selling price as the base',
              'Profit% is on cost price unless the question says "profit on selling price". The two differ substantially: a profit of 20% on SP is 25% on CP.',
            ],
            [
              'Treating mark-up as profit',
              'Marking up 50% and discounting 20% is not a 30% profit. It is 50 − 20 − 1000/100 = 20%.',
            ],
            [
              'Adding successive discounts',
              '20% then 10% is 28%, never 30%. The second discount applies to the already-reduced price.',
            ],
            [
              'Recovering cost by subtracting the same percentage',
              'If a 25% profit produced ₹500, the cost was 500 ÷ 1.25 = ₹400. Taking 25% off ₹500 gives ₹375 and is wrong.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'By selling an article for ₹720 a man loses 10%. What is the cost price?',
      steps: ['A 10% loss means SP = CP × 0.90.', 'CP = 720 ÷ 0.90'],
      answer: '₹800.',
    },
    {
      q: 'An article costing ₹800 is to be sold at a 25% profit. Find the selling price.',
      steps: ['SP = CP × 1.25', '25% is 1/4, so add a quarter of 800.'],
      answer: '₹1 000.',
    },
    {
      q: 'The marked price of an article is ₹1 200 and a discount of 15% is allowed. Find the selling price.',
      steps: ['SP = MP × (100 − 15)/100', 'SP = 1200 × 0.85'],
      answer: '₹1 020.',
    },
    {
      q: 'Two articles are sold at ₹100 each, one at a 25% gain and one at a 25% loss. Find the net result.',
      steps: [
        'CP of the first = 100 ÷ 1.25 = ₹80',
        'CP of the second = 100 ÷ 0.75 = ₹133.33',
        'Total CP ≈ ₹213.33 against a total SP of ₹200.',
        'Loss ≈ 13.33 on 213.33, which is 25²/100.',
      ],
      answer: 'A loss of 6.25%.',
    },
    {
      q: 'If the cost price of 20 articles equals the selling price of 16 articles, find the profit percentage.',
      steps: [
        'Let each article cost ₹1, so 16 articles sell for ₹20.',
        'SP of one article = 20/16 = ₹1.25',
        'Profit = 0.25 on a cost of 1.',
      ],
      answer: '25% profit.',
    },
    {
      q: 'On selling 17 balls for ₹720 there is a loss equal to the cost price of 5 balls. Find the cost of one ball.',
      steps: [
        'Let one ball cost ₹x, so 17 balls cost 17x.',
        'Loss = 17x − 720, and this equals the cost of 5 balls, 5x.',
        '17x − 720 = 5x gives 12x = 720.',
      ],
      answer: '₹60 per ball.',
    },
    {
      q: 'A shopkeeper allows a 10% discount and still earns a 20% profit. By what percentage above cost are the goods marked?',
      steps: [
        'Use MP(100 − d) = CP(100 + p).',
        'MP × 90 = CP × 120',
        'MP ÷ CP = 120/90 = 4/3',
      ],
      answer: 'Marked 33.33% above cost.',
    },
    {
      q: 'A man sells an article at a 20% profit. Had he bought it for 20% less and sold it for ₹36 less, he would have gained 25%. Find the cost price.',
      steps: [
        'Let the cost price be ₹x, so the selling price is 1.2x.',
        'New cost = 0.8x and new selling price = 1.2x − 36.',
        'A 25% gain gives 1.2x − 36 = 1.25 × 0.8x = x.',
        '0.2x = 36',
      ],
      answer: '₹180. (Check: CP 180, SP 216; new CP 144, new SP 180 — a gain of 36 on 144, which is 25%.)',
    },
    {
      q: 'A trader marks up 20% and also uses a 900 g weight for a kilogram. Find his overall gain percentage.',
      steps: [
        'The mark-up multiplies revenue by 1.20.',
        'The false weight multiplies it again by 1000/900 = 1.111.',
        'Combined factor = 1.20 × 1.111 = 1.3333',
      ],
      answer: 'A gain of 33.33%.',
    },
    {
      q: 'A shop offers "buy 4, get 1 free". What single discount is this equivalent to?',
      steps: ['The customer receives 5 articles but pays for 4.', 'One article in five is free.', 'Discount = 1/5'],
      answer: '20%.',
    },
  ],

  practice: [
    {
      q: 'An article bought for ₹250 is sold for ₹300. The profit percentage is:',
      options: ['20%', '25%', '15%', '16.67%'],
      answer: 0,
      explain: 'Profit = ₹50 on a cost of ₹250, and 50/250 = 1/5 = 20%.',
    },
    {
      q: 'By selling an article for ₹570 a man loses 5%. The cost price is:',
      options: ['₹580', '₹600', '₹595', '₹620'],
      answer: 1,
      explain: 'CP = 570 ÷ 0.95 = ₹600. Check: 5% of 600 is 30, and 600 − 30 = 570.',
    },
    {
      q: 'An article costing ₹400 is sold at a 15% profit. The selling price is:',
      options: ['₹470', '₹440', '₹460', '₹450'],
      answer: 2,
      explain: 'SP = 400 × 1.15 = ₹460.',
    },
    {
      q: 'The marked price is ₹800 and the discount is 12.5%. The selling price is:',
      options: ['₹720', '₹680', '₹750', '₹700'],
      answer: 3,
      explain: '12.5% is 1/8, so the discount is ₹100 and the selling price is ₹700.',
    },
    {
      q: 'Successive discounts of 10% and 20% are equivalent to a single discount of:',
      options: ['28%', '30%', '26%', '32%'],
      answer: 0,
      explain: 'Net = −10 − 20 + (10 × 20)/100 = −28%. Check: 100 → 90 → 72.',
    },
    {
      q: 'An article marked 50% above cost is sold at a 20% discount. The profit percentage is:',
      options: ['30%', '20%', '25%', '15%'],
      answer: 1,
      explain: 'Take CP = 100, so MP = 150 and SP = 150 × 0.8 = 120. The profit is 20%.',
    },
    {
      q: 'Two articles are sold at the same price, one at a 10% profit and one at a 10% loss. The net result is:',
      options: ['1% profit', 'No profit no loss', '1% loss', '2% loss'],
      answer: 2,
      explain: 'An equal gain and loss at the same selling price always loses x²/100 percent — here 100/100 = 1%.',
    },
    {
      q: 'A dealer sells at cost price but uses an 800 g weight for a kilogram. His gain is:',
      options: ['22%', '20%', '18%', '25%'],
      answer: 3,
      explain: 'Gain% = (1000 − 800)/800 × 100 = 25%. The base is the 800 g he actually gave, not 1 000 g.',
    },
    {
      q: 'A shop offers "buy 5, get 1 free". The equivalent discount is:',
      options: ['16.67%', '20%', '25%', '15%'],
      answer: 0,
      explain: 'Six articles are received for the price of five, so the discount is 1/6 = 16.67%.',
    },
    {
      q: 'A man sells an article at a 20% loss for ₹480. To gain 20% he should sell it for:',
      options: ['₹700', '₹720', '₹600', '₹576'],
      answer: 1,
      explain: 'CP = 480 ÷ 0.80 = ₹600. A 20% gain needs SP = 600 × 1.20 = ₹720.',
    },
    {
      q: 'If the cost price of 20 articles equals the selling price of 16 articles, the profit is:',
      options: ['16.67%', '20%', '25%', '30%'],
      answer: 2,
      explain: 'Profit% = (20 − 16)/16 × 100 = 25%. Note the denominator is the number sold, not the number bought.',
    },
    {
      q: 'On selling 17 balls for ₹720 the loss equals the cost of 5 balls. One ball costs:',
      options: ['₹50', '₹45', '₹55', '₹60'],
      answer: 3,
      explain: '17x − 720 = 5x, so 12x = 720 and x = ₹60.',
    },
    {
      q: 'A shopkeeper gives a 10% discount and still makes a 20% profit. The goods are marked above cost by:',
      options: ['33.33%', '35%', '25%', '30%'],
      answer: 0,
      explain: 'MP × 90 = CP × 120, so MP/CP = 4/3 — a mark-up of 33.33%.',
    },
    {
      q: 'A profit of 25% on the selling price is what profit on the cost price?',
      options: ['30%', '33.33%', '25%', '20%'],
      answer: 1,
      explain: 'If profit is 25% of SP then CP is 75% of SP, so profit ÷ CP = 25/75 = 33.33%.',
    },
    {
      q: 'Successive discounts of 20%, 10% and 5% are equivalent to a single discount of:',
      options: ['33%', '35%', '31.6%', '30%'],
      answer: 2,
      explain: 'Factors multiply: 0.8 × 0.9 × 0.95 = 0.684, so 31.6% is lost. 100 → 80 → 72 → 68.4.',
    },
    {
      q: 'An article costs ₹500 and is sold for ₹600. To double the profit it must be sold for:',
      options: ['₹650', '₹1 200', '₹800', '₹700'],
      answer: 3,
      explain: 'The profit is ₹100; doubling it gives ₹200, so SP = 500 + 200 = ₹700. Doubling the selling price is the trap.',
    },
  ],

  faqs: [
    {
      q: 'Is profit percentage calculated on cost price or selling price?',
      a: 'On the cost price, unless a question explicitly says "profit on selling price". Discount percentages, by contrast, are always on the marked price. Nearly every wrong answer in this topic comes from mixing up those two bases.',
    },
    {
      q: 'Why do two articles sold at the same price with equal gain and loss give a net loss?',
      a: 'Because the percentages are equal but the cost prices are not. The article sold at a loss had the higher cost price, so more money was tied up in it. The net result is always a loss of x²/100 percent — 4% for a ±20% pair, 1% for a ±10% pair.',
    },
    {
      q: 'How do I combine two successive discounts?',
      a: 'Use a + b − ab/100, or simply multiply the factors. Discounts of 20% and 15% give 0.80 × 0.85 = 0.68, so the single equivalent discount is 32%. It is always less than the sum, because the second discount applies to an already-reduced price.',
    },
    {
      q: 'What is the difference between mark-up and profit?',
      a: 'Mark-up is the percentage by which the marked price exceeds the cost price. Profit is the percentage by which the actual selling price exceeds cost. They are equal only when no discount is given. A 40% mark-up with a 25% discount leaves just a 5% profit.',
    },
    {
      q: 'How does a dealer who sells at cost price still make a profit?',
      a: 'By using a false weight. If he charges for a kilogram but hands over 900 g, his cost is that of 900 g while his revenue is that of 1 000 g. The gain is (1000 − 900)/900 × 100 = 11.11%. The base is the weight actually given, which is why the answer is not 10%.',
    },
    {
      q: 'What discount is "buy 3 get 1 free" equivalent to?',
      a: '25%. The customer receives four articles and pays for three, so one article in four is free. In general, buy x get y free is a discount of y/(x + y).',
    },
    {
      q: 'How do I find the cost price when only the selling price and profit are given?',
      a: 'Divide, do not subtract. CP = SP × 100/(100 + profit%). A selling price of ₹500 at a 25% profit means CP = 500 ÷ 1.25 = ₹400. Taking 25% off ₹500 gives ₹375 and is the standard trap.',
    },
    {
      q: 'What is the master equation for mark-up and discount questions?',
      a: 'MP × (100 − discount%) = CP × (100 + profit%). Both sides equal the selling price, so given any three of the four quantities you can find the fourth in one step.',
    },
    {
      q: 'How much of the exam is Profit and Loss?',
      a: 'Expect roughly three to five questions in SSC CGL and CHSL Tier 1, three to four in RRB NTPC, and two to four in banking — often merged with discount or partnership. It is one of the most predictable scoring topics in the arithmetic section.',
    },
    {
      q: 'What should I study before Profit and Loss?',
      a: 'Percentages. Every formula here is a percentage change with cost price as the base, and the successive-change rule does all the mark-up-and-discount work. Candidates who are fluent with the fraction table and multiplying factors find this topic almost entirely mechanical.',
    },
  ],

  related: [
    { label: 'Percentages', to: '/study-material/quantitative-aptitude/percentages/' },
    { label: 'Ratio & Proportion', to: '/study-material/quantitative-aptitude/ratio-proportion/' },
    { label: 'Number System', to: '/study-material/quantitative-aptitude/number-system/' },
    { label: 'Time & Work', to: '/study-material/quantitative-aptitude/time-work/' },
    { label: 'Time, Speed & Distance', to: '/study-material/quantitative-aptitude/time-speed-distance/' },
    { label: 'All Quantitative Aptitude', to: '/study-material/quantitative-aptitude/' },
  ],
}
