# React refactor (branch `refactor/react`)

The static single-file site (`index.html` on `main`) has been ported to a
Vite + React 19 + TypeScript + Tailwind v3 project on this branch. Visual
design, content and behavior are preserved 1:1; the code is now componentized
and typed.

## Stack

- **Vite 7** — dev server + production build (`base: './'` so the build works
  both at the GitHub Pages subpath and the Vercel root).
- **React 19 + TypeScript (strict)** — 20 components, 4 behavior hooks,
  typed content modules.
- **Tailwind v3** — same theme extension as the CDN config, compiled at
  build time; all custom CSS lives in `src/index.css`.

## Layout

```
index.html            entry HTML (all meta/SEO/JSON-LD, as before)
src/main.tsx          React root
src/App.tsx           section composition + modal state
src/index.css         design tokens + all custom CSS (ported verbatim)
src/components/       Nav, Hero, About, Focus, Path, Work, Lota, Principles,
                      Skills, Certs, Contact, Footer, PhotoModal,
                      Schematic + 7 diagram components, primitives
src/hooks/            useReveal, useScrollChrome, useActiveStage, useNavSpy,
                      useBodyScrollLock
src/data/content.ts   certifications, skills, focus areas, path stages,
                      system-map layers (typed)
public/assets/        images/logos copied from assets/ (git-tracked path)
```

## Commands

```
npm install
npm run dev        # local dev server
npm run build      # tsc --noEmit && vite build  → dist/
npm run preview    # serve the production build
npm run typecheck  # strict typecheck only
```

## Behavior parity

- Reveal-on-scroll arms only below-fold elements, skips reduced motion, has
  the 4s safety net.
- Scroll chrome (progress bar, nav state, PATH rail) runs in a single rAF
  pass; the active PATH stage uses the same closest-to-center + settle-pass
  logic as the original.
- Certifications: track filter + search + distribution bar are React state
  (derived stats — hero counters, skill counts, track distribution — now come
  from the same typed data module).
- Photo modal keeps focus trap, Escape close, focus restore and body scroll
  lock; nav keeps mobile menu behavior.

`main` is untouched and still deploys the static site; this branch deploys
only if/when it is merged.
