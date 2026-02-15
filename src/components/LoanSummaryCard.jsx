import { FileText } from './icons/Icons';
import { mockLoanData } from '../data/mockData';

const LoanSummaryCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100/80 overflow-hidden hover:shadow-card-hover transition-all duration-300 h-full">
      <div className="p-6">
        <div className="flex flex-col gap-5">
          {/* Top section */}
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl flex items-center justify-center flex-shrink-0 ring-1 ring-brand-200/50">
              <FileText className="w-7 h-7 text-brand-600" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <h2 className="text-xl font-bold text-gray-900 tracking-tight">{mockLoanData.loanNumber}</h2>
                <span className="px-2.5 py-1 bg-brand-50 text-brand-600 rounded-lg text-xs font-semibold ring-1 ring-brand-100">{mockLoanData.status}</span>
              </div>
              <p className="text-base text-gray-700 font-semibold">{mockLoanData.borrowerName}</p>
              <p className="text-sm text-gray-400 mt-0.5">{mockLoanData.propertyAddress}</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Loan Amount', value: mockLoanData.loanAmount, highlight: true },
              { label: 'Loan Type', value: mockLoanData.loanType, highlight: false },
              { label: 'Est. Closing', value: mockLoanData.estimatedClosing, highlight: false },
            ].map((item, i) => (
              <div key={i} className="text-center p-3 bg-gray-50/80 rounded-xl">
                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold mb-1">{item.label}</p>
                <p className={`font-bold ${item.highlight ? 'text-lg text-gray-900' : 'text-sm text-gray-700'}`}>{item.value}</p>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-sm font-semibold text-gray-600">Audit Progress</span>
              <span className="text-sm font-bold text-brand-600">{mockLoanData.progress}%</span>
            </div>
            <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 rounded-full transition-all duration-700 ease-out shadow-sm shadow-brand-400/30"
                style={{ width: `${mockLoanData.progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-gray-400 font-medium">Started Jan 12</span>
              <span className="text-[10px] text-gray-400 font-medium">Target Feb 28</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSummaryCard;
