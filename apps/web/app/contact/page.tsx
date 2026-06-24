import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us | Lawson State Community College',
  description: 'Reach Lawson State Community College. Phone numbers, addresses, and department contacts for our Birmingham and Bessemer campuses.',
}

const CAMPUSES = [
  {
    name: 'Birmingham Campus',
    address: '3060 Wilson Road SW',
    city: 'Birmingham, Alabama 35221',
    phone: '205.925.2515',
    tel: '+12059252515',
    hours: 'Monday – Friday · 8 AM – 5 PM',
    mapUrl: 'https://maps.google.com/?q=3060+Wilson+Road+SW,+Birmingham,+Alabama+35221',
  },
  {
    name: 'Bessemer Campus',
    address: '1100 Ninth Avenue SW',
    city: 'Bessemer, Alabama 35022',
    phone: '205.424.5119',
    tel: '+12054245119',
    hours: 'Monday – Friday · 8 AM – 5 PM',
    mapUrl: 'https://maps.google.com/?q=1100+Ninth+Avenue+SW,+Bessemer,+Alabama+35022',
  },
]

const DEPARTMENTS = [
  { label: 'Admissions',       phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Financial Aid',    phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Registrar',        phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Student Affairs',  phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Workforce Dev.',   phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Dual Enrollment',  phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Career Services',  phone: '205.925.2515', tel: '+12059252515' },
  { label: 'Disability Svc.',  phone: '205.925.2515', tel: '+12059252515' },
]

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'oklch(0.97 0.01 263)', paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <nav
            className="page-fade-1 flex items-center gap-2 text-sm mb-8"
            style={{ color: 'oklch(0.45 0.03 261)' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:opacity-70 transition-opacity" style={{ color: 'oklch(0.45 0.03 261)' }}>Home</Link>
            <span>/</span>
            <span style={{ color: 'oklch(0.16 0.04 261)' }}>Contact</span>
          </nav>

          <p className="page-fade-1 text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'oklch(0.55 0.15 68)' }}>
            Get in Touch
          </p>
          <h1
            className="page-fade-2 font-display font-black leading-none mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', color: 'oklch(0.16 0.04 261)' }}
          >
            Contact Us
          </h1>
          <p
            className="page-fade-3 text-lg max-w-[52ch]"
            style={{ color: 'oklch(0.40 0.04 261)', lineHeight: 1.75 }}
          >
            We&apos;re here to help. Reach our team at either campus — Monday through Friday, 8 AM to 5 PM.
          </p>
        </div>
      </section>

      {/* Campus cards */}
      <section style={{ background: 'oklch(0.99 0.005 263)', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="scroll-reveal font-display font-black text-2xl mb-8"
            style={{ letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}
          >
            Our Campuses
          </h2>
          <div className="stagger-grid grid md:grid-cols-2 gap-6">
            {CAMPUSES.map((campus) => (
              <div
                key={campus.name}
                className="rounded-2xl p-8"
                style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
              >
                <h3 className="font-display font-bold text-xl mb-4" style={{ color: 'oklch(0.16 0.04 261)' }}>{campus.name}</h3>
                <address className="not-italic mb-5" style={{ color: 'oklch(0.40 0.04 261)', lineHeight: 1.8 }}>
                  {campus.address}<br />{campus.city}
                  <br />
                  <span style={{ color: 'oklch(0.50 0.03 261)', fontSize: '0.875rem' }}>{campus.hours}</span>
                </address>
                <a
                  href={`tel:${campus.tel}`}
                  className="font-bold block mb-4 hover:opacity-75 transition-opacity"
                  style={{ color: 'oklch(0.55 0.15 68)', fontSize: '1.15rem' }}
                >
                  {campus.phone}
                </a>
                <a
                  href={campus.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold hover:opacity-75 transition-opacity"
                  style={{ color: 'oklch(0.50 0.03 261)' }}
                >
                  Get directions →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department contacts */}
      <section style={{ background: 'oklch(0.97 0.01 263)', padding: '5rem 0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="scroll-reveal font-display font-black text-2xl mb-8"
            style={{ letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}
          >
            Key Departments
          </h2>
          <div className="stagger-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept.label}
                className="rounded-xl p-5"
                style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: 'oklch(0.55 0.15 68)' }}
                >
                  {dept.label}
                </p>
                <a
                  href={`tel:${dept.tel}`}
                  className="font-semibold text-sm hover:opacity-75 transition-opacity"
                  style={{ color: 'oklch(0.16 0.04 261)' }}
                >
                  {dept.phone}
                </a>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm" style={{ color: 'oklch(0.50 0.03 261)' }}>
            Direct department extensions available upon connection. Our operators will route your call.
          </p>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: 'oklch(0.42 0.17 261)', padding: '4rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-black text-white text-2xl mb-1" style={{ letterSpacing: '-0.02em' }}>
              Ready to start?
            </h2>
            <p style={{ color: 'oklch(1 0 0 / 0.80)' }}>
              Applications are open — join Lawson State today.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
            >
              Apply Now →
            </Link>
            <Link
              href="/financial-aid"
              className="press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.30)', color: 'oklch(1 0 0 / 0.90)' }}
            >
              Financial Aid
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
