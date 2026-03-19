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
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Heading: Georgia, 700, 48px */}
        <h2 className="font-[Georgia,serif] font-bold text-[48px] text-gray-900 mb-4 leading-tight">
          Industries We Serve
        </h2>
        
        {/* Main Subtitle: Segoe UI, 400, 18px, LH 24px */}
        <p className="font-['Segoe_UI',sans-serif] font-normal text-[18px] leading-[24px] text-gray-500 max-w-3xl mx-auto mb-20 px-4">
          Our AI Talent Is Transforming Businesses Across Diverse Sectors, Delivering Tailored Solutions For Industry-Specific Challenges.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center text-left">
          {/* Side Nav (Tabs) - Matching Workflow style */}
          <div className="flex flex-col gap-4 w-full max-w-[340px]">
            {industries.map((ind, idx) => (
              <div 
                key={ind.name} 
                className={`flex items-center gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 group ${
                  activeIndustry === ind.name 
                    ? 'bg-white border-primary shadow-[0_15px_40px_rgba(255,115,1,0.15)] translate-x-3' 
                    : 'bg-[#f5f5f5] border-transparent hover:bg-white hover:border-gray-200'
                }`}
                onClick={() => setActiveIndustry(ind.name)}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg transition-all ${
                  activeIndustry === ind.name ? 'bg-[#fbb03b] text-white' : 'bg-white text-gray-400 group-hover:text-primary'
                }`}>{idx + 1}</div>
                <div className="flex-1 flex items-center justify-between">
                  <span className={`text-[17px] font-semibold transition-colors ${
                    activeIndustry === ind.name ? 'text-gray-900' : 'text-gray-500'
                  }`}>{ind.name}</span>
                  {activeIndustry === ind.name && <span className="text-primary text-xs">▶</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Content Column (Large box) */}
          <div className="flex-1 bg-white p-14 rounded-[30px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] flex flex-col min-h-[700px]">
            {/* Category Header Card with Image Banner */}
            <div className="relative rounded-[24px] overflow-hidden h-[300px] mb-12 group shadow-xl">
              <img src="/Assests/image-banner.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Industry Header" />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#fbb03b] text-white px-5 py-2 rounded-xl font-bold text-[14px] uppercase tracking-widest shadow-lg">
                    {industries.indexOf(currentInd) + 1} &nbsp; {currentInd.name}
                  </span>
                </div>
                <p className="text-white text-[18px] leading-[1.6] max-w-xl font-['Segoe_UI',sans-serif] font-medium opacity-90">
                  {currentInd.desc}
                </p>
              </div>
            </div>

            {/* Solutions List */}
            <div className="flex-1">
              <h3 className="font-[Georgia,serif] font-bold text-[28px] text-gray-900 mb-10 leading-tight">
                AI-Powered Solutions For {currentInd.name}
              </h3>
              
              <div className="space-y-8">
                {(currentInd.solutions.length > 0 ? currentInd.solutions : industries[0].solutions).map((sol, idx) => (
                  <div key={idx} className="bg-[#fcf8f4] p-8 rounded-2xl border border-gray-100/50 group hover:border-primary/30 transition-all hover:bg-white hover:shadow-xl">
                    <h4 className="font-['Segoe_UI',sans-serif] font-bold text-gray-900 text-[18px] mb-3">{sol.title}</h4>
                    <p className="font-['Segoe_UI',sans-serif] font-normal text-gray-600 text-[14px] leading-relaxed mb-6 italic opacity-80">
                      {sol.content}
                    </p>
                    <div className="flex flex-wrap gap-4">
                       {[1, 2, 3].map(i => (
                         <span key={i} className="bg-white px-5 py-2.5 rounded-full text-[12px] font-semibold text-gray-700 shadow-sm border border-gray-100 flex items-center gap-3">
                           <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,115,1,0.5)]"></span>
                           40% Faster Development
                         </span>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button className="mt-12 w-full bg-primary text-white py-5 rounded-2xl font-['Segoe_UI',sans-serif] font-bold text-[18px] shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center justify-center gap-4">
              Explore {currentInd.name} Solutions <span className="text-[10px]">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
