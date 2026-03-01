import LogoWordmark from "@/components/LogoWordmark";
import EmailButton from "@/components/ui/EmailButton";

const Header = () => {
  return (
    <header className="fixed top-0 z-999 w-full p-2 py-3 md:px-8 md:py-5">
      <div className="w-full isolate rounded-full max-w-content mx-auto glass-panel flex items-center justify-between">
        <div className="ml-4 md:ml-6">
          <LogoWordmark />
        </div>
        <EmailButton className="self-stretch m-3 md:m-4 px-4 py-2 md:px-6 md:py-4 text-md md:text-lg font-semibold">
          Get a Quote
        </EmailButton>
      </div>
    </header>
  );
};

export default Header;
