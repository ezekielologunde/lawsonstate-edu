import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const NEARBY = [
  { name: 'Reserve at Riverchase', distance: '~3.5 mi from Birmingham Campus', amenities: ['Student-friendly leasing', 'Bus route access', 'Furnished options'] },
  { name: 'University Gardens Apartments', distance: '~2 mi from Birmingham Campus', amenities: ['Monthly & semester leases', 'Utilities included options', 'On-site laundry'] },
  { name: 'Ridgeview at Bessemer', distance: '~1.5 mi from Bessemer Campus', amenities: ['Affordable rates', 'Pet-friendly options', 'Short-term leases'] },
]

const RESOURCES = [
  { label: '211 Alabama', desc: 'Free housing assistance referrals, rental help, and emergency shelter — available 24/7.', href: 'https://www.211connects.org', external: true },
  { label: 'Jefferson County Emergency Services', desc: 'Emergency rental assistance and utility help for Jefferson County residents.', href: 'https://www.jeffcointouch.com', external: true },
  { label: 'Cougar Pantry', desc: 'On-campus food assistance — free, no questions asked. Available while housing is being secured.', href: '/student-resources/health', external: false },
  { label: 'Counseling Services', desc: 'Free confidential counseling for students navigating housing stress or instability.', href: '/student-resources/health', external: false },
]

const TIPS = [
  { n: '01', title: 'Start Early', body: 'Begin your housing search at least 60 days before the semester starts. The best affordable units near campus fill quickly in July and December.' },
  { n: '02', title: 'Verify Lease Dates', body: 'Make sure your lease start and end dates align with the academic calendar. Ask about early move-in and short-term lease options.' },
  { n: '03', title: 'Budget Realistically', body: 'Factor in utilities, renters insurance, and transportation costs — not just rent. Financial aid may cover off-campus housing costs through housing stipends.' },
  { n: '04', title: 'Explore Aid Stipends', body: 'If your financial aid exceeds tuition, the balance may be disbursed to you for living expenses. Check with Financial Aid about estimated cost-of-attendance budgets.' },
]

export default function HousingPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/campus-life" className="hover:text-white transition-colors">Campus Life</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Housing & Residential</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Off-Campus · Community Resources
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            HOUSING & RESIDENTIAL
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '54ch', lineHeight: 1.7 }}>
            Lawson State does not currently operate on-campus dormitories. We partner with community resources and provide guidance to help students find safe, affordable housing near both campuses.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/financial-aid" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              Housing Aid Stipends
            </Link>
            <Link href="/contact" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Talk to an Advisor →
            </Link>
          </div>
        </div>
      </section>

      {/* No on-campus housing notice */}
      <div style={{ background: 'oklch(0.79 0.19 78 / 0.12)', borderBottom: '1px solid oklch(0.79 0.19 78 / 0.25)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p style={{ fontSize: '0.9rem', color: 'oklch(0.30 0.08 261)', lineHeight: 1.65 }}>
            <strong>No On-Campus Dormitories:</strong> Lawson State Community College does not operate student residence halls. The information below helps students locate off-campus housing and community support resources near our Birmingham and Bessemer campuses.
          </p>
        </div>
      </div>

      {/* Tips */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Finding a Place</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOUSING TIPS FOR STUDENTS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIPS.map((t) => (
              <div key={t.n}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{t.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{t.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby communities */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Near Campus</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>COMMUNITIES NEAR LAWSON STATE</h2>
            <p className="mt-2 text-sm" style={{ color: 'oklch(0.55 0.04 261)' }}>Note: Lawson State does not endorse or have affiliations with these properties. Listings are provided for informational purposes only. Verify availability and terms directly with each property.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {NEARBY.map((n) => (
              <div key={n.name} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.05)' }}>
                <p className="font-display font-black mb-1" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{n.name}</p>
                <p className="text-xs mb-3" style={{ color: 'oklch(0.55 0.04 261)' }}>{n.distance}</p>
                <ul className="flex flex-col gap-1.5">
                  {n.amenities.map((a) => (
                    <li key={a} className="flex gap-2 text-sm" style={{ color: 'oklch(0.42 0.04 261)' }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0 }}>›</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community resources */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Need Help?</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOUSING ASSISTANCE RESOURCES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {RESOURCES.map((r) => {
              const Tag = r.external ? 'a' : Link
              const props = r.external ? { href: r.href, target: '_blank' as const, rel: 'noopener noreferrer' } : { href: r.href }
              return (
                <Tag key={r.label} {...(props as any)} className="press flex flex-col gap-2 rounded-2xl p-6 hover:shadow-md transition-shadow" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                  <p className="font-display font-black text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{r.label}</p>
                  <p style={{ fontSize: '0.84rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{r.desc}</p>
                  <span className="text-xs font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    Visit →{r.external && <span className="sr-only"> (opens in new tab)</span>}
                  </span>
                </Tag>
              )
            })}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Housing Instability?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>We can connect you to emergency resources — talk to a counselor today.</p>
          </div>
          <Link href="/student-resources/health" className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
            Student Support Services →
          </Link>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
