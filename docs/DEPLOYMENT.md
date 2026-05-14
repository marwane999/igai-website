# DEPLOYMENT GUIDE

## Docker Setup

### Frontend Dockerfile
```dockerfile
# frontend/Dockerfile
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./

EXPOSE 3000
CMD ["npm", "start"]
```

### Backend Dockerfile
```dockerfile
# backend/Dockerfile
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### docker-compose.yml
```yaml
version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
    depends_on:
      - backend
    restart: unless-stopped

  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - SMTP_HOST=${SMTP_HOST}
      - SMTP_PORT=${SMTP_PORT}
      - SMTP_USER=${SMTP_USER}
      - SMTP_PASSWORD=${SMTP_PASSWORD}
      - CONTACT_EMAIL=${CONTACT_EMAIL}
      - APP_NAME=Ibn Ghazi Arabic Institute
      - CORS_ORIGINS=${CORS_ORIGINS}
    depends_on:
      db:
        condition: service_healthy
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_DB=${POSTGRES_DB}
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER} -d ${POSTGRES_DB}"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped

volumes:
  pgdata:
```

## Environment Variables

### frontend/.env.example
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=                    # Google Analytics (optional)
```

### backend/.env.example
```env
APP_NAME=Ibn Ghazi Arabic Institute
DATABASE_URL=postgresql+asyncpg://igai_user:igai_pass@localhost:5432/igai_db
DATABASE_URL_SYNC=postgresql://igai_user:igai_pass@localhost:5432/igai_db
CORS_ORIGINS=http://localhost:3000,https://yourdomain.com
SECRET_KEY=your-secret-key-here

# SMTP (for contact form & applications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=igai.fez@gmail.com

# Rate Limiting (optional)
RATE_LIMIT_ENABLED=true
```

### docker-compose.env.example
```env
# Database
POSTGRES_DB=igai_db
POSTGRES_USER=igai_user
POSTGRES_PASSWORD=change-this-password

# Backend API URL (for frontend)
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Backend DB URL
DATABASE_URL=postgresql+asyncpg://igai_user:igai_pass@db:5432/igai_db

# SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
CONTACT_EMAIL=igai.fez@gmail.com

# CORS
CORS_ORIGINS=https://yourdomain.com
```

## deploy.js — Env Injector for Easypanel

```javascript
// deploy.js
// Run: node deploy.js
// This generates the JSON you paste into Easypanel env variables

const env = {
  // Frontend
  NEXT_PUBLIC_API_URL: "https://api.igai-fez.com",
  NEXT_PUBLIC_SITE_URL: "https://www.igai-fez.com",

  // Backend
  APP_NAME: "Ibn Ghazi Arabic Institute",
  DATABASE_URL: "postgresql+asyncpg://igai_user:password@localhost:5432/igai_db",
  CORS_ORIGINS: "https://www.igai-fez.com",
  SECRET_KEY: require("crypto").randomBytes(32).toString("hex"),

  // SMTP
  SMTP_HOST: "smtp.gmail.com",
  SMTP_PORT: "587",
  SMTP_USER: "",
  SMTP_PASSWORD: "",
  CONTACT_EMAIL: "igai.fez@gmail.com",

  // DB for compose
  POSTGRES_DB: "igai_db",
  POSTGRES_USER: "igai_user",
  POSTGRES_PASSWORD: require("crypto").randomBytes(16).toString("hex"),
};

console.log(JSON.stringify(env, null, 2));
```

## Deployment Steps (Easypanel)

1. Push code to GitHub repository
2. In Easypanel, create a new project
3. Add the Git repository
4. Set build command: `docker-compose up -d` (Easypanel handles this)
5. Paste env variables from deploy.js output
6. Ensure PostgreSQL service is running (Easypanel has built-in PostgreSQL — use its connection string)
7. Deploy

> **Note**: Easypanel already has PostgreSQL installed. You can either:
> - Use Easypanel's managed PostgreSQL service (recommended) and set DATABASE_URL accordingly
> - Use the db service in docker-compose.yml

## Post-Deployment Checklist

- [ ] Frontend accessible at domain
- [ ] Backend API returns health at /api/health
- [ ] Contact form sends email
- [ ] Application form submits successfully
- [ ] All images load (use old site image URLs fallback)
- [ ] SSL/HTTPS working (Easypanel handles via Let's Encrypt)
- [ ] Google Analytics tracking (if configured)
- [ ] Mobile responsive verified
- [ ] Lighthouse score > 80
