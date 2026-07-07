import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export default function Header({ darkMode, setDarkMode, onOpenBooking }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Celeste', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#F8F4EC]/90 dark:bg-[#121016]/90 border-gold/25 shadow-sm py-3'
          : 'bg-transparent border-transparent py-5'
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-white dark:bg-white/10 border border-[#D4AF37] rounded-full flex items-center justify-center shadow-sm">
              <span className="text-[#D4AF37] font-serif text-xl italic font-bold">C</span>
            </div>
            <span className="font-serif italic text-2xl tracking-tight text-[#2F2F2F] dark:text-cream group-hover:text-gold transition-colors duration-300">
              Celeste <span className="text-[#D4AF37]">Guidance</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.2em] text-[#2F2F2F]/80 dark:text-cream/80 hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-charcoal dark:text-cream transition-colors duration-300"
              aria-label="Toggle Dark Mode"
              id="theme-toggle"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-purple-700" />}
            </button>
            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2 bg-[#2F2F2F] dark:bg-[#F8F4EC] text-white dark:text-[#2F2F2F] rounded-full text-xs font-medium uppercase tracking-wider hover:bg-black dark:hover:bg-white active:scale-95 transition-all duration-300 cursor-pointer"
              id="header-book-btn"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Action Row */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-charcoal dark:text-cream transition-colors duration-300"
              aria-label="Toggle Dark Mode"
              id="mobile-theme-toggle"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-purple-700" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-charcoal dark:text-cream hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none"
              aria-label="Open Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden animate-fade-in" id="mobile-nav-panel">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-[#F8F4EC]/95 dark:bg-[#121016]/95 backdrop-blur-lg border-b border-black/5 dark:border-white/5 shadow-xl max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-medium text-charcoal/90 dark:text-cream/95 hover:bg-cream dark:hover:bg-white/5 hover:text-[#D4AF37]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 px-4 border-t border-black/5 dark:border-white/5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#2F2F2F] hover:bg-black transition-all duration-300"
                id="mobile-header-book-btn"
              >
                Book Your Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
