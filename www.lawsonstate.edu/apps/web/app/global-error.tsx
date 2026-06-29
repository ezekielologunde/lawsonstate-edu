'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[LSCC] Critical layout error:', error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif',
          background: 'oklch(0.13 0.12 261)',
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '480px' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.04em', color: 'oklch(0.79 0.19 78)', marginBottom: '0.25rem' }}>
            LAWSON STATE
          </div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'oklch(1 0 0 / 0.4)', marginBottom: '2.5rem' }}>
            Community College
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Critical Error
          </h1>
          <p style={{ color: 'oklch(1 0 0 / 0.60)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '1rem' }}>
            A critical error prevented the page from loading. Please try refreshing. If the problem persists, contact us at 205.925.2515.
          </p>
          <button
            onClick={reset}
            style={{
              background: 'oklch(0.79 0.19 78)',
              color: 'oklch(0.11 0.03 261)',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.75rem 2rem',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              marginRight: '0.75rem',
            }}
          >
            Refresh Page
          </button>
          {error.digest && (
            <p style={{ marginTop: '1.5rem', fontSize: '0.72rem', color: 'oklch(1 0 0 / 0.25)', fontFamily: 'monospace' }}>
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  )
}
