import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export default function EmailButton({ children, className }: ButtonProps) {
  return (
    <a
      href="mailto:laurentiu@plythosai.com"
      className={twMerge(
        "flex items-center border border-amber-500 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 transition-colors duration-200 w-fit",
        className,
      )}
    >
      {children}
    </a>
  );
}
