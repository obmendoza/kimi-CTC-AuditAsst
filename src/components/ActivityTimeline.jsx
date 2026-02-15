import { History, CheckCircle, Upload, Bot, ClipboardCheck, FileText } from './icons/Icons';
import { activities } from '../data/mockData';

const activityIcons = {
  'Document Uploaded': { icon: Upload, bg: 'bg-blue-100', color: 'text-blue-600' },
  'Condition Cleared': { icon: CheckCircle, bg: 'bg-emerald-100', color: 'text-emerald-600' },
  'AI Analysis Complete': { icon: Bot, bg: 'bg-purple-100', color: 'text-purple-600' },
  'Condition Added': { icon: ClipboardCheck, bg: 'bg-amber-100', color: 'text-amber-600' },
  'Loan Submitted': { icon: FileText, bg: 'bg-brand-100', color: 'text-brand-600' },
};

const ActivityTimeline = () => {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100/80 hover:shadow-card-hover transition-all duration-300">
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center ring-1 ring-purple-200/50">
              <History className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 tracking-tight">Audit Activity</h3>
              <p className="text-xs text-gray-400 font-medium">Recent actions</p>
            </div>
          </div>
          <span className="text-xs text-gray-400 font-medium">{activities.length} events</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-5 sm:p-6">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-200 via-gray-200 to-transparent" />

          <div className="space-y-1">
            {activities.map((activity, index) => {
              const iconInfo = activityIcons[activity.title] || { icon: CheckCircle, bg: 'bg-gray-100', color: 'text-gray-600' };
              const IconComp = iconInfo.icon;
              return (
                <div
                  key={index}
                  className="relative flex gap-4 p-2.5 rounded-xl hover:bg-gray-50/80 transition-colors group"
                >
                  {/* Icon dot */}
                  <div className={`relative z-10 w-[30px] h-[30px] rounded-lg ${iconInfo.bg} flex items-center justify-center flex-shrink-0 ring-2 ring-white shadow-sm group-hover:scale-110 transition-transform`}>
                    <IconComp className={`w-3.5 h-3.5 ${iconInfo.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 py-0.5">
                    <p className="font-semibold text-gray-900 text-sm leading-snug">{activity.title}</p>
                    <p className="text-sm text-gray-500 leading-snug mt-0.5">{activity.desc}</p>
                    <p className="text-[10px] text-gray-400 mt-1.5 font-semibold uppercase tracking-wider">{activity.time}</p>
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
