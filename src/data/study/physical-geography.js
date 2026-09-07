/**
 * Physical Geography — /study-material/geography/physical-geography/
 *
 * The explanatory half of the subject: everything here is a cause that the
 * Indian and world geography pages then treat as an effect. Organised by
 * sphere — lithosphere, atmosphere, hydrosphere, biosphere — because that is
 * how questions are grouped, and because each sphere has its own vocabulary
 * that has to be learnt before the regional material makes sense.
 */
export default {
  subject: 'geography',
  subjectName: 'Geography',
  slug: 'physical-geography',
  title: 'Physical Geography',
  seoTitle: 'Physical Geography for Competitive Exams | Notes, Diagrams & Practice',
  metaDescription:
    'Complete physical geography study material for UPSC, SSC, state PSC and railway exams — the earth in space, interior and plate tectonics, landforms.',
  readMinutes: 26,
  lead: [
    'Physical geography is the part of the subject that explains rather than lists. Once you know why pressure belts sit where they do, the monsoon stops being a thing to memorise and becomes a consequence; once you know how plates move, the position of the Himalaya, the Andes and the Pacific Ring of Fire all follow from one idea.',
    'That makes it the most efficient block in the general studies syllabus, because a page of causes replaces several pages of lists. This material is organised by sphere — the solid earth, the atmosphere, the oceans, and the thin living layer between them — and every section ends with the pairings that questions actually use.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '4–7 questions', note: 'Increasingly conceptual — why a phenomenon happens, not where it is.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–4 questions', note: 'Direct recall: layers of the atmosphere, local winds, types of rainfall.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'Physical geography plus its application to the state\'s own relief and climate.' },
    { exam: 'RRB NTPC / Group D', count: '2–3 questions', note: 'Straightforward factual questions on the solar system, latitudes and seasons.' },
    { exam: 'NDA / CDS General Ability', count: '4–6 questions', note: 'A substantial geography block, weighted towards physical rather than regional.' },
  ],

  contents: [
    { icon: 'globe', title: 'The earth in space', sub: 'Motions, grids and seasons', href: '#earth' },
    { icon: 'layers', title: 'Interior and plate tectonics', sub: 'Why continents move', href: '#interior' },
    { icon: 'target', title: 'Landforms', sub: 'The agents that shape relief', href: '#landforms' },
    { icon: 'refresh', title: 'The atmosphere', sub: 'Layers, pressure and winds', href: '#atmosphere' },
    { icon: 'bell', title: 'Weather and climate', sub: 'Rainfall, cyclones and classification', href: '#climate' },
    { icon: 'chart', title: 'Oceans', sub: 'Relief, currents, tides and salinity', href: '#oceans' },
    { icon: 'book', title: 'Soils and biomes', sub: 'The living layer', href: '#biosphere' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'earth',
      heading: 'The earth in space',
      eyebrow: 'Motions, grids and seasons',
      intro:
        'This section supplies the coordinate vocabulary that the rest of geography uses. Almost every question here is a consequence of two facts: the earth spins on a tilted axis, and it goes round the sun.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Shape',
              'An oblate spheroid — flattened at the poles and bulging at the equator, because rotation throws mass outwards. The equatorial diameter exceeds the polar by roughly 43 km. The more precise modern term is geoid, meaning "earth-shaped", since the planet is not a perfect mathematical solid.',
            ],
            [
              'Rotation',
              'One spin on its own axis, west to east, in about 23 hours 56 minutes. It causes day and night, the apparent rising of the sun in the east, the deflection of moving air and water known as the Coriolis effect, and the twice-daily rhythm of the tides.',
            ],
            [
              'Revolution',
              'One orbit of the sun in about 365 days 6 hours — the six hours being why a leap day is added every fourth year. Combined with the axial tilt of 23½°, revolution causes the seasons. Without the tilt there would be no seasons at all, only a fixed climate at each latitude.',
            ],
            [
              'Perihelion and aphelion',
              'The earth is nearest the sun in early January (perihelion, about 147 million km) and farthest in early July (aphelion, about 152 million km). This is a favourite trap: distance does not cause the seasons, tilt does — which is why January is winter in the north and summer in the south.',
            ],
            [
              'Latitude',
              'Angular distance north or south of the equator, measured in degrees from 0° at the equator to 90° at the poles. Lines of latitude are parallels — they never meet, and each degree is roughly 111 km everywhere.',
            ],
            [
              'Longitude',
              'Angular distance east or west of the Prime Meridian at Greenwich, from 0° to 180°. Lines of longitude are meridians — they converge at the poles, so the ground distance for one degree shrinks from about 111 km at the equator to zero at the pole.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Longitude and time',
          items: [
            { expr: '360° of longitude = 24 hours', note: 'The earth turns through the full circle in a day.' },
            { expr: '15° of longitude = 1 hour', note: 'Divide 360 by 24. This is the single most used conversion in the topic.' },
            { expr: '1° of longitude = 4 minutes', note: 'Divide 60 minutes by 15. East is ahead, west is behind.' },
            { expr: 'IST = 82°30′ E = GMT + 5:30', note: 'India keeps one standard time, based on a meridian passing near Mirzapur in Uttar Pradesh.' },
          ],
        },
        {
          type: 'table',
          caption: 'The four days the exam asks about',
          head: ['Event', 'Date (approximate)', 'What happens'],
          rows: [
            ['Summer solstice', '21 June', 'Sun overhead at the Tropic of Cancer. Longest day in the northern hemisphere, shortest in the southern.'],
            ['Winter solstice', '22 December', 'Sun overhead at the Tropic of Capricorn. Shortest northern day; the Antarctic has continuous daylight.'],
            ['Vernal equinox', '21 March', 'Sun overhead at the equator; day and night equal everywhere on earth.'],
            ['Autumnal equinox', '23 September', 'Sun overhead at the equator again, moving south this time.'],
          ],
        },
        {
          type: 'note',
          title: 'The International Date Line',
          text:
            'It follows the 180° meridian but deviates around Siberia, the Aleutians, Kiribati and Fiji so that no inhabited group is split across two dates. Crossing it westward you gain a day; crossing eastward you lose one. The deviations are the point of the question — the line is not straight, and it is drawn by agreement rather than by nature.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'interior',
      heading: 'Interior of the earth and plate tectonics',
      eyebrow: 'Why continents move',
      intro:
        'We have never drilled past the crust, so almost everything known about the interior comes from how earthquake waves behave as they pass through it. That indirect method is itself examined.',
      blocks: [
        {
          type: 'table',
          caption: 'Layers and the boundaries between them',
          head: ['Layer', 'Extent and composition', 'Boundary below it'],
          rows: [
            ['Crust', 'Continental crust averages about 30 km and is granitic (SIAL); oceanic crust is 5–10 km and basaltic (SIMA). The thinnest and lightest layer.', 'Mohorovicic discontinuity — the "Moho", separating crust from mantle.'],
            ['Mantle', 'About 2,900 km thick, silicate rock rich in iron and magnesium. Contains the asthenosphere, a partially molten zone on which the plates ride.', 'Gutenberg discontinuity — separating mantle from core.'],
            ['Outer core', 'Liquid iron and nickel. Its circulation generates the earth\'s magnetic field, which is why the compass works.', 'Lehmann discontinuity — separating outer from inner core.'],
            ['Inner core', 'Solid iron and nickel despite temperatures near 5,000 °C, because the pressure is immense. The densest part of the planet.', 'None — this is the centre.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'How we know',
              'Primary (P) waves are longitudinal and travel through solids and liquids; secondary (S) waves are transverse and cannot travel through liquids at all. S waves therefore vanish beyond about 103° from an earthquake, creating a shadow zone — and that absence is the evidence that the outer core is liquid.',
            ],
            [
              'Lithosphere and asthenosphere',
              'The lithosphere is the rigid crust plus the uppermost mantle, broken into plates. The asthenosphere beneath it is weak and plastic, and convection currents in it drive plate motion. The distinction is mechanical, not chemical.',
            ],
            [
              'Continental drift',
              'Proposed by Alfred Wegener in 1912: a single landmass, Pangaea, surrounded by the ocean Panthalassa, split into Laurasia in the north and Gondwanaland in the south, separated by the Tethys Sea. His evidence — matching coastlines, fossils and rock sequences — was good; his proposed mechanism was not, and that is why the theory was resisted.',
            ],
            [
              'Plate tectonics',
              'The accepted successor, developed in the 1960s from sea-floor spreading. The lithosphere is divided into major plates — Pacific, North American, South American, Eurasian, African, Indo-Australian and Antarctic — plus many minor ones, all moving a few centimetres a year.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Plate boundaries and what they produce',
          head: ['Boundary type', 'Motion of the plates', 'Landforms and hazards'],
          rows: [
            ['Divergent (constructive)', 'Plates move apart; new crust forms', 'Mid-ocean ridges such as the Mid-Atlantic Ridge; rift valleys such as the East African Rift; Iceland sits on one.'],
            ['Convergent (destructive)', 'Plates move together; crust is destroyed', 'Ocean–ocean gives island arcs and deep trenches; ocean–continent gives the Andes; continent–continent gives fold mountains such as the Himalaya.'],
            ['Transform (conservative)', 'Plates slide past one another', 'No crust made or destroyed, but severe earthquakes — the San Andreas Fault in California is the standard example.'],
          ],
        },
        {
          type: 'note',
          title: 'Earthquakes, volcanoes and the Ring of Fire',
          text:
            'The focus is the point underground where rupture begins; the epicentre is the point on the surface directly above it. Magnitude is measured on the Richter scale, which is logarithmic — each whole number is about 32 times more energy — while the Mercalli scale records observed intensity of damage. Roughly two-thirds of the world\'s earthquakes and most of its active volcanoes lie in the Circum-Pacific belt, the Pacific Ring of Fire, precisely because it is ringed by convergent boundaries.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'landforms',
      heading: 'Landforms',
      eyebrow: 'The agents that shape relief',
      intro:
        'Relief is the outcome of a contest between forces from inside the earth that build up and forces at the surface that wear down. Questions here are nearly always the pairing of a landform with the agent that created it.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Endogenic forces',
              'Forces originating inside the earth. Diastrophism folds and faults rock — folding produces mountains such as the Himalaya and the Alps, faulting produces block mountains such as the Vosges and rift valleys such as the Narmada valley. Vulcanism brings magma to or towards the surface.',
            ],
            [
              'Exogenic forces',
              'Forces acting at the surface — running water, glaciers, wind, waves and groundwater. They weather rock, erode it, transport the debris and deposit it. Every exogenic agent makes erosional landforms upstream and depositional landforms downstream.',
            ],
            [
              'Weathering versus erosion',
              'Weathering breaks rock in place, physically or chemically, with no transport. Erosion involves removal and carriage. Mass wasting — landslides, soil creep — is movement downslope under gravity, and sits between the two.',
            ],
            [
              'The three rock types',
              'Igneous rock forms from cooled magma, either intrusive like granite or extrusive like basalt. Sedimentary rock forms from compacted deposits and is the only type that holds fossils — sandstone, limestone, shale. Metamorphic rock forms when heat and pressure alter an existing rock: limestone becomes marble, shale becomes slate, granite becomes gneiss, sandstone becomes quartzite and coal becomes graphite.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Agent, erosional landform, depositional landform',
          head: ['Agent', 'Made by erosion', 'Made by deposition'],
          rows: [
            ['Running water', 'V-shaped valley, gorge, canyon, waterfall, meander scar, pothole', 'Alluvial fan, floodplain, natural levee, delta, oxbow lake'],
            ['Glacier', 'U-shaped valley, cirque, arête, horn, hanging valley, fjord', 'Moraine, drumlin, esker, outwash plain'],
            ['Wind', 'Mushroom rock, yardang, zeugen, deflation hollow', 'Sand dune, barchan, seif, loess'],
            ['Sea waves', 'Sea cliff, sea cave, sea arch, stack, wave-cut platform', 'Beach, spit, bar, tombolo, lagoon'],
            ['Groundwater', 'Sinkhole, doline, cavern, limestone pavement', 'Stalactite, stalagmite, pillar'],
          ],
        },
        {
          type: 'note',
          title: 'Karst topography',
          text:
            'The distinctive landscape formed where limestone is dissolved by slightly acidic rainwater — sinkholes, disappearing streams, underground caverns and dripstone formations. It is named after the Kras region in Slovenia. In India the Borra caves in Andhra Pradesh and the caves of Meghalaya are the usual examples. Remember the pair by position: stalactites hang from the ceiling, stalagmites grow from the ground.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'atmosphere',
      heading: 'The atmosphere',
      eyebrow: 'Layers, pressure and winds',
      intro:
        'Two ideas carry this whole section: air moves from high pressure to low pressure, and the Coriolis effect deflects it right in the northern hemisphere and left in the southern. Every wind system below follows from those two.',
      blocks: [
        {
          type: 'table',
          caption: 'Layers of the atmosphere from the ground up',
          head: ['Layer', 'Approximate height', 'Why it is asked about'],
          rows: [
            ['Troposphere', '0–18 km at the equator, 0–8 km at the poles', 'All weather happens here; temperature falls with height at about 6.5 °C per km. Thicker at the equator because heated air expands upward.'],
            ['Stratosphere', 'Up to about 50 km', 'Contains the ozone layer, which absorbs ultraviolet radiation and so makes temperature rise with height. Stable air is why jet aircraft cruise in its lower part.'],
            ['Mesosphere', 'Up to about 80 km', 'The coldest layer, reaching about −100 °C at its top. Meteors burn up here.'],
            ['Thermosphere', 'Up to about 400 km', 'Contains the ionosphere, which reflects radio waves back to earth and so makes long-distance radio possible. Temperature rises steeply.'],
            ['Exosphere', 'Beyond about 400 km', 'The outermost layer, merging into space. Satellites orbit here.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Composition',
              'By volume, dry air is about 78% nitrogen and 21% oxygen, with argon, carbon dioxide and traces making up the rest. Water vapour varies from almost nothing to about 4% and is the component that produces weather.',
            ],
            [
              'Pressure belts',
              'Four belts either side of the equator: the equatorial low (the doldrums, thermally caused by heating), the subtropical high at about 30° (dynamically caused by descending air, and the reason most hot deserts sit there), the subpolar low at about 60°, and the polar high. The belts shift a few degrees north in July and south in January, following the overhead sun.',
            ],
            [
              'Permanent winds',
              'Trade winds blow from the subtropical high to the equatorial low — north-easterly in the northern hemisphere, south-easterly in the southern. Westerlies blow from the subtropical high towards the subpolar low, and are strongest over the unobstructed Southern Ocean, where sailors named the latitudes the Roaring Forties, Furious Fifties and Shrieking Sixties. Polar easterlies blow from the polar high.',
            ],
            [
              'Periodic and local winds',
              'Monsoons and land and sea breezes reverse with a regular rhythm. Local winds are named and often asked directly: Loo (hot, north India), Chinook (warm, Rockies, "snow-eater"), Foehn (warm, Alps), Mistral (cold, France), Bora (cold, Adriatic), Sirocco (hot and dusty, Sahara to Mediterranean), Harmattan (dry, West Africa, the "doctor").',
            ],
            [
              'Jet streams',
              'Narrow bands of very fast wind in the upper troposphere, blowing west to east. The subtropical westerly jet and the polar front jet matter for Indian weather: the withdrawal of the subtropical jet from the south of the Himalaya is linked to the onset of the south-west monsoon, and the tropical easterly jet forms over India in summer.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'Temperature relationships worth remembering',
          items: [
            { expr: 'Normal lapse rate ≈ 6.5 °C per km', note: 'How fast the air cools with height in the troposphere.' },
            { expr: 'Insolation ∝ cos(angle from vertical)', note: 'Why the equator receives more energy per unit area than the poles — the same beam spreads over more ground when it strikes at a slant.' },
            { expr: 'Temperature inversion = warm air above cold', note: 'The reverse of normal. Common on clear calm winter nights and in valleys, and it traps pollutants near the ground.' },
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'climate',
      heading: 'Weather and climate',
      eyebrow: 'Rainfall, cyclones and classification',
      intro:
        'Weather is the state of the atmosphere at a moment; climate is its average over about thirty years. The distinction is asked directly, and so is nearly every term in this section.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Humidity',
              'Absolute humidity is the actual mass of water vapour in a given volume of air. Relative humidity is that amount as a percentage of the maximum the air could hold at its temperature — which is why relative humidity rises at night without any water being added, as cooling air lowers the maximum. The dew point is the temperature at which saturation is reached.',
            ],
            [
              'Types of rainfall',
              'Convectional rainfall comes from air heated at the surface rising and cooling — heavy, short and afternoon-timed, typical of the equatorial belt. Orographic or relief rainfall comes from air forced up a mountain barrier, giving a wet windward slope and a dry rain-shadow leeward slope. Cyclonic or frontal rainfall comes from warm air riding over cold along a front.',
            ],
            [
              'Cloud families',
              'Cirrus clouds are high, thin and made of ice. Cumulus are heaped and fair-weather. Stratus are layered and grey. Nimbus clouds bring rain, and cumulonimbus — the tall anvil-topped thundercloud — brings the heaviest downpours, hail and lightning.',
            ],
            [
              'Tropical cyclones',
              'Form over warm ocean water above about 27 °C, need the Coriolis effect and so never form on the equator itself, and have a calm central eye. They are called cyclones in the Indian Ocean, hurricanes in the Atlantic and eastern Pacific, typhoons in the western Pacific and willy-willies in Australia.',
            ],
            [
              'El Niño and La Niña',
              'El Niño is an abnormal warming of the eastern equatorial Pacific that weakens the trade winds and is associated with a weaker Indian monsoon and drought. La Niña is the opposite cool phase, generally associated with a stronger monsoon. The linked atmospheric pressure see-saw is the Southern Oscillation, and the pair together are called ENSO.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Köppen climate groups, which questions name directly',
          head: ['Group letter', 'Name', 'Where it occurs'],
          rows: [
            ['A', 'Tropical humid', 'Amazon basin, Congo basin, Indonesia — hot all year with heavy rain.'],
            ['B', 'Dry', 'Sahara, Thar, Arabian and Australian deserts and their steppe margins.'],
            ['C', 'Warm temperate', 'Mediterranean coasts, south-east China, most of Europe west of the Alps.'],
            ['D', 'Cold snow-forest', 'Siberia, northern Canada — large continental interiors only, and only in the northern hemisphere.'],
            ['E', 'Polar', 'Tundra and ice caps of Greenland and Antarctica.'],
            ['H', 'Highland', 'Mountain climates where altitude overrides latitude, as in the Himalaya and the Andes.'],
          ],
        },
        {
          type: 'note',
          title: 'Greenhouse effect and global warming',
          text:
            'The greenhouse effect is natural and necessary — without it the earth\'s average surface temperature would be far below freezing. The problem is its enhancement by additional carbon dioxide, methane, nitrous oxide and fluorinated gases. Methane traps far more heat per molecule than carbon dioxide but is much shorter-lived in the atmosphere, which is why policy treats the two differently. The environment pages treat the treaties; this section only supplies the physics.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'oceans',
      heading: 'Oceans',
      eyebrow: 'Relief, currents, tides and salinity',
      intro:
        'Oceans cover about 71% of the surface and drive climate far inland. The examinable content divides cleanly into four blocks — the shape of the ocean floor, the currents, the tides and the chemistry.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Ocean floor relief',
              'From the coast outward: the continental shelf, shallow and gently sloping, richest in fish and the source of most offshore oil; the continental slope, steeper and marking the true edge of the continent; the continental rise; and the abyssal plain, the vast flat deep. Trenches are the deepest features — the Mariana Trench in the Pacific, with the Challenger Deep at roughly 11,000 m, is the deepest known point on earth.',
            ],
            [
              'Ocean currents',
              'Driven mainly by prevailing winds and modified by the Coriolis effect and by continental outlines. Warm currents flow from the equator polewards, cold currents from the poles equatorwards. In the northern hemisphere the circulation is clockwise, in the southern anticlockwise.',
            ],
            [
              'Why currents are examined',
              'Because they explain climate anomalies. The North Atlantic Drift keeps north-west European ports ice-free at latitudes where Canadian ports freeze. Cold currents next to warm land make coastal deserts — Atacama beside the Peru current, Namib beside the Benguela. And where warm and cold currents meet, upwelling nutrients create the great fishing grounds, as at the Grand Banks off Newfoundland where the Gulf Stream meets the Labrador current.',
            ],
            [
              'Tides',
              'The rise and fall of sea level from the gravitational pull of the moon and, less strongly, the sun. Spring tides are the highest, occurring at new and full moon when sun and moon pull in line. Neap tides are the lowest, at the first and third quarters when they pull at right angles. Spring tides have nothing to do with the season — the name comes from the water springing up.',
            ],
            [
              'Salinity',
              'The dissolved salt content, averaging about 35 parts per thousand in the open ocean. It is highest in enclosed subtropical seas with high evaporation and little river inflow — the Red Sea is the most saline sea — and lowest where large rivers or melting ice dilute it, as in the Baltic and near the Ganga-Brahmaputra mouth. Enclosed lakes with no outlet, such as the Dead Sea, are saltier still, but they are lakes rather than seas.',
            ],
            [
              'Coral reefs',
              'Built by colonial polyps that need shallow, warm, clear, saline water, and so are confined to roughly 30° N to 30° S. Three forms: fringing reefs attached to the shore, barrier reefs separated from it by a lagoon, and atolls, which are rings enclosing a lagoon. The Great Barrier Reef off Queensland is the largest; in India, reefs occur in the Gulf of Mannar, the Gulf of Kachchh, the Andaman and Nicobar Islands and Lakshadweep.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Currents worth knowing by name',
          head: ['Current', 'Ocean and nature', 'Effect it is asked about'],
          rows: [
            ['Gulf Stream', 'North Atlantic, warm', 'Continues as the North Atlantic Drift and keeps north-west Europe unusually mild.'],
            ['Labrador current', 'North Atlantic, cold', 'Meets the Gulf Stream off Newfoundland, producing dense fog and the Grand Banks fishery.'],
            ['Kuroshio', 'North Pacific, warm', 'Warms the Japanese coast; its cold counterpart is the Oyashio.'],
            ['Peru (Humboldt) current', 'South Pacific, cold', 'Supports one of the world\'s richest fisheries and helps make the Atacama a desert.'],
            ['Benguela current', 'South Atlantic, cold', 'Runs along south-west Africa and helps make the Namib a desert.'],
            ['Canary current', 'North Atlantic, cold', 'Flows past north-west Africa towards the equator.'],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'biosphere',
      heading: 'Soils and biomes',
      eyebrow: 'The living layer',
      intro:
        'The thin zone where lithosphere, atmosphere and hydrosphere overlap. Questions here are mostly about which biome sits at which latitude and what soil supports it.',
      blocks: [
        {
          type: 'table',
          caption: 'Major world biomes',
          head: ['Biome', 'Latitude and climate', 'Vegetation and note'],
          rows: [
            ['Equatorial rainforest', 'Near 0°, hot and wet all year', 'Evergreen, multi-layered, the highest biodiversity on earth. Called selvas in the Amazon.'],
            ['Tropical grassland', 'Roughly 5°–20°, wet and dry seasons', 'Savanna — tall grass with scattered trees. Called llanos in Venezuela and campos in Brazil.'],
            ['Hot desert', 'Roughly 20°–30°, under the subtropical high', 'Sparse xerophytic scrub. The Sahara is the largest hot desert.'],
            ['Mediterranean', 'Roughly 30°–40° on western coasts', 'Wet winters and dry summers; citrus, olives and vines. The world\'s orchard belt.'],
            ['Temperate grassland', 'Continental interiors, 40°–55°', 'Prairies in North America, steppes in Eurasia, pampas in Argentina, downs in Australia, veld in South Africa — the world\'s grain belts.'],
            ['Taiga', 'Roughly 55°–65° in the north only', 'Coniferous softwood forest — pine, fir, spruce. The largest source of softwood and pulp.'],
            ['Tundra', 'Beyond about 65°', 'Mosses, lichens and dwarf shrubs over permafrost; no trees.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Soil formation',
              'Soil results from parent rock acted on by climate, relief, organisms and time. A soil profile has horizons: O of surface litter, A of topsoil rich in humus, B of subsoil where leached material accumulates, C of weathered parent material, and R of bedrock.',
            ],
            [
              'Leaching and laterisation',
              'Heavy rainfall washes soluble minerals downward, leaving soil acidic and infertile. In hot wet tropics this goes further, removing silica and leaving iron and aluminium oxides — laterite soil, red, hard when dry and poor for crops without treatment.',
            ],
            [
              'Podzol and chernozem',
              'Podzols are the acidic, ash-grey, leached soils of the taiga. Chernozems are the black earths of the temperate grasslands — deep, humus-rich and among the most fertile soils in the world, which is why the Ukrainian steppe and the American prairie became grain belts.',
            ],
            [
              'The ecosystem idea',
              'Producers capture solar energy, consumers eat, decomposers return nutrients. Energy flows one way and is lost at each transfer — roughly 90% at each step, which is the ten per cent law and the reason food chains are short. Nutrients, by contrast, cycle.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'If it is 12:00 noon at Greenwich, what is the standard time in India?',
      steps: [
        'Indian Standard Time is based on the 82°30′ E meridian.',
        'Each degree of longitude equals 4 minutes of time, so 82.5 × 4 = 330 minutes.',
        '330 minutes is 5 hours 30 minutes, and India lies east of Greenwich, so it is ahead.',
      ],
      answer: '5:30 p.m. — IST is GMT + 5:30.',
    },
    {
      q: 'Why do secondary waves disappear beyond about 103° from an earthquake?',
      steps: [
        'Secondary waves are transverse, and transverse waves cannot pass through a liquid.',
        'Beyond roughly 103° the path from the focus to the recording station passes through the outer core.',
        'The waves therefore stop, creating the S-wave shadow zone.',
      ],
      answer: 'Because the outer core is liquid — the shadow zone is the evidence for it.',
    },
    {
      q: 'Why does the Atacama, on a tropical coast, receive almost no rain?',
      steps: [
        'It lies under the subtropical high-pressure belt, where air is descending and therefore warming and drying.',
        'The cold Peru current offshore chills the air above it, so that air is stable and rises reluctantly.',
        'The Andes to the east block moist air arriving from the Amazon side.',
      ],
      answer: 'Descending subtropical air, a cold offshore current and a mountain barrier together.',
    },
    {
      q: 'Distinguish spring tides from neap tides.',
      steps: [
        'Tides are produced by the gravitational pull of the moon and the sun.',
        'At new and full moon the two bodies are in line with the earth, so their pulls add — giving the highest high tides and lowest low tides, called spring tides.',
        'At the first and third quarters they pull at right angles, so their effects partly cancel — giving neap tides.',
      ],
      answer: 'Spring tides at syzygy, neap tides at quadrature; the word "spring" has nothing to do with the season.',
    },
    {
      q: 'Why is the troposphere thicker over the equator than over the poles?',
      steps: [
        'The troposphere is defined by where convection carries heat upward from the surface.',
        'Equatorial surface heating is intense, so air expands and rises far higher before convection ceases.',
        'Polar air is cold and dense, and rises very little.',
      ],
      answer: 'About 18 km at the equator against about 8 km at the poles, because of the difference in surface heating.',
    },
    {
      q: 'A place has a wet windward slope and a dry belt just beyond the ridge. Name the rainfall type and the dry belt.',
      steps: [
        'Moist air forced to climb a barrier cools, condenses and rains on the slope facing the wind.',
        'Descending on the far side, the air warms and its relative humidity falls, so it takes up moisture rather than releasing it.',
        'The rainfall type is orographic; the dry belt is the rain shadow.',
      ],
      answer: 'Orographic rainfall, with a rain-shadow area on the leeward side.',
    },
    {
      q: 'Which soil supports the world\'s great grain belts, and why?',
      steps: [
        'Temperate grasslands accumulate large amounts of humus because grass roots die back and decay in place each year.',
        'Rainfall there is moderate — enough for growth, not enough for heavy leaching.',
        'The result is chernozem, the deep black earth of the Ukrainian steppe and the American prairie.',
      ],
      answer: 'Chernozem — black earth of the temperate grasslands.',
    },
    {
      q: 'Why can a tropical cyclone not form at the equator?',
      steps: [
        'A cyclone needs warm ocean water above about 27 °C, which the equator has.',
        'It also needs rotation to organise the inflowing air into a spiral.',
        'The Coriolis effect is zero at the equator and negligible within about five degrees of it, so no spin can develop.',
      ],
      answer: 'The Coriolis effect vanishes at the equator, so the system cannot acquire rotation.',
    },
  ],

  practice: [
    {
      q: 'Indian Standard Time is based on the longitude:',
      options: ['82°30′ E', '77°30′ E', '88°30′ E', '75°00′ E'],
      answer: 0,
      explain: 'The 82°30′ E meridian passes near Mirzapur in Uttar Pradesh and gives IST as GMT + 5:30.',
    },
    {
      q: 'The boundary between the crust and the mantle is called the:',
      options: ['Lehmann discontinuity', 'Gutenberg discontinuity', 'Mohorovicic discontinuity', 'Conrad discontinuity'],
      answer: 2,
      explain: 'The Moho separates crust from mantle. Gutenberg separates mantle from core, and Lehmann the outer core from the inner.',
    },
    {
      q: 'All weather phenomena occur in the:',
      options: ['Stratosphere', 'Mesosphere', 'Thermosphere', 'Troposphere'],
      answer: 3,
      explain: 'The troposphere holds almost all the water vapour and is where temperature falls with height, so it is the layer that produces weather.',
    },
    {
      q: 'The San Andreas Fault is an example of which plate boundary?',
      options: ['Transform', 'Divergent', 'Convergent', 'Subduction'],
      answer: 0,
      explain: 'Plates slide past one another there, so no crust is created or destroyed — but the friction causes major earthquakes.',
    },
    {
      q: 'Which local wind is called the "snow-eater" of the Rocky Mountains?',
      options: ['Mistral', 'Chinook', 'Bora', 'Sirocco'],
      answer: 1,
      explain: 'The Chinook is a warm dry wind descending the eastern Rockies. Mistral and Bora are cold; the Sirocco is hot and dusty off the Sahara.',
    },
    {
      q: 'Fjords are landforms produced by:',
      options: ['Wind', 'Groundwater', 'Glaciers', 'Sea waves'],
      answer: 2,
      explain: 'A fjord is a glaciated U-shaped valley later drowned by the sea, typical of Norway, Chile and New Zealand.',
    },
    {
      q: 'Spring tides occur when the sun, moon and earth are:',
      options: ['At right angles', 'In a straight line', 'At the equinoxes', 'At perihelion'],
      answer: 1,
      explain: 'At new and full moon the pulls of the sun and moon reinforce each other, giving the highest tidal range.',
    },
    {
      q: 'The Great Barrier Reef lies off the coast of:',
      options: ['Brazil', 'Indonesia', 'Madagascar', 'Australia'],
      answer: 3,
      explain: 'It runs along the Queensland coast of north-east Australia and is the largest reef system in the world.',
    },
    {
      q: 'Which rock type is the only one that contains fossils?',
      options: ['Sedimentary', 'Igneous', 'Metamorphic', 'Plutonic'],
      answer: 0,
      explain: 'Remains are buried within accumulating sediment. Igneous rock forms from melt and metamorphic rock is altered by heat and pressure, both of which destroy fossils.',
    },
    {
      q: 'El Niño refers to an abnormal warming of the:',
      options: ['North Atlantic', 'Eastern equatorial Pacific', 'Arabian Sea', 'Southern Ocean'],
      answer: 1,
      explain: 'The warming weakens the trade winds and is generally associated with a weaker Indian south-west monsoon.',
    },
    {
      q: 'The deepest known point in the world\'s oceans lies in the:',
      options: ['Java Trench', 'Puerto Rico Trench', 'Mariana Trench', 'Tonga Trench'],
      answer: 2,
      explain: 'The Challenger Deep in the Mariana Trench of the western Pacific reaches roughly 11,000 metres.',
    },
    {
      q: 'Marble is formed by the metamorphism of:',
      options: ['Shale', 'Granite', 'Sandstone', 'Limestone'],
      answer: 3,
      explain: 'Limestone becomes marble. Shale becomes slate, granite becomes gneiss and sandstone becomes quartzite.',
    },
    {
      q: 'The coniferous softwood forest belt of the northern hemisphere is called the:',
      options: ['Tundra', 'Taiga', 'Steppe', 'Savanna'],
      answer: 1,
      explain: 'The taiga occupies roughly 55°–65° N across Canada and Siberia and is the world\'s main source of softwood and pulp.',
    },
    {
      q: 'The ozone layer is found in the:',
      options: ['Troposphere', 'Mesosphere', 'Stratosphere', 'Ionosphere'],
      answer: 2,
      explain: 'Ozone in the stratosphere absorbs ultraviolet radiation, which is why temperature rises with height in that layer.',
    },
    {
      q: 'A cold current flowing along the coast of south-west Africa is the:',
      options: ['Benguela current', 'Canary current', 'Kuroshio current', 'Agulhas current'],
      answer: 0,
      explain: 'The cold Benguela runs northward past Namibia and contributes to the aridity of the Namib desert.',
    },
    {
      q: 'On 22 December the sun is vertically overhead at the:',
      options: ['Equator', 'Arctic Circle', 'Tropic of Cancer', 'Tropic of Capricorn'],
      answer: 3,
      explain: 'That is the winter solstice in the northern hemisphere — the shortest day in the north and the longest in the south.',
    },
  ],

  faqs: [
    {
      q: 'Is physical geography or Indian geography more important for the exam?',
      a: 'Both are asked, but they play different roles. Physical geography is a smaller share of the questions and a much larger share of the understanding — it is what makes the monsoon, the soils and the drainage of India explicable rather than memorisable. Read physical first, and Indian geography takes half the time it otherwise would.',
    },
    {
      q: 'Why is the earth called a geoid rather than a sphere?',
      a: 'Because rotation makes it bulge at the equator and flatten at the poles, so the equatorial diameter is about 43 km greater than the polar. Even "oblate spheroid" is an idealisation, since the actual surface has irregularities, and the term geoid — literally "earth-shaped" — is used for the true figure.',
    },
    {
      q: 'What causes the seasons — the tilt or the distance from the sun?',
      a: 'The tilt. The earth is actually closest to the sun in early January, in the middle of the northern winter. The 23½° axial tilt means each hemisphere leans towards the sun for half the year and away for the other half, changing both the angle of the sun\'s rays and the length of the day.',
    },
    {
      q: 'How do we know what the earth\'s interior is made of?',
      a: 'Almost entirely from seismology. Primary waves pass through solids and liquids while secondary waves cannot pass through liquids at all, so the shadow zone where S waves vanish shows that the outer core is molten. Changes in wave speed at particular depths mark the Mohorovicic, Gutenberg and Lehmann discontinuities.',
    },
    {
      q: 'What is the difference between weather and climate?',
      a: 'Weather is the state of the atmosphere at a place at a given moment — today\'s temperature, cloud and wind. Climate is the average of that weather over a long period, conventionally thirty years, together with its normal variability. A cold week is weather; a warming trend across decades is climate.',
    },
    {
      q: 'Why do most hot deserts lie between 20° and 30° latitude?',
      a: 'Because the subtropical high-pressure belt sits there. Air that rose at the equator descends at these latitudes, warming as it sinks and so lowering its relative humidity, which suppresses cloud and rain. Cold offshore currents on western coasts reinforce the effect, which is why the Atacama and Namib are so extreme.',
    },
    {
      q: 'What exactly is the Coriolis effect?',
      a: 'The apparent deflection of anything moving freely over the rotating earth — to the right in the northern hemisphere and to the left in the southern. It is not a real force but a consequence of observing motion from a spinning frame. It is zero at the equator and greatest at the poles, which is why cyclones cannot form on the equator.',
    },
    {
      q: 'How should I use maps while studying this?',
      a: 'Keep a blank outline map beside the notes and mark each feature as you meet it. Physical geography questions increasingly give a description and ask you to identify the place, and a candidate who has drawn the ranges, currents and pressure belts once will recognise them far faster than one who has only read the names.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'Very little. Physical geography is the most stable block in general studies — the discontinuities, wind systems and rock cycle do not move. Only the applied edges shift, such as which cyclone names are current or the latest figures on ice-sheet loss, and those belong to current affairs rather than here.',
    },
    {
      q: 'How many questions come from physical geography?',
      a: 'UPSC Prelims typically carries four to seven geography questions overall, with the physical share rising in recent years as the paper has become more conceptual. SSC CGL Tier 1 has two to four, NDA and CDS four to six, and state PSC prelims three to five.',
    },
  ],

  related: [
    { label: 'Indian Geography', to: '/study-material/geography/indian-geography/' },
    { label: 'World Geography', to: '/study-material/geography/world-geography/' },
    { label: 'Environment', to: '/study-material/environment/' },
    { label: 'Science & Technology', to: '/study-material/science/' },
    { label: 'All Geography', to: '/study-material/geography/' },
  ],
}
