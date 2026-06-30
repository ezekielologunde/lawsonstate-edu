import Link from 'next/link'
import Nav from '@/components/nav'
import SiteFooter from '@/components/site-footer'

const PROGRAMS = [
  {
    name: 'GED® Preparation',
    badge: 'High School Equivalency',
    desc: 'The General Educational Development (GED) credential is the standard high school equivalency diploma recognized by employers and colleges across the US. Lawson State offers free preparation classes covering all four GED subject areas.',
    subjects: ['Mathematical Reasoning', 'Reasoning Through Language Arts', 'Science', 'Social Studies'],
    cost: 'Classes are free. GED testing fees apply (approximately $36 per subject).',
    cta: null,
  },
  {
    name: 'Adult Basic Education (ABE)',
    badge: 'Literacy & Foundational Skills',
    desc: 'For adults who need to strengthen foundational reading, writing, and math skills below the GED level. ABE provides a supportive environment to build the skills needed for further education or better employment.',
    subjects: ['Reading comprehension', 'Writing and grammar', 'Basic mathematics', 'Life skills and financial literacy'],
    cost: 'Free to qualifying adult learners.',
    cta: null,
  },
  {
    name: 'English Language Acquisition (ELA/ESL)',
    badge: 'English as a Second Language',
    desc: 'English language instruction for adult immigrants and non-native speakers who want to improve communication skills for work, daily life, and further education. Classes are offered at multiple skill levels.',
    subjects: ['Conversational English', 'Workplace communication', 'Reading and writing in English', 'Citizenship preparation'],
    cost: 'Free to qualifying adult learners.',
    cta: null,
  },
  {
    name: 'Integrated Education & Training (IET)',
    badge: 'Career Pathway',
    desc: 'Combines adult education with occupational skills training, allowing students to earn a credential or complete workforce training at the same time as completing their GED or improving English skills.',
    subjects: ['Healthcare pathway (CNA, Medical Assistant)', 'Manufacturing and skilled trades', 'Business and office skills', 'CDL and transportation'],
    cost: 'May qualify for Workforce Innovation and Opportunity Act (WIOA) funding.',
    cta: '/workforce',
  },
]

const STEPS = [
  { n: '01', title: 'Contact Adult Ed', body: 'Call or visit Lawson State\'s Adult Education office. No application fee required. You\'ll complete a brief intake assessment to determine your starting level.' },
  { n: '02', title: 'Placement Assessment', body: 'A short assessment (TABE or CASAS) helps instructors place you in the right class level. No test prep needed — it\'s just to find your starting point.' },
  { n: '03', title: 'Choose Your Schedule', body: 'Classes are offered in morning, afternoon, and evening sessions to work around jobs and family. Online and hybrid options may be available.' },
  { n: '04', title: 'Start Learning', body: 'Work at your own pace with supportive instructors. When you\'re ready, schedule your GED exam or continue into college courses or workforce training.' },
]

export default function AdultEducationPage() {
  return (
    <>
      <Nav />

      <section
        className="page-hero relative px-6 overflow-hidden"
        style={{ background: 'oklch(0.22 0.17 261)', minHeight: '36vh', display: 'flex', alignItems: 'flex-end', paddingTop: '8rem', paddingBottom: '4rem' }}
      >
        <div className="absolute inset-0" aria-hidden style={{ background: 'linear-gradient(to right, oklch(0.22 0.17 261 / 0.97) 0%, oklch(0.18 0.15 262 / 0.80) 100%)' }} />
        <div className="relative max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <p className="text-sm mb-2" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden>›</span>
            <Link href="/academics" className="hover:text-white transition-colors">Programs</Link>
            <span className="mx-2" aria-hidden>›</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>Adult Education</span>
          </p>
          <p className="font-display font-semibold uppercase mb-3" style={{ color: 'oklch(0.79 0.19 78)', fontSize: '0.82rem', letterSpacing: '0.22em' }}>
            GED · ABE · ESL · IET · Free Programs
          </p>
          <h1 className="font-display font-black text-white leading-none mb-4" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', letterSpacing: '-0.025em' }}>
            ADULT EDUCATION
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'oklch(1 0 0 / 0.70)', maxWidth: '56ch', lineHeight: 1.7 }}>
            It&apos;s never too late to continue your education. Lawson State offers free adult education programs for adults who want a GED, better English skills, or a path into a career.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/contact" className="press btn-shimmer inline-flex items-center font-bold px-6 py-3 rounded-lg" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', fontSize: '0.95rem' }}>
              Enroll in Adult Education
            </Link>
            <Link href="/admissions" className="press inline-flex items-center font-semibold px-6 py-3 rounded-lg text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)', fontSize: '0.95rem' }}>
              College Admissions →
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Free Programs</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>WHAT WE OFFER</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROGRAMS.map((p) => (
              <div key={p.name} className="rounded-2xl p-7" style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}>
                <span className="inline-block font-bold uppercase text-xs px-3 py-0.5 rounded-full mb-3" style={{ background: 'oklch(0.22 0.17 261)', color: 'white', letterSpacing: '0.1em' }}>
                  {p.badge}
                </span>
                <p className="font-display font-black mb-3" style={{ fontSize: '1.1rem', color: 'oklch(0.16 0.04 261)' }}>{p.name}</p>
                <p style={{ fontSize: '0.9rem', color: 'oklch(0.40 0.04 261)', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>
                <div className="rounded-xl p-4 mb-3" style={{ background: 'oklch(0.95 0.03 255)' }}>
                  <p className="font-bold text-xs uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', letterSpacing: '0.12em' }}>Topics Covered</p>
                  <div className="flex flex-wrap gap-2">
                    {p.subjects.map((s) => (
                      <span key={s} className="text-xs rounded-full px-3 py-1" style={{ background: 'oklch(0.79 0.19 78 / 0.10)', color: 'oklch(0.42 0.15 78)' }}>{s}</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs" style={{ color: 'oklch(0.50 0.04 261)' }}>{p.cost}</p>
                {p.cta && (
                  <Link href={p.cta} className="mt-3 inline-block text-sm font-bold" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    Workforce training →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="font-display font-semibold uppercase mb-2" style={{ color: 'var(--lscc-eyebrow)', fontSize: '0.78rem', letterSpacing: '0.22em' }}>Getting Started</p>
            <h2 className="font-display font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>HOW TO ENROLL</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s) => (
              <div key={s.n}>
                <div className="font-display font-black mb-3" style={{ fontSize: '2.8rem', color: 'oklch(0.79 0.19 78)', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.n}</div>
                <p className="font-display font-black mb-2" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{s.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'oklch(0.45 0.04 261)', lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: 'oklch(0.22 0.17 261)' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display font-black text-white" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', letterSpacing: '-0.02em' }}>Adult Education Office</p>
            <p style={{ fontSize: '0.9rem', color: 'oklch(1 0 0 / 0.65)', marginTop: '0.3rem' }}>
              205.929.6390 · adulted@lawsonstate.edu · Birmingham Campus
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact" className="press btn-shimmer shrink-0 font-bold px-7 py-3.5 rounded-xl text-sm" style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}>
              Get Started Today
            </Link>
            <Link href="/workforce" className="press shrink-0 font-semibold px-7 py-3.5 rounded-xl text-sm text-white" style={{ border: '1.5px solid oklch(1 0 0 / 0.28)' }}>
              Workforce Training →
            </Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
