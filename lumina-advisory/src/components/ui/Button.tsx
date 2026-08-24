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
    "bg-[#D4AF37] text-[#000000] font-bold hover:bg-[#FFD700] hover:shadow-xl transition-all duration-200 rounded-full shadow-lg",
  secondary:
    "bg-[#000000] text-white hover:bg-[#1a1410] transition-colors duration-200 rounded-full",
  outline:
    "border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#000000] font-bold transition-all duration-200 bg-transparent rounded-full",
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
