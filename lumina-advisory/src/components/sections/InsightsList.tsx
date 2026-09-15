"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, getImagePath } from "@/lib/data";
import { fetchArticles, type SheetArticle } from "@/lib/googleSheets";
import { LucideIcon } from "@/components/ui/LucideIcon";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * InsightsList
 * ─────────────────────────────────────────────────────────────
 * Renders articles the owner adds to the connected Google Sheet.
 *  - Featured article: full-width hero card with dark image wash
 *  - Rest: grid of dark-glass cards
 *  - Loading / empty / error states are all dark-themed and editorial
 *  - Each card links to the article's external URL (LinkedIn, Medium,
 *    the owner's blog, etc.) — set in the `link` column of the sheet.
 * ───────────────────────────────────────────────────────────── */
export default function InsightsList() {
  const [articles, setArticles] = useState<SheetArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function loadArticles() {
      const { spreadsheetId, articlesGid } = SITE.googleSheets;
      if (!spreadsheetId) {
        if (!cancelled) setLoading(false);
        return;
      }
      try {
        const data = await fetchArticles(spreadsheetId, articlesGid);
        if (!cancelled) setArticles(data);
      } catch (err) {
        console.error("[InsightsList] load error:", err);
        if (!cancelled) setError("Unable to load articles right now.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadArticles();
    return () => {
      cancelled = true;
    };
  }, []);

  // ────── LOADING ──────
  if (loading) {
    return (
      <div>
        <div className="mb-16 h-72 animate-pulse rounded-[1.5rem] border border-white/10 bg-white/[0.03]" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="animate-pulse overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="h-44 bg-white/[0.03]" />
              <div className="space-y-3 p-6">
                <div className="h-3 w-1/4 rounded bg-white/10" />
                <div className="h-5 w-3/4 rounded bg-white/10" />
                <div className="h-3 w-full rounded bg-white/[0.06]" />
                <div className="h-3 w-5/6 rounded bg-white/[0.06]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ────── ERROR ──────
  if (error) {
    return (
      <div className="mx-auto max-w-md py-20 text-center">
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-300">
            <LucideIcon name="RefreshCw" size={18} />
          </div>
          <p className="text-lg font-semibold text-white">{error}</p>
        </div>
        <p className="text-sm text-white/60">
          Please check that the Google Sheet is shared as “Anyone with the link — Viewer”.
        </p>
      </div>
    );
  }

  // ────── EMPTY ──────
  if (articles.length === 0) {
    return (
      <div className="mx-auto max-w-2xl py-24 text-center">
        <div className="mb-4 inline-flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/15 text-[#D8B96F]">
            <LucideIcon name="BookOpen" size={22} />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-[-0.02em] text-white md:text-3xl">
            Articles Coming Soon
          </h3>
        </div>
        <p className="text-base leading-relaxed text-white/70 md:text-lg">
          We&apos;re preparing perspectives on leadership, career growth, and intentional
          development. Check back shortly.
        </p>
      </div>
    );
  }

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* ────── FEATURED ARTICLE ────── */}
      {featured && <ArticleHero article={featured} />}

      {/* ────── GRID ────── */}
      {rest.length > 0 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: EASE }}
            className="mb-10 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[#C8A24C]/60" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              All Articles
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: EASE }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────

function ArticleHero({ article }: { article: SheetArticle }) {
  const inner = (
    <div className="relative min-h-[360px] w-full lg:min-h-[480px]">
      {article.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={getImagePath(article.image)}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[3000ms] ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410] to-[#0a0806]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/95 via-[#08060a]/65 to-[#08060a]/25" />

      <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-12 lg:p-14">
        <div className="mb-5 flex flex-wrap items-center gap-4">
          <span className="rounded-full border border-[#C8A24C]/40 bg-[#C8A24C]/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.24em] text-[#D8B96F]">
            Featured
          </span>
          {article.category && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
              {article.category}
            </span>
          )}
          {article.readingTime && (
            <>
              <span className="text-white/20">·</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/60">
                {article.readingTime}
              </span>
            </>
          )}
        </div>

        <h2 className="mb-4 max-w-3xl text-2xl font-bold uppercase leading-[1.05] tracking-[-0.02em] text-white md:text-3xl lg:text-4xl">
          {article.title}
        </h2>
        {article.summary && (
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {article.summary}
          </p>
        )}
        {article.link && (
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#D8B96F] transition-colors group-hover:text-white">
            Read article
            <LucideIcon
              name="ArrowRight"
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        )}
      </div>
    </div>
  );

  const shellClass =
    "group relative block overflow-hidden rounded-[1.5rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#C8A24C]/30 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.0, ease: EASE }}
      className="mb-16"
    >
      {article.link ? (
        isExternal(article.link) ? (
          <a href={article.link} target="_blank" rel="noopener noreferrer" className={shellClass}>
            {inner}
          </a>
        ) : (
          <Link href={article.link} className={shellClass}>
            {inner}
          </Link>
        )
      ) : (
        <div className={shellClass}>{inner}</div>
      )}
    </motion.article>
  );
}

function ArticleCard({ article }: { article: SheetArticle }) {
  const shellClass =
    "group block h-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#12100e]/60 backdrop-blur-md transition-all duration-500 hover:border-[#C8A24C]/30";

  const inner = (
    <>
      <div className="relative h-44 w-full overflow-hidden">
        {article.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImagePath(article.image)}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#1a1410] to-[#0a0806]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/80 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D8B96F]">
          {article.category && <span>{article.category}</span>}
          {article.readingTime && (
            <>
              <span className="text-white/25">·</span>
              <span className="text-white/60">{article.readingTime}</span>
            </>
          )}
          {article.publishDate && (
            <>
              <span className="text-white/25">·</span>
              <span className="text-white/60">{article.publishDate}</span>
            </>
          )}
        </div>
        <h3 className="mb-3 text-lg font-bold uppercase leading-tight tracking-[-0.01em] text-white transition-colors group-hover:text-[#D8B96F]">
          {article.title}
        </h3>
        {article.summary && (
          <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-white/65">
            {article.summary}
          </p>
        )}
        {article.link && (
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C] transition-colors group-hover:text-white">
            Read
            <LucideIcon
              name="ArrowUpRight"
              size={12}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        )}
      </div>
    </>
  );

  if (!article.link) return <div className={shellClass}>{inner}</div>;

  return isExternal(article.link) ? (
    <a href={article.link} target="_blank" rel="noopener noreferrer" className={shellClass}>
      {inner}
    </a>
  ) : (
    <Link href={article.link} className={shellClass}>
      {inner}
    </Link>
  );
}

function isExternal(link: string): boolean {
  return /^https?:\/\//i.test(link);
}
