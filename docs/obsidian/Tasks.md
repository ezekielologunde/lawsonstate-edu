---
project: lawsonstate-edu
type: tasks
status: active
last_updated: 2026-08-22
tags: [project/lawsonstate-edu]
---

# Tasks / Known Gaps

Reconstructed from in-code TODOs and observed gaps — not an authoritative
backlog.

## From code comments

- `components/newsletter-signup.tsx:12` — `// TODO: wire to a real
  subscription endpoint`. The newsletter signup form currently has no
  backing API/integration.

## Observed gaps (not explicit TODOs)

- **No automated tests.** `turbo.json` defines a `test` task and root
  `package.json` exposes `npm test`, but no test files were found under
  `apps/web` (or the other apps). Worth confirming whether tests exist
  elsewhere or the task is currently a no-op.
- **Search index can drift from real content.** `lib/search-index.ts` is
  a hand-maintained static index (nav + fallback program data +
  hardcoded supplemental pages). New/edited pages created through the
  admin CMS (`page_content`, `departments`, `announcements`, `events`)
  are not automatically searchable.
- **Two sources of truth for programs/news.** Static fallback data
  (`lib/programs-data.ts`, `lib/news-data.ts`,
  `lib/featured-programs-fallback.ts`) can drift from the Supabase-backed
  live data; no reconciliation mechanism observed.
- **Admin auth is a single shared secret**, not per-user accounts — no
  audit trail of which staff member made a given content change. See
  [[Security]] for details and hardening suggestions.
- **`apps/axion`, `apps/halo`, `apps/portfolio`** sit in the monorepo with
  no apparent connection to the college site or to each other. Worth a
  decision on whether to keep, archive, or remove them to reduce
  confusion for new contributors (see [[Decisions]]).
- **`apps/mobile`** is a single static screen with no navigation or data
  layer — unclear if it's an active initiative or an abandoned
  experiment.
- **RLS policies** were only confirmed for `scraped_pages` in the
  migrations reviewed; `profiles`, `departments`, `announcements`, and
  `events` should be checked directly in Supabase to confirm intended
  read/write policies are actually enforced (see [[Security]]).
