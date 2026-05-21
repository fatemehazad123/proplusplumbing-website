# CLAUDE.md — ProPlus Plumbing Inc. Website

## ⚠️ Project Boundary

**This is a STANDALONE CLIENT PROJECT, not related to the fatemeh.ca portfolio.**

- This project lives at `~/Documents/proplusplumbing-website/`
- Fatemeh's personal portfolio lives in a different folder
- These two projects share NO code, NO components, NO content, NO deployment, NO repository
- Do NOT reference, import from, or copy patterns out of the portfolio project unless explicitly asked
- Do NOT push changes to the portfolio's git remote or Vercel project
- All work in this session pertains exclusively to ProPlus Plumbing

If the user references "my portfolio" or "fatemeh.ca," ask whether they want that context applied here. Assume separation by default.

---

## Project Overview

**Client:** ProPlus Plumbing Inc.
**Old site:** https://www.proplusplumbing.com (WordPress, dated)
**Built by:** Fatemeh Azadbakht / OOBE (credit line: "Site by OOBE.ca" linking to https://oobe.ca)
**Type:** Brand-new website rebuild, ground up
**Positioning:** Premium B2B + luxury residential plumbing specialist in Toronto
**Audience:** Custom home builders, architectural firms, luxury homeowners, subdivision developers, property managers

ProPlus is NOT a 24/7 emergency plumber. They are a specialist for new custom-home plumbing, radiant floor heating, and snow melting systems. The site must read as architectural and editorial — not as a generic trade contractor.

---

## Reference Files in This Folder

- **`proplus-homepage-v1.html`** — Approved visual prototype. Open and study before writing any component code. All motion, typography, layout, and hover behavior should match it. NOTE: the prototype uses Fraunces as a placeholder display font — the real build uses **General Sans** (see Typography section below).
- **`Proplusplumbing_logo.svg`** — Primary logo wordmark
- **`Pro_plus_plumbing_bars.svg`** — Brand bars (signature graphic device, red + blue)
- **`/public/fonts/`** — General Sans font files (the primary display typeface for the brand). Licensed free for commercial use under the Fontshare license (OFL-equivalent).
- **`/public/images/`** — Real ProPlus project photography, optimized JPGs at 2400px max edge, q82. WebP conversion is handled by `next/image` at request time (no pre-generated WebP files needed).
- **`/public/`** — Logo SVG variants (white, white-no-tag) and the bars SVG, copied from `Pro Plus Plumbing logo/` source folder.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with CSS variables for brand tokens
- **Animation:** motion/react (formerly Framer Motion) — NOT vanilla JS
- **Images:** `next/image` with `fill` + `objectFit: cover` for full-bleed contexts (hero, project cards, service cards). Do NOT use CSS `background-image: url(...)` — use `next/image` so WebP/AVIF auto-conversion works.
- **Deployment:** Vercel (new project, separate from any other)
- **CMS (later phase):** Sanity or Contentlayer for projects/case studies
- **Forms (later phase):** Resend or FormSubmit for consultation requests

---

## Brand Color System

### Core palette (lock these as CSS variables AND Tailwind theme tokens)

```css
/* PRIMARY BRAND ACCENTS — from the bars SVG */
--red:     #EC1C24;   /* Brand red — primary accent, only color used for accent text */
--blue:    #243D97;   /* Brand blue — used in bars and logo only, NEVER as text color */

/* DARK FOUNDATION */
--navy:    #0F1B45;   /* Brand navy — THE dark background colour for all dark sections (Hero, Marquee, Process, Audiences row hover, CTA, Footer, Nav scrolled state). Reinforces brand identity. */
--ink:     #0A0A0A;   /* Near-black — reserved for body text on light backgrounds only (Intro copy, Services descriptions, Audiences body, Projects titles). NOT used as a background colour. */

/* LIGHT FOUNDATION */
--paper:   #FAFAF7;   /* Primary background — warm white, main page surface */
--cream:   #F4F2EC;   /* Secondary background — slightly warmer for alternating sections */
--white:   #FFFFFF;   /* Pure white — for cards on cream backgrounds */

/* NEUTRALS */
--grey-1:  #6B6B68;   /* Secondary text, captions */
--grey-2:  #2E2E2C;   /* Body text on light backgrounds */
--line:    #E5E3DD;   /* Borders, dividers */

/* TEXT ON DARK */
--text-on-dark:        #FFFFFF;             /* Primary text on ink */
--text-on-dark-muted:  rgba(255,255,255,0.6); /* Secondary text on ink */
--text-on-dark-faint:  rgba(255,255,255,0.4); /* Tertiary text, section labels on dark */
```

### Tailwind config snippet (extend theme)

```ts
// tailwind.config.ts — colors section
colors: {
  red:    { brand: '#EC1C24' },
  blue:   { brand: '#243D97' },
  navy:   '#0F1B45',
  ink:    '#0A0A0A',
  paper:  '#FAFAF7',
  cream:  '#F4F2EC',
  grey:   { 1: '#6B6B68', 2: '#2E2E2C' },
  line:   '#E5E3DD',
}
```

### Color usage rules — non-negotiable

1. **White / paper / cream are dominant** — they cover 80%+ of surface area
2. **Red is the only accent color used for text.** Italic accent words inside headings, italic accents in audience rows, italic accents in service titles — all RED, never blue.
3. **Blue (#243D97) is NEVER used as a text color.** Reasons:
   - Too close to the default browser link blue (#0000EE / unstyled `<a>` color), which makes the site read as cheap, unstyled, or amateur
   - Reduces the premium, editorial feel the brand is built around
   - Risks user confusion (everything blue looks clickable)
   - **Allowed uses of blue:** the top half of the brand bars (sacred blue-top / red-bottom pairing), inside the logo SVG file itself, occasionally as a decorative solid-background block (rare and explicitly approved). **Disallowed:** italic accent words, hover states, underlines, body text, display text, link colors, button text.
4. **Red and blue are ACCENTS ONLY** as colored elements — never as full-section backgrounds. They appear as:
   - Italic word highlights inside display headings (RED only)
   - Bar elements (the signature red+blue stripe pairing — both colors together)
   - Single CTA button fill (red only)
   - Bullet dots, underlines, line accents — 24px line before mono labels (red only)
   - Service card hover state arrow fills (red only)
5. **Navy is for dramatic sections** — Hero, Marquee, Process, CTA, Footer, and the Nav's scrolled state (`rgba(15, 27, 69, 0.7)` with `backdrop-filter: blur(12px)`). Navy is part of the brand palette already (the lower half of the bars), so using it as the dark foundation reinforces brand identity, where generic `#0A0A0A` ink would feel anonymous. `--ink` (#0A0A0A) is reserved for body text on light backgrounds and must never be used as a section background.
6. **Cream alternates with paper** for visual rhythm between light sections
7. **Never tint the brand colors** — no opacity variants of red as backgrounds (except subtle radial glows in the hero). The brand colors stay at their exact hex values.
8. **The two brand colors never sit on each other** — red on blue or blue on red is forbidden. They always appear separated by white, ink, or significant space.

### Section background mapping

| Section | Background | Text |
|---|---|---|
| Nav (top of page, scrollY < 50) | transparent (mix-blend-mode: difference) | white (inverts) |
| Nav (scrolled, scrollY ≥ 50) | `rgba(15, 27, 69, 0.7)` + `backdrop-filter: blur(12px)` + 1px border-bottom `rgba(255,255,255,0.08)` | solid white |
| Hero | `--navy` with red+blue radial glows + `hero-1.jpg` full-bleed parallax bg at 40% opacity behind a navy gradient + dark grid overlay | white |
| ServicePicker | three full-bleed photo columns with `rgba(15, 27, 69, 0.5)` navy overlay (drops to `0.25` on column hover) | white |
| Marquee | `--navy` | white |
| Intro | `--paper` | `--ink` |
| Services | `--cream` | `--ink` |
| Process (horizontal scroll) | `--navy` | white |
| Audiences | `--paper` | `--ink` (row hover background = `--navy`, text inverts to white) |
| Projects | `--cream` | `--ink` |
| CTA | `--navy` | white |
| Footer | `--navy` | white |

---

## Brand Assets

### Logo

Source file: `Proplusplumbing_logo.svg` (plus white variants in `/public/`: `logo-white.svg`, `logo-white-notag.svg`)

- The wordmark uses two blue tones (`#1D3E9F` and `#1A3C9E`) and a red (`#FE0408`) — slightly different from the bars palette but in the same family. The bars palette (`#EC1C24` / `#243D97`) is the system of record for UI — use the logo file as-is for the logo itself, but do not extract its hex values for use elsewhere.
- **Nav** uses `logo-white-notag.svg` alone (no mini-bars beside it — the bars-beside-logo pattern was removed; the SVG logo IS the wordmark)
- **Footer** uses `logo-white-notag.svg` (white wordmark, no tagline) — the descriptive paragraph below already provides context
- Always white or ink — never red or blue
- Maintain clear space equal to the bar height on all sides
- If multiple logo variants are provided (e.g. horizontal, stacked, mark only, on-light, on-dark), use the appropriate one for each context

### The Bars (signature graphic device)

Source file: `Pro_plus_plumbing_bars.svg` (also at `/public/bars.svg`)

Two vertical bars — **blue (`#243D97`) top, red (`#EC1C24`) bottom**. This is the most important brand element after the logo. Use them as:

1. **Fixed right-edge stripe** on every page — 24px wide on desktop, 12px on mobile, full viewport height, blue top 50% / red bottom 50% (`components/chrome/SideBars.tsx`)
2. **Inline mini-bars beside the logo wordmark** in the Nav — two 4px-wide × 22px-tall stripes
3. **Section accent dividers** between major content blocks (optional, sparingly)
4. **Underline accents** beneath display headings (optional)
5. **Behind statistical numerals** as background blocks (optional)

The bars are sacred — they always appear as a red+blue pair, never alone, never recolored, never with anything else between them.

---

## Typography

### Primary brand font — General Sans (SELF-HOSTED, FREE COMMERCIAL LICENSE)

**General Sans** by the Indian Type Foundry, distributed via Fontshare. This is the **primary display typeface** for the ProPlus Plumbing website. It replaces the Fraunces placeholder used in the HTML prototype.

License: **Free for commercial use** under the Fontshare license (OFL-equivalent). No royalties, no domain restrictions, no per-page-view limits. Safe to commit to the repo (private or public).

Font files are placed in `/public/fonts/`. **Variable fonts preferred** when present (`GeneralSans-Variable.woff2` and `GeneralSans-VariableItalic.woff2`) — they cover all weights 200–700 in two files at roughly half the network payload of shipping all static weights. Static weights are kept in `/public/fonts/` as backup but not referenced by default. Self-hosted via `next/font/local` — never load from a CDN, never load from the Fontshare CDN at runtime.

### `next/font/local` setup

Create `app/fonts.ts`:

```ts
import localFont from 'next/font/local';
import { Inter, JetBrains_Mono } from 'next/font/google';

export const generalSans = localFont({
  src: [
    { path: '../public/fonts/GeneralSans-Variable.woff2',       weight: '200 700', style: 'normal' },
    { path: '../public/fonts/GeneralSans-VariableItalic.woff2', weight: '200 700', style: 'italic' },
  ],
  variable: '--font-general-sans',
  display: 'swap',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});
```

### Tailwind config — wire the variables

```ts
// tailwind.config.ts — fontFamily section
fontFamily: {
  display: ['var(--font-general-sans)', 'system-ui', 'sans-serif'],
  body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
  mono:    ['var(--font-jetbrains-mono)', 'monospace'],
}
```

### Apply in root layout

```tsx
// app/layout.tsx
import { generalSans, inter, jetbrainsMono } from './fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${generalSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body bg-paper text-ink">{children}</body>
    </html>
  );
}
```

### Font role assignments

- **Display (headlines, hero, large numerals, section titles):** **General Sans** — class `font-display`
  - Hero, section H2s, service card titles, audience row titles, project titles, CTA H2, footer brand wordmark
  - Use **Light 300** for large display text (hero, section H2s, CTA H2) — this is the "airy editorial" weight that anchors the design
  - Use **Regular 400 italic** for accent words inside headings (e.g. "Toronto's *builders*" — *builders* in **RED**, never blue)
  - Use **Medium 500** for service card titles and audience row titles (slightly more present at smaller display sizes)
  - Use **Extralight 200** for the giant outline italic numerals in the Process section step cards
- **Body (paragraphs, descriptions, all running copy):** **Inter** — class `font-body`
  - Body sizes 14–18px
  - Weights 300–700
- **Mono (section labels, eyebrow numerals):** **JetBrains Mono** — class `font-mono`
  - Used only at 11px uppercase letter-spaced 0.2em
  - For `01 / Section`, `02 / Section` style labels with a 24px red line preceding

### Typographic moves to preserve from the prototype

The prototype uses Fraunces as a stand-in. When rebuilding in React, swap Fraunces → **General Sans** everywhere, but preserve these patterns:

- Three-line stacked hero with outlined italic finale ("trust." in stroke-only via `-webkit-text-stroke`)
- Italic + RED accent words inside otherwise neutral display headings ("Toronto's *builders*" — *builders* in red italic, never blue)
- Mono section labels prefaced with `01 /`, `02 /`, etc., with a 24px red line to the left
- Large display numbers (stats) in General Sans Light italic
- "outline" treatment for stroke-only italic text in hero and CTA sections
- Generous letter-spacing tightening (`tracking-tighter` or `-0.03em` to `-0.04em`) on display sizes 48px+

**Note on visual difference from prototype:** Fraunces is a serif and General Sans is a sans-serif. The headlines will read sharper, more architectural, and less "editorial-magazine" than the prototype suggests. This is intentional — General Sans matches the architectural-industrial mood of a custom-home plumbing specialist better than a serif does. The italic accent words still provide warmth and editorial texture without leaning on serif terminals.

**Note on accent color in prototype:** The prototype HTML occasionally uses blue (`#243D97`) for italic accent words (e.g. "precision plumbing" in the Intro, "builders" in audience rows). These are PLACEHOLDERS that violate the current blue-no-text rule. Replace every blue italic accent with red. If a section needs visual differentiation from another red accent nearby, use a different treatment instead (weight change, underline, no accent) — but never blue text.

### License & legal

- General Sans is licensed under the Fontshare license (OFL-equivalent) — free for commercial use, no royalties, no domain restrictions
- The font files CAN be committed to the repo, public or private — no need to add to `.gitignore`
- Include a `LICENSE-FONTS.md` or equivalent acknowledging Indian Type Foundry / Fontshare attribution if desired (not required by the license but good practice)

---

## Site Credit

The footer of every page includes a credit line linking to the website builder.

- **Credit text:** "Site by OOBE.ca"
- **Link target:** `https://oobe.ca`
- **Open in:** new tab (`target="_blank"`)
- **Rel attributes:** `noopener noreferrer`
- **Style:** Subtle — same muted text color as the rest of the footer bottom row (`--text-on-dark-faint` or equivalent at ~40% white opacity). Thin underline on hover only.
- **Placement:** Bottom row of the footer, alongside copyright and license info. Not prominent, not a button — a discreet credit line.

This credit line is non-negotiable and must appear on every page that has a footer.

---

## Required Components (Homepage — Phase 1)

Break the prototype into these named components:

1. `<CustomCursor />` — dot + ring. **Brand colours only — red and white. No teal, no other accent colours anywhere in the cursor.**
   - Default: dot 6px brand red, ring 36px with 1.5px white border + `mix-blend-mode: difference` so the ring auto-inverts based on surface
   - Hover (`data-cursor="hover"`): dot stays red, ring grows to 80px with red border + `rgba(236, 28, 36, 0.1)` fill. **Mix-blend-mode is DROPPED in hover and cta states** — applying difference to red would produce teal over light surfaces, which violates the brand-colours-only rule.
   - CTA (`data-cursor="cta"`): dot hidden, ring 100px solid brand red. No mix-blend.
2. `<SideBars />` — fixed right-edge red+blue brand bars
3. `<Nav />` — fixed top with two behavioural states:
   - **Top of page (scrollY < 50):** transparent background + `mix-blend-mode: difference` + white text. Underline-on-hover for inline links.
   - **Scrolled (scrollY ≥ 50):** `bg-navy/70` + `backdrop-blur-xl` + 1px bottom border `rgba(255,255,255,0.08)` + solid white text. Mix-blend is removed. Transition 300ms ease.
   - Left side is **only** the logo (`logo-white-notag.svg` via Next/Image, 69×28, aspect preserved). No decorative bars beside it — the logo SVG IS the wordmark. Do NOT add red/blue mini-bars to the Nav; that pattern was removed.
   - Includes a phone link `(647) 518-7787` with phone SVG icon just before the "Request Consultation" pill. On mobile (< md) the phone number text hides and only the icon shows.
   - Scroll state driven by `useScroll` + `useMotionValueEvent` from motion/react — not vanilla scroll listeners.
4. `<Hero />` — **dark** section on `--navy`, full-bleed `hero-1.jpg` parallax background at 40% opacity layered under a navy gradient + dark grid overlay + red/blue radial glows. Three-line staggered reveal headline in white (lines 1–2 solid, "builders" italic in `--red`, "trust." outlined italic with white `-webkit-text-stroke`). Below: tagline (white/70) + 3-stat row in white Light Italic with white/50 labels. Cursor uses `mix-blend-difference` here for auto-inversion against the dark surface. Currently a placeholder design until Phase 2 cinematic scroll-driven video reveal lands.
5. `<Marquee />` — infinite horizontal service list, navy background
6. `<Intro />` — five-line sequential reveal, light section. Italic accent words in RED.
7. `<Services />` — three cards (Custom Home Plumbing / Radiant Floor Heating / Snow Melting) with hover lift, illustration scale, arrow rotate. Uses real photos from `/public/images/service-*.jpg`. The primary service entry point on the homepage — links to each `/services/<slug>` detail page.
8. `<Process />` — horizontal-scroll-on-vertical-scroll using motion's `useScroll` + `useTransform`, four phase cards
9. `<Audiences />` — list of five client types with full-row hover that slides in dark background, inverts text. Italic accents in RED.
10. `<TestimonialsBand />` — three placeholder testimonial cards on `--paper`. Data lives in `lib/testimonials.ts` (shared with `/for-builders`). Label and headline passed as props; homepage uses "Trusted by builders" / "What our *partners* say.".
11. `<Projects />` — asymmetric 12-column grid, image scale on hover, four featured projects. Uses real photos from `/public/images/project-*.jpg`.
12. `<CTA />` — dark, giant outline italic background text, magnetic button that follows cursor.
13. `<Footer />` — dark, four-column + newsletter signup column ("Stay in touch"), with "Site by OOBE.ca" credit linking to https://oobe.ca.

### Available but unused components

`<ServicePicker />` lives at `components/sections/ServicePicker.tsx` and was originally placed between `<Hero />` and `<Marquee />` on the homepage. It was removed because the `<Services />` section below it covers the same three services with more depth, making the picker redundant. The component file is intentionally kept — it's a strong full-bleed three-column hover-expand pattern (each column animates its flex-grow 1↔2 and its navy gradient overlay opacity on hover). Candidates for reuse:
- `/services` overview hero replacement when more visual impact is wanted
- A dedicated `/services/explore` discovery page in Phase 3
- A landing/microsite for a single campaign that needs strong service navigation

If you decide it's permanently dead code, delete the file and remove this note.

---

## Sitemap (full site — beyond homepage, Phase 2)

```
/                          Homepage
/about                     About the practice
/about/team                Team & credentials
/services                  Services overview
/services/custom-home      Custom home plumbing
/services/floor-heating    Radiant floor heating
/services/snow-melting     Snow melting systems
/services/renovations      Major renovations
/services/subdivisions     Subdivision developments
/projects                  All projects (filterable)
/projects/[slug]           Project detail / case study
/for-builders              B2B landing page
/process                   How we work
/resources                 Hub
/resources/guide           Plumbing guide for custom homes
/resources/faq             FAQ
/contact                   Contact + consultation request
/service-areas             Toronto + GTA neighbourhoods (local SEO)
/privacy
/terms
```

---

## Working Conventions

- **TypeScript strict mode on** — explicit types, no `any`
- **Tailwind config:** extend with the brand color tokens and font families above
- **Motion patterns:** use `motion/react`'s `useScroll`, `useTransform`, `useInView`, and `motion.div` — do not use vanilla `scroll` event listeners except where absolutely necessary (e.g. the custom cursor RAF loop)
- **Animations must be smooth (60fps):** use transform/opacity only, no layout-thrashing properties
- **Responsive:** mobile-first; the cursor and complex scroll effects should gracefully degrade on touch devices (hide custom cursor on touch, swap horizontal scroll for vertical stack on mobile)
- **Accessibility:** keyboard navigation works, focus states visible, `prefers-reduced-motion` respected
- **No emoji in UI** — use SVG icons inline
- **Canadian spelling** in all copy (centre, neighbourhood, optimise, colour) — Fatemeh's standing rule
- **No em dashes in body copy** — Fatemeh's standing rule
- **Industry terms — leave as written.** "Radiant Floor Heating" is the correct industry term used by the trade and by ProPlus's existing marketing. Do NOT "correct" it to "underfloor heating", "in-floor heating", or any other variant. Same applies to "Snow Melting Systems" (not "snow-melt" or "heated driveway") and "Custom Home Plumbing" (not "residential plumbing").
- **Images:** always use `next/image` (with `fill` + `objectFit: cover` for full-bleed). Never use CSS `background-image: url(...)` for content imagery. Source files are JPGs in `/public/images/`; `next/image` handles WebP/AVIF conversion at request time.
- **Photo library — slot-specific naming convention** in `/public/images/`:

  Every photo has its own slot. **No photo is reused across distinct page contexts.** The only legitimate cross-page repetition is article hero photos appearing in three navigation surfaces simultaneously: the article's own detail page, the /journal index card, and "related reading" cards on sibling articles — that's the same logical image acting as the article's identity, not a duplicate.

  Naming convention by slot:

  | Slot | Files | Used by |
  |---|---|---|
  | Homepage hero | `hero-home.jpg` | components/sections/Hero.tsx |
  | Homepage Services cards | `services-card-{plumbing,floor-heating,snow-melting}.jpg` | components/sections/Services.tsx |
  | Homepage Projects (lead 4) | `projects-{1,2,3,4}.jpg` | components/sections/Projects.tsx |
  | /services hero + overview cards | `services-hero.jpg`, `services-overview-{plumbing,heating,snow}.jpg` | app/services/page.tsx |
  | /services/custom-home | `custom-home-hero.jpg`, `custom-home-feature.jpg`, `custom-home-grid-{1,2,3}.jpg` | app/services/custom-home/page.tsx |
  | /services/floor-heating | `floor-heating-hero.jpg`, `floor-heating-feature.jpg`, `floor-heating-grid-{1,2,3}.jpg` | app/services/floor-heating/page.tsx |
  | /services/snow-melting | `snow-melting-hero.jpg`, `snow-melting-feature.jpg`, `snow-melting-grid-{1,2,3}.jpg` | app/services/snow-melting/page.tsx |
  | /projects page | `projects-page-hero.jpg`, `projects-grid-{1..8}.jpg` | app/projects/page.tsx + lib/projects.ts |
  | Page heros (interior) | `about-hero.jpg`, `for-builders-hero.jpg`, `contact-hero.jpg`, `journal-hero.jpg`, `faq-hero.jpg` | respective app/{route}/page.tsx |
  | Article heros (6) | `article-{permits,radiant-cost,heated-driveway,plumber-vs-service,radiant-vs-air,rough-in}.jpg` | lib/articles.ts |

  **Total: 47 unique photos, ~48 MB.** Every slot has a dedicated file.

  **Pipeline for new photos:**
  1. Drop the original into `Photos/` somewhere (Web Photo / Plumbing / Floor Heating / Snow melting)
  2. Run sips: `sips -Z 2400 -s format jpeg -s formatOptions 82 "Photos/.../source.jpg" --out "public/images/<slot-name>.jpg"`
  3. Update the consuming component / page / data file to reference the new slot name
  4. Add `alt` text that describes the image **and** includes Toronto context

  **`ServicePicker.tsx` caveat:** dead code, not imported anywhere. Its 3 image refs source-level duplicate the homepage Services photos. The file carries a banner comment noting this — if re-enabled, swap to dedicated unique photos before mounting.

---

## UX Requirements (Phase 1)

These behaviours are non-negotiable and apply across the homepage. Every interactive screen built later in Phase 2 should keep them.

- **Scroll progress bar.** 2px tall, full viewport width, fixed at `top: 0`, `z-index: 200` (above nav). Fills left-to-right with brand red as the user scrolls the page. Driven by `useScroll().scrollYProgress` + `motion.div` with `scaleX` and `transformOrigin: left`. Wrap in a `useSpring` for slight smoothing.
- **Phone number in Nav.** Always present, immediately before the "Request Consultation" pill. Format `(647) 518-7787`, mono font, white, with a small phone SVG icon. `tel:+16475187787` link. On viewports below `md`, hide the number text — keep only the icon.
- **Back-to-top button.** Floating circular button, 48px diameter, fixed at `bottom: 32px right: 56px` (clears the 24px side bars). Background `--navy`, white up-arrow icon. Appears only after the user has scrolled past `100vh` — animate via `AnimatePresence` with `opacity` + `scale` + small `y` offset. On click, smooth-scrolls to top. `data-cursor="hover"`.
- **Focus states.** Every interactive element must show a 2px brand-red outline with 4px offset when keyboard-focused. Applied globally via `:focus-visible { outline: 2px solid var(--red); outline-offset: 4px; }` in `globals.css`. Test by tabbing from page load — every link, button, and form control must show the outline visibly.
- **Anchor scroll-margin.** Every `<section id="...">` element gets `scroll-margin-top: 80px` so hash-link navigation lands the section title below the sticky nav, not under it. Applied globally via `section[id] { scroll-margin-top: 80px; }`.
- **Smooth in-page scrolling.** `html { scroll-behavior: smooth; }` is set globally. Nav anchor links use plain `<a href="#...">` (not Next/Link) so native smooth-scroll fires reliably.
- **Section IDs (phase 1).** Stable IDs for in-page nav and future deep-linking: `#intro`, `#services`, `#process`, `#audiences`, `#projects`, `#cta`. The Hero, Marquee, and Footer don't need IDs.

---

## Phase 1 Scope (done)

- [x] Scaffold Next.js 14 + TS + Tailwind + motion/react
- [x] Set up brand tokens (colors, fonts) in Tailwind config and globals.css
- [x] Self-host General Sans (variable woff2) from `/public/fonts/` via `next/font/local`
- [x] Load Inter and JetBrains Mono via `next/font/google`
- [x] Build CustomCursor, SideBars, Nav
- [x] Build all homepage sections: Hero, ServicePicker, Marquee, Intro, Services, Process, Audiences, Projects, CTA, Footer
- [x] Wire in real photography from `/public/images/` for hero, services, and projects
- [x] Apply blue-no-text rule consistently
- [x] Add "Site by OOBE.ca" footer credit
- [x] `npm run build` + `npm run lint` clean

## Phase 2 Scope (done)

- [x] /about — practice, stats, mission, values
- [x] /services — overview with alternating large service cards
- [x] /services/custom-home — detail page with intro, scope, process, featured work
- [x] /services/floor-heating — detail page (same template)
- [x] /services/snow-melting — detail page + "Built for discerning properties" cards
- [x] /projects — filterable grid (All / Custom Homes / Renovations / Floor Heating / Snow Melting)
- [x] /for-builders — value props, partnership models, populated **placeholder** testimonials section (3 cards), Google reviews link (placeholder URL), `builders` CTA variant
- [x] /contact — form + contact info + office address + embedded grayscale Google Map, posts to `/api/contact` via Resend
- [x] Footer newsletter signup — `components/shared/NewsletterForm.tsx`, posts to `/api/newsletter` via Resend (manual relay until Phase 3 list provider lands)
- [x] /journal — index page (3-card grid) + dynamic /journal/[slug] detail pages with statically-generated paths
- [x] Photo library expanded — see Photo conventions below
- [x] Nav links route to real pages (`/projects`, `/services`, `/for-builders`, `/about`, `/contact`)

## Journal (Phase 2)

- **Routes:** `/journal` (index) + `/journal/[slug]` (detail). Both statically prerendered at build via `generateStaticParams`.
- **Article storage:** `lib/articles.ts` — single typed array. No CMS in Phase 2. Adding an article = appending an `Article` object to the array, no other code changes needed. **6 articles currently** (3 original from the Phase 2 brief + 3 added in the FAQ/articles batch — permits, radiant cost, heated driveway cost). All flagged `// PLACEHOLDER ARTICLE`.
- **Block model:** body is a discriminated union of `ArticleBlock` types (`paragraph` / `heading` (level 2|3) / `pullquote` / `list` / `image`). `components/shared/ArticleBody.tsx` renders each type with its own styling — so new article body shapes don't require new components, just new entries in the array.
- **Card UI:** `components/shared/ArticleCard.tsx` — used on both the index (`compact={false}`) and the related-reading section on detail pages (`compact`).
- **SEO:** each detail page sets per-article `<title>` and `<meta description>` via `generateMetadata`. Article JSON-LD via `articleSchema()` in `lib/seo.ts`.
- **All current articles are PLACEHOLDERS** — supplied with the brief, not real ProPlus content. Each is marked with a `// PLACEHOLDER ARTICLE` comment in `lib/articles.ts`. Replace title / excerpt / body / readingTime when ProPlus authors real content; keep slugs stable if rewriting in place, change-and-redirect if substantively different.
- **Subscribe band** (also at the bottom of the article detail page and on /faq): `components/shared/SubscribeBand.tsx` wraps `NewsletterForm variant="light"` so signups from the journal and FAQ funnel through the same `/api/newsletter` endpoint as the footer signups.
- **Phase 3 plan: Sanity CMS** so ProPlus can self-publish. Schema mirrors the current `Article` type 1:1 — `slug`, `title`, `excerpt`, `category`, `publishedAt`, `heroImage` (Sanity image asset), `body` (Portable Text mapped to the existing `ArticleBlock` union), `readingTime` (computed), optional `author` (reference). The `ARTICLES` constant becomes an async `getArticles()` data fetch; everything else stays the same. Migration day is a single-file swap.

## FAQ (Phase 2)

- **Route:** `/faq` — statically prerendered.
- **Source of truth:** `lib/faq.ts` exports `faqs: FAQCategory[]` and a `getFAQById()` helper. Currently 4 categories / 22 questions. **Edits propagate everywhere** the FAQ data is referenced (the page, the FAQPage JSON-LD, the service-detail cross-link sections).
- **UI:** `components/shared/FAQAccordion.tsx` (`'use client'`) — one expandable row per question with smooth `AnimatePresence` height animation, plus icon that rotates 45° on open, `aria-expanded` / `aria-controls` for keyboard + screen-reader accessibility. One section per category with a section label + display headline.
- **FAQPage JSON-LD:** `faqPageSchema(faqs)` in `lib/seo.ts` maps every question to a `Question` / `Answer` entry. Rendered on `/faq` via `<JsonLd>`. This is the high-SEO-value piece — Google may show questions and answers directly in search results.
- **Service cross-links:** `components/shared/ServiceDetail.tsx` accepts an optional `faqIds?: string[]`. Each of the three service detail pages passes 2–3 most-relevant question IDs (see source). The cross-link section renders Q&A expanded (not accordion), with a "Read all FAQs →" link to `/faq`. The wiring uses `getFAQById()` so the same data flows; if a referenced ID stops existing, the cross-link silently drops it.
- **Nav:** "FAQ" sits between Journal and the consultation pill. Final order: Work / Services / For Builders / About / Journal / FAQ / Request Consultation.
- **Sitemap:** `/faq` included with `changeFrequency: 'monthly'`, `priority: 0.7`.
- **Phase 3:** can move to the same Sanity-backed source as articles, or keep in source — FAQ content changes far less often than articles and is small enough that the source-controlled approach is fine indefinitely.

## SEO architecture (Phase 2)

The site is built to be discoverable on day one — every route emits unique, descriptive metadata, structured data, and a static sitemap. The pieces live in predictable places so a future contributor knows where to make changes.

### Where things live

| Concern | File |
|---|---|
| Site-wide constants (URL, address, phone, hours, geo) | `lib/site.ts` (`SITE` object + `absoluteUrl` helper) |
| Site-wide default `<Metadata>` + `metadataBase` + title template + GA/Search Console env wiring | `app/layout.tsx` |
| Per-page `<Metadata>` (title, description, canonical, OG, Twitter) | each `app/<route>/page.tsx` exports `metadata` (static) or `generateMetadata` (dynamic — only the journal slug uses this) |
| JSON-LD schema generators (`localBusinessSchema`, `serviceSchema`, `articleSchema`, `breadcrumbSchema`, `contactPageSchema`, `projectsCollectionSchema`) | `lib/seo.ts` |
| Rendering a schema | `<JsonLd data={schemaObject} />` from `components/shared/JsonLd.tsx` — emits one `<script type="application/ld+json">` |
| Sitemap | `app/sitemap.ts` → served at `/sitemap.xml`, iterates `ARTICLES` so new posts auto-include |
| Robots | `app/robots.ts` → served at `/robots.txt`, points at the sitemap and disallows `/api/` |
| OG images | `app/opengraph-image.tsx` (default) + `app/<route>/opengraph-image.tsx` for `/about`, `/services`, `/for-builders`, `/contact`, `/journal`. All share the layout in `lib/og-image.tsx` (`renderOgImage(config)`); each file just sets `runtime`, `size`, `contentType`, `alt`, and the headline copy. Edge runtime. |
| Google Analytics 4 + Google Site Verification | `app/layout.tsx` — conditional on `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` env vars (see `.env.local.example`). Both off by default; setting either env var activates the corresponding render. GA loads `gtag.js` with `anonymize_ip: true`. |

### Title pattern

- Site-wide template (in `app/layout.tsx`): `%s | ProPlus Plumbing`.
- Per-page rule: if the user-provided title already contains "ProPlus" (about, projects, for-builders, contact), set `title: { absolute: '...' }` to bypass the template. Otherwise set `title: 'string'` and let the template append ` | ProPlus Plumbing`.

### JSON-LD per route

| Route | Schema |
|---|---|
| Everywhere | `Plumber` (LocalBusiness) — emitted once from `app/layout.tsx` |
| `/` | `BreadcrumbList` |
| `/services/custom-home` | `Service` |
| `/services/floor-heating` | `Service` |
| `/services/snow-melting` | `Service` |
| `/contact` | `ContactPage` |
| `/projects` | `CollectionPage` (placeholder — `itemListElement` to be populated when project records become structured data) |
| `/journal/[slug]` | `Article` |

Validate any one of them at <https://validator.schema.org/> by pasting the rendered `<script type="application/ld+json">` payload.

### Image alt convention

- **Decorative images** (full-bleed background photos in heroes, article hero on cards next to the title) → `alt=""`. Screen readers skip them. PageHero, Hero, and ArticleCard already do this.
- **Content images** (project cards, service photos, journal article body) → descriptive alt that says **what's in the image AND where**. Example: `"Hydronic radiant floor heating manifold for a Summerhill Toronto residence"`. Never use generic `"image"`, `"plumbing"`, or `"photo"`.
- **Logo** → `alt="ProPlus Plumbing"` (Nav) or `alt="ProPlus Plumbing Inc."` (Footer). Both convey what the image represents in context.
- Alt text inside `lib/projects.ts` ships with the project data so it's authored alongside the photo, not buried in JSX.

### Heading hierarchy

- **Exactly one `<h1>` per page.** On the homepage, `<Hero>` provides it. On every interior page, `<PageHero>` provides it. Never add a second `<h1>` to a page.
- **`<h2>` for major sections.** Section-level headlines (Services, Intro, Audiences, Projects, CTA, etc.) and the article body's level-2 headings.
- **`<h3>` for cards/subsections inside a section.** Service card titles, audience row titles, value-prop titles, footer column headings (`<h4>` is also acceptable for footer labels — they're descriptive, not structural).
- Body text uses `<p>`, not headings.

### Semantic landmarks

- `<nav aria-label="Main navigation">` on the top Nav.
- `<main>` wraps every page's primary content (one per route).
- `<footer>` is its own landmark, outside `<main>`.
- `<article>` for self-contained items (testimonial cards, journal article body, project cards).
- `<section>` for major page divisions. Section labels live inside the section.
- Icon-only buttons get `aria-label` (BackToTop has `aria-label="Back to top"`).

### Post-launch SEO checklist

These can't be done from code — they need ProPlus's accounts.

- [ ] Verify the domain in **Google Search Console** at <https://search.google.com/search-console>. Paste the verification token into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel (Production env).
- [ ] Submit `https://proplusplumbing.com/sitemap.xml` in Google Search Console → Sitemaps.
- [ ] Submit the same sitemap to **Bing Webmaster Tools** at <https://www.bing.com/webmasters>.
- [ ] Create a **Google Analytics 4** property at <https://analytics.google.com>. Paste the `G-XXXXXXXXXX` measurement ID into `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel (Production env).
- [ ] Claim the **Google Business Profile** for the office address (181 Maxwell St). Once claimed, paste the GBP URL into `SITE.social` in `lib/site.ts` and into the `GOOGLE_REVIEWS_URL` constant in `lib/testimonials.ts`. The `sameAs` array in the LocalBusiness schema picks it up automatically.
- [ ] Add ProPlus's real social profile URLs (LinkedIn, Instagram, Houzz if used) to `SITE.social` in `lib/site.ts`. They flow into the LocalBusiness `sameAs` array.
- [ ] Refine the LocalBusiness `geo` coordinates with the GBP-verified lat/lng (`SITE.geo` in `lib/site.ts`).
- [ ] Once `proplusplumbing.com` is domain-verified in Resend, flip the `FROM` address in `app/api/contact/route.ts` and `app/api/newsletter/route.ts` to `noreply@proplusplumbing.com` (TODOs already marked).
- [ ] Replace placeholder testimonials in `lib/testimonials.ts` and placeholder articles in `lib/articles.ts` with real content.
- [ ] Replace `GOOGLE_REVIEWS_URL` in `lib/testimonials.ts` with the real Google Business Profile reviews URL.

## Office address

- **181 Maxwell St, North York, ON M3H 5B5, Canada**
- Appears in: Footer (Contact column), `/contact` page (Location block), and is the destination of the embedded Google Map on `/contact`.
- Linked everywhere to the keyless Google Maps URL: `https://www.google.com/maps/search/?api=1&query=181+Maxwell+St+North+York+ON+M3H+5B5` (target=_blank, rel=noopener noreferrer).
- `/contact` left column also includes an `<iframe src="https://www.google.com/maps?q=181+Maxwell+St+North+York+ON+M3H+5B5&output=embed">` 200px tall, with `filter: grayscale(40%) contrast(95%)` so the map reads editorial rather than touristy. No API key required for this embed pattern.

## Email infrastructure (Phase 2)

Two Resend-backed endpoints. Same key, same shared sandbox `from` address, same domain-verification migration plan.

### `/api/contact` — consultation form

- **Backend:** `app/api/contact/route.ts` — Next.js POST handler using the Resend SDK (`npm install resend`, package `resend@^6`).
- **Frontend:** `components/shared/ContactForm.tsx` (`'use client'`) — `useState` only, no form library.
- **Recipient:** `info@proplusplumbing.com`. `Reply-To` is set to the submitter so replies go straight to them.
- **Validation:** required fields (name, email, phone, projectType, location), email format, allow-list for select fields, max lengths (textarea 1000 chars).
- **Honeypot:** hidden `company_website` field — if a bot fills it, route returns `200 ok` without sending.
- **Rate limit:** 5 submissions / IP / hour, in-memory `Map` in `lib/rate-limit.ts`.
- **Inline validation:** on `blur`, with red border + error message. Submit button disables and shows a spinner.
- **Success state:** form fades out, success message fades in via `AnimatePresence`.
- **HTML email body:** branded header (navy + mono section label), each field in a `<table>` row with mono labels and ink values, message in a separate full-width block.

### `/api/newsletter` — Footer signup

- **Backend:** `app/api/newsletter/route.ts` — Next.js POST handler, also Resend.
- **Frontend:** `components/shared/NewsletterForm.tsx` (`'use client'`) — single email field + honeypot, mounted in the Footer's "Stay in touch" column.
- **Recipient:** `info@proplusplumbing.com`. Subject is literally `New newsletter signup` so the team can filter / triage.
- **Validation:** email format + max length 254.
- **Honeypot:** hidden `company_name` field.
- **Rate limit:** 3 signups / IP / hour (`lib/rate-limit.ts` shared with the contact endpoint).
- **Phase 1 implementation is a manual relay** — every signup emails `info@` so the team can add subscribers to their mailing list by hand. **TODO Phase 3:** replace with a managed list provider (Resend Audiences, Mailchimp, or ConvertKit) so subscribers go directly into a real list with double opt-in and unsubscribe links. The `app/api/newsletter/route.ts` file has this exact TODO at the top so the next person who touches it sees it.

### Shared

- **Resend `from` address:** both endpoints currently use `ProPlus Plumbing Website <onboarding@resend.dev>` (Resend's shared sandbox sender). **TODO before launch:** verify the `proplusplumbing.com` domain in Resend, then change `FROM` in **both** route handlers to `ProPlus Plumbing <noreply@proplusplumbing.com>` and remove the `// TODO` comments. Until verified, Resend will only deliver to the email address that owns the Resend account.
- **Environment:** `RESEND_API_KEY` required. `.env.local.example` documents it. `.env*.local` is in `.gitignore`.

## Phase 3 (later, not now)

- **Sanity CMS** for journal (and projects) so ProPlus can self-publish. Schema design ready (see Journal section above). Article body uses Portable Text mapped 1:1 to the existing `ArticleBlock` discriminated union, so the rendering layer doesn't change.
- CMS integration for projects
- /process detail page
- /about/team — bios and credentials
- /service-areas — local SEO landing for GTA neighbourhoods
- /resources, /resources/guide, /resources/faq — content hub
- /privacy, /terms — legal
- **Real builder testimonials on /for-builders** — the three cards currently shipped are clearly-marked **placeholders** (Michael Chen / Sarah Whitman / David Reyes are fictional). Search `// TODO PLACEHOLDER` in `app/for-builders/page.tsx` and swap the `TESTIMONIALS` array with verified quotes when ProPlus provides them.
- **Real journal articles** — the three articles in `lib/articles.ts` are illustrative placeholders supplied with the Phase 2 brief. Each is flagged with `// PLACEHOLDER ARTICLE`. Replace bodies (or all three) when ProPlus authors actual content. The block model is generic enough that the rendering layer doesn't need to change.
- **Real Google Reviews URL** — the "Read more reviews on Google" link in the testimonials section currently points at `https://g.page/r/PLACEHOLDER`. Replace `GOOGLE_REVIEWS_URL` in `app/for-builders/page.tsx` with ProPlus's actual Google Business Profile reviews URL.
- **Managed mailing-list provider for /api/newsletter** — replace the manual-relay implementation in `app/api/newsletter/route.ts` with Resend Audiences (cheapest, already integrated), Mailchimp, or ConvertKit. Add double opt-in and unsubscribe links. See the TODO comment at the top of that file.
- Domain-verified Resend sender (`noreply@proplusplumbing.com`) — applies to both `/api/contact` and `/api/newsletter`.
- Cinematic scroll-driven hero (top-down camera reveal of luxury home + ProPlus van parking in driveway)
- Schema markup (LocalBusiness, Service), sitemap.xml, robots.txt, OG images
- Analytics

---

## What NOT to do

- Don't import anything from the portfolio project
- Don't deploy to the portfolio's Vercel project
- Don't reuse Playfair Display, Fraunces, sage, or terra colors — those belong to other projects. General Sans is the display font for THIS site.
- Don't load General Sans from a CDN — it must be self-hosted from `/public/fonts/`
- Don't generic-ify the copy — keep the editorial, builder-focused voice from the prototype
- Don't use generic stock icons or emoji
- Don't skip motion/react in favor of CSS-only animations for the complex scroll sections
- Don't add interior pages until the homepage is locked and approved
- Don't tint, recolor, or modify the brand bars
- Don't use red or blue as a section background
- **Don't use blue (#243D97) as a text color anywhere — italic accents, hover states, links, headings, body. Blue is for bars and inside the logo only.**
- Don't use CSS `background-image` for content photography — always `next/image`
- Don't remove or alter the "Site by OOBE.ca" footer credit

---

## Communication

- Show file structure before scaffolding components
- Pause for review after the Hero component is built — don't ship the whole homepage at once (UNLESS the user has explicitly said "build everything in one pass" — then proceed without pausing)
- Flag any deviation from the prototype design rather than improvising
- When unsure about a brand decision, default to what's in the prototype HTML — but apply the blue-no-text rule and use General Sans for display
- Before writing the `fonts.ts` file, list the actual contents of `/public/fonts/` and prefer variable fonts when present
