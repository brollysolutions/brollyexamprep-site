/**
 * State PSC Prelims — starter mock.
 *
 * Every state commission sets its own paper, but the General Studies section
 * is broadly common: Indian polity, history, geography, economy and general
 * science, with a state-specific layer on top. This set covers the common
 * core, so it is useful whichever commission a candidate is sitting.
 */
export default {
  slug: 'state-psc',
  cat: 'State Exams',
  exam: 'State PSC',
  title: 'State PSC Prelims Mock Test',
  fullSpec: 'Varies by commission — typically 100–150 questions · 120 min',
  minutes: 25,
  marks: 2,
  negative: 0.6667,
  pattern:
    'Most state commissions run a General Studies prelims paper of 100 to 150 objective questions in two hours, with a one-third negative penalty. The syllabus is the national core — polity, history, geography, economy and science — plus a state-specific section that this test does not attempt to cover.',
  sections: [
    { id: 'polity', name: 'Indian Polity' },
    { id: 'history', name: 'History' },
    { id: 'geography', name: 'Geography' },
    { id: 'economy', name: 'Economy' },
    { id: 'science', name: 'General Science' },
  ],
  questions: [
    {
      section: 'polity',
      q: 'The Governor of a state is appointed by',
      options: ['The Prime Minister', 'The President of India', 'The state legislature', 'The Chief Minister'],
      answer: 1,
      explain:
        'Under Article 155 the President appoints the Governor, who holds office during the President’s pleasure. The Governor is not elected by the state.',
    },
    {
      section: 'polity',
      q: 'What is the maximum permitted strength of a state Legislative Assembly?',
      options: ['250', '400', '500', '550'],
      answer: 2,
      explain:
        'Article 170 caps a Legislative Assembly at 500 members and sets a floor of 60, with special exceptions for some smaller states such as Sikkim, Goa and Mizoram.',
    },
    {
      section: 'polity',
      q: 'Panchayati Raj institutions were given constitutional status by which amendment?',
      options: [
        'The 42nd Amendment, 1976',
        'The 44th Amendment, 1978',
        'The 73rd Amendment, 1992',
        'The 74th Amendment, 1992',
      ],
      answer: 2,
      explain:
        'The 73rd Amendment added Part IX and the Eleventh Schedule, covering rural local government. The 74th Amendment did the same for urban local bodies.',
    },
    {
      section: 'polity',
      q: 'Which of these states has a bicameral legislature?',
      options: ['Punjab', 'Kerala', 'Tamil Nadu', 'Karnataka'],
      answer: 3,
      explain:
        'Karnataka has both a Legislative Assembly and a Legislative Council. Only a handful of states maintain a Council; Kerala, Tamil Nadu and Punjab are unicameral.',
    },
    {
      section: 'polity',
      q: 'The Chief Minister of a state is appointed by',
      options: ['The Governor', 'The Legislative Assembly', 'The Prime Minister', 'The President'],
      answer: 0,
      explain:
        'Article 164 provides that the Governor appoints the Chief Minister — by convention the leader who commands a majority in the Legislative Assembly — and, on the Chief Minister’s advice, the other ministers.',
    },

    {
      section: 'history',
      q: 'Who founded the Vijayanagara Empire?',
      options: ['Krishnadevaraya', 'Harihara and Bukka', 'Rajaraja Chola', 'Pulakeshin II'],
      answer: 1,
      explain:
        'The brothers Harihara and Bukka founded Vijayanagara in 1336. Krishnadevaraya, its most celebrated ruler, came almost two centuries later.',
    },
    {
      section: 'history',
      q: 'The Battle of Talikota in 1565 was fought between Vijayanagara and',
      options: ['The Bahmani Sultanate under one ruler', 'The Mughals', 'The Deccan Sultanates', 'The Portuguese'],
      answer: 2,
      explain:
        'A confederacy of the Deccan Sultanates — Bijapur, Ahmadnagar, Golconda and Bidar — defeated Vijayanagara at Talikota, after which the capital Hampi was sacked.',
    },
    {
      section: 'history',
      q: 'Ashoka’s inscriptions were first deciphered by',
      options: ['Alexander Cunningham', 'John Marshall', 'William Jones', 'James Prinsep'],
      answer: 3,
      explain:
        'James Prinsep cracked the Brahmi script in 1837, which made the Ashokan edicts readable and effectively recovered Ashoka for history.',
    },
    {
      section: 'history',
      q: 'The Non-Cooperation Movement was withdrawn following which event?',
      options: [
        'The Chauri Chaura incident',
        'The arrival of the Simon Commission',
        'The Poona Pact',
        'The Jallianwala Bagh massacre',
      ],
      answer: 0,
      explain:
        'After a mob burned a police station at Chauri Chaura in February 1922, killing the policemen inside, Gandhi called off the movement because it had turned violent.',
    },
    {
      section: 'history',
      q: 'Which fort served as the capital of Shivaji’s Maratha kingdom?',
      options: ['Sinhagad', 'Raigad', 'Pratapgad', 'Panhala'],
      answer: 1,
      explain:
        'Shivaji was crowned Chhatrapati at Raigad in 1674 and made it his capital. Pratapgad and Sinhagad are known for particular battles rather than as seats of government.',
    },

    {
      section: 'geography',
      q: 'Which is the largest Indian state by area?',
      options: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh'],
      answer: 2,
      explain:
        'Rajasthan covers about 342,000 sq km, ahead of Madhya Pradesh. Uttar Pradesh is the largest by population, not by area.',
    },
    {
      section: 'geography',
      q: 'The Western Ghats are also known as',
      options: ['The Nilgiris', 'The Aravalli', 'The Vindhya', 'The Sahyadri'],
      answer: 3,
      explain:
        'Sahyadri is the local name for the Western Ghats. The Nilgiris are a specific range within them, where the Western and Eastern Ghats meet.',
    },
    {
      section: 'geography',
      q: 'Which river is known as the "Sorrow of Bihar"?',
      options: ['Kosi', 'Son', 'Damodar', 'Gandak'],
      answer: 0,
      explain:
        'The Kosi shifts its course frequently and floods large parts of north Bihar. The Damodar, by contrast, was called the "Sorrow of Bengal".',
    },
    {
      section: 'geography',
      q: 'The Nilgiri Biosphere Reserve extends across which three states?',
      options: [
        'Karnataka, Telangana and Tamil Nadu',
        'Tamil Nadu, Kerala and Karnataka',
        'Karnataka, Goa and Maharashtra',
        'Kerala, Tamil Nadu and Andhra Pradesh',
      ],
      answer: 1,
      explain:
        'India’s first biosphere reserve, notified in 1986, spans the Nilgiri hills across Tamil Nadu, Kerala and Karnataka.',
    },
    {
      section: 'geography',
      q: 'Through how many Indian states does the Tropic of Cancer pass?',
      options: ['6', '7', '8', '9'],
      answer: 2,
      explain:
        'Eight — Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram, running roughly west to east.',
    },

    {
      section: 'economy',
      q: 'The "Blue Revolution" in India refers to a rapid increase in',
      options: ['Egg production', 'Milk production', 'Fish production', 'Oilseed production'],
      answer: 2,
      explain:
        'The Blue Revolution concerns fisheries and aquaculture. The White Revolution covered milk, the Yellow Revolution oilseeds and the Silver Revolution eggs.',
    },
    {
      section: 'economy',
      q: 'The Minimum Support Price for crops is recommended by',
      options: [
        'NITI Aayog',
        'The Reserve Bank of India',
        'The Food Corporation of India',
        'The Commission for Agricultural Costs and Prices',
      ],
      answer: 3,
      explain:
        'CACP recommends the MSP, which the Cabinet Committee on Economic Affairs then approves. The Food Corporation of India handles procurement and storage, not price-setting.',
    },
    {
      section: 'economy',
      q: 'Which of these taxes is levied and collected by state governments?',
      options: ['State GST', 'Income tax', 'Customs duty', 'Corporate tax'],
      answer: 0,
      explain:
        'Under the GST regime the state component, SGST, accrues to the state. Customs duty, corporate tax and income tax are all levied by the Union.',
    },
    {
      section: 'economy',
      q: 'The Green Revolution in India began in which period?',
      options: ['The early 1950s', 'The mid-1960s', 'The mid-1970s', 'The early 1980s'],
      answer: 1,
      explain:
        'High-yielding varieties of wheat were introduced from the mid-1960s, first in Punjab, Haryana and western Uttar Pradesh, under the guidance of M. S. Swaminathan and Norman Borlaug.',
    },

    {
      section: 'science',
      q: 'What is the SI unit of pressure?',
      options: ['Watt', 'Newton', 'Pascal', 'Joule'],
      answer: 2,
      explain: 'One pascal is one newton per square metre. The newton measures force and the joule energy.',
    },
    {
      section: 'science',
      q: 'Which part of a plant carries out most of its photosynthesis?',
      options: ['Flowers', 'Roots', 'Stem', 'Leaves'],
      answer: 3,
      explain:
        'Leaves hold the bulk of the chlorophyll and present a broad surface to sunlight, which makes them the plant’s main photosynthetic organ.',
    },
    {
      section: 'science',
      q: 'Which blood group is known as the universal donor?',
      options: ['O negative', 'B negative', 'A positive', 'AB positive'],
      answer: 0,
      explain:
        'O negative red cells carry neither A nor B antigens nor the Rh factor, so they can be given to a recipient of any group. AB positive is the universal recipient.',
    },
    {
      section: 'science',
      q: 'Which instrument is used to measure atmospheric pressure?',
      options: ['Hygrometer', 'Barometer', 'Anemometer', 'Manometer'],
      answer: 1,
      explain:
        'A barometer measures atmospheric pressure. A hygrometer measures humidity and an anemometer wind speed.',
    },
    {
      section: 'science',
      q: 'Which metal is liquid at room temperature?',
      options: ['Zinc', 'Sodium', 'Mercury', 'Lead'],
      answer: 2,
      explain:
        'Mercury is the only metal that is liquid at ordinary room temperature, which is why it was long used in thermometers and barometers.',
    },
    {
      section: 'science',
      q: 'Which is the largest gland in the human body?',
      options: ['Salivary gland', 'Pancreas', 'Thyroid', 'Liver'],
      answer: 3,
      explain:
        'The liver is the largest gland, secreting bile for digestion while also handling detoxification, storage and a wide range of metabolic work.',
    },
  ],
}
