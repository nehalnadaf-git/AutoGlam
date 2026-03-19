# Auto Glam (Next.js)

Auto Glam is a Next.js 15 App Router website for premium car care services, including detailing, ceramic coating, and paint protection film.

## Stack

- Next.js 15 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- Vitest

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run test` - run Vitest once
- `npm run test:watch` - run Vitest in watch mode

## Project Structure

- `src/app` - App Router routes, layout, metadata, sitemap, robots
- `src/views` - page view components rendered by app routes
- `src/components` - reusable UI and feature components
- `src/data` - static domain data (services, slugs, SEO text)

## Notes

- Canonical domain is set to `https://www.autoglam.com`.
- Dynamic service detail pages are generated from `src/data/services.ts`.
- Structured data is rendered through `src/components/seo/LocalBusinessSchema.tsx`.
