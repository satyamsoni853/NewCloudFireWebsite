import React, { useState } from 'react';

const industries = [
  { 
    name: 'IT', 
    desc: 'Empowering Tech Companies With Cutting-Edge AI Talent For Software Development And System Optimization.', 
    solutions: [
      { title: 'Automated Code Generation', content: 'AI-Powered Systems That Accelerate Development By Generating Code And Automating Repetitive Programming Tasks.' },
      { title: 'Automated Code Generation', content: 'AI-Powered Systems That Accelerate Development By Generating Code And Automating Repetitive Programming Tasks.' }
    ] 
  },
  { 
    name: 'Healthcare', 
    desc: 'Revolutionizing patient care with secure AI diagnostics and data-driven healthcare management solutions.', 
    solutions: [
      { title: 'Smart Patient Diagnostics', content: 'Advanced AI models for early disease detection and personalized treatment planning.' },
      { title: 'Secure Data Management', content: 'HIPAA-compliant blockchain and AI solutions for managing sensitive patient records.' }
    ] 
  },
  { name: 'Finance', desc: 'Accelerating financial workflows with real-time fraud detection and algorithmic trading experts.', solutions: [] },
  { name: 'Retail', desc: 'Transforming consumer experiences with personalized AI recommendations and supply chain automation.', solutions: [] },
  { name: 'Manufacturing', desc: 'Enabling Industry 4.0 with predictive maintenance and smart factory AI integrations.', solutions: [] },
  { name: 'Education', desc: 'Modernizing learning with adaptive AI platforms and automated administrative workflows.', solutions: [] }
];

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState('IT');
  const currentInd = industries.find(i => i.name === activeIndustry);

  return (
    <section className="py-12 sm:py-24 bg-white text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Heading */}
        <h2 className="font-serif font-bold text-[32px] sm:text-[48px] text-gray-900 mb-6 sm:mb-4 leading-tight">
          Industries We Serve
        </h2>
        
        {/* Main Subtitle */}
        <p className="font-sans font-normal text-sm sm:text-[18px] leading-relaxed sm:leading-[24px] text-gray-500 max-w-3xl mx-auto mb-10 sm:mb-20 px-4">
          Our AI Talent Is Transforming Businesses Across Diverse Sectors, Delivering Tailored Solutions For Industry-Specific Challenges.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-[40px] items-center lg:items-start justify-center text-left">
          {/* Side Nav (Horizontal scroll on mobile, Vertical list on desktop) */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-[15px] w-full lg:max-w-[380px] overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide no-scrollbar">
            {industries.map((ind, idx) => (
              <div 
                key={ind.name} 
                className={`flex items-center gap-[12px] sm:gap-[20px] px-5 lg:px-8 py-3 lg:py-0 rounded-[15px] cursor-pointer transition-all duration-300 border-2 shrink-0 h-[60px] lg:h-[82px] shadow-sm ${
                  activeIndustry === ind.name 
                    ? 'bg-white border-[#ff7301] shadow-[0_10px_30px_rgba(255,115,1,0.1)]' 
                    : 'bg-[#f8f8f8] border-transparent hover:bg-white hover:border-gray-200'
                }`}
                onClick={() => setActiveIndustry(ind.name)}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[14px] shrink-0 transition-all ${
                  activeIndustry === ind.name ? 'bg-[#ff7301] text-white shadow-lg shadow-orange-500/30' : 'bg-white text-gray-400'
                }`}>0{idx + 1}</div>
                <div className="flex items-center whitespace-nowrap">
                  <span className={`font-serif font-normal text-[16px] lg:text-[20px] transition-colors ${
                    activeIndustry === ind.name ? 'text-gray-900' : 'text-gray-500'
                  }`}>{ind.name}</span>
                  {activeIndustry === ind.name && <span className="hidden lg:inline text-[#ff7301] text-xs ml-2">▶</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Content Column (Large box) */}
          <div className="w-full lg:max-w-[860px] h-auto lg:min-h-[646px] bg-white p-4 sm:p-6 lg:p-10 rounded-[25px] border border-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.04)] flex flex-col justify-between overflow-hidden">
            <div>
              {/* Category Header Card with Image Banner */}
              <div className="relative rounded-[20px] overflow-hidden w-full lg:max-w-[799px] h-[300px] sm:h-[150px] mb-8 group shadow-md mx-auto">
                <img src="/Assests/image-banner.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Industry Header" />
                <div className="absolute inset-0 bg-black/60 sm:bg-linear-to-r sm:from-black/70 sm:via-black/30 sm:to-transparent p-8 flex flex-col justify-center sm:justify-center">
                  <div className="flex items-center gap-3 mb-4 sm:mb-3">
                    <span className="bg-[#ffb44a] text-black px-3 py-1 rounded-md font-bold text-xs">{(industries.indexOf(currentInd) + 1).toString()}</span>
                    <span className="text-white font-serif font-bold text-2xl uppercase tracking-wider">{currentInd.name}</span>
                  </div>
                  <p className="text-white text-sm sm:text-[16px] leading-relaxed max-w-lg font-sans font-medium opacity-90">
                    {currentInd.desc}
                  </p>
                </div>
              </div>

              {/* Solutions List */}
              <div className="px-1 lg:px-4">
                <h3 className="font-serif font-bold text-xl lg:text-[20px] text-gray-900 mb-8 leading-tight text-center lg:text-left">
                  AI-Powered Solutions For {currentInd.name}
                </h3>
                
                <div className="space-y-6 sm:space-y-4">
                  {(currentInd.solutions.length > 0 ? currentInd.solutions : industries[0].solutions).slice(0, 2).map((sol, idx) => (
                    /* Solution Box */
                    <div key={idx} className="w-full lg:max-w-[799px] h-auto lg:min-h-[133px] mx-auto bg-[#f5f5f5] p-6 lg:p-5 rounded-2xl border border-gray-100/50 flex flex-col justify-center gap-4 group transition-all">
                      <div className="space-y-2">
                        <h4 className="font-serif font-bold text-gray-900 text-lg lg:text-[16px] leading-tight text-center sm:text-left">{sol.title}</h4>
                        <p className="font-['Segoe_UI',sans-serif] font-normal text-gray-600 text-sm lg:text-[14px] leading-relaxed text-center sm:text-left">
                          {sol.content}
                        </p>
                      </div>
                      
                      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mt-2 sm:mt-1">
                         {[1, 2, 3].map(i => (
                           <div key={i} className="bg-white px-3 py-1 lg:py-2 rounded-full text-[12px] sm:text-[14px] sm:leading-[21px] font-['Segoe_UI',sans-serif] font-normal text-gray-700 shadow-sm border border-gray-50 flex items-center gap-2 whitespace-nowrap">
                             <span className="w-2 h-2 rounded-full bg-[#ff7301] shadow-[0_0_8px_rgba(255,115,1,0.4)]"></span>
                             40% Faster Development
                           </div>
                         ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-1 lg:px-4 pb-2 mt-10 lg:mt-8">
              <button className="w-full bg-[#f7941d] text-white py-4 sm:py-5 rounded-xl font-sans font-bold text-base sm:text-[18px] shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center justify-center gap-4">
                Explore {currentInd.name} Solutions <span className="text-[10px]">▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
