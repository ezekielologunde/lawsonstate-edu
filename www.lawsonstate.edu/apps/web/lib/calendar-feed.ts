// Real-time RSS feed from the same Modern Campus calendar system that powers
// the official lawsonstate.edu calendar widget. Used as a server-side
// fallback when our own Supabase events table is empty or unreachable —
// unlike Supabase, this is a public feed with no credentials to misconfigure.
const FEED_URL = 'https://api.calendar.moderncampus.net/pubcalendar/36278aea-da9b-4ab8-88fc-a48a9eabfe94/rss?url=https%3A%2F%2Fwww.lawsonstate.edu%2Fcalendar%2Fdefault.aspx&hash=true'

export type FeedEvent = { id: string; title: string; event_date: string; href: string }

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function extractTag(block: string, tag: string): string {
  const m = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`))
  if (!m) return ''
  return decodeEntities(
    m[1].replace(/^\s*<!\[CDATA\[/, '').replace(/\]\]>\s*$/, '').trim()
  )
}

export async function fetchCalendarFeed(): Promise<FeedEvent[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 1800 } })
    if (!res.ok) return []
    const xml = await res.text()
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? []

    return items
      .map((block) => ({
        id: extractTag(block, 'cal:guid') || extractTag(block, 'link'),
        title: extractTag(block, 'title'),
        event_date: extractTag(block, 'cal:start'),
        href: extractTag(block, 'link'),
      }))
      .filter((e) => e.id && e.title && e.event_date)
  } catch {
    return []
  }
}
