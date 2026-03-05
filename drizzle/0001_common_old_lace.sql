ALTER TABLE "leaderboard" ADD COLUMN "gdpr_consent" boolean DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE "leaderboard" ADD COLUMN "gdpr_consent_at" timestamp;