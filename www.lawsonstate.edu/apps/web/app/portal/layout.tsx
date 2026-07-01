import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Portal — Lawson State Community College',
  description: 'Your Lawson State student hub. Access MyLawson, Canvas, advising, financial aid, and all student tools — new or returning.',
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
