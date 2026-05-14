# ARCHITECTURE

## High-Level Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Browser (Client)                   │
└──────────────────┬──────────────────────────────────┘
                   │ HTTPS
                   ▼
┌─────────────────────────────────────────────────────┐
│              Easypanel (Docker host)                  │
│  ┌─────────────────────┐  ┌──────────────────────┐   │
│  │   Frontend (Next.js) │  │   Backend (FastAPI)   │   │
│  │   Port 3000          │  │   Port 8000           │   │
│  │                      │  │                       │   │
│  │  ┌───────────────┐   │  │  ┌─────────────────┐ │   │
│  │  │ App Router    │   │  │  │ API Routes       │ │   │
│  │  │ - SSR Pages   │──┼──┼─► │ /api/contact     │ │   │
│  │  │ - Static      │   │  │  │ /api/applications│ │   │
│  │  │ - ISR         │   │  │  │ /api/newsletter  │ │   │
│  │  └───────────────┘   │  │  └────────┬────────┘ │   │
│  └─────────────────────┘  │           │           │   │
│                            │           ▼           │   │
│                            │  ┌──────────────────┐ │   │
│                            │  │  PostgreSQL 16    │ │   │
│                            │  │  (Easypanel)      │ │   │
│                            │  └──────────────────┘ │   │
│                            └───────────────────────────┘
└─────────────────────────────────────────────────────────┘
```

## Frontend Architecture (Next.js 16 App Router)

```
frontend/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, fonts)
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About / Overview
│   ├── philosophy/
│   │   └── page.tsx            # Our Philosophy
│   ├── team/
│   │   └── page.tsx            # Our Team
│   ├── global-platform/
│   │   └── page.tsx            # A Global Platform
│   ├── academics/
│   │   ├── classical-arabic/page.tsx
│   │   ├── modern-standard-arabic/page.tsx
│   │   ├── colloquial-moroccan-arabic/page.tsx
│   │   ├── professional-programs/page.tsx
│   │   ├── other-courses/page.tsx
│   │   └── learn-arabic-online/page.tsx
│   ├── admissions/
│   │   ├── academic-calendar/page.tsx
│   │   ├── private-tutoring/page.tsx
│   │   ├── tuition/page.tsx
│   │   ├── financial-aid/page.tsx
│   │   └── apply/page.tsx
│   ├── student-life/
│   │   ├── housing-food/page.tsx
│   │   ├── safety-health/page.tsx
│   │   ├── trips-activities/page.tsx
│   │   ├── travel-visa/page.tsx
│   │   ├── internships-volunteering/page.tsx
│   │   └── blog/page.tsx
│   ├── fulbright-hays/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── blog/
│       └── [slug]/page.tsx     # Blog posts
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navbar (sticky, transparent→solid)
│   │   ├── Footer.tsx          # Footer with all menus
│   │   ├── MobileMenu.tsx      # Mobile drawer
│   │   └── Breadcrumbs.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx     # Home hero
│   │   ├── StatsBar.tsx        # Numbers counter
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── CourseCard.tsx
│   │   ├── CTASection.tsx
│   │   ├── SocialProof.tsx    # Partner logos, Fulbright badge
│   │   ├── TrustBadges.tsx    # Certifications, awards
│   │   ├── FeaturesGrid.tsx   # Icon + text grid
│   │   ├── ImageTextBlock.tsx # Alternating layout
│   │   └── FAQSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       └── Badge.tsx
├── lib/
│   ├── api.ts                 # API client (fetch wrapper)
│   ├── utils.ts               # cn() helper
│   └── constants.ts           # Site config, social links
├── public/
│   └── images/                # Old website images preserved
├── styles/
│   └── globals.css            # @import "tailwindcss"; @theme ...
├── next.config.ts
├── tailwind.config.ts         # (Minimal - v4 uses CSS-first)
├── Dockerfile
└── .env.example
```

## Backend Architecture (FastAPI)

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py                # FastAPI app, CORS, lifespan
│   ├── core/
│   │   ├── config.py          # Settings via pydantic-settings
│   │   ├── database.py        # Async SQLAlchemy engine
│   │   ├── logging.py         # Loguru config
│   │   └── security.py        # Optional: CSRF, rate limit
│   ├── api/
│   │   ├── __init__.py
│   │   ├── routes/
│   │   │   ├── contact.py     # POST /api/contact
│   │   │   ├── applications.py # POST /api/applications
│   │   │   ├── newsletter.py  # POST /api/newsletter
│   │   │   └── health.py      # GET /api/health
│   │   └── deps.py            # Dependency injection
│   ├── models/
│   │   ├── __init__.py
│   │   ├── contact.py         # ContactSubmission model
│   │   ├── application.py     # Application model
│   │   └── newsletter.py      # NewsletterSubscriber model
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── contact.py         # Pydantic models
│   │   ├── application.py
│   │   └── newsletter.py
│   └── services/
│       ├── __init__.py
│       ├── email_service.py   # SMTP mailer
│       └── notification.py    # Admin notification
├── migrations/                # Alembic auto-generated
│   ├── env.py
│   ├── alembic.ini
│   └── versions/
├── alembic.ini
├── requirements.txt
├── Dockerfile
└── .env.example
```

## Data Flow

1. **Contact Form**: User fills → Next.js client validation (Zod) → POST /api/contact → FastAPI validates (Pydantic) → stores in PostgreSQL → sends email notification to admin
2. **Application**: User fills long form → Zod validation → POST /api/applications → Pydantic → DB → email notification + auto-reply
3. **Newsletter**: Email → POST /api/newsletter → DB → confirmation email
4. **Blog**: Static pages via Next.js ISR — content can be kept as MDX files in frontend, no backend needed. If content management needed later, add a CMS.

## Design Principles

1. **Simplicity First**: No unnecessary abstraction. Shared code only when repeated 3+ times.
2. **Domain-Driven**: Pages mirror the sitemap. Components mirror sections.
3. **No Micro-files**: Each component is a single file. No index.ts barrel exports for components.
4. **Server-First**: Default to React Server Components. Only add `"use client"` when interactivity needed.
5. **CRO-First**: Every page has a primary CTA. Every section builds toward conversion.
