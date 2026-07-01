import SearchResultItem, { type SearchResult } from './search-result-item'

export type { SearchResult }

export default function SearchResultsDropdown({
  results,
  open,
  highlightedIndex,
  onSelect,
  query = '',
}: {
  results: SearchResult[]
  open: boolean
  highlightedIndex: number
  onSelect: (index: number) => void
  query?: string
}) {
  const q = query.trim()
  // Show the panel when there are local results OR when the query is long enough
  // to offer a Google escalation — so a "no results here" query still has a path.
  if (!open || (results.length === 0 && q.length < 2)) return null

  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(`site:lawsonstate.edu ${q}`)}`

  return (
    <div
      className="absolute top-full left-0 right-0 mt-1.5 rounded-xl shadow-xl overflow-hidden z-50"
      style={{
        background: 'white',
        border: '1px solid oklch(0.88 0.015 263)',
      }}
      role="listbox"
    >
      {results.map((result, i) => (
        <div key={result.url} role="option" aria-selected={i === highlightedIndex}>
          <SearchResultItem
            result={result}
            highlighted={i === highlightedIndex}
            onSelect={() => onSelect(i)}
          />
        </div>
      ))}

      {results.length === 0 && (
        <p className="px-4 pt-3 pb-1 text-xs" style={{ color: 'oklch(0.55 0.04 261)' }}>
          No pages matched “{q}” on this site.
        </p>
      )}

      {/* Google escalation — search the wider lawsonstate.edu domain for anything
          not in the on-site index (forms, PDFs, ACCS pages, archived content). */}
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 text-sm font-semibold transition-colors hover:bg-black/[0.04]"
        style={{ color: 'oklch(0.30 0.12 263)', borderTop: '1px solid oklch(0.93 0.01 263)' }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden>
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/>
        </svg>
        Search “{q}” on lawsonstate.edu (Google)
        <svg className="ml-auto shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    </div>
  )
}
