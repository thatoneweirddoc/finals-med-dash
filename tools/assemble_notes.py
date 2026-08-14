#!/usr/bin/env python3
"""
assemble_notes.py — build disease-based topic notes for the notes library.

This is the script the original pipeline lost (it lived only in an ephemeral
sandbox). It is committed to the repo deliberately so that never happens again.

INPUT
  A source master markdown file (or several) whose content is already organised
  as "# Section N — Title" blocks, which is how the user's own consolidated
  master notes are written. Each such section becomes one topic note.

MERGE STYLE (binding user instruction, do not change without asking)
  Where more than one source covers the same topic, each source's full text is
  stacked VERBATIM as its own block under an H3 attribution heading, separated
  by a `---` divider. Nothing is rewritten, reconciled, summarised, or dropped.

HEADING LEVELS
  The note title is H2. Everything from a source is demoted so it sits at H4 or
  below, so the rendered hierarchy is: note title (H2) > source attribution (H3)
  > source's own structure (H4+). The renderer caps at H6.

USAGE
  python3 tools/assemble_notes.py --config tools/notes_sources.json --out notes
  python3 tools/assemble_notes.py --config tools/notes_sources.json --out notes --system respiratory
"""

import argparse
import json
import os
import re
import sys
from datetime import date

SLUG_STRIP = re.compile(r"[^a-z0-9]+")
HEADING = re.compile(r"^(#{1,6})\s+(.*)$")
HTML_COMMENT = re.compile(r"<!--.*?-->", re.S)

# The user's master notes were written at different times and use four different
# conventions for topic headings. Rather than normalise the sources (which would
# mean editing the user's own notes), match all four.
TOPIC_PATTERNS = [
    # "# Section 4 — Obstructive Airway Disease" / "# Section 1–2: Physiology & Anatomy"
    re.compile(r"^#\s+Section\s+[\d–\-]+\s*[—–:\-]\s*(.+)$", re.M),
    # "# PART 3 — Anaemias & Red Cell Disorders (Section 4)"
    re.compile(r"^#\s+PART\s+\d+\s*[—–:\-]\s*(.+)$", re.M),
    # "# Neurology Notes — Sections 1–2: Neurophysiology and Neuroanatomy"
    re.compile(r"^#\s+.*?Notes?\s*[—–]\s*Sections?\s+[\d–\-]+\s*:\s*(.+)$", re.M),
    # "## 4. Cerebrovascular disease" / "## 2 Anatomy"
    re.compile(r"^##\s+\d+\.?\s+(.+)$", re.M),
]

# Headings that are navigation or meta, not clinical topics
SKIP_TITLES = re.compile(
    r"^(contents|table of contents|sources?|suggested sequencing|"
    r"rapid-recall discriminators?|key-differentials.*|if time is short.*|"
    r"how to use.*|study plan.*)$", re.I)


def slugify(s: str) -> str:
    s = s.lower().replace("&", " and ")
    s = SLUG_STRIP.sub("-", s).strip("-")
    return s or "untitled"


def clean_title(t: str) -> str:
    """Strip trailing markdown emphasis/parentheticals that make poor titles."""
    t = re.sub(r"\*+", "", t).strip()
    t = re.sub(r"\s*\(the single highest-yield[^)]*\)\s*$", "", t, flags=re.I)
    return t.strip()


def demote_headings(text: str, min_level: int = 4) -> str:
    """Shift all headings down so the shallowest sits at `min_level`, capped at 6."""
    levels = [len(m.group(1)) for m in (HEADING.match(l) for l in text.split("\n")) if m]
    if not levels:
        return text
    shift = max(0, min_level - min(levels))
    if shift == 0:
        return text

    out = []
    for line in text.split("\n"):
        m = HEADING.match(line)
        if m:
            lvl = min(6, len(m.group(1)) + shift)
            out.append("#" * lvl + " " + m.group(2))
        else:
            out.append(line)
    return "\n".join(out)


MIN_TOPIC_WORDS = 200


def word_count(text: str) -> int:
    return len(re.findall(r"[A-Za-z0-9']+", text))


