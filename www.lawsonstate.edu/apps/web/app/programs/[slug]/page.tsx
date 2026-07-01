import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SAMPLE_PROGRAMS, CATEGORIES, DEGREE_TYPES, DELIVERY_MODES, type ProgramCategory } from '@/lib/programs-data'
import type { Metadata } from 'next'
import Nav from '@/components/nav'
import HeroPhoto from '@/components/hero-photo'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'

// One real Lawson State photo per category — reuses the same photo pool
// already used for hero backgrounds across the rest of the site.
const CATEGORY_HERO_IMAGES: Record<ProgramCategory, { src: string; alt: string }> = {
  'health-professions': { src: 'https://www.lawsonstate.edu/_resources/assets/img/News/EMS-SimRig.webp', alt: 'Hands-on health professions training at Lawson State' },
  'business-it':        { src: 'https://live.staticflickr.com/65535/55214074644_fb8b844f53_c.jpg', alt: 'A Lawson State business & IT student' },
  'career-technical':   { src: 'https://www.lawsonstate.edu/_resources/assets/img/Rich%20Raymond%20Mechatronics.jpg', alt: 'Hands-on career technical training at Lawson State' },
  stem:                 { src: 'https://www.lawsonstate.edu/_resources/assets/img/News/stem-scholar-interships.webp', alt: 'STEM students at Lawson State' },
  'college-transfer':   { src: 'https://www.lawsonstate.edu/_resources/images/.private_ldp/a405271/production/thumb/8e269562-ffa4-4384-9721-bf85bf60cf86.jpg', alt: 'Transfer students at Lawson State' },
  other:                { src: 'https://live.staticflickr.com/65535/55212927272_fb910af83c.jpg', alt: 'Lawson State Community College campus' },
}

// Short "who this is for" framing per category — combined with the program's
// own duration/delivery data for a program-specific sentence, no new fields needed.
const WHO_FOR: Record<ProgramCategory, string> = {
  'health-professions': 'You want a hands-on career caring for patients and helping your community stay healthy.',
  'business-it':        'You want practical, in-demand skills for an office, tech, or business career — with room to keep growing.',
  'career-technical':   'You like working with your hands and want a skilled trade that puts you to work fast.',
  stem:                 'You\'re curious about how things work and want a strong foundation in science, tech, engineering, or math.',
  'college-transfer':   'You want to start close to home, save on tuition, and transfer seamlessly into a four-year degree.',
  other:                'You\'re ready to build real skills toward a specific career or credential.',
}

// Accreditor keywords surfaced from a program's own tags — no schema change.
const ACCREDITOR_TAGS: Record<string, string> = {
  acbsp: 'ACBSP-Accredited',
  sacscoc: 'SACSCOC-Accredited',
  coemsp: 'CoAEMSP-Accredited',
}

