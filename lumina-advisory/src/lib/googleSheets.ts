/**
 * GOOGLE SHEETS INTEGRATION
 * ─────────────────────────────────────────────────────────────
 * The site owner can update Insights and Events by editing a
 * Google Sheet — no code changes needed.
 *
 * HOW IT WORKS:
 *   1. Owner opens the Google Sheet in their browser
 *   2. Sheet must be shared as "Anyone with the link — Viewer"
 *   3. This code fetches CSV via Google's `gviz` endpoint
 *      (CORS-enabled, no proxy needed)
 *   4. Rows appear on the site within seconds of saving the sheet
 *
 * See SHEETS_SETUP.md at the repo root for owner-facing docs.
 * ───────────────────────────────────────────────────────────── */

// ────────── Schema types ──────────

export interface SheetArticle {
  id: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  readingTime: string;
  publishDate: string;
  image: string;
  featured: boolean;
  /** External link to full article (LinkedIn post, blog, Medium, etc.). Optional. */
  link: string;
}

export interface SheetEvent {
  id: string;
  title: string;
  date: string;       // ISO date "2026-11-15" or human "15 November 2026"
  time: string;       // e.g. "18:00 – 20:00"
  location: string;   // "Online (Zoom)" or "Sandton, Johannesburg"
  description: string;
  link: string;       // Registration / RSVP URL
  image: string;      // Optional cover image URL
}

// ────────── URL helpers ──────────

/**
 * Accepts either:
 *  - A Google Sheets URL (`https://docs.google.com/spreadsheets/d/<ID>/…`)
 *  - A raw sheet ID (`1abc…`)
 *  - A published-to-web ID (`2PACX-…`)
 *
 * Returns the shape needed to build the fetch URL.
 */
function parseSheetIdentifier(input: string): {
  kind: "published" | "regular";
  id: string;
} {
  // Try to extract a regular ID from a full URL first
  const urlMatch = input.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (urlMatch) {
    return { kind: "regular", id: urlMatch[1] };
  }

  // Published-to-web IDs start with "2PACX-"
  if (input.startsWith("2PACX-")) {
    return { kind: "published", id: input };
  }

  // Otherwise treat as a raw regular sheet ID
  return { kind: "regular", id: input };
}

/**
 * Builds a CSV fetch URL for the given sheet + tab.
 *
 * For "regular" sheet IDs (from the sheet's URL bar), uses the `gviz`
 * endpoint — CORS-enabled by default, works with any sheet shared as
 * "Anyone with the link".
 *
 * For "published" IDs (2PACX-*), uses the pub CSV endpoint — required
 * for sheets deliberately published via File > Share > Publish to web.
 */
function buildCsvUrl(sheetIdentifier: string, gid: string): string {
  const { kind, id } = parseSheetIdentifier(sheetIdentifier);
  if (kind === "published") {
    return `https://docs.google.com/spreadsheets/d/e/${id}/pub?output=csv&gid=${gid}`;
  }
  return `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&gid=${gid}`;
}

// ────────── CSV parser ──────────

/**
 * Parses a raw CSV string into an array of record objects.
 * Handles quoted cells, commas inside quotes, newlines inside cells,
 * and escaped double-quotes ("").
 */
export function parseCSV(csvText: string): Record<string, string>[] {
  const lines: string[][] = [];
  let currentField = "";
  let inQuotes = false;
  let currentRow: string[] = [];

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          currentField += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        currentRow.push(currentField.trim());
        currentField = "";
      } else if (char === "\n" || char === "\r") {
        if (char === "\r" && nextChar === "\n") i++;
        currentRow.push(currentField.trim());
        lines.push(currentRow);
        currentRow = [];
        currentField = "";
      } else {
        currentField += char;
      }
    }
  }

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    lines.push(currentRow);
  }

  if (lines.length < 2) return [];

  const headers = lines[0].map((h) => h.trim());
  const data: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    if (row.length === 0 || (row.length === 1 && row[0] === "")) continue;
    const item: Record<string, string> = {};
    headers.forEach((header, index) => {
      if (header) {
        item[header] = row[index] || "";
      }
    });
    data.push(item);
  }
  return data;
}

// ────────── Fetch helpers ──────────

async function fetchCsvRows(
  sheetIdentifier: string,
  gid: string
): Promise<Record<string, string>[]> {
  if (!sheetIdentifier || !gid) {
    return [];
  }
  const url = buildCsvUrl(sheetIdentifier, gid);
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`Sheet fetch failed with HTTP ${res.status}`);
    }
    const text = await res.text();
    return parseCSV(text);
  } catch (err) {
    console.error(
      `[googleSheets] Could not load sheet "${sheetIdentifier}" tab "${gid}".`,
      err,
      "Check that the sheet is shared as 'Anyone with the link — Viewer'.",
    );
    return [];
  }
}

/** Boolean helper — accepts many truthy string values from the sheet. */
function toBool(v: string | undefined): boolean {
  if (!v) return false;
  const s = v.toString().trim().toLowerCase();
  return s === "true" || s === "1" || s === "yes" || s === "y";
}

/**
 * Fetch and normalise Insights articles from the "Articles" tab.
 */
export async function fetchArticles(
  sheetIdentifier: string,
  gid: string,
): Promise<SheetArticle[]> {
  const rows = await fetchCsvRows(sheetIdentifier, gid);
  return rows.map((r, i) => ({
    id: r.id || String(i),
    slug: r.slug || slugify(r.title || `article-${i}`),
    category: r.category || "",
    title: r.title || "",
    summary: r.summary || "",
    readingTime: r.readingTime || r["reading time"] || "",
    publishDate: r.publishDate || r["publish date"] || r.date || "",
    image: r.image || r.imageUrl || "",
    featured: toBool(r.featured),
    link: r.link || r.url || "",
  }));
}

/**
 * Fetch and normalise Events from the "Events" tab.
 */
export async function fetchEvents(
  sheetIdentifier: string,
  gid: string,
): Promise<SheetEvent[]> {
  const rows = await fetchCsvRows(sheetIdentifier, gid);
  return rows.map((r, i) => ({
    id: r.id || String(i),
    title: r.title || "",
    date: r.date || "",
    time: r.time || "",
    location: r.location || "",
    description: r.description || "",
    link: r.link || r.url || "",
    image: r.image || r.imageUrl || "",
  }));
}

/** Legacy alias — kept for backward compatibility with any older imports. */
export async function fetchSheetData(
  sheetIdentifier: string,
  gid: string,
): Promise<Record<string, string>[]> {
  return fetchCsvRows(sheetIdentifier, gid);
}

// ────────── Utilities ──────────

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
