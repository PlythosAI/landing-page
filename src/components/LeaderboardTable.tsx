"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import FadeIn from "@/components/ui/FadeIn";
import type { InferSelectModel } from "drizzle-orm";
import type { leaderboard } from "@/db/schema";

type LeaderboardRow = InferSelectModel<typeof leaderboard>;

// Supabase Realtime returns raw DB column names (snake_case)
type RealtimeRow = {
  id: string;
  name: string;
  email: string;
  final_cash: number;
  retained_assets: number;
  favorable_terms: number;
  total_score: number;
  accepted_deal: boolean;
  rounds: number;
  time: number;
  gdpr_consent: boolean;
  gdpr_consent_at: string | null;
  created_at: string;
};

function mapRealtimeRow(row: RealtimeRow): LeaderboardRow {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    finalCash: row.final_cash,
    retainedAssets: row.retained_assets,
    favorableTerms: row.favorable_terms,
    totalScore: row.total_score,
    acceptedDeal: row.accepted_deal,
    rounds: row.rounds,
    time: row.time,
    gdprConsent: row.gdpr_consent,
    gdprConsentAt: row.gdpr_consent_at ? new Date(row.gdpr_consent_at) : null,
    createdAt: new Date(row.created_at),
  };
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(amount);
}

const RANK_TEXT = ["text-amber-400", "text-zinc-300", "text-amber-600"];
const RANK_BG = ["bg-amber-500/5", "bg-zinc-500/5", "bg-amber-700/5"];
const RANK_LABELS = ["01", "02", "03"];

interface LeaderboardTableProps {
  initialRows: LeaderboardRow[];
}

export default function LeaderboardTable({
  initialRows,
}: LeaderboardTableProps) {
  const [rows, setRows] = useState<LeaderboardRow[]>(initialRows);

  useEffect(() => {
    const channel = supabase
      .channel("leaderboard-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "leaderboard" },
        (payload) => {
          if (payload.eventType === "INSERT") {
            const newRow = mapRealtimeRow(payload.new as RealtimeRow);
            setRows((prev) =>
              [...prev, newRow]
                .sort((a, b) => b.totalScore - a.totalScore)
                .slice(0, 50),
            );
          } else if (payload.eventType === "UPDATE") {
            const updated = mapRealtimeRow(payload.new as RealtimeRow);
            setRows((prev) =>
              prev
                .map((r) => (r.id === updated.id ? updated : r))
                .sort((a, b) => b.totalScore - a.totalScore),
            );
          } else if (payload.eventType === "DELETE") {
            const deletedId = (payload.old as { id: string }).id;
            setRows((prev) => prev.filter((r) => r.id !== deletedId));
          }
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (rows.length === 0) {
    return (
      <FadeIn>
        <div className="border border-zinc-800 bg-black py-24 text-center">
          <p className="text-amber-500 text-[10px] tracking-[0.3em] uppercase mb-4">── No Entries ──</p>
          <p className="text-zinc-500 text-sm">
            Be the first to negotiate.
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <div className="border border-zinc-800 bg-black overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/50">
                <th className="py-3 px-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider w-16">Rank</th>
                <th className="py-3 px-4 text-left text-[10px] text-zinc-500 uppercase tracking-wider">Name</th>
                <th className="py-3 px-4 text-right text-[10px] text-zinc-500 uppercase tracking-wider">Total Score</th>
                <th className="py-3 px-4 text-center text-[10px] text-zinc-500 uppercase tracking-wider">Rounds</th>
                <th className="py-3 px-4 text-center text-[10px] text-zinc-500 uppercase tracking-wider">Deal</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`border-b border-zinc-900 last:border-0 transition-colors hover:bg-amber-500/3 ${
                    index < 3 ? RANK_BG[index] : ""
                  }`}
                >
                  <td
                    className={`py-3 px-4 font-bold tabular-nums ${index < 3 ? RANK_TEXT[index] : "text-zinc-600"}`}
                  >
                    {index < 3 ? RANK_LABELS[index] : String(index + 1).padStart(2, "0")}
                  </td>
                  <td className="py-3 px-4 text-zinc-200">
                    {row.name}
                  </td>
                  <td
                    className={`py-3 px-4 text-right tabular-nums font-bold ${index < 3 ? RANK_TEXT[index] : "text-zinc-300"}`}
                  >
                    {formatCurrency(row.totalScore)}
                  </td>
                  <td className="py-3 px-4 text-center text-zinc-500 tabular-nums">
                    {row.rounds}
                  </td>
                  <td className="py-3 px-4 text-center">
                    {row.acceptedDeal ? (
                      <span className="text-[10px] text-emerald-400 uppercase tracking-wider">
                        ● YES
                      </span>
                    ) : (
                      <span className="text-[10px] text-red-400 uppercase tracking-wider">
                        ● NO
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FadeIn>
  );
}
