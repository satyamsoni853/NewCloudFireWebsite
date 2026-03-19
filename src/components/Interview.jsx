import React from 'react';

const Interview = () => {
  return (
    <section className="py-24 bg-white text-center">
      {/* Main Heading: Georgia, 700, 48px */}
      <h2 className="font-[Georgia,serif] font-bold text-[48px] text-gray-900 mb-4 leading-tight">
        Experience The Future Of Interviews
      </h2>
      
      {/* Main Subtitle: Segoe UI, 400, 18px, LH 24px */}
      <p className="font-['Segoe_UI',sans-serif] font-normal text-[18px] leading-[24px] text-gray-500 max-w-3xl mx-auto mb-20 px-4">
        Our AI-Powered Interview System Provides In-Depth Candidate Evaluation With Real-Time Analysis, Helping You Make Better Hiring Decisions Faster.
      </p>
      
      <div className="flex flex-col lg:flex-row bg-white rounded-custom overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-gray-100 max-w-[1270px] mx-auto min-h-[700px]">
        {/* Info Column (Orange) */}
        <div className="lg:w-[480px] bg-[#fbb03b] p-16 text-left text-gray-900 flex flex-col justify-start">
          {/* Card Title: Georgia, 700, 28px */}
          <h3 className="font-[Georgia,serif] font-bold text-[32px] mb-12 leading-tight">
            Book Your Free AI Interview Today
          </h3>
          
          <div className="space-y-10">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="bg-white p-3 rounded-2xl shadow-xl shadow-orange-900/10 shrink-0 group-hover:scale-110 transition-transform">
                   <img src="/Assests/icon.png" className="w-8 h-8 object-contain" alt="Benefit Icon" />
                </div>
                <div>
                  {/* List Item Title: Georgia, 700, 18px */}
                  <div className="font-[Georgia,serif] font-bold text-[18px] leading-tight mb-2">
                    Lorem Ipsum Is Simply Dummy Text
                  </div>
                  {/* List Item Desc: Segoe UI, 400, 14px */}
                  <div className="font-['Segoe_UI',sans-serif] font-normal text-[14px] leading-relaxed text-gray-800/80">
                    Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Column (White) */}
        <div className="flex-1 p-16 text-left bg-white flex flex-col justify-start">
          {/* Form Title: Georgia, 700, 28px */}
          <h3 className="font-[Georgia,serif] font-bold text-[32px] mb-12 text-gray-900 leading-tight">
            Schedule Your Free AI Interview
          </h3>
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="md:col-span-2 space-y-3">
              {/* Labels: Segoe UI, 600, 14px */}
              <label className="font-['Segoe_UI',sans-serif] font-semibold text-[14px] text-gray-600 ml-1">Full Name</label>
              <input type="text" placeholder="Name" className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent outline-none transition-all font-['Segoe_UI',sans-serif] text-[15px]" />
            </div>
            
            <div className="md:col-span-2 space-y-3">
              <label className="font-['Segoe_UI',sans-serif] font-semibold text-[14px] text-gray-600 ml-1">Email Address</label>
              <input type="email" placeholder="email@gmail.com" className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent outline-none transition-all font-['Segoe_UI',sans-serif] text-[15px]" />
            </div>
            
            <div className="md:col-span-2 space-y-3">
              <label className="font-['Segoe_UI',sans-serif] font-semibold text-[14px] text-gray-600 ml-1">Phone Number</label>
              <input type="text" placeholder="+0 123 456 789" className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent outline-none transition-all font-['Segoe_UI',sans-serif] text-[15px]" />
            </div>
            
            <div className="space-y-3">
              <label className="font-['Segoe_UI',sans-serif] font-semibold text-[14px] text-gray-600 ml-1">Job Role</label>
              <div className="relative">
                <select className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent outline-none transition-all appearance-none cursor-pointer font-['Segoe_UI',sans-serif] text-[15px]">
                  <option>Select Job Role</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary text-xs">▼</div>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="font-['Segoe_UI',sans-serif] font-semibold text-[14px] text-gray-600 ml-1">Experience Level</label>
              <div className="relative">
                <select className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent outline-none transition-all appearance-none cursor-pointer font-['Segoe_UI',sans-serif] text-[15px]">
                  <option>Select Experience</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-primary text-xs">▼</div>
              </div>
            </div>
            
            <div className="md:col-span-2 mt-8">
              {/* Button: Segoe UI, 600, 16px-ish */}
              <button type="submit" className="w-full bg-primary text-white py-5 rounded-2xl font-['Segoe_UI',sans-serif] font-bold text-[18px] hover:shadow-2xl hover:shadow-orange-500/40 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl shadow-orange-500/20">
                Schedule My Free AI Interview <span className="text-sm">▶</span>
              </button>
              <p className="text-[12px] text-center mt-6 text-gray-400 font-medium font-['Segoe_UI',sans-serif] tracking-normal leading-relaxed">
                By submitting, you agree to our <span className="text-primary font-bold underline cursor-pointer hover:text-orange-600">Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Interview;
