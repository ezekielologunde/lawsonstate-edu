'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

type Result = {
  url: string
  page_title: string
  meta_description: string | null
  category: string | null
}

const CATEGORY_LABEL: Record<string, string> = {
  program:          'Program',
  news:             'News',
  event:            'Event',
  about:            'About',
  admissions:       'Admissions',
  faculty:          'Faculty',
  'student-services': 'Student Services',
  athletics:        'Athletics',
}

export default function SearchBar() {
  const [query, setQuery]     = useState('')
  const [results, setResults] = useState<Result[]>([])
  const [open, setOpen]       = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    if (query.length < 2) { setResults([]); setOpen(false); return }
    const t = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const json = await res.json()
        setResults(json.results ?? [])
        setOpen(true)
      } finally {
        setLoading(false)
      }
    }, 280)
    return () => clearTimeout(t)
  }, [query])

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative flex items-center">
        <svg
          className="absolute left-3.5 w-4 h-4 pointer-events-none"
          style={{ color: 'oklch(0.50 0.05 263)' }}
          fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24" aria-hidden
        >
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="Search programs, services, info…"
          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm"
          style={{
            background:  'white',
            border:      '1.5px solid oklch(0.88 0.015 263)',
            color:       'oklch(0.14 0.02 263)',
            outline:     'none',
          }}
        />
        {loading && (
          <div
            className="absolute right-3.5 w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: 'oklch(0.83 0.16 82)', borderTopColor: 'transparent' }}
          />
        )}
      </div>

      {open && results.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-1.5 rounded-xl shadow-xl overflow-hidden z-50"
          style={{ background: 'white', border: '1px solid oklch(0.88 0.015 263)' }}
        >
          {results.map((r) => (
            <Link
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => { setOpen(false); setQuery('') }}
              className="flex items-start gap-3 px-4 py-3 hover:bg-lscc-blue-50 transition-colors border-b last:border-0"
              style={{ borderColor: 'oklch(0.93 0.01 263)' }}
            >
              {r.category && (
                <span
                  className="shrink-0 mt-0.5 text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ background: 'oklch(0.94 0.025 263)', color: 'oklch(0.27 0.13 263)' }}
                >
                  {CATEGORY_LABEL[r.category] ?? r.category}
                </span>
              )}
              <div className="min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: 'oklch(0.14 0.02 263)' }}>
                  {r.page_title}
                </p>
                {r.meta_description && (
                  <p className="text-xs mt-0.5 line-clamp-1" style={{ color: 'oklch(0.50 0.05 263)' }}>
                    {r.meta_description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
