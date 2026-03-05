import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { leaderboard } from "@/db/schema";
import { createInsertSchema } from "drizzle-zod";
import { desc } from "drizzle-orm";
import { z } from "zod";

const insertLeaderboardSchema = createInsertSchema(leaderboard, {
  email: z.email(),
}).omit({
  id: true,
  totalScore: true,
  createdAt: true,
  gdprConsentAt: true,
}).extend({
  gdprConsent: z.literal(true, { error: "GDPR consent is required" }),
});

export async function GET() {
  const rows = await db
    .select()
    .from(leaderboard)
    .orderBy(desc(leaderboard.totalScore))
    .limit(50);
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || authHeader !== `Bearer ${process.env.API_SECRET_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = insertLeaderboardSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { finalCash, retainedAssets, favorableTerms, time, ...rest } = parsed.data;
  const totalScore = Math.round(finalCash + retainedAssets + favorableTerms - time * 0.2);

  const [row] = await db
    .insert(leaderboard)
    .values({ ...rest, finalCash, retainedAssets, favorableTerms, time, totalScore, gdprConsentAt: new Date() })
    .returning();

  return NextResponse.json(row, { status: 201 });
}
