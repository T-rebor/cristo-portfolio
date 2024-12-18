import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas atualizações em breve.",
    });
    setEmail('');
  };

  return (
    <section id="newsletter" className="bg-cream dark:bg-darknavy py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">
            Mantenha-se Atualizado
          </h2>
          <p className="text-softgray mb-8 animate-fade-in">
            Receba as últimas traduções e recursos diretamente em seu e-mail.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-xs"
              required
            />
            <Button type="submit">Inscrever-se</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;