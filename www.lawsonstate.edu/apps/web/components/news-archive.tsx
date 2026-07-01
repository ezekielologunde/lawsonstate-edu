'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { NewsArticle, NewsCategory } from '@/lib/news-data'

const CATEGORIES: (NewsCategory | 'All')[] = ['All', 'Academics', 'Athletics', 'Student Life', 'Community', 'Awards & Honors', 'Workforce']

const CATEGORY_COLORS: Record<string, string> = {
  Academics: 'oklch(0.42 0.17 261)',
  Athletics: 'oklch(0.50 0.19 27)',
  'Student Life': 'oklch(0.45 0.18 155)',
  Community: 'oklch(0.42 0.15 285)',
  'Awards & Honors': 'oklch(0.55 0.19 78)',
  Workforce: 'oklch(0.45 0.12 220)',
}

const PAGE_SIZE = 12

function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function NewsArchive({ articles }: { articles: NewsArticle[] }) {
  const [category, setCategory] = useState<NewsCategory | 'All'>('All')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const featured = articles[0]
  const rest = articles.slice(1)

  const filtered = useMemo(
    () => (category === 'All' ? rest : rest.filter((a) => a.category === category)),
    [rest, category]
  )

  const shown = filtered.slice(0, visible)

  return (
    <>
      {/* Category filter */}
      <nav aria-label="News categories" style={{ background: 'white', borderBottom: '1px solid oklch(0.92 0.01 263)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto">
          <ul className="flex gap-2 min-w-max">
            {CATEGORIES.map((cat) => {
              const active = cat === category
              return (
                <li key={cat}>
                  <button
                    onClick={() => { setCategory(cat); setVisible(PAGE_SIZE) }}
                    className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
                    style={{
                      background: active ? 'oklch(0.22 0.17 261)' : 'oklch(0.95 0.03 255)',
                      color: active ? 'white' : 'oklch(0.45 0.06 263)',
                    }}
                  >
                    {cat}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      {/* Featured story — most recent */}
      {category === 'All' && featured && (
        <section className="py-16 px-6" style={{ background: 'oklch(0.95 0.03 255)' }}>
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/news/${featured.slug}`}
              className="group grid md:grid-cols-[1fr_1.2fr] gap-0 rounded-3xl overflow-hidden transition-shadow hover:shadow-xl"
              style={{ background: 'oklch(0.22 0.17 261)', boxShadow: '0 4px 24px oklch(0.22 0.17 261 / 0.25)' }}
            >
              <div className="relative" style={{ minHeight: '280px' }}>
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase px-3 py-1 rounded-full"
                    style={{ background: 'oklch(0.79 0.19 78)', color: 'oklch(0.11 0.03 261)', letterSpacing: '0.12em' }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-sm" style={{ color: 'oklch(1 0 0 / 0.50)' }}>{formatDate(featured.date)}</span>
                  <span
                    className="text-xs font-bold uppercase px-3 py-1 rounded-full"
                    style={{ background: 'oklch(0.79 0.19 78 / 0.15)', color: 'var(--lscc-eyebrow-on-dark)', letterSpacing: '0.08em' }}
                  >
                    Latest
                  </span>
                </div>
                <h2 className="font-display font-black text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '0.95rem', color: 'oklch(1 0 0 / 0.70)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center font-bold text-sm" style={{ color: 'oklch(0.79 0.19 78)' }}>
                  Read story →
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Story grid */}
      <section className="py-10 px-6 pb-16" style={{ background: 'oklch(0.95 0.03 255)' }}>
        <div className="max-w-7xl mx-auto">
          {shown.length === 0 ? (
            <p className="text-center py-16" style={{ color: 'oklch(0.50 0.03 261)' }}>No stories in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {shown.map((a) => {
                const accentColor = CATEGORY_COLORS[a.category] ?? 'oklch(0.42 0.17 261)'
                return (
                  <Link
                    key={a.slug}
                    href={`/news/${a.slug}`}
                    className="group flex flex-col rounded-2xl overflow-hidden transition-shadow hover:shadow-lg"
                    style={{ background: 'white', border: '1.5px solid oklch(0 0 0 / 0.07)', boxShadow: '0 2px 12px oklch(0 0 0 / 0.04)' }}
                  >
                    <div className="relative" style={{ aspectRatio: '16/10' }}>
                      <Image
                        src={a.image}
                        alt={a.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="text-xs font-bold uppercase px-2.5 py-0.5 rounded-full"
                          style={{ background: `${accentColor}18`, color: accentColor, letterSpacing: '0.1em' }}
                        >
                          {a.category}
                        </span>
                        <span className="text-xs" style={{ color: 'oklch(0.60 0.03 263)' }}>{formatDate(a.date)}</span>
                      </div>
                      <p className="font-display font-black mb-3 leading-tight" style={{ fontSize: '1.05rem', color: 'oklch(0.16 0.04 261)' }}>
                        {a.title}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'oklch(0.42 0.04 261)', lineHeight: 1.65, flex: 1 }}>
                        {a.excerpt}
                      </p>
                      <span className="mt-4 font-bold text-xs" style={{ color: accentColor }}>
                        Read more →
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {visible < filtered.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="press font-bold px-8 py-3.5 rounded-xl text-sm"
                style={{ background: 'oklch(0.22 0.17 261)', color: 'white' }}
              >
                Load More Stories ({filtered.length - visible} remaining)
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
