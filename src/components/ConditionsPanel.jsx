import { useState } from 'react';
import { ClipboardCheck, Clock } from './icons/Icons';
import { mockConditions } from '../data/mockData';
import { getStatusColor, getPriorityColor } from '../utils/helpers';

const FILTERS = ['all', 'pending', 'in_review', 'cleared'];

const ConditionsPanel = () => {
  const [conditions, setConditions] = useState(mockConditions);
  const [filter, setFilter] = useState('all');

  const filteredConditions = conditions.filter((c) => filter === 'all' || c.status === filter);

  const toggleStatus = (id) => {
    setConditions(conditions.map((c) => {
      if (c.id === id) {
        const statuses = ['pending', 'in_review', 'cleared'];
        const currentIndex = statuses.indexOf(c.status);
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
        return { ...c, status: nextStatus };
      }
      return c;
    }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100/80 hover:shadow-card-hover transition-all duration-300">
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center ring-1 ring-amber-200/50">
              <ClipboardCheck className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 tracking-tight">Conditions</h3>
              <p className="text-xs text-gray-400 font-medium">{conditions.filter((c) => c.status === 'pending').length} pending review</p>
            </div>
          </div>
          <span className="text-2xl font-extrabold text-gray-900">{conditions.length}</span>
        </div>

        {/* Filter pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 capitalize ${
                filter === f
                  ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/20'
                  : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Conditions list */}
      <div className="p-3 space-y-2 max-h-[420px] overflow-y-auto scrollbar-thin">
        {filteredConditions.map((condition) => (
          <div
            key={condition.id}
            onClick={() => toggleStatus(condition.id)}
            className="p-4 rounded-xl border border-gray-100 cursor-pointer hover:bg-gray-50/80 hover:border-gray-200 active:scale-[0.99] transition-all duration-200 group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-brand-700 transition-colors">{condition.title}</h4>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${getPriorityColor(condition.priority)}`}>
                    {condition.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2 leading-relaxed">{condition.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-medium">Due {condition.dueDate}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${getStatusColor(condition.status)}`}>
                {condition.status.replace('_', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConditionsPanel;
