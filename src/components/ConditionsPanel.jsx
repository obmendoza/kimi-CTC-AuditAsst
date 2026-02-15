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
    <div className="bg-[#1a1d27] rounded-2xl border border-[#2a2d3a] hover:border-[#363a4a] transition-all duration-300">
      <div className="p-5 sm:p-6 border-b border-[#2a2d3a]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center ring-1 ring-amber-500/20">
              <ClipboardCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#e2e4e9] tracking-tight">Conditions</h3>
              <p className="text-xs text-[#5a5f73] font-medium">{conditions.filter((c) => c.status === 'pending').length} pending review</p>
            </div>
          </div>
          <span className="text-2xl font-extrabold text-[#e2e4e9]">{conditions.length}</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 capitalize ${
                filter === f
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-[#141620] text-[#5a5f73] hover:text-[#8b8fa3] hover:bg-[#1e2133] ring-1 ring-[#2a2d3a]'
              }`}
            >
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>
      <div className="p-3 space-y-2 max-h-[420px] overflow-y-auto scrollbar-thin">
        {filteredConditions.map((condition) => (
          <div
            key={condition.id}
            onClick={() => toggleStatus(condition.id)}
            className="p-4 rounded-xl border border-[#2a2d3a] cursor-pointer hover:bg-[#1e2133] hover:border-[#363a4a] active:scale-[0.99] transition-all duration-200 group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <h4 className="font-semibold text-[#c8cdd5] text-sm group-hover:text-brand-300 transition-colors">{condition.title}</h4>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${getPriorityColor(condition.priority)}`}>
                    {condition.priority}
                  </span>
                </div>
                <p className="text-sm text-[#6b7084] mb-2 leading-relaxed">{condition.description}</p>
                <div className="flex items-center gap-1.5 text-xs text-[#5a5f73]">
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
