import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Key } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Is transparent on home page when at top
  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <nav className={`navbar ${isTransparent ? 'navbar-transparent' : 'navbar-solid'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          Riviera Royale
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/discovery" className="nav-link" onClick={closeMenu}>Discovery</Link>
          <Link to="/lifestyle" className="nav-link" onClick={closeMenu}>Lifestyle</Link>
          <Link to="/trust" className="nav-link" onClick={closeMenu}>Trust & About</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          <Link to="/admin" className="nav-link btn-host" onClick={closeMenu}>
            <Key size={16} className="btn-icon" /> Host Login
          </Link>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
