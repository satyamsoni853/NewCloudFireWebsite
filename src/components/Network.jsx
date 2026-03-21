import React from 'react';

const Network = () => {
  return (
    <section className="py-12 sm:py-24 bg-white text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading: Georgia, Bold, scaling from 32px on mobile to 48px on desktop */}
        <h2 className="font-serif font-bold text-[32px] sm:text-[48px] text-gray-900 mb-6 sm:mb-4 leading-tight">
          A Truly Unique Global Cloud Network
        </h2>
        
        {/* Subtitle: Segoe UI, 400, scaling from 14px to 18px */}
        <p className="font-['Segoe_UI',sans-serif] font-normal text-sm sm:text-[18px] leading-relaxed sm:leading-[24px] text-gray-500 max-w-2xl mx-auto mb-12 sm:mb-20 px-4">
          Powering Innovation Across Industries With Cutting-Edge AI Talent Solutions
        </p>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Image Section */}
          <div className="relative group flex justify-center w-full order-1">
            <div className="relative w-full max-w-[657px]">
               {/* Blob background for mobile consistency */}
               <div className="absolute inset-0 bg-gray-50 rounded-full blur-3xl opacity-50 scale-110"></div>
               <img 
                 src="/Assests/connected-world.svg" 
                 className="relative w-full h-auto object-contain opacity-100 group-hover:scale-105 transition-transform duration-1000 z-10" 
                 alt="Global Map" 
               />
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="w-full order-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-wrap gap-4 sm:gap-8 justify-center items-center">
              {[
                { val: '14+', label: 'Year of Experience' },
                { val: '600+', label: 'Happy Clients' },
                { val: '250+', label: 'CMS Delivered' },
                { val: '4.5', label: 'Service Rating' },
                { val: '200+', label: 'LMS Delivered' }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white p-6 sm:p-8 rounded-[20px] border border-gray-100/50 shadow-[0_15px_45px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-[100px] sm:h-[136px] w-full lg:w-[266px] ${
                    idx === 4 ? 'col-span-2 mx-auto max-w-[180px] sm:max-w-none' : ''
                  }`}
                >
                  <h3 className="font-['Segoe_UI',sans-serif] font-bold text-[28px] sm:text-[47px] text-[#ffb44a] leading-tight mb-1">
                    {stat.val}
                  </h3>
                  <p className="font-['Segoe_UI',sans-serif] font-normal text-[10px] sm:text-[16px] text-gray-500 uppercase sm:capitalize tracking-wider sm:tracking-normal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
