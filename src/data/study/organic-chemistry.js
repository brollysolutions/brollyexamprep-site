/**
 * Organic and Everyday Chemistry —
 * /study-material/chemistry/organic-chemistry/
 *
 * Carbon compounds and their applications: hydrocarbons, functional groups,
 * biomolecules, polymers, medicines, food chemistry and fuels. The applied end
 * of the subject, and the block general-awareness papers draw on most.
 */
export default {
  subject: 'chemistry',
  subjectName: 'Chemistry',
  slug: 'organic-chemistry',
  title: 'Organic & Everyday Chemistry',
  seoTitle: 'Organic Chemistry for Competitive Exams | Hydrocarbons, Polymers & Practice',
  metaDescription:
    'Complete organic and everyday chemistry study material for JEE, NEET, SSC, RRB and state exams — carbon and its allotropes, hydrocarbons.',
  readMinutes: 25,
  lead: [
    'Carbon forms more compounds than every other element combined, and the reason is a single property: it can bond to itself indefinitely, in chains, branches and rings, while still bonding to four other atoms. Once that is clear, organic chemistry stops being a list of compounds and becomes a set of families with predictable behaviour.',
    'The second half of this page is the applied chemistry that general-awareness papers ask about most heavily — soaps and detergents, plastics, medicines, food preservatives and fuels. Almost every one of those questions is answered by knowing which functional group or which polymer type is involved.',
  ],

  weightage: [
    { exam: 'JEE Main / Advanced', count: '25–30% of the chemistry paper', note: 'Organic chemistry is the largest of the three branches in the paper.' },
    { exam: 'NEET Chemistry', count: '10–14 questions', note: 'Including biomolecules, which overlap with the biology syllabus.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Everyday applications — plastics, medicines, fuels and food chemistry.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Common compounds, their uses and their common names.' },
    { exam: 'NDA / CDS General Ability', count: '1–2 questions', note: 'Hydrocarbons and applied chemistry at school level.' },
  ],

  contents: [
    { icon: 'target', title: 'Carbon and its allotropes', sub: 'Why carbon is unique', href: '#carbon' },
    { icon: 'layers', title: 'Hydrocarbons', sub: 'Alkanes, alkenes, alkynes, aromatics', href: '#hydrocarbons' },
    { icon: 'search', title: 'Functional groups', sub: 'Families, naming and isomerism', href: '#groups' },
    { icon: 'refresh', title: 'Organic reactions', sub: 'The reactions actually asked', href: '#reactions' },
    { icon: 'user', title: 'Biomolecules', sub: 'Carbohydrates, proteins, fats', href: '#biomolecules' },
    { icon: 'doc', title: 'Polymers', sub: 'Plastics, fibres and rubber', href: '#polymers' },
    { icon: 'bell', title: 'Chemistry in daily life', sub: 'Medicines, food and fuels', href: '#everyday' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'carbon',
      heading: 'Carbon and its allotropes',
      eyebrow: 'Why carbon is unique',
      intro:
        'Two properties account for the entire existence of organic chemistry as a separate branch, and the allotropes of carbon then demonstrate how differently the same atoms can behave when arranged differently.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Tetravalency and catenation',
              'Carbon has four valence electrons, so it forms four covalent bonds and can bond to four different atoms at once. Catenation is its ability to bond to other carbon atoms in chains, branches and rings of unlimited length. Silicon also catenates but its bonds are far weaker, so silicon chains are short and unstable. The strength of the carbon-carbon bond, a consequence of carbon\'s small size, is why only carbon produces millions of stable compounds.',
            ],
            [
              'Why carbon forms covalent bonds',
              'To reach a stable octet by losing four electrons would require enormous ionisation energy, and to gain four would concentrate too much negative charge on a small nucleus. Sharing is the only viable route, which is why organic compounds are covalent — and therefore why they have low melting points, are poor conductors and dissolve in organic solvents rather than water.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Allotropes of carbon',
          head: ['Allotrope', 'Structure', 'Properties and uses'],
          rows: [
            ['Diamond', 'Each carbon bonded to four others in a rigid three-dimensional tetrahedral network, sp³ hybridised', 'The hardest natural substance and an electrical insulator, since all four electrons are committed to bonds. Used in cutting, drilling and abrasives, and as gemstones.'],
            ['Graphite', 'Layers of hexagonal rings, each carbon bonded to three others, sp² hybridised, with layers held by weak forces', 'Soft and slippery because the layers slide, and a good conductor because one electron per atom is delocalised. Used as a lubricant, in pencils and as an electrode.'],
            ['Fullerene', 'Closed cages of carbon atoms; buckminsterfullerene, C₆₀, has the shape of a football', 'Discovered in 1985 and named after the architect Buckminster Fuller. Of research interest in drug delivery and materials.'],
            ['Graphene', 'A single one-atom-thick layer of graphite', 'Exceptionally strong, an excellent conductor of heat and electricity, and nearly transparent. A major materials research subject.'],
            ['Carbon nanotubes', 'Graphene sheets rolled into cylinders', 'Extremely high tensile strength and useful electrical properties, depending on how the sheet is rolled.'],
          ],
        },
        {
          type: 'note',
          title: 'The same element, opposite properties',
          text:
            'Diamond is the hardest substance known and graphite is one of the softest; diamond insulates and graphite conducts; diamond is transparent and graphite opaque. Both are pure carbon. The difference is entirely in the bonding arrangement, which is the clearest possible demonstration that structure determines property — and it is asked as a comparison almost every year.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'hydrocarbons',
      heading: 'Hydrocarbons',
      eyebrow: 'Alkanes, alkenes, alkynes, aromatics',
      intro:
        'Compounds of carbon and hydrogen alone, divided by whether they contain only single bonds or also multiple ones. That single distinction determines how they react.',
      blocks: [
        {
          type: 'table',
          caption: 'The hydrocarbon families',
          head: ['Family', 'General formula', 'Bonding and reactivity'],
          rows: [
            ['Alkanes', 'CₙH₂ₙ₊₂', 'Saturated — only single bonds. Relatively unreactive, undergoing substitution rather than addition. Methane, ethane, propane, butane. Also called paraffins, from the Latin for "little affinity".'],
            ['Alkenes', 'CₙH₂ₙ', 'One carbon-carbon double bond. Unsaturated and reactive, undergoing addition reactions. Ethene is the simplest, and is used to ripen fruit and to make polythene.'],
            ['Alkynes', 'CₙH₂ₙ₋₂', 'One carbon-carbon triple bond. More unsaturated still. Ethyne, or acetylene, burns with oxygen at a very high temperature and is used for welding.'],
            ['Aromatics', 'Based on the benzene ring, C₆H₆', 'A planar six-carbon ring with delocalised electrons. Despite being highly unsaturated, benzene resists addition and prefers substitution, because addition would destroy the stable delocalised system.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Saturated and unsaturated',
              'A saturated compound contains only single carbon-carbon bonds and can hold no more hydrogen. An unsaturated one contains a double or triple bond and can add more. Unsaturated compounds burn with a sooty yellow flame because of incomplete combustion of their higher carbon content, while saturated ones burn with a clean blue flame — the standard practical distinction.',
            ],
            [
              'Homologous series',
              'A family of compounds with the same functional group in which successive members differ by a CH₂ unit, a mass difference of 14. Members share chemical properties and show a gradual change in physical properties — boiling point rises steadily with chain length, because intermolecular forces increase with size. This is why knowing one member of a series effectively means knowing them all.',
            ],
            [
              'Benzene and aromaticity',
              'Kekulé proposed the ring structure with alternating double bonds, but the real molecule has all six carbon-carbon bonds identical, of a length between single and double. The electrons are delocalised around the ring, which confers exceptional stability. Aromatic compounds are important industrially and several are carcinogenic, benzene itself among them.',
            ],
            [
              'The first ten alkanes',
              'Methane, ethane, propane, butane, pentane, hexane, heptane, octane, nonane, decane. The first four have historical names and the rest use Greek number prefixes. The first four are gases at room temperature, the next several are liquids, and the higher ones are solids — a straightforward consequence of increasing intermolecular forces.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'groups',
      heading: 'Functional groups',
      eyebrow: 'Families, naming and isomerism',
      intro:
        'A functional group is the reactive part of a molecule, and it determines the compound\'s chemistry almost entirely regardless of the size of the carbon chain attached to it.',
      blocks: [
        {
          type: 'table',
          caption: 'The functional groups to know',
          head: ['Group', 'Formula and suffix', 'Example and use'],
          rows: [
            ['Alcohol', '−OH, suffix -ol', 'Ethanol, in alcoholic drinks, as a solvent and as a fuel additive. Methanol is highly toxic and causes blindness.'],
            ['Aldehyde', '−CHO, suffix -al', 'Methanal, or formaldehyde, used as a preservative for biological specimens as formalin.'],
            ['Ketone', '>C=O within the chain, suffix -one', 'Propanone, or acetone, a common solvent and nail-polish remover.'],
            ['Carboxylic acid', '−COOH, suffix -oic acid', 'Ethanoic acid, the acid in vinegar at five to eight per cent. Pure ethanoic acid freezes at about 17 °C and is called glacial acetic acid.'],
            ['Ester', '−COO−, suffix -oate', 'Formed from an acid and an alcohol; esters have pleasant fruity smells and are used in perfumes and flavourings.'],
            ['Amine', '−NH₂, suffix -amine', 'The basis of amino acids and of many drugs and dyes.'],
            ['Halide', '−X, prefix halo-', 'Chloroform, once an anaesthetic; chlorofluorocarbons, now phased out because they deplete stratospheric ozone.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'IUPAC naming in outline',
              'Identify the longest continuous carbon chain to give the root name; identify the functional group to give the suffix; number the chain so that the functional group gets the lowest possible number; and name the branches as prefixes with their positions. So CH₃−CH₂−OH is ethanol: two carbons, an alcohol group, hence eth- plus -ol.',
            ],
            [
              'Structural isomerism',
              'Compounds with the same molecular formula but different structures. Chain isomerism differs in the branching of the skeleton — butane and isobutane. Position isomerism differs in where the functional group sits — propan-1-ol and propan-2-ol. Functional isomerism has a different group altogether — ethanol and dimethyl ether, both C₂H₆O.',
            ],
            [
              'Stereoisomerism',
              'Geometrical isomerism arises across a double bond, which cannot rotate, giving cis and trans forms with different properties. Optical isomerism arises when a carbon atom carries four different groups, making the molecule non-superimposable on its mirror image; the two forms rotate plane-polarised light in opposite directions. Optical isomerism matters enormously in pharmacology, since the two forms of a drug can behave quite differently in the body.',
            ],
            [
              'Why isomerism explains carbon\'s diversity',
              'Because the number of possible arrangements grows very rapidly with chain length. Butane has two isomers, pentane three, decane seventy-five, and by twenty carbons the number is in the hundreds of thousands. Combined with catenation, this is why carbon compounds outnumber all others.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'reactions',
      heading: 'Organic reactions',
      eyebrow: 'The reactions actually asked',
      intro:
        'A short list of reaction types accounts for nearly every organic question at this level, and each has a familiar industrial or domestic application.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Combustion',
              'All hydrocarbons burn in sufficient oxygen to give carbon dioxide and water, releasing heat. Saturated hydrocarbons give a clean blue flame; unsaturated ones and those burnt in limited oxygen give a sooty yellow flame with incomplete combustion, producing carbon monoxide and carbon particles. This is why a blocked gas burner turns yellow and why carbon monoxide poisoning is a hazard from poorly ventilated appliances.',
            ],
            [
              'Substitution',
              'Characteristic of saturated compounds. Methane reacts with chlorine in sunlight, one hydrogen at a time being replaced, giving a mixture of chloromethanes. The reaction needs light or heat and proceeds by a free radical mechanism.',
            ],
            [
              'Addition',
              'Characteristic of unsaturated compounds, in which the multiple bond opens and atoms add across it. The important industrial case is hydrogenation: vegetable oils, which are unsaturated liquids, are converted to solid fats such as vanaspati by adding hydrogen in the presence of a nickel catalyst. The same chemistry explains why unsaturated fats are considered healthier — and why the process produces trans fats.',
            ],
            [
              'Oxidation',
              'Alcohols are oxidised to aldehydes and then to carboxylic acids by oxidising agents such as acidified potassium permanganate or potassium dichromate. This is why wine left open turns sour: ethanol is oxidised by air to ethanoic acid. Such reagents are called oxidising agents, and the reaction is used as a test for a primary alcohol.',
            ],
            [
              'Esterification and saponification',
              'A carboxylic acid and an alcohol, warmed with concentrated sulphuric acid as catalyst, give an ester with its characteristic fruity smell — used in perfumes and flavourings. The reverse reaction with an alkali, called saponification, gives the alcohol and the salt of the acid. That salt is soap, and this is how soap has been made for centuries.',
            ],
            [
              'Fermentation',
              'The anaerobic conversion of sugars to ethanol and carbon dioxide by yeast enzymes. It is the basis of brewing, of bread-making, where the carbon dioxide is what matters, and of industrial ethanol production for blending with petrol.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Soaps, detergents and hard water',
          text:
            'A soap molecule has a long non-polar hydrocarbon tail and an ionic head. In water the molecules form micelles with the tails inward around a droplet of grease and the heads outward, which is how dirt is lifted and suspended. In hard water, containing calcium and magnesium ions, soap forms an insoluble scum instead of a lather and is wasted. Synthetic detergents have sulphonate or sulphate heads whose calcium and magnesium salts are soluble, so they work in hard water — which is the whole reason they were developed.',
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'biomolecules',
      heading: 'Biomolecules',
      eyebrow: 'Carbohydrates, proteins, fats',
      intro:
        'The organic chemistry of living systems, shared with the biology syllabus and asked in both.',
      blocks: [
        {
          type: 'table',
          caption: 'The four classes',
          head: ['Class', 'Building block', 'Examples and function'],
          rows: [
            ['Carbohydrates', 'Monosaccharides such as glucose and fructose', 'Disaccharides — sucrose from glucose and fructose, lactose in milk, maltose. Polysaccharides — starch, the plant storage form; glycogen, the animal storage form; and cellulose, the structural polymer of plant cell walls, which humans cannot digest. The primary energy source, giving about four kilocalories per gram.'],
            ['Proteins', 'Amino acids, of which twenty occur in proteins, joined by peptide bonds', 'Enzymes, antibodies, haemoglobin, structural proteins such as collagen and keratin. Nine amino acids are essential, meaning the body cannot synthesise them and they must come from food. Deficiency causes kwashiorkor.'],
            ['Lipids', 'Fatty acids and glycerol', 'Fats and oils store energy at about nine kilocalories per gram, the most energy-dense nutrient. Saturated fats are solid and mostly of animal origin; unsaturated fats are liquid oils. Phospholipids form cell membranes and cholesterol is a steroid precursor.'],
            ['Nucleic acids', 'Nucleotides — a sugar, a phosphate and a nitrogenous base', 'DNA carries genetic information as a double helix with adenine pairing to thymine and guanine to cytosine. RNA is single-stranded, uses uracil in place of thymine, and carries out protein synthesis.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Enzymes',
              'Biological catalysts, almost all of them proteins, which are highly specific to their substrate and extremely sensitive to temperature and pH. They lower activation energy in the same way as any catalyst but work under the mild conditions of a living cell. Denaturation by heat or extreme pH destroys the three-dimensional shape and therefore the activity, which is why cooking makes proteins digestible and why a fever is dangerous above a certain point.',
            ],
            [
              'Vitamins',
              'Organic compounds needed in small quantities that the body cannot synthesise in sufficient amounts. Vitamins A, D, E and K are fat-soluble and stored in the body, so excess can be toxic. The B group and vitamin C are water-soluble and must be supplied regularly, since any surplus is excreted. Each deficiency disease is a standard exam pairing.',
            ],
            [
              'Hormones',
              'Chemical messengers secreted by endocrine glands and carried in the blood. Insulin, a protein hormone from the pancreas, lowers blood glucose. Thyroxine from the thyroid requires iodine and regulates metabolism. Adrenaline governs the fight-or-flight response. Unlike enzymes, hormones are not catalysts and are consumed in the processes they regulate.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'polymers',
      heading: 'Polymers',
      eyebrow: 'Plastics, fibres and rubber',
      intro:
        'Large molecules built by joining many small repeating units, and one of the areas of chemistry that most directly changed daily life — and the environment.',
      blocks: [
        {
          type: 'table',
          caption: 'Important polymers',
          head: ['Polymer', 'Type and monomer', 'Uses'],
          rows: [
            ['Polythene', 'Addition polymer of ethene', 'Bags, packaging film, bottles, pipes. The commonest plastic by volume.'],
            ['PVC', 'Addition polymer of vinyl chloride', 'Pipes, cable insulation, flooring, upholstery.'],
            ['Polystyrene', 'Addition polymer of styrene', 'Disposable cups and packaging; the expanded form is thermocol.'],
            ['Teflon', 'Addition polymer of tetrafluoroethene', 'Non-stick cookware coatings and chemically resistant seals.'],
            ['Nylon', 'Condensation polymer of a diamine and a dicarboxylic acid', 'Ropes, textiles, parachutes, brushes. The first fully synthetic fibre.'],
            ['Terylene or polyester', 'Condensation polymer of ethylene glycol and terephthalic acid', 'Fabrics and, as PET, drink bottles — the most widely recycled plastic.'],
            ['Bakelite', 'Condensation polymer of phenol and formaldehyde', 'Electrical switches and handles; the first fully synthetic plastic, and thermosetting.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Addition and condensation polymers',
              'An addition polymer is formed by unsaturated monomers adding across their double bonds with no by-product; the polymer has the same empirical formula as the monomer. A condensation polymer is formed by monomers joining with the elimination of a small molecule, usually water. Distinguishing the two is the standard question format.',
            ],
            [
              'Thermoplastic and thermosetting',
              'A thermoplastic softens on heating and can be remoulded repeatedly, because its chains are separate and held only by weak forces — polythene, PVC and polystyrene. A thermosetting plastic sets permanently on first moulding and cannot be softened again, because its chains are cross-linked into a rigid network — bakelite and melamine. Only thermoplastics can be melted and recycled, which is central to the plastic waste problem.',
            ],
            [
              'Natural and synthetic rubber',
              'Natural rubber is a polymer of isoprene, obtained as latex from the rubber tree. It is soft and becomes sticky when warm and brittle when cold. Vulcanisation, discovered by Charles Goodyear, heats it with sulphur to create cross-links between the chains, making it far stronger, more elastic and stable over a wide temperature range. Almost all rubber in use is vulcanised.',
            ],
            [
              'The plastic problem',
              'Most common plastics are not biodegradable, persisting for centuries and fragmenting into microplastics that enter food chains. Responses include reduction of single-use plastics, extended producer responsibility rules, mechanical and chemical recycling, and biodegradable alternatives such as polylactic acid made from plant starch. Only thermoplastics can be mechanically recycled, and mixed or contaminated plastic remains difficult.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'everyday',
      heading: 'Chemistry in daily life',
      eyebrow: 'Medicines, food and fuels',
      intro:
        'The applied section, which supplies the majority of the chemistry questions in general awareness papers because every item in it is familiar.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Classes of medicine',
              'Analgesics relieve pain — aspirin and paracetamol, the latter also an antipyretic reducing fever. Antibiotics kill or inhibit bacteria and have no effect on viruses; penicillin, discovered by Alexander Fleming in 1928, was the first. Antacids neutralise excess stomach acid — magnesium hydroxide and sodium bicarbonate. Antiseptics are applied to living tissue, such as Dettol and tincture of iodine, while disinfectants such as phenol are used on surfaces and are too harsh for skin. Antihistamines treat allergy, and tranquillisers act on the nervous system.',
            ],
            [
              'Why antibiotic resistance matters',
              'Bacteria that survive incomplete or unnecessary courses of antibiotics multiply and pass on their resistance, so drugs that once worked stop working. Aspirin is not an antibiotic, and antibiotics do not treat viral infections such as colds and influenza — a point examined as often in a public health context as in chemistry.',
            ],
            [
              'Food chemistry',
              'Preservatives such as sodium benzoate and sodium metabisulphite inhibit microbial growth. Antioxidants such as BHA and BHT slow the oxidation of fats that causes rancidity. Artificial sweeteners such as saccharin, aspartame and sucralose provide sweetness with little or no energy — aspartame breaks down on heating, so it is unsuitable for cooking. Common salt and sugar are the oldest preservatives, working by drawing water out of microbial cells.',
            ],
            [
              'Fuels',
              'Calorific value is the heat released per unit mass burnt, and hydrogen has the highest of any fuel. Petrol quality is measured by octane number and diesel by cetane number. LPG is mainly butane with propane; CNG is mainly methane and burns more cleanly. Biodiesel is made from vegetable oils and ethanol from fermented biomass, and India blends ethanol into petrol to reduce imports and emissions. A good fuel has high calorific value, low ignition temperature, moderate rate of combustion, low ash and cost, and produces few pollutants.',
            ],
            [
              'Fertilisers and pesticides',
              'Nitrogenous fertilisers such as urea and ammonium sulphate, phosphatic fertilisers such as superphosphate, and potassic fertilisers such as potassium chloride. NPK fertilisers combine all three. Excess use leaches into water bodies and causes eutrophication, and pesticide residues accumulate up food chains. DDT is the standard example of persistence and biomagnification, and is now banned for agricultural use in most countries.',
            ],
            [
              'Cement, glass and ceramics',
              'Cement is made by heating limestone with clay; adding water starts hydration and the mixture sets and hardens. Concrete is cement with sand and aggregate, and reinforced concrete adds steel to carry tension. Glass is an amorphous solid, not a crystalline one, made chiefly from silica with soda and lime. These appear in general awareness papers as materials questions.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Diamond and graphite are both pure carbon. Why is one hard and insulating and the other soft and conducting?',
      steps: [
        'In diamond each carbon is bonded to four others in a rigid three-dimensional network, with all four valence electrons committed to bonds.',
        'That network explains the hardness, and the absence of free electrons explains the insulation.',
        'In graphite each carbon bonds to only three others in flat layers, leaving one delocalised electron per atom to conduct, while the layers are held together only weakly and slide over one another, giving softness.',
      ],
      answer: 'Their bonding arrangement differs — three-dimensional network against weakly held layers.',
    },
    {
      q: 'How is vanaspati made from vegetable oil, and what is the reaction called?',
      steps: [
        'Vegetable oils are unsaturated, containing carbon-carbon double bonds, which is why they are liquid at room temperature.',
        'Hydrogen is added across those double bonds in the presence of a nickel catalyst, saturating the chains.',
        'The reaction is hydrogenation, an addition reaction, and the saturated product is solid at room temperature.',
      ],
      answer: 'Hydrogenation — an addition reaction using a nickel catalyst.',
    },
    {
      q: 'Why does soap fail to lather in hard water while detergent works?',
      steps: [
        'Hard water contains calcium and magnesium ions.',
        'Soap is a sodium or potassium salt of a long-chain fatty acid, and its calcium and magnesium salts are insoluble, so they precipitate as scum instead of forming a lather.',
        'Synthetic detergents have sulphonate or sulphate head groups whose calcium and magnesium salts are soluble, so they lather normally — which is precisely why they were developed.',
      ],
      answer: 'Soap forms insoluble calcium and magnesium salts; detergent\'s equivalents are soluble.',
    },
    {
      q: 'Why does wine left open turn sour?',
      steps: [
        'Wine contains ethanol, an alcohol.',
        'Exposed to air, ethanol is slowly oxidised — first to ethanal and then further.',
        'The final product is ethanoic acid, the acid of vinegar, which is what gives the sour taste.',
      ],
      answer: 'Ethanol is oxidised by air to ethanoic acid.',
    },
    {
      q: 'Distinguish a thermoplastic from a thermosetting plastic, with examples.',
      steps: [
        'A thermoplastic consists of separate chains held together by weak intermolecular forces, so heating softens it and it can be remoulded repeatedly — polythene, PVC and polystyrene.',
        'A thermosetting plastic forms cross-links between its chains during moulding, creating one rigid network.',
        'It therefore cannot be softened again and will char rather than melt — bakelite and melamine. Only thermoplastics can be mechanically recycled.',
      ],
      answer: 'Thermoplastics remould; thermosets set permanently because their chains are cross-linked.',
    },
    {
      q: 'What is vulcanisation and why is it done?',
      steps: [
        'Natural rubber is a polymer of isoprene, soft and sticky when warm and brittle when cold.',
        'Heating it with sulphur creates cross-links between the polymer chains.',
        'The result is far stronger, more elastic and stable across a much wider temperature range. The process is credited to Charles Goodyear, and almost all rubber in use today is vulcanised.',
      ],
      answer: 'Heating rubber with sulphur to cross-link the chains, making it strong and temperature-stable.',
    },
    {
      q: 'Why do antibiotics not work against a common cold?',
      steps: [
        'Antibiotics act on structures and processes specific to bacteria — the cell wall, bacterial ribosomes, bacterial enzymes.',
        'The common cold is caused by viruses, which have none of those structures and reproduce using the host cell\'s machinery.',
        'Taking antibiotics for a viral infection therefore does nothing useful and contributes to resistance in whatever bacteria are present.',
      ],
      answer: 'A cold is viral, and antibiotics act only on bacterial structures.',
    },
    {
      q: 'C₂H₆O can be either ethanol or dimethyl ether. What kind of isomerism is this?',
      steps: [
        'Both have the same molecular formula but different structures, so they are isomers.',
        'Chain isomerism differs in skeleton branching and position isomerism in where the same group sits.',
        'Here the functional group itself differs — one is an alcohol and the other an ether — so this is functional isomerism.',
      ],
      answer: 'Functional isomerism.',
    },
  ],

  practice: [
    {
      q: 'The general formula of alkanes is:',
      options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
      answer: 1,
      explain: 'CₙH₂ₙ is alkenes and CₙH₂ₙ₋₂ alkynes.',
    },
    {
      q: 'The hardest naturally occurring substance is:',
      options: ['Graphite', 'Diamond', 'Quartz', 'Corundum'],
      answer: 1,
      explain: 'Its rigid three-dimensional network of covalent bonds accounts for both the hardness and the electrical insulation.',
    },
    {
      q: 'Successive members of a homologous series differ by:',
      options: ['CH₃', 'CH₂', 'C₂H₄', 'H₂'],
      answer: 1,
      explain: 'A mass difference of 14 units. Members share chemical properties and show a gradual change in physical ones.',
    },
    {
      q: 'The functional group −COOH belongs to:',
      options: ['Alcohols', 'Aldehydes', 'Carboxylic acids', 'Ketones'],
      answer: 2,
      explain: 'Alcohols are −OH, aldehydes −CHO and ketones a carbonyl within the chain.',
    },
    {
      q: 'Conversion of vegetable oil to vanaspati is an example of:',
      options: ['Substitution', 'Hydrogenation', 'Oxidation', 'Saponification'],
      answer: 1,
      explain: 'Hydrogen adds across the double bonds in the presence of a nickel catalyst.',
    },
    {
      q: 'Which alcohol is highly toxic and causes blindness?',
      options: ['Ethanol', 'Methanol', 'Propanol', 'Glycerol'],
      answer: 1,
      explain: 'Methanol is metabolised to formic acid, which damages the optic nerve.',
    },
    {
      q: 'Soap is a:',
      options: ['Sodium salt of a long-chain fatty acid', 'Sodium sulphonate', 'Carboxylic acid', 'Polymer of glycerol'],
      answer: 0,
      explain: 'Its calcium and magnesium salts are insoluble, which is why it forms scum in hard water.',
    },
    {
      q: 'Bakelite is a:',
      options: ['Thermoplastic', 'Thermosetting plastic', 'Natural polymer', 'Addition polymer'],
      answer: 1,
      explain: 'Its cross-linked network cannot be softened by heating, unlike polythene or PVC.',
    },
    {
      q: 'Nylon is an example of a:',
      options: ['Addition polymer', 'Condensation polymer', 'Natural fibre', 'Thermosetting plastic'],
      answer: 1,
      explain: 'It forms with the elimination of water, unlike polythene, where the monomers simply add.',
    },
    {
      q: 'Vulcanisation of rubber involves heating it with:',
      options: ['Carbon', 'Sulphur', 'Nickel', 'Phosphorus'],
      answer: 1,
      explain: 'Sulphur cross-links the polyisoprene chains, making the rubber stronger and temperature-stable.',
    },
    {
      q: 'The polysaccharide humans cannot digest is:',
      options: ['Starch', 'Glycogen', 'Cellulose', 'Maltose'],
      answer: 2,
      explain: 'Humans lack the enzyme to break its bonds, which is why it serves as dietary fibre.',
    },
    {
      q: 'Penicillin was discovered by:',
      options: ['Louis Pasteur', 'Alexander Fleming', 'Edward Jenner', 'Robert Koch'],
      answer: 1,
      explain: 'In 1928 — the first widely used antibiotic.',
    },
    {
      q: 'An antiseptic differs from a disinfectant in that it is:',
      options: ['Applied to living tissue', 'Applied only to floors', 'Always a gas', 'Never chemical'],
      answer: 0,
      explain: 'Dettol and tincture of iodine are antiseptics; phenol is a disinfectant and is too harsh for skin.',
    },
    {
      q: 'Which fuel has the highest calorific value?',
      options: ['Coal', 'Petrol', 'LPG', 'Hydrogen'],
      answer: 3,
      explain: 'Hydrogen releases more energy per kilogram than any other fuel, which is why it is of interest for transport.',
    },
    {
      q: 'Ethanol and dimethyl ether, both C₂H₆O, illustrate:',
      options: ['Chain isomerism', 'Position isomerism', 'Functional isomerism', 'Optical isomerism'],
      answer: 2,
      explain: 'The functional group itself differs — one is an alcohol and the other an ether.',
    },
    {
      q: 'Buckminsterfullerene, C₆₀, has the shape of a:',
      options: ['Cube', 'Football', 'Sheet', 'Tube'],
      answer: 1,
      explain: 'A closed cage of sixty carbon atoms, named after the architect Buckminster Fuller.',
    },
  ],

  faqs: [
    {
      q: 'Why does carbon form so many more compounds than any other element?',
      a: 'Two reasons acting together. Catenation — carbon\'s ability to bond to itself in chains, branches and rings of unlimited length, made possible by the exceptional strength of the carbon-carbon bond. And tetravalency — four bonds per atom, which allows an enormous number of distinct arrangements. Add isomerism, where the same atoms can be arranged differently, and the number of possible compounds becomes effectively unlimited.',
    },
    {
      q: 'What is the practical difference between a saturated and an unsaturated compound?',
      a: 'A saturated compound has only single carbon-carbon bonds and cannot add more atoms, so it reacts by substitution. An unsaturated one has a double or triple bond and reacts readily by addition. Practically, unsaturated compounds burn with a sooty yellow flame, decolourise bromine water, and — in the case of fats — are liquid at room temperature and generally considered healthier than saturated fats.',
    },
    {
      q: 'Why can only some plastics be recycled?',
      a: 'Because only thermoplastics can be melted and remoulded. Their chains are separate, held by weak forces, so heat softens them reversibly. Thermosetting plastics are cross-linked into a single rigid network during moulding, so heating chars rather than softens them. Add contamination and mixed polymer types, and mechanical recycling becomes harder still — which is why reduction rather than recycling is the priority in the waste hierarchy.',
    },
    {
      q: 'Why do detergents work in hard water when soap does not?',
      a: 'Because of what their calcium and magnesium salts do. Soap is a fatty acid salt, and its calcium and magnesium salts are insoluble, so in hard water it precipitates as scum instead of lathering. Detergents have sulphonate or sulphate head groups whose calcium and magnesium salts remain soluble, so they lather regardless. This solved a real domestic problem and is why detergents were developed.',
    },
    {
      q: 'What is a micelle?',
      a: 'A spherical cluster of soap or detergent molecules with their non-polar hydrocarbon tails pointing inward and their ionic heads outward. Grease dissolves in the non-polar interior while the ionic surface keeps the whole cluster suspended in water. That dual nature — one end attracted to oil, the other to water — is the entire principle of cleaning.',
    },
    {
      q: 'Why is optical isomerism important in medicine?',
      a: 'Because biological receptors are themselves chiral, so two optical isomers of a drug can fit differently and behave quite differently in the body — one may be therapeutic and the other inactive or harmful. This is why many modern drugs are manufactured as a single isomer rather than as a mixture, and why the distinction matters far beyond the chemistry classroom.',
    },
    {
      q: 'Do antibiotics work against viruses?',
      a: 'No. Antibiotics target structures and processes unique to bacteria — the cell wall, bacterial ribosomes, bacterial enzymes. Viruses have none of these; they reproduce using the host cell\'s own machinery. Taking antibiotics for a cold or influenza therefore achieves nothing and drives resistance in whatever bacteria happen to be present. Antivirals are a separate class of drug.',
    },
    {
      q: 'Which parts of this topic appear in general-awareness papers?',
      a: 'The applied section almost entirely — plastics and their types, soaps and detergents, vulcanisation, classes of medicine, food preservatives and sweeteners, fuels and their calorific values, and the allotropes of carbon. IUPAC nomenclature, reaction mechanisms, isomer counting and biomolecule structures belong to JEE and NEET.',
    },
    {
      q: 'What makes benzene resist addition reactions despite being unsaturated?',
      a: 'Its delocalised electron system. In benzene the six electrons that would form three separate double bonds are spread evenly around the ring, and that arrangement is unusually stable. An addition reaction would destroy the delocalisation and lose that stability, so benzene prefers substitution, which keeps the ring intact. This resistance to addition is what defines aromatic character.',
    },
    {
      q: 'How much of the chemistry paper comes from organic chemistry?',
      a: 'Around a quarter to a third of JEE, making it the largest of the three branches in that paper; ten to fourteen questions in NEET, including biomolecules; two to three in SSC CGL Tier 1 and in RRB, almost all of them from the everyday applications; and one to two in NDA and CDS.',
    },
  ],

  related: [
    { label: 'Atomic Structure & Periodic Table', to: '/study-material/chemistry/atomic-structure/' },
    { label: 'Chemical Bonding & Reactions', to: '/study-material/chemistry/chemical-bonding/' },
    { label: 'Biology', to: '/study-material/biology/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'All Chemistry', to: '/study-material/chemistry/' },
  ],
}
