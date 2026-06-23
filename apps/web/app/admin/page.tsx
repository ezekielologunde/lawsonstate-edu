import Link from 'next/link'
import { requireAdmin } from './actions'
import { createAdminClient } from '@/lib/supabase-admin'

const SECTIONS = [
  {
    href:    '/admin/content',
    label:   'Page Content',
    desc:    'Edit hero headlines, CTAs, support steps, and prefooter text',
    color:   'oklch(0.27 0.13 263)',
  },
  {
    href:    '/admin/programs',
    label:   'Programs',
    desc:    'Control which programs appear on the homepage and in which grid slots',
    color:   'oklch(0.20 0.10 265)',
  },
  {
    href:    '/admin/announcements',
    label:   'Announcements',
    desc:    'Manage news stories — set which one is featured on the homepage',
    color:   'oklch(0.38 0.13 263)',
  },
  {
    href:    '/admin/events',
    label:   'Events',
    desc:    'Add and order upcoming campus events shown in the events strip',
    color:   'oklch(0.27 0.13 263)',
  },
]

export default async function AdminDashboard() {
  await requireAdmin()
  const db = createAdminClient()

  const [
    { count: programCount },
    { count: announcementCount },
    { count: eventCount },
    { count: pageCount },
    { count: scrapedCount },
  ] = await Promise.all([
    db.from('departments').select('*', { count: 'exact', head: true }),
    db.from('announcements').select('*', { count: 'exact', head: true }),
    db.from('events').select('*', { count: 'exact', head: true }),
    db.from('page_content').select('*', { count: 'exact', head: true }),
    db.from('scraped_pages').select('*', { count: 'exact', head: true }),
  ])

  const stats = [
    { label: 'Programs',        value: programCount ?? 0 },
    { label: 'Announcements',   value: announcementCount ?? 0 },
    { label: 'Events',          value: eventCount ?? 0 },
    { label: 'Content fields',  value: pageCount ?? 0 },
    { label: 'Scraped pages',   value: scrapedCount ?? 0 },
  ]

  return (
    <div>
      <h1
        className="font-display font-black mb-2"
        style={{ fontSize: '2rem', letterSpacing: '-0.02em', color: 'oklch(0.14 0.02 263)' }}
      >
        Dashboard
      </h1>
      <p className="text-sm mb-8" style={{ color: 'oklch(0.50 0.05 263)' }}>
        Lawson State Community College — content management
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-lg p-4 border" style={{ borderColor: 'oklch(0.90 0.01 263)' }}>
            <div
              className="font-display font-black text-2xl"
              style={{ color: 'oklch(0.27 0.13 263)', letterSpacing: '-0.02em' }}
            >
              {s.value}
            </div>
            <div className="text-xs mt-1" style={{ color: 'oklch(0.50 0.05 263)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {SECTIONS.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group block p-6 rounded-xl text-white transition-transform hover:-translate-y-0.5"
            style={{ background: s.color }}
          >
            <div
              className="font-display font-bold text-lg mb-2 group-hover:underline"
              style={{ letterSpacing: '-0.01em' }}
            >
              {s.label}
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-xs" style={{ color: 'oklch(0.60 0.04 263)' }}>
        Changes to content, programs, announcements, and events update the public homepage immediately.
      </p>
    </div>
  )
}
