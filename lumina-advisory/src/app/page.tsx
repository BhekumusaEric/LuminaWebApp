import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustIndicators from "@/components/sections/TrustIndicators";
import FounderIntro from "@/components/sections/FounderIntro";
import WhyLumina from "@/components/sections/WhyLumina";
import ServicesOverview from "@/components/sections/ServicesOverview";
import InsightsList from "@/components/sections/InsightsList";
import CommunityCTA from "@/components/sections/CommunityCTA";
import FinalCTA from "@/components/sections/FinalCTA";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Lumina Advisory | Leadership & Career Development South Africa",
  description:
    "Lumina Advisory is a growth-focused consultancy supporting individuals and organisations through career growth, leadership development, strategic facilitation, and transformation.",
};

/**
 * HOME PAGE
 * Sections (in order):
 * 1. Hero
 * 2. Trust Indicators
 * 3. About & Founder
 * 4. Why Partner With Us
 * 5. Services Overview
 * 6. Insights
 * 7. Community CTA
 * 8. Testimonials
 * 9. Final CTA
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <FounderIntro />
      <WhyLumina />
      <ServicesOverview />
      <SectionWrapper>
        <div className="text-center mb-16 flex flex-col items-center">
          <p className="text-[#C9A227] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
            THOUGHT LEADERSHIP
          </p>
          <h2 className="text-5xl md:text-6xl font-heading text-[#2D2D2D]">
            Latest Insights
          </h2>
        </div>
        <InsightsList />
      </SectionWrapper>
      <CommunityCTA />
      <FinalCTA />
    </>
  );
}
