"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import BenchmarkBar from "@/components/ui/BenchmarkBar";
import FadeIn from "@/components/ui/FadeIn";

const bars = [
  { label: "Human", value: 6, colorClass: "bg-zinc-700" },
  { label: "GPT-5", value: 13, colorClass: "bg-zinc-600" },
  { label: "PlythosAI", value: 81, colorClass: "bg-amber-500" },
];

const MAX_VALUE = 81;

export default function Benchmarks() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn>
          <SectionHeading
            title="Outperforming Humans and GPT-5"
            subtitle="In standard negotiation benchmarks, PlythosAI achieves an 81% win rate — dramatically outperforming both human negotiators and frontier language models."
          />
        </FadeIn>
        <div ref={ref} className="max-w-sm mx-auto">
          <span className="text-xs text-zinc-500 uppercase tracking-widest mb-2 block">
            Win Rate
          </span>
          <div className="flex gap-6 items-end border-b border-zinc-800">
            {bars.map((bar) => (
              <BenchmarkBar
                key={bar.label}
                label={bar.label}
                value={bar.value}
                maxValue={MAX_VALUE}
                colorClass={bar.colorClass}
                animate={animate}
              />
            ))}
          </div>
          <p className="text-xs text-zinc-600 mt-4 text-center">
            NeurIPS benchmark results
          </p>
        </div>
      </div>
    </section>
  );
}
