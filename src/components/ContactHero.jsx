import React from 'react';
import { Link } from 'react-router-dom';

const ContactHero = () => {
  return (
    <section className="hero-page-section flex items-center pt-24 md:pt-40">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/about/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-white/60" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-white/70 md:h-28" />
      <div className="w-full px-6 md:px-24 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <nav className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>»</span>
            <span className="text-gray-900">Contact Us</span>
          </nav>
          <h1 className="hero-page-title text-5xl md:text-6xl lg:text-7xl">
            CONTACT US
          </h1>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img 
            src="/Contact/undraw_contact-us_kcoa 1.svg" 
            alt="Contact Us Illustration" 
            className="hero-page-image max-w-full h-auto"
          />
        </div>
      </div>
      
      {/* Decorative Dots Background (similar to screenshot) */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <div className="grid grid-cols-10 gap-4 p-8">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
