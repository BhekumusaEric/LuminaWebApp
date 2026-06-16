"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";
import { fetchSheetData, type SheetEvent } from "@/lib/googleSheets";

export default function EventsList() {
  const [events, setEvents] = useState<SheetEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadEvents() {
      const spreadsheetId = SITE.googleSheets.spreadsheetId;
      if (!spreadsheetId || !SITE.googleSheets.eventsGid) {
        // Fallback to empty state if spreadsheet ID or events GID is not configured
        setLoading(false);
        return;
      }

      try {
        const rawData = await fetchSheetData(spreadsheetId, SITE.googleSheets.eventsGid);
        const parsed: SheetEvent[] = rawData.map((item, idx) => ({
          id: item.id || idx.toString(),
          title: item.title || "",
          date: item.date || "",
          time: item.time || "",
          location: item.location || "",
          description: item.description || "",
          link: item.link || "",
        }));
        setEvents(parsed);
      } catch (err) {
        console.error("Error loading events from sheet:", err);
        setError("Unable to load upcoming events at this time.");
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="animate-pulse bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
          >
            <div className="h-4 bg-white/10 rounded w-1/3 mb-2" />
            <div className="h-6 bg-white/20 rounded w-3/4 mb-1" />
            <div className="h-4 bg-white/10 rounded w-1/2 mb-2" />
            <div className="h-4 bg-white/5 rounded w-full mb-1" />
            <div className="h-4 bg-white/5 rounded w-5/6 mb-4" />
            <div className="h-10 bg-white/20 rounded w-full" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-400 font-medium">{error}</p>
        <p className="text-white/40 text-sm mt-2">
          Please check the Google Sheets configuration or contact support.
        </p>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-16 border border-white/10 rounded-2xl">
        <p className="text-white/50 text-lg">Events Coming Soon</p>
        <p className="text-white/30 text-sm mt-2">
          Stay connected via WhatsApp for updates.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => {
        // Fallback to WhatsApp link if no specific RSVP link is provided
        const rsvpLink = event.link || SITE.whatsapp.communityLink;
        const isExternal = rsvpLink.startsWith("http");

        return (
          <div
            key={event.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-[#C9A227] font-semibold uppercase tracking-wider mb-3">
                <span>{event.date}</span>
                {event.time && (
                  <>
                    <span>•</span>
                    <span>{event.time}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              {event.location && (
                <p className="text-white/50 text-xs mb-3 flex items-center gap-1">
                  <span>📍</span> {event.location}
                </p>
              )}
              <p className="text-white/70 text-sm leading-relaxed mb-6 whitespace-pre-line">
                {event.description}
              </p>
            </div>
            <a
              href={rsvpLink}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center bg-white text-[#0F172A] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors mt-auto w-full text-center"
            >
              RSVP & Join
            </a>
          </div>
        );
      })}
    </div>
  );
}
