import React from 'react';

const testimonials = [
  {
    text: "Quick, attentive to their customers' needs, caring and compassionate. Will be using them for all my A/C needs from now on. No ifs, ands, or buts about it.",
    author: "Freddie Wes",
    rating: 4
  },
  {
    text: "Fast response and very professional and honest service. We called for an inspection and estimate on possible repairs as we're trying to sell our home.",
    author: "Bielka Gonzalez",
    rating: 5
  },
  {
    text: "I recently used All Year Cooling for service of cleaning of my ducts. The entire process was smooth and the team was super responsive. Mauricio deserves a raise!",
    author: "Evergreen Health",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#FAFBFF]">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="font-serif font-bold text-[36px] md:text-[54px] text-gray-900 mb-16 text-center">
          Our Testimonials
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between w-full max-w-[409.91px] min-h-[309px] h-auto mx-auto hover:shadow-xl transition-all duration-300">
              <div className="overflow-hidden mb-4">
                {/* Quotation Icon */}
                <div className="mb-4">
                  <svg width="40" height="28" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3 42L24.3 0H12L3 42H15.3ZM42.3 42L51.3 0H39L30 42H42.3Z" fill="#F7941D"/>
                  </svg>
                </div>
                
                <p className="font-['Segoe_UI'] font-normal text-[17px] leading-relaxed text-[#333]">
                  {t.text}
                </p>
              </div>
              
              <div className="shrink-0">
                {/* Horizontal Line */}
                <div className="h-[1px] w-full bg-gray-200 mb-4"></div>
                
                <div className="flex items-center justify-between">
                  {/* Author Name */}
                  <span className="font-[Georgia] font-bold text-[17px] text-[#222]">
                    {t.author}
                  </span>
                  
                  {/* Ratings */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill={idx < t.rating ? "#FFD700" : "#E0E0E0"}>
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

