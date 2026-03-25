import React from 'react';
import Hero from '../components/ServiceHero';
import Clients from '../components/Clients';
import Industries from '../components/Industries';
import MoodleServices from '../components/MoodleServices';
import SoftwareEngineeringFAQ from '../components/SoftwareEngineeringFAQ';
import SoftwareEngineeringGrid from '../components/SoftwareEngineeringGrid';
import ConsultingCTA from '../components/ConsultingCTA';

function ServicePage() {
  return (
    <main className="overflow-x-hidden">
      {/* Services Hero Section */}
      <Hero />
      {/* Software Engineering Grid - Added */}
      <SoftwareEngineeringGrid />

         
      {/* Clients Section */}
      <Clients />
      
      {/* Software Engineering FAQ (Accordion Section) - Added */}
      <SoftwareEngineeringFAQ />
      {/* Consulting Call to Action - Added */}
      <ConsultingCTA />
      
      
      {/* Moodle Services Section */}
      <MoodleServices />
      
      
      
      
      
      
      
   
    </main>
  );
}

export default ServicePage;


