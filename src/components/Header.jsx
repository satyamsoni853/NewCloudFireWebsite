import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed md:absolute top-0 md:top-5 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:w-[calc(100%-40px)] md:max-w-[1340px] h-20 bg-[#292929] md:bg-white md:rounded-2xl shadow-xl flex items-center justify-between px-6 md:px-10 z-[1000] transition-all duration-300">
        
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img 
            src="/Assests/Cloudfire-white.png" 
            alt="Cloudfire Logo" 
            className="md:hidden w-[100px] h-auto object-contain" 
          />
          <img 
            src="/Assests/Cloudfire.png" 
            alt="Cloudfire Logo" 
            className="hidden md:block w-[90px] h-auto object-contain" 
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-10">
          {['Home', 'Services', 'Industries', 'Our Expertise', 'Client Success', 'Discover Cloudfire'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              className="text-[#333] text-sm lg:text-base font-medium hover:text-[#ff7301] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Action Button / Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#ff7301] text-white font-semibold text-sm md:text-base px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
            Get in Touch
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-8 h-1 bg-white mb-1.5 rounded-full"></div>
            <div className="w-8 h-1 bg-white mb-1.5 rounded-full"></div>
            <div className="w-8 h-1 bg-white rounded-full"></div>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#292929] z-[1001] flex flex-col items-center justify-center gap-8 text-2xl font-bold text-white transition-all">
           <button 
            className="absolute top-8 right-8 text-4xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#industries" onClick={() => setIsMenuOpen(false)}>Industries</a>
          <button className="bg-[#ff7301] px-10 py-4 rounded-full mt-4">Get in Touch</button>
        </div>
      )}
    </>
  );
};

export default Header;
