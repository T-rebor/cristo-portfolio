const Videos = () => {
  const videos = [
    {
      title: "A Doutrina da Eleição",
      thumbnail: "https://img.youtube.com/vi/DEMO1/maxresdefault.jpg",
      url: "https://youtube.com/watch?v=DEMO1"
    },
    {
      title: "Pregação Expositiva",
      thumbnail: "https://img.youtube.com/vi/DEMO2/maxresdefault.jpg",
      url: "https://youtube.com/watch?v=DEMO2"
    }
  ];

  return (
    <section id="videos" className="section-padding bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy text-center mb-12">
          Vídeos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-playfair font-bold text-navy mb-2">
                {video.title}
              </h3>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy hover:text-softgray transition-colors duration-200 font-medium"
              >
                Assistir no YouTube →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;