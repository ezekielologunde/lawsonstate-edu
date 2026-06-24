import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'About Lawson State — History, Mission & Leadership',
  description:
    "Birmingham's HBCU since 1949. Learn about Lawson State's history, mission, accreditation, and leadership across two campuses in Birmingham and Bessemer, AL.",
}

const STATS = [
  { number: '1949', label: 'Founded' },
  { number: '70+', label: 'Years of Service' },
  { number: '3,000+', label: 'Students Enrolled' },
  { number: '2', label: 'Campuses' },
]

const MILESTONES = [
  { year: '1949', event: 'Founded as Wenonah State Technical Institute with 75 students, 11 instructors, and an initial investment of $75,000. Dr. Theodore Alfred Lawson named first president.' },
  { year: '1965', event: 'Academic division established as Wenonah State Junior College.' },
  { year: '1967', event: 'First commencement exercise — 33 graduates.' },
  { year: '1968', event: 'Received SACSCOC accreditation from the Commission on Colleges.' },
  { year: '1973', event: 'Renamed T.A. Lawson State Community College.' },
  { year: '2005', event: 'Merged with Bessemer State Technical College, expanding to two campuses and doubling our reach across Jefferson County.' },
  { year: '2011', event: 'Named one of the Top 50 Community Colleges nationally — the first community college in Alabama history to receive this honor. Also recognized by the White House as a Champion of Change.' },
  { year: '2013', event: 'Rose from #33 to #5 on the Top 50 Community Colleges in the nation list.' },
  { year: '2015', event: 'Selected to host a visit by President Barack Obama.' },
  { year: '2019', event: 'Opened the Academic Success Center — the newest and largest building on campus. Achieved SACSCOC reaffirmation.' },
  { year: '2021', event: 'Dr. Cynthia T. Anthony named 5th President — the first female to lead this historic institution.' },
]

const PRESIDENTS = [
  { name: 'Dr. Theodore A. Lawson', years: '1949–1971', note: 'Founder & First President' },
  { name: 'Dr. Leon Kennedy', years: '1971–1978', note: '' },
  { name: 'Dr. Jesse J. Lewis', years: '1978–1987', note: '' },
  { name: 'Dr. Perry W. Ward', years: '1987–2020', note: '' },
  { name: 'Dr. Cynthia T. Anthony', years: '2021–Present', note: 'First Female President', current: true },
]

const ACCREDITATIONS = [
  { org: 'SACSCOC', desc: 'Southern Association of Colleges and Schools Commission on Colleges', scope: 'Institutional — Associate Degree' },
  { org: 'ACBSP', desc: 'Accreditation Council for Business Schools and Programs', scope: 'Business & IT Programs' },
  { org: 'ADA/CODA', desc: 'American Dental Association — Council on Dental Accreditation', scope: 'Dental Assisting' },
  { org: 'ABN/ACEN', desc: 'Alabama Board of Nursing / Accreditation Commission for Education in Nursing', scope: 'Nursing Programs' },
  { org: 'NATEF/ASE', desc: 'National Automotive Technicians Education Foundation', scope: 'Automotive Programs' },
  { org: 'HVAC Excellence', desc: 'National HVAC Excellence (ESCO Institute)', scope: 'Air Conditioning & Refrigeration' },
  { org: 'AWS', desc: 'American Welding Society', scope: 'Welding Program' },
  { org: 'CASE', desc: 'Continuing Automotive Service Education', scope: 'Automotive Continuing Ed' },
]

const CAMPUSES = [
  {
    name: 'Birmingham Campus',
    address: '3060 Wilson Road, SW\nBirmingham, AL 35221',
    directions: 'Near I-65 and Lakeshore Drive, heading towards Hwy 150',
    phone: '205.925.2515',
    hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
  },
  {
    name: 'Bessemer Campus',
    address: '1100 Ninth Avenue SW\nBessemer, AL 35022',
    directions: 'Near I-59 and Academy Drive, off the Bessemer Super Highway',
    phone: '205.925.2515',
    hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
  },
]

