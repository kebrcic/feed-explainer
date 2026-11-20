# Does your feed know why you clicked?

A one-page explainer for ENGW 3302, Project 3, written for college students who use
social media and streaming apps.

**Live:** https://kebrcic.github.io/feed-explainer/

## Source

P. Symeonidis, D. Chaltsev, C. Berbague and M. Zanker, “Sequence-aware news
recommendations by combining intra- with inter-session user information,” _Information
Retrieval Journal_, vol. 25, pp. 461–480, 2022. Chart values from Table 5.
<https://doi.org/10.1007/s10791-022-09415-w>

The three results (6.54%, 1.28%, 11.40%) live in `src/data/study.js` alongside the
citation, and every part of the site reads them from there, so they cannot drift apart.

## Running it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

Pushing to `main` builds and deploys through `.github/workflows/deploy.yml`.

## Layout

```
src/
  data/study.js          the citation, the three results, the cast
  hooks/useHashRoute.js  #home / #sources / #ai-use
  pages/                 Home, Sources, AiUse
  components/            switch, person card, phone screen, chart, dot grid, …
    illustrations/       the drawn portraits
  styles/                tokens.css (palette, type) and app.css (layout)
archive/                 earlier versions of this project, kept for reference
```
