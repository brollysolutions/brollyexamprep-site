/**
 * Everyday Science — /study-material/science/everyday-science/
 *
 * General science as general-awareness papers actually ask it: the physics
 * behind familiar objects, the chemistry of household substances, the human
 * body, nutrition and instruments. Deliberately factual and pairing-based,
 * because that is the question format.
 */
export default {
  subject: 'science',
  subjectName: 'Science & Technology',
  slug: 'everyday-science',
  title: 'Everyday Science',
  seoTitle: 'General Science for Competitive Exams | Physics, Chemistry, Biology Practice',
  metaDescription:
    'Complete general science study material for SSC, RRB, banking, UPSC and state exams — physics in everyday life, household chemistry, the human body.',
  readMinutes: 24,
  lead: [
    'General science is the most reliable block in any general awareness paper. It does not change, it is not opinion, and the same few hundred facts are recycled across SSC, RRB, banking and state examinations year after year — which vitamin prevents which disease, which mirror is used in a headlight, what the common name of a chemical is.',
    'That makes it worth learning as pairings rather than as chapters. This page is built accordingly: instrument with what it measures, deficiency with disease, chemical with common name, phenomenon with the physics behind it. The academic treatment of each science sits on the separate physics, chemistry and biology pages.',
  ],

  weightage: [
    { exam: 'SSC CGL / CHSL Tier 1', count: '5–8 questions', note: 'The largest science block in any general awareness section.' },
    { exam: 'RRB NTPC / Group D', count: '8–12 questions', note: 'Railway papers carry a separate general science section, mostly at this level.' },
    { exam: 'Banking and insurance GA', count: '1–2 questions', note: 'Usually applied — a technology or a health topic in the news.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'General science plus the applied technology block.' },
    { exam: 'UPSC Prelims GS Paper 1', count: '2–4 questions', note: 'Rarely straight recall; usually applied to a policy or a technology.' },
  ],

  contents: [
    { icon: 'play', title: 'Physics around you', sub: 'Mirrors, sound, light and heat', href: '#physics' },
    { icon: 'refresh', title: 'Household chemistry', sub: 'Common names, acids and alloys', href: '#chemistry' },
    { icon: 'user', title: 'The human body', sub: 'Systems and standard figures', href: '#body' },
    { icon: 'bell', title: 'Nutrition and disease', sub: 'Vitamins, deficiencies and pathogens', href: '#health' },
    { icon: 'search', title: 'Instruments and units', sub: 'What measures what', href: '#instruments' },
    { icon: 'book', title: 'Discoveries and scientists', sub: 'Who found what', href: '#discoveries' },
    { icon: 'target', title: 'Indian science institutions', sub: 'Who does what, and since when', href: '#institutions' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'physics',
      heading: 'Physics around you',
      eyebrow: 'Mirrors, sound, light and heat',
      intro:
        'Almost every physics question in a general awareness paper asks why a familiar thing behaves as it does. The underlying principle is usually one of five: reflection, refraction, scattering, pressure or heat transfer.',
      blocks: [
        {
          type: 'table',
          caption: 'Everyday observations and the physics behind them',
          head: ['Observation', 'Principle', 'Explanation'],
          rows: [
            ['A vehicle rear-view mirror is convex', 'Reflection from a curved surface', 'A convex mirror always forms a small, erect, virtual image and gives a much wider field of view than a plane mirror.'],
            ['A torch or headlight uses a concave mirror', 'Reflection from a curved surface', 'A source at the focus of a concave mirror produces a parallel beam. Dentists and shaving mirrors use the same mirror for its magnified erect image at close range.'],
            ['A pool looks shallower than it is', 'Refraction', 'Light bends away from the normal on leaving water, so rays reaching the eye appear to come from a point above the actual object.'],
            ['A pencil looks bent in a glass of water', 'Refraction', 'The same effect, seen at the boundary between two media of different optical density.'],
            ['The sky is blue and sunsets are red', 'Scattering', 'Shorter wavelengths scatter far more strongly than longer ones. At sunset the light travels a longer path through the atmosphere, so the blue is scattered out and the red reaches the eye.'],
            ['Stars twinkle but planets do not', 'Atmospheric refraction', 'A star is effectively a point source, so small variations in atmospheric refraction change its apparent brightness. A planet is an extended source and the variations average out.'],
            ['A diamond sparkles', 'Total internal reflection', 'Its very high refractive index gives a small critical angle, so light entering it reflects repeatedly inside before emerging. Optical fibres and the mirage work by the same principle.'],
            ['Food cooks faster in a pressure cooker', 'Pressure and boiling point', 'Increasing the pressure raises the boiling point of water above 100 °C, so the food cooks at a higher temperature.'],
            ['Ice floats on water', 'Anomalous expansion of water', 'Water is densest at about 4 °C and expands on freezing, so ice is less dense than the water beneath it. This is why lakes freeze from the top and aquatic life survives below.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Sound',
              'A longitudinal mechanical wave that needs a medium, which is why sound cannot travel in a vacuum. Its speed is about 343 metres per second in air at 20 °C, and it travels faster in liquids and faster still in solids — the opposite of light. Sound below 20 hertz is infrasound and above 20 kilohertz is ultrasound, used in SONAR, medical imaging and industrial flaw detection.',
            ],
            [
              'Echo',
              'A reflected sound heard separately from the original. The ear distinguishes two sounds about a tenth of a second apart, so the reflecting surface must be at least about seventeen metres away. Reverberation is the persistence of sound from repeated reflections in an enclosed space.',
            ],
            [
              'The Doppler effect',
              'The apparent change in frequency when a source and observer move relative to one another — a passing siren rises in pitch as it approaches and falls as it recedes. In astronomy the same effect produces redshift, the evidence that distant galaxies are receding.',
            ],
            [
              'Heat transfer',
              'Conduction through direct contact, dominant in solids and especially metals. Convection through the bulk movement of a fluid, which is why a room heater warms the whole room and why land and sea breezes occur. Radiation through electromagnetic waves, needing no medium, which is how heat reaches the earth from the sun.',
            ],
            [
              'Newton\'s laws in ordinary life',
              'The first law explains why a passenger lurches forward when a bus brakes. The second gives force as mass times acceleration, and explains why a cricketer draws the hands back while catching — increasing the time reduces the force. The third explains recoil in a gun and the propulsion of a rocket.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'chemistry',
      heading: 'Household chemistry',
      eyebrow: 'Common names, acids and alloys',
      intro:
        'Three tables carry nearly all the chemistry asked at this level: common names of compounds, the acid present in a familiar substance, and the composition of an alloy.',
      blocks: [
        {
          type: 'table',
          caption: 'Common names and chemical formulas',
          head: ['Common name', 'Chemical name', 'Formula and use'],
          rows: [
            ['Baking soda', 'Sodium bicarbonate', 'NaHCO₃ — baking, antacid, fire extinguishers.'],
            ['Washing soda', 'Sodium carbonate decahydrate', 'Na₂CO₃·10H₂O — cleaning and softening hard water.'],
            ['Caustic soda', 'Sodium hydroxide', 'NaOH — soap and paper manufacture; a strong base.'],
            ['Bleaching powder', 'Calcium oxychloride', 'CaOCl₂ — disinfection and bleaching.'],
            ['Plaster of Paris', 'Calcium sulphate hemihydrate', 'CaSO₄·½H₂O — obtained by heating gypsum; sets hard with water.'],
            ['Quicklime', 'Calcium oxide', 'CaO — reacts with water to give slaked lime, Ca(OH)₂.'],
            ['Blue vitriol', 'Copper sulphate pentahydrate', 'CuSO₄·5H₂O — fungicide and electroplating.'],
            ['Epsom salt', 'Magnesium sulphate heptahydrate', 'MgSO₄·7H₂O — a purgative.'],
            ['Laughing gas', 'Nitrous oxide', 'N₂O — a mild anaesthetic.'],
            ['Dry ice', 'Solid carbon dioxide', 'CO₂ — sublimes directly to gas, which is why it leaves no liquid.'],
          ],
        },
        {
          type: 'table',
          caption: 'Acids in familiar substances',
          head: ['Substance', 'Acid it contains', 'Note'],
          rows: [
            ['Lemon and citrus fruit', 'Citric acid', 'Also present in many soft drinks as an added acidulant.'],
            ['Vinegar', 'Acetic acid', 'A dilute solution, about five per cent.'],
            ['Curd and sour milk', 'Lactic acid', 'Produced by bacterial fermentation of lactose.'],
            ['Ant sting and nettle', 'Formic acid', 'The reason a mild base such as baking soda relieves the sting.'],
            ['Tamarind', 'Tartaric acid', 'Also present in grapes.'],
            ['Tomato', 'Oxalic acid', 'Also in spinach, where it binds calcium.'],
            ['Apple', 'Malic acid', 'Gives the characteristic tartness.'],
            ['Gastric juice', 'Hydrochloric acid', 'Activates pepsin and kills ingested bacteria; excess causes acidity, treated with an antacid.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Alloys',
              'Brass is copper and zinc. Bronze is copper and tin. Steel is iron with a small proportion of carbon; stainless steel adds chromium and nickel. Solder is lead and tin. German silver is copper, zinc and nickel and contains no silver at all. Duralumin is aluminium with copper, magnesium and manganese, used in aircraft. An amalgam is any alloy containing mercury.',
            ],
            [
              'Fuel gases',
              'LPG is mainly butane with some propane, liquefied under pressure. CNG is mainly methane. Water gas is a mixture of carbon monoxide and hydrogen. Producer gas is carbon monoxide and nitrogen. Biogas is mostly methane produced by anaerobic digestion. Marsh gas is methane.',
            ],
            [
              'pH',
              'A scale from 0 to 14 measuring acidity, with 7 neutral, below 7 acidic and above 7 basic. It is logarithmic, so a change of one unit is a tenfold change in hydrogen ion concentration. Human blood is slightly basic at about 7.4, and the narrowness of the range it must stay within is why the body buffers it so carefully.',
            ],
            [
              'Aqua regia',
              'A mixture of concentrated hydrochloric acid and nitric acid in a three-to-one ratio, able to dissolve gold and platinum, which neither acid can do alone. Its name means royal water.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'body',
      heading: 'The human body',
      eyebrow: 'Systems and standard figures',
      intro:
        'A set of numbers and superlatives that appear almost verbatim in question papers, together with the systems they belong to.',
      blocks: [
        {
          type: 'table',
          caption: 'The standard figures',
          head: ['Item', 'Value or answer', 'Note'],
          rows: [
            ['Bones in an adult', '206', 'A newborn has around 270; several fuse during growth.'],
            ['Largest and smallest bone', 'Femur and stapes', 'The stapes, in the middle ear, is also the lightest.'],
            ['Largest organ', 'Skin', 'The largest internal organ, and also the largest gland, is the liver.'],
            ['Longest cell', 'Nerve cell (neuron)', 'The largest human cell is the ovum; the smallest is the sperm.'],
            ['Lifespan of a red blood cell', 'About 120 days', 'Red cells have no nucleus in mammals, which is why they cannot divide or repair.'],
            ['Normal blood pressure', 'About 120/80 mm of mercury', 'Systolic over diastolic; measured with a sphygmomanometer.'],
            ['Resting heart rate', 'About 72 beats a minute', 'The heart has four chambers — two atria and two ventricles.'],
            ['Universal donor and recipient', 'O negative and AB positive', 'Blood groups were discovered by Karl Landsteiner. The Rh factor is a separate antigen system.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Digestion',
              'Begins in the mouth, where salivary amylase or ptyalin acts on starch. In the stomach, hydrochloric acid activates pepsin, which digests protein. In the small intestine, pancreatic juice supplies trypsin for protein, lipase for fat and amylase for starch, while bile from the liver emulsifies fat without being an enzyme. Absorption occurs chiefly in the small intestine through the villi; water is absorbed in the large intestine.',
            ],
            [
              'Circulation and respiration',
              'The heart pumps deoxygenated blood to the lungs through the pulmonary artery — the only artery carrying deoxygenated blood — and receives oxygenated blood through the pulmonary vein, the only vein carrying oxygenated blood. Haemoglobin in red cells carries oxygen; the exchange of gases happens in the alveoli of the lungs.',
            ],
            [
              'Excretion',
              'The kidneys filter blood through about a million nephrons each, producing urine that passes through the ureters to the bladder. The functional unit is the nephron; the process combines filtration at the glomerulus with selective reabsorption. Dialysis substitutes for this function when the kidneys fail.',
            ],
            [
              'Glands',
              'The pituitary at the base of the brain is called the master gland because it controls the others. The thyroid produces thyroxine and requires iodine. The pancreas is both exocrine, secreting digestive enzymes, and endocrine, secreting insulin and glucagon. The adrenal glands produce adrenaline, the hormone of the fight-or-flight response.',
            ],
            [
              'Senses',
              'The retina of the eye contains rods for dim light and vision without colour, and cones for colour vision in bright light. Myopia or short-sight is corrected with a concave lens, hypermetropia or long-sight with a convex lens, and presbyopia with bifocals. The ear contains the cochlea for hearing and the semicircular canals for balance.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'health',
      heading: 'Nutrition and disease',
      eyebrow: 'Vitamins, deficiencies and pathogens',
      intro:
        'The vitamin table is the single most frequently asked item in general science, and the disease-pathogen pairing runs it close.',
      blocks: [
        {
          type: 'table',
          caption: 'Vitamins and deficiency diseases',
          head: ['Vitamin', 'Chemical name', 'Deficiency causes'],
          rows: [
            ['Vitamin A', 'Retinol', 'Night blindness and xerophthalmia. Fat-soluble; found in carrots, liver and green leafy vegetables.'],
            ['Vitamin B1', 'Thiamine', 'Beriberi, affecting the nerves and the heart.'],
            ['Vitamin B3', 'Niacin', 'Pellagra, characterised by dermatitis, diarrhoea and dementia.'],
            ['Vitamin B12', 'Cobalamin', 'Pernicious anaemia. It occurs almost only in animal foods, which is why strict vegetarians may need a supplement.'],
            ['Vitamin C', 'Ascorbic acid', 'Scurvy — bleeding gums and poor wound healing. Water-soluble and destroyed by prolonged cooking.'],
            ['Vitamin D', 'Calciferol', 'Rickets in children and osteomalacia in adults. It is synthesised in the skin under sunlight.'],
            ['Vitamin E', 'Tocopherol', 'Reproductive problems and, in severe cases, nerve damage.'],
            ['Vitamin K', 'Phylloquinone', 'Impaired blood clotting, since it is required for the synthesis of clotting factors.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Fat-soluble and water-soluble',
              'Vitamins A, D, E and K are fat-soluble, are stored in the body, and can accumulate to toxic levels if taken in excess. The B group and vitamin C are water-soluble, are not stored, and must be supplied regularly — which is also why excess is excreted rather than accumulated.',
            ],
            [
              'Mineral deficiencies',
              'Iodine deficiency causes goitre and, in children, impaired development, which is why salt is iodised. Iron deficiency causes anaemia. Calcium deficiency contributes to rickets and osteoporosis. Excess fluoride causes fluorosis, mottling teeth and damaging bone, a serious problem in parts of Rajasthan, Andhra Pradesh and Telangana.',
            ],
            [
              'Diseases by causative agent',
              'Bacterial: tuberculosis, cholera, typhoid, tetanus, plague, leprosy, diphtheria. Viral: influenza, measles, mumps, rabies, polio, hepatitis, dengue, chikungunya, AIDS, COVID-19. Protozoan: malaria, amoebic dysentery, kala-azar, sleeping sickness. Fungal: ringworm, athlete\'s foot. Worm: filariasis, ascariasis. Deficiency and genetic disorders form separate categories.',
            ],
            [
              'Vector-borne diseases',
              'Malaria is transmitted by the female Anopheles mosquito and caused by Plasmodium. Dengue, chikungunya, Zika and yellow fever are transmitted by Aedes, which breeds in clean stagnant water. Filariasis is transmitted by Culex. Kala-azar is transmitted by the sandfly. Matching the vector to the disease is a standard question.',
            ],
            [
              'Nutrients',
              'Carbohydrates supply about four kilocalories per gram and are the primary energy source; proteins also about four and supply amino acids for growth and repair; fats about nine, the most energy-dense. Protein deficiency causes kwashiorkor, and combined protein-energy deficiency causes marasmus. Roughage supplies no nutrients but is needed for the movement of food through the gut.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'instruments',
      heading: 'Instruments and units',
      eyebrow: 'What measures what',
      intro:
        'A pure pairing exercise, and one of the fastest sections to learn because the names are usually transparent once the Greek or Latin root is noticed.',
      blocks: [
        {
          type: 'table',
          caption: 'Instruments and what they measure',
          head: ['Instrument', 'Measures', 'Note'],
          rows: [
            ['Barometer', 'Atmospheric pressure', 'A sudden fall indicates an approaching storm.'],
            ['Hygrometer', 'Humidity of the air', 'Not to be confused with a hydrometer, which measures the density of a liquid.'],
            ['Lactometer', 'Purity of milk', 'A specialised hydrometer, since adulteration changes the density.'],
            ['Anemometer', 'Wind speed', 'From the Greek anemos, wind.'],
            ['Seismograph', 'Earthquake waves', 'Magnitude is reported on the Richter scale and observed intensity on the Mercalli scale.'],
            ['Sphygmomanometer', 'Blood pressure', 'Reads systolic over diastolic in millimetres of mercury.'],
            ['Altimeter', 'Altitude', 'Usually a barometer calibrated in height, since pressure falls with altitude.'],
            ['Ammeter and voltmeter', 'Current and potential difference', 'An ammeter is connected in series, a voltmeter in parallel.'],
            ['Pyrometer', 'Very high temperatures', 'Measures without contact, by the radiation emitted.'],
            ['Odometer and speedometer', 'Distance travelled and speed', 'A tachometer measures rotational speed in revolutions per minute.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The seven SI base units',
              'Metre for length, kilogram for mass, second for time, ampere for electric current, kelvin for thermodynamic temperature, mole for amount of substance and candela for luminous intensity. Every other SI unit is derived from these.',
            ],
            [
              'Derived units named after scientists',
              'Newton for force, joule for energy and work, watt for power, pascal for pressure, hertz for frequency, volt for potential difference, ohm for resistance, coulomb for charge, farad for capacitance, tesla for magnetic flux density and becquerel for radioactivity.',
            ],
            [
              'Units to place correctly',
              'A light year and a parsec measure distance, not time. A nautical mile is used at sea. A knot is a nautical mile per hour, so it measures speed. A carat measures the mass of gemstones, while the karat measures the purity of gold. A decibel measures sound intensity on a logarithmic scale.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'discoveries',
      heading: 'Discoveries and scientists',
      eyebrow: 'Who found what',
      intro:
        'Another pairing list, and one that overlaps with the general knowledge syllabus. The Indian entries are asked more often than the international ones in state and railway papers.',
      blocks: [
        {
          type: 'table',
          caption: 'Discoveries and inventions',
          head: ['Discovery or invention', 'Attributed to', 'Note'],
          rows: [
            ['Law of gravitation and the laws of motion', 'Isaac Newton', 'Also the reflecting telescope and, with Leibniz, the calculus.'],
            ['Theory of relativity', 'Albert Einstein', 'He received the Nobel Prize for the photoelectric effect, not for relativity.'],
            ['Penicillin', 'Alexander Fleming', 'The first widely used antibiotic, discovered in 1928.'],
            ['Vaccination against smallpox', 'Edward Jenner', 'The word vaccine comes from vacca, Latin for cow.'],
            ['Structure of DNA', 'James Watson and Francis Crick', 'Building on the X-ray diffraction work of Rosalind Franklin and Maurice Wilkins.'],
            ['Radioactivity and radium', 'Henri Becquerel; Marie and Pierre Curie', 'Marie Curie is the only person to have won Nobel Prizes in two different sciences.'],
            ['The electron', 'J. J. Thomson', 'Rutherford discovered the nucleus and the proton; Chadwick the neutron.'],
            ['The Raman effect', 'C. V. Raman', 'Nobel Prize in Physics, 1930 — the first Asian to win a Nobel in a science.'],
            ['Discovery of the plant response to stimuli', 'Jagadish Chandra Bose', 'Also a pioneer of radio and microwave optics; he invented the crescograph.'],
            ['Bose-Einstein statistics', 'Satyendra Nath Bose', 'The boson is named after him.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Indian scientists worth knowing',
              'Homi J. Bhabha, the father of the Indian nuclear programme. Vikram Sarabhai, the father of the Indian space programme. A. P. J. Abdul Kalam, associated with missile development and later President of India. M. S. Swaminathan, associated with the Green Revolution. Verghese Kurien, the White Revolution. Srinivasa Ramanujan in mathematics, and Subrahmanyan Chandrasekhar, Nobel laureate in physics and the source of the Chandrasekhar limit.',
            ],
            [
              'Branches of science',
              'Some are asked directly: ornithology is the study of birds; entomology of insects; ichthyology of fish; herpetology of reptiles and amphibians; mycology of fungi; virology of viruses; seismology of earthquakes; palaeontology of fossils; anthropology of humans and their societies; and epidemiology of the distribution and control of disease.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'institutions',
      heading: 'Indian science institutions',
      eyebrow: 'Who does what, and since when',
      intro:
        'A short table with a high return, because these names recur in both the science and the current affairs sections.',
      blocks: [
        {
          type: 'table',
          caption: 'The principal organisations',
          head: ['Organisation', 'Established and headquarters', 'Remit'],
          rows: [
            ['ISRO', '1969, Bengaluru', 'The Indian Space Research Organisation, under the Department of Space. Vikram Sarabhai was its founding figure.'],
            ['DRDO', '1958, New Delhi', 'The Defence Research and Development Organisation, responsible for military research and development.'],
            ['CSIR', '1942, New Delhi', 'The Council of Scientific and Industrial Research, running a nationwide network of laboratories across disciplines.'],
            ['ICAR', '1929, New Delhi', 'The Indian Council of Agricultural Research, coordinating agricultural research and education.'],
            ['ICMR', '1911, New Delhi', 'The Indian Council of Medical Research, the apex body for biomedical research — one of the oldest such bodies in the world.'],
            ['BARC', '1954, Mumbai', 'The Bhabha Atomic Research Centre, founded as the Atomic Energy Establishment Trombay and renamed in 1967.'],
            ['TIFR', '1945, Mumbai', 'The Tata Institute of Fundamental Research, founded by Homi Bhabha for fundamental science.'],
            ['IISc', '1909, Bengaluru', 'The Indian Institute of Science, founded with support from Jamsetji Tata.'],
          ],
        },
        {
          type: 'note',
          title: 'The one thing here that keeps changing',
          text:
            'The names and functions of the funding bodies. The Science and Engineering Research Board was subsumed into the Anusandhan National Research Foundation, established under an Act of 2023 to fund and coordinate research across the country. Departmental structures and scheme names are revised periodically, so verify the current arrangement before quoting one, while treating the founding facts above as stable.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Why is a convex mirror used as a rear-view mirror rather than a plane mirror?',
      steps: [
        'A convex mirror always forms an image that is virtual, erect and diminished, regardless of where the object is.',
        'Because the image is smaller, more of the scene fits into the same mirror.',
        'The result is a much wider field of view, which matters more for a driver than the true size of the vehicle behind.',
      ],
      answer: 'It gives a wider field of view, at the cost of making objects appear smaller and farther.',
    },
    {
      q: 'Why does the sky appear blue and the setting sun red?',
      steps: [
        'Sunlight is scattered by the molecules of the atmosphere, and shorter wavelengths scatter far more strongly than longer ones.',
        'Blue, being short, is scattered across the whole sky, which is what the eye sees when looking away from the sun.',
        'At sunset the light travels a much longer path through the atmosphere, so almost all the blue is scattered out before it arrives and the remaining light is red.',
      ],
      answer: 'Preferential scattering of short wavelengths, and a longer atmospheric path at sunset.',
    },
    {
      q: 'A person has bleeding gums and poor wound healing. Which vitamin is deficient?',
      steps: [
        'Bleeding gums and poor healing point to a defect in collagen formation.',
        'Vitamin C is required for collagen synthesis, and its deficiency causes scurvy.',
        'It is water-soluble, not stored by the body, and destroyed by prolonged cooking, so it must be supplied regularly.',
      ],
      answer: 'Vitamin C, ascorbic acid — the deficiency is scurvy.',
    },
    {
      q: 'Which artery carries deoxygenated blood, and which vein carries oxygenated blood?',
      steps: [
        'Arteries carry blood away from the heart and veins carry it towards the heart — that is the defining distinction, not the oxygen content.',
        'The pulmonary artery carries deoxygenated blood from the heart to the lungs.',
        'The pulmonary vein carries oxygenated blood from the lungs back to the heart.',
      ],
      answer: 'The pulmonary artery and the pulmonary vein respectively — the two exceptions to the usual pattern.',
    },
    {
      q: 'Why does food cook faster in a pressure cooker?',
      steps: [
        'Water boils when its vapour pressure equals the surrounding pressure.',
        'Sealing the cooker raises the pressure inside, so water must reach a higher temperature before it boils.',
        'Cooking then takes place above 100 °C, and chemical reactions proceed faster at higher temperature.',
      ],
      answer: 'Higher pressure raises the boiling point, so the food cooks at a higher temperature.',
    },
    {
      q: 'German silver contains no silver. What is it made of?',
      steps: [
        'The name describes its appearance rather than its composition.',
        'It is an alloy of copper, zinc and nickel.',
        'Compare brass, which is copper and zinc, and bronze, which is copper and tin.',
      ],
      answer: 'Copper, zinc and nickel.',
    },
    {
      q: 'Which mosquito transmits dengue, and how does that guide prevention?',
      steps: [
        'Malaria is transmitted by the female Anopheles and filariasis by Culex.',
        'Dengue, along with chikungunya, Zika and yellow fever, is transmitted by Aedes.',
        'Aedes breeds in clean stagnant water in and around houses — coolers, tyres, flowerpots — so prevention focuses on removing such collections rather than on marshland.',
      ],
      answer: 'Aedes, which breeds in clean stagnant water near dwellings.',
    },
    {
      q: 'Why does ice float, and why does that matter ecologically?',
      steps: [
        'Water is unusual in reaching maximum density at about 4 °C rather than at its freezing point.',
        'Below that it expands, so ice is less dense than the liquid water beneath it and floats.',
        'A lake therefore freezes from the top down, and the ice layer insulates the water below, allowing aquatic life to survive the winter.',
      ],
      answer: 'The anomalous expansion of water — and it is what keeps lakes liveable in winter.',
    },
  ],

  practice: [
    {
      q: 'Deficiency of vitamin A causes:',
      options: ['Scurvy', 'Night blindness', 'Rickets', 'Beriberi'],
      answer: 1,
      explain: 'Scurvy is vitamin C, rickets vitamin D and beriberi vitamin B1.',
    },
    {
      q: 'The instrument used to measure atmospheric pressure is the:',
      options: ['Barometer', 'Hygrometer', 'Anemometer', 'Lactometer'],
      answer: 0,
      explain: 'A hygrometer measures humidity, an anemometer wind speed and a lactometer the purity of milk.',
    },
    {
      q: 'Which mirror is used in a vehicle headlight?',
      options: ['Plane', 'Convex', 'Concave', 'Cylindrical'],
      answer: 2,
      explain: 'A source placed at the focus of a concave mirror produces a parallel beam. Convex mirrors are used for rear view.',
    },
    {
      q: 'The chemical name of baking soda is:',
      options: ['Sodium carbonate', 'Sodium bicarbonate', 'Sodium hydroxide', 'Sodium chloride'],
      answer: 1,
      explain: 'NaHCO₃. Sodium carbonate is washing soda and sodium hydroxide is caustic soda.',
    },
    {
      q: 'The number of bones in an adult human body is:',
      options: ['186', '206', '270', '212'],
      answer: 1,
      explain: 'A newborn has around 270; several fuse during growth to give 206.',
    },
    {
      q: 'Malaria is transmitted by the:',
      options: ['Aedes mosquito', 'Culex mosquito', 'Female Anopheles mosquito', 'Sandfly'],
      answer: 2,
      explain: 'Aedes transmits dengue and chikungunya, Culex filariasis and the sandfly kala-azar.',
    },
    {
      q: 'Brass is an alloy of:',
      options: ['Copper and tin', 'Copper and zinc', 'Copper and nickel', 'Iron and carbon'],
      answer: 1,
      explain: 'Copper and tin is bronze; iron and carbon is steel; copper, zinc and nickel is german silver.',
    },
    {
      q: 'Which acid is present in an ant sting?',
      options: ['Acetic acid', 'Citric acid', 'Formic acid', 'Lactic acid'],
      answer: 2,
      explain: 'Which is why applying a mild base such as baking soda relieves it.',
    },
    {
      q: 'A diamond sparkles because of:',
      options: ['Dispersion only', 'Total internal reflection', 'Diffraction', 'Polarisation'],
      answer: 1,
      explain: 'Its very high refractive index gives a small critical angle, so light reflects repeatedly inside before emerging.',
    },
    {
      q: 'The master gland of the human body is the:',
      options: ['Thyroid', 'Pituitary', 'Adrenal', 'Pancreas'],
      answer: 1,
      explain: 'It sits at the base of the brain and regulates the secretions of the other endocrine glands.',
    },
    {
      q: 'ISRO was established in:',
      options: ['1958', '1962', '1969', '1972'],
      answer: 2,
      explain: 'DRDO was set up in 1958, CSIR in 1942 and BARC in 1954.',
    },
    {
      q: 'The universal donor blood group is:',
      options: ['AB positive', 'A negative', 'O negative', 'B positive'],
      answer: 2,
      explain: 'AB positive is the universal recipient. Blood groups were discovered by Karl Landsteiner.',
    },
    {
      q: 'A light year is a unit of:',
      options: ['Time', 'Distance', 'Brightness', 'Speed'],
      answer: 1,
      explain: 'It is the distance light travels in one year. A parsec is also a unit of distance.',
    },
    {
      q: 'Which vitamins are fat-soluble?',
      options: ['B and C', 'A, D, E and K', 'A, B and C', 'C, D and E'],
      answer: 1,
      explain: 'Being stored in the body, they can accumulate to toxic levels; the B group and C are water-soluble and are excreted.',
    },
    {
      q: 'The Raman effect won the Nobel Prize in Physics in:',
      options: ['1913', '1930', '1945', '1968'],
      answer: 1,
      explain: 'C. V. Raman was the first Asian to receive a Nobel Prize in a science.',
    },
    {
      q: 'Sound cannot travel through:',
      options: ['Air', 'Water', 'Steel', 'A vacuum'],
      answer: 3,
      explain: 'It is a mechanical wave and needs a medium; it travels fastest in solids and slowest in gases.',
    },
  ],

  faqs: [
    {
      q: 'Why is general science worth more preparation time than it looks?',
      a: 'Because it has the highest ratio of marks to effort in any general awareness paper. RRB papers carry eight to twelve science questions and SSC five to eight, drawn from a stable pool of a few hundred facts that does not change between years. Very little else in the syllabus offers that combination of volume and stability.',
    },
    {
      q: 'How should I actually learn this material?',
      a: 'As pairings, not as chapters. Instrument with what it measures, vitamin with the disease its absence causes, common name with chemical name, alloy with its constituents, disease with its vector. Questions are almost always framed as one half of a pair with the other half among the options, so learning the pair directly is learning exactly what is tested.',
    },
    {
      q: 'Why is the pulmonary artery an exception?',
      a: 'Because arteries and veins are defined by direction, not by oxygen content: an artery carries blood away from the heart and a vein carries it towards the heart. The pulmonary artery carries deoxygenated blood away from the heart to the lungs, and the pulmonary vein brings oxygenated blood back. Both are exceptions to the usual association, and both are examined.',
    },
    {
      q: 'What is the difference between a hygrometer and a hydrometer?',
      a: 'A hygrometer measures the humidity of air. A hydrometer measures the density or relative density of a liquid. A lactometer is a hydrometer calibrated for milk, since adulteration with water changes its density. The near-identical names are exactly why the pair appears in option lists together.',
    },
    {
      q: 'Which vitamins can be harmful in excess?',
      a: 'The fat-soluble ones — A, D, E and K — because they are stored in body fat and the liver rather than excreted. Excess vitamin A and vitamin D in particular can be toxic. The B group and vitamin C are water-soluble and any surplus is passed in urine, so excess is wasteful rather than dangerous.',
    },
    {
      q: 'Do I need to memorise chemical formulas?',
      a: 'Only for the common household compounds in the table above — baking soda, washing soda, caustic soda, bleaching powder, plaster of Paris, quicklime and the vitriols. Those are asked directly. Beyond that, general awareness papers ask for the common name or the use rather than the formula; formulas belong to the chemistry page.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'Essentially none of the science. What changes is the applied edge — the names of research funding bodies, government science schemes and any health or technology development in the news. The founding dates of ISRO, DRDO, CSIR, ICAR and ICMR, and everything else on this page, are stable.',
    },
    {
      q: 'How does this differ from the physics, chemistry and biology pages?',
      a: 'This page covers science as general-awareness papers ask it: recall, pairings and applications, with no calculation. The subject pages treat the same sciences academically, with derivations, formulas and problem-solving, for candidates preparing for entrance examinations or for papers that test the subject in depth. Read this page for SSC, RRB and banking; read those for JEE, NEET and the science-specific papers.',
    },
    {
      q: 'Why do exams ask about scientific instruments so often?',
      a: 'Because each instrument is a single unambiguous pairing with no scope for dispute, which makes it an ideal objective question. There are about thirty commonly asked instruments, and knowing the Greek or Latin root usually gives the answer — anemos for wind, seismos for shaking, sphygmos for pulse.',
    },
    {
      q: 'How many science questions come in the exams?',
      a: 'Eight to twelve in RRB NTPC and Group D, which carry a dedicated general science section; five to eight in SSC CGL and CHSL Tier 1; three to five in state PSC prelims; two to four in UPSC Prelims, usually applied rather than recall; and one to two in banking general awareness.',
    },
  ],

  related: [
    { label: 'Space & Defence', to: '/study-material/science/space-and-defence/' },
    { label: 'Emerging Technology', to: '/study-material/science/emerging-technology/' },
    { label: 'Physics', to: '/study-material/physics/' },
    { label: 'Biology', to: '/study-material/biology/' },
    { label: 'All Science & Technology', to: '/study-material/science/' },
  ],
}
