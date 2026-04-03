import React from 'react';

const WhatMakesUsDifferent = () => {
  const items = [
    '10 Years In Industry',
    'Instant Response',
    'Quality Assurance',
    'Global Presence',
    'Dedicated Developers',
    'Client Priorities',
    'Happiest Clients',
    'Code Delivery Between Us',
    'Services Satisfactory',
  ];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1340px] px-6 sm:px-8 md:px-14 lg:px-16">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:gap-10 lg:mb-16 lg:flex-row lg:gap-12">
          <h2 className="text-[34px] font-bold leading-tight text-gray-900 sm:text-[42px] md:text-5xl lg:w-1/3">
            What Makes
            <br />
            Us Different
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base lg:w-2/3">
            Contact Skilled Developer From Virasat Answers For Getting Result-Oriented
            Solutions. Our Guaranteed Engineers Execute All Domains With A 100%
            Achievement Rate. We Generally Outperform Desires For Customers And
            Demonstrate That Redistributing Of Advancement And Support Industries To
            Virasat Services Is The Most Dependable And Moderate Choice. We Understand
            What Is Customer Satisfaction.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[30px] bg-[#ff9b44] shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-6 text-center transition-all duration-300 hover:bg-white/10 sm:p-8 lg:p-10
                  ${index % 3 !== 2 ? 'lg:border-r lg:border-white/20' : ''}
                  ${index < 6 ? 'lg:border-b lg:border-white/20' : ''}
                  ${index % 2 !== 1 ? 'border-b sm:border-r sm:border-white/20 lg:border-r-0' : 'border-b lg:border-b-0'}`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg sm:mb-6 sm:h-14 sm:w-14">
                  <img
                    src="/services/icon.png"
                    alt="CloudFire Icon"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h3 className="text-base font-bold text-white sm:text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
