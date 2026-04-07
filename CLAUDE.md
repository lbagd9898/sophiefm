# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

This is a **Next.js 16 (App Router)** personal portfolio site for Sophie Fusco Mckeown, backed by **Sanity CMS** for content management.

### Pages

- `/` — Home: fetches `job` documents from Sanity, renders Header + About + Experience
- `/services` — fetches `service` documents, renders SmallHeader + PhotoQuote + Carousel + Services
- `/contact` — static contact card page
- `/studio/[[...tool]]` — embedded Sanity Studio (content editing UI)

### Sanity Integration

Sanity schemas are defined in `sanity/schemaTypes/`: `job`, `about`, `service`, `quote`. The client (`sanity/lib/client.ts`) uses `useCdn: true`. Content is fetched directly in Next.js page components using GROQ queries via `client.fetch(...)`.

Environment variables required (in `.env.local`): `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION` — resolved via `sanity/env.ts`.

### Styling

Tailwind CSS v4 (PostCSS-based). Fonts: Geist Sans, Geist Mono, and Lora (italic) loaded via `next/font/google`. Dark mode supported via `dark:` variants.

### Components

All components live in `app/components/`. Page components are server components that fetch data and pass it as props to client-side display components. The `Carousel` component uses Embla Carousel with autoplay.
