import Image from "next/image";
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
      <div className="bg-[#0F172A] rounded-3xl overflow-hidden grid md:grid-cols-2 max-w-5xl mx-auto items-center shadow-xl border border-white/5">
        {/* Content */}
        <div className="p-8 md:p-12 text-left">
          <p className="text-[#C9A227] font-semibold uppercase tracking-widest text-xs mb-3">
            Lumina Network
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight font-heading">
            Join the Lumina Community
          </h2>
          <p className="text-white/70 mb-8 text-base leading-relaxed">
            Grow intentionally alongside ambitious professionals. Gain access to shared insights, networking opportunities, and resources designed to support your development journey.
          </p>
          <Button href={SITE.whatsapp.communityLink} variant="primary" external>
            Join WhatsApp Community
          </Button>
        </div>
        {/* Image */}
        <div className="relative h-64 md:h-full min-h-[320px] w-full">
          <Image
            src="/images/stock/image6.jpeg"
            alt="Lumina Community Professionals collaborating"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Soft gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0F172A] via-transparent to-transparent" />
        </div>
      </div>
    </SectionWrapper>
  );
}
