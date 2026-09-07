/**
 * Static GK — /study-material/general-knowledge/static-gk/
 *
 * The facts about India that do not change: national symbols, superlatives,
 * firsts, states and capitals, important days, institutions and sobriquets.
 * Deliberately confined to material that will still be true in five years.
 */
export default {
  subject: 'general-knowledge',
  subjectName: 'General Knowledge',
  slug: 'static-gk',
  title: 'Static GK',
  seoTitle: 'Static GK for Competitive Exams | Symbols, Firsts, States & Practice',
  metaDescription:
    'Complete static general knowledge study material for SSC, RRB, banking and state exams — national symbols, India\'s superlatives, firsts in India.',
  readMinutes: 22,
  lead: [
    'Static general knowledge is the cheapest block in any general awareness paper. It needs no reasoning, no calculation and no understanding — only recall — and unlike current affairs it does not go out of date. A candidate who spends three focused evenings on the tables below will answer questions that others guess at.',
    'Everything here has been chosen for being genuinely static. Where a fact is commonly believed but wrong — India has no officially declared national game, for instance — that is said. Anything that moves between exam cycles, such as current office-holders or the latest award winners, belongs to current affairs and is deliberately excluded.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '4–6 questions', note: 'Within the 25-question General Awareness section, static GK is the most predictable part.' },
    { exam: 'RRB NTPC / Group D', count: '5–8 questions', note: 'Railway papers weight static GK more heavily than any other exam family.' },
    { exam: 'Banking and insurance GA', count: '2–4 questions', note: 'Usually alongside a much larger current affairs component.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'With a substantial share drawn from the state\'s own facts.' },
    { exam: 'Defence and police exams', count: '4–6 questions', note: 'National symbols, firsts and defence institutions in particular.' },
  ],

  contents: [
    { icon: 'target', title: 'National symbols', sub: 'Flag, emblem, anthem and the rest', href: '#symbols' },
    { icon: 'chart', title: 'India\'s superlatives', sub: 'Largest, longest, highest', href: '#superlatives' },
    { icon: 'user', title: 'Firsts in India', sub: 'Who held an office first', href: '#firsts' },
    { icon: 'globe', title: 'States and capitals', sub: 'Formation and administration', href: '#states' },
    { icon: 'bell', title: 'Important days', sub: 'National and international', href: '#days' },
    { icon: 'layers', title: 'Institutions', sub: 'What is where', href: '#institutions' },
    { icon: 'book', title: 'Sobriquets', sub: 'Nicknames of places', href: '#sobriquets' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'symbols',
      heading: 'National symbols',
      eyebrow: 'Flag, emblem, anthem and the rest',
      intro:
        'A short list, asked in every general awareness paper, and one where the adoption dates matter as much as the symbols themselves.',
      blocks: [
        {
          type: 'table',
          caption: 'The national symbols of India',
          head: ['Symbol', 'What it is', 'Detail'],
          rows: [
            ['National Flag', 'The tricolour — saffron, white and green with the Ashoka Chakra', 'Adopted by the Constituent Assembly on 22 July 1947. The ratio of length to width is 3:2 and the chakra has 24 spokes. Its design is based on the flag developed by Pingali Venkayya.'],
            ['State Emblem', 'An adaptation of the Lion Capital of Ashoka at Sarnath', 'Adopted on 26 January 1950. Three of the four lions are visible; the motto Satyameva Jayate below is from the Mundaka Upanishad.'],
            ['National Anthem', 'Jana Gana Mana, written by Rabindranath Tagore', 'Adopted by the Constituent Assembly on 24 January 1950. The formal playing time is about 52 seconds.'],
            ['National Song', 'Vande Mataram, by Bankim Chandra Chattopadhyay', 'From the novel Anandamath. Given equal status with the anthem on the same date; it was first sung at the Congress session of 1896.'],
            ['National Calendar', 'The Saka calendar', 'Adopted on 22 March 1957, alongside the Gregorian calendar for official purposes. Chaitra is its first month.'],
            ['National Animal', 'The Royal Bengal Tiger', 'Adopted in 1972, replacing the lion, in connection with Project Tiger.'],
            ['National Bird', 'The Indian Peacock', 'Adopted in 1963.'],
            ['National Flower, Tree and Fruit', 'Lotus, Banyan and Mango', 'All three appear regularly as a set.'],
            ['National River and Aquatic Animal', 'The Ganga and the Gangetic dolphin', 'The dolphin was declared the national aquatic animal in 2009.'],
            ['National Heritage Animal', 'The Indian Elephant', 'Declared in 2010, in connection with Project Elephant.'],
            ['Currency symbol', 'The rupee symbol ₹', 'Designed by D. Udaya Kumar and adopted in 2010; it combines the Devanagari letter and the Roman R.'],
          ],
        },
        {
          type: 'note',
          title: 'India has no national game',
          text:
            'Hockey is very widely believed to be India\'s national game, and it is not. In response to a right to information query, the Ministry of Youth Affairs and Sports confirmed that no sport has been declared the national game of India. Questions occasionally test exactly this, so the correct answer is that none has been officially declared, whatever a general knowledge book may say.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'superlatives',
      heading: 'India\'s superlatives',
      eyebrow: 'Largest, longest, highest',
      intro:
        'A single table that answers a disproportionate share of general awareness questions. Note the qualifications — several superlatives depend on whether islands, disputed territory or brackish water are counted.',
      blocks: [
        {
          type: 'table',
          caption: 'Superlatives of India',
          head: ['Category', 'Answer', 'Qualification'],
          rows: [
            ['Largest and smallest state by area', 'Rajasthan and Goa', 'By population, Uttar Pradesh is largest and Sikkim smallest, on the 2011 Census.'],
            ['Longest river', 'The Ganga', 'About 2,525 km within India. The Godavari is the longest peninsular river.'],
            ['Highest peak', 'Kanchenjunga', 'The highest lying within India, and third highest in the world. K2 is higher but stands in disputed territory.'],
            ['Largest lake', 'Chilika, for brackish water; Wular, for fresh water', 'Vembanad is the longest lake and Sambhar the largest saltwater lake.'],
            ['Highest waterfall', 'Kunchikal Falls, Karnataka', 'Jog Falls on the Sharavati is the better known.'],
            ['Longest coastline of any state', 'Gujarat', 'Its deeply indented coast, with the Gulfs of Kachchh and Khambhat, gives it the lead.'],
            ['Wettest place', 'Mawsynram, Meghalaya', 'Cherrapunji nearby is the traditional answer; Mawsynram generally records higher rainfall.'],
            ['Largest desert', 'The Thar', 'In Rajasthan, west of the Aravalli.'],
            ['Longest dam', 'Hirakud, on the Mahanadi in Odisha', 'One of the longest earthen dams in the world.'],
            ['Tallest statue', 'The Statue of Unity, Gujarat', 'Of Sardar Vallabhbhai Patel, at 182 metres — the tallest statue in the world.'],
            ['Largest cave temple', 'The Kailasa temple at Ellora', 'Carved downward from a single rock face under the Rashtrakutas.'],
            ['Southernmost point', 'Indira Point, Great Nicobar', 'Kanyakumari is only the southernmost point of the mainland.'],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'firsts',
      heading: 'Firsts in India',
      eyebrow: 'Who held an office first',
      intro:
        'Another pure recall table, and one that overlaps with the polity and modern history syllabus.',
      blocks: [
        {
          type: 'table',
          caption: 'The first holders of office',
          head: ['Office or achievement', 'First holder', 'Note'],
          rows: [
            ['President of India', 'Dr Rajendra Prasad', 'Also the President of the Constituent Assembly, and the only President to serve two full terms.'],
            ['Prime Minister', 'Jawaharlal Nehru', 'He also held the External Affairs portfolio throughout his tenure.'],
            ['Vice-President', 'Dr S. Radhakrishnan', 'Later the second President; his birthday, 5 September, is observed as Teachers\' Day.'],
            ['Woman Prime Minister and woman President', 'Indira Gandhi and Pratibha Patil', 'Indira Gandhi took office in 1966 and Pratibha Patil in 2007.'],
            ['Chief Justice of India', 'H. J. Kania', 'The Supreme Court was inaugurated on 28 January 1950.'],
            ['Chief Election Commissioner', 'Sukumar Sen', 'He conducted the first general election of 1951–52.'],
            ['Field Marshal', 'Sam Manekshaw', 'The rank has been conferred only twice; K. M. Cariappa was the second, and the first Indian Commander-in-Chief.'],
            ['Indian in space', 'Rakesh Sharma', 'In 1984, aboard the Soviet Soyuz T-11.'],
            ['Woman IPS officer', 'Kiran Bedi', 'Joined the service in 1972.'],
            ['Woman Governor of a state', 'Sarojini Naidu', 'Governor of the United Provinces; she was also the first Indian woman President of the Congress.'],
            ['Speaker of the Lok Sabha', 'G. V. Mavalankar', 'He had earlier been Speaker of the Constituent Assembly acting as the provisional Parliament.'],
            ['Indian Nobel laureate', 'Rabindranath Tagore', 'Literature, 1913 — the first non-European to win the prize in that category.'],
            ['Bharat Ratna recipients', 'C. Rajagopalachari, S. Radhakrishnan and C. V. Raman', 'All three in 1954, the first year the award was given.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Firsts in the freedom movement',
              'The first session of the Indian National Congress was held at Bombay in 1885 with W. C. Bonnerjee as President; A. O. Hume was its founder. Badruddin Tyabji was its first Muslim President and Annie Besant its first woman President. Dadabhai Naoroji was the first Indian elected to the British House of Commons.',
            ],
            [
              'Cabinet firsts',
              'Sardar Vallabhbhai Patel was the first Home Minister and Deputy Prime Minister; B. R. Ambedkar the first Law Minister; Maulana Abul Kalam Azad the first Education Minister, whose birthday on 11 November is observed as National Education Day; and John Mathai the first Railway Minister, later Finance Minister.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'states',
      heading: 'States and capitals',
      eyebrow: 'Formation and administration',
      intro:
        'The Union of 28 states and 8 union territories, with the reorganisations that produced them. State PSC candidates should extend this section with their own state\'s districts and administrative detail.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The reorganisation of states',
              'The States Reorganisation Act of 1956, following the Fazl Ali Commission, redrew state boundaries on linguistic lines and abolished the earlier Part A, B, C and D classification through the 7th Constitutional Amendment. Andhra had already become the first state created on a linguistic basis, in 1953, after the death of Potti Sriramulu.',
            ],
            [
              'States created later',
              'Maharashtra and Gujarat separated in 1960. Nagaland became a state in 1963, Haryana in 1966, Himachal Pradesh in 1971, Manipur, Tripura and Meghalaya in 1972, Sikkim in 1975, and Mizoram, Arunachal Pradesh and Goa in 1987. Chhattisgarh, Uttarakhand and Jharkhand were created in 2000. Telangana became the twenty-ninth state on 2 June 2014, and the number fell back to twenty-eight when Jammu and Kashmir was reorganised into two union territories in 2019.',
            ],
            [
              'States with more than one capital',
              'Several states have a separate legislative or judicial capital. Himachal Pradesh has Shimla with Dharamshala as the winter capital; Maharashtra has Mumbai with Nagpur as the winter capital; Uttarakhand has Dehradun as the interim capital with Gairsain as the summer capital. Chandigarh serves as the shared capital of Punjab and Haryana while itself being a union territory.',
            ],
            [
              'Union territories',
              'Delhi and Puducherry have legislative assemblies and councils of ministers; Jammu and Kashmir also has provision for one. The others are administered directly through an Administrator or Lieutenant Governor. Daman and Diu was merged with Dadra and Nagar Haveli in 2020, and Ladakh was constituted as a separate union territory without a legislature in 2019.',
            ],
            [
              'Special constitutional provisions',
              'Article 371 and its lettered variants provide special arrangements for particular states — 371A for Nagaland, 371G for Mizoram, 371F for Sikkim among others. The Sixth Schedule governs autonomous districts in Assam, Meghalaya, Tripura and Mizoram. These are asked in both polity and general knowledge papers.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'days',
      heading: 'Important days',
      eyebrow: 'National and international',
      intro:
        'A calendar of observances, examined by asking what a given date commemorates or on what date a given day falls.',
      blocks: [
        {
          type: 'table',
          caption: 'National days',
          head: ['Date', 'Observance', 'Why'],
          rows: [
            ['12 January', 'National Youth Day', 'Birth anniversary of Swami Vivekananda.'],
            ['23 January', 'Parakram Diwas', 'Birth anniversary of Subhas Chandra Bose.'],
            ['26 January', 'Republic Day', 'The Constitution came into force in 1950; the date recalls the Purna Swaraj declaration of 1930.'],
            ['28 February', 'National Science Day', 'Commemorates the discovery of the Raman effect.'],
            ['11 May', 'National Technology Day', 'Marks the Pokhran nuclear tests of 1998.'],
            ['15 August', 'Independence Day', 'Independence in 1947.'],
            ['29 August', 'National Sports Day', 'Birth anniversary of Major Dhyan Chand.'],
            ['5 September', 'Teachers\' Day', 'Birth anniversary of Dr S. Radhakrishnan.'],
            ['14 September', 'Hindi Diwas', 'Marks the adoption of Hindi as an official language in 1949.'],
            ['2 October', 'Gandhi Jayanti', 'Also observed globally as the International Day of Non-Violence.'],
            ['31 October', 'National Unity Day', 'Birth anniversary of Sardar Vallabhbhai Patel.'],
            ['14 November', 'Children\'s Day', 'Birth anniversary of Jawaharlal Nehru.'],
            ['26 November', 'Constitution Day', 'The Constitution was adopted on this date in 1949.'],
          ],
        },
        {
          type: 'table',
          caption: 'International days',
          head: ['Date', 'Observance', 'Note'],
          rows: [
            ['8 March', 'International Women\'s Day', ''],
            ['22 March', 'World Water Day', 'And 21 March is the International Day of Forests.'],
            ['7 April', 'World Health Day', 'The WHO was established on this date in 1948.'],
            ['22 April', 'International Mother Earth Day', ''],
            ['5 June', 'World Environment Day', 'Commemorates the Stockholm Conference of 1972.'],
            ['21 June', 'International Day of Yoga', 'Adopted by the United Nations in 2014 on India\'s proposal; the date is the summer solstice.'],
            ['24 October', 'United Nations Day', 'The UN Charter came into force on this date in 1945.'],
            ['1 December', 'World AIDS Day', ''],
            ['10 December', 'Human Rights Day', 'The Universal Declaration of Human Rights was adopted in 1948.'],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'institutions',
      heading: 'Institutions',
      eyebrow: 'What is where',
      intro:
        'Training academies, research institutes and national bodies, paired with their cities. A compact table with a high question yield, particularly in defence and railway papers.',
      blocks: [
        {
          type: 'table',
          caption: 'Institutions and their locations',
          head: ['Institution', 'Location', 'Purpose'],
          rows: [
            ['National Defence Academy', 'Khadakwasla, Pune', 'Joint training of cadets for the army, navy and air force before they go to their service academies.'],
            ['Indian Military Academy', 'Dehradun', 'Trains officers for the Indian Army. The Officers Training Academy is at Chennai.'],
            ['Indian Naval Academy and Air Force Academy', 'Ezhimala, Kerala; Dundigal, Hyderabad', 'The respective service academies.'],
            ['Lal Bahadur Shastri National Academy of Administration', 'Mussoorie', 'Trains IAS officers. The Sardar Vallabhbhai Patel National Police Academy at Hyderabad trains the IPS.'],
            ['Indian Agricultural Research Institute', 'New Delhi (Pusa)', 'The apex agricultural research institute, under ICAR.'],
            ['Central Drug Research Institute', 'Lucknow', 'And the Central Food Technological Research Institute is at Mysuru — both CSIR laboratories.'],
            ['Bhabha Atomic Research Centre', 'Trombay, Mumbai', 'Nuclear research. The Indira Gandhi Centre for Atomic Research is at Kalpakkam.'],
            ['National Institute of Oceanography', 'Panaji, Goa', 'Marine research, under CSIR.'],
            ['Wildlife Institute of India and Forest Research Institute', 'Both at Dehradun', 'Wildlife research and forestry research respectively.'],
            ['National Institute of Design and National Institute of Fashion Technology', 'Ahmedabad; New Delhi', 'Design and fashion education.'],
            ['Reserve Bank of India and SEBI', 'Both headquartered at Mumbai', 'The RBI moved from Calcutta to Bombay in 1937.'],
            ['Sangeet Natak, Sahitya and Lalit Kala Akademis', 'All at New Delhi', 'Performing arts, literature and visual arts respectively.'],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'sobriquets',
      heading: 'Sobriquets',
      eyebrow: 'Nicknames of places',
      intro:
        'A small, entirely arbitrary and heavily examined list. There is no logic to learn, only the pairings.',
      blocks: [
        {
          type: 'table',
          caption: 'Indian cities and their sobriquets',
          head: ['Sobriquet', 'City', 'Reason'],
          rows: [
            ['Pink City', 'Jaipur', 'The old city was painted pink to welcome a royal visit in 1876.'],
            ['Blue City', 'Jodhpur', 'The blue-washed houses of the old town.'],
            ['Golden City', 'Jaisalmer', 'Its yellow sandstone architecture.'],
            ['City of Lakes', 'Udaipur', 'Also applied to Bhopal.'],
            ['Manchester of India', 'Ahmedabad', 'Its historic cotton textile industry. Coimbatore is called the Manchester of South India.'],
            ['Silicon Valley of India', 'Bengaluru', 'Also called the Garden City.'],
            ['City of Joy', 'Kolkata', 'From the novel by Dominique Lapierre.'],
            ['Queen of the Arabian Sea', 'Kochi', 'Its historic role as a spice port.'],
            ['Scotland of the East', 'Shillong', 'Its climate and rolling hills.'],
            ['Steel City of India', 'Jamshedpur', 'Also called Tatanagar.'],
            ['Venice of the East', 'Alappuzha', 'Its network of backwater canals.'],
            ['Orange City', 'Nagpur', 'Its orange trade.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'World sobriquets',
              'Land of the Rising Sun is Japan; Land of the Midnight Sun is Norway; Land of Thunderbolt or Thunder Dragon is Bhutan; Land of White Elephants is Thailand; Land of Golden Fleece is Australia; Land of Maple Leaf is Canada; Land of Thousand Lakes is Finland; Land of Windmills is the Netherlands; the Dark Continent is Africa; the Emerald Isle is Ireland; and the Roof of the World is the Pamir plateau, with Tibet sometimes so described.',
            ],
            [
              'People and their epithets',
              'Father of the Nation, Mahatma Gandhi; Iron Man of India, Sardar Patel; Nightingale of India, Sarojini Naidu; Punjab Kesari, Lala Lajpat Rai; Deshbandhu, Chittaranjan Das; Lokmanya, Bal Gangadhar Tilak; Netaji, Subhas Chandra Bose; Frontier Gandhi, Khan Abdul Ghaffar Khan; Missile Man, A. P. J. Abdul Kalam; and Grand Old Man of India, Dadabhai Naoroji.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'On what date was the national flag adopted, and by which body?',
      steps: [
        'The flag was adopted before independence itself, in preparation for it.',
        'The Constituent Assembly adopted it on 22 July 1947.',
        'Note the contrast with the state emblem and the national anthem, both adopted on later dates in January 1950, once the Constitution was about to come into force.',
      ],
      answer: '22 July 1947, by the Constituent Assembly.',
    },
    {
      q: 'What is the national game of India?',
      steps: [
        'Hockey is very widely assumed to be the answer, and appears as such in many books.',
        'The Ministry of Youth Affairs and Sports has confirmed, in response to a right to information query, that no sport has been declared the national game.',
        'The correct answer is therefore that India has no officially declared national game.',
      ],
      answer: 'India has no officially declared national game.',
    },
    {
      q: 'Where does the motto Satyameva Jayate come from?',
      steps: [
        'It appears below the state emblem, which is an adaptation of the Lion Capital of Ashoka at Sarnath.',
        'The motto itself is not from the capital; it was added when the emblem was adopted on 26 January 1950.',
        'It is taken from the Mundaka Upanishad and means "truth alone triumphs".',
      ],
      answer: 'From the Mundaka Upanishad.',
    },
    {
      q: 'Which state was the first to be created on a linguistic basis, and when?',
      steps: [
        'The general reorganisation on linguistic lines came with the States Reorganisation Act of 1956.',
        'But one state preceded it: Andhra was carved out of Madras in 1953, following the death of Potti Sriramulu after a fast.',
        'So Andhra was the first linguistic state, and the 1956 Act then extended the principle nationally.',
      ],
      answer: 'Andhra, in 1953 — three years before the general reorganisation.',
    },
    {
      q: 'Why is 28 February observed as National Science Day?',
      steps: [
        'The date commemorates a specific Indian scientific achievement rather than a birth anniversary.',
        'It marks the discovery of the Raman effect by C. V. Raman.',
        'He received the Nobel Prize in Physics in 1930, the first Asian to win a Nobel in a science.',
      ],
      answer: 'It commemorates the discovery of the Raman effect.',
    },
    {
      q: 'Which three people received the first Bharat Ratna, and in which year?',
      steps: [
        'The award was instituted in 1954 and conferred in that first year on three people.',
        'They were C. Rajagopalachari, the last Governor-General of India; Dr S. Radhakrishnan, then Vice-President; and C. V. Raman, the physicist.',
        'It is the highest civilian award, and it may be conferred posthumously — a provision added later.',
      ],
      answer: 'C. Rajagopalachari, S. Radhakrishnan and C. V. Raman, in 1954.',
    },
    {
      q: 'Kanyakumari is often given as India\'s southernmost point. Is that right?',
      steps: [
        'Kanyakumari in Tamil Nadu is the southernmost point of the Indian mainland.',
        'But the territory of India includes the Andaman and Nicobar Islands, which lie considerably further south.',
        'The southernmost point of India is therefore Indira Point on Great Nicobar. Read whether the question says "India" or "mainland".',
      ],
      answer: 'Only of the mainland — Indira Point on Great Nicobar is the southernmost point of India.',
    },
    {
      q: 'Which cities are called the Manchester of India and the Manchester of South India?',
      steps: [
        'The nickname refers to a historic concentration of cotton textile manufacture, as at Manchester in England.',
        'Ahmedabad in Gujarat is the Manchester of India.',
        'Coimbatore in Tamil Nadu is the Manchester of South India.',
      ],
      answer: 'Ahmedabad and Coimbatore respectively.',
    },
  ],

  practice: [
    {
      q: 'The National Flag of India was adopted on:',
      options: ['22 July 1947', '15 August 1947', '26 January 1950', '24 January 1950'],
      answer: 0,
      explain: 'By the Constituent Assembly, before independence. The state emblem and anthem were adopted in January 1950.',
    },
    {
      q: 'The Ashoka Chakra on the national flag has how many spokes?',
      options: ['12', '16', '24', '32'],
      answer: 2,
      explain: 'It is taken from the abacus of the Lion Capital at Sarnath. The flag\'s length-to-width ratio is 3:2.',
    },
    {
      q: 'Satyameva Jayate is taken from the:',
      options: ['Rigveda', 'Bhagavad Gita', 'Mundaka Upanishad', 'Arthashastra'],
      answer: 2,
      explain: 'It appears below the state emblem, adopted on 26 January 1950, and means "truth alone triumphs".',
    },
    {
      q: 'The national aquatic animal of India is the:',
      options: ['Gangetic dolphin', 'Blue whale', 'Olive ridley turtle', 'Dugong'],
      answer: 0,
      explain: 'Declared in 2009. The tiger is the national animal and the elephant the national heritage animal.',
    },
    {
      q: 'The first Chief Election Commissioner of India was:',
      options: ['H. J. Kania', 'G. V. Mavalankar', 'T. N. Seshan', 'Sukumar Sen'],
      answer: 3,
      explain: 'He conducted the first general election of 1951–52. Kania was the first Chief Justice of India.',
    },
    {
      q: 'National Sports Day is observed on 29 August to mark the birth anniversary of:',
      options: ['Milkha Singh', 'P. T. Usha', 'Kapil Dev', 'Major Dhyan Chand'],
      answer: 3,
      explain: 'The hockey player. National Science Day on 28 February marks the discovery of the Raman effect.',
    },
    {
      q: 'Telangana became a state of the Indian Union in:',
      options: ['2000', '2011', '2014', '2019'],
      answer: 2,
      explain: 'On 2 June 2014, as the twenty-ninth state. The number returned to twenty-eight after the 2019 reorganisation of Jammu and Kashmir.',
    },
    {
      q: 'The National Defence Academy is located at:',
      options: ['Dehradun', 'Dundigal', 'Ezhimala', 'Khadakwasla'],
      answer: 3,
      explain: 'Near Pune, for joint training. Dehradun has the Indian Military Academy, Ezhimala the Naval Academy and Dundigal the Air Force Academy.',
    },
    {
      q: 'Which city is known as the Scotland of the East?',
      options: ['Shillong', 'Darjeeling', 'Gangtok', 'Kodaikanal'],
      answer: 0,
      explain: 'For its climate and rolling hills. Alappuzha is the Venice of the East.',
    },
    {
      q: 'The International Day of Yoga is observed on:',
      options: ['21 March', '5 June', '21 June', '2 October'],
      answer: 2,
      explain: 'Adopted by the United Nations in 2014 on India\'s proposal; the date is the summer solstice.',
    },
    {
      q: 'The tallest statue in the world, the Statue of Unity, depicts:',
      options: ['Mahatma Gandhi', 'Sardar Vallabhbhai Patel', 'B. R. Ambedkar', 'Jawaharlal Nehru'],
      answer: 1,
      explain: 'It stands 182 metres tall in Gujarat, near the Sardar Sarovar dam.',
    },
    {
      q: 'The first woman President of the Indian National Congress was:',
      options: ['Sarojini Naidu', 'Annie Besant', 'Indira Gandhi', 'Vijaya Lakshmi Pandit'],
      answer: 1,
      explain: 'Annie Besant presided in 1917. Sarojini Naidu was the first Indian woman to do so.',
    },
    {
      q: 'The rupee symbol ₹ was adopted in:',
      options: ['2007', '2010', '2014', '2016'],
      answer: 1,
      explain: 'Designed by D. Udaya Kumar, combining the Devanagari letter and the Roman R.',
    },
    {
      q: 'Constitution Day is observed on:',
      options: ['26 January', '15 August', '26 November', '24 January'],
      answer: 2,
      explain: 'The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950.',
    },
    {
      q: 'The states with the largest and smallest area respectively are:',
      options: ['Rajasthan and Goa', 'Madhya Pradesh and Sikkim', 'Uttar Pradesh and Goa', 'Rajasthan and Sikkim'],
      answer: 0,
      explain: 'By population it is Uttar Pradesh and Sikkim, on the 2011 Census.',
    },
    {
      q: 'Bhutan is known as the:',
      options: ['Land of the Rising Sun', 'Land of the Thunder Dragon', 'Land of the Midnight Sun', 'Land of White Elephants'],
      answer: 1,
      explain: 'Japan is the Land of the Rising Sun, Norway the Land of the Midnight Sun and Thailand the Land of White Elephants.',
    },
  ],

  faqs: [
    {
      q: 'Why is static GK worth prioritising?',
      a: 'Because it is the only part of general awareness that does not expire. Time spent on current affairs decays within months; time spent on national symbols, superlatives, firsts and important days pays for every exam you take from now on. It is also the part where the same questions recur most literally, so recognition is enough — you rarely have to reason.',
    },
    {
      q: 'How much static GK is actually asked?',
      a: 'Five to eight questions in RRB NTPC and Group D, which weight it most heavily; four to six in SSC CGL and CHSL within the 25-question General Awareness section; three to five in state PSC prelims, with a significant share drawn from the state\'s own facts; and two to four in banking, where current affairs dominates instead.',
    },
    {
      q: 'Does India really have no national game?',
      a: 'Correct. The Ministry of Youth Affairs and Sports has stated, in reply to a right to information query, that no sport has been declared the national game of India. Hockey is universally assumed to hold that status and does not. This has appeared as a question, so the accurate answer is that none has been declared.',
    },
    {
      q: 'How should I revise a list with no internal logic?',
      a: 'By grouping and by repetition rather than by understanding. Sobriquets, firsts and important days have no reasoning to follow, so treat them as vocabulary: revise the same table five times over five weeks rather than once for five times as long. Testing yourself on the pairings both ways round — city to nickname and nickname to city — is far more effective than rereading.',
    },
    {
      q: 'Why do the adoption dates of the national symbols differ?',
      a: 'Because they were adopted for different purposes at different moments. The flag was adopted on 22 July 1947, three weeks before independence, so that a flag existed on the day. The state emblem, the anthem and the national song were adopted in January 1950, as the Constitution was about to come into force and the Republic was being constituted. The distinction is directly examined.',
    },
    {
      q: 'Which superlatives have a catch in them?',
      a: 'Several. The southernmost point of India is Indira Point, not Kanyakumari, which is only the mainland\'s. The highest peak in India is Kanchenjunga, since K2 lies in disputed territory. The largest lake depends on whether brackish or fresh water is meant — Chilika or Wular. And the wettest place is usually given as Mawsynram rather than the more famous Cherrapunji. Read the exact wording of the question.',
    },
    {
      q: 'Should I learn all the states, capitals and formation dates?',
      a: 'Learn the states and capitals completely — they are short and asked directly. For formation dates, concentrate on the clusters: the 1956 reorganisation, the north-eastern states of the early 1970s, the three states created in 2000, and Telangana in 2014. Individual dates for the older states are rarely asked in isolation.',
    },
    {
      q: 'Which facts here could actually change?',
      a: 'Very few, but not none. The number of states and union territories has changed twice this century. Capitals have been added — Gairsain, Amaravati. Tallest and longest records can be broken by new construction. Everything else on this page — symbols, firsts, days, sobriquets — is fixed. When in doubt, prefer facts anchored to a historical event over facts anchored to a record.',
    },
    {
      q: 'How does static GK relate to the other subjects?',
      a: 'It overlaps heavily. The firsts table is modern history and polity; the superlatives are geography; the institutions are science and administration; the days are history. Preparing those subjects properly covers much of static GK automatically, which is why this page is best read after them rather than instead of them.',
    },
    {
      q: 'Is there any point learning sobriquets?',
      a: 'Yes, because they cost almost nothing. There are about twenty Indian and a dozen world sobriquets that recur, they take an hour to learn, and they appear in SSC and railway papers reliably. Few other items in the syllabus give a question per minute of study time. The same applies to the epithets of national leaders.',
    },
  ],

  related: [
    { label: 'International Organisations', to: '/study-material/general-knowledge/international-organisations/' },
    { label: 'Awards, Sports & Books', to: '/study-material/general-knowledge/awards-sports-books/' },
    { label: 'Indian Geography', to: '/study-material/geography/indian-geography/' },
    { label: 'Modern India', to: '/study-material/history/modern-india/' },
    { label: 'All General Knowledge', to: '/study-material/general-knowledge/' },
  ],
}
