import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { CODE_ARTICLES, type ArticleBlock } from "@/lib/data";

/**
 * INSIGHTS ARTICLE PAGE — /insights/<slug>
 * ─────────────────────────────────────────────────────────────
 * Renders a full, code-authored article from CODE_ARTICLES.
 * These coexist with the Google-Sheet-driven teaser cards on the
 * Insights index — sheet articles link out, these open here.
 *
 * Static export: generateStaticParams pre-renders one page per
 * code article at build time.
 * ───────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return CODE_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = CODE_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Insights" };
  return {
    title: article.title,
    description: article.summary,
  };
}

function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="pt-4 text-2xl font-bold uppercase leading-tight tracking-[-0.02em] text-white md:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-[#C8A24C] pl-6 text-xl font-medium leading-relaxed text-[#E0C76C] md:text-2xl"
              >
                {block.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="space-y-3 border-t border-white/10 pt-2">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-baseline gap-4 border-b border-white/10 pb-3 text-base leading-relaxed text-white/80 md:text-lg"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A24C]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ordered":
            return (
              <ol key={i} className="space-y-3 border-t border-white/10 pt-2">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-baseline gap-4 border-b border-white/10 pb-3 text-base leading-relaxed text-white/80 md:text-lg"
                  >
                    <span className="font-mono text-sm tabular-nums text-[#C8A24C]">
                      {String(j + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "paragraph":
          default:
            return (
              <p
                key={i}
                className="text-balance-justify text-base leading-relaxed text-white/80 md:text-lg"
              >
                {block.text}
              </p>
            );
        }
      })}
    </div>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = CODE_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        headline={article.title}
        subheading={article.summary}
        backgroundImage={article.image}
      />

      <section className="lumina-section">
        <div className="lumina-container">
          {/* Back link */}
          <Link
            href="/insights"
            className="group mb-10 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D8B96F] transition-colors hover:text-white"
          >
            <LucideIcon
              name="ArrowRight"
              size={14}
              className="rotate-180 transition-transform group-hover:-translate-x-1"
            />
            Back to Insights
          </Link>

          {/* Meta row */}
          <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C8A24C]">
            <span>{article.category}</span>
            <span className="text-white/25">·</span>
            <span className="text-white/60">{article.readingTime}</span>
            {article.publishDate && (
              <>
                <span className="text-white/25">·</span>
                <span className="text-white/60">{article.publishDate}</span>
              </>
            )}
          </div>

          {/* Body */}
          <article className="mx-auto max-w-3xl">
            <ArticleBody blocks={article.body} />
          </article>
        </div>
      </section>

      {/* Final CTA */}
      <section className="lumina-section flex items-center !pt-6 !pb-10 md:!pt-8 md:!pb-12">
        <div className="lumina-container">
          <div className="lumina-glass-dark mx-auto max-w-3xl px-8 py-14 text-center md:px-14 md:py-20">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              Let&apos;s Talk
            </p>
            <h2 className="mb-5 text-3xl font-bold uppercase tracking-[-0.02em] text-white md:text-4xl">
              Ready to put this into <span className="lumina-shimmer">action</span>?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
              Let&apos;s explore how Lumina Advisory can support your growth, your people
              or your organisation.
            </p>
            <Button href="/contact" variant="primary">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
