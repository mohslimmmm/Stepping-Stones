import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Phone, Globe } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/discovery' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Don't show public navbar on admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-dark-slate/10 sticky top-0 z-50 shadow-soft">
      {/* Top Bar */}
      <div className="bg-dark-slate text-warm-white py-2 px-4 hidden md:block">
        <div className="container flex justify-between items-center text-xs tracking-widest uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={12} className="text-gold" /> +34 952 000 000</span>
            <span className="flex items-center gap-2"><Globe size={12} className="text-gold" /> Marbella, Spain</span>
          </div>
          <div className="flex gap-4">
            <Link to="/admin" className="hover:text-gold transition-colors flex items-center gap-2" title="Agent Login">
              <User size={12} /> Agent Login
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-header text-dark-slate leading-none">
          Sol y Mar<br/><span className="text-sm tracking-widest text-terracotta uppercase font-body font-bold">Elite Brokers</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm tracking-wide uppercase font-bold transition-colors duration-300 ${location.pathname === link.path ? 'text-terracotta' : 'text-dark-slate hover:text-terracotta'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-2 shadow-soft hover-lift">Inquire</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-dark-slate" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-dark-slate/10 py-4 px-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide uppercase font-bold text-dark-slate hover:text-terracotta block py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center mt-2">Inquire</Link>
          <div className="mt-4 pt-4 border-t border-dark-slate/10">
            <Link to="/admin" onClick={() => setIsOpen(false)} className="text-sm tracking-wide uppercase font-bold text-dark-slate hover:text-terracotta flex items-center gap-2 py-2">
              <User size={16} /> Agent Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
