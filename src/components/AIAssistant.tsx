import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';

// Safely configure API key. Using a fallback guarantees it won't crash 
// missing process.env in standard build environments like Netlify.
let apiKey = "AIzaSyBuWITIuqLBS1C416CBswzufnaQZECFNMQ";
try {
  if (typeof process !== 'undefined' && process.env && process.env.GEMINI_API_KEY) {
    apiKey = process.env.GEMINI_API_KEY;
  }
} catch (e) {
  // Ignore safely
}

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi! I am the Wellness GYM AI Assistant. How can I help you today? Ask me about our memberships, facilities, or fitness tips!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: 'user', content: userMessage },
    ]);
    setIsLoading(true);

    try {
      // Lazy initialization of the GenAI client avoids app crashes on load
      const ai = new GoogleGenAI({ apiKey });
      const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`).join('\n');
      const prompt = `You are a helpful AI assistant for "Wellness GYM". 
      Answer questions about the gym, fitness, memberships, etc. Be concise, friendly, and energetic.
      
      Conversation history:
      ${history}
      
      User: ${userMessage}
      Assistant:`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response.text || 'Sorry, I could not process that request.',
        },
      ]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Sorry, I am having trouble connecting right now. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 sm:bottom-6 sm:right-6 w-14 h-14 bg-orange-500 text-zinc-950 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/20 z-[9999] ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[350px] h-[75dvh] sm:h-[480px] max-h-[85dvh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-[10000] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zinc-950 p-3 sm:p-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-orange-500/10 p-2 rounded-lg">
                  <Bot className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-50">Gym Assistant</h3>
                  <p className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-zinc-50 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-zinc-800' : 'bg-orange-500/10'}`}>
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 text-zinc-400" />
                    ) : (
                      <Bot className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === 'user'
                        ? 'bg-orange-500 text-zinc-950 rounded-tr-sm'
                        : 'bg-zinc-800 text-zinc-100 rounded-tl-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-orange-500" />
                  </div>
                  <div className="bg-zinc-800 text-zinc-100 rounded-2xl rounded-tl-sm px-4 py-3 text-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-orange-500" />
                    <span>Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 sm:p-4 bg-zinc-950 border-t border-zinc-800 shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Message..."
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-sm text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-orange-500 text-zinc-950 p-2.5 rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
