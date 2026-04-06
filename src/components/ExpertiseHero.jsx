import React from 'react';
import { Link } from 'react-router-dom';

const ExpertiseHero = () => {
  return (
    <section className="hero-page-section overflow-visible min-h-[500px]">
      <div
        className="absolute inset-0 z-0 bg-white"
        style={{
          backgroundImage: "url('/about/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.1
        }}
      />
      
      {/* Halftone patterns per screenshot */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 opacity-[0.07] pointer-events-none z-0">
        <div className="grid grid-cols-12 gap-3">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-10 -right-40 w-96 h-96 opacity-[0.05] pointer-events-none z-0">
        <div className="grid grid-cols-12 gap-2">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="w-full px-6 md:px-24 h-full flex flex-col md:flex-row items-center justify-between relative z-10 pt-20">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <nav className="flex items-center gap-2 text-sm md:text-base font-medium text-[#141414]/60 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-primary text-xs">•</span>
            <span className="text-[#141414]">Expertise</span>
          </nav>
          <h1 
            className="text-6xl md:text-8xl font-serif font-bold text-secondary uppercase tracking-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            EXPERTISE
          </h1>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end relative -bottom-16">
          <img 
            src="/Expertise/undraw_proud-designer_1rcm 1.svg" 
            alt="Expertise Illustration" 
            className="w-full max-w-[600px] lg:max-w-[700px] h-auto object-contain transform scale-110 md:scale-125"
          />
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHero;
