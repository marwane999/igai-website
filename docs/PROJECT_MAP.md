# PROJECT MAP — Ibn Ghazi Arabic Institute

## [TECH_STACK]

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend Framework | Next.js | 16.2.x |
| UI Library | React | 19.2.x |
| Styling | Tailwind CSS | 4.3.x |
| Backend | Python FastAPI | 0.136.x |
| Python Runtime | Python | 3.12.x |
| Database | PostgreSQL | 16.x (Easypanel) |
| ORM | SQLAlchemy 2.0 + Alembic | latest |
| Validation | Pydantic v2 | latest |
| Container | Docker + docker-compose | latest |
| Server | Easypanel (Coolify-based) | - |
| Images | Old website images (igai-fez.com) | preserved |

## [SYSTEM_FLOW]

```
User (Browser) → Next.js (App Router) → FastAPI (REST) → PostgreSQL
                    ↕ (SSR/ISR)                 ↕ (Async)
              Tailwind CSS              SQLAlchemy 2.0 (async)
```

## [ARCHITECTURE]

```
/
├── frontend/          # Next.js 16 App Router + Tailwind v4
│   ├── app/           # Pages (App Router)
│   ├── components/    # Reusable UI components
│   ├── lib/           # Utilities, API client
│   ├── public/        # Static assets (images from old site)
│   ├── styles/        # Global CSS, Tailwind entry
│   ├── Dockerfile
│   └── .env.example
├── backend/           # FastAPI
│   ├── app/
│   │   ├── api/       # Route handlers
│   │   ├── models/    # SQLAlchemy models
│   │   ├── schemas/   # Pydantic schemas
│   │   ├── services/  # Business logic
│   │   └── core/      # Config, DB, logging
│   ├── migrations/    # Alembic migrations
│   ├── Dockerfile
│   └── .env.example
├── docs/              # Architecture docs (this folder)
├── docker-compose.yml # Orchestrates frontend + backend + db
└── deploy.js          # Deployment env var injector (for Easypanel)
```

## [ORPHANS & PENDING]

- [x] Root-level config files: docker-compose.yml, .gitignore, deploy.js — created 2026-05-12
- [x] Frontend Dockerfile + .env.example — created 2026-05-12
- [x] Backend complete: all models, routes, schemas, email service, migrations — verified 2026-05-12
- [x] Frontend: 28 routes (27 static + 1 dynamic) — build passes 2026-05-12
- [x] Nav link hrefs fixed to match actual routes — 2026-05-12

### Still needed before production launch
- [ ] Favicon from old site logo
- [ ] Google Maps API key for contact page
- [ ] SMTP credentials for contact form
- [ ] YouTube channel embed playlist ID
- [ ] Facebook page URL for social proof
- [ ] Tuition table data — currently static, needs source confirmation
