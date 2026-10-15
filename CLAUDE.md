# CLAUDE.md

Personal site of TSANG Cheuk Nam (Tony Tsang): https://rairurairu.github.io. React + Motion,
pre-rendered by `scripts/prerender.mjs`, deployed by GitHub Actions on every push to `main`.

All visible copy lives in `src/data.js`. It is application text, so the CV workspace's rules apply:

1. Read `D:\cvbuilding\PRINCIPLES.md` and `D:\cvbuilding\evidence\corrections-log.md` before
   changing any wording. Every number must trace to `D:\cvbuilding\evidence\claim-ledger.md`.
2. Plain headings, no slogans, no course codes, no "(expected)", no time-to-build, no forced
   numbers; lead with the hackathon win among 200+ participants.
3. Before pushing: `npm run build`, then from `D:\cvbuilding` run
   `py tools/check.py --site D:\rairurairu.github.io\dist` (0 errors), and run the
   `hiring-manager` agent on the changed pages for anything beyond a small edit.
4. The microinsurance repo is private: describe it, never link it.
