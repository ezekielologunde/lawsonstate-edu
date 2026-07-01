import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Public Relations & Community Affairs | Lawson State',
  description:
    'The Office of Public Relations and Community Affairs at Lawson State Community College — media inquiries, news, events, and community engagement.',
}

const SERVICES = [
  { title: 'Media Inquiries', desc: 'Press requests, interviews, statements, and expert sources — coordinated through the PR office.' },
  { title: 'News & Announcements', desc: 'Institutional news, student and faculty achievements, and official college communications.' },
  { title: 'Events & Community', desc: 'Community engagement, campus events, and expressive-activity coordination with Campus Police.' },
  { title: 'Brand & Publications', desc: 'College branding, publications, and official use of the Lawson State name and marks.' },
]

export default function PublicRelationsPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://www.lawsonstate.edu/_resources/images/.private_ldp/a419727/production/thumb/e0c90553-0514-4423-bd52-358b0c366371.jpeg" alt="A Lawson State community event" position="center 30%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Public Relations</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Public Relations & Community Affairs
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            PUBLIC RELATIONS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '58ch', lineHeight: 1.7 }}>
            The Office of Public Relations and Community Affairs tells the Lawson State story — handling media inquiries, news, events, and the college’s connection to the communities it serves.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/news" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              News & Stories
            </Link>
            <a href="mailto:pr@lawsonstate.edu" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Media Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>How We Can Help</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT WE DO</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-display font-black mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.02em' }}>Working on a story?</h2>
            <p className="mb-5" style={{ fontSize: '0.96rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.7, maxWidth: '52ch' }}>
              Members of the media can reach the Office of Public Relations and Community Affairs for interviews, statements, photos, and campus access.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:pr@lawsonstate.edu" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
                Email the PR Office →
              </a>
              <Link href="/contact" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)', fontSize: '0.95rem' }}>
                College Contacts →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.72rem', letterSpacing: '0.18em' }}>Explore</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: 'News & Stories', href: '/news' },
                { label: 'Events Calendar', href: '/calendar' },
                { label: 'Facts & Data', href: '/about/facts' },
                { label: 'Administrative Services', href: '/about/administrative-services' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="inline-flex items-center font-semibold hover:underline" style={{ color: 'oklch(0.30 0.12 263)' }}>
                    <span aria-hidden style={{ color: 'oklch(0.79 0.19 78)', marginRight: '0.4rem' }}>→</span>{l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
