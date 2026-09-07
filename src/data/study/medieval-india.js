/**
 * Medieval India — /study-material/history/medieval-india/
 *
 * Spans roughly the eighth century to the eighteenth. Organised as dynasty
 * tables with the one achievement each ruler is actually asked about, because
 * the period produces more "who did what" questions than any other part of the
 * history syllabus. Battles are given with their year and both sides, since
 * that is the form the question takes.
 */
export default {
  subject: 'history',
  subjectName: 'History',
  slug: 'medieval-india',
  title: 'Medieval India',
  seoTitle: 'Medieval India History for Competitive Exams | Sultanate, Mughals & Practice',
  metaDescription:
    'Complete Medieval India study material for UPSC, SSC and state exams — the Cholas and the tripartite struggle, Turkish invasions.',
  readMinutes: 25,
  lead: [
    'Medieval India generates more direct factual questions than any other block of the history syllabus, and they take a very narrow set of forms: which ruler introduced what, which battle was fought in which year and between whom, and which saint belonged to which order. Reading the period as a story does not prepare you for that; learning it as a set of tables does.',
    'So this page is built from tables — dynasties with their examinable achievement, battles with their year and both sides, Sufi orders with their principal saints — and adds narrative only where the causation is itself examined, as with the decline of the Mughal empire. Dates before roughly 1200 are given as approximate where the sources genuinely disagree.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '3–5 questions', note: 'Often on the Bhakti and Sufi movements or on Vijayanagara rather than on battles.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–4 questions', note: 'Direct recall: ruler and achievement, battle and year.' },
    { exam: 'State PSC Prelims', count: '4–8 questions', note: 'Weighted towards the regional kingdoms of the state concerned.' },
    { exam: 'RRB NTPC / Group D', count: '2–4 questions', note: 'Mughal rulers and the major battles.' },
    { exam: 'CTET / Teaching (Social Studies)', count: '2–4 questions', note: 'NCERT-level questions on the Sultanate, the Mughals and the Bhakti movement.' },
  ],

  contents: [
    { icon: 'globe', title: 'Early medieval India', sub: 'The tripartite struggle and the Cholas', href: '#early-medieval' },
    { icon: 'target', title: 'The Turkish invasions', sub: 'From Sindh to the Second Tarain', href: '#turkish' },
    { icon: 'layers', title: 'The Delhi Sultanate', sub: 'Five dynasties in three centuries', href: '#sultanate' },
    { icon: 'chart', title: 'Sultanate administration', sub: 'Iqta, market control, revenue', href: '#sultanate-admin' },
    { icon: 'refresh', title: 'Vijayanagara and the Bahmanis', sub: 'The Deccan after 1336', href: '#deccan' },
    { icon: 'user', title: 'Bhakti and Sufism', sub: 'Saints, orders and their teaching', href: '#bhakti-sufi' },
    { icon: 'book', title: 'The Mughal empire', sub: 'Babur to Aurangzeb', href: '#mughal' },
    { icon: 'clock', title: 'The Marathas and after', sub: 'Rise, expansion and 1761', href: '#maratha' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'early-medieval',
      heading: 'Early medieval India',
      eyebrow: 'c. 750–1200 CE',
      intro:
        'Three northern powers fought for Kanauj while the Cholas built the most durable state of the period in the south. The Chola material is examined far more often than the tripartite struggle, chiefly for local government and temple architecture.',
      blocks: [
        {
          type: 'table',
          caption: 'The tripartite struggle for Kanauj',
          head: ['Power', 'Base', 'What it is asked about'],
          rows: [
            ['Pala', 'Bengal and Bihar', 'Founded by Gopala; Dharmapala and Devapala were patrons of Nalanda and founded Vikramshila. Buddhism\'s last major royal support in India.'],
            ['Gurjara-Pratihara', 'Western India and the Ganga plain', 'Nagabhata I checked Arab expansion from Sindh; Mihir Bhoja was the strongest ruler.'],
            ['Rashtrakuta', 'Deccan, from Manyakheta', 'Founded by Dantidurga; Krishna I built the rock-cut Kailasa temple at Ellora; Amoghavarsha wrote the Kavirajamarga, an early work in Kannada.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The imperial Cholas',
              'Founded as an imperial power by Vijayalaya in the ninth century. Rajaraja I (985–1014) built the Brihadeshwara temple at Thanjavur; his son Rajendra I took the title Gangaikonda Chola, founded Gangaikonda Cholapuram, and sent a naval expedition against Srivijaya in South-East Asia.',
            ],
            [
              'Chola local government',
              'The most examined feature of the period. Villages were run by assemblies — the ur of ordinary villages, the sabha of brahmadeya villages and the nagaram of merchant towns — working through specialised committees called variyams. The Uttaramerur inscription of Parantaka I records the rules for electing members, and is the standard evidence cited.',
            ],
            [
              'Chola art and architecture',
              'The Dravida temple style matured here, with the vimana over the sanctum as the dominant feature; the towering gopuram gateways become prominent later under the Pandyas and at Vijayanagara. Chola bronze casting, above all the Nataraja, is the other standard question.',
            ],
            [
              'Chola overseas contact',
              'Naval power and trade with South-East Asia and China distinguish the Cholas from every other Indian dynasty of the period, and the Srivijaya expedition of Rajendra I is the fact usually asked.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'turkish',
      heading: 'The Turkish invasions',
      eyebrow: '712–1206 CE',
      intro:
        'Three separate waves, often confused with one another. Keep the raider who plundered and left separate from the one who stayed and founded a state.',
      blocks: [
        {
          type: 'table',
          caption: 'The invasions in order',
          head: ['Invader', 'Date', 'Outcome'],
          rows: [
            ['Muhammad bin Qasim', '712 CE', 'Arab conquest of Sindh. Politically contained — it did not lead to further expansion into India.'],
            ['Mahmud of Ghazni', 'c. 1000–1027 CE', 'Around seventeen raids for plunder, including the sack of Somnath in 1025. He annexed the Punjab but did not rule further east. Al-Biruni came with him and wrote the Kitab-ul-Hind.'],
            ['Muhammad Ghori — First Tarain', '1191 CE', 'Defeated by Prithviraj Chauhan.'],
            ['Muhammad Ghori — Second Tarain', '1192 CE', 'Defeated Prithviraj Chauhan. The decisive battle, and the one that opens the way to Turkish rule in north India.'],
            ['Muhammad Ghori — Chandawar', '1194 CE', 'Defeated Jaichand of Kanauj, completing control of the Ganga plain.'],
          ],
        },
        {
          type: 'note',
          title: 'Ghazni raided; Ghori stayed',
          text:
            'This is the distinction questions are built on. Mahmud of Ghazni took wealth back to Central Asia and left no administration behind him. Muhammad Ghori\'s campaigns ended in a permanent conquest that his general Qutbuddin Aibak converted into the Delhi Sultanate in 1206. Attributing the founding of the Sultanate to Ghazni is the standard wrong answer.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'sultanate',
      heading: 'The Delhi Sultanate',
      eyebrow: '1206–1526',
      intro:
        'Five dynasties in three hundred and twenty years. Learn each ruler with the single thing he is asked about, and the period becomes manageable.',
      blocks: [
        {
          type: 'table',
          caption: 'The five dynasties and their key rulers',
          head: ['Ruler', 'Dynasty and dates', 'What each is asked about'],
          rows: [
            ['Qutbuddin Aibak', 'Slave (Mamluk), from 1206', 'Founder; began the Qutb Minar and the Quwwat-ul-Islam mosque. Died in 1210 in a fall while playing chaugan, a form of polo.'],
            ['Iltutmish', 'Slave, 1211–1236', 'The real consolidator. Introduced the silver tanka and copper jital, organised the iqta system, and formed the corps of forty nobles known as the Turkan-i-Chihalgani.'],
            ['Razia Sultan', 'Slave, 1236–1240', 'The first and only woman to rule the Delhi Sultanate.'],
            ['Balban', 'Slave, 1266–1287', 'Broke the power of the forty nobles; asserted kingship as Zill-i-Ilahi, the shadow of God, with the ceremonies of sijda and paibos.'],
            ['Alauddin Khalji', 'Khalji, 1296–1316', 'Market and price controls, a large standing army paid in cash, and the branding of horses and descriptive rolls of soldiers. Malik Kafur led his Deccan campaigns; the Alai Darwaza was built in his reign.'],
            ['Muhammad bin Tughlaq', 'Tughlaq, 1325–1351', 'The transfer of the capital to Daulatabad, token currency in cheap metal, and increased taxation in the Doab. Ibn Battuta visited and served as qazi of Delhi.'],
            ['Firoz Shah Tughlaq', 'Tughlaq, 1351–1388', 'Canals and public works; founded Firozabad, Jaunpur, Hisar and Fatehabad; extended jizya to Brahmins; set up the Diwan-i-Khairat for charity.'],
            ['Khizr Khan', 'Sayyid, from 1414', 'Founder of the dynasty, ruling as a nominal deputy after Timur\'s invasion of 1398.'],
            ['Sikandar and Ibrahim Lodi', 'Lodi, 1451–1526', 'Sikandar founded Agra in 1504; Ibrahim was defeated and killed at the First Battle of Panipat in 1526.'],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'sultanate-admin',
      heading: 'Sultanate administration',
      eyebrow: 'The systems, not the reigns',
      intro:
        'A small number of institutional terms recur across three centuries and across several dynasties. Knowing them makes a large share of the period\'s questions straightforward.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The iqta system',
              'Revenue assignments over territory granted to nobles in place of a cash salary, in return for maintaining troops. Organised by Iltutmish, and the backbone of Sultanate finance. Iqtas were in principle transferable, which was what kept them from becoming hereditary estates.',
            ],
            [
              "Alauddin Khalji's market control",
              'Fixed prices for grain, cloth, horses and slaves, enforced through the Diwan-i-Riyasat and a market superintendent, the shahna-i-mandi, with state granaries to stabilise supply. The purpose was military — a large army could be paid in cash only if prices were low.',
            ],
            [
              'Dagh and chehra',
              'The branding of cavalry horses and the maintenance of descriptive rolls of soldiers, introduced by Alauddin Khalji to stop nobles from parading the same horses and men at successive musters.',
            ],
            [
              'Land revenue',
              'Assessed as a share of produce; Alauddin Khalji raised it to half in the Doab and measured land to fix it. Firoz Shah Tughlaq by contrast reduced the burden and invested in irrigation.',
            ],
            [
              'The central departments',
              'The Diwan-i-Wizarat handled finance, the Diwan-i-Arz the army, the Diwan-i-Insha correspondence and the Diwan-i-Risalat religious and charitable matters. Firoz Shah added the Diwan-i-Khairat for charity and the Diwan-i-Bandagan for slaves.',
            ],
            [
              'Architecture of the period',
              'The arch and the dome enter Indian building. The Qutb Minar was begun by Aibak and completed by Iltutmish; the Alai Darwaza belongs to Alauddin Khalji; the Tughlaqs built in a deliberately austere, sloping-walled style at Tughlaqabad.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'deccan',
      heading: 'Vijayanagara and the Bahmanis',
      eyebrow: '1336–1565 and after',
      intro:
        'Two rival Deccan states founded within a decade of each other, and a favourite topic because foreign travellers described Vijayanagara in detail.',
      blocks: [
        {
          type: 'table',
          caption: 'The two states',
          head: ['', 'Vijayanagara', 'Bahmani'],
          rows: [
            ['Founded', '1336, by Harihara and Bukka of the Sangama dynasty', '1347, by Alauddin Bahman Shah, also known as Hasan Gangu'],
            ['Capital', 'Hampi, on the Tungabhadra', 'Gulbarga, later moved to Bidar'],
            ['Ruling houses', 'Sangama, Saluva, Tuluva and Aravidu in succession', 'A single line, later fragmenting'],
            ['Greatest figure', 'Krishnadevaraya (1509–1529) of the Tuluva line', 'Mahmud Gawan, the reforming minister'],
            ['End', 'Broken at the Battle of Talikota in 1565 by a coalition of Deccan sultanates', 'Split into five sultanates — Bijapur, Golconda, Ahmednagar, Berar and Bidar'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Krishnadevaraya',
              'The ruler most often asked about. He wrote the Amuktamalyada, a work on statecraft in Telugu, and patronised the group of poets known as the ashtadiggajas. Portuguese visitors described his capital at its height.',
            ],
            [
              'Foreign accounts of Vijayanagara',
              'Nicolo Conti from Italy, Abdur Razzak from Persia, and Domingo Paes and Fernao Nuniz from Portugal. Their descriptions of Hampi are the principal literary evidence for the city, and the names are frequently asked.',
            ],
            [
              'The five Deccan sultanates',
              'Bijapur under the Adil Shahis, Golconda under the Qutb Shahis, Ahmednagar under the Nizam Shahis, Berar under the Imad Shahis and Bidar under the Barid Shahis. They combined to defeat Vijayanagara in 1565 and were later absorbed by the Mughals.',
            ],
            [
              'Hampi today',
              'The ruins of the Vijayanagara capital are a UNESCO World Heritage Site, and the Vitthala temple with its stone chariot and musical pillars is the structure most often illustrated in questions.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'bhakti-sufi',
      heading: 'Bhakti and Sufism',
      eyebrow: 'The devotional movements',
      intro:
        'Examined as saint-and-attribute pairings: which language a saint used, which region, which philosophical school or Sufi order. UPSC in particular asks more from this section than from the battles.',
      blocks: [
        {
          type: 'table',
          caption: 'Bhakti saints and philosophers',
          head: ['Figure', 'Region and period', 'Associated with'],
          rows: [
            ['Alvars and Nayanars', 'Tamil country, sixth to ninth centuries', 'The earliest Bhakti stream — Alvars devoted to Vishnu, Nayanars to Shiva.'],
            ['Shankaracharya', 'Eighth century', 'Advaita, non-dualism; established mathas across the subcontinent.'],
            ['Ramanuja', 'Eleventh to twelfth century', 'Vishishtadvaita, qualified non-dualism.'],
            ['Madhvacharya', 'Thirteenth century', 'Dvaita, dualism.'],
            ['Basava', 'Karnataka, twelfth century', 'The Lingayat or Virashaiva movement, which rejected caste and ritual.'],
            ['Kabir', 'North India, fifteenth century', 'Nirguna bhakti — a formless god — and sharp criticism of both Hindu and Muslim orthodoxy.'],
            ['Guru Nanak (1469–1539)', 'Punjab', 'The first Sikh Guru; taught one formless God and rejected caste and ritual.'],
            ['Chaitanya Mahaprabhu', 'Bengal, sixteenth century', 'Ecstatic devotion to Krishna, spread through congregational singing.'],
            ['Tulsidas', 'North India, sixteenth century', 'Wrote the Ramcharitmanas in Awadhi.'],
            ['Mirabai', 'Rajasthan, sixteenth century', 'Devotional poetry to Krishna, in Rajasthani and Brajbhasha.'],
            ['Tukaram and Jnaneshwar', 'Maharashtra', 'The Varkari tradition; Jnaneshwar wrote the Jnaneshwari, a Marathi commentary on the Gita.'],
          ],
        },
        {
          type: 'table',
          caption: 'The main Sufi orders in India',
          head: ['Silsila', 'Principal saints', 'Distinguishing feature'],
          rows: [
            ['Chishti', 'Moinuddin Chishti at Ajmer, Nizamuddin Auliya at Delhi, Baba Farid at Ajodhan', 'Refused state patronage and land grants; used music, or sama, in worship. The most influential order in India.'],
            ['Suhrawardi', 'Bahauddin Zakariya at Multan', 'Accepted state patronage and official positions, in deliberate contrast to the Chishtis.'],
            ['Naqshbandi', 'Sheikh Ahmad Sirhindi', 'Emphasised orthodoxy and opposed practices it regarded as accretions.'],
            ['Qadiri', 'Miyan Mir, associated with Dara Shikoh', 'Influential in Punjab and among sections of the Mughal court.'],
          ],
        },
        {
          type: 'note',
          title: 'What the two movements shared',
          text:
            'Both stressed a direct, personal relationship with God over ritual and priestly mediation, both used regional languages rather than Sanskrit or Persian, and both drew followers across caste and community lines. That common ground — rather than the differences — is what most questions on the movements are actually testing.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'mughal',
      heading: 'The Mughal empire',
      eyebrow: '1526–1707 (effective)',
      intro:
        'The most heavily examined dynasty in the syllabus. Learn the six major rulers with their battles, their administrative measure and their building, and most questions are covered.',
      blocks: [
        {
          type: 'table',
          caption: 'The major rulers',
          head: ['Ruler', 'Reign', 'What each is asked about'],
          rows: [
            ['Babur', '1526–1530', 'Won the First Battle of Panipat against Ibrahim Lodi in 1526, Khanwa against Rana Sanga in 1527 and Ghaghra in 1529. Wrote the Baburnama in Turkish.'],
            ['Humayun', '1530–1540, 1555–1556', 'Lost to Sher Shah at Chausa in 1539 and at Kannauj in 1540; regained the throne in 1555 and died the following year. His sister Gulbadan Begum wrote the Humayun-nama.'],
            ['Sher Shah Suri', '1540–1545', 'Not a Mughal, but the interruption that reshaped the empire. Introduced the silver rupiya, rebuilt the Grand Trunk Road with sarais, and systematised land revenue by measurement.'],
            ['Akbar', '1556–1605', 'The Second Battle of Panipat in 1556 against Hemu, and Haldighati in 1576 against Maharana Pratap. Abolished the jizya in 1564, founded the Ibadat Khana and proclaimed the Din-i-Ilahi in 1582. The mansabdari system and Todar Mal\'s revenue settlement date from his reign.'],
            ['Jahangir', '1605–1627', 'Nur Jahan\'s influence; the chain of justice; received Captain Hawkins and then Sir Thomas Roe, whose embassy arrived in 1615. Wrote the Tuzuk-i-Jahangiri.'],
            ['Shah Jahan', '1628–1658', 'The peak of Mughal architecture — the Taj Mahal, the Red Fort and the Jama Masjid — and the Peacock Throne.'],
            ['Aurangzeb', '1658–1707', 'Reimposed the jizya in 1679; spent his later decades on the Deccan campaigns; faced sustained Maratha, Sikh and Jat resistance.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The mansabdari system',
              'Akbar\'s ranking of officers by two numbers — zat, fixing personal status and pay, and sawar, fixing the cavalry to be maintained. It made the nobility a service class dependent on the emperor rather than a landed aristocracy.',
            ],
            [
              "Todar Mal's revenue settlement",
              'Also called the zabti or dahsala system: land was measured, classified by fertility, and assessed on the average produce and prices of the preceding ten years, with the demand fixed in cash. It built directly on Sher Shah\'s measures.',
            ],
            [
              'Akbar and religion',
              'The abolition of the pilgrim tax and then of the jizya, the debates at the Ibadat Khana at Fatehpur Sikri, and the Din-i-Ilahi of 1582 — a small courtly order rather than a mass religion, a distinction questions sometimes turn on.',
            ],
            [
              'The Mughal chronicles',
              'Abul Fazl wrote the Akbarnama, whose third volume is the Ain-i-Akbari, the standard source on Akbar\'s administration. Badauni wrote a hostile counterpart, and Babur and Jahangir both left memoirs.',
            ],
            [
              'Why the empire declined',
              'Historians point to the cost and inconclusiveness of the Deccan wars, a shortage of assignable land relative to the number of mansabdars, weak successors after 1707, and sustained regional resistance. Nadir Shah\'s sack of Delhi in 1739 exposed how far the centre had weakened.',
            ],
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'maratha',
      heading: 'The Marathas and after',
      eyebrow: '1674–1761',
      intro:
        'The power that replaced the Mughals over much of India, and the one whose defeat in 1761 opened the way for the British.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Shivaji (1630–1680)',
              'Crowned Chhatrapati at Raigad in 1674. Built a compact state in the western Deccan with a strong navy and a network of hill forts, and signed the Treaty of Purandar with the Mughal general Jai Singh I in 1665.',
            ],
            [
              'The Ashta Pradhan',
              'Shivaji\'s council of eight ministers, headed by the Peshwa. Under his successors the Peshwa\'s office became hereditary and the effective centre of Maratha power passed to it.',
            ],
            [
              'Chauth and sardeshmukhi',
              'Two levies on territory outside direct Maratha control — chauth at about a quarter of the revenue and sardeshmukhi at about a tenth. They financed Maratha expansion across India.',
            ],
            [
              'The Peshwa period',
              'Balaji Vishwanath established the office\'s dominance, Baji Rao I expanded rapidly into north and central India, and under Balaji Baji Rao the confederacy reached its widest extent.',
            ],
            [
              'The Third Battle of Panipat, 1761',
              'Ahmad Shah Abdali defeated the Marathas decisively. The confederacy survived but its northern ambitions did not, and the vacuum it left was filled over the following decades by the East India Company.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Keep the three battles of Panipat apart',
          text:
            'They are separated by more than two centuries and are constantly confused. In 1526 Babur defeated Ibrahim Lodi and founded the Mughal empire. In 1556 Akbar\'s forces under Bairam Khan defeated Hemu and secured it. In 1761 Ahmad Shah Abdali defeated the Marathas. Fixing the pairs of opponents is more reliable than trying to remember the years alone.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Distinguish the three battles of Panipat by year and opponents.',
      steps: [
        '1526: Babur against Ibrahim Lodi — the Mughal empire is founded.',
        '1556: Akbar\'s forces under Bairam Khan against Hemu — the empire is secured after Humayun\'s death.',
        '1761: Ahmad Shah Abdali against the Marathas — Maratha power in the north is broken.',
      ],
      answer: '1526 Babur–Lodi, 1556 Akbar–Hemu, 1761 Abdali–Marathas.',
    },
    {
      q: 'Who introduced the silver tanka, and who the silver rupiya?',
      steps: [
        'The tanka and the copper jital belong to Iltutmish of the Slave dynasty.',
        'The rupiya is Sher Shah Suri\'s, three centuries later, and is the ancestor of the modern rupee.',
        'Muhammad bin Tughlaq\'s token currency sits between them and is a different question entirely.',
      ],
      answer: 'Iltutmish the tanka; Sher Shah Suri the rupiya.',
    },
    {
      q: 'Why did Muhammad bin Tughlaq move the capital to Daulatabad, and why is it remembered as a failure?',
      steps: [
        'Devagiri, renamed Daulatabad, was more central to an empire that then extended deep into the Deccan.',
        'The move required officials and populations to travel a very long distance, at heavy cost in life and money.',
        'The capital was shifted back within a few years, leaving the expense with nothing to show for it.',
      ],
      answer: 'For central control of a Deccan-heavy empire; it failed on the cost of the transfer and was reversed.',
    },
    {
      q: 'What was the purpose of Alauddin Khalji\'s market control?',
      steps: [
        'He maintained a large standing army paid in cash rather than through land assignments.',
        'Cash wages are only affordable if prices are low and stable.',
        'So grain, cloth, horses and slaves were price-fixed and enforced through the shahna-i-mandi, with state granaries to steady supply.',
      ],
      answer: 'To make a large cash-paid standing army affordable.',
    },
    {
      q: 'Which foreign travellers described Vijayanagara?',
      steps: [
        'Nicolo Conti from Italy and Abdur Razzak from Persia visited in the fifteenth century.',
        'Domingo Paes and Fernao Nuniz came from Portugal in the sixteenth, around the reign of Krishnadevaraya.',
        'Their accounts are the principal literary evidence for Hampi, and the four names are asked as a group.',
      ],
      answer: 'Nicolo Conti, Abdur Razzak, Domingo Paes and Fernao Nuniz.',
    },
    {
      q: 'What distinguishes the Chishti Sufi order from the Suhrawardi?',
      steps: [
        'Both arrived in India around the same period and both are examined as a contrasting pair.',
        'The Chishtis refused state patronage and land grants, kept their distance from rulers, and used sama, devotional music.',
        'The Suhrawardis accepted patronage and official positions.',
      ],
      answer: 'The Chishtis rejected state patronage; the Suhrawardis accepted it.',
    },
    {
      q: 'What does the Uttaramerur inscription tell us?',
      steps: [
        'It belongs to the reign of the Chola ruler Parantaka I.',
        'It sets out the qualifications and the procedure for choosing members of village assembly committees.',
        'It is the standard evidence cited for the sophistication of Chola local self-government.',
      ],
      answer: 'The rules for electing members of Chola village assemblies.',
    },
    {
      q: 'Explain the two numbers in a Mughal mansab.',
      steps: [
        'The zat rank fixed the holder\'s personal status and pay within the hierarchy.',
        'The sawar rank fixed the number of cavalrymen he had to maintain.',
        'Separating the two let the emperor reward status without automatically increasing military obligation, and kept the nobility a service class rather than a landed one.',
      ],
      answer: 'Zat for personal rank and pay; sawar for the cavalry to be maintained.',
    },
    {
      q: 'How did Todar Mal\'s revenue system work?',
      steps: [
        'Land was measured and classified according to fertility and continuity of cultivation.',
        'The assessment was based on the average produce and average prices of the previous ten years — hence the name dahsala.',
        'The demand was then fixed in cash, which built directly on Sher Shah\'s earlier measurement-based settlement.',
      ],
      answer: 'Measurement, classification, and a cash demand set on a ten-year average.',
    },
    {
      q: 'Why is 1761 treated as a turning point?',
      steps: [
        'The Marathas had become the principal power in India as Mughal authority receded.',
        'At the Third Battle of Panipat, Ahmad Shah Abdali destroyed their northern army.',
        'The confederacy survived in the Deccan but could no longer contest north India, and the East India Company filled the vacuum over the following decades.',
      ],
      answer: 'Maratha power in the north collapsed, leaving no Indian power able to check the Company.',
    },
  ],

  practice: [
    {
      q: 'The First Battle of Panipat, in 1526, was fought between Babur and:',
      options: ['Ibrahim Lodi', 'Rana Sanga', 'Hemu', 'Sher Shah Suri'],
      answer: 0,
      explain: 'Rana Sanga was defeated at Khanwa in 1527 and Hemu at the Second Battle of Panipat in 1556.',
    },
    {
      q: 'The silver tanka and the copper jital were introduced by:',
      options: ['Qutbuddin Aibak', 'Iltutmish', 'Balban', 'Alauddin Khalji'],
      answer: 1,
      explain: 'Iltutmish consolidated the Sultanate, introduced these coins and organised the iqta system.',
    },
    {
      q: 'The transfer of the capital from Delhi to Daulatabad was ordered by:',
      options: ['Firoz Shah Tughlaq', 'Ghiyasuddin Tughlaq', 'Muhammad bin Tughlaq', 'Alauddin Khalji'],
      answer: 2,
      explain: 'The move was intended to give central control over a Deccan-heavy empire but was reversed within a few years.',
    },
    {
      q: 'The Vijayanagara empire was founded in 1336 by:',
      options: ['Krishnadevaraya', 'Alauddin Bahman Shah', 'Devaraya II', 'Harihara and Bukka'],
      answer: 3,
      explain: 'Harihara and Bukka founded the Sangama dynasty. Alauddin Bahman Shah founded the rival Bahmani kingdom in 1347.',
    },
    {
      q: 'The Battle of Talikota in 1565 resulted in the defeat of:',
      options: ['The Bahmani Sultanate', 'Vijayanagara', 'The Marathas', 'The Delhi Sultanate'],
      answer: 1,
      explain: 'A coalition of Deccan sultanates broke Vijayanagara, and Hampi was sacked.',
    },
    {
      q: 'The Amuktamalyada, a work on statecraft in Telugu, was written by:',
      options: ['Amir Khusrau', 'Abul Fazl', 'Krishnadevaraya', 'Babur'],
      answer: 2,
      explain: 'Krishnadevaraya of the Tuluva dynasty was both ruler and author, and patronised the poets known as the ashtadiggajas.',
    },
    {
      q: 'The Ain-i-Akbari was written by:',
      options: ['Abul Fazl', 'Badauni', 'Gulbadan Begum', 'Faizi'],
      answer: 0,
      explain: 'It forms the third volume of the Akbarnama and is the standard source on Akbar\'s administration.',
    },
    {
      q: 'The jizya was abolished in 1564 by:',
      options: ['Sher Shah Suri', 'Jahangir', 'Aurangzeb', 'Akbar'],
      answer: 3,
      explain: 'Akbar abolished it; Aurangzeb reimposed it in 1679.',
    },
    {
      q: 'The Second Battle of Tarain, in 1192, was won by:',
      options: ['Prithviraj Chauhan', 'Muhammad Ghori', 'Mahmud of Ghazni', 'Qutbuddin Aibak'],
      answer: 1,
      explain: 'Ghori lost the first battle in 1191 and won the second, which opened north India to Turkish rule.',
    },
    {
      q: 'Sher Shah Suri is credited with introducing the:',
      options: ['Mansabdari system', 'Silver rupiya', 'Token currency', 'Iqta system'],
      answer: 1,
      explain: 'The rupiya is the ancestor of the modern rupee. Mansabdari is Akbar\'s, token currency Muhammad bin Tughlaq\'s and the iqta system Iltutmish\'s.',
    },
    {
      q: 'Shivaji was crowned Chhatrapati in 1674 at:',
      options: ['Raigad', 'Pratapgarh', 'Sinhagad', 'Purandar'],
      answer: 0,
      explain: 'Raigad was his capital. Purandar is remembered for the 1665 treaty with Jai Singh I.',
    },
    {
      q: 'The Third Battle of Panipat, in 1761, was fought between the Marathas and:',
      options: ['The Mughals', 'The British', 'Ahmad Shah Abdali', 'Nadir Shah'],
      answer: 2,
      explain: 'Nadir Shah had sacked Delhi earlier, in 1739; Abdali defeated the Marathas in 1761.',
    },
    {
      q: 'The only woman to rule the Delhi Sultanate was:',
      options: ['Nur Jahan', 'Razia Sultan', 'Chand Bibi', 'Rani Durgavati'],
      answer: 1,
      explain: 'Razia, daughter of Iltutmish, ruled from 1236 to 1240. Nur Jahan was Jahangir\'s consort, not a sultan.',
    },
    {
      q: 'The theory of kingship as Zill-i-Ilahi, the shadow of God, was asserted by:',
      options: ['Balban', 'Iltutmish', 'Alauddin Khalji', 'Firoz Shah Tughlaq'],
      answer: 0,
      explain: 'Balban used it, with the ceremonies of sijda and paibos, to raise the sultan above the nobility.',
    },
    {
      q: 'The Chishti Sufi saint whose dargah is at Ajmer is:',
      options: ['Nizamuddin Auliya', 'Baba Farid', 'Bahauddin Zakariya', 'Moinuddin Chishti'],
      answer: 3,
      explain: 'Nizamuddin Auliya is at Delhi and Bahauddin Zakariya was a Suhrawardi saint at Multan.',
    },
    {
      q: 'The Uttaramerur inscription is the standard evidence for which aspect of Chola rule?',
      options: ['Naval expeditions', 'Temple architecture', 'Land revenue assessment', 'Village assemblies'],
      answer: 3,
      explain: 'It records the qualifications and procedure for choosing members of village assembly committees.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between Mahmud of Ghazni and Muhammad Ghori?',
      a: 'Mahmud of Ghazni raided north-western India around seventeen times between roughly 1000 and 1027, took the plunder back to Central Asia and left no administration behind. Muhammad Ghori conquered to stay: after winning the Second Battle of Tarain in 1192, his general Qutbuddin Aibak turned the conquest into the Delhi Sultanate in 1206.',
    },
    {
      q: 'Which are the five dynasties of the Delhi Sultanate?',
      a: 'The Slave or Mamluk dynasty from 1206, the Khaljis from 1290, the Tughlaqs from 1320, the Sayyids from 1414 and the Lodis from 1451 until 1526, when Babur defeated Ibrahim Lodi at Panipat.',
    },
    {
      q: 'What was the iqta system?',
      a: 'Assignments of revenue from a territory granted to nobles instead of a cash salary, in return for maintaining troops. Organised by Iltutmish, it was the financial backbone of the Sultanate. Iqtas were meant to be transferable, which is what prevented them from hardening into hereditary estates.',
    },
    {
      q: 'Why did Alauddin Khalji control market prices?',
      a: 'Because he paid a large standing army in cash rather than through land assignments, and cash wages are only affordable when prices are low. Grain, cloth, horses and slaves were price-fixed, enforced through a market superintendent, and backed by state granaries.',
    },
    {
      q: 'What was the mansabdari system?',
      a: 'Akbar\'s method of ranking officers by two numbers: zat, which fixed personal status and pay, and sawar, which fixed the cavalry to be maintained. Separating the two allowed status and military obligation to be adjusted independently, and kept the nobility a service class dependent on the emperor.',
    },
    {
      q: 'Was the Din-i-Ilahi a new religion?',
      a: 'Not in any mass sense. It was a small order centred on the emperor, proclaimed in 1582, with a handful of adherents drawn from the court. Questions sometimes test exactly this distinction, so describing it as a religion that Akbar founded for his subjects is the wrong answer.',
    },
    {
      q: 'How did the Bhakti and Sufi movements resemble each other?',
      a: 'Both emphasised a direct personal relationship with God over ritual and priestly mediation, both used regional languages rather than Sanskrit or Persian, and both attracted followers across caste and community boundaries. That shared ground is what most questions on the movements test.',
    },
    {
      q: 'What were chauth and sardeshmukhi?',
      a: 'Maratha levies on territory outside their direct control — chauth at roughly a quarter of the revenue and sardeshmukhi at roughly a tenth, the latter claimed as a hereditary right. Together they financed Maratha expansion far beyond the Deccan.',
    },
    {
      q: 'Why did the Mughal empire decline?',
      a: 'Historians point to several causes together: the cost and inconclusiveness of Aurangzeb\'s Deccan wars, a shortage of assignable land relative to the growing number of mansabdars, a run of weak successors after 1707, and sustained Maratha, Sikh and Jat resistance. Nadir Shah\'s sack of Delhi in 1739 revealed how far the centre had already weakened.',
    },
    {
      q: 'How many medieval history questions come in competitive exams?',
      a: 'UPSC Prelims typically carries three to five, weighted towards the Bhakti and Sufi movements and Vijayanagara. SSC CGL Tier 1 has two to four of direct recall, RRB NTPC two to four on Mughal rulers and battles, and state PSC prelims four to eight, weighted towards the regional kingdoms of the state concerned.',
    },
  ],

  related: [
    { label: 'Ancient India', to: '/study-material/history/ancient-india/' },
    { label: 'Modern India', to: '/study-material/history/modern-india/' },
    { label: 'Art & Culture', to: '/study-material/art-culture/' },
    { label: 'Indian Polity', to: '/study-material/polity/' },
    { label: 'Geography', to: '/study-material/geography/' },
    { label: 'All History', to: '/study-material/history/' },
  ],
}
