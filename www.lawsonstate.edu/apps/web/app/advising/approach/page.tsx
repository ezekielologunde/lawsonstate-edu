import Link from 'next/link'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

// ── ASN Framework data ────────────────────────────────────────────

const ASN_PILLARS = [
  { n: '01', label: 'Know Your Students', desc: 'Use extended demographic data and student voice to understand who you serve — not just enrollment numbers, but lived experiences, goals, and obstacles.' },
  { n: '02', label: 'Map the Ideal Journey', desc: 'Define what a successful advising experience looks like at every touchpoint, from first inquiry to graduation or transfer. Make the ideal explicit, then close the gap.' },
  { n: '03', label: 'Identify Barriers', desc: 'Proactively surface the structural, systemic, and personal obstacles students face. Barrier identification is ongoing — not a one-time audit.' },
  { n: '04', label: 'Team Approach', desc: 'Advising does not happen in isolation. Financial aid, faculty, student services, and advisors must collaborate around a shared picture of each student.' },
]

const PERSONAS = [
  {
    type: 'First-Generation Student',
    icon: '🎓',
    context: 'Navigating a system their family has not experienced. Needs plain language, strong relationship, and family-inclusive communication.',
    needs: ['Clear, jargon-free guidance', 'FAFSA navigation support', 'Campus belonging and community', 'Family-facing communication'],
    barriers: ['Unfamiliarity with college systems', 'Financial aid complexity', 'Imposter syndrome', 'Limited social capital'],
  },
  {
    type: 'Returning / Stop-Out Student',
    icon: '🔄',
    context: 'Returning after a gap — often due to financial, family, or health reasons. May have holds, stale credits, or anxiety about re-entry.',
    needs: ['Non-judgmental re-entry guidance', 'Hold resolution support', 'Recognition of life experience', 'Flexible scheduling options'],
    barriers: ['Unresolved holds', 'Stale or invalid credits', 'Technology access gaps', 'Self-doubt about returning'],
  },
  {
    type: 'Transfer Student',
    icon: '🏛️',
    context: 'Bringing credits from another institution. Needs accurate evaluation, STARS/AGSC alignment, and a clear completion path.',
    needs: ['Transcript evaluation and credit mapping', 'STARS articulation guidance', 'Efficient completion plan', 'Transfer destination clarity'],
    barriers: ['Credit equivalency uncertainty', 'Dual-institution financial aid', 'Unclear articulation rules', 'Repeated coursework risk'],
  },
  {
    type: 'Working Adult Student',
    icon: '💼',
    context: 'Balancing work, family, and school. Time is their scarcest resource. Values efficiency, evening/online access, and direct communication.',
    needs: ['Evening and weekend advising access', 'Asynchronous communication options', 'Flexible course scheduling', 'Efficient degree completion'],
    barriers: ['Limited appointment availability', 'Campus inaccessibility outside 9–5', 'Work schedule conflicts', 'Childcare and transportation'],
  },
  {
    type: 'Health Sciences Student',
    icon: '⚕️',
    context: 'Pursuing competitive programs with clinical requirements, waitlists, and licensure pathways. High stakes, high specificity.',
    needs: ['Waitlist and admissions navigation', 'Clinical hour planning', 'Licensure and certification guidance', 'Bridge pathway options'],
    barriers: ['Program waitlists and capacity limits', 'Complex clinical scheduling', 'Prerequisite sequencing errors', 'Transfer credit rejection'],
  },
  {
    type: 'TRiO-Eligible Student',
    icon: '🤝',
    context: 'First-gen, low-income, and/or students with disabilities. Eligible for federally funded TRiO support services alongside advising.',
    needs: ['TRiO program connection', 'Disability accommodation support', 'Scholarship and grant guidance', 'Holistic wraparound support'],
    barriers: ['Unawareness of TRiO eligibility', 'Disability accommodation gaps', 'Financial pressure causing withdrawal', 'Isolation from support networks'],
  },
]

