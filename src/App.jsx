import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import IndustriesPage from './pages/IndustriesPage';
import ExpertisePage from './pages/ExpertisePage';
import TeamMemberPage from './pages/TeamMemberPage';
import HireTalentDashboard from './pages/HireTalentDashboard';
import JobsPage from './pages/JobsPage';
import ReportsPage from './pages/ReportsPage';


import { useEffect } from 'react';

// ScrollToTop component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {!isDashboard && <Header />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/team/:slug" element={<TeamMemberPage />} />
        <Route path="/dashboard" element={<HireTalentDashboard />} />
        <Route path="/dashboard/jobs" element={<JobsPage />} />
        <Route path="/dashboard/reports" element={<ReportsPage />} />
      </Routes>

      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;

