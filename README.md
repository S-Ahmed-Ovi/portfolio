# Shahabuddin Ahmed Ovi — Portfolio

A personal portfolio site built with Next.js 15 (static export), Tailwind CSS, and Framer Motion. Deployed via GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Building for production

```bash
npm run build
```

This generates a static export in `/out` (because `next.config.js` sets `output: 'export'`). The `/out` folder is what GitHub Pages serves — it is not committed to git; GitHub Actions rebuilds it on every push.

## Deploying to GitHub Pages

### 1. Push this repo to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/S-Ahmed-Ovi/<your-repo-name>.git
git push -u origin main
```

### 2. Enable GitHub Pages via GitHub Actions

In your repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

The included workflow at `.github/workflows/deploy.yml` will then automatically build and deploy the site on every push to `main`. No manual build step is needed after this.

### 3. Repo name matters

- If this repo is named `S-Ahmed-Ovi.github.io` (your username + `.github.io`), the site deploys to the root domain and `next.config.js` needs **no** `basePath`/`assetPrefix` — leave them commented out as they are now.
- If this repo has any other name (e.g. `portfolio`), GitHub serves it at `https://S-Ahmed-Ovi.github.io/portfolio/`. In that case, open `next.config.js` and uncomment + set:
  ```js
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  ```
  (replace `portfolio` with your actual repo name), then commit and push again.

### 4. Custom domain (optional)

If using a free domain from the GitHub Student Developer Pack:

1. In repo **Settings → Pages → Custom domain**, enter your domain (e.g. `shahabuddinovi.me`) and save.
2. At your domain registrar, set DNS records:
   - For the apex domain: four `A` records pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - For `www`: a `CNAME` record pointing to `S-Ahmed-Ovi.github.io`
3. Wait for DNS to propagate, then check "Enforce HTTPS" in the Pages settings once available.

## Updating content

All resume content (experience, projects, skills, leadership) lives in one place: `lib/content.ts`. Edit that file and push — no need to touch components for text changes.

## Replacing the résumé file

The downloadable résumé is `public/resume.pdf`. Swap in an updated PDF with the same filename to update the "Download résumé" button site-wide.
