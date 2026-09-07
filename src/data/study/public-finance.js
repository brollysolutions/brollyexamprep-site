/**
 * Public Finance and the Budget —
 * /study-material/economy/public-finance/
 *
 * Government money: how it is raised, how it is spent, how the gap is measured
 * and how it is shared with the states. The two most volatile items — the GST
 * rate structure and the Finance Commission award — are given as they actually
 * stand rather than as older material describes them.
 */
export default {
  subject: 'economy',
  subjectName: 'Indian Economy',
  slug: 'public-finance',
  title: 'Public Finance & Budget',
  seoTitle: 'Public Finance and Union Budget | Deficits, Taxation, GST Notes & Practice',
  metaDescription:
    'Complete public finance study material for UPSC, SSC, banking and state exams — the Union Budget and its documents, receipts and expenditure.',
  readMinutes: 25,
  lead: [
    'Public finance is the most formula-like part of the economy syllabus. Four deficit measures, each defined by exactly what it includes and excludes; a classification of receipts and expenditure that is entirely mechanical; and a tax structure whose logic is fixed even though the rates move. Learn the definitions precisely and this block becomes almost arithmetic.',
    'Two things here have changed recently enough that most study material is out of date. GST moved to a four-rate structure in September 2025, dropping the 12 and 28 per cent slabs and adding a 40 per cent demerit rate. And the Sixteenth Finance Commission\'s award, covering 2026 to 2031, is now in operation with a new criterion in the devolution formula. Both are set out below as they actually stand.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '3–5 questions', note: 'Deficit definitions, the budget documents, and fiscal federalism.' },
    { exam: 'Banking and insurance GA', count: '4–6 questions', note: 'Budget headlines, tax changes and GST — largely current-affairs flavoured.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Budget articles, kinds of tax, and the Finance Commission.' },
    { exam: 'State PSC Prelims', count: '3–4 questions', note: 'With attention to state finances and Centre–state transfers.' },
    { exam: 'RRB NTPC / Group D', count: '1–2 questions', note: 'When the budget is presented, and what GST stands for.' },
  ],

  contents: [
    { icon: 'doc', title: 'The Union Budget', sub: 'Dates, documents and procedure', href: '#budget' },
    { icon: 'layers', title: 'Receipts and expenditure', sub: 'The four-way classification', href: '#classification' },
    { icon: 'chart', title: 'The deficits', sub: 'Four measures and what each means', href: '#deficits' },
    { icon: 'target', title: 'Taxation', sub: 'Direct, indirect and the principles', href: '#taxation' },
    { icon: 'refresh', title: 'GST', sub: 'Structure after the 2025 rationalisation', href: '#gst' },
    { icon: 'globe', title: 'Fiscal federalism', sub: 'The Finance Commission and transfers', href: '#federalism' },
    { icon: 'bell', title: 'Fiscal discipline', sub: 'FRBM, debt and subsidies', href: '#discipline' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'budget',
      heading: 'The Union Budget',
      eyebrow: 'Dates, documents and procedure',
      intro:
        'The Constitution calls it the Annual Financial Statement and never uses the word budget. Article 112 requires it, Article 113 governs demands for grants, and Article 114 the appropriation that follows.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'When it is presented',
              'On 1 February, a practice adopted in 2017 so that the legislative process can be completed before the financial year begins on 1 April. Before that it was presented on the last working day of February. The same 2017 change merged the separate Railway Budget into the Union Budget and abolished the plan and non-plan classification of expenditure.',
            ],
            [
              'The first budgets',
              'The first budget of independent India was presented by R. K. Shanmukham Chetty on 26 November 1947. The first budget of the Republic was presented by John Mathai in 1950. These names are asked directly in general awareness papers.',
            ],
            [
              'The main documents',
              'The Annual Financial Statement under Article 112; the Demands for Grants; the Finance Bill, which gives effect to the tax proposals; the Appropriation Bill, which authorises withdrawal from the Consolidated Fund; the Expenditure Budget and Receipt Budget; and the statements required by the FRBM Act — the Macro-Economic Framework Statement, the Medium-Term Fiscal Policy Statement and the Fiscal Policy Strategy Statement.',
            ],
            [
              'Finance Bill and Appropriation Bill',
              'They do different things and are frequently confused. The Finance Bill imposes, alters or regulates taxes for the coming year. The Appropriation Bill authorises the government to withdraw the amounts voted from the Consolidated Fund. No money can leave the Consolidated Fund without an Appropriation Act.',
            ],
            [
              'Passing the budget',
              'General discussion first, on the budget as a whole, with no voting. Then scrutiny by the departmentally related standing committees. Then voting on demands for grants, during which cut motions may be moved. Then the Appropriation Bill, and finally the Finance Bill, which must be passed within seventy-five days of introduction.',
            ],
            [
              'Vote on account and interim budget',
              'A vote on account is an advance grant to meet expenditure until the full budget is passed. An interim budget is presented when a full budget cannot be, typically in an election year, and by convention avoids major policy announcements. The two are related but not identical, and the distinction is asked.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The Economic Survey',
          text:
            'Prepared by the Department of Economic Affairs under the Chief Economic Adviser and tabled shortly before the budget, usually the previous day. It reviews the year\'s economic performance and often signals the direction of policy, but it is a review document with no legal force — it is not part of the budget and Parliament does not vote on it.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'classification',
      heading: 'Receipts and expenditure',
      eyebrow: 'The four-way classification',
      intro:
        'Everything the government receives or spends falls into one of four boxes, and the deficit measures in the next section are simply arithmetic on those boxes. The test throughout is whether the item creates or extinguishes an asset or a liability.',
      blocks: [
        {
          type: 'table',
          caption: 'The four categories',
          head: ['Category', 'Test', 'Examples'],
          rows: [
            ['Revenue receipts', 'Neither create a liability nor reduce an asset', 'Tax revenue of every kind; non-tax revenue such as interest receipts, dividends from public sector undertakings, and fees for government services.'],
            ['Capital receipts', 'Either create a liability or reduce an asset', 'Market borrowing, external loans, small savings, recovery of loans given by the government, and disinvestment proceeds.'],
            ['Revenue expenditure', 'Neither creates an asset nor reduces a liability', 'Salaries, pensions, interest payments, subsidies, defence revenue expenditure, and grants for current purposes.'],
            ['Capital expenditure', 'Either creates an asset or reduces a liability', 'Building roads, railways and schools; buying equipment; lending to states and public undertakings; repayment of loan principal.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why the distinction matters',
              'Capital expenditure adds to the productive capacity of the economy; revenue expenditure does not. A government that borrows to build a highway is in a different position from one that borrows to pay salaries, even if the amount borrowed is the same. That is the whole argument behind the revenue deficit measure.',
            ],
            [
              'Interest payments are revenue expenditure',
              'Because paying interest neither creates an asset nor reduces the liability. Repayment of principal is capital expenditure, because it does reduce a liability. This pairing is a favourite question and the two halves are easy to swap.',
            ],
            [
              'Disinvestment is a capital receipt',
              'Selling government equity in a public sector undertaking reduces an asset, so it is a capital receipt — not revenue. Dividend received from that same undertaking is non-tax revenue. Again, a pair worth learning together.',
            ],
            [
              'Devolution to states',
              'The states\' share of central taxes is transferred out of the gross tax revenue before the Centre\'s net tax revenue is arrived at. Cess and surcharge, however, are not part of the divisible pool, which is why their share in total collections is politically contested.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'deficits',
      heading: 'The deficits',
      eyebrow: 'Four measures and what each means',
      intro:
        'Four formulas, each isolating a different question about government borrowing. Learn the formulas exactly — questions are usually numerical and the wrong measure is always among the options.',
      blocks: [
        {
          type: 'formula',
          title: 'The four deficit measures',
          items: [
            { expr: 'Revenue deficit = revenue expenditure − revenue receipts', note: 'Asks whether the government is borrowing to meet its day-to-day running costs. A positive figure means it is.' },
            { expr: 'Effective revenue deficit = revenue deficit − grants for creation of capital assets', note: 'Recognises that some grants to states, though revenue expenditure for the Centre, do build assets. Introduced in the 2011-12 budget.' },
            { expr: 'Fiscal deficit = total expenditure − (revenue receipts + non-debt capital receipts)', note: 'Equals the total borrowing requirement of the government from all sources. The headline measure, expressed as a percentage of GDP.' },
            { expr: 'Primary deficit = fiscal deficit − interest payments', note: 'Strips out the cost of past borrowing to show the current year\'s own imbalance. A zero primary deficit means the government is borrowing only to service old debt.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why non-debt capital receipts are added back',
              'Because the fiscal deficit is meant to measure borrowing. Recovery of loans and disinvestment proceeds are capital receipts that do not create a liability, so they finance expenditure without adding to debt and must be counted on the receipts side. Borrowing itself is excluded, because it is what the measure is trying to compute.',
            ],
            [
              'Reading the three together',
              'A high fiscal deficit with a low revenue deficit means the government is borrowing mainly to invest, which is far less troubling than the reverse. A primary deficit close to zero alongside a large fiscal deficit means almost all the borrowing is servicing accumulated debt. Analysts read the three as a set, and mains questions ask exactly that.',
            ],
            [
              'How the deficit is financed',
              'Chiefly by market borrowing through the issue of dated government securities and treasury bills, plus small savings and provident funds, and external assistance. Financing by creating money — automatic monetisation through ad hoc treasury bills — was discontinued in 1997 by agreement between the government and the Reserve Bank.',
            ],
            [
              'Crowding out',
              'The argument that heavy government borrowing raises interest rates and reduces the funds available for private investment. It is the principal economic objection to a large fiscal deficit, and the counter-argument is that public investment in infrastructure raises private returns enough to crowd private investment in.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'taxation',
      heading: 'Taxation',
      eyebrow: 'Direct, indirect and the principles',
      intro:
        'The dividing line is incidence: who finally bears the tax, and whether that person can pass it on. Everything else in this section follows from that one test.',
      blocks: [
        {
          type: 'table',
          caption: 'Direct and indirect taxes compared',
          head: ['Feature', 'Direct taxes', 'Indirect taxes'],
          rows: [
            ['Who bears it', 'The person on whom it is levied — the burden cannot be shifted', 'The burden is shifted forward to the final consumer in the price'],
            ['Examples in India', 'Income tax, corporation tax', 'Goods and Services Tax, customs duty, and excise on the goods still outside GST'],
            ['Effect on equity', 'Generally progressive — rates rise with income', 'Generally regressive — the same rate takes a larger share of a poor household\'s income'],
            ['Administration', 'Collection is harder and evasion easier to attempt', 'Collected at the point of transaction, so coverage is wider'],
            ['Which body administers it', 'The Central Board of Direct Taxes', 'The Central Board of Indirect Taxes and Customs'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Progressive, proportional and regressive',
              'A progressive tax takes a rising share of income as income rises; a proportional tax takes a constant share; a regressive tax takes a falling share. Income tax with slab rates is progressive by design. A flat consumption tax is regressive in effect, because poorer households consume a larger fraction of their income.',
            ],
            [
              'Ad valorem and specific',
              'An ad valorem duty is charged as a percentage of value, so its yield rises automatically with prices. A specific duty is a fixed amount per unit — per litre, per kilogram — so its real value erodes with inflation unless revised.',
            ],
            [
              'Cess and surcharge',
              'A cess is levied for a specified purpose and should in principle be spent on it. A surcharge is a tax on a tax, usually on higher incomes. Both go to the Consolidated Fund and — this is the examinable point — neither forms part of the divisible pool shared with the states, which is why states object when a growing share of central revenue comes from them.',
            ],
            [
              'What is outside GST',
              'Alcohol for human consumption is constitutionally outside it and remains subject to state excise. Five petroleum products — crude oil, petrol, diesel, aviation turbine fuel and natural gas — are constitutionally within GST but have not yet been brought under it by the GST Council, so central excise and state VAT continue on them. Customs duty on imports is separate from GST altogether.',
            ],
            [
              'Tax avoidance and evasion',
              'Avoidance uses the law to reduce liability and is legal; evasion conceals income or transactions and is not. The General Anti-Avoidance Rules address arrangements whose main purpose is a tax benefit. Base erosion and profit shifting, and the international agreement on a global minimum corporate tax, are the current-affairs edge of this topic.',
            ],
            [
              'The Laffer curve',
              'The proposition that tax revenue rises with the rate up to a point and falls beyond it, because very high rates discourage the activity being taxed and encourage evasion. It is the standard theoretical reference for arguments in favour of rate reduction.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'gst',
      heading: 'GST',
      eyebrow: 'Structure after the 2025 rationalisation',
      intro:
        'The Goods and Services Tax came into force on 1 July 2017 and was substantially restructured in September 2025. Any material describing five slabs including 12 and 28 per cent is describing the old system.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Constitutional basis',
              'The 101st Amendment of 2016 inserted Article 246A, giving both the Union and the states concurrent power to tax the supply of goods and services; Article 269A, dealing with inter-state supply; and Article 279A, creating the GST Council. Without Article 246A the states could not have taxed services and the Union could not have taxed intra-state sales.',
            ],
            [
              'The GST Council',
              'Chaired by the Union Finance Minister, with the Union Minister of State for Finance and one minister nominated by each state. A decision needs a three-fourths majority of the weighted votes of members present and voting, with the Centre holding one-third of the total votes and the states together two-thirds. Quorum is one-half of the total members.',
            ],
            [
              'The four components',
              'Central GST and State GST are levied together on an intra-state supply and shared between the two governments. Integrated GST is levied by the Centre on inter-state supply and on imports, and is then apportioned. Union Territory GST applies in union territories without a legislature. A compensation cess is levied on certain goods.',
            ],
            [
              'A destination-based consumption tax',
              'GST accrues to the state where the goods or services are consumed, not where they are produced. This was the central bargain of the reform and the reason producing states sought a compensation mechanism during the transition.',
            ],
            [
              'Input tax credit',
              'A registered business sets off the tax paid on its inputs against the tax due on its output, so that tax falls only on the value added at each stage. Eliminating the cascading of tax on tax was the principal economic argument for GST.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'The rate structure after 22 September 2025',
          head: ['Rate', 'What it covers', 'Change from the old structure'],
          rows: [
            ['Nil', 'Essential food items and a range of goods and services exempted altogether', 'Broadly unchanged, with some items moved into exemption.'],
            ['5 per cent — the merit rate', 'Most items formerly at 12 per cent, including dairy products, personal care goods, packaged food and many medical devices', 'The 12 per cent slab was abolished, with the large majority of its items moving down to 5 per cent.'],
            ['18 per cent — the standard rate', 'Most items formerly at 28 per cent, including air conditioners, televisions and small cars, together with the remainder of the 12 per cent items', 'The 28 per cent slab was abolished for ordinary goods, which moved down to 18 per cent.'],
            ['40 per cent — the demerit rate', 'Luxury and sin goods: high-end vehicles, aerated drinks, tobacco products and gambling services', 'A new rate created to hold the items that would otherwise have fallen from 28 to 18 per cent.'],
          ],
        },
        {
          type: 'note',
          title: 'The chronology to quote',
          text:
            'GST was recommended by the Kelkar Task Force in 2003 and negotiated for years through the Empowered Committee of State Finance Ministers. The 101st Amendment was passed in 2016 and the tax came into force on 1 July 2017. The 56th meeting of the GST Council, on 3 September 2025, approved the rationalisation described above, effective from 22 September 2025 — the largest change to the tax since its introduction.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'federalism',
      heading: 'Fiscal federalism',
      eyebrow: 'The Finance Commission and transfers',
      intro:
        'The Union collects most of the buoyant taxes while the states carry most of the spending responsibilities. Closing that gap is the whole business of fiscal federalism, and the Finance Commission is the instrument.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Finance Commission (Article 280)',
              'Constituted by the President every fifth year or earlier, with a chairman and four other members. It recommends the distribution of the net proceeds of taxes between the Union and the states — vertical devolution — and their allocation among the states — horizontal devolution — together with the principles governing grants-in-aid and measures to augment state consolidated funds for local bodies. Its recommendations are not legally binding, but they have by convention always been accepted on the core devolution question.',
            ],
            [
              'The Sixteenth Finance Commission',
              'Chaired by Arvind Panagariya, constituted at the end of 2023 for the award period 1 April 2026 to 31 March 2031. Its report was tabled in Parliament alongside the Union Budget for 2026-27. It retained the states\' share of the divisible pool at 41 per cent, the same figure the Fifteenth Finance Commission had recommended, and revised the horizontal formula — introducing a criterion weighted at 10 per cent for a state\'s contribution to national GDP, and removing the earlier tax and fiscal effort criterion. It also recommended capping state fiscal deficits at 3 per cent of gross state domestic product, ending off-budget borrowing, and bringing the Centre\'s fiscal deficit down to 3.5 per cent of GDP by 2030-31.',
            ],
            [
              'Why the share is 41 and not 42',
              'The Fourteenth Finance Commission raised devolution sharply to 42 per cent. The Fifteenth reduced it to 41 per cent to account for the reorganisation of Jammu and Kashmir into union territories, which are financed by the Centre directly rather than through the divisible pool. The Sixteenth retained 41 per cent.',
            ],
            [
              'The horizontal criteria',
              'Devolution among states has been distributed on criteria such as population, area, forest and ecology, income distance — the gap between a state\'s per capita income and that of the richest state — and demographic performance. The exact weights are set afresh by each Commission, so learn what the criteria measure and check the current weights against the Commission in force.',
            ],
            [
              'Other channels of transfer',
              'Centrally sponsored schemes, in which the Centre and the states share the cost of a programme in a specified ratio; central sector schemes, fully funded by the Centre; and grants-in-aid under Article 275, including revenue deficit grants and grants for local bodies and disaster management. The GST Council under Article 279A is a further institution of shared fiscal decision-making.',
            ],
            [
              'The recurring dispute',
              'Southern and western states argue that using population weights and income distance transfers resources away from those that have performed better on development and demographic indicators. The Sixteenth Finance Commission\'s new GDP-contribution criterion is a partial response to that argument, and the shift towards performance and compliance conditions is the theme of its award.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'discipline',
      heading: 'Fiscal discipline',
      eyebrow: 'FRBM, debt and subsidies',
      intro:
        'A legislated framework meant to stop deficits accumulating into unmanageable debt, together with the two spending categories that most often push against it.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The FRBM Act',
              'The Fiscal Responsibility and Budget Management Act was enacted in 2003 and came into force in July 2004. It requires the government to lay fiscal policy statements before Parliament, to set targets for reducing the fiscal and revenue deficits, and to disclose the reasons for any deviation. It contains an escape clause permitting deviation in specified circumstances such as national security, national calamity, or a sharp decline in output — which has been invoked.',
            ],
            [
              'The N. K. Singh Committee',
              'The FRBM Review Committee, reporting in 2017, recommended shifting the anchor from the deficit to the debt-to-GDP ratio, proposing a general government target of 60 per cent — 40 per cent for the Centre and 20 per cent for the states — with a glide path for the fiscal deficit. It also recommended a Fiscal Council to provide independent assessment.',
            ],
            [
              'Public debt',
              'Internal debt, chiefly dated government securities and treasury bills held domestically, makes up the great majority of Indian government debt, which limits exposure to exchange rate risk. External debt is owed to foreign creditors. Debt sustainability depends on whether the growth rate of the economy exceeds the effective interest rate on the debt — if it does, the debt ratio falls even with a continuing deficit.',
            ],
            [
              'Subsidies',
              'The major explicit subsidies in the Union Budget are food, fertiliser and petroleum. The reform direction has been from price subsidies, which distort markets and leak, towards direct benefit transfer into bank accounts, made possible by the combination of Jan Dhan accounts, Aadhaar and mobile connectivity. An implicit subsidy, by contrast, is one delivered through an administered price rather than a budget line, and does not appear as expenditure at all.',
            ],
            [
              'Off-budget borrowing',
              'Borrowing by a public sector entity to fund government expenditure, so that the liability does not appear in the fiscal deficit. It has been criticised by the Comptroller and Auditor General as understating the true fiscal position, and the Sixteenth Finance Commission recommended ending the practice at the state level.',
            ],
            [
              'Fiscal policy instruments',
              'Expansionary fiscal policy raises expenditure or cuts taxes to stimulate demand in a downturn. Contractionary fiscal policy does the reverse to cool an overheating economy. Automatic stabilisers — progressive taxation and welfare spending — moderate the cycle without any decision being taken, because tax receipts fall and transfers rise in a slump.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Total expenditure is 45 lakh crore, revenue receipts 27 lakh crore and non-debt capital receipts 1 lakh crore. What is the fiscal deficit?',
      steps: [
        'Fiscal deficit = total expenditure − (revenue receipts + non-debt capital receipts).',
        'Receipts other than borrowing total 27 + 1 = 28 lakh crore.',
        '45 − 28 = 17 lakh crore.',
      ],
      answer: '17 lakh crore — which is also the total borrowing requirement for the year.',
    },
    {
      q: 'The fiscal deficit is 17 lakh crore and interest payments are 11 lakh crore. What is the primary deficit, and what does it tell you?',
      steps: [
        'Primary deficit = fiscal deficit − interest payments.',
        '17 − 11 = 6 lakh crore.',
        'The gap between the two shows how much of the borrowing merely services accumulated debt: here about two-thirds of it.',
      ],
      answer: '6 lakh crore — most of the borrowing is going on interest on past debt.',
    },
    {
      q: 'Is disinvestment a revenue receipt or a capital receipt?',
      steps: [
        'The test is whether the item creates a liability or reduces an asset.',
        'Selling government equity in a public sector undertaking reduces an asset.',
        'It is therefore a capital receipt — specifically a non-debt capital receipt, so it counts on the receipts side when computing the fiscal deficit.',
      ],
      answer: 'A capital receipt, and a non-debt one.',
    },
    {
      q: 'Interest payment is revenue expenditure but repayment of principal is capital expenditure. Why?',
      steps: [
        'Revenue expenditure neither creates an asset nor reduces a liability.',
        'Paying interest does neither — the debt is exactly as large after the payment as before it.',
        'Repaying principal does reduce a liability, which puts it in the capital category.',
      ],
      answer: 'Because only repayment of principal reduces the outstanding liability.',
    },
    {
      q: 'Why do states object to revenue being raised through cess and surcharge?',
      steps: [
        'The Finance Commission recommends the states\' share of the divisible pool of central taxes.',
        'Cess and surcharge go to the Consolidated Fund but are excluded from that divisible pool.',
        'So a rupee raised as cess is retained entirely by the Centre, while a rupee of ordinary tax is shared — currently 41 per cent to the states.',
      ],
      answer: 'Because neither forms part of the divisible pool, so states get no share of them.',
    },
    {
      q: 'What are the GST rates in force, and what changed in 2025?',
      steps: [
        'GST originally had five slabs: nil, 5, 12, 18 and 28 per cent.',
        'The 56th GST Council meeting in September 2025 abolished the 12 and 28 per cent slabs with effect from 22 September 2025.',
        'Most 12 per cent items moved down to 5 per cent and most 28 per cent items to 18 per cent, while luxury and sin goods went to a new 40 per cent demerit rate.',
      ],
      answer: 'Nil, 5, 18 and 40 per cent — a four-rate structure since September 2025.',
    },
    {
      q: 'What share of the divisible pool goes to the states, and who decided it?',
      steps: [
        'The Sixteenth Finance Commission, chaired by Arvind Panagariya, covers the award period 2026 to 2031.',
        'Its report was tabled with the Union Budget for 2026-27, and it retained the states\' share at 41 per cent.',
        'It also introduced a new criterion weighted at 10 per cent for a state\'s contribution to national GDP, and removed the tax and fiscal effort criterion.',
      ],
      answer: '41 per cent, retained by the Sixteenth Finance Commission for 2026-31.',
    },
    {
      q: 'A government spends more on building highways than on salaries, but its fiscal deficit is large. Should that worry you as much as the reverse?',
      steps: [
        'The fiscal deficit measures total borrowing regardless of what the money is spent on.',
        'The revenue deficit measures only borrowing that funds day-to-day running costs.',
        'A large fiscal deficit with a small revenue deficit means the borrowing is financing assets that raise future output, which is far less troubling than borrowing to pay salaries.',
      ],
      answer: 'No — read the fiscal deficit alongside the revenue deficit before judging it.',
    },
  ],

  practice: [
    {
      q: 'The Union Budget is presented in Parliament on:',
      options: ['1 February', 'The last working day of February', '31 March', '1 April'],
      answer: 0,
      explain: 'The date was advanced to 1 February in 2017, the same year the Railway Budget was merged into it.',
    },
    {
      q: 'Fiscal deficit is equal to:',
      options: ['Revenue expenditure minus revenue receipts', 'Total receipts minus total expenditure', 'Fiscal deficit minus interest payments', 'Total expenditure minus total receipts excluding borrowings'],
      answer: 3,
      explain: 'It equals the government\'s total borrowing requirement for the year.',
    },
    {
      q: 'Primary deficit is fiscal deficit minus:',
      options: ['Revenue deficit', 'Capital expenditure', 'Subsidies', 'Interest payments'],
      answer: 3,
      explain: 'Removing interest strips out the cost of past borrowing to reveal the current year\'s own imbalance.',
    },
    {
      q: 'Which of the following is a capital receipt?',
      options: ['Income tax collections', 'Dividend from a public sector undertaking', 'Disinvestment proceeds', 'Interest received on loans given'],
      answer: 2,
      explain: 'It reduces an asset. Dividends and interest receipts are non-tax revenue receipts.',
    },
    {
      q: 'GST came into force in India on:',
      options: ['1 April 2016', '1 July 2016', '1 April 2017', '1 July 2017'],
      answer: 3,
      explain: 'The enabling 101st Constitutional Amendment was passed in 2016 and the tax began on 1 July 2017.',
    },
    {
      q: 'After the September 2025 rationalisation, the GST slabs are:',
      options: ['0, 5, 12, 18 and 28 per cent', '0, 5, 18 and 40 per cent', '5, 12 and 18 per cent', '0, 10, 20 and 30 per cent'],
      answer: 1,
      explain: 'The 12 and 28 per cent slabs were abolished from 22 September 2025 and a 40 per cent demerit rate was created.',
    },
    {
      q: 'A decision of the GST Council requires a majority of:',
      options: ['One-half of weighted votes', 'Two-thirds of weighted votes', 'Three-fourths of weighted votes', 'A simple majority of members'],
      answer: 2,
      explain: 'The Centre holds one-third of the total votes and the states together two-thirds.',
    },
    {
      q: 'Which of these is constitutionally outside the scope of GST?',
      options: ['Petrol', 'Alcohol for human consumption', 'Tobacco', 'Air conditioners'],
      answer: 1,
      explain: 'Alcohol is excluded by the Constitution. Petroleum products are within GST constitutionally but have not yet been brought under it by the Council.',
    },
    {
      q: 'The Finance Commission is constituted every:',
      options: ['Third year', 'Fifth year', 'Seventh year', 'Tenth year'],
      answer: 1,
      explain: 'Article 280 requires it every fifth year or earlier if the President considers it necessary.',
    },
    {
      q: 'The Sixteenth Finance Commission recommended a states\' share in the divisible pool of:',
      options: ['32 per cent', '41 per cent', '42 per cent', '50 per cent'],
      answer: 1,
      explain: 'It retained the figure recommended by the Fifteenth Finance Commission for the award period 2026-31.',
    },
    {
      q: 'The FRBM Act was enacted in:',
      options: ['1991', '2000', '2003', '2016'],
      answer: 2,
      explain: 'Enacted in 2003 and brought into force in July 2004; reviewed by the N. K. Singh Committee in 2017.',
    },
    {
      q: 'Cess and surcharge collections are:',
      options: ['Shared with the states in the same ratio as other taxes', 'Not part of the divisible pool', 'Credited to the Public Account', 'Refunded to taxpayers'],
      answer: 1,
      explain: 'They go to the Consolidated Fund but are excluded from the pool the Finance Commission divides.',
    },
    {
      q: 'The Bill that authorises withdrawal of money from the Consolidated Fund is the:',
      options: ['Finance Bill', 'Appropriation Bill', 'Money Bill', 'Annual Financial Statement'],
      answer: 1,
      explain: 'The Finance Bill gives effect to the tax proposals; the Appropriation Bill authorises the spending.',
    },
    {
      q: 'The Economic Survey is prepared by the:',
      options: ['Reserve Bank of India', 'NITI Aayog', 'Department of Economic Affairs', 'Comptroller and Auditor General'],
      answer: 2,
      explain: 'Prepared under the Chief Economic Adviser and tabled shortly before the budget, usually the previous day.',
    },
    {
      q: 'A tax that takes a larger proportion of income from the poor than from the rich is:',
      options: ['Progressive', 'Proportional', 'Regressive', 'Ad valorem'],
      answer: 2,
      explain: 'Consumption taxes tend to be regressive in effect because poorer households consume a larger share of income.',
    },
    {
      q: 'Automatic monetisation of the deficit through ad hoc treasury bills was discontinued in:',
      options: ['1991', '1994', '1997', '2003'],
      answer: 2,
      explain: 'By agreement between the government and the Reserve Bank; the deficit is now financed by market borrowing.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between revenue deficit and fiscal deficit?',
      a: 'The revenue deficit is revenue expenditure minus revenue receipts — it asks whether the government is borrowing to meet its running costs. The fiscal deficit is total expenditure minus all receipts other than borrowing — it measures the total borrowing requirement, whatever the money is spent on. A large fiscal deficit financing capital investment is a very different situation from the same deficit financing salaries.',
    },
    {
      q: 'Why is the Constitution silent on the word "budget"?',
      a: 'Because Article 112 uses the formal term Annual Financial Statement. "Budget" is the popular and administrative name for the same document together with everything presented alongside it — the Finance Bill, the demands for grants, the expenditure and receipt statements and the FRBM statements. Questions exploit the distinction, so the constitutional term is worth knowing.',
    },
    {
      q: 'What are the current GST rates?',
      a: 'Nil, 5, 18 and 40 per cent, following the rationalisation approved at the 56th GST Council meeting and effective from 22 September 2025. The 12 and 28 per cent slabs were abolished; most 12 per cent items moved to 5 per cent, most 28 per cent items to 18 per cent, and luxury and sin goods to the new 40 per cent demerit rate. Any material listing five slabs is describing the pre-2025 structure.',
    },
    {
      q: 'Why is GST called a destination-based tax?',
      a: 'Because the revenue accrues to the state where the goods or services are finally consumed, not where they were produced. Under the earlier system, origin-based taxes favoured manufacturing states. The shift was the central bargain of the reform, and it is why a compensation mechanism was created for states that expected to lose revenue during the transition.',
    },
    {
      q: 'Are the Finance Commission\'s recommendations binding?',
      a: 'Not legally. The Constitution requires the President to lay the report before Parliament with an explanatory memorandum of the action taken, but the government is not bound to accept it. In practice the core recommendation on tax devolution has always been accepted, while recommendations on grants and conditions have sometimes been modified.',
    },
    {
      q: 'Which Finance Commission is currently in operation?',
      a: 'The Sixteenth, chaired by Arvind Panagariya, covering 1 April 2026 to 31 March 2031. Its report was tabled in Parliament with the Union Budget for 2026-27. It kept the states\' share of the divisible pool at 41 per cent, added a criterion weighted at 10 per cent for a state\'s contribution to national GDP, removed the tax and fiscal effort criterion, and recommended capping state fiscal deficits at 3 per cent of gross state domestic product.',
    },
    {
      q: 'What is the escape clause in the FRBM Act?',
      a: 'A provision permitting the government to depart from its fiscal targets in specified circumstances — grounds of national security, act of war, national calamity, collapse of agriculture, structural reform with fiscal implications, or a sharp decline in output. Invoking it requires the government to state the reasons and the corrective path, and it has been used.',
    },
    {
      q: 'Why did the plan and non-plan classification of expenditure disappear?',
      a: 'It was abolished from the 2017-18 budget, on the recommendation of the Rangarajan Committee, along with the winding up of the Planning Commission. The classification had encouraged neglect of maintenance and salaries, which fell under non-plan, in favour of new schemes. Expenditure is now classified only as revenue or capital, which is the economically meaningful distinction.',
    },
    {
      q: 'Which figures in this topic should I not memorise?',
      a: 'The fiscal deficit and revenue deficit ratios, total budget size, tax collection figures, subsidy amounts and the debt-to-GDP ratio. All are announced afresh each year. Do memorise the four deficit formulas, the receipt and expenditure classification, the GST structure and Council voting rule, and the current Finance Commission\'s devolution share, because those are stable within a five-year award period.',
    },
    {
      q: 'How many questions come from public finance?',
      a: 'Three to five in UPSC Prelims, four to six in banking and insurance general awareness where budget headlines feature heavily, two to three in SSC CGL Tier 1, three to four in state PSC prelims, and one to two in RRB NTPC. The deficit definitions alone appear in a large share of papers.',
    },
  ],

  related: [
    { label: 'Economic Basics', to: '/study-material/economy/economic-basics/' },
    { label: 'Money & Banking', to: '/study-material/economy/money-and-banking/' },
    { label: 'Parliament & the Legislature', to: '/study-material/polity/parliament/' },
    { label: 'Judiciary & Federalism', to: '/study-material/polity/judiciary-federalism/' },
    { label: 'All Economy', to: '/study-material/economy/' },
  ],
}
