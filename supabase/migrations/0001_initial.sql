-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Profiles table (extends auth.users)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null unique,
  full_name text,
  role text not null default 'student' check (role in ('student', 'faculty', 'staff', 'admin')),
  avatar_url text,
  student_id text unique,
  department text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Departments table
create table if not exists public.departments (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  code text not null unique,
  description text,
  head_of_department uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

-- Courses table
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  department_id uuid references public.departments(id) on delete cascade,
  name text not null,
  code text not null unique,
  description text,
  credits integer not null default 3,
  instructor_id uuid references public.profiles(id),
  semester text not null,
  year integer not null,
  max_enrollment integer not null default 30,
  created_at timestamptz not null default now()
);

-- Enrollments table
create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.profiles(id) on delete cascade,
  course_id uuid references public.courses(id) on delete cascade,
  status text not null default 'enrolled' check (status in ('enrolled', 'completed', 'dropped', 'waitlisted')),
  grade text,
  enrolled_at timestamptz not null default now(),
  unique (student_id, course_id)
);

-- Announcements table
create table if not exists public.announcements (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  author_id uuid references public.profiles(id),
  target_role text check (target_role in ('student', 'faculty', 'staff', 'admin', 'all')),
  published_at timestamptz,
  created_at timestamptz not null default now()
);

-- Row Level Security
alter table public.profiles enable row level security;
alter table public.departments enable row level security;
alter table public.courses enable row level security;
alter table public.enrollments enable row level security;
alter table public.announcements enable row level security;

-- Profiles policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Departments: public read
create policy "Public can view departments"
  on public.departments for select
  using (true);

-- Courses: public read
create policy "Public can view courses"
  on public.courses for select
  using (true);

-- Enrollments: students see own
create policy "Students can view own enrollments"
  on public.enrollments for select
  using (auth.uid() = student_id);

create policy "Students can enroll"
  on public.enrollments for insert
  with check (auth.uid() = student_id);

-- Announcements: public read for published
create policy "Public can view published announcements"
  on public.announcements for select
  using (published_at is not null and published_at <= now());

-- Auto-create profile trigger
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
