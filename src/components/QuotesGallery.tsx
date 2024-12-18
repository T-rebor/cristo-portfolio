import { Card, CardContent } from './ui/card';

const QuotesGallery = () => {
  const quotes = [
    {
      text: "A verdadeira teologia é prática, e a prática verdadeira é a melhor teologia.",
      author: "Martinho Lutero",
    },
    {
      text: "A graça não é simplesmente pequena ou grande; ela é livre.",
      author: "João Calvino",
    },
    {
      text: "Há mais misericórdia em Cristo do que pecado em nós.",
      author: "Richard Sibbes",
    },
  ];

  return (
    <section id="citacoes" className="bg-cream dark:bg-darknavy py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Citações dos Reformadores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <Card key={index} className="hover-lift bg-white/50 dark:bg-navy/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">
                  "{quote.text}"
                </blockquote>
                <cite className="text-softgray block text-right">
                  — {quote.author}
                </cite>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesGallery;