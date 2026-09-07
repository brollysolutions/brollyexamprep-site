/**
 * Climate Change and Agreements —
 * /study-material/environment/climate-change/
 *
 * The most current-affairs-exposed page in the general studies syllabus, so
 * it is built as durable mechanism plus explicitly dated milestones. The COP
 * and target figures here are given as of the position after COP30 at Belém.
 */
export default {
  subject: 'environment',
  subjectName: 'Environment',
  slug: 'climate-change',
  title: 'Climate Change & Agreements',
  seoTitle: 'Climate Change and Global Agreements | UNFCCC, Paris, India Notes & Practice',
  metaDescription:
    'Complete climate change study material for UPSC, state PSC and banking exams — the greenhouse mechanism, impacts, the UNFCCC regime from Kyoto to Paris.',
  readMinutes: 25,
  lead: [
    'Climate change is where the environment syllabus meets international relations, and it is the block where a question is most likely to be drawn from something that happened in the last twelve months. That makes it tempting to treat it purely as current affairs, which is a mistake — the questions still rest on a fixed structure of treaties, principles and institutions.',
    'This page gives that structure first and then the current position, dating every milestone so you can see what has moved. It is written from the position after the thirtieth Conference of the Parties at Belém in November 2025, with COP31 scheduled for Antalya in November 2026, and it notes where India has already passed a target that older material still lists as pending.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '4–7 questions', note: 'Agreements, institutions and India\'s commitments, frequently tied to a recent summit.' },
    { exam: 'Banking and insurance GA', count: '2–4 questions', note: 'Almost entirely current affairs — the latest COP, a new fund, a new target.' },
    { exam: 'State PSC Prelims', count: '2–4 questions', note: 'Agreements plus the state\'s own climate action plan.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–2 questions', note: 'The famous agreements and the greenhouse gases.' },
    { exam: 'UPSC Mains GS Paper 3', count: 'A regular question', note: 'Usually on equity, finance or India\'s position in the negotiations.' },
  ],

  contents: [
    { icon: 'search', title: 'The science', sub: 'How the greenhouse effect works', href: '#science' },
    { icon: 'bell', title: 'Impacts', sub: 'What is actually changing', href: '#impacts' },
    { icon: 'doc', title: 'The UNFCCC regime', sub: 'Rio, Kyoto and Paris', href: '#regime' },
    { icon: 'globe', title: 'Recent COPs and finance', sub: 'Where the negotiations stand', href: '#cops' },
    { icon: 'target', title: 'India\'s climate policy', sub: 'NDCs, Panchamrit and the missions', href: '#india' },
    { icon: 'refresh', title: 'The energy transition', sub: 'Renewables, hydrogen and carbon markets', href: '#energy' },
    { icon: 'layers', title: 'Disaster management', sub: 'Institutions and frameworks', href: '#disasters' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'science',
      heading: 'The science',
      eyebrow: 'How the greenhouse effect works',
      intro:
        'The greenhouse effect itself is natural and necessary. Without it the earth\'s average surface temperature would be far below freezing. The problem is its enhancement, and every question in this section turns on that distinction.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The mechanism',
              'Solar radiation arrives mostly as short-wave energy, passes through the atmosphere and warms the surface. The surface re-radiates that energy as long-wave infrared. Greenhouse gases are transparent to the incoming short wave but absorb the outgoing long wave, re-emitting part of it back downward. The atmosphere is therefore warmed from below rather than from above.',
            ],
            [
              'Global warming potential',
              'A measure of how much heat a gas traps relative to the same mass of carbon dioxide over a stated period, conventionally a hundred years. Carbon dioxide is the reference at 1. Methane traps far more per molecule but breaks down in about a decade; nitrous oxide and the fluorinated gases persist for very long periods. This difference in lifetime is why methane cuts deliver fast temperature benefits and carbon dioxide cuts deliver lasting ones.',
            ],
            [
              'Radiative forcing',
              'The change in the balance between incoming and outgoing energy at the top of the atmosphere, measured in watts per square metre. A positive forcing warms; a negative forcing, as from sulphate aerosols reflecting sunlight, cools. It is the standard way of comparing the influence of different drivers.',
            ],
            [
              'Feedback loops',
              'A positive feedback amplifies the initial change. Melting ice exposes darker ocean and land, which absorbs more heat and melts more ice — the ice-albedo feedback. Thawing permafrost releases methane, which warms further. Warmer air holds more water vapour, itself a greenhouse gas. A negative feedback damps the change, as increased cloud cover can by reflecting sunlight.',
            ],
            [
              'Tipping points',
              'Thresholds beyond which a change becomes self-sustaining and effectively irreversible on human timescales — collapse of the West Antarctic and Greenland ice sheets, dieback of the Amazon, weakening of the Atlantic overturning circulation, widespread permafrost thaw and large-scale coral reef loss. They are the reason the difference between 1.5 and 2 degrees of warming matters more than the small numerical gap suggests.',
            ],
            [
              'Ocean acidification',
              'A separate consequence of the same emissions. About a quarter of emitted carbon dioxide dissolves in the ocean, forming carbonic acid and lowering pH. This impairs the ability of corals, molluscs and plankton to build calcium carbonate shells and skeletons, and it happens regardless of how much the atmosphere warms.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The seven gases to name',
          text:
            'Carbon dioxide, methane, nitrous oxide, hydrofluorocarbons, perfluorocarbons, sulphur hexafluoride and nitrogen trifluoride. Water vapour is the most abundant greenhouse gas but is not controlled, because its concentration is a consequence of temperature rather than a driver that policy can set. Ozone at ground level is also a greenhouse gas, and is a secondary pollutant rather than a directly emitted one.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'impacts',
      heading: 'Impacts',
      eyebrow: 'What is actually changing',
      intro:
        'Impacts are examined as consequences rather than as figures, which is fortunate, because every figure in this section is revised with each assessment cycle.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Sea level rise',
              'Driven by two mechanisms: thermal expansion, since water expands as it warms, and the addition of water from melting land ice in Greenland, Antarctica and mountain glaciers. Melting sea ice does not raise sea level, because floating ice already displaces its own weight — a favourite exam point. Consequences include coastal inundation, saltwater intrusion into groundwater and the displacement of low-lying island populations.',
            ],
            [
              'Glacier retreat in the Himalaya',
              'Directly relevant to India, since the Indus, Ganga and Brahmaputra all draw on glacial melt. Retreat increases flow in the short term and reduces it later, and it creates glacial lakes dammed by unstable moraine, whose sudden failure causes glacial lake outburst floods.',
            ],
            [
              'Coral bleaching',
              'When sea temperature rises beyond a coral\'s tolerance, it expels the symbiotic zooxanthellae algae that give it colour and most of its food. The coral turns white and, if the stress persists, dies. Indian reefs in the Gulf of Mannar, Gulf of Kachchh, the Andamans and Lakshadweep are all affected.',
            ],
            [
              'Extreme weather',
              'A warmer atmosphere holds more moisture, which intensifies heavy rainfall events; warmer oceans supply more energy to cyclones; and heatwaves become more frequent and more severe. The consistent scientific claim is about the changing frequency and intensity of such events, not about attributing any single one to climate change.',
            ],
            [
              'Agriculture and food security',
              'Higher temperatures shorten the grain-filling period of wheat and rice, reducing yields; erratic monsoon behaviour disrupts sowing; and pest ranges shift. For India, where a large share of cultivation is rain-fed, these effects fall on the least resilient farmers.',
            ],
            [
              'Health and displacement',
              'Heat stress, expansion of the range of vector-borne diseases such as malaria and dengue, and worsened air quality. Climate-driven displacement is increasingly discussed, though there is no settled legal category of climate refugee under international law — which is itself an examinable point.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'regime',
      heading: 'The UNFCCC regime',
      eyebrow: 'Rio, Kyoto and Paris',
      intro:
        'Three layers: a framework convention that sets the objective, a protocol that imposed binding targets on some countries, and an agreement that replaced it with national pledges from all.',
      blocks: [
        {
          type: 'table',
          caption: 'The three instruments',
          head: ['Instrument', 'Adopted and in force', 'What it does'],
          rows: [
            ['UN Framework Convention on Climate Change', 'Adopted 1992 at Rio, in force 1994', 'Sets the objective of stabilising greenhouse gas concentrations at a safe level. It establishes the principle of common but differentiated responsibilities and respective capabilities, and divides parties into Annex I developed countries, Annex II which also fund, and non-Annex I developing countries. It imposes no binding emission limits itself.'],
            ['Kyoto Protocol', 'Adopted 1997, in force 2005', 'Imposed legally binding emission reduction targets on Annex I countries only. First commitment period 2008 to 2012; the Doha Amendment created a second from 2013 to 2020. Its three flexibility mechanisms were the Clean Development Mechanism, Joint Implementation and international emissions trading.'],
            ['Paris Agreement', 'Adopted December 2015 at COP21, in force 4 November 2016', 'Applies to all parties. It aims to hold the rise in global average temperature well below 2 °C above pre-industrial levels and to pursue efforts to limit it to 1.5 °C. Countries submit Nationally Determined Contributions, which are self-set, and a global stocktake every five years assesses collective progress.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Common but differentiated responsibilities',
              'The principle that all countries share responsibility for the climate but not equally, because developed countries contributed most of the historical emissions and have greater capacity to act. It is the foundation of India\'s negotiating position, and the Paris Agreement retains it in the qualified form "in the light of different national circumstances".',
            ],
            [
              'Why Paris differs from Kyoto in kind',
              'Kyoto was top-down: targets were negotiated internationally and imposed on a listed group of countries. Paris is bottom-up: every country sets its own contribution and is bound to submit, maintain and progressively strengthen it, but not to achieve any particular number. Paris covers all parties; Kyoto covered only Annex I. Paris has proved durable partly because it demands less of any individual country.',
            ],
            [
              'The Clean Development Mechanism',
              'Allowed an Annex I country to earn credits by funding an emission-reduction project in a developing country, on the argument that a tonne saved anywhere counts the same. India was among the largest hosts of such projects. Article 6 of the Paris Agreement provides the successor framework for cooperative approaches and international carbon markets.',
            ],
            [
              'The global stocktake',
              'A collective assessment of progress towards the Paris goals, conducted every five years. The first concluded at COP28 in Dubai in 2023 and produced the first explicit call in the process for transitioning away from fossil fuels in energy systems.',
            ],
            [
              'The IPCC',
              'The Intergovernmental Panel on Climate Change, established in 1988 by the World Meteorological Organization and the United Nations Environment Programme. It does not conduct research; it assesses published science and issues periodic Assessment Reports, the sixth of which was completed across 2021 to 2023. It shared the Nobel Peace Prize in 2007 with Al Gore.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'cops',
      heading: 'Recent COPs and finance',
      eyebrow: 'Where the negotiations stand',
      intro:
        'Finance has become the central dispute of the negotiations, and the recent Conferences of the Parties are best remembered by which financial question each settled or postponed.',
      blocks: [
        {
          type: 'table',
          caption: 'The COPs that questions draw on',
          head: ['Conference', 'Where and when', 'What it produced'],
          rows: [
            ['COP21', 'Paris, 2015', 'The Paris Agreement itself.'],
            ['COP26', 'Glasgow, 2021', 'The Glasgow Climate Pact, with the first reference to phasing down unabated coal. India announced its Panchamrit commitments here, including net zero by 2070.'],
            ['COP27', 'Sharm el-Sheikh, 2022', 'Agreement in principle to create a fund for loss and damage — the harm that adaptation cannot prevent.'],
            ['COP28', 'Dubai, 2023', 'Operationalisation of the loss and damage fund, and conclusion of the first global stocktake, which called for transitioning away from fossil fuels in energy systems.'],
            ['COP29', 'Baku, 2024', 'The New Collective Quantified Goal on climate finance, replacing the earlier hundred-billion-dollar target.'],
            ['COP30', 'Belém, 2025', 'Agreement to mobilise 1.3 trillion dollars a year by 2035, to double adaptation finance by 2025 and triple it by 2035, replenishment cycles for the loss and damage fund, and the launch of a Global Implementation Accelerator, a Belém Mission to 1.5 °C and a new Just Transition Mechanism.'],
            ['COP31', 'Antalya, November 2026', 'Scheduled for 9 to 20 November 2026, with an unprecedented split presidency: Türkiye hosting and holding the presidency, and Australia presiding over the negotiations.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Mitigation, adaptation and loss and damage',
              'Mitigation reduces emissions. Adaptation adjusts to the changes that will happen anyway — sea walls, drought-resistant crops, early warning systems. Loss and damage is the harm that neither prevents, and it became a distinct third pillar because developing countries argued that adaptation finance alone does not answer for irreversible losses.',
            ],
            [
              'The climate funds',
              'The Global Environment Facility, established in 1991, is the oldest and serves several conventions. The Green Climate Fund, agreed at Cancun in 2010, is the principal Paris-era vehicle. The Adaptation Fund was created under the Kyoto Protocol. The Loss and Damage Fund, agreed at COP27 and operationalised at COP28, is the newest.',
            ],
            [
              'The finance history',
              'Developed countries pledged at Copenhagen in 2009 to mobilise a hundred billion dollars a year by 2020, a target that was missed and then extended. COP29 at Baku replaced it with the New Collective Quantified Goal, and COP30 at Belém set the wider mobilisation figure of 1.3 trillion dollars a year by 2035. Whether such finance is grant or loan, and whether it is genuinely additional to existing aid, remains the substance of the dispute.',
            ],
            [
              'Carbon border measures',
              'The European Union\'s Carbon Border Adjustment Mechanism charges imports of certain carbon-intensive goods according to their embedded emissions, to prevent production shifting to jurisdictions with weaker carbon pricing. Developing countries including India have objected that it is a unilateral trade barrier inconsistent with differentiated responsibility. It is one of the most likely subjects for a mains question.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'india',
      heading: 'India\'s climate policy',
      eyebrow: 'NDCs, Panchamrit and the missions',
      intro:
        'India\'s position rests on a simple argument: low historical and per capita emissions, high absolute current emissions, and a right to develop. Its commitments are structured accordingly — intensity targets rather than absolute caps.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Panchamrit commitments',
              'Announced by India at COP26 in Glasgow in 2021, five commitments: reaching 500 gigawatts of non-fossil energy capacity by 2030; meeting fifty per cent of energy requirements from renewable energy by 2030; reducing projected total carbon emissions by one billion tonnes by 2030; reducing the carbon intensity of the economy by forty-five per cent by 2030 against 2005 levels; and achieving net zero by 2070.',
            ],
            [
              'The updated NDC',
              'Submitted in August 2022, it formalised two of those: reducing the emissions intensity of GDP by forty-five per cent by 2030 from 2005 levels, and achieving about fifty per cent cumulative electric power installed capacity from non-fossil-fuel-based energy resources by 2030. Note that it is an intensity target, not an absolute emissions cap — emissions may still rise while intensity falls.',
            ],
            [
              'The milestone already passed',
              'India announced in July 2025 that non-fossil sources had reached fifty per cent of installed electricity generation capacity, five years ahead of the 2030 NDC target. Total installed capacity was then about 485 gigawatts, of which slightly more than half came from renewables, large hydro and nuclear together. Material still describing this as a target for 2030 is out of date; the remaining challenge is generation share and storage, not installed capacity.',
            ],
            [
              'The National Action Plan on Climate Change',
              'Launched in 2008, with eight national missions: the National Solar Mission; the National Mission for Enhanced Energy Efficiency; the National Mission on Sustainable Habitat; the National Water Mission; the National Mission for Sustaining the Himalayan Ecosystem; the National Mission for a Green India; the National Mission for Sustainable Agriculture; and the National Mission on Strategic Knowledge for Climate Change. Each state also prepares a State Action Plan on Climate Change.',
            ],
            [
              'International initiatives India leads',
              'The International Solar Alliance, launched with France in 2015 and headquartered at Gurugram, the first international organisation headquartered in India. The Coalition for Disaster Resilient Infrastructure, launched in 2019. The Leadership Group for Industry Transition, with Sweden. Mission LiFE — Lifestyle for Environment — launched in 2022, focusing on individual and community behaviour. India also promoted the Global Biofuel Alliance during its G20 presidency.',
            ],
            [
              'Carbon markets in India',
              'The Energy Conservation (Amendment) Act of 2022 provided for a domestic carbon credit trading scheme, building on the earlier Perform, Achieve and Trade mechanism for industrial energy efficiency and the renewable energy certificate system. It moves India from voluntary offsets towards a compliance market.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'energy',
      heading: 'The energy transition',
      eyebrow: 'Renewables, hydrogen and carbon markets',
      intro:
        'Electricity generation is the largest single source of emissions, so the transition is largely a story about how power is produced — and about the two harder problems of storage and of the sectors that cannot easily be electrified.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Renewable sources',
              'Solar photovoltaic and concentrated solar thermal; onshore and offshore wind; large and small hydro; biomass and biogas; and geothermal and tidal, both negligible in India so far. Nuclear power is not renewable but is non-fossil and low-carbon, which is why India\'s target is framed in terms of non-fossil rather than renewable capacity — a distinction that is directly examined.',
            ],
            [
              'Capacity versus generation',
              'Installed capacity is what could be produced if plants ran at full output; generation is what is actually produced. Because solar and wind have much lower capacity factors than coal or nuclear, a fifty per cent share of capacity translates into a considerably smaller share of electricity actually generated. Questions exploit the difference, and so does careless reporting.',
            ],
            [
              'The storage problem',
              'Solar generates by day and wind intermittently, while demand peaks in the evening. Closing that gap requires battery storage, pumped hydro, demand-side management and grid flexibility. This, rather than the cost of panels, is now the binding constraint on how far renewable generation can go.',
            ],
            [
              'Green hydrogen',
              'Hydrogen produced by electrolysing water using renewable electricity, as against grey hydrogen from natural gas and blue hydrogen from gas with carbon capture. It matters because it offers a route to decarbonise steel, fertiliser, refining and long-distance transport, which cannot easily be electrified. India\'s National Green Hydrogen Mission was approved in 2023.',
            ],
            [
              'Carbon capture, utilisation and storage',
              'Capturing carbon dioxide at the point of emission and either using it industrially or storing it underground. It is regarded as necessary for hard-to-abate sectors and criticised as a licence to continue burning fossil fuels — the word "unabated" in COP texts turns precisely on this argument.',
            ],
            [
              'Energy efficiency',
              'Often the cheapest mitigation available. In India this runs through the Bureau of Energy Efficiency, the star labelling of appliances, the Energy Conservation Building Code, the UJALA programme for LED lighting, and the Perform, Achieve and Trade scheme for energy-intensive industry.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'disasters',
      heading: 'Disaster management',
      eyebrow: 'Institutions and frameworks',
      intro:
        'Included here because climate change is increasing the frequency of hydro-meteorological disasters, and because the two subjects are examined together in the same general studies paper.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Hazard, vulnerability, risk',
              'A hazard is the potentially damaging event. Vulnerability is the susceptibility of the exposed population and assets. Risk is a function of hazard, exposure and vulnerability together. A cyclone striking an uninhabited coast is a hazard without a disaster; the same cyclone striking a dense unprotected settlement is a disaster. Policy works mainly on vulnerability, because hazards cannot be prevented.',
            ],
            [
              'Types of disaster',
              'Natural disasters divide into geophysical — earthquakes, tsunamis, volcanic eruptions and landslides; hydrological — floods and avalanches; meteorological — cyclones and storms; climatological — droughts, heatwaves and wildfires; and biological — epidemics and pest infestations. Man-made disasters include industrial accidents, nuclear incidents and stampedes.',
            ],
            [
              'The Indian institutional structure',
              'The Disaster Management Act, 2005, created a three-tier structure: the National Disaster Management Authority chaired by the Prime Minister, State Disaster Management Authorities chaired by Chief Ministers, and District Disaster Management Authorities. The National Institute of Disaster Management handles training and research, and the National Disaster Response Force is the specialised response force. Funding runs through the National and State Disaster Response Funds and the corresponding Mitigation Funds.',
            ],
            [
              'The Sendai Framework',
              'The Sendai Framework for Disaster Risk Reduction, 2015 to 2030, adopted in Japan, succeeded the Hyogo Framework. It has four priorities — understanding disaster risk, strengthening governance to manage it, investing in resilience, and enhancing preparedness for effective response and to build back better — together with seven global targets. It is a voluntary, non-binding agreement.',
            ],
            [
              'India\'s hazard profile',
              'A very large share of the land area is earthquake-prone, mapped in four seismic zones from II to V, with zone V the most severe and covering the north-east, parts of Jammu and Kashmir and the Kachchh region. The east coast is exposed to cyclones more than the west, the Ganga and Brahmaputra basins to floods, and much of peninsular India to drought. Improved cyclone early warning has cut mortality dramatically even as economic losses have risen.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Melting Arctic sea ice does not raise global sea level. Why not?',
      steps: [
        'Sea ice floats, and a floating body displaces a volume of water equal to its own weight.',
        'When it melts, the meltwater occupies exactly the volume it was already displacing.',
        'Land ice is different: ice on Greenland, Antarctica and mountain glaciers is not currently in the ocean, so its melting adds water and does raise sea level, as does thermal expansion of warming water.',
      ],
      answer: 'Because floating ice already displaces its own weight; only land ice and thermal expansion raise sea level.',
    },
    {
      q: 'How does the Paris Agreement differ in kind from the Kyoto Protocol?',
      steps: [
        'Kyoto imposed legally binding targets, negotiated internationally, on Annex I developed countries alone — a top-down design.',
        'Paris applies to all parties, and each sets its own Nationally Determined Contribution — a bottom-up design.',
        'Under Paris the obligation is procedural: to submit, maintain and progressively strengthen a contribution, not to achieve any specific number.',
      ],
      answer: 'Kyoto was top-down and applied to some countries; Paris is bottom-up and applies to all.',
    },
    {
      q: 'India\'s NDC promises a 45 per cent reduction in emissions intensity by 2030. Can its emissions still rise?',
      steps: [
        'Emissions intensity is emissions per unit of GDP, not total emissions.',
        'If GDP grows faster than emissions, intensity falls even while absolute emissions increase.',
        'The target is therefore compatible with rising emissions, which is the point of framing it that way for a developing economy.',
      ],
      answer: 'Yes — it is an intensity target, not an absolute cap.',
    },
    {
      q: 'India\'s target was 50 per cent non-fossil installed capacity by 2030. Where does that stand?',
      steps: [
        'The commitment was announced at COP26 in 2021 and formalised in the updated NDC of August 2022.',
        'In July 2025 India announced that non-fossil sources had reached fifty per cent of installed capacity — five years early, at a total installed capacity of about 485 gigawatts.',
        'The remaining challenge is generation rather than capacity, because solar and wind have lower capacity factors, so their share of electricity actually produced is smaller.',
      ],
      answer: 'Achieved in July 2025, five years ahead of schedule.',
    },
    {
      q: 'What is loss and damage, and why is it a separate pillar?',
      steps: [
        'Mitigation reduces emissions and adaptation adjusts to changes that will occur anyway.',
        'Some harm — land lost to sea level rise, destroyed cultural heritage, a state made uninhabitable — cannot be adapted to at all.',
        'Developing countries argued that adaptation finance does not answer for such irreversible losses, so a distinct fund was agreed at COP27 and operationalised at COP28.',
      ],
      answer: 'It is harm that neither mitigation nor adaptation prevents, and it now has its own fund.',
    },
    {
      q: 'Why does methane matter differently from carbon dioxide?',
      steps: [
        'Methane has a far higher global warming potential per unit mass than carbon dioxide over a hundred years.',
        'But it breaks down in the atmosphere in roughly a decade, whereas carbon dioxide persists for centuries.',
        'So cutting methane produces rapid temperature benefit, while cutting carbon dioxide is what determines the long-run outcome — which is why policy treats them differently rather than simply adding them together.',
      ],
      answer: 'Methane traps more heat but is short-lived; carbon dioxide traps less but lasts far longer.',
    },
    {
      q: 'Where was COP30 held, and what was agreed?',
      steps: [
        'The thirtieth Conference of the Parties was held at Belém in Brazil in November 2025, concluding after overtime negotiations.',
        'It agreed to mobilise 1.3 trillion dollars a year by 2035, to double adaptation finance by 2025 and triple it by 2035, and to set replenishment cycles for the loss and damage fund.',
        'It also launched a Global Implementation Accelerator, a Belém Mission to 1.5 °C, and a Just Transition Mechanism.',
      ],
      answer: 'Belém, Brazil, November 2025 — chiefly a finance and implementation outcome.',
    },
    {
      q: 'Why is India\'s target framed as "non-fossil" rather than "renewable"?',
      steps: [
        'Renewable sources are those naturally replenished — solar, wind, hydro, biomass, geothermal, tidal.',
        'Nuclear power is not renewable, because uranium is a finite resource, but it emits almost no carbon dioxide in operation.',
        'Framing the target as non-fossil allows nuclear and large hydro to count towards it, which is why the categories must be kept distinct in an answer.',
      ],
      answer: 'Because "non-fossil" includes nuclear and large hydro, which "renewable" may not.',
    },
  ],

  practice: [
    {
      q: 'The Paris Agreement came into force on:',
      options: ['12 December 2015', '16 February 2005', '1 January 2020', '4 November 2016'],
      answer: 3,
      explain: 'It was adopted at COP21 in December 2015 and entered into force less than a year later. February 2005 is the Kyoto Protocol.',
    },
    {
      q: 'The IPCC was established in 1988 by:',
      options: ['UNEP and WMO', 'UNESCO and IUCN', 'UNFCCC and UNDP', 'WHO and FAO'],
      answer: 0,
      explain: 'It assesses published science rather than conducting research, and shared the 2007 Nobel Peace Prize with Al Gore.',
    },
    {
      q: 'The Kyoto Protocol imposed binding targets on:',
      options: ['All parties', 'No country', 'Non-Annex I countries only', 'Annex I countries only'],
      answer: 3,
      explain: 'That is the fundamental difference from the Paris Agreement, which applies to all parties through self-set contributions.',
    },
    {
      q: 'India announced its Panchamrit commitments at:',
      options: ['COP21 Paris', 'COP26 Glasgow', 'COP27 Sharm el-Sheikh', 'COP28 Dubai'],
      answer: 1,
      explain: 'At Glasgow in 2021, including the commitment to reach net zero by 2070.',
    },
    {
      q: 'India\'s net zero target year is:',
      options: ['2050', '2060', '2070', '2075'],
      answer: 2,
      explain: 'Announced at COP26. China\'s stated target is 2060 and many developed countries have set 2050.',
    },
    {
      q: 'The International Solar Alliance is headquartered at:',
      options: ['New Delhi', 'Abu Dhabi', 'Paris', 'Gurugram'],
      answer: 3,
      explain: 'It is the first international organisation headquartered in India, launched with France in 2015.',
    },
    {
      q: 'The National Action Plan on Climate Change contains how many national missions?',
      options: ['Five', 'Six', 'Eight', 'Ten'],
      answer: 2,
      explain: 'Launched in 2008, covering solar, energy efficiency, sustainable habitat, water, the Himalayan ecosystem, green India, sustainable agriculture and strategic knowledge.',
    },
    {
      q: 'COP30 was held in:',
      options: ['Dubai', 'Baku', 'Belém', 'Antalya'],
      answer: 2,
      explain: 'Belém, Brazil, in November 2025. Dubai hosted COP28, Baku COP29 and Antalya is to host COP31 in November 2026.',
    },
    {
      q: 'The loss and damage fund was agreed in principle at:',
      options: ['COP26', 'COP27', 'COP28', 'COP29'],
      answer: 1,
      explain: 'Agreed at Sharm el-Sheikh in 2022 and operationalised at Dubai in 2023.',
    },
    {
      q: 'Which of these is NOT a renewable source of energy?',
      options: ['Nuclear', 'Solar', 'Wind', 'Biomass'],
      answer: 0,
      explain: 'Nuclear is non-fossil and low-carbon but not renewable, which is why India\'s NDC target is framed as non-fossil capacity.',
    },
    {
      q: 'The Sendai Framework for Disaster Risk Reduction runs from:',
      options: ['2005 to 2015', '2015 to 2030', '2020 to 2030', '2010 to 2020'],
      answer: 1,
      explain: 'It succeeded the Hyogo Framework and has four priorities and seven global targets.',
    },
    {
      q: 'The National Disaster Management Authority is chaired by the:',
      options: ['Home Minister', 'Prime Minister', 'Cabinet Secretary', 'President'],
      answer: 1,
      explain: 'Under the Disaster Management Act, 2005; State Authorities are chaired by Chief Ministers.',
    },
    {
      q: 'Green hydrogen is produced by:',
      options: ['Reforming natural gas', 'Electrolysing water using renewable electricity', 'Gasifying coal', 'Capturing carbon from flue gas'],
      answer: 1,
      explain: 'Grey hydrogen comes from natural gas and blue hydrogen from gas with carbon capture.',
    },
    {
      q: 'The Carbon Border Adjustment Mechanism has been introduced by:',
      options: ['The United States', 'The European Union', 'Japan', 'The WTO'],
      answer: 1,
      explain: 'It charges imports of certain carbon-intensive goods by their embedded emissions; India has objected to it as a unilateral trade barrier.',
    },
    {
      q: 'The principle of common but differentiated responsibilities originates in the:',
      options: ['Kyoto Protocol', 'Paris Agreement', 'UNFCCC', 'Montreal Protocol'],
      answer: 2,
      explain: 'It was set out in the framework convention of 1992 and is retained in the Paris Agreement in qualified form.',
    },
    {
      q: 'Coral bleaching occurs when corals:',
      options: ['Expel their symbiotic algae', 'Absorb excess calcium', 'Are covered by sediment', 'Are overgrown by seaweed'],
      answer: 0,
      explain: 'Heat stress causes them to expel the zooxanthellae that supply most of their food and all of their colour.',
    },
  ],

  faqs: [
    {
      q: 'Is the greenhouse effect a bad thing?',
      a: 'No — it is essential. Without it the earth\'s average surface temperature would be far below freezing and liquid water would be scarce. The problem is its enhancement by additional greenhouse gases from human activity, which raises the equilibrium temperature. Questions frequently set the natural effect against the enhanced one, so the distinction is worth stating explicitly.',
    },
    {
      q: 'What is the difference between the Paris Agreement and the Kyoto Protocol?',
      a: 'Kyoto was top-down and partial: internationally negotiated binding targets imposed on Annex I developed countries alone. Paris is bottom-up and universal: every country submits its own Nationally Determined Contribution, and the binding obligation is procedural — to submit, maintain and progressively strengthen it — rather than to reach a specified number. Paris survives because it demands less of any one country.',
    },
    {
      q: 'Has India met its 50 per cent non-fossil capacity target?',
      a: 'Yes, and early. India announced in July 2025 that non-fossil sources — renewables, large hydro and nuclear together — had crossed fifty per cent of installed electricity capacity, five years ahead of the 2030 NDC target, at a total capacity of roughly 485 gigawatts. Note that this is installed capacity, not generation: because solar and wind run at lower capacity factors, their share of electricity actually produced is smaller.',
    },
    {
      q: 'Why is India\'s target an intensity target rather than an absolute cut?',
      a: 'Because India argues that a developing economy with low per capita and low historical emissions cannot cap absolute emissions while extending energy access and industrialising. An intensity target — emissions per unit of GDP — commits the country to decarbonising growth rather than to stopping it, and it is consistent with the principle of common but differentiated responsibilities.',
    },
    {
      q: 'What are Nationally Determined Contributions?',
      a: 'Each country\'s self-set climate plan under the Paris Agreement, stating what it will do on mitigation and, optionally, adaptation. They are submitted every five years and are expected to represent a progression on the previous one — the ratchet mechanism. The plans themselves are not internationally binding in content, only in the obligation to submit and to report progress transparently.',
    },
    {
      q: 'What is the difference between capacity and generation?',
      a: 'Installed capacity is the maximum a set of plants could produce if they ran continuously at full output. Generation is what they actually produce. Solar produces only by day, wind only when the wind blows, so their capacity factors are much lower than those of coal or nuclear. A country can therefore have half its capacity in renewables and considerably less than half its electricity from them.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'The most recent COP and its outcomes; climate finance figures; India\'s installed capacity and generation shares; the status of any particular fund; and the current Assessment Report of the IPCC. What does not change is the treaty architecture, the principles, the eight NAPCC missions, the Panchamrit commitments as announced, and the science.',
    },
    {
      q: 'What is the Montreal Protocol and why is it considered a success?',
      a: 'The 1987 agreement to phase out ozone-depleting substances, under the Vienna Convention of 1985. It is regarded as the most successful environmental treaty because it achieved universal ratification, the substances were substantially phased out, and the ozone layer is measurably recovering. Its Kigali Amendment of 2016 extends it to hydrofluorocarbons, which do not deplete ozone but are potent greenhouse gases.',
    },
    {
      q: 'How should I prepare a topic that changes this fast?',
      a: 'Split it. Learn the treaty structure, principles, institutions and Indian missions from material like this, because they are stable and account for most of the marks. Track only the moving edge from current affairs — the latest COP, new funds, new targets — and note the date beside anything you record, so that you can tell later whether it has been superseded.',
    },
    {
      q: 'How many questions come from climate change?',
      a: 'Four to seven in UPSC Prelims when climate, energy and disaster management are counted together; two to four in banking and insurance general awareness, almost entirely from the current cycle; two to four in state PSC prelims; and one to two in SSC CGL Tier 1. It is also among the most reliably recurring mains topics in GS Paper 3.',
    },
  ],

  related: [
    { label: 'Ecology & Ecosystems', to: '/study-material/environment/ecology-and-ecosystems/' },
    { label: 'Biodiversity & Conservation', to: '/study-material/environment/biodiversity/' },
    { label: 'Physical Geography', to: '/study-material/geography/physical-geography/' },
    { label: 'Science & Technology', to: '/study-material/science/' },
    { label: 'All Environment', to: '/study-material/environment/' },
  ],
}
