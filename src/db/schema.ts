import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const leaderboard = pgTable("leaderboard", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  finalCash: integer("final_cash").notNull(),
  retainedAssets: integer("retained_assets").notNull(),
  favorableTerms: integer("favorable_terms").notNull(),
  totalScore: integer("total_score").notNull(),
  acceptedDeal: boolean("accepted_deal").notNull(),
  rounds: integer("rounds").notNull(),
  time: integer("time").notNull(),
  gdprConsent: boolean("gdpr_consent").notNull().default(false),
  gdprConsentAt: timestamp("gdpr_consent_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
