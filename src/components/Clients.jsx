import React from "react";

const Clients = () => {
  const clientLogos = [
    { name: "NSU", src: "/Assests/NSU 1.png" },
    { name: "Current", src: "/Assests/NSU 1-1.png" },
    { name: "NEFFEX", src: "/Assests/image 1.png" },
    { name: "101 blockchains", src: "/Assests/pikwly59 1.png" },
    { name: "Sunspots", src: "/Assests/image 2.png" },
  ];

  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
        {/* Heading: Georgia, Bold, 48px */}
        <h2 className="font-serif font-bold text-[48px] text-gray-900 mb-20 leading-tight">
          A Few OF Our Clients
        </h2>

        {/* Logos in one line (Running row) */}
        <div className="flex flex-nowrap items-center gap-[30px] overflow-x-auto pb-8 scrollbar-hide justify-center">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="w-[223.42px] h-[136px] bg-white rounded-[20px] shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-gray-50 flex items-center justify-center p-8 shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-w-full max-h-full object-contain  transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
