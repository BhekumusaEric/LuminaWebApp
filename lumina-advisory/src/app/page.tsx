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
import { ScrollSnapController } from "@/components/ui/ScrollSnapController";

export const metadata: Metadata = {
  title: "Lumina Advisory | Leadership & Career Development South Africa",
  description:
    "Lumina Advisory is a growth-focused consultancy supporting individuals and organisations through career growth, leadership development, strategic facilitation, and transformation.",
};

/**
 * HOME PAGE
 * Sections (in order):
 * 1. Hero & Trust Indicators (Snapped together)
 * 2. About & Founder
 * 3. Why Partner With Us
 * 4. Services Overview
 * 5. Insights
 * 6. Community CTA
 * 7. Final CTA
 */
export default function HomePage() {
  return (
    <>
      <ScrollSnapController />

      {/* 1. Hero & Trust Indicators Snapped Together */}
      <div className="snap-section">
        <HeroSection />
        <TrustIndicators />
      </div>

      {/* 2. About & Founder */}
      <div className="snap-section">
        <FounderIntro />
      </div>

      {/* 3. Why Partner With Us */}
      <div className="snap-section">
        <WhyLumina />
      </div>

      {/* 4. Services Overview */}
      <div className="snap-section">
        <ServicesOverview />
      </div>

      {/* 5. Insights */}
      <div className="snap-section">
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
      </div>

      {/* 6. Community CTA */}
      <div className="snap-section">
        <CommunityCTA />
      </div>

      {/* 7. Final CTA */}
      <div className="snap-section">
        <FinalCTA />
      </div>
    </>
  );
}
