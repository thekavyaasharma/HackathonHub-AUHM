import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, ChevronDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  id: string;
  message: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

export function AIAssistant() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      message: "Hello! I'm AUHM Assistant. I can help you find the perfect hackathon, answer questions about events, or provide tips for hackathon success. What would you like to know?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    const message = input.trim();
    if (!message || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      message,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    try {
      const response = await apiRequest("POST", "/api/chat", { 
        message, 
        sender: "user" 
      });
      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        message: data.message,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        message: "I'm having trouble connecting right now. Please try again later.",
        sender: "assistant",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 mb-12">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          {/* AI Assistant Header */}
          <div className="px-6 py-4 border-b border-border bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">AUHM Assistant</h3>
                  <p className="text-sm text-muted-foreground">Ask me anything about hackathons!</p>
                </div>
              </div>
              <Button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                data-testid="button-chat-toggle"
              >
                <span>{isExpanded ? "Close Chat" : "Start Chat"}</span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </Button>
            </div>
          </div>

          {/* Chat Interface */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
                data-testid="chat-interface"
              >
                {/* Messages Container */}
                <ScrollArea className="h-96 p-6">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex items-start space-x-3 ${
                          message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                        }`}
                        data-testid={`message-${message.sender}-${message.id}`}
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            message.sender === "user"
                              ? "bg-primary"
                              : "bg-gradient-to-br from-indigo-500 to-purple-600"
                          }`}
                        >
                          {message.sender === "user" ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div
                          className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-sm"
                              : "bg-secondary text-secondary-foreground rounded-tl-sm"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.message}</p>
                        </div>
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-secondary text-secondary-foreground px-4 py-3 rounded-2xl rounded-tl-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="px-6 py-4 border-t border-border bg-muted/30">
                  <div className="flex items-end space-x-3">
                    <div className="flex-1 relative">
                      <Textarea
                        ref={textareaRef}
                        value={input}
                        onChange={handleTextareaChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about hackathons, deadlines, or get recommendations..."
                        className="min-h-[44px] max-h-32 px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        disabled={isLoading}
                        data-testid="input-chat"
                      />
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!input.trim() || isLoading}
                      className="px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex-shrink-0"
                      data-testid="button-send-message"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
