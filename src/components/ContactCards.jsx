import React from 'react';

const ContactCards = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 text-center max-w-[1200px]">
        <div className="mb-16">
          <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '48px', lineHeight: '1.2' }} className="text-[#141414] mb-4">
            Get In Touch With Us
          </h2>
          <p style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '18px' }} className="text-[#141414]/70 max-w-2xl mx-auto">
            Simple and inviting, encouraging clients to reach out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-24">
          {/* Email Card */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src="/Contact/Icon1.png" alt="Email" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#F6821F] font-bold text-[18px] mb-2 uppercase tracking-wide">
              Email
            </h3>
            <p className="text-[#141414] font-medium text-[16px]">
              sample@123.com
            </p>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src="/Contact/Icon2.png" alt="Call Us" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#F6821F] font-bold text-[18px] mb-2 uppercase tracking-wide">
              Call Us
            </h3>
            <p className="text-[#141414] font-medium text-[16px]">
              (00) 123 456 789
            </p>
          </div>

          {/* Working Hours Card */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center mb-8 bg-white shadow-sm hover:shadow-md transition-shadow">
              <img src="/Contact/Icon3.png" alt="Working Hours" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="text-[#F6821F] font-bold text-[18px] mb-2 uppercase tracking-wide">
              <span className="text-[#F6821F]">Mon - Sat</span> <span className="text-[#141414] font-normal text-[16px] normal-case">9.00 - 18.00</span>
            </h3>
            <p className="text-[#141414] font-medium text-[16px]">
              Sunday Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
