import React from 'react';
import { Heart } from 'lucide-react';

const contestants = [
  { id: 1, name: "Sophia Chen", location: "Singapore", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80", votes: 1240 },
  { id: 2, name: "Amara Williams", location: "London", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80", votes: 980 },
  { id: 3, name: "Valentina Rossi", location: "Milan", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80", votes: 2100 },
];

const ContestantGallery = () => (
  <section className="py-24 bg-white px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif italic">Top Aspirants</h2>
          <p className="text-zinc-500 mt-2">Current leaders in the global public vote.</p>
        </div>
        <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all">
          View All Contestants
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {contestants.map((girl) => (
          <div key={girl.id} className="group relative">
            <div className="aspect-[3/4] overflow-hidden bg-zinc-100 relative">
              <img 
                src={girl.image} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                alt={girl.name}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 flex justify-between items-center shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div>
                  <p className="text-sm font-bold uppercase tracking-tighter">{girl.name}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">{girl.location}</p>
                </div>
                <button className="flex items-center space-x-1 text-[#C5A059] hover:scale-110 transition-transform">
                  <Heart size={18} fill="#C5A059" />
                  <span className="text-xs font-bold">{girl.votes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ContestantGallery;