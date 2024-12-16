import TranslationCard from './TranslationCard';

const Translations = () => {
  const translations = [
    {
      title: "A Soberania de Deus",
      author: "Arthur W. Pink",
      excerpt: "Uma exploração profunda sobre o governo soberano de Deus sobre toda a criação..."
    },
    {
      title: "O Evangelho do Reino",
      author: "Charles H. Spurgeon",
      excerpt: "Uma análise poderosa da natureza e extensão do reino de Cristo..."
    },
    {
      title: "Graça Abundante",
      author: "John Bunyan",
      excerpt: "Um testemunho pessoal da graça transformadora de Deus..."
    }
  ];

  return (
    <section id="traducoes" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy text-center mb-12">
          Traduções em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations.map((translation, index) => (
            <TranslationCard key={index} {...translation} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Translations;