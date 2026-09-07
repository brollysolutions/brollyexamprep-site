import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import { Breadcrumbs, PageHero, SectionHead, canonicalFor, useSeo } from '../components/ui'
import { ARTICLES } from '../data/site'
import { FinalCta } from './home/sections'

export function Blog() {
  useSeo({
    title: 'Preparation Guides & Articles | Brolly Exam Prep',
    description:
      'Preparation guides, syllabus breakdowns and study-plan advice for Indian competitive exams, written by the Brolly Exam Prep faculty.',
    canonical: canonicalFor('/blog/'),
  })

  return (
    <>
      <PageHero
        eyebrow="From the blog"
        title="Preparation Guides"
        lead="Strategy, syllabus breakdowns and study-plan advice written by the same faculty who write the questions."
        trail={[{ label: 'Blog' }]}
      />

      <section className="s">
        <div className="wrap">
          <SectionHead eyebrow="Latest" title="Recent articles" />
          <div className="arts">
            {ARTICLES.map((article) => (
              <Link className="art" key={article.to} to={article.to}>
                <span className="art__img">
                  <Icon name="image" size={46} strokeWidth={1.4} />
                </span>
                <span className="art__b">
                  <span className="art__c">{article.cat}</span>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <span className="art__f">
                    <span>{article.date}</span>
                    <b>
                      Read More <Arrow />
                    </b>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const article = ARTICLES.find((a) => a.to === `/blog/${slug}/`)
  const title = article?.title || slug.replace(/-/g, ' ')

  useSeo({
    title: `${title} | Brolly Exam Prep`,
    description:
      article?.excerpt ||
      `${title} - a preparation guide from the Brolly Exam Prep faculty.`,
    canonical: canonicalFor(`/blog/${slug}/`),
    type: 'article',
  })

  return (
    <article className="s article-page">
      <div className="wrap wrap--narrow">
        <Breadcrumbs trail={[{ label: 'Blog', to: '/blog/' }, { label: title }]} />
        {article && <p className="eyebrow">{article.cat}</p>}
        <h1 className="phero__h">{title}</h1>
        {article && (
          <p className="article-page__meta">
            Published {article.date} · Brolly Exam Prep editorial team
          </p>
        )}
        <p className="lead">{article?.excerpt}</p>

        <div className="prose">
          <p>
            This article is a placeholder. Wire the route <code>/blog/:slug/</code> to your CMS and
            render the fetched body here — the layout, typography and breadcrumbs are already in
            place.
          </p>
          <p>
            Until then, the article index at <Link to="/blog/">/blog/</Link> lists everything
            published, and the exam pages carry the syllabus and pattern detail that most guides
            link back to.
          </p>
        </div>

        <div className="bxh__cta" style={{ marginTop: 32 }}>
          <Link className="btn btn--k" to="/blog/">
            Back to all articles
          </Link>
          <Link className="btn btn--y" to="/mock-tests/free/">
            Take a Free Mock Test
          </Link>
        </div>
      </div>
    </article>
  )
}
