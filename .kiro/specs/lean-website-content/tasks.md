# Implementation Plan

- [ ] 1. Resolve remaining open clarifications before touching code
  - Confirm with client: whether Home's static "Featured Voice" quote should become the auto-advancing carousel (7.1), Mission/Vision fate (7.2), WhatsApp Community CTA relocation (7.3), Trusted-by logo assets (7.4)
  - Proceeding with the documented defaults in design.md where no answer is available, but flag before shipping
  - Insights (Requirement 6 / 7.5) is DEFERRED — skip, do not clarify or implement yet
  - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [ ] 2. Update `data.ts`: services, credentials, founder, values, trusted-by
  - [ ] 2.1 Reorder and rewrite all 6 entries in `SERVICES` (descriptions + offerings) per `page_content.md`
  - [ ] 2.2 Add new `CORE_VALUES` (People-Centred, Intentional Growth, Practical Impact) for About's "values that guide us" section, keeping existing `WHY_LUMINA` untouched for Home's "Our Approach"
  - [ ] 2.3 Replace `FOUNDER.detailedBio` with the client's new 5-point bio
  - [ ] 2.4 Replace `MISSION_VISION.whoWeAre` with the client's single consolidated paragraph
  - [ ] 2.5 Add new `TRUSTED_BY` array (FNB, NWU, UJ, UNISA, Daily Theta) with placeholder logo paths
  - [ ] 2.6 Remove "Community" and "What People Are Saying" from `NAV_LINKS`
  - _Requirements: 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3_

- [ ] 3. Update Home page (`src/app/page.tsx`)
  - [ ] 3.1 Update final CTA headline, body copy, and button text/label per client draft
  - [ ] 3.2 Update inline `CREDENTIALS` constant (9+ years, MBA Cum Laude Digital Transformation, BBBEE Level 1 consultancy)
  - [ ] 3.3 Update "Read more stories" link target from `/testimonials` to `/about#testimonials`
  - [ ] 3.4 Update Featured Voice eyebrow/heading to "TRUSTED TO DELIVER IMPACT"
  - [ ] 3.5 Reorder/select `TESTIMONIALS` so a corporate-client quote is featured first on Home
  - _Requirements: 3.1, 3.2, 3.4, 3.5, 3.6, 3.7, 3.8_

- [ ] 4. Update About page (`src/app/about/page.tsx`)
  - [ ] 4.1 Simplify "Who We Are" to render the new single-paragraph copy
  - [ ] 4.2 Replace the Mission/Vision 2-column section with a 3-column "The values that guide us" section using new `CORE_VALUES`
  - [ ] 4.3 Update Founder section to use the new bio (data-only change, no JSX change expected)
  - [ ] 4.4 Add new "Trusted By" logo section after the Founder section
  - [ ] 4.5 Add new "In Their Words: The Impact of Our Work" section after Trusted By, wrapping `<TestimonialsSection />` with `id="testimonials"` and the client's intro line
  - [ ] 4.6 Update Final CTA copy and button text per client's About CTA draft
  - _Requirements: 2.1, 2.2, 2.6, 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ] 5. Remove the Testimonials page and route
  - Delete `src/app/testimonials/page.tsx` and `src/app/testimonials/layout.tsx`
  - Grep codebase for any remaining `/testimonials` references and update/remove them
  - _Requirements: 2.3, 2.4, 2.5_

- [ ] 6. Remove the Community page and route
  - [ ] 6.1 Delete `src/app/community/page.tsx` and `src/app/community/layout.tsx`
  - [ ] 6.2 Decide and implement the fate of the WhatsApp "Join the Community" CTA (relocate or drop) per clarification from Task 1
  - [ ] 6.3 Remove `COMMUNITY_BENEFITS` from `data.ts` once confirmed unused elsewhere
  - [ ] 6.4 Decide and implement the fate of `EventsList.tsx` / `eventsGid` config (keep dormant, relocate, or remove) per clarification from Task 1
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 7. Update `sitemap.ts`
  - Remove the `/community/` and `/testimonials/` entries from the sitemap array
  - _Requirements: 8.3_

- [ ] 8. Review `layout.tsx` JSON-LD and metadata for stale references
  - Confirm no JSON-LD or metadata references removed pages; update if found
  - _Requirements: 8.3_

- [ ] 9. Insights content — DEFERRED, do not start
  - Client has asked to revisit this later. Skip entirely for this implementation pass.
  - _Requirements: 6 (deferred)_

- [ ] 10. Verify build and link integrity
  - [ ] 10.1 Run `npm run build` in `lumina-advisory` after each major change
  - [ ] 10.2 Grep for dangling references to deleted routes/components (`/community`, `/testimonials`, `COMMUNITY_BENEFITS`)
  - [ ] 10.3 Manually click through Navbar and Footer links to confirm no 404s and that `/about#testimonials` scrolls correctly
  - [ ] 10.4 Confirm built `sitemap.xml` no longer lists removed routes
  - _Requirements: 8.1, 8.2, 8.3_
