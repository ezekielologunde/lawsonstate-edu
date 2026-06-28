import { requireAdmin } from '../actions'
import { createAdminClient } from '@/lib/supabase-admin'
import { saveEvent, deleteEvent } from '../actions'

export default async function EventsPage() {
  await requireAdmin()
  const db = createAdminClient()
  const { data: items } = await db
    .from('events')
    .select('*')
    .order('event_date')
    .limit(60)

  return (
    <div>
      <h1
        className="font-display font-black mb-1"
        style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', color: 'oklch(0.14 0.02 263)' }}
      >
        Events
      </h1>
      <p className="text-sm mb-6" style={{ color: 'oklch(0.50 0.05 263)' }}>
        Up to 7 published upcoming events appear in the homepage calendar strip, ordered by date then sort order.
      </p>

      {/* New event form */}
      <details className="mb-8">
        <summary
          className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-lg inline-block text-white"
          style={{ background: 'oklch(0.27 0.13 263)' }}
        >
          + Add event
        </summary>
        <div
          className="mt-3 bg-white rounded-xl p-6 border"
          style={{ borderColor: 'oklch(0.90 0.01 263)' }}
        >
          <EventForm />
        </div>
      </details>

      <div className="flex flex-col gap-3">
        {(items ?? []).map((evt) => (
          <div
            key={evt.id}
            className="bg-white rounded-xl p-5 border"
            style={{ borderColor: 'oklch(0.90 0.01 263)' }}
          >
            <form action={saveEvent} className="flex flex-wrap items-end gap-3">
              <input type="hidden" name="id" value={evt.id} />

              <div className="flex-1 min-w-48">
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={evt.title}
                  className="w-full px-3 py-2 rounded-lg text-sm border"
                  style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                />
              </div>

              <div className="w-36">
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Date</label>
                <input
                  type="date"
                  name="event_date"
                  defaultValue={evt.event_date}
                  className="w-full px-3 py-2 rounded-lg text-sm border"
                  style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                />
              </div>

              <div className="flex-1 min-w-40">
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Link URL</label>
                <input
                  type="text"
                  name="href"
                  defaultValue={evt.href}
                  className="w-full px-3 py-2 rounded-lg text-sm border"
                  style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                />
              </div>

              <div className="w-20">
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Order</label>
                <input
                  type="number"
                  name="sort_order"
                  defaultValue={evt.sort_order ?? 0}
                  className="w-full px-3 py-2 rounded-lg text-sm border"
                  style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                />
              </div>

              <div className="flex items-center gap-2 pb-2">
                <input
                  type="checkbox"
                  name="is_published"
                  value="1"
                  id={`pub-${evt.id}`}
                  defaultChecked={evt.is_published}
                  className="w-4 h-4"
                />
                <label htmlFor={`pub-${evt.id}`} className="text-sm" style={{ color: 'oklch(0.38 0.05 263)' }}>
                  Published
                </label>
              </div>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:brightness-105"
                style={{ background: 'oklch(0.27 0.13 263)' }}
              >
                Save
              </button>

              <form action={deleteEvent}>
                <input type="hidden" name="id" value={evt.id} />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                  style={{ color: 'oklch(0.55 0.15 25)' }}
                >
                  Delete
                </button>
              </form>
            </form>
          </div>
        ))}
      </div>
    </div>
  )
}

function EventForm() {
  const today = new Date().toISOString().split('T')[0]
  return (
    <form action={saveEvent} className="flex flex-wrap items-end gap-3">
      <div className="flex-1 min-w-48">
        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Title</label>
        <input type="text" name="title" required className="w-full px-3 py-2 rounded-lg text-sm border"
          style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }} />
      </div>
      <div className="w-36">
        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Date</label>
        <input type="date" name="event_date" defaultValue={today} required className="w-full px-3 py-2 rounded-lg text-sm border"
          style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }} />
      </div>
      <div className="flex-1 min-w-40">
        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Link URL</label>
        <input type="text" name="href" defaultValue="/calendar" className="w-full px-3 py-2 rounded-lg text-sm border"
          style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }} />
      </div>
      <div className="flex items-center gap-2 pb-2">
        <input type="checkbox" name="is_published" value="1" id="new-pub-evt" defaultChecked className="w-4 h-4" />
        <label htmlFor="new-pub-evt" className="text-sm" style={{ color: 'oklch(0.38 0.05 263)' }}>Published</label>
      </div>
      <button type="submit" className="px-5 py-2 rounded-lg text-sm font-semibold text-white"
        style={{ background: 'oklch(0.27 0.13 263)' }}>
        Create
      </button>
    </form>
  )
}
