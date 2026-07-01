import re
import json
import sys
from pathlib import Path

NEWS_ROOT = Path(r"C:\Users\WT8\Lawson\www.lawsonstate.edu\news")
YEARS = ["2024", "2025", "2026"]

def clean(s: str) -> str:
    s = re.sub(r'<[^>]+>', '', s)
    s = s.replace('&amp;', '&').replace('&quot;', '"').replace('&#39;', "'").replace('&nbsp;', ' ')
    return re.sub(r'\s+', ' ', s).strip()

def extract_article(path: Path, year: str):
    try:
        html = path.read_text(encoding='utf-8', errors='ignore')
    except Exception as e:
        return None

    title_m = re.search(r'<h1>(.*?)</h1>', html, re.S)
    if not title_m:
        return None
    title = clean(title_m.group(1))

    date_m = re.search(r'class="date-label">([^<]+)<', html)
    date_label = clean(date_m.group(1)) if date_m else None

    desc_m = re.search(r'<meta name="Description" content="([^"]*)"', html, re.I)
    excerpt = clean(desc_m.group(1)) if desc_m else None

    canon_m = re.search(r'<link rel="canonical" href="([^"]+)"', html)
    canonical = canon_m.group(1) if canon_m else None

    # First image inside the news__content section
    content_m = re.search(r'<section class="news__content">(.*?)</section>', html, re.S)
    body_html = content_m.group(1) if content_m else ''
    img_m = re.search(r'<img\b[^>]*>', body_html)
    image_url = None
    image_alt = ''
    if img_m:
        tag = img_m.group(0)
        src_m = re.search(r'src="([^"]+)"', tag)
        alt_m = re.search(r'alt="([^"]*)"', tag)
        image_url = src_m.group(1) if src_m else None
        image_alt = clean(alt_m.group(1)) if alt_m else ''

    paragraphs = re.findall(r'<p>(.*?)</p>', body_html, re.S)
    paragraphs = [clean(p) for p in paragraphs]
    paragraphs = [p for p in paragraphs if p]

    slug = path.name.replace('.aspx.html', '').strip()

    return {
        'slug': slug,
        'year': year,
        'title': title,
        'date_label': date_label,
        'excerpt': excerpt,
        'canonical': canonical,
        'image_url': image_url,
        'image_alt': image_alt,
        'paragraphs': paragraphs,
    }

def main():
    all_articles = []
    for year in YEARS:
        year_dir = NEWS_ROOT / year
        if not year_dir.is_dir():
            continue
        for f in sorted(year_dir.glob('*.aspx.html')):
            art = extract_article(f, year)
            if art:
                all_articles.append(art)

    out_path = Path(r"C:\Users\WT8\Lawson\scripts\news_extracted.json")
    out_path.write_text(json.dumps(all_articles, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f"Extracted {len(all_articles)} articles -> {out_path}")

if __name__ == '__main__':
    main()
