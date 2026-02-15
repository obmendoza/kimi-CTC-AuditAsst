export const getStatusColor = (status) => {
  const colors = {
    verified: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20',
    received: 'bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20',
    missing: 'bg-red-500/10 text-red-400 ring-1 ring-red-500/20',
    pending: 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20',
    cleared: 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20',
    in_review: 'bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20',
  };
  return colors[status] || 'bg-[#1e2133] text-[#5a5f73] ring-1 ring-[#2a2d3a]';
};

export const getPriorityColor = (priority) => {
  const colors = {
    high: 'text-red-400 bg-red-500/10 ring-1 ring-red-500/20',
    medium: 'text-amber-400 bg-amber-500/10 ring-1 ring-amber-500/20',
    low: 'text-emerald-400 bg-emerald-500/10 ring-1 ring-emerald-500/20',
  };
  return colors[priority] || 'text-[#5a5f73] bg-[#1e2133] ring-1 ring-[#2a2d3a]';
};
