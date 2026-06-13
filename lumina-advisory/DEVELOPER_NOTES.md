# Lumina Advisory — Developer Notes

> Reference document for all future development and maintenance.
> Read this before making any changes to the codebase.

---

## Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 15 (App Router)           |
| Language    | TypeScript                        |
| Styling     | Tailwind CSS v4                   |
| Animations  | Framer Motion (ready to use)      |
| Forms       | Web3Forms                         |
| Scheduling  | Calendly (free tier)              |
| Analytics   | Google Analytics 4                |
| Fonts       | Playfair Display + Inter (Google) |

---

## Project Structure

```
src/
├── app/                        # Pages (Next.js App Router)
│   ├── layout.tsx              # Root layout — fonts, metadata, Navbar, Footer, WhatsApp
│   ├── globals.css             # Design tokens and base styles
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── services/page.tsx       # Services page
│   ├── community/page.tsx      # Community page
│   ├── insights/page.tsx       # Insights / blog page
│   └── contact/page.tsx        # Contact page
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav + mobile menu
│   │   ├── Footer.tsx          # Footer with links + contact
│   │   └── WhatsAppButton.tsx  # Floating WhatsApp button (all pages)
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button (primary / secondary / outline)
│   │   ├── SectionWrapper.tsx  # Consistent section padding + max-width
│   │   └── PageHero.tsx        # Hero banner for inner pages
│   └── sections/               # Home page section components
│       ├── HeroSection.tsx
│       ├── TrustIndicators.tsx
│       ├── ServicesOverview.tsx
│       ├── WhyLumina.tsx
│       ├── FounderIntro.tsx
│       ├── Testimonials.tsx
│       ├── CommunityCTA.tsx
│       ├── FinalCTA.tsx
│       └── ContactForm.tsx     # Web3Forms contact form
│
├── lib/
│   └── data.ts                 # ★ ALL SITE CONTENT LIVES HERE ★
│
└── types/                      # TypeScript types (add as needed)
```

---

## ★ The Golden Rule: Edit data.ts for content changes

Everything the client needs to update — copy, contact info, services,
testimonials, team bios — lives in **one file**:

```
src/lib/data.ts
```

Do not hard-code content inside components. Always reference `data.ts`.

---

## Brand Colours (do not change without client approval)

| Name       | Hex       | Usage                          |
|------------|-----------|--------------------------------|
| Navy       | `#0F172A` | Backgrounds, headings, nav     |
| Gold       | `#C9A227` | CTAs, accents, highlights      |
| Ivory      | `#F8F7F4` | Page background                |
| Slate      | `#475569` | Body text, descriptions        |
| White      | `#FFFFFF` | Cards, form fields             |

---

## Fonts

- **Headings** — Playfair Display (loaded via `--font-playfair` CSS variable)
- **Body** — Inter (loaded via `--font-inter` CSS variable)
- Both loaded in `src/app/layout.tsx` via `next/font/google`

---

## Common Tasks

### Add a new nav link
Edit `NAV_LINKS` array in `src/lib/data.ts`.

### Update contact details
Edit the `SITE` object in `src/lib/data.ts`.

### Add / edit a service
Edit the `SERVICES` array in `src/lib/data.ts`.
Each service has: `id`, `icon`, `title`, `shortDescription`, `offerings[]`.

### Add a testimonial
Add to the `TESTIMONIALS` array in `src/lib/data.ts`.
Fields: `id`, `quote`, `author`, `rating`.

### Add a blog article
Add to the `ARTICLES` array in `src/lib/data.ts`.
Fields: `id`, `slug`, `category`, `title`, `summary`, `readingTime`, `publishDate`, `image`, `featured`.
Set `featured: true` on the article you want displayed large at the top.

### Add a community event
1. Create an `EVENTS` array in `src/lib/data.ts`
2. In `src/app/community/page.tsx`, replace the "Events Coming Soon" block with event cards

### Add the founder photo
1. Place image at `public/images/founder.jpg`
2. In `src/components/sections/HeroSection.tsx`, replace the placeholder div with:
   ```tsx
   <Image src="/images/founder.jpg" alt="Yolandi Pietersen" fill className="object-cover" priority />
   ```
3. Repeat for `FounderIntro.tsx` and `src/app/about/page.tsx`

### Set up Web3Forms (contact form)
1. Register at https://web3forms.com (free)
2. Create an access key
3. Add it to `SITE.web3forms.accessKey` in `src/lib/data.ts`

### Set up Calendly
1. Create a Calendly event type at https://calendly.com
2. Copy the booking URL
3. Add it to `SITE.calendly` in `src/lib/data.ts`

### Set up WhatsApp Community link
1. Create the WhatsApp Community and copy the invite link
2. Add it to `SITE.whatsapp.communityLink` in `src/lib/data.ts`

### Update LinkedIn URL
Set `SITE.linkedin` in `src/lib/data.ts`.

### Add Google Analytics
In `src/app/layout.tsx`, add the GA4 Script tag:
```tsx
import Script from "next/script"
// In <head>:
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
<Script id="ga" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}</Script>
```

---

## Adding Framer Motion Animations

Framer Motion is already installed. To animate a component:

```tsx
"use client"; // Required for motion components
import { motion } from "framer-motion";

// Replace <div> with <motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* content */}
</motion.div>
```

Keep animations subtle — short durations (0.3–0.6s), fade + slight upward movement.

---

## Adding a New Page

1. Create `src/app/[page-name]/page.tsx`
2. Add the route to `NAV_LINKS` in `src/lib/data.ts` if it should appear in nav
3. Use `<PageHero>` for the top banner and `<SectionWrapper>` for each section
4. Export a `metadata` object for SEO

Template:
```tsx
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description for SEO.",
};

export default function NewPage() {
  return (
    <>
      <PageHero headline="Headline" subheading="Subheading" />
      <SectionWrapper>
        {/* content */}
      </SectionWrapper>
    </>
  );
}
```

---

## Phase 2 Features (future)

- Newsletter signup (Mailchimp or ConvertKit integration)
- Resource downloads (PDF gating)
- Webinar registration cards
- Case studies section

## Phase 3 Features (future)

- Client portal (requires auth — consider NextAuth.js)
- Online courses (consider Teachable embed or custom)
- Payment gateway (Paystack for ZA market)
- Members-only content

---

## Running Locally

```bash
cd lumina-advisory
npm run dev       # Start dev server → http://localhost:3000
npm run build     # Production build
npm run start     # Run production build locally
npm run lint      # Run ESLint
```

---

## Deployment

Recommended: **Vercel** (zero-config Next.js hosting)
1. Push to GitHub
2. Import repo on vercel.com
3. Set custom domain: luminalegacy.co.za

---

*Last updated: 2025*
