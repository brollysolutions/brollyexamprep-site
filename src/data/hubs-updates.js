/**
 * Written content for the exam-updates and current-affairs hub pages.
 *
 * Kept separate from hubs.js only for file size; the two are merged there.
 *
 * These pages are about process rather than syllabus — what a notification
 * contains and how to read it, what an answer key objection window is for,
 * how to study current affairs for a particular exam family. That is genuinely
 * useful material and it is almost never written down, because it sits between
 * "news" and "study material" and belongs to neither.
 */

const UPDATE_HUBS = {
  /* ══════════════════════════════════════════════════════════════
     Exam updates
     ══════════════════════════════════════════════════════════════ */

  '/exam-updates/latest-notifications/': {
    title: 'Exam Notifications: What They Contain and How to Read One',
    description:
      'How to read a competitive exam notification — eligibility, age relaxations, pattern changes and the details candidates most often miss.',
    lead: [
      'A notification is the only document that binds the examiner. Everything else — coaching material, guides, this site — is a description of it, and descriptions go out of date. When a notification appears for an exam you intend to sit, reading it end to end is not optional diligence; it is the single most important hour of that cycle.',
      'The reason is that notifications change. Age bands are revised, negative marking rates are altered, stages are added or removed, and eligibility conditions are tightened. Candidates preparing from a guide written for an earlier cycle have arrived at examinations expecting a structure that no longer existed.',
    ],
    sections: [
      {
        id: 'read',
        eyebrow: 'Reading it',
        heading: 'What to check, in order',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Eligibility and age, including relaxations.', note: 'Both by post, where they differ. This is where a cycle is most often lost before it begins.' },
              { text: 'The exam pattern section.', note: 'Number of stages, marks, timing, sectional limits and — critically — the negative marking rate, which decides your guessing threshold.' },
              { text: 'Which stages count towards the merit.', note: 'A qualifying stage and a merit stage call for very different preparation, and the distinction is stated here.' },
              { text: 'Physical, medical and skill test requirements.', note: 'These arrive last and cannot be prepared for quickly. Find out in week one what you will be measured against.' },
              { text: 'Application dates, fees and documents required.', note: 'Along with the correction window, if one is provided.' },
              { text: 'The post-wise vacancy and preference details.', note: 'Which determine what you are actually competing for.' },
            ],
          },
        ],
      },
      {
        id: 'missed',
        eyebrow: 'Commonly missed',
        heading: 'The details candidates skip',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Changes to the negative marking rate', note: 'a change from a quarter to a third alters your guessing arithmetic materially, and it is stated in one line.' },
              { text: 'New qualifying components', note: 'a typing test, an aptitude battery or a language paper added to a familiar exam.' },
              { text: 'Post-specific eligibility', note: 'in exams like SSC CGL and SSC JE, different posts carry different age bands and qualification requirements.' },
              { text: 'Documents required at application', note: 'category certificates in a specific format, with a specific validity, are a common cause of rejected applications.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Exam dates', to: '/exam-updates/exam-dates/' },
              { label: 'Application forms', to: '/exam-updates/application-forms/' },
              { label: 'Exam calendar', to: '/exam-calendar/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Why should I read the full notification rather than a summary?',
        a: 'Because the notification is the only document that binds the examiner, and it changes between cycles. Age bands, negative marking rates, stage structures, qualifying components and post-specific eligibility have all been revised without much fanfare, and a summary written for an earlier cycle will describe an examination that no longer exists. Reading the current notification end to end takes about an hour and is the most valuable hour of a preparation cycle.',
      },
      {
        q: 'What is the most commonly missed detail in a notification?',
        a: 'Post-specific eligibility, followed by changes to the negative marking rate. In examinations like SSC CGL and SSC JE, different posts carry different age bands and qualification requirements, and a candidate who reads only the general eligibility statement can apply for a post they do not qualify for. Changes to negative marking are stated in a single line and materially alter how you should guess — which is why the pattern section deserves a careful read even for an exam you have sat before.',
      },
      {
        q: 'How do I know when a notification is released?',
        a: 'The conducting body’s own website is the authoritative source, and aggregated notification pages are useful for noticing releases quickly rather than for acting on details. The practical approach is to check the official site for the exams you are targeting on a fixed schedule, and to set your own reminders for expected notification periods rather than relying on remembering — application windows are usually a few weeks and a missed one costs a full cycle.',
      },
    ],
  },

  '/exam-updates/exam-dates/': {
    title: 'Exam Dates: Planning Your Preparation Around the Calendar',
    description:
      'Exam date guide — how to plan preparation phases backwards from an exam date, handle clashes and prepare for gaps between stages.',
    lead: [
      'An exam date is a planning constraint before it is anything else. It fixes when each phase of your preparation has to end — foundation, depth, then mocks and revision — and working backwards from it produces a far more realistic plan than working forwards from today.',
      'The other thing dates decide is which combination of exams is actually sittable. Two papers a week apart is manageable; two on the same weekend is not, and a mains examination falling in the middle of another exam’s preparation is a genuine conflict worth resolving in advance rather than in the moment.',
    ],
    sections: [
      {
        id: 'backwards',
        eyebrow: 'Planning',
        heading: 'Working backwards from the date',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Reserve the final four to six weeks for mocks and revision.', note: 'No new material in this period; consolidation of what is already partly known.' },
              { text: 'Reserve the two months before that for depth and weak sections.', note: 'The subjects that need real work, identified from mock analysis rather than instinct.' },
              { text: 'Everything before that is foundation.', note: 'The slow-building components — general awareness, English, calculation speed, physical training — start here and never stop.' },
              { text: 'Then check whether the arithmetic works.', note: 'If foundation needs six months and you have three, the plan needs changing rather than the effort increasing.' },
            ],
          },
        ],
      },
      {
        id: 'gaps',
        eyebrow: 'Between stages',
        heading: 'The gap that catches candidates out',
        blocks: [
          {
            type: 'p',
            text: 'In multi-stage examinations, the interval between a preliminary result and the main examination is frequently just a few weeks. That is enough to sharpen speed and nowhere near enough to build depth — banking awareness, data interpretation, descriptive writing and technical revision all take months. Candidates who prepare only for the screening stage and wait for its result are the single most common casualty of exam scheduling.',
          },
          {
            type: 'list',
            title: 'Practical scheduling checks',
            items: [
              { text: 'Do your target exams clash?', note: 'Check both the written dates and the likely windows for later stages.' },
              { text: 'Does a mains fall inside another exam’s final month?', note: 'A conflict worth resolving by choosing rather than by attempting both badly.' },
              { text: 'Are physical stages likely soon after the written result?', note: 'They usually are, which is why training cannot pause during written preparation.' },
              { text: 'Have you verified the date from the official source?', note: 'Aggregated calendars are for planning; official announcements are for acting on.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Exam calendar', to: '/exam-calendar/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Admit cards', to: '/exam-updates/admit-cards/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How should I plan my preparation around an exam date?',
        a: 'Backwards from the date rather than forwards from today. Reserve the final four to six weeks for mocks and revision with no new material, the two months before that for depth and weak-section work identified from mock analysis, and everything earlier for foundation building. Then check whether the arithmetic actually works — if your foundation needs six months and you have three, the honest response is to change the plan rather than to assume greater effort will close the gap.',
      },
      {
        q: 'What if two of my target exams clash?',
        a: 'Resolve it in advance by choosing rather than in the moment by attempting both badly. Check not only the written dates but the likely windows for later stages, since a mains examination falling inside another exam’s final month is a genuine conflict even when the written papers do not collide. Where the syllabi overlap heavily, the choice is usually clear; where they do not, attempting both typically means under-preparing for each.',
      },
      {
        q: 'Do exam dates change after they are announced?',
        a: 'Sometimes, and occasionally at short notice. Notifications are deferred, application windows move and examinations are rescheduled for a range of administrative reasons. That is why aggregated calendars are useful for seeing the shape of a year and spotting clashes, while any date you are going to act on — an application deadline especially — should be verified against the conducting body’s own announcement.',
      },
    ],
  },

  '/exam-updates/admit-cards/': {
    title: 'Admit Cards: What to Check and How to Avoid Losing an Exam',
    description:
      'Admit card guide — what to verify when it is released, permitted items, centre and travel planning, and common day-of-exam mistakes.',
    lead: [
      'An admit card is released shortly before the examination and carries the details that determine whether you actually sit it: your centre, your reporting time, your shift, and the identification and items you may bring. Candidates lose examinations to this stage every cycle, almost always for avoidable reasons.',
      'The two most common are travel and identification. A centre in an unfamiliar city, allocated a fortnight before the date, requires planning that cannot be done on the morning. And an identity document that does not match the name on the application has ended attempts at the gate.',
    ],
    sections: [
      {
        id: 'check',
        eyebrow: 'On release',
        heading: 'What to verify immediately',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'The centre address and how long it takes to reach.', note: 'Not the notional distance — the actual journey, at the time of day you will be travelling, allowing for the traffic that a large examination generates around a centre.' },
              { text: 'The reporting time, which is earlier than the exam time.', note: 'Gates close before the paper begins, and closing times are enforced.' },
              { text: 'Your personal details against your identity document.', note: 'Name spelling, date of birth and photograph. Discrepancies are best raised immediately, not at the gate.' },
              { text: 'The list of permitted and prohibited items.', note: 'It has become stricter over time, and what was allowed in a previous cycle may not be now.' },
              { text: 'Whether anything must be carried in a specific form.', note: 'Some examinations require a printed photograph, a specific identity document, or the admit card printed rather than shown on a phone.' },
            ],
          },
        ],
      },
      {
        id: 'day',
        eyebrow: 'On the day',
        heading: 'What actually goes wrong',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Arriving after gate closing', note: 'the commonest cause of a lost attempt, and entirely a planning failure rather than a preparation one.' },
              { text: 'Identity document mismatch', note: 'a different name spelling between the application and the document produced.' },
              { text: 'Prohibited items', note: 'watches, electronic devices and stationery that the instructions excluded.' },
              { text: 'Not carrying a required photograph', note: 'several examinations require one to be affixed or carried separately.' },
            ],
          },
          {
            type: 'p',
            text: 'None of these is a hard problem. All of them are solved by reading the admit card instructions properly on the day it is released, and by making the journey to the centre — or at least researching it seriously — before the morning of the examination.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Exam dates', to: '/exam-updates/exam-dates/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Answer keys', to: '/exam-updates/answer-keys/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What should I check when my admit card is released?',
        a: 'The centre address and the realistic journey time to it, the reporting time — which is earlier than the exam time and is enforced by gate closing — your personal details against the identity document you will carry, and the list of permitted and prohibited items, which has become stricter over time. Check all of this on the day the admit card is released rather than the night before the exam, so that any discrepancy can be raised while there is time to resolve it.',
      },
      {
        q: 'What are the most common admit card mistakes?',
        a: 'Arriving after gate closing, which is the single commonest cause of a lost attempt and is a planning failure rather than a preparation one; a mismatch between the name on the identity document and the application; carrying prohibited items such as watches or electronic devices; and not carrying a photograph where one is required. All four are avoidable by reading the admit card instructions carefully and researching the journey to the centre in advance.',
      },
      {
        q: 'What if there is an error on my admit card?',
        a: 'Raise it with the conducting body immediately through the channel the admit card or the notification specifies, rather than assuming it will be accepted at the centre. Minor discrepancies in name spelling or date of birth are sometimes resolved on production of supporting documents, but that is at the centre’s discretion and not something to rely on. The safe course is to have the correction acknowledged in writing before the examination date.',
      },
    ],
  },

  '/exam-updates/answer-keys/': {
    title: 'Answer Keys: Using the Objection Window and Estimating Scores',
    description:
      'Answer key guide — provisional versus final keys, how the objection window works, and how to estimate your score realistically.',
    lead: [
      'After most computer-based examinations, the conducting body releases a provisional answer key along with your recorded responses, and opens a window during which candidates may challenge specific answers. The final key is published afterwards, and results are computed from it.',
      'That window is a genuine opportunity and it is under-used. Answer keys do contain errors, objections are sometimes accepted, and a question dropped or a key corrected changes every candidate’s score. But an objection has to be substantiated, and speculative challenges achieve nothing.',
    ],
    sections: [
      {
        id: 'process',
        eyebrow: 'The process',
        heading: 'How the answer key stage works',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Provisional key and response sheet',
                'Released together, usually within days or weeks of the examination. The response sheet shows what you actually marked, which lets you compute an estimated score against the provisional key.',
              ],
              [
                'Objection window',
                'A short period, generally a few days, during which a candidate may challenge a specific answer. Most bodies charge a fee per question challenged, refunded where the objection is upheld.',
              ],
              [
                'Final answer key',
                'Published after objections are considered. Questions may be dropped, keys may be revised, and results are computed from this version rather than the provisional one.',
              ],
              [
                'Result',
                'Computed from the final key, with normalisation applied where the examination ran across multiple shifts.',
              ],
            ],
          },
        ],
      },
      {
        id: 'objecting',
        eyebrow: 'Objections',
        heading: 'When a challenge is worth making',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'When you can cite a source', note: 'a standard textbook, an official document or an authoritative reference supporting a different answer. Objections are assessed on evidence, not on disagreement.' },
              { text: 'When a question is genuinely ambiguous', note: 'where two options are defensible under the wording given. These are the challenges most often upheld.' },
              { text: 'When the question contains an error', note: 'a factual mistake, a missing option or an inconsistency between the language versions of the paper.' },
              { text: 'Not simply because you answered differently', note: 'a fee is charged per challenge and speculative objections cost money without changing anything.' },
            ],
          },
        ],
      },
      {
        id: 'estimating',
        eyebrow: 'Estimating',
        heading: 'Reading your estimated score sensibly',
        blocks: [
          {
            type: 'p',
            text: 'Compute your score against the provisional key using the correct marking scheme, including the deduction for wrong answers. Then treat the number cautiously: the final key may differ, normalisation may adjust it where the examination ran across shifts, and a cutoff is set relative to the whole field rather than to any absolute figure. An estimated score tells you roughly where you stand; it does not tell you whether you have cleared.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Results', to: '/exam-updates/results/' },
              { label: 'Cut-offs', to: '/exam-updates/cut-offs/' },
              { label: 'Admit cards', to: '/exam-updates/admit-cards/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How does the answer key objection window work?',
        a: 'The conducting body releases a provisional answer key alongside your recorded responses, and opens a window of a few days during which candidates may challenge specific answers. Most bodies charge a fee per question challenged, refunded where the objection is upheld. Objections are then considered, questions may be dropped or keys revised, and a final answer key is published from which results are computed.',
      },
      {
        q: 'When is it worth raising an objection?',
        a: 'When you can substantiate it. The challenges most often upheld are those citing a standard textbook, official document or authoritative reference supporting a different answer, and those pointing to genuine ambiguity where two options are defensible under the wording used. Objecting simply because you answered differently costs a fee and achieves nothing — these are assessed on evidence rather than on disagreement.',
      },
      {
        q: 'Can I rely on my estimated score from the provisional key?',
        a: 'Only as a rough indication. The final key may differ after objections are considered, questions are sometimes dropped, and where an examination runs across multiple shifts, normalisation adjusts raw scores. Beyond that, a cutoff is set relative to the whole field rather than to any absolute figure, so knowing your score does not tell you whether you have cleared. Treat the estimate as useful information about where you roughly stand and not as a result.',
      },
    ],
  },

  '/exam-updates/results/': {
    title: 'Exam Results: What Comes Next and Why Preparation Continues',
    description:
      'Exam results guide — reading a result correctly, what the next stage requires, and why preparation should not pause while you wait.',
    lead: [
      'A result in a multi-stage examination is not an outcome; it is a gate. Clearing a preliminary stage means you now sit a harder examination, usually within a few weeks, and the candidates who do best are those whose preparation for that harder examination did not begin with the result.',
      'That is the single most useful thing to understand about this stage. The interval between a preliminary result and a mains is frequently short, and it is enough to sharpen what you already have but nowhere near enough to build what you do not.',
    ],
    sections: [
      {
        id: 'reading',
        eyebrow: 'Reading a result',
        heading: 'What the numbers actually mean',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'A qualifying stage does not carry forward', note: 'in most banking and UPSC examinations, preliminary marks decide only who advances, and the merit is built from later stages.' },
              { text: 'Normalised scores are not raw scores', note: 'where an examination ran across multiple shifts, the figure published reflects an adjustment for shift difficulty.' },
              { text: 'Category cutoffs differ', note: 'and in state examinations, so do state-wise cutoffs. Comparing your score against a figure quoted for another category or state is comparing against the wrong number.' },
              { text: 'A shortlist is not a selection', note: 'clearing means advancing to the next stage, with its own cutoff and its own competition.' },
            ],
          },
        ],
      },
      {
        id: 'next',
        eyebrow: 'What comes next',
        heading: 'Preparing for the stage after the result',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Know the next stage’s structure before the result.', note: 'A mains paper, a physical test, an interview or document verification each need entirely different preparation.' },
              { text: 'Keep the slow components running throughout.', note: 'Awareness, writing practice and physical training all decay when paused and cannot be rebuilt in a short gap.' },
              { text: 'Use the gap for consolidation, not new material.', note: 'A few weeks sharpens what is partly known; it does not create what is absent.' },
              { text: 'Prepare your documents early.', note: 'Category certificates, educational records and identity documents are needed at verification, and locating them late has cost candidates seats.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Cut-offs', to: '/exam-updates/cut-offs/' },
              { label: 'Answer keys', to: '/exam-updates/answer-keys/' },
              { label: 'Exam dates', to: '/exam-updates/exam-dates/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do preliminary exam marks count towards final selection?',
        a: 'In most banking recruitments and in the UPSC Civil Services and Indian Forest Service examinations, no — the preliminary stage is purely a screen and the merit is built from later stages. The Engineering Services Examination is a notable exception, where preliminary marks do carry into the final total. Because this determines whether performing well in prelims is worth real marks or merely a seat in the next round, it is worth confirming in the notification for each examination you sit.',
      },
      {
        q: 'Why is my published score different from what I calculated?',
        a: 'Most commonly because of normalisation. Where an examination runs across multiple shifts with papers differing slightly in difficulty, scores are statistically adjusted so that candidates who drew a harder shift are not penalised — which means the published figure is not your raw mark. Changes between the provisional and final answer keys, including dropped questions, also account for differences.',
      },
      {
        q: 'Should I stop studying after clearing a preliminary exam?',
        a: 'No — that is the most common and most costly mistake at this stage. The interval between a preliminary result and the main examination is frequently just a few weeks, which is enough to sharpen what you already know and nowhere near enough to build what you do not. Banking awareness, data interpretation depth, descriptive writing and technical revision all take months, which is why serious candidates prepare for the mains syllabus from the beginning rather than starting when the result arrives.',
      },
    ],
  },

  '/exam-updates/cut-offs/': {
    title: 'Cut-Offs: What They Mean and How to Use Past Ones',
    description:
      'Cut-off guide — how cutoffs are determined, why they move between years, and how to use past cutoffs to set a realistic target.',
    lead: [
      'A cutoff is not a fixed standard. It is the score of the last candidate selected, which means it emerges from the interaction of vacancy count, applicant numbers and paper difficulty in that particular cycle. It is an output of the process rather than a threshold set in advance.',
      'That is why past cutoffs are useful for setting a target and unreliable as a prediction. A year with more vacancies or a harder paper produces a lower cutoff; one with fewer vacancies or an easier paper produces a higher one. The number tells you what happened, not what will.',
    ],
    sections: [
      {
        id: 'determined',
        eyebrow: 'How they form',
        heading: 'What actually moves a cutoff',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Vacancy count', note: 'more posts means more candidates selected, which lowers the score of the last one. A large change in vacancies moves the cutoff more than anything else.' },
              { text: 'Paper difficulty', note: 'an easier paper compresses scores upward and raises the cutoff; a harder one lowers it. This is why a low cutoff is not evidence of weak competition.' },
              { text: 'Applicant numbers', note: 'a larger field at the same vacancy count raises the cutoff.' },
              { text: 'Category and state', note: 'cutoffs are set separately by category, and in state examinations by state, so a single national figure rarely applies to you.' },
              { text: 'Normalisation', note: 'where shifts are normalised, the cutoff applies to normalised scores rather than raw marks.' },
            ],
          },
        ],
      },
      {
        id: 'using',
        eyebrow: 'Using them',
        heading: 'Setting a target from past cutoffs',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Look at several years, not one.', note: 'A single year’s figure reflects that year’s vacancies and difficulty. A range across four or five years is a better guide.' },
              { text: 'Use your own category and state.', note: 'Comparing against a figure for a different category or state is comparing against the wrong number entirely.' },
              { text: 'Target comfortably above the range, not at its top.', note: 'Aiming to just clear a historical cutoff leaves no margin for a harder-than-expected paper or a bad day.' },
              { text: 'Watch your mock floor rather than your peak.', note: 'A cutoff is a threshold, and consistency clears it more reliably than an occasional strong performance.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Results', to: '/exam-updates/results/' },
              { label: 'Answer keys', to: '/exam-updates/answer-keys/' },
              { label: 'Vacancies', to: '/exam-updates/vacancies/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How are competitive exam cutoffs decided?',
        a: 'They are not decided in advance — a cutoff is the score of the last candidate selected, and it emerges from the interaction of the vacancy count, the number of applicants and the difficulty of that year’s paper. More vacancies lower it; a harder paper lowers it; a larger applicant field raises it. It is an output of the process rather than a standard set beforehand, which is why it moves between cycles.',
      },
      {
        q: 'Can I predict this year’s cutoff from last year’s?',
        a: 'Not reliably, though a range across several years is a reasonable guide for target-setting. A single year’s figure reflects that year’s vacancies and paper difficulty, both of which change. The sensible use is to look at four or five years for your own category and state, and to target comfortably above the range rather than at the level of a historical cutoff — which leaves no margin for a harder paper or a bad day.',
      },
      {
        q: 'Why is the cutoff lower some years — is the competition weaker?',
        a: 'Usually not. A lower cutoff most often reflects a harder paper, which compresses scores downward across the whole field, or a larger vacancy count, which means more candidates are selected and the last one selected scored less. Neither indicates weaker competition. This is why comparing cutoffs across years tells you about the papers and the vacancies rather than about the standard of the candidates.',
      },
    ],
  },

  '/exam-updates/vacancies/': {
    title: 'Vacancies: How Post Counts Shape Your Chances and Choices',
    description:
      'Vacancy guide — how vacancy counts affect cutoffs, how post preferences work, and what to check in a vacancy table.',
    lead: [
      'The vacancy count is the most direct determinant of your chances in any recruitment, and the least discussed. It sets how many candidates will be selected, which in turn sets where the cutoff falls — and a substantial change in vacancies moves the cutoff more than any change in paper difficulty does.',
      'It also carries information that shapes your application. Post-wise and category-wise vacancy tables tell you which posts have the most openings, which determines how your preference order is likely to play out, and whether the post you actually want is realistically reachable at the rank you expect.',
    ],
    sections: [
      {
        id: 'reading',
        eyebrow: 'Reading a vacancy table',
        heading: 'What to look for',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Post-wise distribution', note: 'a total figure hides the fact that some posts have hundreds of openings and others a handful. Your preference order should be informed by this.' },
              { text: 'Category-wise breakdown', note: 'reservation is applied post by post, and the number relevant to you is your category’s share rather than the total.' },
              { text: 'Regional or zonal allocation', note: 'in railway and some state recruitments, vacancies are distributed across zones or regions with separate merit lists.' },
              { text: 'Whether the figure is provisional', note: 'vacancy counts are frequently revised after the notification, sometimes substantially.' },
            ],
          },
        ],
      },
      {
        id: 'preference',
        eyebrow: 'Preferences',
        heading: 'How post preference interacts with vacancies',
        blocks: [
          {
            type: 'p',
            text: 'In examinations that fill many posts from one merit list — SSC CGL most notably — you submit a preference order, and allocation follows from your rank and that order together. A post with very few vacancies will be exhausted at a high rank; a post with many will remain available further down. That means a preference order built purely on desirability, without regard to vacancy counts, can result in being allocated a post far down your list while a middling preference you would have been happy with went to someone ranked below you.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Cut-offs', to: '/exam-updates/cut-offs/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Results', to: '/exam-updates/results/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How do vacancy numbers affect the cutoff?',
        a: 'Directly and substantially. The cutoff is the score of the last candidate selected, so a larger vacancy count means more candidates are selected and the last one scored less — lowering the cutoff. A reduction in vacancies raises it. A significant change in the vacancy count moves the cutoff more than a change in paper difficulty typically does, which is why the vacancy table is worth reading as carefully as the pattern section of a notification.',
      },
      {
        q: 'How should vacancy counts affect my post preferences?',
        a: 'A post with very few vacancies will be exhausted at a high rank; one with many remains available further down the merit list. A preference order built purely on desirability, without regard to how many openings each post has, can leave you allocated something far down your list while a middling preference you would have accepted happily went to a lower-ranked candidate. Reading the post-wise and category-wise table before submitting preferences is worth the time.',
      },
      {
        q: 'Are vacancy numbers in a notification final?',
        a: 'Frequently not. Vacancy counts are often described as provisional and are revised after the notification, sometimes substantially, as departments confirm their requirements. That means both an increase and a decrease are possible before the result, and a candidate planning around a figure published at notification stage should treat it as an indication rather than a fixed number.',
      },
    ],
  },

  '/exam-updates/application-forms/': {
    title: 'Application Forms: Avoiding the Errors That Cost a Cycle',
    description:
      'Application form guide — documents to prepare, the errors that cause rejection, correction windows and why applying early matters.',
    lead: [
      'An application is the least interesting part of a competitive exam and one of the more common places to lose a cycle. Forms are rejected for photograph specifications, mismatched details, certificates in the wrong format and payments that did not complete — none of which has anything to do with how well prepared you are.',
      'Almost all of it is prevented by two habits: preparing your documents before the window opens, and applying early rather than on the final day.',
    ],
    sections: [
      {
        id: 'prepare',
        eyebrow: 'Before the window opens',
        heading: 'What to have ready',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'A photograph and signature in the specified format', note: 'dimensions, file size, background and sometimes a date requirement. Specifications differ between examinations and are enforced.' },
              { text: 'Educational certificates', note: 'with the details exactly as they appear, since a mismatch between your form and your certificate can cause rejection at verification.' },
              { text: 'Category and other certificates', note: 'in the prescribed format and within any validity period specified. This is one of the more common causes of rejection.' },
              { text: 'Identity documents', note: 'with the name spelled as it will appear on your application and admit card.' },
              { text: 'A means of payment that will work', note: 'and a record of the transaction, since incomplete payments leave applications unsubmitted.' },
            ],
          },
        ],
      },
      {
        id: 'errors',
        eyebrow: 'Common errors',
        heading: 'What actually causes rejection',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Apply early in the window, not on the last day.', note: 'Portals slow or fail under load near the deadline, and a failed submission at that point cannot be retried.' },
              { text: 'Check every field before final submission.', note: 'Name spelling, date of birth, category and post preferences. Some of these cannot be changed afterwards.' },
              { text: 'Use the correction window if one is provided.', note: 'It is the only opportunity to fix an error, and it is short.' },
              { text: 'Save the confirmation and the payment record.', note: 'Both are needed if a dispute arises about whether the application was submitted.' },
              { text: 'Print the submitted form.', note: 'Some examinations require it at later stages, and it is the record of what you actually declared.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Exam dates', to: '/exam-updates/exam-dates/' },
              { label: 'Admit cards', to: '/exam-updates/admit-cards/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What are the most common reasons an application is rejected?',
        a: 'Photographs and signatures that do not meet the specified dimensions, file size or format; a mismatch between the details entered and those on the supporting certificates; category certificates in the wrong format or outside a specified validity period; and payments that did not complete, leaving the application unsubmitted. None of these relates to preparation, and almost all are prevented by assembling documents before the window opens and applying early.',
      },
      {
        q: 'Why should I apply early rather than on the last day?',
        a: 'Because application portals slow down and sometimes fail under load near a deadline, and a submission that fails at that point cannot be retried. Applying early also leaves time to notice and correct an error, to resolve a payment problem, and to obtain a certificate you discover you need. A missed application window costs a full cycle, and it is one of the few losses in this process that is entirely within your control to prevent.',
      },
      {
        q: 'Can I correct a mistake after submitting the form?',
        a: 'Only if a correction window is provided, and only within it. Many examinations offer a short window during which specified fields can be edited, sometimes for a fee, and it is the single opportunity to fix an error. Some fields — category or post preferences in certain examinations — may not be editable even then. The safe approach is to check every field carefully before final submission and to treat the correction window as a safety net rather than a plan.',
      },
    ],
  },

  '/exam-updates/ssc/': {
    title: 'SSC Exam Updates: Notifications, Dates and Pattern Changes',
    description:
      'SSC exam updates — what to watch in Staff Selection Commission notifications, its calendar, and the pattern changes that have caught candidates out.',
    lead: [
      'The Staff Selection Commission publishes an annual calendar and then a notification for each examination, and both are worth following closely — because SSC has revised its examination structures more often than most conducting bodies, and the revisions have been substantial.',
      'The Tier 2 restructuring in SSC CGL, changes to the MTS session format and revisions to negative marking rates have all arrived through notifications and caught out candidates preparing from older material.',
    ],
    sections: [
      {
        id: 'watch',
        eyebrow: 'What to watch',
        heading: 'The SSC updates that matter most',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'The annual calendar', note: 'published ahead of the cycle, giving expected notification and examination dates for all six examinations. Useful for planning; dates do shift.' },
              { text: 'Pattern changes in the notification', note: 'SSC has restructured tiers, merged papers and altered negative marking. The pattern section is worth reading even for an exam you have sat before.' },
              { text: 'Post-wise eligibility and age bands', note: 'these differ within a single examination, particularly in CGL and JE, and have been revised.' },
              { text: 'Skill test and physical standard requirements', note: 'typing speeds, data entry thresholds and physical standards, all of which take months to prepare for.' },
              { text: 'Answer key and objection windows', note: 'SSC releases provisional keys with response sheets and opens a short objection window.' },
            ],
          },
        ],
      },
      {
        id: 'use',
        eyebrow: 'Using updates',
        heading: 'A practical routine',
        blocks: [
          {
            type: 'p',
            text: 'Check the Commission’s own website on a fixed schedule for the examinations you are targeting, read each notification end to end when it appears, and set your own reminders for application windows rather than relying on noticing them. Aggregated update pages are useful for learning quickly that something has been released; the official document is what you act on.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'SSC exams', to: '/government-exams/ssc/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Exam dates', to: '/exam-updates/exam-dates/' },
              { label: 'Cut-offs', to: '/exam-updates/cut-offs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How often does SSC change its exam patterns?',
        a: 'More often than most conducting bodies, and the changes have been substantial — the Tier 2 restructuring in SSC CGL, revisions to the MTS session format and changes to negative marking rates among them. Because these arrive through the notification rather than being announced separately, the pattern section is worth reading carefully even for an examination you have sat before, and preparing from material written for an earlier cycle is a genuine risk.',
      },
      {
        q: 'Does the SSC annual calendar give reliable dates?',
        a: 'It is reliable for planning the shape of a year and unreliable as a set of deadlines. The Commission publishes an annual calendar ahead of the cycle with expected notification and examination dates for all its examinations, and those dates do shift. Use it to see which exams fall where and whether your targets clash, and verify any date you intend to act on — an application deadline especially — against the actual notification.',
      },
      {
        q: 'What should I check first in an SSC notification?',
        a: 'Post-wise eligibility and age bands, since these differ within a single examination — particularly in SSC CGL and SSC JE — and have been revised between cycles. Then the pattern section, for the stage structure and the negative marking rate. Then any skill test or physical standard requirements, since typing speed, data entry thresholds and physical standards all take months to prepare for and arrive at the end of the process.',
      },
    ],
  },

  '/exam-updates/banking/': {
    title: 'Banking Exam Updates: IBPS, SBI and RBI Recruitment News',
    description:
      'Banking exam updates — IBPS calendar, SBI and RBI advertisements, pattern revisions and what to watch in each notification.',
    lead: [
      'Banking recruitment runs on three separate calendars. IBPS publishes an annual calendar covering its common processes; the State Bank of India advertises its own recruitments independently; and the Reserve Bank issues its own advertisements for Grade B and specialist posts.',
      'Following all three is worth the effort for anyone preparing seriously, because the calendars rarely clash and a candidate prepared for the shared syllabus can sit several examinations in a single cycle.',
    ],
    sections: [
      {
        id: 'watch',
        eyebrow: 'What to watch',
        heading: 'Across the three channels',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'IBPS calendar and notifications',
                'An annual calendar covering the common recruitment processes for probationary officers, clerks, specialist officers and regional rural banks, followed by individual notifications. Section marks, timings and the weighting between mains and interview have all been adjusted between cycles.',
              ],
              [
                'SBI advertisements',
                'Issued independently, on the bank’s own timetable. SBI revises its pattern more frequently than IBPS, including section marks, timings and the composition of the final selection stage, so its advertisement is the only reliable source for the current structure.',
              ],
              [
                'RBI advertisements',
                'For Grade B and specialist posts. The balance between objective and descriptive components in Phase 2 and the mode of answering have changed between cycles, which matters because they alter how you should prepare.',
              ],
              [
                'State-wise and language requirements',
                'Clerical recruitments apply state preferences and local language proficiency conditions, both of which are set out in the notification and both of which affect eligibility.',
              ],
            ],
          },
        ],
      },
      {
        id: 'plan',
        eyebrow: 'Planning',
        heading: 'Using the calendars together',
        blocks: [
          {
            type: 'p',
            text: 'Because the syllabi overlap almost completely and the calendars are staggered, a candidate with one solid preparation can realistically sit IBPS PO, IBPS Clerk, SBI PO, SBI Clerk and IBPS RRB in a single year. The practical requirement is watching three sources rather than one, and reading each notification for the specifics — sectional timings, language requirements and the interview weighting — that differ between them.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Banking exams', to: '/government-exams/banking/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Exam dates', to: '/exam-updates/exam-dates/' },
              { label: 'Banking current affairs', to: '/current-affairs/banking/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How many banking exams can I sit in one year?',
        a: 'Realistically five or more, since the syllabi overlap almost completely and the three calendars — IBPS, SBI and RBI — are staggered rather than clashing. A candidate with one solid preparation can sit IBPS PO, IBPS Clerk, SBI PO, SBI Clerk and IBPS RRB in a single cycle. The practical requirement is watching three separate sources for notifications and reading each one for the specifics that differ between them.',
      },
      {
        q: 'Does SBI follow the IBPS exam pattern?',
        a: 'Broadly in shape but not in detail, and SBI revises its pattern more frequently. Section marks, timings, the descriptive paper weighting and the composition of the final selection stage — which includes a group exercise alongside the interview — have all differed from the IBPS equivalent and have changed between cycles. SBI’s own advertisement is the only reliable source for the structure applying to a given recruitment.',
      },
      {
        q: 'What should I watch for in banking notifications?',
        a: 'Sectional timings and marks, since these have been adjusted between cycles and they determine attempt strategy; the weighting between the main examination and the interview in officer recruitments; state preference and local language proficiency requirements in clerical recruitments, which affect eligibility; and for RBI Grade B, the balance between objective and descriptive components in Phase 2, which has changed and materially alters how you should prepare.',
      },
    ],
  },

  '/exam-updates/railways/': {
    title: 'Railway Exam Updates: RRB Notifications, CBT Dates and Results',
    description:
      'Railway exam updates — RRB notifications, the long multi-stage timeline, normalisation, and what to watch between stages.',
    lead: [
      'Railway recruitment runs on a longer timeline than most. A single cycle can span notification, a first computer-based test, a second, a skill or aptitude test, document verification and a medical examination over many months — and candidates routinely lose momentum in the gaps between them.',
      'Following updates through that period is therefore about more than dates. It is about knowing what the next stage requires and keeping the preparation that stage needs running while you wait.',
    ],
    sections: [
      {
        id: 'timeline',
        eyebrow: 'The timeline',
        heading: 'What a railway recruitment cycle looks like',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Notification and application', note: 'zone-wise or centralised depending on the recruitment, with post and zone preferences submitted at this stage.' },
              { text: 'CBT 1', note: 'the screening stage, run across many shifts and days, with scores normalised.' },
              { text: 'CBT 2 and additional papers', note: 'the merit-counting stage, plus trade papers in ALP and technical papers in JE.' },
              { text: 'Skill, aptitude or physical tests', note: 'typing for NTPC clerical posts, the aptitude battery for ALP, physical efficiency for Group D and RPF.' },
              { text: 'Document verification and medical', note: 'where the medical classification for the post is applied, and where a candidate can be found ineligible after clearing everything else.' },
            ],
          },
        ],
      },
      {
        id: 'watch',
        eyebrow: 'What to watch',
        heading: 'Between stages',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Keep preparing during the gaps.', note: 'They are long enough for preparation to decay and short enough that rebuilding it is difficult.' },
              { text: 'Watch for the next stage’s requirements.', note: 'Typing speed, aptitude test format or physical standards, each of which needs weeks or months.' },
              { text: 'Do not compare raw scores across shifts.', note: 'Normalisation means the published figure is not your raw mark and cross-shift comparison is meaningless.' },
              { text: 'Check the medical standard for your post early.', note: 'Especially for ALP, where the vision requirement is the strictest in railway recruitment.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Railway exams', to: '/government-exams/railways/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'Results', to: '/exam-updates/results/' },
              { label: 'Railway current affairs', to: '/current-affairs/railways/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Why do railway recruitment cycles take so long?',
        a: 'Because of scale. These recruitments attract applicant numbers large enough that the computer-based tests must run across many shifts and days, and the process then continues through a second CBT, skill or physical tests, document verification and a medical examination. A single cycle can span many months from notification to final result, which is why maintaining preparation through the gaps between stages is one of the practical challenges specific to railway recruitment.',
      },
      {
        q: 'What is normalisation in RRB results?',
        a: 'Because the examinations run across many shifts with papers that differ slightly in difficulty, scores are statistically adjusted so that candidates who sat a harder shift are not penalised. The published figure is therefore not your raw mark, and comparing raw scores with candidates from other shifts tells you very little about your relative position. Normalisation applies to the CBTs in every RRB recruitment.',
      },
      {
        q: 'What should I do between railway exam stages?',
        a: 'Keep preparing, and specifically prepare for what the next stage requires. The gaps are long enough for knowledge and physical fitness to decay and short enough that rebuilding them is difficult. For NTPC clerical posts that means typing practice; for ALP the aptitude test format and trade paper; for Group D and RPF the physical standards. Checking the medical classification for your post early also matters, since a candidate can clear every other stage and be found ineligible at the end.',
      },
    ],
  },

  '/exam-updates/upsc/': {
    title: 'UPSC Exam Updates: Notifications, Calendar and Pattern News',
    description:
      'UPSC exam updates — the annual calendar, notification details to check, attempt and age conditions, and syllabus revisions.',
    lead: [
      'The Union Public Service Commission publishes an annual calendar covering all its examinations, then issues a notification for each. Both matter, but the notification matters more — it is where attempt limits, age relaxations, optional subject lists and any structural revision are stated.',
      'For candidates in a multi-year preparation, the details worth watching most closely are those that affect eligibility. Attempt limits and age bands are narrower for these examinations than for most, and a change to them alters how many genuine opportunities remain.',
    ],
    sections: [
      {
        id: 'check',
        eyebrow: 'What to check',
        heading: 'In a UPSC notification',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Attempt limits and age bands by category', note: 'narrower than in most examinations, and the details that determine how many opportunities you actually have.' },
              { text: 'The optional subject list', note: 'for the Civil Services and Indian Forest Service examinations, including any subject added or withdrawn, and the disallowed combinations in IFoS.' },
              { text: 'Any change to the paper structure', note: 'the composition of the mains papers, the marks distribution and the qualifying language paper requirements.' },
              { text: 'Eligibility for the specific examination', note: 'IFoS requires particular degree subjects, ESE requires an engineering degree in a specified branch, and CDS entries differ by academy.' },
              { text: 'Physical and medical standards', note: 'for IFoS, CAPF and the defence entries, where they apply and differ.' },
            ],
          },
        ],
      },
      {
        id: 'planning',
        eyebrow: 'Planning',
        heading: 'Following UPSC updates over a multi-year preparation',
        blocks: [
          {
            type: 'p',
            text: 'A Civil Services preparation typically spans more than one cycle, which means notifications will be read more than once and changes noticed between them. The habit worth building is checking the Commission’s own site rather than relying on secondary reporting, particularly for anything affecting eligibility — and reading the full notification each cycle rather than assuming continuity from the last one.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'UPSC exams', to: '/government-exams/upsc/' },
              { label: 'UPSC Civil Services guide', to: '/government-exams/upsc/upsc-civil-services/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'UPSC current affairs', to: '/current-affairs/upsc/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'What should I check first in a UPSC notification?',
        a: 'Attempt limits and age bands for your category, since these are narrower than in most examinations and determine how many genuine opportunities you have. Then eligibility for the specific examination — the Indian Forest Service requires particular degree subjects, the Engineering Services Examination requires a degree in a specified branch, and CDS conditions differ by academy. Then the optional subject list and any structural revision to the papers.',
      },
      {
        q: 'Does UPSC change its exam pattern often?',
        a: 'Less frequently than some conducting bodies, but the changes when they come are significant — revisions to the optional subject list, to the composition of the mains papers, and to the qualifying requirements have all occurred. Because a Civil Services preparation typically spans more than one cycle, the habit worth building is reading each notification in full rather than assuming continuity from the previous one, particularly for anything affecting eligibility.',
      },
      {
        q: 'Is the UPSC annual calendar reliable?',
        a: 'For planning the shape of a year, yes — it gives expected notification and examination dates across all the Commission’s examinations, which is enough to see whether your targets clash and when your preparation phases must end. For deadlines, verify against the actual notification, since dates do shift. The calendar is a planning instrument rather than a set of commitments.',
      },
    ],
  },

  '/exam-updates/state/': {
    title: 'State Exam Updates: PSC, Police and Group Exam Notifications',
    description:
      'State exam updates — following state public service commission and recruitment board notifications, domicile rules and language requirements.',
    lead: [
      'State recruitment is the hardest category to follow, because there is no single source. Each state runs its own public service commission, police recruitment board, subordinate services board and departmental recruitment, each publishing on its own site and its own timetable.',
      'For a candidate targeting one state that is manageable. For a candidate open to several, it means checking several sources regularly — and the effort is usually rewarded, because state recruitment fills more posts than all the central examinations combined.',
    ],
    sections: [
      {
        id: 'sources',
        eyebrow: 'Where to look',
        heading: 'The bodies that recruit in a state',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'The state public service commission', note: 'for administrative and gazetted posts through group examinations and departmental recruitment.' },
              { text: 'The police recruitment board', note: 'for constable and sub-inspector posts, usually with its own separate calendar.' },
              { text: 'The subordinate or staff selection board', note: 'for clerical and departmental posts at group C and D level.' },
              { text: 'The education department or teacher recruitment board', note: 'for teacher eligibility tests and teacher recruitment.' },
              { text: 'Individual departments and corporations', note: 'which recruit directly for specialist and technical posts.' },
            ],
          },
        ],
      },
      {
        id: 'check',
        eyebrow: 'What to check',
        heading: 'In a state notification specifically',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Domicile and local candidate requirements.', note: 'These determine which posts and reservation categories you can access, and the documentation takes time to obtain.' },
              { text: 'The language of the examination and any language paper.', note: 'Most state examinations are conducted in the state language and many test it directly.' },
              { text: 'The state-specific content in the syllabus.', note: 'History, geography, culture and administration of the state, which no national material covers.' },
              { text: 'Age bands and relaxations under state rules.', note: 'These differ from central rules and from each other.' },
              { text: 'Physical and medical standards where applicable.', note: 'Police and forest recruitment apply them, and they differ by state.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'State government exams', to: '/government-exams/state/' },
              { label: 'Latest notifications', to: '/exam-updates/latest-notifications/' },
              { label: 'State PSC current affairs', to: '/current-affairs/state-psc/' },
              { label: 'All exam updates', to: '/exam-updates/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Where do I find state exam notifications?',
        a: 'On the site of each recruiting body, since there is no single source. A state typically has a public service commission for administrative posts, a police recruitment board, a subordinate or staff selection board for clerical and departmental posts, a teacher recruitment body, and individual departments recruiting directly. For a candidate targeting one state this means checking a handful of sites regularly; for a candidate open to several, considerably more.',
      },
      {
        q: 'What is different about a state exam notification?',
        a: 'Three things that central notifications do not contain. Domicile or local candidate requirements, which determine which posts and reservation categories you can access and whose documentation takes time to obtain. The language of the examination, since most are conducted in the state language and many include a language paper. And a syllabus containing state-specific content — the state’s history, geography, culture and administration — that no national study material covers.',
      },
      {
        q: 'Can I apply for exams in more than one state?',
        a: 'Sometimes, but domicile and local candidate rules generally restrict access to particular posts and reservation categories, and most state examinations expect proficiency in the state language. The rules differ between states and are based on where you were born, resided or studied. Because these are documentation matters rather than preparation ones, they are easy to overlook and expensive to discover late — confirm them well before an application window opens.',
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     Current affairs
     ══════════════════════════════════════════════════════════════ */

  '/current-affairs/today/': {
    title: 'Today’s Current Affairs: Reading the News for Exam Relevance',
    description:
      'Daily current affairs for competitive exams — how to read the news for exam relevance rather than news value, and what to record.',
    lead: [
      'Reading the news and studying current affairs are different activities. News is written to convey what happened; an examination asks what it means, who is involved, which institution it concerns, and how it connects to a scheme, an index or a constitutional provision. Reading for the first and expecting to have prepared for the second is the commonest reason candidates find current affairs unrewarding.',
      'The practical difference is what you record. A daily habit that produces a themed, revisable set of notes converts into marks; one that produces a feeling of being informed does not.',
    ],
    sections: [
      {
        id: 'reading',
        eyebrow: 'How to read',
        heading: 'What to extract from a day’s news',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'The institution involved', note: 'which ministry, regulator, international body or constitutional authority. Questions frequently ask about the institution rather than the event.' },
              { text: 'The scheme or programme named', note: 'its objective, its ministry, its beneficiaries and any target attached to it.' },
              { text: 'The number, where there is one', note: 'a rank, a percentage, an allocation. These are what objective questions are built from.' },
              { text: 'The connection to static knowledge', note: 'a river dispute connects to geography, a bill to polity, a rate decision to economics. Those connections are what make a fact memorable.' },
              { text: 'The debate around it', note: 'for descriptive examinations and interviews, the argument matters more than the event.' },
            ],
          },
        ],
      },
      {
        id: 'habit',
        eyebrow: 'The habit',
        heading: 'What a sustainable daily routine looks like',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'One source, read properly, rather than several skimmed.', note: 'Coverage is less valuable than retention, and retention comes from repeated contact with the same material.' },
              { text: 'Twenty to forty minutes, at the same time each day.', note: 'A fixed slot survives a busy week; an unscheduled intention does not.' },
              { text: 'Record by theme, not by date.', note: 'A dated log is unrevisable. A themed one — schemes, appointments, indices, agreements — is.' },
              { text: 'Revise the themes weekly.', note: 'Frequency beats depth for recall-based material.' },
              { text: 'Test yourself rather than re-reading.', note: 'Retrieval is what builds durable memory.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Weekly current affairs', to: '/current-affairs/weekly/' },
              { label: 'Monthly current affairs', to: '/current-affairs/monthly/' },
              { label: 'Daily current affairs quiz', to: '/current-affairs/daily-quiz/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How should I read the news for competitive exams?',
        a: 'For the institution, the scheme, the number and the connection to static knowledge, rather than for the narrative. An examination rarely asks what happened; it asks which ministry runs a scheme, which body publishes an index, what a rank was, or how a development connects to a constitutional provision. Reading for news value and expecting to have prepared for exam questions is the commonest reason candidates find current affairs unrewarding despite reading daily.',
      },
      {
        q: 'How long should I spend on current affairs each day?',
        a: 'Twenty to forty minutes, at a fixed time, from a single source read properly. Coverage matters less than retention here, and retention comes from repeated contact with the same material rather than from breadth. A fixed daily slot survives a busy week in a way that an unscheduled intention does not, and the consistency is the whole mechanism — current affairs rewards daily contact over months and barely responds to intensive effort at the end.',
      },
      {
        q: 'Should I make notes on daily current affairs?',
        a: 'Yes, but organised by theme rather than by date. A dated log is essentially unrevisable — you will not read back through three months of daily entries. A themed set of pages — schemes, appointments, indices, agreements, reports, awards — accumulates and can be revised weekly in a few minutes each. The themes are also how questions are grouped, which makes themed notes a closer match to what you will be asked.',
      },
    ],
  },

  '/current-affairs/weekly/': {
    title: 'Weekly Current Affairs: Consolidating a Week Into Revision',
    description:
      'Weekly current affairs revision — why a weekly consolidation beats daily reading alone, and how to structure the review.',
    lead: [
      'Daily reading gets material in front of you; weekly consolidation is what keeps it. The gap between the two is where most current affairs preparation quietly fails — a candidate reads every day for six months, revises none of it, and finds in the exam that almost nothing was retained.',
      'A weekly review is short, and it does something a daily read cannot: it groups related items, drops what turned out to be trivial, and gives you a second pass at the things that matter while they are still fresh enough to attach to.',
    ],
    sections: [
      {
        id: 'why',
        eyebrow: 'Why weekly',
        heading: 'What a weekly pass adds',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Spacing', note: 'a second contact a few days after the first is roughly when memory research says it does most good, and a weekly review supplies it automatically.' },
              { text: 'Grouping', note: 'items that arrived on different days belong to the same theme, and seeing them together is what makes each memorable.' },
              { text: 'Filtering', note: 'a week’s distance makes it obvious which items were genuinely significant and which were noise, which keeps your notes usable.' },
              { text: 'Connection', note: 'a week is long enough for a story to develop, and following the development is what turns a fact into understanding.' },
            ],
          },
        ],
      },
      {
        id: 'how',
        eyebrow: 'How to do it',
        heading: 'A weekly review that takes half an hour',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Go through the week’s notes and group by theme.', note: 'Schemes, appointments, indices and reports, agreements, awards, science, defence.' },
              { text: 'Drop what no longer looks significant.', note: 'Ruthlessly. Notes you will not revise are worse than no notes.' },
              { text: 'Add each surviving item to its permanent themed page.', note: 'So the themed pages grow and the weekly notes can be discarded.' },
              { text: 'Test yourself on the previous week rather than this one.', note: 'Retrieval at a delay is what builds durable recall.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: "Today's current affairs", to: '/current-affairs/today/' },
              { label: 'Monthly current affairs', to: '/current-affairs/monthly/' },
              { label: 'Current affairs PDF', to: '/current-affairs/pdf/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Why do I need weekly revision if I read daily?',
        a: 'Because reading is not retention. A candidate who reads current affairs every day for six months and never revises will retain very little of it, which is one of the most common quiet failures in competitive exam preparation. A weekly pass supplies a second contact with the material a few days after the first — roughly when it does most good for memory — and groups items that arrived on different days into the themes that questions are actually built around.',
      },
      {
        q: 'How long should weekly current affairs revision take?',
        a: 'About half an hour if you are consolidating notes you already made. Go through the week’s entries, group them by theme, drop what no longer looks significant, and add the survivors to permanent themed pages. The point is not to re-read everything but to filter and organise, so that what remains is a small, revisable set rather than an accumulating pile you will never open again.',
      },
      {
        q: 'What should I do with items that turn out to be unimportant?',
        a: 'Drop them, ruthlessly. A week’s distance makes it much clearer which items were genuinely significant and which were noise, and that filtering is one of the main benefits of the weekly pass. Notes you will not revise are worse than no notes, because they make the set large enough to feel daunting and therefore likely to be abandoned entirely.',
      },
    ],
  },

  '/current-affairs/monthly/': {
    title: 'Monthly Current Affairs: Compilations and How to Use Them',
    description:
      'Monthly current affairs compilations — what they are good for, their limitations, and how to use them alongside daily reading.',
    lead: [
      'A monthly compilation collects a month of developments into a single organised document. It is the most popular current affairs resource in competitive preparation, and it is genuinely useful — as a revision instrument and a completeness check.',
      'What it is not is a substitute for daily reading, though it is frequently used as one. A compilation read once, a month after the events, produces recognition rather than recall, and recognition does not survive contact with an objective question that offers four plausible options.',
    ],
    sections: [
      {
        id: 'good',
        eyebrow: 'What it is good for',
        heading: 'The right use of a monthly compilation',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Revision of material you already met', note: 'this is its best use. A second or third pass over developments you read about daily is exactly what converts them into recall.' },
              { text: 'Checking completeness', note: 'a compilation catches items your source missed or you skipped, and the gaps are worth noting.' },
              { text: 'Organisation by theme', note: 'a good compilation groups items in the way questions do, which is more useful than chronological order.' },
              { text: 'A recovery mechanism', note: 'if you fall behind for a fortnight, the compilation is how you catch up without reading a fortnight of back issues.' },
            ],
          },
        ],
      },
      {
        id: 'limits',
        eyebrow: 'The limitation',
        heading: 'Why it cannot replace daily reading',
        blocks: [
          {
            type: 'p',
            text: 'Reading a month of developments in a single sitting gives you one contact with each item, a month after it happened, in a context where all of them look equally important. Daily reading gives you the item when it was news, its follow-up over subsequent days, the surrounding debate, and repeated exposure — which is what memory actually needs. The compilation works well on top of that and poorly instead of it.',
          },
          {
            type: 'steps',
            title: 'A workable combination',
            items: [
              { text: 'Read daily from one source, taking themed notes.', note: 'The primary habit.' },
              { text: 'Consolidate weekly into permanent themed pages.', note: 'The filtering and spacing pass.' },
              { text: 'Use the monthly compilation as a completeness check.', note: 'Noting what you missed rather than re-reading everything.' },
              { text: 'Revise your own themed pages before the exam.', note: 'Not the compilations, which are too long to revise repeatedly.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: "Today's current affairs", to: '/current-affairs/today/' },
              { label: 'Weekly current affairs', to: '/current-affairs/weekly/' },
              { label: 'Current affairs PDF', to: '/current-affairs/pdf/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I prepare current affairs from monthly compilations alone?',
        a: 'Poorly. Reading a month of developments in one sitting gives you a single contact with each item, a month after it happened, with everything looking equally important — which produces recognition rather than recall, and recognition does not survive an objective question offering four plausible options. Compilations work well as a second or third pass over material you have already read daily, and badly as a substitute for that reading.',
      },
      {
        q: 'What is a monthly compilation actually good for?',
        a: 'Three things. Revision, which is its best use — a second pass over developments you already met is what converts them into durable recall. Completeness checking, since it catches items your daily source missed or that you skipped. And recovery, if you fall behind for a fortnight, since reading the compilation is a faster way to catch up than working through back issues.',
      },
      {
        q: 'Should I revise from compilations before the exam?',
        a: 'Better to revise from your own themed notes, and use compilations to build them. Monthly compilations are long — several months of them is a great deal of reading — which makes them impractical to revise repeatedly in the final weeks. Themed pages that you have built and filtered yourself are shorter, organised the way questions are, and contain only what you judged worth keeping, which makes them the more useful final-revision document.',
      },
    ],
  },

  '/current-affairs/daily-quiz/': {
    title: 'Daily Current Affairs Quiz: Retrieval Practice That Works',
    description:
      'Daily current affairs quiz — why testing beats re-reading for recall, and how to use a short daily quiz productively.',
    lead: [
      'The most reliable finding in the study of memory is that retrieving something strengthens it more than re-reading it does. For current affairs — where the material is factual, plentiful and quick to decay — that makes a daily quiz the single most efficient revision instrument available.',
      'Ten questions take ten minutes. Over six months that is thirty hours, spread so thinly it never feels like work, producing recall that thirty hours of reading would not.',
    ],
    sections: [
      {
        id: 'why',
        eyebrow: 'Why testing',
        heading: 'What a quiz does that re-reading does not',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'It reveals what you do not know', note: 'reading a fact produces a feeling of familiarity that is easily mistaken for knowledge. Being asked and failing removes the ambiguity.' },
              { text: 'It strengthens what you do know', note: 'the act of retrieval is itself what consolidates memory, more effectively than another exposure.' },
              { text: 'It spaces automatically', note: 'themes recur across days, which supplies the repeated contact that recall requires.' },
              { text: 'It is short enough to sustain', note: 'and consistency is the entire mechanism.' },
            ],
          },
        ],
      },
      {
        id: 'how',
        eyebrow: 'How to use it',
        heading: 'Getting the benefit',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Answer before checking, always.', note: 'Even when uncertain. A guess followed by feedback teaches more than reading the answer first.' },
              { text: 'Log wrong answers by theme.', note: 'Schemes, appointments, indices, agreements. Themed logs are revisable; question lists are not.' },
              { text: 'Revisit the wrong ones a week later.', note: 'Missing the same item twice is a signal to study the underlying topic rather than to keep quizzing it.' },
              { text: 'Keep it daily and keep it short.', note: 'A missed week undoes more than an extra fifty questions add.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: "Today's current affairs", to: '/current-affairs/today/' },
              { label: 'Weekly current affairs', to: '/current-affairs/weekly/' },
              { label: 'Daily quiz practice', to: '/practice/daily-quiz/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is a quiz better than re-reading current affairs?',
        a: 'Because retrieval strengthens memory more than repeated exposure does. Reading a fact produces a feeling of familiarity that is easily mistaken for knowledge; being asked for it and failing removes that ambiguity and, when you succeed, the act of retrieval itself consolidates the memory. For factual, plentiful, quickly decaying material like current affairs, that makes a short daily quiz the most efficient revision instrument available.',
      },
      {
        q: 'How many current affairs questions should I do daily?',
        a: 'Ten is a common and effective number, taking about ten minutes. The size matters less than the consistency — a set small enough that you will do it on a busy day is worth more than a larger one you will skip. Over six months, ten questions a day accumulates to substantial retrieval practice, spread thinly enough that it never feels like work.',
      },
      {
        q: 'What should I do with current affairs questions I get wrong?',
        a: 'Log them by theme rather than as a list of questions, so the record is revisable, and revisit them about a week later. If you miss the same item twice, that is a signal to study the underlying topic properly rather than to keep quizzing it — a quiz reveals gaps efficiently but does not close conceptual ones. Themed logs also tend to show patterns that individual questions do not.',
      },
    ],
  },

  '/current-affairs/pdf/': {
    title: 'Current Affairs PDF: Offline Compilations and How to Use Them',
    description:
      'Current affairs PDFs — when a downloadable compilation helps, its limits as a revision tool, and how to build your own instead.',
    lead: [
      'Downloadable current affairs compilations are popular for a straightforward reason: they work offline, on any device, in a queue or on a commute. For a candidate whose study time is fragmented, that accessibility is worth something real.',
      'What they do less well is serve as a revision document. A PDF covering three months is long, uniformly weighted and not organised around what you personally keep forgetting — which are exactly the properties a final-revision document should not have.',
    ],
    sections: [
      {
        id: 'use',
        eyebrow: 'Where they help',
        heading: 'What a downloadable compilation is good for',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Fragmented study time', note: 'a commute, a queue, a gap between clinical shifts. Material that works offline gets read when a website would not.' },
              { text: 'Catching up', note: 'after falling behind for a fortnight, a compilation is faster than working through back issues.' },
              { text: 'Completeness checking', note: 'noticing what your daily source missed or you skipped.' },
              { text: 'Thematic organisation', note: 'a good compilation groups items the way questions do, which is more useful than chronological order.' },
            ],
          },
        ],
      },
      {
        id: 'own',
        eyebrow: 'Better still',
        heading: 'Build your own revision document',
        blocks: [
          {
            type: 'p',
            text: 'The most useful current affairs document you will have in the final month is one you wrote. Themed pages built from daily reading and filtered weekly are short, contain only what you judged worth keeping, and — crucially — emphasise what you personally kept forgetting rather than weighting everything equally. Compilations are raw material for that document rather than a replacement for it.',
          },
          {
            type: 'steps',
            title: 'How to build it',
            items: [
              { text: 'Keep permanent themed pages.', note: 'Schemes, appointments, indices and reports, agreements, awards, science and technology, defence.' },
              { text: 'Add to them weekly from your daily notes.', note: 'Filtering as you go.' },
              { text: 'Mark what you keep getting wrong in quizzes.', note: 'Those items deserve more space than items you always know.' },
              { text: 'Revise these pages in the final weeks, not the compilations.', note: 'They are short enough to revise repeatedly, which is what the final month needs.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Monthly current affairs', to: '/current-affairs/monthly/' },
              { label: 'Weekly current affairs', to: '/current-affairs/weekly/' },
              { label: "Today's current affairs", to: '/current-affairs/today/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Are current affairs PDFs useful for exam preparation?',
        a: 'Genuinely, for accessibility. They work offline on any device, which means they get read during a commute, in a queue or in the gaps of a working day when a website would not — and for candidates with fragmented study time that matters. They are also good for catching up after falling behind, and for checking whether your daily source missed anything.',
      },
      {
        q: 'Can I revise from current affairs PDFs before the exam?',
        a: 'Less effectively than from your own notes. A compilation covering three months is long, weights everything equally, and is not organised around what you personally keep forgetting — which are precisely the wrong properties for a final-revision document. Themed pages you have built and filtered yourself are shorter, emphasise your actual weak points, and can be revised repeatedly in the final weeks in a way a stack of compilations cannot.',
      },
      {
        q: 'How do I build my own current affairs revision document?',
        a: 'Keep permanent themed pages — schemes, appointments, indices and reports, agreements, awards, science and technology, defence — and add to them weekly from your daily reading, filtering as you go. Mark the items you keep getting wrong in quizzes, and give them more space than the ones you always know. By the final month you will have a short, personally weighted document that is genuinely revisable, which is what that month needs.',
      },
    ],
  },

  '/current-affairs/india/': {
    title: 'National Current Affairs: Indian Developments for Exams',
    description:
      'National current affairs — which Indian developments matter for competitive exams, and how to connect them to static knowledge.',
    lead: [
      'National current affairs is the largest and most reliably examined slice of the subject. Government decisions, parliamentary developments, judicial pronouncements, appointments, schemes and reports appear across every examination that tests awareness at all.',
      'What makes this material tractable is its connection to static knowledge. A bill connects to the constitutional provision it amends; a scheme to the ministry that runs it; a court decision to the article it interprets. Reading with those connections in view is what makes national current affairs memorable rather than merely voluminous.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The recurring categories',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Government schemes and programmes', note: 'the objective, the ministry, the target group and any numerical target. The most reliably examined category of all.' },
              { text: 'Legislation and parliamentary developments', note: 'bills passed, the provisions they alter, and the constitutional articles involved.' },
              { text: 'Judicial decisions of significance', note: 'and the constitutional questions they turn on.' },
              { text: 'Appointments and institutional changes', note: 'to constitutional bodies, regulators, commissions and the higher judiciary.' },
              { text: 'Reports and indices published domestically', note: 'the publishing body, the finding, and India’s position where a ranking is involved.' },
            ],
          },
        ],
      },
      {
        id: 'connect',
        eyebrow: 'Making it stick',
        heading: 'Connecting current to static',
        blocks: [
          {
            type: 'p',
            text: 'A scheme name in isolation is a fact to be memorised and forgotten. The same scheme understood as a response to a problem, run by a specific ministry, building on a predecessor programme, is part of a structure — and structures are what memory holds. This is why candidates who study polity, economy and geography alongside current affairs retain far more of both than those who treat them as separate subjects.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Government schemes', to: '/current-affairs/government-schemes/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which national developments matter most for competitive exams?',
        a: 'Government schemes and programmes are the most reliably examined category — their objective, the ministry running them, the target group and any numerical target attached. Alongside those, legislation and the constitutional provisions it alters, significant judicial decisions and the articles they turn on, appointments to constitutional bodies and regulators, and domestically published reports and indices with the finding and India’s position where a ranking is involved.',
      },
      {
        q: 'How do I remember so many schemes and programmes?',
        a: 'By connecting them to structures rather than memorising them as isolated names. A scheme understood as a response to a specific problem, run by a named ministry, building on a predecessor programme, is part of a framework that memory can hold — where a name in a list is not. This is why candidates who study polity and economy alongside current affairs retain far more of both than those treating them as separate subjects.',
      },
      {
        q: 'How far back should national current affairs go?',
        a: 'Most examinations draw on roughly the preceding six to twelve months, though schemes and institutional facts have a longer life — a scheme launched two years ago is still current if it is still running, and questions about its ministry or objective remain fair. The practical approach is to follow developments daily and maintain themed pages that carry forward, rather than trying to define a cut-off date and revise everything within it.',
      },
    ],
  },

  '/current-affairs/international/': {
    title: 'International Current Affairs: Global Events for Indian Exams',
    description:
      'International current affairs — which global developments Indian competitive exams test, from institutions and summits to bilateral relations.',
    lead: [
      'International current affairs is examined more narrowly than its scope suggests. Competitive exams are not testing general knowledge of world events; they are testing a fairly specific set of things — international institutions and their functions, summits and groupings India belongs to, bilateral developments involving India, and global reports and indices.',
      'Knowing that narrowing is what makes the subject manageable. A candidate reading world news generally will absorb a great deal that is never asked, while missing the institutional detail that is.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The recurring categories',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'International organisations', note: 'their headquarters, membership, leadership and function. Questions about the institution recur far more than questions about events involving it.' },
              { text: 'Groupings India belongs to', note: 'their members, their purpose, the summit host and any declaration issued.' },
              { text: 'Bilateral developments involving India', note: 'agreements, joint exercises, state visits and their outcomes.' },
              { text: 'Global reports and indices', note: 'the publishing organisation, the metric and India’s position.' },
              { text: 'Significant conflicts and their geography', note: 'where questions are usually about location, parties and the relevant international body rather than about events.' },
            ],
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'Method',
        heading: 'Studying it efficiently',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Build an institutional reference page.', note: 'Every organisation you encounter, with its headquarters, membership and function. This page answers more questions than any amount of event reading.' },
              { text: 'Track groupings and summits India participates in.', note: 'The host, the theme and the outcome document.' },
              { text: 'Note global indices with India’s rank.', note: 'A short list, reliably examined.' },
              { text: 'Connect conflicts to geography.', note: 'A map question about a country in the news is more likely than a question about the events themselves.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'World geography notes', to: '/study-material/geography/' },
              { label: 'National current affairs', to: '/current-affairs/india/' },
              { label: 'Defence current affairs', to: '/current-affairs/defence/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much international news do competitive exams test?',
        a: 'Less than the scope suggests, and more narrowly. Exams are not testing general awareness of world events; they concentrate on international institutions and their functions, groupings and summits India participates in, bilateral developments involving India, and global reports and indices with India’s position. A candidate reading world news generally will absorb a great deal that is never asked while missing the institutional detail that is.',
      },
      {
        q: 'What is the most efficient way to study international current affairs?',
        a: 'Build an institutional reference page and keep adding to it — every international organisation you encounter, with its headquarters, membership, leadership and function. That single page answers more examination questions than any amount of event-by-event reading, because questions about institutions recur far more reliably than questions about the events involving them.',
      },
      {
        q: 'Do I need to follow foreign conflicts in detail?',
        a: 'Generally not in detail. Where conflicts are examined, the questions are usually about geography — which country, which region, which neighbours — the parties involved, and the relevant international body, rather than about the sequence of events. Connecting a country in the news to its location and neighbours on a map is therefore more useful preparation than following the developments closely.',
      },
    ],
  },

  '/current-affairs/economy-banking/': {
    title: 'Economy & Banking Current Affairs for Competitive Exams',
    description:
      'Economy and banking current affairs — monetary policy, budget, indicators and financial sector developments, and how to study them.',
    lead: [
      'Economic and banking current affairs is the section where following the news and understanding the subject diverge most sharply. A rate decision reported in a headline is a fact; the same decision understood as an instrument of monetary policy responding to an inflation reading is a piece of economics, and only the second survives a question that asks why.',
      'That distinction matters more for some examinations than others. Banking mains papers and RBI Grade B need the understanding; a general awareness section in a police recruitment usually needs only the fact.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The recurring categories',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Monetary policy decisions', note: 'the policy rate, the stance, the committee, and the inflation and growth projections that accompany them.' },
              { text: 'The budget and fiscal figures', note: 'major allocations, tax changes, the deficit target and headline announcements.' },
              { text: 'Economic indicators', note: 'inflation measures, growth estimates, industrial and trade data, and the bodies that publish each.' },
              { text: 'Banking sector developments', note: 'regulatory changes, mergers, new instruments, payment system developments and financial inclusion measures.' },
              { text: 'Institutions and their roles', note: 'the central bank’s functions and instruments, the regulators, and the international financial institutions.' },
            ],
          },
        ],
      },
      {
        id: 'depth',
        eyebrow: 'How deep to go',
        heading: 'Matching the depth to your exam',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'For general awareness sections',
                'Facts suffice — the rate, the figure, the institution, the name of the scheme. Read a business newspaper for the headlines and record them thematically.',
              ],
              [
                'For banking mains papers',
                'Facts plus mechanism — why the instrument was used, what it is intended to affect, how the regulatory change alters bank behaviour. Enough to answer a question that asks about purpose rather than value.',
              ],
              [
                'For RBI Grade B and regulatory examinations',
                'Understanding sufficient to argue. These papers ask you to analyse a policy question in writing, which requires having formed a view and being able to defend it against the obvious counter-argument.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Economy study material', to: '/study-material/economy/' },
              { label: 'Banking current affairs', to: '/current-affairs/banking/' },
              { label: 'RBI Grade B guide', to: '/government-exams/banking/rbi-grade-b/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much economics do I need for current affairs questions?',
        a: 'It depends on the examination. A general awareness section usually asks for facts — the policy rate, a budget figure, the name of a scheme — which a business newspaper read for headlines will supply. Banking mains papers ask about purpose and mechanism, which requires understanding why an instrument was used and what it affects. RBI Grade B and regulatory examinations ask you to analyse policy questions in writing, which requires having formed a view you can defend.',
      },
      {
        q: 'What economic developments are most reliably examined?',
        a: 'Monetary policy decisions with the rate, stance and accompanying projections; budget allocations, tax changes and the deficit target; economic indicators together with the bodies that publish them; and banking sector regulatory changes. Alongside those, institutional questions — the central bank’s functions and instruments, the roles of the various regulators, and the international financial institutions — which recur more reliably than any individual event.',
      },
      {
        q: 'Should I read a business newspaper for competitive exams?',
        a: 'For banking, insurance, regulatory and management examinations, yes — it serves the awareness sections, the reading comprehension sections and the interview stage simultaneously, which makes it among the most efficient single habits available. For examinations where economic awareness is a smaller component, a general newspaper read with attention to the economic pages is usually sufficient.',
      },
    ],
  },

  '/current-affairs/government-schemes/': {
    title: 'Government Schemes: The Most Reliably Examined Current Affairs',
    description:
      'Government schemes for competitive exams — what to record about each scheme, why they recur, and how to organise them for revision.',
    lead: [
      'Government schemes are the single most reliably examined category of current affairs across almost every competitive examination in India. They appear in SSC general awareness, in banking mains, in railway papers, in state examinations and in UPSC prelims, and the questions asked about them are remarkably consistent.',
      'That consistency is what makes them worth studying systematically rather than absorbing incidentally. A scheme has a small number of examinable attributes, and recording those attributes deliberately for each scheme you encounter builds a revision resource that pays across every exam you sit.',
    ],
    sections: [
      {
        id: 'record',
        eyebrow: 'What to record',
        heading: 'The examinable attributes of a scheme',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'The ministry or department running it', note: 'the most commonly asked attribute of all, and the one candidates most often confuse between similar schemes.' },
              { text: 'The objective', note: 'stated briefly — what problem it addresses.' },
              { text: 'The target group and eligibility', note: 'who benefits, and on what condition.' },
              { text: 'Any numerical target or allocation', note: 'a coverage figure, a financial outlay, a deadline.' },
              { text: 'The launch year and any predecessor', note: 'many schemes restructure or replace earlier programmes, and the relationship is asked about.' },
              { text: 'Whether it is central, centrally sponsored or state', note: 'a distinction that appears in polity-flavoured questions.' },
            ],
          },
        ],
      },
      {
        id: 'organise',
        eyebrow: 'Organising',
        heading: 'Building a scheme reference you will actually revise',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Keep one page grouped by sector.', note: 'Agriculture, health, education, housing, financial inclusion, employment, women and child, energy. Grouping is what makes it revisable.' },
              { text: 'One line per scheme, with the attributes above.', note: 'Resist writing paragraphs; a reference page you will not re-read is useless.' },
              { text: 'Note the pairs that get confused.', note: 'Schemes with similar names or overlapping objectives are exactly what distractor options are built from.' },
              { text: 'Revise the page weekly.', note: 'It is short enough that this takes a few minutes and long enough that it repays them.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'National current affairs', to: '/current-affairs/india/' },
              { label: 'Economy study material', to: '/study-material/economy/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Why are government schemes asked about so often?',
        a: 'Because they are unambiguous, verifiable and current — which makes them ideal material for an objective question. A scheme has a defined ministry, objective, target group and often a numerical target, all of which produce clean questions with a single correct answer. That is why they appear across SSC, banking, railway, state and UPSC examinations alike, and why studying them systematically pays across every exam you sit rather than just one.',
      },
      {
        q: 'What should I record about each government scheme?',
        a: 'Six things, briefly: the ministry or department running it, which is the most commonly asked attribute and the one most often confused; the objective in a phrase; the target group and eligibility; any numerical target or allocation; the launch year and any scheme it replaced; and whether it is a central sector, centrally sponsored or state scheme. One line per scheme is the right length — a reference page you will not re-read is useless.',
      },
      {
        q: 'How should I organise government scheme notes?',
        a: 'By sector rather than chronologically — agriculture, health, education, housing, financial inclusion, employment, women and child development, energy. Sector grouping makes the page revisable in a few minutes and mirrors how questions cluster. It is also worth noting explicitly which schemes get confused with each other, since schemes with similar names or overlapping objectives are precisely what distractor options in objective questions are built from.',
      },
    ],
  },

  '/current-affairs/science-technology/': {
    title: 'Science & Technology Current Affairs for Competitive Exams',
    description:
      'Science and technology current affairs — space missions, defence technology, health and emerging technology, and what exams actually ask.',
    lead: [
      'Science and technology current affairs is examined in a specific and fairly predictable way. Questions are rarely about the science itself; they are about the mission name, the launching organisation, the objective, the orbit or the destination — the identifying facts around a development rather than its technical content.',
      'That is good news for candidates without a science background. Understanding the physics of a launch vehicle is not required; knowing which organisation launched it, what it carried and where it was going generally is.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The recurring categories',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Space missions', note: 'the mission name, the launch vehicle, the organisation, the objective and the destination or orbit. The most heavily examined science category by some margin.' },
              { text: 'Defence technology', note: 'missile and aircraft names, their range or role, the developing organisation and induction status.' },
              { text: 'Health and biotechnology', note: 'vaccines, disease outbreaks, medical approvals and the institutions involved.' },
              { text: 'Emerging technology', note: 'artificial intelligence, quantum computing, semiconductors and the policy around them, generally at a conceptual level.' },
              { text: 'Awards and recognitions in science', note: 'the prize, the field and the recipient.' },
            ],
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'Method',
        heading: 'How to study it without a science background',
        blocks: [
          {
            type: 'p',
            text: 'Record the identifying facts rather than the mechanism. For a space mission: the name, the vehicle, the organisation, the objective, the destination. For a defence system: the name, the role, the range if stated, the developing organisation. That is what the questions ask, and it is entirely accessible to a candidate from any background. Where an examination does want conceptual understanding — UPSC in particular — a general grasp of what a technology does and why it matters is sufficient without technical depth.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Science study material', to: '/study-material/science/' },
              { label: 'Defence current affairs', to: '/current-affairs/defence/' },
              { label: 'Environment current affairs', to: '/current-affairs/environment/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Do I need a science background for science current affairs?',
        a: 'No. Questions are rarely about the science itself — they ask for the mission name, the launching organisation, the objective, the destination, the range of a system or the recipient of a prize. Those are identifying facts, accessible to a candidate from any background. Where an examination wants conceptual understanding, as UPSC sometimes does, a general grasp of what a technology does and why it matters is sufficient without technical depth.',
      },
      {
        q: 'Which science topics are examined most?',
        a: 'Space missions by a clear margin — the mission name, the launch vehicle, the organisation, the objective and the destination or orbit. After those, defence technology with system names, roles and developing organisations; health and biotechnology developments including vaccines and approvals; emerging technology such as artificial intelligence, quantum computing and semiconductors, generally at a conceptual level; and scientific awards with the field and recipient.',
      },
      {
        q: 'How should I record science current affairs?',
        a: 'As identifying facts on a themed page rather than as explanations. For a space mission: name, vehicle, organisation, objective, destination. For a defence system: name, role, range where stated, developing organisation. One line each. That is exactly what the questions ask for, it keeps the page short enough to revise weekly, and it avoids the trap of writing explanations you will never re-read.',
      },
    ],
  },

  '/current-affairs/environment/': {
    title: 'Environment Current Affairs: Climate, Conservation and Policy',
    description:
      'Environment current affairs — climate agreements, conservation news, protected areas and environmental policy for competitive exams.',
    lead: [
      'Environment has grown from a minor category into a substantial one across competitive examinations, driven by climate policy, biodiversity commitments and a steady stream of conservation developments. It is also unusually well connected to static knowledge, which makes it more tractable than its breadth suggests.',
      'A national park in the news is a geography question; a climate summit is an international institutions question; a species reclassification is an ecology question. Studying environment current affairs alongside environment as a subject makes both considerably easier to retain.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The recurring categories',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'International climate agreements and summits', note: 'the host, the outcome, the commitments and the bodies involved.' },
              { text: 'Protected areas in the news', note: 'national parks, wildlife sanctuaries, biosphere reserves and tiger reserves — their state, their notable species and why they were in the news.' },
              { text: 'Species and conservation status', note: 'listings, reclassifications, conservation programmes and the organisations that maintain the lists.' },
              { text: 'Environmental reports and indices', note: 'the publishing body, the metric and India’s position.' },
              { text: 'Domestic environmental policy', note: 'legislation, rules, missions and targets.' },
            ],
          },
        ],
      },
      {
        id: 'connect',
        eyebrow: 'Making it stick',
        heading: 'Connecting environment news to the map',
        blocks: [
          {
            type: 'p',
            text: 'The most efficient habit in this category is geographical. Every time a protected area appears in the news, locate it — the state, the river system, the range. Every time a species is discussed, note where it is found. Those connections turn a stream of separate items into a map you already partly know, and map-based questions about places in the news are common enough to reward it directly.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Environment study material', to: '/study-material/environment/' },
              { label: 'Geography notes', to: '/study-material/geography/' },
              { label: 'International current affairs', to: '/current-affairs/international/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much environment do competitive exams test?',
        a: 'More than they used to, and increasingly so — climate policy, biodiversity commitments and conservation developments now appear across UPSC, SSC, banking and state examinations. UPSC in particular treats environment and ecology as a substantial component of both prelims and mains. The category is also well connected to geography and general science, which means studying it serves several sections at once.',
      },
      {
        q: 'What environment topics are most examined?',
        a: 'International climate agreements and summits with their hosts, outcomes and commitments; protected areas in the news, including their state, notable species and why they featured; species conservation status and the organisations maintaining those lists; environmental reports and indices with the publishing body and India’s position; and domestic environmental legislation, rules and missions with their targets.',
      },
      {
        q: 'How should I study environment current affairs?',
        a: 'Geographically. Every time a protected area appears in the news, locate it — the state, the river system, the mountain range — and every time a species is discussed, note where it is found. Those connections turn a stream of separate items into a map you already partly know, and map-based questions about places in the news are common enough across examinations to reward the habit directly.',
      },
    ],
  },

  '/current-affairs/sports/': {
    title: 'Sports Current Affairs: Tournaments, Records and Awards',
    description:
      'Sports current affairs for competitive exams — which tournaments and awards are examined, what to record, and how to revise efficiently.',
    lead: [
      'Sports current affairs is a small, well-defined and highly scoreable category. It appears in almost every general awareness section, the questions follow a predictable pattern, and the material is bounded in a way that most current affairs is not.',
      'That combination makes it one of the better returns available in awareness preparation. A short themed page updated after each major tournament covers most of what will be asked.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The predictable pattern',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Major tournament winners', note: 'the winner, the runner-up, the venue and the host country. Reliably asked after every significant event.' },
              { text: 'National sports awards', note: 'the recipients and their disciplines.' },
              { text: 'Records and milestones', note: 'firsts, fastest, youngest — the achievements that make headlines.' },
              { text: 'Multi-sport events', note: 'the host, the mascot, India’s medal tally and notable individual performances.' },
              { text: 'Appointments and administration', note: 'federation heads and significant governance changes.' },
            ],
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'Method',
        heading: 'A page that covers the category',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Keep one page, organised by sport.', note: 'Updated after each major tournament rather than daily.' },
              { text: 'Record winner, runner-up, venue and host for each event.', note: 'That is what the questions ask.' },
              { text: 'Add awards as they are announced.', note: 'With the discipline attached, since the discipline is often what is asked.' },
              { text: 'Revise the page monthly.', note: 'It is short enough that this takes minutes.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Awards current affairs', to: '/current-affairs/awards/' },
              { label: "Today's current affairs", to: '/current-affairs/today/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much sports current affairs is asked in competitive exams?',
        a: 'A small but consistent share of almost every general awareness section — typically a question or two, and more in examinations with large awareness components such as RRB NTPC and police recruitment. What makes it worth preparing is not the volume but the ratio: the category is bounded and the questions are predictable, so a modest amount of organised effort covers most of what will be asked.',
      },
      {
        q: 'What should I record about a sports event?',
        a: 'The winner, the runner-up, the venue and the host country, since those are what the questions ask. For multi-sport events, add India’s medal tally and any notable individual performance. For awards, record the recipient and the discipline, since the discipline is frequently the thing asked about. One line per event on a page organised by sport is sufficient.',
      },
      {
        q: 'How often should I update sports current affairs notes?',
        a: 'After each major tournament rather than daily — this is one of the few current affairs categories where a daily habit is unnecessary, because the examinable material arrives in discrete events rather than continuously. A page organised by sport, updated when a significant tournament concludes and revised monthly, covers the category efficiently and takes only minutes at a time.',
      },
    ],
  },

  '/current-affairs/awards/': {
    title: 'Awards & Honours: Civilian, Literary and International Prizes',
    description:
      'Awards current affairs — civilian honours, literary and film awards, international prizes and what competitive exams ask about each.',
    lead: [
      'Awards are a small, bounded and reliably examined category. Civilian honours, literary and film awards, scientific prizes and major international recognitions appear across general awareness sections, and the questions are consistent: who received it, in what field, and which body confers it.',
      'Because awards arrive in identifiable clusters through the year rather than continuously, this is a category that rewards periodic attention rather than a daily habit.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The categories that recur',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'National civilian honours', note: 'the recipients and their fields, and the hierarchy of the awards themselves.' },
              { text: 'Literary awards', note: 'the recipient, the work and the language, which is frequently the thing asked.' },
              { text: 'Film and arts awards', note: 'national awards, and significant international recognitions for Indian work.' },
              { text: 'Scientific and academic prizes', note: 'the recipient, the field and the awarding body.' },
              { text: 'International prizes', note: 'across peace, literature, economics and the sciences, with the field and the reason cited.' },
              { text: 'Gallantry and service awards', note: 'the recipients and the category of award.' },
            ],
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'Method',
        heading: 'Keeping a bounded page',
        blocks: [
          {
            type: 'p',
            text: 'Awards cluster: civilian honours around a fixed point in the year, literary and film awards at their own announcements, international prizes in a defined season. That means the category can be handled by updating a page when each cluster arrives rather than by watching for awards daily. Record the award, the recipient, the field and the conferring body — four items, one line — and revise the page as the examination approaches.',
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Sports current affairs', to: '/current-affairs/sports/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Art and culture notes', to: '/study-material/art-culture/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which awards are most asked about in competitive exams?',
        a: 'National civilian honours, literary awards with the recipient and the language of the work, national film awards, scientific and academic prizes, and major international prizes across peace, literature, economics and the sciences. Gallantry and service awards also appear, particularly in defence and police recruitment. In each case the questions ask who received it, in what field, and which body confers it.',
      },
      {
        q: 'How should I keep track of awards?',
        a: 'On a single page, updated when each cluster of announcements arrives rather than by watching daily. Awards come in identifiable seasons — civilian honours at a fixed point in the year, literary and film awards at their own announcements, international prizes in a defined period — which makes periodic attention sufficient. Record four items per award: the award, the recipient, the field and the conferring body.',
      },
      {
        q: 'How far back should I revise awards?',
        a: 'Roughly the preceding year for current affairs purposes, though the highest national honours and the most significant international prizes have a longer examinable life and are worth knowing beyond a single cycle. Historic firsts — the first recipient of a major award, the first Indian to receive an international prize — belong to static general knowledge rather than current affairs and should sit on a separate page.',
      },
    ],
  },

  '/current-affairs/defence/': {
    title: 'Defence Current Affairs: Exercises, Systems and Appointments',
    description:
      'Defence current affairs — joint exercises, weapons systems, service appointments and defence policy for competitive exams.',
    lead: [
      'Defence current affairs is examined most heavily in the defence and police recruitments — NDA, CDS, AFCAT and CAPF all include a consistent seam of it — but it appears across general awareness sections too. What makes it distinctive is that almost no general study material covers it.',
      'That gap is an opportunity. The material is bounded, the question types are consistent, and past defence exam papers plus a defence news source are effectively the only preparation needed for a category that many candidates skip entirely.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'The recurring categories',
        blocks: [
          {
            type: 'list',
            items: [
              { text: 'Joint military exercises', note: 'the name, the participating countries and the location. Among the most reliably asked defence items.' },
              { text: 'Weapons and platform induction', note: 'missiles, aircraft, ships and submarines — their names, roles and the developing or supplying organisation.' },
              { text: 'Service appointments', note: 'the chiefs of the three services and other senior appointments.' },
              { text: 'Service structure and ranks', note: 'commands, formations, insignia and the organisation of each service.' },
              { text: 'Defence policy and procurement', note: 'indigenous development programmes, procurement decisions and policy frameworks.' },
              { text: 'Operations and deployments', note: 'named operations and their purpose.' },
            ],
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'Method',
        heading: 'Building a defence awareness page',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Start from past defence exam papers.', note: 'Extract every defence question from several years of NDA, CDS, AFCAT and CAPF papers. It reveals exactly what is asked.' },
              { text: 'Follow a defence news source regularly.', note: 'Not daily necessarily, but consistently enough to catch exercises, inductions and appointments.' },
              { text: 'Keep a page for exercises specifically.', note: 'Name, participants, location. This category alone accounts for a substantial share of defence questions.' },
              { text: 'Learn the service structure once.', note: 'Ranks, commands and insignia are static and reliably examined.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Defence exams', to: '/government-exams/defence/' },
              { label: 'NDA exam guide', to: '/government-exams/upsc/nda/' },
              { label: 'International current affairs', to: '/current-affairs/international/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Which exams test defence current affairs?',
        a: 'Most heavily NDA, CDS, AFCAT and UPSC CAPF, all of which include a consistent seam of defence-specific questions in their general knowledge sections. It also appears in police recruitment and, more lightly, in general awareness sections across SSC, railway and state examinations. What makes it distinctive is that general competitive-exam material does not cover it, which leaves the marks available to candidates who prepare it deliberately.',
      },
      {
        q: 'What defence topics are asked most often?',
        a: 'Joint military exercises — the name, the participating countries and the location — are among the most reliably examined. After those, weapons and platform inductions with their names, roles and developing organisations; service appointments including the chiefs of the three services; service structure, ranks and insignia, which are static and dependable; defence policy and procurement decisions; and named operations with their purpose.',
      },
      {
        q: 'Where do I study defence current affairs from?',
        a: 'Past defence exam papers and a defence news source, which together are effectively the whole preparation. Extracting every defence question from several years of NDA, CDS, AFCAT and CAPF papers shows exactly what is asked and reveals how consistently the categories recur. Beyond that, following a defence news source regularly enough to catch exercises, inductions and appointments keeps the page current.',
      },
    ],
  },

  '/current-affairs/banking/': {
    title: 'Banking Current Affairs: RBI, Regulation and Financial News',
    description:
      'Banking current affairs — RBI decisions, regulatory changes, banking terms and financial sector developments for banking exams.',
    lead: [
      'Banking awareness is a large, decisive component of every banking mains paper, and it is the section that most reliably separates candidates — not because it is difficult, but because it is cumulative. It depends on having followed the sector for months, and it cannot be recovered in the weeks between a prelims result and the main examination.',
      'It also blends current developments with a stable body of institutional and terminological knowledge, and the stable half is often the larger source of marks.',
    ],
    sections: [
      {
        id: 'what',
        eyebrow: 'What gets asked',
        heading: 'Current developments and stable knowledge',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'Monetary policy and central banking',
                'The policy rate and stance, the committee, the instruments — repo, reverse repo, CRR, SLR, open market operations — and the functions of the central bank. The instruments and functions are stable and reliably asked; the current values change.',
              ],
              [
                'Regulation and supervision',
                'Prudential norms, asset classification, capital requirements, the resolution framework and significant regulatory circulars affecting banks.',
              ],
              [
                'Banking terminology',
                'A stable body of terms — from types of accounts and negotiable instruments to priority sector lending and financial inclusion measures — which recurs across cycles and is entirely learnable.',
              ],
              [
                'Institutions and their roles',
                'The regulators, the development finance institutions, the deposit insurance body, the payments infrastructure organisations, and the international financial institutions.',
              ],
              [
                'Sector developments',
                'Mergers, new products and instruments, payment system launches, digital banking developments and financial inclusion programmes.',
              ],
            ],
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'Method',
        heading: 'A habit that builds banking awareness',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Read a business newspaper daily from the first month.', note: 'This is cumulative material; there is no shortcut and no late recovery.' },
              { text: 'Build a stable-knowledge page alongside.', note: 'Terms, instruments, institutions and their functions. This half is learnable and often the larger source of marks.' },
              { text: 'Record monetary policy decisions as they come.', note: 'Rate, stance, projections and reasoning.' },
              { text: 'Note regulatory changes and what they alter.', note: 'For mains papers that ask about purpose rather than fact.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Banking exams', to: '/government-exams/banking/' },
              { label: 'Economy and banking current affairs', to: '/current-affairs/economy-banking/' },
              { label: 'Economy study material', to: '/study-material/economy/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'When should I start banking awareness preparation?',
        a: 'On the first day. Banking awareness is a large component of every banking mains paper and it is cumulative — it depends on having followed the sector for months. The interval between a prelims result and the main examination is typically a few weeks, which is nowhere near enough to build it. Candidates who prepare only for prelims and start banking awareness after clearing it are making the single most common strategic error in banking preparation.',
      },
      {
        q: 'How much of banking awareness is current versus static?',
        a: 'Both matter, and the stable half is often the larger source of marks. Banking terminology, the functions of the central bank and its instruments, the roles of the various regulators and institutions, and the structure of the banking system are all stable and entirely learnable. Current developments — policy decisions, regulatory changes, mergers and new products — sit on top of that foundation rather than replacing it.',
      },
      {
        q: 'What is the best source for banking current affairs?',
        a: 'A business newspaper read daily, supplemented by a stable-knowledge page you build yourself covering terms, instruments and institutions. The newspaper serves the banking awareness section, the reading comprehension section and the interview simultaneously, which makes it among the most efficient single habits in banking preparation. Monthly compilations are useful for revision and completeness checking but work poorly as a substitute for the daily habit.',
      },
    ],
  },

  '/current-affairs/ssc/': {
    title: 'SSC Current Affairs: What the General Awareness Section Asks',
    description:
      'SSC current affairs — how SSC general awareness weights current versus static knowledge, and what to prioritise.',
    lead: [
      'SSC general awareness is often described as a current affairs section, and that description misleads candidates every cycle. Across SSC papers, static general knowledge — history, geography, polity, science and awards — consistently outweighs current affairs, and it is far more predictable.',
      'That has a direct planning consequence. A candidate spending most of their awareness time on daily news, and little on static knowledge, is optimising the smaller and less reliable half of the section.',
    ],
    sections: [
      {
        id: 'balance',
        eyebrow: 'The balance',
        heading: 'Static and current in SSC papers',
        blocks: [
          {
            type: 'p',
            text: 'Work through several years of SSC general awareness sections and the distribution is clear. Questions on the freedom movement, the Constitution, physical and Indian geography, class-10-level science, classical dances, important days and awards appear consistently, while current affairs occupies a smaller and more variable share. The static material also repeats across cycles in a way current affairs by definition cannot.',
          },
          {
            type: 'list',
            title: 'What SSC general awareness actually covers',
            items: [
              { text: 'Indian history, with emphasis on the freedom movement', note: 'a consistently heavy theme.' },
              { text: 'Indian polity and the Constitution', note: 'articles, schedules, institutions and constitutional bodies.' },
              { text: 'Geography of India and the world', note: 'physical features, rivers, states and resources.' },
              { text: 'General science at approximately class 10 level', note: 'finite, coverable and reliably examined.' },
              { text: 'Static general knowledge', note: 'books and authors, awards, dances, festivals, important days, organisations and their headquarters.' },
              { text: 'Current affairs', note: 'the smaller share, weighted towards schemes, appointments, sports and awards.' },
            ],
          },
        ],
      },
      {
        id: 'plan',
        eyebrow: 'Planning',
        heading: 'How to allocate awareness time for SSC',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Cover class 10 science completely.', note: 'It is finite, reliably examined and among the most predictable marks in the paper.' },
              { text: 'Build static theme sheets from past papers.', note: 'The themes that recur are a short list, and a page each makes them revisable weekly.' },
              { text: 'Give current affairs twenty minutes daily.', note: 'Enough to cover the smaller share, weighted towards schemes, appointments, sports and awards.' },
              { text: 'Revise static weekly, current daily.', note: 'Different material, different rhythms.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'SSC exams', to: '/government-exams/ssc/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'Science notes', to: '/study-material/science/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much of SSC general awareness is current affairs?',
        a: 'A smaller share than the section’s reputation suggests. Across SSC papers, static general knowledge — the freedom movement, the Constitution, geography, class-10 science, dances, awards and important days — consistently outweighs current affairs, and it repeats across cycles in a way current affairs cannot. A candidate spending most of their awareness time on daily news is optimising the smaller and less predictable half of the section.',
      },
      {
        q: 'What is the most reliable part of SSC general awareness?',
        a: 'Class 10 general science, because it is finite. Physics, chemistry and biology at that level is a bounded body of content that can be covered completely rather than sampled, and it appears reliably in every cycle. That combination — coverable and dependably examined — makes it among the most predictable marks available anywhere in the SSC papers.',
      },
      {
        q: 'How should I revise SSC general awareness?',
        a: 'On two rhythms. Static material — history, polity, geography, science, awards, dances — belongs on themed one-page sheets built from past papers and revised weekly, since frequency rather than duration is what builds recall for this kind of content. Current affairs belongs in a daily twenty-minute habit from a single source. Mixing the two into one undifferentiated study block tends to mean neither gets the rhythm it needs.',
      },
    ],
  },

  '/current-affairs/upsc/': {
    title: 'UPSC Current Affairs: Reading Issues Rather Than Events',
    description:
      'UPSC current affairs — why the exam tests the debate around a development rather than the development, and how to read accordingly.',
    lead: [
      'Current affairs for UPSC is a different activity from current affairs for other competitive examinations. Elsewhere the question is what happened; here it is what the development means, what tension it exposes, and what can be argued about it — because mains questions ask you to examine, analyse and discuss rather than to recall.',
      'That difference should change what you read for and what you record. A candidate accumulating facts will be well prepared for prelims and poorly prepared for the papers that decide the result.',
    ],
    sections: [
      {
        id: 'difference',
        eyebrow: 'The difference',
        heading: 'Issues, not events',
        blocks: [
          {
            type: 'p',
            text: 'A new agricultural policy is not one item. It is an economics question about price signals and farmer incomes, a governance question about centre-state jurisdiction, a social question about landholding and livelihoods, and an environmental question about cropping patterns and water use. UPSC asks about the connections, and reading a newspaper for the announcement alone does not produce them.',
          },
          {
            type: 'list',
            title: 'What to extract from a development',
            items: [
              { text: 'The problem it responds to', note: 'and whether that problem is well characterised.' },
              { text: 'The mechanism', note: 'how it is supposed to work, which is what makes criticism possible.' },
              { text: 'The tensions it creates', note: 'between objectives, between levels of government, between groups affected.' },
              { text: 'The connections to static syllabus areas', note: 'polity, economy, geography, society, environment, security.' },
              { text: 'The counter-argument', note: 'because a mains answer that acknowledges one reads far better than one that does not.' },
            ],
          },
        ],
      },
      {
        id: 'method',
        eyebrow: 'Method',
        heading: 'A reading habit built for mains',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Read one newspaper properly rather than several partially.', note: 'Editorials and analysis, where the argument lives.' },
              { text: 'Keep notes by syllabus theme, not by date.', note: 'A page for agriculture, one for federalism, one for internal security. Developments accumulate into arguments.' },
              { text: 'Write about developments, not just record them.', note: 'A two-hundred-word answer on a current issue is worth more than a page of notes about it.' },
              { text: 'Form a view and be able to defend it.', note: 'This serves the mains papers and the personality test equally.' },
              { text: 'Keep a separate factual layer for prelims.', note: 'Schemes, reports, appointments and indices, which prelims does ask about directly.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'UPSC Civil Services guide', to: '/government-exams/upsc/upsc-civil-services/' },
              { label: 'Indian polity notes', to: '/study-material/polity/' },
              { label: 'Economy notes', to: '/study-material/economy/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How is UPSC current affairs different from other exams?',
        a: 'Other examinations ask what happened; UPSC mains asks what it means. A question rarely requests a fact — it asks you to examine, critically analyse or discuss a development, which requires understanding the problem it responds to, the mechanism, the tensions it creates and the reasonable counter-argument. A candidate accumulating facts will be well prepared for prelims and poorly prepared for the papers that actually decide the result.',
      },
      {
        q: 'How should I take notes on current affairs for UPSC?',
        a: 'By syllabus theme rather than by date — a page for agriculture, one for federalism, one for internal security, one for social justice — so that developments accumulate into arguments rather than into a chronological log you will never re-read. Alongside that, keep a separate factual layer for prelims covering schemes, reports, appointments and indices, since prelims does ask about those directly.',
      },
      {
        q: 'Should I write about current affairs during preparation?',
        a: 'Yes, and it is the most under-used practice in UPSC preparation. Writing a two-hundred-word answer on a current issue is worth more than a page of notes about it, because it forces you to organise an argument and reveals whether you actually understand the development or merely recognise it. It also builds the answer-writing skill that mains rewards, which reading alone never develops.',
      },
    ],
  },

  '/current-affairs/railways/': {
    title: 'Railway Current Affairs: What RRB General Awareness Asks',
    description:
      'Railway current affairs — the general awareness weighting in RRB exams, railway-specific themes and how to prepare for them.',
    lead: [
      'General awareness is the largest section in both stages of RRB NTPC and the largest in the RPF paper, which makes it the most consequential section in railway recruitment — and the one most often mis-weighted by candidates arriving from SSC or banking preparation.',
      'It also carries a recognisable railway seam. Transport systems, public sector organisations, government programmes and the railway network itself appear more often than a general competitive-exam guide would suggest.',
    ],
    sections: [
      {
        id: 'weighting',
        eyebrow: 'The weighting',
        heading: 'Why general awareness decides railway papers',
        blocks: [
          {
            type: 'p',
            text: 'In RRB NTPC, general awareness is forty of a hundred questions in the first stage and fifty of a hundred and twenty in the second — together more than either mathematics or reasoning. In RPF it is fifty of a hundred and twenty. That inverts the usual competitive-exam priority, and a candidate allocating study time by habit rather than by weighting will under-prepare the section that carries the most marks.',
          },
          {
            type: 'list',
            title: 'What railway general awareness covers',
            items: [
              { text: 'Indian history, geography and polity', note: 'the standard themes, at the level of a general awareness section.' },
              { text: 'General science at class 10 level', note: 'finite and reliably examined, as in SSC papers.' },
              { text: 'Transport systems and public sector organisations', note: 'a railway-adjacent seam that general guides tend to under-cover.' },
              { text: 'Government programmes and flagship schemes', note: 'consistently asked.' },
              { text: 'Sports, awards, art and culture', note: 'the standard static categories.' },
              { text: 'Current events', note: 'national and international, weighted towards schemes and appointments.' },
            ],
          },
        ],
      },
      {
        id: 'plan',
        eyebrow: 'Planning',
        heading: 'Allocating time to the largest section',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Give general awareness forty minutes a day.', note: 'Matching its share of the paper rather than your habits from other exams.' },
              { text: 'Cover class 10 science completely.', note: 'A bounded body of content that appears reliably.' },
              { text: 'Build themed sheets from past RRB papers.', note: 'The recurring themes, including the transport and public sector seam, become a short revisable list.' },
              { text: 'Revise weekly, test yourself rather than re-reading.', note: 'Recall-based material responds to retrieval, not exposure.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'Railway exams', to: '/government-exams/railways/' },
              { label: 'RRB NTPC guide', to: '/government-exams/railways/rrb-ntpc/' },
              { label: 'General knowledge notes', to: '/study-material/general-knowledge/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How important is general awareness in railway exams?',
        a: 'It is the largest section in RRB NTPC — forty of a hundred questions in CBT 1 and fifty of a hundred and twenty in CBT 2 — and the largest in the RPF paper at fifty of a hundred and twenty. Together that is more than either mathematics or reasoning contributes, which inverts the usual competitive-exam priority and makes it the most consequential section in railway recruitment.',
      },
      {
        q: 'Is there railway-specific content in RRB general awareness?',
        a: 'Yes, a recognisable seam of it. Transport systems in India, public sector organisations, the railway network itself and government programmes appear more often than a general competitive-exam guide would suggest. Past RRB papers are the practical way to identify it, since general study material tends to under-cover exactly this material.',
      },
      {
        q: 'How should I allocate study time for railway exams?',
        a: 'In proportion to the marks, which means giving general awareness the largest share — around forty minutes daily — rather than following the habits formed in SSC or banking preparation where quantitative aptitude dominates. Within that, cover class 10 science completely since it is finite and reliably examined, and build themed sheets from past RRB papers so that the recurring topics, including the transport and public sector seam, become a short revisable list.',
      },
    ],
  },

  '/current-affairs/state-psc/': {
    title: 'State PSC Current Affairs: National Plus State Developments',
    description:
      'State PSC current affairs — balancing national and state-level developments, and building the state layer national sources omit.',
    lead: [
      'State public service commission examinations test current affairs on two levels, and candidates preparing from national sources cover only one of them. National developments appear as they do everywhere; alongside them sits a substantial layer of state-level material that no national newspaper or compilation covers adequately.',
      'That state layer is not optional. It frequently carries a meaningful share of the general studies marks, and it is precisely where a candidate preparing for both UPSC and a state PSC will find their preparation incomplete.',
    ],
    sections: [
      {
        id: 'layers',
        eyebrow: 'Two layers',
        heading: 'National and state current affairs',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'National developments',
                'Schemes, legislation, appointments, reports, economic decisions and international developments involving India — the same material that serves UPSC and central examinations, prepared the same way.',
              ],
              [
                'State developments',
                'The state budget and its allocations, state schemes and their departments, appointments to state bodies, developments in the state legislature, state-level reports and rankings, and significant regional events. Covered by state newspapers and government sources rather than national ones.',
              ],
              [
                'The overlap',
                'National developments with a state dimension — a central scheme’s implementation in your state, a centre-state dispute, a project located there. These are the questions state examinations most enjoy asking.',
              ],
            ],
          },
        ],
      },
      {
        id: 'building',
        eyebrow: 'Building the state layer',
        heading: 'Where to find state current affairs',
        blocks: [
          {
            type: 'steps',
            items: [
              { text: 'Read a state newspaper alongside a national one.', note: 'In the state language if that is the examination’s medium, which also builds reading speed for the paper.' },
              { text: 'Follow the state government’s own announcements.', note: 'Budget documents, scheme launches and departmental notifications are primary sources.' },
              { text: 'Keep a separate themed page for state material.', note: 'State schemes, appointments, budget figures, districts and projects.' },
              { text: 'Note where national and state material intersect.', note: 'Implementation of central schemes in your state is a favourite question type.' },
              { text: 'Use past state papers to calibrate the balance.', note: 'They show how much of the section is state-specific.' },
            ],
          },
          {
            type: 'links',
            title: 'Related pages',
            items: [
              { label: 'State government exams', to: '/government-exams/state/' },
              { label: 'National current affairs', to: '/current-affairs/india/' },
              { label: 'State exam updates', to: '/exam-updates/state/' },
              { label: 'All current affairs', to: '/current-affairs/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'How much state-specific current affairs do state PSC exams ask?',
        a: 'Enough that a preparation built entirely on national sources will be visibly incomplete. State budgets and allocations, state schemes and the departments running them, appointments to state bodies, legislature developments, state-level reports and regional events all appear, and in many state examinations they carry a meaningful share of the general studies marks. Past papers from your own state are the reliable way to calibrate how large that share is.',
      },
      {
        q: 'Where do I find state current affairs?',
        a: 'A state newspaper read alongside a national one — in the state language if that is the examination’s medium, which also builds reading speed for the paper — together with the state government’s own announcements, budget documents and departmental notifications. National compilations do not cover this material, and no substitute for local sources exists.',
      },
      {
        q: 'Can I prepare current affairs for UPSC and a state PSC together?',
        a: 'The national layer, entirely — schemes, legislation, appointments, economic developments and international affairs serve both. What must be added for a state examination is the state layer, kept on its own themed page, plus attention to where the two intersect: the implementation of a central scheme in your state, a centre-state dispute, or a national project located there. Those intersections are a favourite question type in state examinations.',
      },
    ],
  },
}

export default UPDATE_HUBS
