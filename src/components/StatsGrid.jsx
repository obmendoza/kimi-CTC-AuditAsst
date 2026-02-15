import { ClipboardCheck, FileCheck, Shield, Clock } from './icons/Icons';

const StatsGrid = () => {
  const stats = [
    { label: 'Conditions', value: '5', icon: ClipboardCheck, gradient: 'from-amber-50 to-orange-50', iconBg: 'bg-amber-100', iconColor: 'text-amber-600', ring: 'ring-amber-200/50', subtext: '2 pending', subtextColor: 'text-amber-600' },
    { label: 'Documents', value: '8', icon: FileCheck, gradient: 'from-emerald-50 to-green-50', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', ring: 'ring-emerald-200/50', subtext: '6 verified', subtextColor: 'text-emerald-600' },
    { label: 'Risk Score', value: '23', icon: Shield, gradient: 'from-green-50 to-emerald-50', iconBg: 'bg-green-100', iconColor: 'text-green-600', ring: 'ring-green-200/50', subtext: 'Low Risk', subtextColor: 'text-green-600' },
    { label: 'In Audit', value: '3d', icon: Clock, gradient: 'from-blue-50 to-indigo-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', ring: 'ring-blue-200/50', subtext: 'On track', subtextColor: 'text-blue-600' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-4 border border-white/60 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-9 h-9 ${stat.iconBg} rounded-xl flex items-center justify-center ring-1 ${stat.ring}`}>
                <Icon className={`w-4.5 h-4.5 ${stat.iconColor}`} />
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-0.5">{stat.label}</p>
            <p className="text-2xl font-extrabold text-gray-900 tracking-tight">{stat.value}</p>
            <p className={`text-xs mt-1 font-semibold ${stat.subtextColor}`}>{stat.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
