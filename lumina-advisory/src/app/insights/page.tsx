import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import InsightsList from "@/components/sections/InsightsList";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert insights on leadership, career development, and personal growth from Lumina Advisory.",
};

/**
 * INSIGHTS PAGE
 * ─────────────────────────────────────────────────────────────
 * Articles sourced dynamically from Google Sheets via InsightsList.
 * Editorial dark treatment — no per-section wrapper backgrounds.
 * ───────────────────────────────────────────────────────────── */
export default function InsightsPage() {
  return (
    <>
      <PageHero
        headline="Insights for intentional growth."
        subheading="Perspectives on career growth, leadership, and personal transformation."
        backgroundImage="/images/heroes/insights.jpg"
      />

      <section className="lumina-section">
        <div className="lumina-container">
          <InsightsList />
        </div>
      </section>
    </>
  );
}
