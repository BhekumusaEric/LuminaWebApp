import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustIndicators from "@/components/sections/TrustIndicators";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyLumina from "@/components/sections/WhyLumina";
import FounderIntro from "@/components/sections/FounderIntro";
import Testimonials from "@/components/sections/Testimonials";
import CommunityCTA from "@/components/sections/CommunityCTA";
import FinalCTA from "@/components/sections/FinalCTA";

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
 * 3. Services Overview
 * 4. Why Work With Lumina
 * 5. Meet the Founder
 * 6. Testimonials
 * 7. Community CTA
 * 8. Final CTA
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <ServicesOverview />
      <WhyLumina />
      <FounderIntro />
      <Testimonials />
      <CommunityCTA />
      <FinalCTA />
    </>
  );
}
