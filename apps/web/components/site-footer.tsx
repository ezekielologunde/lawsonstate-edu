import Link from 'next/link'

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Academics: [
    { label: 'Programs & Degrees', href: '/academics' },
    { label: 'Departments', href: '/academics/departments' },
    { label: 'Academic Calendar', href: '/calendar' },
    { label: 'Library', href: '/library' },
  ],
  Admissions: [
    { label: 'Apply Now', href: '/admissions/apply' },
    { label: 'Financial Aid', href: '/financial-aid' },
    { label: 'Tuition & Fees', href: '/admissions/tuition' },
    { label: 'Visit Campus', href: '/visit' },
  ],
  'Student Services': [
    { label: 'Campus Life', href: '/campus-life' },
    { label: 'Student Portal', href: 'https://my.lawsonstate.edu' },
    { label: 'Advising', href: '/campus-life#support' },
    { label: 'Career Services', href: '/campus-life#career' },
  ],
  Institution: [
    { label: 'About Lawson State', href: '/about' },
    { label: 'Faculty & Staff', href: '/directory' },
    { label: 'News & Events', href: '/news' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function SiteFooter() {
  return (
    <footer style={{ background: 'oklch(0.14 0.08 265)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Logo + social */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
          <div>
            <div
              className="font-display font-black text-white tracking-wide mb-1"
              style={{ fontSize: '1.5rem' }}
            >
              LAWSON STATE
            </div>
            <div className="text-white/35 uppercase" style={{ fontSize: '0.625rem', letterSpacing: '0.3em' }}>
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
                className="text-xs font-medium text-white/35 hover:text-white transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Campus addresses */}
        <div
          className="grid md:grid-cols-2 gap-8 mb-14 pb-12"
          style={{ borderBottom: '1px solid oklch(1 0 0 / 0.08)' }}
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
                className="text-white/35 font-semibold uppercase mb-3"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.15em' }}
              >
                {campus.label}
              </div>
              <address className="not-italic text-white/60 text-sm leading-relaxed">
                {campus.address}
                <br />
                {campus.city}
                <br />
                <a href={`tel:${campus.tel}`} className="hover:text-white transition-colors">
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
                className="text-white/35 font-semibold uppercase mb-4"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.15em' }}
              >
                {category}
              </div>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
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
          className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/30"
          style={{ borderTop: '1px solid oklch(1 0 0 / 0.08)' }}
        >
          <p>© 2026 Lawson State Community College. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Accessibility', href: '/accessibility' },
              { label: 'Title IX', href: '/title-ix' },
              { label: 'Non-Discrimination', href: '/non-discrimination' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
