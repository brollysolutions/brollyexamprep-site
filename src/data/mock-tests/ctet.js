/**
 * CTET Paper 1 (Classes I–V) — starter mock.
 *
 * Paper 1 is 150 questions in 150 minutes, 30 each from Child Development &
 * Pedagogy, Language 1, Language 2, Mathematics and Environmental Studies.
 * There is no negative marking, which is why `negative` is zero here.
 */
export default {
  slug: 'ctet',
  cat: 'Teaching',
  exam: 'CTET',
  title: 'CTET Paper 1 Mock Test',
  fullSpec: 'Full paper: 150 questions · 150 min · 150 marks',
  minutes: 25,
  marks: 1,
  negative: 0,
  pattern:
    'Paper 1, for teachers of Classes I to V, has 150 multiple-choice questions worth one mark each across five sections of 30 — Child Development & Pedagogy, Language 1, Language 2, Mathematics and Environmental Studies. There is no negative marking.',
  sections: [
    { id: 'cdp', name: 'Child Development & Pedagogy' },
    { id: 'maths', name: 'Mathematics' },
    { id: 'evs', name: 'Environmental Studies' },
    { id: 'language', name: 'Language & Pedagogy' },
  ],
  questions: [
    {
      section: 'cdp',
      q: 'According to Piaget, the concrete operational stage spans roughly which age range?',
      options: ['0 to 2 years', '2 to 7 years', '7 to 11 years', '11 years and above'],
      answer: 2,
      explain:
        'Piaget placed concrete operations between about 7 and 11, when children reason logically about tangible objects and grasp conservation. Abstract reasoning belongs to the formal operational stage that follows.',
    },
    {
      section: 'cdp',
      q: 'The concept of the "Zone of Proximal Development" was proposed by',
      options: ['Lev Vygotsky', 'B. F. Skinner', 'Jerome Bruner', 'Jean Piaget'],
      answer: 0,
      explain:
        'Vygotsky described the gap between what a learner can do alone and what they can do with guidance. Teaching aimed at that zone, with scaffolding, is what moves learning forward.',
    },
    {
      section: 'cdp',
      q: 'Kohlberg’s stage theory is concerned with the development of',
      options: ['Language', 'Moral reasoning', 'Motor skills', 'Perception'],
      answer: 1,
      explain:
        'Kohlberg described three levels of moral reasoning — pre-conventional, conventional and post-conventional — each with two stages.',
    },
    {
      section: 'cdp',
      q: 'What is the most appropriate response when a child repeatedly makes errors in class?',
      options: [
        'Move the child to a lower group',
        'Assign extra homework as a penalty',
        'Treat the errors as a natural part of learning and diagnose the misconception',
        'Ask the child to copy the correct answer ten times',
      ],
      answer: 2,
      explain:
        'Errors reveal how a child is thinking. Diagnosing the underlying misconception and teaching to it is far more useful than punishment or rote correction.',
    },
    {
      section: 'cdp',
      q: 'Which of these best describes an inclusive classroom?',
      options: [
        'Only high achievers are given individual attention',
        'Children are grouped strictly by ability',
        'Children with disabilities are taught in a separate room',
        'All children learn together, with the support each one needs',
      ],
      answer: 3,
      explain:
        'Inclusion means every child learns in the same classroom, with teaching adapted and support provided so that each can participate. Separate provision is integration or segregation, not inclusion.',
    },
    {
      section: 'cdp',
      q: '"Learning by doing" is most closely associated with which educational thinker?',
      options: ['John Dewey', 'Edward Thorndike', 'Ivan Pavlov', 'Erik Erikson'],
      answer: 0,
      explain:
        'Dewey argued that education should grow out of purposeful activity and real experience rather than the passive reception of facts.',
    },
    {
      section: 'cdp',
      q: 'The theory of Multiple Intelligences was proposed by',
      options: ['Charles Spearman', 'Howard Gardner', 'Alfred Binet', 'Robert Sternberg'],
      answer: 1,
      explain:
        'Gardner argued that intelligence is not a single capacity but several relatively independent ones — linguistic, logical-mathematical, spatial, musical, bodily-kinaesthetic, interpersonal, intrapersonal and naturalistic.',
    },
    {
      section: 'cdp',
      q: 'Assessment "for" learning primarily aims to',
      options: [
        'Decide which students should be promoted',
        'Rank students against one another',
        'Provide feedback that improves learning while it is still happening',
        'Certify achievement at the end of a course',
      ],
      answer: 2,
      explain:
        'Assessment for learning is formative: it feeds information back to the learner and the teacher during instruction. Ranking and certification are the purposes of summative assessment.',
    },
    {
      section: 'cdp',
      q: 'A child with dyslexia has primary difficulty with',
      options: ['Physical coordination', 'Sustained attention', 'Numerical calculation', 'Reading and decoding written words'],
      answer: 3,
      explain:
        'Dyslexia is a specific learning difficulty affecting accurate word reading and spelling. Difficulty with calculation is dyscalculia, and with coordination dyspraxia.',
    },

    {
      section: 'maths',
      q: 'What is the most appropriate way to introduce fractions to a Class III child?',
      options: [
        'Use paper folding, sharing of objects and pictures',
        'Begin with addition of unlike fractions',
        'Ask children to memorise the fraction table',
        'Give the formal definition of a fraction first',
      ],
      answer: 0,
      explain:
        'At this stage children reason with concrete materials. Folding paper and sharing real objects builds the idea of equal parts before any symbol or rule is introduced.',
    },
    {
      section: 'maths',
      q: 'What is the place value of 7 in the number 4,738?',
      options: ['7', '70', '700', '7000'],
      answer: 2,
      explain:
        'The 7 sits in the hundreds place, so its place value is 700. Its face value, by contrast, is simply 7.',
    },
    {
      section: 'maths',
      q: 'What is the smallest four-digit number that can be formed using 0, 3, 5 and 8, each exactly once?',
      options: ['0358', '3058', '3085', '3508'],
      answer: 1,
      explain:
        'A four-digit number cannot begin with 0, so the smallest available digit, 3, leads, followed by 0, 5 and 8 in ascending order: 3058.',
    },
    {
      section: 'maths',
      q: 'A child consistently makes errors when borrowing in subtraction. This most likely indicates',
      options: [
        'Carelessness that will pass with age',
        'An incomplete understanding of place value and regrouping',
        'A lack of interest in mathematics',
        'Poor handwriting',
      ],
      answer: 1,
      explain:
        'Borrowing depends on seeing that one ten can be exchanged for ten ones. Systematic errors point to a gap in place-value understanding, which needs re-teaching with concrete material rather than more drill.',
    },
    {
      section: 'maths',
      q: 'What is the perimeter of a square whose side measures 9 cm?',
      options: ['18 cm', '27 cm', '36 cm', '81 cm'],
      answer: 2,
      explain: 'Perimeter = 4 × side = 4 × 9 = 36 cm. 81 cm² would be the area.',
    },

    {
      section: 'evs',
      q: 'Environmental Studies at the primary stage is best described as a subject that',
      options: [
        'Prepares children for the study of physics',
        'Teaches only science concepts',
        'Integrates science, social science and environmental education',
        'Focuses on moral education',
      ],
      answer: 2,
      explain:
        'EVS in Classes I to V is deliberately integrated, drawing the natural and social worlds together around themes such as family, food, water, shelter and travel.',
    },
    {
      section: 'evs',
      q: 'Which of these animals is a herbivore?',
      options: ['Lion', 'Crocodile', 'Tiger', 'Deer'],
      answer: 3,
      explain: 'A deer feeds on plants. Tigers, lions and crocodiles are carnivores.',
    },
    {
      section: 'evs',
      q: 'What is the best method to teach "sources of water" to a Class IV group?',
      options: [
        'Have children survey and observe water sources around the school and neighbourhood',
        'Ask children to memorise a list of rivers',
        'Show a single diagram in the textbook',
        'Dictate notes on the topic',
      ],
      answer: 0,
      explain:
        'EVS pedagogy is built on observation, surveys and discussion of the child’s own surroundings. A local survey makes the concept concrete in a way a dictated list cannot.',
    },
    {
      section: 'evs',
      q: 'Which vitamin does the human body make with the help of sunlight?',
      options: ['Vitamin C', 'Vitamin D', 'Vitamin K', 'Vitamin A'],
      answer: 1,
      explain:
        'Ultraviolet light on the skin converts a cholesterol derivative into vitamin D, which the body needs to absorb calcium.',
    },
    {
      section: 'evs',
      q: 'Which of these is a renewable source of energy?',
      options: ['Coal', 'Petroleum', 'Solar energy', 'Natural gas'],
      answer: 2,
      explain:
        'Solar energy is replenished continuously. Coal, petroleum and natural gas are fossil fuels formed over millions of years and are non-renewable.',
    },

    {
      section: 'language',
      q: 'The primary aim of teaching a language at the primary stage is to',
      options: [
        'Ensure error-free handwriting',
        'Prepare children for competitive examinations',
        'Make children memorise grammar rules',
        'Develop the ability to communicate meaningfully',
      ],
      answer: 3,
      explain:
        'Language teaching at this stage is about building real communicative ability across listening, speaking, reading and writing. Grammar is learnt in the service of use, not as an end in itself.',
    },
    {
      section: 'language',
      q: 'In reading, the "top-down" approach means',
      options: [
        'Starting from overall meaning and prior knowledge, then attending to details',
        'Reading a text aloud from the last line upwards',
        'Copying a passage before reading it',
        'Starting from letters and building up to words',
      ],
      answer: 0,
      explain:
        'A top-down reader brings expectations and background knowledge to the text and uses them to make sense of it. Building from letters to words is the bottom-up approach.',
    },
    {
      section: 'language',
      q: 'Choose the word most opposite in meaning to ANCIENT.',
      options: ['Old', 'Modern', 'Historic', 'Primitive'],
      answer: 1,
      explain: 'Ancient means belonging to the distant past; its antonym is modern.',
    },
    {
      section: 'language',
      q: 'Which of the following is a compound word?',
      options: ['Quickly', 'Playful', 'Blackboard', 'Unhappy'],
      answer: 2,
      explain:
        '"Blackboard" joins two independent words. "Playful" and "quickly" are formed with suffixes and "unhappy" with a prefix, so all three are derived words rather than compounds.',
    },
    {
      section: 'language',
      q: 'Remedial teaching is best planned',
      options: [
        'Only for children who fail the annual examination',
        'By repeating the original lesson at a slower pace',
        'At the start of the academic year for everyone',
        'After diagnosing the specific errors and gaps of individual learners',
      ],
      answer: 3,
      explain:
        'Remediation follows diagnosis. Identifying the precise error pattern lets the teacher address the cause, whereas simply repeating the lesson usually reproduces the same difficulty.',
    },
    {
      section: 'language',
      q: 'What is the correct plural of "child"?',
      options: ['Children', 'Childrens', 'Childs', 'Childes'],
      answer: 0,
      explain: '"Child" takes the irregular plural "children". "Childrens" is a common double-plural error.',
    },
  ],
}
