'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface OverlayProps {
  open: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export default function Overlay({ open, onClose, title, size = 'md', children }: OverlayProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    setTimeout(() => panelRef.current?.focus(), 16)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const maxW = size === 'sm' ? '26rem' : size === 'lg' ? '56rem' : '42rem'

  return (
    <>
      <style>{`
        @keyframes lscc-overlay-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lscc-panel-in {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes lscc-sheet-in {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center px-0 sm:px-4"
        style={{
          background: 'oklch(0 0 0 / 0.55)',
          backdropFilter: 'blur(7px)',
          animation: 'lscc-overlay-in 0.18s ease both',
        }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        {/* Panel */}
        <div
          ref={panelRef}
          tabIndex={-1}
          className="relative w-full rounded-t-3xl sm:rounded-2xl outline-none overflow-hidden"
          style={{
            maxWidth: maxW,
            background: 'white',
            boxShadow: '0 32px 80px oklch(0.10 0.12 261 / 0.38)',
            maxHeight: '92dvh',
            overflowY: 'auto',
            animation: 'lscc-sheet-in 0.26s cubic-bezier(0.32,0,0.17,1) both sm:none',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Drag pill (mobile) */}
          <div className="sm:hidden flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 rounded-full" style={{ background: 'oklch(0 0 0 / 0.12)' }} />
          </div>

          {title && (
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-6 py-4"
              style={{ background: 'white', borderBottom: '1px solid oklch(0 0 0 / 0.07)' }}
            >
              <p className="font-display font-bold" style={{ fontSize: '1rem', color: 'oklch(0.16 0.04 261)' }}>
                {title}
              </p>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-1.5 rounded-lg transition-colors hover:bg-black/5"
                style={{ color: 'oklch(0.50 0.03 261)' }}
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          )}

          {children}
        </div>
      </div>
    </>
  )
}
