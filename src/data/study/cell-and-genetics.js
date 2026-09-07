/**
 * Cell Biology and Genetics —
 * /study-material/biology/cell-and-genetics/
 *
 * The foundation of the biology syllabus: what a cell is made of, how it
 * divides, how characteristics pass between generations, and how the same
 * mechanism produced the diversity of life.
 */
export default {
  subject: 'biology',
  subjectName: 'Biology',
  slug: 'cell-and-genetics',
  title: 'Cell Biology & Genetics',
  seoTitle: 'Cell Biology and Genetics | Organelles, Mendel, DNA Notes & Practice',
  metaDescription:
    'Complete cell biology and genetics study material for NEET, SSC, RRB and state exams — cell structure and organelles, mitosis and meiosis.',
  readMinutes: 24,
  lead: [
    'Biology carries more general-awareness marks than physics and chemistry combined, and this page is where it starts. The cell is the unit of structure and function in every living thing, and genetics is the mechanism by which that structure is copied — so almost every later topic, from human physiology to biotechnology, assumes what is here.',
    'The material is organised as structure, then division, then inheritance, then evolution, because that is the order in which each idea depends on the previous one. The pairings that exams actually ask — organelle with function, disorder with inheritance pattern, scientist with discovery — are stated explicitly throughout.',
  ],

  weightage: [
    { exam: 'NEET Biology', count: '12–18 questions', note: 'Cell biology, genetics and evolution together form one of the largest blocks in the paper.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Organelle functions, chromosome numbers and famous discoveries.' },
    { exam: 'RRB NTPC / Group D', count: '3–4 questions', note: 'Biology is the heaviest science block in railway papers.' },
    { exam: 'UPSC Prelims GS Paper 1', count: '1–3 questions', note: 'Usually applied — a biotechnology or health topic in the news.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'General biology at school level.' },
  ],

  contents: [
    { icon: 'search', title: 'The cell', sub: 'Discovery, theory and types', href: '#cell' },
    { icon: 'layers', title: 'Organelles', sub: 'What each part does', href: '#organelles' },
    { icon: 'refresh', title: 'Cell division', sub: 'Mitosis and meiosis', href: '#division' },
    { icon: 'target', title: 'Mendelian genetics', sub: 'The three laws and the ratios', href: '#genetics' },
    { icon: 'doc', title: 'DNA and the genetic code', sub: 'Molecular biology', href: '#molecular' },
    { icon: 'bell', title: 'Genetic disorders', sub: 'Inheritance patterns in humans', href: '#disorders' },
    { icon: 'globe', title: 'Evolution', sub: 'Theories and evidence', href: '#evolution' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'cell',
      heading: 'The cell',
      eyebrow: 'Discovery, theory and types',
      intro:
        'Every living thing is made of cells, and the history of finding that out supplies several direct questions.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Discovery',
              'Robert Hooke first observed and named cells in 1665, looking at a thin slice of cork through his own microscope — what he saw were the empty walls of dead cells. Anton van Leeuwenhoek was the first to observe living cells and micro-organisms. Robert Brown discovered the nucleus in 1831.',
            ],
            [
              'The cell theory',
              'Proposed by Matthias Schleiden for plants and Theodor Schwann for animals in 1838 and 1839: all living things are composed of cells, and the cell is the basic unit of life. Rudolf Virchow completed it in 1855 with the principle that every cell arises from a pre-existing cell — omnis cellula e cellula — which ruled out spontaneous generation.',
            ],
            [
              'Prokaryotic and eukaryotic cells',
              'A prokaryotic cell has no true nucleus — its genetic material lies free in the cytoplasm as a nucleoid — and no membrane-bound organelles. Bacteria and cyanobacteria are prokaryotic. A eukaryotic cell has a nucleus enclosed in a membrane and a full set of organelles, and includes all protists, fungi, plants and animals. Prokaryotic ribosomes are 70S and eukaryotic ones 80S, a difference antibiotics exploit.',
            ],
            [
              'Cell size extremes',
              'The smallest cell is that of Mycoplasma; the largest cell is the ostrich egg; the longest cell in the human body is the nerve cell. Among human cells, the ovum is the largest and the sperm the smallest. Red blood cells in mammals are unusual in lacking a nucleus, which is why they cannot divide or repair themselves and survive only about 120 days.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Plant and animal cells compared',
          head: ['Feature', 'Plant cell', 'Animal cell'],
          rows: [
            ['Cell wall', 'Present, made of cellulose, outside the cell membrane', 'Absent — only the cell membrane'],
            ['Plastids', 'Present, including chloroplasts in green tissue', 'Absent'],
            ['Vacuole', 'One large central vacuole occupying most of the volume', 'Small and numerous, or absent'],
            ['Centriole', 'Absent in higher plants', 'Present, and involved in cell division'],
            ['Shape', 'Fixed and usually rectangular, because of the rigid wall', 'Irregular and flexible'],
            ['Nutrition', 'Autotrophic where chloroplasts are present', 'Heterotrophic'],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'organelles',
      heading: 'Organelles',
      eyebrow: 'What each part does',
      intro:
        'The single most directly examined table in biology. Each organelle has a nickname that questions use as a clue, and each nickname corresponds to a function.',
      blocks: [
        {
          type: 'table',
          caption: 'Organelles and their functions',
          head: ['Organelle', 'Function', 'Note'],
          rows: [
            ['Nucleus', 'Contains the chromosomes and controls all cell activity', 'Discovered by Robert Brown. The nucleolus within it produces ribosomes.'],
            ['Mitochondrion', 'Site of cellular respiration and ATP production', 'Called the powerhouse of the cell. It has its own DNA and its own 70S ribosomes and is inherited maternally, which is why mitochondrial DNA is used to trace maternal ancestry.'],
            ['Chloroplast', 'Site of photosynthesis in plant cells', 'Contains chlorophyll and, like the mitochondrion, its own DNA — evidence for the endosymbiotic origin of both.'],
            ['Ribosome', 'Protein synthesis', 'Found free in the cytoplasm and attached to the rough endoplasmic reticulum. 70S in prokaryotes and in mitochondria; 80S in the eukaryotic cytoplasm.'],
            ['Endoplasmic reticulum', 'Transport within the cell', 'Rough ER carries ribosomes and handles protein synthesis and transport; smooth ER makes lipids and detoxifies.'],
            ['Golgi apparatus', 'Modifies, packages and dispatches materials', 'Called the traffic police or the post office of the cell. It also forms lysosomes.'],
            ['Lysosome', 'Contains digestive enzymes that break down waste and worn-out parts', 'Called the suicide bags of the cell, because rupture digests the cell itself.'],
            ['Vacuole', 'Storage of water, food and waste; maintains turgor pressure', 'Very large and central in plant cells, which is what keeps a non-woody plant upright.'],
            ['Cell membrane', 'Selectively permeable boundary controlling what enters and leaves', 'Described by the fluid mosaic model of Singer and Nicolson, 1972 — a lipid bilayer with proteins embedded in it.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Transport across the membrane',
              'Diffusion moves substances from high to low concentration without energy. Osmosis is the diffusion of water across a semi-permeable membrane. Active transport moves substances against the concentration gradient and requires ATP. A cell placed in a hypotonic solution swells, in a hypertonic solution shrinks — plasmolysis in a plant cell — and in an isotonic solution stays unchanged.',
            ],
            [
              'The endosymbiotic theory',
              'Mitochondria and chloroplasts are thought to have originated as free-living prokaryotes engulfed by an early eukaryotic cell. The evidence is that both have their own circular DNA, their own 70S ribosomes and a double membrane, and both divide independently of the cell. This is asked as a reasoning question rather than as recall.',
            ],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'division',
      heading: 'Cell division',
      eyebrow: 'Mitosis and meiosis',
      intro:
        'Two processes with different purposes: one makes identical copies for growth and repair, the other halves the chromosome number to make gametes. The contrast between them is the standard question.',
      blocks: [
        {
          type: 'table',
          caption: 'Mitosis and meiosis compared',
          head: ['Feature', 'Mitosis', 'Meiosis'],
          rows: [
            ['Where it occurs', 'Somatic body cells', 'Reproductive cells, producing gametes'],
            ['Number of divisions', 'One', 'Two — meiosis I and meiosis II'],
            ['Daughter cells', 'Two', 'Four'],
            ['Chromosome number', 'Unchanged — diploid to diploid; called equational division', 'Halved — diploid to haploid; called reductional division'],
            ['Genetic identity', 'Daughter cells are genetically identical to the parent', 'Daughter cells differ from the parent and from one another'],
            ['Crossing over', 'Does not occur', 'Occurs in prophase I, and is the principal source of genetic variation'],
            ['Purpose', 'Growth, repair and replacement of worn cells', 'Gamete formation, keeping the chromosome number constant across generations'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The phases',
              'Both divisions proceed through prophase, metaphase, anaphase and telophase — remembered as PMAT. In metaphase the chromosomes line up at the equator, which is why it is the best stage for counting and studying them. In anaphase they are pulled to opposite poles. Cytokinesis, the division of the cytoplasm, follows.',
            ],
            [
              'Why meiosis matters',
              'Without it, fertilisation would double the chromosome number every generation. Halving the number in gamete formation keeps it constant. Meiosis is also the source of most genetic variation, through crossing over in prophase I and through the independent assortment of chromosomes in metaphase I.',
            ],
            [
              'Human chromosome numbers',
              'A human somatic cell has 46 chromosomes in 23 pairs — 22 pairs of autosomes and one pair of sex chromosomes. A gamete has 23. The female is XX and the male XY, so the sex of a child is determined by the sperm, since the ovum always carries an X. This last point is asked in both biology and social contexts.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'genetics',
      heading: 'Mendelian genetics',
      eyebrow: 'The three laws and the ratios',
      intro:
        'Gregor Mendel worked out the rules of inheritance from garden pea plants between 1856 and 1863, decades before anyone knew what a gene was. His three laws and two ratios account for most genetics questions.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Why the pea plant',
              'Mendel chose Pisum sativum because it has clearly contrasting characters — tall or dwarf, round or wrinkled seeds, yellow or green pods — a short life cycle, a large number of offspring, and flowers that normally self-pollinate but can be cross-pollinated by hand. The choice of organism is itself an exam question.',
            ],
            [
              'The vocabulary',
              'A gene is a unit of inheritance; an allele is one of its alternative forms. Homozygous means two identical alleles, heterozygous two different ones. The genotype is the genetic constitution and the phenotype the observable appearance. A dominant allele expresses itself in the heterozygote; a recessive allele does so only in the homozygote.',
            ],
            [
              'Law of dominance',
              'When two contrasting alleles are present, only the dominant one is expressed in the first generation. So a cross between a pure tall and a pure dwarf pea gives all tall offspring in the F1 generation, with the dwarf character hidden but not lost.',
            ],
            [
              'Law of segregation',
              'The two alleles of a pair separate during gamete formation, so each gamete receives only one. Also called the law of purity of gametes, because a gamete is never a blend. This is why the dwarf character reappears in the F2 generation.',
            ],
            [
              'Law of independent assortment',
              'The alleles of different genes assort independently of one another during gamete formation. This holds only for genes on different chromosomes, or far apart on the same one — linked genes do not assort independently, which is a limitation Mendel did not encounter with his chosen characters.',
            ],
          ],
        },
        {
          type: 'formula',
          title: 'The standard ratios',
          items: [
            { expr: 'Monohybrid F2 phenotypic ratio = 3 : 1', note: 'Three showing the dominant character to one showing the recessive.' },
            { expr: 'Monohybrid F2 genotypic ratio = 1 : 2 : 1', note: 'One homozygous dominant, two heterozygous, one homozygous recessive.' },
            { expr: 'Dihybrid F2 phenotypic ratio = 9 : 3 : 3 : 1', note: 'For two independently assorting characters.' },
            { expr: 'Test cross with a homozygous recessive gives 1 : 1 if the parent is heterozygous', note: 'And all dominant offspring if it is homozygous — which is how the unknown genotype of a dominant individual is determined.' },
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'molecular',
      heading: 'DNA and the genetic code',
      eyebrow: 'Molecular biology',
      intro:
        'What a gene actually is, in chemical terms, and how the information in it becomes a protein.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The structure of DNA',
              'A double helix of two antiparallel strands, described by James Watson and Francis Crick in 1953 using X-ray diffraction data from Rosalind Franklin and Maurice Wilkins. Each strand is a chain of nucleotides, and each nucleotide is a deoxyribose sugar, a phosphate and one of four nitrogenous bases. Adenine pairs with thymine by two hydrogen bonds and guanine with cytosine by three, which is why the two strands are complementary.',
            ],
            [
              'DNA and RNA compared',
              'DNA has deoxyribose sugar, is double-stranded, uses thymine, and stores genetic information. RNA has ribose, is normally single-stranded, uses uracil in place of thymine, and carries out protein synthesis. Messenger RNA carries the code from the nucleus, transfer RNA brings amino acids, and ribosomal RNA forms part of the ribosome.',
            ],
            [
              'The central dogma',
              'Information flows from DNA to RNA to protein. Replication copies DNA before cell division. Transcription copies a gene into messenger RNA. Translation reads that RNA at the ribosome and assembles the corresponding chain of amino acids. Reverse transcription, from RNA back to DNA, occurs in retroviruses such as HIV and was the exception that qualified the original statement.',
            ],
            [
              'The genetic code',
              'A sequence of three bases — a codon — specifies one amino acid. There are 64 codons for 20 amino acids, so the code is degenerate: several codons can specify the same amino acid. AUG is the start codon and also codes for methionine; three codons act as stop signals. The code is very nearly universal across all living things, which is what makes genetic engineering across species possible.',
            ],
            [
              'Mutation',
              'A change in the base sequence of DNA. A point mutation changes a single base; substitution, insertion and deletion are the main types, and insertions or deletions that are not multiples of three shift the reading frame and are usually severe. Mutations may be caused by radiation, chemicals or errors in replication, and they are the ultimate source of all genetic variation.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'disorders',
      heading: 'Genetic disorders',
      eyebrow: 'Inheritance patterns in humans',
      intro:
        'Examined as pairings of a disorder with its inheritance pattern, and as reasoning questions about why some conditions affect men far more often than women.',
      blocks: [
        {
          type: 'table',
          caption: 'Disorders and how they are inherited',
          head: ['Disorder', 'Inheritance', 'Note'],
          rows: [
            ['Sickle cell anaemia', 'Autosomal recessive', 'A single base substitution changes one amino acid in haemoglobin. Carriers have some protection against malaria, which is why the allele persists in malarial regions.'],
            ['Thalassaemia', 'Autosomal recessive', 'Reduced synthesis of haemoglobin chains, requiring repeated transfusions in the severe form.'],
            ['Haemophilia', 'X-linked recessive', 'Blood fails to clot normally. Far commoner in males, since a male has only one X chromosome and no second copy to mask the allele.'],
            ['Colour blindness', 'X-linked recessive', 'Usually red-green. Affects a substantial proportion of males and very few females, for the same reason.'],
            ['Down syndrome', 'Chromosomal — trisomy 21', 'An extra copy of chromosome 21, so 47 chromosomes in total. Caused by non-disjunction during gamete formation rather than by inheritance from a parent.'],
            ['Turner syndrome', 'Chromosomal — XO', 'A female with only one X chromosome, giving 45 in total.'],
            ['Klinefelter syndrome', 'Chromosomal — XXY', 'A male with an extra X chromosome, giving 47 in total.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Why X-linked disorders affect men more',
              'A male has one X and one Y chromosome. A recessive allele on his single X has no partner allele to mask it, so it is expressed. A female has two X chromosomes, so she expresses the condition only if both carry the allele, which is far less likely. She may be a carrier, passing it to sons without showing it herself — the pattern seen in haemophilia in the European royal families.',
            ],
            [
              'Blood groups',
              'The ABO system, discovered by Karl Landsteiner, is controlled by three alleles: A and B are codominant and O is recessive. So group AB shows both antigens and group O has neither. O negative is the universal donor and AB positive the universal recipient. The Rh factor is a separate antigen, and Rh incompatibility between an Rh-negative mother and an Rh-positive foetus causes erythroblastosis fetalis in a subsequent pregnancy.',
            ],
            [
              'Sex determination',
              'In humans the female is the homogametic sex, producing only X-bearing ova, and the male is heterogametic, producing X- and Y-bearing sperm in roughly equal numbers. The sex of the child is therefore determined by the sperm. In birds the arrangement is reversed, with the female heterogametic.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'evolution',
      heading: 'Evolution',
      eyebrow: 'Theories and evidence',
      intro:
        'How the genetic mechanisms above, acting over long periods, produced the diversity of life. Examined for the theories, their proponents and the categories of evidence.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'Lamarck',
              'Proposed the inheritance of acquired characteristics: an organ used more develops further, an unused one degenerates, and those changes pass to offspring — the giraffe stretching for high leaves being the standard illustration. The theory is rejected, because changes to the body during life do not alter the genes in the gametes. It is asked precisely because it is the wrong answer.',
            ],
            [
              'Darwin and natural selection',
              'Charles Darwin published On the Origin of Species in 1859, after his voyage on HMS Beagle and his observations of the finches of the Galapagos Islands. The argument is that organisms produce more offspring than can survive; that individuals vary; that some variations confer advantage; that the advantaged survive and reproduce more; and that the advantageous traits therefore become commoner. Alfred Russel Wallace reached the same conclusion independently, which is what prompted Darwin to publish.',
            ],
            [
              'Modern synthesis',
              'Neo-Darwinism combines natural selection with Mendelian genetics, which Darwin did not know of. It identifies mutation as the source of variation, and selection, genetic drift, gene flow and reproductive isolation as the mechanisms by which populations diverge into species. Hugo de Vries added the mutation theory, arguing that evolution proceeds by discontinuous jumps.',
            ],
            [
              'Evidence for evolution',
              'Fossils, which show a sequence of forms in dated rock layers and include transitional forms such as Archaeopteryx between reptiles and birds. Homologous organs — the forelimbs of a human, a whale, a bat and a horse — which have the same underlying structure and different functions, indicating common ancestry. Analogous organs — the wings of a bird and an insect — which have the same function and different structure, indicating convergent evolution. Vestigial organs such as the appendix and the coccyx. And embryological and molecular similarities, the last being the strongest modern evidence.',
            ],
            [
              'Origin of life',
              'The Oparin-Haldane hypothesis proposed that life arose from simple molecules in the early oceans, under an atmosphere lacking oxygen. The Miller-Urey experiment of 1953 tested this by passing electric sparks through a mixture of methane, ammonia, hydrogen and water vapour, and produced amino acids — demonstrating that organic building blocks can form abiotically.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Why is the mitochondrion called the powerhouse of the cell?',
      steps: [
        'Cellular respiration breaks down glucose to release energy, and most of that process occurs in the mitochondrion.',
        'The energy released is stored in ATP, the molecule cells use for every energy-requiring process.',
        'Since the mitochondrion is where almost all the cell\'s ATP is generated, it is described as the powerhouse.',
      ],
      answer: 'Because cellular respiration and ATP production occur there.',
    },
    {
      q: 'A tall pea plant is crossed with a dwarf one. What appears in the F1 and F2 generations?',
      steps: [
        'Tallness is dominant, so the F1 generation, all heterozygous, is entirely tall — the law of dominance.',
        'Crossing the F1 plants among themselves, the alleles segregate and recombine.',
        'The F2 generation shows the 3:1 phenotypic ratio — three tall to one dwarf — with a genotypic ratio of 1:2:1.',
      ],
      answer: 'All tall in F1; three tall to one dwarf in F2.',
    },
    {
      q: 'Why is haemophilia far commoner in men than in women?',
      steps: [
        'The gene lies on the X chromosome and the condition is recessive.',
        'A male has one X and one Y, so a single recessive allele on his X is expressed, with no second copy to mask it.',
        'A female has two X chromosomes and expresses the condition only if both carry the allele, which is much rarer. She may be an unaffected carrier.',
      ],
      answer: 'Because it is X-linked recessive and males have only one X chromosome.',
    },
    {
      q: 'Distinguish mitosis from meiosis in one sentence each.',
      steps: [
        'Mitosis is one division producing two genetically identical diploid cells, used for growth and repair of body tissue.',
        'Meiosis is two successive divisions producing four genetically distinct haploid cells, used for gamete formation.',
        'The key contrast is that mitosis is equational and meiosis reductional, and that crossing over occurs only in meiosis.',
      ],
      answer: 'Mitosis: two identical diploid cells for growth. Meiosis: four varied haploid cells for reproduction.',
    },
    {
      q: 'Why does the sex of a human child depend on the father?',
      steps: [
        'The mother is XX, so every ovum she produces carries an X chromosome.',
        'The father is XY, so he produces X-bearing and Y-bearing sperm in roughly equal numbers.',
        'An X-bearing sperm gives XX, a girl; a Y-bearing sperm gives XY, a boy. The determining chromosome therefore comes from the father.',
      ],
      answer: 'Because the ovum always carries X, so the sperm supplies the determining chromosome.',
    },
    {
      q: 'Why does the sickle cell allele persist in malaria-endemic regions?',
      steps: [
        'Sickle cell anaemia is autosomal recessive, and the homozygous condition is severe.',
        'But heterozygous carriers, with one normal and one sickle allele, have some resistance to malaria.',
        'In malarial regions that advantage outweighs the cost, so selection maintains the allele at a substantial frequency — a classic case of heterozygote advantage.',
      ],
      answer: 'Carriers gain protection against malaria, so selection preserves the allele.',
    },
    {
      q: 'Distinguish homologous from analogous organs, with examples.',
      steps: [
        'Homologous organs share the same basic structure and embryonic origin but perform different functions — the forelimbs of a human, a whale, a bat and a horse.',
        'They indicate descent from a common ancestor, and are evidence of divergent evolution.',
        'Analogous organs perform the same function with different structure and origin — the wings of a bird and of an insect — and indicate convergent evolution under similar pressures.',
      ],
      answer: 'Homologous means same structure, different function; analogous means same function, different structure.',
    },
    {
      q: 'What did the Miller-Urey experiment demonstrate?',
      steps: [
        'The Oparin-Haldane hypothesis held that life arose from simple molecules in an oxygen-free early atmosphere.',
        'Miller and Urey, in 1953, passed electric sparks through a sealed mixture of methane, ammonia, hydrogen and water vapour, simulating lightning in that atmosphere.',
        'Amino acids formed, showing that the organic building blocks of life can arise from inorganic starting materials without any living thing being present.',
      ],
      answer: 'That amino acids can form abiotically under early-earth conditions.',
    },
  ],

  practice: [
    {
      q: 'The cell was first observed by:',
      options: ['Robert Hooke', 'Robert Brown', 'Anton van Leeuwenhoek', 'Rudolf Virchow'],
      answer: 0,
      explain: 'In 1665, in a slice of cork. Leeuwenhoek first saw living cells and Brown discovered the nucleus.',
    },
    {
      q: 'Which organelle is known as the suicide bag of the cell?',
      options: ['Ribosome', 'Lysosome', 'Golgi apparatus', 'Mitochondrion'],
      answer: 1,
      explain: 'Its digestive enzymes would break down the cell itself if released.',
    },
    {
      q: 'A human somatic cell contains how many chromosomes?',
      options: ['23', '44', '46', '48'],
      answer: 2,
      explain: '23 pairs — 22 pairs of autosomes and one pair of sex chromosomes. A gamete has 23.',
    },
    {
      q: 'Crossing over occurs during:',
      options: ['Mitosis', 'Prophase I of meiosis', 'Anaphase of mitosis', 'Cytokinesis'],
      answer: 1,
      explain: 'It is the principal source of genetic variation and does not occur in mitosis at all.',
    },
    {
      q: 'The F2 phenotypic ratio in a Mendelian monohybrid cross is:',
      options: ['1 : 1', '3 : 1', '1 : 2 : 1', '9 : 3 : 3 : 1'],
      answer: 1,
      explain: '1:2:1 is the genotypic ratio and 9:3:3:1 the dihybrid phenotypic ratio.',
    },
    {
      q: 'In DNA, adenine pairs with:',
      options: ['Guanine', 'Cytosine', 'Thymine', 'Uracil'],
      answer: 2,
      explain: 'Guanine pairs with cytosine. Uracil replaces thymine in RNA, not in DNA.',
    },
    {
      q: 'The double helix structure of DNA was proposed in 1953 by:',
      options: ['Mendel and Morgan', 'Watson and Crick', 'Miller and Urey', 'Schleiden and Schwann'],
      answer: 1,
      explain: 'Using X-ray diffraction data from Rosalind Franklin and Maurice Wilkins.',
    },
    {
      q: 'Down syndrome is caused by:',
      options: ['An extra copy of chromosome 21', 'A missing X chromosome', 'An extra X chromosome in males', 'A recessive allele on the X chromosome'],
      answer: 0,
      explain: 'Trisomy 21, giving 47 chromosomes. XO is Turner syndrome and XXY is Klinefelter.',
    },
    {
      q: 'Colour blindness is:',
      options: ['Autosomal dominant', 'Autosomal recessive', 'X-linked recessive', 'A chromosomal aberration'],
      answer: 2,
      explain: 'Which is why it affects far more males than females — a male has only one X chromosome.',
    },
    {
      q: 'Which structure is present in a plant cell but absent in an animal cell?',
      options: ['Mitochondrion', 'Cell wall', 'Nucleus', 'Ribosome'],
      answer: 1,
      explain: 'Plastids and a large central vacuole are also plant features; centrioles are an animal feature.',
    },
    {
      q: 'On the Origin of Species was published in:',
      options: ['1809', '1859', '1900', '1953'],
      answer: 1,
      explain: 'By Charles Darwin, after his voyage on HMS Beagle. Wallace had reached the same conclusion independently.',
    },
    {
      q: 'The forelimbs of a whale, a bat and a human are:',
      options: ['Analogous organs', 'Homologous organs', 'Vestigial organs', 'Atavistic organs'],
      answer: 1,
      explain: 'Same basic structure, different functions — evidence of common ancestry and divergent evolution.',
    },
    {
      q: 'Which nitrogenous base is found in RNA but not in DNA?',
      options: ['Adenine', 'Guanine', 'Cytosine', 'Uracil'],
      answer: 3,
      explain: 'Uracil replaces thymine. RNA also uses ribose rather than deoxyribose and is normally single-stranded.',
    },
    {
      q: 'The theory of inheritance of acquired characteristics was proposed by:',
      options: ['Lamarck', 'Darwin', 'Mendel', 'de Vries'],
      answer: 0,
      explain: 'It is rejected, since changes to the body during life do not alter the genes in the gametes.',
    },
    {
      q: 'Mendel conducted his experiments on:',
      options: ['Fruit flies', 'Garden pea plants', 'Maize', 'Snapdragons'],
      answer: 1,
      explain: 'Pisum sativum, chosen for its clear contrasting characters, short life cycle and controllable pollination.',
    },
    {
      q: 'The universal donor blood group is:',
      options: ['AB positive', 'A negative', 'B positive', 'O negative'],
      answer: 3,
      explain: 'AB positive is the universal recipient. The ABO system was discovered by Karl Landsteiner.',
    },
  ],

  faqs: [
    {
      q: 'Why does biology carry more general-awareness marks than physics or chemistry?',
      a: 'Because more of it is directly relevant to everyday life and to public policy — nutrition, disease, vaccination, biotechnology and agriculture all sit in the biology syllabus. Railway papers in particular carry a heavy biology share. The material is also purely factual, with no calculation, which makes it easy to set as objective questions.',
    },
    {
      q: 'What is the difference between a prokaryotic and a eukaryotic cell?',
      a: 'A prokaryotic cell has no membrane-bound nucleus — its DNA lies free in the cytoplasm as a nucleoid — and no membrane-bound organelles. A eukaryotic cell has both. Bacteria are prokaryotic; everything else, from yeast to humans, is eukaryotic. Their ribosomes also differ, 70S against 80S, which is what allows antibiotics to attack bacterial protein synthesis without harming ours.',
    },
    {
      q: 'Why must meiosis exist at all?',
      a: 'Because fertilisation joins two cells. If gametes were made by ordinary division, each would carry the full 46 chromosomes and the fertilised egg would have 92, doubling every generation. Meiosis halves the number to 23, so that fertilisation restores 46. It also generates variation through crossing over and independent assortment, which is what natural selection acts on.',
    },
    {
      q: 'How did Mendel get the right answer without knowing what a gene was?',
      a: 'By choosing his organism and his characters well, and by counting. He used pea characters that were sharply contrasting with no intermediate forms, that happened to lie on different chromosomes so that independent assortment held, and he analysed thousands of offspring statistically rather than describing a few. The mathematical treatment is what made the pattern visible.',
    },
    {
      q: 'Why do X-linked conditions appear mostly in males?',
      a: 'Because a male has a single X chromosome. A recessive allele on it has no counterpart on the Y to mask it, so it is expressed. A female would need the allele on both her X chromosomes to be affected, which is far less likely, though she can be an unaffected carrier and pass it to half her sons. Haemophilia and red-green colour blindness are the standard examples.',
    },
    {
      q: 'What exactly is the central dogma?',
      a: 'That genetic information flows from DNA to RNA to protein — replication copies DNA, transcription makes RNA from it, and translation builds a protein from the RNA. Formulated by Francis Crick, it was later qualified by the discovery of reverse transcription in retroviruses such as HIV, which copy RNA back into DNA. The flow from protein back to nucleic acid does not occur.',
    },
    {
      q: 'Why is the genetic code called degenerate?',
      a: 'Because 64 codons specify only 20 amino acids, so most amino acids have more than one codon. Degeneracy is protective: many single-base changes, particularly in the third position of a codon, produce the same amino acid and therefore no change in the protein. It is not a defect but a buffer against mutation.',
    },
    {
      q: 'Is Lamarck\'s theory entirely wrong?',
      a: 'The mechanism he proposed — that characteristics acquired during life are inherited — is rejected, because changes to body cells do not alter the DNA in gametes. The epigenetic inheritance of some gene-expression patterns is a genuine modern finding, but it is a limited effect on gene regulation rather than a vindication of Lamarck. For exam purposes, treat the theory as disproved and Darwin\'s as accepted.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'None of the core material. Cell structure, division, Mendelian ratios and the genetic code are settled. What moves is the applied edge — a new gene-editing development, a disease outbreak, a biotechnology policy decision — and that belongs to current affairs and to the emerging technology page rather than here.',
    },
    {
      q: 'How many questions come from cell biology and genetics?',
      a: 'Twelve to eighteen in NEET, where it is one of the largest blocks; three to four in RRB NTPC and Group D; two to three in SSC CGL Tier 1 and in state PSC prelims; and one to three in UPSC Prelims, usually in an applied form.',
    },
  ],

  related: [
    { label: 'Human Physiology', to: '/study-material/biology/human-physiology/' },
    { label: 'Plants, Nutrition & Health', to: '/study-material/biology/plants-and-health/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'Emerging Technology', to: '/study-material/science/emerging-technology/' },
    { label: 'All Biology', to: '/study-material/biology/' },
  ],
}
