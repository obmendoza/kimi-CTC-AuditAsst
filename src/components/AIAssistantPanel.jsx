import { useState, useRef, useEffect } from 'react';
import { Bot, ChevronDown, Sparkles, Send } from './icons/Icons';
import { aiSuggestions } from '../data/mockData';

const AIAssistantPanel = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'Hello! I am your AI Audit Assistant. I have analyzed this loan file and found 2 high-priority conditions that need attention.' },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [...prev, { type: 'user', content: inputValue }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: 'ai', content: 'I have analyzed your request. Based on the current loan file status, I recommend prioritizing the employment verification and gift letter documentation.' }]);
    }, 1000);
    setInputValue('');
  };

  return (
    <div className="relative overflow-hidden rounded-3xl shadow-elevated">
      {/* Gradient background with depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-indigo-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10">
        {/* Header */}
        <div
          className="p-5 sm:p-6 flex items-center justify-between cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center ring-1 ring-white/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white tracking-tight">AI Audit Assistant</h2>
                <span className="px-2 py-0.5 bg-emerald-400/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider rounded-full ring-1 ring-emerald-400/30">Live</span>
              </div>
              <p className="text-sm text-blue-200/70 font-medium">Real-time analysis and recommendations</p>
            </div>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
            <ChevronDown className={`w-5 h-5 text-white/80 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Expandable content */}
        {isExpanded && (
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 animate-slide-down">
            {/* Smart Recommendations */}
            <div className="bg-white/8 backdrop-blur-md rounded-2xl p-4 sm:p-5 mb-4 ring-1 ring-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white mb-3">Smart Recommendations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {aiSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 px-3 py-2.5 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer transition-colors ring-1 ring-white/5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-blue-100/90 leading-snug">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Chat area */}
            <div className="bg-white rounded-2xl p-4 space-y-3 max-h-64 overflow-y-auto scrollbar-thin shadow-glass">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/20'
                        : 'bg-gray-50 text-gray-700 ring-1 ring-gray-100'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className="mt-4 flex gap-2.5">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about this loan file..."
                className="flex-1 px-4 py-3 rounded-xl border-0 text-sm bg-white/95 placeholder-gray-400 text-gray-800 shadow-sm ring-1 ring-white/20 focus:ring-2 focus:ring-white/40"
              />
              <button
                onClick={handleSend}
                className="px-4 py-3 bg-white hover:bg-gray-50 text-brand-600 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistantPanel;
