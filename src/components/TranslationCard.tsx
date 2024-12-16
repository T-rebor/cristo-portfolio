interface TranslationCardProps {
  title: string;
  author: string;
  excerpt: string;
}

const TranslationCard = ({ title, author, excerpt }: TranslationCardProps) => {
  return (
    <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-navy/5 animate-fade-in">
      <h3 className="text-xl font-playfair font-bold text-navy mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-softgray mb-4 text-sm">{author}</p>
      <p className="text-navy/80 mb-6 leading-relaxed">{excerpt}</p>
      <button className="text-accent hover:text-navy transition-colors duration-300 font-medium inline-flex items-center gap-2">
        Ler mais
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default TranslationCard;