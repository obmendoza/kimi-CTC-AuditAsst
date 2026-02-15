import { useState } from 'react';
import { FileCheck, Search, Check } from './icons/Icons';
import { mockDocuments } from '../data/mockData';
import { getStatusColor } from '../utils/helpers';
const DocumentsPanel = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [docs, setDocs] = useState(mockDocuments);
  const filteredDocs = docs.filter((d) => d.title.toLowerCase().includes(searchQuery.toLowerCase()));
  const toggleVerify = (id) => {
    setDocs(docs.map((d) => d.id === id ? { ...d, status: d.status === 'verified' ? 'received' : 'verified' } : d));
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
            <FileCheck className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Documents</h3>
            <p className="text-sm text-gray-500">{docs.filter((d) => d.status === 'verified').length} of {docs.length} verified</p>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input type="text" placeholder="Search documents..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
        </div>
      </div>
      <div className="p-3 space-y-2 max-h-96 overflow-y-auto scrollbar-thin">
        {filteredDocs.map((doc) => (
          <div key={doc.id} className="p-3 rounded-xl border border-gray-200">
            <div className="flex items-start gap-3">
              <button onClick={() => toggleVerify(doc.id)} className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${doc.status === 'verified' ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300'}`}>
                {doc.status === 'verified' && <Check className="w-4 h-4" />}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-medium text-gray-900 text-sm">{doc.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${getStatusColor(doc.status)}`}>{doc.status}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{doc.date ? `Uploaded ${doc.date} by ${doc.uploadedBy}` : 'Document missing'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DocumentsPanel;
