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
    <section className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src="/images/stock/image7.jpeg"
          alt="Growth and Ambition Skyscrapers"
          fill
          className="object-cover filter grayscale contrast-125"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/85 to-[#0F172A]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <p className="text-[#C9A227] font-semibold uppercase tracking-widest text-xs mb-4">
          Take Action
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight font-heading">
          Growth starts with one intentional step.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href={SITE.calendly} variant="primary" external>
            Book Discovery Call
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
