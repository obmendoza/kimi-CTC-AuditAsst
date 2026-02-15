import { useState } from 'react';
import { Bot, ChevronDown, Sparkles, Send } from './icons/Icons';
import { aiSuggestions } from '../data/mockData';
const AIAssistantPanel = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    { type: 'ai', content: 'Hello! I am your AI Audit Assistant. I have analyzed this loan file and found 2 high-priority conditions that need attention.' },
  ]);
  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [...prev, { type: 'user', content: inputValue }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { type: 'ai', content: 'I have analyzed your request. Based on the current loan file status, I recommend prioritizing the employment verification and gift letter documentation.' }]);
    }, 1000);
    setInputValue('');
  };
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-5 flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">AI Audit Assistant</h2>
            <p className="text-sm text-blue-100">Real-time analysis and recommendations</p>
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
      </div>
      {isExpanded && (
        <div className="px-5 pb-5">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-white mb-2">Smart Recommendations</h3>
                <ul className="space-y-2">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-blue-100 flex items-start gap-2">
                      <span className="text-blue-300">&bull;</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-4 space-y-3 max-h-60 overflow-y-auto scrollbar-thin">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask about this loan file..." className="flex-1 px-4 py-2 rounded-lg border-0 text-sm" />
            <button onClick={handleSend} className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default AIAssistantPanel;