// Program-specific recognition facts, keyed by program id — mirrored verbatim
// from the vetted tables already published on /about/accreditation and /academics
// (PROGRAM_ACCREDITATIONS, DIVISIONS highlights). No new claims are introduced
// here; this only surfaces what's already committed and reviewed elsewhere on
// the site onto the individual program page itself.
const RECOGNITION_BY_ID: Record<string, { label: string; body: string; href?: string }[]> = {
  'nursing-rn': [{ label: 'Nursing Accreditation', body: 'Accreditation Commission for Education in Nursing (ACEN)', href: 'https://acenursing.org' }],
  'dental-assistant-aas': [{ label: 'Dental Accreditation', body: 'Commission on Dental Accreditation (CODA), American Dental Association', href: 'https://ada.org' }],
  'dental-assistant-aot': [{ label: 'Dental Accreditation', body: 'Commission on Dental Accreditation (CODA), American Dental Association', href: 'https://ada.org' }],
  'dental-assistant-cer': [{ label: 'Dental Accreditation', body: 'Commission on Dental Accreditation (CODA), American Dental Association', href: 'https://ada.org' }],
  'ems-basic-stc': [{ label: 'EMS Accreditation', body: 'Committee on Accreditation of Educational Programs for the EMS Professions (CoAEMSP)', href: 'https://coaemsp.org' }],
  'ems-advanced-stc': [{ label: 'EMS Accreditation', body: 'Committee on Accreditation of Educational Programs for the EMS Professions (CoAEMSP)', href: 'https://coaemsp.org' }],
  'cosmetology-aot': [{ label: 'Cosmetology Accreditation', body: 'National Accrediting Commission of Career Arts and Sciences (NACCAS)', href: 'https://naccas.org' }],
  'cosmetology-cer': [{ label: 'Cosmetology Accreditation', body: 'National Accrediting Commission of Career Arts and Sciences (NACCAS)', href: 'https://naccas.org' }],
  'medical-office-admin-aas': [{ label: 'Curriculum Approval', body: 'American Association of Medical Assistants (AAMA)', href: 'https://aama-ntl.org' }],
  'business-admin-aa': [{ label: 'Business Accreditation', body: 'Accreditation Council for Business Schools and Programs (ACBSP)', href: 'https://acbsp.org' }],
  'business-education-aa': [{ label: 'Business Accreditation', body: 'Accreditation Council for Business Schools and Programs (ACBSP)', href: 'https://acbsp.org' }],
  'ford-asset-aas': [{ label: 'Factory-Sponsored Program', body: 'Ford Motor Company — Ford ASSET, part of the Alabama Center for Automotive Excellence' }],
  'gm-asep-aas': [{ label: 'Factory-Sponsored Program', body: 'General Motors — GM ASEP, part of the Alabama Center for Automotive Excellence' }],
  'toyota-tten-aas': [{ label: 'Factory-Sponsored Program', body: 'Toyota — T-TEN, part of the Alabama Center for Automotive Excellence' }],
  'mercedes-aas': [{ label: 'Factory-Sponsored Program', body: 'Mercedes-Benz — MercedesTech, part of the Alabama Center for Automotive Excellence' }],
  'air-conditioning-aot': [{ label: 'Program Accreditation', body: 'HVAC Excellence–accredited' }],
  'air-conditioning-cer': [{ label: 'Program Accreditation', body: 'HVAC Excellence–accredited' }],
  'air-conditioning-stc': [{ label: 'Program Accreditation', body: 'HVAC Excellence–accredited' }],
  'manufacturing-mechatronics-stc': [{ label: 'Center of Excellence', body: 'Mechatronics Center of Excellence (NC3 designated)' }],
}

// Selective-admission programs that require a separate competitive application
// beyond general college admission. Sourced from the 2024 Advising Manual,
// Department of Health Professions.
const ADN_POINTS = [
  { category: 'ACT or ACT Residual Test', max: 36, note: 'Minimum score of 18 required. Up to two scores accepted, no expiration. ACT Residual scores must be from an Alabama Community College.' },
  { category: 'Selected Coursework', max: 12, note: 'ENG 101, MTH 100+, BIO 201, BIO 202 — minimum 2.5 GPA required across these courses. A = 3 pts, B = 2 pts, C = 1 pt per course.' },
  { category: 'Additional Points', max: 10, note: 'HPS 103 (max 4 pts), MTH 186 Dosage Calculations (max 3 pts), BIO 103 Principles of Biology I (max 3 pts).' },
]
const ADN_REQUIREMENTS = [
  'Health form with current immunizations: Tetanus, Flu, MMR, Tuberculosis, Hepatitis B, Varicella',
  'Meet Essential Functions required for Health Professions students',
  'Proof of health insurance',
  'BLS certification, maintained throughout the program',
  'Background check and drug screening',
]

