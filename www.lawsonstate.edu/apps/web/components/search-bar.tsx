'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { SEARCH_DEBOUNCE_MS, MIN_QUERY_LENGTH } from '@/lib/search-constants'
import SearchResultsDropdown, { type SearchResult } from './search-results-dropdown'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Click outside to close
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Debounced search
  useEffect(() => {
    if (query.length < MIN_QUERY_LENGTH) {
      setResults([])
      setOpen(false)
      setHighlightedIndex(-1)
      return
    }

    const timer = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
        const json = await res.json()
        const newResults = json.results ?? []
        setResults(newResults)
        setOpen(true) // open even with 0 results so the Google escalation is offered
        setHighlightedIndex(-1)
      } finally {
        setLoading(false)
      }
    }, SEARCH_DEBOUNCE_MS)

    return () => clearTimeout(timer)
  }, [query])

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!open || results.length === 0) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setHighlightedIndex((i) =>
            i < results.length - 1 ? i + 1 : 0
          )
          break
        case 'ArrowUp':
          e.preventDefault()
          setHighlightedIndex((i) =>
            i > 0 ? i - 1 : results.length - 1
          )
          break
        case 'Enter':
          e.preventDefault()
          if (highlightedIndex >= 0) {
            window.location.href = results[highlightedIndex].url
          }
          break
        case 'Escape':
          e.preventDefault()
          setOpen(false)
          break
      }
    },
    [open, results, highlightedIndex]
  )

  const handleResultSelect = (index: number) => {
    setOpen(false)
    setQuery('')
  }

  return (
    <div ref={ref} className="relative w-full">
      <div className="relative flex items-center">
        <svg
          className="absolute left-3.5 w-4 h-4 pointer-events-none"
          style={{ color: 'oklch(0.50 0.05 263)' }}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search programs, services, info…"
          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm focus:outline-none"
          style={{
            background: 'white',
            border: '1.5px solid oklch(0.88 0.015 263)',
            color: 'oklch(0.14 0.02 263)',
          }}
          aria-label="Search the site"
          aria-autocomplete="list"
          aria-controls="search-dropdown"
          aria-expanded={open}
        />
        {loading && (
          <div
            className="absolute right-3.5 w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
            style={{
              borderColor: 'oklch(0.83 0.16 82)',
              borderTopColor: 'transparent',
            }}
            aria-hidden
          />
        )}
      </div>

      <div id="search-dropdown">
        <SearchResultsDropdown
          results={results}
          open={open}
          highlightedIndex={highlightedIndex}
          onSelect={handleResultSelect}
          query={query}
        />
      </div>
    </div>
  )
}
