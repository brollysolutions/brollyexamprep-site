/**
 * Money and Banking — /study-material/economy/money-and-banking/
 *
 * The block that banking and insurance papers draw on most heavily. Written
 * around the mechanisms — what each policy rate actually does, why a bank
 * holds reserves — because a candidate who knows the mechanism can answer a
 * question about a rate change without knowing the current rate.
 */
export default {
  subject: 'economy',
  subjectName: 'Indian Economy',
  slug: 'money-and-banking',
  title: 'Money & Banking',
  seoTitle: 'Money and Banking for Competitive Exams | RBI, Monetary Policy & Practice',
  metaDescription:
    'Complete money and banking study material for banking, UPSC, SSC and state exams — money supply, the Reserve Bank of India, monetary policy instruments.',
  readMinutes: 26,
  lead: [
    'This is the highest-yield block in the whole general awareness syllabus for anyone preparing for a banking or insurance exam, and it carries steady weight in UPSC and SSC papers too. It is also the block where candidates most often learn the wrong thing: the current repo rate rather than what the repo rate does.',
    'Everything below is built around mechanisms. Once you know that the cash reserve ratio removes money from the banking system without paying interest on it, while the statutory liquidity ratio requires holdings that do earn a return, you can answer any question about either — including questions set after the numbers have changed.',
  ],

  weightage: [
    { exam: 'Banking and insurance GA', count: '8–12 questions', note: 'The single largest block in these papers, combining static concepts with current policy.' },
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Conceptual — what an instrument does, not what its current value is.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–3 questions', note: 'RBI functions, bank nationalisation, and the regulators.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'Usually alongside questions on cooperative and regional rural banks.' },
    { exam: 'RBI Grade B / NABARD', count: '15+ questions', note: 'Treated in far greater depth, including Basel norms and financial market structure.' },
  ],

  contents: [
    { icon: 'chart', title: 'Money and money supply', sub: 'M0 to M4 and what they mean', href: '#money' },
    { icon: 'target', title: 'The Reserve Bank', sub: 'Structure and functions', href: '#rbi' },
    { icon: 'refresh', title: 'Monetary policy', sub: 'Every instrument explained', href: '#policy' },
    { icon: 'layers', title: 'The banking system', sub: 'Who is what kind of bank', href: '#structure' },
    { icon: 'bell', title: 'NPAs and reform', sub: 'Bad loans and how they are resolved', href: '#reform' },
    { icon: 'doc', title: 'Markets and regulators', sub: 'Money market, capital market, who regulates', href: '#markets' },
    { icon: 'globe', title: 'The external sector', sub: 'Balance of payments and the rupee', href: '#external' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'money',
      heading: 'Money and money supply',
      eyebrow: 'M0 to M4 and what they mean',
      intro:
        'Money is defined by what it does rather than by what it is made of, and the money supply is measured in several nested ways because "money" gets broader the further you go from cash.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The four functions of money',
              'A medium of exchange, which removes the need for a double coincidence of wants; a unit of account, giving a common measure of value; a store of value, allowing purchasing power to be carried forward; and a standard of deferred payment, making credit possible. The first is the primary function; the rest follow from it.',
            ],
            [
              'Fiat money and legal tender',
              'Fiat money has no intrinsic value and derives its acceptability from a government declaration. Legal tender must be accepted in discharge of a debt. In India, coins are limited legal tender up to specified amounts while currency notes are unlimited legal tender.',
            ],
            [
              'Who issues what',
              'The Reserve Bank issues currency notes of every denomination except the one-rupee note, which is issued by the Government of India and carries the signature of the Finance Secretary. All coins are minted by the Government of India but are put into circulation through the Reserve Bank. Note issue follows the minimum reserve system adopted in 1957, requiring the Bank to hold assets of at least two hundred crore rupees, of which not less than one hundred and fifteen crore must be in gold.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'The measures of money supply',
          items: [
            { expr: 'M0 = currency in circulation + bankers\' deposits with RBI + other deposits with RBI', note: 'Reserve money, also called high-powered money or the monetary base. It is what the central bank directly controls.' },
            { expr: 'M1 = currency with the public + demand deposits + other deposits with RBI', note: 'Narrow money — the most liquid measure.' },
            { expr: 'M2 = M1 + savings deposits with post office savings banks', note: 'Rarely used in policy discussion but asked in exams.' },
            { expr: 'M3 = M1 + time deposits with the banking system', note: 'Broad money, and the aggregate most often referred to when the money supply is discussed.' },
            { expr: 'M4 = M3 + all post office deposits except National Savings Certificates', note: 'The broadest measure, and the least liquid.' },
            { expr: 'Money multiplier = M3 ÷ M0', note: 'How much broad money the banking system creates from each unit of reserve money. It falls when the cash reserve ratio rises.' },
          ],
        },
        {
          type: 'note',
          title: 'Credit creation',
          text:
            'Banks create money by lending. A deposit of a hundred rupees, with a reserve requirement of ten per cent, allows ninety to be lent; that ninety is redeposited somewhere and eighty-one can be lent again, and so on. The theoretical limit of the expansion is the initial deposit divided by the reserve ratio. This is why the cash reserve ratio is such a powerful instrument — a small change alters the whole multiplier.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'rbi',
      heading: 'The Reserve Bank',
      eyebrow: 'Structure and functions',
      intro:
        'The central bank of India, and the institution about which banking papers ask most. Its founding facts are asked directly and are worth learning exactly.',
      blocks: [
        {
          type: 'table',
          caption: 'The founding facts',
          head: ['Fact', 'Detail', 'Note'],
          rows: [
            ['Established', '1 April 1935, under the Reserve Bank of India Act, 1934', 'On the recommendation of the Hilton Young Commission — formally the Royal Commission on Indian Currency and Finance, 1926.'],
            ['Nationalised', '1 January 1949', 'It began as a shareholders\' bank and was brought fully into public ownership after independence.'],
            ['Headquarters', 'Mumbai', 'Originally in Calcutta; the central office moved to Bombay in 1937.'],
            ['Leadership', 'A Governor and four Deputy Governors, appointed by the central government', 'Osborne Smith was the first Governor; C. D. Deshmukh was the first Indian to hold the office.'],
            ['Governing body', 'The Central Board of Directors', 'With four Local Boards for the northern, southern, eastern and western areas.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Functions of the Reserve Bank',
              'Monetary authority, formulating and implementing monetary policy. Issuer of currency. Banker to the government, both Union and states, and manager of public debt. Banker to banks, holding their reserves and acting as lender of last resort. Regulator and supervisor of the banking and payment systems. Manager of foreign exchange under FEMA and custodian of the foreign exchange reserves. And a developmental role, including financial inclusion and the promotion of institutions such as NABARD and the Deposit Insurance Corporation.',
            ],
            [
              'What the Reserve Bank does not do',
              'It does not regulate the securities market, which is SEBI\'s job; nor insurance, which is IRDAI\'s; nor pensions, which is PFRDA\'s. It does not directly finance the government by purchasing primary issues of government securities — that practice, called automatic monetisation through ad hoc treasury bills, was discontinued in 1997.',
            ],
            [
              'The Monetary Policy Committee',
              'Created by an amendment to the RBI Act in 2016. Six members: the Governor as chairperson, the Deputy Governor in charge of monetary policy, one officer of the Bank nominated by the Central Board, and three external members appointed by the central government for a four-year term. Decisions are by majority and the Governor has a casting vote in the event of a tie. It normally meets six times a year.',
            ],
            [
              'The inflation mandate',
              'The Committee is required to set the policy rate to achieve a Consumer Price Index inflation target of four per cent with a tolerance band of two percentage points either side. The target is fixed by the government in consultation with the Bank once every five years, and was retained at four per cent with the same band for the period from 1 April 2026 to 31 March 2031. If average inflation is outside the band for three consecutive quarters, the Bank must report to the government explaining the failure and the remedial action.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'policy',
      heading: 'Monetary policy',
      eyebrow: 'Every instrument explained',
      intro:
        'Instruments divide into quantitative, which affect the total volume of credit, and qualitative, which direct it towards or away from particular uses. Learn what each does to liquidity and every question about a rate change answers itself.',
      blocks: [
        {
          type: 'table',
          caption: 'Quantitative instruments',
          head: ['Instrument', 'What it is', 'Effect of raising it'],
          rows: [
            ['Repo rate', 'The rate at which the Reserve Bank lends to banks against government securities, for a short period', 'Borrowing becomes costlier for banks, so lending rates rise and credit contracts. This is the principal policy rate.'],
            ['Standing Deposit Facility rate', 'The rate at which banks can park surplus funds with the Reserve Bank without collateral', 'Introduced in April 2022, it replaced the reverse repo rate as the floor of the liquidity adjustment facility corridor.'],
            ['Marginal Standing Facility rate', 'The rate at which banks may borrow overnight against securities from their statutory liquidity holdings', 'It forms the ceiling of the corridor and is normally set above the repo rate.'],
            ['Bank rate', 'The rate at which the Reserve Bank buys or rediscounts bills of exchange', 'Now aligned with the marginal standing facility rate and used mainly for penal purposes rather than as an active instrument.'],
            ['Cash Reserve Ratio', 'The proportion of net demand and time liabilities that a bank must keep with the Reserve Bank in cash', 'Removes money from the system, reduces the money multiplier, and earns the bank no interest. The most direct instrument.'],
            ['Statutory Liquidity Ratio', 'The proportion of net demand and time liabilities a bank must hold in cash, gold or approved securities with itself', 'Reduces lendable resources, but the securities held do earn a return, which is the difference from CRR.'],
            ['Open Market Operations', 'Outright purchase or sale of government securities by the Reserve Bank in the market', 'Selling securities absorbs liquidity; buying them injects it. Used for durable liquidity management.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The corridor',
              'The liquidity adjustment facility operates as a corridor: the marginal standing facility rate at the top, the repo rate in the middle as the policy rate, and the standing deposit facility rate at the bottom. Overnight market rates are expected to move within it, and the width of the corridor is itself a policy choice.',
            ],
            [
              'Qualitative instruments',
              'Margin requirements, or the loan-to-value limit for a class of asset; consumer credit regulation; rationing of credit by ceilings; moral suasion, which is persuasion rather than direction; and direct action against a non-compliant bank. These target the direction of credit rather than its total volume.',
            ],
            [
              'Lending rate benchmarks',
              'Banks have moved through a succession of benchmarks — the prime lending rate, then the benchmark prime lending rate, then the base rate, then the marginal cost of funds based lending rate, and now the external benchmark lending rate under which floating-rate retail and small business loans must be linked to an external benchmark such as the repo rate. The sequence is asked in banking papers.',
            ],
            [
              'Deficit financing and its effect',
              'When a government spends beyond its receipts and the shortfall is met by creating money rather than by borrowing from the public, the money supply expands without a corresponding rise in output — the classic inflationary mechanism. India ended automatic monetisation in 1997 through an agreement between the government and the Reserve Bank, and now finances the deficit by market borrowing.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'What to memorise and what not to',
          text:
            'Never memorise the current repo rate, cash reserve ratio or statutory liquidity ratio for a general studies exam — they change and any paper will take them from close to its own date. Memorise instead which instrument tightens and which loosens, and which one costs the bank interest income. Banking aspirants preparing for a specific exam should check the position on the day of the paper.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'structure',
      heading: 'The banking system',
      eyebrow: 'Who is what kind of bank',
      intro:
        'Indian banking is layered, and each layer has a founding date and a purpose that exams ask for directly.',
      blocks: [
        {
          type: 'table',
          caption: 'Categories of bank',
          head: ['Category', 'What it is', 'Founding facts'],
          rows: [
            ['Public sector banks', 'Banks in which the government holds a majority stake', 'Fourteen major banks were nationalised in July 1969 and six more in April 1980. Consolidation through mergers has since reduced the number substantially.'],
            ['State Bank of India', 'The largest Indian bank', 'The three presidency banks were amalgamated into the Imperial Bank of India in 1921, which became the State Bank of India on 1 July 1955 on the recommendation of the Gorwala Committee.'],
            ['Private sector banks', 'Banks under private ownership, both old and new generation', 'New licences were issued in phases from the 1990s onward following the Narasimham Committee recommendations.'],
            ['Regional Rural Banks', 'Rural banks combining commercial banking discipline with local reach', 'Set up from 1975 on the Narasimham Working Group recommendation and given statutory form by the RRB Act, 1976. Capital is shared between the Centre, the sponsoring bank and the state in the ratio 50:35:15.'],
            ['Cooperative banks', 'Member-owned banks, urban and rural, in a multi-tier structure', 'Rural credit runs through state, district central and primary agricultural credit societies. They are regulated jointly, with the Reserve Bank\'s supervisory powers strengthened by amendment in 2020.'],
            ['Payments banks', 'Banks that accept deposits and offer payments but cannot lend', 'Recommended by the Nachiket Mor Committee. They may hold up to two lakh rupees per customer, may not issue credit cards, and must invest a large share of deposits in government securities.'],
            ['Small finance banks', 'Full-service banks focused on the underserved', 'They must direct a high proportion of lending to priority sectors and keep most loans small in ticket size.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Development financial institutions',
              'NABARD, established on 12 July 1982 on the Sivaraman Committee\'s recommendation, as the apex institution for agricultural and rural credit. SIDBI, established in 1990 for small industry. EXIM Bank, established in 1982 for export and import finance. The National Housing Bank, established in 1988. A National Bank for Financing Infrastructure and Development was set up more recently for long-term infrastructure lending.',
            ],
            [
              'Deposit insurance',
              'The Deposit Insurance and Credit Guarantee Corporation, a wholly owned subsidiary of the Reserve Bank, insures deposits up to five lakh rupees per depositor per bank — raised from one lakh in 2020. The cover applies to principal and interest together and across all accounts a depositor holds in the same right and capacity at that bank.',
            ],
            [
              'Priority sector lending',
              'Domestic scheduled commercial banks must direct forty per cent of adjusted net bank credit to priority sectors, with sub-targets for agriculture, micro enterprises and weaker sections. The categories include agriculture, micro small and medium enterprises, export credit, education, housing, social infrastructure and renewable energy. Shortfalls are placed in the Rural Infrastructure Development Fund with NABARD.',
            ],
            [
              'Non-banking financial companies',
              'Companies that lend and invest but cannot accept demand deposits and are not part of the payment system. They are registered with and regulated by the Reserve Bank under a scale-based framework, and they have grown into a significant part of Indian credit, particularly for vehicles, gold loans and microfinance.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'reform',
      heading: 'NPAs and reform',
      eyebrow: 'Bad loans and how they are resolved',
      intro:
        'Asset quality has driven Indian banking policy for a decade, and the sequence of legal instruments created to deal with it is examined as a sequence.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'What makes an asset non-performing',
              'A loan becomes a non-performing asset when interest or principal remains overdue for more than ninety days. NPAs are then classified as substandard when they have remained non-performing for up to twelve months, doubtful beyond that, and loss assets where the loss has been identified but not fully written off. Provisioning requirements rise with each stage.',
            ],
            [
              'Gross and net NPA',
              'Gross NPA is the total value of non-performing loans. Net NPA is that figure less the provisions already made against them. A bank with high gross but low net NPAs has recognised and provided for its problem; the gap between the two is what analysts watch.',
            ],
            [
              'The resolution machinery',
              'Debt Recovery Tribunals were created under an Act of 1993. The SARFAESI Act, 2002, allowed secured creditors to enforce security without going to court and created asset reconstruction companies. The Insolvency and Bankruptcy Code, 2016, consolidated insolvency law, created the Insolvency and Bankruptcy Board of India, and set time-bound resolution through the National Company Law Tribunal. A National Asset Reconstruction Company, the so-called bad bank, was set up in 2021 to take over large stressed accounts.',
            ],
            [
              'Basel norms',
              'International standards on bank capital issued by the Basel Committee on Banking Supervision at the Bank for International Settlements. Basel III, framed after the 2008 crisis, raised the quality and quantity of capital, added a capital conservation buffer and a countercyclical buffer, and introduced leverage and liquidity standards. India\'s minimum capital to risk-weighted assets ratio is set above the Basel minimum.',
            ],
            [
              'The Narasimham Committees',
              'The first, in 1991, recommended reducing the statutory liquidity ratio and cash reserve ratio, deregulating interest rates, allowing new private banks, and introducing prudential norms for income recognition and provisioning. The second, in 1998, focused on capital adequacy, asset quality, merger of strong banks and a stronger legal framework for recovery. Together they shaped the banking system that exists today.',
            ],
            [
              'Financial inclusion',
              'The Pradhan Mantri Jan Dhan Yojana of 2014 for basic bank accounts, together with Aadhaar and mobile connectivity — the JAM trinity — enabled direct benefit transfer of subsidies. Business correspondents extend banking to villages without branches. The Reserve Bank publishes a Financial Inclusion Index tracking access, usage and quality.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'markets',
      heading: 'Markets and regulators',
      eyebrow: 'Money market, capital market, who regulates',
      intro:
        'The dividing line is maturity: the money market deals in instruments of up to one year, the capital market in longer-term claims. Each has its own instruments and its own regulator.',
      blocks: [
        {
          type: 'table',
          caption: 'Money market instruments',
          head: ['Instrument', 'Issuer', 'Maturity and use'],
          rows: [
            ['Treasury bills', 'The Government of India, through the Reserve Bank', 'Issued at a discount for 91, 182 and 364 days. They carry no interest coupon; the return is the discount.'],
            ['Call money', 'Banks lending to one another', 'Overnight, uncollateralised. The rate on it is the most immediate indicator of banking system liquidity.'],
            ['Commercial paper', 'Corporates and financial institutions with a good credit rating', 'An unsecured promissory note, typically 7 days to one year, used for short-term working capital.'],
            ['Certificate of deposit', 'Banks and select financial institutions', 'A negotiable time deposit receipt, issued at a discount, used to raise short-term funds.'],
            ['Repurchase agreements', 'Banks, primary dealers and the Reserve Bank', 'Sale of a security with an agreement to repurchase — economically a collateralised loan.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The capital market',
              'The primary market is where securities are issued for the first time, through an initial public offer or a follow-on offer. The secondary market is where existing securities are traded, on exchanges such as the Bombay Stock Exchange, whose benchmark index is the Sensex, and the National Stock Exchange, whose benchmark is the Nifty 50.',
            ],
            [
              'The regulators',
              'The Reserve Bank regulates banks, non-banking financial companies, the money market, government securities and the payment systems. The Securities and Exchange Board of India, set up in 1988 and given statutory status in 1992, regulates the securities market and mutual funds. The Insurance Regulatory and Development Authority of India, established in 1999, regulates insurance. The Pension Fund Regulatory and Development Authority, given statutory status in 2013, regulates pensions. The Insolvency and Bankruptcy Board of India, set up in 2016, regulates insolvency professionals and processes.',
            ],
            [
              'Payment systems',
              'The National Payments Corporation of India, established in 2008 as an umbrella organisation, operates the Unified Payments Interface, IMPS, RuPay and the National Automated Clearing House. RTGS settles large-value transactions one by one in real time; NEFT settles in batches. Both now operate round the clock.',
            ],
            [
              'Kinds of investor and instrument',
              'Foreign portfolio investment is investment in securities without control, and is volatile. Foreign direct investment involves a lasting interest and management participation, and is more stable. Among instruments, a share confers ownership and a variable dividend; a debenture or bond confers a creditor claim and a fixed return, ranking ahead of shareholders in liquidation.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'external',
      heading: 'The external sector',
      eyebrow: 'Balance of payments and the rupee',
      intro:
        'A compact block with a fixed vocabulary, examined for the definitions rather than for the current numbers.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Balance of trade and balance of payments',
              'The balance of trade is exports minus imports of goods alone. The balance of payments is the complete record of transactions between residents and the rest of the world, and is always in balance as an accounting identity. It divides into the current account and the capital account.',
            ],
            [
              'The current account',
              'Trade in goods, trade in services, primary income such as investment income, and secondary income, chiefly remittances. India typically runs a merchandise trade deficit offset in part by a services surplus and by remittances, which are among the largest in the world. The resulting current account deficit as a share of GDP is a closely watched figure — and one that changes every quarter.',
            ],
            [
              'The capital account',
              'Foreign investment, both direct and portfolio; external commercial borrowing; non-resident deposits; and changes in reserves. A capital account surplus finances a current account deficit.',
            ],
            [
              'Exchange rate systems',
              'Under a fixed system the rate is pegged and defended by the central bank. Under a floating system it is set by the market. India operates a managed float, in which the rate is market-determined but the Reserve Bank intervenes to smooth excessive volatility rather than to target a level. Depreciation is a market-driven fall in the currency\'s value; devaluation is a deliberate reduction under a fixed regime.',
            ],
            [
              'Convertibility',
              'The rupee became partially convertible in 1992 under the Liberalised Exchange Rate Management System and fully convertible on the current account in 1994, when India accepted the obligations of Article VIII of the IMF Articles of Agreement. Capital account convertibility remains partial; the two Tarapore Committees, in 1997 and 2006, set out road maps for moving further.',
            ],
            [
              'Foreign exchange reserves',
              'Composed of foreign currency assets, gold, Special Drawing Rights and the reserve tranche position with the International Monetary Fund. Reserves are held by the Reserve Bank and are commonly assessed by how many months of imports they can cover — a ratio that moves constantly and should be looked up rather than memorised.',
            ],
            [
              'Special Drawing Rights',
              'An international reserve asset created by the IMF, not a currency but a claim on the freely usable currencies of member countries. Its value is based on a basket that includes the US dollar, the euro, the Chinese renminbi, the Japanese yen and the pound sterling.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'The Reserve Bank raises the cash reserve ratio. What happens, and how is this different from raising the SLR?',
      steps: [
        'A higher cash reserve ratio means banks must keep a larger share of deposits with the Reserve Bank in cash, so less is available to lend.',
        'The money multiplier falls, credit contracts and, other things equal, inflationary pressure eases.',
        'The difference from the statutory liquidity ratio is the return: CRR balances earn the bank no interest, whereas SLR holdings are in government securities that do earn a return.',
      ],
      answer: 'Both reduce lendable funds, but only CRR balances are non-earning.',
    },
    {
      q: 'Which policy rate forms the floor of the liquidity adjustment facility corridor?',
      steps: [
        'The corridor has the marginal standing facility rate as its ceiling and the repo rate as the policy rate in the middle.',
        'The floor was formerly the reverse repo rate.',
        'The Standing Deposit Facility, introduced in April 2022, took over that role, and it requires no collateral from the Reserve Bank.',
      ],
      answer: 'The Standing Deposit Facility rate, since April 2022.',
    },
    {
      q: 'A loan\'s interest has been overdue for four months. How is it classified?',
      steps: [
        'An asset becomes non-performing when interest or principal is overdue for more than ninety days.',
        'Four months exceeds that threshold, so it is a non-performing asset.',
        'Within the NPA classification, an account that has been non-performing for up to twelve months is a substandard asset.',
      ],
      answer: 'A non-performing asset, and at this stage a substandard one.',
    },
    {
      q: 'Distinguish M1 from M3.',
      steps: [
        'M1 is narrow money: currency with the public, demand deposits, and other deposits with the Reserve Bank.',
        'M3 is broad money, which adds time deposits with the banking system to M1.',
        'The difference is therefore liquidity — demand deposits are withdrawable on demand, time deposits are not.',
      ],
      answer: 'M3 = M1 + time deposits with the banking system.',
    },
    {
      q: 'How is the capital of a Regional Rural Bank shared?',
      steps: [
        'RRBs were set up from 1975 and given statutory form by the RRB Act of 1976.',
        'Three parties hold the capital: the central government, the sponsoring commercial bank and the state government.',
        'The ratio is 50 per cent, 35 per cent and 15 per cent respectively.',
      ],
      answer: 'Centre 50%, sponsor bank 35%, state government 15%.',
    },
    {
      q: 'How much of a depositor\'s money is insured if a bank fails?',
      steps: [
        'Deposit insurance is provided by the Deposit Insurance and Credit Guarantee Corporation, a subsidiary of the Reserve Bank.',
        'The cover was raised from one lakh rupees to five lakh rupees in 2020.',
        'It applies per depositor per bank, covering principal and interest together, across all accounts held in the same right and capacity.',
      ],
      answer: 'Up to five lakh rupees per depositor per bank.',
    },
    {
      q: 'Distinguish depreciation from devaluation of a currency.',
      steps: [
        'Both describe a fall in the external value of a currency.',
        'Depreciation is market-driven, occurring under a floating or managed float regime as demand and supply change.',
        'Devaluation is a deliberate administrative decision to reduce a pegged rate under a fixed exchange rate regime.',
      ],
      answer: 'Depreciation is caused by the market; devaluation is a policy decision under a fixed regime.',
    },
    {
      q: 'India runs a merchandise trade deficit but a smaller current account deficit. Why?',
      steps: [
        'The balance of trade covers goods alone, and India imports more goods than it exports, chiefly crude oil and electronics.',
        'The current account is wider, covering services, primary income and secondary income as well.',
        'India runs a large surplus in services exports and receives among the world\'s largest inflows of remittances, both of which offset much of the goods deficit.',
      ],
      answer: 'The services surplus and remittance inflows offset a large part of the merchandise deficit.',
    },
  ],

  practice: [
    {
      q: 'The Reserve Bank of India was established on:',
      options: ['1 April 1935', '1 January 1949', '1 July 1955', '1 April 1934'],
      answer: 0,
      explain: 'Under the RBI Act of 1934, on the Hilton Young Commission\'s recommendation. It was nationalised on 1 January 1949.',
    },
    {
      q: 'Which note is issued by the Government of India rather than by the Reserve Bank?',
      options: ['The ten-rupee note', 'The one-rupee note', 'The two-rupee note', 'The five-rupee note'],
      answer: 1,
      explain: 'It carries the signature of the Finance Secretary. All coins are also minted by the Government of India.',
    },
    {
      q: 'M3 is also known as:',
      options: ['Reserve money', 'Narrow money', 'High-powered money', 'Broad money'],
      answer: 3,
      explain: 'M1 is narrow money and M0 is reserve money, also called high-powered money.',
    },
    {
      q: 'The Monetary Policy Committee consists of how many members?',
      options: ['Three', 'Four', 'Five', 'Six'],
      answer: 3,
      explain: 'Three from the Reserve Bank including the Governor as chairperson, and three external members appointed by the government.',
    },
    {
      q: 'The rate at which banks park surplus funds with the RBI without collateral is the:',
      options: ['Reverse repo rate', 'Standing Deposit Facility rate', 'Marginal Standing Facility rate', 'Bank rate'],
      answer: 1,
      explain: 'Introduced in April 2022, the SDF rate replaced the reverse repo rate as the floor of the LAF corridor.',
    },
    {
      q: 'How many banks were nationalised in July 1969?',
      options: ['Six', 'Ten', 'Twelve', 'Fourteen'],
      answer: 3,
      explain: 'Fourteen major banks in 1969 and six more in April 1980.',
    },
    {
      q: 'NABARD was established in:',
      options: ['1975', '1982', '1988', '1990'],
      answer: 1,
      explain: 'On 12 July 1982, on the recommendation of the Sivaraman Committee. SIDBI came in 1990.',
    },
    {
      q: 'An asset is classified as non-performing when interest or principal is overdue for more than:',
      options: ['30 days', '60 days', '90 days', '180 days'],
      answer: 2,
      explain: 'Ninety days is the threshold; the asset is then substandard, doubtful or loss depending on how long it stays so.',
    },
    {
      q: 'Deposit insurance in India covers deposits up to:',
      options: ['₹1 lakh', '₹2 lakh', '₹5 lakh', '₹10 lakh'],
      answer: 2,
      explain: 'Raised from one lakh in 2020, per depositor per bank, covering principal and interest together.',
    },
    {
      q: 'Treasury bills in India are issued for tenors of:',
      options: ['91, 182 and 364 days', '30, 60 and 90 days', '1, 3 and 5 years', '7 days to 1 year'],
      answer: 0,
      explain: 'They are issued at a discount and carry no coupon; the return is the difference between issue price and face value.',
    },
    {
      q: 'The securities market in India is regulated by:',
      options: ['The Reserve Bank of India', 'SEBI', 'IRDAI', 'PFRDA'],
      answer: 1,
      explain: 'SEBI was set up in 1988 and given statutory status in 1992.',
    },
    {
      q: 'Payments banks may accept deposits up to what limit per customer?',
      options: ['₹1 lakh', '₹2 lakh', '₹5 lakh', 'There is no limit'],
      answer: 1,
      explain: 'They may not lend or issue credit cards, and must invest a large share of deposits in government securities.',
    },
    {
      q: 'The priority sector lending target for domestic scheduled commercial banks is:',
      options: ['20% of adjusted net bank credit', '30% of adjusted net bank credit', '40% of adjusted net bank credit', '50% of adjusted net bank credit'],
      answer: 2,
      explain: 'With sub-targets for agriculture, micro enterprises and weaker sections within that overall figure.',
    },
    {
      q: 'The rupee became fully convertible on the current account in:',
      options: ['1991', '1992', '1994', '1997'],
      answer: 2,
      explain: 'India accepted the obligations of Article VIII of the IMF Articles of Agreement in 1994. Capital account convertibility remains partial.',
    },
    {
      q: 'The Unified Payments Interface is operated by:',
      options: ['The Reserve Bank of India', 'The National Payments Corporation of India', 'SEBI', 'The State Bank of India'],
      answer: 1,
      explain: 'NPCI was established in 2008 as an umbrella organisation for retail payments and also runs IMPS and RuPay.',
    },
    {
      q: 'The Insolvency and Bankruptcy Code was enacted in:',
      options: ['1993', '2002', '2016', '2021'],
      answer: 2,
      explain: 'It consolidated insolvency law and created the IBBI. SARFAESI came in 2002 and the Debt Recovery Tribunals Act in 1993.',
    },
  ],

  faqs: [
    {
      q: 'Should I memorise the current repo rate?',
      a: 'Not for a general studies exam. Rates change several times a year and any paper takes them from close to its own date, so a memorised figure is more likely to be wrong than right. Memorise instead what each instrument does — which one tightens liquidity, which one costs the bank interest income, which one forms the ceiling of the corridor. Candidates sitting a specific banking exam should check the position in the week of the paper.',
    },
    {
      q: 'What is the difference between CRR and SLR?',
      a: 'Both require a bank to set aside a proportion of its net demand and time liabilities, so both reduce lendable funds. The cash reserve ratio must be held in cash with the Reserve Bank and earns nothing. The statutory liquidity ratio may be held in cash, gold or approved government securities kept by the bank itself, and those securities earn a return. That difference in earning is the point of most questions on the pair.',
    },
    {
      q: 'How do banks create money?',
      a: 'By lending. A deposit is partly held as reserves and partly lent out; the borrower spends it and it is redeposited elsewhere, where the process repeats. The total money supply that results is a multiple of the original reserve money, and the multiple depends on the reserve ratio. This is why the money multiplier is defined as broad money divided by reserve money, and why raising the cash reserve ratio shrinks it.',
    },
    {
      q: 'What replaced the reverse repo rate?',
      a: 'The Standing Deposit Facility, introduced in April 2022, became the floor of the liquidity adjustment facility corridor. Its advantage is that the Reserve Bank does not have to give the bank collateral to absorb liquidity, which the reverse repo required. The reverse repo rate still exists on paper but is no longer the operating floor.',
    },
    {
      q: 'What is a payments bank allowed to do?',
      a: 'Accept deposits up to two lakh rupees per customer, offer payment and remittance services, issue debit cards and distribute simple financial products. What it cannot do is lend — no loans and no credit cards — and it must invest a large share of its deposits in government securities. The model came from the Nachiket Mor Committee and was intended for financial inclusion rather than credit.',
    },
    {
      q: 'What are the Basel norms and why do they matter to India?',
      a: 'International standards on bank capital and liquidity issued by the Basel Committee at the Bank for International Settlements. Basel III, framed after the 2008 crisis, raised both the quality and the quantity of capital banks must hold, added conservation and countercyclical buffers, and introduced leverage and liquidity ratios. India applies them through Reserve Bank directions, with a minimum capital ratio set above the international floor.',
    },
    {
      q: 'What is the difference between FDI and FPI?',
      a: 'Foreign direct investment involves a lasting interest and some degree of management participation — building a factory, or taking a substantial stake in a company. Foreign portfolio investment is the purchase of securities purely for return, with no management role. FDI is more stable; FPI can reverse quickly, which is why sudden portfolio outflows put pressure on the currency.',
    },
    {
      q: 'Is the rupee fully convertible?',
      a: 'On the current account, yes, since 1994, when India accepted the obligations of Article VIII of the IMF Articles of Agreement. On the capital account, only partially — there are still limits on how freely residents and non-residents can move capital in and out. The two Tarapore Committees, in 1997 and 2006, set out conditions for moving further, and the position has been liberalised in stages rather than at once.',
    },
    {
      q: 'Which facts here change between exam cycles?',
      a: 'All the policy rates and reserve ratios; the number of public sector banks, which has fallen through mergers; foreign exchange reserves and the current account deficit ratio; and the list of licensed payments and small finance banks. The founding dates, the definitions of the monetary aggregates, the functions of the Reserve Bank and the structure of the regulators do not change.',
    },
    {
      q: 'How many questions come from money and banking?',
      a: 'Eight to twelve in banking and insurance general awareness, which is more than any other block; fifteen or more in RBI Grade B and NABARD, where it is treated in depth; two to four in UPSC Prelims; one to three in SSC CGL Tier 1; and two to three in state PSC prelims.',
    },
  ],

  related: [
    { label: 'Economic Basics', to: '/study-material/economy/economic-basics/' },
    { label: 'Public Finance & Budget', to: '/study-material/economy/public-finance/' },
    { label: 'General Knowledge', to: '/study-material/general-knowledge/' },
    { label: 'Indian Polity', to: '/study-material/polity/' },
    { label: 'All Economy', to: '/study-material/economy/' },
  ],
}
