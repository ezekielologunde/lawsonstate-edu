import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Prefooter from '@/components/prefooter'
import SiteFooter from '@/components/site-footer'
import MobileBottomNav from '@/components/mobile-bottom-nav'
import { NEWS_ARTICLES } from '@/lib/news-data'

const CATEGORY_COLORS: Record<string, string> = {
  Academics: 'oklch(0.42 0.17 261)',
  Athletics: 'oklch(0.50 0.19 27)',
  'Student Life': 'oklch(0.45 0.18 155)',
  Community: 'oklch(0.42 0.15 285)',
  'Awards & Honors': 'oklch(0.55 0.19 78)',
  Workforce: 'oklch(0.45 0.12 220)',
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

// Pre-render only the most recent stories at build time; the rest render on
// first request and are cached from then on (dynamicParams defaults to true).
// All 108 articles generated eagerly overwhelmed the 2-core production build
// machine and silently dropped unrelated routes queued after this step.
export async function generateStaticParams() {
  return [...NEWS_ARTICLES]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 12)
    .map((a) => ({ slug: a.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)
  if (!article) return { title: 'Story Not Found' }
  return {
    title: `${article.title} | Lawson State News`,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = NEWS_ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const accentColor = CATEGORY_COLORS[article.category] ?? 'oklch(0.42 0.17 261)'
  const more = NEWS_ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3)
  const fallbackMore = more.length > 0 ? more : NEWS_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <>
      <Nav />

      <article>
        {/* Hero */}
        <section className="page-hero relative px-6" style={{ background: 'oklch(0.22 0.17 261)', paddingTop: '8rem', paddingBottom: '3rem' }}>
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-sm mb-6" style={{ color: 'oklch(1 0 0 / 0.50)' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2" aria-hidden>›</span>
              <Link href="/news" className="hover:text-white transition-colors">News</Link>
              <span className="mx-2" aria-hidden>›</span>
              <span style={{ color: 'oklch(0.79 0.19 78)' }}>{article.category}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="text-xs font-bold uppercase px-3 py-1 rounded-full"
                style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', letterSpacing: '0.12em' }}
              >
                {article.category}
              </span>
              <span className="text-sm" style={{ color: 'oklch(1 0 0 / 0.55)' }}>{formatDate(article.date)}</span>
            </div>

            <h1
              className="font-display font-black text-white leading-tight mb-0"
              style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              {article.title}
            </h1>
          </div>
        </section>

        {/* Hero image */}
        <div className="max-w-4xl mx-auto px-6" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 1 }}>
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '16/9', boxShadow: '0 12px 40px oklch(0 0 0 / 0.25)' }}>
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 56rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <section className="px-6 py-12" style={{ background: 'white' }}>
          <div className="max-w-4xl mx-auto">
            <div className="max-w-[68ch] mx-auto">
              {article.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-5"
                  style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'oklch(0.28 0.04 261)' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="max-w-[68ch] mx-auto mt-10 pt-8" style={{ borderTop: '1px solid oklch(0.92 0.01 263)' }}>
              <Link
                href="/news"
                className="inline-flex items-center font-bold text-sm"
                style={{ color: accentColor }}
              >
                ← Back to News & Stories
              </Link>
            </div>
          </div>
        </section>

        {/* More stories */}
        {fallbackMore.length > 0 && (
          <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
            <div className="max-w-7xl mx-auto">
              <h2 className="font-display font-black mb-8" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: 'oklch(0.16 0.04 261)', letterSpacing: '-0.02em' }}>
                More Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {fallbackMore.map((a) => {
                  const c = CATEGORY_COLORS[a.category] ?? 'oklch(0.42 0.17 261)'
                  return (
                    <Link
                      key={a.slug}
                      href={`/news/${a.slug}`}
                      className="group flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
                      style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)' }}
                    >
                      <div className="relative" style={{ aspectRatio: '16/10' }}>
                        <Image
                          src={a.image}
                          alt={a.imageAlt}
                          fill
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <span className="text-xs font-bold uppercase mb-2" style={{ color: c, letterSpacing: '0.1em' }}>{a.category}</span>
                        <p className="font-display font-black leading-tight" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>{a.title}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}
      </article>

      <Prefooter />
      <SiteFooter />
      <MobileBottomNav />
      <div className="mobile-nav-spacer" />
    </>
  )
}
