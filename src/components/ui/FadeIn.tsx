"use client";

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { useInView } from "@/hooks/useInView";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className,
}: FadeInProps) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={twMerge(className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(20px)",
        transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
