/**
 * Parliament and the Legislature — /study-material/polity/parliament/
 *
 * The institution the rest of polity is defined against: the executive is
 * drawn from it and answerable to it, and the judiciary is defined by what it
 * may and may not do to its laws. Article numbers are given throughout because
 * SSC and state papers ask for them directly.
 */
export default {
  subject: 'polity',
  subjectName: 'Indian Polity',
  slug: 'parliament',
  title: 'Parliament & the Legislature',
  seoTitle: 'Parliament of India for Competitive Exams | Structure, Bills & Practice',
  metaDescription:
    'Complete Parliament and legislature study material for UPSC, SSC and state exams — the two Houses, membership and qualifications, presiding officers.',
  readMinutes: 25,
  lead: [
    'Parliament is the right place to begin polity, because the other two branches are defined in relation to it. The Council of Ministers is drawn from it and survives only while it retains the confidence of the Lok Sabha; the judiciary exists in part to decide what Parliament may and may not enact.',
    'Questions here are unusually precise. They ask which House alone can do a thing, how many days the other House may hold a bill, which article governs a procedure, and which majority a motion requires. This page is written to that level of precision, with the article number attached to every rule, because that is what the answer options turn on.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '4–6 questions', note: 'Frequently comparative — what the two Houses can and cannot do differently.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–5 questions', note: 'Direct article numbers, terms of office and House strengths.' },
    { exam: 'State PSC Prelims', count: '4–7 questions', note: 'Union Parliament plus the state legislature in detail.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Basic recall — who presides over which House, what a money bill is.' },
    { exam: 'CDS / NDA General Ability', count: '2–4 questions', note: 'Structure and powers rather than procedure.' },
  ],

  contents: [
    { icon: 'layers', title: 'The two Houses', sub: 'Structure and composition', href: '#structure' },
    { icon: 'user', title: 'Membership', sub: 'Qualification, term and disqualification', href: '#membership' },
    { icon: 'target', title: 'Presiding officers', sub: 'Speaker, Chairman and their powers', href: '#presiding' },
    { icon: 'doc', title: 'How a bill becomes law', sub: 'Four kinds of bill, and the deadlock', href: '#lawmaking' },
    { icon: 'chart', title: 'Financial procedure', sub: 'Budget, funds and cut motions', href: '#financial' },
    { icon: 'bell', title: 'Parliamentary devices', sub: 'Questions, motions and committees', href: '#devices' },
    { icon: 'globe', title: 'State legislatures', sub: 'Assembly and Council', href: '#states' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'structure',
      heading: 'The two Houses',
      eyebrow: 'Structure and composition',
      intro:
        'Article 79 constitutes Parliament as the President together with two Houses — the Council of States and the House of the People. Note that the President is part of Parliament without being a member of either House, which is a standard trap.',
      blocks: [
        {
          type: 'table',
          caption: 'Lok Sabha and Rajya Sabha compared',
          head: ['Feature', 'Lok Sabha (House of the People)', 'Rajya Sabha (Council of States)'],
          rows: [
            ['Maximum strength', '550 — up to 530 from the states and 20 from union territories. Present strength is 543.', '250 — up to 238 representing states and union territories, plus 12 nominated by the President. Present strength is 245.'],
            ['Nomination', 'The two Anglo-Indian seats the President could nominate were discontinued by the 104th Amendment, with effect from January 2020.', 'Twelve members nominated for distinction in literature, science, art and social service.'],
            ['How members are chosen', 'Direct election from territorial constituencies by universal adult suffrage.', 'Elected by the elected members of state legislative assemblies by proportional representation with a single transferable vote.'],
            ['Term', 'Five years, but dissolvable earlier by the President on the advice of the Cabinet.', 'A permanent body that is never dissolved; one-third of members retire every second year, each serving six years.'],
            ['Presiding officer', 'The Speaker, elected from among its own members.', 'The Vice-President of India, who is Chairman ex officio and is not a member of the House.'],
            ['Minimum age', 'Twenty-five years.', 'Thirty years.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Where the Lok Sabha is stronger',
              'A money bill can originate only in the Lok Sabha and the Rajya Sabha can only recommend, not amend. A no-confidence motion lies only in the Lok Sabha, and the Council of Ministers is collectively responsible to it alone under Article 75(3). In a joint sitting the Lok Sabha\'s greater numbers usually prevail.',
            ],
            [
              'Where the Rajya Sabha is stronger',
              'Two powers belong to it exclusively. Under Article 249 it may resolve, by a two-thirds majority of members present and voting, that Parliament should legislate on a State List subject in the national interest. Under Article 312 it may similarly resolve to create a new All India Service. The Lok Sabha has no equivalent.',
            ],
            [
              'Where they are equal',
              'Ordinary bills, constitutional amendment bills, the impeachment of the President, the removal of judges, approval of a proclamation of Emergency, and the election of the President and Vice-President. Both Houses participate on the same footing.',
            ],
            [
              'Sessions and terms of art',
              'Parliament must meet so that no more than six months separates the last sitting of one session from the first of the next — Article 85. Prorogation ends a session; adjournment merely suspends a sitting; dissolution ends the life of the Lok Sabha itself. Quorum is one-tenth of the total membership of the House.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Lapsing of bills',
          text:
            'On dissolution of the Lok Sabha, a bill pending in the Lok Sabha lapses, and so does a bill passed by the Lok Sabha but pending in the Rajya Sabha. A bill pending in the Rajya Sabha that the Lok Sabha has not passed does not lapse, because the Rajya Sabha is never dissolved. A bill on which the President has already notified a joint sitting also does not lapse. This four-way distinction is asked almost verbatim.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'membership',
      heading: 'Membership',
      eyebrow: 'Qualification, term and disqualification',
      intro:
        'Qualifications sit in Article 84 and disqualifications in Article 102, with the anti-defection grounds in the Tenth Schedule. Between them they account for a steady share of questions.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Qualifications (Article 84)',
              'A citizen of India; at least twenty-five years of age for the Lok Sabha and thirty for the Rajya Sabha; and such other qualifications as Parliament prescribes. A candidate must make an oath or affirmation before the Election Commission, and must be a registered elector — the requirement that a Rajya Sabha candidate be ordinarily resident in the state he represents was removed by amendment in 2003.',
            ],
            [
              'Disqualifications (Article 102)',
              'Holding an office of profit under the government other than one exempted by law; being of unsound mind as declared by a court; being an undischarged insolvent; not being a citizen or having voluntarily acquired foreign citizenship; and any disqualification imposed by a law of Parliament. The Representation of the People Act adds conviction-based disqualifications.',
            ],
            [
              'Vacancy for absence (Article 101)',
              'A seat may be declared vacant if the member is absent from all meetings of the House for sixty days without permission. A person cannot be a member of both Houses, or of Parliament and a state legislature, at the same time, and must vacate one within the prescribed period.',
            ],
            [
              'Anti-defection — the Tenth Schedule',
              'Inserted by the 52nd Amendment in 1985. A member is disqualified for voluntarily giving up party membership or for voting against the party whip. The 91st Amendment of 2003 removed the earlier exemption for a split by one-third of a party, leaving only a merger by two-thirds as a defence. The presiding officer decides, and that decision is subject to judicial review.',
            ],
            [
              'Privileges',
              'Freedom of speech in Parliament under Article 105, so that no member may be sued in a court for anything said or voted on in the House, and freedom from arrest in civil cases during a session and for forty days before and after. Criminal cases are not covered.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Reservation of seats',
          text:
            'Seats are reserved in the Lok Sabha and the state assemblies for Scheduled Castes and Scheduled Tribes under Articles 330 and 332, and the period of that reservation has been extended repeatedly by amendment. The 106th Amendment provides for reservation of one-third of seats for women in the Lok Sabha and state assemblies, but its commencement is tied to a delimitation exercise following a census, so its operative date is a current-affairs item rather than a settled fact.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'presiding',
      heading: 'Presiding officers',
      eyebrow: 'Speaker, Chairman and their powers',
      intro:
        'The Speaker is the single most heavily examined individual office in this topic, mainly because several of the Speaker\'s powers are exclusive and counter-intuitive.',
      blocks: [
        {
          type: 'table',
          caption: 'The four presiding officers',
          head: ['Office', 'How chosen', 'Distinctive feature'],
          rows: [
            ['Speaker of the Lok Sabha', 'Elected by the Lok Sabha from among its own members (Article 93)', 'Certifies a money bill, presides over a joint sitting, decides anti-defection cases, and votes only to break a tie — the casting vote.'],
            ['Deputy Speaker', 'Elected by the Lok Sabha', 'Reports directly to the Speaker, not to the government. When appointed to a parliamentary committee he presides over it automatically.'],
            ['Chairman of the Rajya Sabha', 'The Vice-President of India holds the office ex officio (Article 89)', 'Not a member of the House, and therefore has no vote except a casting vote.'],
            ['Deputy Chairman', 'Elected by the Rajya Sabha from among its members', 'Presides in the Chairman\'s absence; unlike the Chairman he is a member and votes normally.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Removal',
              'The Speaker and Deputy Speaker may be removed by a resolution passed by a majority of all the then members of the House, after fourteen days\' notice. While such a resolution is under consideration the Speaker may sit in the House but may not preside, and may vote in the first instance though not a casting vote.',
            ],
            [
              'Continuity of the Speaker',
              'The Speaker does not vacate office on dissolution of the Lok Sabha, but continues until immediately before the first meeting of the new House. This ensures the office is never vacant, and it is a favourite question.',
            ],
            [
              'The Speaker\'s certificate',
              'Under Article 110(3) the Speaker\'s decision that a bill is a money bill is final, and that certificate is endorsed on the bill when it is transmitted to the Rajya Sabha. The finality of that certificate is what makes the money-bill route so significant in practice.',
            ],
            [
              'The panel of chairpersons',
              'The Speaker nominates a panel of members who preside when neither the Speaker nor the Deputy Speaker is available. In the Rajya Sabha the equivalent is the panel of vice-chairpersons.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'lawmaking',
      heading: 'How a bill becomes law',
      eyebrow: 'Four kinds of bill, and the deadlock',
      intro:
        'Almost every procedural question in this topic turns on which of four categories a bill falls into, because the route differs sharply between them.',
      blocks: [
        {
          type: 'table',
          caption: 'The four kinds of bill',
          head: ['Kind of bill', 'Where it may originate', 'Special features'],
          rows: [
            ['Ordinary bill', 'Either House', 'Needs a simple majority in both Houses. Deadlock is resolved by a joint sitting under Article 108.'],
            ['Money bill (Article 110)', 'Lok Sabha only, and only on the President\'s recommendation', 'The Rajya Sabha must return it within fourteen days and may only recommend changes, which the Lok Sabha may reject. No joint sitting is possible.'],
            ['Financial bill', 'Some in the Lok Sabha only, some in either House', 'Contains financial provisions along with other matter, so it does not attract the full money-bill privilege.'],
            ['Constitutional amendment bill (Article 368)', 'Either House', 'Requires a special majority in each House separately, and for certain provisions ratification by half the state legislatures. No joint sitting, and the President must give assent.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Stages of an ordinary bill',
              'First reading is introduction and publication. Second reading is the substantive stage, with general discussion, possible reference to a committee, and clause-by-clause consideration. Third reading is a vote on the bill as amended, at which only acceptance or rejection is possible. The bill then goes to the other House, and finally to the President.',
            ],
            [
              'Joint sitting (Article 108)',
              'The President may summon a joint sitting when the other House rejects a bill, disagrees on amendments, or lets six months pass without passing it. The Speaker of the Lok Sabha presides. It cannot be used for money bills or constitutional amendment bills. It has been held only three times — for the Dowry Prohibition Bill in 1961, the Banking Service Commission (Repeal) Bill in 1978 and the Prevention of Terrorism Bill in 2002.',
            ],
            [
              'The President\'s options (Article 111)',
              'On an ordinary bill the President may assent, withhold assent, or return it for reconsideration; if the Houses pass it again, with or without amendment, assent must be given. On a money bill the President may assent or withhold but may not return it. On a constitutional amendment bill assent is obligatory, following the 24th Amendment.',
            ],
            [
              'Ordinances (Article 123)',
              'When Parliament is not in session and the President is satisfied that immediate action is needed, an ordinance may be promulgated with the same force as an Act. It must be laid before both Houses when they reassemble and ceases to operate six weeks after that unless approved earlier. Repeated re-promulgation to avoid the legislature has been held by the Supreme Court to be a fraud on the Constitution.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'What makes a bill a money bill',
          text:
            'Article 110 lists the matters exhaustively — the imposition or regulation of a tax, borrowing by the government, custody of the Consolidated Fund or Contingency Fund, appropriation from the Consolidated Fund, declaring an expenditure to be charged on it, receipt of money into or issue from it, and matters incidental to these. A bill is a money bill only if it deals with nothing but these subjects. A bill merely involving expenditure is a financial bill, not a money bill.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'financial',
      heading: 'Financial procedure',
      eyebrow: 'Budget, funds and cut motions',
      intro:
        'Control of money is the oldest function of any legislature, and the Constitution keeps it firmly with the Lok Sabha. This section supplies the terms the budget questions turn on.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Annual Financial Statement',
              'The Constitution never uses the word "budget". Article 112 requires the President to cause the estimated receipts and expenditure of the government for each financial year to be laid before Parliament as the Annual Financial Statement. It distinguishes expenditure charged on the Consolidated Fund, which is not voted, from other expenditure, which is.',
            ],
            [
              'The three funds',
              'The Consolidated Fund of India (Article 266) receives all revenues and loans and no money may be drawn from it except by law. The Public Account (also Article 266) holds money the government merely holds in trust, such as provident funds and small savings, and needs no parliamentary appropriation. The Contingency Fund (Article 267) is at the disposal of the President for unforeseen expenditure, and is later recouped.',
            ],
            [
              'Charged expenditure',
              'Expenditure charged on the Consolidated Fund is not put to a vote, though it may be discussed. It includes the emoluments of the President, the salaries of the Speaker and Deputy Speaker and the Chairman and Deputy Chairman, the salaries and pensions of Supreme Court and High Court judges and of the Comptroller and Auditor General, and the debt charges of the government.',
            ],
            [
              'Cut motions',
              'Moved in the Lok Sabha on demands for grants. A policy cut reduces the demand to one rupee and signals disapproval of the underlying policy. An economy cut proposes a specified reduction to effect economy. A token cut reduces the demand by one hundred rupees to air a specific grievance.',
            ],
            [
              'Grants of various kinds',
              'A vote on account allows expenditure to continue pending the passing of the budget. An interim budget is presented when a full budget cannot be, typically in an election year. Supplementary, additional, excess, exceptional and token grants each meet a different shortfall, and the Public Accounts Committee scrutinises excess grants.',
            ],
            [
              'The Comptroller and Auditor General',
              'Appointed under Article 148, with a term of six years or until the age of sixty-five, whichever is earlier, and removable only in the manner of a Supreme Court judge. Ambedkar described the office as the most important under the Constitution. The CAG audits after the money is spent, which is why the office is described as an agent of Parliament rather than of the executive.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'devices',
      heading: 'Parliamentary devices',
      eyebrow: 'Questions, motions and committees',
      intro:
        'These are the instruments by which the House holds the executive to account between elections, and each has a precise meaning that questions test.',
      blocks: [
        {
          type: 'table',
          caption: 'Motions and what each does',
          head: ['Device', 'Purpose', 'Point usually tested'],
          rows: [
            ['Question Hour', 'The first hour of a sitting, in which ministers answer members\' questions', 'Starred questions get an oral answer and supplementaries; unstarred get a written answer; short-notice questions need less than ten days\' notice.'],
            ['Zero Hour', 'The period immediately after Question Hour, for raising urgent matters without notice', 'An Indian innovation, not mentioned in the rules of procedure at all.'],
            ['Adjournment motion', 'To set aside normal business and discuss a definite matter of urgent public importance', 'Available in the Lok Sabha only, and involves an element of censure, which is why it is used sparingly.'],
            ['No-confidence motion', 'To remove the Council of Ministers', 'Lok Sabha only; needs the support of at least fifty members to be admitted; no reasons need be stated.'],
            ['Censure motion', 'To express disapproval of a specific policy or minister', 'Must state the grounds, may be moved against an individual minister, and its passage does not compel resignation of the government.'],
            ['Calling attention', 'To call a minister\'s attention to a matter of urgent public importance and invite a statement', 'An Indian innovation like Zero Hour, and unlike an adjournment motion it does not carry censure.'],
            ['Privilege motion', 'To allege a breach of parliamentary privilege by a minister', 'Its purpose is to censure the minister concerned.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why committees matter',
              'Parliament sits for a limited number of days and cannot examine every proposal in detail on the floor, so the substantive scrutiny happens in committees. They are described as miniature legislatures, and they work without the party theatre of the chamber.',
            ],
            [
              'Public Accounts Committee',
              'Examines the audit reports of the CAG and the appropriation accounts — that is, whether money was spent as Parliament authorised. It has twenty-two members, fifteen from the Lok Sabha and seven from the Rajya Sabha, and by convention the chairman since 1967 has been from the opposition. A minister cannot be a member.',
            ],
            [
              'Estimates Committee',
              'Thirty members, all from the Lok Sabha. It examines the estimates in the budget and suggests economies — scrutiny before the money is spent, which is why it is called the continuous economy committee.',
            ],
            [
              'Committee on Public Undertakings',
              'Twenty-two members, fifteen from the Lok Sabha and seven from the Rajya Sabha, examining the accounts and working of public sector enterprises.',
            ],
            [
              'Departmentally related standing committees',
              'Twenty-four committees covering the ministries, each with thirty-one members — twenty-one from the Lok Sabha and ten from the Rajya Sabha. They examine demands for grants and bills referred to them, and they are where most detailed legislative scrutiny now happens.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'states',
      heading: 'State legislatures',
      eyebrow: 'Assembly and Council',
      intro:
        'The state legislature mirrors Parliament with important differences, and the differences are exactly what gets asked.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Structure',
              'Every state has a Legislative Assembly, the Vidhan Sabha. Only some states also have a Legislative Council, the Vidhan Parishad, making them bicameral. Article 169 allows Parliament to create or abolish a Council if the Assembly passes a resolution by a special majority — so the number of bicameral states changes from time to time and should be checked rather than memorised.',
            ],
            [
              'Legislative Assembly',
              'Maximum strength 500 and minimum 60, with exceptions specified for smaller states. Members are directly elected for five years, subject to earlier dissolution. The presiding officer is the Speaker, elected by the House.',
            ],
            [
              'Legislative Council',
              'Its strength cannot exceed one-third of the Assembly\'s, and cannot be fewer than forty. It is a permanent body with one-third retiring every second year. Its composition is unusual: roughly one-third elected by local bodies, one-third by the Assembly, one-twelfth by graduates, one-twelfth by teachers, and about one-sixth nominated by the Governor for distinction in literature, science, art, cooperative movement and social service.',
            ],
            [
              'The Council is much weaker than the Rajya Sabha',
              'It can delay an ordinary bill by no more than about four months in total, and the Assembly can then pass it again and have it sent to the Governor regardless. There is no joint sitting because none is needed. The Council cannot remove the state government, and it has no equivalent of Articles 249 or 312.',
            ],
            [
              'The Governor\'s role',
              'A bill passed by the legislature goes to the Governor, who may assent, withhold assent, return it for reconsideration, or reserve it for the President\'s consideration under Article 200. The power of reservation has no parallel at the Union level and is one of the features that makes Indian federalism asymmetric.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Reading the Union and state material together',
          text:
            'Wherever a rule differs between Parliament and a state legislature, learn the pair rather than either alone — money bill and Speaker\'s certificate are the same at both levels, the deadlock mechanism is completely different, and the Governor has a reservation power the President does not. Questions almost always exploit exactly these asymmetries.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A bill imposing a new tax is passed by the Lok Sabha. The Rajya Sabha keeps it for twenty days. What happens?',
      steps: [
        'A bill dealing only with taxation is a money bill under Article 110, certified as such by the Speaker.',
        'Article 109 requires the Rajya Sabha to return a money bill within fourteen days, with or without recommendations.',
        'If it fails to do so, the bill is deemed to have been passed by both Houses at the end of that period.',
      ],
      answer: 'It is deemed passed by both Houses after fourteen days — the delay has no effect.',
    },
    {
      q: 'Can a joint sitting be called to resolve a deadlock over a constitutional amendment bill?',
      steps: [
        'Article 108 provides for a joint sitting on ordinary bills.',
        'It expressly does not apply to money bills, and constitutional amendment bills are governed separately by Article 368.',
        'Article 368 requires each House to pass the bill by a special majority separately, so a deadlock simply defeats the bill.',
      ],
      answer: 'No — a joint sitting is available for ordinary bills only.',
    },
    {
      q: 'Which two powers does the Rajya Sabha have that the Lok Sabha does not?',
      steps: [
        'Both derive from the Rajya Sabha\'s role as the House representing the states.',
        'Under Article 249 it can resolve, by two-thirds of members present and voting, that Parliament may legislate on a State List subject in the national interest.',
        'Under Article 312 it can similarly resolve to create a new All India Service.',
      ],
      answer: 'Legislating on a State List subject under Article 249, and creating an All India Service under Article 312.',
    },
    {
      q: 'The Lok Sabha is dissolved. Which pending bills lapse?',
      steps: [
        'A bill pending in the Lok Sabha lapses, as does one passed by the Lok Sabha but still pending in the Rajya Sabha.',
        'A bill pending in the Rajya Sabha and not yet passed by the Lok Sabha does not lapse, because that House is never dissolved.',
        'A bill for which the President has already notified a joint sitting also survives.',
      ],
      answer: 'The first two lapse; a bill pending only in the Rajya Sabha, and one already notified for a joint sitting, do not.',
    },
    {
      q: 'What is the difference between a censure motion and a no-confidence motion?',
      steps: [
        'A no-confidence motion is directed at the Council of Ministers as a whole, needs no reasons, and if passed the government must resign.',
        'A censure motion must state its grounds and may be directed at an individual minister or at a specific policy.',
        'Passing a censure motion does not oblige the government to resign, though it is a serious political blow.',
      ],
      answer: 'A no-confidence motion removes the government; a censure motion expresses disapproval without removing it.',
    },
    {
      q: 'A cut motion reduces a demand for grant to one rupee. What kind is it and what does it mean?',
      steps: [
        'There are three kinds of cut motion — policy, economy and token.',
        'A reduction to one rupee is the disapproval-of-policy cut, the strongest of the three.',
        'An economy cut proposes a specific saving; a token cut of one hundred rupees airs a particular grievance.',
      ],
      answer: 'A policy cut — it signals disapproval of the policy underlying the demand.',
    },
    {
      q: 'Why is the Public Accounts Committee usually chaired by an opposition member?',
      steps: [
        'The committee examines whether money was spent as Parliament authorised, using the CAG\'s audit reports.',
        'That is inherently a scrutiny of the government of the day.',
        'By a convention followed since 1967, the chairmanship goes to a member of the opposition so the scrutiny is not conducted by those being scrutinised.',
      ],
      answer: 'By convention since 1967, so that scrutiny of government spending is not led by the government itself.',
    },
    {
      q: 'A member of the Lok Sabha votes against the party whip. What follows?',
      steps: [
        'Voting contrary to a whip is a ground of disqualification under the Tenth Schedule, inserted by the 52nd Amendment.',
        'The defence of a split by one-third of the party was removed by the 91st Amendment in 2003; only a merger by two-thirds now protects the member.',
        'The presiding officer decides the question, and that decision is open to judicial review.',
      ],
      answer: 'Disqualification under the anti-defection law, decided by the Speaker and reviewable by the courts.',
    },
  ],

  practice: [
    {
      q: 'Parliament of India consists of:',
      options: ['The two Houses only', 'The Lok Sabha alone', 'The President, the Prime Minister and the two Houses', 'The President and the two Houses'],
      answer: 3,
      explain: 'Article 79 makes the President part of Parliament, though the President is not a member of either House.',
    },
    {
      q: 'A money bill can be introduced:',
      options: ['In either House', 'At a joint sitting', 'In the Rajya Sabha only', 'In the Lok Sabha only'],
      answer: 3,
      explain: 'Article 110 restricts introduction to the Lok Sabha, and only on the recommendation of the President.',
    },
    {
      q: 'The Rajya Sabha must return a money bill within:',
      options: ['Seven days', 'Six months', 'One month', 'Fourteen days'],
      answer: 3,
      explain: 'Failing that, the bill is deemed passed by both Houses at the end of the period.',
    },
    {
      q: 'A joint sitting of the two Houses is presided over by the:',
      options: ['President', 'Vice-President', 'Speaker of the Lok Sabha', 'Prime Minister'],
      answer: 2,
      explain: 'Article 118 provides that the Speaker presides over a joint sitting summoned under Article 108.',
    },
    {
      q: 'The anti-defection provisions are contained in which Schedule?',
      options: ['Ninth', 'Tenth', 'Eleventh', 'Twelfth'],
      answer: 1,
      explain: 'The Tenth Schedule, inserted by the 52nd Amendment in 1985 and modified by the 91st in 2003.',
    },
    {
      q: 'How many times has a joint sitting of Parliament been held?',
      options: ['Once', 'Twice', 'Three times', 'Five times'],
      answer: 2,
      explain: 'For the Dowry Prohibition Bill in 1961, the Banking Service Commission (Repeal) Bill in 1978 and the Prevention of Terrorism Bill in 2002.',
    },
    {
      q: 'The term "budget" appears in the Constitution as:',
      options: ['Annual Financial Statement', 'Union Budget', 'Appropriation Statement', 'Demand for Grants'],
      answer: 0,
      explain: 'Article 112 uses the phrase Annual Financial Statement; the word "budget" is not used in the Constitution at all.',
    },
    {
      q: 'The Comptroller and Auditor General is appointed under Article:',
      options: ['Article 76', 'Article 148', 'Article 280', 'Article 324'],
      answer: 1,
      explain: 'Article 148. Article 76 is the Attorney General, 280 the Finance Commission and 324 the Election Commission.',
    },
    {
      q: 'Zero Hour in the Indian Parliament is:',
      options: ['Provided for in Article 108', 'Mentioned in the rules of procedure', 'An Indian innovation not mentioned in the rules', 'A device of the Rajya Sabha only'],
      answer: 2,
      explain: 'It follows Question Hour by convention and finds no place in the written rules of procedure.',
    },
    {
      q: 'A no-confidence motion can be moved in:',
      options: ['The Lok Sabha only', 'The Rajya Sabha only', 'Either House', 'A joint sitting'],
      answer: 0,
      explain: 'The Council of Ministers is collectively responsible to the Lok Sabha alone under Article 75(3).',
    },
    {
      q: 'The maximum strength of the Rajya Sabha is:',
      options: ['238', '245', '250', '552'],
      answer: 2,
      explain: 'Up to 238 representing states and union territories plus 12 nominated members. The present strength is 245.',
    },
    {
      q: 'The nomination of two Anglo-Indian members to the Lok Sabha was discontinued by the:',
      options: ['101st Amendment', '102nd Amendment', '104th Amendment', '106th Amendment'],
      answer: 2,
      explain: 'The 104th Amendment ended that nomination with effect from January 2020, while extending SC and ST seat reservation.',
    },
    {
      q: 'The Estimates Committee consists of members drawn from:',
      options: ['The Lok Sabha only', 'The Rajya Sabha only', 'Both Houses equally', 'Both Houses in a 15:7 ratio'],
      answer: 0,
      explain: 'All thirty members come from the Lok Sabha. The Public Accounts Committee and the Committee on Public Undertakings draw fifteen and seven from the two Houses.',
    },
    {
      q: 'An ordinance promulgated under Article 123 ceases to operate after Parliament reassembles unless approved within:',
      options: ['Two weeks', 'Six weeks', 'Three months', 'Six months'],
      answer: 1,
      explain: 'Six weeks from reassembly, or earlier if disapproved by resolution of both Houses.',
    },
    {
      q: 'Which expenditure is charged on the Consolidated Fund and therefore not voted by Parliament?',
      options: ['Salaries of Supreme Court judges', 'Defence procurement', 'Salaries of ministers', 'Centrally sponsored schemes'],
      answer: 0,
      explain: 'Charged expenditure also covers the President\'s emoluments, the CAG\'s salary and the debt charges of the government.',
    },
    {
      q: 'A Legislative Council can be created or abolished by Parliament under Article 169 if the state Legislative Assembly passes a resolution by:',
      options: ['A simple majority', 'A special majority', 'A two-thirds majority of the whole House', 'Unanimity'],
      answer: 1,
      explain: 'A special majority of the Assembly is required, after which Parliament may legislate; the Council itself has no say.',
    },
  ],

  faqs: [
    {
      q: 'Why is the Rajya Sabha called a permanent House?',
      a: 'Because it is never dissolved. One-third of its members retire every second year and are replaced, so the House has a continuous existence even when the Lok Sabha is dissolved. Each member serves a six-year term. This is why a bill pending only in the Rajya Sabha does not lapse on dissolution of the Lok Sabha.',
    },
    {
      q: 'What exactly makes a bill a money bill?',
      a: 'Article 110 gives an exhaustive list — taxation, government borrowing, custody of and payments into or out of the Consolidated Fund or Contingency Fund, appropriation, and matters incidental to these. A bill qualifies only if it deals with nothing else. A bill that merely involves spending money is a financial bill and does not attract the money-bill privilege. The Speaker certifies the classification, and that certificate is final.',
    },
    {
      q: 'Can the President refuse assent to a bill?',
      a: 'On an ordinary bill the President may withhold assent or return it for reconsideration, but if both Houses pass it again, with or without amendment, assent must be given. On a money bill assent may be given or withheld but the bill cannot be returned. On a constitutional amendment bill assent is obligatory, since the 24th Amendment removed any discretion.',
    },
    {
      q: 'Is the Speaker required to resign from the party?',
      a: 'There is no constitutional requirement to do so, and in Indian practice Speakers generally retain their party membership, unlike the British convention. The Speaker is expected to act impartially, and votes only to break a tie. The absence of a formal severance is a recurring subject of reform debate.',
    },
    {
      q: 'What is the difference between adjournment, prorogation and dissolution?',
      a: 'Adjournment suspends a sitting for a stated time and is done by the presiding officer. Prorogation ends a session and is done by the President, though pending business does not lapse. Dissolution ends the life of the Lok Sabha itself, requires a fresh general election, and causes most pending bills to lapse. The Rajya Sabha is never dissolved.',
    },
    {
      q: 'Why are parliamentary committees described as miniature legislatures?',
      a: 'Because the detailed work of examining bills, estimates and audit reports cannot be done on the floor of a House that sits for a limited number of days. Committees are smaller, meet in private, work across party lines with less theatre, and reflect the party composition of the House — hence the description.',
    },
    {
      q: 'How is the state Legislative Council different from the Rajya Sabha?',
      a: 'Far weaker. It can delay an ordinary bill by only about four months in total, after which the Assembly can pass it again and send it to the Governor regardless. There is no joint sitting because none is needed, it cannot remove the state government, and it has nothing corresponding to Articles 249 or 312. Its composition is also unusual, with seats for graduates and teachers.',
    },
    {
      q: 'Which facts in this topic change between exam cycles?',
      a: 'The number of states with a Legislative Council, since Councils are created and abolished from time to time; the commencement of the 106th Amendment on women\'s reservation, which is tied to a delimitation exercise; and, of course, the current holders of the offices. The article numbers, majorities, time limits and House strengths do not change.',
    },
    {
      q: 'How much of polity comes from Parliament alone?',
      a: 'Roughly a third of the polity questions in most papers. UPSC Prelims typically carries four to six on Parliament and the legislature, SSC CGL three to five, and state PSC prelims four to seven once the state legislature is included. It is the densest single block in the subject.',
    },
    {
      q: 'Should I memorise article numbers?',
      a: 'For the frequently asked ones, yes — 110 for money bills, 108 for joint sittings, 112 for the budget, 123 for ordinances, 148 for the CAG, 75 for the Council of Ministers. SSC and state papers ask for them directly. For the rest it is enough to know the rule; UPSC tends to test the substance rather than the number.',
    },
  ],

  related: [
    { label: 'Executive & Council of Ministers', to: '/study-material/polity/executive/' },
    { label: 'Judiciary & Federalism', to: '/study-material/polity/judiciary-federalism/' },
    { label: 'Constitution', to: '/study-material/constitution/' },
    { label: 'Modern India', to: '/study-material/history/modern-india/' },
    { label: 'All Polity', to: '/study-material/polity/' },
  ],
}
