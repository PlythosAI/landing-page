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
    <div className="min-h-screen text-white pt-50 pb-20 px-4">
      <div className="max-w-content mx-auto">
        <div className="fixed inset-0 -z-999 h-screen-dynamic overflow-hidden pointer-events-none">
          <div className="absolute bg-radial-[circle_farthest-corner_at_90%_10%] from-brand-600/30 via-brand-600/10 to-transparent blur-[180px] -top-70 -right-60 h-250 w-250 md:h-350 md:w-500 md:-top-90 md:-right-100 rounded-full" />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Edinburgh AI Expo
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-brand-400 mb-4">
            Negotiation Leaderboard
          </p>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Highest total score at the end of the expo wins a gift card.
            Rankings update in real-time.
          </p>
        </div>
        <LeaderboardTable initialRows={initialRows} />
      </div>
    </div>
  );
}
