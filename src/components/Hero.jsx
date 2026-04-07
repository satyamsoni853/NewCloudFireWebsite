import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen md:min-h-[850px] md:h-[90vh] flex flex-col justify-center overflow-hidden bg-[#292929] md:bg-transparent"
    >
      {/* Desktop-only Background Layers */}
      <video
        className="hidden md:block absolute inset-0 h-full w-full object-cover"
        src="/Assests/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hidden md:block absolute inset-0 bg-[url('/Assests/banner-bg.png')] bg-cover bg-center mix-blend-overlay opacity-60"></div>
      <div className="hidden md:block absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-24 grid grid-cols-1 md:block relative z-10 w-full">
        {/* Content Section */}
        <div className="flex flex-col items-start text-left md:max-w-[900px] space-y-8 md:space-y-0">
          <h1 className="font-serif text-[42px] sm:text-6xl md:text-8xl lg:text-[96px] leading-[1.2] md:leading-[1.05] text-white font-bold mb-2 md:mb-8">
            Our Framework <br />
            Services <br className="md:hidden" /> 
            <span className="text-primary">Solutions</span>
          </h1>
          <p className="font-sans text-base sm:text-2xl lg:text-[26px] text-white/80 max-w-[600px] leading-relaxed md:leading-snug font-normal md:font-medium mb-4 md:mb-12">
            We At Cloudfire Provide Framework Services Solutions To Clients
          </p>

          <div className="flex flex-row gap-3 sm:gap-5 w-full md:w-auto items-center justify-start">
            <button className="flex-1 sm:flex-none bg-primary text-black px-4 sm:px-10 py-4 rounded-xl font-bold text-sm sm:text-lg hover:opacity-90 transition-opacity">
              Framework
            </button>
            <button className="flex-1 sm:flex-none bg-white text-[#111] px-4 sm:px-10 py-4 rounded-xl font-bold text-sm sm:text-lg hover:bg-gray-100 transition-colors shadow-lg">
              I Want Developer
            </button>
          </div>
        </div>

        {/* Mobile-only Video */}
        <div className="md:hidden mt-20 relative flex justify-center w-full">
          <div className="relative w-full max-w-[500px] aspect-4/3 overflow-hidden shadow-2xl shadow-black/60 border border-white/5">
            <video
              className="w-full h-full object-cover"
              src="/Assests/video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Decorative desktop-only arrow/element from original code */}
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-[url('/Assests/arrow2.png')] bg-contain bg-no-repeat opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
