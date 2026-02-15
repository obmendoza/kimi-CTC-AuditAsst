import { ClipboardCheck, FileCheck, Shield, Clock } from './icons/Icons';

const StatsGrid = () => {
  const stats = [
    { label: 'Conditions', value: '5', icon: ClipboardCheck, bg: 'bg-amber-500/10', iconColor: 'text-amber-400', ring: 'ring-amber-500/20', subtext: '2 pending', subtextColor: 'text-amber-400' },
    { label: 'Documents', value: '8', icon: FileCheck, bg: 'bg-emerald-500/10', iconColor: 'text-emerald-400', ring: 'ring-emerald-500/20', subtext: '6 verified', subtextColor: 'text-emerald-400' },
    { label: 'Risk Score', value: '23', icon: Shield, bg: 'bg-green-500/10', iconColor: 'text-green-400', ring: 'ring-green-500/20', subtext: 'Low Risk', subtextColor: 'text-green-400' },
    { label: 'In Audit', value: '3d', icon: Clock, bg: 'bg-blue-500/10', iconColor: 'text-blue-400', ring: 'ring-blue-500/20', subtext: 'On track', subtextColor: 'text-blue-400' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-[#1a1d27] rounded-2xl p-4 border border-[#2a2d3a] hover:border-[#363a4a] transition-all duration-300">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-9 h-9 ${stat.bg} rounded-xl flex items-center justify-center ring-1 ${stat.ring}`}>
                <Icon className={`w-4 h-4 ${stat.iconColor}`} />
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-[#5a5f73] font-semibold mb-0.5">{stat.label}</p>
            <p className="text-2xl font-extrabold text-[#e2e4e9] tracking-tight">{stat.value}</p>
            <p className={`text-xs mt-1 font-semibold ${stat.subtextColor}`}>{stat.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsGrid;
