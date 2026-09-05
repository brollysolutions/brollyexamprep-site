/** Turning URL slugs and menu labels into headings a reader would write. */

const ACRONYMS = new Set([
  'ssc', 'cgl', 'chsl', 'mts', 'gd', 'cpo', 'je', 'upsc', 'cse', 'capf', 'nda', 'na', 'cds',
  'ifs', 'ibps', 'po', 'sbi', 'rrb', 'rbi', 'csa', 'ntpc', 'alp', 'rpf', 'afcat', 'ctet', 'tet',
  'kvs', 'net', 'ugc', 'csir', 'psc', 'tg', 'ap', 'up', 'cat', 'xat', 'nmat', 'snap', 'cmat',
  'mat', 'gmat', 'gre', 'sat', 'ielts', 'toefl', 'clat', 'ailet', 'jee', 'neet', 'ug', 'pg',
  'gate', 'iit', 'jam', 'cuet', 'bitsat', 'viteee', 'comedk', 'eapcet', 'ini', 'cet', 'psu',
  'pdf', 'varc', 'dilr', 'gk', 'si', 'faq',
  'tgpsc', 'tspsc', 'appsc', 'ts', 'dsc', 'ae', 'aee', 'dao',
  'tn', 'tnpsc', 'tnusrb', 'trb', 'vao', '2a', 'kpsc', 'kas', 'kea', 'psi', 'fda', 'sda', 'gpstr',
  'mpsc', 'tait', 'uppsc', 'upsssc', 'uptet', 'pcs', 'ro', 'aro', 'pet', 'sdm', 'bdo', 'hsc',
])

const LOWERCASE_WORDS = new Set(['and', 'or', 'of', 'the', 'for', 'to', 'in', 'by', 'with'])

/** `ssc-cgl` → `SSC CGL`, `previous-year-papers` → `Previous Year Papers`. */
export function humanise(slug = '') {
  return slug
    .split('-')
    .map((word, i) => {
      const lower = word.toLowerCase()
      if (ACRONYMS.has(lower)) return lower.toUpperCase()
      if (i > 0 && LOWERCASE_WORDS.has(lower)) return lower
      return lower.charAt(0).toUpperCase() + lower.slice(1)
    })
    .join(' ')
}

/**
 * Menu labels are written for a menu ("View All SSC Exams →"), which reads
 * badly as a page heading. Strip the navigational wrapper and, where the
 * group heading is the more precise name, prefer that.
 *
 * Returns a score so the link index can keep the best of several candidates:
 * 0 for a plain label, 1 for one recovered from a "view all" style link.
 */
export function cleanLabel(raw, heading) {
  const text = raw.replace(/\s*→\s*$/, '').trim()
  const match = text.match(/^(?:View All|All|Explore)\s+(.+)$/i)
  if (!match) return { label: text, score: 0 }

  let rest = match[1].replace(/\s+(?:Exams?|Entrances?)$/i, '').trim()
  if (heading && heading.toLowerCase().startsWith(rest.toLowerCase())) rest = heading

  return { label: rest || heading || text, score: 1 }
}
