import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Library & Learning Commons | Lawson State Community College',
  description:
    'Lawson State Library supports students, faculty, and the community with research databases, print and digital resources, study spaces, and information literacy programs — Birmingham & Bessemer campuses.',
}

const SERVICES = [
  {
    title: 'Research Databases',
    tag: 'Online Access',
    desc: 'Access thousands of peer-reviewed journals, newspapers, e-books, and academic databases — free for all enrolled students, staff, and faculty. Available on campus and remotely.',
    link: { label: 'Access Library Website', href: 'https://library.lawsonstate.edu' },
  },
  {
    title: 'Print & Digital Collections',
    tag: 'Collections',
    desc: 'Browse our curated collection of textbooks, reference materials, periodicals, DVDs, and digital resources supporting all academic programs and workforce development pathways.',
    link: null,
  },
  {
    title: 'Study Spaces',
    tag: 'On Campus',
    desc: 'Quiet study areas, collaborative workspaces, and computer stations available on both campuses. Group study rooms available for reservation.',
    link: null,
  },
  {
    title: 'Information Literacy Programs',
    tag: 'Library Instruction',
    desc: 'Our librarians offer course-integrated instruction, one-on-one research help, and workshops on evaluating sources, citation formats (APA, MLA), and academic integrity.',
    link: null,
  },
  {
    title: 'Interlibrary Loan',
    tag: 'Resource Sharing',
    desc: "Need a book or article we don't have? Request it through Interlibrary Loan and we'll obtain it from another library — usually within a few business days.",
    link: null,
  },
  {
    title: 'Community Access',
    tag: 'Open to Public',
    desc: 'The Lawson State Library serves not only students and employees but also the broader community — supporting lifelong learning, career readiness, and cultural enrichment.',
    link: null,
  },
]

const CAMPUSES = [
  {
    name: 'Birmingham Campus Library',
    address: '3060 Wilson Road SW',
    city: 'Birmingham, AL 35221',
    hours: ['Monday – Thursday: 7:30 AM – 7:00 PM', 'Friday: 7:30 AM – 4:30 PM', 'Saturday: 8:00 AM – 12:00 PM', 'Sunday: Closed'],
    map: 'https://maps.google.com/?q=3060+Wilson+Road+SW,+Birmingham,+Alabama+35221',
  },
  {
    name: 'Bessemer Campus Library',
    address: '1100 Ninth Avenue SW',
    city: 'Bessemer, AL 35022',
    hours: ['Monday – Thursday: 7:30 AM – 7:00 PM', 'Friday: 7:30 AM – 4:30 PM', 'Saturday: 8:00 AM – 12:00 PM', 'Sunday: Closed'],
    map: 'https://maps.google.com/?q=1100+Ninth+Avenue+SW,+Bessemer,+Alabama+35022',
  },
]

export default function LibraryPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.16 0.04 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 261 / 0.97) 0%, oklch(0.22 0.17 261 / 0.80) 100%)' }} />
          <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-8%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.14) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.10) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Library & Learning Commons</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>LAWSON STATE LIBRARY</h1>
            <p className="text-white/75 max-w-2xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Supporting academic, career, and lifelong learning through diverse resources, technology, and programs that promote information literacy and community engagement.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://library.lawsonstate.edu" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Visit Library Website
              </a>
              <a href="mailto:help@lawsonstate.edu" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                Ask a Librarian
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>What We Offer</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>LIBRARY SERVICES</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((s) => (
                <div key={s.title} className="card-lift rounded-2xl p-7 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4 w-fit" style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.55 0.16 68)' }}>{s.tag}</span>
                  <h3 className="font-display font-bold mb-3 leading-snug" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</h3>
                  <p className="leading-relaxed flex-1 mb-4" style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>{s.desc}</p>
                  {s.link && (
                    <a href={s.link.href} className="link-reveal font-semibold text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>{s.link.label} →</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus Hours */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Locations & Hours</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>FIND A LIBRARY</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-8">
              {CAMPUSES.map((c) => (
                <div key={c.name} className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <h3 className="font-display font-bold text-xl mb-3" style={{ color: 'oklch(0.16 0.04 261)' }}>{c.name}</h3>
                  <address className="not-italic mb-5" style={{ color: 'oklch(0.40 0.04 261)', lineHeight: 1.8 }}>
                    {c.address}<br />{c.city}
                  </address>
                  <div className="space-y-2 mb-6">
                    {c.hours.map((h) => (
                      <p key={h} style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)' }}>{h}</p>
                    ))}
                  </div>
                  <a href={c.map} target="_blank" rel="noreferrer" className="text-sm font-semibold hover:opacity-75 transition-opacity" style={{ color: 'var(--lscc-eyebrow)' }}>
                    Get Directions →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
