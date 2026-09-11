import { Link, useLocation } from 'react-router-dom'
import Logo from '../components/Logo'
import { ContentSection } from '../components/Blocks'
import Doc from '../components/Doc'
import { PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { FACULTY, FEATURES } from '../data/site'
import LEGAL from '../data/legal'
import Icon from '../components/Icon'
import { FacultySection, FinalCta } from './home/sections'

export function About() {
  useSeo({
    title: 'About Brolly Exam Prep',
    description:
      'Brolly Exam Prep is an online preparation platform for Indian competitive exams, offering free study material, previous-year papers and mock tests.',
    canonical: canonicalFor('/about/'),
  })
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="About Brolly Exam Prep"
        lead="A Pan-India competitive exam preparation platform with diagnostic tests, previous-paper methods, study material and official-source guides for SSC, Banking, Railways, UPSC, Defence, Teaching, State PSC and Police examinations."
        trail={[{ label: 'About' }]}
      />

      <section className="s">
        <div className="wrap wrap--narrow prose">
          <Logo size={44} />
          <h2 className="h" style={{ marginTop: 24 }}>
            Preparation that answers to the exam, not to a content calendar
          </h2>
          <p>
            Most study platforms are libraries: a large pile of material, loosely tagged, that
            leaves the aspirant to work out what matters. Brolly is built the other way round.
            Every resource here is attached to a specific exam, a specific section of that exam's
            syllabus, and a specific stage of preparation.
          </p>
          <p>
            That structure makes an attempt useful beyond its total score. The available diagnostics
            show section performance, attempted and skipped questions, and explanations; use those
            signals to choose the next subject lesson and practice step.
          </p>
          <p>
            Brolly Exam Prep is part of{' '}
            <a href="https://brollyacademy.com/" rel="noopener" target="_blank">
              Brolly Academy
            </a>
            , Hyderabad.
          </p>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead eyebrow="What you get" title="How we are different" />
          <div className="feats">
            {FEATURES.map((f) => (
              <div className="ft" key={f.title}>
                <span className="ft__i">
                  <Icon name={f.icon} size={20} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Doc>
        <ContentSection
          id="how-the-site-is-organised"
          eyebrow="How to use it"
          heading="How this site is organised"
          intro="Four layers, and they are meant to be used in order rather than browsed at random. Knowing which layer answers which question saves a great deal of time."
          blocks={[
            {
              type: 'defs',
              items: [
                [
                  'Exam guides',
                  'One guide per examination, with six resource pages beneath it — syllabus, exam pattern, previous papers, mock tests, preparation and study material. This is where the exam-specific detail lives: what the stages are, which of them decide the merit, and what the paper actually asks.',
                ],
                [
                  'Subject lessons',
                  'The study library, organised by subject and topic rather than by exam, because a percentage question is the same question whichever paper sets it. Each lesson carries concepts, worked examples and practice questions, and is written to be worked through rather than skimmed.',
                ],
                [
                  'Diagnostic tests',
                  'Timed tests with the question count and duration stated before you start, followed by a score, section performance and explanations. They are measurement instruments, and the page says exactly how long each one is rather than implying it is a full paper.',
                ],
                [
                  'Method and policy pages',
                  'How to read previous papers, how to track official notifications, how we source and correct what we publish. These are the pages that explain the reasoning behind the rest.',
                ],
              ],
            },
            {
              type: 'p',
              text: 'The intended route through them is: read the exam guide to find out what the examination requires, take a diagnostic test to find out where you stand against it, then use the subject lessons to close the specific gap the test exposed. Studying without the measurement in the middle is how candidates spend months on the section they already answer well.',
            },
          ]}
        />

        <ContentSection
          id="what-we-publish"
          eyebrow="Editorial standards"
          heading="What we will and will not publish"
          background
          intro="Exam content is a place where being wrong costs a reader real time, so a few rules are applied to everything on the site."
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'No volatile figures presented as facts',
                  note: 'vacancy counts, cutoffs, fees, dates and age relaxations are set per cycle by the notification. Printing one here would make it wrong within months, so the pages tell you to read the notification instead.',
                },
                {
                  text: 'No invented people',
                  note: 'named authors, reviewers, faculty profiles and testimonials appear only when the identity and the record behind them have been verified and supplied for publication.',
                },
                {
                  text: 'No claims the product does not support',
                  note: 'every test states its real question count and duration, and every call to action leads to something that exists. Where a test is shorter than a full paper, the page says so.',
                },
                {
                  text: 'No manufactured freshness',
                  note: 'a modified date changes when the content substantively changes, not on a schedule designed to look active.',
                },
                {
                  text: 'Primary sources for anything that can change',
                  note: 'the conducting body’s own notification, corrigendum, syllabus or key is authoritative, and this site is not.',
                },
              ],
            },
            {
              type: 'links',
              title: 'The policies in full',
              items: [
                { label: 'Editorial and sourcing policy', to: '/editorial-policy/' },
                { label: 'Corrections policy', to: '/corrections-policy/' },
                { label: 'Student outcomes policy', to: '/success-stories/' },
                { label: 'Disclaimer', to: '/disclaimer/' },
              ],
            },
          ]}
        />

        <ContentSection
          id="who-it-is-for"
          eyebrow="Fit"
          heading="Who this site suits, and who it does not"
          blocks={[
            {
              type: 'table',
              head: ['If you are', 'What to use', 'What you will not find here'],
              rows: [
                [
                  'Starting a first government-exam attempt',
                  'The exam guide for the examination you are considering, then a diagnostic test to see where you stand.',
                  'A promise about how long preparation takes, or a prediction of your result.',
                ],
                [
                  'Preparing while working or studying',
                  'The subject lessons, which are self-contained, and the preparation pages, which are written around limited hours.',
                  'A live class timetable — the site is written material and tests rather than scheduled teaching.',
                ],
                [
                  'Weak in one section rather than all of them',
                  'The topic lessons for that section, and sectional practice to check whether the fix held.',
                  'A single course that assumes you need to start again from the beginning.',
                ],
                [
                  'Preparing for a Telangana state recruitment',
                  'The state hub and the TGPSC exam guides, which cover the state layer national material omits.',
                  'Coverage of every state at the same depth. Telangana is the deepest; others are being built out.',
                ],
                [
                  'Looking for the current notification or result',
                  'The official links on the exam guides, which point at the conducting body.',
                  'A faster or more authoritative announcement than the conducting body’s own.',
                ],
              ],
            },
          ]}
        />

        <FacultySection />
      </Doc>
      <FinalCta />
    </>
  )
}

