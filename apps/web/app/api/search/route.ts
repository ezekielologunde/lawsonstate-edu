import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim() ?? ''
  if (q.length < 2) return NextResponse.json({ results: [] })

  const db = createServerClient()
  const { data } = await db
    .from('scraped_pages')
    .select('url, page_title, meta_description, category')
    .or(`page_title.ilike.%${q}%,meta_description.ilike.%${q}%`)
    .not('page_title', 'is', null)
    .limit(8)

  return NextResponse.json({ results: data ?? [] })
}
