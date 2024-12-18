import { Card, CardContent } from './ui/card';

const Timeline = () => {
  const events = [
    {
      year: "1517",
      title: "95 Teses",
      description: "Martinho Lutero publica as 95 teses em Wittenberg",
    },
    {
      year: "1536",
      title: "Institutas",
      description: "Primeira edição das Institutas da Religião Cristã de João Calvino",
    },
    {
      year: "1646",
      title: "Confissão de Westminster",
      description: "Publicação da Confissão de Fé de Westminster",
    },
  ];

  return (
    <section id="timeline" className="bg-white dark:bg-navy py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Linha do Tempo da Reforma
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/20"></div>
          {events.map((event, index) => (
            <div key={index} className={`relative mb-8 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'} w-1/2`}>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <span className="text-accent font-bold text-xl mb-2 block">
                    {event.year}
                  </span>
                  <h3 className="font-bold mb-2">{event.title}</h3>
                  <p className="text-softgray">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;