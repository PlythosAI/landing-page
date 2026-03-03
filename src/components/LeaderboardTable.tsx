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
  final_cash: number;
  retained_assets: number;
  favorable_terms: number;
  total_score: number;
  accepted_deal: boolean;
  rounds: number;
  created_at: string;
};

function mapRealtimeRow(row: RealtimeRow): LeaderboardRow {
  return {
    id: row.id,
    name: row.name,
    finalCash: row.final_cash,
    retainedAssets: row.retained_assets,
    favorableTerms: row.favorable_terms,
    totalScore: row.total_score,
    acceptedDeal: row.accepted_deal,
    rounds: row.rounds,
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

const RANK_TEXT = ["text-yellow-400", "text-gray-300", "text-amber-600"];
const RANK_BG = ["bg-yellow-400/10", "bg-gray-300/10", "bg-amber-600/10"];
const RANK_MEDALS = ["🥇", "🥈", "🥉"];

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
        <div className="rounded-2xl bg-brand-600/10 border border-brand-600/20 py-24 text-center">
          <p className="text-4xl mb-4">🏆</p>
          <p className="text-gray-400 text-lg">No entries yet.</p>
          <p className="text-gray-500 text-sm mt-2">
            Be the first to negotiate!
          </p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <div className="rounded-2xl bg-brand-600/10 border border-brand-600/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-brand-600/20 text-brand-300 text-xs uppercase tracking-wider">
                <th className="py-4 px-4 text-left w-16">Rank</th>
                <th className="py-4 px-4 text-left">Name</th>
                <th className="py-4 px-4 text-right">Final Cash</th>
                <th className="py-4 px-4 text-right">Retained Assets</th>
                <th className="py-4 px-4 text-right">Favorable Terms</th>
                <th className="py-4 px-4 text-right">Total Score</th>
                <th className="py-4 px-4 text-center">Deal</th>
                <th className="py-4 px-4 text-center">Rounds</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.id}
                  className={`border-b border-brand-600/10 last:border-0 transition-colors hover:bg-brand-600/5 ${
                    index < 3 ? RANK_BG[index] : ""
                  }`}
                >
                  <td
                    className={`py-4 px-4 font-bold text-base ${index < 3 ? RANK_TEXT[index] : "text-gray-500"}`}
                  >
                    {index < 3 ? RANK_MEDALS[index] : index + 1}
                  </td>
                  <td className="py-4 px-4 font-semibold text-white">
                    {row.name}
                  </td>
                  <td className="py-4 px-4 text-right text-gray-300 font-mono">
                    {formatCurrency(row.finalCash)}
                  </td>
                  <td className="py-4 px-4 text-right text-gray-300 font-mono">
                    {formatCurrency(row.retainedAssets)}
                  </td>
                  <td className="py-4 px-4 text-right text-gray-300 font-mono">
                    {formatCurrency(row.favorableTerms)}
                  </td>
                  <td
                    className={`py-4 px-4 text-right font-bold font-mono ${index < 3 ? RANK_TEXT[index] : "text-white"}`}
                  >
                    {formatCurrency(row.totalScore)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.acceptedDeal ? (
                      <span className="inline-block px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                        Yes
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                        No
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center text-gray-300">
                    {row.rounds}
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
