import { useState } from 'react';
import { Shield, Bell, User } from './icons/Icons';

const Header = () => {
  const [notifications] = useState(3);

  return (
    <header className="bg-white/70 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo & Title */}
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg shadow-brand-500/20 ring-1 ring-white/10">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 tracking-tight">NQM CTC Audit Assistant</h1>
              <p className="text-xs text-gray-400 font-medium tracking-wide">AI-Powered Loan Quality Management</p>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Notification bell */}
            <button className="relative p-2.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4.5 h-4.5 min-w-[18px] bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold ring-2 ring-white animate-pulse-soft">
                  {notifications}
                </span>
              )}
            </button>

            {/* User profile */}
            <div className="flex items-center gap-3 ml-1 pl-3 border-l border-gray-200/60">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-100 to-brand-200 rounded-xl flex items-center justify-center ring-1 ring-brand-200/50">
                <User className="w-4.5 h-4.5 text-brand-600" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 leading-tight">David Martinez</p>
                <p className="text-xs text-gray-400 font-medium">Senior Underwriter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
