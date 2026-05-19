import { ReactNode } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CtaType = "early-access" | "quote";

interface CtaButtonProps {
  children: ReactNode;
  type: CtaType;
  className?: string;
}

export default function CtaButton({ children, type, className }: CtaButtonProps) {
  return (
    <Link
      href={`/contact?type=${type}`}
      className={twMerge(
        "flex items-center border border-amber-500 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 transition-colors duration-200 w-fit",
        className,
      )}
    >
      {children}
    </Link>
  );
}
