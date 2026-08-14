#!/usr/bin/env python3
"""
Generates notes.html from tools/notes.template.html, inlining the <style> block
from index.html verbatim so the two pages can never drift apart visually.

Run from the repo root:  python3 tools/build_notes_page.py
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(os.path.join(__file__, "..")))
INDEX = os.path.join(ROOT, "index.html")
TPL = os.path.join(ROOT, "tools", "notes.template.html")
OUT = os.path.join(ROOT, "notes.html")

with open(INDEX, encoding="utf-8") as fh:
    index_html = fh.read()

m = re.search(r"<style>(.*?)</style>", index_html, re.S)
if not m:
    sys.exit("no <style> block found in index.html")
base_css = m.group(1).strip("\n")

with open(TPL, encoding="utf-8") as fh:
    tpl = fh.read()

if "{{BASE_CSS}}" not in tpl:
    sys.exit("template is missing the {{BASE_CSS}} placeholder")

with open(OUT, "w", encoding="utf-8") as fh:
    fh.write(tpl.replace("{{BASE_CSS}}", base_css))

print(f"notes.html written — {os.path.getsize(OUT):,} bytes ({len(base_css):,} bytes of shared CSS)")
