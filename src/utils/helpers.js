export const getStatusColor = (status) => {
  const colors = {
    verified: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/50',
    received: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200/50',
    missing: 'bg-red-50 text-red-700 ring-1 ring-red-200/50',
    pending: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/50',
    cleared: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/50',
    in_review: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200/50',
  };
  return colors[status] || 'bg-gray-50 text-gray-600 ring-1 ring-gray-200/50';
};

export const getPriorityColor = (priority) => {
  const colors = {
    high: 'text-red-700 bg-red-50 ring-1 ring-red-200/50',
    medium: 'text-amber-700 bg-amber-50 ring-1 ring-amber-200/50',
    low: 'text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200/50',
  };
  return colors[priority] || 'text-gray-600 bg-gray-50 ring-1 ring-gray-200/50';
};
