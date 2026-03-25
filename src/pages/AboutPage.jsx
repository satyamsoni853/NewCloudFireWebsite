import React from 'react';
import Hero from '../components/AboutHero';
import About from '../components/About';
import Industries from '../components/Industries';
import Clients from '../components/Clients';
import Network from '../components/Network';
import VideoSection from '../components/VideoSection';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      {/* About Hero Section */}
      <Hero />
      
      {/* About Us section */}
      <About />
      {/* Industries */}
      <Industries />
      
      {/* Our Team - Added */}
      <Team />
      
      {/* Video Section - Added */}
      <VideoSection />
      
      {/* Testimonials - Added */}
      <Testimonials />
      
      
      
      
      {/* Clients */}
      <Clients />
      
      {/* Network */}
      <Network />
    </main>
  );
}

export default AboutPage;

