import { twMerge } from "tailwind-merge";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={twMerge(
        "aspect-square h-10 bg-linear-to-br from-brand-600 to-brand-100 mask-[url('/logo.svg')] mask-contain mask-no-repeat mask-center",
        className,
      )}
    />
  );
};

export default Logo;
