import Link from "next/link";
import Logo from "@/components/Logo";

const LogoWordmark = () => {
  return (
    <Link className="w-fit" href="/">
      <div className="text-xl md:text-2xl bg-clip-text bg-linear-to-br from-brand-300 to-brand-100 flex gap-1.5 sm:gap-2 items-center">
        <Logo className="h-8 md:h-10" />
        <div className="flex gap-px">
          <span className="text-transparent">Plythos</span>
          {/*<span className="text-transparent font-semibold">AI</span>*/}
        </div>
      </div>
    </Link>
  );
};

export default LogoWordmark;
