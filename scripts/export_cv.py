"""Export the agreed Markdown CV as a consistently styled Word document."""
from pathlib import Path
import re
from docx import Document
from docx.shared import Inches, Pt, RGBColor

root = Path(__file__).resolve().parents[1]
document = Document()
section = document.sections[0]
section.top_margin = section.bottom_margin = Inches(0.6)
section.left_margin = section.right_margin = Inches(0.7)
normal = document.styles['Normal']
normal.font.name = 'Calibri'
normal.font.size = Pt(10)
normal.font.color.rgb = RGBColor.from_string('172B3B')
normal.paragraph_format.space_after = Pt(5)
for name, size in [('Title', 24), ('Heading 1', 13), ('Heading 2', 11)]:
    style = document.styles[name]
    style.font.name = 'Calibri'
    style.font.size = Pt(size)
    style.font.color.rgb = RGBColor.from_string('172B3B')

def add_runs(paragraph, text):
    for index, part in enumerate(re.split(r'\*\*(.*?)\*\*', text)):
        paragraph.add_run(part).bold = index % 2 == 1

for raw in (root / 'docs/Solomon-Ona-CV.md').read_text(encoding='utf-8').splitlines():
    line = raw.strip()
    if not line:
        continue
    if line.startswith('# '):
        document.add_paragraph(line[2:], 'Title')
    elif line.startswith('## '):
        document.add_paragraph(line[3:], 'Heading 1')
    elif line.startswith('### '):
        document.add_paragraph(line[4:], 'Heading 2')
    elif line.startswith('- '):
        add_runs(document.add_paragraph(style='List Bullet'), line[2:])
    else:
        add_runs(document.add_paragraph(), line)

document.core_properties.title = 'Solomon Ona — Software Engineer & AI Integration'
document.core_properties.author = 'Solomon Ona'
document.save(root / 'public/assets/resume/Solomon-Ona-CV.docx')
# Keep old download URLs serving the current, correctly named document.
document.save(root / 'public/assets/resume/Acha-Solomon-Ona-CV.docx')
