import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, MapPin, Info, Phone, LogIn } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo neon-text">
          <span className="logo-icon">🏎️</span>
          DESERT APEX
        </Link>
        
        <nav className="navbar-links">
          <Link to="/fleet" className={`nav-link ${isActive('/fleet') ? 'active' : ''}`}>
            <Car size={18} /> Fleet
          </Link>
          <Link to="/lifestyle" className={`nav-link ${isActive('/lifestyle') ? 'active' : ''}`}>
            <MapPin size={18} /> Lifestyle
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            <Info size={18} /> About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            <Phone size={18} /> Contact
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link to="/admin" className="btn-outline admin-login-btn">
            <LogIn size={18} /> Agent Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
