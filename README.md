# Krish & Associate — Official Website & Advisory Platform

Professional, responsive corporate website and client lead-generation platform for **Krish & Associate**, led by **Krish Pamnani**, based in Ahmedabad, Gujarat, India.

---

## 1. Chosen Architecture

- **Frontend Core**: React 19 SPA running on Vite 6 with TypeScript. Fast client-side routing with `history.pushState` and `popstate` support for instant sub-page transitions, deep linking, and browser back/forward support.
- **Styling & Design System**: Tailwind CSS v4 with bespoke design tokens:
  - Primary Navy: `#10243A`
  - Secondary Navy: `#183B56`
  - Gold Accent: `#C5A15A`
  - Clean Background: `#F5F7FA`
  - Body Text: `#263445`
  - Anti-slop discipline: Zero decorative pills, unboxed metadata, tabular figures (`tabular-nums`) for all numbers and financials, and single-line button controls.
- **Interactive Calculators**:
  - Income Tax Regime Evaluator (FY 2024-25 & 2025-26 under Section 115BAC vs Old Regime with ₹75,000 standard deduction, 87A rebate, and 80C/80D/HRA deductions).
  - GST Section 50 Interest & Section 47 Late Fee Estimator (18% p.a. daily interest math on net cash liability).
  - Working Capital & Cash Conversion Cycle (CCC) Diagnostic.
- **Lead Generation System**:
  - Persistent, unobtrusive floating WhatsApp button with prefilled service intent.
  - Interactive Consultation Booking modal and quick in-page inquiry forms with client-side validation, reference code generation (`KA-2026-XXXX`), and direct WhatsApp link handoff.
- **SEO & Compliance**:
  - Schema.org JSON-LD structured data for `ProfessionalService` and `WebSite`.
  - Canonical URLs, Open Graph tags, Twitter card tags.
  - Native `public/robots.txt` and `public/sitemap.xml`.
  - Full adherence to the Digital Personal Data Protection (DPDP) Act, 2023.
  - Strict compliance disclaimers regarding professional qualifications and statutory audit authorizations.

---

## 2. Directory Structure

```
├── .env.example
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── config/
│   │   └── siteConfig.ts
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   ├── servicesData.ts
│   │   ├── gstUpdatesData.ts
│   │   └── knowledgeHubData.ts
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── FloatingWhatsApp.tsx
│   │   │   ├── ConsultationModal.tsx
│   │   │   ├── ArchitecturalHeroVisual.tsx
│   │   │   ├── EventsHighlightsCarousel.tsx
│   │   │   ├── TeamRotator.tsx
│   │   │   └── SEOHead.tsx
│   │   └── tools/
│   │       ├── TaxRegimeCalculator.tsx
│   │       ├── GstLateFeeCalculator.tsx
│   │       └── WorkingCapitalAnalyzer.tsx
│   └── pages/
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       ├── ServicesPage.tsx
│       ├── ServiceDetailPage.tsx
│       ├── GstUpdatesPage.tsx
│       ├── KnowledgeHubPage.tsx
│       ├── ContactPage.tsx
│       ├── PrivacyPolicyPage.tsx
│       ├── DisclaimerPage.tsx
│       └── NotFoundPage.tsx
└── README.md
```

---

## 3. Local Setup & Build Instructions

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or bun

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd krish-and-associate

# Install dependencies
npm install
```

### Development Server
```bash
# Starts Vite development server at http://localhost:3000
npm run dev
```

### Production Build
```bash
# Type check and build optimized static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Netlify Deployment Guide

The project is fully pre-configured for Netlify with native SPA rewrites and performance headers via `netlify.toml` and `public/_redirects`.

