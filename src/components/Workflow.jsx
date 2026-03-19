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
    <section className="py-20 text-center bg-gray-50/50 -mx-6 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">How It Works</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-16">Our Streamlined Process Connects You With Elite AI Talent Quickly And Efficiently.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start text-left">
        {/* Step IDs / Tabs Column */}
        <div className="space-y-3">
          {workflowSteps.map(step => (
            <div 
              key={step.id} 
              className={`flex items-center gap-5 p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeStep === step.id 
                  ? 'bg-white shadow-xl border-l-4 border-[#ff7301]' 
                  : 'bg-gray-100 border-l-4 border-transparent hover:bg-gray-200'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white ${
                activeStep === step.id ? 'bg-[#ff7301]' : 'bg-gray-400'
              }`}>{step.id}</div>
              <span className="font-bold text-gray-800">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Detail Column */}
        <div className="lg:col-span-2 bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-6 mb-10">
              <div className="w-16 h-16 bg-[#fbb03b] text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg border-4 border-white">
                {activeStep}
              </div>
              <div>
                <span className="text-xs font-black text-[#ff7301] uppercase tracking-widest block mb-1">Step {activeStep}</span>
                <h3 className="text-3xl font-extrabold text-gray-900">{currentStep.title}</h3>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
              {currentStep.content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#ff7301] hover:bg-white hover:shadow-lg transition-all border-y border-r border-gray-100">
                  <div className="font-extrabold text-[#111] text-sm leading-tight">In-Depth Discovery Session</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex items-center justify-between gap-6 pt-10 border-t border-gray-100">
            <button 
              className="px-8 py-3 rounded-xl font-bold bg-white text-gray-500 border border-gray-200 hover:border-gray-400 hover:text-gray-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" 
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
            >
              Previous Step
            </button>
            <button 
              className="px-8 py-4 rounded-xl font-bold bg-[#ff7301] text-white shadow-xl shadow-orange-500/20 hover:opacity-95 transition-all flex items-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed" 
              onClick={() => setActiveStep(Math.min(workflowSteps.length, activeStep + 1))}
              disabled={activeStep === workflowSteps.length}
            >
              Next Step <span className="text-sm">▶</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
