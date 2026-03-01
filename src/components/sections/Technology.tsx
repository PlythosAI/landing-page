import { GitBranch, ScanSearch, Scale } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: <GitBranch size={20} />,
    title: "MCTS-Distilled Reasoning",
    description:
      "Our models are trained on millions of Monte Carlo Tree Search simulations, learning strategic foresight rather than token prediction. Every response reflects multi-step lookahead.",
  },
  {
    icon: <ScanSearch size={20} />,
    title: "Partially-Observable Domains",
    description:
      "PlythosAI probes counterparties to infer hidden preferences and constraints. It builds a live model of what the other side values — and what they'll accept.",
  },
  {
    icon: <Scale size={20} />,
    title: "Preference Arbitrage",
    description:
      "By mapping the full preference landscape, PlythosAI identifies non-obvious trade-offs that create mutual gain — turning zero-sum standoffs into structured wins.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn>
          <SectionHeading
            title="The Technology"
            subtitle="Three capabilities that separate strategic AI from conversational AI."
          />
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 100} className="h-full">
              <FeatureCard {...feature} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
