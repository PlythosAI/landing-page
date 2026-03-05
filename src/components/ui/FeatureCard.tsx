import { ReactNode } from "react";
import Card from "./Card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card className="flex flex-col gap-4 h-full">
      <div className="text-amber-500/60 mb-1">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-brand-400 uppercase tracking-wider">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
