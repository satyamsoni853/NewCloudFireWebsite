import React from "react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="hero-page-section">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/about/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-white/60" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-white/70 md:h-28" />

      <div className="relative z-10 mx-auto flex h-full w-full items-center px-6 pb-12 pt-28 sm:px-8 md:px-24 md:pb-16 md:pt-32 lg:px-24">
        <div className="grid w-full items-end gap-10 md:grid-cols-[minmax(260px,1fr)_minmax(320px,520px)]">
          <div className="max-w-[420px] self-center md:pb-10">
            <nav className="mb-4 flex items-center gap-2 text-sm font-medium text-[#6b6b6b] md:mb-5">
              <Link
                to="/"
                className="transition-colors hover:text-primary"
              >
                Home
              </Link>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-[#141414]">About</span>
            </nav>

            <h1 className="hero-page-title">
              About us
            </h1>
          </div>

          <div className="relative flex min-h-[220px] items-end justify-center md:min-h-[360px] md:justify-end">
            <img
              src="/about/undraw_team-spirit_18vw 1.svg"
              alt="Team Spirit"
              className="hero-page-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
