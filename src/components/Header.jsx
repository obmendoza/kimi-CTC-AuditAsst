import { useState } from 'react';
import { Shield, Bell, User } from './icons/Icons';

const Header = () => {
  const [notifications] = useState(3);

  return (
    <header className="bg-[#1a1d27]/80 backdrop-blur-xl border-b border-[#2a2d3a] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-[#e2e4e9] tracking-tight">NQM CTC Audit Assistant</h1>
              <p className="text-xs text-[#5a5f73] font-medium tracking-wide">AI-Powered Loan Quality Management</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2.5 text-[#5a5f73] hover:text-[#8b8fa3] hover:bg-[#22253a] rounded-xl transition-all duration-200">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute top-1.5 right-1.5 min-w-[18px] bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold ring-2 ring-[#1a1d27]">
                  {notifications}
                </span>
              )}
            </button>
            <div className="flex items-center gap-3 ml-1 pl-3 border-l border-[#2a2d3a]">
              <div className="w-9 h-9 bg-brand-500/15 rounded-xl flex items-center justify-center">
                <User className="w-4 h-4 text-brand-400" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-[#e2e4e9] leading-tight">David Martinez</p>
                <p className="text-xs text-[#5a5f73] font-medium">Senior Underwriter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