export function Contact() {
  useSeo({
    title: 'Contact Us | Brolly Exam Prep',
    description:
      'Contact the Brolly Exam Prep team for help with courses, mock tests, study material or technical support.',
    canonical: canonicalFor('/contact/'),
  })
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        lead="Questions about an exam, a test series or your account — or something that looks wrong on a page. We read everything."
        trail={[{ label: 'Contact' }]}
      />

      <section className="s">
        <div className="wrap auth__grid">
          <div className="prose">
            <h2 className="h">Reach us directly</h2>
            <p>
              <strong>Email</strong>
              <br />
              <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a>
            </p>
            <p>
              <strong>Address</strong>
              <br />
              Hyderabad, Telangana, India
            </p>
            <p>
              For content corrections, quote the page URL — it is the fastest way for the editorial
              team to find and verify the item.
            </p>
          </div>

          <div className="auth__card">
            <h2>Email the team</h2>
            <p>
              Include the page URL, your exam, and a clear description of the question or problem.
              For technical issues, add your device and browser. Do not send passwords, payment
              details, government identification numbers, or other sensitive information.
            </p>
            <a
              className="btn btn--y"
              href="mailto:support@brollyexamprep.com?subject=Brolly%20Exam%20Prep%20support"
              style={{ width: '100%' }}
            >
              Email support@brollyexamprep.com
            </a>
            <p className="auth__note">
              This opens your email application; the website does not silently store a message.
            </p>
          </div>
        </div>
      </section>

      <Doc>
        <ContentSection
          id="what-to-contact-about"
          eyebrow="What we can help with"
          heading="What to write to us about"
          background
          blocks={[
            {
              type: 'defs',
              items: [
                [
                  'A mistake on a page',
                  'The most useful message you can send us. Quote the page URL and describe what is wrong — a solution you believe is incorrect, a pattern detail that has changed, or a broken link. Content corrections go to the editorial team for verification.',
                ],
                [
                  'Something not working',
                  'A test that will not load, a score that looks wrong, a page that fails on your device. Tell us what you were doing, what you expected and what happened, and include your device and browser if you can.',
                ],
                [
                  'Your account',
                  'Sign-in problems, changing your details, or deleting your account and the information associated with it. Write from the email address on the account so we can identify it without asking for anything sensitive.',
                ],
                [
                  'Courses and test series',
                  'Questions about what a paid product includes, access problems after a purchase, or a refund request. Include the order reference from your payment confirmation.',
                ],
                [
                  'Writing for us',
                  'If you teach a subject or set questions, see the careers page — a sample of your work tells us more than a description of your experience.',
                ],
              ],
            },
          ]}
        />

        <ContentSection
          id="what-we-cannot-do"
          eyebrow="Being straight about it"
          heading="What we cannot help with"
          blocks={[
            {
              type: 'list',
              items: [
                { text: 'Confirming an examination date or a result', note: 'we compile these from official notifications and there is a lag. The conducting body’s own announcement is authoritative and we are not.' },
                { text: 'Application problems on a conducting body’s portal', note: 'we have no access to those systems. The helpdesk listed in the notification is the route.' },
                { text: 'Predicting a cutoff', note: 'a cutoff is the score of the last candidate selected and depends on that cycle’s vacancies, applicants and paper difficulty. Nobody knows it in advance, including us.' },
                { text: 'Telling you whether you will clear', note: 'a mock score indicates where you stand under practice conditions. It is not a forecast, and we would rather say so than guess.' },
              ],
            },
            {
              type: 'note',
              title: 'Where we are',
              text: 'Brolly Exam Prep is part of Brolly Academy, Hyderabad, Telangana, India. Email reaches us reliably; we read everything, and we reply to anything that needs a reply.',
            },
          ]}
        />

        <ContentSection
          id="write-a-useful-message"
          eyebrow="Getting a faster answer"
          heading="What to put in the message"
          background
          intro="Most of the time between a message arriving and something happening is spent working out which page, which exam and which cycle it is about. Four lines at the top of your email removes almost all of it."
          blocks={[
            {
              type: 'table',
              head: ['Line', 'What to write', 'Why it helps'],
              rows: [
                [
                  'The URL',
                  'The full address of the page, copied from the address bar.',
                  'The same statement often appears on several pages. The URL tells us which one you read so the right one gets checked.',
                ],
                [
                  'The quotation',
                  'The sentence you are writing about, copied exactly.',
                  'A paraphrase can match two different statements. An exact quotation cannot.',
                ],
                [
                  'The exam and the cycle',
                  'Which examination, and which recruitment cycle you are preparing for.',
                  'Patterns and eligibility change between cycles, so a statement can be right for one and wrong for another.',
                ],
                [
                  'The source, if you have one',
                  'A link to the notification, corrigendum or official page.',
                  'It usually settles the question immediately rather than after a search.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'Do not send sensitive information',
              text: 'Never include passwords, one-time passcodes, payment card details, bank details or government identification numbers in an email to us. We will never ask for them. For an account problem, writing from the email address on the account is enough for us to identify it.',
            },
          ]}
        />

        <ContentSection
          id="response-expectations"
          eyebrow="What happens next"
          heading="What to expect after you write"
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'Content corrections go to the editorial team',
                  note: 'they are checked against the conducting body’s own source before anything is changed, and the same claim is checked on every page that carries it.',
                },
                {
                  text: 'A report can be right and still take time',
                  note: 'where a claim turns out to be wrong in several places, fixing it properly takes longer than fixing the page you found it on. That is deliberate.',
                },
                {
                  text: 'Not everything gets a reply, but everything gets read',
                  note: 'anything that needs an answer receives one. A report that is simply correct may show up as a changed page rather than as an email.',
                },
                {
                  text: 'Urgent items are prioritised',
                  note: 'anything affecting eligibility, an application deadline, a fee, an exam date or a marking rule is treated ahead of everything else.',
                },
              ],
            },
            {
              type: 'links',
              title: 'Before you write, these may answer it',
              items: [
                { label: 'Corrections policy', to: '/corrections-policy/' },
                { label: 'Editorial and sourcing policy', to: '/editorial-policy/' },
                { label: 'Refund policy', to: '/refund-policy/' },
                { label: 'Privacy policy', to: '/privacy-policy/' },
              ],
            },
          ]}
          background
        />
      </Doc>
    </>
  )
}

