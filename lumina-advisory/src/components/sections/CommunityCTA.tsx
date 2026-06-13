import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/data";

/**
 * CommunityCTA
 * Mid-page banner encouraging visitors to join the WhatsApp Community.
 * Community link is set in SITE.whatsapp.communityLink (data.ts).
 */
export default function CommunityCTA() {
  return (
    <SectionWrapper>
      <div className="bg-[#0F172A] rounded-3xl px-8 py-14 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join the Lumina Community
        </h2>
        <p className="text-white/60 mb-8 text-lg">
          Grow alongside ambitious professionals.
        </p>
        <Button href={SITE.whatsapp.communityLink} variant="primary" external>
          Join WhatsApp Community
        </Button>
      </div>
    </SectionWrapper>
  );
}
