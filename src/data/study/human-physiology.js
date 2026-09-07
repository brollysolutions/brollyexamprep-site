/**
 * Human Physiology — /study-material/biology/human-physiology/
 *
 * The body system by system. Organised the way questions are set — organ with
 * function, enzyme with substrate, hormone with gland and with the disorder its
 * excess or deficiency causes.
 */
export default {
  subject: 'biology',
  subjectName: 'Biology',
  slug: 'human-physiology',
  title: 'Human Physiology',
  seoTitle: 'Human Physiology for Competitive Exams | Body Systems Notes & Practice',
  metaDescription:
    'Complete human physiology study material for NEET, SSC, RRB and state exams — digestive, respiratory and circulatory systems, excretion.',
  readMinutes: 25,
  lead: [
    'Human physiology is the most reliably examined block in biology, because every question in it has a single unambiguous answer and because the subject matter is universally familiar. Which enzyme digests protein, which part of the brain controls balance, which gland secretes insulin — these are asked in almost identical form across SSC, RRB, state and NEET papers.',
    'The page runs system by system, and within each system it gives the pathway, the organs, the secretions and the disorders in the order a question would need them. Where two things are commonly confused — arteries with veins, the cerebrum with the cerebellum, hormones with enzymes — the distinction is set out explicitly.',
  ],

  weightage: [
    { exam: 'NEET Biology', count: '15–20 questions', note: 'Human physiology is the single largest block in the zoology half of the paper.' },
    { exam: 'RRB NTPC / Group D', count: '3–5 questions', note: 'The most heavily asked biology topic in railway papers.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '2–3 questions', note: 'Organ functions, vitamins and standard body figures.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'General biology, often alongside a health scheme question.' },
    { exam: 'UPSC Prelims GS Paper 1', count: '1–2 questions', note: 'Usually linked to a disease or a nutrition programme in the news.' },
  ],

  contents: [
    { icon: 'refresh', title: 'Digestive system', sub: 'Pathway, enzymes and the liver', href: '#digestive' },
    { icon: 'play', title: 'Respiration and circulation', sub: 'Lungs, heart and blood', href: '#circulation' },
    { icon: 'globe', title: 'Excretion', sub: 'Kidneys and the nephron', href: '#excretion' },
    { icon: 'search', title: 'Nervous system', sub: 'Brain, spinal cord and reflexes', href: '#nervous' },
    { icon: 'target', title: 'Endocrine system', sub: 'Glands, hormones and disorders', href: '#endocrine' },
    { icon: 'layers', title: 'Skeleton and muscles', sub: 'Bones, joints and movement', href: '#skeleton' },
    { icon: 'image', title: 'Sense organs', sub: 'Eye, ear and the rest', href: '#senses' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'digestive',
      heading: 'Digestive system',
      eyebrow: 'Pathway, enzymes and the liver',
      intro:
        'Food travels a single alimentary canal about nine metres long, and at each stage a specific secretion acts on a specific class of nutrient. Nearly every question is an enzyme-substrate pairing.',
      blocks: [
        {
          type: 'table',
          caption: 'Where each nutrient is digested',
          head: ['Region', 'Secretion and enzyme', 'What it acts on'],
          rows: [
            ['Mouth', 'Saliva containing salivary amylase, also called ptyalin', 'Starch, converted to maltose. Digestion of carbohydrate therefore begins in the mouth, which is why bread tastes sweet if chewed long enough.'],
            ['Stomach', 'Gastric juice — hydrochloric acid, pepsin, and rennin in infants', 'HCl kills bacteria and activates pepsin, which digests protein. Rennin curdles milk. No carbohydrate digestion occurs here, since amylase is inactivated by the acid.'],
            ['Small intestine — duodenum', 'Bile from the liver and pancreatic juice — trypsin, lipase, amylase', 'Bile emulsifies fat but contains no enzyme. Trypsin digests protein, lipase fat and pancreatic amylase starch. Bile also neutralises the acid arriving from the stomach.'],
            ['Small intestine — ileum', 'Intestinal juice, containing several enzymes', 'Completes digestion of all three nutrient classes, and absorption occurs here through the villi.'],
            ['Large intestine', 'No digestive enzymes', 'Absorbs water and some salts; gut bacteria synthesise vitamin K and some B vitamins. The undigested residue is eliminated.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The villi',
              'Finger-like projections lining the small intestine, each containing blood capillaries and a lacteal. They increase the absorptive surface area enormously, which is why the small intestine, and not the much wider large intestine, is where absorption happens. Amino acids and glucose pass into the blood; fatty acids and glycerol pass into the lacteals of the lymphatic system.',
            ],
            [
              'The liver',
              'The largest gland and the largest internal organ. It secretes bile, which is stored and concentrated in the gall bladder; stores glucose as glycogen and releases it as needed; converts ammonia to urea for excretion; detoxifies drugs and alcohol; and produces plasma proteins and clotting factors. Its many roles make it the single most asked organ in this section.',
            ],
            [
              'Peristalsis',
              'The wave of involuntary muscular contraction that moves food along the alimentary canal. It is why swallowing works even lying down or upside down, and why the process cannot be stopped once started.',
            ],
            [
              'Common disorders',
              'Acidity from excess gastric acid, treated with antacids. Constipation from insufficient roughage and water. Jaundice, a yellowing of the skin and eyes from excess bilirubin, indicating a liver or bile duct problem. Cirrhosis, irreversible liver scarring, most commonly from chronic alcohol use or hepatitis.',
            ],
          ],
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'circulation',
      heading: 'Respiration and circulation',
      eyebrow: 'Lungs, heart and blood',
      intro:
        'Two systems treated together because they do one job between them: bringing oxygen to every cell and taking carbon dioxide away.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The respiratory pathway',
              'Nostrils, nasal cavity, pharynx, larynx — the voice box — trachea, two bronchi, bronchioles, and finally the alveoli, the tiny air sacs where gas exchange occurs. The alveoli are one cell thick and richly supplied with capillaries, and their combined surface area is very large, which is what makes diffusion fast enough. The diaphragm and the intercostal muscles drive breathing; the normal resting rate is about twelve to sixteen breaths a minute.',
            ],
            [
              'Gas exchange and transport',
              'Oxygen diffuses from the alveoli into the blood and binds to haemoglobin in the red cells. Carbon dioxide is carried mainly as bicarbonate in the plasma, with a smaller part on haemoglobin. Carbon monoxide binds haemoglobin far more strongly than oxygen does, which is why it is so dangerous even at low concentration.',
            ],
            [
              'The heart',
              'Four chambers — two atria above and two ventricles below. The right side receives deoxygenated blood and sends it to the lungs; the left receives oxygenated blood and pumps it to the body, which is why the left ventricle has the thickest wall. Valves prevent backflow, and their closing produces the two heart sounds. The sino-atrial node is the natural pacemaker. The normal resting rate is about seventy-two beats a minute and normal blood pressure about 120 over 80 millimetres of mercury.',
            ],
            [
              'Double circulation',
              'Blood passes through the heart twice in one complete circuit — once through the pulmonary circulation to the lungs and once through the systemic circulation to the body. Keeping oxygenated and deoxygenated blood separate is what makes a high metabolic rate possible, and it is why birds and mammals have four-chambered hearts.',
            ],
            [
              'Arteries, veins and capillaries',
              'Arteries carry blood away from the heart, have thick muscular walls to withstand high pressure, and have no valves. Veins carry blood towards the heart, have thinner walls and low pressure, and have valves to prevent backflow. Capillaries are one cell thick, which is what allows exchange with the tissues. The pulmonary artery and pulmonary vein are the exceptions to the usual association with oxygen content.',
            ],
            [
              'Composition of blood',
              'About 55 per cent plasma, which is mostly water with proteins, salts and dissolved substances, and about 45 per cent cells. Red blood cells carry oxygen, have no nucleus in mammals and live about 120 days. White blood cells fight infection and live only a few days. Platelets are cell fragments essential to clotting. An adult has roughly five litres of blood.',
            ],
          ],
        },
        {
          type: 'note',
          title: 'Breathing is not respiration',
          text:
            'Breathing is the mechanical movement of air in and out of the lungs. Respiration is the chemical process by which cells break down glucose to release energy, and it happens in every cell, chiefly in the mitochondria. Aerobic respiration uses oxygen and yields carbon dioxide, water and a large amount of energy; anaerobic respiration in human muscle produces lactic acid and far less energy, which is what causes cramp during sustained exertion. The distinction is asked directly.',
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'excretion',
      heading: 'Excretion',
      eyebrow: 'Kidneys and the nephron',
      intro:
        'Removing the nitrogenous waste produced by breaking down proteins, and regulating the water and salt balance of the body at the same time.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The excretory pathway',
              'Two kidneys filter the blood; each connects by a ureter to the urinary bladder, which empties through the urethra. The kidneys are bean-shaped and lie against the back wall of the abdomen. They receive a very large share of the cardiac output for their size, because filtering blood is their whole function.',
            ],
            [
              'The nephron',
              'The functional unit of the kidney, and there are about a million in each. Blood is filtered under pressure at the glomerulus into Bowman\'s capsule, producing a filtrate containing water, glucose, salts, amino acids and urea. As the filtrate passes along the tubule and the loop of Henle, useful substances — glucose, most water, needed salts — are selectively reabsorbed into the blood. What remains is urine.',
            ],
            [
              'Urine',
              'About 95 per cent water, with urea as the principal nitrogenous waste, together with salts, creatinine and pigments. Urea is produced in the liver from ammonia, which is highly toxic. Roughly one to two litres are produced daily, and the volume varies with fluid intake, temperature and sweating.',
            ],
            [
              'The other excretory organs',
              'The lungs excrete carbon dioxide and water vapour. The skin excretes water, salts and a little urea in sweat, and its principal function is temperature regulation. The liver excretes bile pigments derived from the breakdown of haemoglobin.',
            ],
            [
              'Dialysis and transplantation',
              'When the kidneys fail, haemodialysis passes the patient\'s blood through a machine containing a semi-permeable membrane and a dialysing fluid, which removes waste by diffusion. It substitutes for filtration but not for the kidney\'s hormonal functions. Transplantation is the definitive treatment, and India\'s organ donation framework is governed by the Transplantation of Human Organs Act.',
            ],
          ],
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'nervous',
      heading: 'Nervous system',
      eyebrow: 'Brain, spinal cord and reflexes',
      intro:
        'The body\'s fast control system, working by electrical impulses along nerve cells. Its counterpart, the endocrine system, is slower and chemical.',
      blocks: [
        {
          type: 'table',
          caption: 'Parts of the brain and what each does',
          head: ['Part', 'Function', 'Consequence of damage'],
          rows: [
            ['Cerebrum', 'The largest part; seat of intelligence, memory, reasoning, voluntary action and the interpretation of sensation', 'Loss of memory, speech or voluntary control, depending on the region affected.'],
            ['Cerebellum', 'Balance, posture and the coordination of muscular activity', 'Loss of balance and jerky, uncoordinated movement — the effect alcohol produces temporarily.'],
            ['Medulla oblongata', 'Controls involuntary vital functions — heartbeat, breathing, blood pressure, swallowing, vomiting', 'Damage here is usually fatal, which is why it is the most critical part of the brain.'],
            ['Hypothalamus', 'Regulates body temperature, hunger, thirst and sleep; links the nervous and endocrine systems', 'Disturbed temperature regulation and appetite.'],
            ['Thalamus', 'Relays sensory information to the cerebrum', 'Disturbed sensation.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The neuron',
              'The structural and functional unit of the nervous system, and the longest cell in the body. Dendrites receive impulses, the cell body processes them and the axon carries the impulse away. The gap between two neurons is the synapse, across which the signal passes chemically by neurotransmitters. Nerve impulses travel in one direction only.',
            ],
            [
              'Divisions of the system',
              'The central nervous system is the brain and spinal cord. The peripheral nervous system is the nerves connecting them to the rest of the body, and includes the autonomic nervous system, which controls involuntary function. The autonomic system divides into the sympathetic, which prepares the body for action, and the parasympathetic, which restores rest.',
            ],
            [
              'Reflex action',
              'An automatic, involuntary response to a stimulus, such as withdrawing the hand from something hot. The impulse travels a reflex arc — receptor, sensory neuron, spinal cord, motor neuron, effector — without going to the brain first, which is why the response is faster than conscious thought. The brain learns of it afterwards. This is examined as a reasoning question, and the key point is that the spinal cord and not the brain does the processing.',
            ],
            [
              'The brain\'s protection',
              'Three membranes called meninges, and cerebrospinal fluid between them, which cushions the brain against shock. Meningitis is inflammation of those membranes. The skull provides the outer protection, and the vertebral column protects the spinal cord.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'endocrine',
      heading: 'Endocrine system',
      eyebrow: 'Glands, hormones and disorders',
      intro:
        'Chemical control, slower than nervous control but longer-lasting. Every question here is a three-way pairing of gland, hormone and the disorder caused by too much or too little.',
      blocks: [
        {
          type: 'table',
          caption: 'The endocrine glands',
          head: ['Gland', 'Principal hormones', 'Disorders'],
          rows: [
            ['Pituitary', 'Growth hormone, and hormones controlling the other endocrine glands', 'Called the master gland. Deficiency of growth hormone in childhood causes dwarfism, excess causes gigantism, and excess in adulthood causes acromegaly.'],
            ['Thyroid', 'Thyroxine, which requires iodine and regulates metabolic rate', 'Iodine deficiency causes goitre and, in children, impaired physical and mental development — which is why salt is iodised. Hypothyroidism slows metabolism; hyperthyroidism accelerates it.'],
            ['Parathyroid', 'Parathormone, regulating calcium and phosphate', 'Deficiency causes muscle spasms from low blood calcium.'],
            ['Adrenal', 'Adrenaline from the medulla; cortisol and aldosterone from the cortex', 'Adrenaline is the emergency hormone of the fight-or-flight response, raising heart rate, blood pressure and blood glucose.'],
            ['Pancreas', 'Insulin and glucagon from the islets of Langerhans', 'Insulin lowers blood glucose and glucagon raises it. Insufficient insulin causes diabetes mellitus. The pancreas is both endocrine and exocrine, since it also secretes digestive enzymes.'],
            ['Gonads', 'Testosterone in males; oestrogen and progesterone in females', 'Responsible for the secondary sexual characteristics and for reproductive function.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Hormones and enzymes are not the same',
              'A hormone is a chemical messenger secreted by an endocrine gland directly into the blood, acting on distant target organs, and it is consumed in the process. An enzyme is a biological catalyst that speeds a specific reaction and emerges unchanged. Insulin is a hormone; pepsin is an enzyme. The distinction is asked directly and the two are often swapped in wrong options.',
            ],
            [
              'Exocrine and endocrine',
              'An exocrine gland secretes through a duct onto a surface or into a cavity — salivary glands, sweat glands, the liver. An endocrine gland is ductless and secretes into the blood. The pancreas is both, which is why it appears in both the digestive and the endocrine sections.',
            ],
            [
              'Diabetes',
              'Diabetes mellitus results from insufficient insulin or from resistance to it, producing high blood glucose. Type 1 arises from destruction of the insulin-producing cells and requires insulin injections; type 2, far commoner, involves resistance and is strongly associated with obesity and inactivity. Diabetes insipidus is an unrelated condition caused by deficiency of antidiuretic hormone, producing excessive urine — the shared name is a trap.',
            ],
          ],
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'skeleton',
      heading: 'Skeleton and muscles',
      eyebrow: 'Bones, joints and movement',
      intro:
        'The framework that supports the body, protects the organs, produces blood cells and, with the muscles, produces movement.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The skeleton in numbers',
              'An adult has 206 bones; a newborn has around 270, several of which fuse during growth. The axial skeleton comprises the skull, vertebral column, ribs and sternum; the appendicular skeleton comprises the limbs and their girdles. The femur is the longest and strongest bone and the stapes in the middle ear the smallest. The vertebral column has 33 vertebrae, of which several fuse in the adult.',
            ],
            [
              'Functions of bone',
              'Support and shape, protection of the brain, heart, lungs and spinal cord, attachment for muscles to produce movement, storage of calcium and phosphorus, and production of blood cells in the red bone marrow.',
            ],
            [
              'Joints',
              'A ball-and-socket joint allows movement in all directions, as at the shoulder and hip. A hinge joint allows movement in one plane, as at the knee and elbow. A pivot joint allows rotation, as between the skull and the first vertebra. A gliding joint allows sliding, as in the wrist. Fixed or immovable joints, as between the bones of the skull, allow none.',
            ],
            [
              'Ligaments, tendons and cartilage',
              'A ligament connects bone to bone and stabilises a joint. A tendon connects muscle to bone and transmits the pull. Cartilage is a flexible connective tissue cushioning the ends of bones and forming the framework of the nose and the external ear. Confusing ligaments with tendons is the standard error.',
            ],
            [
              'Types of muscle',
              'Skeletal or striated muscle is attached to bone and is under voluntary control. Smooth muscle lines the internal organs and is involuntary. Cardiac muscle is found only in the heart, is striated but involuntary, and does not fatigue. Muscles work in antagonistic pairs — the biceps and triceps at the elbow — because a muscle can pull but not push.',
            ],
            [
              'Bone disorders',
              'Rickets in children and osteomalacia in adults from vitamin D deficiency. Osteoporosis, a loss of bone density common after the menopause. Arthritis, inflammation of the joints, of which osteoarthritis is degenerative and rheumatoid arthritis autoimmune. Gout, caused by the deposition of uric acid crystals in joints.',
            ],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'senses',
      heading: 'Sense organs',
      eyebrow: 'Eye, ear and the rest',
      intro:
        'Five sense organs, of which the eye and the ear supply nearly all the questions — and both overlap directly with the optics and sound topics in physics.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The eye',
              'Light passes through the transparent cornea, then the pupil, whose size is controlled by the coloured iris, then the lens, which focuses it on the retina. The retina contains rods, which work in dim light and give no colour information, and cones, which give colour vision in bright light. The point where the optic nerve leaves has no receptors and is the blind spot; the point of sharpest vision is the yellow spot or macula. Focusing by changing the shape of the lens is accommodation.',
            ],
            [
              'Defects of vision',
              'Myopia or short-sight, where the image forms in front of the retina, corrected by a concave lens. Hypermetropia or long-sight, corrected by a convex lens. Presbyopia, the age-related loss of accommodation, needing bifocals. Astigmatism, from uneven corneal curvature, needing a cylindrical lens. Cataract is a clouding of the lens requiring surgery, and night blindness results from vitamin A deficiency.',
            ],
            [
              'The ear',
              'The outer ear collects sound and channels it to the eardrum. The middle ear contains three tiny bones — the malleus, incus and stapes, the hammer, anvil and stirrup — which amplify the vibration and pass it to the inner ear. The inner ear contains the cochlea, which converts vibration to nerve impulses for hearing, and the three semicircular canals, which are responsible for balance rather than hearing. The Eustachian tube connects the middle ear to the throat and equalises pressure, which is why swallowing relieves the sensation in an aircraft.',
            ],
            [
              'The other senses',
              'The tongue carries taste buds detecting sweet, sour, salty, bitter and umami. The nose detects smell, and much of what is called taste is in fact smell, which is why food seems tasteless with a blocked nose. The skin is the largest sense organ and the largest organ overall, detecting touch, pressure, temperature and pain, and it also regulates temperature and synthesises vitamin D in sunlight.',
            ],
            [
              'Immunity in outline',
              'Innate immunity is present from birth and is non-specific — the skin, stomach acid, and white cells that engulf invaders. Acquired immunity is specific and develops after exposure, through antibodies produced by lymphocytes. Active immunity results from having the disease or from vaccination and is long-lasting; passive immunity results from receiving ready-made antibodies, as an infant does through breast milk, and is immediate but short-lived.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'Where does the digestion of starch begin, and why does it stop in the stomach?',
      steps: [
        'Saliva contains salivary amylase, also called ptyalin, which begins converting starch to maltose in the mouth.',
        'In the stomach the environment is strongly acidic because of hydrochloric acid.',
        'Amylase is inactivated at that pH, so starch digestion pauses until the food reaches the small intestine, where bile neutralises the acid and pancreatic amylase resumes the work.',
      ],
      answer: 'In the mouth, by salivary amylase — and it stops because stomach acid inactivates the enzyme.',
    },
    {
      q: 'Why does the left ventricle have a thicker wall than the right?',
      steps: [
        'The right ventricle pumps blood only to the lungs, a short circuit at relatively low pressure.',
        'The left ventricle pumps blood to the entire body, against much greater resistance.',
        'Generating that higher pressure requires more muscle, so the left ventricular wall is considerably thicker.',
      ],
      answer: 'Because it pumps to the whole body rather than only to the lungs.',
    },
    {
      q: 'Why is carbon monoxide so dangerous?',
      steps: [
        'Oxygen is transported by binding reversibly to haemoglobin in the red blood cells.',
        'Carbon monoxide binds to haemoglobin far more strongly than oxygen does, and the binding is not readily reversed.',
        'Even a small concentration therefore occupies a large fraction of the haemoglobin, drastically reducing the blood\'s oxygen-carrying capacity — and because the gas is colourless and odourless, there is no warning.',
      ],
      answer: 'It binds haemoglobin far more tightly than oxygen, blocking oxygen transport.',
    },
    {
      q: 'You touch a hot object and withdraw your hand before feeling the pain. Explain.',
      steps: [
        'The stimulus is detected by receptors in the skin and travels along a sensory neuron to the spinal cord.',
        'In the spinal cord it is passed directly to a motor neuron, which triggers the muscle to withdraw the hand — this is the reflex arc.',
        'Only afterwards does a separate signal reach the brain, which is why the movement precedes the conscious sensation of pain.',
      ],
      answer: 'The reflex arc is processed in the spinal cord, bypassing the brain for speed.',
    },
    {
      q: 'What is the difference between a hormone and an enzyme?',
      steps: [
        'A hormone is a chemical messenger secreted by a ductless endocrine gland directly into the blood, and it acts on a distant target organ.',
        'An enzyme is a biological catalyst that accelerates a specific reaction, usually at or near its site of production.',
        'A hormone is consumed in producing its effect; an enzyme emerges unchanged and can act repeatedly. Insulin is a hormone; pepsin is an enzyme.',
      ],
      answer: 'A hormone is a messenger and is used up; an enzyme is a catalyst and is not.',
    },
    {
      q: 'Which part of the ear is responsible for balance rather than hearing?',
      steps: [
        'The cochlea in the inner ear converts vibration into nerve impulses and is responsible for hearing.',
        'Alongside it lie three semicircular canals, set at right angles to one another and filled with fluid.',
        'Movement of that fluid signals changes in the position and rotation of the head, so the semicircular canals govern balance.',
      ],
      answer: 'The semicircular canals of the inner ear.',
    },
    {
      q: 'Why is common salt iodised in India?',
      steps: [
        'The thyroid gland requires iodine to synthesise thyroxine, which regulates metabolic rate.',
        'Iodine deficiency causes the gland to enlarge, producing goitre, and in children it causes impaired physical and mental development.',
        'Large parts of India, particularly the sub-Himalayan belt, have iodine-poor soil and therefore iodine-poor food, so iodising salt is the cheapest way to reach the whole population.',
      ],
      answer: 'To prevent iodine deficiency, which causes goitre and impaired development in children.',
    },
    {
      q: 'Distinguish active from passive immunity.',
      steps: [
        'Active immunity is produced by the body\'s own immune system, either after an infection or after vaccination, which exposes it to a harmless form of the antigen.',
        'Passive immunity is the transfer of ready-made antibodies, as from mother to infant through breast milk, or by injection of antiserum.',
        'Active immunity takes time to develop but is long-lasting; passive immunity acts immediately but wears off, because no memory cells are produced.',
      ],
      answer: 'Active is self-produced and lasting; passive is transferred, immediate and temporary.',
    },
  ],

  practice: [
    {
      q: 'The enzyme present in saliva is:',
      options: ['Pepsin', 'Trypsin', 'Salivary amylase', 'Lipase'],
      answer: 2,
      explain: 'Also called ptyalin, it begins the digestion of starch in the mouth.',
    },
    {
      q: 'Bile is produced by the liver and stored in the:',
      options: ['Pancreas', 'Spleen', 'Duodenum', 'Gall bladder'],
      answer: 3,
      explain: 'Bile emulsifies fat and neutralises stomach acid, but contains no digestive enzyme.',
    },
    {
      q: 'The functional unit of the kidney is the:',
      options: ['Alveolus', 'Villus', 'Neuron', 'Nephron'],
      answer: 3,
      explain: 'There are about a million in each kidney, filtering at the glomerulus and reabsorbing along the tubule.',
    },
    {
      q: 'Which part of the brain controls balance and coordination?',
      options: ['Cerebrum', 'Hypothalamus', 'Medulla oblongata', 'Cerebellum'],
      answer: 3,
      explain: 'The medulla controls involuntary vital functions and the cerebrum voluntary action and thought.',
    },
    {
      q: 'Insulin is secreted by the:',
      options: ['Liver', 'Thyroid', 'Pancreas', 'Adrenal gland'],
      answer: 2,
      explain: 'By the islets of Langerhans. It lowers blood glucose; glucagon from the same source raises it.',
    },
    {
      q: 'The master gland of the body is the:',
      options: ['Pituitary', 'Thyroid', 'Adrenal', 'Pancreas'],
      answer: 0,
      explain: 'It secretes growth hormone and regulates the secretions of the other endocrine glands.',
    },
    {
      q: 'A reflex action is controlled by the:',
      options: ['Cerebrum', 'Spinal cord', 'Cerebellum', 'Medulla'],
      answer: 1,
      explain: 'The reflex arc bypasses the brain, which is why the response precedes conscious awareness.',
    },
    {
      q: 'The smallest bone in the human body is the:',
      options: ['Stapes', 'Femur', 'Radius', 'Malleus'],
      answer: 0,
      explain: 'It lies in the middle ear, along with the malleus and incus. The femur is the longest bone.',
    },
    {
      q: 'A ligament connects:',
      options: ['Muscle to bone', 'Bone to bone', 'Muscle to muscle', 'Nerve to muscle'],
      answer: 1,
      explain: 'A tendon connects muscle to bone — the two are regularly swapped in wrong options.',
    },
    {
      q: 'The pulmonary artery is unusual because it carries:',
      options: ['Oxygenated blood', 'Deoxygenated blood', 'Lymph', 'Plasma only'],
      answer: 1,
      explain: 'Arteries are defined by carrying blood away from the heart, not by oxygen content. The pulmonary vein is the mirror exception.',
    },
    {
      q: 'Which cells in blood lack a nucleus in humans?',
      options: ['White blood cells', 'Red blood cells', 'Lymphocytes', 'Platelets are cells'],
      answer: 1,
      explain: 'Mammalian red cells lose the nucleus on maturing, which is why they cannot divide and survive only about 120 days.',
    },
    {
      q: 'Night blindness is caused by deficiency of:',
      options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin K'],
      answer: 0,
      explain: 'Vitamin A is needed for the pigment in the rod cells of the retina, which handle dim-light vision.',
    },
    {
      q: 'The natural pacemaker of the heart is the:',
      options: ['Atrioventricular node', 'Sino-atrial node', 'Bundle of His', 'Purkinje fibres'],
      answer: 1,
      explain: 'It initiates each heartbeat, setting a resting rate of about seventy-two beats a minute.',
    },
    {
      q: 'Absorption of digested food occurs mainly in the:',
      options: ['Stomach', 'Small intestine', 'Large intestine', 'Oesophagus'],
      answer: 1,
      explain: 'Through the villi, which greatly increase the surface area. The large intestine absorbs mainly water.',
    },
    {
      q: 'Which muscle is striated but involuntary?',
      options: ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'All voluntary muscle'],
      answer: 2,
      explain: 'Cardiac muscle is found only in the heart and does not fatigue.',
    },
    {
      q: 'Immunity received by an infant through breast milk is:',
      options: ['Active natural', 'Active artificial', 'Passive natural', 'Passive artificial'],
      answer: 2,
      explain: 'Ready-made antibodies are transferred, so protection is immediate but temporary.',
    },
  ],

  faqs: [
    {
      q: 'What is the difference between breathing and respiration?',
      a: 'Breathing is the mechanical exchange of air between the lungs and the atmosphere. Respiration is the biochemical release of energy from glucose inside cells, occurring chiefly in the mitochondria and producing ATP. Breathing supplies the oxygen that respiration uses and removes the carbon dioxide it produces, but they are entirely different processes and the distinction is asked directly.',
    },
    {
      q: 'Why does the small intestine absorb food rather than the large intestine?',
      a: 'Because of the villi. The small intestine is lined with millions of finger-like projections, each containing capillaries and a lacteal, which multiply the absorptive surface area enormously. Digestion is also completed there. The large intestine has no villi and no digestive enzymes; its role is to absorb water and salts from the residue.',
    },
    {
      q: 'Why is a reflex action faster than a voluntary one?',
      a: 'Because the signal takes a shorter path. In a reflex, the sensory impulse reaches the spinal cord and is passed straight to a motor neuron, triggering the response — the reflex arc. A voluntary action requires the signal to travel to the brain, be processed and return. The extra distance and processing cost time, which matters when the stimulus is damaging.',
    },
    {
      q: 'How can the pancreas be both endocrine and exocrine?',
      a: 'Because it has two distinct kinds of tissue. The bulk of it secretes digestive enzymes — trypsin, lipase, amylase — through a duct into the duodenum, which is exocrine function. Scattered within it, the islets of Langerhans secrete insulin and glucagon directly into the blood, which is endocrine function. It is the standard example of a mixed gland.',
    },
    {
      q: 'Why is the medulla oblongata described as the most vital part of the brain?',
      a: 'Because it controls the involuntary functions that cannot be suspended — heartbeat, breathing, blood pressure, swallowing and vomiting. Damage to the cerebrum or cerebellum causes serious impairment but is survivable; damage to the medulla stops breathing and circulation, and is usually fatal.',
    },
    {
      q: 'Why do mammalian red blood cells have no nucleus?',
      a: 'Losing the nucleus on maturing frees space for more haemoglobin, increasing oxygen-carrying capacity, and gives the cell its flexible biconcave shape, which lets it squeeze through narrow capillaries and increases surface area for gas exchange. The cost is that it cannot divide or repair itself, which is why its life is limited to about 120 days.',
    },
    {
      q: 'What is the difference between a tendon and a ligament?',
      a: 'A tendon connects muscle to bone, transmitting the pull of the muscle so that the bone moves. A ligament connects bone to bone, holding a joint together and limiting how far it can move. Both are tough connective tissue and both are commonly injured in sport, but their attachments and functions are quite different, and questions exploit the similarity of the names.',
    },
    {
      q: 'Why is diabetes insipidus not a form of diabetes mellitus?',
      a: 'Because the two share only a name and a symptom. Diabetes mellitus involves insufficient insulin or resistance to it, producing high blood glucose. Diabetes insipidus results from a deficiency of antidiuretic hormone, so the kidneys fail to concentrate urine and the patient passes very large volumes. The word diabetes simply means passing through, and both conditions cause frequent urination.',
    },
    {
      q: 'Which parts of this topic change between exam cycles?',
      a: 'None of the anatomy or physiology. What changes is the public health context — the vaccines in the immunisation schedule, the health schemes in operation, disease outbreak figures — and those belong to current affairs. The body figures on this page, from the number of bones to the resting heart rate, are stable.',
    },
    {
      q: 'How many questions come from human physiology?',
      a: 'Fifteen to twenty in NEET, where it is the largest block in the zoology half; three to five in RRB NTPC and Group D, making it the single most-asked biology topic in railway papers; two to three in SSC CGL Tier 1 and in state PSC prelims; and one to two in UPSC Prelims, usually in a health-policy context.',
    },
  ],

  related: [
    { label: 'Cell Biology & Genetics', to: '/study-material/biology/cell-and-genetics/' },
    { label: 'Plants, Nutrition & Health', to: '/study-material/biology/plants-and-health/' },
    { label: 'Everyday Science', to: '/study-material/science/everyday-science/' },
    { label: 'Heat, Light & Sound', to: '/study-material/physics/heat-light-sound/' },
    { label: 'All Biology', to: '/study-material/biology/' },
  ],
}
