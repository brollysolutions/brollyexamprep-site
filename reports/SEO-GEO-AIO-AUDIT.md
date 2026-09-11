# Brolly Exam Prep Organic Search, GEO, AEO and AIO Strategy

## 1. Executive summary

Brolly Exam Prep now has a technically consistent prerendered foundation and substantially more honest product messaging. The production build generates 656 HTML routes: 651 indexable canonical pages and five deliberately noindexed utility or evidence-dependent pages. A subsequent completeness pass took every page through a review against its own intent: indexable pages under 600 words fell from 124 to two and those under 700 words from 291 to 122, while mean main-content length is now 1,209 words — achieved by answering questions the pages had left unanswered rather than by padding to a target. The final local audit found no broken internal links, orphan indexable pages, invalid JSON-LD, exact duplicate rendered bodies, unfinished-content flags, heading-level skips, or image markup defects. Titles, descriptions and canonicals are unique across all canonical pages.

The strongest realistic route to top-three and eventual number-one visibility is not to imitate the breadth of Testbook, Adda247 or PW. Their defensible advantages are large product inventories, educators, multilingual distribution, apps, proof and branded demand. Brolly’s attainable advantage is narrower: unusually clear exam architecture; complete, readable subject lessons; transparent diagnostic tests; official-source discipline; state-level depth; and reproducible original research from past papers. Rankings cannot be guaranteed, and compliance with Google’s requirements does not guarantee crawling, indexing or serving.^1

The most urgent remaining risk is deployment configuration. Live checks on 9 September 2026 found that both `https://brollyexamprep.com/` and `https://www.brollyexamprep.com/` returned HTTP 200, while an invented URL also returned 200 with homepage-sized HTML. That creates duplicate-host and soft-404 risk. The repository now contains non-www redirect and real-404 handling, but those changes require deployment and host configuration before the live behavior changes.

The second strategic constraint is evidence. Search Console, analytics, conversion and backlink data were not available in the workspace. Public SERPs cannot substitute for private query/page performance data. Priority recommendations therefore combine repository evidence, public search results and competitor capabilities; they must be recalibrated once the required exports are supplied.

## 2. Research principles and ranking position

Google describes generative search optimization as ordinary, high-quality SEO applied to AI Overviews and AI Mode. Eligible pages must first be indexed and snippet-eligible. Google explicitly says there is no special AI schema, no required tiny “chunking,” no Google ranking benefit from `llms.txt`, and no need to create a page for every fan-out query.^4 The implementation therefore avoids keyword-variation pages, unsupported AI markup and search-engine-only rewrites.

The strategy follows five constraints:

1. Satisfy one coherent intent with one canonical page. Synonyms and close variants belong on that page unless the SERP and user task are genuinely different.
2. Prefer primary sources for exam rules, dates, eligibility, marking and public data.
3. Separate available product features from recommended preparation methods. For example, Brolly may recommend full-length practice without describing its current 25-question diagnostics as full-length.
4. Publish no person, testimonial, selection, rating, user count or performance claim without evidence.
5. Treat content length as an outcome, not a target. Google says there is no preferred word count; completeness and satisfaction matter.^3

## 3. Technical SEO audit

### Crawlability, rendering and indexation

The application uses React Router but prerenders every supported route into static HTML. This is a sound response to JavaScript SEO risk because titles, descriptions, canonicals, visible copy, links and JSON-LD are present in the first response rather than waiting for a second rendering wave. Google can process JavaScript, but Google also documents the added complexity and recommends crawlable links, meaningful status codes and unique metadata.^8

Local verification after implementation:

| Check | Result |
|---|---:|
| Prerendered HTML routes | 656 |
| Indexable canonical routes | 651 |
| Noindex routes | 5 |
| Sitemap URLs | 651 |
| Broken internal links | 0 |
| Orphan indexable pages | 0 |
| Invalid JSON-LD blocks | 0 |
| Exact duplicate rendered-body groups | 0 |
| Missing or multiple H1s | 0 |
| Heading-level skips | 0 |
| Image alt/dimension findings | 0 |
| Unfinished/template/freshness flags | 0 |
| Mean main-content words per page | 1,209 |
| Indexable pages under 600 words | 2 |

The route and sitemap systems now share the same authoritative written-content registries. Previously, many contextual links pointed to written exam-resource pages that were never prerendered. The first extended audit found 617 broken internal references; after route registry and link corrections, the count is zero.