// Verified course curricula, keyed by program id — extracted and cross-checked
// against the 2025-2027 Catalog & Handbook (each group's total reconciles
// exactly against the catalog's own stated program total). Only populated for
// programs where the extraction was unambiguous; most programs don't have an
// entry yet, since the catalog's OCR text is noisy enough that a low-confidence
// guess risks putting wrong course codes on an official page.
type CurriculumGroup = { label: string; credits: number; courses: { code: string; title: string; credits: number }[] }
const CURRICULUM_BY_ID: Record<string, { totalCredits: number; groups: CurriculumGroup[] }> = {
  'nursing-rn': {
    totalCredits: 72,
    groups: [
      {
        label: 'General Studies', credits: 30,
        courses: [
          { code: 'ENG 101', title: 'English Composition', credits: 3 },
          { code: 'SPH 107', title: 'Public Speaking / Speech', credits: 3 },
          { code: '—', title: 'Humanities & Fine Arts elective', credits: 3 },
          { code: 'MTH 100+', title: 'Intermediate College Algebra or higher', credits: 3 },
          { code: 'BIO 201', title: 'Anatomy & Physiology I', credits: 4 },
          { code: 'BIO 202', title: 'Anatomy & Physiology II', credits: 4 },
          { code: 'BIO 220', title: 'Microbiology', credits: 4 },
          { code: 'PSY 200', title: 'General Psychology', credits: 3 },
          { code: 'PSY 210', title: 'Human Growth and Development', credits: 3 },
        ],
      },
      {
        label: 'Nursing Major', credits: 42,
        courses: [
          { code: 'NUR 102', title: 'Fundamentals of Nursing', credits: 6 },
          { code: 'NUR 103', title: 'Health Assessment', credits: 1 },
          { code: 'NUR 104', title: 'Introduction to Pharmacology', credits: 1 },
          { code: 'NUR 105', title: 'Adult Nursing', credits: 8 },
          { code: 'NUR 106', title: 'Maternal and Child Nursing', credits: 5 },
          { code: 'NUR 201', title: 'Nursing Through the Lifespan I', credits: 5 },
          { code: 'NUR 202', title: 'Nursing Through the Lifespan II', credits: 6 },
          { code: 'NUR 203', title: 'Nursing Through the Lifespan III', credits: 6 },
          { code: 'NUR 204', title: 'Role Transition for the Registered Nurse', credits: 4 },
        ],
      },
    ],
  },
  'welding-aot': {
    totalCredits: 76,
    groups: [
      {
        label: 'General Studies', credits: 25,
        courses: [
          { code: 'ORI 101', title: 'Orientation to College', credits: 1 },
          { code: 'ENG 101', title: 'English Composition I', credits: 3 },
          { code: '—', title: 'Humanities & Fine Arts elective', credits: 3 },
          { code: 'SPH 106/107/116', title: 'Speech (select one)', credits: 3 },
          { code: '—', title: 'Natural Science requirement', credits: 4 },
          { code: 'MTH 100/116+', title: 'College math (select one, or higher)', credits: 3 },
          { code: 'HIS/SOC/PSY', title: 'History, Social, or Behavioral Science elective', credits: 3 },
          { code: 'CIS 130/146', title: 'Intro. to Info. Systems or Computer Applications', credits: 3 },
          { code: 'PED', title: 'Two 1-credit Activity courses', credits: 2 },
        ],
      },
      {
        label: 'Technical Major (select 39 credits)', credits: 39,
        courses: [
          { code: 'WDT 108/109/110/119/120/122', title: 'Core welding & blueprint-reading courses', credits: 18 },
          { code: 'WDT 218/223/228', title: 'Certification, fabrication blueprint reading, GTAW welding', credits: 9 },
          { code: 'WDT 124/125/157/158/166/167/180/217/219/221/257', title: 'Electives — select remaining credits from this pool', credits: 12 },
        ],
      },
      {
        label: 'Technical Minor — Industrial Systems Maintenance (select 12 credits)', credits: 12,
        courses: [
          { code: 'AUT/EET/ETC/ILT/INT', title: 'Select from: AUT 102/104/116/212, EET 100, ETC 101/108, ILT 194, INT 117/118/124/126/127/134', credits: 12 },
        ],
      },
    ],
  },
}

