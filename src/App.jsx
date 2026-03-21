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
      
      <main className="overflow-x-hidden space-y-20">
        {/* Full Width Hero */}
        <Hero />
        
        {/* Sections handle their own width to allow background colors to span full page width */}
        <About />
        <HireTalent />
        <CoreOfferings />
        <Interview />
        <Workflow />
        <CTABanner />
        <Industries />
        <Clients />
        <Network />
      </main>

      <Footer />
    </div>
  );
}

export default App;
