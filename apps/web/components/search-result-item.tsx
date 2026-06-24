import Link from 'next/link'
import { CATEGORY_LABELS } from '@/lib/search-constants'

export type SearchResult = {
  url: string
  page_title: string
  meta_description: string | null
  category: string | null
}

export default function SearchResultItem({
  result,
  highlighted,
  onSelect,
}: {
  result: SearchResult
  highlighted: boolean
  onSelect: () => void
}) {
  return (
    <Link
      href={result.url}
      onClick={onSelect}
      className="flex items-start gap-3 px-4 py-3 transition-colors border-b last:border-0"
      style={{
        background: highlighted ? 'oklch(0.96 0.01 263)' : 'white',
        borderColor: 'oklch(0.93 0.01 263)',
      }}
    >
      {result.category && (
        <span
          className="shrink-0 mt-0.5 text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{
            background: 'oklch(0.94 0.025 263)',
            color: 'oklch(0.27 0.13 263)',
          }}
        >
          {CATEGORY_LABELS[result.category] ?? result.category}
        </span>
      )}
      <div className="min-w-0">
        <p
          className="text-sm font-medium truncate"
          style={{ color: 'oklch(0.14 0.02 263)' }}
        >
          {result.page_title}
        </p>
        {result.meta_description && (
          <p
            className="text-xs mt-0.5 line-clamp-1"
            style={{ color: 'oklch(0.50 0.05 263)' }}
          >
            {result.meta_description}
          </p>
        )}
      </div>
    </Link>
  )
}
