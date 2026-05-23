import React from 'react';
import { Check, User, Globe, Camera, ShieldAlert, Heart } from 'lucide-react';

const Requirements = () => {
  const criteria = [
    {
      icon: <User size={20} />,
      title: "Age Eligibility",
      desc: "Applicants must be between the ages of 16 and 28 at the time of registration."
    },
    {
      icon: <Globe size={20} />,
      title: "Nationality",
      desc: "Open to all nationalities. As a digital pageant, we welcome visionaries from every continent."
    },
    {
      icon: <Heart size={20} />,
      title: "Marital Status",
      desc: "We celebrate modern inclusivity. Applicants of all marital statuses are eligible to apply."
    },
    {
      icon: <Camera size={20} />,
      title: "Digital Presence",
      desc: "Must have an active social media presence and the ability to record high-quality video content."
    },
    {
      icon: <ShieldAlert size={20} />,
      title: "Legal Standing",
      desc: "Candidates must have no prior criminal record and must uphold the values of the Vogue Vista brand."
    }
  ];

  return (
    <section id="requirements" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-5">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Criteria</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A] leading-tight mb-8">
              Is the Crown <br /> Meant for You?
            </h2>
            <p className="text-zinc-500 font-light text-lg leading-relaxed mb-8">
              Vogue Vista seeks more than just a face; we seek a voice. Our requirements are designed to find individuals with the discipline, grace, and digital savvy to lead in a globalized world.
            </p>
            
            {/* Age Highlight Box */}
            <div className="bg-[#F3F1ED] p-8 border-l-4 border-[#C5A059]">
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Age Requirement</h4>
              <p className="text-3xl font-serif italic text-[#C5A059]">16 — 28 Years Old</p>
              <p className="text-xs text-zinc-400 mt-4 leading-relaxed uppercase tracking-tighter">
                * Applicants under 18 must provide a notarized letter of consent from a legal guardian upon selection for the semi-finals.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed List */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
            {criteria.map((item, index) => (
              <div key={index} className="p-6 border border-zinc-100 hover:border-[#C5A059]/30 transition-colors group bg-[#FAF9F6]">
                <div className="w-10 h-10 bg-white flex items-center justify-center text-[#C5A059] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-[#1A1A1A] mb-3 flex items-center gap-2">
                  <Check size={14} className="text-[#C5A059]" /> {item.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Closing Note */}
        <div className="mt-16 text-center border-t border-zinc-100 pt-12">
          <p className="text-zinc-400 text-xs italic">
            Note: Vogue Vista reserves the right to request proof of age via government-issued identification during the verification process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Requirements;