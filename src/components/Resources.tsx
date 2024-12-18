import { Book, Headphones, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const Resources = () => {
  const resources = [
    {
      title: "E-books Gratuitos",
      description: "Biblioteca digital com obras clássicas reformadas",
      icon: Book,
    },
    {
      title: "Materiais de Estudo",
      description: "Guias e recursos para aprofundamento teológico",
      icon: FileText,
    },
    {
      title: "Podcasts",
      description: "Conteúdo em áudio sobre teologia reformada",
      icon: Headphones,
    },
  ];

  return (
    <section id="recursos" className="bg-white dark:bg-darkgray py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">
          Recursos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 mb-4">
                  <resource.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="mt-2">
                  Explorar →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;