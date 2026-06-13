import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/data";

/**
 * FinalCTA
 * Bottom-of-page conversion section on the home page.
 * Two CTAs: Book Discovery Call + Contact Us.
 */
export default function FinalCTA() {
  return (
    <SectionWrapper dark>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
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
    </SectionWrapper>
  );
}
