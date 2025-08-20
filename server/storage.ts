import {
  type User,
  type InsertUser,
  type Hackathon,
  type InsertHackathon,
  type ChatMessage,
  type InsertChatMessage,
} from "@shared/schema";
import { randomUUID } from "crypto";

// Interface for storage
export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getHackathons(): Promise<Hackathon[]>;
  createHackathon(hackathon: InsertHackathon): Promise<Hackathon>;

  getChatMessages(chatId: string): Promise<ChatMessage[]>;
  saveChatMessage(chatId: string, insertMessage: InsertChatMessage): Promise<ChatMessage>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private hackathons: Map<string, Hackathon> = new Map();
  private chatMessages: Map<string, ChatMessage[]> = new Map();

  // USER 
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // HACKATHONS
  async getHackathons(): Promise<Hackathon[]> {
    return Array.from(this.hackathons.values());
  }

  async createHackathon(insertHackathon: InsertHackathon): Promise<Hackathon> {
    const id = randomUUID();
    const hackathon: Hackathon = {
      ...insertHackathon,
      id,
      imageUrl: insertHackathon.imageUrl ?? null,          // undefined → null
      registrationUrl: insertHackathon.registrationUrl ?? null, // undefined → null
    };
    this.hackathons.set(id, hackathon);
    return hackathon;
  }

  // CHAT MESSAGES
  async getChatMessages(chatId: string): Promise<ChatMessage[]> {
    return this.chatMessages.get(chatId) || [];
  }

  async saveChatMessage(chatId: string, insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = randomUUID();

    // timestamp assigned here, chatId is only used as map key
    const message: ChatMessage = {
      ...insertMessage,
      id,
      timestamp: new Date(),
    };

    // initialize chatId array if not exists
    if (!this.chatMessages.has(chatId)) {
      this.chatMessages.set(chatId, []);
    }

    this.chatMessages.get(chatId)!.push(message);
    return message;
  }
}

//  Export a single instance
export const storage = new MemStorage();
