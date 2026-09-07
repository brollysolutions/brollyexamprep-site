/**
 * Server entry, used only by scripts/prerender.mjs.
 *
 * The browser entry (main.jsx) hydrates whatever this produced, so both sides
 * render the same component tree from the same data. The one difference is
 * that effects never run here, which is why the SEO hooks record into
 * headRegistry while they render — see src/lib/seo.js.
 */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { headRegistry } from './lib/seo'

/** Renders one route and returns its markup along with the head it asked for. */
export function render(url) {
  headRegistry.reset()

  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )

  return { html, head: headRegistry.resolve() }
}

export { allRoutes, prerenderRoutes } from './lib/routes'
