# NQM CTC Audit Assistant

AI-Powered Loan Quality Management dashboard built with React, Vite, and Tailwind CSS.

## Live Demo

[https://obmendoza.github.io/kimi-CTC-AuditAsst/](https://obmendoza.github.io/kimi-CTC-AuditAsst/)

## Features

- **AI Audit Assistant** — Chat interface with smart recommendations for loan file review
- **Loan Summary** — At-a-glance loan details, borrower info, and audit progress
- **Conditions Tracker** — Filterable list of loan conditions with status toggling (pending, in review, cleared)
- **Document Management** — Searchable document checklist with verification controls
- **Risk Assessment** — AI-powered risk scoring with factor-level breakdowns
- **Activity Timeline** — Chronological audit activity feed
- **Stats Dashboard** — Key metrics including conditions count, document status, risk score, and audit duration

## Tech Stack

- **React 18** — Component-based UI
- **Vite 6** — Fast dev server and production builds
- **Tailwind CSS 3** — Utility-first styling
- **gh-pages** — GitHub Pages deployment

## Project Structure

```
kimi-CTC-AuditAsst/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx                  # React entry point
    ├── index.css                 # Tailwind directives & custom styles
    ├── App.jsx                   # Main layout
    ├── components/
    │   ├── Header.jsx            # App header with notifications & user info
    │   ├── AIAssistantPanel.jsx  # AI chat & recommendations
    │   ├── LoanSummaryCard.jsx   # Loan details & progress bar
    │   ├── StatsGrid.jsx         # 2x2 key metrics grid
    │   ├── ConditionsPanel.jsx   # Filterable conditions list
    │   ├── DocumentsPanel.jsx    # Searchable document checklist
    │   ├── RiskAssessmentPanel.jsx # Risk score & factor bars
    │   ├── ActivityTimeline.jsx  # Audit activity feed
    │   └── icons/
    │       └── Icons.jsx         # 17 SVG icon components
    ├── data/
    │   └── mockData.js           # Mock loan, conditions, docs, risk & activity data
    └── utils/
        └── helpers.js            # Status & priority color utilities
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/obmendoza/kimi-CTC-AuditAsst.git
cd kimi-CTC-AuditAsst

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Build & Deploy

```bash
# Production build
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## License

MIT
