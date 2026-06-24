import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Campus Life — Lawson State Community College',
  description:
    'Discover athletics, clubs, student government, housing, and comprehensive support services at Lawson State Community College — where community is everything.',
}

const SPORTS = [
  "Men's Basketball",
  "Women's Basketball",
  "Men's Baseball",
  "Women's Volleyball",
  "Cheer Team",
  "Dance Team",
]

const ORGS = [
  {
    name: 'Student Government Association',
    desc: 'The connection between students and administration. Run for office and shape campus life, policies, and activities for your peers.',
    href: 'https://lawsonstate.formstack.com/forms/student_council_interest',
  },
  {
    name: 'Honor Societies',
    desc: 'High-achieving students may be invited to join a program-specific honor society — a resume builder and network amplifier.',
    href: '/campus-life/honor-societies',
  },
  {
    name: 'Miss Lawson State & Court',
    desc: 'Annual celebration honoring high-achieving women with a ceremony, dancing, and community recognition.',
    href: '/campus-life/miss-lawson-state',
  },
  {
    name: 'FBLA Collegiate',
    desc: 'Future Business Leaders of America chapter for Business & IT students. Build professional skills, compete, and network.',
    href: '/academics/business-it',
  },
]

const SUPPORT_SERVICES = [
  {
    name: 'Academic Support',
    desc: 'In-person and virtual tutoring, counseling, and testing services. Free 24/7 access to Tutor.com (500+ subjects). Also includes the R.A.C.E Advising Center and S.P.A.C.E. Center on both campuses.',
    href: '/support/academic',
  },
  {
    name: 'Career Services',
    desc: 'Resume builder, mock interviews, job board (College Central), Career Coach assessments, annual Career & Community Resource Fair. On-campus visits from 4-year colleges every week.',
    href: '/support/career',
  },
  {
    name: 'Health & Wellness',
    desc: 'Physical and mental health resources. Lawson State is a Caring Campus. Access the Cougar Pantry for food assistance, and the Cougar Clothing Closet for professional attire.',
    href: '/support/health',
  },
  {
    name: 'Disability Support (ADA)',
    desc: 'Academic accommodations for students with disabilities. Apply online and connect with our counselors for a personalized accommodation plan.',
    href: '/support/ada',
  },
  {
    name: 'TRiO Programs',
    desc: 'Individualized academic support, workshops, cultural enrichment, and financial habit-building. Open to qualifying first-generation and low-income students.',
    href: '/support/trio',
  },
  {
    name: 'Veterans Services',
    desc: 'Help deciphering VA education benefits, Cougar Professional Wear for Veterans, and specialized counseling. Serving those who served.',
    href: '/support/veterans',
  },
]

const RESOURCES = [
  { name: 'MyLawson Student Portal', desc: 'Register, view grades, pay bills, access email', href: 'https://my.lawsonstate.edu' },
  { name: 'Canvas LMS', desc: 'Online courses, assignments, grades', href: 'https://lawsonstate.instructure.com' },
  { name: 'Tutor.com', desc: 'Free 24/7 tutoring, 500+ subjects', href: 'https://tutor.com' },
  { name: 'Bookstore', desc: 'Birmingham Campus — 205.929.6010', href: 'https://lawsonstatebirmingham.bkstr.com' },
  { name: 'Help Desk', desc: 'help@lawsonstate.edu', href: 'mailto:help@lawsonstate.edu' },
  { name: 'Library', desc: 'Research, databases, study spaces', href: 'https://lawsonstate.edu/Library' },
  { name: 'Cengage Unlimited', desc: '$214.99/yr — 65+ courses covered', href: 'https://cengage.com' },
  { name: 'Cougar Alert', desc: 'Emergency notification system', href: '/campus-life/cougar-alert' },
]

