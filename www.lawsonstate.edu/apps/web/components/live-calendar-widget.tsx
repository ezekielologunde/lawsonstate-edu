'use client'

import { useEffect, useRef, type DetailedHTMLProps, type HTMLAttributes } from 'react'

// Embeds the same live, officially-maintained events calendar the real
// lawsonstate.edu site uses (Modern Campus / OmniCMS widget) — same
// data-calendar-id and script src found in the live site's own markup.
// Used as a fallback so this page never dead-ends on an empty state if our
// own Supabase events table is ever unreachable or misconfigured.
const WIDGET_SRC = 'https://widget.calendar.moderncampus.net/app.js'
const CALENDAR_ID = '36278aea-da9b-4ab8-88fc-a48a9eabfe94'
const WIDGET_CSS = 'https://www.lawsonstate.edu/_resources/css/calendar.css'

export default function LiveCalendarWidget() {
  const hostRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!document.querySelector(`script[src="${WIDGET_SRC}"]`)) {
      const s = document.createElement('script')
      s.async = true
      s.src = WIDGET_SRC
      s.id = 'omnicms-calendar'
      document.head.appendChild(s)
    }
  }, [])

  return (
    <div ref={hostRef}>
      <omnicms-calendar data-calendar-id={CALENDAR_ID} data-css={WIDGET_CSS} />
    </div>
  )
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- required pattern for augmenting JSX.IntrinsicElements
  namespace JSX {
    interface IntrinsicElements {
      'omnicms-calendar': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'data-calendar-id'?: string
        'data-css'?: string
      }
    }
  }
}
