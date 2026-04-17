# LP Improvement Log (Portfolio)

This is a portfolio project built as a log app to manage and share LP (landing page) improvement initiatives in a **B2B managed cloud / infrastructure services** context.  
Each log entry is designed to capture **Hypothesis → Implementation → Validation plan**, so that decisions and learnings can be reused over time.

I prioritized shipping an MVP first and released it publicly within about two weeks (studying ~2–4 hours daily). I’m continuously improving it.

## Assumed Use Case (B2B)
- Goal: Increase conversions for **Request a demo / Contact / Download materials**
- Key KPIs: CTA click-through rate, form reach rate, form completion rate
- Typical challenges:
	- Users need enough trust signals (track record, security, delivery process) to take action
	- Long/complex forms increase drop-off
	- Missing FAQ/decision-making info prevents conversions

## Demo
- https://lp-log.vercel.app/

## Features
- Log list page
- Log detail page (`/logs/[id]`)
- Filter by status (state persisted via URL query params)
- Empty state UI when there are no results
- Deployed on Vercel with a public URL

## Example Improvements (Hypothesis → Change → Validation)
- Reduce form fields
	- Hypothesis: More input fields increase friction and reduce form completion rate
	- Change: Review required fields and reduce unnecessary inputs (plan: add input assistance later)
	- Validation: Form completion rate, drop-off rate after form start
- Clarify the above-the-fold (hero) message
	- Hypothesis: If the value proposition is too vague, users won’t click the CTA
	- Change: Make the target audience and benefits more specific
	- Validation: CTA CTR, time on hero section, scroll depth
- Add an FAQ section
	- Hypothesis: If common concerns (pricing, security, delivery, support) aren’t addressed, users won’t convert
	- Change: Add FAQs to reduce uncertainty
	- Validation: FAQ view rate, conversion rate after FAQ interaction, exit rate

*Note: At the moment, the focus is on building a structure to manage initiatives and validation plans. Analytics tooling (e.g., GA) can be added next.*

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## Notes
- Keep the codebase maintainable with TypeScript types (e.g., `Status` as a union type)
- Run `npm run build` before pushing (production-like checks)

## Getting Started
cd lp-log

npm install

npm run dev


## Build
npm run build

## Japanese README
- See `README_ja.md`
