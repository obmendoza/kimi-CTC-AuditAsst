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
    <div className="relative overflow-hidden rounded-2xl shadow-elevated">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e2a4a] via-[#1a2340] to-[#161d35]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,131,255,0.12)_0%,_transparent_60%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10">
        <div className="p-5 sm:p-6 flex items-center justify-between cursor-pointer group" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-500/15 backdrop-blur-sm rounded-2xl flex items-center justify-center ring-1 ring-brand-400/20">
              <Bot className="w-6 h-6 text-brand-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-[#e2e4e9] tracking-tight">AI Audit Assistant</h2>
                <span className="px-2 py-0.5 bg-emerald-500/15 text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full ring-1 ring-emerald-500/20">Live</span>
              </div>
              <p className="text-sm text-[#5a6480] font-medium">Real-time analysis and recommendations</p>
            </div>
          </div>
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
            <ChevronDown className={`w-5 h-5 text-[#5a6480] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {isExpanded && (
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 animate-slide-down">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-5 mb-4 ring-1 ring-white/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[#c8cdd5] mb-3">Smart Recommendations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {aiSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start gap-2.5 px-3 py-2.5 bg-white/[0.03] hover:bg-white/[0.06] rounded-lg cursor-pointer transition-colors ring-1 ring-white/[0.04]">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0 mt-1.5" />
                        <span className="text-sm text-[#8b8fa3] leading-snug">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#141620] rounded-xl p-4 space-y-3 max-h-64 overflow-y-auto scrollbar-thin ring-1 ring-[#2a2d3a]">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-xl px-4 py-2.5 ${
                    msg.type === 'user'
                      ? 'bg-brand-600/80 text-white'
                      : 'bg-[#1e2133] text-[#b0b4c3] ring-1 ring-[#2a2d3a]'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="mt-4 flex gap-2.5">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about this loan file..."
                className="flex-1 px-4 py-3 rounded-xl border-0 text-sm bg-[#141620] placeholder-[#4a4f63] text-[#c8cdd5] ring-1 ring-[#2a2d3a] focus:ring-brand-500/30"
              />
              <button onClick={handleSend} className="px-4 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-semibold shadow-sm transition-all duration-200 active:scale-95">
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
