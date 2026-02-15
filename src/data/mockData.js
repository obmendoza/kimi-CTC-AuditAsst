export const mockLoanData = {
  loanNumber: '2024-001234',
  borrowerName: 'John & Sarah Smith',
  loanType: 'Conventional 30-Year Fixed',
  loanAmount: '$485,000',
  propertyAddress: '123 Main Street, Austin, TX 78701',
  status: 'In Audit',
  progress: 75,
  estimatedClosing: '2024-02-28',
};
export const mockConditions = [
  { id: 1, title: 'Verify Employment', description: 'Need current VOE from employer', status: 'pending', priority: 'high', dueDate: 'Jan 20' },
  { id: 2, title: 'Bank Statements', description: 'Missing December 2023 statement', status: 'cleared', priority: 'medium', dueDate: 'Jan 18' },
  { id: 3, title: 'Gift Letter', description: 'Gift funds documentation needed', status: 'pending', priority: 'high', dueDate: 'Jan 22' },
  { id: 4, title: 'Appraisal Review', description: 'Appraisal value meets requirements', status: 'cleared', priority: 'low', dueDate: 'Jan 19' },
  { id: 5, title: 'HOI Declaration', description: 'Homeowners insurance declaration page', status: 'in_review', priority: 'medium', dueDate: 'Jan 21' },
];
export const mockDocuments = [
  { id: 1, title: '1003 Uniform Residential Loan Application', status: 'verified', date: 'Jan 15', uploadedBy: 'Michael Johnson' },
  { id: 2, title: 'Credit Report - TransUnion', status: 'verified', date: 'Jan 15', uploadedBy: 'System' },
  { id: 3, title: 'W-2 Forms 2022-2023', status: 'received', date: 'Jan 16', uploadedBy: 'Sarah Smith' },
  { id: 4, title: 'Pay Stubs - Last 30 Days', status: 'received', date: 'Jan 16', uploadedBy: 'John Smith' },
  { id: 5, title: 'Bank Statements - Chase', status: 'missing', date: null, uploadedBy: null },
  { id: 6, title: 'Purchase Contract', status: 'verified', date: 'Jan 14', uploadedBy: 'Michael Johnson' },
  { id: 7, title: 'Appraisal Report', status: 'verified', date: 'Jan 17', uploadedBy: 'Appraisal Co.' },
  { id: 8, title: 'Title Commitment', status: 'received', date: 'Jan 18', uploadedBy: 'Title Company' },
];
export const riskFactors = [
  { name: 'Credit Score', score: 85, level: 'low' },
  { name: 'Debt-to-Income', score: 42, level: 'low' },
  { name: 'Loan-to-Value', score: 80, level: 'low' },
  { name: 'Employment', score: 95, level: 'low' },
  { name: 'Assets', score: 65, level: 'warning' },
];
export const activities = [
  { title: 'Document Uploaded', desc: 'W-2 Forms uploaded by Sarah Smith', time: '2 hours ago' },
  { title: 'Condition Cleared', desc: 'Bank Statements condition cleared by Lisa Chen', time: '4 hours ago' },
  { title: 'AI Analysis Complete', desc: 'Risk assessment updated with new data', time: '5 hours ago' },
  { title: 'Condition Added', desc: 'New condition: Gift Letter required', time: '1 day ago' },
  { title: 'Loan Submitted', desc: 'Loan submitted to underwriting', time: '2 days ago' },
];
export const aiSuggestions = [
  'Review the missing bank statement for December 2023',
  'Verify employment within the next 48 hours',
  'Gift letter needs donor signature and bank statement',
  'Consider ordering tax transcripts as backup',
];
