import { NAV } from '@/components/nav-data'
import { SAMPLE_PROGRAMS } from './programs-data'

export type SearchEntry = {
  url: string
  page_title: string
  meta_description: string | null
  category: string
}

// Top-level nav label -> search category. Keeps the dropdown's category
// pill aligned with the section a result actually lives under.
const NAV_CATEGORY: Record<string, string> = {
  Programs:           'program',
  'Admissions & Aid': 'admissions',
  Students:           'student-services',
  'Campus Life':      'campus-life',
  About:              'about',
}

// Pages that exist (compliance, legal, institutional disclosures) but live
// only in the footer, not in the primary nav mega-menus.
const SUPPLEMENTAL_ENTRIES: SearchEntry[] = [
  { url: '/about/privacy',             page_title: 'Privacy Policy',                meta_description: 'How Lawson State collects and uses your information.', category: 'legal' },
  { url: '/about/accessibility',       page_title: 'Accessibility Statement',       meta_description: 'Our commitment to digital accessibility (WCAG).',       category: 'legal' },
  { url: '/about/title-ix',            page_title: 'Title IX',                      meta_description: 'Sexual misconduct policy, reporting, and resources.',   category: 'legal' },
  { url: '/about/title-iii',           page_title: 'Title III',                     meta_description: 'Strengthening Institutions Program grant information.', category: 'legal' },
  { url: '/about/non-discrimination',  page_title: 'Non-Discrimination Policy',     meta_description: 'Equal opportunity and non-discrimination statement.',   category: 'legal' },
  { url: '/about/accreditation',       page_title: 'Accreditation',                 meta_description: 'SACSCOC and program-level accreditation details.',     category: 'about' },
  { url: '/about/facts',               page_title: 'Facts & Data',                  meta_description: 'Enrollment, graduation rate, institutional facts, and financial transparency.', category: 'about' },
  { url: '/about/disclosures',         page_title: 'Disclosures',                   meta_description: 'Consumer information and federally required disclosures.', category: 'legal' },
  { url: '/about/consumer-information', page_title: 'Consumer Information',          meta_description: 'Federally required disclosures, accreditation, and student right-to-know.', category: 'legal' },
  { url: '/about/faculty',             page_title: 'Faculty & Staff Directory',     meta_description: 'Find contacts by office and division.',                category: 'faculty' },
  { url: '/about/president',           page_title: 'Meet the President',            meta_description: 'A message from Dr. Cynthia T. Anthony, President of Lawson State.', category: 'about' },
  { url: '/about/administrative-services', page_title: 'Administrative Services',    meta_description: 'HR, Business Office, Campus Police, IT, PR, and Records offices.', category: 'about' },
  { url: '/about/human-resources',     page_title: 'Human Resources',               meta_description: 'Employment, benefits, payroll, and HR contact information.',   category: 'about' },
  { url: '/about/public-relations',    page_title: 'Public Relations & Community Affairs', meta_description: 'Media inquiries, news, events, and community engagement.', category: 'about' },
  { url: '/news',                      page_title: 'News & Stories',                meta_description: 'Latest announcements and stories from Lawson State.', category: 'news' },
  { url: '/calendar',                  page_title: 'Events Calendar',               meta_description: 'Upcoming orientations, workshops, and ceremonies.',    category: 'event' },
  { url: '/careers',                   page_title: 'Career Opportunities',          meta_description: 'Open faculty, staff, and administrative positions.',   category: 'about' },
  { url: '/contact',                   page_title: 'Contact & Hours',               meta_description: 'Campus addresses, phone numbers, and office hours.',   category: 'about' },
]

function flattenNav(): SearchEntry[] {
  const entries: SearchEntry[] = []
  for (const item of NAV) {
    const category = NAV_CATEGORY[item.label] ?? 'about'
    if (!item.mega) continue
    for (const group of item.mega) {
      for (const sub of group.items) {
        if (sub.external) continue // skip MyLawson/Canvas/webmail — not site pages
        entries.push({
          url: sub.href,
          page_title: sub.label,
          meta_description: sub.note ?? null,
          category,
        })
      }
    }
  }
  return entries
}

function flattenPrograms(): SearchEntry[] {
  return SAMPLE_PROGRAMS.map((p) => ({
    url: p.href,
    page_title: p.name,
    meta_description: p.description,
    category: 'program',
  }))
}

let _index: SearchEntry[] | null = null

/** Lazily-built, in-memory search index sourced from real site data —
 *  the nav structure, the program catalog, and footer-only legal pages.
 *  No DB round-trip, nothing to keep populated. */
export function getSearchIndex(): SearchEntry[] {
  if (_index) return _index
  const seen = new Set<string>()
  const all = [...flattenNav(), ...SUPPLEMENTAL_ENTRIES, ...flattenPrograms()]
  _index = all.filter((e) => {
    if (seen.has(e.url)) return false
    seen.add(e.url)
    return true
  })
  return _index
}

export function searchIndex(query: string, limit = 8): SearchEntry[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []

  const scored = getSearchIndex()
    .map((entry) => {
      const title = entry.page_title.toLowerCase()
      const desc = (entry.meta_description ?? '').toLowerCase()
      let score = 0
      if (title === q) score += 100
      else if (title.startsWith(q)) score += 60
      else if (title.includes(q)) score += 35
      if (desc.includes(q)) score += 10
      return { entry, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.slice(0, limit).map((r) => r.entry)
}
