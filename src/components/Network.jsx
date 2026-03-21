import React from 'react';

const Network = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading: Georgia, Bold, 48px */}
        <h2 className="font-serif font-bold text-[48px] text-gray-900 mb-4 leading-tight">
          A truly unique global cloud network
        </h2>
        
        {/* Subtitle: Segoe UI, 400, 18px, LH 24px */}
        <p className="font-['Segoe_UI',sans-serif] font-normal text-[18px] leading-[24px] text-gray-500 max-w-2xl mx-auto mb-20 px-4">
          Powering innovation across industries with cutting-edge AI talent solutions
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group flex justify-center">
            <img 
              src="/Assests/connected-world.svg" 
              className="w-full max-w-[500px] h-auto object-contain opacity-100 group-hover:scale-105 transition-transform duration-1000" 
              alt="Global Map" 
            />
          </div>
          
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
            {[
              { val: '14+', label: 'Year of Experience' },
              { val: '600+', label: 'Happy Clients' },
              { val: '250+', label: 'CMS Delivered' },
              { val: '4.5', label: 'Service Rating' },
              { val: '200+', label: 'LMS Delivered' }
            ].map((stat, idx) => (
              /* Stat Box: Width 266px, Height 136px */
              <div 
                key={idx} 
                className="w-full max-w-[266px] sm:w-[266px] h-auto sm:h-[136px] min-h-[136px] bg-[#f8f8f8] p-8 rounded-[20px] border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.03)] flex flex-col justify-center text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Stat Number: Segoe UI, Bold, 47px */}
                <h3 className="font-['Segoe_UI',sans-serif] font-bold text-[47px] text-[#ff7301] leading-tight mb-1 tracking-tighter">
                  {stat.val}
                </h3>
                {/* Stat Label: Segoe UI, 400, 16px */}
                <p className="font-['Segoe_UI',sans-serif] font-normal text-[16px] text-gray-600 leading-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
