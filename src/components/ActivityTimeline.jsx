import { History, CheckCircle, Upload, Bot, ClipboardCheck, FileText } from './icons/Icons';
import { activities } from '../data/mockData';

const activityIcons = {
  'Document Uploaded': { icon: Upload, bg: 'bg-blue-500/10', color: 'text-blue-400' },
  'Condition Cleared': { icon: CheckCircle, bg: 'bg-emerald-500/10', color: 'text-emerald-400' },
  'AI Analysis Complete': { icon: Bot, bg: 'bg-purple-500/10', color: 'text-purple-400' },
  'Condition Added': { icon: ClipboardCheck, bg: 'bg-amber-500/10', color: 'text-amber-400' },
  'Loan Submitted': { icon: FileText, bg: 'bg-brand-500/10', color: 'text-brand-400' },
};

const ActivityTimeline = () => {
  return (
    <div className="bg-[#1a1d27] rounded-2xl border border-[#2a2d3a] hover:border-[#363a4a] transition-all duration-300">
      <div className="p-5 sm:p-6 border-b border-[#2a2d3a]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-xl flex items-center justify-center ring-1 ring-purple-500/20">
              <History className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#e2e4e9] tracking-tight">Audit Activity</h3>
              <p className="text-xs text-[#5a5f73] font-medium">Recent actions</p>
            </div>
          </div>
          <span className="text-xs text-[#5a5f73] font-medium">{activities.length} events</span>
        </div>
      </div>
      <div className="p-5 sm:p-6">
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-[#2a2d3a] via-[#2a2d3a] to-transparent" />
          <div className="space-y-1">
            {activities.map((activity, index) => {
              const iconInfo = activityIcons[activity.title] || { icon: CheckCircle, bg: 'bg-[#1e2133]', color: 'text-[#5a5f73]' };
              const IconComp = iconInfo.icon;
              return (
                <div key={index} className="relative flex gap-4 p-2.5 rounded-xl hover:bg-[#1e2133] transition-colors group">
                  <div className={`relative z-10 w-[30px] h-[30px] rounded-lg ${iconInfo.bg} flex items-center justify-center flex-shrink-0 ring-2 ring-[#1a1d27] group-hover:scale-110 transition-transform`}>
                    <IconComp className={`w-3.5 h-3.5 ${iconInfo.color}`} />
                  </div>
                  <div className="flex-1 min-w-0 py-0.5">
                    <p className="font-semibold text-[#c8cdd5] text-sm leading-snug">{activity.title}</p>
                    <p className="text-sm text-[#6b7084] leading-snug mt-0.5">{activity.desc}</p>
                    <p className="text-[10px] text-[#5a5f73] mt-1.5 font-semibold uppercase tracking-wider">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;
