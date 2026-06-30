import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

const CLUBS = [
  { name: 'Student Government Association', category: 'Leadership', desc: 'Represent student interests, plan campus events, and develop your leadership skills.' },
  { name: 'Phi Theta Kappa Honor Society', category: 'Academic', desc: 'The premier honor society for two-year colleges. Recognize academic excellence and grow your network.' },
  { name: 'STEM Club', category: 'Academic', desc: 'Explore science, technology, engineering, and math through projects, competitions, and field trips.' },
  { name: 'Criminal Justice Club', category: 'Career', desc: 'Connect with law enforcement professionals and prepare for careers in criminal justice.' },
  { name: 'Business Club', category: 'Career', desc: 'Develop entrepreneurship skills, attend business events, and network with local business leaders.' },
  { name: 'Nursing Student Association', category: 'Career', desc: 'Build clinical skills, network with nurses, and support LSCC healthcare students.' },
  { name: 'Gospel Choir', category: 'Arts & Culture', desc: 'Join one of LSCC\'s beloved performing groups and share your gifts at campus events.' },
  { name: 'Drama Club', category: 'Arts & Culture', desc: 'Perform in productions, learn stagecraft, and develop creative expression.' },
  { name: 'Black Student Union', category: 'Culture & Identity', desc: 'Celebrate Black culture, history, and excellence. Host events that uplift the LSCC community.' },
  { name: 'International Student Club', category: 'Culture & Identity', desc: 'Connect students from around the world and celebrate cultural diversity on campus.' },
  { name: 'Enactus', category: 'Community Service', desc: 'Develop entrepreneurial projects that improve your community while building real business skills.' },
  { name: 'Green Team', category: 'Community Service', desc: 'Lead sustainability initiatives, campus clean-ups, and environmental awareness campaigns.' },
]

const CATEGORIES = ['All', 'Academic', 'Leadership', 'Career', 'Arts & Culture', 'Culture & Identity', 'Community Service'] as const

const STEPS = [
  { n: '01', title: 'Find a Club', body: 'Browse the list above or stop by Student Affairs on either campus for a current directory.' },
  { n: '02', title: 'Attend a Meeting', body: 'Most clubs hold open meetings early in each semester. Just show up — no commitment required.' },
  { n: '03', title: 'Join & Get Involved', body: 'Complete a simple membership form with the club advisor or officer. Dues vary by organization.' },
  { n: '04', title: 'Start Your Own', body: "Don't see what you're looking for? Propose a new club to Student Affairs. We support student-led initiatives." },
]

export default function ClubsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end', paddingTop: '9rem', paddingBottom: '4.5rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/campus-life" className="hover:text-white transition-colors">Campus Life</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Clubs &amp; Activities</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Student Life · Campus Community
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.8rem)', letterSpacing: '-0.03em' }}>
            CLUBS &amp; ACTIVITIES
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            30+ student organizations across academics, arts, leadership, culture, and community service.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Contact Student Affairs
            </Link>
            <Link
              href="/campus-life"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Campus Life Home
            </Link>
          </div>
        </div>
      </section>

      {/* Clubs grid */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Get Involved</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>FIND YOUR COMMUNITY</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CLUBS.map((club) => (
              <div
                key={club.name}
                className="rounded-2xl p-6 flex flex-col"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 16px oklch(0 0 0 / 0.04)' }}
              >
                <span
                  className="inline-block font-bold uppercase rounded-full px-3 py-0.5 mb-3 self-start"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.14em', background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.42 0.15 78)' }}
                >
                  {club.category}
                </span>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)', lineHeight: 1.25 }}>{club.name}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6, flex: 1 }}>{club.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm" style={{ color: 'oklch(0.50 0.04 261)' }}>
            This is a representative sample. Contact <Link href="/contact" className="underline hover:no-underline" style={{ color: 'oklch(0.42 0.17 261)' }}>Student Affairs</Link> for the complete and current club directory.
          </p>
        </div>
      </section>

      {/* How to join */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Getting Started</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO JOIN</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="flex flex-col gap-3">
                <div
                  className="font-display font-black"
                  style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}
                >
                  {s.n}
                </div>
                <p className="font-display font-black" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="py-12 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Why Join</p>
            <h2 className="font-display font-black" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>THE BENEFITS OF INVOLVEMENT</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: 'Leadership Experience', body: 'Develop real skills — planning, budgeting, public speaking — that look great on a resume or transfer application.' },
              { title: 'Build Your Network', body: 'Form relationships with faculty advisors, classmates, and community members who can open doors.' },
              { title: 'Have Fun', body: 'Campus life matters. Students who are connected to the college community tend to persist and graduate at higher rates.' },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-5"
                style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
              >
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{b.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Questions about clubs &amp; activities?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              Student Affairs · 205.929.6437 · Both campuses
            </p>
          </div>
          <Link
            href="/contact"
            className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl"
            style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
          >
            Contact Student Affairs
          </Link>
        </div>
      </div>

      <Prefooter />

      <SiteFooter />

      <MobileBottomNav />

      <div className="mobile-nav-spacer" />
    </>
  )
}