### Canonicals and host normalization

Every canonical local page self-canonicalizes to `https://brollyexamprep.com/...`. The live host still serves the same content on `www`, so canonical tags are doing work that a redirect should do. Canonical tags are hints; a permanent host redirect is the stronger consolidation mechanism. The container configuration now redirects `www` to non-`www`. The host proxy must also enforce this on HTTPS after deployment.

### Status codes and soft 404s

The old server rule rewrote every unknown URL to `index.html` with status 200. A real `404.html` existed but was unused. The Nginx and Netlify configurations now return the prerendered 404 document with HTTP 404 for unknown paths. This must be verified live after deployment with an unpredictable path.

### Robots and sitemap

`robots.txt` permits assets and disallows search and account utility routes. The sitemap is generated from successfully prerendered canonical pages, preventing sitemap/noindex/canonical contradictions. `lastmod` is emitted only where a meaningful source date exists rather than assigning build time to every URL. Search Console’s Page Indexing report should be used after deployment to distinguish discovered, crawled and indexed URLs; “not indexed” is not automatically an error.^12

### Metadata

All canonical titles, descriptions and canonicals are unique. The automated audit reports two descriptions over 160 characters and 102 titles over 60 characters. These are warnings, not failures: Google can rewrite snippets, character limits are not hard ranking rules, and truncation depends on query and device. Search Console CTR data should decide which high-impression snippets to shorten first.

### Structured data

Rendered JSON-LD parses successfully. Current types include Organization, WebSite, WebPage, CollectionPage, Article, FAQPage and BreadcrumbList. Markup is tied to visible content and stable canonical URLs. Google requires structured data to represent visible, truthful page content and does not guarantee a rich result.^7 No unsupported AI schema was added. FAQ markup may help machines understand the page even where Google does not show an FAQ rich result, but it should remain only where the questions are visibly rendered.

### Performance and Core Web Vitals

The principal technical warning is the client JavaScript bundle: approximately 3.99 MB minified and 1.17 MB gzip. CSS is about 61.6 KB and 11.9 KB gzip. This bundle contains large exam and study registries and hydrates on every route. It risks longer download, parse and execution time, especially on modest Indian mobile connections. Core Web Vitals should be measured at the 75th percentile using field data: LCP, INP and CLS are the current stable metrics.^10

A broad lazy-route conversion was not implemented because React `lazy` plus the existing synchronous `renderToString` prerender could replace primary content with Suspense fallbacks. The safe architectural fix is to move to streaming SSR/static generation that awaits route modules, or to build route-specific data payloads. Measure first with PageSpeed Insights and the Search Console Core Web Vitals report, then budget engineering work against field impact.

### Accessibility and semantic HTML

The site has one H1 per page, descriptive landmarks, semantic headings, labelled controls, tables with header scopes, accessible breadcrumbs and image attributes. A keyboard-visible “Skip to main content” link was added. Browser-based automated contrast and interaction testing remains desirable because static markup checks cannot validate focus traps, menu behavior, zoom or computed contrast.

## 4. Content and trust audit

### Inventory classification

The complete URL inventory is saved in `reports/content-inventory.csv`. It contains indexability, word count, inbound and outbound internal links, external-source counts, images, headings, schema types, flags and action. The final automated classification is 651 keep and five noindex. “Keep” means structurally publishable after the implemented fixes, not guaranteed competitive superiority or factual permanence.

No page is classified as weak only because it is short. Short policy and category pages can fully satisfy a narrow task. Conversely, a long page can still need correction if it promises unavailable products or time-sensitive accuracy without evidence.

### Unsupported claims corrected

The audit found claims that the repository could not support: full-length tests despite shortened diagnostics, exact current-pattern parity, daily current-affairs publishing, live updates, saved account progress, paid-series analytics, solved-paper availability, generic experienced faculty, placeholder testimonials, and current recruitment dates on homepage badges. These were removed, qualified or replaced with verifiable descriptions.

The current mock inventory is now described as shortened timed diagnostics. Each card shows its actual question count and time. Exam guides may still recommend full-length practice as a preparation method, but calls to action route only to tests that exist.

Placeholder testimonial cards are no longer rendered. `/success-stories/` is now a transparent student-outcomes policy and is noindexed until verified records exist. `/careers/` is also noindexed because no specific vacancy is advertised. The generic social-network homepages were removed. The contact form that discarded submissions was replaced with a visible email action and sensitive-data warning.

