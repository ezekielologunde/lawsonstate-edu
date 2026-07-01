import re
import json
from pathlib import Path
from datetime import date

MONTHS = {
    'JANUARY': 1, 'FEBRUARY': 2, 'MARCH': 3, 'APRIL': 4, 'MAY': 5, 'JUNE': 6,
    'JULY': 7, 'AUGUST': 8, 'SEPTEMBER': 9, 'OCTOBER': 10, 'NOVEMBER': 11, 'DECEMBER': 12,
}

CATEGORY_KEYWORDS = [
    ('Athletics',      ['basketball', 'baseball', 'volleyball', 'cheer', 'cougar athlet', 'sports', 'accc', 'njcaa', 'coach ']),
    ('Awards & Honors', ['honor roll', 'award', 'honors', 'scholarship', 'recogni', 'chancellor', 'all-alabama academic team', 'ptk', 'phi theta kappa']),
    ('Workforce',      ['workforce', 'job fair', 'career fair', 'natural gas', 'cdl', 'truck driv', 'welding', 'hvac', 'apprentice', 'lineworker', 'nc3']),
    ('Academics',      ['stem', 'nursing', 'biotechnician', 'commencement', 'graduat', 'honor roll', 'dual enrollment', 'stem scholar', 'signing day']),
    ('Community',      ['partnership', 'birmingham promise', 'tmcf', 'community', 'grant', 'hbcu']),
    ('Student Life',   ['choir', 'preview day', 'campus cleanup', 'black history', 'mental health', 'spotlight', 'artist', 'registration']),
]

def guess_category(title, paragraphs):
    text = (title + ' ' + ' '.join(paragraphs)).lower()
    for cat, keywords in CATEGORY_KEYWORDS:
        for kw in keywords:
            if kw in text:
                return cat
    return 'Community'

def slugify(s):
    s = s.strip().lower()
    s = re.sub(r"['\".,]", '', s)
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return re.sub(r'-+', '-', s).strip('-')

def main():
    data = json.loads(Path(r"C:\Users\WT8\Lawson\scripts\news_extracted.json").read_text(encoding='utf-8'))

    seen_slugs = set()
    articles = []
    for a in data:
        year = int(a['year'])
        dl = (a['date_label'] or '').strip().upper()
        m = re.match(r'([A-Z]+)\s+(\d+)', dl)
        if m and m.group(1) in MONTHS:
            month = MONTHS[m.group(1)]
            day = int(m.group(2))
            try:
                iso_date = date(year, month, day).isoformat()
            except ValueError:
                iso_date = date(year, 1, 1).isoformat()
        else:
            iso_date = date(year, 1, 1).isoformat()

        base_slug = slugify(a['slug'])
        slug = base_slug
        i = 2
        while slug in seen_slugs:
            slug = f"{base_slug}-{i}"
            i += 1
        seen_slugs.add(slug)

        category = guess_category(a['title'], a['paragraphs'])

        articles.append({
            'slug': slug,
            'title': a['title'],
            'date': iso_date,
            'category': category,
            'excerpt': a['excerpt'] or (a['paragraphs'][0][:180] if a['paragraphs'] else ''),
            'image': a['image_url'],
            'imageAlt': a['image_alt'] or a['title'],
            'body': a['paragraphs'],
            'canonical': a['canonical'],
        })

    # Sort latest -> oldest
    articles.sort(key=lambda x: x['date'], reverse=True)

    def esc(s):
        return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

    lines = []
    lines.append("// Auto-generated from the scraped legacy news archive (2024-2026).")
    lines.append("// Source: www.lawsonstate.edu/news/{2024,2025,2026}/*.aspx.html")
    lines.append("// Regenerate via: python scripts/generate_news_data.py")
    lines.append("")
    lines.append("export type NewsCategory = 'Academics' | 'Athletics' | 'Student Life' | 'Community' | 'Awards & Honors' | 'Workforce'")
    lines.append("")
    lines.append("export interface NewsArticle {")
    lines.append("  slug: string")
    lines.append("  title: string")
    lines.append("  date: string // ISO date")
    lines.append("  category: NewsCategory")
    lines.append("  excerpt: string")
    lines.append("  image: string")
    lines.append("  imageAlt: string")
    lines.append("  body: string[]")
    lines.append("}")
    lines.append("")
    lines.append("export const NEWS_ARTICLES: NewsArticle[] = [")
    for a in articles:
        lines.append("  {")
        lines.append(f"    slug: `{esc(a['slug'])}`,")
        lines.append(f"    title: `{esc(a['title'])}`,")
        lines.append(f"    date: '{a['date']}',")
        lines.append(f"    category: '{a['category']}',")
        lines.append(f"    excerpt: `{esc(a['excerpt'])}`,")
        lines.append(f"    image: `{esc(a['image'])}`,")
        lines.append(f"    imageAlt: `{esc(a['imageAlt'])}`,")
        body_js = ',\n      '.join(f"`{esc(p)}`" for p in a['body'])
        lines.append(f"    body: [\n      {body_js}\n    ],")
        lines.append("  },")
    lines.append("]")

    out = "\n".join(lines) + "\n"
    out_path = Path(r"C:\Users\WT8\Lawson\www.lawsonstate.edu\apps\web\lib\news-data.ts")
    out_path.write_text(out, encoding='utf-8')
    print(f"Wrote {len(articles)} articles -> {out_path}")
    print("Category breakdown:")
    from collections import Counter
    print(Counter(a['category'] for a in articles))

if __name__ == '__main__':
    main()
