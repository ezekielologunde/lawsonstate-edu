import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Faculty & Staff Resources | Lawson State Community College',
  description:
    'Resources for Lawson State faculty and staff — Canvas support, TAP strategic planning docs, HR forms, employee handbook, professional development, and IT help.',
}

const CATEGORIES = [
  {
    title: 'Canvas Learning Management',
    tag: 'Teaching Tools',
    desc: 'Access your courses, upload content, manage grades, communicate with students, and use advanced features including Rubrics, SpeedGrader, and Discussions.',
    links: [
      { label: 'Log into Canvas', href: 'https://lawsonstate.instructure.com' },
      { label: 'Canvas Instructor Guides', href: 'https://community.canvaslms.com/t5/Instructor-Guide/tkb-p/Instructor#create-courses' },
    ],
  },
  {
    title: 'TAP Strategic Planning',
    tag: 'Unit Planning',
    desc: 'Access all Strategic Planning (TAP) documents — draft, save, print, and submit Unit Plans, Student Learning Outcomes (SLOs), and Unit Narrative Forms through the planning portal.',
    links: [
      { label: 'Unit Planning Documents', href: 'https://lawsonstate.edu/tap' },
      { label: 'SLO Tutorials', href: 'https://lawsonstate.edu/tap/slo' },
    ],
  },
  {
    title: 'MyLawson Portal',
    tag: 'Administration',
    desc: 'Access class rosters, enter grades, view schedule, submit grade changes, and manage administrative tasks through the MyLawson (Ellucian Banner) faculty portal.',
    links: [
      { label: 'Log into MyLawson', href: 'https://my.lawsonstate.edu' },
    ],
  },
  {
    title: 'Human Resources & Benefits',
    tag: 'HR',
    desc: 'Employee handbook, benefits enrollment, leave requests, direct deposit setup, payroll schedules, and HR forms available through the Employee Portal.',
    links: [
      { label: 'Employee Handbook', href: 'https://lawsonstate.edu/hr/handbook' },
      { label: 'Benefits Information', href: 'https://lawsonstate.edu/hr/benefits' },
    ],
  },
  {
    title: 'IT & Technology Support',
    tag: 'Help Desk',
    desc: 'Submit a technical support ticket for computer, phone, printer, email, or network issues. The MIS Department supports all faculty and staff technology needs.',
    links: [
      { label: 'Submit a Help Ticket', href: 'https://lawsonstate.edu/helpdesk' },
      { label: 'IT Help Desk', href: '/it' },
    ],
  },
  {
    title: 'Professional Development',
    tag: 'Center for Teaching Excellence',
    desc: 'The Center for Teaching Excellence and Learning sponsors faculty training, technology workshops, and resources for instructional improvement. Sponsored through the Office of Academic Affairs.',
    links: [
      { label: 'Email for Resources', href: 'mailto:help@lawsonstate.edu' },
    ],
  },
  {
    title: 'Faculty Directory',
    tag: 'Directory',
    desc: 'Find contact information for faculty and staff across both campuses. Directory includes office locations, email addresses, and phone extensions.',
    links: [
      { label: 'View Faculty Directory', href: 'https://lawsonstate.edu/directory' },
    ],
  },
  {
    title: 'Submit a Student Incident',
    tag: 'Student Services',
    desc: 'Report a student behavior, academic integrity, or safety concern through the official Student Incident Form. Reports are reviewed by the Student Affairs office.',
    links: [
      { label: 'Submit Incident Report', href: 'https://lawsonstate.edu/incident' },
    ],
  },
]

const QUICK_LINKS = [
  { label: 'Canvas', href: 'https://lawsonstate.instructure.com' },
  { label: 'MyLawson', href: 'https://my.lawsonstate.edu' },
  { label: 'Employee Email', href: 'https://outlook.office.com' },
  { label: 'IT Help Desk', href: '/it' },
  { label: 'HR Portal', href: 'https://lawsonstate.edu/hr' },
  { label: 'TAP Planning', href: 'https://lawsonstate.edu/tap' },
  { label: 'Faculty Directory', href: 'https://lawsonstate.edu/directory' },
  { label: 'Grad Information', href: 'https://lawsonstate.edu/graduation' },
]

export default function FacultyResourcesPage() {
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
          <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-8%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.12) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.62 0.22 248 / 0.10) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Center for Teaching Excellence</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>FACULTY & STAFF</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Resources designed to help you succeed as a faculty or staff member at Lawson State. Have a suggestion? Email help@lawsonstate.edu.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="https://lawsonstate.instructure.com" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Log into Canvas
              </a>
              <a href="https://my.lawsonstate.edu" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                MyLawson Portal
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links Strip */}
        <section className="py-10 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {QUICK_LINKS.map((q) => (
                <a key={q.label} href={q.href} className="press px-4 py-2 rounded-xl font-semibold text-sm" style={{ background: 'oklch(1 0 0 / 0.10)', color: 'white', border: '1px solid oklch(1 0 0 / 0.20)' }}>
                  {q.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Faculty Resources & eTraining</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>RESOURCES LISTING</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.map((cat) => (
                <div key={cat.title} className="card-lift rounded-2xl p-7 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4 w-fit" style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.55 0.16 68)' }}>{cat.tag}</span>
                  <h3 className="font-display font-bold mb-3 leading-snug" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{cat.title}</h3>
                  <p className="leading-relaxed flex-1 mb-4" style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)' }}>{cat.desc}</p>
                  <div className="flex flex-col gap-2">
                    {cat.links.map((l) => (
                      <a key={l.label} href={l.href} className="link-reveal font-semibold text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>{l.label} →</a>
                    ))}
                  </div>
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
