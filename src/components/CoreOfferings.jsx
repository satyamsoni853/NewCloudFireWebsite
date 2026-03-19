import React, { useState } from 'react';

const offers = [
  {
    title: 'Rapid AI Talent Deployment',
    subtitle: 'We Offer Unlimited Moodle',
    content: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.'
  },
  {
    title: 'Global Delivery Excellence',
    subtitle: 'Expert Scaling Teams',
    content: 'Our global team ensures that you have access to top-tier talent regardless of geographic location. We maintain rigorous standards for vetting and onboarding to ensure seamless integration into your existing workflows. It has survived not only five centuries, but also the leap into electronic typesetting.'
  },
  {
    title: 'Secure Scalable Solutions',
    subtitle: 'Enterprise Ready Systems',
    content: 'Security is at the heart of everything we build. Our solutions are designed to scale with your business while maintaining the highest levels of data protection and compliance with international standards. Our team of experts works around the clock to ensure your platform\'s integrity.'
  }
];

const CoreOfferings = () => {
  const [activeOffer, setActiveOffer] = useState('Rapid AI Talent Deployment');
  const currentOffer = offers.find(o => o.title === activeOffer);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-5xl font-extrabold mb-4 text-center">Core Offerings</h2>
      <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto">Comprehensive AI Solutions To Transform Your Talent Acquisition Strategy</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left List */}
        <div className="flex flex-col gap-5 md:col-span-1">
          {offers.map((offer) => (
            <div 
              key={offer.title} 
              className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 text-left border-2 ${
                activeOffer === offer.title 
                  ? 'bg-white border-[#ff7301] shadow-2xl' 
                  : 'bg-white border-transparent hover:border-gray-200 shadow-sm'
              }`}
              onClick={() => setActiveOffer(offer.title)}
            >
              <div className="flex items-center gap-5">
                 <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md text-2xl">
                    🔥
                 </div>
                 <div>
                   <div className="text-base font-extrabold text-gray-900 leading-tight mb-1">{offer.title}</div>
                   <div className="text-xs text-gray-500 font-medium">{offer.subtitle}</div>
                 </div>
              </div>
              <div className={`mt-5 flex items-center gap-2 text-sm font-bold ${
                activeOffer === offer.title ? 'text-[#ff7301]' : 'text-gray-400'
              }`}>
                Learn more <span className="text-[10px]">▶</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Detail */}
        <div className="md:col-span-2 bg-white p-12 rounded-[2rem] border border-gray-100 shadow-xl text-left h-full flex flex-col justify-center">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg text-4xl mb-10">
             🔥
          </div>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">{currentOffer.title}</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">{currentOffer.content}</p>
          <p className="text-lg text-gray-600 leading-relaxed">{currentOffer.content}</p>
        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
