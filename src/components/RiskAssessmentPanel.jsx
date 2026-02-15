import { AlertTriangle, Shield } from './icons/Icons';
import { riskFactors } from '../data/mockData';

const RiskAssessmentPanel = () => {
  return (
    <div className="bg-[#1a1d27] rounded-2xl border border-[#2a2d3a] hover:border-[#363a4a] transition-all duration-300">
      <div className="p-5 sm:p-6 border-b border-[#2a2d3a]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center ring-1 ring-orange-500/20">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#e2e4e9] tracking-tight">Risk Assessment</h3>
            <p className="text-xs text-[#5a5f73] font-medium">AI-powered analysis</p>
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-6 space-y-6">
        <div className="text-center py-6 bg-emerald-500/5 rounded-2xl ring-1 ring-emerald-500/10">
          <div className="relative inline-flex items-center justify-center w-28 h-28 mb-3">
            <svg className="w-28 h-28 -rotate-90" viewBox="0 0 112 112">
              <circle cx="56" cy="56" r="48" fill="none" stroke="#1e2133" strokeWidth="6" />
              <circle cx="56" cy="56" r="48" fill="none" stroke="url(#scoreGradient)" strokeWidth="6"
                strokeDasharray="301.6" strokeDashoffset={301.6 * (1 - 0.77)} strokeLinecap="round" />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-emerald-400 tracking-tight">23</span>
              <span className="text-[10px] text-emerald-500/70 font-semibold uppercase tracking-wider">/ 100</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <Shield className="w-4 h-4 text-emerald-400" />
            <h4 className="text-lg font-bold text-emerald-400">Low Risk</h4>
          </div>
          <p className="text-xs text-[#5a5f73] font-medium">Overall risk assessment score</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-[#5a5f73] uppercase tracking-[0.15em]">Risk Factors</h4>
          {riskFactors.map((factor, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#b0b4c3] text-sm">{factor.name}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                  factor.level === 'low' ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'
                }`}>{factor.score}%</span>
              </div>
              <div className="h-2 bg-[#141620] rounded-full overflow-hidden ring-1 ring-[#2a2d3a]/50">
                <div className={`h-full rounded-full transition-all duration-700 ease-out ${
                  factor.level === 'low' ? 'bg-gradient-to-r from-emerald-500 to-emerald-400' : 'bg-gradient-to-r from-amber-500 to-amber-400'
                }`} style={{ width: `${factor.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentPanel;
