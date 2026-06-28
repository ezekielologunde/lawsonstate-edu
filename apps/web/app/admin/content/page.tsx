import { requireAdmin } from '../actions'
import { createAdminClient } from '@/lib/supabase-admin'
import { upsertContent } from '../actions'

const SECTIONS: Record<string, { key: string; label: string; multiline?: boolean }[]> = {
  hero: [
    { key: 'headline_line1',      label: 'Headline line 1' },
    { key: 'headline_line2',      label: 'Headline line 2 (gold)' },
    { key: 'subheadline',         label: 'Subheadline', multiline: true },
    { key: 'cta_primary_label',   label: 'Primary CTA label' },
    { key: 'cta_primary_href',    label: 'Primary CTA URL' },
    { key: 'cta_secondary_label', label: 'Secondary CTA label' },
    { key: 'cta_secondary_href',  label: 'Secondary CTA URL' },
    { key: 'stat_1', label: 'Stat 1' },
    { key: 'stat_2', label: 'Stat 2' },
    { key: 'stat_3', label: 'Stat 3' },
    { key: 'stat_4', label: 'Stat 4' },
  ],
  programs: [
    { key: 'headline',    label: 'Section headline' },
    { key: 'subheadline', label: 'Section subheadline', multiline: true },
    { key: 'cta_label',   label: 'View all CTA label' },
    { key: 'cta_href',    label: 'View all CTA URL' },
  ],
  support: [
    { key: 'headline_line1', label: 'Headline line 1' },
    { key: 'headline_line2', label: 'Headline line 2 (gold)' },
    { key: 'step_1_title', label: 'Step 1 title' },
    { key: 'step_1_body',  label: 'Step 1 body', multiline: true },
    { key: 'step_1_cta',   label: 'Step 1 CTA label' },
    { key: 'step_1_href',  label: 'Step 1 CTA URL' },
    { key: 'step_2_title', label: 'Step 2 title' },
    { key: 'step_2_body',  label: 'Step 2 body', multiline: true },
    { key: 'step_2_cta',   label: 'Step 2 CTA label' },
    { key: 'step_2_href',  label: 'Step 2 CTA URL' },
    { key: 'step_3_title', label: 'Step 3 title' },
    { key: 'step_3_body',  label: 'Step 3 body', multiline: true },
    { key: 'step_3_cta',   label: 'Step 3 CTA label' },
    { key: 'step_3_href',  label: 'Step 3 CTA URL' },
  ],
  prefooter: [
    { key: 'headline',    label: 'Headline' },
    { key: 'subheadline', label: 'Subheadline', multiline: true },
    { key: 'cta_1_label', label: 'CTA 1 label' },
    { key: 'cta_1_href',  label: 'CTA 1 URL' },
    { key: 'cta_2_label', label: 'CTA 2 label' },
    { key: 'cta_2_href',  label: 'CTA 2 URL' },
    { key: 'cta_3_label', label: 'CTA 3 label' },
    { key: 'cta_3_href',  label: 'CTA 3 URL' },
  ],
}

export default async function ContentPage() {
  await requireAdmin()
  const db = createAdminClient()
  const { data: rows } = await db.from('page_content').select('section, key, value').eq('page_slug', 'home')

  const stored: Record<string, Record<string, string>> = {}
  for (const row of rows ?? []) {
    stored[row.section] ??= {}
    stored[row.section][row.key] = row.value ?? ''
  }

  return (
    <div>
      <h1
        className="font-display font-black mb-1"
        style={{ fontSize: '1.75rem', letterSpacing: '-0.02em', color: 'oklch(0.14 0.02 263)' }}
      >
        Page Content
      </h1>
      <p className="text-sm mb-8" style={{ color: 'oklch(0.50 0.05 263)' }}>
        Edit homepage text. Each field saves individually.
      </p>

      <div className="flex flex-col gap-8">
        {Object.entries(SECTIONS).map(([section, fields]) => (
          <section key={section}>
            <h2
              className="font-display font-bold text-sm uppercase mb-4 pb-2 border-b"
              style={{
                letterSpacing: '0.08em',
                color: 'oklch(0.27 0.13 263)',
                borderColor: 'oklch(0.88 0.015 263)',
              }}
            >
              {section}
            </h2>
            <div className="flex flex-col gap-3">
              {fields.map(({ key, label, multiline }) => {
                const current = stored[section]?.[key] ?? ''
                return (
                  <form key={key} action={upsertContent} className="flex gap-3 items-start">
                    <input type="hidden" name="page_slug" value="home" />
                    <input type="hidden" name="section"   value={section} />
                    <input type="hidden" name="key"       value={key} />
                    <label
                      className="text-sm font-medium pt-2.5 w-48 shrink-0"
                      style={{ color: 'oklch(0.38 0.05 263)' }}
                    >
                      {label}
                    </label>
                    {multiline ? (
                      <textarea
                        name="value"
                        defaultValue={current}
                        rows={3}
                        className="flex-1 px-3 py-2 rounded-lg text-sm border resize-y"
                        style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                      />
                    ) : (
                      <input
                        type="text"
                        name="value"
                        defaultValue={current}
                        className="flex-1 px-3 py-2 rounded-lg text-sm border"
                        style={{ border: '1.5px solid oklch(0.85 0.02 263)', color: 'oklch(0.14 0.02 263)' }}
                      />
                    )}
                    <button
                      type="submit"
                      className="shrink-0 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:brightness-105"
                      style={{ background: 'oklch(0.27 0.13 263)' }}
                    >
                      Save
                    </button>
                  </form>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
