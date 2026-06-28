import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

export const metadata: Metadata = {
  title: 'Career & Transfer Services | Lawson State Community College',
  description:
    'Launch your career or transfer to a 4-year university with help from Lawson State Career Services. Career Coach, College Central job board, mock interviews, transfer advising — Birmingham & Bessemer.',
}

const TOOLS = [
  {
    title: 'Career Coach Platform',
    tag: 'Start Here',
    desc: 'Not sure where to start? Take a career assessment, browse careers and programs, and map a path that fits your goals. All graduating students are required to complete the Graduation Exit Survey through Career Coach.',
    link: { label: 'Launch Career Coach', href: 'https://lawsonstate.emsicc.com' },
  },
  {
    title: 'College Central Job Board',
    tag: 'Job Search',
    desc: 'Search and apply for jobs, internships, and co-ops through College Central — our dedicated job board that connects LSCC students with local and regional employers.',
    link: { label: 'Visit College Central', href: 'https://www.collegecentral.com/lawsonstate' },
  },
  {
    title: 'Resume & Cover Letter Help',
    tag: 'Career Prep',
    desc: 'Work one-on-one with a career coordinator to build or polish your resume and cover letter. We review drafts, highlight your skills, and help you make a strong first impression.',
    link: null,
  },
  {
    title: 'Mock Interviews',
    tag: 'Interview Ready',
    desc: 'Practice makes perfect. Schedule a mock interview with our team to sharpen your responses, body language, and confidence before the real thing.',
    link: null,
  },
  {
    title: 'Transfer Admissions Assistance',
    tag: 'Transfer Students',
    desc: 'Ready to continue your education at a 4-year university? We help you research schools, navigate transfer requirements, search for transfer scholarships, and complete applications.',
    link: null,
  },
  {
    title: 'Career Fairs & Networking',
    tag: 'Events',
    desc: 'Connect directly with employers at our on-campus Career Fairs. Dress professionally, bring resumes, and get your foot in the door with hiring companies from across Alabama.',
    link: { label: 'View Events Calendar', href: '/calendar' },
  },
]

const STEPS = [
  { n: '01', label: 'Assess Your Interests', detail: 'Take the Career Coach assessment to discover career paths aligned to your personality and goals.' },
  { n: '02', label: 'Build Your Materials', detail: 'Create or refine your resume, LinkedIn profile, and cover letters with guidance from our team.' },
  { n: '03', label: 'Practice & Prepare', detail: 'Do a mock interview, attend a workshop, or visit office hours for personalized coaching.' },
  { n: '04', label: 'Connect With Employers', detail: 'Apply on College Central, attend Career Fairs, and network with employers hiring right now.' },
]

export default function CareerServicesPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section
          className="page-hero relative py-20 px-6 overflow-hidden"
          style={{ background: 'oklch(0.22 0.17 261)', minHeight: '38vh', display: 'flex', alignItems: 'flex-end' }}
        >
          <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(135deg, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.16 0.04 261 / 0.85) 100%)' }} />
          <div aria-hidden style={{ position: 'absolute', top: '-10%', right: '-8%', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.79 0.19 78 / 0.14) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 1 }} />
          <div aria-hidden style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, oklch(0.48 0.22 27 / 0.09) 0%, transparent 65%)', filter: 'blur(44px)', pointerEvents: 'none', zIndex: 1 }} />
          <div className="relative max-w-7xl mx-auto w-full" style={{ zIndex: 2 }}>
            <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '1.08rem', letterSpacing: '0.22em' }}>Your Gateway to the Future</p>
            <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5rem)', letterSpacing: '-0.025em' }}>CAREER & TRANSFER</h1>
            <p className="text-white/75 max-w-xl" style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.7 }}>
              Whether you&apos;re entering the workforce or continuing your education — we&apos;re here to help you make it happen.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link href="https://lawsonstate.emsicc.com" className="press btn-shimmer hero-cta-gold font-bold px-6 py-3 rounded-lg inline-block" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1rem' }}>
                Launch Career Coach
              </Link>
              <Link href="https://www.collegecentral.com/lawsonstate" className="press hero-cta-ghost font-semibold px-6 py-3 rounded-lg text-white inline-block" style={{ border: '1.5px solid oklch(1 0 0 / 0.25)', fontSize: '1rem' }}>
                Search Jobs
              </Link>
            </div>
          </div>
        </section>

        {/* 4-Step Path */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Your Roadmap</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>4 STEPS TO YOUR CAREER</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEPS.map((s) => (
                <div key={s.n} className="card-lift rounded-2xl p-6 shadow-card" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-display font-black" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '1.08rem' }}>{s.n}</div>
                  <h3 className="font-display font-bold mb-2 leading-snug" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>{s.label}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65 }}>{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Services */}
        <section className="py-20 px-6" style={{ background: 'oklch(0.92 0.05 255)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 scroll-reveal">
              <p className="font-display font-semibold uppercase mb-3" style={{ color: 'var(--lscc-eyebrow)', fontSize: '1.08rem', letterSpacing: '0.2em' }}>Tools & Resources</p>
              <h2 className="font-display font-black leading-none wipe-reveal" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.025em', color: 'oklch(0.16 0.04 261)' }}>CAREER SERVICES</h2>
            </div>
            <div className="stagger-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TOOLS.map((t) => (
                <div key={t.title} className="card-lift rounded-2xl p-7 flex flex-col" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <span className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4 w-fit" style={{ background: 'oklch(0.79 0.19 78 / 0.12)', color: 'oklch(0.55 0.16 68)' }}>{t.tag}</span>
                  <h3 className="font-display font-bold mb-3 leading-snug" style={{ fontSize: '1.08rem', color: 'oklch(0.16 0.04 261)' }}>{t.title}</h3>
                  <p className="leading-relaxed flex-1 mb-4" style={{ fontSize: '0.93rem', color: 'oklch(0.40 0.04 261)' }}>{t.desc}</p>
                  {t.link && (
                    <Link href={t.link.href} className="link-reveal font-semibold text-sm" style={{ color: 'var(--lscc-eyebrow)' }}>{t.link.label} →</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: 'oklch(0.42 0.17 261)' }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display font-black text-white leading-none mb-2 wipe-reveal" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '-0.025em' }}>BEGIN YOUR JOB SEARCH</h2>
              <p style={{ color: 'oklch(1 0 0 / 0.80)' }}>Reach out to speak with a career services coordinator today.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:help@lawsonstate.edu" className="press btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
                Email Career Services →
              </a>
              <Link href="/contact" className="press inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm" style={{ border: '1.5px solid oklch(1 0 0 / 0.30)', color: 'oklch(1 0 0 / 0.90)' }}>
                Visit Us
              </Link>
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
