import { AlertTriangle } from './icons/Icons';
import { riskFactors } from '../data/mockData';
const RiskAssessmentPanel = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Risk Assessment</h3>
            <p className="text-sm text-gray-500">AI-powered analysis</p>
          </div>
        </div>
      </div>
      <div className="p-5 space-y-6">
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-green-200 bg-white text-green-600 mb-3">
            <span className="text-3xl font-bold">23</span>
          </div>
          <h4 className="text-lg font-bold text-green-600">Low Risk</h4>
          <p className="text-sm text-gray-500 mt-1">Overall risk score</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Risk Factors</h4>
          {riskFactors.map((factor, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900 text-sm">{factor.name}</span>
                <span className={`text-sm font-bold ${factor.level === 'low' ? 'text-green-600' : 'text-yellow-600'}`}>{factor.score}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${factor.level === 'low' ? 'bg-green-500' : 'bg-yellow-500'}`} style={{ width: `${factor.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RiskAssessmentPanel;
