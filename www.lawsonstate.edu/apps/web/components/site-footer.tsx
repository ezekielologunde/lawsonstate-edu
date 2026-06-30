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
    { label: 'Financial Data', href: '/about/financial-data' },
    { label: 'Disclosures', href: '/about/disclosures' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

const INK   = 'white'
const BODY  = 'oklch(1 0 0 / 0.70)'
const MUTE  = 'var(--lscc-muted-on-dark)'
const LINE  = 'oklch(1 0 0 / 0.10)'

export default function SiteFooter() {
  return (
    <footer style={{ background: 'oklch(0.19 0.09 263)' }}>
      {/* Newsletter section */}
      <div className="border-b" style={{ borderColor: LINE }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <NewsletterSignup />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Logo + social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
          <div>
            <div
              className="font-display font-black tracking-wide mb-1"
              style={{ fontSize: '1.5rem', color: INK }}
            >
              LAWSON STATE
            </div>
            <div className="uppercase" style={{ fontSize: '0.625rem', letterSpacing: '0.3em', color: MUTE }}>
              Community College
            </div>
          </div>
          <div className="flex gap-6">
            {(['Facebook', 'Instagram', 'X', 'YouTube'] as const).map((name) => (
              <a
                key={name}
                href={`https://${name.toLowerCase().replace('x', 'twitter')}.com/lawsonstate`}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="text-xs font-medium transition-colors hover:opacity-60"
                style={{ color: BODY }}
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Campus addresses */}
        <div
          className="grid md:grid-cols-2 gap-8 mb-14 pb-12"
          style={{ borderBottom: `1px solid ${LINE}` }}
        >
          {[
            {
              label: 'Birmingham Campus',
              address: '3060 Wilson Road SW',
              city: 'Birmingham, Alabama 35221',
              phone: '205.925.2515',
              tel: '+12059252515',
            },
            {
              label: 'Bessemer Campus',
              address: '1100 Ninth Avenue SW',
              city: 'Bessemer, Alabama 35022',
              phone: '205.424.5119',
              tel: '+12054245119',
            },
          ].map((campus) => (
            <div key={campus.label}>
              <div
                className="font-semibold uppercase mb-3"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', color: MUTE }}
              >
                {campus.label}
              </div>
              <address className="not-italic text-sm leading-relaxed" style={{ color: BODY }}>
                {campus.address}
                <br />
                {campus.city}
                <br />
                <a href={`tel:${campus.tel}`} className="transition-colors hover:opacity-60" style={{ color: INK, fontWeight: 600 }}>
                  {campus.phone}
                </a>
                <br />
                Monday – Friday · 8 AM – 5 PM
              </address>
            </div>
          ))}
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                className="font-semibold uppercase mb-4"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', color: MUTE }}
              >
                {category}
              </div>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:opacity-60"
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

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs"
          style={{ borderTop: `1px solid ${LINE}`, color: MUTE }}
        >
          <p>© 2026 Lawson State Community College. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { label: 'Privacy Policy', href: '/about/privacy' },
              { label: 'Accessibility', href: '/about/accessibility' },
              { label: 'Title IX', href: '/about/title-ix' },
              { label: 'Title III', href: '/about/title-iii' },
              { label: 'Non-Discrimination', href: '/about/non-discrimination' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="transition-colors hover:opacity-60" style={{ color: MUTE }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
