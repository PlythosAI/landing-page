import EmailButton from "@/components/ui/EmailButton";
import FadeIn from "@/components/ui/FadeIn";

export default function CallToAction() {
  return (
    <section className="py-6 px-3">
      <div className="w-fit mx-auto">
        <FadeIn>
          <div className="border border-amber-500/40 bg-black px-6 py-12 md:px-12 md:py-16 text-center">
            <div className="mb-3">
              <span className="text-amber-500 text-[10px] tracking-[0.25em] uppercase">
                ── Deploy Now ──
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get a Quote
            </h2>
            <p className="text-zinc-400 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Deploy PlythosAI on your most critical deal. Our team will scope a
              pilot in under a week.
            </p>
            <EmailButton className="mx-auto">Get a Quote</EmailButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
