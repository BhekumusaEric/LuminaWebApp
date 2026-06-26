import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { SERVICES, SITE } from "@/lib/data";
import { LucideIcon } from "@/components/ui/LucideIcon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Lumina Advisory's services including career development, leadership programmes, strategic facilitation, and independent consulting.",
};

/**
 * SERVICES PAGE
 * Each service block renders from the SERVICES array in data.ts.
 * To add/edit a service, update src/lib/data.ts only.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHero
        headline="Services designed to support growth."
        subheading="Supporting individuals and organisations through intentional development."
      />

      {/* Service Sections — alternating background */}
      {SERVICES.map((service, index) => (
        <SectionWrapper key={service.id} dark={index % 2 !== 0}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[#C9A227] mb-4">
                <LucideIcon name={service.icon} size={36} />
              </div>
              <h2
                className={`text-3xl font-bold mb-4 ${
                  index % 2 !== 0 ? "text-white" : "text-[#2B2118]"
                }`}
              >
                {service.title}
              </h2>
              <p
                className={`leading-relaxed mb-6 ${
                  index % 2 !== 0 ? "text-white/70" : "text-[#475569]"
                }`}
              >
                {service.shortDescription}
              </p>
              <Button
                href={`/contact?service=${service.id}`}
                variant={index % 2 !== 0 ? "outline" : "primary"}
              >
                Enquire Now
              </Button>
            </div>
            <div>
              <p
                className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
                  index % 2 !== 0 ? "text-[#C9A227]" : "text-[#2B2118]"
                }`}
              >
                What We Offer
              </p>
              <ul className="flex flex-col gap-3">
                {service.offerings.map((offering) => (
                  <li
                    key={offering}
                    className={`flex items-start gap-3 text-sm ${
                      index % 2 !== 0 ? "text-white/70" : "text-[#475569]"
                    }`}
                  >
                    <span className="text-[#C9A227] mt-0.5">✓</span>
                    {offering}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* Final CTA */}
      <SectionWrapper>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Not sure what support you need?
          </h2>
          <p className="text-[#475569] mb-8">Let's explore together.</p>
          <Button href={SITE.calendly} variant="primary" external>
            Book Discovery Call
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
