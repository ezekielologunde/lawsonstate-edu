'use client'
import { useEffect, useRef, useState } from 'react'
import SearchBar from './search-bar'

export default function SearchModal() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(!open)
      }
      if (e.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      {/* Trigger button in nav */}
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        style={{
          background: 'oklch(1 0 0 / 0.05)',
          color: 'oklch(1 0 0 / 0.60)',
          border: '1px solid oklch(1 0 0 / 0.10)',
        }}
        aria-label="Open search (⌘K)"
        title="⌘K"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <span className="hidden lg:inline text-xs">Search</span>
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Modal dialog */}
      {open && (
        <div
          ref={modalRef}
          className="fixed left-1/2 top-1/4 z-50 w-full max-w-2xl -translate-x-1/2 rounded-2xl p-6"
          style={{ background: 'oklch(0.98 0.0008 261)' }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="search-modal-title"
        >
          <h2 id="search-modal-title" className="sr-only">
            Site search
          </h2>
          <SearchBar />
          <p
            className="mt-3 text-xs text-center"
            style={{ color: 'oklch(0.50 0.05 263)' }}
          >
            Press <kbd className="font-mono px-1.5 py-0.5 rounded bg-white/50">Esc</kbd> to close
          </p>
        </div>
      )}
    </>
  )
}
