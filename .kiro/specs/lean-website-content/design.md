# Design Document

## Overview

This design implements the client's latest content and structure instructions on top of the current (post-redesign) editorial dark site. It is a content/data/structure update — no changes to the design system, animation style, or `lumina-section`/`lumina-glass-dark` visual language.

Scope, in order of structural impact:
1. Remove Community page + nav entry
2. Fold testimonials into About, remove the standalone Testimonials page + nav entry
3. Rewrite `SERVICES`, `WHY_LUMINA`→values, `FOUNDER`, `MISSION_VISION`, credentials data in `data.ts`
4. Update Home and About page components to consume the new data/sections
5. Update `sitemap.ts` to drop removed routes
6. Document the Google Sheets path for Insights content (no code change required for the articles themselves)

## Architecture Changes

### Routing
- Delete: `src/app/community/page.tsx`, `src/app/community/layout.tsx`
- Delete: `src/app/testimonials/page.tsx`, `src/app/testimonials/layout.tsx`
- `src/app/about/page.tsx` gains a new in-page section (testimonials) and an anchor id (`id="testimonials"`) so `/about#testimonials` works as a direct link target.

### Navigation (`NAV_LINKS` in `data.ts`)
Before:
```
Home, About, Services, Community, Insights, What People Are Saying, Contact
```
After:
```
Home, About, Services, Insights, Contact
```
Both `Navbar` and `Footer` consume `NAV_LINKS` directly, so this single change propagates everywhere without touching those components.

### Cross-page links to update
- Home → Featured Voice section → "Read more stories" link: `/testimonials` → `/about#testimonials`
- Any Community references (WhatsApp "Join the Community" button currently lives only on the Community page's Final CTA) — per Requirement 7.3, pending clarification. Default plan: drop it (it has nowhere natural to live without Community); the general WhatsApp floating button already covers "chat with us" on every page.
- `sitemap.ts`: remove the `/community/` and `/testimonials/` entries.

## Data Layer Changes (`src/lib/data.ts`)

### `NAV_LINKS`
Remove "Community" and "What People Are Saying" entries.

### `SERVICES`
Reorder and rewrite all 6 entries per client draft. New order (ids can stay the same or be renamed to match, e.g. `consulting-advisory` moves to index 0):

1. `consulting-advisory` — Independent Consulting & Advisory
2. `speaking-moderation` (new id, was `programme-direction`) — Speaking, Moderation & Programme Direction
3. `career-development` — Career & Professional Development
4. `training-skills` — Training & Skills Development
5. `facilitation` — Strategic Facilitation
6. `leadership` — Leadership Development

Each gets a new `shortDescription` and new `offerings` array per `page_content.md`. The `icon` field is kept per existing choices unless the client requests different icons.

Note: Home's "Practice Areas" section already maps `SERVICES` directly (`SERVICES.map(...)`), and Services page already maps `SERVICES` directly — no component changes needed, only data.

### `WHY_LUMINA` → repurposed as `CORE_VALUES_V2` (or rename `CORE_VALUES`)
Client's "The values that guide us" (People-Centred, Intentional Growth, Practical Impact) functionally replaces both the old `WHY_LUMINA` (3 pillars) and old `CORE_VALUES` (5 single-word values). Decision: consolidate into one array used only on About, since `WHY_LUMINA` is also currently used on Home's "Our Approach" section.

**Open design question (ties to Requirement 7.2):** Home's "Our Approach" section currently renders `WHY_LUMINA` (People-Centred / Consulting Expertise / Practical Solutions). The client's new "values that guide us" (People-Centred / Intentional Growth / Practical Impact) is similar but not identical wording, and is specified for About, not Home. Recommended approach: keep `WHY_LUMINA` as-is for Home's "Our Approach" (it's existing, approved copy, not called out for change), and add a **new** `CORE_VALUES` array for About's "values that guide us" section with the client's 3 new value names + descriptions. This avoids silently changing Home's copy, which the client didn't ask to change, while still satisfying the About page update. Will confirm with client if they intended to unify these into one set of values site-wide.

### `FOUNDER`
Replace `detailedBio` array with the client's new 5-point bio. Update `shortBio` if used elsewhere. Note the experience figure changes from "10+ years" (old bio) to "over eight years" (new bio) — intentionally different from Home's credentials ("9+ years"), per client's own numbers; flagged in Requirement 7 as worth a sanity check with the client but not blocking (both numbers came from the client's own draft).

### `MISSION_VISION`
Replace `whoWeAre` (5 paragraphs) with the client's single consolidated paragraph. `mission` and `vision` fields: pending clarification (Requirement 7.2) on whether to keep, drop, or fold in. Default: keep the fields in data.ts (cheap to retain) but remove the dedicated 2-column Mission/Vision UI section from About, replacing it with the 3-value section. If the client wants Mission/Vision visible, it can be added as a brief line within the "Who We Are" paragraph instead of its own section.

### `TRUSTED_BY` (new)
```ts
export const TRUSTED_BY = [
  { name: "FNB", logo: "/images/logos/fnb.svg" },        // placeholder path
  { name: "NWU", logo: "/images/logos/nwu.svg" },
  { name: "UJ", logo: "/images/logos/uj.svg" },
  { name: "UNISA", logo: "/images/logos/unisa.svg" },
  { name: "Daily Theta", logo: "/images/logos/daily-theta.svg" },
];
```
Actual logo files are not yet supplied (Requirement 7.4). Build the section with a graceful fallback (e.g. rendering the `name` as styled text) so the section still looks intentional before real logos arrive, rather than broken image icons.

