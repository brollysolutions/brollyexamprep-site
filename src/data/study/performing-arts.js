/**
 * Performing Arts — /study-material/art-culture/performing-arts/
 *
 * Dance, music, instruments, theatre, puppetry and martial traditions, all
 * organised as state-and-form pairings because that is the only way this
 * material is ever examined.
 */
export default {
  subject: 'art-culture',
  subjectName: 'Art & Culture',
  slug: 'performing-arts',
  title: 'Performing Arts',
  seoTitle: 'Indian Performing Arts | Classical Dance, Music, Theatre Notes & Practice',
  metaDescription:
    'Complete Indian performing arts study material for UPSC, SSC and state exams — the classical dance forms, Hindustani and Carnatic music.',
  readMinutes: 24,
  lead: [
    'The performing arts are examined almost entirely as pairings: which dance belongs to which state, which musical form to which tradition, which puppet type to which region. Nothing here requires you to have seen a performance — it requires you to have the associations firmly in place and to know the handful of features that distinguish one form from its neighbour.',
    'This page is built accordingly, with a table for each family of forms and the distinguishing feature stated for every entry. Where an official count is itself disputed — as it is for the number of classical dances — that dispute is set out rather than concealed, because both answers appear in question papers.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Often within a wider art and culture question, and increasingly on intangible heritage.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Dance form with state, and famous exponents.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'Heavily weighted towards the state\'s own dance, music and theatre traditions.' },
    { exam: 'RRB NTPC / Group D', count: '1–2 questions', note: 'Straight recall — which state does a named folk dance belong to.' },
    { exam: 'Banking and insurance GA', count: '1 question', note: 'Usually tied to a recent award or a UNESCO inscription.' },
  ],

  contents: [
    { icon: 'user', title: 'Classical dance', sub: 'The eight recognised forms', href: '#dance' },
    { icon: 'play', title: 'Classical music', sub: 'Hindustani and Carnatic', href: '#music' },
    { icon: 'layers', title: 'Musical instruments', sub: 'The fourfold classification', href: '#instruments' },
    { icon: 'book', title: 'Theatre', sub: 'Sanskrit, classical and folk', href: '#theatre' },
    { icon: 'globe', title: 'Folk dance', sub: 'By state', href: '#folk' },
    { icon: 'target', title: 'Puppetry and martial arts', sub: 'Regional traditions', href: '#puppetry' },
    { icon: 'chart', title: 'Akademis and heritage', sub: 'Institutions, awards and UNESCO', href: '#institutions' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'dance',
      heading: 'Classical dance',
      eyebrow: 'The eight recognised forms',
      intro:
        'The Sangeet Natak Akademi recognises eight classical dance forms. The Ministry of Culture has at times listed nine, including Chhau, which the Akademi treats as a folk and traditional form — so both numbers appear in question papers, and the safest answer states the basis.',
      blocks: [
        {
          type: 'table',
          caption: 'The eight classical dance forms',
          head: ['Form', 'State', 'Distinguishing features'],
          rows: [
            ['Bharatanatyam', 'Tamil Nadu', 'The oldest of the classical forms, developed from the temple dance called Sadir or Dasiattam and codified by the Tanjore Quartet. Solo, with a fixed sequence — alarippu, jatiswaram, shabdam, varnam, padam, tillana. Rukmini Devi Arundale is associated with its twentieth-century revival and respectability.'],
            ['Kathak', 'Uttar Pradesh and north India', 'The only classical form shaped by both temple and Mughal court traditions, which is why it alone is danced with the torso held upright and emphasises fast footwork with ankle bells and pirouettes. Its gharanas are Lucknow, Jaipur, Banaras and Raigarh; Birju Maharaj belonged to the Lucknow gharana.'],
            ['Kathakali', 'Kerala', 'A story-play rather than a solo dance, drawing on the Ramayana and Mahabharata. Elaborate painted makeup and the chutti, a built-up frame around the face, together with towering headgear. Character types are colour-coded — pacha for the noble, kathi for the arrogant, thadi, kari and minukku. Traditionally performed by men.'],
            ['Kuchipudi', 'Andhra Pradesh', 'Named after the village of Kuchipudi and traced to Siddhendra Yogi. It combines dance with spoken dialogue, and includes the tarangam, in which the dancer performs balanced on the rim of a brass plate, sometimes with a pot of water on the head.'],
            ['Odissi', 'Odisha', 'Characterised by the tribhanga, a triple bend of head, torso and knees, and the chowka, a square stance associated with Jagannath. Its themes draw heavily on Jayadeva\'s Gita Govinda; its temple origins lie with the maharis and the gotipuas.'],
            ['Manipuri', 'Manipur', 'Gentle and flowing rather than percussive, with no pronounced facial expression and no ankle bells. The Raas Leela of Krishna is the central theme, and the male Pung Cholom, danced while playing a drum, is its vigorous counterpart.'],
            ['Mohiniyattam', 'Kerala', 'A solo female form in the lasya or graceful mode, with swaying movements, a white-and-gold costume and hair gathered to one side. Its name means the dance of the enchantress.'],
            ['Sattriya', 'Assam', 'Developed in the sattras, the Vaishnava monasteries founded by Sankaradeva in the fifteenth century, and performed by monks as part of worship. It was recognised as a classical form by the Sangeet Natak Akademi only in 2000, which is why older lists give seven forms.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Natya Shastra',
              'Attributed to Bharata Muni and dated variously between the second century before and the second century of the common era. It is the foundational treatise on drama, dance and music, and the source of the rasa theory — the eight or nine emotional states a performance evokes. The Abhinaya Darpana of Nandikeshvara is the other text commonly named, dealing specifically with gesture.',
            ],
            [
              'Nritta, nritya and natya',
              'Nritta is pure dance — rhythm and movement with no narrative content. Nritya is expressive dance, conveying meaning and emotion. Natya is drama, adding dialogue and plot. Every classical form contains all three, and a question that names one of the terms is testing this distinction.',
            ],
            [
              'Tandava and lasya',
              'Tandava is the vigorous, masculine mode associated with Shiva; lasya is the gentle, graceful mode associated with Parvati. Mohiniyattam is predominantly lasya, Kathakali predominantly tandava, and most forms use both.',
            ],
            [
              'Abhinaya',
              'The four modes of expression: angika through the body and gesture, vachika through speech and song, aharya through costume and ornament, and sattvika through genuine emotion. Hasta mudras, the codified hand gestures, belong to angika abhinaya and number in the dozens.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'music',
      heading: 'Classical music',
      eyebrow: 'Hindustani and Carnatic',
      intro:
        'Two systems descending from a common root, which separated around the thirteenth century as northern India absorbed Persian influence. The comparison between them is asked directly.',
      blocks: [
        {
          type: 'table',
          caption: 'Hindustani and Carnatic compared',
          head: ['Feature', 'Hindustani', 'Carnatic'],
          rows: [
            ['Region', 'North, east and west India, and Pakistan', 'The four southern states'],
            ['Outside influence', 'Substantial Persian and Central Asian influence from the Sultanate and Mughal periods', 'Comparatively unbroken continuity from the older tradition'],
            ['Emphasis', 'Improvisation within the raga, with a long unmetered alap developing the mood before rhythm enters', 'Composition-centred, built around the kriti, with improvisation woven around a fixed piece'],
            ['Principal vocal forms', 'Dhrupad, the oldest and most austere; khayal, the dominant modern form; thumri, tappa, tarana, ghazal and qawwali', 'Varnam, kriti, ragam-tanam-pallavi'],
            ['Accompaniment', 'Tabla for rhythm, with sarangi or harmonium; tanpura for the drone', 'Mridangam for rhythm, with violin and sometimes ghatam or kanjira; tanpura for the drone'],
            ['Organising scheme', 'Ten thaats, from which ragas are derived', 'Seventy-two melakarta ragas, a systematic parent scheme from which janya ragas derive'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Raga and tala',
              'A raga is a melodic framework — a set of notes with rules about ascent and descent, characteristic phrases, emphasised notes and an associated mood and time of day. A tala is a rhythmic cycle of a fixed number of beats divided into sections. Together they are the two axes of Indian classical music, and the definitions are asked verbatim.',
            ],
            [
              'The seven swaras',
              'Shadja, Rishabha, Gandhara, Madhyama, Panchama, Dhaivata and Nishada — abbreviated Sa, Re or Ri, Ga, Ma, Pa, Dha and Ni. Sa and Pa are fixed; the others have variant forms, giving twelve notes in the octave.',
            ],
            [
              'The Carnatic Trinity',
              'Tyagaraja, Muthuswami Dikshitar and Syama Sastri, all of the eighteenth and early nineteenth centuries and all associated with Thiruvaiyaru and Thanjavur. Purandara Dasa is called the father of Carnatic music for systematising its teaching. The Tyagaraja Aradhana festival is held annually at Thiruvaiyaru.',
            ],
            [
              'Hindustani gharanas',
              'A gharana is a stylistic lineage transmitted from teacher to pupil. Gwalior is the oldest khayal gharana; Kirana, Agra, Jaipur-Atrauli, Patiala and Rampur-Sahaswan are the others most often named. Dhrupad is associated with the Dagar tradition and with Tansen, one of Akbar\'s navaratnas.',
            ],
            [
              'Amir Khusrau',
              'Poet and musician at the Delhi Sultanate court, credited by tradition with the qawwali and the khayal, and sometimes with the sitar and the tabla — attributions that are traditional rather than documented, and should be stated as such. He is also called the parrot of India, Tuti-e-Hind.',
            ],
            [
              'Devotional and semi-classical forms',
              'Qawwali, the Sufi devotional form sung at dargahs. Bhajan and kirtan, Hindu devotional singing. Abhang in Maharashtra, associated with the Varkari tradition. Ghazal, a Persian and Urdu poetic form set to music. Thumri and dadra, semi-classical forms with a romantic character.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'instruments',
      heading: 'Musical instruments',
      eyebrow: 'The fourfold classification',
      intro:
        'Indian tradition classifies instruments by how the sound is produced, and this ancient scheme corresponds almost exactly to the modern organological categories. Questions ask which class a named instrument belongs to.',
      blocks: [
        {
          type: 'table',
          caption: 'The four classes',
          head: ['Class', 'How sound is produced', 'Instruments'],
          rows: [
            ['Tata Vadya (chordophones)', 'A vibrating string', 'Veena, sitar, sarod, sarangi, santoor, tanpura, esraj, rudra veena, violin as used in Carnatic music.'],
            ['Sushira Vadya (aerophones)', 'A vibrating column of air', 'Bansuri or flute, shehnai, nadaswaram, pungi, harmonium — which is a free-reed aerophone rather than a keyboard string instrument.'],
            ['Avanaddha Vadya (membranophones)', 'A stretched membrane', 'Tabla, mridangam, pakhawaj, dholak, dhol, khol, damaru, nagara, pung.'],
            ['Ghana Vadya (idiophones)', 'The solid body of the instrument itself', 'Manjira, jaltarang, ghatam, ghungroo, chimta, morsing. Note that the ghatam, a clay pot, is an idiophone and not a drum.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The instruments most often paired with a name',
              'Sitar with Ravi Shankar and Vilayat Khan; sarod with Ali Akbar Khan and Amjad Ali Khan; shehnai with Bismillah Khan; santoor with Shivkumar Sharma; flute with Hariprasad Chaurasia; tabla with Zakir Hussain and Alla Rakha; sarangi with Ram Narayan; mandolin with U. Srinivas; violin in the Carnatic tradition with L. Subramaniam and the Lalgudi lineage.',
            ],
            [
              'Regional and folk instruments',
              'The ravanahatha of Rajasthan, an early bowed instrument. The ektara, a single-stringed drone associated with wandering singers. The dotara of Bengal and Assam. The tumbi of Punjab. The pena of Manipur. The nagaswaram of Tamil Nadu, played at temple ceremonies with the tavil drum.',
            ],
            [
              'The tanpura',
              'Not a melodic instrument at all. It provides a continuous drone against which the raga is heard, and it is present in both Hindustani and Carnatic performance. Questions occasionally ask which instrument supplies the drone, and the answer is the same in both systems.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'theatre',
      heading: 'Theatre',
      eyebrow: 'Sanskrit, classical and folk',
      intro:
        'Indian theatre divides into the Sanskrit tradition, its surviving classical descendants, and a very large body of regional folk theatre — the last being what questions usually ask about.',
      blocks: [
        {
          type: 'table',
          caption: 'Folk and traditional theatre by state',
          head: ['Form', 'State', 'Character'],
          rows: [
            ['Kutiyattam', 'Kerala', 'The oldest surviving form of Sanskrit theatre, performed in temple theatres called koothambalams. It was the first Indian tradition inscribed on the UNESCO list of intangible cultural heritage.'],
            ['Yakshagana', 'Karnataka', 'Night-long performance combining dance, music, dialogue and elaborate costume and headgear, drawing on the epics.'],
            ['Bhavai', 'Gujarat', 'Satirical folk theatre performed in the open, with a strong element of social comment.'],
            ['Tamasha', 'Maharashtra', 'Lively folk theatre with song and dance, closely associated with the lavani.'],
            ['Jatra', 'West Bengal and Odisha', 'Travelling open-air theatre, historically devotional and later political and social in theme.'],
            ['Nautanki', 'Uttar Pradesh and Rajasthan', 'Operatic folk theatre with sung verse and loud percussion, once the dominant popular entertainment of the north.'],
            ['Bhaona or Ankiya Naat', 'Assam', 'One-act plays composed by Sankaradeva, performed in the sattras — the theatrical counterpart of Sattriya dance.'],
            ['Therukoothu', 'Tamil Nadu', 'Street theatre with heavy makeup and song, drawing chiefly on the Mahabharata.'],
            ['Pandavani', 'Chhattisgarh', 'A solo narrative form telling the Mahabharata from Bhima\'s perspective, associated with Teejan Bai.'],
            ['Swang', 'Haryana and Punjab', 'Musical folk theatre with dialogue in verse.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Sanskrit drama',
              'Its principal playwrights are Bhasa, whose Swapnavasavadatta survives; Kalidasa, of Abhijnanashakuntalam, Vikramorvashiyam and Malavikagnimitram; Shudraka, of Mrichchhakatika, the Little Clay Cart; Vishakhadatta, of Mudrarakshasa; Bhavabhuti, of Uttararamacharita; and Harsha, to whom Ratnavali, Priyadarshika and Nagananda are attributed. The convention that tragedy is avoided and the play must end well is a standard examination point.',
            ],
            [
              'Ramlila and Raslila',
              'Ramlila is the cyclical dramatic enactment of the Ramayana performed over several days, particularly in northern India, and it is on the UNESCO intangible heritage list. Raslila enacts episodes from Krishna\'s life, especially in the Braj region, and feeds directly into Manipuri and Kathak repertoire.',
            ],
            [
              'Ballad and narrative traditions',
              'Powada in Maharashtra, heroic ballads celebrating Shivaji and other figures. Burrakatha in Andhra Pradesh and Telangana, a narrative form with a drum. Villu Paatu in Tamil Nadu, sung to a bow-shaped instrument. Alha in the Hindi belt. These sit between theatre and music and are asked as regional pairings.',
            ],
            [
              'Modern theatre institutions',
              'The National School of Drama in New Delhi, founded in 1959, is the principal training institution. The Indian People\'s Theatre Association, founded in 1943, is the movement most often named in the history of politically engaged modern Indian theatre.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'folk',
      heading: 'Folk dance',
      eyebrow: 'By state',
      intro:
        'A pure recall list, and the single most efficient thing in this whole page to memorise, because the question format never varies.',
      blocks: [
        {
          type: 'table',
          caption: 'Folk dances and their states',
          head: ['Dance', 'State', 'Occasion or feature'],
          rows: [
            ['Bhangra and Giddha', 'Punjab', 'Bhangra is the vigorous male harvest dance associated with Baisakhi; Giddha is its female counterpart.'],
            ['Garba and Dandiya Raas', 'Gujarat', 'Performed during Navratri; Garba is danced in a circle around a lamp, Dandiya with sticks. Garba was inscribed by UNESCO in 2023.'],
            ['Lavani', 'Maharashtra', 'Performed to the dholki, associated with Tamasha and known for its rhythmic vigour.'],
            ['Ghoomar and Kalbelia', 'Rajasthan', 'Ghoomar is danced by women in wide swirling skirts; Kalbelia belongs to the snake-charmer community and is on the UNESCO list.'],
            ['Bihu', 'Assam', 'The spring festival dance marking the Assamese new year, danced to the dhol and pepa.'],
            ['Chhau', 'Jharkhand, Odisha and West Bengal', 'A masked martial dance in three regional styles — Seraikella, Mayurbhanj and Purulia; Mayurbhanj is danced without masks. On the UNESCO list.'],
            ['Cheraw', 'Mizoram', 'The bamboo dance, performed between clapping bamboo poles.'],
            ['Hojagiri', 'Tripura', 'Danced balancing bottles and lamps on the head while moving the lower body.'],
            ['Rouf and Dumhal', 'Jammu and Kashmir', 'Rouf is danced by women in rows; Dumhal by men of the Wattal community wearing tall conical caps.'],
            ['Nati', 'Himachal Pradesh', 'A community dance of the hill districts, performed in very large groups.'],
            ['Dollu Kunitha', 'Karnataka', 'A drum dance performed by men carrying large drums.'],
            ['Karagattam and Kummi', 'Tamil Nadu', 'Karagattam is danced balancing a decorated pot on the head; Kummi is a clapping circle dance.'],
            ['Theyyam and Padayani', 'Kerala', 'Theyyam is a ritual form in which the performer is regarded as embodying a deity; Padayani uses painted masks.'],
            ['Singhi Chham', 'Sikkim', 'The snow lion dance, performed in Buddhist monasteries.'],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'puppetry',
      heading: 'Puppetry and martial arts',
      eyebrow: 'Regional traditions',
      intro:
        'Two small sections with a high question density, because both are organised as clean four-way classifications.',
      blocks: [
        {
          type: 'table',
          caption: 'The four kinds of Indian puppetry',
          head: ['Type', 'Regional forms', 'How it works'],
          rows: [
            ['String puppetry', 'Kathputli in Rajasthan, Kundhei in Odisha, Gombeyatta in Karnataka, Bommalattam in Tamil Nadu', 'Jointed wooden figures manipulated by strings from above.'],
            ['Shadow puppetry', 'Tholu Bommalata in Andhra Pradesh, Togalu Gombeyatta in Karnataka, Ravanachhaya in Odisha', 'Flat leather figures held against a translucent screen and lit from behind. Ravanachhaya uses uncoloured deerskin, so its shadows are opaque.'],
            ['Rod puppetry', 'Putul Nautch in West Bengal, Yampuri in Bihar', 'Larger figures supported and moved by rods from below. Yampuri puppets are carved from a single piece of wood with no joints.'],
            ['Glove puppetry', 'Pavakoothu in Kerala', 'The puppet is worn on the hand, with the fingers moving the head and arms.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Martial art traditions',
              'Kalaripayattu in Kerala, often described as among the oldest martial systems in the world, practised in a pit called a kalari. Silambam in Tamil Nadu, using a bamboo staff. Thang-Ta in Manipur, combining the sword and the spear. Mardani Khel in Maharashtra, associated with the Marathas. Gatka in Punjab, associated with the Sikh tradition. Mallakhamb in Maharashtra and Madhya Pradesh, performed on a vertical pole or a hanging rope. Thoda in Himachal Pradesh, combining archery with dance.',
            ],
            [
              'Why these appear so often',
              'Because each is unambiguously tied to one state, which makes for a clean objective question. The same is true of the puppet forms. Between them they account for a steady one or two questions in state PSC papers and a recurring one in SSC.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'institutions',
      heading: 'Akademis and heritage',
      eyebrow: 'Institutions, awards and UNESCO',
      intro:
        'A short institutional block, and the one place in this topic where a count genuinely changes and must be checked.',
      blocks: [
        {
          type: 'table',
          caption: 'The three national akademis',
          head: ['Akademi', 'Founded', 'Domain'],
          rows: [
            ['Sangeet Natak Akademi', '1952, New Delhi', 'Music, dance and drama. It confers the Sangeet Natak Akademi Award and the higher Akademi Fellowship, the Ratna Sadsya, and it is the body that recognises a dance form as classical.'],
            ['Sahitya Akademi', '1954, New Delhi', 'Literature, in the twenty-four languages it recognises. Its awards include the Sahitya Akademi Award, the Bhasha Samman and the highest honour, the Sahitya Akademi Fellowship.'],
            ['Lalit Kala Akademi', '1954, New Delhi', 'The visual arts — painting, sculpture and graphics.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'UNESCO intangible cultural heritage from India',
              'The Representative List includes Kutiyattam Sanskrit theatre, the tradition of Vedic chanting, Ramlila, the Ramman of Uttarakhand, Chhau dance, the Kalbelia songs and dances of Rajasthan, Mudiyettu of Kerala, the Buddhist chanting of Ladakh, Sankirtana of Manipur, the brass and copper craft of the Thatheras of Jandiala Guru, Yoga, the Kumbh Mela, Durga Puja in Kolkata and the Garba of Gujarat. Kutiyattam was the first Indian entry. New inscriptions are made at successive sessions of the intergovernmental committee, so the total should be verified rather than memorised.',
            ],
            [
              'Other cultural institutions',
              'The Indira Gandhi National Centre for the Arts, the Centre for Cultural Resources and Training, the National School of Drama, the Anthropological Survey of India and the Archaeological Survey of India, which is responsible for centrally protected monuments under the Ancient Monuments and Archaeological Sites and Remains Act.',
            ],
            [
              'Civilian honours',
              'The Bharat Ratna is the highest civilian award, followed by the Padma Vibhushan, Padma Bhushan and Padma Shri. They are announced on Republic Day. The Sangeet Natak Akademi Award is the highest national recognition specifically for performing artists, and the Jnanpith the highest for literature — the latter awarded by a private trust rather than by the government.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Eight classical dances or nine?',
          text:
            'The Sangeet Natak Akademi recognises eight, having added Sattriya in 2000 to the earlier seven. The Ministry of Culture has at times listed nine, including Chhau. Both figures have appeared in question papers, and the safest approach is to know the eight Akademi forms cold, know that Chhau is the disputed ninth, and read the wording of the question to see which authority it names.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Which classical dance was recognised most recently, and how does that affect the count?',
      steps: [
        'Seven forms were recognised for most of the twentieth century — Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri and Mohiniyattam.',
        'Sattriya, from Assam, was recognised by the Sangeet Natak Akademi in 2000.',
        'That makes eight on the Akademi\'s list, though the Ministry of Culture has sometimes listed nine by including Chhau.',
      ],
      answer: 'Sattriya, in 2000 — which is why older material gives seven forms.',
    },
    {
      q: 'Which classical dance combines temple and Mughal court traditions, and how does that show?',
      steps: [
        'Most classical forms developed entirely within temple traditions.',
        'Kathak developed among the kathakars of northern India and was then taken into the courts of the Sultanate and Mughal periods.',
        'The result is visible in its upright torso, its emphasis on rapid footwork and pirouettes rather than sculptural poses, and in its performance in a court rather than a temple setting.',
      ],
      answer: 'Kathak — the only classical form shaped by both traditions.',
    },
    {
      q: 'A performance uses the tarangam, danced on the rim of a brass plate. Which form is it?',
      steps: [
        'This is a specific signature item rather than a general technique.',
        'It belongs to Kuchipudi, from Andhra Pradesh, traced to Siddhendra Yogi.',
        'Kuchipudi is also distinctive in combining dance with spoken dialogue, which most classical forms do not.',
      ],
      answer: 'Kuchipudi.',
    },
    {
      q: 'To which class of instrument does the ghatam belong?',
      steps: [
        'The ghatam is a clay pot struck with the hands, so it looks like a drum.',
        'But a drum — a membranophone — produces sound from a stretched membrane, and the ghatam has none.',
        'The sound comes from the vibration of the solid clay body itself, which makes it an idiophone, Ghana Vadya in the Indian classification.',
      ],
      answer: 'Ghana Vadya — an idiophone, not a drum.',
    },
    {
      q: 'Name the Carnatic Trinity and say what they have in common.',
      steps: [
        'They are Tyagaraja, Muthuswami Dikshitar and Syama Sastri.',
        'All three lived in the eighteenth and early nineteenth centuries and were associated with the Thanjavur region, particularly Thiruvaiyaru.',
        'Between them they composed the core of the Carnatic kriti repertoire, and the Tyagaraja Aradhana is held annually in their region.',
      ],
      answer: 'Tyagaraja, Muthuswami Dikshitar and Syama Sastri, all of the Thanjavur region.',
    },
    {
      q: 'Which was the first Indian tradition inscribed on the UNESCO intangible heritage list?',
      steps: [
        'India has a substantial number of entries, including Ramlila, Chhau, Kalbelia, Yoga, the Kumbh Mela and the Garba.',
        'The earliest to be proclaimed was Kutiyattam, the Sanskrit theatre of Kerala performed in temple theatres called koothambalams.',
        'It is also the oldest surviving form of Sanskrit theatre anywhere.',
      ],
      answer: 'Kutiyattam of Kerala.',
    },
    {
      q: 'Ravanachhaya differs from other Indian shadow puppetry. How?',
      steps: [
        'Shadow puppetry uses flat leather figures held against a translucent screen and lit from behind.',
        'Most Indian traditions, such as Tholu Bommalata, colour the leather so that the shadows are translucent and coloured.',
        'Ravanachhaya of Odisha uses uncoloured deerskin, so the shadows it casts are opaque and black.',
      ],
      answer: 'Its puppets are uncoloured deerskin, so the shadows are opaque rather than coloured.',
    },
    {
      q: 'Which martial art is practised in a pit, and where?',
      steps: [
        'Silambam uses a staff, Thang-Ta the sword and spear, and Mallakhamb a pole or rope.',
        'Kalaripayattu is practised in a specially constructed pit or arena called a kalari, from which it takes its name.',
        'It belongs to Kerala and is often described as among the oldest surviving martial systems.',
      ],
      answer: 'Kalaripayattu, in Kerala.',
    },
  ],

  practice: [
    {
      q: 'Sattriya dance belongs to:',
      options: ['Odisha', 'West Bengal', 'Manipur', 'Assam'],
      answer: 3,
      explain: 'It developed in the sattras founded by Sankaradeva and was recognised as classical in 2000.',
    },
    {
      q: 'Which classical dance form is characterised by the tribhanga posture?',
      options: ['Odissi', 'Bharatanatyam', 'Kathak', 'Mohiniyattam'],
      answer: 0,
      explain: 'The triple bend of head, torso and knees, along with the square chowka stance.',
    },
    {
      q: 'The Natya Shastra is attributed to:',
      options: ['Nandikeshvara', 'Panini', 'Abhinavagupta', 'Bharata Muni'],
      answer: 3,
      explain: 'Nandikeshvara wrote the Abhinaya Darpana, which deals specifically with gesture.',
    },
    {
      q: 'Kathakali belongs to:',
      options: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh'],
      answer: 2,
      explain: 'A story-play with elaborate colour-coded makeup and the built-up chutti around the face.',
    },
    {
      q: 'The oldest gharana of Hindustani khayal is:',
      options: ['Kirana', 'Patiala', 'Agra', 'Gwalior'],
      answer: 3,
      explain: 'Gwalior is regarded as the parent gharana from which several others descend.',
    },
    {
      q: 'The mridangam is the principal percussion instrument of:',
      options: ['Hindustani music', 'Carnatic music', 'Sufi qawwali', 'Manipuri dance'],
      answer: 1,
      explain: 'The tabla plays the corresponding role in Hindustani music; the pung is used in Manipuri dance.',
    },
    {
      q: 'Which of these is an aerophone in the Indian classification?',
      options: ['Sarangi', 'Shehnai', 'Ghatam', 'Pakhawaj'],
      answer: 1,
      explain: 'Sushira Vadya — a vibrating column of air. The sarangi is a chordophone, the ghatam an idiophone and the pakhawaj a membranophone.',
    },
    {
      q: 'Kutiyattam is a traditional theatre form of:',
      options: ['Karnataka', 'Kerala', 'Tamil Nadu', 'Odisha'],
      answer: 1,
      explain: 'The oldest surviving Sanskrit theatre, performed in koothambalams, and the first Indian entry on the UNESCO intangible heritage list.',
    },
    {
      q: 'Yakshagana is a folk theatre form of:',
      options: ['Karnataka', 'Kerala', 'Maharashtra', 'Gujarat'],
      answer: 0,
      explain: 'Night-long performances with elaborate costume and headgear, drawing on the epics.',
    },
    {
      q: 'Cheraw, the bamboo dance, belongs to:',
      options: ['Manipur', 'Nagaland', 'Mizoram', 'Meghalaya'],
      answer: 2,
      explain: 'Dancers step between bamboo poles clapped together in rhythm.',
    },
    {
      q: 'Kathputli puppetry belongs to:',
      options: ['Rajasthan', 'Odisha', 'Karnataka', 'West Bengal'],
      answer: 0,
      explain: 'It is a string puppetry tradition. Kundhei is Odisha\'s, Gombeyatta Karnataka\'s and Putul Nautch is Bengal\'s rod puppetry.',
    },
    {
      q: 'Kalaripayattu is the martial art of:',
      options: ['Tamil Nadu', 'Kerala', 'Manipur', 'Punjab'],
      answer: 1,
      explain: 'Silambam is Tamil Nadu\'s, Thang-Ta Manipur\'s and Gatka Punjab\'s.',
    },
    {
      q: 'The Sangeet Natak Akademi was established in:',
      options: ['1947', '1952', '1954', '1959'],
      answer: 1,
      explain: 'The Sahitya Akademi and Lalit Kala Akademi followed in 1954, and the National School of Drama in 1959.',
    },
    {
      q: 'Which dance form was inscribed on the UNESCO list in 2023?',
      options: ['Chhau', 'Kalbelia', 'Garba of Gujarat', 'Sankirtana'],
      answer: 2,
      explain: 'Chhau and Kalbelia were inscribed in 2010 and Sankirtana of Manipur in 2013.',
    },
    {
      q: 'Pandavani, a solo narrative form telling the Mahabharata, belongs to:',
      options: ['Chhattisgarh', 'Madhya Pradesh', 'Jharkhand', 'Bihar'],
      answer: 0,
      explain: 'It tells the epic from Bhima\'s perspective and is associated with Teejan Bai.',
    },
    {
      q: 'Which instrument provides the drone in both Hindustani and Carnatic performance?',
      options: ['Sarangi', 'Tanpura', 'Veena', 'Harmonium'],
      answer: 1,
      explain: 'It is not a melodic instrument; it sustains the tonic against which the raga is heard.',
    },
  ],

  faqs: [
    {
      q: 'How many classical dance forms does India have — eight or nine?',
      a: 'The Sangeet Natak Akademi, which is the recognising authority, lists eight: Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam and Sattriya, the last added in 2000. The Ministry of Culture has at times listed nine by including Chhau, which the Akademi treats as a folk and traditional form. Both numbers appear in papers, so know the eight cold and note Chhau as the disputed ninth.',
    },
    {
      q: 'What is the difference between Hindustani and Carnatic music?',
      a: 'They descend from a common root and separated around the thirteenth century as northern India absorbed Persian influence. Hindustani is improvisation-centred, opening with a long unmetered alap that develops the raga before rhythm enters, and is organised by ten thaats. Carnatic is composition-centred around the kriti, with improvisation woven around a fixed piece, and organised by seventy-two melakarta ragas. The accompaniment differs too: tabla and sarangi against mridangam and violin.',
    },
    {
      q: 'What exactly is a raga?',
      a: 'A melodic framework, not a scale and not a tune. It specifies which notes may be used, the rules for ascending and descending, the characteristic phrases that identify it, which notes are emphasised, and the mood and often the time of day associated with it. Two performances of the same raga can share no melody at all and still be unmistakably that raga.',
    },
    {
      q: 'Why is the ghatam not classified as a drum?',
      a: 'Because Indian classification, like modern organology, groups instruments by how the sound is produced. A drum is a membranophone: the sound comes from a stretched membrane. The ghatam is a clay pot with no membrane, and the sound comes from the vibration of the solid body itself, which makes it an idiophone — Ghana Vadya. The same reasoning puts the jaltarang and the manjira in that class.',
    },
    {
      q: 'How do I remember which folk dance belongs to which state?',
      a: 'Group them by region and revise them as a region rather than alphabetically. The north-east together, the Himalayan states together, the four southern states together. Many names carry a clue — Cheraw and the bamboo dance for Mizoram, Bihu with the Assamese new year, Garba with Navratri in Gujarat. Where there is no clue, an occasion or a costume detail usually gives one.',
    },
    {
      q: 'What is the difference between nritta, nritya and natya?',
      a: 'Nritta is pure dance — rhythm and movement with no meaning attached. Nritya is expressive dance, conveying a story or an emotion through gesture and facial expression. Natya is drama proper, with plot and dialogue. Every classical form uses all three, and the distinction comes from the Natya Shastra.',
    },
    {
      q: 'Which facts in this topic change?',
      a: 'Only two. The UNESCO intangible cultural heritage list grows at successive sessions, so the Indian total should be checked. And award winners are announced annually. Everything else — the dance forms and their states, the music systems, the instrument classification, the puppet and martial traditions — is fixed.',
    },
    {
      q: 'Is it worth learning the exponents as well as the forms?',
      a: 'Yes for the instruments, where the pairing of performer with instrument is asked directly — Bismillah Khan with shehnai, Zakir Hussain with tabla, Shivkumar Sharma with santoor. Less so for dance, where questions ask about the form far more often than about an individual, though Rukmini Devi Arundale with Bharatanatyam and Birju Maharaj with Kathak are worth knowing.',
    },
    {
      q: 'Why does state PSC weight this topic so heavily?',
      a: 'Because every state paper carries a block on the state\'s own culture, and performing arts are the most objectively examinable part of it. If you are preparing for a particular state, the dances, theatre forms, festivals and crafts of that state deserve disproportionate attention relative to the national list.',
    },
    {
      q: 'How many questions come from performing arts?',
      a: 'Two to four in UPSC Prelims within the wider art and culture block, two to three in SSC CGL Tier 1, three to five in state PSC prelims, one to two in RRB NTPC, and about one in banking general awareness, usually tied to an award or a recent UNESCO inscription.',
    },
  ],

  related: [
    { label: 'Architecture & Sculpture', to: '/study-material/art-culture/architecture/' },
    { label: 'Literature & Heritage', to: '/study-material/art-culture/literature-heritage/' },
    { label: 'Medieval India', to: '/study-material/history/medieval-india/' },
    { label: 'General Knowledge', to: '/study-material/general-knowledge/' },
    { label: 'All Art & Culture', to: '/study-material/art-culture/' },
  ],
}
