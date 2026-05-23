import React from 'react';
import { Crown, ExternalLink } from 'lucide-react';

const PastWinners = () => {
  const winners = [
    {
      year: "2025",
      name: "Lucy Chen",
      title: "The Global Muse",
      image: "https://tse2.mm.bing.net/th/id/OIP.KW8-ICp_T5loqka4o3bQLgHaNK?w=1242&h=2208&rs=1&pid=ImgDetMain&o=7&rm=3",
      legacy: "Now the face of L'Oréal's 'Luminous' campaign."
    },
    {
      year: "2024",
      name: "Love Joseph Williams",
      title: "The Digital Icon",
      image: "https://tse4.mm.bing.net/th/id/OIP.gq_01TaH8dYgNnLq80R64wHaJQ?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      legacy: "Launched 'Zuri Styles', a sustainable luxury brand."
    },
    {
      year: "2023",
      name: "Elena Rodriguez",
      title: "The Visionary Queen",
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80",
      legacy: "Signed with Elite Model Management Paris."
    }
  ];

  return (
    <section id="winners" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-4">
            <Crown className="text-[#C5A059] w-8 h-8" />
          </div>
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-2 block">The Hall of Fame</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">Our Reigning Legacy</h2>
          <p className="text-zinc-400 mt-4 text-sm font-light italic max-w-lg mx-auto">
            "A crown is not just an accessory, it is a commitment to lead with grace and purpose."
          </p>
        </div>

        {/* Winners Grid */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-8">
          {winners.map((winner, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] bg-zinc-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img 
                  src={winner.image} 
                  alt={winner.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                />
                <div className="absolute inset-0 border-[15px] border-white/0 group-hover:border-white/20 transition-all duration-700"></div>
                
                {/* Year Badge */}
                <div className="absolute top-6 left-6 bg-white px-4 py-1">
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#1A1A1A] uppercase">
                    {winner.year}
                  </span>
                </div>
              </div>

              {/* Text Details */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-serif text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors duration-300">
                  {winner.name}
                </h3>
                <p className="text-[#C5A059] text-[10px] uppercase tracking-[0.3em] font-bold mt-1 mb-4">
                  {winner.title}
                </p>
                <div className="h-[1px] w-12 bg-zinc-200 mb-4 mx-auto md:mx-0"></div>
                <p className="text-zinc-500 text-xs italic leading-relaxed px-4 md:px-0">
                  "{winner.legacy}"
                </p>
                
                <button className="mt-6 flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400 group-hover:text-[#1A1A1A] transition-colors mx-auto md:mx-0">
                  View Full Portfolio <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-zinc-100 text-center">
          <p className="text-zinc-400 text-sm font-light mb-6">Will you be the next icon in our legacy?</p>
          <a 
            href="#register" 
            className="inline-block bg-[#1A1A1A] text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#C5A059] transition-all"
          >
            Start Your Journey
          </a>
        </div>

      </div>
    </section>
  );
};

export default PastWinners;