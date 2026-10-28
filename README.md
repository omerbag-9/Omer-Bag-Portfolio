# Omer Mustafa — portfolio

Personal site for Omer Mustafa: development, ISTQB-certified testing, technical delivery and Claude AI skills.

Built with React, Vite, GSAP and components from [React Bits](https://reactbits.dev): Threads and LiquidEther
backgrounds, StaggeredMenu, SplitText, RotatingText, BlurText, ScrollReveal, CircularText, MagicBento, ScrollStack,
CardSwap, LogoLoop, SpotlightCard, CountUp, Magnet and ClickSpark. Tool icons from react-icons.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm test          # Playwright suite (builds and serves the site first)
```

## Where things live

- `src/data.ts` — every fact on the page: contact details, stats, the six client projects, experience.
- `src/sections/` — one file per section, in page order.
- `tests/site.spec.ts` — the Playwright suite run in CI.

## Deploy

`.github/workflows/deploy.yml` runs the tests on every push and pull request, then deploys `master` to GitHub Pages.
In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