### Editorial and corrections transparency

New indexable policies explain source precedence, authorship, automation, update dates and corrections. Named authors and reviewers are not invented. The organisation-level editorial byline remains until real identity and qualification records are supplied. Google recommends making “Who, How and Why” clear and says accurate authorship can help readers assess trust.^3

### Remaining factual review risk

The codebase contains hundreds of detailed exam assertions. Structural and claim-pattern audits passed, but this implementation did not re-verify every stable factual sentence against every current notification. Each high-value exam pillar needs a named notification version, last substantive review date and documented reviewer before it can claim current-cycle authority. This is the largest editorial dependency.

## 5. GEO, AEO and AIO audit

The strongest current retrieval features are answer-first hero copy, descriptive headings, definitions, tables, ordered procedures, FAQs, semantic HTML, stable URLs, breadcrumbs and primary official links on state pages. These structures improve comprehension for both people and retrieval systems without rewriting the site into repetitive FAQ fragments.

The AI-search article at `/blog/google-ai-search-optimization-guide/` translates Google’s official generative search guidance into a practical implementation checklist and links directly to the source. It correctly explains RAG, query fan-out, commodity versus differentiated content, crawl eligibility, JavaScript complexity, image/video opportunities, and the lack of special AI schema or Google benefit from `llms.txt`.^4

Further citation-worthiness should come from assets competitors cannot reproduce cheaply:

- A reproducible SSC CGL topic-frequency dataset built from identified official papers, with tagging rules, source links and downloadable CSV.
- An exam-change tracker that records notification version, changed clause, old rule, new rule, effective cycle and official PDF.
- A negative-marking calculator with explicit formula, units and exam-specific presets sourced from notifications.
- State commission directories with official domains, notification locations, correction history and language availability.
- Diagnostic methodology pages showing exactly how question sets were selected and where shortened tests differ from full papers.

These are stronger AIO/GEO assets than generic “top tips” because they supply original evidence, stable definitions and citable calculations. Google’s generative search guidance explicitly contrasts commodity summaries with distinctive experience, analysis and evidence.^4

## 6. Competitor matrix and differentiation

Public search results and official competitor pages were reviewed on 9 September 2026. Counts and offers are volatile and should not be repeated as Brolly claims.

| Competitor | Observed strengths | Weakness/whitespace Brolly can exploit | Brolly response |
|---|---|---|---|
| Testbook | Very broad exam taxonomy, large test inventory, named educators, Hindi/multilingual support, live classes, analytics and visible selection proof.^15 | Breadth can make decision paths dense; much content is commercially oriented | Win narrowly with transparent diagnostics, official-source change logs and deeper state/paper research |
| Oliveboard | Strong government-exam test-series positioning, analysis and structured product inventory.^16 | Paid-test focus leaves space for open methodology and source-led learning | Publish free reproducible tools and methods that lead naturally to available tests |
| Adda247 | Major vernacular distribution, courses, books, current affairs and exam coverage.^17 | Large editorial surface creates freshness and consistency burden | Build fewer language clusters with native QA and stronger source/version control |
| PW | Strong brand, educator/video ecosystem, JEE/NEET presence and broad course distribution.^18 | Brolly cannot outspend video-led incumbents | Avoid a head-on JEE/NEET course battle; target decision tools and long-tail exam resources |
| MockSutra | Clear free/no-paywall proposition, bilingual/state focus, official-key claims and specific question-bank differentiation.^19 | Narrower geography and younger brand | Compete with verifiable state-by-state official directories and transparent test methodology |
| ParikshaPDF | Exam hubs, bilingual notes, no-signup positioning and explicit mock workflow.^20 | Product naming can overpromise if paper/source evidence is weak | Keep every CTA tied to a real route and display exact test length |
| ExamRocket | Focused SSC CGL free ecosystem and community/accountability differentiation.^21 | Narrow exam concentration | Build superior SSC research assets while retaining broader government-exam architecture |
| AglaSem Mock Test | Search-visible SSC mock inventory, language filtering, instant results and solutions.^22 | Content can be repetitive and test-led | Pair every diagnostic with a clear “what this result means” learning path |

The detailed competitor worksheet and opportunity backlog are also available in `COMPETITOR-GROWTH-STRATEGY.md`. Competitor wording and structures were not copied.

## 7. Keyword and intent strategy

