#!/usr/bin/env python3
"""
Builds notes/index.json (manifest) and notes/search-index.json (section-level
inverted index) from notes/<system-slug>/<note-slug>.md.

Run from the repo root:  python3 tools/build_notes.py

Each note file starts with a YAML-ish frontmatter block:

    ---
    title: Adrenal insufficiency
    system: Endocrine
    tags: [adrenal, cortisol, short synacthen]
    sources: [Finals_study_2.pdf p.44-47, Learning_Objectives_Lana_Nguyen.docx §3]
    updated: 2026-08-14
    ---

Headings inside the file define the hierarchy:
    ##  subtopic      (search + nav granularity)
    ### subheading    (search granularity, nested under the subtopic)
"""

import json
import os
import re
import sys
from datetime import date

ROOT = os.path.dirname(os.path.abspath(os.path.join(__file__, "..")))
NOTES = os.path.join(ROOT, "notes")

STOP = set("""a an and are as at be but by for if in into is it its of on or such that the
their then there these they this to was were will with from he she his her you your we our
not no nor do does did done has have had having been being can could should would may might
must about above after again against all also am any because before below between both each
few further here how i me more most other over own same so some than too under until up very
what when where which while who whom why""".split())

TOKEN_RE = re.compile(r"[a-z0-9]+")
SECTION_TEXT_CAP = 3000


def tokenize(text):
    """Must stay in lockstep with tokenize() in notes.html."""
    out = []
    for t in TOKEN_RE.findall(text.lower()):
        if len(t) < 2 or t in STOP:
            continue
        out.append(t)
    return out


def slugify(s):
    s = re.sub(r"[^\w\s-]", "", s.lower()).strip()
    return re.sub(r"[\s_]+", "-", s) or "section"


def parse_frontmatter(raw):
    meta, body = {}, raw
    if raw.startswith("---"):
        end = raw.find("\n---", 3)
        if end != -1:
            block = raw[3:end]
            body = raw[end + 4 :].lstrip("\n")
            for line in block.splitlines():
                if ":" not in line:
                    continue
                k, v = line.split(":", 1)
                k, v = k.strip(), v.strip()
                def unquote(x):
                    x = x.strip()
                    if len(x) >= 2 and x[0] == x[-1] and x[0] in ('"', "'"):
                        x = x[1:-1]
                    return x
                if v.startswith("[") and v.endswith("]"):
                    meta[k] = [unquote(x) for x in v[1:-1].split(",") if x.strip()]
                elif v.lower() in ("true", "false"):
                    meta[k] = v.lower() == "true"
                else:
                    meta[k] = unquote(v)
    return meta, body


def split_sections(body):
    """Split a note body into flat sections keyed by heading, tracking H2 parents."""
    lines = body.splitlines()
    sections, cur, parent = [], None, None
    seen = {}

    def push(sec):
        if sec and (sec["text"].strip() or sec["level"] > 0):
            sec["text"] = sec["text"].strip()
            sections.append(sec)

    def new_section(level, text):
        base = slugify(text) if text else "intro"
        seen[base] = seen.get(base, 0) + 1
        hid = base if seen[base] == 1 else f"{base}-{seen[base]}"
        return {"level": level, "heading": text, "id": hid, "parent": None, "text": ""}

    cur = new_section(0, "")
    for line in lines:
        m = re.match(r"^(#{2,4})\s+(.*)$", line)
        if m:
            push(cur)
            level = len(m.group(1))
            cur = new_section(level, m.group(2).strip())
            if level == 2:
                parent = cur["heading"]
            elif level > 2:
                cur["parent"] = parent
        else:
            cur["text"] += line + "\n"
    push(cur)
    return sections


def main():
    if not os.path.isdir(NOTES):
        sys.exit("no notes/ directory — nothing to build")

    systems, docs, postings = {}, [], {}

    for sysdir in sorted(os.listdir(NOTES)):
        sysabs = os.path.join(NOTES, sysdir)
        if not os.path.isdir(sysabs):
            continue
        for fname in sorted(os.listdir(sysabs)):
            if not fname.endswith(".md"):
                continue
            path = f"{sysdir}/{fname}"
            with open(os.path.join(sysabs, fname), encoding="utf-8") as fh:
                meta, body = parse_frontmatter(fh.read())

            system = meta.get("system") or sysdir.replace("-", " ").title()
            title = meta.get("title") or fname[:-3].replace("-", " ").title()
            tags = meta.get("tags") or []
            if isinstance(tags, str):
                tags = [tags]
            sections = split_sections(body)

            entry = {
                "slug": fname[:-3],
                "path": path,
                "title": title,
                "tags": tags,
                "sources": meta.get("sources") or [],
                "updated": meta.get("updated") or str(date.today()),
                "demo": bool(meta.get("demo")),
                "words": len(body.split()),
                "headings": [
                    {"id": s["id"], "text": s["heading"], "level": s["level"], "parent": s["parent"]}
                    for s in sections
                    if s["level"] >= 2
                ],
            }
            systems.setdefault(system, {"system": system, "slug": sysdir, "notes": []})
            systems[system]["notes"].append(entry)

            for s in sections:
                di = len(docs)
                docs.append(
                    {
                        "sys": system,
                        "path": path,
                        "title": title,
                        "h": s["heading"],
                        "hid": s["id"],
                        "lvl": s["level"],
                        "parent": s["parent"],
                        "text": s["text"][:SECTION_TEXT_CAP],
                    }
                )
                # weight the heading path and tags as if they appeared in the body,
                # so a search for "adrenal" ranks the section actually titled that
                weighted = (
                    s["text"]
                    + " "
                    + " ".join([s["heading"] or "", s["parent"] or "", title, system] * 3)
                    + " "
                    + " ".join(tags * 2)
                )
                freq = {}
                for tok in tokenize(weighted):
                    freq[tok] = freq.get(tok, 0) + 1
                for tok, n in freq.items():
                    postings.setdefault(tok, []).append([di, n])

    manifest = {
        "generated": str(date.today()),
        "systems": [systems[k] for k in sorted(systems)],
        "counts": {
            "systems": len(systems),
            "notes": sum(len(v["notes"]) for v in systems.values()),
            "sections": len(docs),
            "words": sum(n["words"] for v in systems.values() for n in v["notes"]),
        },
    }

    with open(os.path.join(NOTES, "index.json"), "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, ensure_ascii=False, separators=(",", ":"))
    search = {"docs": docs, "postings": postings}
    with open(os.path.join(NOTES, "search-index.json"), "w", encoding="utf-8") as fh:
        json.dump(search, fh, ensure_ascii=False, separators=(",", ":"))

    print(
        "built: {systems} systems, {notes} notes, {sections} sections, {words} words".format(
            **manifest["counts"]
        )
    )
    print("  notes/index.json         {:>8,} bytes".format(os.path.getsize(os.path.join(NOTES, "index.json"))))
    print("  notes/search-index.json  {:>8,} bytes".format(os.path.getsize(os.path.join(NOTES, "search-index.json"))))


if __name__ == "__main__":
    main()
