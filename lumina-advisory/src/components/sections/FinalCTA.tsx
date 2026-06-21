import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";

/**
 * FinalCTA
 * Bottom-of-page conversion section on the home page.
 * Two CTAs: Book Discovery Call + Contact Us.
 * Uses a faint skyscraper background image to represent height, vision, and growth.
 */
export default function FinalCTA() {
  return (
    <section className="bg-wood bg-[#2B2118] py-16 px-6 border-b border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#2B2118]/40 z-0" />
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left Side: Logo & Text */}
        <div className="flex items-center gap-6">
          {/* Logo Icon Placeholder */}
          <div className="text-[#C9A227] hidden md:block">
            <svg width="48" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-6M12 16a4 4 0 0 0-4-4M12 16a4 4 0 0 1 4-4M8 12a4 4 0 0 0-4-4M16 12a4 4 0 0 1 4-4M4 8a4 4 0 0 1 4-4M20 8a4 4 0 0 0-4-4" />
            </svg>
          </div>
          <div className="text-left">
            <h2 className="text-[#C9A227] font-heading text-4xl md:text-5xl font-bold mb-4">
              Let's start the conversation.
            </h2>
            <p className="text-white/80 font-body text-[15px] max-w-xl leading-loose">
              Whether you're looking for a facilitator, speaker, leadership partner,
              or development consultant, we'd love to hear from you.
            </p>
          </div>
        </div>

        {/* Right Side: Button */}
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <Button href={SITE.calendly} variant="primary" external>
            SCHEDULE A DISCOVERY CALL
          </Button>
        </div>

      </div>
    </section>
  );
}