export default function CampusLifePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{ background: 'oklch(0.97 0.01 263)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
      >
        <div className="relative max-w-7xl mx-auto w-full">
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.55 0.15 68)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Cougars · Birmingham & Bessemer</p>
          <h1 className="font-display font-black leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>CAMPUS LIFE</h1>
          <p className="max-w-xl" style={{ fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', lineHeight: 1.7, color: 'oklch(0.40 0.04 261)' }}>
            If you're looking for a place where you can grow and develop into a leader who will make a difference, you're in the right place.
          </p>
        </div>
      </section>

      {/* Student quote marquee */}
      <div className="marquee-strip" style={{ background: 'oklch(0.79 0.19 78)', borderBottom: '1px solid oklch(0.68 0.20 76)' }}>
        <div className="marquee-track py-3">
          {[...Array(2)].flatMap(() => [
            '"My favorite part of Lawson is the student life and how the staff always go out of their way to make sure the students feel welcome." — Zoe Evans',
            '"When they say you can start here and go anywhere — they mean it." — Karl Pruitt Jr., Former SGA President',
            '"Lawson helped me achieve my goals by offering a variety of different organizations." — Zoe Evans, Class of \'22',
          ]).map((q, i) => (
            <span key={i} className="inline-flex items-center font-semibold whitespace-nowrap" style={{ fontSize: '0.96rem', color: 'oklch(0.11 0.03 261)', paddingRight: '3rem' }}>
              {q} <span className="ml-3" style={{ opacity: 0.4 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Athletics */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.99 0.005 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.55 0.15 68)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>NJCAA · ACCC</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>COUGAR ATHLETICS</h2>
            <p className="mt-2" style={{ fontSize: '1.08rem', color: 'oklch(0.40 0.04 261)' }}>
              There's nothing like Cougar Pride. Our programs are dedicated to fostering student-athlete success through competitive integrity, academic discipline, and leadership development.
            </p>
          </div>
          <div className="stagger-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {SPORTS.map(s => (
              <div
                key={s}
                className="card-lift rounded-2xl p-5 flex items-center justify-center"
                style={{
                  background: 'white',
                  border: '1px solid oklch(0 0 0 / 0.08)',
                  boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)',
                  minHeight: '72px',
                }}
              >
                <div className="font-display font-bold leading-snug text-center"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'oklch(0.16 0.04 261)' }}>
                  {s}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 scroll-reveal" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>Athletics Director</h3>
                <p className="font-medium" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>Dr. Eric R. Agee Jr.</p>
                <p style={{ fontSize: '0.96rem', color: 'oklch(0.50 0.03 261)' }}>Director of Athletics / Health & Physical Education</p>
                <p style={{ fontSize: '0.96rem', color: 'oklch(0.50 0.03 261)', marginTop: '0.25rem' }}>205.925.2525 · eagee@lawsonstate.edu</p>
                <p style={{ fontSize: '0.96rem', color: 'oklch(0.50 0.03 261)' }}>Arthur Shores Building, Birmingham Campus</p>
              </div>
              <div>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>Conferences</h3>
                <p style={{ fontSize: '1rem', color: 'oklch(0.40 0.04 261)' }}>Alabama Community College Conference (ACCC)</p>
                <p style={{ fontSize: '1rem', color: 'oklch(0.40 0.04 261)' }}>National Junior College Athletic Association (NJCAA)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.97 0.01 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.55 0.15 68)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Get Involved</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>CLUBS & ORGANIZATIONS</h2>
            <p className="mt-2" style={{ fontSize: '1.08rem', color: 'oklch(0.50 0.03 261)' }}>
              Find your place at Lawson State beyond the classroom. Form lifelong friendships and invaluable network connections.
            </p>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {ORGS.map(o => (
              <div key={o.name} className="rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{o.name}</h3>
                <p className="leading-relaxed mb-4" style={{ fontSize: '0.86rem', color: 'oklch(0.40 0.04 261)' }}>{o.desc}</p>
                <Link href={o.href} className="link-reveal font-semibold" style={{ fontSize: '1.08rem', color: 'oklch(0.55 0.15 68)' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 scroll-reveal" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
            <p className="mb-3" style={{ fontSize: '1.05rem', color: 'oklch(0.40 0.04 261)' }}>
              Not sure how or where to get plugged in? Contact our Student Engagement Manager.
            </p>
            <p className="font-bold" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>Ms. Tenesha Burns · tburns@lawsonstate.edu</p>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.99 0.005 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.55 0.15 68)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>We're Here for You</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>STUDENT SUPPORT SERVICES</h2>
            <p className="mt-2 max-w-2xl" style={{ fontSize: '1.08rem', color: 'oklch(0.40 0.04 261)' }}>
              All students — online, on campus, or off-site — are eligible for these services by phone, email, or in person. At Lawson State, we care about your academic, professional, and personal achievement.
            </p>
          </div>
          <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUPPORT_SERVICES.map(s => (
              <div key={s.name} className="card-lift rounded-2xl p-6" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
                <h3 className="font-display font-bold mb-2" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>{s.name}</h3>
                <p className="leading-relaxed mb-4" style={{ fontSize: '0.96rem', color: 'oklch(0.40 0.04 261)' }}>{s.desc}</p>
                <Link href={s.href} className="link-reveal font-semibold" style={{ fontSize: '0.92rem', color: 'oklch(0.55 0.15 68)' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl p-6 scroll-reveal" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}>
            <h3 className="font-display font-bold mb-3" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>Student Support Contact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold uppercase mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.55 0.15 68)' }}>Bessemer Campus</div>
                <div style={{ color: 'oklch(0.40 0.04 261)' }}>Building A — 1100 Ninth Ave SW</div>
              </div>
              <div>
                <div className="font-semibold uppercase mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.55 0.15 68)' }}>Birmingham Campus</div>
                <div style={{ color: 'oklch(0.40 0.04 261)' }}>Academic Success Center — 3060 Wilson Rd SW</div>
              </div>
              <div>
                <div className="font-semibold uppercase mb-1" style={{ fontSize: '0.74rem', letterSpacing: '0.14em', color: 'oklch(0.55 0.15 68)' }}>Contact</div>
                <div style={{ color: 'oklch(0.40 0.04 261)' }}>205.929.2113 · counseling@lawsonstate.edu</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-20 px-6" style={{ background: 'oklch(0.97 0.01 263)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 scroll-reveal">
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.55 0.15 68)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Your One-Stop Center</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>STUDENT RESOURCES</h2>
          </div>
          <div className="stagger-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESOURCES.map(r => (
              <Link
                key={r.name}
                href={r.href}
                className="card-lift press rounded-xl p-5 block"
                style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
              >
                <h3 className="font-display font-bold mb-1" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{r.name}</h3>
                <p style={{ fontSize: '0.92rem', color: 'oklch(0.50 0.03 261)' }}>{r.desc}</p>
              </Link>
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
