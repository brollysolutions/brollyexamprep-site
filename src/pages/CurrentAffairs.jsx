import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { ContentSection } from '../components/Blocks'
import { PageHero, SectionHead, Tile, canonicalFor, useSeo } from '../components/ui'
import { NAV } from '../data/nav'
import { CURRENT_AFFAIRS_TILES } from '../data/site'
import { FinalCta } from './home/sections'

const SECTION = NAV[4]

export default function CurrentAffairs() {
  useSeo({
    title: 'Current Affairs Study Guide for Competitive Exams | Brolly',
    description:
      'Learn how to study current affairs for competitive exams using verified news sources, themed notes, retrieval practice and scheduled revision.',
    canonical: canonicalFor('/current-affairs/'),
  })

  return (
    <>
      <PageHero
        eyebrow={SECTION.eyebrow}
        title="Current Affairs"
        lead={SECTION.desc}
        trail={[{ label: 'Current Affairs' }]}
        actions={
          <>
            <Link className="btn btn--k" to="/current-affairs/today/">
              Today's Current Affairs
            </Link>
            <Link className="btn btn--o" to="/current-affairs/daily-quiz/">
              Take the Daily Quiz
            </Link>
          </>
        }
      />

      <section className="s">
        <div className="wrap">
          <SectionHead
            eyebrow="Revision method"
            title="Read it, then test whether it stuck"
            lead="These guides explain how to select, organise and revise current events; verify each event at its primary source."
          />
          <div className="g4">
            {CURRENT_AFFAIRS_TILES.map((tile) => (
              <Tile key={tile.to} to={tile.to} icon={tile.icon} title={tile.title} sub={tile.sub} />
            ))}
          </div>
        </div>
      </section>

      <section className="s s--bg">
        <div className="wrap">
          <SectionHead
            eyebrow="Browse"
            title="By date, topic and exam"
            lead="The same events, filtered the way you revise."
          />
          <LinkColumns groups={SECTION.groups} columns={4} />
        </div>
      </section>

      <ContentSection
        id="how-to-study"
        eyebrow="Method"
        heading="How to study current affairs so that it converts into marks"
        intro="Reading the news and studying current affairs are different activities, and the gap between them is where most of this preparation quietly fails."
        blocks={[
          {
            type: 'p',
            text: 'News is written to convey what happened. An examination asks what it means, which institution it concerns, which scheme it belongs to, and what number was attached to it. A candidate reading for the first and expecting to have prepared for the second will read diligently for six months and retain very little that is examinable.',
          },
          {
            type: 'list',
            title: 'What to extract from a day’s reading',
            items: [
              { text: 'The institution involved', note: 'which ministry, regulator, international body or constitutional authority. Questions ask about the institution more often than about the event.' },
              { text: 'The scheme or programme named', note: 'its objective, its ministry, its target group and any figure attached to it. The single most reliably examined category.' },
              { text: 'The number, where there is one', note: 'a rank, a percentage, an allocation. Objective questions are built from these.' },
              { text: 'The connection to static knowledge', note: 'a bill to a constitutional article, a dispute to geography, a rate decision to monetary policy. Connections are what memory holds.' },
              { text: 'The debate, for descriptive papers', note: 'where the argument around a development matters more than the development.' },
            ],
          },
          {
            type: 'steps',
            title: 'A routine that survives a busy month',
            items: [
              { text: 'One source, read properly, at a fixed time daily.', note: 'Twenty to forty minutes. Coverage matters less than retention, and retention comes from repeated contact with the same material.' },
              { text: 'Record by theme, never by date.', note: 'A dated log is unrevisable — you will not read back through three months of entries. Themed pages accumulate and can be revised in minutes.' },
              { text: 'Consolidate weekly.', note: 'Group the week’s items, drop what turned out to be noise, and add the survivors to the permanent themed pages.' },
              { text: 'Test yourself rather than re-reading.', note: 'Retrieval strengthens memory more than another exposure does, which is why a ten-question daily quiz outperforms ten more minutes of reading.' },
              { text: 'Revise your own pages in the final weeks.', note: 'Not the monthly compilations, which are too long to revise repeatedly and weight everything equally.' },
            ],
          },
          {
            type: 'note',
            title: 'How much of your exam is this?',
            text: 'It varies enormously and should determine how much time you give it. General awareness is the largest section in RRB NTPC and RPF and a substantial one in police recruitment; banking mains devotes a large block to banking awareness specifically; SSC general awareness is weighted more towards static knowledge than towards current affairs. Check the balance in your own exam’s past papers before deciding how much of your day this deserves.',
          },
        ]}
      />

      <FinalCta
        title="Build a routine you can sustain"
        lead="Read a verified source, record only exam-relevant facts, and revisit them through retrieval practice."
      />
    </>
  )
}
