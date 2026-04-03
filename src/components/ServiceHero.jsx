import React from "react";
import { Link } from "react-router-dom";

const ServiceHero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#f6f5f3]">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/services/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 z-0 bg-white/60" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-24 bg-white/70 md:h-28" />

      <div className="relative z-10 mx-auto flex min-h-[360px] w-full max-w-[1340px] items-end px-6 pb-12 pt-28 sm:px-8 md:min-h-[520px] md:px-14 md:pb-16 md:pt-32 lg:px-16">
        <div className="grid w-full items-end gap-10 md:grid-cols-[minmax(260px,1fr)_minmax(340px,560px)]">
          <div className="max-w-[420px] self-center md:pb-10">
            <nav className="mb-4 flex items-center gap-2 text-sm font-medium text-[#6b6b6b] md:mb-5">
              <Link
                to="/"
                className="transition-colors hover:text-[#ff7301]"
              >
                Home
              </Link>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff7301]" />
              <span className="text-[#141414]">Services</span>
            </nav>

            <h1 className="font-serif text-4xl font-bold uppercase tracking-tight text-[#141414] sm:text-5xl md:text-6xl lg:text-[68px]">
              SERVICES
            </h1>
          </div>

          <div className="relative flex min-h-[220px] items-end justify-center md:min-h-[360px] md:justify-end">
            <img
              src="/services/undraw_progressive-web-app_c4uq(1) 1.svg"
              alt="Services Illustration"
              className="relative z-10 h-auto w-full max-w-[500px] object-contain object-bottom md:max-w-[560px] lg:max-w-[620px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
