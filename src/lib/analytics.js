/**
 * Google Analytics 4 helpers.
 *
 * The gtag.js loader lives in index.html with send_page_view disabled, because
 * routing here is client-side: the browser loads one document and React Router
 * swaps the page underneath it. Page views are therefore sent from here, after
 * the route's own effects have set document.title.
 */

const MEASUREMENT_ID = 'G-W7PDDE6X73'

function gtag(...args) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag(...args)
}

/** Sends one page_view for the current route. */
export function trackPageView(path, title = document.title) {
  gtag('event', 'page_view', {
    send_to: MEASUREMENT_ID,
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  })
}

/** Sends a custom event, e.g. trackEvent('start_mock_test', { exam: 'ssc-cgl' }). */
export function trackEvent(name, params = {}) {
  gtag('event', name, { send_to: MEASUREMENT_ID, ...params })
}
