# Requirements Document

## Introduction

This spec was originally based on a client review meeting where Yolandi Pietersen (founder of Lumina Advisory) asked for the website to feel "leaner" — less repetition, fewer sections per page. Since that meeting:

1. The live codebase went through a full editorial redesign (dark palette, glass surfaces, McKinsey-style editorial layouts) via 8 commits merged to `origin/main`. This redesign already resolved much of the original repetition problem (Home no longer inlines a duplicate "About Lumina" block, Services now uses a full-bleed editorial spread per service, etc.).
2. The client has now supplied **specific, close-to-final page copy** (see `page_content.md` at the repo root) along with explicit structural instructions:
   - Move "What People Are Saying" (testimonials) from its own page to a section under About
   - Remove the Community page entirely
   - Reorder and rewrite all 6 service descriptions and offerings
   - Add a new "Trusted By" logo section to About (FNB, NWU, UJ, UNISA, Daily Theta)
   - Replace the empty Insights state with two real mock articles
   - Update Home page CTAs, service teasers, and credentials copy

This requirements document now reflects the client's explicit new content and structure instructions, verified against the current (post-redesign) codebase.

## Requirements

### Requirement 1: Remove the Community page and its navigation entry

**User Story:** As the client, I want the Community page removed from the site entirely, since it's no longer part of the site's structure.

#### Acceptance Criteria

