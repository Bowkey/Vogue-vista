import React from 'react';
import { Calendar, MapPin, Sparkles, Trophy } from 'lucide-react';

function Timeline() {
  const steps = [
    {
      date: "October 1st - December 31st",
      title: "Global Applications",
      description: "Start your journey by submitting your portfolio and vision statement. We look for personality, poise, and purpose.",
      icon: <Sparkles className="w-5 h-5" />,
      status: "Open"
    },
    {
      date: "January 15th - February 10th",
      title: "Regional Screenings",
      description: "Shortlisted candidates are invited for virtual and physical interviews across 5 major fashion capitals.",
      icon: <MapPin className="w-5 h-5" />,
      status: "Upcoming"
    },
    {
      date: "March 5th - March 15th",
      title: "The Vista Boot Camp",
      description: "10 days of intensive training in catwalk, public speaking, and personal branding with industry experts.",
      icon: <Calendar className="w-5 h-5" />,
      status: "Upcoming"
    },
    {
      date: "April 20th, 2026",
      title: "The Grand Finale",
      description: "The star-studded night where elegance meets excellence. A live global broadcast to crown the next Vogue Vista.",
      icon: <Trophy className="w-5 h-5" />,
      status: "Final Event"
    }
  ];

  return (
    <section id="timeline" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mr-48"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-gold tracking-[0.3em] uppercase text-sm font-bold mb-4">The Journey</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">
            Road to the Crown
          </h3>
          <div className="w-20 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Vertical Line - Hidden on small mobile, visible on tablet+ */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-gold/50 via-gold/20 to-transparent hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2 p-4">
                  <div 
                    className={`bg-zinc-950 border border-white/10 p-8 rounded-sm hover:border-gold/40 transition-all duration-500 group ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    <span className="text-gold text-xs font-bold tracking-widest uppercase block mb-2">
                      {step.date}
                    </span>
                    <h4 className="text-2xl font-serif text-white mb-4 group-hover:italic transition-all">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                      {step.description}
                    </p>
                    <div className={`mt-6 flex items-center space-x-2 text-[10px] tracking-tighter uppercase font-bold ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="px-3 py-1 border border-gold/30 text-gold rounded-full">
                        {step.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Icon Circle */}
                <div className="relative flex items-center justify-center w-12 h-12">
                  <div className="absolute w-12 h-12 bg-black border border-gold rounded-full z-10 flex items-center justify-center text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    {step.icon}
                  </div>
                </div>

                {/* Empty Space for alignment on Desktop */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-500 italic text-sm mb-6">Dates are subject to change based on international travel regulations.</p>
          <a href="#apply" className="inline-block border-b-2 border-gold text-white pb-2 hover:text-gold transition-all uppercase tracking-widest text-xs font-bold">
            Download Full Schedule (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Timeline;