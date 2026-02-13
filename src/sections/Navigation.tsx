import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavigationProps {
  scrollY: number;
}

const Navigation = ({ scrollY }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    if (scrollY > lastScrollY && scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(scrollY);
  }, [scrollY, lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div
        className={`glass rounded-full px-4 py-2 flex items-center gap-6 transition-all duration-300 ${
          scrollY > 50 ? 'shadow-glow' : ''
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-2 group"
        >
          <Terminal className="w-5 h-5 text-red group-hover:text-gold transition-colors" />
          <span className="font-orbitron font-bold text-sm tracking-wider">
            <span className="text-red">INNO</span>
            <span className="text-gold">HACK</span>
            <span className="text-white/60">_2.0</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="relative px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors group"
            >
              <span className="glitch-text" data-text={link.name}>
                {link.name}
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#register"
          className="hidden md:block px-4 py-1.5 bg-red hover:bg-red-dark text-white text-xs font-medium rounded-full transition-all duration-300 hover:shadow-glow btn-shine"
        >
          Register Now
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 text-white/70 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass rounded-2xl overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="mt-2 px-4 py-2 bg-red text-white text-sm font-medium rounded-lg text-center"
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
