import React from 'react';

const Interview = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1270px] mx-auto px-6">
        {/* Main Heading */}
        <h2 className="font-serif text-[48px] md:text-[64px] font-bold text-gray-900 mb-4 leading-tight">
          Experience The Future Of Interviews
        </h2>
        
        {/* Main Subtitle */}
        <p className="font-sans text-[18px] leading-[24px] text-gray-500 max-w-3xl mx-auto mb-20 opacity-80">
          Our AI-Powered Interview System Provides In-Depth Candidate Evaluation With Real-Time Analysis, Helping You Make Better Hiring Decisions Faster.
        </p>
        
        {/* The Main "2-Box" Container Card */}
        <div className="bg-white rounded-[40px] p-[31px] shadow-[0_30px_100px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-0 w-full max-w-[1280px] h-auto lg:h-[709px] mx-auto overflow-hidden">
          
          {/* Left Column (Orange Box) */}
          <div className="w-full lg:w-[566px] h-auto lg:h-[647px] bg-[#f7941d] rounded-[30px] p-8 lg:p-14 text-left text-white flex flex-col justify-center shrink-0">
            <h3 className="font-serif text-[32px] font-bold mb-12 leading-tight">
              Book Your Free AI Interview Today
            </h3>
            
            <div className="space-y-10">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-white p-3 rounded-xl shadow-lg shrink-0">
                    <img src="/Assests/icon.png" className="w-6 h-6 object-contain" alt="Benefit Icon" />
                  </div>
                  <div>
                    <div className="font-sans font-bold text-[18px] leading-tight mb-2 text-white">
                      Lorem Ipsum Is Simply Dummy Text
                    </div>
                    <div className="font-sans font-normal text-[14px] leading-relaxed text-white/90">
                      Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="flex-1 p-8 lg:p-16 text-left bg-white flex flex-col justify-start">
            <h3 className="font-serif text-[32px] font-bold mb-10 text-gray-900 leading-tight">
              Schedule Your Free AI Interview
            </h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block font-sans font-semibold text-[14px] text-gray-600 ml-1">Full Name</label>
                <input type="text" placeholder="Name" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent outline-none transition-all placeholder:text-gray-300" />
              </div>
              
              <div className="space-y-2">
                <label className="block font-sans font-semibold text-[14px] text-gray-600 ml-1">Email Address</label>
                <input type="email" placeholder="email@gmail.com" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent outline-none transition-all placeholder:text-gray-300" />
              </div>
              
              <div className="space-y-2">
                <label className="block font-sans font-semibold text-[14px] text-gray-600 ml-1">Phone Number</label>
                <input type="text" placeholder="+0 123 456 789" className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f7941d] focus:border-transparent outline-none transition-all placeholder:text-gray-300" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-2">
                  <label className="block font-sans font-semibold text-[14px] text-gray-600 ml-1">Job Role</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl outline-none appearance-none cursor-pointer text-gray-400 focus:ring-2 focus:ring-[#f7941d]">
                      <option>Select Job Role</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#f7941d] text-xs">▼</div>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <label className="block font-sans font-semibold text-[14px] text-gray-600 ml-1">Experience Level</label>
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl outline-none appearance-none cursor-pointer text-gray-400 focus:ring-2 focus:ring-[#f7941d]">
                      <option>Select Experience</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#f7941d] text-xs">▼</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <button type="submit" className="w-full bg-[#f7941d] text-white py-5 rounded-xl font-sans font-bold text-[17px] hover:shadow-2xl hover:shadow-[#f7941d]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
                  Schedule My Free AI Interview <span className="text-[10px]">▶</span>
                </button>
                <p className="text-[12px] text-center mt-6 text-gray-400 font-medium">
                  By submitting, you agree to our <span className="text-[#f7941d] font-bold underline cursor-pointer">Privacy Policy</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;
