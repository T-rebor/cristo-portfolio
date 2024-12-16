const Footer = () => {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-playfair italic mb-4">
            "Porque dele, e por meio dele, e para ele são todas as coisas.
            A ele, pois, a glória eternamente. Amém!"
          </p>
          <p className="text-sm mb-2">Romanos 11:36</p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Cristocentrismo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;