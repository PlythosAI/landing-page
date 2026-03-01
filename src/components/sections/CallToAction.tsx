import EmailButton from "@/components/ui/EmailButton";
import FadeIn from "@/components/ui/FadeIn";

export default function CallToAction() {
  return (
    <section className="py-6 px-3">
      <div className="w-fit mx-auto">
        <FadeIn>
          <div className="rounded-3xl bg-linear-to-br from-brand-900/60 to-brand-800/20 border border-brand-600/20 px-3 py-10 md:px-10 md:py-15 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Quote
            </h2>
            <p className="text-zinc-400 text-lg mb-6 md:mb-8 max-w-lg mx-auto">
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
