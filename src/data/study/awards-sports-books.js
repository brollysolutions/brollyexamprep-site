/**
 * Awards, Sports and Books —
 * /study-material/general-knowledge/awards-sports-books/
 *
 * Three classic general-awareness blocks in one page, all of them pairing
 * tables: award with field, sport with its terms and trophies, and book with
 * author. Current winners and champions are deliberately excluded.
 */
export default {
  subject: 'general-knowledge',
  subjectName: 'General Knowledge',
  slug: 'awards-sports-books',
  title: 'Awards, Sports & Books',
  seoTitle: 'Awards, Sports and Books GK | Honours, Trophies, Authors & Practice',
  metaDescription:
    'Complete awards, sports and books general knowledge for SSC, RRB, banking and state exams — civilian and gallantry awards, the Nobel and international prizes.',
  readMinutes: 22,
  lead: [
    'Awards, sports and books belong together because all three are examined the same way: something is named and you are asked what field it belongs to, or who won it, or who wrote it. None of it requires understanding, and all of it is quick to learn if organised as tables.',
    'The important discipline here is separating the permanent from the annual. Which award is India\'s highest civilian honour does not change; who received it last year does. Which trophy belongs to which sport does not change; who holds it does. This page carries only the first kind, and marks clearly where the second begins.',
  ],

  weightage: [
    { exam: 'RRB NTPC / Group D', count: '4–6 questions', note: 'Sports and awards are staples of the railway general awareness section.' },
    { exam: 'SSC CGL / CHSL Tier 1', count: '3–4 questions', note: 'Awards by field, sports terms and books with authors.' },
    { exam: 'Banking and insurance GA', count: '2–4 questions', note: 'Mostly current — recent award winners and tournament results.' },
    { exam: 'State PSC Prelims', count: '2–3 questions', note: 'Including the state\'s own awards and sportspersons.' },
    { exam: 'Defence and police exams', count: '3–4 questions', note: 'Gallantry awards in particular are asked directly.' },
  ],

  contents: [
    { icon: 'target', title: 'Civilian and gallantry awards', sub: 'India\'s national honours', href: '#civilian' },
    { icon: 'globe', title: 'Nobel and world prizes', sub: 'International honours', href: '#nobel' },
    { icon: 'layers', title: 'Indian awards by field', sub: 'Cinema, literature, science, sport', href: '#field' },
    { icon: 'play', title: 'Sports: terms and teams', sub: 'Players per side and vocabulary', href: '#sports' },
    { icon: 'chart', title: 'Trophies and tournaments', sub: 'Which cup belongs to which sport', href: '#trophies' },
    { icon: 'book', title: 'Books and authors', sub: 'The pairings that recur', href: '#books' },
    { icon: 'user', title: 'Autobiographies', sub: 'Who wrote about themselves', href: '#autobiographies' },
    { icon: 'check', title: 'Solved examples', sub: 'Eight questions worked through', href: '#examples' },
  ],

  sections: [
    /* ── 1 ─────────────────────────────────────────────────────── */
    {
      id: 'civilian',
      heading: 'Civilian and gallantry awards',
      eyebrow: 'India\'s national honours',
      intro:
        'Two parallel hierarchies — one for exceptional service in any field, one for courage — and the wartime and peacetime gallantry awards are frequently confused with each other.',
      blocks: [
        {
          type: 'table',
          caption: 'The civilian awards',
          head: ['Award', 'Rank and criteria', 'Note'],
          rows: [
            ['Bharat Ratna', 'The highest civilian award, for exceptional service of the highest order in any field', 'Instituted in 1954. The first recipients were C. Rajagopalachari, S. Radhakrishnan and C. V. Raman. It carries no monetary grant, and recipients are not permitted to use it as a title before or after their name.'],
            ['Padma Vibhushan', 'Second highest, for exceptional and distinguished service', 'Also instituted in 1954.'],
            ['Padma Bhushan', 'Third, for distinguished service of a high order', ''],
            ['Padma Shri', 'Fourth, for distinguished service in any field', 'The Padma awards are announced each year on Republic Day and conferred by the President later.'],
          ],
        },
        {
          type: 'table',
          caption: 'The gallantry awards',
          head: ['Award', 'When it applies', 'Equivalent'],
          rows: [
            ['Param Vir Chakra', 'Wartime — the highest gallantry award, for the most conspicuous bravery in the presence of the enemy', 'The first recipient was Major Somnath Sharma, posthumously, for the action at Badgam in 1947.'],
            ['Maha Vir Chakra', 'Wartime — second highest', ''],
            ['Vir Chakra', 'Wartime — third', ''],
            ['Ashoka Chakra', 'Peacetime — the highest gallantry award, for valour other than in the face of the enemy', 'The peacetime counterpart of the Param Vir Chakra.'],
            ['Kirti Chakra', 'Peacetime — second highest', 'Counterpart of the Maha Vir Chakra.'],
            ['Shaurya Chakra', 'Peacetime — third', 'Counterpart of the Vir Chakra.'],
          ],
        },
        {
          type: 'note',
          title: 'The distinction to fix',
          text:
            'The Chakra series — Ashoka, Kirti, Shaurya — is for gallantry in peacetime, and the Vir Chakra series — Param Vir, Maha Vir, Vir — is for gallantry in the face of the enemy. Candidates routinely rank all six in one list, which produces a wrong answer whichever way the question is framed. Also note that the Ashoka Chakra as an award is distinct from the wheel on the national flag, which shares the name.',
        },
      ],
    },

    /* ── 2 ─────────────────────────────────────────────────────── */
    {
      id: 'nobel',
      heading: 'Nobel and world prizes',
      eyebrow: 'International honours',
      intro:
        'The Nobel Prizes and a short list of other international awards that recur, each with the field it recognises.',
      blocks: [
        {
          type: 'defs',
          items: [
            [
              'The Nobel Prizes',
              'Established by the will of Alfred Nobel, the inventor of dynamite, and first awarded in 1901 in five categories: Physics, Chemistry, Physiology or Medicine, Literature and Peace. The Peace Prize is awarded in Oslo by a committee appointed by the Norwegian parliament; the others are awarded in Stockholm. The Prize in Economic Sciences was added in 1968, funded by the Swedish central bank, and is not one of the original prizes named in Nobel\'s will — which is why it is described as being in memory of Alfred Nobel.',
            ],
            [
              'Nobel rules worth knowing',
              'A prize may be shared by at most three people in a category. It is not normally awarded posthumously. There is no Nobel Prize in mathematics — the Abel Prize and the Fields Medal fill that gap, the latter awarded every four years only to mathematicians under forty. Marie Curie is the only person to have won in two different sciences.',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Other international awards',
          head: ['Award', 'Field', 'Note'],
          rows: [
            ['Booker Prize', 'Fiction in English', 'The International Booker separately recognises translated fiction, with the prize shared between author and translator.'],
            ['Pulitzer Prize', 'Journalism, literature and musical composition in the United States', 'Administered by Columbia University.'],
            ['Ramon Magsaysay Award', 'Public service and leadership in Asia', 'Often called Asia\'s Nobel Prize; named after a Philippine president.'],
            ['Fields Medal and Abel Prize', 'Mathematics', 'The Fields Medal is awarded every four years to mathematicians under forty; the Abel Prize annually with no age limit.'],
            ['Turing Award', 'Computer science', 'Often called the Nobel Prize of computing; awarded by the Association for Computing Machinery.'],
            ['Academy Awards (Oscars)', 'Cinema', 'Awarded by the Academy of Motion Picture Arts and Sciences in the United States.'],
            ['Grammy Awards', 'Music recording', ''],
            ['Pritzker Prize', 'Architecture', 'B. V. Doshi is the Indian recipient.'],
            ['Right Livelihood Award', 'Practical solutions to global problems', 'Often called the alternative Nobel Prize.'],
          ],
        },
      ],
    },

    /* ── 3 ─────────────────────────────────────────────────────── */
    {
      id: 'field',
      heading: 'Indian awards by field',
      eyebrow: 'Cinema, literature, science, sport',
      intro:
        'The highest honour in each field, and the body that confers it. This is the table that most awards questions are drawn from.',
      blocks: [
        {
          type: 'table',
          caption: 'The highest honour in each field',
          head: ['Field', 'Award', 'Conferred by'],
          rows: [
            ['Cinema', 'Dadasaheb Phalke Award', 'The Government of India, for lifetime contribution. Named after the maker of Raja Harishchandra, regarded as the father of Indian cinema. The National Film Awards are separate and given for specific work.'],
            ['Literature', 'Jnanpith Award', 'The Bharatiya Jnanpith, a private trust, for lifetime contribution in any Eighth Schedule language or English. First awarded in 1965 to G. Sankara Kurup for Malayalam.'],
            ['Literature — official', 'Sahitya Akademi Award and Fellowship', 'The Sahitya Akademi, annually in each of twenty-four languages, for a specific book. The Fellowship is its highest honour.'],
            ['Science', 'Shanti Swarup Bhatnagar Prize', 'CSIR, for outstanding research by scientists under forty-five.'],
            ['Sport', 'Major Dhyan Chand Khel Ratna Award', 'The highest sporting honour in India. It was renamed in 2021, having previously been the Rajiv Gandhi Khel Ratna.'],
            ['Sport — performance', 'Arjuna Award', 'For outstanding performance over several years. The Dronacharya Award goes to coaches and the Dhyan Chand Award for lifetime contribution.'],
            ['Performing arts', 'Sangeet Natak Akademi Award and Fellowship', 'The Sangeet Natak Akademi, for music, dance and drama.'],
            ['Peace and disarmament', 'Gandhi Peace Prize; Indira Gandhi Prize for Peace, Disarmament and Development', 'The first by the Government of India, the second by a memorial trust.'],
            ['Agriculture and rural development', 'Krishi Karman Award; Borlaug Award', 'For state agricultural performance and for individual agricultural research respectively.'],
          ],
        },
        {
          type: 'note',
          title: 'Where the confusion lies',
          text:
            'Three pairs are regularly swapped. The Jnanpith is private and for a lifetime\'s work; the Sahitya Akademi Award is official and for a single book. The Dadasaheb Phalke Award is for lifetime contribution to cinema; the National Film Awards are for particular films each year. The Khel Ratna is the single highest sporting honour; the Arjuna Award recognises sustained excellence and there are many each year.',
        },
      ],
    },

    /* ── 4 ─────────────────────────────────────────────────────── */
    {
      id: 'sports',
      heading: 'Sports: terms and teams',
      eyebrow: 'Players per side and vocabulary',
      intro:
        'Two tables that answer most sports questions in general awareness papers: how many players a team has, and which technical term belongs to which sport.',
      blocks: [
        {
          type: 'table',
          caption: 'Players per side',
          head: ['Sport', 'Players', 'Note'],
          rows: [
            ['Cricket, football and hockey', 'Eleven each', 'The three most asked, and all the same number.'],
            ['Kabaddi', 'Seven', 'Also seven in water polo, handball and netball.'],
            ['Volleyball', 'Six', ''],
            ['Basketball', 'Five', ''],
            ['Kho-kho', 'Nine on the field', 'From a squad of twelve.'],
            ['Baseball', 'Nine', ''],
            ['Rugby union', 'Fifteen', 'Rugby league has thirteen.'],
            ['Polo', 'Four', ''],
            ['Badminton and tennis', 'One in singles, two in doubles', ''],
          ],
        },
        {
          type: 'table',
          caption: 'Terms and their sports',
          head: ['Sport', 'Terms', 'Note'],
          rows: [
            ['Cricket', 'Googly, yorker, bouncer, maiden over, LBW, silly point, duck, hat-trick', 'The pitch is 22 yards long between the wickets.'],
            ['Football', 'Dribble, offside, penalty kick, hat-trick, corner, header', 'Hat-trick is shared with cricket and hockey.'],
            ['Hockey', 'Bully, penalty corner, short corner, dribble, sixteen-yard hit', 'The bully has been replaced in the modern rules but is still asked.'],
            ['Tennis', 'Deuce, ace, love, volley, smash, let, tie-break', 'Love means zero.'],
            ['Badminton', 'Smash, drop shot, love, service court, shuttlecock', 'Shares smash and love with tennis.'],
            ['Chess', 'Checkmate, stalemate, gambit, castling, en passant, zugzwang', 'A stalemate is a draw, not a win — a common trap.'],
            ['Boxing', 'Knockout, jab, uppercut, hook, southpaw, round', ''],
            ['Golf', 'Birdie, eagle, bogey, putt, tee, caddie, albatross', 'A birdie is one under par, an eagle two under, a bogey one over.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'The Olympic Games',
              'The modern Olympics began at Athens in 1896, revived by Pierre de Coubertin. The International Olympic Committee is headquartered at Lausanne in Switzerland. The five rings represent the five inhabited continents and their colours, with the white background, include at least one from every national flag. The motto was Citius, Altius, Fortius — faster, higher, stronger — with Communiter, meaning together, added in 2021. The Games are held every four years, and the Paralympics follow in the same city.',
            ],
            [
              'Other multi-sport events',
              'The Asian Games were first held at New Delhi in 1951, and India hosted them again in 1982. The Commonwealth Games grew from the British Empire Games of 1930, and India hosted them at Delhi in 2010. The Winter Olympics are held separately, and since 1994 in a different cycle from the summer Games.',
            ],
            [
              'India at the Olympics',
              'Norman Pritchard won India\'s first medals, two silvers in athletics, at Paris in 1900. The hockey team won a long series of gold medals from 1928. Abhinav Bindra won India\'s first individual Olympic gold, in shooting, at Beijing in 2008. Neeraj Chopra won gold in the javelin at the Tokyo Games. Medal tallies change with each Games and should be taken from the current record rather than memorised.',
            ],
          ],
        },
      ],
    },

    /* ── 5 ─────────────────────────────────────────────────────── */
    {
      id: 'trophies',
      heading: 'Trophies and tournaments',
      eyebrow: 'Which cup belongs to which sport',
      intro:
        'Pure pairing, and one of the most reliably asked items in railway and SSC papers. Current holders change; the sport a trophy belongs to does not.',
      blocks: [
        {
          type: 'table',
          caption: 'Trophies by sport',
          head: ['Sport', 'Trophies and tournaments', 'Note'],
          rows: [
            ['Cricket — domestic India', 'Ranji Trophy, Duleep Trophy, Irani Cup, Vijay Hazare Trophy, Deodhar Trophy, Cooch Behar Trophy', 'The Ranji Trophy is the premier first-class competition; the Irani Cup is contested between the Ranji champion and the Rest of India.'],
            ['Cricket — international', 'ICC World Cup, T20 World Cup, the Ashes, Border-Gavaskar Trophy', 'The Ashes is contested between England and Australia; the Border-Gavaskar Trophy between India and Australia.'],
            ['Football', 'FIFA World Cup, Durand Cup, Santosh Trophy, Subroto Cup, Rovers Cup', 'The Durand Cup, begun in 1888, is the oldest football tournament in Asia and among the oldest in the world.'],
            ['Hockey', 'Agha Khan Cup, Beighton Cup, Rangaswamy Cup, Dhyan Chand Trophy, Azlan Shah Cup', 'The Beighton Cup, begun in 1895, is among the oldest hockey tournaments anywhere.'],
            ['Badminton', 'Thomas Cup for men, Uber Cup for women, Sudirman Cup for mixed teams, All England Championships', 'India won the Thomas Cup for the first time in 2022.'],
            ['Tennis', 'Davis Cup for men, Billie Jean King Cup for women', 'The four Grand Slams are the Australian Open on hard court, the French Open on clay at Roland Garros, Wimbledon on grass and the oldest, and the US Open on hard court.'],
            ['Golf and basketball', 'Ryder Cup; FIBA World Cup and the NBA', ''],
            ['Chess', 'World Chess Championship, Candidates Tournament, Chess Olympiad', 'India hosted the Chess Olympiad in 2022.'],
          ],
        },
        {
          type: 'note',
          title: 'Never memorise a current champion',
          text:
            'Who holds a trophy, who is world number one, who won the last World Cup and what the current record is all change, and banking papers in particular take them from the month of the exam. Learn which trophy belongs to which sport, which is permanent, and read the sports news for the rest.',
        },
      ],
    },

    /* ── 6 ─────────────────────────────────────────────────────── */
    {
      id: 'books',
      heading: 'Books and authors',
      eyebrow: 'The pairings that recur',
      intro:
        'A selection confined to the books that actually appear in question papers, grouped so that the author\'s other works come to mind together.',
      blocks: [
        {
          type: 'table',
          caption: 'Books and their authors',
          head: ['Book', 'Author', 'Note'],
          rows: [
            ['Gitanjali', 'Rabindranath Tagore', 'The work for which he received the Nobel Prize in Literature in 1913.'],
            ['Anandamath', 'Bankim Chandra Chattopadhyay', 'Contains Vande Mataram, the national song.'],
            ['Godan, Gaban, Nirmala', 'Munshi Premchand', 'The founder of realist social fiction in Hindi and Urdu.'],
            ['The Guide, Malgudi Days, Swami and Friends', 'R. K. Narayan', 'Set in the fictional town of Malgudi.'],
            ['Untouchable and Coolie', 'Mulk Raj Anand', 'And Kanthapura is by Raja Rao.'],
            ['Arthashastra', 'Kautilya', 'Also known as Chanakya or Vishnugupta.'],
            ['Discovery of India, Glimpses of World History', 'Jawaharlal Nehru', 'Both largely written in prison.'],
            ['Geetanjali is Tagore; Gita Rahasya is', 'Bal Gangadhar Tilak', 'Written during his imprisonment at Mandalay.'],
            ['Poverty and Un-British Rule in India', 'Dadabhai Naoroji', 'The origin of the drain of wealth theory.'],
            ['The Argumentative Indian, Development as Freedom', 'Amartya Sen', 'Nobel laureate in Economics, 1998.'],
            ['A Brief History of Time', 'Stephen Hawking', ''],
            ['The Origin of Species', 'Charles Darwin', 'Published in 1859.'],
            ['Das Kapital and The Communist Manifesto', 'Karl Marx; Marx with Friedrich Engels', ''],
            ['The Wealth of Nations', 'Adam Smith', 'The founding text of classical economics.'],
          ],
        },
      ],
    },

    /* ── 7 ─────────────────────────────────────────────────────── */
    {
      id: 'autobiographies',
      heading: 'Autobiographies',
      eyebrow: 'Who wrote about themselves',
      intro:
        'A distinct and heavily asked category, since the question usually names the book and asks whose life it describes.',
      blocks: [
        {
          type: 'table',
          caption: 'Autobiographies and memoirs',
          head: ['Title', 'Author', 'Note'],
          rows: [
            ['The Story of My Experiments with Truth', 'Mahatma Gandhi', 'Written in Gujarati and serialised before being published as a book.'],
            ['Wings of Fire', 'A. P. J. Abdul Kalam', 'With Arun Tiwari. His other works include Ignited Minds and India 2020.'],
            ['An Autobiography, or Toward Freedom', 'Jawaharlal Nehru', 'Written during imprisonment in the 1930s.'],
            ['India Wins Freedom', 'Maulana Abul Kalam Azad', 'An account of the years leading to Partition.'],
            ['Long Walk to Freedom', 'Nelson Mandela', ''],
            ['The Story of My Life', 'Helen Keller', ''],
            ['Playing It My Way', 'Sachin Tendulkar', ''],
            ['Unbreakable', 'Mary Kom', 'And Ace Against Odds is by Sania Mirza.'],
            ['Straight from the Heart', 'Kapil Dev', 'A Century Is Not Enough is by Sourav Ganguly and The Test of My Life by Yuvraj Singh.'],
            ['My Country My Life', 'L. K. Advani', ''],
            ['Joseph Anton', 'Salman Rushdie', 'A memoir of his years in hiding, written in the third person.'],
            ['Wheels of Fire and Sunny Days', 'Not to be confused: Sunny Days is Sunil Gavaskar', 'Gavaskar also wrote Idols and Runs \'n Ruins.'],
          ],
        },
        {
          type: 'defs',
          items: [
            [
              'Autobiography, biography and memoir',
              'An autobiography is written by the subject about their whole life. A biography is written by someone else. A memoir is written by the subject but covers a particular period or theme rather than the whole life. Questions occasionally test the distinction directly, particularly where a well-known figure has been the subject of both.',
            ],
            [
              'How to revise this section',
              'Both ways round. Given a title, name the author; given an author, name at least one title. Question papers use both directions, and recognising a title without being able to produce it is not enough when the title appears among the options rather than in the stem.',
            ],
          ],
        },
      ],
    },
  ],

  examples: [
    {
      q: 'What is the difference between the Param Vir Chakra and the Ashoka Chakra?',
      steps: [
        'Both are the highest gallantry awards in their category, which is why they are confused.',
        'The Param Vir Chakra is awarded for the most conspicuous bravery in the presence of the enemy — that is, in wartime.',
        'The Ashoka Chakra is the equivalent for valour other than in the face of the enemy — that is, in peacetime. The Kirti and Shaurya Chakras are the peacetime equivalents of the Maha Vir and Vir Chakras.',
      ],
      answer: 'Param Vir Chakra is the highest wartime gallantry award; Ashoka Chakra the highest peacetime one.',
    },
    {
      q: 'Which Nobel Prize was not established by Alfred Nobel\'s will?',
      steps: [
        'The original prizes were in Physics, Chemistry, Physiology or Medicine, Literature and Peace, first awarded in 1901.',
        'The Prize in Economic Sciences was added in 1968, funded by Sveriges Riksbank, the Swedish central bank.',
        'It is formally the Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel, which is why the wording differs from that of the others.',
      ],
      answer: 'The Economics prize, added in 1968 and funded by the Swedish central bank.',
    },
    {
      q: 'Which is India\'s highest sporting honour, and what was it previously called?',
      steps: [
        'The Arjuna Award recognises sustained excellence and is given to many recipients each year, so it is not the highest.',
        'The highest is the Khel Ratna, given to at most a very small number annually.',
        'It was renamed the Major Dhyan Chand Khel Ratna Award in 2021, having previously been the Rajiv Gandhi Khel Ratna Award.',
      ],
      answer: 'The Major Dhyan Chand Khel Ratna Award, formerly the Rajiv Gandhi Khel Ratna.',
    },
    {
      q: 'How many players are on the field in kabaddi, kho-kho and volleyball?',
      steps: [
        'Kabaddi has seven players a side on the court.',
        'Kho-kho has nine on the field, from a squad of twelve.',
        'Volleyball has six. Cricket, football and hockey all have eleven, which is worth fixing as a group.',
      ],
      answer: 'Seven, nine and six respectively.',
    },
    {
      q: 'The Durand Cup and the Beighton Cup belong to which sports?',
      steps: [
        'Both are very old Indian tournaments, which is why they are set together.',
        'The Durand Cup, begun in 1888, is football, and it is the oldest football tournament in Asia.',
        'The Beighton Cup, begun in 1895, is hockey, and among the oldest hockey tournaments anywhere.',
      ],
      answer: 'Football and hockey respectively.',
    },
    {
      q: 'Who wrote Wings of Fire and India Wins Freedom?',
      steps: [
        'Wings of Fire is the autobiography of A. P. J. Abdul Kalam, written with Arun Tiwari.',
        'India Wins Freedom is by Maulana Abul Kalam Azad, and covers the years leading to Partition.',
        'The two are frequently set against each other in option lists because both authors are known as Kalam or Azad, so read the title carefully.',
      ],
      answer: 'A. P. J. Abdul Kalam and Maulana Abul Kalam Azad respectively.',
    },
    {
      q: 'Which Grand Slam is played on grass, and which on clay?',
      steps: [
        'There are four Grand Slam tournaments in tennis, each on a different surface or in a different setting.',
        'Wimbledon is played on grass and is the oldest of the four.',
        'The French Open at Roland Garros is played on clay. The Australian Open and the US Open are both on hard court.',
      ],
      answer: 'Wimbledon on grass; the French Open on clay.',
    },
    {
      q: 'Why is there no Nobel Prize in mathematics, and what fills the gap?',
      steps: [
        'Alfred Nobel\'s will named five fields, and mathematics was not among them; the various explanations offered are anecdotal rather than documented.',
        'The Fields Medal, awarded every four years, is the best-known substitute, but it is restricted to mathematicians under forty.',
        'The Abel Prize, instituted in 2002 and awarded annually with no age restriction, is the closest equivalent in stature to a Nobel.',
      ],
      answer: 'Nobel simply did not include it; the Fields Medal and the Abel Prize fill the gap.',
    },
  ],

  practice: [
    {
      q: 'The highest civilian award of India is the:',
      options: ['Padma Vibhushan', 'Padma Shri', 'Param Vir Chakra', 'Bharat Ratna'],
      answer: 3,
      explain: 'Instituted in 1954. The Param Vir Chakra is a gallantry award, not a civilian one.',
    },
    {
      q: 'The highest gallantry award for peacetime valour is the:',
      options: ['Param Vir Chakra', 'Kirti Chakra', 'Maha Vir Chakra', 'Ashoka Chakra'],
      answer: 3,
      explain: 'The Param Vir Chakra is the highest wartime award; the Kirti Chakra is second in the peacetime series.',
    },
    {
      q: 'The Nobel Prize in Economics was instituted in:',
      options: ['1901', '1945', '1968', '1985'],
      answer: 2,
      explain: 'Funded by the Swedish central bank, and not among the prizes named in Alfred Nobel\'s will.',
    },
    {
      q: 'The Nobel Peace Prize is awarded in:',
      options: ['Stockholm', 'Helsinki', 'Copenhagen', 'Oslo'],
      answer: 3,
      explain: 'By a committee appointed by the Norwegian parliament. All the other prizes are awarded in Stockholm.',
    },
    {
      q: 'The Dadasaheb Phalke Award is given in the field of:',
      options: ['Literature', 'Cinema', 'Music', 'Science'],
      answer: 1,
      explain: 'For lifetime contribution. The National Film Awards, given for specific films, are separate.',
    },
    {
      q: 'The Jnanpith Award is conferred by:',
      options: ['The Government of India', 'The Sahitya Akademi', 'A private trust', 'UNESCO'],
      answer: 2,
      explain: 'The Bharatiya Jnanpith. The Sahitya Akademi Award is the official literary honour and is given for a specific book.',
    },
    {
      q: 'The Shanti Swarup Bhatnagar Prize is awarded in the field of:',
      options: ['Literature', 'Science and technology', 'Sports', 'Public service'],
      answer: 1,
      explain: 'By CSIR, to researchers under the age of forty-five.',
    },
    {
      q: 'How many players are there in a kabaddi team on the court?',
      options: ['Five', 'Six', 'Seven', 'Nine'],
      answer: 2,
      explain: 'Also seven in water polo, handball and netball. Kho-kho has nine on the field.',
    },
    {
      q: 'The term "googly" belongs to which sport?',
      options: ['Hockey', 'Cricket', 'Badminton', 'Golf'],
      answer: 1,
      explain: 'A delivery that turns the opposite way to the bowler\'s stock leg break.',
    },
    {
      q: 'The Thomas Cup is associated with:',
      options: ['Tennis', 'Badminton', 'Table tennis', 'Squash'],
      answer: 1,
      explain: 'Men\'s team badminton. The Uber Cup is the women\'s equivalent and the Sudirman Cup the mixed team event.',
    },
    {
      q: 'The oldest football tournament in Asia is the:',
      options: ['Santosh Trophy', 'Durand Cup', 'Subroto Cup', 'Rovers Cup'],
      answer: 1,
      explain: 'Begun in 1888, and among the oldest football tournaments in the world.',
    },
    {
      q: 'The modern Olympic Games were first held in 1896 at:',
      options: ['Paris', 'Athens', 'London', 'Rome'],
      answer: 1,
      explain: 'Revived by Pierre de Coubertin. The International Olympic Committee is headquartered at Lausanne.',
    },
    {
      q: 'India\'s first individual Olympic gold medal was won by:',
      options: ['Abhinav Bindra', 'Neeraj Chopra', 'Norman Pritchard', 'Karnam Malleswari'],
      answer: 0,
      explain: 'In shooting, at Beijing in 2008. Norman Pritchard won India\'s first medals, two silvers, in 1900.',
    },
    {
      q: 'Wings of Fire is the autobiography of:',
      options: ['Jawaharlal Nehru', 'A. P. J. Abdul Kalam', 'Maulana Azad', 'Vikram Sarabhai'],
      answer: 1,
      explain: 'Written with Arun Tiwari. India Wins Freedom is by Maulana Abul Kalam Azad.',
    },
    {
      q: 'Which Grand Slam tennis tournament is played on clay?',
      options: ['Australian Open', 'French Open', 'Wimbledon', 'US Open'],
      answer: 1,
      explain: 'At Roland Garros. Wimbledon is on grass; the other two are on hard court.',
    },
    {
      q: 'The Fields Medal is awarded in:',
      options: ['Physics', 'Mathematics', 'Economics', 'Medicine'],
      answer: 1,
      explain: 'Every four years, only to mathematicians under forty. The Abel Prize is the annual equivalent without an age limit.',
    },
  ],

  faqs: [
    {
      q: 'How do I stop confusing the two sets of gallantry awards?',
      a: 'Attach each set to a single word. The Vir series — Param Vir, Maha Vir, Vir Chakra — is for the enemy, and vir means brave in battle. The Chakra series — Ashoka, Kirti, Shaurya — is for peacetime. Learn them as two parallel columns of three rather than as a single ranking of six, because a single list produces a wrong answer whichever way the question is asked.',
    },
    {
      q: 'What is the difference between the Jnanpith and the Sahitya Akademi Award?',
      a: 'The Jnanpith is conferred by a private trust, the Bharatiya Jnanpith, for lifetime contribution to literature in any Eighth Schedule language or English, and it goes to one writer a year. The Sahitya Akademi Award is conferred by an official body annually in each of twenty-four languages, and it is given for a specific book rather than for a body of work.',
    },
    {
      q: 'Which sports facts should I not memorise?',
      a: 'Current champions, world rankings, records, medal tallies and the year\'s award winners. All of these change, and banking papers in particular take them from the month of the exam. What is permanent is which trophy belongs to which sport, how many players a team has, what each technical term means and where a tournament originated.',
    },
    {
      q: 'Why does India have no Nobel Prize in mathematics to point to?',
      a: 'Because no such prize exists for anyone. Alfred Nobel\'s will named five fields and mathematics was not among them; the reasons commonly given are anecdotal. The Fields Medal, awarded every four years to mathematicians under forty, and the Abel Prize, awarded annually with no age limit, are the recognised equivalents.',
    },
    {
      q: 'How should I revise books and authors?',
      a: 'In both directions, and in groups. Learn all of one author\'s well-known works together — Premchand\'s Godan, Gaban and Nirmala; Nehru\'s Discovery of India, Glimpses of World History and An Autobiography — so that recognising one recalls the others. Then test yourself from title to author and from author to title, because papers use both formats.',
    },
    {
      q: 'What is the difference between an autobiography and a memoir?',
      a: 'An autobiography is written by the subject and covers the whole life in sequence. A memoir is also written by the subject but covers one period or theme — Salman Rushdie\'s Joseph Anton is a memoir of his years in hiding, not an account of his whole life. A biography is written about the subject by someone else. Questions occasionally test the distinction.',
    },
    {
      q: 'Are the Padma awards ranked?',
      a: 'Yes. Padma Vibhushan is the highest of the three, then Padma Bhushan, then Padma Shri, and above all three stands the Bharat Ratna. All are announced on Republic Day each year. Bharat Ratna recipients may not use the award as a title before or after their names, a restriction derived from Article 18 of the Constitution.',
    },
    {
      q: 'How much of this page is current affairs rather than static?',
      a: 'The structure is entirely static — which award covers which field, which trophy belongs to which sport, who wrote which book. The winners are entirely current. That division is worth respecting in your own notes: keep one page of permanent pairings and a separate running list of this year\'s winners, and revise them differently.',
    },
    {
      q: 'Which sports terms are most often asked?',
      a: 'Those that belong unambiguously to one sport — googly and yorker for cricket, bully and penalty corner for hockey, deuce and love for tennis, birdie and bogey for golf, checkmate and gambit for chess. Terms shared across sports, such as hat-trick, smash and dribble, appear less often, precisely because they do not make a clean question.',
    },
    {
      q: 'How many questions come from this page?',
      a: 'Four to six in RRB NTPC and Group D, where sports and awards are staples; three to four in SSC CGL and CHSL; two to four in banking, mostly from the current cycle; two to three in state PSC prelims; and three to four in defence and police examinations, where gallantry awards feature particularly.',
    },
  ],

  related: [
    { label: 'Static GK', to: '/study-material/general-knowledge/static-gk/' },
    { label: 'International Organisations', to: '/study-material/general-knowledge/international-organisations/' },
    { label: 'Literature & Heritage', to: '/study-material/art-culture/literature-heritage/' },
    { label: 'Modern India', to: '/study-material/history/modern-india/' },
    { label: 'All General Knowledge', to: '/study-material/general-knowledge/' },
  ],
}
