"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TRUST_INDICATORS } from "@/lib/data";

/**
 * TrustIndicators
 * Statistics or metrics that build credibility, displayed in a simple flex/grid.
 */
export default function TrustIndicators() {
  return (
    <section className="bg-white border-y border-black/5 py-12 px-6">
      <StaggerContainer
        className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16"
        staggerDelay={0.1}
      >
        {TRUST_INDICATORS.map((item) => (
          <StaggerItem
            key={item.label}
            yOffset={10}
            className="flex items-center gap-2"
          >
            <span className="text-[#2B2118] font-bold text-base">✓</span>
            <span className="text-[#2B2118] font-semibold text-sm">{item.label}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
