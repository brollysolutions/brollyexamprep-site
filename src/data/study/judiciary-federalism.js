/**
 * Judiciary and Federalism — /study-material/polity/judiciary-federalism/
 *
 * Two subjects on one page because they answer the same question: who decides
 * where power stops. The courts police the boundary between the organs, the
 * federal provisions police the boundary between the Union and the states, and
 * questions constantly cross from one to the other.
 */
export default {
  subject: 'polity',
  subjectName: 'Indian Polity',
  slug: 'judiciary-federalism',
  title: 'Judiciary & Federalism',
  seoTitle: 'Indian Judiciary and Federalism for Competitive Exams | Writs, Lists & Practice',
  metaDescription:
    'Complete judiciary and federalism study material for UPSC, SSC and state exams — the Supreme Court, High Courts and subordinate judiciary.',
  readMinutes: 25,
  lead: [
    'The judiciary and the federal provisions belong together because they answer the same question from two directions. The courts decide where the power of each organ stops; the Seventh Schedule and Part XI decide where the power of the Union stops and that of a state begins. When the two meet — as they do whenever a court strikes down a state law for encroaching on a Union subject — you get the kind of question papers are most fond of.',
    'This page keeps the mechanics precise: which writ lies against whom, which court has which jurisdiction, which list a subject sits in, and what the 73rd and 74th Amendments actually did. Case names are given where a case is itself the answer.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '4–6 questions', note: 'Writs, jurisdictions and Centre–state legislative relations are the recurring areas.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–4 questions', note: 'Article numbers, court strengths, retirement ages and the two Schedules.' },
    { exam: 'State PSC Prelims', count: '4–6 questions', note: 'Panchayati Raj is weighted heavily, often with state-specific detail.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Basic recall — which court, which writ, which amendment.' },
    { exam: 'CLAT / AILET Legal Reasoning', count: '3–5 questions', note: 'Court hierarchy, writ jurisdiction and landmark cases.' },
  ],

  contents: [
    { icon: 'target', title: 'The Supreme Court', sub: 'Composition and jurisdiction', href: '#supreme-court' },
    { icon: 'layers', title: 'High Courts and below', sub: 'The rest of the hierarchy', href: '#high-courts' },
    { icon: 'doc', title: 'The five writs', sub: 'Which lies against whom', href: '#writs' },
    { icon: 'user', title: 'Judges', sub: 'Appointment, removal and the collegium', href: '#judges' },
    { icon: 'globe', title: 'The federal structure', sub: 'Union, states and the three lists', href: '#federalism' },
    { icon: 'refresh', title: 'Centre–state relations', sub: 'Legislative, administrative, financial', href: '#centre-state' },
    { icon: 'book', title: 'Local self-government', sub: 'The 73rd and 74th Amendments', href: '#local' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'supreme-court',
      heading: 'The Supreme Court',
      eyebrow: 'Composition and jurisdiction',
      intro:
        'Established under Article 124 and inaugurated on 28 January 1950, the Supreme Court is at once the highest court of appeal, the guardian of the Constitution and the guarantor of fundamental rights. Those three roles map onto three distinct jurisdictions.',
      blocks: [
        {
          type: 'table',
          caption: 'The jurisdictions of the Supreme Court',
          head: ['Jurisdiction', 'Article', 'What it covers'],
          rows: [
            ['Original', 'Article 131', 'Disputes between the Union and one or more states, or between states. This is the federal jurisdiction, and it is exclusive to the Supreme Court.'],
            ['Writ', 'Article 32', 'Enforcement of fundamental rights. Article 32 is itself a fundamental right, which Ambedkar called the heart and soul of the Constitution.'],
            ['Appellate', 'Articles 132 to 134', 'Appeals in constitutional, civil and criminal matters from High Courts, generally on a certificate from the High Court concerned.'],
            ['Special leave', 'Article 136', 'Discretionary leave to appeal from any judgment or order of any court or tribunal except a court martial. The widest of the court\'s powers.'],
            ['Advisory', 'Article 143', 'The President may refer a question of law or fact of public importance for the court\'s opinion. The court may decline, and the opinion does not bind the President.'],
            ['Review', 'Article 137', 'Power to review its own judgments. A curative petition, a judge-made remedy beyond review, was recognised in Rupa Ashok Hurra in 2002.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Strength',
              'The Chief Justice of India and, at present, thirty-three other judges — thirty-four in all — following the Supreme Court (Number of Judges) Amendment Act, 2019. The number is fixed by Parliament, not by the Constitution, so it has risen several times and may rise again.',
            ],
            [
              'Qualifications (Article 124)',
              'A citizen of India who has been a judge of a High Court for at least five years, or an advocate of a High Court for at least ten years, or is in the President\'s opinion a distinguished jurist. No minimum age is prescribed; judges retire at sixty-five.',
            ],
            [
              'Court of record (Article 129)',
              'Its proceedings are recorded for perpetual memory and testimony, and it has the power to punish for contempt of itself. Article 215 gives High Courts the same status.',
            ],
            [
              'Article 141',
              'The law declared by the Supreme Court is binding on all courts within India. This is what makes precedent operate in the Indian system, and it is the article behind every question about a landmark judgment\'s effect.',
            ],
            [
              'Article 142',
              'The court may pass any decree or order necessary for doing complete justice in a cause before it. It is the source of some of the court\'s most creative and most debated orders.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'high-courts',
      heading: 'High Courts and below',
      eyebrow: 'The rest of the hierarchy',
      intro:
        'India has a single integrated judiciary — there is no separate set of state courts as in the United States — so a case can travel from a district court to a High Court to the Supreme Court without leaving one hierarchy.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'High Courts (Article 214)',
              'There shall be a High Court for each state, but Article 231 allows one High Court for two or more states or union territories, which is why the number of High Courts is smaller than the number of states. Judges are appointed by the President, retire at sixty-two, and must have held judicial office for ten years or been an advocate of a High Court for ten years.',
            ],
            [
              'The wider writ power (Article 226)',
              'A High Court may issue writs not only for the enforcement of fundamental rights but also "for any other purpose" — that is, for the enforcement of an ordinary legal right. Its writ jurisdiction is therefore wider than the Supreme Court\'s under Article 32. This comparison is examined more often than any other single point in the topic.',
            ],
            [
              'Superintendence (Article 227)',
              'Every High Court has superintendence over all courts and tribunals within its territorial jurisdiction, other than military tribunals. Article 235 gives it control over the subordinate judiciary, including posting, promotion and leave.',
            ],
            [
              'Subordinate courts (Articles 233 to 237)',
              'District judges are appointed by the Governor in consultation with the High Court. Below them sit the courts of civil judges and judicial magistrates. The separation of the judiciary from the executive in the public services of the state is directed by Article 50, a Directive Principle.',
            ],
            [
              'Tribunals and alternative forums',
              'Articles 323A and 323B, added by the 42nd Amendment, provide for administrative and other tribunals. Lok Adalats under the Legal Services Authorities Act, 1987, settle disputes by compromise and their awards are deemed civil court decrees. Gram Nyayalayas, family courts and consumer forums complete the picture. Article 39A directs the state to provide free legal aid.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Public interest litigation',
          text:
            'PIL relaxed the traditional rule that only a person whose own right is affected may approach the court, allowing any public-spirited person to move the court on behalf of those who cannot. It grew from the late 1970s, associated with Justices P. N. Bhagwati and V. R. Krishna Iyer, and rests on Articles 32 and 226. Its virtue is access; its criticised cost is judicial involvement in matters of policy.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'writs',
      heading: 'The five writs',
      eyebrow: 'Which lies against whom',
      intro:
        'The five writs are the most reliably examined item in the whole polity syllabus, because each has a precise scope and the wrong writ is the obvious distractor.',
      blocks: [
        {
          type: 'table',
          caption: 'The writs, their literal meaning and their use',
          head: ['Writ', 'Literal meaning', 'When it lies'],
          rows: [
            ['Habeas corpus', 'To have the body', 'To produce a detained person before the court and test the legality of the detention. It lies against both public authorities and private persons.'],
            ['Mandamus', 'We command', 'To compel a public authority to perform a public duty it has refused to perform. It does not lie against a private individual, against the President or a Governor, or to enforce a discretionary or contractual duty.'],
            ['Prohibition', 'To forbid', 'Issued by a higher court to a lower court or tribunal to stop it exceeding its jurisdiction — while the proceedings are still going on. It lies only against judicial and quasi-judicial bodies.'],
            ['Certiorari', 'To be certified', 'Issued by a higher court to quash an order already passed by a lower court or tribunal that exceeded its jurisdiction or erred in law. It lies after the fact, and since 1991 also against administrative authorities affecting rights.'],
            ['Quo warranto', 'By what authority', 'To question a person\'s right to hold a public office. Any interested person may seek it, not only an aggrieved party, and it does not lie in respect of a private or ministerial office.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Prohibition versus certiorari',
              'The difference is timing. Prohibition stops a proceeding before the order is made; certiorari quashes the order after it is made. A useful memory device: prohibition prevents, certiorari cancels.',
            ],
            [
              'Judicial review',
              'The power of the courts to examine the constitutionality of legislative enactments and executive orders. The phrase does not appear in the Constitution but the power flows from Articles 13, 32, 131 to 136, 143, 226 and 246. Article 13 declares that any law inconsistent with the fundamental rights is void to the extent of the inconsistency.',
            ],
            [
              'Judicial activism and overreach',
              'Activism describes the court taking an expansive view of its role, as in PIL and the reading of new rights into Article 21. Overreach is the criticism that it has crossed into functions assigned to the legislature or executive. Both terms appear in UPSC mains questions and occasionally as prelims distractors.',
            ],
            [
              'Doctrines worth naming',
              'Severability confines a declaration of invalidity to the offending part of a law. Eclipse holds that a pre-Constitution law inconsistent with fundamental rights is not dead but dormant, and revives if the inconsistency is removed. Waiver holds that fundamental rights cannot be waived by the person who has them. Colourable legislation strikes down a law that does indirectly what the legislature could not do directly.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'judges',
      heading: 'Judges',
      eyebrow: 'Appointment, removal and the collegium',
      intro:
        'How judges are chosen has been contested for four decades, and the sequence of cases that settled it is asked directly.',
      blocks: [
        {
          type: 'table',
          caption: 'The Judges Cases',
          head: ['Case and year', 'Popular name', 'What it decided'],
          rows: [
            ['S. P. Gupta, 1981', 'First Judges Case', 'The word "consultation" in Article 124 did not mean concurrence, so the executive\'s view prevailed.'],
            ['Supreme Court Advocates-on-Record Association, 1993', 'Second Judges Case', 'Reversed the first: consultation does mean concurrence, and the Chief Justice\'s recommendation, formed with senior colleagues, binds. This created the collegium.'],
            ['In re Presidential Reference, 1998', 'Third Judges Case', 'Clarified the collegium as the Chief Justice plus the four senior-most judges of the Supreme Court, acting collectively.'],
            ['SC Advocates-on-Record Association, 2015', 'Fourth Judges Case', 'Struck down the 99th Amendment and the National Judicial Appointments Commission as violating the independence of the judiciary, part of the basic structure. The collegium was restored.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Removal (Article 124(4))',
              'A judge of the Supreme Court or a High Court may be removed only by an order of the President following an address by each House of Parliament, supported by a majority of the total membership of that House and by not less than two-thirds of the members present and voting, on the ground of proved misbehaviour or incapacity. The procedure is in the Judges (Inquiry) Act, 1968.',
            ],
            [
              'The word "impeachment" is loose usage',
              'The Constitution uses "impeachment" only for the President. For judges it speaks of removal by address. No judge of the Supreme Court has ever been removed under this procedure, though motions have been initiated and inquiries held.',
            ],
            [
              'Safeguards of independence',
              'Security of tenure, salaries charged on the Consolidated Fund and not variable to a judge\'s disadvantage except during a financial emergency, a bar on discussion of a judge\'s conduct in Parliament except on a removal motion, a bar on practising before the same court after retirement, and the power to punish for contempt.',
            ],
            [
              'Ad hoc and additional judges',
              'Article 127 allows ad hoc judges to be appointed to the Supreme Court when there is no quorum. Article 128 allows a retired judge to sit with consent. Article 224 provides for additional and acting judges of a High Court, and Article 224A for a retired High Court judge to sit again.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'federalism',
      heading: 'The federal structure',
      eyebrow: 'Union, states and the three lists',
      intro:
        'Article 1 declares that India, that is Bharat, shall be a Union of States. The word "federation" appears nowhere in the Constitution, and the choice of "Union" was deliberate.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Why "Union" and not "Federation"',
              'Ambedkar explained that the Union is not the result of an agreement between states, and that no state has the right to secede. The federation is a union because it is indestructible. India is therefore usually described as quasi-federal, or as federal in structure with a unitary bias — K. C. Wheare\'s phrase was "quasi-federal".',
            ],
            [
              'Federal features',
              'A written and supreme Constitution; a division of powers between two levels of government; a rigid amending procedure for entrenched provisions; an independent judiciary to arbitrate; and bicameralism at the Union level with the Rajya Sabha representing the states.',
            ],
            [
              'Unitary features',
              'A strong Centre with the larger list of subjects and the residuary power; single citizenship; a single integrated judiciary; All India Services officered centrally but serving the states; Governors appointed by the Union; the emergency provisions; the Union\'s power to alter state boundaries and names under Article 3; and a single Election Commission and single Comptroller and Auditor General.',
            ],
            [
              'Article 3',
              'Parliament may form a new state, alter the area, boundaries or name of any state, by simple majority. The state legislature\'s views must be sought but need not be accepted. This is the clearest single indication that the Indian states are not sovereign units.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'The Seventh Schedule',
          head: ['List', 'Who legislates', 'Representative subjects'],
          rows: [
            ['Union List', 'Parliament alone', 'Defence, foreign affairs, atomic energy, railways, banking, currency, citizenship, census, posts and telegraphs. It is the longest of the three lists and has grown slightly since 1950.'],
            ['State List', 'State legislatures, subject to the exceptions in Articles 249, 250, 252 and 253', 'Public order, police, public health and sanitation, agriculture, local government, land, state excise, betting and gambling. It has shrunk since 1950.'],
            ['Concurrent List', 'Both, with the Union prevailing in case of conflict under Article 254', 'Criminal law and procedure, marriage and divorce, bankruptcy, trade unions, economic and social planning, education, forests, and protection of wild animals and birds.'],
          ],
        },
        {
          type: 'note',
          title: 'What the 42nd Amendment moved',
          text:
            'Five subjects were transferred from the State List to the Concurrent List in 1976 — education, forests, weights and measures, protection of wild animals and birds, and administration of justice with the constitution and organisation of all courts except the Supreme Court and High Courts. This is why education and forests are concurrent today, and it is asked directly. The exact number of entries in each list has changed several times through amendments, so learn the character of each list rather than a precise entry count.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'centre-state',
      heading: 'Centre–state relations',
      eyebrow: 'Legislative, administrative, financial',
      intro:
        'Part XI covers legislative and administrative relations and Part XII the financial. The recurring theme is that the Union may enter the state field in defined circumstances, but never the reverse.',
      blocks: [
        {
          type: 'table',
          caption: 'When Parliament may legislate on a State List subject',
          head: ['Provision', 'Trigger', 'Duration'],
          rows: [
            ['Article 249', 'A Rajya Sabha resolution supported by two-thirds of members present and voting, that it is in the national interest', 'One year, renewable by further resolutions.'],
            ['Article 250', 'A proclamation of national emergency is in force', 'The law ceases six months after the emergency ends.'],
            ['Article 252', 'Two or more state legislatures request Parliament to legislate for them', 'Applies to those states, and to any other that adopts it later. Only Parliament can amend or repeal such a law.'],
            ['Article 253', 'Implementing an international treaty, agreement or convention', 'No time limit. This is how many environmental laws were enacted.'],
            ['Article 356', 'President\'s rule is in operation in the state', 'The law continues beyond the proclamation until altered by the state legislature.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Repugnancy (Article 254)',
              'If a state law on a Concurrent List subject conflicts with a Union law, the Union law prevails and the state law is void to the extent of the repugnancy. The exception is where the state law has been reserved for the President\'s consideration and has received assent, in which case it prevails in that state — but Parliament may still legislate afresh to override it.',
            ],
            [
              'Administrative relations',
              'The Union may give directions to a state under Articles 256 and 257, and failure to comply can attract Article 365, which allows the President to hold that the government of the state cannot be carried on in accordance with the Constitution. All India Services, and the Union\'s control of them, are another administrative link.',
            ],
            [
              'Financial relations',
              'Taxes are levied and collected and their proceeds distributed under the scheme in Part XII, as recast by the 80th and 101st Amendments. The Finance Commission under Article 280 recommends the division of net tax proceeds between Union and states and the principles governing grants-in-aid. Article 275 provides for grants-in-aid to states in need.',
            ],
            [
              'The GST Council (Article 279A)',
              'Created by the 101st Amendment in 2016, chaired by the Union Finance Minister with the Union Minister of State for Finance and one minister nominated by each state. Decisions need a three-fourths majority of weighted votes, with the Centre holding one-third of the total and the states together two-thirds. It is the most significant institution of cooperative federalism created since 1950.',
            ],
            [
              'Coordination bodies',
              'The Inter-State Council under Article 263 was set up in 1990 on the Sarkaria Commission\'s recommendation. Zonal Councils are statutory, created by the States Reorganisation Act, 1956, with the North Eastern Council added by a separate Act in 1971. The Sarkaria Commission of 1983 and the Punchhi Commission of 2007 both examined Centre–state relations.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'local',
      heading: 'Local self-government',
      eyebrow: 'The 73rd and 74th Amendments',
      intro:
        'Local government was a Directive Principle under Article 40 for forty years before two amendments in 1992 made it a constitutional obligation. State PSC papers examine this block heavily.',
      blocks: [
        {
          type: 'table',
          caption: 'The two amendments compared',
          head: ['Feature', '73rd Amendment (Panchayats)', '74th Amendment (Municipalities)'],
          rows: [
            ['Part and articles added', 'Part IX, Articles 243 to 243-O', 'Part IX-A, Articles 243-P to 243-ZG'],
            ['Schedule added', 'Eleventh Schedule, listing 29 subjects', 'Twelfth Schedule, listing 18 subjects'],
            ['Came into force', '24 April 1993, now observed as National Panchayati Raj Day', '1 June 1993'],
            ['Structure created', 'Three tiers — village, intermediate and district — with the intermediate tier optional for states with a population below twenty lakh', 'Three types — Nagar Panchayat for a transitional area, Municipal Council for a smaller urban area, Municipal Corporation for a larger urban area'],
            ['Term', 'Five years, with elections before expiry, and a body dissolved early must be reconstituted within six months', 'The same five-year rule applies'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Reservation',
              'Seats are reserved for Scheduled Castes and Scheduled Tribes in proportion to their population, and not less than one-third of the total seats and of the offices of chairperson are reserved for women. Many states have raised the women\'s share to one-half by their own legislation, so the state-level figure differs from the constitutional minimum.',
            ],
            [
              'The Gram Sabha',
              'The body consisting of all persons registered in the electoral rolls of a village within a panchayat area. It is the only directly democratic institution in the Indian constitutional scheme, and its powers are whatever the state legislature confers.',
            ],
            [
              'State Election Commission and State Finance Commission',
              'Article 243K requires a State Election Commission to superintend elections to panchayats, and Article 243-I requires the Governor to constitute a State Finance Commission every five years to review the financial position of the panchayats. Both apply to municipalities as well.',
            ],
            [
              'The committees that led here',
              'The Balwant Rai Mehta Committee of 1957 recommended the three-tier structure and democratic decentralisation. Rajasthan was the first state to implement Panchayati Raj, inaugurated at Nagaur on 2 October 1959, followed by Andhra Pradesh. The Ashok Mehta Committee of 1977 recommended a two-tier structure. The G. V. K. Rao Committee of 1985 and the L. M. Singhvi Committee of 1986 followed, the latter recommending constitutional status — which is what 1992 delivered.',
            ],
            [
              'PESA',
              'The Panchayats (Extension to the Scheduled Areas) Act, 1996, extends Part IX to the Fifth Schedule areas with modifications that give the Gram Sabha wide powers over minor forest produce, land alienation and local plans. It is asked alongside the Fifth and Sixth Schedules, which govern the administration of scheduled and tribal areas.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A tribunal is about to pass an order it has no jurisdiction to pass. Which writ should be sought?',
      steps: [
        'The proceeding is still under way, so the aim is to stop it rather than to undo it.',
        'Certiorari would quash an order already made, so it is premature.',
        'Prohibition is the writ that forbids a lower court or tribunal from exceeding its jurisdiction while the matter is pending.',
      ],
      answer: 'Prohibition — prohibition prevents, certiorari cancels.',
    },
    {
      q: 'Why is the writ jurisdiction of a High Court wider than that of the Supreme Court?',
      steps: [
        'Article 32 empowers the Supreme Court to issue writs for the enforcement of fundamental rights only.',
        'Article 226 empowers a High Court to issue writs for the enforcement of fundamental rights "and for any other purpose".',
        'That phrase brings in ordinary legal rights, so the High Court can act in cases the Supreme Court cannot entertain under Article 32.',
      ],
      answer: 'Article 226 covers any legal right; Article 32 covers fundamental rights alone.',
    },
    {
      q: 'A state law and a Union law on a Concurrent List subject conflict. Which prevails?',
      steps: [
        'Article 254(1) provides that the Union law prevails and the state law is void to the extent of the repugnancy.',
        'Article 254(2) makes an exception where the state law was reserved for the President and received assent — it then prevails in that state.',
        'Even then, Parliament may afterwards enact a law adding to, amending or repealing the state law.',
      ],
      answer: 'The Union law, unless the state law had presidential assent — and Parliament can still override it later.',
    },
    {
      q: 'What did the Fourth Judges Case decide?',
      steps: [
        'The 99th Amendment had created a National Judicial Appointments Commission to replace the collegium.',
        'In 2015 the Supreme Court struck down both the amendment and the NJAC Act.',
        'It held that the independence of the judiciary is part of the basic structure and that the new mechanism compromised it, so the collegium was restored.',
      ],
      answer: 'It struck down the NJAC and restored the collegium system.',
    },
    {
      q: 'Can Parliament legislate on police, a State List subject, in normal times?',
      steps: [
        'Public order and police are State List entries, so ordinarily only a state legislature may act on them.',
        'But Article 249 allows Parliament to legislate for a year if the Rajya Sabha resolves by two-thirds of members present and voting that it is in the national interest.',
        'Articles 250, 252, 253 and 356 provide four further routes, each with its own trigger and duration.',
      ],
      answer: 'Yes, through Article 249 or one of the four other enabling provisions — not otherwise.',
    },
    {
      q: 'Which subjects moved from the State List to the Concurrent List, and when?',
      steps: [
        'The transfer was made by the 42nd Amendment in 1976.',
        'Five subjects moved: education, forests, weights and measures, protection of wild animals and birds.',
        'The fifth was administration of justice, with the constitution and organisation of all courts except the Supreme Court and the High Courts.',
      ],
      answer: 'Those five, by the 42nd Amendment of 1976.',
    },
    {
      q: 'How many subjects are listed in the Eleventh and Twelfth Schedules, and what are they for?',
      steps: [
        'Both Schedules were added in 1992 to give content to local government.',
        'The Eleventh Schedule, added by the 73rd Amendment, lists 29 subjects that may be devolved to panchayats.',
        'The Twelfth Schedule, added by the 74th Amendment, lists 18 subjects for municipalities.',
      ],
      answer: 'Twenty-nine and eighteen respectively — lists of devolvable functions, not automatic transfers.',
    },
    {
      q: 'A person continues to occupy a public office after ceasing to be qualified for it. What remedy lies?',
      steps: [
        'The question is the legality of the holding of the office, not the legality of any particular order.',
        'Quo warranto asks by what authority a person holds a public office of a substantive character.',
        'Any interested person may apply, not only someone personally aggrieved, and the writ does not lie for a private office.',
      ],
      answer: 'Quo warranto.',
    },
  ],

  practice: [
    {
      q: 'The writ of habeas corpus is issued to:',
      options: ['Produce a detained person before the court', 'Quash an order of a lower court', 'Compel performance of a public duty', 'Question the right to hold a public office'],
      answer: 0,
      explain: 'It literally means "to have the body", and it lies against private persons as well as public authorities.',
    },
    {
      q: 'The present sanctioned strength of the Supreme Court is:',
      options: ['26 judges', '31 judges', '34 judges', '30 judges'],
      answer: 2,
      explain: 'The Chief Justice and thirty-three other judges, following the Supreme Court (Number of Judges) Amendment Act, 2019.',
    },
    {
      q: 'Judges of a High Court retire at the age of:',
      options: ['60', '58', '65', '62'],
      answer: 3,
      explain: 'High Court judges retire at sixty-two; Supreme Court judges at sixty-five.',
    },
    {
      q: 'Article 141 provides that:',
      options: ['The Supreme Court is a court of record', 'The President may seek the court\'s advice', 'The Supreme Court may review its own judgments', 'The law declared by the Supreme Court binds all courts in India'],
      answer: 3,
      explain: 'Article 129 is court of record, 137 review and 143 advisory jurisdiction.',
    },
    {
      q: 'The collegium system in its present form was settled by the:',
      options: ['First Judges Case', 'Minerva Mills case', 'Kesavananda Bharati case', 'Second and Third Judges Cases'],
      answer: 3,
      explain: 'The Second Judges Case of 1993 created it and the Third of 1998 defined the collegium as the CJI and four senior-most judges.',
    },
    {
      q: 'Education was transferred from the State List to the Concurrent List by the:',
      options: ['42nd Amendment', '44th Amendment', '73rd Amendment', '86th Amendment'],
      answer: 0,
      explain: 'The 42nd Amendment of 1976 moved education, forests, weights and measures, protection of wild animals and birds, and administration of justice.',
    },
    {
      q: 'The residuary powers of legislation are vested in:',
      options: ['The states', 'Parliament', 'Both concurrently', 'The Supreme Court'],
      answer: 1,
      explain: 'Article 248 gives Parliament the exclusive power to legislate on any matter not enumerated in the Concurrent or State Lists.',
    },
    {
      q: 'The 73rd Amendment came into force on:',
      options: ['1 June 1993', '24 April 1993', '2 October 1992', '26 January 1993'],
      answer: 1,
      explain: 'It is observed as National Panchayati Raj Day. The 74th Amendment took effect on 1 June 1993.',
    },
    {
      q: 'The Eleventh Schedule contains how many subjects?',
      options: ['18', '22', '29', '31'],
      answer: 2,
      explain: 'Twenty-nine subjects for panchayats. The Twelfth Schedule contains eighteen for municipalities.',
    },
    {
      q: 'The GST Council is provided for by:',
      options: ['Article 263', 'Article 279A', 'Article 280', 'Article 282'],
      answer: 1,
      explain: 'Article 279A was inserted by the 101st Amendment of 2016. Article 263 is the Inter-State Council and 280 the Finance Commission.',
    },
    {
      q: 'The first state to implement Panchayati Raj was:',
      options: ['Rajasthan', 'Andhra Pradesh', 'Maharashtra', 'Gujarat'],
      answer: 0,
      explain: 'Inaugurated at Nagaur on 2 October 1959, following the Balwant Rai Mehta Committee report. Andhra Pradesh followed.',
    },
    {
      q: 'A writ of mandamus cannot be issued against:',
      options: ['A municipal corporation', 'A government department', 'The President of India', 'A public university'],
      answer: 2,
      explain: 'It does not lie against the President or a Governor, against a private individual, or to enforce a discretionary or contractual duty.',
    },
    {
      q: 'The original jurisdiction of the Supreme Court under Article 131 covers:',
      options: ['Fundamental rights petitions', 'Disputes between the Union and states', 'Appeals from High Courts', 'Advisory references by the President'],
      answer: 1,
      explain: 'This is the federal jurisdiction, and it is exclusive to the Supreme Court.',
    },
    {
      q: 'A judge of the Supreme Court can be removed on the ground of:',
      options: ['Loss of parliamentary confidence', 'Proved misbehaviour or incapacity', 'Violation of the Constitution', 'Attaining the age of sixty-two'],
      answer: 1,
      explain: 'Article 124(4) specifies proved misbehaviour or incapacity, and requires a special majority address by both Houses.',
    },
    {
      q: 'The Inter-State Council is established under:',
      options: ['Article 262', 'Article 263', 'Article 265', 'Article 267'],
      answer: 1,
      explain: 'It was set up in 1990 on the recommendation of the Sarkaria Commission.',
    },
    {
      q: 'Not less than what proportion of seats in panchayats is reserved for women?',
      options: ['One-fourth', 'One-third', 'One-half', 'One-fifth'],
      answer: 1,
      explain: 'The Constitution sets a floor of one-third; several states have legislated to raise it to one-half.',
    },
  ],

  faqs: [
    {
      q: 'Is India federal or unitary?',
      a: 'Both, in different respects, which is why it is usually called quasi-federal. It is federal in having a written supreme Constitution, a division of powers, an independent judiciary and a second chamber representing the states. It is unitary in having a strong Centre with residuary powers, single citizenship, an integrated judiciary, centrally appointed Governors, All India Services and emergency provisions that can suspend the division altogether.',
    },
    {
      q: 'What is the difference between prohibition and certiorari?',
      a: 'Timing. Prohibition is issued while a proceeding is still pending, to stop a lower court or tribunal from exceeding its jurisdiction. Certiorari is issued after an order has been made, to quash it. Both lie against judicial and quasi-judicial bodies, and certiorari has since 1991 also been available against administrative authorities affecting rights.',
    },
    {
      q: 'Why is Article 32 called the heart and soul of the Constitution?',
      a: 'Because Ambedkar described it so in the Constituent Assembly. It is the right to move the Supreme Court for the enforcement of the other fundamental rights, and it is itself a fundamental right — meaning the remedy is guaranteed at the same level as the right. Without it the other rights would be declarations without a means of enforcement.',
    },
    {
      q: 'What is the collegium, and why is it controversial?',
      a: 'The Chief Justice of India and the four senior-most judges of the Supreme Court, who recommend appointments and transfers of judges. It emerged from the Second and Third Judges Cases and is not mentioned in the Constitution. It is criticised for opacity and for judges appointing judges; the attempt to replace it with the NJAC was struck down in 2015 as violating judicial independence, part of the basic structure.',
    },
    {
      q: 'Can a state refuse to implement a Union law?',
      a: 'Not lawfully, on a subject within Union competence. Articles 256 and 257 require a state to ensure compliance with laws of Parliament and permit the Union to give directions, and Article 365 allows the President to treat non-compliance as a failure of constitutional machinery. A state\'s remedies are political, or a challenge in court to the law\'s validity — not unilateral refusal.',
    },
    {
      q: 'Did the 73rd Amendment actually transfer the 29 subjects to panchayats?',
      a: 'No, and this is the most common misunderstanding. The Eleventh Schedule lists subjects that a state legislature may devolve; it does not devolve them itself. Actual devolution of functions, funds and functionaries varies enormously between states, which is why the effectiveness of Panchayati Raj differs so much across the country.',
    },
    {
      q: 'What is public interest litigation?',
      a: 'A relaxation of the rule of standing, allowing any public-spirited person to approach the Supreme Court under Article 32 or a High Court under Article 226 on behalf of those unable to do so themselves. It developed from the late 1970s and is associated with Justices Bhagwati and Krishna Iyer. It expanded access to justice, and is criticised for drawing courts into questions of policy.',
    },
    {
      q: 'How many High Courts are there?',
      a: 'Fewer than the number of states, because Article 231 allows a single High Court for two or more states or union territories — and the total has been changed several times as new High Courts have been created. Treat the current number as something to verify rather than a fixed fact, and remember the reason the number does not match the number of states.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'The sanctioned strength of the Supreme Court and of individual High Courts, the number of High Courts, the number of entries in each of the three lists, the state-level share of seats reserved for women in local bodies, and the composition and award period of the current Finance Commission. The writs, jurisdictions, articles and landmark cases do not change.',
    },
    {
      q: 'How many questions come from this block?',
      a: 'Four to six in UPSC Prelims, three to four in SSC CGL Tier 1, four to six in state PSC prelims where Panchayati Raj is weighted heavily, and three to five in CLAT and AILET. The five writs alone account for a question in a very large share of papers.',
    },
  ],

  related: [
    { label: 'Parliament & the Legislature', to: '/study-material/polity/parliament/' },
    { label: 'Executive & Council of Ministers', to: '/study-material/polity/executive/' },
    { label: 'Constitution', to: '/study-material/constitution/' },
    { label: 'Legal Reasoning', to: '/study-material/legal-reasoning/' },
    { label: 'All Polity', to: '/study-material/polity/' },
  ],
}