export function SuccessStories() {
  useSeo({
    title: 'Student Outcomes Policy | Brolly Exam Prep',
    description:
      'How Brolly Exam Prep verifies student testimonials and reports exam outcomes without invented or unsupported claims.',
    canonical: canonicalFor('/success-stories/'),
    robots: 'noindex, follow',
  })
  return (
    <>
      <PageHero
        eyebrow="Evidence policy"
        title="Student Outcomes and Testimonials"
        lead="No student selection is published until the candidate, result and permission to publish have been verified."
        trail={[{ label: 'Success Stories' }]}
      />
      <section className="s s--bg">
        <div className="wrap wrap--narrow prose">
          <p>
            <strong>Current status.</strong> There are no verified student testimonials published on
            this website. This page is excluded from search results until evidence-backed records
            are available; it remains public so visitors can see the publication standard.
          </p>
        </div>
      </section>

      <Doc>
        <ContentSection
          id="what-selected-candidates-do"
          eyebrow="What actually works"
          heading="What candidates who clear tend to have in common"
          intro="Drawn from how competitive examinations are structured rather than from anecdote — these are the patterns that hold across exam families."
          blocks={[
            {
              type: 'list',
              items: [
                { text: 'They measured before they planned', note: 'a full mock taken before studying anything, so the plan was built on where they actually stood rather than on where they assumed they did.' },
                { text: 'They started the slow things first', note: 'vocabulary, general awareness, calculation speed and — for uniformed recruitment — physical fitness. All accumulate over months and none can be recovered late.' },
                { text: 'They prepared for the stage that decides the result', note: 'not the stage that comes first. In banking and UPSC, prelims marks are discarded; in SSC CGL, only Tier 2 builds the merit list.' },
                { text: 'They studied the weakest section', note: 'rather than the one they enjoyed, which is the natural instinct and close to worthless where sectional cutoffs apply.' },
                { text: 'They analysed mocks longer than they took them', note: 'and classified errors by cause — did not know, misread, wrong method, calculation slip, ran out of time — because those five have five different fixes.' },
                { text: 'They read the notification', note: 'end to end, every cycle. Patterns, age bands and negative marking change, and preparing to an old structure is a self-inflicted loss.' },
              ],
            },
            {
              type: 'note',
              title: 'And the thing that is not a pattern',
              text: 'There is no correlation worth reporting between hours logged and outcomes. Candidates who study twelve hours a day badly are outperformed routinely by candidates who study five hours a day with honest measurement and correction. What varies is not effort but whether the effort was pointed at the right thing.',
            },
          ]}
        />

        <ContentSection
          id="verification-standard"
          eyebrow="The standard"
          heading="What has to exist before a selection is published here"
          background
          intro="A testimonial is a claim about a real person and a real result. These are the records required before one appears on this site, and they are the reason none currently does."
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'The candidate, identified',
                  note: 'a real person who exists, is contactable, and has given written permission for their name and result to be published on this site.',
                },
                {
                  text: 'The result, evidenced',
                  note: 'the published result or appointment record from the conducting body, matched to that candidate. A screenshot of a message is not a result.',
                },
                {
                  text: 'The relationship, described accurately',
                  note: 'what the candidate actually used and for how long. “Used the free mock tests for two months” and “completed a full programme” are different claims and must not be blurred.',
                },
                {
                  text: 'The quotation, in their own words',
                  note: 'written or approved by the candidate rather than drafted for them and signed off.',
                },
                {
                  text: 'A dated record of all of the above',
                  note: 'kept so the claim can be checked later, including by us.',
                },
              ],
            },
            {
              type: 'note',
              title: 'Why this page is excluded from search results',
              text: 'A page about student outcomes that contains no verified outcomes has nothing a searcher is looking for, so it carries a noindex tag until it does. It stays publicly reachable because the publication standard itself is worth being able to read — and because a site that describes its standard and then quietly ignores it should be easy to catch.',
            },
          ]}
        />

        <ContentSection
          id="reading-any-claim"
          eyebrow="Elsewhere too"
          heading="How to read a selection claim on any preparation site"
          intro="This applies to every platform, including this one. Selection claims are the least regulated content in the sector and the easiest to manufacture."
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'Ask what the candidate actually used',
                  note: 'a selected candidate who watched one free video is counted by some platforms as a selection. The claim can be literally true and mean nothing.',
                },
                {
                  text: 'Check whether the person is identifiable',
                  note: 'a first name, a stock photograph and a roll number that cannot be checked is not evidence.',
                },
                {
                  text: 'Look for the denominator',
                  note: 'a number of selections without the number of candidates is not a rate. Both are needed before it says anything about your chances.',
                },
                {
                  text: 'Treat aggregate counts with particular care',
                  note: 'large selection totals are frequently assembled across many examinations, many years and very loose definitions of association.',
                },
                {
                  text: 'Remember what a selection cannot tell you',
                  note: 'even a completely genuine testimonial describes one person’s cycle, field and starting point. It is not a forecast of yours.',
                },
              ],
            },
            {
              type: 'links',
              title: 'The policies behind this page',
              items: [
                { label: 'Editorial and sourcing policy', to: '/editorial-policy/' },
                { label: 'Corrections policy', to: '/corrections-policy/' },
                { label: 'Disclaimer', to: '/disclaimer/' },
              ],
            },
          ]}
          background
        />

      </Doc>
      <FinalCta />
    </>
  )
}

