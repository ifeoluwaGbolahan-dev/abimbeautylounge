import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Academy', href: '#academy' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-50/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-2 group"
        >
          <span className={`font-serif text-2xl font-semibold tracking-wide transition-colors ${
            scrolled ? 'text-primary-800' : 'text-primary-400'
          }`}>
            Abim
          </span>
          <span className={`font-serif text-2xl font-light tracking-wide transition-colors ${
            scrolled ? 'text-primary-600 group-hover:text-primary-700' : 'text-neutral-50 group-hover:text-primary-300'
          }`}>
            Beauty Lounge
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className={`text-sm font-medium tracking-wide transition-colors relative group ${
                scrolled ? 'text-neutral-700 hover:text-primary-600' : 'text-neutral-50 hover:text-primary-300'
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="flex items-center gap-2 bg-primary-700 hover:bg-primary-800 text-neutral-50 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </a>
        </div>

        <button
          className={`lg:hidden ${scrolled ? 'text-neutral-900' : 'text-neutral-50'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-neutral-50/98 backdrop-blur-md px-6 py-6 flex flex-col gap-4 mt-3 border-t border-neutral-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-neutral-700 hover:text-primary-700 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            className="flex items-center justify-center gap-2 bg-primary-700 text-neutral-50 px-5 py-3 rounded-full text-sm font-medium mt-2"
          >
            <Phone className="w-4 h-4" />
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
