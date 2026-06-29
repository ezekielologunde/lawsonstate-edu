export default function Loading() {
  return (
    <div
      className="flex flex-col"
      style={{ minHeight: '100vh', background: 'oklch(0.95 0.03 255)' }}
      role="status"
      aria-label="Loading program details"
    >
      {/* Nav skeleton */}
      <div
        className="shrink-0 animate-pulse"
        style={{ height: '64px', background: 'oklch(0.13 0.12 261)' }}
      />
      {/* Hero skeleton */}
      <div
        className="animate-pulse"
        style={{ height: '44vh', background: 'oklch(0.22 0.17 261)' }}
      />
      {/* Content skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-16 w-full space-y-6">
        <div className="h-3 w-24 rounded-full animate-pulse" style={{ background: 'oklch(0.79 0.19 78 / 0.35)' }} />
        <div className="h-9 w-[55%] rounded-lg animate-pulse" style={{ background: 'oklch(0 0 0 / 0.07)' }} />
        <div className="h-4 w-[70%] rounded-full animate-pulse" style={{ background: 'oklch(0 0 0 / 0.05)' }} />
        <div className="h-4 w-[55%] rounded-full animate-pulse" style={{ background: 'oklch(0 0 0 / 0.04)' }} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-32 rounded-2xl animate-pulse" style={{ background: 'oklch(0 0 0 / 0.06)' }} />
          ))}
        </div>
      </div>
      <span className="sr-only">Loading, please wait…</span>
    </div>
  )
}
