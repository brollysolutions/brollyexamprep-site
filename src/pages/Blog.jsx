import { Link, useParams } from 'react-router-dom'
import Icon, { Arrow } from '../components/Icon'
import Block, { ContentSection } from '../components/Blocks'
import { Breadcrumbs, PageHero, SectionHead, canonicalFor, useJsonLd, useSeo } from '../components/ui'
import { ARTICLES } from '../data/site'
import { getArticleBody } from '../data/articles'
import { SITE } from '../lib/seo'
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

      <ContentSection
        id="what-these-cover"
        eyebrow="What you will find here"
        heading="Strategy, not motivation"
        background
        intro="These guides are about how to prepare rather than about why to. They cover the decisions that most affect an outcome and that syllabus documents never mention."
        blocks={[
          {
            type: 'list',
            items: [
              { text: 'How to sequence a preparation', note: 'which components build slowly and must start first, and which can be acquired in weeks near the end.' },
              { text: 'How to read an exam’s structure', note: 'which stage decides the merit, what the negative marking rate implies for guessing, and where sectional cutoffs change the calculus.' },
              { text: 'How to use previous papers and mock tests', note: 'as measurement and specification rather than as extra practice.' },
              { text: 'Where candidates lose cycles', note: 'physical standards left late, notifications read carelessly, application windows missed, and the wrong stage prepared for.' },
            ],
          },
          {
            type: 'p',
            text: 'Exam-specific detail — syllabus, pattern, eligibility, stage structure — lives on the exam guides rather than here, and these articles link across to it rather than repeating it.',
          },
          {
            type: 'links',
            title: 'Where the detail lives',
            items: [
              { label: 'Government exam guides', to: '/government-exams/' },
              { label: 'Entrance exam guides', to: '/entrance-exams/' },
              { label: 'Study material by subject', to: '/study-material/' },
              { label: 'Free mock tests', to: '/mock-tests/free/' },
            ],
          },
        ]}
      />

      <FinalCta />
    </>
  )
}

export function BlogPost() {
  const { slug } = useParams()
  const article = ARTICLES.find((a) => a.to === `/blog/${slug}/`)
  const body = getArticleBody(slug)
  const title = article?.title || slug.replace(/-/g, ' ')
  const url = `${SITE.origin}/blog/${slug}/`

  useSeo({
    title: `${title} | Brolly Exam Prep`,
    description:
      article?.excerpt ||
      `${title} - a preparation guide from the Brolly Exam Prep faculty.`,
    canonical: canonicalFor(`/blog/${slug}/`),
    type: 'article',
  })

  useJsonLd([
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: title,
      description: article?.excerpt,
      url,
      inLanguage: 'en-IN',
      ...(article?.cat ? { articleSection: article.cat } : {}),
      ...(body ? { about: body.sections.map((s) => ({ '@type': 'Thing', name: s.heading })) } : {}),
      isPartOf: { '@id': `${SITE.origin}/#website` },
      publisher: { '@id': `${SITE.origin}/#organization` },
    },
  ])

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

        {/* The written lead, where one exists, otherwise the index excerpt. */}
        {(body?.lead || [article?.excerpt]).filter(Boolean).map((paragraph) => (
          <p className="lead" key={paragraph}>
            {paragraph}
          </p>
        ))}

        {body ? (
          body.sections.map((section) => (
            <section className="article-page__section" id={section.id} key={section.id}>
              {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
              <h2 className="h">{section.heading}</h2>
              {section.blocks.map((block, i) => (
                <Block block={block} key={i} />
              ))}
            </section>
          ))
        ) : (
          <UnwrittenArticle />
        )}

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

/**
 * An article listed in the index but not yet written. Says so, and points at
 * the pages that carry the same ground — rather than describing a CMS the
 * reader has no interest in.
 */
function UnwrittenArticle() {
  return (
    <section className="article-page__section">
      <h2 className="h">This guide is still being written</h2>
      <Block
        block={{
          type: 'p',
          text: 'Rather than publish a partial version, here is where the same ground is already covered in detail.',
        }}
      />
      <Block
        block={{
          type: 'links',
          items: [
            { label: 'Exam guides with syllabus and pattern', to: '/government-exams/' },
            { label: 'Study material by subject', to: '/study-material/' },
            { label: 'Free mock tests', to: '/mock-tests/free/' },
            { label: 'Previous year papers', to: '/previous-year-papers/' },
          ],
        }}
      />
    </section>
  )
}
