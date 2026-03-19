import React from 'react';

const Network = () => {
  return (
    <section className="py-24 text-center bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">A Truly Unique Global Cloud Network</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-20 leading-relaxed font-medium">Powering Innovation Across Industries With Cutting-Edge AI Talent Solutions.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group">
          <img 
            src="/Assests/connected-world.svg" 
            className="w-full h-auto object-contain opacity-100 group-hover:scale-105 transition-transform duration-1000" 
            alt="Global Map" 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-50 p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#ff7301] mb-2 tracking-tighter">14+</h3>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">Years of Experience</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#ff7301] mb-2 tracking-tighter">600+</h3>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">Happy Clients</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#ff7301] mb-2 tracking-tighter">250+</h3>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">CMS Delivered</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#ff7301] mb-2 tracking-tighter">4.5</h3>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">Service Rating</p>
          </div>
          <div className="col-span-2 bg-gray-50 p-8 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-5xl font-extrabold text-[#ff7301] mb-2 tracking-tighter">200+</h3>
            <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">LMS Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
