import React from 'react';

const MoodleServices = () => {
  const serviceItems = [
    {
      title: 'Consulting',
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since'
    },
    {
      title: 'Consulting',
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since'
    },
    {
      title: 'Consulting',
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since'
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-[1400px]">
        
        {/* Left: Image Cluster */}
        <div className="flex gap-6 items-start">
          <div className="w-[340px] h-[750px] rounded-[12px] overflow-hidden shadow-xl mt-12">
            <img src="/service/moodle1.png" className="w-full h-full object-cover" alt="Moodle 1" />
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden shadow-xl">
              <img src="/service/moodle2.png" className="w-full h-full object-cover" alt="Moodle 2" />
            </div>
            <div className="w-[300px] h-[280px] rounded-[12px] overflow-hidden shadow-xl">
              <img src="/service/moodle3.png" className="w-full h-full object-cover" alt="Moodle 3" />
            </div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="pt-10">
          <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '48px', lineHeight: '1.1' }} className="text-[#141414] mb-16">
            Our Moodle <br /> Development Services
          </h2>
          
          <div className="space-y-12">
            {serviceItems.map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="w-24 h-24 rounded-full border border-black/5 flex items-center justify-center shrink-0 bg-white shadow-sm">
                   <div className="w-16 h-16 rounded-full border border-[#F6821F] flex items-center justify-center p-4">
                     <img src="/Industries/Vector.png" alt="Icon" className="w-8 h-8 object-contain" />
                   </div>
                </div>
                
                <div className="pt-2">
                  <h3 style={{ fontFamily: 'Georgia, serif', fontWeight: 400, fontSize: '27px' }} className="text-[#141414] mb-3">
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: '"Segoe UI", sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '24px' }} className="text-[#141414]/70 max-w-[500px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative dot grid - bottom right */}
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10 pointer-events-none hidden lg:block">
        <div className="grid grid-cols-7 gap-3">
          {[...Array(49)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodleServices;
