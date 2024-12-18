const Hero = () => {
  return (
    <section id="inicio" className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-cream to-white">
      <div className="responsive-container text-center">
        <h1 className="text-4xl md:text-7xl font-playfair font-bold text-navy mb-8 leading-tight animate-fade-in text-shadow">
          Soli Deo Gloria
        </h1>
        <p className="text-xl md:text-2xl text-softgray font-playfair italic mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          "Porque dele, e por meio dele, e para ele são todas as coisas. 
          A ele, pois, a glória eternamente. Amém!"
          <span className="block text-base mt-4">Romanos 11:36</span>
        </p>
        <div className="max-w-2xl mx-auto text-lg text-navy/80 bg-white/50 backdrop-blur-sm p-8 rounded-lg shadow-lg hover-lift animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>
            Bem-vindo ao Cristocentrismo, um ministério dedicado à proclamação das verdades eternas
            da fé Batista Reformada através de recursos teológicos cuidadosamente selecionados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;