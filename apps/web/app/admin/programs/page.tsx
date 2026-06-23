import { requireAdmin } from '../actions'
import { createAdminClient } from '@/lib/supabase-admin'
import { updateDepartment } from '../actions'

const SLOTS = ['health', 'career', 'transfer', 'business']

export default async function ProgramsPage() {
  await requireAdmin()
  const db = createAdminClient()
  const { data: programs } = await db
    .from('departments')
    .select('*')
    .order('display_order')

  return (
    <div>
      <h1
        className="font-display font-black mb-1"
        style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', color: 'oklch(0.14 0.02 263)' }}
      >
        Programs
      </h1>
      <p className="text-sm mb-8" style={{ color: 'oklch(0.50 0.05 263)' }}>
        Control which programs appear on the homepage grid and in which slot.
      </p>

      <div className="flex flex-col gap-6">
        {(programs ?? []).map((prog) => (
          <div
            key={prog.id}
            className="bg-white rounded-xl p-6 border"
            style={{ borderColor: 'oklch(0.90 0.01 263)' }}
          >
            <form action={updateDepartment}>
              <input type="hidden" name="id" value={prog.id} />
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <Field label="Name"          name="name"          value={prog.name} />
                <Field label="Tag / Label"   name="tag"           value={prog.tag ?? ''} />
                <Field label="Link URL"      name="href"          value={prog.href ?? ''} />
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>
                    Grid slot
                  </label>
                  <select
                    name="grid_slot"
                    defaultValue={prog.grid_slot ?? 'business'}
                    className="w-full px-3 py-2 rounded-lg text-sm border"
                    style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                  >
                    {SLOTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <Field label="Display order" name="display_order" value={String(prog.display_order ?? 0)} type="number" />
                <div className="flex items-center gap-3 pt-5">
                  <input
                    type="checkbox"
                    name="is_featured_home"
                    value="1"
                    id={`feat-${prog.id}`}
                    defaultChecked={prog.is_featured_home}
                    className="w-4 h-4"
                  />
                  <label htmlFor={`feat-${prog.id}`} className="text-sm font-medium" style={{ color: 'oklch(0.38 0.05 263)' }}>
                    Show on homepage
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>
                  Description
                </label>
                <textarea
                  name="description"
                  defaultValue={prog.description ?? ''}
                  rows={3}
                  className="w-full px-3 py-2 rounded-lg text-sm border resize-y"
                  style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                />
              </div>
              <button
                type="submit"
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:brightness-105"
                style={{ background: 'oklch(0.27 0.13 263)' }}
              >
                Save changes
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  )
}

function Field({
  label, name, value, type = 'text',
}: { label: string; name: string; value: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-medium mb-1.5" style={{ color: 'oklch(0.50 0.05 263)' }}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        defaultValue={value}
        className="w-full px-3 py-2 rounded-lg text-sm border"
        style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
      />
    </div>
  )
}
