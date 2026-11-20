# Does your feed know why you clicked?

A one-page explainer for ENGW 3302, Project 3, written for college students who use
social media and streaming apps.

**Live:** https://kebrcic.github.io/feed-explainer/

Maya and Leo watch the same three cooking videos for completely different reasons, and
their feeds cannot tell them apart. The page uses one finding from a 2022 peer-reviewed
study to show the difference between predicting a click and knowing why someone clicked.

## Source

P. Symeonidis, D. Chaltsev, C. Berbague and M. Zanker, “Sequence-aware news
recommendations by combining intra- with inter-session user information,” *Information
Retrieval Journal*, vol. 25, pp. 461–480, 2022. Chart values from Table 5.
<https://doi.org/10.1007/s10791-022-09415-w>

The three results (6.54%, 1.28%, 11.40%) live in `src/data/study.js` alongside the
citation, and every part of the site reads them from there, so they cannot drift apart.

## AI disclosure

This site was built with AI (Claude). The portraits of Maya and Leo, the phone screens,
the diagrams, both charts and most of the wording were generated, not hand-made. Maya and
Leo are invented and there are no photos of real people. The full account is on the
site's "How AI was used" page (`src/pages/AiUse.jsx`).

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
