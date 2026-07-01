import sys
import json
from pathlib import Path

# Ensure PyPDF2 is available
try:
    from PyPDF2 import PdfReader
except ImportError:
    print('PyPDF2 is not installed. Please install it first.')
    sys.exit(1)

# Expect the PDF path as the first argument
if len(sys.argv) < 2:
    print('Usage: extract_pdf.py <pdf_path>')
    sys.exit(1)

pdf_path = Path(sys.argv[1])
if not pdf_path.is_file():
    print(f'File not found: {pdf_path}')
    sys.exit(1)

# Read the PDF
reader = PdfReader(str(pdf_path))
num_pages = len(reader.pages)
print(f'PDF "{pdf_path.name}" has {num_pages} pages.')

# Extract text from all pages
all_text = []
for i, page in enumerate(reader.pages, start=1):
    text = page.extract_text() or ""
    all_text.append(f'--- Page {i} ---\n{text}')

full_text = "\n".join(all_text)

# Write full text to a file in the same folder
output_path = pdf_path.with_name(pdf_path.stem + "_full_text.txt")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_text)

print(f'Full text written to {output_path}')

