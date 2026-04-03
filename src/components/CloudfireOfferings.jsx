import React from 'react';

const offeringItems = [
  {
    title: 'E-Commerce',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    icon: '/services/icon.png',
  },
  {
    title: 'E-Learning',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    icon: '/services/icon.png',
  },
  {
    title: 'Framework',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    icon: '/services/icon.png',
  },
  {
    title: 'CMS',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    icon: '/services/icon.png',
  },
  {
    title: 'Moodle',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    icon: '/services/icon.png',
  },
  {
    title: 'Drupal',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchanged.",
    icon: '/services/icon.png',
  },
];

const CloudfireOfferings = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1340px] px-6 sm:px-8 md:px-14 lg:px-16">
        <h2 className="mb-12 text-center text-[34px] font-bold leading-tight text-gray-900 sm:text-[42px] md:mb-16 md:text-5xl lg:mb-24">
          Services Offer By <br />
          Cloudfire
        </h2>

        <div className="grid grid-cols-1 overflow-hidden rounded-[24px] border border-gray-100 sm:grid-cols-2 lg:grid-cols-3">
          {offeringItems.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center p-6 text-center transition-all duration-300 hover:bg-gray-50/50 sm:p-8 lg:p-10"
            >
              <div
                className={`absolute inset-0 border-gray-100
                ${i % 3 !== 2 ? 'lg:border-r' : ''}
                ${i < 3 ? 'lg:border-b' : ''}
                ${i % 2 !== 1 ? 'sm:border-r border-b lg:border-r-0' : 'border-b lg:border-b-0'}`}
              ></div>

              <div className="relative z-10">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] sm:mb-7 sm:h-16 sm:w-16">
                  <img src={item.icon} className="h-8 w-8 object-contain" alt={item.title} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900 sm:mb-5 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudfireOfferings;
