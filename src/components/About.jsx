import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white text-center">
      <div className="max-w-[1040px] mx-auto px-4">
        <h2 className="font-serif text-[48px] font-bold text-[#111] mb-2 leading-tight">About US</h2>
        <p className="font-sans text-[18px] font-normal text-[#5f5f5f] leading-6 mb-10">Your Satisfaction, Our Mission</p>
        
        <div className="space-y-7">
          <p className="font-sans text-[18px] leading-[28px] font-normal text-[#333]">
            Virasat Solutions a leading and skilled LMS, eLearning & eCommerce application Development Company. We, at Virasat Solutions, have dedicated and passionate teams to cater to each and every aspect of your eLearning & eCommerce business.
          </p>
          
          <p className="font-sans text-[18px] leading-[28px] font-normal text-[#333]">
            Whether be it LMS <span className="text-[#ff7301] font-semibold">(Learning Management System)</span> design and development, e-Commerce web and mobile applications development, Moodle development, PHP Frameworks & CMS development, etc. We will assist you on all the areas.
          </p>
          
          <p className="font-sans text-[18px] leading-[28px] font-normal text-[#333]">
            And we also offer the best maintenance and support solutions according to the client’s requirements Like Custom Theme Development, Plugin Development, Migration, Integration, and Customization Services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
