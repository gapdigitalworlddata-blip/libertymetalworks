# Project memory

## Product intent & audience

- Next.js project for a hardware manufacturing company (Castle Hardwares, est. 1965; Liberty Brass International, est. 1986)
- Operations in Aligarh and Rajkot, India
- B2B export-oriented business
- User communicates in Hinglish; prefers conversational, direct responses

## Brand personality & voice

- Respond in Hinglish (Romanized Hindi)
- Tone: helpful, direct, no jargon overload
- Be upfront about limitations (e.g., can't push directly to GitHub from Bolt)

## Visual design & UX direction

- Multi-page site: Home, About, Products, Manufacturing, Contact, B2B Export
- Home: Hero with 5 product image slides; brand intro with heritage text; product categories; manufacturing & quality sections
- About: Timeline with 6 milestones (starting 1965)
- Products: 4 categories (Door Hardware, Cabinet Knobs, Door Hinges, Door Knockers), 24 products total
- Manufacturing: Process steps with images
- Contact: Product categories dropdown
- Images: Pexels used throughout (replaced previous rocket.new/unsplash URLs)

## Decisions, constraints & rationale

- **Next.js downgraded to 15.4.7** — 15.5.x has a WebContainer-specific bug causing `workUnitAsyncStorage` InvariantError; confirmed via GitHub issues; 15.4.x is compatible with Bolt
- `--turbopack` flags reverted after downgrade — not needed/stable for 15.4.x; webpack works fine on this version
- `not-found.tsx` must NOT use `'use client'` or client-side imports — caused same Runtime InvariantError
- Removed extra script tags from `layout.tsx` to fix same error
- `@dhiwise/component-tagger` webpack loader removed from `next.config.mjs` — it injected `data-*` attributes into JSX during dev mode, corrupting the RSC tree
- Bolt preview runs on port 3000, not the dev script port (4028)
- Changes made within Bolt project files; GitHub push requires separate setup
- Bolt has its own deployment system
- Build passes clean with no errors

## Open questions & assumptions

- Is there an existing GitHub repo to sync with later?
- Will user need additional pages or features beyond current scope?
- Are Pexels images final or will brand-specific product photos be provided?