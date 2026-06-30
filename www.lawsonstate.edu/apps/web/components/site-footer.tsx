import Link from 'next/link'
import NewsletterSignup from './newsletter-signup'

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Academics: [
    { label: 'Programs & Degrees', href: '/academics' },
    { label: 'Find Your Program', href: '/programs' },
    { label: 'Academic Calendar', href: '/calendar' },
    { label: 'Library & Resources', href: 'https://lawsonstate.edu/Library' },
  ],
  Admissions: [
    { label: 'Apply Now', href: '/admissions/apply' },
    { label: 'FAFSA Guide', href: '/financial-aid/fafsa' },
    { label: 'Scholarships', href: '/financial-aid/scholarships' },
    { label: 'Financial Aid', href: '/financial-aid' },
    { label: 'Visit Campus', href: '/contact' },
  ],
  'Student Services': [
    { label: 'Student Resources', href: '/student-resources' },
    { label: 'Tutoring & Support', href: '/student-resources/tutoring' },
    { label: 'Career Services', href: '/student-resources/career' },
    { label: 'Transcript Requests', href: '/student-resources/transcripts' },
    { label: 'Graduation Info', href: '/student-resources/graduation' },
  ],
  Institution: [
    { label: 'About Lawson State', href: '/about' },
    { label: 'Career Opportunities', href: '/careers' },
    { label: 'Accreditation', href: '/about/accreditation' },
    { label: 'Facts & Data', href: '/about/facts' },
    { label: 'Disclosures', href: '/about/disclosures' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

const CAMPUSES = [
  { label: 'Birmingham Campus', address: '3060 Wilson Road SW', city: 'Birmingham, AL 35221', phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Bessemer Campus',   address: '1100 Ninth Avenue SW', city: 'Bessemer, AL 35022',  phone: '205.424.5119', tel: '+12054245119' },
]

const SOCIAL = ['Facebook', 'Instagram', 'X', 'YouTube'] as const

const INK  = 'white'
const BODY = 'oklch(1 0 0 / 0.65)'
const MUTE = 'var(--lscc-muted-on-dark)'
const LINE = 'oklch(1 0 0 / 0.09)'

export default function SiteFooter() {
  return (
    <footer style={{ background: 'oklch(0.19 0.09 263)' }}>
      {/* Newsletter */}
      <div className="border-b" style={{ borderColor: LINE }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <NewsletterSignup />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-8">
        {/* Brand + campuses row */}
        <div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8 pb-8"
          style={{ borderBottom: `1px solid ${LINE}` }}
        >
          {/* Brand + social */}
          <div className="shrink-0">
            <div
              className="font-display font-black tracking-wide mb-0.5"
              style={{ fontSize: '1.25rem', color: INK }}
            >
              LAWSON STATE
            </div>
            <div className="uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.3em', color: MUTE }}>
              Community College
            </div>
            <div className="flex gap-5 mt-4">
              {SOCIAL.map((name) => (
                <a
                  key={name}
                  href={`https://${name === 'X' ? 'twitter' : name.toLowerCase()}.com/lawsonstate`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${name} (opens in new tab)`}
                  className="text-xs font-medium transition-opacity hover:opacity-50"
                  style={{ color: BODY }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Campus addresses */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-12">
            {CAMPUSES.map((c) => (
              <div key={c.label}>
                <div
                  className="font-semibold uppercase mb-2"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', color: MUTE }}
                >
                  {c.label}
                </div>
                <address className="not-italic text-sm leading-relaxed" style={{ color: BODY }}>
                  {c.address}<br />
                  {c.city}<br />
                  <a
                    href={`tel:${c.tel}`}
                    className="transition-opacity hover:opacity-60 font-semibold"
                    style={{ color: INK }}
                  >
                    {c.phone}
                  </a><br />
                  Mon – Fri · 8 AM – 5 PM
                </address>
              </div>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                className="font-semibold uppercase mb-3"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', color: MUTE }}
              >
                {category}
              </div>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-opacity hover:opacity-50"
                      style={{ color: BODY }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div
          className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs"
          style={{ borderTop: `1px solid ${LINE}`, color: MUTE }}
        >
          <p>© 2026 Lawson State Community College. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {[
              { label: 'Privacy Policy',    href: '/about/privacy' },
              { label: 'Accessibility',     href: '/about/accessibility' },
              { label: 'Title IX',          href: '/about/title-ix' },
              { label: 'Title III',         href: '/about/title-iii' },
              { label: 'Non-Discrimination',href: '/about/non-discrimination' },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-opacity hover:opacity-60"
                style={{ color: MUTE }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
