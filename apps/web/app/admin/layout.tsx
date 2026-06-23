import Link from 'next/link'
import { logoutAction } from './actions'

const NAV = [
  { href: '/admin',              label: 'Dashboard' },
  { href: '/admin/content',      label: 'Page Content' },
  { href: '/admin/programs',     label: 'Programs' },
  { href: '/admin/announcements',label: 'Announcements' },
  { href: '/admin/events',       label: 'Events' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: 'oklch(0.96 0.01 263)' }}>
      <header
        className="sticky top-0 z-10 flex items-center gap-6 px-6 h-14 border-b"
        style={{ background: 'oklch(0.27 0.13 263)', borderColor: 'oklch(0.33 0.12 263)' }}
      >
        <span
          className="font-display font-black text-lg shrink-0"
          style={{ color: 'oklch(0.83 0.16 82)', letterSpacing: '-0.02em' }}
        >
          LSCC Admin
        </span>
        <nav className="flex gap-1 overflow-x-auto">
          {NAV.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="shrink-0 px-3 py-1.5 rounded text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <form action={logoutAction} className="ml-auto shrink-0">
          <button
            type="submit"
            className="text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            Sign out
          </button>
        </form>
      </header>
      <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
    </div>
  )
}
