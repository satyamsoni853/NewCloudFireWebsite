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
    <section className="py-24 bg-white">
      <div className="flex flex-col items-center">
        {/* Main Title: Georgia, 700, 48px */}
        <h2 className="font-[Georgia,serif] font-bold text-[48px] mb-4 text-center text-gray-900 leading-tight">
          Core Offerings
        </h2>
        
        {/* Subtitle: Segoe UI, 400, 18px, LH 24px */}
        <p className="font-['Segoe_UI',sans-serif] font-normal text-[18px] leading-[24px] text-center text-gray-500 mb-16 max-w-2xl">
          Comprehensive AI solutions to transform your talent acquisition strategy
        </p>
        
        <div className="flex flex-col lg:flex-row gap-[30px] items-start justify-center w-full max-w-[1270px] mx-auto">
          
          {/* Left List (Small boxes: 380px x 170px) */}
          <div className="flex flex-col gap-[20px] w-full max-w-[380px]">
            {offers.map((offer) => (
              <div 
                key={offer.title} 
                className={`w-[380px] h-[170px] p-8 rounded-[20px] cursor-pointer transition-all duration-300 text-left border-2 flex flex-col justify-between ${
                  activeOffer === offer.title 
                    ? 'bg-white border-[#ff7301] shadow-[0_15px_40px_rgba(255,115,1,0.15)]' 
                    : 'bg-white border-gray-100 shadow-sm hover:border-gray-200'
                }`}
                onClick={() => setActiveOffer(offer.title)}
              >
                <div className="flex items-start gap-5">
                   <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg text-2xl shrink-0">
                      <img src="/Assests/icon.png" className="w-6 h-6 object-contain" alt="offer icon" />
                   </div>
                   <div className="pt-1">
                     {/* Tab Title: Georgia, 700, 18px, LH 26px */}
                     <div className="font-[Georgia,serif] font-bold text-[18px] leading-[26px] text-gray-900 mb-1">
                       {offer.title}
                     </div>
                     {/* Tab Subtitle: Segoe UI, 400, 14px, LH 26px */}
                     <div className="font-['Segoe_UI',sans-serif] font-normal text-[14px] leading-[26px] text-gray-500">
                       {offer.subtitle}
                     </div>
                   </div>
                </div>
                {/* Learn More: Segoe UI, 600, 14px, LH 26px */}
                <div className={`flex items-center gap-2 font-['Segoe_UI',sans-serif] font-semibold text-[14px] leading-[26px] ${
                  activeOffer === offer.title ? 'text-[#ff7301]' : 'text-gray-400'
                }`}>
                  Learn more <span className="text-[10px]">▶</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Detail (Large box: 860px x 550px) */}
          <div className="w-[860px] h-[550px] bg-white p-14 rounded-[30px] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-left flex flex-col items-start">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl mb-12 shrink-0">
               <img src="/Assests/icon.png" className="w-12 h-12 object-contain" alt="Current Highlight" />

            </div>
            {/* Detail Title: Georgia, 700, 28px */}
            <h3 className="font-[Georgia,serif] font-bold text-[28px] text-gray-900 mb-8 leading-tight">
              {currentOffer.title}
            </h3>
            
            <div className="space-y-6 overflow-y-auto pr-4">
              {/* Detail Description: Segoe UI, 400, 18px, LH 26px */}
              <div className="font-['Segoe_UI',sans-serif] font-normal text-[18px] leading-[26px] text-gray-600">
                <p className="mb-6">{currentOffer.content}</p>
                <p>{currentOffer.content}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreOfferings;
