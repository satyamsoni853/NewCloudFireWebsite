import React from 'react';

const CTABanner = () => {
  return (
    <div className="bg-linear-to-br from-[#fbb03b] to-primary rounded-custom p-16 md:p-24 text-center text-gray-900 shadow-2xl shadow-orange-500/20 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/Assests/arrow2.png')] bg-no-repeat bg-contain opacity-5 pointer-events-none group-hover:scale-105 transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        <h2 className="font-[Georgia,serif] font-bold text-[48px] md:text-[56px] mb-8 leading-tight">Ready To Get Started?</h2>
        <p className="font-['Segoe_UI',sans-serif] font-normal text-[18px] md:text-[20px] max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
          Experience Our AI-Powered Talent Matching And Transform How You Build Your Tech Team.
        </p>
        <button className="bg-white text-gray-900 px-12 py-5 rounded-2xl font-['Segoe_UI',sans-serif] font-bold text-[18px] hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-4 mx-auto shadow-xl shadow-orange-900/10">
          Schedule Your Consultation <span className="text-[10px]">▶</span>
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
