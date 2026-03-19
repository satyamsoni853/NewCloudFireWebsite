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
        {/* Main Heading: Georgia, 700, 48px */}
        <h2 className="font-[Georgia,serif] font-bold text-[48px] text-gray-900 mb-4 leading-tight">
          How It Works
        </h2>
        
        {/* Main Subtitle: Segoe UI, 400, 18px, LH 24px */}
        <p className="font-['Segoe_UI',sans-serif] font-normal text-[18px] leading-[24px] text-gray-500 max-w-3xl mx-auto mb-20 px-4">
          Our Streamlined Process Connects You With Elite AI Talent Quickly And Efficiently, Ensuring A Perfect Match For Your Innovation Needs.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Side Nav (Tabs) */}
          <div className="flex flex-col gap-4 w-full max-w-[340px]">
            {workflowSteps.map(step => (
              <div 
                key={step.id} 
                className={`flex items-center gap-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 text-left group ${
                  activeStep === step.id 
                    ? 'bg-white border-primary shadow-[0_15px_40px_rgba(255,115,1,0.15)] translate-x-3' 
                    : 'bg-[#f5f5f5] border-transparent hover:bg-white hover:border-gray-200'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg transition-all ${
                  activeStep === step.id ? 'bg-[#fbb03b] text-white' : 'bg-white text-gray-400 group-hover:text-primary'
                }`}>{step.id}</div>
                <div className="flex-1 flex items-center justify-between">
                  <span className={`text-[17px] font-semibold transition-colors ${
                    activeStep === step.id ? 'text-gray-900' : 'text-gray-500'
                  }`}>{step.title}</span>
                  {activeStep === step.id && <span className="text-primary text-xs">▶</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Content Column (Large box) */}
          <div className="flex-1 bg-white p-14 rounded-[30px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-left flex flex-col min-h-[580px]">
            <div>
              <div className="flex items-start gap-8 mb-12">
                <div className="w-20 h-20 bg-[#fbb03b] text-white rounded-[20px] flex items-center justify-center font-bold text-[36px] shadow-2xl shadow-orange-500/30 border-4 border-white shrink-0">
                  {activeStep}
                </div>
                <div className="pt-2">
                  <span className="font-['Segoe_UI',sans-serif] font-semibold text-[14px] text-primary uppercase tracking-[0.2em] block mb-3">Step {activeStep}</span>
                  {/* Step Heading: Georgia, 700, 32px */}
                  <h3 className="font-[Georgia,serif] font-bold text-[36px] text-gray-900 leading-tight">{currentStep.title}</h3>
                </div>
              </div>
              
              <p className="font-['Segoe_UI',sans-serif] font-normal text-[20px] text-gray-600 leading-[1.7] mb-12 max-w-3xl">
                {currentStep.content}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-[#fcf8f4] p-8 rounded-2xl border-l-[6px] border-[#fbb03b] hover:bg-white hover:shadow-xl transition-all border-y border-r border-gray-100/50 group">
                    <div className="font-['Segoe_UI',sans-serif] font-bold text-gray-900 text-[15px] leading-tight group-hover:text-primary transition-colors">In-Depth Discovery Session</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-12 flex items-center justify-between gap-6 border-t border-gray-100/50">
              <button 
                className="px-10 py-4 rounded-2xl font-['Segoe_UI',sans-serif] font-bold text-[14px] bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all disabled:opacity-30 disabled:pointer-events-none active:scale-95" 
                onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                disabled={activeStep === 1}
              >
                Previous Step
              </button>
              <button 
                className="px-10 py-5 rounded-2xl font-['Segoe_UI',sans-serif] font-bold text-[14px] bg-primary text-white shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all flex items-center gap-4 disabled:opacity-30 disabled:pointer-events-none active:scale-95 active:translate-y-0" 
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
