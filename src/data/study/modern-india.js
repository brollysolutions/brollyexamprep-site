/**
 * Modern India — /study-material/history/modern-india/
 *
 * The heaviest-weighted history topic in every exam that asks history at all,
 * and the one where precise dates matter most. Organised chronologically
 * because the causation is itself examined here — why one movement followed
 * another is a question in a way that it is not for earlier periods.
 */
export default {
  subject: 'history',
  subjectName: 'History',
  slug: 'modern-india',
  title: 'Modern India',
  seoTitle: 'Modern Indian History & Freedom Struggle | Notes, Dates & Practice',
  metaDescription:
    'Complete Modern India study material for UPSC, SSC and state exams — European arrival and Company rule, land revenue systems, the Revolt of 1857.',
  readMinutes: 26,
  lead: [
    'Modern India carries more marks than ancient and medieval combined in almost every exam, and it is the one period where exact dates are routinely asked. It is also the period where causation is examined: why the Non-Cooperation Movement was withdrawn, why the Simon Commission was boycotted, why 1935 mattered.',
    'The page therefore runs chronologically, and each section ends with the link to the next — because a list of events learned out of order is much harder to hold than a sequence in which each step explains the one after it. Dates given here are the standard ones; where an event spans days, both the start and the decisive date are shown.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '8–15 questions', note: 'The largest history block, with heavy emphasis on the national movement and reform.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–6 questions', note: 'Dates, leaders and movements — the most reliably scoring history block.' },
    { exam: 'State PSC Prelims', count: '8–15 questions', note: 'Including the freedom struggle in the state concerned.' },
    { exam: 'RRB NTPC / Group D', count: '3–5 questions', note: 'Freedom struggle dates and leaders.' },
    { exam: 'CTET / Teaching (Social Studies)', count: '3–5 questions', note: 'NCERT-level questions on colonialism, 1857 and the national movement.' },
  ],

  contents: [
    { icon: 'globe', title: 'Europeans and Company rule', sub: 'From Calicut to the Diwani', href: '#company' },
    { icon: 'chart', title: 'Land revenue and the drain', sub: 'How colonial economics worked', href: '#policies' },
    { icon: 'target', title: 'The Revolt of 1857', sub: 'Causes, centres and consequences', href: '#revolt' },
    { icon: 'user', title: 'Socio-religious reform', sub: 'Samajs, missions and movements', href: '#reform' },
    { icon: 'book', title: 'The Congress and Swadeshi', sub: '1885 to 1916', href: '#congress-early' },
    { icon: 'play', title: 'The Gandhian mass movements', sub: 'Non-Cooperation to Quit India', href: '#gandhi-era' },
    { icon: 'bell', title: 'Revolutionary nationalism', sub: 'The parallel armed struggle', href: '#revolutionaries' },
    { icon: 'clock', title: 'The road to Partition', sub: 'Acts, missions and 1947', href: '#independence' },
    { icon: 'check', title: 'Solved examples', sub: 'Ten questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'company',
      heading: 'Europeans and Company rule',
      eyebrow: '1498–1857',
      intro:
        'Four European companies competed for Indian trade, and one of them ended up governing. Two battles in Bengal, seven years apart, are the hinge of the whole story.',
      blocks: [
        {
          type: 'table',
          caption: 'The European companies',
          head: ['Power', 'Arrival and founding', 'Key figures and outcome'],
          rows: [
            ['Portuguese', 'Vasco da Gama reached Calicut in 1498', 'Francisco de Almeida pursued a blue-water policy; Afonso de Albuquerque captured Goa in 1510. First to arrive and last to leave.'],
            ['English', 'East India Company chartered in 1600 by Elizabeth I', 'Factories at Surat, Madras, Bombay and Calcutta; eventually the ruling power.'],
            ['Dutch', 'United East India Company founded in 1602', 'Concentrated on the spice trade of the archipelago; largely withdrew from India after defeats by the English.'],
            ['French', 'Company founded in 1664 under Colbert', 'Based at Pondicherry; contested southern India in the Carnatic Wars under Dupleix and lost.'],
          ],
        },
        {
          type: 'table',
          caption: 'The two decisive battles, and what followed',
          head: ['Event', 'Date', 'Significance'],
          rows: [
            ['Battle of Plassey', '1757', 'Robert Clive defeated Siraj-ud-Daulah, helped by Mir Jafar\'s defection. It gave the Company political mastery of Bengal but not yet legal authority.'],
            ['Battle of Buxar', '1764', 'The Company defeated the combined forces of Mir Qasim, Shuja-ud-Daulah of Awadh and the Mughal emperor Shah Alam II — a far more decisive military verdict than Plassey.'],
            ['Treaty of Allahabad', '1765', 'Shah Alam II granted the Company the Diwani — the right to collect revenue — of Bengal, Bihar and Odisha. This is the legal beginning of Company rule.'],
            ['Regulating Act', '1773', 'The first parliamentary attempt to control the Company; created the office of Governor-General of Bengal.'],
            ["Pitt's India Act", '1784', 'Established a Board of Control, creating dual government by Company and Crown.'],
            ['Government of India Act', '1858', 'After the Revolt, the Company was abolished and Indian government transferred to the Crown.'],
          ],
        },
        {
          type: 'note',
          title: 'The Doctrine of Lapse',
          text:
            'Applied by Dalhousie between 1848 and 1856, it held that a princely state without a natural heir lapsed to the Company, disallowing adopted successors. Satara went in 1848, Jhansi in 1853 and Nagpur in 1854; Awadh was annexed in 1856 on the different ground of alleged misgovernment. These annexations are the standard political cause cited for the Revolt of 1857.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'policies',
      heading: 'Land revenue and the drain',
      eyebrow: 'The economics of colonialism',
      intro:
        'Three revenue systems covered different parts of India, and the differences between them are asked directly. The critique of colonial economics that Indian nationalists developed is asked just as often.',
      blocks: [
        {
          type: 'table',
          caption: 'The three land revenue systems',
          head: ['System', 'Where and when', 'How it worked'],
          rows: [
            ['Permanent Settlement', 'Bengal, Bihar and Odisha; introduced by Cornwallis in 1793', 'Zamindars recognised as landowners, with the revenue demand fixed in perpetuity. Secure for the state, but it left cultivators without rights against the zamindar.'],
            ['Ryotwari', 'Madras and Bombay; associated with Thomas Munro and Alexander Read', 'Settlement made directly with the individual cultivator, the ryot, and revised periodically. No intermediary, but the demand was often high and revisions frequent.'],
            ['Mahalwari', 'North-western provinces and Punjab; from the 1820s', 'Settlement made with the village or estate — the mahal — as a unit, with joint responsibility for payment.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The drain of wealth',
              "Dadabhai Naoroji's argument, set out in Poverty and Un-British Rule in India, that a portion of India's wealth was transferred to Britain each year without an equivalent return — through home charges, salaries and pensions paid in England, and the profits of British capital. It became the intellectual core of the moderate nationalist critique.",
            ],
            [
              'Deindustrialisation',
              'The argument that British tariff policy and machine-made imports destroyed Indian handicrafts, particularly textiles, pushing artisans back onto the land and increasing pressure on agriculture.',
            ],
            [
              'Commercialisation of agriculture',
              'The shift to cash crops such as indigo, cotton, jute and opium, grown for export rather than subsistence — profitable for some, but leaving cultivators exposed to price swings and to famine.',
            ],
            [
              'Famine and the state',
              'Repeated famines through the nineteenth century, and a Famine Commission under Richard Strachey after the great famine of the late 1870s. Nationalists treated the frequency of famine as evidence against the colonial economic order.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'revolt',
      heading: 'The Revolt of 1857',
      eyebrow: 'The first large challenge',
      intro:
        'Known variously as a sepoy mutiny, the first war of independence and a civil rebellion — the label itself is examined. What is not disputed is the sequence of events and the constitutional change that followed.',
      blocks: [
        {
          type: 'table',
          caption: 'Centres and leaders',
          head: ['Centre', 'Leader', 'Note'],
          rows: [
            ['Delhi', 'Bahadur Shah II', 'Proclaimed the symbolic head of the revolt; later tried and exiled to Rangoon.'],
            ['Kanpur', 'Nana Saheb, with Tantia Tope', 'Nana Saheb was the adopted son of the last Peshwa, whose pension had been discontinued.'],
            ['Jhansi', 'Rani Lakshmibai', 'Jhansi had been annexed in 1853 under the Doctrine of Lapse.'],
            ['Lucknow', 'Begum Hazrat Mahal', 'Awadh had been annexed in 1856 on grounds of misgovernment.'],
            ['Bihar', 'Kunwar Singh', 'A zamindar of Jagdishpur, and among the oldest leaders of the revolt.'],
            ['Bareilly', 'Khan Bahadur Khan', 'A descendant of the former Rohilla rulers.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The immediate spark',
              'The greased cartridge of the new Enfield rifle, rumoured to be smeared with cow and pig fat, which sepoys had to bite. Mangal Pandey\'s attack at Barrackpore on 29 March 1857 preceded the general rising; he was executed on 8 April.',
            ],
            [
              'The outbreak',
              'The revolt proper began at Meerut on 10 May 1857, when sepoys freed their imprisoned comrades and marched on Delhi, where they proclaimed Bahadur Shah II as emperor the next day.',
            ],
            [
              'The deeper causes',
              'Political — annexations under the Doctrine of Lapse and the ending of pensions. Economic — revenue pressure and the decline of handicrafts. Social and religious — fears about conversion and about reforms touching custom. Military — pay and promotion grievances and service overseas.',
            ],
            [
              'Why it failed',
              'It was confined largely to the Gangetic plain and central India, with the south, Bengal and Punjab quiet; the leadership was regional rather than coordinated; and the rebels were outmatched in weapons, communications and organisation. Several princely rulers actively supported the Company.',
            ],
            [
              'What followed',
              'The Government of India Act 1858 abolished the Company and transferred power to the Crown, creating the office of Secretary of State for India. The Queen\'s Proclamation of 1 November 1858 promised non-interference in religion and an end to annexation, and the army was reorganised with a higher proportion of British troops.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'reform',
      heading: 'Socio-religious reform',
      eyebrow: 'The nineteenth century',
      intro:
        'A dense set of organisation-founder-year triples, which is exactly the form the questions take. Learn them as a table rather than as a narrative.',
      blocks: [
        {
          type: 'table',
          caption: 'The reform organisations',
          head: ['Organisation', 'Founder and year', 'What it stood for'],
          rows: [
            ['Brahmo Samaj', 'Raja Ram Mohan Roy, 1828', 'Monotheism, opposition to idolatry and to sati. Roy\'s campaign contributed to the abolition of sati in 1829 under Bentinck. Later led by Debendranath Tagore and Keshab Chandra Sen.'],
            ['Young Bengal', 'Henry Vivian Derozio, 1820s', 'A radical student movement at Hindu College, rationalist and iconoclastic.'],
            ['Prarthana Samaj', 'Atmaram Pandurang, 1867', 'The Maharashtrian counterpart of the Brahmo Samaj; associated with M. G. Ranade.'],
            ['Satyashodhak Samaj', 'Jyotiba Phule, 1873', 'Directed against caste oppression and for the education of women and lower castes; Phule wrote Gulamgiri.'],
            ['Arya Samaj', 'Dayanand Saraswati, 1875', 'The slogan "Back to the Vedas"; opposed idolatry and caste by birth; ran the shuddhi movement. Dayanand wrote Satyarth Prakash.'],
            ['Aligarh Movement', 'Sir Syed Ahmad Khan; MAO College, 1875', 'Modern education for Indian Muslims; the college later became Aligarh Muslim University.'],
            ['Theosophical Society', 'Blavatsky and Olcott, 1875; Indian headquarters at Adyar from 1882', 'Later led in India by Annie Besant, who also founded a Home Rule League.'],
            ['Ramakrishna Mission', 'Swami Vivekananda, 1897', 'Service as worship, following Ramakrishna Paramahansa. Vivekananda had addressed the Parliament of Religions at Chicago in 1893.'],
          ],
        },
        {
          type: 'note',
          title: 'The legislative landmarks',
          text:
            'Sati was abolished in 1829 under Lord William Bentinck, following Raja Ram Mohan Roy\'s campaign. The Hindu Widows\' Remarriage Act was passed in 1856, largely through the efforts of Ishwar Chandra Vidyasagar. These two are asked far more often than any other reform legislation of the century.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'congress-early',
      heading: 'The Congress and Swadeshi',
      eyebrow: '1885–1916',
      intro:
        'Thirty years in which the Congress moved from petitioning to mass agitation, split, and then reunited. The Partition of Bengal is the pivot.',
      blocks: [
        {
          type: 'table',
          caption: 'The sequence',
          head: ['Event', 'Year', 'What it changed'],
          rows: [
            ['Founding of the Indian National Congress', '1885', 'Founded with the help of A. O. Hume, a retired civil servant. The first session met at Bombay in December 1885 under W. C. Bonnerjee, with 72 delegates.'],
            ['The Moderate phase', '1885–1905', 'Petitions, resolutions and constitutional argument, led by Dadabhai Naoroji, Gopal Krishna Gokhale, Pherozeshah Mehta and Surendranath Banerjee.'],
            ['Partition of Bengal', '1905', 'Announced by Curzon and widely read as an attempt to divide Hindus and Muslims. It triggered the Swadeshi and Boycott movements, and was annulled in 1911.'],
            ['Rise of the Extremists', 'from 1905', 'Lala Lajpat Rai, Bal Gangadhar Tilak and Bipin Chandra Pal, with Aurobindo Ghosh. Tilak\'s "Swaraj is my birthright and I shall have it" belongs to this phase.'],
            ['Founding of the Muslim League', '1906', 'At Dhaka, to press separate Muslim political interests.'],
            ['Surat Split', '1907', 'The Congress divided between Moderates and Extremists; it reunited in 1916.'],
            ['Morley-Minto Reforms', '1909', 'Expanded legislative councils and introduced separate electorates for Muslims.'],
            ['Lucknow Pact and Home Rule Leagues', '1916', 'The Congress and the League agreed a joint scheme, and the Congress reunited. Tilak founded a Home Rule League in April 1916 and Annie Besant another in September.'],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'gandhi-era',
      heading: 'The Gandhian mass movements',
      eyebrow: '1917–1942',
      intro:
        'Three great movements, each with a trigger, a method and a reason for ending. Learn those three things for each and the period is largely covered.',
      blocks: [
        {
          type: 'table',
          caption: 'The early satyagrahas',
          head: ['Satyagraha', 'Year', 'Issue'],
          rows: [
            ['Champaran', '1917', 'Indigo cultivators in Bihar forced to grow the crop under the tinkathia system. Gandhi\'s first satyagraha in India.'],
            ['Kheda', '1918', 'Revenue remission for Gujarati peasants after crop failure.'],
            ['Ahmedabad Mill Strike', '1918', 'A dispute over wages, in which Gandhi used a hunger strike for the first time in India.'],
          ],
        },
        {
          type: 'table',
          caption: 'The three mass movements',
          head: ['Movement', 'Dates', 'Trigger, method and ending'],
          rows: [
            ['Non-Cooperation', '1920–1922', 'Triggered by the Rowlatt Act, the Jallianwala Bagh massacre of 13 April 1919 and the Khilafat question. Method: boycott of schools, courts, titles and foreign cloth. Withdrawn by Gandhi after the violence at Chauri Chaura on 5 February 1922.'],
            ['Civil Disobedience', '1930–1934', 'Triggered by the rejection of the Nehru Report and the Purna Swaraj resolution at Lahore in December 1929. Began with the Dandi March, 12 March to 6 April 1930, breaking the salt law. Suspended after the Gandhi-Irwin Pact of March 1931, resumed, and finally called off in 1934.'],
            ['Quit India', '1942', 'Triggered by the failure of the Cripps Mission and the approach of the war to India\'s borders. Launched on 8 August 1942 with the call to "Do or Die". The leadership was arrested at once and the movement became largely spontaneous.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Rowlatt Act and Jallianwala Bagh',
              'The Rowlatt Act of 1919 allowed detention without trial. Protest against it led to the gathering at Jallianwala Bagh in Amritsar on 13 April 1919, where troops under General Dyer opened fire. Rabindranath Tagore renounced his knighthood in response.',
            ],
            [
              'The Simon Commission',
              'Appointed in 1927 and arriving in 1928, with no Indian member — hence the boycott and the slogan "Simon Go Back". Lala Lajpat Rai was injured in a lathi charge at Lahore and died soon after, an event that pushed several young revolutionaries to act.',
            ],
            [
              'Nehru Report and the Lahore session',
              'The Nehru Report of 1928 proposed dominion status. Its rejection led the Congress at Lahore in December 1929 to adopt Purna Swaraj, complete independence, and to observe 26 January 1930 as Independence Day — the date later chosen for the Constitution to come into force.',
            ],
            [
              'Round Table Conferences and the Poona Pact',
              'Three conferences were held in London in 1930, 1931 and 1932; Gandhi attended only the second, after the Gandhi-Irwin Pact. The Communal Award of 1932 offered separate electorates to the depressed classes; Gandhi\'s fast against it led to the Poona Pact with B. R. Ambedkar in September 1932, which substituted reserved seats within joint electorates.',
            ],
            [
              'The Government of India Act 1935',
              'Provincial autonomy, an expanded franchise and a proposed all-India federation that was never established. Elections under it in 1937 brought Congress ministries to office in most provinces; they resigned in 1939 when India was declared a belligerent without consultation.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'revolutionaries',
      heading: 'Revolutionary nationalism',
      eyebrow: 'The parallel struggle',
      intro:
        'A separate current running alongside the Congress, in two main phases — before the First World War and again in the late 1920s.',
      blocks: [
        {
          type: 'table',
          caption: 'Organisations and episodes',
          head: ['Organisation or episode', 'Date', 'Associated with'],
          rows: [
            ['Anushilan Samiti and Jugantar', 'from 1902', 'Bengal; the earliest organised revolutionary groups.'],
            ['Muzaffarpur bombing and the Alipore case', '1908', 'Khudiram Bose and Prafulla Chaki; the subsequent trial implicated Aurobindo Ghosh.'],
            ['Ghadar Party', '1913', 'Founded at San Francisco by Indian emigrants, with Lala Har Dayal and Sohan Singh Bhakna.'],
            ['Hindustan Republican Association, later HSRA', '1924, renamed 1928', 'Chandrashekhar Azad and Bhagat Singh; the Kakori train robbery of 1925 was an HRA action.'],
            ['Killing of Saunders', '1928', 'In retaliation for the assault on Lala Lajpat Rai during the Simon Commission protests.'],
            ['Central Legislative Assembly bombing', '8 April 1929', 'Bhagat Singh and Batukeshwar Dutt threw bombs and courted arrest to "make the deaf hear".'],
            ['Chittagong Armoury Raid', '1930', 'Led by Surya Sen, with Kalpana Datta and Pritilata Waddedar among the participants.'],
            ['Execution of Bhagat Singh, Rajguru and Sukhdev', '23 March 1931', 'Carried out in Lahore, days before the Karachi Congress session.'],
          ],
        },
        {
          type: 'note',
          title: 'Subhas Chandra Bose and the INA',
          text:
            'Bose left the Congress presidency in 1939 after a dispute with Gandhi, founded the Forward Bloc, escaped from India in 1941 and took charge of the Indian National Army in South-East Asia in 1943. He proclaimed the Provisional Government of Azad Hind at Singapore on 21 October 1943. The INA trials at the Red Fort in 1945 and 1946 produced a wave of public sympathy that historians count among the pressures pushing Britain towards withdrawal.',
        },
      ],
    },

    /* ── 8 ─────────────────────────────────────────────────────── */
    {
      id: 'independence',
      heading: 'The road to Partition',
      eyebrow: '1940–1947',
      intro:
        'A rapid sequence of offers, missions and plans. Each was rejected for a reason, and the reasons are what the questions test.',
      blocks: [
        {
          type: 'table',
          caption: 'The final sequence',
          head: ['Proposal or event', 'Date', 'Outcome'],
          rows: [
            ['August Offer', '1940', 'Offered dominion status after the war and an expanded council. Rejected by the Congress.'],
            ['Cripps Mission', '1942', 'Offered dominion status after the war with a right of provinces to opt out. Rejected; Gandhi is said to have called it a post-dated cheque.'],
            ['Quit India Movement', '8 August 1942', 'Launched after the Cripps failure; the leadership was arrested within hours.'],
            ['Wavell Plan and Simla Conference', '1945', 'Proposed a reconstituted executive council with parity between Hindus and Muslims; broke down over the League\'s claim to nominate all Muslim members.'],
            ['Cabinet Mission', '1946', 'Rejected the demand for a separate state but proposed a three-tier grouping scheme and an interim government. Accepted in part, then unravelled.'],
            ['Direct Action Day', '16 August 1946', 'Called by the Muslim League; widespread communal violence followed, beginning in Calcutta.'],
            ['Mountbatten Plan', '3 June 1947', 'Accepted partition and set out the mechanism for it.'],
            ['Indian Independence Act', 'Royal assent 18 July 1947', 'Created the two dominions with effect from 15 August 1947. The boundary was drawn by a commission under Cyril Radcliffe.'],
          ],
        },
        {
          type: 'note',
          title: 'Why 26 January and 15 August are different dates',
          text:
            'The Congress adopted Purna Swaraj at Lahore in December 1929 and observed 26 January 1930 as Independence Day. Actual independence came on 15 August 1947, under the Indian Independence Act. When the Constitution was ready, its commencement was deliberately set for 26 January 1950 so that the older date would keep its meaning — which is why India has both a Republic Day and an Independence Day.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Why is the Battle of Buxar considered more decisive than Plassey?',
      steps: [
        'Plassey in 1757 was won largely through Mir Jafar\'s defection, and left the Company as kingmaker rather than ruler.',
        'Buxar in 1764 was a straight military defeat of three allied powers — Mir Qasim, the Nawab of Awadh and the Mughal emperor.',
        'It produced the Treaty of Allahabad in 1765, under which the Company received the Diwani of Bengal, Bihar and Odisha — legal authority, not just influence.',
      ],
      answer: 'Buxar defeated the three principal Indian powers together and produced the Diwani.',
    },
    {
      q: 'Distinguish the three land revenue systems.',
      steps: [
        'Permanent Settlement, Cornwallis, 1793, Bengal: zamindars made proprietors with a demand fixed forever.',
        'Ryotwari, Munro and Read, Madras and Bombay: settlement directly with the individual cultivator, revised periodically.',
        'Mahalwari, north-western provinces: settlement with the village or estate as a unit, with joint liability.',
      ],
      answer: 'Zamindar, ryot and village respectively as the settling party.',
    },
    {
      q: 'What was the immediate cause of the Revolt of 1857, and what were the deeper ones?',
      steps: [
        'The immediate trigger was the greased cartridge of the Enfield rifle, which sepoys had to bite.',
        'Behind it lay annexations under the Doctrine of Lapse, revenue pressure and the decline of handicrafts.',
        'And fears about interference in religion and custom, together with military grievances over pay and overseas service.',
      ],
      answer: 'The greased cartridge immediately; annexation, economic distress and religious fear underneath.',
    },
    {
      q: 'Why was the Non-Cooperation Movement withdrawn?',
      steps: [
        'The movement had been built on the principle of non-violence.',
        'At Chauri Chaura on 5 February 1922, a crowd set fire to a police station and policemen died.',
        'Gandhi held that a movement pledged to non-violence could not continue once its participants had killed, and withdrew it despite opposition from within the Congress.',
      ],
      answer: 'Because of the violence at Chauri Chaura on 5 February 1922.',
    },
    {
      q: 'Why was salt chosen for the Civil Disobedience Movement?',
      steps: [
        'The salt tax fell on everyone, rich and poor, Hindu and Muslim, and in every province.',
        'Making salt was simple enough for anyone on a coast to do, so the law could be broken openly and en masse.',
        'That combination made it a symbol of the whole colonial relationship rather than a sectional grievance.',
      ],
      answer: 'Because the salt tax was universal and the law could be broken by anyone.',
    },
    {
      q: 'Why was the Simon Commission boycotted?',
      steps: [
        'It was appointed in 1927 to review the working of the 1919 Act and recommend the next constitutional step.',
        'Every one of its members was British — no Indian was included on a body deciding India\'s constitution.',
        'The boycott produced the slogan "Simon Go Back", and the lathi charge at Lahore in which Lala Lajpat Rai was injured.',
      ],
      answer: 'Because it had no Indian member.',
    },
    {
      q: 'What was the Poona Pact and what did it settle?',
      steps: [
        'The Communal Award of 1932 offered separate electorates to the depressed classes.',
        'Gandhi opposed separate electorates as a permanent division of Hindu society and fasted against the award.',
        'The Poona Pact of September 1932, agreed with B. R. Ambedkar, replaced separate electorates with a larger number of seats reserved within joint electorates.',
      ],
      answer: 'It substituted reserved seats in joint electorates for separate electorates.',
    },
    {
      q: 'What did the Government of India Act 1935 provide?',
      steps: [
        'Provincial autonomy, replacing the dyarchy that the 1919 Act had introduced in the provinces.',
        'A much wider franchise, and an all-India federation including the princely states — which was never brought into being.',
        'Elections held under it in 1937 produced Congress ministries in most provinces; they resigned in 1939 over the declaration of war.',
      ],
      answer: 'Provincial autonomy and a federation that never came into effect.',
    },
    {
      q: 'Why did the Cabinet Mission fail?',
      steps: [
        'It rejected a separate state but proposed a three-tier structure with provinces grouped into sections.',
        'The Congress and the League read the grouping provisions differently — whether grouping was compulsory and whether provinces could opt out.',
        'With no agreed interpretation, the interim arrangement broke down, and the League called Direct Action Day on 16 August 1946.',
      ],
      answer: 'The two parties could not agree on whether the grouping scheme was compulsory.',
    },
    {
      q: 'Why does India have separate Independence Day and Republic Day dates?',
      steps: [
        'The Congress adopted Purna Swaraj at Lahore in December 1929 and observed 26 January 1930 as Independence Day.',
        'Actual independence came on 15 August 1947 under the Indian Independence Act.',
        'When the Constitution was ready, its commencement was set for 26 January 1950 so the earlier pledge would keep its significance.',
      ],
      answer: '15 August 1947 for independence; 26 January 1950 to honour the 1930 pledge.',
    },
  ],

  practice: [
    {
      q: 'At the Battle of Plassey in 1757, Robert Clive defeated:',
      options: ['Mir Qasim', 'Siraj-ud-Daulah', 'Shuja-ud-Daulah', 'Shah Alam II'],
      answer: 1,
      explain: 'The other three were defeated together at Buxar in 1764.',
    },
    {
      q: 'The Diwani of Bengal, Bihar and Odisha was granted to the East India Company by the Treaty of Allahabad in:',
      options: ['1757', '1764', '1765', '1772'],
      answer: 2,
      explain: '1757 is Plassey and 1764 Buxar; the treaty that followed Buxar was signed in 1765.',
    },
    {
      q: 'The Permanent Settlement of 1793 was introduced by:',
      options: ['Warren Hastings', 'Lord Wellesley', 'Lord Dalhousie', 'Lord Cornwallis'],
      answer: 3,
      explain: 'Cornwallis fixed the revenue demand in perpetuity and recognised zamindars as proprietors in Bengal.',
    },
    {
      q: 'The Revolt of 1857 broke out at Meerut on:',
      options: ['29 March 1857', '10 May 1857', '8 April 1857', '1 November 1858'],
      answer: 1,
      explain: 'Mangal Pandey acted at Barrackpore on 29 March and was executed on 8 April; the general rising began at Meerut on 10 May.',
    },
    {
      q: 'The Brahmo Samaj was founded in 1828 by:',
      options: ['Dayanand Saraswati', 'Debendranath Tagore', 'Raja Ram Mohan Roy', 'Keshab Chandra Sen'],
      answer: 2,
      explain: 'Tagore and Sen led it later. Dayanand Saraswati founded the Arya Samaj in 1875.',
    },
    {
      q: '"Back to the Vedas" was the slogan of the:',
      options: ['Brahmo Samaj', 'Prarthana Samaj', 'Arya Samaj', 'Ramakrishna Mission'],
      answer: 2,
      explain: 'Dayanand Saraswati founded the Arya Samaj in 1875 and wrote the Satyarth Prakash.',
    },
    {
      q: 'The first session of the Indian National Congress in 1885 was presided over by:',
      options: ['A. O. Hume', 'Dadabhai Naoroji', 'Surendranath Banerjee', 'W. C. Bonnerjee'],
      answer: 3,
      explain: 'Hume helped found the Congress but did not preside; Bonnerjee chaired the first session at Bombay.',
    },
    {
      q: 'The Partition of Bengal was announced in 1905 by:',
      options: ['Lord Curzon', 'Lord Minto', 'Lord Hardinge', 'Lord Ripon'],
      answer: 0,
      explain: 'It was annulled in 1911 under Lord Hardinge, when the capital was also moved to Delhi.',
    },
    {
      q: 'The Jallianwala Bagh massacre took place on:',
      options: ['13 April 1920', '4 April 1919', '6 April 1919', '13 April 1919'],
      answer: 3,
      explain: 'The firing followed protests against the Rowlatt Act, and led Rabindranath Tagore to renounce his knighthood.',
    },
    {
      q: 'The Non-Cooperation Movement was withdrawn after the violence at:',
      options: ['Chauri Chaura', 'Dandi', 'Kakori', 'Chittagong'],
      answer: 0,
      explain: 'A crowd burned a police station at Chauri Chaura on 5 February 1922, and Gandhi called the movement off.',
    },
    {
      q: 'Purna Swaraj was adopted as the goal of the Congress at the session held at:',
      options: ['Nagpur, 1920', 'Lahore, 1929', 'Karachi, 1931', 'Lucknow, 1916'],
      answer: 1,
      explain: 'The Lahore session of December 1929 adopted complete independence and set 26 January 1930 as Independence Day.',
    },
    {
      q: 'The Dandi March of March 1930 began from:',
      options: ['Sabarmati Ashram', 'Sevagram Ashram', 'Porbandar', 'Champaran'],
      answer: 0,
      explain: 'Gandhi walked from the Sabarmati Ashram near Ahmedabad to Dandi on the coast, breaking the salt law on 6 April.',
    },
    {
      q: 'The Poona Pact of 1932 was concluded between Gandhi and:',
      options: ['Muhammad Ali Jinnah', 'B. R. Ambedkar', 'Jawaharlal Nehru', 'Ramsay MacDonald'],
      answer: 1,
      explain: 'It replaced the separate electorates of the Communal Award with reserved seats inside joint electorates.',
    },
    {
      q: 'Provincial autonomy was introduced by the Government of India Act of:',
      options: ['1919', '1909', '1858', '1935'],
      answer: 3,
      explain: 'The 1919 Act had introduced dyarchy in the provinces; the 1935 Act replaced it with provincial autonomy.',
    },
    {
      q: 'The call to "Do or Die" was given by Gandhi at the launch of:',
      options: ['The Non-Cooperation Movement', 'The Civil Disobedience Movement', 'The Quit India Movement', 'The Khilafat Movement'],
      answer: 2,
      explain: 'It was given on 8 August 1942, and the Congress leadership was arrested within hours.',
    },
    {
      q: 'Bhagat Singh, Rajguru and Sukhdev were executed on:',
      options: ['23 March 1931', '8 April 1929', '17 November 1928', '23 March 1930'],
      answer: 0,
      explain: '8 April 1929 is the date of the Central Assembly bombing, for which Bhagat Singh courted arrest.',
    },
  ],

  faqs: [
    {
      q: 'Which battle marks the beginning of British rule in India?',
      a: 'Plassey in 1757 gave the Company political mastery of Bengal, but Buxar in 1764 was the decisive military verdict, defeating Mir Qasim, the Nawab of Awadh and the Mughal emperor together. The Treaty of Allahabad in 1765, which granted the Diwani of Bengal, Bihar and Odisha, is the legal beginning of Company rule.',
    },
    {
      q: 'What was the Doctrine of Lapse?',
      a: 'Dalhousie\'s policy that a princely state without a natural heir lapsed to the Company, adopted heirs being disallowed. Satara was annexed in 1848, Jhansi in 1853 and Nagpur in 1854. Awadh was annexed in 1856 on the separate ground of alleged misgovernment. These annexations are the standard political cause given for the Revolt of 1857.',
    },
    {
      q: 'What is the difference between the Permanent Settlement, Ryotwari and Mahalwari?',
      a: 'They differ in who the state settled with. The Permanent Settlement of 1793 dealt with zamindars, recognised as proprietors with a demand fixed forever. Ryotwari dealt directly with the individual cultivator, with periodic revision. Mahalwari dealt with the village or estate as a unit, under joint liability.',
    },
    {
      q: 'What was the drain of wealth theory?',
      a: 'Dadabhai Naoroji\'s argument that a portion of India\'s wealth was transferred to Britain each year without an equivalent return — through home charges, salaries and pensions paid in England, and the profits of British capital. Set out in Poverty and Un-British Rule in India, it became the core of the moderate nationalist economic critique.',
    },
    {
      q: 'Why did the Revolt of 1857 fail?',
      a: 'It was largely confined to the Gangetic plain and central India, while the south, Bengal and Punjab stayed quiet; its leadership was regional rather than coordinated; the rebels were outmatched in weapons and communications; and several princely rulers actively supported the Company.',
    },
    {
      q: 'What changed after 1857?',
      a: 'The Government of India Act 1858 abolished the East India Company and transferred Indian government to the Crown, creating the office of Secretary of State for India. The Queen\'s Proclamation of 1 November 1858 promised non-interference in religion and an end to annexation, and the army was reorganised with a larger proportion of British troops.',
    },
    {
      q: 'Why was the Simon Commission boycotted?',
      a: 'Because it contained no Indian member, although it had been appointed to recommend India\'s next constitutional step. The boycott produced the slogan "Simon Go Back" and the lathi charge at Lahore in which Lala Lajpat Rai was injured, an event that pushed several young revolutionaries towards direct action.',
    },
    {
      q: 'Why did Gandhi withdraw the Non-Cooperation Movement?',
      a: 'Because of the violence at Chauri Chaura on 5 February 1922, where a crowd set fire to a police station and policemen died. Gandhi held that a movement pledged to non-violence could not continue once its participants had killed, and withdrew it over objections from within the Congress.',
    },
    {
      q: 'What did the Cabinet Mission of 1946 propose, and why did it fail?',
      a: 'It rejected a separate state and proposed instead a three-tier structure with provinces grouped into sections, together with an interim government. The Congress and the Muslim League read the grouping provisions differently — chiefly whether grouping was compulsory — and with no agreed interpretation the arrangement collapsed, after which the League called Direct Action Day on 16 August 1946.',
    },
    {
      q: 'How many modern history questions come in competitive exams?',
      a: 'It is the largest history block everywhere. UPSC Prelims typically carries eight to fifteen questions, state PSC prelims a similar number including the state\'s own freedom struggle, SSC CGL Tier 1 three to six, and RRB NTPC three to five.',
    },
  ],

  related: [
    { label: 'Ancient India', to: '/study-material/history/ancient-india/' },
    { label: 'Medieval India', to: '/study-material/history/medieval-india/' },
    { label: 'Constitution', to: '/study-material/constitution/' },
    { label: 'Indian Polity', to: '/study-material/polity/' },
    { label: 'Indian Economy', to: '/study-material/economy/' },
    { label: 'All History', to: '/study-material/history/' },
  ],
}
