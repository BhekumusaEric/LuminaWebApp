import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/sections/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Lumina Advisory. Book a discovery call or send us a message.",
};

/**
 * CONTACT PAGE
 * - Left column: contact details from SITE in data.ts
 * - Right column: Web3Forms contact form (ContactForm component)
 * - Web3Forms access key is set in SITE.web3forms.accessKey (data.ts)
 */
export default function ContactPage() {
  return (
    <>
      <PageHero
        headline="Let's Connect"
        subheading="We'd love to hear from you."
      />

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Contact Details</h2>
            <ul className="flex flex-col gap-6">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] mb-1">
                  Phone
                </p>
                <a
                  href={SITE.phoneLink}
                  className="text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] mb-1">
                  Location
                </p>
                <p className="text-[#475569]">{SITE.location}</p>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] mb-1">
                  LinkedIn
                </p>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  Lumina Advisory on LinkedIn
                </a>
              </li>
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-12 bg-[#0F172A] rounded-2xl p-6">
              <p className="text-white font-semibold mb-2">Prefer WhatsApp?</p>
              <p className="text-white/60 text-sm mb-4">
                Chat directly with us — we typically respond within a few hours.
              </p>
              <a
                href={SITE.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#1ebe5b] transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </SectionWrapper>
    </>
  );
}
