import { FileText } from './icons/Icons';
import { mockLoanData } from '../data/mockData';

const LoanSummaryCard = () => {
  return (
    <div className="bg-[#1a1d27] rounded-2xl border border-[#2a2d3a] shadow-card hover:border-[#363a4a] transition-all duration-300 h-full">
      <div className="p-6">
        <div className="flex flex-col gap-5">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-brand-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ring-brand-500/20">
              <FileText className="w-7 h-7 text-brand-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <h2 className="text-xl font-bold text-[#e2e4e9] tracking-tight">{mockLoanData.loanNumber}</h2>
                <span className="px-2.5 py-1 bg-brand-500/10 text-brand-400 rounded-lg text-xs font-semibold ring-1 ring-brand-500/20">{mockLoanData.status}</span>
              </div>
              <p className="text-base text-[#c8cdd5] font-semibold">{mockLoanData.borrowerName}</p>
              <p className="text-sm text-[#5a5f73] mt-0.5">{mockLoanData.propertyAddress}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Loan Amount', value: mockLoanData.loanAmount, highlight: true },
              { label: 'Loan Type', value: mockLoanData.loanType, highlight: false },
              { label: 'Est. Closing', value: mockLoanData.estimatedClosing, highlight: false },
            ].map((item, i) => (
              <div key={i} className="text-center p-3 bg-[#141620] rounded-xl ring-1 ring-[#2a2d3a]/50">
                <p className="text-[10px] uppercase tracking-wider text-[#5a5f73] font-semibold mb-1">{item.label}</p>
                <p className={`font-bold ${item.highlight ? 'text-lg text-[#e2e4e9]' : 'text-sm text-[#b0b4c3]'}`}>{item.value}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-sm font-semibold text-[#8b8fa3]">Audit Progress</span>
              <span className="text-sm font-bold text-brand-400">{mockLoanData.progress}%</span>
            </div>
            <div className="h-2.5 bg-[#141620] rounded-full overflow-hidden ring-1 ring-[#2a2d3a]/50">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-brand-400 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${mockLoanData.progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-[#5a5f73] font-medium">Started Jan 12</span>
              <span className="text-[10px] text-[#5a5f73] font-medium">Target Feb 28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSummaryCard;
