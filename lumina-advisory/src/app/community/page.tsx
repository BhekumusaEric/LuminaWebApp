import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { COMMUNITY_BENEFITS, SITE } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the Lumina Community and grow intentionally alongside ambitious professionals.",
};

/**
 * COMMUNITY PAGE
 * Events section: currently shows "Coming Soon".
 * When events are ready, add them to an EVENTS array in data.ts
 * and replace the placeholder below with event cards.
 */
export default function CommunityPage() {
  return (
    <>
      <PageHero
        headline="Join the Lumina Community"
        subheading="Grow intentionally alongside others."
      />

      {/* Community Benefits */}
      <SectionWrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What You'll Gain
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {COMMUNITY_BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#0F172A]/5 flex items-start gap-4"
            >
              <div className="text-[#C9A227] shrink-0 mt-0.5">
                <LucideIcon name={benefit.icon} size={28} />
              </div>
              <p className="font-semibold text-[#0F172A]">{benefit.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href={SITE.whatsapp.communityLink} variant="primary" external>
            Join Community
          </Button>
        </div>
      </SectionWrapper>

      {/* Upcoming Events */}
      <SectionWrapper dark>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Upcoming Events
        </h2>
        {/* TODO: Replace this block with event cards once events are available.
            Add events to an EVENTS array in src/lib/data.ts and map over them here. */}
        <div className="text-center py-16 border border-white/10 rounded-2xl">
          <p className="text-white/50 text-lg">Events Coming Soon</p>
          <p className="text-white/30 text-sm mt-2">
            Stay connected via WhatsApp for updates.
          </p>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            You don't have to grow alone.
          </h2>
          <Button href={SITE.whatsapp.communityLink} variant="primary" external>
            Join WhatsApp Community
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
