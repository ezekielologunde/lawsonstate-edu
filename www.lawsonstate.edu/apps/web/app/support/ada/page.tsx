import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Disability Support Services | Lawson State Community College',
  description:
    'ADA accommodations and disability support services at Lawson State Community College. Free, confidential services to ensure equal access to education for students with documented disabilities.',
}

const ACCOMMODATIONS = [
  'Extended time on exams',
  'Testing in a reduced-distraction environment',
  'Note-taking assistance',
  'Priority seating in classrooms',
  'Accessible course materials (large print, digital formats)',
  'Sign language interpreting services',
  'Assistive technology access',
  'Housing accommodations (for residential students)',
]

const HOW_IT_WORKS = [
  { n: '01', title: 'Submit Documentation', detail: 'Provide documentation of your disability from a qualified professional (physician, psychologist, or licensed specialist).' },
  { n: '02', title: 'Apply for Services', detail: 'Complete the Application for Disability Services/Accommodations through our online portal or in person at the Student Services office.' },
  { n: '03', title: 'Meet with Advisor', detail: 'Schedule an appointment with a disability services advisor to discuss your needs and determine appropriate accommodations.' },
  { n: '04', title: 'Receive Accommodation Letters', detail: 'Once approved, you receive official accommodation letters to share with your instructors each semester.' },
]

export default function AdaPage() {
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
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>ADA Accommodations</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>DISABILITY SUPPORT</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Free, confidential disability support services to ensure equal access to education for all enrolled students.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://lawsonstate.edu/ada-apply" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Apply for Accommodations
              </a>
              <a href="tel:+12059293419" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                Call 205.929.3419
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Equal Access for All</p>
              <h2 className="font-display font-black leading-none mb-6 wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>OUR COMMITMENT</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div className="rounded-2xl p-8" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                <p className="leading-relaxed mb-4" style={{ fontSize: '1.02rem', color: 'oklch(0.35 0.04 261)' }}>
                  Lawson State Community College is committed to providing an accessible educational environment in compliance with the <strong>Americans with Disabilities Act (ADA)</strong> and Section 504 of the Rehabilitation Act.
                </p>
                <p className="leading-relaxed" style={{ fontSize: '0.97rem', color: 'oklch(0.40 0.04 261)' }}>
                  Disability Support Services provides reasonable academic accommodations to qualified students with documented disabilities. All services and contacts are confidential and provided at no cost.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold mb-4" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>Common Accommodations</h3>
                <ul className="space-y-2">
                  {ACCOMMODATIONS.map((a) => (
                    <li key={a} className="flex items-start gap-3" style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>
                      <span style={{ color: 'oklch(0.79 0.19 78)', marginTop: '0.2rem', flexShrink: 0 }}>✓</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Getting Started</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>HOW TO APPLY</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map((step) => (
                <div key={step.n} className="card-lift rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-display font-black" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>{step.n}</div>
                  <h3 className="font-display font-bold mb-2 leading-snug" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-white leading-none mb-2 wipe-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}>NEED ACCOMMODATIONS?</h2>
              <p style={{ color: 'oklch(1 0 0 / 0.80)' }}>Contact Student Services at 205.929.3419 or schedule an appointment online.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="https://lawsonstate.edu/ada-apply" className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                Apply Online →
              </a>
              <Link href="/contact" className="press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ border: '1.5px solid oklch(1 0 0 / 0.30)', color: 'oklch(1 0 0 / 0.90)' }}>
                Campus Locations
              </Link>
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
