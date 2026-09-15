"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

/**
 * Button
 * ─────────────────────────────────────────────────────────────
 * Every button uses the same motion contract — subtle scale on
 * hover, gentle press on tap, warm gold glow that intensifies
 * with hover. Matches the "high-end editorial" feel of the
 * global backdrop.
 * ───────────────────────────────────────────────────────────── */
const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#B8931E] text-[#1a1410] shadow-[0_8px_24px_rgba(184,144,32,0.18)] hover:bg-[#C8A24C] hover:shadow-[0_14px_32px_rgba(184,144,32,0.28)]",
  secondary:
    "bg-[#1a1410] text-[#EFEBE3] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:bg-[#2B2118]",
  outline:
    "border border-[#C8A24C]/50 bg-white/[0.04] text-[#D8B96F] backdrop-blur-sm hover:border-[#C8A24C] hover:bg-[#C8A24C] hover:text-[#1a1410] hover:shadow-[0_14px_32px_rgba(184,144,32,0.22)]",
};

const springHover = {
  scale: 1.04,
  y: -2,
  transition: { type: "spring" as const, stiffness: 400, damping: 18 },
};

const springTap = {
  scale: 0.97,
  transition: { type: "spring" as const, stiffness: 500, damping: 20 },
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base = `relative inline-flex items-center justify-center rounded-full px-8 py-3 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${styles[variant]} ${className}`;

  const inner = <span className="relative z-10">{children}</span>;

  if (href) {
    return external ? (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        whileHover={springHover}
        whileTap={springTap}
      >
        {inner}
      </motion.a>
    ) : (
      <motion.span whileHover={springHover} whileTap={springTap} className="inline-block">
        <Link href={href} className={base}>
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={base}
      whileHover={springHover}
      whileTap={springTap}
    >
      {inner}
    </motion.button>
  );
}
