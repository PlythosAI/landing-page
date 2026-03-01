import EmailButton from "@/components/ui/EmailButton";
import Logo from "@/components/Logo";

export default function Hero() {
  return (
    <section className="min-h-screen-dynamic flex items-center px-2 sm:px-6">
      <div className="max-w-content mx-auto text-center pt-5">
        <div className="flex justify-center mb-5">
          <Logo className="h-15 md:h-25" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 max-w-175">
          AI That{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-br from-brand-300 to-brand-500">
            Negotiates.
          </span>{" "}
          Unlocking new value.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          Strategic AI that finds the deals others miss.
        </p>
        <EmailButton className="mx-auto">Request Early Access</EmailButton>
      </div>
    </section>
  );
}
