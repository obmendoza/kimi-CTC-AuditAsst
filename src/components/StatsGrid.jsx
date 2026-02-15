import { ClipboardCheck, FileCheck, Shield, Clock } from './icons/Icons';
const StatsGrid = () => {
  const stats = [
    { label: 'Conditions', value: '5', icon: ClipboardCheck, color: 'bg-yellow-100', iconColor: 'text-yellow-600', subtext: '2 pending' },
    { label: 'Documents', value: '8', icon: FileCheck, color: 'bg-green-100', iconColor: 'text-green-600', subtext: '6 verified' },
    { label: 'Risk Score', value: '23', icon: Shield, color: 'bg-green-100', iconColor: 'text-green-600', subtext: 'Low Risk' },
    { label: 'In Audit', value: '3d', icon: Clock, color: 'bg-yellow-100', iconColor: 'text-yellow-600', subtext: 'On track' },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs mt-1 text-gray-500">{stat.subtext}</p>
              </div>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default StatsGrid;
