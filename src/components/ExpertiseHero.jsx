import React from 'react';
import { Link } from 'react-router-dom';

const ExpertiseHero = () => {
  return (
    <section className="hero-page-section overflow-visible md:h-[620px]">
      <img
        src="/about/bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-0 bg-white/60" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-white md:h-28" />

      <div className="relative z-10 mx-auto flex h-full w-full items-center px-6 pb-12 pt-28 sm:px-8 md:px-24 md:pb-16 md:pt-32 lg:px-24">
        <div className="grid w-full items-end gap-10 md:grid-cols-[minmax(260px,1fr)_minmax(340px,560px)]">
          <div className="max-w-[420px] self-center md:pb-10">
            <nav className="mb-4 flex items-center gap-2 text-sm font-medium text-[#6b6b6b] md:mb-5">
              <Link
                to="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[#141414]">Our Expertise</span>
            </nav>

            <h1 className="hero-page-title">
              Our expertise
            </h1>
          </div>

          <div className="relative flex min-h-[220px] items-end justify-center md:min-h-[420px] md:translate-y-10 md:justify-end lg:translate-y-14">
            <img
              src="/Expertise/undraw_proud-designer_1rcm 1.svg"
              alt="Expertise Illustration"
              className="hero-page-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseHero;
