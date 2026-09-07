/**
 * Literature and Heritage —
 * /study-material/art-culture/literature-heritage/
 *
 * Texts and their authors, philosophical schools and their founders, festivals
 * and crafts by state, and the institutions that protect heritage. The residual
 * art and culture material that the architecture and performing arts pages do
 * not cover, and the block state PSC papers draw on most heavily.
 */
export default {
  subject: 'art-culture',
  subjectName: 'Art & Culture',
  slug: 'literature-heritage',
  title: 'Literature & Heritage',
  seoTitle: 'Indian Literature and Heritage | Texts, Philosophy, Festivals Notes & Practice',
  metaDescription:
    'Complete Indian literature and heritage study material for UPSC, SSC and state exams — Sanskrit and Sangam literature, Bhakti and Persian writing.',
  readMinutes: 25,
  lead: [
    'Everything in this page is a pairing of a name with a work, a school with a founder, a festival with a state, or a craft with a town. That is exactly how it is examined, and it is why the topic looks intimidating and is actually mechanical: nobody is asked to interpret the Upanishads, only to know who is credited with the Arthashastra.',
    'The material runs chronologically through literature, then covers the philosophical schools, and ends with the living heritage — festivals, crafts and the institutions that protect them. State PSC candidates should treat the last two sections as the highest priority, because a state paper will always ask about its own festivals and crafts.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Texts and authors, philosophical schools, and occasionally a craft or a GI tag.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Author with book, festival with state, and the major awards.' },
    { exam: 'State PSC Prelims', count: '4–6 questions', note: 'The state\'s own literature, festivals and crafts carry heavy weight.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Direct recall — who wrote which famous book, which festival belongs where.' },
    { exam: 'Banking and insurance GA', count: '1–2 questions', note: 'Usually an award announcement or a new GI tag.' },
  ],

  contents: [
    { icon: 'book', title: 'Sanskrit and classical texts', sub: 'Vedas to the court poets', href: '#sanskrit' },
    { icon: 'globe', title: 'Sangam and regional literature', sub: 'Tamil, Bhakti and Persian', href: '#regional' },
    { icon: 'doc', title: 'Modern Indian literature', sub: 'Writers, awards and laureates', href: '#modern' },
    { icon: 'search', title: 'Schools of philosophy', sub: 'Orthodox and heterodox', href: '#philosophy' },
    { icon: 'bell', title: 'Festivals and fairs', sub: 'By state and season', href: '#festivals' },
    { icon: 'image', title: 'Crafts and textiles', sub: 'What comes from where', href: '#crafts' },
    { icon: 'target', title: 'Heritage institutions', sub: 'ASI, GI tags and protection', href: '#heritage' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'sanskrit',
      heading: 'Sanskrit and classical texts',
      eyebrow: 'Vedas to the court poets',
      intro:
        'A large body of material reduced, for examination purposes, to a list of texts and the person credited with each. Where authorship is traditional rather than established, that is said.',
      blocks: [
        {
          type: 'table',
          caption: 'The foundational texts',
          head: ['Text or category', 'Content', 'Note'],
          rows: [
            ['The four Vedas', 'Rigveda of hymns, Samaveda of melodies, Yajurveda of sacrificial formulae, Atharvaveda of charms and remedies', 'The Rigveda is the oldest. The Gayatri Mantra is in its third mandala and the Purusha Sukta in the tenth.'],
            ['Brahmanas, Aranyakas and Upanishads', 'Ritual explanation, forest treatises and philosophical speculation respectively', 'The Upanishads are also called Vedanta, the end of the Vedas. Tradition counts 108, of which about a dozen are principal.'],
            ['The six Vedangas', 'Shiksha for phonetics, Kalpa for ritual, Vyakarana for grammar, Nirukta for etymology, Chhanda for metre, Jyotisha for astronomy', 'Auxiliary disciplines needed to use the Vedas correctly.'],
            ['The epics', 'The Ramayana attributed to Valmiki and the Mahabharata to Vyasa', 'The Mahabharata is the longest epic poem in the world and contains the Bhagavad Gita within its Bhishma Parva.'],
            ['The Puranas', 'Eighteen Mahapuranas of cosmology, genealogy and myth', 'The Vishnu, Bhagavata and Matsya Puranas are the ones most often named.'],
            ['Smritis', 'Law books, of which the Manusmriti is the best known', 'Distinguished from shruti, the revealed Vedic literature, as remembered rather than heard.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Scholarly and scientific works',
              'Panini\'s Ashtadhyayi, the grammar of Sanskrit and one of the most rigorous descriptive works produced anywhere in the ancient world. Patanjali\'s Mahabhashya, a commentary on it, and the Yoga Sutras attributed to the same name. Kautilya\'s Arthashastra on statecraft. Charaka\'s Samhita on medicine and Sushruta\'s on surgery. Aryabhata\'s Aryabhatiya, Varahamihira\'s Brihat Samhita, Brahmagupta\'s Brahmasphutasiddhanta and Bhaskara II\'s Siddhanta Shiromani, whose section Lilavati deals with arithmetic.',
            ],
            [
              'Classical drama and poetry',
              'Kalidasa, the greatest of the court poets, wrote the plays Abhijnanashakuntalam, Vikramorvashiyam and Malavikagnimitram, and the poems Meghaduta, Raghuvamsha and Kumarasambhava. Bhasa\'s Swapnavasavadatta, Shudraka\'s Mrichchhakatika, Vishakhadatta\'s Mudrarakshasa on Chandragupta Maurya, and Bhavabhuti\'s Uttararamacharita complete the standard list.',
            ],
            [
              'Court biography',
              'Banabhatta wrote the Harshacharita, a biography of Harshavardhana, and the romance Kadambari. Harisena composed the Allahabad Pillar inscription in praise of Samudragupta. Bilhana wrote the Vikramankadevacharita and Kalhana the Rajatarangini, a chronicle of the kings of Kashmir and one of the few genuinely historical works in Sanskrit.',
            ],
            [
              'Pali and Prakrit',
              'The Buddhist canon is in Pali: the Tripitaka, comprising the Vinaya Pitaka on monastic discipline, the Sutta Pitaka of discourses and the Abhidhamma Pitaka of philosophy. The Jatakas narrate the previous lives of the Buddha. The Jain Agamas are in Prakrit, and Hala\'s Gaha Sattasai is the best known secular Prakrit anthology.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'regional',
      heading: 'Sangam and regional literature',
      eyebrow: 'Tamil, Bhakti and Persian',
      intro:
        'Three distinct bodies of writing, each examined through a short list of names that recur year after year.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Sangam literature',
              'The earliest Tamil literature, produced at academies or sangams traditionally held at Madurai. The Tolkappiyam is a work on grammar and poetics and the oldest surviving Tamil text. The Ettuthogai is a collection of eight anthologies and the Pattuppattu of ten long poems. Poems are classified as akam, on love and the inner life, and puram, on war, kingship and the public world.',
            ],
            [
              'The Tamil epics',
              'Silappadikaram, the Tale of the Anklet, attributed to Ilango Adigal, and Manimekalai by Sattanar are the two great epics of the period. The Thirukkural of Thiruvalluvar, a work of couplets on ethics, polity and love, sits slightly later and is the most widely quoted Tamil text of all.',
            ],
            [
              'Bhakti literature',
              'The Alvars, devoted to Vishnu, and the Nayanars, devoted to Shiva, sang in Tamil from about the sixth century, and the movement spread north over the following centuries. Kabir wrote dohas rejecting ritual and caste; Tulsidas wrote the Ramcharitmanas in Awadhi; Surdas the Sursagar on Krishna; Mirabai devotional songs to Krishna in Rajasthani; Tukaram, Namdev and Jnaneshwar in Marathi within the Varkari tradition; Chaitanya in Bengal; Sankaradeva in Assam; and Basavanna in Kannada, whose vachanas founded the Lingayat tradition.',
            ],
            [
              'Sufi writing',
              'The Sufi orders produced both devotional poetry and prose. Amir Khusrau wrote in Persian and in the emerging Hindavi, and is regarded as a founder of the qawwali. Malik Muhammad Jayasi wrote the Padmavat in Awadhi. The Chishti order, associated with Moinuddin Chishti at Ajmer and Nizamuddin Auliya at Delhi, is the one most often named.',
            ],
            [
              'Persian court literature',
              'Ziauddin Barani wrote the Tarikh-i-Firuz Shahi. Amir Khusrau served several Sultanate rulers. Babur wrote his memoirs, the Baburnama, in Chagatai Turkish, and Gulbadan Begum wrote the Humayun-nama. Abul Fazl wrote the Akbarnama, whose third volume is the Ain-i-Akbari, a detailed account of Akbar\'s administration. Dara Shikoh translated the Upanishads into Persian.',
            ],
            [
              'Urdu poetry',
              'Mir Taqi Mir and Mirza Ghalib are the two names most often asked, both associated with Delhi. Muhammad Iqbal wrote Sare Jahan se Achha as well as the philosophical poetry for which he is better known. The ghazal, the nazm and the marsiya are the principal forms.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'modern',
      heading: 'Modern Indian literature',
      eyebrow: 'Writers, awards and laureates',
      intro:
        'The nineteenth and twentieth centuries, examined chiefly through a list of authors and their best-known works, and through the two major awards.',
      blocks: [
        {
          type: 'table',
          caption: 'Authors and their principal works',
          head: ['Author', 'Language', 'Known for'],
          rows: [
            ['Rabindranath Tagore', 'Bengali', 'Gitanjali, for which he received the Nobel Prize in Literature in 1913 — the first non-European to do so. He wrote both Jana Gana Mana and Amar Sonar Bangla, the national anthems of India and Bangladesh.'],
            ['Bankim Chandra Chattopadhyay', 'Bengali', 'Anandamath, which contains Vande Mataram, the national song. Also Durgeshnandini and Devi Chaudhurani.'],
            ['Munshi Premchand', 'Hindi and Urdu', 'Godan, Gaban, Nirmala and a very large body of short stories; the founder of realist social fiction in Hindi.'],
            ['Subramania Bharati', 'Tamil', 'Nationalist and reformist poetry that transformed modern Tamil verse.'],
            ['Kazi Nazrul Islam', 'Bengali', 'The rebel poet, and the national poet of Bangladesh.'],
            ['Sarojini Naidu', 'English', 'The Golden Threshold and The Bird of Time; called the Nightingale of India, and the first Indian woman to be President of the Congress.'],
            ['R. K. Narayan', 'English', 'Swami and Friends, The Guide, Malgudi Days — the fictional town of Malgudi.'],
            ['Mulk Raj Anand and Raja Rao', 'English', 'Untouchable and Coolie; Kanthapura. With Narayan they form the trio usually named as the founders of Indian writing in English.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Jnanpith Award',
              'The highest literary honour in India, instituted by the Bharatiya Jnanpith trust — a private body, not a government one. It was first awarded in 1965 to G. Sankara Kurup for Malayalam. It is given for lifetime contribution in any of the languages recognised in the Eighth Schedule, together with English.',
            ],
            [
              'The Sahitya Akademi Award',
              'Given annually by the Sahitya Akademi in each of the twenty-four languages it recognises, for a specific book rather than for a body of work. Its Fellowship is the Akademi\'s highest honour. Distinguishing the two awards — one private and lifetime, one official and book-specific — is a standard question.',
            ],
            [
              'Indian Nobel laureates',
              'Rabindranath Tagore in Literature in 1913; C. V. Raman in Physics in 1930; Mother Teresa for Peace in 1979; Amartya Sen in Economics in 1998; and Kailash Satyarthi for Peace in 2014 — these were Indian citizens at the time of the award. Har Gobind Khorana, Subrahmanyan Chandrasekhar, V. S. Naipaul, Venkatraman Ramakrishnan and Abhijit Banerjee are of Indian origin but held other citizenships when honoured, which is precisely the distinction questions test.',
            ],
            [
              'Other honours worth knowing',
              'The Booker Prize has gone to Salman Rushdie, Arundhati Roy, Kiran Desai and Aravind Adiga among writers of Indian origin, and the International Booker recognises translated fiction. The Dadasaheb Phalke Award is India\'s highest honour in cinema. The Bharat Ratna is the highest civilian award. Award winners change annually, so learn the awards and their fields rather than the current recipients.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'philosophy',
      heading: 'Schools of philosophy',
      eyebrow: 'Orthodox and heterodox',
      intro:
        'Indian philosophy divides into schools that accept the authority of the Vedas and schools that do not. Both lists are short, fixed and asked directly.',
      blocks: [
        {
          type: 'table',
          caption: 'The six orthodox schools',
          head: ['School', 'Founder traditionally credited', 'Central idea'],
          rows: [
            ['Samkhya', 'Kapila', 'A dualism of purusha, consciousness, and prakriti, matter. The oldest of the schools, and notable for not requiring a creator god.'],
            ['Yoga', 'Patanjali', 'The practical discipline corresponding to Samkhya metaphysics, set out in the Yoga Sutras with its eight limbs, the ashtanga.'],
            ['Nyaya', 'Gautama or Akshapada', 'Logic and epistemology — the means of valid knowledge, and the analysis of inference and debate.'],
            ['Vaisheshika', 'Kanada', 'An atomistic account of nature: all matter is composed of indivisible atoms combining in fixed ways.'],
            ['Mimamsa', 'Jaimini', 'Interpretation of Vedic ritual injunction; concerned with duty and the correct performance of prescribed action.'],
            ['Vedanta', 'Badarayana', 'The philosophy of the Upanishads, systematised in the Brahma Sutras and developed into several sub-schools.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Vedanta sub-schools',
              'Advaita, non-dualism, propounded by Shankaracharya: the individual self and the ultimate reality are one, and the appearance of separateness is maya. Vishishtadvaita, qualified non-dualism, of Ramanuja. Dvaita, dualism, of Madhvacharya, holding the self and God to be permanently distinct. Dvaitadvaita of Nimbarka and Shuddhadvaita of Vallabhacharya complete the standard list.',
            ],
            [
              'The heterodox schools',
              'Those rejecting Vedic authority: Buddhism, Jainism, the Charvaka or Lokayata school, and the Ajivikas. Charvaka was materialist and denied an afterlife, karma and any authority beyond direct perception, which makes it the standard example of ancient Indian materialism. The Ajivikas, founded by Makkhali Gosala, held a doctrine of strict determinism.',
            ],
            [
              'Jain philosophy',
              'The three jewels — right faith, right knowledge and right conduct. Anekantavada is the doctrine of the many-sidedness of reality and syadvada the associated theory of conditional predication. The five vows are non-violence, truth, non-stealing, non-possession and celibacy, the last added by Mahavira to the four taught by Parshvanatha.',
            ],
            [
              'Buddhist philosophy',
              'The Four Noble Truths and the Eightfold Path. The principal schools are Theravada or Hinayana, Mahayana and Vajrayana. Nagarjuna founded the Madhyamaka school of the middle way and the doctrine of shunyata, emptiness; the Yogachara school held a consciousness-only position.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'festivals',
      heading: 'Festivals and fairs',
      eyebrow: 'By state and season',
      intro:
        'A recall list, and one of the highest-yield items for state PSC candidates, since a state paper invariably asks about its own festivals.',
      blocks: [
        {
          type: 'table',
          caption: 'Festivals and where they belong',
          head: ['Festival', 'State or region', 'Occasion'],
          rows: [
            ['Pongal', 'Tamil Nadu', 'The four-day harvest festival in January, marking the sun\'s northward turn.'],
            ['Onam', 'Kerala', 'The harvest festival commemorating the return of King Mahabali, with the Vallamkali snake boat race and the pookalam floral carpet.'],
            ['Bihu', 'Assam', 'Three Bihus in the year, of which Rongali or Bohag Bihu in April marks the Assamese new year.'],
            ['Baisakhi and Lohri', 'Punjab', 'Baisakhi marks the harvest and the founding of the Khalsa in 1699; Lohri marks the end of winter.'],
            ['Ugadi and Gudi Padwa', 'The Deccan and Maharashtra', 'The lunar new year, celebrated as Ugadi in Karnataka, Telangana and Andhra Pradesh and as Gudi Padwa in Maharashtra.'],
            ['Hornbill Festival', 'Nagaland', 'Held at Kisama each December, bringing together the state\'s tribes — often called the festival of festivals.'],
            ['Losar and Hemis', 'Ladakh and the Himalayan Buddhist belt', 'Losar is the Tibetan new year; the Hemis festival honours Guru Padmasambhava.'],
            ['Chapchar Kut and Wangala', 'Mizoram and Meghalaya', 'Chapchar Kut follows the clearing of jhum fields; Wangala is the Garo harvest festival of the hundred drums.'],
            ['Bonalu and Bathukamma', 'Telangana', 'Bonalu honours the goddess Mahakali; Bathukamma is a floral festival celebrated by women.'],
            ['Thrissur Pooram', 'Kerala', 'A temple festival famous for its caparisoned elephants and percussion ensembles.'],
            ['Rath Yatra', 'Odisha', 'The chariot procession of Jagannath, Balabhadra and Subhadra at Puri.'],
            ['Nuakhai', 'Odisha', 'The festival of the new rice, particularly in western Odisha.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The great fairs',
              'The Kumbh Mela, held in rotation at Prayagraj, Haridwar, Ujjain and Nashik, and inscribed on the UNESCO intangible heritage list — it is described as the largest peaceful gathering of people in the world. The Pushkar Fair in Rajasthan, a camel and livestock fair around the Kartik full moon. The Sonepur Mela in Bihar, historically the largest cattle fair in Asia. The Sammakka Saralamma Jatara in Telangana, one of the largest tribal gatherings in the country.',
            ],
            [
              'Festivals asked as pairs',
              'Makar Sankranti is celebrated across India in January and coincides with Pongal, Lohri, Magh Bihu and Uttarayan. Diwali, Holi, Navratri and Dussehra are pan-Indian but take distinct regional forms — Durga Puja in Bengal, Garba in Gujarat, Ramlila in the north, Mysore Dasara in Karnataka. Questions frequently ask which regional name corresponds to which pan-Indian festival.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'crafts',
      heading: 'Crafts and textiles',
      eyebrow: 'What comes from where',
      intro:
        'Another straight pairing list, and one that overlaps with the geographical indication questions in the heritage section.',
      blocks: [
        {
          type: 'table',
          caption: 'Textiles and their places of origin',
          head: ['Textile or technique', 'Place', 'Character'],
          rows: [
            ['Banarasi silk', 'Varanasi, Uttar Pradesh', 'Heavy brocade with gold and silver zari, traditionally for wedding saris.'],
            ['Kanchipuram silk', 'Tamil Nadu', 'Thick mulberry silk with contrasting borders woven separately and joined.'],
            ['Patola', 'Patan, Gujarat', 'Double ikat, in which both warp and weft are resist-dyed before weaving — among the most technically demanding textiles in the world.'],
            ['Pochampally ikat', 'Telangana', 'Single and double ikat, geometric in pattern, from the Bhoodan Pochampally cluster.'],
            ['Bandhani', 'Gujarat and Rajasthan', 'Tie-and-dye, in which thousands of small points are tied before dyeing.'],
            ['Chanderi and Maheshwari', 'Madhya Pradesh', 'Fine, light cotton-silk weaves with characteristic borders.'],
            ['Muga and Eri silk', 'Assam', 'Muga is a golden wild silk unique to Assam; Eri is spun from cocoons the moth has left.'],
            ['Pashmina and Kani', 'Kashmir', 'Pashmina from the fine undercoat of the Changthangi goat; the Kani shawl is woven on small wooden sticks rather than a shuttle.'],
            ['Phulkari', 'Punjab', 'Dense floral embroidery in silk floss on coarse cotton.'],
            ['Chikankari', 'Lucknow, Uttar Pradesh', 'White-on-white shadow embroidery on fine muslin.'],
            ['Kantha', 'West Bengal', 'Running-stitch embroidery, traditionally on layered old cloth.'],
            ['Paithani', 'Maharashtra', 'Silk sari with a tapestry-woven border and peacock and lotus motifs.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Metal and other crafts',
              'Bidriware from Bidar in Karnataka — silver inlay on a blackened zinc alloy. Dhokra, the lost-wax casting of tribal Chhattisgarh, West Bengal and Odisha, producing figurative brass work. Blue pottery from Jaipur, made from quartz rather than clay. Channapatna lacquered wooden toys from Karnataka and Kondapalli toys from Andhra Pradesh. The Bankura terracotta horse from West Bengal. Meenakari enamelling and Thewa gold work from Rajasthan. Pattachitra scroll painting from Odisha and Bengal.',
            ],
            [
              'Why crafts appear so often',
              'Because each is tied unambiguously to one town or region, which makes an ideal objective question, and because geographical indication registrations bring them into the news. Learning the craft with its town is therefore preparing two sections at once.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'heritage',
      heading: 'Heritage institutions',
      eyebrow: 'ASI, GI tags and protection',
      intro:
        'A short institutional section, and the one place in art and culture where a count genuinely changes and must be looked up.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Archaeological Survey of India',
              'Founded in 1861 under Alexander Cunningham, who is called the father of Indian archaeology. It is responsible for archaeological research and for the protection of centrally protected monuments under the Ancient Monuments and Archaeological Sites and Remains Act, 1958, which also regulates construction in the prohibited and regulated areas around a protected monument. John Marshall, as Director-General, oversaw the excavations that revealed the Indus Valley Civilisation.',
            ],
            [
              'Geographical indications',
              'A geographical indication identifies a good as originating in a particular place, where a given quality or reputation is essentially attributable to that origin. It is registered under the Geographical Indications of Goods Act, 1999, administered from the GI Registry in Chennai. Darjeeling tea was the first Indian registration. The number of registered GIs rises steadily, so the total should be checked rather than memorised — what is asked is usually which product belongs to which state.',
            ],
            [
              'National cultural institutions',
              'The National Museum and the National Archives in New Delhi; the Indian Museum in Kolkata, the oldest museum in India; the Salar Jung Museum in Hyderabad, built on a single family collection; the National Gallery of Modern Art; the Indira Gandhi National Centre for the Arts; and the Anthropological Survey of India, which conducted the People of India project.',
            ],
            [
              'Classical language status',
              'Conferred by the Government of India on languages meeting criteria of antiquity, an independent literary tradition and a body of ancient literature. Tamil was the first to be so designated, followed by Sanskrit and several others, and further languages have been added since — so the current list is a matter to verify rather than memorise. It is a government decision, not a constitutional provision, and is separate from inclusion in the Eighth Schedule.',
            ],
            [
              'World Heritage and intangible heritage',
              'World Heritage Sites are inscribed by UNESCO under the 1972 Convention and may be cultural, natural or mixed. Intangible cultural heritage is listed separately under the 2003 Convention and covers practices, performances and craftsmanship rather than places. Both Indian lists grow, so learn which famous entries are on which list rather than any total.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Which text contains the Bhagavad Gita, and who is traditionally credited with it?',
      steps: [
        'The Gita is not an independent work; it is a section of a larger text.',
        'It appears in the Bhishma Parva of the Mahabharata.',
        'The Mahabharata is traditionally attributed to Vyasa, and it is the longest epic poem in the world.',
      ],
      answer: 'The Mahabharata, attributed to Vyasa.',
    },
    {
      q: 'Who wrote the Ain-i-Akbari, and what is it?',
      steps: [
        'Akbar\'s reign was documented in detail by his court historian.',
        'Abul Fazl wrote the Akbarnama, an account of the reign in three volumes.',
        'The third volume is the Ain-i-Akbari, a systematic description of the administration, revenue system, army and provinces — the single most valuable source for Mughal administration.',
      ],
      answer: 'Abul Fazl — it is the third volume of the Akbarnama.',
    },
    {
      q: 'Which orthodox school of philosophy is atomistic, and who is credited with it?',
      steps: [
        'Samkhya is dualist, Nyaya is logical, Mimamsa is ritual and Vedanta is Upanishadic.',
        'The school holding that all matter consists of indivisible atoms combining in fixed ways is Vaisheshika.',
        'It is traditionally credited to Kanada.',
      ],
      answer: 'Vaisheshika, credited to Kanada.',
    },
    {
      q: 'Distinguish the Jnanpith Award from the Sahitya Akademi Award.',
      steps: [
        'The Jnanpith is conferred by the Bharatiya Jnanpith, a private trust, for lifetime contribution to literature in any Eighth Schedule language or English, and was first awarded in 1965 to G. Sankara Kurup.',
        'The Sahitya Akademi Award is conferred by the Sahitya Akademi, a government-funded body, annually in each of twenty-four languages.',
        'The Akademi award is for a specific book; the Jnanpith is for a body of work.',
      ],
      answer: 'Private and lifetime versus official and book-specific.',
    },
    {
      q: 'Why is Patola described as technically extraordinary?',
      steps: [
        'In ikat, the yarn is resist-dyed in a pattern before it is woven, so the design emerges from the dyeing rather than being applied afterwards.',
        'In single ikat only the warp or only the weft is so treated.',
        'Patola from Patan in Gujarat is double ikat, in which warp and weft are both dyed in advance and must align exactly during weaving — which is why it takes months and why very few weavers can do it.',
      ],
      answer: 'It is double ikat, requiring warp and weft to be pre-dyed and aligned precisely.',
    },
    {
      q: 'Which Indian Nobel laureates held Indian citizenship at the time of their award?',
      steps: [
        'Several laureates are of Indian origin but had taken other citizenships before being honoured — Har Gobind Khorana, Subrahmanyan Chandrasekhar, V. S. Naipaul, Venkatraman Ramakrishnan and Abhijit Banerjee.',
        'Those who were Indian citizens at the time are Rabindranath Tagore in 1913, C. V. Raman in 1930, Mother Teresa in 1979, Amartya Sen in 1998 and Kailash Satyarthi in 2014.',
        'Mother Teresa was born in what is now North Macedonia but had become an Indian citizen.',
      ],
      answer: 'Tagore, Raman, Mother Teresa, Amartya Sen and Kailash Satyarthi.',
    },
    {
      q: 'Which festival marks the Assamese new year, and how many Bihus are there?',
      steps: [
        'Bihu is celebrated three times in the Assamese year.',
        'Rongali or Bohag Bihu falls in April and marks the new year and the onset of sowing.',
        'Kongali or Kati Bihu in autumn is austere, and Bhogali or Magh Bihu in January is the harvest feast.',
      ],
      answer: 'Rongali or Bohag Bihu, in April — one of three Bihus.',
    },
    {
      q: 'Which Indian product received the first geographical indication registration?',
      steps: [
        'A GI identifies a good as originating in a place where a quality or reputation is attributable to that origin, and is registered under the 1999 Act.',
        'The registry began operating in the early 2000s.',
        'Darjeeling tea was the first Indian product registered.',
      ],
      answer: 'Darjeeling tea.',
    },
  ],

  practice: [
    {
      q: 'The Arthashastra is attributed to:',
      options: ['Panini', 'Kalidasa', 'Patanjali', 'Kautilya'],
      answer: 3,
      explain: 'Also known as Chanakya or Vishnugupta, minister to Chandragupta Maurya. Panini wrote the Ashtadhyayi.',
    },
    {
      q: 'The oldest surviving Tamil literary work is:',
      options: ['Thirukkural', 'Manimekalai', 'Silappadikaram', 'Tolkappiyam'],
      answer: 3,
      explain: 'A work on grammar and poetics. Silappadikaram and Manimekalai are the two great Tamil epics.',
    },
    {
      q: 'The Ramcharitmanas was written by:',
      options: ['Kabir', 'Surdas', 'Tulsidas', 'Mirabai'],
      answer: 2,
      explain: 'Written in Awadhi. Surdas wrote the Sursagar and Kabir the dohas.',
    },
    {
      q: 'The Advaita school of Vedanta was propounded by:',
      options: ['Ramanuja', 'Madhvacharya', 'Shankaracharya', 'Vallabhacharya'],
      answer: 2,
      explain: 'Ramanuja propounded Vishishtadvaita and Madhvacharya Dvaita.',
    },
    {
      q: 'Which of these is a heterodox school of Indian philosophy?',
      options: ['Nyaya', 'Vaisheshika', 'Charvaka', 'Mimamsa'],
      answer: 2,
      explain: 'Heterodox schools reject Vedic authority — Buddhism, Jainism, Charvaka and the Ajivikas.',
    },
    {
      q: 'Rabindranath Tagore received the Nobel Prize in Literature in:',
      options: ['1901', '1913', '1920', '1930'],
      answer: 1,
      explain: 'For Gitanjali. He was the first non-European to receive the prize in Literature.',
    },
    {
      q: 'The first Jnanpith Award was given in 1965 to a writer in:',
      options: ['Bengali', 'Hindi', 'Malayalam', 'Kannada'],
      answer: 2,
      explain: 'G. Sankara Kurup received it for Malayalam.',
    },
    {
      q: 'Bidriware comes from:',
      options: ['Bidar in Karnataka', 'Bikaner in Rajasthan', 'Bhadohi in Uttar Pradesh', 'Bishnupur in West Bengal'],
      answer: 0,
      explain: 'Silver inlay on a blackened zinc alloy, named after the town of Bidar.',
    },
    {
      q: 'Patola double ikat is woven at:',
      options: ['Pochampally', 'Kanchipuram', 'Paithan', 'Patan'],
      answer: 3,
      explain: 'In Gujarat. Both warp and weft are resist-dyed before weaving, which is what makes it double ikat.',
    },
    {
      q: 'Onam is the harvest festival of:',
      options: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh'],
      answer: 2,
      explain: 'It commemorates the return of King Mahabali and features the Vallamkali boat race and the pookalam.',
    },
    {
      q: 'The Hornbill Festival is celebrated in:',
      options: ['Nagaland', 'Mizoram', 'Manipur', 'Arunachal Pradesh'],
      answer: 0,
      explain: 'Held at Kisama each December and known as the festival of festivals.',
    },
    {
      q: 'The Archaeological Survey of India was founded in 1861 under:',
      options: ['John Marshall', 'Alexander Cunningham', 'Mortimer Wheeler', 'James Prinsep'],
      answer: 1,
      explain: 'Cunningham is called the father of Indian archaeology. Marshall later oversaw the Indus Valley excavations.',
    },
    {
      q: 'The Rajatarangini, a chronicle of the kings of Kashmir, was written by:',
      options: ['Bilhana', 'Kalhana', 'Banabhatta', 'Harisena'],
      answer: 1,
      explain: 'It is among the few works in Sanskrit with a genuinely historical intent.',
    },
    {
      q: 'The Tripitaka is the canonical literature of:',
      options: ['Jainism', 'Buddhism', 'The Ajivikas', 'Vedanta'],
      answer: 1,
      explain: 'In Pali, comprising the Vinaya, Sutta and Abhidhamma Pitakas. The Jain canon is the Agamas, in Prakrit.',
    },
    {
      q: 'Chikankari embroidery is associated with:',
      options: ['Lucknow', 'Jaipur', 'Kutch', 'Bhagalpur'],
      answer: 0,
      explain: 'White-on-white shadow embroidery on fine muslin. Phulkari belongs to Punjab and Kantha to Bengal.',
    },
    {
      q: 'Vande Mataram appears in which novel?',
      options: ['Devi Chaudhurani', 'Anandamath', 'Durgeshnandini', 'Godan'],
      answer: 1,
      explain: 'Written by Bankim Chandra Chattopadhyay. Godan is by Premchand.',
    },
  ],

  faqs: [
    {
      q: 'How much of this topic actually needs to be memorised?',
      a: 'The pairings do — author with work, school with founder, festival with state, craft with town. The content of the texts does not. No general studies paper has ever asked what the Nyaya theory of inference actually says; papers ask who founded Nyaya. Recognising that difference cuts the workload by an order of magnitude.',
    },
    {
      q: 'What is the difference between shruti and smriti?',
      a: 'Shruti means "that which is heard" and covers the Vedas, Brahmanas, Aranyakas and Upanishads, regarded in the tradition as revealed rather than composed. Smriti means "that which is remembered" and covers the epics, Puranas and law books such as the Manusmriti, regarded as of human authorship and therefore of lesser authority.',
    },
    {
      q: 'Which philosophical schools are orthodox and which heterodox?',
      a: 'The distinction rests solely on whether the school accepts the authority of the Vedas, not on whether it believes in a god. The six orthodox schools are Samkhya, Yoga, Nyaya, Vaisheshika, Mimamsa and Vedanta. The heterodox are Buddhism, Jainism, Charvaka and the Ajivikas. Samkhya is orthodox despite not requiring a creator god, which catches candidates out.',
    },
    {
      q: 'Is the Jnanpith a government award?',
      a: 'No. It is conferred by the Bharatiya Jnanpith, a private trust, and is the highest literary honour in India for lifetime contribution. The Sahitya Akademi Award is the official one, given annually in each of twenty-four recognised languages for a specific book. Both appear in the same option list, which is why the difference is worth stating.',
    },
    {
      q: 'Which Nobel laureates count as Indian?',
      a: 'Those who were Indian citizens at the time of the award: Tagore, C. V. Raman, Mother Teresa, Amartya Sen and Kailash Satyarthi. Khorana, Chandrasekhar, Naipaul, Ramakrishnan and Banerjee were of Indian origin but held other citizenships when honoured. Question papers use exactly this distinction, so read whether the question says "Indian" or "of Indian origin".',
    },
    {
      q: 'What is a geographical indication, and how is it different from a trademark?',
      a: 'A GI identifies a good as originating in a particular place where a given quality or reputation is essentially attributable to that origin — Darjeeling tea, Banarasi silk, Mysore silk. It belongs collectively to producers in that region rather than to any one firm. A trademark identifies the goods of a particular enterprise and is owned by it. The difference in ownership is the key point.',
    },
    {
      q: 'Which counts in this topic change?',
      a: 'The number of registered geographical indications, the number of languages with classical status, the list of UNESCO inscriptions, and the annual award winners. Everything else — texts and authors, philosophical schools, festivals, crafts and their regions — is fixed and safe to learn permanently.',
    },
    {
      q: 'How should a state PSC candidate approach this?',
      a: 'By inverting the priority. A state paper will always carry questions on that state\'s own literature, festivals, crafts, fairs and monuments, and often several of them. Build a page of your own state\'s entries in each of these categories first, then learn the national list. For UPSC the priority runs the other way.',
    },
    {
      q: 'Why is Sanskrit literature examined more than Persian or regional literature?',
      a: 'Partly volume of famous names, partly the connection to the ancient history syllabus, where the same texts appear as historical sources. But Persian court chronicles are asked in medieval history, Bhakti writing in both history and culture, and regional literature heavily in state papers — so the imbalance is smaller than it appears once the whole syllabus is counted.',
    },
    {
      q: 'How many questions come from literature and heritage?',
      a: 'Two to four in UPSC Prelims within the art and culture block, two to three in SSC CGL Tier 1, four to six in state PSC prelims where the state\'s own material adds weight, two to three in RRB NTPC, and one to two in banking general awareness, usually an award or a new GI registration.',
    },
  ],

  related: [
    { label: 'Architecture & Sculpture', to: '/study-material/art-culture/architecture/' },
    { label: 'Performing Arts', to: '/study-material/art-culture/performing-arts/' },
    { label: 'Ancient India', to: '/study-material/history/ancient-india/' },
    { label: 'General Knowledge', to: '/study-material/general-knowledge/' },
    { label: 'All Art & Culture', to: '/study-material/art-culture/' },
  ],
}
