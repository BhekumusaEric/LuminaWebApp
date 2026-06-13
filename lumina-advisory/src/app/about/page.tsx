import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FOUNDER, MISSION_VISION, CORE_VALUES } from "@/lib/data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Lumina Advisory, our founding story, mission, vision, and the expertise of founder Yolandi Pietersen.",
};

/**
 * ABOUT PAGE
 * Sections:
 * 1. Hero
 * 2. Company Story
 * 3. Mission & Vision
 * 4. Meet the Founder
 * 5. Core Values
 */
export default function AboutPage() {
  return (
    <>
      <PageHero
        headline="About Lumina Advisory"
        subheading="Creating transformative development experiences."
      />

      {/* Company Story */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-[#475569] leading-relaxed mb-4">
              Lumina Advisory was founded in 2024 with a clear purpose: to create
              transformative development experiences that empower individuals and
              organisations to grow with clarity, confidence, and purpose.
            </p>
            <p className="text-[#475569] leading-relaxed mb-4">
              As a proudly Level 1 BBBEE consultancy based in Johannesburg, we
              bring together strategic expertise and a deeply human approach to
              every engagement.
            </p>
            <p className="text-[#475569] leading-relaxed">
              Whether supporting a professional navigating a career transition or
              a leadership team aligning on strategy, we show up with the same
              commitment: practical, purposeful, people-centred.
            </p>
          </div>
          {/* Placeholder image block — replace src with a real image */}
          <div className="bg-[#0F172A]/5 rounded-2xl h-72 md:h-80 flex items-center justify-center">
            <p className="text-[#475569] text-sm">[ Company Image ]</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper dark>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Purpose
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-3">
              Mission
            </p>
            <p className="text-white/80 leading-relaxed">{MISSION_VISION.mission}</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-3">
              Vision
            </p>
            <p className="text-white/80 leading-relaxed">{MISSION_VISION.vision}</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Meet the Founder */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Portrait placeholder */}
          <div className="bg-[#0F172A]/5 rounded-2xl h-80 flex items-center justify-center order-1 md:order-none">
            <p className="text-[#475569] text-sm">[ Founder Portrait ]</p>
            {/* TODO: Replace with:
            <Image src={FOUNDER.image} alt={FOUNDER.name} fill className="object-cover rounded-2xl" />
            */}
          </div>
          <div>
            <p className="text-[#C9A227] font-semibold uppercase tracking-wider text-sm mb-2">
              Meet the Founder
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">{FOUNDER.name}</h2>
            <p className="text-[#475569] mb-1">{FOUNDER.title}</p>
            <p className="text-[#C9A227] font-medium mb-6">{FOUNDER.qualifications}</p>
            <p className="text-[#475569] leading-relaxed mb-8">{FOUNDER.shortBio}</p>

            {/* Career Timeline */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0F172A] mb-4">
                Career Journey
              </p>
              <ol className="flex flex-col gap-3">
                {FOUNDER.timeline.map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#475569] text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#C9A227] text-white text-xs flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper dark>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Core Values
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {CORE_VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl mb-3">{value.icon}</p>
              <p className="text-white font-semibold text-sm">{value.title}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
