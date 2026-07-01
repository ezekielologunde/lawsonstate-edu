import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import HeroPhoto from '@/components/hero-photo'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'
import Prefooter from '@/components/prefooter'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Meet the President | Lawson State',
  description:
    'A message from Dr. Cynthia T. Anthony, President of T.A. Lawson State Community College — leading Birmingham’s HBCU community college with a mission of cultivating success through excellence and innovation.',
}

const PRIORITIES = [
  { title: 'Access & Affordability', desc: 'Keeping tuition among the lowest in Alabama so that cost is never the reason a student stops short of a degree.' },
  { title: 'Academic Excellence', desc: 'Maintaining SACSCOC-accredited programs and strong transfer and completion outcomes across both campuses.' },
  { title: 'Workforce & Community', desc: 'Aligning career-technical and workforce training with the needs of Birmingham-area employers and families.' },
  { title: 'Student Success', desc: 'Wrapping every student in advising, tutoring, and support services from first application to commencement.' },
]

export default function PresidentPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '42vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <HeroPhoto
          src="https://www.lawsonstate.edu/_resources/assets/img/News/lawson-president-joins-UAB-west-hospital-board.webp"
          alt="Dr. Cynthia T. Anthony, President of Lawson State Community College"
          position="center 25%"
        />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Meet the President</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow-on-dark)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            Office of the President
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            MEET THE PRESIDENT
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            Dr. Cynthia T. Anthony leads T.A. Lawson State Community College — one of Alabama’s Historically Black Community Colleges, serving Birmingham and Bessemer since 1949.
          </p>
        </div>
      </section>

      {/* Message */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 items-start">
          <div>
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>A Message from the President</p>
            <h2 className="font-display font-black leading-none mb-5" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>
              CULTIVATING SUCCESS
            </h2>
            <div className="space-y-4" style={{ fontSize: '1rem', color: 'oklch(0.34 0.04 261)', lineHeight: 1.75 }}>
              <p>
                Welcome to T.A. Lawson State Community College. For more than 75 years, our college has opened the door
                to higher education and economic opportunity for the people of the Birmingham region — and that mission
                is as vital today as it was in 1949.
              </p>
              <p>
                Our promise is simple: cultivating success through excellence and innovation. Whether you are earning your
                first college credit, training for a high-demand career, transferring to a four-year university, or returning
                to finish what you started, you will find dedicated faculty, affordable tuition, and a community committed to
                your success on both our Birmingham and Bessemer campuses.
              </p>
              <p>
                We invite you to explore all that Lawson State has to offer. Your goals matter here, and we are ready to help
                you reach them.
              </p>
            </div>
            <p className="mt-6 font-display font-black" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>
              Dr. Cynthia T. Anthony
            </p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(0.50 0.03 261)' }}>President, T.A. Lawson State Community College</p>
          </div>

          <div className="flex flex-col gap-5">
            {/* President portrait */}
            <figure className="rounded-2xl overflow-hidden" style={{ border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.10)' }}>
              <div className="relative w-full" style={{ aspectRatio: '4 / 5' }}>
                <Image
                  src="https://www.lawsonstate.edu/_resources/assets/img/News/lawson-president-joins-UAB-west-hospital-board.webp"
                  alt="Dr. Cynthia T. Anthony, President of Lawson State Community College"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <figcaption className="px-4 py-3" style={{ background: 'oklch(0.22 0.17 261)' }}>
                <p className="font-display font-black text-white" style={{ fontSize: '0.95rem' }}>Dr. Cynthia T. Anthony</p>
                <p style={{ fontSize: '0.74rem', color: 'oklch(1 0 0 / 0.66)' }}>President · T.A. Lawson State Community College</p>
              </figcaption>
            </figure>

          <div className="rounded-2xl p-6" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.72rem', letterSpacing: '0.18em' }}>At a Glance</p>
            <dl className="space-y-3 text-sm">
              {[
                ['Institution', 'T.A. Lawson State Community College'],
                ['Founded', '1949'],
                ['Accreditation', 'SACSCOC — associate degree granting'],
                ['Campuses', 'Birmingham & Bessemer, Alabama'],
                ['Mission', 'Cultivating success through excellence and innovation'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-semibold uppercase" style={{ fontSize: '0.66rem', letterSpacing: '0.12em', color: 'oklch(0.55 0.04 261)' }}>{k}</dt>
                  <dd style={{ color: 'oklch(0.28 0.05 261)' }}>{v}</dd>
                </div>
              ))}
            </dl>
            <Link href="/about" className="press inline-flex items-center mt-5 text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
              About Lawson State →
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Presidential Priorities</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT GUIDES OUR WORK</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRIORITIES.map((p) => (
              <div key={p.title} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.06)' }}>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.22 0.17 261)' }}>{p.title}</p>
                <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about/facts" className="press text-sm font-semibold px-5 py-2.5 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
              Facts & Data →
            </Link>
            <Link href="/about/faculty" className="press text-sm font-semibold px-5 py-2.5 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
              Faculty & Staff Directory →
            </Link>
            <Link href="/contact" className="press text-sm font-semibold px-5 py-2.5 rounded-xl" style={{ background: 'oklch(0.97 0.015 255)', border: '1.5px solid oklch(0 0 0 / 0.07)', color: 'oklch(0.28 0.05 261)' }}>
              Contact the College →
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
