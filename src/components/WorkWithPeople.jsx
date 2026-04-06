import React from 'react';

const peopleWorkItems = [
  {
    id: 1,
    title: "Skilled Developers",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
    icon: "/Industries/donate-icon-in-black-colors-donation-signs-illustration-png 23.png",
  },
  {
    id: 2,
    title: "Customer Satisfaction",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
    icon: "/Industries/donate-icon-in-black-colors-donation-signs-illustration-png 24.png",
  },
  {
    id: 3,
    title: "Instant Response",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
    icon: "/Industries/donate-icon-in-black-colors-donation-signs-illustration-png 31.png",
  },
  {
    id: 4,
    title: "Quality Assurance",
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since.",
    icon: "/Industries/donate-icon-in-black-colors-donation-signs-illustration-png 33.png",
  },
];

const WorkWithPeople = () => {
    return (
        <section className="bg-white py-24 md:py-32 relative overflow-hidden -mt-32">
            
            {/* Dot grid decoration */}
            <div className="absolute top-20 right-0 w-32 h-32 opacity-10 pointer-events-none translate-x-12 translate-y-24">
                <div className="grid grid-cols-5 gap-3">
                {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-serif font-black text-secondary tracking-tight">
                        What Work With Our People
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                    {peopleWorkItems.map((item) => (
                        <div key={item.id} className="bg-white p-10 md:p-12 rounded-4xl border border-gray-100 shadow-custom-card hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#ff730122] p-6 rounded-3xl mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <img src={item.icon} alt={item.title} className="w-full h-full object-contain overflow-visible" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-serif font-black text-secondary mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkWithPeople;
