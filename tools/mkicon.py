"""Generate the home-screen icon set.

The mark is the dashboard's own signature: three reference-range bars, short to
long, in the same three band colours the app uses everywhere else (below range,
borderline, in range). No letterform and no stethoscope — at 40px on a home
screen a glyph reads as a shape, and three ascending coloured bars are
distinguishable from every other icon on the screen at a glance.

Two variants are produced:
  * a normal icon, drawn edge to edge with rounded corners for iOS/desktop
  * a maskable icon, whose art sits inside the central 80% so Android can crop
    it to a circle, squircle or rounded square without clipping the bars
"""
from PIL import Image, ImageDraw

INK      = (26, 24, 32)     # near-black ground, matches the dark theme paper
LOW      = (191, 67, 64)    # --low
BORD     = (168, 123, 43)   # --border-flag
INRANGE  = (47, 122, 98)    # --inrange
TRACK    = (58, 55, 70)     # unfilled remainder of each bar

BARS = [(0.42, LOW), (0.66, BORD), (0.92, INRANGE)]


def draw(size, maskable=False):
    # 4x supersample, then downscale — gives clean edges without anti-alias
    # settings that Pillow's rounded_rectangle does not expose.
    S = size * 4
    img = Image.new("RGBA", (S, S), INK + (255,))
    d = ImageDraw.Draw(img)

    # Maskable art must survive a circular crop, so it is inset to the safe zone.
    art = 0.62 if maskable else 0.72
    span = S * art
    left = (S - span) / 2
    gap = span * 0.20
    h = (span - 2 * gap) / 3
    r = h / 2
    top = (S - (3 * h + 2 * gap)) / 2

    for i, (frac, colour) in enumerate(BARS):
        y = top + i * (h + gap)
        # The full-width track shows what is unearned; the fill is the score.
        d.rounded_rectangle([left, y, left + span, y + h], radius=r, fill=TRACK)
        d.rounded_rectangle([left, y, left + span * frac, y + h],
                            radius=r, fill=colour + (255,))

    img = img.resize((size, size), Image.LANCZOS)

    if not maskable:
        # iOS applies its own mask, but desktop and the manifest do not, so the
        # plain icon carries its own corners.
        mask = Image.new("L", (size * 4, size * 4), 0)
        ImageDraw.Draw(mask).rounded_rectangle(
            [0, 0, size * 4 - 1, size * 4 - 1], radius=int(size * 4 * 0.22), fill=255)
        img.putalpha(mask.resize((size, size), Image.LANCZOS))

    return img


if __name__ == "__main__":
    import os
    os.makedirs("icons", exist_ok=True)
    for n in (180, 192, 512):
        draw(n).save(f"icons/icon-{n}.png")
    for n in (192, 512):
        draw(n, maskable=True).save(f"icons/maskable-{n}.png")
    # Favicon: the same mark, small enough that only the bar lengths survive.
    draw(32).save("icons/favicon-32.png")
    print("written:", sorted(os.listdir("icons")))
