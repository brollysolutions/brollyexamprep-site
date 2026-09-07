/**
 * Architecture, Sculpture and Painting —
 * /study-material/art-culture/architecture/
 *
 * The visual arts block, organised chronologically because the exam pairs a
 * style with the dynasty that built it. Every entry is written as the pairing
 * a question would use: monument with builder, feature with school.
 */
export default {
  subject: 'art-culture',
  subjectName: 'Art & Culture',
  slug: 'architecture',
  title: 'Architecture & Sculpture',
  seoTitle: 'Indian Architecture and Sculpture | Temple Styles, Monuments Notes & Practice',
  metaDescription:
    'Complete Indian architecture and sculpture study material for UPSC, SSC and state exams — Harappan and Mauryan art, stupas and rock-cut caves.',
  readMinutes: 26,
  lead: [
    'Art and culture is the most under-prepared block in general studies and among the most heavily asked in UPSC Prelims. The reason candidates avoid it is that it looks like it requires taste; in fact it requires pairings — style with dynasty, feature with school, monument with builder — and those can be learnt as systematically as anything else.',
    'This page runs chronologically, because the chronology is what holds the pairings together: the Mauryan pillar comes before the Gupta temple, the Nagara shikhara before the Mughal dome, and each style is a response to what preceded it. Every technical term is given where it first appears, since questions frequently test the vocabulary rather than the monument.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '4–7 questions', note: 'Often the difference between clearing and missing the cut-off, because so few prepare it.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Famous monuments and who built them.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'With significant weight on the state\'s own monuments and art forms.' },
    { exam: 'RRB NTPC / Group D', count: '1–2 questions', note: 'Direct recall — which monument is in which city, who built the Taj Mahal.' },
    { exam: 'NDA / CDS General Ability', count: '1–2 questions', note: 'Usually within the history section.' },
  ],

  contents: [
    { icon: 'layers', title: 'Harappan and Mauryan', sub: 'The earliest art', href: '#early' },
    { icon: 'globe', title: 'Stupas and rock-cut caves', sub: 'Buddhist architecture', href: '#buddhist' },
    { icon: 'user', title: 'Schools of sculpture', sub: 'Gandhara, Mathura, Amaravati', href: '#sculpture' },
    { icon: 'target', title: 'Temple architecture', sub: 'Nagara, Dravida and Vesara', href: '#temples' },
    { icon: 'doc', title: 'Indo-Islamic architecture', sub: 'Sultanate, provincial and Mughal', href: '#indo-islamic' },
    { icon: 'refresh', title: 'Colonial and modern', sub: 'From Gothic Revival to Lutyens', href: '#colonial' },
    { icon: 'image', title: 'Painting', sub: 'Murals, miniatures and folk schools', href: '#painting' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'early',
      heading: 'Harappan and Mauryan',
      eyebrow: 'The earliest art',
      intro:
        'Two widely separated periods, joined here because both are examined as small sets of famous individual objects rather than as bodies of work.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Harappan art',
              'Small in scale and remarkably assured. The bronze Dancing Girl from Mohenjodaro, made by the lost-wax process; the steatite Bearded Man or Priest-King, also from Mohenjodaro; the red sandstone male torso from Harappa; terracotta figurines including the mother goddess; and the seals, of which the Pashupati seal showing a seated figure surrounded by animals is the most discussed. There is no monumental sculpture and no identified temple.',
            ],
            [
              'Mauryan court art',
              'Monumental and state-sponsored: the polished sandstone pillars, the palace at Pataliputra with its eighty-pillared hall, and the earliest rock-cut caves. The distinctive Mauryan polish, a lustrous finish on hard sandstone, is itself a diagnostic feature and is asked about.',
            ],
            [
              'The pillars and their capitals',
              'A monolithic shaft, an inverted lotus bell, an abacus and an animal capital. The Sarnath lion capital, with four addorsed lions over an abacus bearing a bull, a horse, an elephant and a lion separated by wheels, was adopted as the State Emblem of India; the wheel from it became the chakra on the national flag. Other capitals include the bull at Rampurva and the single lion at Lauriya Nandangarh.',
            ],
            [
              'Popular art of the same period',
              'Distinguished from court art: the large freestanding yaksha and yakshi figures, of which the Didarganj Yakshi from Patna, with its high polish and fly-whisk, is the best known.',
            ],
            [
              'The earliest rock-cut caves',
              'The Barabar and Nagarjuni caves in Bihar, excavated under Ashoka and his successor for the Ajivika sect — the earliest surviving rock-cut architecture in India, and notable for their polished interiors. Note that they were made for the Ajivikas, not for Buddhists, which is exactly what the question tests.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'buddhist',
      heading: 'Stupas and rock-cut caves',
      eyebrow: 'Buddhist architecture',
      intro:
        'Two forms, each with a fixed vocabulary. Questions on this section are usually asking whether you know what a particular part is called.',
      blocks: [
        {
          type: 'table',
          caption: 'Parts of a stupa',
          head: ['Element', 'What it is', 'Note'],
          rows: [
            ['Anda', 'The hemispherical dome', 'Originally an earthen burial mound; it encloses the relic chamber.'],
            ['Harmika', 'The square railing at the top of the dome', 'Represents the abode of the gods.'],
            ['Yashti and chhatra', 'The central mast and the tiered umbrellas above it', 'The umbrellas signify honour and the layers of heaven.'],
            ['Medhi', 'The raised drum or base on which the dome sits', 'It carries the upper circumambulatory path.'],
            ['Pradakshina patha', 'The circumambulatory path around the stupa', 'Worship consists of walking round it clockwise.'],
            ['Torana', 'The carved gateway in the railing', 'The four toranas at Sanchi carry the richest narrative sculpture of the early period.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The major stupas',
              'Sanchi in Madhya Pradesh, begun under Ashoka and enlarged later, with the finest surviving toranas. Bharhut in Madhya Pradesh, whose railings are now largely in the Indian Museum, Kolkata. Amaravati in Andhra Pradesh, faced with white limestone and associated with the Satavahanas. Dhamek at Sarnath, marking the site of the first sermon.',
            ],
            [
              'Chaitya and vihara',
              'A chaitya is a prayer hall — apsidal at the far end, with a stupa at the apse, a barrel-vaulted roof carved to imitate wooden ribs, and a horseshoe-shaped window at the entrance. A vihara is a monastery: a courtyard or hall surrounded by small residential cells for monks. Nearly every rock-cut Buddhist site contains both, and confusing the two is the standard error.',
            ],
            [
              'The rock-cut sites',
              'Karle in Maharashtra has the largest and finest chaitya hall. Bhaja and Bedsa are among the earliest. Ajanta, with twenty-nine caves, is entirely Buddhist and is famous chiefly for its paintings. Ellora, with thirty-four caves, is unique in containing Buddhist, Hindu and Jain excavations side by side. Elephanta, on an island near Mumbai, is Shaiva and contains the colossal Trimurti. Udayagiri and Khandagiri in Odisha are Jain.',
            ],
            [
              'The Kailasa temple at Ellora',
              'Cave 16, excavated under the Rashtrakuta king Krishna I, and the single most remarkable structure in Indian rock architecture: a complete Dravida-style temple carved downward out of a single hillside, so that it was subtracted rather than built. It is the standard example of a monolithic rock-cut temple.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'sculpture',
      heading: 'Schools of sculpture',
      eyebrow: 'Gandhara, Mathura, Amaravati',
      intro:
        'Three contemporaneous schools of the early centuries of the common era, distinguished by material, patronage and the way each depicted the Buddha. This comparison is one of the most reliably asked items in the whole art and culture syllabus.',
      blocks: [
        {
          type: 'table',
          caption: 'The three schools compared',
          head: ['Feature', 'Gandhara', 'Mathura'],
          rows: [
            ['Region and patron', 'North-west, around Peshawar and Taxila; Kushana patronage', 'Western Uttar Pradesh; Kushana patronage as well, but an indigenous tradition'],
            ['Material', 'Grey-blue schist, and later stucco', 'Spotted red sandstone from Sikri'],
            ['Influence', 'Strongly Greco-Roman — the style is often called Greco-Buddhist', 'Indigenous, developing from the earlier yaksha tradition'],
            ['Depiction of the Buddha', 'Wavy hair, sharp features, a heavy robe with deep naturalistic folds, an anatomical treatment of the body, a restrained and contemplative expression', 'Shaven or shell-like hair, a rounder and fleshier body, a thin transparent robe, an energetic and smiling expression'],
            ['Range of subjects', 'Almost entirely Buddhist', 'Buddhist, Jain and Brahmanical images alike, which is a distinguishing point'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Amaravati school',
              'The third school, in the lower Krishna valley of Andhra Pradesh, under Satavahana and later Ikshvaku patronage. It used white or greenish limestone, favoured narrative panels crowded with slender, elongated, animated figures in complex compositions, and emphasised the story over the single iconic image. Its influence travelled to Sri Lanka and South-East Asia.',
            ],
            [
              'Aniconic and iconic representation',
              'The earliest Buddhist art did not show the Buddha in human form at all, representing him instead by symbols — the footprint, the empty throne, the bodhi tree, the wheel, the stupa, the riderless horse. The human image appears from around the first century of the common era, and Gandhara and Mathura both claim priority. The shift from aniconic to iconic is a favourite question.',
            ],
            [
              'Gupta sculpture',
              'Often described as the classical phase: a balance between the naturalism of Gandhara and the vigour of Mathura, with restrained ornament, a serene expression and transparent drapery indicated by fine string-like folds. The seated preaching Buddha from Sarnath is the standard example, and Gupta images established the iconographic conventions followed for centuries afterwards.',
            ],
            [
              'Bronze sculpture',
              'The Chola bronzes of the tenth to twelfth centuries, cast by the lost-wax process, are the high point of Indian metal sculpture. The Nataraja — Shiva dancing the ananda tandava within a ring of flames, one foot on the dwarf Apasmara — is the best known image and is asked about by its iconographic details. Earlier bronzes come from Harappa and from the Buddhist site of Nalanda.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'temples',
      heading: 'Temple architecture',
      eyebrow: 'Nagara, Dravida and Vesara',
      intro:
        'Three styles, defined by the shape of the tower over the sanctum and by what surrounds it. Learn the diagnostic features first and the regional sub-schools afterwards.',
      blocks: [
        {
          type: 'table',
          caption: 'The three styles',
          head: ['Feature', 'Nagara (northern)', 'Dravida (southern)'],
          rows: [
            ['Tower over the sanctum', 'Shikhara — curvilinear, rising in a continuous curve, crowned by an amalaka disc and a kalasha', 'Vimana — a stepped pyramid of receding storeys, crowned by a small stupika'],
            ['Gateway', 'No dominant gateway; the shikhara is the tallest element', 'Gopuram — the gateway tower, which in later temples became far taller than the vimana itself'],
            ['Enclosure', 'Usually no boundary wall', 'A high boundary wall enclosing a large complex'],
            ['Water', 'No temple tank as a rule', 'A temple tank within the enclosure is standard'],
            ['Common core', 'Garbhagriha, the sanctum holding the image; mandapa, the pillared hall before it; antarala, the vestibule joining them; and the pradakshina path around the sanctum', 'The same core elements, with the same names'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Vesara',
              'A hybrid of the two, developed in the Deccan under the Chalukyas and brought to its finest form by the Hoysalas. It combines a Nagara-like tower profile with Dravida-style storeys and horizontal mouldings. Aihole, Badami and Pattadakal are the Chalukyan sites, and Pattadakal is notable for containing temples in both northern and southern styles side by side.',
            ],
            [
              'Nagara sub-schools',
              'The Odisha school, where the tower is called a deul and the hall a jagamohana, with a nearly vertical shikhara that curves sharply only at the top — the Lingaraja at Bhubaneswar, the Jagannath at Puri and the Sun Temple at Konark, conceived as a chariot with wheels and horses. The Khajuraho or Chandela school, with the whole temple raised on a high platform, a panchayatana plan of a main shrine with four subsidiary ones, and richly sculpted exteriors — the Kandariya Mahadeva is the finest. The Solanki school of Gujarat and Rajasthan, with the Sun Temple at Modhera and the stepwell Rani ki Vav at Patan.',
            ],
            [
              'Dravida sub-schools',
              'Pallava, at Mahabalipuram, with the monolithic Pancha Rathas, the rock-cut mandapas, the structural Shore Temple and the Kailasanatha temple at Kanchipuram. Chola, whose Brihadeshwara temple at Thanjavur was built by Rajaraja I and which, with Gangaikondacholapuram and Airavatesvara at Darasuram, forms the Great Living Chola Temples inscribed by UNESCO. Vijayanagara, at Hampi, with the Vitthala temple, its stone chariot and musical pillars. Nayaka, at Madurai, where the Meenakshi temple\'s enormous gopurams show the late tendency for the gateway to dwarf the sanctum.',
            ],
            [
              'Hoysala architecture',
              'Built in soft chlorite schist, which permitted extraordinarily fine carving. The temples stand on a star-shaped platform, are often multi-shrined — dvikuta with two shrines, trikuta with three — and carry horizontal friezes of elephants, horses and narrative scenes around the base. Belur, Halebidu and Somanathapura are the principal sites, and the group was inscribed by UNESCO in 2023.',
            ],
            [
              'Cave and structural',
              'A cave temple is excavated out of rock and is subtractive; a structural temple is built up from cut stone and is additive. The Kailasa at Ellora is the extraordinary case of a structural form produced by excavation. Mahabalipuram shows the transition, with rock-cut rathas and mandapas alongside the structural Shore Temple.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'indo-islamic',
      heading: 'Indo-Islamic architecture',
      eyebrow: 'Sultanate, provincial and Mughal',
      intro:
        'The arrival of the true arch and the dome changed how buildings could be roofed, and the fusion of that engineering with Indian decorative traditions produced the styles below.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Trabeate and arcuate',
              'The trabeate or corbelled system spans an opening with horizontal beams and stepped-out courses, and is the older Indian method. The arcuate system uses a true arch and dome, in which the load is carried by compression along a curve, allowing much wider spans. Early Sultanate buildings often show a corbelled arch imitating an arcuate form, and the transition between the two is a common question.',
            ],
            [
              'Delhi Sultanate architecture',
              'The Quwwat-ul-Islam mosque and the Qutub Minar, begun by Qutb-ud-din Aibak and completed by Iltutmish; the Alai Darwaza, added by Alauddin Khalji, showing the first true dome and true arch in India. Tughlaq buildings are austere, with sloping batter walls and minimal ornament — Tughlaqabad and the fortress-like tombs. The Lodis introduced the double dome and the octagonal tomb, which the Mughals developed.',
            ],
            [
              'Provincial styles',
              'Bengal, with curved do-chala roofs derived from thatched huts and rich terracotta decoration, since good stone was scarce. Gujarat, absorbing local temple carving into mosque design, as at Ahmedabad. Jaunpur under the Sharqi rulers, with massive propylon screens. Malwa at Mandu, with the Jahaz Mahal and Hindola Mahal. Bijapur under the Adil Shahis, where the Gol Gumbaz has one of the largest masonry domes in the world and a whispering gallery.',
            ],
            [
              'Mughal architecture',
              'Humayun\'s Tomb in Delhi, built under Akbar, is the first substantial garden tomb in India and introduced the charbagh — a garden divided into four quarters by water channels — with a Persian-style double dome. Akbar built Fatehpur Sikri in red sandstone, including the Buland Darwaza, the Panch Mahal and the Jama Masjid. Jahangir\'s reign saw a shift towards white marble and inlay, seen at Itmad-ud-Daulah\'s tomb in Agra, sometimes called the Baby Taj. Shah Jahan built the Taj Mahal, the Red Fort and the Jama Masjid at Delhi, in white marble with pietra dura inlay. Aurangzeb built the Bibi ka Maqbara at Aurangabad and the Badshahi mosque at Lahore.',
            ],
            [
              'The vocabulary',
              'Charbagh, the fourfold garden. Iwan, the great vaulted portal. Pishtaq, the rectangular frame around it. Chhatri, the domed kiosk on the roof, borrowed from Rajput architecture. Jali, the pierced stone screen. Pietra dura, inlay of semi-precious stones in marble. Double dome, an inner dome at a comfortable height with a taller outer dome for external proportion. Squinch and pendentive, the devices that carry a circular dome on a square chamber.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Sikh and Rajput architecture',
          text:
            'Sikh architecture combines the Mughal dome and inlay with distinctive fluted domes, multiple chhatris and extensive use of gilding — the Harmandir Sahib at Amritsar is the principal example. Rajput architecture produced fortified palaces where defensive massing meets ornate interiors: Amber, Chittorgarh, Mehrangarh at Jodhpur and Hawa Mahal at Jaipur, and the elaborate stepwells and chhatri cenotaphs of the region.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'colonial',
      heading: 'Colonial and modern',
      eyebrow: 'From Gothic Revival to Lutyens',
      intro:
        'A short section, but one that appears regularly because the buildings concerned are in daily use and frequently in the news.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The colonial styles',
              'Neoclassical, with columns, pediments and symmetry, expressing imperial authority — the Government House in Calcutta. Gothic Revival, with pointed arches, spires and stained glass, of which the Chhatrapati Shivaji Maharaj Terminus in Mumbai, formerly Victoria Terminus, is the outstanding example and a UNESCO World Heritage Site. Indo-Saracenic, a deliberate hybrid grafting Indian domes, chhatris and jalis onto European plans — the Victoria Memorial in Kolkata, the Madras High Court and the Mysore Palace.',
            ],
            [
              'New Delhi',
              'Planned from 1911 by Edwin Lutyens and Herbert Baker. The Viceroy\'s House, now Rashtrapati Bhavan, combines a classical composition with a dome derived from the stupa at Sanchi and with chhatris and jalis; the Secretariat blocks and the Parliament building are by Baker. The scheme is the largest single work of the Indo-Saracenic and classical fusion.',
            ],
            [
              'Post-independence architecture',
              'Chandigarh, planned by Le Corbusier as the new capital of Punjab, with the Capitol Complex — the High Court, Secretariat and Assembly — inscribed by UNESCO. Charles Correa and B. V. Doshi are the Indian architects most often named; Doshi received the Pritzker Prize.',
            ],
            [
              'UNESCO World Heritage in India',
              'The list includes cultural sites such as the Taj Mahal, Ajanta, Ellora, Khajuraho, Hampi, Konark, Mahabalipuram, Fatehpur Sikri, Sanchi, Qutub Minar, the Great Living Chola Temples, the Sacred Ensembles of the Hoysalas and the historic city of Ahmedabad, India\'s first World Heritage City; natural sites such as Kaziranga, Manas, Keoladeo, the Sundarbans, Nanda Devi and the Valley of Flowers and the Western Ghats; and the mixed site of Khangchendzonga. The list grows at almost every session of the World Heritage Committee, so the total should be checked rather than memorised.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'painting',
      heading: 'Painting',
      eyebrow: 'Murals, miniatures and folk schools',
      intro:
        'Three distinct traditions — wall painting, the courtly miniature and the folk schools — each examined by pairing a style with its region or patron.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Mural painting',
              'The Ajanta caves in Maharashtra hold the finest surviving ancient Indian paintings, made in a tempera technique on a prepared plaster ground rather than as true fresco, depicting Jataka stories; the Padmapani and Vajrapani bodhisattvas are the best known figures. Bagh in Madhya Pradesh is closely related. Sittanavasal in Tamil Nadu is Jain. Later mural traditions include the Kerala temple murals and the Lepakshi paintings of the Vijayanagara period.',
            ],
            [
              'Mughal miniature painting',
              'Established under Akbar, whose atelier under the Persian masters Mir Sayyid Ali and Abd-us-Samad produced the illustrated Hamzanama, and which developed a distinctive fusion of Persian technique with Indian subject and colour. Under Jahangir the emphasis shifted to naturalism, portraiture and detailed studies of birds and animals — Ustad Mansur is the painter associated with this. Under Shah Jahan the style became more formal and jewelled, and under Aurangzeb patronage declined and artists dispersed to regional courts.',
            ],
            [
              'Rajasthani and Pahari schools',
              'Rajasthani painting includes the Mewar, Bundi, Kota, Kishangarh, Marwar and Bikaner schools; the Kishangarh style is famous for the Bani Thani, an idealised female profile with elongated eyes. Pahari painting, from the Himalayan foothills, runs from the bold, intense Basohli style through Guler to the refined and lyrical Kangra style, much of it devoted to Krishna themes and to the Gita Govinda.',
            ],
            [
              'Deccan and other courtly schools',
              'The Deccan schools of Bijapur, Golconda and Ahmednagar, with strong Persian and Turkish influence and a distinctive rich palette. The Company school, produced by Indian artists for European patrons in the eighteenth and nineteenth centuries, combining Indian subjects with European perspective and watercolour technique.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Folk and tribal painting traditions',
          head: ['Tradition', 'Region', 'Characteristics'],
          rows: [
            ['Madhubani or Mithila', 'Bihar', 'Painted on walls and paper with natural pigments; double-line borders, dense filling, and mythological and ritual subjects. Traditionally by women.'],
            ['Warli', 'Maharashtra', 'White pigment on an earth-coloured ground, using circles, triangles and stick figures to depict daily and ritual life.'],
            ['Pattachitra', 'Odisha and West Bengal', 'Cloth-based scroll painting, with rich colour, elaborate borders and Jagannath and Krishna themes.'],
            ['Kalamkari', 'Andhra Pradesh', 'Hand-painted or block-printed cotton using a pen, the kalam; the Srikalahasti style is freehand and temple-related, the Machilipatnam style block-printed.'],
            ['Phad', 'Rajasthan', 'Long narrative scrolls of folk deities, used by travelling bards as a backdrop to performance.'],
            ['Gond', 'Madhya Pradesh', 'Tribal painting built from dots and dashes filling animal and tree forms in vivid colour.'],
            ['Kalighat', 'West Bengal', 'Bold, economical brushwork on paper, produced near the Kalighat temple; social satire as well as devotional subjects.'],
            ['Thangka', 'Ladakh, Sikkim, Himalayan Buddhist regions', 'Painted or embroidered scrolls of Buddhist deities and mandalas, mounted on brocade.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Modern Indian painting',
              'Raja Ravi Varma brought European academic realism and oil painting to Indian mythological subjects and, through the printing press, to mass circulation. The Bengal School, led by Abanindranath Tagore with the support of E. B. Havell, reacted against that Westernisation and drew on Mughal, Ajanta and Japanese wash techniques as a nationalist artistic project. Nandalal Bose and Jamini Roy followed in and against that tradition. The Progressive Artists\' Group, founded in Bombay in 1947 by F. N. Souza, M. F. Husain, S. H. Raza and others, turned instead towards international modernism. Amrita Sher-Gil stands slightly apart, combining European training with Indian subject matter.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A temple has a curvilinear tower crowned by an amalaka, no boundary wall and no gateway tower. Which style is it?',
      steps: [
        'The Dravida style has a stepped pyramidal vimana, a high boundary wall, a gopuram and usually a temple tank.',
        'A curvilinear tower crowned by an amalaka disc is a shikhara, which is the Nagara signature.',
        'The absence of an enclosure and a dominant gateway confirms it.',
      ],
      answer: 'Nagara — the northern style.',
    },
    {
      q: 'How would you distinguish a Gandhara Buddha from a Mathura Buddha?',
      steps: [
        'Look first at the material: Gandhara used grey-blue schist, Mathura spotted red sandstone.',
        'Then at the treatment: Gandhara shows wavy hair, sharp features and a heavy robe with deep naturalistic folds, reflecting Greco-Roman influence; Mathura shows a rounder fleshier body, a thin transparent robe and an energetic expression.',
        'A further clue is subject range: Mathura produced Jain and Brahmanical images as well, which Gandhara essentially did not.',
      ],
      answer: 'Material, drapery treatment and facial type — and Mathura\'s wider range of subjects.',
    },
    {
      q: 'What is the difference between a chaitya and a vihara?',
      steps: [
        'Both occur at the same rock-cut sites, so they must be distinguished by function.',
        'A chaitya is a prayer hall, apsidal at the far end with a stupa at the apse, a barrel-vaulted roof and a horseshoe window at the entrance.',
        'A vihara is a monastery — a hall or courtyard surrounded by small residential cells for monks.',
      ],
      answer: 'A chaitya is for worship; a vihara is for residence.',
    },
    {
      q: 'Which monument is a structural temple produced by excavation, and who built it?',
      steps: [
        'Rock-cut architecture is normally subtractive and produces caves rather than freestanding buildings.',
        'The Kailasa temple, Cave 16 at Ellora, is a complete Dravida-style temple carved downward out of a single hillside.',
        'It was excavated under the Rashtrakuta king Krishna I.',
      ],
      answer: 'The Kailasa temple at Ellora, under Krishna I of the Rashtrakutas.',
    },
    {
      q: 'Which building introduced the charbagh to India, and under whose reign was it built?',
      steps: [
        'The charbagh is a garden divided into four quarters by water channels, of Persian origin.',
        'Humayun\'s Tomb in Delhi is the first substantial garden tomb in India and introduced the form.',
        'Humayun was already dead; the tomb was built under Akbar, commissioned by Humayun\'s widow.',
      ],
      answer: 'Humayun\'s Tomb, built during Akbar\'s reign.',
    },
    {
      q: 'The Barabar caves were excavated for which sect?',
      steps: [
        'They are the earliest surviving rock-cut caves in India, made in the Mauryan period and famous for their polished interiors.',
        'It is natural to assume they are Buddhist, since most early rock-cut architecture is.',
        'In fact they were excavated under Ashoka and his successor for the Ajivika sect.',
      ],
      answer: 'The Ajivikas — not the Buddhists.',
    },
    {
      q: 'A painting shows a woman in sharp profile with greatly elongated eyes and an arched brow. Which school?',
      steps: [
        'This is a courtly miniature convention rather than a folk or mural one.',
        'Among the Rajasthani schools, the Kishangarh style is distinguished by exactly this idealised elongated female profile.',
        'The best-known example is the Bani Thani.',
      ],
      answer: 'The Kishangarh school of Rajasthani painting.',
    },
    {
      q: 'Why did the Bengal School emerge, and who led it?',
      steps: [
        'Raja Ravi Varma had brought European academic realism and oil painting into Indian art, and colonial art schools taught the Western tradition.',
        'The Bengal School was a deliberate reaction against that, seeking an authentically Indian modern idiom.',
        'It was led by Abanindranath Tagore, with the support of E. B. Havell, drawing on Mughal, Ajanta and Japanese wash techniques as a nationalist artistic project.',
      ],
      answer: 'As a nationalist reaction against Westernisation in art, led by Abanindranath Tagore.',
    },
  ],

  practice: [
    {
      q: 'The Lion Capital adopted as India\'s State Emblem comes from:',
      options: ['Rampurva', 'Sanchi', 'Lauriya Nandangarh', 'Sarnath'],
      answer: 3,
      explain: 'The Sarnath capital has four addorsed lions; the wheel from its abacus became the chakra on the national flag.',
    },
    {
      q: 'The gateway of a stupa is called the:',
      options: ['Harmika', 'Yashti', 'Medhi', 'Torana'],
      answer: 3,
      explain: 'The four toranas at Sanchi carry the finest narrative sculpture of the early Buddhist period.',
    },
    {
      q: 'The Gandhara school of sculpture used which material?',
      options: ['Red sandstone', 'White limestone', 'Grey-blue schist', 'Chlorite schist'],
      answer: 2,
      explain: 'Mathura used spotted red sandstone, Amaravati white limestone, and the Hoysalas chlorite schist.',
    },
    {
      q: 'The tower above the sanctum in a Dravida temple is called the:',
      options: ['Shikhara', 'Deul', 'Gopuram', 'Vimana'],
      answer: 3,
      explain: 'The gopuram is the gateway tower. Shikhara is the Nagara term and deul the Odisha variant of it.',
    },
    {
      q: 'The Kailasa temple at Ellora was built under the:',
      options: ['Chalukyas', 'Rashtrakutas', 'Pallavas', 'Cholas'],
      answer: 1,
      explain: 'Cave 16, excavated under Krishna I — a complete temple carved downward from a single rock face.',
    },
    {
      q: 'The Brihadeshwara temple at Thanjavur was built by:',
      options: ['Rajendra Chola', 'Rajaraja I', 'Krishnadeva Raya', 'Mahendravarman I'],
      answer: 1,
      explain: 'It is one of the Great Living Chola Temples inscribed by UNESCO, along with Gangaikondacholapuram and Airavatesvara.',
    },
    {
      q: 'The first true arch and true dome in India appear in the:',
      options: ['Qutub Minar', 'Alai Darwaza', 'Quwwat-ul-Islam mosque', 'Tughlaqabad fort'],
      answer: 1,
      explain: 'Added by Alauddin Khalji. Earlier Sultanate work used corbelled arches imitating an arcuate form.',
    },
    {
      q: 'Which monument is the first substantial garden tomb in India?',
      options: ['Taj Mahal', 'Humayun\'s Tomb', 'Itmad-ud-Daulah\'s Tomb', 'Sikandra'],
      answer: 1,
      explain: 'Built during Akbar\'s reign, it introduced the charbagh plan and the Persian double dome.',
    },
    {
      q: 'The Gol Gumbaz at Bijapur is famous for its:',
      options: ['Pietra dura inlay', 'Whispering gallery', 'Terracotta panels', 'Star-shaped platform'],
      answer: 1,
      explain: 'Built by the Adil Shahis, it has one of the largest masonry domes in the world.',
    },
    {
      q: 'Hoysala temples are built on a distinctive:',
      options: ['Star-shaped platform', 'Circular plinth', 'Stepped pyramid', 'Raised terrace with a tank'],
      answer: 0,
      explain: 'Carved in soft chlorite schist, at Belur, Halebidu and Somanathapura; inscribed by UNESCO in 2023.',
    },
    {
      q: 'Warli painting belongs to:',
      options: ['Bihar', 'Maharashtra', 'Odisha', 'Andhra Pradesh'],
      answer: 1,
      explain: 'White pigment on an earth ground, using circles, triangles and stick figures. Madhubani is from Bihar.',
    },
    {
      q: 'The Bani Thani is associated with which school of painting?',
      options: ['Bundi', 'Kishangarh', 'Basohli', 'Kangra'],
      answer: 1,
      explain: 'An idealised female profile with elongated eyes — the signature of the Kishangarh style.',
    },
    {
      q: 'The paintings of Ajanta depict chiefly:',
      options: ['Jain Tirthankaras', 'Jataka stories', 'Krishna legends', 'Court portraits'],
      answer: 1,
      explain: 'They were executed in a tempera technique on prepared plaster; Padmapani and Vajrapani are the best known figures.',
    },
    {
      q: 'Chhatrapati Shivaji Maharaj Terminus in Mumbai is built in which style?',
      options: ['Indo-Saracenic', 'Neoclassical', 'Gothic Revival', 'Art Deco'],
      answer: 2,
      explain: 'A UNESCO World Heritage Site, formerly Victoria Terminus, with pointed arches, spires and stained glass.',
    },
    {
      q: 'The Bengal School of art was led by:',
      options: ['Raja Ravi Varma', 'Abanindranath Tagore', 'Jamini Roy', 'M. F. Husain'],
      answer: 1,
      explain: 'It was a nationalist reaction against Western academic realism, supported by E. B. Havell.',
    },
    {
      q: 'The Sun Temple at Konark is conceived in the form of a:',
      options: ['Lotus', 'Chariot', 'Mountain', 'Ship'],
      answer: 1,
      explain: 'A chariot of the sun god with carved wheels and horses, built by the Eastern Ganga ruler Narasimhadeva I.',
    },
  ],

  faqs: [
    {
      q: 'Why is art and culture worth preparing when it looks so vast?',
      a: 'Because it is asked far more heavily than it is prepared. UPSC Prelims carries four to seven questions on it, and most candidates leave it until last or skip it. It is also almost entirely pairing-based — style with dynasty, monument with builder, art form with state — which makes it learnable in a way that a subject requiring judgment would not be.',
    },
    {
      q: 'How do I tell Nagara from Dravida quickly?',
      a: 'Look at the tower and the enclosure. A Nagara temple has a curvilinear shikhara crowned by an amalaka, and usually no boundary wall or gateway tower. A Dravida temple has a stepped pyramidal vimana, a high boundary wall, one or more gopurams and a temple tank. In late Dravida temples the gopuram is taller than the vimana, which looks paradoxical until you know the sequence.',
    },
    {
      q: 'What is the difference between a stupa, a chaitya and a vihara?',
      a: 'A stupa is a solid hemispherical monument enclosing relics, worshipped by walking round it. A chaitya is a prayer hall, usually rock-cut, apsidal, with a stupa inside at the far end. A vihara is a monastery — living quarters for monks arranged around a hall or courtyard. All three occur at the same sites, which is why the distinction is examined.',
    },
    {
      q: 'Was Ajanta painted in fresco?',
      a: 'Not in the strict sense. True fresco is painted onto wet plaster so that the pigment binds chemically as the plaster sets. Ajanta was painted on a prepared plaster ground using a tempera technique with a binding medium, which is why the term fresco-secco or simply mural is more accurate. The distinction appears in questions.',
    },
    {
      q: 'Which UNESCO World Heritage numbers should I memorise?',
      a: 'None of them. The Indian total rises at almost every session of the World Heritage Committee, so any figure printed in study material is provisional. Learn instead which famous sites are inscribed, and which category each falls into — cultural, natural or mixed. Khangchendzonga as India\'s only mixed site, and Ahmedabad as its first World Heritage City, are the kinds of fact that are actually asked.',
    },
    {
      q: 'What makes Ellora unique?',
      a: 'It is the only major rock-cut site containing Buddhist, Hindu and Jain excavations together, thirty-four caves in all, which is itself evidence of religious coexistence under Rashtrakuta patronage. It also contains the Kailasa temple, Cave 16 — a complete structural-looking temple carved downward out of a single hillside, the most ambitious rock excavation anywhere in India.',
    },
    {
      q: 'How should I revise the painting schools?',
      a: 'Split them into three groups and revise each as a set. Murals — Ajanta, Bagh, Sittanavasal, Lepakshi, Kerala. Court miniatures — Mughal by reign, then Rajasthani, Pahari and Deccan by school. Folk and tribal — by state, since that is invariably how the question is framed. Trying to hold all of them as one list is what makes the topic feel unmanageable.',
    },
    {
      q: 'Which facts in this topic change?',
      a: 'Almost none. Monuments and their builders do not move. The only things that change are the World Heritage list, which grows, and occasionally a revised attribution or dating following new scholarship. This is one of the most stable blocks in the syllabus, which is another reason it repays the effort.',
    },
    {
      q: 'Do I need to recognise images?',
      a: 'Increasingly, yes for UPSC. Recent papers have described a monument or an artefact without naming it and asked for identification. That is easier than it sounds if you have looked at pictures of the major sites while reading — half an hour of looking at Sanchi, Khajuraho, Thanjavur, Hampi, Fatehpur Sikri and the Taj is worth more than another page of notes.',
    },
    {
      q: 'How many questions come from architecture and sculpture?',
      a: 'Four to seven in UPSC Prelims when art and culture is counted as a whole, of which architecture and sculpture usually form the largest part; two to three in SSC CGL Tier 1; three to five in state PSC prelims, weighted towards the state\'s own monuments; and one to two in RRB NTPC and in NDA and CDS.',
    },
  ],

  related: [
    { label: 'Performing Arts', to: '/study-material/art-culture/performing-arts/' },
    { label: 'Literature & Heritage', to: '/study-material/art-culture/literature-heritage/' },
    { label: 'Ancient India', to: '/study-material/history/ancient-india/' },
    { label: 'Medieval India', to: '/study-material/history/medieval-india/' },
    { label: 'All Art & Culture', to: '/study-material/art-culture/' },
  ],
}
