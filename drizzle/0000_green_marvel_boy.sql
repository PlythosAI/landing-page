ALTER TABLE "leaderboard" ADD COLUMN IF NOT EXISTS "email" text;

UPDATE "leaderboard"
SET "email" = "id"::text || '@example.invalid'
WHERE "email" IS NULL;

ALTER TABLE "leaderboard" ALTER COLUMN "email" SET NOT NULL;
