import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ARTICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert insights on leadership, career development, and personal growth from Lumina Advisory.",
};

/**
 * INSIGHTS PAGE
 * Articles are sourced from the ARTICLES array in src/lib/data.ts.
 * To add articles:
 *  1. Add article objects to the ARTICLES array in data.ts
 *  2. The featured article is the one with featured: true
 *  3. The rest appear in the 3-column grid below
 */
export default function InsightsPage() {
  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured);

  return (
    <>
      <PageHero headline="Insights for intentional growth." />

      <SectionWrapper>
        {ARTICLES.length === 0 ? (
          /* Empty state — shown until articles are added */
          <div className="text-center py-24">
            <p className="text-[#475569] text-lg">Articles coming soon.</p>
            <p className="text-[#475569]/60 text-sm mt-2">
              Check back for expert insights on leadership and career growth.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featured && (
              <div className="mb-16 bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0F172A]/5">
                {/* TODO: Add <Image> here when featured.image is available */}
                <div className="bg-[#0F172A]/5 h-64 flex items-center justify-center">
                  <p className="text-[#475569] text-sm">[ Featured Image ]</p>
                </div>
                <div className="p-8">
                  <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-wider mb-2">
                    {featured.category}
                  </p>
                  <h2 className="text-2xl font-bold mb-3">{featured.title}</h2>
                  <p className="text-[#475569] mb-6">{featured.summary}</p>
                  <a
                    href={`/insights/${featured.slug}`}
                    className="text-[#C9A227] font-semibold hover:underline"
                  >
                    Read Article →
                  </a>
                </div>
              </div>
            )}

            {/* Article Grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {rest.map((article) => (
                  <a
                    key={article.id}
                    href={`/insights/${article.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#0F172A]/5 hover:shadow-md transition-shadow group"
                  >
                    <div className="bg-[#0F172A]/5 h-44 flex items-center justify-center">
                      <p className="text-[#475569] text-xs">[ Image ]</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-[#475569] mb-3">
                        <span className="text-[#C9A227] font-medium">{article.category}</span>
                        <span>·</span>
                        <span>{article.readingTime}</span>
                        <span>·</span>
                        <span>{article.publishDate}</span>
                      </div>
                      <h3 className="font-bold mb-2 group-hover:text-[#C9A227] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#475569] text-sm line-clamp-3">
                        {article.summary}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </SectionWrapper>
    </>
  );
}
