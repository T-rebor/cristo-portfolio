const Hero = () => {
  return (
    <section id="inicio" className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-cream to-white dark:from-darknavy dark:to-darkgray">
      <div className="container mx-auto container-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-navy dark:text-[#8B4513] mb-12 leading-tight animate-fade-in">
            Soli Deo Gloria
          </h1>
          <p className="text-xl md:text-2xl text-softgray font-playfair italic mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            "Porque dele, e por meio dele, e para ele são todas as coisas. 
            A ele, pois, a glória eternamente. Amém!"
            <span className="block text-base mt-4">Romanos 11:36</span>
          </p>
          <div className="max-w-2xl mx-auto text-lg text-navy/80 dark:text-cream/80 bg-white/50 dark:bg-darkgray/50 backdrop-blur-sm p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p>
              Bem-vindo ao Cristocentrismo, um ministério dedicado à proclamação das verdades eternas
              da fé Batista Reformada através de recursos teológicos cuidadosamente selecionados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;