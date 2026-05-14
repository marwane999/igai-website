# CODING RULES

## General Principles

1. **Simplicity First**: Write the least amount of code that solves the problem. No premature optimization.
2. **No Comments**: Code should be self-documenting. No explanatory comments unless absolutely necessary (e.g., complex regex).
3. **Domain-Driven Structure**: Organize by feature/page, not by file type. Components live near their pages.
4. **No Micro-files**: Don't split a component into 5 files. One component = one file. Keep barrel files minimal.
5. **DRY only when repeated 3+ times**: Don't abstract prematurely. Wait for the third occurrence.
6. **Server-First**: Always start as a React Server Component. Only add `"use client"` when you need:
   - useState/useReducer
   - useEffect
   - onClick/onSubmit handlers
   - browser-only APIs
   - Custom hooks that use the above

## TypeScript Rules

1. **Strict mode**: `strict: true` in tsconfig.json
2. **No `any`**: Use `unknown` if type is truly dynamic, then narrow with type guards.
3. **Prefer `interface` over `type`** for object shapes (better error messages, extends support).
4. **Use `type` for unions, intersections, and mapped types**.
5. **Export types**: Export all shared types from a `types.ts` near usage.
6. **No `as` casts**: Use type guards or zod validation instead.

## React / Next.js Rules

1. **Server Components by default**: All pages are RSC unless client interactivity needed.
2. **Client Components**: Suffix with `"use client"`, extract minimal interactive parts.
3. **No prop drilling beyond 3 levels**: Use React Server Components (composition pattern) instead of Context for data.
4. **Minimal Context**: Only use Context for truly global state (theme, user auth). For page-level data, use composition.
5. **No Redux, No Zustand, No Recoil**: Next.js App Router + RSC eliminates client state management. If you need client state, use `useState` locally.
6. **Image optimization**: Always use `next/image` with explicit width/height. Preserve quality with `unoptimized` only for GIFs.
7. **Font loading**: Use `next/font` with `next/font/google` for Playfair Display + Inter. No FOUT/FOIT.

## Tailwind CSS v4 Rules

1. **CSS-first configuration**: All theme in `globals.css` using `@theme` directive. No `tailwind.config.js` needed.
2. **Use `@apply` sparingly**: Only for repeated utility patterns that appear 5+ times. Prefer utility classes in JSX.
3. **Custom colors**: Use `--color-*` convention in `@theme`, then `bg-primary`, `text-primary`, etc.
4. **Responsive**: Mobile-first. Use `sm:`, `md:`, `lg:`, `xl:` breakpoints.
5. **No custom CSS for layout**: Use Tailwind utilities for everything layout-related.

## FastAPI / Python Rules

1. **Async routes**: All API endpoints are async. Use `async def` and `await` for DB operations.
2. **Pydantic v2**: Use `BaseModel` from `pydantic`, not `pydantic.v1`.
3. **Type hints**: Every function has type hints. Use `| None` syntax (Python 3.10+).
4. **Service layer**: Business logic goes in `services/`, not in route handlers.
5. **No print()**: Use `loguru.logger` with appropriate level.
6. **Settings**: Use `pydantic-settings` (`BaseSettings`) for all env configuration.
7. **DB sessions**: Use `async with SessionLocal() as session` pattern. Dependency injection via `Depends(get_db)`.

## Error Handling

1. **Frontend**: Wrap API calls in try/catch. Show user-friendly toast/message on error. Don't show raw error objects.
2. **Backend**: Use HTTPException with appropriate status codes. Log errors with loguru. Return consistent error shape: `{detail: string, errors?: array}`.
3. **Forms**: Client-side validation with Zod before submission. Server-side validation with Pydantic after receiving.

## Performance Rules

1. **Lazy load below-fold images**: Use `loading="lazy"` on images below the fold.
2. **Preload hero image**: Use `<link rel="preload">` for the hero section image.
3. **Bundle size**: No library over 50KB gzipped without justification.
4. **No client-side routing libraries**: Next.js App Router handles all routing.
5. **ISR for blog**: Revalidate every 1 hour.

## Git / Deployment Rules

1. **No .env files committed**: Only `.env.example` files.
2. **No node_modules / __pycache__**: In .gitignore.
3. **Dockerfile multi-stage**: Frontend: build stage + nginx/production stage. Backend: Python slim image.
4. **Health check**: Backend has `/api/health` endpoint. Docker healthcheck configured.
