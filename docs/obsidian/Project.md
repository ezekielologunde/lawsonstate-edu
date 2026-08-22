---
project: lawsonstate-edu
type: overview
status: active
last_updated: 2026-08-22
tags: [project/lawsonstate-edu]
---

# Lawson State Community College — Project Overview

## What it is

A monorepo rebuild of the public marketing/informational website for **Lawson
State Community College** (lawsonstate.edu), an Alabama community college.
The primary deliverable is the `apps/web` Next.js site: a full institutional
site with sections for admissions, academics/programs, financial aid,
student resources, campus life, an admin CMS, a search feature, an
AI-flavored advising chat widget, and a live events calendar.

The repo also contains a handful of unrelated/experimental sibling apps
(design-agency style landing pages and a barebones Expo mobile shell) that
appear to be scaffolding or prior explorations rather than shipped features
of the college site — see [[Architecture]] for details.

## Stack

- **Monorepo tooling**: npm workspaces + [Turborepo](https://turbo.build) (`turbo.json`, root `package.json` scripts: `build`, `dev`, `lint`, `test`, `type-check`)
- **Primary app** (`apps/web`): Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Data/backend**: Supabase (`@supabase/supabase-js`) — Postgres + Auth + RLS, used for CMS content, departments, announcements/events, and a scraped-pages content store
- **Admin auth**: custom cookie-based session (SHA-256 hash of an `ADMIN_SECRET` env var), not Supabase Auth — see [[Security]]
- **Other workspace apps**: `apps/axion`, `apps/halo`, `apps/portfolio` (Vite + React 18 + Tailwind landing-page templates, not college-branded), `apps/mobile` (Expo/React Native shell with static Lawson State-branded quick links)
- **Shared packages**: `packages/config`, `packages/db`, `packages/ui` (workspace packages, thin scaffolding)
- **Content pipeline**: root-level Python `scripts/` (`extract_news.py`, `extract_pdf.py`, `generate_news_data.py`) that scrape/extract content from the live site into `scripts/news_extracted.json`, feeding static fallback data in `apps/web/lib/news-data.ts` / `programs-data.ts`
- **Deployment**: Vercel (`.vercelignore` at root and in `apps/web`)

## Purpose

Deliver a modern, fast, accessible replacement for the college's public
website, with:
- Marketing/informational pages for every major audience (prospective
  students, current students, faculty/staff, community)
- A lightweight admin CMS backed by Supabase so non-technical staff can
  edit homepage content, departments/programs, announcements, and events
- Site search across nav pages and programs
- A guided "advising bot" widget that helps visitors book advising
  appointments and reach key services (not an LLM integration — see
  [[Features]])

## Scope notes / omissions

This documentation set intentionally **omits** `Database.md`, `Backend.md`,
and `Payments.md` as separate files:
- Database schema is small enough to be covered inline in [[Architecture]]
  (three migrations, all in `www.lawsonstate.edu/supabase/migrations/`).
- There is no separate backend service — all server logic lives in Next.js
  Server Actions and one API route inside `apps/web`, covered in
  [[Architecture]].
- There is no payments integration anywhere in the codebase.

## Key documents

- [[Architecture]] — repo layout, app structure, data flow, Supabase schema
- [[Features]] — what's implemented today
- [[Decisions]] — notable choices visible in code/commits
- [[Tasks]] — TODOs and gaps found in the code
- [[Changelog]] — history reconstructed from git log
- [[Security]] — auth model and known risks
