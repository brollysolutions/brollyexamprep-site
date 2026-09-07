/**
 * Amendments and Basic Structure —
 * /study-material/constitution/amendments/
 *
 * How the Constitution changes, and the judge-made limit on that power. The
 * amendment list is given as a table of the ones actually asked rather than as
 * a complete register, and the running total is flagged as a figure that grows.
 */
export default {
  subject: 'constitution',
  subjectName: 'Constitution',
  slug: 'amendments',
  title: 'Amendments & Basic Structure',
  seoTitle: 'Constitutional Amendments and Basic Structure | Article 368 Notes & Practice',
  metaDescription:
    'Complete study material on constitutional amendments and the basic structure doctrine for UPSC, SSC and state exams — Article 368 and the three routes.',
  readMinutes: 24,
  lead: [
    'Two things make this topic examinable out of proportion to its length. First, the amendment procedure is genuinely intricate — three different routes, and the hardest questions are about which one a given change requires. Second, the basic structure doctrine is entirely judge-made: it appears nowhere in the text, and it is the single most consequential idea in Indian constitutional law.',
    'The amendment list below is not a register of all of them. It is the set that exams actually ask about, each with what it did and why it mattered. The running total is deliberately flagged rather than stated as a permanent fact, because it grows.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '3–5 questions', note: 'Usually on what a named amendment did, or on the basic structure cases.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–4 questions', note: 'Which amendment did what — asked very directly, with adjacent numbers as distractors.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'The 42nd, 44th, 73rd and 74th Amendments carry most of the weight.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'The famous ones — anti-defection, voting age, Panchayati Raj, GST.' },
    { exam: 'CLAT / AILET Legal Reasoning', count: '3–4 questions', note: 'Kesavananda Bharati and its successors, often as passage-based questions.' },
  ],

  contents: [
    { icon: 'refresh', title: 'Article 368', sub: 'The three routes to amendment', href: '#procedure' },
    { icon: 'search', title: 'The amendment cases', sub: 'Shankari Prasad to the NJAC', href: '#cases' },
    { icon: 'layers', title: 'The basic structure', sub: 'What is inside the doctrine', href: '#basic-structure' },
    { icon: 'book', title: 'Amendments 1 to 44', sub: 'The formative period', href: '#early' },
    { icon: 'doc', title: 'Amendments 52 to 100', sub: 'Defection to devolution', href: '#middle' },
    { icon: 'chart', title: 'Amendments 101 onward', sub: 'GST, EWS and after', href: '#recent' },
    { icon: 'target', title: 'How rigid is it really', sub: 'Evaluation and criticism', href: '#evaluation' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'procedure',
      heading: 'Article 368',
      eyebrow: 'The three routes to amendment',
      intro:
        'Article 368 describes two of the three routes; the third operates outside it altogether, which is why questions about it catch candidates out.',
      blocks: [
        {
          type: 'table',
          caption: 'The three routes compared',
          head: ['Route', 'Majority required', 'Examples of what it covers'],
          rows: [
            ['By simple majority, outside Article 368', 'A simple majority of members present and voting in each House, as for any ordinary law', 'Admission or establishment of new states, alteration of state boundaries or names, creation or abolition of a Legislative Council, changes to citizenship, the Second Schedule, quorum, salaries, and the use of English.'],
            ['By special majority under Article 368', 'A majority of the total membership of each House and at least two-thirds of the members present and voting, in each House separately', 'Fundamental Rights, Directive Principles, and every other provision not falling in the other two routes. This is the default.'],
            ['By special majority plus state ratification', 'The same special majority, and in addition ratification by the legislatures of at least half the states, by simple majority', 'Election of the President, extent of the executive power of the Union and the states, the Supreme Court and High Courts, the distribution of legislative powers, the Seventh Schedule, representation of states in Parliament, and Article 368 itself.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Where a bill may be introduced',
              'In either House. There is no requirement of prior presidential recommendation, and a private member may introduce an amendment bill. This distinguishes it sharply from a money bill.',
            ],
            [
              'No joint sitting',
              'Each House must pass the bill by the special majority separately. If one House does not, the bill fails — there is no deadlock-resolving mechanism, because Article 108 applies only to ordinary bills.',
            ],
            [
              'The President must assent',
              'Since the 24th Amendment of 1971, the President is obliged to give assent to a constitutional amendment bill. There is no power to withhold or to return it.',
            ],
            [
              'The state role is narrow',
              'Where ratification is needed, half the states must ratify, but there is no time limit for doing so, and a state that has ratified cannot withdraw. States have no power to initiate an amendment, and the resolution required under Article 169 for creating or abolishing a Legislative Council is not an amendment at all.',
            ],
            [
              'Amendments outside Article 368 are not "amendments"',
              'Changes made by simple majority under provisions such as Articles 2, 3, 4, 169 and 239A are not deemed to be amendments of the Constitution for the purposes of Article 368. This is why a state reorganisation Act, which alters the First Schedule, needs only a simple majority.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'cases',
      heading: 'The amendment cases',
      eyebrow: 'Shankari Prasad to the NJAC',
      intro:
        'The question of whether Parliament can amend away the fundamental rights was litigated for a quarter of a century. The sequence is asked as a sequence, so learn it in order.',
      blocks: [
        {
          type: 'table',
          caption: 'The sequence of decisions',
          head: ['Case', 'Year', 'What it held'],
          rows: [
            ['Shankari Prasad v. Union of India', '1951', 'A constitutional amendment is not "law" within Article 13, so Parliament may amend any part of the Constitution including the Fundamental Rights. The First Amendment was upheld.'],
            ['Sajjan Singh v. State of Rajasthan', '1965', 'Reaffirmed Shankari Prasad, though two judges expressed doubt — the first crack in the position.'],
            ['I. C. Golaknath v. State of Punjab', '1967', 'Reversed the earlier view: an amendment is "law" under Article 13, so Parliament cannot abridge the Fundamental Rights at all. Applied prospectively.'],
            ['Kesavananda Bharati v. State of Kerala', '1973', 'Overruled Golaknath by a thirteen-judge bench, 7 to 6. Parliament may amend any part of the Constitution, including the Fundamental Rights, but may not damage or destroy its basic structure.'],
            ['Indira Nehru Gandhi v. Raj Narain', '1975', 'The first application of the doctrine to strike down a constitutional amendment — the 39th Amendment, which had placed the election of the Prime Minister beyond judicial scrutiny.'],
            ['Minerva Mills v. Union of India', '1980', 'Struck down parts of the 42nd Amendment. Held that limited amending power and the balance between Parts III and IV are themselves part of the basic structure.'],
            ['Waman Rao v. Union of India', '1981', 'Fixed 24 April 1973, the date of Kesavananda Bharati, as the cut-off: laws placed in the Ninth Schedule after it are open to challenge.'],
            ['I. R. Coelho v. State of Tamil Nadu', '2007', 'Confirmed that laws added to the Ninth Schedule after 24 April 1973 can be tested against the basic structure, so the Schedule is no longer an absolute shield.'],
            ['SC Advocates-on-Record Association v. Union of India', '2015', 'Struck down the 99th Amendment and the NJAC, holding that the independence of the judiciary and the collegium mechanism protecting it fall within the basic structure.'],
          ],
        },
        {
          type: 'note',
          title: 'Why 24 April 1973 matters',
          text:
            'It is the date of the Kesavananda Bharati judgment, and it functions as a constitutional watershed. Laws placed in the Ninth Schedule before that date remain protected; those placed in it afterwards can be tested against the basic structure. The date is asked directly, and it is worth attaching to the case rather than trying to remember it in isolation.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'basic-structure',
      heading: 'The basic structure',
      eyebrow: 'What is inside the doctrine',
      intro:
        'The Supreme Court has never given an exhaustive list, and has said deliberately that it will not. What exists is an accumulation of elements identified case by case.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Elements identified so far',
              'Supremacy of the Constitution; the sovereign, democratic and republican character of the polity; the secular character of the Constitution; separation of powers between the legislature, executive and judiciary; the federal character of the Constitution; the unity and integrity of the nation; the welfare state and the social and economic justice it implies; judicial review; freedom and dignity of the individual; the parliamentary system; the rule of law; harmony and balance between Fundamental Rights and Directive Principles; equality; independence of the judiciary; free and fair elections; the limited amending power itself; effective access to justice; and Articles 32 and 226.',
            ],
            [
              'It is deliberately open-ended',
              'The court in Kesavananda declined to define the basic structure exhaustively, and later benches have said the content is to be determined case by case. Critics call this indeterminate; defenders say a closed list would be a target for circumvention.',
            ],
            [
              'What the doctrine does not do',
              'It does not prevent amendment of the Fundamental Rights — Kesavananda expressly overruled Golaknath on that point. It restrains only amendments that damage or destroy an essential feature. Nor does it apply to ordinary legislation, which is tested against the Constitution itself rather than against the doctrine — though I. R. Coelho brought Ninth Schedule laws within its reach.',
            ],
            [
              'Its influence beyond India',
              'The doctrine has been cited and adopted by courts in Bangladesh, Pakistan, Uganda, Kenya and elsewhere, which is why it is described as India\'s principal export in constitutional law. That fact appears in UPSC mains answers more often than in prelims.',
            ],
            [
              'The criticism',
              'That it gives an unelected court a veto over an elected Parliament exercising a power the Constitution expressly grants; that its content is uncertain and expands with each bench; and that it has no textual foundation. The defence is that an unlimited amending power would allow the Constitution to be replaced under the guise of being amended, which is what the framers cannot have intended.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'early',
      heading: 'Amendments 1 to 44',
      eyebrow: 'The formative period',
      intro:
        'The early amendments settled land reform and state reorganisation; the 42nd and 44th are the pair that every paper asks about, because one expanded executive power drastically and the other reversed much of it.',
      blocks: [
        {
          type: 'table',
          caption: 'The early amendments worth knowing',
          head: ['Amendment', 'Year', 'What it did'],
          rows: [
            ['First', '1951', 'Added the Ninth Schedule to protect land reform laws; added Article 15(4) after the Champakam Dorairajan case; added three grounds of restriction on free speech.'],
            ['Seventh', '1956', 'Gave effect to the reorganisation of states on linguistic lines, abolishing the Part A, B, C and D classification and repealing Part VII.'],
            ['Twenty-fourth', '1971', 'Made the President\'s assent to an amendment bill obligatory and inserted Article 13(4), reversing Golaknath.'],
            ['Twenty-fifth', '1971', 'Inserted Article 31C, protecting laws implementing Articles 39(b) and (c) from challenge under Articles 14 and 19.'],
            ['Twenty-sixth', '1971', 'Abolished the privy purses and the special privileges of the former rulers of princely states.'],
            ['Thirty-sixth', '1975', 'Made Sikkim a full state of the Indian Union.'],
            ['Forty-second', '1976', 'The "mini-Constitution". Added Socialist, Secular and Integrity to the Preamble; added Fundamental Duties as Part IVA; added Articles 39A, 43A and 48A; moved five subjects from the State List to the Concurrent List; extended the Lok Sabha term from five to six years; and curtailed judicial review. Based on the Swaran Singh Committee.'],
            ['Forty-fourth', '1978', 'Undid much of the 42nd. Restored the Lok Sabha term to five years; removed the right to property from Part III and re-enacted it as Article 300A; replaced "internal disturbance" with "armed rebellion" in Article 352; required a written Cabinet recommendation for an emergency; and made Articles 20 and 21 non-suspendable.'],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'middle',
      heading: 'Amendments 52 to 100',
      eyebrow: 'Defection to devolution',
      intro:
        'This stretch contains the amendments that reshaped Indian democracy from below — anti-defection, the voting age, and the two local government amendments of 1992.',
      blocks: [
        {
          type: 'table',
          caption: 'The middle period',
          head: ['Amendment', 'Year', 'What it did'],
          rows: [
            ['Fifty-second', '1985', 'Introduced the anti-defection law and added the Tenth Schedule.'],
            ['Sixty-first', '1989', 'Reduced the voting age from twenty-one to eighteen by amending Article 326.'],
            ['Sixty-ninth', '1991', 'Gave Delhi the status of the National Capital Territory with a legislative assembly, through Article 239AA.'],
            ['Seventy-first', '1992', 'Added Konkani, Manipuri and Nepali to the Eighth Schedule.'],
            ['Seventy-third', '1992', 'Gave constitutional status to panchayats, adding Part IX and the Eleventh Schedule. In force 24 April 1993.'],
            ['Seventy-fourth', '1992', 'Gave constitutional status to municipalities, adding Part IX-A and the Twelfth Schedule. In force 1 June 1993.'],
            ['Eighty-sixth', '2002', 'Made education a fundamental right through Article 21A, recast Article 45, and added the eleventh Fundamental Duty.'],
            ['Ninety-first', '2003', 'Capped the Council of Ministers at fifteen per cent of the House, and tightened the anti-defection law by removing the split exception.'],
            ['Ninety-second', '2003', 'Added Bodo, Dogri, Maithili and Santhali to the Eighth Schedule, taking the total to twenty-two.'],
            ['Ninety-third', '2005', 'Added Article 15(5), enabling reservation for backward classes in private educational institutions, aided or unaided, except minority institutions.'],
            ['Ninety-seventh', '2011', 'Gave constitutional status to cooperative societies — adding them to Article 19(1)(c), inserting Article 43B and Part IX-B.'],
            ['Ninety-ninth', '2014', 'Created the National Judicial Appointments Commission — struck down by the Supreme Court in 2015.'],
            ['Hundredth', '2015', 'Gave effect to the land boundary agreement with Bangladesh, exchanging enclaves and amending the First Schedule.'],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'recent',
      heading: 'Amendments 101 onward',
      eyebrow: 'GST, EWS and after',
      intro:
        'The most recent block, and the one most likely to be asked in a current-affairs-flavoured question. The running total moves, so treat the last entry as a floor rather than a ceiling.',
      blocks: [
        {
          type: 'table',
          caption: 'Recent amendments',
          head: ['Amendment', 'Year', 'What it did'],
          rows: [
            ['101st', '2016', 'Introduced the Goods and Services Tax, inserting Article 246A on concurrent taxing power, Article 269A on inter-state supply, and Article 279A creating the GST Council.'],
            ['102nd', '2018', 'Gave constitutional status to the National Commission for Backward Classes, inserting Articles 338B, 342A and 366(26C).'],
            ['103rd', '2019', 'Provided up to ten per cent reservation for economically weaker sections in education and public employment, through Articles 15(6) and 16(6). Upheld by the Supreme Court in 2022.'],
            ['104th', '2020', 'Extended the reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha and state assemblies for a further ten years, and discontinued the nomination of Anglo-Indian members.'],
            ['105th', '2021', 'Restored the power of states to identify socially and educationally backward classes for their own purposes, after the Supreme Court had read the 102nd Amendment as removing it.'],
            ['106th', '2023', 'The Nari Shakti Vandan Adhiniyam, providing for reservation of one-third of seats for women in the Lok Sabha, state legislative assemblies and the Delhi assembly. Its commencement is tied to a delimitation exercise following a census.'],
          ],
        },
        {
          type: 'note',
          title: 'The running total is a moving figure',
          text:
            'The Constitution has been amended 106 times as of the most recent amendment listed above. That number grows, and general awareness papers usually take it from the position on the date the paper is set. Learn the numbered amendments that matter and what each did; check the current total before quoting it, and never treat a total printed in any set of notes as permanent.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'evaluation',
      heading: 'How rigid is it really',
      eyebrow: 'Evaluation and criticism',
      intro:
        'The framers wanted a document that could be changed without a revolution and could not be changed on a whim. Whether they succeeded is a standard mains question and an occasional prelims one.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Compared with the United States',
              'The American Constitution has been amended twenty-seven times in more than two centuries, and requires a two-thirds vote of both Houses of Congress plus ratification by three-quarters of the states. India has amended its Constitution more than a hundred times in seventy-five years. The Indian procedure is markedly easier, chiefly because most amendments need no state ratification at all.',
            ],
            [
              'Compared with the United Kingdom',
              'Britain has no written constitution and therefore no special procedure — any Act of Parliament can change what would elsewhere be constitutional law. India\'s procedure is far more demanding, so on this comparison it is rigid rather than flexible.',
            ],
            [
              'Why India amends so often',
              'Partly because the Constitution is long and includes a great deal of ordinary administrative detail that in other countries would sit in statute — so routine changes require an amendment. Partly because Article 3 places state reorganisation inside the constitutional text. And partly because governments with large majorities have used the power freely, most notably in the 1970s.',
            ],
            [
              'Criticisms of Article 368',
              'That the states have no power to initiate an amendment and only a narrow role in ratifying one, which weakens the federal claim. That there is no provision for a referendum or a constitutional convention. That the special majority is calculated in a way that a determined government with a large majority can meet routinely. And that no time limit or procedure governs state ratification.',
            ],
            [
              'The counterweight',
              'The basic structure doctrine is the practical limit on the amending power, and it is judicial rather than textual. Whatever one thinks of its legitimacy, it is what has actually prevented amendments from being used to dismantle judicial review, free elections and the federal structure.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A bill seeks to change the distribution of powers in the Seventh Schedule. What majority does it need?',
      steps: [
        'Changes to the Seventh Schedule affect the balance between the Union and the states.',
        'Article 368(2) lists such provisions in its proviso, requiring the third route.',
        'That means a special majority in each House separately, plus ratification by the legislatures of at least half the states.',
      ],
      answer: 'Special majority plus ratification by half the states.',
    },
    {
      q: 'Parliament passes an Act creating a new state by dividing an existing one. Is this a constitutional amendment?',
      steps: [
        'Creating a new state alters the First Schedule, which is part of the Constitution.',
        'But Article 4 provides that a law made under Article 2 or Article 3 making such a change is not deemed to be an amendment for the purposes of Article 368.',
        'It therefore needs only a simple majority, after the President has referred the bill to the affected state legislature for its views.',
      ],
      answer: 'No — it takes effect by simple majority under Articles 3 and 4.',
    },
    {
      q: 'What did Kesavananda Bharati actually decide?',
      steps: [
        'It overruled Golaknath, holding that Parliament can amend any part of the Constitution including the Fundamental Rights.',
        'But it held that the amending power under Article 368 is not unlimited: an amendment may not damage or destroy the basic structure of the Constitution.',
        'It was decided by a thirteen-judge bench, the largest ever constituted, by a majority of seven to six, on 24 April 1973.',
      ],
      answer: 'That Fundamental Rights can be amended, but the basic structure cannot be destroyed.',
    },
    {
      q: 'Which amendment is called the mini-Constitution, and name three things it did?',
      steps: [
        'The 42nd Amendment of 1976, enacted during the Emergency on the Swaran Singh Committee\'s recommendation.',
        'It added Socialist, Secular and Integrity to the Preamble, and added the Fundamental Duties as Part IVA.',
        'It also moved education, forests, weights and measures, protection of wild animals and birds, and administration of justice from the State List to the Concurrent List, and extended the Lok Sabha term to six years.',
      ],
      answer: 'The 42nd Amendment — Preamble words, Fundamental Duties, and the transfer of five subjects to the Concurrent List.',
    },
    {
      q: 'A law is placed in the Ninth Schedule in 1995. Can it be challenged?',
      steps: [
        'The Ninth Schedule was created by the First Amendment to protect laws from challenge on fundamental rights grounds.',
        'Waman Rao in 1981 and I. R. Coelho in 2007 held that laws added after 24 April 1973 — the date of Kesavananda Bharati — are not absolutely protected.',
        'Such a law can therefore be tested against the basic structure of the Constitution.',
      ],
      answer: 'Yes — a post-1973 insertion can be tested against the basic structure.',
    },
    {
      q: 'Can a constitutional amendment bill be sent to a joint sitting if one House rejects it?',
      steps: [
        'Article 108 provides for a joint sitting on ordinary bills.',
        'It expressly excludes money bills, and constitutional amendment bills are governed by Article 368, which requires a special majority in each House separately.',
        'There is therefore no deadlock-resolving mechanism at all: if one House refuses, the bill simply fails.',
      ],
      answer: 'No — no joint sitting is available, and the bill fails.',
    },
    {
      q: 'What is the significance of the 101st Amendment?',
      steps: [
        'It introduced the Goods and Services Tax by restructuring indirect taxation.',
        'Article 246A gave both the Union and the states concurrent power to tax the supply of goods and services, which the Seventh Schedule had not allowed.',
        'Article 269A dealt with inter-state supply and Article 279A created the GST Council, the principal institution of cooperative federalism today.',
      ],
      answer: 'It created GST, with Articles 246A, 269A and 279A — the last establishing the GST Council.',
    },
    {
      q: 'Which amendment reduced the voting age, and to what?',
      steps: [
        'Article 326 provides for elections on the basis of adult suffrage and originally set the age at twenty-one.',
        'The 61st Amendment of 1989 amended that article.',
        'It reduced the qualifying age to eighteen years, expanding the electorate substantially at the 1989 general election.',
      ],
      answer: 'The 61st Amendment, 1989 — from twenty-one to eighteen.',
    },
  ],

  practice: [
    {
      q: 'A constitutional amendment bill can be introduced:',
      options: ['In the Lok Sabha only', 'Only by a minister', 'Only with the President\'s prior recommendation', 'In either House'],
      answer: 3,
      explain: 'Either House, with no requirement of prior presidential recommendation, and a private member may introduce one.',
    },
    {
      q: 'The basic structure doctrine was propounded in:',
      options: ['Golaknath', 'Shankari Prasad', 'Minerva Mills', 'Kesavananda Bharati'],
      answer: 3,
      explain: 'Kesavananda Bharati, 1973, decided by a thirteen-judge bench by a majority of seven to six.',
    },
    {
      q: 'Which amendment is known as the "mini-Constitution"?',
      options: ['24th', '42nd', '44th', '52nd'],
      answer: 1,
      explain: 'The 42nd Amendment of 1976 changed so many provisions at once that it earned the nickname.',
    },
    {
      q: 'Ratification by at least half the state legislatures is required to amend:',
      options: ['Fundamental Rights', 'Directive Principles', 'The Seventh Schedule', 'The Preamble'],
      answer: 2,
      explain: 'Provisions affecting the federal structure need state ratification. Fundamental Rights need only a special majority.',
    },
    {
      q: 'The anti-defection law was introduced by the:',
      options: ['52nd Amendment', '61st Amendment', '73rd Amendment', '91st Amendment'],
      answer: 0,
      explain: 'The 52nd Amendment of 1985 added the Tenth Schedule; the 91st of 2003 tightened it.',
    },
    {
      q: 'The 44th Amendment removed which right from Part III?',
      options: ['The right to freedom of movement', 'The right to constitutional remedies', 'The right to freedom of association', 'The right to property'],
      answer: 3,
      explain: 'The right to property was re-enacted as Article 300A, a constitutional but not fundamental right.',
    },
    {
      q: 'The cut-off date after which laws in the Ninth Schedule can be challenged is:',
      options: ['26 January 1950', '24 April 1973', '25 June 1975', '1 January 1980'],
      answer: 1,
      explain: 'The date of the Kesavananda Bharati judgment, fixed as the watershed in Waman Rao and confirmed in I. R. Coelho.',
    },
    {
      q: 'Which amendment created the GST Council?',
      options: ['99th', '100th', '101st', '102nd'],
      answer: 2,
      explain: 'The 101st Amendment of 2016 inserted Article 279A along with Articles 246A and 269A.',
    },
    {
      q: 'The 99th Amendment, which created the National Judicial Appointments Commission, was:',
      options: ['Upheld by the Supreme Court', 'Struck down by the Supreme Court', 'Never brought into force', 'Repealed by Parliament'],
      answer: 1,
      explain: 'Struck down in 2015 as violating the independence of the judiciary, part of the basic structure.',
    },
    {
      q: 'Reservation for economically weaker sections was introduced by the:',
      options: ['102nd Amendment', '103rd Amendment', '104th Amendment', '105th Amendment'],
      answer: 1,
      explain: 'The 103rd Amendment of 2019 inserted Articles 15(6) and 16(6); it was upheld by the Supreme Court in 2022.',
    },
    {
      q: 'The Ninth Schedule was added by the:',
      options: ['1st Amendment', '4th Amendment', '17th Amendment', '25th Amendment'],
      answer: 0,
      explain: 'The First Amendment of 1951 created it to protect land reform laws from challenge on fundamental rights grounds.',
    },
    {
      q: 'The President\'s assent to a constitutional amendment bill became obligatory after the:',
      options: ['24th Amendment', '42nd Amendment', '44th Amendment', '52nd Amendment'],
      answer: 0,
      explain: 'The 24th Amendment of 1971 removed any discretion to withhold or return such a bill.',
    },
    {
      q: 'Which case first used the basic structure doctrine to strike down a constitutional amendment?',
      options: ['Kesavananda Bharati', 'Indira Nehru Gandhi v. Raj Narain', 'Minerva Mills', 'Waman Rao'],
      answer: 1,
      explain: 'The 39th Amendment, which shielded the Prime Minister\'s election from judicial scrutiny, was struck down in 1975.',
    },
    {
      q: 'Constitutional status was given to cooperative societies by the:',
      options: ['93rd Amendment', '97th Amendment', '100th Amendment', '102nd Amendment'],
      answer: 1,
      explain: 'The 97th Amendment of 2011 amended Article 19(1)(c), inserted Article 43B and added Part IX-B.',
    },
    {
      q: 'The 106th Amendment provides for reservation of seats for:',
      options: ['Economically weaker sections', 'Anglo-Indians', 'Women', 'Other backward classes'],
      answer: 2,
      explain: 'One-third of seats in the Lok Sabha, state assemblies and the Delhi assembly, with commencement tied to a delimitation exercise.',
    },
    {
      q: 'Creating or abolishing a state Legislative Council under Article 169 requires:',
      options: ['A special majority in Parliament plus state ratification', 'A special majority in Parliament only', 'A simple majority in Parliament, after an assembly resolution', 'A referendum in the state'],
      answer: 2,
      explain: 'It is one of the changes made outside Article 368, so it needs only a simple majority once the assembly has resolved by a special majority.',
    },
  ],

  faqs: [
    {
      q: 'How many times has the Constitution been amended?',
      a: 'One hundred and six times as of the 106th Amendment of 2023. The figure grows, and papers usually take it from the position when they are set, so verify the current total before quoting it. What matters more for the exam is knowing which numbered amendment did what.',
    },
    {
      q: 'What exactly is the basic structure?',
      a: 'A set of essential features that Parliament cannot destroy while amending the Constitution. It is judge-made, appears nowhere in the text, and has never been exhaustively defined. Elements identified so far include supremacy of the Constitution, the rule of law, judicial review, free and fair elections, secularism, federalism, separation of powers, independence of the judiciary, and the balance between Parts III and IV.',
    },
    {
      q: 'Can Parliament amend the Fundamental Rights?',
      a: 'Yes. Golaknath held in 1967 that it could not, but Kesavananda Bharati overruled that in 1973. Parliament may amend any part of the Constitution, including Part III, provided the amendment does not damage or destroy the basic structure. Several fundamental rights have in fact been amended, most notably the removal of the right to property in 1978.',
    },
    {
      q: 'Why is the Indian Constitution amended so much more often than the American one?',
      a: 'Three reasons. It is far longer and contains administrative detail that elsewhere would sit in ordinary statute, so routine changes need an amendment. State reorganisation happens inside the constitutional text under Article 3. And most amendments need no state ratification at all, whereas the American procedure requires three-quarters of the states.',
    },
    {
      q: 'Do states have any real role in amending the Constitution?',
      a: 'A narrow one. They cannot initiate an amendment at all, and their consent is required only for the specific class of provisions listed in the proviso to Article 368(2) — and then only from half of them, by simple majority, with no time limit. This is one of the strongest arguments that Indian federalism has a unitary bias.',
    },
    {
      q: 'Is the basic structure doctrine undemocratic?',
      a: 'That is the central criticism: an unelected court sets limits on an elected Parliament exercising a power the Constitution expressly grants, and the content of those limits is not written down. The defence is that an unlimited amending power would allow a temporary majority to replace the Constitution while formally amending it, and that in practice the doctrine has protected judicial review, free elections and federalism.',
    },
    {
      q: 'What is the difference between the 42nd and the 44th Amendments?',
      a: 'They are a pair, and the second largely undoes the first. The 42nd, enacted during the Emergency, expanded central and executive power, curtailed judicial review, extended the Lok Sabha term to six years and added the Preamble words and Fundamental Duties. The 44th, enacted afterwards, restored the five-year term, removed the right to property from Part III, narrowed the grounds for emergency and made Articles 20 and 21 non-suspendable.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'The running total of amendments, and any new amendment. The commencement date of the 106th Amendment on women\'s reservation is still open, since it is tied to a delimitation exercise following a census. Everything else — the three routes, the case sequence, the content of past amendments — is fixed.',
    },
    {
      q: 'How should I revise the amendment list?',
      a: 'By theme rather than by number. Group the reservation amendments together — 1st, 77th, 81st, 93rd, 103rd, 105th; the anti-defection pair — 52nd and 91st; the local government pair — 73rd and 74th; the Emergency pair — 42nd and 44th; and the taxation and institution amendments — 101st, 102nd. Grouped that way, the numbers stick to a story instead of floating free.',
    },
    {
      q: 'How many questions come from this topic?',
      a: 'Three to five in UPSC Prelims, three to four in SSC CGL Tier 1 where the "which amendment did what" format is near-universal, three to five in state PSC prelims, and three to four in CLAT and AILET, usually as passage-based questions on Kesavananda Bharati and its successors.',
    },
  ],

  related: [
    { label: 'Making of the Constitution', to: '/study-material/constitution/making-of-the-constitution/' },
    { label: 'Fundamental Rights & Duties', to: '/study-material/constitution/fundamental-rights/' },
    { label: 'Parliament & the Legislature', to: '/study-material/polity/parliament/' },
    { label: 'Judiciary & Federalism', to: '/study-material/polity/judiciary-federalism/' },
    { label: 'All Constitution', to: '/study-material/constitution/' },
  ],
}
