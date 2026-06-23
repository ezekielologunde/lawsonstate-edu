-- Enrich departments for homepage program grid
alter table public.departments
  add column if not exists tag text,
  add column if not exists href text,
  add column if not exists grid_slot text,
  add column if not exists display_order int not null default 0,
  add column if not exists is_featured_home boolean not null default false;

-- Enrich announcements for news cards
alter table public.announcements
  add column if not exists excerpt text,
  add column if not exists image_url text,
  add column if not exists category text default 'Campus News',
  add column if not exists href text,
  add column if not exists is_featured boolean not null default false,
  add column if not exists is_published boolean not null default true;

-- Upcoming events
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date date not null,
  href text not null default '/calendar',
  is_published boolean not null default true,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

alter table public.events enable row level security;

create policy "Public can read published events"
  on public.events for select to anon
  using (is_published = true);

-- Flexible page content (admin-editable key-value per page section)
create table if not exists public.page_content (
  id uuid primary key default gen_random_uuid(),
  page_slug text not null,
  section text not null,
  key text not null,
  value text,
  updated_at timestamptz not null default now(),
  constraint page_content_unique unique (page_slug, section, key)
);

alter table public.page_content enable row level security;

create policy "Public can read page content"
  on public.page_content for select to anon
  using (true);
