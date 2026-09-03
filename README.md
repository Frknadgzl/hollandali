# Hollandalı Web

Modern Next.js + Tailwind CSS v4 frontend with Motion animations, Strapi 5 CMS and PostgreSQL.

## Frontend

```bash
npm install
npm run dev
```

Set `STRAPI_URL=http://localhost:1337` in `.env.local`. If Strapi is unavailable, the frontend falls back to demo menu data.

## CMS + PostgreSQL

```bash
docker compose up
```

Open `http://localhost:1337/admin`, create the first admin account, then enable public `find` access for the Menu Item API or use an API token in production.

## Tailwind architecture

- Tailwind CSS v4 via `@tailwindcss/postcss`
- `@theme` tokens in `app/globals.css` for brand colors, fonts, radius and shadow
- Tailwind utilities in components for layout and visual styling
- tiny global CSS surface: base styles + reusable brand container/glass utilities only
- responsive spacing is mobile-first
- Motion handles animation, while reduced-motion preferences are respected
# hollandali
