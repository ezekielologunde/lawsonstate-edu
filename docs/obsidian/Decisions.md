---
project: lawsonstate-edu
type: decisions
status: active
last_updated: 2026-08-22
tags: [project/lawsonstate-edu]
---

# Decisions

Observed choices, inferred from code — not a decision log kept by the
original authors, so rationale is reconstructed where not explicit.

## Turborepo monorepo with multiple, largely unrelated apps

The workspace hosts one production app (`apps/web`) alongside several
apparently unrelated demo/scaffold apps (`axion`, `halo`, `portfolio`,
`mobile`). No shared code, styling, or content ties them to the college
site. Likely explanation: the monorepo was set up early as a general
workspace/experimentation space, and only `apps/web` was carried through
to production. See [[Architecture]] and [[Tasks]].

## Supabase for content + auth data model, but a custom cookie scheme for admin auth

`apps/web` depends on `@supabase/supabase-js` and has a `profiles` table
that extends `auth.users`, suggesting Supabase Auth was intended for
end-user accounts. However, the actual admin CMS gate
(`app/admin/actions.ts`) does **not** use Supabase Auth — it compares a
submitted password against `process.env.ADMIN_SECRET` and sets a cookie
whose value is `sha256(ADMIN_SECRET + 'lscc-admin')`. This is a simpler,
single-shared-password scheme rather than per-user Supabase accounts. See
[[Security]] for the implications.

## Static fallback data alongside Supabase-backed content

Several content types (programs, news, featured programs) have static
TypeScript fallback data (`lib/programs-data.ts`,
`lib/news-data.ts`, `lib/featured-programs-fallback.ts`) in addition to
Supabase-backed equivalents. This lets the site render meaningful content
even if Supabase is unreachable or not yet populated, at the cost of two
sources of truth that can drift.

## Content scraped from the legacy live site as seed data

`scripts/extract_news.py`, `extract_pdf.py`, `generate_news_data.py` and
the `scraped_pages` / `faculty_directory` tables (migration `0003`)
indicate the team scraped the previous lawsonstate.edu site to bootstrap
content for the rebuild rather than manually re-authoring everything.

## Search implemented as a static in-memory index, not full-text DB search

`lib/search-index.ts` builds its index from nav data and static program
data plus a hardcoded supplemental-pages list, rather than querying
Supabase full-text search. Simpler to ship, but means new pages/content
added only through the admin CMS won't automatically appear in search
unless the index is updated in code.

## "Advising bot" as a scripted flow, not an LLM chatbot

`components/advising-bot.tsx` is a deterministic, hand-authored
conversational UI (fixed intents, fixed advisor list, fixed booked slots)
rather than an AI-backed assistant. Reduces cost/risk versus an LLM
integration, at the cost of flexibility — it can't answer arbitrary
questions.
