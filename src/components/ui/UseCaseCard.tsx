import { ReactNode } from "react";
import Card from "./Card";

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function UseCaseCard({
  icon,
  title,
  description,
}: UseCaseCardProps) {
  return (
    <Card className="flex flex-col gap-3 h-full">
      <div className="w-10 h-10 rounded-xl bg-brand-600/20 flex items-center justify-center text-brand-400">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
    </Card>
  );
}