def split_sections(md: str):
    """Split a master file into (title, body) pairs.

    The master files were written at different times and several mix conventions
    within one file — a "# Neurology Notes — Sections 1–2:" banner for parts, and
    "## 4. Cerebrovascular disease" for topics inside them. Picking a single
    winning pattern therefore drops whole regions of a file.

    So: collect boundaries from every pattern, sort by position, and slice
    between consecutive boundaries. Nesting is harmless — it just yields finer
    topics — and the parent's short lead-in falls below MIN_TOPIC_WORDS and is
    dropped. Study-plan contents lists are excluded the same way, since their
    entries are only a few lines each.
    """
    marks = []
    for pat in TOPIC_PATTERNS:
        for m in pat.finditer(md):
            marks.append((m.start(), m.end(), clean_title(m.group(1))))
    if not marks:
        return []

    marks.sort(key=lambda x: x[0])

    secs = []
    for i, (_, end, title) in enumerate(marks):
        stop = marks[i + 1][0] if i + 1 < len(marks) else len(md)
        body = md[end:stop]
        if SKIP_TITLES.match(title):
            continue
        if word_count(body) < MIN_TOPIC_WORDS:
            continue
        secs.append((title, body))
    return secs


def strip_boilerplate(body: str) -> str:
    """Remove per-part front matter that repeats across sections of a master file."""
    body = HTML_COMMENT.sub("", body)
    # drop repeated "# <System> — Finals Notes" / "### Part N of M" banners
    body = re.sub(r"^#\s+.*?—\s*Finals Notes\s*$", "", body, flags=re.M)
    body = re.sub(r"^###\s+Part\s+\d+\s+of\s+\d+.*$", "", body, flags=re.M)
    return body.strip()


def frontmatter(title, system, sources, tags, updated):
    def fmt_list(xs):
        return "[" + ", ".join(xs) + "]"
    return (
        "---\n"
        f'title: "{title}"\n'
        f'system: "{system}"\n'
        f"sources: {fmt_list(sources)}\n"
        f"tags: {fmt_list(tags)}\n"
        f'updated: "{updated}"\n'
        "---\n\n"
    )


def derive_tags(title, body, limit=4):
    """Cheap tag derivation: capitalised acronyms and key title words."""
    acronyms = re.findall(r"\b([A-Z]{2,6})\b", body)
    common = {"THE", "AND", "FOR", "NOT", "ARE", "WITH", "ALL", "BUT", "USE"}
    freq = {}
    for a in acronyms:
        if a not in common:
            freq[a] = freq.get(a, 0) + 1
    top = [a for a, _ in sorted(freq.items(), key=lambda kv: -kv[1])[:limit - 1]]
    first_word = [w for w in re.findall(r"[A-Za-z]{4,}", title)][:1]
    return (first_word + top)[:limit] or ["general"]


def keywords(text: str) -> set:
    """Content words for crude topic matching."""
    stop = {"the", "and", "for", "with", "of", "in", "to", "a", "an", "disease",
            "disorders", "disorder", "notes", "section", "clinical", "acute",
            "chronic", "management", "assessment", "high", "yield", "key",
            "quick", "reference", "differentials", "system", "systems"}
    ws = re.findall(r"[a-z]{3,}", text.lower())
    return {w for w in ws if w not in stop}


def split_by_headings(md: str, levels=(1, 2)):
    """Split a secondary source into (title, body) on its own H1/H2 headings."""
    pat = re.compile(r"^(#{%d,%d})\s+(.+)$" % (min(levels), max(levels)), re.M)
    marks = [(m.start(), m.end(), m.group(2).strip()) for m in pat.finditer(md)]
    if not marks:
        return []
    out = []
    for i, (_, end, title) in enumerate(marks):
        stop = marks[i + 1][0] if i + 1 < len(marks) else len(md)
        body = md[end:stop].strip()
        if word_count(body) >= 40:
            out.append((title, body))
    return out


def match_topic(chunk_title: str, snapshot: dict, threshold=1.5):
    """Best topic for a secondary-source chunk. None if no confident match.

    Title-only matching fails badly here: the Word notes are organised by disease
    ("asthma", "atrial fibrillation") while the master notes use category titles
    ("Obstructive Airway Disease", "Arrhythmias and Conduction Disorders"), so
    the two share no words. So also score how *densely* the chunk's key terms
    appear in each topic's body.

    Density matters rather than presence: "asthma" appears in the pharmacology
    note and the physiology note too, so a binary "does it occur" test ties every
    topic at the same score and the winner ends up being whichever happened to be
    first. Frequency per 1000 words picks the topic actually about it.
    """
    ck = keywords(chunk_title)
    if not ck:
        return None

    best, best_score = None, 0.0
    for t, body in snapshot.items():
        tk = keywords(t)
        bw = max(1, word_count(body))

        # Mentions of the chunk's terms per 1000 words of the topic. Deliberately
        # uncapped: capping ties every topic that mentions "asthma" at the ceiling
        # and the winner becomes whichever was inserted first, which is how every
        # obstructive-airway chunk previously ended up filed under physiology.
        per_k = sum(body.count(w) for w in ck) / bw * 1000

        # A title-word match is stronger evidence than any density, so it is
        # scaled to outrank it rather than being averaged in.
        title_score = 0.0
        if tk:
            overlap = len(ck & tk)
            if overlap:
                title_score = (overlap / min(len(ck), len(tk))) * 20.0

        score = max(title_score, per_k)
        if score > best_score:
            best, best_score = t, score

    return best if best_score >= threshold else None


