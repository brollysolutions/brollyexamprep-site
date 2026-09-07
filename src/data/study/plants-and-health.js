/**
 * Plants, Nutrition and Health —
 * /study-material/biology/plants-and-health/
 *
 * Classification, plant biology, and the nutrition and disease material that
 * general awareness papers ask most heavily. The third of the biology pages,
 * covering what the cell and physiology pages do not.
 */
export default {
  subject: 'biology',
  subjectName: 'Biology',
  slug: 'plants-and-health',
  title: 'Plants, Nutrition & Health',
  seoTitle: 'Plant Biology, Nutrition and Diseases | Notes & Practice Questions',
  metaDescription:
    'Complete plant biology, nutrition and health study material for NEET, SSC, RRB and state exams — classification of living things, plant tissues.',
  readMinutes: 24,
  lead: [
    'This page covers three things the other biology pages do not: how living things are classified, how plants work, and the nutrition and disease material that dominates the biology share of general awareness papers.',
    'The nutrition and health sections in particular repay attention out of proportion to their length. Which vitamin deficiency causes which disease, which organism causes which illness and which mosquito carries which infection are asked in almost identical form by SSC, RRB and state papers year after year, and all three are pure pairings.',
  ],

  weightage: [
    { exam: 'NEET Biology', count: '15–20 questions', note: 'Plant physiology, classification and diversity together form the botany half of the paper.' },
    { exam: 'RRB NTPC / Group D', count: '3–5 questions', note: 'Deficiency diseases and pathogens are the most reliably asked items in the whole science section.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Vitamins, diseases, plant hormones and classification.' },
    { exam: 'UPSC Prelims GS Paper 1', count: '1–3 questions', note: 'Usually a disease, a nutrition programme or an agricultural biotechnology issue.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'Often alongside the state\'s own health and nutrition schemes.' },
  ],

  contents: [
    { icon: 'layers', title: 'Classification', sub: 'Kingdoms and nomenclature', href: '#classification' },
    { icon: 'globe', title: 'Plant structure', sub: 'Tissues, xylem and phloem', href: '#structure' },
    { icon: 'play', title: 'Photosynthesis', sub: 'How plants make food', href: '#photosynthesis' },
    { icon: 'refresh', title: 'Transport and tropism', sub: 'Transpiration and plant hormones', href: '#processes' },
    { icon: 'target', title: 'Plant reproduction', sub: 'Flowers, pollination, seeds', href: '#reproduction' },
    { icon: 'chart', title: 'Nutrition', sub: 'Nutrients and deficiency diseases', href: '#nutrition' },
    { icon: 'bell', title: 'Disease and immunity', sub: 'Pathogens, vectors and vaccines', href: '#disease' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'classification',
      heading: 'Classification',
      eyebrow: 'Kingdoms and nomenclature',
      intro:
        'How biologists organise about two million described species, and the naming system that lets a scientist anywhere identify exactly which organism is meant.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Binomial nomenclature',
              'Introduced by Carolus Linnaeus, who is called the father of taxonomy. Every species receives a two-part Latin name: the genus, written with a capital initial, followed by the species, in lower case, both italicised or underlined. Homo sapiens, Mangifera indica for mango, Panthera tigris for tiger. The convention removes the ambiguity of common names, which differ between languages and regions.',
            ],
            [
              'The taxonomic hierarchy',
              'Kingdom, Phylum — called Division in plants — Class, Order, Family, Genus, Species, in descending order of breadth. Species is the basic unit, defined as a group of organisms capable of interbreeding to produce fertile offspring.',
            ],
            [
              'The five kingdoms',
              'Proposed by R. H. Whittaker in 1969, using cell structure, mode of nutrition and body organisation. Monera comprises prokaryotes — bacteria and cyanobacteria. Protista comprises single-celled eukaryotes such as amoeba and paramecium. Fungi are eukaryotic, have chitin cell walls and are saprophytic. Plantae are multicellular autotrophs with cellulose cell walls. Animalia are multicellular heterotrophs without cell walls. Viruses are not placed in any kingdom, since they are not cellular and cannot reproduce outside a host.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Divisions of the plant kingdom',
          head: ['Division', 'Character', 'Examples'],
          rows: [
            ['Thallophyta', 'Body not differentiated into root, stem and leaf; no vascular tissue', 'Algae — spirogyra, ulothrix, chara.'],
            ['Bryophyta', 'Amphibians of the plant kingdom: they live on land but need water for reproduction; no true vascular tissue', 'Mosses and liverworts — funaria, marchantia, riccia.'],
            ['Pteridophyta', 'The first plants with true vascular tissue and differentiated body; reproduce by spores, not seeds', 'Ferns — pteris, marsilea; also horsetails.'],
            ['Gymnosperms', 'Bear naked seeds, not enclosed in a fruit; usually evergreen and woody', 'Pine, cycas, deodar.'],
            ['Angiosperms', 'Flowering plants; seeds enclosed in a fruit. Divided into monocots with one cotyledon and dicots with two', 'Almost all crop plants. Monocots have parallel venation and fibrous roots; dicots have reticulate venation and tap roots.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The animal phyla worth naming',
              'Porifera, the sponges, with pores through the body. Coelenterata, including jellyfish and corals. Platyhelminthes, the flatworms. Nematoda, the roundworms. Annelida, the segmented worms such as earthworms. Arthropoda, with jointed legs and an exoskeleton, the largest phylum in the animal kingdom, containing insects, crustaceans and spiders. Mollusca, the second largest, including snails and octopuses. Echinodermata, the spiny-skinned marine animals such as starfish. Chordata, with a notochord, including all vertebrates.',
            ],
            [
              'Vertebrate classes',
              'Pisces the fish, Amphibia which live both in water and on land, Reptilia which are cold-blooded and lay eggs on land, Aves the birds, and Mammalia which have hair, mammary glands and are warm-blooded. Birds and mammals are the only warm-blooded classes. The whale and the bat are mammals, not fish and birds, which is a favourite question.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'structure',
      heading: 'Plant structure',
      eyebrow: 'Tissues, xylem and phloem',
      intro:
        'A plant is built from a small number of tissue types, and the contrast between its two conducting tissues accounts for most of the questions here.',
      blocks: [
        {
          type: 'table',
          caption: 'Xylem and phloem compared',
          head: ['Feature', 'Xylem', 'Phloem'],
          rows: [
            ['What it carries', 'Water and dissolved minerals', 'Food, chiefly sucrose made in the leaves'],
            ['Direction', 'Upward only, from root to leaf', 'Both directions, from source to wherever it is needed'],
            ['Cell condition', 'Mostly dead cells at maturity — tracheids and vessels', 'Living cells — sieve tubes with companion cells'],
            ['Driving force', 'Transpiration pull and root pressure; no energy expended by the plant', 'Active, requiring energy — the pressure-flow mechanism'],
            ['Additional role', 'Provides mechanical support; wood is largely dead xylem', 'None structural'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Meristematic and permanent tissue',
              'Meristematic tissue consists of actively dividing cells and is responsible for growth. Apical meristem at root and shoot tips increases length; lateral meristem or cambium increases girth; intercalary meristem at the base of leaves and internodes allows grasses to regrow after grazing or mowing. Permanent tissue is derived from meristem and no longer divides.',
            ],
            [
              'The three simple permanent tissues',
              'Parenchyma is thin-walled and packs the body, storing food and, when it contains chloroplasts, performing photosynthesis. Collenchyma has thickened corners and gives flexible support to young stems. Sclerenchyma is thick-walled, lignified and dead, and provides rigid support — it is what makes the husk of a coconut tough.',
            ],
            [
              'Plant organs',
              'The root anchors, absorbs water and minerals, and often stores food. The stem conducts, supports and bears the leaves. The leaf is the site of photosynthesis and transpiration. The flower is the reproductive organ. Modified organs recur in questions: the potato is a modified stem and not a root, the ginger rhizome is also a stem, the carrot and radish are modified roots, and the onion is a modified underground stem with fleshy leaves.',
            ],
            [
              'Stomata',
              'Tiny pores, mostly on the underside of the leaf, each bounded by two guard cells. They open when the guard cells take up water and become turgid, and close when they lose it. They admit carbon dioxide for photosynthesis and are the route by which water vapour escapes in transpiration — the plant must therefore trade water loss against carbon dioxide intake, which is the central compromise of plant life on land.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'photosynthesis',
      heading: 'Photosynthesis',
      eyebrow: 'How plants make food',
      intro:
        'The process on which almost all life depends, since it is the entry point of energy into the biosphere and the source of atmospheric oxygen.',
      blocks: [
        {
          type: 'formula',
          title: 'The overall reaction',
          items: [
            { expr: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂, in the presence of light and chlorophyll', note: 'Carbon dioxide and water become glucose and oxygen. The oxygen released comes from the water, not from the carbon dioxide.' },
            { expr: 'Respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy', note: 'Exactly the reverse — which is why the two processes are described as complementary.' },
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Where and how',
              'In the chloroplasts, which contain chlorophyll. The light-dependent reactions occur in the thylakoid membranes, splitting water and producing ATP and reducing power along with oxygen. The light-independent reactions, the Calvin cycle, occur in the stroma and fix carbon dioxide into glucose. The dark reaction does not require darkness — it requires only that light is not directly involved, which is why the older name misleads.',
            ],
            [
              'Why leaves are green',
              'Chlorophyll absorbs strongly in the blue and the red parts of the spectrum and reflects green, which is why the green light reaches our eyes. It follows that green light is the least effective for photosynthesis, a point examiners like. Accessory pigments such as carotenoids absorb other wavelengths and pass the energy on, and they are what colour autumn leaves once the chlorophyll degrades.',
            ],
            [
              'Limiting factors',
              'Light intensity, carbon dioxide concentration, temperature and water availability. The rate is limited by whichever is scarcest, so increasing the others has no effect — which is Liebig\'s law applied to photosynthesis, and the reason commercial greenhouses enrich the air with carbon dioxide.',
            ],
            [
              'Modes of nutrition',
              'Autotrophic organisms make their own food — green plants photosynthetically, some bacteria chemosynthetically. Heterotrophic organisms cannot: saprophytes such as fungi feed on dead organic matter, parasites such as cuscuta and tapeworm feed on a living host, and holozoic organisms ingest solid food. Insectivorous plants such as the pitcher plant and Venus flytrap photosynthesise but trap insects for nitrogen, because they grow in nitrogen-poor soil.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'processes',
      heading: 'Transport and tropism',
      eyebrow: 'Transpiration and plant hormones',
      intro:
        'How water reaches the top of a tall tree without a pump, and how a plant that cannot move nonetheless responds to its surroundings.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Transpiration',
              'The loss of water as vapour, mainly through the stomata. It is often called a necessary evil: it wastes water, but the resulting suction — the transpiration pull — is what draws water up the xylem from the roots, and the evaporation cools the leaf. Root pressure contributes at night and in short plants, but transpiration pull is the main force in a tall tree, and no energy is expended by the plant in the process.',
            ],
            [
              'Guttation',
              'The exudation of liquid water, not vapour, from the margins of leaves, usually at night or in humid conditions when transpiration is suppressed and root pressure continues. The droplets seen on grass at dawn may be guttation or dew, and the two are distinguished in questions — dew condenses from the air, guttation comes from inside the plant.',
            ],
            [
              'Plant hormones',
              'Auxin promotes cell elongation and is responsible for phototropism, since it accumulates on the shaded side of a shoot and makes that side grow faster, bending the plant towards light. Gibberellin promotes stem elongation and seed germination. Cytokinin promotes cell division and delays ageing of leaves. Abscisic acid is the stress hormone: it inhibits growth and closes stomata during drought. Ethylene is a gas and promotes fruit ripening, which is why one ripe fruit hastens the ripening of others nearby.',
            ],
            [
              'Tropisms',
              'A directional growth response to a stimulus. Phototropism is a response to light — shoots are positively phototropic and roots negatively so. Geotropism or gravitropism is a response to gravity — roots positively, shoots negatively. Hydrotropism is a response to water, thigmotropism to touch, as in the tendrils of a climbing plant, and chemotropism to chemicals, as in the growth of a pollen tube towards the ovule.',
            ],
            [
              'Nastic movements',
              'Non-directional responses, where the direction of the stimulus does not determine the direction of the response. The folding of the leaves of Mimosa pudica, the touch-me-not, when touched is the standard example. It is not a tropism, because the leaves fold the same way whichever side is touched.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'reproduction',
      heading: 'Plant reproduction',
      eyebrow: 'Flowers, pollination, seeds',
      intro:
        'Both asexual and sexual routes, and the flower structure that every question about pollination assumes.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Parts of a flower',
              'From the outside inward: sepals, collectively the calyx, protecting the bud; petals, the corolla, usually coloured to attract pollinators; stamens, the male parts, each an anther on a filament, producing pollen; and the pistil or carpel, the female part, comprising the stigma which receives pollen, the style, and the ovary containing the ovules. A flower with both stamens and pistil is bisexual; one with only one is unisexual.',
            ],
            [
              'Pollination and fertilisation',
              'Pollination is the transfer of pollen from anther to stigma — self-pollination within the same flower or plant, cross-pollination between different plants. Agents include wind, water, insects, birds and bats. Fertilisation follows, when the pollen tube grows down the style and the male gamete fuses with the egg. In flowering plants double fertilisation occurs: one male gamete fuses with the egg to form the zygote and the other with the polar nuclei to form the endosperm that nourishes it.',
            ],
            [
              'After fertilisation',
              'The ovule becomes the seed and the ovary becomes the fruit. This is why a fruit is defined botanically as a ripened ovary, which makes the tomato, the cucumber and the chilli fruits rather than vegetables. In a false fruit such as the apple, the fleshy part develops from the thalamus rather than the ovary.',
            ],
            [
              'Asexual reproduction',
              'Vegetative propagation from stems, roots or leaves — potato tubers, ginger rhizomes, and the leaves of bryophyllum, which sprout new plants from their margins. Budding, as in yeast and hydra. Fragmentation, as in spirogyra. Spore formation, as in fungi and ferns. Artificial methods include cutting, layering, grafting and tissue culture. Asexual reproduction produces genetically identical offspring, which preserves a desirable variety exactly but leaves the whole population vulnerable to a single disease.',
            ],
            [
              'Seed dispersal',
              'By wind, as in the winged seeds of the drumstick and the parachute of the dandelion; by water, as in the coconut; by animals, in fleshy fruits eaten and excreted, or by hooks that catch on fur; and by explosive mechanisms, as in the balsam. Dispersal prevents overcrowding and competition with the parent plant.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'nutrition',
      heading: 'Nutrition',
      eyebrow: 'Nutrients and deficiency diseases',
      intro:
        'The single most examined table in the whole science syllabus, and the reason is that it needs no reasoning at all — only the pairing of a nutrient with the disease its absence causes.',
      blocks: [
        {
          type: 'table',
          caption: 'Deficiency diseases',
          head: ['Nutrient', 'Deficiency causes', 'Sources'],
          rows: [
            ['Vitamin A (retinol)', 'Night blindness and xerophthalmia', 'Carrots, green leafy vegetables, liver, milk. Fat-soluble.'],
            ['Vitamin B1 (thiamine)', 'Beriberi, affecting the nerves and heart', 'Whole grains, pulses. Polished rice loses it, which is how beriberi became widespread.'],
            ['Vitamin B3 (niacin)', 'Pellagra — dermatitis, diarrhoea and dementia', 'Meat, groundnuts, whole grains.'],
            ['Vitamin B12 (cobalamin)', 'Pernicious anaemia', 'Almost exclusively animal foods, so strict vegetarians may need a supplement.'],
            ['Vitamin C (ascorbic acid)', 'Scurvy — bleeding gums and poor wound healing', 'Citrus fruit, amla, guava. Water-soluble and destroyed by prolonged cooking.'],
            ['Vitamin D (calciferol)', 'Rickets in children, osteomalacia in adults', 'Synthesised in the skin under sunlight; also in fish oil and egg yolk.'],
            ['Vitamin K', 'Impaired blood clotting', 'Green leafy vegetables; also synthesised by gut bacteria.'],
            ['Iron', 'Anaemia', 'Green leafy vegetables, jaggery, meat. Anaemia is India\'s most widespread nutritional deficiency.'],
            ['Iodine', 'Goitre, and impaired development in children', 'Iodised salt and seafood.'],
            ['Protein', 'Kwashiorkor; with energy deficiency as well, marasmus', 'Pulses, milk, eggs, meat.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Macronutrients and micronutrients',
              'Carbohydrates, proteins and fats are needed in large quantities and supply energy — about four kilocalories per gram for carbohydrate and protein and nine for fat. Vitamins and minerals are micronutrients, needed in small amounts, supplying no energy but essential to metabolism. Water and roughage complete a balanced diet; roughage supplies no nutrients but is needed for the movement of food through the gut.',
            ],
            [
              'Fat-soluble and water-soluble vitamins',
              'A, D, E and K are fat-soluble, are stored in the body, and can accumulate to toxic levels in excess. The B group and C are water-soluble, are not stored and must be supplied regularly, and any surplus is excreted. This is why an excess of vitamin A or D is dangerous while an excess of vitamin C is merely wasteful.',
            ],
            [
              'Malnutrition in India',
              'Undernutrition is measured as stunting, low height for age; wasting, low weight for height; and being underweight. Anaemia among women and children remains widespread. The National Family Health Survey is the source of the figures, and they are revised with each round, so quote the survey rather than a number. Programmes include the Integrated Child Development Services, the mid-day meal scheme now called PM POSHAN, and POSHAN Abhiyaan.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'disease',
      heading: 'Disease and immunity',
      eyebrow: 'Pathogens, vectors and vaccines',
      intro:
        'The second great pairing table: disease with causative organism, and disease with vector. Between them they account for a large share of the science questions in railway and SSC papers.',
      blocks: [
        {
          type: 'table',
          caption: 'Diseases by causative agent',
          head: ['Agent', 'Diseases', 'Note'],
          rows: [
            ['Bacteria', 'Tuberculosis, cholera, typhoid, tetanus, plague, leprosy, diphtheria, whooping cough, anthrax', 'Treatable with antibiotics. Tuberculosis is caused by Mycobacterium tuberculosis, identified by Robert Koch.'],
            ['Virus', 'Influenza, measles, mumps, chickenpox, rabies, polio, hepatitis, dengue, chikungunya, AIDS, COVID-19', 'Antibiotics have no effect. Prevention is by vaccination; smallpox is the only human disease eradicated worldwide.'],
            ['Protozoa', 'Malaria, amoebic dysentery, kala-azar, sleeping sickness', 'Malaria is caused by Plasmodium and transmitted by the female Anopheles mosquito.'],
            ['Fungi', 'Ringworm, athlete\'s foot, candidiasis', 'Despite its name, ringworm is fungal and not caused by a worm.'],
            ['Helminths', 'Filariasis, ascariasis, taeniasis', 'Parasitic worms, transmitted through contaminated food, water or vectors.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Vectors',
              'The female Anopheles mosquito transmits malaria. Aedes transmits dengue, chikungunya, Zika and yellow fever, and breeds in clean stagnant water in and around houses — which is why prevention focuses on emptying containers rather than on marshes. Culex transmits filariasis and Japanese encephalitis. The sandfly transmits kala-azar, the housefly carries typhoid and cholera mechanically, and the rat flea carries plague.',
            ],
            [
              'Communicable and non-communicable',
              'Communicable or infectious diseases spread from person to person, directly or through air, water, food or a vector. Non-communicable diseases — diabetes, hypertension, cardiovascular disease, cancer, chronic respiratory disease — do not spread, and are now the larger share of the disease burden in India. They are largely associated with diet, tobacco, alcohol, inactivity and pollution.',
            ],
            [
              'Immunity and vaccination',
              'A vaccine introduces a weakened, killed or partial form of a pathogen, or the instructions to make part of it, so that the immune system produces antibodies and memory cells without the person suffering the disease. Edward Jenner developed the first vaccine, against smallpox, and Louis Pasteur developed vaccines for rabies and anthrax and gave the process its name, from vacca, Latin for cow. Herd immunity protects those who cannot be vaccinated, once a sufficient proportion of the population is immune.',
            ],
            [
              'India\'s health programmes',
              'The Universal Immunisation Programme and Mission Indradhanush for childhood vaccination; the National Tuberculosis Elimination Programme; the National Vector Borne Disease Control Programme; Ayushman Bharat, comprising health and wellness centres and the PM Jan Arogya Yojana health insurance scheme; and the National Health Mission. Programme names and targets change, so learn what each addresses and verify the current position.',
            ],
            [
              'Antibiotic resistance',
              'Bacteria surviving an incomplete or unnecessary course of antibiotics multiply and pass resistance on, so drugs that once worked stop working. This is why courses must be completed, why antibiotics should not be taken for viral illnesses, and why their use in animal husbandry is now regulated. It appears in both the science and the public health sections of papers.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Where does the oxygen released in photosynthesis come from?',
      steps: [
        'The overall equation has carbon dioxide and water as reactants, so either could in principle supply the oxygen.',
        'Isotope-labelling experiments, using water containing a heavy isotope of oxygen, showed that the released oxygen carried that label.',
        'The oxygen therefore comes from the splitting of water in the light reaction, not from carbon dioxide.',
      ],
      answer: 'From water, split during the light-dependent reaction.',
    },
    {
      q: 'Why is transpiration called a necessary evil?',
      steps: [
        'It loses the plant a great deal of water — far more than it uses in photosynthesis — which is a cost, particularly in dry conditions.',
        'But the resulting suction, the transpiration pull, is what draws water up the xylem from the roots to the top of a tall tree, without the plant expending energy.',
        'It also cools the leaf by evaporation. The loss is unavoidable because the stomata must open to admit carbon dioxide, so the plant cannot have one without the other.',
      ],
      answer: 'It wastes water, but it drives water transport and cools the leaf, and cannot be avoided while stomata are open.',
    },
    {
      q: 'A plant grows towards a window. Explain the mechanism.',
      steps: [
        'This is phototropism, a directional growth response to light.',
        'The hormone auxin, which promotes cell elongation, accumulates on the shaded side of the shoot.',
        'Cells on that side therefore elongate more than those on the lit side, and the differential growth bends the shoot towards the light.',
      ],
      answer: 'Positive phototropism, caused by auxin accumulating on the shaded side.',
    },
    {
      q: 'Why can a potato be planted to grow a new plant while a carrot cannot?',
      steps: [
        'Vegetative propagation requires buds, which are present on stems but not on roots.',
        'The potato is a modified underground stem — a tuber — and its "eyes" are buds, so each piece with an eye can grow a new plant.',
        'The carrot is a modified root, storing food but bearing no buds, so it cannot propagate this way.',
      ],
      answer: 'The potato is a stem with buds; the carrot is a root without them.',
    },
    {
      q: 'Which vitamin deficiency causes scurvy, and why is prolonged cooking a problem?',
      steps: [
        'Scurvy, with bleeding gums and poor wound healing, results from deficiency of vitamin C, ascorbic acid, which is needed for collagen synthesis.',
        'Vitamin C is water-soluble and is not stored in the body, so it must be supplied regularly.',
        'It is also heat-sensitive and dissolves into cooking water, so prolonged boiling destroys much of it — which is why fresh fruit is the reliable source.',
      ],
      answer: 'Vitamin C — water-soluble, unstored and destroyed by heat.',
    },
    {
      q: 'Aedes and Anopheles both transmit disease. How does the difference guide prevention?',
      steps: [
        'The female Anopheles transmits malaria and breeds in relatively clean standing water in ponds, ditches and paddy fields.',
        'Aedes transmits dengue, chikungunya and Zika, and breeds in small collections of clean water in and around houses — coolers, tyres, flowerpots, water tanks.',
        'So dengue prevention concentrates on domestic container management, while malaria control also involves larger water bodies and indoor residual spraying.',
      ],
      answer: 'Aedes breeds domestically in small clean water collections; prevention therefore targets the household.',
    },
    {
      q: 'Botanically, is a tomato a fruit or a vegetable?',
      steps: [
        'A fruit is defined botanically as a ripened ovary containing seeds.',
        'The tomato develops from the ovary of the flower and contains seeds.',
        'It is therefore a fruit botanically, as are the cucumber, the chilli and the brinjal, even though all are used as vegetables in cooking.',
      ],
      answer: 'A fruit, because it is a ripened ovary containing seeds.',
    },
    {
      q: 'Why does an unripe fruit ripen faster when kept with a ripe one?',
      steps: [
        'Ripening is promoted by the plant hormone ethylene.',
        'Ethylene is a gas, and a ripening fruit releases it into the surrounding air.',
        'An unripe fruit nearby absorbs that ethylene and its own ripening accelerates — which is why fruit is stored in paper bags to ripen and why ethylene is used commercially.',
      ],
      answer: 'Because ethylene, the ripening hormone, is a gas and spreads from the ripe fruit.',
    },
  ],

  practice: [
    {
      q: 'Binomial nomenclature was introduced by:',
      options: ['Carolus Linnaeus', 'R. H. Whittaker', 'Charles Darwin', 'Robert Hooke'],
      answer: 0,
      explain: 'He is called the father of taxonomy. Whittaker proposed the five-kingdom classification in 1969.',
    },
    {
      q: 'Which tissue conducts water in a plant?',
      options: ['Phloem', 'Xylem', 'Parenchyma', 'Collenchyma'],
      answer: 1,
      explain: 'Xylem carries water upward through mostly dead cells; phloem carries food in both directions through living cells.',
    },
    {
      q: 'Photosynthesis occurs in the:',
      options: ['Mitochondrion', 'Chloroplast', 'Ribosome', 'Nucleus'],
      answer: 1,
      explain: 'The light reaction occurs in the thylakoid membranes and the Calvin cycle in the stroma.',
    },
    {
      q: 'The plant hormone responsible for fruit ripening is:',
      options: ['Auxin', 'Gibberellin', 'Cytokinin', 'Ethylene'],
      answer: 3,
      explain: 'It is a gas, which is why one ripe fruit hastens the ripening of others nearby.',
    },
    {
      q: 'The potato is a modified:',
      options: ['Root', 'Stem', 'Leaf', 'Flower'],
      answer: 1,
      explain: 'An underground stem tuber, whose eyes are buds. The carrot and radish are modified roots.',
    },
    {
      q: 'Bryophytes are called the amphibians of the plant kingdom because they:',
      options: ['Live only in water', 'Live on land but need water for reproduction', 'Have true vascular tissue', 'Bear naked seeds'],
      answer: 1,
      explain: 'Mosses and liverworts require a film of water for their gametes to move.',
    },
    {
      q: 'Beriberi is caused by deficiency of:',
      options: ['Vitamin A', 'Vitamin B1', 'Vitamin C', 'Vitamin D'],
      answer: 1,
      explain: 'Thiamine. Its loss from polished rice is how the disease became widespread in rice-eating populations.',
    },
    {
      q: 'Which disease is caused by a protozoan?',
      options: ['Tuberculosis', 'Malaria', 'Influenza', 'Ringworm'],
      answer: 1,
      explain: 'Plasmodium causes malaria. Tuberculosis is bacterial, influenza viral and ringworm fungal.',
    },
    {
      q: 'The largest phylum in the animal kingdom is:',
      options: ['Chordata', 'Mollusca', 'Arthropoda', 'Annelida'],
      answer: 2,
      explain: 'Jointed legs and an exoskeleton; it includes insects, crustaceans and spiders. Mollusca is second largest.',
    },
    {
      q: 'Kwashiorkor is caused by deficiency of:',
      options: ['Carbohydrate', 'Protein', 'Fat', 'Iron'],
      answer: 1,
      explain: 'Combined protein and energy deficiency causes marasmus.',
    },
    {
      q: 'Stomata are mainly responsible for:',
      options: ['Absorption of water', 'Gas exchange and transpiration', 'Conduction of food', 'Storage of starch'],
      answer: 1,
      explain: 'They admit carbon dioxide and allow water vapour to escape, and are controlled by guard cells.',
    },
    {
      q: 'Insectivorous plants trap insects mainly to obtain:',
      options: ['Energy', 'Nitrogen', 'Carbon', 'Water'],
      answer: 1,
      explain: 'They photosynthesise normally but grow in nitrogen-poor soil, so they obtain nitrogen from prey.',
    },
    {
      q: 'The first vaccine was developed by:',
      options: ['Louis Pasteur', 'Edward Jenner', 'Alexander Fleming', 'Robert Koch'],
      answer: 1,
      explain: 'Jenner developed the smallpox vaccine; Pasteur later developed vaccines for rabies and anthrax and named the process.',
    },
    {
      q: 'Which of these is a non-communicable disease?',
      options: ['Diabetes', 'Cholera', 'Tuberculosis', 'Dengue'],
      answer: 0,
      explain: 'Non-communicable diseases do not spread between people and now form the larger share of India\'s disease burden.',
    },
    {
      q: 'Gymnosperms are characterised by:',
      options: ['Naked seeds', 'Seeds enclosed in a fruit', 'Reproduction by spores', 'Absence of vascular tissue'],
      answer: 0,
      explain: 'Pine, cycas and deodar. Angiosperms have seeds enclosed in a fruit.',
    },
    {
      q: 'Roots growing downward is an example of:',
      options: ['Phototropism', 'Positive geotropism', 'Hydrotropism', 'Thigmotropism'],
      answer: 1,
      explain: 'Roots are positively geotropic and shoots negatively so.',
    },
  ],

  faqs: [
    {
      q: 'Why is this the highest-yield biology topic for general awareness papers?',
      a: 'Because the nutrition and disease sections are pure pairings — vitamin with deficiency disease, organism with illness, mosquito with infection. They need no reasoning, they never change, and RRB and SSC papers ask them in almost identical wording every year. Two evenings on those two tables is among the best returns on time in the whole syllabus.',
    },
    {
      q: 'What is the difference between xylem and phloem?',
      a: 'Xylem carries water and minerals upward only, through cells that are dead at maturity, driven by transpiration pull with no energy cost to the plant, and it also provides mechanical support — wood is largely dead xylem. Phloem carries food in both directions through living sieve tubes, and the process requires energy. The contrast between them is the most asked question in plant biology.',
    },
    {
      q: 'Is the dark reaction of photosynthesis performed in the dark?',
      a: 'No, and the name is misleading. The light-independent or Calvin cycle reactions do not use light directly, but they depend on the ATP and reducing power produced by the light reactions, so they stop soon after light does. In a normally lit plant both sets of reactions run at the same time. The modern name, light-independent reactions, avoids the confusion.',
    },
    {
      q: 'Why is green light least effective for photosynthesis?',
      a: 'Because chlorophyll absorbs strongly in the blue and red regions and reflects green — which is precisely why leaves look green. Light that is reflected rather than absorbed contributes no energy to the process. The action spectrum of photosynthesis therefore peaks in blue and red and dips in green, and the dip is directly examinable.',
    },
    {
      q: 'Is a tomato a fruit or a vegetable?',
      a: 'Botanically a fruit, because it develops from the ovary of the flower and contains seeds. In culinary terms it is treated as a vegetable, since it is savoury. The same applies to the cucumber, chilli, brinjal and pumpkin. Questions on this always mean the botanical definition, which is the ripened ovary.',
    },
    {
      q: 'Why do strict vegetarians need to watch vitamin B12?',
      a: 'Because it occurs almost exclusively in animal foods — meat, fish, eggs and dairy. Plants do not synthesise it, and the small amounts from fermented foods or contamination are unreliable. Deficiency causes pernicious anaemia and neurological damage, and it develops slowly because the liver stores several years\' worth, which is why it can go unnoticed.',
    },
    {
      q: 'Why does dengue prevention focus on household containers?',
      a: 'Because Aedes, the vector, breeds in small collections of clean water in and around houses — desert coolers, discarded tyres, flowerpot saucers, uncovered tanks. It does not need a pond or marsh. That is why the practical advice is to empty and dry containers weekly rather than to spray water bodies, and why the disease is characteristically urban.',
    },
    {
      q: 'Why must a course of antibiotics be completed?',
      a: 'Because stopping early leaves behind the bacteria least susceptible to the drug — the ones that survived longest. Those multiply, and the resistance spreads. Completing the course kills the population before resistant survivors can establish. The same logic explains why antibiotics should never be taken for viral illnesses, where they cannot help and can only select for resistance.',
    },
    {
      q: 'Which figures in this topic should I not memorise?',
      a: 'Anything from a survey: stunting, wasting and anaemia percentages come from the National Family Health Survey and are revised with each round; immunisation coverage; and disease incidence figures. Programme names also change. Learn the concepts, the pairings and what each programme addresses, and take the numbers from the current release.',
    },
    {
      q: 'How many questions come from this page?',
      a: 'Fifteen to twenty in NEET across the botany half; three to five in RRB NTPC and Group D, where deficiency diseases and pathogens are the single most reliable items; two to three in SSC CGL Tier 1 and in state PSC prelims; and one to three in UPSC Prelims, usually applied to a health or agricultural policy question.',
    },
  ],

  related: [
    { label: 'Cell Biology & Genetics', to: '/study-material/biology/cell-and-genetics/' },
    { label: 'Human Physiology', to: '/study-material/biology/human-physiology/' },
    { label: 'Ecology & Ecosystems', to: '/study-material/environment/ecology-and-ecosystems/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'All Biology', to: '/study-material/biology/' },
  ],
}
