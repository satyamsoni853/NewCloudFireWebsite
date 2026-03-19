import React from 'react';

const CTABanner = () => {
  return (
    <div className="bg-gradient-to-br from-[#fbb03b] to-[#ff7301] rounded-[2.5rem] p-12 md:p-20 text-center text-gray-900 shadow-2xl shadow-orange-500/20 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/Assests/arrow2.png')] bg-no-repeat bg-contain opacity-10 pointer-events-none group-hover:scale-105 transition-transform duration-700"></div>
      
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Ready To Get Started?</h2>
        <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 opacity-90 leading-relaxed">
          Experience Our AI-Powered Talent Matching And Transform How You Build Your Tech Team.
        </p>
        <button className="bg-white text-gray-900 px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 mx-auto">
          Schedule Your Consultation <span className="text-sm">▶</span>
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
