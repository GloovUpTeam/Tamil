
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi 👋 How can we help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput('');

    // Dummy auto replies
    setTimeout(() => {
      let botReply = "I'm looking into that for you! One moment.";
      const lower = userMsg.toLowerCase();
      if (lower.includes('order')) botReply = "You can track your order status in the 'My Account' section!";
      else if (lower.includes('size')) botReply = "Our size guide is available on every product page. Most items are true to size!";
      else if (lower.includes('return')) botReply = "We offer a 7-day easy return policy for all unworn items.";
      
      setMessages(prev => [...prev, { text: botReply, isBot: true }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-[104px] right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[320px] md:w-[380px] h-[500px] bg-white/90 backdrop-blur-xl border border-white shadow-2xl rounded-[2rem] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 text-white flex justify-between items-center shadow-lg">
              <div>
                <h3 className="font-black uppercase tracking-tighter text-lg">CRT Support</h3>
                <p className="text-[10px] uppercase font-bold opacity-80">AI Assistant Online</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scroll bg-slate-50/30">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-xs font-medium shadow-sm ${
                    msg.isBot 
                      ? 'bg-white text-slate-700 rounded-tl-none border border-slate-100' 
                      : 'bg-pink-500 text-white rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2 bg-slate-50 rounded-full p-2 border border-slate-100 focus-within:border-pink-300 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about size, orders..." 
                  className="flex-1 bg-transparent px-4 py-2 outline-none text-xs font-bold uppercase tracking-widest text-slate-700"
                />
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(99,102,241,0.4)] relative"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </motion.button>
    </div>
  );
};

export default ChatBot;
