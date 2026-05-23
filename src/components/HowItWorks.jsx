import React from 'react';
import { Camera, MonitorPlay, Users, Award } from 'lucide-react';

function HowItWorks (){

  
  const steps = [
    { icon: <Camera />, title: "Digital Portfolio", desc: "Upload 5 professional photos and a 60-second video intro." },
    { icon: <Users />, title: "Social Voting", desc: "Fans vote for you daily. The top 50 advance based on engagement." },
    { icon: <MonitorPlay />, title: "Virtual Interviews", desc: "Participate in live Zoom screenings with international scouts." },
    { icon: <Award />, title: "Online Finale", desc: "A live-streamed crowning ceremony watched by millions." }
  ];

  return (
    <section className="py-24 bg-[#F3F1ED]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-serif text-3xl italic mb-16 underline decoration-[#C5A059] underline-offset-8">The Online Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059] shadow-sm group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-3">{step.title}</h4>
              <p className="text-zinc-500 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;