The complete map is saved in `reports/keyword-intent-map.csv`. It covers brand, category, exam, syllabus, pattern, past-paper, test, state, lesson, Hindi, regional-language, comparison, utility and original-research opportunities.

Priority sequence:

1. Protect and strengthen existing exam pillars: SSC CGL, IBPS PO, SBI PO, RRB NTPC, UPSC CSE and the seven state hubs.
2. Make diagnostic pages convert honestly: SSC CGL, SBI PO, IBPS PO, RRB NTPC, UPSC CSE, NDA, CTET and State PSC.
3. Connect high-quality lessons to exam sections and vice versa.
4. Add official paper links and a reproducible analysis layer to priority previous-paper pages.
5. Launch one original research asset and one calculator before expanding into more generic articles.
6. Create Hindi routes only with native review, maintained content parity and hreflang. Do not machine-translate hundreds of pages to manufacture coverage.

Public SERP observations suggest newer focused competitors can surface for free SSC mocks and state preparation, so the market is not closed. However, demand, Brolly’s current positions and CTR cannot be estimated reliably without Search Console.

## 8. Internal linking architecture

The implemented graph follows this path:

`Homepage → exam/subject hubs → exam pillars → six resource pages → relevant lessons/tests → exam pillar`

State pages link to shared state syllabus, mock-method, previous-paper and study-material hubs. Written exam registries now drive prerendering, so contextual links cannot silently point to unshipped resource pages. Generic state job cards remain informative on the state hub instead of promising nonexistent detail routes. Exam and study links use descriptive anchors; repeated exact-match anchors are limited by contextual variation.

## 9. Implemented changes

### Technical and crawl controls

- Added a rendered content/link/schema audit and `npm run seo:audit:full`.
- Prerendered all hand-written exam resources and hand-written hubs from their source registries.
- Generated sitemap URLs only from successfully rendered canonical pages and emitted meaningful `lastmod` only when known.
- Implemented non-www redirect handling and real unknown-path 404 behavior in the container and Netlify configuration.
- Added a keyboard skip link.
- Added accurate international and PG/research entrance hubs.
- Corrected canonical exam routing for NDA, CDS and GMAT.

### Content, product truth and trust

- Added and internally linked the Google AI Search Optimization Guide.
- Filled the Bihar state page and six state-resource hubs.
- Expanded the core Courses, Entrance Exams, Study Material and Mock Tests pages with decision-support content.
- Reframed unavailable “full-length” products as actual shortened diagnostics.
- Removed unsupported daily/live, current-pattern, saved-progress, solved-paper, course and test-series claims.
- Removed generic social links and the placeholder phone number.
- Replaced the nonfunctional contact form with an email action.
- Removed placeholder testimonials from rendering and noindexed the evidence-dependent outcome page.
- Added editorial/sourcing and correction policies.
- Recast the faculty page as an organisation-level editorial-process page without invented people or credentials.
- Corrected all broken internal destinations and linked the state resource hubs into the site graph.

### Content depth pass — every page completed and structured

A second implementation pass took the whole site through a completeness review rather than a length target, on the principle stated in the audit itself: a page is thin when it fails to satisfy its intent, not when it is short. Pages that satisfied their intent in few words were left alone; pages whose intent was only partly answered were completed.

Coverage and outcome:

| Group | Pages | Before | After |
|---|---:|---:|---:|
| Telangana state exam records (8 exams × 6 resources) | 48 | 450–570 words | 640–1,040 |
| Study-material subject hubs | 19 | 326–466 | 817–1,188 |
| Exam `study-material` and `mock-tests` resource pages (57 exams) | 114 | 411–700 | 660–1,040 |
| Company, editorial and policy pages | 8 | 187–495 | 671–1,150 |
| Section landing pages and resource hubs | 14 | 291–560 | 700–1,300 |
| Mock-test hub, free listing and exam-family pages | 9 | 411–548 | 626–900 |

Site-wide, indexable pages under 600 words fell from 124 to 2, those under 700 words from 291 to 122, and mean main-content length rose to 1,209 words. No page was padded to reach a number: every addition is a distinct question the page had not answered.

What was added, and why each form was chosen:

