import { Link } from 'react-router-dom'

/**
 * Brolly Exam Preparation logo.
 *
 * Two renderings of the one artwork, so the lockup stays legible on either
 * surface: the supplied yellow-on-dark wordmark for dark backgrounds, and an
 * ink wordmark (umbrella kept in gold) for the white header and page bodies.
 *
 * variant: 'dark'  → ink wordmark (header, light backgrounds)
 *          'light' → yellow wordmark (footer, dark backgrounds)
 * mode:    'full'  → the umbrella + wordmark lockup
 *          'mark'  → the umbrella badge only
 *
 * size is the rendered height of the lockup in pixels.
 */
const WORDMARK = {
  dark: '/brolly-wordmark-ink.png',
  light: '/brolly-wordmark.png',
}

// Intrinsic size of the artwork — given to the browser so the header never
// reflows while the image loads.
const RATIO = 754 / 134

export function LogoMark({ size = 40 }) {
  return (
    <img
      className="logo__mark"
      src="/brolly-icon.png"
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  )
}

export default function Logo({ variant = 'dark', mode = 'full', size = 36, className = '' }) {
  if (mode === 'mark') {
    return (
      <span className={`logo logo--${variant} ${className}`.trim()}>
        <LogoMark size={size} />
      </span>
    )
  }

  return (
    <span className={`logo logo--${variant} ${className}`.trim()}>
      <img
        className="logo__img"
        src={WORDMARK[variant] || WORDMARK.dark}
        width={Math.round(size * RATIO)}
        height={size}
        style={{ height: size }}
        alt="Brolly Exam Preparation"
        decoding="async"
        fetchpriority="high"
      />
    </span>
  )
}

/** Logo wrapped in a link back to the homepage. */
export function LogoLink({ variant = 'dark', size = 36, onClick }) {
  return (
    <Link
      to="/"
      className="brand"
      aria-label="Brolly Exam Preparation — competitive exam preparation home"
      onClick={onClick}
    >
      <Logo variant={variant} size={size} />
    </Link>
  )
}
