import { FileText } from './icons/Icons';
import { mockLoanData } from '../data/mockData';
const LoanSummaryCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-blue-700" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h2 className="text-2xl font-bold text-gray-900">{mockLoanData.loanNumber}</h2>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">{mockLoanData.status}</span>
              </div>
              <p className="text-lg text-gray-700 font-medium">{mockLoanData.borrowerName}</p>
              <p className="text-sm text-gray-500">{mockLoanData.propertyAddress}</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Loan Amount</p>
              <p className="text-lg font-bold text-gray-900">{mockLoanData.loanAmount}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Loan Type</p>
              <p className="text-sm font-semibold text-gray-900">{mockLoanData.loanType}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Est. Closing</p>
              <p className="text-sm font-semibold text-gray-900">{mockLoanData.estimatedClosing}</p>
            </div>
          </div>
          <div className="pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Audit Progress</span>
              <span className="text-sm font-bold text-blue-600">{mockLoanData.progress}%</span>
            </div>
            <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500" style={{ width: `${mockLoanData.progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoanSummaryCard;
