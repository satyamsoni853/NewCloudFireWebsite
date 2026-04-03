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
        <h2 className="mb-5 text-[34px] font-bold text-gray-900 sm:text-[42px] md:mb-6 md:text-5xl">
          Some Of Our Achievements
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-sm leading-relaxed text-gray-600 md:mb-14 md:text-base">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem
          Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s, When An
          Unknow
        </p>

        <div className="mx-auto mb-6 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {achievements.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 sm:justify-center sm:gap-5 sm:p-6 lg:gap-6 lg:p-8"
            >
              <div className="h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <img src={item.icon} alt={item.label} className="h-full w-full object-contain" />
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-primary md:text-4xl">{item.number}</h3>
                <p className="text-sm font-medium text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:gap-8">
          {achievements.slice(3, 5).map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 sm:justify-center sm:gap-5 sm:p-6 lg:gap-6 lg:p-8"
            >
              <div className="h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <img src={item.icon} alt={item.label} className="h-full w-full object-contain" />
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-bold text-primary md:text-4xl">{item.number}</h3>
                <p className="text-sm font-medium text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
