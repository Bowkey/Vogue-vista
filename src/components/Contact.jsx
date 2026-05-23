import React from 'react';
import { Mail, MessageCircle, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const whatsapp= "https://wa.me/message/6EEAACPGYQHFB1";
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Official Inquiry",
      label: "Email Support",
      value: "prime.voguevista@gmail.com",
      link: "mailto:prime.voguevista@gmail.com",
      description: "For formal applications, sponsorship inquiries, and press relations."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Instant Assistance",
      label: "WhatsApp Support",
      value: "Whatsapp Chat",
      link: "https://wa.me/message/6EEAACPGYQHFB1", // Replace with your actual number
      description: "Fast-track support for registration issues and payment verification."
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Community Channel",
      label: "Telegram Official",
      value: "@VogueVistaOfficial",
      link: "https://t.me/VogueVistaOfficial", // Replace with your actual handle
      description: "Join our official broadcast for live updates and winner announcements."
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#FAF9F6] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif italic text-[#1A1A1A]">We Are Here To Guide Your Journey</h2>
          </div>
          <p className="text-zinc-500 text-sm md:text-right max-w-xs leading-relaxed italic">
            "Every icon starts with a single question. Reach out to our concierge team."
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-0 border border-zinc-200">
          {contactMethods.map((method, index) => (
            <div 
              key={index} 
              className={`p-10 flex flex-col bg-white hover:bg-[#F3F1ED] transition-all duration-500 group ${
                index !== contactMethods.length - 1 ? 'md:border-r border-b md:border-b-0 border-zinc-200' : ''
              }`}
            >
              <div className="text-[#C5A059] mb-8 transform group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>
              
              <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">
                {method.title}
              </h4>
              <h3 className="text-xl font-serif text-[#1A1A1A] mb-4">
                {method.label}
              </h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-8 min-h-[40px]">
                {method.description}
              </p>
              
              <a 
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-between text-sm font-bold text-[#1A1A1A] border-t border-zinc-100 pt-6 group-hover:text-[#C5A059] transition-colors"
              >
                <span>{method.value}</span>
                <ArrowRight size={16} className="transform -rotate-45 group-hover:rotate-0 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Support Hours */}
        <div className="mt-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
            Concierge Active: Mon — Sat, 09:00 - 21:00 GMT
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;