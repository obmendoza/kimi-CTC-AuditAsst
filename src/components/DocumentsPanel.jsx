import { useState } from 'react';
import { FileCheck, Search, Check } from './icons/Icons';
import { mockDocuments } from '../data/mockData';
import { getStatusColor } from '../utils/helpers';

const DocumentsPanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [docs, setDocs] = useState(mockDocuments);

  const filteredDocs = docs.filter((d) => d.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const verifiedCount = docs.filter((d) => d.status === 'verified').length;

  const toggleVerify = (id) => {
    setDocs(docs.map((d) => d.id === id ? { ...d, status: d.status === 'verified' ? 'received' : 'verified' } : d));
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100/80 hover:shadow-card-hover transition-all duration-300">
      {/* Header */}
      <div className="p-5 sm:p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center ring-1 ring-emerald-200/50">
              <FileCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 tracking-tight">Documents</h3>
              <p className="text-xs text-gray-400 font-medium">{verifiedCount} of {docs.length} verified</p>
            </div>
          </div>
          {/* Mini progress ring */}
          <div className="relative w-11 h-11">
            <svg className="w-11 h-11 -rotate-90" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" fill="none" stroke="#f1f5f9" strokeWidth="3" />
              <circle
                cx="22" cy="22" r="18" fill="none" stroke="#10b981" strokeWidth="3"
                strokeDasharray={`${(verifiedCount / docs.length) * 113} 113`}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-emerald-600">
              {Math.round((verifiedCount / docs.length) * 100)}%
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50/80 border border-gray-100 rounded-xl text-sm placeholder-gray-400 focus:bg-white focus:border-brand-200 focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </div>

      {/* Documents list */}
      <div className="p-3 space-y-1.5 max-h-[420px] overflow-y-auto scrollbar-thin">
        {filteredDocs.map((doc) => (
          <div key={doc.id} className="p-3 rounded-xl hover:bg-gray-50/80 transition-all duration-200 group">
            <div className="flex items-start gap-3">
              {/* Checkbox */}
              <button
                onClick={() => toggleVerify(doc.id)}
                className={`w-5.5 h-5.5 min-w-[22px] min-h-[22px] rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
                  doc.status === 'verified'
                    ? 'bg-emerald-500 border-emerald-500 text-white shadow-sm shadow-emerald-500/20'
                    : 'border-gray-300 hover:border-brand-400 hover:bg-brand-50'
                }`}
              >
                {doc.status === 'verified' && <Check className="w-3.5 h-3.5" />}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-medium text-gray-900 text-sm leading-snug group-hover:text-brand-700 transition-colors">{doc.title}</h4>
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider flex-shrink-0 ${getStatusColor(doc.status)}`}>
                    {doc.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1 font-medium">
                  {doc.date ? `${doc.date} by ${doc.uploadedBy}` : 'Document missing'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPanel;
