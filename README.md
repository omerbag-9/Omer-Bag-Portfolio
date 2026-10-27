# Omer Mustafa — portfolio

Personal site for Omer Mustafa: development, ISTQB-certified testing, technical delivery and Claude AI skills.

Built with React, Vite, GSAP and components from [React Bits](https://reactbits.dev) (SplitText, ScrollReveal,
ScrollVelocity, FlowingMenu, Magnet, ClickSpark, CountUp, LetterGlitch).

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm test          # Playwright suite (builds and serves the site first)
```

## Where things live

- `src/data.ts` — every fact on the page: contact details, the six client projects, services, credentials.
- `src/router.ts` — the brief router: keywords per skill, the first-week plan lines, the email draft.
- `src/fragments.tsx` — the interface fragments used as pictures (test run, delivery update, SKILL.md, tickets).
- `src/sections/` — one file per section, in page order.
- `tests/site.spec.ts` — the eight checks shown on the page itself.

## Deploy

`.github/workflows/deploy.yml` runs the tests on every push and pull request, then deploys `master` to GitHub Pages.
In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
