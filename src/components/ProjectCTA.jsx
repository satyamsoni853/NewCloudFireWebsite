import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCTA = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/about/company.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 flex min-h-[320px] w-full flex-col items-center justify-center px-6 py-20 text-center sm:min-h-[380px] md:min-h-[460px] md:px-10 lg:min-h-[560px]">
        <h2 className="mb-8 max-w-4xl text-[34px] font-bold tracking-tight text-white sm:text-[42px] md:mb-10 md:text-5xl lg:text-6xl">
          Want to start a Project With us?
        </h2>

        <Link
          to="/contact"
          className="flex items-center gap-3 rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 sm:px-8 sm:text-lg"
        >
          Our Portfoilo
          <span className="text-xs">▶</span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectCTA;
