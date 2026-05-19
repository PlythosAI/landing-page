import CtaButton from "@/components/ui/CtaButton";

export default function Hero() {
  return (
    <section className="min-h-hero flex items-center px-4 sm:px-6 border-b border-zinc-800">
      <div className="max-w-content mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-175">
          AI That{" "}
          <span className="text-amber-400">
            Negotiates.
          </span>{" "}
          Unlocking new value.
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl mb-8 leading-relaxed">
          Strategic AI that finds the deals others miss.
        </p>
        <div className="flex flex-wrap gap-3">
          <CtaButton type="early-access">Request Early Access</CtaButton>
        </div>
      </div>
    </section>
  );
}
