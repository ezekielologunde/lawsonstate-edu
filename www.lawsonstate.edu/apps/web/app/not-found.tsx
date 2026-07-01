import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative px-6 overflow-hidden flex items-end"
          style={{ background: 'oklch(0.13 0.12 261)', minHeight: '70vh', paddingTop: '8rem', paddingBottom: '4rem' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: 'radial-gradient(ellipse 60% 60% at 70% 40%, oklch(0.42 0.17 261 / 0.4) 0%, transparent 70%)' }}
          />
          <div className="relative max-w-7xl mx-auto w-full">
            <p
              className="font-display font-black select-none"
              aria-hidden="true"
              style={{ fontSize: 'clamp(6rem, 20vw, 14rem)', lineHeight: 1, color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.04em', opacity: 0.15, marginBottom: '-1.5rem' }}
            >
              404
            </p>
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
                Page Not Found
              </p>
              <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)', letterSpacing: '-0.025em' }}>
                THAT PAGE DOESN'T EXIST
              </h1>
              <p style={{ fontSize: '1.08rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '48ch', lineHeight: 1.7 }}>
                The link may have moved or been removed. Start from the homepage or contact us if you think something's wrong.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="/"
                  className="press btn-shimmer inline-block font-bold px-6 py-3 rounded-lg"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
                >
                  Go to Homepage →
                </Link>
                <Link
                  href="/contact"
                  className="press inline-block font-semibold px-6 py-3 rounded-lg"
                  style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', color: 'white', fontSize: '1rem' }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <p className="font-display font-semibold uppercase mb-8" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>
              Where would you like to go?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Apply Now',      href: '/admissions',    desc: 'Start your application' },
                { label: 'Programs',       href: '/academics',     desc: 'Degrees & certificates' },
                { label: 'Financial Aid',  href: '/financial-aid', desc: 'Scholarships & FAFSA' },
                { label: 'Campus Life',    href: '/campus-life',   desc: 'Student activities & support' },
              ].map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="card-lift press rounded-2xl p-5 block"
                  style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
                >
                  <div className="font-display font-bold mb-1" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{item.label}</div>
                  <div style={{ fontSize: '0.88rem', color: 'oklch(0.50 0.03 261)' }}>{item.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