### Credentials (Home's `CREDENTIALS` constant, currently inline in `page.tsx`, not in `data.ts`)
Update values:
```ts
const CREDENTIALS = [
  { number: "100%", label: "Black South African", sub: "female-owned consultancy" }, // kept, pending Req 7 confirmation
  { number: "9+", label: "Years", sub: "corporate & consulting experience" },
  { number: "MBA", label: "Cum Laude", sub: "Digital Transformation" },
  { number: "Level 1", label: "BBBEE", sub: "consultancy" },
];
```

### `TESTIMONIALS`
No data changes required — same 5 testimonials, now surfaced only via About's new section instead of a dedicated page.

### `ARTICLES` (static array in `data.ts`)
Not used for Insights anymore (confirmed: `InsightsList` fetches from Google Sheets, ignoring this array). Leave as-is or mark clearly deprecated in a comment to avoid future confusion.

## Component Changes

### `src/app/about/page.tsx`
New section order:
1. PageHero (unchanged)
2. Who We Are (single paragraph, replacing 5-paragraph array — minor JSX simplification since `MISSION_VISION.whoWeAre` can stay an array of 1 item, or change to a string; keeping it an array of 1 preserves the `.map()` code path with zero component changes)
3. "The values that guide us" (3-column, replacing the Mission/Vision 2-column section) — reuses the same numbered-pillar visual pattern already used for Mission/Vision (2-col → 3-col grid, same hairline/number style)
4. Our Founder (unchanged structure, new bio content)
5. **NEW:** Trusted By (logo strip — simple grid/row of 5 logos or name-chips, muted/grayscale style consistent with editorial tone)
6. **NEW:** In Their Words (testimonials) — mount `<TestimonialsSection />` with a wrapping `<div id="testimonials">` so `/about#testimonials` anchors correctly; add the client's intro line above it
7. Final CTA — update copy to "Let's explore how Lumina Advisory can support your growth, your people or your organisation." / button "Get in touch" (per client's About CTA draft), replacing current "Ready to work with us?" copy

### `src/app/page.tsx` (Home)
- Final CTA (section 7): headline → "READY TO TURN AMBITION INTO ACTION?", body → client's new paragraph, button text → "Get in touch" (href stays `/contact`)
- Featured Voice section (section 6):
  - Eyebrow/heading → "TRUSTED TO DELIVER IMPACT" (was "In Their Words")
  - `FEATURED_TESTIMONIAL` → reorder `TESTIMONIALS` (or select explicitly rather than always `[0]`) so a corporate-client quote is featured, per the client's "corporate client first" note
  - Attribution stays role-based ("Corporate Workshop Client" etc.) — already brand-first, not Yolandi-first, so no change needed there
  - "Read more stories" link target → `/about#testimonials`
  - This section remains a single static quote (not a carousel) — the "moves themselves" auto-advance behavior refers to the carousel component used on About (`TestimonialsSection.tsx`), which already auto-advances every 15s. No change needed to make testimonials "move" since that's existing, correct behavior in the component being reused on About.
- Credentials data: update per above
- Practice Areas: no JSX change, just consumes updated `SERVICES` array

### `src/components/layout/Navbar.tsx`
No code change expected (confirm it maps `NAV_LINKS` the same way `Footer.tsx` does) — removing entries from `NAV_LINKS` is sufficient.

### `src/app/sitemap.ts`
Remove the `/community/` and `/testimonials/` entries from the returned array.

### `src/app/layout.tsx` (JSON-LD)
Review for any mentions tied to removed pages. Current JSON-LD doesn't reference testimonials or community directly, so likely no change needed — verify during implementation.

## Deletions
- `src/app/community/page.tsx`
- `src/app/community/layout.tsx`
- `src/app/testimonials/page.tsx`
- `src/app/testimonials/layout.tsx`
- `COMMUNITY_BENEFITS` from `data.ts` (after confirming no other references)
- Possibly `EventsList.tsx` and the `eventsGid` Google Sheets config, pending Requirement 7.3 clarification on whether events move elsewhere

Before deleting any file, grep the codebase for its import path to confirm zero remaining references (consistent with the project's existing caution around dead code).

## Insights (Requirement 6) — DEFERRED, not part of this pass

The client has asked to come back to Insights later. No design decisions are being finalized here beyond the note that content is sourced live from a Google Sheet (`InsightsList.tsx` → `fetchArticles()` in `googleSheets.ts`), not from a static array — this is why it can't be solved by just editing `data.ts`. Revisit this section when the client is ready to proceed.

## Verification Approach

1. `npm run build` in `lumina-advisory` after each structural change (route deletion, data rewrite) to catch broken imports/types — static export (`output: "export"`) will fail loudly on any dangling reference to deleted routes.
2. Grep for `/community`, `/testimonials`, `COMMUNITY_BENEFITS`, `WHY_LUMINA` (where repurposed) across `src/` before and after changes.
3. Manually click through Navbar/Footer links post-change to confirm no 404s and that `/about#testimonials` scrolls to the right section.
4. Confirm `sitemap.xml` output (via build) no longer lists removed routes.
5. Visual check that About's new "Trusted By" and "In Their Words" sections read as intentional (not broken) given placeholder logos.