export default function AboutPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative py-20 px-6 flex items-end overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh' }}
      >
        <div
          className="absolute inset-0"
          aria-hidden
          style={{ background: 'linear-gradient(135deg, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.16 0.13 263 / 0.82) 100%)' }}
        />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Est. 1949 · Birmingham, AL
          </p>
          <h1
            className="font-display font-black text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em' }}
          >
            ABOUT LAWSON STATE
          </h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
            Birmingham's HBCU — over 70 years of academic achievement, community leadership, and transforming lives across Jefferson County.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map(s => (
            <div key={s.number} className="text-center">
              <div className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: 'oklch(0.11 0.03 261)', letterSpacing: '-0.03em' }}>{s.number}</div>
              <div className="font-semibold uppercase mt-1" style={{ fontSize: '1rem', letterSpacing: '0.16em', color: 'oklch(0.11 0.03 261 / 0.6)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Core Values */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>Our Purpose</p>
              <h2 className="font-display font-black leading-none mb-8 text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>MISSION &amp; VISION</h2>
              <div className="space-y-6">
                <div style={{ borderLeft: '3px solid oklch(0.79 0.19 78)', paddingLeft: '1.25rem' }}>
                  <h3 className="font-display font-bold mb-2 text-lscc-blue" style={{ fontSize: '1.05rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Mission</h3>
                  <p className="text-lscc-muted leading-relaxed" style={{ fontSize: '1.08rem' }}>
                    With a focus on student success, Lawson State Community College provides affordable and quality educational opportunities, promotes economic growth, and enhances the quality of life in the communities it serves. Through innovative instruction and lifelong learning opportunities, the College prepares students for college transfer, employment, and career advancement.
                  </p>
                </div>
                <div style={{ borderLeft: '3px solid oklch(0.79 0.19 78)', paddingLeft: '1.25rem' }}>
                  <h3 className="font-display font-bold mb-2 text-lscc-blue" style={{ fontSize: '1.05rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Vision</h3>
                  <p className="text-lscc-muted leading-relaxed" style={{ fontSize: '1.08rem' }}>
                    Cultivating success through excellence and innovation.
                  </p>
                </div>
                <div style={{ borderLeft: '3px solid oklch(0.79 0.19 78)', paddingLeft: '1.25rem' }}>
                  <h3 className="font-display font-bold mb-2 text-lscc-blue" style={{ fontSize: '1.05rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Motto</h3>
                  <p className="font-display font-black text-lscc-ink" style={{ fontSize: '1.1rem' }}>"It's All Here!"</p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>What We Stand For</p>
              <h2 className="font-display font-black leading-none mb-8 text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>CORE VALUES</h2>
              <ul className="space-y-5">
                {[
                  ['Student Success', 'Recruitment, persistence, graduation, and career development at the center of everything we do.'],
                  ['Excellence', 'High standards in leadership, instruction, processes, and customer service.'],
                  ['Innovation', 'Embracing technology, creativity, and curriculum development to serve the community.'],
                  ['Integrity', 'Stewardship, accountability, and ethical practices in all we do.'],
                  ['Engagement', 'A caring campus culture focused on student support and belonging.'],
                ].map(([value, desc]) => (
                  <li key={value} className="flex gap-4 items-start">
                    <span className="shrink-0 w-2 h-2 rounded-full mt-2" style={{ background: 'oklch(0.79 0.19 78)' }} />
                    <div>
                      <span className="font-display font-bold text-lscc-ink" style={{ fontSize: '1.05rem' }}>{value} — </span>
                      <span className="text-lscc-muted" style={{ fontSize: '1.05rem' }}>{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* President */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.97 0.015 263)' }}>
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-12 items-start">
            <div>
              <div className="aspect-[3/4] rounded-2xl mb-4 flex items-center justify-center" style={{ background: 'oklch(0.22 0.17 261)' }}>
                <span className="font-display font-black text-white/20" style={{ fontSize: '5rem' }}>CTA</span>
              </div>
              <p className="font-display font-black text-lscc-ink" style={{ fontSize: '1rem' }}>Dr. Cynthia T. Anthony</p>
              <p className="text-lscc-muted" style={{ fontSize: '0.8rem' }}>5th President, Lawson State CC</p>
              <p className="font-semibold mt-1" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.75rem' }}>First Female President · Appointed March 15, 2021</p>
            </div>
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>A Message From Our President</p>
              <h2 className="font-display font-black leading-none mb-6 text-lscc-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}>WELCOME TO LAWSON STATE</h2>
              <div className="space-y-4 text-lscc-muted leading-relaxed" style={{ fontSize: '1.1rem', maxWidth: '60ch' }}>
                <p>Welcome to Lawson State Community College! Lawson State is an institution with a rich history of academic achievement and an unmatched record of community leadership and service.</p>
                <p>As President, I am committed to student success and excellence in teaching and learning. The College offers an affordable and flexible education that is comprehensive, innovative, technology-rich, and designed to meet the diverse needs of constituents in Jefferson County.</p>
                <p>The College has positioned itself to equip, engage, and empower students to be active and responsible participants in the educational process as well as in future endeavors — through face-to-face instruction, as well as virtual and online courses.</p>
                <p className="font-display font-bold text-lscc-ink" style={{ fontSize: '1rem' }}>"It's All Here!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>Our Story</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>70+ YEARS OF HISTORY</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[7px] top-0 bottom-0 w-px" style={{ background: 'oklch(1 0 0 / 0.15)' }} />
            <ul className="space-y-8 pl-8">
              {MILESTONES.map((m) => (
                <li key={m.year} className="relative scroll-reveal">
                  <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full" style={{ background: 'oklch(0.79 0.19 78)' }} />
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                    <span className="shrink-0 font-display font-black" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1rem', letterSpacing: '0.05em', minWidth: '3.5rem' }}>{m.year}</span>
                    <p className="text-white/80 leading-relaxed" style={{ fontSize: '1.05rem' }}>{m.event}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Presidents */}
      <section className="py-20 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>Leadership Legacy</p>
            <h2 className="font-display font-black leading-none text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>COLLEGE PRESIDENTS</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRESIDENTS.map((p, i) => (
              <div
                key={p.name}
                className="card-lift rounded-2xl p-6 shadow-card"
                style={{
                  background: p.current ? 'oklch(0.22 0.17 261)' : 'oklch(0.97 0.015 263)',
                  border: `1px solid ${p.current ? 'transparent' : 'oklch(0.92 0.01 263)'}`,
                }}
              >
                <div className="font-display font-black mb-2" style={{ fontSize: '0.84rem', color: 'oklch(0.79 0.19 78)', letterSpacing: '0.1em' }}>#{i + 1}</div>
                <div className="font-display font-bold leading-snug mb-1" style={{ fontSize: '1rem', color: p.current ? 'white' : 'oklch(0.11 0.03 261)' }}>{p.name}</div>
                <div style={{ fontSize: '1rem', color: p.current ? 'oklch(1 0 0 / 0.5)' : 'oklch(0.48 0.06 261)' }}>{p.years}</div>
                {p.note && <div className="mt-2 font-semibold" style={{ fontSize: '0.82rem', color: 'oklch(0.79 0.19 78)' }}>{p.note}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.97 0.015 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>Quality Assurance</p>
            <h2 className="font-display font-black leading-none text-lscc-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>ACCREDITATIONS</h2>
            <p className="text-lscc-muted mt-2" style={{ fontSize: '1.08rem' }}>Lawson State holds institutional and program-level accreditations that ensure the highest standards of education.</p>
          </div>
          <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACCREDITATIONS.map(a => (
              <div key={a.org} className="card-lift rounded-xl p-5 shadow-card" style={{ background: 'white', border: '1px solid oklch(0.92 0.01 263)' }}>
                <div className="font-display font-black mb-1" style={{ fontSize: '1rem', color: 'oklch(0.22 0.17 261)' }}>{a.org}</div>
                <div className="text-lscc-muted leading-snug mb-2" style={{ fontSize: '0.79rem' }}>{a.desc}</div>
                <div className="font-semibold" style={{ fontSize: '0.84rem', color: 'oklch(0.79 0.19 78)' }}>{a.scope}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Locations */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.2em' }}>One College</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>TWO CAMPUSES</h2>
            <p className="text-white/65 mt-2" style={{ fontSize: '1.08rem' }}>Approximately nine miles apart — both campuses are open Monday–Friday with a full range of services and programs.</p>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAMPUSES.map(campus => (
              <div key={campus.name} className="card-lift rounded-2xl p-8" style={{ background: 'oklch(0.19 0.08 263)', border: '1px solid oklch(1 0 0 / 0.08)' }}>
                <h3 className="font-display font-black text-white mb-5" style={{ fontSize: '1.2rem', letterSpacing: '-0.015em' }}>{campus.name}</h3>
                <div className="space-y-4 text-sm">
                  {[
                    ['Address', campus.address],
                    ['Directions', campus.directions],
                    ['Phone', campus.phone],
                    ['Hours', campus.hours],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span className="font-semibold uppercase block mb-0.5" style={{ fontSize: '0.74rem', letterSpacing: '0.15em', color: 'oklch(0.79 0.19 78)' }}>{label}</span>
                      <p className="text-white/80 whitespace-pre-line">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
