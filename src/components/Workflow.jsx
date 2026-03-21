import React, { useState } from 'react';

const workflowSteps = [
  { id: 1, title: 'Initial Consultation', content: 'We Start By Understanding Your Specific Talent Needs, Project Goals, And Technical Requirements.' },
  { id: 2, title: 'AI-Powered Matching', content: 'Using advanced AI algorithms, we match your requirements with the top 1% of talent in our global network.' },
  { id: 3, title: 'Candidate Validation', content: 'Our technical experts conduct deep-dive interviews and project simulations to validate technical and culture fit.' },
  { id: 4, title: 'Client Interviews', content: 'You meet the shortlisted candidates to ensure they are the perfect fit for your specific team dynamics.' },
  { id: 5, title: 'Seamless Onboarding', content: 'We manage the entire legal and administrative onboarding process so you can start building immediately.' },
  { id: 6, title: 'Continuous Support', content: 'We provide ongoing support and performance monitoring to ensure long-term success of the hired talent.' }
];

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentStep = workflowSteps.find(s => s.id === activeStep);

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Heading */}
        <h2 className="font-serif font-bold text-[48px] text-gray-900 mb-4 leading-tight">
          How It Works
        </h2>
        
        {/* Main Subtitle */}
        <p className="font-sans font-normal text-[18px] leading-[24px] text-gray-500 max-w-3xl mx-auto mb-20 px-4">
          Our Streamlined Process Connects You With Elite AI Talent Quickly And Efficiently, Ensuring A Perfect Match For Your Innovation Needs.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-[40px] items-center lg:items-start justify-center">
          {/* Side Nav (Tabs) */}
          <div className="flex flex-col gap-[15px] w-full max-w-[380px]">
            {workflowSteps.map(step => (
              <div 
                key={step.id} 
                className={`flex items-center gap-[20px] px-6 sm:px-8 py-4 sm:py-0 rounded-[15px] cursor-pointer transition-all duration-300 border-2 text-left w-full sm:w-[380px] h-auto sm:h-[82px] shadow-sm ${
                  activeStep === step.id 
                    ? 'bg-white border-primary shadow-[0_10px_30px_rgba(255,115,1,0.1)]' 
                    : 'bg-[#f8f8f8] border-transparent hover:bg-white hover:border-gray-200'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[14px] shrink-0 transition-all ${
                  activeStep === step.id ? 'bg-[#ff7301] text-white shadow-lg shadow-orange-500/30' : 'bg-white text-gray-400'
                }`}>{step.id}</div>
                <div className="flex-1 flex items-center justify-between">
                  <span className={`font-serif font-normal text-[18px] sm:text-[20px] leading-tight sm:leading-[12px] transition-colors ${
                    activeStep === step.id ? 'text-gray-900' : 'text-gray-500'
                  }`}>{step.title}</span>
                  {activeStep === step.id && <span className="text-[#ff7301] text-xs ml-2">▶</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Content Column (Large box) */}
          <div className="w-full max-w-[860px] h-auto lg:min-h-[532px] bg-white p-6 sm:p-12 rounded-[25px] border border-gray-100 shadow-[0_15px_60px_rgba(0,0,0,0.04)] text-left flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-6 sm:gap-8 mb-8 sm:mb-10">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#ff7301] text-white rounded-[16px] sm:rounded-[18px] flex items-center justify-center font-bold text-[28px] sm:text-[32px] shadow-xl shadow-orange-500/20 shrink-0">
                  {activeStep}
                </div>
                <div className="pt-1">
                  {/* Step Label */}
                  <span className="font-['Segoe_UI',sans-serif] font-semibold text-[14px] sm:text-[15px] leading-[26px] text-[#ff7301] uppercase tracking-[0.1em] block mb-1">Step {activeStep}</span>
                  {/* Content Title */}
                  <h3 className="font-serif font-bold text-[20px] sm:text-[24px] text-gray-900 leading-tight">{currentStep.title}</h3>
                </div>
              </div>
              
              {/* Content body */}
              <p className="font-['Segoe_UI',sans-serif] font-normal text-[16px] sm:text-[18px] text-gray-600 leading-relaxed sm:leading-[26px] mb-8 sm:mb-12">
                {currentStep.content}
              </p>

              {/* Sub-boxes */}
              <div className="flex gap-[20px] flex-wrap justify-center sm:justify-start">
                {[1, 2, 3].map(i => (
                  <div 
                    key={i} 
                    className="relative w-full sm:w-[217px] h-auto sm:h-[96px] py-4 sm:py-0 bg-[#f9f9f9] rounded-[12px] flex items-center justify-center text-center shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden group hover:shadow-xl transition-all"
                  >
                    {/* The prominent orange left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#f7941d]"></div>
                    
                    <div className="font-['Segoe_UI',sans-serif] font-medium text-[16px] sm:text-[18px] leading-tight sm:leading-[22px] text-gray-900 px-6 sm:px-4">
                      In-Depth Discovery <br className="hidden sm:block" /> Session
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 pt-10 border-t border-gray-50">
              <button 
                className="w-[125px] h-[40px] rounded-xl font-['Segoe_UI',sans-serif] font-semibold text-[14px] bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center" 
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
              >
                Previous Step
              </button>
              <button 
                className="w-[125px] h-[40px] rounded-xl font-['Segoe_UI',sans-serif] font-semibold text-[14px] bg-primary text-white shadow-lg shadow-orange-500/10 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-30 disabled:pointer-events-none" 
                onClick={() => setActiveStep(Math.min(workflowSteps.length, activeStep + 1))}
                disabled={activeStep === workflowSteps.length}
              >
                Next Step <span className="text-[10px]">▶</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
