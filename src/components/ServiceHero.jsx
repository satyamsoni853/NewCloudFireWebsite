import React from "react";

const ServiceHero = () => {
  return (
    <section
      id="service-hero"
      className="relative w-full min-h-screen md:min-h-[850px] md:h-[90vh] flex flex-col justify-center overflow-hidden bg-[#292929] md:bg-transparent"
    >
      {/* Desktop-only Background Layers */}
      <div className="hidden md:block absolute inset-0 bg-[url('/service/hero.png')] bg-cover bg-center"></div>
      <div className="hidden md:block absolute inset-0 bg-[url('/Assests/banner-bg.png')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-24 grid grid-cols-1 md:block relative z-10 w-full">
        {/* Content Section */}
        <div className="flex flex-col items-start text-left md:max-w-[900px]">
          <h1 className="font-serif text-[42px] sm:text-6xl md:text-8xl lg:text-[96px] leading-[1.2] md:leading-[1.05] text-white font-bold mb-2 md:mb-8">
            Our <span className="text-[#ff7301]">Services</span>
          </h1>
          <p className="font-sans text-base sm:text-2xl lg:text-[26px] text-white/80 max-w-[700px] leading-relaxed md:leading-snug font-normal md:font-medium mb-4 md:mb-12">
            Tailored solutions that empower your business with cutting-edge AI and framework expertise.
          </p>

          <div className="flex flex-row gap-3 sm:gap-5 w-full md:w-auto items-center justify-start">
            <button className="flex-1 sm:flex-none bg-[#ff7301] text-white px-4 sm:px-10 py-4 rounded-xl font-bold text-sm sm:text-lg hover:opacity-90 transition-opacity">
              Explore Services
            </button>
            <button className="flex-1 sm:flex-none bg-white text-[#111] px-4 sm:px-10 py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
