/**
 * Fundamental Rights, Directives and Duties —
 * /study-material/constitution/fundamental-rights/
 *
 * Parts III, IV and IVA in one page, because the three are examined against
 * each other far more often than separately. Article numbers are the anchor
 * throughout, and every amendment that changed a right is named.
 */
export default {
  subject: 'constitution',
  subjectName: 'Constitution',
  slug: 'fundamental-rights',
  title: 'Fundamental Rights & Duties',
  seoTitle: 'Fundamental Rights, DPSP and Duties | Articles 12–51A Notes & Practice',
  metaDescription:
    'Complete Fundamental Rights, Directive Principles and Fundamental Duties study material for UPSC, SSC and state exams — Articles 12 to 35, Part IV directives.',
  readMinutes: 26,
  lead: [
    'Part III is the most heavily examined block in the entire Constitution, and the reason is structural: it is the only part where a citizen can go straight to the Supreme Court, so almost every landmark case in Indian constitutional law arises from it.',
    'The Directive Principles in Part IV and the Duties in Part IVA are treated on the same page because questions constantly set them against each other — which is justiciable and which is not, which article sits in which Part, and what the courts have held when a directive and a right collide. Each right below is given with its article, its exceptions and the case that made it examinable.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '5–8 questions', note: 'The single densest block in polity. Often comparative between Parts III and IV.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–5 questions', note: 'Article numbers and which right is which — asked very directly.' },
    { exam: 'State PSC Prelims', count: '4–6 questions', note: 'Rights, directives and the amendments that changed them.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Basic recall — how many fundamental rights, which article covers untouchability.' },
    { exam: 'CLAT / AILET Legal Reasoning', count: '4–6 questions', note: 'Applied as principles to fact situations rather than asked as recall.' },
  ],

  contents: [
    { icon: 'doc', title: 'The State and Article 13', sub: 'Who the rights bind', href: '#state' },
    { icon: 'check', title: 'Right to Equality', sub: 'Articles 14 to 18', href: '#equality' },
    { icon: 'play', title: 'Right to Freedom', sub: 'Articles 19 to 22', href: '#freedom' },
    { icon: 'user', title: 'Exploitation and religion', sub: 'Articles 23 to 28', href: '#exploitation' },
    { icon: 'book', title: 'Minorities and remedies', sub: 'Articles 29 to 35', href: '#remedies' },
    { icon: 'target', title: 'Directive Principles', sub: 'Part IV, Articles 36 to 51', href: '#dpsp' },
    { icon: 'layers', title: 'Duties and the conflict', sub: 'Article 51A and the case law', href: '#duties' },
    { icon: 'chart', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'state',
      heading: 'The State and Article 13',
      eyebrow: 'Who the rights bind',
      intro:
        'Fundamental rights are, with two exceptions, claims against the state rather than against other citizens. So the first question in any rights problem is whether the body complained against is the "State" at all.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Article 12 — the definition of "State"',
              'The Government and Parliament of India, the Government and legislature of each state, all local authorities such as municipalities and panchayats, and "other authorities" within the territory of India or under the control of the Government of India. The courts have read "other authorities" to include statutory corporations and bodies that are financially, functionally and administratively dominated by government.',
            ],
            [
              'Rights enforceable against private persons',
              'Two. Article 17, which abolishes untouchability, and Article 23, which prohibits traffic in human beings and forced labour, operate against private individuals as well as the state. Article 15(2), on access to shops, restaurants and public places, also has horizontal effect.',
            ],
            [
              'Article 13 — the enforcement clause',
              'All pre-Constitution laws inconsistent with the fundamental rights are void to the extent of the inconsistency, and the state may not make any law that takes away or abridges those rights. Article 13(3) defines "law" broadly to include ordinances, orders, by-laws, rules, regulations, notifications and custom having the force of law.',
            ],
            [
              'Three doctrines under Article 13',
              'Severability confines the invalidity to the offending portion where the rest can stand alone. Eclipse holds that a pre-Constitution law inconsistent with a right is not dead but overshadowed, and revives if the inconsistency is removed by amendment. Waiver holds that a person cannot give up a fundamental right, because the rights exist in the public interest and not merely for individual benefit.',
            ],
            [
              'Is a constitutional amendment a "law" under Article 13?',
              'This was the whole battleground of the amendment cases. Golaknath in 1967 held that it was, so that an amendment could not abridge fundamental rights. The 24th Amendment reversed that by adding Article 13(4), and Kesavananda Bharati in 1973 upheld the amendment but subjected the power to the basic structure doctrine.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Six categories, not seven',
          text:
            'The Constitution originally guaranteed seven categories of fundamental right. The right to property, in Articles 19(1)(f) and 31, was removed by the 44th Amendment in 1978 and re-enacted as Article 300A, an ordinary constitutional right enforceable in a High Court but not under Article 32. There are therefore six categories today, and the question "how many fundamental rights" is really testing whether you know that amendment.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'equality',
      heading: 'Right to Equality',
      eyebrow: 'Articles 14 to 18',
      intro:
        'Five articles, of which two — 15 and 16 — carry almost all the reservation jurisprudence and almost all the amendments.',
      blocks: [
        {
          type: 'table',
          caption: 'Articles 14 to 18',
          head: ['Article', 'Guarantee', 'Detail and exceptions'],
          rows: [
            ['Article 14', 'Equality before the law and equal protection of the laws', 'The first phrase is British and negative — no one is above the law. The second is American and positive — like should be treated alike. Reasonable classification is permitted if it rests on an intelligible differentia with a rational nexus to the object of the law.'],
            ['Article 15', 'No discrimination on grounds of religion, race, caste, sex or place of birth', 'Available to citizens only. Clause (3) permits special provision for women and children; (4) for socially and educationally backward classes and SCs and STs; (5) for their admission to educational institutions; (6) for economically weaker sections.'],
            ['Article 16', 'Equality of opportunity in public employment', 'Clause (4) permits reservation in appointments; (4A) in promotions with consequential seniority; (4B) for carrying forward backlog vacancies; (6) for economically weaker sections.'],
            ['Article 17', 'Abolition of untouchability', 'Its practice in any form is forbidden and made a punishable offence. Enforced through the Protection of Civil Rights Act and the SC and ST (Prevention of Atrocities) Act. Operates against private persons.'],
            ['Article 18', 'Abolition of titles', 'The state may not confer any title except a military or academic distinction, and citizens may not accept a title from a foreign state. National awards such as the Bharat Ratna and the Padma awards were upheld in 1996 but may not be used as a prefix or suffix to a name.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The amendments to watch',
              'The First Amendment of 1951 added Article 15(4) after the Champakam Dorairajan case. The 77th Amendment of 1995 added 16(4A) on promotions and the 81st added 16(4B). The 93rd Amendment of 2005 added 15(5) on private educational institutions. The 103rd Amendment of 2019 added 15(6) and 16(6), providing up to ten per cent reservation for economically weaker sections.',
            ],
            [
              'The fifty per cent rule',
              'In Indra Sawhney, 1992 — the Mandal case — the Supreme Court upheld reservation for other backward classes, introduced the concept of the creamy layer for OBCs, and held that reservations should ordinarily not exceed fifty per cent. The EWS quota under the 103rd Amendment was upheld in 2022 as an exception outside that ceiling.',
            ],
            [
              'Reasonable classification',
              'Article 14 forbids class legislation but permits reasonable classification. A law survives if the group it singles out is defined by an intelligible differentia, and if that differentia bears a rational relation to what the law is trying to achieve. This two-part test is the most frequently applied rule in Indian constitutional litigation.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'freedom',
      heading: 'Right to Freedom',
      eyebrow: 'Articles 19 to 22',
      intro:
        'Article 19 is the best-known article in the Constitution, but Articles 20, 21 and 22 carry more litigation, and Article 21 has grown further than any other provision.',
      blocks: [
        {
          type: 'table',
          caption: 'The six freedoms of Article 19(1)',
          head: ['Freedom', 'Sub-clause', 'Grounds on which it may be restricted'],
          rows: [
            ['Speech and expression', '19(1)(a)', 'Sovereignty and integrity of India, security of the state, friendly relations with foreign states, public order, decency or morality, contempt of court, defamation, and incitement to an offence.'],
            ['Assembly, peaceably and without arms', '19(1)(b)', 'Sovereignty and integrity of India, and public order.'],
            ['Association or unions', '19(1)(c)', 'Sovereignty and integrity of India, public order and morality. Cooperative societies were added by the 97th Amendment.'],
            ['Movement throughout the territory of India', '19(1)(d)', 'The interests of the general public, and the protection of the interests of any Scheduled Tribe.'],
            ['Residence and settlement in any part of India', '19(1)(e)', 'The same two grounds as freedom of movement.'],
            ['Practice of any profession, or any occupation, trade or business', '19(1)(g)', 'The interests of the general public; the state may also prescribe professional qualifications or carry on a trade itself to the exclusion of citizens.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The missing sub-clause',
              'There is no 19(1)(f) today. It contained the right to acquire, hold and dispose of property, and was omitted by the 44th Amendment in 1978 — which is why the six freedoms run (a), (b), (c), (d), (e), (g).',
            ],
            [
              'Article 20 — protection in respect of conviction',
              'Three guarantees. No ex post facto criminal law, so no one may be convicted for an act that was not an offence when committed, nor given a heavier penalty than was then applicable. No double jeopardy — no prosecution and punishment for the same offence more than once. No self-incrimination — no accused may be compelled to be a witness against himself. Article 20 cannot be suspended even during an emergency.',
            ],
            [
              'Article 21 — life and personal liberty',
              'No person shall be deprived of life or personal liberty except according to procedure established by law. In A. K. Gopalan, 1950, the court read this narrowly. In Maneka Gandhi, 1978, it held that the procedure must be fair, just and reasonable and not arbitrary — importing due process in substance. From that reading the court has derived the rights to livelihood, health, clean environment, shelter, education, privacy (Puttaswamy, 2017), a speedy trial, legal aid and dignity.',
            ],
            [
              'Article 21A — education',
              'Added by the 86th Amendment in 2002: free and compulsory education for all children aged six to fourteen, implemented through the Right of Children to Free and Compulsory Education Act, 2009. The same amendment recast Article 45 to cover early childhood care below six, and added the eleventh Fundamental Duty.',
            ],
            [
              'Article 22 — protection against arrest',
              'For ordinary arrest: the right to be informed of the grounds, to consult and be defended by a legal practitioner of choice, and to be produced before a magistrate within twenty-four hours. For preventive detention, these do not apply: a person may be detained for up to three months without reference to an advisory board, and the article prescribes the safeguards that do apply. Preventive detention in peacetime is an unusual feature of the Indian Constitution.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'exploitation',
      heading: 'Right against exploitation and freedom of religion',
      eyebrow: 'Articles 23 to 28',
      intro:
        'Six articles that are short, precise and asked as straightforward pairings of article number to content.',
      blocks: [
        {
          type: 'table',
          caption: 'Articles 23 to 28',
          head: ['Article', 'What it guarantees', 'Qualification'],
          rows: [
            ['Article 23', 'Prohibition of traffic in human beings, begar and other forms of forced labour', 'The state may impose compulsory service for public purposes, provided it does not discriminate on grounds of religion, race, caste or class.'],
            ['Article 24', 'No child below fourteen may be employed in a factory, mine or other hazardous employment', 'It does not, on its own terms, prohibit non-hazardous employment; that is covered by legislation.'],
            ['Article 25', 'Freedom of conscience and the right freely to profess, practise and propagate religion', 'Subject to public order, morality, health and the other provisions of Part III. The state may regulate secular activity associated with religion and provide for social welfare and reform.'],
            ['Article 26', 'Freedom of every religious denomination to manage its own religious affairs', 'To establish and maintain institutions, own and acquire property, and administer it in accordance with law.'],
            ['Article 27', 'No person may be compelled to pay a tax whose proceeds are specifically appropriated to promote any particular religion', 'A fee for regulating a religious institution is distinguishable from a tax, and is permitted.'],
            ['Article 28', 'No religious instruction in an educational institution wholly maintained out of state funds', 'Institutions administered by the state under an endowment requiring religious instruction are excepted; in aided institutions attendance may not be compulsory.'],
          ],
        },
        {
          type: 'note',
          title: 'The word "propagate"',
          text:
            'Article 25 protects the right to propagate one\'s religion, which was debated at length in the Constituent Assembly. The Supreme Court held in Rev. Stainislaus, 1977, that the right to propagate does not include a right to convert another person, since that would impinge on the other\'s own freedom of conscience. This distinction is examined as a point of law rather than of opinion.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'remedies',
      heading: 'Minorities and remedies',
      eyebrow: 'Articles 29 to 35',
      intro:
        'The last block of Part III, containing the cultural and educational rights of minorities and the remedy that makes the whole Part effective.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Article 29',
              'Any section of citizens having a distinct language, script or culture has the right to conserve it, and no citizen may be denied admission to a state-maintained or state-aided educational institution on grounds of religion, race, caste or language. Note that Article 29(1) speaks of "any section of citizens" and so is not confined to minorities, while 29(2) is an individual right.',
            ],
            [
              'Article 30',
              'All minorities, whether based on religion or language, have the right to establish and administer educational institutions of their choice, and the state may not discriminate against them in granting aid. This right is confined to minorities, which is what distinguishes it from Article 29.',
            ],
            [
              'Article 31 and property',
              'Article 31, the right to property, was repealed by the 44th Amendment in 1978. Property is now protected by Article 300A, which provides that no person shall be deprived of property save by authority of law. It is a constitutional right but not a fundamental right, so Article 32 is not available for it.',
            ],
            [
              'Article 32 — the right to constitutional remedies',
              'The right to move the Supreme Court by appropriate proceedings for the enforcement of the rights in Part III, and the court\'s power to issue directions, orders and writs. Ambedkar called it the heart and soul of the Constitution because it makes every other right in the Part enforceable. It is itself a fundamental right, and it may be suspended only as provided by the Constitution — never in respect of Articles 20 and 21, after the 44th Amendment.',
            ],
            [
              'Articles 33, 34 and 35',
              'Article 33 empowers Parliament to restrict the fundamental rights of members of the armed forces, paramilitary forces, police and intelligence agencies. Article 34 permits restriction while martial law is in force in any area. Article 35 reserves to Parliament alone the power to make laws on certain matters within Part III, so that the position is uniform across the country.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'dpsp',
      heading: 'Directive Principles of State Policy',
      eyebrow: 'Part IV, Articles 36 to 51',
      intro:
        'Article 37 states the essential point: these principles are not enforceable by any court, but they are nevertheless fundamental in the governance of the country and it is the duty of the state to apply them in making laws. Non-justiciable does not mean unimportant.',
      blocks: [
        {
          type: 'table',
          caption: 'The three conventional groupings',
          head: ['Group', 'Character', 'Principal articles'],
          rows: [
            ['Socialistic', 'Directed at a welfare state and the reduction of inequality', 'Article 38 on social order and minimising inequalities; 39 on adequate means of livelihood, distribution of material resources, equal pay for equal work and protection of children; 39A on equal justice and free legal aid; 41 on the right to work, education and public assistance; 42 on humane conditions of work and maternity relief; 43 on a living wage; 43A on workers\' participation in management; 47 on nutrition and public health.'],
            ['Gandhian', 'Reflecting the programme of the national movement', 'Article 40 on village panchayats; 43 on cottage industries; 43B on cooperative societies; 46 on promoting the interests of weaker sections, particularly SCs and STs; 47 on prohibiting intoxicating drinks and drugs; 48 on organising agriculture and animal husbandry and prohibiting the slaughter of cows and other cattle.'],
            ['Liberal-intellectual', 'Reflecting a liberal internationalist outlook', 'Article 44 on a uniform civil code; 45 on early childhood care and education below six; 48 on modern and scientific agriculture; 48A on protection of the environment, forests and wildlife; 49 on protection of monuments; 50 on separation of the judiciary from the executive; 51 on the promotion of international peace and respect for international law.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Directives added by amendment',
              'The 42nd Amendment of 1976 added Article 39A on free legal aid, 43A on workers\' participation in management, and 48A on the environment. The 44th Amendment added Article 38(2) on minimising inequalities in income, status, facilities and opportunities. The 86th Amendment of 2002 recast Article 45. The 97th Amendment of 2011 added Article 43B on cooperative societies.',
            ],
            [
              'Directives implemented',
              'Article 40 was implemented by the 73rd Amendment; Article 39A by the Legal Services Authorities Act; Article 47 by prohibition policies in several states; Article 48A by the environmental statutes of the 1980s; Article 50 by the separation of the judiciary in the Criminal Procedure Code; and Article 45 by the 86th Amendment and the Right to Education Act. Article 44, the uniform civil code, remains the most-discussed unimplemented directive.',
            ],
            [
              'Directives outside Part IV',
              'Three exist: Article 335 on the claims of Scheduled Castes and Tribes to services and posts, Article 350A on instruction in the mother tongue at the primary stage, and Article 351 on the development of Hindi. They are non-justiciable directives placed elsewhere in the Constitution, and their location is itself a question.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'duties',
      heading: 'Duties and the conflict',
      eyebrow: 'Article 51A and the case law',
      intro:
        'Part IVA was added in 1976, and the long argument over whether a right or a directive prevails was settled in stages between 1951 and 1980. Both are examined as sequences.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Fundamental Duties (Article 51A)',
              'Ten duties were inserted by the 42nd Amendment in 1976, on the recommendation of the Swaran Singh Committee: to abide by the Constitution and respect its ideals, the National Flag and the National Anthem; to cherish the ideals of the freedom struggle; to uphold the sovereignty, unity and integrity of India; to defend the country and render national service when called upon; to promote harmony and renounce practices derogatory to the dignity of women; to value and preserve the composite culture; to protect the natural environment; to develop scientific temper, humanism and the spirit of inquiry and reform; to safeguard public property and abjure violence; and to strive towards excellence in all spheres.',
            ],
            [
              'The eleventh duty',
              'Added by the 86th Amendment in 2002: for a parent or guardian to provide opportunities for education to a child or ward between the ages of six and fourteen. This is the counterpart of Article 21A, and it is the most frequently asked single fact about Part IVA.',
            ],
            [
              'Duties are not enforceable directly',
              'There is no provision for their enforcement, and no legal sanction attaches to a breach. Parliament may, however, legislate to enforce a duty, and it has done so — the Prevention of Insults to National Honour Act being an example. The Verma Committee of 1999 examined the operationalisation of the duties.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Rights versus directives — how the conflict was settled',
          head: ['Case or amendment', 'Year', 'What was held or done'],
          rows: [
            ['Champakam Dorairajan', '1951', 'In a conflict, the Fundamental Rights prevail; the Directive Principles must yield. Parliament responded with the First Amendment.'],
            ['25th Amendment', '1971', 'Inserted Article 31C, protecting laws made to implement the directives in Article 39(b) and (c) from challenge under Articles 14 and 19.'],
            ['Kesavananda Bharati', '1973', 'Upheld Article 31C but struck down the clause that had barred any court from inquiring whether such a law in fact gave effect to those directives.'],
            ['42nd Amendment', '1976', 'Extended the protection of Article 31C to laws implementing any of the Directive Principles, not just Article 39(b) and (c).'],
            ['Minerva Mills', '1980', 'Struck down that extension, holding that the balance between Parts III and IV is itself part of the basic structure. The narrower Article 31C survives.'],
          ],
        },
        {
          type: 'note',
          title: 'How to answer the comparison question',
          text:
            'Fundamental Rights are justiciable, negative in the main, aimed at establishing political democracy, and enforceable against the state under Article 32. Directive Principles are non-justiciable, positive in character, aimed at establishing social and economic democracy, and require legislation to become operative. Both are described by Granville Austin as the conscience of the Constitution, and Minerva Mills held that neither may be sacrificed to the other.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'How many fundamental rights does the Constitution guarantee today, and why is the number disputed?',
      steps: [
        'Seven categories were originally guaranteed, including the right to property in Articles 19(1)(f) and 31.',
        'The 44th Amendment of 1978 removed the right to property from Part III.',
        'It survives as Article 300A, a constitutional but not fundamental right, so there are six categories today.',
      ],
      answer: 'Six — the seventh, the right to property, was removed in 1978.',
    },
    {
      q: 'Which fundamental rights can never be suspended, even during a national emergency?',
      steps: [
        'Article 359 allows the President to suspend the right to move a court for the enforcement of fundamental rights during an emergency.',
        'The 44th Amendment excluded Articles 20 and 21 from that power.',
        'Article 20 protects against ex post facto laws, double jeopardy and self-incrimination; Article 21 protects life and personal liberty.',
      ],
      answer: 'Articles 20 and 21, following the 44th Amendment of 1978.',
    },
    {
      q: 'A statute makes an act punishable and applies the punishment to conduct that occurred before it was passed. Which article is violated?',
      steps: [
        'The complaint is about retrospective criminal liability, not about arbitrariness or discrimination.',
        'Article 20(1) forbids conviction for an act that was not an offence when it was committed, and forbids a penalty greater than that applicable at the time.',
        'Article 14 and Article 21 might also be argued, but the specific provision is Article 20(1).',
      ],
      answer: 'Article 20(1) — the prohibition on ex post facto criminal law.',
    },
    {
      q: 'What did Maneka Gandhi change about Article 21?',
      steps: [
        'In A. K. Gopalan, 1950, the court had read "procedure established by law" literally: any procedure laid down by a valid statute sufficed.',
        'In Maneka Gandhi, 1978, the court held that the procedure must be fair, just and reasonable, and not fanciful, oppressive or arbitrary.',
        'It also held that Articles 14, 19 and 21 must be read together, so a law depriving liberty must satisfy all three.',
      ],
      answer: 'It read fairness into "procedure established by law", bringing the article close to due process.',
    },
    {
      q: 'Which two fundamental rights are enforceable against private individuals?',
      steps: [
        'Fundamental rights generally bind only the State as defined in Article 12.',
        'Article 17 abolishes untouchability and forbids its practice "in any form", which reaches private conduct.',
        'Article 23 prohibits traffic in human beings and forced labour, which is also directed at private exploitation.',
      ],
      answer: 'Articles 17 and 23 — with Article 15(2) on access to public places also operating horizontally.',
    },
    {
      q: 'Trace the settlement of the conflict between Fundamental Rights and Directive Principles.',
      steps: [
        'Champakam Dorairajan in 1951 held that rights prevail over directives; the First Amendment followed.',
        'The 25th Amendment inserted Article 31C; Kesavananda Bharati upheld it in part in 1973; the 42nd Amendment then extended it to all directives.',
        'Minerva Mills in 1980 struck down that extension, holding the balance between Parts III and IV to be part of the basic structure.',
      ],
      answer: 'Neither prevails absolutely — Minerva Mills made the balance between them part of the basic structure.',
    },
    {
      q: 'Which amendment added the eleventh Fundamental Duty, and what is it?',
      steps: [
        'Ten duties were inserted by the 42nd Amendment in 1976 on the Swaran Singh Committee\'s recommendation.',
        'The 86th Amendment of 2002 added one more.',
        'It requires a parent or guardian to provide opportunities for education to a child or ward between six and fourteen — the counterpart of Article 21A, added by the same amendment.',
      ],
      answer: 'The 86th Amendment, 2002 — the duty to provide educational opportunities to a child aged six to fourteen.',
    },
    {
      q: 'What is the difference between Article 29 and Article 30?',
      steps: [
        'Article 29(1) gives any section of citizens with a distinct language, script or culture the right to conserve it — it is not limited to minorities.',
        'Article 29(2) is an individual right against denial of admission to a state-maintained or aided institution on grounds of religion, race, caste or language.',
        'Article 30 is confined to minorities, religious or linguistic, and gives them the right to establish and administer educational institutions of their choice.',
      ],
      answer: 'Article 29 protects any section of citizens; Article 30 is a minority right to run educational institutions.',
    },
  ],

  practice: [
    {
      q: 'The right to property was removed from the list of fundamental rights by the:',
      options: ['42nd Amendment', '1st Amendment', '25th Amendment', '44th Amendment'],
      answer: 3,
      explain: 'The 44th Amendment of 1978 repealed Article 31 and re-enacted the protection as Article 300A.',
    },
    {
      q: 'Which article abolishes untouchability?',
      options: ['Article 15', 'Article 16', 'Article 17', 'Article 23'],
      answer: 2,
      explain: 'Article 17 abolishes it and makes its practice in any form a punishable offence; it binds private persons too.',
    },
    {
      q: 'The right to constitutional remedies is contained in:',
      options: ['Article 32', 'Article 226', 'Article 21', 'Article 13'],
      answer: 0,
      explain: 'Ambedkar called Article 32 the heart and soul of the Constitution. Article 226 is the parallel High Court power.',
    },
    {
      q: 'Article 21A, providing for free and compulsory education, was inserted by the:',
      options: ['73rd Amendment', '86th Amendment', '93rd Amendment', '103rd Amendment'],
      answer: 1,
      explain: 'The 86th Amendment of 2002 also recast Article 45 and added the eleventh Fundamental Duty.',
    },
    {
      q: 'How many freedoms are guaranteed by Article 19 at present?',
      options: ['Five', 'Six', 'Seven', 'Eight'],
      answer: 1,
      explain: 'Seven originally; the right to property in 19(1)(f) was removed in 1978, so the sub-clauses now run (a) to (e) and (g).',
    },
    {
      q: 'The Directive Principles of State Policy are contained in which Part?',
      options: ['Part III', 'Part V', 'Part IVA', 'Part IV'],
      answer: 3,
      explain: 'Part IV, Articles 36 to 51. Part III is Fundamental Rights and Part IVA Fundamental Duties.',
    },
    {
      q: 'Fundamental Duties were added to the Constitution by the:',
      options: ['24th Amendment', '42nd Amendment', '44th Amendment', '52nd Amendment'],
      answer: 1,
      explain: 'Ten duties were added in 1976 on the recommendation of the Swaran Singh Committee; an eleventh followed in 2002.',
    },
    {
      q: 'The concept of the creamy layer for other backward classes was laid down in:',
      options: ['Kesavananda Bharati', 'Indra Sawhney', 'Minerva Mills', 'Maneka Gandhi'],
      answer: 1,
      explain: 'Indra Sawhney, 1992 — the Mandal case — also indicated that reservations should ordinarily not exceed fifty per cent.',
    },
    {
      q: 'Which directive principle requires the state to secure a uniform civil code?',
      options: ['Article 40', 'Article 44', 'Article 48', 'Article 50'],
      answer: 1,
      explain: 'Article 44. Article 40 is village panchayats, 48 agriculture and animal husbandry, and 50 separation of judiciary from executive.',
    },
    {
      q: 'Protection of the environment was added as a directive principle by the:',
      options: ['42nd Amendment', '44th Amendment', '73rd Amendment', '97th Amendment'],
      answer: 0,
      explain: 'Article 48A was added by the 42nd Amendment in 1976, along with Articles 39A and 43A.',
    },
    {
      q: 'Under Article 24, no child below which age may be employed in a hazardous occupation?',
      options: ['12 years', '14 years', '16 years', '18 years'],
      answer: 1,
      explain: 'Fourteen years — matching the upper age in Article 21A on free and compulsory education.',
    },
    {
      q: 'The case that held that the balance between Fundamental Rights and Directive Principles is part of the basic structure is:',
      options: ['Golaknath', 'Minerva Mills', 'Champakam Dorairajan', 'S. R. Bommai'],
      answer: 1,
      explain: 'Minerva Mills, 1980, struck down the 42nd Amendment\'s extension of Article 31C to all directive principles.',
    },
    {
      q: 'A person arrested must be produced before a magistrate within:',
      options: ['12 hours', '24 hours', '48 hours', '72 hours'],
      answer: 1,
      explain: 'Article 22(2), excluding the time necessary for the journey. The safeguard does not apply to preventive detention.',
    },
    {
      q: 'Reservation for economically weaker sections was introduced by the:',
      options: ['93rd Amendment', '101st Amendment', '103rd Amendment', '105th Amendment'],
      answer: 2,
      explain: 'The 103rd Amendment of 2019 inserted Articles 15(6) and 16(6), providing up to ten per cent reservation.',
    },
    {
      q: 'The right to privacy was recognised as a fundamental right in:',
      options: ['Maneka Gandhi', 'Puttaswamy', 'Vishaka', 'Olga Tellis'],
      answer: 1,
      explain: 'Justice K. S. Puttaswamy v. Union of India, 2017, held privacy to be intrinsic to Article 21.',
    },
    {
      q: 'Which of the following is NOT a Fundamental Duty under Article 51A?',
      options: ['To develop scientific temper', 'To pay taxes honestly', 'To protect the natural environment', 'To safeguard public property'],
      answer: 1,
      explain: 'Paying taxes was recommended by the Swaran Singh Committee but was not included in Article 51A.',
    },
  ],

  faqs: [
    {
      q: 'Why are Directive Principles not enforceable?',
      a: 'Because they call for positive action requiring money, administrative capacity and political choice, and the framers took the view that a court cannot order a state to build hospitals it cannot afford. Article 37 says so directly: they are not enforceable by any court, but are nevertheless fundamental in governance, and it is the duty of the state to apply them in making laws.',
    },
    {
      q: 'How can a right be fundamental if it can be restricted?',
      a: 'Because "fundamental" describes the status of the right — entrenched, enforceable directly in the Supreme Court, and beyond ordinary legislative repeal — not its absoluteness. Article 19 itself lists the grounds on which each freedom may be restricted, and every restriction must be reasonable and traceable to one of the stated grounds. A restriction outside those grounds is void.',
    },
    {
      q: 'What is preventive detention and why is it in the Constitution?',
      a: 'Detention of a person to prevent an anticipated offence rather than to punish a past one. Article 22 permits it, and provides that a person may be detained for up to three months without reference to an advisory board. Its presence in a peacetime constitution is unusual and was contested in the Assembly; the framers accepted it against a background of Partition violence and internal disorder.',
    },
    {
      q: 'Which rights are available to foreigners?',
      a: 'Those framed with the word "person" rather than "citizen" — Articles 14, 20, 21, 21A, 22, 23, 24 and 25 to 28. Those confined to citizens are Articles 15, 16, 19, 29 and 30. So a foreigner in India has equality before law, protection of life and personal liberty, and freedom of religion, but not the six freedoms of Article 19.',
    },
    {
      q: 'Has any Fundamental Duty ever been enforced?',
      a: 'Not directly, since Part IVA provides no mechanism. But Parliament may legislate to give effect to a duty, and has — the Prevention of Insults to National Honour Act is the standard example. Courts have also used the duties as an interpretive aid, particularly Article 51A(g) on the environment in decisions under Article 21.',
    },
    {
      q: 'What is the fifty per cent ceiling on reservations?',
      a: 'A judicially imposed limit from Indra Sawhney, 1992, holding that reservations should ordinarily not exceed half the available seats or posts, so that the rule of equality is not swallowed by the exception. The ten per cent quota for economically weaker sections under the 103rd Amendment was upheld in 2022 as operating outside that ceiling, so the position is more complex than a flat rule.',
    },
    {
      q: 'How has Article 21 grown so much?',
      a: 'Through Maneka Gandhi in 1978, which required any procedure depriving liberty to be fair, just and reasonable, and required Articles 14, 19 and 21 to be read together. From that reading the Supreme Court has derived rights to livelihood, shelter, health, a clean environment, education, legal aid, a speedy trial, dignity and privacy — each announced in a named case rather than written into the text.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'Very little in the text. What moves is the case law — a new judgment can add to the content of Article 21 or clarify the scope of a reservation provision, as happened with the EWS quota in 2022. The article numbers, the six categories and the classification of directives do not change.',
    },
    {
      q: 'Should I memorise the article numbers here?',
      a: 'Yes, for Part III. SSC and state papers ask directly which article covers untouchability, arrest, or constitutional remedies, and the option lists are made of neighbouring numbers. For Part IV, learn the ten or so directives that are actually asked — 39A, 40, 44, 45, 47, 48A, 50 — rather than all sixteen articles.',
    },
    {
      q: 'How many questions come from this block?',
      a: 'More than from any other single block in polity: five to eight in UPSC Prelims, three to five in SSC CGL Tier 1, four to six in state PSC prelims, and four to six in CLAT and AILET, where the rights are applied to fact situations rather than recalled.',
    },
  ],

  related: [
    { label: 'Making of the Constitution', to: '/study-material/constitution/making-of-the-constitution/' },
    { label: 'Amendments & Basic Structure', to: '/study-material/constitution/amendments/' },
    { label: 'Judiciary & Federalism', to: '/study-material/polity/judiciary-federalism/' },
    { label: 'Legal Reasoning', to: '/study-material/legal-reasoning/' },
    { label: 'All Constitution', to: '/study-material/constitution/' },
  ],
}
