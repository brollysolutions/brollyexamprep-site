# Brolly Exam Prep — React

The `index (2).html` single-page site rebuilt as a Vite + React + React Router
application with real, separately-routed pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the production build
```

## Layout

```
public/                 brolly-icon.svg, brolly-logo.svg, brolly-logo-light.svg
src/
  main.jsx              entry — mounts <BrowserRouter><App/></BrowserRouter>
  App.jsx               every route in one file
  styles/
    global.css          the original stylesheet, extracted verbatim
    pages.css           styles added for the React-only pieces
  data/
    nav.js              the whole primary navigation as one tree
    site.js             homepage + inner page content
  lib/labels.js         slug → heading helpers (acronyms, "View All …" cleanup)
  components/           Layout, Header, Footer, MobileDrawer, SearchOverlay,
                        Logo, Icon, LinkColumns, ui.jsx (SectionHead, Tile,
                        Breadcrumbs, PageHero, useTitle)
  pages/
    Home.jsx            composes the 19 homepage sections
    home/Hero.jsx       hero + exam autocomplete
    home/sections.jsx   all 19 sections, each exported and reusable
    …                   one file per destination, plus Directory.jsx
```

## Pages

Hand-built: Home, Government Exams, Entrance Exams, Study Material, Practice,
Current Affairs, Exam Updates, Mock Tests (`/mock-tests/` and
`/mock-tests/free/`), Previous Year Papers, Courses, Blog + post, Login,
Register, Search, About, Contact, Careers, Faculty, Success Stories, the four
legal pages, and a 404.

Generated from the nav tree:

- `ExamDetail` — `/government-exams/:category/:exam/` and
  `/entrance-exams/:category/:exam/`, plus the six resource sub-pages
  (`syllabus`, `exam-pattern`, `previous-year-papers`, `mock-tests`,
  `preparation`, `study-material`).
- `Directory` — every remaining nav path (category listings, subject pages,
  update types), assembled from `data/nav.js` so no menu link is a dead end.

Adding a link to `src/data/nav.js` puts it in the desktop mega menu, the mobile
drawer, the site search and its own directory page at once.

## Data and CMS

Copy lives in `src/data/`. The exam pages carry a marked CMS slot
(`.cms-slot`) — bind it to your exam record and render the body there; the
route, breadcrumbs, heading hierarchy, internal links and FAQ scaffolding are
already generated.

Two blocks are deliberately unfinished, as they were in the original HTML:

- **Success stories** are template records, not real testimonials. Replace them
  with verified, consented ones before publishing, or drop the section.
- **Faculty** is listed by subject rather than by name. Add real educator
  records as they are verified.

The login, register and contact forms are front-end shells — they post nowhere
until you wire them up.

## Logo

The original markup referenced `brolly-logo.png` and `brolly-logo-light.png`,
neither of which was in the folder. The build ships a real logo instead: an
umbrella mark in the brand yellow with a "Brolly / EXAM PREP" wordmark.

- `src/components/Logo.jsx` — inline SVG, used in the header, footer, drawer
  and account pages. `variant="light"` swaps the wordmark to white for dark
  backgrounds; `<LogoMark />` is the badge on its own.
- `public/brolly-icon.svg` — favicon and square/app icon.
- `public/brolly-logo.svg` / `brolly-logo-light.svg` — standalone files for
  Open Graph, email signatures and anywhere outside React.

Because the mark is inline SVG reading `var(--brolly-yellow)` and `var(--ink)`,
recolouring the brand in `global.css` recolours the logo too.

## Deploying

It is a client-routed SPA, so the host must serve `index.html` for unknown
paths. `public/_redirects` covers Netlify. Equivalents:

- **Vercel** — `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
- **Apache** — `FallbackResource /index.html`
- **nginx** — `try_files $uri $uri/ /index.html;`

Without that rule, deep links such as `/government-exams/ssc/ssc-cgl/` will
404 on refresh.
