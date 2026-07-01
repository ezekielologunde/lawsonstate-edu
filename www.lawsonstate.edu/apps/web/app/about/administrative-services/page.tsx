import type { Metadata } from 'next'
import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Administrative Services | Lawson State',
  description:
    'Administrative Services at Lawson State Community College — Human Resources, Business Office, Campus Police, Information Technology, Public Relations, and Records offices that keep the college running.',
}

type Office = { title: string; desc: string; href: string; external?: boolean; cta: string }

const OFFICES: Office[] = [
  { title: 'Human Resources', desc: 'Employment, benefits, payroll, and employee relations for faculty and staff.', href: '/about/human-resources', cta: 'HR Office' },
  { title: 'Business Office', desc: 'Tuition, billing, payment plans, and the Bursar’s Office for student accounts.', href: '/financial-aid', cta: 'Tuition & Billing' },
  { title: 'Campus Police & Safety', desc: 'Cougar Alert, campus security, and the Annual Security Report (Clery Act).', href: '/campus-life/safety', cta: 'Campus Safety' },
  { title: 'Information Technology', desc: 'Help Desk, MyLawson accounts, email, Canvas, and student technology support.', href: 'mailto:help@lawsonstate.edu', external: true, cta: 'IT Help Desk' },
  { title: 'Public Relations & Community Affairs', desc: 'Media inquiries, news, events, and community engagement for the college.', href: '/about/public-relations', cta: 'Public Relations' },
  { title: 'Records & Registration', desc: 'Registration, transcripts, enrollment verification, and student records.', href: '/student-resources/transcripts', cta: 'Records Office' },
]

const CAMPUSES = [
  { label: 'Birmingham Campus', address: '3060 Wilson Road SW, Birmingham, AL 35221', tel: '+12059252515', phone: '205.925.2515' },
  { label: 'Bessemer Campus', address: '1100 Ninth Avenue SW, Bessemer, AL 35022', tel: '+12054245119', phone: '205.424.5119' },
]

export default function AdministrativeServicesPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://live.staticflickr.com/65535/55282617308_c78af37ffb.jpg" alt="Lawson State Community College campus" position="center 40%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Administrative Services</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Offices & Departments
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ADMINISTRATIVE SERVICES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '58ch', lineHeight: 1.7 }}>
            The administrative offices that support students, employees, and the community — from human resources and billing to safety, technology, and records.
          </p>
        </div>
      </section>

      {/* Office directory */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Directory</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>OFFICES & DEPARTMENTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OFFICES.map((o) => {
              const inner = (
                <>
                  <p className="font-display font-black mb-2" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{o.title}</p>
                  <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6, marginBottom: '1rem' }}>{o.desc}</p>
                  <span className="mt-auto inline-flex items-center text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    {o.cta} →{o.external && <span className="sr-only"> (opens mail client)</span>}
                  </span>
                </>
              )
              const cls = 'press group flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-md'
              const style = { background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }
              return o.external ? (
                <a key={o.title} href={o.href} className={cls} style={style}>{inner}</a>
              ) : (
                <Link key={o.title} href={o.href} className={cls} style={style}>{inner}</Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Campus contacts */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Where to Find Us</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>CAMPUS OFFICES</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {CAMPUSES.map((c) => (
              <div key={c.label} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                <p className="font-display font-black mb-1" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{c.label}</p>
                <p style={{ fontSize: '0.88rem', color: 'oklch(0.42 0.04 261)' }}>{c.address}</p>
                <a href={`tel:${c.tel}`} className="inline-block mt-2 text-sm font-bold hover:underline" style={{ color: 'oklch(0.42 0.17 261)' }}>{c.phone}</a>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/contact" className="press inline-flex items-center text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
              Full contact, maps &amp; hours →
            </Link>
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