export async function generateStaticParams() {
  return SAMPLE_PROGRAMS.map(p => ({
    slug: p.href.replace('/programs/', ''),
  }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const program = SAMPLE_PROGRAMS.find(p => p.href === `/programs/${slug}`)
  if (!program) return { title: 'Program Not Found' }
  return {
    title: `${program.name} | Lawson State Community College`,
    description: program.description,
  }
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const program = SAMPLE_PROGRAMS.find(p => p.href === `/programs/${slug}`)
  if (!program) notFound()

  const category = CATEGORIES[program.category]
  const degreeInfo = DEGREE_TYPES[program.degreeType]
  const related = SAMPLE_PROGRAMS
    .filter(p => p.category === program.category && p.id !== program.id)
    .slice(0, 3)
  const heroImg = CATEGORY_HERO_IMAGES[program.category]
  const accreditor = program.tags?.map(t => ACCREDITOR_TAGS[t.toLowerCase()]).find(Boolean)
  const recognitions = RECOGNITION_BY_ID[program.id]
  const curriculum = CURRICULUM_BY_ID[program.id]
  const advisorHref = `/advising?program=${encodeURIComponent(program.name)}&category=${program.category}`

  return (
    <>
      <Nav />
      <main>
      {/* ── Hero ── */}
      <section className="page-hero relative overflow-hidden" style={{ background: 'oklch(0.22 0.17 261)', paddingTop: '7rem', paddingBottom: '5rem' }}>
        <HeroPhoto src={heroImg.src} alt={heroImg.alt} position="center 35%" />
        <div className="relative max-w-7xl mx-auto px-6" style={{ zIndex: 1 }}>
          <nav
            className="page-fade-1 flex items-center gap-2 text-sm mb-8"
            style={{ color: 'oklch(1 0 0 / 0.50)' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:text-white" style={{ color: 'oklch(1 0 0 / 0.50)' }}>Home</Link>
            <span>/</span>
            <Link href="/programs" className="transition-colors hover:text-white" style={{ color: 'oklch(1 0 0 / 0.50)' }}>Programs</Link>
            <span>/</span>
            <span style={{ color: 'oklch(0.79 0.19 78)' }}>{program.name}</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
            {/* Title + description */}
            <div>
              <div className="page-fade-2 flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: category.color }}
                >
                  {category.label}
                </span>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ background: 'oklch(1 0 0 / 0.12)' }}
                >
                  {program.degreeType} — {degreeInfo.label}
                </span>
                {accreditor && (
                  <Link
                    href="/about/accreditation"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold transition-colors hover:bg-white/20"
                    style={{ background: 'oklch(1 0 0 / 0.12)', color: 'var(--lscc-eyebrow-on-dark)' }}
                  >
                    ✓ {accreditor}
                  </Link>
                )}
              </div>

              <h1
                className="page-fade-3 font-display font-black mb-4 leading-tight text-white"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
              >
                {program.name}
              </h1>

              <p
                className="page-fade-4 text-lg mb-6 leading-relaxed max-w-[58ch]"
                style={{ color: 'oklch(1 0 0 / 0.72)' }}
              >
                {program.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span style={{ color: 'oklch(0.79 0.19 78)' }}>—</span>
                  <span className="text-sm font-semibold text-white">{program.duration}</span>
                  <span className="text-sm" style={{ color: 'oklch(1 0 0 / 0.55)' }}>
                    ({program.durationMonths} months)
                  </span>
                </div>
                {program.deliveryModes.map(mode => (
                  <span
                    key={mode}
                    className="text-xs px-2.5 py-1 rounded-full text-white"
                    style={{ background: 'oklch(1 0 0 / 0.10)' }}
                  >
                    {DELIVERY_MODES[mode].label}
                  </span>
                ))}
              </div>

              <div className="page-fade-5 flex flex-wrap items-center gap-4">
                <Link
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
                >
                  Apply Now →
                </Link>
                <Link
                  href={advisorHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-colors text-white"
                  style={{ border: '1.5px solid oklch(1 0 0 / 0.30)' }}
                >
                  Ask an Advisor About This Program
                </Link>
                <Link
                  href="/financial-aid"
                  className="text-sm font-semibold transition-colors hover:text-white"
                  style={{ color: 'oklch(1 0 0 / 0.60)' }}
                >
                  See financial aid options →
                </Link>
              </div>
            </div>

            {/* Quick facts sidebar */}
            <aside
              className="rounded-2xl p-6"
              style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 20px 60px oklch(0.10 0.10 261 / 0.35)' }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: 'var(--lscc-eyebrow)' }}
              >
                Program Details
              </h2>
              <dl className="space-y-0">
                <div style={{ paddingBottom: '1rem' }}>
                  <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>Duration</dt>
                  <dd className="text-sm font-semibold" style={{ color: 'oklch(0.16 0.04 261)' }}>{program.duration} ({program.durationMonths} months)</dd>
                </div>

                <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <dt className="text-xs uppercase tracking-wide mb-2" style={{ color: 'oklch(0.50 0.03 261)' }}>
                    How You&apos;ll Learn
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {program.deliveryModes.map(mode => (
                      <span
                        key={mode}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'oklch(0 0 0 / 0.06)', color: 'oklch(0.40 0.04 261)' }}
                      >
                        {DELIVERY_MODES[mode].label}
                      </span>
                    ))}
                  </dd>
                </div>

                <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>
                    Job Placement Rate
                  </dt>
                  {program.jobPlacementRate ? (
                    <>
                      <dd className="text-3xl font-black leading-none" style={{ color: 'var(--lscc-eyebrow)' }}>
                        {program.jobPlacementRate}%
                      </dd>
                      <dd className="text-xs mt-1" style={{ color: 'oklch(0.55 0.03 261)' }}>of graduates working in the field</dd>
                    </>
                  ) : (
                    <dd className="text-sm font-semibold" style={{ color: 'oklch(0.16 0.04 261)' }}>
                      72% of LSCC graduates overall are placed in their field or continuing education
                    </dd>
                  )}
                </div>

                <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>
                    Degree Type
                  </dt>
                  <dd className="text-sm font-semibold" style={{ color: 'oklch(0.16 0.04 261)' }}>{degreeInfo.label}</dd>
                  <dd className="text-xs mt-0.5" style={{ color: 'oklch(0.50 0.03 261)' }}>{degreeInfo.description}</dd>
                </div>

                <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>
                    Transfer Pathway
                  </dt>
                  {program.transferable ? (
                    <dd className="text-sm font-semibold">
                      <Link href="/academics/alabama-transfer" className="hover:underline" style={{ color: 'oklch(0.50 0.16 160)' }}>
                        Yes — 4-year transfer ready →
                      </Link>
                    </dd>
                  ) : (
                    <dd className="text-sm font-semibold" style={{ color: 'oklch(0.50 0.03 261)' }}>Career credential</dd>
                  )}
                </div>

                {program.tags && program.tags.length > 0 && (
                  <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <dt className="text-xs uppercase tracking-wide mb-2" style={{ color: 'oklch(0.50 0.03 261)' }}>
                      Keywords
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {program.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ background: 'oklch(0 0 0 / 0.05)', color: 'oklch(0.50 0.03 261)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}

                <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem' }}>
                  <Link href={advisorHref} className="press inline-flex items-center gap-1.5 font-bold text-sm" style={{ color: 'oklch(0.42 0.17 261)' }}>
                    Have questions? Talk to an advisor →
                  </Link>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ── What You'll Learn / Who This Is For ── */}
      <section className="py-14 px-6" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--lscc-eyebrow)' }}>Who This Is For</p>
            <p className="text-lg leading-relaxed" style={{ color: 'oklch(0.30 0.05 261)' }}>{WHO_FOR[program.category]}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--lscc-eyebrow)' }}>What You&apos;ll Gain</p>
            <ul className="flex flex-col gap-2">
              {[
                `A ${degreeInfo.label.toLowerCase()} in ${program.duration.toLowerCase()}${program.deliveryModes.length ? `, ${program.deliveryModes.map(m => DELIVERY_MODES[m].label.toLowerCase()).join(' or ')}` : ''}`,
                program.transferable ? 'Credits that count toward a 4-year transfer degree' : 'Career-ready skills employers recognize',
                ...(program.tags?.slice(0, 2).map(t => `Focus on ${t}`) ?? []),
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm" style={{ color: 'oklch(0.40 0.04 261)' }}>
                  <span style={{ color: 'var(--lscc-eyebrow)', flexShrink: 0 }}>✓</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Recognition & Accreditation (only where a specific, sourced fact exists) ── */}
      {recognitions && recognitions.length > 0 && (
        <section className="py-14 px-6" style={{ background: 'oklch(0.97 0.015 255)' }}>
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: 'var(--lscc-eyebrow)' }}>Recognition &amp; Accreditation</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {recognitions.map((r) => (
                <div key={r.label} className="flex gap-4 rounded-xl p-5" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                  <span
                    className="shrink-0 flex items-center justify-center rounded-full font-bold text-sm"
                    style={{ width: '38px', height: '38px', background: 'var(--lscc-eyebrow)', color: 'white' }}
                    aria-hidden
                  >
                    ✓
                  </span>
                  <div>
                    <p className="font-bold text-sm mb-0.5" style={{ color: 'oklch(0.16 0.04 261)' }}>{r.label}</p>
                    {r.href ? (
                      <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: 'oklch(0.42 0.17 261)' }}>
                        {r.body}
                        <span className="sr-only"> (opens in new tab)</span>
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: 'oklch(0.40 0.04 261)' }}>{r.body}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>
              Lawson State Community College is also institutionally accredited by SACSCOC. See <Link href="/about/accreditation" className="hover:underline" style={{ color: 'var(--lscc-eyebrow)' }}>full accreditation details →</Link>
            </p>
          </div>
        </section>
      )}

      {/* ── Program Curriculum (verified against the catalog; only where extraction was unambiguous) ── */}
      {curriculum && (
        <section className="py-16 px-6" style={{ background: 'white' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--lscc-eyebrow)' }}>Course of Study</p>
                <h2 className="font-display font-black text-3xl" style={{ letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>Program Curriculum</h2>
              </div>
              <span className="text-sm font-semibold" style={{ color: 'oklch(0.50 0.03 261)' }}>
                {curriculum.totalCredits} total credit hours · ~${(curriculum.totalCredits * 131).toLocaleString('en-US')} in-state tuition
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {curriculum.groups.map((group) => (
                <div key={group.label} className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.015 255)', border: '1px solid oklch(0 0 0 / 0.07)' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{group.label}</h3>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: 'var(--lscc-eyebrow)', color: 'white' }}>{group.credits} cr</span>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {group.courses.map((c) => (
                      <li key={c.code} className="flex items-start justify-between gap-4 text-sm">
                        <span style={{ color: 'oklch(0.35 0.05 261)' }}>
                          <span className="font-semibold" style={{ color: 'oklch(0.16 0.04 261)' }}>{c.code}</span> — {c.title}
                        </span>
                        <span className="shrink-0 font-semibold" style={{ color: 'oklch(0.50 0.03 261)' }}>{c.credits}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>
              Sourced from the 2025–2027 Catalog &amp; Handbook. Course availability and sequencing may vary by semester — confirm your exact plan with an academic advisor. Tuition estimate is in-state tuition only ($131/credit hour) and excludes required fees — see the <Link href="/financial-aid" className="hover:underline" style={{ color: 'var(--lscc-eyebrow)' }}>full tuition &amp; fees breakdown →</Link>
            </p>
          </div>
        </section>
      )}

      {/* ── Selective Admission (nursing only) ── */}
      {program.id === 'nursing-rn' && (
        <section style={{ background: 'oklch(0.97 0.015 255)', padding: '5rem 0' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--lscc-eyebrow)' }}>Competitive Application</p>
              <h2 className="font-display font-black text-3xl mb-3" style={{ letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}>SELECTIVE ADMISSION REQUIREMENTS</h2>
              <p className="max-w-[60ch]" style={{ color: 'oklch(0.40 0.04 261)', lineHeight: 1.7 }}>
                The Associate Degree Nursing (ADN) program requires a separate, competitive application beyond general college admission. Meeting minimum requirements does not guarantee acceptance.
              </p>
              <p className="mt-3 text-sm font-semibold" style={{ color: 'oklch(0.22 0.17 261)' }}>
                Application deadlines: Summer cohort — January 15, 11:59 PM CST · Fall cohort — May 15, 11:59 PM CST
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display font-bold mb-4" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>Applicant Point System (58 points max)</h3>
                <div className="flex flex-col gap-3">
                  {ADN_POINTS.map((p) => (
                    <div key={p.category} className="rounded-xl p-4" style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)' }}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm" style={{ color: 'oklch(0.16 0.04 261)' }}>{p.category}</span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'var(--lscc-eyebrow)', color: 'white' }}>{p.max} pts max</span>
                      </div>
                      <p className="text-xs" style={{ color: 'oklch(0.50 0.03 261)', lineHeight: 1.5 }}>{p.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold mb-4" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>Required Upon Acceptance</h3>
                <ul className="flex flex-col gap-2 mb-6">
                  {ADN_REQUIREMENTS.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm" style={{ color: 'oklch(0.40 0.04 261)' }}>
                      <span style={{ color: 'var(--lscc-eyebrow)', flexShrink: 0 }}>✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl p-4" style={{ background: 'oklch(0.22 0.17 261)' }}>
                  <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: 'var(--lscc-eyebrow-on-dark)' }}>Questions about the application?</p>
                  <p className="text-sm" style={{ color: 'oklch(1 0 0 / 0.85)' }}>
                    kswain@lawsonstate.edu or dyoung@lawsonstate.edu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Related Programs ── */}
      {related.length > 0 && (
        <section style={{ background: 'oklch(0.92 0.05 255)', padding: '6.5rem 0' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="scroll-reveal mb-8">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: 'var(--lscc-eyebrow)' }}
              >
                Also in {category.label}
              </p>
              <h2
                className="font-display font-black text-3xl"
                style={{ letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}
              >
                Related Programs
              </h2>
            </div>
            <div className="stagger-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(rel => (
                <Link key={rel.id} href={rel.href}>
                  <article
                    className="group h-full rounded-xl p-5 transition-colors"
                    style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
                        style={{ background: CATEGORIES[rel.category].color }}
                      >
                        {rel.degreeType}
                      </span>
                      {rel.jobPlacementRate && (
                        <span className="text-xs" style={{ color: 'oklch(0.50 0.03 261)' }}>
                          {rel.jobPlacementRate}% placement
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold mb-2 leading-snug" style={{ color: 'oklch(0.16 0.04 261)' }}>{rel.name}</h3>
                    <p
                      className="text-sm mb-4"
                      style={{
                        color: 'oklch(0.40 0.04 261)',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {rel.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xs font-semibold" style={{ color: 'oklch(0.16 0.04 261)' }}>{rel.duration}</span>
                      <span
                        style={{ color: 'var(--lscc-eyebrow)' }}
                        className="group-hover:translate-x-1 transition-transform inline-block"
                      >
                        →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-colors hover:opacity-80"
                style={{ color: 'var(--lscc-eyebrow)' }}
              >
                View all programs →
              </Link>
            </div>
          </div>
        </section>
      )}

      <Prefooter />
      </main>
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
