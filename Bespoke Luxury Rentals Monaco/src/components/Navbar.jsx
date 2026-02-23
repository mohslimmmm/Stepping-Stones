import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
          <NavLink to="/discovery" className={({isActive}) => `nav-link${isActive ? ' nav-active' : ''}`} onClick={closeMenu}>Discovery</NavLink>
          <NavLink to="/lifestyle" className={({isActive}) => `nav-link${isActive ? ' nav-active' : ''}`} onClick={closeMenu}>Lifestyle</NavLink>
          <NavLink to="/trust" className={({isActive}) => `nav-link${isActive ? ' nav-active' : ''}`} onClick={closeMenu}>Trust & About</NavLink>
          <NavLink to="/contact" className={({isActive}) => `nav-link${isActive ? ' nav-active' : ''}`} onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/admin" end className="nav-link btn-host" onClick={closeMenu}>
            <Key size={16} className="btn-icon" /> Host Login
          </NavLink>
        </div>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
