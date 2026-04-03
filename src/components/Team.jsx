import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  { name: 'Lorem Ipsum', role: 'Lorem', image: '/about/Ellipse 221-1.png' },
  {
    name: 'Lorem Ipsum',
    role: 'Lorem',
    image: '/about/Ellipse 221-3.png',
    highlight: true,
  },
  { name: 'Lorem Ipsum', role: 'Lorem', image: '/about/Ellipse 221-4.png' },
  { name: 'Lorem Ipsum', role: 'Lorem', image: '/about/Ellipse 221.png' },
  { name: 'Lorem Ipsum', role: 'Lorem', image: '/about/Ellipse 221-5.png' },
  { name: 'Lorem Ipsum', role: 'Lorem', image: '/about/Ellipse 2211.png' },
];

const Team = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="absolute right-10 top-10 hidden opacity-20 md:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-gray-400"></div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1340px] px-6 sm:px-8 md:px-14 lg:px-16">
        <h2 className="mb-12 text-center text-[34px] font-bold text-gray-900 sm:text-[42px] md:mb-16 md:text-5xl lg:mb-20">
          Our Team
        </h2>

        <div className="mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:mb-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
          {teamMembers.map((member, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div
                className={`relative mb-5 h-52 w-52 rounded-full p-1.5 transition-transform duration-300 group-hover:scale-105 sm:h-60 sm:w-60 md:mb-6 md:h-64 md:w-64 lg:h-72 lg:w-72 ${
                  member.highlight
                    ? 'border-4 border-primary shadow-xl'
                    : 'border-2 border-transparent'
                }`}
              >
                <div className="h-full w-full overflow-hidden rounded-full border-2 border-white">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {member.highlight && (
                  <div className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-white text-primary shadow-md sm:right-0 sm:h-10 sm:w-10">
                    <span className="text-xl font-bold">+</span>
                  </div>
                )}
              </div>

              <div className="text-center">
                <h3
                  className={`mb-1 text-xl font-bold ${
                    member.highlight ? 'text-primary' : 'text-gray-900'
                  }`}
                >
                  {member.name}
                </h3>
                <p className="text-sm font-medium uppercase tracking-wider text-primary">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/team"
            className="flex items-center gap-3 rounded-md bg-primary px-7 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 sm:px-10 sm:text-lg"
          >
            Our Team
            <span className="text-xs">▶</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
