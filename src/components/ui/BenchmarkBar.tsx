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
    <div className="flex-1 flex flex-col items-center gap-2">
      <span className="text-[11px] font-bold text-white tabular-nums">
        {value}%
      </span>
      <div className="w-full h-48 flex items-end">
        <div
          className={`w-full ${colorClass} transition-all duration-1000 ease-out`}
          style={{ height: animate ? `${heightPct}%` : "0%" }}
        />
      </div>
      <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{label}</span>
    </div>
  );
}