export function Faculty() {
  useSeo({
    title: 'Editorial Team and Review Process | Brolly Exam Prep',
    description:
      'How Brolly Exam Prep organises subject coverage and the verification required before an individual author or reviewer profile is published.',
    canonical: canonicalFor('/faculty/'),
  })
  return (
    <>
      <PageHero
        eyebrow="Who and how"
        title="Editorial Team and Review Process"
        lead="The site currently identifies its publishing team at organisation level. Named author and reviewer profiles will appear only when identity and qualifications are verified."
        trail={[{ label: 'Faculty' }]}
      />
      <FacultySection />

      <Doc>
        <ContentSection
          id="why-subjects"
          eyebrow="How this page works"
          heading="Why we list subjects rather than names"
          background
          blocks={[
            {
              type: 'p',
              text: `Faculty here are listed by subject rather than by invented personalities. Individual educator records — name, photograph, qualification and years of experience — are published as they are verified, so the ${FACULTY.length} subject groups above will expand into named profiles rather than being replaced by them.`,
            },
            {
              type: 'p',
              text: 'The alternative, which is common enough on preparation sites, is to publish stock photographs beside impressive-sounding credentials that nobody has checked. We would rather show less and have it be true.',
            },
          ]}
        />

        <ContentSection
          id="how-material-is-made"
          eyebrow="Editorial process"
          heading="The publication standard for material on this site"
          intro="These are the checks the editorial workflow is required to record; a visible byline or review date is added only when the underlying record exists."
          blocks={[
            {
              type: 'steps',
              items: [
                { text: 'The syllabus is checked against the current notification.', note: 'Not against last year’s guide. Patterns, marks and negative marking change, and material written to an old structure teaches the wrong exam.' },
                { text: 'Past papers are tagged to find the weighting.', note: 'A syllabus lists topics with equal visual weight; past papers show which ones actually carry marks. That distribution decides how much space a topic gets.' },
                { text: 'The subject explanation is drafted.', note: 'Concepts, worked examples and practice questions should be written to be worked through rather than skimmed.' },
                { text: 'A separate solution check is recorded.', note: 'Do not claim a named reviewer or completed review unless that check and reviewer identity are documented.' },
                { text: 'Claims about examinations are qualified where they are volatile.', note: 'Vacancy counts, cutoffs and dates change. Where a figure would age badly, the material says to check the notification instead of stating one.' },
                { text: 'Corrections are made when reported.', note: 'If you find an error, write to us with the page URL. It is the fastest route to a fix and we would rather know.' },
              ],
            },
          ]}
        />

        <ContentSection
          id="what-verification-requires"
          eyebrow="The standard"
          heading="What a named profile has to satisfy before it appears"
          background
          intro="A byline is a claim about a person, and a claim about a person is only worth making if it can be checked. These are the records required before a name, photograph or credential is published on this site."
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'Identity, evidenced',
                  note: 'the person exists, is who the profile says they are, and has agreed in writing to be named on this site.',
                },
                {
                  text: 'Qualification, evidenced',
                  note: 'the degree or certification stated in the profile is documented. A qualification is not published on the strength of a description of it.',
                },
                {
                  text: 'Relevant experience, described specifically',
                  note: 'what they taught, where, and for how long — rather than an unattributable phrase about years of experience.',
                },
                {
                  text: 'A body of work on this site',
                  note: 'a byline names the person responsible for particular pages. It is attached to work, not awarded as a title.',
                },
                {
                  text: 'A defined review role, if claimed',
                  note: 'where a profile says a person reviewed something, the review has to have happened and to be recorded. “Reviewed by” is a statement of fact, not a trust badge.',
                },
              ],
            },
            {
              type: 'note',
              title: 'Why the page reads this way in the meantime',
              text: 'The alternative to an organisational byline is the practice common across preparation sites: stock photographs beside impressive-sounding credentials that nobody has checked. That is worse than saying less, because it invites a reader to weigh a credential that does not exist. Until the records above are in place, responsibility for everything published here rests with the editorial team, stated plainly and without decoration.',
            },
          ]}
        />

        <ContentSection
          id="how-subjects-are-covered"
          eyebrow="Coverage"
          heading="How subject coverage is organised"
          intro="Material is grouped by subject rather than by exam, because the underlying concept does not change with the paper that sets it. What changes between exams is depth and emphasis, and that is handled on the exam guides."
          blocks={[
            {
              type: 'defs',
              items: [
                [
                  'Quantitative and reasoning subjects',
                  'Written as skill material: a method, worked examples, then practice, because these sections are built by solving rather than by reading. Depth is set by the hardest exam that uses the topic, with easier papers flagged where a shortcut suffices.',
                ],
                [
                  'Language subjects',
                  'Split between the finite part — grammar rules, error patterns — and the cumulative part, vocabulary and reading speed, which respond to daily contact over months rather than to study sessions.',
                ],
                [
                  'General studies subjects',
                  'Written around what is actually asked, which is pairings and specifics far more often than narrative. Volatile figures are excluded; structures, institutions and chronology are not.',
                ],
                [
                  'State-specific material',
                  'Assembled from the state’s own publications, commission archives and department sources, because no national reference covers it at the depth state papers examine.',
                ],
              ],
            },
            {
              type: 'links',
              title: 'Read the material itself',
              items: [
                { label: 'Study material by subject', to: '/study-material/' },
                { label: 'Editorial and sourcing policy', to: '/editorial-policy/' },
                { label: 'Corrections policy', to: '/corrections-policy/' },
              ],
            },
          ]}
          background
        />

      </Doc>
      <FinalCta />
    </>
  )
}

