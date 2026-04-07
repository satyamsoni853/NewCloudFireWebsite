import React from 'react';

const Achievements = () => {
  const achievements = [
    { icon: '/about/a 1-1.png', number: '14+', label: 'Year of Experience' },
    { icon: '/about/a 1-2.png', number: '600+', label: 'Happy Clients' },
    { icon: '/about/a 1-3.png', number: '250+', label: 'CMS Delivered' },
    { icon: '/about/a 1-4.png', number: '4.5', label: 'Service Rating' },
    { icon: '/about/a 1.png', number: '200+', label: 'LMS Delivered' },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute right-0 top-0 hidden p-8 opacity-20 lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 hidden p-8 opacity-20 lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1340px] px-6 text-center sm:px-8 md:px-14 lg:px-16">
        <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
          What We Offer
        </span>
        <h2 className="achievements-title">
          Some Of Our Achievements
        </h2>
        <p className="achievements-desc">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
          Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s, When An
          Unknow
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card flex flex-col items-center justify-center bg-white rounded-[15px] border border-gray-50 shadow-[0_12px_40px_rgba(0,0,0,0.04)] aspect-3/2 hover:shadow-xl hover:-translate-y-1 transition-all p-6"
            >
              <div className="mb-4 h-12 w-12 shrink-0">
                <img src={item.icon} alt={item.label} className="h-full w-full object-contain" />
              </div>
              <div className="text-center">
                <h3 className="text-[32px] font-bold text-primary leading-tight mb-1">{item.number}</h3>
                <p className="text-[12px] font-sans font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
