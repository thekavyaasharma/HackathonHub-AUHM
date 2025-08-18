import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const hackathons = pgTable("hackathons", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  domain: text("domain").notNull(),
  location: text("location").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  prizePool: integer("prize_pool").notNull(),
  imageUrl: text("image_url"),
  registrationUrl: text("registration_url"),
});

export const chatMessages = pgTable("chat_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  message: text("message").notNull(),
  sender: text("sender").notNull(), // 'user' or 'assistant'
  timestamp: timestamp("timestamp").default(sql`now()`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertHackathonSchema = createInsertSchema(hackathons).pick({
  title: true,
  description: true,
  domain: true,
  location: true,
  startDate: true,
  endDate: true,
  prizePool: true,
  imageUrl: true,
  registrationUrl: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  message: true,
  sender: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertHackathon = z.infer<typeof insertHackathonSchema>;
export type Hackathon = typeof hackathons.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
export type ChatMessage = typeof chatMessages.$inferSelect;
