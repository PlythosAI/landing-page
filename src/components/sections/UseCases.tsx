import { Landmark, Package, ScrollText, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import UseCaseCard from "@/components/ui/UseCaseCard";
import FadeIn from "@/components/ui/FadeIn";

const useCases = [
  {
    icon: <Landmark size={20} />,
    title: "M&A Structuring",
    description:
      "Navigate earn-outs, escrow terms, and reps & warranties across complex acquisition deals.",
  },
  {
    icon: <Package size={20} />,
    title: "Procurement",
    description:
      "Optimize multi-supplier negotiations to drive cost reduction without sacrificing quality or terms.",
  },
  {
    icon: <ScrollText size={20} />,
    title: "Licensing & IP",
    description:
      "Structure licensing agreements that maximize royalty value while preserving partner relationships.",
  },
  {
    icon: <Users size={20} />,
    title: "Negotiation",
    description:
      "Coordinate aligned outcomes across three or more parties with conflicting priorities.",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn>
          <SectionHeading
            title="Built for High-Stakes Deals"
            subtitle="PlythosAI operates across the most complex negotiation domains in enterprise."
          />
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {useCases.map((useCase, i) => (
            <FadeIn key={useCase.title} delay={i * 100} className="h-full">
              <UseCaseCard {...useCase} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
