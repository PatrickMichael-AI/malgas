# Salt & Fynbos

Phase 1 foundation for the Salt & Fynbos frontend redesign.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Tailwind CSS
- `shadcn/ui`-ready configuration

## What Phase 1 includes

- Vercel-friendly Next.js project structure
- Global layout, metadata, and file-based app routing
- Brand token foundation for the Salt & Fynbos design system
- Route shell for `/`, `/menu`, `/about`, `/contact`, and `not-found`
- `next/font` and `next/image` integration

## Install and run

```bash
npm install
npm run dev
```

## Notes

- The previous Vite SPA scaffold has been removed.
- This workspace could not fetch npm packages during the migration because outbound registry access was unavailable, so `package-lock.json` was not regenerated here.
- After dependencies are installed in a networked environment, run `npm run build` and `npm run lint` to verify the foundation.
