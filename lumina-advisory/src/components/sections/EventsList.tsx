"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SITE, getImagePath } from "@/lib/data";
import { fetchEvents, type SheetEvent } from "@/lib/googleSheets";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { Button } from "@/components/ui/Button";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * EventsList
 * ─────────────────────────────────────────────────────────────
 * Renders events the owner adds to the connected Google Sheet.
 *  - Each event: a dark-glass hairline-separated row with
 *    date | title + description | RSVP button
 *  - Optional cover image on the left of the first cards
 *  - Loading / empty / error states match InsightsList
 *  - The whole section is hidden gracefully if `eventsGid` is
 *    left blank in `SITE.googleSheets` (safe default)
 * ───────────────────────────────────────────────────────────── */
export default function EventsList() {
  const [events, setEvents] = useState<SheetEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [configured, setConfigured] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function loadEvents() {
      const { spreadsheetId, eventsGid } = SITE.googleSheets;
      // If the events tab isn't wired yet, treat as intentionally hidden.
      if (!spreadsheetId || !eventsGid) {
        if (!cancelled) {
          setConfigured(false);
          setLoading(false);
        }
        return;
      }
      try {
        const data = await fetchEvents(spreadsheetId, eventsGid);
        if (!cancelled) setEvents(data);
      } catch (err) {
        console.error("[EventsList] load error:", err);
        if (!cancelled) setError("Unable to load events right now.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    loadEvents();
    return () => {
      cancelled = true;
    };
  }, []);

  // ────── LOADING ──────
  if (loading) {
    return (
      <div className="mx-auto max-w-4xl space-y-4">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="h-40 animate-pulse rounded-[1.25rem] border border-white/10 bg-white/[0.03]"
          />
        ))}
      </div>
    );
  }

  // ────── ERROR ──────
  if (error) {
    return (
      <div className="mx-auto max-w-md py-10 text-center">
        <div className="mb-3 inline-flex items-center gap-3">
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

  // ────── EMPTY / UNCONFIGURED — falls back to the placeholder ──────
  if (!configured || events.length === 0) {
    return (
      <div className="lumina-glass-dark mx-auto max-w-3xl p-10 text-center md:p-14">
        <div className="mb-6 inline-flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C8A24C]/15 text-[#D8B96F]">
            <LucideIcon name="Calendar" size={22} />
          </div>
          <h3 className="text-2xl font-bold uppercase tracking-[-0.02em] text-white md:text-3xl">
            Events Coming Soon
          </h3>
        </div>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          We&apos;re planning workshops, coaching sessions, and community gatherings.
          Join the community below to be the first to know when the calendar opens.
        </p>
      </div>
    );
  }

  // ────── EVENTS ──────
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {events.map((event, i) => (
        <motion.article
          key={event.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: i * 0.06, ease: EASE }}
          whileHover={{ y: -2, transition: { type: "spring", stiffness: 300, damping: 20 } }}
          className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#12100e]/60 backdrop-blur-md transition-all duration-500 hover:border-[#C8A24C]/30"
        >
          <div className="flex flex-col md:flex-row">
            {/* Optional image */}
            {event.image && (
              <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-auto md:w-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getImagePath(event.image)}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08060a]/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#12100e]/60" />
              </div>
            )}

            {/* Body */}
            <div className="flex-1 p-6 md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="min-w-0 flex-1">
                  {/* Meta line: date · time · location */}
                  <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D8B96F]">
                    {event.date && (
                      <span className="flex items-center gap-2">
                        <LucideIcon name="Calendar" size={12} />
                        {event.date}
                      </span>
                    )}
                    {event.time && (
                      <>
                        <span className="text-white/25">·</span>
                        <span className="flex items-center gap-2 text-white/70">
                          <LucideIcon name="Clock" size={12} />
                          {event.time}
                        </span>
                      </>
                    )}
                    {event.location && (
                      <>
                        <span className="text-white/25">·</span>
                        <span className="flex items-center gap-2 text-white/70">
                          <LucideIcon name="MapPin" size={12} />
                          {event.location}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-bold uppercase leading-tight tracking-[-0.01em] text-white transition-colors group-hover:text-[#D8B96F] md:text-2xl">
                    {event.title}
                  </h3>
                  {event.description && (
                    <p className="max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* RSVP button */}
                {event.link && (
                  <div className="shrink-0 md:pt-1">
                    <Button href={event.link} variant="primary" external>
                      RSVP
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
