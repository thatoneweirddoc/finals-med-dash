#!/usr/bin/env python3
"""
extract_docx.py — convert the user's ANU Word notes into markdown + images.

Part of the notes-library pipeline. Committed to the repo deliberately: the
original version of this script existed only in an ephemeral sandbox and was
lost, which is why the extraction had to be redone from scratch.

IMAGES (binding user instruction)
  "Compress and keep all inline" — images are resized to ~1400px on the longest
  edge and saved as JPEG q82, then referenced inline at the point they appear in
  the document, not collected into a gallery at the end.

OUTPUT
  <out>/<doc-slug>.md              markdown body
  <out>/images/<doc-slug>/imgNNN.jpg   compressed images

USAGE
  python3 tools/extract_docx.py --src "/path/*.docx" --out out/docx
"""

import argparse
import glob
import io
import os
import re
import sys

import mammoth
from PIL import Image

MAX_EDGE = 1400
JPEG_QUALITY = 82

SLUG_STRIP = re.compile(r"[^a-z0-9]+")
TAG_RE = re.compile(r"<[^>]+>")


def slugify(s: str) -> str:
    s = os.path.splitext(os.path.basename(s))[0].lower()
    s = s.replace("&", " and ")
    return SLUG_STRIP.sub("-", s).strip("-")


def compress(data: bytes) -> bytes | None:
    """Resize to MAX_EDGE and re-encode as JPEG. Returns None if unreadable."""
    try:
        im = Image.open(io.BytesIO(data))
        if im.mode in ("RGBA", "LA", "P"):
            bg = Image.new("RGB", im.size, (255, 255, 255))
            im = im.convert("RGBA")
            bg.paste(im, mask=im.split()[-1])
            im = bg
        else:
            im = im.convert("RGB")
        w, h = im.size
        if max(w, h) > MAX_EDGE:
            scale = MAX_EDGE / max(w, h)
            im = im.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=JPEG_QUALITY, optimize=True)
        return buf.getvalue()
    except Exception as e:  # a corrupt or exotic embedded object
        print(f"    ! image skipped: {e}", file=sys.stderr)
        return None


def html_to_md(html: str) -> str:
    """Mammoth gives clean semantic HTML; convert the subset it emits."""
    h = html

    # tables -> markdown (mammoth emits simple table/tr/td)
    def table_repl(m):
        rows = re.findall(r"<tr>(.*?)</tr>", m.group(1), re.S)
        out, first = [], True
        for r in rows:
            cells = [TAG_RE.sub("", c).replace("\n", " ").strip()
                     for c in re.findall(r"<t[dh][^>]*>(.*?)</t[dh]>", r, re.S)]
            if not cells:
                continue
            out.append("| " + " | ".join(cells) + " |")
            if first:
                out.append("| " + " | ".join("---" for _ in cells) + " |")
                first = False
        return "\n" + "\n".join(out) + "\n"

    h = re.sub(r"<table[^>]*>(.*?)</table>", table_repl, h, flags=re.S)

    for lvl in range(1, 7):
        h = re.sub(rf"<h{lvl}[^>]*>(.*?)</h{lvl}>",
                   lambda m, l=lvl: "\n" + "#" * l + " " + TAG_RE.sub("", m.group(1)).strip() + "\n",
                   h, flags=re.S)

    h = re.sub(r"<li[^>]*>(.*?)</li>", lambda m: "- " + TAG_RE.sub("", m.group(1)).strip() + "\n", h, flags=re.S)
    h = re.sub(r"</?(ul|ol)[^>]*>", "\n", h)
    h = re.sub(r"<p[^>]*>(.*?)</p>", lambda m: "\n" + m.group(1).strip() + "\n", h, flags=re.S)
    h = re.sub(r"<(strong|b)>(.*?)</\1>", r"**\2**", h, flags=re.S)
    h = re.sub(r"<(em|i)>(.*?)</\1>", r"*\2*", h, flags=re.S)
    h = re.sub(r"<br\s*/?>", "\n", h)
    # keep img tags already rewritten to markdown by the converter
    h = re.sub(r"<(?!img)[^>]+>", "", h)

    h = re.sub(r"\n{3,}", "\n\n", h)
    return h.strip()


def convert(path: str, out_root: str) -> tuple[str, int, int]:
    slug = slugify(path)
    img_dir = os.path.join(out_root, "images", slug)
    os.makedirs(img_dir, exist_ok=True)

    counter = {"n": 0}
    saved = {"n": 0}

    def handle_image(image):
        counter["n"] += 1
        with image.open() as fh:
            raw = fh.read()
        data = compress(raw)
        if data is None:
            return {"src": ""}
        name = f"img{counter['n']:03d}.jpg"
        with open(os.path.join(img_dir, name), "wb") as fh:
            fh.write(data)
        saved["n"] += 1
        # relative to the repo root, matching how notes reference their images
        return {"src": f"images/{slug}/{name}"}

    with open(path, "rb") as fh:
        result = mammoth.convert_to_html(
            fh, convert_image=mammoth.images.img_element(handle_image))

    html = result.value
    # turn <img src> into markdown before stripping tags
    html = re.sub(r'<img[^>]*src="([^"]*)"[^>]*/?>',
                  lambda m: f"\n![]({m.group(1)})\n" if m.group(1) else "", html)

    md = html_to_md(html)
    dest = os.path.join(out_root, f"{slug}.md")
    with open(dest, "w", encoding="utf-8") as fh:
        fh.write(md)

    words = len(re.findall(r"[A-Za-z0-9']+", md))
    return dest, words, saved["n"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="glob of .docx files")
    ap.add_argument("--out", default="out/docx")
    args = ap.parse_args()

    os.makedirs(args.out, exist_ok=True)
    files = sorted(glob.glob(args.src))
    if not files:
        print(f"no files matched {args.src}", file=sys.stderr)
        return 1

    total_w = total_i = 0
    for f in files:
        dest, words, imgs = convert(f, args.out)
        total_w += words
        total_i += imgs
        print(f"  + {os.path.basename(dest):55} {words:6,} words  {imgs:3} images")

    print(f"\n{len(files)} documents, {total_w:,} words, {total_i} images.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
