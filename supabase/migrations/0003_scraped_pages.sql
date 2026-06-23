-- Raw storage for every page scraped from lawsonstate.edu
-- Populated by the scraping workflow; admin can query for content enrichment

CREATE TABLE IF NOT EXISTS scraped_pages (
  id           uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  url          text UNIQUE NOT NULL,
  page_title   text,
  content_markdown text,
  meta_description text,
  category     text DEFAULT 'other',
  scraped_at   timestamptz DEFAULT now()
);

ALTER TABLE scraped_pages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_read_scraped_pages" ON scraped_pages FOR SELECT USING (true);

-- Faculty directory (populated from scraped faculty pages)
CREATE TABLE IF NOT EXISTS faculty_directory (
  id         uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name       text NOT NULL,
  title      text,
  department text,
  email      text,
  phone      text,
  office     text,
  bio        text,
  href       text UNIQUE,
  scraped_at timestamptz DEFAULT now()
);

ALTER TABLE faculty_directory ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anon_read_faculty_directory" ON faculty_directory FOR SELECT USING (true);
