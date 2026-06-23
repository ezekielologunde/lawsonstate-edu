import { createClient } from '@supabase/supabase-js'

export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export type ContentMap = Record<string, Record<string, string>>

export function buildContentMap(
  rows: { section: string; key: string; value: string | null }[]
): ContentMap {
  return rows.reduce<ContentMap>((acc, { section, key, value }) => ({
    ...acc,
    [section]: { ...acc[section], [key]: value ?? '' },
  }), {})
}
