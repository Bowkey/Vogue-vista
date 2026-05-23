function Hero (){
  
  return(
  <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 opacity-60">
      <img 
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDlMNd7qHQLjDjQ-rYjvnOJSEbFbbV61pXIhpNgcTp5qed0hHdromrhTB5ArAhY-AzWI7CewdNQlLgegb9RVe6S06gmsygo-_8yRpqXtp9nFcltYPOtS8dZvc3eh-ga1f0E6fTsluJmSu8D_VOeGrv8Cl5jbz4DV_9ifgivinzuQjjx3vcPeyGlTkc83k/s1642/saruda-panyakham-06.jpg" 
        className="w-full h-full object-cover h-[60%]" 
        alt="Pageant Model"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"></div>
    </div>

    <div className="relative z-10 text-center px-4">
      <p className="text-gold tracking-[0.5em] uppercase text-sm mb-4">The Crown Awaits</p>
      <h1 className="text-6xl md:text-8xl font-serif italic text-white mb-8">Elegance Redefined</h1>
      <a href="#register"><button className="bg-[gold] text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">
        Apply for 2026
      </button></a>
    </div>
  </section>
  );
}

export default Hero;