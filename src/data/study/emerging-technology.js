/**
 * Emerging Technology — /study-material/science/emerging-technology/
 *
 * Computing, the internet, artificial intelligence, biotechnology, new
 * materials and the Indian digital-governance stack. The fastest-moving page
 * in the syllabus, so it is built on definitions and named missions rather
 * than on figures that will be stale within a cycle.
 */
export default {
  subject: 'science',
  subjectName: 'Science & Technology',
  slug: 'emerging-technology',
  title: 'Emerging Technology',
  seoTitle: 'Emerging Technology for Competitive Exams | AI, Biotech, IT Notes & Practice',
  metaDescription:
    'Complete emerging technology study material for UPSC, SSC, banking and state exams — computer fundamentals, the internet and cybersecurity.',
  readMinutes: 25,
  lead: [
    'This is the block that changes fastest and is examined most superficially — which is fortunate, because it means the return on effort is high. Papers do not ask how a neural network is trained; they ask what CRISPR does, which body regulates genetically modified crops in India, and what the Digital Personal Data Protection Act covers.',
    'The material below is therefore built on definitions, distinctions and named Indian missions, all of which are stable, with the moving numbers left out deliberately. Where a technology is genuinely new enough that its Indian regulatory position is unsettled, that is said rather than glossed over.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '3–5 questions', note: 'Biotechnology and AI governance are the recurring areas.' },
    { exam: 'Banking and insurance GA', count: '3–5 questions', note: 'Computer awareness is often a separate section in banking papers.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Computer fundamentals and well-known technologies.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'Usually a technology mission or a state e-governance initiative.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Basic computer terminology and abbreviations.' },
  ],

  contents: [
    { icon: 'layers', title: 'Computing fundamentals', sub: 'Hardware, software and storage', href: '#computing' },
    { icon: 'globe', title: 'Internet and cybersecurity', sub: 'How it works and how it fails', href: '#internet' },
    { icon: 'chart', title: 'Artificial intelligence', sub: 'The vocabulary and the policy', href: '#ai' },
    { icon: 'refresh', title: 'Biotechnology', sub: 'Genes, GM crops and CRISPR', href: '#biotech' },
    { icon: 'target', title: 'Materials and quantum', sub: 'Nano, semiconductors, quantum', href: '#materials' },
    { icon: 'user', title: 'Digital India', sub: 'The public digital infrastructure', href: '#digital' },
    { icon: 'doc', title: 'Technology law', sub: 'The Acts and the regulators', href: '#law' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'computing',
      heading: 'Computing fundamentals',
      eyebrow: 'Hardware, software and storage',
      intro:
        'Banking papers often carry a separate computer awareness section, and it is drawn almost entirely from this material. Nothing here has changed in decades.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Hardware and software',
              'Hardware is the physical equipment. Software is the set of instructions. System software — the operating system, device drivers and utilities — manages the machine; application software does the user\'s work. Firmware is software stored permanently in hardware.',
            ],
            [
              'The central processing unit',
              'Comprises the arithmetic logic unit, which performs calculations and comparisons; the control unit, which directs the sequence of operations; and registers, the fastest and smallest storage. The CPU is often called the brain of the computer, and clock speed is measured in gigahertz.',
            ],
            [
              'Memory',
              'RAM, random access memory, is volatile working memory whose contents are lost when power is cut. ROM, read-only memory, is non-volatile and holds the instructions needed to start the machine. Cache is a very small, very fast memory between the CPU and RAM. Secondary storage — hard disk, solid state drive, optical disc — is non-volatile and holds data permanently.',
            ],
            [
              'Units of storage',
              'A bit is a single binary digit, 0 or 1. Eight bits make a byte, which stores one character. A kilobyte is 1,024 bytes, and the sequence continues through megabyte, gigabyte, terabyte, petabyte and exabyte. A nibble is four bits — asked occasionally as a distractor.',
            ],
            [
              'Generations of computers',
              'First generation used vacuum tubes; second, transistors; third, integrated circuits; fourth, microprocessors; and the fifth is associated with artificial intelligence and parallel processing. Charles Babbage is called the father of the computer for his analytical engine.',
            ],
            [
              'Compiler and interpreter',
              'A compiler translates an entire program into machine code before it is run, producing a separate executable. An interpreter translates and executes line by line at run time. Compiled programs run faster; interpreted ones are easier to debug and more portable. An assembler translates assembly language specifically.',
            ],
            [
              'Input and output devices',
              'Input devices include the keyboard, mouse, scanner, microphone, barcode reader, optical character reader and magnetic ink character reader, which banks use for cheque processing. Output devices include the monitor, printer, plotter and speaker. A touchscreen is both.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'internet',
      heading: 'Internet and cybersecurity',
      eyebrow: 'How it works and how it fails',
      intro:
        'Two related blocks: the mechanics of the network, and the taxonomy of attacks against it. The second is the one that current affairs keeps returning to.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The internet and the web',
              'The internet is the global network of interconnected networks — the physical and logical infrastructure. The World Wide Web is one service running on it, a system of linked documents accessed through browsers, invented by Tim Berners-Lee at CERN around 1989 and made public in the early 1990s. The internet grew from ARPANET, a United States defence research network of the late 1960s.',
            ],
            [
              'Protocols and addressing',
              'TCP/IP is the protocol suite that governs how data is broken into packets, routed and reassembled. HTTP and its encrypted form HTTPS carry web pages. An IP address identifies a device numerically; IPv4 uses 32 bits and IPv6, introduced because IPv4 addresses ran out, uses 128. The Domain Name System translates a human-readable name into an IP address. A URL is the full address of a resource.',
            ],
            [
              'Network types',
              'A local area network covers a building or campus; a metropolitan area network a city; a wide area network a country or the world. Bandwidth is the capacity of a connection and latency is the delay. Cloud computing delivers computing resources as a service, classified as infrastructure, platform or software as a service. Edge computing does the processing near where the data is generated rather than in a distant data centre.',
            ],
            [
              'Mobile generations',
              'Each generation adds capability rather than only speed: 2G brought digital voice and text, 3G mobile data, 4G broadband and video, and 5G very high speed with very low latency and the capacity to connect large numbers of devices. India\'s 5G rollout began in 2022. Work on 6G is at the research stage, with an Indian vision document released in 2023 — it is a stated programme, not a deployed technology.',
            ],
            [
              'Kinds of malicious software',
              'A virus attaches itself to a file and needs the file to be run. A worm spreads by itself across a network without any user action. A trojan disguises itself as legitimate software. Ransomware encrypts data and demands payment. Spyware collects information covertly. A botnet is a network of compromised machines controlled remotely.',
            ],
            [
              'Kinds of attack',
              'Phishing uses a fraudulent message to obtain credentials; spear phishing targets a named individual; vishing does it by voice call. A denial-of-service attack overwhelms a service with traffic, and a distributed version uses many machines at once. A man-in-the-middle attack intercepts communication between two parties. A zero-day exploit uses a vulnerability before a fix exists.',
            ],
            [
              'Defences and institutions',
              'Firewalls filter traffic; encryption makes intercepted data unreadable; multi-factor authentication requires more than a password; and a digital signature verifies the origin and integrity of a message using public key cryptography. In India, CERT-In is the national computer emergency response team, the National Critical Information Infrastructure Protection Centre protects designated critical systems, and Cyber Swachhta Kendra addresses botnet and malware cleanup.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'ai',
      heading: 'Artificial intelligence',
      eyebrow: 'The vocabulary and the policy',
      intro:
        'Examined as terminology and as governance, not as technique. Knowing the difference between machine learning and deep learning, and which Indian body has issued which strategy, covers nearly every question asked.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The nested terms',
              'Artificial intelligence is the broad field of building systems that perform tasks associated with human intelligence. Machine learning is a subset in which systems learn patterns from data rather than following explicitly written rules. Deep learning is a further subset using multi-layered artificial neural networks. Generative AI produces new content — text, images, audio, code — rather than only classifying or predicting.',
            ],
            [
              'Kinds of learning',
              'Supervised learning trains on labelled examples, so the system learns to map input to a known output. Unsupervised learning finds structure in unlabelled data, as in clustering. Reinforcement learning learns by trial and error against a reward signal, which is how game-playing and robotic control systems are trained.',
            ],
            [
              'Large language models',
              'Systems trained on very large volumes of text to predict continuations, which produces fluent language and a broad range of capabilities. Their known weaknesses are examined more often than their architecture: they can produce confident but false statements, they reflect biases in their training data, and their reasoning is not transparent — the black box problem.',
            ],
            [
              'The governance issues',
              'Algorithmic bias, where a system reproduces or amplifies discrimination present in its training data. Explainability, the difficulty of accounting for a particular output. Accountability, the question of who is responsible when an automated decision causes harm. Employment displacement. Deepfakes and synthetic media, which raise problems for elections, evidence and reputation. Data protection, since these systems are built on large quantities of personal data.',
            ],
            [
              'Indian and international policy',
              'NITI Aayog published a National Strategy for Artificial Intelligence in 2018, using the framing "AI for All". The IndiaAI Mission was approved in 2024 to build compute capacity, datasets, skilling and applications. India is a founding member of the Global Partnership on Artificial Intelligence and hosted its summit in New Delhi in 2023. Internationally, the European Union has enacted a risk-based AI regulation, while India has so far proceeded through advisories and existing law rather than a dedicated statute — a position that may change and should be checked.',
            ],
            [
              'Related technologies',
              'The Internet of Things connects everyday objects with sensors and network capability. Robotics combines sensing, control and actuation, and cobots are robots designed to work alongside people. A digital twin is a virtual model of a physical system, updated with live data, used for simulation and predictive maintenance. Big data is described by volume, velocity, variety and veracity.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'biotech',
      heading: 'Biotechnology',
      eyebrow: 'Genes, GM crops and CRISPR',
      intro:
        'The most heavily examined part of this page in UPSC Prelims, because it combines science with a live regulatory controversy in Indian agriculture.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The molecular basics',
              'DNA is a double helix carrying genetic information in the sequence of four bases — adenine pairing with thymine and guanine with cytosine. A gene is a segment of DNA coding for a product, usually a protein. The genome is the complete genetic material of an organism. Chromosomes are the packaged form of DNA; humans have twenty-three pairs. RNA carries the message from DNA to the site of protein synthesis.',
            ],
            [
              'Recombinant DNA technology',
              'Cutting DNA with restriction enzymes, joining fragments with ligase, and inserting the result into a host organism using a vector such as a plasmid. This is what makes it possible to produce human insulin in bacteria, and it is the foundation of the whole field. The polymerase chain reaction amplifies a small quantity of DNA into a large one, which is what makes forensic and diagnostic testing possible.',
            ],
            [
              'CRISPR-Cas9',
              'A gene editing system adapted from a bacterial defence mechanism, allowing a specific DNA sequence to be located and cut with high precision so that it can be disabled or replaced. Jennifer Doudna and Emmanuelle Charpentier received the Nobel Prize in Chemistry in 2020 for it. It is far cheaper and faster than earlier methods, which is why it raised both therapeutic hopes and ethical concerns about heritable human editing.',
            ],
            [
              'Genetically modified crops in India',
              'Bt cotton is the only genetically modified crop approved for commercial cultivation in India. Bt brinjal received a regulatory recommendation but was placed under an indefinite moratorium in 2010. GM mustard, the hybrid DMH-11, received approval for environmental release in 2022, but the matter has been before the Supreme Court, so its status should be described as contested rather than settled. The Genetic Engineering Appraisal Committee, under the Ministry of Environment, is the regulator.',
            ],
            [
              'The Bt mechanism',
              'Bt crops carry a gene from the soil bacterium Bacillus thuringiensis, which produces a protein toxic to specific insect larvae — the bollworm in cotton — but harmless to mammals. The recurring criticisms are the development of resistance in target pests, effects on non-target species, and the economics of seed dependence.',
            ],
            [
              'Other applications',
              'Stem cells, which can develop into different cell types, with embryonic stem cells being pluripotent and adult stem cells more limited. Cloning, of which Dolly the sheep in 1996 was the first mammal cloned from an adult cell. Gene therapy, replacing or correcting a defective gene. Biopharmaceuticals, including monoclonal antibodies and vaccines. DNA fingerprinting, developed in India at the Centre for Cellular and Molecular Biology in Hyderabad, associated with Lalji Singh. Biofortification, breeding crops for higher micronutrient content.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The vaccine platforms worth distinguishing',
          text:
            'An inactivated vaccine uses a killed pathogen — Covaxin is of this type. A viral vector vaccine uses a modified harmless virus to deliver genetic instructions — Covishield, the Indian-manufactured version of the Oxford-AstraZeneca vaccine, is of this type. An mRNA vaccine delivers the genetic instruction directly in a lipid nanoparticle. The distinction between platforms is asked far more often than any detail about a particular vaccine.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'materials',
      heading: 'Materials and quantum',
      eyebrow: 'Nano, semiconductors, quantum',
      intro:
        'Three technologies that have moved from research into industrial and strategic policy, and each has a named Indian mission attached to it.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Nanotechnology',
              'The manipulation of matter at scales of roughly one to a hundred nanometres, where materials behave differently from their bulk form because surface area dominates and quantum effects appear. Carbon nanotubes are cylindrical carbon structures of exceptional strength and conductivity; graphene is a single layer of carbon atoms in a hexagonal lattice with remarkable electrical and mechanical properties. India\'s Nano Mission was launched in 2007. Applications range from drug delivery and water filtration to coatings and electronics.',
            ],
            [
              'Semiconductors',
              'Materials whose conductivity lies between that of a conductor and an insulator, and which can be controlled by doping — adding impurities to create n-type or p-type material. Silicon is the standard substrate. Their strategic importance lies in the concentration of advanced fabrication in a very small number of countries. The India Semiconductor Mission, launched in 2021 under the Semicon India programme, offers incentives for fabrication, assembly, testing and packaging plants.',
            ],
            [
              'Quantum technology',
              'A quantum computer uses qubits, which can exist in superposition rather than being restricted to 0 or 1, and can be entangled with one another, so that certain classes of problem can in principle be solved far faster. Quantum communication uses the properties of quantum states to make interception detectable — quantum key distribution. Quantum sensing achieves very high precision in measurement. India\'s National Quantum Mission was approved in 2023 as a multi-year programme covering computing, communication, sensing and materials.',
            ],
            [
              'Why quantum matters for security',
              'A sufficiently capable quantum computer would break the public key cryptography that secures most current communication and financial systems. This has produced two responses: post-quantum cryptography, which designs classical algorithms believed to resist quantum attack, and quantum key distribution, which uses quantum mechanics itself to secure the key exchange. Both appear in policy discussion well before the machines exist.',
            ],
            [
              'Superconductivity',
              'The complete loss of electrical resistance below a critical temperature, accompanied by the expulsion of magnetic fields — the Meissner effect. It is used in MRI machines, particle accelerators and magnetic levitation. Room-temperature superconductivity remains unachieved, and claims to have achieved it have repeatedly failed to replicate, which is itself worth knowing when such a claim appears in the news.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'digital',
      heading: 'Digital India',
      eyebrow: 'The public digital infrastructure',
      intro:
        'India\'s digital public infrastructure is examined in both the science and the economy sections, and it is one of the areas where India is cited internationally as a model.',
      blocks: [
        {
          type: 'table',
          caption: 'The building blocks',
          head: ['Component', 'What it is', 'Note'],
          rows: [
            ['Aadhaar', 'A twelve-digit unique identity number linked to biometric and demographic data', 'Issued by the Unique Identification Authority of India, created in 2009 and given statutory backing by the Aadhaar Act, 2016. The Supreme Court upheld the Act in 2018 while restricting mandatory use by private entities.'],
            ['UPI', 'The Unified Payments Interface, a real-time interbank retail payment system', 'Operated by the National Payments Corporation of India. It made instant account-to-account transfer using a virtual address the default form of retail digital payment in India.'],
            ['DigiLocker', 'A cloud repository for issuing and verifying documents', 'Documents held in it have the same legal validity as originals.'],
            ['Digital India', 'The umbrella programme launched in 2015', 'Its three pillars are digital infrastructure as a utility, governance and services on demand, and digital empowerment of citizens.'],
            ['BharatNet', 'The project to connect gram panchayats with optical fibre', 'The backbone intended to extend broadband to rural areas.'],
            ['ONDC', 'The Open Network for Digital Commerce', 'An attempt to unbundle e-commerce into an interoperable network of buyer and seller applications, rather than a set of closed platforms.'],
            ['e-RUPI and the Digital Rupee', 'A voucher-based digital payment instrument, and the Reserve Bank\'s central bank digital currency', 'The Digital Rupee has been piloted in wholesale and retail forms. It is a liability of the central bank, unlike a cryptocurrency, which has no issuer.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The JAM trinity',
              'Jan Dhan bank accounts, Aadhaar identity and Mobile connectivity, which together made direct benefit transfer possible — paying subsidies and entitlements into a beneficiary\'s account rather than delivering them in kind through intermediaries. It is the most cited example of digital infrastructure changing welfare delivery, and it appears in economy questions as often as in technology ones.',
            ],
            [
              'Blockchain and cryptocurrency',
              'A blockchain is a distributed ledger in which records are grouped into blocks linked cryptographically, so that altering an earlier record would require altering everything after it across the whole network. A cryptocurrency is one application of it. India has not banned cryptocurrency but taxes gains on virtual digital assets and applies anti-money-laundering obligations to intermediaries, while the Reserve Bank has separately issued a central bank digital currency. Keeping the two apart — a central bank digital currency is not a cryptocurrency — is the standard exam point.',
            ],
            [
              'Drones',
              'Governed by the Drone Rules of 2021, which replaced a more restrictive regime, together with an airspace map dividing the country into green, yellow and red zones. Applications examined include the SVAMITVA scheme for surveying rural property, agricultural spraying, and delivery of medical supplies to remote areas.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'law',
      heading: 'Technology law',
      eyebrow: 'The Acts and the regulators',
      intro:
        'A short section with a high return, because a single question often asks only which statute governs a described situation.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Information Technology Act, 2000',
              'India\'s principal cyber law, substantially amended in 2008. It gives legal recognition to electronic records and digital signatures, defines cyber offences, and contains the safe harbour provision under which an intermediary is not liable for third-party content provided it observes due diligence. Section 66A, which criminalised offensive online messages, was struck down as unconstitutional in Shreya Singhal v. Union of India in 2015 — one of the most frequently asked cases in this area.',
            ],
            [
              'The Digital Personal Data Protection Act, 2023',
              'India\'s data protection statute, enacted after the Supreme Court held privacy to be a fundamental right in the Puttaswamy judgment of 2017. It applies to digital personal data, defines the data fiduciary who determines the purpose of processing and the data principal to whom the data relates, requires consent for processing with specified exemptions, and provides for a Data Protection Board. Its implementation has proceeded through rules notified after enactment.',
            ],
            [
              'Intellectual property',
              'A patent protects an invention, in India for twenty years from filing. A copyright protects an original expression, generally for the life of the author plus sixty years. A trademark protects a mark identifying goods or services. A geographical indication identifies a good as originating in a particular place with qualities attributable to it — Darjeeling tea was India\'s first. Section 3(d) of the Patents Act, which bars patents on new forms of known substances without enhanced efficacy, was upheld in the Novartis case of 2013 and is central to India\'s generic medicine industry.',
            ],
            [
              'Regulators to place correctly',
              'TRAI regulates telecommunications. MeitY is the Ministry of Electronics and Information Technology. CERT-In handles cyber incidents. The Genetic Engineering Appraisal Committee regulates genetically modified organisms. The Central Drugs Standard Control Organisation regulates drugs and vaccines. The Atomic Energy Regulatory Board regulates nuclear safety. Matching a technology to its regulator is a standard question format.',
            ],
            [
              'Where the law is still unsettled',
              'Artificial intelligence, for which India has so far relied on advisories and existing law rather than a dedicated statute; the treatment of virtual digital assets beyond taxation; and the rules governing non-personal data. In each case the correct answer in an exam is the current position, which should be verified rather than assumed from any set of notes.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'What is the difference between a computer virus and a worm?',
      steps: [
        'Both are malicious programs that spread, but they differ in how.',
        'A virus attaches itself to a host file or program and spreads only when that file is executed or shared.',
        'A worm is self-contained and propagates across a network by itself, needing no user action, which is why worms spread far faster.',
      ],
      answer: 'A virus needs a host and a user action; a worm spreads by itself across networks.',
    },
    {
      q: 'Which genetically modified crop is approved for commercial cultivation in India?',
      steps: [
        'Bt cotton was approved in 2002 and is grown across most of India\'s cotton area.',
        'Bt brinjal received a regulatory recommendation but was placed under an indefinite moratorium in 2010.',
        'GM mustard DMH-11 was approved for environmental release in 2022, but the matter has been before the Supreme Court, so its status is contested rather than settled.',
      ],
      answer: 'Bt cotton is the only one in commercial cultivation.',
    },
    {
      q: 'Distinguish artificial intelligence, machine learning and deep learning.',
      steps: [
        'Artificial intelligence is the broadest term — any system performing tasks associated with human intelligence, including rule-based ones.',
        'Machine learning is a subset in which the system learns patterns from data instead of following rules written by hand.',
        'Deep learning is a further subset of machine learning that uses multi-layered artificial neural networks.',
      ],
      answer: 'Three nested sets, from broadest to narrowest.',
    },
    {
      q: 'Why is a central bank digital currency not a cryptocurrency?',
      steps: [
        'A cryptocurrency has no issuer; it is created and validated by a decentralised network and derives value only from what people will pay for it.',
        'A central bank digital currency is issued by the central bank and is a direct liability of it, exactly like a banknote.',
        'So the Digital Rupee is legal tender backed by the Reserve Bank, whatever technology it happens to use.',
      ],
      answer: 'A CBDC has a central issuer and is legal tender; a cryptocurrency has neither.',
    },
    {
      q: 'What did the Shreya Singhal judgment decide?',
      steps: [
        'Section 66A of the Information Technology Act criminalised sending information that was grossly offensive or of a menacing character.',
        'In 2015 the Supreme Court held the provision unconstitutional, as vague and overbroad, and therefore an unreasonable restriction on free speech under Article 19.',
        'The judgment also read down the intermediary liability provisions, holding that an intermediary need act on a court order or a government direction rather than on any private complaint.',
      ],
      answer: 'It struck down Section 66A of the IT Act as violating freedom of speech.',
    },
    {
      q: 'What makes CRISPR-Cas9 different from earlier gene editing techniques?',
      steps: [
        'Earlier methods of editing a specific DNA sequence required designing a new protein for each target, which was slow and expensive.',
        'CRISPR uses a guide RNA to locate the target, so changing the target means only changing a short RNA sequence.',
        'That made precise editing dramatically cheaper and faster, which is why it spread across biology within a few years and why it raised ethical questions about heritable human editing.',
      ],
      answer: 'It is guided by RNA rather than by a custom protein, which makes retargeting trivial.',
    },
    {
      q: 'Which body regulates genetically modified organisms in India, and under which ministry?',
      steps: [
        'Drug approvals sit with the Central Drugs Standard Control Organisation and nuclear safety with the Atomic Energy Regulatory Board, so neither is the answer.',
        'Genetically modified organisms and products derived from them are appraised by the Genetic Engineering Appraisal Committee.',
        'It functions under the Ministry of Environment, Forest and Climate Change rather than under agriculture or science.',
      ],
      answer: 'The Genetic Engineering Appraisal Committee, under the Ministry of Environment.',
    },
    {
      q: 'Why does quantum computing threaten current encryption?',
      steps: [
        'Most secure communication relies on public key cryptography, whose security rests on certain mathematical problems being impractical to solve quickly.',
        'A sufficiently large quantum computer could solve some of those problems far faster than any classical machine.',
        'That has prompted work on post-quantum cryptography, using classical algorithms believed to resist quantum attack, and on quantum key distribution, which secures key exchange using quantum mechanics itself.',
      ],
      answer: 'It could break the mathematical assumptions on which public key cryptography rests.',
    },
  ],

  practice: [
    {
      q: 'One byte consists of:',
      options: ['4 bits', '8 bits', '16 bits', '2 bits'],
      answer: 1,
      explain: 'Four bits make a nibble. A byte stores one character.',
    },
    {
      q: 'RAM is best described as:',
      options: ['Permanent storage', 'Volatile working memory', 'Read-only memory', 'Secondary storage'],
      answer: 1,
      explain: 'Its contents are lost when power is removed, unlike ROM and secondary storage.',
    },
    {
      q: 'The World Wide Web was invented by:',
      options: ['Vint Cerf', 'Tim Berners-Lee', 'Charles Babbage', 'Alan Turing'],
      answer: 1,
      explain: 'At CERN around 1989. The internet itself grew from the earlier ARPANET.',
    },
    {
      q: 'Which malware encrypts a victim\'s files and demands payment?',
      options: ['Spyware', 'Adware', 'Ransomware', 'Rootkit'],
      answer: 2,
      explain: 'Spyware collects information covertly; a rootkit conceals the presence of other malware.',
    },
    {
      q: 'CERT-In is India\'s national agency for:',
      options: ['Cyber security incident response', 'Telecom regulation', 'Data protection adjudication', 'Space regulation'],
      answer: 0,
      explain: 'TRAI regulates telecom and the Data Protection Board adjudicates under the DPDP Act.',
    },
    {
      q: 'Deep learning is a subset of:',
      options: ['Machine learning', 'Robotics', 'Cloud computing', 'Blockchain'],
      answer: 0,
      explain: 'Artificial intelligence contains machine learning, which in turn contains deep learning.',
    },
    {
      q: 'The only genetically modified crop approved for commercial cultivation in India is:',
      options: ['Bt brinjal', 'GM mustard', 'Bt cotton', 'Golden rice'],
      answer: 2,
      explain: 'Bt brinjal is under moratorium and the status of GM mustard has been contested in court.',
    },
    {
      q: 'CRISPR-Cas9 is used for:',
      options: ['Amplifying DNA', 'Gene editing', 'Protein sequencing', 'Tissue culture'],
      answer: 1,
      explain: 'The polymerase chain reaction amplifies DNA. Doudna and Charpentier won the 2020 Nobel Prize in Chemistry for CRISPR.',
    },
    {
      q: 'Section 66A of the Information Technology Act was struck down in:',
      options: ['Puttaswamy', 'Shreya Singhal', 'Novartis', 'Vishaka'],
      answer: 1,
      explain: 'Shreya Singhal v. Union of India, 2015, held the provision vague and overbroad and therefore unconstitutional.',
    },
    {
      q: 'The Digital Personal Data Protection Act was enacted in:',
      options: ['2017', '2019', '2021', '2023'],
      answer: 3,
      explain: 'It followed the Puttaswamy judgment of 2017, which recognised privacy as a fundamental right.',
    },
    {
      q: 'India\'s National Quantum Mission was approved in:',
      options: ['2018', '2020', '2023', '2024'],
      answer: 2,
      explain: 'It covers quantum computing, communication, sensing and materials over a multi-year period.',
    },
    {
      q: 'A geographical indication in India was first granted to:',
      options: ['Basmati rice', 'Darjeeling tea', 'Kanchipuram silk', 'Alphonso mango'],
      answer: 1,
      explain: 'A GI identifies a good as originating in a place with qualities attributable to that origin.',
    },
    {
      q: 'The Unified Payments Interface is operated by:',
      options: ['The Reserve Bank of India', 'The National Payments Corporation of India', 'SEBI', 'MeitY'],
      answer: 1,
      explain: 'NPCI also operates IMPS, RuPay and the National Automated Clearing House.',
    },
    {
      q: 'Which of these is a viral vector vaccine?',
      options: ['Covaxin', 'Covishield', 'An mRNA vaccine', 'A toxoid vaccine'],
      answer: 1,
      explain: 'Covaxin is an inactivated vaccine; Covishield uses a modified harmless virus to deliver genetic instructions.',
    },
    {
      q: 'Nanotechnology operates at a scale of approximately:',
      options: ['1 to 100 nanometres', '1 to 100 micrometres', '1 to 100 millimetres', '1 to 100 picometres'],
      answer: 0,
      explain: 'At this scale surface area dominates and quantum effects appear, so materials behave differently from their bulk form.',
    },
    {
      q: 'The regulator for genetically modified organisms in India is:',
      options: ['CDSCO', 'GEAC', 'ICMR', 'DBT'],
      answer: 1,
      explain: 'The Genetic Engineering Appraisal Committee, under the Ministry of Environment, Forest and Climate Change.',
    },
  ],

  faqs: [
    {
      q: 'How do I prepare a topic that changes every few months?',
      a: 'By separating the stable from the moving. Definitions, distinctions, the names of Indian missions and the founding facts of statutes and regulators do not change, and they carry most of the marks. What moves is the current status of a technology, the latest policy announcement and any figure. Learn the first from material like this and track only the second from the news.',
    },
    {
      q: 'What is the difference between the internet and the World Wide Web?',
      a: 'The internet is the global network of interconnected networks — the infrastructure, the protocols and the routing. The web is one service that runs on it, a system of hyperlinked documents accessed through a browser, invented by Tim Berners-Lee around 1989. Email, file transfer and streaming also run on the internet without being part of the web.',
    },
    {
      q: 'Is a central bank digital currency the same as a cryptocurrency?',
      a: 'No. A CBDC is issued by the central bank and is a direct liability of it, exactly like a banknote in digital form, and it is legal tender. A cryptocurrency has no issuer, is validated by a decentralised network, and derives value only from what participants will pay. India has issued a Digital Rupee while taxing and regulating virtual digital assets separately — the two are distinct policy tracks.',
    },
    {
      q: 'Why is Bt cotton approved when Bt brinjal is not?',
      a: 'Because the objections to a food crop are different from those to a fibre crop. Bt cotton was approved in 2002 and adopted very widely. Bt brinjal received a favourable regulatory recommendation but was placed under an indefinite moratorium in 2010 on grounds of public concern, the absence of independent long-term safety data, and India\'s position as a centre of brinjal diversity.',
    },
    {
      q: 'What does the Digital Personal Data Protection Act actually require?',
      a: 'It applies to digital personal data and requires that processing be for a lawful purpose with the consent of the person concerned, subject to specified exemptions including certain state functions. It defines the data fiduciary who decides the purpose and means of processing and the data principal whose data it is, imposes obligations of security and breach notification, gives individuals rights of access, correction and erasure, and provides for a Data Protection Board to adjudicate.',
    },
    {
      q: 'Why is quantum computing discussed in security policy before the machines exist?',
      a: 'Because of the harvest-now-decrypt-later problem: data intercepted today can be stored and decrypted once capable machines arrive. Anything that must stay confidential for a decade or more is therefore already at risk. That is why post-quantum cryptography standards and quantum key distribution are being developed and deployed well ahead of any working large-scale quantum computer.',
    },
    {
      q: 'What is the safe harbour provision?',
      a: 'The rule in Section 79 of the Information Technology Act under which an intermediary — a platform, a network provider, a search engine — is not liable for third-party content it merely hosts or transmits, provided it does not initiate or modify it and observes prescribed due diligence. Shreya Singhal read it down so that an intermediary must act on a court order or a government direction rather than on any private complaint.',
    },
    {
      q: 'How much computer awareness do banking exams actually test?',
      a: 'A substantial amount, and often in a dedicated section. It is drawn almost entirely from the fundamentals — hardware, memory types, storage units, input and output devices, common abbreviations, basic networking and security terms. It is one of the most static blocks in the whole banking syllabus, and correspondingly one of the most efficient to prepare.',
    },
    {
      q: 'Which technology facts are safe to memorise?',
      a: 'Founding years and purposes of Indian missions — the Nano Mission in 2007, the India Semiconductor Mission in 2021, the National Quantum Mission in 2023, the IndiaAI Mission in 2024. Statutes and their years. Named regulators and what each covers. Landmark cases. Nobel-winning discoveries. What is not safe to memorise is any figure about capacity, funding, adoption or ranking.',
    },
    {
      q: 'How many questions come from this block?',
      a: 'Three to five in UPSC Prelims, where biotechnology and technology governance are the recurring areas; three to five in banking general awareness including the computer section; two to three in SSC CGL Tier 1; two to three in RRB NTPC; and two to three in state PSC prelims.',
    },
  ],

  related: [
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'Space & Defence', to: '/study-material/science/space-and-defence/' },
    { label: 'Biology', to: '/study-material/biology/' },
    { label: 'Money & Banking', to: '/study-material/economy/money-and-banking/' },
    { label: 'All Science & Technology', to: '/study-material/science/' },
  ],
}
