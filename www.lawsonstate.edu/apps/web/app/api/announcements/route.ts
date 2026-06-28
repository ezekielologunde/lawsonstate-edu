import { NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET() {
  const db = createServerClient()
  const { data, error } = await db
    .from('announcements')
    .select('id, title, body, published_at, category, link')
    .order('published_at', { ascending: false })
    .limit(30)

  if (error) return NextResponse.json([], { status: 200 })
  return NextResponse.json(data ?? [])
}
