import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <h1>AURA</h1>
          <span>Aesthetics</span>
        </Link>
        
        <div className="desktop-menu">
          <Link to="/treatments" className="nav-link">Treatments</Link>
          <Link to="/lifestyle" className="nav-link">Lifestyle</Link>
          <Link to="/about" className="nav-link">Our Experts</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>
            Book Consultation
          </Link>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu glass-panel">
          <Link to="/treatments" className="nav-link">Treatments</Link>
          <Link to="/lifestyle" className="nav-link">Lifestyle</Link>
          <Link to="/about" className="nav-link">Our Experts</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/contact" className="btn-primary" style={{ padding: '0.75rem', marginTop: '1rem', textAlign: 'center' }}>
            Book Consultation
          </Link>
          <Link to="/admin" className="nav-link" style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            Staff Portal
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
