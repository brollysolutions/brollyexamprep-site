/**
 * The Executive — /study-material/polity/executive/
 *
 * President, Vice-President, Prime Minister and Council of Ministers at the
 * Union, the Governor and Chief Minister in the states, the emergency
 * provisions that alter the balance between them, and the constitutional
 * bodies that check them. Article numbers throughout.
 */
export default {
  subject: 'polity',
  subjectName: 'Indian Polity',
  slug: 'executive',
  title: 'Executive & Council of Ministers',
  seoTitle: 'Indian Executive for Competitive Exams | President, PM, Governor & Practice',
  metaDescription:
    'Complete Indian executive study material for UPSC, SSC and state exams — the President and the electoral college, the Vice-President.',
  readMinutes: 25,
  lead: [
    'India has a parliamentary executive, which means the formal head of state and the effective head of government are different people, and almost every question in this topic exploits that gap. The President appoints the Prime Minister but acts on the advice of the Council of Ministers; the Governor is appointed by the Union but heads a state government answerable to the state assembly.',
    'The material below keeps the formal and the effective positions clearly apart, gives the article number for every rule, and works through the two calculations that are examined directly — the value of a vote in the presidential electoral college, and the ceiling on the size of the Council of Ministers.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '3–5 questions', note: 'Often on discretionary powers, the emergency provisions and the constitutional bodies.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–4 questions', note: 'Article numbers, terms of office and the electoral college.' },
    { exam: 'State PSC Prelims', count: '4–6 questions', note: 'With particular weight on the Governor and the state Council of Ministers.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Who appoints whom, and the qualifying ages.' },
    { exam: 'Banking and insurance GA', count: '1–2 questions', note: 'Usually tied to a current appointment or a recent constitutional body in the news.' },
  ],

  contents: [
    { icon: 'user', title: 'The President', sub: 'Election, powers and veto', href: '#president' },
    { icon: 'doc', title: 'The Vice-President', sub: 'Election and the two roles', href: '#vice-president' },
    { icon: 'target', title: 'Prime Minister and Council', sub: 'Where real power sits', href: '#council' },
    { icon: 'globe', title: 'The state executive', sub: 'Governor and Chief Minister', href: '#state-executive' },
    { icon: 'bell', title: 'Emergency provisions', sub: 'Articles 352, 356 and 360', href: '#emergency' },
    { icon: 'layers', title: 'Constitutional bodies', sub: 'The institutional checks', href: '#bodies' },
    { icon: 'refresh', title: 'The civil services', sub: 'The permanent executive', href: '#services' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'president',
      heading: 'The President',
      eyebrow: 'Election, powers and veto',
      intro:
        'Article 52 creates the office and Article 53 vests the executive power of the Union in it — power exercised, in almost all cases, on the advice of the Council of Ministers. The gap between the formal grant and the actual exercise is the subject of most questions here.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Qualifications (Article 58)',
              'A citizen of India, at least thirty-five years of age, qualified for election as a member of the Lok Sabha, and not holding any office of profit under the Union, a state or a local authority. Sitting Presidents, Vice-Presidents, Governors and ministers are expressly not treated as holding an office of profit for this purpose.',
            ],
            [
              'The electoral college (Article 54)',
              'The elected members of both Houses of Parliament and the elected members of the legislative assemblies of the states, together with those of Delhi and Puducherry after the 70th Amendment of 1992. Nominated members do not vote — a point examiners test constantly, because they do vote in an impeachment.',
            ],
            [
              'The method (Article 55)',
              'Proportional representation by means of a single transferable vote, by secret ballot. The Constitution requires uniformity among the states and parity between the Union and the states as a whole, which is what the vote-value formula achieves.',
            ],
            [
              'Term and vacancy',
              'Five years, with re-election permitted any number of times. A vacancy caused by death, resignation or removal must be filled within six months. Resignation is addressed to the Vice-President.',
            ],
            [
              'Impeachment (Article 61)',
              'The only ground is violation of the Constitution. The charge may be preferred by either House, on a resolution moved after fourteen days\' notice signed by at least one-quarter of the members of that House, and passed by a majority of not less than two-thirds of the total membership. The other House then investigates, and the President has the right to appear and be represented. Nominated members participate here, unlike in the election.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Value of a vote in the presidential election',
          items: [
            { expr: 'Value of one MLA vote = (state population ÷ elected MLAs) ÷ 1000', note: 'Population is taken from the 1971 census, frozen for this purpose by the 84th Amendment until the first census after 2026.' },
            { expr: 'Value of one MP vote = (total value of all MLA votes) ÷ elected MPs', note: 'This is what enforces parity between the Union and the states taken together.' },
            { expr: 'Winner needs more than half the total value of valid votes', note: 'Under the single transferable vote, later preferences are counted until someone crosses the quota.' },
          ],
        },
        {
          type: 'table',
          caption: 'The President\'s powers, grouped as questions group them',
          head: ['Category', 'Contents', 'Note'],
          rows: [
            ['Executive', 'Appoints the Prime Minister, other ministers on the PM\'s advice, the Attorney General, the CAG, Governors, the Chief Election Commissioner, and the chairman and members of the UPSC and Finance Commission', 'All administration is carried on in the President\'s name under Article 77.'],
            ['Legislative', 'Summons and prorogues Parliament, dissolves the Lok Sabha, addresses the first session after each general election, nominates twelve members to the Rajya Sabha, and promulgates ordinances under Article 123', 'Prior recommendation is needed for money bills and certain other bills.'],
            ['Financial', 'Money bills need the President\'s recommendation, the Annual Financial Statement is laid before Parliament by the President, and the Contingency Fund is at the President\'s disposal', 'Also constitutes the Finance Commission every five years under Article 280.'],
            ['Judicial', 'Appoints the Chief Justice and judges of the Supreme Court and High Courts, and exercises the pardoning power under Article 72', 'May also seek the Supreme Court\'s opinion under Article 143, and is not bound by it.'],
            ['Emergency', 'Proclaims national emergency under Article 352, President\'s rule under Article 356 and financial emergency under Article 360', 'Each requires parliamentary approval within a stated period.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The pardoning power (Article 72)',
              'Five distinct forms: a pardon removes both the sentence and the conviction; commutation substitutes a lighter form of punishment; remission reduces the amount without changing its character; respite awards a lesser sentence because of a special fact such as pregnancy; and reprieve is a temporary stay, typically of a death sentence. The President\'s power extends to court-martial sentences and to death sentences; a Governor\'s power under Article 161 extends to neither.',
            ],
            [
              'The three vetoes',
              'An absolute veto is the withholding of assent outright. A suspensive veto is the return of a bill for reconsideration, which the Houses can override by passing it again. A pocket veto is simply taking no action at all, since the Constitution sets no time limit — famously used by President Zail Singh on the Indian Post Office Bill in 1986. There is no veto over a constitutional amendment bill.',
            ],
            [
              'Article 74 and binding advice',
              'The Council of Ministers with the Prime Minister at its head aids and advises the President. The 42nd Amendment made that advice binding; the 44th Amendment added that the President may require the Council to reconsider it once, after which the advice as tendered again must be acted on. The advice itself cannot be inquired into by any court.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'vice-president',
      heading: 'The Vice-President',
      eyebrow: 'Election and the two roles',
      intro:
        'A small office that carries a disproportionate number of questions, because almost every rule about it differs from the corresponding rule for the President.',
      blocks: [
        {
          type: 'table',
          caption: 'President and Vice-President compared',
          head: ['Point of comparison', 'President', 'Vice-President'],
          rows: [
            ['Electoral college', 'Elected members of both Houses and of the state assemblies, including Delhi and Puducherry', 'Members of both Houses of Parliament only — and nominated members do vote'],
            ['Qualifying condition', 'Must be qualified for election to the Lok Sabha', 'Must be qualified for election to the Rajya Sabha'],
            ['Minimum age', 'Thirty-five years', 'Thirty-five years'],
            ['Removal procedure', 'Impeachment under Article 61, for violation of the Constitution', 'A resolution of the Rajya Sabha passed by a majority of all its then members and agreed to by the Lok Sabha; no ground is specified'],
            ['Resignation addressed to', 'The Vice-President', 'The President'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The two roles',
              'The Vice-President is the ex officio Chairman of the Rajya Sabha under Article 89, and acts as President during a vacancy or when the President is unable to discharge the functions. While acting as President the Vice-President does not perform the duties of Chairman and draws the President\'s emoluments.',
            ],
            [
              'Not a member of the House',
              'Because the Chairman is not a member of the Rajya Sabha, there is no ordinary vote — only a casting vote in the event of a tie. This differs from the Speaker, who is a member of the Lok Sabha and also has a casting vote only.',
            ],
            [
              'The office in the Constitution',
              'Articles 63 to 71. The office was modelled on the American Vice-Presidency in form, but the Indian Vice-President has an active legislative role that the American office no longer has in practice.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'council',
      heading: 'Prime Minister and Council of Ministers',
      eyebrow: 'Where real power sits',
      intro:
        'The Constitution says surprisingly little about the office that actually runs the country, which is itself a point examiners like. Articles 74, 75 and 78 contain almost the whole of it.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Appointment (Article 75)',
              'The Prime Minister is appointed by the President, and the other ministers are appointed by the President on the Prime Minister\'s advice. In practice the President must call the leader of the party or coalition commanding a majority in the Lok Sabha; discretion arises only when no such leader is obvious.',
            ],
            [
              'Collective and individual responsibility',
              'Article 75(3) makes the Council of Ministers collectively responsible to the Lok Sabha — so a no-confidence motion against one minister brings down the whole Council. Individual ministers hold office during the pleasure of the President, which in practice means at the Prime Minister\'s discretion.',
            ],
            [
              'The 91st Amendment ceiling',
              'The total number of ministers, including the Prime Minister, may not exceed fifteen per cent of the total strength of the Lok Sabha. In a state the same fifteen per cent ceiling applies to the assembly, subject to a minimum of twelve ministers. The same amendment disqualified a defector from ministerial office.',
            ],
            [
              'A minister who is not a member',
              'A person may be appointed a minister without being a member of either House, but must become one within six months or cease to hold office. This is how a government brings in a specialist, and it is regularly examined.',
            ],
            [
              'Ranks of minister',
              'Cabinet ministers head major departments and attend Cabinet meetings. Ministers of State may hold independent charge of a department or work under a Cabinet minister; they attend Cabinet only when invited for their subject. Deputy ministers assist and do not head a department. The word "Cabinet" entered the Constitution only through the 44th Amendment, in Article 352.',
            ],
            [
              'Duties of the Prime Minister (Article 78)',
              'To communicate to the President all decisions of the Council relating to administration and legislation, to furnish such information as the President calls for, and to submit for the consideration of the Council any matter on which a minister has decided but the Council has not considered. The Prime Minister is thus the sole channel between the Council and the President.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Why a defeated Prime Minister still governs',
          text:
            'When the Lok Sabha is dissolved or a government loses its majority, the outgoing Council of Ministers continues as a caretaker until a successor is appointed, because Article 75 does not permit a vacuum. A caretaker government by convention refrains from major policy decisions. The convention is not written in the Constitution, which is exactly the sort of distinction UPSC questions probe.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'state-executive',
      heading: 'The state executive',
      eyebrow: 'Governor and Chief Minister',
      intro:
        'The state executive mirrors the Union with one crucial asymmetry: the Governor is appointed by the Centre rather than elected, and holds office during the President\'s pleasure. Nearly every question about Centre–state friction traces back to that fact.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Appointment and term (Articles 155–156)',
              'The Governor is appointed by the President by warrant under his hand and seal, for a term of five years, but holds office during the pleasure of the President — so the term is a maximum, not a guarantee. The qualifications are Indian citizenship and completion of thirty-five years of age. The same person may be Governor of two or more states.',
            ],
            [
              'Discretionary powers',
              'Unlike the President, the Governor has express constitutional discretion. The chief instances are reserving a bill for the President\'s consideration under Article 200, recommending President\'s rule under Article 356, appointing a Chief Minister when no party has a clear majority, dismissing a government that has lost confidence but will not resign, and dissolving the assembly in that situation. Certain Governors have additional statutory functions for tribal areas and for specified regions.',
            ],
            [
              'The Chief Minister (Article 164)',
              'Appointed by the Governor; other ministers appointed on the Chief Minister\'s advice. The Council of Ministers is collectively responsible to the Legislative Assembly. Ministers hold office during the pleasure of the Governor. The ceiling of fifteen per cent of the assembly, with a minimum of twelve, applies.',
            ],
            [
              'The Governor\'s pardoning power (Article 161)',
              'Narrower than the President\'s in two respects: it does not extend to a sentence of death, and it does not extend to sentences of a court martial. It covers offences against laws relating to matters within the state\'s executive power.',
            ],
            [
              'Union territories',
              'Administered by the President through an administrator, styled Lieutenant Governor or Administrator. Delhi and Puducherry have legislative assemblies and councils of ministers; Delhi\'s special position rests on Article 239AA, inserted by the 69th Amendment, and its division of powers with the Lieutenant Governor has been repeatedly litigated.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'emergency',
      heading: 'Emergency provisions',
      eyebrow: 'Articles 352, 356 and 360',
      intro:
        'Part XVIII allows the federal structure to be converted into a unitary one temporarily. Because that power was misused in the 1970s, the 44th Amendment tightened it substantially, and the before-and-after contrast is the question examiners most often ask.',
      blocks: [
        {
          type: 'table',
          caption: 'The three emergencies',
          head: ['Type', 'Grounds and article', 'Approval and duration'],
          rows: [
            ['National emergency', 'War, external aggression or armed rebellion — Article 352. The 44th Amendment replaced "internal disturbance" with "armed rebellion" and required a written recommendation of the Cabinet.', 'Approved by both Houses by a special majority within one month; then continues six months at a time. Declared three times: 1962, 1971 and 1975.'],
            ['President\'s rule', 'Failure of constitutional machinery in a state — Article 356, on the Governor\'s report or otherwise.', 'Approved by both Houses by simple majority within two months; then six months at a time, up to three years, with conditions on any extension beyond one year.'],
            ['Financial emergency', 'A threat to the financial stability or credit of India — Article 360.', 'Approved by both Houses by simple majority within two months, and then continues indefinitely until revoked. It has never been declared.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Effect of a national emergency',
              'The Centre may give executive directions to any state, Parliament may legislate on State List subjects, the Lok Sabha\'s term may be extended by one year at a time, and the financial distribution between Centre and states may be modified. Article 19 is automatically suspended when the emergency is on the ground of war or external aggression, but not for armed rebellion — a change made by the 44th Amendment.',
            ],
            [
              'Articles 20 and 21 cannot be suspended',
              'The 44th Amendment provides that the right to enforce Articles 20 and 21 may never be suspended, even during an emergency. This was a direct response to the Supreme Court\'s decision in the Habeas Corpus case of 1976, whose reasoning has since been expressly disapproved.',
            ],
            [
              'The Bommai case',
              'In S. R. Bommai v. Union of India, 1994, the Supreme Court held that a proclamation under Article 356 is subject to judicial review, that the floor of the assembly and not the Governor\'s assessment is the proper test of majority, and that the assembly should not be dissolved until Parliament approves the proclamation. It substantially reduced the misuse of the article.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'bodies',
      heading: 'Constitutional bodies',
      eyebrow: 'The institutional checks',
      intro:
        'A body created by the Constitution itself is a constitutional body; one created by an Act of Parliament is statutory; one created by an executive order is neither. Sorting the well-known bodies into those three categories is one of the most reliably asked questions in polity.',
      blocks: [
        {
          type: 'table',
          caption: 'Constitutional bodies and their articles',
          head: ['Body', 'Article', 'Composition and tenure'],
          rows: [
            ['Election Commission', 'Article 324', 'The Chief Election Commissioner and such other Commissioners as the President fixes. The CEC can be removed only in the manner of a Supreme Court judge; other Commissioners only on the CEC\'s recommendation.'],
            ['Union Public Service Commission', 'Articles 315–323', 'Chairman and members appointed by the President, holding office for six years or until the age of sixty-five, whichever is earlier. Removal only by the President after an inquiry by the Supreme Court.'],
            ['State Public Service Commission', 'Article 315', 'Appointed by the Governor, six years or until sixty-two. But removal is by the President, not the Governor — a deliberate safeguard, and a very common question.'],
            ['Finance Commission', 'Article 280', 'Constituted by the President every fifth year or earlier, with a chairman and four other members, to recommend the distribution of tax proceeds between the Union and the states.'],
            ['Attorney General', 'Article 76', 'The first law officer of the government, appointed by the President, qualified to be a Supreme Court judge. Has a right of audience in all courts and may speak in either House or any committee, but has no vote.'],
            ['Comptroller and Auditor General', 'Article 148', 'Six years or until sixty-five, whichever is earlier; removable only like a Supreme Court judge; salary charged on the Consolidated Fund.'],
            ['National Commission for Scheduled Castes', 'Article 338', 'A constitutional body; the parallel Commission for Scheduled Tribes sits in Article 338A and the Commission for Backward Classes in Article 338B, added by the 102nd Amendment.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Statutory bodies',
              'Created by an Act of Parliament and therefore alterable by ordinary legislation: the National Human Rights Commission, the Central Information Commission, the Central Vigilance Commission, the Lokpal, the National Commission for Women and the National Green Tribunal. The distinction matters because a constitutional body cannot be abolished without amending the Constitution.',
            ],
            [
              'Executive bodies',
              'Created by a government resolution with no statute behind them at all. NITI Aayog, established on 1 January 2015 to replace the Planning Commission, is the standard example, and the Prime Minister is its chairperson. The Planning Commission itself was also an executive body, which is why it could be replaced without legislation.',
            ],
            [
              'Which figures move',
              'The number of Election Commissioners, the terms of reference and the award period of the current Finance Commission, and the names of office-holders all change. The Sixteenth Finance Commission was constituted for the award period beginning 2026, so check the current position rather than relying on a figure in any set of notes.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'services',
      heading: 'The civil services',
      eyebrow: 'The permanent executive',
      intro:
        'Ministers change with elections; the services do not. The Constitution therefore gives civil servants specific protections, and creates a category of service shared between the Union and the states.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'All India Services (Article 312)',
              'Services common to the Union and the states: the Indian Administrative Service, the Indian Police Service and the Indian Forest Service. Officers are recruited and trained centrally but serve under a state cadre. A new All India Service can be created only if the Rajya Sabha resolves by a two-thirds majority of members present and voting that it is in the national interest.',
            ],
            [
              'Central and state services',
              'Central services such as the Indian Foreign Service, the Indian Revenue Service and the Indian Audit and Accounts Service serve the Union alone. State services are recruited by the State Public Service Commission and serve that state alone.',
            ],
            [
              'Protection under Article 311',
              'A civil servant may not be dismissed or removed by an authority subordinate to the one that appointed him, and may not be dismissed, removed or reduced in rank without an inquiry in which he has been informed of the charges and given a reasonable opportunity to be heard. There are three exceptions: conviction on a criminal charge, where an inquiry is not reasonably practicable for reasons to be recorded, and where the President or Governor is satisfied that an inquiry would prejudice the security of the state.',
            ],
            [
              'The doctrine of pleasure',
              'Article 310 states that members of the defence and civil services hold office during the pleasure of the President or the Governor. Article 311 qualifies that pleasure with procedural safeguards, so the two articles must be read together — a standard question pairs them.',
            ],
            [
              'Tribunals',
              'Articles 323A and 323B, inserted by the 42nd Amendment, provide for administrative tribunals and tribunals for other matters. The Central Administrative Tribunal was established under Article 323A to hear service disputes. The Supreme Court has held that the jurisdiction of High Courts under Article 226 cannot be excluded by such tribunals.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Do nominated members of the Rajya Sabha take part in the election of the President?',
      steps: [
        'The electoral college under Article 54 consists of the elected members of both Houses and the elected members of the state assemblies.',
        'Nominated members are excluded, because the college is meant to reflect direct and indirect popular election.',
        'They do, however, take part in the impeachment of a President under Article 61, because that is a proceeding of the Houses rather than an election.',
      ],
      answer: 'No in the election, yes in an impeachment.',
    },
    {
      q: 'The Lok Sabha has a total strength of 543. What is the maximum size of the Council of Ministers?',
      steps: [
        'The 91st Amendment caps the Council, including the Prime Minister, at fifteen per cent of the total strength of the Lok Sabha.',
        'Fifteen per cent of 543 is 81.45.',
        'A fraction cannot be a minister, so the ceiling is taken as the whole number below it.',
      ],
      answer: 'Eighty-one ministers, including the Prime Minister.',
    },
    {
      q: 'A Governor commutes a death sentence. Is this valid?',
      steps: [
        'The Governor\'s pardoning power is in Article 161, and it is narrower than the President\'s under Article 72.',
        'It does not extend to sentences of death, nor to sentences imposed by a court martial.',
        'Commutation of a death sentence therefore lies with the President alone.',
      ],
      answer: 'No — a Governor cannot deal with a death sentence at all under Article 161.',
    },
    {
      q: 'What did the 44th Amendment change about a proclamation of national emergency?',
      steps: [
        'It replaced the ground of "internal disturbance" with "armed rebellion", which is a much narrower ground.',
        'It required a written recommendation of the Cabinet, not merely of the Prime Minister, before the proclamation.',
        'It also protected Articles 20 and 21 from suspension in any circumstance, and made Article 19 suspendable only in an emergency declared on the ground of war or external aggression.',
      ],
      answer: 'A narrower ground, a written Cabinet recommendation, and absolute protection for Articles 20 and 21.',
    },
    {
      q: 'A person who is not a member of either House is appointed a minister. For how long may they continue?',
      steps: [
        'Article 75(5) permits the appointment of a person who is not a member of Parliament.',
        'Such a minister must become a member of either House within six months.',
        'Failing that, the person ceases to be a minister on the expiry of that period.',
      ],
      answer: 'Six months, within which they must enter one of the Houses.',
    },
    {
      q: 'A member of a State Public Service Commission is to be removed. Who removes them?',
      steps: [
        'The chairman and members of a State Public Service Commission are appointed by the Governor.',
        'But removal is placed with the President, and only after an inquiry by the Supreme Court.',
        'The asymmetry is deliberate — it insulates the Commission from the state government it examines candidates for.',
      ],
      answer: 'The President, not the Governor, after a Supreme Court inquiry.',
    },
    {
      q: 'Classify the NITI Aayog, the Election Commission and the National Human Rights Commission.',
      steps: [
        'The Election Commission is created by Article 324 of the Constitution itself — a constitutional body.',
        'The National Human Rights Commission was created by the Protection of Human Rights Act, 1993 — a statutory body.',
        'NITI Aayog was created by a Union Cabinet resolution on 1 January 2015 with no statute behind it — an executive body.',
      ],
      answer: 'Constitutional, statutory and executive respectively.',
    },
    {
      q: 'What is a pocket veto and when was it used?',
      steps: [
        'The Constitution prescribes no time limit within which the President must act on a bill presented for assent.',
        'The President can therefore simply take no action, neither assenting nor returning it, so the bill never becomes law.',
        'President Zail Singh did this with the Indian Post Office (Amendment) Bill in 1986.',
      ],
      answer: 'Indefinite inaction on a bill, made possible by the absence of any time limit in Article 111.',
    },
  ],

  practice: [
    {
      q: 'The executive power of the Union is vested in the:',
      options: ['Prime Minister', 'Council of Ministers', 'President', 'Cabinet Secretary'],
      answer: 2,
      explain: 'Article 53 vests it in the President, though it is exercised on the advice of the Council of Ministers.',
    },
    {
      q: 'The minimum age for election as President of India is:',
      options: ['30 years', '35 years', '40 years', '25 years'],
      answer: 1,
      explain: 'Article 58 requires thirty-five years, the same minimum as for the Vice-President.',
    },
    {
      q: 'The President can be removed from office for:',
      options: ['Violation of the Constitution', 'Proved misbehaviour', 'Loss of confidence of the Lok Sabha', 'Any ground the Houses specify'],
      answer: 0,
      explain: 'Article 61 specifies violation of the Constitution as the only ground for impeachment.',
    },
    {
      q: 'The population figure used to calculate the value of an MLA\'s vote in the presidential election is from the census of:',
      options: ['1951', '1971', '1991', '2011'],
      answer: 1,
      explain: 'The 84th Amendment froze the 1971 figure for this purpose until the first census taken after 2026.',
    },
    {
      q: 'The ceiling of 15% on the size of the Council of Ministers was imposed by the:',
      options: ['52nd Amendment', '73rd Amendment', '91st Amendment', '101st Amendment'],
      answer: 2,
      explain: 'The 91st Amendment of 2003 also removed the split exception from the anti-defection law.',
    },
    {
      q: 'The Vice-President is elected by:',
      options: ['Members of both Houses of Parliament', 'Elected members of both Houses only', 'Members of Parliament and state assemblies', 'The Rajya Sabha alone'],
      answer: 0,
      explain: 'All members of both Houses vote, nominated members included — unlike the presidential election.',
    },
    {
      q: 'Which article deals with the proclamation of President\'s rule in a state?',
      options: ['Article 352', 'Article 356', 'Article 360', 'Article 365'],
      answer: 1,
      explain: 'Article 356 covers failure of constitutional machinery; 352 is national emergency and 360 financial emergency.',
    },
    {
      q: 'A financial emergency under Article 360 has been declared:',
      options: ['Once', 'Twice', 'Three times', 'Never'],
      answer: 3,
      explain: 'It has never been proclaimed. National emergency has been declared three times — 1962, 1971 and 1975.',
    },
    {
      q: 'The Attorney General of India:',
      options: ['Is a member of the Cabinet', 'Can vote in Parliament', 'Can speak in either House but not vote', 'Is appointed by the Chief Justice'],
      answer: 2,
      explain: 'Article 76 gives a right of audience in both Houses and their committees, but no right to vote.',
    },
    {
      q: 'NITI Aayog is a:',
      options: ['Constitutional body', 'Statutory body', 'Executive body', 'Quasi-judicial body'],
      answer: 2,
      explain: 'It was created by a Union Cabinet resolution in January 2015, with no constitutional or statutory basis.',
    },
    {
      q: 'A Governor holds office:',
      options: ['For a fixed term of five years', 'During the pleasure of the President', 'Until the age of sixty-five', 'During the pleasure of the Chief Minister'],
      answer: 1,
      explain: 'Article 156 gives a term of five years but subject to the President\'s pleasure, so it is a maximum rather than a guarantee.',
    },
    {
      q: 'Which case held that a proclamation under Article 356 is subject to judicial review?',
      options: ['Kesavananda Bharati', 'Minerva Mills', 'S. R. Bommai', 'Golaknath'],
      answer: 2,
      explain: 'S. R. Bommai v. Union of India, 1994, also held that the floor of the House is the test of majority.',
    },
    {
      q: 'The three All India Services are the IAS, the IPS and the:',
      options: ['Indian Foreign Service', 'Indian Revenue Service', 'Indian Forest Service', 'Indian Audit and Accounts Service'],
      answer: 2,
      explain: 'The others named are central services, serving the Union alone rather than being shared with state cadres.',
    },
    {
      q: 'Article 311 protects a civil servant from dismissal without:',
      options: ['An inquiry with an opportunity to be heard', 'The consent of the Union Public Service Commission', 'A resolution of Parliament', 'A court order'],
      answer: 0,
      explain: 'It also bars dismissal by an authority subordinate to the appointing authority, subject to three stated exceptions.',
    },
    {
      q: 'The Finance Commission is constituted by the President under Article:',
      options: ['Article 148', 'Article 263', 'Article 280', 'Article 324'],
      answer: 2,
      explain: 'Article 280 requires its constitution every fifth year or earlier, with a chairman and four other members.',
    },
    {
      q: 'During a national emergency proclaimed on the ground of armed rebellion, Article 19 is:',
      options: ['Automatically suspended', 'Not automatically suspended', 'Suspended for six months', 'Abrogated permanently'],
      answer: 1,
      explain: 'After the 44th Amendment, Article 19 is suspended only when the emergency rests on war or external aggression.',
    },
  ],

  faqs: [
    {
      q: 'Is the President of India a rubber stamp?',
      a: 'Not quite, but close in ordinary times. Article 74 makes ministerial advice binding, and the 44th Amendment leaves only the power to require reconsideration once. Real discretion appears in unusual situations — appointing a Prime Minister when no party has a majority, dismissing a government that has lost confidence but will not resign, and the pocket veto, which exists because no time limit is prescribed.',
    },
    {
      q: 'Why does the value of an MLA\'s vote differ from state to state?',
      a: 'Because it is calculated as the state\'s population divided by the number of its elected MLAs, divided again by a thousand. A state with a large population per legislator therefore has a higher value per vote. The device makes the electoral college reflect population rather than merely counting legislators.',
    },
    {
      q: 'What is the difference between the President\'s and the Governor\'s pardoning power?',
      a: 'The President under Article 72 can deal with sentences of death and with court-martial sentences; the Governor under Article 161 can do neither. Otherwise both may pardon, commute, remit, respite and reprieve, the Governor in respect of offences against laws on matters within the state\'s executive power.',
    },
    {
      q: 'How is a constitutional body different from a statutory body?',
      a: 'A constitutional body is created by the Constitution itself and cannot be abolished or fundamentally altered without a constitutional amendment — the Election Commission, UPSC, Finance Commission, CAG and Attorney General are examples. A statutory body is created by an ordinary Act of Parliament and can be changed by ordinary legislation — the NHRC, CVC and Lokpal are examples. An executive body such as NITI Aayog has neither basis.',
    },
    {
      q: 'Why is the Governor\'s office controversial?',
      a: 'Because the Governor is appointed by the Union and holds office during its pleasure, yet exercises discretionary powers that can decide who governs a state — recommending President\'s rule, choosing a Chief Minister in a hung assembly, and reserving bills for the President. The Sarkaria and Punchhi Commissions both recommended safeguards, and the Bommai judgment restricted the most damaging use of that discretion.',
    },
    {
      q: 'Can Article 356 still be misused after the Bommai judgment?',
      a: 'It is much harder. Bommai held that the proclamation is judicially reviewable, that the floor of the assembly rather than the Governor\'s opinion is the test of majority, and that the assembly should not be dissolved before Parliament approves. The number of proclamations fell sharply afterwards, though disputes over the Governor\'s handling of government formation continue.',
    },
    {
      q: 'What happens if both the President and the Vice-President offices fall vacant?',
      a: 'The Chief Justice of India, or in his absence the senior-most judge of the Supreme Court available, discharges the functions of the President. This is provided for by the Supreme Court Judges (Discharge of Functions) Act, 1969, rather than by the Constitution, and it has actually happened once, in 1969.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'The office-holders, obviously; the number of Election Commissioners and the law governing their appointment, which has been legislated recently; the award period and terms of reference of the current Finance Commission; and the strength of the Council of Ministers. The articles, majorities, ages and tenures do not change.',
    },
    {
      q: 'Does a minister have to be a member of Parliament?',
      a: 'Not at the moment of appointment. Article 75(5) allows a non-member to be appointed, but the person must become a member of either House within six months or cease to hold office. The same rule applies in the states under Article 164(4).',
    },
    {
      q: 'How many questions come from the executive?',
      a: 'Three to five in UPSC Prelims, three to four in SSC CGL Tier 1, four to six in state PSC prelims where the Governor and state Council of Ministers add weight, and two to three in RRB NTPC. The constitutional-versus-statutory-versus-executive classification of bodies is the single most repeated question in the block.',
    },
  ],

  related: [
    { label: 'Parliament & the Legislature', to: '/study-material/polity/parliament/' },
    { label: 'Judiciary & Federalism', to: '/study-material/polity/judiciary-federalism/' },
    { label: 'Constitution', to: '/study-material/constitution/' },
    { label: 'Indian Economy', to: '/study-material/economy/' },
    { label: 'All Polity', to: '/study-material/polity/' },
  ],
}
