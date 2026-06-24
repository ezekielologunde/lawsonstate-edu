import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import DivisionsFilter, { type Division } from '@/components/divisions-filter'
import ProgramCatalog from '@/components/program-catalog'

export const metadata: Metadata = {
  title: 'Academics — 200+ Programs at Lawson State',
  description:
    'Explore 200+ degrees, certificates, and training programs at Lawson State Community College — career technical, college transfer, health professions, and workforce development.',
}

const DIVISIONS: Division[] = [
  {
    id: 'career-technical',
    number: '01',
    name: 'Career Technical Education',
    desc: 'Specialized credentials for high-demand careers across automotive, construction, manufacturing, culinary, cosmetology, and more. Graduate job-ready, often in two years or less.',
    highlights: [
      'Alabama Center for Automotive Excellence — Ford ASSET, GM ASEP, Mercedes TECH, Toyota T-TEN',
      'Mechatronics Center of Excellence (NC3 designated)',
      'HVAC Excellence–accredited Air Conditioning & Refrigeration program',
      'Culinary Arts, Barbering, Cosmetology, Welding, Building Construction',
      'Medium/Heavy Truck Technician, Auto Body/Collision Repair',
    ],
    href: '/academics/career-technical',
    bg: 'oklch(0.22 0.17 261)',
    dark: true,
  },
  {
    id: 'college-transfer',
    number: '02',
    name: 'College Transfer',
    desc: 'Our largest program — complete your first two years at Lawson State and transfer up to 64 credits to the four-year university of your choice. Save thousands and build a strong foundation.',
    highlights: [
      'AA and AS degrees in General Studies and Liberal Arts',
      'Partners: Auburn, Alabama, UAB, A&M, Tuskegee, Samford, and 20+ more',
      'Alabama Transfers / STARS system protects all earned credits statewide',
      'Only STEM Center of Excellence in Alabama',
      'Honors College — National Collegiate Honors Council member',
      'NSF HBCU-UP grants for STEM students',
    ],
    href: '/academics/transfer',
    bg: 'oklch(0.20 0.15 261)',
    dark: true,
  },
  {
    id: 'health-professions',
    number: '03',
    name: 'Health Professions',
    desc: 'One of the strongest health programs in Alabama. Train for careers in nursing, dentistry, emergency services, radiology, and diagnostic imaging — with industry-leading accreditation.',
    highlights: [
      'Nursing (RN) — Top 10 RN Program in Alabama; ranked #1 and #2 in the state 2017–2019',
      'Licensed Practical Nursing (LPN)',
      'Dental Assisting (ADA/CODA accredited)',
      'Emergency Medical Services (EMS)',
      'Diagnostic Medical Sonography',
      'Radiologic Technology',
      'Pharmacy Technician',
      'Nursing Assistant / Nurse Aide',
    ],
    href: '/academics/health-professions',
    bg: 'oklch(0.20 0.15 261)',
    dark: true,
  },
  {
    id: 'business-it',
    number: '04',
    name: 'Business & Information Technologies',
    desc: 'From accounting and office administration to cybersecurity and cloud computing — earn a credential that transfers or takes you straight to the workforce.',
    highlights: [
      'ACBSP-accredited Business programs',
      'Cybersecurity & Cloud Computing concentrations (with industry certifications)',
      'Accounting Technology, Business Administration & Management',
      'Computer Applications, Networking, Programming & App Development',
      'Office Administration: General, Legal, and Medical (Medical Billing & Coding)',
      'FBLA Collegiate student organization',
      'Two fully online degrees: Business and Business Education',
    ],
    href: '/academics/business-it',
    bg: 'oklch(0.20 0.15 261)',
    dark: true,
  },
]

