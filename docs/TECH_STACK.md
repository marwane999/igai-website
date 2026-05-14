# TECH STACK (Version-Pinned — 2026-05-12)

## Frontend

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.2.6 | App Router, SSR, ISR, API routes |
| react | 19.2.6 | UI library |
| react-dom | 19.2.6 | DOM rendering |
| tailwindcss | 4.3.0 | Utility-first CSS (v4: CSS-first config, @theme) |
| @tailwindcss/postcss | 4.3.0 | PostCSS plugin for Tailwind v4 |
| typescript | 5.7.x | Type safety |
| next-themes | latest | Dark/light mode (if needed) |
| lucide-react | latest | Icons |
| framer-motion | latest | Animations |
| react-hook-form | latest | Form handling |
| zod | latest | Form validation |
| @radix-ui/react-dialog | latest | Modal primitives |
| @radix-ui/react-accordion | latest | Accordion |
| @radix-ui/react-tabs | latest | Tabs |
| clsx | latest | Conditional classes |
| tailwind-merge | latest | Class merging |

## Backend

| Package | Version | Purpose |
|---------|---------|---------|
| fastapi | 0.136.1 | Web framework |
| uvicorn | latest | ASGI server |
| sqlalchemy | 2.0.x | ORM (async) |
| asyncpg | latest | PostgreSQL async driver |
| alembic | latest | DB migrations |
| pydantic | 2.x | Data validation |
| pydantic-settings | latest | Env config |
| python-multipart | latest | Form data |
| email-validator | latest | Email validation |
| httpx | latest | HTTP client |
| python-jose | latest | JWT (if auth needed) |
| passlib | latest | Password hashing |
| bcrypt | latest | Hashing algorithm |
| sentry-sdk | latest | Error tracking |
| loguru | latest | Logging |

## DevOps

| Tool | Purpose |
|------|---------|
| Docker | Containerization |
| docker-compose | Multi-container orchestration |
| Node.js 22 LTS | Frontend build runtime |
| PostgreSQL 16 | Database (Easypanel) |

## Why These Choices

- **Next.js 16** over plain React: SSR for SEO, ISR for static pages, built-in routing, image optimization, edge-ready. Critical for Indian ICP discovering via Google.
- **Tailwind v4** over CSS modules/Styled-components: 5x faster builds, CSS-native config (@theme), zero-runtime CSS, container queries built-in.
- **FastAPI** over Django/Flask: async native, Pydantic validation, auto OpenAPI docs, 2x-5x faster than Flask for JSON APIs.
- **No micro-fragmentation**: Avoided Zustand/Redux — Next.js App Router + React Server Components manage state without client stores.