const BARRIER_CATEGORIES = [
  { label: 'Financial', icon: '💰', items: ['FAFSA incomplete or missing documents', 'Satisfactory Academic Progress (SAP) holds', 'Outstanding tuition balance', 'Unaware of payment plan options', 'Scholarship deadline gaps'] },
  { label: 'Administrative', icon: '📋', items: ['Registration holds (financial, academic, admin)', 'Outdated or missing contact information', 'Incorrect or missing program of study on file', 'Prior balance preventing transcript release', 'Name/ID mismatch in systems'] },
  { label: 'Academic', icon: '📚', items: ['Unclear degree map or audit discrepancies', 'Prerequisite confusion causing course conflicts', 'Unrecognized transfer credits', 'Academic probation without a recovery plan', 'Low credit-hour progress toward completion'] },
  { label: 'Technology', icon: '💻', items: ['Banner login issues blocking registration', 'Canvas or email access not set up', 'Degree Works not reflecting correct program', 'Unfamiliarity with MyLawson portal', 'No device or internet access at home'] },
  { label: 'Life Circumstances', icon: '🏠', items: ['Work schedule conflicts with advising hours', 'Transportation and commute barriers', 'Childcare and family obligations', 'Mental health and wellness challenges', 'Food or housing insecurity'] },
]

const TOOLS = [
  { name: 'Degree Works', use: 'Academic audit and degree planning. Shows remaining requirements, transfer credit application, and projected completion.', link: null },
  { name: 'Banner', use: 'Course registration, student records, and hold management. The primary SIS for enrollment and grades.', link: null },
  { name: 'Mongoose / CRM', use: 'Proactive outreach via text, email, and call. Used for registration reminders, hold notifications, and stop-out recovery.', link: null },
  { name: 'Microsoft Teams', use: 'Advisor team collaboration, shared caseload notes, and cross-department communication for complex student cases.', link: null },
  { name: 'Canvas', use: 'Course delivery platform and syllabus access. Advising cross-references Canvas for academic activity verification.', link: null },
  { name: 'MyLawson Portal', use: 'Student self-service hub. Aid status, course schedule, account balance, and advisor contact — all in one place.', link: null },
]

// ── Page ─────────────────────────────────────────────────────────

