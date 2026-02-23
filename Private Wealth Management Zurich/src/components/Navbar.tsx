import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
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
    { name: 'Philosophy', path: '/#philosophy' },
    { name: 'Services', path: '/services' },
    { name: 'Insights', path: '/insights' },
    { name: 'Trust', path: '/trust' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <Shield className={`w-8 h-8 ${scrolled ? 'text-deep-indigo' : 'text-white'}`} strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className={`text-xl font-medium tracking-widest uppercase ${scrolled ? 'text-deep-indigo' : 'text-white'}`} style={{ fontFamily: 'var(--header-font)' }}>
              Aegis Swiss
            </span>
            <span className={`text-[10px] tracking-[0.3em] uppercase opacity-80 ${scrolled ? 'text-dark-slate' : 'text-silver'}`}>
              Private Wealth
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm tracking-widest uppercase transition-colors hover:text-silver ${scrolled ? 'text-dark-slate' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/admin" 
            className={`flex items-center gap-2 px-6 py-2.5 rounded-[4px] border text-xs tracking-widest uppercase transition-all ${
              scrolled 
                ? 'border-deep-indigo text-deep-indigo hover:bg-deep-indigo hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-deep-indigo'
            }`}
          >
            <User size={14} />
            Client Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-dark-slate' : 'text-white'} /> : <Menu className={scrolled ? 'text-dark-slate' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-10 flex flex-col items-center gap-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-widest uppercase text-dark-slate hover:text-deep-indigo"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/admin" 
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center gap-2 px-8 py-3 bg-deep-indigo text-white rounded-[4px] text-sm tracking-widest uppercase"
            >
              <User size={16} />
              Client Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
