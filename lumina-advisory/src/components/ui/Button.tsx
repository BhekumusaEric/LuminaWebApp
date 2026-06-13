import Link from "next/link";
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

const styles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#C9A227] text-[#0F172A] font-semibold hover:bg-[#b8911f] transition-colors duration-200",
  secondary:
    "bg-[#0F172A] text-white font-semibold hover:bg-[#1e293b] transition-colors duration-200",
  outline:
    "border-2 border-[#C9A227] text-[#C9A227] font-semibold hover:bg-[#C9A227] hover:text-[#0F172A] transition-colors duration-200",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm ${styles[variant]} ${className}`;

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    ) : (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
