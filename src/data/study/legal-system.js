/**
 * The Indian Legal System —
 * /study-material/legal-reasoning/legal-system/
 *
 * The institutional background that legal reasoning passages assume: where law
 * comes from, which court does what, the maxims and terms that recur, and the
 * landmark judgments that passages are built around.
 */
export default {
  subject: 'legal-reasoning',
  subjectName: 'Legal Reasoning',
  slug: 'legal-system',
  title: 'The Indian Legal System',
  seoTitle: 'Indian Legal System for CLAT | Courts, Maxims, Landmark Cases & Practice',
  metaDescription:
    'Complete study material on the Indian legal system for CLAT, AILET and law entrance exams — sources of law, the court hierarchy and jurisdictions.',
  readMinutes: 23,
  lead: [
    'Legal reasoning questions supply the principle you need, so this material is not strictly required to answer them. It is required to read them quickly. A passage discussing a Supreme Court judgment on preventive detention is very much harder if you must work out what preventive detention, a writ and a bench strength are while also applying the principle.',
    'This page therefore covers the vocabulary and the institutional map — sources of law, the court hierarchy, the maxims that recur, and the landmark cases that CLAT passages are repeatedly built around. It also flags the change that makes most older material out of date: India replaced its three principal criminal statutes in July 2024.',
  ],

  weightage: [
    { exam: 'CLAT UG Legal Reasoning', count: 'Background to the whole section', note: 'Not asked as recall, but assumed by every passage.' },
    { exam: 'AILET', count: 'Some direct questions', note: 'AILET has historically asked more legal knowledge directly than CLAT.' },
    { exam: 'CLAT and AILET General Knowledge', count: '2–4 questions', note: 'Landmark judgments and legal developments appear in the current affairs section.' },
    { exam: 'Judiciary preliminary examinations', count: 'A major section', note: 'Tested as substantive knowledge rather than as background.' },
    { exam: 'UPSC Prelims and Mains', count: '1–3 questions', note: 'Within polity — the courts, judicial review and landmark cases.' },
  ],

  contents: [
    { icon: 'book', title: 'Sources of law', sub: 'Where Indian law comes from', href: '#sources' },
    { icon: 'layers', title: 'The court hierarchy', sub: 'Who decides what', href: '#courts' },
    { icon: 'doc', title: 'The criminal codes', sub: 'The 2024 replacement', href: '#criminal' },
    { icon: 'refresh', title: 'Procedure in outline', sub: 'Civil and criminal', href: '#procedure' },
    { icon: 'search', title: 'Maxims and terms', sub: 'The vocabulary of the passages', href: '#maxims' },
    { icon: 'target', title: 'Landmark cases', sub: 'The judgments that recur', href: '#cases' },
    { icon: 'user', title: 'The legal profession', sub: 'Bar, aid and alternatives', href: '#profession' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'sources',
      heading: 'Sources of law',
      eyebrow: 'Where Indian law comes from',
      intro:
        'Five sources, in a rough hierarchy. Understanding which is which explains why a court can strike down a statute but not the Constitution, and why a High Court judgment binds some courts and not others.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Constitution',
              'The supreme law. Any statute, rule or executive action inconsistent with it is void to the extent of the inconsistency, which is what Article 13 provides for the fundamental rights. The Constitution itself can be amended under Article 368, but not so as to destroy its basic structure.',
            ],
            [
              'Legislation',
              'Statutes enacted by Parliament and the state legislatures, within the fields allotted by the Seventh Schedule. Delegated or subordinate legislation — rules, regulations, by-laws and notifications made under a statute by the executive — is also law, but it can be struck down as ultra vires if it exceeds what the parent statute authorised.',
            ],
            [
              'Judicial precedent',
              'Article 141 provides that the law declared by the Supreme Court is binding on all courts in India. A High Court binds the courts subordinate to it within its own territory, and is persuasive but not binding on other High Courts. Precedent is what makes the Indian system a common law system, in contrast with the civil law systems of continental Europe.',
            ],
            [
              'Ratio and obiter',
              'Only the ratio decidendi — the legal reasoning essential to the decision — is binding. Observations made in passing, obiter dicta, carry persuasive weight only, however eminent the judge. Distinguishing the two is a recurring subject of legal commentary and therefore of CLAT passages.',
            ],
            [
              'Custom and personal law',
              'A custom may have the force of law if it is ancient, certain, reasonable and continuously observed, and not opposed to public policy or express statute. Personal laws governing marriage, divorce, adoption, succession and maintenance differ by religious community, and their reform is the standing debate behind the uniform civil code directive in Article 44.',
            ],
            [
              'Common law and equity',
              'India inherited the English common law tradition, in which much of tort and contract developed through judicial decisions rather than statute. Equity supplied remedies where the common law was inadequate — injunctions and specific performance being the principal examples, now largely codified in the Specific Relief Act.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'courts',
      heading: 'The court hierarchy',
      eyebrow: 'Who decides what',
      intro:
        'India has a single integrated judiciary — one hierarchy from the district courts to the Supreme Court, with no separate system of state courts as in the United States.',
      blocks: [
        {
          type: 'table',
          caption: 'The courts and their jurisdictions',
          head: ['Court', 'Constitutional basis', 'Jurisdiction'],
          rows: [
            ['Supreme Court', 'Article 124; inaugurated 28 January 1950', 'Original under Article 131 for disputes between the Union and states; writ jurisdiction under Article 32 for fundamental rights; appellate under Articles 132 to 134; special leave under Article 136; advisory under Article 143. It is a court of record under Article 129 and its law binds all courts under Article 141.'],
            ['High Courts', 'Article 214', 'Writ jurisdiction under Article 226, which is wider than the Supreme Court\'s because it extends to any legal right and not only to fundamental rights. Superintendence over all courts and tribunals in its territory under Article 227.'],
            ['District courts', 'Articles 233 to 237', 'The principal courts of original civil and criminal jurisdiction in a district. The district judge is appointed by the Governor in consultation with the High Court.'],
            ['Subordinate courts', 'Under state legislation', 'Civil judges and judicial magistrates, with the courts of Judicial Magistrate First Class and Second Class exercising criminal jurisdiction below the Sessions Court.'],
            ['Tribunals', 'Articles 323A and 323B, added by the 42nd Amendment', 'Specialised bodies such as the Central Administrative Tribunal for service matters, the National Green Tribunal for environmental disputes, and the National Company Law Tribunal. Their decisions remain subject to High Court writ jurisdiction.'],
            ['Lok Adalats and Gram Nyayalayas', 'Legal Services Authorities Act, 1987; Gram Nyayalayas Act, 2008', 'Alternative forums for settlement by compromise and for village-level justice. A Lok Adalat award is deemed a decree of a civil court and no appeal lies against it.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The five writs',
              'Habeas corpus to produce a detained person and test the legality of the detention; mandamus to compel a public authority to perform a public duty; prohibition to stop a lower court exceeding its jurisdiction while proceedings continue; certiorari to quash an order already made; and quo warranto to question a person\'s right to hold a public office. Article 32 makes the remedy itself a fundamental right.',
            ],
            [
              'Public interest litigation',
              'A relaxation of the rule of standing, allowing any public-spirited person to approach the court on behalf of those unable to do so. It developed from the late 1970s and is associated with Justices P. N. Bhagwati and V. R. Krishna Iyer. Its virtue is access; its criticised cost is judicial involvement in policy.',
            ],
            [
              'Judicial review',
              'The power of the courts to examine the constitutionality of legislation and executive action. The phrase does not appear in the Constitution but the power flows from Articles 13, 32, 131 to 136, 226 and 246, and it is part of the basic structure.',
            ],
            [
              'Bench strengths',
              'A Division Bench is two judges; a Full Bench is three or more; a Constitution Bench is at least five, required under Article 145 for substantial questions of constitutional interpretation. Kesavananda Bharati was decided by a bench of thirteen, the largest ever constituted. Passages frequently mention bench strength, so the terms are worth knowing.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'criminal',
      heading: 'The criminal codes',
      eyebrow: 'The 2024 replacement',
      intro:
        'The single most important recent change in Indian law for exam purposes, and the one that makes most older preparation material out of date.',
      blocks: [
        {
          type: 'table',
          caption: 'The three new criminal laws',
          head: ['New law', 'Replaced', 'Subject'],
          rows: [
            ['Bharatiya Nyaya Sanhita', 'The Indian Penal Code, 1860', 'Substantive criminal law — what conduct is an offence and what punishment it attracts.'],
            ['Bharatiya Nagarik Suraksha Sanhita', 'The Code of Criminal Procedure, 1973', 'Criminal procedure — investigation, arrest, bail, trial and appeal.'],
            ['Bharatiya Sakshya Adhiniyam', 'The Indian Evidence Act, 1872', 'The law of evidence — what may be proved and how.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'When the change took effect',
              'The three new statutes came into force on 1 July 2024, replacing codes that had governed Indian criminal law for over a century and a half. Proceedings begun before that date continue under the old law, so both sets of provisions remain relevant in practice for some years.',
            ],
            [
              'What this means for preparation',
              'Any material referring to "Section 302 IPC" for murder or "Section 154 CrPC" for the first information report is using the superseded numbering. The concepts — murder, culpable homicide, the FIR, cognisable and non-cognisable offences, bailable and non-bailable — carry over, but the section numbers do not. Learn the concepts, and treat any specific section number as something to verify.',
            ],
            [
              'Concepts that carry over unchanged',
              'A cognisable offence is one in which the police may arrest without a warrant and begin investigation without a magistrate\'s order; a non-cognisable offence is not. A bailable offence gives the accused a right to bail; in a non-bailable offence bail is at the court\'s discretion. The first information report records the first information about a cognisable offence and sets the investigation in motion. These distinctions are asked as concepts and are unaffected by the change.',
            ],
            [
              'Mens rea and actus reus',
              'Criminal liability generally requires both a guilty act and a guilty mind — actus non facit reum nisi mens sit rea. Strict liability offences are the exception, where the act alone suffices. Legal reasoning passages set on criminal principles almost always turn on whether the required mental element is established on the facts.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'procedure',
      heading: 'Procedure in outline',
      eyebrow: 'Civil and criminal',
      intro:
        'Enough procedure to follow a passage, and no more. The distinction between the two systems is what matters.',
      blocks: [
        {
          type: 'table',
          caption: 'Civil and criminal proceedings compared',
          head: ['Feature', 'Civil', 'Criminal'],
          rows: [
            ['Purpose', 'To enforce a private right or remedy a private wrong', 'To punish conduct treated as a wrong against society'],
            ['Parties', 'Plaintiff against defendant', 'The State, or a complainant, against the accused'],
            ['Standard of proof', 'On the balance of probabilities — more likely than not', 'Beyond reasonable doubt, a much higher standard'],
            ['Outcome', 'Damages, injunction, specific performance, declaration', 'Conviction and sentence, or acquittal'],
            ['Governing procedure', 'The Code of Civil Procedure, 1908', 'The Bharatiya Nagarik Suraksha Sanhita, replacing the Code of Criminal Procedure, 1973'],
            ['Effect of the same act', 'The same conduct can give rise to both — a road accident may be a tort and an offence, tried separately', 'Acquittal in the criminal case does not bar the civil claim, because the standards of proof differ'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Principles of natural justice',
              'Two rules govern any body deciding a dispute. Audi alteram partem — hear the other side — requires that a person affected be given notice and an opportunity to be heard. Nemo judex in causa sua — no one should be a judge in his own cause — requires the absence of bias. Passages on administrative action almost always turn on one of these two, and they apply even where a statute is silent.',
            ],
            [
              'Res judicata and limitation',
              'Res judicata prevents a matter already decided between the same parties from being litigated again. The Limitation Act, 1963, prescribes periods within which a suit must be brought; a claim filed after the period is time-barred however good it is on the merits.',
            ],
            [
              'Alternative dispute resolution',
              'Arbitration, in which the parties appoint a tribunal whose award is binding, governed by the Arbitration and Conciliation Act, 1996. Mediation, in which a neutral third party helps the parties reach their own settlement, given a statutory framework by the Mediation Act, 2023. Conciliation and Lok Adalats complete the picture, and Section 89 of the Civil Procedure Code directs courts to explore these routes.',
            ],
            [
              'Free legal aid',
              'Article 39A directs the state to provide free legal aid so that opportunities for justice are not denied by economic disability. The Legal Services Authorities Act, 1987, created the National Legal Services Authority with state and district authorities below it, and Lok Adalats operate under the same framework.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'maxims',
      heading: 'Maxims and terms',
      eyebrow: 'The vocabulary of the passages',
      intro:
        'Latin maxims and legal terms appear constantly in legal writing and therefore in the passages. Learning them is a vocabulary exercise, not a legal one.',
      blocks: [
        {
          type: 'table',
          caption: 'Maxims that recur',
          head: ['Maxim', 'Meaning', 'Where it appears'],
          rows: [
            ['Audi alteram partem', 'Hear the other side', 'Natural justice; any decision affecting a person requires notice and a hearing.'],
            ['Nemo judex in causa sua', 'No one should judge his own cause', 'The rule against bias, the second limb of natural justice.'],
            ['Actus non facit reum nisi mens sit rea', 'An act does not make a person guilty unless the mind is also guilty', 'The requirement of a mental element in criminal law.'],
            ['Ubi jus ibi remedium', 'Where there is a right there is a remedy', 'The foundation of tort law.'],
            ['Volenti non fit injuria', 'To one who consents no injury is done', 'A defence in tort where the plaintiff accepted the risk.'],
            ['Res ipsa loquitur', 'The thing speaks for itself', 'Negligence inferred from the accident itself, shifting the burden to the defendant.'],
            ['Caveat emptor', 'Let the buyer beware', 'The older rule of sale, now heavily qualified by consumer protection law.'],
            ['Ignorantia juris non excusat', 'Ignorance of the law is no excuse', 'Criminal liability; a mistake of fact may excuse, a mistake of law does not.'],
            ['Doli incapax', 'Incapable of crime', 'The presumption that a very young child cannot form criminal intent.'],
            ['Stare decisis', 'To stand by decided matters', 'The doctrine of precedent.'],
            ['Ratio decidendi and obiter dicta', 'The reason for the decision; things said by the way', 'Only the first binds; the second persuades.'],
            ['Ultra vires', 'Beyond the powers', 'Action exceeding the authority conferred, whether by a statute or by a company\'s constitution.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Procedural terms',
              'Locus standi is the right to bring an action, relaxed in public interest litigation. Amicus curiae is a friend of the court, appointed to assist where a party is unrepresented or an issue needs independent argument. Suo motu means on the court\'s own initiative. Ex parte means in the absence of one party. Sub judice means pending before a court. In camera means in private, excluding the public.',
            ],
            [
              'Evidential and general terms',
              'Prima facie means at first sight, or on the face of it — enough to proceed unless rebutted. Bona fide means in good faith and mala fide in bad faith. De jure means by law and de facto in fact. Per incuriam describes a decision given in ignorance of a binding authority, which for that reason does not bind. Pro bono means work done without fee, and sine die means adjourned without a fixed date.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'cases',
      heading: 'Landmark cases',
      eyebrow: 'The judgments that recur',
      intro:
        'CLAT passages are frequently built around commentary on these decisions, and they appear in the general knowledge section as well. Learn what each decided in a sentence.',
      blocks: [
        {
          type: 'table',
          caption: 'The cases to know',
          head: ['Case', 'Year', 'What it decided'],
          rows: [
            ['Kesavananda Bharati v. State of Kerala', '1973', 'Parliament may amend any part of the Constitution but may not damage or destroy its basic structure. Decided by a bench of thirteen, seven to six.'],
            ['Maneka Gandhi v. Union of India', '1978', 'The procedure depriving a person of life or liberty under Article 21 must be fair, just and reasonable, and Articles 14, 19 and 21 must be read together.'],
            ['Minerva Mills v. Union of India', '1980', 'Struck down parts of the 42nd Amendment; the balance between Fundamental Rights and Directive Principles is itself part of the basic structure.'],
            ['Indra Sawhney v. Union of India', '1992', 'Upheld reservation for other backward classes, introduced the creamy layer concept, and indicated that reservations should ordinarily not exceed fifty per cent.'],
            ['S. R. Bommai v. Union of India', '1994', 'A proclamation of President\'s rule under Article 356 is subject to judicial review, and the floor of the House is the test of majority.'],
            ['Vishaka v. State of Rajasthan', '1997', 'Laid down binding guidelines against sexual harassment at the workplace in the absence of legislation, later given statutory form in 2013.'],
            ['Shreya Singhal v. Union of India', '2015', 'Struck down Section 66A of the Information Technology Act as vague and overbroad, violating freedom of speech.'],
            ['K. S. Puttaswamy v. Union of India', '2017', 'Recognised the right to privacy as a fundamental right intrinsic to Article 21.'],
            ['Navtej Singh Johar v. Union of India', '2018', 'Read down Section 377 of the Indian Penal Code so far as it criminalised consensual same-sex relations between adults.'],
            ['Olga Tellis v. Bombay Municipal Corporation', '1985', 'The right to livelihood is part of the right to life under Article 21.'],
            ['ADM Jabalpur v. Shivkant Shukla', '1976', 'The Habeas Corpus case, holding that the right to move a court could be suspended during an emergency. Its reasoning has since been expressly disapproved.'],
            ['M. C. Mehta cases', 'From the 1980s', 'A series of environmental judgments establishing absolute liability for hazardous industry and the polluter pays and precautionary principles in Indian law.'],
          ],
        },
        {
          type: 'note',
          title: 'How cases are asked',
          text:
            'Rarely as bare recall. A CLAT passage will discuss a principle drawn from a judgment and ask you to apply it to new facts, so what matters is knowing what the case established rather than its citation or the names of the judges. In the general knowledge section, by contrast, a recent judgment may be asked directly, which is a reason to follow legal news through the year.',
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'profession',
      heading: 'The legal profession',
      eyebrow: 'Bar, aid and alternatives',
      intro:
        'A short institutional section, relevant both to the exam and to the career the exam leads to.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Regulation of the profession',
              'The Advocates Act, 1961, governs legal practice and created the Bar Council of India as the apex regulator, with State Bar Councils below it. The Bar Council prescribes standards of professional conduct, recognises law degrees and conducts the All India Bar Examination, which a law graduate must pass to obtain a certificate of practice.',
            ],
            [
              'Law officers of the government',
              'The Attorney General for India, appointed under Article 76, is the first law officer of the government, must be qualified to be a Supreme Court judge, and has a right of audience in all courts and a right to speak in either House of Parliament without a vote. The Solicitor General and Additional Solicitors General assist and are statutory rather than constitutional offices. Each state has an Advocate General under Article 165.',
            ],
            [
              'Senior advocates',
              'The Supreme Court and the High Courts may designate an advocate as a senior advocate on the basis of ability and standing. A senior advocate may not accept briefs directly from clients or draft pleadings, and appears with an advocate-on-record or an instructing advocate.',
            ],
            [
              'Legal education',
              'The five-year integrated law degree was introduced at the National Law School of India University, Bengaluru, in 1987, and the national law universities that followed are the institutions CLAT admits to. The Bar Council of India regulates legal education alongside the universities.',
            ],
            [
              'Access to justice',
              'Article 39A directs the state to secure equal justice and free legal aid. The Legal Services Authorities Act, 1987, gives effect to it through NALSA and the state and district legal services authorities, which provide free legal services to specified categories including women, children, members of Scheduled Castes and Tribes, victims of trafficking and persons in custody. Lok Adalats settle disputes by compromise, and their awards are final and non-appealable.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Why is a High Court\'s writ jurisdiction wider than the Supreme Court\'s?',
      steps: [
        'Article 32 allows the Supreme Court to issue writs only for the enforcement of fundamental rights.',
        'Article 226 allows a High Court to issue writs for the enforcement of fundamental rights "and for any other purpose".',
        'That phrase brings in ordinary legal rights, so a High Court can act in cases the Supreme Court cannot entertain under Article 32.',
      ],
      answer: 'Because Article 226 covers any legal right, while Article 32 is confined to fundamental rights.',
    },
    {
      q: 'A judgment contains extensive observations on a question that did not arise for decision. Do they bind lower courts?',
      steps: [
        'Only the ratio decidendi — the reasoning essential to the decision — is binding under the doctrine of precedent.',
        'Observations on a question that did not arise are obiter dicta, made by the way.',
        'They carry persuasive weight, sometimes considerable weight if from a large bench, but they do not bind.',
      ],
      answer: 'No — they are obiter dicta and persuasive only.',
    },
    {
      q: 'Which statutes replaced the Indian Penal Code, the Criminal Procedure Code and the Evidence Act, and when?',
      steps: [
        'All three were replaced together as part of a single reform.',
        'The Bharatiya Nyaya Sanhita replaced the Indian Penal Code of 1860; the Bharatiya Nagarik Suraksha Sanhita replaced the Code of Criminal Procedure of 1973; and the Bharatiya Sakshya Adhiniyam replaced the Indian Evidence Act of 1872.',
        'They came into force on 1 July 2024, so any material citing IPC or CrPC section numbers is using the superseded numbering.',
      ],
      answer: 'The three Bharatiya codes, with effect from 1 July 2024.',
    },
    {
      q: 'A person is acquitted in a criminal trial arising from a road accident. Can the injured party still sue for damages?',
      steps: [
        'The same conduct can give rise to both criminal liability and civil liability, and the two are tried separately.',
        'The standards of proof differ: a criminal conviction requires proof beyond reasonable doubt, while a civil claim needs only the balance of probabilities.',
        'So conduct that could not be proved to the criminal standard may still be proved to the civil one, and the acquittal does not bar the claim.',
      ],
      answer: 'Yes — the standards of proof differ, so acquittal does not bar a civil suit.',
    },
    {
      q: 'What are the two rules of natural justice, and when do they apply?',
      steps: [
        'Audi alteram partem — hear the other side — requires notice of the case and a genuine opportunity to be heard.',
        'Nemo judex in causa sua — no one should judge his own cause — requires the absence of bias, whether personal, pecuniary or by prejudgment.',
        'They apply to any body deciding a dispute affecting rights, and they apply even where the governing statute is silent, which is why passages on administrative action so often turn on them.',
      ],
      answer: 'The right to be heard and the rule against bias, applying even where a statute is silent.',
    },
    {
      q: 'What did Kesavananda Bharati decide, and why is it the most cited Indian case?',
      steps: [
        'It held that Parliament may amend any part of the Constitution, including the fundamental rights, overruling the contrary view in Golaknath.',
        'But it held that the amending power is limited: an amendment may not damage or destroy the basic structure of the Constitution.',
        'It is the most cited because that doctrine has since been used to strike down constitutional amendments, and because it is the source of the limits on Parliament\'s power that every later constitutional case works within.',
      ],
      answer: 'That the basic structure limits the amending power — the foundation of Indian constitutional law since 1973.',
    },
    {
      q: 'A subordinate rule made by a ministry goes beyond what the parent Act permits. What is the position?',
      steps: [
        'Delegated legislation derives its authority entirely from the parent statute.',
        'A rule exceeding that authority is ultra vires — beyond the powers conferred.',
        'It can accordingly be struck down by a court, without the parent Act itself being challenged.',
      ],
      answer: 'It is ultra vires and liable to be struck down.',
    },
    {
      q: 'Why does a Lok Adalat award carry no right of appeal?',
      steps: [
        'A Lok Adalat does not adjudicate; it settles a dispute by compromise between the parties.',
        'The award records what the parties themselves have agreed, and it is deemed a decree of a civil court.',
        'Since it rests on consent rather than on a decision imposed on an unwilling party, there is nothing to appeal against, and the award is final.',
      ],
      answer: 'Because it records a settlement the parties agreed to, so it is final and binding.',
    },
  ],

  practice: [
    {
      q: 'Under Article 141 of the Constitution, the law declared by the Supreme Court is binding on:',
      options: ['All courts in India', 'High Courts only', 'The parties to the case only', 'Subordinate courts only'],
      answer: 0,
      explain: 'This is what makes precedent operate in the Indian system.',
    },
    {
      q: 'Which part of a judgment is binding as precedent?',
      options: ['The whole judgment', 'The concurring opinions', 'The obiter dicta', 'The ratio decidendi'],
      answer: 3,
      explain: 'Obiter dicta are persuasive only, however eminent the judge.',
    },
    {
      q: 'The Indian Penal Code, 1860, was replaced with effect from 1 July 2024 by the:',
      options: ['Bharatiya Nagarik Suraksha Sanhita', 'Bharatiya Sakshya Adhiniyam', 'Bharatiya Nyaya Sanhita', 'Bharatiya Danda Sanhita'],
      answer: 2,
      explain: 'The Nagarik Suraksha Sanhita replaced the CrPC and the Sakshya Adhiniyam the Evidence Act.',
    },
    {
      q: 'The standard of proof in a civil case is:',
      options: ['Beyond reasonable doubt', 'Prima facie', 'Absolute certainty', 'Balance of probabilities'],
      answer: 3,
      explain: 'The criminal standard, beyond reasonable doubt, is considerably higher.',
    },
    {
      q: '"Audi alteram partem" means:',
      options: ['No one shall judge his own cause', 'Let the buyer beware', 'The thing speaks for itself', 'Hear the other side'],
      answer: 3,
      explain: 'The first limb of natural justice; the rule against bias is nemo judex in causa sua.',
    },
    {
      q: 'A rule made under a statute that exceeds the authority conferred by it is:',
      options: ['Void ab initio', 'Ultra vires', 'Res judicata', 'Sub judice'],
      answer: 1,
      explain: 'It can be struck down without challenging the parent Act itself.',
    },
    {
      q: 'The writ of quo warranto is used to:',
      options: ['Produce a detained person before the court', 'Question a person\'s right to hold a public office', 'Quash an order of a lower court', 'Compel performance of a public duty'],
      answer: 1,
      explain: 'Habeas corpus produces the body, certiorari quashes and mandamus compels.',
    },
    {
      q: 'The basic structure doctrine was propounded in:',
      options: ['Golaknath', 'Kesavananda Bharati', 'Minerva Mills', 'Maneka Gandhi'],
      answer: 1,
      explain: 'In 1973, by a bench of thirteen judges deciding seven to six.',
    },
    {
      q: 'The right to privacy was recognised as a fundamental right in:',
      options: ['Puttaswamy', 'Shreya Singhal', 'Vishaka', 'Navtej Singh Johar'],
      answer: 0,
      explain: 'In 2017, as intrinsic to the right to life and personal liberty under Article 21.',
    },
    {
      q: 'A Constitution Bench of the Supreme Court consists of at least:',
      options: ['Two judges', 'Three judges', 'Five judges', 'Seven judges'],
      answer: 2,
      explain: 'Required under Article 145 for substantial questions of constitutional interpretation.',
    },
    {
      q: '"Res ipsa loquitur" is applied in:',
      options: ['Contract law', 'Negligence', 'Criminal procedure', 'Constitutional interpretation'],
      answer: 1,
      explain: 'The accident itself implies negligence, shifting the burden to the defendant.',
    },
    {
      q: 'An award of a Lok Adalat is:',
      options: ['Appealable to the District Court', 'Deemed a decree of a civil court, with no appeal', 'A recommendation only', 'Binding only on the applicant'],
      answer: 1,
      explain: 'It records a settlement the parties agreed to, so there is nothing to appeal against.',
    },
    {
      q: 'The Attorney General for India is appointed under:',
      options: ['Article 76', 'Article 124', 'Article 148', 'Article 165'],
      answer: 0,
      explain: 'Article 165 provides for the Advocate General of a state, and Article 148 for the CAG.',
    },
    {
      q: 'Vishaka v. State of Rajasthan is associated with:',
      options: ['Reservation policy', 'Guidelines against sexual harassment at the workplace', 'Environmental liability', 'Freedom of speech online'],
      answer: 1,
      explain: 'The guidelines were laid down in the absence of legislation and given statutory form in 2013.',
    },
    {
      q: '"Doli incapax" refers to:',
      options: ['Incapacity of a very young child to commit a crime', 'A defective pleading', 'An order made without jurisdiction', 'Consent to a risk'],
      answer: 0,
      explain: 'A presumption in criminal law based on age.',
    },
    {
      q: 'The Bar Council of India was created by the:',
      options: ['Advocates Act, 1961', 'Legal Services Authorities Act, 1987', 'Constitution of India', 'Code of Civil Procedure, 1908'],
      answer: 0,
      explain: 'It regulates the profession and legal education, and conducts the All India Bar Examination.',
    },
  ],

  faqs: [
    {
      q: 'Do I need this material if the exam supplies the principle?',
      a: 'Not to reach the answer, but very much to reach it in time. A passage discussing preventive detention, writ jurisdiction and bench strength is far slower to read if those terms have to be worked out while you are also applying the principle. Study this page for reading speed and comprehension, never as a source of answers.',
    },
    {
      q: 'What changed in Indian criminal law in 2024?',
      a: 'All three principal criminal statutes were replaced with effect from 1 July 2024. The Bharatiya Nyaya Sanhita replaced the Indian Penal Code of 1860, the Bharatiya Nagarik Suraksha Sanhita replaced the Code of Criminal Procedure of 1973, and the Bharatiya Sakshya Adhiniyam replaced the Indian Evidence Act of 1872. Concepts carry over; section numbers do not, so any material citing IPC or CrPC sections is using superseded numbering.',
    },
    {
      q: 'What is the difference between ratio decidendi and obiter dicta?',
      a: 'The ratio is the legal reasoning essential to the decision — the principle without which the case could not have been decided as it was — and it binds under Article 141. Obiter dicta are observations made in passing on points that did not arise for decision. They carry persuasive weight, particularly from a large bench, but they do not bind, and distinguishing the two is a standing subject of legal argument.',
    },
    {
      q: 'Why is Article 226 wider than Article 32?',
      a: 'Because of four words. Article 32 empowers the Supreme Court to issue writs for the enforcement of fundamental rights. Article 226 empowers a High Court to do so for fundamental rights "and for any other purpose", which brings in ordinary legal rights. A High Court can therefore entertain a writ petition in cases the Supreme Court cannot take under Article 32.',
    },
    {
      q: 'Can the same act lead to both a civil and a criminal case?',
      a: 'Yes, and frequently does. A road accident may be a criminal offence and also a tort; an assault may be prosecuted and separately sued on. The two proceedings are independent, and because the criminal standard of proof is much higher, an acquittal does not bar the civil claim. Passages often turn on candidates assuming otherwise.',
    },
    {
      q: 'Which landmark cases are most worth knowing?',
      a: 'Kesavananda Bharati for the basic structure; Maneka Gandhi for the expansion of Article 21; Minerva Mills for the balance between Parts III and IV; Indra Sawhney for reservation and the creamy layer; Bommai for President\'s rule; Vishaka for workplace harassment; Shreya Singhal for online speech; Puttaswamy for privacy; and Navtej Singh Johar for Section 377. One sentence on each is enough for CLAT purposes.',
    },
    {
      q: 'What are the principles of natural justice, and do they apply without a statute?',
      a: 'Audi alteram partem, the right to notice and a hearing, and nemo judex in causa sua, the rule against bias. They apply to any body deciding a matter affecting rights, and crucially they apply even where the governing statute says nothing about procedure — courts read them in. That is why so many administrative law passages turn on them.',
    },
    {
      q: 'How much Latin do I actually need?',
      a: 'About twenty maxims, listed in the maxims section. They appear in legal writing constantly, so not knowing them slows reading badly, but they are a vocabulary exercise rather than a legal one — you need the meaning, not the doctrine behind it. An hour spent on them repays itself several times over in reading speed.',
    },
    {
      q: 'Is a High Court judgment binding on another High Court?',
      a: 'No. A High Court binds the courts subordinate to it within its own territorial jurisdiction. Its decisions are persuasive but not binding on other High Courts, which is why conflicting High Court rulings on the same question can coexist until the Supreme Court settles the point — and settling such conflicts is one of the main reasons cases reach it.',
    },
    {
      q: 'How does this material appear in the exam?',
      a: 'Mostly as background — assumed by the legal reasoning passages rather than tested directly. AILET has historically asked more legal knowledge directly than CLAT. Landmark judgments and recent legal developments also appear in the general knowledge and current affairs section, which is a reason to follow legal news through the preparation year.',
    },
  ],

  related: [
    { label: 'Principles & Facts', to: '/study-material/legal-reasoning/legal-principles/' },
    { label: 'Contract, Tort & Crime', to: '/study-material/legal-reasoning/contract-tort-crime/' },
    { label: 'Judiciary & Federalism', to: '/study-material/polity/judiciary-federalism/' },
    { label: 'Fundamental Rights & Duties', to: '/study-material/constitution/fundamental-rights/' },
    { label: 'All Legal Reasoning', to: '/study-material/legal-reasoning/' },
  ],
}
