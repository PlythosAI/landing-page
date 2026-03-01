import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-brand-600/10 border border-brand-600/20 p-6 ${className}`}
    >
      {children}
    </div>
  );
}
