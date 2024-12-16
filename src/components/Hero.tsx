const Hero = () => {
  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-navy mb-6">
          Soli Deo Gloria
        </h1>
        <p className="text-xl md:text-2xl text-softgray font-playfair italic mb-8">
          "Porque dele, e por meio dele, e para ele são todas as coisas. A ele, pois, a glória eternamente. Amém!"
          <br />
          <span className="text-base">Romanos 11:36</span>
        </p>
        <p className="max-w-2xl mx-auto text-lg text-navy">
          Bem-vindo ao Cristocentrismo, um ministério dedicado à proclamação das verdades eternas
          da fé Batista Reformada através de recursos teológicos cuidadosamente selecionados.
        </p>
      </div>
    </section>
  );
};

export default Hero;