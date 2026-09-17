# assets/

Home for the LOTA.design brand mark used by the featured project card in `index.html`.

## Current state

The site loads **`assets/lota-logo.svg`** — a vector recreation of the official
white drop + green core mark, drawn to match the Canva design. It sits on the dark
card as-is (white/green on transparent), so no light plate is needed.

If you export the exact artwork from Canva, you have two options:

1. **Export SVG** → overwrite `assets/lota-logo.svg` with the same filename. Done.
2. **Export PNG** → save as `assets/lota-logo.png` and change one line in
   `index.html`: search for `lota-logo` and set `src="assets/lota-logo.png"`.

Either way nothing else changes — sizing, fallback, and layout all stay the same.

## Original design source

https://canva.link/i3jlv7118u2vdo3 (interactive Canva page — must be exported,
cannot be hot-linked).

## Sizing

The card renders the logo at a fixed **40px** height (32px on mobile) with
`width: auto`, so the aspect ratio is always preserved. The SVG is resolution
independent; if you swap in a PNG, export at **240px tall or more** so it stays
sharp on high-DPI screens.

## Background / contrast

The mark is white + green and is designed for the dark card surface (`#0d0f15`).
If you ever switch to a dark-on-transparent export, flip `.lota-logo` to a light
plate — in `index.html`, find the `.lota-logo` rule and swap the two declarations
marked by the comment directly above it:

```css
background:#f2f4f7; border-color:transparent;
```

## Fallback

The `<img>` carries an `onerror` handler that hides the logo plate, so if the
file is ever missing the featured card falls back to a clean text-only layout —
no broken-image icon and no layout jump.
