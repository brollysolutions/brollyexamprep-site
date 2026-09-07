/**
 * Making of the Constitution — /study-material/constitution/making-of-the-constitution/
 *
 * The document's origins, sources, Preamble and architecture. Written to
 * explain why the Constitution looks as it does, because the borrowed-features
 * table and the salient-features list are both far easier to hold once the
 * reason for each choice is clear.
 */
export default {
  subject: 'constitution',
  subjectName: 'Constitution',
  slug: 'making-of-the-constitution',
  title: 'Making of the Constitution',
  seoTitle: 'Making of the Indian Constitution | Constituent Assembly, Preamble & Practice',
  metaDescription:
    'Complete study material on the making of the Indian Constitution for UPSC, SSC and state exams — the Constituent Assembly, borrowed features and sources.',
  readMinutes: 23,
  lead: [
    'The Indian Constitution is the longest written constitution of any sovereign country, and almost nothing in it is accidental. Each of its central choices — a parliamentary rather than presidential executive, a strong Centre inside a federal frame, justiciable rights alongside non-justiciable directives — was argued over in the Constituent Assembly and settled for a reason.',
    'This page covers the making, the sources, the Preamble and the architecture of Parts and Schedules. Two of these are among the most directly examined items in the whole general studies syllabus: the table of borrowed features, and the words of the Preamble with the amendments made to them.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Preamble, Constituent Assembly composition and the sources of specific provisions.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–5 questions', note: 'Direct recall — dates, borrowed features, Schedule contents.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'Making and Preamble, usually with one question on the Assembly\'s committees.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'When the Constitution was adopted, when it came into force, who chaired the Drafting Committee.' },
    { exam: 'CLAT / AILET Legal Reasoning', count: '2–3 questions', note: 'Preamble as an aid to interpretation, and the Assembly debates.' },
  ],

  contents: [
    { icon: 'user', title: 'The Constituent Assembly', sub: 'How the document was made', href: '#assembly' },
    { icon: 'globe', title: 'Sources and borrowed features', sub: 'What came from where', href: '#sources' },
    { icon: 'book', title: 'The Preamble', sub: 'Words, keywords and amendment', href: '#preamble' },
    { icon: 'layers', title: 'Salient features', sub: 'What kind of constitution this is', href: '#features' },
    { icon: 'doc', title: 'Parts and Schedules', sub: 'The architecture', href: '#architecture' },
    { icon: 'target', title: 'Territory and citizenship', sub: 'Parts I and II', href: '#citizenship' },
    { icon: 'bell', title: 'Language and special areas', sub: 'Eighth Schedule and beyond', href: '#language' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'assembly',
      heading: 'The Constituent Assembly',
      eyebrow: 'How the document was made',
      intro:
        'The Assembly was constituted under the Cabinet Mission Plan of 1946, and its dates and office-holders are asked almost every year.',
      blocks: [
        {
          type: 'table',
          caption: 'The essential dates',
          head: ['Date', 'Event', 'Detail worth knowing'],
          rows: [
            ['9 December 1946', 'First sitting of the Constituent Assembly', 'Sachchidananda Sinha, the oldest member, presided as temporary chairman. The Muslim League boycotted the sitting.'],
            ['11 December 1946', 'Rajendra Prasad elected permanent President', 'H. C. Mukherjee and V. T. Krishnamachari were elected Vice-Presidents.'],
            ['13 December 1946', 'Objectives Resolution moved by Jawaharlal Nehru', 'Adopted on 22 January 1947. It later became the basis of the Preamble.'],
            ['29 August 1947', 'Drafting Committee constituted', 'Seven members, chaired by B. R. Ambedkar.'],
            ['26 November 1949', 'The Constitution adopted', 'The date recited in the Preamble itself, and observed as Constitution Day.'],
            ['26 January 1950', 'The Constitution came into force', 'Chosen because the Congress had declared Purna Swaraj on that date in 1930. Some provisions, including those on citizenship and elections, had commenced on 26 November 1949.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'How long it took',
              'Two years, eleven months and eighteen days, across eleven sessions. The Assembly sat for 165 days in all. Around 2,000 amendments were moved and considered during the drafting.',
            ],
            [
              'Composition',
              'Members of the provincial assemblies were elected to it by a single transferable vote, with seats allocated in proportion to population and divided among Muslims, Sikhs and the general category. It was an indirectly elected body, not a directly elected one — a point examiners like. After Partition its strength fell substantially.',
            ],
            [
              'The Drafting Committee',
              'Seven members: B. R. Ambedkar as chairman, along with N. Gopalaswami Ayyangar, Alladi Krishnaswamy Ayyar, K. M. Munshi, Syed Mohammad Saadulla, N. Madhava Rau (who replaced B. L. Mitter) and T. T. Krishnamachari (who replaced D. P. Khaitan on his death).',
            ],
            [
              'Other major committees',
              'The Union Powers Committee and the Union Constitution Committee were chaired by Nehru; the Provincial Constitution Committee by Sardar Patel; the Advisory Committee on Fundamental Rights and Minorities also by Patel, with a Fundamental Rights sub-committee under J. B. Kripalani; the Rules of Procedure Committee by Rajendra Prasad; and the Steering Committee also by Rajendra Prasad.',
            ],
            [
              'The constitutional adviser',
              'B. N. Rau served as constitutional adviser to the Assembly and prepared the original draft on which the Drafting Committee worked. He is a common distractor against Ambedkar in questions.',
            ],
            [
              'The Assembly as first Parliament',
              'After 26 January 1950 the Constituent Assembly continued as the provisional Parliament of India until the first general elections were held in 1951–52. It also served as the body that framed the Constitution of India and, separately, adopted the national flag on 22 July 1947 and the national anthem and song on 24 January 1950.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'sources',
      heading: 'Sources and borrowed features',
      eyebrow: 'What came from where',
      intro:
        'The framers studied about sixty constitutions and adopted whatever suited Indian conditions, which is why the Constitution is sometimes called a bag of borrowings. This table is asked directly and repeatedly.',
      blocks: [
        {
          type: 'table',
          caption: 'Borrowed features by source',
          head: ['Source', 'Features taken', 'Why it was chosen'],
          rows: [
            ['Government of India Act, 1935', 'Federal scheme, office of Governor, powers of the judiciary, public service commissions, emergency provisions and most administrative detail', 'By far the largest single source — much of the Constitution is a reworking of this Act, which was already in operation.'],
            ['United Kingdom', 'Parliamentary form of government, rule of law, legislative procedure, single citizenship, cabinet system, prerogative writs, bicameralism and the office of Speaker', 'The system the framers had lived under and understood.'],
            ['United States', 'Fundamental Rights, independence of the judiciary, judicial review, impeachment of the President, removal of Supreme Court and High Court judges, and the post of Vice-President', 'The model for a justiciable bill of rights.'],
            ['Ireland', 'Directive Principles of State Policy, nomination of members to the Rajya Sabha, and the method of election of the President', 'Ireland had itself borrowed the directive-principles idea from the Spanish constitution.'],
            ['Canada', 'A federation with a strong Centre, residuary powers with the Centre, appointment of state Governors by the Centre, and advisory jurisdiction of the Supreme Court', 'A federation designed against secession, which suited a newly partitioned country.'],
            ['Australia', 'Concurrent List, freedom of trade, commerce and intercourse, and the joint sitting of the two Houses', 'A working example of concurrent legislative powers.'],
            ['Weimar Germany', 'Suspension of Fundamental Rights during an emergency', 'A provision whose German history is itself part of the criticism of it.'],
            ['Soviet Union', 'Fundamental Duties, and the ideal of justice — social, economic and political — in the Preamble', 'Duties were added much later, by the 42nd Amendment.'],
            ['France', 'The ideals of liberty, equality and fraternity, and the republican character of the state', 'Taken from the language of the French Revolution.'],
            ['South Africa', 'The procedure for amending the Constitution, and the election of members of the Rajya Sabha', 'A method of amendment that is neither wholly rigid nor wholly flexible.'],
            ['Japan', 'The phrase "procedure established by law" in Article 21', 'Deliberately chosen instead of the American "due process of law" — a distinction later softened by the Maneka Gandhi judgment.'],
          ],
        },
        {
          type: 'note',
          title: 'The point examiners actually test',
          text:
            'Not that a feature is borrowed, but which country it came from — and the near-misses are what the options exploit. Directive Principles from Ireland, not the Soviet Union. Fundamental Duties from the Soviet Union, not Ireland. Judicial review from the United States, not Britain, which has no written constitution to review against. The amendment procedure from South Africa, not the United States.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'preamble',
      heading: 'The Preamble',
      eyebrow: 'Words, keywords and amendment',
      intro:
        'The Preamble is short enough to learn word for word, and worth doing, because questions turn on the exact adjectives and their order.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The keywords',
              'India is declared a Sovereign, Socialist, Secular, Democratic Republic, securing to all its citizens Justice — social, economic and political; Liberty of thought, expression, belief, faith and worship; Equality of status and of opportunity; and Fraternity assuring the dignity of the individual and the unity and integrity of the Nation.',
            ],
            [
              'What the 42nd Amendment added',
              'Three words, in 1976: "Socialist" and "Secular" in the description of the Republic, and "Integrity" in the fraternity clause. That is the only occasion on which the Preamble has been amended.',
            ],
            [
              'Source of authority',
              'The Preamble opens "We, the people of India" and closes with the enacting words "do hereby adopt, enact and give to ourselves this Constitution" on 26 November 1949. The source of authority is therefore the people, not any grant from the British Parliament — a point of substance, not merely of style.',
            ],
            [
              'Berubari and Kesavananda',
              'In the Berubari Union reference of 1960 the Supreme Court held that the Preamble is not a part of the Constitution. In Kesavananda Bharati in 1973 it held that the Preamble is a part of the Constitution and can be amended, subject to the basic structure. The later view prevails, and the pair of cases is asked as a pair.',
            ],
            [
              'Not enforceable',
              'The Preamble is not a source of power and confers no rights that a court can enforce. Its use is as an aid to interpretation when a provision is ambiguous — which is precisely how the courts have used it.',
            ],
            [
              'The words in order',
              'Sovereign means free of external control; Socialist, a commitment to democratic socialism achieved through law rather than through nationalisation; Secular, that the state has no religion of its own and treats all equally; Democratic, that authority rests on popular sovereignty exercised through elections; Republic, that the head of state is elected rather than hereditary.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'features',
      heading: 'Salient features',
      eyebrow: 'What kind of constitution this is',
      intro:
        'A standard list, but each item should be held with its qualification, because the qualification is what the harder questions test.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The longest written constitution',
              'Longest of any sovereign country. The length has four causes: the geographical diversity to be accommodated, the historical influence of the detailed Government of India Act 1935, the decision to provide for the states in the same document rather than separately, and the dominance of legal experts in the Assembly.',
            ],
            [
              'Partly rigid, partly flexible',
              'Some provisions can be changed by ordinary legislative majority, some need a special majority, and some need a special majority plus ratification by half the state legislatures. Compare the United States, which has a single rigid procedure, and the United Kingdom, which has none at all.',
            ],
            [
              'Federal in form, unitary in spirit',
              'Two levels of government, a division of powers and an independent judiciary, but with a strong Centre, single citizenship, an integrated judiciary and emergency provisions that can make the system unitary in operation. Article 1 calls India a Union of States, not a federation.',
            ],
            [
              'Parliamentary government at both levels',
              'A nominal head of state and a real executive drawn from and answerable to the legislature, at the Union and in the states alike. The presidential alternative was considered and rejected, chiefly because the framers wanted an executive continuously accountable rather than one accountable only at a fixed election.',
            ],
            [
              'Integrated and independent judiciary',
              'One hierarchy from the district courts to the Supreme Court, with no separate set of state courts, and with judicial review of both legislative and executive action.',
            ],
            [
              'Fundamental Rights with Directive Principles',
              'Justiciable rights in Part III and non-justiciable directives in Part IV, with Fundamental Duties added in Part IVA in 1976. Granville Austin called the rights and directives together the conscience of the Constitution.',
            ],
            [
              'Universal adult franchise and single citizenship',
              'Every adult citizen votes regardless of property, education, sex or religion — a remarkable decision in 1950 given the literacy levels of the time. Voting age was reduced from twenty-one to eighteen by the 61st Amendment in 1989. There is one Indian citizenship, not a separate state citizenship as in the United States.',
            ],
            [
              'Emergency provisions and independent bodies',
              'Three kinds of emergency in Part XVIII, and a set of bodies — the Election Commission, the Comptroller and Auditor General, the Public Service Commissions and the Finance Commission — placed beyond ordinary executive control.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'architecture',
      heading: 'Parts and Schedules',
      eyebrow: 'The architecture',
      intro:
        'The Constitution was adopted with 395 Articles in 22 Parts and 8 Schedules. It now has roughly 448 Articles in 25 Parts and 12 Schedules — "roughly", because articles have been added with letter suffixes such as 21A and 243ZG rather than by renumbering.',
      blocks: [
        {
          type: 'table',
          caption: 'The twelve Schedules',
          head: ['Schedule', 'Subject', 'Note'],
          rows: [
            ['First', 'The states and union territories and their territories', 'Amended whenever a state is created or reorganised.'],
            ['Second', 'Emoluments and privileges of the President, Governors, Speakers, judges and the CAG', 'A convenient place to look up who is covered by charged expenditure.'],
            ['Third', 'Forms of oath or affirmation', 'For ministers, legislators, judges and the CAG.'],
            ['Fourth', 'Allocation of seats in the Rajya Sabha', 'Seats per state, in rough proportion to population.'],
            ['Fifth', 'Administration and control of scheduled areas and scheduled tribes', 'Applies to states other than the four covered by the Sixth Schedule.'],
            ['Sixth', 'Administration of tribal areas in Assam, Meghalaya, Tripura and Mizoram', 'Creates autonomous district and regional councils.'],
            ['Seventh', 'The Union, State and Concurrent Lists', 'The division of legislative power.'],
            ['Eighth', 'The recognised languages', 'Twenty-two at present; originally fourteen.'],
            ['Ninth', 'Laws immune from challenge on the ground of violating fundamental rights', 'Added by the First Amendment in 1951 to protect land reform. Since I. R. Coelho in 2007, laws placed in it after 24 April 1973 can still be tested against the basic structure.'],
            ['Tenth', 'Anti-defection provisions', 'Added by the 52nd Amendment in 1985.'],
            ['Eleventh', 'Twenty-nine subjects for panchayats', 'Added by the 73rd Amendment in 1992.'],
            ['Twelfth', 'Eighteen subjects for municipalities', 'Added by the 74th Amendment in 1992.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Parts worth knowing by number',
              'Part I the Union and its territory; Part II citizenship; Part III Fundamental Rights; Part IV Directive Principles; Part IVA Fundamental Duties; Part V the Union; Part VI the states; Part IX panchayats and Part IXA municipalities; Part XI relations between the Union and the states; Part XII finance, property, contracts and suits; Part XVII official language; Part XVIII emergency provisions; Part XX amendment of the Constitution.',
            ],
            [
              'Parts that were removed',
              'Part VII, which dealt with the former Part B states, was repealed by the 7th Amendment in 1956 when the states were reorganised on linguistic lines. Part IXB on cooperative societies was added by the 97th Amendment in 2011.',
            ],
            [
              'Why the article count is approximate',
              'Because articles have been inserted with letters — 21A, 31A to 31D, 243A to 243ZG, 300A, 338A, 338B — rather than by renumbering the whole document. The original count of 395 is exact; the current count depends on how the lettered insertions are counted, so exams that ask it usually accept "about 448".',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'citizenship',
      heading: 'Territory and citizenship',
      eyebrow: 'Parts I and II',
      intro:
        'Two short Parts that carry a steady number of questions, mostly because their rules are counter-intuitive.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Article 1',
              '"India, that is Bharat, shall be a Union of States." The territory of India comprises the territories of the states, the union territories, and such other territories as may be acquired. Note the distinction: the Union of States does not include acquired territories, but the territory of India does.',
            ],
            [
              'Articles 2 and 3',
              'Article 2 empowers Parliament to admit or establish new states. Article 3 empowers it to form a new state out of existing territory, to increase or diminish the area of a state, and to alter its boundaries or name — by a simple majority, after the President has referred the bill to the state legislature for its views, which need not be accepted.',
            ],
            [
              'Citizenship at the commencement (Articles 5 to 8)',
              'Article 5 covered persons domiciled in India; Articles 6 and 7 dealt with migrants from and to Pakistan; Article 8 covered persons of Indian origin residing abroad. These provisions applied only on 26 January 1950 and are of historical rather than continuing effect.',
            ],
            [
              'Article 9 to 11',
              'Article 9 provides that a person who voluntarily acquires the citizenship of a foreign state ceases to be a citizen of India — which is why India does not permit dual citizenship. Article 11 empowers Parliament to regulate citizenship by law, which it did through the Citizenship Act, 1955.',
            ],
            [
              'Acquisition and loss under the Act',
              'Citizenship may be acquired by birth, descent, registration, naturalisation and incorporation of territory. It may be lost by renunciation, termination on voluntarily acquiring foreign citizenship, or deprivation by the government on specified grounds. The Overseas Citizen of India scheme confers a set of rights but is not citizenship and carries no voting right or public office.',
            ],
            [
              'Rights available only to citizens',
              'Articles 15, 16, 19, 29 and 30 are available to citizens alone. Articles 14, 20, 21, 21A, 22, 23, 24, 25 to 28 are available to all persons, citizens and foreigners alike. Sorting a given article into the right group is a standard question.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'language',
      heading: 'Language and special areas',
      eyebrow: 'Eighth Schedule and beyond',
      intro:
        'Part XVII on official language and the Fifth and Sixth Schedules on tribal administration are small blocks that appear regularly, particularly in state PSC papers.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Official language',
              'Article 343 makes Hindi in the Devanagari script the official language of the Union, with international numerals. English was to continue for fifteen years from 1950, and the Official Languages Act, 1963, provided for its continued use thereafter. There is no national language declared anywhere in the Constitution — a point that recurs both in exams and in public debate.',
            ],
            [
              'The Eighth Schedule',
              'Contains twenty-two languages at present. Fourteen were listed originally. Sindhi was added by the 21st Amendment in 1967; Konkani, Manipuri and Nepali by the 71st Amendment in 1992; and Bodo, Dogri, Maithili and Santhali by the 92nd Amendment in 2003. Inclusion carries no automatic status as an official language of any state, but it does affect representation on the Official Language Commission and eligibility in public examinations.',
            ],
            [
              'Classical languages',
              'Classical language status is conferred by a decision of the Union government, not by the Constitution, and the list has been expanded several times. Treat the current list as a current-affairs item rather than a constitutional fact.',
            ],
            [
              'Fifth and Sixth Schedules',
              'The Fifth Schedule governs the administration of scheduled areas and scheduled tribes in states other than Assam, Meghalaya, Tripura and Mizoram, with a Tribes Advisory Council and the Governor empowered to modify the application of laws. The Sixth Schedule governs those four states, creating autonomous district and regional councils with legislative, judicial and financial powers of their own.',
            ],
            [
              'Special provisions for states',
              'Part XXI contains temporary, transitional and special provisions, including Article 371 and its lettered variants for particular states — 371A for Nagaland, 371G for Mizoram and so on. Article 370, which contained special provisions for Jammu and Kashmir, was rendered inoperative by a Presidential Order in August 2019, and the Supreme Court upheld that action in December 2023.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'From which country did India borrow the Directive Principles, and from which the Fundamental Duties?',
      steps: [
        'The Directive Principles came from the Irish Constitution, which had itself taken the idea from Spain.',
        'The Fundamental Duties were added much later, by the 42nd Amendment in 1976.',
        'They were modelled on the Soviet Constitution, on the recommendation of the Swaran Singh Committee.',
      ],
      answer: 'Ireland and the Soviet Union respectively — the two are the standard swap in options.',
    },
    {
      q: 'Which words were added to the Preamble, and by which amendment?',
      steps: [
        'The Preamble has been amended exactly once.',
        'The 42nd Amendment of 1976 inserted "Socialist" and "Secular" into the description of the Republic.',
        'It also added "Integrity" to the fraternity clause, so the phrase became "unity and integrity of the Nation".',
      ],
      answer: 'Socialist, Secular and Integrity, by the 42nd Amendment of 1976.',
    },
    {
      q: 'Why was 26 January chosen as the date of commencement?',
      steps: [
        'The Constitution had been adopted on 26 November 1949, so a later date was needed for commencement.',
        'The Congress had declared Purna Swaraj — complete independence — on 26 January 1930, and the day had been observed as Independence Day through the 1930s.',
        'Commencing the Constitution on that anniversary preserved its significance.',
      ],
      answer: 'It was the anniversary of the Purna Swaraj declaration of 1930.',
    },
    {
      q: 'Is the Preamble part of the Constitution?',
      steps: [
        'In the Berubari Union reference of 1960 the Supreme Court held that it was not part of the Constitution.',
        'In Kesavananda Bharati in 1973 the court reversed that view, holding the Preamble to be part of the Constitution.',
        'It can therefore be amended under Article 368, but not so as to destroy the basic structure — and it has in fact been amended once.',
      ],
      answer: 'Yes, since Kesavananda Bharati, 1973 — reversing the Berubari view of 1960.',
    },
    {
      q: 'Which Schedule protects land reform laws from challenge, and how far does that protection still extend?',
      steps: [
        'The Ninth Schedule was added by the First Amendment in 1951 precisely to shield land reform legislation.',
        'Laws placed in it were declared immune from challenge on the ground of violating fundamental rights.',
        'In I. R. Coelho in 2007 the Supreme Court held that laws added to the Schedule after 24 April 1973 — the date of Kesavananda Bharati — remain open to challenge on basic structure grounds.',
      ],
      answer: 'The Ninth Schedule, with protection now limited by the basic structure test for post-1973 additions.',
    },
    {
      q: 'Does India have a national language?',
      steps: [
        'Article 343 declares Hindi in the Devanagari script to be the official language of the Union.',
        '"Official language" describes the language of government business, not a national language.',
        'The Constitution nowhere uses the term national language, and the Eighth Schedule lists twenty-two recognised languages without elevating any of them.',
      ],
      answer: 'No — Hindi is the official language of the Union, which is a different thing.',
    },
    {
      q: 'Which rights are available to foreigners as well as citizens?',
      steps: [
        'Articles 15, 16, 19, 29 and 30 use the word "citizen" and are confined to citizens.',
        'Articles 14, 20, 21, 21A, 22, 23, 24 and 25 to 28 use "person" and extend to everyone within India.',
        'So equality before law, protection in respect of conviction, life and personal liberty, protection against arrest, and freedom of religion apply to foreigners; the six freedoms of Article 19 do not.',
      ],
      answer: 'Those framed with the word "person" — notably Articles 14, 20, 21, 22, 23, 24 and 25 to 28.',
    },
    {
      q: 'How many members did the Drafting Committee have, and who chaired it?',
      steps: [
        'It was constituted on 29 August 1947.',
        'It had seven members, and B. R. Ambedkar was its chairman.',
        'B. N. Rau was the constitutional adviser who prepared the original draft, and is not to be confused with a Drafting Committee member.',
      ],
      answer: 'Seven members, chaired by B. R. Ambedkar.',
    },
  ],

  practice: [
    {
      q: 'The Constituent Assembly held its first sitting on:',
      options: ['9 December 1946', '11 December 1946', '26 November 1949', '15 August 1947'],
      answer: 0,
      explain: 'Sachchidananda Sinha presided as temporary chairman; Rajendra Prasad was elected permanent President two days later.',
    },
    {
      q: 'The Objectives Resolution was moved in the Constituent Assembly by:',
      options: ['B. R. Ambedkar', 'Rajendra Prasad', 'Jawaharlal Nehru', 'Sardar Patel'],
      answer: 2,
      explain: 'Moved on 13 December 1946 and adopted on 22 January 1947; it became the basis of the Preamble.',
    },
    {
      q: 'The Indian Constitution was adopted on:',
      options: ['26 January 1950', '22 January 1947', '15 August 1947', '26 November 1949'],
      answer: 3,
      explain: 'Adopted on 26 November 1949, now Constitution Day, and brought into force on 26 January 1950.',
    },
    {
      q: 'The idea of Directive Principles of State Policy was borrowed from:',
      options: ['Ireland', 'the Soviet Union', 'Canada', 'Australia'],
      answer: 0,
      explain: 'Ireland had itself taken the concept from the Spanish constitution. Fundamental Duties came from the Soviet Union.',
    },
    {
      q: 'The largest single source of the Indian Constitution is the:',
      options: ['Constitution of the United States', 'Indian Councils Act, 1909', 'Constitution of Ireland', 'Government of India Act, 1935'],
      answer: 3,
      explain: 'The federal scheme, the office of Governor, the public service commissions and most administrative detail come from it.',
    },
    {
      q: 'The words "Socialist" and "Secular" were added to the Preamble by the:',
      options: ['1st Amendment', '24th Amendment', '42nd Amendment', '44th Amendment'],
      answer: 2,
      explain: 'The 42nd Amendment of 1976 also added "Integrity" — the only occasion the Preamble has been amended.',
    },
    {
      q: 'How many Schedules does the Constitution have at present?',
      options: ['8', '10', '12', '14'],
      answer: 2,
      explain: 'It began with eight; the Ninth, Tenth, Eleventh and Twelfth were added by later amendments.',
    },
    {
      q: 'The Eighth Schedule currently lists how many languages?',
      options: ['14', '18', '22', '24'],
      answer: 2,
      explain: 'Fourteen originally; Sindhi was added in 1967, three languages in 1992 and four more in 2003.',
    },
    {
      q: 'The Ninth Schedule was added by the:',
      options: ['1st Amendment', '7th Amendment', '42nd Amendment', '52nd Amendment'],
      answer: 0,
      explain: 'The First Amendment of 1951 created it to protect land reform legislation from challenge.',
    },
    {
      q: 'Article 1 describes India as:',
      options: ['A federation of states', 'A federal republic', 'A confederation', 'A Union of States'],
      answer: 3,
      explain: 'Ambedkar explained that "Union" indicates that the federation is not the result of an agreement and that no state may secede.',
    },
    {
      q: 'The Sixth Schedule applies to the tribal areas of:',
      options: ['Jharkhand, Odisha, Chhattisgarh and Madhya Pradesh', 'Assam, Meghalaya, Tripura and Mizoram', 'Nagaland, Manipur, Sikkim and Arunachal Pradesh', 'Rajasthan, Gujarat, Maharashtra and Telangana'],
      answer: 1,
      explain: 'It creates autonomous district and regional councils in those four states; other states fall under the Fifth Schedule.',
    },
    {
      q: 'The phrase "procedure established by law" in Article 21 was drawn from the constitution of:',
      options: ['The United States', 'Japan', 'Ireland', 'Canada'],
      answer: 1,
      explain: 'It was deliberately preferred to the American "due process of law", though Maneka Gandhi later narrowed the practical difference.',
    },
    {
      q: 'The Constitution originally contained how many Articles?',
      options: ['365', '395', '448', '444'],
      answer: 1,
      explain: '395 Articles in 22 Parts and 8 Schedules. The present count is about 448 Articles in 25 Parts and 12 Schedules.',
    },
    {
      q: 'The voting age was reduced from twenty-one to eighteen by the:',
      options: ['42nd Amendment', '52nd Amendment', '61st Amendment', '73rd Amendment'],
      answer: 2,
      explain: 'The 61st Amendment of 1989 amended Article 326.',
    },
    {
      q: 'Which of these rights is available to citizens only?',
      options: ['Article 14 — equality before law', 'Article 19 — the six freedoms', 'Article 21 — life and personal liberty', 'Article 25 — freedom of religion'],
      answer: 1,
      explain: 'Articles 15, 16, 19, 29 and 30 are confined to citizens; the others named extend to all persons.',
    },
    {
      q: 'The Constituent Assembly took how long to frame the Constitution?',
      options: ['1 year 6 months', '2 years 11 months and 18 days', '3 years 4 months', '4 years 2 months'],
      answer: 1,
      explain: 'From 9 December 1946 to 26 November 1949, across eleven sessions and 165 days of sitting.',
    },
  ],

  faqs: [
    {
      q: 'Who is called the father of the Indian Constitution?',
      a: 'B. R. Ambedkar, as chairman of the Drafting Committee and the member who piloted the draft through the Assembly. The description is honorific rather than official, and it should not obscure the roles of B. N. Rau as constitutional adviser, who prepared the original draft, and of Nehru, Patel and the committee chairs.',
    },
    {
      q: 'Why is the Indian Constitution so long?',
      a: 'Four reasons are usually given: the size and diversity of the country required detailed provision; the Government of India Act 1935, itself extremely detailed, was the working model; the framers chose to provide for the states in the same document rather than allowing separate state constitutions; and the Assembly was dominated by lawyers who preferred to write things down rather than leave them to convention.',
    },
    {
      q: 'Is the Preamble enforceable in a court?',
      a: 'No. It confers no power and creates no right that can be enforced. Its legal use is as an aid to interpretation where a provision is ambiguous, and as evidence of the objects the Constitution was meant to secure. It is part of the Constitution since Kesavananda Bharati, and it can be amended, but it remains non-justiciable.',
    },
    {
      q: 'Does India allow dual citizenship?',
      a: 'No. Article 9 provides that a person who voluntarily acquires the citizenship of another country ceases to be an Indian citizen. The Overseas Citizen of India scheme confers a bundle of rights — lifelong visa, parity with non-resident Indians in some economic matters — but it is not citizenship and carries no right to vote or hold public office.',
    },
    {
      q: 'What is the difference between the Fifth and Sixth Schedules?',
      a: 'Both deal with tribal administration but in different states and by different means. The Sixth Schedule covers Assam, Meghalaya, Tripura and Mizoram, creating autonomous district and regional councils with their own legislative, judicial and financial powers. The Fifth Schedule covers scheduled areas in other states, working through a Tribes Advisory Council and the Governor\'s power to modify how laws apply.',
    },
    {
      q: 'Was the Constituent Assembly elected by the people?',
      a: 'Not directly. Its members were elected by the members of the provincial legislative assemblies, using a single transferable vote, with seats allocated in proportion to population. Those provincial assemblies had themselves been elected on a restricted franchise. The Assembly was therefore indirectly elected and not chosen by universal suffrage, a criticism made at the time.',
    },
    {
      q: 'Which facts in this topic change between exam cycles?',
      a: 'Very few. The number of Schedules, Parts and languages in the Eighth Schedule changes only by amendment, and the total number of Articles depends on how lettered insertions are counted. What does move is the list of classical languages, which is a government decision, and the current amendment count, which grows.',
    },
    {
      q: 'How should I learn the borrowed-features table?',
      a: 'By source rather than by feature, and with attention to the near-misses. Group everything from the United Kingdom together, everything from the United States together, and then rehearse the four pairs that options exploit — Ireland versus the Soviet Union, Canada versus Australia on federal features, the United States versus Britain on judicial review, and South Africa versus the United States on amendment.',
    },
    {
      q: 'Why did the framers reject a presidential system?',
      a: 'Ambedkar\'s argument was that a parliamentary executive offers more responsibility, being answerable daily through questions and motions and ultimately through a no-confidence vote, while a presidential executive offers more stability but is assessed only at fixed intervals. The Assembly preferred continuous accountability, partly because it was the system the country already understood.',
    },
    {
      q: 'How many questions come from this topic?',
      a: 'Two to four in UPSC Prelims, three to five in SSC CGL Tier 1 — where the borrowed features and Schedule contents are asked very directly — three to five in state PSC prelims, and two to three in CLAT and AILET. It is one of the highest-return blocks per hour of study in the whole syllabus.',
    },
  ],

  related: [
    { label: 'Fundamental Rights & Duties', to: '/study-material/constitution/fundamental-rights/' },
    { label: 'Amendments & Basic Structure', to: '/study-material/constitution/amendments/' },
    { label: 'Indian Polity', to: '/study-material/polity/' },
    { label: 'Modern India', to: '/study-material/history/modern-india/' },
    { label: 'All Constitution', to: '/study-material/constitution/' },
  ],
}
