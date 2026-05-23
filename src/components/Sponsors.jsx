import React from 'react';
import { Handshake } from 'lucide-react';

const Sponsors = () => {
  // Example Sponsor Data
  const partners = [
    { name: "Macy's", logo: "https://tse2.mm.bing.net/th/id/OIP.6cEJvmpsKBhL9QyUDoqvbQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Miss America", logo: "https://th.bing.com/th/id/OIP.2nb2NUZIvOF9PpmaJ42EpAHaGS?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Walt Disney", logo: "https://tse2.mm.bing.net/th/id/OIP.3F_uAYmxk8jr-OGQdq1W8AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Nivea", logo: "https://tse2.mm.bing.net/th/id/OIP.okHP3ffOCXJlM3nDRB5RUwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Yves Saint Laurent", logo: "https://tse1.mm.bing.net/th/id/OIP.uhXFANM3NrRoS0VHg3torgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
  ];

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.4em] uppercase text-xs font-bold block mb-2">
            Strategic Alliances
          </span>
          <h2 className="text-3xl md:text-4xl font-serif italic text-white">
            Our Esteemed Partners
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center opacity-70">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex justify-center group cursor-pointer transition-all duration-500"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-12 w-auto object-contain filter invert grayscale group-hover:grayscale-0 group-hover:brightness-125 transition-all"
              />
            </div>
          ))}
        </div>

        {/* Sponsorship CTA */}
        <div className="mt-20 p-8 border border-gold/10 bg-zinc-950/50 flex flex-col md:flex-row items-center justify-between group hover:border-gold/30 transition-colors">
          <div className="flex items-center space-x-4 mb-6 md:mb-0 text-center md:text-left">
            <div className="p-3 bg-gold/10 rounded-full">
              <Handshake className="text-gold w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                Partner with Vogue Vista
              </h4>
              <p className="text-gray-500 text-xs mt-1">
                Elevate your brand presence on the global stage.
              </p>
            </div>
          </div>
          <button className="text-gold border border-gold/40 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all">
            Inquire for Sponsorship
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;