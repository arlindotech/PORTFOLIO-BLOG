import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { chatbotResponses } from '../data/portfolioData';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) return chatbotResponses.skills;
  if (lower.includes('project') || lower.includes('work') || lower.includes('portfolio')) return chatbotResponses.projects;
  if (lower.includes('service') || lower.includes('offer') || lower.includes('price')) return chatbotResponses.services;
  if (lower.includes('experience') || lower.includes('work history') || lower.includes('career')) return chatbotResponses.experience;
  if (lower.includes('hire') || lower.includes('available') || lower.includes('freelance')) return chatbotResponses.hire;
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return chatbotResponses.contact;
  if (lower.includes('certif') || lower.includes('course') || lower.includes('education')) return chatbotResponses.certifications;
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) return "Hello! 👋 I'm ArlindoTech's AI assistant. I can tell you about skills, projects, services, experience, certifications, and availability. What interests you?";
  if (lower.includes('thank')) return "You're welcome! Feel free to ask anything else or use the contact form to get in touch directly. 😊";
  return chatbotResponses.default;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: "Hi! 👋 I'm ArlindoTech's AI assistant. Ask me about skills, projects, services, or anything else!", sender: 'bot', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), text: input, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = { id: Date.now() + 1, text: getBotResponse(input), sender: 'bot', timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const suggestions = ['Skills', 'Projects', 'Services', 'Hire', 'Certifications'];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/30 flex items-center justify-center hover:shadow-primary-500/50 transition-all hover:scale-110"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-dark-900" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-8rem)] rounded-2xl overflow-hidden shadow-2xl border ${
              isDark ? 'bg-dark-900/95 border-white/10' : 'bg-white/95 border-gray-200'
            } backdrop-blur-xl flex flex-col`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">{t.chatbot.title}</h3>
                <p className="text-white/70 text-xs">{t.chatbot.status}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={14} className="text-primary-400" />
                    </div>
                  )}
                  <div className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-br-sm'
                      : isDark ? 'bg-white/5 text-gray-300 rounded-bl-sm' : 'bg-gray-100 text-gray-700 rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <User size={14} className="text-accent-400" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                    <Bot size={14} className="text-primary-400" />
                  </div>
                  <div className={`px-4 py-3 rounded-xl rounded-bl-sm ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-primary-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setInput(s); }}
                    className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                      isDark ? 'bg-white/5 text-gray-400 hover:bg-primary-500/20 hover:text-primary-400' : 'bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-500'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className={`p-3 border-t ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className={`flex-1 px-3 py-2 rounded-xl text-sm outline-none ${
                    isDark ? 'bg-white/5 text-white placeholder-gray-500 border border-white/10 focus:border-primary-500/50' : 'bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-primary-500'
                  }`}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white flex items-center justify-center disabled:opacity-50 hover:shadow-lg transition-all"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
