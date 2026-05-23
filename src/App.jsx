import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero';
import PastWinners from './components/PastWinners.jsx';
import ContestantGallery from './components/ContestantGallery';
import HowItWorks from './components/HowItWorks';
import Timeline from './components/Timeline';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Prizes from './components/Prizes';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Requirements from './components/Requirements.jsx';

function App() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Requirements />
      <PastWinners />
      
      {/* Introduction to the Online Concept */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <span className="text-[#C5A059] uppercase tracking-[0.4em] text-xs font-bold mb-4 block">A New Era</span>
        <h2 className="text-4xl md:text-5xl font-serif italic mb-6">The World is Your Runway</h2>
        <p className="text-zinc-500 text-lg leading-relaxed font-light">
          Vogue Vista is a 100% digital pageant. No travel costs, no borders. 
          Through high-definition virtual staging and global public voting, 
          we find the next face of fashion from anywhere on the planet.
        </p>
      </section>

      <HowItWorks />
      {/* <ContestantGallery /> */}
      <Prizes />
      <Timeline />
      <Sponsors />
      <Registration />

      <Contact />
     

      <footer className="py-12 bg-white border-t border-zinc-200 text-center">
        <h1 className="text-xl font-serif font-bold tracking-widest mb-4">VOGUE VISTA</h1>
        <p className="text-zinc-400 text-xs uppercase tracking-widest">© {new Date().getFullYear()} Virtual Pageantry International</p>
      </footer>
    </div>
  );
}

export default App;