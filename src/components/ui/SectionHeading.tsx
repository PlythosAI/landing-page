interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <div className={`mb-2 ${centered ? "flex justify-center" : ""}`}>
        <span className="text-brand-500 text-[10px] tracking-[0.25em] uppercase">
          ── {title} ──
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-zinc-400 text-sm leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