1. THE system SHALL delete the `/community` route (`src/app/community/page.tsx` and `src/app/community/layout.tsx`).
2. THE system SHALL remove the "Community" entry from `NAV_LINKS` in `data.ts`, which automatically removes it from both the Navbar and Footer (both consume `NAV_LINKS`).
3. IF any other page links to `/community` (e.g. Home's "Explore all services" style links, or a WhatsApp Community CTA) THEN those links SHALL be removed or redirected to an appropriate alternative (e.g. the WhatsApp community link can move to the Footer or Contact page if the client still wants it available).
4. THE `COMMUNITY_BENEFITS` and any community-only data in `data.ts` SHALL be removed if no longer referenced anywhere, following a verification grep before deletion.
5. THE `EventsList` component and the Google Sheets `eventsGid` config MAY remain unused/dormant in the codebase (not necessarily deleted) since events were tied to Community — confirm with client whether events move elsewhere or are dropped; default assumption is they are dropped along with the page.

### Requirement 2: Move testimonials ("What People Are Saying") under the About page

**User Story:** As the client, I want testimonials shown as a section within the About page rather than as a separate page, so visitors see social proof right after learning about Lumina and the founder.

#### Acceptance Criteria

1. THE About page (`src/app/about/page.tsx`) SHALL include a new "In Their Words: The Impact of Our Work" section, positioned after the Founder section, using the client's intro line: "From professionals navigating career growth to organisations developing their people and leaders, our work is centred on creating meaningful, practical impact."
2. THE testimonials SHOWN in this new About section SHALL use the existing `TESTIMONIALS` data/carousel component (`TestimonialsSection.tsx`) rather than a new one-off implementation, to avoid introducing a second testimonial pattern.
3. THE standalone `/testimonials` route (`src/app/testimonials/page.tsx` and `layout.tsx`) SHALL be removed once its content is confirmed merged into About.
4. THE `NAV_LINKS` entry "What People Are Saying" SHALL be removed (since there's no longer a dedicated page); if the client wants an in-page anchor link to the new About section, that can be added as `/about#testimonials` instead.
5. ANY other page linking to `/testimonials` (e.g. Home's "Read more stories" link in the Featured Voice section) SHALL be updated to point to `/about#testimonials` or removed.
6. THE duplicate "Why Lumina" pillar block that currently appears at the top of the testimonials page SHALL NOT be carried over to About (About already has its own "values that guide us" section with different, client-specified content — see Requirement 4). This avoids reintroducing the pillar-message repetition the original "leaner" feedback flagged.

### Requirement 3: Update Home page copy, CTAs, and credentials per client draft

**User Story:** As the client, I want the Home page's CTA, service teasers, and credentials section to reflect my latest wording.

#### Acceptance Criteria

1. THE Home page's final CTA SHALL use the headline "READY TO TURN AMBITION INTO ACTION?" and body copy "Whether you're looking to develop your people, strengthen leadership, facilitate meaningful conversations, or navigate your next career move, Lumina Advisory is ready to partner with you." replacing the current "READY TO UNLOCK YOUR POTENTIAL?" CTA.
2. THE Home page's final CTA button SHALL read "Get in touch" and link to `/contact`, replacing "Schedule a Discovery Call" (per client's single-CTA instruction for Home).
3. THE six service teasers in the Home page's "Practice Areas" section SHALL use the client's updated short descriptions (see `page_content.md` → Home → Services descriptions), sourced from the same `SERVICES` array used by the Services page (Requirement 5) so there is one source of truth, not a separate Home-only copy.
4. THE "By The Numbers" / credentials section on Home SHALL be updated to:
   - 9+ Years corporate & consulting experience (currently "10+")
   - MBA Cum Laude Digital Transformation (currently "MBA / Cum Laude / leadership expertise")
   - BBBEE Level 1 consultancy (currently "Level 1 / BBBEE / verified consultancy" — wording align, not necessarily reordered)
   - Clarify with the client whether "100% Black South African female-owned" (currently shown) should be kept as the 4th credential or dropped, since the new draft only explicitly lists 3 ("Credentials that build" heading + 3 bullets). Default: keep it as the 4th, since it's a verified differentiator the client has emphasized elsewhere.
5. THE Home page's testimonial / "Featured Voice" section SHALL use "TRUSTED TO DELIVER IMPACT" as its eyebrow/heading, replacing the current "In Their Words" label.
6. THE testimonial attribution on Home SHALL favor "Lumina Advisory" / role-based framing (e.g. "Corporate Workshop Client") over naming Yolandi personally — i.e. keep the brand, not the founder, as the voice being trusted. The existing `TESTIMONIALS` data already attributes quotes by role (not by Yolandi's name), so this is confirmed as correct and requires no data change, only confirmation that no copy introduces Yolandi's name into this section.
7. THE testimonial display SHALL continue to auto-advance/slide after a few seconds, matching the client's expectation that testimonials "move themselves." THE existing `TestimonialsSection.tsx` component already auto-advances every 15 seconds — this is confirmed as the desired behavior and requires no change. IF this component is reused on Home (it currently is not — Home shows a single static "Featured Voice" testimonial, not the carousel) THEN clarify whether Home should also switch to the auto-advancing carousel instead of a single static quote (see Requirement 7.1).
8. THE "Have the corporate client first" note indicates the client wants a **corporate workshop testimonial** to be the first/featured quote shown (currently `FEATURED_TESTIMONIAL = TESTIMONIALS[0]`, which is the "Career Coaching Client" quote). THE `TESTIMONIALS` array order SHALL be adjusted so a corporate-client quote (e.g. "Corporate Workshop Client") appears first, making it the default featured quote on Home.

### Requirement 4: Update About page content per client draft

**User Story:** As the client, I want the About page to use my latest "About", "values", "Meet Yolandi", and "Trusted By" copy.

#### Acceptance Criteria

1. THE "Who We Are" section SHALL be updated to use the client's new single-paragraph About copy (replacing the current 5-paragraph `MISSION_VISION.whoWeAre` array) — see `page_content.md` → About → About.
2. THE "Mission & Vision" 2-column section SHALL be replaced with a 3-item "The values that guide us" section using: People-Centred, Intentional Growth, Practical Impact (each with the client's supplied description), replacing the current `CORE_VALUES` 5-item list AND the Mission/Vision framing. Confirm with the client whether Mission and Vision statements are dropped entirely or kept elsewhere (e.g. folded into the "Who We Are" paragraph) — see Requirement 7.
3. THE "Meet Yolandi" / Founder section SHALL use the client's updated 5-point bio copy, which changes "10+ years" to "over eight years" and adds "financial services" and "digital innovation" to her career summary — this SHALL replace `FOUNDER.detailedBio` in `data.ts`.
4. A NEW "Trusted By" section SHALL be added to the About page displaying client/partner logos: FNB, NWU, UJ, UNISA, Daily Theta. Actual logo image assets are not yet provided — this section SHALL be built with placeholder logo slots until assets are supplied (flagged in Requirement 7).
5. THE testimonials section (per Requirement 2) SHALL be added after the Founder section, using the client's heading "IN THEIR WORDS: THE IMPACT OF OUR WORK" and intro line.

### Requirement 5: Replace Services page content per client draft (reorder + rewrite)

**User Story:** As the client, I want the Services page to show my updated service order, descriptions, and offerings.

#### Acceptance Criteria

1. THE `SERVICES` array in `data.ts` SHALL be reordered to: (1) Independent Consulting & Advisory, (2) Speaking, Moderation & Programme Direction, (3) Career & Professional Development, (4) Training & Skills Development, (5) Strategic Facilitation, (6) Leadership Development.
2. EACH service's `shortDescription` SHALL be replaced with the client's new one-sentence description (see `page_content.md` → SERVICES).
3. EACH service's `offerings` list SHALL be replaced with the client's new bullet list (5-6 items per service, differing from the current 3-8 item lists).
4. THE Services page component (`services/page.tsx`) requires no structural changes since it already maps over the `SERVICES` array dynamically — reordering/rewriting the data is sufficient.
5. BECAUSE the Home page's service teasers pull from the same `SERVICES` array (Requirement 3.3), updating `data.ts` updates both pages consistently.

### Requirement 6: Insights content — DEFERRED

**Status:** Out of scope for this implementation pass. The client has asked to come back to this later. No tasks under this requirement should be started yet.

**User Story:** As the client, I want my two drafted articles to appear on the Insights page instead of the "Coming Soon" placeholder — later.

#### Acceptance Criteria (for future reference, not current implementation)

1. THE system SHALL recognize that Insights content is sourced live from a connected Google Sheet (`SITE.googleSheets.spreadsheetId` / `articlesGid` in `data.ts`, fetched via `src/lib/googleSheets.ts`), NOT from a static array in the codebase.
2. THEREFORE, publishing the client's two articles ("Why Intentional Growth Matters in a Fast-Changing Workplace" and "The Power of Strategic Facilitation") requires adding rows to that Google Sheet's Articles tab (columns: id, slug, category, title, summary, readingTime, publishDate, image, featured, link) — this is a content-entry task for the client/owner, not a code change.
3. IF the client wants Kiro/the developer to perform this step on their behalf THEN sheet edit access must be shared, since no code in this repository can write to the Google Sheet directly.
4. AS AN ALTERNATIVE, if the client decides full articles should live on-site (not just teasers linking out), THIS requires a new dynamic article detail route (e.g. `/insights/[slug]`) since the current architecture only renders teaser cards linking to an external `link` URL — this is a larger change and should be confirmed as in-scope before building it (see Requirement 7).
5. UNTIL the Google Sheet is populated (or the alternative in 6.4 is built and populated), the Insights page SHALL continue to show its existing "Articles Coming Soon" empty state — no code change is needed for that state itself.

### Requirement 7: Open clarifications before implementation

**User Story:** As the developer, I want explicit answers to ambiguous points in the client's draft before writing code that might guess wrong.

#### Acceptance Criteria

1. ~~Home page testimonial section wording~~ — RESOLVED: see Requirement 3.5-3.8. "TRUSTED TO DELIVER IMPACT" is the heading; attribution favors "Lumina Advisory" over Yolandi's name; testimonials should auto-advance (already true of `TestimonialsSection.tsx`); a corporate-client quote should be featured first. Still open: whether Home's static single-quote "Featured Voice" section should be swapped for the auto-advancing `TestimonialsSection` carousel component, or whether "moves themselves" only applies to the About page carousel (which already auto-advances). Default: leave Home's single static quote as-is (it's not a carousel, so nothing "moves" there today) and confirm with client if they want it converted.
2. Whether Mission and Vision statements are fully dropped from the About page (replaced by the 3 values) or retained in a shortened form SHALL be clarified.
3. Whether the WhatsApp "Join the Community" CTA (currently only on the Community page) should be relocated anywhere else on the site (e.g. Footer or Contact) now that Community is being removed, or dropped entirely, SHALL be clarified.
4. Logo assets for the new "Trusted By" section (FNB, NWU, UJ, UNISA, Daily Theta) are required before that section can ship with real images — placeholders will be used until provided.
5. Insights (Requirement 6) is DEFERRED — no clarification needed right now.
6. Hero/section images for Home, About, Services, and Contact are marked "X" (placeholder) in the client's notes — confirms new photography is still pending; existing stock images remain in place until replacements are supplied.

### Requirement 8: Preserve what already works

**User Story:** As the client, I don't want unrelated parts of the recently redesigned site disturbed by this content update.

#### Acceptance Criteria

1. THE Contact page SHALL NOT be modified by this spec (no client notes reference it beyond what already exists).
2. THE overall editorial dark design system (colors, typography, motion, `lumina-section`/`lumina-container`/`lumina-glass-dark` patterns) SHALL be preserved; this spec is a content and structure update, not a redesign.
3. THE SEO infrastructure (sitemap, robots.ts, JSON-LD in `layout.tsx`) SHALL be reviewed for any copy that references removed pages (e.g. Community) or testimonials-as-a-page, and updated to stay accurate (e.g. `NAV_LINKS`-driven sitemap entries, any JSON-LD mentioning testimonials).
