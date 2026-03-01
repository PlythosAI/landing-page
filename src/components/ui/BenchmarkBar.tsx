interface BenchmarkBarProps {
  label: string;
  value: number;
  maxValue: number;
  colorClass: string;
  animate: boolean;
}

export default function BenchmarkBar({
  label,
  value,
  maxValue,
  colorClass,
  animate,
}: BenchmarkBarProps) {
  const heightPct = (value / maxValue) * 100;

  return (
    <div className="flex-1 flex flex-col items-center gap-3">
      <span className="text-sm font-semibold text-white tabular-nums">
        {value}%
      </span>
      <div className="w-full h-48 flex items-end">
        <div
          className={`w-full rounded-t-xl ${colorClass} transition-all duration-1000 ease-out`}
          style={{ height: animate ? `${heightPct}%` : "0%" }}
        />
      </div>
      <span className="text-sm text-zinc-400 font-medium">{label}</span>
    </div>
  );
}
