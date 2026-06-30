import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'

const SPORTS = [
  { name: 'Baseball', season: 'Spring', conf: 'ACCC / NJCAA Division I', note: 'Competing since 1971' },
  { name: "Men's Basketball", season: 'Winter', conf: 'ACCC / NJCAA Division I', note: 'Multiple national finalists' },
  { name: "Women's Basketball", season: 'Winter', conf: 'ACCC / NJCAA Division I', note: '' },
  { name: 'Softball', season: 'Spring', conf: 'ACCC / NJCAA Division I', note: '' },
  { name: "Men's Cross Country", season: 'Fall', conf: 'NJCAA', note: '' },
  { name: "Women's Cross Country", season: 'Fall', conf: 'NJCAA', note: '' },
  { name: 'Football', season: 'Fall', conf: 'ACCC / NJCAA Division I', note: 'Central Division' },
  { name: "Men's Soccer", season: 'Fall', conf: 'ACCC / NJCAA Division I', note: '' },
  { name: "Women's Soccer", season: 'Fall', conf: 'ACCC / NJCAA Division I', note: '' },
  { name: "Men's Tennis", season: 'Spring', conf: 'NJCAA', note: '' },
  { name: "Women's Tennis", season: 'Spring', conf: 'NJCAA', note: '' },
  { name: "Men's Track & Field", season: 'Spring', conf: 'NJCAA', note: '' },
  { name: "Women's Track & Field", season: 'Spring', conf: 'NJCAA', note: '' },
  { name: 'Volleyball', season: 'Fall', conf: 'ACCC / NJCAA Division I', note: '' },
]

const SEASONS = ['Fall', 'Winter', 'Spring'] as const

const STUDENT_ATHLETE_PERKS = [
  'Athletic scholarships for qualifying student-athletes',
  'Academic support and priority advising',
  'Athletic training and sports medicine staff',
  'Access to NJCAA and transfer pathways to four-year programs',
  'Championship experience — LSCC teams regularly compete for conference and national titles',
]

export default function AthleticsPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '40vh', display: 'flex', alignItems: 'flex-end', paddingTop: '9rem', paddingBottom: '4.5rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/campus-life" className="hover:text-white transition-colors">Campus Life</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Monarch Athletics</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            NJCAA Division I · Alabama Community College Conference
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', letterSpacing: '-0.03em' }}>
            MONARCH ATHLETICS
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '52ch', lineHeight: 1.7 }}>
            14 intercollegiate sports. Competing at the highest level of junior college athletics — NJCAA Division I.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://monarchsports.lawsonstate.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}
            >
              Monarch Sports Site<span className="sr-only"> (opens in new tab)</span>
            </a>
            <Link
              href="/contact"
              className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white"
              style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}
            >
              Contact Athletics
            </Link>
          </div>
        </div>
      </section>

      {/* Stat bar */}
      <div style={{ background: 'oklch(0.79 0.19 78)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { n: '14', label: 'Sports' },
            { n: 'D-I', label: 'NJCAA Level' },
            { n: '1960', label: 'Athletics Since' },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: 'oklch(0.11 0.03 261)', lineHeight: 1, letterSpacing: '-0.03em' }}>{s.n}</p>
              <p className="font-semibold uppercase text-xs" style={{ color: 'oklch(0.22 0.17 261)', letterSpacing: '0.15em', marginTop: '0.25rem' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sports by season */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>All Sports</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>14 PROGRAMS</h2>
          </div>

          {SEASONS.map((season) => {
            const sports = SPORTS.filter((s) => s.season === season)
            return (
              <div key={season} className="mb-10">
                <p className="font-display font-black mb-4 uppercase" style={{ fontSize: '0.9rem', letterSpacing: '0.1em', color: 'oklch(0.45 0.04 261)' }}>
                  {season} Sports
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sports.map((sport) => (
                    <div
                      key={sport.name}
                      className="rounded-xl px-5 py-4"
                      style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
                    >
                      <p className="font-display font-black mb-0.5" style={{ fontSize: '0.97rem', color: 'oklch(0.16 0.04 261)' }}>{sport.name}</p>
                      <p className="text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>{sport.conf}</p>
                      {sport.note && (
                        <p className="text-xs mt-1.5 font-semibold" style={{ color: 'oklch(0.79 0.19 78)' }}>{sport.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Student-athlete info */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Compete & Earn</p>
            <h2 className="font-display font-black mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>STUDENT-ATHLETE BENEFITS</h2>
            <ul className="flex flex-col gap-3">
              {STUDENT_ATHLETE_PERKS.map((perk) => (
                <li key={perk} className="flex gap-3" style={{ color: 'oklch(0.38 0.04 261)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                  <span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700, flexShrink: 0, marginTop: '0.15rem' }}>›</span>
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Recruitment card */}
          <div className="rounded-2xl p-8" style={{ background: 'oklch(0.22 0.17 261)' }}>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.72rem', letterSpacing: '0.2em' }}>Prospective Athletes</p>
            <p className="font-display font-black text-white mb-4" style={{ fontSize: '1.5rem', letterSpacing: '-0.02em' }}>WANT TO PLAY FOR THE MONARCHS?</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Contact the Athletics Department to learn about tryouts, scholarships, and eligibility requirements for NJCAA student-athletes.
            </p>
            <div className="flex flex-col gap-2 mb-6 text-sm" style={{ color: 'oklch(1 0 0 / 0.65)' }}>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Phone:</span> 205.929.6350</div>
              <div><span style={{ color: 'oklch(0.79 0.19 78)', fontWeight: 700 }}>Location:</span> Birmingham Campus · Athletic Complex</div>
            </div>
            <Link
              href="/contact"
              className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg"
              style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.92rem' }}
            >
              Contact Athletics Office
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