const SPECIALTY = [
  {
    name: 'STEM Programs',
    desc: 'STEM Scholars Program, STEM Internship, and STEAM Academy for middle/high school students. NSF I-RISE grant funded. Only STEM Center of Excellence in Alabama.',
    href: '/academics/stem',
  },
  {
    name: 'Honors College',
    desc: 'Exclusive scholarships, study abroad, mentorships, and network connections. Member of the National Collegiate Honors Council and National Association of African-American Honors Programs.',
    href: '/academics/honors',
  },
  {
    name: 'eCollege (Online)',
    desc: 'Fully online degrees in Business and Business Education. Online general education courses available for all majors. 24/7 access via Canvas. Free Tutor.com tutoring in 500+ subjects.',
    href: '/academics/online',
  },
  {
    name: 'Weekend College',
    desc: 'Earn an Associate\'s Degree across 66 credits — on weekends. Ideal for working adults. Complete health professions prerequisites and the Cybersecurity Short Certificate.',
    href: '/academics/weekend-college',
  },
]

const WORKFORCE = [
  { name: 'Customer Service Professional (CSP)', duration: '8 weeks', cost: '$1,000' },
  { name: 'Biotechnician Training', duration: '4 weeks', cost: 'FREE' },
  { name: 'Medication Aide', duration: '8 weeks / 100 hrs', cost: '$1,300' },
  { name: 'Pharmacy Technician Certification', duration: '16 weeks', cost: '$2,400' },
  { name: 'Certified Clinical Medical Assistant (CCMA)', duration: '30 weeks', cost: '$6,275' },
  { name: 'Certified Nursing Assistant (CNA)', duration: '5 weeks', cost: 'Via Adult Ed' },
  { name: 'Certified Production Technician (CPT)', duration: 'Varies', cost: 'See office' },
  { name: 'Alabama Career Essentials (ACE)', duration: 'Varies', cost: 'FREE' },
]

