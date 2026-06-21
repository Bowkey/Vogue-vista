import React from 'react';
import { Globe, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const pillars = [
    {
      icon: <Globe size={20} />,
      title: "Borderless Opportunity",
      text: "We’ve removed the travel barriers. From small villages to mega-cities, any visionary can compete on our global digital stage."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Integrity & Transparency",
      text: "Our blockchain-verified voting system ensures that every heart and every vote is authentic and fair."
    },
    {
      icon: <Zap size={20} />,
      title: "Digital Empowerment",
      text: "Beyond the crown, we provide contestants with masterclasses in personal branding, social media growth, and digital presence."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF9F6] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Editorial Image Composition */}
          <div className="relative">
            {/* The Main Image */}
            <div className="relative z-10 aspect-[3/4] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" 
                alt="High Fashion Editorial" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            
            {/* Decorative Floating Box */}
            <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 bg-[#C5A059] p-8 text-white z-20">
              <Sparkles className="mb-4" />
              <p className="font-serif italic text-xl leading-snug">
                "Beauty is no longer defined by geography, but by the strength of one's vision."
              </p>
            </div>

            {/* Background Accent */}
            <div className="absolute top-10 -left-10 w-full h-full border-2 border-zinc-200 -z-10 hidden lg:block"></div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:pl-10">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-[#1A1A1A] leading-tight mb-8">
              Redefining the <br /> Virtual Runway
            </h2>
            
            <div className="space-y-6 text-zinc-500 font-light leading-relaxed text-lg">
              <p>
                Founded in 2023, <span className="text-[#1A1A1A] font-medium italic">Vogue Vista</span> emerged as a response to a changing world. We realized that traditional pageantry was often limited to those with the means to travel and the luck of proximity.
              </p>
              <p>
                We built a platform where **Elegance meets Innovation**. Vogue Vista is the world’s premier 100% online beauty and talent competition, designed to discover icons who are ready to lead in the digital age. 
              </p>
            </div>

            {/* Pillars/Values Grid */}
            <div className="mt-12 grid gap-8">
              {pillars.map((pillar, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-zinc-100 flex items-center justify-center text-[#C5A059] shadow-sm group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A] uppercase tracking-widest text-xs mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;