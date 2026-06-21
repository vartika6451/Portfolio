# Vartika Sharma — Developer Portfolio

A premium, animation-rich developer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, GSAP-ready structure, Three.js, and Lenis smooth scrolling.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

> **Note on fonts:** this project uses `next/font/google` (Inter, Inter Tight, JetBrains Mono), which fetches font files at build time. Make sure you have a normal internet connection when running `npm run build` / `npm run dev` for the first time.

---

## Everything you'll want to customize

All real content lives in **one file**: [`src/data/profile.ts`](src/data/profile.ts). Edit that file and the entire site updates — no need to touch component code for content changes.

In that file you'll find:

| Export | What it controls |
|---|---|
| `profile` | Your name, role list (typewriter words), tagline, email, location, resume URL, social links |
| `stats` | The four animated counters in the About section |
| `aboutTimeline` | The "journey" timeline in About |
| `skills` / `skillCategories` | Every skill bar + the floating tech cloud + category filters |
| `projects` | All project cards (problem, achievements, tech, links, accent gradient) |
| `experience` | The vertical timeline (internships, hackathons, leadership, society roles) |
| `achievements` | The 6 achievement cards (CP stats, hackathons, certifications, academics) |
| `certifications` | The certification pill list under Achievements |

### Things outside that file you'll also want to replace

- **`public/resume.pdf`** — the "Download Resume" button links to `/resume.pdf`. Add your actual resume PDF at `public/resume.pdf`.
- **`public/og-image.png`** — social-share preview image (1200×630px), referenced in `src/app/layout.tsx` metadata.
- **`public/favicon.ico`** — currently the default Next.js icon.
- **Site URL** — `siteUrl` constant in `src/app/layout.tsx` and `src/app/sitemap.ts` is set to a placeholder (`https://aaravsharma.dev`). Update it to your real domain once deployed.
- **JSON-LD social links** — the `sameAs` array in `src/app/layout.tsx` (structured data for SEO) should match your real GitHub/LinkedIn/LeetCode URLs.

---

## Project structure

```
src/
  app/
    layout.tsx        — fonts, metadata, JSON-LD, global providers
    page.tsx           — assembles all sections in order
    globals.css        — design tokens (colors, fonts), utility classes
    sitemap.ts          — SEO sitemap
  components/
    Navbar.tsx          — sticky nav, active-section highlight, mobile menu
    Footer.tsx
    SmoothScrollProvider.tsx — Lenis setup
    sections/           — one file per page section (Hero, About, Skills, ...)
    ui/                  — reusable primitives (Button, Magnetic, TiltCard, ...)
    three/                — Three.js particle background
  data/
    profile.ts            — ALL editable content (see table above)
  hooks/
    useTypewriter, useCountUp, useReducedMotion, useIsTouchDevice, ...
```

## Design system

Colors, fonts, and spacing tokens are defined as CSS variables in `src/app/globals.css` under `@theme inline` (Tailwind v4's CSS-based config) — edit them there to re-theme the whole site:

- `--color-accent` / `--color-accent-2` — the signature indigo → cyan gradient used throughout
- `--color-bg`, `--color-surface`, `--color-surface-2` — dark theme surfaces
- `--color-ember` — reserved for rating/score badges only (keep it rare, by design)
- `--font-display`, `--font-body`, `--font-mono` — type roles

## Accessibility & performance notes

- Respects `prefers-reduced-motion` — heavy animation (cursor effects, particles, blobs) is automatically disabled.
- Custom cursor and 3D tilt effects are disabled on touch devices.
- Keyboard focus styles are visible throughout (`:focus-visible`).
- A "Skip to content" link is included for screen reader / keyboard users.
- The contact form is currently a UI-only placeholder (see "Wiring up the contact form" below) — it does not yet send real email.

## Wiring up the contact form

`src/components/sections/Contact.tsx` currently simulates a submit with a `setTimeout`. To make it functional, swap the `handleSubmit` function for a real integration — e.g. a serverless route calling [Resend](https://resend.com), [Formspree](https://formspree.io), or your own API.

## Deployment

This is a standard Next.js 15 app — it deploys directly to [Vercel](https://vercel.com/new) (recommended), or any platform that supports Next.js (Netlify, Railway, a Node server, etc.).

```bash
npm run build
npm run start
```

---

Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, Three.js (`@react-three/fiber`), and Lenis.
