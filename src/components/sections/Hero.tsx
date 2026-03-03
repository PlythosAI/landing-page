import EmailButton from "@/components/ui/EmailButton";
import Logo from "@/components/Logo";
import Link from "next/link";

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
        <div className="flex flex-wrap justify-center gap-4 sm:gap-3">
          <EmailButton>Request Early Access</EmailButton>
          <Link
            href="/leaderboard"
            className="rounded-full flex items-center gap-2 ring-1 ring-brand-400/50 bg-linear-to-br from-brand-300/20 to-brand-500/20 hover:from-brand-300/30 hover:to-brand-500/30 text-brand-300 font-semibold w-fit transition-colors duration-200 text-xl py-3 px-5 md:py-4 md:px-6"
          >
            Leaderboard
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