export default function AcademicsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <img
          src="https://live.staticflickr.com/65535/55214074644_fb8b844f53_c.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.96) 0%, oklch(0.22 0.17 261 / 0.80) 55%, oklch(0.16 0.13 263 / 0.55) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Degrees · Certificates · Skills Training</p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em' }}>200+ PROGRAMS</h1>
          <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
            Whether you want to enter the workforce or transfer to a four-year college, Lawson State has hundreds of programs to equip you with the knowledge to succeed.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/admissions/apply" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
              Start My Application
            </Link>
            <Link href="/admissions" className="press hero-cta-ghost inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
              Admissions Info
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-6 justify-between">
          {[
            ['200+', 'Programs Offered'],
            ['4', 'Program Divisions'],
            ['64', 'Transfer Credits'],
            ['25', 'Workforce Programs'],
            ['51', 'Dual Enrollment Classes'],
            ['9', 'Online Certificates'],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <div className="font-display font-black" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: 'oklch(0.11 0.03 261)', letterSpacing: '-0.025em' }}>{n}</div>
              <div className="font-semibold uppercase" style={{ fontSize: '0.96rem', letterSpacing: '0.14em', color: 'oklch(0.11 0.03 261 / 0.6)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Division cards */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.10 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Program Divisions</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>FIND YOUR DIVISION</h2>
          </div>
          <DivisionsFilter divisions={DIVISIONS} />
        </div>
      </section>

      {/* Live Program Catalog */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.10 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3"
              style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>
              Browse the Full Catalog
            </p>
            <h2 className="font-display font-black leading-none text-white mb-3"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.04em' }}>
              ALL {150}+ PROGRAMS
            </h2>
            <p style={{ fontSize: '1rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '55ch', lineHeight: 1.7 }}>
              Filter by subject area, credential type, or search by name. Placement rates shown where available.
            </p>
          </div>
          <ProgramCatalog />
        </div>
      </section>

      {/* Specialty programs */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.18 0.14 261)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Beyond the Classroom</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>SPECIALTY PROGRAMS</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SPECIALTY.map(s => (
              <Link
                key={s.name}
                href={s.href}
                className="card-lift press rounded-2xl p-6 block"
                style={{ background: 'oklch(0.26 0.18 261)', border: '1px solid oklch(1 0 0 / 0.10)' }}
              >
                <h3 className="font-display font-bold mb-2 text-white" style={{ fontSize: '1.08rem', letterSpacing: '-0.01em' }}>{s.name}</h3>
                <p className="leading-relaxed" style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.70)' }}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workforce Development */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.06 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Fast-Track Training</p>
            <h2 className="font-display font-black leading-none text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em' }}>WORKFORCE DEVELOPMENT</h2>
            <p className="text-white/65 mt-2" style={{ fontSize: '1.08rem' }}>
              Short-term, skills-focused programs designed around employer needs. Some are free. All lead to employment.
            </p>
          </div>
          <div className="overflow-x-auto scrollbar-hide scroll-reveal">
            <table className="w-full text-sm" style={{ borderCollapse: 'separate', borderSpacing: '0 0.5rem' }}>
              <thead>
                <tr>
                  {['Program', 'Duration', 'Cost'].map(h => (
                    <th key={h} className="text-left pb-3 font-semibold uppercase" style={{ fontSize: '0.74rem', letterSpacing: '0.16em', color: 'oklch(0.79 0.19 78)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WORKFORCE.map(w => (
                  <tr key={w.name}>
                    <td className="py-3 pr-8 font-medium text-white" style={{ fontSize: '1rem' }}>{w.name}</td>
                    <td className="py-3 pr-8 text-white/65" style={{ fontSize: '0.96rem', whiteSpace: 'nowrap' }}>{w.duration}</td>
                    <td className="py-3 font-bold" style={{ fontSize: '0.96rem', color: 'oklch(0.79 0.19 78)', whiteSpace: 'nowrap' }}>{w.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Link
              href="/workforce"
              className="press btn-shimmer font-bold px-6 py-3 rounded-lg inline-block"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
            >
              Explore Workforce Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* Dual Enrollment */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.14 0.10 261)' }}>
        <div className="max-w-7xl mx-auto scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>High School Students</p>
              <h2 className="font-display font-black leading-none mb-4 text-white" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em' }}>DUAL ENROLLMENT</h2>
              <p className="leading-relaxed mb-6" style={{ fontSize: '1.1rem', color: 'oklch(1 0 0 / 0.72)' }}>
                Start college while still in high school. Take up to 51 available classes and earn real college credits — tuition waived through ACCS grant funding. Available to 10th–12th graders with a 2.5 GPA.
              </p>
              <p className="font-display font-bold mb-6" style={{ fontSize: '1rem', color: 'oklch(1 0 0 / 0.85)' }}>
                "I have taken 13 dual enrollment courses so far, reducing the time and cost of pursuing my degree."
              </p>
              <div className="flex flex-col gap-2 text-sm mb-6" style={{ color: 'oklch(1 0 0 / 0.65)' }}>
                {['General Education', 'Health Professions', 'Computer Science', 'Construction', 'Business', 'Automotive & Transportation'].map(p => (
                  <div key={p} className="flex items-center gap-2">
                    <span style={{ color: 'oklch(0.79 0.19 78)' }}>→</span> {p}
                  </div>
                ))}
              </div>
              <Link
                href="/admissions/dual-enrollment"
                className="press btn-shimmer font-bold px-6 py-3 rounded-lg inline-block"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}
              >
                Learn About Dual Enrollment →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '51', l: 'Classes Available' },
                { n: '2.5', l: 'Min GPA Required' },
                { n: 'FREE', l: 'Tuition (ACCS Grant)' },
                { n: '10–12', l: 'Grade Eligible' },
              ].map(s => (
                <div key={s.l} className="rounded-2xl p-6 text-center" style={{ background: 'oklch(0.22 0.16 261)', border: '1px solid oklch(1 0 0 / 0.10)' }}>
                  <div className="font-display font-black" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'oklch(0.79 0.19 78)', letterSpacing: '-0.03em' }}>{s.n}</div>
                  <div className="font-medium mt-1" style={{ fontSize: '0.78rem', color: 'oklch(1 0 0 / 0.60)' }}>{s.l}</div>
                </div>
              ))}
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
