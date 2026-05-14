# ROUTING & API

## Frontend Routes (Next.js 16 App Router)

| Path | Page | Type |
|------|------|------|
| `/` | Home | SSR |
| `/about` | About / Overview | SSR |
| `/philosophy` | Our Philosophy | SSR |
| `/team` | Our Team | SSR |
| `/global-platform` | A Global Platform | SSR |
| `/academics/classical-arabic` | Classical Arabic | SSR |
| `/academics/modern-standard-arabic` | Modern Standard Arabic | SSR |
| `/academics/darija` | Colloquial Moroccan Arabic | SSR |
| `/academics/professional-programs` | Professional & Group Programs | SSR |
| `/academics/other-courses` | Other Courses | SSR |
| `/academics/online` | Learn Arabic Online | SSR |
| `/admissions/academic-calendar` | Academic Calendar | SSR |
| `/admissions/private-tutoring` | Private Tutoring | SSR |
| `/admissions/tuition` | Tuition | SSR |
| `/admissions/financial-aid` | Financial Aid | SSR |
| `/admissions/apply` | Apply Now | SSR + Client Form |
| `/student-life/housing-food` | Housing & Food | SSR |
| `/student-life/safety-health` | Safety & Health | SSR |
| `/student-life/trips-activities` | Trips & Excursions | SSR |
| `/student-life/travel-visa` | Travel & Visa | SSR |
| `/student-life/internships-volunteering` | Internships | SSR |
| `/fulbright-hays` | Fulbright-Hays Program | SSR |
| `/contact` | Contact Us | SSR + Client Form |
| `/blog` | Blog List | ISR (revalidate: 1hr) |
| `/blog/[slug]` | Blog Post | ISR (revalidate: 1hr) |

## Backend API Endpoints (FastAPI)

| Method | Endpoint | Purpose | Request Body | Response |
|--------|----------|---------|-------------|----------|
| GET | `/api/health` | Health check | - | `{status: "ok"}` |
| POST | `/api/contact` | Contact form submission | `{name, email, subject, message}` | `{success: true, id}` |
| POST | `/api/applications` | Student application | Multi-field form (see schema) | `{success: true, id}` |
| POST | `/api/newsletter` | Newsletter subscription | `{email}` | `{success: true}` |

### CORS Configuration
```
Allow origins: [frontend-domain.com, localhost:3000]
Allow methods: GET, POST
Allow headers: Content-Type, Authorization
```

### Rate Limiting
- Contact form: 3 submissions per IP per hour
- Applications: 2 submissions per IP per hour
- Newsletter: 5 per IP per hour

### Error Response Format
```json
{
  "detail": "Human-readable error message",
  "errors": [
    {"field": "email", "message": "Invalid email format"}
  ]
}
```

## Form Schemas

### Contact Form
```typescript
interface ContactForm {
  name: string;        // min 2, max 100
  email: string;       // valid email
  subject: string;     // min 3, max 200
  message: string;     // min 10, max 2000
}
```

### Application Form (Multi-step)
```typescript
interface ApplicationForm {
  // Step 1: Personal
  firstName: string;
  lastName: string;
  dateOfBirth: string; // YYYY-MM-DD
  email: string;
  gender: 'male' | 'female';
  maritalStatus: 'single' | 'married';
  nationality: string;
  occupation: string;
  address: string;
  phone: string;
  passportNumber?: string;
  emergencyContact: string;

  // Step 2: Academic
  familiarWithArabicScript: boolean;
  studiedArabicBefore: boolean;
  previousStudy: { duration: string; institution: string; level: string; books: string; units: string }[];
  spokenLevel: 'poor' | 'fair' | 'good' | 'excellent';
  readingLevel: 'poor' | 'fair' | 'good' | 'excellent';
  writingLevel: 'poor' | 'fair' | 'good' | 'excellent';
  auralLevel: 'poor' | 'fair' | 'good' | 'excellent';
  englishLevel: 'poor' | 'fair' | 'good' | 'excellent';
  frenchLevel: 'poor' | 'fair' | 'good' | 'excellent';

  // Step 3: Housing & Preferences
  beenToArabCountry: boolean;
  beenToMorocco: boolean;
  needsHousing: boolean;
  housingPreference: 'igai-residence' | 'homestay';
  termPreference: 'fall' | 'winter' | 'spring' | 'summer' | 'private';
  specialNeeds: string;

  // Step 4: Statement
  personalStatement: string; // 300-400 words
}
```
