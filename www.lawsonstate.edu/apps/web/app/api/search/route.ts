import { NextRequest, NextResponse } from 'next/server'
import { searchIndex } from '@/lib/search-index'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim() ?? ''
  return NextResponse.json({ results: searchIndex(q) })
}
