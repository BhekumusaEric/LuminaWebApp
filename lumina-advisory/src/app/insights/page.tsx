import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import InsightsList from "@/components/sections/InsightsList";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert insights on leadership, career development, and personal growth from Lumina Advisory.",
};

/**
 * INSIGHTS PAGE
 * Sourced dynamically from Google Sheets via the InsightsList component.
 */
export default function InsightsPage() {
  return (
    <>
      <PageHero headline="Insights for intentional growth." />

      <SectionWrapper>
        <InsightsList />
      </SectionWrapper>
    </>
  );
}

