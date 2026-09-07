/**
 * Chemical Bonding and Reactions —
 * /study-material/chemistry/chemical-bonding/
 *
 * What holds atoms together, what shape that gives a molecule, and what
 * happens when molecules react. The middle third of the chemistry syllabus,
 * bridging the electronic structure of the previous page and the organic
 * chemistry of the next.
 */
export default {
  subject: 'chemistry',
  subjectName: 'Chemistry',
  slug: 'chemical-bonding',
  title: 'Chemical Bonding & Reactions',
  seoTitle: 'Chemical Bonding and Reactions | Bonds, pH, Redox Notes & Practice',
  metaDescription:
    'Complete chemical bonding and reactions study material for JEE, NEET, SSC, RRB and state exams — ionic covalent and metallic bonding.',
  readMinutes: 25,
  lead: [
    'Every property of a substance — whether it melts at 800 degrees or at 8, whether it conducts electricity, whether it dissolves in water — follows from how its atoms are bonded. This page connects that one idea to everything that follows from it, which is why it sits between the atomic structure page and the organic chemistry one.',
    'The reactions half is written the way general awareness papers ask it: which indicator turns which colour, what pH means, which metal displaces which, why iron rusts and galvanised iron does not. The physical chemistry needed for entrance papers — gas laws, colligative properties, equilibrium — is given alongside, with the working relations stated.',
  ],

  weightage: [
    { exam: 'JEE Main / Advanced', count: '20–25% of the chemistry paper', note: 'Bonding, states of matter, equilibrium and electrochemistry together.' },
    { exam: 'NEET Chemistry', count: '8–10 questions', note: 'Bonding and hybridisation are the most reliably asked.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'pH, indicators, common salts and the reactivity series.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Acids and bases, rusting and everyday chemical names.' },
    { exam: 'NDA / CDS General Ability', count: '2–3 questions', note: 'Bond types and simple reaction chemistry.' },
  ],

  contents: [
    { icon: 'layers', title: 'Types of bond', sub: 'Ionic, covalent, metallic and beyond', href: '#bonding' },
    { icon: 'target', title: 'Molecular shape', sub: 'VSEPR and hybridisation', href: '#shapes' },
    { icon: 'refresh', title: 'States of matter', sub: 'Gas laws and phase changes', href: '#states' },
    { icon: 'doc', title: 'Solutions', sub: 'Solubility and colligative properties', href: '#solutions' },
    { icon: 'play', title: 'Types of reaction', sub: 'The five patterns', href: '#reactions' },
    { icon: 'bell', title: 'Acids, bases and salts', sub: 'pH, indicators and neutralisation', href: '#acids' },
    { icon: 'chart', title: 'Redox and electrochemistry', sub: 'Electron transfer in practice', href: '#redox' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'bonding',
      heading: 'Types of bond',
      eyebrow: 'Ionic, covalent, metallic and beyond',
      intro:
        'Atoms bond in order to reach a stable electronic arrangement, usually the noble gas configuration. How they get there — by transferring electrons or by sharing them — determines everything about the resulting substance.',
      blocks: [
        {
          type: 'table',
          caption: 'Ionic and covalent compounds compared',
          head: ['Property', 'Ionic compounds', 'Covalent compounds'],
          rows: [
            ['How the bond forms', 'Complete transfer of electrons from a metal to a non-metal, producing oppositely charged ions held by electrostatic attraction', 'Sharing of electron pairs between non-metal atoms'],
            ['Physical state', 'Almost always crystalline solids at room temperature', 'Often gases or liquids; solids if the molecules are large'],
            ['Melting and boiling points', 'High, because the ionic lattice is held by strong forces in all directions', 'Generally low, because the intermolecular forces are weak even though the bonds within a molecule are strong'],
            ['Electrical conductivity', 'Conduct when molten or dissolved in water, since the ions become free to move; do not conduct as solids', 'Do not conduct, since there are no free ions or electrons — graphite being the notable exception'],
            ['Solubility', 'Generally soluble in water and other polar solvents', 'Generally soluble in organic solvents and insoluble in water'],
            ['Examples', 'Sodium chloride, magnesium oxide, calcium chloride', 'Water, methane, carbon dioxide, ammonia'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Coordinate or dative bond',
              'A covalent bond in which both shared electrons come from the same atom. The ammonium ion, formed when ammonia donates its lone pair to a proton, and the hydronium ion in water are the standard examples. Once formed, the bond is indistinguishable from an ordinary covalent bond.',
            ],
            [
              'Metallic bonding',
              'Positive metal ions arranged in a lattice within a sea of delocalised electrons free to move throughout the structure. This explains the characteristic metallic properties at once: electrical and thermal conductivity from the mobile electrons, malleability and ductility because the layers can slide without breaking the bonding, and lustre from the interaction of those electrons with light.',
            ],
            [
              'Hydrogen bonding',
              'A strong dipole interaction between hydrogen bonded to a highly electronegative atom — fluorine, oxygen or nitrogen — and a lone pair on another such atom. It is far weaker than a covalent bond but far stronger than ordinary intermolecular forces, and it explains the anomalously high boiling point of water, why ice is less dense than water, the structure of DNA and the properties of proteins.',
            ],
            [
              'Van der Waals forces',
              'Weak attractions between molecules, arising from permanent or temporary dipoles. They increase with molecular size, which is why boiling points rise down a homologous series and down the halogen group. They are what allows a gecko to climb glass and what holds the layers of graphite together.',
            ],
            [
              'The octet rule and its exceptions',
              'Atoms tend to gain, lose or share electrons so as to reach eight in the outermost shell. Hydrogen, lithium and beryllium reach a duplet instead. Boron trifluoride is stable with only six electrons around boron, and phosphorus pentachloride and sulphur hexafluoride have expanded octets, which is possible only for elements from the third period onwards because they have vacant d orbitals available.',
            ],
            [
              'Polarity',
              'A covalent bond between atoms of different electronegativity is polar, with a partial negative charge on the more electronegative atom. Whether the molecule as a whole is polar depends on its shape: carbon dioxide has two polar bonds but is linear, so they cancel and the molecule is non-polar, while water has two polar bonds in a bent arrangement that do not cancel, making it strongly polar. This is why water dissolves ionic compounds and carbon dioxide does not.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'shapes',
      heading: 'Molecular shape',
      eyebrow: 'VSEPR and hybridisation',
      intro:
        'Shape follows from a single principle: electron pairs around a central atom arrange themselves as far apart as possible, and a lone pair takes more room than a bonding pair.',
      blocks: [
        {
          type: 'table',
          caption: 'Shapes from electron pair geometry',
          head: ['Electron pairs', 'Geometry and hybridisation', 'Effect of lone pairs'],
          rows: [
            ['Two', 'Linear, 180°, sp hybridised — beryllium chloride, carbon dioxide, acetylene', 'No lone pairs, so the shape is the geometry.'],
            ['Three', 'Trigonal planar, 120°, sp² — boron trifluoride, ethene', 'With one lone pair the shape becomes bent, as in sulphur dioxide.'],
            ['Four', 'Tetrahedral, 109.5°, sp³ — methane', 'One lone pair gives a trigonal pyramid, as in ammonia at 107°; two lone pairs give a bent shape, as in water at 104.5°.'],
            ['Five', 'Trigonal bipyramidal, sp³d — phosphorus pentachloride', 'Lone pairs occupy equatorial positions, giving see-saw, T-shaped and linear variants.'],
            ['Six', 'Octahedral, 90°, sp³d² — sulphur hexafluoride', 'One lone pair gives a square pyramid; two give a square planar shape.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why bond angles shrink',
              'A lone pair is held by only one nucleus and therefore spreads out more than a bonding pair held by two. It repels neighbouring pairs more strongly, compressing the angles between the bonds. This is exactly why methane\'s angle of 109.5° falls to 107° in ammonia with one lone pair and to 104.5° in water with two — one of the most frequently asked sequences in the subject.',
            ],
            [
              'Hybridisation',
              'The mixing of atomic orbitals of similar energy to form an equal number of identical hybrid orbitals oriented for maximum separation. It explains why methane\'s four bonds are identical when carbon\'s valence orbitals are one 2s and three 2p, and why the shape is tetrahedral rather than at 90°. The number of hybrid orbitals equals the number of sigma bonds plus the number of lone pairs on the central atom.',
            ],
            [
              'Sigma and pi bonds',
              'A sigma bond forms by head-on overlap and allows free rotation. A pi bond forms by sideways overlap of p orbitals and prevents rotation, which is why alkenes show geometrical isomerism. A single bond is one sigma; a double bond is one sigma and one pi; a triple bond is one sigma and two pi. Sigma bonds are stronger than pi bonds.',
            ],
            [
              'Resonance',
              'Where a single Lewis structure cannot describe a molecule, the real structure is a hybrid of several contributing forms. Benzene, the carbonate ion and ozone are the standard examples. Resonance delocalises electrons and lowers energy, which is why benzene is far more stable than a hypothetical molecule with three isolated double bonds.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'states',
      heading: 'States of matter',
      eyebrow: 'Gas laws and phase changes',
      intro:
        'The state of a substance is a contest between intermolecular forces holding particles together and thermal energy driving them apart.',
      blocks: [
        {
          type: 'formula',
          title: 'The gas laws',
          items: [
            { expr: 'PV = constant at fixed T (Boyle\'s law)', note: 'Pressure and volume are inversely related.' },
            { expr: 'V/T = constant at fixed P (Charles\'s law)', note: 'Volume is directly proportional to absolute temperature — which is why temperatures must be in kelvin.' },
            { expr: 'P/T = constant at fixed V (Gay-Lussac\'s law)', note: 'Which is why a sealed aerosol can is dangerous near heat.' },
            { expr: 'PV = nRT', note: 'The ideal gas equation, combining all three. R is the universal gas constant.' },
            { expr: '(P + a/V²)(V − b) = RT', note: 'The van der Waals equation, correcting the ideal equation for intermolecular attraction and for the finite volume of the molecules themselves.' },
            { expr: 'Rate of diffusion ∝ 1/√(molar mass)', note: 'Graham\'s law — which is why hydrogen diffuses fastest and why ammonia and hydrogen chloride meet nearer the hydrogen chloride end of a tube.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Ideal and real gases',
              'A gas behaves ideally when its molecules have negligible volume and no mutual attraction — conditions approached at low pressure and high temperature. Real gases deviate at high pressure, where molecular volume matters, and at low temperature, where attraction matters. A gas can be liquefied only below its critical temperature, however great the pressure applied.',
            ],
            [
              'The five states',
              'Solid, with fixed shape and volume. Liquid, with fixed volume and no fixed shape. Gas, with neither. Plasma, an ionised gas of free electrons and ions, found in stars and in fluorescent tubes, and the most abundant state in the universe. Bose-Einstein condensate, produced at temperatures close to absolute zero, where a group of atoms behaves as a single quantum entity.',
            ],
            [
              'Phase changes',
              'Melting and freezing between solid and liquid; vaporisation and condensation between liquid and gas; sublimation and deposition directly between solid and gas, shown by camphor, naphthalene, iodine, ammonium chloride and dry ice. Temperature stays constant during a phase change, because the energy supplied goes into overcoming intermolecular forces rather than into raising kinetic energy.',
            ],
            [
              'Evaporation and boiling',
              'Evaporation happens at every temperature and only at the surface; boiling happens throughout the liquid and only at the boiling point, where the vapour pressure equals the external pressure. Evaporation causes cooling because the fastest molecules escape, lowering the average energy of those remaining — which is why sweating cools the body and why water in an earthen pot stays cool. A pressure cooker raises the boiling point by raising the pressure; at high altitude the lower pressure lowers it, which is why cooking takes longer in the mountains.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'solutions',
      heading: 'Solutions',
      eyebrow: 'Solubility and colligative properties',
      intro:
        'A compact topic whose central insight is that some properties of a solution depend only on how many solute particles are present, not on what they are.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Solubility and its dependence',
              'The solubility of most solids in water increases with temperature, which is why more sugar dissolves in hot tea. The solubility of gases decreases with temperature and increases with pressure, which is why a warm fizzy drink goes flat faster and why opening the bottle releases gas. That pressure dependence is Henry\'s law, and it explains the decompression sickness a diver suffers on surfacing too fast.',
            ],
            [
              'Colligative properties',
              'Four properties that depend only on the number of solute particles and not on their identity: the relative lowering of vapour pressure, the elevation of boiling point, the depression of freezing point, and osmotic pressure. Because they count particles, an ionic solute that dissociates into several ions has a larger effect than a molecular one at the same concentration.',
            ],
            [
              'Everyday consequences',
              'Salt spread on icy roads lowers the freezing point of water. Antifreeze in a car radiator does the same, and also raises the boiling point. Adding salt to cooking water raises its boiling point slightly. Osmosis explains why a plant cell in pure water swells and one in concentrated salt solution shrinks, and reverse osmosis — applying pressure greater than the osmotic pressure — is how water purifiers and desalination plants work.',
            ],
            [
              'Types of solution',
              'A saturated solution holds as much solute as it can at that temperature; an unsaturated one holds less; a supersaturated one holds more than it should and will crystallise if disturbed. A colloid has particles larger than in a true solution but small enough to stay suspended, and it scatters a beam of light — the Tyndall effect, seen in fog, in milk and in a beam of sunlight through a dusty room. A suspension has still larger particles that settle out.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'reactions',
      heading: 'Types of reaction',
      eyebrow: 'The five patterns',
      intro:
        'Almost every reaction at this level falls into one of five patterns, and identifying the pattern is usually all the question requires.',
      blocks: [
        {
          type: 'table',
          caption: 'The reaction types',
          head: ['Type', 'What happens', 'Example'],
          rows: [
            ['Combination', 'Two or more substances form a single product', 'Quicklime and water give slaked lime, a strongly exothermic reaction used in whitewashing.'],
            ['Decomposition', 'A single substance breaks into two or more', 'Calcium carbonate heated gives calcium oxide and carbon dioxide. Decomposition may be thermal, electrolytic or photochemical, as in the darkening of silver bromide in light.'],
            ['Displacement', 'A more reactive element displaces a less reactive one from its compound', 'Iron placed in copper sulphate solution displaces copper, and the blue solution turns green.'],
            ['Double displacement', 'Two compounds exchange ions', 'Sodium sulphate and barium chloride give a white precipitate of barium sulphate. Neutralisation is a special case.'],
            ['Redox', 'Electrons are transferred; one species is oxidised and another reduced', 'The reaction of zinc with copper sulphate is simultaneously a displacement and a redox reaction.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Exothermic and endothermic',
              'An exothermic reaction releases heat and has a negative enthalpy change — combustion, respiration, neutralisation, the slaking of lime. An endothermic reaction absorbs heat — photosynthesis, the decomposition of calcium carbonate, and the dissolution of ammonium chloride in water, which makes the container feel cold.',
            ],
            [
              'Rate of reaction',
              'Increased by higher concentration, higher temperature, greater surface area of a solid reactant, and by a catalyst. A catalyst increases the rate by providing an alternative pathway of lower activation energy, and is not consumed. Enzymes are biological catalysts, highly specific and sensitive to temperature and pH.',
            ],
            [
              'Chemical equilibrium',
              'A reversible reaction reaches equilibrium when the forward and backward rates are equal — a dynamic state in which both reactions continue but concentrations no longer change. Le Chatelier\'s principle states that a system at equilibrium subjected to a change shifts so as to counteract that change, which is how the conditions for the Haber process for ammonia and the Contact process for sulphuric acid are chosen.',
            ],
            [
              'Thermodynamic direction',
              'A reaction is spontaneous when the Gibbs free energy change is negative, and ΔG = ΔH − TΔS. So a reaction can be spontaneous either because it releases heat or because it increases disorder, and temperature decides which term dominates. This is why some reactions become spontaneous only on heating.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'acids',
      heading: 'Acids, bases and salts',
      eyebrow: 'pH, indicators and neutralisation',
      intro:
        'The block that supplies more general-awareness questions than any other part of chemistry, because everything in it is something a candidate has handled.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Three definitions of an acid',
              'Arrhenius: a substance that gives hydrogen ions in aqueous solution. Brønsted-Lowry: a proton donor, with a base as a proton acceptor — this works for non-aqueous systems too. Lewis: an electron pair acceptor, with a base as an electron pair donor — the broadest definition, which covers substances such as boron trifluoride that contain no hydrogen at all.',
            ],
            [
              'pH',
              'The negative logarithm of the hydrogen ion concentration. The scale runs from 0 to 14, with 7 neutral, below 7 acidic and above 7 basic. Because it is logarithmic, a solution of pH 3 is ten times more acidic than one of pH 4 and a hundred times more acidic than one of pH 5. Human blood is held near 7.4, gastric juice is around 1.5 to 3, and rain below about 5.6 is called acid rain.',
            ],
            [
              'Indicators',
              'Litmus is red in acid and blue in base. Phenolphthalein is colourless in acid and pink in base. Methyl orange is red in acid and yellow in base. Turmeric turns red in base, which is the traditional test. Olfactory indicators such as onion and vanilla change smell rather than colour, and are used to demonstrate the idea to those who cannot see colour differences.',
            ],
            [
              'Strong and weak',
              'A strong acid or base ionises completely in water; a weak one only partially. Hydrochloric, sulphuric and nitric acids are strong; acetic, carbonic and citric acids are weak. Sodium and potassium hydroxides are strong bases; ammonium hydroxide is weak. Strength is a different idea from concentration — a dilute solution of a strong acid and a concentrated solution of a weak acid are entirely different things.',
            ],
            [
              'Salts',
              'Formed when an acid and a base neutralise. A salt of a strong acid and a strong base is neutral, such as sodium chloride. A salt of a strong acid and a weak base is acidic, such as ammonium chloride. A salt of a weak acid and a strong base is basic, such as sodium carbonate — which is why washing soda solution feels soapy.',
            ],
            [
              'The salts to know by name',
              'Common salt, sodium chloride, the source of almost all other sodium compounds. Washing soda, sodium carbonate decahydrate, for softening hard water. Baking soda, sodium bicarbonate, used in baking, in antacids and in fire extinguishers. Bleaching powder, calcium oxychloride, for disinfection. Plaster of Paris, calcium sulphate hemihydrate, obtained by heating gypsum and setting hard on adding water.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Acid-base relations',
          items: [
            { expr: 'pH = −log[H⁺]', note: 'And pOH = −log[OH⁻].' },
            { expr: 'pH + pOH = 14 at 25 °C', note: 'Because the ionic product of water is 10⁻¹⁴ at that temperature.' },
            { expr: 'Acid + Base → Salt + Water', note: 'Neutralisation, always exothermic.' },
            { expr: 'Metal + Acid → Salt + Hydrogen', note: 'Which is why the standard test for hydrogen — a pop with a burning splint — follows this reaction.' },
            { expr: 'Metal carbonate + Acid → Salt + Water + Carbon dioxide', note: 'The gas turns limewater milky, which is the standard test for carbon dioxide.' },
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'redox',
      heading: 'Redox and electrochemistry',
      eyebrow: 'Electron transfer in practice',
      intro:
        'Oxidation and reduction always occur together, and electrochemistry is simply what happens when the electrons transferred are made to travel through a wire.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Oxidation and reduction',
              'In the classical sense, oxidation is gain of oxygen or loss of hydrogen and reduction is the reverse. In the electronic sense, which is the general one, oxidation is loss of electrons and reduction is gain — remembered as OIL RIG, oxidation is loss, reduction is gain. The oxidising agent is itself reduced, and the reducing agent is itself oxidised, which is the point candidates most often get backwards.',
            ],
            [
              'The reactivity series',
              'Potassium, sodium, calcium, magnesium, aluminium, zinc, iron, lead, hydrogen, copper, mercury, silver, gold, platinum, in decreasing order of reactivity. A metal above another displaces it from its compounds; a metal above hydrogen displaces hydrogen from dilute acids, and one below it does not — which is why copper does not react with dilute hydrochloric acid.',
            ],
            [
              'Corrosion and its prevention',
              'Rusting of iron requires both oxygen and moisture, and the product is hydrated iron oxide. It is prevented by painting, greasing, alloying — as in stainless steel — and by galvanisation, coating with zinc. Zinc protects even where the coating is scratched, because it is more reactive than iron and corrodes preferentially, which is sacrificial protection. Copper develops a green basic carbonate and silver a black sulphide tarnish.',
            ],
            [
              'Electrolysis',
              'Decomposition of an electrolyte by passing direct current through it. Reduction occurs at the cathode, which is negative in an electrolytic cell, and oxidation at the anode. Applications include electroplating, the extraction of highly reactive metals such as sodium and aluminium, and the refining of copper. Faraday\'s laws relate the mass deposited to the charge passed.',
            ],
            [
              'Electrochemical cells',
              'A galvanic or voltaic cell converts chemical energy into electrical energy through a spontaneous redox reaction — the Daniell cell with zinc and copper is the classic example, and a dry cell is the everyday one. An electrolytic cell does the reverse, using electrical energy to drive a non-spontaneous reaction. The sign of the electrodes is reversed between the two, which is a favourite question.',
            ],
            [
              'Metallurgy in outline',
              'Concentration of the ore, often by froth flotation for sulphides or by the magnetic or gravity method. Conversion to the oxide by roasting for sulphides or calcination for carbonates. Reduction to the metal, by carbon for moderately reactive metals and by electrolysis for the most reactive. Refining, usually electrolytic. Which reduction method applies depends on the metal\'s position in the reactivity series.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Explain why the bond angle falls from 109.5° in methane to 107° in ammonia and 104.5° in water.',
      steps: [
        'All three have four electron pairs around the central atom, so the underlying geometry is tetrahedral in each case.',
        'Methane has four bonding pairs and no lone pairs, so the angle is the ideal tetrahedral value.',
        'Ammonia has one lone pair and water has two. A lone pair is held by only one nucleus, spreads out more and repels bonding pairs more strongly, compressing the angle progressively.',
      ],
      answer: 'Increasing lone-pair repulsion compresses the bond angle at each step.',
    },
    {
      q: 'Carbon dioxide has polar bonds but is a non-polar molecule. Why?',
      steps: [
        'Each carbon-oxygen bond is polar, because oxygen is considerably more electronegative than carbon.',
        'But the molecule is linear, so the two bond dipoles point in exactly opposite directions.',
        'They are equal in magnitude and cancel vectorially, leaving no net dipole. Water, with the same two polar bonds in a bent arrangement, does not cancel and is strongly polar.',
      ],
      answer: 'Its linear shape makes the two bond dipoles cancel exactly.',
    },
    {
      q: 'A solution has pH 4. How does its acidity compare with one of pH 6?',
      steps: [
        'pH is the negative logarithm of hydrogen ion concentration, so it is a logarithmic scale.',
        'A difference of one pH unit is a tenfold difference in hydrogen ion concentration.',
        'Two units therefore means a hundredfold difference, and the lower pH is the more acidic.',
      ],
      answer: 'The pH 4 solution is a hundred times more acidic.',
    },
    {
      q: 'Why does galvanised iron resist rusting even where the zinc coating is scratched?',
      steps: [
        'An ordinary paint or grease coating protects only by keeping oxygen and moisture away, so a scratch exposes the iron.',
        'Zinc is above iron in the reactivity series, so where both are exposed, zinc is oxidised preferentially.',
        'The zinc therefore corrodes in place of the iron — sacrificial protection — and continues to protect until the zinc is consumed.',
      ],
      answer: 'Zinc is more reactive and corrodes sacrificially in place of the iron.',
    },
    {
      q: 'Why does copper not liberate hydrogen from dilute hydrochloric acid while zinc does?',
      steps: [
        'A metal displaces hydrogen from an acid only if it is above hydrogen in the reactivity series.',
        'Zinc lies above hydrogen, so it is oxidised by the hydrogen ions and hydrogen gas is released.',
        'Copper lies below hydrogen, so the reaction is not energetically favourable and no hydrogen is produced.',
      ],
      answer: 'Copper is below hydrogen in the reactivity series and zinc is above it.',
    },
    {
      q: 'Why does the temperature stay constant while ice melts, even though heat is being supplied?',
      steps: [
        'Temperature measures average kinetic energy, and heat supplied can raise either kinetic energy or potential energy.',
        'During melting, the energy supplied goes entirely into overcoming the intermolecular forces holding the crystal together — the latent heat of fusion.',
        'Only when all the ice has melted does further heat begin to raise the kinetic energy, and therefore the temperature, again.',
      ],
      answer: 'The heat supplied goes into breaking intermolecular forces rather than raising kinetic energy.',
    },
    {
      q: 'A gas is compressed to half its volume at constant temperature. What happens to its pressure?',
      steps: [
        'At constant temperature, Boyle\'s law applies: PV is constant.',
        'If the volume is halved, the pressure must double to keep the product unchanged.',
        'Note that this holds only at constant temperature and for a gas behaving ideally.',
      ],
      answer: 'The pressure doubles.',
    },
    {
      q: 'Why is salt spread on icy roads?',
      steps: [
        'Freezing point depression is a colligative property, depending on the number of solute particles dissolved.',
        'Dissolved salt lowers the freezing point of water below zero degrees.',
        'Ice on the road therefore melts, or fails to form, at temperatures at which pure water would freeze. Sodium chloride is particularly effective because it dissociates into two ions per formula unit.',
      ],
      answer: 'It depresses the freezing point of water, a colligative property.',
    },
  ],

  practice: [
    {
      q: 'An ionic compound conducts electricity when:',
      options: ['Solid', 'Never', 'Cooled below freezing', 'Molten or dissolved in water'],
      answer: 3,
      explain: 'The ions must be free to move, which they are not in the rigid solid lattice.',
    },
    {
      q: 'The bond angle in a water molecule is approximately:',
      options: ['90°', '104.5°', '107°', '109.5°'],
      answer: 1,
      explain: 'Two lone pairs compress the tetrahedral angle further than the single lone pair in ammonia, which gives 107°.',
    },
    {
      q: 'The hybridisation of carbon in methane is:',
      options: ['sp', 'sp²', 'sp³', 'sp³d'],
      answer: 2,
      explain: 'Four equivalent hybrid orbitals arranged tetrahedrally at 109.5°.',
    },
    {
      q: 'The unusually high boiling point of water is due to:',
      options: ['Ionic bonding', 'Van der Waals forces alone', 'Metallic bonding', 'Hydrogen bonding'],
      answer: 3,
      explain: 'Hydrogen bonds between water molecules are far stronger than the ordinary intermolecular forces in similar-sized molecules.',
    },
    {
      q: 'Boyle\'s law relates:',
      options: ['Pressure and volume at constant temperature', 'Volume and temperature at constant pressure', 'Pressure and temperature at constant volume', 'Volume and amount of gas'],
      answer: 0,
      explain: 'Charles\'s law relates volume and temperature; Gay-Lussac\'s relates pressure and temperature.',
    },
    {
      q: 'Phenolphthalein in a basic solution is:',
      options: ['Colourless', 'Blue', 'Yellow', 'Pink'],
      answer: 3,
      explain: 'It is colourless in acid. Methyl orange is red in acid and yellow in base.',
    },
    {
      q: 'A pH of 3 indicates a solution that is:',
      options: ['Strongly basic', 'Weakly basic', 'Acidic', 'Neutral'],
      answer: 2,
      explain: 'Below 7 is acidic, and the scale is logarithmic, so pH 3 is a hundred times more acidic than pH 5.',
    },
    {
      q: 'Oxidation is defined as:',
      options: ['Gain of electrons', 'Loss of electrons', 'Gain of hydrogen', 'Loss of oxygen'],
      answer: 1,
      explain: 'OIL RIG — oxidation is loss, reduction is gain. The oxidising agent is itself reduced.',
    },
    {
      q: 'Which metal is used for galvanising iron?',
      options: ['Tin', 'Zinc', 'Chromium', 'Nickel'],
      answer: 1,
      explain: 'Zinc is above iron in the reactivity series, so it corrodes sacrificially even where the coating is broken.',
    },
    {
      q: 'Plaster of Paris is obtained by heating:',
      options: ['Limestone', 'Gypsum', 'Quicklime', 'Marble'],
      answer: 1,
      explain: 'Gypsum is calcium sulphate dihydrate; heating it gives the hemihydrate, which sets hard with water.',
    },
    {
      q: 'The Tyndall effect is shown by:',
      options: ['True solutions', 'Colloids', 'Pure water', 'Ionic crystals'],
      answer: 1,
      explain: 'Colloidal particles are large enough to scatter a light beam, which is why the path becomes visible.',
    },
    {
      q: 'A catalyst increases the rate of a reaction by:',
      options: ['Raising the temperature', 'Lowering the activation energy', 'Increasing the concentration', 'Shifting the equilibrium'],
      answer: 1,
      explain: 'It provides an alternative pathway of lower activation energy and is not consumed. It does not shift the position of equilibrium.',
    },
    {
      q: 'Freezing point depression is an example of a:',
      options: ['Colligative property', 'Periodic property', 'Catalytic property', 'Thermodynamic function'],
      answer: 0,
      explain: 'It depends on the number of solute particles rather than on their identity.',
    },
    {
      q: 'In an electrolytic cell, reduction occurs at the:',
      options: ['Anode', 'Cathode', 'Salt bridge', 'Electrolyte'],
      answer: 1,
      explain: 'Reduction always occurs at the cathode and oxidation at the anode, in both galvanic and electrolytic cells.',
    },
    {
      q: 'Sulphur hexafluoride is an exception to the octet rule because sulphur:',
      options: ['Has fewer than eight electrons', 'Uses vacant d orbitals to expand its octet', 'Forms only ionic bonds', 'Has no valence electrons'],
      answer: 1,
      explain: 'Only elements from the third period onwards have available d orbitals, which is why the second period never expands its octet.',
    },
    {
      q: 'Which gas turns limewater milky?',
      options: ['Oxygen', 'Hydrogen', 'Carbon dioxide', 'Nitrogen'],
      answer: 2,
      explain: 'Insoluble calcium carbonate is formed. Hydrogen is tested by a pop with a burning splint.',
    },
  ],

  faqs: [
    {
      q: 'Why do ionic compounds have such high melting points?',
      a: 'Because an ionic solid is not made of molecules at all — it is a giant three-dimensional lattice in which every ion is held by strong electrostatic attraction to all its oppositely charged neighbours. Melting requires breaking that whole network. A covalent substance such as water consists of discrete molecules with strong bonds inside but weak forces between them, and only those weak forces must be overcome to melt it.',
    },
    {
      q: 'What is the difference between strength and concentration of an acid?',
      a: 'Strength describes how completely the acid ionises in water — a property of the substance. Concentration describes how much of it is dissolved — a property of the solution. Hydrochloric acid is strong at any concentration, and a very dilute solution of it can have a higher pH than a concentrated solution of weak acetic acid. Question papers exploit this distinction regularly.',
    },
    {
      q: 'Why does a lone pair compress bond angles?',
      a: 'Because a lone pair is attracted by only one nucleus while a bonding pair is shared between two. The lone pair therefore occupies a larger, more diffuse region close to the central atom and repels the bonding pairs more strongly than they repel one another. The order of repulsion is lone pair-lone pair greater than lone pair-bond pair greater than bond pair-bond pair.',
    },
    {
      q: 'Why is hydrogen bonding so important?',
      a: 'Because it is strong enough to change physical properties dramatically while being weak enough to be broken and re-formed constantly. It is why water is a liquid at room temperature when similar-sized molecules are gases, why ice floats and lakes freeze from the top, why DNA strands hold together yet can be separated for replication, and why proteins fold into specific shapes. Almost every anomaly of water traces back to it.',
    },
    {
      q: 'Does a catalyst change how much product is formed?',
      a: 'No. A catalyst speeds up both the forward and the backward reaction equally, so it brings a system to equilibrium faster but does not change where that equilibrium lies. To change the yield you must change conditions — concentration, pressure or temperature — as Le Chatelier\'s principle describes, which is exactly what the Haber and Contact processes do.',
    },
    {
      q: 'Why does evaporation cause cooling?',
      a: 'Because the molecules that escape from the surface are the fastest-moving ones, with the most energy. Removing them lowers the average kinetic energy of those left behind, and average kinetic energy is what temperature measures. This is why sweating cools the body, why water in a porous earthen pot stays cool, and why a volatile liquid such as ether feels cold on the skin.',
    },
    {
      q: 'What is sacrificial protection?',
      a: 'Protecting a metal by connecting it to a more reactive one, which corrodes preferentially. Galvanised iron is the everyday case: the zinc coating oxidises rather than the iron, and continues to protect even where the coating is scratched, unlike paint. Blocks of magnesium or zinc are attached to ships\' hulls and to buried pipelines for the same reason.',
    },
    {
      q: 'Which parts of this topic appear in general-awareness papers?',
      a: 'Acids, bases and pH; indicators and their colours; the common salts and their uses; rusting and its prevention; the reactivity series; and simple bond types. Hybridisation, VSEPR geometry beyond the basic shapes, gas law calculations, colligative property numericals and electrochemistry belong to JEE and NEET.',
    },
    {
      q: 'Why is graphite an exception among covalent substances?',
      a: 'Because each carbon atom in graphite bonds to only three others, leaving one electron per atom delocalised across the layer. Those mobile electrons make graphite a conductor, which no ordinary covalent solid is. The layers themselves are held only by weak forces, which is why graphite is soft and slippery — and why it works as both an electrode and a lubricant.',
    },
    {
      q: 'How much of the chemistry paper comes from this block?',
      a: 'Roughly twenty to twenty-five per cent of JEE chemistry, counting bonding, states of matter, equilibrium and electrochemistry; eight to ten questions in NEET; two to three in SSC CGL Tier 1, mostly on acids and bases; two to three in RRB; and two to three in NDA and CDS.',
    },
  ],

  related: [
    { label: 'Atomic Structure & Periodic Table', to: '/study-material/chemistry/atomic-structure/' },
    { label: 'Organic & Everyday Chemistry', to: '/study-material/chemistry/organic-chemistry/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'Physics', to: '/study-material/physics/' },
    { label: 'All Chemistry', to: '/study-material/chemistry/' },
  ],
}
