/**
 * Questions asked about each study-material subject.
 *
 * The subject hubs already carry a reading order and a method section. What
 * they were missing is the set of decisions a candidate makes before starting
 * a subject at all — how long it takes, what order to read it in, whether the
 * material serves their exam, and which parts can be skipped. Those questions
 * get asked constantly and are answered nowhere on a topic page, because a
 * topic page is about one topic.
 *
 * These are rendered visibly on the subject page and are not emitted as FAQ
 * structured data anywhere they are not shown.
 *
 * Keyed by subject slug, matching SUBJECTS in src/data/study/index.js.
 * Answers avoid stating question counts, cutoffs or marks for a named cycle;
 * where a figure would age, the answer points at the notification instead.
 */

const FAQS = {
  'quantitative-aptitude': [
    {
      q: 'How long does it take to build quantitative aptitude from a weak base?',
      a: 'Plan on three to four months of daily work to move from weak to competitive, and expect the first six weeks to show very little. The reason is that arithmetic fluency has to be rebuilt before topic methods produce any speed gain: a candidate who cannot convert a fraction to a percentage instantly will be slow at data interpretation no matter how well they understand the topic. Fifteen minutes of calculation drill a day alongside topic study is what compresses that timeline; nothing else does.',
    },
    {
      q: 'Should I learn shortcuts or the standard method first?',
      a: 'The standard method first, always, and then the shortcut for the question forms you have met often enough to recognise. A shortcut learned without the method behind it is applied to questions it does not fit, which produces confident wrong answers — the most expensive kind where negative marking applies. Once the method is secure, the shortcut is a compression of something you already understand and you will notice when it does not apply.',
    },
    {
      q: 'Which topics carry the most marks?',
      a: 'Percentages and ratio, by a distance, because they are not only examined directly but sit underneath profit and loss, interest, discount, mixtures and most data interpretation. Time and work and time, speed and distance are ratio problems in different clothing. The table above shows what each lesson records for the exams that set it, and the practical implication is the same across papers: fix the arithmetic base before spending time on the topics that feel more advanced.',
    },
    {
      q: 'Is a calculator allowed?',
      a: 'In most government recruitment papers it is not, and in several entrance tests an on-screen calculator is provided with restrictions. This matters more than it sounds: practice done with a calculator builds none of the mental arithmetic the paper requires, so practise on paper, without one, from the beginning. Check your own notification for what is permitted in your examination before assuming either way.',
    },
    {
      q: 'How many questions should I solve per topic?',
      a: 'Enough that you stop having to decide which method applies — for most topics that is somewhere between fifty and a hundred questions, and it is a far better target than a number of hours. Read the topic once, solve twenty, then return to the explanation for whatever the twenty exposed. Re-reading before solving feels productive and builds recognition rather than capability.',
    },
  ],

  reasoning: [
    {
      q: 'How is reasoning different from quantitative aptitude to prepare?',
      a: 'Nothing in reasoning has to be memorised, which means progress is faster and depends almost entirely on volume. Every topic is a method — a way of representing information on paper — and methods respond to daily repetition rather than to study. Two or three puzzles a day over two months teaches far more than the same number of puzzles crammed into a fortnight, because what is being built is pattern recognition and that accumulates rather than being learned.',
    },
    {
      q: 'Why do I understand puzzles in the solution but not in the exam?',
      a: 'Because reading a solution tests comprehension and the exam tests construction. The gap is almost always the diagram: candidates who solve well draw the arrangement immediately and fluently, and candidates who struggle try to hold it in their heads. Draw every puzzle, even easy ones, until drawing is automatic — the representation is the solution, and building it quickly is the whole skill.',
    },
    {
      q: 'How much time should I spend on one puzzle set before moving on?',
      a: 'Set a hard limit before you start and obey it. In a sectionally timed paper, a set that resists you for four minutes has cost you two other sets you could have solved, and the discipline to abandon a half-worked puzzle is what most candidates lack. Practise abandonment deliberately in mocks: it is trainable, and it is worth more marks than another method.',
    },
    {
      q: 'Is non-verbal reasoning worth preparing?',
      a: 'It depends entirely on your paper. Non-verbal reasoning — figure series, mirror images, paper folding, embedded figures — is weighted in SSC, railway and defence papers and largely absent from banking preparation, so candidates who move between exam families frequently arrive under-prepared for it. Check your syllabus and past papers rather than assuming: it is a small, closed, very drillable body of question forms and it is cheap marks when it appears.',
    },
    {
      q: 'What order should I read the topics in?',
      a: 'The order on this page. Coding-decoding and series come first because both rest on knowing the alphabet as numbers, and blood relations introduces the habit of drawing rather than reasoning in your head. Syllogism, seating arrangement and puzzles come last because they carry the most marks in a banking paper and all depend on the discipline of branching on paper that the earlier topics build.',
    },
  ],

  english: [
    {
      q: 'Can English be improved in a month?',
      a: 'Half of it can. Grammar is a finite, closed set of rules — agreement, tense sequence, prepositions, articles, modifiers, parallelism — and working through it systematically once, then practising until application is automatic, is genuinely a few weeks of work. Vocabulary and reading speed are cumulative and respond to daily contact over months. A candidate with one month should spend it on grammar and reading practice, and accept that the vocabulary questions will be answered on whatever base they already have.',
    },
    {
      q: 'Why does English decide results more than its mark count suggests?',
      a: 'Because it carries a sectional cut-off in almost every banking and insurance examination, which means a candidate can score well overall and still be eliminated on this section alone. It is also the section candidates most often leave until last. The combination is why English disqualifies more strong candidates than any other section of a banking paper.',
    },
    {
      q: 'How should I build vocabulary for competitive exams?',
      a: 'From reading rather than from lists, and in context rather than as isolated pairs. A word met three times in editorial prose is retained; the same word memorised from a list of two hundred is not. Keep a short daily record of words you actually encountered and could not define, review it weekly, and accept that this is a months-long accumulation. Lists have one legitimate use: revising words you have already met.',
    },
    {
      q: 'What is the fastest way to improve reading comprehension?',
      a: 'Read the questions first, then the passage, and answer only from what the passage states rather than from what you know about the subject. Most comprehension marks are lost to inference that the text does not support. Beyond technique, the underlying variable is reading speed, and that improves with a page of dense prose a day — an editorial or a long-form article — read at pace rather than studied.',
    },
    {
      q: 'Does the same English preparation serve banking, SSC and MBA entrances?',
      a: 'The grammar half does. The rest diverges: SSC weights vocabulary and error detection, banking weights cloze, para jumbles and reading under a sectional clock, and MBA entrances weight reading comprehension and reasoning about arguments far more heavily than grammar. Prepare the grammar once and then let past papers from your own examination decide where the remaining hours go.',
    },
  ],

  history: [
    {
      q: 'Which period carries the most marks?',
      a: 'Modern India, in almost every examination, and by more than ancient and medieval combined in most general studies papers. It is also the period where exact dates are actually asked rather than approximate ones. A candidate short of time should start with modern India and work backwards, which is the reverse of how the subject is usually taught.',
    },
    {
      q: 'How should history be read for an objective paper?',
      a: 'As pairings rather than as narrative. Examinations ask which site had the dockyard, which ruler introduced which coin, which movement was withdrawn after which incident — not what the period felt like. Reading history as a story is enjoyable and does not prepare you for that. Convert each chapter into pairs as you read, and revise the pairs rather than the chapter.',
    },
    {
      q: 'Are NCERT-style school textbooks enough?',
      a: 'For the ancient and medieval periods and for the general shape of modern India, they are a good base and are pitched close to the level most objective papers examine. For state examinations they need a state layer that no national textbook carries, and for descriptive papers they need a second, denser source. The test is whether you can answer past questions from what you have read; if you can, the source is sufficient.',
    },
    {
      q: 'How do I stop confusing dates and sessions?',
      a: 'Build one chronology sheet for the whole modern period and revise the sheet rather than the chapters. Confusions are almost always between adjacent events, and seeing them in sequence on a single page fixes them faster than rereading either chapter. Add to the sheet only what you have actually confused in practice, so it stays short enough to read in one sitting.',
    },
  ],

  geography: [
    {
      q: 'Why does geography reward maps more than notes?',
      a: 'Because most questions are locational: which range, which river, which pass, which state a resource sits in. A candidate who can place features on a blank outline answers those in seconds, while one who has memorised lists has to reconstruct relationships every time. Work with an outline map from the first week and mark features onto it as you read.',
    },
    {
      q: 'What order should the three topics be read in?',
      a: 'Physical geography first, because it explains the other two. Monsoon behaviour, soils and drainage all follow from relief and latitude, so a candidate who understands the physical basis retains Indian geography instead of memorising it. Indian geography then applies that basis, and world geography covers the regions and resources examinations actually ask about.',
    },
    {
      q: 'How much of geography is current rather than static?',
      a: 'More than candidates expect. Administrative divisions, project commissioning, resource discoveries and environmental designations change, and papers ask about them. Learn the physical and structural material from a standard source, and check anything administrative or recent against a current government source rather than against a textbook edition of uncertain vintage.',
    },
    {
      q: 'Is world geography worth preparing in detail?',
      a: 'Only to the depth your paper asks. In most government recruitment papers world geography appears as a small number of questions on major features, climatic regions and resource distribution, and studying it at the depth of Indian geography is a poor use of hours. Check your past papers and cap the effort accordingly.',
    },
  ],

  polity: [
    {
      q: 'Why is polity considered the most predictable general studies subject?',
      a: 'Because the institutions it describes are fixed, the provisions do not move, and the questions repeat across cycles and across examinations. What changes between papers is depth rather than content: an objective recruitment paper asks which article or which body, while a descriptive paper asks how two institutions interact. The same reading serves both if you learn the provisions and then practise explaining relationships.',
    },
    {
      q: 'What order should the polity topics be read in?',
      a: 'Parliament first, because the executive is accountable to it and the judiciary is defined against it. Reading the executive before the legislature means learning accountability mechanisms before the body they answer to, which is why candidates find the same material harder in the wrong order.',
    },
    {
      q: 'How much of the Constitution text do I need to know?',
      a: 'The article numbers for the provisions that are examined repeatedly — rights, key institutions, emergency provisions, amendment procedure — and the substance of everything else. Memorising article numbers across the whole document is a poor return; the pattern of questions in past papers shows which numbers actually recur, and that is a much shorter list.',
    },
    {
      q: 'Do state examinations examine polity differently?',
      a: 'They examine the same national material and add a state layer: the state legislature, the governor, panchayat and municipal structures, and the state’s own administrative arrangements. That layer is where state papers differentiate candidates, and it is the part national preparation material omits. Prepare it from the state’s own sources and from the commission’s past papers.',
    },
  ],

  constitution: [
    {
      q: 'How is the Constitution examined differently from polity?',
      a: 'Polity is about how the institutions work; the Constitution is examined article by article, as text. That makes it unusually learnable, because the numbers do not move — but it also means the questions are precise, and an approximate answer scores nothing. Where a count does move, such as the number of amendments, this material says so rather than printing a figure that will age.',
    },
    {
      q: 'What should I read first?',
      a: 'The making of the Constitution and the Preamble, because they explain why the document looks as it does — the sources it drew on, the debates that shaped it, and what its opening lines actually commit to. Rights and duties follow, and the amendment process and the basic structure doctrine last, since the doctrine is only meaningful once you know what it limits.',
    },
    {
      q: 'How important is the basic structure doctrine?',
      a: 'It is examined regularly and it is frequently answered badly, because candidates learn the name of the case rather than the content of the doctrine. Learn what it holds, what it constrains, and why it exists; that is what allows you to answer a question phrased in a way you have not seen before, which is how it is usually phrased.',
    },
    {
      q: 'Are schedules and parts worth memorising?',
      a: 'The schedules that are examined repeatedly are worth knowing by number and subject; the rest are worth recognising. Past papers settle which is which faster than any general rule, and the list of genuinely recurring schedules is short enough to fit on a single revision sheet.',
    },
  ],

  economy: [
    {
      q: 'Do I need an economics background?',
      a: 'No. Competitive papers examine the concepts, the institutions and the policy framework rather than economic theory or mathematics. What they do require is precision about definitions — the difference between fiscal and revenue deficit, between repo and reverse repo, between direct and indirect tax — because those distinctions are exactly what the questions turn on.',
    },
    {
      q: 'How do I handle economic data that keeps changing?',
      a: 'Learn the structure and check the number. Which body publishes a figure, what it measures, how it is defined and why it moves are stable and examinable. The current value is not, and a figure memorised from a book of uncertain vintage is a liability. Read the current budget and economic survey for direction and for the shape of the year’s policy rather than to memorise tables.',
    },
    {
      q: 'Which parts of the economy syllabus repeat most?',
      a: 'Money and banking, public finance and the institutional framework — the central bank’s instruments, the budget’s components, the tax structure and the bodies that regulate each sector. These are conceptual, stable and repeatedly examined, which makes them a better first investment than the current-affairs surface that gets more attention.',
    },
    {
      q: 'Is state economy examined separately?',
      a: 'In state recruitment papers, substantially. The state’s own resources, agriculture, irrigation, power, industrial policy and development programmes are examined at a depth national material does not reach, and it is where state papers separate candidates. Use the state’s own economic publications rather than a national summary.',
    },
  ],

  environment: [
    {
      q: 'How much environment is actually asked?',
      a: 'More than its position in most syllabus documents suggests, and increasingly so. Ecology, biodiversity, protected areas, pollution and climate policy appear across general studies papers, and the material overlaps heavily with geography and with current affairs — which means hours spent here pay in three places rather than one.',
    },
    {
      q: 'Should I learn conventions and protocols by name and year?',
      a: 'By name, subject and what they commit signatories to; by year only where past papers show the year being asked. The more common question is what an agreement does rather than when it was signed, and a candidate who knows the substance can usually place the period. Keep a single sheet of agreements with one line each and revise it rather than the chapters.',
    },
    {
      q: 'How do I keep up with environmental current affairs?',
      a: 'Track categories rather than headlines: new protected areas and designations, species status changes, major reports and their publishing bodies, and policy or regulatory decisions. A monthly consolidation organised under those headings is far more revisable than a daily diary, and it maps directly onto how the questions are framed.',
    },
    {
      q: 'Is ecology worth studying before biodiversity?',
      a: 'Yes, and the order matters more here than in most subjects. Ecosystem structure, energy flow and nutrient cycling explain why biodiversity is distributed as it is and why particular interventions work. Learned in reverse, biodiversity becomes a list of names to memorise instead of a subject with reasons in it.',
    },
  ],

  science: [
    {
      q: 'What level of science do general studies papers examine?',
      a: 'School level, applied. The questions are about everyday phenomena, common applications, health, technology in the news and basic principles — not about the depth a science degree covers. A science graduate should resist reading their degree material, and a candidate without a science background should not be intimidated: the level is reachable in months.',
    },
    {
      q: 'Should I study physics, chemistry and biology separately?',
      a: 'For general studies, study them as one applied subject organised around phenomena rather than as three disciplines. For examinations that set separate science papers, use the dedicated subject libraries on this site instead — the depth required there is different and the material is written accordingly.',
    },
    {
      q: 'How do I prepare science and technology current affairs?',
      a: 'By category: space missions and their objectives, defence systems and their capability, health and disease, energy, and computing and communications developments. Learn what a development does and who did it rather than the date it was announced. That framing matches how the questions are set and it survives the news cycle.',
    },
    {
      q: 'Is everyday science worth a separate study slot?',
      a: 'Yes, and it is under-prepared relative to how often it is examined. Why a pressure cooker works, why a mirage forms, why a particular deficiency causes a particular symptom — these are cheap, repeatable marks, and they are rarely covered in the same place as textbook science.',
    },
  ],

  'art-culture': [
    {
      q: 'Why is art and culture considered hard to prepare?',
      a: 'Because it has no natural boundary and no single source, so candidates read widely and retain little. The fix is to work from past papers backwards: they show that the same categories recur — classical dance forms, architectural styles and their identifying features, festivals and their regions, literature and its language and period. Prepare those categories properly and leave the rest.',
    },
    {
      q: 'How should the material be organised?',
      a: 'As tables rather than as prose. A dance form with its state, its distinguishing feature and its notable exponents; a temple style with its period, its region and its architectural markers. The questions are almost always matching questions, so notes built as pairs are directly usable and notes built as paragraphs are not.',
    },
    {
      q: 'Do state examinations examine culture differently?',
      a: 'Substantially. State papers examine the state’s own monuments, crafts, festivals, folk forms and literature at a level of detail no national source covers, and it is a reliable differentiator between candidates. Use state publications and the commission’s past papers for that layer.',
    },
    {
      q: 'How much time is this subject worth?',
      a: 'Less than its breadth suggests and more than candidates give it. It is usually a small number of questions per paper, but they are answerable and they are frequently conceded. An hour a week on pair-format notes, sustained over months, is a better allocation than a month of intensive reading that will not be retained.',
    },
  ],

  physics: [
    {
      q: 'How deep does physics go in competitive exams?',
      a: 'It depends entirely on the paper. In general studies papers physics appears as applied everyday phenomena at school level. In engineering and medical entrance tests it is examined at the depth of the senior-secondary syllabus, with numerical problem-solving under time. These are different subjects in practice, and preparing for one does not prepare you for the other.',
    },
    {
      q: 'Should I focus on numericals or on concepts?',
      a: 'Concepts first, then numericals in volume — but the ratio depends on your paper. Where physics is examined as applied general knowledge, numerical practice is nearly worthless. Where it is examined in an entrance test, numerical speed is most of the score, and the way to build it is a large number of solved problems rather than more reading.',
    },
    {
      q: 'Which topics are examined most consistently?',
      a: 'Mechanics, because everything else builds on it, and the areas with everyday applications — heat, light, sound, electricity and magnetism — because they generate the applied questions general papers favour. The lesson table above records what each topic carries for the exams that set it.',
    },
    {
      q: 'How do I stop making unit and sign errors?',
      a: 'By writing units at every line of working rather than at the answer, and by redoing wrong questions with that discipline instead of just reading the correct solution. A large share of lost marks in physics are conversions and signs rather than concepts, and the error rate falls quickly once the habit is in place.',
    },
  ],

  chemistry: [
    {
      q: 'How much chemistry do general studies papers ask?',
      a: 'Applied chemistry at school level: common compounds and their uses, everyday reactions, materials, fuels, fertilisers and the chemistry behind health and environment questions. The theoretical structure that dominates an entrance syllabus is largely absent, so a general studies candidate should read for applications rather than for mechanism.',
    },
    {
      q: 'What is the right order for the topics?',
      a: 'Atomic structure first, then chemical bonding, then organic chemistry. Bonding is unintelligible without structure, and organic chemistry is a set of consequences of bonding. Read in this order and each topic explains the next; read out of order and all three become memorisation.',
    },
    {
      q: 'Is organic chemistry worth the time for a government exam?',
      a: 'Only at the applied level — naming, common compounds, polymers, fuels and biologically important molecules. The reaction mechanisms that occupy an entrance syllabus are rarely examined in recruitment papers, and the past papers for your own exam will show this quickly. For entrance tests the position reverses entirely.',
    },
    {
      q: 'How should I revise chemistry facts that keep slipping?',
      a: 'One sheet of the specific things you have actually forgotten in practice — a formula you keep misremembering, a compound whose common name you swap, a reagent you cannot place. Built from your own errors rather than from a chapter, it stays short, and short is what makes it get revised.',
    },
  ],

  mathematics: [
    {
      q: 'How is this different from quantitative aptitude?',
      a: 'Quantitative aptitude is arithmetic under time pressure — percentages, ratio, interest, data interpretation — and it is what most recruitment papers examine. Mathematics here covers algebra, geometry, mensuration and trigonometry, which are examined in SSC tier papers, engineering entrance tests and several state examinations at greater depth. Check which of the two your paper actually sets before choosing where to spend months.',
    },
    {
      q: 'Do I need to memorise formulas or derive them?',
      a: 'Memorise, and understand enough to know when a formula applies. There is no time to derive under an objective clock, so the working set has to be immediate. The reliable method is writing the formula sheet out from memory on a schedule rather than reading it — recall practice, not review.',
    },
    {
      q: 'Which topic gives the fastest improvement?',
      a: 'Geometry and mensuration for most candidates, because the question forms are finite and highly repetitive: a limited set of configurations generates most of what is asked. Trigonometry is next, since the identities are a closed list. Algebra rewards the most practice and improves the most slowly.',
    },
    {
      q: 'How much geometry theory do I need?',
      a: 'The theorems that generate questions — similarity, circle properties, triangle centres, and the standard mensuration results — known well enough to apply without reconstructing. Proof-level understanding is rarely examined in objective papers, and time spent there is better spent on solving configurations until you recognise them on sight.',
    },
  ],

  biology: [
    {
      q: 'What does biology cover in a general studies paper?',
      a: 'Human physiology, nutrition and deficiency diseases, common diseases and their causative agents, plant biology at an applied level, and genetics at the level of basic inheritance. It overlaps substantially with everyday science and with health-related current affairs, which makes it efficient material for a general studies candidate.',
    },
    {
      q: 'Is biology worth preparing if I have a non-science background?',
      a: 'Yes, and it is usually the most accessible of the three sciences for a non-science candidate, because it rewards organised recall rather than problem-solving. The material is descriptive, the categories are clear, and past papers show a short list of topics that recur — deficiency diseases, disease vectors, organ systems and basic inheritance among them.',
    },
    {
      q: 'How should I revise biology so it stays?',
      a: 'As tables and pairs: a vitamin with its deficiency and its source, a disease with its agent and its vector, a hormone with its gland and its effect. Prose notes on biology are read once and retained poorly. Pair-format notes match how the questions are set and can be revised in minutes.',
    },
    {
      q: 'How much genetics is examined?',
      a: 'Basic inheritance, common genetic disorders, and the vocabulary — genes, chromosomes, alleles, DNA structure — at a level that supports current-affairs questions about biotechnology. The mathematical genetics of an entrance syllabus is not usually part of a general studies paper, and past papers for your own exam will confirm the level quickly.',
    },
  ],

  'general-knowledge': [
    {
      q: 'How is static general knowledge different from current affairs?',
      a: 'Static general knowledge does not change — capitals, currencies, national symbols, superlatives, organisations and their headquarters, awards and their fields. Current affairs does. The two need completely different treatment: static material is learned once and revised, while current affairs needs daily contact and periodic consolidation. Mixing them in one set of notes is why both get revised badly.',
    },
    {
      q: 'How much static GK is worth memorising?',
      a: 'The categories past papers actually use, which is a much shorter list than any compilation suggests. International organisations and their headquarters, major awards and their fields, sports events and their governing bodies, books and authors, and national symbols recur; a great deal else in a general knowledge book does not. Let the past papers cap the list.',
    },
    {
      q: 'What is the best way to revise it?',
      a: 'Short and frequent. Static GK decays fast and is recovered fast, so ten minutes daily on a compact sheet outperforms a long session monthly. Keep the sheet to what you have actually failed to recall in practice, and it stays short enough to sustain.',
    },
    {
      q: 'Do state examinations need a separate general knowledge layer?',
      a: 'Yes. State papers examine the state’s own symbols, districts, institutions, festivals, prominent figures and schemes, and none of that appears in national compilations. It is finite, it is heavily examined, and it is where a well-prepared state candidate gains ground.',
    },
  ],

  varc: [
    {
      q: 'How is VARC different from a banking English section?',
      a: 'VARC weights reading comprehension and reasoning about arguments far more heavily than grammar, and the passages are longer, denser and drawn from a wider range of subjects. A banking English section rewards grammar accuracy and speed on short items; VARC rewards the ability to hold a difficult argument in mind and answer about its structure. Preparation that works for one is only partly transferable.',
    },
    {
      q: 'How do I improve reading speed without losing accuracy?',
      a: 'By reading harder material rather than more material. A page a day of dense argumentative prose — the kind that requires attention rather than the kind that flows — builds the capacity the section tests. Speed gained on easy text does not transfer to a passage on philosophy or economics, which is exactly what the paper sets.',
    },
    {
      q: 'Should I read the passage or the questions first?',
      a: 'For VARC, the passage first, once, properly — the opposite of the usual advice for shorter comprehension sections. The questions turn on the structure of the argument rather than on locating a stated fact, and skimming for keywords produces confident wrong answers on exactly the options designed to catch it.',
    },
    {
      q: 'How much time should para summary and para jumbles get?',
      a: 'More than most candidates give them, because they are technique rather than knowledge and improve quickly. Both test the same underlying skill — recognising the direction of an argument — and both have reliable methods: find the opening sentence and follow the connectives for jumbles, and identify the central claim rather than the most detailed sentence for summaries.',
    },
  ],

  dilr: [
    {
      q: 'What makes DILR different from ordinary data interpretation?',
      a: 'Set selection. In a banking paper the data interpretation sets are broadly comparable in difficulty and you attempt most of them. In DILR the sets vary enormously, several are deliberately unsolvable in the time available, and most of the score comes from choosing correctly which sets to attempt. That choice is a trainable skill and it is the one candidates prepare least.',
    },
    {
      q: 'How do I get better at choosing sets?',
      a: 'By practising selection explicitly rather than solving everything. Give yourself the first few minutes of a section to read every set and rank them, then solve in that order and review afterwards whether the ranking was right. Doing this repeatedly builds the judgement; solving sets one after another in the order printed does not.',
    },
    {
      q: 'How much calculation ability does DILR need?',
      a: 'Enough to avoid computing what does not need computing. Approximation, ratio comparison and percentage estimation matter far more than exact arithmetic, because most questions ask which is larger or roughly how much rather than for a precise value. Practise deciding what precision a question actually requires before calculating anything.',
    },
    {
      q: 'Can logical reasoning sets be prepared by topic?',
      a: 'Partly. Recognisable families recur — arrangements, scheduling, distribution, games and tournaments, network and route problems — and knowing the family gives you a starting representation. But the paper deliberately sets unfamiliar structures too, so the durable skill is building a representation from scratch under time, which is why volume and variety matter more here than topic-wise study.',
    },
  ],

  'legal-reasoning': [
    {
      q: 'Do I need to know the law to answer legal reasoning questions?',
      a: 'No, and assuming you do is the most common error. Legal reasoning supplies the principle in the question and asks you to apply it to a set of facts. The answer must follow from the principle as stated, even where the principle differs from the actual law or from what seems fair. Candidates with some legal knowledge often score worse than those without it for exactly this reason.',
    },
    {
      q: 'How should I practise applying a principle?',
      a: 'By writing out, for each question, which words in the principle decided the answer. Almost every question turns on a specific qualifying phrase — a condition, an exception, a word like “knowingly” or “immediately”. Identifying the operative words is the skill, and making it explicit in practice makes it fast in the exam.',
    },
    {
      q: 'Which areas of law appear most often?',
      a: 'Contract, tort and criminal law supply the bulk of the principles used, because they generate fact situations that can be resolved from a stated rule in a few lines. Constitutional principles appear as well. The lessons here are organised accordingly, and the table above records what each carries for the entrance tests that set it.',
    },
    {
      q: 'Is legal reasoning the same across CLAT, AILET and other law entrances?',
      a: 'The underlying skill is the same, but the format is not. Some papers set passage-based legal reasoning where the principle is embedded in a longer comprehension passage, and others set discrete principle-and-fact questions. Check your own paper’s recent format, because passage-based legal reasoning also tests reading speed in a way discrete questions do not.',
    },
  ],
}

/** The FAQ list for a subject, or undefined where none is written yet. */
export function getSubjectFaqs(subject) {
  return FAQS[subject]
}

export default FAQS
