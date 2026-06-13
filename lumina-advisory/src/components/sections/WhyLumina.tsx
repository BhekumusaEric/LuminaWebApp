import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { WHY_LUMINA } from "@/lib/data";

/**
 * WhyLumina
 * Three-pillar section on navy background.
 * Update pillars in src/lib/data.ts → WHY_LUMINA array.
 */
export default function WhyLumina() {
  return (
    <SectionWrapper dark>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why Work With Lumina
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {WHY_LUMINA.map((pillar) => (
          <div
            key={pillar.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
          >
            <p className="text-4xl mb-4">{pillar.icon}</p>
            <h3 className="text-white font-bold text-lg mb-3">{pillar.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{pillar.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
