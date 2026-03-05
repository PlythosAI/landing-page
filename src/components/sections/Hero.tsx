import EmailButton from "@/components/ui/EmailButton";
import Logo from "@/components/Logo";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-hero flex items-center px-4 sm:px-6 border-b border-zinc-800">
      <div className="max-w-content mx-auto">
        {/*<div className="mb-3">*/}
        {/*  <span className="text-amber-500 text-[10px] tracking-[0.3em] uppercase">*/}
        {/*    ● System Online*/}
        {/*  </span>*/}
        {/*</div>*/}
        <div className="flex mb-8">
          <Logo className="h-12 md:h-20" />
        </div>
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
          <EmailButton>Request Early Access</EmailButton>
          <Link
            href="/leaderboard"
            className="flex items-center gap-2 border border-zinc-700 hover:border-amber-500/50 text-zinc-400 hover:text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 transition-colors duration-200"
          >
            Leaderboard
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
