# NSRL Infrastructure

Marketing site for NSRL Infrastructure, built with [Astro](https://astro.build) 7.
The layout is traced from `nsrl Infrastructure.pdf` (a single 1920 x 5823 Figma frame).

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## How the layout maps to the design

Everything is expressed in the design's own pixel values. `--k` in
`src/styles/global.css` is "one pixel on the 1920px canvas": it equals `1px` at
1920px wide and scales down fluidly, freezing at 60% (~1152px) so nothing gets
too small. So `calc(94 * var(--k))` is literally the 94px of padding measured in
the PDF.

Three container widths come straight off the canvas:

| Class    | Canvas span   | Width  | Used by                                    |
| -------- | ------------- | ------ | ------------------------------------------ |
| `.shell` | x60 – x1860   | 1800px | the rounded section cards and the footer   |
| `.wide`  | x100 – x1820  | 1720px | header, hero, Who We Are, the stat circles |
| `.inner` | x245 – x1675  | 1430px | Journey, Vision/Mission, Brands, footer    |

Nested inside a `.shell` card, `.inner` becomes `79.4444%` (1430/1800), which
resolves to the same x245 page margin.

Below 1100px the canvas stops scaling, the gutters normalise to a single value
and every two-column section stacks.

One stacked section reorders: in *Man Behind The Success* the portrait moves up
to sit directly under the heading, ahead of the copy. It is placed after the
heading in the source so the stacked order needs no CSS reordering, and the
wide layout puts it back in the right-hand column with explicit
`grid-row: 1 / 3`. The portrait is capped at 440px while stacked — at full
column width it filled a tablet viewport almost top to bottom.

### Typeface

The PDF is set in Helvetica/Arial — measured text widths match Arial to within
0.2%, so line breaks land exactly where the design puts them. The stack is
`Helvetica, Arial, "Liberation Sans", "Nimbus Sans", sans-serif`: system fonts
everywhere, no webfont request. Swapping in a licensed brand face later means
changing `--font` and re-checking the tracking on `.header__logo` and
`.footer__wordmark` (both carry `-0.041em` to match the design's wordmark width).

## Scroll animations

Sections fade up as they enter the viewport — the AOS effect, implemented with
an IntersectionObserver in `src/layouts/Base.astro` rather than the library
(~2KB of inline CSS/JS instead of ~30KB, and no extra requests).

Opt an element in with `data-reveal`, and stagger siblings with
`data-reveal-delay` in milliseconds:

```astro
<h2 data-reveal>Our Journey</h2>
<div data-reveal data-reveal-delay="120">…</div>

{items.map((item, i) => <li data-reveal data-reveal-delay={i * 110}>…</li>)}
```

`data-reveal="fade"` skips the upward shift for elements whose position
matters — the footer wordmark uses it, because a shift would push it into its
card's `overflow: hidden` and the observer would never see it.

Each element animates once and is then unobserved. Timing lives in
`global.css`:

| Token                | Value                                | Notes                                     |
| -------------------- | ------------------------------------ | ----------------------------------------- |
| `--reveal-shift`     | `calc(30 * var(--k))`                | How far it travels up                     |
| `--reveal-duration`  | `1.1s`                               | Raise for slower, lower for snappier      |
| `--reveal-ease`      | `cubic-bezier(.25,.46,.45,.94)`      | easeOutQuad — gradual the whole way       |

The easing matters as much as the duration. easeOutQuint (`--ease-out`, still
used by the drawer and hamburger where a quick snap is right) covers 90% of the
distance in the first quarter of its run, which reads as a jolt on a fade-up.
easeOutQuad spreads the travel out: measured in Chrome, the reveal now passes
50% at ~300ms and 90% at ~735ms, against ~82ms and ~248ms before.

Per-element `data-reveal-delay` values are unchanged, so the stagger keeps its
original rhythm — raise them together if you want more separation between
items in a row.

Three behaviours worth knowing:

- **No JavaScript** — the initial hidden state is applied by a `.reveal-ready`
  class that only JS adds, so content renders normally.
- **`prefers-reduced-motion`** — everything is revealed immediately, no transitions.
- **Safety net** — if the observer fails to boot, an inline timeout drops
  `.reveal-ready` after 2.5s so nothing is ever stranded invisible.

## Mobile navigation

Below 860px the links collapse into a hamburger that slides a drawer in from
the left, under the sticky header, over a dimmed backdrop. It closes on the
X, the backdrop, Escape, any link inside it, or a resize past the breakpoint.

While open it locks body scroll (compensating for the scrollbar so the page
doesn't shift), traps Tab inside itself, and returns focus to the toggle on
close. Closed, it carries `inert` so it is fully out of the tab order and the
accessibility tree.

## Content

All copy lives in `src/data/site.ts`. The PDF ships with Lorem Ipsum in every
body slot, so that is what is in there — replace the constants at the top of the
file with the real copy and every section picks it up.

## Deployment

Deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to
`main` (or manually from the Actions tab). The workflow builds with
`npm ci && npm run build` and publishes `dist/`.

Live at **https://bitsnpixs.github.io/nsrl-infrastructure/**

### One-time repository setup

In **Settings → Pages**, set **Source** to **GitHub Actions**. Without this the
workflow builds fine but nothing is published.

### The sub-path matters

A project site is served from `/<repo>/`, not the domain root, so
`astro.config.mjs` sets:

```js
site: "https://bitsnpixs.github.io",   // origin only
base: "/nsrl-infrastructure",          // repo sub-path
```

Astro prefixes generated asset URLs with `base` automatically. Hand-written
absolute paths are *not* rewritten — the favicon in `Base.astro` joins
`import.meta.env.BASE_URL` for this reason. If you add a link or asset later,
write it the same way rather than as `/whatever.png`, or it will 404 in
production while working locally.

`npm run preview` serves the built site at the real sub-path
(`localhost:4321/nsrl-infrastructure/`), which is the only reliable way to
catch a base-path mistake before it ships.

`public/.nojekyll` stops GitHub Pages from running Jekyll, which would
otherwise strip the `_astro/` asset directory.

### Moving to a custom domain

1. `astro.config.mjs`: `site: "https://your-domain.com"`, `base: "/"`
2. Add `public/CNAME` containing the bare domain, e.g. `nsrlinfrastructure.com`
3. Point the DNS at GitHub Pages and set the domain under Settings → Pages

## Images

Source art is in `src/assets/`, so Astro hashes, resizes and converts it to
WebP at build time. The originals are the untouched files from `images/`.
