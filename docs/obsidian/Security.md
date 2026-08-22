---
project: lawsonstate-edu
type: security
status: active
last_updated: 2026-08-22
tags: [project/lawsonstate-edu]
---

# Security

## Admin authentication

`app/admin/actions.ts` (`apps/web`):

- A single shared secret, `process.env.ADMIN_SECRET`, gates the admin CMS
  — there is no per-user admin account, so there is no way to distinguish
  which staff member made a change or to revoke one person's access
  without rotating the secret for everyone.
- The session cookie value is `sha256(ADMIN_SECRET + 'lscc-admin')` — a
  deterministic hash with a fixed, low-entropy "salt". Because the digest
  is a pure function of the secret, anyone who learns/guesses
  `ADMIN_SECRET` (or brute-forces a weak one offline against the known
  suffix) can compute a valid session cookie without ever logging in
  through the app.
- Cookie flags are reasonable: `httpOnly`, `sameSite: 'lax'`,
  `secure` in production, 7-day `maxAge`.
- Route protection is enforced twice: `proxy.ts` (Next.js middleware,
  matches `/admin/:path*`) checks for cookie presence, and
  `requireAdmin()` in Server Actions re-validates the cookie value before
  each mutation — reasonable defense in depth for the actions layer, but
  both checks trust the same static secret.
- Default fallback: `sessionToken()` falls back to the literal string
  `'changeme'` if `ADMIN_SECRET` is unset. If this app is ever deployed
  without `ADMIN_SECRET` configured, the admin panel would be protected
  by a publicly-known default password. **Verify `ADMIN_SECRET` is always
  set in every deployed environment.**

## Supabase access

- `lib/supabase.ts` uses `NEXT_PUBLIC_SUPABASE_URL` /
  `NEXT_PUBLIC_SUPABASE_ANON_KEY` (anon key, safe to expose client-side,
  subject to RLS).
- `lib/supabase-admin.ts` provides `createAdminClient()`, used only from
  Server Actions gated by `requireAdmin()` — presumably backed by a
  service-role key. This code was not fully inspected here; **confirm the
  service-role key is never exposed to the client bundle** and is read
  only from a server-only env var.
- RLS: confirmed enabled with an `anon_read_scraped_pages` policy on
  `scraped_pages` (migration `0003`). RLS policies for `profiles`,
  `departments`, `announcements`, and `events` were not present/derivable
  from the migration files reviewed — verify directly in the Supabase
  dashboard/CLI that these tables have appropriate RLS before treating
  the anon key as safe to use for all reads/writes.

## Other notes

- No payments integration exists, so no PCI-relevant surface.
- No third-party auth/OAuth providers found in `apps/web` dependencies.
- Recommend rotating `ADMIN_SECRET` periodically and, longer-term,
  migrating admin auth onto Supabase Auth with the existing `profiles`
  table's `role` column (`admin`) so access can be per-user and
  revocable.