export default function AdvisingApproachPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="page-hero relative px-6 overflow-hidden" style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <HeroPhoto src="https://live.staticflickr.com/65535/55259233505_3af8bb2b74_z.jpg" alt="A Lawson State advisor with a student" position="center 30%" />
        <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.45)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/advising" className="hover:text-white transition-colors">Advising</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Our Approach</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.80rem', letterSpacing: '0.22em' }}>
            Advising Success Network · ASN Framework
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', letterSpacing: '-0.025em' }}>
            THE IDEAL<br />ADVISING EXPERIENCE
          </h1>
          <p style={{ fontSize: 'clamp(0.96rem, 1.4vw, 1.08rem)', color: 'oklch(1 0 0 / 0.65)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Lawson State advising is built on the ASN framework — knowing students deeply, mapping their ideal journey, removing barriers, and delivering support as a coordinated team.
          </p>
        </div>
      </section>

      {/* ASN Pillars */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Advising Success Network</p>
          <h2 className="font-display font-black leading-none mb-10" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FOUR PILLARS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ASN_PILLARS.map(p => (
              <div key={p.n} className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.04)' }}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1 }}>{p.n}</div>
                <h3 className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.22 0.17 261)' }}>{p.label}</h3>
                <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Personas */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Know Your Students</p>
          <h2 className="font-display font-black leading-none mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>STUDENT PERSONAS</h2>
          <p className="mb-10" style={{ fontSize: '0.96rem', color: 'oklch(0.42 0.04 261)', maxWidth: '60ch', lineHeight: 1.7 }}>
            Personas represent the distinct populations advisors serve. Each brings different needs, barriers, and success markers. Advisors who understand these differences deliver more relevant, effective guidance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERSONAS.map(p => (
              <div key={p.type} className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}>
                <div className="px-6 pt-6 pb-4">
                  <span className="text-3xl mb-3 block" aria-hidden>{p.icon}</span>
                  <h3 className="font-display font-black mb-2" style={{ fontSize: '1.02rem', color: 'oklch(0.16 0.04 261)' }}>{p.type}</h3>
                  <p style={{ fontSize: '0.83rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{p.context}</p>
                </div>
                <div className="grid grid-cols-2" style={{ borderTop: '1px solid oklch(0 0 0 / 0.06)' }}>
                  <div className="px-5 py-4" style={{ borderRight: '1px solid oklch(0 0 0 / 0.06)' }}>
                    <p className="font-semibold mb-2" style={{ fontSize: '0.70rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.50 0.03 261)' }}>Needs</p>
                    <ul className="space-y-1.5">
                      {p.needs.map(n => <li key={n} style={{ fontSize: '0.78rem', color: 'oklch(0.35 0.04 261)', lineHeight: 1.5 }}>{n}</li>)}
                    </ul>
                  </div>
                  <div className="px-5 py-4" style={{ background: 'oklch(0.97 0.015 263)' }}>
                    <p className="font-semibold mb-2" style={{ fontSize: '0.70rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(0.50 0.03 261)' }}>Common Barriers</p>
                    <ul className="space-y-1.5">
                      {p.barriers.map(b => <li key={b} style={{ fontSize: '0.78rem', color: 'oklch(0.35 0.04 261)', lineHeight: 1.5 }}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barrier Categories */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Barrier Identification</p>
          <h2 className="font-display font-black leading-none mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT STOPS STUDENTS</h2>
          <p className="mb-10" style={{ fontSize: '0.96rem', color: 'oklch(0.42 0.04 261)', maxWidth: '60ch', lineHeight: 1.7 }}>
            Barriers are not student failures — they are systemic and structural friction points. Identifying them explicitly is the first step to removing them.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BARRIER_CATEGORIES.map(cat => (
              <div key={cat.label} className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <div className="px-5 py-3.5 flex items-center gap-3" style={{ background: 'oklch(0.22 0.17 261)' }}>
                  <span className="text-lg" aria-hidden>{cat.icon}</span>
                  <p className="font-display font-bold text-white" style={{ fontSize: '0.88rem', letterSpacing: '0.04em' }}>{cat.label} Barriers</p>
                </div>
                <ul className="px-5 py-4 space-y-2.5" style={{ background: 'white' }}>
                  {cat.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5" style={{ fontSize: '0.84rem', color: 'oklch(0.35 0.04 261)', lineHeight: 1.55 }}>
                      <span className="w-1 h-1 rounded-full shrink-0 mt-2" style={{ background: 'oklch(0.79 0.19 78)' }} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl px-7 py-5" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-black text-white mb-1" style={{ fontSize: '1rem' }}>Student Needs Assessment</p>
            <p style={{ fontSize: '0.88rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '64ch', lineHeight: 1.7 }}>
              A structured needs assessment — informed by extended demographic data and direct student voice — helps advisors prioritize outreach, target interventions, and allocate team capacity where barriers are most concentrated.
            </p>
          </div>
        </div>
      </section>

      {/* Tools & Resources */}
      <section className="py-16 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Team Collaboration</p>
          <h2 className="font-display font-black leading-none mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>TOOLS & RESOURCES</h2>
          <p className="mb-10" style={{ fontSize: '0.96rem', color: 'oklch(0.42 0.04 261)', maxWidth: '58ch', lineHeight: 1.7 }}>
            Effective advising is tool-assisted and team-coordinated. These platforms connect the advisor ecosystem across registration, financial aid, outreach, and student services.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS.map(t => (
              <div key={t.name} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 263)', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <h3 className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.22 0.17 261)' }}>{t.name}</h3>
                <p style={{ fontSize: '0.84rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.7 }}>{t.use}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-6" style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>For Students</p>
          <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em' }}>READY TO MEET YOUR ADVISOR?</h2>
          <p className="mb-8" style={{ fontSize: '0.96rem', color: 'oklch(1 0 0 / 0.65)', maxWidth: '44ch', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Free advising — no wait list. Book online or walk in Monday–Friday at either campus.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/advising/book" className="press btn-shimmer font-bold px-8 py-4 rounded-xl" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.96rem' }}>
              Book an Appointment →
            </Link>
            <Link href="/advising" className="press font-semibold px-8 py-4 rounded-xl text-white" style={{ border: '2px solid oklch(1 0 0 / 0.22)', fontSize: '0.96rem' }}>
              Back to Advising
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
