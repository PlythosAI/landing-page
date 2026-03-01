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
        "rounded-full flex items-center bg-brand-600 hover:bg-brand-500 text-white font-semibold w-fit transition-colors duration-200 text-xl py-3 px-5 md:py-4 md:px-6",
        className,
      )}
    >
      {children}
    </a>
  );
}
