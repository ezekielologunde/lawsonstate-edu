import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Human Resources | Lawson State',
  description:
    'Human Resources at Lawson State Community College — employment opportunities, benefits, and HR contact information for prospective and current employees.',
}

const SERVICES = [
  { title: 'Employment & Hiring', desc: 'Faculty, staff, and administrative job postings, applications, and onboarding for new employees.' },
  { title: 'Benefits & Payroll', desc: 'Health insurance, retirement (RSA), leave, and payroll administration for eligible employees.' },
  { title: 'Employee Relations', desc: 'Policies, workplace concerns, professional development, and compliance with employment law.' },
  { title: 'Records & Verification', desc: 'Employment verification, personnel records, and required annual notifications.' },
]

export default function HumanResourcesPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55212928957_04ab31902e.jpg" alt="Lawson State Community College campus" position="center 40%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Human Resources</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Administrative Services · Employment
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            HUMAN RESOURCES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            The Office of Human Resources supports the faculty and staff who make Lawson State work — from hiring and benefits to payroll and employee relations.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/careers" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              View Job Openings
            </Link>
            <a href="mailto:hr@lawsonstate.edu" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              Email HR
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>What HR Does</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>EMPLOYEE SERVICES</h2>
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

      {/* Contact */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.74rem', letterSpacing: '0.18em' }}>Contact</p>
            <h2 className="font-display font-black text-white mb-4" style={{ fontSize: '1.5rem' }}>Office of Human Resources</h2>
            <div className="space-y-2 text-sm" style={{ color: 'oklch(1 0 0 / 0.78)', lineHeight: 1.7 }}>
              <p>Dr. Perry W. Ward Alabama Center for Advanced Technology &amp; Training (ACATT) Building — 3rd Floor</p>
              <p>3060 Wilson Road SW<br />Birmingham, AL 35221</p>
              <p>
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span>{' '}
                <a href="tel:+12059296313" className="hover:underline" style={{ color: 'white' }}>205.929.6313</a>
              </p>
              <p>
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Email:</span>{' '}
                <a href="mailto:hr@lawsonstate.edu" className="hover:underline" style={{ color: 'white' }}>hr@lawsonstate.edu</a>
              </p>
              <p>
                <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Hours:</span> Mon–Fri · 8 AM – 5 PM
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-display font-black mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.02em' }}>Ready to join Lawson State?</h2>
            <p className="mb-5" style={{ fontSize: '0.96rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.7, maxWidth: '52ch' }}>
              Browse current faculty, staff, and administrative openings — and learn about the benefits of working at one of Alabama’s premier community colleges.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/careers" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
                Career Opportunities →
              </Link>
              <Link href="/about/administrative-services" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)', fontSize: '0.95rem' }}>
                Administrative Services →
              </Link>
            </div>
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
