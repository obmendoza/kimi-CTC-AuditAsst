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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
              <ClipboardCheck className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Conditions</h3>
              <p className="text-sm text-gray-500">{conditions.filter((c) => c.status === 'pending').length} pending</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap ${filter === f ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
              {f.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>
      <div className="p-3 space-y-2 max-h-96 overflow-y-auto scrollbar-thin">
        {filteredConditions.map((condition) => (
          <div key={condition.id} onClick={() => toggleStatus(condition.id)} className="p-4 rounded-xl border border-gray-200 cursor-pointer active:bg-gray-50">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h4 className="font-semibold text-gray-900">{condition.title}</h4>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(condition.priority)}`}>{condition.priority}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{condition.description}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  Due {condition.dueDate}
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(condition.status)}`}>{condition.status.replace('_', ' ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ConditionsPanel;
