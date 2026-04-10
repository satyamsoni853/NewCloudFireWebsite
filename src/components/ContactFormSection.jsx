import React from 'react';
import DotGrid from './DotGrid';

const ContactFormSection = () => {
  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative dots background */}
      <DotGrid className="absolute top-20 left-10 opacity-30 pointer-events-none hidden lg:grid" />
      <DotGrid className="absolute bottom-20 right-10 opacity-30 pointer-events-none hidden lg:grid" />

      <div className="mx-auto px-6 max-w-[1440px]">
        <div className="text-center mb-16">
          <h2 
            className="text-[#141414] max-w-[900px] mx-auto text-[32px] md:text-[48px] font-bold font-serif leading-tight"
          >
            Ready To Start New Project? <br /> Send Us An Enquiry
          </h2>
        </div>

        <div 
          className="mx-auto bg-white rounded-[15px] p-8 md:p-12 lg:p-16 shadow-[0_10px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center"
          style={{ 
            maxWidth: '750px',
          }}
        >
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="w-full space-y-6"
          >
            {/* Web3Forms Access Key */}
            <input type="hidden" name="access_key" value="f5e9b95b-ceb0-42ce-a6ce-b9511c7f96e6" />
            <input type="hidden" name="subject" value="New Project Enquiry" />
            <input type="hidden" name="from_name" value="Cloudfire Website" />
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div className="w-full space-y-2">
              <label htmlFor="name" className="text-[#333] block font-['Segoe_UI',sans-serif] text-[15px]">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                placeholder="Name" 
                autoComplete='name'
                className="w-full bg-white border border-gray-200 rounded-[8px] px-4 py-3 text-[#141414] placeholder-gray-300 focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="email" className="text-[#333] block font-['Segoe_UI',sans-serif] text-[15px]">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                placeholder="email@gmail.com" 
                autoComplete='email'
                className="w-full bg-white border border-gray-200 rounded-[8px] px-4 py-3 text-[#141414] placeholder-gray-300 focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="phone" className="text-[#333] block font-['Segoe_UI',sans-serif] text-[15px]">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                required
                placeholder="+0 123 456 789" 
                autoComplete='tel'
                className="w-full bg-white border border-gray-200 rounded-[8px] px-4 py-3 text-[#141414] placeholder-gray-300 focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="service" className="text-[#333] block font-['Segoe_UI',sans-serif] text-[15px]">General Queries</label>
              <input 
                type="text" 
                id="service" 
                name="service" 
                required
                placeholder="Lorem Ipsum" 
                className="w-full bg-white border border-gray-200 rounded-[8px] px-4 py-3 text-[#141414] placeholder-gray-300 focus:outline-none focus:border-primary transition-all"
              />
            </div>

            <div className="w-full space-y-2">
              <label htmlFor="message" className="text-[#333] block font-['Segoe_UI',sans-serif] text-[15px]">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6" 
                required
                placeholder="Lorem Ipsum" 
                className="w-full bg-white border border-gray-200 rounded-[8px] px-4 py-4 text-[#141414] placeholder-gray-300 focus:outline-none focus:border-primary transition-all resize-none"
              ></textarea>
            </div>

            <div className="w-full flex flex-col items-center gap-8 pt-6">
              {/* reCAPTCHA placeholder like in screenshot */}
              <div className="border border-gray-200 bg-gray-50 px-4 py-2 flex items-center gap-4 rounded-md shadow-sm">
                <input type="checkbox" className="w-6 h-6" />
                <span className="text-[14px] text-gray-600">I'm not a robot</span>
                <div className="flex flex-col items-center">
                  <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-70" />
                  <span className="text-[10px] text-gray-400">reCAPTCHA</span>
                </div>
              </div>

              <button 
                type="submit" 
                className="bg-[#111] text-white font-semibold rounded-[8px] flex items-center justify-center gap-4 hover:bg-black transition-all w-full md:w-[600px] h-[56px] shadow-lg"
              >
                <span className="text-[16px]">Submit Now</span>
                <span className="text-[12px]">▶</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
