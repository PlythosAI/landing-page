import { db } from "@/db";
import { leaderboard } from "@/db/schema";
import { desc, type InferSelectModel } from "drizzle-orm";
import LeaderboardTable from "@/components/LeaderboardTable";

export const revalidate = 0;

type LeaderboardRow = InferSelectModel<typeof leaderboard>;

export default async function LeaderboardPage() {
  let initialRows: LeaderboardRow[] = [];
  try {
    initialRows = await db
      .select()
      .from(leaderboard)
      .orderBy(desc(leaderboard.totalScore))
      .limit(50);
  } catch {
    // DB not yet configured — show empty state
  }

  return (
    <div className="min-h-screen text-white pt-16 pb-20 px-4">
      <div className="max-w-content mx-auto">
        <div className="border-b border-zinc-800 py-8 mb-8">
          <div className="mb-2">
            <span className="text-amber-500 text-[10px] tracking-[0.3em] uppercase">
              ● Live Rankings
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Edinburgh AI Expo
          </h1>
          <p className="text-amber-400 text-lg font-bold uppercase tracking-wider mb-3">
            Negotiation Leaderboard
          </p>
          <p className="text-zinc-500 text-sm max-w-xl">
            Highest total score at the end of the expo wins a{" "}
            <span className="text-amber-400 font-semibold">£100 gift card</span>.
            Rankings update in real-time.
          </p>
        </div>
        <LeaderboardTable initialRows={initialRows} />
      </div>
    </div>
  );
}
