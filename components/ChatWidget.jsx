import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService.js';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hi! I'm Mahindha's AI assistant. Ask me anything about his experience, skills, or projects." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(userMessage.text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-zinc-800 text-white rotate-90' : 'bg-zinc-900 text-white hover:bg-zinc-800'
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-zinc-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300" style={{ height: '500px', maxHeight: '70vh' }}>
          
          {/* Header */}
          <div className="p-4 bg-zinc-900 text-white flex items-center">
            <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center mr-3">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Ask AI about Mahindha</h3>
              <p className="text-xs text-zinc-400">Powered by Gemini</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-zinc-900 text-white rounded-br-none'
                      : 'bg-white border border-zinc-200 text-zinc-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-zinc-100">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about skills, experience..."
                className="w-full pl-4 pr-12 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-400 transition-all text-sm"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-2 p-1.5 text-zinc-400 hover:text-zinc-900 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-zinc-400">AI can make mistakes. Please verify info.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;