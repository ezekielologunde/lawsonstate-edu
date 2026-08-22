---
project: lawsonstate-edu
type: architecture
status: active
last_updated: 2026-08-22
tags: [project/lawsonstate-edu]
---

# Architecture

See [[Project]] for stack summary.

## Repo layout

```
lawsonstate-edu/
├── scripts/                     Python content-extraction utilities (news, PDFs)
└── www.lawsonstate.edu/         Turborepo monorepo root
    ├── apps/
    │   ├── web/                 Main Next.js site (the actual product)
    │   ├── axion/               Vite/React landing-page template ("axion-studio") — generic agency demo, not Lawson-branded
    │   ├── halo/                Vite/React landing-page template ("halo-landing") — generic SaaS demo, not Lawson-branded
    │   ├── portfolio/           Vite/React portfolio template — generic, not Lawson-branded
    │   └── mobile/              Expo/React Native shell with Lawson State branding (static quick-links screen only)
    ├── packages/
    │   ├── config/               Shared tsconfig base
    │   ├── db/                   Placeholder/thin package
    │   └── ui/                   Placeholder/thin shared UI package
    ├── supabase/migrations/      3 SQL migrations (schema below)
    └── turbo.json, package.json  Workspace + task pipeline config
```

`apps/axion`, `apps/halo`, and `apps/portfolio` are not wired into the
Lawson State site (no shared branding, no cross-linking, no shared
packages usage found) — treat them as scaffolding/experiments carried in
the monorepo rather than part of the product. `apps/mobile` has Lawson
State branding in its single static screen but has no data layer or
navigation beyond that screen.

## `apps/web` — the college website

Next.js App Router, route folders under `app/`:

- Marketing sections: `about/`, `academics/`, `admissions/`, `advising/`,
  `campus-life/`, `careers/`, `contact/`, `financial-aid/`, `library/`,
  `orientation/`, `programs/[slug]/`, `registration/`, `student-resources/`,
  `visit/`, `workforce/`
- `calendar/` — events calendar (see `components/calendar-view.tsx`,
  `components/live-calendar-widget.tsx`, `lib/calendar-feed.ts`)
- `news/[slug]/` — news articles, backed by `lib/news-data.ts` (static
  fallback data generated from `scripts/generate_news_data.py`) and/or
  Supabase `announcements`
- `portal/` — student portal landing/redirect page
- `admin/` — CMS: `content/`, `programs/`, `events/`, `announcements/`,
  `login/`, plus `actions.ts` (Server Actions) and `layout.tsx` (route
  guard via `requireAdmin()`)
- `api/search/route.ts` — the only real API route; wraps
  `lib/search-index.ts`
- `sitemap.ts`, `robots.ts` — standard Next.js metadata routes
- `error.tsx`, `global-error.tsx`, `not-found.tsx`, `loading.tsx` — App
  Router convention files

### Data flow

- **Read path**: pages call `lib/supabase.ts` (`createServerClient`, uses
  `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`) to read
  `page_content`, `departments`, `announcements`, `events`, falling back to
  static data (`lib/featured-programs-fallback.ts`, `lib/programs-data.ts`,
  `lib/news-data.ts`) when Supabase data isn't available.
- **Write path (admin only)**: `app/admin/actions.ts` are Next.js Server
  Actions guarded by `requireAdmin()`; they use `lib/supabase-admin.ts`
  (`createAdminClient`, presumably service-role key) to upsert
  `page_content` and update `departments`/`announcements`/`events`, then
  `revalidatePath(...)` the affected routes.
- **Admin route protection**: `proxy.ts` (Next.js middleware, matcher
  `/admin/:path*`) redirects to `/admin/login` unless an `admin_session`
  cookie is present; the cookie value is validated separately by
  `requireAdmin()` in Server Actions. See [[Security]].
- **Search**: `app/api/search/route.ts` calls `searchIndex()` in
  `lib/search-index.ts`, which builds its index from `components/nav-data.ts`
  (site nav), `lib/programs-data.ts` (sample/fallback programs), and a
  hardcoded `SUPPLEMENTAL_ENTRIES` list for footer-only legal/compliance
  pages. This is a static, in-memory/client-bundled index — not a database
  search.
- **`lib/memory.ts`**: reads a generated `index_of_markdown_files.md` from
  the project root — this looks like tooling support for AI-assisted
  development (a "memory"/index file for coding agents), not a
  user-facing feature.

### Supabase schema (3 migrations)

`www.lawsonstate.edu/supabase/migrations/`:

1. **`0001_initial.sql`** — `profiles` (extends `auth.users`, role enum:
   student/faculty/staff/admin), `departments`, and (per naming) likely
   `announcements`/base tables enriched later.
2. **`0002_homepage_content.sql`** — adds homepage-grid columns to
   `departments` (`tag`, `href`, `grid_slot`, `display_order`,
   `is_featured_home`); adds card columns to `announcements` (`excerpt`,
   `image_url`, `category`, `href`, `is_featured`, `is_published`); creates
   `events`.
3. **`0003_scraped_pages.sql`** — `scraped_pages` (raw scrape storage from
   the content-extraction workflow, RLS enabled with an `anon_read` policy)
   and `faculty_directory` (populated from scraped faculty pages).

Row Level Security is enabled at least on `scraped_pages` (anon read
allowed). RLS posture for `profiles`/`departments`/`announcements`/`events`
was not fully re-derived from the migration files reviewed here — verify
policies directly in Supabase before relying on this doc for security
review; see [[Security]].

### Content extraction pipeline

`scripts/extract_news.py`, `scripts/extract_pdf.py`,
`scripts/generate_news_data.py` scrape/parse the live legacy site and PDFs,
producing `scripts/news_extracted.json`, which feeds static fallback
content in `apps/web/lib/news-data.ts`. This is an offline/manual pipeline,
not run as part of the build.

## `apps/mobile`

Expo + React Native app. `App.tsx` currently renders a single static
screen (hero + quick-links list) with Lawson State branding and no
navigation, data fetching, or auth — an early shell, not a functioning
companion app yet.
