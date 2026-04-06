import React from 'react';

const ContactFormSection = () => {
  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative dots background */}
      <div className="absolute top-20 left-10 w-32 h-32 opacity-10 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 right-10 w-32 h-32 opacity-10 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '48px', lineHeight: '1.2' }} className="text-[#141414] max-w-[800px] mx-auto">
            Ready To Start New Project? <br /> Send Us An Enquiry
          </h2>
        </div>

        <div 
          className="mx-auto rounded-[12px] p-10 md:p-16 lg:p-20 shadow-2xl flex flex-col items-center"
          style={{ 
            background: 'linear-gradient(180deg, #FBB040 0%, #F6821F 100%)',
            maxWidth: '708px',
            minHeight: '953px'
          }}
        >
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="w-full space-y-8 flex flex-col items-center"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="f5e9b95b-ceb0-42ce-a6ce-b9511c7f96e6" />
            <input type="hidden" name="subject" value="New Project Enquiry" />
            <input type="hidden" name="from_name" value="Cloudfire Website" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div className="w-full space-y-2">
              <label htmlFor="name" style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '16px' }} className="text-[#141414] block">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                placeholder="Name" 
                autoComplete='name'
                className="w-full bg-[#fbb040]/30 border border-[#fbb040]/50 rounded-[8px] px-4 py-3 text-[#141414] placeholder-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414]/30 transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="email" style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '16px' }} className="text-[#141414] block">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                placeholder="email@gmail.com" 
                autoComplete='email'
                className="w-full bg-[#fbb040]/30 border border-[#fbb040]/50 rounded-[8px] px-4 py-3 text-[#141414] placeholder-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414]/30 transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="phone" style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '16px' }} className="text-[#141414] block">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required
                placeholder="+0 123 456 789" 
                autoComplete='tel'
                className="w-full bg-[#fbb040]/30 border border-[#fbb040]/50 rounded-[8px] px-4 py-3 text-[#141414] placeholder-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414]/30 transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="service" style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '16px' }} className="text-[#141414] block">General Queries</label>
              <input 
                type="text" 
                id="service" 
                name="service" 
                required
                placeholder="Lorem Ipsum" 
                className="w-full bg-[#fbb040]/30 border border-[#fbb040]/50 rounded-[8px] px-4 py-3 text-[#141414] placeholder-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414]/30 transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="message" style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '16px' }} className="text-[#141414] block">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                required
                placeholder="Lorem Ipsum" 
                className="w-full bg-[#fbb040]/30 border border-[#fbb040]/50 rounded-[8px] px-4 py-3 text-[#141414] placeholder-[#141414]/40 focus:outline-none focus:ring-1 focus:ring-[#141414]/30 transition-all resize-none"
              ></textarea>
            </div>

          

            <div className="w-full flex justify-center pt-2">
              <button 
                type="submit" 
                className="bg-black text-white font-semibold rounded-full flex items-center justify-center gap-4 hover:opacity-90 transition-all"
                style={{ 
                  width: '564px',
                  height: '40px',
                  maxWidth: '100%'
                }}
              >
                <span className="text-[16px]">Submit Now</span>
                <span className="text-[14px]">▶</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
