import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

// ── Journey data (from Lawson State Student Journey Map: Returning Students) ──

const PHASES = [
  {
    n: '01',
    label: 'Pre-Registration & Communication',
    summary: 'Before registration opens, returning students prepare their accounts and the college reaches out proactively.',
    student: [
      'Review academic progress via Degree Works',
      'Check email, text, and portal for registration date notifications',
      'Confirm intent to return and update personal information if needed',
      'Resolve financial or academic holds that prevent enrollment',
    ],
    college: [
      'Send reminders via CRM and Mongoose texting about registration timelines',
      'Provide targeted outreach to students with holds, incomplete financial aid, SAP issues, and stop-outs',
    ],
    barriers: ['Unresolved holds', 'Outdated contact info', 'No response to outreach'],
  },
  {
    n: '02',
    label: 'Advising & Academic Planning',
    summary: 'Students meet with their advisor to review progress and build their course plan for the next term.',
    student: [
      'Schedule an advising session to review degree maps and progress',
      'Update or confirm the academic plan and select courses for next term',
    ],
    college: [
      'Faculty and staff advisors provide personalized, one-on-one guidance',
      'Advising tools like Degree Works and degree maps support informed decisions',
    ],
    barriers: ['No-show appointments', 'Unclear degree map', 'Advisor unavailability'],
  },
  {
    n: '03',
    label: 'Course Registration & Technology Setup',
    summary: 'Students complete registration in Banner and ensure their technology access is current before the semester begins.',
    student: [
      'Register for courses via Banner and verify the schedule',
      'Resolve any remaining financial or academic holds blocking enrollment',
    ],
    college: [
      'Proactive communication about holds, deadlines, and payment plan options',
      'IT support for login issues, LMS access, and course updates',
    ],
    barriers: ['Banner login issues', 'Waitlisted courses', 'Remaining holds'],
  },
  {
    n: '04',
    label: 'Financial Aid & Payment',
    summary: 'Students confirm their financial aid status and finalize payment before the semester payment deadline.',
    student: [
      'Submit FAFSA (if applicable) and review award status in MyLawson',
      'Confirm payment plan, tuition balance, or scholarship status',
    ],
    college: [
      'Financial Aid Office conducts outreach for missing or incomplete documents',
      'Business Office sends timely reminders for payment deadlines',
    ],
    barriers: ['Missing FAFSA documents', 'SAP hold', 'Unclear payment deadline'],
  },
  {
    n: '05',
    label: 'Pre-Semester Engagement',
    summary: 'The week before classes start, students get their materials and connect with campus resources.',
    student: [
      'Check Lawson State email and portal for class updates and announcements',
      'Purchase books and materials; attend welcome-back events',
    ],
    college: [
      'Send targeted communications about workshops, campus events, and success resources',
      'Offer re-engagement activities for students who previously stopped out',
    ],
    barriers: ['Not checking email', 'Book costs', 'Online vs. in-person confusion'],
  },
  {
    n: '06',
    label: 'First Week of Class',
    summary: 'Classes begin. Attendance, engagement, and early connections with instructors set the tone for the semester.',
    student: [
      'Attend classes and complete academic activity — in-person, online, or hybrid',
      'Drop & Add classes as needed before the deadline',
      'Connect with instructors and explore campus resources',
    ],
    college: [
      'Faculty conduct first-week check-ins and attendance verification',
      'Ensure syllabi are uploaded in Canvas and up to date',
      'Student Services reinforce engagement through success resources and early alerts',
      'Remind students of pertinent deadlines (Drop/Add, financial aid disbursement, etc.)',
    ],
    barriers: ['Missing attendance', 'Drop/Add deadline awareness', 'Not finding campus resources'],
  },
]

// ── Page ──────────────────────────────────────────────────────────

