import { requireAdmin } from '../actions'
import { createAdminClient } from '@/lib/supabase-admin'
import { saveAnnouncement, deleteAnnouncement } from '../actions'

export default async function AnnouncementsPage() {
  await requireAdmin()
  const db = createAdminClient()
  const { data: items } = await db
    .from('announcements')
    .select('*')
    .order('published_at', { ascending: false })
    .limit(50)

  return (
    <div>
      <h1
        className="font-display font-black mb-1"
        style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', color: 'oklch(0.14 0.02 263)' }}
      >
        Announcements
      </h1>
      <p className="text-sm mb-6" style={{ color: 'oklch(0.50 0.05 263)' }}>
        The announcement marked "featured" appears as the hero story on the homepage.
      </p>

      {/* New announcement form */}
      <details className="mb-8">
        <summary
          className="cursor-pointer text-sm font-semibold px-4 py-2 rounded-lg inline-block text-white"
          style={{ background: 'oklch(0.27 0.13 263)' }}
        >
          + Add announcement
        </summary>
        <div
          className="mt-3 bg-white rounded-xl p-6 border"
          style={{ borderColor: 'oklch(0.90 0.01 263)' }}
        >
          <AnnouncementForm />
        </div>
      </details>

      <div className="flex flex-col gap-4">
        {(items ?? []).map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl p-5 border"
            style={{ borderColor: 'oklch(0.90 0.01 263)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="font-semibold text-sm" style={{ color: 'oklch(0.14 0.02 263)' }}>
                  {item.title}
                </span>
                <div className="flex gap-2 mt-1">
                  {item.is_featured && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: 'oklch(0.83 0.16 82)', color: 'oklch(0.14 0.02 263)' }}
                    >
                      Featured
                    </span>
                  )}
                  {item.is_published ? (
                    <span className="text-xs text-emerald-700 font-medium">Published</span>
                  ) : (
                    <span className="text-xs text-red-600 font-medium">Draft</span>
                  )}
                </div>
              </div>
              <form action={deleteAnnouncement}>
                <input type="hidden" name="id" value={item.id} />
                <button
                  type="submit"
                  className="text-xs text-red-500 hover:text-red-700 transition-colors"
                >
                  Delete
                </button>
              </form>
            </div>
            <form action={saveAnnouncement} className="grid sm:grid-cols-2 gap-3">
              <input type="hidden" name="id" value={item.id} />
              <AField label="Title"     name="title"     value={item.title} />
              <AField label="Category"  name="category"  value={item.category ?? 'Campus News'} />
              <AField label="Link URL"  name="href"      value={item.href ?? ''} />
              <AField label="Image URL" name="image_url" value={item.image_url ?? ''} />
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>
                  Excerpt
                </label>
                <textarea
                  name="excerpt"
                  defaultValue={item.excerpt ?? ''}
                  rows={2}
                  className="w-full px-3 py-2 rounded-lg text-sm border resize-y"
                  style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                />
              </div>
              <div className="flex items-center gap-6 sm:col-span-2">
                <CheckField id={`feat-${item.id}`} name="is_featured"  label="Featured on homepage" checked={item.is_featured} />
                <CheckField id={`pub-${item.id}`}  name="is_published" label="Published"            checked={item.is_published} />
                <button
                  type="submit"
                  className="ml-auto px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:brightness-105"
                  style={{ background: 'oklch(0.27 0.13 263)' }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnnouncementForm() {
  return (
    <form action={saveAnnouncement} className="grid sm:grid-cols-2 gap-3">
      <AField label="Title"     name="title"     value="" />
      <AField label="Category"  name="category"  value="Campus News" />
      <AField label="Link URL"  name="href"      value="" />
      <AField label="Image URL" name="image_url" value="" />
      <div className="sm:col-span-2">
        <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>Excerpt</label>
        <textarea name="excerpt" rows={2} className="w-full px-3 py-2 rounded-lg text-sm border resize-y"
          style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }} />
      </div>
      <div className="flex items-center gap-6 sm:col-span-2">
        <CheckField id="new-feat" name="is_featured"  label="Featured" checked={false} />
        <CheckField id="new-pub"  name="is_published" label="Published" checked={true} />
        <button type="submit" className="ml-auto px-5 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ background: 'oklch(0.27 0.13 263)' }}>
          Create
        </button>
      </div>
    </form>
  )
}

function AField({ label, name, value }: { label: string; name: string; value: string }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>{label}</label>
      <input type="text" name={name} defaultValue={value} className="w-full px-3 py-2 rounded-lg text-sm border"
        style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }} />
    </div>
  )
}

function CheckField({ id, name, label, checked }: { id: string; name: string; label: string; checked: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" id={id} name={name} value="1" defaultChecked={checked} className="w-4 h-4" />
      <label htmlFor={id} className="text-sm" style={{ color: 'oklch(0.38 0.05 263)' }}>{label}</label>
    </div>
  )
}
