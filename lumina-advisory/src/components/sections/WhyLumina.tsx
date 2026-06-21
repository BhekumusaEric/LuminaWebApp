"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_LUMINA } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * WhyLumina
 * Three-pillar section with premium staggered scroll reveals and hover effects.
 */
export default function WhyLumina() {
  return (
    <SectionWrapper dark>
      <FadeIn yOffset={25} className="text-center mb-16 flex flex-col items-center">
        <p className="text-[#C9A227] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
          OUR DIFFERENCE
        </p>
        <h2 className="text-5xl md:text-6xl font-heading text-white mb-4 leading-tight">
          Why Partner With Lumina
        </h2>
      </FadeIn>

      <StaggerContainer
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {WHY_LUMINA.map((pillar) => (
          <StaggerItem
            key={pillar.title}
            yOffset={30}
          >
            <div
              className="bg-white/5 border border-white/10 rounded-none p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/10 h-full flex flex-col items-center"
            >
              <div className="text-[#C9A227] flex justify-center mb-6">
                <LucideIcon name={pillar.icon} size={36} />
              </div>
              <h3 className="text-white font-heading font-bold text-2xl mb-4">{pillar.title}</h3>
              <p className="text-white/70 text-[15px] leading-loose">{pillar.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
