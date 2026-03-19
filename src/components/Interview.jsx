import React from 'react';

const Interview = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Experience The Future Of Interviews</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-16">Our AI-Powered Interview System Provides In-Depth Candidate Evaluation With Real-Time Analysis.</p>
      
      <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 max-w-6xl mx-auto">
        {/* Info Column */}
        <div className="lg:w-[420px] bg-[#fbb03b] p-12 text-left text-gray-900">
          <h3 className="text-3xl font-extrabold mb-10 leading-tight">Book Your Free AI Interview Today</h3>
          <div className="space-y-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex gap-5 items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                   <span className="text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight mb-1">Lorem Ipsum Is Simply Dummy Text</div>
                  <div className="text-sm opacity-80 leading-relaxed font-medium">Standard dummy text of the industry since the 1500s.</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Column */}
        <div className="flex-1 p-12 text-left bg-white">
          <h3 className="text-2xl font-bold mb-8 text-gray-900">Schedule Your Free AI Interview</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Full Name</label>
              <input type="text" placeholder="Name" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#ff7301] focus:bg-white outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" placeholder="email@gmail.com" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#ff7301] focus:bg-white outline-none transition-all" />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-700">Phone Number</label>
              <input type="text" placeholder="+0 123 456 789" className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#ff7301] focus:bg-white outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Job Role</label>
              <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#ff7301] focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                <option>Select Job Role</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Experience Level</label>
              <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#ff7301] focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                <option>Select Experience</option>
              </select>
            </div>
            <div className="md:col-span-2 mt-4">
              <button type="submit" className="w-full bg-[#ff7301] text-white py-5 rounded-2xl font-bold text-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-3 shadow-xl shadow-orange-500/20">
                Schedule My Free AI Interview <span className="text-sm">▶</span>
              </button>
              <p className="text-[11px] text-center mt-4 text-gray-400 font-medium tracking-wide leading-relaxed">
                By submitting, you agree to our <span className="text-[#ff7301] underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Interview;
