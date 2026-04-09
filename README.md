# LP Improvement Log (Portfolio)

A small portfolio app to browse LP optimization logs in a **list → detail** flow.

## Demo
- https://lp-log.vercel.app/

## Features
- Log list (card UI)
- Log detail page (`/logs/[id]`)
- Status filter (persists in URL, e.g. `/?status=完了`)
- Empty state when no results match the filter

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