export default function ReturningJourneyPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '34vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto src="https://www.lawsonstate.edu/_resources/assets/img/News/pon-2.webp" alt="A returning Lawson State student" position="center 25%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/advising" className="hover:text-white transition-colors">Advising</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Returning Student Journey</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.80rem', letterSpacing: '0.22em' }}>
            Student Journey Map
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.025em' }}>
            RETURNING<br />STUDENTS
          </h1>
          <p style={{ fontSize: 'clamp(0.96rem, 1.4vw, 1.08rem)', color: 'oklch(1 0 0 / 0.65)', maxWidth: '54ch', lineHeight: 1.7 }}>
            Six phases — from pre-registration through the first week of class — showing what you do and how Lawson State supports you at every step.
          </p>
        </div>
      </section>

      {/* Phase legend */}
      <div style={{ background: 'oklch(0.79 0.19 78)', borderBottom: '1px solid oklch(0.68 0.20 76)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-sm" style={{ background: 'oklch(0.22 0.17 261)' }} />
            <span className="font-semibold" style={{ fontSize: '0.82rem', color: 'oklch(0.11 0.03 261)' }}>Student Actions</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-sm" style={{ background: 'oklch(0.35 0.10 261)' }} />
            <span className="font-semibold" style={{ fontSize: '0.82rem', color: 'oklch(0.11 0.03 261)' }}>College Support</span>
          </div>
          <div className="ml-auto">
            <Link href="/advising/book" className="press font-bold px-5 py-2 rounded-xl text-sm" style={{ background: 'oklch(0.13 0.12 261)', color: 'oklch(0.79 0.19 78)' }}>
              Book Advising →
            </Link>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <main className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-5 top-8 bottom-8 w-0.5 hidden md:block" style={{ background: 'oklch(0.22 0.17 261 / 0.15)' }} aria-hidden />

            <div className="space-y-8">
              {PHASES.map((phase, idx) => (
                <div key={phase.n} className="relative">
                  {/* Phase header */}
                  <div className="flex items-start gap-5 mb-5">
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-display font-black shrink-0 relative z-10"
                      style={{ background: 'oklch(0.22 0.17 261)', color: 'oklch(0.79 0.19 78)', fontSize: '0.80rem', letterSpacing: '0.05em' }}
                    >
                      {phase.n}
                    </div>
                    <div>
                      <h2 className="font-display font-black leading-none mb-1" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', color: 'oklch(0.14 0.05 261)', letterSpacing: '-0.015em' }}>
                        {phase.label}
                      </h2>
                      <p style={{ fontSize: '0.86rem', color: 'oklch(0.48 0.04 261)', lineHeight: 1.6, maxWidth: '60ch' }}>{phase.summary}</p>
                    </div>
                  </div>

                  {/* Two-column cards */}
                  <div className="md:pl-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                    {/* Student Actions */}
                    <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid oklch(0.22 0.17 261 / 0.18)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}>
                      <div className="px-5 py-3 flex items-center gap-2.5" style={{ background: 'oklch(0.22 0.17 261)' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="oklch(0.79 0.19 78)" strokeWidth="2" strokeLinecap="round" aria-hidden>
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                        </svg>
                        <p className="font-display font-bold text-white" style={{ fontSize: '0.82rem', letterSpacing: '0.04em' }}>Student Actions</p>
                      </div>
                      <ul className="px-5 py-4 space-y-3" style={{ background: 'white' }}>
                        {phase.student.map((item, i) => (
                          <li key={i} className="flex items-start gap-3" style={{ fontSize: '0.87rem', color: 'oklch(0.30 0.04 261)', lineHeight: 1.6 }}>
                            <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: 'oklch(0.79 0.19 78)' }} aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* College Support */}
                    <div className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid oklch(0.35 0.10 261 / 0.20)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}>
                      <div className="px-5 py-3 flex items-center gap-2.5" style={{ background: 'oklch(0.35 0.10 261)' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="oklch(0.90 0.08 80)" strokeWidth="2" strokeLinecap="round" aria-hidden>
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                        </svg>
                        <p className="font-display font-bold text-white" style={{ fontSize: '0.82rem', letterSpacing: '0.04em' }}>College Support</p>
                      </div>
                      <ul className="px-5 py-4 space-y-3" style={{ background: 'oklch(0.97 0.015 263)' }}>
                        {phase.college.map((item, i) => (
                          <li key={i} className="flex items-start gap-3" style={{ fontSize: '0.87rem', color: 'oklch(0.30 0.04 261)', lineHeight: 1.6 }}>
                            <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ background: 'oklch(0.35 0.10 261)' }} aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common Barriers */}
                    <div className="rounded-2xl overflow-hidden md:col-span-2 xl:col-span-1" style={{ border: '1.5px solid oklch(0.79 0.19 78 / 0.35)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}>
                      <div className="px-5 py-3 flex items-center gap-2.5" style={{ background: 'oklch(0.79 0.19 78)' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="oklch(0.11 0.03 261)" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                        </svg>
                        <p className="font-display font-bold" style={{ fontSize: '0.82rem', letterSpacing: '0.04em', color: 'oklch(0.11 0.03 261)' }}>Common Barriers</p>
                      </div>
                      <ul className="px-5 py-4 space-y-2.5" style={{ background: 'oklch(0.99 0.01 80)' }}>
                        {phase.barriers.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5" style={{ fontSize: '0.85rem', color: 'oklch(0.30 0.04 261)', lineHeight: 1.55 }}>
                            <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: 'oklch(0.68 0.19 78)' }} aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="px-5 pb-4">
                        <Link href="/advising/approach" className="text-xs font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--lscc-eyebrow)' }}>
                          View all barriers & approach →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Phase connector dot (visible on md+) */}
                  {idx < PHASES.length - 1 && (
                    <div className="hidden md:block absolute left-5 mt-3" aria-hidden>
                      <div className="w-3 h-3 rounded-full -translate-x-1/4 ml-[-1.5px]" style={{ background: 'oklch(0.22 0.17 261 / 0.20)' }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 rounded-2xl p-8 text-center" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Next Step</p>
            <h2 className="font-display font-black text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}>READY TO REGISTER?</h2>
            <p className="mb-6" style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '44ch', margin: '0 auto 1.5rem' }}>
              Start with your advisor. Book a free appointment or walk in to either campus — no wait list.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/advising/book" className="press btn-shimmer font-bold px-7 py-3.5 rounded-xl" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.96rem' }}>
                Book an Appointment →
              </Link>
              <Link href="/advising" className="press font-semibold px-7 py-3.5 rounded-xl text-white" style={{ border: '2px solid oklch(1 0 0 / 0.22)', fontSize: '0.96rem' }}>
                Back to Advising
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
