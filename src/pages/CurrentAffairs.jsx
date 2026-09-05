import { Link } from 'react-router-dom'
import LinkColumns from '../components/LinkColumns'
import { PageHero, SectionHead, Tile, useTitle } from '../components/ui'
import { NAV } from '../data/nav'
import { CURRENT_AFFAIRS_TILES } from '../data/site'
import { FinalCta } from './home/sections'

const SECTION = NAV[4]

export default function CurrentAffairs() {
  useTitle('Daily Current Affairs for Competitive Exams')

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
            eyebrow="Updated daily"
            title="Read it, then test whether it stuck"
            lead="Written for exam relevance, with each item tagged to the exams that actually ask about it."
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

      <FinalCta
        title="Ten minutes a day is enough"
        lead="Read the day's items, attempt the quiz, and let the monthly compilation handle revision."
      />
    </>
  )
}
