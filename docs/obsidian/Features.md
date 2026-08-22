---
project: lawsonstate-edu
type: features
status: active
last_updated: 2026-08-22
tags: [project/lawsonstate-edu]
---

# Features

See [[Architecture]] for how these are implemented.

## Implemented

- **Full marketing site** covering admissions, academics/programs,
  financial aid, advising, student resources, campus life, workforce,
  library, careers, contact, orientation, registration, and required
  institutional-compliance pages (Title IX, Title III, non-discrimination,
  accessibility, privacy, accreditation, consumer information).
- **Program pages** (`app/programs/[slug]`) with per-program hero photos
  (most recent commit: `804e513 feat(programs): wire in real per-program
  hero photos for 20 programs`).
- **Admin CMS** (`app/admin/*`) — password-gated dashboard to edit
  homepage content blocks, departments/programs, announcements, and
  events, backed by Supabase.
- **Site search** — `components/search-bar.tsx`,
  `search-modal.tsx`, `search-results-dropdown.tsx`,
  `search-result-item.tsx` querying `/api/search`, which searches a static
  in-app index (nav + programs + supplemental legal pages), not full-text
  DB search.
- **Events calendar** — `app/calendar`, `components/calendar-view.tsx`,
  `components/live-calendar-widget.tsx`, `lib/calendar-feed.ts`.
- **News/announcements** — `app/news`, `components/news-archive.tsx`,
  `components/news-events.tsx`, backed by `lib/news-data.ts` (static,
  scraper-generated) and/or Supabase `announcements`.
- **"Advising bot" widget** (`components/advising-bot.tsx`) — a scripted,
  rule-based conversational UI (no LLM/AI backend) that routes visitors
  through quick-start intents (Apply, Pay bill, Financial aid, Book
  advising, Find a program, Tutoring) and a guided appointment-booking
  flow (division → date → time slot → contact form), using hardcoded
  advisor names, booked slots, and external links (MyLawson Elluminate
  portal, ACCS registration system). Despite the name, this is **not** an
  AI/LLM chatbot.
- **HBCU popup, testimonials, stats ticker, value section, video section,
  visitor decision tree, visit personas** — homepage/landing marketing
  components (`components/*`).
- **Newsletter signup** (`components/newsletter-signup.tsx`) — UI only,
  not wired to a real endpoint (see [[Tasks]]).
- **Accessibility affordances** — `skip-to-main-link.tsx`,
  `navigation-progress.tsx`, `route-skeleton.tsx`, loading/error boundary
  conventions per Next.js App Router (`loading.tsx`, `error.tsx`,
  `global-error.tsx`, `not-found.tsx`).
- **SEO plumbing** — `app/sitemap.ts`, `app/robots.ts`.
- **Portal landing page** (`app/portal`) — appears to point students to
  the external MyLawson student portal rather than hosting portal
  functionality itself.

## Partial / scaffolding (not part of the site)

- `apps/axion`, `apps/halo`, `apps/portfolio` — standalone Vite/React demo
  landing pages unrelated to Lawson State branding or content; not linked
  from `apps/web`.
- `apps/mobile` — single static branded screen, no real functionality yet.
- `packages/db`, `packages/ui`, `packages/config` — thin/placeholder
  shared packages.

## Not present

- No payments/e-commerce functionality anywhere in the repo.
- No real LLM/AI integration despite the "advising bot" naming.
- No automated tests found (`turbo.json` defines a `test` task, but no
  test files were found under `apps/web`).
