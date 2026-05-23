import React from 'react';
import { Crown, Award, Star, Gem, Camera, BookOpen } from 'lucide-react';

function Prizes(){
  const finalists = [
    { rank: "4th Place", title: "Vista Muse", prize: "$3,750", perk: "Premium Skincare Collection" },
    { rank: "5th Place", title: "Digital Darling", prize: "$2,750", perk: "High-Fashion Wardrobe Staples" },
    { rank: "6th - 10th", title: "Honorary Finalists", prize: "$1,750", perk: "Vogue Vista Certificate & Beauty Kit" },
  ];

  return (
    <section id="prizes" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Rewards</span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">Excellence Recognized</h2>
          <div className="w-20 h-1 bg-[#C5A059] mx-auto mt-6"></div>
        </div>

        {/* Top 3 - The Podium */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Second Place */}
          <div className="order-2 md:order-1 bg-[#FAF9F6] p-10 border border-zinc-100 text-center flex flex-col items-center">
            <Award className="text-zinc-400 w-12 h-12 mb-6" />
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-2">1st Runner Up</span>
            <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Silver Vista</h3>
            <p className="text-3xl font-bold text-[#1A1A1A] mb-6">$25,000</p>
            <ul className="text-zinc-500 text-sm space-y-3 italic">
              <li>Luxury Jewelry Set</li>
              <li>Professional Portfolio Shoot</li>
              <li>Brand Ambassadorship (6 Months)</li>
            </ul>
          </div>

          {/* Grand Winner */}
          <div className="order-1 md:order-2 bg-white p-12 border-2 border-[#C5A059] text-center flex flex-col items-center transform md:-translate-y-8 shadow-2xl relative">
            <div className="absolute -top-6 bg-[#C5A059] text-white px-6 py-2 text-xs font-bold uppercase tracking-widest">
              The Grand Title
            </div>
            <Crown className="text-[#C5A059] w-16 h-16 mb-6" />
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-2">Winner 2026</span>
            <h3 className="text-4xl font-serif text-[#1A1A1A] mb-4">Vogue Vista Queen</h3>
            <p className="text-5xl font-bold text-[#1A1A1A] mb-8">$50,000</p>
            <ul className="text-zinc-600 font-medium space-y-4 mb-8">
              <li className="flex items-center justify-center gap-2"><Gem size={16} /> The Champagne Diamond Diadem</li>
              <li className="flex items-center justify-center gap-2"><Camera size={16} /> Vogue Vista Cover Feature</li>
              <li className="flex items-center justify-center gap-2"><Star size={16} /> Paris Fashion Week Invitation</li>
            </ul>
            <button className="w-full bg-[#1A1A1A] text-white py-4 font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-all">
              <a href="#register">Claim the Crown</a>
            </button>
          </div>

          {/* Third Place */}
          <div className="order-3 md:order-3 bg-[#FAF9F6] p-10 border border-zinc-100 text-center flex flex-col items-center">
            <Star className="text-zinc-400 w-12 h-12 mb-6" />
            <span className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-2">2nd Runner Up</span>
            <h3 className="text-2xl font-serif text-[#1A1A1A] mb-4">The Bronze Vista</h3>
            <p className="text-3xl font-bold text-[#1A1A1A] mb-6">$12,500</p>
            <ul className="text-zinc-500 text-sm space-y-3 italic">
              <li>Premium Cosmetics Vault</li>
              <li>Personal Branding Masterclass</li>
              <li>Social Media Feature Series</li>
            </ul>
          </div>
        </div>

        {/* 4th to 10th Place - The Elite List */}
        <div className="bg-[#F3F1ED] p-8 md:p-12">
          <div className="flex items-center justify-center gap-4 mb-10">
            <BookOpen className="text-[#C5A059]" />
            <h3 className="text-2xl font-serif text-[#1A1A1A]">The Elite Finalists (4th - 10th)</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {finalists.map((item, index) => (
              <div key={index} className="bg-white p-6 border border-zinc-200">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-zinc-100 px-2 py-1">
                    {item.rank}
                  </span>
                  <span className="text-[#C5A059] font-bold">{item.prize}</span>
                </div>
                <h4 className="font-serif text-lg mb-2">{item.title}</h4>
                <p className="text-zinc-500 text-xs italic">{item.perk}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-zinc-400 text-xs uppercase tracking-[0.2em]">
            * All Top 10 contestants receive an Official Vogue Vista Finalist Digital Badge
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prizes;