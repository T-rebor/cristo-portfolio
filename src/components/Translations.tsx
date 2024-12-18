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
      <div className="responsive-container">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy text-center mb-12 text-shadow animate-fade-in">
          Traduções em Destaque
        </h2>
        <div className="responsive-grid">
          {translations.map((translation, index) => (
            <div key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <TranslationCard {...translation} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Translations;