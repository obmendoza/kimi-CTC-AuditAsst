import Header from './components/Header';
import AIAssistantPanel from './components/AIAssistantPanel';
import LoanSummaryCard from './components/LoanSummaryCard';
import StatsGrid from './components/StatsGrid';
import ConditionsPanel from './components/ConditionsPanel';
import DocumentsPanel from './components/DocumentsPanel';
import RiskAssessmentPanel from './components/RiskAssessmentPanel';
import ActivityTimeline from './components/ActivityTimeline';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-4">
          <AIAssistantPanel />
          <LoanSummaryCard />
          <StatsGrid />
          <div className="grid grid-cols-1 gap-4">
            <ConditionsPanel />
            <DocumentsPanel />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <RiskAssessmentPanel />
            <ActivityTimeline />
          </div>
        </div>
      </main>
    </div>
  );
};
export default App;
