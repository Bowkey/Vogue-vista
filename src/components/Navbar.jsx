import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Timeline', href: '#timeline' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-black/90 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em] text-white">
          VOGUE VISTA
        </h1>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-10 text-xs uppercase tracking-[0.15em] text-gray-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gold transition-colors font-medium">
              {link.name}
            </a>
          ))}
          <a href="#register"><button className="bg-white text-black px-6 py-2.5 font-bold hover:bg-gold transition-all duration-300 transform hover:scale-105">
            Register Now
          </button></a>
        </div>

        {/* MOBILE TOGGLE BUTTON (Visible only on Mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU (Slide Down) */}
      <div className={`
        absolute top-20 left-0 w-full bg-black border-b border-white/10 transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}
      `}>
        <div className="flex flex-col p-8 space-y-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // Close menu on click
              className="text-white text-lg font-serif italic tracking-widest hover:text-gold"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-gold text-black w-full py-4 font-bold uppercase tracking-widest">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;