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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 bg-mesh-light">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 py-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* AI Assistant - full width hero */}
          <div className="animate-fade-in-up">
            <AIAssistantPanel />
          </div>

          {/* Loan Summary + Stats side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="lg:col-span-2">
              <LoanSummaryCard />
            </div>
            <div>
              <StatsGrid />
            </div>
          </div>

          {/* Conditions + Documents side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ConditionsPanel />
            <DocumentsPanel />
          </div>

          {/* Risk + Activity side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <RiskAssessmentPanel />
            <ActivityTimeline />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
