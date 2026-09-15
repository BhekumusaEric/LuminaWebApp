"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "@/components/ui/LucideIcon";
import { SITE } from "@/lib/data";

/**
 * ContactForm
 * ─────────────────────────────────────────────────────────────
 * Dark-glass form matching the site's editorial language.
 * Submits to Web3Forms (no backend). Access key in SITE.web3forms.
 * ───────────────────────────────────────────────────────────── */
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3forms.accessKey,
          ...data,
        }),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-[#C8A24C]/60 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-[#C8A24C]/25";

  return (
    <div className="lumina-glass-dark flex h-full flex-col p-8 md:p-10">
      <div className="mb-8 flex items-center gap-4">
        <span className="h-px w-12 bg-[#C8A24C]/50" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#C8A24C]">
          Send a Message
        </span>
      </div>

      <h2 className="mb-8 text-2xl font-bold uppercase leading-tight tracking-[-0.02em] text-white md:text-3xl">
        Start the Conversation.
      </h2>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="flex flex-1 flex-col items-center justify-center rounded-xl border border-[#C8A24C]/25 bg-[#C8A24C]/[0.06] p-10 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C8A24C]/20">
              <LucideIcon name="Check" size={22} className="text-[#D8B96F]" />
            </div>
            <p className="text-lg font-semibold text-white">Message sent.</p>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Thank you for reaching out. We'll be in touch shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact number (optional)"
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Tell us more about your request…"
            required
            rows={5}
            className={`${inputClass} resize-none`}
          />

          {status === "error" && (
            <p className="text-sm text-red-300">
              Something went wrong. Please try again or reach us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-[#B8931E] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.24em] text-[#1a1410] shadow-[0_8px_24px_rgba(184,144,32,0.18)] transition-all hover:bg-[#C8A24C] hover:shadow-[0_14px_32px_rgba(184,144,32,0.28)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-[#1a1410]/40 border-t-[#1a1410]" />
                Sending…
              </>
            ) : (
              <>
                Send Message
                <LucideIcon name="ArrowRight" size={14} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
