import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#traducoes', label: 'Traduções' },
    { href: '#videos', label: 'Vídeos' },
    { href: '#blog', label: 'Blog' },
    { href: '#quem-somos', label: 'Quem Somos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/80 backdrop-blur-md z-50 border-b border-navy/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#" 
            className="text-2xl font-playfair font-bold text-navy hover:text-accent transition-colors duration-300"
          >
            Cristocentrismo
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-navy/80 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-navy/5 bg-cream/95 backdrop-blur-md animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-navy/80 hover:text-accent transition-colors duration-300 text-sm tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;