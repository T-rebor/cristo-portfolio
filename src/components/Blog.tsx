const Blog = () => {
  const posts = [
    {
      title: "A Importância da Teologia Sistemática",
      date: "15 de Março, 2024",
      excerpt: "Uma introdução à necessidade do estudo sistemático da teologia..."
    },
    {
      title: "Os Cinco Pontos do Calvinismo",
      date: "10 de Março, 2024",
      excerpt: "Explorando os princípios fundamentais da soteriologia reformada..."
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy text-center mb-12">
          Blog
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-playfair font-bold text-navy mb-2">
                {post.title}
              </h3>
              <p className="text-softgray mb-4">{post.date}</p>
              <p className="text-navy mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-navy hover:text-softgray transition-colors duration-200 font-medium"
              >
                Continuar lendo →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;