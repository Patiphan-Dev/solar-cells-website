import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-amber-500 text-navy-950 hover:bg-amber-600",
  secondary: "bg-navy-900 text-white hover:bg-navy-800",
  ghost: "border border-navy-900/20 text-navy-900 hover:bg-slate-50",
};

export default function Button({ href, children, variant = "primary", className = "", external = false }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-heading font-semibold text-sm transition-colors ${VARIANT_CLASSES[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
