/**
 * UPSC Civil Services Prelims (GS Paper 1) — starter mock.
 *
 * The real GS Paper 1 is 100 questions in 120 minutes, 2 marks each with a
 * one-third penalty. Questions here are deliberately kept to the settled,
 * static core of the syllabus rather than fast-moving current affairs, so the
 * set does not go stale between cycles.
 */
export default {
  slug: 'upsc-cse',
  cat: 'UPSC',
  exam: 'UPSC CSE',
  title: 'UPSC Prelims GS Paper 1 Mock Test',
  fullSpec: 'Full paper: 100 questions · 120 min · 200 marks',
  minutes: 30,
  marks: 2,
  negative: 0.6667,
  pattern:
    'General Studies Paper 1 carries 100 questions for 200 marks in two hours. Each correct answer is worth 2 marks and each wrong answer costs one third of that — 0.67 marks. Paper 2 (CSAT) is qualifying at 33%.',
  sections: [
    { id: 'polity', name: 'Polity & Governance' },
    { id: 'history', name: 'History & Culture' },
    { id: 'geography', name: 'Geography' },
    { id: 'economy', name: 'Economy' },
    { id: 'envsci', name: 'Environment & Science' },
  ],
  questions: [
    {
      section: 'polity',
      q: 'Which Schedule of the Constitution contains the anti-defection provisions?',
      options: ['Eleventh Schedule', 'Eighth Schedule', 'Ninth Schedule', 'Tenth Schedule'],
      answer: 3,
      explain:
        'The Tenth Schedule, inserted by the 52nd Amendment in 1985, governs disqualification on the ground of defection. The Eighth Schedule lists the official languages and the Eleventh deals with panchayats.',
    },
    {
      section: 'polity',
      q: 'Who appoints the Chief Election Commissioner of India?',
      options: ['The President', 'The Chief Justice of India', 'The Parliament', 'The Prime Minister'],
      answer: 0,
      explain:
        'Under Article 324 the President appoints the Chief Election Commissioner. Removal, however, requires the same process as for a Supreme Court judge, which protects the office’s independence.',
    },
    {
      section: 'polity',
      q: 'The Directive Principles of State Policy in the Indian Constitution were borrowed from the constitution of which country?',
      options: ['Canada', 'United Kingdom', 'Ireland', 'United States'],
      answer: 2,
      explain:
        'The Directive Principles came from Ireland. Fundamental Rights were modelled on the United States, parliamentary government on the United Kingdom, and a strong centre with residuary powers on Canada.',
    },
    {
      section: 'polity',
      q: 'Which Article provides for the establishment of the Union Public Service Commission?',
      options: ['Article 324', 'Article 338', 'Article 280', 'Article 315'],
      answer: 3,
      explain:
        'Article 315 provides for a Public Service Commission for the Union and for each state. Article 280 covers the Finance Commission and Article 324 the Election Commission.',
    },
    {
      section: 'polity',
      q: 'How often is the Finance Commission ordinarily constituted?',
      options: ['Every five years', 'Every seven years', 'Every ten years', 'Every three years'],
      answer: 0,
      explain:
        'Article 280 requires the President to constitute a Finance Commission every fifth year, or earlier if needed, to recommend how tax revenue is shared between the Union and the states.',
    },
    {
      section: 'polity',
      q: 'A Money Bill can be introduced only in which House?',
      options: ['A joint sitting', 'Rajya Sabha', 'Lok Sabha', 'Either House'],
      answer: 2,
      explain:
        'Article 110 restricts the introduction of a Money Bill to the Lok Sabha, and only on the President’s recommendation. The Rajya Sabha may hold it for a maximum of 14 days and can only recommend changes.',
    },
    {
      section: 'polity',
      q: 'Which words were added to the Preamble by the 42nd Amendment Act, 1976?',
      options: [
        'Republic and Justice',
        'Liberty and Fraternity',
        'Sovereign and Democratic',
        'Socialist, Secular and Integrity',
      ],
      answer: 3,
      explain:
        'The 42nd Amendment inserted "Socialist" and "Secular" into the description of the Republic and added "Integrity" to the phrase on unity of the nation.',
    },

    {
      section: 'history',
      q: 'Who founded the Arya Samaj?',
      options: ['Swami Dayanand Saraswati', 'Swami Vivekananda', 'Keshab Chandra Sen', 'Raja Ram Mohan Roy'],
      answer: 0,
      explain:
        'Swami Dayanand Saraswati founded the Arya Samaj at Bombay in 1875, with the call to "go back to the Vedas". Raja Ram Mohan Roy founded the Brahmo Samaj.',
    },
    {
      section: 'history',
      q: 'In which year was the Quit India Movement launched?',
      options: ['1930', '1935', '1942', '1945'],
      answer: 2,
      explain:
        'The All India Congress Committee passed the Quit India resolution at Bombay on 8 August 1942, where Gandhi gave the "Do or Die" call.',
    },
    {
      section: 'history',
      q: 'Which Indus Valley site is best known for its dockyard?',
      options: ['Harappa', 'Kalibangan', 'Lothal', 'Dholavira'],
      answer: 2,
      explain:
        'Lothal in Gujarat has a large brick-lined basin widely identified as a dockyard, pointing to maritime trade. Kalibangan is known for ploughed fields and Dholavira for its water management.',
    },
    {
      section: 'history',
      q: 'The Allahabad Pillar inscription (Prayag Prashasti), composed by Harisena, describes the achievements of which ruler?',
      options: ['Harshavardhana', 'Chandragupta Maurya', 'Ashoka', 'Samudragupta'],
      answer: 3,
      explain:
        'Harisena was Samudragupta’s court poet, and the Prayag Prashasti records his military campaigns. It is inscribed on a pillar that already carried Ashokan edicts.',
    },
    {
      section: 'history',
      q: 'Why was the Simon Commission boycotted across India in 1928?',
      options: [
        'It had no Indian member',
        'It recommended separate electorates',
        'It sought to abolish the provincial legislatures',
        'It proposed the partition of Bengal',
      ],
      answer: 0,
      explain:
        'All seven members of the Commission were British, which Indians read as a judgement that they were unfit to decide their own constitutional future. Protesters met it with black flags and cries of "Simon, go back".',
    },

    {
      section: 'geography',
      q: 'Which is the highest mountain peak lying entirely within India?',
      options: ['Kamet', 'Kangchenjunga', 'Nanda Devi', 'Saltoro Kangri'],
      answer: 2,
      explain:
        'Nanda Devi (7,816 m) in Uttarakhand is the highest peak wholly inside India. Kangchenjunga is higher but sits on the India–Nepal border.',
    },
    {
      section: 'geography',
      q: 'The Deccan Plateau is bounded on its western edge by which range?',
      options: ['Vindhya Range', 'Aravalli Range', 'Satpura Range', 'Western Ghats'],
      answer: 3,
      explain:
        'The Western Ghats form the steep western edge of the Deccan Plateau, with the Eastern Ghats on the other side and the Satpura and Vindhya ranges to the north.',
    },
    {
      section: 'geography',
      q: 'Which Indian state has the longest coastline?',
      options: ['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Andhra Pradesh'],
      answer: 0,
      explain:
        'Gujarat has the longest coastline of any Indian state, at roughly 1,600 km, helped by the deeply indented Gulfs of Kutch and Khambhat.',
    },
    {
      section: 'geography',
      q: 'The zone of low pressure and calm winds known as the Doldrums is found near which latitude?',
      options: ['The Equator', 'The Tropic of Cancer', '30° North and South', 'The Arctic Circle'],
      answer: 0,
      explain:
        'The Doldrums, or the Inter-Tropical Convergence Zone, lies near the Equator where the trade winds meet and air rises rather than blowing horizontally.',
    },
    {
      section: 'geography',
      q: 'Which soil type is considered most suitable for growing cotton?',
      options: ['Red soil', 'Alluvial soil', 'Black soil', 'Laterite soil'],
      answer: 2,
      explain:
        'Black soil, also called regur or black cotton soil, retains moisture well and is rich in lime and magnesia, making it ideal for cotton. It covers much of the Deccan trap region.',
    },

    {
      section: 'economy',
      q: 'The repo rate is the rate at which',
      options: [
        'the RBI borrows from commercial banks',
        'banks lend to one another overnight',
        'commercial banks lend to their customers',
        'the RBI lends short-term funds to commercial banks',
      ],
      answer: 3,
      explain:
        'The repo rate is the RBI’s lending rate to banks against government securities. The rate at which the RBI borrows from banks is the reverse repo rate.',
    },
    {
      section: 'economy',
      q: 'NITI Aayog, set up in 2015, replaced which body?',
      options: ['The Planning Commission', 'The National Development Council', 'The Economic Advisory Council', 'The Finance Commission'],
      answer: 0,
      explain:
        'NITI Aayog replaced the Planning Commission, moving from centrally allocated five-year plans to an advisory, "cooperative federalism" role. The National Development Council was a separate body.',
    },
    {
      section: 'economy',
      q: 'GDP at market price minus depreciation equals',
      options: [
        'National income',
        'Personal disposable income',
        'NDP at market price',
        'GNP at factor cost',
      ],
      answer: 2,
      explain:
        'Subtracting depreciation — the consumption of fixed capital — from a gross measure gives the corresponding net measure at the same valuation, so GDP at market price becomes NDP at market price.',
    },
    {
      section: 'economy',
      q: 'Which of the following is NOT a component of India’s foreign exchange reserves?',
      options: [
        'Gold',
        'Special Drawing Rights',
        'Foreign currency assets',
        'Public debt of the Union government',
      ],
      answer: 3,
      explain:
        'India’s forex reserves comprise foreign currency assets, gold, SDRs and the reserve tranche position with the IMF. Domestic public debt is a liability of the government, not a reserve asset.',
    },

    {
      section: 'envsci',
      q: 'Among these greenhouse gases, which has the highest global warming potential?',
      options: ['Sulphur hexafluoride', 'Carbon dioxide', 'Methane', 'Nitrous oxide'],
      answer: 0,
      explain:
        'Sulphur hexafluoride has a global warming potential in the tens of thousands over a hundred years, far above nitrous oxide and methane. CO₂ is the reference gas with a GWP of 1, but it dominates warming because it is emitted in vastly larger volumes.',
    },
    {
      section: 'envsci',
      q: 'In which year was Project Tiger launched in India?',
      options: ['1968', '1973', '1980', '1992'],
      answer: 1,
      explain:
        'Project Tiger began in 1973 with nine reserves, and is now administered through the National Tiger Conservation Authority.',
    },
    {
      section: 'envsci',
      q: 'The Ramsar Convention is an international treaty concerned with',
      options: ['Trade in endangered species', 'Persistent organic pollutants', 'Wetlands', 'Migratory birds'],
      answer: 2,
      explain:
        'Signed at Ramsar, Iran, in 1971, the convention provides for the conservation and wise use of wetlands. Trade in endangered species is covered by CITES.',
    },
    {
      section: 'envsci',
      q: 'Which of the following is a Kharif crop?',
      options: ['Barley', 'Wheat', 'Mustard', 'Rice'],
      answer: 3,
      explain:
        'Kharif crops are sown with the onset of the south-west monsoon in June and harvested in autumn — rice, maize, cotton, jowar. Wheat, mustard and barley are Rabi crops sown in winter.',
    },
  ],
}