- **Per-exam decision tables.** Every exam's `study-material` page now carries a section-by-section reading table with an explicit "do not spend time on" column, and every `mock-tests` page carries a diagnostic table a candidate can look their own result up in. These two resource pages previously had no table anywhere in the family, which is the one format those particular questions most want. Written per exam in `src/data/exams/*-depth.js`, never templated.
- **Derived weighting tables on subject hubs.** Each subject page now assembles what its own written lessons record about the exams that examine them, so the reading order can be checked against the exam a visitor is actually sitting. Derived from the topic registry rather than written, so it cannot drift from the pages it summarises.
- **Subject FAQs**, rendered visibly and emitted as `FAQPage` only where rendered.
- **Sourcing and method sections** on the hubs: where official papers and keys are actually published and how release practice differs by conducting body; how to build a topic-frequency table; how to track a notification without living on a notices page; what each stage of a recruitment cycle is.
- **Trust surface completed.** The editorial policy now documents the page-production sequence and the specific claim formulations the site avoids, with what appears instead. The corrections policy defines what counts as an error versus an editorial disagreement, and how to write an actionable report. The outcomes page states the evidence required before any selection claim is published, and how to read such a claim on any site. The disclaimer adds a "verify this against that document" table separating what is safe to rely on here from what is not.

Editorial constraints held throughout: no vacancy count, cutoff, fee, exam date or mark total for a named cycle; no invented person, testimonial or credential; no predicted score; no claim the product does not support; and no page describing a shortened diagnostic as a full-length paper. Every volatile fact points at the conducting body's notification instead of stating a figure.

New files: `src/data/exams/telangana-depth.js`, `ssc-depth.js`, `banking-depth.js`, `railways-depth.js`, `upsc-defence-depth.js`, `teaching-depth.js`, `entrance-depth.js`; `src/data/hubs-depth.js`; `src/data/study-faqs.js`; `src/data/mock-tests/guides.js`. Merge points are `src/data/exams/index.js`, `src/data/exams/telangana.js` and `src/data/hubs.js`, each of which ignores a depth entry naming a page that does not exist.

### Reading-experience pass — pages redesigned as documents

The content pass above made the pages complete; it also made them long, and the
existing presentation did not carry that length. Every written section rendered
through one component styled as a marketing band — full-bleed to 1280px, a 36px
heading, a tinted background on alternate sections, roughly 88px of padding
above and below. On a homepage with five short sections that reads well. On an
exam guide with seven sections and 1,300 words, or a study topic with sixteen
and 4,400, it produced a page that looked like several landing pages stacked on
top of each other, with no way to see what was on the page or reach the part the
visitor came for.

Six specific defects were measured and fixed:

| Defect | Before | After |
|---|---|---|
| No wayfinding | 7–16 `<h2>` per page, no contents list except on study topics | A contents rail on 559 pages: sticky beside the text at ≥1080px, a swipeable chip strip below that |
| Three measures on one page | Prose ~78ch, tables and definition lists full-width at 1232px, headings unconstrained | One column: 624px prose, 864px for tables and figures, one shared left edge |
| Measure varied by font | `ch` units resolved against whichever font loaded — the same rule gave 620px with Inter and 821px with a fallback | Fixed `rem` measures, identical everywhere |
| Banner-scale section headings | `clamp(25px, 3vw, 36px)` on every section | 27px document scale with a hairline rule between sections |
| Navigation at content weight | 24–30 tile links interleaved between text sections | Grouped after the document in quieter "explore" bands |
| Glass surfaces behind body copy | Translucent panels and backdrop blur over a tinted fixed gradient | Opaque surfaces inside documents; the glass system is kept for landing bands |

Structural changes: a new `src/components/Doc.jsx` wraps a run of sections and
builds the rail from the sections that actually render — never linking to one
that does not. Where a page is a single long section, which every exam resource
page is, it indexes that section's block sub-headings instead; those headings
gained stable, de-duplicated anchor ids in `src/components/Blocks.jsx`. Two
study topics carrying a section id of `practice` collided with the practice
block at the foot of every topic page and were renamed. Exam guides now open
with their durable facts as an answer-first summary under the hero, replacing
the "in brief" band that previously sat several hundred words down the page.

Verified in a headless browser at 1280px and 390px across the home page, a
category hub, a subject hub, a study topic, an exam guide, an exam resource
page, a state exam page, a mock test and a policy page: no horizontal overflow
at either width, exactly one `<h1>` per page, a 624px reading column on desktop
and 342px on a phone, no console errors and no failed requests. Across the
built site, all 559 contents rails resolve to an element that exists — zero
broken anchors — and no page has a duplicate id inside `<main>`.

