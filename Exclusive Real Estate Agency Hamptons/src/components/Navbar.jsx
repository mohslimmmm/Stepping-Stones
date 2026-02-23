import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-out border-b border-transparent ${scrolled ? 'bg-background/90 backdrop-blur-xl border-primary/5 py-4' : 'bg-transparent py-8'} ${location.pathname !== '/' && !scrolled ? 'bg-background border-primary/5' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity group">
            <Anchor className="h-6 w-6 group-hover:rotate-12 transition-transform duration-500 ease-out" strokeWidth={1.5} />
            <span className="font-heading text-xl md:text-2xl tracking-wide">East End Exclusive</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative text-[11px] font-body tracking-[0.2em] uppercase transition-colors hover:text-accentBlue ${
                  location.pathname === link.path ? 'text-accentBlue font-bold' : 'text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-px bg-accentBlue transform origin-left transition-transform duration-300 ease-out ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-accentBlue focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl absolute w-full border-b border-primary/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.4 }}
                  key={link.name}
                  className="w-full text-center"
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="inline-block py-2 text-primary font-body uppercase tracking-[0.2em] text-xs hover:text-accentBlue transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-accentBlue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
