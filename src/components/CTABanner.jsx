import React from 'react';

const CTABanner = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1270px] mx-auto px-6">
        <div className="max-w-[1400px] mx-auto px-6">
        <div className="w-full max-w-[700px] h-auto min-h-[250px] mx-auto bg-gradient-to-r from-[#ff7301] to-[#ffaa00] rounded-[20px] flex items-center justify-between px-6 sm:px-10 py-10 md:py-0 lg:px-14 shadow-xl shadow-orange-500/20 relative overflow-hidden flex-col md:flex-row text-center md:text-left gap-8 md:gap-0">
          
          {/* Left Side Content */}
          <div className="flex-1 relative z-10">
            {/* Heading: Georgia, Bold, 28px */}
            <h2 className="font-serif font-bold text-[28px] text-white mb-3 leading-tight">
              Ready to Get Started?
            </h2>
            {/* Description: Segoe UI, 400, 18px, LH 26px */}
            <p className="font-['Segoe_UI',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[26px] text-white/90 max-w-sm mx-auto md:mx-0">
              Experience our AI-powered talent matching and transform how you build your tech team.
            </p>
          </div>

          {/* Right Side Button */}
          <div className="relative z-10 shrink-0">
            {/* Button: w-[277px] h-[40px], Segoe UI, 400, 16px, LH 12px */}
            <button className="w-full sm:w-[277px] h-auto sm:h-[40px] py-3 sm:py-0 bg-white text-[#ff7301] rounded-lg font-['Segoe_UI',sans-serif] font-normal text-[16px] leading-[12px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-center flex items-center justify-center">
              Get Your Custom Proposal
            </button>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CTABanner;