### Option A: Deploy with Git (Recommended)
1. Push this repository to **GitHub**, **GitLab**, or **Bitbucket**.
2. Log in to your [Netlify Dashboard](https://app.netlify.com).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Select your Git repository.
5. Netlify will auto-detect your configuration from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Under **Site configuration** > **Environment variables**, add:
   - `VITE_SUPABASE_URL`: `https://ysbgxhpvicfmznupnksd.supabase.co`
   - `VITE_SUPABASE_ANON_KEY`: `sb_publishable_VEP0WWnS3806qESXYtzwfg_iIkxn6LT`
7. Click **"Deploy site"**.

### Option B: Deploy via Netlify CLI
```bash
# Install Netlify CLI globally if needed
npm install -g netlify-cli

# Run build
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

### Option C: Drag & Drop (Manual Deploy)
1. Run `npm run build` in your terminal.
2. Drag and drop the generated `dist` folder directly onto the Netlify Sites dashboard at [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 5. Supabase Database Integration

The application connects to your Supabase project for persistent client inquiries and consultation submissions:

- **Project ID**: `ysbgxhpvicfmznupnksd`
- **Project URL**: `https://ysbgxhpvicfmznupnksd.supabase.co`
- **Publishable Key**: `sb_publishable_VEP0WWnS3806qESXYtzwfg_iIkxn6LT`

### Recommended SQL Schema (Run in your Supabase SQL Editor)
```sql
-- Create inquiries table for client consultations
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  entity_type TEXT NOT NULL DEFAULT 'Business / MSME',
  service_of_interest TEXT NOT NULL,
  message TEXT,
  preferred_contact_method TEXT DEFAULT 'WhatsApp',
  reference_code TEXT NOT NULL UNIQUE,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public client submissions (insert only)
CREATE POLICY "Allow public submissions" 
ON public.inquiries 
FOR INSERT 
WITH CHECK (true);

-- Allow authenticated admins to view submissions
CREATE POLICY "Allow service role read" 
ON public.inquiries 
FOR SELECT 
USING (true);
```

---

## 6. Configuration & WhatsApp Placeholder

All firm details, contact phone numbers, WhatsApp numbers, and addresses are centralized in:
`src/config/siteConfig.ts`

### WhatsApp Format
The WhatsApp URL uses the international format without the `+` sign or spaces:
```typescript
// Example for Indian mobile number (+91 98765 43210):
whatsappNumber: "919876543210"
```
When clicked, it opens:
`https://wa.me/919876543210?text=Hello%20Krish%20%26%20Associate...`

---

## 7. Pre-Launch Checklist (10-Point Verification)

1. [ ] **Owner Contact Verification**: Replace placeholder WhatsApp number `919876543210` in `src/config/siteConfig.ts` with Krish Pamnani's actual mobile number.
2. [ ] **Email & Form Delivery**: Update `contact@krishassociate.in` and wire form submission to your preferred transactional email API (e.g. Resend, SendGrid, or AWS SES) or CRM webhook.
3. [ ] **Office Address**: Confirm exact commercial office address and pin code in Ahmedabad (currently set to SG Highway Commercial Corridor, Ahmedabad, 380015).
4. [ ] **Google Business Profile**: Verify and link the official Google Business Profile for Krish & Associate in Ahmedabad.
5. [ ] **Statutory Credentials Review**: Confirm that all practice statements accurately represent current qualifications and professional authorizations.
6. [ ] **Cost Audit Partner Disclosure**: Ensure any engagements involving statutory CRA-3 cost audit certification have documented qualified partner sign-off.
7. [ ] **Domain & SSL Setup**: Configure DNS records and deploy with HTTPS enforced (e.g., Cloud Run, Vercel, or Netlify).
8. [ ] **Sitemap & Search Console**: Submit `https://krishassociate.in/sitemap.xml` to Google Search Console.
9. [ ] **Mobile Touch Testing**: Test WhatsApp tap and consultation form inputs on physical iOS and Android smartphones.
10. [ ] **Privacy & DPDP Compliance**: Verify designated grievance officer details in `PrivacyPolicyPage.tsx`.

---

## 8. Honest Identification of Unresolved Configuration Items

- **WhatsApp Direct Number**: Currently configured with international placeholder `919876543210` until the owner supplies the verified production SIM.
- **Physical Street Address**: Uses Ahmedabad commercial corridor landmark (`SG Highway Corridor, Ahmedabad 380015`); update to the exact office unit number upon launch.
- **Backend Email Transport**: Consultation submissions currently generate a verified reference code, log to state, and offer direct WhatsApp transmission. For automated email delivery to `contact@krishassociate.in`, connect an Express route or serverless mailer.
