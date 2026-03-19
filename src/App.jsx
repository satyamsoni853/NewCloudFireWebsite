import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import About from './components/About';
import HireTalent from './components/HireTalent';
import Interview from './components/Interview';
import Workflow from './components/Workflow';
import CoreOfferings from './components/CoreOfferings';
import CTABanner from './components/CTABanner';
import Industries from './components/Industries';
import Network from './components/Network';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="overflow-x-hidden">
        {/* Full Width Hero */}
        <Hero />
        
        {/* Constrained sections */}
        <div className="max-w-[1400px] mx-auto px-6 space-y-20">
          <About />
          <HireTalent />
          <Interview />
          <Workflow />
          <CoreOfferings />
          <CTABanner />
          <Industries />
          <Clients />
          <Network />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
