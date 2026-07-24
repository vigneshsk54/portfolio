# Vignesh Kumar S — Portfolio

A cinematic, motion-rich developer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. Content is pulled entirely from Vignesh Kumar S's resume, internships, published research, and certifications — no placeholder text anywhere.

## Tech stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS, custom design tokens (dark navy/graphite base, electric blue + violet accents)
- **Motion:** Framer Motion — scroll reveals, magnetic buttons, tilt-on-hover project cards, a boot-sequence loader, scroll progress bar, custom cursor
- **Icons:** lucide-react
- **Fonts:** Space Grotesk (display), Inter (body), IBM Plex Mono (data/labels) via `next/font/google`

Three.js / GSAP / Lenis were intentionally left out of this build. They add real value on a design-agency deliverable, but they're also the most likely source of a broken `npm run build` in a project you haven't test-run yet — and I can't run `npm install` in this environment to verify a build (no internet access here). Everything included has been kept to APIs I'm confident about, so `npm install && npm run dev` should work cleanly. If you want the 3D hero (floating tech sphere / wireframe globe) added afterward, say the word and I'll wire it in as a follow-up so it can be tested in isolation.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint     # ESLint
```

## Before you deploy — 2 things to finish

1. **Set your real domain.** Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real deployed URL. This feeds the SEO metadata, Open Graph tags, and canonical URL. Also update the hard-coded URL in `public/robots.txt` and `public/sitemap.xml` to match.
2. **Swap project GitHub links if you want them per-project.** Right now every project's "View on GitHub" button points to your GitHub profile (`github.com/vigneshsk54`). If you later want each project linking to its own repo, edit the `links.github` field for each project in `lib/data.ts`.

The résumé call-to-action currently opens a pre-addressed email request, so it never leads to a missing file. To offer a direct download later, add the real PDF to `public/` and update the link in `components/Contact.tsx`.

## Editing content

All resume content lives in one place: **`lib/data.ts`**. Update your profile, experience, education, skills, projects, achievements, and certifications there — every section on the site reads from this file, so there's no hunting through components to change copy.

- `profile` — name, title, summary, contact links, resume path
- `roles` — the "what I'm looking for" cards
- `skillGroups` — grouped skills with proficiency percentages
- `experience` — internship timeline
- `education` — degree info
- `achievements` — the stat cards
- `certifications` — certificate cards (from Scaler, SimpliLearn, NoviTech)
- `projects` — full case studies, each with its own `/projects/[slug]` page

## Project structure

```
app/
  layout.tsx            Root layout — fonts, metadata, JSON-LD schema
  page.tsx               Home page entry
  globals.css             Design tokens, base styles, effects
  not-found.tsx           Custom 404
  projects/[slug]/page.tsx  Dynamic case-study pages (SSG via generateStaticParams)
components/
  HomeShell.tsx           Orchestrates loader + all sections
  Loader.tsx              Boot-sequence loading screen
  BackgroundFX.tsx        Aurora gradients, grid, floating particles
  CustomCursor.tsx        Mix-blend-mode cursor (desktop only)
  ScrollProgress.tsx      Top progress bar
  Navbar.tsx              Sticky glass nav
  Hero.tsx                Hero + signature "system status" HUD panel
  About.tsx / Experience.tsx / Education.tsx / Skills.tsx
  Projects.tsx / ProjectCard.tsx / ProjectDetail.tsx
  Achievements.tsx / Certifications.tsx / RolesLookingFor.tsx
  Contact.tsx / Footer.tsx
  MagneticButton.tsx / SectionHeading.tsx    Shared primitives
lib/
  data.ts                 All resume content — single source of truth
  types.ts                 TypeScript interfaces
  utils.ts                 cn() classname helper
public/
  favicon.svg, apple-touch-icon.png, icon-192.png, icon-512.png
  manifest.json, robots.txt, sitemap.xml, og-image.png
```

## Deployment (Vercel)

1. Push this project to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Add the `NEXT_PUBLIC_SITE_URL` environment variable in the Vercel project settings (Production + Preview).
4. Deploy — Vercel auto-detects Next.js, no config needed.

## Design notes

The visual system leans into Vignesh's actual background — security research and full-stack engineering — rather than generic "AI portfolio" aesthetics. The hero's signature element is a live-looking system status panel (`SYSTEM.STATUS — ONLINE`) with a scanline sweep, echoing the kind of security/monitoring dashboards his phishing-detection research touches. Section eyebrows use code-comment syntax (`// 01 EXPERIENCE`) instead of generic numbered dividers, since that's literally how developers annotate their own code.

Palette: near-black void (`#06070C`) and graphite panels (`#0C1120`), with electric blue (`#4C7CFF`) and violet (`#9D5CFF`) as the two accent colors, plus a small signal-green (`#34D399`) reserved for "live/available" status indicators only.

## Accessibility & performance

- Full keyboard navigation, visible focus rings (`:focus-visible`)
- `prefers-reduced-motion` respected — all animations disable to instant
- Semantic headings, alt-ready image config, ARIA labels on icon-only buttons
- `next/font` for zero layout-shift font loading, `next/image` config ready for any images you add
- No client-side data fetching on the critical path — everything renders from static data
# portfolio
