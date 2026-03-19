import React from 'react';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative w-full min-h-[850px] h-[90vh] bg-[url('/Assests/image-banner.png')] bg-cover bg-center flex flex-col justify-center px-10 md:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none"></div>
      
      <div className="relative z-10 max-w-[900px]">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[96px] leading-[1.05] text-white font-bold mb-8">
          Our Framework <br />
          Services <span className="text-[#ff7301]">Solutions</span>
        </h1>
        <p className="font-sans text-xl md:text-2xl lg:text-[26px] text-white/90 max-w-[600px] leading-snug font-medium mb-12">
          We At Cloudfire Provide Framework Services Solutions To Clients
        </p>
        
        <div className="flex gap-5">
          <button className="bg-[#ff7301] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
            Framework
          </button>
          <button className="bg-white text-[#111] px-8 md:px-12 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
            I Want Developer
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[url('/Assests/arrow2.png')] bg-contain bg-no-repeat opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
