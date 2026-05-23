import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const winners = [
  {
    year: "2024",
    name: "Isabella Montalcini",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1529139513055-07f912c5055e?auto=format&fit=crop&q=80",
    quote: "Vogue Vista didn't just give me a crown; it gave me a global platform to advocate for sustainable fashion."
  },
  {
    year: "2023",
    name: "Zuri Okoro",
    country: "Nigeria",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80",
    quote: "True elegance is the courage to be yourself on the world's most prestigious stage."
  },
  {
    year: "2022",
    name: "Elena Rodriguez",
    country: "Mexico",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80",
    quote: "The journey to the crown taught me that leadership and grace are two sides of the same coin."
  }
];

const WinnersCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === winners.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? winners.length - 1 : current - 1);
  };

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-gold tracking-[0.3em] uppercase text-xs font-bold mb-4">The Hall of Fame</h2>
            <h3 className="text-4xl md:text-5xl font-serif italic text-white leading-tight">Our Global Icons</h3>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex space-x-4 mb-2">
            <button 
              onClick={prevSlide}
              className="p-3 border border-white/10 text-white hover:bg-gold hover:text-black transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 border border-white/10 text-white hover:bg-gold hover:text-black transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Body */}
        <div className="relative h-[600px] md:h-[500px] w-full flex flex-col md:flex-row items-center">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 h-full relative overflow-hidden">
            {winners.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 to-transparent"></div>
              </div>
            ))}
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 bg-black h-full p-8 md:p-16 flex flex-col justify-center relative border-y border-r border-white/5">
            {winners.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === current ? 'opacity-100 translate-x-0' : 'absolute opacity-0 -translate-x-10 pointer-events-none'
                }`}
              >
                <span className="text-gold font-bold tracking-widest text-sm uppercase">Class of {slide.year}</span>
                <h4 className="text-3xl md:text-5xl font-serif text-white mt-2 mb-1 italic">{slide.name}</h4>
                <p className="text-gray-500 uppercase tracking-[0.2em] text-xs mb-8">{slide.country}</p>
                
                <div className="relative">
                  <Quote className="text-gold/20 absolute -top-4 -left-6 w-12 h-12" />
                  <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed italic">
                    "{slide.quote}"
                  </p>
                </div>
              </div>
            ))}

            {/* Pagination Indicators */}
            <div className="absolute bottom-10 left-8 md:left-16 flex space-x-2">
              {winners.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1 transition-all duration-500 ${index === current ? 'w-12 bg-gold' : 'w-4 bg-white/20'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WinnersCarousel;