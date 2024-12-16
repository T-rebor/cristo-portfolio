import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
    <header className="fixed top-0 left-0 right-0 bg-cream/80 dark:bg-navy/80 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a 
            href="#" 
            className="text-2xl font-playfair font-bold text-navy dark:text-cream hover:text-accent transition-colors duration-300 animate-fade-in"
          >
            Cristocentrismo
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 animate-slide-in">
            <nav className="flex space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-navy/80 dark:text-cream/80 hover:text-accent dark:hover:text-accent transition-colors duration-300 text-sm tracking-wide hover:scale-105 transform"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-navy dark:text-cream animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 text-navy dark:text-cream animate-fade-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-navy/5 dark:border-cream/5 bg-cream/95 dark:bg-navy/95 backdrop-blur-md animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-navy/80 dark:text-cream/80 hover:text-accent dark:hover:text-accent transition-colors duration-300 text-sm tracking-wide"
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