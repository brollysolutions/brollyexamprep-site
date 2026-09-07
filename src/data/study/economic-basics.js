/**
 * Economic Basics — /study-material/economy/economic-basics/
 *
 * The definitional half of the economy syllabus, which is where the reliable
 * marks are. Written so that the concepts stand on their own and every figure
 * that moves between exam cycles is explicitly marked as a look-up item.
 */
export default {
  subject: 'economy',
  subjectName: 'Indian Economy',
  slug: 'economic-basics',
  title: 'Economic Basics',
  seoTitle: 'Basic Economics for Competitive Exams | National Income, Inflation & Practice',
  metaDescription:
    'Complete basic economics study material for UPSC, SSC, banking and state exams — national income concepts, how the economy is measured.',
  readMinutes: 24,
  lead: [
    'Economy questions divide sharply into two kinds. One kind asks what a term means — the difference between GDP and GNP, between revenue and fiscal deficit, between demand-pull and cost-push inflation. That kind never changes and is worth learning properly. The other asks for a current figure, and any figure you memorise today is wrong within a year.',
    'This page concentrates almost entirely on the first kind, and wherever a number is genuinely part of the answer it says where to look it up rather than printing something that will age. That includes the base year of the GDP series, which was revised in February 2026 — a change that quietly invalidates a great deal of older study material.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '4–7 questions', note: 'Concept-heavy and increasingly linked to current policy rather than to figures.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–4 questions', note: 'Definitions, indices and the planning history.' },
    { exam: 'Banking and insurance GA', count: '5–8 questions', note: 'The largest economy weighting of any exam family, though much of it is current affairs.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'Plus a block on the state\'s own economy and schemes.' },
    { exam: 'RRB NTPC / Group D', count: '1–2 questions', note: 'Basic definitions and the Five Year Plans.' },
  ],

  contents: [
    { icon: 'chart', title: 'National income', sub: 'GDP, GNP, NNP and the rest', href: '#concepts' },
    { icon: 'search', title: 'Measuring the economy', sub: 'Methods, base years and who publishes what', href: '#measurement' },
    { icon: 'target', title: 'Growth and development', sub: 'Two different things', href: '#development' },
    { icon: 'bell', title: 'Inflation', sub: 'Types, indices and effects', href: '#inflation' },
    { icon: 'user', title: 'Employment', sub: 'Types of unemployment and how it is counted', href: '#employment' },
    { icon: 'layers', title: 'Sectors of the economy', sub: 'Primary, secondary, tertiary', href: '#sectors' },
    { icon: 'refresh', title: 'Planning', sub: 'Five Year Plans to NITI Aayog', href: '#planning' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'concepts',
      heading: 'National income',
      eyebrow: 'GDP, GNP, NNP and the rest',
      intro:
        'Five aggregates, and each is derived from the previous one by adding or subtracting exactly one item. Learn the chain rather than five separate definitions and the whole block becomes one idea.',
      blocks: [
        {
          type: 'formula',
          title: 'The chain of aggregates',
          items: [
            { expr: 'GDP = value of all final goods and services produced within a country in a year', note: 'Within the country — so it includes output by foreigners in India and excludes output by Indians abroad.' },
            { expr: 'GNP = GDP + Net Factor Income from Abroad', note: 'By nationals — income earned by Indians abroad, minus income earned by foreigners in India.' },
            { expr: 'NNP = GNP − depreciation', note: 'Depreciation is the consumption of fixed capital. "Net" always means after depreciation.' },
            { expr: 'NDP = GDP − depreciation', note: 'The same subtraction applied to the domestic rather than the national aggregate.' },
            { expr: 'National Income = NNP at factor cost', note: 'This is the formal definition of national income, and per capita income is national income divided by population.' },
            { expr: 'Market price = factor cost + indirect taxes − subsidies', note: 'Which is why an aggregate at market price exceeds the same aggregate at factor cost whenever net indirect taxes are positive.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why "final" goods only',
              'Because counting intermediate goods as well would count the same value twice — the steel in a car and then the car. The two ways round this are to count only final goods, or to sum the value added at each stage, which gives the same total.',
            ],
            [
              'Nominal and real',
              'Nominal GDP is measured at current prices, so it rises when either output or prices rise. Real GDP is measured at the prices of a fixed base year, so it rises only when output rises. Growth figures quoted in the news are real growth. The ratio of the two is the GDP deflator, the broadest measure of the price level in the economy.',
            ],
            [
              'Gross Value Added',
              'GVA is output less intermediate consumption, measured at basic prices. GDP at market prices equals GVA at basic prices plus product taxes minus product subsidies. India publishes both, and sectoral growth is reported in GVA terms.',
            ],
            [
              'What GDP leaves out',
              'Unpaid household work, subsistence production consumed at home, and the entire informal economy that goes unrecorded — all of which are large in India. It also counts as positive some things that reduce welfare, such as expenditure to clean up pollution. These limitations are asked directly.',
            ],
            [
              'Purchasing power parity',
              'Comparing countries at market exchange rates understates poorer economies, because non-traded goods and services are cheaper there. PPP adjusts for that difference in price levels. India ranks substantially higher by PPP than by nominal GDP, and questions often turn on which measure is being used.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'measurement',
      heading: 'Measuring the economy',
      eyebrow: 'Methods, base years and who publishes what',
      intro:
        'Three methods, one base year and a handful of agencies. The base year in particular has just changed, which makes older notes on this topic actively misleading.',
      blocks: [
        {
          type: 'table',
          caption: 'The three methods of estimating national income',
          head: ['Method', 'What it sums', 'Where it is used'],
          rows: [
            ['Product or value-added method', 'The value added at each stage of production across all sectors', 'The main method for agriculture and manufacturing, where physical output can be measured.'],
            ['Income method', 'All factor incomes — rent, wages, interest and profit', 'Used where output is hard to measure directly, particularly in services.'],
            ['Expenditure method', 'Consumption, investment, government expenditure and net exports', 'Gives the demand-side picture; the identity is GDP = C + I + G + (X − M).'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Who publishes what',
              'The Ministry of Statistics and Programme Implementation, through the National Statistical Office, publishes GDP and the Index of Industrial Production. The National Statistical Office also conducts the Periodic Labour Force Survey. The Reserve Bank of India publishes monetary and banking data and the Handbook of Statistics on the Indian Economy. The Economic Survey is published by the Department of Economic Affairs, usually a day before the Union Budget.',
            ],
            [
              'The base year, and the change you must know',
              'India shifted its national accounts to a base year of 2022-23, with the new series released on 27 February 2026, replacing the 2011-12 series that had been in use since 2015. The Index of Industrial Production has also moved to a 2022-23 base, and the Consumer Price Index to a 2023-24 base. Back-series data on the new base is expected later. Any study material still quoting 2011-12 as the current base year is out of date.',
            ],
            [
              'Why the base year is changed',
              'Because the structure of the economy shifts — new industries appear, consumption patterns change, and the weights used in an index stop reflecting reality. Revising the base year updates those weights and the data sources behind them, which is why growth figures on a new series are not directly comparable with the old.',
            ],
            [
              'Committees behind the numbers',
              'The National Statistical Commission was set up on the recommendation of the Rangarajan Commission. Poverty estimation has been reviewed by the Lakdawala, Tendulkar and Rangarajan committees, each giving a different poverty line and therefore a different headcount. Which committee gave which basis is a standard question; the resulting percentages are not, because they are dated.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The rule for figures in this subject',
          text:
            'Learn the concept, the formula and the name of the publishing agency. Take the number itself from the current Economic Survey, the latest RBI bulletin or the most recent NSO release. A candidate who knows that fiscal deficit is total expenditure minus total receipts excluding borrowings will answer more questions than one who has memorised last year\'s deficit ratio.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'development',
      heading: 'Growth and development',
      eyebrow: 'Two different things',
      intro:
        'Growth is an increase in output. Development is an improvement in living conditions. A country can have the first without much of the second, and the distinction underlies a large share of the conceptual questions in this subject.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Human Development Index',
              'Published by the United Nations Development Programme in the Human Development Report, conceived by Mahbub ul Haq with Amartya Sen. It combines three dimensions: a long and healthy life measured by life expectancy at birth, knowledge measured by mean and expected years of schooling, and a decent standard of living measured by gross national income per capita at PPP. The value runs from 0 to 1, and countries are grouped into very high, high, medium and low human development.',
            ],
            [
              'Other indices worth naming',
              'The Multidimensional Poverty Index, published by UNDP with the Oxford Poverty and Human Development Initiative, measures deprivation in health, education and living standards rather than income. NITI Aayog publishes a National Multidimensional Poverty Index for India. The Gini coefficient measures inequality, running from 0 for perfect equality to 1 for perfect inequality, and is derived from the Lorenz curve.',
            ],
            [
              'Poverty lines',
              'India\'s official poverty line has been based on calorie norms and then on consumption expenditure baskets. The Tendulkar Committee, 2009, and the Rangarajan Committee, 2014, each proposed a different methodology and produced different headcount ratios. No new official poverty line has been adopted since, so any poverty percentage should be attributed to a specific committee and year rather than quoted flat.',
            ],
            [
              'Sustainable development',
              'Defined in the Brundtland Report, "Our Common Future", 1987, as development that meets the needs of the present without compromising the ability of future generations to meet their own needs. The seventeen Sustainable Development Goals adopted by the United Nations in 2015 run to 2030, and NITI Aayog publishes an SDG India Index tracking state performance.',
            ],
            [
              'Inclusive growth',
              'Growth whose benefits reach across income groups, regions and social categories rather than concentrating. It was the stated theme of the Eleventh and Twelfth Five Year Plans, and it is the framing behind most questions on why high growth has not translated into proportionate improvement in human development indicators.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'inflation',
      heading: 'Inflation',
      eyebrow: 'Types, indices and effects',
      intro:
        'The most heavily examined single concept in the economy syllabus, because it connects to monetary policy, to the budget and to current affairs all at once.',
      blocks: [
        {
          type: 'table',
          caption: 'Types of inflation',
          head: ['Type', 'Cause', 'Note'],
          rows: [
            ['Demand-pull', 'Aggregate demand grows faster than aggregate supply', 'Too much money chasing too few goods. Responds to monetary tightening.'],
            ['Cost-push', 'A rise in input costs — wages, fuel, imported raw materials', 'Harder to treat, because tightening reduces output as well as prices. Sometimes called supply-shock inflation.'],
            ['Structural', 'Bottlenecks in supply, distribution or infrastructure', 'The explanation usually offered for persistent food inflation in India.'],
            ['Imported', 'A rise in the price of imports, or a depreciation of the currency', 'Crude oil is the dominant channel for India.'],
            ['Headline versus core', 'Headline includes food and fuel; core excludes them', 'Core is watched because food and fuel prices are volatile and often outside the reach of monetary policy.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Consumer Price Index',
              'Measures the change in retail prices paid by consumers. It is the index the Reserve Bank targets. Its base year is being revised to 2023-24 as part of the same statistical overhaul that changed the GDP base. Separate CPI series exist for industrial workers, agricultural labourers and rural labourers, compiled by the Labour Bureau.',
            ],
            [
              'Wholesale Price Index',
              'Measures price change at the wholesale or producer level, published by the Office of the Economic Adviser in the Department for Promotion of Industry and Internal Trade. It excludes services altogether, which is one reason it was replaced by CPI as the policy target. WPI and CPI can move in opposite directions, and questions exploit that.',
            ],
            [
              'The inflation target',
              'India adopted flexible inflation targeting in 2016. The target is four per cent Consumer Price Index inflation with a tolerance band of two percentage points either side. The target is set by the government in consultation with the Reserve Bank for a five-year period, and it was retained at four per cent with the same band for the period from 1 April 2026 to 31 March 2031.',
            ],
            [
              'Related terms',
              'Deflation is a sustained fall in the general price level. Disinflation is a fall in the rate of inflation, prices still rising but more slowly — the distinction is a favourite question. Stagflation is high inflation together with stagnant output and high unemployment. Reflation is deliberate stimulus to raise prices after a slump. Skewflation describes a sharp rise in the price of a few items while the general level is stable, a term coined in the Indian context for food price spikes.',
            ],
            [
              'Who gains and who loses',
              'Debtors gain and creditors lose, because loans are repaid in money worth less than when borrowed. Those on fixed incomes — pensioners, holders of fixed-rate bonds — lose. Holders of real assets such as land and gold are protected. Wage earners lose unless indexation keeps pace. This distributional point is asked as often as the definitions are.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'employment',
      heading: 'Employment',
      eyebrow: 'Types of unemployment and how it is counted',
      intro:
        'Indian unemployment is mostly not the kind that shows up as people with no work at all. The categories below matter because the policy response to each is different.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Disguised unemployment',
              'More people employed than are needed, so that the marginal product of the additional workers is close to zero — removing them would not reduce output. It is characteristic of Indian agriculture, where family members work on a holding too small to need them all.',
            ],
            [
              'Seasonal unemployment',
              'Work available only in part of the year, again typical of agriculture. It is the problem that rural employment guarantee schemes are designed to address, by providing work in the lean season.',
            ],
            [
              'Structural unemployment',
              'A mismatch between the skills workers have and the skills employers need, or between where workers are and where jobs are. It persists even when the economy is growing, and it is the argument for skilling programmes.',
            ],
            [
              'Frictional unemployment',
              'The short-term unemployment of people between jobs or entering the labour market. It exists in every economy and is not regarded as a policy problem.',
            ],
            [
              'Cyclical unemployment',
              'Caused by a downturn in aggregate demand. It is the type Keynesian stimulus is aimed at, and it is less prominent in India than the structural and disguised varieties.',
            ],
            [
              'Educated unemployment',
              'Unemployment among those with formal qualifications, often higher than among the unskilled, because expectations of the kind of job sought do not match what is available. It is a persistent feature of Indian labour market data.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'How employment is measured',
          head: ['Term', 'Definition', 'Why it matters'],
          rows: [
            ['Labour Force Participation Rate', 'The share of the population that is working or seeking work', 'India\'s rate, particularly for women, is low by international standards — a recurring theme in the Economic Survey.'],
            ['Worker Population Ratio', 'The share of the population that is actually employed', 'Read alongside LFPR to see how much of the labour force is absorbed.'],
            ['Unemployment Rate', 'The share of the labour force that is seeking but not finding work', 'It excludes those who have stopped looking, so a falling rate can conceal people leaving the labour force altogether.'],
            ['Usual Status and Current Weekly Status', 'Reference periods of a year and of a week respectively', 'The same survey yields different unemployment rates depending on which is used, which is why the basis must always be stated.'],
          ],
        },
        {
          type: 'note',
          title: 'The survey to name',
          text:
            'The Periodic Labour Force Survey, conducted by the National Statistical Office since 2017-18, replaced the earlier quinquennial employment and unemployment surveys and now reports quarterly for urban areas and annually overall. Rates from it change with every release, so name the survey rather than quoting a figure.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'sectors',
      heading: 'Sectors of the economy',
      eyebrow: 'Primary, secondary, tertiary',
      intro:
        'India\'s structural transformation has been unusual, and the way in which it is unusual is itself a standard question.',
      blocks: [
        {
          type: 'table',
          caption: 'The three sectors',
          head: ['Sector', 'What it covers', 'Position in India'],
          rows: [
            ['Primary', 'Agriculture, forestry, fishing, mining and quarrying', 'A small and shrinking share of output but still employing a very large share of the workforce — the central imbalance in the Indian economy.'],
            ['Secondary', 'Manufacturing, construction, electricity, gas and water supply', 'Its share of output has stayed persistently modest, which is why manufacturing-led job creation is a standing policy objective.'],
            ['Tertiary', 'Trade, transport, communication, finance, real estate, public administration and other services', 'The largest contributor to output, and the sector that led India\'s growth acceleration — an unusual pattern, since most economies industrialise first.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why the pattern is unusual',
              'The classical sequence, described by Colin Clark and Simon Kuznets, runs from agriculture to manufacturing to services, with workers moving between sectors as each becomes dominant. India moved substantially from agriculture to services without a large manufacturing phase, so labour did not shift in proportion to output. The result is a large workforce still in low-productivity agriculture.',
            ],
            [
              'Organised and unorganised',
              'The organised or formal sector is registered, regulated and covered by labour laws and social security. The unorganised or informal sector is not, and it accounts for the great majority of Indian employment. Formalisation — through GST registration, digital payments and provident fund coverage — is a recurring policy theme.',
            ],
            [
              'Public, private and joint',
              'Public sector enterprises are owned by government; the Maharatna, Navratna and Miniratna classification confers graded financial autonomy. Disinvestment is the sale of government equity, which may be partial or amount to strategic sale with transfer of management. The number of companies in each ratna category changes with government notifications and should be checked rather than memorised.',
            ],
            [
              'Capital and revenue in the sectoral sense',
              'A capital good is used to produce other goods — machinery, plant, infrastructure. A consumer good is used directly. A durable consumer good lasts across periods. This trio underlies the composition of the Index of Industrial Production, which classifies output by use.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'planning',
      heading: 'Planning',
      eyebrow: 'Five Year Plans to NITI Aayog',
      intro:
        'Sixty-five years of planning history, of which exams ask about roughly six plans, three models and one institutional change.',
      blocks: [
        {
          type: 'table',
          caption: 'The plans that are actually asked about',
          head: ['Plan', 'Period', 'Focus and outcome'],
          rows: [
            ['First', '1951–56', 'Based on the Harrod-Domar model, with priority to agriculture and irrigation after Partition. It exceeded its target.'],
            ['Second', '1956–61', 'The Mahalanobis model, prioritising heavy and basic industry. It underlies the Industrial Policy Resolution of 1956 and the public sector\'s commanding heights.'],
            ['Third', '1961–66', 'Aimed at a self-reliant economy but disrupted by the wars of 1962 and 1965 and by drought. Followed by three annual plans, the "plan holiday", from 1966 to 1969.'],
            ['Fifth', '1974–79', 'Garibi Hatao — poverty removal and employment. Terminated a year early by the incoming government.'],
            ['Eighth', '1992–97', 'The first plan after the 1991 liberalisation, with a changed role for the state from producer to facilitator.'],
            ['Twelfth', '2012–17', 'Themed "faster, more inclusive and sustainable growth". The last Five Year Plan — no thirteenth plan was framed.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Origins of planning',
              'The Visvesvaraya Plan of 1934, the National Planning Committee under Nehru in 1938, the Bombay Plan of 1944 drawn up by eight industrialists, M. N. Roy\'s People\'s Plan and the Gandhian Plan of S. N. Agarwal all preceded independence. The Planning Commission itself was set up in March 1950 by a cabinet resolution — an executive body, never a constitutional or statutory one.',
            ],
            [
              'The National Development Council',
              'Established in 1952, also by executive resolution, chaired by the Prime Minister with all Chief Ministers and Planning Commission members, to give the plans a federal endorsement. Its role lapsed with the Planning Commission.',
            ],
            [
              'NITI Aayog',
              'The National Institution for Transforming India replaced the Planning Commission on 1 January 2015. It is a think tank and advisory body without the power to allocate funds, chaired by the Prime Minister, with a Governing Council of Chief Ministers and Lieutenant Governors, a Vice-Chairperson and a Chief Executive Officer. Its stated approach is cooperative and competitive federalism, and it publishes indices on health, education, water and the Sustainable Development Goals.',
            ],
            [
              'Why the change mattered',
              'The Planning Commission allocated plan funds to states, which gave an unelected body leverage over elected state governments. NITI Aayog has no such power — transfers now flow through the Finance Commission and the ministries. The shift is therefore about federal finance as much as about planning, and that is the point examiners test.',
            ],
            [
              'The 1991 reforms',
              'Liberalisation, privatisation and globalisation, prompted by a balance of payments crisis. The main measures were the abolition of industrial licensing for most industries, reduction of areas reserved for the public sector, devaluation of the rupee, opening to foreign direct investment, and tariff reduction. Manmohan Singh as Finance Minister and P. V. Narasimha Rao as Prime Minister are the names attached to it.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'India\'s GNP is lower than its GDP. What does that tell you?',
      steps: [
        'GNP equals GDP plus net factor income from abroad.',
        'If GNP is lower, net factor income from abroad must be negative.',
        'That means income earned by foreigners in India exceeds income earned by Indians abroad — a normal position for a country receiving substantial foreign investment.',
      ],
      answer: 'Net factor income from abroad is negative.',
    },
    {
      q: 'Nominal GDP grows by 11% while real GDP grows by 7%. What was inflation on the broadest measure?',
      steps: [
        'Nominal growth reflects both output growth and price change; real growth reflects output alone.',
        'The difference between them is captured by the GDP deflator.',
        'Approximately, 11% − 7% = 4%.',
      ],
      answer: 'About 4% — the rise in the GDP deflator.',
    },
    {
      q: 'Prices are still rising but the rate of increase has fallen from 6% to 4%. What is this called?',
      steps: [
        'Prices are rising, so it is not deflation, which requires an actual fall in the price level.',
        'The rate of inflation has fallen, which is disinflation.',
        'Deflation would mean a negative inflation rate; disinflation means a positive but shrinking one.',
      ],
      answer: 'Disinflation — not deflation.',
    },
    {
      q: 'Four family members work on a holding that two could farm. What kind of unemployment is this?',
      steps: [
        'All four are apparently employed, so it will not appear as unemployment in a headcount.',
        'Removing two of them would not reduce output, so their marginal product is effectively zero.',
        'That is disguised unemployment, and it is characteristic of Indian agriculture.',
      ],
      answer: 'Disguised unemployment.',
    },
    {
      q: 'What is the current base year of India\'s national accounts, and why does it matter?',
      steps: [
        'The base year was 2011-12 from 2015 until the recent revision.',
        'A new series with base year 2022-23 was released on 27 February 2026, and the IIP moved to the same base while the CPI moves to 2023-24.',
        'It matters because real growth is computed at base-year prices, so figures on the new series are not directly comparable with the old, and older notes quoting 2011-12 are out of date.',
      ],
      answer: '2022-23, following the release of the new series in February 2026.',
    },
    {
      q: 'Why does India rank higher on GDP measured at purchasing power parity than at market exchange rates?',
      steps: [
        'Market exchange rates reflect the prices of traded goods and financial flows.',
        'Non-traded goods and services — housing, haircuts, domestic transport — are much cheaper in India than in high-income countries, and exchange rates do not capture that.',
        'PPP adjusts for the difference in domestic price levels, so the same rupee income buys more and the economy measures larger.',
      ],
      answer: 'Because domestic prices are lower than exchange rates imply, and PPP corrects for that.',
    },
    {
      q: 'Which model underlay the Second Five Year Plan, and what did it prioritise?',
      steps: [
        'The First Plan had used the Harrod-Domar model with an agricultural emphasis.',
        'The Second Plan adopted the model of P. C. Mahalanobis.',
        'It prioritised heavy and basic industry in the public sector, on the argument that capital goods capacity would enable all later growth.',
      ],
      answer: 'The Mahalanobis model, prioritising heavy industry.',
    },
    {
      q: 'How does NITI Aayog differ from the Planning Commission in what it can actually do?',
      steps: [
        'Both are executive bodies created by cabinet resolution, not by the Constitution or by statute.',
        'The Planning Commission allocated plan funds to the states, which gave it leverage over elected state governments.',
        'NITI Aayog has no fund-allocation power at all — transfers flow through the Finance Commission and the ministries — so it advises rather than directs.',
      ],
      answer: 'It cannot allocate funds; it is an advisory think tank rather than a resource-allocating body.',
    },
  ],

  practice: [
    {
      q: 'GNP differs from GDP by the amount of:',
      options: ['Depreciation', 'Net factor income from abroad', 'Indirect taxes', 'Subsidies'],
      answer: 1,
      explain: 'GNP = GDP + NFIA. Depreciation is what separates gross from net aggregates.',
    },
    {
      q: 'National income is defined as:',
      options: ['GDP at market price', 'GNP at market price', 'NNP at factor cost', 'NDP at factor cost'],
      answer: 2,
      explain: 'Per capita income is this figure divided by population.',
    },
    {
      q: 'A situation of high inflation together with stagnant output and high unemployment is called:',
      options: ['Deflation', 'Disinflation', 'Stagflation', 'Reflation'],
      answer: 2,
      explain: 'Stagflation is difficult to treat because measures that reduce inflation tend to worsen output and employment.',
    },
    {
      q: 'The Reserve Bank\'s inflation target is defined in terms of:',
      options: ['The Wholesale Price Index', 'The Consumer Price Index', 'The GDP deflator', 'Core inflation'],
      answer: 1,
      explain: 'Four per cent CPI inflation with a band of two percentage points either side, retained for the period from April 2026.',
    },
    {
      q: 'The Human Development Index does NOT include:',
      options: ['Life expectancy at birth', 'Years of schooling', 'Gross national income per capita', 'The unemployment rate'],
      answer: 3,
      explain: 'HDI combines health, education and standard of living. Employment is not one of its three dimensions.',
    },
    {
      q: 'Which committee\'s methodology produced one of India\'s official poverty lines?',
      options: ['Tendulkar Committee', 'Kelkar Committee', 'Malhotra Committee', 'Narasimham Committee'],
      answer: 0,
      explain: 'The Tendulkar Committee of 2009, followed by the Rangarajan Committee of 2014. Narasimham dealt with banking reform.',
    },
    {
      q: 'Unemployment caused by a mismatch between workers\' skills and available jobs is:',
      options: ['Frictional', 'Cyclical', 'Structural', 'Seasonal'],
      answer: 2,
      explain: 'It persists even in a growing economy, which is why skilling programmes rather than demand stimulus are the response.',
    },
    {
      q: 'The Second Five Year Plan was based on the model of:',
      options: ['Harrod and Domar', 'P. C. Mahalanobis', 'Amartya Sen', 'Simon Kuznets'],
      answer: 1,
      explain: 'It prioritised heavy and basic industry in the public sector. The First Plan had used the Harrod-Domar model.',
    },
    {
      q: 'NITI Aayog was established on:',
      options: ['15 August 2014', '1 January 2015', '1 April 2015', '26 January 2015'],
      answer: 1,
      explain: 'It replaced the Planning Commission, which had been set up by cabinet resolution in March 1950.',
    },
    {
      q: 'The Periodic Labour Force Survey is conducted by:',
      options: ['The Reserve Bank of India', 'The National Statistical Office', 'NITI Aayog', 'The Labour Bureau'],
      answer: 1,
      explain: 'It replaced the earlier quinquennial employment and unemployment surveys from 2017-18.',
    },
    {
      q: 'Real GDP differs from nominal GDP in that it is measured at:',
      options: ['Current prices', 'Base year prices', 'Factor cost', 'Purchasing power parity'],
      answer: 1,
      explain: 'Holding prices constant isolates the change in output from the change in the price level.',
    },
    {
      q: 'The Economic Survey is presented by:',
      options: ['NITI Aayog', 'The Reserve Bank of India', 'The Department of Economic Affairs', 'The Comptroller and Auditor General'],
      answer: 2,
      explain: 'It is tabled by the Ministry of Finance, usually a day before the Union Budget.',
    },
    {
      q: 'Which sector contributes the largest share of India\'s output?',
      options: ['Primary', 'Secondary', 'Tertiary', 'They are roughly equal'],
      answer: 2,
      explain: 'Services lead output, though agriculture still employs a much larger share of the workforce than its output share.',
    },
    {
      q: 'The 1991 economic reforms were introduced in response to:',
      options: ['A balance of payments crisis', 'A banking collapse', 'A famine', 'A currency union proposal'],
      answer: 0,
      explain: 'Foreign exchange reserves had fallen to a few weeks of imports, prompting liberalisation, privatisation and globalisation.',
    },
    {
      q: 'A rise in the general price level caused by an increase in input costs is:',
      options: ['Demand-pull inflation', 'Cost-push inflation', 'Structural inflation', 'Imported inflation'],
      answer: 1,
      explain: 'It is harder to treat than demand-pull inflation because tightening reduces output as well as prices.',
    },
    {
      q: 'The Gini coefficient measures:',
      options: ['Inflation', 'Inequality', 'Unemployment', 'Productivity'],
      answer: 1,
      explain: 'It runs from 0 for perfect equality to 1 for perfect inequality and is derived from the Lorenz curve.',
    },
  ],

  faqs: [
    {
      q: 'What is the single most important thing to get right in economy preparation?',
      a: 'Separating the definitions from the data. Definitions — GDP versus GNP, revenue versus fiscal deficit, disinflation versus deflation — never change and account for most of the marks. Data changes every year, and a memorised figure is a liability. Learn the concept and the publishing agency, and take the number from the current Economic Survey or RBI release.',
    },
    {
      q: 'Has India\'s GDP base year changed?',
      a: 'Yes. The national accounts moved from a 2011-12 base to a 2022-23 base, with the new series released on 27 February 2026. The Index of Industrial Production moved to the same base and the Consumer Price Index to 2023-24. This matters because real growth is computed at base-year prices, so figures on the two series are not directly comparable, and older study material quoting 2011-12 is now out of date.',
    },
    {
      q: 'What is the difference between growth and development?',
      a: 'Growth is a quantitative increase in output, measured by real GDP. Development is a qualitative improvement in living conditions — health, education, equality, environmental quality and freedom. A country can grow fast without developing much if the gains concentrate, which is why measures such as the Human Development Index and the Multidimensional Poverty Index exist alongside GDP.',
    },
    {
      q: 'Why did India switch from WPI to CPI as the inflation target?',
      a: 'Because WPI measures wholesale prices and excludes services altogether, so it does not reflect what households actually pay. CPI measures retail prices including services, which is closer to the cost of living that monetary policy is meant to protect. The change came with the adoption of flexible inflation targeting in 2016.',
    },
    {
      q: 'Why is India\'s development path called unusual?',
      a: 'Because it went largely from agriculture to services without a substantial manufacturing phase. The classical sequence has labour move from farms to factories and then to services, so that output and employment shift together. In India output moved to services while a very large share of employment stayed in low-productivity agriculture, which is the root of much of the employment problem.',
    },
    {
      q: 'Was the Planning Commission a constitutional body?',
      a: 'No. It was created by a cabinet resolution in March 1950, with no constitutional or statutory basis — which is why it could be replaced by another executive resolution in 2015. The National Development Council was created the same way. NITI Aayog is likewise an executive body, and this classification question appears in polity papers as often as in economy ones.',
    },
    {
      q: 'What does the tolerance band around the inflation target mean?',
      a: 'That the Reserve Bank aims at four per cent but is not required to hit it exactly. Inflation between two and six per cent is within tolerance. If average inflation stays outside that band for three consecutive quarters, the Bank must report to the government explaining the failure, the remedial action proposed and the expected time to return to target. The target and band were retained for the five years from April 2026.',
    },
    {
      q: 'Which figures should I never memorise?',
      a: 'GDP growth rates, inflation rates, the unemployment rate, poverty headcounts, per capita income, forex reserves, the fiscal deficit ratio, the rank of India on any global index, and the number of companies in each ratna category. All of these change, and all of them are taken by paper-setters from a release close to the exam date.',
    },
    {
      q: 'How much of the economy syllabus is really current affairs?',
      a: 'A large share in banking and insurance papers — perhaps half. Much less in UPSC Prelims, where the questions increasingly test whether you understand a policy rather than whether you remember a number. SSC and RRB sit in between. In all of them, the conceptual foundation on this page is what makes the current-affairs reading intelligible.',
    },
    {
      q: 'How many questions come from basic economics?',
      a: 'Four to seven in UPSC Prelims, two to four in SSC CGL Tier 1, five to eight in banking and insurance general awareness, three to five in state PSC prelims, and one to two in RRB NTPC. Banking exams weight it most heavily of all.',
    },
  ],

  related: [
    { label: 'Money & Banking', to: '/study-material/economy/money-and-banking/' },
    { label: 'Public Finance & Budget', to: '/study-material/economy/public-finance/' },
    { label: 'Indian Geography', to: '/study-material/geography/indian-geography/' },
    { label: 'Indian Polity', to: '/study-material/polity/' },
    { label: 'All Economy', to: '/study-material/economy/' },
  ],
}
