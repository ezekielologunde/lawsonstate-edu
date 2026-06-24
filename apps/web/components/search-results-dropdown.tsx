import SearchResultItem, { type SearchResult } from './search-result-item'

export type { SearchResult }

export default function SearchResultsDropdown({
  results,
  open,
  highlightedIndex,
  onSelect,
}: {
  results: SearchResult[]
  open: boolean
  highlightedIndex: number
  onSelect: (index: number) => void
}) {
  if (!open || results.length === 0) return null

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
    </div>
  )
}