def build(config, out_root, only_system=None):
    today = date.today().isoformat()
    built = []

    for sysdef in config["systems"]:
        slug = sysdef["slug"]
        if only_system and slug != only_system:
            continue

        system_name = sysdef["system"]
        topics = {}   # title -> list of (source_label, body)

        for src in sysdef["sources"]:
            path = src["path"]
            if not os.path.exists(path):
                print(f"  ! missing source, skipping: {path}", file=sys.stderr)
                continue
            label = src.get("label", os.path.basename(path))
            with open(path, encoding="utf-8") as fh:
                md = fh.read()

            secs = split_sections(md)
            if not secs:
                print(f"  ! no '# Section N —' headings found in {path}", file=sys.stderr)
                continue

            for title, body in secs:
                body = strip_boilerplate(body)
                if word_count(body) < 50:
                    continue
                topics.setdefault(title, []).append((label, body))

        sysdir = os.path.join(out_root, slug)
        os.makedirs(sysdir, exist_ok=True)

        # Secondary sources (e.g. the ANU Word notes) are a genuinely different
        # account of the same material, so per the merge style they are stacked
        # under the matching topic rather than woven in. Chunks that don't match
        # any topic go to a per-system "Additional Notes" topic instead of being
        # dropped — nothing from a source is discarded.
        unmatched = []
        secondary = sysdef.get("secondary", [])
        if secondary:
            # Snapshot the topic bodies from the PRIMARY sources only. Matching
            # against the live dict creates a feedback loop: the first chunk
            # appended to a topic enlarges it, which makes the next chunk match
            # the same topic more strongly, and everything lands in one note.
            snapshot = {t: " ".join(b for _, b in blocks).lower()
                        for t, blocks in topics.items()}

        for src in secondary:
            path = src["path"]
            if not os.path.exists(path):
                print(f"  ! missing secondary source, skipping: {path}", file=sys.stderr)
                continue
            label = src.get("label", os.path.basename(path))
            with open(path, encoding="utf-8") as fh:
                md = fh.read()
            for ctitle, cbody in split_by_headings(md):
                target = match_topic(ctitle, snapshot)
                if target:
                    topics[target].append((f"{label} — {ctitle}", cbody))
                else:
                    unmatched.append((f"{label} — {ctitle}", cbody))

        if unmatched:
            topics["Additional Notes"] = unmatched

        for title, blocks in topics.items():
            tslug = slugify(title)
            parts = [f"## {title}\n"]
            for label, body in blocks:
                parts.append(f"\n### {label} — {title}\n")
                parts.append(demote_headings(body, min_level=4))
                parts.append("\n\n---\n")
            # trailing divider is noise after the last block
            if parts and parts[-1] == "\n\n---\n":
                parts.pop()

            body_md = "\n".join(parts).rstrip() + "\n"
            sources = sorted({label for label, _ in blocks})
            tags = derive_tags(title, body_md)
            doc = frontmatter(title, system_name, sources, tags, today) + body_md

            dest = os.path.join(sysdir, f"{tslug}.md")
            with open(dest, "w", encoding="utf-8") as fh:
                fh.write(doc)
            built.append((system_name, tslug, word_count(body_md)))
            print(f"  + {slug}/{tslug}.md  ({word_count(body_md)} words, {len(blocks)} source block(s))")

    return built


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--config", required=True, help="JSON describing systems and their sources")
    ap.add_argument("--out", default="notes", help="output root (default: notes)")
    ap.add_argument("--system", help="build only this system slug")
    args = ap.parse_args()

    with open(args.config, encoding="utf-8") as fh:
        config = json.load(fh)

    built = build(config, args.out, args.system)
    total = sum(w for _, _, w in built)
    print(f"\nBuilt {len(built)} notes, {total:,} words.")
    print("Next: python3 tools/build_notes.py && python3 tools/build_notes_page.py")


if __name__ == "__main__":
    main()
