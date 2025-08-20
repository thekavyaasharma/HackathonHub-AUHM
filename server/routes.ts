import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage"; // make sure path is correct
import { insertChatMessageSchema } from "@shared/schema";
import { generateResponse } from "./llm"; // adjust path if needed (e.g., "./server/llm")

export async function registerRoutes(app: Express): Promise<Server> {

  // HACKATHONS ENDPOINT 
  app.get("/api/hackathons", async (_req, res) => {
    try {
      const hackathons = await storage.getHackathons();
      res.json(hackathons);
    } catch (error) {
      console.error("Hackathons fetch error:", error);
      res.status(500).json({ message: "Failed to fetch hackathons" });
    }
  });

  //  CHAT ENDPOINT 
  app.post("/api/chat", async (req, res) => {
    try {
      // Use provided chatId or fallback to "default"
      const { chatId = "default", message } = req.body as { chatId?: string; message: string };

      if (!message) {
        return res.status(400).json({ message: "Message is required" });
      }

      // Validate user message
      const parsed = insertChatMessageSchema.parse({ message, sender: "user" });

      // Call Gemma 2B via generateResponse
      const assistantMessage = await generateResponse(parsed.message);

      // Save messages
      await storage.saveChatMessage(chatId, { message: parsed.message, sender: "user" });
      await storage.saveChatMessage(chatId, { message: assistantMessage, sender: "assistant" });

      // Return response
      res.json({ message: assistantMessage });

    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({
        message: "I'm having trouble connecting right now. Please try again later."
      });
    }
  });

  // Create and return HTTP server
  const httpServer = createServer(app);
  return httpServer;
}
