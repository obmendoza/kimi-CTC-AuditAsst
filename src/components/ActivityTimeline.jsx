import { History, CheckCircle } from './icons/Icons';
import { activities } from '../data/mockData';
const ActivityTimeline = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <History className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Audit Activity</h3>
            <p className="text-sm text-gray-500">Recent actions</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="relative flex gap-4">
                <div className="relative z-10 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 pb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-medium text-gray-900 text-sm">{activity.title}</p>
                    <p className="text-sm text-gray-600">{activity.desc}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActivityTimeline;
