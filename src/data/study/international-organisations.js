/**
 * International Organisations —
 * /study-material/general-knowledge/international-organisations/
 *
 * The UN system, the financial institutions, the regional groupings and the
 * reports each of them publishes. Organised as organisation, headquarters,
 * founding year and function, because that is the exact shape of the question.
 */
export default {
  subject: 'general-knowledge',
  subjectName: 'General Knowledge',
  slug: 'international-organisations',
  title: 'International Organisations',
  seoTitle: 'International Organisations for Competitive Exams | UN, IMF, Groupings Practice',
  metaDescription:
    'Complete international organisations study material for SSC, banking, UPSC and state exams — the United Nations and its organs, specialised agencies.',
  readMinutes: 23,
  lead: [
    'Almost every question in this topic has the same shape: an organisation is named and you are asked for its headquarters, its founding year, or which report it publishes. That makes it one of the most learnable blocks in general awareness, and one where a single well-organised table replaces months of scattered reading.',
    'The tables below are arranged by family — the UN system, the financial institutions, the regional groupings — because grouping them is what makes the headquarters stick. Membership numbers and country rankings, which change, are flagged as items to verify rather than printed as permanent facts.',
  ],

  weightage: [
    { exam: 'Banking and insurance GA', count: '3–5 questions', note: 'Financial institutions and their reports feature particularly heavily.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Headquarters and founding years, asked directly.' },
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Usually about membership, mandate or a report in the news.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'The famous organisations and their headquarters.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'Alongside international relations current affairs.' },
  ],

  contents: [
    { icon: 'globe', title: 'The United Nations', sub: 'Organs and structure', href: '#un' },
    { icon: 'layers', title: 'Specialised agencies', sub: 'WHO, UNESCO and the rest', href: '#agencies' },
    { icon: 'chart', title: 'Financial institutions', sub: 'IMF, World Bank and the banks', href: '#financial' },
    { icon: 'refresh', title: 'Regional groupings', sub: 'ASEAN, SAARC, EU and others', href: '#regional' },
    { icon: 'target', title: 'Security and strategic bodies', sub: 'NATO, Interpol, the courts', href: '#security' },
    { icon: 'search', title: 'Reports and indices', sub: 'Who publishes what', href: '#reports' },
    { icon: 'book', title: 'World facts', sub: 'Capitals, currencies, parliaments', href: '#world' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'un',
      heading: 'The United Nations',
      eyebrow: 'Organs and structure',
      intro:
        'Founded to prevent a third world war, and now the framework within which most international cooperation is organised. Its founding facts and its six organs are asked directly.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Founding',
              'The Charter was signed at San Francisco on 26 June 1945 and came into force on 24 October 1945, which is observed as United Nations Day. The headquarters are in New York, and the organisation succeeded the League of Nations, which had been established after the First World War and had failed to prevent the Second. India was a founding member, having signed the Declaration by United Nations in 1942 while still under British rule.',
            ],
            [
              'The six principal organs',
              'The General Assembly, in which every member state has one vote. The Security Council, responsible for international peace and security. The Economic and Social Council. The Trusteeship Council, which suspended operations in 1994 once the last trust territory became independent. The International Court of Justice, which sits at The Hague and is the only principal organ not located in New York. And the Secretariat, headed by the Secretary-General.',
            ],
            [
              'The Security Council',
              'Fifteen members: five permanent — China, France, Russia, the United Kingdom and the United States — each holding a veto, and ten non-permanent members elected by the General Assembly for two-year terms and not immediately re-eligible. Reform of the Council, and India\'s claim to a permanent seat, is a standing subject in international relations questions. The G4 grouping of India, Japan, Germany and Brazil supports one another\'s claims.',
            ],
            [
              'Official languages',
              'Six: Arabic, Chinese, English, French, Russian and Spanish. Of these, English and French are the working languages of the Secretariat. This is asked as a straight recall question.',
            ],
            [
              'What changes',
              'The Secretary-General, the current non-permanent members of the Security Council, and the total membership. The number of member states has been 193 for some years, but any such figure and the identity of any office-holder should be verified against a current source rather than taken from notes.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'agencies',
      heading: 'Specialised agencies',
      eyebrow: 'WHO, UNESCO and the rest',
      intro:
        'Autonomous organisations linked to the UN by agreement. Learn them as a single table of name, headquarters and function — that is exactly the form the question takes.',
      blocks: [
        {
          type: 'table',
          caption: 'UN agencies and programmes',
          head: ['Organisation', 'Headquarters and year', 'Function'],
          rows: [
            ['World Health Organization', 'Geneva, 1948', 'International public health. World Health Day on 7 April marks its founding. It declared smallpox eradicated in 1980.'],
            ['UNESCO', 'Paris, 1945', 'Education, science and culture; it maintains the World Heritage list and the intangible cultural heritage lists.'],
            ['International Labour Organization', 'Geneva, 1919', 'Labour standards. It is the oldest of the agencies and predates the UN itself, having been created under the Treaty of Versailles. It has a unique tripartite structure of governments, employers and workers.'],
            ['Food and Agriculture Organization', 'Rome, 1945', 'Food security and agriculture. World Food Day on 16 October marks its founding.'],
            ['UNICEF', 'New York, 1946', 'Children\'s welfare, originally created for post-war emergency relief.'],
            ['UNDP', 'New York, 1965', 'Development assistance; publishes the Human Development Report.'],
            ['UNEP', 'Nairobi, 1972', 'The environment. Created after the Stockholm Conference, and the only major UN body headquartered in Africa.'],
            ['IAEA', 'Vienna, 1957', 'Peaceful use of nuclear energy and safeguards against weapons proliferation. It reports to the General Assembly and the Security Council.'],
            ['UNHCR', 'Geneva, 1950', 'Refugees and the displaced.'],
            ['World Meteorological Organization', 'Geneva', 'Weather, climate and water; it co-created the IPCC with UNEP.'],
            ['WIPO', 'Geneva, 1967', 'Intellectual property; publishes the Global Innovation Index.'],
            ['ICAO and IMO', 'Montreal; London', 'Civil aviation and maritime shipping respectively.'],
          ],
        },
        {
          type: 'note',
          title: 'The Geneva cluster',
          text:
            'A striking number of international bodies are headquartered in Geneva: the WHO, the ILO, the UNHCR, the WMO, the WIPO, the ITU, the WTO, the International Committee of the Red Cross and CERN nearby. Learning them as a group is far easier than learning each separately, and it also fixes the smaller Vienna cluster — the IAEA, UNIDO, OPEC and the CTBTO — and the Rome cluster of the FAO, IFAD and the World Food Programme.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'financial',
      heading: 'Financial institutions',
      eyebrow: 'IMF, World Bank and the banks',
      intro:
        'The heaviest-weighted part of this topic in banking papers, and the one where the distinction between two similar-sounding institutions is most often tested.',
      blocks: [
        {
          type: 'table',
          caption: 'The international financial institutions',
          head: ['Institution', 'Headquarters and origin', 'What it does'],
          rows: [
            ['International Monetary Fund', 'Washington DC; created at the Bretton Woods Conference of 1944', 'Monitors the international monetary system, provides balance of payments support and conducts Article IV surveillance of member economies. Its reserve asset is the Special Drawing Right. It publishes the World Economic Outlook.'],
            ['World Bank', 'Washington DC; also from Bretton Woods, 1944', 'Long-term development lending and technical assistance. It is a group of five institutions — the IBRD, the IDA which lends concessionally to the poorest countries, the IFC for the private sector, MIGA for investment guarantees and ICSID for investment dispute settlement. It publishes the World Development Report.'],
            ['World Trade Organization', 'Geneva, 1995', 'Rules for international trade and a dispute settlement mechanism. It replaced the General Agreement on Tariffs and Trade of 1947, and decisions are normally taken by consensus.'],
            ['Asian Development Bank', 'Manila, 1966', 'Development finance for Asia and the Pacific.'],
            ['Asian Infrastructure Investment Bank', 'Beijing, 2016', 'Infrastructure lending in Asia; India is among its largest borrowers.'],
            ['New Development Bank', 'Shanghai, 2015', 'Established by the BRICS countries for infrastructure and sustainable development.'],
            ['Bank for International Settlements', 'Basel, 1930', 'The bank for central banks; the Basel Committee on Banking Supervision issues the Basel capital norms from there.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'IMF and World Bank distinguished',
              'Both were created at Bretton Woods in 1944 and both sit in Washington, which is why they are confused. The IMF deals with short-term macroeconomic and balance of payments stability, lending to governments facing currency crises and attaching conditions to that lending. The World Bank deals with long-term development, financing projects in infrastructure, health and education. The IMF is a monetary institution; the World Bank is a development one.',
            ],
            [
              'Special Drawing Rights',
              'An international reserve asset created by the IMF in 1969. It is not a currency but a claim on the freely usable currencies of member countries, and its value is set by a basket comprising the US dollar, the euro, the Chinese renminbi, the Japanese yen and the pound sterling. Allocations of SDRs to members provide unconditional liquidity.',
            ],
            [
              'Voting power',
              'Both the IMF and the World Bank use weighted voting based on quotas reflecting the size of each member\'s economy, unlike the UN General Assembly where each state has one vote. This is why quota reform, and the under-representation of developing economies, is a recurring subject in international economics questions.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'regional',
      heading: 'Regional groupings',
      eyebrow: 'ASEAN, SAARC, EU and others',
      intro:
        'Groupings of states formed for trade, security or political coordination. Membership lists change, so learn the founding facts and the purpose, and verify the current membership.',
      blocks: [
        {
          type: 'table',
          caption: 'The groupings that recur',
          head: ['Grouping', 'Founded and headquarters', 'Note'],
          rows: [
            ['ASEAN', '1967, Jakarta', 'The Association of Southeast Asian Nations, founded by the Bangkok Declaration. India is a dialogue partner, and the relationship underpins the Act East policy.'],
            ['SAARC', '1985, Kathmandu', 'The South Asian Association for Regional Cooperation, with eight members including Afghanistan, admitted in 2007. Its summits have been suspended for years because of India-Pakistan tensions.'],
            ['BIMSTEC', '1997, Dhaka', 'Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation, linking South and Southeast Asia and excluding Pakistan — which is why India has emphasised it as SAARC stalled.'],
            ['European Union', 'Brussels', 'Evolved from the European Economic Community through the Maastricht Treaty of 1992. The eurozone is the subset using the euro, and the United Kingdom left in 2020.'],
            ['African Union', '2002, Addis Ababa', 'Successor to the Organisation of African Unity. It was admitted as a permanent member of the G20 in 2023, during India\'s presidency.'],
            ['OPEC', '1960, Vienna', 'The Organization of the Petroleum Exporting Countries; OPEC+ adds non-members, Russia most significantly. Membership has changed several times.'],
            ['G20', 'Established 1999; no permanent secretariat', 'The premier forum for international economic cooperation, comprising nineteen countries plus the European Union and, since 2023, the African Union. India held the presidency in 2023.'],
            ['BRICS', 'First summit 2009; no permanent secretariat', 'Originally Brazil, Russia, India, China and later South Africa. The grouping expanded from 2024, so the membership should be checked against the current position.'],
            ['Shanghai Cooperation Organisation', '2001, Beijing', 'A Eurasian political, economic and security grouping. India and Pakistan both joined as full members in 2017.'],
            ['Commonwealth', 'London', 'An association of mostly former British territories. Membership is voluntary and countries have joined without that history, and some have left and rejoined.'],
            ['Non-Aligned Movement', 'First summit Belgrade, 1961', 'Founded on the principles agreed at Bandung in 1955, with Nehru, Nasser, Tito, Sukarno and Nkrumah as its founding figures. It has no permanent secretariat.'],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'security',
      heading: 'Security and strategic bodies',
      eyebrow: 'NATO, Interpol, the courts',
      intro:
        'Organisations dealing with defence, law enforcement and international law, each of which appears regularly in current affairs and therefore in general awareness papers.',
      blocks: [
        {
          type: 'table',
          caption: 'Security and legal bodies',
          head: ['Body', 'Headquarters and year', 'Function'],
          rows: [
            ['NATO', 'Brussels, 1949', 'The North Atlantic Treaty Organization, a collective defence alliance whose Article 5 treats an attack on one member as an attack on all. Membership has expanded repeatedly, so the total should be checked.'],
            ['Interpol', 'Lyon, 1923', 'The International Criminal Police Organization, which coordinates police cooperation and issues notices — the Red Notice being a request to locate and provisionally arrest a person pending extradition.'],
            ['International Court of Justice', 'The Hague, 1945', 'The principal judicial organ of the UN, settling disputes between states and giving advisory opinions. It has fifteen judges elected for nine-year terms.'],
            ['International Criminal Court', 'The Hague, 2002', 'A separate body, created by the Rome Statute, which prosecutes individuals for genocide, war crimes, crimes against humanity and aggression. It is not a UN organ, and India is not a party to the Rome Statute.'],
            ['OPCW', 'The Hague, 1997', 'The Organisation for the Prohibition of Chemical Weapons, implementing the Chemical Weapons Convention. It received the Nobel Peace Prize in 2013.'],
            ['CTBTO Preparatory Commission', 'Vienna', 'Prepares for the entry into force of the Comprehensive Nuclear-Test-Ban Treaty, which India has not signed.'],
            ['Quad', 'No secretariat', 'The Quadrilateral Security Dialogue between India, the United States, Japan and Australia, revived in 2017 and now holding leader-level summits.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The two Hague courts distinguished',
              'The International Court of Justice settles disputes between states and is a principal organ of the United Nations. The International Criminal Court prosecutes individuals for the gravest crimes, was created by a separate treaty, the Rome Statute, and is not part of the UN. Both sit at The Hague, which is why they are confused, and India is a party to the first but not the second.',
            ],
            [
              'Export control regimes',
              'Four regimes limit trade in sensitive technology: the Nuclear Suppliers Group, the Missile Technology Control Regime, the Wassenaar Arrangement and the Australia Group. India is a member of the last three, having joined in 2016, 2017 and 2018 respectively, and is not a member of the Nuclear Suppliers Group, though it received a waiver from it in 2008.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'reports',
      heading: 'Reports and indices',
      eyebrow: 'Who publishes what',
      intro:
        'The single most asked item in this topic in banking and UPSC papers: a report is named and the question asks which organisation publishes it. India\'s rank in any of them changes annually and should never be memorised.',
      blocks: [
        {
          type: 'table',
          caption: 'Report and publisher',
          head: ['Report or index', 'Published by', 'Subject'],
          rows: [
            ['Human Development Report and Human Development Index', 'UNDP', 'Life expectancy, education and income combined into a single measure. Conceived by Mahbub ul Haq with Amartya Sen.'],
            ['World Development Report', 'World Bank', 'A different theme each year, with extensive development data.'],
            ['World Economic Outlook', 'IMF', 'Global growth projections, published twice a year.'],
            ['Global Competitiveness Report and Global Risks Report', 'World Economic Forum', 'The WEF also hosts the annual Davos meeting.'],
            ['Global Hunger Index', 'Concern Worldwide and Welthungerhilfe', 'A non-governmental publication, not a UN one — a point frequently tested.'],
            ['Corruption Perceptions Index', 'Transparency International', 'Based on perceptions of public-sector corruption.'],
            ['Global Innovation Index', 'WIPO', 'With academic partners; India\'s rank has improved substantially over the last decade.'],
            ['World Happiness Report', 'UN Sustainable Development Solutions Network', 'Based largely on survey responses about life evaluation.'],
            ['Environmental Performance Index', 'Yale and Columbia universities', 'Not a UN publication.'],
            ['World Press Freedom Index', 'Reporters Without Borders', ''],
            ['Emissions Gap Report', 'UNEP', 'Compares pledged emission cuts with what is needed to meet the Paris goals.'],
            ['State of the World\'s Forests', 'FAO', 'And the State of Food Security and Nutrition in the World, jointly with other UN agencies.'],
          ],
        },
        {
          type: 'note',
          title: 'Never memorise a rank',
          text:
            'India\'s position on every index in this table changes annually, and several indices have been revised in methodology or discontinued altogether — the World Bank\'s Ease of Doing Business ranking was discontinued in 2021 after data irregularities were found. Learn which body publishes which report and what it measures; take the current rank from the news in the month of your exam.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'world',
      heading: 'World facts',
      eyebrow: 'Capitals, currencies, parliaments',
      intro:
        'A supporting table of country facts, asked most often for countries that have recently been in the news.',
      blocks: [
        {
          type: 'table',
          caption: 'Countries, capitals and currencies',
          head: ['Country', 'Capital', 'Currency'],
          rows: [
            ['Japan', 'Tokyo', 'Yen'],
            ['China', 'Beijing', 'Yuan, formally the renminbi'],
            ['Russia', 'Moscow', 'Rouble'],
            ['United Kingdom', 'London', 'Pound sterling'],
            ['Turkey', 'Ankara — not Istanbul', 'Lira'],
            ['Australia', 'Canberra — not Sydney', 'Australian dollar'],
            ['Brazil', 'Brasília — not Rio de Janeiro', 'Real'],
            ['South Africa', 'Three capitals: Pretoria executive, Cape Town legislative, Bloemfontein judicial', 'Rand'],
            ['Switzerland', 'Bern — not Geneva or Zurich', 'Swiss franc'],
            ['Israel and Saudi Arabia', 'Jerusalem, with international dispute over its status; Riyadh', 'Shekel; Riyal'],
            ['Myanmar', 'Naypyidaw — the capital moved from Yangon in 2005', 'Kyat'],
            ['Bhutan and Nepal', 'Thimphu; Kathmandu', 'Ngultrum; Nepalese rupee'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Parliaments by name',
              'India has the Sansad; the United Kingdom, Parliament; the United States, Congress; Russia, the Duma; Japan, the Diet; Israel, the Knesset; Iran, the Majlis; Germany, the Bundestag; Afghanistan, the Shora; Nepal, the Sansad; Pakistan, the Majlis-e-Shoora; Spain, the Cortes; and Norway, the Storting. These are asked as straight pairings.',
            ],
            [
              'Capitals that catch people out',
              'The largest or best-known city is often not the capital. Ankara rather than Istanbul; Canberra rather than Sydney or Melbourne; Brasília rather than Rio or São Paulo; Bern rather than Zurich or Geneva; Washington rather than New York; Ottawa rather than Toronto; Wellington rather than Auckland; Abuja rather than Lagos; and Naypyidaw rather than Yangon. Option lists are built precisely from these.',
            ],
            [
              'Countries with several capitals',
              'South Africa has three — Pretoria for the executive, Cape Town for the legislature and Bloemfontein for the judiciary. Bolivia has two, Sucre being constitutional and La Paz the seat of government. The Netherlands has Amsterdam as capital while the government sits at The Hague. Each of these is a recurring question.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Which UN principal organ is not headquartered in New York?',
      steps: [
        'The General Assembly, Security Council, Economic and Social Council, Trusteeship Council and Secretariat are all at UN headquarters in New York.',
        'The sixth organ is the International Court of Justice.',
        'It sits at the Peace Palace in The Hague, which makes it the only principal organ located elsewhere.',
      ],
      answer: 'The International Court of Justice, at The Hague.',
    },
    {
      q: 'How do the IMF and the World Bank differ?',
      steps: [
        'Both were created at the Bretton Woods Conference of 1944 and both are headquartered in Washington DC, which is why they are confused.',
        'The IMF handles short-term macroeconomic and balance of payments stability, lending to governments in currency crises with conditions attached.',
        'The World Bank handles long-term development, financing projects in infrastructure, health and education. One is a monetary institution, the other a development one.',
      ],
      answer: 'The IMF is monetary and short-term; the World Bank is developmental and long-term.',
    },
    {
      q: 'Which specialised agency predates the United Nations itself?',
      steps: [
        'Most agencies were created in or after 1945, alongside the UN.',
        'The International Labour Organization was established in 1919 under the Treaty of Versailles, as part of the League of Nations system.',
        'It survived the League\'s collapse and became the first specialised agency of the UN, and it retains a unique tripartite structure of governments, employers and workers.',
      ],
      answer: 'The International Labour Organization, founded in 1919.',
    },
    {
      q: 'Which body publishes the Global Hunger Index?',
      steps: [
        'The name suggests a UN body, and the FAO does publish reports on food security — but not this one.',
        'The Global Hunger Index is published by Concern Worldwide and Welthungerhilfe, two non-governmental organisations.',
        'India has objected to its methodology on several occasions, which is why the question recurs. The FAO\'s comparable publication is the State of Food Security and Nutrition in the World.',
      ],
      answer: 'Concern Worldwide and Welthungerhilfe — non-governmental bodies, not the UN.',
    },
    {
      q: 'Distinguish the International Court of Justice from the International Criminal Court.',
      steps: [
        'Both sit at The Hague, which is the source of the confusion.',
        'The ICJ is a principal organ of the United Nations and settles legal disputes between states, giving advisory opinions to UN bodies.',
        'The ICC was created by the Rome Statute in 2002, is not a UN organ, and prosecutes individuals for genocide, war crimes, crimes against humanity and aggression. India is a party to the first and not to the second.',
      ],
      answer: 'The ICJ tries disputes between states as a UN organ; the ICC tries individuals under a separate treaty.',
    },
    {
      q: 'Why has India emphasised BIMSTEC over SAARC in recent years?',
      steps: [
        'SAARC, founded in 1985, includes Pakistan, and its summits have been suspended for years because of India-Pakistan tensions.',
        'BIMSTEC, founded in 1997, links South Asian and Southeast Asian states around the Bay of Bengal and does not include Pakistan.',
        'It therefore offers a functioning regional platform, and it aligns with India\'s Act East policy by connecting the two regions.',
      ],
      answer: 'Because SAARC is deadlocked and BIMSTEC excludes Pakistan while linking South and Southeast Asia.',
    },
    {
      q: 'Which regime is India not a member of, and what does it have instead?',
      steps: [
        'Four export control regimes govern trade in sensitive technology.',
        'India joined the Missile Technology Control Regime in 2016, the Wassenaar Arrangement in 2017 and the Australia Group in 2018.',
        'It is not a member of the Nuclear Suppliers Group, though it obtained a waiver from it in 2008 permitting civil nuclear trade despite not being a party to the Non-Proliferation Treaty.',
      ],
      answer: 'The Nuclear Suppliers Group — India has a waiver but not membership.',
    },
    {
      q: 'Name the three capitals of South Africa and what each houses.',
      steps: [
        'South Africa deliberately separated the branches of government geographically at the time of union.',
        'Pretoria is the executive capital and seat of the government; Cape Town is the legislative capital, where Parliament sits.',
        'Bloemfontein is the judicial capital, seat of the Supreme Court of Appeal.',
      ],
      answer: 'Pretoria executive, Cape Town legislative, Bloemfontein judicial.',
    },
  ],

  practice: [
    {
      q: 'The United Nations came into existence on:',
      options: ['26 June 1945', '24 October 1945', '1 January 1946', '10 December 1948'],
      answer: 1,
      explain: 'The Charter was signed at San Francisco on 26 June 1945 and came into force on 24 October, observed as UN Day.',
    },
    {
      q: 'The International Court of Justice is located at:',
      options: ['New York', 'Geneva', 'The Hague', 'Vienna'],
      answer: 2,
      explain: 'It is the only principal organ of the UN not headquartered in New York.',
    },
    {
      q: 'How many permanent members does the UN Security Council have?',
      options: ['Five', 'Ten', 'Fifteen', 'Seven'],
      answer: 0,
      explain: 'China, France, Russia, the United Kingdom and the United States, each with a veto. Ten non-permanent members serve two-year terms.',
    },
    {
      q: 'The World Health Organization is headquartered at:',
      options: ['Paris', 'Geneva', 'Rome', 'Nairobi'],
      answer: 1,
      explain: 'UNESCO is at Paris, the FAO at Rome and UNEP at Nairobi.',
    },
    {
      q: 'The oldest specialised agency of the United Nations is the:',
      options: ['WHO', 'ILO', 'UNESCO', 'FAO'],
      answer: 1,
      explain: 'The ILO was founded in 1919 under the Treaty of Versailles and predates the UN itself.',
    },
    {
      q: 'The IMF and the World Bank were both created at:',
      options: ['The San Francisco Conference', 'The Bretton Woods Conference', 'The Yalta Conference', 'The Bandung Conference'],
      answer: 1,
      explain: 'In 1944. Both are headquartered in Washington DC.',
    },
    {
      q: 'The Human Development Index is published by:',
      options: ['World Bank', 'IMF', 'UNDP', 'WEF'],
      answer: 2,
      explain: 'In the Human Development Report. It combines life expectancy, education and income.',
    },
    {
      q: 'UNEP is headquartered at:',
      options: ['Nairobi', 'Geneva', 'Vienna', 'Rome'],
      answer: 0,
      explain: 'It was created after the Stockholm Conference of 1972 and is the major UN body headquartered in Africa.',
    },
    {
      q: 'SAARC was established in:',
      options: ['1967', '1985', '1997', '2001'],
      answer: 1,
      explain: 'With its secretariat at Kathmandu. ASEAN was founded in 1967 and BIMSTEC in 1997.',
    },
    {
      q: 'The Shanghai Cooperation Organisation admitted India as a full member in:',
      options: ['2005', '2012', '2017', '2020'],
      answer: 2,
      explain: 'India and Pakistan both became full members in 2017.',
    },
    {
      q: 'The Global Hunger Index is published by:',
      options: ['FAO', 'WHO', 'Concern Worldwide and Welthungerhilfe', 'World Bank'],
      answer: 2,
      explain: 'It is a non-governmental publication, not a UN one — a distinction frequently tested.',
    },
    {
      q: 'The capital of Australia is:',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
      answer: 2,
      explain: 'Canberra was purpose-built as a compromise between Sydney and Melbourne.',
    },
    {
      q: 'The parliament of Israel is called the:',
      options: ['Diet', 'Knesset', 'Duma', 'Majlis'],
      answer: 1,
      explain: 'The Diet is Japan\'s, the Duma is Russia\'s and the Majlis is Iran\'s.',
    },
    {
      q: 'The New Development Bank was established by:',
      options: ['ASEAN', 'The BRICS countries', 'The G7', 'The European Union'],
      answer: 1,
      explain: 'Headquartered at Shanghai and established in 2015.',
    },
    {
      q: 'The IAEA is headquartered at:',
      options: ['Vienna', 'Geneva', 'Paris', 'The Hague'],
      answer: 0,
      explain: 'Along with UNIDO, OPEC and the CTBTO Preparatory Commission — the Vienna cluster.',
    },
    {
      q: 'India is NOT a member of which export control regime?',
      options: ['Missile Technology Control Regime', 'Wassenaar Arrangement', 'Australia Group', 'Nuclear Suppliers Group'],
      answer: 3,
      explain: 'India obtained an NSG waiver in 2008 but has not been admitted as a member.',
    },
  ],

  faqs: [
    {
      q: 'What is the fastest way to learn all these headquarters?',
      a: 'By city rather than by organisation. A large number sit in Geneva — the WHO, ILO, UNHCR, WMO, WIPO, ITU and WTO. Vienna has the IAEA, UNIDO, OPEC and the CTBTO. Rome has the FAO, IFAD and the World Food Programme. The Hague has the ICJ, ICC and OPCW. Washington has the IMF and World Bank. Learning five clusters replaces learning thirty separate facts.',
    },
    {
      q: 'How do the IMF and the World Bank differ?',
      a: 'The IMF addresses short-term monetary and balance of payments problems, lending to governments in currency difficulty and monitoring member economies through Article IV consultations. The World Bank addresses long-term development, financing projects and programmes in infrastructure, health, education and governance. Both came from Bretton Woods in 1944 and both sit in Washington, but their mandates barely overlap.',
    },
    {
      q: 'Why should I never memorise India\'s rank on an index?',
      a: 'Because it changes every year, and because indices themselves change. The World Bank discontinued its Ease of Doing Business ranking in 2021 after data irregularities. Methodologies are revised, countries are added, and India has moved substantially on several indices in both directions. Learn who publishes what and what it measures, and take the rank from the news close to your exam.',
    },
    {
      q: 'What is the difference between the ICJ and the ICC?',
      a: 'The International Court of Justice is a principal organ of the UN and settles disputes between states, with fifteen judges elected for nine-year terms. The International Criminal Court was created by the Rome Statute of 2002, is independent of the UN, and prosecutes individuals for genocide, war crimes, crimes against humanity and aggression. Both sit at The Hague; India accepts the first and is not a party to the second.',
    },
    {
      q: 'Which memberships in this topic are actually changing?',
      a: 'The BRICS grouping expanded from 2024. NATO has admitted new members recently. OPEC membership has changed repeatedly. The G20 admitted the African Union as a permanent member in 2023. The UN\'s non-permanent Security Council members rotate every two years. Learn the founding facts, which are fixed, and verify current membership before quoting a number.',
    },
    {
      q: 'Why does India want a permanent Security Council seat?',
      a: 'Because the permanent membership reflects the balance of power in 1945 rather than today, and excludes any state from South Asia, Africa or Latin America. India argues from its population, economy, contribution to UN peacekeeping and record as a founding member. The G4 — India, Japan, Germany and Brazil — support one another\'s claims, and reform requires a Charter amendment, which the existing permanent members can veto.',
    },
    {
      q: 'How much of this topic is really current affairs?',
      a: 'The structure is not: founding years, headquarters, mandates and the publisher of each report are stable. What is current affairs is the identity of office-holders, current membership numbers, this year\'s rankings and the outcomes of recent summits. That split is roughly two-thirds static and one-third moving, which is a better ratio than most of general awareness.',
    },
    {
      q: 'Which regional grouping matters most for Indian foreign policy questions?',
      a: 'It depends on the frame. BIMSTEC and ASEAN for the Act East policy and connectivity; the Quad and the Indo-Pacific framing for maritime security; the SCO for Eurasian engagement; the G20 for economic governance, particularly after India\'s 2023 presidency; and SAARC chiefly as an example of a deadlocked institution. UPSC mains questions draw on all five.',
    },
    {
      q: 'Why are so many international bodies in Geneva and Vienna?',
      a: 'Switzerland and Austria were both neutral during the Cold War, which made them acceptable locations to both blocs, and Geneva already hosted the League of Nations, so an institutional infrastructure existed. Vienna became the third UN headquarters city, with an office alongside New York and Geneva, and attracted the nuclear and industrial bodies.',
    },
    {
      q: 'How many questions come from international organisations?',
      a: 'Three to five in banking and insurance general awareness, where the financial institutions and their reports feature heavily; two to four in UPSC Prelims; two to three in SSC CGL Tier 1, RRB and state PSC prelims. It is also a recurring area in UPSC mains GS Paper 2 on international relations.',
    },
  ],

  related: [
    { label: 'Static GK', to: '/study-material/general-knowledge/static-gk/' },
    { label: 'Awards, Sports & Books', to: '/study-material/general-knowledge/awards-sports-books/' },
    { label: 'World Geography', to: '/study-material/geography/world-geography/' },
    { label: 'Climate Change & Agreements', to: '/study-material/environment/climate-change/' },
    { label: 'All General Knowledge', to: '/study-material/general-knowledge/' },
  ],
}
