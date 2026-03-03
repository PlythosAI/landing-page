import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

interface Partner {
  name: string;
  src: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: "CSPolar",
    src: "/partners/cspolar.svg",
    url: "https://www.cspolar.com/",
  },
  {
    name: "DepositBox",
    src: "/partners/depositbox.png",
    url: "https://www.depozitbox.ro/",
  },
];

export default function Partners() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-content mx-auto">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-10">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
