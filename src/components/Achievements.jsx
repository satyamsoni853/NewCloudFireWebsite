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

        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="achievement-card"
            >
              <div className="h-12 w-12 shrink-0">
                <img src={item.icon} alt={item.label} className="h-full w-full object-contain" />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary">{item.number}</h3>
                <p className="text-[13px] font-medium text-gray-500 uppercase tracking-tight">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
