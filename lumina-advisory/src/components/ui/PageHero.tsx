/**
 * PageHero
 * Reusable hero banner for inner pages (About, Services, etc.)
 * The home page has its own dedicated hero section.
 */
interface PageHeroProps {
  headline: string;
  subheading?: string;
}

export function PageHero({ headline, subheading }: PageHeroProps) {
  return (
    <section className="w-full bg-[#0F172A] text-white px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          {headline}
        </h1>
        {subheading && (
          <p className="text-lg md:text-xl text-[#C9A227] max-w-2xl">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
