import React from 'react';

const HireTalent = () => {
  return (
    <section className="py-24 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 relative h-[400px] flex justify-center order-2 md:order-1">
          {/* Overlapping Cards Visual */}
          <div className="relative w-80 h-full">
            {/* Background cards */}
            <div className="absolute top-5 left-0 w-56 bg-white rounded-3xl p-4 shadow-xl border border-gray-50 transform -rotate-6">
               <img src="/Assests/image 1.png" className="w-full rounded-2xl" alt="Card 1" />
            </div>
            <div className="absolute top-24 right-0 w-56 bg-white rounded-3xl p-4 shadow-2xl border border-gray-50 z-10 transform rotate-3">
               <img src="/Assests/image 2.png" className="w-full rounded-2xl" alt="Card 2" />
            </div>
            {/* Frontmost card with profile */}
            <div className="absolute top-44 left-10 w-56 bg-white rounded-3xl p-4 shadow-2xl border border-gray-50 z-20">
               <img src="/Assests/pikwly59 1.png" className="w-full rounded-2xl" alt="Card 3" />
            </div>
            {/* Checkmark Badge */}
            <div className="absolute top-64 -right-5 w-16 h-16 bg-[#ff7301] rounded-full flex items-center justify-center z-30 border-4 border-white shadow-[0_10px_30px_rgba(255,115,1,0.4)]">
               <span className="text-white text-3xl font-bold">✓</span>
            </div>
          </div>
        </div>

        <div className="flex-1 text-left order-1 md:order-2">
          <div className="inline-flex bg-gray-100 rounded-full p-1 mb-8">
            <span className="bg-white px-6 py-2 rounded-full text-sm font-bold shadow-sm">HIRE TALENT</span>
            <span className="px-6 py-2 rounded-full text-sm font-bold text-gray-500 bg-transparent">SHARE TALENT</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">Hire Talent Without<br />Notice Period</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-[500px]">Access Immediate Joiners From A Pool Of Full-Time Employees Shared By 800+ IT Companies Like Yours To Hire Them On Project Basis</p>
          <button className="bg-[#ff7301] text-white px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">Post Job</button>
        </div>
      </div>
    </section>
  );
};

export default HireTalent;
