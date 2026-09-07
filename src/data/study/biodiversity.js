/**
 * Biodiversity and Conservation —
 * /study-material/environment/biodiversity/
 *
 * The applied half of the environment syllabus. Written around the things that
 * do not move — hotspot criteria, IUCN categories, what each protected-area
 * designation means, which convention covers what — with every count that is
 * revised between cycles explicitly flagged as a look-up item.
 */
export default {
  subject: 'environment',
  subjectName: 'Environment',
  slug: 'biodiversity',
  title: 'Biodiversity & Conservation',
  seoTitle: 'Biodiversity and Conservation for Competitive Exams | Notes & Practice',
  metaDescription:
    'Complete biodiversity and conservation study material for UPSC, state PSC and SSC exams — levels of biodiversity, hotspots and biogeographic zones, threats.',
  readMinutes: 25,
  lead: [
    'Biodiversity is the block where UPSC Prelims asks the largest number of questions and where candidates most often prepare the wrong thing. Memorising how many tiger reserves India has is nearly worthless, because the figure changes and the exam knows it. Knowing what makes an area a tiger reserve rather than a national park is worth several marks a year.',
    'This page is therefore organised around definitions, criteria and designations — the parts that stay fixed — with counts and statuses marked wherever they need to be checked against a current source. It also gives the international conventions as a set, because the commonest question in this topic is which treaty covers which subject.',
  ],

  weightage: [
    { exam: 'UPSC Prelims GS Paper 1', count: '6–10 questions', note: 'Species status, protected areas, conventions and reports — the densest environment sub-block.' },
    { exam: 'State PSC Prelims', count: '3–5 questions', note: 'Weighted towards the state\'s own national parks and sanctuaries.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '1–2 questions', note: 'Usually a famous national park or a well-known convention.' },
    { exam: 'Indian Forest Service', count: '15+ questions', note: 'Including detailed questions on schedules of the Wildlife Protection Act.' },
    { exam: 'Banking and insurance GA', count: '1–2 questions', note: 'Typically a recent Ramsar designation or a summit in the news.' },
  ],

  contents: [
    { icon: 'layers', title: 'Levels of biodiversity', sub: 'Genetic, species and ecosystem', href: '#levels' },
    { icon: 'globe', title: 'Hotspots and zones', sub: 'Where diversity concentrates', href: '#hotspots' },
    { icon: 'bell', title: 'Threats', sub: 'What is driving loss', href: '#threats' },
    { icon: 'search', title: 'The IUCN Red List', sub: 'Nine categories and what they mean', href: '#iucn' },
    { icon: 'target', title: 'Protected areas', sub: 'India\'s conservation network', href: '#protected' },
    { icon: 'doc', title: 'Conservation law', sub: 'The Indian statutes', href: '#law' },
    { icon: 'book', title: 'International conventions', sub: 'Which treaty covers what', href: '#conventions' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'levels',
      heading: 'Levels of biodiversity',
      eyebrow: 'Genetic, species and ecosystem',
      intro:
        'The term biodiversity was popularised by Edward O. Wilson and covers variety at three nested levels. Questions frequently give an example and ask which level it illustrates.',
      blocks: [
        {
          type: 'table',
          caption: 'The three levels',
          head: ['Level', 'What varies', 'Indian example'],
          rows: [
            ['Genetic diversity', 'Variation within a single species', 'The many thousands of rice varieties traditionally cultivated in India, or the genetic difference between populations of the same tiger subspecies.'],
            ['Species diversity', 'The number and relative abundance of different species in an area', 'The Western Ghats supporting far more amphibian species than a comparable area of the Deccan plateau.'],
            ['Ecosystem diversity', 'Variety of habitats, communities and ecological processes', 'India\'s range from the cold desert of Ladakh through mangrove, coral reef, rainforest, alpine meadow and Thar desert.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Alpha, beta and gamma diversity',
              'Alpha diversity is species richness within one community or habitat. Beta diversity is the change in species composition between habitats — how different one is from the next. Gamma diversity is the total diversity across a whole landscape or region. The three are used together to describe why a region can be diverse even when each of its habitats is not.',
            ],
            [
              'India as a megadiverse country',
              'India is one of seventeen countries designated megadiverse, holding a very large share of the earth\'s species. It occupies roughly 2.4 per cent of the world\'s land area but accounts for a far higher share of recorded species — a ratio quoted in the Economic Survey and in official biodiversity reports, and worth citing as a ratio rather than as a precise percentage, since counts are revised.',
            ],
            [
              'Why biodiversity matters',
              'Provisioning services — food, fibre, timber, medicine. Regulating services — pollination, climate regulation, flood control, water purification, pest control. Supporting services — soil formation, nutrient cycling, primary production. Cultural services — recreation, aesthetic and spiritual value. This four-way classification comes from the Millennium Ecosystem Assessment and is asked directly.',
            ],
            [
              'In situ and ex situ conservation',
              'In situ conservation protects species in their natural habitat — national parks, sanctuaries, biosphere reserves, sacred groves. Ex situ conservation protects them outside it — zoological parks, botanical gardens, seed banks, gene banks, cryopreservation, tissue culture. In situ is preferred because it conserves the whole ecosystem and allows evolution to continue; ex situ is a fallback for species too reduced to survive in the wild.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'hotspots',
      heading: 'Hotspots and zones',
      eyebrow: 'Where diversity concentrates',
      intro:
        'The hotspot concept has two criteria, and both must be satisfied. Candidates routinely remember the first and forget the second, which is precisely where questions are set.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The two criteria for a biodiversity hotspot',
              'First, the region must contain at least 1,500 species of endemic vascular plants — that is, more than half a per cent of the world\'s total, found nowhere else. Second, it must have lost at least seventy per cent of its original primary vegetation. A hotspot is therefore defined by irreplaceability combined with threat: an area that is rich but intact does not qualify.',
            ],
            [
              'Origin of the idea',
              'Proposed by Norman Myers in 1988 and later developed by Conservation International. There are thirty-six recognised hotspots worldwide, the most recent addition being the North American Coastal Plain. Together they cover a small fraction of the earth\'s land surface but hold a very large share of its endemic species.',
            ],
            [
              'India\'s four hotspots',
              'The Himalaya, covering the eastern Himalaya in particular. Indo-Burma, covering the north-east excluding Assam and the Andamans. The Western Ghats and Sri Lanka, extraordinarily rich in amphibians and flowering plants. And Sundaland, which reaches India only through the Nicobar Islands. Note the split: the Andamans fall in Indo-Burma while the Nicobars fall in Sundaland, and that distinction is examined.',
            ],
            [
              'The ten biogeographic zones',
              'India is divided for conservation planning into ten biogeographic zones, following the classification of Rodgers and Panwar: Trans-Himalaya, Himalaya, Desert, Semi-arid, Western Ghats, Deccan Peninsula, Gangetic Plain, Coasts, North-East and Islands. The Deccan Peninsula is the largest by area, and the classification underlies the design of the protected-area network.',
            ],
            [
              'Sacred groves',
              'Patches of forest protected by community religious tradition, often for centuries, and frequently richer in native species than surrounding managed land. They are called kavu in Kerala, devrai or deorai in Maharashtra, sarna in Jharkhand, law kyntang in Meghalaya and orans in Rajasthan. They are the oldest form of in situ conservation in India.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'threats',
      heading: 'Threats',
      eyebrow: 'What is driving loss',
      intro:
        'The standard mnemonic is HIPPO — Habitat loss, Invasive species, Pollution, Population growth and Overexploitation — and it is worth knowing in that order, because habitat loss is by a wide margin the largest single driver.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Habitat loss and fragmentation',
              'Conversion of forest, wetland and grassland to agriculture, settlement and infrastructure. Fragmentation is separately damaging: a habitat cut into small isolated patches supports fewer species than the same total area intact, because populations become too small to persist and cannot exchange genes. Wildlife corridors are the standard response.',
            ],
            [
              'Invasive alien species',
              'Species introduced outside their natural range that spread and displace native species. In India the recurring examples are Lantana camara, which now covers vast areas of forest understorey; Parthenium hysterophorus, congress grass, an aggressive weed and allergen; water hyacinth, Eichhornia crassipes, which chokes water bodies and is called the terror of Bengal; and Prosopis juliflora in dry regions. African catfish and tilapia are aquatic examples.',
            ],
            [
              'Overexploitation',
              'Harvesting faster than a population can replace itself — overfishing, unsustainable logging, collection of medicinal plants, and poaching for skins, horn, ivory, bone and pangolin scales. Wildlife trade is the reason CITES exists.',
            ],
            [
              'Pollution and climate change',
              'Pesticide residues moving up food chains; nutrient runoff causing eutrophication; plastics in marine systems. Diclofenac used on cattle caused a catastrophic collapse in Indian vulture populations and led to its veterinary ban. Climate change shifts the ranges species can occupy, causes coral bleaching when sea temperatures rise, and disrupts the timing of flowering, migration and breeding.',
            ],
            [
              'Human-wildlife conflict',
              'A growing driver, particularly around elephants, leopards and nilgai, as habitat shrinks and corridors are blocked. It matters for conservation because local hostility undermines protection, which is why compensation schemes and community involvement feature in policy answers.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'The sixth extinction',
          text:
            'Current extinction rates are estimated to be far above the background rate visible in the fossil record, which has led to the present period being described as a sixth mass extinction — the first driven by a single species. The five earlier ones, including the end-Permian and the end-Cretaceous extinction that removed the non-avian dinosaurs, were driven by physical events.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'iucn',
      heading: 'The IUCN Red List',
      eyebrow: 'Nine categories and what they mean',
      intro:
        'The International Union for Conservation of Nature, founded in 1948 and headquartered at Gland in Switzerland, maintains the global standard for assessing extinction risk.',
      blocks: [
        {
          type: 'table',
          caption: 'The nine Red List categories',
          head: ['Category', 'Meaning', 'Note'],
          rows: [
            ['Extinct', 'No reasonable doubt that the last individual has died', 'The Indian cheetah was declared extinct in India in 1952; the species survives elsewhere.'],
            ['Extinct in the Wild', 'Survives only in cultivation, captivity or as a naturalised population outside its historic range', 'A small category, and a common distractor against Extinct.'],
            ['Critically Endangered', 'Facing an extremely high risk of extinction in the wild', 'The three threatened categories are Critically Endangered, Endangered and Vulnerable, in that order.'],
            ['Endangered', 'Facing a very high risk of extinction in the wild', 'One step less severe than Critically Endangered.'],
            ['Vulnerable', 'Facing a high risk of extinction in the wild', 'The least severe of the three threatened categories.'],
            ['Near Threatened', 'Close to qualifying for a threatened category, or likely to soon', 'Not itself a threatened category, which is the point of the question.'],
            ['Least Concern', 'Widespread and abundant; does not qualify for any other category', 'Being on the Red List does not mean a species is threatened — most listed species are Least Concern.'],
            ['Data Deficient', 'Inadequate information to make an assessment of risk', 'Not a statement that the species is safe.'],
            ['Not Evaluated', 'Has not yet been assessed against the criteria', 'The great majority of described species fall here.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The commonest trap',
              'Assuming that appearing on the IUCN Red List means a species is threatened. The Red List is an assessment of all evaluated species, and only Critically Endangered, Endangered and Vulnerable count as threatened. Near Threatened and Least Concern are also on the list.',
            ],
            [
              'Statuses change',
              'A species can be reassessed as conservation improves or deteriorates, and Indian species have moved in both directions. Because of this, never learn a status as a permanent fact — learn what each category means and check the current classification of any particular species against the IUCN Red List itself.',
            ],
            [
              'Indian species that recur in questions',
              'The Great Indian Bustard, the Gangetic dolphin, the snow leopard, the Asiatic lion confined to the Gir landscape, the one-horned rhinoceros of Kaziranga and Manas, the hangul or Kashmir stag, the Nilgiri tahr, the lion-tailed macaque, the red panda, the Malabar civet, the pangolin and the gharial. Learn where each occurs; treat the current status as a look-up.',
            ],
            [
              'Schedules versus Red List',
              'The Wildlife Protection Act schedules and the IUCN categories are entirely separate systems. The first is Indian law and determines the penalty for harming a species; the second is an international scientific assessment with no legal force. A species can be highly protected under Indian law and Least Concern globally, or the reverse.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'protected',
      heading: 'Protected areas',
      eyebrow: 'India\'s conservation network',
      intro:
        'Four legal designations under the Wildlife Protection Act, plus two administrative categories that sit alongside them. The differences between them are the substance of most questions here.',
      blocks: [
        {
          type: 'table',
          caption: 'Categories of protected area',
          head: ['Designation', 'What it means', 'Human activity'],
          rows: [
            ['National Park', 'Declared for the protection of wildlife and its environment, with boundaries fixed and rights settled', 'No grazing, no private tenurial rights, no exploitation of habitat. The strictest ordinary category.'],
            ['Wildlife Sanctuary', 'Declared for the protection of wildlife, with somewhat greater flexibility', 'Certain rights and regulated activities may be permitted by the Chief Wildlife Warden if they do not harm wildlife. A sanctuary can be upgraded to a national park.'],
            ['Conservation Reserve', 'Usually an area adjoining a park or sanctuary, or a corridor, on government land', 'Declared after consulting local communities; managed by a committee that includes local representatives.'],
            ['Community Reserve', 'Private or community land where the community volunteers to conserve', 'Introduced by the 2002 amendment to widen conservation beyond state-owned land.'],
            ['Biosphere Reserve', 'A UNESCO-linked designation under the Man and the Biosphere Programme, not a legal category under the Act', 'Zoned into a strictly protected core, a buffer for research and limited use, and a transition zone for sustainable activity. India\'s first was the Nilgiri Biosphere Reserve.'],
            ['Tiger Reserve', 'Notified under the Wildlife Protection Act on the recommendation of the National Tiger Conservation Authority', 'Has a critical tiger habitat, or core, and a buffer zone. Usually built around an existing national park or sanctuary rather than replacing it.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Project Tiger',
              'Launched in 1973 with nine reserves, the flagship of Indian wildlife conservation. The National Tiger Conservation Authority was created as a statutory body by the 2006 amendment to the Wildlife Protection Act, and it administers the programme. A national tiger estimation exercise is conducted once every four years; the number of reserves and the population estimate both change with each cycle and should be taken from the latest official report.',
            ],
            [
              'The other species projects',
              'Project Elephant, 1992, which also designates elephant reserves and corridors. Project Snow Leopard, 2009, for the high-altitude Himalayan landscape. Project Dolphin, announced in 2020, for the Gangetic river dolphin, which is India\'s national aquatic animal. Project Lion, for the Asiatic lion of the Gir landscape. The Cheetah reintroduction programme brought African cheetahs to Kuno National Park, seventy years after the Indian cheetah was declared extinct.',
            ],
            [
              'The first national park',
              'Hailey National Park, established in 1936 in what is now Uttarakhand, later renamed Jim Corbett National Park. It was also among the first nine tiger reserves in 1973.',
            ],
            [
              'Eco-sensitive zones',
              'Areas notified around a protected area under the Environment (Protection) Act, in which specified activities are prohibited or regulated, so that the boundary of a park is not an abrupt edge. They are a recurring subject of litigation over the width of the zone.',
            ],
            [
              'Counts that change',
              'The number of national parks, wildlife sanctuaries, conservation and community reserves, tiger reserves, elephant reserves, biosphere reserves and Ramsar sites all increase as new areas are notified. So does the tiger population estimate. None of these should be memorised from static notes; take them from the Ministry of Environment, the National Tiger Conservation Authority or the Ramsar Secretariat close to the exam.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'law',
      heading: 'Conservation law',
      eyebrow: 'The Indian statutes',
      intro:
        'Six statutes carry almost the whole of Indian environmental law, and each has a founding purpose that explains its structure.',
      blocks: [
        {
          type: 'table',
          caption: 'The principal statutes',
          head: ['Statute', 'Year', 'What it does'],
          rows: [
            ['Wildlife (Protection) Act', '1972', 'Protects species and creates the protected-area system. Its schedules were restructured by the 2022 amendment into Schedules I and II for animals, with Schedule I carrying the highest protection, Schedule III for plants and Schedule IV for specimens listed under CITES.'],
            ['Water (Prevention and Control of Pollution) Act', '1974', 'Created the Central and State Pollution Control Boards, which remain the principal regulatory bodies for pollution of every kind.'],
            ['Forest (Conservation) Act', '1980', 'Requires central approval before forest land is diverted to non-forest use. Renamed the Van (Sanrakshan Evam Samvardhan) Adhiniyam by amendment in 2023.'],
            ['Air (Prevention and Control of Pollution) Act', '1981', 'Extended the Pollution Control Boards\' mandate to air quality and allowed declaration of air pollution control areas.'],
            ['Environment (Protection) Act', '1986', 'An umbrella law enacted after the Bhopal gas tragedy of 1984, giving the central government wide powers to make rules. Most Indian environmental rules — on waste, noise, coastal zones, eco-sensitive zones and environmental impact assessment — are made under it.'],
            ['Biological Diversity Act', '2002', 'Implements the Convention on Biological Diversity. It created the National Biodiversity Authority at Chennai, State Biodiversity Boards, and Biodiversity Management Committees at the local level, and regulates access to biological resources and the sharing of benefits. Amended in 2023.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Forest Rights Act',
              'The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006, recognises individual and community rights over forest land and resources, and gives the Gram Sabha a role in the diversion of forest land. It sits alongside the conservation statutes and sometimes in tension with them, which is why it appears in mains questions on conservation and rights.',
            ],
            [
              'The National Green Tribunal',
              'Established by the National Green Tribunal Act, 2010, as a specialised body for environmental disputes, with a mandate to dispose of cases within six months. It applies the principles of sustainable development, the precautionary principle and the polluter pays principle, all of which the Supreme Court had already read into Indian law.',
            ],
            [
              'Environmental Impact Assessment',
              'Required for specified categories of project under notifications made under the Environment (Protection) Act. The process runs through screening, scoping, public consultation and appraisal, and results in environmental clearance with conditions. The scope of projects requiring it, and the extent of public consultation, are periodically revised and contested.',
            ],
            [
              'CAMPA',
              'The Compensatory Afforestation Fund Act, 2016, governs the money collected when forest land is diverted — compensatory afforestation charges and the net present value of the forest lost. The funds are held for the Centre and the states and are to be used for afforestation and forest management.',
            ],
            [
              'Judicial principles',
              'The polluter pays principle, that the cost of pollution falls on the polluter; the precautionary principle, that scientific uncertainty is not a reason to postpone measures against serious harm; the public trust doctrine, that the state holds natural resources in trust for the public; and absolute liability, laid down in the Oleum gas leak case, under which an enterprise in a hazardous activity is liable without any exception.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'conventions',
      heading: 'International conventions',
      eyebrow: 'Which treaty covers what',
      intro:
        'The single most reliably examined table in the environment syllabus. Learn the subject each convention covers, its year and its city, and you can answer nearly every question in this area.',
      blocks: [
        {
          type: 'table',
          caption: 'Conventions on biodiversity and pollution',
          head: ['Convention', 'Year and place', 'Subject'],
          rows: [
            ['Ramsar Convention', '1971, Ramsar in Iran', 'Wetlands of international importance. India acceded in 1982; the number of Indian Ramsar sites keeps rising and should be checked. The Montreux Record lists sites where ecological character has changed or is threatened — Keoladeo and Loktak are the Indian entries.'],
            ['CITES', 'Signed 1973 at Washington, in force 1975', 'International trade in endangered species. Appendix I bans commercial trade in the most threatened species; Appendix II regulates trade; Appendix III lists species a member state protects domestically and seeks help with.'],
            ['Convention on Migratory Species', '1979, Bonn', 'Migratory species and their habitats, also called the Bonn Convention. India hosted its thirteenth Conference of Parties at Gandhinagar in 2020.'],
            ['Basel Convention', '1989, Basel', 'Transboundary movement of hazardous wastes and their disposal.'],
            ['Convention on Biological Diversity', '1992, Rio de Janeiro', 'Conservation, sustainable use, and fair sharing of benefits from genetic resources. Its Cartagena Protocol of 2000 covers biosafety and living modified organisms; its Nagoya Protocol of 2010 covers access and benefit sharing.'],
            ['UNCCD', '1994', 'Desertification and land degradation, particularly in drylands. India hosted its fourteenth Conference of Parties in 2019, producing the Delhi Declaration.'],
            ['Rotterdam Convention', '1998, Rotterdam', 'Prior informed consent for trade in certain hazardous chemicals and pesticides.'],
            ['Stockholm Convention', '2001, Stockholm', 'Persistent organic pollutants — the so-called dirty dozen and subsequent additions.'],
            ['Minamata Convention', '2013', 'Mercury — its supply, trade, use, emissions and waste, named after the Japanese city where methylmercury poisoning occurred.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Aichi Targets and what replaced them',
              'The Aichi Biodiversity Targets, twenty in number, ran from 2011 to 2020 under the Convention on Biological Diversity and were largely not met. They were succeeded by the Kunming-Montreal Global Biodiversity Framework, adopted at the fifteenth Conference of Parties in December 2022, which contains twenty-three targets for 2030 — the best known being the commitment to protect thirty per cent of land and sea by 2030, known as 30 by 30.',
            ],
            [
              'The landmark conferences',
              'The Stockholm Conference of 1972 was the first UN conference on the human environment; World Environment Day on 5 June commemorates it, and the United Nations Environment Programme was created after it, headquartered at Nairobi. The Rio Earth Summit of 1992 produced the Convention on Biological Diversity, the UN Framework Convention on Climate Change, Agenda 21 and the Rio Declaration. Johannesburg followed in 2002 and Rio+20 in 2012.',
            ],
            [
              'Organisations to place correctly',
              'IUCN, founded 1948 at Gland in Switzerland, maintains the Red List. UNEP, created after Stockholm, is headquartered at Nairobi. WWF is a non-governmental organisation. TRAFFIC monitors wildlife trade as a joint programme of WWF and IUCN. UNESCO runs the Man and the Biosphere Programme and designates World Heritage Sites, including natural ones.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'An area contains more than 1,500 endemic vascular plant species and retains most of its original vegetation. Is it a biodiversity hotspot?',
      steps: [
        'The first criterion — at least 1,500 endemic vascular plant species — is satisfied.',
        'The second criterion requires that the area has lost at least seventy per cent of its original primary vegetation.',
        'An intact area fails that test, so it is not a hotspot however rich it is. A hotspot is defined by irreplaceability combined with threat.',
      ],
      answer: 'No — both criteria must be met, and it fails the habitat loss test.',
    },
    {
      q: 'Which biodiversity hotspots cover the Andaman and the Nicobar Islands respectively?',
      steps: [
        'India has four hotspots: the Himalaya, Indo-Burma, the Western Ghats and Sri Lanka, and Sundaland.',
        'The Andaman Islands fall within Indo-Burma.',
        'The Nicobar Islands fall within Sundaland, which is the only way Sundaland reaches Indian territory.',
      ],
      answer: 'The Andamans in Indo-Burma; the Nicobars in Sundaland.',
    },
    {
      q: 'A species is listed as Near Threatened on the IUCN Red List. Is it a threatened species?',
      steps: [
        'The Red List has nine categories, of which three count as threatened: Critically Endangered, Endangered and Vulnerable.',
        'Near Threatened means the species is close to qualifying for one of those, or is likely to soon.',
        'It is therefore on the Red List but not in a threatened category — a distinction option lists exploit constantly.',
      ],
      answer: 'No — only Critically Endangered, Endangered and Vulnerable are threatened categories.',
    },
    {
      q: 'What is the difference between a national park and a wildlife sanctuary?',
      steps: [
        'Both are declared under the Wildlife Protection Act, but with different degrees of restriction.',
        'In a national park no grazing and no private tenurial rights are permitted, and habitat cannot be exploited.',
        'In a sanctuary the Chief Wildlife Warden may permit certain rights and regulated activities that do not harm wildlife, and a sanctuary can be upgraded to a national park.',
      ],
      answer: 'A national park is more strictly protected; a sanctuary permits regulated rights and activities.',
    },
    {
      q: 'Which two protocols sit under the Convention on Biological Diversity, and what does each cover?',
      steps: [
        'The Convention on Biological Diversity was adopted at Rio in 1992.',
        'The Cartagena Protocol, adopted in 2000, deals with biosafety — the transboundary movement of living modified organisms.',
        'The Nagoya Protocol, adopted in 2010, deals with access to genetic resources and the fair and equitable sharing of benefits arising from their use.',
      ],
      answer: 'Cartagena on biosafety, Nagoya on access and benefit sharing.',
    },
    {
      q: 'Why did Indian vulture populations collapse, and what was done?',
      steps: [
        'Vultures feeding on cattle carcasses ingested residues of the veterinary drug diclofenac.',
        'The drug caused renal failure in the birds, and populations of several species fell by more than ninety per cent within a decade.',
        'Veterinary use of diclofenac was banned, a substitute drug was promoted, and captive breeding programmes were established.',
      ],
      answer: 'Diclofenac poisoning from cattle carcasses; the veterinary use of the drug was banned.',
    },
    {
      q: 'Distinguish in situ from ex situ conservation and say which is preferred.',
      steps: [
        'In situ conservation protects a species in its natural habitat — national parks, sanctuaries, biosphere reserves, sacred groves.',
        'Ex situ conservation protects it outside that habitat — zoos, botanical gardens, seed and gene banks, cryopreservation.',
        'In situ is preferred because it conserves the whole ecosystem and the species continues to evolve in its natural setting; ex situ is a fallback for populations too small to survive in the wild.',
      ],
      answer: 'In situ is preferred; ex situ is a fallback and a genetic reservoir.',
    },
    {
      q: 'Which convention would govern a shipment of endangered animal skins across an international border?',
      steps: [
        'The subject is international trade in a threatened species, not habitat protection or pollution.',
        'The Convention on Biological Diversity covers conservation and benefit sharing, not trade regulation.',
        'CITES, signed in 1973 and in force from 1975, regulates international trade in endangered species through its three appendices.',
      ],
      answer: 'CITES.',
    },
  ],

  practice: [
    {
      q: 'How many biodiversity hotspots does India have?',
      options: ['Two', 'Three', 'Four', 'Six'],
      answer: 2,
      explain: 'The Himalaya, Indo-Burma, the Western Ghats and Sri Lanka, and Sundaland through the Nicobar Islands.',
    },
    {
      q: 'The concept of biodiversity hotspots was introduced by:',
      options: ['Norman Myers', 'Edward O. Wilson', 'Eugene Odum', 'Rachel Carson'],
      answer: 0,
      explain: 'Myers proposed it in 1988; Conservation International later developed the criteria.',
    },
    {
      q: 'Which of these is NOT a threatened category on the IUCN Red List?',
      options: ['Critically Endangered', 'Endangered', 'Vulnerable', 'Near Threatened'],
      answer: 3,
      explain: 'Only the first three are threatened categories. Near Threatened means close to qualifying but not yet there.',
    },
    {
      q: 'The Ramsar Convention concerns:',
      options: ['Migratory species', 'Wetlands', 'Hazardous waste', 'Persistent organic pollutants'],
      answer: 1,
      explain: 'Signed at Ramsar in Iran in 1971. India acceded in 1982.',
    },
    {
      q: 'The Convention on Biological Diversity was adopted at:',
      options: ['Stockholm in 1972', 'Rio de Janeiro in 1992', 'Nagoya in 2010', 'Montreal in 2022'],
      answer: 1,
      explain: 'At the Rio Earth Summit, alongside the UNFCCC, Agenda 21 and the Rio Declaration.',
    },
    {
      q: 'Project Tiger was launched in:',
      options: ['1972', '1973', '1980', '1992'],
      answer: 1,
      explain: 'It began in 1973 with nine reserves. The National Tiger Conservation Authority became statutory in 2006.',
    },
    {
      q: 'India\'s first biosphere reserve was:',
      options: ['Sundarbans', 'Nanda Devi', 'Nilgiri', 'Gulf of Mannar'],
      answer: 2,
      explain: 'The Nilgiri Biosphere Reserve was designated in 1986 under the Man and the Biosphere Programme.',
    },
    {
      q: 'The collapse of vulture populations in India was caused by:',
      options: ['Habitat loss', 'Diclofenac in cattle carcasses', 'Avian influenza', 'Poaching'],
      answer: 1,
      explain: 'The veterinary drug caused renal failure, and its veterinary use was subsequently banned.',
    },
    {
      q: 'The National Biodiversity Authority is located at:',
      options: ['New Delhi', 'Chennai', 'Bengaluru', 'Dehradun'],
      answer: 1,
      explain: 'Established under the Biological Diversity Act, 2002, with State Biodiversity Boards and local Biodiversity Management Committees below it.',
    },
    {
      q: 'Water hyacinth, an invasive aquatic weed, is also known as:',
      options: ['Congress grass', 'The terror of Bengal', 'Lantana', 'Prosopis'],
      answer: 1,
      explain: 'Eichhornia crassipes chokes water bodies. Congress grass is Parthenium, a terrestrial weed.',
    },
    {
      q: 'The Kunming-Montreal Global Biodiversity Framework replaced the:',
      options: ['Aichi Targets', 'Millennium Development Goals', 'Kyoto commitments', 'Bonn Challenge'],
      answer: 0,
      explain: 'Adopted at CBD COP15 in December 2022, with 23 targets for 2030 including the 30 by 30 commitment.',
    },
    {
      q: 'A protected area zoned into core, buffer and transition zones is a:',
      options: ['National park', 'Wildlife sanctuary', 'Biosphere reserve', 'Conservation reserve'],
      answer: 2,
      explain: 'The zonation comes from the UNESCO Man and the Biosphere Programme, and biosphere reserve is not a category under the Wildlife Protection Act.',
    },
    {
      q: 'India\'s first national park, established in 1936, is now known as:',
      options: ['Kanha', 'Jim Corbett', 'Bandipur', 'Kaziranga'],
      answer: 1,
      explain: 'Originally Hailey National Park, and among the first nine tiger reserves in 1973.',
    },
    {
      q: 'The Minamata Convention deals with:',
      options: ['Mercury', 'Lead', 'Cadmium', 'Arsenic'],
      answer: 0,
      explain: 'Adopted in 2013 and named after the Japanese city where methylmercury poisoning occurred.',
    },
    {
      q: 'The Montreux Record maintained under the Ramsar Convention lists:',
      options: ['New wetland designations', 'Sites where ecological character is threatened', 'Transboundary wetlands', 'Wetlands lost permanently'],
      answer: 1,
      explain: 'Keoladeo and Loktak are the Indian sites that have been placed on it.',
    },
    {
      q: 'The Wildlife (Protection) Act was enacted in:',
      options: ['1972', '1974', '1980', '1986'],
      answer: 0,
      explain: 'The Water Act came in 1974, the Forest (Conservation) Act in 1980 and the Environment (Protection) Act in 1986.',
    },
  ],

  faqs: [
    {
      q: 'What are the two criteria for a biodiversity hotspot?',
      a: 'At least 1,500 species of endemic vascular plants, and the loss of at least seventy per cent of the original primary vegetation. Both must be satisfied. This is why an area can be extremely rich and still not be a hotspot — the concept was designed to identify places that are simultaneously irreplaceable and under threat, so that limited conservation money goes where it matters most.',
    },
    {
      q: 'Does being on the IUCN Red List mean a species is endangered?',
      a: 'No, and this is the commonest error in the topic. The Red List is an assessment of all evaluated species and includes Least Concern and Near Threatened categories. Only Critically Endangered, Endangered and Vulnerable are threatened categories. A species can be on the Red List and perfectly secure.',
    },
    {
      q: 'How is a tiger reserve different from a national park?',
      a: 'They are different legal designations that usually overlap. A national park is declared for general wildlife protection. A tiger reserve is notified on the recommendation of the National Tiger Conservation Authority, has a critical tiger habitat as its core and a buffer zone around it, and is administered under the Project Tiger framework. Most tiger reserves are built around an existing national park or sanctuary rather than replacing it.',
    },
    {
      q: 'Which counts in this topic should I not memorise?',
      a: 'The number of national parks, wildlife sanctuaries, tiger reserves, elephant reserves, biosphere reserves and Ramsar sites; the tiger population estimate; and the IUCN status of any particular species. All of these are revised, sometimes annually. Learn what each designation means and where the well-known areas are, and take the counts from the Ministry of Environment or the relevant authority close to the exam.',
    },
    {
      q: 'What is the difference between the Cartagena and Nagoya Protocols?',
      a: 'Both sit under the Convention on Biological Diversity. Cartagena, adopted in 2000, concerns biosafety — the safe handling and transboundary movement of living modified organisms. Nagoya, adopted in 2010, concerns access to genetic resources and the fair and equitable sharing of the benefits arising from their use, which is what the Biological Diversity Act implements in India.',
    },
    {
      q: 'Why are invasive species such a problem?',
      a: 'Because they arrive without the predators, parasites and competitors that limited them at home, so they can spread unchecked and displace native species. Lantana has taken over vast areas of Indian forest understorey, water hyacinth chokes water bodies, and Parthenium is both an aggressive weed and a human allergen. Invasion is the second largest driver of biodiversity loss after habitat destruction.',
    },
    {
      q: 'What is the significance of sacred groves?',
      a: 'They are patches of forest protected by community religious tradition, often for many centuries, and are frequently richer in native species than the surrounding managed land. They are the oldest form of in situ conservation in India, they demonstrate that community-based protection can work without state enforcement, and they are known by different local names in different states — kavu, devrai, sarna, law kyntang, orans.',
    },
    {
      q: 'How should I revise the international conventions?',
      a: 'As a single table of subject, year and place, learnt in chronological order. Almost every question in this area asks which convention covers which subject, and the options are always the other conventions. Ramsar for wetlands, CITES for trade, Bonn for migratory species, Basel for hazardous waste, CBD for biodiversity, Rotterdam for chemicals, Stockholm for persistent organic pollutants, Minamata for mercury.',
    },
    {
      q: 'What did the 2022 amendment to the Wildlife Protection Act change?',
      a: 'It restructured the schedules. Instead of six schedules, animals are now covered by Schedules I and II, with Schedule I carrying the highest protection, Schedule III covers plants, and Schedule IV covers specimens listed under CITES. The amendment was made in part to give effect to India\'s CITES obligations, and older material describing six schedules is out of date.',
    },
    {
      q: 'How many questions come from biodiversity and conservation?',
      a: 'Six to ten in UPSC Prelims GS Paper 1, which makes it the densest sub-block of the environment section; three to five in state PSC prelims, usually with attention to the state\'s own protected areas; one to two in SSC CGL Tier 1; and fifteen or more in the Indian Forest Service examination.',
    },
  ],

  related: [
    { label: 'Ecology & Ecosystems', to: '/study-material/environment/ecology-and-ecosystems/' },
    { label: 'Climate Change & Agreements', to: '/study-material/environment/climate-change/' },
    { label: 'Indian Geography', to: '/study-material/geography/indian-geography/' },
    { label: 'Biology', to: '/study-material/biology/' },
    { label: 'All Environment', to: '/study-material/environment/' },
  ],
}
