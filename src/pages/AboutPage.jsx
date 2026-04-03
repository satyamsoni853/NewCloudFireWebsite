import React from 'react';
import AboutHero from '../components/AboutHero';
import About from '../components/About';
import Achievements from '../components/Achievements';
import ProjectCTA from '../components/ProjectCTA';

import Clients from '../components/Clients';
import Network from '../components/Network';

import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutHero />
      <About />
      <Achievements />
      <ProjectCTA />
      <Team />
      <Testimonials />
      <Clients />
      <Network />
    </main>
  );
}

export default AboutPage;

