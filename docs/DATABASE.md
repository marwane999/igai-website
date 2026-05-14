# DATABASE SCHEMA & MIGRATIONS

## PostgreSQL Tables

### contact_submissions
```sql
CREATE TABLE contact_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_read BOOLEAN DEFAULT FALSE
);

CREATE INDEX idx_contact_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_is_read ON contact_submissions(is_read);
```

### applications
```sql
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Step 1: Personal
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    email VARCHAR(255) NOT NULL,
    gender VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female')),
    marital_status VARCHAR(10) NOT NULL CHECK (marital_status IN ('single', 'married')),
    nationality VARCHAR(100) NOT NULL,
    occupation TEXT NOT NULL,
    address TEXT NOT NULL,
    permanent_address TEXT,
    phone VARCHAR(50) NOT NULL,
    passport_number VARCHAR(50),
    emergency_contact TEXT NOT NULL,

    -- Step 2: Academic
    familiar_with_script BOOLEAN NOT NULL,
    studied_before BOOLEAN NOT NULL,
    previous_study JSONB DEFAULT '[]'::jsonb,
    spoken_level VARCHAR(10) NOT NULL,
    reading_level VARCHAR(10) NOT NULL,
    writing_level VARCHAR(10) NOT NULL,
    aural_level VARCHAR(10) NOT NULL,
    english_level VARCHAR(10) NOT NULL,
    french_level VARCHAR(10) NOT NULL,

    -- Step 3: Housing
    been_to_arab_country BOOLEAN NOT NULL,
    been_to_morocco BOOLEAN,
    needs_housing BOOLEAN NOT NULL,
    housing_preference VARCHAR(20) NOT NULL CHECK (housing_preference IN ('igai-residence', 'homestay')),
    term_preference VARCHAR(20) NOT NULL,
    special_needs TEXT,

    -- Step 4: Statement
    personal_statement TEXT NOT NULL,

    -- Metadata
    ip_address VARCHAR(45),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected'))
);

CREATE INDEX idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_nationality ON applications(nationality);
```

### newsletter_subscribers
```sql
CREATE TABLE newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    unsubscribed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_active ON newsletter_subscribers(is_active);
```

## Migration Strategy (Alembic)

Auto-generate migrations on startup:
```python
# In backend/app/main.py
@app.on_event("startup")
async def run_migrations():
    from alembic.config import Config
    from alembic import command
    alembic_cfg = Config("alembic.ini")
    command.upgrade(alembic_cfg, "head")
```

The `migrations/` folder is committed to git. On first deploy, Alembic detects no tables and creates all. On subsequent deploys, it applies only new migrations.

## Database Configuration

```env
# .env for backend
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/igai_db
DATABASE_URL_SYNC=postgresql://user:password@localhost:5432/igai_db  # for Alembic
```
