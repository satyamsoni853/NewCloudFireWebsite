import React from 'react';
import Hero from '../components/ServiceHero';
import ServiceFeatures from '../components/ServiceFeatures';
import CloudfireOfferings from '../components/CloudfireOfferings';
import SoftwareEngineeringGrid from '../components/SoftwareEngineeringGrid';
import WhatMakesUsDifferent from '../components/WhatMakesUsDifferent';

function ServicePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ServiceFeatures />
      <CloudfireOfferings />
      <SoftwareEngineeringGrid />
      <WhatMakesUsDifferent />
    </main>
  );
}

export default ServicePage;
