import React from "react";

const teamMembers = Array(6).fill({
  name: "Jessca Arow",
  role: "Warehouse Head",
  image: "/about_us/ourteam.png",
});

const Team = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="font-serif font-bold text-[36px] md:text-[54px] text-gray-900 mb-20 text-center uppercase tracking-tight">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="flex flex-col w-full max-w-[403.55px] h-[480px] sm:h-[538px] mx-auto rounded-sm overflow-hidden shadow-lg transition-transform hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="flex-1 overflow-hidden">
                <img
                  src={member.image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Black Footer Bar */}
              <div className="bg-black p-6 flex items-center justify-between shrink-0">
                {/* Left: Identity */}
                <div className="flex flex-col">
                  <h3 className="font-['Segoe_UI'] font-bold text-white text-[20px] leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="font-['Segoe_UI'] font-normal text-white/80 text-[16px]">
                    {member.role}
                  </p>
                </div>

                {/* Right: Social Icons */}
                <div className="flex items-center gap-6">
                  <a
                    href="#twitter"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <svg className="fill-current w-[26.57px] h-[24.99px]" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#facebook"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <svg className="fill-current w-[26.57px] h-[24.99px]" viewBox="0 0 24 24">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V1.5c-.733-.099-1.305-.149-2.074-.149C12.79 1.351 10 3.125 10 6.5v3H7v4h3V22h4v-8.5z" />
                    </svg>
                  </a>
                  <a
                    href="#instagram"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <svg className="fill-current w-[26.57px] h-[24.99px]" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.58.069 4.848 0 3.268-.012 3.648-.07 4.912-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.58.07-4.848.07-3.268 0-3.648-.012-4.912-.07-3.263-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.58-.069-4.848 0-3.415.011-3.642.069-4.912.148-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
