import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Discovery', path: '/discovery' },
    { name: 'The Skin Journal', path: '/journal' },
    { name: 'Trust & About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Don't show public navbar on admin routes
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <nav className="bg-ivory border-b border-slate-grey/20 sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-header tracking-widest text-slate-dark">
          HARLEY STREET<br/><span className="text-sm tracking-widest text-slate-grey opacity-80 uppercase">Skin Bespoke</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm tracking-wide uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-slate-dark font-bold' : 'text-slate hover:text-blush'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-4">Book Assessment</Link>
          <Link to="/admin" className="text-slate hover:text-blush transition-colors" title="Clinic Portal">
            <User size={20} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ivory border-b border-slate-grey/20 py-4 px-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-wide uppercase text-slate hover:text-blush block py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center mt-2">Book Assessment</Link>
          <Link to="/admin" onClick={() => setIsOpen(false)} className="text-sm tracking-wide uppercase text-slate hover:text-blush block py-2 flex items-center gap-2">
            <User size={16} /> Clinic Portal
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
