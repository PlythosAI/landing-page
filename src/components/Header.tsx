import Link from "next/link";
import LogoWordmark from "@/components/LogoWordmark";
import EmailButton from "@/components/ui/EmailButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shrink-0 w-full bg-black border-b border-zinc-800">
      <div className="h-full px-4 py-3 md:px-8 flex items-center justify-between max-w-content mx-auto">
        <div className="flex items-center gap-6">
          <LogoWordmark />
          <span className="hidden md:block text-amber-500 text-[10px] tracking-[0.25em] uppercase">
            Negotiation AI
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/leaderboard"
            className="hidden md:block text-[10px] text-zinc-500 hover:text-amber-400 uppercase tracking-wider transition-colors"
          >
            Leaderboard
          </Link>
          <EmailButton>Get a Quote</EmailButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
