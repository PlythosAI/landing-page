import { Landmark, Package, ScrollText, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import UseCaseCard from "@/components/ui/UseCaseCard";
import FadeIn from "@/components/ui/FadeIn";

const useCases = [
  {
    icon: <Users size={20} />,
    title: "Digital Marketplaces",
    description:
      "Execute high-volume buy and sell strategies across digital asset marketplaces in real time.",
  },
  {
    icon: <Package size={20} />,
    title: "Procurement",
    description:
      "Optimize multi-supplier negotiations to drive cost reduction without sacrificing quality or terms.",
  },
  {
    icon: <Landmark size={20} />,
    title: "Sales",
    description:
      "Maximize deal value across pricing, contract terms, and bundling in complex B2B sales cycles.",
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
