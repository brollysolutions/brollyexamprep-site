/**
 * Indian Geography — /study-material/geography/indian-geography/
 *
 * Physical geography applied to one country. Deliberately ordered as cause
 * before effect: relief explains drainage, relief and latitude together explain
 * the monsoon, and the monsoon explains the soils, crops and industry that
 * follow. Figures that move between census and survey cycles are flagged
 * rather than presented as fixed.
 */
export default {
  subject: 'geography',
  subjectName: 'Geography',
  slug: 'indian-geography',
  title: 'Indian Geography',
  seoTitle: 'Indian Geography for Competitive Exams | Relief, Rivers, Monsoon & Practice',
  metaDescription:
    'Complete Indian geography study material for UPSC, SSC, state PSC and railway exams — location and extent, physical divisions, the drainage system.',
  readMinutes: 27,
  lead: [
    'Indian geography is the highest-yield single block in general studies, because it is asked by every exam from RRB Group D to UPSC Prelims and because most of it is stable — the ranges, rivers and passes do not move between exam cycles.',
    'The order here is deliberate. Relief comes first because it determines drainage; relief and latitude together explain the monsoon; and the monsoon explains the soils, the crops and much of where industry sits. Read it as a chain of causes and you will remember far more than a list of names would give you. Where a figure genuinely changes — census totals, forest cover, tiger reserve counts — it is marked so you know to check the current release.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '4–6 questions', note: 'Often map-based or linked to environment and current affairs.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–5 questions', note: 'The largest geography share of any general awareness paper — rivers, passes, soils, crops.' },
    { exam: 'State PSC Prelims', count: '5–8 questions', note: 'Including a dedicated block on the state\'s own geography.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'Direct recall — longest river, highest peak, which state borders which.' },
    { exam: 'NDA / CDS General Ability', count: '3–5 questions', note: 'Physical divisions, drainage and strategic borders.' },
  ],

  contents: [
    { icon: 'globe', title: 'Location and extent', sub: 'Where India sits and why it matters', href: '#extent' },
    { icon: 'layers', title: 'Physical divisions', sub: 'Six regions from Himalaya to islands', href: '#relief' },
    { icon: 'refresh', title: 'Drainage system', sub: 'Himalayan and peninsular rivers', href: '#drainage' },
    { icon: 'bell', title: 'Climate and the monsoon', sub: 'Four seasons and the rain they bring', href: '#climate' },
    { icon: 'book', title: 'Soils and vegetation', sub: 'Eight soil types, five forest types', href: '#soils' },
    { icon: 'target', title: 'Agriculture', sub: 'Cropping seasons and leading producers', href: '#agriculture' },
    { icon: 'chart', title: 'Minerals and energy', sub: 'Where the resources are', href: '#resources' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'extent',
      heading: 'Location and extent',
      eyebrow: 'Where India sits and why it matters',
      intro:
        'The numbers in this section are among the most directly asked in the whole subject, and each of them has a consequence that examiners like to test.',
      blocks: [
        {
          type: 'table',
          caption: 'The figures to know',
          head: ['Measure', 'Value', 'Why it is asked'],
          rows: [
            ['Area', 'About 3.28 million sq km, roughly 2.4% of the world\'s land area', 'Seventh largest country in the world, after Russia, Canada, the USA, China, Brazil and Australia.'],
            ['Latitudinal extent', 'About 8°4′ N to 37°6′ N (mainland)', 'Spans the tropics and the sub-tropics, which is why the south is tropical all year and the north has a real winter.'],
            ['Longitudinal extent', 'About 68°7′ E to 97°25′ E', 'Nearly 30° of longitude means about two hours of real solar-time difference between Gujarat and Arunachal Pradesh, yet one standard time is kept.'],
            ['Standard meridian', '82°30′ E, passing near Mirzapur', 'Gives Indian Standard Time as GMT + 5:30.'],
            ['Coastline', 'About 7,517 km including the island groups; the mainland coast is about 6,100 km', 'Gujarat has the longest coastline of any state.'],
            ['Land frontier', 'About 15,100 km', 'Shared with Pakistan, Afghanistan, China, Nepal, Bhutan, Myanmar and Bangladesh — Bangladesh is the longest.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Tropic of Cancer',
              'At 23½° N it cuts India almost in half and passes through eight states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram. Learn them west to east — that order is how the question is usually framed.',
            ],
            [
              'Extreme points',
              'The northernmost point of the Indian claim is in the Ladakh region; Kibithu in Arunachal Pradesh is the easternmost inhabited point and Guhar Moti in Gujarat the westernmost. Kanyakumari is the southernmost point of the mainland, but the southernmost point of India is Indira Point on Great Nicobar.',
            ],
            [
              'Boundary lines',
              'The Radcliffe Line separates India from Pakistan and, as drawn in 1947, from what is now Bangladesh. The Line of Control divides Indian- and Pakistani-administered Kashmir. The McMahon Line is the boundary with China in the east, which China does not accept. The Durand Line lies between Afghanistan and Pakistan and is asked as a distractor.',
            ],
            [
              'Administrative units',
              'India is a Union of 28 states and 8 union territories. Rajasthan is the largest state by area and Goa the smallest; by population the largest is Uttar Pradesh and the smallest Sikkim. Population figures come from the 2011 Census — the next census was postponed and is still awaited, so any per-state population figure you quote should be checked against the latest official release.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'relief',
      heading: 'Physical divisions',
      eyebrow: 'Six regions from Himalaya to islands',
      intro:
        'India is conventionally divided into six physiographic regions. Every subsequent section — drainage, climate, soils, crops — is easier once you can place these six.',
      blocks: [
        {
          type: 'table',
          caption: 'The six divisions',
          head: ['Division', 'Composition', 'Distinctive feature'],
          rows: [
            ['The Himalaya', 'Three parallel ranges: Himadri or Greater Himalaya, Himachal or Lesser Himalaya, and the Shiwaliks in the south', 'Young fold mountains formed by the collision of the Indian and Eurasian plates, and still rising. The Shiwaliks are the youngest and lowest.'],
            ['The Northern Plains', 'Alluvium deposited by the Indus, Ganga and Brahmaputra systems', 'Divided into bhabar, terai, bhangar (older alluvium) and khadar (newer alluvium). The most densely populated and agriculturally productive region.'],
            ['The Peninsular Plateau', 'The Deccan plateau, the Central Highlands, and the Western and Eastern Ghats', 'The oldest and most stable landmass in India, made of ancient crystalline rock and rich in minerals.'],
            ['The Indian Desert', 'The Thar, west of the Aravalli in Rajasthan', 'Arid because it lies parallel to the Arabian Sea branch of the monsoon rather than across it. The Luni is its only significant river.'],
            ['The Coastal Plains', 'The western coast from Gujarat to Kerala and the eastern from West Bengal to Tamil Nadu', 'The western plain is narrow with lagoons and no deltas; the eastern is broad, with the deltas of the Mahanadi, Godavari, Krishna and Kaveri.'],
            ['The Islands', 'The Andaman and Nicobar group in the Bay of Bengal and Lakshadweep in the Arabian Sea', 'The Andamans are the tops of a submerged mountain range and include India\'s only active volcano, Barren Island. Lakshadweep is coral.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Western versus Eastern Ghats',
              'The Western Ghats are continuous, higher and broken only at gaps such as the Palghat gap; they intercept the monsoon and are a global biodiversity hotspot. The Eastern Ghats are discontinuous, lower, and cut through by the peninsular rivers. Anaimudi in Kerala, at about 2,695 m, is the highest peak in peninsular India; Doddabetta is the highest in the Nilgiris.',
            ],
            [
              'Aravalli',
              'One of the oldest fold mountain systems in the world, now heavily eroded, running north-east across Rajasthan. Guru Shikhar on Mount Abu is its highest point. Its age and its role as a barrier holding back the Thar are both examined.',
            ],
            [
              'Himalayan passes',
              'Nathu La and Jelep La in Sikkim, Bomdi La and Bum La in Arunachal Pradesh, Zoji La linking Srinagar with Leh, Rohtang and Shipki La in Himachal Pradesh, Khardung La and Chang La in Ladakh, and Lipulekh, Mana and Niti in Uttarakhand. Match the pass to the state — that is the standard question.',
            ],
            [
              'Peaks',
              'Kanchenjunga on the Sikkim–Nepal border, at about 8,586 m, is the highest peak lying within India and the third highest in the world. K2 at about 8,611 m stands in the disputed Gilgit-Baltistan region. Nanda Devi in Uttarakhand is the highest peak entirely within Indian territory as internationally recognised without dispute.',
            ],
            [
              'The Purvanchal',
              'The eastern extension of the Himalaya into the north-east — the Patkai Bum, Naga Hills, Manipur Hills and Mizo Hills. Lower than the main range but heavily forested and strategically important.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'drainage',
      heading: 'Drainage system',
      eyebrow: 'Himalayan and peninsular rivers',
      intro:
        'Indian rivers split into two families with opposite characters, and the contrast between them is itself a common question.',
      blocks: [
        {
          type: 'table',
          caption: 'The two river families compared',
          head: ['Characteristic', 'Himalayan rivers', 'Peninsular rivers'],
          rows: [
            ['Source of water', 'Snowmelt and rain, so they flow all year — perennial', 'Rain alone, so many shrink drastically in the dry season — seasonal'],
            ['Valley shape', 'Deep gorges in the mountains, then wide meandering courses on the plains', 'Shallow, broad valleys, largely graded and fixed in their courses'],
            ['Load and deltas', 'Enormous silt load; build the largest deltas', 'Much smaller load; deltas are modest and some rivers form estuaries instead'],
            ['Age and course', 'Young, still actively eroding, courses shift', 'Old and stable, with courses set long ago'],
            ['Examples', 'Indus, Ganga, Brahmaputra and their tributaries', 'Godavari, Krishna, Kaveri, Mahanadi, Narmada, Tapi'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Indus system',
              'Rises near Lake Mansarovar in Tibet. Its five Punjab tributaries are the Jhelum, Chenab, Ravi, Beas and Sutlej. Under the Indus Waters Treaty of 1960, brokered by the World Bank, India has unrestricted use of the three eastern rivers — Ravi, Beas and Sutlej — and Pakistan of the three western — Indus, Jhelum and Chenab.',
            ],
            [
              'The Ganga system',
              'Formed at Devprayag where the Bhagirathi and Alaknanda meet. The Ganga is the longest river within India at roughly 2,525 km. Left-bank tributaries — Ghaghara, Gandak, Kosi — come off the Himalaya and are flood-prone; right-bank tributaries — Yamuna, Son — come off the plateau. The Yamuna is its longest tributary. The Ganga-Brahmaputra delta, the Sundarbans, is the largest delta in the world.',
            ],
            [
              'The Brahmaputra',
              'Called the Tsangpo in Tibet, the Siang or Dihang in Arunachal Pradesh, the Brahmaputra in Assam and the Jamuna in Bangladesh. It carries a huge silt load, braids into channels around river islands — Majuli being the largest — and causes severe annual flooding in Assam.',
            ],
            [
              'The east-flowing peninsular rivers',
              'The Mahanadi, Godavari, Krishna and Kaveri all rise in the Western Ghats and cross the peninsula to the Bay of Bengal, forming deltas. The Godavari is the longest peninsular river and is called the Dakshina Ganga. The Kaveri, with its long-disputed waters shared between Karnataka and Tamil Nadu, is the most heavily used for irrigation.',
            ],
            [
              'The west-flowing exceptions',
              'The Narmada and the Tapi flow west into the Arabian Sea, through rift valleys between block-faulted highlands, which is why they form estuaries rather than deltas. The Narmada rises at Amarkantak and has the Dhuandhar falls at Jabalpur; the Sardar Sarovar dam is on it.',
            ],
            [
              'Rivers by their nicknames',
              'The Damodar was the "sorrow of Bengal" before the Damodar Valley Corporation, India\'s first multipurpose river valley project, modelled on the Tennessee Valley Authority. The Kosi is the "sorrow of Bihar" for shifting its course across the plain. The Brahmaputra is sometimes called the sorrow of Assam.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Lakes and falls',
          text:
            'Wular in Jammu and Kashmir is the largest freshwater lake in India and is tectonic in origin; Chilika in Odisha is the largest brackish-water lagoon; Vembanad in Kerala is the longest lake; Sambhar in Rajasthan is the largest saltwater lake. Kunchikal Falls in Karnataka is generally cited as the highest waterfall in India, with Jog Falls on the Sharavati the best known. Hirakud on the Mahanadi is among the longest dams in the world.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'climate',
      heading: 'Climate and the monsoon',
      eyebrow: 'Four seasons and the rain they bring',
      intro:
        'India has a tropical monsoon climate, and the monsoon is best understood as a seasonal reversal of wind driven by the differential heating of land and sea — not as a single rain event.',
      blocks: [
        {
          type: 'table',
          caption: 'The four seasons of the Indian year',
          head: ['Season', 'Months', 'What characterises it'],
          rows: [
            ['Cold weather', 'December to February', 'Clear skies, low temperatures in the north, and western disturbances from the Mediterranean bringing winter rain to the north-west that is vital for rabi wheat.'],
            ['Hot weather', 'March to May', 'Rising temperature and the low-pressure trough forming. Local storms: the Loo across north India, Kalbaisakhi in Bengal, mango showers in Kerala and Karnataka that help the coffee and mango crop.'],
            ['South-west monsoon', 'June to September', 'The main rainy season, delivering the great majority of annual rainfall. Onset over Kerala around 1 June, then a rapid advance.'],
            ['Retreating monsoon', 'October to December', 'The low-pressure trough weakens and winds reverse. The north-east monsoon brings rain to coastal Tamil Nadu, which is why Tamil Nadu\'s rainfall peak is in autumn rather than summer.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The two branches',
              'The south-west monsoon splits around the peninsula. The Arabian Sea branch strikes the Western Ghats, giving the windward slopes very heavy rain and leaving a pronounced rain shadow over the Deccan interior. The Bay of Bengal branch moves up the Ganga plain and is deflected westward by the Himalaya, which is why rainfall decreases from Kolkata towards Delhi.',
            ],
            [
              'Why the north-east receives so much',
              'The funnel shape of the Khasi Hills forces the Bay branch to rise sharply. Mawsynram and Cherrapunji in Meghalaya are among the wettest places on earth, with Mawsynram generally recorded as the wetter of the two.',
            ],
            [
              'Break in the monsoon',
              'A spell of several days or weeks with little rain during the rainy season, caused by the shifting of the monsoon trough. It matters agriculturally out of all proportion to its length, because it can arrive during a critical growth stage.',
            ],
            [
              'Factors controlling Indian climate',
              'Latitude, with the Tropic of Cancer dividing the country; altitude, which is why hill stations are cool at the same latitude; the Himalaya, which block cold Central Asian air; distance from the sea, giving continental extremes inland; and the pressure and wind systems, including the jet streams and the ENSO cycle.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Figures that move',
          text:
            'The date of monsoon onset, the seasonal rainfall total and the classification of a year as normal, deficient or excess are announced by the India Meteorological Department each year, and the long-period average against which they are judged is itself revised periodically. Quote the mechanism in an exam answer and check the current IMD figure before quoting a number.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'soils',
      heading: 'Soils and natural vegetation',
      eyebrow: 'Eight soil types, five forest types',
      intro:
        'Soil and vegetation follow directly from rainfall and relief, so this section is largely a matter of connecting what you already know rather than learning new lists.',
      blocks: [
        {
          type: 'table',
          caption: 'Major soil types of India',
          head: ['Soil', 'Where it occurs', 'Character and crops'],
          rows: [
            ['Alluvial', 'The northern plains and the coastal deltas — the most extensive soil, covering roughly 40% of the area', 'Fertile, rich in potash and lime but poor in nitrogen and humus. Supports rice, wheat and sugarcane.'],
            ['Black (regur)', 'The Deccan trap region — Maharashtra, Madhya Pradesh, Gujarat, parts of Telangana', 'Formed from weathered lava, retains moisture well and develops deep cracks when dry. The classic cotton soil.'],
            ['Red', 'The eastern and southern Deccan, weathered from crystalline rock', 'Red from iron oxide, generally poor in nitrogen and phosphorus, productive with fertiliser and irrigation.'],
            ['Laterite', 'High-rainfall areas of the Western Ghats, Odisha and the north-east', 'Heavily leached, acidic, low in fertility, and hardens on exposure so it is cut as building brick. Suits tea, coffee and cashew.'],
            ['Arid / desert', 'Rajasthan and adjoining Gujarat and Haryana', 'Sandy, saline, low in humus. Productive where irrigation reaches it, as in the Indira Gandhi canal command.'],
            ['Forest and mountain', 'The Himalayan slopes and other forested highlands', 'Varies steeply with altitude; acidic and humus-rich in the higher, cooler zones.'],
            ['Saline and alkaline', 'Parts of the plains where irrigation without drainage has raised salts', 'Locally called reh, kallar or usar; reclaimed by gypsum and by better drainage.'],
            ['Peaty and marshy', 'Kerala backwaters, coastal Odisha and West Bengal, parts of Tamil Nadu', 'Very high organic content, formed under waterlogged conditions.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Forest types by rainfall',
              'Tropical evergreen forest above about 200 cm of rain — the Western Ghats, the north-east and the Andamans. Tropical deciduous or monsoon forest between about 70 and 200 cm — the most widespread, source of teak and sal. Thorn and scrub below about 50 cm — the Thar and adjoining tracts. Montane forest, varying with altitude. And littoral or tidal forest — the mangroves, of which the Sundarbans is the largest single stretch.',
            ],
            [
              'Soil erosion and conservation',
              'Sheet erosion removes a thin layer over a wide area; gully erosion cuts channels and produces the badlands of the Chambal ravines. Conservation measures examined by name are contour ploughing, terrace farming, strip cropping, shelter belts and afforestation.',
            ],
            [
              'Forest cover',
              'The Forest Survey of India publishes the India State of Forest Report every two years, giving forest and tree cover as a percentage of geographical area. Madhya Pradesh has the largest forest area by extent while the north-eastern states have the highest percentage cover. Because the figures are revised with each report, treat the percentage as something to look up rather than memorise.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'agriculture',
      heading: 'Agriculture',
      eyebrow: 'Cropping seasons and leading producers',
      intro:
        'Agriculture questions are of two kinds: definitions of the cropping seasons and systems, which never change, and rankings of leading producer states, which shift a little from year to year. Both are covered here, with the second flagged.',
      blocks: [
        {
          type: 'table',
          caption: 'The three cropping seasons',
          head: ['Season', 'Sown and harvested', 'Principal crops'],
          rows: [
            ['Kharif', 'Sown with the onset of the monsoon in June–July, harvested September–October', 'Rice, maize, jowar, bajra, cotton, groundnut, soyabean, jute'],
            ['Rabi', 'Sown October–December, harvested April–June', 'Wheat, barley, gram, mustard, peas — dependent on winter rain and irrigation'],
            ['Zaid', 'The short summer season between rabi and kharif', 'Watermelon, muskmelon, cucumber, fodder crops and some vegetables'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Farming systems',
              'Subsistence farming produces mainly for the household. Shifting cultivation, called jhum in the north-east, clears and burns a patch and moves on. Plantation agriculture grows a single commercial crop such as tea, coffee or rubber on a large estate. Intensive farming uses high inputs on small holdings, extensive farming low inputs on large ones.',
            ],
            [
              'The Green Revolution',
              'From the mid-1960s, high-yielding varieties of wheat and rice with assured irrigation, chemical fertiliser and pesticide. M. S. Swaminathan is the name associated with it in India and Norman Borlaug internationally. It made the country self-sufficient in cereals but was concentrated in Punjab, Haryana and western Uttar Pradesh, and left a legacy of falling water tables and soil degradation there.',
            ],
            [
              'The other coloured revolutions',
              'White for milk, under Operation Flood and associated with Verghese Kurien; Blue for fish; Yellow for oilseeds; Golden for horticulture and honey; Pink for prawns and, in some usages, onions; Silver for eggs and poultry. These pairings are asked directly and are worth memorising as a set.',
            ],
            [
              'Crop requirements',
              'Rice needs high temperature, high humidity and above about 100 cm of rain, or irrigation. Wheat needs a cool growing season and bright sunshine at ripening. Tea needs well-drained sloping ground and frequent showers, which is why Assam and the Darjeeling hills suit it. Coffee needs shade and is concentrated in Karnataka. Cotton needs black soil and about 210 frost-free days.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Producer rankings change',
          text:
            'Uttar Pradesh has long led in sugarcane and wheat, West Bengal in rice and jute, Gujarat and Maharashtra in cotton, Karnataka in coffee, and Assam in tea — but the order between the top two or three states changes with the season and with the release of new agricultural statistics. Learn which states are in contention and why the geography favours them; verify the current rank from the latest Agricultural Statistics at a Glance before quoting one.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'resources',
      heading: 'Minerals and energy',
      eyebrow: 'Where the resources are',
      intro:
        'Almost all of India\'s metallic minerals come from the old crystalline rock of the peninsular plateau, which is why the mineral belt and the industrial belt largely coincide.',
      blocks: [
        {
          type: 'table',
          caption: 'Minerals and their leading regions',
          head: ['Mineral', 'Chief producing areas', 'Point usually asked'],
          rows: [
            ['Iron ore', 'Odisha, Chhattisgarh, Karnataka, Jharkhand', 'India has large reserves of good-quality haematite. Odisha generally leads output.'],
            ['Coal', 'Jharkhand, Odisha, Chhattisgarh, West Bengal', 'Most Indian coal is Gondwana coal of the Damodar valley; Neyveli in Tamil Nadu is the main lignite field.'],
            ['Bauxite', 'Odisha, Gujarat, Jharkhand, Maharashtra', 'The ore of aluminium, associated with laterite.'],
            ['Manganese', 'Odisha, Madhya Pradesh, Maharashtra, Karnataka', 'Essential to steel-making, which is why it is mined close to the iron belt.'],
            ['Mica', 'Andhra Pradesh, Rajasthan, Jharkhand', 'The Koderma belt is the best known; India is a major world source.'],
            ['Copper', 'Rajasthan (Khetri), Madhya Pradesh (Malanjkhand), Jharkhand (Singhbhum)', 'Reserves are limited, so India imports substantially.'],
            ['Petroleum', 'Mumbai High offshore, Gujarat (Ankleshwar), Assam (Digboi)', 'Digboi is the oldest oilfield; Mumbai High is the largest producer.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Conventional and non-conventional energy',
              'Conventional sources are coal, petroleum, natural gas, hydel and nuclear. Non-conventional are solar, wind, biomass, tidal and geothermal. India\'s installed renewable capacity has grown very fast and the totals are revised continuously, so treat any capacity figure as a current-affairs item.',
            ],
            [
              'Nuclear power stations',
              'Tarapur in Maharashtra was the first. Others asked by name are Rawatbhata in Rajasthan, Kalpakkam in Tamil Nadu, Narora in Uttar Pradesh, Kakrapar in Gujarat, Kaiga in Karnataka and Kudankulam in Tamil Nadu. Monazite sands of the Kerala coast are the source of thorium, on which India\'s three-stage nuclear programme depends.',
            ],
            [
              'Industrial location',
              'Iron and steel plants sit where coal, iron ore and water meet — Jamshedpur, Bhilai, Rourkela, Durgapur, Bokaro, Burnpur and Vishakhapatnam, which is the only major coastal one. Cotton textiles concentrated in Mumbai and Ahmedabad because of raw cotton, humid air and port access; jute in the Hooghly basin for the same reason.',
            ],
            [
              'Transport',
              'Indian Railways is among the largest networks in the world and runs on broad, metre and narrow gauge, with the Project Unigauge conversion nearly complete. The Golden Quadrilateral connects Delhi, Mumbai, Chennai and Kolkata by highway, with North–South and East–West corridors crossing it. Kandla was developed as the first port after Partition to replace Karachi; Mumbai is the largest.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Why does the Deccan interior receive far less rain than the Konkan coast at the same latitude?',
      steps: [
        'The Arabian Sea branch of the south-west monsoon meets the Western Ghats, which run parallel to the coast.',
        'The air is forced up the windward slope, cools, condenses and gives very heavy orographic rainfall on the Konkan side.',
        'Having crossed the ridge the air descends, warms and its relative humidity falls, so it releases little rain.',
      ],
      answer: 'The Deccan interior lies in the rain shadow of the Western Ghats.',
    },
    {
      q: 'Which are the three eastern rivers allotted to India under the Indus Waters Treaty?',
      steps: [
        'The treaty of 1960 divided the six rivers of the Indus system between the two countries.',
        'The western rivers — Indus, Jhelum and Chenab — went to Pakistan.',
        'The eastern rivers — Ravi, Beas and Sutlej — went to India for unrestricted use.',
      ],
      answer: 'Ravi, Beas and Sutlej.',
    },
    {
      q: 'Why do the Narmada and Tapi form estuaries rather than deltas?',
      steps: [
        'Both flow west through rift valleys — steep-sided troughs between block-faulted highlands.',
        'A confined, steep course means the river keeps its velocity right to the sea instead of slowing and dropping its load.',
        'With little deposition at the mouth, and with tidal action removing what is deposited, an estuary forms.',
      ],
      answer: 'Because they flow through rift valleys and reach the sea without slowing enough to deposit a delta.',
    },
    {
      q: 'Tamil Nadu\'s rainfall peaks in October and November rather than in July. Why?',
      steps: [
        'During the south-west monsoon, coastal Tamil Nadu lies in the rain shadow of the Western Ghats.',
        'From October the monsoon retreats and winds over the Bay of Bengal reverse to blow from the north-east.',
        'These north-east monsoon winds pick up moisture crossing the Bay and strike the Coromandel coast directly.',
      ],
      answer: 'It is watered mainly by the retreating or north-east monsoon.',
    },
    {
      q: 'Which soil suits cotton, and what gives it that property?',
      steps: [
        'Cotton needs a soil that holds moisture through a long growing season.',
        'Black soil, or regur, formed from the weathering of Deccan trap lava, has a high clay content and retains water well.',
        'It also cracks deeply when dry, which aerates the subsoil — self-ploughing, in the traditional description.',
      ],
      answer: 'Black or regur soil of the Deccan trap region.',
    },
    {
      q: 'Name the states through which the Tropic of Cancer passes, from west to east.',
      steps: [
        'Begin on the western coast: Gujarat, then Rajasthan.',
        'Across central India: Madhya Pradesh, Chhattisgarh, Jharkhand.',
        'Then east: West Bengal, and in the north-east Tripura and Mizoram.',
      ],
      answer: 'Eight states — Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.',
    },
    {
      q: 'Why is Mawsynram among the wettest places on earth?',
      steps: [
        'The Bay of Bengal branch of the monsoon carries very moist air northward.',
        'The Khasi Hills present a funnel-shaped opening that concentrates that air.',
        'The air is forced to rise sharply within the funnel, so condensation is intense and rainfall extreme.',
      ],
      answer: 'The funnel shape of the Khasi Hills forces sharp uplift of very moist Bay of Bengal air.',
    },
    {
      q: 'Why did the iron and steel industry concentrate in the Chota Nagpur region?',
      steps: [
        'Steel-making needs iron ore, coking coal, manganese and limestone, all bulky and expensive to move.',
        'The Chota Nagpur plateau has iron ore, Gondwana coal from the Damodar valley and manganese within a short radius.',
        'Water from the Damodar and a rail network built to serve the mines completed the requirements.',
      ],
      answer: 'Because ore, coking coal, flux and water all occur within a small area — Jamshedpur, Bokaro and Durgapur all sit in it.',
    },
  ],

  practice: [
    {
      q: 'The Tropic of Cancer passes through how many Indian states?',
      options: ['Six', 'Eight', 'Nine', 'Seven'],
      answer: 1,
      explain: 'Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.',
    },
    {
      q: 'The southernmost point of India is:',
      options: ['Kanyakumari', 'Indira Point', 'Point Calimere', 'Dhanushkodi'],
      answer: 1,
      explain: 'Indira Point on Great Nicobar is the southernmost point of India; Kanyakumari is only the southernmost point of the mainland.',
    },
    {
      q: 'The longest peninsular river of India is the:',
      options: ['Krishna', 'Mahanadi', 'Godavari', 'Kaveri'],
      answer: 2,
      explain: 'The Godavari rises at Trimbakeshwar in Maharashtra and is called the Dakshina Ganga.',
    },
    {
      q: 'Which river is known as the "sorrow of Bihar"?',
      options: ['Kosi', 'Gandak', 'Son', 'Damodar'],
      answer: 0,
      explain: 'The Kosi shifts its course dramatically across the north Bihar plain. The Damodar was the sorrow of Bengal.',
    },
    {
      q: 'Regur soil is another name for:',
      options: ['Red soil', 'Laterite soil', 'Alluvial soil', 'Black soil'],
      answer: 3,
      explain: 'Black cotton soil formed from weathered Deccan lava, moisture-retentive and crack-forming when dry.',
    },
    {
      q: 'Zoji La pass connects Srinagar with:',
      options: ['Leh', 'Shimla', 'Gangtok', 'Manali'],
      answer: 0,
      explain: 'Zoji La is on the Srinagar–Leh road. Rohtang connects Manali with the Lahaul valley.',
    },
    {
      q: 'The highest peak lying within India is:',
      options: ['Nanda Devi', 'Kamet', 'Kanchenjunga', 'Anaimudi'],
      answer: 2,
      explain: 'Kanchenjunga, on the Sikkim–Nepal border, is about 8,586 m and the third highest in the world. Anaimudi is the highest in peninsular India.',
    },
    {
      q: 'The Damodar Valley Corporation was modelled on the:',
      options: ['Hoover Dam project', 'Tennessee Valley Authority', 'Aswan High Dam project', 'Volga-Don scheme'],
      answer: 1,
      explain: 'It was India\'s first multipurpose river valley project, explicitly modelled on the American TVA.',
    },
    {
      q: 'Which crop belongs to the rabi season?',
      options: ['Wheat', 'Jute', 'Cotton', 'Bajra'],
      answer: 0,
      explain: 'Rabi crops are sown in October–December and harvested in spring. Jute, cotton and bajra are kharif crops.',
    },
    {
      q: 'The largest brackish-water lagoon in India is:',
      options: ['Wular', 'Vembanad', 'Chilika', 'Sambhar'],
      answer: 2,
      explain: 'Chilika lies on the Odisha coast. Wular is the largest freshwater lake and Sambhar the largest saltwater lake.',
    },
    {
      q: 'India\'s only active volcano is located in:',
      options: ['Lakshadweep', 'Barren Island', 'Narcondam Island', 'Great Nicobar'],
      answer: 1,
      explain: 'Barren Island in the Andaman group. Narcondam nearby is regarded as dormant.',
    },
    {
      q: 'The Western and Eastern Ghats meet at the:',
      options: ['Nilgiri Hills', 'Cardamom Hills', 'Palani Hills', 'Anaimalai Hills'],
      answer: 0,
      explain: 'The Nilgiris form the junction of the two Ghat systems; Doddabetta is their highest point.',
    },
    {
      q: 'Digboi, the site of India\'s oldest oilfield, is in:',
      options: ['Gujarat', 'Rajasthan', 'Assam', 'Andhra Pradesh'],
      answer: 2,
      explain: 'Digboi in upper Assam has been producing since the late nineteenth century. Mumbai High is now the largest producer.',
    },
    {
      q: 'The Green Revolution in India is most closely associated with:',
      options: ['Verghese Kurien', 'M. S. Swaminathan', 'Vikram Sarabhai', 'Homi Bhabha'],
      answer: 1,
      explain: 'Swaminathan led the introduction of high-yielding wheat and rice varieties. Kurien led the White Revolution in milk.',
    },
    {
      q: 'Which state has the longest coastline in India?',
      options: ['Gujarat', 'Tamil Nadu', 'Andhra Pradesh', 'Maharashtra'],
      answer: 0,
      explain: 'Gujarat\'s deeply indented coast, including the Gulfs of Kachchh and Khambhat, gives it the longest coastline of any state.',
    },
    {
      q: 'The newer alluvium of the northern plains is called:',
      options: ['Bhangar', 'Bhabar', 'Khadar', 'Terai'],
      answer: 2,
      explain: 'Khadar is the newer, more fertile flood-plain alluvium; bhangar is the older terrace alluvium above flood level.',
    },
  ],

  faqs: [
    {
      q: 'What exactly is the monsoon?',
      a: 'A seasonal reversal of wind direction, driven by the different rates at which land and sea heat and cool. In summer the landmass heats faster, a low-pressure trough forms over north-west India and moist air is drawn in from the sea; in winter the pattern reverses and dry air flows outward. The rain is a consequence of that reversal, not the definition of it.',
    },
    {
      q: 'Why does India have only one time zone across nearly thirty degrees of longitude?',
      a: 'For administrative and commercial simplicity. The 82°30′ E meridian was adopted as the standard, giving IST as GMT + 5:30. The cost is that sunrise in Arunachal Pradesh comes roughly two hours before sunrise in Gujarat while the clocks read the same, and proposals for a second zone for the north-east are periodically debated.',
    },
    {
      q: 'How do Himalayan rivers differ from peninsular rivers?',
      a: 'Himalayan rivers are fed by snowmelt as well as rain, so they flow all year; they are young, still eroding actively, carry heavy silt loads and build large deltas. Peninsular rivers depend on rain alone and shrink in the dry season, flow in shallow graded valleys fixed long ago, and carry much smaller loads. The Narmada and Tapi are further exceptions, flowing west through rift valleys into estuaries.',
    },
    {
      q: 'Which is the highest mountain peak in India?',
      a: 'Kanchenjunga, at about 8,586 m on the Sikkim–Nepal border, is the highest peak within India and the third highest in the world. K2 is higher at about 8,611 m but stands in the disputed Gilgit-Baltistan region, so exam answers usually specify Kanchenjunga. Anaimudi in Kerala is the highest in peninsular India.',
    },
    {
      q: 'What is a break in the monsoon and why does it matter?',
      a: 'A spell of several days or even weeks within the rainy season when rainfall largely stops, caused by the monsoon trough shifting position. It matters because Indian agriculture is timed to the rain, and a break arriving at a critical stage of crop growth can cut yields even in a year whose seasonal total looks normal.',
    },
    {
      q: 'Why is laterite soil poor for agriculture?',
      a: 'Heavy rainfall leaches away the soluble bases and silica, leaving mainly iron and aluminium oxides. The result is acidic, low in nitrogen and organic matter, and it hardens irreversibly on exposure — useful as building brick, difficult as farmland. It supports plantation crops such as tea, coffee and cashew rather than cereals.',
    },
    {
      q: 'Which figures in Indian geography should I not memorise?',
      a: 'Anything from a periodic survey: state population totals, which come from the 2011 Census with the next still awaited; forest and tree cover percentages, revised every two years by the Forest Survey of India; installed renewable capacity; and the ranking of leading producer states for most crops. Learn the mechanism and the contenders, and check the current figure before quoting one.',
    },
    {
      q: 'How should I revise the passes and peaks?',
      a: 'On a map, state by state, rather than as an alphabetical list. Questions almost always pair a pass with a state or with the two places it links — Zoji La with Srinagar and Leh, Nathu La with Sikkim, Rohtang with Himachal — so learning the pairing geographically is exactly what is tested.',
    },
    {
      q: 'Is Indian geography worth more marks than physical geography?',
      a: 'Yes, in most exams. SSC, RRB and state PSC papers draw the bulk of their geography from India, and even UPSC Prelims weights it heavily once environment and current-affairs overlaps are counted. Physical geography is still worth reading first, because it makes the Indian material follow logically instead of having to be learnt by rote.',
    },
    {
      q: 'How many geography questions appear in the exams?',
      a: 'Typically four to six in UPSC Prelims GS Paper 1, three to five in SSC CGL Tier 1, three to four in RRB NTPC, three to five in NDA and CDS, and five to eight in state PSC prelims, where a separate block on the state\'s own geography is usual.',
    },
  ],

  related: [
    { label: 'Physical Geography', to: '/study-material/geography/physical-geography/' },
    { label: 'World Geography', to: '/study-material/geography/world-geography/' },
    { label: 'Environment', to: '/study-material/environment/' },
    { label: 'Indian Economy', to: '/study-material/economy/' },
    { label: 'All Geography', to: '/study-material/geography/' },
  ],
}
