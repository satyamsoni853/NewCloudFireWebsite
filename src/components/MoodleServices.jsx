import React from 'react';

const serviceItems = [
  {
    title: 'Consulting',
    desc: 'Our e-learning consultants encouraged up by our team of in-house Moodle developers and experts. We assist you in scoping, development, implementation of your Moodle based LMS.'
  },
  {
    title: 'Development',
    desc: '10+ years of powerful experience of our team has been developing and customizing Moodle functionalities as per client needs. And we have a set of various Moodle plugins developed in-house.'
  },
  {
    title: 'Hosting',
    desc: 'We offer a host of superior Moodle sites for organizations of all sizes. We specialize in scalable LMS hosting on AWS, Azure, Google cloud, Linode and Digital Ocean.'
  }
];

const MoodleServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left: Image Cluster */}
        <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
          {/* Main Tall Image */}
          <div className="w-full sm:w-[300px] h-[350px] sm:h-[550px] rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl">
            <img 
              src="/service/moodle1.png" 
              className="w-full h-full object-cover" 
              alt="Moodle Development 1" 
            />
          </div>
          
          {/* Stacked Side Images */}
          <div className="flex flex-col gap-4 sm:gap-6 w-[45%] sm:w-auto">
            <div className="w-full sm:w-[280px] h-[160px] sm:h-[300px] rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl">
              <img 
                src="/service/moodle2.png" 
                className="w-full h-full object-cover" 
                alt="Moodle Development 2" 
              />
            </div>
            <div className="w-full sm:w-[280px] h-[160px] sm:h-[280px] rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-2xl">
              <img 
                src="/service/moodle3.png" 
                className="w-full h-full object-cover" 
                alt="Moodle Development 3" 
              />
            </div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="max-w-[700px]">
          <h2 className="font-[Georgia] font-bold text-[36px] md:text-[48px] text-gray-900 leading-tight mb-12 uppercase tracking-tight">
            Our Moodle <br /> Development Services
          </h2>
          
          <div className="space-y-12">
            {serviceItems.map((item, i) => (
              <div key={i} className="flex gap-8 group cursor-pointer">
                {/* Checkmark Icon Overlay */}
                <div className="w-[100px] h-[100px] rounded-full border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] flex items-center justify-center shrink-0 bg-white relative">
                   <div className="w-[60px] h-[60px] rounded-full border-2 border-dashed border-[#ff7301]/30 flex items-center justify-center">
                     <svg className="w-8 h-8 text-[#ff7301]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-[Georgia] font-normal text-[25px] text-gray-900">{item.title}</h3>
                    <span className="text-3xl text-gray-400 font-light group-hover:text-[#ff7301] transition-colors">→</span>
                  </div>
                  <p className="font-['Segoe_UI'] font-normal text-[16px] text-gray-600 leading-[26px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default MoodleServices;
