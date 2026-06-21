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
}

export interface SheetEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  link: string;
}

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
          // Escaped quote: "" -> "
          currentField += '"';
          i++; // skip next quote
        } else {
          // End of quote
          inQuotes = false;
        }
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        // Start of quote
        inQuotes = true;
      } else if (char === ',') {
        // End of field
        currentRow.push(currentField.trim());
        currentField = "";
      } else if (char === '\n' || char === '\r') {
        // End of row
        if (char === '\r' && nextChar === '\n') {
          i++; // Skip \n
        }
        currentRow.push(currentField.trim());
        lines.push(currentRow);
        currentRow = [];
        currentField = "";
      } else {
        currentField += char;
      }
    }
  }

  // Push final field/row if any remain
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField.trim());
    lines.push(currentRow);
  }

  if (lines.length < 2) return [];

  const headers = lines[0].map(h => h.trim());
  const data: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    // Skip empty lines
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

/**
 * Fetches CSV data from a published Google Sheet and parses it.
 */
export async function fetchSheetData(spreadsheetId: string, gid: string): Promise<Record<string, string>[]> {
  if (!spreadsheetId) {
    console.warn("Spreadsheet ID is missing in Google Sheets config.");
    return [];
  }
  const targetUrl = `https://docs.google.com/spreadsheets/d/e/${spreadsheetId}/pub?output=csv&gid=${gid}`;
  // Use a reliable CORS proxy to prevent browser "Failed to fetch" (CORS) errors on client-side requests
  const url = `https://corsproxy.io/?${encodeURIComponent(targetUrl)}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet data. Status: ${response.status}`);
    }
    const csvText = await response.text();
    return parseCSV(csvText);
  } catch (error) {
    console.error("Error fetching Google Sheet data:", error);
    return [];
  }
}
