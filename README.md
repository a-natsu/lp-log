# LP Improvement Log (Portfolio)

A small portfolio app to browse LP optimization logs in a **list → detail** flow.
I dedicated about 2–4 hours per day for ~2 weeks to build and ship an MVP (a minimal, end-to-end working version). Since then, I’ve been continuously improving it.

## Demo
- https://lp-log.vercel.app/

## Features
- The list page renders log entries
- Each entry has a detail page (`/logs/[id]`)
- Status filtering with URL query state (so it can be shared/restored)
- Empty-state UI when no items match
- Deployed on Vercel and accessible via a public URL

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## Notes (What I focused on)
- Keeping the code maintainable with TypeScript types (e.g. `Status` as a union type)
- Running `npm run build` before pushing changes (production-like checks)

## Getting Started
cd lp-log

npm install

npm run dev


## Build
npm run build

## Japanese README
- See `README_ja.md`
