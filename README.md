# rairurairu.github.io

Personal site of TSANG Cheuk Nam (Tony Tsang): https://rairurairu.github.io

React + Motion, built with Vite. Every page is pre-rendered to static HTML at build time
(`scripts/prerender.mjs`), so the full text is in the HTML; motion starts after hydration and
everything stays visible without JavaScript or with reduced motion.

- Content: `src/data.js` (numbers trace to the claim ledger in `D:\cvbuilding\evidence\claim-ledger.md`)
- Layout: `src/App.jsx`; motion components: `src/components/motion.jsx`; styles: `src/styles.css`
- Static files (CV PDF, images, robots, sitemap, llms.txt): `public/`
- The CV PDF is built from `D:\cvbuilding\applications\_web-cv`.

```
npm ci
npm run dev      # local dev server
npm run build    # dist/ with pre-rendered pages
```

Pushing to `main` deploys through GitHub Actions (`.github/workflows/deploy.yml`).
Custom domain later: add `public/CNAME`, point DNS at GitHub Pages, and update `SITE` in
`src/data.js`, `public/sitemap.xml`, `public/robots.txt` and `public/llms.txt`.
