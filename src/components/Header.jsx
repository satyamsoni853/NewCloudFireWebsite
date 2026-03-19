import React from 'react';

const Header = () => {
  return (
    <header className="fixed md:absolute top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1340px] h-20 bg-white rounded-2xl shadow-xl flex items-center justify-between px-6 md:px-10 z-[1000]">
      <div className="flex flex-col items-center">
        <img src="/Assests/Cloudfire.png" alt="Cloudfire Logo" className="w-[80px] md:w-[90px] h-auto object-contain" />
        {/* User previously removed the brand text, so it is kept removed */}
      </div>
      <nav className="hidden md:flex items-center gap-6 lg:gap-10">
        <a href="#home" className="text-[#333] text-sm lg:text-base font-medium border-b-4 border-[#ff7301] pb-1">Home</a>
        <a href="#services" className="text-[#333] text-sm lg:text-base font-medium hover:text-[#ff7301] transition-colors">Services</a>
        <a href="#industries" className="text-[#333] text-sm lg:text-base font-medium hover:text-[#ff7301] transition-colors">Industries</a>
        <a href="#expertise" className="text-[#333] text-sm lg:text-base font-medium hover:text-[#ff7301] transition-colors">Our Expertise</a>
        <a href="#success" className="text-[#333] text-sm lg:text-base font-medium hover:text-[#ff7301] transition-colors">Client Success</a>
        <a href="#discover" className="text-[#333] text-sm lg:text-base font-medium hover:text-[#ff7301] transition-colors">Discover Cloudfire</a>
      </nav>
      <button className="bg-[#ff7301] text-white font-semibold text-sm md:text-base px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity">
        Get in Touch
      </button>
    </header>
  );
};

export default Header;
