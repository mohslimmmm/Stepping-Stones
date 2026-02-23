import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Discovery', path: '/discovery' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'Trust & About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'} ${location.pathname !== '/' && !scrolled ? 'bg-background' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-accentBlue transition-colors group">
            <Anchor className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-heading text-xl md:text-2xl font-bold tracking-tight">East End Exclusive</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-body tracking-widest uppercase transition-colors hover:text-accentBlue ${
                  location.pathname === link.path ? 'text-accentBlue font-bold' : 'text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accentBlue focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background absolute w-full border-b border-primary/10 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-primary font-body uppercase tracking-wider text-sm hover:text-accentBlue hover:bg-primary/5"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
