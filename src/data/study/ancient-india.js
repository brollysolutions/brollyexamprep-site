/**
 * Ancient India — /study-material/history/ancient-india/
 *
 * Factual rather than method-driven, so the organising principle is different
 * from the reasoning and English pages: facts are grouped the way examiners
 * ask them — site with feature, ruler with achievement, text with author —
 * because that pairing is what a question actually tests. Dates that scholars
 * dispute are given as ranges and flagged as such.
 */
export default {
  subject: 'history',
  subjectName: 'History',
  slug: 'ancient-india',
  title: 'Ancient India',
  seoTitle: 'Ancient India History for Competitive Exams | Notes, Dates & Practice',
  metaDescription:
    'Complete Ancient India study material for UPSC, SSC and state exams — sources, the Indus Valley Civilisation, the Vedic age, Buddhism and Jainism, the Mahajanapadas, the Mauryan empire, post-Mauryan dynasties, the Sangam age and the Gupta period, with solved examples and practice questions.',
  readMinutes: 24,
  lead: [
    'Ancient India is the part of the syllabus where candidates read the most and score the least, because it is usually studied as a narrative and tested as a set of pairings. Almost no question asks you to explain the Harappan economy; a great many ask which site had the dockyard, who deciphered the Ashokan edicts, and which Veda contains the Gayatri Mantra.',
    'This page is therefore organised around those pairings — site with feature, ruler with achievement, text with author, council with patron — and gives the narrative only as much space as it needs to hold the pairings together. Where scholars genuinely disagree on a date, it is given as a range and said so, rather than presented as a fact you can be caught out on.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '3–6 questions', note: 'Often overlapping with art and culture — Harappan features, Buddhism and the Mauryas.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–3 questions', note: 'Direct pairings: site and feature, ruler and title, text and author.' },
    { exam: 'State PSC Prelims', count: '3–6 questions', note: 'Usually more, when the state has significant ancient sites.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Straight factual recall from the Indus Valley and the Mauryas.' },
    { exam: 'CTET / Teaching (Social Studies)', count: '2–4 questions', note: 'NCERT-level questions on the Harappan civilisation and the Vedic age.' },
  ],

  contents: [
    { icon: 'search', title: 'Sources', sub: 'How ancient India is reconstructed', href: '#sources' },
    { icon: 'layers', title: 'The Indus Valley Civilisation', sub: 'Sites, features and decline', href: '#indus' },
    { icon: 'book', title: 'The Vedic age', sub: 'Four Vedas and what changed after', href: '#vedic' },
    { icon: 'globe', title: 'Buddhism and Jainism', sub: 'The sixth-century BCE ferment', href: '#religions' },
    { icon: 'target', title: 'Magadha and the Mauryas', sub: 'From Bimbisara to Ashoka', href: '#mauryan' },
    { icon: 'refresh', title: 'The post-Mauryan centuries', sub: 'Shungas, Kushanas and Satavahanas', href: '#post-mauryan' },
    { icon: 'user', title: 'The Sangam age', sub: 'The three Tamil kingdoms', href: '#sangam' },
    { icon: 'chart', title: 'The Guptas and Harsha', sub: 'The classical age and after', href: '#gupta' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'sources',
      heading: 'Sources',
      eyebrow: 'Where the facts come from',
      intro:
        'A recurring question type asks which source tells us what. Learning the sources first also explains why some periods are dated precisely and others only within a century or two.',
      blocks: [
        {
          type: 'table',
          caption: 'The three families of sources',
          head: ['Source type', 'Examples', 'What it establishes'],
          rows: [
            ['Archaeological', 'Excavated sites, pottery, seals, coins, monuments', 'Material life — town planning, trade, technology. The only source for the Harappans, whose script is undeciphered.'],
            ['Inscriptions', 'Ashokan edicts, the Junagadh inscription, the Allahabad Pillar', 'Firm dates and royal claims. Usually the most reliable evidence for a reign.'],
            ['Literary — religious', 'Vedas, Upanishads, Tripitaka, Jain Angas, Puranas', 'Ideas, society and ritual, rarely precise chronology.'],
            ['Literary — secular', 'Arthashastra, Mudrarakshasa, Harshacharita, Sangam poetry', 'Administration and court life, written with a purpose you must allow for.'],
            ['Foreign accounts', "Megasthenes' Indica, Fa-Hien, Hiuen Tsang, Ptolemy", 'An outside view, valuable for dating because it can be cross-checked against foreign records.'],
          ],
        },
        {
          type: 'note',
          title: 'Why the Ashokan edicts matter beyond their content',
          text:
            'They were deciphered by James Prinsep in 1837, and that decipherment of the Brahmi script is what made the rest of early Indian epigraphy readable. Most edicts are in Brahmi; those in the north-west use Kharosthi, and the inscriptions at Kandahar are in Greek and Aramaic. Questions on the edicts ask about the decipherer, the scripts and the Kalinga war reference in the thirteenth Rock Edict.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'indus',
      heading: 'The Indus Valley Civilisation',
      eyebrow: 'c. 2600–1900 BCE (mature phase)',
      intro:
        'A Bronze Age urban civilisation, contemporaneous with Mesopotamia and Egypt, and the single most heavily examined topic in ancient Indian history. Nearly every question is a site paired with its distinctive feature.',
      blocks: [
        {
          type: 'table',
          caption: 'Sites and the feature each is asked about',
          head: ['Site', 'River / location', 'What it is known for'],
          rows: [
            ['Harappa', 'Ravi, Punjab (Pakistan)', 'Excavated 1921 by Daya Ram Sahni; granaries and cemetery R-37. The civilisation is named after it.'],
            ['Mohenjodaro', 'Indus, Sindh (Pakistan)', 'Excavated 1922 by R. D. Banerji; the Great Bath, the Great Granary, the bronze Dancing Girl and the Pashupati seal.'],
            ['Kalibangan', 'Ghaggar, Rajasthan', 'A ploughed field and fire altars — evidence of ritual and of agriculture.'],
            ['Lothal', 'Bhogava, Gujarat', 'The dockyard — the site is the standard answer on maritime trade.'],
            ['Dholavira', 'Khadir Bet, Gujarat', 'Elaborate water reservoirs and the large signboard; a UNESCO World Heritage Site since 2021.'],
            ['Rakhigarhi', 'Haryana', 'The largest Harappan site in India.'],
            ['Chanhudaro', 'Sindh (Pakistan)', 'The only major site with no citadel; a bead-making centre.'],
            ['Ropar (Rupnagar)', 'Sutlej, Punjab (India)', 'The first site excavated in India after independence.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Town planning',
              'A grid layout with streets meeting at right angles, a raised citadel to the west and a lower town to the east, houses of standardised burnt brick, and a covered drainage system — the feature most often singled out as the civilisation\'s distinguishing achievement.',
            ],
            [
              'The script',
              'Undeciphered. It is written boustrophedon — right to left on one line and left to right on the next. Because it cannot be read, everything we know about the Harappans is archaeological.',
            ],
            [
              'Economy and trade',
              'Agriculture with wheat and barley, standardised weights in multiples of sixteen, and trade with Mesopotamia, which knew the region as Meluhha. Cotton was cultivated — the Greeks later called it sindon, from Sindh.',
            ],
            [
              'What is absent',
              'No temples have been identified with certainty, no monumental royal tombs, and no clear evidence of a standing army. Iron was unknown; this is a Bronze Age culture.',
            ],
            [
              'Decline, c. 1900 BCE',
              'No single explanation is accepted. Increasing aridity and the shifting or drying of rivers are the most widely supported; flooding, deforestation and a decline in trade are also cited. The older "Aryan invasion" explanation has been largely abandoned by scholars.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'vedic',
      heading: 'The Vedic age',
      eyebrow: 'c. 1500–600 BCE',
      intro:
        'The Vedic period is examined almost entirely through its texts. Learn which Veda contains what, and the difference between the early and later phases.',
      blocks: [
        {
          type: 'table',
          caption: 'The four Vedas',
          head: ['Veda', 'Content', 'The detail examiners ask'],
          rows: [
            ['Rigveda', 'Hymns to deities, in ten mandalas', 'The oldest. Mandalas II–VII are the family books and the earliest. The Gayatri Mantra is in Mandala III; the Purusha Sukta, the first mention of the four varnas, is in Mandala X.'],
            ['Samaveda', 'Melodies for chanting the hymns', 'Regarded as the root of Indian classical music.'],
            ['Yajurveda', 'Sacrificial formulae, part prose', 'The only Veda with substantial prose; divided into Shukla and Krishna recensions.'],
            ['Atharvaveda', 'Charms, spells and remedies', 'The last to be accepted as a Veda; a source for early medicine and popular belief.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The later Vedic literature',
              'Each Veda has Brahmanas (ritual explanations), Aranyakas (forest treatises) and Upanishads (philosophy, also called Vedanta because they come at the end of the Vedas). The national motto Satyameva Jayate is taken from the Mundaka Upanishad.',
            ],
            [
              'Early Vedic society, c. 1500–1000 BCE',
              'Pastoral and tribal, wealth counted in cattle, the jana led by a rajan advised by the sabha and samiti. Varna existed but was not rigid or hereditary in the way it later became.',
            ],
            [
              'Later Vedic society, c. 1000–600 BCE',
              'Iron in use — the texts call it krishna ayas, dark metal — settled agriculture, Painted Grey Ware pottery, larger kingdoms such as Kuru and Panchala, and a hardened varna order with elaborate royal sacrifices such as the ashvamedha and rajasuya.',
            ],
            [
              'The six Vedangas',
              'Shiksha (phonetics), Kalpa (ritual), Vyakarana (grammar), Nirukta (etymology), Chhanda (metre) and Jyotisha (astronomy) — the auxiliary disciplines developed to preserve and use the Vedas.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'religions',
      heading: 'Buddhism and Jainism',
      eyebrow: 'The sixth-century BCE ferment',
      intro:
        'Both movements arose in the eastern Gangetic plain against a background of ritual expense, the rigidity of varna and the growth of towns and trade. Questions concentrate on life events, doctrines and councils.',
      blocks: [
        {
          type: 'table',
          caption: 'The two founders, side by side',
          head: ['', 'Buddha', 'Mahavira'],
          rows: [
            ['Personal name', 'Siddhartha Gautama', 'Vardhamana'],
            ['Traditional dates', 'c. 563–483 BCE (some scholars prefer c. 480–400 BCE)', 'c. 540–468 BCE'],
            ['Birthplace', 'Lumbini, in present-day Nepal', 'Kundagrama, near Vaishali in Bihar'],
            ['Place of death', 'Kushinagar', 'Pavapuri'],
            ['Key event', 'Enlightenment at Bodh Gaya under a peepal tree', 'Kaivalya at Jrimbhikagrama after twelve years of austerity'],
            ['First sermon', 'Sarnath — the Dharmachakra Pravartana', 'Preached in Prakrit so that ordinary people could follow'],
            ['Position in tradition', 'Founder of Buddhism', 'The twenty-fourth and last Tirthankara, not the founder'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Buddhist doctrine',
              'The Four Noble Truths — that there is suffering, that it has a cause, that it can cease, and that a path leads to its cessation — together with the Eightfold Path and the Triratna of Buddha, Dhamma and Sangha. The canon is the Tripitaka: Vinaya, Sutta and Abhidhamma Pitakas, in Pali.',
            ],
            [
              'Jain doctrine',
              'The Triratna of right faith, right knowledge and right conduct, and five vows: non-violence, truth, non-stealing, non-possession and celibacy. The first four come from Parshvanatha, the twenty-third Tirthankara; Mahavira added celibacy. The first Tirthankara is Rishabhanatha.',
            ],
            [
              'The four Buddhist councils',
              'First at Rajgriha under Ajatashatru, presided over by Mahakassapa. Second at Vaishali under Kalasoka. Third at Pataliputra under Ashoka, presided over by Moggaliputta Tissa. Fourth in Kashmir under Kanishka, associated with Vasumitra and Ashvaghosha, after which the Hinayana and Mahayana schools separated.',
            ],
            [
              'The Jain councils and schism',
              'The first council at Pataliputra under Sthulabhadra, the second at Vallabhi in the sixth century CE under Devardhi Kshamasramana, where the Jain canon was written down. The tradition divided into the Svetambara, who wear white, and the Digambara, who reject clothing.',
            ],
            [
              'The sixteen Mahajanapadas',
              'Listed in the Buddhist Anguttara Nikaya. Magadha eventually absorbed the rest, helped by fertile land, iron ore near Rajgir, control of the Ganga trade routes and a succession of capable and ruthless rulers.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'mauryan',
      heading: 'Magadha and the Mauryas',
      eyebrow: 'c. 322–185 BCE',
      intro:
        'India\'s first empire of subcontinental scale, and the best-documented ancient polity because of its inscriptions, its treatise on statecraft and a Greek ambassador who wrote about it.',
      blocks: [
        {
          type: 'table',
          caption: 'The rulers and what each is asked about',
          head: ['Ruler', 'Approximate reign', 'Associated with'],
          rows: [
            ['Bimbisara (Haryanka)', 'c. 544–492 BCE', 'Expanded Magadha by marriage alliances and by annexing Anga.'],
            ['Ajatashatru', 'c. 492–460 BCE', 'Patron of the First Buddhist Council; fortified Rajgriha.'],
            ['Udayin', 'c. 460–444 BCE', 'Founded Pataliputra at the confluence of the Ganga and the Son.'],
            ['Mahapadma Nanda', 'fourth century BCE', 'Built a powerful Nanda empire; his successor Dhana Nanda was overthrown.'],
            ['Chandragupta Maurya', 'c. 322–298 BCE', 'Founded the Mauryan empire with Chanakya; defeated Seleucus Nicator around 305 BCE; received Megasthenes at his court.'],
            ['Bindusara', 'c. 298–273 BCE', 'Titled Amitraghata, the slayer of foes; received the Greek envoy Deimachus.'],
            ['Ashoka', 'c. 268–232 BCE', 'The Kalinga war around 261 BCE, the edicts, and the spread of Buddhism.'],
            ['Brihadratha', 'until c. 185 BCE', 'The last Mauryan, killed by his commander Pushyamitra Shunga.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Arthashastra',
              'Attributed to Kautilya, also called Chanakya and Vishnugupta. A manual of statecraft, revenue and espionage rather than a history, and the principal source on Mauryan administration. Its surviving form may be later than the Mauryan period, which is why historians use it with care.',
            ],
            [
              "Megasthenes' Indica",
              'The Seleucid ambassador\'s account, surviving only in quotations by later Greek writers. It describes the capital, the administration and a sevenfold division of society — a scheme historians treat as an outsider\'s simplification.',
            ],
            [
              'The Kalinga war',
              'Fought around 261 BCE and described by Ashoka himself in the thirteenth Rock Edict, the only edict to mention it. The remorse it expresses is the standard explanation for his adoption of Dhamma.',
            ],
            [
              "Ashoka's Dhamma",
              'A public ethic rather than a sect — non-violence, respect for elders and for other traditions, and welfare works. It was propagated by Dhamma Mahamatras, officers appointed for the purpose.',
            ],
            [
              'The Lion Capital',
              'From the Ashokan pillar at Sarnath, adopted as the State Emblem of India. The words Satyameva Jayate beneath it are taken not from Ashoka but from the Mundaka Upanishad.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'post-mauryan',
      heading: 'The post-Mauryan centuries',
      eyebrow: 'c. 185 BCE – 300 CE',
      intro:
        'A period of many kingdoms and heavy foreign contact. Questions here are almost always about firsts — the first gold coins, the first long Sanskrit inscription, the era that begins in a particular year.',
      blocks: [
        {
          type: 'table',
          caption: 'The dynasties and their examinable firsts',
          head: ['Dynasty or ruler', 'Region', 'What it is known for'],
          rows: [
            ['Shunga (Pushyamitra Shunga)', 'Magadha', 'Succeeded the Mauryas in 185 BCE; the Bharhut stupa railing belongs to this period.'],
            ['Indo-Greeks (Menander)', 'North-west', 'The first rulers in India to issue gold coins and to place royal portraits on coins. Menander\'s dialogue with the monk Nagasena is the Milindapanho.'],
            ['Shakas (Rudradaman I)', 'Western India', 'The Junagadh rock inscription — the first long inscription in chaste Sanskrit — records his repair of the Sudarshana lake.'],
            ['Kushanas (Kanishka)', 'North India and Central Asia', 'The Saka era beginning in 78 CE is dated from his accession; he convened the Fourth Buddhist Council and patronised Ashvaghosha and the physician Charaka.'],
            ['Satavahanas (Gautamiputra Satakarni)', 'Deccan', 'Used Prakrit rather than Sanskrit, and were the first Indian rulers to issue lead coins in quantity.'],
          ],
        },
        {
          type: 'note',
          title: 'Gandhara and Mathura',
          text:
            'Two schools of sculpture flourished under the Kushanas and are constantly compared. The Gandhara school used grey schist and drew heavily on Greco-Roman models, producing a Buddha with wavy hair and realistic drapery. The Mathura school used spotted red sandstone and worked in an indigenous idiom, and it produced images of Jain and Brahmanical figures as well as of the Buddha.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'sangam',
      heading: 'The Sangam age',
      eyebrow: 'c. 300 BCE – 300 CE',
      intro:
        'The earliest layer of Tamil literature and history, examined through the three kingdoms, their emblems and capitals, and the major texts.',
      blocks: [
        {
          type: 'table',
          caption: 'The three Tamil kingdoms',
          head: ['Kingdom', 'Capital', 'Emblem'],
          rows: [
            ['Chera', 'Vanji, with the port of Muziris', 'Bow'],
            ['Chola', 'Uraiyur, with the port of Puhar (Kaveripattinam)', 'Tiger'],
            ['Pandya', 'Madurai, with the port of Korkai', 'Fish'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Sangams',
              'Tradition records three literary assemblies held under Pandya patronage at Madurai. The literature that survives is largely from the third Sangam.',
            ],
            [
              'Tolkappiyam',
              'The oldest surviving Tamil grammar, attributed to Tolkappiyar, and a source on early Tamil society as well as on language.',
            ],
            [
              'Thirukkural',
              'A work on ethics, polity and love by Thiruvalluvar, composed in couplets and among the most widely quoted texts in Tamil.',
            ],
            [
              'The twin epics',
              'Silappadikaram by Ilango Adigal, on Kannagi and the anklet, and Manimekalai by Sattanar, its Buddhist sequel. They are usually asked as a pair with their authors.',
            ],
            [
              'Trade with Rome',
              'Sangam poems and Roman finds both attest to a brisk trade in pepper, pearls and textiles, paid for in Roman gold — a favourite question because the archaeology and the literature agree.',
            ],
          ],
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'gupta',
      heading: 'The Guptas and Harsha',
      eyebrow: 'c. 319–647 CE',
      intro:
        'Conventionally called the classical or golden age, chiefly for its achievements in mathematics, astronomy, Sanskrit literature and temple architecture. The label is contested by historians who point to growing social rigidity, but the achievements themselves are what get examined.',
      blocks: [
        {
          type: 'table',
          caption: 'The rulers',
          head: ['Ruler', 'Reign', 'Associated with'],
          rows: [
            ['Chandragupta I', 'c. 319–335 CE', 'The Gupta era is dated from 319–320 CE; married the Lichchhavi princess Kumaradevi.'],
            ['Samudragupta', 'c. 335–375 CE', 'Called the Indian Napoleon by V. A. Smith; his conquests are recorded in the Allahabad Pillar inscription composed by Harisena.'],
            ['Chandragupta II (Vikramaditya)', 'c. 375–415 CE', 'Defeated the Shakas of western India; the Chinese pilgrim Fa-Hien visited during his reign; associated with the nine gems of his court.'],
            ['Kumaragupta I', 'c. 415–455 CE', 'Credited with founding the monastery at Nalanda.'],
            ['Skandagupta', 'c. 455–467 CE', 'Repelled early Huna invasions; the Junagadh inscription records his repair of the Sudarshana lake.'],
            ['Harshavardhana', '606–647 CE', 'Of the Pushyabhuti dynasty, ruling from Kanauj; his biography Harshacharita was written by Banabhatta and Hiuen Tsang visited his court.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Mathematics and astronomy',
              'Aryabhata composed the Aryabhatiya in 499 CE, giving a value for pi, treating the earth as rotating on its axis and explaining eclipses naturally. Varahamihira wrote the Brihat Samhita, and Brahmagupta worked on zero as a number in its own right.',
            ],
            [
              'Sanskrit literature',
              'Kalidasa is the central figure — Abhijnanashakuntalam, Meghaduta, Raghuvamsha and Kumarasambhava. Vishakhadatta wrote Mudrarakshasa, on Chandragupta Maurya and Chanakya, and Shudraka the Mrichchhakatika.',
            ],
            [
              'Art and architecture',
              'The Nagara temple style takes shape, with the Dashavatara temple at Deogarh as a standard example. The finest Ajanta paintings belong to this period, and the iron pillar now at Mehrauli demonstrates the metallurgy of the age.',
            ],
            [
              'Harsha and the end of the period',
              'Harsha built the last large north Indian empire before the Turkish invasions, but was checked in the south by the Chalukya ruler Pulakeshin II on the banks of the Narmada. After his death without an heir, north India fragmented again.',
            ],
            [
              'Why "golden age" is disputed',
              'Land grants to officials and temples spread, which historians read as the beginning of Indian feudalism; the position of women and of shudras deteriorated in the law books of the period. Exams occasionally ask for this qualification rather than for the praise.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Which Indus Valley site is associated with a dockyard, and what does it tell us?',
      steps: [
        'Recall the site-and-feature pairings: Mohenjodaro has the Great Bath, Kalibangan the ploughed field, Dholavira the reservoirs.',
        'The dockyard belongs to Lothal, in Gujarat on the Bhogava.',
        'It is the principal archaeological evidence for Harappan maritime trade, which is corroborated by Mesopotamian references to Meluhha.',
      ],
      answer: 'Lothal — evidence of seaborne trade with West Asia.',
    },
    {
      q: 'Who deciphered the Ashokan inscriptions, and why does it matter?',
      steps: [
        'The edicts had been known for centuries but could not be read.',
        'James Prinsep deciphered the Brahmi script in 1837.',
        'Because most early Indian inscriptions are in Brahmi, that decipherment opened the whole field of early Indian epigraphy — not just Ashoka.',
      ],
      answer: 'James Prinsep, in 1837.',
    },
    {
      q: 'In which Veda is the Gayatri Mantra found, and where else does that Veda matter?',
      steps: [
        'The Gayatri Mantra is in Mandala III of the Rigveda.',
        'The same text carries the Purusha Sukta in Mandala X, the earliest mention of the four varnas.',
        'Distinguish it from Samaveda, the source of musical chant, and Atharvaveda, the source of charms and remedies.',
      ],
      answer: 'The Rigveda.',
    },
    {
      q: 'Which Buddhist council was held under Kanishka, and what followed from it?',
      steps: [
        'Run the four councils in order: Rajgriha under Ajatashatru, Vaishali under Kalasoka, Pataliputra under Ashoka.',
        'The fourth was held in Kashmir under Kanishka, associated with Vasumitra and Ashvaghosha.',
        'It is the council after which the Hinayana and Mahayana schools formally separated.',
      ],
      answer: 'The Fourth Buddhist Council.',
    },
    {
      q: 'Who composed the Allahabad Pillar inscription and about whom?',
      steps: [
        'The inscription is a prashasti, a eulogy, describing extensive military campaigns.',
        'Its subject is Samudragupta, whom V. A. Smith called the Indian Napoleon.',
        'Its author was Harisena, his court poet — not to be confused with Banabhatta, who wrote about Harsha.',
      ],
      answer: 'Harisena, in praise of Samudragupta.',
    },
    {
      q: 'Which Harappan site is the largest in India, and which is the largest overall?',
      steps: [
        'Several of the biggest sites — Harappa and Mohenjodaro among them — lie in present-day Pakistan.',
        'Within India, the largest known site is Rakhigarhi in Haryana.',
        'Dholavira, also large and in Gujarat, is asked about instead for its water reservoirs and its signboard.',
      ],
      answer: 'Rakhigarhi, in Haryana.',
    },
    {
      q: 'Distinguish the emblems of the three Sangam kingdoms.',
      steps: [
        'Chera, on the western coast with the port of Muziris, used the bow.',
        'Chola, in the Kaveri delta with Uraiyur and Puhar, used the tiger.',
        'Pandya, ruling from Madurai with the port of Korkai, used the fish.',
      ],
      answer: 'Chera the bow, Chola the tiger, Pandya the fish.',
    },
    {
      q: 'Which ruler checked Harshavardhana, and where?',
      steps: [
        'Harsha ruled north India from Kanauj in the seventh century and expanded southwards.',
        'He was stopped by the Chalukya ruler of Badami.',
        'The encounter is placed on the banks of the Narmada, which became the effective limit of his empire.',
      ],
      answer: 'Pulakeshin II, on the Narmada.',
    },
    {
      q: 'Which Chinese pilgrims visited India, and under which rulers?',
      steps: [
        'Fa-Hien travelled during the reign of Chandragupta II, in the early fifth century.',
        'Hiuen Tsang came in the seventh century, during the reign of Harshavardhana.',
        'I-Tsing came slightly later. Megasthenes is not a pilgrim at all but a Greek ambassador at the Mauryan court.',
      ],
      answer: 'Fa-Hien under Chandragupta II; Hiuen Tsang under Harsha.',
    },
    {
      q: 'What distinguishes the Gandhara school of sculpture from the Mathura school?',
      steps: [
        'Both flourished under the Kushanas and both produced images of the Buddha.',
        'Gandhara used grey schist and Greco-Roman models — wavy hair, realistic folds of drapery.',
        'Mathura used spotted red sandstone in an indigenous idiom, and also produced Jain and Brahmanical images.',
      ],
      answer: 'Material and idiom — grey schist and Greco-Roman at Gandhara, red sandstone and indigenous at Mathura.',
    },
  ],

  practice: [
    {
      q: 'The Indus Valley site of Lothal is known for its:',
      options: ['Dockyard', 'Great Bath', 'Ploughed field', 'Water reservoirs'],
      answer: 0,
      explain: 'Lothal in Gujarat has the dockyard. The Great Bath is at Mohenjodaro, the ploughed field at Kalibangan and the reservoirs at Dholavira.',
    },
    {
      q: 'The Ashokan inscriptions were deciphered in 1837 by:',
      options: ['Alexander Cunningham', 'James Prinsep', 'John Marshall', 'Mortimer Wheeler'],
      answer: 1,
      explain: 'Prinsep\'s decipherment of Brahmi opened up early Indian epigraphy generally, not only the Ashokan edicts.',
    },
    {
      q: 'The Gayatri Mantra occurs in the:',
      options: ['Samaveda', 'Yajurveda', 'Rigveda', 'Atharvaveda'],
      answer: 2,
      explain: 'It appears in Mandala III of the Rigveda, the same text whose Mandala X contains the Purusha Sukta.',
    },
    {
      q: 'The Fourth Buddhist Council was convened during the reign of:',
      options: ['Ashoka', 'Ajatashatru', 'Kalasoka', 'Kanishka'],
      answer: 3,
      explain: 'It was held in Kashmir under Kanishka, and the Hinayana and Mahayana schools separated after it.',
    },
    {
      q: 'Which ruler was described as the "Indian Napoleon" by the historian V. A. Smith?',
      options: ['Chandragupta Maurya', 'Ashoka', 'Harshavardhana', 'Samudragupta'],
      answer: 3,
      explain: 'The description refers to the extensive campaigns recorded in his Allahabad Pillar inscription.',
    },
    {
      q: 'The Allahabad Pillar inscription (Prayag Prashasti) was composed by:',
      options: ['Banabhatta', 'Harisena', 'Kalidasa', 'Vasumitra'],
      answer: 1,
      explain: 'Harisena was Samudragupta\'s court poet. Banabhatta wrote the Harshacharita, about Harshavardhana.',
    },
    {
      q: 'The largest Harappan site found in India is:',
      options: ['Kalibangan', 'Lothal', 'Rakhigarhi', 'Dholavira'],
      answer: 2,
      explain: 'Rakhigarhi is in Haryana. Harappa and Mohenjodaro, both larger, lie in present-day Pakistan.',
    },
    {
      q: 'Mahavira attained nirvana at:',
      options: ['Pavapuri', 'Kushinagar', 'Vaishali', 'Rajgir'],
      answer: 0,
      explain: 'Mahavira died at Pavapuri in Bihar. Kushinagar is where the Buddha attained mahaparinirvana.',
    },
    {
      q: 'The Arthashastra, the principal source on Mauryan administration, is attributed to:',
      options: ['Megasthenes', 'Banabhatta', 'Kautilya', 'Vishakhadatta'],
      answer: 2,
      explain: 'Kautilya is also called Chanakya and Vishnugupta. Vishakhadatta wrote the play Mudrarakshasa about him.',
    },
    {
      q: 'The Saka era, beginning in 78 CE, is generally associated with the accession of:',
      options: ['Kanishka', 'Rudradaman I', 'Menander', 'Gautamiputra Satakarni'],
      answer: 0,
      explain: 'The era dated from 78 CE is conventionally linked to Kanishka, the best-known Kushana ruler.',
    },
    {
      q: 'Aryabhata composed the Aryabhatiya in:',
      options: ['399 CE', '599 CE', '299 CE', '499 CE'],
      answer: 3,
      explain: 'The work of 499 CE treats the earth as rotating on its axis and explains eclipses without recourse to myth.',
    },
    {
      q: 'The emblem of the Pandya kingdom of the Sangam age was the:',
      options: ['Tiger', 'Bow', 'Fish', 'Lion'],
      answer: 2,
      explain: 'Pandya used the fish, Chola the tiger and Chera the bow.',
    },
    {
      q: 'Harshavardhana\'s southward expansion was checked on the Narmada by:',
      options: ['Pulakeshin II', 'Narasimhavarman I', 'Rajaraja I', 'Dantidurga'],
      answer: 0,
      explain: 'The Chalukya ruler Pulakeshin II of Badami stopped Harsha, and the Narmada became the limit of his empire.',
    },
    {
      q: 'The Chinese pilgrim who visited India during the reign of Chandragupta II was:',
      options: ['Hiuen Tsang', 'Fa-Hien', 'I-Tsing', 'Megasthenes'],
      answer: 1,
      explain: 'Fa-Hien came in the early fifth century. Hiuen Tsang visited Harsha two centuries later, and Megasthenes was a Greek ambassador, not a pilgrim.',
    },
    {
      q: 'The Kalinga war, described in the thirteenth Rock Edict, was fought around:',
      options: ['322 BCE', '185 BCE', '261 BCE', '326 BCE'],
      answer: 2,
      explain: '322 BCE is the founding of the Mauryan empire, 185 BCE its end, and 326 BCE Alexander\'s invasion.',
    },
    {
      q: 'Chanhudaro is distinctive among major Harappan sites because it:',
      options: [
        'Is the largest Harappan site',
        'Has a dockyard',
        'Has fire altars',
        'Has no citadel',
      ],
      answer: 3,
      explain: 'Chanhudaro is the only major site without a citadel, and was a bead-making centre.',
    },
  ],

  faqs: [
    {
      q: 'What are the main sources for ancient Indian history?',
      a: 'Archaeological remains, inscriptions, religious and secular literature, and foreign accounts. For the Harappans only archaeology is available, because the script is undeciphered. From Ashoka onwards inscriptions provide firm dates, which is why the chronology becomes much more secure after the third century BCE.',
    },
    {
      q: 'When was the Indus Valley Civilisation discovered?',
      a: 'Harappa was excavated in 1921 by Daya Ram Sahni and Mohenjodaro in 1922 by R. D. Banerji, both under John Marshall as Director-General of the Archaeological Survey. The mature phase of the civilisation is dated to roughly 2600–1900 BCE.',
    },
    {
      q: 'Why did the Indus Valley Civilisation decline?',
      a: 'No single cause is accepted. Increasing aridity and the shifting or drying of river systems have the widest support, with flooding, deforestation and a fall in long-distance trade also cited. The older theory of an Aryan invasion has been largely abandoned by scholars.',
    },
    {
      q: 'What is the difference between the early and later Vedic periods?',
      a: 'The early or Rigvedic period, roughly 1500–1000 BCE, was pastoral and tribal, with wealth measured in cattle and a varna order that was not yet rigid. The later Vedic period, roughly 1000–600 BCE, saw iron in use, settled agriculture, larger kingdoms such as Kuru and Panchala, and a hardened varna system with elaborate royal sacrifices.',
    },
    {
      q: 'Was Mahavira the founder of Jainism?',
      a: 'No — he was the twenty-fourth and last Tirthankara. The tradition regards Rishabhanatha as the first and Parshvanatha as the twenty-third. Mahavira added celibacy as a fifth vow to the four already taught by Parshvanatha.',
    },
    {
      q: 'Which are the four Buddhist councils and who convened them?',
      a: 'The first at Rajgriha under Ajatashatru, the second at Vaishali under Kalasoka, the third at Pataliputra under Ashoka, and the fourth in Kashmir under Kanishka. The Hinayana and Mahayana schools separated after the fourth.',
    },
    {
      q: 'What is Ashoka\'s Dhamma?',
      a: 'A public code of conduct rather than a religious sect — non-violence, respect for elders and for other traditions, and welfare works such as wells and rest houses. It was propagated through officers called Dhamma Mahamatras and through the edicts, which survive across the subcontinent.',
    },
    {
      q: 'Why is the Gupta period called a golden age, and is the label accepted?',
      a: 'It is called so for Aryabhata and Varahamihira in mathematics and astronomy, Kalidasa in literature, and the beginnings of the Nagara temple style. Many historians qualify the label, pointing to the spread of land grants that scholars associate with the rise of feudalism, and to the worsening position of women and shudras in the law books of the period.',
    },
    {
      q: 'Who were the three Sangam kingdoms?',
      a: 'The Chera in the west with the port of Muziris and the bow as emblem, the Chola in the Kaveri delta with Uraiyur and Puhar and the tiger, and the Pandya at Madurai with the port of Korkai and the fish. All three traded with Rome, a fact attested by both Sangam poems and Roman coin finds.',
    },
    {
      q: 'How many questions from ancient India come in competitive exams?',
      a: 'UPSC Prelims typically carries three to six, often overlapping with art and culture. SSC CGL Tier 1 has one to three within its 25-question General Awareness section, RRB NTPC two to three, and state PSC prelims three to six — usually more where the state has significant ancient sites.',
    },
  ],

  related: [
    { label: 'Medieval India', to: '/study-material/history/medieval-india/' },
    { label: 'Modern India', to: '/study-material/history/modern-india/' },
    { label: 'Art & Culture', to: '/study-material/art-culture/' },
    { label: 'Indian Polity', to: '/study-material/polity/' },
    { label: 'Geography', to: '/study-material/geography/' },
    { label: 'All History', to: '/study-material/history/' },
  ],
}
