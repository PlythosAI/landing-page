ALTER TABLE "leaderboard" ADD COLUMN "time" integer NOT NULL DEFAULT 120;
ALTER TABLE "leaderboard" ALTER COLUMN "time" DROP DEFAULT;
UPDATE "leaderboard" SET "total_score" = "final_cash" + "retained_assets" + "favorable_terms";
