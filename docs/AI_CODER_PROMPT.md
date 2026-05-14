# PROMPT FOR AI CODER

## Mission

Build a complete, production-ready DTC website for **Ibn Ghazi Arabic Institute** — a Language & Training Center in Fez, Morocco. The goal: maximum conversions, maximum authority, maximum trust for the Indian ICP (Ideal Customer Profile).

## Tech Stack (Version-Pinned)

- **Frontend**: Next.js 16.2.x + React 19.2.x + Tailwind CSS 4.3.x + TypeScript
- **Backend**: Python 3.12 + FastAPI 0.136.x + SQLAlchemy 2.0 (async) + Alembic
- **Database**: PostgreSQL 16 (provided via Easypanel)
- **Infrastructure**: Docker + docker-compose

## Repository Structure

```
/
├── frontend/          # Next.js 16 App Router
├── backend/           # FastAPI
├── docs/              # Architecture docs
├── docker-compose.yml
└── deploy.js
```

## What to Build

### Frontend (24 pages — see docs/ROUTING.md)

All pages based on content from old website `igai-fez.com` (content mapped in docs/PAGES_CONTENT.md):

1. **Home** — Hero, Trust Bar, Stats, Features, Courses, Testimonials, CTA, FAQ, Footer
2. **About** — Overview, Location, Activities, Facilities, Cost
3. **Philosophy** — Teaching approach
4. **Team** — Instructors & admin
5. **Global Platform** — Intercultural mission
6-11. **Academics** (6 subpages) — Classical, MSA, Darija, Professional, Other, Online
12-16. **Admissions** (5 subpages) — Calendar, Tutoring, Tuition, Financial Aid, Apply
17-22. **Student Life** (6 subpages) — Housing, Safety, Trips, Travel, Volunteering, Blog
23. **Fulbright-Hays** — US Department of Education program
24. **Contact** — Form, map, info

### Backend (4 API endpoints)

1. `POST /api/contact` — Contact form submissions
2. `POST /api/applications` — Student applications (multi-step form)
3. `POST /api/newsletter` — Newsletter signups
4. `GET /api/health` — Health check

### Database (3 tables)

See docs/DATABASE.md for full schema.

## Design Requirements

- **Colors**: Moroccan gold (#C8A45C), deep blue (#1B4965), terracotta (#D4654A), warm neutrals
- **Fonts**: Playfair Display (headings) + Inter (body) via next/font
- **Responsive**: Mobile-first, all pages fully responsive
- **Alternating layouts**: Image left / text right on odd sections, reversed on even
- **Images**: Reuse old website images (igai-fez.com/wp-content/uploads/...) as fallback
- **Animations**: Framer Motion for fade-in on scroll, count-up stats, testimonial carousel

## CRO & Trust Elements (Critical)

Every page must include:
- **Primary CTA**: "Apply Now" (sticky on mobile or prominent position)
- **Secondary CTA**: "Contact Us" or "Book Consultation"
- **Trust badges**: Fulbright-Hays logo, university partner logos, years in operation
- **Social proof**: Testimonial quotes with real names, titles, institutions
- **Scarcity**: "Limited to 10 students per class", "Applications close 4 weeks before"
- **Star ratings**: 4.9/5 displayed with Lucide star icons
- **Stats**: 15+ years, 1000+ alumni, 30+ nationalities, 10:1 ratio

## Coding Rules (from docs/CODING_RULES.md — follow strictly)

1. **Server-first**: All pages are React Server Components. Only add "use client" for interactivity.
2. **No Redux/Zustand**: Next.js App Router + RSC eliminates need for client state stores.
3. **No barrel exports**: Each component is a single file, imported directly.
4. **No comments**: Code is self-documenting.
5. **TypeScript strict**: No `any` types. Use `unknown` + type guards.
6. **Tailwind v4 CSS-first**: Use `@theme` in globals.css, no tailwind.config.js.
7. **Async FastAPI**: All endpoints `async def`. SQLAlchemy async sessions.
8. **Pydantic v2**: Strict validation models.
9. **Alembic**: Auto-migrations on startup.

## Deployment Requirements

1. **Dockerfile** for both frontend (multi-stage) and backend (python:3.12-slim)
2. **docker-compose.yml** with frontend, backend, db services
3. **.env.example** for both frontend and backend
4. **deploy.js** — Node.js script that generates Easypanel-compatible env JSON
5. **Alembic** migration auto-runs on backend startup
6. **Health check** at /api/health

## Deliverables Checklist

- [ ] Frontend: All 24 pages implemented with real content from docs/PAGES_CONTENT.md
- [ ] Frontend: Tailwind v4 theme in globals.css
- [ ] Frontend: Responsive (mobile, tablet, desktop)
- [ ] Frontend: CRO elements on every page
- [ ] Frontend: Alternating image-text layouts
- [ ] Frontend: Testimonials carousel with real quotes
- [ ] Frontend: Sticky header with dropdown menus
- [ ] Frontend: Footer with all site links
- [ ] Backend: FastAPI app with 4 endpoints
- [ ] Backend: SQLAlchemy models + Alembic migrations
- [ ] Backend: Pydantic validation schemas
- [ ] Backend: Logging (loguru)
- [ ] Backend: CORS configured
- [ ] Backend: Rate limiting
- [ ] Docker: Multi-stage frontend Dockerfile
- [ ] Docker: Python-slim backend Dockerfile
- [ ] Docker: docker-compose.yml
- [ ] Env: frontend/.env.example + backend/.env.example
- [ ] Deploy: deploy.js script
- [ ] Git: .gitignore (node_modules, __pycache__, .env, .next)
