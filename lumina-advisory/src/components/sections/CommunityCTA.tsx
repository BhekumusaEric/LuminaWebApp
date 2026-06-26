import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE, getImagePath } from "@/lib/data";

/**
 * CommunityCTA & Why Partner Split Section
 */
export default function CommunityCTA() {
  return (
    <section className="relative w-full min-h-[500px] bg-[#2B2118] flex items-center justify-center p-12 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <Image
        src={getImagePath("/images/stock/image6.png")}
        alt="Lumina Community Background"
        fill
        className="object-cover opacity-40 grayscale"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[#2B2118]/70 mix-blend-multiply" />
      
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">
        <p className="text-[#C9A227] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
          JOIN THE LUMINA COMMUNITY
        </p>
        <h2 className="text-5xl md:text-6xl font-heading text-white mb-8 leading-tight">
          A community for growth, connection and inspiration.
        </h2>
        
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          {["Career conversations", "Live development sessions", "Leadership insights", "Networking opportunities", "Growth resources"].map((item, i) => (
            <li key={i} className="flex items-center gap-3 text-white">
              <span className="text-[#C9A227] font-bold">✓</span>
              <span className="font-medium text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
        
        <Button href={SITE.whatsapp.communityLink} variant="primary" external>
          JOIN THE COMMUNITY
        </Button>
      </div>
    </section>
  );
}
