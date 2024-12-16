interface TranslationCardProps {
  title: string;
  author: string;
  excerpt: string;
}

const TranslationCard = ({ title, author, excerpt }: TranslationCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-playfair font-bold text-navy mb-2">{title}</h3>
      <p className="text-softgray mb-4">por {author}</p>
      <p className="text-navy mb-4">{excerpt}</p>
      <button className="text-navy hover:text-softgray transition-colors duration-200 font-medium">
        Ler mais →
      </button>
    </div>
  );
};

export default TranslationCard;