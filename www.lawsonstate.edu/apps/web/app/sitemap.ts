import type { MetadataRoute } from 'next'
import { SAMPLE_PROGRAMS } from '@/lib/programs-data'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lawsonstate.edu'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Indexable, 200-status canonicals only. Intentionally EXCLUDED:
  //  - redirecting paths: /admissions/apply, /visit (307)
  //  - removed / 404 paths: /learn, /academics/<slug>, /continuing-ed,
  //    /orientation, /student-portal
  const routes: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/',                           priority: 1.0,  freq: 'weekly'  },
    { path: '/programs',                   priority: 0.95, freq: 'weekly'  },
    { path: '/academics',                  priority: 0.9,  freq: 'weekly'  },
    { path: '/admissions',                 priority: 0.9,  freq: 'weekly'  },
    { path: '/financial-aid',              priority: 0.9,  freq: 'weekly'  },
    { path: '/admissions/transfer',        priority: 0.8,  freq: 'monthly' },
    { path: '/admissions/dual-enrollment', priority: 0.7,  freq: 'monthly' },
    { path: '/workforce',                  priority: 0.8,  freq: 'monthly' },
    { path: '/calendar',                   priority: 0.8,  freq: 'weekly'  },
    { path: '/campus-life',                priority: 0.7,  freq: 'monthly' },
    { path: '/about',                      priority: 0.7,  freq: 'monthly' },
  ]

  // Per-program detail pages (the long-tail SEO leaves) — sourced from the same
  // dataset that generates the /programs/[slug] routes, so the sitemap and the
  // static params can never drift.
  const programRoutes = SAMPLE_PROGRAMS.map(p => ({
    path: p.href,
    priority: 0.7,
    freq: 'monthly' as const,
  }))

  return [...routes, ...programRoutes].map(r => ({
    url:             `${BASE}${r.path}`,
    lastModified:    now,
    changeFrequency: r.freq,
    priority:        r.priority,
  }))
}
