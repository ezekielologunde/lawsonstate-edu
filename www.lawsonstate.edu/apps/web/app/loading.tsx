export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{ background: 'oklch(0.13 0.12 261)' }}
      role="status"
      aria-label="Loading page content"
    >
      {/* Nav skeleton */}
      <div
        className="shrink-0 animate-pulse"
        style={{ height: '64px', background: 'oklch(0.16 0.10 261)', borderBottom: '1px solid oklch(1 0 0 / 0.06)' }}
      />

      {/* Hero skeleton */}
      <div className="flex-1 flex items-end px-6 pb-16 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div
            className="rounded-full animate-pulse mb-5"
            style={{ height: '0.625rem', width: '8rem', background: 'oklch(0.79 0.19 78 / 0.4)' }}
          />
          <div
            className="rounded-xl animate-pulse mb-3"
            style={{ height: '3.5rem', width: '55%', background: 'oklch(1 0 0 / 0.08)' }}
          />
          <div
            className="rounded-xl animate-pulse mb-5"
            style={{ height: '3.5rem', width: '38%', background: 'oklch(1 0 0 / 0.05)' }}
          />
          <div
            className="rounded-full animate-pulse mb-2"
            style={{ height: '1rem', width: '36ch', background: 'oklch(1 0 0 / 0.05)' }}
          />
          <div
            className="rounded-full animate-pulse mb-8"
            style={{ height: '1rem', width: '28ch', background: 'oklch(1 0 0 / 0.04)' }}
          />
          <div className="flex gap-3">
            <div
              className="rounded-lg animate-pulse"
              style={{ height: '2.75rem', width: '9rem', background: 'oklch(0.79 0.19 78 / 0.3)' }}
            />
            <div
              className="rounded-lg animate-pulse"
              style={{ height: '2.75rem', width: '7rem', background: 'oklch(1 0 0 / 0.06)' }}
            />
          </div>
        </div>
      </div>

      <span className="sr-only">Loading, please wait…</span>
    </div>
  )
}
