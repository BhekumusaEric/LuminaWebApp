"use client";

import { useEffect, useState } from "react";
import { SITE, getImagePath } from "@/lib/data";
import { fetchSheetData, type SheetArticle } from "@/lib/googleSheets";
import Link from "next/link";

export default function InsightsList() {
  const [articles, setArticles] = useState<SheetArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadArticles() {
      const spreadsheetId = SITE.googleSheets.spreadsheetId;
      if (!spreadsheetId) {
        // Fallback to empty state if spreadsheet ID is not configured yet
        setLoading(false);
        return;
      }

      try {
        const rawData = await fetchSheetData(spreadsheetId, SITE.googleSheets.articlesGid);
        const parsed: SheetArticle[] = rawData.map((item, idx) => ({
          id: item.id || idx.toString(),
          slug: item.slug || "",
          category: item.category || "",
          title: item.title || "",
          summary: item.summary || "",
          readingTime: item.readingTime || "",
          publishDate: item.publishDate || "",
          image: item.image || "",
          featured: item.featured === "true" || item.featured === "TRUE" || item.featured === "1",
        }));
        setArticles(parsed);
      } catch (err) {
        console.error("Error loading articles from sheet:", err);
        setError("Unable to load articles at this time.");
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="animate-pulse bg-white rounded-none overflow-hidden border border-[#2B2118]/5 p-6"
          >
            <div className="bg-[#2B2118]/5 h-44 rounded-none mb-4" />
            <div className="h-4 bg-[#2B2118]/10 rounded w-1/4 mb-3" />
            <div className="h-6 bg-[#2B2118]/10 rounded w-3/4 mb-2" />
            <div className="h-4 bg-[#2B2118]/5 rounded w-full mb-1" />
            <div className="h-4 bg-[#2B2118]/5 rounded w-5/6" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 font-medium">{error}</p>
        <p className="text-[#475569]/60 text-sm mt-2">
          Please check the Google Sheets configuration or contact support.
        </p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-[#475569] text-lg">Articles coming soon.</p>
        <p className="text-[#475569]/60 text-sm mt-2">
          Check back for expert insights on leadership and career growth.
        </p>
      </div>
    );
  }

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <>
      {/* Featured Article */}
      {featured && (
        <div className="mb-16 bg-white rounded-none overflow-hidden shadow-sm border border-[#2B2118]/5">
          <div className="bg-[#2B2118]/5 h-64 flex items-center justify-center">
            {featured.image ? (
              <img
                src={getImagePath(featured.image)}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-[#475569] text-sm">[ Featured Image ]</p>
            )}
          </div>
          <div className="p-8">
            <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-wider mb-2">
              {featured.category}
            </p>
            <h2 className="text-2xl font-bold mb-3">{featured.title}</h2>
            <p className="text-[#475569] mb-6">{featured.summary}</p>
            <Link
              href={`/insights/${featured.slug}`}
              className="text-[#C9A227] font-semibold hover:underline"
            >
              Read Article →
            </Link>
          </div>
        </div>
      )}

      {/* Article Grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="bg-white rounded-none overflow-hidden shadow-sm border border-[#2B2118]/5 hover:shadow-md transition-shadow group block"
            >
              <div className="bg-[#2B2118]/5 h-44 flex items-center justify-center overflow-hidden">
                {article.image ? (
                  <img
                    src={getImagePath(article.image)}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <p className="text-[#475569] text-xs">[ Image ]</p>
                )}
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
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
