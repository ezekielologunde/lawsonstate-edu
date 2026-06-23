import { createClient } from "@supabase/supabase-js"
import type { Database } from "./types"

export function createBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.EXPO_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) throw new Error("Supabase URL and anon key are required")

  return createClient<Database>(url, key)
}