export function Careers() {
  useSeo({
    title: 'Careers and Contributor Enquiries | Brolly Exam Prep',
    description:
      'How to send a contributor or careers enquiry to Brolly Exam Prep. No specific vacancy is currently advertised on this page.',
    canonical: canonicalFor('/careers/'),
    robots: 'noindex, follow',
  })
  return (
    <>
      <PageHero
        eyebrow="Work with us"
        title="Careers at Brolly Exam Prep"
        lead="No specific vacancy is currently advertised here. This page explains what to include if you want to send a contributor or careers enquiry."
        trail={[{ label: 'Careers' }]}
      />
      <Doc>
        <ContentSection
          id="what-we-hire-for"
          eyebrow="The work"
          heading="What we hire for"
          intro="Almost everything on this site is written rather than assembled, which shapes who we need."
          blocks={[
            {
              type: 'defs',
              items: [
                [
                  'Subject faculty',
                  'Teachers who know an examination well enough to say what it actually asks rather than what its syllabus lists — and who can write that down clearly. Quantitative aptitude, reasoning, English, general studies and the technical subjects. The work is writing study material, setting questions and reviewing solutions.',
                ],
                [
                  'Question setters',
                  'People who can write a question with exactly one defensible answer and three distractors that are wrong for interesting reasons. This is a specific craft, and it is rarer than subject knowledge. A sample set tells us more than a résumé does.',
                ],
                [
                  'Content editors',
                  'Editors who check that a claim about an examination is accurate against the current notification, that a solution is correct, and that the writing says something. Much of the job is catching detail that has quietly gone out of date.',
                ],
                [
                  'Engineers',
                  'Front-end and back-end engineers who care about page speed, accessibility and correctness, on a site whose users are often on modest connections and shared devices.',
                ],
              ],
            },
          ]}
        />

        <ContentSection
          id="what-we-look-for"
          eyebrow="What matters"
          heading="What we look for"
          background
          blocks={[
            {
              type: 'list',
              items: [
                { text: 'Accuracy about examinations', note: 'a confident claim about a pattern that changed two cycles ago is worse than no claim. We would rather someone say they need to check.' },
                { text: 'Writing that respects the reader', note: 'aspirants are preparing under real pressure. Padding wastes their time, and so does hedging that avoids saying anything.' },
                { text: 'Willingness to be corrected', note: 'everything published here gets reviewed, and material gets sent back. That is the process working, not a judgement.' },
                { text: 'Something you have made', note: 'a set of notes, a question bank, a solution you wrote, a project you shipped. It is worth more than a description of experience.' },
              ],
            },
            {
              type: 'p',
              text: 'Brolly Academy is based in Hyderabad. Location, employment type, compensation and working arrangements must be confirmed in a specific written role description; this page does not promise them.',
            },
          ]}
        />

        <ContentSection
          id="apply"
          eyebrow="Applying"
          heading="How to get in touch"
          blocks={[
            {
              type: 'steps',
              items: [
                { text: 'Write to support@brollyexamprep.com.', note: 'With "Careers" and the role in the subject line.' },
                { text: 'Tell us what you do, in a paragraph.', note: 'The subject you teach, the examinations you know, or the engineering work you have done.' },
                { text: 'Attach a sample.', note: 'For faculty and question setters, this is the part that matters most — a topic you have written up, or a set of questions with solutions. For engineers, a repository or a project.' },
                { text: 'Wait for a written response.', note: 'An enquiry is not an application acceptance, interview invitation or offer.' },
              ],
            },
            {
              type: 'note',
              title: 'Current openings',
              text: 'No specific vacancy is listed at present. Do not send identity documents, bank details or other sensitive personal information with an initial enquiry.',
            },
          ]}
        />

        <ContentSection
          id="what-the-work-is-like"
          eyebrow="Honestly"
          heading="What the work is actually like"
          intro="Worth reading before writing, because it puts off some people and is exactly what others are looking for."
          blocks={[
            {
              type: 'list',
              items: [
                {
                  text: 'Most of it is writing',
                  note: 'the site is written rather than assembled. Even engineering work here is shaped by the fact that the product is a large body of prose that has to stay accurate.',
                },
                {
                  text: 'Everything gets reviewed and much of it comes back',
                  note: 'material is sent back for accuracy, structure or because a claim cannot be supported. That is the process working rather than a judgement, and people who find it difficult are unhappy here.',
                },
                {
                  text: 'Accuracy is treated as more important than volume',
                  note: 'a confident claim about a pattern that changed two cycles ago is worse than no claim. We would rather a contributor say they need to check.',
                },
                {
                  text: 'Nothing is published to fill a slot',
                  note: 'there is no publishing quota, and no page is padded to reach a length. A short page that answers its question completely is finished.',
                },
                {
                  text: 'The readers are under real pressure',
                  note: 'aspirants are preparing against deadlines with a lot at stake. Padding wastes their time, and so does hedging that avoids saying anything.',
                },
              ],
            },
          ]}
          background
        />

        <ContentSection
          id="what-a-good-sample-looks-like"
          eyebrow="The sample"
          heading="What makes a sample useful to us"
          intro="For faculty and question setters the sample is the part that matters most, and a short strong one is worth more than a long comprehensive one."
          blocks={[
            {
              type: 'defs',
              items: [
                [
                  'A written topic',
                  'One topic, explained as you would to a candidate who has not met it. We are reading for whether the explanation is complete, whether the examples do work rather than decorate, and whether you know which parts an examination actually asks about.',
                ],
                [
                  'A question set',
                  'Ten questions with solutions. We are reading for whether each has exactly one defensible answer, whether the distractors are wrong for interesting reasons, and whether the solutions explain the method rather than restate the answer.',
                ],
                [
                  'An edit',
                  'Take a page from this site and mark what you would change and why. This tells us more about an editor than any description of experience, and it is the only sample that also tells us whether you read closely.',
                ],
                [
                  'A project or repository',
                  'For engineering roles. Something you built, with a note on what was difficult about it and what you would do differently.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'A note on what an enquiry is not',
              text: 'No specific vacancy is advertised on this page. An enquiry is not an application acceptance, an interview invitation, or an offer, and location, employment type, compensation and working arrangements are only settled in a specific written role description. Please do not send identity documents, bank details or other sensitive personal information with an initial enquiry.',
            },
          ]}
        />

      </Doc>
      <section className="s s--bg">
        <div className="wrap wrap--narrow prose">
          <p>
            <Link className="btn btn--k" to="/contact/">
              Contact Us
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}

export function Legal() {
  const { pathname } = useLocation()
  const copy = LEGAL[pathname] || { title: 'Legal', intro: '', sections: [] }

  useSeo({
    title: copy.seoTitle || `${copy.title} | Brolly Exam Prep`,
    description: copy.intro,
    canonical: canonicalFor(pathname),
  })

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={copy.title}
        lead={copy.intro}
        trail={[{ label: copy.title }]}
      />

      <Doc>
        {copy.sections.map((section) => (
          <ContentSection
            key={section.id}
            id={section.id}
            heading={section.heading}
            blocks={section.blocks}
          />
        ))}
      </Doc>

      <section className={`s${copy.sections.length % 2 === 1 ? ' s--bg' : ''}`}>
        <div className="wrap wrap--narrow prose">
          <p>
            Questions about this policy go to{' '}
            <a href="mailto:support@brollyexamprep.com">support@brollyexamprep.com</a>. Brolly Exam
            Prep is part of{' '}
            <a href="https://brollyacademy.com/" rel="noopener" target="_blank">
              Brolly Academy
            </a>
            , Hyderabad, Telangana, India.
          </p>
        </div>
      </section>
    </>
  )
}

export function EditorialPolicy() {
  useSeo({
    title: 'Editorial and Sourcing Policy | Brolly Exam Prep',
    description:
      'How Brolly Exam Prep researches, writes, reviews, sources and updates exam guides, study material and practice questions.',
    canonical: canonicalFor('/editorial-policy/'),
  })

  return (
    <>
      <PageHero
        eyebrow="Trust and accuracy"
        title="Editorial and Sourcing Policy"
        lead="The conducting body is authoritative for every exam. Brolly explains stable concepts and preparation methods, cites primary sources where facts can change, and corrects errors without disguising them as routine freshness."
        trail={[{ label: 'Editorial Policy' }]}
      />
      <Doc>
        <ContentSection
          id="source-order"
          eyebrow="Evidence hierarchy"
          heading="Which sources we prefer"
          blocks={[
            {
              type: 'defs',
              items: [
                ['Binding exam facts', 'The current notification, corrigendum, syllabus, calendar, answer key or result published by the conducting body. A third-party summary never overrides it.'],
                ['Law, policy and public data', 'The responsible ministry, regulator, legislature, court, official report or government dataset.'],
                ['Stable subject concepts', 'Standard textbooks, official curricula and primary institutional references where one exists.'],
                ['Preparation recommendations', 'Clearly labelled editorial judgment based on the exam structure and past-paper analysis, not presented as a guarantee.'],
              ],
            },
            {
              type: 'list',
              title: 'What the review checks',
              items: [
                { text: 'Intent and completeness', note: 'the page should answer the question its title promises without filler.' },
                { text: 'Fact and source agreement', note: 'dates, units, stages and jurisdiction must match the cited primary source.' },
                { text: 'Product truth', note: 'test length, access, features and availability must match what a visitor can actually use.' },
                { text: 'Search integrity', note: 'no keyword stuffing, fabricated proof, copied competitor wording, doorway pages or fake freshness.' },
              ],
            },
          ]}
          background
        />
        <ContentSection
          id="authorship"
          eyebrow="Who and how"
          heading="Authorship, automation and updates"
          blocks={[
            {
              type: 'p',
              text: 'Content may be drafted or checked with software, including automation. Publication responsibility remains with the Brolly Exam Prep editorial team. Automation is not evidence: factual claims still require an appropriate source, and generated wording is reviewed for accuracy, usefulness and unsupported claims.',
            },
            {
              type: 'p',
              text: 'A person’s name, qualification or reviewer profile is published only after it is verified and supplied for publication. Until then, pages use the organisational byline rather than inventing an expert identity. A modified date changes only when the main content is substantively reviewed or changed.',
            },
            {
              type: 'links',
              title: 'Related policies',
              items: [
                { label: 'Corrections policy', to: '/corrections-policy/' },
                { label: 'Student outcomes policy', to: '/success-stories/' },
                { label: 'Contact the editorial team', to: '/contact/' },
              ],
            },
          ]}
        />

        <ContentSection
          id="how-a-page-is-made"
          eyebrow="Process"
          heading="How a page on this site is made"
          background
          intro="The same sequence is followed whether the page is an exam guide, a subject lesson or a method article. It is written down here so that a reader can judge the process rather than take the output on trust."
          blocks={[
            {
              type: 'steps',
              items: [
                {
                  title: 'Establish what the page is for.',
                  text: 'One question, one page. If a draft turns out to answer two different questions for two different readers, it becomes two pages rather than a longer one.',
                },
                {
                  title: 'Read the primary source before anything else.',
                  text: 'For an exam page that is the notification and the syllabus published by the conducting body. For a subject lesson it is the standard reference for the concept. Third-party summaries are not used as the basis of a factual claim.',
                },
                {
                  title: 'Check the evidence for weighting.',
                  text: 'Past papers, where they exist, decide how much space a topic gets. A syllabus lists topics with equal visual weight and the paper does not.',
                },
                {
                  title: 'Separate fact, inference and recommendation.',
                  text: 'A structural fact is stated. An inference from past papers is labelled as one. A preparation recommendation is presented as editorial judgement, because that is what it is.',
                },
                {
                  title: 'Strip out anything volatile.',
                  text: 'Vacancy counts, cutoffs, fees, dates and relaxations are removed and replaced with a pointer to the notification, which is the only document that binds the examiner.',
                },
                {
                  title: 'Check the product claims against the product.',
                  text: 'Every stated test length, feature and link is checked against what a visitor can actually use. A call to action that leads nowhere is treated as a factual error.',
                },
                {
                  title: 'Review, then publish under the organisational byline.',
                  text: 'A named byline appears only where an identified author or reviewer has been verified. Until then the responsibility is the editorial team’s, stated as such.',
                },
              ],
            },
          ]}
        />

        <ContentSection
          id="claims-we-avoid"
          eyebrow="Language"
          heading="Claims we do not make, and what we write instead"
          intro="Much of what makes preparation content untrustworthy is not invented fact but unearned emphasis. These are the specific formulations this site avoids."
          blocks={[
            {
              type: 'table',
              head: ['Common claim', 'Why it is avoided', 'What appears instead'],
              rows: [
                [
                  '“India’s number one” or “largest”',
                  'Superlatives about ourselves that no published evidence supports.',
                  'A description of what the site actually contains, which the reader can check.',
                ],
                [
                  'A promise of daily updates',
                  'It sets an expectation about publishing frequency that nothing on the site verifies.',
                  'A modified date that changes when the content changes, and nothing more.',
                ],
                [
                  '“Full-length mock test”',
                  'Where a test is shorter than the real paper, calling it full-length misleads a candidate about their score.',
                  'The real question count and duration, stated before the test is started.',
                ],
                [
                  '“Guaranteed selection” or a predicted cutoff',
                  'Neither is knowable, and a candidate who plans around one loses time.',
                  'What the score actually measures, and a note that a cutoff depends on that cycle’s field.',
                ],
                [
                  '“Expert faculty with years of experience”',
                  'A credential claim with no identified person behind it is not a credential.',
                  'Subjects listed by area, with named profiles added only when the record is verified.',
                ],
                [
                  '“Latest syllabus” without a reference',
                  'It implies currency that only a named notification can establish.',
                  'A description of the durable structure, plus an instruction to read the notification for your cycle.',
                ],
              ],
            },
            {
              type: 'note',
              title: 'Where we are uncertain, the page says so',
              text: 'Some things genuinely vary between cycles, between posts and between states — post designations, conducting arrangements, qualifying standards. Where that is the case the page describes the range and tells you which document settles it for you, rather than choosing one version and presenting it as universal.',
            },
          ]}
        />
      </Doc>
    </>
  )
}

export function CorrectionsPolicy() {
  useSeo({
    title: 'Corrections Policy | Brolly Exam Prep',
    description:
      'How to report an error and how Brolly Exam Prep verifies, corrects and records material changes to exam content.',
    canonical: canonicalFor('/corrections-policy/'),
  })

  return (
    <>
      <PageHero
        eyebrow="Accuracy"
        title="Corrections Policy"
        lead="Anyone can report an error. Include the page URL, the disputed statement, the correction you believe is needed and, where possible, the conducting body’s source."
        trail={[{ label: 'Corrections Policy' }]}
        actions={
          <a className="btn btn--y" href="mailto:support@brollyexamprep.com?subject=Content%20correction">
            Report a Correction
          </a>
        }
      />
      <Doc>
        <ContentSection
          id="process"
          eyebrow="What happens next"
          heading="Verification and correction process"
          blocks={[
            {
              type: 'steps',
              items: [
                { text: 'Locate the exact claim.', note: 'The URL and a short quotation prevent a report from being applied to the wrong exam or cycle.' },
                { text: 'Check the authoritative source.', note: 'For exam rules this is normally the conducting body’s current notification or corrigendum.' },
                { text: 'Assess the scope.', note: 'The same error may appear in a hub, exam page, FAQ, schema field and internal link; all affected versions are checked.' },
                { text: 'Correct the visible content and metadata.', note: 'Material errors are not hidden by changing only structured data or a snippet.' },
                { text: 'Record material changes.', note: 'When a correction affects a decision a candidate could make, the page should state what changed and when.' },
              ],
            },
            {
              type: 'note',
              title: 'Urgent issues',
              text: 'Report errors involving eligibility, application deadlines, fees, exam dates, marking rules or safety first. Brolly cannot modify an application or a conducting body’s record; contact the official helpdesk for those actions.',
            },
            {
              type: 'links',
              title: 'More information',
              items: [
                { label: 'Editorial and sourcing policy', to: '/editorial-policy/' },
                { label: 'Contact page', to: '/contact/' },
                { label: 'Disclaimer', to: '/disclaimer/' },
              ],
            },
          ]}
          background
        />

        <ContentSection
          id="what-counts-as-an-error"
          eyebrow="Scope"
          heading="What counts as an error, and what does not"
          intro="Not every disagreement is a correction, and treating them alike would make this policy meaningless. These are the categories we act on and the ones we do not."
          blocks={[
            {
              type: 'table',
              head: ['Category', 'Example', 'How it is handled'],
              rows: [
                [
                  'Factual error',
                  'A stage described that the current notification does not contain; a wrong article number; a marking rule stated incorrectly.',
                  'Corrected against the authoritative source. Where the error could have changed a candidate’s decision, the page records what changed.',
                ],
                [
                  'Outdated fact',
                  'A structure that was accurate for an earlier cycle and has since been revised by notification.',
                  'Updated, and where the change is material the page says which cycle the description now reflects.',
                ],
                [
                  'Wrong solution',
                  'A practice or example answer whose working does not support the stated answer.',
                  'Rechecked and corrected. If the question itself is ambiguous, the question is rewritten rather than the answer defended.',
                ],
                [
                  'Broken or wrong link',
                  'An internal link to a page that does not exist, or an official link that no longer resolves.',
                  'Repointed. Official links are checked against the body’s current site rather than replaced with a third-party copy.',
                ],
                [
                  'Editorial disagreement',
                  'A recommendation you would not make — a study order, a suggested timeline, an opinion about a format.',
                  'Not a correction. We will read the argument and may change our view, but a judgement is labelled as one rather than presented as fact.',
                ],
                [
                  'A prediction we declined to make',
                  'A cutoff, a difficulty forecast, or whether a candidate will clear.',
                  'Not a correction. These are not knowable in advance and we would rather say so than guess.',
                ],
              ],
            },
          ]}
        />

        <ContentSection
          id="how-to-write-a-report"
          eyebrow="Making it actionable"
          heading="How to write a report we can act on quickly"
          background
          blocks={[
            {
              type: 'list',
              title: 'Include these four things',
              items: [
                {
                  text: 'The exact page URL',
                  note: 'the same claim often appears on a hub, an exam page and an FAQ. The URL tells us which version you read, and we then check the others.',
                },
                {
                  text: 'A short quotation of the disputed sentence',
                  note: 'a paraphrase can match two different statements on the same page, and the wrong one gets edited.',
                },
                {
                  text: 'What you believe the correct position is',
                  note: 'stated plainly. It is fine to say that a statement is wrong without knowing what is right — say that too, rather than leaving it out.',
                },
                {
                  text: 'The source, if you have one',
                  note: 'a notification, corrigendum or official page settles most reports in minutes. Without one, verification takes longer but still happens.',
                },
              ],
            },
            {
              type: 'note',
              title: 'What we cannot do, however the report is written',
              text: 'We cannot change a conducting body’s record, correct an application, alter a result, or confirm a date ahead of the body that sets it. Reports on those belong with the helpdesk named in the notification. What we can do is make sure this site describes the position accurately, which is the whole of what this policy covers.',
            },
            {
              type: 'links',
              title: 'Related pages',
              items: [
                { label: 'Editorial and sourcing policy', to: '/editorial-policy/' },
                { label: 'Editorial team and review process', to: '/faculty/' },
                { label: 'Contact the team', to: '/contact/' },
              ],
            },
          ]}
        />
      </Doc>
    </>
  )
}

export function NotFound() {
  // A single-page app answers 200 for unknown URLs, so this is the only way to
  // stop Google treating a mistyped path as a real page.
  useSeo({
    title: 'Page not found | Brolly Exam Prep',
    description: 'The page you were looking for could not be found on Brolly Exam Prep.',
    robots: 'noindex, follow',
  })
  return (
    <>
      <PageHero
        eyebrow="404"
        title="We could not find that page"
        lead="The link may be out of date, or the page may have moved. Everything below is a good place to pick the thread back up."
        trail={[{ label: 'Not found' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/">
              Back to Home
            </Link>
            <Link className="btn btn--y" to="/mock-tests/free/">
              Take a Free Mock Test
            </Link>
          </>
        }
      />
      <section className="s">
        <div className="wrap">
          <SectionHead eyebrow="Popular destinations" title="Try one of these" />
          <div className="g4">
            {[
              ['Government Exams', '/government-exams/', 'target'],
              ['Entrance Exams', '/entrance-exams/', 'layers'],
              ['Study Material', '/study-material/', 'book'],
              ['Mock Tests', '/mock-tests/', 'check'],
              ['Previous Papers', '/previous-year-papers/', 'doc'],
              ['Current Affairs', '/current-affairs/', 'globe'],
              ['Exam Updates', '/exam-updates/', 'bell'],
              ['Search', '/search/', 'search'],
            ].map(([label, to, icon]) => (
              <Link className="tile" key={to} to={to}>
                <span className="tile__i">
                  <Icon name={icon} />
                </span>
                <span>
                  <b>{label}</b>
                  <span>Browse this section</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
