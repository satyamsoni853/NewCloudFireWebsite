import React from "react";
import ParticleNetwork from "./ParticleNetwork";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen md:min-h-[850px] md:h-screen flex flex-col justify-center overflow-hidden bg-[#111]"
    >
      {/* Spider Animation Background */}
      <ParticleNetwork className="z-0" />
      
      {/* Background Gradients for Depth */}
      <div className="absolute inset-0 bg-radial-at-t from-black/0 via-black/40 to-black z-0 pointer-events-none" />
      <div className="hidden md:block absolute inset-0 bg-[url('/Assests/banner-bg.png')] bg-cover bg-center mix-blend-overlay opacity-30 z-0"></div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10 w-full">
        {/* Content Section */}
        <div className="flex flex-col items-start text-left md:max-w-[900px]">
          <h1 className="font-serif text-[42px] sm:text-6xl md:text-8xl lg:text-[96px] leading-[1.2] md:leading-[1.05] text-white font-bold mb-6 md:mb-10">
            Our Framework <br />
            Services <br className="md:hidden" /> 
            <span className="text-primary">Solutions</span>
          </h1>
          <p className="font-sans text-base sm:text-2xl lg:text-[26px] text-white/80 max-w-[600px] leading-relaxed md:leading-snug font-normal md:font-medium mb-8 md:mb-14">
            We At Cloudfire Provide Framework Services Solutions To Clients
          </p>

          <div className="flex flex-row gap-4 sm:gap-6 w-full md:w-auto items-center justify-start">
            <button className="flex-1 sm:flex-none bg-primary text-black px-6 sm:px-10 py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-lg hover:scale-105 transition-all">
              Framework
            </button>
            <button className="flex-1 sm:flex-none bg-white text-[#111] px-6 sm:px-10 py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-lg hover:scale-105 transition-all shadow-lg">
              I Want Developer
            </button>
          </div>
        </div>
      </div>

      {/* Decorative desktop-only element */}
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-[url('/Assests/arrow2.png')] bg-contain bg-no-repeat opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