Affected implementation files are listed by `git status`; the primary route/content files are `src/lib/routes.js`, `src/data/hubs.js`, `src/data/site.js`, `src/data/nav.js`, `src/data/states.js`, `src/data/articles.js`, `src/pages/ExamDetail.jsx`, `src/pages/StateExams.jsx`, `src/pages/MockTests.jsx`, `src/pages/MockTest.jsx`, `src/pages/Static.jsx`, `src/pages/Courses.jsx`, `src/pages/CurrentAffairs.jsx`, `src/pages/PreviousYearPapers.jsx`, `src/pages/StudyMaterial.jsx`, `src/components/Footer.jsx`, `src/components/Layout.jsx`, `scripts/prerender.mjs`, `scripts/generate-sitemap.mjs`, `scripts/audit-seo.mjs`, `scripts/audit-content.mjs`, `nginx.conf` and `public/_redirects`.

## 10. Search Console and analytics requirements

No Search Console or conversion exports were available. Supply the following without applying filters that hide zero-click rows:

- Search results Performance export for last 16 months, last three months, preceding three months and year-over-year comparable dates.
- Dimensions: query, page, country, device, date and search appearance; metrics: clicks, impressions, CTR and average position.
- Separate web, image, video and news search types where data exists.
- Page Indexing export with reason, source sitemap, last crawl and canonical information.
- Core Web Vitals mobile and desktop URL groups.
- Manual Actions, Security Issues, Sitemaps and Links reports.
- GA4 landing page/session/conversion export joined to registration, test start, test completion, lead and purchase events.
- Business definitions for qualified registration, lead, purchase and returning user.

Search Console’s default Performance view covers three months and supports query, page, country, device and appearance analysis; query tables can omit anonymised or lower-volume rows, so bulk export is preferable where available.^11 The opportunity model should score positions 4–20, high-impression/low-CTR pages, declining queries, wrong-page impressions and conversion value—not search volume alone.

### Measurement dashboard specification

| Layer | Metrics | Breakdowns | Cadence |
|---|---|---|---|
| Visibility | Impressions, clicks, CTR, average position | Brand/non-brand, query cluster, page, country, device, appearance | Weekly and 28-day trend |
| Indexation | Submitted, indexed, excluded, crawled-not-indexed | Sitemap, template, canonical state, status code | Weekly |
| Experience | LCP, INP, CLS pass rate; JS bytes | Mobile/desktop, template, 75th percentile | Weekly after releases, monthly otherwise |
| Engagement | Organic landing sessions, engaged sessions, return rate | Cluster, page type, language, device | Weekly |
| Conversion | Registration, test start, test completion, lead, purchase | Landing page, query cluster, exam, new/returning | Weekly |
| Content quality | Corrections, stale-source reviews, broken links, unsupported-claim flags | Owner, template, severity | Every release |
| AI visibility | Cited/linked observations from controlled prompt set | Engine, prompt family, cited URL, date, reproducibility | Monthly; directional only |

AI citation tracking should be treated as sampled observational data, not a deterministic rank tracker. Record prompt, location/account state, date, output link and repeated runs.

## 11. Roadmap

### First 30 days

- Deploy the repository and verify one-hop redirects for HTTP and `www`, plus a real 404 for invented paths.
- Submit the regenerated sitemap in Search Console and Bing Webmaster Tools.
- Export the private datasets listed above and build the query-to-page opportunity table.
- Verify the top 20 landing pages against their current official notifications; record notification URL, cycle, reviewer and substantive review date.
- Confirm ownership and acceptable use of `support@brollyexamprep.com`, the Brolly Academy relationship and any official social accounts before linking them.
- Measure PageSpeed Insights and field Core Web Vitals on homepage, exam pillar, study lesson and mock-test templates.

### Days 31–90

- Rewrite priority pages based on actual positions 4–20 and CTR evidence.
- Add official paper/archive links to SSC CGL, IBPS PO, SBI PO, RRB NTPC, UPSC CSE and Bihar pages.
- Build the negative-marking calculator and its test suite.
- Build the first reproducible SSC CGL topic-frequency dataset with methodology and downloadable CSV.
- Plan the bundle reduction: route-specific data payloads or streaming/static generation that safely supports code splitting.
- Add real author/reviewer profiles only after identity, qualifications and consent are documented.

### Months 4–6

