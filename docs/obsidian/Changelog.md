---
project: lawsonstate-edu
type: changelog
status: active
last_updated: 2026-08-22
tags: [project/lawsonstate-edu]
---

# Changelog

Reconstructed from `git log`. The repository history available in this
clone contains a single commit — the full development history (initial
scaffolding, migrations, page build-out) predates or was squashed before
this snapshot.

## 2026 (repo history as captured)

- **`804e513`** — `feat(programs): wire in real per-program hero photos
  for 20 programs`. Most recent (and, in this clone, only) recorded
  commit: replaced placeholder imagery on `app/programs/[slug]` with real
  photography across 20 academic programs.

## Prior state (inferred from code, not from commit history)

Not separately dated, but the current snapshot reflects a monorepo that
already includes: the full `apps/web` marketing site and admin CMS, three
Supabase migrations (initial schema → homepage content enrichment →
scraped-pages content store), a Python scraping pipeline for legacy-site
content, and several scaffold apps (`axion`, `halo`, `portfolio`,
`mobile`) — see [[Architecture]] and [[Decisions]].

## Maintaining this changelog

Add a dated entry here for each notable merged change (new
sections/features, schema migrations, security-relevant changes,
dependency/framework upgrades). See the `obsidian-sync` skill.
