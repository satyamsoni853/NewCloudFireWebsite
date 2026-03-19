import React from 'react';

const Clients = () => {
  const clientLogos = [
    { name: 'NSU', src: '/Assests/NSU 1.png' },
    { name: 'Current', src: '/Assests/NSU 1-1.png' },
    { name: 'NEFFEX', src: '/Assests/image 1.png' },
    { name: '101 blockchains', src: '/Assests/pikwly59 1.png' },
    { name: 'Sunspots', src: '/Assests/image 2.png' }
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-extrabold mb-12">A Few OF Our Clients</h2>
      <div className="flex flex-wrap justify-center gap-6 items-center">
        {clientLogos.map((client, idx) => (
          <div 
            key={idx} 
            className="bg-white px-9 py-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center min-w-[180px] h-[100px] hover:shadow-md transition-shadow"
          >
            <img 
              src={client.src} 
              alt={client.name} 
              className="w-full h-full object-contain" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
