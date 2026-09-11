/**
 * Extra sections for hub pages that were shorter than the rest of the family.
 *
 * The state-resource hubs and the two entrance-stream hubs were each written
 * with a single pair of sections, which left them noticeably lighter than the
 * category hubs beside them — a visitor arriving on the state mock-test page
 * got less than one arriving on the SSC page, for no reason other than the
 * order the file was written in.
 *
 * Rather than reopen several hundred lines of hubs.js, the additional
 * sections live here and are merged onto the matching hub by hubs.js. A
 * `sections` entry is appended after whatever the hub already carries; a
 * `faqs` entry is used only where the hub has none of its own, so nothing
 * written in hubs.js is ever overwritten.
 *
 * Same editorial rules as the rest of the exam content: no cutoff, no vacancy
 * count, no fee, no date, and nothing stated about a specific cycle that the
 * notification for that cycle would be the authority on.
 */

const HUB_DEPTH = {
  '/government-exams/state/syllabus/': {
    sections: [
      {
        id: 'state-layer',
        eyebrow: 'The differentiator',
        heading: 'The state layer is where the syllabus stops being generic',
        intro:
          'Every state commission examines a body of national material that a candidate could prepare from any competitive source. What separates candidates is the layer beneath it, and that layer is almost never covered adequately by a national book.',
        blocks: [
          {
            type: 'list',
            title: 'What a state layer usually contains',
            items: [
              {
                text: 'The state’s own history',
                note: 'its dynasties, its colonial or princely administration, its social reform movements, and — for states formed by reorganisation — the movement that created it. Examined in detail no national history text reaches.',
              },
              {
                text: 'Geography at district level',
                note: 'rivers and basins, irrigation projects, soils, rainfall, minerals, forests and the administrative divisions themselves, which have been reorganised in several states.',
              },
              {
                text: 'The state economy',
                note: 'agriculture, industry, power, revenue and the state’s own development programmes, with figures drawn from its statistical and economic publications rather than from national aggregates.',
              },
              {
                text: 'State administration and governance',
                note: 'the secretariat and district structure, panchayat and municipal arrangements, and the state acts a post operates under.',
              },
              {
                text: 'Culture, language and society',
                note: 'festivals, crafts, folk forms, literature and the social questions the state’s own policy addresses.',
              },
            ],
          },
          {
            type: 'note',
            title: 'Assemble it rather than buy it',
            text: 'The most reliable sources for a state layer are the commission’s own past papers, the state’s statistical abstract and economic publications, state board textbooks, and department pages for scheme detail. A compilation assembled by a publisher is a summary of these, and it loses exactly the specificity the papers ask for.',
          },
        ],
      },
    ],
  },

  '/government-exams/state/exam-pattern/': {
    sections: [
      {
        id: 'pattern-changes',
        eyebrow: 'Between cycles',
        heading: 'Patterns change, and preparing to an old one is a self-inflicted loss',
        intro:
          'State commissions revise paper structures more often than candidates expect — merging papers, changing the number of stages, altering negative marking, adding or removing a qualifying paper. A preparation built on a previous cycle can be thorough and still be aimed at the wrong examination.',
        blocks: [
          {
            type: 'steps',
            title: 'What to do on the day a notification appears',
            items: [
              {
                title: 'Read the pattern clause and the syllabus end to end, once, slowly.',
                text: 'Before reading any commentary about them. Second-hand summaries of a new notification are frequently wrong in the first week.',
              },
              {
                title: 'Put the new structure beside the previous one, line by line.',
                text: 'Paper count, marks, duration, negative marking, qualifying papers, stage design. The differences are the whole of your new work.',
              },
              {
                title: 'Recompute your pace.',
                text: 'Questions divided by minutes gives seconds per question. If that number has changed, every practice session from now on has to change with it.',
              },
              {
                title: 'Check the eligibility clauses against your own documents.',
                text: 'Qualification, age reckoning date, local or zonal status and any post-specific requirement. These are settled at verification and cannot be argued there.',
              },
              {
                title: 'Note the later stages and start anything slow immediately.',
                text: 'Typing, physical standards, medical requirements and descriptive writing all take months and none can be arranged after a written result.',
              },
            ],
          },
          {
            type: 'note',
            title: 'A corrigendum overrides the notification',
            text: 'Commissions frequently issue corrigenda that change dates, eligibility or paper structure after the original notification. Check the notices page of the commission’s own site before every major planning decision, and take the most recent official document rather than the one you downloaded first.',
          },
        ],
      },
    ],
  },

  '/government-exams/state/previous-year-papers/': {
    sections: [
      {
        id: 'renamed-commissions',
        eyebrow: 'Finding the archive',
        heading: 'Where state papers are, and why the older ones are still current',
        intro:
          'State commissions differ widely in what they publish and where they keep it. The single most common reason a candidate concludes that no archive exists is that they searched under only one of the commission’s names.',
        blocks: [
          {
            type: 'list',
            items: [
              {
                text: 'Search under the former name as well as the current one',
                note: 'several state commissions have been renamed as states were reorganised or restyled. The papers issued under the earlier name are the same examination, set to the same syllabus by the same body, and discarding them removes most of the available evidence.',
              },
              {
                text: 'Look in the notices archive, not only the previous-papers page',
                note: 'answer keys and question papers are often published as dated notices rather than filed under a permanent heading.',
              },
              {
                text: 'Download during the objection window',
                note: 'where a commission publishes a provisional key and a response sheet for challenge, those files frequently disappear once the window closes.',
              },
              {
                text: 'Keep the corrigendum with the key',
                note: 'a provisional answer is not always the final accepted one, and a topic conclusion drawn from a revised answer will be wrong.',
              },
              {
                text: 'Use adjacent papers from the same commission',
                note: 'where one recruitment has a thin archive, the commission’s other papers at a similar level are the closest available practice, because the phrasing habits and the state layer are shared.',
              },
            ],
          },
          {
            type: 'note',
            title: 'Reconstructed papers are practice, not evidence',
            text: 'Where a commission does not release papers, sets reconstructed from candidate memory circulate. They are useful for topic spotting and for volume, and they are unreliable for wording, difficulty and marking. Never conclude that a pattern has changed on the strength of one.',
          },
        ],
      },
    ],
  },

  '/government-exams/state/mock-tests/': {
    sections: [
      {
        id: 'two-track-testing',
        eyebrow: 'A routine that fits',
        heading: 'Test the shared spine and the state layer separately',
        intro:
          'A general state-exam mock spreads the state-specific questions thinly across a full paper, which hides how you are performing on exactly the material that differentiates candidates. Splitting the testing routine in two fixes that in an hour a fortnight.',
        blocks: [
          {
            type: 'table',
            head: ['Test', 'How often', 'What it is for'],
            rows: [
              [
                'Full general paper',
                'Weekly, once the syllabus is broadly covered.',
                'Pacing, stamina, section balance and the shared national spine that every commission examines.',
              ],
              [
                'State-content test',
                'Fortnightly, from the first month.',
                'Your own state’s history, geography, economy, schemes and administration. Finite material, and the fastest score on this list to move.',
              ],
              [
                'Reasoning and data drill',
                'Twice a week, fifteen to twenty minutes.',
                'A mechanical skill that decays quickly without use and appears in almost every state paper.',
              ],
              [
                'Full-length rehearsal at notified timing',
                'Once a notification fixes the structure.',
                'Rehearsing the actual paper count, marks and clock, which differ between commissions and between posts.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Sit tests at the hour the paper is held',
            text: 'Attention, reading speed and arithmetic accuracy are all worse at hours you have never practised in. A candidate who has only taken mocks late at night has no measurement of how they perform in a morning paper, which is when most examinations are conducted.',
          },
        ],
      },
    ],
  },

  '/government-exams/state/preparation/': {
    sections: [
      {
        id: 'multiple-recruitments',
        eyebrow: 'Efficiency',
        heading: 'Prepare once, sit several recruitments',
        intro:
          'State commissions run group services, subordinate services, police, teaching and technical recruitments off overlapping syllabus material, and they do not notify them on a predictable calendar. A candidate organised by subject can respond to whichever opens; a candidate organised by notification spends the first month of every window rebuilding notes they already had.',
        blocks: [
          {
            type: 'list',
            title: 'How to organise so the work transfers',
            items: [
              {
                text: 'Keep notes by subject, never by recruitment',
                note: 'a polity file serves every group and every post. A file named after one recruitment has to be rebuilt the moment a different one is notified.',
              },
              {
                text: 'Keep the state layer in one place',
                note: 'history, geography, economy, schemes and administration together, because every paper the commission sets draws on it.',
              },
              {
                text: 'Mark depth in the margin rather than duplicating',
                note: 'where one recruitment examines a topic more deeply than another, note it beside the topic instead of keeping two versions.',
              },
              {
                text: 'Maintain the drillable skills continuously',
                note: 'reasoning, arithmetic and comprehension decay without use and recover quickly. Short frequent sessions keep them available for any notification.',
              },
              {
                text: 'Check eligibility separately every time',
                note: 'shared preparation is not shared eligibility. Age reckoning, qualification, local status and post-specific conditions are set per notification and do differ.',
              },
            ],
          },
          {
            type: 'note',
            title: 'The last fortnight belongs to revision',
            text: 'Material met for the first time in the final two weeks before a paper rarely survives to the examination, and opening a new source then displaces revision of everything already half-learned. Stop adding sources two weeks out and spend the time on your own notes and on full papers.',
          },
        ],
      },
    ],
  },

  '/government-exams/state/study-material/': {
    sections: [
      {
        id: 'state-sources',
        eyebrow: 'Primary sources',
        heading: 'The state material that is worth more than any guide',
        intro:
          'For the national half of a state syllabus, one standard source per subject is enough and the choice barely matters. For the state half there is often no adequate single book, and the candidates who do best are the ones who go to the documents themselves.',
        blocks: [
          {
            type: 'defs',
            items: [
              [
                'State board textbooks',
                'Usually the most efficient source available for a state’s history, geography and culture: written close to the level the papers examine, internally consistent, and the origin of most of the state content in commercial compilations. Check the edition against current administrative divisions, which have been reorganised in several states.',
              ],
              [
                'The statistical abstract and economic publications',
                'Published by the state, and the place district-level figures on agriculture, irrigation, power and demography actually come from. These are what make an answer specific rather than general.',
              ],
              [
                'Department pages and scheme guidelines',
                'For how a state programme is actually structured — who is eligible, what is provided, who delivers it and how it is funded. A guideline states this exactly; a summary paraphrases it and loses the detail the question asks for.',
              ],
              [
                'The commission’s own archive',
                'Past papers, syllabus documents and notifications. The only source that shows what has actually been asked rather than what could be.',
              ],
            ],
          },
          {
            type: 'note',
            title: 'Check any figure against a current official source',
            text: 'Scheme entitlements, wage rates, unit costs, coverage numbers and rankings are revised by order and are the fastest-ageing facts in a state syllabus. Learn the structure of a programme from its guidelines, and treat any specific number in a book or an old paper as a prompt to check the source rather than as a fact to memorise.',
          },
        ],
      },
    ],
  },

  '/entrance-exams/pg-research/': {
    sections: [
      {
        id: 'how-to-prepare',
        eyebrow: 'Method',
        heading: 'How a discipline paper is prepared, and why it differs from an aptitude test',
        intro:
          'GATE and IIT JAM examine a subject you have already studied for a degree. That makes them unusual among entrance tests: the work is not learning new material but rebuilding a large body of half-remembered material into something retrievable under a clock.',
        blocks: [
          {
            type: 'steps',
            title: 'The sequence that fits a discipline paper',
            items: [
              {
                title: 'Build a chapter-weight table from past papers before opening a textbook.',
                text: 'Tag every past question to a specific chapter, count the tags, and rank them. The ranking will not match the order your degree taught the subjects in, and the degree order is not the one to follow.',
              },
              {
                title: 'Rebuild each high-weight chapter onto a single page.',
                text: 'Definitions, standard results, the formulas that actually appear, and the two or three question forms the papers set. One page per chapter is the deliverable, and it is written by hand.',
              },
              {
                title: 'Write the formula sheet from memory on a schedule.',
                text: 'Recall practice rather than review. Under an objective clock there is no time to derive, so the working set has to be immediate.',
              },
              {
                title: 'Move to solving early and stay there.',
                text: 'These papers reward fluency on standard problems. Reading a chapter a second time is almost always a worse use of an hour than solving thirty questions from it.',
              },
              {
                title: 'Add the general aptitude component deliberately.',
                text: 'Where the paper carries one, it is a small, reliable and highly drillable block of marks that discipline-focused candidates routinely concede.',
              },
            ],
          },
          {
            type: 'note',
            title: 'Choose the paper code before anything else',
            text: 'Both examinations are set as several separate papers, and eligibility, syllabus and the programmes a score can be used for all follow from which paper you sit. That decision governs every subsequent month of preparation, and it is settled by the current official brochure for the examination and by the admission pages of the programmes you would actually join.',
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Can one preparation cover both GATE and IIT JAM?',
        a: 'Partly, and only where the disciplines genuinely overlap — a physics or mathematics candidate will find substantial common ground, while an engineering candidate preparing a core branch paper will find much less. The sensible approach is to build the subject material once from the chapter-weight tables of both papers, then treat the differences in syllabus scope and paper structure as separate, smaller pieces of work rather than as two full preparations.',
      },
      {
        q: 'How far back should I go in the past-paper archive?',
        a: 'Far enough to see a stable pattern, which is usually several consecutive cycles, and stopping at any point where the syllabus or paper structure was revised. Questions from before a revision remain useful for identifying which chapters carry weight, because content weighting tends to survive a restructuring even when the format does not — but they are misleading about timing and marking, so do not sit them as rehearsals.',
      },
      {
        q: 'Is a score from these examinations useful beyond admission?',
        a: 'It can be, and the position differs by examination, by cycle and by the organisation concerned — some recruiters and institutions consider these scores for their own purposes, with their own validity rules. Because that policy is set by each organisation rather than by the examination, the authority is the organisation’s own current announcement rather than any general claim, including this one.',
      },
    ],
  },

  '/entrance-exams/international/': {
    sections: [
      {
        id: 'before-booking',
        eyebrow: 'Before you book',
        heading: 'What to settle before paying a test fee',
        intro:
          'These examinations are booked individually, cost real money and have their own scheduling and score-reporting rules. Most of the avoidable waste in international test preparation happens before any studying starts, in decisions that take an evening to check.',
        blocks: [
          {
            type: 'list',
            items: [
              {
                text: 'Which test the programme actually accepts',
                note: 'this is set by the institution and the programme, not by the test provider, and it is not safe to generalise from one department to another within the same university. Read the admissions page for each programme on your list.',
              },
              {
                text: 'The score validity period',
                note: 'results expire, and a score taken too early can be outside the accepted window by the time you apply. Work backwards from the application deadline rather than forwards from today.',
              },
              {
                text: 'Whether section minimums apply',
                note: 'several programmes set a minimum on individual sections in addition to an overall requirement, which changes preparation priorities entirely for a candidate who is strong overall and weak in one skill.',
              },
              {
                text: 'The delivery mode the programme accepts',
                note: 'tests are offered in more than one mode, and acceptance of each is an institutional decision that has changed over time.',
              },
              {
                text: 'How and when scores are sent',
                note: 'reporting to institutions has its own process and timing, and a valid score that arrives after a deadline is not useful.',
              },
            ],
          },
          {
            type: 'note',
            title: 'The official test site is the only authority on its own rules',
            text: 'Format, section structure, timing, permitted retakes, score reporting and fees are set by the organisation that runs each test and are revised from time to time. Any description of them elsewhere, including here, can be out of date. Check the test’s own current information before booking and again before preparing to a structure.',
          },
        ],
      },
      {
        id: 'preparation-shape',
        eyebrow: 'Preparation',
        heading: 'Aptitude tests and proficiency tests need different work',
        intro:
          'The tests on this page divide into two kinds, and treating them alike is the most common preparation error. One kind measures reasoning under time; the other measures language ability against a described standard.',
        blocks: [
          {
            type: 'table',
            head: ['', 'Aptitude tests', 'Proficiency tests'],
            rows: [
              [
                'What is measured',
                'Reasoning, quantitative ability and reading under strict time.',
                'Listening, reading, writing and speaking against a defined descriptor.',
              ],
              [
                'What improves a score',
                'Volume of timed practice, and learning which questions to leave.',
                'Building the underlying skill, plus familiarity with the task types and the marking criteria.',
              ],
              [
                'How long it takes',
                'Months, with progress that plateaus and then moves.',
                'Depends on your starting level far more than on the number of hours.',
              ],
              [
                'Where candidates lose marks',
                'Time allocation and unfinished sections rather than knowledge.',
                'Productive skills — writing and speaking — which are practised least and marked hardest.',
              ],
              [
                'Most useful practice',
                'Full timed sections, reviewed by cause of error.',
                'Producing work under the real task conditions and having it assessed against the published criteria.',
              ],
            ],
          },
          {
            type: 'links',
            title: 'The individual guides',
            items: [
              { label: 'GRE exam guide', to: '/entrance-exams/international/gre/' },
              { label: 'GMAT exam guide', to: '/entrance-exams/mba/gmat/' },
              { label: 'IELTS exam guide', to: '/entrance-exams/international/ielts/' },
              { label: 'TOEFL exam guide', to: '/entrance-exams/international/toefl/' },
              { label: 'SAT exam guide', to: '/entrance-exams/international/sat/' },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: 'Should I take IELTS or TOEFL?',
        a: 'Start from what your target programmes accept rather than from which test suits you, because acceptance is an institutional decision and some programmes name only one. Where both are accepted, the practical differences are in task types and delivery — one is more conversational in its speaking assessment, the other more standardised — so try an official practice section of each and choose the one whose format you handle more comfortably. Neither is generally regarded as easier.',
      },
      {
        q: 'Should I take the GRE or the GMAT?',
        a: 'Again, the programme decides. Many business schools accept both and many graduate departments outside business accept only the GRE, so the answer usually falls out of your programme list rather than from a comparison of the tests. Where you genuinely have a choice, the deciding factor is which paper’s reasoning style you perform better on, which an official practice test answers in an afternoon.',
      },
      {
        q: 'How long should I prepare before booking a date?',
        a: 'Long enough to have sat at least one full official practice test under real conditions, because that result is the only honest input to the decision. Booking first and preparing afterwards is common and it wastes fees when a candidate is further from their target than they assumed. Work backwards from your earliest application deadline, allow room for a retake if the rules permit one, and book once a practice score is within reach of the requirement.',
      },
    ],
  },
}

export default HUB_DEPTH
