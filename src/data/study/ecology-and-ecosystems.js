/**
 * Ecology and Ecosystems — /study-material/environment/ecology-and-ecosystems/
 *
 * The vocabulary layer of the environment syllabus. Every term here is used
 * without explanation in the biodiversity and climate pages, and a large share
 * of UPSC environment questions are really definition questions in disguise.
 */
export default {
  subject: 'environment',
  subjectName: 'Environment',
  slug: 'ecology-and-ecosystems',
  title: 'Ecology & Ecosystems',
  seoTitle: 'Ecology and Ecosystems for Competitive Exams | Notes, Cycles & Practice',
  metaDescription:
    'Complete ecology and ecosystems study material for UPSC, state PSC and SSC exams — ecological concepts, ecosystem structure, energy flow and pyramids.',
  readMinutes: 24,
  lead: [
    'Environment has grown from a handful of questions to one of the largest blocks in UPSC Prelims, and the reason is that it sits at the junction of science, geography and current affairs. A single question can require you to know what a keystone species is, where a particular tiger reserve lies, and what a recent report said about it.',
    'This page supplies the vocabulary the rest of the subject assumes. Almost every environment question that looks like current affairs turns out, on inspection, to be testing whether you know what eutrophication means, why a pyramid of biomass can be inverted, or which nutrient cycle has no gaseous phase.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '10–15 questions', note: 'Environment and ecology together form one of the largest blocks in the paper.' },
    { exam: 'State PSC Prelims', count: '3–6 questions', note: 'Often with a block on the state\'s own protected areas and pollution issues.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–3 questions', note: 'Basic definitions, pollutants and the major conventions.' },
    { exam: 'Forest Service and IFoS', count: '15+ questions', note: 'Treated in far greater depth, including succession and productivity.' },
    { exam: 'Banking and insurance GA', count: '1–2 questions', note: 'Usually a recent summit or a report in the news.' },
  ],

  contents: [
    { icon: 'book', title: 'Basic concepts', sub: 'The vocabulary of ecology', href: '#concepts' },
    { icon: 'layers', title: 'Ecosystem structure', sub: 'Components and types', href: '#ecosystem' },
    { icon: 'chart', title: 'Energy flow', sub: 'Trophic levels and pyramids', href: '#energy' },
    { icon: 'refresh', title: 'Biogeochemical cycles', sub: 'Carbon, nitrogen, phosphorus, water', href: '#cycles' },
    { icon: 'globe', title: 'Succession and interactions', sub: 'How communities change and relate', href: '#succession' },
    { icon: 'bell', title: 'Pollution', sub: 'Air, water, soil and noise', href: '#pollution' },
    { icon: 'target', title: 'Waste management', sub: 'Categories and treatment', href: '#waste' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'concepts',
      heading: 'Basic concepts',
      eyebrow: 'The vocabulary of ecology',
      intro:
        'A dozen terms carry most of the questions in this subject. Each is short, precise, and easy to confuse with the one next to it — which is exactly what option lists exploit.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Levels of organisation',
              'From smallest to largest: the individual organism; the population, being all individuals of one species in an area; the community, being all populations of all species there; the ecosystem, adding the non-living environment; the biome, a large regional unit defined by climate and vegetation; and the biosphere, the whole zone of life on earth.',
            ],
            [
              'Habitat and niche',
              'A habitat is where an organism lives — its address. A niche is what it does there — its profession: the range of conditions it tolerates, the resources it uses and its role in the community. Two species can share a habitat but not, for long, an identical niche, which is the competitive exclusion principle.',
            ],
            [
              'Keystone species',
              'A species whose effect on the community is disproportionately large relative to its abundance. Removing it changes the whole system — the classic example is the sea otter, whose predation on sea urchins allows kelp forests to survive. It is not the same as a dominant species, which is simply the most abundant.',
            ],
            [
              'Flagship and umbrella species',
              'A flagship species is charismatic and used to build public support for conservation — the tiger, the elephant, the giant panda. An umbrella species requires such a large area that protecting it incidentally protects many others sharing that range. The tiger serves as both in India, which is why option lists set the two terms against each other.',
            ],
            [
              'Indicator species',
              'A species whose presence, absence or condition signals the state of the environment. Lichens are the standard example for air quality, since they disappear under sulphur dioxide pollution. Amphibians serve as indicators of water quality and habitat integrity.',
            ],
            [
              'Endemic species',
              'A species found naturally in one geographical area and nowhere else. The Nilgiri tahr, the lion-tailed macaque and the Great Indian Bustard are Indian examples. Endemism is what makes a region irreplaceable, and it is one of the two criteria for identifying a biodiversity hotspot.',
            ],
            [
              'Ecotone and edge effect',
              'An ecotone is the transition zone between two ecosystems — a mangrove between land and sea, a grassland between forest and desert. It typically has greater species diversity than either adjoining system, and that increase is the edge effect. Species particularly abundant in the ecotone are edge species.',
            ],
            [
              'Ecological tolerance and limiting factors',
              'Every species has a range of a condition — temperature, salinity, pH — within which it survives, with an optimum in the middle. Liebig\'s law of the minimum states that growth is limited by whichever essential resource is scarcest, not by the total supply of all of them.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'ecosystem',
      heading: 'Ecosystem structure',
      eyebrow: 'Components and types',
      intro:
        'An ecosystem is a community of organisms together with their physical environment, interacting as a functional unit. The term was coined by A. G. Tansley in 1935.',
      blocks: [
        {
          type: 'table',
          caption: 'Components of an ecosystem',
          head: ['Component', 'What it includes', 'Function'],
          rows: [
            ['Abiotic', 'Light, temperature, water, air, soil, minerals and other physical and chemical factors', 'Sets the conditions and supplies the raw materials within which life operates.'],
            ['Producers (autotrophs)', 'Green plants, algae and photosynthetic bacteria', 'Convert solar energy into chemical energy, bringing energy into the system. Chemoautotrophs use chemical energy instead of light.'],
            ['Consumers (heterotrophs)', 'Herbivores as primary consumers, carnivores as secondary and tertiary consumers, omnivores taking both', 'Transfer energy up the trophic levels by feeding.'],
            ['Decomposers', 'Bacteria and fungi, together with detritivores such as earthworms', 'Break down dead matter, returning nutrients to the abiotic pool. Without them nutrient cycles would stop.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Types of ecosystem',
              'Terrestrial — forest, grassland, desert and tundra. Aquatic — freshwater, subdivided into lentic or still water such as lakes and ponds and lotic or flowing water such as rivers and streams, and marine, including estuaries, coral reefs and the open ocean. Estuaries and mangroves are among the most productive systems in the world.',
            ],
            [
              'Productivity',
              'Gross primary productivity is the total organic matter produced by photosynthesis in a given time. Net primary productivity is what remains after the plants\' own respiration, and it is what is actually available to consumers. Secondary productivity is the rate at which consumers build biomass. Coral reefs, estuaries and tropical rainforests have the highest productivity; open ocean and deserts the lowest.',
            ],
            [
              'Wetlands',
              'Areas where water covers the soil or is present at or near the surface, permanently or seasonally — marshes, mangroves, peatlands, lakes and floodplains. They recharge groundwater, control floods, filter pollutants and support very high biodiversity, which is why they have their own international convention.',
            ],
            [
              'Mangroves',
              'Salt-tolerant forest at the interface of land and sea, with breathing roots called pneumatophores and viviparous germination in which the seed sprouts while still on the parent tree. They are nurseries for fish and act as a physical buffer against storm surge — a role that became prominent after the 2004 tsunami. The Sundarbans is the largest single mangrove stretch in the world.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'energy',
      heading: 'Energy flow',
      eyebrow: 'Trophic levels and pyramids',
      intro:
        'The central asymmetry of ecology: energy flows through an ecosystem in one direction and is lost at every step, while nutrients cycle round and are reused. Almost every question in this section follows from that one distinction.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Food chain and food web',
              'A food chain is a linear sequence of who eats whom. A grazing food chain starts with living plants; a detritus food chain starts with dead organic matter, and in many ecosystems it carries more of the energy. A food web is the interlocking set of food chains that actually exists, and it is more stable than any single chain because a species losing one prey has alternatives.',
            ],
            [
              'The ten per cent law',
              'Formulated by Raymond Lindeman: only about ten per cent of the energy at one trophic level is transferred to the next, the rest being lost as heat in respiration and in the metabolic work of living. This is why food chains rarely exceed four or five links — there is not enough energy left to support another level.',
            ],
            [
              'Ecological pyramids',
              'A graphical representation of numbers, biomass or energy at each trophic level. The pyramid of energy is always upright, because energy is lost at each transfer and cannot increase up the chain. The pyramid of numbers can be inverted, as in a single tree supporting thousands of insects. The pyramid of biomass can also be inverted, as in the open ocean, where a small standing crop of phytoplankton with a very fast turnover supports a larger mass of zooplankton at any moment.',
            ],
            [
              'Bioaccumulation and biomagnification',
              'Bioaccumulation is the build-up of a substance within a single organism over its lifetime, because intake exceeds excretion. Biomagnification is the increase in concentration at successive trophic levels, so that top predators carry the highest loads. DDT in birds of prey, causing eggshell thinning, and mercury in fish, causing the Minamata disease, are the standard examples.',
            ],
            [
              'Carrying capacity',
              'The maximum population of a species that an environment can sustain indefinitely given its resources. Exceeding it leads to resource depletion and a population crash. The concept underlies discussions of ecological footprint and sustainable harvesting.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Relationships worth remembering',
          items: [
            { expr: 'NPP = GPP − respiration by producers', note: 'Net primary productivity is what is actually available to the rest of the food chain.' },
            { expr: 'Energy at level n ≈ 10% of energy at level n−1', note: 'The ten per cent law, which limits food chains to about four or five links.' },
            { expr: 'Ecological efficiency = energy passed on ÷ energy received', note: 'Typically around ten per cent, though it varies widely between systems.' },
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'cycles',
      heading: 'Biogeochemical cycles',
      eyebrow: 'Carbon, nitrogen, phosphorus, water',
      intro:
        'Nutrients move between living organisms and the physical environment in closed loops. Cycles with an atmospheric reservoir are gaseous; those with a rock reservoir are sedimentary, and the distinction is directly examined.',
      blocks: [
        {
          type: 'table',
          caption: 'The four cycles',
          head: ['Cycle', 'Type and main reservoir', 'Key processes'],
          rows: [
            ['Carbon', 'Gaseous — atmosphere and oceans', 'Photosynthesis removes carbon dioxide; respiration, decomposition and combustion return it. The ocean is the largest active reservoir, and fossil fuels are a long-term store now being released rapidly.'],
            ['Nitrogen', 'Gaseous — the atmosphere, which is about 78 per cent nitrogen', 'Fixation converts inert nitrogen gas into usable form, by Rhizobium in legume root nodules, by free-living bacteria, by lightning and industrially by the Haber process. Ammonification releases ammonia from dead matter; nitrification converts it to nitrite and then nitrate; denitrification returns nitrogen gas to the atmosphere.'],
            ['Phosphorus', 'Sedimentary — rocks and ocean sediments', 'The only major cycle with no significant gaseous phase, which is why phosphorus is so often the limiting nutrient. Weathering releases it, plants absorb it, and it eventually settles in sediment.'],
            ['Water', 'Gaseous — oceans and atmosphere', 'Evaporation, transpiration, condensation, precipitation, infiltration and runoff. It is the cycle that drives all the others by moving dissolved nutrients.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why nitrogen fixation matters',
              'Atmospheric nitrogen is chemically inert and cannot be used directly by plants, despite being abundant. Fixation is therefore the bottleneck of the whole cycle, and the invention of the Haber process to fix nitrogen industrially is what made modern agricultural yields possible — and also what has disrupted the natural cycle most.',
            ],
            [
              'Eutrophication',
              'Enrichment of a water body with nutrients, chiefly nitrogen and phosphorus from fertiliser runoff and sewage. It triggers algal blooms that block light and, when the algae die and decompose, consume the dissolved oxygen. Fish suffocate and the water body can become a dead zone. Cultural eutrophication is the human-accelerated form.',
            ],
            [
              'Carbon sequestration',
              'The capture and long-term storage of carbon. Natural sinks include forests, soils, peatlands and the ocean. Blue carbon refers specifically to carbon stored by coastal and marine ecosystems — mangroves, seagrasses and salt marshes — which store it at rates per unit area far above terrestrial forests.',
            ],
            [
              'The ozone layer',
              'Stratospheric ozone absorbs ultraviolet radiation. Chlorofluorocarbons released at the surface drift up and, catalysed by ice crystals in the polar stratosphere, destroy ozone — producing the seasonal Antarctic ozone hole. The Montreal Protocol of 1987 phased out these substances, and the layer is now recovering, making it the most successful environmental treaty so far.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'succession',
      heading: 'Succession and interactions',
      eyebrow: 'How communities change and relate',
      intro:
        'Two blocks of standard terminology, both of which appear as straight definition questions.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Ecological succession',
              'The orderly, predictable change in the species composition of a community over time, ending in a relatively stable climax community. Primary succession begins on a surface with no soil at all — bare rock, a new volcanic island, a retreating glacier — and is slow. Secondary succession begins where a community has been disturbed but soil remains, as after a fire or abandonment of farmland, and is much faster.',
            ],
            [
              'Types of sere',
              'A sere is the whole sequence of communities. A hydrosere or hydrarch succession begins in water and moves towards land. A xerosere or xerarch succession begins on dry bare surface and moves towards a mesic climax. Both converge on a similar climax community, which is one of the ideas the concept is used to illustrate.',
            ],
            [
              'Pioneer and climax',
              'Pioneer species colonise first — lichens on bare rock, secreting acids that begin soil formation. The climax community is the stable end-point in equilibrium with the climate. The idea of a single deterministic climax has been qualified in modern ecology, but the exam still uses the classical scheme.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Species interactions',
          head: ['Interaction', 'Effect on the two species', 'Example'],
          rows: [
            ['Mutualism', 'Both benefit', 'Lichen, a fungus and an alga together; mycorrhiza between fungi and plant roots; the fig and its pollinating wasp.'],
            ['Commensalism', 'One benefits, the other is unaffected', 'An orchid growing on a tree branch; barnacles on a whale; cattle egrets following grazing cattle.'],
            ['Parasitism', 'One benefits, the other is harmed', 'Cuscuta on a host plant; ticks and lice on mammals; brood parasitism by the cuckoo.'],
            ['Predation', 'One benefits, the other is killed', 'Tiger and deer. Predation also includes herbivory, where the plant is the prey.'],
            ['Competition', 'Both are harmed', 'Two species using the same limited resource; by the competitive exclusion principle, one eventually displaces the other unless niches diverge.'],
            ['Amensalism', 'One is harmed, the other is unaffected', 'Allelopathy, where one plant releases chemicals that suppress the germination of others nearby.'],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'pollution',
      heading: 'Pollution',
      eyebrow: 'Air, water, soil and noise',
      intro:
        'Pollution questions are of two kinds: which pollutant causes which effect, and which index or standard measures it. Both are covered below.',
      blocks: [
        {
          type: 'table',
          caption: 'Air pollutants and their effects',
          head: ['Pollutant', 'Principal source', 'Effect'],
          rows: [
            ['Particulate matter (PM10 and PM2.5)', 'Combustion, construction dust, crop residue burning, industry', 'PM2.5 penetrates deep into the lungs and enters the bloodstream; the single most damaging air pollutant to health.'],
            ['Sulphur dioxide', 'Burning of coal and high-sulphur fuel oil', 'Respiratory irritation and acid rain. Lichens die out where it is high, which makes them an indicator.'],
            ['Oxides of nitrogen', 'High-temperature combustion, chiefly vehicles and power plants', 'Respiratory damage, acid rain, and a precursor of ground-level ozone.'],
            ['Ground-level ozone', 'Not emitted directly — formed when nitrogen oxides and volatile organic compounds react in sunlight', 'A secondary pollutant. Harmful at ground level, though the same molecule is protective in the stratosphere.'],
            ['Carbon monoxide', 'Incomplete combustion', 'Binds to haemoglobin far more strongly than oxygen does, reducing the blood\'s oxygen-carrying capacity.'],
            ['Volatile organic compounds', 'Solvents, paints, fuel evaporation', 'Precursors of ozone and of photochemical smog.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Air Quality Index',
              'A single number summarising several pollutants on a common scale, with categories running Good, Satisfactory, Moderate, Poor, Very Poor and Severe in the Indian system. It is computed from up to eight pollutants, and the overall index takes the worst of them. The National Ambient Air Quality Standards are set by the Central Pollution Control Board, and the National Clean Air Programme, launched in 2019, sets reduction targets for cities that exceed them.',
            ],
            [
              'Smog',
              'Classical or London smog forms in cold humid conditions from sulphur dioxide and particulates, and is reducing in chemical character. Photochemical or Los Angeles smog forms in warm sunny conditions from nitrogen oxides and volatile organic compounds, is oxidising, and contains ozone and peroxyacetyl nitrate.',
            ],
            [
              'Water pollution measures',
              'Biochemical oxygen demand is the oxygen required by micro-organisms to break down organic matter in a sample; a high BOD indicates heavy organic pollution. Chemical oxygen demand measures the oxygen needed to oxidise all matter, organic and inorganic, and is therefore always higher than BOD. Dissolved oxygen falls as pollution rises, and fish require a minimum level to survive.',
            ],
            [
              'Named disease-pollutant pairs',
              'Minamata disease from methylmercury; Itai-itai disease from cadmium; blue baby syndrome or methaemoglobinaemia from nitrate in drinking water; fluorosis from excess fluoride; and arsenicosis and skin lesions from arsenic in groundwater, a serious problem in parts of West Bengal and Bihar.',
            ],
            [
              'Noise and thermal pollution',
              'Noise is measured in decibels on a logarithmic scale, so a ten-decibel rise represents a tenfold increase in intensity. Thermal pollution is the discharge of heated water, usually from power plant cooling, which lowers dissolved oxygen and stresses aquatic life.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'waste',
      heading: 'Waste management',
      eyebrow: 'Categories and treatment',
      intro:
        'A compact topic, examined for the categories, the treatment methods and the rules that govern each stream.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Categories of waste',
              'Municipal solid waste from households and commerce; biomedical waste from hospitals, colour-coded by category for segregation; hazardous industrial waste; electronic waste from discarded devices, which contains both toxic metals and recoverable precious ones; construction and demolition debris; and plastic waste, of which single-use plastics have been the focus of recent regulation.',
            ],
            [
              'Treatment methods',
              'Composting and vermicomposting for biodegradable waste. Anaerobic digestion, which produces biogas as well as treating the waste. Incineration, which reduces volume drastically and can recover energy but produces ash and, if poorly controlled, dioxins. Sanitary landfill with lining and leachate collection, for the residue that cannot be treated otherwise. Recycling, which recovers materials, and the older practice of open dumping, which is neither treatment nor disposal.',
            ],
            [
              'The waste hierarchy',
              'In descending order of preference: prevention, reduction, reuse, recycling, recovery including energy recovery, and finally disposal. Policy is judged by how far up this ladder it operates, and the circular economy is the idea of designing systems so that material never reaches the bottom rung.',
            ],
            [
              'Extended producer responsibility',
              'The principle that a producer\'s responsibility for a product extends to its end-of-life management. It underlies India\'s rules on plastic packaging, electronic waste and battery waste, obliging producers to collect and process a specified proportion of what they place on the market.',
            ],
            [
              'Bioremediation and phytoremediation',
              'Bioremediation uses micro-organisms to break down contaminants in soil or water. Phytoremediation uses plants to absorb, stabilise or degrade them — water hyacinth and certain grasses accumulate heavy metals. Both are low-cost but slow, and are examined as alternatives to physical removal.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The rules to name',
          text:
            'Waste in India is governed by rules made under the Environment (Protection) Act, 1986 — separate rules for solid waste, plastic waste, biomedical waste, electronic waste, hazardous waste, construction and demolition waste, and battery waste. These rules are amended frequently, so name the parent Act and the stream rather than quoting a specific threshold or date from any particular amendment.',
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Why can a pyramid of biomass be inverted in an ocean but a pyramid of energy never can?',
      steps: [
        'A pyramid of biomass measures the standing crop at one moment, not the flow over time.',
        'In the open ocean phytoplankton have a very short life and a very fast turnover, so at any instant their standing mass is small even though total production is large — a larger mass of zooplankton can be supported.',
        'A pyramid of energy measures the flow over a period, and energy is lost at every transfer, so a higher level can never carry more energy than the one below it.',
      ],
      answer: 'Biomass is a snapshot and can be inverted by turnover; energy flow is cumulative and always declines upward.',
    },
    {
      q: 'Which nutrient cycle has no significant gaseous phase, and what follows from that?',
      steps: [
        'Carbon, nitrogen and water all have large atmospheric reservoirs and are gaseous cycles.',
        'Phosphorus is held in rocks and ocean sediments, and is released only by weathering.',
        'Because it has no atmospheric route back into circulation, phosphorus recycles slowly and is often the limiting nutrient in an ecosystem — and phosphorus running off into water bodies is a principal cause of eutrophication.',
      ],
      answer: 'The phosphorus cycle — sedimentary, slow, and frequently the limiting nutrient.',
    },
    {
      q: 'Explain why DDT concentrations are highest in birds of prey.',
      steps: [
        'DDT is fat-soluble and is excreted very slowly, so it accumulates within an individual over its lifetime — bioaccumulation.',
        'A predator eats many prey animals, each already carrying an accumulated load, so the concentration rises at each trophic level — biomagnification.',
        'Birds of prey sit at the top of the chain, so they carry the highest concentrations, which caused eggshell thinning and population collapse.',
      ],
      answer: 'Bioaccumulation within organisms combined with biomagnification up the trophic levels.',
    },
    {
      q: 'A lake receives fertiliser runoff. Trace what happens.',
      steps: [
        'Nitrogen and phosphorus enrich the water, which is eutrophication.',
        'Algae proliferate into a bloom, forming a surface mat that blocks light from reaching submerged plants.',
        'When the algae die, decomposers consume the dissolved oxygen in breaking them down, and fish and other aerobic life suffocate — a dead zone forms.',
      ],
      answer: 'Eutrophication leading to an algal bloom, oxygen depletion and fish kill.',
    },
    {
      q: 'Distinguish a keystone species from a dominant species.',
      steps: [
        'A dominant species is simply the most abundant, or the one contributing most biomass.',
        'A keystone species has an effect on the community out of all proportion to its abundance.',
        'Removing the dominant species changes the appearance of the community; removing the keystone species can cause the whole system to reorganise, as when the loss of sea otters allows urchins to destroy kelp forests.',
      ],
      answer: 'Dominance is about abundance; a keystone role is about disproportionate influence.',
    },
    {
      q: 'Why do food chains rarely have more than four or five links?',
      steps: [
        'Only about ten per cent of the energy at one trophic level passes to the next, the rest being lost as heat.',
        'After four transfers, roughly one ten-thousandth of the original energy remains.',
        'That is too little to sustain a viable population at a further level, so the chain ends.',
      ],
      answer: 'Because of the ten per cent law — there is not enough energy left to support another level.',
    },
    {
      q: 'Distinguish London smog from Los Angeles smog.',
      steps: [
        'Classical or London smog forms in cold, humid, still conditions from sulphur dioxide and particulates, and is chemically reducing.',
        'Photochemical or Los Angeles smog forms in warm, sunny conditions from nitrogen oxides and volatile organic compounds reacting in sunlight, and is chemically oxidising.',
        'The photochemical variety contains ozone and peroxyacetyl nitrate, which the classical variety does not.',
      ],
      answer: 'London smog is reducing and cold-weather; Los Angeles smog is oxidising, sunlight-driven and contains ozone.',
    },
    {
      q: 'Succession begins on a lava flow and on an abandoned farm. Which is faster, and why?',
      steps: [
        'The lava flow has no soil at all, so this is primary succession and must begin with pioneer species such as lichens that slowly create soil.',
        'The abandoned farm retains soil, seed bank and nutrients, so this is secondary succession.',
        'Because the hardest and slowest step — soil formation — is already done, secondary succession proceeds much faster.',
      ],
      answer: 'The abandoned farm, because secondary succession starts with soil already present.',
    },
  ],

  practice: [
    {
      q: 'The term "ecosystem" was coined by:',
      options: ['A. G. Tansley', 'Charles Elton', 'Raymond Lindeman', 'Eugene Odum'],
      answer: 0,
      explain: 'Tansley introduced it in 1935. Lindeman formulated the ten per cent law of energy transfer.',
    },
    {
      q: 'Which ecological pyramid is always upright?',
      options: ['Pyramid of numbers', 'Pyramid of biomass', 'Pyramid of energy', 'All three'],
      answer: 2,
      explain: 'Energy is lost at every transfer, so a higher trophic level can never carry more energy than the one below.',
    },
    {
      q: 'Lichens are used as indicators of:',
      options: ['Water pollution', 'Noise pollution', 'Soil erosion', 'Air pollution'],
      answer: 3,
      explain: 'They are highly sensitive to sulphur dioxide and disappear from polluted areas.',
    },
    {
      q: 'The nitrogen-fixing bacterium found in the root nodules of legumes is:',
      options: ['Nitrosomonas', 'Pseudomonas', 'Nitrobacter', 'Rhizobium'],
      answer: 3,
      explain: 'Nitrosomonas and Nitrobacter carry out nitrification; Pseudomonas is involved in denitrification.',
    },
    {
      q: 'Which cycle is sedimentary rather than gaseous?',
      options: ['Carbon', 'Nitrogen', 'Phosphorus', 'Water'],
      answer: 2,
      explain: 'Phosphorus has no significant atmospheric phase, which makes it slow to recycle and often the limiting nutrient.',
    },
    {
      q: 'Minamata disease is caused by:',
      options: ['Cadmium', 'Arsenic', 'Lead', 'Mercury'],
      answer: 3,
      explain: 'Methylmercury poisoning through contaminated fish. Cadmium causes Itai-itai disease.',
    },
    {
      q: 'The relationship between an orchid growing on a tree and the tree is:',
      options: ['Mutualism', 'Parasitism', 'Commensalism', 'Amensalism'],
      answer: 2,
      explain: 'The orchid benefits from the position; the tree is neither helped nor harmed.',
    },
    {
      q: 'A high biochemical oxygen demand in a water sample indicates:',
      options: ['High organic pollution', 'High salinity', 'Low temperature', 'High dissolved oxygen'],
      answer: 0,
      explain: 'BOD is the oxygen micro-organisms need to break down organic matter, so a high value means heavy organic load.',
    },
    {
      q: 'Ground-level ozone is:',
      options: ['Emitted directly by vehicles', 'A secondary pollutant formed in sunlight', 'A component of London smog', 'Beneficial at ground level'],
      answer: 1,
      explain: 'It forms when nitrogen oxides and volatile organic compounds react in sunlight, and it is a component of photochemical smog.',
    },
    {
      q: 'Succession that begins on bare rock with no soil is called:',
      options: ['Secondary succession', 'Primary succession', 'Hydrarch succession', 'Climax succession'],
      answer: 1,
      explain: 'It is slow because soil must be formed first, typically beginning with lichens as pioneers.',
    },
    {
      q: 'The transition zone between two ecosystems is called an:',
      options: ['Ecotype', 'Ecotone', 'Ecocline', 'Ecosphere'],
      answer: 1,
      explain: 'It usually shows higher species diversity than either adjoining system, which is the edge effect.',
    },
    {
      q: 'Blue carbon refers to carbon stored by:',
      options: ['Tropical rainforests', 'Coastal and marine ecosystems', 'Peat bogs in the tundra', 'Agricultural soils'],
      answer: 1,
      explain: 'Mangroves, seagrasses and salt marshes store carbon at rates per unit area well above terrestrial forests.',
    },
    {
      q: 'The ten per cent law of energy transfer was given by:',
      options: ['Odum', 'Lindeman', 'Tansley', 'Elton'],
      answer: 1,
      explain: 'Raymond Lindeman. It explains why food chains rarely exceed four or five trophic levels.',
    },
    {
      q: 'Allelopathy, where one plant suppresses another chemically, is an example of:',
      options: ['Amensalism', 'Commensalism', 'Mutualism', 'Predation'],
      answer: 0,
      explain: 'One species is harmed while the other is unaffected.',
    },
    {
      q: 'Which of these ecosystems has the highest net primary productivity?',
      options: ['Open ocean', 'Desert', 'Coral reef', 'Tundra'],
      answer: 2,
      explain: 'Coral reefs, estuaries and tropical rainforests are the most productive; open ocean and desert the least.',
    },
    {
      q: 'The principle that growth is limited by the scarcest essential resource is:',
      options: ['Gause\'s principle', 'Liebig\'s law of the minimum', 'Lindeman\'s law', 'Allen\'s rule'],
      answer: 1,
      explain: 'Gause\'s principle is competitive exclusion — two species cannot occupy an identical niche indefinitely.',
    },
  ],

  faqs: [
    {
      q: 'Why has environment become such a large part of UPSC Prelims?',
      a: 'Because it connects science, geography, current affairs and international relations in one place, which makes it ideal for the kind of multi-layered question the paper now favours. It also has no fixed syllabus boundary, so questions can be drawn from a species in the news, a treaty conference, a new protected area or a report — while still resting on the vocabulary on this page.',
    },
    {
      q: 'What is the difference between habitat and niche?',
      a: 'A habitat is the physical place an organism lives — its address. A niche is its functional role: what it eats, when it is active, what conditions it tolerates, what eats it. Two species can share a habitat, but by the competitive exclusion principle they cannot occupy an identical niche indefinitely; one will displace the other unless their niches diverge.',
    },
    {
      q: 'Why is energy flow one-way while nutrients cycle?',
      a: 'Because energy degrades. At every transfer, most of the energy is lost as heat in respiration and metabolic work, and heat cannot be recaptured by organisms, so energy must be constantly resupplied by the sun. Matter does not degrade in the same way — the same atoms of carbon, nitrogen and phosphorus are used repeatedly, which is why they form closed cycles.',
    },
    {
      q: 'What exactly is biomagnification, and how does it differ from bioaccumulation?',
      a: 'Bioaccumulation is the build-up of a substance in one organism over its lifetime, because it takes in more than it excretes. Biomagnification is the increase in concentration from one trophic level to the next, because a predator consumes many prey animals each already carrying a load. Fat-soluble, slowly excreted substances such as DDT and methylmercury do both.',
    },
    {
      q: 'Is a keystone species the same as a flagship species?',
      a: 'No, though one animal can be both. A keystone species has an ecological effect out of proportion to its abundance. A flagship species is chosen for its public appeal, to attract support for conservation. The tiger is a flagship species in India and also functions as an umbrella species, because protecting the area it needs protects everything else living there.',
    },
    {
      q: 'What causes an algal bloom?',
      a: 'Nutrient enrichment, chiefly nitrogen and phosphorus from fertiliser runoff, sewage and detergents. The algae multiply rapidly, block light to submerged plants, and on dying are decomposed by bacteria that consume the dissolved oxygen. Fish and other aerobic organisms then suffocate. Some blooms also release toxins directly.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'Almost none of it. Trophic levels, nutrient cycles, succession and species interactions are settled science. What moves is the applied edge — air quality readings, the status of a particular water body, the current version of a waste rule — and those belong to current affairs rather than to the concepts here.',
    },
    {
      q: 'How should I study environment alongside geography and biology?',
      a: 'As one subject with three entry points. Physical geography supplies climate and soils; biology supplies the organisms; ecology supplies the framework that connects them. Studying them separately means learning the same content three times. A practical approach is to read physical geography first, this page second, and then treat biodiversity and climate as applications.',
    },
    {
      q: 'How much of the environment block is really current affairs?',
      a: 'A significant share of the question stems but very little of the answers. A question may be framed around a recent report or a species in the news, but answering it usually requires knowing what a term means or which convention covers what. Keep up with the news for the framing, and rely on this material for the substance.',
    },
    {
      q: 'How many questions come from ecology and environment?',
      a: 'Ten to fifteen in UPSC Prelims GS Paper 1 when environment, ecology and biodiversity are counted together — one of the largest blocks in the paper. Three to six in state PSC prelims, one to three in SSC CGL Tier 1, and fifteen or more in the Indian Forest Service examination.',
    },
  ],

  related: [
    { label: 'Biodiversity & Conservation', to: '/study-material/environment/biodiversity/' },
    { label: 'Climate Change & Agreements', to: '/study-material/environment/climate-change/' },
    { label: 'Physical Geography', to: '/study-material/geography/physical-geography/' },
    { label: 'Biology', to: '/study-material/biology/' },
    { label: 'All Environment', to: '/study-material/environment/' },
  ],
}
