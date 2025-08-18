import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertChatMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get hackathons with optional search and domain filtering
  app.get("/api/hackathons", async (req, res) => {
    try {
      const { search, domain } = req.query;
      const hackathons = await storage.getHackathons(
        search as string,
        domain as string
      );
      res.json(hackathons);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch hackathons" });
    }
  });

  // Chat endpoint for AI assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = insertChatMessageSchema.parse(req.body);
      
      // Call Ollama API
      const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gemma:2b",
          prompt: `You are AUHM Assistant, a helpful AI assistant for An Ultimate Hackathon Matrix platform. You help students find hackathons, provide tips for hackathon success, and answer questions about events. Keep responses concise and helpful.

User message: ${message}

Response:`,
          stream: false,
        }),
      });

      if (!ollamaResponse.ok) {
        throw new Error("Ollama API request failed");
      }

      const ollamaData = await ollamaResponse.json();
      const assistantMessage = ollamaData.response;

      // Store messages (optional, for now just return the response)
      await storage.saveChatMessage({ message, sender: "user" });
      await storage.saveChatMessage({ message: assistantMessage, sender: "assistant" });

      res.json({ message: assistantMessage });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ 
        message: "I'm having trouble connecting right now. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
