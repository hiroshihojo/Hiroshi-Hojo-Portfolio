# Materials Engineering Portfolio

A portfolio site built with [Astro](https://astro.build), designed for a physics
graduate transitioning into a materials engineering master's — semiconductor
focus. Deploys for free on GitHub Pages.

## What's here

- **Home** — hero + featured projects
- **Projects** — a listing pulled automatically from `src/content/projects/`
- **Project detail pages** — one per markdown file, auto-generated
- **About** — bio + skills

Each project is a markdown file with frontmatter (title, one-line summary,
method/tools tag, status) and a body that follows the six-part structure we
discussed: context, method, results, materials-relevant takeaway, next steps.
The four files already in `src/content/projects/` are templates for the
projects from our conversation — replace the placeholder text with your real
content as you complete each one.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 22.12 or later.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:4321`).

## 2. Make it yours

- **Name, email, socials**: `src/components/Nav.astro` (brand name) and
  `src/components/Footer.astro` (email/GitHub/LinkedIn links)
- **Home page copy**: `src/pages/index.astro`
- **About page bio + skills list**: `src/pages/about.astro`
- **CV**: drop a PDF into `public/` and update the link in `about.astro`
- **Projects**: edit the existing markdown files in `src/content/projects/`,
  or add new ones — any `.md` file dropped in that folder is picked up
  automatically and appears on the Projects page and home page (if
  `featured: true`)
- **Images**: put project figures in `public/images/projects/` and reference
  them in your markdown as `/images/projects/your-file.png` (the site's base
  path is prepended automatically since these use root-relative paths through
  Astro's asset handling — if an image doesn't show up after deploying, see
  the base path note below)

### Adding a new project

Create a new file in `src/content/projects/`, e.g. `05-xrd-analysis.md`:

```markdown
---
title: "Your Project Title"
summary: "One sentence describing it."
method: "Category · Tools used"
track: "computation"
date: 2026-09-01
status: "in progress"
featured: false
order: 5
---

## Context
...

## Method
...

## Results
...

## Materials-relevant takeaway
...

## What I'd do next
...
```

It'll show up at `/projects/05-xrd-analysis/` with no other changes needed.

## 3. Deploy to GitHub Pages

**a. Push this to a GitHub repository.**

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

**b. Update `astro.config.mjs`** with your actual GitHub username and repo
name:

```js
export default defineConfig({
  site: "https://<your-username>.github.io",
  base: "/<your-repo>",
});
```

If your repo is named exactly `<your-username>.github.io` (a user/org site
rather than a project site), remove the `base` line entirely.

**c. Enable GitHub Pages via Actions.** In your repo on GitHub:
`Settings → Pages → Build and deployment → Source → GitHub Actions`.

**d. Push again** (or re-run the workflow from the Actions tab). The included
workflow at `.github/workflows/deploy.yml` builds and deploys automatically
on every push to `main`. Your site will be live at
`https://<your-username>.github.io/<your-repo>/` a minute or two later.

### Base path gotcha

Because GitHub Pages project sites are served from a subpath
(`/your-repo/`), all internal links and asset paths in this project go
through `import.meta.env.BASE_URL` rather than being hardcoded — that's
already handled in the nav, footer, and project links. If you add new links
or images yourself, follow the same pattern (`` `${import.meta.env.BASE_URL}your-path` ``)
instead of writing `/your-path` directly, or they'll 404 once deployed.

## Design notes

- Fonts: Space Grotesk (headings), IBM Plex Sans (body), IBM Plex Mono
  (labels/data) — loaded from Google Fonts in `src/layouts/Layout.astro`
- Color tokens and the wafer-grid background texture live in
  `src/styles/global.css`
- The hero graphic (`src/components/Lattice.astro`) is a real isometric
  projection of silicon's diamond-cubic crystal structure, generated from
  actual atomic coordinates — not a decorative graphic. If you switch your
  focus away from semiconductors, you may want to swap this for a structure
  more relevant to your material of interest.
