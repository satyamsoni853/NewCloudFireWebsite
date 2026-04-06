import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactCards from '../components/ContactCards';
import ProjectCTA from '../components/ProjectCTA';
import ContactFormSection from '../components/ContactFormSection';
import ContactMap from '../components/ContactMap';

const ContactPage = () => {
  return (
    <div className="page pt-20">
      <ContactHero />
      <ContactCards />
      <ProjectCTA />
      <ContactFormSection />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
