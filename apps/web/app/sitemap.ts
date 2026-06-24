import type { MetadataRoute } from 'next'

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.lawsonstate.edu'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<{ path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/',                              priority: 1.0, freq: 'weekly'  },
    { path: '/academics',                     priority: 0.9, freq: 'weekly'  },
    { path: '/admissions',                    priority: 0.9, freq: 'weekly'  },
    { path: '/admissions/apply',              priority: 0.9, freq: 'weekly'  },
    { path: '/financial-aid',                 priority: 0.9, freq: 'weekly'  },
    { path: '/academics/career-technical',    priority: 0.8, freq: 'monthly' },
    { path: '/academics/transfer',            priority: 0.8, freq: 'monthly' },
    { path: '/academics/health-professions',  priority: 0.8, freq: 'monthly' },
    { path: '/academics/business-it',         priority: 0.8, freq: 'monthly' },
    { path: '/admissions/transfer',           priority: 0.8, freq: 'monthly' },
    { path: '/workforce',                     priority: 0.8, freq: 'monthly' },
    { path: '/academics/stem',                priority: 0.7, freq: 'monthly' },
    { path: '/academics/honors',              priority: 0.7, freq: 'monthly' },
    { path: '/academics/online',              priority: 0.7, freq: 'monthly' },
    { path: '/academics/weekend-college',     priority: 0.7, freq: 'monthly' },
    { path: '/admissions/dual-enrollment',    priority: 0.7, freq: 'monthly' },
    { path: '/calendar',                       priority: 0.8, freq: 'weekly'  },
    { path: '/campus-life',                   priority: 0.7, freq: 'monthly' },
    { path: '/about',                         priority: 0.7, freq: 'monthly' },
    { path: '/learn',                         priority: 0.7, freq: 'monthly' },
    { path: '/continuing-ed',                 priority: 0.6, freq: 'monthly' },
    { path: '/orientation',                   priority: 0.6, freq: 'monthly' },
    { path: '/student-portal',               priority: 0.6, freq: 'monthly' },
    { path: '/visit',                         priority: 0.6, freq: 'monthly' },
  ]

  return routes.map(r => ({
    url:             `${BASE}${r.path}`,
    lastModified:    now,
    changeFrequency: r.freq,
    priority:        r.priority,
  }))
}
