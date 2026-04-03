import React from 'react';

const ServiceFeatures = () => {
  const features = [
    {
      text: "Years Of Experience In Several Services",
      icon: "/services/icon.png"
    },
    {
      text: "Talented & Expertise Of Developers Of IT Service Solutions",
      icon: "/services/icon.png"
    },
    {
      text: "End To End Different IT Solutions Delivered To The Clients",
      icon: "/services/icon.png"
    },
    {
      text: "Dedicated Services Oriented Developers With Full Enthusiasm",
      icon: "/services/icon.png"
    }
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1340px] px-6 sm:px-8 md:px-14 lg:px-16">
        <div className="max-w-[1120px]">
          <h2 className="max-w-[760px] font-serif text-[34px] font-bold leading-[1.05] text-[#151515] sm:text-[42px] md:text-[52px]">
            We Deliver The Source Code,<br />
            To Give You Complete Control
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-6 md:mt-12 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#f1ede7] bg-white shadow-[0_8px_20px_rgba(17,17,17,0.08)]">
                  <img
                    src={feature.icon}
                    alt="CloudFire Icon"
                    className="h-5 w-5 object-contain"
                  />
                </div>
                <p className="text-sm font-medium leading-relaxed text-[#333333] sm:text-[15px] md:text-base">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
