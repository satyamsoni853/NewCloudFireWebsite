import React, { useState } from 'react';

const industries = [
  { 
    name: 'IT', 
    desc: 'Empowering Tech Companies With Cutting-Edge AI Talent For Software Development And System Optimization.', 
    solutions: [
      { title: 'Automated Code Generation', content: 'AI-Powered Systems That Accelerate Development By Generating Code And Automating Repetitive Programming Tasks.' },
      { title: 'Predictive Analytics', content: 'Leverage AI to forecast trends and optimize resource allocation for high-performance computing.' }
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
    <section className="py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Industries We Serve</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-16">Our AI Talent Is Transforming Businesses Across Diverse Sectors, Delivering Tailored Solutions For Industry-Specific Challenges.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Tabs on the Left */}
        <div className="flex flex-col gap-4">
          {industries.map((ind, idx) => (
            <div 
              key={ind.name} 
              className={`flex items-center justify-between px-6 py-5 rounded-xl cursor-pointer transition-all duration-300 ${
                activeIndustry === ind.name 
                  ? 'bg-white shadow-xl border-l-4 border-[#ff7301]' 
                  : 'bg-gray-100 border-l-4 border-transparent hover:bg-gray-200'
              }`}
              onClick={() => setActiveIndustry(ind.name)}
            >
              <div className="flex items-center gap-4 text-left">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white ${
                  activeIndustry === ind.name ? 'bg-[#ff7301]' : 'bg-gray-400'
                }`}>{idx + 1}</div>
                <span className="text-base font-semibold">{ind.name}</span>
              </div>
              {activeIndustry === ind.name && <span className="text-[#ff7301]">▶</span>}
            </div>
          ))}
        </div>

        {/* Content on the Right */}
        <div className="md:col-span-2 space-y-8 text-left">
          <div className="bg-white rounded-[2rem] p-4 md:p-8 shadow-2xl border border-gray-50">
            {/* Category Header Card */}
            <div className="relative rounded-3xl overflow-hidden h-48 md:h-64 mb-10 group">
              <img src="/Assests/image-banner.png" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Category" />
              <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-[#ff7301] text-white px-4 py-1.5 rounded-lg font-bold text-sm tracking-wide">
                    {industries.indexOf(currentInd) + 1} {currentInd.name}
                  </span>
                </div>
                <p className="text-white text-base md:text-lg leading-relaxed max-w-xl">{currentInd.desc}</p>
              </div>
            </div>

            {/* Solutions List */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 border-l-4 border-[#ff7301] pl-4">AI-Powered Solutions For {currentInd.name}</h3>
              <div className="space-y-6">
                {(currentInd.solutions.length > 0 ? currentInd.solutions : industries[0].solutions).map((sol, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 group hover:border-[#ff7301]/30 transition-colors">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{sol.title}</h4>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">{sol.content}</p>
                    <div className="flex flex-wrap gap-4">
                       {[1, 2, 3].map(i => (
                         <span key={i} className="bg-white px-4 py-2 rounded-full text-[11px] font-bold shadow-sm border border-gray-100 flex items-center gap-2 group-hover:border-[#ff7301]/20">
                           <span className="w-2 h-2 rounded-full bg-[#ff7301]"></span>
                           40% Faster Development
                         </span>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-[#ff7301] text-white py-5 rounded-2xl font-bold text-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-3">
              Explore {currentInd.name} Solutions <span className="text-sm">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