- Expand original research into one banking and one railway exam if the SSC asset earns links or assisted conversions.
- Launch a small native-Hindi pilot for one hub, one exam pillar and supporting lessons; add reciprocal hreflang only after parity checks.
- Add an official-notification change tracker for the exam cluster with the strongest organic demand.
- Develop editorial partnerships and legitimate citations to research assets; do not buy links or manufacture mentions.
- Consolidate or noindex pages that Search Console shows as persistently wrong-intent or unindexed after content review.

## 12. Remaining dependencies and risks

1. **Deployment required:** local redirect and 404 fixes do not change live responses until deployed.
2. **Search Console/GA4 unavailable:** prioritisation is provisional; no position, CTR, decline or conversion claim is made.
3. **Current-cycle editorial verification:** detailed exam statements still need source-version review at priority order.
4. **Bundle size:** 1.17 MB gzip JavaScript remains a material performance warning.
5. **External sources:** 26 of 28 rendered external links returned HTTP 200 in the automated check. `brollyacademy.com` and the old KEA host timed out via curl; Brolly Academy was independently discoverable in current web search, and the KEA link was updated to the current Karnataka government portal. Recheck after the final deploy.
6. **No production deployment or account mutation:** DNS, Search Console, Bing, IndexNow and analytics accounts were not modified.
7. **No ranking guarantee:** top-three and number-one outcomes depend on competition, demand, content evidence, authority, product usefulness and search-system decisions outside the repository.

## Sources

1. Google Search Central. “[Google Search Essentials](https://developers.google.com/search/docs/essentials).” Updated 10 December 2025.
2. Google Search Central. “[SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).” Accessed 9 September 2026.
3. Google Search Central. “[Creating Helpful, Reliable, People-First Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).” Updated 10 December 2025.
4. Google Search Central. “[Optimizing Your Website for Generative AI Features on Google Search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide).” Accessed 9 September 2026.
5. Google Search Central. “[Spam Policies for Google Web Search](https://developers.google.com/search/docs/essentials/spam-policies).” Accessed 9 September 2026.
6. Google Search Central. “[Guidance on Using Generative AI Content on Your Website](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content).” Updated 10 December 2025.
7. Google Search Central. “[General Structured Data Guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).” Accessed 9 September 2026.
8. Google Search Central. “[Understand JavaScript SEO Basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).” Accessed 9 September 2026.
9. Google Search Central. “[Image SEO Best Practices](https://developers.google.com/search/docs/appearance/google-images)” and “[Video SEO Best Practices](https://developers.google.com/search/docs/appearance/video).” Accessed 9 September 2026.
10. web.dev. “[Web Vitals](https://web.dev/articles/vitals).” Accessed 9 September 2026.
11. Google Search Console Help. “[Performance Report: Overview and Basic Setup](https://support.google.com/webmasters/answer/7576553?hl=en)” and “[Dimensions and Data Groupings](https://support.google.com/webmasters/answer/17011259?hl=en).” Accessed 9 September 2026.
12. Google Search Console Help. “[Page Indexing Report](https://support.google.com/webmasters/answer/7440203?hl=en).” Accessed 9 September 2026.
13. Bing Webmaster Tools. “[IndexNow](https://www.bing.com/webmasters/help/indexnow-0z209wby).” Accessed 9 September 2026.
14. Schema.org. “[Schema.org Vocabulary](https://schema.org/).” Accessed 9 September 2026.
15. Testbook. “[Testbook](https://testbook.com/).” Accessed 9 September 2026.
16. Oliveboard. “[Online Mock Test Series](https://www.oliveboard.in/test-series/).” Accessed 9 September 2026.
17. Adda247. “[Adda247](https://www.adda247.com/).” Accessed 9 September 2026.
18. Physics Wallah. “[PW](https://www.pw.live/).” Accessed 9 September 2026.
19. MockSutra. “[Free Mock Tests for Indian Government Exams](https://www.mocksutra.com/).” Accessed 9 September 2026.
20. ParikshaPDF. “[Government Exam Mock Tests, Previous Papers and Notes](https://www.parikshapdf.com/en).” Accessed 9 September 2026.
21. ExamRocket. “[Free SSC CGL Study Material and Practice](https://examrocket.in/ssc-cgl/free).” Accessed 9 September 2026.
22. AglaSem. “[SSC CGL Mock Tests](https://mocktest.aglasem.com/exam/ssc-cgl).” Accessed 9 September 2026.
23. Bihar Public Service Commission. “[BPSC](https://bpsc.bihar.gov.in/).” Accessed 9 September 2026.

