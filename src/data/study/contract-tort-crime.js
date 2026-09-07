/**
 * Contract, Tort and Crime —
 * /study-material/legal-reasoning/contract-tort-crime/
 *
 * The substantive law that legal reasoning passages are most often built on.
 * Learnt as vocabulary and structure, so that a passage can be read quickly —
 * never as a source of answers, which must always come from the principle given.
 */
export default {
  subject: 'legal-reasoning',
  subjectName: 'Legal Reasoning',
  slug: 'contract-tort-crime',
  title: 'Contract, Tort & Crime',
  seoTitle: 'Contract Tort and Criminal Law for CLAT | Concepts, Cases & Practice',
  metaDescription:
    'Complete substantive law study material for CLAT, AILET and law entrance exams — contract formation, validity and remedies, general and specific torts.',
  readMinutes: 25,
  lead: [
    'Three branches of law supply the great majority of legal reasoning passages: contract, tort and crime. Knowing their structure is what allows you to read a passage in three minutes rather than six, because you are not decoding the vocabulary while also applying the principle.',
    'The warning that governs the whole page bears repeating. This material is for reading speed, not for answers. If a passage states a principle that differs from the law as set out here — and it often will, because passages simplify — the principle in the passage governs completely. Knowing the real law is an asset only so long as you never answer from it.',
  ],

  weightage: [
    { exam: 'CLAT UG Legal Reasoning', count: 'Most passages', note: 'Contract, tort and criminal law between them supply the majority of the fact situations.' },
    { exam: 'AILET', count: 'Substantial', note: 'Historically with more direct questions on substantive law than CLAT.' },
    { exam: 'SLAT and state law entrances', count: 'A major section', note: 'Several retain the standalone principle-and-fact format built on these branches.' },
    { exam: 'Judiciary preliminary examinations', count: 'The core syllabus', note: 'Tested in far greater depth, with section numbers and case law.' },
    { exam: 'UPSC and general awareness', count: 'Occasionally', note: 'Consumer protection and criminal law reform appear as current affairs.' },
  ],

  contents: [
    { icon: 'doc', title: 'Contract: formation', sub: 'Offer, acceptance, consideration', href: '#formation' },
    { icon: 'search', title: 'Contract: validity', sub: 'Capacity, consent and legality', href: '#validity' },
    { icon: 'refresh', title: 'Breach and remedies', sub: 'Discharge and what follows', href: '#remedies' },
    { icon: 'layers', title: 'Tort: general principles', sub: 'The foundations', href: '#tort' },
    { icon: 'bell', title: 'Specific torts', sub: 'Negligence, nuisance, defamation', href: '#torts' },
    { icon: 'target', title: 'Criminal law', sub: 'Elements, stages and defences', href: '#crime' },
    { icon: 'user', title: 'Consumer and family law', sub: 'Applied areas', href: '#applied' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'formation',
      heading: 'Contract: formation',
      eyebrow: 'Offer, acceptance, consideration',
      intro:
        'The Indian Contract Act, 1872, governs. A contract is an agreement enforceable by law, and an agreement is an offer accepted — so the elements below are what turn a promise into an obligation.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The essentials',
              'An offer and its acceptance; an intention to create legal relations; lawful consideration; capacity of the parties; free consent; a lawful object; certainty of terms; possibility of performance; and that the agreement is not one expressly declared void. All must be present. Social and domestic arrangements generally fail the second element, which is why an agreement to meet a friend for dinner is not a contract.',
            ],
            [
              'Offer and invitation to offer',
              'An offer is a definite proposal capable of acceptance. An invitation to offer merely invites others to make offers — the display of goods in a shop, an advertisement, a prospectus, an auction notice. The distinction matters because a shopkeeper is not bound to sell at a displayed price; the customer makes the offer at the counter, which the shopkeeper may accept or decline.',
            ],
            [
              'Acceptance',
              'Must be absolute and unqualified, and communicated. An acceptance with a variation is a counter-offer, which rejects the original. Silence cannot be prescribed as acceptance — an offeror cannot say "if I hear nothing I shall assume you agree". Acceptance must be made in any prescribed manner, and must be made while the offer is still open.',
            ],
            [
              'Communication and revocation',
              'An offer is complete when it comes to the knowledge of the offeree. Acceptance is complete against the proposer when it is posted, and against the acceptor when it reaches the proposer — so a posted acceptance binds the offeror even before it arrives. A revocation must reach the other party before acceptance is complete against the revoking party, which is why an offer can be revoked only until the acceptance is posted.',
            ],
            [
              'Consideration',
              'Something given or promised in return, at the desire of the promisor. Indian law recognises past, present and future consideration, unlike English law, which does not accept past consideration. It need not be adequate — the law does not weigh the bargain — but it must be real and of some value. An agreement without consideration is void, subject to the exceptions in Section 25: a written and registered promise made out of natural love and affection between parties in a near relation, a promise to compensate for a past voluntary service, and a written promise to pay a time-barred debt.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Privity of contract',
          text:
            'Only a party to a contract can sue on it. A stranger to the contract acquires no rights under it, however much it was intended to benefit them, and however clearly. The rule has recognised exceptions — a beneficiary under a trust, a family settlement, an agreement creating a charge on property — but the general rule is what fact situations are built on, and it frequently produces the outcome that a sympathetic third party recovers nothing.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'validity',
      heading: 'Contract: validity',
      eyebrow: 'Capacity, consent and legality',
      intro:
        'Even where offer, acceptance and consideration are present, an agreement may be void or voidable. Most contract fact situations turn on one of the elements in this section.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Capacity',
              'A person is competent to contract if he has attained majority, is of sound mind, and is not disqualified by any law. A minor\'s agreement is void ab initio — void from the beginning and incapable of ratification on attaining majority — following Mohori Bibee v. Dharmodas Ghose. A minor may nonetheless be supplied with necessaries and the supplier can recover from the minor\'s property, though not from the minor personally.',
            ],
            [
              'Free consent',
              'Consent is free when not caused by coercion, undue influence, fraud, misrepresentation or mistake. Coercion is committing or threatening an act forbidden by law, or unlawfully detaining property. Undue influence arises where one party is in a position to dominate the will of another and uses it to obtain an unfair advantage. Fraud requires an intention to deceive; misrepresentation is an innocent false statement.',
            ],
            [
              'Void and voidable',
              'Where consent is caused by coercion, undue influence, fraud or misrepresentation, the agreement is voidable at the option of the party whose consent was so caused — that party may affirm it or set it aside. Where both parties are under a mistake as to a matter of fact essential to the agreement, the agreement is void. A unilateral mistake generally does not affect validity.',
            ],
            [
              'Unlawful object and consideration',
              'An agreement is void if its object or consideration is forbidden by law, would defeat the provisions of any law, is fraudulent, involves injury to person or property, or is immoral or opposed to public policy. An illegal agreement is void and additionally taints collateral transactions, which a merely void agreement does not.',
            ],
            [
              'Agreements expressly declared void',
              'Agreements in restraint of marriage; in restraint of trade, subject to the exception for the sale of goodwill and to statutory exceptions; in restraint of legal proceedings; agreements whose meaning is uncertain; and wagering agreements. A contract of insurance is not a wager, because the insured has an insurable interest — a distinction fact situations exploit.',
            ],
            [
              'Quasi contracts',
              'Obligations imposed by law where no contract exists, resting on the principle that no one should be unjustly enriched at another\'s expense. They include supply of necessaries to a person incapable of contracting, payment by an interested person of money another was bound to pay, liability of a person enjoying the benefit of a non-gratuitous act, responsibility of a finder of goods, and money paid or things delivered by mistake or under coercion.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'remedies',
      heading: 'Breach and remedies',
      eyebrow: 'Discharge and what follows',
      intro:
        'How a contract comes to an end, and what the injured party gets when the other side fails to perform.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Discharge of a contract',
              'By performance, when both parties do what they promised. By mutual agreement, through novation, rescission, alteration or waiver. By impossibility, where performance becomes impossible or unlawful after the contract is made — the doctrine of frustration. By lapse of time, where the limitation period expires. By operation of law, as on insolvency. And by breach.',
            ],
            [
              'Frustration',
              'A contract becomes void when an act becomes impossible or unlawful because of an event the promisor could not prevent. Destruction of the subject matter, death or incapacity in a contract of personal service, a change in the law, and the non-occurrence of an event that was the foundation of the contract are the standard instances. Mere commercial difficulty or increased cost is not frustration, and fact situations are built on exactly that distinction.',
            ],
            [
              'Anticipatory breach',
              'Where a party declares before the due date that he will not perform. The injured party may treat the contract as broken immediately and sue, or may wait for the date of performance — but if he waits, the contract remains alive for both parties and he takes the risk of intervening frustration.',
            ],
            [
              'Damages',
              'The primary remedy. Compensation is recoverable for loss naturally arising in the usual course of things from the breach, and for loss the parties knew when contracting to be likely to result — the rule in Hadley v. Baxendale. Remote and indirect loss is not recoverable. The injured party is bound to mitigate, and cannot recover for loss he could reasonably have avoided.',
            ],
            [
              'Other remedies',
              'Specific performance, an order to actually perform, granted under the Specific Relief Act where damages are inadequate — typically for land, which is treated as unique. Injunction, restraining a breach. Rescission, setting the contract aside. Quantum meruit, payment for what has been done where the contract is discharged partway through without the claimant\'s fault.',
            ],
            [
              'Liquidated damages and penalty',
              'Where the contract itself fixes a sum payable on breach, Indian law allows the court to award reasonable compensation not exceeding that sum, whether the amount is described as liquidated damages or as a penalty. This differs from English law, which distinguishes sharply between the two, and passages sometimes set the difference.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'tort',
      heading: 'Tort: general principles',
      eyebrow: 'The foundations',
      intro:
        'A tort is a civil wrong, other than a breach of contract, for which the remedy is an action for unliquidated damages. It is largely uncodified in India and rests on judicial decisions.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Essentials of a tort',
              'A wrongful act or omission; a legal damage caused by it; and a legal remedy in the form of an action for unliquidated damages. Unliquidated means the amount is not fixed in advance but is assessed by the court, which distinguishes tort from contract, where the parties often fix it.',
            ],
            [
              'Damnum sine injuria',
              'Damage without legal injury — actual loss suffered where no legal right has been violated. It gives no cause of action. A shopkeeper ruined by lawful competition from a new rival next door suffers real loss and has no remedy, because no right of his has been infringed.',
            ],
            [
              'Injuria sine damno',
              'Legal injury without actual damage — the violation of a legal right without any loss following. It is actionable, because the law protects the right itself. The classic illustration is a person wrongfully prevented from voting whose preferred candidate wins anyway. Fact situations are frequently built on the contrast between the two maxims.',
            ],
            [
              'Strict liability',
              'Under the rule in Rylands v. Fletcher, a person who brings and keeps on his land anything likely to do mischief if it escapes is liable for the damage that follows from its escape, regardless of care. It requires a dangerous thing, a non-natural use of land and an escape. Its exceptions are the plaintiff\'s own fault, an act of God, the act of a third party, consent, and statutory authority.',
            ],
            [
              'Absolute liability',
              'Laid down in M. C. Mehta v. Union of India after the oleum gas leak. An enterprise engaged in a hazardous or inherently dangerous activity is absolutely liable for harm resulting from it, with no exceptions at all — not even those available under Rylands v. Fletcher. The distinction between strict and absolute liability is among the most frequently examined points in tort.',
            ],
            [
              'Vicarious liability',
              'Liability of one person for the tort of another, arising from their relationship. An employer is liable for torts committed by an employee in the course of employment, though not where the employee is on a frolic of his own. A principal is liable for the acts of an agent within the scope of authority, and partners are liable for one another\'s acts in the ordinary course of the firm\'s business.',
            ],
            [
              'General defences',
              'Volenti non fit injuria, where the plaintiff consented to the risk with full knowledge of it. Act of God, an extraordinary natural event that could not be foreseen or guarded against. Inevitable accident. Necessity. The plaintiff\'s own wrongful act. And statutory authority, where the act complained of was authorised by legislation.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'torts',
      heading: 'Specific torts',
      eyebrow: 'Negligence, nuisance, defamation',
      intro:
        'Five torts supply most of the fact situations, and each has a clear set of elements that a passage will test one at a time.',
      blocks: [
        {
          type: 'table',
          caption: 'The specific torts',
          head: ['Tort', 'Elements', 'Defences and notes'],
          rows: [
            ['Negligence', 'A duty of care owed to the plaintiff; breach of that duty; and damage caused by the breach that is not too remote', 'The duty rests on the neighbour principle from Donoghue v. Stevenson — you owe a duty to persons so closely and directly affected that you ought reasonably to have them in contemplation. Contributory negligence reduces damages; res ipsa loquitur shifts the burden where the accident itself implies negligence.'],
            ['Nuisance', 'Unlawful interference with a person\'s use or enjoyment of land, or of a right over it', 'Private nuisance affects an individual and is actionable by him. Public nuisance affects the community and is ordinarily a criminal matter, actionable civilly only by someone suffering special damage beyond that suffered generally.'],
            ['Trespass to land', 'Unauthorised entry onto land in another\'s possession', 'Actionable per se, without proof of damage — an instance of injuria sine damno. Entry may be by a person, or by projecting or throwing something onto the land.'],
            ['Defamation', 'A statement lowering the plaintiff in the estimation of right-thinking members of society; referring to the plaintiff; and published to at least one third person', 'Libel is in permanent form and slander is spoken. Defences are truth or justification, fair comment on a matter of public interest, and privilege, whether absolute as in parliamentary and judicial proceedings, or qualified.'],
            ['Assault and battery', 'Assault is an act causing reasonable apprehension of immediate harmful contact; battery is the actual contact', 'Assault can occur without any touching, and battery without any prior apprehension — a blow from behind is battery without assault. False imprisonment is total restraint of liberty without lawful justification.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Malicious prosecution',
              'Requires prosecution by the defendant, termination in the plaintiff\'s favour, absence of reasonable and probable cause, malice, and damage. All five must be present, which makes it a favourite for element-checking questions, since a fact pattern will satisfy four and omit the fifth.',
            ],
            [
              'Remoteness of damage',
              'A defendant is liable only for consequences that are not too remote. The modern test is reasonable foreseeability: liability extends to damage of a kind a reasonable person would have foreseen, even if its extent was greater than expected. The eggshell skull rule provides that a defendant takes his victim as he finds him, so unusual susceptibility does not reduce liability.',
            ],
            [
              'Contributory negligence',
              'Where the plaintiff\'s own carelessness contributed to the harm, damages are reduced in proportion to his share of responsibility rather than defeated entirely. This apportionment is the modern position; the older rule treating it as a complete defence is what fact situations sometimes test.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'crime',
      heading: 'Criminal law',
      eyebrow: 'Elements, stages and defences',
      intro:
        'Now governed by the Bharatiya Nyaya Sanhita, which replaced the Indian Penal Code with effect from 1 July 2024. The concepts are unchanged; the section numbers are not, so learn the concepts.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The two elements',
              'Actus reus, the guilty act, and mens rea, the guilty mind — actus non facit reum nisi mens sit rea. Both are generally required. The mental element varies by offence: intention, knowledge, rashness or negligence, and the offence definition specifies which. Strict liability offences, mostly regulatory, dispense with mens rea, and the statute must make that clear.',
            ],
            [
              'The four stages of a crime',
              'Intention, which alone is not punishable; preparation, which is generally not punishable except for a few grave offences; attempt, which is punishable; and commission. The line between preparation and attempt is where a large share of criminal law fact situations sit, and the test is whether the act was proximate to the offence rather than merely preparatory.',
            ],
            [
              'General exceptions',
              'Mistake of fact excuses; mistake of law does not. Accident without criminal intention while doing a lawful act by lawful means. Necessity, where harm is done to prevent greater harm. Infancy — a child below seven cannot commit an offence at all, and between seven and twelve is exempt if he has not attained sufficient maturity of understanding. Unsoundness of mind, where the person could not know the nature of the act or that it was wrong. Involuntary intoxication. Consent, within limits. Acts of judges and those acting under a court\'s authority. And private defence.',
            ],
            [
              'Private defence',
              'A person may defend his own body and property, and the body and property of any other person, against specified offences. The force used must be proportionate, and the right extends to causing death only in enumerated circumstances such as an assault reasonably causing apprehension of death or grievous hurt. There is no right of private defence against an act of a public servant acting in good faith, nor where there is time to seek the protection of the authorities.',
            ],
            [
              'Culpable homicide and murder',
              'All murder is culpable homicide; not all culpable homicide is murder. Culpable homicide becomes murder when the act is done with the intention of causing death, or with an intention or knowledge of a degree specified in the definition, unless one of the exceptions applies — grave and sudden provocation, exceeding the right of private defence, a public servant exceeding lawful power, a sudden fight without premeditation, and consent of a person above eighteen. The distinction is examined more often than any other in criminal law.',
            ],
            [
              'Offences against property',
              'Theft is dishonestly taking movable property out of another\'s possession without consent. Extortion is obtaining property by putting a person in fear of injury. Robbery is theft or extortion aggravated by violence or the fear of it. Dacoity is robbery committed by five or more persons acting together. Criminal breach of trust involves dishonest misappropriation of property entrusted to the accused, and cheating involves deception inducing the delivery of property.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'applied',
      heading: 'Consumer and family law',
      eyebrow: 'Applied areas',
      intro:
        'Two areas that recur in CLAT passages because they touch daily life and generate frequent legal news.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Consumer Protection Act, 2019',
              'Replaced the Act of 1986. A consumer is a person who buys goods or hires services for consideration, but not one who obtains them for resale or for a commercial purpose. The Act covers defects in goods, deficiency in services, unfair and restrictive trade practices, and overcharging. It introduced product liability, covering the manufacturer, seller and service provider, and created the Central Consumer Protection Authority to act against misleading advertisements.',
            ],
            [
              'Consumer redressal',
              'A three-tier structure: District Commissions, State Commissions and the National Commission, with jurisdiction allotted by the value of the goods or services. The forums are designed to be accessible — a complaint may be filed by the consumer, a registered consumer association, the government, or a group of consumers with the same interest, and complaints may be filed electronically and heard where the complainant resides.',
            ],
            [
              'Family law and personal laws',
              'Marriage, divorce, adoption, guardianship, maintenance and succession are governed by the personal law of the parties. The Hindu Marriage Act, 1955, applies to Hindus, Buddhists, Jains and Sikhs, and provides for conditions of marriage, restitution of conjugal rights, judicial separation and divorce, including by mutual consent. Muslim, Christian and Parsi personal laws govern their respective communities. The Special Marriage Act, 1954, provides a secular alternative available to any two persons regardless of religion.',
            ],
            [
              'Protective legislation',
              'The Protection of Women from Domestic Violence Act, 2005, provides civil remedies — protection orders, residence orders, monetary relief — for physical, sexual, verbal, emotional and economic abuse within a domestic relationship. The Dowry Prohibition Act, 1961, prohibits giving and taking dowry. The Sexual Harassment of Women at Workplace Act, 2013, gave statutory form to the Vishaka guidelines and requires an internal committee in every workplace of a specified size.',
            ],
            [
              'The uniform civil code debate',
              'Article 44 directs the state to endeavour to secure a uniform civil code throughout India. It is a Directive Principle and therefore not enforceable, and it remains the most-discussed unimplemented directive. Passages set on it typically ask you to apply a stated principle rather than to take a position, which is exactly where the temptation to answer from opinion is strongest.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'A shop displays a shirt marked at 500 rupees. A customer takes it to the counter and the shopkeeper refuses to sell. Is there a breach of contract?',
      steps: [
        'A contract requires an offer and its acceptance. The question is who made the offer.',
        'The display of goods with a price is an invitation to offer, not an offer. The customer makes the offer at the counter.',
        'The shopkeeper is free to accept or decline that offer, so no contract was formed and there is no breach.',
      ],
      answer: 'No — the display is an invitation to offer, so no contract came into existence.',
    },
    {
      q: 'A person of seventeen borrows money and signs a promissory note. On attaining eighteen he ratifies it. Is he bound?',
      steps: [
        'A minor\'s agreement is void ab initio — void from the very beginning, following Mohori Bibee v. Dharmodas Ghose.',
        'Something that never existed in law cannot be ratified, because ratification presupposes something capable of being confirmed.',
        'So he is not bound, and the ratification has no effect. A fresh agreement made after majority, supported by fresh consideration, would be a different matter.',
      ],
      answer: 'No — a minor\'s agreement is void ab initio and cannot be ratified.',
    },
    {
      q: 'A new shop opens next door and drives an existing shop out of business by lawful competition. Any remedy?',
      steps: [
        'The existing shopkeeper has suffered real financial loss, so there is damage.',
        'But no legal right of his has been infringed — nobody has a right to be free from lawful competition.',
        'This is damnum sine injuria, damage without legal injury, and it gives no cause of action.',
      ],
      answer: 'No remedy — damnum sine injuria.',
    },
    {
      q: 'What is the difference between strict and absolute liability?',
      steps: [
        'Strict liability comes from Rylands v. Fletcher: a person keeping a dangerous thing on his land in a non-natural use is liable if it escapes and causes damage, regardless of care — but subject to exceptions including act of God, the plaintiff\'s fault, the act of a third party, consent and statutory authority.',
        'Absolute liability comes from M. C. Mehta v. Union of India, decided after the oleum gas leak.',
        'It applies to enterprises in hazardous or inherently dangerous activities, and admits no exceptions at all — which is the whole point of the difference.',
      ],
      answer: 'Strict liability has recognised exceptions; absolute liability has none.',
    },
    {
      q: 'A delivery driver takes a fifteen-kilometre detour to visit a friend and injures a pedestrian. Is the employer liable?',
      steps: [
        'Vicarious liability makes an employer liable for torts committed by an employee in the course of employment.',
        'A substantial detour for a purely personal purpose takes the employee outside the course of employment — traditionally described as a frolic of his own.',
        'So the employer is not liable, even though the vehicle was the company\'s and the time was working time.',
      ],
      answer: 'No — the detour takes the act outside the course of employment.',
    },
    {
      q: 'A publisher prints a false statement damaging a person\'s reputation, honestly believing it to be true. Is honest belief a defence to defamation?',
      steps: [
        'The elements are a defamatory statement, reference to the plaintiff, and publication to a third person. All are satisfied.',
        'The recognised defences are truth or justification, fair comment on a matter of public interest, and privilege.',
        'Honest belief in the truth of a statement that is in fact false is none of these. It may reduce damages but it is not a defence, and this is a frequently set point.',
      ],
      answer: 'No — honest belief is not among the defences; only truth, fair comment and privilege are.',
    },
    {
      q: 'A contract becomes far more expensive to perform because of a sharp rise in raw material prices. Is it frustrated?',
      steps: [
        'Frustration applies where performance becomes impossible or unlawful after the contract is made, through an event the promisor could not prevent.',
        'Increased cost makes performance more onerous but not impossible.',
        'Commercial hardship, however severe, is not frustration, and the party remains bound. Fact situations are built precisely on this distinction.',
      ],
      answer: 'No — commercial difficulty is not impossibility, so the contract stands.',
    },
    {
      q: 'What distinguishes culpable homicide from murder?',
      steps: [
        'All murder is culpable homicide, but not all culpable homicide is murder — murder is the aggravated form.',
        'Culpable homicide becomes murder where the act is done with intention to cause death, or with an intention or knowledge of the specified degree.',
        'It falls back to culpable homicide not amounting to murder where an exception applies — grave and sudden provocation, exceeding private defence, a sudden fight without premeditation, or consent of an adult.',
      ],
      answer: 'Murder is aggravated culpable homicide; the exceptions reduce it back.',
    },
  ],

  practice: [
    {
      q: 'The display of goods in a shop with a price tag amounts to:',
      options: ['An offer', 'A concluded contract', 'An acceptance', 'An invitation to offer'],
      answer: 3,
      explain: 'The customer makes the offer at the counter, which the shopkeeper may accept or decline.',
    },
    {
      q: 'A minor\'s agreement in India is:',
      options: ['Voidable at the minor\'s option', 'Enforceable on attaining majority', 'Valid if beneficial', 'Void ab initio'],
      answer: 3,
      explain: 'Following Mohori Bibee v. Dharmodas Ghose; it cannot be ratified on attaining majority.',
    },
    {
      q: 'Consideration under Indian law:',
      options: ['Must be adequate', 'Must move from the promisee only', 'May be past, present or future', 'Must always be in money'],
      answer: 2,
      explain: 'Unlike English law, Indian law recognises past consideration. It need not be adequate but must be real.',
    },
    {
      q: 'An agreement caused by fraud is:',
      options: ['Void', 'Unenforceable by both parties', 'Illegal', 'Voidable at the option of the defrauded party'],
      answer: 3,
      explain: 'The same applies to coercion, undue influence and misrepresentation. A bilateral mistake of fact makes it void.',
    },
    {
      q: 'Damage without infringement of a legal right is expressed as:',
      options: ['Injuria sine damno', 'Damnum sine injuria', 'Res ipsa loquitur', 'Volenti non fit injuria'],
      answer: 1,
      explain: 'It gives no cause of action. Injuria sine damno — a right infringed without loss — is actionable.',
    },
    {
      q: 'Absolute liability differs from strict liability in that it:',
      options: ['Applies only to natural disasters', 'Admits no exceptions', 'Requires proof of negligence', 'Applies only to individuals'],
      answer: 1,
      explain: 'Laid down in M. C. Mehta v. Union of India after the oleum gas leak, for hazardous enterprises.',
    },
    {
      q: 'The neighbour principle in negligence comes from:',
      options: ['Rylands v. Fletcher', 'Donoghue v. Stevenson', 'Hadley v. Baxendale', 'Ashby v. White'],
      answer: 1,
      explain: 'You owe a duty to those so closely and directly affected that you ought reasonably to have them in contemplation.',
    },
    {
      q: 'Which is NOT a defence to defamation?',
      options: ['Truth or justification', 'Fair comment on a matter of public interest', 'Honest belief in a false statement', 'Absolute privilege'],
      answer: 2,
      explain: 'Honest belief may reduce damages but is not a defence, which is a frequently set point.',
    },
    {
      q: 'Trespass to land is actionable:',
      options: ['Only on proof of damage', 'Per se, without proof of damage', 'Only if the entry was violent', 'Only against the owner'],
      answer: 1,
      explain: 'It is an instance of injuria sine damno, where the right itself is protected.',
    },
    {
      q: 'Which stage of a crime is generally NOT punishable?',
      options: ['Attempt', 'Preparation', 'Commission', 'Abetment'],
      answer: 1,
      explain: 'Intention alone is also not punishable. Preparation is punishable only for a few grave offences.',
    },
    {
      q: 'The rule in Hadley v. Baxendale concerns:',
      options: ['Remoteness of damages in contract', 'Duty of care in negligence', 'Consideration', 'Strict liability'],
      answer: 0,
      explain: 'Loss recoverable is that arising naturally, or that the parties knew when contracting to be likely.',
    },
    {
      q: 'Robbery differs from theft in that it involves:',
      options: ['Five or more persons', 'Violence or the fear of it', 'Property entrusted to the accused', 'Deception'],
      answer: 1,
      explain: 'Dacoity requires five or more persons; criminal breach of trust involves entrusted property and cheating involves deception.',
    },
    {
      q: 'Under the Consumer Protection Act, 2019, a person who buys goods for resale is:',
      options: ['A consumer', 'Not a consumer', 'A consumer only for defects', 'A consumer only in the District Commission'],
      answer: 1,
      explain: 'Goods obtained for resale or for a commercial purpose fall outside the definition.',
    },
    {
      q: 'Specific performance is ordinarily granted where:',
      options: ['Damages would be an adequate remedy', 'Damages would be inadequate, as for land', 'The contract is voidable', 'The breach is anticipatory'],
      answer: 1,
      explain: 'Land is treated as unique, so a substitute cannot be bought with damages.',
    },
    {
      q: 'Contributory negligence in modern Indian law:',
      options: ['Defeats the claim entirely', 'Reduces damages in proportion to the plaintiff\'s responsibility', 'Is not recognised', 'Applies only to motor accidents'],
      answer: 1,
      explain: 'The older rule treated it as a complete defence, which is what fact situations sometimes test.',
    },
    {
      q: 'A contract becomes impossible to perform because the subject matter is destroyed. The contract is:',
      options: ['Voidable', 'Void, by frustration', 'Enforceable with damages', 'Suspended'],
      answer: 1,
      explain: 'Supervening impossibility discharges the contract. Mere increase in cost does not.',
    },
  ],

  faqs: [
    {
      q: 'Should I answer legal reasoning questions from this material?',
      a: 'No. Study it for reading speed, so that terminology does not slow you down, and answer only from the principle the passage supplies. Passages frequently simplify or modify the real law, and a candidate who corrects the passage from real knowledge gets the question wrong. Knowing the law is an asset only so long as it never becomes the source of the answer.',
    },
    {
      q: 'What is the difference between an offer and an invitation to offer?',
      a: 'An offer is a definite proposal capable of immediate acceptance, so acceptance concludes a contract. An invitation to offer merely invites others to make offers, which the inviter may then accept or decline. Shop displays, advertisements, prospectuses, tenders and auction notices are invitations to offer, which is why a shopkeeper is not bound to sell at a displayed price.',
    },
    {
      q: 'How does Indian contract law differ from English law on consideration?',
      a: 'Two ways that fact situations use. Indian law accepts past consideration as valid, whereas English law does not. And Indian law allows consideration to move from the promisee or from any other person, so a stranger to the consideration may sue, whereas English law requires it to move from the promisee. Both differences appear in comparative passages.',
    },
    {
      q: 'What separates strict liability from absolute liability?',
      a: 'Exceptions. Strict liability under Rylands v. Fletcher makes a person liable for the escape of a dangerous thing regardless of care, but allows defences — act of God, the plaintiff\'s own fault, the act of a stranger, consent and statutory authority. Absolute liability, from M. C. Mehta, applies to enterprises in hazardous activities and admits none of them. That absence of exceptions is the whole distinction.',
    },
    {
      q: 'What is the difference between damnum sine injuria and injuria sine damno?',
      a: 'Damnum sine injuria is damage without legal injury — real loss, but no legal right infringed, so no remedy. Lawful competition ruining a business is the standard example. Injuria sine damno is legal injury without damage — a right infringed with no loss following, which is actionable because the law protects the right itself. Trespass and a wrongful denial of the vote are the standard examples.',
    },
    {
      q: 'When does an employer escape vicarious liability?',
      a: 'When the employee was not acting in the course of employment. A wrongful act done while carrying out the job, even if done badly or against instructions, is usually within the course of employment. An act done for the employee\'s own purposes — a substantial detour, a personal errand, a private quarrel — is a frolic of his own, and the employer is not liable.',
    },
    {
      q: 'Is commercial hardship a ground for frustration?',
      a: 'No. Frustration requires performance to become impossible or unlawful, not merely more difficult or more expensive. A sharp rise in input costs, a fall in profitability or an unexpected shortage does not discharge the contract. This is one of the most frequently set distinctions in contract fact situations, because the hardship is usually described sympathetically.',
    },
    {
      q: 'What must I know about the 2024 criminal law change?',
      a: 'That the Indian Penal Code, the Criminal Procedure Code and the Indian Evidence Act were replaced with effect from 1 July 2024 by the Bharatiya Nyaya Sanhita, the Bharatiya Nagarik Suraksha Sanhita and the Bharatiya Sakshya Adhiniyam. The concepts — mens rea, culpable homicide, theft, cognisable offences, the FIR — carry over unchanged. The section numbers do not, so never quote one from older material.',
    },
    {
      q: 'Which branch supplies the most passages?',
      a: 'Tort and contract between them supply the majority, because their principles are compact enough to state in a sentence and their fact situations are drawn from everyday life. Criminal law follows. Constitutional law passages appear too but tend to be comprehension-heavy rather than application-heavy. If preparation time is short, tort deserves the largest share.',
    },
    {
      q: 'How deep should I go?',
      a: 'To the level of this page and no further. You need the elements of each concept, the standard defences, and the vocabulary — enough to read a passage without stopping. Section numbers, case citations and doctrinal detail belong to law school and to judiciary examinations, and time spent on them is time not spent on the application skill that actually earns the marks.',
    },
  ],

  related: [
    { label: 'Principles & Facts', to: '/study-material/legal-reasoning/legal-principles/' },
    { label: 'The Indian Legal System', to: '/study-material/legal-reasoning/legal-system/' },
    { label: 'Critical Reasoning', to: '/study-material/varc/critical-reasoning/' },
    { label: 'Fundamental Rights & Duties', to: '/study-material/constitution/fundamental-rights/' },
    { label: 'All Legal Reasoning', to: '/study-material/legal-reasoning/' },
  ],
}
