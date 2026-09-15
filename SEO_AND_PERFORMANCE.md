# SEO & Performance — Lumina Advisory

Practical playbook for Yolandi. Everything is grouped as **shipped**, **owner actions**, or **future refinements**, in priority order.

---

## ✅ Shipped in the latest deploy

These went live in the current commit — you just need to run **cPanel → Git Version Control → Update from Remote → Deploy HEAD Commit** for them to take effect on the live site.

### SEO
- **`sitemap.xml`** at `https://luminalegacy.co.za/sitemap.xml` — lists every page with priority and freshness hints
- **`robots.txt`** at `https://luminalegacy.co.za/robots.txt` — tells crawlers everything's fair game and where the sitemap lives
- **Per-page metadata** for Home, About, Services, Community, Contact, Insights, Testimonials — each page now has its own title, description, and social preview instead of sharing one generic set
- **JSON-LD structured data** in the site head:
  - `ProfessionalService` schema with your name, contact, Johannesburg address, area served, and areas of expertise
  - `Person` schema for Yolandi with MBA credential
  - `WebSite` schema linking everything together
  - This is what makes Google eligible to show a knowledge panel, star ratings later, and richer SERP snippets
- **`metadataBase`** set to `https://luminalegacy.co.za` — fixes the build warning where social share previews were pointing to `localhost:3000`
- **Broken OG image path fixed** — was `/images/stock/image1.jpeg` (doesn't exist) → now points to `/images/heroes/home-hero.jpg`
- **Canonical URLs** on every page — prevents duplicate-content penalties

### Performance
- **`.htaccess` fully upgraded** on the server with:
  - **gzip compression** for HTML/CSS/JS/SVG/JSON → payload ~65% smaller
  - **Aggressive cache headers**: CSS/JS cached 1 year (safe — Next hashes filenames), images 6 months, HTML uncached (so updates propagate immediately)
  - **Security headers**: HSTS (6-month), X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
- **Hero image preload** on every page — LCP paints faster because the browser starts downloading `home-hero.jpg` before it parses the CSS
- **Google Fonts preconnect** — knocks 100-200ms off first paint

---

## 🎯 Owner actions to do this week (30 min total)

These need **you** — I can't do them from code.

### 1. Submit the sitemap to Google (5 min) — biggest single SEO win
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → enter `https://luminalegacy.co.za`
3. Verify ownership (easiest: HTML meta tag — I can add it to the site if you tell me the code)
4. Once verified: left sidebar → **Sitemaps** → enter `sitemap.xml` → Submit

Google typically crawls within 24–48 hours after this.

### 2. Set up Google Business Profile (10 min) — huge win for "Lumina Advisory Johannesburg" searches
1. Go to [business.google.com](https://business.google.com)
2. Add your business:
   - Name: **Lumina Advisory**
   - Category: **Business consultant** (or **Executive coach**)
   - Location: Johannesburg (you can hide the exact address if working from home — set it as a service area)
   - Phone: `073 296 0488`
   - Website: `https://luminalegacy.co.za`
3. Verify (postcard or video)
4. Once live, ask 3-5 clients to leave Google reviews. Reviews are the single biggest local-SEO signal.

### 3. Bing / Microsoft (5 min)
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters) and add the same site + sitemap. Bing powers ChatGPT search, Duck Duck Go, and Yahoo, so it's not optional anymore.

### 4. LinkedIn Company Page linked to the site (10 min)
1. If you have a personal LinkedIn already, add a Company Page for Lumina Advisory
2. Set the website URL to `https://luminalegacy.co.za`
3. In `src/lib/data.ts` there's a `linkedin: "#"` field — send me your Lumina LinkedIn URL and I'll wire it in so the footer links point to the right place. This is one of the strongest backlinks you can create for free.

---

## 📸 Compress the hero images (single biggest performance win still available)

Right now `/public/images/heroes/` has:

| File | Size | Target |
|---|---|---|
| `home-hero.jpg` | 1,430 KB | ~200 KB |
| `about.jpg` | 1,410 KB | ~200 KB |
| `testimonials.jpg` | 750 KB | ~150 KB |
| `community.jpg` | 610 KB | ~150 KB |
| `insights.jpg` | 530 KB | ~150 KB |
| `contact.jpg` | 460 KB | ~130 KB |
| `services.jpg` | 380 KB | ~130 KB |
| `growth-ambient.jpg` | 460 KB | ~130 KB |

**Total is 9.85 MB** — a lot of data to send to every mobile visitor. Getting this down to ~1.5 MB total will roughly double perceived load speed on slower networks (i.e. most of South Africa).

### Fastest way (2 minutes per image, zero technical skill)

1. Open [squoosh.app](https://squoosh.app) (Google's free tool, works in your browser, no upload — everything runs locally)
2. Drag `home-hero.jpg` in
3. On the right panel:
   - **Compress**: MozJPEG (default)
   - **Quality**: 72–78
   - Look at the file-size counter — it'll tell you "70% smaller"
4. If it still looks good visually, hit the download button
5. Drop the downloaded file back into `lumina-advisory/public/images/heroes/` overwriting the old one
6. Repeat for each hero image

For even more savings, choose **WebP** instead of MozJPEG — same visual quality at ~30% smaller than JPEG. But keep the file extension something the site knows about; if you switch to WebP, tell me and I'll update the code to reference `.webp` instead of `.jpg`.

Once you've compressed them, run `git status` — commit + push + redeploy and the site will feel dramatically faster on mobile.

---

## 🔮 Future refinements (do these when the site has real traffic)

Order of impact from highest to lowest:

1. **Write actual Insights articles** — content is 60% of SEO. The starter kit in `SHEETS_SETUP.md` gives you 6 legitimate topics. Even one 800-word article on LinkedIn per fortnight, cross-referenced on the site, is more valuable than any technical tweak I can make.

2. **Get 2–3 backlinks** from South African directories: BizCommunity, Business Partners SA, SA Coach Directory, Wits/UCT/GIBS alumni pages if applicable. These signal to Google that Lumina is a legitimate business.

3. **Add author schema to each Insight** — when you have real articles, I can extend the JSON-LD so each article shows Yolandi as the author with her credentials. Boosts SERP click-through.

4. **Track with Google Analytics 4** — I'll add the tag once you create the property. Zero-cost, tells you which pages actually convert to WhatsApp/contact clicks.

5. **Convert hero images to WebP or AVIF** — 30-50% smaller than JPEG at the same visual quality. Real win but only after step 1 (compress the existing JPEGs first).

6. **Add a favicon set** (16, 32, 180, 192, 512 px) so bookmarks and PWA installs look polished. I can generate them if you give me a logo.

7. **Preload the Cormorant font** — currently loaded via `<link rel="preconnect">` which is good; explicitly preloading the woff2 file would shave ~50ms off the first-paint on the heading.

---

## 📊 How to measure this yourself

Run these two free tests to see the impact:

1. **[pagespeed.web.dev](https://pagespeed.web.dev)** — enter `https://luminalegacy.co.za`. Aim for Performance ≥ 85 on mobile.
2. **[search.google.com/test/rich-results](https://search.google.com/test/rich-results)** — enter the same URL. This validates the JSON-LD structured data. Green ticks = eligible for rich SERP features.

Do both tests **before and after** you compress the hero images and you'll see a very visible jump.

---

## Where things live in the code (for future me)

| Concern | File |
|---|---|
| Sitemap generation | `src/app/sitemap.ts` |
| robots.txt | `src/app/robots.ts` |
| Global metadata + JSON-LD + preloads | `src/app/layout.tsx` |
| Per-page metadata | `src/app/<route>/layout.tsx` |
| Server cache/compression/security headers | `lumina-advisory/public/.htaccess` |
| Image assets | `lumina-advisory/public/images/` |
