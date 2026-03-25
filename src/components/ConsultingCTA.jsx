import React from 'react';

const ConsultingCTA = () => {
  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/service/helpyou.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        <h2 className="font-[Georgia] font-bold text-[36px] md:text-[48px] text-white leading-[1.2] mb-12">
          Setup A Free No-Obligation Consulting Session With Our Technology Experts
        </h2>
        <button className="bg-[#ff7301] text-white font-bold text-lg w-[218px] h-[40px] flex items-center justify-center mx-auto rounded-xl shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 transition-all duration-300">
          Talk to Our Experts
        </button>
      </div>
    </section>
  );
};

export default ConsultingCTA;
