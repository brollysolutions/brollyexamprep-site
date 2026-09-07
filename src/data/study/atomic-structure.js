/**
 * Atomic Structure and the Periodic Table —
 * /study-material/chemistry/atomic-structure/
 *
 * The organising layer of chemistry. Everything on the bonding and organic
 * pages is a consequence of electronic configuration, so this page is written
 * to make configuration the thing you actually understand rather than the
 * thing you memorise.
 */
export default {
  subject: 'chemistry',
  subjectName: 'Chemistry',
  slug: 'atomic-structure',
  title: 'Atomic Structure & Periodic Table',
  seoTitle: 'Atomic Structure and Periodic Table | Configuration, Trends Notes & Practice',
  metaDescription:
    'Complete atomic structure and periodic table study material for JEE, NEET, SSC, RRB and state exams — classification of matter, atomic models.',
  readMinutes: 24,
  lead: [
    'Chemistry is the most systematic of the school sciences, and this page is the reason. Once you can write an electronic configuration, you can place an element in the periodic table; once you can place it, you can predict its size, its ionisation energy, the ions it forms, the kind of bond it makes and the reactions it undergoes. Almost nothing after this has to be memorised separately.',
    'The material therefore builds in one direction: what matter is made of, how the atom is structured, how that structure produces the periodic table, and what trends follow from it. The mole concept is included because it is the arithmetic every later calculation depends on, and it is where most careless marks are lost.',
  ],

  weightage: [
    { exam: 'JEE Main / Advanced', count: '15–20% of the chemistry paper', note: 'Atomic structure, periodicity and stoichiometry form the physical chemistry base.' },
    { exam: 'NEET Chemistry', count: '6–8 questions', note: 'Periodic properties and the mole concept are the most reliable.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–2 questions', note: 'Discoverers, common elements and basic definitions.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Atomic number, symbols, and who discovered what.' },
    { exam: 'NDA / CDS General Ability', count: '2–3 questions', note: 'Structure of the atom and the periodic table at school level.' },
  ],

  contents: [
    { icon: 'layers', title: 'Matter and its laws', sub: 'Classification and the basic laws', href: '#matter' },
    { icon: 'search', title: 'Atomic models', sub: 'From Dalton to Bohr', href: '#models' },
    { icon: 'target', title: 'Electronic structure', sub: 'Orbitals, quantum numbers, configuration', href: '#structure' },
    { icon: 'chart', title: 'The periodic table', sub: 'How it was built and how it works', href: '#table' },
    { icon: 'refresh', title: 'Periodic trends', sub: 'Size, energy and electronegativity', href: '#trends' },
    { icon: 'doc', title: 'The mole concept', sub: 'Chemical arithmetic', href: '#mole' },
    { icon: 'bell', title: 'Radioactivity', sub: 'Nuclear chemistry', href: '#nuclear' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'matter',
      heading: 'Matter and its laws',
      eyebrow: 'Classification and the basic laws',
      intro:
        'A short foundational section, all of it directly examinable and none of it requiring calculation.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Classification of matter',
              'A pure substance has a fixed composition and may be an element, which cannot be broken down chemically, or a compound, in which elements are chemically combined in a fixed ratio. A mixture contains two or more substances not chemically combined, in any proportion; it is homogeneous if uniform throughout, like a solution, and heterogeneous otherwise. A compound has properties entirely different from its constituents, while a mixture retains theirs — the standard contrast being water against a mixture of hydrogen and oxygen.',
            ],
            [
              'The laws of chemical combination',
              'The law of conservation of mass, from Lavoisier: mass is neither created nor destroyed in a chemical reaction. The law of definite proportions, from Proust: a given compound always contains the same elements in the same proportion by mass. The law of multiple proportions, from Dalton: when two elements form more than one compound, the masses of one combining with a fixed mass of the other are in a simple whole-number ratio. Gay-Lussac\'s law of gaseous volumes and Avogadro\'s law complete the set.',
            ],
            [
              'Avogadro\'s law',
              'Equal volumes of all gases, at the same temperature and pressure, contain equal numbers of molecules. It resolved the confusion between atoms and molecules that had held chemistry back for half a century, and it is the reason molar volume is a useful idea at all.',
            ],
            [
              'Separation techniques',
              'Filtration for an insoluble solid in a liquid; evaporation and crystallisation for a dissolved solid; distillation for miscible liquids of different boiling point, and fractional distillation when those points are close, as in petroleum refining; sublimation for substances such as camphor, naphthalene and ammonium chloride that pass directly from solid to vapour; chromatography for separating components of a mixture by differential adsorption; and a separating funnel for immiscible liquids. Each of these is asked as a straight pairing.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'models',
      heading: 'Atomic models',
      eyebrow: 'From Dalton to Bohr',
      intro:
        'A sequence of models, each introduced to explain something its predecessor could not. Questions ask who proposed what and what experiment forced the change.',
      blocks: [
        {
          type: 'table',
          caption: 'The models in order',
          head: ['Model', 'Proposer and year', 'What it said and where it failed'],
          rows: [
            ['Atomic theory', 'John Dalton, 1808', 'Matter consists of indivisible atoms; atoms of an element are identical. It explained the laws of chemical combination but could not accommodate subatomic particles or isotopes.'],
            ['Plum pudding model', 'J. J. Thomson, after discovering the electron in 1897', 'A sphere of positive charge with electrons embedded in it. It could not explain why alpha particles were sharply deflected in Rutherford\'s experiment.'],
            ['Nuclear model', 'Ernest Rutherford, 1911', 'The gold foil experiment showed that most alpha particles passed straight through while a few rebounded, implying a tiny dense positively charged nucleus with electrons around it. It could not explain why the orbiting electron does not spiral into the nucleus by radiating energy.'],
            ['Bohr model', 'Niels Bohr, 1913', 'Electrons occupy fixed orbits of definite energy and radiate only when jumping between them. It explained the hydrogen spectrum precisely but failed for multi-electron atoms and could not account for the fine structure of spectral lines.'],
            ['Quantum mechanical model', 'Schrödinger, Heisenberg and others, from 1926', 'Electrons are described by probability distributions called orbitals rather than by definite paths. This is the accepted model.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The three subatomic particles',
              'The electron, discovered by J. J. Thomson in 1897, negatively charged and of negligible mass; its charge was measured by Millikan\'s oil-drop experiment. The proton, positively charged, identified by Goldstein and characterised by Rutherford. The neutron, uncharged and of mass close to the proton\'s, discovered by James Chadwick in 1932 — the last of the three, which is why earlier models are silent about it.',
            ],
            [
              'Atomic number and mass number',
              'The atomic number is the number of protons and defines the element; the mass number is the total of protons and neutrons. Neither includes electrons, whose mass is negligible. It is the atomic number, not the atomic mass, that determines chemical identity — the insight that corrected Mendeleev\'s table.',
            ],
            [
              'Isotopes, isobars and isotones',
              'Isotopes have the same atomic number but different mass numbers — the same element with different numbers of neutrons, such as the three isotopes of hydrogen: protium, deuterium and tritium. Isobars have the same mass number but different atomic numbers, so they are different elements. Isotones have the same number of neutrons. Isotopes have identical chemical properties, since chemistry depends on electrons; their physical properties differ.',
            ],
            [
              'Uses of isotopes',
              'Carbon-14 for dating organic remains up to some tens of thousands of years. Uranium-235 as reactor and weapon fuel. Cobalt-60 in cancer radiotherapy and for sterilising equipment. Iodine-131 in diagnosing and treating thyroid disorders. Phosphorus-32 in tracing metabolism. These pairings appear directly in general awareness papers.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'structure',
      heading: 'Electronic structure',
      eyebrow: 'Orbitals, quantum numbers, configuration',
      intro:
        'The heart of the subject. Three rules govern how electrons fill orbitals, and getting a configuration right is what makes everything downstream predictable.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Orbital versus orbit',
              'A Bohr orbit is a definite circular path. An orbital is a region of space in which an electron is most likely to be found — a probability distribution, not a trajectory. The distinction follows from the Heisenberg uncertainty principle, which states that the position and momentum of an electron cannot both be known precisely.',
            ],
            [
              'The four quantum numbers',
              'The principal quantum number n gives the shell and the main energy level. The azimuthal quantum number l gives the subshell and the shape — 0 for s, 1 for p, 2 for d, 3 for f. The magnetic quantum number m gives the orientation, and takes 2l + 1 values. The spin quantum number s takes the value plus or minus one half. No two electrons in an atom can have all four the same.',
            ],
            [
              'The three filling rules',
              'The Aufbau principle: electrons occupy the lowest available energy orbital first, following the n + l rule — lower n + l fills first, and where two are equal, the lower n fills first. The Pauli exclusion principle: no orbital may hold more than two electrons, and they must have opposite spins. Hund\'s rule of maximum multiplicity: within a subshell, electrons occupy separate orbitals with parallel spins before any orbital is doubly occupied.',
            ],
            [
              'Orbital capacities',
              'An s subshell holds 2 electrons, p holds 6, d holds 10 and f holds 14. A shell holds a maximum of 2n² electrons. The order of filling is 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p — note that 4s fills before 3d, which is what produces the transition series.',
            ],
            [
              'The anomalous configurations',
              'Chromium is [Ar] 3d⁵ 4s¹ and copper is [Ar] 3d¹⁰ 4s¹, rather than the expected 3d⁴ 4s² and 3d⁹ 4s². A half-filled or completely filled d subshell is more stable because of symmetry and exchange energy, so an electron is promoted from 4s. These two are asked directly and are worth learning as exceptions.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Structural relations',
          items: [
            { expr: 'Maximum electrons in a shell = 2n²', note: '2 in the first shell, 8 in the second, 18 in the third, 32 in the fourth.' },
            { expr: 'Number of orbitals in a subshell = 2l + 1', note: 'One s orbital, three p, five d and seven f.' },
            { expr: 'E_n = −13.6/n² eV for hydrogen', note: 'The energy of the nth Bohr level; the negative sign means the electron is bound.' },
            { expr: 'Order of filling by the n + l rule', note: 'Lower n + l fills first; if two subshells have the same n + l, the one with lower n fills first — which is why 4s precedes 3d.' },
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'table',
      heading: 'The periodic table',
      eyebrow: 'How it was built and how it works',
      intro:
        'The table is a picture of electronic configuration. Its rows are shells being filled and its blocks are subshells, which is why position predicts behaviour.',
      blocks: [
        {
          type: 'table',
          caption: 'The development of the periodic law',
          head: ['Contribution', 'Who and when', 'What it said'],
          rows: [
            ['Law of triads', 'Döbereiner, 1817', 'In groups of three similar elements, the atomic mass of the middle one is roughly the average of the other two. It worked for only a few sets.'],
            ['Law of octaves', 'Newlands, 1865', 'Arranged by increasing atomic mass, every eighth element resembles the first. It failed beyond calcium and had no room for undiscovered elements.'],
            ['Periodic law', 'Mendeleev, 1869', 'Properties are a periodic function of atomic mass. He left gaps for undiscovered elements and predicted their properties accurately — his greatest success — but had to place some pairs out of mass order.'],
            ['Modern periodic law', 'Moseley, 1913', 'Properties are a periodic function of atomic number, not atomic mass. This removed Mendeleev\'s anomalies and gave the table its present basis.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Structure of the modern table',
              'Seven periods, corresponding to the shell being filled, and eighteen groups. The period number equals the principal quantum number of the outermost shell; the group tells you the number of valence electrons and hence the typical valency.',
            ],
            [
              'The four blocks',
              's-block, groups 1 and 2, comprising the alkali metals and alkaline earth metals — soft, reactive, forming positive ions readily. p-block, groups 13 to 18, containing metals, non-metals and metalloids, and ending in the noble gases. d-block, groups 3 to 12, the transition elements, characterised by variable valency, coloured compounds and catalytic activity. f-block, the lanthanides and actinides, placed separately at the foot of the table.',
            ],
            [
              'Groups worth naming',
              'Group 1 the alkali metals, group 2 the alkaline earth metals, group 15 the pnictogens, group 16 the chalcogens, group 17 the halogens and group 18 the noble gases. Hydrogen is placed in group 1 but resembles both alkali metals and halogens in different respects, and its anomalous position is a standard question.',
            ],
            [
              'Metals, non-metals and metalloids',
              'Metals are on the left and centre, are lustrous, malleable, ductile and good conductors, and form basic oxides. Non-metals are on the upper right, are brittle if solid, are poor conductors except graphite, and form acidic oxides. Metalloids such as boron, silicon, germanium, arsenic, antimony and tellurium lie along the dividing staircase and have intermediate properties — which is why silicon and germanium are semiconductors.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'trends',
      heading: 'Periodic trends',
      eyebrow: 'Size, energy and electronegativity',
      intro:
        'Every trend in the table follows from two competing influences: nuclear charge, which pulls electrons in and increases across a period, and the number of shells with their shielding, which pushes them out and increases down a group.',
      blocks: [
        {
          type: 'table',
          caption: 'The trends',
          head: ['Property', 'Across a period, left to right', 'Down a group'],
          rows: [
            ['Atomic radius', 'Decreases — nuclear charge rises while electrons enter the same shell, so the pull increases', 'Increases — a new shell is added at each step'],
            ['Ionisation energy', 'Increases — a more strongly held electron is harder to remove', 'Decreases — the outer electron is farther out and better shielded'],
            ['Electron affinity', 'Generally increases in magnitude — a smaller atom attracts an incoming electron more strongly', 'Generally decreases'],
            ['Electronegativity', 'Increases — fluorine is the most electronegative element', 'Decreases — caesium and francium are the least'],
            ['Metallic character', 'Decreases — elements become less willing to lose electrons', 'Increases — which is why the heaviest member of a group is the most metallic'],
            ['Valency', 'Rises from 1 to 4 and falls back to 0 at the noble gas', 'Remains the same throughout a group'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Ionic radius',
              'A cation is always smaller than its parent atom, because it has lost an entire shell in many cases and because the remaining electrons feel a greater effective nuclear charge each. An anion is always larger, because added electrons increase repulsion while nuclear charge is unchanged. Among isoelectronic species — those with the same number of electrons — size decreases as nuclear charge increases.',
            ],
            [
              'Shielding and effective nuclear charge',
              'Inner electrons screen the outer ones from the full nuclear charge, so what an outer electron actually experiences is an effective nuclear charge smaller than the atomic number. Shielding is most effective for s electrons and least for f, which is why the lanthanide contraction occurs — the steady decrease in size across the lanthanide series, which makes the second and third transition series unusually similar in size.',
            ],
            [
              'Exceptions worth knowing',
              'Ionisation energy dips slightly from beryllium to boron, and from nitrogen to oxygen, because a filled or half-filled subshell is extra stable and the next electron is comparatively easy to remove. Noble gases have the highest ionisation energies in their periods. Fluorine has a slightly lower electron affinity than chlorine, despite being smaller, because its compact size makes electron-electron repulsion severe.',
            ],
            [
              'Diagonal relationship',
              'Lithium resembles magnesium, beryllium resembles aluminium and boron resembles silicon, because the effects of moving across a period and down a group partly cancel. It is asked as a straight recall item.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'mole',
      heading: 'The mole concept',
      eyebrow: 'Chemical arithmetic',
      intro:
        'The bridge between the mass a chemist can weigh and the number of particles that actually react. Nearly every numerical question in chemistry passes through it.',
      blocks: [
        {
          type: 'formula',
          title: 'The mole relations',
          items: [
            { expr: '1 mole = 6.022 × 10²³ particles', note: 'Avogadro\'s number. The particles may be atoms, molecules, ions or electrons — the question must say which.' },
            { expr: 'Number of moles = mass ÷ molar mass', note: 'The most used relation in all of chemistry.' },
            { expr: '1 mole of any gas occupies 22.4 litres at STP', note: 'Standard temperature and pressure being 273 K and 1 atmosphere. This follows directly from Avogadro\'s law.' },
            { expr: 'Number of moles = volume at STP ÷ 22.4', note: 'For gases only.' },
            { expr: 'Molarity = moles of solute ÷ volume of solution in litres', note: 'Molality, by contrast, is moles of solute per kilogram of solvent, and unlike molarity it does not change with temperature.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Empirical and molecular formula',
              'The empirical formula gives the simplest whole-number ratio of atoms; the molecular formula gives the actual number in a molecule. Glucose is CH₂O empirically and C₆H₁₂O₆ molecularly. The molecular formula is always a whole-number multiple of the empirical one, and finding that multiple requires the molar mass.',
            ],
            [
              'Limiting reagent',
              'In a reaction where reactants are not present in exactly the stoichiometric ratio, the one that runs out first limits how much product can form. Identifying it is the step candidates most often skip, and it is the step the question is usually testing.',
            ],
            [
              'Percentage yield',
              'The actual yield expressed as a percentage of the theoretical yield calculated from stoichiometry. Real reactions fall short because of side reactions, incomplete conversion and losses in handling.',
            ],
            [
              'Concentration terms',
              'Molarity depends on the volume of solution, which varies with temperature; molality depends on the mass of solvent, which does not. Normality is based on gram equivalents. Mole fraction is the moles of one component divided by total moles, and the mole fractions of all components sum to one. Parts per million is used for very dilute solutions, particularly in environmental measurement.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'nuclear',
      heading: 'Radioactivity',
      eyebrow: 'Nuclear chemistry',
      intro:
        'A short block, shared with the physics syllabus, and asked mostly for its applications.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Discovery',
              'Radioactivity was discovered by Henri Becquerel in 1896 and investigated by Marie and Pierre Curie, who isolated polonium and radium. Marie Curie remains the only person to have won Nobel Prizes in two different sciences — physics and chemistry.',
            ],
            [
              'The three emissions',
              'Alpha particles are helium nuclei, positively charged, heavy, of low penetrating power and stopped by paper. Beta particles are electrons, of intermediate penetration, stopped by a few millimetres of aluminium. Gamma rays are high-energy electromagnetic radiation with no charge or mass, the most penetrating, requiring thick lead or concrete. Penetrating power runs gamma, beta, alpha; ionising power runs the other way.',
            ],
            [
              'Displacement laws',
              'Alpha emission reduces the atomic number by two and the mass number by four. Beta emission increases the atomic number by one and leaves the mass number unchanged, since a neutron becomes a proton. Gamma emission changes neither, being only a release of excess energy.',
            ],
            [
              'Half-life',
              'The time taken for half the nuclei in a sample to decay. It is a fixed property of an isotope and is entirely unaffected by temperature, pressure or chemical combination. After n half-lives the surviving fraction is one over two to the n.',
            ],
            [
              'Applications',
              'Carbon-14 dating for organic material, based on the fixed ratio of carbon-14 to carbon-12 in living tissue and its decay after death. Uranium-lead dating for rocks. Cobalt-60 in radiotherapy and sterilisation. Iodine-131 for the thyroid. Radioisotopes as tracers in medicine, agriculture and industry, and in food irradiation to extend shelf life.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Write the electronic configuration of chromium and explain why it is anomalous.',
      steps: [
        'Chromium has atomic number 24. Filling in the expected order gives 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁴ 4s².',
        'But a half-filled d subshell is unusually stable, because of the symmetry of the electron distribution and the exchange energy gained.',
        'So one 4s electron is promoted, giving [Ar] 3d⁵ 4s¹. Copper is anomalous for the same reason, ending in 3d¹⁰ 4s¹.',
      ],
      answer: '[Ar] 3d⁵ 4s¹ — a half-filled d subshell is more stable than the expected arrangement.',
    },
    {
      q: 'How many moles are there in 88 grams of carbon dioxide, and how many molecules?',
      steps: [
        'The molar mass of CO₂ is 12 + 2 × 16 = 44 grams per mole.',
        'Moles = mass ÷ molar mass = 88 ÷ 44 = 2 moles.',
        'Molecules = 2 × 6.022 × 10²³ = 1.2044 × 10²⁴.',
      ],
      answer: '2 moles, containing about 1.2 × 10²⁴ molecules.',
    },
    {
      q: 'Why does atomic radius decrease across a period but increase down a group?',
      steps: [
        'Across a period, each successive element adds one proton and one electron, but the electron enters the same shell.',
        'Nuclear charge therefore rises while shielding stays essentially constant, so the outer electrons are pulled in more tightly and the atom shrinks.',
        'Down a group, each element adds a whole new shell, and the increased distance and shielding outweigh the increased nuclear charge, so the atom grows.',
      ],
      answer: 'Rising nuclear charge with no new shell across a period; a new shell each step down a group.',
    },
    {
      q: 'Why is 4s filled before 3d?',
      steps: [
        'The order of filling follows the n + l rule: the subshell with the lower value of n + l is filled first.',
        'For 4s, n + l = 4 + 0 = 4. For 3d, n + l = 3 + 2 = 5.',
        'So 4s has the lower value and fills first — which is what creates the transition series in the fourth period.',
      ],
      answer: 'Because 4s has a lower n + l value than 3d.',
    },
    {
      q: 'Arrange O²⁻, F⁻, Na⁺ and Mg²⁺ in order of decreasing size.',
      steps: [
        'All four are isoelectronic — each has ten electrons, the neon configuration.',
        'For isoelectronic species, size is determined by nuclear charge: more protons pull the same ten electrons in more tightly.',
        'Nuclear charges are 8, 9, 11 and 12 respectively, so size decreases in that order.',
      ],
      answer: 'O²⁻ > F⁻ > Na⁺ > Mg²⁺.',
    },
    {
      q: 'A nucleus emits an alpha particle followed by two beta particles. How do its atomic and mass numbers change?',
      steps: [
        'Alpha emission reduces the atomic number by 2 and the mass number by 4.',
        'Each beta emission increases the atomic number by 1 and leaves the mass number unchanged, so two of them add 2 to the atomic number.',
        'Net effect: atomic number changes by −2 + 2 = 0, and mass number by −4.',
      ],
      answer: 'The atomic number is unchanged and the mass number falls by 4 — the product is an isotope of the original element.',
    },
    {
      q: 'Why did Moseley\'s work replace Mendeleev\'s basis for the periodic table?',
      steps: [
        'Mendeleev arranged elements by increasing atomic mass, which forced him to reverse some pairs — such as tellurium and iodine — to keep chemically similar elements together.',
        'Moseley showed from X-ray spectra that the fundamental property is atomic number, the number of protons.',
        'Arranged by atomic number, those anomalies disappear naturally, and the modern periodic law states that properties are a periodic function of atomic number.',
      ],
      answer: 'Because atomic number, not atomic mass, is the property that actually determines periodicity.',
    },
    {
      q: 'Which element has the highest electronegativity, and why does it matter?',
      steps: [
        'Electronegativity increases across a period and decreases down a group, so the highest value is at the top right, excluding the noble gases.',
        'That element is fluorine, assigned 4.0 on the Pauling scale.',
        'It matters because the difference in electronegativity between two bonded atoms determines whether the bond is non-polar covalent, polar covalent or ionic.',
      ],
      answer: 'Fluorine — and the electronegativity difference is what decides bond type.',
    },
  ],

  practice: [
    {
      q: 'The neutron was discovered by:',
      options: ['J. J. Thomson', 'Ernest Rutherford', 'James Chadwick', 'Niels Bohr'],
      answer: 2,
      explain: 'In 1932 — long after the electron in 1897 and the nuclear model of 1911, which is why earlier models omit it.',
    },
    {
      q: 'Rutherford\'s gold foil experiment established the existence of the:',
      options: ['Nucleus', 'Electron', 'Neutron', 'Orbital'],
      answer: 0,
      explain: 'Most alpha particles passed straight through, but a few rebounded sharply, implying a tiny dense positive centre.',
    },
    {
      q: 'The maximum number of electrons in a shell with n = 3 is:',
      options: ['8', '10', '18', '32'],
      answer: 2,
      explain: '2n² = 2 × 9 = 18.',
    },
    {
      q: 'The electronic configuration of chromium (Z = 24) is:',
      options: ['[Ar] 3d⁴ 4s²', '[Ar] 3d⁵ 4s¹', '[Ar] 3d⁶ 4s⁰', '[Ar] 3d³ 4s³'],
      answer: 1,
      explain: 'A half-filled d subshell is more stable, so a 4s electron is promoted.',
    },
    {
      q: 'The modern periodic law is based on:',
      options: ['Atomic mass', 'Valency', 'Atomic radius', 'Atomic number'],
      answer: 3,
      explain: 'Moseley established this in 1913, resolving the anomalies in Mendeleev\'s mass-based arrangement.',
    },
    {
      q: 'Which element is the most electronegative?',
      options: ['Oxygen', 'Chlorine', 'Fluorine', 'Nitrogen'],
      answer: 2,
      explain: 'Electronegativity increases across a period and decreases down a group, placing fluorine highest at 4.0 on the Pauling scale.',
    },
    {
      q: 'Atomic radius across a period from left to right:',
      options: ['Increases', 'Decreases', 'Remains constant', 'First increases then decreases'],
      answer: 1,
      explain: 'Nuclear charge rises while electrons enter the same shell, so they are pulled in more tightly.',
    },
    {
      q: 'One mole of any gas at STP occupies:',
      options: ['11.2 litres', '24.0 litres', '1 litre', '22.4 litres'],
      answer: 3,
      explain: 'A direct consequence of Avogadro\'s law, at 273 K and one atmosphere.',
    },
    {
      q: 'Isotopes of an element differ in the number of:',
      options: ['Protons', 'Electrons', 'Neutrons', 'Orbitals'],
      answer: 2,
      explain: 'They have the same atomic number but different mass numbers, so their chemical properties are identical.',
    },
    {
      q: 'Hund\'s rule states that electrons in a subshell:',
      options: ['Occupy separate orbitals with parallel spins first', 'Pair up before occupying separate orbitals', 'Always have opposite spins', 'Fill the highest energy orbital first'],
      answer: 0,
      explain: 'Pairing is avoided until every orbital of the subshell has one electron.',
    },
    {
      q: 'Which of these is a metalloid?',
      options: ['Sodium', 'Silicon', 'Sulphur', 'Selenium'],
      answer: 1,
      explain: 'Metalloids lie along the dividing staircase; silicon and germanium are semiconductors for this reason.',
    },
    {
      q: 'Ionisation energy down a group:',
      options: ['Increases', 'Remains constant', 'Varies randomly', 'Decreases'],
      answer: 3,
      explain: 'The outermost electron is farther from the nucleus and better shielded, so it is easier to remove.',
    },
    {
      q: 'The law of definite proportions was given by:',
      options: ['Dalton', 'Proust', 'Lavoisier', 'Avogadro'],
      answer: 1,
      explain: 'Dalton gave the law of multiple proportions and Lavoisier the conservation of mass.',
    },
    {
      q: 'A cation is always:',
      options: ['Smaller than its parent atom', 'Larger than its parent atom', 'The same size', 'Larger than the corresponding anion'],
      answer: 0,
      explain: 'It has lost electrons, so the remaining ones experience a greater effective nuclear charge each.',
    },
    {
      q: 'Carbon-14 dating is used to determine the age of:',
      options: ['Rocks', 'Stars', 'Metal artefacts', 'Organic remains'],
      answer: 3,
      explain: 'It relies on the decay of carbon-14 after an organism dies. Uranium-lead dating is used for rocks.',
    },
    {
      q: 'Alpha particles are:',
      options: ['Helium nuclei', 'Electrons', 'Photons', 'Neutrons'],
      answer: 0,
      explain: 'They carry a double positive charge, have the lowest penetrating power and the highest ionising power of the three emissions.',
    },
  ],

  faqs: [
    {
      q: 'Why does understanding electronic configuration matter so much?',
      a: 'Because everything downstream follows from it. Configuration determines position in the periodic table; position determines atomic size, ionisation energy and electronegativity; those determine what ions an element forms and what bonds it makes; and bonding determines reactivity. A candidate who can write configurations reliably has to memorise very little of the rest of chemistry.',
    },
    {
      q: 'What is the difference between an orbit and an orbital?',
      a: 'An orbit is a definite circular path, as in the Bohr model. An orbital is a three-dimensional region of space in which an electron is most likely to be found — a probability distribution with no defined path. The change was forced by the uncertainty principle, which says position and momentum cannot both be known precisely, so a trajectory is not a meaningful description of an electron.',
    },
    {
      q: 'Why is 4s filled before 3d if the third shell comes first?',
      a: 'Because filling order follows energy, not shell number, and energy is governed by the n + l rule. For 4s, n + l is 4; for 3d it is 5. The 4s subshell is therefore lower in energy and fills first. Once electrons are present, however, 3d is lower and is written first in the configuration and lost last on ionisation — which is why transition metal ions lose 4s electrons before 3d.',
    },
    {
      q: 'What made Mendeleev\'s table a success despite being based on the wrong property?',
      a: 'Two things. He left gaps rather than forcing known elements into them, and he predicted the properties of the missing elements with striking accuracy — eka-aluminium turned out to be gallium and eka-silicon germanium. And where atomic mass ordering conflicted with chemical similarity, he trusted chemistry and reversed the pair. Moseley later showed why he had been right to do so.',
    },
    {
      q: 'Why does ionisation energy dip from nitrogen to oxygen?',
      a: 'Nitrogen has a half-filled 2p subshell, with one electron in each of the three p orbitals, which is an unusually stable arrangement. Oxygen\'s next electron must pair up in an already occupied orbital, and the resulting electron-electron repulsion makes it easier to remove. The same reasoning explains the dip from beryllium to boron, where a filled 2s gives way to a single 2p electron.',
    },
    {
      q: 'What is the difference between molarity and molality?',
      a: 'Molarity is moles of solute per litre of solution; molality is moles of solute per kilogram of solvent. The practical difference is temperature: volume expands with heat, so molarity changes with temperature, while mass does not, so molality is constant. That is why molality is used in work on boiling point elevation and freezing point depression.',
    },
    {
      q: 'How do I identify the limiting reagent quickly?',
      a: 'Convert each reactant\'s mass to moles, then divide by its coefficient in the balanced equation. The smallest resulting value belongs to the limiting reagent. Doing it that way avoids the common error of assuming the reactant present in the smallest mass is limiting, which is only true if the coefficients and molar masses happen to work out that way.',
    },
    {
      q: 'Is half-life really unaffected by anything?',
      a: 'For all practical purposes, yes. Radioactive decay is a nuclear process, and chemical bonding, temperature and pressure act on electrons, which are far too weakly coupled to the nucleus to affect it. Extremely small effects exist for a few decay modes that involve orbital electrons, but nothing that appears in an examination. Treat half-life as an unchangeable property of the isotope.',
    },
    {
      q: 'Which parts of this topic are asked in general awareness papers?',
      a: 'The discoverers and their experiments, the three subatomic particles, isotopes and their applications, the periodic table\'s development from Döbereiner to Moseley, and the names of the element groups. Quantum numbers, configuration writing and mole calculations belong to JEE and NEET rather than to SSC and RRB.',
    },
    {
      q: 'How much of the chemistry paper comes from this block?',
      a: 'Roughly fifteen to twenty per cent of JEE chemistry, counting atomic structure, periodicity and stoichiometry together; six to eight questions in NEET; one to two in SSC CGL Tier 1; two to three in RRB; and two to three in NDA and CDS.',
    },
  ],

  related: [
    { label: 'Chemical Bonding & Reactions', to: '/study-material/chemistry/chemical-bonding/' },
    { label: 'Organic & Everyday Chemistry', to: '/study-material/chemistry/organic-chemistry/' },
    { label: 'Physics', to: '/study-material/physics/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'All Chemistry', to: '/study-material/chemistry/' },
  ],
}
