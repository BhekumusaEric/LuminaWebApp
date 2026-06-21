"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/data";

/**
 * ContactForm
 * Submits to Web3Forms (no backend required).
 * Setup:
 *  1. Create a free account at https://web3forms.com
 *  2. Get your access key
 *  3. Add it to SITE.web3forms.accessKey in src/lib/data.ts
 */
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
    "w-full px-4 py-3 rounded-xl border border-[#2B2118]/15 bg-white text-[#2B2118] text-sm placeholder:text-[#475569]/50 focus:outline-none focus:ring-2 focus:ring-[#C9A227]";

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

      {status === "success" ? (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
          <p className="text-green-800 font-semibold text-lg mb-2">Message sent!</p>
          <p className="text-green-700 text-sm">
            Thank you for reaching out. We'll be in touch shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Tell us more about your request"
            required
            rows={5}
            className={inputClass}
          />

          {status === "error" && (
            <p className="text-red-600 text-sm">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-[#C9A227] text-[#2B2118] font-semibold px-6 py-3 rounded-xl hover:bg-[#b8911f] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
