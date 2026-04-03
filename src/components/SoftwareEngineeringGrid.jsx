import React from 'react';

const offeringItems = [
  {
    title: 'Software Engineering Services We Offer',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
    image: '/service/services.png',
  },
  {
    title: 'Software Engineering Services We Offer',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
    image: '/service/services.png',
  },
  {
    title: 'Software Engineering Services We Offer',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
    image: '/service/services.png',
  },
  {
    title: 'Software Engineering Services We Offer',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
    image: '/service/services.png',
  },
  {
    title: 'Software Engineering Services We Offer',
    desc: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.",
    image: '/service/services.png',
  },
];

const SoftwareEngineeringGrid = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1340px] px-6 sm:px-8 md:px-14 lg:px-16">
        <h2 className="mb-12 text-center text-[34px] font-bold leading-tight text-gray-900 sm:text-[42px] md:mb-16 md:text-5xl lg:mb-20">
          Software Engineering
          <br />
          Services We Offer
        </h2>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {offeringItems.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="group flex h-full flex-col rounded-[20px] border border-gray-100 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-[15px]">
                <img
                  src={item.image}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.title}
                />
              </div>
              <div className="flex grow flex-col px-2 pb-4">
                <h3 className="mb-4 text-xl font-bold leading-tight text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-6 grow text-sm leading-relaxed text-gray-600">{item.desc}</p>
                <button className="self-start rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                  Know more
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-[860px] lg:gap-10 xl:gap-12">
          {offeringItems.slice(3, 5).map((item, i) => (
            <div
              key={i}
              className="group w-full rounded-[20px] border border-gray-100 bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6 aspect-video w-full overflow-hidden rounded-[15px]">
                <img
                  src={item.image}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={item.title}
                />
              </div>
              <div className="flex grow flex-col px-2 pb-4">
                <h3 className="mb-4 text-xl font-bold leading-tight text-gray-900">
                  {item.title}
                </h3>
                <p className="mb-6 grow text-sm leading-relaxed text-gray-600">{item.desc}</p>
                <button className="self-start rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90">
                  Know more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftwareEngineeringGrid;
