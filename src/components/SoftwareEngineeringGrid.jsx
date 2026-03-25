import React from 'react';

const offeringItems = Array(5).fill({
  title: 'Software Engineering Services We Offer',
  desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
  image: '/service/services.png'
});

const SoftwareEngineeringGrid = () => {
  return (
    <section className="py-24 bg-[#FAFBFF]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="font-[Georgia] font-bold text-[36px] md:text-[48px] text-gray-900 text-center mb-20 leading-tight">
          Software Engineering Services We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Row 1: 3 cards */}
          {offeringItems.slice(0, 3).map((item, i) => (
            <div key={i} className="bg-white rounded-[40px] p-6 sm:p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col justify-between items-start hover:shadow-xl transition-all duration-300 w-full max-w-[408px] h-auto min-h-[528px] mx-auto group">
              <div>
                <div className="w-full max-w-[372.83px] h-[206px] rounded-[30px] overflow-hidden mb-10 mx-auto">
                  <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt={item.title} />
                </div>
                <h3 className="font-[Georgia] font-bold text-[23px] text-gray-900 mb-6 leading-tight">
                  {item.title}
                </h3>
                <p className="font-['Segoe_UI'] font-normal text-[15px] leading-[22px] text-gray-600 mb-8">
                  {item.desc}
                </p>
              </div>
              <button className="bg-[#ff7301] text-white font-bold text-[14px] w-[139px] h-[40px] flex items-center justify-center rounded-xl hover:opacity-90 transition-opacity">
                Know more
              </button>
            </div>
          ))}
          
          {/* Row 2: 2 centered cards - we wrap them in a flexbox to center them in the 3-col grid layout on lg screens */}
          <div className="hidden lg:flex lg:col-span-3 justify-center gap-12">
             {offeringItems.slice(3, 5).map((item, i) => (
              <div key={i} className="bg-white rounded-[40px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col justify-between items-start hover:shadow-xl transition-all duration-300 w-full max-w-[408px] h-[528px] group">
                <div>
                  <div className="w-[372.83px] max-w-full h-[206px] rounded-[30px] overflow-hidden mb-10 mx-auto">
                    <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt={item.title} />
                  </div>
                  <h3 className="font-[Georgia] font-bold text-[23px] text-gray-900 mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-['Segoe_UI'] font-normal text-[15px] leading-[22px] text-gray-600 mb-8">
                    {item.desc}
                  </p>
                </div>
                <button className="bg-[#ff7301] text-white font-bold text-[14px] w-[139px] h-[40px] flex items-center justify-center rounded-xl hover:opacity-90 transition-opacity">
                  Know more
                </button>
              </div>
            ))}
          </div>

          {/* Mobile version of Row 2: handled automatically by standard grid-cols-1 or 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-10 col-span-full">
             {offeringItems.slice(3, 5).map((item, i) => (
              <div key={i} className="bg-white rounded-[40px] p-8 shadow-[0_15px_45px_rgba(0,0,0,0.06)] border border-gray-100/50 flex flex-col justify-between items-start hover:shadow-xl transition-all duration-300 w-full max-w-[408px] h-[528px] mx-auto group">
                <div>
                  <div className="w-[372.83px] max-w-full h-[206px] rounded-[30px] overflow-hidden mb-10">
                    <img src={item.image} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700" alt={item.title} />
                  </div>
                  <h3 className="font-[Georgia] font-bold text-[23px] text-gray-900 mb-6 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-['Segoe_UI'] font-normal text-[15px] leading-[22px] text-gray-600 mb-8">
                    {item.desc}
                  </p>
                </div>
                <button className="bg-[#ff7301] text-white font-bold text-[14px] w-[139px] h-[40px] flex items-center justify-center rounded-xl hover:opacity-90 transition-opacity">
                  Know more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareEngineeringGrid;
