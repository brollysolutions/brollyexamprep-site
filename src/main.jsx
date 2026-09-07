import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import './styles/pages.css'

const container = document.getElementById('root')

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

/*
 * The build prerenders every indexable route to a static HTML file, so the
 * container usually already holds markup that React only has to adopt.
 * Hydrating keeps that first paint on screen instead of throwing it away and
 * rebuilding the page. `vite dev` serves an empty shell, and so does any URL
 * the prerender skipped, so fall back to a normal client render there.
 */
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
