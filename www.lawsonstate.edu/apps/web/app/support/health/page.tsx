import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Health & Wellness | Lawson State Community College',
  description:
    'Mental health counseling, the Cougar Pantry, and Cougar Clothing Closet — free wellness resources for Lawson State students in Birmingham and Bessemer.',
}

const PROGRAMS = [
  {
    title: 'Counseling Services',
    tag: 'Mental Health',
    desc: 'Free, confidential counseling for all enrolled students. Individual, group, academic, personal, and professional services provided by licensed counselors. Appropriate referrals to community resources available.',
    contact: { label: 'Schedule by phone', phone: '205.929.2113', tel: '+12059292113' },
    email: null,
  },
  {
    title: 'Cougar Pantry',
    tag: 'Food & Essentials',
    desc: 'Free food items, personal care products, school supplies, and bedding available to any student in need. No questions asked — just stop by one of our campus locations.',
    contact: { label: 'Call for info', phone: '205.929.2072', tel: '+12059292072' },
    email: null,
  },
  {
    title: 'Cougar Clothing Closet',
    tag: 'Professional Attire',
    desc: 'Need professional clothing for a job interview or career fair? The Clothing Closet provides professional attire at no cost. Complete a short request form to access clothing.',
    contact: null,
    email: { label: 'Request clothing', href: 'https://lawsonstate.edu/clothing-request' },
  },
  {
    title: 'Disability Support Services',
    tag: 'ADA Accommodations',
    desc: 'Students with disabilities can request academic accommodations through our ADA office. Services are confidential and provided in accordance with the Americans with Disabilities Act.',
    contact: { label: 'ADA Office', phone: '205.929.3419', tel: '+12059293419' },
    email: null,
  },
]

const PANTRY_HOURS = [
  { day: 'Tuesday – Thursday', time: '9:00 AM – 4:30 PM' },
  { day: 'Saturday', time: 'By appointment only' },
  { day: 'Monday, Friday, Sunday', time: 'Closed' },
]

const COUNSELING_LOCATIONS = [
  {
    campus: 'Birmingham',
    building: 'Academic Success Center, 2nd Floor, Counseling Dept.',
    address: '3060 Wilson Road SW, Birmingham, AL 35221',
    phone: '205.929.3419',
    tel: '+12059293419',
  },
  {
    campus: 'Bessemer',
    building: 'Building A, Room 183, Student Services',
    address: '1100 Ninth Avenue SW, Bessemer, AL 35022',
    phone: '205.929.2113',
    tel: '+12059292113',
  },
]

const PANTRY_LOCATIONS = [
  { campus: 'Bessemer', detail: 'Building A, Room 177 · 1100 Ninth Ave SW, Bessemer, AL 35022' },
  { campus: 'Birmingham', detail: 'A.G. Gaston Building, Room 117 · 3060 Wilson Rd SW, Birmingham, AL 35221' },
]

export default function HealthWellnessPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.16 0.04 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.16 0.04 261 / 0.97) 0%, oklch(0.22 0.17 261 / 0.82) 100%)' }} />
          <div aria-hidden style={{ position: 'absolute', top: '-15%', right: '-8%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.12) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.10) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Stay Healthy. Stay Happy.</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>HEALTH & WELLNESS</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Free counseling, food assistance, and wellness resources for every Lawson State student — no cost, no judgment.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="tel:+12059292113" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Schedule Counseling
              </a>
              <a href="tel:+12059292072" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                Cougar Pantry: 205.929.2072
              </a>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Free for All Students</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>WELLNESS PROGRAMS</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROGRAMS.map((p) => (
                <div key={p.title} className="card-lift rounded-2xl p-7 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4 w-fit" style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.55 0.16 68)' }}>{p.tag}</span>
                  <h3 className="font-display font-bold mb-3 leading-snug" style={{ fontSize: '1.15rem', color: 'oklch(0.16 0.04 261)' }}>{p.title}</h3>
                  <p className="leading-relaxed flex-1 mb-5" style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>{p.desc}</p>
                  {p.contact && (
                    <a href={`tel:${p.contact.tel}`} className="font-bold hover:opacity-75 transition-opacity" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.05rem' }}>{p.contact.phone}</a>
                  )}
                  {p.email && (
                    <a href={p.email.href} className="link-reveal font-semibold text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>{p.email.label} →</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cougar Pantry Details */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Food & Essentials</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>COUGAR PANTRY</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold mb-5" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>Hours</h3>
                <div className="space-y-3">
                  {PANTRY_HOURS.map((h) => (
                    <div key={h.day} className="rounded-xl p-5 flex justify-between items-center" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                      <span className="font-semibold" style={{ fontSize: '0.95rem', color: 'oklch(0.16 0.04 261)' }}>{h.day}</span>
                      <span style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold mb-5" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>Locations</h3>
                <div className="space-y-4">
                  {PANTRY_LOCATIONS.map((loc) => (
                    <div key={loc.campus} className="rounded-xl p-5" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                      <p className="font-bold mb-1" style={{ color: 'oklch(0.16 0.04 261)' }}>{loc.campus} Campus</p>
                      <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)' }}>{loc.detail}</p>
                    </div>
                  ))}
                </div>
                <a href="tel:+12059292072" className="mt-5 inline-block font-bold hover:opacity-75 transition-opacity" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.1rem' }}>
                  Call: 205.929.2072
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Counseling Locations */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Counseling</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>FIND A COUNSELOR</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {COUNSELING_LOCATIONS.map((loc) => (
                <div key={loc.campus} className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <h3 className="font-display font-bold text-xl mb-2" style={{ color: 'oklch(0.16 0.04 261)' }}>{loc.campus} Campus</h3>
                  <p className="font-semibold mb-1" style={{ fontSize: '0.95rem', color: 'oklch(0.40 0.04 261)' }}>{loc.building}</p>
                  <address className="not-italic mb-4" style={{ fontSize: '0.9rem', color: 'oklch(0.50 0.03 261)' }}>{loc.address}</address>
                  <a href={`tel:${loc.tel}`} className="font-bold hover:opacity-75 transition-opacity" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.05rem' }}>{loc.phone}</a>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm" style={{ color: 'oklch(0.50 0.03 261)' }}>All counseling services are <strong>free and confidential</strong>. Hours: Monday – Friday 8:00 AM – 5:00 PM.</p>
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
