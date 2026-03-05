import { BookOpen } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Research() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-content mx-auto">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap justify-between items-center gap-2 mb-6">
              <div className="flex flex-row gap-2">
                <BookOpen size={14} className="text-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  Peer-Reviewed Research
                </span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 border border-zinc-700 px-2 py-0.5 w-fit md:w-auto">
                Coming Soon
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Targeting a Top-Tier ML Conference
            </h2>

            <div className="h-px bg-amber-500/20 mb-8" />
          </FadeIn>

          <FadeIn delay={150}>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We&apos;ve developed a hierarchical evaluation framework for AI
              agents operating in complex, multi-step conversations like
              negotiations and persuasion — where success is delayed and often
              hard to measure directly. Instead of relying only on final
              outcomes or costly full simulations, our system evaluates
              strategic behavior across three layers, using interpretable
              mid-level signals to diagnose performance as interactions unfold.
              This layered approach makes high-stakes conversational AI more
              transparent, scalable, and predictably aligned with real-world
              results.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
