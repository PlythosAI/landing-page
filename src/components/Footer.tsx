import LogoWordmark from "@/components/LogoWordmark";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-zinc-800 px-6 py-6">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <LogoWordmark />
        <p className="text-[10px] text-zinc-600 uppercase tracking-wider">
          &copy; {new Date().getFullYear()} PlythosAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
