import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SAMPLE_PROGRAMS, CATEGORIES, DEGREE_TYPES, DELIVERY_MODES } from '@/lib/programs-data'
import type { Metadata } from 'next'

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

  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ background: 'oklch(0.95 0.03 255)', paddingTop: '7rem', paddingBottom: '5rem' }}>
        <div className="max-w-7xl mx-auto px-6">
          <nav
            className="page-fade-1 flex items-center gap-2 text-sm mb-8"
            style={{ color: 'oklch(0.50 0.03 261)' }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="transition-colors hover:opacity-70" style={{ color: 'oklch(0.50 0.03 261)' }}>Home</Link>
            <span>/</span>
            <Link href="/programs" className="transition-colors hover:opacity-70" style={{ color: 'oklch(0.50 0.03 261)' }}>Programs</Link>
            <span>/</span>
            <span style={{ color: 'oklch(0.40 0.04 261)' }}>{program.name}</span>
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
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'oklch(0 0 0 / 0.06)', color: 'var(--lscc-eyebrow)' }}
                >
                  {program.degreeType} — {degreeInfo.label}
                </span>
              </div>

              <h1
                className="page-fade-3 font-display font-black mb-4 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.02em', color: 'oklch(0.16 0.04 261)' }}
              >
                {program.name}
              </h1>

              <p
                className="page-fade-4 text-lg mb-6 leading-relaxed max-w-[58ch]"
                style={{ color: 'oklch(0.40 0.04 261)' }}
              >
                {program.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <span style={{ color: 'var(--lscc-eyebrow)' }}>—</span>
                  <span className="text-sm font-semibold" style={{ color: 'oklch(0.16 0.04 261)' }}>{program.duration}</span>
                  <span className="text-sm" style={{ color: 'oklch(0.50 0.03 261)' }}>
                    ({program.durationMonths} months)
                  </span>
                </div>
                {program.deliveryModes.map(mode => (
                  <span
                    key={mode}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{ background: 'oklch(0 0 0 / 0.06)', color: 'oklch(0.40 0.04 261)' }}
                  >
                    {DELIVERY_MODES[mode].label}
                  </span>
                ))}
              </div>

              <div className="page-fade-5 flex flex-wrap gap-4">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)' }}
                >
                  Apply Now →
                </Link>
                <Link
                  href="/financial-aid"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm transition-colors hover:bg-black/5"
                  style={{ border: '1.5px solid oklch(0.16 0.04 261 / 0.25)', color: 'oklch(0.16 0.04 261)' }}
                >
                  Financial Aid
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-colors hover:opacity-70"
                  style={{ color: 'oklch(0.50 0.03 261)' }}
                >
                  ← All Programs
                </Link>
              </div>
            </div>

            {/* Quick facts sidebar */}
            <aside
              className="rounded-2xl p-6"
              style={{ background: 'white', border: '1px solid oklch(0 0 0 / 0.08)', boxShadow: '0 8px 30px oklch(0.16 0.06 261 / 0.08)' }}
            >
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-5"
                style={{ color: 'var(--lscc-eyebrow)' }}
              >
                Program Details
              </h2>
              <dl className="space-y-0">
                {[
                  {
                    label: 'Degree Type',
                    value: degreeInfo.label,
                    sub: degreeInfo.description,
                  },
                  { label: 'Duration', value: program.duration },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    style={{ borderTop: i > 0 ? '1px solid oklch(0 0 0 / 0.10)' : undefined, paddingTop: i > 0 ? '1rem' : 0, paddingBottom: '1rem' }}
                  >
                    <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>
                      {item.label}
                    </dt>
                    <dd className="text-sm font-semibold" style={{ color: 'oklch(0.16 0.04 261)' }}>{item.value}</dd>
                    {item.sub && (
                      <dd className="text-xs mt-0.5" style={{ color: 'oklch(0.50 0.03 261)' }}>{item.sub}</dd>
                    )}
                  </div>
                ))}

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

                {program.jobPlacementRate && (
                  <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>
                      Job Placement Rate
                    </dt>
                    <dd
                      className="text-3xl font-black leading-none"
                      style={{ color: 'var(--lscc-eyebrow)' }}
                    >
                      {program.jobPlacementRate}%
                    </dd>
                  </div>
                )}

                <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem', paddingBottom: '1rem' }}>
                  <dt className="text-xs uppercase tracking-wide mb-1" style={{ color: 'oklch(0.50 0.03 261)' }}>
                    Transfer Pathway
                  </dt>
                  <dd
                    className="text-sm font-semibold"
                    style={{ color: program.transferable ? 'oklch(0.50 0.16 160)' : 'oklch(0.50 0.03 261)' }}
                  >
                    {program.transferable ? 'Yes — 4-year transfer ready' : 'Career credential'}
                  </dd>
                </div>

                {program.tags && program.tags.length > 0 && (
                  <div style={{ borderTop: '1px solid oklch(0 0 0 / 0.10)', paddingTop: '1rem' }}>
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
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Related Programs ── */}
      {related.length > 0 && (
        <section style={{ background: 'oklch(0.92 0.05 255)', padding: '5rem 0' }}>
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
    </main>
  )
}
