import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'

const DISCLOSURES = [
  {
    title: 'Net Price Calculator',
    required: 'Higher Education Act § 132(h)',
    desc: 'Federal law requires us to provide a net price calculator to help prospective students estimate their actual cost of attendance after grants and scholarships. Lawson State\'s net price is among the lowest in Alabama.',
    href: 'https://lawsonstate.edu/netpricecalculator',
    label: 'Use Net Price Calculator',
  },
  {
    title: 'Student Right-to-Know',
    required: 'Student Right-to-Know Act (20 U.S.C. § 1092)',
    desc: 'Lawson State is required to disclose information about graduation rates, transfer rates, and the completion or graduation rates of students receiving athletically related student aid.',
    href: 'https://collegenavigator.ed.gov',
    label: 'View on College Navigator',
  },
  {
    title: 'Campus Security (Clery Act)',
    required: 'Jeanne Clery Act (20 U.S.C. § 1092(f))',
    desc: 'We publish an Annual Security Report each October containing three years of campus crime statistics and information about our safety policies and programs.',
    href: '/campus-life/safety',
    label: 'Campus Safety Page',
    internal: true,
  },
  {
    title: 'Drug-Free Schools',
    required: 'Drug-Free Schools and Communities Act',
    desc: 'Lawson State maintains a drug- and alcohol-free campus policy. We provide students and employees annual notification of our drug and alcohol policies and resources.',
    href: '/about',
    label: 'Student Code of Conduct',
    internal: true,
  },
  {
    title: 'Gainful Employment (GE) Disclosures',
    required: 'U.S. Department of Education Regulations',
    desc: 'For certain vocational and certificate programs, federal regulations require us to disclose information about program costs, completion rates, typical debt, and the occupations students may enter.',
    href: 'https://lawsonstate.edu/gainful-employment',
    label: 'View GE Disclosures',
  },
  {
    title: 'Equity in Athletics',
    required: 'Equity in Athletics Disclosure Act (EADA)',
    desc: 'We submit annual data to the U.S. Department of Education on the participation rates, staffing, and revenues and expenses for our men\'s and women\'s athletic programs.',
    href: 'https://ope.ed.gov/athletics',
    label: 'EADA Data on ED.gov',
  },
  {
    title: 'Voter Registration',
    required: 'Higher Education Act § 487(a)(23)',
    desc: 'Lawson State makes good-faith efforts to distribute voter registration information to students enrolled in degree programs. Contact Student Affairs for voter registration resources.',
    href: '/contact',
    label: 'Contact Student Affairs',
    internal: true,
  },
  {
    title: 'Satisfactory Academic Progress (SAP)',
    required: 'Federal Financial Aid Regulations (34 C.F.R. § 668.34)',
    desc: 'To maintain federal financial aid eligibility, students must meet Lawson State\'s Satisfactory Academic Progress standards — including minimum GPA and completion rate requirements.',
    href: '/financial-aid',
    label: 'Financial Aid Information',
    internal: true,
  },
]

export default function DisclosuresPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Disclosures</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Consumer Information · Federal Requirements
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            DISCLOSURES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Federal law requires colleges and universities to provide students, prospective students, and the public with certain consumer information. All required disclosures for Lawson State are provided here.
          </p>
        </div>
      </section>

      {/* Disclosures list */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Required Notices</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>CONSUMER INFORMATION</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {DISCLOSURES.map((d) => (
              <div key={d.title} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <span className="inline-block text-xs font-semibold mb-3 px-2.5 py-0.5 rounded-full" style={{ background: 'oklch(0.22 0.17 261 / 0.07)', color: 'oklch(0.38 0.08 261)', letterSpacing: '0.05em' }}>
                  {d.required}
                </span>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{d.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65, marginBottom: '1rem' }}>{d.desc}</p>
                {d.internal ? (
                  <Link href={d.href} className="inline-flex items-center text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    {d.label} →
                  </Link>
                ) : (
                  <a href={d.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    {d.label} →
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional links */}
      <section className="py-10 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <p className="text-sm mb-4 font-semibold" style={{ color: 'oklch(0.38 0.04 261)' }}>Related Policies</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Privacy Policy', href: '/about/privacy' },
              { label: 'Non-Discrimination Policy', href: '/about/non-discrimination' },
              { label: 'Accessibility Statement', href: '/about/accessibility' },
              { label: 'Title IX', href: '/about/title-ix' },
              { label: 'Financial Aid', href: '/financial-aid' },
            ].map((l) => (
              <Link key={l.label} href={l.href} className="press text-sm font-semibold px-4 py-2 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
