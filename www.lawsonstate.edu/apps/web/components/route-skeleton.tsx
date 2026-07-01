type Variant = 'marketing' | 'detail' | 'list' | 'admin'

const NAV_H = 'var(--lscc-nav-h, 56px)'

function NavBar() {
  return (
    <div
      className="shrink-0"
      style={{ height: NAV_H, background: 'oklch(0.13 0.12 261)', borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}
    />
  )
}

function Bar({ w, h = '1rem', dark = false, className = '' }: { w: string; h?: string; dark?: boolean; className?: string }) {
  return (
    <div
      className={`skeleton ${dark ? 'skeleton-dark' : ''} rounded-full ${className}`}
      style={{ width: w, height: h }}
    />
  )
}

/**
 * Route-level loading fallback rendered by Next.js while a page's data
 * fetch resolves (Suspense boundary via loading.tsx). Zero client JS —
 * pure markup + CSS shimmer, so it paints instantly on navigation.
 */
export default function RouteSkeleton({ variant = 'marketing' }: { variant?: Variant }) {
  if (variant === 'admin') {
    return (
      <div className="min-h-screen" style={{ background: 'oklch(0.96 0.01 263)' }} role="status" aria-label="Loading">
        <div className="h-14" style={{ background: 'oklch(0.27 0.13 263)' }} />
        <div className="max-w-5xl mx-auto px-6 py-8 space-y-5">
          <Bar w="9rem" h="1.5rem" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[1, 2, 3].map(i => <Bar key={i} w="100%" h="6rem" className="!rounded-2xl" />)}
          </div>
          <Bar w="100%" h="10rem" className="!rounded-2xl mt-4" />
        </div>
        <span className="sr-only">Loading admin content…</span>
      </div>
    )
  }

  if (variant === 'list') {
    return (
      <div className="flex flex-col" style={{ minHeight: '100vh', background: 'white' }} role="status" aria-label="Loading">
        <NavBar />
        <div style={{ height: '34vh', background: 'oklch(0.22 0.17 261)' }} />
        <div className="max-w-4xl mx-auto px-6 py-16 w-full space-y-10">
          {[1, 2, 3].map(group => (
            <div key={group} className="space-y-4">
              <Bar w="10rem" h="0.85rem" />
              {[1, 2].map(row => (
                <div key={row} className="flex items-center gap-4">
                  <Bar w="3.5rem" h="3.5rem" className="!rounded-xl shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Bar w="60%" h="1rem" />
                    <Bar w="35%" h="0.8rem" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <span className="sr-only">Loading, please wait…</span>
      </div>
    )
  }

  if (variant === 'detail') {
    return (
      <div className="flex flex-col" style={{ minHeight: '100vh', background: 'oklch(0.95 0.03 255)' }} role="status" aria-label="Loading">
        <NavBar />
        <div style={{ height: '44vh', background: 'oklch(0.22 0.17 261)' }} />
        <div className="max-w-7xl mx-auto px-6 py-16 w-full space-y-6">
          <Bar w="6rem" h="0.7rem" />
          <Bar w="55%" h="2.25rem" className="!rounded-lg" />
          <Bar w="70%" />
          <Bar w="55%" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {[1, 2, 3].map(i => <Bar key={i} w="100%" h="8rem" className="!rounded-2xl" />)}
          </div>
        </div>
        <span className="sr-only">Loading details…</span>
      </div>
    )
  }

  // 'marketing' — default
  return (
    <div className="fixed inset-0 flex flex-col" style={{ background: 'oklch(0.13 0.12 261)' }} role="status" aria-label="Loading page content">
      <NavBar />
      <div className="flex-1 flex items-end px-6 pb-16 pt-24">
        <div className="max-w-7xl mx-auto w-full space-y-5">
          <Bar w="8rem" h="0.625rem" dark />
          <Bar w="55%" h="3.5rem" className="!rounded-xl" dark />
          <Bar w="38%" h="3.5rem" className="!rounded-xl" dark />
          <div className="space-y-2 pt-2">
            <Bar w="36ch" dark />
            <Bar w="28ch" dark />
          </div>
          <div className="flex gap-3 pt-2">
            <Bar w="9rem" h="2.75rem" className="!rounded-lg" dark />
            <Bar w="7rem" h="2.75rem" className="!rounded-lg" dark />
          </div>
        </div>
      </div>
      <span className="sr-only">Loading, please wait…</span>
    </div>
  )
}
