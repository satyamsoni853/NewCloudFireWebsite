import React from 'react';

const HireTalent = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1 relative flex justify-center order-2 md:order-1">
          {/* Main Visual */}
          <div className="relative w-full max-w-lg transition-transform hover:scale-105 duration-700">
            <img 
              src="/Assests/hiring.svg" 
              className="w-full h-auto" 
              alt="Hiring Illustration" 
            />
          </div>
        </div>

        <div className="flex-1 text-left order-1 md:order-2">
          {/* Toggle Button */}
          <div className="inline-flex bg-white rounded-full p-1 mb-10 border border-gray-100 shadow-xl shadow-gray-200/50">
            <button className="bg-[#fbb03b] text-gray-900 px-8 py-3 rounded-full text-sm font-black tracking-wider uppercase transition-all shadow-lg shadow-orange-500/20">
              HIRE TALENT
            </button>
            <button className="px-8 py-3 rounded-full text-sm font-black tracking-wider uppercase text-gray-500 hover:text-gray-900 transition-colors">
              SHARE TALENT
            </button>
          </div>

          <h2 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-8">
            Hire Talent Without<br />
            <span className="block">Notice Period</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-lg font-medium">
            Access Immediate Joiners From A Pool Of Full-Time Employees Shared By 800+ IT Companies Like Yours To Hire Them On Project Basis
          </p>

          <button className="bg-[#ff7301] text-white px-12 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-orange-500/40 transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-orange-500/20">
            Post Job
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireTalent;
