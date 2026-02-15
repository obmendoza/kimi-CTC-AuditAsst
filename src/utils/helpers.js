export const getStatusColor = (status) => {
  const colors = {
    verified: 'bg-green-100 text-green-700',
    received: 'bg-blue-100 text-blue-700',
    missing: 'bg-red-100 text-red-700',
    pending: 'bg-yellow-100 text-yellow-700',
    cleared: 'bg-green-100 text-green-700',
    in_review: 'bg-purple-100 text-purple-700',
  };
  return colors[status] || 'bg-gray-100 text-gray-600';
};
export const getPriorityColor = (priority) => {
  const colors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-green-600 bg-green-50',
  };
  return colors[priority] || 'text-gray-600 bg-gray-50';
};
