import { useState } from 'react';
import { Shield, Bell, User } from './icons/Icons';
const Header = () => {
  const [notifications] = useState(3);
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">NQM CTC Audit Assistant</h1>
              <p className="text-xs text-gray-500">AI-Powered Loan Quality Management</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-400">
              <Bell className="w-6 h-6" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {notifications}
                </span>
              )}
            </button>
            <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900">David Martinez</p>
                <p className="text-xs text-gray-500">Senior Underwriter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
