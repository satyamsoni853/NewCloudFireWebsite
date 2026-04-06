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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1340px] px-6 md:px-14">
        <div className="max-w-[1100px]">
          <h2 
            className="text-[#141414] mb-12"
            style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '48px', lineHeight: '54px' }}
          >
            We Deliver The Source Code, <br /> To Give You Complete Control
          </h2>
 
           <div className="mt-12 grid grid-cols-1 gap-x-16 md:grid-cols-2">
             {features.map((feature, index) => (
               <div key={index} className="flex items-center gap-5 h-[90px]">
                 <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#f1ede7] bg-white shadow-[0_8px_20px_rgba(17,17,17,0.08)]">
                   <img
                     src={feature.icon}
                     alt="CloudFire Icon"
                     className="h-5 w-5 object-contain"
                   />
                 </div>
                 <p 
                    className="text-[#333333]"
                    style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '20px', lineHeight: '70px' }}
                 >
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
