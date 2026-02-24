import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Map, PhoneCall, Menu, X, Building } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Discovery', path: '/discovery' },
    { name: 'Lifestyle Guide', path: '/lifestyle' },
    { name: 'Trust & About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="navbar-brand">
          <Building className="brand-icon" size={28} />
          <div className="brand-text">
            <span className="brand-name">Sol y Mar</span>
            <span className="brand-sub">Elite Brokers</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={`nav-link ${isActive(link.path)}`}>
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="primary-btn nav-btn">
            <PhoneCall size={18} style={{ marginRight: '8px' }} />
            Inquire Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`mobile-nav-link ${isActive(link.path)}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
