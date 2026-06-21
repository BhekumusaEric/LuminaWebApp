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
    "bg-[#C9A227] text-white hover:bg-[#b8911f] transition-colors duration-200",
  secondary:
    "bg-[#2B2118] text-white hover:bg-[#1a130e] transition-colors duration-200",
  outline:
    "border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-white transition-colors duration-200 bg-transparent",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-8 py-3 text-xs font-bold tracking-widest uppercase ${styles[variant]} ${className}`;

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
