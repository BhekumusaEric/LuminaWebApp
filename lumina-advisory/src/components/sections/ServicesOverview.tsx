import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICES } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

/**
 * ServicesOverview
 * Displays all 6 services in a 2×3 grid (desktop) / single column (mobile).
 * Each card links to /services#service-id.
 * Service data lives in src/lib/data.ts → SERVICES array.
 */
export default function ServicesOverview() {
  return (
    <SectionWrapper>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Support Growth</h2>
        <p className="text-[#475569] max-w-xl mx-auto">
          Tailored services for individuals and organisations at every stage of their journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl p-6 border border-[#0F172A]/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
          >
            <div className="text-[#C9A227] mb-4">
              <LucideIcon name={service.icon} size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-[#475569] text-sm leading-relaxed flex-1 mb-6">
              {service.shortDescription}
            </p>
            <Link
              href={`/services#${service.id}`}
              className="text-[#C9A227] text-sm font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
