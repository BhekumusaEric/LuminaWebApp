"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TESTIMONIALS } from "@/lib/data";

/**
 * Testimonials
 * Staggered entry list of testimonials with gold stars and hover scaling.
 */
export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-16" yOffset={20}>
          <p className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">
            WHAT CLIENTS SAY
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((testimonial) => (
            <StaggerItem key={testimonial.id} yOffset={20}>
              <div
                className="bg-white rounded-none p-10 border border-[#F0F0F0] shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full hover:-translate-y-1.5 hover:scale-[1.015]"
              >
                {/* Large Quote Mark */}
                <div className="text-5xl text-[#C9A227] font-serif leading-none mb-4 opacity-80">
                  &ldquo;
                </div>
                <p className="text-[#666666] text-[15px] leading-relaxed mb-6 flex-1 font-body">
                  {testimonial.quote}
                </p>
                <p className="text-[#2D2D2D] text-xs font-bold font-body">
                  &mdash; {testimonial.author}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Carousel Dots (Static representation as per mockup) */}
        <div className="flex justify-center gap-2 mt-10">
          <div className="w-8 h-1 bg-[#C9A227]"></div>
          <div className="w-8 h-1 bg-[#D1D5DB]"></div>
          <div className="w-8 h-1 bg-[#D1D5DB]"></div>
        </div>
      </div>
    </section>
  );
}
