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

## GitHub contributions card

The card in the Experience section reads `contributions.json`, written at deploy time by
`scripts/contributions.mjs` from GitHub's own contribution calendar, so the number and the squares match the
profile, private contributions included. The workflow also runs daily to keep it fresh.

It needs one repository secret, `GH_CONTRIB_TOKEN`: a personal access token of the profile owner
(classic token with the `read:user` scope). Without it the card falls back to the public calendar, which only
counts private work if "Private contributions" is enabled on the GitHub profile.
