import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-black border border-zinc-800 p-6 hover:border-brand-500/30 transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
