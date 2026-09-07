/**
 * World Geography — /study-material/geography/world-geography/
 *
 * The regional half of the subject. Organised around the things exams actually
 * ask for: superlatives, the pairing of a feature with its continent, the
 * straits and canals that carry trade, and the boundary lines that carry
 * disputes. Production rankings, which move, are flagged as look-up items.
 */
export default {
  subject: 'geography',
  subjectName: 'Geography',
  slug: 'world-geography',
  title: 'World Geography',
  seoTitle: 'World Geography for Competitive Exams | Continents, Straits, Regions & Practice',
  metaDescription:
    'Complete world geography study material for UPSC, SSC, state PSC and railway exams — continents and superlatives, mountains and rivers.',
  readMinutes: 24,
  lead: [
    'World geography is examined narrowly and predictably. Exams almost never ask you to describe a country; they ask which strait separates two named places, which river flows through which capital, which desert lies in which continent, and which line divides which pair of neighbours.',
    'This page is therefore built as a set of pairings, grouped so that the pairings reinforce each other — all the straits together, all the boundary lines together, all the grassland names together. Where a ranking depends on annual production data and changes between exam cycles, it is marked as something to check rather than something to memorise.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Usually location-based and often tied to a place in the news.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Straits, canals, superlatives and continent pairings.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'Smaller share than Indian geography but reliably present.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Direct recall of longest, largest, highest and deepest.' },
    { exam: 'Banking and insurance GA', count: '1–2 questions', note: 'Almost always tied to a country in the current affairs of that cycle.' },
  ],

  contents: [
    { icon: 'globe', title: 'Continents and superlatives', sub: 'The facts asked most often', href: '#continents' },
    { icon: 'layers', title: 'Mountains, rivers and lakes', sub: 'Physical features by continent', href: '#features' },
    { icon: 'target', title: 'Deserts and grasslands', sub: 'Names that differ by region', href: '#biomes' },
    { icon: 'refresh', title: 'Straits, canals and lines', sub: 'Chokepoints and boundaries', href: '#chokepoints' },
    { icon: 'chart', title: 'World resources', sub: 'Where the minerals and crops are', href: '#resources' },
    { icon: 'user', title: 'Population geography', sub: 'Density, transition and migration', href: '#population' },
    { icon: 'book', title: 'Regions in the news', sub: 'Places worth locating on a map', href: '#regions' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'continents',
      heading: 'Continents and superlatives',
      eyebrow: 'The facts asked most often',
      intro:
        'A small number of superlatives account for a large share of world geography questions. They are worth learning as a block, together with the qualification each one needs.',
      blocks: [
        {
          type: 'table',
          caption: 'The seven continents',
          head: ['Continent', 'Rank by area', 'Points examiners use'],
          rows: [
            ['Asia', 'Largest, about 30% of world land', 'Most populous; contains the highest point, Everest, and the lowest land surface, the Dead Sea shore.'],
            ['Africa', 'Second', 'The only continent crossed by the equator, both tropics and the Prime Meridian. Contains the Nile and the Sahara.'],
            ['North America', 'Third', 'Contains the Great Lakes, the world\'s largest group of freshwater lakes, and the Rockies.'],
            ['South America', 'Fourth', 'Contains the Amazon, the Andes and the Atacama — the wettest basin and the driest desert on one continent.'],
            ['Antarctica', 'Fifth', 'The coldest, driest and windiest continent, and technically the largest desert on earth. No permanent human population.'],
            ['Europe', 'Sixth', 'Highly indented coastline; no true desert; the peninsula of a single Eurasian landmass.'],
            ['Australia', 'Smallest', 'The only continent that is a single country, and the flattest and driest inhabited one.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Largest and smallest countries',
              'Russia is the largest country by area, spanning eleven time zones and two continents. Canada, China, the United States, Brazil, Australia and India follow. The Vatican City is the smallest sovereign state, followed by Monaco.',
            ],
            [
              'Highest and lowest',
              'Mount Everest, on the Nepal–China border, is the highest point on land; its height was jointly revised by Nepal and China in 2020 to 8,848.86 m, so older sources give 8,848 m. The lowest exposed land is the shore of the Dead Sea, more than 400 m below sea level. The deepest point of the ocean is the Challenger Deep in the Mariana Trench.',
            ],
            [
              'Longest river',
              'The Nile is conventionally given as the longest river at roughly 6,650 km, with the Amazon a close second; some measurements of the Amazon\'s headwaters put it first, so the question is genuinely contested. The Amazon is unambiguously the largest by volume of discharge, carrying more water than the next several rivers combined.',
            ],
            [
              'Largest desert',
              'Antarctica, if a desert is defined by precipitation, which is the technically correct answer and increasingly the one exams want. The Sahara is the largest hot desert. Read the wording of the question carefully — both answers appear.',
            ],
            [
              'Lakes',
              'The Caspian Sea is the largest lake in the world, though it is saline and called a sea. Lake Superior is the largest freshwater lake by surface area. Lake Baikal in Siberia is the deepest and holds the greatest volume of fresh water. Lake Victoria is the largest lake in Africa and the source of the White Nile.',
            ],
            [
              'Waterfalls and ranges',
              'Angel Falls in Venezuela is the highest waterfall. The Andes is the longest mountain range on land at about 7,000 km; the longest range overall is the mid-ocean ridge system beneath the Atlantic and other oceans.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'features',
      heading: 'Mountains, rivers and lakes',
      eyebrow: 'Physical features by continent',
      intro:
        'Learn these by continent rather than alphabetically, because that is how the question is framed — a river is named and you are asked which continent, or a capital is named and you are asked which river it stands on.',
      blocks: [
        {
          type: 'table',
          caption: 'Rivers and the cities on them',
          head: ['River', 'Continent and outflow', 'Cities and notes'],
          rows: [
            ['Nile', 'Africa, into the Mediterranean', 'Cairo and Khartoum. Formed where the White Nile from Lake Victoria meets the Blue Nile from Lake Tana.'],
            ['Amazon', 'South America, into the Atlantic', 'Manaus. Rises in the Peruvian Andes and crosses the equator; largest discharge in the world.'],
            ['Yangtze', 'Asia, into the East China Sea', 'Shanghai, Wuhan, Nanjing. The longest river in Asia; the Three Gorges Dam is on it.'],
            ['Mississippi–Missouri', 'North America, into the Gulf of Mexico', 'New Orleans, St Louis. The principal drainage of the interior plains.'],
            ['Danube', 'Europe, into the Black Sea', 'Vienna, Budapest, Belgrade, Bratislava — it passes more capital cities than any other river.'],
            ['Rhine', 'Europe, into the North Sea', 'Rotterdam at its mouth; the busiest waterway in Europe and the artery of the Ruhr industrial belt.'],
            ['Volga', 'Europe, into the Caspian Sea', 'The longest river in Europe, and one that never reaches an ocean.'],
            ['Congo', 'Africa, into the Atlantic', 'Kinshasa and Brazzaville face each other across it. It crosses the equator twice, so it flows all year.'],
            ['Murray–Darling', 'Australia, into the Southern Ocean', 'The main river system of an otherwise very dry continent.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Mountain systems',
              'Fold mountains of the Alpine system run in two belts: the Circum-Pacific belt including the Rockies and Andes, and the Alpine-Himalayan belt running from the Atlas through the Alps and Caucasus to the Himalaya. Older, worn-down ranges — the Appalachians, the Urals, the Aravalli, the Great Dividing Range — belong to earlier orogenies and are much lower.',
            ],
            [
              'Volcanic peaks worth naming',
              'Mount Kilimanjaro in Tanzania is the highest point in Africa and a dormant volcano. Mount Fuji in Japan, Mount Vesuvius and Mount Etna in Italy, Krakatoa and Mount Merapi in Indonesia, Popocatépetl in Mexico and Mauna Loa in Hawaii all recur in questions. Ojos del Salado on the Chile–Argentina border is the highest volcano in the world.',
            ],
            [
              'The Great Lakes',
              'Superior, Michigan, Huron, Erie and Ontario — remembered by the mnemonic HOMES. All lie on the United States–Canada border except Michigan, which is wholly within the United States. Niagara Falls lies between Erie and Ontario.',
            ],
            [
              'Seas without coasts and lakes without outlets',
              'The Sargasso Sea in the Atlantic has no land boundary at all, being defined by currents. The Aral Sea has shrunk dramatically because its feeder rivers were diverted for cotton irrigation — the standard example of human-caused desiccation.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'biomes',
      heading: 'Deserts and grasslands',
      eyebrow: 'Names that differ by region',
      intro:
        'The world\'s temperate grasslands are the same biome under seven different local names, and exams test the names. Deserts are tested by continent and by cause.',
      blocks: [
        {
          type: 'table',
          caption: 'Temperate grasslands and their local names',
          head: ['Local name', 'Region', 'What it is used for'],
          rows: [
            ['Prairies', 'Interior North America', 'The wheat belt of the United States and Canada.'],
            ['Pampas', 'Argentina and Uruguay', 'Cattle ranching and wheat; the estancia system.'],
            ['Steppes', 'Ukraine and Central Asia', 'Chernozem soils and grain; historically the corridor of nomadic movement.'],
            ['Veld', 'South Africa', 'Maize and cattle on the high plateau.'],
            ['Downs', 'Australia', 'Wheat and, above all, sheep for wool.'],
            ['Canterbury', 'New Zealand, South Island', 'Sheep rearing for both wool and meat.'],
            ['Puszta', 'Hungary', 'The small European grassland, used for grain and horses.'],
          ],
        },
        {
          type: 'table',
          caption: 'Major deserts',
          head: ['Desert', 'Location', 'Why it is dry'],
          rows: [
            ['Sahara', 'North Africa', 'Subtropical high-pressure belt; the largest hot desert in the world.'],
            ['Arabian', 'South-west Asia', 'The same pressure belt, with the Rub\' al Khali as its empty core.'],
            ['Gobi', 'Mongolia and northern China', 'Continental interior, far from any ocean, and in the rain shadow of the Himalaya — a cold desert.'],
            ['Kalahari', 'Southern Africa', 'Subtropical high pressure, with the Namib on the coast beside it.'],
            ['Atacama', 'Northern Chile', 'Descending subtropical air plus the cold Peru current plus the Andes barrier — the driest non-polar desert.'],
            ['Great Victoria', 'Western and South Australia', 'Subtropical high pressure over a low, flat continent.'],
            ['Patagonian', 'Southern Argentina', 'Rain shadow east of the Andes, in the belt of the westerlies.'],
          ],
        },
        {
          type: 'note',
          title: 'The tropical grassland names',
          text:
            'Savanna is the general term; regionally it is called llanos in the Orinoco basin of Venezuela and Colombia, campos in the Brazilian highlands, and simply savanna across the Sudan belt of Africa and northern Australia. The Serengeti and the Masai Mara are savannas, which is why the great herbivore migrations happen there.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'chokepoints',
      heading: 'Straits, canals and boundary lines',
      eyebrow: 'Chokepoints and boundaries',
      intro:
        'These three lists are the most reliably examined content in world geography, because each item is a single unambiguous pairing and each has strategic significance that keeps it in the news.',
      blocks: [
        {
          type: 'table',
          caption: 'Straits and what they separate',
          head: ['Strait', 'Separates', 'Connects'],
          rows: [
            ['Strait of Malacca', 'The Malay Peninsula from Sumatra', 'Andaman Sea with the South China Sea — the busiest shipping lane in Asia.'],
            ['Strait of Hormuz', 'Iran from Oman and the UAE', 'Persian Gulf with the Gulf of Oman — the chokepoint for much of the world\'s oil.'],
            ['Bab-el-Mandeb', 'Yemen from Djibouti and Eritrea', 'Red Sea with the Gulf of Aden, and so the southern gate to the Suez route.'],
            ['Strait of Gibraltar', 'Spain from Morocco', 'Mediterranean Sea with the Atlantic Ocean.'],
            ['Bering Strait', 'Russia from Alaska', 'Arctic Ocean with the Pacific — also the boundary between Asia and North America.'],
            ['Palk Strait', 'India from Sri Lanka', 'Bay of Bengal with the Gulf of Mannar.'],
            ['Strait of Dover', 'England from France', 'English Channel with the North Sea.'],
            ['Bosphorus', 'European from Asian Turkey', 'Black Sea with the Sea of Marmara, and through the Dardanelles to the Mediterranean.'],
            ['Strait of Magellan', 'Mainland South America from Tierra del Fuego', 'Atlantic with the Pacific, south of the continent.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Suez Canal',
              'Opened in 1869, linking the Mediterranean with the Red Sea across Egypt. It has no locks, because the two seas are at nearly the same level. It cuts thousands of kilometres off the Europe-to-Asia voyage around Africa, and its nationalisation by Egypt in 1956 caused the Suez Crisis.',
            ],
            [
              'Panama Canal',
              'Opened in 1914, linking the Atlantic with the Pacific across the isthmus of Panama. It does have locks, because it must lift ships over higher ground and through Gatun Lake. Control passed from the United States to Panama at the end of 1999.',
            ],
            [
              'Kiel and other canals',
              'The Kiel Canal in Germany links the North Sea with the Baltic. The Grand Canal of China, the longest artificial waterway in the world, links Beijing with Hangzhou and dates from imperial times.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Boundary lines between countries',
          head: ['Line', 'Between', 'Background'],
          rows: [
            ['Radcliffe Line', 'India and Pakistan', 'Drawn by Cyril Radcliffe in 1947 at Partition; it also defined the border with what became Bangladesh.'],
            ['McMahon Line', 'India and China in the east', 'Agreed at the Simla Convention of 1914; China does not accept it.'],
            ['Durand Line', 'Afghanistan and Pakistan', 'Drawn in 1893 between British India and Afghanistan; Afghanistan has never accepted it.'],
            ['38th parallel', 'North and South Korea', 'The line of division after 1945; the present armistice line runs near but not exactly along it.'],
            ['49th parallel', 'United States and Canada', 'The long straight western section of the border.'],
            ['17th parallel', 'North and South Vietnam', 'The line of division from 1954 until reunification in 1976.'],
            ['Oder–Neisse Line', 'Germany and Poland', 'Fixed after the Second World War along the two rivers.'],
            ['Maginot Line', 'France facing Germany', 'A defensive fortification of the 1930s, outflanked in 1940 — asked as a distractor.'],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'resources',
      heading: 'World resources',
      eyebrow: 'Where the minerals and crops are',
      intro:
        'This is the one section where the answer can change between exam cycles, so it is written as geography rather than as a league table: learn why a region produces something, and check the current rank separately.',
      blocks: [
        {
          type: 'table',
          caption: 'Resources and the regions that hold them',
          head: ['Resource', 'Principal regions', 'Geographical reason'],
          rows: [
            ['Crude oil', 'The Persian Gulf, Russia and western Siberia, the United States shale basins, Venezuela', 'Ancient marine sedimentary basins with the right trap structures.'],
            ['Natural gas', 'Russia, Iran, Qatar, the United States', 'Often the same basins as oil; Qatar\'s North Field is the largest single gas field.'],
            ['Coal', 'China, the United States, India, Australia, Russia', 'Carboniferous and Gondwana coal measures.'],
            ['Iron ore', 'Australia\'s Pilbara, Brazil\'s Carajás and Minas Gerais, China, India', 'Ancient banded iron formations in stable shield rock.'],
            ['Copper', 'Chile, Peru, the Democratic Republic of the Congo', 'The Andean porphyry belt and the Central African copperbelt.'],
            ['Gold and diamonds', 'South Africa, Russia, Australia, Botswana', 'The Witwatersrand basin for gold; kimberlite pipes for diamonds.'],
            ['Rubber', 'Thailand, Indonesia, Vietnam, Malaysia', 'Hot, wet equatorial lowlands, though the tree is native to Amazonia.'],
            ['Coffee and cocoa', 'Brazil and Vietnam for coffee; Côte d\'Ivoire and Ghana for cocoa', 'Tropical uplands for coffee, hot humid lowlands for cocoa.'],
          ],
        },
        {
          type: 'note',
          title: 'Which of these to memorise',
          text:
            'The regions and the reasons are stable; the ranks are not. Whether Australia or Brazil leads iron-ore exports, or China or the United States leads a given output, moves year to year, and general-awareness papers usually take the figure from a report released in that cycle. Learn the belt, know the two or three contenders, and take the current rank from the news rather than from notes.',
        },
        {
          type: 'defs',
          items: [
            [
              'OPEC and OPEC+',
              'The Organization of the Petroleum Exporting Countries, founded in 1960 with headquarters in Vienna, coordinates production among major oil exporters. OPEC+ adds non-member producers, Russia most importantly. Membership changes — states have joined and left — so the current list is a current-affairs item.',
            ],
            [
              'Industrial regions',
              'The Ruhr in Germany, built on coal; the Great Lakes belt of the United States, built on iron ore moved by water; the Kanto and Kansai belts of Japan, built on imported raw materials and coastal sites; and the eastern seaboard of China, built on ports and labour. The common thread is cheap bulk transport.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'population',
      heading: 'Population geography',
      eyebrow: 'Density, transition and migration',
      intro:
        'A small but consistently examined block, and one that overlaps with the economy syllabus. The concepts are stable even though the numbers are not.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Density and distribution',
              'Population density is people per square kilometre. Distribution is very uneven: the great concentrations are East Asia, South Asia, Europe and the north-eastern United States, all lowland areas with fertile soil, water and a moderate climate. Deserts, dense forest, high mountains and polar regions are sparsely settled.',
            ],
            [
              'Demographic transition',
              'A four-stage model. Stage one has high birth and death rates and slow growth. Stage two has falling death rates but still-high birth rates, so growth is fastest — where much of sub-Saharan Africa now sits. Stage three has falling birth rates and slowing growth, where India largely sits. Stage four has both rates low and population near stability, as in Europe and Japan. A fifth stage of decline is sometimes added.',
            ],
            [
              'Growth measures',
              'The birth rate and death rate are per thousand population per year; the natural growth rate is the difference. The total fertility rate is the average number of children per woman, and roughly 2.1 is the replacement level. The sex ratio in India is expressed as females per thousand males, which is the reverse of the usual international convention.',
            ],
            [
              'Migration',
              'Push factors drive people out — unemployment, conflict, disaster, land shortage. Pull factors draw them in — jobs, education, safety, services. Migration may be internal or international, and its effects are asked from both ends: remittances and labour shortage at the source, and pressure on housing and services at the destination.',
            ],
            [
              'Urbanisation',
              'A megacity is conventionally a city of more than ten million. More than half the world\'s population now lives in urban areas, and almost all future urban growth is expected in Asia and Africa. The consequences examined are slum growth, the urban heat island effect and the strain on water supply and waste disposal.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Population figures move',
          text:
            'Country population totals, the ranking of the most populous states and the world total are all estimates revised continuously by the United Nations Population Division and by national statistical offices. India passed China as the most populous country according to UN estimates in 2023. Learn the concepts here, and take any specific figure from the current release.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'regions',
      heading: 'Regions in the news',
      eyebrow: 'Places worth locating on a map',
      intro:
        'Modern papers increasingly ask a geography question about a place that has been in the news. You cannot predict the place, but you can make sure you can locate the regions that recur.',
      blocks: [
        {
          type: 'table',
          caption: 'Regions that keep appearing',
          head: ['Region', 'Where it is', 'Why it recurs'],
          rows: [
            ['The Sahel', 'The semi-arid belt across Africa south of the Sahara', 'Desertification, drought and recurrent political instability.'],
            ['The Horn of Africa', 'Somalia, Ethiopia, Eritrea and Djibouti', 'Shipping through Bab-el-Mandeb, and the Grand Ethiopian Renaissance Dam on the Blue Nile.'],
            ['The South China Sea', 'Between China, Vietnam, the Philippines, Malaysia and Brunei', 'Overlapping maritime claims around the Spratly and Paracel islands, and a large share of world trade.'],
            ['The Arctic', 'The Arctic Ocean and its bordering states', 'Sea-ice retreat, new shipping routes and seabed resource claims.'],
            ['Central Asia', 'Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan, Tajikistan', 'Landlocked, resource-rich, and the corridor for pipeline and connectivity projects.'],
            ['The Indo-Pacific', 'The Indian and western Pacific oceans as one strategic space', 'The framing behind naval cooperation and trade-route security discussions.'],
            ['The Amazon basin', 'Brazil, Peru, Colombia and neighbours', 'Deforestation, indigenous rights and the carbon sink argument.'],
            ['The Arabian Peninsula', 'Saudi Arabia, UAE, Qatar, Oman, Kuwait, Bahrain, Yemen', 'Oil and gas, the Hormuz chokepoint, and Indian migrant labour and remittances.'],
          ],
        },
        {
          type: 'note',
          title: 'How to prepare this section',
          text:
            'Do not try to learn it as content. Keep a world outline map, and every time a place appears in the news, mark it and note which sea, river or range it sits on. Six months of that habit covers this section better than any list could, and it is exactly the skill the map-based questions test.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Which strait would a tanker leaving the Persian Gulf pass through first?',
      steps: [
        'The Persian Gulf has a single sea outlet at its south-eastern end.',
        'That outlet is the Strait of Hormuz, between Iran to the north and Oman and the UAE to the south.',
        'It opens into the Gulf of Oman and thence the Arabian Sea; Bab-el-Mandeb comes only if the ship then heads for the Red Sea.',
      ],
      answer: 'The Strait of Hormuz.',
    },
    {
      q: 'Why does the Suez Canal have no locks while the Panama Canal does?',
      steps: [
        'Locks exist to raise or lower ships between water bodies at different levels.',
        'The Mediterranean and the Red Sea are at nearly the same level, and the terrain between them is low, so the Suez Canal is a sea-level cut.',
        'Panama had to cross higher ground and use Gatun Lake, so ships must be lifted and lowered again.',
      ],
      answer: 'Suez is at sea level throughout; Panama must lift ships over the isthmus.',
    },
    {
      q: 'Which river passes the most national capitals, and name three of them?',
      steps: [
        'Rank rivers by the number of capitals on their banks rather than by length.',
        'The Danube runs south-east across central Europe through several capital cities.',
        'Vienna, Budapest, Belgrade and Bratislava all stand on it.',
      ],
      answer: 'The Danube — Vienna, Budapest and Belgrade among others.',
    },
    {
      q: 'Name the temperate grasslands of Argentina, South Africa and Australia.',
      steps: [
        'All three are the same biome under different regional names.',
        'Argentina calls them the Pampas; South Africa calls them the Veld.',
        'Australia calls them the Downs, and New Zealand the Canterbury grasslands.',
      ],
      answer: 'Pampas, Veld and Downs respectively.',
    },
    {
      q: 'Is the Sahara or Antarctica the largest desert in the world?',
      steps: [
        'A desert is defined by low precipitation, not by heat or sand.',
        'Antarctica receives extremely little precipitation and covers about 14 million sq km, larger than the Sahara.',
        'The Sahara is therefore the largest hot desert, and Antarctica the largest desert overall.',
      ],
      answer: 'Antarctica overall; the Sahara among hot deserts. Read the wording of the question.',
    },
    {
      q: 'Which line divides North and South Korea, and which divides the United States from Canada?',
      steps: [
        'Korea was divided along a line of latitude after the Second World War.',
        'That line is the 38th parallel, though the present armistice line runs near rather than exactly along it.',
        'The long straight western section of the United States–Canada border is the 49th parallel.',
      ],
      answer: 'The 38th parallel and the 49th parallel respectively.',
    },
    {
      q: 'Why is the Aral Sea used as a standard example in geography papers?',
      steps: [
        'It was once among the largest inland water bodies in the world.',
        'Its two feeder rivers, the Amu Darya and the Syr Darya, were heavily diverted for cotton irrigation in Soviet Central Asia.',
        'With inflow cut, evaporation shrank the lake drastically, leaving salt flats, a collapsed fishery and a changed local climate.',
      ],
      answer: 'It is the clearest case of human water diversion destroying a large water body.',
    },
    {
      q: 'A country is in stage two of the demographic transition. What is happening to it?',
      steps: [
        'Stage two follows improvements in food supply, sanitation and medicine.',
        'Death rates fall sharply while birth rates remain high, because social norms change more slowly than mortality.',
        'The gap between the two is at its widest, so population grows fastest at this stage.',
      ],
      answer: 'Death rates have fallen, birth rates have not, and growth is at its most rapid.',
    },
  ],

  practice: [
    {
      q: 'The Strait of Malacca lies between the Malay Peninsula and:',
      options: ['Java', 'Borneo', 'Sumatra', 'Sulawesi'],
      answer: 2,
      explain: 'It connects the Andaman Sea with the South China Sea and is the busiest shipping lane in Asia.',
    },
    {
      q: 'The largest freshwater lake in the world by surface area is:',
      options: ['Lake Superior', 'Lake Baikal', 'Lake Victoria', 'Caspian Sea'],
      answer: 0,
      explain: 'Superior leads by area. Baikal is deepest and holds the largest volume; the Caspian is the largest lake overall but is saline.',
    },
    {
      q: 'The Panama Canal connects the Atlantic Ocean with the:',
      options: ['Caribbean Sea', 'Gulf of Mexico', 'Southern Ocean', 'Pacific Ocean'],
      answer: 3,
      explain: 'It crosses the isthmus of Panama, using locks and Gatun Lake to lift ships over the higher ground.',
    },
    {
      q: 'The temperate grasslands of Ukraine and Central Asia are called:',
      options: ['Pampas', 'Steppes', 'Prairies', 'Veld'],
      answer: 1,
      explain: 'The steppes lie on chernozem soil and form one of the world\'s major grain belts.',
    },
    {
      q: 'The driest non-polar desert in the world is the:',
      options: ['Sahara', 'Gobi', 'Atacama', 'Kalahari'],
      answer: 2,
      explain: 'The Atacama is dried by descending subtropical air, the cold Peru current and the Andes rain shadow together.',
    },
    {
      q: 'The McMahon Line is the boundary between:',
      options: ['India and China', 'India and Pakistan', 'Afghanistan and Pakistan', 'China and Myanmar'],
      answer: 0,
      explain: 'It was agreed at the Simla Convention of 1914 and marks the eastern India–China boundary, which China does not accept.',
    },
    {
      q: 'Which continent is crossed by the equator, both tropics and the Prime Meridian?',
      options: ['South America', 'Asia', 'Australia', 'Africa'],
      answer: 3,
      explain: 'Africa is the only continent through which all four of these lines pass.',
    },
    {
      q: 'The highest waterfall in the world is located in:',
      options: ['Brazil', 'Venezuela', 'Zambia', 'Norway'],
      answer: 1,
      explain: 'Angel Falls in Venezuela. Victoria Falls is on the Zambia–Zimbabwe border and Iguazu on the Brazil–Argentina border.',
    },
    {
      q: 'The Bosphorus strait separates:',
      options: ['European from Asian Turkey', 'Spain from Morocco', 'Russia from Alaska', 'England from France'],
      answer: 0,
      explain: 'It links the Black Sea with the Sea of Marmara and, through the Dardanelles, with the Mediterranean.',
    },
    {
      q: 'The Great Lake that lies entirely within the United States is:',
      options: ['Superior', 'Huron', 'Michigan', 'Erie'],
      answer: 2,
      explain: 'The other four Great Lakes are shared with Canada.',
    },
    {
      q: 'The longest mountain range on land is the:',
      options: ['Himalaya', 'Rockies', 'Great Dividing Range', 'Andes'],
      answer: 3,
      explain: 'The Andes run about 7,000 km down the western edge of South America. The longest range overall is the submarine mid-ocean ridge.',
    },
    {
      q: 'OPEC has its headquarters in:',
      options: ['Vienna', 'Riyadh', 'Geneva', 'Doha'],
      answer: 0,
      explain: 'The Organization of the Petroleum Exporting Countries was founded in 1960 and is headquartered in Vienna.',
    },
    {
      q: 'The Sahel region lies immediately to the south of the:',
      options: ['Kalahari', 'Namib', 'Sahara', 'Arabian desert'],
      answer: 2,
      explain: 'It is the semi-arid transition belt between the Sahara and the savanna, and the classic case of desertification.',
    },
    {
      q: 'In the demographic transition model, population grows fastest in:',
      options: ['Stage one', 'Stage two', 'Stage three', 'Stage four'],
      answer: 1,
      explain: 'Death rates have fallen while birth rates remain high, so the gap between them — and therefore growth — is widest.',
    },
    {
      q: 'The Aral Sea shrank chiefly because:',
      options: ['Its feeder rivers were diverted for irrigation', 'Sea level fell globally', 'An earthquake changed its basin', 'Rainfall in the region ceased'],
      answer: 0,
      explain: 'The Amu Darya and Syr Darya were diverted for cotton cultivation, cutting inflow while evaporation continued.',
    },
    {
      q: 'Mount Kilimanjaro, the highest point in Africa, is located in:',
      options: ['Kenya', 'Ethiopia', 'Uganda', 'Tanzania'],
      answer: 3,
      explain: 'It is a dormant volcano in northern Tanzania, close to the Kenyan border.',
    },
  ],

  faqs: [
    {
      q: 'How much world geography does an Indian competitive exam actually ask?',
      a: 'Less than candidates fear. Two to four questions in UPSC Prelims, two to three in SSC and RRB papers, and one or two in banking general awareness. But the questions are narrow and predictable — straits, canals, superlatives, boundary lines and the location of a place in the news — so a short focused effort here scores well.',
    },
    {
      q: 'Which is the longest river in the world, the Nile or the Amazon?',
      a: 'It is genuinely contested. The Nile is conventionally given as longest at about 6,650 km, and that is the answer most Indian exams expect. Some surveys of the Amazon\'s Peruvian headwaters make it longer. What is not disputed is that the Amazon is by far the largest river by volume of discharge.',
    },
    {
      q: 'Is Antarctica really a desert?',
      a: 'Yes. A desert is defined by precipitation rather than by temperature, and the Antarctic interior receives very little. It is therefore the largest desert on earth, with the Sahara the largest hot desert. Exams ask both versions, so read whether the question says "desert" or "hot desert".',
    },
    {
      q: 'Why do so many questions concern straits?',
      a: 'Because straits are chokepoints where geography meets trade and security. A very large share of world oil passes Hormuz and a very large share of Asian container traffic passes Malacca, so any disruption at either is news, and news is where general-awareness questions come from.',
    },
    {
      q: 'How should I remember the boundary lines?',
      a: 'Split them into two groups. The lines named after people — Radcliffe, McMahon, Durand — were drawn by colonial officials and are all in South Asia. The lines named after numbers are parallels of latitude used to divide countries after wars: 38th for Korea, 17th for Vietnam, 49th for the United States and Canada.',
    },
    {
      q: 'Which world geography facts change between exam cycles?',
      a: 'Production and export rankings for oil, iron ore, coffee and most crops; country population totals and the world total; OPEC membership; and anything derived from an annual report. The physical geography — straits, ranges, rivers, deserts — does not change at all, so put your memorising effort there.',
    },
    {
      q: 'Do I need to learn country capitals and currencies?',
      a: 'For banking, SSC and railway general-awareness papers, yes — they are asked directly, most often for countries that have been in the news. For UPSC, they are rarely asked on their own. A practical approach is to learn the capital and currency of any country as it appears in your current-affairs reading, rather than working through a global list.',
    },
    {
      q: 'What is the single best way to prepare world geography?',
      a: 'Keep a blank world outline map and mark every place you meet, in this material and in the news, with the sea, river or range it sits on. Map-based questions are the format that is growing, and the habit converts current affairs into geography preparation at no extra cost.',
    },
    {
      q: 'How high is Mount Everest?',
      a: 'Nepal and China jointly announced a revised height of 8,848.86 m in December 2020. Older sources give 8,848 m, and both appear in question papers. If an option list offers 8,848.86 m, that is the current official figure.',
    },
    {
      q: 'Should I study world geography before or after Indian geography?',
      a: 'After. Physical geography supplies the concepts, Indian geography carries far more marks and uses those concepts most heavily, and world geography is largely a set of pairings that can be revised quickly once the underlying physical ideas are in place.',
    },
  ],

  related: [
    { label: 'Physical Geography', to: '/study-material/geography/physical-geography/' },
    { label: 'Indian Geography', to: '/study-material/geography/indian-geography/' },
    { label: 'Environment', to: '/study-material/environment/' },
    { label: 'General Knowledge', to: '/study-material/general-knowledge/' },
    { label: 'All Geography', to: '/study-material/geography/' },
  ],
}
