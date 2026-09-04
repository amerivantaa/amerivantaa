# Amerivantaa Website

A React + Vite + Tailwind site for an IT staff augmentation & consulting company.
Built to be easy for a non-frontend-specialist founder to maintain.

## Getting the contact form to email your organization inbox

The form is wired to send submissions to your real email address using
**Formspree** (a free service for exactly this — no backend server needed).

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form, and set its destination to your organization email
   address (e.g. `hello@amerivantaa.com`). Formspree will ask you to
   confirm that inbox once.
3. Copy the endpoint URL it gives you — it looks like
   `https://formspree.io/f/xxxxxxxx`.
4. Paste it into `src/data/content.js`:
   ```js
   formEndpoint: 'https://formspree.io/f/xxxxxxxx',
   ```
5. Rebuild (`npm run build`) and redeploy.

Until you do this, the form falls back automatically to a `mailto:` link
(opens the visitor's email client) — the site works either way, this
just upgrades it to a proper in-page submission with a success state.

Free Formspree accounts include 50 submissions/month, which is plenty to
start; paid tiers exist if you outgrow that.

## Running it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build
```

This outputs static files to `dist/`. You can deploy `dist/` to any static host:
**Vercel**, **Netlify**, **Cloudflare Pages**, or **GitHub Pages** all work with
zero configuration for a Vite app, and all have free tiers.

## How to edit content

Almost all the text on the site — headline, services, FAQ, contact info,
industries, tech stack — lives in **one file**:

```
src/data/content.js
```

Change the text there and the whole site updates. You generally won't need to
touch the component files (`src/components/*.jsx`) unless you want to change
layout or add/remove a section.

To change your company name, replace `Amerivantaa` in:
- `src/data/content.js` (`company.name`)
- `index.html` (`<title>`, meta tags, canonical URL, JSON-LD)

## Design tokens

Your real logo lives at `public/logo.png` (used in the navbar, footer, and
browser favicon). To swap it later, just replace that file — same
filename, any reasonably square image works. It was resized to 320px wide
and compressed on the way in; the source PDF/PNG you sent was over 800 KB,
which would have been a poor first-load experience.

Colors and fonts are defined once in `tailwind.config.js` under `theme.extend`.
Change `primary` / `accent` hex values there to re-theme the whole site.

- **Display font:** Poppins (headings)
- **Body font:** Inter (body text)
- **Primary:** deep blue `#0B4F9C` — trust, enterprise credibility
- **Accent:** bright blue `#1E7FE0` — used for calls to action
- Palette is white + blue throughout (no secondary color), matching a
  clean enterprise-IT look.

## Targeting U.S. clients

Since this version is aimed at U.S. companies only, a few things are built
around that:

- A dedicated **"Built around how U.S. teams actually work"** section
  (`src/components/USFocus.jsx`) covering business-hours overlap, U.S.-style
  contracts (MSA/NDA, corp-to-corp/1099, USD invoicing), communication
  style, IP protection, and no visa/relocation logistics — the concerns
  that actually make a U.S. buyer hesitate about an outside team.
- FAQ items specifically addressing time zones, billing, and data/IP
  ownership.
- `index.html` meta tags, Open Graph, and the `ProfessionalService`
  structured data all specify `areaServed: United States` and `en-US` /
  `en_US` locale tags.
- All of this content is still in `src/data/content.js` — edit freely.

## SEO — what's already in place

- Descriptive `<title>` and meta description in `index.html`
- Open Graph + Twitter card tags for link previews
- `canonical` link tag
- `ProfessionalService` structured data (JSON-LD) in `index.html`
- `FAQPage` structured data generated from your FAQ content (`src/components/FAQ.jsx`)
- Semantic HTML (`header`, `main`, `section`, `footer`, one `h1` per page, ordered `h2`s)
- `public/robots.txt` and `public/sitemap.xml`
- `react-helmet-async` wired up so you can override title/description per
  route if you add more pages later

## Performance

A few concrete changes were made to reduce load time and cut unnecessary
JavaScript:

- **Removed `react-helmet-async`.** It was only managing static tags that
  already live in `index.html`, so it was dead weight.
- **Moved the hero animation's `<style>` block into `src/index.css`.** It's
  compiled once into the static CSS bundle instead of being recreated on
  every render.
- **The FAQ's structured data** (JSON-LD for search rich results) is
  injected with a few lines of vanilla `useEffect` — no library needed for
  one static tag.
- Google Fonts load with `rel="preconnect"` and `display=swap`, so text
  renders immediately with a fallback font instead of blocking.
- Tailwind's content-based purging means shipped CSS only includes classes
  actually in use.

**One tradeoff worth knowing about:** adding `react-icons` for real
technology/brand logos (React, AWS, Kubernetes, etc. — used in the Tech
Stack and Platforms sections) brought the JS bundle up to roughly 233 KB
(77 KB gzipped), from ~168 KB (53 KB gzipped) without it. That's the cost
of the icon-heavy, "enterprise site" look — still well within normal range
for a marketing site, but if you want to trim it back down, the icons in
`TechStack.jsx` and `Platforms.jsx` are the place to look (swap real
brand icons for the plain `lucide-react` ones used everywhere else, which
are far lighter).

If you want to go further later: the biggest remaining lever is moving to
a server-rendered framework (see the SEO note below) or adding
`vite-plugin-compression` if your host doesn't already gzip/brotli assets
automatically (Vercel, Netlify, and Cloudflare Pages all do this for you).

### One important limitation to know about

This is a **client-side rendered** React app (a Single Page App). Google can
index client-rendered pages, but it's slower and less reliable than a
server-rendered page, and other search engines / social-media link previews
may not execute JavaScript at all. For a single marketing page like this,
it's a reasonable tradeoff — simple to host, free, easy to maintain.

If SEO becomes more important later (e.g. you add a blog, multiple service
pages, or want the fastest possible indexing), the natural upgrade path is
migrating this same component structure into **Next.js**, which
server-renders pages by default. The `src/data/content.js` file and most
components would carry over largely unchanged.

### Before you launch, replace these placeholders

- `hello@amerivantaa.com` / phone number → your real contact info
- `https://www.amerivantaa.com` → your real domain (in `index.html`, `robots.txt`, `sitemap.xml`)
- `differentiators` in `content.js` are honest, numbers-free claims for a new
  company — swap in real stats (years in business, engineers placed, etc.)
  once you have them
- Add a real Open Graph image at `public/og-image.jpg` (1200×630px)

## Project structure

```
src/
  data/content.js       ← all editable copy
  components/           ← one file per section
  hooks/useReveal.js     ← scroll-reveal animation hook
  App.jsx                ← assembles all sections
  main.jsx               ← React entry point
public/
  robots.txt
  sitemap.xml
  favicon.svg
```
