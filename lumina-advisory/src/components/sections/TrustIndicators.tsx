import { TRUST_INDICATORS } from "@/lib/data";

/**
 * TrustIndicators
 * Horizontal strip of trust badges.
 * Update indicators in src/lib/data.ts → TRUST_INDICATORS array.
 */
export default function TrustIndicators() {
  return (
    <section className="bg-[#C9A227] py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
        {TRUST_INDICATORS.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="text-[#0F172A] font-bold text-base">✓</span>
            <span className="text-[#0F172A] font-semibold text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
